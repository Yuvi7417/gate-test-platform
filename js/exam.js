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

// Global Fetch Interceptor for JWT Expiry & Auto-refresh
const originalFetch = window.fetch;
let isRefreshingToken = false;
let refreshSubscribers = [];

function onTokenRefreshed(newToken) {
  refreshSubscribers.forEach(cb => cb(newToken));
  refreshSubscribers = [];
}

async function attemptTokenRefresh() {
  if (isRefreshingToken) {
    return new Promise(resolve => refreshSubscribers.push(resolve));
  }
  isRefreshingToken = true;

  try {
    // 1. Silent Firebase refresh if user is signed in with Firebase
    if (window.firebase && firebase.auth && firebase.auth().currentUser) {
      try {
        const idToken = await firebase.auth().currentUser.getIdToken(true);
        const fbRes = await originalFetch('/api/firebase-login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ idToken })
        });
        const data = await fbRes.json();
        if (data.success && data.token) {
          localStorage.setItem('apexcore_token', data.token);
          onTokenRefreshed(data.token);
          isRefreshingToken = false;
          return data.token;
        }
      } catch (e) {
        console.warn("Firebase silent refresh error:", e);
      }
    }

    // 2. Server-side token refresh via /api/refresh-token
    const currentToken = localStorage.getItem('apexcore_token');
    if (currentToken) {
      try {
        const refRes = await originalFetch('/api/refresh-token', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${currentToken}` },
          body: JSON.stringify({ token: currentToken })
        });
        const data = await refRes.json();
        if (data.success && data.token) {
          localStorage.setItem('apexcore_token', data.token);
          onTokenRefreshed(data.token);
          isRefreshingToken = false;
          return data.token;
        }
      } catch (e) {
        console.warn("Backend token refresh error:", e);
      }
    }
  } catch (err) {
    console.error("Token refresh failed:", err);
  }

  isRefreshingToken = false;
  onTokenRefreshed(null);
  return null;
}

/* ---------- Single-Device Active Session Monitor ---------- */
let sessionCheckTimer = null;

function startSessionCheck() {
  if (sessionCheckTimer) clearInterval(sessionCheckTimer);
  sessionCheckTimer = setInterval(checkActiveSession, 20000); // Check every 20 seconds
}

function stopSessionCheck() {
  if (sessionCheckTimer) {
    clearInterval(sessionCheckTimer);
    sessionCheckTimer = null;
  }
}

async function checkActiveSession() {
  const token = localStorage.getItem('apexcore_token');
  if (!token || !currentUser) return;

  try {
    const res = await originalFetch('/api/session-check', {
      headers: { 'Authorization': `Bearer ${token}` }
    });
    if (res.status === 401) {
      const data = await res.json().catch(() => ({}));
      if (data && data.sessionInvalidated) {
        stopSessionCheck();
        alert("Your account was logged in on another device. You have been logged out from this session.");
        clearSession();
        if (typeof logoutUser === 'function') logoutUser();
      }
    }
  } catch (err) {
    // Network hiccup, ignore
  }
}

// Check session immediately when user switches back to this tab
document.addEventListener("visibilitychange", () => {
  if (!document.hidden && currentUser && localStorage.getItem('apexcore_token')) {
    checkActiveSession();
  }
});

window.fetch = async function (...args) {
  let res;
  try {
    res = await originalFetch.apply(this, args);
  } catch (netErr) {
    throw netErr;
  }

  const url = typeof args[0] === 'string' ? args[0] : (args[0] && args[0].url ? args[0].url : '');

  // If server reported token expired via header on a successful recovery, refresh token silently in background
  if (res.headers && res.headers.get('X-Token-Expired') === 'true') {
    attemptTokenRefresh().catch(() => { });
  }

  // Handle 401/403
  if (!res.ok && (res.status === 401 || res.status === 403)) {
    if (url.includes('/api/') && !url.includes('/api/refresh-token') && !url.includes('/api/firebase-login') && !url.includes('/api/verify-otp') && !url.includes('/api/send-otp')) {
      // Check if session was invalidated because user logged in on another device
      let isSessionInvalidated = false;
      try {
        const errData = await res.clone().json();
        if (errData && errData.sessionInvalidated) {
          isSessionInvalidated = true;
        }
      } catch (e) { }

      if (isSessionInvalidated) {
        stopSessionCheck();
        alert("Your account was logged in on another device. You have been logged out from this session.");
        clearSession();
        if (typeof logoutUser === 'function') logoutUser();
        throw new Error("HTTP 401 - Session superseded on another device");
      }

      const newToken = await attemptTokenRefresh();
      if (newToken) {
        // Clone request with updated token
        let input = args[0];
        let init = args[1] ? { ...args[1] } : {};
        if (typeof input === 'string') {
          init.headers = init.headers ? new Headers(init.headers) : new Headers();
          init.headers.set('Authorization', `Bearer ${newToken}`);
          return originalFetch(input, init);
        } else if (input instanceof Request) {
          const newHeaders = new Headers(input.headers);
          newHeaders.set('Authorization', `Bearer ${newToken}`);
          const newReq = new Request(input, { headers: newHeaders });
          return originalFetch(newReq);
        }
      }

      // If token refresh failed:
      if (!url.includes('/api/submit-test')) {
        alert("Session expired. Please log in again.");
        clearSession();
        if (typeof logoutUser === 'function') logoutUser();
      }
      throw new Error("HTTP " + res.status + " - Authentication Error");
    }
  }
  return res;
};

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
    localStorage.removeItem('apexcore_token');
    localStorage.removeItem('apex_user_results');
    userResults = [];
    window.userResults = [];
  } catch (e) { }
}

function syncPendingSubmissions() {
  const token = localStorage.getItem('apexcore_token');
  if (!token) return;
  try {
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key && key.startsWith("apex_pending_test_")) {
        const raw = localStorage.getItem(key);
        if (raw) {
          const payload = JSON.parse(raw);
          fetch('/api/submit-test', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(payload)
          }).then(res => res.json()).then(data => {
            if (data && data.success) {
              localStorage.removeItem(key);
            }
          }).catch(e => console.warn("Failed syncing pending test:", e));
        }
      }
    }
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
  fetchFreshUserData();
  syncLearnNav();
  syncPendingSubmissions();
  startSessionCheck();
}

async function fetchFreshUserData(retries = 5) {
  const token = localStorage.getItem('apexcore_token');
  if (!token) return;
  try {
    const res = await fetch('/api/user', {
      headers: { 'Authorization': `Bearer ${token}` }
    });
    if (!res.ok) {
      if (res.status === 401 || res.status === 403) {
        alert("Session expired. Please log in again.");
        clearSession();
        logoutUser();
        return;
      }
      if ((res.status === 502 || res.status === 503 || res.status === 504) && retries > 0) {
        setTimeout(() => fetchFreshUserData(retries - 1), 4000);
        return;
      }
      throw new Error("HTTP " + res.status);
    }
    const data = await res.json();
    if (data.success && data.user) {
      enrolledIds = data.user.enrolledCourses || [];
      currentUser = { name: data.user.name, email: data.user.email, _id: data.user._id };
      saveSession();
      syncLearnNav();
      fetchCloudBookmarks();

      const learnTarget = document.getElementById("view-learn");
      if (learnTarget && learnTarget.classList.contains("active")) {
        renderLearn();
      }
    }
  } catch (err) {
    console.error("Error fetching fresh user data:", err);
    if (retries > 0) {
      setTimeout(() => fetchFreshUserData(retries - 1), 4000);
    }
  }
}

/* ---------- session state ---------- */
let currentOtp = null;
let otpTimerInterval = null;
let pendingUser = null;
let pendingEnrollId = null;
let pendingTestAfterLogin = null;
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

  // Call the backend API to send the email with wakeup retry
  const trySendOtp = (retries) => {
    return fetch('/api/send-otp', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: name,
        email: email
      })
    }).then(async res => {
      if (!res.ok) {
        if ((res.status === 429 || res.status === 502 || res.status === 503 || res.status === 504) && retries > 0) {
          if (hintEl) hintEl.textContent = "Server is waking up, sending OTP in a moment...";
          return new Promise(resolve => setTimeout(resolve, res.status === 429 ? 5000 : 3500)).then(() => trySendOtp(retries - 1));
        }
      }
      return res.json();
    });
  };

  trySendOtp(5)
    .then(data => {
      if (data.success) {
        if (hintEl) hintEl.textContent = "OTP has been sent to your email!";
        console.log("OTP Email Sent via Backend Successfully!");
      } else {
        const errorMsg = data.message + (data.details ? "\nDetails: " + data.details : "")
          + (data.template_used ? "\nTemplate Used: " + data.template_used : "")
          + (data.public_key ? "\nPublic Key: " + data.public_key : "")
          + (data.private_key_start ? "\nPrivate Key (First 4): " + data.private_key_start : "")
          + (data.payloadSent ? "\nPayload Sent: " + JSON.stringify(data.payloadSent) : "");
        if (hintEl) hintEl.textContent = errorMsg;
        console.warn("Backend Email Warning:", errorMsg);
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

  const tryVerify = (retries) => {
    return fetch('/api/verify-otp', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: pendingUser.name,
        email: pendingUser.email,
        otp: val
      })
    }).then(async res => {
      if (!res.ok) {
        if ((res.status === 429 || res.status === 502 || res.status === 503 || res.status === 504) && retries > 0) {
          btn.innerHTML = `<svg class="spinner" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" style="margin-right:8px;"><circle cx="12" cy="12" r="10" stroke-opacity="0.25"/><path d="M12 2a10 10 0 0 1 10 10"/></svg> Waking server...`;
          return new Promise(resolve => setTimeout(resolve, res.status === 429 ? 5000 : 3500)).then(() => tryVerify(retries - 1));
        }
        throw new Error("Server Error " + res.status);
      }
      return res.json();
    });
  };

  tryVerify(5)
    .then(data => {
      btn.innerHTML = "VERIFY";
      btn.disabled = false;

      if (data.success) {
        localStorage.setItem('apexcore_token', data.token);
        enrolledIds = data.user.enrolledCourses || [];
        loginUser(data.user);
        closeLogin();

        if (pendingTestAfterLogin) {
          const { testName, seriesId } = pendingTestAfterLogin;
          pendingTestAfterLogin = null;
          fetchUserResults().then(() => {
            if (typeof openInstructions === 'function') {
              openInstructions(testName, seriesId);
            }
          });
        } else if (pendingEnrollId) {
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
  if (btn && btn.disabled) return;
  if (btn) {
    btn.innerHTML = `<svg class="spinner" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" style="margin-right:8px;"><circle cx="12" cy="12" r="10" stroke-opacity="0.25"/><path d="M12 2a10 10 0 0 1 10 10"/></svg> Signing in...`;
    btn.disabled = true;
  }

  firebase.auth().signInWithPopup(provider)
    .then((result) => {
      return result.user.getIdToken();
    })
    .then((idToken) => {
      const tryLogin = (retries) => {
        return fetch('/api/firebase-login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ idToken })
        }).then(res => {
          if (!res.ok) {
            if ((res.status === 429 || res.status === 502 || res.status === 503 || res.status === 504) && retries > 0) {
              const delay = res.status === 429 ? 5000 : 3500;
              if (btn) btn.innerHTML = `<svg class="spinner" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" style="margin-right:8px;"><circle cx="12" cy="12" r="10" stroke-opacity="0.25"/><path d="M12 2a10 10 0 0 1 10 10"/></svg> Server waking up, please wait...`;
              return new Promise(resolve => setTimeout(resolve, delay)).then(() => tryLogin(retries - 1));
            }
            throw new Error("Server Error " + res.status);
          }
          return res.json();
        });
      };
      return tryLogin(12);
    })
    .then(data => {
      if (btn) {
        btn.innerHTML = `Continue with Google`;
        btn.disabled = false;
      }

      if (data.success) {
        localStorage.setItem('apexcore_token', data.token);
        enrolledIds = data.user.enrolledCourses || [];
        loginUser(data.user);
        closeLogin();
        fetchUserResults();

        if (pendingTestAfterLogin) {
          const { testName, seriesId } = pendingTestAfterLogin;
          pendingTestAfterLogin = null;
          fetchUserResults().then(() => {
            if (typeof openInstructions === 'function') {
              openInstructions(testName, seriesId);
            }
          });
        } else if (pendingEnrollId) {
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
      if (btn) {
        btn.innerHTML = `Continue with Google`;
        btn.disabled = false;
      }
      if (error.code !== 'auth/popup-closed-by-user' && error.code !== 'auth/cancelled-popup-request') {
        const msg = error.message && error.message.includes('429') 
          ? "Server is currently waking up from sleep. Please wait a few seconds and try again." 
          : error.message;
        alert("Google Sign-In: " + msg);
      }
    });
}

let userResults = (() => {
  try {
    const cached = localStorage.getItem("apex_user_results");
    return cached ? JSON.parse(cached) : [];
  } catch (e) {
    return [];
  }
})();
window.userResults = userResults;

function isResultForSeries(r, tId) {
  if (!r || !tId) return false;
  const sId = (r.seriesId && r.seriesId !== 'undefined' && r.seriesId !== 'null') ? String(r.seriesId).trim() : null;
  if (sId && sId === String(tId)) return true;
  if (sId && sId !== String(tId)) return false;

  const nameUpper = (r.testName || '').toUpperCase();
  if (tId === 'weekly-cs-gate-2027') {
    return nameUpper.includes('WEEKLY QUIZ') || nameUpper.startsWith('WQT');
  }
  if (tId === 'demo-test') {
    return nameUpper.includes('DEMO');
  }
  if (tId === 'cs-gate-classes') {
    if (nameUpper.includes('WEEKLY QUIZ') || nameUpper.startsWith('WQT') || nameUpper.includes('DEMO') || nameUpper.includes('2026') || /\bEE\b/.test(nameUpper) || nameUpper.includes('ELECTRIC') || nameUpper.includes('POWER') || nameUpper.includes('CIVIL') || nameUpper.includes('MECHANICAL')) {
      return false;
    }
    // Accordion pyq tests in cse-gate-2027 have raw names like TWT-c-programming, SWT-c-programming (no spaces)
    if (/^[T|S]WT-[a-z]/i.test(r.testName || '')) {
      return false;
    }
    return nameUpper.includes('2027') || nameUpper.includes('FULL TEST') || nameUpper.startsWith('FST') || nameUpper.startsWith('FLT') || nameUpper.includes('TOPICWISE') || nameUpper.includes('SUBJECTWISE') || nameUpper.includes('MIXED') || nameUpper.startsWith('TWT') || nameUpper.startsWith('SWT') || nameUpper.startsWith('MST');
  }
  if (tId === 'pw-cs-gate-2026' || tId === 'pw-cs-gate' || tId === 'cse-gate-2026-pyq') {
    if (nameUpper.includes('WEEKLY QUIZ') || nameUpper.startsWith('WQT') || nameUpper.includes('DEMO')) return false;
    return true;
  }
  if (tId === 'cs-gate-pyq') {
    if (nameUpper.includes('ISRO') || (nameUpper.startsWith('GATE CSE') && /20\d\d/.test(nameUpper)) || nameUpper.includes('WEEKLY QUIZ') || nameUpper.startsWith('WQT') || nameUpper.includes('DEMO') || nameUpper.includes('2026') || nameUpper.includes('2027') || nameUpper.includes('FULL TEST') || nameUpper.startsWith('FST')) {
      return false;
    }
    return true;
  }
  if (tId === 'cse-gate-2027') {
    if (nameUpper.includes('ISRO') || (nameUpper.startsWith('GATE CSE') && /20\d\d/.test(nameUpper))) {
      return true;
    }
    if (nameUpper.includes('WEEKLY QUIZ') || nameUpper.startsWith('WQT') || nameUpper.includes('DEMO') || nameUpper.includes('2026') || nameUpper.includes('FULL TEST') || nameUpper.startsWith('FST')) {
      return false;
    }
    if (nameUpper.includes('CSE 2027-TOPICWISE') || nameUpper.includes('CSE 2027-SUBJECTWISE')) {
      return false;
    }
    return true;
  }
  if (tId === 'ee-gate-pyq-2027' || tId === 'ee-gate-ace-2026' || tId === 'ee-gate-pyq') {
    if (nameUpper.includes('WEEKLY QUIZ') || nameUpper.startsWith('WQT') || nameUpper.includes('DEMO')) return false;
    return /\bEE\b/.test(nameUpper) || nameUpper.includes('ELECTRIC') || nameUpper.includes('POWER');
  }
  return true;
}
window.isResultForSeries = isResultForSeries;


async function fetchUserResults(retries = 5) {
  const token = localStorage.getItem('apexcore_token');
  if (!token) return;
  try {
    const res = await fetch('/api/user-results', {
      headers: { 'Authorization': `Bearer ${token}` }
    });
    if (!res.ok) {
      if (res.status === 401 || res.status === 403) {
        alert("Session expired. Please log in again.");
        clearSession();
        logoutUser();
        return;
      }
      if ((res.status === 502 || res.status === 503 || res.status === 504) && retries > 0) {
        setTimeout(() => fetchUserResults(retries - 1), 4000);
        return;
      }
      throw new Error("HTTP " + res.status);
    }
    const data = await res.json();
    if (data.success) {
      userResults = data.results || [];
      window.userResults = userResults;
      try {
        localStorage.setItem("apex_user_results", JSON.stringify(userResults));
      } catch (e) { }

      // Re-render UI if test list is currently open (handles server cold-start delays)
      const testView = document.getElementById("view-tests");
      if (testView && testView.classList.contains("active")) {
        if (typeof window.filterByType === 'function') {
          window.filterByType();
        }
      }
      const detailView = document.getElementById("view-detail");
      if (detailView && detailView.classList.contains("active") && typeof currentDetailId !== "undefined" && (currentDetailId === "cse-gate-2027" || currentDetailId === "cs-gate-pyq" || currentDetailId === "pw-cs-gate-2026" || currentDetailId === "pw-cs-gate")) {
        if (typeof openDetail === 'function') {
          openDetail(currentDetailId, false);
        }
      }
    }
  } catch (err) {
    console.error("Error fetching results:", err);
    if (retries > 0) {
      setTimeout(() => fetchUserResults(retries - 1), 4000);
    }
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
  syncPendingSubmissions();
  startSessionCheck();
}

function toggleProfileMenu(e) {
  e.stopPropagation();
  document.getElementById("profileChip").classList.toggle("open");
}
document.addEventListener("click", () =>
  document.getElementById("profileChip").classList.remove("open"),
);

function logoutUser(e) {
  if (e && e.stopPropagation) e.stopPropagation();
  stopSessionCheck();
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

  // If course is FREE, bypass Razorpay
  const isFree = (ts.price && ts.price.toString().trim().toUpperCase() === "FREE") || Number(ts.basePrice) === 0;
  if (isFree) {
    fetch('/api/enroll-free', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      },
      body: JSON.stringify({ courseId: id })
    })
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          alert("Successfully enrolled in " + ts.title + "!");
          if (!enrolledIds.includes(id)) enrolledIds.push(id);
          enrollAndGo(id);
        } else {
          alert("Error: " + data.message);
        }
      })
      .catch(err => {
        console.error(err);
        alert("Server error enrolling in course.");
      });
    return;
  }
  const amountToPay = Math.round(ts.basePrice * 100); // Converted to paise (no GST added)

  fetch('/api/create-order', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    },
    body: JSON.stringify({
      courseId: id,
      amount: amountToPay,
      userEmail: currentUser ? currentUser.email : "",
      userName: currentUser ? currentUser.name : ""
    })
  })
    .then(res => res.json())
    .then(data => {
      if (!data.success) {
        alert("Failed to initiate payment: " + data.message);
        return;
      }

      let isEnrolled = false;
      const options = {
        key: data.key_id,
        amount: data.order.amount,
        currency: data.order.currency,
        name: "Apex Core",
        description: ts.title,
        order_id: data.order.id,
        handler: function (response) {
          isEnrolled = true;
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
                if (verifyData.user && Array.isArray(verifyData.user.enrolledCourses)) {
                  enrolledIds = verifyData.user.enrolledCourses;
                }
                enrollAndGo(id);
              } else {
                console.warn("Verification warning:", verifyData.message);
                reconcilePayment(data.order.id, id, true);
              }
            })
            .catch(err => {
              console.error("Verification error, checking order status:", err);
              reconcilePayment(data.order.id, id, true);
            });
        },
        modal: {
          ondismiss: function () {
            // When user returns from mobile UPI app (GPay/PhonePe) or closes popup
            if (!isEnrolled) {
              setTimeout(() => {
                reconcilePayment(data.order.id, id, false);
              }, 1200);
            }
          }
        },
        prefill: {
          name: currentUser ? currentUser.name : "",
          email: currentUser ? currentUser.email : "",
          contact: ""
        },
        notes: {
          courseId: id,
          userEmail: currentUser ? currentUser.email : ""
        },
        theme: {
          color: "#FFC107"
        }
      };

      const rzp1 = new Razorpay(options);
      rzp1.on('payment.failed', function (response) {
        alert("Payment failed: " + response.error.description);
      });
      rzp1.open();
    })
    .catch(err => {
      console.error("Order Creation Error:", err);
      alert("Server error initiating payment.");
    });
}


