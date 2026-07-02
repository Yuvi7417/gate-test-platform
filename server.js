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

const app = express();
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
  enrolledCourses: [String]
});
const User = mongoose.model('User', userSchema);

const otpSchema = new mongoose.Schema({
  email: String,
  otp: String,
  createdAt: { type: Date, default: Date.now, expires: 300 } // Expires in 5 mins
});
const Otp = mongoose.model('Otp', otpSchema);

const testSchema = new mongoose.Schema({
  testId: { type: String, unique: true }, // e.g. "gate_topicwise_test_1"
  questions: mongoose.Schema.Types.Mixed // Flexible array of questions
});
const Test = mongoose.model('Test', testSchema);

app.use(cors());
app.use(express.json());

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
    if (mongoose.connection.readyState === 1) {
      let dbUser = await User.findOne({ email });
      if (!dbUser) {
        dbUser = await User.create({ name, email, enrolledCourses: [] });
      }
      user = { name: dbUser.name, email: dbUser.email, enrolledCourses: dbUser.enrolledCourses, _id: dbUser._id };
    }

    // 3. Generate our own backend JWT token
    const token = jwt.sign(
      { email: user.email, name: user.name, _id: user._id },
      process.env.JWT_SECRET || 'fallback_secret_for_local_testing',
      { expiresIn: '30d' }
    );

    res.json({ success: true, token, user });
  } catch (err) {
    console.error("Firebase Login Error:", err);
    res.status(401).json({ success: false, message: 'Invalid Firebase token or Server Error' });
  }
});

// Razorpay Instance
let razorpayInstance = null;
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
  const { amount, courseId } = req.body;
  try {
    const options = {
      amount: amount * 100, // Razorpay works in paise
      currency: "INR",
      receipt: `rcpt_${Date.now()}`
    };
    const order = await razorpayInstance.orders.create(options);
    res.json({ success: true, order, key_id: process.env.RAZORPAY_KEY_ID });
  } catch (err) {
    console.error("Razorpay Create Order Error:", err);
    res.status(500).json({ success: false, message: "Failed to create Razorpay order" });
  }
});

// Middleware to verify JWT
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (!token) return res.status(401).json({ success: false, message: "Unauthorized" });

  jwt.verify(token, process.env.JWT_SECRET || 'fallback_secret_for_local_testing', (err, user) => {
    if (err) {
      console.error("JWT Verification Error:", err.message);
      return res.status(403).json({ success: false, message: "Forbidden: " + err.message });
    }
    req.user = user;
    next();
  });
};

// TEMPORARY: Free Enrollment (Bypass Razorpay for 48 hrs)
app.post('/api/enroll-free', authenticateToken, async (req, res) => {
  const { courseId } = req.body;
  try {
    if (mongoose.connection.readyState === 1) {
      await User.updateOne(
        { _id: req.user._id },
        { $addToSet: { enrolledCourses: courseId } }
      );
    }
    res.json({ success: true, message: "Enrolled successfully!" });
  } catch (err) {
    console.error("DB Error updating user courses:", err);
    res.status(500).json({ success: false, message: "Error updating user records" });
  }
});

// 2. Verify Payment Endpoint
app.post('/api/verify-payment', authenticateToken, async (req, res) => {
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature, courseId } = req.body;

  const generatedSignature = crypto
    .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET)
    .update(razorpay_order_id + "|" + razorpay_payment_id)
    .digest('hex');

  if (generatedSignature === razorpay_signature) {
    // Add course to user in DB
    try {
      if (mongoose.connection.readyState === 1) {
        await User.updateOne(
          { _id: req.user._id },
          { $addToSet: { enrolledCourses: courseId } }
        );
      }
      res.json({ success: true, message: "Payment verified successfully", paymentId: razorpay_payment_id });
    } catch (err) {
      console.error("DB Error updating user courses:", err);
      res.status(500).json({ success: false, message: "Error updating user records" });
    }
  } else {
    res.status(400).json({ success: false, message: "Invalid payment signature" });
  }
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

// Fallback to index.html for unknown routes (SPA behavior)
app.use((req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`[Apex Core] Backend Server is running at http://localhost:${PORT}`);
  console.log(`To stop the server, press CTRL+C`);
});
