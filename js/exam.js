/* ======================================================================
   exam.js — session persistence, scientific calculator, exam instructions
   overlay, question-paper viewer, and the test player (question
   navigation, answer saving, timer, submission).

   NOTE: This file does NOT contain question text/images. Each test's
   actual questions live in their own file inside js/questions/ — that is
   where you type questions and set image paths for diagrams.
   ====================================================================== */

/* ---------- persistent session (localStorage) ----------
       APP_VERSION acts as a cache-buster: bump this string whenever the
       app code changes and every saved session becomes invalid, forcing
       a fresh login. Leave it unchanged and logins persist across
       refreshes/reopens until the user explicitly logs out. */
const APP_VERSION = "v1";
const SESSION_KEY = "apexcore_session";

function saveSession() {
  try {
    localStorage.setItem(
      SESSION_KEY,
      JSON.stringify({
        version: APP_VERSION,
        user: currentUser,
        enrolledIds: enrolledIds,
      }),
    );
  } catch (e) {
    /* storage unavailable — fail silently, login just won't persist */
  }
}

function clearSession() {
  try {
    localStorage.removeItem(SESSION_KEY);
  } catch (e) { }
}

function restoreSession() {
  let raw;
  try {
    raw = localStorage.getItem(SESSION_KEY);
  } catch (e) {
    return;
  }
  if (!raw) return;
  let data;
  try {
    data = JSON.parse(raw);
  } catch (e) {
    clearSession();
    return;
  }
  if (!data || data.version !== APP_VERSION || !data.user) {
    // code has been updated since this session was saved, or data is malformed
    clearSession();
    return;
  }
  enrolledIds = Array.isArray(data.enrolledIds) ? data.enrolledIds : [];
  loginUser(data.user, true);
  fetchUserResults();
  syncLearnNav();
}

/* ---------- session state ---------- */
let currentOtp = null;
let otpTimerInterval = null;
let pendingUser = null;
let pendingEnrollId = null;
let enrolledIds = [];
let currentUser = null;

function openLogin() {
  if (document.body.classList.contains("logged-in")) return;
  document.getElementById("loginModal").classList.add("open");
}
function closeLogin() {
  document.getElementById("loginModal").classList.remove("open");
  backToStep1();
}
document.getElementById("loginModal").addEventListener("click", (e) => {
  if (e.target.id === "loginModal") closeLogin();
});

function toggleContinue() {
  const name = document.getElementById("loginName").value.trim();
  const email = document.getElementById("loginEmail").value.trim();
  const ok = name.length > 1 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  document.getElementById("continueBtn").classList.toggle("ready", ok);
}

function sendOtp() {
  if (!document.getElementById("continueBtn").classList.contains("ready"))
    return;
  const name = document.getElementById("loginName").value.trim();
  const email = document.getElementById("loginEmail").value.trim();
  pendingUser = { name, email };

  document.getElementById("otpEmailLabel").textContent = email;
  document.getElementById("otpInput").value = "";
  document.getElementById("otpError").classList.remove("show");
  document.getElementById("verifyBtn").classList.remove("ready");

  document.getElementById("loginStep1").style.display = "none";
  document.getElementById("loginStepOtp").style.display = "block";

  const hintEl = document.getElementById("otpStatusHint");
  if (hintEl) hintEl.textContent = "Sending OTP to your email...";

  // Call the backend API to send the email
  fetch('/api/send-otp', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: name,
      email: email
    })
  })
    .then(res => res.json())
    .then(data => {
      if (data.success) {
        if (hintEl) hintEl.textContent = "OTP has been sent to your email!";
        console.log("OTP Email Sent via Backend Successfully!");
      } else {
        if (hintEl) hintEl.textContent = data.message || "Failed to send email. Check console for demo OTP.";
        console.warn("Backend Email Warning:", data.message);
      }
    })
    .catch(err => {
      if (hintEl) hintEl.textContent = "Server error. Check console for demo OTP.";
      console.error("Backend API Error:", err);
    });

  startOtpTimer();
}

function startOtpTimer() {
  let secs = 60;
  const el = document.getElementById("otpTimer");
  el.textContent = "01:00";
  clearInterval(otpTimerInterval);
  otpTimerInterval = setInterval(() => {
    secs--;
    const m = String(Math.floor(secs / 60)).padStart(2, "0");
    const s = String(secs % 60).padStart(2, "0");
    el.textContent = m + ":" + s;
    if (secs <= 0) clearInterval(otpTimerInterval);
  }, 1000);
}

function backToStep1() {
  clearInterval(otpTimerInterval);
  document.getElementById("loginStepOtp").style.display = "none";
  document.getElementById("loginStep1").style.display = "block";
}

function toggleVerify() {
  const val = document.getElementById("otpInput").value.trim();
  document
    .getElementById("verifyBtn")
    .classList.toggle("ready", val.length === 6);
  document.getElementById("otpError").classList.remove("show");
}

function verifyOtp() {
  if (!document.getElementById("verifyBtn").classList.contains("ready")) return;
  const val = document.getElementById("otpInput").value.trim();

  const btn = document.getElementById("verifyBtn");
  btn.innerHTML = `<svg class="spinner" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" style="margin-right:8px;"><circle cx="12" cy="12" r="10" stroke-opacity="0.25"/><path d="M12 2a10 10 0 0 1 10 10"/></svg> Verifying...`;
  btn.disabled = true;

  fetch('/api/verify-otp', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name: pendingUser.name,
      email: pendingUser.email,
      otp: val
    })
  })
    .then(res => res.json())
    .then(data => {
      btn.innerHTML = "VERIFY";
      btn.disabled = false;

      if (data.success) {
        localStorage.setItem('apexcore_token', data.token);
        enrolledIds = data.user.enrolledCourses || [];
        loginUser(data.user);
        closeLogin();

        if (pendingEnrollId) {
          const id = pendingEnrollId;
          pendingEnrollId = null;
          if (enrolledIds.includes(id)) {
            openTestList(id);
          } else {
            openPaymentGateway(id);
          }
        } else {
          syncLearnNav();
        }
      } else {
        document.getElementById("otpError").textContent = data.message;
        document.getElementById("otpError").classList.add("show");
      }
    })
    .catch(err => {
      btn.innerHTML = "VERIFY";
      btn.disabled = false;
      document.getElementById("otpError").textContent = "Server error verifying OTP";
      document.getElementById("otpError").classList.add("show");
    });
}

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDL1-3RYeWBBaI3WhRtMQbpk5K_ae58twM",
  authDomain: "gate-test-702ef.firebaseapp.com",
  projectId: "gate-test-702ef",
  storageBucket: "gate-test-702ef.firebasestorage.app",
  messagingSenderId: "713357458930",
  appId: "1:713357458930:web:afa65c84da82d7a78cff6b",
  measurementId: "G-R0JGVPHG12"
};
firebase.initializeApp(firebaseConfig);
const provider = new firebase.auth.GoogleAuthProvider();