function reconcilePayment(orderId, courseId, showAlert = false) {
  const token = localStorage.getItem('apexcore_token');
  if (!token || !orderId) return;

  fetch('/api/reconcile-order', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    },
    body: JSON.stringify({ orderId, courseId })
  })
    .then(res => res.json())
    .then(data => {
      if (data.success && data.enrolled) {
        if (showAlert) alert("Payment confirmed! Enrolled successfully in course.");
        if (data.user && Array.isArray(data.user.enrolledCourses)) {
          enrolledIds = data.user.enrolledCourses;
        }
        enrollAndGo(courseId);
      }
    })
    .catch(err => console.warn("Order reconcile check failed:", err));
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
            <div class="learn-tags"><span class="ts-tag exam">${t.examTag}</span><span class="ts-tag subject">${t.learnTag || t.code}</span></div>
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
function openTestList(id, pushHistory = true) {
  const t = testSeries.find((x) => x.id === id);
  if (!t) return;
  currentTestListId = id;
  document.getElementById("tlCrumb").textContent = t.title;
  document
    .querySelectorAll("#tlTabs .tab")
    .forEach((tb) => tb.classList.remove("active"));
  document.querySelector('#tlTabs .tab[data-f="all"]').classList.add("active");
  renderTestList(t, "all");
  showView("tests", false);

  if (pushHistory) {
    history.pushState({ view: "tests", param: id }, "", "");
  }
}

window.filterByType = function () {
  if (!currentTestListId) return;
  const activeTab = document.querySelector("#tlTabs .tab.active");
  const filterStr = activeTab ? activeTab.dataset.f : "all";
  const t = testSeries.find((x) => x.id === currentTestListId);
  if (t) renderTestList(t, filterStr);
};

function renderTestList(t, filter) {
  const grid = document.getElementById("testListGrid");
  grid.className = "test-list-grid";
  if (t.id === "cse-gate-2027" || t.id === "cs-gate-pyq" || t.id === "ee-gate-pyq-2027" || t.id === "ee-gate-ace-2026" || t.id === "pw-cs-gate-2026" || t.id === "pw-cs-gate") {
    if (window.renderPYQAccordion) {
      if (grid) {
        grid.classList.add("pyq-full-width");
        grid.style.display = "block";
        grid.style.width = "100%";
      }
      const isEnrolled = (window.isEnrolledSeries ? window.isEnrolledSeries(t.id) : (typeof enrolledIds !== "undefined" && enrolledIds.includes(t.id)));
      grid.innerHTML = window.renderPYQAccordion(isEnrolled, filter, t.id);
      return;
    }
  } else {
    if (grid) {
      grid.classList.remove("pyq-full-width");
      grid.style.display = "";
      grid.style.width = "";
    }
  }
  const twList = t.schedule.filter((s) => (s[0] || "").toUpperCase().startsWith("TWT"));
  const fltList = t.schedule.filter((s) => {
    const upper = (s[0] || "").toUpperCase();
    return upper.startsWith("FST") || upper.startsWith("FLT") || upper.startsWith("FULL TEST");
  });

  let twSeen = 0;
  let fltSeen = 0;
  let swtSeen = 0; // For Subjectwise tests
  let wqtSeen = 0; // For Weekly Quiz tests
  let mstSeen = 0; // For Mixed Subject tests

  const items = t.schedule.map((s, i) => {
    const rawName = s[0] || "";
    const upperName = rawName.toUpperCase();

    const isTopicwise = upperName.startsWith("TWT");
    const isFullTest = upperName.startsWith("FST") || upperName.startsWith("FLT") || upperName.startsWith("FULL TEST");
    const isWeeklyQuiz = upperName.startsWith("WQT");
    const isMixedSubject = upperName.startsWith("MST");

    // Strip the prefix (e.g. "TWT - ", "FLT - ") to get the bracket label
    const label = rawName.replace(/^[A-Za-z\s]+-\s*/, "");

    let testType, testNumber, bracket, duration, defaultQuestions;

    if (isFullTest) {
      testType = "Full";
      testNumber = fltSeen + 1;
      fltSeen++;
      bracket = label;
      duration = "180 Mins";
      defaultQuestions = 65;
    } else if (isTopicwise) {
      testType = "Topicwise";
      testNumber = twSeen + 1;
      twSeen++;
      bracket = label;
      duration = "45 Mins";
      defaultQuestions = 17;
    } else if (isWeeklyQuiz) {
      testType = "Weekly Quiz";
      testNumber = wqtSeen + 1;
      wqtSeen++;
      bracket = label;
      duration = "45 Mins";
      defaultQuestions = 0;
    } else if (isMixedSubject) {
      testType = "Mixed Subject";
      testNumber = mstSeen + 1;
      mstSeen++;
      bracket = label;
      duration = "180 Mins";
      defaultQuestions = 65;
    } else {
      // Default to Subjectwise
      testType = "Subjectwise";
      testNumber = swtSeen + 1;
      swtSeen++;
      bracket = label;
      duration = "90 Mins";
      defaultQuestions = 33;
    }

    const yearMatch = t.examTag ? t.examTag.match(/\d{4}/) : null;
    const year = yearMatch ? yearMatch[0] : "2027";

    // Dynamic question count logic
    let finalQuestions = s[2] !== undefined ? s[2] : defaultQuestions;
    if (isWeeklyQuiz && window.apexTestRegistry) {
      const regTest = window.apexTestRegistry.find(tr => tr.name === rawName);
      if (regTest && regTest.questions) {
        finalQuestions = regTest.questions.length;
      }
    }

    return {
      name:
        t.code +
        " " + year + "-" + testType + " Test-" +
        testNumber +
        " (" + bracket + ")",
      rawName: rawName,
      bracket: bracket,
      from: s[1],
      till: formatDate(t.endDate),
      duration: duration,
      questions: finalQuestions,
      status: "unattempted",
      score: null,
    };
  });

  // Map user results to status with comprehensive matching (latest attempt first)
  const allRevResults = (userResults || []).slice().reverse();
  items.forEach(it => {
    const itLower = (it.name || "").trim().toLowerCase();
    const rawLower = (it.rawName || "").trim().toLowerCase();
    const bracketLower = (it.bracket || "").trim().toLowerCase();

    const result = allRevResults.find(r => {
      if (!r || !r.testName) return false;
      if (!isResultForSeries(r, t.id)) return false;

      const rLower = r.testName.trim().toLowerCase();
      // 1. Direct match with generated title
      if (rLower === itLower) return true;
      // 2. Direct match with registry rawName (e.g. "WQT - Digital logic-1|Boolean algebra")
      if (rawLower && (rLower === rawLower || r.testName === it.rawName)) return true;
      // 3. Match with bracket topic (e.g. "Digital logic-1|Boolean algebra")
      if (bracketLower && rLower === bracketLower) return true;
      // 4. Bracket inside r.testName matches this test's bracket
      const rBr = r.testName.match(/\(([^)]+)\)/);
      if (rBr && bracketLower) {
        const rBrLower = rBr[1].trim().toLowerCase();
        if (rBrLower === bracketLower) return true;
      }
      return false;
    });
    if (result) {
      it.status = "attempted";
      it.score = result.score;
      it.maxScore = result.maxScore;
    }
  });

  const typeSelect = document.getElementById("typeSelect");
  const typeFilter = typeSelect ? typeSelect.value : "All";
  const shown = items.filter((it) => {
    const matchStatus = filter === "all" || it.status === filter;

    // Determine testType based on naming conventions
    let itTestType = "All";
    const upperName = (it.name || "").toUpperCase();
    if (upperName.includes("-TOPICWISE TEST-") || upperName.includes("TWT -")) {
      itTestType = "Topicwise";
    } else if (upperName.includes("-WEEKLY QUIZ TEST-") || upperName.includes("WQT -")) {
      itTestType = "Weekly Quiz";
    } else if (upperName.includes("-SUBJECTWISE TEST-") || upperName.includes("SWT -")) {
      itTestType = "Subjectwise";
    } else if (upperName.includes("-MIXED SUBJECT TEST-") || upperName.includes("MST -")) {
      itTestType = "Mixed Subject";
    } else if (upperName.includes("FULL TEST") || upperName.includes("FLT -") || upperName.includes("FST -")) {
      itTestType = "Full";
    }
    const matchType = typeFilter === "All" || itTestType === typeFilter;
    return matchStatus && matchType;
  });
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
              ${it.status === "attempted" ? `<span class="test-score">${trophyIconInline}Score: ${it.score}/${it.maxScore || 100}</span>` : ""}
            </div>
            <div style="display: flex; gap: 8px;">
              ${it.status === "attempted" ? `<button class="btn-start-test" data-name="${it.name.replace(/"/g, "&quot;")}" onclick="openInstructions(this.dataset.name, '${t.id}')">Reattempt</button>` : ""}
              <button class="btn-start-test ${it.status}" data-name="${it.name.replace(/"/g, "&quot;")}" onclick="${it.status === 'unattempted' ? `openInstructions(this.dataset.name, '${t.id}')` : `openPastResult(this.dataset.name, '${t.id}')`}">
                ${it.status === "attempted" ? "View Result" : "Start Test"}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
              </button>
            </div>
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
let pendingTestSeriesId = "";

function openInstructions(testName, seriesId) {
  pendingTestName = testName || "";
  pendingTestSeriesId = seriesId || (typeof currentTestListId !== "undefined" ? currentTestListId : "") || (typeof currentDetailId !== "undefined" ? currentDetailId : "") || "";
  if (pendingTestSeriesId) {
    currentTestListId = pendingTestSeriesId;
    currentDetailId = pendingTestSeriesId;
  }
  document.getElementById("examTopTitle").textContent = testName || "Mock Test";

  const isTopicwise = (testName || "").includes("Topicwise") || (testName || "").includes("TWT");
  const isWeeklyQuiz = (testName || "").includes("WQT") || (testName || "").toUpperCase().includes("WEEKLY QUIZ");
  const isGatePyq = (/^GATE\s+CSE\s+20\d\d/i.test(testName || "") || /^GATE\s+20\d\d/i.test(testName || "") || (testName || "").toUpperCase().includes("GATE CSE"));
  const isFullTest = (testName || "").includes("Full Test") || (testName || "").includes("Full Length") || (testName || "").includes("FLT") || (testName || "").includes("FST") || (testName || "").includes("GBG") || isGatePyq;
  const isMixedSubject = (testName || "").includes("Mixed") || (testName || "").includes("MST");
  let customDur = null;
  if (typeof window !== "undefined") {
    const allDefs = (window.PYQ_PW_LEVEL_DEFAULT_TESTS || []).concat(window.PYQ_PW_DEFAULT_TESTS || []);
    const foundDef = allDefs.find(x => x.name === testName || (pendingTestSeriesId && x.series === pendingTestSeriesId && x.name === testName));
    if (foundDef && foundDef.duration) {
      const dm = String(foundDef.duration).match(/\d+/);
      if (dm) customDur = parseInt(dm[0], 10);
    }
  }
  const instrDurationElement = document.getElementById("instrDuration");
  if (instrDurationElement) {
    if (customDur) instrDurationElement.textContent = customDur + " minutes";
    else if (isTopicwise || isWeeklyQuiz) instrDurationElement.textContent = "45 minutes";
    else if (isFullTest || isMixedSubject) instrDurationElement.textContent = "180 minutes";
    else instrDurationElement.textContent = "90 minutes";
  }

  history.pushState({ view: "instructions", param: testName }, "", "");
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
  history.pushState({ view: "instructions", param: null }, "", "");

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
const _origOpenInstructions = openInstructions;
openInstructions = function (testName, seriesId) {
  // If user is not logged in, prompt login first
  if (!document.body.classList.contains("logged-in") || !localStorage.getItem("apexcore_token")) {
    pendingTestAfterLogin = { testName, seriesId };
    if (typeof openLogin === "function") {
      openLogin();
    }
    return;
  }

  pendingTestName = testName || "";
  pendingTestSeriesId = seriesId || (typeof currentTestListId !== "undefined" ? currentTestListId : "") || (typeof currentDetailId !== "undefined" ? currentDetailId : "") || "";
  if (pendingTestSeriesId) {
    currentTestListId = pendingTestSeriesId;
    currentDetailId = pendingTestSeriesId;
  }
  document.getElementById("examConsentBox").checked = false;
  document.getElementById("examBeginBtn").disabled = true;
  _origOpenInstructions(testName, seriesId);
};

window.testBackendIdMap = Object.assign(window.testBackendIdMap || {}, {
  // "Module 5": "cs_subjectwise_test_5",
  // "Digital Logic-1": "gate_topicwise_test_1",
  // "Digital Logic-2": "gate_topicwise_test_2"
});

function findMatchingTest(testName) {
  if (window.testBackendIdMap && window.testBackendIdMap[testName]) return testName;
  if (window.testMap && window.testMap[testName]) return testName;

  const bracketMatch = testName.match(/\(([^)]+)\)/);
  if (bracketMatch) {
    const bracketText = bracketMatch[1];
    const compositeKey = currentTestListId + "|" + bracketText;
    if (window.testBackendIdMap[compositeKey]) return compositeKey;
    if (window.testBackendIdMap[bracketText]) return bracketText;
  }

  let compKey = Object.keys(window.testBackendIdMap).find((key) => {
    return key.startsWith(currentTestListId + "|") && testName.includes(key.split("|")[1]);
  });
  if (compKey) return compKey;

  return Object.keys(window.testBackendIdMap).find((key) => !key.includes("|") && testName.includes(key));
}

