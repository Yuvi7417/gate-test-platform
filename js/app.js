
window.toggleEEAccordionCard = function(headerElem) {
  const card = headerElem.closest('.ee-subject-card');
  if (card) card.classList.toggle('open');
};

const EE_SUBJECTS_CONFIG = [
  {
    name: "Electric Circuits",
    icon: "⚡",
    bg: "#e0f2fe",
    color: "#0284c7",
    tests: [
      { name: "Topic Test 1", full: "TWT - Electric Circuits -1", type: "Topic", topics: "Basic circuit laws, KCL, KVL, Node & Mesh analysis, Network theorems" },
      { name: "Topic Test 2", full: "TWT - Electric Circuits -2", type: "Topic", topics: "Transient analysis, Resonance, Two-port networks, AC steady state" },
      { name: "Subject Test 1", full: "SWT - Electric Circuits", type: "Subject", topics: "Complete Electric Circuits Syllabus (Full Revision)" }
    ]
  },
  {
    name: "Control Systems",
    icon: "🎛️",
    bg: "#fef3c7",
    color: "#d97706",
    tests: [
      { name: "Topic Test 1", full: "TWT - Control Systems -1", type: "Topic", topics: "Block diagram, Signal flow graph, Time response analysis, Routh-Hurwitz" },
      { name: "Topic Test 2", full: "TWT - Control Systems -2", type: "Topic", topics: "Root locus, Nyquist & Bode plots, State space analysis, Compensators" },
      { name: "Subject Test 1", full: "SWT - Control Systems", type: "Subject", topics: "Complete Control Systems Syllabus" }
    ]
  },
  {
    name: "Electrical Machines",
    icon: "⚙️",
    bg: "#ffe4e6",
    color: "#e11d48",
    tests: [
      { name: "Topic Test 1", full: "TWT - Electrical Machines -1", type: "Topic", topics: "Single-phase & Three-phase Transformers, Autotransformers, Testing" },
      { name: "Topic Test 2", full: "TWT - Electrical Machines -2", type: "Topic", topics: "DC Machines, Induction Machines, Synchronous Machines, Starting & Braking" },
      { name: "Subject Test 1", full: "SWT - Electrical Machines", type: "Subject", topics: "Complete Electrical Machines Syllabus" }
    ]
  },
  {
    name: "Power Systems",
    icon: "🔋",
    bg: "#ede9fe",
    color: "#7c3aed",
    tests: [
      { name: "Topic Test 1", full: "TWT - Power Systems -1", type: "Topic", topics: "Transmission lines, Corona, Cable parameters, Sag, Per-unit system" },
      { name: "Topic Test 2", full: "TWT - Power Systems -2", type: "Topic", topics: "Load flow, Fault analysis (Symmetrical & Unsymmetrical), Power system stability" },
      { name: "Subject Test 1", full: "SWT - Power Systems", type: "Subject", topics: "Complete Power Systems & Protection Syllabus" }
    ]
  },
  {
    name: "Power Electronics",
    icon: "🔌",
    bg: "#ecfdf5",
    color: "#059669",
    tests: [
      { name: "Topic Test 1", full: "TWT - Power Electronics -1", type: "Topic", topics: "Power Semiconductor devices (SCR, MOSFET, IGBT), Phase-controlled rectifiers" },
      { name: "Topic Test 2", full: "TWT - Power Electronics -2", type: "Topic", topics: "DC-DC Choppers, Inverters (VSI, CSI), PWM techniques, SMPS" },
      { name: "Subject Test 1", full: "SWT - Power Electronics", type: "Subject", topics: "Complete Power Electronics Syllabus" }
    ]
  },
  {
    name: "Signals & Systems",
    icon: "📶",
    bg: "#e0e7ff",
    color: "#4338ca",
    tests: [
      { name: "Topic Test 1", full: "TWT - Signals & Systems -1", type: "Topic", topics: "Continuous & Discrete time signals, LTI systems, Convolution" },
      { name: "Topic Test 2", full: "TWT - Signals & Systems -2", type: "Topic", topics: "Fourier Series, Fourier Transform, Laplace & Z-Transform, Sampling theorem" },
      { name: "Subject Test 1", full: "SWT - Signals & Systems", type: "Subject", topics: "Complete Signals & Systems Syllabus" }
    ]
  },
  {
    name: "Digital Electronics",
    icon: "01",
    bg: "#e0f2fe",
    color: "#0369a1",
    tests: [
      { name: "Topic Test 1", full: "TWT - Digital Electronics -1", type: "Topic", topics: "Number systems, Boolean algebra, K-maps, Combinational logic circuits" },
      { name: "Topic Test 2", full: "TWT - Digital Electronics -2", type: "Topic", topics: "Sequential circuits, Flip-flops, Counters, Shift registers, A/D & D/A converters" },
      { name: "Subject Test 1", full: "SWT - Digital Electronics", type: "Subject", topics: "Complete Digital Electronics Syllabus" }
    ]
  },
  {
    name: "Analog Electronics",
    icon: "〰️",
    bg: "#fff7ed",
    color: "#c2410c",
    tests: [
      { name: "Topic Test 1", full: "TWT - Analog Electronics -1", type: "Topic", topics: "Diode circuits, BJT & MOSFET biasing, Small-signal amplifier models" },
      { name: "Topic Test 2", full: "TWT - Analog Electronics -2", type: "Topic", topics: "Op-Amp circuits, Feedback amplifiers, Oscillators, Active filters" },
      { name: "Subject Test 1", full: "SWT - Analog Electronics", type: "Subject", topics: "Complete Analog Electronics Syllabus" }
    ]
  },
  {
    name: "Electrical & Electronics Measurements",
    icon: "📐",
    bg: "#fdf4ff",
    color: "#a21caf",
    tests: [
      { name: "Topic Test 1", full: "TWT - EMI -1", type: "Topic", topics: "PMMC, Moving Iron, Dynamometer instruments, Measurement of R, L, C bridges" },
      { name: "Topic Test 2", full: "TWT - EMI -2", type: "Topic", topics: "Instrument transformers (CT, PT), Digital voltmeters, Oscilloscopes (CRO)" },
      { name: "Subject Test 1", full: "SWT - Electrical & Electronics Measurements", type: "Subject", topics: "Complete Measurements & Instrumentation Syllabus" }
    ]
  },
  {
    name: "Engineering Mathematics",
    icon: "f(x)",
    bg: "#ede9fe",
    color: "#6d28d9",
    tests: [
      { name: "Topic Test 1", full: "TWT - Engineering Mathematics -1", type: "Topic", topics: "Linear Algebra (Matrices, Eigenvalues), Calculus, Vector analysis" },
      { name: "Topic Test 2", full: "TWT - Engineering Mathematics -2", type: "Topic", topics: "Differential equations, Complex variables, Probability & Statistics" },
      { name: "Subject Test 1", full: "SWT - Engineering Mathematics", type: "Subject", topics: "Complete Engineering Mathematics Syllabus" }
    ]
  },
  {
    name: "General Aptitude",
    icon: "💡",
    bg: "#ecfeff",
    color: "#0e7490",
    tests: [
      { name: "Topic Test 1", full: "TWT - General Aptitude -1", type: "Topic", topics: "Quantitative Aptitude, Numerical computation, Data interpretation" },
      { name: "Topic Test 2", full: "TWT - General Aptitude -2", type: "Topic", topics: "Verbal ability, English grammar, Deductive reasoning, Spatial aptitude" },
      { name: "Subject Test 1", full: "SWT - General Aptitude", type: "Subject", topics: "Complete General Aptitude Syllabus" }
    ]
  },
  {
    name: "Electromagnetic Fields",
    icon: "🧲",
    bg: "#fefce8",
    color: "#a16207",
    tests: [
      { name: "Subject Test 1", full: "SWT - Electromagnetic Fields", type: "Subject", topics: "Coulomb's Law, Gauss's Law, Ampere's Law, Faraday's Law, Maxwell's Equations" }
    ]
  }
];