function firebaseGoogleLogin() {
  const btn = document.getElementById("googleLoginBtn");
  btn.innerHTML = `<svg class="spinner" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" style="margin-right:8px;"><circle cx="12" cy="12" r="10" stroke-opacity="0.25"/><path d="M12 2a10 10 0 0 1 10 10"/></svg> Signing in...`;
  btn.disabled = true;

  firebase.auth().signInWithPopup(provider)
    .then((result) => {
      return result.user.getIdToken();
    })
    .then((idToken) => {
      // Send token to our backend to get our own JWT token and verify user in MongoDB
      return fetch('/api/firebase-login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ idToken })
      });
    })
    .then(res => res.json())
    .then(data => {
      btn.innerHTML = `Continue with Google`;
      btn.disabled = false;

      if (data.success) {
        localStorage.setItem('apexcore_token', data.token);
        enrolledIds = data.user.enrolledCourses || [];
        loginUser(data.user);
        closeLogin();
        fetchUserResults();

        if (pendingEnrollId) {
          const id = pendingEnrollId;
          pendingEnrollId = null;
          if (enrolledIds.includes(id)) {
            openTestList(id);
          } else {
            openPaymentGateway(id);
          }
        } else {
          syncLearnNav();
        }
      } else {
        alert("Login failed: " + data.message);
      }
    })
    .catch((error) => {
      console.error("Firebase Login Error:", error);
      btn.innerHTML = `Continue with Google`;
      btn.disabled = false;
      alert("Google Sign-In failed: " + error.message);
    });
}

let userResults = [];
async function fetchUserResults() {
  const token = localStorage.getItem('apexcore_token');
  if (!token) return;
  try {
    const res = await fetch('/api/user-results', {
      headers: { 'Authorization': `Bearer ${token}` }
    });
    const data = await res.json();
    if (data.success) {
      userResults = data.results || [];
    }
  } catch (err) {
    console.error("Error fetching results:", err);
  }
}

/* ---------- logged-in UI ---------- */
function loginUser(user, isRestore) {
  currentUser = user;
  document.body.classList.add("logged-in");
  document.getElementById("loginBtn").style.display = "none";
  document.getElementById("profileChip").classList.add("show");
  const initial = user.name.trim().charAt(0).toUpperCase() || "U";
  document.getElementById("profileAvatar").textContent = initial;
  document.getElementById("profileName").innerHTML =
    user.name +
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>';
  document.getElementById("profileEmail").textContent = user.email;
  document.getElementById("menuName").textContent = user.name;
  document.getElementById("menuEmail").textContent = user.email;

  // reset form for next time
  document.getElementById("loginName").value = "";
  document.getElementById("loginEmail").value = "";
  document.getElementById("continueBtn").classList.remove("ready");

  if (!isRestore) saveSession();
}

function toggleProfileMenu(e) {
  e.stopPropagation();
  document.getElementById("profileChip").classList.toggle("open");
}
document.addEventListener("click", () =>
  document.getElementById("profileChip").classList.remove("open"),
);

function logoutUser(e) {
  e.stopPropagation();
  document.body.classList.remove("logged-in");
  document.getElementById("profileChip").classList.remove("show", "open");
  document.getElementById("loginBtn").style.display = "inline-flex";
  enrolledIds = [];
  currentUser = null;
  document.body.classList.remove("has-enrollment");
  clearSession();
  showView("list");
}

/* ---------- enrollment + Learn / Test list ---------- */
let paymentPendingId = null;

function handleEnroll() {
  if (!document.body.classList.contains("logged-in")) {
    pendingEnrollId = currentDetailId;
    openLogin();
    return;
  }
  openPaymentGateway(currentDetailId);
}

function openPaymentGateway(id) {
  if (!id) return;
  // If already enrolled, just go
  if (enrolledIds.includes(id)) {
    openTestList(id);
    return;
  }

  const ts = testSeries.find(t => t.id === id);
  if (!ts) return;

  const token = localStorage.getItem('apexcore_token');
  const amountWithGst = Math.round(ts.basePrice * 1.18 * 100); // 18% GST, converted to paise

  fetch('/api/create-order', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    },
    body: JSON.stringify({ courseId: id, amount: amountWithGst })
  })
    .then(res => res.json())
    .then(data => {
      if (!data.success) {
        alert("Failed to initiate payment: " + data.message);
        return;
      }
      
      const options = {
        key: data.key_id,
        amount: data.order.amount,
        currency: data.order.currency,
        name: "Apex Core",
        description: ts.title,
        order_id: data.order.id,
        handler: function (response) {
          // Verify payment
          fetch('/api/verify-payment', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + token
            },
            body: JSON.stringify({
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_order_id: response.razorpay_order_id,
              razorpay_signature: response.razorpay_signature,
              courseId: id
            })
          })
          .then(res => res.json())
          .then(verifyData => {
            if (verifyData.success) {
              alert("Payment successful!");
              enrollAndGo(id);
            } else {
              alert("Payment verification failed: " + verifyData.message);
            }
          })
          .catch(err => {
            console.error(err);
            alert("Error verifying payment.");
          });
        },
        prefill: {
          name: currentUser ? currentUser.name : "",
          email: currentUser ? currentUser.email : "",
          contact: ""
        },
        theme: {
          color: "#FFC107"
        }
      };
      
      const rzp1 = new Razorpay(options);
      rzp1.on('payment.failed', function (response){
        alert("Payment failed: " + response.error.description);
      });
      rzp1.open();
    })
    .catch(err => {
      console.error("Order Creation Error:", err);
      alert("Server error initiating payment.");
    });
}

function enrollAndGo(id) {
  if (!id) return;
  if (!enrolledIds.includes(id)) enrolledIds.push(id);
  syncLearnNav();
  saveSession();
  openLearn();
  openTestList(id);
}

/* Learn tab is only revealed once the user is logged in AND has at least one enrollment */
function syncLearnNav() {
  const unlocked =
    document.body.classList.contains("logged-in") && enrolledIds.length > 0;
  document.body.classList.toggle("has-enrollment", unlocked);
}

function openLearn() {
  renderLearn();
  showView("learn");
}

function renderLearn() {
  const wrap = document.getElementById("learnGrid");
  const active = testSeries.filter((t) => enrolledIds.includes(t.id));
  if (active.length === 0) {
    wrap.innerHTML = `
          <div class="empty-state">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z"/></svg>
            <h4>No active test series yet</h4>
            <p>Enroll in a test series to see it appear here and unlock its tests.</p>
            <button class="btn-amber" onclick="showView('list')">Browse Test Series</button>
          </div>`;
    return;
  }
  wrap.innerHTML = active
    .map(
      (t) => `
        <div class="learn-card" onclick="openTestList('${t.id}')">
          <div class="learn-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg></div>
          <div class="learn-body">
            <div class="learn-tags"><span class="ts-tag exam">${t.examTag}</span><span class="ts-tag subject">${t.code}</span></div>
            <div class="learn-title">${t.title}</div>
            <div class="learn-valid">Valid Till: ${formatDate(t.endDate)}</div>
          </div>
          <span class="learn-online">Online</span>
          <div class="learn-arrow"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M5 12h14M13 6l6 6-6 6"/></svg></div>
        </div>`,
    )
    .join("");
}

