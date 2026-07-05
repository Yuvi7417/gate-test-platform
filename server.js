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

const testResultSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
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

// OTP API Endpoint (EmailJS HTTP API)
app.post('/api/send-otp', async (req, res) => {
  const { name, email } = req.body;
  if (!email) return res.status(400).json({ success: false, message: 'Email is required.' });

  const otp = Math.floor(100000 + Math.random() * 900000).toString();

  try {
    if (mongoose.connection.readyState === 1) {
      await Otp.deleteMany({ email });
      await Otp.create({ email, otp });
    } else {
      global.mockOtpStore = global.mockOtpStore || {};
      global.mockOtpStore[email] = otp;
    }
  } catch (err) {
    console.error("DB Error saving OTP", err);
  }

  // Check if EmailJS keys exist
  if (!process.env.EMAILJS_SERVICE_ID) {
    return res.status(500).json({ success: false, message: 'EmailJS not configured in .env' });
  }

  const payload = {
    service_id: process.env.EMAILJS_SERVICE_ID,
    template_id: process.env.EMAILJS_TEMPLATE_ID,
    user_id: process.env.EMAILJS_PUBLIC_KEY,
    accessToken: process.env.EMAILJS_PRIVATE_KEY,
    template_params: {
      name: name || "Student",
      to_email: email,
      otp: otp
    }
  };

  try {
    const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    
    if (response.ok) {
      console.log(`[Server] OTP ${otp} sent to ${email} via EmailJS`);
      res.json({ success: true, message: 'OTP sent successfully' });
    } else {
      const errorText = await response.text();
      console.error('[Server] EmailJS failed:', errorText);
      res.status(500).json({ success: false, message: 'EmailJS API Error', details: errorText });
    }
  } catch (error) {
    console.error('[Server] EmailJS sending failed:', error);
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
        await Otp.deleteOne({ _id: record._id });
      }
    } else {
      if (global.mockOtpStore && global.mockOtpStore[email] === otp) {
        isValid = true;
        delete global.mockOtpStore[email];
      }
    }

    if (isValid) {
      let user = { name, email, enrolledCourses: [] };
      if (mongoose.connection.readyState === 1) {
        let dbUser = await User.findOne({ email });
        if (!dbUser) {
          dbUser = await User.create({ name, email, enrolledCourses: [] });
        }
        user = { name: dbUser.name, email: dbUser.email, enrolledCourses: dbUser.enrolledCourses, _id: dbUser._id };
      }

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
  const { amount, courseId } = req.body; // amount should be in paise
  
  if (!amount || amount < 100) {
    return res.status(400).json({ success: false, message: "Amount must be at least 100 paise." });
  }

  try {
    const options = {
      amount: Math.round(amount), // Razorpay works in paise
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
// 4. Submit Test Results Endpoint
app.post('/api/submit-test', authenticateToken, async (req, res) => {
  try {
    const { testName, score, maxScore, correctCount, wrongCount, unattempted, timeTakenSecs, answers } = req.body;
    const result = new TestResult({
      userId: req.user._id,
      testName,
      score,
      maxScore,
      correctCount,
      wrongCount,
      unattempted,
      timeTakenSecs,
      answers,
    });
    await result.save();
    res.json({ success: true, message: 'Test submitted successfully.' });
  } catch (err) {
    console.error("Error submitting test:", err);
    res.status(500).json({ success: false, message: 'Server error saving test results.' });
  }
});

// 5. Get User Results Endpoint
app.get('/api/user-results', authenticateToken, async (req, res) => {
  try {
    const results = await TestResult.find({ userId: req.user._id }).select('testName score maxScore correctCount wrongCount unattempted timeTakenSecs answers -_id');
    res.json({ success: true, results });
  } catch (err) {
    console.error("Error fetching user results:", err);
    res.status(500).json({ success: false, message: 'Server error fetching user results.' });
  }
});

// 6. Get Global Test Stats Endpoint
app.get('/api/test-stats/:testName', async (req, res) => {
  try {
    const { testName } = req.params;
    
    const stats = await TestResult.aggregate([
      { $match: { testName: testName } },
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
    const results = await TestResult.find({ testName });

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
    const results = await TestResult.find({ testName }).populate('userId', 'name').lean();

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

// Fallback to index.html for unknown routes (SPA behavior)
app.use((req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`[Apex Core] Backend Server is running at http://localhost:${PORT}`);
  console.log(`To stop the server, press CTRL+C`);
});
