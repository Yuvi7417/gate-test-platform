# -*- coding: utf-8 -*-
"""
=============================================================================
EE-GATE 2027 Accordion Configuration Script
-----------------------------------------------------------------------------
This script configures the EE-GATE 2027 Practice Test Series (ee-gate-pyq-2027)
to use the EXACT same PYQ Accordion architecture (renderPYQAccordion) as
CS-GATE 2027 Practice Test Series.

Features:
- Configures 13 EE Subjects with custom icons, badges and regex matching
- Configures 47 Topic-wise and Subject-wise Tests
- Maps topic descriptions for every test
- Enables Score Tracking, View Result, and Reattempt
- Seamlessly hooks into Detail Schedule and Learn view
=============================================================================
"""

import os
import sys
import re

BASE_DIR = r"H:\yuvraj dutt"
APP_JS = os.path.join(BASE_DIR, "js", "app.js")
EXAM_JS = os.path.join(BASE_DIR, "js", "exam.js")
INDEX_HTML = os.path.join(BASE_DIR, "index.html")

print(">>> Starting EE-GATE 2027 Accordion Configuration...")

# ---------------------------------------------------------------------------
# 1. EE Configuration Data
# ---------------------------------------------------------------------------
EE_CONFIG_JS = r'''
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
  "Electromagnetic Fields": "Ampere's Law, Faraday's Law, Maxwell's Equations, Waves",
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

  // Electromagnetic Fields (2)
  { series: "ee-gate-pyq-2027", name: "TWT - Electromagnetic Fields -1", subject: "ee_emf" },
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
'''

# ---------------------------------------------------------------------------
# 2. Patch app.js
# ---------------------------------------------------------------------------
with open(APP_JS, "r", encoding="utf-8") as f:
    app_code = f.read()

# Clean up any previous experimental EE accordion code in app.js
app_code = re.sub(
    r'/\* =+ EE-GATE 2027 Subject-wise Accordion \(GoClasses Style\) Logic.*',
    '',
    app_code,
    flags=re.DOTALL
)

# Insert EE configuration before renderPYQAccordion if not present
if "window.PYQ_EE_SUBJECTS" not in app_code:
    target_pos = app_code.find("window.renderPYQAccordion = function")
    if target_pos != -1:
        app_code = app_code[:target_pos] + EE_CONFIG_JS + "\n" + app_code[target_pos:]
        print("[app.js] Added PYQ_EE_SUBJECTS, PYQ_EE_TOPIC_MAP, PYQ_EE_DEFAULT_TESTS")

# Ensure renderPYQAccordion checks EE series:
# Replace:
#   if (seriesId === "cse-gate-2027") {
#     (window.PYQ_DEFAULT_TESTS || []).forEach(t => {
# with:
#   if (seriesId === "cse-gate-2027") {
#     (window.PYQ_DEFAULT_TESTS || []).forEach(t => {
#       registeredMap.set(t.name, { ...t });
#     });
#   } else if (seriesId === "ee-gate-pyq-2027") {
#     (window.PYQ_EE_DEFAULT_TESTS || []).forEach(t => {
#       registeredMap.set(t.name, { ...t });
#     });
#   }
default_tests_check = r'''  // 1. Defaults first (only for cse-gate-2027)
  if (seriesId === "cse-gate-2027") {
    (window.PYQ_DEFAULT_TESTS || []).forEach(t => {
      registeredMap.set(t.name, { ...t });
    });
  }'''

updated_default_tests = r'''  // 1. Defaults first
  if (seriesId === "cse-gate-2027") {
    (window.PYQ_DEFAULT_TESTS || []).forEach(t => {
      registeredMap.set(t.name, { ...t });
    });
  } else if (seriesId === "ee-gate-pyq-2027") {
    (window.PYQ_EE_DEFAULT_TESTS || []).forEach(t => {
      registeredMap.set(t.name, { ...t });
    });
  }'''

if default_tests_check in app_code:
    app_code = app_code.replace(default_tests_check, updated_default_tests)
    print("[app.js] Updated defaults collection for ee-gate-pyq-2027 in renderPYQAccordion")