let currentTestListId = null;
function openTestList(id) {
  const t = testSeries.find((x) => x.id === id);
  if (!t) return;
  currentTestListId = id;
  document.getElementById("tlCrumb").textContent = t.title;
  document
    .querySelectorAll("#tlTabs .tab")
    .forEach((tb) => tb.classList.remove("active"));
  document.querySelector('#tlTabs .tab[data-f="all"]').classList.add("active");
  renderTestList(t, "all");
  showView("tests");
}

function renderTestList(t, filter) {
  const grid = document.getElementById("testListGrid")
  const twList = t.schedule.filter((s) => s[0].startsWith("TWT"));
  let twSeen = 0;
  const items = t.schedule.map((s, i) => {
    const isTopicwise = s[0].startsWith("TWT");
    const label = s[0].replace(/^[A-Za-z]+\s*-\s*/, "");
    const testType = isTopicwise ? "Topicwise" : "Subjectwise";
    let testNumber, bracket;
    if (isTopicwise) {
      testNumber = twList.length - twSeen;
      bracket = label;
      twSeen++;
    } else {
      testNumber = t.schedule.length - i;
      bracket = "Module " + label;
    }
    return {
      name:
        t.code +
        " 2027-" + testType + " Test-" +
        testNumber +
        " (" + bracket + ")",
      from: s[1],
      till: formatDate(t.endDate),
      duration: isTopicwise ? "45 Mins" : "90 Mins",
      questions: isTopicwise ? 17 : 33,
      status: "unattempted",
      score: null,
    };
  });
  
  // Map user results to status
  items.forEach(it => {
    const result = userResults.find(r => r.testName === it.name);
    if (result) {
      it.status = "attempted";
      it.score = result.score;
    }
  });

  const shown = items.filter((it) => filter === "all" || it.status === filter);
  grid.innerHTML =
    shown
      .map(
        (it) => `
        <div class="test-card status-${it.status}">
          <span class="test-ribbon">${it.status === "attempted" ? "Completed" : "Active"}</span>
          <div class="test-card-top">
            <div class="test-icon-wrap">
              <div class="box">${it.status === "attempted" ? checkIconInline : capIconInline}</div>
            </div>
            <div class="test-info">
              <div class="test-title-row">
                <div class="test-title">${it.name}</div>
              </div>
              <div class="test-dates">
                <span>${calIconInline}Available From: <b>${it.from}</b></span>
                <span>${calIconInline}Available Till: <b>${it.till}</b></span>
              </div>
            </div>
            <span class="test-online">Online</span>
          </div>
          <div class="test-card-bottom">
            <div class="test-meta-row">
              <span>${clockIconInline}${it.duration}</span>
              <span>${docIconInline}${it.questions} Questions</span>
              ${it.status === "attempted" ? `<span class="test-score">${trophyIconInline}Score: ${it.score}/100</span>` : ""}
            </div>
            <button class="btn-start-test ${it.status}" data-name="${it.name.replace(/"/g, "&quot;")}" onclick="${it.status === 'unattempted' ? 'openInstructions(this.dataset.name)' : 'openPastResult(this.dataset.name)'}">
              ${it.status === "attempted" ? "View Result" : "Start Test"}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
            </button>
          </div>
        </div>`,
      )
      .join("") ||
    `
        <div class="empty-state"><h4>No tests in this filter</h4><p>Try switching to "ALL" to see every test in this series.</p></div>`;
}

const calIconInline =
  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>';
const clockIconInline =
  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/></svg>';
const docIconInline =
  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z"/><path d="M14 2v6h6"/></svg>';
const checkIconInline =
  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>';
const capIconInline =
  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9"><path d="M22 10L12 5 2 10l10 5 10-5Z"/><path d="M6 12v5c0 1.5 2.7 3 6 3s6-1.5 6-3v-5"/><path d="M22 10v6"/></svg>';
const trophyIconInline =
  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M8 21h8M12 17v4M7 4h10v5a5 5 0 0 1-10 0V4Z"/><path d="M7 5H4a1 1 0 0 0-1 1 4 4 0 0 0 4 4M17 5h3a1 1 0 0 1 1 1 4 4 0 0 1-4 4"/></svg>';

/* ---------- full-page exam instructions ---------- */
let pendingTestName = "";

function openInstructions(testName) {
  pendingTestName = testName || "";
  document.getElementById("examTopTitle").textContent = testName || "Mock Test";
  
  const isTopicwise = (testName || "").includes("Topicwise");
  const instrDurationElement = document.getElementById("instrDuration");
  if (instrDurationElement) {
    instrDurationElement.textContent = isTopicwise ? "45 minutes" : "90 minutes";
  }
  
  const user = currentUser || { name: "Guest User", email: "" };
  document.getElementById("examAvatar").textContent = (
    user.name.trim().charAt(0) || "U"
  ).toUpperCase();
  document.getElementById("examUserName").textContent = user.name;
  document.getElementById("examUserEmail").textContent = user.email;
  document.getElementById("examOverlay").classList.add("show");
  document.getElementById("examOverlay").scrollTop = 0;
  document.querySelector(".exam-instr-body").scrollTop = 0;
  document.body.style.overflow = "hidden";
}

function closeInstructions() {
  document.getElementById("examOverlay").classList.remove("show");
  document.body.style.overflow = "";
  // reset readonly state so the pre-test consent flow behaves normally next time
  document.getElementById("examOverlay").classList.remove("readonly");
  document.getElementById("examConsentWrap").style.display = "";
  document.getElementById("examBeginBtnLabel").textContent =
    "I am ready to begin";
}

/* ---------- view instructions mid-test (read-only, no consent/begin flow) ---------- */
function openInstructionsReadOnly() {
  const overlay = document.getElementById("examOverlay");
  document.getElementById("examTopTitle").textContent =
    document.getElementById("playerTopTitle").textContent || "Mock Test";
  const user = currentUser || { name: "Guest User", email: "" };
  document.getElementById("examAvatar").textContent = (
    user.name.trim().charAt(0) || "U"
  ).toUpperCase();
  document.getElementById("examUserName").textContent = user.name;
  document.getElementById("examUserEmail").textContent = user.email;

  overlay.classList.add("show", "readonly");
  overlay.scrollTop = 0;
  document.querySelector(".exam-instr-body").scrollTop = 0;

  // hide the consent checkbox + "begin" flow; just let them read and close
  document.getElementById("examConsentWrap").style.display = "none";
  document.getElementById("examBeginBtn").disabled = false;
  document.getElementById("examBeginBtnLabel").textContent = "Close";
  document.getElementById("examBeginBtn").onclick = closeInstructionsReadOnly;
}

function closeInstructionsReadOnly() {
  closeInstructions();
  // restore the normal "begin" button behaviour for the next real instructions flow
  document.getElementById("examBeginBtn").onclick = proceedFromInstructions;
}

