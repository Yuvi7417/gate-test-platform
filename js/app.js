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
      ["SWt - C programming", "Oct 01, 2026"],
      ["SWt - Algorithm", "Oct 01, 2026"],
      ["Swt - OS", "Oct 01, 2026"],
      ["Swt - OS-Part2", "Oct 01, 2026"],
      ["Swt - OS-Part3", "Oct 01, 2026"],
      ["Swt - OS-Part4", "Oct 01, 2026"],
      ["Swt - OS-Part5", "Oct 01, 2026"]
    ],
    oldPrice: "₹500",
    price: "₹98 + GST",
    basePrice: 98,
    brandLabel: "APEX WALLAH",
    // comingSoon: true
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
    tests: undefined,
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

  if (t.id === 'pw-cs-gate-2026' && window.renderPWAccordion) {
    document.getElementById("dSchedule").className = "pw-accordion-schedule-wrap";
    const enrolled = typeof isUserEnrolled === 'function' ? isUserEnrolled('pw-cs-gate-2026') : false;
    document.getElementById("dSchedule").innerHTML = window.renderPWAccordion(enrolled);
  } else {
    document.getElementById("dSchedule").className = "detail-schedule";
    document.getElementById("dSchedule").innerHTML = t.schedule
      .map(
        (s) => `
        <div class="schedule-card">
          <div class="schedule-icon">${calIcon}</div>
          <div><div class="schedule-name">${s[0]}</div><div class="schedule-date">Date: ${s[1]}</div></div>
        </div>`,
      )
      .join("");
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
   Wallah CS GATE 2026 Subject-wise Accordion (GoClasses Style) Logic
   ========================================================================== */
window.PW_CS_SUBJECTS = [
  {
    id: "pw_prog_ds",
    name: "C Programming & Data Structures",
    badge: "7 Tests",
    tests: [
      {
        name: "CSE 2026-Subjectwise Test-1 (C programming)",
        rawName: "SWt - C programming",
        bracket: "C programming",
        type: "Subjectwise Test",
        pattern: "GATE Exam Pattern (MCQ/MSQ/NAT)",
        questions: 33,
        marks: 50,
        duration: "90 Mins",
        date: "Available Now",
        hasQuestions: true
      },
      {
        name: "CSE 2026-Topicwise Test-1 (c programming)",
        rawName: "TWT - c programming",
        bracket: "c programming",
        type: "Topicwise Test",
        pattern: "Loops, Pointers & Functions",
        questions: 17,
        marks: 25,
        duration: "45 Mins",
        date: "Available Now",
        hasQuestions: false
      },
      {
        name: "CSE 2026-Topicwise Test-2 (Arrays & Strings)",
        rawName: "TWT - Arrays & Strings",
        bracket: "Arrays & Strings",
        type: "Topicwise Test",
        pattern: "Arrays, Matrices & String Manipulation",
        questions: 17,
        marks: 25,
        duration: "45 Mins",
        date: "Oct 10, 2026",
        hasQuestions: false
      },
      {
        name: "CSE 2026-Topicwise Test-3 (Structures & Unions)",
        rawName: "TWT - Structures & Unions",
        bracket: "Structures & Unions",
        type: "Topicwise Test",
        pattern: "Structures, Dynamic Memory & Recursion",
        questions: 17,
        marks: 25,
        duration: "45 Mins",
        date: "Oct 15, 2026",
        hasQuestions: false
      },
      {
        name: "CSE 2026-Topicwise Test-8 (Programming and Data Structures-1)",
        rawName: "TWT - Programming and Data Structures-1",
        bracket: "Programming and Data Structures-1",
        type: "Topicwise Test",
        pattern: "Stacks, Queues & Linked Lists",
        questions: 17,
        marks: 25,
        duration: "45 Mins",
        date: "Available Now",
        hasQuestions: false
      },
      {
        name: "CSE 2026-Topicwise Test-9 (Programming and Data Structures-2)",
        rawName: "TWT - Programming and Data Structures-2",
        bracket: "Programming and Data Structures-2",
        type: "Topicwise Test",
        pattern: "Binary Trees, BST & Heaps",
        questions: 17,
        marks: 25,
        duration: "45 Mins",
        date: "Available Now",
        hasQuestions: false
      },
      {
        name: "CSE 2026-Subjectwise Test-2 (Data Structures Complete)",
        rawName: "SWt - Data Structures Complete",
        bracket: "Data Structures Complete",
        type: "Subjectwise Test",
        pattern: "Complete Data Structures Syllabus",
        questions: 33,
        marks: 50,
        duration: "90 Mins",
        date: "Oct 25, 2026",
        hasQuestions: false
      }
    ]
  },
  {
    id: "pw_algo",
    name: "Algorithms",
    badge: "6 Tests",
    tests: [
      {
        name: "CSE 2026-Subjectwise Test-2 (Algorithm)",
        rawName: "SWt - Algorithm",
        bracket: "Algorithm",
        type: "Subjectwise Test",
        pattern: "GATE Exam Pattern (MCQ/MSQ/NAT)",
        questions: 33,
        marks: 50,
        duration: "90 Mins",
        date: "Available Now",
        hasQuestions: true
      },
      {
        name: "CSE 2026-Topicwise Test-21 (Asymptotic Analysis & Recurrences)",
        rawName: "TWT - Asymptotic Analysis & Recurrences",
        bracket: "Asymptotic Analysis",
        type: "Topicwise Test",
        pattern: "Big-O, Omega, Theta & Master Theorem",
        questions: 17,
        marks: 25,
        duration: "45 Mins",
        date: "Available Now",
        hasQuestions: false
      },
      {
        name: "CSE 2026-Topicwise Test-22 (Divide and Conquer & Sorting)",
        rawName: "TWT - Divide and Conquer",
        bracket: "Divide and Conquer",
        type: "Topicwise Test",
        pattern: "Merge Sort, Quick Sort, Binary Search",
        questions: 17,
        marks: 25,
        duration: "45 Mins",
        date: "Oct 12, 2026",
        hasQuestions: false
      },
      {
        name: "CSE 2026-Topicwise Test-23 (Algorithms-1)",
        rawName: "TWT - Algorithms-1",
        bracket: "Algorithms-1",
        type: "Topicwise Test",
        pattern: "Greedy Algorithms & Dynamic Programming",
        questions: 17,
        marks: 25,
        duration: "45 Mins",
        date: "Available Now",
        hasQuestions: false
      },
      {
        name: "CSE 2026-Topicwise Test-24 (Algorithm-2)",
        rawName: "TWT - Algorithm-2",
        bracket: "Algorithm-2",
        type: "Topicwise Test",
        pattern: "Graph Algorithms (BFS, DFS, Dijkstra, Prim)",
        questions: 17,
        marks: 25,
        duration: "45 Mins",
        date: "Available Now",
        hasQuestions: false
      },
      {
        name: "CSE 2026-Subjectwise Test-3 (Advanced Algorithms)",
        rawName: "SWt - Advanced Algorithms",
        bracket: "Advanced Algorithms",
        type: "Subjectwise Test",
        pattern: "Complete Algorithms Syllabus",
        questions: 33,
        marks: 50,
        duration: "90 Mins",
        date: "Nov 01, 2026",
        hasQuestions: false
      }
    ]
  },
  {
    id: "pw_os",
    name: "Operating Systems",
    badge: "7 Tests",
    tests: [
      {
        name: "CSE 2026-Subjectwise Test-3 (OS)",
        rawName: "Swt-OS",
        bracket: "OS",
        type: "Subjectwise Test",
        pattern: "Processes, Threads & CPU Scheduling",
        questions: 33,
        marks: 50,
        duration: "90 Mins",
        date: "Available Now",
        hasQuestions: true
      },
      {
        name: "CSE 2026-Subjectwise Test-4 (OS-Part2)",
        rawName: "Swt-OS-Part2",
        bracket: "OS-Part2",
        type: "Subjectwise Test",
        pattern: "Process Synchronization & Semaphores",
        questions: 33,
        marks: 50,
        duration: "90 Mins",
        date: "Available Now",
        hasQuestions: true
      },
      {
        name: "CSE 2026-Subjectwise Test-5 (OS-Part3)",
        rawName: "Swt-OS-Part3",
        bracket: "OS-Part3",
        type: "Subjectwise Test",
        pattern: "Deadlocks & Resource Allocation",
        questions: 33,
        marks: 50,
        duration: "90 Mins",
        date: "Available Now",
        hasQuestions: true
      },
      {
        name: "CSE 2026-Subjectwise Test-6 (OS-Part4)",
        rawName: "Swt-OS-Part4",
        bracket: "OS-Part4",
        type: "Subjectwise Test",
        pattern: "Memory Management & Paging",
        questions: 33,
        marks: 50,
        duration: "90 Mins",
        date: "Available Now",
        hasQuestions: true
      },
      {
        name: "CSE 2026-Subjectwise Test-7 (OS-Part5)",
        rawName: "Swt-OS-Part5",
        bracket: "OS-Part5",
        type: "Subjectwise Test",
        pattern: "Virtual Memory, File Systems & Disk",
        questions: 33,
        marks: 50,
        duration: "90 Mins",
        date: "Available Now",
        hasQuestions: true
      },
      {
        name: "CSE 2026-Topicwise Test-6 (Operating System-1)",
        rawName: "TWT - Operating System-1",
        bracket: "Operating System-1",
        type: "Topicwise Test",
        pattern: "CPU Scheduling & Synchronization",
        questions: 17,
        marks: 25,
        duration: "45 Mins",
        date: "Available Now",
        hasQuestions: false
      },
      {
        name: "CSE 2026-Topicwise Test-7 (Operating System-2)",
        rawName: "TWT - Operating System-2",
        bracket: "Operating System-2",
        type: "Topicwise Test",
        pattern: "Memory Management & Virtual Memory",
        questions: 17,
        marks: 25,
        duration: "45 Mins",
        date: "Available Now",
        hasQuestions: false
      }
    ]
  },
  {
    id: "pw_dbms",
    name: "Database Management Systems (DBMS)",
    badge: "5 Tests",
    tests: [
      {
        name: "CSE 2026-Topicwise Test-19 (Database-1)",
        rawName: "TWT - Database-1",
        bracket: "Database-1",
        type: "Topicwise Test",
        pattern: "ER Model, Relational Model & Relational Algebra",
        questions: 17,
        marks: 25,
        duration: "45 Mins",
        date: "Available Now",
        hasQuestions: false
      },
      {
        name: "CSE 2026-Topicwise Test-20 (Database-2)",
        rawName: "TWT - Database-2",
        bracket: "Database-2",
        type: "Topicwise Test",
        pattern: "SQL Queries, Joins, Aggregations & Views",
        questions: 17,
        marks: 25,
        duration: "45 Mins",
        date: "Nov 05, 2026",
        hasQuestions: false
      },
      {
        name: "CSE 2026-Topicwise Test-21 (Database-3)",
        rawName: "TWT - Database-3",
        bracket: "Database-3",
        type: "Topicwise Test",
        pattern: "Normalization, Functional Dependencies & Normal Forms",
        questions: 17,
        marks: 25,
        duration: "45 Mins",
        date: "Nov 10, 2026",
        hasQuestions: false
      },
      {
        name: "CSE 2026-Topicwise Test-22 (Database-4)",
        rawName: "TWT - Database-4",
        bracket: "Database-4",
        type: "Topicwise Test",
        pattern: "Transactions, Concurrency Control & Serializability",
        questions: 17,
        marks: 25,
        duration: "45 Mins",
        date: "Nov 15, 2026",
        hasQuestions: false
      },
      {
        name: "CSE 2026-Subjectwise Test-8 (DBMS Full)",
        rawName: "SWt - DBMS Full",
        bracket: "DBMS Full",
        type: "Subjectwise Test",
        pattern: "Complete DBMS Syllabus",
        questions: 33,
        marks: 50,
        duration: "90 Mins",
        date: "Nov 20, 2026",
        hasQuestions: false
      }
    ]
  },
  {
    id: "pw_toc",
    name: "Theory of Computation (TOC)",
    badge: "5 Tests",
    tests: [
      {
        name: "CSE 2026-Topicwise Test-24 (Theory Of Computation-1)",
        rawName: "TWT - Theory Of Computation-1",
        bracket: "Theory Of Computation-1",
        type: "Topicwise Test",
        pattern: "DFA, NFA, Regular Expressions & Regular Languages",
        questions: 17,
        marks: 25,
        duration: "45 Mins",
        date: "Available Now",
        hasQuestions: false
      },
      {
        name: "CSE 2026-Topicwise Test-25 (Theory Of Computation-2)",
        rawName: "TWT - Theory Of Computation-2",
        bracket: "Theory Of Computation-2",
        type: "Topicwise Test",
        pattern: "Pumping Lemma & Minimization of DFA",
        questions: 17,
        marks: 25,
        duration: "45 Mins",
        date: "Nov 18, 2026",
        hasQuestions: false
      },
      {
        name: "CSE 2026-Topicwise Test-26 (Theory Of Computation-3)",
        rawName: "TWT - Theory Of Computation-3",
        bracket: "Theory Of Computation-3",
        type: "Topicwise Test",
        pattern: "Context Free Grammars & Pushdown Automata (PDA)",
        questions: 17,
        marks: 25,
        duration: "45 Mins",
        date: "Nov 22, 2026",
        hasQuestions: false
      },
      {
        name: "CSE 2026-Topicwise Test-27 (Theory Of Computation-4)",
        rawName: "TWT - Theory Of Computation-4",
        bracket: "Theory Of Computation-4",
        type: "Topicwise Test",
        pattern: "Turing Machines & Decidability / Undecidability",
        questions: 17,
        marks: 25,
        duration: "45 Mins",
        date: "Nov 26, 2026",
        hasQuestions: false
      },
      {
        name: "CSE 2026-Subjectwise Test-9 (TOC Full)",
        rawName: "SWt - TOC Full",
        bracket: "TOC Full",
        type: "Subjectwise Test",
        pattern: "Complete Theory of Computation Syllabus",
        questions: 33,
        marks: 50,
        duration: "90 Mins",
        date: "Nov 30, 2026",
        hasQuestions: false
      }
    ]
  },
  {
    id: "pw_compiler",
    name: "Compiler Design",
    badge: "4 Tests",
    tests: [
      {
        name: "CSE 2026-Topicwise Test-28 (Lexical Analysis & LL Parsing)",
        rawName: "TWT - Lexical Analysis",
        bracket: "Lexical Analysis",
        type: "Topicwise Test",
        pattern: "Token Recognition, LL(1) Grammars & Parsing",
        questions: 17,
        marks: 25,
        duration: "45 Mins",
        date: "Dec 02, 2026",
        hasQuestions: false
      },
      {
        name: "CSE 2026-Topicwise Test-29 (LR Parsing & Syntax Directed Translation)",
        rawName: "TWT - LR Parsing",
        bracket: "LR Parsing",
        type: "Topicwise Test",
        pattern: "SLR, CLR, LALR & SDT Schemes",
        questions: 17,
        marks: 25,
        duration: "45 Mins",
        date: "Dec 06, 2026",
        hasQuestions: false
      },
      {
        name: "CSE 2026-Topicwise Test-30 (Intermediate Code & Runtime Env)",
        rawName: "TWT - Intermediate Code",
        bracket: "Intermediate Code",
        type: "Topicwise Test",
        pattern: "TAC, Activation Records, Symbol Tables",
        questions: 17,
        marks: 25,
        duration: "45 Mins",
        date: "Dec 10, 2026",
        hasQuestions: false
      },
      {
        name: "CSE 2026-Subjectwise Test-10 (Compiler Design Full)",
        rawName: "SWt - Compiler Design Full",
        bracket: "Compiler Design Full",
        type: "Subjectwise Test",
        pattern: "Complete Compiler Design Syllabus",
        questions: 33,
        marks: 50,
        duration: "90 Mins",
        date: "Dec 14, 2026",
        hasQuestions: false
      }
    ]
  },
  {
    id: "pw_coa",
    name: "Computer Organization & Architecture (COA)",
    badge: "5 Tests",
    tests: [
      {
        name: "CSE 2026-Topicwise Test-31 (Machine Instructions & Addressing)",
        rawName: "TWT - Machine Instructions",
        bracket: "Machine Instructions",
        type: "Topicwise Test",
        pattern: "Addressing Modes & Instruction Formats",
        questions: 17,
        marks: 25,
        duration: "45 Mins",
        date: "Dec 16, 2026",
        hasQuestions: false
      },
      {
        name: "CSE 2026-Topicwise Test-32 (ALU & Computer Arithmetic)",
        rawName: "TWT - Computer Arithmetic",
        bracket: "Computer Arithmetic",
        type: "Topicwise Test",
        pattern: "Booth's Algorithm, Floating Point (IEEE 754)",
        questions: 17,
        marks: 25,
        duration: "45 Mins",
        date: "Dec 19, 2026",
        hasQuestions: false
      },
      {
        name: "CSE 2026-Topicwise Test-33 (Pipelining & Hazards)",
        rawName: "TWT - Pipelining",
        bracket: "Pipelining",
        type: "Topicwise Test",
        pattern: "Structural, Data & Control Hazards, Speedup",
        questions: 17,
        marks: 25,
        duration: "45 Mins",
        date: "Dec 22, 2026",
        hasQuestions: false
      },
      {
        name: "CSE 2026-Topicwise Test-34 (Memory Hierarchy & Cache)",
        rawName: "TWT - Cache Memory",
        bracket: "Cache Memory",
        type: "Topicwise Test",
        pattern: "Direct, Set-Associative Mapping & Cache Hits/Misses",
        questions: 17,
        marks: 25,
        duration: "45 Mins",
        date: "Dec 26, 2026",
        hasQuestions: false
      },
      {
        name: "CSE 2026-Subjectwise Test-11 (COA Full)",
        rawName: "SWt - COA Full",
        bracket: "COA Full",
        type: "Subjectwise Test",
        pattern: "Complete COA Syllabus",
        questions: 33,
        marks: 50,
        duration: "90 Mins",
        date: "Dec 30, 2026",
        hasQuestions: false
      }
    ]
  },
  {
    id: "pw_cn",
    name: "Computer Networks",
    badge: "5 Tests",
    tests: [
      {
        name: "CSE 2026-Topicwise Test-35 (Data Link Layer & Framing)",
        rawName: "TWT - Data Link Layer",
        bracket: "Data Link Layer",
        type: "Topicwise Test",
        pattern: "Framing, Error Detection (CRC), Sliding Window",
        questions: 17,
        marks: 25,
        duration: "45 Mins",
        date: "Jan 03, 2027",
        hasQuestions: false
      },
      {
        name: "CSE 2026-Topicwise Test-36 (Network Layer & IP Addressing)",
        rawName: "TWT - Network Layer",
        bracket: "Network Layer",
        type: "Topicwise Test",
        pattern: "IPv4/IPv6, Subnetting, CIDR & Fragmentation",
        questions: 17,
        marks: 25,
        duration: "45 Mins",
        date: "Jan 06, 2027",
        hasQuestions: false
      },
      {
        name: "CSE 2026-Topicwise Test-37 (Routing Algorithms)",
        rawName: "TWT - Routing Algorithms",
        bracket: "Routing Algorithms",
        type: "Topicwise Test",
        pattern: "Distance Vector, Link State, OSPF & BGP",
        questions: 17,
        marks: 25,
        duration: "45 Mins",
        date: "Jan 09, 2027",
        hasQuestions: false
      },
      {
        name: "CSE 2026-Topicwise Test-38 (Transport Layer & TCP/UDP)",
        rawName: "TWT - Transport Layer",
        bracket: "Transport Layer",
        type: "Topicwise Test",
        pattern: "TCP 3-Way Handshake, Congestion Control",
        questions: 17,
        marks: 25,
        duration: "45 Mins",
        date: "Jan 12, 2027",
        hasQuestions: false
      },
      {
        name: "CSE 2026-Subjectwise Test-12 (Computer Networks Full)",
        rawName: "SWt - Computer Networks Full",
        bracket: "Computer Networks Full",
        type: "Subjectwise Test",
        pattern: "Complete Computer Networks Syllabus",
        questions: 33,
        marks: 50,
        duration: "90 Mins",
        date: "Jan 15, 2027",
        hasQuestions: false
      }
    ]
  },
  {
    id: "pw_dl",
    name: "Digital Logic",
    badge: "4 Tests",
    tests: [
      {
        name: "CSE 2026-Topicwise Test-39 (Boolean Algebra & Logic Gates)",
        rawName: "TWT - Boolean Algebra",
        bracket: "Boolean Algebra",
        type: "Topicwise Test",
        pattern: "K-Maps, Minimization & Number Representations",
        questions: 17,
        marks: 25,
        duration: "45 Mins",
        date: "Jan 18, 2027",
        hasQuestions: false
      },
      {
        name: "CSE 2026-Topicwise Test-40 (Combinational Circuits)",
        rawName: "TWT - Combinational Circuits",
        bracket: "Combinational Circuits",
        type: "Topicwise Test",
        pattern: "Multiplexers, Decoders, Adders & Subtractors",
        questions: 17,
        marks: 25,
        duration: "45 Mins",
        date: "Jan 20, 2027",
        hasQuestions: false
      },
      {
        name: "CSE 2026-Topicwise Test-41 (Sequential Circuits)",
        rawName: "TWT - Sequential Circuits",
        bracket: "Sequential Circuits",
        type: "Topicwise Test",
        pattern: "Flip-Flops, Counters & Shift Registers",
        questions: 17,
        marks: 25,
        duration: "45 Mins",
        date: "Jan 23, 2027",
        hasQuestions: false
      },
      {
        name: "CSE 2026-Subjectwise Test-13 (Digital Logic Full)",
        rawName: "SWt - Digital Logic Full",
        bracket: "Digital Logic Full",
        type: "Subjectwise Test",
        pattern: "Complete Digital Logic Syllabus",
        questions: 33,
        marks: 50,
        duration: "90 Mins",
        date: "Jan 26, 2027",
        hasQuestions: false
      }
    ]
  },
  {
    id: "pw_maths",
    name: "Engineering Mathematics & Discrete Maths",
    badge: "4 Tests",
    tests: [
      {
        name: "CSE 2026-Topicwise Test-42 (Discrete Mathematics-1)",
        rawName: "TWT - Discrete Mathematics-1",
        bracket: "Discrete Mathematics-1",
        type: "Topicwise Test",
        pattern: "Propositional Logic, First Order Logic, Sets & Relations",
        questions: 17,
        marks: 25,
        duration: "45 Mins",
        date: "Jan 28, 2027",
        hasQuestions: false
      },
      {
        name: "CSE 2026-Topicwise Test-43 (Discrete Mathematics-2)",
        rawName: "TWT - Discrete Mathematics-2",
        bracket: "Discrete Mathematics-2",
        type: "Topicwise Test",
        pattern: "Combinatorics, Generating Functions, Recurrences & Graphs",
        questions: 17,
        marks: 25,
        duration: "45 Mins",
        date: "Jan 30, 2027",
        hasQuestions: false
      },
      {
        name: "CSE 2026-Topicwise Test-44 (Linear Algebra & Calculus)",
        rawName: "TWT - Linear Algebra & Calculus",
        bracket: "Linear Algebra & Calculus",
        type: "Topicwise Test",
        pattern: "Matrices, Eigenvalues, Limits, Maxima & Minima",
        questions: 17,
        marks: 25,
        duration: "45 Mins",
        date: "Feb 01, 2027",
        hasQuestions: false
      },
      {
        name: "CSE 2026-Topicwise Test-45 (Probability & Statistics)",
        rawName: "TWT - Probability & Statistics",
        bracket: "Probability & Statistics",
        type: "Topicwise Test",
        pattern: "Conditional Probability, Bayes Theorem, Distributions",
        questions: 17,
        marks: 25,
        duration: "45 Mins",
        date: "Feb 03, 2027",
        hasQuestions: false
      }
    ]
  },
  {
    id: "pw_aptitude",
    name: "General Aptitude",
    badge: "2 Tests",
    tests: [
      {
        name: "CSE 2026-Topicwise Test-46 (Verbal Aptitude)",
        rawName: "TWT - Verbal Aptitude",
        bracket: "Verbal Aptitude",
        type: "Topicwise Test",
        pattern: "English Grammar, Sentence Completion, Comprehension",
        questions: 15,
        marks: 15,
        duration: "30 Mins",
        date: "Feb 05, 2027",
        hasQuestions: false
      },
      {
        name: "CSE 2026-Topicwise Test-47 (Quantitative Aptitude & Spatial)",
        rawName: "TWT - Quantitative Aptitude",
        bracket: "Quantitative Aptitude",
        type: "Topicwise Test",
        pattern: "Numerical Computation, Estimation, Spatial Reasoning",
        questions: 15,
        marks: 15,
        duration: "30 Mins",
        date: "Feb 07, 2027",
        hasQuestions: false
      }
    ]
  },
  {
    id: "pw_full",
    name: "Full Length Mock Tests (FLT)",
    badge: "3 Tests",
    tests: [
      {
        name: "CSE 2026-Full Length Test-1",
        rawName: "FLT - Mock 1",
        bracket: "Full Syllabus Mock 1",
        type: "Full Length Test",
        pattern: "Complete GATE 2026 CSE Syllabus (Exact Exam Simulation)",
        questions: 65,
        marks: 100,
        duration: "180 Mins",
        date: "Feb 10, 2027",
        hasQuestions: false
      },
      {
        name: "CSE 2026-Full Length Test-2",
        rawName: "FLT - Mock 2",
        bracket: "Full Syllabus Mock 2",
        type: "Full Length Test",
        pattern: "Complete GATE 2026 CSE Syllabus (Exact Exam Simulation)",
        questions: 65,
        marks: 100,
        duration: "180 Mins",
        date: "Feb 12, 2027",
        hasQuestions: false
      },
      {
        name: "CSE 2026-Full Length Test-3",
        rawName: "FLT - Mock 3",
        bracket: "Full Syllabus Mock 3",
        type: "Full Length Test",
        pattern: "Complete GATE 2026 CSE Syllabus (Exact Exam Simulation)",
        questions: 65,
        marks: 100,
        duration: "180 Mins",
        date: "Feb 14, 2027",
        hasQuestions: false
      }
    ]
  }
];

window.findUserResult = function(test) {
  const list = window.userResults || [];
  if (!list || !list.length) return null;
  // 1. Exact test.name match
  let found = list.find(r => r.testName === test.name);
  if (found) return found;
  // 2. Exact test.rawName match
  if (test.rawName) {
    found = list.find(r => r.testName === test.rawName);
    if (found) return found;
  }
  // 3. Exact bracket text match
  if (test.bracket) {
    const targetBracket = test.bracket.toLowerCase().trim();
    found = list.find(r => {
      const m = r.testName.match(/\(([^)]+)\)/);
      return m && m[1].toLowerCase().trim() === targetBracket;
    });
    if (found) return found;
  }
  return null;
};