# Ensure subject list selection in renderPYQAccordion:
# Replace:
#   window.PYQ_CS_SUBJECTS.forEach((subj) => {
# with:
#   const targetSubjects = (seriesId === "ee-gate-pyq-2027") ? (window.PYQ_EE_SUBJECTS || []) : (window.PYQ_CS_SUBJECTS || []);
#   targetSubjects.forEach((subj) => {
subject_loop_target = "  window.PYQ_CS_SUBJECTS.forEach((subj) => {"
subject_loop_repl = """  const targetSubjects = (seriesId === "ee-gate-pyq-2027") ? (window.PYQ_EE_SUBJECTS || []) : (window.PYQ_CS_SUBJECTS || []);
  const activeTopicMap = (seriesId === "ee-gate-pyq-2027") ? (window.PYQ_EE_TOPIC_MAP || {}) : (window.PYQ_TOPIC_MAP || {});
  targetSubjects.forEach((subj) => {"""

if subject_loop_target in app_code:
    app_code = app_code.replace(subject_loop_target, subject_loop_repl)
    print("[app.js] Updated subject iteration to use targetSubjects based on seriesId")

# Ensure topic map lookup in renderPYQAccordion uses activeTopicMap:
app_code = app_code.replace("window.PYQ_TOPIC_MAP[bracket]", "activeTopicMap[bracket]")
app_code = app_code.replace("window.PYQ_TOPIC_MAP[bracket.trim()]", "activeTopicMap[bracket.trim()]")
app_code = app_code.replace("window.PYQ_TOPIC_MAP[rawName]", "activeTopicMap[rawName]")
app_code = app_code.replace("Object.keys(window.PYQ_TOPIC_MAP)", "Object.keys(activeTopicMap)")
app_code = app_code.replace("activeTopicMap[k]", "activeTopicMap[k]")

# Update openDetail to include ee-gate-pyq-2027:
# if (id === "cse-gate-2027" || id === "cs-gate-pyq")
app_code = re.sub(
    r'if\s*\(\s*id\s*===\s*["\']cse-gate-2027["\']\s*\|\|\s*id\s*===\s*["\']cs-gate-pyq["\'](?:\s*\|\|\s*id\s*===\s*["\']ee-gate-pyq-2027["\'])?\s*\)',
    'if (id === "cse-gate-2027" || id === "cs-gate-pyq" || id === "ee-gate-pyq-2027")',
    app_code
)

with open(APP_JS, "w", encoding="utf-8") as f:
    f.write(app_code)

print("[app.js] Successfully patched.")

# ---------------------------------------------------------------------------
# 3. Patch exam.js
# ---------------------------------------------------------------------------
with open(EXAM_JS, "r", encoding="utf-8") as f:
    exam_code = f.read()

# Update renderTestList in exam.js to use renderPYQAccordion for ee-gate-pyq-2027:
exam_code = re.sub(
    r'if\s*\(\s*t\.id\s*===\s*["\']cse-gate-2027["\']\s*\|\|\s*t\.id\s*===\s*["\']cs-gate-pyq["\'](?:\s*\|\|\s*t\.id\s*===\s*["\']ee-gate-pyq-2027["\'])?\s*\)',
    'if (t.id === "cse-gate-2027" || t.id === "cs-gate-pyq" || t.id === "ee-gate-pyq-2027")',
    exam_code
)

# Remove any old ee-accordion-testlist-wrap hook if present
exam_code = re.sub(
    r'if\s*\(\s*t\s*&&\s*t\.id\s*===\s*["\']ee-gate-pyq-2027["\']\s*&&\s*window\.renderEEAccordion\s*\)\s*\{[\s\S]*?return;\s*\}\s*grid\.className\s*=\s*["\']test-list-grid["\'];',
    'grid.className = "test-list-grid";',
    exam_code
)

with open(EXAM_JS, "w", encoding="utf-8") as f:
    f.write(exam_code)

print("[exam.js] Successfully patched.")

# ---------------------------------------------------------------------------
# 4. Bump Cache Busters in index.html
# ---------------------------------------------------------------------------
with open(INDEX_HTML, "r", encoding="utf-8") as f:
    html = f.read()

html = re.sub(r'js/app\.js\?v=\d+', 'js/app.js?v=20', html)
html = re.sub(r'js/exam\.js\?v=\d+', 'js/exam.js?v=50', html)

with open(INDEX_HTML, "w", encoding="utf-8") as f:
    f.write(html)

print("[index.html] Bumped script cache versions (v=20, v=50).")
print(">>> EE-GATE 2027 Accordion Configuration COMPLETE!")