/* ---------- decide what happens after instructions ---------- */
// let pendingTestName = "";
const _origOpenInstructions = openInstructions;
openInstructions = function (testName) {
  pendingTestName = testName || "";
  document.getElementById("examConsentBox").checked = false;
  document.getElementById("examBeginBtn").disabled = true;
  _origOpenInstructions(testName);
};

const testBackendIdMap = {
  "Subjectwise Test - 5": "cs_subjectwise_test_5",
  "Topicwise Test-1": "gate_topicwise_test_1",
  "Topicwise Test-2": "gate_topicwise_test_2"
};

function findMatchingTest(testName) {
  return Object.keys(testBackendIdMap).find((key) => testName.includes(key));
}

function proceedFromInstructions() {
  if (document.getElementById("examBeginBtn").disabled) return;

  const testKey = findMatchingTest(pendingTestName);
  if (!testKey) {
    alert("This test is not open for attempts yet. Please check back soon.");
    return;
  }

  const backendTestId = testBackendIdMap[testKey];
  const courseId = currentTestListId;

  const btn = document.getElementById("examBeginBtn");
  const label = document.getElementById("examBeginBtnLabel");
  label.innerHTML = `<svg class="spinner" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" style="margin-right:8px; vertical-align:-3px;"><circle cx="12" cy="12" r="10" stroke-opacity="0.25"/><path d="M12 2a10 10 0 0 1 10 10"/></svg> Loading...`;
  btn.disabled = true;

  const token = localStorage.getItem('apexcore_token');
  fetch(`/api/test/${courseId}/${backendTestId}`, {
    headers: { 'Authorization': 'Bearer ' + token }
  })
    .then(res => res.json())
    .then(data => {
      label.textContent = "I am ready to begin";
      btn.disabled = false;

      if (data.success) {
        closeInstructions();
        startPlayer(pendingTestName, data.questions);
      } else {
        alert("Error loading test: " + data.message);
      }
    })
    .catch(err => {
      label.textContent = "I am ready to begin";
      btn.disabled = false;
      console.error("Test load error", err);
      alert("Client Error fetching test: " + err.message);
    });
}

/* ================= TEST PLAYER ================= */

let playerQuestions = [];
let playerState = {}; // { [index]: { visited, answer(idx|null), marked } }
let playerCurrent = 0;
let playerDurationMins = 90;
let playerTimerSecs = playerDurationMins * 60;
let playerTimerInterval = null;
let solutionMode = false;

function startPlayer(testName, fetchedQuestions) {
  solutionMode = false;
  playerQuestions = fetchedQuestions;
  if (!playerQuestions || playerQuestions.length === 0) {
    alert("This test's questions are not available yet. Please check back soon.");
    return;
  }
  const _id = (id) => {
    const el = document.getElementById(id);
    if (!el) throw new Error("Element not found: " + id);
    return el;
  };
  _id("playerTopTitle").textContent = testName || "GATE 2027 Online Test Series";
  _id("playerSectionName").textContent = testName || "GATE 2027 Online Test Series";
  _id("playerSideSecName").textContent = testName || "GATE 2027 Online Test Series";
  const user = currentUser || { name: "Guest User", email: "" };
  _id("playerUserAvatar").textContent = (user.name.trim().charAt(0) || "U").toUpperCase();
  _id("playerUserName").textContent = user.name;

  playerState = {};
  playerQuestions.forEach(
    (q, i) =>
      (playerState[i] = { visited: false, answer: null, marked: false }),
  );
  playerCurrent = 0;
  const isTopicwiseTest = (testName || "").includes("Topicwise");
  playerDurationMins = isTopicwiseTest ? 45 : 90;
  playerTimerSecs = playerDurationMins * 60;

  renderPlayer();

  document.getElementById("playerOverlay").classList.add("show");
  document.body.style.overflow = "hidden";
}

function renderPlayer() {
  const _id = (id) => document.getElementById(id);
  _id("playerQGrid").innerHTML = "";
  renderPlayerQGrid();
  renderPlayerQuestion(playerCurrent);
  updatePlayerCounts();
  _id("playerOverlay").classList.add("show");
  
  if (solutionMode) {
    _id("playerFooterLeft").style.display = "none";
    _id("playerFooterRight").style.display = "none";
    _id("playerSolutionFooter").style.display = "flex";
    document.querySelector(".pf-submit-btn").style.display = "none";
    document.querySelector(".player-topbar .pt-title").textContent = "Solutions: " + _id("playerTopTitle").textContent;
  } else {
    _id("playerFooterLeft").style.display = "flex";
    _id("playerFooterRight").style.display = "block";
    _id("playerSolutionFooter").style.display = "none";
    document.querySelector(".pf-submit-btn").style.display = "inline-flex";
  }
  
  if (playerTimerInterval) clearInterval(playerTimerInterval);
  
  if (solutionMode) {
     document.getElementById("playerTimer").textContent = "Solution Mode";
  } else {
    playerTimerInterval = setInterval(() => {
      playerTimerSecs--;
      if (playerTimerSecs <= 0) {
        clearInterval(playerTimerInterval);
        playerTimerSecs = 0;
        alert("Time is up! The test will now close.");
        exitPlayer();
      }
      const m = Math.floor(playerTimerSecs / 60),
        s = playerTimerSecs % 60;
      document.getElementById("playerTimer").textContent =
        String(m).padStart(2, "0") + ":" + String(s).padStart(2, "0");
    }, 1000);
  }
}

function exitPlayer() {
  clearInterval(playerTimerInterval);
  document.getElementById("playerOverlay").classList.remove("show");
  document.body.style.overflow = "";
}

function closePlayerAndShowResult() {
  exitPlayer();
  showResultPage();
}

/* ---------- question paper (read-only full view of all questions) ---------- */
function openQuestionPaper() {
  const body = document.getElementById("qpaperBody");
  body.innerHTML = playerQuestions
    .map(
      (q, i) => `
        <div class="qp-item">
          <div class="qp-item-head">
            <span class="qp-num">Q${i + 1}.</span>
            <span class="qp-marks"><span class="pos">+${q.marks}</span><span class="neg">-${q.neg}</span></span>
          </div>
          <div class="qp-text">${q.text}</div>
          ${q.image ? `<div class="player-qimg-wrap"><img src="${q.image}" alt="Question diagram"></div>` : ""}
          <div class="qp-opts">
            ${q.options.map((opt, oi) => `<div class="qp-opt"><b>${String.fromCharCode(65 + oi)}.</b>${opt}</div>`).join("")}
          </div>
        </div>`,
    )
    .join("");
  document.getElementById("qpaperOverlay").classList.add("show");
}

function closeQuestionPaper() {
  document.getElementById("qpaperOverlay").classList.remove("show");
}

