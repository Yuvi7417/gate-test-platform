require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
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

// Configure Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// OTP API Endpoint
app.post('/api/send-otp', async (req, res) => {
  const { name, email } = req.body;

  if (!email) {
    return res.status(400).json({ success: false, message: 'Email is required.' });
  }

  // Generate 6 digit OTP
  const otp = Math.floor(100000 + Math.random() * 900000).toString();

  // Save to DB
  try {
    if (mongoose.connection.readyState === 1) {
      await Otp.deleteMany({ email }); // Delete old OTPs
      await Otp.create({ email, otp });
    } else {
      global.mockOtpStore = global.mockOtpStore || {};
      global.mockOtpStore[email] = otp;
    }
  } catch (err) {
    console.error("DB Error saving OTP", err);
  }

  // Check if credentials are set
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS || process.env.EMAIL_USER === 'your_email@gmail.com') {
    return res.status(500).json({
      success: false,
      message: 'Email credentials not configured in .env file. Check server console for OTP.'
    });
  }

  const mailOptions = {
    from: `"Apex Core Test Series" <${process.env.EMAIL_USER}>`,
    to: email,
    subject: 'Your Apex Core Login OTP',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 500px; margin: auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px;">
        <h2 style="color: #1e293b; text-align: center;">Apex Core Login</h2>
        <p style="color: #334155; font-size: 16px;">Hello ${name || 'Student'},</p>
        <p style="color: #334155; font-size: 16px;">Your One Time Password (OTP) to login is:</p>
        <div style="text-align: center; margin: 30px 0;">
          <span style="font-size: 32px; font-weight: bold; letter-spacing: 5px; color: #2563eb; background: #f8fafc; padding: 10px 20px; border-radius: 6px; border: 1px solid #e2e8f0;">
            ${otp}
          </span>
        </div>
        <p style="color: #64748b; font-size: 14px; text-align: center;">This code will expire in 1 minute.</p>
        <hr style="border: none; border-top: 1px solid #e2e8f0; margin-top: 30px;" />
        <p style="color: #94a3b8; font-size: 12px; text-align: center;">If you didn't request this, you can safely ignore this email.</p>
      </div>
    `
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log(`[Server] OTP ${otp} sent to ${email}`);
    res.json({ success: true, message: 'OTP sent successfully' });
  } catch (error) {
    console.error('[Server] Email sending failed:', error);
    res.status(500).json({ success: false, message: 'Failed to send email' });
  }
});

// Verify OTP API
app.post('/api/verify-otp', async (req, res) => {
  const { email, otp, name } = req.body;
  if (!email || !otp) return res.status(400).json({ success: false, message: 'Email and OTP required' });

  let isValid = false;

  try {
    if (mongoose.connection.readyState === 1) {
      const record = await Otp.findOne({ email, otp });
      if (record) {
        isValid = true;
        await Otp.deleteOne({ _id: record._id }); // Use once
      }
    } else {
      if (global.mockOtpStore && global.mockOtpStore[email] === otp) {
        isValid = true;
        delete global.mockOtpStore[email];
      }
    }

    if (isValid) {
      // Find or create user
      let user = { name, email, enrolledCourses: [] };
      if (mongoose.connection.readyState === 1) {
        let dbUser = await User.findOne({ email });
        if (!dbUser) {
          dbUser = await User.create({ name, email, enrolledCourses: [] });
        }
        user = { name: dbUser.name, email: dbUser.email, enrolledCourses: dbUser.enrolledCourses, _id: dbUser._id };
      }

      // Generate JWT token
      const token = jwt.sign(
        { email: user.email, name: user.name, _id: user._id },
        process.env.JWT_SECRET || 'fallback_secret_for_local_testing',
        { expiresIn: '30d' }
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
