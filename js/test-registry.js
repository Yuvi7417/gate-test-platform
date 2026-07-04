// =========================================================================
// APEX CORE - TEST REGISTRY ENGINE
// DO NOT EDIT THE CODE IN THIS SECTION!
// =========================================================================
window.apexTestRegistry = [];

window.registerTest = function (config) {
  const safeId = (config.series + "_" + config.name).toLowerCase().replace(/[^a-z0-9]/g, "_");

  // Normalize `answer` ("A", "B") to `correct` (0, 1) for exam engine compatibility
  if (config.questions) {
    config.questions.forEach(q => {
      if (q.answer !== undefined && q.correct === undefined) {
        if (typeof q.answer === 'string') {
          q.correct = q.answer.toUpperCase().charCodeAt(0) - 65;
        } else if (Array.isArray(q.answer)) {
          q.correct = q.answer.map(a => typeof a === 'string' ? a.toUpperCase().charCodeAt(0) - 65 : a);
        }
      }
    });
  }

  window.testMap = window.testMap || {};
  window.testMap[safeId] = config.questions;

  window.testBackendIdMap = window.testBackendIdMap || {};
  let matchName = config.name.replace(/^[A-Za-z]+\s*-\s*/, "");
  window.testBackendIdMap[matchName] = safeId;

  window.apexTestRegistry.push(config);
};

document.addEventListener("DOMContentLoaded", () => {
  if (window.testSeries && window.apexTestRegistry) {
    window.apexTestRegistry.forEach(config => {
      // Find series by exact ID or by title (case-insensitive)
      const series = window.testSeries.find(s =>
        s.id === config.series ||
        s.title.toLowerCase() === config.series.toLowerCase()
      );
      if (series) {
        series.schedule.push([config.name, config.date]);
      } else {
        console.warn("Could not find test series for:", config.series);
      }
    });
  }
});

// =========================================================================
// ADD YOUR NEW TESTS BELOW THIS LINE! 
// Just copy-paste the block to add more tests.
// =========================================================================

registerTest({
  series: "cs-gate-pyq",
  name: "TWT - Database-2",
  date: "May 20, 2026",
  questions: [
    {
      marks: 1,      // Add correct marks here
      neg: 0.33,     // Add negative marks here
      type: "mcq",
      text: "Is this the easiest way to add a test?",
      options: ["Yes, very easy", "No, it's hard", "Maybe", "I don't know"],
      answer: "A",
      solution: "This is Option 2 in action! Just 1 step."
    }
  ]
});

registerTest({
  series: "cs-gate-pyq",
  name: "TWT - computer network-1",
  date: "May 22, 2026",
  questions: [
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: "he Boolean expression for the output ‘F’ of the logic circuit shown in the figure below is",
      image: 'images/digital logic-1/mceclip6-1777717003260.png',
      options: [
        '<img src="images/digital logic-1/mceclip7-1777717008801.png" alt="Option A" style="max-width:150px;">',
        '<img src="images/digital logic-1/mceclip8-1777717014766.png" alt="Option B" style="max-width:150px;">',
        '<img src="images/digital logic-1/mceclip10-1777717028350.png" alt="Option C" style="max-width:150px;">',
        '<img src="images/digital logic-1/mceclip9-1777717022578.png" alt="Option D" style="max-width:150px;">',
      ],
      answer: "B",
      solution: "<img src='images/digital logic-1/mceclip5-1777716956632.png' alt='Detailed Solution'>",
    }
  ]
});