function renderPlayerQuestion(i) {
  playerCurrent = i;
  const q = playerQuestions[i];
  const st = playerState[i];
  st.visited = true;

  const _id = (id) => {
    const el = document.getElementById(id);
    if (!el) throw new Error("Element not found: " + id);
    return el;
  };
  _id("playerQNum").textContent = "Question No. " + (i + 1);
  _id("playerQText").textContent = q.text;
  _id("playerMarksPos").textContent =
    "Marks for correct answer: +" + q.marks;
  _id("playerMarksNeg").textContent =
    "Negative Marks: -" + q.neg;

  const imgSlot = _id("playerQImageSlot");
  imgSlot.innerHTML = q.image
    ? `<div class="player-qimg-wrap"><img src="${q.image}" alt="Question diagram"></div>`
    : "";

  const optsWrap = document.getElementById("playerOptions");
  if (q.type === "NAT") {
    const displayVal =
      st.answer !== null && st.answer !== undefined ? st.answer : "";
    if (solutionMode) {
      optsWrap.innerHTML = `
        <div class="player-nat-wrap">
          <div style="font-weight:bold; margin-bottom: 10px;">Your Answer: <span style="color:var(--gray-9);">${displayVal || "Not Attempted"}</span></div>
          <div style="font-weight:bold; color:var(--success);">Correct Answer Range: ${q.correct[0]} to ${q.correct[1] || q.correct[0]}</div>
        </div>
      `;
    } else {
      optsWrap.innerHTML = `
        <div class="player-nat-wrap">
          <div class="nat-display" id="playerNatDisplay">${displayVal}</div>
          <div class="nat-keypad">
            <button type="button" class="nat-key nat-key-backspace" onclick="playerNatBackspace()">Backspace</button>
            <div class="nat-key-grid">
              <button type="button" class="nat-key" onclick="playerNatAppend('7')">7</button>
              <button type="button" class="nat-key" onclick="playerNatAppend('8')">8</button>
              <button type="button" class="nat-key" onclick="playerNatAppend('9')">9</button>
              <button type="button" class="nat-key" onclick="playerNatAppend('4')">4</button>
              <button type="button" class="nat-key" onclick="playerNatAppend('5')">5</button>
              <button type="button" class="nat-key" onclick="playerNatAppend('6')">6</button>
              <button type="button" class="nat-key" onclick="playerNatAppend('1')">1</button>
              <button type="button" class="nat-key" onclick="playerNatAppend('2')">2</button>
              <button type="button" class="nat-key" onclick="playerNatAppend('3')">3</button>
              <button type="button" class="nat-key" onclick="playerNatAppend('0')">0</button>
              <button type="button" class="nat-key" onclick="playerNatAppend('.')">.</button>
              <button type="button" class="nat-key" onclick="playerNatAppend('-')">-</button>
            </div>
            <div class="nat-key-arrows">
              <button type="button" class="nat-key nat-key-arrow" onclick="playerNatMove(-1)">&larr;</button>
              <button type="button" class="nat-key nat-key-arrow" onclick="playerNatMove(1)">&rarr;</button>
            </div>
          </div>
          <button type="button" class="nat-clear-all" onclick="playerNatClear()">Clear All</button>
        </div>`;
    }
  } else if (q.type === "MSQ") {
    const selected = Array.isArray(st.answer) ? st.answer : [];
    const correctArr = Array.isArray(q.correct) ? q.correct : [q.correct];
    optsWrap.innerHTML = q.options
      .map(
        (opt, oi) => `
          <label class="player-opt ${solutionMode && correctArr.includes(oi) ? 'correct-bg' : ''} ${solutionMode && selected.includes(oi) && !correctArr.includes(oi) ? 'incorrect-bg' : ''}">
            <input type="checkbox" name="playerOptMsq" value="${oi}" ${selected.includes(oi) ? "checked" : ""} ${solutionMode ? "disabled" : ""} onchange="playerToggleMsqOption(${oi})">
            <span>${opt}</span>
            ${solutionMode && correctArr.includes(oi) ? '<div class="solution-tag correct">Correct Answer</div>' : ''}
            ${solutionMode && selected.includes(oi) ? '<div class="solution-tag marked">Marked Answer</div>' : ''}
          </label>`,
      )
      .join("");
  } else {
    optsWrap.innerHTML = q.options
      .map(
        (opt, oi) => `
          <label class="player-opt ${solutionMode && q.correct === oi ? 'correct-bg' : ''} ${solutionMode && st.answer === oi && q.correct !== oi ? 'incorrect-bg' : ''}">
            <input type="radio" name="playerOpt" value="${oi}" ${st.answer === oi ? "checked" : ""} ${solutionMode ? "disabled" : ""} onchange="playerSelectOption(${oi})">
            <span>${opt}</span>
            ${solutionMode && q.correct === oi ? '<div class="solution-tag correct">Correct Answer</div>' : ''}
            ${solutionMode && st.answer === oi ? '<div class="solution-tag marked">Marked Answer</div>' : ''}
          </label>`,
      )
      .join("");
  }
  
  if (solutionMode && q.solution) {
    optsWrap.innerHTML += `
      <div class="player-solution-block">
        <div class="ps-title">Solution</div>
        <div class="ps-body">${q.solution}</div>
      </div>
    `;
  }
  // optsWrap.innerHTML = q.options
  //   .map(
  //     (opt, oi) => `
  //       <label class="player-opt">
  //         <input type="radio" name="playerOpt" value="${oi}" ${st.answer === oi ? "checked" : ""} onchange="playerSelectOption(${oi})">
  //         <span>${opt}</span>
  //       </label>`,
  //   )
  //   .join("");

  document
    .querySelectorAll(".player-qbtn")
    .forEach((b) => b.classList.remove("current"));
  const qb = document.getElementById("qbtn-" + i);
  if (qb) qb.classList.add("current");

  updatePlayerCounts();
}

function playerSelectOption(oi) {
  playerState[playerCurrent].answer = oi;
}

function playerToggleMsqOption(oi) {
  const st = playerState[playerCurrent];
  if (!Array.isArray(st.answer)) st.answer = [];
  const idx = st.answer.indexOf(oi);
  if (idx === -1) {
    st.answer.push(oi);
  } else {
    st.answer.splice(idx, 1);
  }
}

function playerNatRefreshDisplay(str) {
  const disp = document.getElementById("playerNatDisplay");
  if (disp) disp.textContent = str;
  playerState[playerCurrent].answer = str === "" ? null : parseFloat(str);
}

function playerNatAppend(ch) {
  const disp = document.getElementById("playerNatDisplay");
  if (!disp) return;
  let cur = disp.textContent || "";
  if (ch === "-") {
    cur = cur.startsWith("-") ? cur.slice(1) : "-" + cur;
  } else if (ch === ".") {
    if (cur.includes(".")) return;
    cur += ".";
  } else {
    cur += ch;
  }
  playerNatRefreshDisplay(cur);
}

function playerNatBackspace() {
  const disp = document.getElementById("playerNatDisplay");
  if (!disp) return;
  playerNatRefreshDisplay((disp.textContent || "").slice(0, -1));
}

function playerNatClear() {
  playerNatRefreshDisplay("");
}

function playerNatMove(dir) {
  const target = playerCurrent + dir;
  if (target >= 0 && target < playerQuestions.length) {
    updatePlayerQBtn(playerCurrent);
    renderPlayerQuestion(target);
    updatePlayerCounts();
  }
}