window.renderEEAccordion = function(isUnlocked) {
  let html = `
    <div style="background: #ffffff; border: 1px solid #edf2f7; padding: 12px 18px; border-radius: 10px; display: flex; align-items: center; gap: 20px; font-size: 13px; margin-bottom: 6px;">
      <span style="font-weight: 700; color: #475569; font-size: 11.5px;">TEST TYPES:</span>
      <span style="display:inline-flex; align-items:center; gap:6px; color:#4338ca; font-weight:600;"><span style="width:8px; height:8px; border-radius:50%; background:#6366f1;"></span> Topic-wise</span>
      <span style="display:inline-flex; align-items:center; gap:6px; color:#0f766e; font-weight:600;"><span style="width:8px; height:8px; border-radius:50%; background:#0d9488;"></span> Subject-wise</span>
    </div>
  `;

  EE_SUBJECTS_CONFIG.forEach((sub, sIdx) => {
    let completedCount = 0;
    const testRows = sub.tests.map((test, tIdx) => {
      let isCompleted = false;
      let scoreText = '';
      if (window.userResults && Array.isArray(window.userResults)) {
        const r = window.userResults.find(x => x.testName && (x.testName.includes(test.full) || test.full.includes(x.testName)));
        if (r) {
          isCompleted = true;
          completedCount++;
          scoreText = `Score: ${r.score}/${r.maxScore || 100}`;
        }
      }

      let statusHtml = '';
      let actionHtml = '';

      if (!isUnlocked) {
        statusHtml = `<span class="ee-status-badge ee-status-locked"><span class="ee-status-dot"></span> Locked</span>`;
        actionHtml = `<button class="ee-btn-locked" onclick="document.querySelector('.btn-enroll')?.click() || window.scrollTo({top: document.body.scrollHeight, behavior: 'smooth'})">🔒 Enroll to Attempt</button>`;
      } else if (isCompleted) {
        statusHtml = `<span class="ee-status-badge ee-status-completed"><span class="ee-status-dot"></span> Completed (${scoreText})</span>`;
        actionHtml = `<button class="ee-btn-result" onclick="openPastResult('${test.full.replace(/'/g, "\\'")}')">View Result</button>`;
      } else {
        statusHtml = `<span class="ee-status-badge ee-status-ready"><span class="ee-status-dot"></span> Ready to Attempt</span>`;
        actionHtml = `<button class="ee-btn-start" onclick="openInstructions('${test.full.replace(/'/g, "\\'")}')">Start ▶</button>`;
      }

      const tagClass = test.type === 'Topic' ? 'ee-tag-topic' : 'ee-tag-subject';

      return `
        <tr>
          <td style="width: 32px;"><span style="display:inline-block; width:15px; height:15px; border-radius:4px; border:1.5px solid ${isCompleted ? '#10b981' : '#cbd5e1'}; background:${isCompleted ? '#10b981' : 'transparent'};"></span></td>
          <td style="font-weight: 600; color: #1e293b; width: 220px;">
            ${test.name}
            <span class="ee-tag-pill ${tagClass}">${test.type}</span>
          </td>
          <td style="color: #475569; font-size: 12.5px; line-height: 1.4;">${test.topics}</td>
          <td style="width: 190px;">${statusHtml}</td>
          <td style="width: 140px; text-align: right;">${actionHtml}</td>
        </tr>
      `;
    }).join("");

    const badgeClass = completedCount > 0 ? "ee-progress-badge has-done" : "ee-progress-badge";
    const badgeText = isUnlocked ? `${completedCount} / ${sub.tests.length} Done` : `${sub.tests.length} Tests`;
    const openClass = sIdx === 0 ? "ee-subject-card open" : "ee-subject-card";

    html += `
      <div class="${openClass}">
        <div class="ee-subject-header" onclick="toggleEEAccordionCard(this)">
          <div class="ee-subject-left">
            <div class="ee-subject-icon" style="background: ${sub.bg}; color: ${sub.color};">${sub.icon}</div>
            <div class="ee-subject-title">${sub.name}</div>
          </div>
          <div class="ee-subject-right">
            <span class="${badgeClass}">${badgeText}</span>
            <svg class="ee-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <path d="M6 9l6 6 6-6"/>
            </svg>
          </div>
        </div>
        <div class="ee-table-wrap">
          <table class="ee-table">
            <thead>
              <tr>
                <th></th>
                <th>TEST NAME</th>
                <th>TOPICS COVERED</th>
                <th>STATUS</th>
                <th style="text-align: right;">ACTION</th>
              </tr>
            </thead>
            <tbody>
              ${testRows}
            </tbody>
          </table>
        </div>
      </div>
    `;
  });

  return html;
};

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

  if (t.id === 'ee-gate-pyq-2027') {
    document.getElementById("dSchedule").className = "accordion-schedule-wrap";
    document.getElementById("dSchedule").innerHTML = window.renderEEAccordion ? window.renderEEAccordion(false) : "";
  } else {
    document.getElementById("dSchedule").className = "schedule-grid";
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
