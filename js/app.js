/* ======================================================================
   app.js — general site logic: login/OTP, location dropdown, test-series
   listing, test-series detail page. (Not question content — see
   js/questions/ for that.)
   ====================================================================== */


/* ---------- view switching ---------- */
function showView(name, pushHistory = true) {
  const target = document.getElementById("view-" + name);
  if (!target) {
    if (name === "home") return showView("list", pushHistory);
    return;
  }
  document
    .querySelectorAll(".view")
    .forEach((v) => v.classList.remove("active"));
  target.classList.add("active");
  document
    .querySelectorAll(".nav-item[data-nav]")
    .forEach((n) => n.classList.remove("active"));
  const navMap = { detail: "list", tests: "learn" };
  const nav = document.querySelector(
    '.nav-item[data-nav="' + (navMap[name] || name) + '"]',
  );
  if (nav) nav.classList.add("active");
  window.scrollTo({ top: 0, behavior: "smooth" });

  if (pushHistory) {
    history.pushState({ view: name, param: null }, "", "");
  }
}

// Initial state setup and popstate listener
window.addEventListener("DOMContentLoaded", () => {
  history.replaceState({ view: "list", param: null }, "", "");
});

window.addEventListener("popstate", (e) => {
  // 1. If test player is active, INTERCEPT back gesture so test is not cancelled!
  const playerOverlay = document.getElementById("playerOverlay");
  if (playerOverlay && playerOverlay.classList.contains("show")) {
    if (typeof solutionMode !== "undefined" && solutionMode) {
      if (typeof exitPlayer === "function") exitPlayer();
      return;
    }
    // Re-push state so page history doesn't leave the test
    history.pushState({ view: "player" }, "", "");
    if (typeof openTestPauseModal === "function") {
      openTestPauseModal();
    }
    return;
  }

  // 2. Close any open sub-modals or overlays first without navigating the page
  const pauseModal = document.getElementById("testPauseModal");
  if (pauseModal && pauseModal.classList.contains("show")) {
    pauseModal.classList.remove("show");
    pauseModal.style.display = "none";
    return;
  }

  const qpModal = document.getElementById("questionPreviewModal");
  if (qpModal && qpModal.classList.contains("show")) {
    if (typeof closeQuestionPreviewModal === "function") closeQuestionPreviewModal();
    return;
  }

  const qpaperOverlay = document.getElementById("qpaperOverlay");
  if (qpaperOverlay && qpaperOverlay.classList.contains("show")) {
    if (typeof closeQuestionPaper === "function") closeQuestionPaper();
    return;
  }

  const snapModal = document.getElementById("solutionSnapshotModal");
  if (snapModal && snapModal.classList.contains("show")) {
    if (typeof closeQuestionSnapshot === "function") closeQuestionSnapshot();
    return;
  }

  const bookmarkModal = document.getElementById("bookmarkDetailModal");
  if (bookmarkModal && bookmarkModal.style.display !== "none") {
    bookmarkModal.style.display = "none";
    return;
  }

  const calcModal = document.getElementById("calcModal");
  if (calcModal && calcModal.classList.contains("show")) {
    if (typeof calcClose === "function") calcClose();
    return;
  }

  const loginModal = document.getElementById("loginModal");
  if (loginModal && loginModal.classList.contains("show")) {
    if (typeof closeLogin === "function") closeLogin();
    return;
  }

  const instrOverlay = document.getElementById("examOverlay");
  if (instrOverlay && instrOverlay.classList.contains("show")) {
    if (typeof closeInstructions === "function") closeInstructions();
    return;
  }

  const resultOverlay = document.getElementById("resultOverlay");
  if (resultOverlay && resultOverlay.classList.contains("show")) {
    if (typeof closeResult === "function") closeResult();
    return;
  }

  // 3. Clean up overflow and navigate main view
  document.body.style.overflow = "";

  if (!e.state) {
    showView("list", false);
    return;
  }

  if (e.state.view === "detail") {
    if (typeof openDetail === "function" && e.state.param) {
      openDetail(e.state.param, false);
    } else {
      showView("list", false);
    }
  } else if (e.state.view === "tests") {
    if (typeof openTestList === "function" && e.state.param) {
      openTestList(e.state.param, false);
    } else {
      showView("list", false);
    }
  } else if (e.state.view === "learn") {
    if (typeof openLearn === "function") {
      openLearn();
    } else {
      showView("learn", false);
    }
  } else if (e.state.view === "bookmarks") {
    showView("bookmarks", false);
    if (typeof renderBookmarks === "function") renderBookmarks();
  } else if (e.state.view === "contact") {
    showView("contact", false);
  } else {
    showView(e.state.view || "list", false);
  }
});

/* ---------- icon set ---------- */
const icons = {
  civil:
    '<path d="M3 21h18"/><path d="M5 21V7l7-4 7 4v14"/><path d="M9 21v-6h6v6"/>',
  mech: '<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .34 1.87l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.7 1.7 0 0 0-1.87-.34 1.7 1.7 0 0 0-1.04 1.56V21a2 2 0 1 1-4 0v-.09A1.7 1.7 0 0 0 9 19.35a1.7 1.7 0 0 0-1.87.34l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.7 1.7 0 0 0 4.65 15a1.7 1.7 0 0 0-1.56-1.04H3a2 2 0 1 1 0-4h.09A1.7 1.7 0 0 0 4.65 9a1.7 1.7 0 0 0-.34-1.87l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.7 1.7 0 0 0 9 4.65a1.7 1.7 0 0 0 1.04-1.56V3a2 2 0 1 1 4 0v.09a1.7 1.7 0 0 0 1.04 1.56 1.7 1.7 0 0 0 1.87-.34l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.7 1.7 0 0 0 19.35 9a1.7 1.7 0 0 0 1.56 1.04H21a2 2 0 1 1 0 4h-.09a1.7 1.7 0 0 0-1.56 1.04Z"/>',
  elec: '<path d="m13 2-9 12h7l-1 8 9-12h-7l1-8Z"/>',
  ece: '<rect x="9" y="9" width="6" height="6"/><path d="M9 1v4M15 1v4M9 19v4M15 19v4M1 9h4M1 15h4M19 9h4M19 15h4"/>',
  cs: '<rect x="2" y="4" width="20" height="14" rx="1"/><path d="M8 21h8M12 18v3"/>',
};

/* ---------- home course grid ---------- */
const courses = [
  {
    tag: "ESE+GATE+SES 2027",
    title: "CE — ESE+GATE+SES 2027 1 Year Classroom Course",
    stream: "CE",
    streamFull: "Civil Engg.",
    mode: "Regular",
    oldPrice: "₹199",
    price: "₹1,28,000",
    cut: "₹1,45,000",
    icon: icons.civil,
    f: ["gate", "ese", "ses"],
  },
  {
    tag: "GATE + SES 2027",
    title: "ME — GATE+SES 2027 1 Year Flexi Course",
    stream: "ME",
    streamFull: "Mechanical",
    mode: "Flexi",
    oldPrice: "₹199",
    price: "₹1,12,000",
    cut: "₹1,25,000",
    icon: icons.mech,
    f: ["gate", "ses"],
  },
  {
    tag: "ESE+GATE 2027",
    title: "EE — ESE+GATE 2027 Weekend Classroom Course",
    stream: "EE",
    streamFull: "Electrical",
    mode: "Weekend",
    oldPrice: "₹199",
    price: "₹98,500",
    cut: "₹1,10,000",
    icon: icons.elec,
    f: ["gate", "ese"],
  },
  {
    tag: "GATE 2027",
    title: "EC/IN — GATE 2027 1 Year Classroom Course",
    stream: "EC",
    streamFull: "Electronics",
    mode: "Regular",
    oldPrice: "₹199",
    price: "₹1,05,000",
    cut: "₹1,18,000",
    icon: icons.ece,
    f: ["gate"],
  },
  {
    tag: "AE & JE 2027",
    title: "CS — AE & JE Combined Foundation Course",
    stream: "CS",
    streamFull: "Computer Sc.",
    mode: "Regular",
    oldPrice: "₹199",
    price: "₹74,000",
    cut: "₹85,000",
    icon: icons.cs,
    f: ["aeje"],
  },
  {
    tag: "ESE+SES 2027",
    title: "CE — ESE+SES 2027 Crash Classroom Course",
    stream: "CE",
    streamFull: "Civil Engg.",
    mode: "Crash",
    oldPrice: "₹199",
    price: "₹56,000",
    cut: "₹64,000",
    icon: icons.civil,
    f: ["ese", "ses"],
  },
];

/* ---------- test series data ---------- */
window.testSeries = [
  {
    id: "demo-test",
    code: "DEMO",
    examTag: "GATE",
    subjectTag: "DEMo Engineering",
    title: "DEMO Practice Test Series",
    f: "demo",
    lang: "English",
    objective: "Objective",
    tests: 47,
    startDate: "2025-10-20",
    endDate: "2026-09-30",
    session: "2025-2026",
    desc: "A unified objective-test bank pooling recruitment patterns from major PSUs, useful for candidates targeting multiple public-sector exams in one prep cycle.",
    features: [
      "Multi-PSU pattern coverage",
      "Sectional accuracy tracking",
      "All-India percentile ranking",
      "Updated as per latest patterns",
      "Bilingual question support",
      "Performance trend reports",
    ],
    batches: [
      {
        name: "Batch 1",
        start: "Oct 20, 2025",
        time: "12:00 AM – 11:59 PM",
        selected: true,
      },
    ],
    schedule: [
      // ["PT - 5", "Mar 2, 2026"],
      // ["PT - 4", "Jan 28, 2026"],
      // ["PT - 3", "Dec 22, 2025"],
      // ["PT - 2", "Nov 25, 2025"],
    ],
    // oldPrice: "FREE",
    price: "FREE",
    brandLabel: "APEX EASY & classes"
    // comingSoon: true
  },
  {
    id: "neet-ug-practice",
    code: "NEET",
    learnTag: "APEX NEET UG",
    examTag: "NEET UG",
    subjectTag: "Biology / Medical",
    title: "NEET UG Chapter-Wise Practice Series (Biology, Physics, Chemistry)",
    f: "neet",
    lang: "English",
    objective: "Objective (NEET Pattern)",
    tests: 14,
    startDate: "2026-05-01",
    endDate: "2027-05-31",
    session: "2026-2027",
    desc: "Comprehensive NCERT-aligned chapter-wise practice tests for NEET UG aspirants. Features 90-question Subject-Wise Tests (SWT) with authentic NEET marking (+4 for correct, -1 for negative), Assertion-Reason, Match Lists, and detailed NCERT page reference explanations.",
    features: [
      "Strictly 100% NCERT Word-to-Word Based",
      "Standard NEET Marking (+4 Correct, -1 Negative)",
      "90 Questions Subject-Wise Tests (SWT)",
      "Assertion-Reason & Match-Column NEET Drills",
      "Detailed NCERT Explanations with Page Citations",
      "Time-Bound Exam Simulation (60 Minutes)",
      "Sectional Speed & Accuracy Analytics",
    ],
    batches: [
      {
        name: "NEET 2026-2027 Target Batch",
        start: "May 1, 2026",
        time: "12:00 AM – 11:59 PM",
        selected: true,
      },
    ],
    schedule: [
      ["Test Series for NEET - 2019 (Test - 1, Code - B)", "Mar 23, 2019", 180],
      ["SWT 01 - Biotechnology: Principles & Processes (NCERT Core - Part 1)", "May 10, 2026"],
      ["SWT 02 - Biotechnology: Principles & Processes (NCERT Core - Part 2)", "May 12, 2026"],
      ["SWT 03 - Biotechnology: Principles & Processes (NCERT Core - Part 3)", "May 15, 2026"],
      ["SWT 04 - Biotechnology: Principles & Processes (NCERT Exemplar & Advanced)", "May 18, 2026"],
      ["SWT 05 - Biotechnology: Principles & Processes (NEET PYQ & Match-List Drill)", "May 20, 2026"],
      ["SWT 06 - Biotechnology: Principles & Processes (Assertion-Reason & Statement Drill)", "May 22, 2026"],
      ["SWT 07 - Biotechnology: Principles & Processes (Diagram & High-Yield PYQs)", "May 25, 2026"],
      ["SWT 08 - Biotechnology: Principles & Processes (Rapid Speed Sprint)", "May 28, 2026"],
      ["SWT 01 - Biotechnology and Its Applications (NCERT Line-by-Line & Core Applications)", "Jun 02, 2026"],
      ["SWT 02 - Biotechnology and Its Applications (NEET Drill, Statement-Based & PYQs)", "Jun 05, 2026"],
      ["SWT 01 - Organisms and Populations (Organism & Environment, Abiotic Factors & Adaptations)", "Jun 10, 2026"],
      ["SWT 02 - Organisms and Populations (Population Attributes, Growth Models & Life History)", "Jun 14, 2026"],
      ["SWT 03 - Organisms and Populations (Population Interactions, Competition & PYQ Drill)", "Jun 18, 2026"],
    ],
    oldPrice: "₹499",
    price: "FREE",
    basePrice: 0,
    brandLabel: "APEX MEDICAL / NEET"
  },
  {
    id: "cse-gate-2027",
    code: "CSE",
    examTag: "GATE 2027",
    subjectTag: "Computer Science",
    title: "CSE-GATE PYQ Practice Series",
    f: "gate",
    lang: "English",
    objective: "Objective",
    tests: 26,
    startDate: "2026-03-15",
    endDate: "2027-02-15",
    session: "2024-2025",
    desc: "Computer Science and Engineering (CSE) previous-year GATE questions organised topic wise test and section-wise, helping aspirants from varied backgrounds pace their revision accurately.",
    features: [
      "Conventional answer-writing practice",
      "Mapped to ESE Mains syllabus",
      "Model answers for self-evaluation",
      "Time-bound mock conditions",
      "Topic-wise weightage analysis",
      "Expert evaluation guidelines",
    ],
    batches: [
      {
        name: "Batch 1",
        start: "March 15, 2026",
        time: "12:00 AM – 11:59 PM",
        selected: true,
      },
    ],
    schedule: [
      // ["Mock - 6", "Apr 10, 2026"],
      // ["Mock - 5", "Mar 14, 2026"],
      // ["Mock - 4", "Feb 10, 2026"],
      // ["Mock - 3", "Jan 12, 2026"],
    ],
    oldPrice: "₹500",
    price: "FREE",
    basePrice: 0,
    brandLabel: "APEX PYQ"
    // comingSoon: true
  },
  {
    id: "cs-gate-pyq",
    code: "CSE",
    learnTag: "MADE EASY CSE",
    examTag: "GATE 2027",
    subjectTag: "Computer Science",
    title: "CS-GATE 2027 Practice Test Series",
    f: "gate",
    lang: "English",
    objective: "Objective",
    tests: 47,
    startDate: "2026-03-01",
    endDate: "2027-02-15",
    session: "2026-2027",
    desc: "A structured, year-wise practice of the Graduate Aptitude Test in Engineering (GATE) question papers from 2000 to 2026, designed to simulate real exam conditions and sharpen problem-solving, time management and exam readiness.",
    features: [
      "Practice real GATE questions",
      "Simulate exam-like environment",
      "Analyse performance vs peers",
      "Improve speed and accuracy",
      "Strengthen concepts by application",
      "Detailed solutions for fundamentals",
    ],
    batches: [
      {
        name: "Batch 1",
        start: "July 15, 2026",
        time: "12:00 AM – 11:59 PM",
        selected: true,
      },
    ],
    schedule: [
      // ["TWT - Database-1", "Apr 30, 2026"],
      // ["TWT - Digital Logic-2", "Apr 28, 2026"],
      // ["TWT - Digital Logic-1", "Apr 24, 2026"],
      // ["FST - 7", "Mar 18, 2026"],
      // ["FST - 6", "Mar 18, 2026"],
      // ["FST - 5", "Nov 24, 2025"],
      // ["FST - 4", "Nov 23, 2025"],
      // ["FST - 3", "Nov 22, 2025"],
      // ["FST - 2", "Nov 21, 2025"],
    ],
    oldPrice: "₹1416",
    price: "₹130",
    basePrice: 130,
    brandLabel: "APEX EASY"
  },
  {
    id: "cs-gate-classes",
    code: "CSE",
    learnTag: "GO CLASSES CSE",
    examTag: "GATE 2027",
    subjectTag: "Computer Science",
    title: "CS-GATE 2027 Practice Classes Test Series",
    f: "gate",
    lang: "English",
    objective: "Objective",
    tests: 100,
    startDate: "2026-03-01",
    endDate: "2027-02-15",
    session: "2026-2027",
    desc: "A structured, year-wise practice of the Graduate Aptitude Test in Engineering (GATE) question papers from 2000 to 2026, designed to simulate real exam conditions and sharpen problem-solving, time management and exam readiness.",
    features: [
      "Practice real GATE questions",
      "Simulate exam-like environment",
      "Analyse performance vs peers",
      "Improve speed and accuracy",
      "Strengthen concepts by application",
      "Detailed solutions for fundamentals",
    ],
    batches: [
      {
        name: "Batch 1",
        start: "July 15, 2026",
        time: "12:00 AM – 11:59 PM",
        selected: true,
      },
    ],
    schedule: [
      // ["TWT - Database-1", "Apr 30, 2026"],
      // ["TWT - Digital Logic-2", "Apr 28, 2026"],
      // ["TWT - Digital Logic-1", "Apr 24, 2026"],
      // ["FST - 7", "Mar 18, 2026"],
      // ["FST - 6", "Mar 18, 2026"],
      // ["FST - 5", "Nov 24, 2025"],
      // ["FST - 4", "Nov 23, 2025"],
      // ["FST - 3", "Nov 22, 2025"],
      // ["FST - 2", "Nov 21, 2025"],
    ],
    oldPrice: "₹2600",
    price: "₹259",
    basePrice: 259,
    brandLabel: "APEX CLASSES",
    // comingSoon: true
  },
  {
    id: "weekly-cs-gate-2027",
    code: "CSE",
    learnTag: "GO WEEKLY QUIZ CSE",
    examTag: "GATE 2027",
    subjectTag: "Computer Science",
    title: "Weekly Quiz CS GATE 2027",
    f: "gate",
    lang: "English",
    objective: "Objective",
    tests: 130,
    startDate: "2025-03-15",
    endDate: "2026-02-15",
    session: "2026-2027",
    desc: "Weekly test series for GATE CSE 2026 covering all core subjects, scheduled to match the exam calendar and build cumulative topic-wise speed.",
    features: [
      "Weekly coverage of all core GATE CSE subjects",
      "Scheduled aligned with exam calendar",
      "Topic-wise cumulative testing",
      "Detailed solutions for every question",
      "Performance tracking against peers",
    ],
    batches: [
      {
        name: "Batch 1",
        start: "Sep 15, 2025",
        time: "12:00 AM – 11:59 PM",
        selected: true,
      },
    ],
    schedule: [
    ],
    oldPrice: "₹1180",
    price: "₹139",
    basePrice: 139,
    brandLabel: "Weekly Classes"
    // comingSoon: true
  },
  {
    id: "cse-dpp-2027",
    code: "CSE",
    learnTag: "Apex CLASSES DPP",
    examTag: "GATE 2027",
    subjectTag: "Computer Science",
    title: "Apex Classes CSE DPP Test Series",
    f: "gate",
    lang: "English",
    objective: "Objective",
    tests: 360,
    startDate: "2026-03-01",
    endDate: "2027-02-15",
    session: "2026-2027",
    desc: "A structured, topic-wise Daily Practice Problem (DPP) test series by GO Classes covering Computer Networks and core GATE CSE subjects, with 10 questions per test and comprehensive step-by-step solutions.",
    features: [
      "Topic-wise DPP practice with 10 questions per test",
      "Full coverage of Computer Networks topics",
      "Detailed step-by-step solutions for every question",
      "Simulate real GATE exam environment",
      "Speed, accuracy, and topic-wise analytics",
    ],
    batches: [
      {
        name: "Batch 1",
        start: "March 15, 2026",
        time: "12:00 AM – 11:59 PM",
        selected: true,
      },
    ],
    schedule: [
    ],
    oldPrice: "₹499",
    price: "₹29",
    basePrice: 29,
    brandLabel: "Apex CLASSES DPP"
  },
  {
    id: "pw-cs-gate-2026",
    code: "CSE",
    learnTag: "PW CSE",
    examTag: "GATE 2027",
    subjectTag: "Computer Science",
    title: "Wallah CS GATE 2027 Test Series",
    f: "gate",
    lang: "English",
    objective: "Objective",
    tests: 61,
    startDate: "2026-05-17",
    endDate: "2027-02-15",
    session: "2026-2027",
    desc: "Wallah test series for GATE CSE 2027 covering all core subjects, scheduled to match the exam calendar and build cumulative topic-wise speed.",
    features: [
      "Wallah coverage of all core GATE CSE subjects",
      "Scheduled aligned with exam calendar",
      "Topic-wise cumulative testing",
      "Detailed solutions for every question",
      "Performance tracking against peers",
    ],
    batches: [
      {
        name: "Batch 1",
        start: "May 17, 2026",
        time: "12:00 AM – 11:59 PM",
        selected: true,
      },
    ],
    schedule: [
    ],
    oldPrice: "₹500",
    price: "₹99",
    basePrice: 99,
    brandLabel: "APEX WALLAH"
  },
  {
    id: "pw-cs-gate",
    code: "CSE",
    learnTag: "WALLAH LEVEL UP",
    examTag: "GATE 2027",
    subjectTag: "Computer Science",
    title: "Wallah CS GATE 2027 Level UP Test Series",
    f: "gate",
    lang: "English",
    objective: "Objective",
    tests: 53,
    startDate: "2026-05-31",
    endDate: "2027-02-15",
    session: "2026-2027",
    desc: "Wallah test series for GATE CSE 2027 covering all core subjects, scheduled to match the exam calendar and build cumulative topic-wise speed.",
    features: [
      "Wallah coverage of all core GATE CSE subjects",
      "Scheduled aligned with exam calendar",
      "Topic-wise cumulative testing",
      "Detailed solutions for every question",
      "Performance tracking against peers",
    ],
    batches: [
      {
        name: "Batch 1",
        start: "May 17, 2026",
        time: "12:00 AM – 11:59 PM",
        selected: true,
      },
    ],
    schedule: [
    ],
    oldPrice: "₹500",
    price: "₹99",
    basePrice: 99,
    brandLabel: "APEX WALLAH"
  },
  {
    id: "cse-gate-2026-pyq",
    code: "CSE",
    examTag: "GATE 2026",
    subjectTag: "Computer Science",
    title: "CSE-GATE 2026 Practice Test Series",
    f: "gate",
    lang: "English",
    objective: "Objective",
    tests: 47,
    startDate: "2026-03-07",
    endDate: "2027-02-15",
    session: "2025-2026",
    desc: "Year-wise GATE Computer Science papers from 2000 to 2026 reframed as timed practice tests, built to mirror real exam pressure and surface weak topics early.",
    features: [
      "Practice real GATE questions",
      "Simulate exam-like environment",
      "Analyse performance vs peers",
      "Improve speed and accuracy",
      "Strengthen concepts by application",
      "Detailed solutions for fundamentals",
    ],
    batches: [
      {
        name: "Batch 1",
        start: "March 07, 2026",
        time: "12:00 AM – 11:59 PM",
        selected: true,
      },
    ],
    schedule: [],
    oldPrice: "₹500",
    price: "₹104",
    basePrice: 104,
    brandLabel: "APEX EASY"
    // comingSoon: true
  },
  {
    id: "ece-gate-pyq", // <-- Ye ID sabse zaroori hai!
    code: "ECE",
    examTag: "GATE 2026",
    subjectTag: "Electronics & Communication",
    title: "ECE-GATE 2026 Practice Test Series",
    f: "gate",
    lang: "English",
    objective: "Objective",
    tests: 44, // Aapke according tests ki ginti
    startDate: "2026-03-07",
    endDate: "2027-02-15",
    session: "2025-2026",
    desc: "A structured, year-wise practice of the Graduate Aptitude Test in Engineering (GATE) ECE question papers from 2000 to 2026.",
    features: [
      "Practice real GATE ECE questions",
      "Simulate exam-like environment",
      "Analyse performance vs peers",
      "Improve speed and accuracy",
      "Strengthen concepts by application",
      "Detailed solutions for fundamentals",
    ],
    batches: [
      {
        name: "Batch 1",
        start: "March 07, 2026",
        time: "12:00 AM – 11:59 PM",
        selected: true,
      },
    ],
    schedule: [],
    oldPrice: "₹500",
    price: "₹94",
    basePrice: 94,
    brandLabel: "APEX EASY"
  },
  {
    id: "ece-gate-pyq-2025", // <-- Ye ID sabse zaroori hai!
    code: "ECE",
    examTag: "GATE 2025",
    subjectTag: "Electronics & Communication",
    title: "ECE-GATE 2025 Practice Test Series",
    f: "gate",
    lang: "English",
    objective: "Objective",
    tests: 47, // Aapke according tests ki ginti
    startDate: "2026-03-07",
    endDate: "2027-02-15",
    session: "2024-2025",
    desc: "A structured, year-wise practice of the Graduate Aptitude Test in Engineering (GATE) ECE question papers from 2000 to 2026.",
    features: [
      "Practice real GATE ECE questions",
      "Simulate exam-like environment",
      "Analyse performance vs peers",
      "Improve speed and accuracy",
      "Strengthen concepts by application",
      "Detailed solutions for fundamentals",
    ],
    batches: [
      {
        name: "Batch 1",
        start: "March 07, 2026",
        time: "12:00 AM – 11:59 PM",
        selected: true,
      },
    ],
    schedule: [],
    oldPrice: "₹500",
    price: "₹94",
    basePrice: 94,
    brandLabel: "APEX EASY"
  },
  {
    id: "ee-gate-pyq-2027",
    code: "EE",
    examTag: "GATE 2027",
    subjectTag: "Electrical Engineering",
    title: "EE-GATE 2027 Practice Test Series",
    f: "gate",
    lang: "English",
    objective: "Objective",
    tests: 44,
    startDate: "2026-03-07",
    endDate: "2027-02-15",
    session: "2025-2026",
    desc: "Year-wise GATE Electrical Engineering papers from 2000 to 2026 reframed as timed practice tests, built to mirror real exam pressure and surface weak topics early.",
    features: [
      "Practice real GATE questions",
      "Simulate exam-like environment",
      "Analyse performance vs peers",
      "Improve speed and accuracy",
      "Strengthen concepts by application",
      "Detailed solutions for fundamentals",
    ],
    batches: [
      {
        name: "Batch 1",
        start: "March 07, 2026",
        time: "12:00 AM – 11:59 PM",
        selected: true,
      },
    ],
    schedule: [],
    oldPrice: "₹1400",
    price: "₹130",
    basePrice: 130,
    brandLabel: "APEX EASY"
    // comingSoon: true
  },
  {
    id: "ee-gate-pyq",
    code: "EE",
    examTag: "GATE 2026",
    subjectTag: "Electrical Engineering",
    title: "EE-GATE 2026 Practice Test Series",
    f: "gate",
    lang: "English",
    objective: "Objective",
    tests: 47,
    startDate: "2026-03-07",
    endDate: "2027-02-15",
    session: "2025-2026",
    desc: "Year-wise GATE Electrical Engineering papers from 2000 to 2026 reframed as timed practice tests, built to mirror real exam pressure and surface weak topics early.",
    features: [
      "Practice real GATE questions",
      "Simulate exam-like environment",
      "Analyse performance vs peers",
      "Improve speed and accuracy",
      "Strengthen concepts by application",
      "Detailed solutions for fundamentals",
    ],
    batches: [
      {
        name: "Batch 1",
        start: "March 07, 2026",
        time: "12:00 AM – 11:59 PM",
        selected: true,
      },
    ],
    schedule: [],
    oldPrice: "₹500",
    price: "₹94",
    basePrice: 94,
    brandLabel: "APEX EASY"
    // comingSoon: true
  },
  {
    id: "ee-gate-ace-2026",
    code: "EE",
    examTag: "GATE 2026",
    subjectTag: "Electrical Engineering",
    title: "EE-GATE 2026 Practice Test Series",
    f: "gate",
    lang: "English",
    objective: "Objective",
    tests: 56,
    startDate: "2026-03-07",
    endDate: "2027-02-15",
    session: "2026-2027",
    desc: "Year-wise GATE Electrical Engineering papers from 2000 to 2026 reframed as timed practice tests, built to mirror real exam pressure and surface weak topics early.",
    features: [
      "Practice real GATE questions",
      "Simulate exam-like environment",
      "Analyse performance vs peers",
      "Improve speed and accuracy",
      "Strengthen concepts by application",
      "Detailed solutions for fundamentals",
    ],
    batches: [
      {
        name: "Batch 1",
        start: "March 07, 2026",
        time: "12:00 AM – 11:59 PM",
        selected: true,
      },
    ],
    schedule: [],
    oldPrice: "₹500",
    price: "₹94",
    basePrice: 94,
    brandLabel: "APEX ACE"
    // comingSoon: true
  },
  {
    id: "ee-gate-pyq-2025",
    code: "EE",
    examTag: "GATE 2025",
    subjectTag: "Electrical Engineering",
    title: "EE-GATE 2025 Practice Test Series",
    f: "gate",
    lang: "English",
    objective: "Objective",
    tests: 47,
    startDate: "2025-03-07",
    endDate: "2027-02-15",
    session: "2024-2025",
    desc: "Year-wise GATE Electrical Engineering papers from 2000 to 2026 reframed as timed practice tests, built to mirror real exam pressure and surface weak topics early.",
    features: [
      "Practice real GATE questions",
      "Simulate exam-like environment",
      "Analyse performance vs peers",
      "Improve speed and accuracy",
      "Strengthen concepts by application",
      "Detailed solutions for fundamentals",
    ],
    batches: [
      {
        name: "Batch 1",
        start: "March 07, 2026",
        time: "12:00 AM – 11:59 PM",
        selected: true,
      },
    ],
    schedule: [],
    oldPrice: "₹500",
    price: "₹94",
    basePrice: 94,
    brandLabel: "APEX EASY"
    // comingSoon: true
  },

  {
    id: "ce-gate-pyq",
    code: "CE",
    examTag: "GATE 2026",
    subjectTag: "Civil Engineering",
    title: "CE-GATE 2026 Practice Test Series",
    f: "gate",
    lang: "English",
    objective: "Objective",
    tests: 47,
    startDate: "2026-03-15",
    endDate: "2027-02-15",
    session: "2025-2026",
    desc: "A complete bank of Civil Engineering GATE previous-year papers, sequenced to build exam stamina and concept recall over a structured 4-month window.",
    features: [
      "Practice real GATE questions",
      "Simulate exam-like environment",
      "Analyse performance vs peers",
      "Improve speed and accuracy",
      "Strengthen concepts by application",
      "Detailed solutions for fundamentals",
    ],
    batches: [
      {
        name: "Batch 1",
        start: "March 15, 2026",
        time: "12:00 AM – 11:59 PM",
        selected: true,
      },
    ],
    schedule: [
      // ["FST - 5", "Mar 18, 2026"],
      // ["FST - 4", "Nov 24, 2025"],
      // ["FST - 3", "Nov 23, 2025"],
      // ["FST - 2", "Nov 22, 2025"],
      // ["FST - 1", "Nov 21, 2025"],
    ],
    oldPrice: "₹500",
    price: "₹94",
    basePrice: 94,
    brandLabel: "APEX EASY"
    // comingSoon: true
  },
  {
    id: "ce-ese-2026",
    code: "CE",
    examTag: "ESE 2026",
    subjectTag: "Civil Engineering",
    title: "CE-ESE 2026 Practice Test Series",
    f: "ese",
    lang: "English",
    objective: "Objective",
    tests: 34,
    startDate: "2026-03-15",
    endDate: "2027-02-15",
    session: "2025-2026",
    desc: "A complete bank of Civil Engineering ESE previous-year papers, sequenced to build exam stamina and concept recall over a structured 4-month window.",
    features: [
      "Practice real ESE questions",
      "Simulate exam-like environment",
      "Analyse performance vs peers",
      "Improve speed and accuracy",
      "Strengthen concepts by application",
      "Detailed solutions for fundamentals",
    ],
    batches: [
      {
        name: "Batch 1",
        start: "March 15, 2026",
        time: "12:00 AM – 11:59 PM",
        selected: true,
      },
    ],
    schedule: [
      // ["FST - 5", "Mar 18, 2026"],
      // ["FST - 4", "Nov 24, 2025"],
      // ["FST - 3", "Nov 23, 2025"],
      // ["FST - 2", "Nov 22, 2025"],
      // ["FST - 1", "Nov 21, 2025"],
    ],
    oldPrice: "₹500",
    price: "₹94",
    basePrice: 94,
    brandLabel: "APEX EASY"
    // comingSoon: true
  },
  {
    id: "da-gate-pyq",
    code: "DA",
    examTag: "GATE 2026",
    subjectTag: "DATA SCIENCE AND ARTIFICIAL INTELLIGENCE",
    title: "DA-GATE 2026 Practice Test Series",
    f: "gate",
    lang: "English",
    objective: "Objective",
    tests: 47,
    startDate: "2026-03-15",
    endDate: "2027-02-15",
    session: "2025-2026",
    desc: "DATA SCIENCE AND ARTIFICIAL INTELLIGENCE (DA) previous-year GATE questions organised section-wise, helping aspirants from varied backgrounds pace their revision accurately.",
    features: [
      "Practice real GATE questions",
      "Simulate exam-like environment",
      "Analyse performance vs peers",
      "Improve speed and accuracy",
      "Strengthen concepts by application",
      "Detailed solutions for fundamentals",
    ],
    batches: [
      {
        name: "Batch 1",
        start: "Oct 15, 2025",
        time: "12:00 AM – 11:59 PM",
        selected: true,
      },
    ],
    schedule: [
      // ["FST - 4", "Mar 18, 2026"],
      // ["FST - 3", "Nov 24, 2025"],
      // ["FST - 2", "Nov 23, 2025"],
      // ["FST - 1", "Nov 22, 2025"],
    ],
    oldPrice: "₹500",
    price: "₹94",
    basePrice: 94,
    brandLabel: "APEX EASY"
    // comingSoon: true
  },
  {
    id: "da-gate-pyq-2025",
    code: "DA",
    examTag: "GATE 2025",
    subjectTag: "DATA SCIENCE AND ARTIFICIAL INTELLIGENCE",
    title: "DA-GATE 2025 Practice Test Series",
    f: "gate",
    lang: "English",
    objective: "Objective",
    tests: 47,
    startDate: "2026-03-15",
    endDate: "2027-02-15",
    session: "2024-2025",
    desc: "DATA SCIENCE AND ARTIFICIAL INTELLIGENCE (DA) previous-year GATE questions organised section-wise, helping aspirants from varied backgrounds pace their revision accurately.",
    features: [
      "Practice real GATE questions",
      "Simulate exam-like environment",
      "Analyse performance vs peers",
      "Improve speed and accuracy",
      "Strengthen concepts by application",
      "Detailed solutions for fundamentals",
    ],
    batches: [
      {
        name: "Batch 1",
        start: "March 15, 2026",
        time: "12:00 AM – 11:59 PM",
        selected: true,
      },
    ],
    schedule: [
      // ["FST - 4", "Mar 18, 2026"],
      // ["FST - 3", "Nov 24, 2025"],
      // ["FST - 2", "Nov 23, 2025"],
      // ["FST - 1", "Nov 22, 2025"],
    ],
    oldPrice: "₹500",
    price: "₹94",
    basePrice: 94,
    brandLabel: "APEX EASY"
    // comingSoon: true
  },
  {
    id: "me-gate-pyq",
    code: "ME",
    examTag: "GATE 2026",
    subjectTag: "Mechanical Engineering",
    title: "ME-GATE 2026 Practice Test Series",
    f: "gate",
    lang: "English",
    objective: "Objective",
    tests: 47,
    startDate: "2026-03-15",
    endDate: "2027-02-15",
    session: "2025-2026",
    desc: " Mechanical Engineering (ME) previous-year GATE questions organised section-wise, helping aspirants from varied backgrounds pace their revision accurately.",
    features: [
      "Conventional answer-writing practice",
      "Mapped to ESE Mains syllabus",
      "Model answers for self-evaluation",
      "Time-bound mock conditions",
      "Topic-wise weightage analysis",
      "Expert evaluation guidelines",
    ],
    batches: [
      {
        name: "Batch 1",
        start: "March 15, 2026",
        time: "12:00 AM – 11:59 PM",
        selected: true,
      },
    ],
    schedule: [
      // ["Mock - 6", "Apr 10, 2026"],
      // ["Mock - 5", "Mar 14, 2026"],
      // ["Mock - 4", "Feb 10, 2026"],
      // ["Mock - 3", "Jan 12, 2026"],
    ],
    oldPrice: "₹500",
    price: "₹94",
    basePrice: 94,
    brandLabel: "APEX EASY"
    // comingSoon: true
  },
  {
    id: "me-gate-pyq-2025",
    code: "ME",
    examTag: "GATE 2025",
    subjectTag: "Mechanical Engineering",
    title: "ME-GATE 2025 Practice Test Series",
    f: "gate",
    lang: "English",
    objective: "Objective",
    tests: 47,
    startDate: "2026-03-15",
    endDate: "2027-02-15",
    session: "2024-2025",
    desc: " Mechanical Engineering (ME) previous-year GATE questions organised section-wise, helping aspirants from varied backgrounds pace their revision accurately.",
    features: [
      "Conventional answer-writing practice",
      "Mapped to ESE Mains syllabus",
      "Model answers for self-evaluation",
      "Time-bound mock conditions",
      "Topic-wise weightage analysis",
      "Expert evaluation guidelines",
    ],
    batches: [
      {
        name: "Batch 1",
        start: "March 15, 2026",
        time: "12:00 AM – 11:59 PM",
        selected: true,
      },
    ],
    schedule: [
      // ["Mock - 6", "Apr 10, 2026"],
      // ["Mock - 5", "Mar 14, 2026"],
      // ["Mock - 4", "Feb 10, 2026"],
      // ["Mock - 3", "Jan 12, 2026"],
    ],
    oldPrice: "₹500",
    price: "₹94",
    basePrice: 94,
    brandLabel: "APEX EASY"
    // comingSoon: true
  },
];

const tsGrid = document.getElementById("tsGrid");
function renderTS(filter, query) {
  filter = filter || "all";
  query = (query || "").toLowerCase();
  tsGrid.innerHTML = "";
  testSeries
    .filter((t) => {
      if (filter === "all") return true;
      if (filter === "ce-ese") return t.code === "CE" && t.f === "ese";
      if (filter === "ce") return t.code === "CE" && t.f !== "ese";
      return t.code && t.code.toLowerCase() === filter;
    })
    .filter(
      (t) =>
        t.title.toLowerCase().includes(query) ||
        t.subjectTag.toLowerCase().includes(query),
    )
    .forEach((t) => {
      const el = document.createElement("div");
      el.className = t.code === "NEET" ? "ts-card ts-card-neet" : "ts-card";
      if (!t.comingSoon) {
        el.onclick = () => openDetail(t.id);
      } else {
        el.classList.add("coming-soon");
      }
      const bannerClass = t.code === "NEET" ? "ts-banner ts-banner-neet" : "ts-banner";
      el.innerHTML = `
          ${t.comingSoon ? '<div class="coming-soon-overlay">Coming Soon</div>' : ''}
          <span class="card-corner tl"></span><span class="card-corner br"></span>
          <div class="${bannerClass}"><div class="ts-banner-grid"></div>
            <div class="ts-code">${t.code}</div>
            <div class="ts-online">Online</div>
            <div class="ts-banner-text">
              <div class="ts-banner-main">Exam Practice<br>Test Series</div>
              <div class="apex-easy-brand">✨ ${t.brandLabel || "APEX EASY"}</div>
            </div>
          </div>
          <div class="ts-body">
            <div class="ts-tags"><span class="ts-tag exam ${t.code === 'NEET' ? 'neet-badge' : ''}">${t.examTag}</span><span class="ts-tag subject">${t.subjectTag}</span></div>
            <div class="ts-title">${t.title}</div>
            <div class="ts-meta-tags"><span class="ts-meta-tag">${t.lang}</span><span class="ts-meta-tag">${t.objective}</span></div>
            <div class="ts-footer"><span>Start Date: <b>${formatDate(t.startDate)}</b></span><span>Tests: <b>${t.tests}</b></span></div>
          </div>`;
      tsGrid.appendChild(el);
    });
}
function formatDate(iso) {
  const d = new Date(iso + "T00:00:00");
  const dd = String(d.getDate()).padStart(2, "0"),
    mm = String(d.getMonth() + 1).padStart(2, "0"),
    yy = String(d.getFullYear()).slice(-2);
  return `${dd}-${mm}-${yy}`;
}
renderTS("all", "");
document.getElementById("filterTabsList").addEventListener("click", (e) => {
  if (!e.target.classList.contains("tab")) return;
  document
    .querySelectorAll("#filterTabsList .tab")
    .forEach((t) => t.classList.remove("active"));
  e.target.classList.add("active");
  renderTS(e.target.dataset.f, document.getElementById("tsSearch").value);
});
document.getElementById("tsSearch").addEventListener("input", (e) => {
  const activeF = document.querySelector("#filterTabsList .tab.active").dataset
    .f;
  renderTS(activeF, e.target.value);
});
function resetFilters() {
  document
    .querySelectorAll("#filterTabsList .tab")
    .forEach((t) => t.classList.remove("active"));
  document
    .querySelector('#filterTabsList .tab[data-f="all"]')
    .classList.add("active");
  document.getElementById("tsSearch").value = "";
  document
    .querySelectorAll(".filter-opt input")
    .forEach((c) => (c.checked = false));
  renderTS("all", "");
}

/* filter accordion toggles */
document.querySelectorAll(".filter-row").forEach((row) => {
  row
    .querySelector(".filter-row-head")
    .addEventListener("click", () => row.classList.toggle("open"));
});

/* ---------- detail view ---------- */
const checkIcon =
  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>';
const calIcon =
  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>';
const clockIcon =
  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/></svg>';

let currentDetailId = null;
function openDetail(id, pushHistory = true) {
  const t = testSeries.find((x) => x.id === id);
  if (!t) return;
  currentDetailId = id;
  document.getElementById("dCrumbTitle").textContent = t.title;
  document.getElementById("dTitle").textContent = t.title;
  document.getElementById("dInfoTitle").textContent = t.title;
  document.getElementById("dDesc").textContent = t.desc;
  document.getElementById("dSession").textContent = "Session: " + t.session;
  document.getElementById("dTests").textContent = t.tests;
  document.getElementById("dStart").textContent = formatDate(t.startDate);
  document.getElementById("dEnd").textContent = formatDate(t.endDate);
  document.getElementById("dLang").textContent = t.lang;
  document.getElementById("dPrice").textContent = t.price;
  const dOldPrice = document.getElementById("dOldPrice");
  if (dOldPrice) {
    if (t.oldPrice) {
      dOldPrice.textContent = t.oldPrice;
      dOldPrice.style.display = "inline-block";
    } else {
      dOldPrice.style.display = "none";
    }
  }
  document.getElementById("dBatchLabel").textContent = t.batches[0].name;

  document.getElementById("dTags").innerHTML =
    `<span class="ts-tag" style="background:rgba(15,42,67,0.06);color:var(--ink)">${t.objective}</span>
       <span class="ts-tag exam">${t.examTag}</span>
       <span class="ts-tag subject">${t.subjectTag}</span>`;

  const dBannerEl = document.getElementById("dBanner");
  if (t.code === "NEET") {
    dBannerEl.classList.add("detail-banner-neet");
  } else {
    dBannerEl.classList.remove("detail-banner-neet");
  }
  dBannerEl.innerHTML = `
      <div class="detail-banner-code">${t.code}</div>
      <div class="detail-banner-online">Online</div>
      <div class="detail-banner-text">
        <div class="detail-banner-main">Exam Practice<br>Test Series</div>
        <div class="apex-easy-brand">✨ ${t.brandLabel || "APEX EASY"}</div>
      </div>`;

  document.getElementById("dFeatures").innerHTML = t.features
    .map(
      (f) => `
      <div class="feature-chip"><span class="feature-check">${checkIcon}</span>${f}</div>`,
    )
    .join("");

  document.getElementById("dBatches").innerHTML = t.batches
    .map(
      (b) => `
      <div class="batch-card ${b.selected ? "selected" : ""}">
        <div class="batch-name"><span class="batch-check">${b.selected ? checkIcon : ""}</span>${b.name}</div>
        <div class="batch-row">${calIcon}<span>Start Date: <b>${b.start}</b></span></div>
        <div class="batch-row">${clockIcon}<span>Batch Time: <b>${b.time}</b></span></div>
      </div>`,
    )
    .join("");

  const dSchedule = document.getElementById("dSchedule");
  if (id === "cse-gate-2027" || id === "cs-gate-pyq" || id === "ee-gate-pyq-2027" || id === "ee-gate-ace-2026" || id === "pw-cs-gate-2026" || id === "pw-cs-gate" || id === "neet-ug-practice" || id === "cse-dpp-2027") {
    const enrolled = (window.isEnrolledSeries && window.isEnrolledSeries(id)) || false;
    if (dSchedule) {
      dSchedule.classList.add("pyq-full-width");
      dSchedule.style.display = "block";
      dSchedule.style.width = "100%";
      dSchedule.innerHTML = window.renderPYQAccordion ? window.renderPYQAccordion(enrolled, "all", id) : "";
    }
  } else {
    if (dSchedule) {
      dSchedule.classList.remove("pyq-full-width");
      dSchedule.style.display = "";
      dSchedule.style.width = "";
      dSchedule.innerHTML = t.schedule
        .map(
          (s) => `
          <div class="schedule-card">
            <div class="schedule-icon">${calIcon}</div>
            <div><div class="schedule-name">${s[0]}</div><div class="schedule-date">Date: ${s[1]}</div></div>
          </div>`,
        )
        .join("");
    }
  }

  // Smart Enroll Bar State
  const isEnrolledNow = (window.isEnrolledSeries && window.isEnrolledSeries(id)) || id === "neet-ug-practice";
  const btnEnrollEl = document.querySelector(".btn-enroll");
  if (btnEnrollEl) {
    if (isEnrolledNow) {
      btnEnrollEl.textContent = "Start Practicing";
      btnEnrollEl.onclick = () => {
        const sched = document.getElementById("dSchedule");
        if (sched) sched.scrollIntoView({ behavior: "smooth", block: "start" });
      };
    } else {
      btnEnrollEl.textContent = "Enroll Now";
      btnEnrollEl.onclick = () => handleEnroll();
    }
  }

  showView("detail", false);
  if (pushHistory) {
    history.pushState({ view: "detail", param: id }, "", "");
  }
}

// Bookmark Logic
function renderBookmarks() {
  const container = document.getElementById("bookmarkContainer");
  const filterSelect = document.getElementById("bookmarkSubjectFilter");

  if (!container || !filterSelect) return;

  const filter = filterSelect.value;
  container.innerHTML = "";

  let bookmarks = JSON.parse(localStorage.getItem("apex_bookmarks") || "{}");
  let items = Object.entries(bookmarks).map(([key, val]) => ({ key, ...val }));

  if (filter !== "All") {
    items = items.filter(b => b.subject === filter);
  }

  if (items.length === 0) {
    container.innerHTML = `<div style="padding: 20px; text-align: center; color: #64748b;">No saved questions found.</div>`;
    return;
  }

  items.reverse().forEach(b => {
    const el = document.createElement("div");
    el.style.border = "1px solid #e2e8f0";
    el.style.borderRadius = "6px";
    el.style.padding = "15px";
    el.style.background = "#f8fafc";

    el.innerHTML = `
      <div style="font-size: 12px; color: #64748b; margin-bottom: 8px; text-transform: uppercase; font-weight: bold; display: flex; justify-content: space-between;">
        <span>${b.subject} &bull; Bookmarked on ${b.date || "Unknown Date"}</span>
        <span style="color: #3b82f6;">${b.testId} (Q${(b.qIndex !== undefined ? Number(b.qIndex) + 1 : "Unknown")})</span>
      </div>
      <div style="font-size: 15px; color: #334155; line-height: 1.5; margin-bottom: 12px;">${b.text}</div>
      <div style="display: flex; gap: 12px; align-items: center;">
        <button onclick="viewBookmark('${b.testId}', ${(b.qIndex !== undefined ? Number(b.qIndex) + 1 : 0)})" style="background: #3b82f6; border: none; color: #fff; font-size: 13px; font-weight: 500; cursor: pointer; padding: 6px 12px; border-radius: 4px;">
          View Full Question
        </button>
        <button onclick="removeBookmark('${b.key}')" style="background: none; border: none; color: #ef4444; font-size: 13px; font-weight: 500; cursor: pointer; padding: 6px 0;">
          Remove Bookmark
        </button>
      </div>
    `;
    container.appendChild(el);
  });
}

function removeBookmark(key) {
  let bookmarks = JSON.parse(localStorage.getItem("apex_bookmarks") || "{}");
  if (bookmarks[key]) {
    const qIndex = bookmarks[key].qIndex;
    const testId = bookmarks[key].testId;
    delete bookmarks[key];
    localStorage.setItem("apex_bookmarks", JSON.stringify(bookmarks));

    // Update cloudBookmarks if in exam.js context
    if (typeof cloudBookmarks !== 'undefined') {
      delete cloudBookmarks[key];
    }

    renderBookmarks();

    const token = localStorage.getItem('apexcore_token');
    if (token) {
      fetch('/api/sync/bookmark', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
        body: JSON.stringify({ testId, qKey: key, qIndex: qIndex, isBookmarked: false })
      }).catch(e => console.error("Bookmark sync error:", e));
    }
  }
}

async function viewBookmark(testId, qIndex) {
  try {
    const testKey = window.findMatchingTest ? window.findMatchingTest(testId) : null;
    let questions = [];

    if (testKey && window.testBackendIdMap) {
      const backendTestId = window.testBackendIdMap[testKey];
      if (window.testMap && window.testMap[backendTestId]) {
        questions = window.testMap[backendTestId];
      }
    }

    if (!questions || questions.length === 0) {
      alert("Error: Test data not found in local memory. You may need to load the test series first.");
      return;
    }

    const q = questions[qIndex - 1];
    if (!q) {
      alert("Error: Question not found.");
      return;
    }

    document.getElementById("bookmarkModalMeta").textContent = testId + " - Question No. " + qIndex;
    document.getElementById("bookmarkModalQText").innerHTML = q.text;

    const optContainer = document.getElementById("bookmarkModalOptions");
    optContainer.innerHTML = "";
    if (q.options && q.options.length > 0) {
      q.options.forEach((opt, idx) => {
        const d = document.createElement("div");
        d.style.padding = "10px 14px";
        d.style.border = "1px solid #e2e8f0";
        d.style.borderRadius = "4px";
        d.style.background = "#fff";
        d.innerHTML = `<strong>${String.fromCharCode(65 + idx)}.</strong> ${opt}`;
        optContainer.appendChild(d);
      });
    }

    const correctContainer = document.getElementById("bookmarkModalCorrect");
    if (q.correct !== undefined) {
      correctContainer.style.display = "block";
      if (q.type === "MSQ") {
        const corrArr = Array.isArray(q.correct) ? q.correct : [q.correct];
        const letters = corrArr.map(c => String.fromCharCode(65 + parseInt(c))).join(", ");
        correctContainer.innerHTML = `<strong>Correct Answer:</strong> ${letters}`;
      } else if (q.type === "NAT") {
        const rng = Array.isArray(q.correct) ? q.correct : [q.correct];
        correctContainer.innerHTML = `<strong>Correct Answer:</strong> ${rng.join(" to ")}`;
      } else {
        correctContainer.innerHTML = `<strong>Correct Answer:</strong> ${String.fromCharCode(65 + parseInt(q.correct))}`;
      }
    } else {
      correctContainer.style.display = "none";
    }

    const solContainer = document.getElementById("bookmarkModalSolution");
    const solutionText = q.sol || q.solution;
    if (solutionText) {
      solContainer.style.display = "block";
      document.getElementById("bookmarkModalSolutionContent").innerHTML = solutionText;
    } else {
      solContainer.style.display = "none";
    }

    document.getElementById("bookmarkDetailModal").style.display = "flex";

    if (window.MathJax && window.MathJax.typesetPromise) {
      const targets = [
        document.getElementById("bookmarkModalQText"),
        document.getElementById("bookmarkModalOptions"),
        document.getElementById("bookmarkModalSolutionContent")
      ].filter(Boolean);
      if (window.MathJax.typesetClear) {
        try { window.MathJax.typesetClear(targets); } catch (e) { }
      }
      if (window.MathJax.startup && window.MathJax.startup.promise) {
        window.MathJax.startup.promise = window.MathJax.startup.promise
          .then(() => window.MathJax.typesetPromise(targets))
          .catch(err => console.error("MathJax typeset failed:", err));
      } else {
        window.MathJax.typesetPromise(targets).catch(err => console.error("MathJax typeset failed:", err));
      }
    }
  } catch (err) {
    console.error(err);
    alert("Error loading question details.");
  }
}

/* ==========================================================================
   GoClasses-Style Subject-Wise PYQ Accordion Engine (CSE-GATE PYQ Practice Series)
   ========================================================================== */

window.PYQ_TOPIC_MAP = {
  // C Programming
  "Loops-I": "Loops, While, For, Do-While, Nested Loops",
  "Functions-I": "Functions, Parameter Passing, Call by Value/Reference",
  "Functions-II": "Function Scope, Lifetime, Static Variables, Linkage",
  "Functions-III": "Recursion, Direct & Indirect Recursion, Base Cases",
  "Functions-IV": "Advanced Recursion, Tree Recursion, Tail Call Optimization",
  "Functions-V": "Standard Library Functions, Return Types, Prototypes",
  "Functions-VI": "Function Pointers, Callbacks, Arrays of Function Pointers",
  "Functions-VII": "Inline Functions, Preprocessor Macros vs Functions",
  "Array and Pointer-I": "1D Arrays, Pointer Basics, Dereferencing, Indexing",
  "Array and Pointer-II": "2D Arrays, Pointer Arithmetic, Array of Pointers",
  "Array and Pointer-III": "Pointers to Pointers, Dynamic Memory Allocation (malloc, free)",
  "Array and Pointer-IV": "Strings, Char Arrays, Pointer Manipulations, String Lib",
  "Conditional Statements": "If-Else, Switch Case, Ternary Operator, Branching",
  "Airthmetic Operator": "Arithmetic & Bitwise Operators, Precedence, Associativity",

  // Operating System
  "Process-I": "Process Concept, States, PCB, Process Creation (fork, exec)",
  "Process-II": "Process Synchronization Basics, IPC, Critical Section Problem",
  "CPU Scheduling-I": "FCFS, SJF, SRTF, Non-preemptive & Preemptive Scheduling",
  "CPU Scheduling-II": "Round Robin Scheduling, Time Quantum, SRTF, Preemptive Scheduling, Real-time Tasks",
  "CPU Scheduling-III": "Scheduling Criteria, Turnaround Time, Waiting Time, Response Time, Priority Scheduling",
  "CPU Scheduling-IV": "Multilevel Feedback Queues, Aging, Context Switching, Preemptive vs Non-Preemptive",
  "CPU Scheduling-V": "Priority Scheduling, Optimal Non-preemptive Scheduling, Time Quantum Bounds, Throughput",
  "Process Synchronization-I": "Binary Semaphores, Shared Variables, Critical Section, Producer-Consumer, Concurrency Anomalies",
  "Process Synchronization-II": "Counting Semaphores, Mutual Exclusion, Progress, Bounded Waiting, Hardware Instructions (Test-and-Set)",
  "Process Synchronization-III": "Monitors, Bounded Buffer, Readers-Writers Problem, Barrier Synchronization, Fetch-and-Set",
  "Process Synchronization-IV": "Peterson's Algorithm, Starvation, Race Conditions, Mutex Locks, Synchronization Constraints",
  "Deadlock-I": "Deadlock Necessary Conditions, Resource Allocation Graph, Safe State, Banker's Algorithm",
  "Deadlock-II": "Deadlock Prevention, Deadlock Avoidance, Safe Sequence Calculation, Resource Claim Matrix",
  "Deadlock-III": "Dining Philosophers Problem, Deadlock-free Resource Conditions, Resource Preemption, Rollback",

  // Data Structures
  "Array-I": "1D and Bitonic Arrays, Array Operations, Searching, Complexity",
  "Array-II": "Matrix Representation, Array Bounds, Searching, Sorting & Inversions",

  // Algorithms
  "Asymptotic Notation-I": "Big-O, Omega, Theta Notations, Growth of Functions",
  "Asymptotic Notation-II": "Properties of Asymptotic Notations, Function Comparisons",
  "Asymptotic Notation-III": "Worst Case, Average Case, Best Case Complexity Analysis",
  "Recurrence Relation-I": "Substitution Method, Master Theorem Basics",
  "Recurrence Relation-II": "Recursion Tree Method, Advanced Master Theorem Cases",


  // Made Easy CS Tests
  "Digital logic-1": "Boolean Algebra, Minimization, K-Maps, Logic Gates",
  "Digital logic-2": "Combinational & Sequential Circuits, Flip-Flops, Counters, Mux",
  "Digital logic": "Complete Digital Logic Syllabus",

  "Database-1": "ER-Model, Relational Model, Relational Algebra, SQL",
  "Database-2": "Normalization, Transactions, Concurrency Control, B/B+ Trees",
  "Database": "Complete DBMS Syllabus",
  "ER Model-I": "Entity-Relationship Model, Entity Sets, Attributes, Relationship Sets, Constraints",

  "Theory of computation-1": "Regular Languages, Finite Automata, DFA, NFA, RegEx",
  "Theory of computation-2": "Context-Free Languages, PDA, Turing Machines, Decidability",
  "Theory of computation": "Complete Theory of Computation Syllabus",
  "Finite Automata-I": "DFA/NFA Minimization, State Distinguishability, Modulo Languages, Mealy & Moore",
  "Finite Automata-II": "Extended Transitions, DFA Intersection, Substring & Suffix DFAs, FSM State Bounds",
  "Finite Automata-III": "Myhill-Nerode Minimization, Complementation, Expressive Power Hierarchy, Substring NFAs",
  "Finite Automata-IV": "NFA to DFA State Bounds, Product Automata, Regular Grammars, 2's Complement FSM",
  "Finite Automata-V": "NFA Acceptance & Complementation, State Minimization, Sequential FSMs & Homers",
  "Regular Expression-I": "Regular Expressions, Language Equivalence, NFA/DFA to Regular Expression, Binary Patterns",
  "Regular Expression-II": "Equivalence & Identities of Regular Expressions, Subset Relations, NFA/DFA Conversions",
  "Regular Language-I": "Closure Properties, Language Identification, Minimal DFA State Bounds, Pumping Lemma, Prefix & Suffix Closures",
  "Regular Language-II": "Count Constraints, Concatenation vs Cross Product, String Membership in L*, Myhill-Nerode & Pumping Length",
  "Context Free Grammar-I": "CFL Constraints, Ambiguity & Derivations, Parsing Comparisons (LL, SLR, LALR, CLR), GOTO Items & CNF Steps",
  "Context Free Grammar-II": "Eliminating Left Recursion, FOLLOW Sets, Grammar Equivalence, Ambiguity & Chomsky Hierarchy",
  "Context Free Grammar-III": "Operator Grammars, Decidable Problems for FSM & CFG, Inherent Ambiguity, PDA vs DPDA",
  "Context Free Language-I": "CFL & DCFL Identification, Closure Properties, Decidability of CFLs, Intersection with Regular Languages",

  "computer organization and architecture-1": "Machine Instructions, Addressing Modes, ALU, Data Path",
  "computer organization and architecture-2": "Instruction Pipelining, Cache Memory, Virtual Memory, I/O",
  "Computer organization and architecture": "Complete COA Syllabus",

  "Computer network-1": "Concept of Layering, OSI & TCP/IP, Flow & Error Control",
  "Computer network-2": "Routing Algorithms, IP Addressing, IPv4/IPv6, TCP/UDP, Sockets",
  "Computer network": "Complete Computer Networks Syllabus",
  "IPv4 Addressing & Routing - Part 1": "IPv4 Addressing, Subnetting, Supernetting & Longest Prefix Matching",
  "IPv4 Addressing & Routing - Part 2": "Classful/Classless Addressing, Subnet Mask & Routing Algorithms",
  "IPv4 Addressing & Routing - Part 3": "CIDR, Route Aggregation, NAT & Distance Vector Routing",
  "IPv4 Addressing & Routing - Part 4": "IP Header, Fragmentation & Reassembly, Path MTU",
  "IPv4 Addressing & Routing - Part 5": "IP Datagram Delivery & Control Protocols (ICMP, ARP)",
  "Error Detection & Correction": "Parity, CRC, Checksum & Hamming Code Error Correction",
  "Flow Control & Sliding Window Protocols - Part 1": "Stop and Wait, Go-Back-N ARQ & Efficiency",
  "Flow Control & Sliding Window Protocols - Part 2": "Selective Repeat ARQ, Sequence Number & Window Size Bounds",
  "Ethernet & Medium Access Control - Part 1": "Pure ALOHA, Slotted ALOHA, CSMA/CD Basics",
  "Ethernet & Medium Access Control - Part 2": "Binary Exponential Backoff, Collision Domain, Minimum Frame Length",
  "Ethernet & Medium Access Control - Part 3": "Token Ring, Bridges, Switches & Spanning Tree Protocol",
  "Transport Layer & Congestion Control - Part 1": "TCP Header Format, UDP Protocol & Port Multiplexing",
  "Transport Layer & Congestion Control - Part 2": "TCP Congestion Control (Slow Start, Congestion Avoidance, AIMD)",
  "Transport Layer & Congestion Control - Part 3": "TCP 3-Way Handshake, Connection Teardown, TCP Timers",
  "Application Layer & Services": "DNS, HTTP/HTTPS, Email (SMTP, POP3, IMAP) & Network Security",

  "C programming and data structure-1": "Programming in C, Arrays, stacks and queues, Recursion.",
  "Programming and Data Structures-1": "Programming in C, Arrays, stacks and queues, Recursion.",
  "Programming and Data Structure-1": "Programming in C, Arrays, stacks and queues, Recursion.",
  "C programming and data structure-2": "Hashing, Linked lists, trees, binary search trees.",
  "Programming and Data Structures-2": "Hashing, Linked lists, trees, binary search trees.",
  "Programming and Data Structure-2": "Hashing, Linked lists, trees, binary search trees.",
  "C programming and data structure": "Complete Programming and Data Structures Syllabus",
  "Programming and Data Structures": "Complete Programming and Data Structures Syllabus",
  "Programming and Data Structure": "Complete Programming and Data Structures Syllabus",

  "Engineering Mathematics-1": "Linear Algebra (Matrices, Determinants, Systems of Equations, Eigenvalues)",
  "Engineering Mathematics-2": "Calculus (Limits, Continuity, Derivatives, Maxima/Minima, Integration)",
  "Engineering Mathematics": "Complete Engineering Mathematics Syllabus",

  "Discrete Mathematics -1": "Propositional & First-Order Logic, Sets, Relations, Functions, Partial Orders",
  "Discrete Mathematics-1": "Propositional & First-Order Logic, Sets, Relations, Functions, Partial Orders",
  "Discrete Mathematics-2": "Combinatorics, Counting, Recurrence Relations, Graph Theory",
  "Discrete Mathematics": "Complete Discrete Mathematics Syllabus",

  "Algorithms -1": "Asymptotic Analysis, Divide & Conquer, Greedy Algorithms",
  "Algorithms-1": "Asymptotic Analysis, Divide & Conquer, Greedy Algorithms",
  "Algorithms -2": "Dynamic Programming, Graph Search (BFS/DFS), Shortest Paths",
  "Algorithms-2": "Dynamic Programming, Graph Search (BFS/DFS), Shortest Paths",
  "Algorithms": "Complete Algorithms Syllabus",

  "Compiler Design-1": "Lexical Analysis, Parsing Techniques (LL, LR, LALR, SLR)",
  "Compiler Design-2": "Syntax Directed Translation, Intermediate Code, Code Optimization",
  "Compiler Design": "Complete Compiler Design Syllabus",

  "Operating System-1": "Processes, Threads, CPU Scheduling, Synchronization, Deadlocks",
  "Operating System-2": "Memory Management, Virtual Memory, Paging, File Systems, Disk Scheduling",
  "Operating System": "Complete Operating System Syllabus",

  "General Aptitude-1": "Verbal Ability, English Grammar, Vocabulary, Critical Reasoning",
  "General Aptitude-2": "Numerical Ability, Computation, Data Interpretation & Reasoning",
  "General Aptitude": "Complete General Aptitude Syllabus"
};

window.PYQ_DEFAULT_TESTS = [
  // C Programming (14 tests)
  { series: "cse-gate-2027", name: "TWT-c-programming(Loops-I)", subject: "c_prog" },
  { series: "cse-gate-2027", name: "TWT-c-programming(Functions-I)", subject: "c_prog" },
  { series: "cse-gate-2027", name: "TWT-c-programming(Functions-II)", subject: "c_prog" },
  { series: "cse-gate-2027", name: "TWT-c-programming(Functions-III)", subject: "c_prog" },
  { series: "cse-gate-2027", name: "TWT-c-programming(Functions-IV)", subject: "c_prog" },
  { series: "cse-gate-2027", name: "TWT-c-programming(Functions-V)", subject: "c_prog" },
  { series: "cse-gate-2027", name: "TWT-c-programming(Functions-VI)", subject: "c_prog" },
  { series: "cse-gate-2027", name: "TWT-c-programming(Functions-VII)", subject: "c_prog" },
  { series: "cse-gate-2027", name: "TWT-c-programming(Array and Pointer-I)", subject: "c_prog" },
  { series: "cse-gate-2027", name: "TWT-c-programming(Array and Pointer-II)", subject: "c_prog" },
  { series: "cse-gate-2027", name: "TWT-c-programming(Array and Pointer-III)", subject: "c_prog" },
  { series: "cse-gate-2027", name: "TWT-c-programming(Array and Pointer-IV)", subject: "c_prog" },
  { series: "cse-gate-2027", name: "TWT-c-programming(Conditional Statements)", subject: "c_prog" },
  { series: "cse-gate-2027", name: "TWT-c-programming(Airthmetic Operator)", subject: "c_prog" },

  // Operating System (13 tests)
  { series: "cse-gate-2027", name: "TWT-Operating System(Process-I)", subject: "os" },
  { series: "cse-gate-2027", name: "TWT-Operating System(Process-II)", subject: "os" },
  { series: "cse-gate-2027", name: "TWT-Operating System(CPU Scheduling-I)", subject: "os" },
  { series: "cse-gate-2027", name: "TWT-Operating System(CPU Scheduling-II)", subject: "os" },
  { series: "cse-gate-2027", name: "TWT-Operating System(CPU Scheduling-III)", subject: "os" },
  { series: "cse-gate-2027", name: "TWT-Operating System(CPU Scheduling-IV)", subject: "os" },
  { series: "cse-gate-2027", name: "TWT-Operating System(CPU Scheduling-V)", subject: "os" },
  { series: "cse-gate-2027", name: "TWT-Operating System(Process Synchronization-I)", subject: "os" },
  { series: "cse-gate-2027", name: "TWT-Operating System(Process Synchronization-II)", subject: "os" },
  { series: "cse-gate-2027", name: "TWT-Operating System(Process Synchronization-III)", subject: "os" },
  { series: "cse-gate-2027", name: "TWT-Operating System(Process Synchronization-IV)", subject: "os" },
  { series: "cse-gate-2027", name: "TWT-Operating System(Deadlock-I)", subject: "os" },
  { series: "cse-gate-2027", name: "TWT-Operating System(Deadlock-II)", subject: "os" },
  { series: "cse-gate-2027", name: "TWT-Operating System(Deadlock-III)", subject: "os" },

  // Data Structures
  { series: "cse-gate-2027", name: "TWT-data structures(Array-I)", subject: "ds" },
  { series: "cse-gate-2027", name: "TWT-data structures(Array-II)", subject: "ds" },

  // Algorithms (6 tests)
  { series: "cse-gate-2027", name: "TWT-Algorithm(Asymptotic Notation-I)", subject: "algo" },
  { series: "cse-gate-2027", name: "TWT-Algorithm(Asymptotic Notation-II)", subject: "algo" },
  { series: "cse-gate-2027", name: "TWT-Algorithm(Asymptotic Notation-III)", subject: "algo" },
  { series: "cse-gate-2027", name: "TWT-Algorithm(Recurrence Relation-I)", subject: "algo" },
  { series: "cse-gate-2027", name: "TWT-Algorithm(Recurrence Relation-II)", subject: "algo" },

  // DBMS
  { series: "cse-gate-2027", name: "TWT-DBMS(ER Model)", subject: "dbms" },
  { series: "cse-gate-2027", name: "TWT-DBMS(Relational Schema-I)", subject: "dbms" },

  // Computer Networks
  { series: "cse-gate-2027", name: "TWT-Computer Network(Network Layer-I)", subject: "cn" },
  { series: "cse-gate-2027", name: "TWT-Computer Network(Network Layer-II)", subject: "cn" },
  { series: "cse-gate-2027", name: "TWT-Computer Network(Network Layer-III)", subject: "cn" },
  { series: "cse-gate-2027", name: "TWT-Computer Network(Network Layer-IV)", subject: "cn" },
  { series: "cse-gate-2027", name: "TWT-Computer Network(Network Layer-V)", subject: "cn" },
  { series: "cse-gate-2027", name: "TWT-Computer Network(Network Layer-VI)", subject: "cn" },
  { series: "cse-gate-2027", name: "TWT-Computer Network(Network Layer-VII)", subject: "cn" },
  { series: "cse-gate-2027", name: "TWT-Computer Network(Data Link Layer-I)", subject: "cn" },
  { series: "cse-gate-2027", name: "TWT-Computer Network(Data Link Layer-II)", subject: "cn" },
  { series: "cse-gate-2027", name: "TWT-Computer Network(Data Link Layer-III)", subject: "cn" },
  { series: "cse-gate-2027", name: "TWT-Computer Network(Data Link Layer-IV)", subject: "cn" },
  { series: "cse-gate-2027", name: "TWT-Computer Network(Data Link Layer-V)", subject: "cn" },
  { series: "cse-gate-2027", name: "TWT-Computer Network(Data Link Layer-VI)", subject: "cn" },
  { series: "cse-gate-2027", name: "TWT-Computer Network(Data Link Layer-VII)", subject: "cn" },
  { series: "cse-gate-2027", name: "TWT-Computer Network(Transport Layer-I)", subject: "cn" },
  { series: "cse-gate-2027", name: "TWT-Computer Network(Transport Layer-II)", subject: "cn" },
  { series: "cse-gate-2027", name: "TWT-Computer Network(Transport Layer-III)", subject: "cn" },
  { series: "cse-gate-2027", name: "TWT-Computer Network(Transport Layer-IV)", subject: "cn" },
  { series: "cse-gate-2027", name: "TWT-Computer Network(Application Layer-I)", subject: "cn" },
  { series: "cse-gate-2027", name: "TWT-Computer Network(Application Layer-II)", subject: "cn" },
  { series: "cse-gate-2027", name: "TWT-Computer Network(Physical Layer-I)", subject: "cn" },
  { series: "cse-gate-2027", name: "TWT-Computer Network(Physical Layer-II)", subject: "cn" },


  // Theory of Computation (7 tests)
  { series: "cse-gate-2027", name: "TWT-Theory of Computation(Regular Language-I)", subject: "toc" },
  { series: "cse-gate-2027", name: "TWT-Theory of Computation(Regular Language-II)", subject: "toc" },
  { series: "cse-gate-2027", name: "TWT-Theory of Computation(Context Free Grammar-I)", subject: "toc" },
  { series: "cse-gate-2027", name: "TWT-Theory of Computation(Context Free Grammar-II)", subject: "toc" },
  { series: "cse-gate-2027", name: "TWT-Theory of Computation(Context Free Grammar-III)", subject: "toc" },
  { series: "cse-gate-2027", name: "TWT-Theory of Computation(Context Free Language-I)", subject: "toc" },
  { series: "cse-gate-2027", name: "TWT-Theory of Computation(Context Free Language-II)", subject: "toc" },

  // ISRO CSE (2008-2025)
  { series: "cse-gate-2027", name: "ISRO CSE 2025", subject: "isro" },
  { series: "cse-gate-2027", name: "ISRO CSE 2024", subject: "isro" },
  { series: "cse-gate-2027", name: "ISRO CSE 2023", subject: "isro", comingSoon: true },
  { series: "cse-gate-2027", name: "ISRO CSE 2020", subject: "isro" },
  { series: "cse-gate-2027", name: "ISRO CSE 2018", subject: "isro" },
  { series: "cse-gate-2027", name: "ISRO CSE 2017", subject: "isro" },
  { series: "cse-gate-2027", name: "ISRO CSE 2016", subject: "isro" },
  { series: "cse-gate-2027", name: "ISRO CSE 2015", subject: "isro" },
  { series: "cse-gate-2027", name: "ISRO CSE 2014", subject: "isro" },
  { series: "cse-gate-2027", name: "ISRO CSE 2013", subject: "isro" },
  { series: "cse-gate-2027", name: "ISRO CSE 2011", subject: "isro" },
  { series: "cse-gate-2027", name: "ISRO CSE 2009", subject: "isro" },
  { series: "cse-gate-2027", name: "ISRO CSE 2008", subject: "isro" },
  { series: "cse-gate-2027", name: "ISRO CSE 2007", subject: "isro" },

  // GATE CSE (2003-2026)
  { series: "cse-gate-2027", name: "GATE CSE 2026 SET-1", subject: "gate_pyq" },
  { series: "cse-gate-2027", name: "GATE CSE 2026 SET-2", subject: "gate_pyq" },
  { series: "cse-gate-2027", name: "GATE CSE 2025 SET-1", subject: "gate_pyq" },
  { series: "cse-gate-2027", name: "GATE CSE 2025 SET-2", subject: "gate_pyq" },
  { series: "cse-gate-2027", name: "GATE CSE 2024 SET-1", subject: "gate_pyq", comingSoon: true },
  { series: "cse-gate-2027", name: "GATE CSE 2024 SET-2", subject: "gate_pyq", comingSoon: true },
  { series: "cse-gate-2027", name: "GATE CSE 2023", subject: "gate_pyq", comingSoon: true },
  { series: "cse-gate-2027", name: "GATE CSE 2022", subject: "gate_pyq", comingSoon: true },
  { series: "cse-gate-2027", name: "GATE CSE 2021 SET-1", subject: "gate_pyq", comingSoon: true },
  { series: "cse-gate-2027", name: "GATE CSE 2021 SET-2", subject: "gate_pyq", comingSoon: true },
  { series: "cse-gate-2027", name: "GATE CSE 2020", subject: "gate_pyq", comingSoon: true },
  { series: "cse-gate-2027", name: "GATE CSE 2019", subject: "gate_pyq", comingSoon: true },
  { series: "cse-gate-2027", name: "GATE CSE 2018", subject: "gate_pyq", comingSoon: true },
  { series: "cse-gate-2027", name: "GATE CSE 2017 SET-1", subject: "gate_pyq", comingSoon: true },
  { series: "cse-gate-2027", name: "GATE CSE 2017 SET-2", subject: "gate_pyq", comingSoon: true },
  { series: "cse-gate-2027", name: "GATE CSE 2016 SET-1", subject: "gate_pyq", comingSoon: true },
  { series: "cse-gate-2027", name: "GATE CSE 2016 SET-2", subject: "gate_pyq", comingSoon: true },
  { series: "cse-gate-2027", name: "GATE CSE 2015 SET-1", subject: "gate_pyq", comingSoon: true },
  { series: "cse-gate-2027", name: "GATE CSE 2015 SET-2", subject: "gate_pyq", comingSoon: true },
  { series: "cse-gate-2027", name: "GATE CSE 2015 SET-3", subject: "gate_pyq", comingSoon: true },
  { series: "cse-gate-2027", name: "GATE CSE 2014 SET-1", subject: "gate_pyq", comingSoon: true },
  { series: "cse-gate-2027", name: "GATE CSE 2014 SET-2", subject: "gate_pyq", comingSoon: true },
  { series: "cse-gate-2027", name: "GATE CSE 2014 SET-3", subject: "gate_pyq", comingSoon: true },
  { series: "cse-gate-2027", name: "GATE CSE 2013", subject: "gate_pyq", comingSoon: true },
  { series: "cse-gate-2027", name: "GATE CSE 2012", subject: "gate_pyq", comingSoon: true },
  { series: "cse-gate-2027", name: "GATE CSE 2011", subject: "gate_pyq", comingSoon: true },
  { series: "cse-gate-2027", name: "GATE CSE 2010", subject: "gate_pyq", comingSoon: true },
  { series: "cse-gate-2027", name: "GATE CSE 2009", subject: "gate_pyq", comingSoon: true },
  { series: "cse-gate-2027", name: "GATE CSE 2008", subject: "gate_pyq", comingSoon: true },
  { series: "cse-gate-2027", name: "GATE CSE 2007", subject: "gate_pyq", comingSoon: true },
  { series: "cse-gate-2027", name: "GATE CSE 2006", subject: "gate_pyq", comingSoon: true },
  { series: "cse-gate-2027", name: "GATE CSE 2005", subject: "gate_pyq", comingSoon: true },
  { series: "cse-gate-2027", name: "GATE CSE 2004", subject: "gate_pyq", comingSoon: true },
  { series: "cse-gate-2027", name: "GATE CSE 2003", subject: "gate_pyq", comingSoon: true },
];

window.PYQ_CS_SUBJECTS = [
  {
    id: "em",
    name: "Engineering Mathematics",
    iconType: "text",
    iconVal: "f(x)",
    iconBg: "#f3e8ff",
    iconColor: "#9333ea",
    regex: /(engineering mathematics|linear algebra|calculus)/i
  },
  {
    id: "dm",
    name: "Discrete Mathematics",
    iconType: "text",
    iconVal: "∀x",
    iconBg: "#fef3c7",
    iconColor: "#d97706",
    regex: /(discrete mathematics|discrete math|discrete)/i
  },
  {
    id: "dl",
    name: "Digital Logic",
    iconType: "text",
    iconVal: "01",
    iconBg: "#e0f2fe",
    iconColor: "#0284c7",
    regex: /(digital logic|digital electronics)/i
  },
  {
    id: "dbms",
    name: "DBMS",
    iconType: "svg",
    iconVal: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>`,
    iconBg: "#ffedd5",
    iconColor: "#ea580c",
    regex: /(dbms|database)/i
  },
  {
    id: "prog_ds",
    name: "Programming and Data Structure",
    iconType: "text",
    iconVal: "{}",
    iconBg: "#fee2e2",
    iconColor: "#ef4444",
    regex: /(c\s*programming\s*(and|&)\s*data\s*structure|programming\s*(and|&)\s*data\s*structure)/i
  },
  {
    id: "c_prog",
    name: "C Programming",
    iconType: "text",
    iconVal: "{}",
    iconBg: "#fee2e2",
    iconColor: "#ef4444",
    regex: /^(?!.*(and|&)\s*data\s*structure).*(c\s*programming|c-programming)/i
  },
  {
    id: "ds",
    name: "Data Structures",
    iconType: "svg",
    iconVal: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="5" r="3"/><circle cx="6" cy="19" r="3"/><circle cx="18" cy="19" r="3"/><path d="M12 8v4M12 12l-6 4M12 12l6 4"/></svg>`,
    iconBg: "#ffe4e6",
    iconColor: "#e11d48",
    regex: /^(?!.*c\s*programming\s*(and|&)).*(data\s*structure|data\s*structures)/i
  },
  {
    id: "algo",
    name: "Algorithms",
    iconType: "svg",
    iconVal: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="12" r="3"/><path d="M9 6h2a4 4 0 0 1 4 4v0a4 4 0 0 1-4 4H9M9 18h2"/></svg>`,
    iconBg: "#ede9fe",
    iconColor: "#6366f1",
    regex: /(algorithm|algorithms)/i
  },
  {
    id: "toc",
    name: "Theory of Computation",
    iconType: "text",
    iconVal: "Σ",
    iconBg: "#f1f5f9",
    iconColor: "#475569",
    regex: /(theory of computation|\btoc\b)/i
  },
  {
    id: "cd",
    name: "Compiler Design",
    iconType: "svg",
    iconVal: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 3v7.5a2.5 2.5 0 0 0 5 0V3M12 10.5V21M17 3v7.5a2.5 2.5 0 0 1-5 0"/></svg>`,
    iconBg: "#ffe4e6",
    iconColor: "#f43f5e",
    regex: /(compiler design|compiler)/i
  },
  {
    id: "coa",
    name: "Computer Organization",
    iconType: "svg",
    iconVal: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3"/></svg>`,
    iconBg: "#fee2e2",
    iconColor: "#ea580c",
    regex: /(computer organization|\bcoa\b|computer architecture)/i
  },
  {
    id: "os",
    name: "Operating System",
    iconType: "svg",
    iconVal: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="m7 10 3 3-3 3M13 16h4"/></svg>`,
    iconBg: "#ccfbf1",
    iconColor: "#0d9488",
    regex: /(operating system|\bos\b)/i
  },
  {
    id: "cn",
    name: "Computer Networks",
    iconType: "svg",
    iconVal: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1 4-10z"/></svg>`,
    iconBg: "#e0f2fe",
    iconColor: "#0284c7",
    regex: /(computer networks|computer network|\bcn\b)/i
  },
  {
    id: "ga",
    name: "General Aptitude",
    iconType: "svg",
    iconVal: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>`,
    iconBg: "#dcfce7",
    iconColor: "#16a34a",
    regex: /(general aptitude|aptitude|\bga\b)/i
  },
  {
    id: "mst",
    name: "Mixed Subject Tests",
    iconType: "text",
    iconVal: "🔀",
    iconBg: "#fef3c7",
    iconColor: "#b45309",
    regex: /(mixed subject|multiple subject|\bmst\b)/i
  },
  {
    id: "flt",
    name: "Full Length Mock Tests",
    iconType: "text",
    iconVal: "🏆",
    iconBg: "#fce7f3",
    iconColor: "#db2777",
    regex: /(complete gate syllabus|full length|\bgbg\b|\bflt\b|\bfst\b)/i
  },
  {
    id: "pw_gate_pyq",
    name: "GATE PYQ Tests (2022-2026)",
    iconType: "svg",
    iconVal: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>`,
    iconBg: "#e0e7ff",
    iconColor: "#4f46e5",
    regex: /(gate pyq test)/i
  },
  {
    id: "gate_pyq",
    name: "GATE(2003-2026)",
    iconType: "svg",
    iconVal: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>`,
    iconBg: "#e0e7ff",
    iconColor: "#4f46e5",
    regex: /(^GATE\s+CSE\s+20\d\d|^GATE\s+20\d\d)/i
  },
  {
    id: "isro",
    name: "ISRO(2008-2025)",
    iconType: "svg",
    iconVal: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/></svg>`,
    iconBg: "#eff6ff",
    iconColor: "#2563eb",
    regex: /(isro)/i
  }
];

window.togglePYQAccordion = function (cardEl) {
  if (!cardEl) return;
  const isAlreadyOpen = cardEl.classList.contains("open");

  // Close other open subject cards in this wrap
  const wrap = cardEl.closest(".pyq-accordion-wrap");
  if (wrap) {
    wrap.querySelectorAll(".pyq-subject-card.open").forEach(c => {
      if (c !== cardEl) c.classList.remove("open");
    });
  }

  if (isAlreadyOpen) {
    cardEl.classList.remove("open");
  } else {
    cardEl.classList.add("open");
    setTimeout(() => {
      cardEl.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }, 60);
  }
};

window.isEnrolledSeries = function (id) {
  if (id === "neet-ug-practice") return true;
  if (typeof enrolledIds !== "undefined" && Array.isArray(enrolledIds)) {
    return enrolledIds.includes(id);
  }
  try {
    const session = JSON.parse(localStorage.getItem("apexcore_user") || "{}");
    if (session && Array.isArray(session.enrolledCourses)) {
      return session.enrolledCourses.includes(id);
    }
  } catch (e) { }
  return false;
};

window.promptEnrollment = function (seriesId = "cse-gate-2027") {
  currentDetailId = seriesId;
  if (!document.body.classList.contains("logged-in")) {
    alert("Please log in or sign up to enroll and unlock tests.");
    if (typeof openLogin === "function") {
      openLogin();
    }
    return;
  }
  const enrollBar = document.querySelector(".enroll-bar");
  if (enrollBar && document.getElementById("view-detail") && document.getElementById("view-detail").classList.contains("active")) {
    enrollBar.scrollIntoView({ behavior: "smooth", block: "center" });
  }
  if (typeof handleEnroll === "function") {
    handleEnroll();
  }
};

window.PYQ_FREE_TESTS = [
  "DPP 01 - Computer Networks (IPv4 Addressing & Routing - Part 1)",
  "DPP 01 - Algorithms (Asymptotic Analysis & Recurrences - Part 1)",
  "DPP 01 - C Programming (Pointers, Arrays & Strings - Part 1)",
  "DPP 01 - Computer Organization (Cache Memory - Part 1)",
  "DPP 01 - Compiler Design (Lexical Analysis & Compiler Basics - Part 1)",
  "DPP 01 - DBMS (FD & Normalization - Part 1)",
  "DPP 01 - Digital Logic (Number System - Part 1)",
  "DPP 01 - Discrete Mathematics (Mathematical Logic - Part 1)",
  "DPP 01 - Data Structures (Arrays & Linked Lists - Part 1)",
  "DPP 01 - Operating System (Process Management & CPU Scheduling - Part 1)",
  "DPP 01 - Theory of Computation (Finite Automata - Part 1)",
  "DPP 01 - Engineering Mathematics (Limits, Continuity & Differentiability - Part 1)"
];

window.launchPYQTest = function (rawName, enrolled, seriesId = "cse-gate-2027") {
  if (seriesId) {
    currentTestListId = seriesId;
    currentDetailId = seriesId;
  }
  let isEnrolled = enrolled === true || (window.isEnrolledSeries && window.isEnrolledSeries(seriesId));
  if (seriesId === "neet-ug-practice") isEnrolled = true;
  if (!isEnrolled) {
    const isFree = (Array.isArray(window.PYQ_FREE_TESTS) && (window.PYQ_FREE_TESTS.includes(rawName) || window.PYQ_FREE_TESTS.some(x => rawName.includes(x))));
    if (isFree) isEnrolled = true;
  }
  if (!isEnrolled) {
    window.promptEnrollment(seriesId);
    return;
  }

  // Mandatory Login Check: Free demo tests still require a registered user session
  if (!document.body.classList.contains("logged-in") || !localStorage.getItem("apexcore_token")) {
    alert("Please log in or sign up to attempt this free demo test.");
    if (typeof pendingTestAfterLogin !== "undefined") {
      pendingTestAfterLogin = { testName: rawName, seriesId };
    }
    if (typeof openLogin === "function") {
      openLogin();
    }
    return;
  }

  // Ensure test is registered in testBackendIdMap
  const safeId = (seriesId + "_" + rawName).toLowerCase().replace(/[^a-z0-9]/g, "_");
  window.testBackendIdMap = window.testBackendIdMap || {};
  window.testBackendIdMap[rawName] = safeId;
  window.testBackendIdMap[seriesId + "|" + rawName] = safeId;
  const matchName = rawName.replace(/^[A-Za-z\s]+-\s*/, "");
  if (matchName) {
    window.testBackendIdMap[matchName] = safeId;
    window.testBackendIdMap[seriesId + "|" + matchName] = safeId;
  }
  const bracket = rawName.match(/\(([^)]+)\)/);
  if (bracket) {
    window.testBackendIdMap[bracket[1]] = safeId;
    window.testBackendIdMap[seriesId + "|" + bracket[1]] = safeId;
  }

  if (typeof openInstructions === "function") {
    openInstructions(rawName, seriesId);
  }
};


/* ==========================================================================
   EE-GATE 2027 PYQ Accordion Configuration (Matches CS-GATE 2027 Style)
   ========================================================================== */

window.PYQ_EE_SUBJECTS = [
  {
    id: "ee_circuits",
    name: "Electric Circuits",
    iconType: "text",
    iconVal: "⚡",
    iconBg: "#e0f2fe",
    iconColor: "#0284c7",
    regex: /(electric circuits|electric circuit|circuits|circits|network)/i
  },
  {
    id: "ee_control",
    name: "Control Systems",
    iconType: "text",
    iconVal: "🎛️",
    iconBg: "#fef3c7",
    iconColor: "#d97706",
    regex: /(control systems|control system)/i
  },
  {
    id: "ee_machines",
    name: "Electrical Machines",
    iconType: "text",
    iconVal: "⚙️",
    iconBg: "#ffe4e6",
    iconColor: "#e11d48",
    regex: /(electrical machines|electrical machine|transformer|induction|dc machine)/i
  },
  {
    id: "ee_power_sys",
    name: "Power Systems",
    iconType: "text",
    iconVal: "🔋",
    iconBg: "#ede9fe",
    iconColor: "#7c3aed",
    regex: /(power systems|power system)/i
  },
  {
    id: "ee_power_elec",
    name: "Power Electronics",
    iconType: "text",
    iconVal: "🔌",
    iconBg: "#ecfdf5",
    iconColor: "#059669",
    regex: /(power electronics|chopper|inverter|rectifier)/i
  },
  {
    id: "ee_signals",
    name: "Signals & Systems",
    iconType: "text",
    iconVal: "📶",
    iconBg: "#e0e7ff",
    iconColor: "#4338ca",
    regex: /(signals & systems|signals and systems|signal)/i
  },
  {
    id: "ee_digital",
    name: "Digital Electronics",
    iconType: "text",
    iconVal: "01",
    iconBg: "#e0f2fe",
    iconColor: "#0284c7",
    regex: /(digital electronics|digital logic)/i
  },
  {
    id: "ee_analog",
    name: "Analog Electronics",
    iconType: "text",
    iconVal: "〜",
    iconBg: "#fee2e2",
    iconColor: "#ef4444",
    regex: /(analog electronics|analog)/i
  },
  {
    id: "ee_emi",
    name: "Measurements & Instrumentation",
    iconType: "text",
    iconVal: "📐",
    iconBg: "#fef9c3",
    iconColor: "#ca8a04",
    regex: /(measurements|instrumentation|\bemi\b)/i
  },
  {
    id: "ee_emf",
    name: "Electromagnetic Fields",
    iconType: "text",
    iconVal: "🧲",
    iconBg: "#fefce8",
    iconColor: "#a16207",
    regex: /(electromagnetic fields|electromagnetic|\bemf\b)/i
  },
  {
    id: "ee_maths",
    name: "Engineering Mathematics",
    iconType: "text",
    iconVal: "f(x)",
    iconBg: "#f3e8ff",
    iconColor: "#9333ea",
    regex: /(engineering mathematics|linear algebra|calculus)/i
  },
  {
    id: "ee_aptitude",
    name: "General Aptitude",
    iconType: "text",
    iconVal: "🧠",
    iconBg: "#dcfce7",
    iconColor: "#16a34a",
    regex: /(general aptitude|aptitude)/i
  },
  {
    id: "ee_flt",
    name: "Full Length Mock Tests",
    iconType: "text",
    iconVal: "🏆",
    iconBg: "#fce7f3",
    iconColor: "#db2777",
    regex: /(full length|mock|\bflt\b|\bfst\b)/i
  }
];

window.PYQ_EE_TOPIC_MAP = {
  "Electric Circuits -1": "Basic circuit laws, KCL, KVL, Node & Mesh, Theorems",
  "Electric Circuits -2": "Transient Analysis, Resonance, Two-Port Networks",
  "Electric Circuits": "Complete Electric Circuits & Network Theory Syllabus",
  "Control Systems -1": "Block Diagrams, SFG, Time Response, Routh-Hurwitz",
  "Control Systems -2": "Root Locus, Bode & Nyquist Plots, State Space Analysis",
  "Control Systems": "Complete Control Systems Syllabus",
  "Electrical Machines -1": "Single & Three Phase Transformers, Autotransformers",
  "Electrical Machines -2": "DC Machines, Induction Motors, Synchronous Machines",
  "Electrical Machines": "Complete Electrical Machines Syllabus",
  "Power Systems -1": "Transmission Lines, Corona, Cable Parameters, Per-Unit System",
  "Power Systems -2": "Load Flow, Symmetrical/Unsymmetrical Faults, Stability",
  "Power Systems": "Complete Power Systems & Protection Syllabus",
  "Power Electronics -1": "SCR, MOSFET, IGBT, Phase-Controlled Rectifiers",
  "Power Electronics -2": "DC-DC Choppers, Inverters (VSI, CSI), PWM, SMPS",
  "Power Electronics": "Complete Power Electronics & Drives Syllabus",
  "Signals & Systems -1": "Continuous & Discrete Time Signals, LTI Systems",
  "Signals & Systems -2": "Fourier Series/Transform, Laplace & Z-Transform",
  "Signals & Systems": "Complete Signals & Systems Syllabus",
  "Digital Electronics -1": "Boolean Algebra, Logic Gates, Minimization, K-Maps",
  "Digital Electronics -2": "Combinational & Sequential Circuits, Counters, ADCs",
  "Digital Electronics": "Complete Digital Electronics Syllabus",
  "Analog Electronics -1": "Diode Circuits, BJT & MOSFET Biasing, Small Signal Amplifiers",
  "Analog Electronics -2": "Op-Amps, Active Filters, Feedback Amplifiers, 555 Timers",
  "Analog Electronics": "Complete Analog Electronics Syllabus",
  "EMI -1": "Bridges, Potentiometers, PMMC, Moving Iron, Dynamometer",
  "EMI -2": "Digital Voltmeters, CRO, Instrument Transformers",
  "Electrical & Electronics Measurements": "Complete Measurements & Instrumentation Syllabus",
  "Electromagnetic Fields -1": "Electrostatics, Coulomb's Law, Gauss's Law, Boundary Conditions",
  "Electromagnetic Fields -2": "Ampere's Law, Faraday's Law, Maxwell's Equations, Waves",
  "Electromagnetic Fields": "Complete Electromagnetic Fields Syllabus",
  "Engineering Mathematics -1": "Linear Algebra (Matrices, Eigenvalues) & Calculus",
  "Engineering Mathematics -2": "Differential Equations, Complex Variables, Probability",
  "Engineering Mathematics": "Complete Engineering Mathematics Syllabus",
  "General Aptitude -1": "English Grammar, Vocabulary, Reading Comprehension",
  "General Aptitude -2": "Quantitative Aptitude, Spatial Reasoning, Analytical Ability",
  "General Aptitude": "Complete General Aptitude GATE Section",
  "General Aptitude Comprehensive": "Comprehensive Numerical, Verbal & Analytical Ability",
  "Mock Test 1": "Complete GATE 2027 EE Syllabus (Mock 1)",
  "Mock Test 2": "Complete GATE 2027 EE Syllabus (Mock 2)",
  "Mock Test 3": "Complete GATE 2027 EE Syllabus (Mock 3)",
  "Mock Test 4": "Complete GATE 2027 EE Syllabus (Mock 4)",
  "Mock Test 5": "Complete GATE 2027 EE Syllabus (Mock 5)",
  "Mock Test 6": "Complete GATE 2027 EE Syllabus (Mock 6)",
  "Mock Test 7": "Complete GATE 2027 EE Syllabus (Mock 7)"
};

/* ==========================================================================
   NEET UG Chapter & Subject Accordion Configuration
   ========================================================================== */

window.NEET_SUBJECTS = [
  {
    id: "neet_aakash_mock",
    name: "Aakash NEET Practice Mock Tests (Physics + Chemistry + Biology)",
    iconType: "svg",
    iconVal: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z"/><path d="M6 6h10M6 10h10M6 14h6"/></svg>`,
    iconBg: "#fee2e2",
    iconColor: "#dc2626",
    regex: /(test series for neet|aakash)/i
  },
  {
    id: "neet_bio_principles",
    name: "Biotechnology: Principles and Processes (Chapter Drill & PYQs)",
    iconType: "svg",
    iconVal: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M19.07 4.93L4.93 19.07"/><circle cx="12" cy="12" r="3"/></svg>`,
    iconBg: "#d1fae5",
    iconColor: "#059669",
    regex: /(biotechnology: principles|principles and processes|biotechnology.*principles)/i
  },
  {
    id: "neet_bio_apps",
    name: "Biotechnology and Its Applications (Chapter Drill & PYQs)",
    iconType: "svg",
    iconVal: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m18 2 4 4-14 14-4-4L18 2zM15 5l4 4M5 15l-3 5 5-3M14 6l-2-2"/></svg>`,
    iconBg: "#cffafe",
    iconColor: "#0891b2",
    regex: /(biotechnology and its applications|applications of biotechnology)/i
  },
  {
    id: "neet_ecology_organisms",
    name: "Ecology: Organisms and Populations (Chapter Drill & PYQs)",
    iconType: "svg",
    iconVal: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>`,
    iconBg: "#fef3c7",
    iconColor: "#d97706",
    regex: /(organisms and populations|organisms & populations|ecology.*population)/i
  },
  {
    id: "neet_genetics",
    name: "Genetics & Molecular Basis of Inheritance",
    iconType: "svg",
    iconVal: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="6" cy="6" r="3"/><circle cx="18" cy="18" r="3"/><path d="M18 6a9 9 0 0 1-9 9M6 18a9 9 0 0 1 9-9"/></svg>`,
    iconBg: "#ede9fe",
    iconColor: "#7c3aed",
    comingSoon: true,
    regex: /(genetics|molecular basis|inheritance)/i
  },
  {
    id: "neet_plant",
    name: "Plant Physiology & Photosynthesis",
    iconType: "svg",
    iconVal: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>`,
    iconBg: "#dcfce7",
    iconColor: "#16a34a",
    comingSoon: true,
    regex: /(plant physiology|photosynthesis|respiration in plants)/i
  },
  {
    id: "neet_human",
    name: "Human Physiology & Health",
    iconType: "svg",
    iconVal: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>`,
    iconBg: "#ffe4e6",
    iconColor: "#e11d48",
    comingSoon: true,
    regex: /(human physiology|human health|locomotion|neural control)/i
  },
  {
    id: "neet_physics",
    name: "NEET Physics - Mechanics, Optics & Modern Physics",
    iconType: "svg",
    iconVal: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="2"/><path d="M12 2a10 5 0 0 1 0 20 10 5 0 0 1 0-20"/><path d="M2 12a5 10 0 0 1 20 0 5 10 0 0 1-20 0"/></svg>`,
    iconBg: "#dbeafe",
    iconColor: "#2563eb",
    comingSoon: true,
    regex: /(neet physics|mechanics|optics|modern physics)/i
  },
  {
    id: "neet_chemistry",
    name: "NEET Chemistry - Organic, Inorganic & Physical",
    iconType: "svg",
    iconVal: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 3h6M10 3v6l-4 8a2 2 0 0 0 2 3h8a2 2 0 0 0 2-3l-4-8V3"/></svg>`,
    iconBg: "#fef3c7",
    iconColor: "#d97706",
    comingSoon: true,
    regex: /(neet chemistry|organic chemistry|inorganic chemistry|physical chemistry)/i
  }
];

window.NEET_TOPIC_MAP = {
  "Test Series for NEET - 2019 (Test - 1, Code - B)": '<div class="pyq-neet-topics-grid" style="display:flex;flex-direction:column;gap:5px;padding:2px 0;"><div style="display:flex;align-items:flex-start;gap:6px;font-size:11.5px;line-height:1.4;"><span style="display:inline-flex;align-items:center;gap:2px;background:#eff6ff;color:#1d4ed8;border:1px solid #bfdbfe;font-weight:700;padding:1px 6px;border-radius:4px;font-size:10.5px;flex-shrink:0;">⚡ Physics</span><span style="color:#334155;font-weight:500;">Physical World, Units & Measurements, Motion in a Straight Line, Motion in a Plane</span></div><div style="display:flex;align-items:flex-start;gap:6px;font-size:11.5px;line-height:1.4;"><span style="display:inline-flex;align-items:center;gap:2px;background:#fffbeb;color:#b45309;border:1px solid #fde68a;font-weight:700;padding:1px 6px;border-radius:4px;font-size:10.5px;flex-shrink:0;">🧪 Chemistry</span><span style="color:#334155;font-weight:500;">Some Basic Concepts of Chemistry, Structure of Atom</span></div><div style="display:flex;align-items:flex-start;gap:6px;font-size:11.5px;line-height:1.4;"><span style="display:inline-flex;align-items:center;gap:2px;background:#ecfdf5;color:#047857;border:1px solid #a7f3d0;font-weight:700;padding:1px 6px;border-radius:4px;font-size:10.5px;flex-shrink:0;">🌿 Botany</span><span style="color:#334155;font-weight:500;">The Living World, Biological Classification, Plant Kingdom</span></div><div style="display:flex;align-items:flex-start;gap:6px;font-size:11.5px;line-height:1.4;"><span style="display:inline-flex;align-items:center;gap:2px;background:#fdf2f8;color:#be185d;border:1px solid #fbcfe8;font-weight:700;padding:1px 6px;border-radius:4px;font-size:10.5px;flex-shrink:0;">🦁 Zoology</span><span style="color:#334155;font-weight:500;">Animal Kingdom</span></div></div>',
  "SWT 01 - Biotechnology: Principles & Processes (NCERT Core - Part 1)": "Principles of Biotechnology, History, Tools of rDNA, Restriction Endonucleases, Agarose Gel Electrophoresis",
  "SWT 02 - Biotechnology: Principles & Processes (NCERT Core - Part 2)": "Cloning Vectors, pBR322 Features, Selectable Markers, Competent Host, Transformation & Biolistics",
  "SWT 03 - Biotechnology: Principles & Processes (NCERT Core - Part 3)": "Polymerase Chain Reaction (PCR), Bioreactors (Sparged & Stirred Tank), Downstream Processing",
  "SWT 04 - Biotechnology: Principles & Processes (NCERT Exemplar & Advanced)": "NCERT Exemplar Problems, Advanced Conceptual Analysis, Experimental Techniques",
  "SWT 05 - Biotechnology: Principles & Processes (NEET PYQ & Match-List Drill)": "Authentic NEET 15-Year PYQs, Match List-I with List-II Column Questions, Enzymes & Vector Mechanisms",
  "SWT 06 - Biotechnology: Principles & Processes (Assertion-Reason & Statement Drill)": "High-Yield Assertion A & Reason R, Statement I & Statement II Critical Reasoning Questions",
  "SWT 07 - Biotechnology: Principles & Processes (Diagram & High-Yield PYQs)": "Figure & Schematic Analysis, Gel Electrophoresis Bands, PCR Cycle Steps, Sparged Stirred Tank Diagrams",
  "SWT 08 - Biotechnology: Principles & Processes (Rapid Speed Sprint)": "Complete Chapter Rapid Speed Sprint Test, Exam-Readiness Booster",
  "SWT 01 - Biotechnology and Its Applications (NCERT Line-by-Line & Core Applications)": "Bt Crops & Cotton, Pest Resistant Plants, Genetically Engineered Insulin, Gene Therapy (ADA), Molecular Diagnostics (PCR, ELISA)",
  "SWT 02 - Biotechnology and Its Applications (NEET Drill, Statement-Based & PYQs)": "Transgenic Animals, Biopiracy, Basmati Rice Patent, GEAC Guidelines, RNA Interference Mechanism, Critical Statement Analysis",
  "SWT 01 - Organisms and Populations (Organism & Environment, Abiotic Factors & Adaptations)": "Major Abiotic Factors (Temperature, Water, Light, Soil), Homeostasis, Regulators, Conformers, Migration, Hibernation & Aestivation, Adaptations",
  "SWT 02 - Organisms and Populations (Population Attributes, Growth Models & Life History)": "Population Attributes, Natality, Mortality, Sex Ratio, Age Pyramids, Exponential (J-shaped) & Logistic (Verhulst-Pearl) Growth Curves, Carrying Capacity",
  "SWT 03 - Organisms and Populations (Population Interactions, Competition & PYQ Drill)": "Interspecific Interactions: Predation, Gause Competitive Exclusion, Mac Arthur Resource Partitioning, Parasitism, Commensalism, Mutualism, Amensalism"
};

window.PYQ_EE_DEFAULT_TESTS = [
  // Electric Circuits (3)
  { series: "ee-gate-pyq-2027", name: "TWT - Electric Circuits -1", subject: "ee_circuits" },
  { series: "ee-gate-pyq-2027", name: "TWT - Electric Circuits -2", subject: "ee_circuits" },
  { series: "ee-gate-pyq-2027", name: "SWT - Electric Circuits", subject: "ee_circuits" },

  // Control Systems (3)
  { series: "ee-gate-pyq-2027", name: "TWT - Control Systems -1", subject: "ee_control" },
  { series: "ee-gate-pyq-2027", name: "TWT - Control Systems -2", subject: "ee_control" },
  { series: "ee-gate-pyq-2027", name: "SWT - Control Systems", subject: "ee_control" },

  // Electrical Machines (3)
  { series: "ee-gate-pyq-2027", name: "TWT - Electrical Machines -1", subject: "ee_machines" },
  { series: "ee-gate-pyq-2027", name: "TWT - Electrical Machines -2", subject: "ee_machines" },
  { series: "ee-gate-pyq-2027", name: "SWT - Electrical Machines", subject: "ee_machines" },

  // Power Systems (3)
  { series: "ee-gate-pyq-2027", name: "TWT - Power Systems -1", subject: "ee_power_sys" },
  { series: "ee-gate-pyq-2027", name: "TWT - Power Systems -2", subject: "ee_power_sys" },
  { series: "ee-gate-pyq-2027", name: "SWT - Power Systems", subject: "ee_power_sys" },

  // Power Electronics (3)
  { series: "ee-gate-pyq-2027", name: "TWT - Power Electronics -1", subject: "ee_power_elec" },
  { series: "ee-gate-pyq-2027", name: "TWT - Power Electronics -2", subject: "ee_power_elec" },
  { series: "ee-gate-pyq-2027", name: "SWT - Power Electronics", subject: "ee_power_elec" },

  // Signals & Systems (3)
  { series: "ee-gate-pyq-2027", name: "TWT - Signals & Systems -1", subject: "ee_signals" },
  { series: "ee-gate-pyq-2027", name: "TWT - Signals & Systems -2", subject: "ee_signals" },
  { series: "ee-gate-pyq-2027", name: "SWT - Signals & Systems", subject: "ee_signals" },

  // Digital Electronics (3)
  { series: "ee-gate-pyq-2027", name: "TWT - Digital Electronics -1", subject: "ee_digital" },
  { series: "ee-gate-pyq-2027", name: "TWT - Digital Electronics -2", subject: "ee_digital" },
  { series: "ee-gate-pyq-2027", name: "SWT - Digital Electronics", subject: "ee_digital" },

  // Analog Electronics (3)
  { series: "ee-gate-pyq-2027", name: "TWT - Analog Electronics -1", subject: "ee_analog" },
  { series: "ee-gate-pyq-2027", name: "TWT - Analog Electronics -2", subject: "ee_analog" },
  { series: "ee-gate-pyq-2027", name: "SWT - Analog Electronics", subject: "ee_analog" },

  // Measurements & Instrumentation (3)
  { series: "ee-gate-pyq-2027", name: "TWT - EMI -1", subject: "ee_emi" },
  { series: "ee-gate-pyq-2027", name: "TWT - EMI -2", subject: "ee_emi" },
  { series: "ee-gate-pyq-2027", name: "SWT - Electrical & Electronics Measurements", subject: "ee_emi" },

  // Electromagnetic Fields (3)
  { series: "ee-gate-pyq-2027", name: "TWT - Electromagnetic Fields -1", subject: "ee_emf" },
  { series: "ee-gate-pyq-2027", name: "TWT - Electromagnetic Fields -2", subject: "ee_emf" },
  { series: "ee-gate-pyq-2027", name: "SWT - Electromagnetic Fields", subject: "ee_emf" },

  // Engineering Mathematics (4)
  { series: "ee-gate-pyq-2027", name: "TWT - Engineering Mathematics -1", subject: "ee_maths" },
  { series: "ee-gate-pyq-2027", name: "TWT - Engineering Mathematics -2", subject: "ee_maths" },
  { series: "ee-gate-pyq-2027", name: "SWT - Engineering Mathematics", subject: "ee_maths" },

  // General Aptitude (4)
  { series: "ee-gate-pyq-2027", name: "TWT - General Aptitude -1", subject: "ee_aptitude" },
  { series: "ee-gate-pyq-2027", name: "TWT - General Aptitude -2", subject: "ee_aptitude" },
  { series: "ee-gate-pyq-2027", name: "SWT - General Aptitude", subject: "ee_aptitude" },

  // Full Length Mock Tests (8)
  { series: "ee-gate-pyq-2027", name: "FST 01 - Full Syllabus Test - 1 (Basic Level)", subject: "ee_flt" },
  { series: "ee-gate-pyq-2027", name: "FST 02 - Full Syllabus Test - 2 (Basic Level)", subject: "ee_flt" },
  { series: "ee-gate-pyq-2027", name: "FST 03 - Full Syllabus Test - 3 (Basic Level)", subject: "ee_flt" },
  { series: "ee-gate-pyq-2027", name: "FST 04 - Full Syllabus Test - 4 (Basic Level)", subject: "ee_flt" },
  { series: "ee-gate-pyq-2027", name: "FST 05 - Full Syllabus Test - 5 (Advance Level)", subject: "ee_flt" },
  { series: "ee-gate-pyq-2027", name: "FST 06 - Full Syllabus Test - 6 (Advance Level)", subject: "ee_flt" },
  { series: "ee-gate-pyq-2027", name: "FST 07 - Full Syllabus Test - 7 (Advance Level)", subject: "ee_flt" },
  { series: "ee-gate-pyq-2027", name: "FST 08 - Full Syllabus Test - 8 (Advance Level)", subject: "ee_flt" }
];


/* ==========================================================================
   PW-GATE 2027 CSE Subject-Wise Test Planner (58 Tests)
   ========================================================================== */

window.PYQ_PW_LEVEL_DEFAULT_TESTS = [
  {
    "series": "pw-cs-gate",
    "order": 1,
    "name": "SWT 1 - C Programming",
    "testLabel": "SWT 1",
    "testType": "Subject",
    "bracket": "C Programming",
    "subject": "c_prog",
    "date": "May 31, 2026",
    "duration": "70 Min",
    "totalMarks": 50,
    "topicsCovered": "Complete C Programming Syllabus"
  },
  {
    "series": "pw-cs-gate",
    "order": 2,
    "name": "SWT 2 - C Programming",
    "testLabel": "SWT 2",
    "testType": "Subject",
    "bracket": "C Programming",
    "subject": "c_prog",
    "date": "June 3, 2026",
    "duration": "70 Min",
    "totalMarks": 50,
    "topicsCovered": "Complete C Programming Syllabus"
  },
  {
    "series": "pw-cs-gate",
    "order": 3,
    "name": "SWT 3 - C Programming",
    "testLabel": "SWT 3",
    "testType": "Subject",
    "bracket": "C Programming",
    "subject": "c_prog",
    "date": "June 6, 2026",
    "duration": "70 Min",
    "totalMarks": 50,
    "topicsCovered": "Complete C Programming Syllabus"
  },
  {
    "series": "pw-cs-gate",
    "order": 4,
    "name": "SWT 4 - Data Structures",
    "testLabel": "SWT 4",
    "testType": "Subject",
    "bracket": "Data Structures",
    "subject": "ds",
    "date": "June 11, 2026",
    "duration": "70 Min",
    "totalMarks": 50,
    "topicsCovered": "Complete Data Structures Syllabus"
  },
  {
    "series": "pw-cs-gate",
    "order": 5,
    "name": "SWT 5 - Data Structures",
    "testLabel": "SWT 5",
    "testType": "Subject",
    "bracket": "Data Structures",
    "subject": "ds",
    "date": "June 14, 2026",
    "duration": "70 Min",
    "totalMarks": 50,
    "topicsCovered": "Complete Data Structures Syllabus"
  },
  {
    "series": "pw-cs-gate",
    "order": 6,
    "name": "SWT 6 - Data Structures",
    "testLabel": "SWT 6",
    "testType": "Subject",
    "bracket": "Data Structures",
    "subject": "ds",
    "date": "June 18, 2026",
    "duration": "70 Min",
    "totalMarks": 50,
    "topicsCovered": "Complete Data Structures Syllabus"
  },
  {
    "series": "pw-cs-gate",
    "order": 7,
    "name": "SWT 7 - Algorithm",
    "testLabel": "SWT 7",
    "testType": "Subject",
    "bracket": "Algorithm",
    "subject": "algo",
    "date": "June 21, 2026",
    "duration": "70 Min",
    "totalMarks": 50,
    "topicsCovered": "Complete Algorithm Syllabus"
  },
  {
    "series": "pw-cs-gate",
    "order": 8,
    "name": "SWT 8 - Algorithm",
    "testLabel": "SWT 8",
    "testType": "Subject",
    "bracket": "Algorithm",
    "subject": "algo",
    "date": "June 24, 2026",
    "duration": "70 Min",
    "totalMarks": 50,
    "topicsCovered": "Complete Algorithm Syllabus"
  },
  {
    "series": "pw-cs-gate",
    "order": 9,
    "name": "SWT 9 - Algorithm",
    "testLabel": "SWT 9",
    "testType": "Subject",
    "bracket": "Algorithm",
    "subject": "algo",
    "date": "June 27, 2026",
    "duration": "70 Min",
    "totalMarks": 50,
    "topicsCovered": "Complete Algorithm Syllabus"
  },
  {
    "series": "pw-cs-gate",
    "order": 10,
    "name": "SWT 10 - General Aptitude",
    "testLabel": "SWT 10",
    "testType": "Subject",
    "bracket": "General Aptitude",
    "subject": "ga",
    "date": "July 2, 2026",
    "duration": "70 Min",
    "totalMarks": 50,
    "topicsCovered": "Complete General Aptitude Syllabus"
  },
  {
    "series": "pw-cs-gate",
    "order": 11,
    "name": "SWT 11 - General Aptitude",
    "testLabel": "SWT 11",
    "testType": "Subject",
    "bracket": "General Aptitude",
    "subject": "ga",
    "date": "July 5, 2026",
    "duration": "70 Min",
    "totalMarks": 50,
    "topicsCovered": "Complete General Aptitude Syllabus"
  },
  {
    "series": "pw-cs-gate",
    "order": 12,
    "name": "SWT 12 - General Aptitude",
    "testLabel": "SWT 12",
    "testType": "Subject",
    "bracket": "General Aptitude",
    "subject": "ga",
    "date": "July 8, 2026",
    "duration": "70 Min",
    "totalMarks": 50,
    "topicsCovered": "Complete General Aptitude Syllabus"
  },
  {
    "series": "pw-cs-gate",
    "order": 13,
    "name": "SWT 13 - Database Management System",
    "testLabel": "SWT 13",
    "testType": "Subject",
    "bracket": "Database Management System",
    "subject": "dbms",
    "date": "July 12, 2026",
    "duration": "70 Min",
    "totalMarks": 50,
    "topicsCovered": "Complete Database Management System Syllabus"
  },
  {
    "series": "pw-cs-gate",
    "order": 14,
    "name": "SWT 14 - Database Management System",
    "testLabel": "SWT 14",
    "testType": "Subject",
    "bracket": "Database Management System",
    "subject": "dbms",
    "date": "July 15, 2026",
    "duration": "70 Min",
    "totalMarks": 50,
    "topicsCovered": "Complete Database Management System Syllabus"
  },
  {
    "series": "pw-cs-gate",
    "order": 15,
    "name": "SWT 15 - Database Management System",
    "testLabel": "SWT 15",
    "testType": "Subject",
    "bracket": "Database Management System",
    "subject": "dbms",
    "date": "July 18, 2026",
    "duration": "70 Min",
    "totalMarks": 50,
    "topicsCovered": "Complete Database Management System Syllabus"
  },
  {
    "series": "pw-cs-gate",
    "order": 16,
    "name": "SWT 16 - Computer Network",
    "testLabel": "SWT 16",
    "testType": "Subject",
    "bracket": "Computer Network",
    "subject": "cn",
    "date": "July 23, 2026",
    "duration": "70 Min",
    "totalMarks": 50,
    "topicsCovered": "Complete Computer Network Syllabus"
  },
  {
    "series": "pw-cs-gate",
    "order": 17,
    "name": "SWT 17 - Computer Network",
    "testLabel": "SWT 17",
    "testType": "Subject",
    "bracket": "Computer Network",
    "subject": "cn",
    "date": "July 26, 2026",
    "duration": "70 Min",
    "totalMarks": 50,
    "topicsCovered": "Complete Computer Network Syllabus"
  },
  {
    "series": "pw-cs-gate",
    "order": 18,
    "name": "SWT 18 - Computer Network",
    "testLabel": "SWT 18",
    "testType": "Subject",
    "bracket": "Computer Network",
    "subject": "cn",
    "date": "July 29, 2026",
    "duration": "70 Min",
    "totalMarks": 50,
    "topicsCovered": "Complete Computer Network Syllabus"
  },
  {
    "series": "pw-cs-gate",
    "order": 19,
    "name": "SWT 19 - Operating System",
    "testLabel": "SWT 19",
    "testType": "Subject",
    "bracket": "Operating System",
    "subject": "os",
    "date": "August 1, 2026",
    "duration": "70 Min",
    "totalMarks": 50,
    "topicsCovered": "Complete Operating System Syllabus"
  },
  {
    "series": "pw-cs-gate",
    "order": 20,
    "name": "SWT 20 - Operating System",
    "testLabel": "SWT 20",
    "testType": "Subject",
    "bracket": "Operating System",
    "subject": "os",
    "date": "August 5, 2026",
    "duration": "70 Min",
    "totalMarks": 50,
    "topicsCovered": "Complete Operating System Syllabus"
  },
  {
    "series": "pw-cs-gate",
    "order": 21,
    "name": "SWT 21 - Operating System",
    "testLabel": "SWT 21",
    "testType": "Subject",
    "bracket": "Operating System",
    "subject": "os",
    "date": "August 8, 2026",
    "duration": "70 Min",
    "totalMarks": 50,
    "topicsCovered": "Complete Operating System Syllabus"
  },
  {
    "series": "pw-cs-gate",
    "order": 22,
    "name": "SWT 22 - Engineering Mathematics",
    "testLabel": "SWT 22",
    "testType": "Subject",
    "bracket": "Engineering Mathematics",
    "subject": "em",
    "date": "August 12, 2026",
    "duration": "70 Min",
    "totalMarks": 50,
    "topicsCovered": "Complete Engineering Mathematics Syllabus"
  },
  {
    "series": "pw-cs-gate",
    "order": 23,
    "name": "SWT 23 - Engineering Mathematics",
    "testLabel": "SWT 23",
    "testType": "Subject",
    "bracket": "Engineering Mathematics",
    "subject": "em",
    "date": "August 15, 2026",
    "duration": "70 Min",
    "totalMarks": 50,
    "topicsCovered": "Complete Engineering Mathematics Syllabus"
  },
  {
    "series": "pw-cs-gate",
    "order": 24,
    "name": "SWT 24 - Engineering Mathematics",
    "testLabel": "SWT 24",
    "testType": "Subject",
    "bracket": "Engineering Mathematics",
    "subject": "em",
    "date": "August 19, 2026",
    "duration": "70 Min",
    "totalMarks": 50,
    "topicsCovered": "Complete Engineering Mathematics Syllabus"
  },
  {
    "series": "pw-cs-gate",
    "order": 25,
    "name": "SWT 25 - Compiler Design",
    "testLabel": "SWT 25",
    "testType": "Subject",
    "bracket": "Compiler Design",
    "subject": "cd",
    "date": "August 23, 2026",
    "duration": "80 Min",
    "totalMarks": 50,
    "topicsCovered": "Complete Compiler Design Syllabus"
  },
  {
    "series": "pw-cs-gate",
    "order": 26,
    "name": "SWT 26 - Compiler Design",
    "testLabel": "SWT 26",
    "testType": "Subject",
    "bracket": "Compiler Design",
    "subject": "cd",
    "date": "August 25, 2026",
    "duration": "80 Min",
    "totalMarks": 50,
    "topicsCovered": "Complete Compiler Design Syllabus"
  },
  {
    "series": "pw-cs-gate",
    "order": 27,
    "name": "SWT 27 - Compiler Design",
    "testLabel": "SWT 27",
    "testType": "Subject",
    "bracket": "Compiler Design",
    "subject": "cd",
    "date": "August 29, 2026",
    "duration": "80 Min",
    "totalMarks": 50,
    "topicsCovered": "Complete Compiler Design Syllabus"
  },
  {
    "series": "pw-cs-gate",
    "order": 28,
    "name": "SWT 28 - Discrete Mathematics",
    "testLabel": "SWT 28",
    "testType": "Subject",
    "bracket": "Discrete Mathematics",
    "subject": "dm",
    "date": "September 2, 2026",
    "duration": "80 Min",
    "totalMarks": 50,
    "topicsCovered": "Complete Discrete Mathematics Syllabus"
  },
  {
    "series": "pw-cs-gate",
    "order": 29,
    "name": "SWT 29 - Discrete Mathematics",
    "testLabel": "SWT 29",
    "testType": "Subject",
    "bracket": "Discrete Mathematics",
    "subject": "dm",
    "date": "September 6, 2026",
    "duration": "80 Min",
    "totalMarks": 50,
    "topicsCovered": "Complete Discrete Mathematics Syllabus"
  },
  {
    "series": "pw-cs-gate",
    "order": 30,
    "name": "SWT 30 - Discrete Mathematics",
    "testLabel": "SWT 30",
    "testType": "Subject",
    "bracket": "Discrete Mathematics",
    "subject": "dm",
    "date": "September 9, 2026",
    "duration": "80 Min",
    "totalMarks": 50,
    "topicsCovered": "Complete Discrete Mathematics Syllabus"
  },
  {
    "series": "pw-cs-gate",
    "order": 31,
    "name": "SWT 31 - Theory of Computation",
    "testLabel": "SWT 31",
    "testType": "Subject",
    "bracket": "Theory of Computation",
    "subject": "toc",
    "date": "September 12, 2026",
    "duration": "80 Min",
    "totalMarks": 50,
    "topicsCovered": "Complete Theory of Computation Syllabus"
  },
  {
    "series": "pw-cs-gate",
    "order": 32,
    "name": "SWT 32 - Theory of Computation",
    "testLabel": "SWT 32",
    "testType": "Subject",
    "bracket": "Theory of Computation",
    "subject": "toc",
    "date": "September 16, 2026",
    "duration": "80 Min",
    "totalMarks": 50,
    "topicsCovered": "Complete Theory of Computation Syllabus"
  },
  {
    "series": "pw-cs-gate",
    "order": 33,
    "name": "SWT 33 - Theory of Computation",
    "testLabel": "SWT 33",
    "testType": "Subject",
    "bracket": "Theory of Computation",
    "subject": "toc",
    "date": "September 19, 2026",
    "duration": "180 Min",
    "totalMarks": 50,
    "topicsCovered": "Complete Theory of Computation Syllabus"
  },
  {
    "series": "pw-cs-gate",
    "order": 34,
    "name": "SWT 34 - Computer Organization & Architecture",
    "testLabel": "SWT 34",
    "testType": "Subject",
    "bracket": "Computer Organization & Architecture",
    "subject": "coa",
    "date": "September 23, 2026",
    "duration": "180 Min",
    "totalMarks": 50,
    "topicsCovered": "Complete Computer Organization & Architecture Syllabus"
  },
  {
    "series": "pw-cs-gate",
    "order": 35,
    "name": "SWT 35 - Computer Organization & Architecture",
    "testLabel": "SWT 35",
    "testType": "Subject",
    "bracket": "Computer Organization & Architecture",
    "subject": "coa",
    "date": "September 26, 2026",
    "duration": "180 Min",
    "totalMarks": 50,
    "topicsCovered": "Complete Computer Organization & Architecture Syllabus"
  },
  {
    "series": "pw-cs-gate",
    "order": 36,
    "name": "SWT 36 - Computer Organization & Architecture",
    "testLabel": "SWT 36",
    "testType": "Subject",
    "bracket": "Computer Organization & Architecture",
    "subject": "coa",
    "date": "September 30, 2026",
    "duration": "180 Min",
    "totalMarks": 50,
    "topicsCovered": "Complete Computer Organization & Architecture Syllabus"
  },
  {
    "series": "pw-cs-gate",
    "order": 37,
    "name": "SWT 37 - Digital Electronics",
    "testLabel": "SWT 37",
    "testType": "Subject",
    "bracket": "Digital Electronics",
    "subject": "dl",
    "date": "October 3, 2026",
    "duration": "180 Min",
    "totalMarks": 50,
    "topicsCovered": "Complete Digital Electronics Syllabus"
  },
  {
    "series": "pw-cs-gate",
    "order": 38,
    "name": "SWT 38 - Digital Electronics",
    "testLabel": "SWT 38",
    "testType": "Subject",
    "bracket": "Digital Electronics",
    "subject": "dl",
    "date": "October 7, 2026",
    "duration": "180 Min",
    "totalMarks": 50,
    "topicsCovered": "Complete Digital Electronics Syllabus"
  },
  {
    "series": "pw-cs-gate",
    "order": 39,
    "name": "SWT 39 - Digital Electronics",
    "testLabel": "SWT 39",
    "testType": "Subject",
    "bracket": "Digital Electronics",
    "subject": "dl",
    "date": "October 10, 2026",
    "duration": "180 Min",
    "totalMarks": 50,
    "topicsCovered": "Complete Digital Electronics Syllabus"
  },
  {
    "series": "pw-cs-gate",
    "order": 40,
    "name": "MST 1 - Computer Organization & Architecture + Theory of Computation + Engineering Mathematics",
    "testLabel": "MST 1",
    "testType": "Mixed",
    "bracket": "COA + TOC + Engg Maths",
    "subject": "mst",
    "date": "October 17, 2026",
    "duration": "180 Min",
    "totalMarks": 60,
    "topicsCovered": "Computer Organization & Architecture + Theory of Computation + Engineering Mathematics"
  },
  {
    "series": "pw-cs-gate",
    "order": 41,
    "name": "MST 2 - Operating System + Discrete Mathematics + Algorithm",
    "testLabel": "MST 2",
    "testType": "Mixed",
    "bracket": "OS + Discrete Maths + Algorithm",
    "subject": "mst",
    "date": "October 24, 2026",
    "duration": "180 Min",
    "totalMarks": 60,
    "topicsCovered": "Operating System + Discrete Mathematics + Algorithm"
  },
  {
    "series": "pw-cs-gate",
    "order": 42,
    "name": "MST 3 - Digital Electronics + Data Structures + General Aptitude",
    "testLabel": "MST 3",
    "testType": "Mixed",
    "bracket": "Digital Electronics + Data Structures + General Aptitude",
    "subject": "mst",
    "date": "October 31, 2026",
    "duration": "180 Min",
    "totalMarks": 60,
    "topicsCovered": "Digital Electronics + Data Structures + General Aptitude"
  },
  {
    "series": "pw-cs-gate",
    "order": 43,
    "name": "MST 4 - Computer Network + C Programming + Compiler Design + Database Management System",
    "testLabel": "MST 4",
    "testType": "Mixed",
    "bracket": "CN + C Programming + Compiler + DBMS",
    "subject": "mst",
    "date": "November 7, 2026",
    "duration": "180 Min",
    "totalMarks": 60,
    "topicsCovered": "Computer Network + C Programming + Compiler Design + Database Management System"
  },
  {
    "series": "pw-cs-gate",
    "order": 44,
    "name": "MST 5 - Computer Organization & Architecture + Theory of Computation + Engineering Mathematics",
    "testLabel": "MST 5",
    "testType": "Mixed",
    "bracket": "COA + TOC + Engg Maths",
    "subject": "mst",
    "date": "November 14, 2026",
    "duration": "180 Min",
    "totalMarks": 60,
    "topicsCovered": "Computer Organization & Architecture + Theory of Computation + Engineering Mathematics"
  },
  {
    "series": "pw-cs-gate",
    "order": 45,
    "name": "MST 6 - Operating System + Discrete Mathematics + Algorithm",
    "testLabel": "MST 6",
    "testType": "Mixed",
    "bracket": "OS + Discrete Maths + Algorithm",
    "subject": "mst",
    "date": "November 21, 2026",
    "duration": "180 Min",
    "totalMarks": 60,
    "topicsCovered": "Operating System + Discrete Mathematics + Algorithm"
  },
  {
    "series": "pw-cs-gate",
    "order": 46,
    "name": "MST 7 - Digital Electronics + Data Structures + General Aptitude",
    "testLabel": "MST 7",
    "testType": "Mixed",
    "bracket": "Digital Electronics + Data Structures + General Aptitude",
    "subject": "mst",
    "date": "November 28, 2026",
    "duration": "180 Min",
    "totalMarks": 60,
    "topicsCovered": "Digital Electronics + Data Structures + General Aptitude"
  },
  {
    "series": "pw-cs-gate",
    "order": 47,
    "name": "MST 8 - Computer Network + C Programming + Compiler Design + Database Management System",
    "testLabel": "MST 8",
    "testType": "Mixed",
    "bracket": "CN + C Programming + Compiler + DBMS",
    "subject": "mst",
    "date": "December 5, 2026",
    "duration": "180 Min",
    "totalMarks": 60,
    "topicsCovered": "Computer Network + C Programming + Compiler Design + Database Management System"
  },
  {
    "series": "pw-cs-gate",
    "order": 48,
    "name": "FLT 1 - Full Length Mock Test 1",
    "testLabel": "FLT 1",
    "testType": "Full Length",
    "bracket": "Full Syllabus",
    "subject": "flt",
    "date": "December 12, 2026",
    "duration": "180 Min",
    "totalMarks": 100,
    "topicsCovered": "Complete GATE CSE Syllabus (Technical + Aptitude)"
  },
  {
    "series": "pw-cs-gate",
    "order": 49,
    "name": "FLT 2 - Full Length Mock Test 2",
    "testLabel": "FLT 2",
    "testType": "Full Length",
    "bracket": "Full Syllabus",
    "subject": "flt",
    "date": "December 19, 2026",
    "duration": "180 Min",
    "totalMarks": 100,
    "topicsCovered": "Complete GATE CSE Syllabus (Technical + Aptitude)"
  },
  {
    "series": "pw-cs-gate",
    "order": 50,
    "name": "FLT 3 - Full Length Mock Test 3",
    "testLabel": "FLT 3",
    "testType": "Full Length",
    "bracket": "Full Syllabus",
    "subject": "flt",
    "date": "December 26, 2026",
    "duration": "180 Min",
    "totalMarks": 100,
    "topicsCovered": "Complete GATE CSE Syllabus (Technical + Aptitude)"
  },
  {
    "series": "pw-cs-gate",
    "order": 51,
    "name": "FLT 4 - Full Length Mock Test 4",
    "testLabel": "FLT 4",
    "testType": "Full Length",
    "bracket": "Full Syllabus",
    "subject": "flt",
    "date": "January 2, 2027",
    "duration": "180 Min",
    "totalMarks": 100,
    "topicsCovered": "Complete GATE CSE Syllabus (Technical + Aptitude)"
  },
  {
    "series": "pw-cs-gate",
    "order": 52,
    "name": "FLT 5 - Full Length Mock Test 5",
    "testLabel": "FLT 5",
    "testType": "Full Length",
    "bracket": "Full Syllabus",
    "subject": "flt",
    "date": "January 9, 2027",
    "duration": "180 Min",
    "totalMarks": 100,
    "topicsCovered": "Complete GATE CSE Syllabus (Technical + Aptitude)"
  },
  {
    "series": "pw-cs-gate",
    "order": 53,
    "name": "FLT 6 - Full Length Mock Test 6",
    "testLabel": "FLT 6",
    "testType": "Full Length",
    "bracket": "Full Syllabus",
    "subject": "flt",
    "date": "January 16, 2027",
    "duration": "180 Min",
    "totalMarks": 100,
    "topicsCovered": "Complete GATE CSE Syllabus (Technical + Aptitude)"
  }
];

window.PYQ_PW_DEFAULT_TESTS = [
  // Programming and Data Structure (5 tests: 2 TWT C Prog + 2 TWT DS + 1 SWT)
  {
    series: "pw-cs-gate-2026",
    order: 1,
    name: "TWT 01 - Programming in C-1",
    testLabel: "TWT 01",
    testType: "Topic",
    bracket: "Programming in C-1",
    subject: "prog_ds",
    date: "17 May 2026",
    duration: "40 Min",
    totalMarks: 20,
    topicsCovered: "Data types and Operators, Control Flow Statements, Functions recursion"
  },
  {
    series: "pw-cs-gate-2026",
    order: 2,
    name: "TWT 02 - Programming in C-2",
    testLabel: "TWT 02",
    testType: "Topic",
    bracket: "Programming in C-2",
    subject: "prog_ds",
    date: "20 May 2026",
    duration: "40 Min",
    totalMarks: 20,
    topicsCovered: "Storage Classes, Pointers and Array, Strings structure"
  },
  {
    series: "pw-cs-gate-2026",
    order: 17,
    name: "TWT 17 - Data Structures",
    testLabel: "TWT 17",
    testType: "Topic",
    bracket: "Arrays, Stacks, Queues & Linked Lists",
    subject: "prog_ds",
    date: "4 July 2026",
    duration: "40 Min",
    totalMarks: 20,
    topicsCovered: "Arrays, Stacks and Queues, Hashing, Linked Lists"
  },
  {
    series: "pw-cs-gate-2026",
    order: 18,
    name: "TWT 18 - Data Structures",
    testLabel: "TWT 18",
    testType: "Topic",
    bracket: "Trees, BST & Heaps",
    subject: "prog_ds",
    date: "7 July 2026",
    duration: "40 Min",
    totalMarks: 20,
    topicsCovered: "Trees, Binary Search Trees, Binary Heaps and Miscellaneous"
  },
  {
    series: "pw-cs-gate-2026",
    order: 26,
    name: "SWT 1 - Programming and Data Structures",
    testLabel: "SWT 1",
    testType: "Subject",
    bracket: "Programming and Data Structures",
    subject: "prog_ds",
    date: "29 July 2026",
    duration: "72 Min",
    totalMarks: 40,
    topicsCovered: "Complete Programming and Data Structures Syllabus"
  },

  // Algorithms (3 tests: 2 TWT + 1 SWT)
  {
    series: "pw-cs-gate-2026",
    order: 3,
    name: "TWT 03 - Algorithm",
    testLabel: "TWT 03",
    testType: "Topic",
    bracket: "Asymptotic & Recurrences",
    subject: "algo",
    date: "23 May 2026",
    duration: "40 Min",
    totalMarks: 20,
    topicsCovered: "Asymptotic Notation, Finding Time Complexity, Solving Recurrence Relation (Substitution Method), Algorithm design techniques: Divide and Conquer, Quick Sort, Merge Sort, Max-Min, Binary Search, Matrix Multiplication, Recursion tree method and Master Method, Searching and Sorting: Insertion Sort, Selection Sort, Bubble Sort, Radix Sort, Linear Search."
  },
  {
    series: "pw-cs-gate-2026",
    order: 4,
    name: "TWT 04 - Algorithm",
    testLabel: "TWT 04",
    testType: "Topic",
    bracket: "Greedy, DP & Graphs",
    subject: "algo",
    date: "26 May 2026",
    duration: "40 Min",
    totalMarks: 20,
    topicsCovered: "Greedy, Minimum spanning trees, Shortest paths : SSSP, APSP, and Dynamic Programming, Graph Techniques and Traversals, Heaps"
  },
  {
    series: "pw-cs-gate-2026",
    order: 32,
    name: "SWT 7 - Algorithm",
    testLabel: "SWT 7",
    testType: "Subject",
    bracket: "Algorithm",
    subject: "algo",
    date: "22 August 2026",
    duration: "72 Min",
    totalMarks: 40,
    topicsCovered: "Complete Algorithms Syllabus"
  },

  // Theory of Computation (3 tests: 2 TWT + 1 SWT)
  {
    series: "pw-cs-gate-2026",
    order: 5,
    name: "TWT 05 - Theory of Computation",
    testLabel: "TWT 05",
    testType: "Topic",
    bracket: "Regular Languages & Automata",
    subject: "toc",
    date: "29 May 2026",
    duration: "40 Min",
    totalMarks: 20,
    topicsCovered: "Regular expressions and finite automata: DFA, NFA, FA Interconversion, Minimization, Mealy Machine, Moore Machine, Construction of Regular Expression Interconversion RE to FA, Regular Grammar, Regular Language, pumping lemma, Context-free Grammar and Push-down automata: CFG, PDA, CFL Identification, Closure Properties of CFL, Context Free Language"
  },
  {
    series: "pw-cs-gate-2026",
    order: 6,
    name: "TWT 06 - Theory of Computation",
    testLabel: "TWT 06",
    testType: "Topic",
    bracket: "Turing Machines & Undecidability",
    subject: "toc",
    date: "1 June 2026",
    duration: "40 Min",
    totalMarks: 20,
    topicsCovered: "Turing machines and undecidability: Turing Machine, REC and RE language Identification, Closure Properties of REC and REL's, Undecidability Reducibility"
  },
  {
    series: "pw-cs-gate-2026",
    order: 27,
    name: "SWT 2 - Theory Of Computation",
    testLabel: "SWT 2",
    testType: "Subject",
    bracket: "Theory Of Computation",
    subject: "toc",
    date: "2 August 2026",
    duration: "72 Min",
    totalMarks: 40,
    topicsCovered: "Complete Theory of Computation Syllabus"
  },

  // Computer Organization & Architecture (3 tests: 2 TWT + 1 SWT)
  {
    series: "pw-cs-gate-2026",
    order: 7,
    name: "TWT 07 - Computer Organization & Architecture",
    testLabel: "TWT 07",
    testType: "Topic",
    bracket: "Machine Instructions, ALU & Pipelining",
    subject: "coa",
    date: "4 June 2026",
    duration: "40 Min",
    totalMarks: 20,
    topicsCovered: "Machine Instruction & Addressing Modes & ALU & Control Unit and I/O Interface: Basics of COA, Registers and its Types, Types of Buses, Instruction Set Architecture, Addressing Modes, Micro-operation & micro program, ALU Data Path, Control Unit design, Hardwired Control, Microprogrammed Control, IO Organization, Modes of Data Transfer, Secondary memory, Instruction Pipelining & Floating Point Representation: RISC & CISC, Basics of Pipelining, Performance Evaluation of Pipeline, Pipelining Dependencies, Floating Point Representation"
  },
  {
    series: "pw-cs-gate-2026",
    order: 8,
    name: "TWT 08 - Computer Organization & Architecture",
    testLabel: "TWT 08",
    testType: "Topic",
    bracket: "Memory Organization & Cache",
    subject: "coa",
    date: "7 June 2026",
    duration: "40 Min",
    totalMarks: 20,
    topicsCovered: "Memory Organization: Memory Hierarchy Design, Cache memory & Cache organisation, Mapping Techniques, Cache Replacement Techniques, Cache Updation Policy, Main memory, Secondary Memory"
  },
  {
    series: "pw-cs-gate-2026",
    order: 29,
    name: "SWT 4 - Computer Organization & Architecture",
    testLabel: "SWT 4",
    testType: "Subject",
    bracket: "Computer Organization & Architecture",
    subject: "coa",
    date: "10 August 2026",
    duration: "72 Min",
    totalMarks: 40,
    topicsCovered: "Complete Computer Organization & Architecture Syllabus"
  },

  // Engineering Mathematics (3 tests: 2 TWT + 1 SWT)
  {
    series: "pw-cs-gate-2026",
    order: 9,
    name: "TWT 09 - Engineering Mathematics",
    testLabel: "TWT 09",
    testType: "Topic",
    bracket: "Linear Algebra",
    subject: "em",
    date: "10 June 2026",
    duration: "40 Min",
    totalMarks: 20,
    topicsCovered: "Linear Algebra"
  },
  {
    series: "pw-cs-gate-2026",
    order: 10,
    name: "TWT 10 - Engineering Mathematics",
    testLabel: "TWT 10",
    testType: "Topic",
    bracket: "Calculus & Probability",
    subject: "em",
    date: "13 June 2026",
    duration: "40 Min",
    totalMarks: 20,
    topicsCovered: "Calculus, & Probability and statistics"
  },
  {
    series: "pw-cs-gate-2026",
    order: 30,
    name: "SWT 5 - Engineering Maths",
    testLabel: "SWT 5",
    testType: "Subject",
    bracket: "Engineering Maths",
    subject: "em",
    date: "14 August 2026",
    duration: "72 Min",
    totalMarks: 40,
    topicsCovered: "Complete Engineering Mathematics Syllabus"
  },

  // General Aptitude (3 tests: 2 TWT + 1 SWT)
  {
    series: "pw-cs-gate-2026",
    order: 11,
    name: "TWT 11 - General Aptitude",
    testLabel: "TWT 11",
    testType: "Topic",
    bracket: "Quantitative & Analytical Aptitude",
    subject: "ga",
    date: "16 June 2026",
    duration: "40 Min",
    totalMarks: 20,
    topicsCovered: "Quantitative Aptitude, Analytical Aptitude"
  },
  {
    series: "pw-cs-gate-2026",
    order: 12,
    name: "TWT 12 - General Aptitude",
    testLabel: "TWT 12",
    testType: "Topic",
    bracket: "Spatial & Verbal Ability",
    subject: "ga",
    date: "19 June 2026",
    duration: "40 Min",
    totalMarks: 20,
    topicsCovered: "Spatial Aptitude, Basic English grammar: tenses, articles, adjectives, prepositions, conjunctions, verb-noun agreement, and other parts of speech Basic vocabulary: words, idioms, and phrases in context, reading and comprehension, Narrative sequencing."
  },
  {
    series: "pw-cs-gate-2026",
    order: 31,
    name: "SWT 6 - General Aptitude",
    testLabel: "SWT 6",
    testType: "Subject",
    bracket: "General Aptitude",
    subject: "ga",
    date: "18 August 2026",
    duration: "72 Min",
    totalMarks: 40,
    topicsCovered: "Complete General Aptitude Syllabus"
  },

  // Database (3 tests: 2 TWT + 1 SWT)
  {
    series: "pw-cs-gate-2026",
    order: 13,
    name: "TWT 13 - Database",
    testLabel: "TWT 13",
    testType: "Topic",
    bracket: "ER Model & Normalization",
    subject: "dbms",
    date: "22 June 2026",
    duration: "40 Min",
    totalMarks: 20,
    topicsCovered: "Database Design & ER Model: Introduction Of RDBMS, ER Model Concept & Conversion of ER Model to RDBMS, Finding Number of Candidate key & Super keys, FD's & Normalization: Membership set & Equality between FD Sets, Minimal Cover, Properties of Decomposition, Normal Form, Decomposition Into Higher Normal Form"
  },
  {
    series: "pw-cs-gate-2026",
    order: 14,
    name: "TWT 14 - Database",
    testLabel: "TWT 14",
    testType: "Topic",
    bracket: "Transactions & SQL",
    subject: "dbms",
    date: "25 June 2026",
    duration: "40 Min",
    totalMarks: 20,
    topicsCovered: "Transaction & Concurrency Control: Serializable Schedule (Conflict & View), Finding Number of Serializable Schedule, Recoverable Schedule, Lock Based/Time Stamp Protocol, Relational Algebra, Structured Query Language (SQL), TRC, File Organization and Indexing: File Organization and Indexing, Multi level Indexing, B Tree & B+ Tree"
  },
  {
    series: "pw-cs-gate-2026",
    order: 33,
    name: "SWT 8 - Databases",
    testLabel: "SWT 8",
    testType: "Subject",
    bracket: "Databases",
    subject: "dbms",
    date: "26 August 2026",
    duration: "72 Min",
    totalMarks: 40,
    topicsCovered: "Complete Database Management Systems Syllabus"
  },

  // Computer Networks (3 tests: 2 TWT + 1 SWT)
  {
    series: "pw-cs-gate-2026",
    order: 15,
    name: "TWT 15 - Computer Networks",
    testLabel: "TWT 15",
    testType: "Topic",
    bracket: "Layering & Data Link Layer",
    subject: "cn",
    date: "28 June 2026",
    duration: "40 Min",
    totalMarks: 20,
    topicsCovered: "Concept of layering: OSI and TCP/IP Protocol Stacks; Basics of packet, circuit and virtual circuit switching; Data link layer: framing, error detection, Medium Access Control, Ethernet bridging; Flow control; IP addressing, IPv4, CIDR notation"
  },
  {
    series: "pw-cs-gate-2026",
    order: 16,
    name: "TWT 16 - Computer Networks",
    testLabel: "TWT 16",
    testType: "Topic",
    bracket: "Routing & Transport Protocols",
    subject: "cn",
    date: "1 July 2026",
    duration: "40 Min",
    totalMarks: 20,
    topicsCovered: "IP Fragmentation; Basics of IP support protocols (ARP, DHCP, ICMP), NAT; Routing protocols: shortest path, flooding, distance vector and link state routing; Transport layer: TCP flow control and congestion control, UDP, TCP, sockets; Application layer protocols: DNS, SMTP, HTTP, FTP, Email."
  },
  {
    series: "pw-cs-gate-2026",
    order: 34,
    name: "SWT 9 - Computer Networks",
    testLabel: "SWT 9",
    testType: "Subject",
    bracket: "Computer Networks",
    subject: "cn",
    date: "30 August 2026",
    duration: "72 Min",
    totalMarks: 40,
    topicsCovered: "Complete Computer Networks Syllabus"
  },

  // Compiler Design (2 tests: 1 TWT + 1 SWT)
  {
    series: "pw-cs-gate-2026",
    order: 19,
    name: "TWT 19 - Compiler",
    testLabel: "TWT 19",
    testType: "Topic",
    bracket: "Lexical Analysis, Parsing & Code Gen",
    subject: "cd",
    date: "10 July 2026",
    duration: "40 Min",
    totalMarks: 20,
    topicsCovered: "Lexical analysis and Parsing: Phases of Compiler, Basics of Lexical Analysis, Finding the Tokens, Top Down and Bottom Up parser, Syntax-directed translation and Intermediate code generation, Runtime environments, local optimization. Data flow analysis: constant propagation, liveness analysis, common sub-expression elimination"
  },
  {
    series: "pw-cs-gate-2026",
    order: 37,
    name: "SWT 12 - Compiler Design",
    testLabel: "SWT 12",
    testType: "Subject",
    bracket: "Compiler Design",
    subject: "cd",
    date: "13 September 2026",
    duration: "72 Min",
    totalMarks: 40,
    topicsCovered: "Complete Compiler Design Syllabus"
  },

  // Operating System (3 tests: 2 TWT + 1 SWT)
  {
    series: "pw-cs-gate-2026",
    order: 20,
    name: "TWT 20 - Operating System",
    testLabel: "TWT 20",
    testType: "Topic",
    bracket: "Process, CPU Scheduling & Deadlock",
    subject: "os",
    date: "13 July 2026",
    duration: "40 Min",
    totalMarks: 20,
    topicsCovered: "Process Management & CPU Scheduling & Deadlock : Process Concept, CPU Scheduling Algorithms, System Call, Threads, Deadlock Characterization, Deadlock Handling, Resource Allocation Graph, Process Synchronisation : Critical Section Problem, Hardware Solution (TSL, etc), Software Solution, OS Based Solution, Classical IPC problems, Concurrency Mechanism"
  },
  {
    series: "pw-cs-gate-2026",
    order: 21,
    name: "TWT 21 - Operating System",
    testLabel: "TWT 21",
    testType: "Topic",
    bracket: "File System & Memory Management",
    subject: "os",
    date: "16 July 2026",
    duration: "40 Min",
    totalMarks: 20,
    topicsCovered: "File system + Disk Management, Memory Management and Virtual Memory: Memory management Techniques, Paging, Virtual Memory, Page replacement Techniques"
  },
  {
    series: "pw-cs-gate-2026",
    order: 35,
    name: "SWT 10 - Operating System",
    testLabel: "SWT 10",
    testType: "Subject",
    bracket: "Operating System",
    subject: "os",
    date: "3 September 2026",
    duration: "72 Min",
    totalMarks: 40,
    topicsCovered: "Complete Operating System Syllabus"
  },

  // Discrete Mathematics (3 tests: 2 TWT + 1 SWT)
  {
    series: "pw-cs-gate-2026",
    order: 22,
    name: "TWT 22 - Discrete Mathematics",
    testLabel: "TWT 22",
    testType: "Topic",
    bracket: "Graph Theory",
    subject: "dm",
    date: "19 July 2026",
    duration: "40 Min",
    totalMarks: 20,
    topicsCovered: "Graph Theory: Basics of Graphs, Degree Sequence, Types of Graphs, Connectivity, Graph Number, Planarity."
  },
  {
    series: "pw-cs-gate-2026",
    order: 23,
    name: "TWT 23 - Discrete Mathematics",
    testLabel: "TWT 23",
    testType: "Topic",
    bracket: "Propositional Logic, Sets & Combinatorics",
    subject: "dm",
    date: "22 July 2026",
    duration: "40 Min",
    totalMarks: 20,
    topicsCovered: "Propositional Logic: Propositional Logic, Logical Equivalence, Inference Rule, Predicate Logic, Quantifier, Sets, Relations & Functions: Sets, Relations & Functions, Lattice, Monoids and Groups, Combinatorics: Permutations, Combinations, Binomial Identities, Generating Function, Recurrence Relation"
  },
  {
    series: "pw-cs-gate-2026",
    order: 28,
    name: "SWT 3 - Discrete Mathematics",
    testLabel: "SWT 3",
    testType: "Subject",
    bracket: "Discrete Mathematics",
    subject: "dm",
    date: "6 August 2026",
    duration: "72 Min",
    totalMarks: 40,
    topicsCovered: "Complete Discrete Mathematics Syllabus"
  },

  // Digital Logic (3 tests: 2 TWT + 1 SWT)
  {
    series: "pw-cs-gate-2026",
    order: 24,
    name: "TWT 24 - Digital Logic",
    testLabel: "TWT 24",
    testType: "Topic",
    bracket: "Number System, Codes & Boolean Algebra",
    subject: "dl",
    date: "25 July 2026",
    duration: "40 Min",
    totalMarks: 20,
    topicsCovered: "Number System, Binary Codes, Boolean Algebra, Logic Gates and K-Maps: Radix based number system, Conversion, Signed binary numbers, BCD codes, Boolean Algebra, Logic Gates and K-Maps"
  },
  {
    series: "pw-cs-gate-2026",
    order: 25,
    name: "TWT 25 - Digital Logic",
    testLabel: "TWT 25",
    testType: "Topic",
    bracket: "Combinational & Sequential Circuits",
    subject: "dl",
    date: "28 July 2026",
    duration: "40 Min",
    totalMarks: 20,
    topicsCovered: "Combinational Logic Circuits: Code Converter, Arithmetic Circuits, BCD to Excess-3/Excess-3 to BCD converter circuits using binary adder, BCD adder and Subtracter, Binary Comparator Circuits, Multiplexer, Decoder/DE-MUX, Encoder and Priority Encoder, Sequential circuits: Flip-Flops, Registers, Asynchronous Counter, Synchronous Counter"
  },
  {
    series: "pw-cs-gate-2026",
    order: 36,
    name: "SWT 11 - Digital Logic",
    testLabel: "SWT 11",
    testType: "Subject",
    bracket: "Digital Logic",
    subject: "dl",
    date: "7 September 2026",
    duration: "72 Min",
    totalMarks: 40,
    topicsCovered: "Complete Digital Logic Syllabus"
  },

  // Mixed Subject Tests (4 tests: MST 1 to MST 4)
  {
    series: "pw-cs-gate-2026",
    order: 38,
    name: "MST 1 - C Programming + Data Structures + TOC + Algorithms",
    testLabel: "MST 1",
    testType: "Mixed",
    bracket: "C Prog + DS + TOC + Algorithms",
    subject: "mst",
    date: "20 September 2026",
    duration: "180 Min",
    totalMarks: 60,
    topicsCovered: "C Programming + Data Structures + Theory of Computation + Algorithms"
  },
  {
    series: "pw-cs-gate-2026",
    order: 39,
    name: "MST 2 - General Mathematics + General Aptitude",
    testLabel: "MST 2",
    testType: "Mixed",
    bracket: "Mathematics + Aptitude",
    subject: "mst",
    date: "27 September 2026",
    duration: "180 Min",
    totalMarks: 60,
    topicsCovered: "General Mathematics + General Aptitude"
  },
  {
    series: "pw-cs-gate-2026",
    order: 40,
    name: "MST 3 - COA + Database Management + Computer Network",
    testLabel: "MST 3",
    testType: "Mixed",
    bracket: "COA + DBMS + Networks",
    subject: "mst",
    date: "4 October 2026",
    duration: "180 Min",
    totalMarks: 60,
    topicsCovered: "Computer Organization & Architecture + Database Management + Computer Network"
  },
  {
    series: "pw-cs-gate-2026",
    order: 41,
    name: "MST 4 - Compiler Design + OS + Digital Logic + Discrete Maths",
    testLabel: "MST 4",
    testType: "Mixed",
    bracket: "Compiler + OS + Digital + Discrete",
    subject: "mst",
    date: "11 October 2026",
    duration: "180 Min",
    totalMarks: 60,
    topicsCovered: "Compiler Design + Operating System + Digital Logic + Discrete Maths"
  },

  // Full Length Mock Tests (12 tests: GBG 01 to GBG 12)
  {
    series: "pw-cs-gate-2026",
    order: 42,
    name: "GBG 01 - Full Length Mock Test 1",
    testLabel: "GBG 01",
    testType: "Full Length",
    bracket: "Full Length Mock 1",
    subject: "flt",
    date: "18 October 2026",
    duration: "180 Min",
    totalMarks: 100,
    topicsCovered: "Complete GATE Syllabus"
  },
  {
    series: "pw-cs-gate-2026",
    order: 43,
    name: "GBG 02 - Full Length Mock Test 2",
    testLabel: "GBG 02",
    testType: "Full Length",
    bracket: "Full Length Mock 2",
    subject: "flt",
    date: "25 October 2026",
    duration: "180 Min",
    totalMarks: 100,
    topicsCovered: "Complete GATE Syllabus"
  },
  {
    series: "pw-cs-gate-2026",
    order: 44,
    name: "GBG 03 - Full Length Mock Test 3",
    testLabel: "GBG 03",
    testType: "Full Length",
    bracket: "Full Length Mock 3",
    subject: "flt",
    date: "1 November 2026",
    duration: "180 Min",
    totalMarks: 100,
    topicsCovered: "Complete GATE Syllabus"
  },
  {
    series: "pw-cs-gate-2026",
    order: 45,
    name: "GBG 04 - Full Length Mock Test 4",
    testLabel: "GBG 04",
    testType: "Full Length",
    bracket: "Full Length Mock 4",
    subject: "flt",
    date: "15 November 2026",
    duration: "180 Min",
    totalMarks: 100,
    topicsCovered: "Complete GATE Syllabus"
  },
  {
    series: "pw-cs-gate-2026",
    order: 46,
    name: "GBG 05 - Full Length Mock Test 5",
    testLabel: "GBG 05",
    testType: "Full Length",
    bracket: "Full Length Mock 5",
    subject: "flt",
    date: "22 November 2026",
    duration: "180 Min",
    totalMarks: 100,
    topicsCovered: "Complete GATE Syllabus"
  },
  {
    series: "pw-cs-gate-2026",
    order: 47,
    name: "GBG 06 - Full Length Mock Test 6",
    testLabel: "GBG 06",
    testType: "Full Length",
    bracket: "Full Length Mock 6",
    subject: "flt",
    date: "29 November 2026",
    duration: "180 Min",
    totalMarks: 100,
    topicsCovered: "Complete GATE Syllabus"
  },
  {
    series: "pw-cs-gate-2026",
    order: 48,
    name: "GBG 07 - Full Length Mock Test 7",
    testLabel: "GBG 07",
    testType: "Full Length",
    bracket: "Full Length Mock 7",
    subject: "flt",
    date: "6 December 2026",
    duration: "180 Min",
    totalMarks: 100,
    topicsCovered: "Complete GATE Syllabus"
  },
  {
    series: "pw-cs-gate-2026",
    order: 49,
    name: "GBG 08 - Full Length Mock Test 8",
    testLabel: "GBG 08",
    testType: "Full Length",
    bracket: "Full Length Mock 8",
    subject: "flt",
    date: "13 December 2026",
    duration: "180 Min",
    totalMarks: 100,
    topicsCovered: "Complete GATE Syllabus"
  },
  {
    series: "pw-cs-gate-2026",
    order: 50,
    name: "GBG 09 - Full Length Mock Test 9",
    testLabel: "GBG 09",
    testType: "Full Length",
    bracket: "Full Length Mock 9",
    subject: "flt",
    date: "20 December 2026",
    duration: "180 Min",
    totalMarks: 100,
    topicsCovered: "Complete GATE Syllabus"
  },
  {
    series: "pw-cs-gate-2026",
    order: 51,
    name: "GBG 10 - Full Length Mock Test 10",
    testLabel: "GBG 10",
    testType: "Full Length",
    bracket: "Full Length Mock 10",
    subject: "flt",
    date: "27 December 2026",
    duration: "180 Min",
    totalMarks: 100,
    topicsCovered: "Complete GATE Syllabus"
  },
  {
    series: "pw-cs-gate-2026",
    order: 52,
    name: "GBG 11 - Full Length Mock Test 11",
    testLabel: "GBG 11",
    testType: "Full Length",
    bracket: "Full Length Mock 11",
    subject: "flt",
    date: "3 January 2027",
    duration: "180 Min",
    totalMarks: 100,
    topicsCovered: "Complete GATE Syllabus"
  },
  {
    series: "pw-cs-gate-2026",
    order: 53,
    name: "GBG 12 - Full Length Mock Test 12",
    testLabel: "GBG 12",
    testType: "Full Length",
    bracket: "Full Length Mock 12",
    subject: "flt",
    date: "10 January 2027",
    duration: "180 Min",
    totalMarks: 100,
    topicsCovered: "Complete GATE Syllabus"
  },

  // GATE PYQ Tests (5 tests)
  {
    series: "pw-cs-gate-2026",
    order: 54,
    name: "GATE PYQ Test 1 - GATE 2022",
    testLabel: "GATE PYQ 1",
    testType: "PYQ",
    bracket: "GATE 2022 Official Paper",
    subject: "pw_gate_pyq",
    date: "30 October 2026",
    duration: "180 Min",
    totalMarks: 100,
    topicsCovered: "GATE 2022 Computer Science Official Paper"
  },
  {
    series: "pw-cs-gate-2026",
    order: 55,
    name: "GATE PYQ Test 2 - GATE 2023",
    testLabel: "GATE PYQ 2",
    testType: "PYQ",
    bracket: "GATE 2023 Official Paper",
    subject: "pw_gate_pyq",
    date: "30 October 2026",
    duration: "180 Min",
    totalMarks: 100,
    topicsCovered: "GATE 2023 Computer Science Official Paper"
  },
  {
    series: "pw-cs-gate-2026",
    order: 56,
    name: "GATE PYQ Test 3 - GATE 2024 (Set 01)",
    testLabel: "GATE PYQ 3 (Set 1)",
    testType: "PYQ",
    bracket: "GATE 2024 (Set 01) Official Paper",
    subject: "pw_gate_pyq",
    date: "01 November 2026",
    duration: "180 Min",
    totalMarks: 100,
    topicsCovered: "GATE 2024 Computer Science Official Paper (Set 01)"
  },
  {
    series: "pw-cs-gate-2026",
    order: 57,
    name: "GATE PYQ Test 3 - GATE 2024 (Set 02)",
    testLabel: "GATE PYQ 3 (Set 2)",
    testType: "PYQ",
    bracket: "GATE 2024 (Set 02) Official Paper",
    subject: "pw_gate_pyq",
    date: "01 November 2026",
    duration: "180 Min",
    totalMarks: 100,
    topicsCovered: "GATE 2024 Computer Science Official Paper (Set 02)"
  },
  {
    series: "pw-cs-gate-2026",
    order: 58,
    name: "GATE PYQ Test 4 - GATE 2025 (Set 01)",
    testLabel: "GATE PYQ 4 (Set 1)",
    testType: "PYQ",
    bracket: "GATE 2025 (Set 01) Official Paper",
    subject: "pw_gate_pyq",
    date: "20 November 2026",
    duration: "180 Min",
    totalMarks: 100,
    topicsCovered: "GATE 2025 Computer Science Official Paper (Set 01)"
  },
  {
    series: "pw-cs-gate-2026",
    order: 59,
    name: "GATE PYQ Test 4 - GATE 2025 (Set 02)",
    testLabel: "GATE PYQ 4 (Set 2)",
    testType: "PYQ",
    bracket: "GATE 2025 (Set 02) Official Paper",
    subject: "pw_gate_pyq",
    date: "20 November 2026",
    duration: "180 Min",
    totalMarks: 100,
    topicsCovered: "GATE 2025 Computer Science Official Paper (Set 02)"
  },
  {
    series: "pw-cs-gate-2026",
    order: 60,
    name: "GATE PYQ Test 5 - GATE 2026 (Set 01)",
    testLabel: "GATE PYQ 5 (Set 1)",
    testType: "PYQ",
    bracket: "GATE 2026 (Set 01) Official Paper",
    subject: "pw_gate_pyq",
    date: "20 November 2026",
    duration: "180 Min",
    totalMarks: 100,
    topicsCovered: "GATE 2026 Computer Science Official Paper (Set 01)"
  },
  {
    series: "pw-cs-gate-2026",
    order: 61,
    name: "GATE PYQ Test 5 - GATE 2026 (Set 02)",
    testLabel: "GATE PYQ 5 (Set 2)",
    testType: "PYQ",
    bracket: "GATE 2026 (Set 02) Official Paper",
    subject: "pw_gate_pyq",
    date: "20 November 2026",
    duration: "180 Min",
    totalMarks: 100,
    topicsCovered: "GATE 2026 Computer Science Official Paper (Set 02)"
  }
];

window.handleNotifyMe = function (btn, testName) {
  try {
    const list = JSON.parse(localStorage.getItem("apex_notified_tests") || "[]");
    if (!list.includes(testName)) {
      list.push(testName);
      localStorage.setItem("apex_notified_tests", JSON.stringify(list));
    }
  } catch (e) { }

  if (btn) {
    btn.innerHTML = `<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg> Notified`;
    btn.classList.add("notified");
    btn.onclick = null;
    btn.disabled = true;
  }

  alert(`🔔 You will be notified as soon as "${testName}" is released!`);
};

window.PYQ_DPP_DEFAULT_TESTS = [
  {
    "series": "cse-dpp-2027",
    "order": 1,
    "name": "DPP 01 - Computer Networks (IPv4 Addressing & Routing - Part 1)",
    "testLabel": "DPP 01",
    "testType": "DPP",
    "bracket": "IPv4 Addressing & Routing - Part 1",
    "subject": "cn",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 10,
    "topicsCovered": "IPv4 Addressing & Routing (Practice Set 1)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 2,
    "name": "DPP 02 - Computer Networks (IPv4 Addressing & Routing - Part 2)",
    "testLabel": "DPP 02",
    "testType": "DPP",
    "bracket": "IPv4 Addressing & Routing - Part 2",
    "subject": "cn",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 10,
    "topicsCovered": "IPv4 Addressing & Routing (Practice Set 2)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 3,
    "name": "DPP 03 - Computer Networks (IPv4 Addressing & Routing - Part 3)",
    "testLabel": "DPP 03",
    "testType": "DPP",
    "bracket": "IPv4 Addressing & Routing - Part 3",
    "subject": "cn",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 11,
    "topicsCovered": "IPv4 Addressing & Routing (Practice Set 3)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 4,
    "name": "DPP 04 - Computer Networks (IPv4 Addressing & Routing - Part 4)",
    "testLabel": "DPP 04",
    "testType": "DPP",
    "bracket": "IPv4 Addressing & Routing - Part 4",
    "subject": "cn",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 10,
    "topicsCovered": "IPv4 Addressing & Routing (Practice Set 4)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 5,
    "name": "DPP 05 - Computer Networks (IPv4 Addressing & Routing - Part 5)",
    "testLabel": "DPP 05",
    "testType": "DPP",
    "bracket": "IPv4 Addressing & Routing - Part 5",
    "subject": "cn",
    "date": "Nov 03, 2026",
    "duration": "15 Min",
    "totalMarks": 4,
    "topicsCovered": "IPv4 Addressing & Routing (Practice Set 5)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 6,
    "name": "DPP 06 - Computer Networks (Error Detection & Correction)",
    "testLabel": "DPP 06",
    "testType": "DPP",
    "bracket": "Error Detection & Correction",
    "subject": "cn",
    "date": "Nov 03, 2026",
    "duration": "20 Min",
    "totalMarks": 7,
    "topicsCovered": "Error Detection & Correction Practice Questions"
  },
  {
    "series": "cse-dpp-2027",
    "order": 7,
    "name": "DPP 07 - Computer Networks (Flow Control & Sliding Window Protocols - Part 1)",
    "testLabel": "DPP 07",
    "testType": "DPP",
    "bracket": "Flow Control & Sliding Window Protocols - Part 1",
    "subject": "cn",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 10,
    "topicsCovered": "Flow Control & Sliding Window Protocols (Practice Set 1)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 8,
    "name": "DPP 08 - Computer Networks (Flow Control & Sliding Window Protocols - Part 2)",
    "testLabel": "DPP 08",
    "testType": "DPP",
    "bracket": "Flow Control & Sliding Window Protocols - Part 2",
    "subject": "cn",
    "date": "Nov 03, 2026",
    "duration": "25 Min",
    "totalMarks": 9,
    "topicsCovered": "Flow Control & Sliding Window Protocols (Practice Set 2)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 9,
    "name": "DPP 09 - Computer Networks (Ethernet & Medium Access Control - Part 1)",
    "testLabel": "DPP 09",
    "testType": "DPP",
    "bracket": "Ethernet & Medium Access Control - Part 1",
    "subject": "cn",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 10,
    "topicsCovered": "Ethernet & Medium Access Control (Practice Set 1)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 10,
    "name": "DPP 10 - Computer Networks (Ethernet & Medium Access Control - Part 2)",
    "testLabel": "DPP 10",
    "testType": "DPP",
    "bracket": "Ethernet & Medium Access Control - Part 2",
    "subject": "cn",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 10,
    "topicsCovered": "Ethernet & Medium Access Control (Practice Set 2)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 11,
    "name": "DPP 11 - Computer Networks (Ethernet & Medium Access Control - Part 3)",
    "testLabel": "DPP 11",
    "testType": "DPP",
    "bracket": "Ethernet & Medium Access Control - Part 3",
    "subject": "cn",
    "date": "Nov 03, 2026",
    "duration": "18 Min",
    "totalMarks": 5,
    "topicsCovered": "Ethernet & Medium Access Control (Practice Set 3)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 12,
    "name": "DPP 12 - Computer Networks (Transport Layer & Congestion Control - Part 1)",
    "testLabel": "DPP 12",
    "testType": "DPP",
    "bracket": "Transport Layer & Congestion Control - Part 1",
    "subject": "cn",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 10,
    "topicsCovered": "Transport Layer & Congestion Control (Practice Set 1)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 13,
    "name": "DPP 13 - Computer Networks (Transport Layer & Congestion Control - Part 2)",
    "testLabel": "DPP 13",
    "testType": "DPP",
    "bracket": "Transport Layer & Congestion Control - Part 2",
    "subject": "cn",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 10,
    "topicsCovered": "Transport Layer & Congestion Control (Practice Set 2)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 14,
    "name": "DPP 14 - Computer Networks (Transport Layer & Congestion Control - Part 3)",
    "testLabel": "DPP 14",
    "testType": "DPP",
    "bracket": "Transport Layer & Congestion Control - Part 3",
    "subject": "cn",
    "date": "Nov 03, 2026",
    "duration": "18 Min",
    "totalMarks": 6,
    "topicsCovered": "Transport Layer & Congestion Control (Practice Set 3)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 15,
    "name": "DPP 15 - Computer Networks (Application Layer & Services)",
    "testLabel": "DPP 15",
    "testType": "DPP",
    "bracket": "Application Layer & Services",
    "subject": "cn",
    "date": "Nov 03, 2026",
    "duration": "15 Min",
    "totalMarks": 4,
    "topicsCovered": "Application Layer & Services Practice Questions"
  },
  {
    "series": "cse-dpp-2027",
    "order": 16,
    "name": "DPP 01 - Algorithms (Asymptotic Analysis & Recurrences - Part 1)",
    "testLabel": "DPP 01",
    "testType": "DPP",
    "bracket": "Asymptotic Analysis & Recurrences - Part 1",
    "subject": "algo",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 10,
    "topicsCovered": "Asymptotic Analysis & Recurrences (Practice Set 1)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 17,
    "name": "DPP 02 - Algorithms (Asymptotic Analysis & Recurrences - Part 2)",
    "testLabel": "DPP 02",
    "testType": "DPP",
    "bracket": "Asymptotic Analysis & Recurrences - Part 2",
    "subject": "algo",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 10,
    "topicsCovered": "Asymptotic Analysis & Recurrences (Practice Set 2)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 18,
    "name": "DPP 03 - Algorithms (Asymptotic Analysis & Recurrences - Part 3)",
    "testLabel": "DPP 03",
    "testType": "DPP",
    "bracket": "Asymptotic Analysis & Recurrences - Part 3",
    "subject": "algo",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 11,
    "topicsCovered": "Asymptotic Analysis & Recurrences (Practice Set 3)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 19,
    "name": "DPP 04 - Algorithms (Asymptotic Analysis & Recurrences - Part 4)",
    "testLabel": "DPP 04",
    "testType": "DPP",
    "bracket": "Asymptotic Analysis & Recurrences - Part 4",
    "subject": "algo",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 10,
    "topicsCovered": "Asymptotic Analysis & Recurrences (Practice Set 4)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 20,
    "name": "DPP 05 - Algorithms (Asymptotic Analysis & Recurrences - Part 5)",
    "testLabel": "DPP 05",
    "testType": "DPP",
    "bracket": "Asymptotic Analysis & Recurrences - Part 5",
    "subject": "algo",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 10,
    "topicsCovered": "Asymptotic Analysis & Recurrences (Practice Set 5)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 21,
    "name": "DPP 06 - Algorithms (Asymptotic Analysis & Recurrences - Part 6)",
    "testLabel": "DPP 06",
    "testType": "DPP",
    "bracket": "Asymptotic Analysis & Recurrences - Part 6",
    "subject": "algo",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 12,
    "topicsCovered": "Asymptotic Analysis & Recurrences (Practice Set 6)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 22,
    "name": "DPP 07 - Algorithms (Asymptotic Analysis & Recurrences - Part 7)",
    "testLabel": "DPP 07",
    "testType": "DPP",
    "bracket": "Asymptotic Analysis & Recurrences - Part 7",
    "subject": "algo",
    "date": "Nov 03, 2026",
    "duration": "15 Min",
    "totalMarks": 6,
    "topicsCovered": "Asymptotic Analysis & Recurrences (Practice Set 7)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 23,
    "name": "DPP 08 - Algorithms (Divide & Conquer, Searching & Hashing - Part 1)",
    "testLabel": "DPP 08",
    "testType": "DPP",
    "bracket": "Divide & Conquer, Searching & Hashing - Part 1",
    "subject": "algo",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 12,
    "topicsCovered": "Divide & Conquer, Searching & Hashing (Practice Set 1)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 24,
    "name": "DPP 09 - Algorithms (Divide & Conquer, Searching & Hashing - Part 2)",
    "testLabel": "DPP 09",
    "testType": "DPP",
    "bracket": "Divide & Conquer, Searching & Hashing - Part 2",
    "subject": "algo",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 12,
    "topicsCovered": "Divide & Conquer, Searching & Hashing (Practice Set 2)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 25,
    "name": "DPP 10 - Algorithms (Divide & Conquer, Searching & Hashing - Part 3)",
    "testLabel": "DPP 10",
    "testType": "DPP",
    "bracket": "Divide & Conquer, Searching & Hashing - Part 3",
    "subject": "algo",
    "date": "Nov 03, 2026",
    "duration": "15 Min",
    "totalMarks": 3,
    "topicsCovered": "Divide & Conquer, Searching & Hashing (Practice Set 3)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 26,
    "name": "DPP 11 - Algorithms (Sorting Algorithms - Part 1)",
    "testLabel": "DPP 11",
    "testType": "DPP",
    "bracket": "Sorting Algorithms - Part 1",
    "subject": "algo",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 10,
    "topicsCovered": "Sorting Algorithms (Practice Set 1)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 27,
    "name": "DPP 12 - Algorithms (Sorting Algorithms - Part 2)",
    "testLabel": "DPP 12",
    "testType": "DPP",
    "bracket": "Sorting Algorithms - Part 2",
    "subject": "algo",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 11,
    "topicsCovered": "Sorting Algorithms (Practice Set 2)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 28,
    "name": "DPP 13 - Algorithms (Sorting Algorithms - Part 3)",
    "testLabel": "DPP 13",
    "testType": "DPP",
    "bracket": "Sorting Algorithms - Part 3",
    "subject": "algo",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 10,
    "topicsCovered": "Sorting Algorithms (Practice Set 3)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 29,
    "name": "DPP 14 - Algorithms (Sorting Algorithms - Part 4)",
    "testLabel": "DPP 14",
    "testType": "DPP",
    "bracket": "Sorting Algorithms - Part 4",
    "subject": "algo",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 10,
    "topicsCovered": "Sorting Algorithms (Practice Set 4)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 30,
    "name": "DPP 15 - Algorithms (Sorting Algorithms - Part 5)",
    "testLabel": "DPP 15",
    "testType": "DPP",
    "bracket": "Sorting Algorithms - Part 5",
    "subject": "algo",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 14,
    "topicsCovered": "Sorting Algorithms (Practice Set 5)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 31,
    "name": "DPP 16 - Algorithms (Sorting Algorithms - Part 6)",
    "testLabel": "DPP 16",
    "testType": "DPP",
    "bracket": "Sorting Algorithms - Part 6",
    "subject": "algo",
    "date": "Nov 03, 2026",
    "duration": "18 Min",
    "totalMarks": 8,
    "topicsCovered": "Sorting Algorithms (Practice Set 6)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 32,
    "name": "DPP 17 - Algorithms (Greedy Algorithms & Dynamic Programming - Part 1)",
    "testLabel": "DPP 17",
    "testType": "DPP",
    "bracket": "Greedy Algorithms & Dynamic Programming - Part 1",
    "subject": "algo",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 10,
    "topicsCovered": "Greedy Algorithms & Dynamic Programming (Practice Set 1)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 33,
    "name": "DPP 18 - Algorithms (Greedy Algorithms & Dynamic Programming - Part 2)",
    "testLabel": "DPP 18",
    "testType": "DPP",
    "bracket": "Greedy Algorithms & Dynamic Programming - Part 2",
    "subject": "algo",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 12,
    "topicsCovered": "Greedy Algorithms & Dynamic Programming (Practice Set 2)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 34,
    "name": "DPP 19 - Algorithms (Greedy Algorithms & Dynamic Programming - Part 3)",
    "testLabel": "DPP 19",
    "testType": "DPP",
    "bracket": "Greedy Algorithms & Dynamic Programming - Part 3",
    "subject": "algo",
    "date": "Nov 03, 2026",
    "duration": "18 Min",
    "totalMarks": 6,
    "topicsCovered": "Greedy Algorithms & Dynamic Programming (Practice Set 3)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 35,
    "name": "DPP 20 - Algorithms (Graph Algorithms (BFS, DFS & Traversals - Part 1)",
    "testLabel": "DPP 20",
    "testType": "DPP",
    "bracket": "Graph Algorithms (BFS, DFS & Traversals - Part 1",
    "subject": "algo",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 12,
    "topicsCovered": "Graph Algorithms (BFS, DFS & Traversals (Practice Set 1)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 36,
    "name": "DPP 21 - Algorithms (Graph Algorithms (BFS, DFS & Traversals - Part 2)",
    "testLabel": "DPP 21",
    "testType": "DPP",
    "bracket": "Graph Algorithms (BFS, DFS & Traversals - Part 2",
    "subject": "algo",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 11,
    "topicsCovered": "Graph Algorithms (BFS, DFS & Traversals (Practice Set 2)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 37,
    "name": "DPP 22 - Algorithms (Graph Algorithms (BFS, DFS & Traversals - Part 3)",
    "testLabel": "DPP 22",
    "testType": "DPP",
    "bracket": "Graph Algorithms (BFS, DFS & Traversals - Part 3",
    "subject": "algo",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 13,
    "topicsCovered": "Graph Algorithms (BFS, DFS & Traversals (Practice Set 3)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 38,
    "name": "DPP 23 - Algorithms (Graph Algorithms (BFS, DFS & Traversals - Part 4)",
    "testLabel": "DPP 23",
    "testType": "DPP",
    "bracket": "Graph Algorithms (BFS, DFS & Traversals - Part 4",
    "subject": "algo",
    "date": "Nov 03, 2026",
    "duration": "18 Min",
    "totalMarks": 7,
    "topicsCovered": "Graph Algorithms (BFS, DFS & Traversals (Practice Set 4)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 39,
    "name": "DPP 24 - Algorithms (Graph Algorithms (MST & Shortest Paths - Part 1)",
    "testLabel": "DPP 24",
    "testType": "DPP",
    "bracket": "Graph Algorithms (MST & Shortest Paths - Part 1",
    "subject": "algo",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 10,
    "topicsCovered": "Graph Algorithms (MST & Shortest Paths (Practice Set 1)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 40,
    "name": "DPP 25 - Algorithms (Graph Algorithms (MST & Shortest Paths - Part 2)",
    "testLabel": "DPP 25",
    "testType": "DPP",
    "bracket": "Graph Algorithms (MST & Shortest Paths - Part 2",
    "subject": "algo",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 11,
    "topicsCovered": "Graph Algorithms (MST & Shortest Paths (Practice Set 2)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 41,
    "name": "DPP 26 - Algorithms (Graph Algorithms (MST & Shortest Paths - Part 3)",
    "testLabel": "DPP 26",
    "testType": "DPP",
    "bracket": "Graph Algorithms (MST & Shortest Paths - Part 3",
    "subject": "algo",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 10,
    "topicsCovered": "Graph Algorithms (MST & Shortest Paths (Practice Set 3)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 42,
    "name": "DPP 01 - C Programming (Pointers, Arrays & Strings - Part 1)",
    "testLabel": "DPP 01",
    "testType": "DPP",
    "bracket": "Pointers, Arrays & Strings - Part 1",
    "subject": "c_prog",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 10,
    "topicsCovered": "Pointers, Arrays & Strings (Practice Set 1)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 43,
    "name": "DPP 02 - C Programming (Pointers, Arrays & Strings - Part 2)",
    "testLabel": "DPP 02",
    "testType": "DPP",
    "bracket": "Pointers, Arrays & Strings - Part 2",
    "subject": "c_prog",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 10,
    "topicsCovered": "Pointers, Arrays & Strings (Practice Set 2)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 44,
    "name": "DPP 03 - C Programming (Pointers, Arrays & Strings - Part 3)",
    "testLabel": "DPP 03",
    "testType": "DPP",
    "bracket": "Pointers, Arrays & Strings - Part 3",
    "subject": "c_prog",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 10,
    "topicsCovered": "Pointers, Arrays & Strings (Practice Set 3)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 45,
    "name": "DPP 04 - C Programming (Pointers, Arrays & Strings - Part 4)",
    "testLabel": "DPP 04",
    "testType": "DPP",
    "bracket": "Pointers, Arrays & Strings - Part 4",
    "subject": "c_prog",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 10,
    "topicsCovered": "Pointers, Arrays & Strings (Practice Set 4)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 46,
    "name": "DPP 05 - C Programming (Pointers, Arrays & Strings - Part 5)",
    "testLabel": "DPP 05",
    "testType": "DPP",
    "bracket": "Pointers, Arrays & Strings - Part 5",
    "subject": "c_prog",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 10,
    "topicsCovered": "Pointers, Arrays & Strings (Practice Set 5)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 47,
    "name": "DPP 06 - C Programming (Pointers, Arrays & Strings - Part 6)",
    "testLabel": "DPP 06",
    "testType": "DPP",
    "bracket": "Pointers, Arrays & Strings - Part 6",
    "subject": "c_prog",
    "date": "Nov 03, 2026",
    "duration": "15 Min",
    "totalMarks": 4,
    "topicsCovered": "Pointers, Arrays & Strings (Practice Set 6)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 48,
    "name": "DPP 07 - C Programming (Functions & Recursion - Part 1)",
    "testLabel": "DPP 07",
    "testType": "DPP",
    "bracket": "Functions & Recursion - Part 1",
    "subject": "c_prog",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 10,
    "topicsCovered": "Functions & Recursion (Practice Set 1)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 49,
    "name": "DPP 08 - C Programming (Functions & Recursion - Part 2)",
    "testLabel": "DPP 08",
    "testType": "DPP",
    "bracket": "Functions & Recursion - Part 2",
    "subject": "c_prog",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 10,
    "topicsCovered": "Functions & Recursion (Practice Set 2)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 50,
    "name": "DPP 09 - C Programming (Functions & Recursion - Part 3)",
    "testLabel": "DPP 09",
    "testType": "DPP",
    "bracket": "Functions & Recursion - Part 3",
    "subject": "c_prog",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 10,
    "topicsCovered": "Functions & Recursion (Practice Set 3)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 51,
    "name": "DPP 10 - C Programming (Functions & Recursion - Part 4)",
    "testLabel": "DPP 10",
    "testType": "DPP",
    "bracket": "Functions & Recursion - Part 4",
    "subject": "c_prog",
    "date": "Nov 03, 2026",
    "duration": "15 Min",
    "totalMarks": 2,
    "topicsCovered": "Functions & Recursion (Practice Set 4)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 52,
    "name": "DPP 11 - C Programming (Loops & Control Statements - Part 1)",
    "testLabel": "DPP 11",
    "testType": "DPP",
    "bracket": "Loops & Control Statements - Part 1",
    "subject": "c_prog",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 10,
    "topicsCovered": "Loops & Control Statements (Practice Set 1)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 53,
    "name": "DPP 12 - C Programming (Loops & Control Statements - Part 2)",
    "testLabel": "DPP 12",
    "testType": "DPP",
    "bracket": "Loops & Control Statements - Part 2",
    "subject": "c_prog",
    "date": "Nov 03, 2026",
    "duration": "15 Min",
    "totalMarks": 3,
    "topicsCovered": "Loops & Control Statements (Practice Set 2)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 54,
    "name": "DPP 13 - C Programming (Data Types, Operators & Expressions - Part 1)",
    "testLabel": "DPP 13",
    "testType": "DPP",
    "bracket": "Data Types, Operators & Expressions - Part 1",
    "subject": "c_prog",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 10,
    "topicsCovered": "Data Types, Operators & Expressions (Practice Set 1)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 55,
    "name": "DPP 14 - C Programming (Data Types, Operators & Expressions - Part 2)",
    "testLabel": "DPP 14",
    "testType": "DPP",
    "bracket": "Data Types, Operators & Expressions - Part 2",
    "subject": "c_prog",
    "date": "Nov 03, 2026",
    "duration": "21 Min",
    "totalMarks": 7,
    "topicsCovered": "Data Types, Operators & Expressions (Practice Set 2)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 56,
    "name": "DPP 15 - C Programming (Structures, Unions & Memory Management - Part 1)",
    "testLabel": "DPP 15",
    "testType": "DPP",
    "bracket": "Structures, Unions & Memory Management - Part 1",
    "subject": "c_prog",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 11,
    "topicsCovered": "Structures, Unions & Memory Management (Practice Set 1)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 57,
    "name": "DPP 16 - C Programming (Structures, Unions & Memory Management - Part 2)",
    "testLabel": "DPP 16",
    "testType": "DPP",
    "bracket": "Structures, Unions & Memory Management - Part 2",
    "subject": "c_prog",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 10,
    "topicsCovered": "Structures, Unions & Memory Management (Practice Set 2)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 58,
    "name": "DPP 17 - C Programming (Structures, Unions & Memory Management - Part 3)",
    "testLabel": "DPP 17",
    "testType": "DPP",
    "bracket": "Structures, Unions & Memory Management - Part 3",
    "subject": "c_prog",
    "date": "Nov 03, 2026",
    "duration": "15 Min",
    "totalMarks": 3,
    "topicsCovered": "Structures, Unions & Memory Management (Practice Set 3)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 59,
    "name": "DPP 18 - C Programming (Storage Classes, Scope & Preprocessors - Part 1)",
    "testLabel": "DPP 18",
    "testType": "DPP",
    "bracket": "Storage Classes, Scope & Preprocessors - Part 1",
    "subject": "c_prog",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 10,
    "topicsCovered": "Storage Classes, Scope & Preprocessors (Practice Set 1)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 60,
    "name": "DPP 19 - C Programming (Storage Classes, Scope & Preprocessors - Part 2)",
    "testLabel": "DPP 19",
    "testType": "DPP",
    "bracket": "Storage Classes, Scope & Preprocessors - Part 2",
    "subject": "c_prog",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 10,
    "topicsCovered": "Storage Classes, Scope & Preprocessors (Practice Set 2)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 61,
    "name": "DPP 20 - C Programming (Storage Classes, Scope & Preprocessors - Part 3)",
    "testLabel": "DPP 20",
    "testType": "DPP",
    "bracket": "Storage Classes, Scope & Preprocessors - Part 3",
    "subject": "c_prog",
    "date": "Nov 03, 2026",
    "duration": "15 Min",
    "totalMarks": 1,
    "topicsCovered": "Storage Classes, Scope & Preprocessors (Practice Set 3)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 62,
    "name": "DPP 01 - Computer Organization (Cache Memory - Part 1)",
    "testLabel": "DPP 01",
    "testType": "DPP",
    "bracket": "Cache Memory - Part 1",
    "subject": "coa",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 10,
    "topicsCovered": "Cache Memory (Practice Set 1)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 63,
    "name": "DPP 02 - Computer Organization (Cache Memory - Part 2)",
    "testLabel": "DPP 02",
    "testType": "DPP",
    "bracket": "Cache Memory - Part 2",
    "subject": "coa",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 10,
    "topicsCovered": "Cache Memory (Practice Set 2)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 64,
    "name": "DPP 03 - Computer Organization (Cache Memory - Part 3)",
    "testLabel": "DPP 03",
    "testType": "DPP",
    "bracket": "Cache Memory - Part 3",
    "subject": "coa",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 10,
    "topicsCovered": "Cache Memory (Practice Set 3)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 65,
    "name": "DPP 04 - Computer Organization (Cache Memory - Part 4)",
    "testLabel": "DPP 04",
    "testType": "DPP",
    "bracket": "Cache Memory - Part 4",
    "subject": "coa",
    "date": "Nov 03, 2026",
    "duration": "15 Min",
    "totalMarks": 2,
    "topicsCovered": "Cache Memory (Practice Set 4)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 66,
    "name": "DPP 05 - Computer Organization (Floating Point Representation)",
    "testLabel": "DPP 05",
    "testType": "DPP",
    "bracket": "Floating Point Representation",
    "subject": "coa",
    "date": "Nov 03, 2026",
    "duration": "15 Min",
    "totalMarks": 4,
    "topicsCovered": "Floating Point Representation Practice Questions"
  },
  {
    "series": "cse-dpp-2027",
    "order": 67,
    "name": "DPP 06 - Computer Organization (Secondary Memory, I/O Interface & DMA)",
    "testLabel": "DPP 06",
    "testType": "DPP",
    "bracket": "Secondary Memory, I/O Interface & DMA",
    "subject": "coa",
    "date": "Nov 03, 2026",
    "duration": "24 Min",
    "totalMarks": 8,
    "topicsCovered": "Secondary Memory, I/O Interface & DMA Practice Questions"
  },
  {
    "series": "cse-dpp-2027",
    "order": 68,
    "name": "DPP 07 - Computer Organization (Machine Instruction & Addressing Modes - Part 1)",
    "testLabel": "DPP 07",
    "testType": "DPP",
    "bracket": "Machine Instruction & Addressing Modes - Part 1",
    "subject": "coa",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 12,
    "topicsCovered": "Machine Instruction & Addressing Modes (Practice Set 1)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 69,
    "name": "DPP 08 - Computer Organization (Machine Instruction & Addressing Modes - Part 2)",
    "testLabel": "DPP 08",
    "testType": "DPP",
    "bracket": "Machine Instruction & Addressing Modes - Part 2",
    "subject": "coa",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 11,
    "topicsCovered": "Machine Instruction & Addressing Modes (Practice Set 2)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 70,
    "name": "DPP 09 - Computer Organization (Machine Instruction & Addressing Modes - Part 3)",
    "testLabel": "DPP 09",
    "testType": "DPP",
    "bracket": "Machine Instruction & Addressing Modes - Part 3",
    "subject": "coa",
    "date": "Nov 03, 2026",
    "duration": "15 Min",
    "totalMarks": 2,
    "topicsCovered": "Machine Instruction & Addressing Modes (Practice Set 3)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 71,
    "name": "DPP 10 - Computer Organization (Pipelining - Part 1)",
    "testLabel": "DPP 10",
    "testType": "DPP",
    "bracket": "Pipelining - Part 1",
    "subject": "coa",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 10,
    "topicsCovered": "Pipelining (Practice Set 1)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 72,
    "name": "DPP 11 - Computer Organization (Pipelining - Part 2)",
    "testLabel": "DPP 11",
    "testType": "DPP",
    "bracket": "Pipelining - Part 2",
    "subject": "coa",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 14,
    "topicsCovered": "Pipelining (Practice Set 2)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 73,
    "name": "DPP 12 - Computer Organization (Pipelining - Part 3)",
    "testLabel": "DPP 12",
    "testType": "DPP",
    "bracket": "Pipelining - Part 3",
    "subject": "coa",
    "date": "Nov 03, 2026",
    "duration": "15 Min",
    "totalMarks": 3,
    "topicsCovered": "Pipelining (Practice Set 3)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 74,
    "name": "DPP 01 - Compiler Design (Lexical Analysis & Compiler Basics - Part 1)",
    "testLabel": "DPP 01",
    "testType": "DPP",
    "bracket": "Lexical Analysis & Compiler Basics - Part 1",
    "subject": "cd",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 12,
    "topicsCovered": "Lexical Analysis & Compiler Basics (Practice Set 1)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 75,
    "name": "DPP 02 - Compiler Design (Lexical Analysis & Compiler Basics - Part 2)",
    "testLabel": "DPP 02",
    "testType": "DPP",
    "bracket": "Lexical Analysis & Compiler Basics - Part 2",
    "subject": "cd",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 14,
    "topicsCovered": "Lexical Analysis & Compiler Basics (Practice Set 2)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 76,
    "name": "DPP 03 - Compiler Design (Lexical Analysis & Compiler Basics - Part 3)",
    "testLabel": "DPP 03",
    "testType": "DPP",
    "bracket": "Lexical Analysis & Compiler Basics - Part 3",
    "subject": "cd",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 11,
    "topicsCovered": "Lexical Analysis & Compiler Basics (Practice Set 3)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 77,
    "name": "DPP 04 - Compiler Design (Lexical Analysis & Compiler Basics - Part 4)",
    "testLabel": "DPP 04",
    "testType": "DPP",
    "bracket": "Lexical Analysis & Compiler Basics - Part 4",
    "subject": "cd",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 10,
    "topicsCovered": "Lexical Analysis & Compiler Basics (Practice Set 4)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 78,
    "name": "DPP 05 - Compiler Design (Lexical Analysis & Compiler Basics - Part 5)",
    "testLabel": "DPP 05",
    "testType": "DPP",
    "bracket": "Lexical Analysis & Compiler Basics - Part 5",
    "subject": "cd",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 10,
    "topicsCovered": "Lexical Analysis & Compiler Basics (Practice Set 5)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 79,
    "name": "DPP 06 - Compiler Design (Lexical Analysis & Compiler Basics - Part 6)",
    "testLabel": "DPP 06",
    "testType": "DPP",
    "bracket": "Lexical Analysis & Compiler Basics - Part 6",
    "subject": "cd",
    "date": "Nov 03, 2026",
    "duration": "15 Min",
    "totalMarks": 1,
    "topicsCovered": "Lexical Analysis & Compiler Basics (Practice Set 6)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 80,
    "name": "DPP 07 - Compiler Design (Grammars & Top-Down Parsing (LL(1 - Part 1)",
    "testLabel": "DPP 07",
    "testType": "DPP",
    "bracket": "Grammars & Top-Down Parsing (LL(1 - Part 1",
    "subject": "cd",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 12,
    "topicsCovered": "Grammars & Top-Down Parsing (LL(1 (Practice Set 1)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 81,
    "name": "DPP 08 - Compiler Design (Grammars & Top-Down Parsing (LL(1 - Part 2)",
    "testLabel": "DPP 08",
    "testType": "DPP",
    "bracket": "Grammars & Top-Down Parsing (LL(1 - Part 2",
    "subject": "cd",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 11,
    "topicsCovered": "Grammars & Top-Down Parsing (LL(1 (Practice Set 2)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 82,
    "name": "DPP 09 - Compiler Design (Grammars & Top-Down Parsing (LL(1 - Part 3)",
    "testLabel": "DPP 09",
    "testType": "DPP",
    "bracket": "Grammars & Top-Down Parsing (LL(1 - Part 3",
    "subject": "cd",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 13,
    "topicsCovered": "Grammars & Top-Down Parsing (LL(1 (Practice Set 3)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 83,
    "name": "DPP 10 - Compiler Design (Grammars & Top-Down Parsing (LL(1 - Part 4)",
    "testLabel": "DPP 10",
    "testType": "DPP",
    "bracket": "Grammars & Top-Down Parsing (LL(1 - Part 4",
    "subject": "cd",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 12,
    "topicsCovered": "Grammars & Top-Down Parsing (LL(1 (Practice Set 4)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 84,
    "name": "DPP 11 - Compiler Design (Grammars & Top-Down Parsing (LL(1 - Part 5)",
    "testLabel": "DPP 11",
    "testType": "DPP",
    "bracket": "Grammars & Top-Down Parsing (LL(1 - Part 5",
    "subject": "cd",
    "date": "Nov 03, 2026",
    "duration": "18 Min",
    "totalMarks": 8,
    "topicsCovered": "Grammars & Top-Down Parsing (LL(1 (Practice Set 5)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 85,
    "name": "DPP 12 - Compiler Design (Bottom-Up Parsing (LR Parsers - Part 1)",
    "testLabel": "DPP 12",
    "testType": "DPP",
    "bracket": "Bottom-Up Parsing (LR Parsers - Part 1",
    "subject": "cd",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 11,
    "topicsCovered": "Bottom-Up Parsing (LR Parsers (Practice Set 1)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 86,
    "name": "DPP 13 - Compiler Design (Bottom-Up Parsing (LR Parsers - Part 2)",
    "testLabel": "DPP 13",
    "testType": "DPP",
    "bracket": "Bottom-Up Parsing (LR Parsers - Part 2",
    "subject": "cd",
    "date": "Nov 03, 2026",
    "duration": "15 Min",
    "totalMarks": 2,
    "topicsCovered": "Bottom-Up Parsing (LR Parsers (Practice Set 2)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 87,
    "name": "DPP 14 - Compiler Design (Syntax Directed Translation (SDT - Part 1)",
    "testLabel": "DPP 14",
    "testType": "DPP",
    "bracket": "Syntax Directed Translation (SDT - Part 1",
    "subject": "cd",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 11,
    "topicsCovered": "Syntax Directed Translation (SDT (Practice Set 1)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 88,
    "name": "DPP 15 - Compiler Design (Syntax Directed Translation (SDT - Part 2)",
    "testLabel": "DPP 15",
    "testType": "DPP",
    "bracket": "Syntax Directed Translation (SDT - Part 2",
    "subject": "cd",
    "date": "Nov 03, 2026",
    "duration": "24 Min",
    "totalMarks": 8,
    "topicsCovered": "Syntax Directed Translation (SDT (Practice Set 2)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 89,
    "name": "DPP 16 - Compiler Design (Intermediate Code Generation & Basic Blocks - Part 1)",
    "testLabel": "DPP 16",
    "testType": "DPP",
    "bracket": "Intermediate Code Generation & Basic Blocks - Part 1",
    "subject": "cd",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 10,
    "topicsCovered": "Intermediate Code Generation & Basic Blocks (Practice Set 1)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 90,
    "name": "DPP 17 - Compiler Design (Intermediate Code Generation & Basic Blocks - Part 2)",
    "testLabel": "DPP 17",
    "testType": "DPP",
    "bracket": "Intermediate Code Generation & Basic Blocks - Part 2",
    "subject": "cd",
    "date": "Nov 03, 2026",
    "duration": "27 Min",
    "totalMarks": 9,
    "topicsCovered": "Intermediate Code Generation & Basic Blocks (Practice Set 2)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 91,
    "name": "DPP 18 - Compiler Design (Code Optimization & Data Flow Analysis - Part 1)",
    "testLabel": "DPP 18",
    "testType": "DPP",
    "bracket": "Code Optimization & Data Flow Analysis - Part 1",
    "subject": "cd",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 10,
    "topicsCovered": "Code Optimization & Data Flow Analysis (Practice Set 1)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 92,
    "name": "DPP 19 - Compiler Design (Code Optimization & Data Flow Analysis - Part 2)",
    "testLabel": "DPP 19",
    "testType": "DPP",
    "bracket": "Code Optimization & Data Flow Analysis - Part 2",
    "subject": "cd",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 11,
    "topicsCovered": "Code Optimization & Data Flow Analysis (Practice Set 2)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 93,
    "name": "DPP 20 - Compiler Design (Code Optimization & Data Flow Analysis - Part 3)",
    "testLabel": "DPP 20",
    "testType": "DPP",
    "bracket": "Code Optimization & Data Flow Analysis - Part 3",
    "subject": "cd",
    "date": "Nov 03, 2026",
    "duration": "15 Min",
    "totalMarks": 5,
    "topicsCovered": "Code Optimization & Data Flow Analysis (Practice Set 3)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 94,
    "name": "DPP 01 - DBMS (FD & Normalization - Part 1)",
    "testLabel": "DPP 01",
    "testType": "DPP",
    "bracket": "FD & Normalization - Part 1",
    "subject": "dbms",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 11,
    "topicsCovered": "FD & Normalization (Practice Set 1)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 95,
    "name": "DPP 02 - DBMS (FD & Normalization - Part 2)",
    "testLabel": "DPP 02",
    "testType": "DPP",
    "bracket": "FD & Normalization - Part 2",
    "subject": "dbms",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 12,
    "topicsCovered": "FD & Normalization (Practice Set 2)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 96,
    "name": "DPP 03 - DBMS (FD & Normalization - Part 3)",
    "testLabel": "DPP 03",
    "testType": "DPP",
    "bracket": "FD & Normalization - Part 3",
    "subject": "dbms",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 15,
    "topicsCovered": "FD & Normalization (Practice Set 3)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 97,
    "name": "DPP 04 - DBMS (FD & Normalization - Part 4)",
    "testLabel": "DPP 04",
    "testType": "DPP",
    "bracket": "FD & Normalization - Part 4",
    "subject": "dbms",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 11,
    "topicsCovered": "FD & Normalization (Practice Set 4)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 98,
    "name": "DPP 05 - DBMS (FD & Normalization - Part 5)",
    "testLabel": "DPP 05",
    "testType": "DPP",
    "bracket": "FD & Normalization - Part 5",
    "subject": "dbms",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 17,
    "topicsCovered": "FD & Normalization (Practice Set 5)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 99,
    "name": "DPP 06 - DBMS (FD & Normalization - Part 6)",
    "testLabel": "DPP 06",
    "testType": "DPP",
    "bracket": "FD & Normalization - Part 6",
    "subject": "dbms",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 11,
    "topicsCovered": "FD & Normalization (Practice Set 6)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 100,
    "name": "DPP 07 - DBMS (FD & Normalization - Part 7)",
    "testLabel": "DPP 07",
    "testType": "DPP",
    "bracket": "FD & Normalization - Part 7",
    "subject": "dbms",
    "date": "Nov 03, 2026",
    "duration": "15 Min",
    "totalMarks": 4,
    "topicsCovered": "FD & Normalization (Practice Set 7)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 101,
    "name": "DPP 08 - DBMS (Transaction & Concurrency Control - Part 1)",
    "testLabel": "DPP 08",
    "testType": "DPP",
    "bracket": "Transaction & Concurrency Control - Part 1",
    "subject": "dbms",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 10,
    "topicsCovered": "Transaction & Concurrency Control (Practice Set 1)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 102,
    "name": "DPP 09 - DBMS (Transaction & Concurrency Control - Part 2)",
    "testLabel": "DPP 09",
    "testType": "DPP",
    "bracket": "Transaction & Concurrency Control - Part 2",
    "subject": "dbms",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 15,
    "topicsCovered": "Transaction & Concurrency Control (Practice Set 2)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 103,
    "name": "DPP 10 - DBMS (Transaction & Concurrency Control - Part 3)",
    "testLabel": "DPP 10",
    "testType": "DPP",
    "bracket": "Transaction & Concurrency Control - Part 3",
    "subject": "dbms",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 13,
    "topicsCovered": "Transaction & Concurrency Control (Practice Set 3)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 104,
    "name": "DPP 11 - DBMS (Transaction & Concurrency Control - Part 4)",
    "testLabel": "DPP 11",
    "testType": "DPP",
    "bracket": "Transaction & Concurrency Control - Part 4",
    "subject": "dbms",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 12,
    "topicsCovered": "Transaction & Concurrency Control (Practice Set 4)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 105,
    "name": "DPP 12 - DBMS (Transaction & Concurrency Control - Part 5)",
    "testLabel": "DPP 12",
    "testType": "DPP",
    "bracket": "Transaction & Concurrency Control - Part 5",
    "subject": "dbms",
    "date": "Nov 03, 2026",
    "duration": "15 Min",
    "totalMarks": 6,
    "topicsCovered": "Transaction & Concurrency Control (Practice Set 5)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 106,
    "name": "DPP 13 - DBMS (ER Model - Part 1)",
    "testLabel": "DPP 13",
    "testType": "DPP",
    "bracket": "ER Model - Part 1",
    "subject": "dbms",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 11,
    "topicsCovered": "ER Model (Practice Set 1)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 107,
    "name": "DPP 14 - DBMS (ER Model - Part 2)",
    "testLabel": "DPP 14",
    "testType": "DPP",
    "bracket": "ER Model - Part 2",
    "subject": "dbms",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 11,
    "topicsCovered": "ER Model (Practice Set 2)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 108,
    "name": "DPP 15 - DBMS (ER Model - Part 3)",
    "testLabel": "DPP 15",
    "testType": "DPP",
    "bracket": "ER Model - Part 3",
    "subject": "dbms",
    "date": "Nov 03, 2026",
    "duration": "15 Min",
    "totalMarks": 4,
    "topicsCovered": "ER Model (Practice Set 3)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 109,
    "name": "DPP 16 - DBMS (Relational Algebra - Part 1)",
    "testLabel": "DPP 16",
    "testType": "DPP",
    "bracket": "Relational Algebra - Part 1",
    "subject": "dbms",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 10,
    "topicsCovered": "Relational Algebra (Practice Set 1)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 110,
    "name": "DPP 17 - DBMS (Relational Algebra - Part 2)",
    "testLabel": "DPP 17",
    "testType": "DPP",
    "bracket": "Relational Algebra - Part 2",
    "subject": "dbms",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 10,
    "topicsCovered": "Relational Algebra (Practice Set 2)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 111,
    "name": "DPP 18 - DBMS (Relational Algebra - Part 3)",
    "testLabel": "DPP 18",
    "testType": "DPP",
    "bracket": "Relational Algebra - Part 3",
    "subject": "dbms",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 10,
    "topicsCovered": "Relational Algebra (Practice Set 3)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 112,
    "name": "DPP 19 - DBMS (Relational Algebra - Part 4)",
    "testLabel": "DPP 19",
    "testType": "DPP",
    "bracket": "Relational Algebra - Part 4",
    "subject": "dbms",
    "date": "Nov 03, 2026",
    "duration": "15 Min",
    "totalMarks": 4,
    "topicsCovered": "Relational Algebra (Practice Set 4)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 113,
    "name": "DPP 20 - DBMS (SQL - Part 1)",
    "testLabel": "DPP 20",
    "testType": "DPP",
    "bracket": "SQL - Part 1",
    "subject": "dbms",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 12,
    "topicsCovered": "SQL (Practice Set 1)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 114,
    "name": "DPP 21 - DBMS (SQL - Part 2)",
    "testLabel": "DPP 21",
    "testType": "DPP",
    "bracket": "SQL - Part 2",
    "subject": "dbms",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 10,
    "topicsCovered": "SQL (Practice Set 2)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 115,
    "name": "DPP 22 - DBMS (SQL - Part 3)",
    "testLabel": "DPP 22",
    "testType": "DPP",
    "bracket": "SQL - Part 3",
    "subject": "dbms",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 10,
    "topicsCovered": "SQL (Practice Set 3)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 116,
    "name": "DPP 23 - DBMS (SQL - Part 4)",
    "testLabel": "DPP 23",
    "testType": "DPP",
    "bracket": "SQL - Part 4",
    "subject": "dbms",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 12,
    "topicsCovered": "SQL (Practice Set 4)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 117,
    "name": "DPP 24 - DBMS (SQL - Part 5)",
    "testLabel": "DPP 24",
    "testType": "DPP",
    "bracket": "SQL - Part 5",
    "subject": "dbms",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 17,
    "topicsCovered": "SQL (Practice Set 5)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 118,
    "name": "DPP 25 - DBMS (SQL - Part 6)",
    "testLabel": "DPP 25",
    "testType": "DPP",
    "bracket": "SQL - Part 6",
    "subject": "dbms",
    "date": "Nov 03, 2026",
    "duration": "24 Min",
    "totalMarks": 12,
    "topicsCovered": "SQL (Practice Set 6)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 119,
    "name": "DPP 26 - DBMS (File Organization & Indexing - Part 1)",
    "testLabel": "DPP 26",
    "testType": "DPP",
    "bracket": "File Organization & Indexing - Part 1",
    "subject": "dbms",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 11,
    "topicsCovered": "File Organization & Indexing (Practice Set 1)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 120,
    "name": "DPP 27 - DBMS (File Organization & Indexing - Part 2)",
    "testLabel": "DPP 27",
    "testType": "DPP",
    "bracket": "File Organization & Indexing - Part 2",
    "subject": "dbms",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 13,
    "topicsCovered": "File Organization & Indexing (Practice Set 2)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 121,
    "name": "DPP 28 - DBMS (File Organization & Indexing - Part 3)",
    "testLabel": "DPP 28",
    "testType": "DPP",
    "bracket": "File Organization & Indexing - Part 3",
    "subject": "dbms",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 11,
    "topicsCovered": "File Organization & Indexing (Practice Set 3)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 122,
    "name": "DPP 29 - DBMS (File Organization & Indexing - Part 4)",
    "testLabel": "DPP 29",
    "testType": "DPP",
    "bracket": "File Organization & Indexing - Part 4",
    "subject": "dbms",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 11,
    "topicsCovered": "File Organization & Indexing (Practice Set 4)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 123,
    "name": "DPP 30 - DBMS (File Organization & Indexing - Part 5)",
    "testLabel": "DPP 30",
    "testType": "DPP",
    "bracket": "File Organization & Indexing - Part 5",
    "subject": "dbms",
    "date": "Nov 03, 2026",
    "duration": "15 Min",
    "totalMarks": 2,
    "topicsCovered": "File Organization & Indexing (Practice Set 5)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 124,
    "name": "DPP 31 - DBMS (B Tree & B+ Tree - Part 1)",
    "testLabel": "DPP 31",
    "testType": "DPP",
    "bracket": "B Tree & B+ Tree - Part 1",
    "subject": "dbms",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 10,
    "topicsCovered": "B Tree & B+ Tree (Practice Set 1)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 125,
    "name": "DPP 32 - DBMS (B Tree & B+ Tree - Part 2)",
    "testLabel": "DPP 32",
    "testType": "DPP",
    "bracket": "B Tree & B+ Tree - Part 2",
    "subject": "dbms",
    "date": "Nov 03, 2026",
    "duration": "24 Min",
    "totalMarks": 8,
    "topicsCovered": "B Tree & B+ Tree (Practice Set 2)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 126,
    "name": "DPP 01 - Digital Logic (Number System - Part 1)",
    "testLabel": "DPP 01",
    "testType": "DPP",
    "bracket": "Number System - Part 1",
    "subject": "dl",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 10,
    "topicsCovered": "Number System (Practice Set 1)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 127,
    "name": "DPP 02 - Digital Logic (Number System - Part 2)",
    "testLabel": "DPP 02",
    "testType": "DPP",
    "bracket": "Number System - Part 2",
    "subject": "dl",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 11,
    "topicsCovered": "Number System (Practice Set 2)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 128,
    "name": "DPP 03 - Digital Logic (Number System - Part 3)",
    "testLabel": "DPP 03",
    "testType": "DPP",
    "bracket": "Number System - Part 3",
    "subject": "dl",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 10,
    "topicsCovered": "Number System (Practice Set 3)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 129,
    "name": "DPP 04 - Digital Logic (Number System - Part 4)",
    "testLabel": "DPP 04",
    "testType": "DPP",
    "bracket": "Number System - Part 4",
    "subject": "dl",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 10,
    "topicsCovered": "Number System (Practice Set 4)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 130,
    "name": "DPP 05 - Digital Logic (Number System - Part 5)",
    "testLabel": "DPP 05",
    "testType": "DPP",
    "bracket": "Number System - Part 5",
    "subject": "dl",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 10,
    "topicsCovered": "Number System (Practice Set 5)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 131,
    "name": "DPP 06 - Digital Logic (Number System - Part 6)",
    "testLabel": "DPP 06",
    "testType": "DPP",
    "bracket": "Number System - Part 6",
    "subject": "dl",
    "date": "Nov 03, 2026",
    "duration": "15 Min",
    "totalMarks": 4,
    "topicsCovered": "Number System (Practice Set 6)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 132,
    "name": "DPP 07 - Digital Logic (Boolean Algebra - Part 1)",
    "testLabel": "DPP 07",
    "testType": "DPP",
    "bracket": "Boolean Algebra - Part 1",
    "subject": "dl",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 10,
    "topicsCovered": "Boolean Algebra (Practice Set 1)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 133,
    "name": "DPP 08 - Digital Logic (Boolean Algebra - Part 2)",
    "testLabel": "DPP 08",
    "testType": "DPP",
    "bracket": "Boolean Algebra - Part 2",
    "subject": "dl",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 11,
    "topicsCovered": "Boolean Algebra (Practice Set 2)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 134,
    "name": "DPP 09 - Digital Logic (Boolean Algebra - Part 3)",
    "testLabel": "DPP 09",
    "testType": "DPP",
    "bracket": "Boolean Algebra - Part 3",
    "subject": "dl",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 10,
    "topicsCovered": "Boolean Algebra (Practice Set 3)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 135,
    "name": "DPP 10 - Digital Logic (Boolean Algebra - Part 4)",
    "testLabel": "DPP 10",
    "testType": "DPP",
    "bracket": "Boolean Algebra - Part 4",
    "subject": "dl",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 11,
    "topicsCovered": "Boolean Algebra (Practice Set 4)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 136,
    "name": "DPP 11 - Digital Logic (Boolean Algebra - Part 5)",
    "testLabel": "DPP 11",
    "testType": "DPP",
    "bracket": "Boolean Algebra - Part 5",
    "subject": "dl",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 10,
    "topicsCovered": "Boolean Algebra (Practice Set 5)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 137,
    "name": "DPP 12 - Digital Logic (Boolean Algebra - Part 6)",
    "testLabel": "DPP 12",
    "testType": "DPP",
    "bracket": "Boolean Algebra - Part 6",
    "subject": "dl",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 11,
    "topicsCovered": "Boolean Algebra (Practice Set 6)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 138,
    "name": "DPP 13 - Digital Logic (Boolean Algebra - Part 7)",
    "testLabel": "DPP 13",
    "testType": "DPP",
    "bracket": "Boolean Algebra - Part 7",
    "subject": "dl",
    "date": "Nov 03, 2026",
    "duration": "18 Min",
    "totalMarks": 7,
    "topicsCovered": "Boolean Algebra (Practice Set 7)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 139,
    "name": "DPP 14 - Digital Logic (Combinational Circuit - Part 1)",
    "testLabel": "DPP 14",
    "testType": "DPP",
    "bracket": "Combinational Circuit - Part 1",
    "subject": "dl",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 10,
    "topicsCovered": "Combinational Circuit (Practice Set 1)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 140,
    "name": "DPP 15 - Digital Logic (Combinational Circuit - Part 2)",
    "testLabel": "DPP 15",
    "testType": "DPP",
    "bracket": "Combinational Circuit - Part 2",
    "subject": "dl",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 10,
    "topicsCovered": "Combinational Circuit (Practice Set 2)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 141,
    "name": "DPP 16 - Digital Logic (Combinational Circuit - Part 3)",
    "testLabel": "DPP 16",
    "testType": "DPP",
    "bracket": "Combinational Circuit - Part 3",
    "subject": "dl",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 10,
    "topicsCovered": "Combinational Circuit (Practice Set 3)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 142,
    "name": "DPP 17 - Digital Logic (Combinational Circuit - Part 4)",
    "testLabel": "DPP 17",
    "testType": "DPP",
    "bracket": "Combinational Circuit - Part 4",
    "subject": "dl",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 11,
    "topicsCovered": "Combinational Circuit (Practice Set 4)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 143,
    "name": "DPP 18 - Digital Logic (Combinational Circuit - Part 5)",
    "testLabel": "DPP 18",
    "testType": "DPP",
    "bracket": "Combinational Circuit - Part 5",
    "subject": "dl",
    "date": "Nov 03, 2026",
    "duration": "18 Min",
    "totalMarks": 6,
    "topicsCovered": "Combinational Circuit (Practice Set 5)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 144,
    "name": "DPP 19 - Digital Logic (Sequential Circuit - Part 1)",
    "testLabel": "DPP 19",
    "testType": "DPP",
    "bracket": "Sequential Circuit - Part 1",
    "subject": "dl",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 10,
    "topicsCovered": "Sequential Circuit (Practice Set 1)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 145,
    "name": "DPP 20 - Digital Logic (Sequential Circuit - Part 2)",
    "testLabel": "DPP 20",
    "testType": "DPP",
    "bracket": "Sequential Circuit - Part 2",
    "subject": "dl",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 10,
    "topicsCovered": "Sequential Circuit (Practice Set 2)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 146,
    "name": "DPP 21 - Digital Logic (Sequential Circuit - Part 3)",
    "testLabel": "DPP 21",
    "testType": "DPP",
    "bracket": "Sequential Circuit - Part 3",
    "subject": "dl",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 10,
    "topicsCovered": "Sequential Circuit (Practice Set 3)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 147,
    "name": "DPP 22 - Digital Logic (Sequential Circuit - Part 4)",
    "testLabel": "DPP 22",
    "testType": "DPP",
    "bracket": "Sequential Circuit - Part 4",
    "subject": "dl",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 10,
    "topicsCovered": "Sequential Circuit (Practice Set 4)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 148,
    "name": "DPP 23 - Digital Logic (Sequential Circuit - Part 5)",
    "testLabel": "DPP 23",
    "testType": "DPP",
    "bracket": "Sequential Circuit - Part 5",
    "subject": "dl",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 10,
    "topicsCovered": "Sequential Circuit (Practice Set 5)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 149,
    "name": "DPP 24 - Digital Logic (Sequential Circuit - Part 6)",
    "testLabel": "DPP 24",
    "testType": "DPP",
    "bracket": "Sequential Circuit - Part 6",
    "subject": "dl",
    "date": "Nov 03, 2026",
    "duration": "15 Min",
    "totalMarks": 5,
    "topicsCovered": "Sequential Circuit (Practice Set 6)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 150,
    "name": "DPP 01 - Discrete Mathematics (Mathematical Logic - Part 1)",
    "testLabel": "DPP 01",
    "testType": "DPP",
    "bracket": "Mathematical Logic - Part 1",
    "subject": "dm",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 11,
    "topicsCovered": "Mathematical Logic (Practice Set 1)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 151,
    "name": "DPP 02 - Discrete Mathematics (Mathematical Logic - Part 2)",
    "testLabel": "DPP 02",
    "testType": "DPP",
    "bracket": "Mathematical Logic - Part 2",
    "subject": "dm",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 10,
    "topicsCovered": "Mathematical Logic (Practice Set 2)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 152,
    "name": "DPP 03 - Discrete Mathematics (Mathematical Logic - Part 3)",
    "testLabel": "DPP 03",
    "testType": "DPP",
    "bracket": "Mathematical Logic - Part 3",
    "subject": "dm",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 11,
    "topicsCovered": "Mathematical Logic (Practice Set 3)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 153,
    "name": "DPP 04 - Discrete Mathematics (Mathematical Logic - Part 4)",
    "testLabel": "DPP 04",
    "testType": "DPP",
    "bracket": "Mathematical Logic - Part 4",
    "subject": "dm",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 11,
    "topicsCovered": "Mathematical Logic (Practice Set 4)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 154,
    "name": "DPP 05 - Discrete Mathematics (Mathematical Logic - Part 5)",
    "testLabel": "DPP 05",
    "testType": "DPP",
    "bracket": "Mathematical Logic - Part 5",
    "subject": "dm",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 13,
    "topicsCovered": "Mathematical Logic (Practice Set 5)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 155,
    "name": "DPP 06 - Discrete Mathematics (Mathematical Logic - Part 6)",
    "testLabel": "DPP 06",
    "testType": "DPP",
    "bracket": "Mathematical Logic - Part 6",
    "subject": "dm",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 13,
    "topicsCovered": "Mathematical Logic (Practice Set 6)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 156,
    "name": "DPP 07 - Discrete Mathematics (Mathematical Logic - Part 7)",
    "testLabel": "DPP 07",
    "testType": "DPP",
    "bracket": "Mathematical Logic - Part 7",
    "subject": "dm",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 14,
    "topicsCovered": "Mathematical Logic (Practice Set 7)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 157,
    "name": "DPP 08 - Discrete Mathematics (Mathematical Logic - Part 8)",
    "testLabel": "DPP 08",
    "testType": "DPP",
    "bracket": "Mathematical Logic - Part 8",
    "subject": "dm",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 11,
    "topicsCovered": "Mathematical Logic (Practice Set 8)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 158,
    "name": "DPP 09 - Discrete Mathematics (Mathematical Logic - Part 9)",
    "testLabel": "DPP 09",
    "testType": "DPP",
    "bracket": "Mathematical Logic - Part 9",
    "subject": "dm",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 11,
    "topicsCovered": "Mathematical Logic (Practice Set 9)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 159,
    "name": "DPP 10 - Discrete Mathematics (Mathematical Logic - Part 10)",
    "testLabel": "DPP 10",
    "testType": "DPP",
    "bracket": "Mathematical Logic - Part 10",
    "subject": "dm",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 14,
    "topicsCovered": "Mathematical Logic (Practice Set 10)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 160,
    "name": "DPP 11 - Discrete Mathematics (Mathematical Logic - Part 11)",
    "testLabel": "DPP 11",
    "testType": "DPP",
    "bracket": "Mathematical Logic - Part 11",
    "subject": "dm",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 13,
    "topicsCovered": "Mathematical Logic (Practice Set 11)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 161,
    "name": "DPP 12 - Discrete Mathematics (Mathematical Logic - Part 12)",
    "testLabel": "DPP 12",
    "testType": "DPP",
    "bracket": "Mathematical Logic - Part 12",
    "subject": "dm",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 14,
    "topicsCovered": "Mathematical Logic (Practice Set 12)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 162,
    "name": "DPP 13 - Discrete Mathematics (Mathematical Logic - Part 13)",
    "testLabel": "DPP 13",
    "testType": "DPP",
    "bracket": "Mathematical Logic - Part 13",
    "subject": "dm",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 10,
    "topicsCovered": "Mathematical Logic (Practice Set 13)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 163,
    "name": "DPP 14 - Discrete Mathematics (Mathematical Logic - Part 14)",
    "testLabel": "DPP 14",
    "testType": "DPP",
    "bracket": "Mathematical Logic - Part 14",
    "subject": "dm",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 11,
    "topicsCovered": "Mathematical Logic (Practice Set 14)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 164,
    "name": "DPP 15 - Discrete Mathematics (Mathematical Logic - Part 15)",
    "testLabel": "DPP 15",
    "testType": "DPP",
    "bracket": "Mathematical Logic - Part 15",
    "subject": "dm",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 13,
    "topicsCovered": "Mathematical Logic (Practice Set 15)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 165,
    "name": "DPP 16 - Discrete Mathematics (Mathematical Logic - Part 16)",
    "testLabel": "DPP 16",
    "testType": "DPP",
    "bracket": "Mathematical Logic - Part 16",
    "subject": "dm",
    "date": "Nov 03, 2026",
    "duration": "15 Min",
    "totalMarks": 3,
    "topicsCovered": "Mathematical Logic (Practice Set 16)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 166,
    "name": "DPP 17 - Discrete Mathematics (Set Theory, Relations & Functions - Part 1)",
    "testLabel": "DPP 17",
    "testType": "DPP",
    "bracket": "Set Theory, Relations & Functions - Part 1",
    "subject": "dm",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 14,
    "topicsCovered": "Set Theory, Relations & Functions (Practice Set 1)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 167,
    "name": "DPP 18 - Discrete Mathematics (Set Theory, Relations & Functions - Part 2)",
    "testLabel": "DPP 18",
    "testType": "DPP",
    "bracket": "Set Theory, Relations & Functions - Part 2",
    "subject": "dm",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 10,
    "topicsCovered": "Set Theory, Relations & Functions (Practice Set 2)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 168,
    "name": "DPP 19 - Discrete Mathematics (Set Theory, Relations & Functions - Part 3)",
    "testLabel": "DPP 19",
    "testType": "DPP",
    "bracket": "Set Theory, Relations & Functions - Part 3",
    "subject": "dm",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 12,
    "topicsCovered": "Set Theory, Relations & Functions (Practice Set 3)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 169,
    "name": "DPP 20 - Discrete Mathematics (Set Theory, Relations & Functions - Part 4)",
    "testLabel": "DPP 20",
    "testType": "DPP",
    "bracket": "Set Theory, Relations & Functions - Part 4",
    "subject": "dm",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 11,
    "topicsCovered": "Set Theory, Relations & Functions (Practice Set 4)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 170,
    "name": "DPP 21 - Discrete Mathematics (Set Theory, Relations & Functions - Part 5)",
    "testLabel": "DPP 21",
    "testType": "DPP",
    "bracket": "Set Theory, Relations & Functions - Part 5",
    "subject": "dm",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 10,
    "topicsCovered": "Set Theory, Relations & Functions (Practice Set 5)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 171,
    "name": "DPP 22 - Discrete Mathematics (Set Theory, Relations & Functions - Part 6)",
    "testLabel": "DPP 22",
    "testType": "DPP",
    "bracket": "Set Theory, Relations & Functions - Part 6",
    "subject": "dm",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 10,
    "topicsCovered": "Set Theory, Relations & Functions (Practice Set 6)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 172,
    "name": "DPP 23 - Discrete Mathematics (Set Theory, Relations & Functions - Part 7)",
    "testLabel": "DPP 23",
    "testType": "DPP",
    "bracket": "Set Theory, Relations & Functions - Part 7",
    "subject": "dm",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 10,
    "topicsCovered": "Set Theory, Relations & Functions (Practice Set 7)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 173,
    "name": "DPP 24 - Discrete Mathematics (Set Theory, Relations & Functions - Part 8)",
    "testLabel": "DPP 24",
    "testType": "DPP",
    "bracket": "Set Theory, Relations & Functions - Part 8",
    "subject": "dm",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 10,
    "topicsCovered": "Set Theory, Relations & Functions (Practice Set 8)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 174,
    "name": "DPP 25 - Discrete Mathematics (Set Theory, Relations & Functions - Part 9)",
    "testLabel": "DPP 25",
    "testType": "DPP",
    "bracket": "Set Theory, Relations & Functions - Part 9",
    "subject": "dm",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 10,
    "topicsCovered": "Set Theory, Relations & Functions (Practice Set 9)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 175,
    "name": "DPP 26 - Discrete Mathematics (Set Theory, Relations & Functions - Part 10)",
    "testLabel": "DPP 26",
    "testType": "DPP",
    "bracket": "Set Theory, Relations & Functions - Part 10",
    "subject": "dm",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 12,
    "topicsCovered": "Set Theory, Relations & Functions (Practice Set 10)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 176,
    "name": "DPP 27 - Discrete Mathematics (Set Theory, Relations & Functions - Part 11)",
    "testLabel": "DPP 27",
    "testType": "DPP",
    "bracket": "Set Theory, Relations & Functions - Part 11",
    "subject": "dm",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 10,
    "topicsCovered": "Set Theory, Relations & Functions (Practice Set 11)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 177,
    "name": "DPP 28 - Discrete Mathematics (Set Theory, Relations & Functions - Part 12)",
    "testLabel": "DPP 28",
    "testType": "DPP",
    "bracket": "Set Theory, Relations & Functions - Part 12",
    "subject": "dm",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 10,
    "topicsCovered": "Set Theory, Relations & Functions (Practice Set 12)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 178,
    "name": "DPP 29 - Discrete Mathematics (Set Theory, Relations & Functions - Part 13)",
    "testLabel": "DPP 29",
    "testType": "DPP",
    "bracket": "Set Theory, Relations & Functions - Part 13",
    "subject": "dm",
    "date": "Nov 03, 2026",
    "duration": "27 Min",
    "totalMarks": 11,
    "topicsCovered": "Set Theory, Relations & Functions (Practice Set 13)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 179,
    "name": "DPP 30 - Discrete Mathematics (Combinatorics - Part 1)",
    "testLabel": "DPP 30",
    "testType": "DPP",
    "bracket": "Combinatorics - Part 1",
    "subject": "dm",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 10,
    "topicsCovered": "Combinatorics (Practice Set 1)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 180,
    "name": "DPP 31 - Discrete Mathematics (Combinatorics - Part 2)",
    "testLabel": "DPP 31",
    "testType": "DPP",
    "bracket": "Combinatorics - Part 2",
    "subject": "dm",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 10,
    "topicsCovered": "Combinatorics (Practice Set 2)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 181,
    "name": "DPP 32 - Discrete Mathematics (Combinatorics - Part 3)",
    "testLabel": "DPP 32",
    "testType": "DPP",
    "bracket": "Combinatorics - Part 3",
    "subject": "dm",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 10,
    "topicsCovered": "Combinatorics (Practice Set 3)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 182,
    "name": "DPP 33 - Discrete Mathematics (Combinatorics - Part 4)",
    "testLabel": "DPP 33",
    "testType": "DPP",
    "bracket": "Combinatorics - Part 4",
    "subject": "dm",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 10,
    "topicsCovered": "Combinatorics (Practice Set 4)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 183,
    "name": "DPP 34 - Discrete Mathematics (Combinatorics - Part 5)",
    "testLabel": "DPP 34",
    "testType": "DPP",
    "bracket": "Combinatorics - Part 5",
    "subject": "dm",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 10,
    "topicsCovered": "Combinatorics (Practice Set 5)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 184,
    "name": "DPP 35 - Discrete Mathematics (Combinatorics - Part 6)",
    "testLabel": "DPP 35",
    "testType": "DPP",
    "bracket": "Combinatorics - Part 6",
    "subject": "dm",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 10,
    "topicsCovered": "Combinatorics (Practice Set 6)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 185,
    "name": "DPP 36 - Discrete Mathematics (Combinatorics - Part 7)",
    "testLabel": "DPP 36",
    "testType": "DPP",
    "bracket": "Combinatorics - Part 7",
    "subject": "dm",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 10,
    "topicsCovered": "Combinatorics (Practice Set 7)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 186,
    "name": "DPP 37 - Discrete Mathematics (Combinatorics - Part 8)",
    "testLabel": "DPP 37",
    "testType": "DPP",
    "bracket": "Combinatorics - Part 8",
    "subject": "dm",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 10,
    "topicsCovered": "Combinatorics (Practice Set 8)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 187,
    "name": "DPP 38 - Discrete Mathematics (Combinatorics - Part 9)",
    "testLabel": "DPP 38",
    "testType": "DPP",
    "bracket": "Combinatorics - Part 9",
    "subject": "dm",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 10,
    "topicsCovered": "Combinatorics (Practice Set 9)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 188,
    "name": "DPP 39 - Discrete Mathematics (Combinatorics - Part 10)",
    "testLabel": "DPP 39",
    "testType": "DPP",
    "bracket": "Combinatorics - Part 10",
    "subject": "dm",
    "date": "Nov 03, 2026",
    "duration": "15 Min",
    "totalMarks": 4,
    "topicsCovered": "Combinatorics (Practice Set 10)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 189,
    "name": "DPP 40 - Discrete Mathematics (Graph Theory - Part 1)",
    "testLabel": "DPP 40",
    "testType": "DPP",
    "bracket": "Graph Theory - Part 1",
    "subject": "dm",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 11,
    "topicsCovered": "Graph Theory (Practice Set 1)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 190,
    "name": "DPP 41 - Discrete Mathematics (Graph Theory - Part 2)",
    "testLabel": "DPP 41",
    "testType": "DPP",
    "bracket": "Graph Theory - Part 2",
    "subject": "dm",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 10,
    "topicsCovered": "Graph Theory (Practice Set 2)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 191,
    "name": "DPP 42 - Discrete Mathematics (Graph Theory - Part 3)",
    "testLabel": "DPP 42",
    "testType": "DPP",
    "bracket": "Graph Theory - Part 3",
    "subject": "dm",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 10,
    "topicsCovered": "Graph Theory (Practice Set 3)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 192,
    "name": "DPP 43 - Discrete Mathematics (Graph Theory - Part 4)",
    "testLabel": "DPP 43",
    "testType": "DPP",
    "bracket": "Graph Theory - Part 4",
    "subject": "dm",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 10,
    "topicsCovered": "Graph Theory (Practice Set 4)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 193,
    "name": "DPP 44 - Discrete Mathematics (Graph Theory - Part 5)",
    "testLabel": "DPP 44",
    "testType": "DPP",
    "bracket": "Graph Theory - Part 5",
    "subject": "dm",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 11,
    "topicsCovered": "Graph Theory (Practice Set 5)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 194,
    "name": "DPP 45 - Discrete Mathematics (Graph Theory - Part 6)",
    "testLabel": "DPP 45",
    "testType": "DPP",
    "bracket": "Graph Theory - Part 6",
    "subject": "dm",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 10,
    "topicsCovered": "Graph Theory (Practice Set 6)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 195,
    "name": "DPP 46 - Discrete Mathematics (Graph Theory - Part 7)",
    "testLabel": "DPP 46",
    "testType": "DPP",
    "bracket": "Graph Theory - Part 7",
    "subject": "dm",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 10,
    "topicsCovered": "Graph Theory (Practice Set 7)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 196,
    "name": "DPP 47 - Discrete Mathematics (Graph Theory - Part 8)",
    "testLabel": "DPP 47",
    "testType": "DPP",
    "bracket": "Graph Theory - Part 8",
    "subject": "dm",
    "date": "Nov 03, 2026",
    "duration": "15 Min",
    "totalMarks": 3,
    "topicsCovered": "Graph Theory (Practice Set 8)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 197,
    "name": "DPP 48 - Discrete Mathematics (Group Theory & Abstract Algebra - Part 1)",
    "testLabel": "DPP 48",
    "testType": "DPP",
    "bracket": "Group Theory & Abstract Algebra - Part 1",
    "subject": "dm",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 10,
    "topicsCovered": "Group Theory & Abstract Algebra (Practice Set 1)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 198,
    "name": "DPP 49 - Discrete Mathematics (Group Theory & Abstract Algebra - Part 2)",
    "testLabel": "DPP 49",
    "testType": "DPP",
    "bracket": "Group Theory & Abstract Algebra - Part 2",
    "subject": "dm",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 10,
    "topicsCovered": "Group Theory & Abstract Algebra (Practice Set 2)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 199,
    "name": "DPP 50 - Discrete Mathematics (Group Theory & Abstract Algebra - Part 3)",
    "testLabel": "DPP 50",
    "testType": "DPP",
    "bracket": "Group Theory & Abstract Algebra - Part 3",
    "subject": "dm",
    "date": "Nov 03, 2026",
    "duration": "15 Min",
    "totalMarks": 2,
    "topicsCovered": "Group Theory & Abstract Algebra (Practice Set 3)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 200,
    "name": "DPP 51 - Discrete Mathematics (Mathematical Foundations)",
    "testLabel": "DPP 51",
    "testType": "DPP",
    "bracket": "Mathematical Foundations",
    "subject": "dm",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 11,
    "topicsCovered": "Mathematical Foundations Practice Questions"
  },
  {
    "series": "cse-dpp-2027",
    "order": 201,
    "name": "DPP 01 - Data Structures (Arrays & Linked Lists - Part 1)",
    "testLabel": "DPP 01",
    "testType": "DPP",
    "bracket": "Arrays & Linked Lists - Part 1",
    "subject": "ds",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 10,
    "topicsCovered": "Arrays & Linked Lists (Practice Set 1)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 202,
    "name": "DPP 02 - Data Structures (Arrays & Linked Lists - Part 2)",
    "testLabel": "DPP 02",
    "testType": "DPP",
    "bracket": "Arrays & Linked Lists - Part 2",
    "subject": "ds",
    "date": "Nov 03, 2026",
    "duration": "15 Min",
    "totalMarks": 7,
    "topicsCovered": "Arrays & Linked Lists (Practice Set 2)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 203,
    "name": "DPP 03 - Data Structures (Stacks, Queues & Expressions - Part 1)",
    "testLabel": "DPP 03",
    "testType": "DPP",
    "bracket": "Stacks, Queues & Expressions - Part 1",
    "subject": "ds",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 11,
    "topicsCovered": "Stacks, Queues & Expressions (Practice Set 1)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 204,
    "name": "DPP 04 - Data Structures (Stacks, Queues & Expressions - Part 2)",
    "testLabel": "DPP 04",
    "testType": "DPP",
    "bracket": "Stacks, Queues & Expressions - Part 2",
    "subject": "ds",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 11,
    "topicsCovered": "Stacks, Queues & Expressions (Practice Set 2)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 205,
    "name": "DPP 05 - Data Structures (Stacks, Queues & Expressions - Part 3)",
    "testLabel": "DPP 05",
    "testType": "DPP",
    "bracket": "Stacks, Queues & Expressions - Part 3",
    "subject": "ds",
    "date": "Nov 03, 2026",
    "duration": "15 Min",
    "totalMarks": 2,
    "topicsCovered": "Stacks, Queues & Expressions (Practice Set 3)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 206,
    "name": "DPP 06 - Data Structures (Binary Trees & Tree Traversals)",
    "testLabel": "DPP 06",
    "testType": "DPP",
    "bracket": "Binary Trees & Tree Traversals",
    "subject": "ds",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 12,
    "topicsCovered": "Binary Trees & Tree Traversals Practice Questions"
  },
  {
    "series": "cse-dpp-2027",
    "order": 207,
    "name": "DPP 07 - Data Structures (Binary Search Trees (BST - Part 1)",
    "testLabel": "DPP 07",
    "testType": "DPP",
    "bracket": "Binary Search Trees (BST - Part 1",
    "subject": "ds",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 10,
    "topicsCovered": "Binary Search Trees (BST (Practice Set 1)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 208,
    "name": "DPP 08 - Data Structures (Binary Search Trees (BST - Part 2)",
    "testLabel": "DPP 08",
    "testType": "DPP",
    "bracket": "Binary Search Trees (BST - Part 2",
    "subject": "ds",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 11,
    "topicsCovered": "Binary Search Trees (BST (Practice Set 2)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 209,
    "name": "DPP 09 - Data Structures (Binary Search Trees (BST - Part 3)",
    "testLabel": "DPP 09",
    "testType": "DPP",
    "bracket": "Binary Search Trees (BST - Part 3",
    "subject": "ds",
    "date": "Nov 03, 2026",
    "duration": "15 Min",
    "totalMarks": 4,
    "topicsCovered": "Binary Search Trees (BST (Practice Set 3)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 210,
    "name": "DPP 10 - Data Structures (Heaps & Priority Queues - Part 1)",
    "testLabel": "DPP 10",
    "testType": "DPP",
    "bracket": "Heaps & Priority Queues - Part 1",
    "subject": "ds",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 10,
    "topicsCovered": "Heaps & Priority Queues (Practice Set 1)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 211,
    "name": "DPP 11 - Data Structures (Heaps & Priority Queues - Part 2)",
    "testLabel": "DPP 11",
    "testType": "DPP",
    "bracket": "Heaps & Priority Queues - Part 2",
    "subject": "ds",
    "date": "Nov 03, 2026",
    "duration": "18 Min",
    "totalMarks": 6,
    "topicsCovered": "Heaps & Priority Queues (Practice Set 2)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 212,
    "name": "DPP 12 - Data Structures (Hashing & Hash Tables - Part 1)",
    "testLabel": "DPP 12",
    "testType": "DPP",
    "bracket": "Hashing & Hash Tables - Part 1",
    "subject": "ds",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 10,
    "topicsCovered": "Hashing & Hash Tables (Practice Set 1)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 213,
    "name": "DPP 13 - Data Structures (Hashing & Hash Tables - Part 2)",
    "testLabel": "DPP 13",
    "testType": "DPP",
    "bracket": "Hashing & Hash Tables - Part 2",
    "subject": "ds",
    "date": "Nov 03, 2026",
    "duration": "24 Min",
    "totalMarks": 9,
    "topicsCovered": "Hashing & Hash Tables (Practice Set 2)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 214,
    "name": "DPP 01 - Operating System (Process Management & CPU Scheduling - Part 1)",
    "testLabel": "DPP 01",
    "testType": "DPP",
    "bracket": "Process Management & CPU Scheduling - Part 1",
    "subject": "os",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 11,
    "topicsCovered": "Process Management & CPU Scheduling (Practice Set 1)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 215,
    "name": "DPP 02 - Operating System (Process Management & CPU Scheduling - Part 2)",
    "testLabel": "DPP 02",
    "testType": "DPP",
    "bracket": "Process Management & CPU Scheduling - Part 2",
    "subject": "os",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 13,
    "topicsCovered": "Process Management & CPU Scheduling (Practice Set 2)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 216,
    "name": "DPP 03 - Operating System (Process Management & CPU Scheduling - Part 3)",
    "testLabel": "DPP 03",
    "testType": "DPP",
    "bracket": "Process Management & CPU Scheduling - Part 3",
    "subject": "os",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 15,
    "topicsCovered": "Process Management & CPU Scheduling (Practice Set 3)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 217,
    "name": "DPP 04 - Operating System (Process Management & CPU Scheduling - Part 4)",
    "testLabel": "DPP 04",
    "testType": "DPP",
    "bracket": "Process Management & CPU Scheduling - Part 4",
    "subject": "os",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 12,
    "topicsCovered": "Process Management & CPU Scheduling (Practice Set 4)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 218,
    "name": "DPP 05 - Operating System (Process Management & CPU Scheduling - Part 5)",
    "testLabel": "DPP 05",
    "testType": "DPP",
    "bracket": "Process Management & CPU Scheduling - Part 5",
    "subject": "os",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 10,
    "topicsCovered": "Process Management & CPU Scheduling (Practice Set 5)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 219,
    "name": "DPP 06 - Operating System (Process Management & CPU Scheduling - Part 6)",
    "testLabel": "DPP 06",
    "testType": "DPP",
    "bracket": "Process Management & CPU Scheduling - Part 6",
    "subject": "os",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 10,
    "topicsCovered": "Process Management & CPU Scheduling (Practice Set 6)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 220,
    "name": "DPP 07 - Operating System (Process Management & CPU Scheduling - Part 7)",
    "testLabel": "DPP 07",
    "testType": "DPP",
    "bracket": "Process Management & CPU Scheduling - Part 7",
    "subject": "os",
    "date": "Nov 03, 2026",
    "duration": "15 Min",
    "totalMarks": 4,
    "topicsCovered": "Process Management & CPU Scheduling (Practice Set 7)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 221,
    "name": "DPP 08 - Operating System (System Calls, Threads & IPC - Part 1)",
    "testLabel": "DPP 08",
    "testType": "DPP",
    "bracket": "System Calls, Threads & IPC - Part 1",
    "subject": "os",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 14,
    "topicsCovered": "System Calls, Threads & IPC (Practice Set 1)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 222,
    "name": "DPP 09 - Operating System (System Calls, Threads & IPC - Part 2)",
    "testLabel": "DPP 09",
    "testType": "DPP",
    "bracket": "System Calls, Threads & IPC - Part 2",
    "subject": "os",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 19,
    "topicsCovered": "System Calls, Threads & IPC (Practice Set 2)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 223,
    "name": "DPP 10 - Operating System (System Calls, Threads & IPC - Part 3)",
    "testLabel": "DPP 10",
    "testType": "DPP",
    "bracket": "System Calls, Threads & IPC - Part 3",
    "subject": "os",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 11,
    "topicsCovered": "System Calls, Threads & IPC (Practice Set 3)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 224,
    "name": "DPP 11 - Operating System (System Calls, Threads & IPC - Part 4)",
    "testLabel": "DPP 11",
    "testType": "DPP",
    "bracket": "System Calls, Threads & IPC - Part 4",
    "subject": "os",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 12,
    "topicsCovered": "System Calls, Threads & IPC (Practice Set 4)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 225,
    "name": "DPP 12 - Operating System (System Calls, Threads & IPC - Part 5)",
    "testLabel": "DPP 12",
    "testType": "DPP",
    "bracket": "System Calls, Threads & IPC - Part 5",
    "subject": "os",
    "date": "Nov 03, 2026",
    "duration": "18 Min",
    "totalMarks": 7,
    "topicsCovered": "System Calls, Threads & IPC (Practice Set 5)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 226,
    "name": "DPP 13 - Operating System (Process Synchronization - Part 1)",
    "testLabel": "DPP 13",
    "testType": "DPP",
    "bracket": "Process Synchronization - Part 1",
    "subject": "os",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 14,
    "topicsCovered": "Process Synchronization (Practice Set 1)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 227,
    "name": "DPP 14 - Operating System (Process Synchronization - Part 2)",
    "testLabel": "DPP 14",
    "testType": "DPP",
    "bracket": "Process Synchronization - Part 2",
    "subject": "os",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 13,
    "topicsCovered": "Process Synchronization (Practice Set 2)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 228,
    "name": "DPP 15 - Operating System (Process Synchronization - Part 3)",
    "testLabel": "DPP 15",
    "testType": "DPP",
    "bracket": "Process Synchronization - Part 3",
    "subject": "os",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 15,
    "topicsCovered": "Process Synchronization (Practice Set 3)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 229,
    "name": "DPP 16 - Operating System (Process Synchronization - Part 4)",
    "testLabel": "DPP 16",
    "testType": "DPP",
    "bracket": "Process Synchronization - Part 4",
    "subject": "os",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 16,
    "topicsCovered": "Process Synchronization (Practice Set 4)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 230,
    "name": "DPP 17 - Operating System (Process Synchronization - Part 5)",
    "testLabel": "DPP 17",
    "testType": "DPP",
    "bracket": "Process Synchronization - Part 5",
    "subject": "os",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 12,
    "topicsCovered": "Process Synchronization (Practice Set 5)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 231,
    "name": "DPP 18 - Operating System (Process Synchronization - Part 6)",
    "testLabel": "DPP 18",
    "testType": "DPP",
    "bracket": "Process Synchronization - Part 6",
    "subject": "os",
    "date": "Nov 03, 2026",
    "duration": "15 Min",
    "totalMarks": 6,
    "topicsCovered": "Process Synchronization (Practice Set 6)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 232,
    "name": "DPP 19 - Operating System (Deadlocks - Part 1)",
    "testLabel": "DPP 19",
    "testType": "DPP",
    "bracket": "Deadlocks - Part 1",
    "subject": "os",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 11,
    "topicsCovered": "Deadlocks (Practice Set 1)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 233,
    "name": "DPP 20 - Operating System (Deadlocks - Part 2)",
    "testLabel": "DPP 20",
    "testType": "DPP",
    "bracket": "Deadlocks - Part 2",
    "subject": "os",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 14,
    "topicsCovered": "Deadlocks (Practice Set 2)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 234,
    "name": "DPP 21 - Operating System (Deadlocks - Part 3)",
    "testLabel": "DPP 21",
    "testType": "DPP",
    "bracket": "Deadlocks - Part 3",
    "subject": "os",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 16,
    "topicsCovered": "Deadlocks (Practice Set 3)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 235,
    "name": "DPP 22 - Operating System (Deadlocks - Part 4)",
    "testLabel": "DPP 22",
    "testType": "DPP",
    "bracket": "Deadlocks - Part 4",
    "subject": "os",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 14,
    "topicsCovered": "Deadlocks (Practice Set 4)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 236,
    "name": "DPP 23 - Operating System (Deadlocks - Part 5)",
    "testLabel": "DPP 23",
    "testType": "DPP",
    "bracket": "Deadlocks - Part 5",
    "subject": "os",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 12,
    "topicsCovered": "Deadlocks (Practice Set 5)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 237,
    "name": "DPP 24 - Operating System (Deadlocks - Part 6)",
    "testLabel": "DPP 24",
    "testType": "DPP",
    "bracket": "Deadlocks - Part 6",
    "subject": "os",
    "date": "Nov 03, 2026",
    "duration": "15 Min",
    "totalMarks": 4,
    "topicsCovered": "Deadlocks (Practice Set 6)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 238,
    "name": "DPP 25 - Operating System (Memory Management & Virtual Memory - Part 1)",
    "testLabel": "DPP 25",
    "testType": "DPP",
    "bracket": "Memory Management & Virtual Memory - Part 1",
    "subject": "os",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 12,
    "topicsCovered": "Memory Management & Virtual Memory (Practice Set 1)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 239,
    "name": "DPP 26 - Operating System (Memory Management & Virtual Memory - Part 2)",
    "testLabel": "DPP 26",
    "testType": "DPP",
    "bracket": "Memory Management & Virtual Memory - Part 2",
    "subject": "os",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 10,
    "topicsCovered": "Memory Management & Virtual Memory (Practice Set 2)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 240,
    "name": "DPP 27 - Operating System (Memory Management & Virtual Memory - Part 3)",
    "testLabel": "DPP 27",
    "testType": "DPP",
    "bracket": "Memory Management & Virtual Memory - Part 3",
    "subject": "os",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 13,
    "topicsCovered": "Memory Management & Virtual Memory (Practice Set 3)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 241,
    "name": "DPP 28 - Operating System (Memory Management & Virtual Memory - Part 4)",
    "testLabel": "DPP 28",
    "testType": "DPP",
    "bracket": "Memory Management & Virtual Memory - Part 4",
    "subject": "os",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 11,
    "topicsCovered": "Memory Management & Virtual Memory (Practice Set 4)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 242,
    "name": "DPP 29 - Operating System (Memory Management & Virtual Memory - Part 5)",
    "testLabel": "DPP 29",
    "testType": "DPP",
    "bracket": "Memory Management & Virtual Memory - Part 5",
    "subject": "os",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 12,
    "topicsCovered": "Memory Management & Virtual Memory (Practice Set 5)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 243,
    "name": "DPP 30 - Operating System (Memory Management & Virtual Memory - Part 6)",
    "testLabel": "DPP 30",
    "testType": "DPP",
    "bracket": "Memory Management & Virtual Memory - Part 6",
    "subject": "os",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 12,
    "topicsCovered": "Memory Management & Virtual Memory (Practice Set 6)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 244,
    "name": "DPP 31 - Operating System (Memory Management & Virtual Memory - Part 7)",
    "testLabel": "DPP 31",
    "testType": "DPP",
    "bracket": "Memory Management & Virtual Memory - Part 7",
    "subject": "os",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 12,
    "topicsCovered": "Memory Management & Virtual Memory (Practice Set 7)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 245,
    "name": "DPP 32 - Operating System (Memory Management & Virtual Memory - Part 8)",
    "testLabel": "DPP 32",
    "testType": "DPP",
    "bracket": "Memory Management & Virtual Memory - Part 8",
    "subject": "os",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 11,
    "topicsCovered": "Memory Management & Virtual Memory (Practice Set 8)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 246,
    "name": "DPP 33 - Operating System (File Systems & Disk Scheduling - Part 1)",
    "testLabel": "DPP 33",
    "testType": "DPP",
    "bracket": "File Systems & Disk Scheduling - Part 1",
    "subject": "os",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 10,
    "topicsCovered": "File Systems & Disk Scheduling (Practice Set 1)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 247,
    "name": "DPP 34 - Operating System (File Systems & Disk Scheduling - Part 2)",
    "testLabel": "DPP 34",
    "testType": "DPP",
    "bracket": "File Systems & Disk Scheduling - Part 2",
    "subject": "os",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 13,
    "topicsCovered": "File Systems & Disk Scheduling (Practice Set 2)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 248,
    "name": "DPP 35 - Operating System (File Systems & Disk Scheduling - Part 3)",
    "testLabel": "DPP 35",
    "testType": "DPP",
    "bracket": "File Systems & Disk Scheduling - Part 3",
    "subject": "os",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 11,
    "topicsCovered": "File Systems & Disk Scheduling (Practice Set 3)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 249,
    "name": "DPP 36 - Operating System (File Systems & Disk Scheduling - Part 4)",
    "testLabel": "DPP 36",
    "testType": "DPP",
    "bracket": "File Systems & Disk Scheduling - Part 4",
    "subject": "os",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 13,
    "topicsCovered": "File Systems & Disk Scheduling (Practice Set 4)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 250,
    "name": "DPP 37 - Operating System (File Systems & Disk Scheduling - Part 5)",
    "testLabel": "DPP 37",
    "testType": "DPP",
    "bracket": "File Systems & Disk Scheduling - Part 5",
    "subject": "os",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 10,
    "topicsCovered": "File Systems & Disk Scheduling (Practice Set 5)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 251,
    "name": "DPP 38 - Operating System (File Systems & Disk Scheduling - Part 6)",
    "testLabel": "DPP 38",
    "testType": "DPP",
    "bracket": "File Systems & Disk Scheduling - Part 6",
    "subject": "os",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 10,
    "topicsCovered": "File Systems & Disk Scheduling (Practice Set 6)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 252,
    "name": "DPP 39 - Operating System (File Systems & Disk Scheduling - Part 7)",
    "testLabel": "DPP 39",
    "testType": "DPP",
    "bracket": "File Systems & Disk Scheduling - Part 7",
    "subject": "os",
    "date": "Nov 03, 2026",
    "duration": "15 Min",
    "totalMarks": 2,
    "topicsCovered": "File Systems & Disk Scheduling (Practice Set 7)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 253,
    "name": "DPP 01 - Theory of Computation (Finite Automata - Part 1)",
    "testLabel": "DPP 01",
    "testType": "DPP",
    "bracket": "Finite Automata - Part 1",
    "subject": "toc",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 14,
    "topicsCovered": "Finite Automata (Practice Set 1)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 254,
    "name": "DPP 02 - Theory of Computation (Finite Automata - Part 2)",
    "testLabel": "DPP 02",
    "testType": "DPP",
    "bracket": "Finite Automata - Part 2",
    "subject": "toc",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 13,
    "topicsCovered": "Finite Automata (Practice Set 2)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 255,
    "name": "DPP 03 - Theory of Computation (Finite Automata - Part 3)",
    "testLabel": "DPP 03",
    "testType": "DPP",
    "bracket": "Finite Automata - Part 3",
    "subject": "toc",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 12,
    "topicsCovered": "Finite Automata (Practice Set 3)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 256,
    "name": "DPP 04 - Theory of Computation (Finite Automata - Part 4)",
    "testLabel": "DPP 04",
    "testType": "DPP",
    "bracket": "Finite Automata - Part 4",
    "subject": "toc",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 16,
    "topicsCovered": "Finite Automata (Practice Set 4)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 257,
    "name": "DPP 05 - Theory of Computation (Finite Automata - Part 5)",
    "testLabel": "DPP 05",
    "testType": "DPP",
    "bracket": "Finite Automata - Part 5",
    "subject": "toc",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 10,
    "topicsCovered": "Finite Automata (Practice Set 5)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 258,
    "name": "DPP 06 - Theory of Computation (Finite Automata - Part 6)",
    "testLabel": "DPP 06",
    "testType": "DPP",
    "bracket": "Finite Automata - Part 6",
    "subject": "toc",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 10,
    "topicsCovered": "Finite Automata (Practice Set 6)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 259,
    "name": "DPP 07 - Theory of Computation (Finite Automata - Part 7)",
    "testLabel": "DPP 07",
    "testType": "DPP",
    "bracket": "Finite Automata - Part 7",
    "subject": "toc",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 13,
    "topicsCovered": "Finite Automata (Practice Set 7)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 260,
    "name": "DPP 08 - Theory of Computation (Finite Automata - Part 8)",
    "testLabel": "DPP 08",
    "testType": "DPP",
    "bracket": "Finite Automata - Part 8",
    "subject": "toc",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 14,
    "topicsCovered": "Finite Automata (Practice Set 8)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 261,
    "name": "DPP 09 - Theory of Computation (Finite Automata - Part 9)",
    "testLabel": "DPP 09",
    "testType": "DPP",
    "bracket": "Finite Automata - Part 9",
    "subject": "toc",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 12,
    "topicsCovered": "Finite Automata (Practice Set 9)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 262,
    "name": "DPP 10 - Theory of Computation (Finite Automata - Part 10)",
    "testLabel": "DPP 10",
    "testType": "DPP",
    "bracket": "Finite Automata - Part 10",
    "subject": "toc",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 12,
    "topicsCovered": "Finite Automata (Practice Set 10)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 263,
    "name": "DPP 11 - Theory of Computation (Finite Automata - Part 11)",
    "testLabel": "DPP 11",
    "testType": "DPP",
    "bracket": "Finite Automata - Part 11",
    "subject": "toc",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 10,
    "topicsCovered": "Finite Automata (Practice Set 11)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 264,
    "name": "DPP 12 - Theory of Computation (Finite Automata - Part 12)",
    "testLabel": "DPP 12",
    "testType": "DPP",
    "bracket": "Finite Automata - Part 12",
    "subject": "toc",
    "date": "Nov 03, 2026",
    "duration": "15 Min",
    "totalMarks": 1,
    "topicsCovered": "Finite Automata (Practice Set 12)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 265,
    "name": "DPP 13 - Theory of Computation (Regular Expression & Regular Languages - Part 1)",
    "testLabel": "DPP 13",
    "testType": "DPP",
    "bracket": "Regular Expression & Regular Languages - Part 1",
    "subject": "toc",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 11,
    "topicsCovered": "Regular Expression & Regular Languages (Practice Set 1)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 266,
    "name": "DPP 14 - Theory of Computation (Regular Expression & Regular Languages - Part 2)",
    "testLabel": "DPP 14",
    "testType": "DPP",
    "bracket": "Regular Expression & Regular Languages - Part 2",
    "subject": "toc",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 18,
    "topicsCovered": "Regular Expression & Regular Languages (Practice Set 2)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 267,
    "name": "DPP 15 - Theory of Computation (Regular Expression & Regular Languages - Part 3)",
    "testLabel": "DPP 15",
    "testType": "DPP",
    "bracket": "Regular Expression & Regular Languages - Part 3",
    "subject": "toc",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 10,
    "topicsCovered": "Regular Expression & Regular Languages (Practice Set 3)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 268,
    "name": "DPP 16 - Theory of Computation (Regular Expression & Regular Languages - Part 4)",
    "testLabel": "DPP 16",
    "testType": "DPP",
    "bracket": "Regular Expression & Regular Languages - Part 4",
    "subject": "toc",
    "date": "Nov 03, 2026",
    "duration": "18 Min",
    "totalMarks": 7,
    "topicsCovered": "Regular Expression & Regular Languages (Practice Set 4)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 269,
    "name": "DPP 17 - Theory of Computation (Context Free Grammar - Part 1)",
    "testLabel": "DPP 17",
    "testType": "DPP",
    "bracket": "Context Free Grammar - Part 1",
    "subject": "toc",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 13,
    "topicsCovered": "Context Free Grammar (Practice Set 1)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 270,
    "name": "DPP 18 - Theory of Computation (Context Free Grammar - Part 2)",
    "testLabel": "DPP 18",
    "testType": "DPP",
    "bracket": "Context Free Grammar - Part 2",
    "subject": "toc",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 13,
    "topicsCovered": "Context Free Grammar (Practice Set 2)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 271,
    "name": "DPP 19 - Theory of Computation (Context Free Grammar - Part 3)",
    "testLabel": "DPP 19",
    "testType": "DPP",
    "bracket": "Context Free Grammar - Part 3",
    "subject": "toc",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 12,
    "topicsCovered": "Context Free Grammar (Practice Set 3)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 272,
    "name": "DPP 20 - Theory of Computation (Context Free Grammar - Part 4)",
    "testLabel": "DPP 20",
    "testType": "DPP",
    "bracket": "Context Free Grammar - Part 4",
    "subject": "toc",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 12,
    "topicsCovered": "Context Free Grammar (Practice Set 4)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 273,
    "name": "DPP 21 - Theory of Computation (Context Free Grammar - Part 5)",
    "testLabel": "DPP 21",
    "testType": "DPP",
    "bracket": "Context Free Grammar - Part 5",
    "subject": "toc",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 10,
    "topicsCovered": "Context Free Grammar (Practice Set 5)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 274,
    "name": "DPP 22 - Theory of Computation (Context Free Grammar - Part 6)",
    "testLabel": "DPP 22",
    "testType": "DPP",
    "bracket": "Context Free Grammar - Part 6",
    "subject": "toc",
    "date": "Nov 03, 2026",
    "duration": "21 Min",
    "totalMarks": 8,
    "topicsCovered": "Context Free Grammar (Practice Set 6)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 275,
    "name": "DPP 23 - Theory of Computation (Pushdown Automata & CFL - Part 1)",
    "testLabel": "DPP 23",
    "testType": "DPP",
    "bracket": "Pushdown Automata & CFL - Part 1",
    "subject": "toc",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 13,
    "topicsCovered": "Pushdown Automata & CFL (Practice Set 1)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 276,
    "name": "DPP 24 - Theory of Computation (Pushdown Automata & CFL - Part 2)",
    "testLabel": "DPP 24",
    "testType": "DPP",
    "bracket": "Pushdown Automata & CFL - Part 2",
    "subject": "toc",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 20,
    "topicsCovered": "Pushdown Automata & CFL (Practice Set 2)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 277,
    "name": "DPP 25 - Theory of Computation (Pushdown Automata & CFL - Part 3)",
    "testLabel": "DPP 25",
    "testType": "DPP",
    "bracket": "Pushdown Automata & CFL - Part 3",
    "subject": "toc",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 15,
    "topicsCovered": "Pushdown Automata & CFL (Practice Set 3)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 278,
    "name": "DPP 26 - Theory of Computation (Pushdown Automata & CFL - Part 4)",
    "testLabel": "DPP 26",
    "testType": "DPP",
    "bracket": "Pushdown Automata & CFL - Part 4",
    "subject": "toc",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 15,
    "topicsCovered": "Pushdown Automata & CFL (Practice Set 4)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 279,
    "name": "DPP 27 - Theory of Computation (Pushdown Automata & CFL - Part 5)",
    "testLabel": "DPP 27",
    "testType": "DPP",
    "bracket": "Pushdown Automata & CFL - Part 5",
    "subject": "toc",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 14,
    "topicsCovered": "Pushdown Automata & CFL (Practice Set 5)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 280,
    "name": "DPP 28 - Theory of Computation (Pushdown Automata & CFL - Part 6)",
    "testLabel": "DPP 28",
    "testType": "DPP",
    "bracket": "Pushdown Automata & CFL - Part 6",
    "subject": "toc",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 12,
    "topicsCovered": "Pushdown Automata & CFL (Practice Set 6)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 281,
    "name": "DPP 29 - Theory of Computation (Pushdown Automata & CFL - Part 7)",
    "testLabel": "DPP 29",
    "testType": "DPP",
    "bracket": "Pushdown Automata & CFL - Part 7",
    "subject": "toc",
    "date": "Nov 03, 2026",
    "duration": "15 Min",
    "totalMarks": 1,
    "topicsCovered": "Pushdown Automata & CFL (Practice Set 7)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 282,
    "name": "DPP 30 - Theory of Computation (Turing Machine - Part 1)",
    "testLabel": "DPP 30",
    "testType": "DPP",
    "bracket": "Turing Machine - Part 1",
    "subject": "toc",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 11,
    "topicsCovered": "Turing Machine (Practice Set 1)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 283,
    "name": "DPP 31 - Theory of Computation (Turing Machine - Part 2)",
    "testLabel": "DPP 31",
    "testType": "DPP",
    "bracket": "Turing Machine - Part 2",
    "subject": "toc",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 15,
    "topicsCovered": "Turing Machine (Practice Set 2)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 284,
    "name": "DPP 32 - Theory of Computation (Turing Machine - Part 3)",
    "testLabel": "DPP 32",
    "testType": "DPP",
    "bracket": "Turing Machine - Part 3",
    "subject": "toc",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 14,
    "topicsCovered": "Turing Machine (Practice Set 3)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 285,
    "name": "DPP 33 - Theory of Computation (Turing Machine - Part 4)",
    "testLabel": "DPP 33",
    "testType": "DPP",
    "bracket": "Turing Machine - Part 4",
    "subject": "toc",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 12,
    "topicsCovered": "Turing Machine (Practice Set 4)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 286,
    "name": "DPP 34 - Theory of Computation (Turing Machine - Part 5)",
    "testLabel": "DPP 34",
    "testType": "DPP",
    "bracket": "Turing Machine - Part 5",
    "subject": "toc",
    "date": "Nov 03, 2026",
    "duration": "27 Min",
    "totalMarks": 12,
    "topicsCovered": "Turing Machine (Practice Set 5)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 287,
    "name": "DPP 35 - Theory of Computation (Decidability & Undecidability - Part 1)",
    "testLabel": "DPP 35",
    "testType": "DPP",
    "bracket": "Decidability & Undecidability - Part 1",
    "subject": "toc",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 13,
    "topicsCovered": "Decidability & Undecidability (Practice Set 1)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 288,
    "name": "DPP 36 - Theory of Computation (Decidability & Undecidability - Part 2)",
    "testLabel": "DPP 36",
    "testType": "DPP",
    "bracket": "Decidability & Undecidability - Part 2",
    "subject": "toc",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 11,
    "topicsCovered": "Decidability & Undecidability (Practice Set 2)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 289,
    "name": "DPP 37 - Theory of Computation (Decidability & Undecidability - Part 3)",
    "testLabel": "DPP 37",
    "testType": "DPP",
    "bracket": "Decidability & Undecidability - Part 3",
    "subject": "toc",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 13,
    "topicsCovered": "Decidability & Undecidability (Practice Set 3)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 290,
    "name": "DPP 38 - Theory of Computation (Decidability & Undecidability - Part 4)",
    "testLabel": "DPP 38",
    "testType": "DPP",
    "bracket": "Decidability & Undecidability - Part 4",
    "subject": "toc",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 10,
    "topicsCovered": "Decidability & Undecidability (Practice Set 4)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 291,
    "name": "DPP 39 - Theory of Computation (Decidability & Undecidability - Part 5)",
    "testLabel": "DPP 39",
    "testType": "DPP",
    "bracket": "Decidability & Undecidability - Part 5",
    "subject": "toc",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 13,
    "topicsCovered": "Decidability & Undecidability (Practice Set 5)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 292,
    "name": "DPP 40 - Theory of Computation (Decidability & Undecidability - Part 6)",
    "testLabel": "DPP 40",
    "testType": "DPP",
    "bracket": "Decidability & Undecidability - Part 6",
    "subject": "toc",
    "date": "Nov 03, 2026",
    "duration": "18 Min",
    "totalMarks": 8,
    "topicsCovered": "Decidability & Undecidability (Practice Set 6)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 293,
    "name": "DPP 01 - Engineering Mathematics (Limits, Continuity & Differentiability - Part 1)",
    "testLabel": "DPP 01",
    "testType": "DPP",
    "bracket": "Limits, Continuity & Differentiability - Part 1",
    "subject": "em",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 10,
    "topicsCovered": "Limits, Continuity & Differentiability (Practice Set 1)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 294,
    "name": "DPP 02 - Engineering Mathematics (Limits, Continuity & Differentiability - Part 2)",
    "testLabel": "DPP 02",
    "testType": "DPP",
    "bracket": "Limits, Continuity & Differentiability - Part 2",
    "subject": "em",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 10,
    "topicsCovered": "Limits, Continuity & Differentiability (Practice Set 2)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 295,
    "name": "DPP 03 - Engineering Mathematics (Limits, Continuity & Differentiability - Part 3)",
    "testLabel": "DPP 03",
    "testType": "DPP",
    "bracket": "Limits, Continuity & Differentiability - Part 3",
    "subject": "em",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 16,
    "topicsCovered": "Limits, Continuity & Differentiability (Practice Set 3)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 296,
    "name": "DPP 04 - Engineering Mathematics (Limits, Continuity & Differentiability - Part 4)",
    "testLabel": "DPP 04",
    "testType": "DPP",
    "bracket": "Limits, Continuity & Differentiability - Part 4",
    "subject": "em",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 13,
    "topicsCovered": "Limits, Continuity & Differentiability (Practice Set 4)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 297,
    "name": "DPP 05 - Engineering Mathematics (Limits, Continuity & Differentiability - Part 5)",
    "testLabel": "DPP 05",
    "testType": "DPP",
    "bracket": "Limits, Continuity & Differentiability - Part 5",
    "subject": "em",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 10,
    "topicsCovered": "Limits, Continuity & Differentiability (Practice Set 5)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 298,
    "name": "DPP 06 - Engineering Mathematics (Limits, Continuity & Differentiability - Part 6)",
    "testLabel": "DPP 06",
    "testType": "DPP",
    "bracket": "Limits, Continuity & Differentiability - Part 6",
    "subject": "em",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 13,
    "topicsCovered": "Limits, Continuity & Differentiability (Practice Set 6)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 299,
    "name": "DPP 07 - Engineering Mathematics (Limits, Continuity & Differentiability - Part 7)",
    "testLabel": "DPP 07",
    "testType": "DPP",
    "bracket": "Limits, Continuity & Differentiability - Part 7",
    "subject": "em",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 13,
    "topicsCovered": "Limits, Continuity & Differentiability (Practice Set 7)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 300,
    "name": "DPP 08 - Engineering Mathematics (Limits, Continuity & Differentiability - Part 8)",
    "testLabel": "DPP 08",
    "testType": "DPP",
    "bracket": "Limits, Continuity & Differentiability - Part 8",
    "subject": "em",
    "date": "Nov 03, 2026",
    "duration": "15 Min",
    "totalMarks": 2,
    "topicsCovered": "Limits, Continuity & Differentiability (Practice Set 8)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 301,
    "name": "DPP 09 - Engineering Mathematics (Differential Calculus & Applications - Part 1)",
    "testLabel": "DPP 09",
    "testType": "DPP",
    "bracket": "Differential Calculus & Applications - Part 1",
    "subject": "em",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 11,
    "topicsCovered": "Differential Calculus & Applications (Practice Set 1)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 302,
    "name": "DPP 10 - Engineering Mathematics (Differential Calculus & Applications - Part 2)",
    "testLabel": "DPP 10",
    "testType": "DPP",
    "bracket": "Differential Calculus & Applications - Part 2",
    "subject": "em",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 11,
    "topicsCovered": "Differential Calculus & Applications (Practice Set 2)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 303,
    "name": "DPP 11 - Engineering Mathematics (Differential Calculus & Applications - Part 3)",
    "testLabel": "DPP 11",
    "testType": "DPP",
    "bracket": "Differential Calculus & Applications - Part 3",
    "subject": "em",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 10,
    "topicsCovered": "Differential Calculus & Applications (Practice Set 3)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 304,
    "name": "DPP 12 - Engineering Mathematics (Differential Calculus & Applications - Part 4)",
    "testLabel": "DPP 12",
    "testType": "DPP",
    "bracket": "Differential Calculus & Applications - Part 4",
    "subject": "em",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 11,
    "topicsCovered": "Differential Calculus & Applications (Practice Set 4)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 305,
    "name": "DPP 13 - Engineering Mathematics (Optimization & Convexity - Part 1)",
    "testLabel": "DPP 13",
    "testType": "DPP",
    "bracket": "Optimization & Convexity - Part 1",
    "subject": "em",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 11,
    "topicsCovered": "Optimization & Convexity (Practice Set 1)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 306,
    "name": "DPP 14 - Engineering Mathematics (Optimization & Convexity - Part 2)",
    "testLabel": "DPP 14",
    "testType": "DPP",
    "bracket": "Optimization & Convexity - Part 2",
    "subject": "em",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 16,
    "topicsCovered": "Optimization & Convexity (Practice Set 2)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 307,
    "name": "DPP 15 - Engineering Mathematics (Optimization & Convexity - Part 3)",
    "testLabel": "DPP 15",
    "testType": "DPP",
    "bracket": "Optimization & Convexity - Part 3",
    "subject": "em",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 10,
    "topicsCovered": "Optimization & Convexity (Practice Set 3)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 308,
    "name": "DPP 16 - Engineering Mathematics (Optimization & Convexity - Part 4)",
    "testLabel": "DPP 16",
    "testType": "DPP",
    "bracket": "Optimization & Convexity - Part 4",
    "subject": "em",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 11,
    "topicsCovered": "Optimization & Convexity (Practice Set 4)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 309,
    "name": "DPP 17 - Engineering Mathematics (Optimization & Convexity - Part 5)",
    "testLabel": "DPP 17",
    "testType": "DPP",
    "bracket": "Optimization & Convexity - Part 5",
    "subject": "em",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 11,
    "topicsCovered": "Optimization & Convexity (Practice Set 5)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 310,
    "name": "DPP 18 - Engineering Mathematics (Optimization & Convexity - Part 6)",
    "testLabel": "DPP 18",
    "testType": "DPP",
    "bracket": "Optimization & Convexity - Part 6",
    "subject": "em",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 10,
    "topicsCovered": "Optimization & Convexity (Practice Set 6)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 311,
    "name": "DPP 19 - Engineering Mathematics (Optimization & Convexity - Part 7)",
    "testLabel": "DPP 19",
    "testType": "DPP",
    "bracket": "Optimization & Convexity - Part 7",
    "subject": "em",
    "date": "Nov 03, 2026",
    "duration": "15 Min",
    "totalMarks": 3,
    "topicsCovered": "Optimization & Convexity (Practice Set 7)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 312,
    "name": "DPP 20 - Engineering Mathematics (Integral Calculus - Part 1)",
    "testLabel": "DPP 20",
    "testType": "DPP",
    "bracket": "Integral Calculus - Part 1",
    "subject": "em",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 10,
    "topicsCovered": "Integral Calculus (Practice Set 1)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 313,
    "name": "DPP 21 - Engineering Mathematics (Integral Calculus - Part 2)",
    "testLabel": "DPP 21",
    "testType": "DPP",
    "bracket": "Integral Calculus - Part 2",
    "subject": "em",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 11,
    "topicsCovered": "Integral Calculus (Practice Set 2)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 314,
    "name": "DPP 22 - Engineering Mathematics (Integral Calculus - Part 3)",
    "testLabel": "DPP 22",
    "testType": "DPP",
    "bracket": "Integral Calculus - Part 3",
    "subject": "em",
    "date": "Nov 03, 2026",
    "duration": "15 Min",
    "totalMarks": 2,
    "topicsCovered": "Integral Calculus (Practice Set 3)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 315,
    "name": "DPP 21 - Engineering Mathematics (Matrices & Basic Operations - Part 1)",
    "testLabel": "DPP 21",
    "testType": "DPP",
    "bracket": "Matrices & Basic Operations - Part 1",
    "subject": "em",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 12,
    "topicsCovered": "Matrices & Basic Operations (Practice Set 1)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 316,
    "name": "DPP 22 - Engineering Mathematics (Matrices & Basic Operations - Part 2)",
    "testLabel": "DPP 22",
    "testType": "DPP",
    "bracket": "Matrices & Basic Operations - Part 2",
    "subject": "em",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 10,
    "topicsCovered": "Matrices & Basic Operations (Practice Set 2)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 317,
    "name": "DPP 23 - Engineering Mathematics (Matrices & Basic Operations - Part 3)",
    "testLabel": "DPP 23",
    "testType": "DPP",
    "bracket": "Matrices & Basic Operations - Part 3",
    "subject": "em",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 11,
    "topicsCovered": "Matrices & Basic Operations (Practice Set 3)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 318,
    "name": "DPP 24 - Engineering Mathematics (Matrices & Basic Operations - Part 4)",
    "testLabel": "DPP 24",
    "testType": "DPP",
    "bracket": "Matrices & Basic Operations - Part 4",
    "subject": "em",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 10,
    "topicsCovered": "Matrices & Basic Operations (Practice Set 4)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 319,
    "name": "DPP 25 - Engineering Mathematics (Matrices & Basic Operations - Part 5)",
    "testLabel": "DPP 25",
    "testType": "DPP",
    "bracket": "Matrices & Basic Operations - Part 5",
    "subject": "em",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 11,
    "topicsCovered": "Matrices & Basic Operations (Practice Set 5)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 320,
    "name": "DPP 26 - Engineering Mathematics (Determinants - Part 1)",
    "testLabel": "DPP 26",
    "testType": "DPP",
    "bracket": "Determinants - Part 1",
    "subject": "em",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 10,
    "topicsCovered": "Determinants (Practice Set 1)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 321,
    "name": "DPP 27 - Engineering Mathematics (Determinants - Part 2)",
    "testLabel": "DPP 27",
    "testType": "DPP",
    "bracket": "Determinants - Part 2",
    "subject": "em",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 10,
    "topicsCovered": "Determinants (Practice Set 2)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 322,
    "name": "DPP 28 - Engineering Mathematics (Determinants - Part 3)",
    "testLabel": "DPP 28",
    "testType": "DPP",
    "bracket": "Determinants - Part 3",
    "subject": "em",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 10,
    "topicsCovered": "Determinants (Practice Set 3)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 323,
    "name": "DPP 29 - Engineering Mathematics (Determinants - Part 4)",
    "testLabel": "DPP 29",
    "testType": "DPP",
    "bracket": "Determinants - Part 4",
    "subject": "em",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 11,
    "topicsCovered": "Determinants (Practice Set 4)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 324,
    "name": "DPP 30 - Engineering Mathematics (Determinants - Part 5)",
    "testLabel": "DPP 30",
    "testType": "DPP",
    "bracket": "Determinants - Part 5",
    "subject": "em",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 11,
    "topicsCovered": "Determinants (Practice Set 5)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 325,
    "name": "DPP 31 - Engineering Mathematics (Determinants - Part 6)",
    "testLabel": "DPP 31",
    "testType": "DPP",
    "bracket": "Determinants - Part 6",
    "subject": "em",
    "date": "Nov 03, 2026",
    "duration": "15 Min",
    "totalMarks": 2,
    "topicsCovered": "Determinants (Practice Set 6)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 326,
    "name": "DPP 32 - Engineering Mathematics (Rank & Systems of Linear Equations - Part 1)",
    "testLabel": "DPP 32",
    "testType": "DPP",
    "bracket": "Rank & Systems of Linear Equations - Part 1",
    "subject": "em",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 13,
    "topicsCovered": "Rank & Systems of Linear Equations (Practice Set 1)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 327,
    "name": "DPP 33 - Engineering Mathematics (Rank & Systems of Linear Equations - Part 2)",
    "testLabel": "DPP 33",
    "testType": "DPP",
    "bracket": "Rank & Systems of Linear Equations - Part 2",
    "subject": "em",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 11,
    "topicsCovered": "Rank & Systems of Linear Equations (Practice Set 2)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 328,
    "name": "DPP 34 - Engineering Mathematics (Rank & Systems of Linear Equations - Part 3)",
    "testLabel": "DPP 34",
    "testType": "DPP",
    "bracket": "Rank & Systems of Linear Equations - Part 3",
    "subject": "em",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 14,
    "topicsCovered": "Rank & Systems of Linear Equations (Practice Set 3)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 329,
    "name": "DPP 35 - Engineering Mathematics (Rank & Systems of Linear Equations - Part 4)",
    "testLabel": "DPP 35",
    "testType": "DPP",
    "bracket": "Rank & Systems of Linear Equations - Part 4",
    "subject": "em",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 12,
    "topicsCovered": "Rank & Systems of Linear Equations (Practice Set 4)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 330,
    "name": "DPP 36 - Engineering Mathematics (Rank & Systems of Linear Equations - Part 5)",
    "testLabel": "DPP 36",
    "testType": "DPP",
    "bracket": "Rank & Systems of Linear Equations - Part 5",
    "subject": "em",
    "date": "Nov 03, 2026",
    "duration": "15 Min",
    "totalMarks": 1,
    "topicsCovered": "Rank & Systems of Linear Equations (Practice Set 5)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 331,
    "name": "DPP 37 - Engineering Mathematics (Eigenvalues & Eigenvectors - Part 1)",
    "testLabel": "DPP 37",
    "testType": "DPP",
    "bracket": "Eigenvalues & Eigenvectors - Part 1",
    "subject": "em",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 11,
    "topicsCovered": "Eigenvalues & Eigenvectors (Practice Set 1)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 332,
    "name": "DPP 38 - Engineering Mathematics (Eigenvalues & Eigenvectors - Part 2)",
    "testLabel": "DPP 38",
    "testType": "DPP",
    "bracket": "Eigenvalues & Eigenvectors - Part 2",
    "subject": "em",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 10,
    "topicsCovered": "Eigenvalues & Eigenvectors (Practice Set 2)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 333,
    "name": "DPP 39 - Engineering Mathematics (Eigenvalues & Eigenvectors - Part 3)",
    "testLabel": "DPP 39",
    "testType": "DPP",
    "bracket": "Eigenvalues & Eigenvectors - Part 3",
    "subject": "em",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 11,
    "topicsCovered": "Eigenvalues & Eigenvectors (Practice Set 3)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 334,
    "name": "DPP 40 - Engineering Mathematics (Eigenvalues & Eigenvectors - Part 4)",
    "testLabel": "DPP 40",
    "testType": "DPP",
    "bracket": "Eigenvalues & Eigenvectors - Part 4",
    "subject": "em",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 11,
    "topicsCovered": "Eigenvalues & Eigenvectors (Practice Set 4)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 335,
    "name": "DPP 41 - Engineering Mathematics (Eigenvalues & Eigenvectors - Part 5)",
    "testLabel": "DPP 41",
    "testType": "DPP",
    "bracket": "Eigenvalues & Eigenvectors - Part 5",
    "subject": "em",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 10,
    "topicsCovered": "Eigenvalues & Eigenvectors (Practice Set 5)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 336,
    "name": "DPP 42 - Engineering Mathematics (Eigenvalues & Eigenvectors - Part 6)",
    "testLabel": "DPP 42",
    "testType": "DPP",
    "bracket": "Eigenvalues & Eigenvectors - Part 6",
    "subject": "em",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 10,
    "topicsCovered": "Eigenvalues & Eigenvectors (Practice Set 6)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 337,
    "name": "DPP 43 - Engineering Mathematics (Eigenvalues & Eigenvectors - Part 7)",
    "testLabel": "DPP 43",
    "testType": "DPP",
    "bracket": "Eigenvalues & Eigenvectors - Part 7",
    "subject": "em",
    "date": "Nov 03, 2026",
    "duration": "15 Min",
    "totalMarks": 4,
    "topicsCovered": "Eigenvalues & Eigenvectors (Practice Set 7)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 338,
    "name": "DPP 44 - Engineering Mathematics (Vector Spaces, Basis & Dimension - Part 1)",
    "testLabel": "DPP 44",
    "testType": "DPP",
    "bracket": "Vector Spaces, Basis & Dimension - Part 1",
    "subject": "em",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 13,
    "topicsCovered": "Vector Spaces, Basis & Dimension (Practice Set 1)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 339,
    "name": "DPP 45 - Engineering Mathematics (Vector Spaces, Basis & Dimension - Part 2)",
    "testLabel": "DPP 45",
    "testType": "DPP",
    "bracket": "Vector Spaces, Basis & Dimension - Part 2",
    "subject": "em",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 12,
    "topicsCovered": "Vector Spaces, Basis & Dimension (Practice Set 2)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 340,
    "name": "DPP 46 - Engineering Mathematics (Vector Spaces, Basis & Dimension - Part 3)",
    "testLabel": "DPP 46",
    "testType": "DPP",
    "bracket": "Vector Spaces, Basis & Dimension - Part 3",
    "subject": "em",
    "date": "Nov 03, 2026",
    "duration": "15 Min",
    "totalMarks": 4,
    "topicsCovered": "Vector Spaces, Basis & Dimension (Practice Set 3)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 341,
    "name": "DPP 45 - Engineering Mathematics (Axioms & Conditional Probability - Part 1)",
    "testLabel": "DPP 45",
    "testType": "DPP",
    "bracket": "Axioms & Conditional Probability - Part 1",
    "subject": "em",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 11,
    "topicsCovered": "Axioms & Conditional Probability (Practice Set 1)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 342,
    "name": "DPP 46 - Engineering Mathematics (Axioms & Conditional Probability - Part 2)",
    "testLabel": "DPP 46",
    "testType": "DPP",
    "bracket": "Axioms & Conditional Probability - Part 2",
    "subject": "em",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 16,
    "topicsCovered": "Axioms & Conditional Probability (Practice Set 2)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 343,
    "name": "DPP 47 - Engineering Mathematics (Axioms & Conditional Probability - Part 3)",
    "testLabel": "DPP 47",
    "testType": "DPP",
    "bracket": "Axioms & Conditional Probability - Part 3",
    "subject": "em",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 11,
    "topicsCovered": "Axioms & Conditional Probability (Practice Set 3)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 344,
    "name": "DPP 48 - Engineering Mathematics (Axioms & Conditional Probability - Part 4)",
    "testLabel": "DPP 48",
    "testType": "DPP",
    "bracket": "Axioms & Conditional Probability - Part 4",
    "subject": "em",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 10,
    "topicsCovered": "Axioms & Conditional Probability (Practice Set 4)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 345,
    "name": "DPP 49 - Engineering Mathematics (Axioms & Conditional Probability - Part 5)",
    "testLabel": "DPP 49",
    "testType": "DPP",
    "bracket": "Axioms & Conditional Probability - Part 5",
    "subject": "em",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 11,
    "topicsCovered": "Axioms & Conditional Probability (Practice Set 5)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 346,
    "name": "DPP 50 - Engineering Mathematics (Axioms & Conditional Probability - Part 6)",
    "testLabel": "DPP 50",
    "testType": "DPP",
    "bracket": "Axioms & Conditional Probability - Part 6",
    "subject": "em",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 11,
    "topicsCovered": "Axioms & Conditional Probability (Practice Set 6)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 347,
    "name": "DPP 51 - Engineering Mathematics (Axioms & Conditional Probability - Part 7)",
    "testLabel": "DPP 51",
    "testType": "DPP",
    "bracket": "Axioms & Conditional Probability - Part 7",
    "subject": "em",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 10,
    "topicsCovered": "Axioms & Conditional Probability (Practice Set 7)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 348,
    "name": "DPP 52 - Engineering Mathematics (Axioms & Conditional Probability - Part 8)",
    "testLabel": "DPP 52",
    "testType": "DPP",
    "bracket": "Axioms & Conditional Probability - Part 8",
    "subject": "em",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 11,
    "topicsCovered": "Axioms & Conditional Probability (Practice Set 8)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 349,
    "name": "DPP 53 - Engineering Mathematics (Axioms & Conditional Probability - Part 9)",
    "testLabel": "DPP 53",
    "testType": "DPP",
    "bracket": "Axioms & Conditional Probability - Part 9",
    "subject": "em",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 10,
    "topicsCovered": "Axioms & Conditional Probability (Practice Set 9)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 350,
    "name": "DPP 54 - Engineering Mathematics (Axioms & Conditional Probability - Part 10)",
    "testLabel": "DPP 54",
    "testType": "DPP",
    "bracket": "Axioms & Conditional Probability - Part 10",
    "subject": "em",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 11,
    "topicsCovered": "Axioms & Conditional Probability (Practice Set 10)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 351,
    "name": "DPP 55 - Engineering Mathematics (Axioms & Conditional Probability - Part 11)",
    "testLabel": "DPP 55",
    "testType": "DPP",
    "bracket": "Axioms & Conditional Probability - Part 11",
    "subject": "em",
    "date": "Nov 03, 2026",
    "duration": "15 Min",
    "totalMarks": 4,
    "topicsCovered": "Axioms & Conditional Probability (Practice Set 11)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 352,
    "name": "DPP 56 - Engineering Mathematics (Random Variables & Probability Distributions - Part 1)",
    "testLabel": "DPP 56",
    "testType": "DPP",
    "bracket": "Random Variables & Probability Distributions - Part 1",
    "subject": "em",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 10,
    "topicsCovered": "Random Variables & Probability Distributions (Practice Set 1)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 353,
    "name": "DPP 57 - Engineering Mathematics (Random Variables & Probability Distributions - Part 2)",
    "testLabel": "DPP 57",
    "testType": "DPP",
    "bracket": "Random Variables & Probability Distributions - Part 2",
    "subject": "em",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 10,
    "topicsCovered": "Random Variables & Probability Distributions (Practice Set 2)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 354,
    "name": "DPP 58 - Engineering Mathematics (Random Variables & Probability Distributions - Part 3)",
    "testLabel": "DPP 58",
    "testType": "DPP",
    "bracket": "Random Variables & Probability Distributions - Part 3",
    "subject": "em",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 10,
    "topicsCovered": "Random Variables & Probability Distributions (Practice Set 3)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 355,
    "name": "DPP 59 - Engineering Mathematics (Random Variables & Probability Distributions - Part 4)",
    "testLabel": "DPP 59",
    "testType": "DPP",
    "bracket": "Random Variables & Probability Distributions - Part 4",
    "subject": "em",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 11,
    "topicsCovered": "Random Variables & Probability Distributions (Practice Set 4)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 356,
    "name": "DPP 60 - Engineering Mathematics (Random Variables & Probability Distributions - Part 5)",
    "testLabel": "DPP 60",
    "testType": "DPP",
    "bracket": "Random Variables & Probability Distributions - Part 5",
    "subject": "em",
    "date": "Nov 03, 2026",
    "duration": "15 Min",
    "totalMarks": 5,
    "topicsCovered": "Random Variables & Probability Distributions (Practice Set 5)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 357,
    "name": "DPP 61 - Engineering Mathematics (Expectation, Variance & Moments - Part 1)",
    "testLabel": "DPP 61",
    "testType": "DPP",
    "bracket": "Expectation, Variance & Moments - Part 1",
    "subject": "em",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 11,
    "topicsCovered": "Expectation, Variance & Moments (Practice Set 1)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 358,
    "name": "DPP 62 - Engineering Mathematics (Expectation, Variance & Moments - Part 2)",
    "testLabel": "DPP 62",
    "testType": "DPP",
    "bracket": "Expectation, Variance & Moments - Part 2",
    "subject": "em",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 12,
    "topicsCovered": "Expectation, Variance & Moments (Practice Set 2)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 359,
    "name": "DPP 63 - Engineering Mathematics (Expectation, Variance & Moments - Part 3)",
    "testLabel": "DPP 63",
    "testType": "DPP",
    "bracket": "Expectation, Variance & Moments - Part 3",
    "subject": "em",
    "date": "Nov 03, 2026",
    "duration": "18 Min",
    "totalMarks": 6,
    "topicsCovered": "Expectation, Variance & Moments (Practice Set 3)"
  },
  {
    "series": "cse-dpp-2027",
    "order": 360,
    "name": "DPP 64 - Engineering Mathematics (Joint Distributions & Covariance)",
    "testLabel": "DPP 64",
    "testType": "DPP",
    "bracket": "Joint Distributions & Covariance",
    "subject": "em",
    "date": "Nov 03, 2026",
    "duration": "21 Min",
    "totalMarks": 8,
    "topicsCovered": "Joint Distributions & Covariance Practice Questions"
  }
];


function formatTopicsHtml(topics, testName) {
  if (!topics) return '';
  if (typeof topics !== 'string') return topics;
  if (topics.startsWith('<div')) return topics;
  
  // Split comma-separated topics into stylish chips
  const parts = topics.split(',').map(s => s.trim()).filter(Boolean);
  if (parts.length <= 1) return topics;
  
  let chipClass = 'pyq-topic-chip';
  const tn = (testName || '').toLowerCase();
  if (tn.includes('principles')) chipClass += ' bio-principles';
  else if (tn.includes('applications')) chipClass += ' bio-apps';
  else if (tn.includes('organisms') || tn.includes('populations')) chipClass += ' bio-ecology';
  
  const chips = parts.map(p => '<span class="' + chipClass + '">' + p + '</span>').join('');
  return '<div class="pyq-topic-chips-wrap">' + chips + '</div>';
}

window.renderPYQAccordion = function (isEnrolled = true, statusFilter = "all", seriesId = "cse-gate-2027") {
  // Collect all tests belonging to this series
  const registeredMap = new Map();

  // 1. Defaults first
  if (seriesId === "cse-gate-2027") {
    (window.PYQ_DEFAULT_TESTS || []).forEach(t => {
      const cleanName = (/^(TWT|SWT)/i.test(t.name))
        ? t.name.replace(/\s*-\s*(\d+)$/, ' -$1')
        : t.name;
      registeredMap.set(cleanName, { ...t, name: cleanName });
    });
  } else if (seriesId === "ee-gate-pyq-2027" || seriesId === "ee-gate-ace-2026") {
    (window.PYQ_EE_DEFAULT_TESTS || []).forEach(t => {
      const cleanName = t.name.replace(/\s*-\s*(\d+)$/, ' -$1');
      registeredMap.set(cleanName, { ...t, name: cleanName });
    });
  } else if (seriesId === "pw-cs-gate-2026") {
    (window.PYQ_PW_DEFAULT_TESTS || []).forEach(t => {
      registeredMap.set(t.name, { ...t });
    });
  } else if (seriesId === "pw-cs-gate") {
    (window.PYQ_PW_LEVEL_DEFAULT_TESTS || []).forEach(t => {
      registeredMap.set(t.name, { ...t });
    });
  } else if (seriesId === "neet-ug-practice") {
    (window.NEET_DEFAULT_TESTS || []).forEach(t => {
      registeredMap.set(t.name, { ...t });
    });
  } else if (seriesId === "cse-dpp-2027") {
    (window.PYQ_DPP_DEFAULT_TESTS || []).forEach(t => {
      registeredMap.set(t.name, { ...t });
    });
  }

  // 2. Tests from apexTestRegistry
  if (window.apexTestRegistry && Array.isArray(window.apexTestRegistry)) {
    window.apexTestRegistry.forEach(t => {
      if (t.series === seriesId && t.name) {
        let cleanName = (seriesId === "ee-gate-pyq-2027" || seriesId === "ee-gate-ace-2026")
          ? t.name.replace(/\s*-\s*(\d+)$/, ' -$1')
          : t.name;

        // Match against existing keys in registeredMap
        let matchedKey = null;
        const cleanLower = cleanName.toLowerCase().trim();

        // 1. Exact match first
        if (registeredMap.has(cleanName)) {
          matchedKey = cleanName;
        } else {
          for (const existingKey of registeredMap.keys()) {
            if (existingKey.toLowerCase().trim() === cleanLower) {
              matchedKey = existingKey;
              break;
            }
          }
        }

        // 2. Only if no exact match, try prefix match (scoped by subject so DPP 01 of one subject does not hijack another)
        if (!matchedKey) {
          const prefixMatch = cleanName.match(/^(TWT\s*\d+|SWT\s*\d+|MST\s*\d+|FLT\s*\d+|GBG\s*\d+|FST\s*\d+|DPP\s*\d+)/i);
          if (prefixMatch) {
            for (const [existingKey, existingData] of registeredMap.entries()) {
              if (t.subject && existingData.subject && t.subject !== existingData.subject) {
                continue;
              }
              const exPrefix = existingKey.match(/^(TWT\s*\d+|SWT\s*\d+|MST\s*\d+|FLT\s*\d+|GBG\s*\d+|FST\s*\d+|DPP\s*\d+)/i);
              if (exPrefix && exPrefix[1].replace(/\s+/g, ' ').toUpperCase() === prefixMatch[1].replace(/\s+/g, ' ').toUpperCase()) {
                matchedKey = existingKey;
                break;
              }
            }
          }
        }

        const targetKey = matchedKey || cleanName;
        const existingData = registeredMap.get(targetKey) || {};

        if (matchedKey && matchedKey !== cleanName) {
          registeredMap.delete(matchedKey);
        }

        registeredMap.set(targetKey, {
          ...existingData,
          ...t,
          series: seriesId,
          name: targetKey,
          date: t.date || existingData.date,
          topicsCovered: t.topicsCovered || t.topics || existingData.topicsCovered,
          duration: t.duration || existingData.duration,
          totalMarks: t.totalMarks || existingData.totalMarks,
          testLabel: t.testLabel || existingData.testLabel,
          testType: t.testType || existingData.testType,
          bracket: t.bracket || existingData.bracket,
          subject: t.subject || existingData.subject,
          isFree: t.isFree === true || t.free === true || t.status === "free" || t.status === "unlocked",
          questions: t.questions
        });
      }
    });
  }

  // 3. Tests from testSeries.schedule (with deduplication)
  const currentSeries = (window.testSeries || []).find(s => s.id === seriesId);
  if (currentSeries && Array.isArray(currentSeries.schedule)) {
    currentSeries.schedule.forEach(s => {
      const rawName = s[0];
      if (!rawName) return;
      const cleanName = rawName.replace(/\s*-\s*(\d+)$/, ' -$1');
      const tightName = rawName.replace(/\s*-\s*(\d+)$/, '-$1');
      if (registeredMap.has(rawName) || registeredMap.has(cleanName) || registeredMap.has(tightName)) {
        return; // Already present in registeredMap, skip duplicate!
      }
      registeredMap.set(rawName, {
        series: seriesId,
        name: rawName,
        date: s[1],
        questionCount: s[2]
      });
    });
  }

  const allTests = Array.from(registeredMap.values());
  const userResults = (typeof window.userResults !== 'undefined' && Array.isArray(window.userResults) && window.userResults.length > 0)
    ? window.userResults
    : JSON.parse(localStorage.getItem("apex_user_results") || "[]");
  const notifiedTests = JSON.parse(localStorage.getItem("apex_notified_tests") || "[]");

  // Render each subject card
  let html = `<div class="pyq-accordion-wrap">`;

  const rawTargetSubjects = (seriesId === "neet-ug-practice")
    ? (window.NEET_SUBJECTS || [])
    : ((seriesId === "ee-gate-pyq-2027" || seriesId === "ee-gate-ace-2026") ? (window.PYQ_EE_SUBJECTS || []) : (window.PYQ_CS_SUBJECTS || []));
  let targetSubjects = (seriesId === "cse-gate-2027" || seriesId === "neet-ug-practice")
    ? rawTargetSubjects
    : rawTargetSubjects.filter(s => s.id !== "isro" && s.id !== "gate_pyq");

  if (seriesId === "cse-dpp-2027") {
    targetSubjects = [
      {
        id: "dpp_free_demo",
        name: "Free Demo DPPs (All Subjects)",
        iconType: "text",
        iconVal: "🎁",
        iconBg: "#ecfdf5",
        iconColor: "#059669",
        isFreeDemoSection: true
      },
      ...targetSubjects
    ];
  }
  const activeTopicMap = (seriesId === "neet-ug-practice")
    ? (window.NEET_TOPIC_MAP || {})
    : ((seriesId === "ee-gate-pyq-2027" || seriesId === "ee-gate-ace-2026") ? (window.PYQ_EE_TOPIC_MAP || {}) : (window.PYQ_TOPIC_MAP || {}));
  targetSubjects.forEach((subj) => {
    // Sleek Coming Soon accordion row
    if (subj.comingSoon) {
      html += `
        <div class="pyq-subject-card coming-soon" id="pyq-card-${subj.id}">
          <div class="pyq-subject-head" style="cursor: default; opacity: 0.85;">
            <div class="pyq-head-left">
              <div class="pyq-icon-box" style="background:${subj.iconBg}; color:${subj.iconColor};">
                ${subj.iconType === "svg" ? subj.iconVal : subj.iconVal}
              </div>
              <div class="pyq-subj-title">${subj.name}</div>
            </div>
            <div class="pyq-head-right">
              <span class="pyq-done-badge" style="background: rgba(148, 163, 184, 0.15); color: #64748b; font-weight: 600;">Coming Soon</span>
            </div>
          </div>
        </div>`;
      return;
    }

    // Find tests matching this subject
    let subjTests;
    if (subj.id === "dpp_free_demo") {
      subjTests = allTests.filter(t => Array.isArray(window.PYQ_FREE_TESTS) && window.PYQ_FREE_TESTS.includes(t.name));
    } else {
      subjTests = allTests.filter(t => {
        if ((subj.id === "isro" || subj.id === "gate_pyq") && seriesId !== "cse-gate-2027") return false;
        if (t.subject) return t.subject === subj.id;
        return subj.regex && subj.regex.test(t.name);
      });
    }

    if (!subjTests || subjTests.length === 0) return;

    // Sort tests: For Free Demo sort by subject order; For ISRO & GATE PYQ sort by year descending; otherwise Topic Tests first, then Subject Tests
    if (subj.id === "dpp_free_demo") {
      const subjOrder = ["em", "dm", "dl", "dbms", "c_prog", "ds", "algo", "toc", "cd", "os", "coa", "cn"];
      subjTests.sort((a, b) => {
        const aIdx = subjOrder.indexOf(a.subject);
        const bIdx = subjOrder.indexOf(b.subject);
        return (aIdx !== -1 ? aIdx : 99) - (bIdx !== -1 ? bIdx : 99);
      });
    } else if (subj.id === "isro" || subj.id === "gate_pyq") {
      subjTests.sort((a, b) => {
        const aYear = parseInt((a.name.match(/\b(20\d\d)\b/) || [0, 0])[1], 10);
        const bYear = parseInt((b.name.match(/\b(20\d\d)\b/) || [0, 0])[1], 10);
        if (bYear !== aYear) return bYear - aYear;
        const aSetMatch = (a.name || "").match(/SET[- ]*(\d+)/i);
        const bSetMatch = (b.name || "").match(/SET[- ]*(\d+)/i);
        const aSet = aSetMatch ? parseInt(aSetMatch[1], 10) : 0;
        const bSet = bSetMatch ? parseInt(bSetMatch[1], 10) : 0;
        return aSet - bSet;
      });
    } else {
      subjTests.sort((a, b) => {
        if (a.order !== undefined && b.order !== undefined) {
          return a.order - b.order;
        }
        const aDpp = (a.testLabel || a.name || "").match(/DPP\s*(\d+)/i);
        const bDpp = (b.testLabel || b.name || "").match(/DPP\s*(\d+)/i);
        if (aDpp && bDpp) {
          return parseInt(aDpp[1], 10) - parseInt(bDpp[1], 10);
        }
        const aName = a.name || "";
        const bName = b.name || "";
        const aIsSubj = aName.toUpperCase().includes("SWT") || aName.toUpperCase().includes("SUBJECT");
        const bIsSubj = bName.toUpperCase().includes("SWT") || bName.toUpperCase().includes("SUBJECT");
        const aMatch = aName.match(/-?\s*(\d+)$/);
        const bMatch = bName.match(/-?\s*(\d+)$/);
        const aNum = aMatch ? parseInt(aMatch[1], 10) : 99;
        const bNum = bMatch ? parseInt(bMatch[1], 10) : 99;
        const aWeight = (aIsSubj ? 200 : 100) + aNum;
        const bWeight = (bIsSubj ? 200 : 100) + bNum;
        return aWeight - bWeight;
      });
    }

    // Check completion count
    let doneCount = 0;
    let topicIdx = 0;
    let subjectIdx = 0;

    const testItems = subjTests.map((t) => {
      const rawName = t.name;
      const bracketMatch = rawName.match(/\(([^)]+)\)/);
      const isISRO = subj.id === "isro" || /isro/i.test(rawName);
      const isGATEPYQ = subj.id === "gate_pyq" || (/^gate\s+cse\s+20\d\d/i.test(rawName) && subj.id !== "c_prog");

      let bracket = t.bracket || (bracketMatch ? bracketMatch[1] : rawName.replace(/^[A-Za-z\s]+-\s*/, ""));
      let testType = t.testType || "Topic";
      let testLabel = t.testLabel || "";

      if (subj.id === "dpp_free_demo") {
        const foundSubj = (window.PYQ_CS_SUBJECTS || []).find(s => s.id === t.subject);
        const subjTitle = foundSubj ? foundSubj.name : "DPP";
        testLabel = `${subjTitle} (DPP 01)`;
        testType = "Free Demo";
      } else if (isISRO) {
        testLabel = rawName;
        testType = "PYQ";
        bracket = "Scientist/Engineer 'SC' Examination";
      } else if (isGATEPYQ) {
        testLabel = rawName;
        testType = "PYQ";
        bracket = "Graduate Aptitude Test in Engineering (CS)";
      } else if (!t.testLabel || !t.testType) {
        const isTopic = rawName.toUpperCase().includes("TWT") || rawName.toUpperCase().includes("TOPIC");
        const isSubject = rawName.toUpperCase().includes("SWT") || rawName.toUpperCase().includes("SUBJECT");

        testType = isSubject ? "Subject" : "Topic";
        if (isSubject) {
          subjectIdx++;
          testLabel = `Subject Test ${subjectIdx}`;
        } else {
          topicIdx++;
          testLabel = `Topic Test ${topicIdx}`;
        }
      }

      // Look up topic description
      let topicsCovered = t.topicsCovered || t.topics;
      if (!topicsCovered && isISRO) {
        topicsCovered = "ISRO Previous Year Question Paper (Computer Science)";
      }
      if (!topicsCovered && isGATEPYQ) {
        topicsCovered = "GATE Official Previous Year Question Paper (Computer Science)";
      }
      if (!topicsCovered && window.PYQ_TOPIC_MAP) {
        topicsCovered = activeTopicMap[bracket] || activeTopicMap[bracket.trim()] || activeTopicMap[rawName];
        if (!topicsCovered) {
          const lower = bracket.trim().toLowerCase();
          for (const k of Object.keys(activeTopicMap)) {
            if (k.toLowerCase() === lower) {
              topicsCovered = window.PYQ_TOPIC_MAP[k];
              break;
            }
          }
        }
      }
      if (!topicsCovered) {
        topicsCovered = (testType === "Subject") ? `${subj.name} - Full Syllabus` : bracket;
      }

      // Check if test is free/unlocked
      const isFree = t.isFree === true || t.free === true || t.status === "free" || t.status === "unlocked" || seriesId === "neet-ug-practice" ||
        (Array.isArray(window.PYQ_FREE_TESTS) && (window.PYQ_FREE_TESTS.includes(rawName) || (bracket && window.PYQ_FREE_TESTS.includes(bracket)) || window.PYQ_FREE_TESTS.some(x => rawName.includes(x))));
      const canAttempt = isEnrolled || isFree;

      // Check result (most recent first, exact/bracket match without loose substring cross-matching)
      const allRes = (userResults || []).slice().reverse();
      const rawLower = (rawName || "").trim().toLowerCase();
      const bracketLower = bracketMatch ? bracketMatch[1].trim().toLowerCase() : null;

      const res = allRes.find(r => {
        if (!r || !r.testName) return false;
        // If seriesId is available on result and card, ensure they match to prevent cross-series collision
        if (typeof window.isResultForSeries === 'function' && !window.isResultForSeries(r, seriesId)) return false;
        const rSeriesId = (r.seriesId && r.seriesId !== 'undefined' && r.seriesId !== 'null') ? String(r.seriesId).trim() : null;
        if (rSeriesId && seriesId && rSeriesId !== String(seriesId)) return false;
        const rLower = r.testName.trim().toLowerCase();
        // 1. Exact or case-insensitive match
        if (r.testName === rawName || rLower === rawLower) return true;
        // 2. Bracket match if bracket was explicitly defined
        if (bracketLower && rLower === bracketLower) return true;
        // 3. Extracted bracket from r.testName (e.g. "CSE 2027-Topicwise Test-1 (c-programming(Loops-I))")
        const rBr = r.testName.match(/\(([^)]+)\)/);
        if (rBr) {
          const rBrLower = rBr[1].trim().toLowerCase();
          if (rBrLower === rawLower || (bracketLower && rBrLower === bracketLower)) return true;
        }
        return false;
      });
      const isAttempted = !!res;
      if (isAttempted) doneCount++;

      // Check if coming soon: explicit flag OR unattempted with no questions registered yet
      const hasQuestions = (Array.isArray(t.questions) && t.questions.length > 0) || (typeof t.questionCount === 'number' && t.questionCount > 0);
      const isComingSoon = (t.comingSoon === true || t.status === "coming_soon" || !hasQuestions) && !isAttempted;

      return {
        rawName,
        bracket,
        testType,
        testLabel,
        topicsCovered,
        duration: t.duration,
        totalMarks: t.totalMarks,
        isFree,
        canAttempt,
        isAttempted,
        isComingSoon,
        score: res && res.score !== undefined ? res.score : null,
        maxScore: res && res.maxScore !== undefined ? res.maxScore : (t.totalMarks || 100)
      };
    });

    // Filter tests by status tab if requested
    const filteredTests = testItems.filter(item => {
      if (statusFilter === "attempted") return item.isAttempted;
      if (statusFilter === "unattempted") return !item.isAttempted;
      return true;
    });

    const isInitiallyOpen = false; // Auto-expand when single subject series
    const totalCount = subjTests.length;

    html += `
      <div class="pyq-subject-card ${subj.isFreeDemoSection ? "free-demo-card" : ""} ${isInitiallyOpen ? "open" : ""}" id="pyq-card-${subj.id}">
        <div class="pyq-subject-head" onclick="window.togglePYQAccordion(this.closest('.pyq-subject-card'))">
          <div class="pyq-head-left">
            <div class="pyq-icon-box" style="background:${subj.iconBg}; color:${subj.iconColor};">
              ${subj.iconType === "svg" ? subj.iconVal : subj.iconVal}
            </div>
            <div class="pyq-subj-title">${subj.name}</div>
          </div>
          <div class="pyq-head-right">
            ${subj.isFreeDemoSection
        ? `<span class="pyq-done-badge" style="background: rgba(16, 185, 129, 0.15); color: #059669; font-weight: 700;">${doneCount} / ${totalCount} Done • Free Demo</span>`
        : (isEnrolled
          ? `<span class="pyq-done-badge">${doneCount} / ${totalCount} Done</span>`
          : `
                  <span class="pyq-locked-badge">
                    <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                    Locked
                  </span>
                  <span class="pyq-done-badge">${totalCount} Tests</span>
                `)
      }
            <svg class="pyq-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </div>
        </div>
        <div class="pyq-subject-body">
          <div class="pyq-table-responsive">
            <table class="pyq-table">
              <thead>
                <tr>
                  <th style="width: 44px; text-align: center;">
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#64748b" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                  </th>
                  <th style="min-width: 170px;">TEST NAME</th>
                  <th style="min-width: 250px;">TOPICS COVERED</th>
                  <th style="min-width: 140px;">STATUS</th>
                  <th style="min-width: 160px; text-align: right;">ACTION</th>
                </tr>
              </thead>
              <tbody>
                ${filteredTests.length > 0
        ? filteredTests
          .map(item => `
                          <tr>
                            <td style="text-align: center;">
                              ${item.isComingSoon
              ? `<div class="pyq-check-box coming-soon" title="Coming Soon">
                                      <svg viewBox="0 0 24 24" width="10" height="10" fill="none" stroke="#94a3b8" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                                    </div>`
              : (item.canAttempt
                ? `<div class="pyq-check-box ${item.isAttempted ? "checked" : ""}">
                                      <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="3.2"><polyline points="20 6 9 17 4 12"/></svg>
                                    </div>`
                : `<div class="pyq-check-box locked">
                                      <svg viewBox="0 0 24 24" width="10" height="10" fill="none" stroke="#94a3b8" stroke-width="2.5"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                                    </div>`)
            }
                            </td>
                            <td>
                              <div class="pyq-test-name-cell">
                                <span>${item.testLabel}</span>
                                <span class="pyq-type-pill ${item.testType.toLowerCase().replace(/\s+/g, '-')}">${item.testType}</span>
                              </div>
                              <div class="pyq-test-sublabel">${item.bracket || ""}</div>
                            </td>
                            <td class="pyq-topics-cell">${formatTopicsHtml(item.topicsCovered, item.rawName)}</td>
                            <td class="pyq-status-cell">
                              ${item.isComingSoon
              ? `<span class="pyq-status-coming">Coming Soon</span>`
              : (item.canAttempt
                ? (item.isAttempted
                  ? `<span class="pyq-status-done"><span class="pyq-status-dot done"></span> Score: <b>${item.score}/${item.maxScore}</b></span>`
                  : (item.isFree && !isEnrolled
                    ? `<span class="pyq-status-free">Free Demo</span>`
                    : `<span class="pyq-status-ready">Ready to Attempt</span>`))
                : `<span class="pyq-status-locked"><svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="#94a3b8" stroke-width="2.2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg> Locked</span>`)
            }
                            </td>
                            <td style="text-align: right;">
                              ${item.isComingSoon
              ? (notifiedTests.includes(item.rawName)
                ? `<button class="pyq-btn-notify notified" disabled>
                                      <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg>
                                      Notified
                                    </button>`
                : `<button class="pyq-btn-notify" onclick="window.handleNotifyMe(this, '${item.rawName.replace(/'/g, "\\'")}')">
                                      <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>
                                      Notify Me
                                    </button>`)
              : (item.canAttempt
                ? (item.isAttempted
                  ? `
                                        <div style="display: inline-flex; gap: 8px; justify-content: flex-end; align-items: center;">
                                          <button class="pyq-btn-result" onclick="if (typeof openPastResult === 'function') openPastResult('${item.rawName.replace(/'/g, "\\'")}', '${seriesId}')">View Result</button>
                                          <button class="pyq-btn-reattempt" onclick="window.launchPYQTest('${item.rawName.replace(/'/g, "\\'")}', true, '${seriesId}')">Reattempt</button>
                                        </div>`
                  : `
                                        <button class="pyq-btn-start" onclick="window.launchPYQTest('${item.rawName.replace(/'/g, "\\'")}', true, '${seriesId}')">
                                          Start
                                          <svg viewBox="0 0 24 24" width="11" height="11" fill="currentColor"><path d="M5 3l14 9-14 9V3z"/></svg>
                                        </button>`)
                : `
                                    <button class="pyq-btn-lock" onclick="window.promptEnrollment('${seriesId}')">
                                      <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                                      Unlock
                                    </button>
                                    `)
            }
                            </td>
                          </tr>
                        `)
          .join("")
        : `
                      <tr>
                        <td colspan="5" class="pyq-empty-tests">
                          ${totalCount === 0
          ? "Tests for this subject will be available soon."
          : "No tests matching this filter."
        }
                        </td>
                      </tr>
                    `
      }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    `;
  });

  html += `</div>`;
  return html;
};


/* ==========================================================================
   EE-GATE 2027 Subject-wise Accordion (GoClasses Style) Logic
   ========================================================================== */
window.EE_GATE_SUBJECTS = [
  {
    id: "ee_circuits",
    name: "Electric Circuits",
    badge: "3 Tests",
    tests: [
      {
        name: "EE 2027-Topicwise Test-1 (Electric Circuits -1)",
        full: "TWT - Electric Circuits -1",
        bracket: "Electric Circuits -1",
        type: "Topicwise Test",
        pattern: "KCL, KVL, Node & Mesh, Theorems",
        questions: 17,
        marks: 25,
        duration: "45 Mins",
        date: "Available Now",
        hasQuestions: true
      },
      {
        name: "EE 2027-Topicwise Test-2 (Electric Circuits -2)",
        full: "TWT - Electric Circuits -2",
        bracket: "Electric Circuits -2",
        type: "Topicwise Test",
        pattern: "Transient Analysis, Resonance, Two-Port Networks",
        questions: 17,
        marks: 25,
        duration: "45 Mins",
        date: "Available Now",
        hasQuestions: true
      },
      {
        name: "EE 2027-Subjectwise Test-1 (Electric Circuits)",
        full: "SWT - Electric Circuits",
        bracket: "Electric Circuits",
        type: "Subjectwise Test",
        pattern: "Complete Electric Circuits Syllabus",
        questions: 33,
        marks: 50,
        duration: "90 Mins",
        date: "Available Now",
        hasQuestions: true
      }
    ]
  },
  {
    id: "ee_control",
    name: "Control Systems",
    badge: "3 Tests",
    tests: [
      {
        name: "EE 2027-Topicwise Test-3 (Control Systems -1)",
        full: "TWT - Control Systems -1",
        bracket: "Control Systems -1",
        type: "Topicwise Test",
        pattern: "Block Diagrams, SFG, Time Response, Routh-Hurwitz",
        questions: 17,
        marks: 25,
        duration: "45 Mins",
        date: "Available Now",
        hasQuestions: true
      },
      {
        name: "EE 2027-Topicwise Test-4 (Control Systems -2)",
        full: "TWT - Control Systems -2",
        bracket: "Control Systems -2",
        type: "Topicwise Test",
        pattern: "Root Locus, Bode & Nyquist Plots, State Space",
        questions: 17,
        marks: 25,
        duration: "45 Mins",
        date: "Available Now",
        hasQuestions: true
      },
      {
        name: "EE 2027-Subjectwise Test-2 (Control Systems)",
        full: "SWT - Control Systems",
        bracket: "Control Systems",
        type: "Subjectwise Test",
        pattern: "Complete Control Systems Syllabus",
        questions: 33,
        marks: 50,
        duration: "90 Mins",
        date: "Available Now",
        hasQuestions: true
      }
    ]
  },
  {
    id: "ee_machines",
    name: "Electrical Machines",
    badge: "3 Tests",
    tests: [
      {
        name: "EE 2027-Topicwise Test-5 (Electrical Machines -1)",
        full: "TWT - Electrical Machines -1",
        bracket: "Electrical Machines -1",
        type: "Topicwise Test",
        pattern: "Transformers, Autotransformers, Voltage Regulation",
        questions: 17,
        marks: 25,
        duration: "45 Mins",
        date: "Available Now",
        hasQuestions: true
      },
      {
        name: "EE 2027-Topicwise Test-6 (Electrical Machines -2)",
        full: "TWT - Electrical Machines -2",
        bracket: "Electrical Machines -2",
        type: "Topicwise Test",
        pattern: "DC Machines, Induction Motors, Synchronous Machines",
        questions: 17,
        marks: 25,
        duration: "45 Mins",
        date: "Available Now",
        hasQuestions: true
      },
      {
        name: "EE 2027-Subjectwise Test-3 (Electrical Machines)",
        full: "SWT - Electrical Machines",
        bracket: "Electrical Machines",
        type: "Subjectwise Test",
        pattern: "Complete Electrical Machines Syllabus",
        questions: 33,
        marks: 50,
        duration: "90 Mins",
        date: "Available Now",
        hasQuestions: true
      }
    ]
  },
  {
    id: "ee_power_sys",
    name: "Power Systems",
    badge: "3 Tests",
    tests: [
      {
        name: "EE 2027-Topicwise Test-7 (Power Systems -1)",
        full: "TWT - Power Systems -1",
        bracket: "Power Systems -1",
        type: "Topicwise Test",
        pattern: "Transmission Line Models, Corona, Per Unit System",
        questions: 17,
        marks: 25,
        duration: "45 Mins",
        date: "Available Now",
        hasQuestions: true
      },
      {
        name: "EE 2027-Topicwise Test-8 (Power Systems -2)",
        full: "TWT - Power Systems -2",
        bracket: "Power Systems -2",
        type: "Topicwise Test",
        pattern: "Load Flow, Symmetrical/Unsymmetrical Faults, Stability",
        questions: 17,
        marks: 25,
        duration: "45 Mins",
        date: "Available Now",
        hasQuestions: true
      },
      {
        name: "EE 2027-Subjectwise Test-4 (Power Systems)",
        full: "SWT - Power Systems",
        bracket: "Power Systems",
        type: "Subjectwise Test",
        pattern: "Complete Power Systems & Protection Syllabus",
        questions: 33,
        marks: 50,
        duration: "90 Mins",
        date: "Available Now",
        hasQuestions: true
      }
    ]
  },
  {
    id: "ee_power_elec",
    name: "Power Electronics",
    badge: "3 Tests",
    tests: [
      {
        name: "EE 2027-Topicwise Test-9 (Power Electronics -1)",
        full: "TWT - Power Electronics -1",
        bracket: "Power Electronics -1",
        type: "Topicwise Test",
        pattern: "SCR, MOSFET, IGBT, Phase-Controlled Rectifiers",
        questions: 17,
        marks: 25,
        duration: "45 Mins",
        date: "Available Now",
        hasQuestions: true
      },
      {
        name: "EE 2027-Topicwise Test-10 (Power Electronics -2)",
        full: "TWT - Power Electronics -2",
        bracket: "Power Electronics -2",
        type: "Topicwise Test",
        pattern: "DC-DC Choppers, Inverters (VSI, CSI), PWM, Drives",
        questions: 17,
        marks: 25,
        duration: "45 Mins",
        date: "Available Now",
        hasQuestions: true
      },
      {
        name: "EE 2027-Subjectwise Test-5 (Power Electronics)",
        full: "SWT - Power Electronics",
        bracket: "Power Electronics",
        type: "Subjectwise Test",
        pattern: "Complete Power Electronics Syllabus",
        questions: 33,
        marks: 50,
        duration: "90 Mins",
        date: "Available Now",
        hasQuestions: true
      }
    ]
  },
  {
    id: "ee_signals",
    name: "Signals & Systems",
    badge: "3 Tests",
    tests: [
      {
        name: "EE 2027-Topicwise Test-11 (Signals & Systems -1)",
        full: "TWT - Signals & Systems -1",
        bracket: "Signals & Systems -1",
        type: "Topicwise Test",
        pattern: "Continuous & Discrete Time Signals, LTI Systems",
        questions: 17,
        marks: 25,
        duration: "45 Mins",
        date: "Available Now",
        hasQuestions: true
      },
      {
        name: "EE 2027-Topicwise Test-12 (Signals & Systems -2)",
        full: "TWT - Signals & Systems -2",
        bracket: "Signals & Systems -2",
        type: "Topicwise Test",
        pattern: "Fourier Series/Transform, Laplace & Z-Transform",
        questions: 17,
        marks: 25,
        duration: "45 Mins",
        date: "Available Now",
        hasQuestions: true
      },
      {
        name: "EE 2027-Subjectwise Test-6 (Signals & Systems)",
        full: "SWT - Signals & Systems",
        bracket: "Signals & Systems",
        type: "Subjectwise Test",
        pattern: "Complete Signals & Systems Syllabus",
        questions: 33,
        marks: 50,
        duration: "90 Mins",
        date: "Available Now",
        hasQuestions: true
      }
    ]
  },
  {
    id: "ee_digital",
    name: "Digital Electronics",
    badge: "3 Tests",
    tests: [
      {
        name: "EE 2027-Topicwise Test-13 (Digital Electronics -1)",
        full: "TWT - Digital Electronics -1",
        bracket: "Digital Electronics -1",
        type: "Topicwise Test",
        pattern: "Boolean Algebra, Logic Gates, Minimization, K-Maps",
        questions: 17,
        marks: 25,
        duration: "45 Mins",
        date: "Available Now",
        hasQuestions: true
      },
      {
        name: "EE 2027-Topicwise Test-14 (Digital Electronics -2)",
        full: "TWT - Digital Electronics -2",
        bracket: "Digital Electronics -2",
        type: "Topicwise Test",
        pattern: "Multiplexers, Counters, Flip-Flops, Registers, ADCs",
        questions: 17,
        marks: 25,
        duration: "45 Mins",
        date: "Available Now",
        hasQuestions: true
      },
      {
        name: "EE 2027-Subjectwise Test-7 (Digital Electronics)",
        full: "SWT - Digital Electronics",
        bracket: "Digital Electronics",
        type: "Subjectwise Test",
        pattern: "Complete Digital Electronics Syllabus",
        questions: 33,
        marks: 50,
        duration: "90 Mins",
        date: "Available Now",
        hasQuestions: true
      }
    ]
  },
  {
    id: "ee_analog",
    name: "Analog Electronics",
    badge: "3 Tests",
    tests: [
      {
        name: "EE 2027-Topicwise Test-15 (Analog Electronics -1)",
        full: "TWT - Analog Electronics -1",
        bracket: "Analog Electronics -1",
        type: "Topicwise Test",
        pattern: "Diode Circuits, BJT & MOSFET Biasing, Amplifiers",
        questions: 17,
        marks: 25,
        duration: "45 Mins",
        date: "Available Now",
        hasQuestions: true
      },
      {
        name: "EE 2027-Topicwise Test-16 (Analog Electronics -2)",
        full: "TWT - Analog Electronics -2",
        bracket: "Analog Electronics -2",
        type: "Topicwise Test",
        pattern: "Op-Amps, Active Filters, Feedback Amplifiers, 555 Timers",
        questions: 17,
        marks: 25,
        duration: "45 Mins",
        date: "Available Now",
        hasQuestions: true
      },
      {
        name: "EE 2027-Subjectwise Test-8 (Analog Electronics)",
        full: "SWT - Analog Electronics",
        bracket: "Analog Electronics",
        type: "Subjectwise Test",
        pattern: "Complete Analog Electronics Syllabus",
        questions: 33,
        marks: 50,
        duration: "90 Mins",
        date: "Available Now",
        hasQuestions: true
      }
    ]
  },
  {
    id: "ee_emi",
    name: "Measurements & Instrumentation (EMI)",
    badge: "3 Tests",
    tests: [
      {
        name: "EE 2027-Topicwise Test-17 (EMI -1)",
        full: "TWT - EMI -1",
        bracket: "EMI -1",
        type: "Topicwise Test",
        pattern: "Bridges, Potentiometers, PMMC, Moving Iron, Dynamometer",
        questions: 17,
        marks: 25,
        duration: "45 Mins",
        date: "Available Now",
        hasQuestions: true
      },
      {
        name: "EE 2027-Topicwise Test-18 (EMI -2)",
        full: "TWT - EMI -2",
        bracket: "EMI -2",
        type: "Topicwise Test",
        pattern: "Digital Voltmeters, Oscilloscopes (CRO), Instrument Transformers",
        questions: 17,
        marks: 25,
        duration: "45 Mins",
        date: "Available Now",
        hasQuestions: true
      },
      {
        name: "EE 2027-Subjectwise Test-9 (Electrical & Electronics Measurements)",
        full: "SWT - Electrical & Electronics Measurements",
        bracket: "Electrical & Electronics Measurements",
        type: "Subjectwise Test",
        pattern: "Complete Measurements & Instrumentation Syllabus",
        questions: 33,
        marks: 50,
        duration: "90 Mins",
        date: "Available Now",
        hasQuestions: true
      }
    ]
  },
  {
    id: "ee_emf",
    name: "Electromagnetic Fields (EMF)",
    badge: "2 Tests",
    tests: [
      {
        name: "EE 2027-Topicwise Test-19 (Electromagnetic Fields -1)",
        full: "TWT - Electromagnetic Fields -1",
        bracket: "Electromagnetic Fields -1",
        type: "Topicwise Test",
        pattern: "Coulomb's Law, Electric Field Intensity, Gauss's Law",
        questions: 17,
        marks: 25,
        duration: "45 Mins",
        date: "Oct 15, 2026",
        hasQuestions: false
      },
      {
        name: "EE 2027-Subjectwise Test-10 (Electromagnetic Fields)",
        full: "SWT - Electromagnetic Fields",
        bracket: "Electromagnetic Fields",
        type: "Subjectwise Test",
        pattern: "Ampere's Law, Faraday's Law, Maxwell's Equations, Wave Equation",
        questions: 33,
        marks: 50,
        duration: "90 Mins",
        date: "Available Now",
        hasQuestions: true
      }
    ]
  },
  {
    id: "ee_maths",
    name: "Engineering Mathematics",
    badge: "4 Tests",
    tests: [
      {
        name: "EE 2027-Topicwise Test-20 (Engineering Mathematics -1)",
        full: "TWT - Engineering Mathematics -1",
        bracket: "Engineering Mathematics -1",
        type: "Topicwise Test",
        pattern: "Linear Algebra (Matrices, Eigenvalues) & Calculus",
        questions: 17,
        marks: 25,
        duration: "45 Mins",
        date: "Available Now",
        hasQuestions: true
      },
      {
        name: "EE 2027-Topicwise Test-21 (Engineering Mathematics -2)",
        full: "TWT - Engineering Mathematics -2",
        bracket: "Engineering Mathematics -2",
        type: "Topicwise Test",
        pattern: "Differential Equations, Complex Variables, Probability",
        questions: 17,
        marks: 25,
        duration: "45 Mins",
        date: "Available Now",
        hasQuestions: true
      },
      {
        name: "EE 2027-Subjectwise Test-11 (Engineering Mathematics)",
        full: "SWT - Engineering Mathematics",
        bracket: "Engineering Mathematics",
        type: "Subjectwise Test",
        pattern: "Complete Engineering Mathematics Syllabus",
        questions: 33,
        marks: 50,
        duration: "90 Mins",
        date: "Available Now",
        hasQuestions: true
      },
      {
        name: "EE 2027-Subjectwise Test-12 (Advanced Engineering Mathematics)",
        full: "SWT - Advanced Engineering Mathematics",
        bracket: "Advanced Engineering Mathematics",
        type: "Subjectwise Test",
        pattern: "Numerical Methods, Vector Calculus, Transform Theory",
        questions: 33,
        marks: 50,
        duration: "90 Mins",
        date: "Oct 25, 2026",
        hasQuestions: false
      }
    ]
  },
  {
    id: "ee_aptitude",
    name: "General Aptitude",
    badge: "4 Tests",
    tests: [
      {
        name: "EE 2027-Topicwise Test-22 (General Aptitude -1)",
        full: "TWT - General Aptitude -1",
        bracket: "General Aptitude -1",
        type: "Topicwise Test",
        pattern: "English Grammar, Vocabulary, Reading Comprehension",
        questions: 15,
        marks: 15,
        duration: "30 Mins",
        date: "Available Now",
        hasQuestions: true
      },
      {
        name: "EE 2027-Topicwise Test-23 (General Aptitude -2)",
        full: "TWT - General Aptitude -2",
        bracket: "General Aptitude -2",
        type: "Topicwise Test",
        pattern: "Quantitative Aptitude, Spatial Reasoning, Analytical Ability",
        questions: 15,
        marks: 15,
        duration: "30 Mins",
        date: "Available Now",
        hasQuestions: true
      },
      {
        name: "EE 2027-Subjectwise Test-13 (General Aptitude)",
        full: "SWT - General Aptitude",
        bracket: "General Aptitude",
        type: "Subjectwise Test",
        pattern: "Complete General Aptitude GATE Section",
        questions: 15,
        marks: 15,
        duration: "30 Mins",
        date: "Available Now",
        hasQuestions: true
      },
      {
        name: "EE 2027-Subjectwise Test-14 (General Aptitude Comprehensive)",
        full: "SWT - General Aptitude Comprehensive",
        bracket: "General Aptitude Comprehensive",
        type: "Subjectwise Test",
        pattern: "Comprehensive Numerical & Verbal Ability",
        questions: 15,
        marks: 15,
        duration: "30 Mins",
        date: "Nov 05, 2026",
        hasQuestions: false
      }
    ]
  },
  {
    id: "ee_flt",
    name: "Full Length Mock Tests (FLT)",
    badge: "7 Tests",
    tests: [
      {
        name: "EE 2027-Full Length Test-1",
        full: "FLT - Mock Test 1",
        bracket: "Full Syllabus Mock 1",
        type: "Full Length Test",
        pattern: "Complete GATE 2027 EE Syllabus (Exact Exam Simulation)",
        questions: 65,
        marks: 100,
        duration: "180 Mins",
        date: "Nov 15, 2026",
        hasQuestions: false
      },
      {
        name: "EE 2027-Full Length Test-2",
        full: "FLT - Mock Test 2",
        bracket: "Full Syllabus Mock 2",
        type: "Full Length Test",
        pattern: "Complete GATE 2027 EE Syllabus (Exact Exam Simulation)",
        questions: 65,
        marks: 100,
        duration: "180 Mins",
        date: "Nov 25, 2026",
        hasQuestions: false
      },
      {
        name: "EE 2027-Full Length Test-3",
        full: "FLT - Mock Test 3",
        bracket: "Full Syllabus Mock 3",
        type: "Full Length Test",
        pattern: "Complete GATE 2027 EE Syllabus (Exact Exam Simulation)",
        questions: 65,
        marks: 100,
        duration: "180 Mins",
        date: "Dec 05, 2026",
        hasQuestions: false
      },
      {
        name: "EE 2027-Full Length Test-4",
        full: "FLT - Mock Test 4",
        bracket: "Full Syllabus Mock 4",
        type: "Full Length Test",
        pattern: "Complete GATE 2027 EE Syllabus (Exact Exam Simulation)",
        questions: 65,
        marks: 100,
        duration: "180 Mins",
        date: "Dec 15, 2026",
        hasQuestions: false
      },
      {
        name: "EE 2027-Full Length Test-5",
        full: "FLT - Mock Test 5",
        bracket: "Full Syllabus Mock 5",
        type: "Full Length Test",
        pattern: "Complete GATE 2027 EE Syllabus (Exact Exam Simulation)",
        questions: 65,
        marks: 100,
        duration: "180 Mins",
        date: "Dec 25, 2026",
        hasQuestions: false
      },
      {
        name: "EE 2027-Full Length Test-6",
        full: "FLT - Mock Test 6",
        bracket: "Full Syllabus Mock 6",
        type: "Full Length Test",
        pattern: "Complete GATE 2027 EE Syllabus (Exact Exam Simulation)",
        questions: 65,
        marks: 100,
        duration: "180 Mins",
        date: "Jan 05, 2027",
        hasQuestions: false
      },
      {
        name: "EE 2027-Full Length Test-7",
        full: "FLT - Mock Test 7",
        bracket: "Full Syllabus Mock 7",
        type: "Full Length Test",
        pattern: "Complete GATE 2027 EE Syllabus (Exact Exam Simulation)",
        questions: 65,
        marks: 100,
        duration: "180 Mins",
        date: "Jan 15, 2027",
        hasQuestions: false
      }
    ]
  }
];

window.findEETestResult = function (test, seriesId = "ee-gate-pyq-2027") {
  const list = window.userResults || [];
  if (!list || !list.length) return null;
  // 1. Exact match with test.name
  let found = list.find(r => (!r.seriesId || !seriesId || r.seriesId === seriesId) && r.testName === test.name);
  if (found) return found;
  // 2. Exact match with test.full
  if (test.full) {
    found = list.find(r => {
      const rSeriesId = (r.seriesId && r.seriesId !== 'undefined' && r.seriesId !== 'null') ? String(r.seriesId).trim() : null;
      return (!rSeriesId || !seriesId || rSeriesId === String(seriesId)) && r.testName === test.full;
    });
    if (found) return found;
  }
  // 3. Bracket match
  if (test.bracket) {
    const target = test.bracket.toLowerCase().trim();
    found = list.find(r => {
      const rSeriesId = (r.seriesId && r.seriesId !== 'undefined' && r.seriesId !== 'null') ? String(r.seriesId).trim() : null;
      if (rSeriesId && seriesId && rSeriesId !== String(seriesId)) return false;
      const m = r.testName.match(/\(([^)]+)\)/);
      if (m && m[1].toLowerCase().trim() === target) return true;
      if (r.testName.toLowerCase().includes(target)) return true;
      return false;
    });
    if (found) return found;
  }
  return null;
};

window.toggleEEAccordionCard = function (subjectId) {
  const card = document.getElementById(subjectId);
  if (card) {
    card.classList.toggle("open");
  }
};

window.promptEEEnroll = function () {
  const enrollBtn = document.getElementById("dEnrollBtn");
  if (enrollBtn) {
    enrollBtn.scrollIntoView({ behavior: "smooth", block: "center" });
    enrollBtn.classList.add("pulse-highlight");
    setTimeout(() => enrollBtn.classList.remove("pulse-highlight"), 1500);
  }
  if (typeof startEnrollment === "function") {
    startEnrollment("ee-gate-pyq-2027");
  } else if (typeof selectPaymentMethod === "function") {
    selectPaymentMethod("ee-gate-pyq-2027");
  }
};

window.renderEEAccordion = function (isUnlocked) {
  const chevronSvg = `<svg class="ee-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"></polyline></svg>`;
  const checkSvg = `<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.8"><polyline points="20 6 9 17 4 12"></polyline></svg>`;

  return window.EE_GATE_SUBJECTS.map((subj, idx) => {
    let completedCount = 0;
    subj.tests.forEach(t => {
      if (window.findEETestResult(t, "ee-gate-pyq-2027")) completedCount++;
    });

    // Default open first 3 subjects
    const isOpen = idx < 3 ? " open" : "";

    const rows = subj.tests.map(t => {
      const res = window.findEETestResult(t, "ee-gate-pyq-2027");
      const isAttempted = !!res;
      const score = isAttempted ? res.score : null;
      const maxScore = isAttempted ? (res.maxScore || t.marks || 50) : (t.marks || 50);

      let statusBadge = "";
      let actionButtons = "";

      const testActionName = (t.full || t.name).replace(/"/g, '&quot;');

      if (isAttempted) {
        statusBadge = `
          <span class="ee-badge completed">${checkSvg} Completed</span>
          <div class="ee-score-badge">🏆 Score: ${score}/${maxScore}</div>
        `;
        actionButtons = `
          <div class="ee-action-group">
            <button class="btn-ee-action btn-ee-result" data-name="${testActionName}" onclick="openPastResult(this.dataset.name, 'ee-gate-pyq-2027')">View Result</button>
            <button class="btn-ee-action btn-ee-reattempt" data-name="${testActionName}" onclick="openInstructions(this.dataset.name, 'ee-gate-pyq-2027')">Reattempt</button>
          </div>
        `;
      } else if (t.hasQuestions) {
        statusBadge = `<span class="ee-badge active">Active</span>`;
        if (isUnlocked) {
          actionButtons = `<button class="btn-ee-action btn-ee-start" data-name="${testActionName}" onclick="openInstructions(this.dataset.name, 'ee-gate-pyq-2027')">Start Test</button>`;
        } else {
          actionButtons = `<button class="btn-ee-action btn-ee-start" onclick="promptEEEnroll()">Enroll to Unlock</button>`;
        }
      } else {
        statusBadge = `<span class="ee-badge upcoming">Upcoming</span>`;
        actionButtons = `<button class="btn-ee-action btn-ee-locked" disabled>Coming ${t.date}</button>`;
      }

      return `
        <tr>
          <td>
            <div class="ee-test-name">${t.full || t.name}</div>
            <div class="ee-test-sub">${t.pattern}</div>
          </td>
          <td>${t.type}</td>
          <td><b>${t.questions} Qs</b> (${t.marks || 50} M)</td>
          <td>${t.duration}</td>
          <td>${statusBadge}</td>
          <td>${actionButtons}</td>
        </tr>
      `;
    }).join("");

    return `
      <div class="ee-subject-card${isOpen}" id="${subj.id}">
        <div class="ee-subject-header" onclick="toggleEEAccordionCard('${subj.id}')">
          <div class="ee-subject-title-wrap">
            <div class="ee-subject-icon">${idx + 1}</div>
            <div class="ee-subject-name">${subj.name}</div>
            <span class="ee-count-badge">${subj.badge}</span>
            ${completedCount > 0 ? `<span class="ee-completed-summary">${checkSvg} ${completedCount}/${subj.tests.length} Completed</span>` : ''}
          </div>
          <div>${chevronSvg}</div>
        </div>
        <div class="ee-subject-body">
          <table class="ee-table">
            <thead>
              <tr>
                <th>Test & Topics</th>
                <th>Pattern</th>
                <th>Questions</th>
                <th>Duration</th>
                <th>Status & Score</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              ${rows}
            </tbody>
          </table>
        </div>
      </div>
    `;
  }).join("");
};

try {
  localStorage.removeItem("apex_theme");
  if (typeof document !== "undefined" && document.body) {
    document.body.classList.remove("dark-mode");
  }
} catch (e) { }