function playerSaveNext() {
  // answer already tracked live via onchange; just mark visited state as-is
  updatePlayerQBtn(playerCurrent);
  goToNextQuestion();
}

function playerMarkReview() {
  playerState[playerCurrent].marked = true;
  updatePlayerQBtn(playerCurrent);
  goToNextQuestion();
}

function playerClearResponse() {
  playerState[playerCurrent].answer = null;
  document
    .querySelectorAll('input[name="playerOpt"]')
    .forEach((r) => (r.checked = false));
  updatePlayerQBtn(playerCurrent);
  updatePlayerCounts();
}

function goToNextQuestion() {
  if (playerCurrent < playerQuestions.length - 1) {
    renderPlayerQuestion(playerCurrent + 1);
  }
  updatePlayerCounts();
}

function renderPlayerQGrid() {
  const grid = document.getElementById("playerQGrid");
  grid.innerHTML = playerQuestions
    .map(
      (q, i) =>
        `<button class="player-qbtn" id="qbtn-${i}" onclick="renderPlayerQuestion(${i})">${i + 1}</button>`,
    )
    .join("");
}

function updatePlayerQBtn(i) {
  const st = playerState[i];
  const btn = document.getElementById("qbtn-" + i);
  if (!btn) return;
  btn.classList.remove("answered", "notanswered", "marked", "correct", "incorrect");
  if (solutionMode) {
    if (st.answer === null || st.answer === undefined || st.answer === "") {
      btn.classList.add("notanswered");
    } else {
      const q = playerQuestions[i];
      let isCorrect = false;
      if (q.type === "MSQ") {
        const correctArr = Array.isArray(q.correct) ? q.correct : [q.correct];
        const selected = Array.isArray(st.answer) ? st.answer : [];
        if (correctArr.length === selected.length && correctArr.every(val => selected.includes(val))) {
          isCorrect = true;
        }
      } else if (q.type === "NAT") {
        const val = parseFloat(st.answer);
        if (!isNaN(val) && val >= q.correct[0] && val <= (q.correct[1] !== undefined ? q.correct[1] : q.correct[0])) {
          isCorrect = true;
        }
      } else {
        if (st.answer === q.correct) isCorrect = true;
      }
      if (isCorrect) btn.classList.add("correct");
      else btn.classList.add("incorrect");
    }
  } else {
    if (st.marked) btn.classList.add("marked");
    if (st.answer !== null && st.answer !== undefined && st.answer !== "") btn.classList.add("answered");
    else if (st.visited) btn.classList.add("notanswered");
  }
}

function updatePlayerCounts() {
  let answered = 0,
    notAnswered = 0,
    notVisited = 0,
    marked = 0;
  playerQuestions.forEach((q, i) => {
    const st = playerState[i];
    updatePlayerQBtn(i);
    if (!st.visited) notVisited++;
    else if (st.answer !== null) answered++;
    else notAnswered++;
    if (st.marked) marked++;
  });
  const _id = (id) => {
    const el = document.getElementById(id);
    if (!el) throw new Error("Element not found: " + id);
    return el;
  };
  _id("cntAnswered").textContent = answered;
  _id("cntNotAnswered").textContent = notAnswered;
  _id("cntNotVisited").textContent = notVisited;
  _id("cntMarked").textContent = marked;
}

function playerSubmit() {
  let answered = 0,
    notAnswered = 0,
    notVisited = 0,
    marked = 0,
    markedAnswered = 0;
  playerQuestions.forEach((q, i) => {
    const st = playerState[i];
    if (!st.visited) notVisited++;
    else if (st.answer !== null) answered++;
    else notAnswered++;
    if (st.marked && st.answer !== null) markedAnswered++;
    else if (st.marked) marked++;
  });

  document.getElementById("sumTotal").textContent = playerQuestions.length;
  document.getElementById("sumSectionTotal").textContent =
    playerQuestions.length;
  const statsHtml =
    `<span>Answered: <b>${answered}</b></span>` +
    `<span>Not Answered: <b>${notAnswered}</b></span>` +
    `<span>Marked for Review: <b>${marked}</b></span>` +
    `<span>Answer and Marked for Review: <b>${markedAnswered}</b></span>` +
    `<span>Not Visited: <b>${notVisited}</b></span>`;
  document.getElementById("sumTotalStats").innerHTML = statsHtml;
  document.getElementById("sumSectionStats").innerHTML = statsHtml;
  document.getElementById("sumSectionName").textContent =
    document.getElementById("playerSideSecName").textContent;

  document.getElementById("summaryOverlay").classList.add("show");
}

function closeSummaryModal() {
  document.getElementById("summaryOverlay").classList.remove("show");
}

function confirmSubmit() {
  closeSummaryModal();
  clearInterval(playerTimerInterval);

  // ---- score the attempt ----
  let score = 0,
    maxScore = 0,
    correctCount = 0,
    wrongCount = 0,
    unattempted = 0;
  playerQuestions.forEach((q, i) => {
    maxScore += q.marks;
    const given = playerState[i].answer;
    if (
      given === null ||
      (Array.isArray(given) && given.length === 0)
    ) {
      unattempted++;
    } else if (q.type === "MSQ") {
      const correctArr = [...q.correct].sort();
      const givenArr = [...given].sort();
      const isCorrect =
        correctArr.length === givenArr.length &&
        correctArr.every((v, idx) => v === givenArr[idx]);
      if (isCorrect) {
        correctCount++;
        score += q.marks;
      } else {
        wrongCount++;
        score -= q.neg;
      }
    } else if (given === q.correct) {
      correctCount++;
      score += q.marks;
    } else {
      wrongCount++;
      score -= q.neg;
    }
  });
  score = Math.round(score * 100) / 100;

  const timeTakenSecs = playerDurationMins * 60 - playerTimerSecs;
  const tMin = Math.floor(timeTakenSecs / 60),
    tSec = timeTakenSecs % 60;

  lastResult = {
    score,
    maxScore,
    correctCount,
    wrongCount,
    unattempted,
    timeTakenSecs,
    tMin,
    tSec,
  };

  document.getElementById("playerOverlay").classList.remove("show");
  document.getElementById("successOverlay").classList.add("show");
  
  // Submit to DB
  const token = localStorage.getItem('apexcore_token');
  if (token) {
    const payload = {
      testName: document.getElementById("playerTopTitle").textContent,
      score,
      maxScore,
      correctCount,
      wrongCount,
      unattempted,
      timeTakenSecs,
      answers: playerState
    };
    fetch('/api/submit-test', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(payload)
    }).then(res => res.json()).then(data => {
      if (data.success) {
        userResults.push({ testName: payload.testName, score: payload.score, answers: payload.answers });
        const seriesObj = testSeries.find((x) => x.id === currentTestListId);
        if (seriesObj) renderTestList(seriesObj, "all");
      }
    }).catch(err => console.error("Error submitting test:", err));
  }

  setTimeout(() => {
    document.getElementById("successOverlay").classList.remove("show");
    showResultPage();
  }, 1600);
}

