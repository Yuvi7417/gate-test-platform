// =========================================================================
// APEX CORE - TEST REGISTRY ENGINE
// DO NOT EDIT THE CODE IN THIS SECTION!
// =========================================================================
window.apexTestRegistry = [];

window.registerTest = function (config) {
  const safeId = (config.series + "_" + config.name).toLowerCase().replace(/[^a-z0-9]/g, "_");

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
      const series = window.testSeries.find(s => s.id === config.series);
      if (series) {
        series.schedule.push([config.name, config.date]);
      }
    });
  }
});

// =========================================================================
// ADD YOUR NEW TESTS BELOW THIS LINE! 
// Just copy-paste the block to add more tests.
// =========================================================================

registerTest({
  series: "cs-gate-pyq practise test series",
  name: "TWT - Database-2",
  date: "May 20, 2026",
  questions: [
    {
      type: "mcq",
      text: "Is this the easiest way to add a test?",
      options: ["Yes, very easy", "No, it's hard", "Maybe", "I don't know"],
      answer: "A",
      solution: "This is Option 2 in action! Just 1 step."
    }
  ]
});