window.togglePWAccordionCard = function(subjectId) {
  const card = document.getElementById(subjectId);
  if (card) {
    card.classList.toggle("open");
  }
};

window.promptPWEnroll = function() {
  const enrollBtn = document.getElementById("dEnrollBtn");
  if (enrollBtn) {
    enrollBtn.scrollIntoView({ behavior: "smooth", block: "center" });
    enrollBtn.classList.add("pulse-highlight");
    setTimeout(() => enrollBtn.classList.remove("pulse-highlight"), 1500);
  }
  if (typeof startEnrollment === "function") {
    startEnrollment("pw-cs-gate-2026");
  } else if (typeof selectPaymentMethod === "function") {
    selectPaymentMethod("pw-cs-gate-2026");
  }
};

window.renderPWAccordion = function(isUnlocked) {
  const chevronSvg = `<svg class="pw-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"></polyline></svg>`;
  const checkSvg = `<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.8"><polyline points="20 6 9 17 4 12"></polyline></svg>`;

  return window.PW_CS_SUBJECTS.map((subj, idx) => {
    // Count completed tests in this subject
    let completedCount = 0;
    subj.tests.forEach(t => {
      if (window.findUserResult(t)) completedCount++;
    });

    // Default open first 3 subjects
    const isOpen = idx < 3 ? " open" : "";

    const rows = subj.tests.map(t => {
      const res = window.findUserResult(t);
      const isAttempted = !!res;
      const score = isAttempted ? res.score : null;
      const maxScore = isAttempted ? (res.maxScore || t.marks || 50) : (t.marks || 50);

      let statusBadge = "";
      let actionButtons = "";

      if (isAttempted) {
        statusBadge = `
          <span class="pw-badge completed">${checkSvg} Completed</span>
          <div class="pw-score-badge">🏆 Score: ${score}/${maxScore}</div>
        `;
        actionButtons = `
          <div class="pw-action-group">
            <button class="btn-pw-action btn-pw-result" data-name="${t.name.replace(/"/g, '&quot;')}" onclick="openPastResult(this.dataset.name)">View Result</button>
            <button class="btn-pw-action btn-pw-reattempt" data-name="${t.name.replace(/"/g, '&quot;')}" onclick="openInstructions(this.dataset.name)">Reattempt</button>
          </div>
        `;
      } else if (t.hasQuestions) {
        statusBadge = `<span class="pw-badge active">Active</span>`;
        if (isUnlocked) {
          actionButtons = `<button class="btn-pw-action btn-pw-start" data-name="${t.name.replace(/"/g, '&quot;')}" onclick="openInstructions(this.dataset.name)">Start Test</button>`;
        } else {
          actionButtons = `<button class="btn-pw-action btn-pw-start" onclick="promptPWEnroll()">Enroll to Unlock</button>`;
        }
      } else {
        statusBadge = `<span class="pw-badge upcoming">Upcoming</span>`;
        actionButtons = `<button class="btn-pw-action btn-pw-locked" disabled>Coming ${t.date}</button>`;
      }

      return `
        <tr>
          <td>
            <div class="pw-test-name">${t.name}</div>
            <div class="pw-test-sub">${t.pattern}</div>
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
      <div class="pw-subject-card${isOpen}" id="${subj.id}">
        <div class="pw-subject-header" onclick="togglePWAccordionCard('${subj.id}')">
          <div class="pw-subject-title-wrap">
            <div class="pw-subject-icon">${idx + 1}</div>
            <div class="pw-subject-name">${subj.name}</div>
            <span class="pw-count-badge">${subj.badge}</span>
            ${completedCount > 0 ? `<span class="pw-completed-summary">${checkSvg} ${completedCount}/${subj.tests.length} Completed</span>` : ''}
          </div>
          <div>${chevronSvg}</div>
        </div>
        <div class="pw-subject-body">
          <table class="pw-table">
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