let lastResult = null;

function openPastResult(testName) {
  const result = userResults.find(r => r.testName === testName);
  if (result) {
    // Reconstruct lastResult format
    const tMin = Math.floor(result.timeTakenSecs / 60);
    const tSec = result.timeTakenSecs % 60;
    lastResult = {
      score: result.score,
      maxScore: result.maxScore,
      correctCount: result.correctCount,
      wrongCount: result.wrongCount,
      unattempted: result.unattempted,
      timeTakenSecs: result.timeTakenSecs,
      tMin,
      tSec,
      answers: result.answers || {}
    };
    document.getElementById("resultCrumbName").textContent = testName;
    showResultPage();
  }
}

function openSolutionMode(testName) {
  const result = userResults.find(r => r.testName === testName);
  if (!result || !result.answers) {
    alert("Answers not found for this test. Past tests before this update do not have answers saved.");
    return;
  }
  
  const testKey = findMatchingTest(testName);
  if (!testKey) {
    alert("Test data not found.");
    return;
  }
  
  const backendTestId = testBackendIdMap[testKey];
  const courseId = currentTestListId;
  const token = localStorage.getItem('apexcore_token');
  
  fetch(`/api/test/${courseId}/${backendTestId}`, {
    headers: { 'Authorization': 'Bearer ' + token }
  })
  .then(res => res.json())
  .then(data => {
    if (data.success) {
      closeResult();
      startPlayer(testName, data.questions);
      solutionMode = true; // Set this AFTER startPlayer resets it
      
      // restore the player state
      playerState = result.answers;
      renderPlayer();
    } else {
      alert("Error loading test: " + data.message);
    }
  })
  .catch(err => {
    console.error("Test load error", err);
    alert("Error fetching test: " + err.message);
  });
}

function showResultPage() {
  const r = lastResult;
  const user = currentUser || { name: "Guest User", email: "" };
  document.getElementById("resultUserAvatar").textContent = (
    user.name.trim().charAt(0) || "U"
  ).toUpperCase();
  document.getElementById("resultUserName").textContent = user.name;
  document.getElementById("resultUserEmail").textContent = user.email;
  document.getElementById("resultCrumbName").textContent =
    document.getElementById("playerSideSecName").textContent;

  document.getElementById("rdScore").textContent = r.score + " / " + r.maxScore;
  document.getElementById("legCorrect").textContent = r.correctCount;
  document.getElementById("legIncorrect").textContent = r.wrongCount;
  document.getElementById("legUnattempted").textContent = r.unattempted;

  const total = playerQuestions.length;
  const cPct = (r.correctCount / total) * 100;
  const iPct = (r.wrongCount / total) * 100;
  const donutGradient = `#2F9E63 0 ${cPct}%, #D9534F ${cPct}% ${cPct + iPct}%, #E8A33D ${cPct + iPct}% 100%`;
  document
    .getElementById("resultDonut")
    .style.setProperty("--donut-gradient", donutGradient);
  document.getElementById("resultSubjectDonut").style.background =
    `conic-gradient(${donutGradient})`;

  const accuracy =
    r.correctCount + r.wrongCount > 0
      ? Math.round((r.correctCount / (r.correctCount + r.wrongCount)) * 1000) /
      10
      : 0;
  document.getElementById("statAccuracy").textContent = accuracy + "%";
  document.getElementById("statTime").textContent =
    r.tMin + " min " + r.tSec + " sec";

  // Rank/percentile are illustrative until this test is connected to a real leaderboard.
  const pseudoRank = Math.max(1, 63 - Math.round(r.score));
  document.getElementById("statRank").textContent = pseudoRank + " out of 63";
  document.getElementById("statPercentile").textContent =
    Math.max(1, Math.round((1 - pseudoRank / 63) * 100 * 10) / 10) + "%";

  document.body.style.overflow = "";
  document.getElementById("resultOverlay").classList.add("show");
}

function closeResult() {
  document.getElementById("resultOverlay").classList.remove("show");
}

/* ---------- scientific calculator ---------- */
// Each row mixes 6 scientific-function keys with 5 numeric/operator keys, laid out on an 11-col grid
// like the reference exam calculator. [label, css class, action]
const calcRows = [
  [
    ["sinh", "fn", "sinh("],
    ["cosh", "fn", "cosh("],
    ["tanh", "fn", "tanh("],
    ["Exp", "op", "*10^"],
    ["(", "", ""],
    [")", "", ""],
    ["⌫", "bksp", "__back", 2],
    ["C", "clr", "__clear"],
    ["+/-", "pm", "__pm"],
    ["√", "fn", "sqrt("],
  ],
  [
    ["sinh⁻¹", "fn", "asinh("],
    ["cosh⁻¹", "fn", "acosh("],
    ["tanh⁻¹", "fn", "atanh("],
    ["log_x", "fn", "log("],
    ["ln", "fn", "ln("],
    ["log", "fn", "log("],
    ["7", "", ""],
    ["8", "", ""],
    ["9", "", ""],
    ["÷", "op", "/"],
    ["%", "op", "__pct"],
  ],
  [
    ["π", "", "π"],
    ["e", "", "e"],
    ["n!", "fn", "__fact"],
    ["log_y", "fn", "log("],
    ["eˣ", "fn", "__expx"],
    ["10ˣ", "fn", "__tenx"],
    ["4", "", ""],
    ["5", "", ""],
    ["6", "", ""],
    ["×", "op", "*"],
    ["1/x", "fn", "__recip"],
  ],
  [
    ["sin", "fn", "sin("],
    ["cos", "fn", "cos("],
    ["tan", "fn", "tan("],
    ["xʸ", "op", "^"],
    ["x³", "fn", "__cube"],
    ["x²", "fn", "__sq"],
    ["1", "", ""],
    ["2", "", ""],
    ["3", "", ""],
    ["−", "op", "-"],
    ["=", "eq", "", null, 2],
  ],
  [
    ["sin⁻¹", "fn", "asin("],
    ["cos⁻¹", "fn", "acos("],
    ["tan⁻¹", "fn", "atan("],
    ["√x", "fn", "sqrt("],
    ["∛x", "fn", "__cbrt"],
    ["|x|", "fn", "abs("],
    ["0", "", ""],
    [".", "", ""],
    ["+", "op", "+", 2],
  ],
];

let calcExpr = "";
let calcMemoryVal = 0;
let calcAngleMode = "deg";

