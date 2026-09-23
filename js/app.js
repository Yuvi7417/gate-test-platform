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
  // Close any open overlays/modals when navigating back
  document.querySelectorAll('.show, .open').forEach(el => {
    if (el.id && (el.id.includes('Overlay') || el.id.includes('Modal'))) {
      el.classList.remove('show', 'open');
    }
  });

  // Also reset body overflow which might have been hidden by overlays
  document.body.style.overflow = "";

  // Specific cleanups if certain overlays were open
  if (typeof playerTimerInterval !== 'undefined' && playerTimerInterval) {
    clearInterval(playerTimerInterval);
  }

  if (!e.state) {
    showView("list", false);
    return;
  }

  if (e.state.view === "detail") {
    if (typeof openDetail === "function") {
      openDetail(e.state.param, false);
    }
  } else if (e.state.view === "tests") {
    if (typeof openTestList === "function") {
      openTestList(e.state.param, false);
    }
  } else {
    showView(e.state.view, false);
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
    id: "cs-gate-pyq",
    code: "CSE",
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
    price: "₹130 + GST",
    basePrice: 130,
    brandLabel: "APEX EASY"
  },
  {
    id: "cs-gate-classes",
    code: "CSE",
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
    price: "₹259 + GST",
    basePrice: 259,
    brandLabel: "APEX CLASSES",
    // comingSoon: true
  },
  {
    id: "weekly-cs-gate-2027",
    code: "CSE",
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
    price: "₹125 + GST",
    basePrice: 125,
    brandLabel: "Weekly Classes"
    // comingSoon: true
  },
  {
    id: "pw-cs-gate-2026",
    code: "CSE",
    examTag: "GATE 2026",
    subjectTag: "Computer Science",
    title: "Wallah CS GATE 2026 Test Series",
    f: "gate",
    lang: "English",
    objective: "Objective",
    tests: 57,
    startDate: "2025-03-15",
    endDate: "2026-02-15",
    session: "2025-2026",
    desc: "Wallah test series for GATE CSE 2026 covering all core subjects, scheduled to match the exam calendar and build cumulative topic-wise speed.",
    features: [
      "wallah coverage of all core GATE CSE subjects",
      "Scheduled aligned with exam calendar",
      "Topic-wise cumulative testing",
      "Detailed solutions for every question",
      "Performance tracking against peers",
    ],
    batches: [
      {
        name: "Batch 1",
        start: "Mar 15, 2025",
        time: "12:00 AM – 11:59 PM",
        selected: true,
      },
    ],
    schedule: [
      // ["SWt - C programming", "Oct 01, 2026"],
      // ["SWt - C programming-1", "Oct 01, 2026"]
    ],
    oldPrice: "₹500",
    price: "₹98 + GST",
    basePrice: 98,
    brandLabel: "APEX WALLAH",
    comingSoon: true
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
    price: "₹104 + GST",
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
    tests: 47, // Aapke according tests ki ginti
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
    price: "₹94 + GST",
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
    price: "₹94 + GST",
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
    oldPrice: "₹1400",
    price: "₹130 + GST",
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
    price: "₹94 + GST",
    basePrice: 94,
    brandLabel: "APEX EASY"
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
    price: "₹94 + GST",
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
    price: "₹94 + GST",
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
    price: "₹94 + GST",
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
    price: "₹94 + GST",
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
    price: "₹94 + GST",
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
    price: "₹94 + GST",
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
    price: "₹94 + GST",
    basePrice: 94,
    brandLabel: "APEX EASY"
    // comingSoon: true
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
    price: "₹35 + GST",
    basePrice: 35,
    brandLabel: "APEX PYQ"
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
      el.className = "ts-card";
      if (!t.comingSoon) {
        el.onclick = () => openDetail(t.id);
      } else {
        el.classList.add("coming-soon");
      }
      el.innerHTML = `
          ${t.comingSoon ? '<div class="coming-soon-overlay">Coming Soon</div>' : ''}
          <span class="card-corner tl"></span><span class="card-corner br"></span>
          <div class="ts-banner"><div class="ts-banner-grid"></div>
            <div class="ts-code">${t.code}</div>
            <div class="ts-online">Online</div>
            <div class="ts-banner-text">
              <div class="ts-banner-main">Exam Practice<br>Test Series</div>
              <div class="apex-easy-brand">✨ ${t.brandLabel || "APEX EASY"}</div>
            </div>
          </div>
          <div class="ts-body">
            <div class="ts-tags"><span class="ts-tag exam">${t.examTag}</span><span class="ts-tag subject">${t.subjectTag}</span></div>
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

  document.getElementById("dBanner").innerHTML = `
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
  if (id === "cse-gate-2027") {
    const enrolled = (window.isEnrolledSeries && window.isEnrolledSeries(id)) || false;
    if (dSchedule) {
      dSchedule.classList.add("pyq-full-width");
      dSchedule.style.display = "block";
      dSchedule.style.width = "100%";
      dSchedule.innerHTML = window.renderPYQAccordion ? window.renderPYQAccordion(enrolled) : "";
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
      window.MathJax.typesetPromise([
        document.getElementById("bookmarkModalQText"),
        document.getElementById("bookmarkModalOptions"),
        document.getElementById("bookmarkModalSolutionContent")
      ]).catch(err => console.error("MathJax typeset failed:", err));
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
  "CPU Scheduling-II": "Round Robin Scheduling, Time Quantum, Multi-level Queue",
  "CPU Scheduling-III": "Scheduling Criteria, Turnaround Time, Waiting Time, Response Time",
  "CPU Scheduling-IV": "Real-time Scheduling, Multi-processor Scheduling, Priority Inversion",

  // Algorithms
  "Asymptotic Notation-I": "Big-O, Omega, Theta Notations, Growth of Functions",
  "Asymptotic Notation-II": "Properties of Asymptotic Notations, Function Comparisons",
  "Asymptotic Notation-III": "Worst Case, Average Case, Best Case Complexity Analysis",
  "Recurrence Relation-I": "Substitution Method, Master Theorem Basics",
  "Recurrence Relation-II": "Recursion Tree Method, Advanced Master Theorem Cases",
  "Recurrence Relation-III": "Akra-Bazzi Method, Non-homogeneous Recurrences",
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

  // Operating System (6 tests)
  { series: "cse-gate-2027", name: "TWT-Operating System(Process-I)", subject: "os" },
  { series: "cse-gate-2027", name: "TWT-Operating System(Process-II)", subject: "os" },
  { series: "cse-gate-2027", name: "TWT-Operating System(CPU Scheduling-I)", subject: "os" },
  { series: "cse-gate-2027", name: "TWT-Operating System(CPU Scheduling-II)", subject: "os" },
  { series: "cse-gate-2027", name: "TWT-Operating System(CPU Scheduling-III)", subject: "os" },
  { series: "cse-gate-2027", name: "TWT-Operating System(CPU Scheduling-IV)", subject: "os" },

  // Algorithms (6 tests)
  { series: "cse-gate-2027", name: "TWT-Algorithm(Asymptotic Notation-I)", subject: "algo" },
  { series: "cse-gate-2027", name: "TWT-Algorithm(Asymptotic Notation-II)", subject: "algo" },
  { series: "cse-gate-2027", name: "TWT-Algorithm(Asymptotic Notation-III)", subject: "algo" },
  { series: "cse-gate-2027", name: "TWT-Algorithm(Recurrence Relation-I)", subject: "algo" },
  { series: "cse-gate-2027", name: "TWT-Algorithm(Recurrence Relation-II)", subject: "algo" },
  { series: "cse-gate-2027", name: "TWT-Algorithm(Recurrence Relation-III)", subject: "algo" },
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
    id: "c_prog",
    name: "C Programming",
    iconType: "text",
    iconVal: "{}",
    iconBg: "#fee2e2",
    iconColor: "#ef4444",
    regex: /(c programming|c-programming)/i
  },
  {
    id: "ds",
    name: "Data Structures",
    iconType: "svg",
    iconVal: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="5" r="3"/><circle cx="6" cy="19" r="3"/><circle cx="18" cy="19" r="3"/><path d="M12 8v4M12 12l-6 4M12 12l6 4"/></svg>`,
    iconBg: "#ffe4e6",
    iconColor: "#e11d48",
    regex: /(data structure|data structures)/i
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
    regex: /(theory of computation|toc)/i
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
    regex: /(computer organization|coa|computer architecture)/i
  },
  {
    id: "os",
    name: "Operating System",
    iconType: "svg",
    iconVal: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="m7 10 3 3-3 3M13 16h4"/></svg>`,
    iconBg: "#ccfbf1",
    iconColor: "#0d9488",
    regex: /(operating system|os)/i
  },
  {
    id: "cn",
    name: "Computer Networks",
    iconType: "svg",
    iconVal: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1 4-10z"/></svg>`,
    iconBg: "#e0f2fe",
    iconColor: "#0284c7",
    regex: /(computer networks|computer network|cn)/i
  }
];

window.togglePYQAccordion = function(cardEl) {
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

window.isEnrolledSeries = function(id) {
  if (typeof enrolledIds !== "undefined" && Array.isArray(enrolledIds)) {
    return enrolledIds.includes(id);
  }
  try {
    const session = JSON.parse(localStorage.getItem("apexcore_user") || "{}");
    if (session && Array.isArray(session.enrolledCourses)) {
      return session.enrolledCourses.includes(id);
    }
  } catch(e){}
  return false;
};

window.promptEnrollment = function(seriesId = "cse-gate-2027") {
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

window.launchPYQTest = function(rawName, enrolled) {
  const isEnrolled = enrolled === true || (window.isEnrolledSeries && window.isEnrolledSeries("cse-gate-2027"));
  if (!isEnrolled) {
    window.promptEnrollment("cse-gate-2027");
    return;
  }

  // Ensure test is registered in testBackendIdMap
  const safeId = ("cse-gate-2027_" + rawName).toLowerCase().replace(/[^a-z0-9]/g, "_");
  window.testBackendIdMap = window.testBackendIdMap || {};
  window.testBackendIdMap[rawName] = safeId;
  window.testBackendIdMap["cse-gate-2027|" + rawName] = safeId;
  const bracket = rawName.match(/\(([^)]+)\)/);
  if (bracket) {
    window.testBackendIdMap[bracket[1]] = safeId;
    window.testBackendIdMap["cse-gate-2027|" + bracket[1]] = safeId;
  }

  if (typeof openInstructions === "function") {
    openInstructions(rawName);
  }
};

window.renderPYQAccordion = function(isEnrolled = true, statusFilter = "all") {
  // Collect all tests belonging to cse-gate-2027
  const registeredMap = new Map();

  // 1. Defaults first
  (window.PYQ_DEFAULT_TESTS || []).forEach(t => {
    registeredMap.set(t.name, { ...t });
  });

  // 2. Tests from apexTestRegistry
  if (window.apexTestRegistry && Array.isArray(window.apexTestRegistry)) {
    window.apexTestRegistry.forEach(t => {
      if (t.series === "cse-gate-2027" && t.name) {
        registeredMap.set(t.name, {
          series: t.series,
          name: t.name,
          date: t.date,
          topicsCovered: t.topicsCovered || t.topics,
          questions: t.questions
        });
      }
    });
  }

  // 3. Tests from testSeries.schedule
  const currentSeries = (window.testSeries || []).find(s => s.id === "cse-gate-2027");
  if (currentSeries && Array.isArray(currentSeries.schedule)) {
    currentSeries.schedule.forEach(s => {
      const rawName = s[0];
      if (rawName && !registeredMap.has(rawName)) {
        registeredMap.set(rawName, {
          series: "cse-gate-2027",
          name: rawName,
          date: s[1],
          questionCount: s[2]
        });
      }
    });
  }

  const allTests = Array.from(registeredMap.values());
  const userResults = (typeof window.userResults !== 'undefined' && Array.isArray(window.userResults) && window.userResults.length > 0)
    ? window.userResults
    : JSON.parse(localStorage.getItem("apex_user_results") || "[]");

  // Render each subject card
  let html = `<div class="pyq-accordion-wrap">`;

  window.PYQ_CS_SUBJECTS.forEach((subj) => {
    // Find tests matching this subject
    const subjTests = allTests.filter(t => {
      if (t.subject === subj.id) return true;
      return subj.regex && subj.regex.test(t.name);
    });

    // Check completion count
    let doneCount = 0;
    const testItems = subjTests.map((t, idx) => {
      const rawName = t.name;
      const bracketMatch = rawName.match(/\(([^)]+)\)/);
      const bracket = bracketMatch ? bracketMatch[1] : rawName.replace(/^[A-Za-z\s]+-\s*/, "");
      
      const isTopic = rawName.toUpperCase().includes("TWT") || rawName.toUpperCase().includes("TOPIC");
      const isSubject = rawName.toUpperCase().includes("SWT") || rawName.toUpperCase().includes("SUBJECT");
      
      let testType = isSubject ? "Subject" : "Topic";
      let testLabel = isSubject ? `Subject Test ${idx + 1}` : `Topic Test ${idx + 1}`;
      let topicsCovered = t.topicsCovered || t.topics || (window.PYQ_TOPIC_MAP && window.PYQ_TOPIC_MAP[bracket]) || bracket;

      // Check result
      const res = userResults.find(r => {
        if (!r || !r.testName) return false;
        if (r.testName === rawName) return true;
        if (bracket && r.testName.includes(bracket)) return true;
        if (r.testName.includes(rawName) || rawName.includes(r.testName)) return true;
        return false;
      });
      const isAttempted = !!res;
      if (isAttempted) doneCount++;

      return {
        rawName,
        bracket,
        testType,
        testLabel,
        topicsCovered,
        isAttempted,
        score: res && res.score !== undefined ? res.score : null,
        maxScore: res && res.maxScore !== undefined ? res.maxScore : 100
      };
    });

    // Filter tests by status tab if requested
    const filteredTests = testItems.filter(item => {
      if (statusFilter === "attempted") return item.isAttempted;
      if (statusFilter === "unattempted") return !item.isAttempted;
      return true;
    });

    const isInitiallyOpen = false; // Always closed initially, only opens when clicked
    const totalCount = subjTests.length;

    html += `
      <div class="pyq-subject-card ${isInitiallyOpen ? "open" : ""}" id="pyq-card-${subj.id}">
        <div class="pyq-subject-head" onclick="window.togglePYQAccordion(this.closest('.pyq-subject-card'))">
          <div class="pyq-head-left">
            <div class="pyq-icon-box" style="background:${subj.iconBg}; color:${subj.iconColor};">
              ${subj.iconType === "svg" ? subj.iconVal : subj.iconVal}
            </div>
            <div class="pyq-subj-title">${subj.name}</div>
          </div>
          <div class="pyq-head-right">
            ${
              isEnrolled
                ? `<span class="pyq-done-badge">${doneCount} / ${totalCount} Done</span>`
                : `
                  <span class="pyq-locked-badge">
                    <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                    Locked
                  </span>
                  <span class="pyq-done-badge">${totalCount} Tests</span>
                `
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
                ${
                  filteredTests.length > 0
                    ? filteredTests
                        .map(item => `
                          <tr>
                            <td style="text-align: center;">
                              ${
                                isEnrolled
                                  ? `<div class="pyq-check-box ${item.isAttempted ? "checked" : ""}">
                                      <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="3.2"><polyline points="20 6 9 17 4 12"/></svg>
                                    </div>`
                                  : `<div class="pyq-check-box locked">
                                      <svg viewBox="0 0 24 24" width="10" height="10" fill="none" stroke="#94a3b8" stroke-width="2.5"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                                    </div>`
                              }
                            </td>
                            <td>
                              <div class="pyq-test-name-cell">
                                <span>${item.testLabel}</span>
                                <span class="pyq-type-pill ${item.testType.toLowerCase()}">${item.testType}</span>
                              </div>
                              <div class="pyq-test-sublabel">${item.bracket}</div>
                            </td>
                            <td class="pyq-topics-cell">${item.topicsCovered}</td>
                            <td class="pyq-status-cell">
                              ${
                                isEnrolled
                                  ? (item.isAttempted
                                      ? `<span class="pyq-status-done"><span class="pyq-status-dot done"></span> Score: <b>${item.score}/${item.maxScore}</b></span>`
                                      : `<span class="pyq-status-ready">Ready to Attempt</span>`)
                                  : `<span class="pyq-status-locked"><svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="#94a3b8" stroke-width="2.2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg> Locked</span>`
                              }
                            </td>
                            <td style="text-align: right;">
                              ${
                                isEnrolled
                                  ? (item.isAttempted
                                      ? `
                                      <div style="display: inline-flex; gap: 8px; justify-content: flex-end; align-items: center;">
                                        <button class="pyq-btn-result" onclick="if (typeof openPastResult === 'function') openPastResult('${item.rawName.replace(/'/g, "\\'")}')">View Result</button>
                                        <button class="pyq-btn-reattempt" onclick="window.launchPYQTest('${item.rawName.replace(/'/g, "\\'")}', true)">Reattempt</button>
                                      </div>`
                                      : `
                                      <button class="pyq-btn-start" onclick="window.launchPYQTest('${item.rawName.replace(/'/g, "\\'")}', true)">
                                        Start
                                        <svg viewBox="0 0 24 24" width="11" height="11" fill="currentColor"><path d="M5 3l14 9-14 9V3z"/></svg>
                                      </button>`)
                                  : `
                                  <button class="pyq-btn-lock" onclick="window.promptEnrollment('cse-gate-2027')">
                                    <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                                    Unlock
                                  </button>
                                  `
                              }
                            </td>
                          </tr>
                        `)
                        .join("")
                    : `
                      <tr>
                        <td colspan="5" class="pyq-empty-tests">
                          ${
                            totalCount === 0
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