function proceedFromInstructions() {
  if (document.getElementById("examBeginBtn").disabled) return;

  if (!document.body.classList.contains("logged-in") || !localStorage.getItem("apexcore_token")) {
    closeInstructions();
    pendingTestAfterLogin = { testName: pendingTestName, seriesId: pendingTestSeriesId };
    if (typeof openLogin === "function") {
      openLogin();
    }
    return;
  }

  const testKey = findMatchingTest(pendingTestName);
  if (!testKey) {
    alert("This test is not open for attempts yet. Please check back soon.");
    return;
  }

  const backendTestId = (window.testBackendIdMap || {})[testKey];

  // Check local test registry first!
  if (window.testMap && window.testMap[backendTestId]) {
    startPlayer(pendingTestName, window.testMap[backendTestId]);
    return;
  }

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
let playerSections = null;
let currentSectionIndex = 0;

let syncStateTimeout = null;
function syncTestState() {
  // Syncing to backend disabled as per user request to start fresh on every load
  return;
  /*
  if (solutionMode) return;
  const token = localStorage.getItem('apexcore_token');
  if (!token) return;
  const testId = document.getElementById("playerTopTitle").textContent.trim();
  
  clearTimeout(syncStateTimeout);
  syncStateTimeout = setTimeout(() => {
    fetch('/api/sync/teststate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
      body: JSON.stringify({
        testId,
        playerState,
        playerCurrent,
        playerTimerSecs
      })
    }).catch(e => console.error("Test state sync error:", e));
  }, 2000);
  */
}

let cloudBookmarks = {};
async function fetchCloudBookmarks() {
  const token = localStorage.getItem('apexcore_token');
  if (!token) return;
  try {
    const res = await fetch('/api/sync/bookmarks', { headers: { 'Authorization': `Bearer ${token}` } });
    const data = await res.json();
    if (data.success) {
      cloudBookmarks = data.bookmarks;
      localStorage.setItem("apex_bookmarks", JSON.stringify(cloudBookmarks));
    }
  } catch (err) { console.error(err); }
}

async function startPlayer(testName, fetchedQuestions) {
  solutionMode = false;
  playerQuestions = fetchedQuestions;
  playerSections = null;
  currentSectionIndex = 0;
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
  const secNameEl = document.getElementById("playerSectionName");
  if (secNameEl) secNameEl.textContent = testName || "GATE 2027 Online Test Series";
  _id("playerSideSecName").textContent = testName || "GATE 2027 Online Test Series";
  const user = currentUser || { name: "Guest User", email: "" };
  _id("playerUserAvatar").textContent = (user.name.trim().charAt(0) || "U").toUpperCase();
  _id("playerUserName").textContent = user.name;

  playerState = {};
  playerQuestions.forEach(
    (q, i) =>
      (playerState[i] = { visited: false, answer: null, marked: false, timeSpent: 0 }),
  );
  playerCurrent = 0;
  const testNameUpper = (testName || "").toUpperCase();
  const isTopicwiseTest = testNameUpper.includes("TOPICWISE") || testNameUpper.includes("TWT");
  const isWeeklyQuizTest = testNameUpper.includes("WQT") || testNameUpper.includes("WEEKLY QUIZ");
  const isGatePyqTest = (/^GATE\s+CSE\s+20\d\d/i.test(testName || "") || /^GATE\s+20\d\d/i.test(testName || "") || testNameUpper.includes("GATE CSE"));
  const isFullTest = testNameUpper.includes("FULL TEST") || testNameUpper.includes("FULL LENGTH") || testNameUpper.includes("FLT") || testNameUpper.includes("FST") || testNameUpper.includes("GBG") || isGatePyqTest;
  const isMixedSubjectTest = testNameUpper.includes("MIXED") || testNameUpper.includes("MST");

  let customPlayerDur = null;
  if (typeof window !== "undefined") {
    const allDefs = (window.PYQ_PW_LEVEL_DEFAULT_TESTS || []).concat(window.PYQ_PW_DEFAULT_TESTS || []);
    const foundDef = allDefs.find(x => x.name === testName || (currentTestListId && x.series === currentTestListId && x.name === testName));
    if (foundDef && foundDef.duration) {
      const dm = String(foundDef.duration).match(/\d+/);
      if (dm) customPlayerDur = parseInt(dm[0], 10);
    }
  }

  if (customPlayerDur) {
    playerDurationMins = customPlayerDur;
    if (playerDurationMins === 180 && playerQuestions.length >= 65) {
      playerSections = [
        { name: "Aptitude", start: 0, end: 9 },
        { name: "Technical", start: 10, end: Math.max(10, playerQuestions.length - 1) }
      ];
    } else {
      playerSections = null;
    }
  } else if (isFullTest || isMixedSubjectTest) {
    playerDurationMins = 180;
    playerSections = [
      { name: "Aptitude", start: 0, end: 9 },
      { name: "Technical", start: 10, end: Math.max(10, playerQuestions.length - 1) }
    ];
  } else if (isTopicwiseTest || isWeeklyQuizTest) {
    playerDurationMins = 45;
  } else {
    playerDurationMins = 90; // Default for Subject Wise Tests etc.
  }

  playerTimerSecs = playerDurationMins * 60;

  // Cloud Sync Resume Check (Disabled as per user request to always start fresh)
  // const token = localStorage.getItem('apexcore_token');
  // if (token && !solutionMode) {
  //   try {
  //     const res = await fetch(`/api/sync/teststate/${encodeURIComponent(testName)}`, {
  //       headers: { 'Authorization': `Bearer ${token}` }
  //     });
  //     const data = await res.json();
  //     if (data.success && data.testState) {
  //       playerState = data.testState.playerState;
  //       playerCurrent = data.testState.playerCurrent || 0;
  //       playerTimerSecs = data.testState.playerTimerSecs || playerTimerSecs;
  //       console.log("Resumed test from cloud state");
  //     }
  //   } catch(err) {
  //     console.error("Failed to fetch cloud test state", err);
  //   }
  // }

  renderPlayer();

  closeInstructions();
  document.getElementById("playerOverlay").classList.add("show");
  document.body.style.overflow = "hidden";
}

function renderPlayer() {
  const _id = (id) => document.getElementById(id);

  if (playerSections && playerSections.length > 0) {
    let tabsHtml = "";
    playerSections.forEach((sec, idx) => {
      tabsHtml += `
      <div class="player-sectiontab ${idx === currentSectionIndex ? 'active' : ''}" onclick="window.switchSection(${idx})">
        ${sec.name} <i class="section-info-icon">i</i>
        <div class="section-tooltip" id="tooltip-sec-${idx}">
          <div class="section-tooltip-title">${sec.name} Section</div>
          <div class="section-tooltip-row"><span>Answered:</span> <span class="section-tooltip-badge" style="background:#2f9e63" id="sec-${idx}-ans">0</span></div>
          <div class="section-tooltip-row"><span>Not Answered:</span> <span class="section-tooltip-badge" style="background:#d9534f" id="sec-${idx}-noans">0</span></div>
          <div class="section-tooltip-row"><span>Marked for Review:</span> <span class="section-tooltip-badge" style="background:#6f42c1" id="sec-${idx}-mark">0</span></div>
          <div class="section-tooltip-row"><span>Not Visited:</span> <span class="section-tooltip-badge" style="background:#94a3b8" id="sec-${idx}-notvis">0</span></div>
        </div>
      </div>
      `;
    });
    const container = _id("playerSectionTabsContainer");
    if (container) {
      container.innerHTML = tabsHtml;
    }
  } else {
    const container = _id("playerSectionTabsContainer");
    if (container) {
      container.innerHTML = `
        <div class="player-sectiontab active">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 16v-4M12 8h.01" />
          </svg>
          <span id="playerSectionName">${_id("playerTopTitle").textContent}</span>
        </div>
      `;
    }
  }

  _id("playerQGrid").innerHTML = "";
  renderPlayerQGrid();
  renderPlayerQuestion(playerCurrent);
  updatePlayerCounts();
  _id("playerOverlay").classList.add("show");

  if (solutionMode) {
    if (_id("playerFooterLeft")) _id("playerFooterLeft").style.display = "none";
    if (_id("playerFooterRight")) _id("playerFooterRight").style.display = "none";
    if (_id("playerSolutionFooter")) _id("playerSolutionFooter").style.display = "flex";

    const submitBtn = document.querySelector(".pf-submit-btn");
    if (submitBtn) submitBtn.style.display = "none";

    const submitWrap = document.querySelector(".pf-submit-wrap");
    if (submitWrap) submitWrap.style.display = "none";

    const titleEl = document.querySelector(".player-topbar .pt-title");
    if (titleEl && !titleEl.textContent.startsWith("Solutions: ")) {
      titleEl.textContent = "Solutions: " + _id("playerTopTitle").textContent;
    }
  } else {
    if (_id("playerFooterLeft")) _id("playerFooterLeft").style.display = "flex";
    if (_id("playerFooterRight")) _id("playerFooterRight").style.display = "block";
    if (_id("playerSolutionFooter")) _id("playerSolutionFooter").style.display = "none";

    const submitBtn = document.querySelector(".pf-submit-btn");
    if (submitBtn) submitBtn.style.display = "inline-flex";

    const submitWrap = document.querySelector(".pf-submit-wrap");
    if (submitWrap) submitWrap.style.display = "block";
  }

  if (playerTimerInterval) clearInterval(playerTimerInterval);

  if (solutionMode) {
    document.getElementById("playerTimer").textContent = "Solution Mode";
  } else {
    playerTimerInterval = setInterval(() => {
      playerTimerSecs--;

      if (playerState[playerCurrent]) {
        playerState[playerCurrent].timeSpent = (playerState[playerCurrent].timeSpent || 0) + 1;
      }

      if (playerTimerSecs <= 0) {
        clearInterval(playerTimerInterval);
        playerTimerSecs = 0;
        playerSubmit();
        return;
      }
      const m = Math.floor(playerTimerSecs / 60),
        s = playerTimerSecs % 60;
      document.getElementById("playerTimer").textContent =
        String(m).padStart(2, "0") + ":" + String(s).padStart(2, "0");

      // Auto-sync state every 30 seconds
      if (playerTimerSecs % 30 === 0) syncTestState();
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
            ${q.options ? q.options.map((opt, oi) => `<div class="qp-opt"><b>${String.fromCharCode(65 + oi)}.</b>${opt}</div>`).join("") : ""}
          </div>
        </div>`,
    )
    .join("");
  document.getElementById("qpaperOverlay").classList.add("show");

  if (window.MathJax && window.MathJax.typesetPromise) {
    window.MathJax.typesetPromise([body]).catch((err) => console.log('MathJax typeset failed: ' + err.message));
  }
}

function closeQuestionPaper() {
  document.getElementById("qpaperOverlay").classList.remove("show");
}

function renderPlayerQuestion(i) {
  playerCurrent = i;
  const q = playerQuestions[i];
  let st = playerState[i];
  if (!st) {
    st = { visited: false, answer: null, marked: false, timeSpent: 0 };
    playerState[i] = st;
  }
  st.visited = true;

  const _id = (id) => {
    const el = document.getElementById(id);
    if (!el) throw new Error("Element not found: " + id);
    return el;
  };

  let displayNum = i + 1;
  if (playerSections && playerSections[currentSectionIndex]) {
    displayNum = i - playerSections[currentSectionIndex].start + 1;
  }
  _id("playerQNum").textContent = "Question No. " + displayNum;
  _id("playerQText").innerHTML = q.text;
  _id("playerMarksPos").textContent = "Marks for correct answer: +" + q.marks;
  _id("playerMarksNeg").textContent = "Negative Marks: -" + q.neg;
  _id("playerQType").textContent = q.type || "MCQ";

  if (solutionMode) {
    document.getElementById("playerTimerBlock").style.display = "none";
    document.getElementById("playerSolutionMarks").style.display = "block";
    document.getElementById("playerMarksWrap").style.display = "none";
    document.getElementById("playerSolutionMeta").style.display = "flex";

    // Determine status
    let statusText = "Unattempted";
    let isCorrect = false;
    let isAttempted = false;

    if (st.answer !== null && st.answer !== undefined && st.answer !== "") {
      isAttempted = true;
      if (q.type === "MSQ") {
        const correctArr = Array.isArray(q.correct) ? q.correct : [q.correct];
        const selected = Array.isArray(st.answer) ? st.answer : [];
        if (correctArr.length === selected.length && correctArr.every(val => selected.includes(val))) {
          isCorrect = true;
        }
      } else if (q.type === "NAT") {
        const val = parseFloat(st.answer);
        if (!isNaN(val) && q.correct && val >= q.correct[0] && val <= (q.correct[1] !== undefined ? q.correct[1] : q.correct[0])) {
          isCorrect = true;
        }
      } else {
        if (Array.isArray(q.correct) ? q.correct.includes(st.answer) : st.answer === q.correct) isCorrect = true;
      }
    }

    let marksAwarded = 0;
    if (isAttempted) {
      if (isCorrect) {
        statusText = "Correct";
        marksAwarded = q.marks;
      } else {
        statusText = "Incorrect";
        marksAwarded = -q.neg;
      }
    }

    document.getElementById("smStatusText").textContent = statusText;
    document.getElementById("smStatusText").className = statusText;
    document.getElementById("smTimeText").textContent = st.timeSpent || 0;
    document.getElementById("psmAwarded").textContent = marksAwarded;
  } else {
    document.getElementById("playerTimerBlock").style.display = "block";
    document.getElementById("playerSolutionMarks").style.display = "none";
    document.getElementById("playerMarksWrap").style.display = "flex";
    document.getElementById("playerSolutionMeta").style.display = "none";
  }

  const imgSlot = _id("playerQImageSlot");
  imgSlot.innerHTML = q.image
    ? `<div class="player-qimg-wrap"><img src="${q.image}" alt="Question diagram"></div>`
    : "";

  const optsWrap = document.getElementById("playerOptions");
  if (q.type === "NAT") {
    const displayVal =
      st.answer !== null && st.answer !== undefined ? st.answer : "";
    if (solutionMode) {
      const correctRange = q.correct ? `${q.correct[0]} to ${q.correct[1] || q.correct[0]}` : 'N/A';
      optsWrap.innerHTML = `
        <div class="player-nat-wrap">
          <div style="font-weight:bold; margin-bottom: 10px;">Your Answer: <span style="color:var(--gray-9);">${displayVal || "Not Attempted"}</span></div>
          <div style="font-weight:bold; color:var(--success);">Correct Answer Range: ${correctRange}</div>
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
        (opt, oi) => {
          let bgClass = "";
          let tagHtml = "";
          if (solutionMode) {
            if (correctArr.includes(oi)) {
              bgClass = "correct-bg";
              tagHtml = '<div class="solution-tag correct">Correct Answer</div>';
            } else if (selected.includes(oi)) {
              bgClass = "incorrect-bg";
              tagHtml = '<div class="solution-tag marked">Marked Answer</div>';
            }
          }
          return `
          <label class="player-opt ${bgClass}">
            <input type="checkbox" name="playerOptMsq" value="${oi}" ${selected.includes(oi) ? "checked" : ""} ${solutionMode ? "disabled" : ""} onchange="playerToggleMsqOption(${oi})">
            <span>${opt}</span>
            ${tagHtml}
          </label>`;
        }
      )
      .join("");
  } else {
    optsWrap.innerHTML = q.options
      .map(
        (opt, oi) => {
          let bgClass = "";
          let tagHtml = "";
          if (solutionMode) {
            if (Array.isArray(q.correct) ? q.correct.includes(oi) : q.correct === oi) {
              bgClass = "correct-bg";
              tagHtml = '<div class="solution-tag correct">Correct Answer</div>';
            } else if (st.answer === oi) {
              bgClass = "incorrect-bg";
              tagHtml = '<div class="solution-tag marked">Marked Answer</div>';
            }
          }
          return `
          <label class="player-opt ${bgClass}">
            <input type="radio" name="playerOpt" value="${oi}" ${st.answer === oi ? "checked" : ""} ${solutionMode ? "disabled" : ""} onchange="playerSelectOption(${oi})">
            <span>${opt}</span>
            ${tagHtml}
          </label>`;
        }
      )
      .join("");
  }
  const solBox = document.getElementById("playerSolutionBox");
  if (solutionMode) {
    solBox.style.display = "block";

    // Determine correct answer label
    let correctLabel = "";
    if (q.isMTA || q.answer === "N/A" || q.correct === "N/A") {
      correctLabel = "Marks to All (MTA)";
    } else if (q.type === "MSQ") {
      const correctArr = Array.isArray(q.correct) ? q.correct : [q.correct];
      correctLabel = correctArr.map(c => String.fromCharCode(65 + c)).join(", ");
    } else if (q.type === "NAT") {
      correctLabel = `${q.correct[0]} to ${q.correct[1] !== undefined ? q.correct[1] : q.correct[0]}`;
    } else {
      correctLabel = String.fromCharCode(65 + q.correct);
    }

    document.getElementById("psbCorrectLabel").textContent = "Correct Answer: " + correctLabel;
    document.getElementById("psbDetails").innerHTML = q.solution || "<i>Detailed solution not provided for this question.</i>";

    // Dynamic stats
    let qStats = null;
    if (window.__advancedStats && window.__advancedStats.perQuestionArray) {
      qStats = window.__advancedStats.perQuestionArray.find(st => st.index === i);
    }

    let popularStr = "Data not available";
    let attemptRateStr = "0%";
    let avgTimeStr = "0s";

    if (qStats) {
      let popChoiceMapped = qStats.popularChoice;
      if (popChoiceMapped !== null && popChoiceMapped !== undefined) {
        if (q.type === "MSQ") {
          popChoiceMapped = popChoiceMapped.split(',').map(c => String.fromCharCode(65 + parseInt(c))).join(", ");
        } else if (q.type !== "NAT") {
          popChoiceMapped = String.fromCharCode(65 + parseInt(popChoiceMapped));
        }
        popularStr = `${popChoiceMapped} (Chosen by ${qStats.popularPct}%)`;
      } else {
        popularStr = "None";
      }
      attemptRateStr = qStats.attemptRate + "%";
      avgTimeStr = Math.round(qStats.avgTime) + "s";
    }

    document.getElementById("psbPopular").textContent = q.stats?.popular || popularStr;
    document.getElementById("psbAttemptRate").textContent = q.stats?.attemptRate || attemptRateStr;
    document.getElementById("psbAvgTime").textContent = q.stats?.avgTime || avgTimeStr;
  } else {
    solBox.style.display = "none";
  }

  document
    .querySelectorAll(".player-qbtn")
    .forEach((b) => b.classList.remove("current"));
  const qb = document.getElementById("qbtn-" + i);
  if (qb) qb.classList.add("current");

  updatePlayerCounts();

  if (window.MathJax && window.MathJax.typesetPromise) {
    window.MathJax.typesetPromise([
      document.getElementById("playerQText"),
      document.getElementById("playerOptions"),
      document.getElementById("playerSolutionBox")
    ]).catch((err) => console.log('MathJax typeset failed: ' + err.message));
  }
  if (window.Prism) {
    Prism.highlightAllUnder(document.getElementById("playerQText"));
  }
  updateBookmarkBtnState();
}

function updateBookmarkBtnState() {
  const btn = document.getElementById("playerBookmarkBtn");
  const txt = document.getElementById("playerBookmarkText");
  if (!btn) return;

  const testId = document.getElementById("playerTopTitle").textContent.trim();
  const qKey = testId + "_Q" + playerCurrent;

  if (cloudBookmarks[qKey]) {
    btn.classList.add("active");
    btn.style.borderColor = "transparent";
    btn.style.background = "#fff";
    btn.style.boxShadow = "0 2px 4px rgba(0,0,0,0.1)";
    txt.textContent = "Bookmarked";
    txt.style.color = "#0056b3";
  } else {
    btn.classList.remove("active");
    btn.style.borderColor = "#cbd5e1";
    btn.style.background = "transparent";
    btn.style.boxShadow = "none";
    txt.textContent = "Bookmark";
    txt.style.color = "#64748b";
  }
}

function togglePlayerBookmark() {
  const testId = document.getElementById("playerTopTitle").textContent.trim();
  const qKey = testId + "_Q" + playerCurrent;
  const q = playerQuestions[playerCurrent];

  const isBookmarked = !cloudBookmarks[qKey];

  if (isBookmarked) {
    let subject = "General";
    if (testId.includes("CE")) subject = "Civil Engineering";
    else if (testId.includes("CS") || testId.includes("CSE")) subject = "Computer Science";
    else if (testId.includes("EE")) subject = "Electrical Engineering";
    else if (testId.includes("ME")) subject = "Mechanical Engineering";
    else if (testId.includes("EC") || testId.includes("ECE")) subject = "Electronics & Communication";
    else if (testId.includes("DA")) subject = "Data Science (DA)";

    let plainText = document.createElement("div");
    plainText.innerHTML = q.text;
    let previewText = plainText.textContent || plainText.innerText || "";
    if (previewText.length > 150) previewText = previewText.substring(0, 150) + "...";

    cloudBookmarks[qKey] = {
      testId: testId,
      qIndex: playerCurrent,
      text: previewText,
      subject: subject,
      date: new Date().toLocaleDateString()
    };
  } else {
    delete cloudBookmarks[qKey];
  }
  localStorage.setItem("apex_bookmarks", JSON.stringify(cloudBookmarks));
  updateBookmarkBtnState();

  const token = localStorage.getItem('apexcore_token');
  if (token) {
    const payload = {
      testId,
      qKey,
      qIndex: playerCurrent,
      isBookmarked,
      text: isBookmarked ? cloudBookmarks[qKey].text : "",
      subject: isBookmarked ? cloudBookmarks[qKey].subject : ""
    };
    fetch('/api/sync/bookmark', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
      body: JSON.stringify({ testId, qKey, qIndex: playerCurrent, isBookmarked })
    }).catch(e => console.error("Bookmark sync error:", e));
  }
}

function playerSelectOption(oi) {
  playerState[playerCurrent].answer = oi;
  syncTestState();
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
  syncTestState();
}

function playerNatRefreshDisplay(str) {
  const disp = document.getElementById("playerNatDisplay");
  if (disp) disp.textContent = str;
  playerState[playerCurrent].answer = str === "" ? null : parseFloat(str);
  syncTestState();
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
  updatePlayerQBtn(playerCurrent);
  syncTestState();
  goToNextQuestion();
}

function playerMarkReview() {
  playerState[playerCurrent].marked = true;
  updatePlayerQBtn(playerCurrent);
  syncTestState();
  goToNextQuestion();
}

function playerClearResponse() {
  playerState[playerCurrent].answer = null;
  document
    .querySelectorAll(`input[name="qopt-${playerCurrent}"]`)
    .forEach((i) => (i.checked = false));
  playerNatClear();
  updatePlayerQBtn(playerCurrent);
  syncTestState();
}

function playerSaveMarkReview() {
  playerState[playerCurrent].marked = true;
  updatePlayerQBtn(playerCurrent);
  syncTestState();
  goToNextQuestion();
}

window.switchSection = function (idx) {
  currentSectionIndex = idx;
  renderPlayer();
  const firstQ = playerSections[idx].start;
  renderPlayerQuestion(firstQ);
};

function goToNextQuestion() {
  if (playerSections && playerSections.length > 0 && playerSections[currentSectionIndex]) {
    const sec = playerSections[currentSectionIndex];
    if (playerCurrent < sec.end) {
      renderPlayerQuestion(playerCurrent + 1);
    } else if (currentSectionIndex < playerSections.length - 1) {
      window.switchSection(currentSectionIndex + 1);
    } else {
      if (!solutionMode) playerSubmit();
    }
  } else {
    if (playerCurrent < playerQuestions.length - 1) {
      renderPlayerQuestion(playerCurrent + 1);
    } else {
      if (!solutionMode) playerSubmit();
    }
  }
  updatePlayerCounts();
}

function renderPlayerQGrid() {
  const grid = document.getElementById("playerQGrid");
  let startIdx = 0;
  let endIdx = playerQuestions.length - 1;

  if (playerSections && playerSections[currentSectionIndex]) {
    startIdx = playerSections[currentSectionIndex].start;
    endIdx = playerSections[currentSectionIndex].end;
  }

  let html = "";
  for (let i = startIdx; i <= endIdx; i++) {
    const displayNum = (playerSections && playerSections.length > 0) ? (i - startIdx + 1) : (i + 1);
    html += `<button class="player-qbtn" id="qbtn-${i}" onclick="renderPlayerQuestion(${i})">${displayNum}</button>`;
  }
  grid.innerHTML = html;
}

function updatePlayerQBtn(i) {
  const st = playerState[i] || { visited: false, answer: null, marked: false, timeSpent: 0 };
  const btn = document.getElementById("qbtn-" + i);
  if (!btn) return;
  btn.classList.remove("answered", "notanswered", "marked", "correct", "incorrect", "unattempted");
  if (solutionMode) {
    if (st.answer === null || st.answer === undefined || st.answer === "") {
      btn.classList.add("unattempted");
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
        if (!isNaN(val) && q.correct && val >= q.correct[0] && val <= (q.correct[1] !== undefined ? q.correct[1] : q.correct[0])) {
          isCorrect = true;
        }
      } else {
        if (Array.isArray(q.correct) ? q.correct.includes(st.answer) : st.answer === q.correct) isCorrect = true;
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

  let sectionStats = [];
  if (playerSections && playerSections.length > 0) {
    sectionStats = playerSections.map(() => ({ ans: 0, noans: 0, mark: 0, notvis: 0 }));
  }

  playerQuestions.forEach((q, i) => {
    const st = playerState[i] || { visited: false, answer: null, marked: false, timeSpent: 0 };
    updatePlayerQBtn(i);

    let isAns = false, isNoans = false, isNotvis = false, isMark = false;

    if (!st.visited) { notVisited++; isNotvis = true; }
    else if (st.answer !== null && st.answer !== undefined && st.answer !== "") { answered++; isAns = true; }
    else { notAnswered++; isNoans = true; }
    if (st.marked) { marked++; isMark = true; }

    if (playerSections && playerSections.length > 0) {
      playerSections.forEach((sec, idx) => {
        if (i >= sec.start && i <= sec.end) {
          if (isAns) sectionStats[idx].ans++;
          if (isNoans) sectionStats[idx].noans++;
          if (isNotvis) sectionStats[idx].notvis++;
          if (isMark) sectionStats[idx].mark++;
        }
      });
    }
  });

  const _id = (id) => {
    const el = document.getElementById(id);
    return el;
  };
  if (_id("cntAnswered")) _id("cntAnswered").textContent = answered;
  if (_id("cntNotAnswered")) _id("cntNotAnswered").textContent = notAnswered;
  if (_id("cntNotVisited")) _id("cntNotVisited").textContent = notVisited;
  if (_id("cntMarked")) _id("cntMarked").textContent = marked;

  if (playerSections && playerSections.length > 0) {
    playerSections.forEach((sec, idx) => {
      if (_id(`sec-${idx}-ans`)) _id(`sec-${idx}-ans`).textContent = sectionStats[idx].ans;
      if (_id(`sec-${idx}-noans`)) _id(`sec-${idx}-noans`).textContent = sectionStats[idx].noans;
      if (_id(`sec-${idx}-mark`)) _id(`sec-${idx}-mark`).textContent = sectionStats[idx].mark;
      if (_id(`sec-${idx}-notvis`)) _id(`sec-${idx}-notvis`).textContent = sectionStats[idx].notvis;
    });
  }
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
    let isCorrect = false;
    let isUnattempted = false;

    if (
      given === null ||
      (Array.isArray(given) && given.length === 0)
    ) {
      if (q.isMTA || q.answer === "N/A" || q.correct === "N/A") {
        isCorrect = true;
        correctCount++;
        score += q.marks;
      } else {
        unattempted++;
        isUnattempted = true;
      }
    } else if (q.type === "MSQ") {
      const correctVal = q.correct !== undefined ? q.correct : q.answer;
      let correctArr = [...(correctVal || [])].sort();
      if (typeof correctArr[0] === "string" && /^[A-D]$/i.test(correctArr[0])) {
        correctArr = correctArr.map(c => c.toUpperCase().charCodeAt(0) - 65).sort();
      }
      const givenArr = [...given].sort();
      isCorrect =
        correctArr.length === givenArr.length &&
        correctArr.every((v, idx) => v === givenArr[idx]);
      if (isCorrect) {
        correctCount++;
        score += q.marks;
      } else {
        wrongCount++;
        score -= q.neg;
      }
    } else if (q.type === "NAT") {
      const val = parseFloat(given);
      const correctVal = q.correct !== undefined ? q.correct : q.answer;
      let cMin, cMax;
      if (Array.isArray(correctVal)) {
        cMin = correctVal[0];
        cMax = correctVal[1] !== undefined ? correctVal[1] : correctVal[0];
      } else {
        cMin = parseFloat(correctVal);
        cMax = cMin;
      }
      if (!isNaN(val) && cMin !== undefined && val >= cMin && val <= cMax) {
        isCorrect = true;
        correctCount++;
        score += q.marks;
      } else {
        wrongCount++;
        score -= q.neg;
      }
    } else {
      const isMTA = q.isMTA || q.answer === "N/A" || q.correct === "N/A";
      const correctVal = q.correct !== undefined ? q.correct : q.answer;
      let cIdx = correctVal;
      if (typeof correctVal === "string" && /^[A-D]$/i.test(correctVal)) {
        cIdx = correctVal.toUpperCase().charCodeAt(0) - 65;
      }
      if (isMTA || (Array.isArray(cIdx) ? cIdx.includes(given) : given === cIdx)) {
        isCorrect = true;
        correctCount++;
        score += q.marks;
      } else {
        wrongCount++;
        score -= q.neg;
      }
    }

    playerState[i].isCorrect = isCorrect;
    playerState[i].isUnattempted = isUnattempted;
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
    answers: playerState
  };

  document.getElementById("playerOverlay").classList.remove("show");
  document.getElementById("successOverlay").classList.add("show");

  // Submit to DB
  let testSeriesId = pendingTestSeriesId || (typeof currentTestListId !== "undefined" ? currentTestListId : "") || (typeof currentDetailId !== "undefined" ? currentDetailId : "") || "";
  const currentTitle = (document.getElementById("playerTopTitle").textContent || "").trim();
  if (!testSeriesId && window.apexTestRegistry && Array.isArray(window.apexTestRegistry)) {
    const reg = window.apexTestRegistry.find(tr => tr.name === currentTitle || currentTitle.includes(tr.name));
    if (reg && reg.series) testSeriesId = reg.series;
  }
  const payload = {
    seriesId: testSeriesId,
    testName: document.getElementById("playerTopTitle").textContent,
    score,
    maxScore,
    correctCount,
    wrongCount,
    unattempted,
    timeTakenSecs,
    answers: playerState
  };

  // Immediate local update so user can see result right away
  const payLower = (payload.testName || "").trim().toLowerCase();
  const bracketMatch = payload.testName.match(/\(([^)]+)\)/);
  const payBracket = bracketMatch ? bracketMatch[1].trim().toLowerCase() : null;

  const existingIndex = userResults.findIndex(r => {
    if (!r || !r.testName) return false;
    // Don't collide if seriesId differs
    const rSid = (r.seriesId && r.seriesId !== 'undefined' && r.seriesId !== 'null') ? String(r.seriesId).trim() : null;
    const pSid = (payload.seriesId && payload.seriesId !== 'undefined' && payload.seriesId !== 'null') ? String(payload.seriesId).trim() : null;
    if (rSid && pSid && rSid !== pSid) return false;
    const rLower = r.testName.trim().toLowerCase();
    if (r.testName === payload.testName || rLower === payLower) return true;
    if (payBracket && rLower === payBracket) return true;
    return false;
  });
  if (existingIndex !== -1) {
    userResults[existingIndex] = payload;
  } else {
    userResults.push(payload);
  }
  window.userResults = userResults;
  try {
    localStorage.setItem("apex_user_results", JSON.stringify(userResults));
  } catch (e) { }

  // Immediately refresh active views with updated results
  const detailView = document.getElementById("view-detail");
  if (detailView && detailView.classList.contains("active") && typeof currentDetailId !== "undefined") {
    if (typeof openDetail === 'function') openDetail(currentDetailId, false);
  }
  const testView = document.getElementById("view-tests");
  if (testView && testView.classList.contains("active") && typeof currentTestListId !== "undefined") {
    const seriesObj = testSeries.find((x) => x.id === currentTestListId);
    if (seriesObj && typeof renderTestList === 'function') renderTestList(seriesObj, "all");
  }

  // Save to pending queue in localStorage so results are NEVER lost
  try {
    const queueKey = payload.seriesId ? `apex_pending_test_${payload.seriesId}_${payload.testName}` : `apex_pending_test_${payload.testName}`;
    localStorage.setItem(queueKey, JSON.stringify(payload));
  } catch (e) { }

  const submitWithRetry = async (retries = 5) => {
    const currentToken = localStorage.getItem('apexcore_token');
    if (!currentToken) {
      console.warn("No token available for test submission, saved to pending queue.");
      return;
    }
    try {
      const res = await fetch('/api/submit-test', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${currentToken}`
        },
        body: JSON.stringify(payload)
      });
      if (!res.ok) {
        if ((res.status === 502 || res.status === 503 || res.status === 504) && retries > 0) {
          setTimeout(() => submitWithRetry(retries - 1), 4000);
          return;
        }
        throw new Error("HTTP " + res.status);
      }
      const data = await res.json();
      if (data.success) {
        // Successfully saved in DB, clear pending queue
        localStorage.removeItem("apex_pending_test_" + payload.testName);
        localStorage.removeItem("apex_teststate_" + payload.testName);
        fetch('/api/sync/teststate/' + encodeURIComponent(payload.testName), {
          method: 'DELETE',
          headers: { 'Authorization': `Bearer ${currentToken}` }
        }).catch(err => console.error(err));
      }
    } catch (err) {
      console.error("Error submitting test:", err);
      if (retries > 0) {
        setTimeout(() => submitWithRetry(retries - 1), 4000);
      }
    }
  };
  submitWithRetry();

  setTimeout(() => {
    showResultPage();
  }, 1400);
}

let lastResult = null;

function openPastResult(testName, seriesId) {
  const allResults = (userResults && userResults.length > 0) ? userResults : (window.userResults || []);
  const allRev = allResults.slice().reverse();
  const testLower = (testName || "").trim().toLowerCase();
  const bracketMatch = testName.match(/\(([^)]+)\)/);
  const bracketLower = bracketMatch ? bracketMatch[1].trim().toLowerCase() : null;

  if (seriesId) {
    pendingTestSeriesId = seriesId;
    currentTestListId = seriesId;
    currentDetailId = seriesId;
  }

  let result = allRev.find(r => {
    if (!r || !r.testName) return false;
    if (seriesId && typeof isResultForSeries === 'function' && !isResultForSeries(r, seriesId)) return false;
    const rSeriesId = (r.seriesId && r.seriesId !== 'undefined' && r.seriesId !== 'null') ? String(r.seriesId).trim() : null;
    if (seriesId && rSeriesId && rSeriesId !== String(seriesId)) return false;
    const rLower = r.testName.trim().toLowerCase();
    if (r.testName === testName || rLower === testLower) return true;
    if (bracketLower && rLower === bracketLower) return true;
    const rBr = r.testName.match(/\(([^)]+)\)/);
    if (rBr) {
      const rBrLower = rBr[1].trim().toLowerCase();
      if (bracketLower && rBrLower === bracketLower) return true;
      if (testLower.includes(rBrLower)) return true;
    }
    return false;
  });

  if (result) {
    // Reconstruct lastResult format with fallbacks
    const timeSecs = result.timeTakenSecs || 0;
    const tMin = Math.floor(timeSecs / 60);
    const tSec = timeSecs % 60;
    lastResult = {
      score: result.score || 0,
      maxScore: result.maxScore || 100,
      correctCount: result.correctCount || 0,
      wrongCount: result.wrongCount || 0,
      unattempted: result.unattempted || 0,
      timeTakenSecs: timeSecs,
      tMin,
      tSec,
      answers: result.answers || {}
    };
    playerState = result.answers || {};

    const testKey = (typeof findMatchingTest === 'function' ? (findMatchingTest(testName) || (result && findMatchingTest(result.testName))) : null);
    const backendId = (testKey && window.testBackendIdMap) ? window.testBackendIdMap[testKey] : null;
    if (backendId && window.testMap && window.testMap[backendId]) {
      playerQuestions = window.testMap[backendId];
    }

    const rValidSeriesId = (result.seriesId && result.seriesId !== 'undefined' && result.seriesId !== 'null') ? result.seriesId : seriesId;
    if (rValidSeriesId) {
      pendingTestSeriesId = rValidSeriesId;
      currentTestListId = rValidSeriesId;
      currentDetailId = rValidSeriesId;
    }
    document.getElementById("resultCrumbName").textContent = testName;
    showResultPage(testName);
  }
}

function openSolutionMode(testName, seriesId) {
  const allResults = (userResults && userResults.length > 0) ? userResults : (window.userResults || []);
  const allRev = allResults.slice().reverse();
  const bracketMatch = testName.match(/\(([^)]+)\)/);
  const bracketLower = bracketMatch ? bracketMatch[1].trim().toLowerCase() : null;
  const targetLower = testName.trim().toLowerCase();
  const targetSeriesId = seriesId || pendingTestSeriesId || (typeof currentTestListId !== "undefined" ? currentTestListId : "");

  let result = allRev.find(r => {
    if (!r || !r.testName) return false;
    if (targetSeriesId && typeof isResultForSeries === 'function' && !isResultForSeries(r, targetSeriesId)) return false;
    const rSeriesId = (r.seriesId && r.seriesId !== 'undefined' && r.seriesId !== 'null') ? String(r.seriesId).trim() : null;
    if (targetSeriesId && rSeriesId && rSeriesId !== String(targetSeriesId)) return false;
    const rLower = r.testName.trim().toLowerCase();
    if (rLower === targetLower) return true;
    if (bracketLower && rLower === bracketLower) return true;
    const rBr = r.testName.match(/\(([^)]+)\)/);
    if (rBr) {
      const rBrLower = rBr[1].trim().toLowerCase();
      if (bracketLower && rBrLower === bracketLower) return true;
      if (targetLower.includes(rBrLower)) return true;
    }
    return false;
  });

  if (!result || !result.answers) {
    alert("Answers not found for this test. Past tests before this update do not have answers saved.");
    return;
  }

  if (result.seriesId) {
    pendingTestSeriesId = result.seriesId;
    currentTestListId = result.seriesId;
    currentDetailId = result.seriesId;
  }

  const testKey = findMatchingTest(testName) || (result && findMatchingTest(result.testName));
  if (!testKey) {
    alert("Test data not found.");
    return;
  }

  const backendTestId = (window.testBackendIdMap || {})[testKey];
  const courseId = currentTestListId;
  const token = localStorage.getItem('apexcore_token');

  // Local registry fallback for past results
  if (window.testMap && window.testMap[backendTestId]) {
    closeResult();
    startPlayer(testName, window.testMap[backendTestId]);
    solutionMode = true;
    playerState = result.answers;
    renderPlayer();
    return;
  }

  fetch(`/api/test/${courseId}/${backendTestId}`, {
    headers: { 'Authorization': 'Bearer ' + token }
  })
    .then(res => res.json())
    .then(async data => {
      if (data.success) {
        closeResult();

        // Fetch advanced stats for solution mode
        try {
          const statsRes = await fetch('/api/test-advanced-stats/' + encodeURIComponent(testName));
          const statsData = await statsRes.json();
          if (statsData.success) {
            window.__advancedStats = statsData.advancedStats;
          }
        } catch (e) {
          console.error("Failed to load advanced stats", e);
        }

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

function getTestBreakdown(testName, questions, userAnswers) {
  const qList = (questions && Array.isArray(questions) && questions.length > 0) ? questions : [];
  const answers = userAnswers || playerState || (lastResult && lastResult.answers) || {};
  const totalQ = qList.length || ((lastResult && (lastResult.correctCount + lastResult.wrongCount + lastResult.unattempted)) ? (lastResult.correctCount + lastResult.wrongCount + lastResult.unattempted) : 65);

  const cleanName = (testName || "").trim();
  const lowerName = cleanName.toLowerCase();
  const regTest = (window.apexTestRegistry && Array.isArray(window.apexTestRegistry))
    ? window.apexTestRegistry.find(t => t.name === cleanName || (t.name && t.name.toLowerCase() === lowerName) || cleanName.includes(t.name) || (t.name && t.name.includes(cleanName)))
    : null;

  const isFLT = /FST|FLT|GBG|AIMT|Full\s*Syllabus|Full\s*Length|Mock/i.test(cleanName) || totalQ >= 55;
  const isMST = /MST/i.test(cleanName) || cleanName.includes('+');

  function computeStats(indices) {
    let c = 0, w = 0, u = 0, score = 0, maxScore = 0;
    indices.forEach(idx => {
      const q = qList[idx] || {};
      const marks = typeof q.marks === 'number' ? q.marks : (idx >= 35 ? 2 : (idx >= 5 && idx < 10 ? 2 : 1));
      const neg = typeof q.neg === 'number' ? q.neg : (marks === 2 ? 0.66 : 0.33);
      maxScore += marks;

      const st = answers[idx];
      if (st && st.isCorrect) {
        c++;
        score += marks;
      } else if (st && !st.isCorrect && !st.isUnattempted) {
        w++;
        score -= neg;
      } else {
        u++;
      }
    });

    score = Math.round(score * 100) / 100;
    const count = indices.length;
    const acc = (c + w) > 0 ? Math.round((c / (c + w)) * 1000) / 10 : 0;
    const cPct = count > 0 ? (c / count) * 100 : 0;
    const wPct = count > 0 ? (w / count) * 100 : 0;
    const donutGradient = `#2F9E63 0 ${cPct}%, #D9534F ${cPct}% ${cPct + wPct}%, #E8A33D ${cPct + wPct}% 100%`;

    return { count, correct: c, wrong: w, unattempted: u, score, maxScore, accuracy: acc, donutGradient };
  }

  let subjectGroups = [];
  let topicGroups = [];

  // 1. SUBJECT BREAKDOWN
  if (isFLT) {
    const aptIndices = [];
    const techIndices = [];
    const aptCount = Math.min(10, totalQ);
    for (let i = 0; i < aptCount; i++) aptIndices.push(i);
    for (let i = aptCount; i < totalQ; i++) techIndices.push(i);

    subjectGroups.push({
      name: "General Aptitude",
      color: "#14619C",
      indices: aptIndices,
      stats: computeStats(aptIndices)
    });

    subjectGroups.push({
      name: "Technical (CS & Math)",
      color: "#5D8C72",
      indices: techIndices,
      stats: computeStats(techIndices)
    });
  } else if (isMST) {
    const parts = cleanName.replace(/^[A-Za-z0-9\s]+-\s*/, '').split('+').map(s => s.trim()).filter(Boolean);
    if (parts.length > 1) {
      const perSubj = Math.floor(totalQ / parts.length);
      const colors = ['#14619C', '#5D8C72', '#E8A33D', '#9C27B0', '#009688', '#E91E63'];
      parts.forEach((part, pIdx) => {
        const start = pIdx * perSubj;
        const end = (pIdx === parts.length - 1) ? totalQ : (pIdx + 1) * perSubj;
        const indices = [];
        for (let i = start; i < end; i++) indices.push(i);
        subjectGroups.push({
          name: part,
          color: colors[pIdx % colors.length],
          indices: indices,
          stats: computeStats(indices)
        });
      });
    } else {
      const allIndices = Array.from({ length: totalQ }, (_, i) => i);
      subjectGroups.push({
        name: cleanName,
        color: "#14619C",
        indices: allIndices,
        stats: computeStats(allIndices)
      });
    }
  } else {
    const allIndices = Array.from({ length: totalQ }, (_, i) => i);
    let sName = (regTest && regTest.subject) ? regTest.subject.toUpperCase() : "Core Subject";
    if (cleanName.includes('-')) {
      sName = cleanName.split('-')[1].trim();
    }
    subjectGroups.push({
      name: sName,
      color: "#14619C",
      indices: allIndices,
      stats: computeStats(allIndices)
    });
  }

  // 2. TOPIC BREAKDOWN
  if (isFLT) {
    const domains = [
      { name: "General Aptitude", range: [0, 10], color: "#14619C" },
      { name: "Math & Discrete Structures", range: [10, 22], color: "#5D8C72" },
      { name: "Programming, DS & Algo", range: [22, 35], color: "#E8A33D" },
      { name: "Systems (COA, OS, DLD)", range: [35, 48], color: "#9C27B0" },
      { name: "Theory & DB (TOC, CD, DBMS, CN)", range: [48, totalQ], color: "#009688" }
    ];
    domains.forEach(d => {
      const start = Math.min(d.range[0], totalQ);
      const end = Math.min(d.range[1], totalQ);
      if (end > start) {
        const indices = [];
        for (let i = start; i < end; i++) indices.push(i);
        topicGroups.push({
          name: d.name,
          color: d.color,
          indices: indices,
          stats: computeStats(indices)
        });
      }
    });
  } else if (regTest && regTest.topicsCovered && regTest.topicsCovered.includes(',')) {
    const rawTopics = regTest.topicsCovered.split(',').map(s => s.trim()).filter(Boolean);
    const perTopic = Math.floor(totalQ / rawTopics.length);
    const colors = ['#14619C', '#5D8C72', '#E8A33D', '#9C27B0', '#009688', '#3F51B5'];
    rawTopics.forEach((tName, tIdx) => {
      const start = tIdx * perTopic;
      const end = (tIdx === rawTopics.length - 1) ? totalQ : (tIdx + 1) * perTopic;
      const indices = [];
      for (let i = start; i < end; i++) indices.push(i);
      topicGroups.push({
        name: tName,
        color: colors[tIdx % colors.length],
        indices: indices,
        stats: computeStats(indices)
      });
    });
  } else {
    const allIndices = Array.from({ length: totalQ }, (_, i) => i);
    const tTitle = (regTest && regTest.topicsCovered) ? regTest.topicsCovered : cleanName;
    topicGroups.push({
      name: tTitle,
      color: "#5D8C72",
      indices: allIndices,
      stats: computeStats(allIndices)
    });
  }

  return { subjectGroups, topicGroups };
}

// ==========================================
// ADVANCED TEST ANALYSIS ENHANCEMENTS
// ==========================================

function renderGatePredictor(r) {
  const el = document.getElementById("gatePredictorContainer");
  if (!el || !r) return;

  const maxScore = r.maxScore || 100;
  const normScore = maxScore > 0 ? (r.score / maxScore) * 100 : 0;
  const estGateScore = Math.max(100, Math.min(1000, Math.round((normScore / 100) * 880 + 120)));

  let airRange = "AIR 18,000+";
  if (normScore >= 75) airRange = "AIR 1 – 150";
  else if (normScore >= 65) airRange = "AIR 150 – 600";
  else if (normScore >= 55) airRange = "AIR 600 – 1,800";
  else if (normScore >= 45) airRange = "AIR 1,800 – 4,500";
  else if (normScore >= 35) airRange = "AIR 4,500 – 9,500";
  else if (normScore >= 25) airRange = "AIR 9,500 – 18,000";

  const genStatus = normScore >= 27.5 ? { cls: 'cleared', text: 'GEN Qualified' } : (normScore >= 24 ? { cls: 'borderline', text: 'GEN Borderline' } : { cls: 'below', text: 'GEN < Cutoff' });
  const obcStatus = normScore >= 24.7 ? { cls: 'cleared', text: 'OBC Qualified' } : (normScore >= 21 ? { cls: 'borderline', text: 'OBC Borderline' } : { cls: 'below', text: 'OBC < Cutoff' });
  const scStatus = normScore >= 18.3 ? { cls: 'cleared', text: 'SC/ST Qualified' } : (normScore >= 15 ? { cls: 'borderline', text: 'SC/ST Borderline' } : { cls: 'below', text: 'SC/ST < Cutoff' });

  el.innerHTML = `
    <div class="gate-predictor-card">
      <div class="gp-col">
        <span class="gp-label">Estimated GATE Score</span>
        <span class="gp-val">${estGateScore} <small>/ 1000</small></span>
      </div>
      <div class="gp-col">
        <span class="gp-label">Predicted AIR Range</span>
        <span class="gp-val" style="color: #93c5fd;">${airRange}</span>
      </div>
      <div class="gp-col">
        <span class="gp-label">Category Cutoff Indicator</span>
        <div style="display: flex; gap: 8px; flex-wrap: wrap; margin-top: 4px;">
          <span class="gp-badge ${genStatus.cls}">${genStatus.text}</span>
          <span class="gp-badge ${obcStatus.cls}">${obcStatus.text}</span>
          <span class="gp-badge ${scStatus.cls}">${scStatus.text}</span>
        </div>
      </div>
    </div>
  `;
}

function renderMarksLeakage(questions, answers, r) {
  const el = document.getElementById("marksLeakageContainer");
  if (!el || !r) return 0;

  let totalLostNeg = 0;
  let qTypeStats = {
    MCQ: { count: 0, correct: 0, wrong: 0, score: 0, negLost: 0 },
    MSQ: { count: 0, correct: 0, wrong: 0, score: 0, negLost: 0 },
    NAT: { count: 0, correct: 0, wrong: 0, score: 0, negLost: 0 }
  };

  (questions || []).forEach((q, idx) => {
    const st = answers[idx] || answers[String(idx)];
    const rawType = (q.type || 'MCQ').toUpperCase();
    const type = rawType.includes('NAT') ? 'NAT' : (rawType.includes('MSQ') ? 'MSQ' : 'MCQ');
    const m = Number(q.marks) || 1;
    const n = (q.neg != null) ? Math.abs(Number(q.neg)) : (m === 2 ? 0.66 : 0.33);

    qTypeStats[type].count++;
    if (st && st.isCorrect) {
      qTypeStats[type].correct++;
      qTypeStats[type].score += m;
    } else if (st && !st.isCorrect && !st.isUnattempted) {
      qTypeStats[type].wrong++;
      const actualNeg = (type === 'MCQ' || (q.neg && Number(q.neg) > 0)) ? n : 0;
      totalLostNeg += actualNeg;
      qTypeStats[type].negLost += actualNeg;
      qTypeStats[type].score -= actualNeg;
    }
  });

  totalLostNeg = Math.round(totalLostNeg * 100) / 100;
  const potentialScore = Math.min(r.maxScore, Math.round((r.score + totalLostNeg) * 100) / 100);
  const fillPct = potentialScore > 0 ? Math.max(0, Math.min(100, (r.score / potentialScore) * 100)) : 100;

  el.innerHTML = `
    <div class="adv-card">
      <div class="adv-card-header">
        <div class="adv-card-title">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ef4444" stroke-width="2.2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
          Marks Leakage & Potential
        </div>
        <span style="font-size: 12px; font-weight: 700; color: #ef4444;">-${totalLostNeg.toFixed(2)} Lost</span>
      </div>
      
      <div class="ml-meter-wrap">
        <div class="ml-numbers-row">
          <div>
            <div style="font-size: 11px; text-transform: uppercase; color: #64748b; font-weight: 700;">Score Realization</div>
            <div style="font-size: 20px; font-weight: 800; color: #1e293b;">${r.score} <small style="font-size: 13px; color: #64748b; font-weight: 500;">/ ${potentialScore} Potential</small></div>
          </div>
          <div style="font-size: 13px; font-weight: 700; color: ${fillPct >= 75 ? '#16a34a' : '#d97706'};">${Math.round(fillPct)}% Efficiency</div>
        </div>
        <div class="ml-bar-track">
          <div class="ml-bar-fill" style="width: ${fillPct}%;"></div>
        </div>
      </div>

      <div class="ml-qtypes-grid">
        <div class="ml-qtype-box">
          <div class="ml-qtype-title">MCQ (${qTypeStats.MCQ.count})</div>
          <div class="ml-qtype-score">${Math.round(qTypeStats.MCQ.score * 10) / 10} M</div>
          <div class="ml-qtype-neg">-${qTypeStats.MCQ.negLost.toFixed(2)} Lost</div>
        </div>
        <div class="ml-qtype-box">
          <div class="ml-qtype-title">MSQ (${qTypeStats.MSQ.count})</div>
          <div class="ml-qtype-score">${Math.round(qTypeStats.MSQ.score * 10) / 10} M</div>
          <div class="ml-qtype-neg" style="color: #64748b;">No Negative</div>
        </div>
        <div class="ml-qtype-box">
          <div class="ml-qtype-title">NAT (${qTypeStats.NAT.count})</div>
          <div class="ml-qtype-score">${Math.round(qTypeStats.NAT.score * 10) / 10} M</div>
          <div class="ml-qtype-neg" style="color: #64748b;">No Negative</div>
        </div>
      </div>
    </div>
  `;

  return totalLostNeg;
}

function renderTopperComparison(r, avgScore, avgAcc, highestScore, topperObj, totalStudents, totalLostNeg, questions) {
  const el = document.getElementById("topperComparisonContainer");
  if (!el || !r) return;

  const qLen = (questions && questions.length > 0) ? questions.length : (r.correctCount + r.wrongCount + r.unattempted || 65);
  const myAttempted = r.correctCount + r.wrongCount;
  const topperScore = (highestScore != null && highestScore > 0) ? highestScore : r.score;
  const myAcc = (r.correctCount + r.wrongCount > 0)
    ? Math.round((r.correctCount / (r.correctCount + r.wrongCount)) * 1000) / 10
    : 0;

  let topperAcc = 94;
  if (topperObj && topperObj.correctCount && topperObj.wrongCount) {
    topperAcc = Math.round((topperObj.correctCount / (topperObj.correctCount + topperObj.wrongCount)) * 100);
  } else if (topperScore === r.score && myAcc > 0) {
    topperAcc = myAcc;
  }

  let topperTime = (r.tMin || 0) + 'm ' + (r.tSec || 0) + 's';
  if (topperObj && topperObj.timeTakenSecs) {
    topperTime = `${Math.floor(topperObj.timeTakenSecs / 60)}m ${topperObj.timeTakenSecs % 60}s`;
  }

  const topperAttempted = topperObj && (topperObj.correctCount || topperObj.wrongCount)
    ? (topperObj.correctCount + topperObj.wrongCount)
    : qLen;

  const avgAttempted = Math.round(qLen * 0.7);
  const avgTime = `${Math.max(1, Math.round(qLen * 1.5))}m 00s`;
  const topperNeg = (topperScore >= (r.maxScore || 100) * 0.9) ? 0 : 0.66;

  el.innerHTML = `
    <div class="adv-card">
      <div class="adv-card-header">
        <div class="adv-card-title">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#14619c" stroke-width="2.2"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6M18 9h1.5a2.5 2.5 0 0 0 0-5H18M4 22h16M10 14.66V17c0 .55-.45 1-1 1H7M14 14.66V17c0 .55.45 1 1 1h2M18 2H6v7a6 6 0 0 0 12 0V2Z"/></svg>
          Benchmark Comparison
        </div>
        <span style="font-size: 12px; color: #64748b; font-weight: 600;">${totalStudents || 1} Aspirants</span>
      </div>
      
      <table class="topper-table">
        <thead>
          <tr>
            <th>Metric</th>
            <th style="color: #14619c;">You</th>
            <th>Average</th>
            <th style="color: #16a34a;">Rank 1 Topper</th>
          </tr>
        </thead>
        <tbody>
          <tr class="highlight-you">
            <td>Score</td>
            <td>${r.score}</td>
            <td>${avgScore != null ? avgScore : r.score}</td>
            <td style="color: #16a34a; font-weight: 700;">${topperScore}</td>
          </tr>
          <tr>
            <td>Accuracy</td>
            <td>${myAcc}%</td>
            <td>${avgAcc != null ? avgAcc : myAcc}%</td>
            <td style="color: #16a34a;">${topperAcc}%</td>
          </tr>
          <tr>
            <td>Attempted</td>
            <td>${myAttempted} / ${qLen}</td>
            <td>~${avgAttempted}</td>
            <td style="color: #16a34a;">${topperAttempted} / ${qLen}</td>
          </tr>
          <tr>
            <td>Marks Lost</td>
            <td style="color: #ef4444;">-${(totalLostNeg || 0).toFixed(2)}</td>
            <td style="color: #ef4444;">-${((totalLostNeg || 0) * 1.15).toFixed(2)}</td>
            <td style="color: #16a34a;">-${topperNeg.toFixed(2)}</td>
          </tr>
          <tr>
            <td>Time Taken</td>
            <td>${r.tMin}m ${r.tSec}s</td>
            <td>${avgTime}</td>
            <td>${topperTime}</td>
          </tr>
        </tbody>
      </table>
    </div>
  `;
}

function renderPacingMatrix(questions, answers) {
  const el = document.getElementById("pacingMatrixContainer");
  if (!el) return;

  let fastCorrect = 0;
  let slowCorrect = 0;
  let fastWrong = 0;
  let slowWrong = 0;

  let totalCorrectTime = 0;
  let correctCount = 0;
  let totalWrongTime = 0;
  let wrongCount = 0;

  (questions || []).forEach((q, idx) => {
    const st = answers[idx] || answers[String(idx)];
    if (!st || st.isUnattempted || (st.answer === null && !st.isCorrect)) return;

    const timeSpent = st.timeSpent || 0;
    const isCorrect = !!st.isCorrect;

    if (isCorrect) {
      totalCorrectTime += timeSpent;
      correctCount++;
      if (timeSpent < 120) fastCorrect++;
      else slowCorrect++;
    } else {
      totalWrongTime += timeSpent;
      wrongCount++;
      if (timeSpent < 120) fastWrong++;
      else slowWrong++;
    }
  });

  const avgCorrectTime = correctCount > 0 ? Math.round(totalCorrectTime / correctCount) : 0;
  const avgWrongTime = wrongCount > 0 ? Math.round(totalWrongTime / wrongCount) : 0;

  el.innerHTML = `
    <div class="adv-card">
      <div class="adv-card-header">
        <div class="adv-card-title">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0284c7" stroke-width="2.2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
          Speed vs Accuracy Matrix
        </div>
        <span style="font-size: 12px; color: #64748b; font-weight: 600;">Pacing Quadrants</span>
      </div>

      <div class="pacing-quadrants-grid">
        <div class="pacing-quad-box q-fast-correct">
          <div class="pacing-quad-title">Mastered (Fast & Right)</div>
          <div class="pacing-quad-val">${fastCorrect} <small>Q</small></div>
          <div class="pacing-quad-desc">&lt; 2 min • High speed & accuracy</div>
        </div>
        <div class="pacing-quad-box q-slow-correct">
          <div class="pacing-quad-title">Time Heavy (Slow & Right)</div>
          <div class="pacing-quad-val">${slowCorrect} <small>Q</small></div>
          <div class="pacing-quad-desc">&ge; 2 min • High accuracy, need speed</div>
        </div>
        <div class="pacing-quad-box q-fast-wrong">
          <div class="pacing-quad-title">Silly Mistakes (Fast & Wrong)</div>
          <div class="pacing-quad-val">${fastWrong} <small>Q</small></div>
          <div class="pacing-quad-desc">&lt; 2 min • Avoid rushing questions</div>
        </div>
        <div class="pacing-quad-box q-slow-wrong">
          <div class="pacing-quad-title">Danger Zone (Slow & Wrong)</div>
          <div class="pacing-quad-val">${slowWrong} <small>Q</small></div>
          <div class="pacing-quad-desc">&ge; 2 min • Wasted time & lost marks</div>
        </div>
      </div>

      <div class="pacing-avg-row">
        <div class="pacing-avg-item">
          <span>Avg Time / Correct Q</span>
          <b style="color: #16a34a;">${avgCorrectTime}s</b>
        </div>
        <div class="pacing-avg-item">
          <span>Avg Time / Incorrect Q</span>
          <b style="color: #dc2626;">${avgWrongTime}s</b>
        </div>
      </div>
    </div>
  `;
}

function renderSwotAnalysis(topicGroups) {
  const el = document.getElementById("swotContainer");
  if (!el) return;

  const topics = topicGroups || [];
  const strongTopics = topics.filter(t => t.stats && t.stats.accuracy >= 60 && t.stats.correct > 0);
  const weakTopics = topics.filter(t => t.stats && (t.stats.accuracy < 60 || t.stats.wrong > 0));

  const strongHtml = strongTopics.length > 0 ? strongTopics.map(t => `
    <div class="swot-item">
      <span class="swot-item-name">${t.name}</span>
      <span class="swot-item-acc green">${t.stats.accuracy}% (${t.stats.correct}/${t.stats.count})</span>
    </div>
  `).join("") : `<div style="font-size: 12px; color: #64748b; font-style: italic; padding: 6px 0;">Keep practicing to build topic strengths!</div>`;

  const weakHtml = weakTopics.length > 0 ? weakTopics.map(t => `
    <div class="swot-item">
      <span class="swot-item-name">${t.name}</span>
      <span class="swot-item-acc red">${t.stats.accuracy}% (${t.stats.wrong} wrong)</span>
    </div>
  `).join("") : `<div style="font-size: 12px; color: #16a34a; font-weight: 600; padding: 6px 0;">Awesome! No critical weak topics found.</div>`;

  el.innerHTML = `
    <div class="adv-card">
      <div class="adv-card-header">
        <div class="adv-card-title">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#16a34a" stroke-width="2.2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
          Topic Strength & Priority Focus
        </div>
        <span style="font-size: 12px; color: #64748b; font-weight: 600;">Actionable Plan</span>
      </div>

      <div class="swot-grid">
        <div class="swot-col">
          <div class="swot-col-title swot-strong-title">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg>
            Mastered Topics (&ge;60%)
          </div>
          ${strongHtml}
        </div>

        <div class="swot-col">
          <div class="swot-col-title swot-weak-title">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            Focus & Revise (&lt;60%)
          </div>
          ${weakHtml}
        </div>
      </div>
    </div>
  `;
}

function renderQuestionMatrix(questions, answers, testName) {
  const container = document.getElementById("questionMatrixContainer");
  if (!container) return;

  let correctCount = 0;
  let wrongCount = 0;
  let unattemptedCount = 0;
  let slowCount = 0;

  const qList = questions || [];
  const btnHtmls = qList.map((q, idx) => {
    const st = answers[idx] || answers[String(idx)] || { answer: null, isCorrect: false, isUnattempted: true, timeSpent: 0 };
    const isCorrect = !!st.isCorrect;
    const isUnattempted = (st.isUnattempted || (st.answer === null && !st.isCorrect));
    const isWrong = (!isCorrect && !isUnattempted);
    const timeSpent = st.timeSpent || 0;

    let status = "unattempted";
    if (isCorrect) { status = "correct"; correctCount++; }
    else if (isWrong) { status = "incorrect"; wrongCount++; }
    else { unattemptedCount++; }

    if (timeSpent >= 120) slowCount++;

    const m = Number(q.marks) || 1;

    return `
      <button class="qm-q-btn ${status}" data-status="${status}" data-time="${timeSpent}" onclick="openQuestionPreview(${idx})" title="Q${idx + 1}: ${status.toUpperCase()} (${timeSpent}s)">
        <span>Q${idx + 1}</span>
        <span class="qm-sub-badge">${m}M</span>
      </button>
    `;
  }).join("");

  container.innerHTML = `
    <div class="qm-filter-bar">
      <button class="qm-filter-btn active" data-filter="all" onclick="filterQuestionMatrix('all')">All (${qList.length})</button>
      <button class="qm-filter-btn" data-filter="correct" onclick="filterQuestionMatrix('correct')">Correct (${correctCount})</button>
      <button class="qm-filter-btn" data-filter="incorrect" onclick="filterQuestionMatrix('incorrect')">Incorrect (${wrongCount})</button>
      <button class="qm-filter-btn" data-filter="unattempted" onclick="filterQuestionMatrix('unattempted')">Unattempted (${unattemptedCount})</button>
      <button class="qm-filter-btn" data-filter="slow" onclick="filterQuestionMatrix('slow')">Slow &ge;2m (${slowCount})</button>
    </div>
    <div class="qm-grid">
      ${btnHtmls}
    </div>
  `;
}

window.filterQuestionMatrix = function(filterType) {
  const container = document.getElementById("questionMatrixContainer");
  if (!container) return;
  container.querySelectorAll(".qm-filter-btn").forEach(btn => {
    if (btn.getAttribute("data-filter") === filterType) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });

  container.querySelectorAll(".qm-q-btn").forEach(btn => {
    const qStatus = btn.getAttribute("data-status");
    const qTime = parseInt(btn.getAttribute("data-time") || "0", 10);

    if (filterType === "all") {
      btn.style.display = "flex";
    } else if (filterType === "slow") {
      btn.style.display = (qTime >= 120) ? "flex" : "none";
    } else {
      btn.style.display = (qStatus === filterType) ? "flex" : "none";
    }
  });
};

window.openQuestionPreview = function(idx) {
  const modal = document.getElementById("questionPreviewModal");
  const modalTitle = document.getElementById("qpModalTitle");
  const modalBody = document.getElementById("qpModalBody");
  if (!modal || !modalBody) return;

  const testName = (document.getElementById("resultCrumbName") ? document.getElementById("resultCrumbName").textContent.trim() : "");
  let questions = (playerQuestions && playerQuestions.length > 0) ? playerQuestions : [];
  if (questions.length === 0) {
    const testKey = (typeof findMatchingTest === 'function' ? (findMatchingTest(testName) || (lastResult && lastResult.testName && findMatchingTest(lastResult.testName))) : null);
    const backendId = (testKey && window.testBackendIdMap) ? window.testBackendIdMap[testKey] : null;
    if (backendId && window.testMap && window.testMap[backendId]) {
      questions = window.testMap[backendId];
    }
  }

  const q = questions[idx];
  if (!q) return;

  const answers = (lastResult && lastResult.answers && Object.keys(lastResult.answers).length > 0)
    ? lastResult.answers
    : (playerState || {});
  const st = answers[idx] || answers[String(idx)] || { answer: null, isCorrect: false, isUnattempted: true, timeSpent: 0 };

  const isCorrect = !!st.isCorrect;
  const isUnattempted = (st.isUnattempted || (st.answer === null && !st.isCorrect));
  const isWrong = (!isCorrect && !isUnattempted);

  let statusClass = isCorrect ? "correct" : (isWrong ? "incorrect" : "unattempted");
  let statusLabel = isCorrect ? "Correct" : (isWrong ? "Incorrect" : "Unattempted");

  const qMarks = Number(q.marks) || 1;
  const qNeg = (q.neg != null) ? Math.abs(Number(q.neg)) : (qMarks === 2 ? 0.66 : 0.33);
  const qType = (q.type || "MCQ").toUpperCase();
  const timeSpent = st.timeSpent || 0;

  modalTitle.textContent = `Question ${idx + 1} Snapshot`;

  let ansCompareHtml = "";
  if (qType === "NAT") {
    const correctVal = q.correct !== undefined ? q.correct : q.answer;
    let rangeStr = Array.isArray(correctVal) ? `${correctVal[0]} to ${correctVal[1] || correctVal[0]}` : correctVal;
    let userVal = (st.answer !== null && st.answer !== undefined && st.answer !== "") ? st.answer : "Not Attempted";
    ansCompareHtml = `
      <div class="qp-ans-compare">
        <div class="qp-ans-block user-ans">
          <div class="qp-ans-label">Your Given Answer</div>
          <div class="qp-ans-val" style="color: ${isCorrect ? '#16a34a' : (isWrong ? '#dc2626' : '#64748b')}">${userVal}</div>
        </div>
        <div class="qp-ans-block correct-ans">
          <div class="qp-ans-label">Accepted Correct Range</div>
          <div class="qp-ans-val" style="color: #16a34a;">${rangeStr}</div>
        </div>
      </div>
    `;
  } else {
    const correctVal = q.correct !== undefined ? q.correct : q.answer;
    let correctIndices = [];
    if (Array.isArray(correctVal)) {
      correctIndices = correctVal.map(c => typeof c === 'string' && /^[A-D]$/i.test(c) ? c.toUpperCase().charCodeAt(0) - 65 : Number(c));
    } else if (typeof correctVal === 'string' && /^[A-D]$/i.test(correctVal)) {
      correctIndices = [correctVal.toUpperCase().charCodeAt(0) - 65];
    } else if (correctVal != null) {
      correctIndices = [Number(correctVal)];
    }

    let userIndices = [];
    if (Array.isArray(st.answer)) {
      userIndices = st.answer.map(c => typeof c === 'string' && /^[A-D]$/i.test(c) ? c.toUpperCase().charCodeAt(0) - 65 : Number(c));
    } else if (typeof st.answer === 'string' && /^[A-D]$/i.test(st.answer)) {
      userIndices = [st.answer.toUpperCase().charCodeAt(0) - 65];
    } else if (st.answer != null && st.answer !== "") {
      userIndices = [Number(st.answer)];
    }

    const letters = ['A', 'B', 'C', 'D', 'E', 'F'];
    const opts = q.options || [];
    let optsHtml = opts.map((opt, oi) => {
      const isUserChoice = userIndices.includes(oi);
      const isRightChoice = correctIndices.includes(oi);

      let borderCol = "#e2e8f0";
      let bgCol = "#ffffff";
      let badge = "";

      if (isRightChoice) {
        borderCol = "#86efac";
        bgCol = "#f0fdf4";
        badge = `<span style="margin-left: auto; font-size: 11px; font-weight: 700; color: #15803d; background: #dcfce7; padding: 2px 8px; border-radius: 10px;">✓ Correct</span>`;
      }
      if (isUserChoice && !isRightChoice) {
        borderCol = "#fca5a5";
        bgCol = "#fef2f2";
        badge = `<span style="margin-left: auto; font-size: 11px; font-weight: 700; color: #b91c1c; background: #fee2e2; padding: 2px 8px; border-radius: 10px;">✗ Your Choice</span>`;
      } else if (isUserChoice && isRightChoice) {
        badge = `<span style="margin-left: auto; font-size: 11px; font-weight: 700; color: #15803d; background: #dcfce7; padding: 2px 8px; border-radius: 10px;">✓ Your Choice (Correct)</span>`;
      }

      return `
        <div style="display: flex; align-items: center; gap: 10px; padding: 10px 14px; border: 1.5px solid ${borderCol}; background: ${bgCol}; border-radius: 8px; font-size: 13px;">
          <b style="color: #64748b; font-size: 12px;">(${letters[oi] || oi})</b>
          <div style="flex: 1; word-break: break-word;">${opt}</div>
          ${badge}
        </div>
      `;
    }).join("");

    ansCompareHtml = `
      <div style="display: flex; flex-direction: column; gap: 8px;">
        <div style="font-size: 12px; font-weight: 700; color: #64748b; text-transform: uppercase;">Options & Breakdown</div>
        ${optsHtml}
      </div>
    `;
  }

  let solHtml = "";
  if (q.solution) {
    solHtml = `
      <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 14px;">
        <div style="font-size: 12px; font-weight: 700; color: #0f172a; margin-bottom: 8px; display: flex; align-items: center; gap: 6px;">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#16a34a" stroke-width="2.5"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
          Explanation / Solution
        </div>
        <div style="font-size: 13px; color: #334155; line-height: 1.6; word-break: break-word;">
          ${q.solution}
        </div>
      </div>
    `;
  }

  modalBody.innerHTML = `
    <div class="qp-info-pill-row">
      <span class="qp-info-pill qp-status-pill ${statusClass}">${statusLabel}</span>
      <span class="qp-info-pill">${qType}</span>
      <span class="qp-info-pill">+${qMarks} / -${qType === 'MCQ' ? qNeg : 0} M</span>
      <span class="qp-info-pill">⏱ ${timeSpent}s spent</span>
    </div>

    <div class="qp-text-box">
      <div style="font-size: 14px; font-weight: 600; color: #1e293b; line-height: 1.6;">${q.text || "Question"}</div>
      ${q.image ? `<div style="margin-top: 10px; text-align: center;"><img src="${q.image}" style="max-width: 100%; border-radius: 6px; border: 1px solid #e2e8f0;" alt="Question diagram"></div>` : ""}
    </div>

    ${ansCompareHtml}
    ${solHtml}

    <div style="display: flex; justify-content: flex-end; gap: 10px; margin-top: 8px;">
      <button class="ra-btn" style="background: #f1f5f9; color: #475569; border: 1px solid #cbd5e1; font-size: 12px; padding: 7px 14px; border-radius: 6px; cursor: pointer;" onclick="closeQuestionPreviewModal()">Close</button>
      <button class="ra-btn" style="background: #14619c; color: #ffffff; border: none; font-size: 12px; font-weight: 700; padding: 7px 16px; border-radius: 6px; cursor: pointer;" onclick="closeQuestionPreviewModal(); openSolutionMode('${testName.replace(/'/g, "\\'")}')">Open in Full Solution Player &rarr;</button>
    </div>
  `;

  modal.classList.add("show");

  if (window.MathJax && window.MathJax.typesetPromise) {
    window.MathJax.typesetPromise([modalBody]).catch(() => {});
  }
  if (window.Prism && window.Prism.highlightAllUnder) {
    window.Prism.highlightAllUnder(modalBody);
  }
};

window.closeQuestionPreviewModal = function() {
  const modal = document.getElementById("questionPreviewModal");
  if (modal) modal.classList.remove("show");
};

async function showResultPage(explicitTestName) {
  const r = lastResult;
  const user = currentUser || { name: "Guest User", email: "" };
  document.getElementById("resultUserAvatar").textContent = (
    user.name.trim().charAt(0) || "U"
  ).toUpperCase();
  document.getElementById("resultUserName").textContent = user.name;
  document.getElementById("resultUserEmail").textContent = user.email;
  let testName = explicitTestName || document.getElementById("playerTopTitle").textContent;
  if (testName.startsWith("Solutions: ")) {
    testName = testName.substring(11).trim();
  }
  document.getElementById("resultCrumbName").textContent = testName;

  document.getElementById("rdScore").textContent = r.score + " / " + r.maxScore;
  document.getElementById("legCorrect").textContent = r.correctCount;
  document.getElementById("legIncorrect").textContent = r.wrongCount;
  document.getElementById("legUnattempted").textContent = r.unattempted;

  const c = parseInt(r.correctCount) || 0;
  const w = parseInt(r.wrongCount) || 0;
  const u = parseInt(r.unattempted) || 0;
  const total = c + w + u;
  const totalSafe = total > 0 ? total : 1; // Avoid divide by zero
  const cPct = (c / totalSafe) * 100;
  const iPct = (w / totalSafe) * 100;
  const donutGradient = `#2F9E63 0 ${cPct}%, #D9534F ${cPct}% ${cPct + iPct}%, #E8A33D ${cPct + iPct}% 100%`;
  document
    .getElementById("resultDonut")
    .style.setProperty("--donut-gradient", donutGradient);

  const accuracy =
    r.correctCount + r.wrongCount > 0
      ? Math.round((r.correctCount / (r.correctCount + r.wrongCount)) * 1000) / 10
      : 0;
  document.getElementById("statAccuracy").textContent = accuracy + "%";
  document.getElementById("statTime").textContent = r.tMin + " min " + r.tSec + " sec";

  let avgScore = r.score;
  let highestScore = r.score;
  let avgAcc = accuracy;
  let totalStudents = 1;
  let myRank = 1;

  document.getElementById("statRank").textContent = "1 out of 1";
  document.getElementById("statPercentile").textContent = "100%";

  let questions = (playerQuestions && playerQuestions.length > 0) ? playerQuestions : [];
  if (questions.length === 0) {
    const testKey = (typeof findMatchingTest === 'function' ? (findMatchingTest(testName) || (lastResult && lastResult.testName && findMatchingTest(lastResult.testName))) : null);
    const backendId = (testKey && window.testBackendIdMap) ? window.testBackendIdMap[testKey] : null;
    if (backendId && window.testMap && window.testMap[backendId]) {
      questions = window.testMap[backendId];
      playerQuestions = questions;
    }
  }

  const answers = (lastResult && lastResult.answers && Object.keys(lastResult.answers).length > 0)
    ? lastResult.answers
    : (playerState || {});

  const breakdown = getTestBreakdown(testName, questions, answers);

  renderGatePredictor(r);
  let totalLostNeg = renderMarksLeakage(questions, answers, r);
  renderPacingMatrix(questions, answers);
  renderSwotAnalysis(breakdown.topicGroups);
  renderQuestionMatrix(questions, answers, testName);
  renderTopperComparison(r, avgScore, avgAcc, highestScore, null, totalStudents, totalLostNeg, questions);

  const renderCardFromGroup = (grp) => `
      <div class="result-subject-card">
        <div class="rsc-top">
          <div class="result-subject-icon" style="background: ${grp.color}15; color: ${grp.color};">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="2" y="4" width="20" height="14" rx="1" />
              <path d="M8 21h8M12 18v3" />
            </svg>
          </div>
          <div class="result-subject-name">${grp.name}</div>
        </div>
        <div class="rsc-donut-row">
          <div class="result-subject-donut" style="--donut-gradient: ${grp.stats.donutGradient}">
            <div class="result-subject-donut-inner"></div>
          </div>
          <div class="result-legend" style="font-size: 11px;">
            <div><span class="dot correct"></span>Correct <b>${grp.stats.correct}</b></div>
            <div><span class="dot incorrect"></span>Incorrect <b>${grp.stats.wrong}</b></div>
            <div><span class="dot unattempted"></span>Unattempted <b>${grp.stats.unattempted}</b></div>
          </div>
        </div>
        <div class="rsc-stats">
          <div class="rsc-stat-row"><span>Score</span><span class="rsc-stat-val">${grp.stats.score} / ${grp.stats.maxScore}</span></div>
          <div class="rsc-stat-row"><span>Accuracy</span><span class="rsc-stat-val">${grp.stats.accuracy}%</span></div>
          <div class="rsc-stat-row"><span>Questions</span><span class="rsc-stat-val">${grp.stats.count}</span></div>
        </div>
      </div>
  `;

  document.getElementById("subjectWiseContainer").innerHTML = breakdown.subjectGroups.map(renderCardFromGroup).join("");
  document.getElementById("topicWiseContainer").innerHTML = breakdown.topicGroups.map(renderCardFromGroup).join("");

  document.body.style.overflow = "";
  // SHOW RESULT OVERLAY IMMEDIATELY & HIDE SUCCESS OVERLAY (NO FLASH OF LEARN PAGE)
  document.getElementById("resultOverlay").classList.add("show");
  const succEl = document.getElementById("successOverlay");
  if (succEl) succEl.classList.remove("show");

  // Render Charts immediately
  setTimeout(() => {
    // 1. Subject Breakdown (Stacked bar showing Correct, Incorrect, Unattempted)
    const subLabels = breakdown.subjectGroups.map(g => g.name);
    const subDatasets = [
      { label: 'Correct', data: breakdown.subjectGroups.map(g => g.stats.correct), backgroundColor: '#2F9E63' },
      { label: 'Incorrect', data: breakdown.subjectGroups.map(g => g.stats.wrong), backgroundColor: '#D9534F' },
      { label: 'Unattempted', data: breakdown.subjectGroups.map(g => g.stats.unattempted), backgroundColor: '#E8A33D' }
    ];
    renderBarChart("subjectChart", subLabels, null, null, subDatasets);

    // 2. Topic Breakdown (Stacked bar showing Correct, Incorrect, Unattempted)
    const topLabels = breakdown.topicGroups.map(g => g.name);
    const topDatasets = [
      { label: 'Correct', data: breakdown.topicGroups.map(g => g.stats.correct), backgroundColor: '#2F9E63' },
      { label: 'Incorrect', data: breakdown.topicGroups.map(g => g.stats.wrong), backgroundColor: '#D9534F' },
      { label: 'Unattempted', data: breakdown.topicGroups.map(g => g.stats.unattempted), backgroundColor: '#E8A33D' }
    ];
    renderBarChart("topicChart", topLabels, null, null, topDatasets);

    renderAdvancedCharts();
  }, 100);

  // Asynchronously fetch leaderboard & stats from server without blocking the UI
  const currentSid = pendingTestSeriesId || (typeof currentTestListId !== "undefined" ? currentTestListId : "");
  try {
    const statsUrl = '/api/test-stats/' + encodeURIComponent(testName) + (currentSid ? `?seriesId=${encodeURIComponent(currentSid)}` : '');
    const res = await fetch(statsUrl);
    const data = await res.json();
    if (data.success && data.stats) {
      avgScore = data.stats.avgScore;
      highestScore = data.stats.highestScore;
      avgAcc = data.stats.avgAccuracy;
      if (data.stats.totalStudents) {
        totalStudents = data.stats.totalStudents;
      }
      document.querySelectorAll(".card-avg-score").forEach(el => el.textContent = `${avgScore} / ${r.maxScore}`);
      document.querySelectorAll(".card-highest-score").forEach(el => el.textContent = `${highestScore} / ${r.maxScore}`);
      document.querySelectorAll(".card-avg-acc").forEach(el => el.textContent = `${avgAcc}%`);
      renderTopperComparison(r, avgScore, avgAcc, highestScore, null, totalStudents, totalLostNeg, questions);
    }
  } catch (e) {
    console.error("Could not fetch stats", e);
  }

  try {
    const leadUrl = '/api/leaderboard/' + encodeURIComponent(testName) + '?t=' + Date.now() + (currentSid ? `&seriesId=${encodeURIComponent(currentSid)}` : '');
    const leadRes = await fetch(leadUrl);
    const leadData = await leadRes.json();
    if (leadData.success && Array.isArray(leadData.leaderboard) && leadData.leaderboard.length > 0) {
      const lb = leadData.leaderboard;
      const currentUserEmail = (currentUser || {}).email || "";
      const myUserId = (currentUser && (currentUser._id || currentUser.id)) ? String(currentUser._id || currentUser.id) : "";
      const currentUserName = (currentUser && currentUser.name) ? currentUser.name.trim().toLowerCase() : "";

      const myEntry = lb.find(x => {
        if (myUserId && x.userId && String(x.userId) === myUserId) return true;
        if (currentUserEmail && x.email && currentUserEmail === x.email) return true;
        if (currentUserName && x.name && currentUserName === x.name.trim().toLowerCase()) return true;
        return false;
      });

      // Calculate rank of current attempt (r.score) compared to competitors in leaderboard
      const higherScores = lb.filter(x => {
        const isSelf = (myUserId && x.userId && String(x.userId) === myUserId) ||
          (currentUserEmail && x.email && currentUserEmail === x.email) ||
          (currentUserName && x.name && currentUserName === x.name.trim().toLowerCase());
        if (isSelf) return false;
        return (x.score || 0) > (r.score || 0);
      }).length;

      myRank = higherScores + 1;
      totalStudents = myEntry ? lb.length : lb.length + 1;
      const topperCandidate = (lb && lb.length > 0) ? lb[0] : null;
      renderTopperComparison(r, avgScore, avgAcc, highestScore, topperCandidate, totalStudents, totalLostNeg, questions);
    } else {
      myRank = 1;
      totalStudents = 1;
      renderTopperComparison(r, avgScore, avgAcc, highestScore, null, totalStudents, totalLostNeg, questions);
    }
  } catch (e) {
    console.error("Could not fetch leaderboard for rank", e);
  }

  document.getElementById("statRank").textContent = myRank + " out of " + totalStudents;
  const percentileVal = totalStudents <= 1 ? 100 : Math.max(1, Math.round(((totalStudents - myRank + 1) / totalStudents) * 100 * 10) / 10);
  document.getElementById("statPercentile").textContent = percentileVal + "%";
}

let __advancedStats = null;
async function renderAdvancedCharts() {
  if (typeof Chart === 'undefined') return;

  const testName = document.getElementById("resultCrumbName").textContent.trim();

  if (!__advancedStats || __advancedStats.testName !== testName) {
    try {
      const advSid = pendingTestSeriesId || (typeof currentTestListId !== "undefined" ? currentTestListId : "");
      const advUrl = '/api/test-advanced-stats/' + encodeURIComponent(testName) + (advSid ? `?seriesId=${encodeURIComponent(advSid)}` : '');
      const res = await fetch(advUrl);
      const data = await res.json();
      if (data.success) {
        __advancedStats = data.advancedStats;
        __advancedStats.testName = testName;
      }
    } catch (e) { }
  }

  if (!__advancedStats) {
    // Fallback: Generate intelligent distribution from current test questions and playerState
    const qList = (playerQuestions && playerQuestions.length > 0) ? playerQuestions : [];
    const totalQ = qList.length || 65;
    const perQ = [];
    let easyMarks = 0, medMarks = 0, hardMarks = 0;
    let easyQ = 0, medQ = 0, hardQ = 0;

    for (let i = 0; i < totalQ; i++) {
      let diff = "Hard";
      if (i < 20) { diff = "Easy"; easyQ++; }
      else if (i < 40) { diff = "Medium"; medQ++; }
      else { diff = "Hard"; hardQ++; }

      const st = playerState[i] || {};
      perQ.push({
        index: i,
        difficulty: diff,
        correct: st.isCorrect ? 1 : 0,
        wrong: (!st.isCorrect && !st.isUnattempted) ? 1 : 0,
        unattempted: (st.isUnattempted || !st.visited) ? 1 : 0,
        avgTime: (st.timeSpent || 60)
      });
    }

    const diffStats = {
      Easy: { avgMarks: Math.round(easyQ * 0.7 * 100) / 100, highestMarks: easyQ, avgTime: 80, avgAccuracy: 70 },
      Medium: { avgMarks: Math.round(medQ * 0.5 * 100) / 100, highestMarks: Math.round(medQ * 1.5), avgTime: 120, avgAccuracy: 50 },
      Hard: { avgMarks: Math.round(hardQ * 0.35 * 100) / 100, highestMarks: Math.round(hardQ * 2), avgTime: 180, avgAccuracy: 35 }
    };

    __advancedStats = {
      scoresCurve: [lastResult ? lastResult.score : 0],
      medianScore: lastResult ? lastResult.score : 0,
      difficultyStats: diffStats,
      perQuestion: perQ,
      testName: testName
    };
  }

  // Prepare data arrays
  const astats = __advancedStats;
  const diffs = ["Easy", "Medium", "Hard"];

  const myMarks = diffs.map(d => {
    // compute my marks in this diff
    let sum = 0;
    astats.perQuestion.filter(q => q.difficulty === d).forEach(q => {
      const st = playerState[q.index];
      const qObj = (playerQuestions && playerQuestions[q.index]) ? playerQuestions[q.index] : null;
      const m = (qObj && typeof qObj.marks === 'number') ? qObj.marks : (q.index >= 35 ? 2 : (q.index >= 5 && q.index < 10 ? 2 : 1));
      const n = (qObj && typeof qObj.neg === 'number') ? qObj.neg : (m === 2 ? 0.66 : 0.33);
      if (st && st.isCorrect) sum += m;
      else if (st && !st.isCorrect && !st.isUnattempted) sum -= n;
    });
    return Math.max(0, Math.round(sum * 100) / 100);
  });

  const avgMarks = diffs.map(d => astats.difficultyStats[d].avgMarks);
  const highestMarks = diffs.map(d => astats.difficultyStats[d].highestMarks);

  const myTime = diffs.map(d => {
    let sum = 0;
    astats.perQuestion.filter(q => q.difficulty === d).forEach(q => {
      const st = playerState[q.index];
      if (st && st.timeSpent) sum += st.timeSpent;
    });
    return sum / 60; // in minutes
  });
  const avgTime = diffs.map(d => astats.difficultyStats[d].avgTime / 60); // minutes

  const myAcc = diffs.map(d => {
    let c = 0, t = 0;
    astats.perQuestion.filter(q => q.difficulty === d).forEach(q => {
      const st = playerState[q.index];
      if (st && !st.isUnattempted) {
        t++;
        if (st.isCorrect) c++;
      }
    });
    return t > 0 ? (c / t) * 100 : 0;
  });
  const avgAcc = diffs.map(d => astats.difficultyStats[d].avgAccuracy);

  // Student Attempt Stacked Bar
  const labelsQ = astats.perQuestion.map(q => q.index + 1);
  const corQ = astats.perQuestion.map(q => q.correct);
  const incQ = astats.perQuestion.map(q => q.wrong);
  const unaQ = astats.perQuestion.map(q => q.unattempted);

  // Median line data
  const medianLine = astats.scoresCurve.map(() => astats.medianScore);

  createChart("difficultyPerformanceChart", 'bar', diffs, [
    { label: 'My Marks', data: myMarks, backgroundColor: '#14619C' },
    { label: 'Avg Marks', data: avgMarks, backgroundColor: '#FF9800' },
    { label: 'Highest Marks', data: highestMarks, backgroundColor: '#5D8C72' }
  ], 'Marks');

  createChart("medianScoreChart", 'line', astats.scoresCurve.map((_, i) => i + 1), [
    { label: 'Student Marks', data: astats.scoresCurve, borderColor: '#14619C', backgroundColor: 'rgba(20, 97, 156, 0.1)', fill: true, tension: 0.4 },
    { label: 'Median Score', data: medianLine, borderColor: '#FF9800', pointRadius: 0, fill: false }
  ], 'Marks');

  createChart("timeVsDifficultyChart", 'bar', diffs, [
    { label: 'My Time taken', data: myTime, backgroundColor: '#14619C' },
    { label: 'Average time taken', data: avgTime, backgroundColor: '#FF9800' }
  ], 'Total time (minutes)');

  createChart("studentAttemptChart", 'bar', labelsQ, [
    { label: 'Incorrect', data: incQ, backgroundColor: '#F44336' },
    { label: 'Unattempted', data: unaQ, backgroundColor: '#FF9800' },
    { label: 'Correct', data: corQ, backgroundColor: '#5D8C72' }
  ], 'Count of Students', true);

  createChart("accuracyDifficultyChart", 'bar', diffs, [
    { label: 'My Accuracy', data: myAcc, backgroundColor: '#14619C' },
    { label: 'Avg Accuracy', data: avgAcc, backgroundColor: '#FF9800' }
  ], 'Accuracy (%)');
}

let __chartInstances = {};
function createChart(canvasId, type, labels, datasets, yTitle, isStacked = false) {
  const ctx = document.getElementById(canvasId);
  if (!ctx) return;
  if (__chartInstances[canvasId]) __chartInstances[canvasId].destroy();

  __chartInstances[canvasId] = new Chart(ctx, {
    type: type,
    data: { labels, datasets },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      interaction: { mode: 'index', intersect: false },
      plugins: {
        legend: { position: 'bottom', labels: { usePointStyle: true, padding: 20 } }
      },
      scales: {
        x: { stacked: isStacked, grid: { display: false } },
        y: { stacked: isStacked, title: { display: true, text: yTitle }, grid: { color: '#f1f4f8' } }
      }
    }
  });
}

function renderBarChart(canvasId, labels, counts, color, stackedDatasets) {
  if (typeof Chart === 'undefined') return;
  const ctx = document.getElementById(canvasId);
  if (!ctx) return;
  if (__chartInstances[canvasId]) __chartInstances[canvasId].destroy();

  const isMulti = Array.isArray(labels);
  const chartLabels = isMulti ? labels : [String(labels).toUpperCase()];

  let datasets;
  if (stackedDatasets) {
    datasets = stackedDatasets.map(ds => ({
      ...ds,
      borderRadius: 4,
      maxBarThickness: 48
    }));
  } else if (isMulti) {
    datasets = [{
      label: 'Questions',
      data: counts,
      backgroundColor: color || ['#14619C', '#5D8C72', '#E8A33D', '#9C27B0', '#009688'],
      borderRadius: 6,
      maxBarThickness: 48
    }];
  } else {
    datasets = [{
      label: 'Questions',
      data: [counts],
      backgroundColor: color || '#14619C',
      borderRadius: 6,
      maxBarThickness: 48
    }];
  }

  __chartInstances[canvasId] = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: chartLabels,
      datasets: datasets
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      interaction: { mode: 'index', intersect: false },
      plugins: {
        legend: {
          display: Boolean(stackedDatasets),
          position: 'bottom',
          labels: { usePointStyle: true, padding: 15 }
        },
        tooltip: {
          callbacks: {
            footer: (items) => {
              if (!stackedDatasets) return '';
              let total = 0;
              items.forEach(i => { total += i.parsed.y; });
              return 'Total Questions: ' + total;
            }
          }
        }
      },
      scales: {
        x: {
          stacked: Boolean(stackedDatasets),
          grid: { display: false },
          ticks: {
            font: { size: 12, weight: '500' }
          }
        },
        y: {
          stacked: Boolean(stackedDatasets),
          beginAtZero: true,
          grid: { color: '#f1f4f8' },
          title: { display: true, text: 'Questions Count' },
          ticks: { precision: 0 }
        }
      }
    }
  });
}

