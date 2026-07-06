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
        if (q.type === "NAT") {
          let num;
          if (typeof q.answer === 'number') {
            num = q.answer;
          } else if (typeof q.answer === 'string') {
            num = parseFloat(q.answer);
          }
          if (num !== undefined && !isNaN(num)) {
            q.correct = [num, num];
          } else if (Array.isArray(q.answer)) {
            q.correct = q.answer;
          }
        } else if (typeof q.answer === 'string') {
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
  name: "TWT - Digital logic-1",
  date: "May 23, 2026",
  questions: [
    {
      marks: 1,
      neg: 0.33,
      text: "The complement of the simplified value of the k-map shown below is",
      image: 'images/digital logic-1/mceclip0-1777716919370.png',
      options: ['<img src="images/digital logic-1/mceclip1-1777716927721.png" alt="Option A" style="max-width:150px;">',
        '<img src="images/digital logic-1/mceclip2-1777716934657.png" alt="Option B" style="max-width:150px;">',
        '<img src="images/digital logic-1/mceclip3-1777716941485.png" alt="Option C" style="max-width:150px;">',
        '<img src="images/digital logic-1/mceclip4-1777716946265.png" alt="Option D" style="max-width:150px;">',],
      answer: "B",
      solution: "<img src='images/digital logic-1/mceclip5-1777716956632.png' alt='Detailed Solution'>",
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: "The Boolean expression for the output ‘F’ of the logic circuit shown in the figure below is",
      image: 'images/digital logic-1/mceclip6-1777717003260.png',
      options: [
        '<img src="images/digital logic-1/mceclip7-1777717008801.png" alt="Option A" style="max-width:150px;">',
        '<img src="images/digital logic-1/mceclip8-1777717014766.png" alt="Option B" style="max-width:150px;">',
        '<img src="images/digital logic-1/mceclip10-1777717028350.png" alt="Option C" style="max-width:150px;">',
        '<img src="images/digital logic-1/mceclip9-1777717022578.png" alt="Option D" style="max-width:150px;">',
      ],
      answer: "C",
      solution: "<img src='images/digital logic-1/mceclip11-1777717035859.png' alt='Detailed Solution'>",
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: "Consider the MUX circuit shown in the figure below: The output function ‘f’ can be represented as",
      image: 'images/digital logic-1/mceclip12-1777717060063.png',
      options: [
        '<img src= "images/digital logic-1/mceclip13-1777717078783.png"alt="Option A" style="max-width:150px;">',
        '<img src="images/digital logic-1/mceclip14-1777717083378.png" alt="Option B" style="max-width:150px;">',
        '<img src="images/digital logic-1/mceclip15-1777717088021.png" alt="Option C" style="max-width:150px;">',
        '<img src="images/digital logic-1/mceclip16-1777717095119.png" alt="Option D" style="max-width:150px;">',
      ],
      answer: "B",
      solution: "<img src='images/digital logic-1/mceclip17-1777717104840.png' alt='Detailed Solution'>",
    },
    {
      marks: 1,
      neg: 0,
      type: "NAT",
      text: "Consider a 3-bit number A and 2 bit number B are given to a multiplier. The output of multiplier is realized using AND gate and one bit full adders. If minimum number of AND gates required are X and one bit full adders required are Y, then X + Y = _______.",
      image: "images/digital logic-1/mceclip18-1777717146503.png",
      options: [],
      answer: 9,
      solution: "<img src='images/digital logic-1/mceclip19-1777717155306.png' alt='Detailed Solution'>",
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: 'The Boolean expression for bulb ‘B’ shown in figure below is',
      image: "images/digital logic-1/mceclip20-1777717191268.png",
      options: [
        '<img src= "images/digital logic-1/mceclip22-1777717204356.png"alt="Option A" style="max-width:150px;">',
        '<img src="images/digital logic-1/mceclip24-1777717217418.png" alt="Option B" style="max-width:150px;">',
        '<img src="images/digital logic-1/mceclip21-1777717198121.png" alt="Option C" style="max-width:150px;">',
        '<img src="images/digital logic-1/mceclip23-1777717209338.png" alt="Option D" style="max-width:150px;">',
      ],
      answer: "A",
      solution: "<img src='images/digital logic-1/mceclip25-1777717226881.png' alt='Detailed Solution'>",
    },
    {
      marks: 1,
      neg: 0,
      type: "NAT",
      text: "Consider the circuit shown in the figure below: If the three bit input to the circuit is (X2 X1 X0) = 101, then the decimal equivalent of the corresponding output of the circuit (Y2 Y1 Y0) will be equal to _________ (decimal form).",
      image: "images/digital logic-1/mceclip26-1777717255870.png",
      options: [],
      answer: 3,
      solution: "<img src='images/digital logic-1/mceclip27-1777717310534.png' alt='Detailed Solution'>",
    },
    {
      marks: 1,
      neg: 0,
      type: "MSQ",
      text: "Two half adders are connected in cascade as shown below, the output ‘S’ and ‘C’ is/are",
      image: "images/digital logic-1/mceclip29-1777717373795.png",
      options: [
        '<img src="images/digital logic-1/mceclip32-1777717389924.png" alt="Option A" style="max-width:150px;">',
        '<img src="images/digital logic-1/mceclip30-1777717379835.png" alt="Option B" style="max-width:150px;">',
        '<img src="images/digital logic-1/mceclip33-1777717395424.png" alt="Option C" style="max-width:150px;">',
        '<img src="images/digital logic-1/mceclip31-1777717384695.png" alt="Option D" style="max-width:150px;">',
      ],
      answer: ["A", "D"],
      solution: "<img src='images/digital logic-1/mceclip34-1777717400773.png' alt='Detailed Solution'>",
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: "The minimized expression for Boolean expression $f(A, B, C, D) = \Sigma m(0, 2, 4, 9, 11) + d(1, 5, 13)$ can be expressed as",
      image: "",
      options: [
        '<img src="images/digital logic-1/mceclip35-1777717461708.png" alt="Option A" style="max-width:150px;">',
        '<img src="images/digital logic-1/mceclip36-1777717467310.png" alt="Option B" style="max-width:150px;">',
        '<img src="images/digital logic-1/mceclip38-1777717479844.png" alt="Option C" style="max-width:150px;">',
        '<img src="images/digital logic-1/mceclip37-1777717474039.png" alt="Option D" style="max-width:150px;">',
      ],
      answer: "D",
      solution: "<img src='images/digital logic-1/mceclip39-1777717487088.png' alt='Detailed Solution'>",
    },
    {
      marks: 1,
      neg: 0,
      type: "NAT",
      text: "The minimum number of NOR gates required to implement an EX-OR gate is _________.",
      image: "",
      options: [],
      answer: 5,
      solution: "<img src='images/digital logic-1/mceclip28-1777717342748.png' alt='Detailed Solution'>",
    },
    {
      marks: 2,
      neg: 0,
      type: "MSQ",
      text: "Which of the following identities are true?",
      image: "",
      options: [
        '<img src="images/digital logic-1/mceclip60-1777718254884.png" alt="Option A" style="max-width:150px;">',
        '<img src="images/digital logic-1/mceclip58-1777718241964.png" alt="Option B" style="max-width:150px;">',
        '<img src="images/digital logic-1/mceclip59-1777718248992.png" alt="Option C" style="max-width:150px;">',
        '<img src="images/digital logic-1/mceclip57-1777718236432.png" alt="Option D" style="max-width:150px;">',
      ],
      answer: ["B", "C"],
      solution: "<img src='images/digital logic-1/mceclip61-1777718263928.png' alt='Detailed Solution'>",
    },
    {
      marks: 2,
      neg: 0,
      type: "NAT",
      text: "",
      image: "images/digital logic-1/mceclip54-1777718101203.png",
      options: [],
      answer: 2,
      solution: `
  <img src="images/digital logic-1/mceclip55-1777718114280.png" alt="Solution Part 1">
  <br><br>
  <img src="images/digital logic-1/mceclip56-1777718121254.png" alt="Solution Part 2">
`,
    },
    {
      marks: 2,
      neg: 0.66,
      type: "MCQ",
      text: "What type of the code converter is shown below?",
      image: "images/digital logic-1/mceclip52-1777718034756.png",
      options: [
        "Gray code to BCD code",
        "2’s complement of BCD code",
        "BCD code to excess-3 code",
        "Excess-3 to BCD code"
      ],
      answer: "D",
      solution: "<img src='images/digital logic-1/mceclip53-1777718063383.png' alt='Detailed Solution'>",
    },
    {
      marks: 2,
      neg: 0,
      type: "NAT",
      text: "Assume that the EX-OR gate has a propagation delay of 10 ns and that the AND or OR gate have a propagation delay of 5 ns. What is the total propagation delay time in the following four bit adder (in ns)? ________",
      image: "images/digital logic-1/mceclip50-1777717822742.png",
      options: [],
      answer: 30,
      solution: "<img src='images/digital logic-1/mceclip51-1777717831482.png' alt='Detailed Solution'>",
    },
    {
      marks: 2,
      neg: 0.66,
      type: "MCQ",
      text: "Consider the following statement A 4 : 16 decoder can be constructed (with enable input) by;________.Which of the statements given below is/are correct?",
      image: "",
      options: [
        "Using two 3 : 8 decoders (each with an enable input) and an inverter.",
        "Using five 2 : 4 decoders (each with enable input) only.",
        "Using four 2 : 4 decoders (each with enable input) only.",
        "Using two 3 : 8 decoders (each with enable input) only.",
      ],
      answer: "B",
      solution: "<img src='images/digital logic-1/mceclip49-1777717784667.png' alt='Detailed Solution'>",
    },
    {
      marks: 2,
      neg: 0,
      type: "NAT",
      text: "Consider the function: where 'f' represents Boolean function and 'd' represents don’t care condition. The simplified Boolean expression 'f' is reduced to ________ literals.",
      image: "images/digital logic-1/mceclip47-1777717683574.png",
      options: [],
      answer: 4,
      solution: "<img src='images/digital logic-1/mceclip48-1777717689336.png' alt='Detailed Solution'>",
    },
    {
      marks: 2,
      neg: 0.66,
      type: "MCQ",
      text: "Consider the Boolean function f(A, B, C, D) = Σm(0, 1, 2, 5, 7, 8, 10, 12, 14, 15). Function is having how many number of essential prime implicants?",
      image: "",
      options: [2, 3, 4, 5],
      answer: "A",
      solution: "<img src='images/digital logic-1/mceclip46-1777717631132.png' alt='Detailed Solution'>",
    },
    {
      marks: 2,
      neg: 0.66,
      type: "MCQ",
      text: "Identify the output equations for the following circuit:",
      image: "images/digital logic-1/mceclip40-1777717516669.png",
      options: [
        "<img src='images/digital logic-1/mceclip41-1777717524373.png' alt='Option A' style='max-width:150px;'>",
        "<img src='images/digital logic-1/mceclip42-1777717532236.png' alt='Option B' style='max-width:150px;'>",
        "<img src='images/digital logic-1/mceclip43-1777717537756.png' alt='Option C' style='max-width:150px;'>",
        "<img src='images/digital logic-1/mceclip44-1777717552162.png' alt='Option D' style='max-width:150px;'>",
      ],
      answer: "A",
      solution: "<img src='images/digital logic-1/mceclip45-1777717562243.png' alt='Detailed Solution'>",
    },
  ]
});

registerTest({
  series: "cs-gate-pyq",
  name: "TWT - Database-1",
  date: "June 05, 2026",
  questions: [
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: "Consider the following statements about the relational data model:<br>S<sub>1</sub> : A foreign key attribute can take NULL values even when it participates in a composite foreign key.<br>S<sub>2</sub> : If a foreign key in a relation R references a candidate key of another relation, then every non-NULL value of the foreign key must match some tuple in the referenced relation.",
      image: "",
      options: [
        "S<sub>1</sub> is false and S<sub>2</sub> is true",
        "Both S<sub>1</sub> and S<sub>2</sub> are true",
        "S<sub>1</sub> is true and S<sub>2</sub> is false",
        "Both S<sub>1</sub> and S<sub>2</sub> are false",
      ],
      answer: "B",
      solution: "In relational model, a composite foreign key can have NULLs. However, referential integrity&nbsp;is enforced only when all components are non-NULL. Partial NULLs are generally allowed&nbsp;(unless explicitly restricted). So, <em>S</em><sub>1</sub> is correct.<br><br>A foreign key can reference a candidate key (not only primary key).<br>Every non-NULL foreign key value must match a value in the referenced relation. So, <em>S</em><sub>2</sub> is&nbsp;correct.",
    }
  ]
});
