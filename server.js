require('dotenv').config();
const dns = require('dns');
dns.setDefaultResultOrder('ipv4first');

const express = require('express');
const cors = require('cors');
const path = require('path');
const Razorpay = require('razorpay');
const crypto = require('crypto');

const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const multer = require('multer');

const app = express();
const upload = multer({ storage: multer.memoryStorage() });
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
if (process.env.MONGODB_URI && process.env.MONGODB_URI !== 'YOUR_MONGODB_CONNECTION_STRING') {
  mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('MongoDB connection error:', err));
} else {
  console.warn('WARNING: MONGODB_URI is not set. Database features will not work.');
}

// Database Schemas
const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  enrolledCourses: [String],
  currentSessionId: { type: String, default: null }
});
const User = mongoose.model('User', userSchema);

const otpSchema = new mongoose.Schema({
  email: String,
  otp: String,
  createdAt: { type: Date, default: Date.now, expires: 300 } // Expires in 5 mins
});
const Otp = mongoose.model('Otp', otpSchema);

const testResultSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  seriesId: String,
  testName: String,
  score: Number,
  maxScore: Number,
  correctCount: Number,
  wrongCount: Number,
  unattempted: Number,
  timeTakenSecs: Number,
  answers: mongoose.Schema.Types.Mixed, // stores playerState format
  date: { type: Date, default: Date.now }
});
const TestResult = mongoose.model('TestResult', testResultSchema);

const testSchema = new mongoose.Schema({
  testId: { type: String, unique: true }, // e.g. "gate_topicwise_test_1"
  questions: mongoose.Schema.Types.Mixed // Flexible array of questions
});
const Test = mongoose.model('Test', testSchema);

const answerSchema = new mongoose.Schema({
  testId: String,
  qIndex: Number,
  userEmail: String,
  userName: String,
  content: String,
  createdAt: { type: Date, default: Date.now }
});
const Answer = mongoose.model('Answer', answerSchema);

const bookmarkSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  testId: String,
  qKey: String, // testId_Q0
  qIndex: Number,
  text: String,
  subject: String,
  createdAt: { type: Date, default: Date.now }
});
const Bookmark = mongoose.model('Bookmark', bookmarkSchema);

const testStateSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  testId: String,
  playerState: mongoose.Schema.Types.Mixed,
  playerCurrent: Number,
  playerTimerSecs: Number,
  updatedAt: { type: Date, default: Date.now }
});
const TestState = mongoose.model('TestState', testStateSchema);

app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

app.use((req, res, next) => {
  console.log(`[HTTP] ${req.method} ${req.originalUrl}`);
  res.set('Cache-Control', 'no-store, no-cache, must-revalidate, private');
  next();
});

// Serve static frontend files
app.use(express.static(path.join(__dirname, '/')));

// Initialize Firebase Admin (Modular API for v12+)
const { initializeApp, cert } = require('firebase-admin/app');
const { getAuth } = require('firebase-admin/auth');

let serviceAccount;
if (process.env.FIREBASE_SERVICE_ACCOUNT_JSON) {
  try {
    serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_JSON);
  } catch (err) {
    console.error("Error parsing FIREBASE_SERVICE_ACCOUNT_JSON", err);
  }
} else {
  try {
    serviceAccount = require('./firebase-service-account.json');
  } catch (err) {
    console.warn("Local firebase-service-account.json not found.");
  }
}

if (serviceAccount) {
  initializeApp({
    credential: cert(serviceAccount)
  });
  console.log("Firebase Admin Initialized successfully.");
} else {
  console.warn("WARNING: Firebase Admin not initialized. Login will fail.");
}

// Firebase Login API
app.post('/api/firebase-login', async (req, res) => {
  const { idToken } = req.body;
  if (!idToken) return res.status(400).json({ success: false, message: 'Firebase ID Token required' });

  try {
    // 1. Verify the Firebase token
    const decodedToken = await getAuth().verifyIdToken(idToken);
    const email = decodedToken.email;
    const name = decodedToken.name || email.split('@')[0];

    // 2. Find or create user in MongoDB
    let user = { name, email, enrolledCourses: [] };
    let dbUser = await User.findOne({ email });
    if (!dbUser) {
      dbUser = await User.create({ name, email, enrolledCourses: [] });
    }
    user = { name: dbUser.name, email: dbUser.email, enrolledCourses: dbUser.enrolledCourses, _id: dbUser._id };

    // 3. Generate unique session ID for Single-Device Login (invalidates previous devices)
    const sessionId = (crypto.randomUUID ? crypto.randomUUID() : crypto.randomBytes(16).toString('hex'));
    dbUser.currentSessionId = sessionId;
    await dbUser.save();

    // 4. Generate our own backend JWT token (valid for 1 year, bound to this device session)
    const token = jwt.sign(
      { email: user.email, name: user.name, _id: user._id, sessionId },
      process.env.JWT_SECRET || 'fallback_secret_for_local_testing',
      { expiresIn: '365d' }
    );

    res.json({ success: true, token, user });
  } catch (err) {
    console.error("Firebase Login Error:", err);
    res.status(401).json({ success: false, message: 'Invalid Firebase token or Server Error' });
  }
});