function closeResult() {
  document.getElementById("resultOverlay").classList.remove("show");
  // Immediately refresh active view so the new score and status are visible
  const detailView = document.getElementById("view-detail");
  if (detailView && detailView.classList.contains("active") && typeof currentDetailId !== "undefined") {
    if (typeof openDetail === 'function') openDetail(currentDetailId, false);
  }
  const testView = document.getElementById("view-tests");
  if (testView && testView.classList.contains("active") && typeof currentTestListId !== "undefined") {
    const seriesObj = testSeries.find((x) => x.id === currentTestListId);
    if (seriesObj && typeof renderTestList === 'function') renderTestList(seriesObj, "all");
  }
}

async function openLeaderboard() {
  const overlay = document.getElementById("leaderboardOverlay");
  const body = document.getElementById("leaderboardBody");
  const sticky = document.getElementById("leaderboardSticky");

  overlay.classList.add("show");
  body.innerHTML = '<div class="leaderboard-empty">Loading leaderboard...</div>';
  sticky.innerHTML = '';

  const testName = document.getElementById("resultCrumbName").textContent.trim();
  const lbSid = pendingTestSeriesId || (typeof currentTestListId !== "undefined" ? currentTestListId : "");

  try {
    const lbUrl = '/api/leaderboard/' + encodeURIComponent(testName) + '?t=' + Date.now() + (lbSid ? `&seriesId=${encodeURIComponent(lbSid)}` : '');
    const res = await fetch(lbUrl);
    const data = await res.json();
    if (data.success) {
      if (data.leaderboard.length === 0) {
        body.innerHTML = '<div class="leaderboard-empty">No results found for this test yet.</div>';
        return;
      }

      let html = "";
      let myRankHTML = "";
      const currentUserEmail = (currentUser || {}).email || "";
      let foundMe = false;

      const myUserId = (currentUser && (currentUser._id || currentUser.id)) ? String(currentUser._id || currentUser.id) : "";
      const currentUserName = (currentUser && currentUser.name) ? currentUser.name.trim().toLowerCase() : "";

      data.leaderboard.forEach(r => {
        const rUserId = r.userId ? String(r.userId) : "";
        const rName = r.name ? r.name.trim().toLowerCase() : "";
        const isMe = (myUserId && rUserId && myUserId === rUserId) ||
          (currentUserName && rName && currentUserName === rName);
        const initial = r.name ? (r.name.trim().charAt(0).toUpperCase() || 'U') : 'U';

        const itemHTML = `
          <div class="leaderboard-item" ${isMe ? 'style="background: #eef7fc;"' : ''}>
            <div class="leaderboard-item-left">
              <div class="leaderboard-avatar">${initial}</div>
              <div class="leaderboard-user-info">
                <span class="leaderboard-rank-badge">AIR-${r.rank}</span>
                <span class="leaderboard-user-name">${r.name}${isMe ? ' (You)' : ''}</span>
              </div>
            </div>
            <div class="leaderboard-item-right">
              <div class="leaderboard-score-label">Score</div>
              <div class="leaderboard-score-val">${r.score} / ${r.maxScore}</div>
            </div>
          </div>
        `;
        html += itemHTML;

        if (isMe && !foundMe) {
          myRankHTML = itemHTML;
          myRankNum = r.rank;
          foundMe = true;
        }
      });

      body.innerHTML = html;

      // Only show sticky footer if user's rank is NOT in the top 5
      if (myRankHTML && myRankNum > 5) {
        sticky.innerHTML = `
           <div style="text-align: center; color: #c3ced8; padding: 10px 0; font-size: 20px; line-height: 0.5;">...</div>
           ${myRankHTML}
         `;
      } else {
        sticky.innerHTML = '';
      }

    } else {
      body.innerHTML = '<div class="leaderboard-empty">Failed to load leaderboard.</div>';
    }
  } catch (err) {
    body.innerHTML = '<div class="leaderboard-empty">Error loading leaderboard.</div>';
    console.error(err);
  }
}