(function buildCalc() {
  const grid = document.getElementById("calcGrid");
  let html = "";
  calcRows.forEach((row) => {
    row.forEach(([label, cls, action, colSpan, rowSpan]) => {
      const styleBits = [];
      if (colSpan) styleBits.push(`grid-column: span ${colSpan}`);
      if (rowSpan) styleBits.push(`grid-row: span ${rowSpan}`);
      const style = styleBits.length ? ` style="${styleBits.join(";")}"` : "";
      const isBksp = cls === "bksp";
      const btnLabel = isBksp
        ? '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M20 12H8M11 8l-4 4 4 4"/></svg>'
        : label;
      if (action === "__clear") {
        html += `<button class="${cls}"${style} onclick="calcClear()">${btnLabel}</button>`;
      } else if (action === "__back") {
        html += `<button class="${cls}"${style} onclick="calcBackspace()">${btnLabel}</button>`;
      } else if (cls === "eq") {
        html += `<button class="${cls}"${style} onclick="calcEvaluate()">${btnLabel}</button>`;
      } else if (cls === "op" || cls === "fn" || action) {
        html += `<button class="${cls}"${style} onclick="calcSciPress('${(action || label).replace(/'/g, "\\'")}')">${btnLabel}</button>`;
      } else {
        html += `<button class="${cls}"${style} onclick="calcNumPress('${label.replace(/'/g, "\\'")}')">${btnLabel}</button>`;
      }
    });
  });
  grid.innerHTML = html;
})();

function calcRefreshDisplay() {
  document.getElementById("calcExprDisplay").value = calcExpr;
}

function calcClear() {
  calcExpr = "";
  calcRefreshDisplay();
  document.getElementById("calcDisplay").value = "0";
}

function calcBackspace() {
  calcExpr = calcExpr.slice(0, -1);
  calcRefreshDisplay();
  document.getElementById("calcDisplay").value = calcExpr || "0";
}

function calcNumPress(val) {
  calcExpr += val;
  calcRefreshDisplay();
  document.getElementById("calcDisplay").value = calcExpr || "0";
}

function calcSciPress(action) {
  switch (action) {
    case "__mod":
      calcExpr += "%";
      break;
    case "__mc":
      calcMemoryVal = 0;
      break;
    case "__mr":
      calcExpr += String(calcMemoryVal);
      break;
    case "__ms":
      calcEvaluate(true);
      calcMemoryVal =
        parseFloat(document.getElementById("calcDisplay").value) || 0;
      break;
    case "__mplus":
      calcEvaluate(true);
      calcMemoryVal +=
        parseFloat(document.getElementById("calcDisplay").value) || 0;
      break;
    case "__mminus":
      calcEvaluate(true);
      calcMemoryVal -=
        parseFloat(document.getElementById("calcDisplay").value) || 0;
      break;
    case "__fact":
      calcExpr += "__fact(";
      break;
    case "__expx":
      calcExpr += "exp(";
      break;
    case "__tenx":
      calcExpr += "10^(";
      break;
    case "__sq":
      calcExpr += "^2";
      break;
    case "__cube":
      calcExpr += "^3";
      break;
    case "__cbrt":
      calcExpr += "cbrt(";
      break;
    case "__pct":
      calcExpr += "/100";
      break;
    case "__pm":
      calcExpr =
        calcExpr.startsWith("-(") && calcExpr.endsWith(")")
          ? calcExpr.slice(2, -1)
          : calcExpr
            ? "-(" + calcExpr + ")"
            : "-";
      break;
    case "__recip":
      calcExpr = "1/(" + (calcExpr || "0") + ")";
      calcEvaluate();
      return;
    default:
      calcExpr += action;
  }
  calcRefreshDisplay();
  document.getElementById("calcDisplay").value = calcExpr || "0";
}

function calcMemory(op) {
  calcSciPress(
    op === "MC"
      ? "__mc"
      : op === "MR"
        ? "__mr"
        : op === "MS"
          ? "__ms"
          : op === "M+"
            ? "__mplus"
            : "__mminus",
  );
}

function calcFn(name) {
  if (name === "mod") calcSciPress("__mod");
}

function __fact(n) {
  n = Math.round(n);
  if (n < 0) return NaN;
  let r = 1;
  for (let i = 2; i <= n; i++) r *= i;
  return r;
}

function calcEvaluate(silent) {
  try {
    const deg2rad = (x) => (calcAngleMode === "deg" ? (x * Math.PI) / 180 : x);
    const rad2deg = (x) => (calcAngleMode === "deg" ? (x * 180) / Math.PI : x);
    let safe = calcExpr
      .replace(/×/g, "*")
      .replace(/÷/g, "/")
      .replace(/−/g, "-")
      .replace(/π/g, "Math.PI")
      .replace(/(?<![a-zA-Z_])e(?![a-zA-Z_(])/g, "Math.E")
      .replace(/\^/g, "**")
      .replace(/sin\(/g, "__sin(")
      .replace(/cos\(/g, "__cos(")
      .replace(/tan\(/g, "__tan(")
      .replace(/asin\(/g, "__asin(")
      .replace(/acos\(/g, "__acos(")
      .replace(/atan\(/g, "__atan(")
      .replace(/sinh\(/g, "Math.sinh(")
      .replace(/cosh\(/g, "Math.cosh(")
      .replace(/tanh\(/g, "Math.tanh(")
      .replace(/asinh\(/g, "Math.asinh(")
      .replace(/acosh\(/g, "Math.acosh(")
      .replace(/atanh\(/g, "Math.atanh(")
      .replace(/ln\(/g, "Math.log(")
      .replace(/log\(/g, "Math.log10(")
      .replace(/sqrt\(/g, "Math.sqrt(")
      .replace(/cbrt\(/g, "Math.cbrt(")
      .replace(/abs\(/g, "Math.abs(")
      .replace(/exp\(/g, "Math.exp(")
      .replace(/__fact\(/g, "__fact(");

    const __sin = (x) => Math.sin(deg2rad(x));
    const __cos = (x) => Math.cos(deg2rad(x));
    const __tan = (x) => Math.tan(deg2rad(x));
    const __asin = (x) => rad2deg(Math.asin(x));
    const __acos = (x) => rad2deg(Math.acos(x));
    const __atan = (x) => rad2deg(Math.atan(x));

    const result = Function(
      "__sin",
      "__cos",
      "__tan",
      "__asin",
      "__acos",
      "__atan",
      "__fact",
      '"use strict";return (' + safe + ")",
    )(__sin, __cos, __tan, __asin, __acos, __atan, __fact);

    const display = document.getElementById("calcDisplay");
    const rounded = Math.round(result * 1e10) / 1e10;
    display.value = String(rounded);
    if (!silent) {
      calcExpr = String(rounded);
      calcRefreshDisplay();
    }
  } catch (e) {
    document.getElementById("calcDisplay").value = "Error";
  }
}

function toggleCalculator() {
  document.getElementById("calcBox").classList.toggle("show");
}

function toggleCalcMinimize() {
  document.getElementById("calcBox").classList.toggle("minimized");
}

function toggleCalcHelp() {
  document.getElementById("calcHelpTip").classList.toggle("show");
}

document.getElementById("tlTabs").addEventListener("click", (e) => {
  if (!e.target.classList.contains("tab")) return;
  document
    .querySelectorAll("#tlTabs .tab")
    .forEach((tb) => tb.classList.remove("active"));
  e.target.classList.add("active");
  const t = testSeries.find((x) => x.id === currentTestListId);
  if (t) renderTestList(t, e.target.dataset.f);
});

/* restore a saved login on page load / refresh, unless the app version changed */
restoreSession();
