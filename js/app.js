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
  } else if (id === "ee-gate-pyq-2027") {
    const enrolled = (window.isEnrolledSeries && window.isEnrolledSeries(id)) || false;
    if (dSchedule) {
      dSchedule.className = "ee-accordion-schedule-wrap";
      dSchedule.style.display = "block";
      dSchedule.style.width = "100%";
      dSchedule.innerHTML = window.renderEEAccordion ? window.renderEEAccordion(enrolled) : "";
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
    price: "₹130",
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
    price: "₹259",
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
    price: "₹125",
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
    price: "₹98",
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
    price: "₹35",
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
  if (id === "cse-gate-2027" || id === "cs-gate-pyq" || id === "ee-gate-pyq-2027") {
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

  // Made Easy CS Tests
  "Digital logic-1": "Boolean Algebra, Minimization, K-Maps, Logic Gates",
  "Digital logic-2": "Combinational & Sequential Circuits, Flip-Flops, Counters, Mux",
  "Digital logic": "Complete Digital Logic Syllabus",

  "Database-1": "ER-Model, Relational Model, Relational Algebra, SQL",
  "Database-2": "Normalization, Transactions, Concurrency Control, B/B+ Trees",
  "Database": "Complete DBMS Syllabus",

  "Theory of computation-1": "Regular Languages, Finite Automata, DFA, NFA, RegEx",
  "Theory of computation-2": "Context-Free Languages, PDA, Turing Machines, Decidability",
  "Theory of computation": "Complete Theory of Computation Syllabus",

  "computer organization and architecture-1": "Machine Instructions, Addressing Modes, ALU, Data Path",
  "computer organization and architecture-2": "Instruction Pipelining, Cache Memory, Virtual Memory, I/O",
  "Computer organization and architecture": "Complete COA Syllabus",

  "Computer network-1": "Concept of Layering, OSI & TCP/IP, Flow & Error Control",
  "Computer network-2": "Routing Algorithms, IP Addressing, IPv4/IPv6, TCP/UDP, Sockets",
  "Computer network": "Complete Computer Networks Syllabus",

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
    name: "Programming and Data Structures",
    iconType: "text",
    iconVal: "{}",
    iconBg: "#fee2e2",
    iconColor: "#ef4444",
    regex: /(programming and data structure|c programming and data structure|programming & data structure)/i
  },
  {
    id: "c_prog",
    name: "C Programming",
    iconType: "text",
    iconVal: "{}",
    iconBg: "#fee2e2",
    iconColor: "#ef4444",
    regex: /^TWT-c-programming|\b(c programming|c-programming)\b(?!\s*and\s*data|\s*&\s*data)/i
  },
  {
    id: "ds",
    name: "Data Structures",
    iconType: "svg",
    iconVal: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="5" r="3"/><circle cx="6" cy="19" r="3"/><circle cx="18" cy="19" r="3"/><path d="M12 8v4M12 12l-6 4M12 12l6 4"/></svg>`,
    iconBg: "#ffe4e6",
    iconColor: "#e11d48",
    regex: /(?<!c\s+programming\s+(and|&)\s*)(?<!programming\s+(and|&)\s*)\b(data structures|data structure)\b/i
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
  },
  {
    id: "ga",
    name: "General Aptitude",
    iconType: "svg",
    iconVal: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>`,
    iconBg: "#dcfce7",
    iconColor: "#16a34a",
    regex: /(general aptitude|aptitude|\bga\b)/i
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

window.launchPYQTest = function (rawName, enrolled, seriesId = "cse-gate-2027") {
  if (seriesId) {
    currentTestListId = seriesId;
    currentDetailId = seriesId;
  }
  let isEnrolled = enrolled === true || (window.isEnrolledSeries && window.isEnrolledSeries(seriesId));
  if (!isEnrolled) {
    const isFree = (Array.isArray(window.PYQ_FREE_TESTS) && (window.PYQ_FREE_TESTS.includes(rawName) || window.PYQ_FREE_TESTS.some(x => rawName.includes(x))));
    if (isFree) isEnrolled = true;
  }
  if (!isEnrolled) {
    window.promptEnrollment(seriesId);
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
    openInstructions(rawName);
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
  "Advanced Engineering Mathematics": "Numerical Methods, Vector Calculus, Transform Theory",
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
  { series: "ee-gate-pyq-2027", name: "SWT - Advanced Engineering Mathematics", subject: "ee_maths" },

  // General Aptitude (4)
  { series: "ee-gate-pyq-2027", name: "TWT - General Aptitude -1", subject: "ee_aptitude" },
  { series: "ee-gate-pyq-2027", name: "TWT - General Aptitude -2", subject: "ee_aptitude" },
  { series: "ee-gate-pyq-2027", name: "SWT - General Aptitude", subject: "ee_aptitude" },
  { series: "ee-gate-pyq-2027", name: "SWT - General Aptitude Comprehensive", subject: "ee_aptitude" },

  // Full Length Mock Tests (7)
  { series: "ee-gate-pyq-2027", name: "FLT - Mock Test 1", subject: "ee_flt" },
  { series: "ee-gate-pyq-2027", name: "FLT - Mock Test 2", subject: "ee_flt" },
  { series: "ee-gate-pyq-2027", name: "FLT - Mock Test 3", subject: "ee_flt" },
  { series: "ee-gate-pyq-2027", name: "FLT - Mock Test 4", subject: "ee_flt" },
  { series: "ee-gate-pyq-2027", name: "FLT - Mock Test 5", subject: "ee_flt" },
  { series: "ee-gate-pyq-2027", name: "FLT - Mock Test 6", subject: "ee_flt" },
  { series: "ee-gate-pyq-2027", name: "FLT - Mock Test 7", subject: "ee_flt" }
];

window.renderPYQAccordion = function (isEnrolled = true, statusFilter = "all", seriesId = "cse-gate-2027") {
  // Collect all tests belonging to this series
  const registeredMap = new Map();

  // 1. Defaults first
  if (seriesId === "cse-gate-2027") {
    (window.PYQ_DEFAULT_TESTS || []).forEach(t => {
      const cleanName = t.name.replace(/\s*-\s*(\d+)$/, ' -$1');
      registeredMap.set(cleanName, { ...t, name: cleanName });
    });
  } else if (seriesId === "ee-gate-pyq-2027") {
    (window.PYQ_EE_DEFAULT_TESTS || []).forEach(t => {
      const cleanName = t.name.replace(/\s*-\s*(\d+)$/, ' -$1');
      registeredMap.set(cleanName, { ...t, name: cleanName });
    });
  }

  // 2. Tests from apexTestRegistry
  if (window.apexTestRegistry && Array.isArray(window.apexTestRegistry)) {
    window.apexTestRegistry.forEach(t => {
      if (t.series === seriesId && t.name) {
        const cleanName = t.name.replace(/\s*-\s*(\d+)$/, ' -$1');
        registeredMap.set(cleanName, {
          ...t,
          series: seriesId,
          name: cleanName,
          date: t.date,
          topicsCovered: t.topicsCovered || t.topics,
          isFree: t.isFree === true || t.free === true || t.status === "free" || t.status === "unlocked",
          questions: t.questions
        });
      }
    });
  }

  // 3. Tests from testSeries.schedule
  const currentSeries = (window.testSeries || []).find(s => s.id === seriesId);
  if (currentSeries && Array.isArray(currentSeries.schedule)) {
    currentSeries.schedule.forEach(s => {
      const rawName = s[0];
      if (rawName && !registeredMap.has(rawName)) {
        registeredMap.set(rawName, {
          series: seriesId,
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

  const targetSubjects = (seriesId === "ee-gate-pyq-2027") ? (window.PYQ_EE_SUBJECTS || []) : (window.PYQ_CS_SUBJECTS || []);
  const activeTopicMap = (seriesId === "ee-gate-pyq-2027") ? (window.PYQ_EE_TOPIC_MAP || {}) : (window.PYQ_TOPIC_MAP || {});
  targetSubjects.forEach((subj) => {
    // Find tests matching this subject
    const subjTests = allTests.filter(t => {
      if (t.subject === subj.id) return true;
      return subj.regex && subj.regex.test(t.name);
    });

    if (!subjTests || subjTests.length === 0) return;

    // Check completion count
    let doneCount = 0;
    let topicIdx = 0;
    let subjectIdx = 0;

    const testItems = subjTests.map((t) => {
      const rawName = t.name;
      const bracketMatch = rawName.match(/\(([^)]+)\)/);
      const bracket = bracketMatch ? bracketMatch[1] : rawName.replace(/^[A-Za-z\s]+-\s*/, "");

      const isTopic = rawName.toUpperCase().includes("TWT") || rawName.toUpperCase().includes("TOPIC");
      const isSubject = rawName.toUpperCase().includes("SWT") || rawName.toUpperCase().includes("SUBJECT");

      let testType = isSubject ? "Subject" : "Topic";
      let testLabel = "";
      if (isSubject) {
        subjectIdx++;
        testLabel = `Subject Test ${subjectIdx}`;
      } else {
        topicIdx++;
        testLabel = `Topic Test ${topicIdx}`;
      }

      // Look up topic description
      let topicsCovered = t.topicsCovered || t.topics;
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
        topicsCovered = isSubject ? `${subj.name} - Full Syllabus` : bracket;
      }

      // Check if test is free/unlocked
      const isFree = t.isFree === true || t.free === true || t.status === "free" || t.status === "unlocked" ||
        (Array.isArray(window.PYQ_FREE_TESTS) && (window.PYQ_FREE_TESTS.includes(rawName) || (bracket && window.PYQ_FREE_TESTS.includes(bracket)) || window.PYQ_FREE_TESTS.some(x => rawName.includes(x))));
      const canAttempt = isEnrolled || isFree;

      // Check result (most recent first, exact/bracket match without loose substring cross-matching)
      const allRes = (userResults || []).slice().reverse();
      const rawLower = (rawName || "").trim().toLowerCase();
      const bracketLower = bracketMatch ? bracketMatch[1].trim().toLowerCase() : null;

      const res = allRes.find(r => {
        if (!r || !r.testName) return false;
        const rLower = r.testName.trim().toLowerCase();
        // 1. Exact or case-insensitive match
        if (r.testName === rawName || rLower === rawLower) return true;
        // 2. Bracket match if bracket was explicitly defined
        if (bracketLower && rLower === bracketLower) return true;
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
        isFree,
        canAttempt,
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
            ${isEnrolled
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
                ${filteredTests.length > 0
        ? filteredTests
          .map(item => `
                          <tr>
                            <td style="text-align: center;">
                              ${item.canAttempt
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
                              ${item.canAttempt
              ? (item.isAttempted
                ? `<span class="pyq-status-done"><span class="pyq-status-dot done"></span> Score: <b>${item.score}/${item.maxScore}</b></span>`
                : (item.isFree && !isEnrolled
                  ? `<span class="pyq-status-free">Free Demo</span>`
                  : `<span class="pyq-status-ready">Ready to Attempt</span>`))
              : `<span class="pyq-status-locked"><svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="#94a3b8" stroke-width="2.2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg> Locked</span>`
            }
                            </td>
                            <td style="text-align: right;">
                              ${item.canAttempt
              ? (item.isAttempted
                ? `
                                      <div style="display: inline-flex; gap: 8px; justify-content: flex-end; align-items: center;">
                                        <button class="pyq-btn-result" onclick="if (typeof openPastResult === 'function') openPastResult('${item.rawName.replace(/'/g, "\\'")}')">View Result</button>
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
                                  `
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

window.findEETestResult = function (test) {
  const list = window.userResults || [];
  if (!list || !list.length) return null;
  // 1. Exact match with test.name
  let found = list.find(r => r.testName === test.name);
  if (found) return found;
  // 2. Exact match with test.full
  if (test.full) {
    found = list.find(r => r.testName === test.full);
    if (found) return found;
  }
  // 3. Bracket match
  if (test.bracket) {
    const target = test.bracket.toLowerCase().trim();
    found = list.find(r => {
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
      if (window.findEETestResult(t)) completedCount++;
    });

    // Default open first 3 subjects
    const isOpen = idx < 3 ? " open" : "";

    const rows = subj.tests.map(t => {
      const res = window.findEETestResult(t);
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
            <button class="btn-ee-action btn-ee-result" data-name="${testActionName}" onclick="openPastResult(this.dataset.name)">View Result</button>
            <button class="btn-ee-action btn-ee-reattempt" data-name="${testActionName}" onclick="openInstructions(this.dataset.name)">Reattempt</button>
          </div>
        `;
      } else if (t.hasQuestions) {
        statusBadge = `<span class="ee-badge active">Active</span>`;
        if (isUnlocked) {
          actionButtons = `<button class="btn-ee-action btn-ee-start" data-name="${testActionName}" onclick="openInstructions(this.dataset.name)">Start Test</button>`;
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