function closeLeaderboard() {
  document.getElementById("leaderboardOverlay").classList.remove("show");
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


// ==========================================
// ANSWERS & DISCUSSION LOGIC
// ==========================================

let answers = [];

document.addEventListener('DOMContentLoaded', () => {
  if (typeof CKEDITOR !== 'undefined') {
    CKEDITOR.replace('editor1', {
      extraPlugins: 'image2,uploadimage',
      filebrowserUploadUrl: '/api/upload-image',
      image2_alignClasses: ['image-align-left', 'image-align-center', 'image-align-right'],
      image2_disableResizer: false,
      versionCheck: false
    });
  }
});

function toggleEditor() {
  const editor = document.getElementById('editorOverlay');
  const discuss = document.getElementById('discussOverlay');
  discuss.style.display = 'none';
  editor.style.display = editor.style.display === 'flex' ? 'none' : 'flex';
}

function toggleDiscuss() {
  const editor = document.getElementById('editorOverlay');
  const discuss = document.getElementById('discussOverlay');
  editor.style.display = 'none';
  discuss.style.display = discuss.style.display === 'flex' ? 'none' : 'flex';
  if (discuss.style.display === 'flex') {
    fetchAnswers();
  }
}

async function fetchAnswers() {
  const list = document.getElementById('answersList');
  list.innerHTML = '<div style="color: #64748b; text-align: center; margin-top: 20px;">Loading answers...</div>';
  try {
    const reportTestId = encodeURIComponent(document.getElementById('playerTopTitle').textContent.trim());
    const res = await fetch(`/api/answers/${reportTestId}/${playerCurrent}`);
    const data = await res.json();
    if (data.success) {
      answers = data.answers;
      renderAnswers();
    } else {
      list.innerHTML = '<div style="color: red;">Failed to load answers.</div>';
    }
  } catch (err) {
    list.innerHTML = '<div style="color: red;">Network error.</div>';
  }
}

function renderAnswers() {
  const list = document.getElementById('answersList');
  if (answers.length === 0) {
    list.innerHTML = '<div style="color: #64748b; text-align: center; margin-top: 20px;">No answers yet. Be the first to answer!</div>';
    return;
  }
  let html = '';
  answers.forEach((ans) => {
    let char = ans.userName ? ans.userName.charAt(0).toUpperCase() : 'S';
    let name = ans.userName || 'Student';
    let email = ans.userEmail || '';
    let date = new Date(ans.createdAt).toLocaleString();
    html += `
      <div style="border: 1px solid #e2e8f0; border-radius: 6px; padding: 15px; margin-bottom: 15px; background: #f8fafc;">
        <div style="font-size: 12px; color: #64748b; margin-bottom: 10px; display: flex; justify-content: space-between; align-items: center;">
          <div style="display: flex; align-items: center; gap: 8px;">
            <div style="width: 24px; height: 24px; background: #0056b3; color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold;">${char}</div>
            <div>
              <strong style="color: #334155;">${name}</strong>
              <div style="font-size: 10px; color: #94a3b8;">${email}</div>
            </div>
          </div>
          <div style="display: flex; gap: 10px; align-items: center;">
            <span>${date}</span>
            ${(typeof currentUser !== 'undefined' && currentUser && currentUser.email === 'yuvrajsingh36828@gmail.com') ? `<button onclick="deleteAnswer('${ans._id}')" style="background: #ef4444; color: white; border: none; padding: 4px 8px; border-radius: 4px; cursor: pointer; font-size: 10px;">Delete</button>` : ''}
          </div>
        </div>
        <div class="answer-content" style="overflow-wrap: break-word;">
          ${ans.content}
        </div>
      </div>
    `;
  });
  list.innerHTML = html;
}

async function submitAnswer() {
  const token = localStorage.getItem('apexcore_token');
  if (!token) {
    alert('Please log in to submit an answer.');
    return;
  }
  const data = CKEDITOR.instances.editor1.getData();
  if (data.trim() === '') {
    alert('Answer cannot be empty!');
    return;
  }
  try {
    const reportTestId = document.getElementById('playerTopTitle').textContent.trim();
    const res = await fetch('/api/answers', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token },
      body: JSON.stringify({ testId: reportTestId, qIndex: playerCurrent, content: data })
    });
    const resData = await res.json();
    if (resData.success) {
      CKEDITOR.instances.editor1.setData('');
      toggleEditor();
      toggleDiscuss();
    } else {
      alert(resData.message || 'Error submitting answer');
    }
  } catch (err) {
    alert('Network error');
  }
}

async function deleteAnswer(id) {
  if (!confirm("Are you sure you want to delete this answer?")) return;
  const token = localStorage.getItem('apexcore_token');
  try {
    const res = await fetch(`/api/answers/${id}`, {
      method: 'DELETE',
      headers: { 'Authorization': 'Bearer ' + token }
    });
    const resData = await res.json();
    if (resData.success) {
      fetchAnswers();
    } else {
      alert(resData.message || 'Error deleting answer');
    }
  } catch (err) {
    alert("Network error");
  }
}