// OTP API Endpoint (EmailJS HTTP API)
app.post('/api/send-otp', async (req, res) => {
  const { name, email } = req.body;
  if (!email) return res.status(400).json({ success: false, message: 'Email is required.' });

  const otp = Math.floor(100000 + Math.random() * 900000).toString();

  try {
    await Otp.deleteMany({ email });
    await Otp.create({ email, otp });
  } catch (err) {
    console.error("DB Error saving OTP", err);
    global.mockOtpStore = global.mockOtpStore || {};
    global.mockOtpStore[email] = otp;
  }

  // Check if Resend API key exists
  if (!process.env.RESEND_API_KEY) {
    return res.status(500).json({ success: false, message: 'Resend API key not configured in .env (RESEND_API_KEY)' });
  }

  const payload = {
    from: 'Gate Test Platform <no-reply@emaii.mohitwithglasses.art>',
    to: [email],
    subject: 'Your GATE Test Platform OTP',
    html: `
      <div style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px; margin: 0 auto; border: 1px solid #ddd; border-radius: 8px;">
        <h2 style="color: #14619C;">Hello ${name || 'Student'},</h2>
        <p>Your One-Time Password (OTP) for login is:</p>
        <div style="background-color: #f4f4f4; padding: 15px; text-align: center; font-size: 24px; font-weight: bold; letter-spacing: 5px; border-radius: 4px; margin: 20px 0;">
          ${otp}
        </div>
        <p>This OTP is valid for 5 minutes. Please do not share it with anyone.</p>
        <hr style="border: none; border-top: 1px solid #eee; margin-top: 30px;" />
        <p style="font-size: 12px; color: #888;">If you didn't request this, you can safely ignore this email.</p>
      </div>
    `
  };

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.RESEND_API_KEY}`
      },
      body: JSON.stringify(payload)
    });
    
    if (response.ok) {
      console.log(`[Server] OTP ${otp} sent to ${email} via Resend`);
      res.json({ success: true, message: 'OTP sent successfully' });
    } else {
      const errorText = await response.text();
      console.error('[Server] Resend API failed:', errorText);
      res.status(500).json({ 
        success: false, 
        message: 'Resend API Error', 
        details: errorText
      });
    }
  } catch (error) {
    console.error('[Server] Resend email sending failed:', error);
    res.status(500).json({ success: false, message: 'Failed to send email' });
  }
});

// Verify OTP API
app.post('/api/verify-otp', async (req, res) => {
  const { email, otp, name } = req.body;
  if (!email || !otp) return res.status(400).json({ success: false, message: 'Email and OTP required' });

  let isValid = false;
  try {
    const record = await Otp.findOne({ email, otp }).catch(() => null);
    if (record) {
      isValid = true;
      await Otp.deleteOne({ _id: record._id });
    } else if (global.mockOtpStore && global.mockOtpStore[email] === otp) {
      isValid = true;
      delete global.mockOtpStore[email];
    }

    if (isValid) {
      let user = { name, email, enrolledCourses: [] };
      let dbUser = await User.findOne({ email });
      if (!dbUser) {
        dbUser = await User.create({ name, email, enrolledCourses: [] });
      }
      user = { name: dbUser.name, email: dbUser.email, enrolledCourses: dbUser.enrolledCourses, _id: dbUser._id };

      // Generate unique session ID for Single-Device Login
      const sessionId = (crypto.randomUUID ? crypto.randomUUID() : crypto.randomBytes(16).toString('hex'));
      dbUser.currentSessionId = sessionId;
      await dbUser.save();

      const token = jwt.sign(
        { email: user.email, name: user.name, _id: user._id, sessionId },
        process.env.JWT_SECRET || 'fallback_secret_for_local_testing',
        { expiresIn: '365d' }
      );
      res.json({ success: true, token, user });
    } else {
      res.status(400).json({ success: false, message: 'Invalid or expired OTP' });
    }
  } catch (err) {
    console.error("OTP Verification Error:", err);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

// Razorpay Instance
if (process.env.RAZORPAY_KEY_ID && process.env.RAZORPAY_KEY_ID !== 'YOUR_RAZORPAY_KEY_ID') {
  razorpayInstance = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET,
  });
}

// 1. Create Order Endpoint
app.post('/api/create-order', async (req, res) => {
  if (!razorpayInstance) {
    return res.status(500).json({ success: false, message: "Razorpay keys not configured in .env" });
  }
  const { amount, courseId, userEmail, userName } = req.body; // amount should be in paise
  
  if (!amount || amount < 100) {
    return res.status(400).json({ success: false, message: "Amount must be at least 100 paise." });
  }

  // Extract user email from token if provided
  let tokenEmail = '';
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (token) {
    try {
      const decoded = jwt.decode(token);
      if (decoded && decoded.email) tokenEmail = decoded.email;
    } catch (e) {}
  }

  const finalEmail = (tokenEmail || userEmail || '').toLowerCase().trim();
  const finalName = userName || '';

  try {
    const options = {
      amount: Math.round(amount), // Razorpay works in paise
      currency: "INR",
      receipt: `rcpt_${Date.now()}`,
      notes: {
        courseId: courseId || "",
        userEmail: finalEmail,
        userName: finalName
      }
    };
    const order = await razorpayInstance.orders.create(options);
    console.log(`[CreateOrder] Order created: ${order.id} for course ${courseId} by ${finalEmail}`);
    res.json({ success: true, order, key_id: process.env.RAZORPAY_KEY_ID });
  } catch (err) {
    console.error("Razorpay Create Order Error:", err);
    res.status(500).json({ success: false, message: "Failed to create Razorpay order" });
  }
});

// Middleware to verify JWT and enforce Single-Device Login
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (!token) return res.status(401).json({ success: false, message: "Unauthorized" });

  jwt.verify(token, process.env.JWT_SECRET || 'fallback_secret_for_local_testing', async (err, user) => {
    if (err) {
      // If token signature is authentic but expired, recover user so test submissions and actions never fail
      if (err.name === 'TokenExpiredError') {
        const decoded = jwt.decode(token);
        if (decoded && (decoded._id || decoded.email)) {
          console.warn(`[Auth] Recovered valid expired token for user: ${decoded.email || decoded._id}`);
          user = decoded;
          res.setHeader('X-Token-Expired', 'true');
        } else {
          console.error("JWT Verification Error:", err.message);
          return res.status(403).json({ success: false, message: "Forbidden: " + err.message, expired: true });
        }
      } else {
        console.error("JWT Verification Error:", err.message);
        return res.status(403).json({ success: false, message: "Forbidden: " + err.message });
      }
    }

    // Enforce 1 Device Login: Check if another device logged in after this token was issued
    if (user && user._id) {
      try {
        const dbUser = await User.findById(user._id).select('currentSessionId email');
        if (dbUser && dbUser.currentSessionId && user.sessionId && dbUser.currentSessionId !== user.sessionId) {
          console.warn(`[Auth] Session superseded on another device for: ${dbUser.email}`);
          return res.status(401).json({ 
            success: false, 
            message: "Your account was logged in on another device. You have been logged out from this session.",
            sessionInvalidated: true 
          });
        }
      } catch (dbErr) {
        console.error("Session check DB error:", dbErr);
      }
    }

    req.user = user;
    next();
  });
};

// Check Session Active (used by client to detect single-device login)
app.get('/api/session-check', authenticateToken, (req, res) => {
  res.json({ success: true, message: "Session active" });
});

// Refresh Token Endpoint
app.post('/api/refresh-token', async (req, res) => {
  const authHeader = req.headers['authorization'];
  const token = (authHeader && authHeader.split(' ')[1]) || req.body.token;
  if (!token) return res.status(400).json({ success: false, message: 'Token required' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'fallback_secret_for_local_testing', { ignoreExpiration: true });
    let dbUser = null;
    if (decoded._id) {
      dbUser = await User.findById(decoded._id).catch(() => null);
    }
    if (!dbUser && decoded.email) {
      dbUser = await User.findOne({ email: decoded.email }).catch(() => null);
    }
    if (!dbUser) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }

    // Check if session was superseded by another device
    if (dbUser.currentSessionId && decoded.sessionId && dbUser.currentSessionId !== decoded.sessionId) {
      return res.status(401).json({
        success: false,
        message: "Your account was logged in on another device. You have been logged out from this session.",
        sessionInvalidated: true
      });
    }

    const sessionId = decoded.sessionId || dbUser.currentSessionId || (crypto.randomUUID ? crypto.randomUUID() : crypto.randomBytes(16).toString('hex'));
    if (!dbUser.currentSessionId) {
      dbUser.currentSessionId = sessionId;
      await dbUser.save();
    }

    const newToken = jwt.sign(
      { email: dbUser.email, name: dbUser.name, _id: dbUser._id, sessionId },
      process.env.JWT_SECRET || 'fallback_secret_for_local_testing',
      { expiresIn: '365d' }
    );

    res.json({
      success: true,
      token: newToken,
      user: { name: dbUser.name, email: dbUser.email, enrolledCourses: dbUser.enrolledCourses, _id: dbUser._id }
    });
  } catch (err) {
    console.error("Token refresh failed:", err.message);
    res.status(401).json({ success: false, message: 'Invalid token' });
  }
});

// TEMPORARY: Free Enrollment (Bypass Razorpay for 48 hrs)
app.post('/api/enroll-free', authenticateToken, async (req, res) => {
  const { courseId } = req.body;
  try {
    const result = await User.updateOne(
      { email: req.user.email },
      { $addToSet: { enrolledCourses: courseId } }
    );
    if (result.matchedCount === 0) {
      return res.status(404).json({ success: false, message: "User not found to enroll." });
    }
    res.json({ success: true, message: "Enrolled successfully!" });
  } catch (err) {
    console.error("DB Error updating user courses:", err);
    res.status(500).json({ success: false, message: "Error updating user records" });
  }
});

// Course description to ID fallback mapping
const descToCourseMap = {
  'weekly quiz cs gate 2027': 'weekly-cs-gate-2027',
  'weekly cs gate 2027 test series': 'weekly-cs-gate-2027',
  'cs-gate 2027 practice test series': 'cs-gate-pyq',
  'cs-gate 2027 practice classes test series': 'cs-gate-classes',
  'wallah cs gate 2026 test series': 'pw-cs-gate-2026',
  'cse-gate 2026 practice test series': 'cse-gate-2026-pyq',
  'cse-gate pyq practice series': 'cs-gate-pyq',
  'da-gate 2026 practice test series': 'da-gate-pyq',
  'me-gate 2026 practice test series': 'me-gate-pyq',
  'me-gate 2025 practice test series': 'me-gate-pyq-2025',
  'ece-gate 2025 practice test series': 'ece-gate-pyq-2025',
  'ece-gate 2026 practice test series': 'ece-gate-pyq',
  'ee-gate 2026 practice test series': 'ee-gate-pyq',
  'ee-gate 2027 practice test series': 'ee-gate-pyq-2027',
  'ce-gate 2026 practice test series': 'ce-gate-pyq'
};

function mapDescToCourseId(desc) {
  if (!desc) return null;
  const clean = desc.toLowerCase().trim();
  return descToCourseMap[clean] || null;
}

// 2. Verify Payment Endpoint
app.post('/api/verify-payment', authenticateToken, async (req, res) => {
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature, courseId } = req.body;

  if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
    return res.status(400).json({ success: false, message: "Missing payment verification parameters" });
  }

  const generatedSignature = crypto
    .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET)
    .update(razorpay_order_id + "|" + razorpay_payment_id)
    .digest('hex');

  if (generatedSignature === razorpay_signature) {
    try {
      const userEmail = (req.user.email || '').toLowerCase().trim();
      const query = req.user._id ? { _id: req.user._id } : { email: new RegExp('^' + userEmail + '$', 'i') };

      const updatedUser = await User.findOneAndUpdate(
        query,
        { $addToSet: { enrolledCourses: courseId } },
        { new: true }
      );
      
      if (!updatedUser) {
        return res.status(404).json({ success: false, message: "User not found in database to enroll." });
      }
      
      console.log(`[VerifyPayment] Successfully enrolled ${updatedUser.email} in ${courseId}`);
      res.json({ 
        success: true, 
        message: "Payment verified successfully", 
        paymentId: razorpay_payment_id,
        user: { name: updatedUser.name, email: updatedUser.email, enrolledCourses: updatedUser.enrolledCourses, _id: updatedUser._id }
      });
    } catch (err) {
      console.error("DB Error updating user courses:", err);
      res.status(500).json({ success: false, message: "Error updating user records" });
    }
  } else {
    res.status(400).json({ success: false, message: "Invalid payment signature" });
  }
});

// Reconcile order endpoint (used when user returns from UPI intent or modal closes)
app.post('/api/reconcile-order', authenticateToken, async (req, res) => {
  const { orderId, courseId } = req.body;
  if (!orderId || !razorpayInstance) {
    return res.status(400).json({ success: false, message: "OrderId required" });
  }

  try {
    const payments = await razorpayInstance.orders.fetchPayments(orderId);
    const capturedPayment = payments.items && payments.items.find(p => p.status === 'captured');
    
    if (capturedPayment) {
      const targetCourseId = courseId || (capturedPayment.notes && capturedPayment.notes.courseId) || mapDescToCourseId(capturedPayment.description);
      const userEmail = (req.user.email || '').toLowerCase().trim();
      const query = req.user._id ? { _id: req.user._id } : { email: new RegExp('^' + userEmail + '$', 'i') };

      const updatedUser = await User.findOneAndUpdate(
        query,
        { $addToSet: { enrolledCourses: targetCourseId } },
        { new: true }
      );

      console.log(`[Reconcile] Enrolled ${updatedUser ? updatedUser.email : userEmail} in ${targetCourseId} from order ${orderId}`);
      return res.json({
        success: true,
        enrolled: true,
        courseId: targetCourseId,
        user: updatedUser ? { name: updatedUser.name, email: updatedUser.email, enrolledCourses: updatedUser.enrolledCourses, _id: updatedUser._id } : null
      });
    }

    res.json({ success: false, enrolled: false, message: "Payment not captured yet" });
  } catch (err) {
    console.error("Reconciliation error:", err);
    res.status(500).json({ success: false, message: "Failed to reconcile order" });
  }
});

// Razorpay Webhook Endpoint (Direct server-to-server notification for UPI, QR, NetBanking)
app.post('/api/razorpay-webhook', async (req, res) => {
  const secret = process.env.RAZORPAY_WEBHOOK_SECRET;
  const signature = req.headers['x-razorpay-signature'];

  if (secret && signature) {
    try {
      const expectedSignature = crypto
        .createHmac('sha256', secret)
        .update(JSON.stringify(req.body))
        .digest('hex');
      if (expectedSignature !== signature) {
        console.warn('[Webhook] Invalid Razorpay webhook signature');
        return res.status(400).json({ status: 'invalid_signature' });
      }
    } catch (e) {
      console.error('[Webhook] Signature error:', e);
    }
  }

  const event = req.body.event;
  if (event === 'payment.captured' || event === 'order.paid') {
    const payment = req.body.payload?.payment?.entity;
    const order = req.body.payload?.order?.entity;

    const notes = (payment && payment.notes) || (order && order.notes) || {};
    let courseId = notes.courseId || mapDescToCourseId(payment?.description);
    let userEmail = notes.userEmail || payment?.email;

    if (userEmail && courseId) {
      userEmail = userEmail.toLowerCase().trim();
      try {
        const updateResult = await User.updateOne(
          { email: new RegExp('^' + userEmail + '$', 'i') },
          { $addToSet: { enrolledCourses: courseId } }
        );
        console.log(`[Webhook] Enrolled ${userEmail} in ${courseId} via ${event}. Matched: ${updateResult.matchedCount}`);
      } catch (err) {
        console.error('[Webhook] Error enrolling user via webhook:', err);
      }
    }
  }

  res.json({ status: 'ok' });
});
// 3. Fetch Test Questions Securely Endpoint
app.get('/api/test/:courseId/:testId', authenticateToken, async (req, res) => {
  const { courseId, testId } = req.params;

  // Verify user is enrolled in the course that contains this test
  try {
    const user = await User.findById(req.user._id);
    if (!user || !user.enrolledCourses.includes(courseId)) {
      return res.status(403).json({ success: false, message: "You are not enrolled in this course." });
    }

    // Fetch test questions from DB
    const testDoc = await Test.findOne({ testId });
    if (!testDoc) {
      return res.status(404).json({ success: false, message: "Test not found." });
    }

    res.json({ success: true, questions: testDoc.questions });
  } catch (err) {
    console.error("Error fetching test:", err);
    res.status(500).json({ success: false, message: "Server error fetching test." });
  }
});
// 4. Submit Test Results Endpoint
app.post('/api/submit-test', authenticateToken, async (req, res) => {
  try {
    const { seriesId, testName, score, maxScore, correctCount, wrongCount, unattempted, timeTakenSecs, answers } = req.body;
    
    // Query condition: match userId + testName, and if seriesId is provided, also match seriesId
    const query = {
      userId: req.user._id,
      testName: { $regex: new RegExp('^' + testName.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&') + '$', 'i') }
    };
    if (seriesId) {
      query.seriesId = seriesId;
    }

    await TestResult.findOneAndUpdate(
      query,
      { seriesId, testName, score, maxScore, correctCount, wrongCount, unattempted, timeTakenSecs, answers, date: Date.now() },
      { upsert: true, new: true }
    );
    res.json({ success: true, message: 'Test submitted successfully.' });
  } catch (err) {
    console.error("Error submitting test:", err);
    res.status(500).json({ success: false, message: 'Server error saving test results.' });
  }
});

// 5. Get User Results Endpoint
app.get('/api/user-results', authenticateToken, async (req, res) => {
  try {
    const results = await TestResult.find({ userId: req.user._id }).select('seriesId testName score maxScore correctCount wrongCount unattempted timeTakenSecs answers -_id');
    res.json({ success: true, results });
  } catch (err) {
    console.error("Error fetching user results:", err);
    res.status(500).json({ success: false, message: 'Server error fetching user results.' });
  }
});

// 5.1 Get User Profile Endpoint
app.get('/api/user', authenticateToken, async (req, res) => {
  try {
    const user = await User.findOne({ email: req.user.email }).select('name email enrolledCourses');
    if (!user) return res.status(404).json({ success: false, message: "User not found" });
    res.json({ success: true, user });
  } catch (err) {
    console.error("Error fetching user:", err);
    res.status(500).json({ success: false, message: 'Server error fetching user.' });
  }
});

// 6. Get Global Test Stats Endpoint
app.get('/api/test-stats/:testName', async (req, res) => {
  try {
    const { testName } = req.params;
    const { seriesId } = req.query;
    // Match exact test name so distinct tests with similar subjects never mix
    let matchQuery = { testName: testName };
    if (seriesId) {
      matchQuery.seriesId = seriesId;
    }

    const stats = await TestResult.aggregate([
      { $match: matchQuery },
      {
        $group: {
          _id: null,
          avgScore: { $avg: "$score" },
          highestScore: { $max: "$score" },
          totalCorrect: { $sum: "$correctCount" },
          totalWrong: { $sum: "$wrongCount" },
          totalStudents: { $sum: 1 }
        }
      }
    ]);

    if (stats.length === 0) {
      return res.json({ success: true, stats: null });
    }

    const { avgScore, highestScore, totalCorrect, totalWrong, totalStudents } = stats[0];
    const totalAttempted = totalCorrect + totalWrong;
    const avgAccuracy = totalAttempted > 0 ? (totalCorrect / totalAttempted) * 100 : 0;

    res.json({
      success: true,
      stats: {
        avgScore: Math.round(avgScore * 100) / 100,
        highestScore: Math.round(highestScore * 100) / 100,
        avgAccuracy: Math.round(avgAccuracy * 100) / 100,
        totalStudents
      }
    });
  } catch (err) {
    console.error("Error fetching test stats:", err);
    res.status(500).json({ success: false, message: 'Server error fetching test stats.' });
  }
});

// 7. Get Advanced Global Test Stats Endpoint
app.get('/api/test-advanced-stats/:testName', async (req, res) => {
  try {
    const { testName } = req.params;
    const { seriesId } = req.query;
    const query = { testName };
    if (seriesId) query.seriesId = seriesId;
    const results = await TestResult.find(query);

    if (!results || results.length === 0) {
      return res.json({ success: true, advancedStats: null });
    }

    let questionStats = {};
    let scores = [];

    // Aggregate data from all test results
    results.forEach(r => {
      scores.push(r.score);
      const answers = r.answers || {};
      Object.keys(answers).forEach(qIndex => {
        if (!questionStats[qIndex]) {
          questionStats[qIndex] = { correct: 0, wrong: 0, unattempted: 0, totalTime: 0, count: 0, options: {} };
        }
        const state = answers[qIndex];
        const timeSpent = state.timeSpent || 0;
        
        questionStats[qIndex].totalTime += timeSpent;
        questionStats[qIndex].count += 1;
        
        if (state.isUnattempted) {
          questionStats[qIndex].unattempted += 1;
        } else if (state.isCorrect) {
          questionStats[qIndex].correct += 1;
        } else {
          questionStats[qIndex].wrong += 1;
        }

        if (state.answer !== null && state.answer !== undefined && state.answer !== "") {
          let ansStr = Array.isArray(state.answer) ? state.answer.join(',') : state.answer.toString();
          questionStats[qIndex].options[ansStr] = (questionStats[qIndex].options[ansStr] || 0) + 1;
        }
      });
    });

    // Calculate Dynamic Difficulty & Group Data
    let difficultyGroups = {
      Easy: { marks: 0, totalTime: 0, totalCorrect: 0, count: 0, qCount: 0 },
      Medium: { marks: 0, totalTime: 0, totalCorrect: 0, count: 0, qCount: 0 },
      Hard: { marks: 0, totalTime: 0, totalCorrect: 0, count: 0, qCount: 0 }
    };
    
    let perQuestionArray = [];
    Object.keys(questionStats).forEach(qIndex => {
      const q = questionStats[qIndex];
      const accuracy = q.count > 0 ? (q.correct / q.count) : 0;
      
      let diff = "Hard";
      if (accuracy > 0.65) diff = "Easy";
      else if (accuracy >= 0.35) diff = "Medium";

      q.difficulty = diff;
      q.avgTime = q.count > 0 ? (q.totalTime / q.count) : 0;
      
      difficultyGroups[diff].totalTime += q.avgTime;
      difficultyGroups[diff].totalCorrect += q.correct;
      difficultyGroups[diff].count += q.count;
      difficultyGroups[diff].qCount += 1;

      let avgMks = q.count > 0 ? ((q.correct * 1) - (q.wrong * 0.33)) / q.count : 0;
      difficultyGroups[diff].marks += avgMks;

      let popularChoice = null;
      let popularCount = 0;
      Object.entries(q.options).forEach(([opt, count]) => {
        if (count > popularCount) {
          popularCount = count;
          popularChoice = opt;
        }
      });
      let popularPct = q.count > 0 ? ((popularCount / q.count) * 100).toFixed(2) : 0;
      let attemptRate = q.count > 0 ? (((q.correct + q.wrong) / q.count) * 100).toFixed(2) : 0;

      perQuestionArray.push({
        index: parseInt(qIndex),
        correct: q.correct,
        wrong: q.wrong,
        unattempted: q.unattempted,
        difficulty: diff,
        avgTime: q.avgTime,
        popularChoice,
        popularPct,
        attemptRate
      });
    });
    
    // Sort scores for median curve
    scores.sort((a, b) => a - b);
    const medianScore = scores.length > 0 ? scores[Math.floor(scores.length / 2)] : 0;

    // Format difficulty stats
    const diffStats = {};
    ["Easy", "Medium", "Hard"].forEach(d => {
      const g = difficultyGroups[d];
      diffStats[d] = {
        avgMarks: g.qCount > 0 ? g.marks : 0,
        highestMarks: g.qCount > 0 ? (g.qCount * 1) : 0, // Max possible marks approximation
        avgTime: g.qCount > 0 ? (g.totalTime / g.qCount) : 0,
        avgAccuracy: g.count > 0 ? (g.totalCorrect / g.count) * 100 : 0
      };
    });
    
    perQuestionArray.sort((a,b) => a.index - b.index);

    res.json({
      success: true,
      advancedStats: {
        scoresCurve: scores,
        medianScore: medianScore,
        difficultyStats: diffStats,
        perQuestion: perQuestionArray
      }
    });
  } catch (err) {
    console.error("Error in test-advanced-stats:", err);
    res.status(500).json({ success: false, message: 'Server error fetching advanced stats.' });
  }
});

// 8. Get Leaderboard Endpoint
app.get('/api/leaderboard/:testName', async (req, res) => {
  try {
    const { testName } = req.params;
    const { seriesId } = req.query;
    // Match exact test name so distinct tests with similar subjects never mix
    let query = { testName: testName };
    if (seriesId) query.seriesId = seriesId;
    const results = await TestResult.find(query).populate('userId', 'name').lean();

    if (!results || results.length === 0) {
      return res.json({ success: true, leaderboard: [] });
    }

    // Group by user and find their best score
    const bestResultsMap = new Map();
    for (const r of results) {
      const uId = r.userId ? r.userId._id.toString() : 'unknown';
      if (!bestResultsMap.has(uId)) {
        bestResultsMap.set(uId, r);
      } else {
        const existing = bestResultsMap.get(uId);
        if (r.score > existing.score || (r.score === existing.score && r.timeTakenSecs < existing.timeTakenSecs)) {
          bestResultsMap.set(uId, r);
        }
      }
    }

    const uniqueResults = Array.from(bestResultsMap.values());
    uniqueResults.sort((a, b) => {
      if (b.score !== a.score) return b.score - a.score;
      return a.timeTakenSecs - b.timeTakenSecs;
    });

    const leaderboard = uniqueResults.map((r, index) => ({
      rank: index + 1,
      name: r.userId ? r.userId.name : 'Unknown User',
      score: r.score,
      maxScore: r.maxScore,
      timeTakenSecs: r.timeTakenSecs
    }));

    res.json({ success: true, leaderboard });
  } catch (err) {
    console.error("Error fetching leaderboard:", err);
    res.status(500).json({ success: false, message: 'Server error fetching leaderboard.' });
  }
});



// ==========================================
// ANSWERS & DISCUSS API
// ==========================================

// Upload Image endpoint for CKEditor
app.post('/api/upload-image', upload.single('upload'), (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: { message: 'No file uploaded.' } });
    }
    const b64 = Buffer.from(req.file.buffer).toString('base64');
    const mimeType = req.file.mimetype;
    const url = `data:${mimeType};base64,${b64}`;
    
    // CKEditor 4 expects this format
    res.json({
      uploaded: 1,
      fileName: req.file.originalname,
      url: url
    });
  } catch (err) {
    console.error("Upload Error:", err);
    res.status(500).json({ error: { message: 'Server error during upload.' } });
  }
});

// Submit a new answer
app.post('/api/answers', authenticateToken, async (req, res) => {
  try {
    const { testId, qIndex, content } = req.body;
    if (!content || content.trim() === '') {
      return res.status(400).json({ success: false, message: 'Content cannot be empty' });
    }
    const answer = new Answer({
      testId,
      qIndex: parseInt(qIndex),
      userEmail: req.user.email,
      userName: req.user.name,
      content
    });
    await answer.save();
    res.json({ success: true, answer });
  } catch (err) {
    console.error("Submit Answer Error:", err);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

// Get all answers for a specific question
app.get('/api/answers/:testId/:qIndex', async (req, res) => {
  try {
    const { testId, qIndex } = req.params;
    const answers = await Answer.find({ testId, qIndex: parseInt(qIndex) }).sort({ createdAt: -1 });
    res.json({ success: true, answers });
  } catch (err) {
    console.error("Fetch Answers Error:", err);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

// Delete an answer (Admin only)
app.delete('/api/answers/:id', authenticateToken, async (req, res) => {
  try {
    const adminEmail = 'yuvrajsingh36828@gmail.com';
    if (req.user.email !== adminEmail) {
      return res.status(403).json({ success: false, message: 'Only admin can delete answers' });
    }
    await Answer.findByIdAndDelete(req.params.id);
    res.json({ success: true });
  } catch (err) {
    console.error("Delete Answer Error:", err);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

// --- SYNC API ENDPOINTS ---

app.post('/api/sync/bookmark', authenticateToken, async (req, res) => {
  try {
    const { testId, qKey, qIndex, isBookmarked, text, subject } = req.body;
    if (isBookmarked) {
      await Bookmark.updateOne(
        { userId: req.user._id, qKey },
        { testId, qIndex, text, subject, createdAt: Date.now() },
        { upsert: true }
      );
    } else {
      await Bookmark.deleteOne({ userId: req.user._id, qKey });
    }
    res.json({ success: true });
  } catch(err) {
    console.error("Sync Bookmark Error:", err);
    res.status(500).json({ success: false });
  }
});

app.get('/api/sync/bookmarks', authenticateToken, async (req, res) => {
  try {
    const bookmarks = await Bookmark.find({ userId: req.user._id });
    const formatted = {};
    bookmarks.forEach(b => {
      formatted[b.qKey] = { 
        testId: b.testId,
        qIndex: b.qIndex,
        text: b.text,
        subject: b.subject,
        date: new Date(b.createdAt).toLocaleDateString() 
      };
    });
    res.json({ success: true, bookmarks: formatted });
  } catch(err) {
    console.error("Get Bookmarks Error:", err);
    res.status(500).json({ success: false });
  }
});

app.post('/api/sync/teststate', authenticateToken, async (req, res) => {
  try {
    const { testId, playerState, playerCurrent, playerTimerSecs } = req.body;
    await TestState.updateOne(
      { userId: req.user._id, testId },
      { playerState, playerCurrent, playerTimerSecs, updatedAt: Date.now() },
      { upsert: true }
    );
    res.json({ success: true });
  } catch(err) {
    console.error("Sync TestState Error:", err);
    res.status(500).json({ success: false });
  }
});

app.delete('/api/sync/teststate/:testId', authenticateToken, async (req, res) => {
  try {
    const { testId } = req.params;
    await TestState.deleteOne({ userId: req.user._id, testId });
    res.json({ success: true });
  } catch(err) {
    console.error("Delete TestState Error:", err);
    res.status(500).json({ success: false });
  }
});

app.get('/api/sync/teststate/:testId', authenticateToken, async (req, res) => {
  try {
    const state = await TestState.findOne({ userId: req.user._id, testId: req.params.testId });
    if (state) {
      res.json({ success: true, testState: state });
    } else {
      res.json({ success: false });
    }
  } catch(err) {
    console.error("Get TestState Error:", err);
    res.status(500).json({ success: false });
  }
});

// Fallback to index.html for unknown routes (SPA behavior)
app.use((req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`[Apex Core] Backend Server is running at http://localhost:${PORT}`);
  console.log(`To stop the server, press CTRL+C`);
});
