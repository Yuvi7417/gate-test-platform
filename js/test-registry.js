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
  let compositeKey = config.series + "|" + matchName;
  window.testBackendIdMap[compositeKey] = safeId;
  window.testBackendIdMap[matchName] = safeId; // Fallback

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

//  MADE EASY CSE 2027 ALL TEST SERIES.----------------------------------------

registerTest({  // made easy cse 2027 topic wise test digital logic-1
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
      text: "Consider the Boolean function f(A, B, C, D) = Î£m(0, 1, 2, 5, 7, 8, 10, 12, 14, 15). Function is having how many number of essential prime implicants?",
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

registerTest({  // made easy cse 2027 topic wise test digital logic-2
  series: "cs-gate-pyq",
  name: "TWT - Digital logic-2",
  date: "july 11, 2026",
  questions: [
  ]
});

registerTest({   // made easy cse 2027 topic wise test database-1
  series: "cs-gate-pyq",
  name: "TWT - Database-1",
  date: "June 05, 2026",
  questions: [
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: "Consider the following statements about the relational data model:<br>S<sub>1</sub> : A foreign key attribute can take NULL values even when it participates in a composite foreign key.<br>S<sub>2</sub> : If a foreign key in a relation R references a candidate key of another relation, then every non-NULL value of the foreign key must match some tuple in the referenced relation.<br><br>Which of the above statements are correct?",
      image: "",
      options: [
        "S<sub>1</sub> is false and S<sub>2</sub> is true",
        "Both S<sub>1</sub> and S<sub>2</sub> are true",
        "S<sub>1</sub> is true and S<sub>2</sub> is false",
        "Both S<sub>1</sub> and S<sub>2</sub> are false",
      ],
      answer: "B",
      solution: "In relational model, a composite foreign key can have NULLs. However, referential integrity&nbsp;is enforced only when all components are non-NULL. Partial NULLs are generally allowed&nbsp;(unless explicitly restricted). So, <em>S</em><sub>1</sub> is correct.<br><br>A foreign key can reference a candidate key (not only primary key).<br>Every non-NULL foreign key value must match a value in the referenced relation. So, <em>S</em><sub>2</sub> is&nbsp;correct.",
    },
    {
      marks: 1,
      neg: 0,
      type: "NAT",
      text: "Consider a relation schema X with attributes (P, Q, R, S, T, U) and functional dependency set that&nbsp;holds on <em>X</em> :<br>F = {U → PT, P → Q, Q → PST, PS → Q, QST → PS}<br><br>How many number of super keys ________?",
      image: "",
      options: [],
      answer: 16,
      solution: "<img src='js/questions/database-1/19.png' alt='Detailed Solution'>",
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: "In a relation, <em>R</em>, an attribute “<em>B</em>” of <em>R </em>is said to be fully functionally dependent on an attribute or&nbsp;set of attributes “<em>A</em>” of <em>R </em>if <em>B </em>is functionally dependent on <em>A </em>but not functionally dependent on&nbsp;any proper subset of <em>A</em>.<br>Consider a relation <em>S </em>in which for every functional dependency <em>X</em> → <em>Y</em>, either <em>X </em>is a superkey or&nbsp;every attribute of <em>Y </em>is a prime attribute. What is necessarily true for S?",
      image: "",
      options: [
        "Relation <em>S </em>is not in 2NF.",
        "Relation <em>S </em>is in 2NF and 3NF.",
        "Relation <em>S </em>is not in 3NF",
        "Relation <em>S </em>is neither in 2NF nor in 3NF.",
      ],
      answer: "B",
      solution: "Given:<br>For every functional dependency <em>X </em>→ <em>Y </em>in relation <em>S</em>:<br>Either X is a superkey, OR.<br>Every attribute of Y is a prime attribute.<br>A relation is in 3NF if for every FD <em>X</em> → <em>A</em>, at least one holds:<br><em>X</em> is a superkey, OR.<br><em>A</em> is a prime attribute.<br>The given condition is exactly this definition (extended to set <em>Y</em>).<br>Therefore, relation <em>S</em> is in 3NF.<br>We know, 3NF = 2NF<br>Reason: 3NF eliminates:<br>Partial dependency (2NF requirement).<br>Transitive dependency (extra condition)<br>Therefore, relation S is also in 2NF."
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: "Match <strong>List-I</strong> with <strong>List-II</strong> and select the correct answer using the codes given below the lists:",
      image: "js/questions/database-1/14.png",
      options: ["(a)", "(b)", "(c)", "(d)"],
      answer: "A",
      solution: "2NF can't have partial functional dependencies.<br>3NF can't have transitive dependencies.<br>4NF deals with multi-valued dependencies.<br>5NF deals with join dependencies.",
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: "Consider relation schema <em>R</em>(<em>A</em>, <em>B</em>, <em>C</em>, <em>D</em>) and the two sets of functional dependency:<br><em>S</em><sub>1</sub> : {<em>A</em> → <em>B</em>, <em>AB </em>→ <em>C</em>, <em>AC </em>→ <em>D</em>, <em>B </em>→ <em>C</em>, <em>B </em>→ <em>A</em>}<br><em>S</em><sub>2</sub> : {<em>AB </em>→ <em>D</em>, <em>AC </em>→ <em>B</em>, <em>B </em>→ <em>D</em>, <em>BD </em>→ <em>C</em>}<br>Which of the following is true?",
      image: "",
      options: [
        "S<sub>2</sub> covers S<sub>1</sub>",
        "S<sub>1</sub> and S<sub>2</sub> are equivalent",
        "S<sub>1</sub> covers S<sub>2</sub>",
        "None of these"
      ],
      answer: "C",
      solution: "<img src='js/questions/database-1/13.png' alt='Detailed Solution'>",
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: "Identify the minimal cover for the following FD set:<br>{A → BC, C → A, BC → D, ACD → B, BE → C, EC → FA, CF → BD, D → E}",
      image: "",
      options: [
        "{A → BC, C → ADF, D → E, BE → C}",
        "{A → BC, C → ADEF, D → E, BE → C}",
        "{A → BC, C → ADF, E → D, BE → C}",
        "{A → C, C → ADF, D → E, BE → C}",
      ],
      answer: "A",
      solution: "Option (a) is the minimal/canonical cover of given FD set.",
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: "Consider R(A, B, C, D, E) be a relation schema with the following functional dependencies:<br>F = {A → BC, CD → E, B → D, E → A}<br>Which of the following is true for decomposition of R into (A, B, C) and (C, D, E)?",
      image: "",
      options: [
        "Lossless join but not dependency preserving.",
        "Not lossless join but dependency preserving.",
        "Lossless join and dependency preserving.",
        "Neither lossless join nor dependency preserving.",
      ],
      answer: "D",
      solution: "<em>R</em><sub>1</sub> = {A, B, C} and <em>R</em><sub>2</sub> = {C, D, E}<br><em>R</em><sub>1</sub> ∩ <em>R</em><sub>2</sub> = {C} and C is not a key for either <em>R</em><sub>1</sub> or <em>R</em><sub>2</sub>.<br>Hence decomposition is not lossless join.<br>E → A and B → D are not preserved in decomposition.<br>Hence it is not dependency preserving.",
    },
    {
      marks: 1,
      neg: 0,
      type: "MSQ",
      text: "Given a relation R(A, B, C, D, E) with functional dependencies:<br>F = {AB → C, CD → E, C → A, C → D, D → B}<br>Which of the following statements are correct?",
      image: "",
      options: [
        "Both {BD} and {BC} are candidate keys.",
        "Total number of candidate keys are 3.",
        "The set of prime attribute is {A, B, C, D}.",
        "Both {AD} and {AB} are candidate keys.",
      ],
      answer: ["B", "C", "D"],
      solution: "{AB}<sup>+</sup> = {A B C D E}<br>{AD}<sup>+</sup> = {A B C D E}<br>{C}<sup>+</sup> = {A B C D E}<br>Total number of candidate = 3<br>{AB, AD, C} are candidate keys.<br>{A, B, C, D} are prime attribute.<br>E is non-prime attribute because it does not appear in any candidate key.",
    },
    {
      marks: 1,
      neg: 0,
      type: "MSQ",
      text: "Which of the following statements is/are correct?",
      image: "",
      options: [
        "A hash index can be implemented as a sparse index to save space.",
        "An unclustered tree index is I/O efficient for searching a key attribute.",
        "A dense index contains an index record for every search key value in the file.",
        "A sparse index must contain an entry for every record in the data file.",
      ],
      answer: ["B", "C"],
      solution: "Searching a single key requires traversing the tree (logarithmic I/Os) + one random access to&nbsp;fetch the record. This is considered efficient for a single key search. So, option (a) is correct.<br>Hash indexes require a mapping for every key to locate its bucket. Sparse indexing would&nbsp;break this mapping → not possible. So, option (b) is incorrect.<br>Dense index has an entry for every key, allowing direct access. So, option (c) is correct.<br>Sparse index contains entries for some keys only, usually one per block. So, option (d) is&nbsp;incorrect.",
    },
    {
      marks: 2,
      neg: 0.66,
      type: "MCQ",
      text: "Consider the following statements:<br><em>S</em><sub>1</sub> : B<sup>+</sup> tree indexes are more efficient for range queries than B-tree indexes.<br><em>S</em><sub>2</sub> : In a B<sup>+</sup> tree, the non-leaf nodes store only search keys and child pointers, whereas in a B-tree,&nbsp;non-leaf nodes must also store pointers to the actual data records.<br><br>Which of the above statements are correct?",
      image: "",
      options: [
        "Only S<sub>2</sub> is true",
        "Both S<sub>1</sub> and S<sub>2</sub> are true",
        "Neither S<sub>1</sub> nor S<sub>2</sub> is true",
        "Only S<sub>1</sub> is true",
      ],
      answer: "B",
      solution: "In a B+ tree, all actual records are stored at the leaf level. Leaf nodes are linked sequentially,&nbsp;enabling efficient traversal for range queries. In a B-tree, records may be present in internal&nbsp;nodes, making sequential access less efficient. So, S1 is correct.<br>In a B<sup>+</sup> tree: Internal (non-leaf) nodes store only search keys and child pointers.<br>In a B-tree: Internal nodes can store keys along with pointers to actual data records (or the&nbsp;records themselves depending on implementation).<br>So the distinction made in the statement is conceptually correct in standard database indexing&nbsp;context. So, <em>S</em><sub>2</sub> is correct.",
    },
    {
      marks: 2,
      neg: 0.66,
      type: "MCQ",
      text: "Find minimum number of tables for given ERD to satisfy BCNF.",
      image: "js/questions/database-1/9.png",
      options: ["2 tables", "3 tables", "4 tables", "5 tables"],
      answer: "C",
      solution: "<img src='js/questions/database-1/10.png' alt='Detailed Solution'>",
    },
    {
      marks: 2,
      neg: 0,
      type: "NAT",
      text: "Amy and Bob are working on a project vehicle rental system, they have a file consisting of&nbsp;10000 records, having block size 1024 bytes, record size 100 bytes. Search key size 9 bytes,&nbsp;pointer 7 bytes. They want to implement single level indexing. Bob suggested to implement&nbsp;1<sup>st</sup> level index using dense index, however Amy suggested to implement sparse index. How&nbsp;many blocks are saved by Amy considering only 1<sup>st</sup> level index ________?",
      image: "",
      options: [],
      answer: 141,
      solution: `
  <img src="js/questions/database-1/7.png" alt="Detailed Solution">
  <br><br>
  <img src="js/questions/database-1/8.png" alt="Detailed Solution">
`,
    },
    {
      marks: 2,
      neg: 0.66,
      type: "MCQ",
      text: "Following table has two attributes Employee_id and Manager_id, where Employee_id is a primary&nbsp;key and Manager_id is a foreign key referencing Employee id with on-delete cascade.<br>On deleting the tuple (20, 40), the set of other tuples that must be deleted to maintain, the referential&nbsp;integrity of table is",
      image: "js/questions/database-1/5.png",
      options: [
        "(30, 35), (50, 20) and (35, 20) only",
        "(40, 45) and (25, 40) only",
        "(30, 35) and (35, 20) only",
        "(40, 45), (25, 40) and (50, 20) only",
      ],
      answer: "A",
      solution: "<img src='js/questions/database-1/6.png' alt='Detailed Solution'>"
    },
    {
      marks: 2,
      neg: 0,
      type: "MSQ",
      text: "Which of the following statements are correct?",
      image: "",
      options: [
        "A lossless-join and dependency-preserving decomposition into 3NF is always possible",
        "A prime attribute of a relation <em>R </em>is an attribute that appears in all candidate keys of <em>R</em>.",
        "Any relation with two attributes is in 4NF.",
        "None of the above",
      ],
      answer: ["A", "C"],
      solution: "A relation with only two attributes cannot have non-trivial multivalued dependencies. 4NF&nbsp;removes non-trivial MVDs unless the determinant is a superkey. Since such MVDs cannot&nbsp;exist here, the relation is always in 4NF. So, option (a) is correct.<br>There exists a standard 3NF synthesis algorithm in DBMS. It guarantees a decomposition that&nbsp;is both lossless-join and dependency-preserving. Hence, such a decomposition is always&nbsp;possible. So, option (b) is correct.<br>A prime attribute is defined as an attribute that appears in at least one candidate key. It is not&nbsp;required to be present in all candidate keys. Hence, the statement is incorrect. So, option (c)&nbsp;is incorrect.",
    },
    {
      marks: 2,
      neg: 0,
      type: "NAT",
      text: "Consider a B-tree in the given figure,<br><img src='js/questions/database-1/2.png' alt='B-tree'> where each node has atleast 2 and atmost 4 keys.<br>Keys 6 and 21 are inserted into this tree in that order. The number of nodes (disregarding the links) present with exactly same structure given below in the tree after the two insertions is _______.<br><img src='js/questions/database-1/3.png' alt='Detailed Solution'>",
      image: "",
      options: [],
      answer: 4,
      solution: "<img src='js/questions/database-1/4.png' alt='Detailed Solution'><br>Hence, all the 4 nodes are present in the tree after the two insertion.",
    },
    {
      marks: 2,
      neg: 0,
      type: "MSQ",
      text: "Which of the following functional dependency in a relational database is/are correct?",
      image: "",
      options: [
        "(A → B) implies (AC → B)",
        "(A → B and B → C) implies (A → C)",
        "(AB → C) implies (ADB → C)",
        "(AB → C) implies (A → C)",
      ],
      answer: ["A", "B", "C"],
      solution: "a.(A → B) ⇒ (AC → B)<br>By using Augmentation rule<br>A → B ⇒ AC → BC<br>AC → B<br>So, option (a) is correct.<br><br>b.(A → B and B → C) implies (A → C)<br>Apply Transitivity rule:<br>A → B, B → C ⇒ A → C<br>So, option (b) is correct.<br><br>c.(AB → C) implies (ADB → C)<br>Using augmentation, we can add attributes to LHS:<br>AB → C ⇒ ABD → C<br>(ADB → C)<br>So, option (c) is correct.<br><br>d.(AB → C) implies (A → C)<br>This tries to remove attribute B from LHS.<br>No such rule exists in functional dependencies.<br>AB → C ⇒ A → C is not possible.<br>So, option (d) is incorrect.",
    },
    {
      marks: 2,
      neg: 0.66,
      type: "MCQ",
      text: "Consider the following ER diagram:<br>Enrollment mapping cardinality is many to many. While converting the ER diagram into a relational<br>DBMS model, the relationship set enrollment is convert into a relation&nbsp;Enrollment(roll no, cid, enrollment_year)<br>Which of the following is primary key of enrollment?",
      image: "js/questions/database-1/1.png",
      options: [
        "(roll no, cid)",
        "(roll no, enrollment_year)",
        "(cid, enrollment_year)",
        "cid",
      ],
      answer: "A",
      solution: "For an M : N (Many-to-Many) relationship like Enrollment, the resulting relation must have a&nbsp;primary key consisting of the union of the primary keys of the participating entity sets.<br>Since roll_no and cid uniquely identify each enrollment, the primary key is (roll_no, cid).",
    }
  ]
});

registerTest({  // made easy cse 2027 topic wise test database-2
  series: "cs-gate-pyq",
  name: "TWT - Database-2",
  date: "july 12, 2026",
  questions: [
  ]
});

registerTest({  // made easy cse 2027 topic wise test theory of computation-1
  series: "cs-gate-pyq",
  name: "TWT - Theory of computation-1",
  date: "july 14, 2026",
  questions: [
  ]
});

registerTest({  // made easy cse 2027 topic wise test theory of computation-2
  series: "cs-gate-pyq",
  name: "TWT - Theory of computation-2",
  date: "july 16, 2026",
  questions: [
  ]
});

registerTest({  // made easy cse 2027 topic wise test computer organization and architecture-1
  series: "cs-gate-pyq",
  name: "TWT - computer organization and architecture-1",
  date: "july 18, 2026",
  questions: [
  ]
});

registerTest({  // made easy cse 2027 topic wise test computer organization and architecture-2
  series: "cs-gate-pyq",
  name: "TWT - computer organization and architecture-2",
  date: "july 21, 2026",
  questions: [
  ]
});

registerTest({  // made easy cse 2027 topic wise test computer network-1
  series: "cs-gate-pyq",
  name: "TWT - Computer network-1",
  date: "july 22, 2026",
  questions: [
  ]
});

registerTest({  // made easy cse 2027 topic wise test computer network-2
  series: "cs-gate-pyq",
  name: "TWT - Computer network-2",
  date: "july 23, 2026",
  questions: [
  ]
});

registerTest({  // made easy cse 2027 topic wise test c programming and data structure-1
  series: "cs-gate-pyq",
  name: "TWT - C programming and data structure-1",
  date: "july 25, 2026",
  questions: [
  ]
});

registerTest({  // made easy cse 2027 topic wise test c programming and data structure-2
  series: "cs-gate-pyq",
  name: "TWT - C programming and data structure-2",
  date: "july 28, 2026",
  questions: [
  ]
});

registerTest({  // made easy cse 2027 topic wise test Engineering Mathematics -1
  series: "cs-gate-pyq",
  name: "TWT - Engineering Mathematics-1",
  date: "july 29, 2026",
  questions: [
  ]
});

registerTest({  // made easy cse 2027 topic wise test Engineering Mathematics-2
  series: "cs-gate-pyq",
  name: "TWT - Engineering Mathematics-2",
  date: "july 30, 2026",
  questions: [
  ]
});

registerTest({  // made easy cse 2027 topic wise test Discrete Mathematics -1
  series: "cs-gate-pyq",
  name: "TWT - Discrete Mathematics -1",
  date: "july 31, 2026",
  questions: [
  ]
});

registerTest({  // made easy cse 2027 topic wise test Discrete Mathematics-2
  series: "cs-gate-pyq",
  name: "TWT - Discrete Mathematics-2",
  date: "Aug 01, 2026",
  questions: [
  ]
});

registerTest({  // made easy cse 2027 topic wise test Algorithms -1
  series: "cs-gate-pyq",
  name: "TWT - Algorithms -1",
  date: "Aug 02, 2026",
  questions: [
  ]
});

registerTest({  // made easy cse 2027 topic wise test Algorithms -2
  series: "cs-gate-pyq",
  name: "TWT - Algorithms -2",
  date: "Aug 03, 2026",
  questions: [
  ]
});

registerTest({  // made easy cse 2027 topic wise test Compiler Design
  series: "cs-gate-pyq",
  name: "TWT - Compiler Design-1",
  date: "Aug 04, 2026",
  questions: [
  ]
});

registerTest({  // made easy cse 2027 topic wise test Compiler Design-2
  series: "cs-gate-pyq",
  name: "TWT - Compiler Design-2",
  date: "Aug 05, 2026",
  questions: [
  ]
});

registerTest({  // made easy cse 2027 topic wise test Operating System-1
  series: "cs-gate-pyq",
  name: "TWT - Operating System-1",
  date: "Aug 06, 2026",
  questions: [
  ]
});

registerTest({  // made easy cse 2027 topic wise test Operating System-2
  series: "cs-gate-pyq",
  name: "TWT - Operating System-2",
  date: "Aug 07, 2026",
  questions: [
  ]
});

registerTest({  // made easy cse 2027 topic wise test General Aptitude-1
  series: "cs-gate-pyq",
  name: "TWT - General Aptitude-1",
  date: "Aug 08, 2026",
  questions: [
  ]
});

registerTest({  // made easy cse 2027 topic wise test General Aptitude-2
  series: "cs-gate-pyq",
  name: "TWT - General Aptitude-2",
  date: "Aug 09, 2026",
  questions: [
  ]
});

registerTest({  // made easy cse 2027 subject wise test General Aptitude
  series: "cs-gate-pyq",
  name: "SWT - General Aptitude",
  date: "Aug 11, 2026",
  questions: [
  ]
});

registerTest({  // made easy cse 2027 subject wise test digital logic
  series: "cs-gate-pyq",
  name: "SWT - Digital logic",
  date: "july 13, 2026",
  questions: [
  ]
});

registerTest({  // made easy cse 2027 subject wise test Operating System
  series: "cs-gate-pyq",
  name: "SWT - Operating System",
  date: "Aug 08, 2026",
  questions: [
  ]
});

registerTest({  // made easy cse 2027 subject wise test Compiler Design
  series: "cs-gate-pyq",
  name: "SWT - Compiler Design",
  date: "Aug 06, 2026",
  questions: [
  ]
});

registerTest({  // made easy cse 2027 subject wise test Algorithms
  series: "cs-gate-pyq",
  name: "SWT - Algorithms",
  date: "Aug 04, 2026",
  questions: [
  ]
});

registerTest({  // made easy cse 2027 subject wise test Discrete Mathematics
  series: "cs-gate-pyq",
  name: "SWT - Discrete Mathematics",
  date: "Aug 02, 2026",
  questions: [
  ]
});

registerTest({  // made easy cse 2027 subject wise test Engineering Mathematics
  series: "cs-gate-pyq",
  name: "SWT - Engineering Mathematics",
  date: "july 31, 2026",
  questions: [
  ]
});

registerTest({  // made easy cse 2027 subject wise test C programming and data structure
  series: "cs-gate-pyq",
  name: "SWT - C programming and data structure",
  date: "July 29, 2026",
  questions: [
  ]
});

registerTest({  // made easy cse 2027 subject wise test computer network
  series: "cs-gate-pyq",
  name: "SWT - Computer network",
  date: "july 28, 2026",
  questions: [
  ]
});

registerTest({  // made easy cse 2027 subject wise test computer organization and architecture
  series: "cs-gate-pyq",
  name: "SWT - Computer organization and architecture",
  date: "july 24, 2026",
  questions: [
  ]
});

registerTest({  // made easy cse 2027 subject wise test theory of computation
  series: "cs-gate-pyq",
  name: "SWT - Theory of computation",
  date: "july 17, 2026",
  questions: [
  ]
});

registerTest({  // made easy cse 2027 subject wise test database
  series: "cs-gate-pyq",
  name: "SWT - Database",
  date: "july 15, 2026",
  questions: [
  ]
});





// MADE EASY ECE GATE PYQ  ALL TEST SERIES. -----------------

registerTest({   // made easy ece 2026 topic wise test digital circuit-1
  series: "ece-gate-pyq",
  name: "TWT - Digital Circuit-1",
  date: "July 07, 2026",
  questions: [
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: "If (84)<sub>X</sub> (in base-X number system) is equal to (64)<sub>Y</sub> (in base-Y number system), then possible values of X and Y are respectively",
      image: "",
      options: [
        "8, 6",
        "12, 18",
        "9, 12",
        "4, 3",
      ],
      answer: "C",
      solution: "<img src='js/questions/easy digitalcircuit-1/1.png' alt='solution' style='max-width:100%; border-radius: 8px;'>",
    },
    {
      marks: 1,
      neg: 0,
      type: "NAT",
      text: "The sum of the decimal values of the Gray codes for decimal numbers 0-9 is ________ .",
      image: "",
      options: [],
      answer: 53,
      solution: "<img src='js/questions/easy digitalcircuit-1/5.png' alt='solution' style='max-width:100%; border-radius: 8px;'>",
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: "A function <em>F</em>(<em>A</em>, <em>B</em>, <em>C</em>) = Î£<em>m</em>{1, 2, 4, 7} is to be implemented using a 4 : 1 MUX with ‘<em>A</em> and <em>C</em>’ as select lines. Which of the following gives correct inputs for the multiplexer?",
      image: "",
      options: [
        "<img src='js/questions/easy digitalcircuit-1/6.png' alt='solution' style='max-width:100%; border-radius: 8px;'>",
        "<img src='js/questions/easy digitalcircuit-1/7.png' alt='solution' style='max-width:100%; border-radius: 8px;'>",
        "<img src='js/questions/easy digitalcircuit-1/8.png' alt='solution' style='max-width:100%; border-radius: 8px;'>",
        "<img src='js/questions/easy digitalcircuit-1/9.png' alt='solution' style='max-width:100%; border-radius: 8px;'>",
      ],
      answer: "A",
      solution: "<img src='js/questions/easy digitalcircuit-1/10.png' alt='solution' style='max-width:100%; border-radius: 8px;'>",
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: "A function ‘F’ is to be implemented using a 2 Ã— 1 Multiplexer only where,<br>The number of 2 Ã— 1 MUX required to implement F is: ",
      image: "js/questions/easy digitalcircuit-1/13.png",
      options: [
        "12",
        "13",
        "14",
        "15",
      ],
      answer: "D",
      solution: "<img src='js/questions/easy digitalcircuit-1/14.png' alt='solution' style='max-width:100%; border-radius: 8px;'>",
    },
    {
      marks: 1,
      neg: 0,
      type: "NAT",
      text: "The sum of all the digits in the number obtained after doing the 10’s complement of 988.79 is&nbsp;_______.",
      image: "",
      options: [],
      answer: 5,
      solution: "<img src='js/questions/easy digitalcircuit-1/15.png' alt='solution' style='max-width:100%; border-radius: 8px;'>",
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: "Consider the logic circuit shown in the figure below:<br>The output <em>F</em> is given by",
      image: "js/questions/easy digitalcircuit-1/33.png",
      options: [
        "<img src='js/questions/easy digitalcircuit-1/34.png' alt='solution' style='max-width:100%; border-radius: 8px;'>",
        "<img src='js/questions/easy digitalcircuit-1/35.png' alt='solution' style='max-width:100%; border-radius: 8px;'>",
        "<img src='js/questions/easy digitalcircuit-1/36.png' alt='solution' style='max-width:100%; border-radius: 8px;'>",
        "<img src='js/questions/easy digitalcircuit-1/37.png' alt='solution' style='max-width:100%; border-radius: 8px;'>",
      ],
      answer: "C",
      solution: "<img src='js/questions/easy digitalcircuit-1/38.png' alt='solution' style='max-width:100%; border-radius: 8px;'>",
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: "The output ‘<em>Y</em>’ of the multiplexer circuit shown in figure below is",
      image: "js/questions/easy digitalcircuit-1/44.png",
      options: [
        "<img src='js/questions/easy digitalcircuit-1/45.png' alt='solution' style='max-width:100%; border-radius: 8px;'>",
        "<img src='js/questions/easy digitalcircuit-1/46.png' alt='solution' style='max-width:100%; border-radius: 8px;'>",
        "<img src='js/questions/easy digitalcircuit-1/47.png' alt='solution' style='max-width:100%; border-radius: 8px;'>",
        "<img src='js/questions/easy digitalcircuit-1/48.png' alt='solution' style='max-width:100%; border-radius: 8px;'>",
      ],
      answer: "B",
      solution: "<img src='js/questions/easy digitalcircuit-1/49.png' alt='solution' style='max-width:100%; border-radius: 8px;'>",
    },
    {
      marks: 1,
      neg: 0,
      type: "MSQ",
      text: "The number (110011)<sub>2</sub> is numerically equal to",
      image: "",
      options: [
        "(51)<sub>9</sub>",
        "(63)<sub>8</sub>",
        "(33)<sub>16</sub>",
        "(303)<sub>4</sub>",
      ],
      answer: ["B", "C", "D"],
      solution: "<img src='js/questions/easy digitalcircuit-1/43.png' alt='solution' style='max-width:100%; border-radius: 8px;'>",
    },
    {
      marks: 1,
      neg: 0,
      type: "NAT",
      text: "An 8-bit SISO shift register is connected with a 4-bit PISO register as shown in the figure below.<br>The minimum number of clock pulses required to get the 4-bit input data at the output is equal to __________.",
      image: "js/questions/easy digitalcircuit-1/39.png",
      options: [],
      answer: 12,
      solution: "<img src='js/questions/easy digitalcircuit-1/40.png' alt='solution' style='max-width:100%; border-radius: 8px;'>",
    },
    {
      marks: 2,
      neg: 0,
      type: "NAT",
      text: "Two functions <em>F</em><sub>1</sub> and <em>F</em><sub>2</sub>&nbsp;are given as;<br>F<sub>1</sub> = Î£<em>m</em>(0, 1, 2, 3, 6, 7, 13, 15)<br>F<sub>2</sub>&nbsp;= Î£<em>m</em>(2, 3, 6, 7, 10, 11, 12)<br>The no. of Essential Prime Implicants (EPIs) in <em>F</em><sub>1</sub> and <em>F</em><sub>2</sub>&nbsp;are <em>A</em> and <em>B</em>. The value of A/B is:",
      image: "",
      options: [],
      answer: 1,
      solution: "<img src='js/questions/easy digitalcircuit-1/16.png' alt='solution' style='max-width:100%; border-radius: 8px;'>",
    },
    {
      marks: 2,
      neg: 0,
      type: "MSQ",
      text: "A 4-bit BCD (<em>B</em><sub>4</sub><em>B</em><sub>3</sub><em>B</em><sub>2</sub><em>B</em><sub>1</sub>) to Excess-3 code (<em>X</em><sub>4</sub> <em>X</em><sub>3</sub> <em>X</em><sub>2</sub> <em>X</em><sub>1</sub>) converter circuit is to be designed. Which&nbsp;of the given minimal expression is correct?",
      image: "",
      options: [
        "<img src='js/questions/easy digitalcircuit-1/17.png' alt='solution' style='max-width:100%; border-radius: 8px;'>",
        "<img src='js/questions/easy digitalcircuit-1/18.png' alt='solution' style='max-width:100%; border-radius: 8px;'>",
        "<img src='js/questions/easy digitalcircuit-1/19.png' alt='solution' style='max-width:100%; border-radius: 8px;'>",
        "<img src='js/questions/easy digitalcircuit-1/20.png' alt='solution' style='max-width:100%; border-radius: 8px;'>",
      ],
      answer: ["A", "D"],
      solution: "<img src='js/questions/easy digitalcircuit-1/21.png' alt='solution' style='max-width:100%; border-radius: 8px;'><br><img src='js/questions/easy digitalcircuit-1/22.png' alt='solution' style='max-width:100%; border-radius: 8px;'>",
    },
    {
      marks: 2,
      neg: 0.66,
      type: "MCQ",
      text: "Which of the following gives the correct simplification of the Boolean expressions?",
      image: "",
      options: [
        "<img src='js/questions/easy digitalcircuit-1/23.png' alt='solution' style='max-width:100%; border-radius: 8px;'>",
        "<img src='js/questions/easy digitalcircuit-1/24.png' alt='solution' style='max-width:100%; border-radius: 8px;'>",
        "<img src='js/questions/easy digitalcircuit-1/25.png' alt='solution' style='max-width:100%; border-radius: 8px;'>",
        "<img src='js/questions/easy digitalcircuit-1/26.png' alt='solution' style='max-width:100%; border-radius: 8px;'>",
      ],
      answer: "A",
      solution: "<img src='js/questions/easy digitalcircuit-1/27.png' alt='solution' style='max-width:100%; border-radius: 8px;'>",
    },
    {
      marks: 2,
      neg: 0,
      type: "NAT",
      text: "A Boolean function is given as,<br>Then the minimum number of two input NAND gates required to implement this function is&nbsp;________.",
      image: "js/questions/easy digitalcircuit-1/41.png",
      options: [],
      answer: 6,
      solution: "<img src='js/questions/easy digitalcircuit-1/42.png' alt='solution' style='max-width:100%; border-radius: 8px;'>",
    },
    {
      marks: 2,
      neg: 0.66,
      type: "MCQ",
      text: "A function <em>F</em> is to be implemented using a 4 : 1 multiplexer where <em>F</em>(<em>A</em>, <em>B</em>, <em>C</em>) = Î <em>M</em>(0, 3, 5, 6).<br>Which of the following is not correct?",
      image: "js/questions/easy digitalcircuit-1/28.png",
      options: [
        "<img src='js/questions/easy digitalcircuit-1/29.png' alt='solution' style='max-width:100%; border-radius: 8px;'>",
        "<img src='js/questions/easy digitalcircuit-1/30.png' alt='solution' style='max-width:100%; border-radius: 8px;'>",
        "F is output difference function of a full subtractor.",
        "<img src='js/questions/easy digitalcircuit-1/31.png' alt='solution' style='max-width:100%; border-radius: 8px;'>",
      ],
      answer: "D",
      solution: "<img src='js/questions/easy digitalcircuit-1/32.png' alt='solution' style='max-width:100%; border-radius: 8px;'>",
    },
    {
      marks: 2,
      neg: 0.66,
      type: "MCQ",
      text: "Number of two input NAND Gates required to realize a 3-bit majority function is:",
      image: "",
      options: [
        "3",
        "4",
        "5",
        "6",
      ],
      answer: "D",
      solution: "<img src='js/questions/easy digitalcircuit-1/11.png' alt='solution' style='max-width:100%; border-radius: 8px;'><br><img src='js/questions/easy digitalcircuit-1/12.png' alt='solution' style='max-width:100%; border-radius: 8px;'>",
    },
    {
      marks: 2,
      neg: 0.66,
      type: "MCQ",
      text: "Consider the logic circuit shown below: The circuit acts as<br><img src='js/questions/easy digitalcircuit-1/2.png' alt='image 1' style='max-width:100%; margin-top:10px;'><br><img src='js/questions/easy digitalcircuit-1/3.png' alt='image 2' style='max-width:100%; margin-top:10px;'>",
      image: "",
      options: [
        "buffer for A = B",
        "inverter for A ≠ B",
        "OR gate for all A, B",
        "AND gate for all A, B",
      ],
      answer: "A",
      solution: "<img src='js/questions/easy digitalcircuit-1/4.png' alt='solution' style='max-width:100%; border-radius: 8px;'>",
    },
    {
      marks: 2,
      neg: 0,
      type: "NAT",
      text: "Consider a Boolean expression,<br>The minimum number of NAND-gates required to implement this function ‘f<em> </em>’ will be ______.",
      image: "js/questions/easy digitalcircuit-1/50.png",
      options: [],
      answer: 0,
      solution: "<img src='js/questions/easy digitalcircuit-1/51.png' alt='solution' style='max-width:100%; border-radius: 8px;'>",
    }
  ]
});

registerTest({   // made easy ece 2026 topic wise test digital circuit-2
  series: "ece-gate-pyq",
  name: "TWT - Digital Circuit-2",
  date: "july 11, 2026",
  questions: [
    {
      marks: 1,
      neg: 0,
      type: "NAT",
      text: `A 5-bit binary counter starts with 00000. If 144 input clock pulses are applied, the number of times counter will be reset is ________.`,
      image: "",
      options: [],
      answer: 4,
      solution: `<img alt="" src="js/questions/topicwise_test_18_part_syllabus_gate_2026_ec_digital_circuits_2/img_1.png"/><br><br>`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `A shift register is operating/connected with 25 kHz clock. The time taken to feed the 2 nibbles of data serially into shift register is,`,
      image: "",
      options: [
        `3.2 msec`,
        `32 msec`,
        `0.32 msec`,
        `32 μsec`
      ],
      answer: "C",
      solution: `<img alt="" src="js/questions/topicwise_test_18_part_syllabus_gate_2026_ec_digital_circuits_2/img_2.png"/><br><br>`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `The final values of <em>Q</em><sub>1</sub> and <em>Q</em><sub>0</sub> respectively after 4 clock pulses, if initial values are 00 in the sequential circuit shown below is:<br><br><img alt="" src="js/questions/topicwise_test_18_part_syllabus_gate_2026_ec_digital_circuits_2/img_3.png"/><br><br>`,
      image: "",
      options: [
        `10`,
        `11`,
        `00`,
        `01`
      ],
      answer: "C",
      solution: `<img alt="" src="js/questions/topicwise_test_18_part_syllabus_gate_2026_ec_digital_circuits_2/img_4.png"/><br><br>`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `All the logic gates in the circuit shown below have finite propagation delay. The circuit can be used as a clock generator, if<br><br><img alt="" src="js/questions/topicwise_test_18_part_syllabus_gate_2026_ec_digital_circuits_2/img_5.png"/><br><br>`,
      image: "",
      options: [
        `<em>X</em> = 0`,
        `<em>X</em> = 1`,
        `<em>X</em> = Y`,
        `<br><br><img alt="" src="js/questions/topicwise_test_18_part_syllabus_gate_2026_ec_digital_circuits_2/img_6.png"/><br><br>`
      ],
      answer: "A",
      solution: `<img alt="" src="js/questions/topicwise_test_18_part_syllabus_gate_2026_ec_digital_circuits_2/img_7.png"/><br><br>`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `The integrated output waveform for a dual slope <em>ADC</em> is shown in the figure. If the ADC uses 16 bit counter with 8 MHz clock, then the time ‘<em>T</em> ’ will be<br><br><img alt="" src="js/questions/topicwise_test_18_part_syllabus_gate_2026_ec_digital_circuits_2/img_8.png"/><br><br>`,
      image: "",
      options: [
        `0.64 msec`,
        `8.192 msec`,
        `0.128 msec`,
        `0.064 msec`
      ],
      answer: "B",
      solution: `<img alt="" src="js/questions/topicwise_test_18_part_syllabus_gate_2026_ec_digital_circuits_2/img_9.png"/><br><br>`
    },

    {
      marks: 1,
      neg: 0,
      type: "NAT",
      text: `A 4-bit MOD-6 ripple counter uses J-K flip-flops. If propagation delay of each flip-flop is 20 nsec, then the maximum clock frequency that can be used is ________ MHz.`,
      image: "",
      options: [

      ],
      answer: 12.5,
      solution: `<img alt="" src="js/questions/topicwise_test_18_part_syllabus_gate_2026_ec_digital_circuits_2/img_36.png"/><br><br>`
    },

    {
      marks: 1,
      neg: 0,
      type: "NAT",
      text: `An 8-bit binary DAC produces output voltage of 2 V for a binary input (01100100). The output voltage for the binary input (10100010) is _________ V.`,
      image: "",
      options: [

      ],
      answer: 3.24,
      solution: `<img alt="" src="js/questions/topicwise_test_18_part_syllabus_gate_2026_ec_digital_circuits_2/img_39.png"/><br><br>`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `In the circuit shown below <em>A</em> , <em>B</em> , <em>C</em> are the inputs and <em>P</em> , <em>Q</em> are the two outputs. The circuit is a<br><br><img alt="" src="js/questions/topicwise_test_18_part_syllabus_gate_2026_ec_digital_circuits_2/img_22.png"/><br><br>`,
      image: "",
      options: [
        `Half subtractor where <em>Q</em> is the subtracted value and <em>P</em> is the borrow.`,
        `Full subtractor where <em>Q</em> is the borrow and <em>P</em> is the subtracted value.`,
        `Full adder where <em>Q</em> is the sum and <em>P</em> is the carry.`,
        `Full adder where <em>P</em> is the sum and <em>Q</em> is the carry.`
      ],
      answer: "D",
      solution: `<img alt="" src="js/questions/topicwise_test_18_part_syllabus_gate_2026_ec_digital_circuits_2/img_23.png"/><br><br>`
    },
    {
      marks: 1,
      neg: 0,
      type: "MSQ",
      text: `For the circuit below, which of the following options correctly represents <img align="absmiddle" alt="" src="js/questions/topicwise_test_18_part_syllabus_gate_2026_ec_digital_circuits_2/img_24.png"/><br><br><img alt="" src="js/questions/topicwise_test_18_part_syllabus_gate_2026_ec_digital_circuits_2/img_25.png"/><br><br>`,
      image: "",
      options: [
        `<br><br><img alt="" src="js/questions/topicwise_test_18_part_syllabus_gate_2026_ec_digital_circuits_2/img_26.png"/><br><br>`,
        `<br><br><img alt="" src="js/questions/topicwise_test_18_part_syllabus_gate_2026_ec_digital_circuits_2/img_27.png"/><br><br>`,
        `<br><br><img alt="" src="js/questions/topicwise_test_18_part_syllabus_gate_2026_ec_digital_circuits_2/img_28.png"/><br><br>`,
        `<br><br><img alt="" src="js/questions/topicwise_test_18_part_syllabus_gate_2026_ec_digital_circuits_2/img_29.png"/><br><br>`
      ],
      answer: ["B", "C"],
      solution: `<img alt="" src="js/questions/topicwise_test_18_part_syllabus_gate_2026_ec_digital_circuits_2/img_30.png"/><br><br>`
    },
    {
      marks: 2,
      neg: 0,
      type: "NAT",
      text: `A 5-bit ripple carry adder is made using 5 identical full adders such that the worst case delay of the 5-bit ripple carry adder is 125 ns. If the carry propagation delay [<em>t</em><sub><em>pd</em> (carry)</sub> ] is more than [<em>t</em><sub><em>pd</em> (sum)</sub> ], then the value of <em>t</em><sub><em>pd</em> (carry)</sub> is _______ (in nsec).`,
      image: "",
      options: [],
      answer: 25,
      solution: `<img alt="" src="js/questions/topicwise_test_18_part_syllabus_gate_2026_ec_digital_circuits_2/img_31.png"/><br><br>`
    },
    {
      marks: 2,
      neg: 0.66,
      type: "MCQ",
      text: `A 4-bit synchronous series carry counter has flip-flops having propagation delay of 40ns each and AND gates having propagation delay of 10 ns each. The minimum time period of clock pulses can be:`,
      image: "",
      options: [
        `100 nsec`,
        `90 nsec`,
        `50 nsec`,
        `60 nsec`
      ],
      answer: "D",
      solution: `<img alt="" src="js/questions/topicwise_test_18_part_syllabus_gate_2026_ec_digital_circuits_2/img_19.png"/><br><br>`
    },
    {
      marks: 2,
      neg: 0.66,
      type: "MCQ",
      text: `The circuit shown below is a ring oscillator made up of identical inverters. If the output waveform has frequency of 20 MHz, then propagation delay of each inverter is<br><br><img alt="" src="js/questions/topicwise_test_18_part_syllabus_gate_2026_ec_digital_circuits_2/img_20.png"/><br><br>`,
      image: "",
      options: [
        `10 nsec`,
        `20 nsec`,
        `15 nsec`,
        `5 nsec`
      ],
      answer: "D",
      solution: `<img alt="" src="js/questions/topicwise_test_18_part_syllabus_gate_2026_ec_digital_circuits_2/img_21.png"/><br><br>`
    },

    {
      marks: 2,
      neg: 0,
      type: "NAT",
      text: `A 4-bit serial-in-parallel-out right shift register with initial content as 1010 is shown in the figure below. The content of the shift register will be 1111 after ________ clock pulses.<br><br><img alt="" src="js/questions/topicwise_test_18_part_syllabus_gate_2026_ec_digital_circuits_2/img_34.png"/><br><br>`,
      image: "",
      options: [],
      answer: 3,
      solution: `<img alt="" src="js/questions/topicwise_test_18_part_syllabus_gate_2026_ec_digital_circuits_2/img_35.png"/><br><br>`
    },
    {
      marks: 2,
      neg: 0.66,
      type: "MCQ",
      text: `Given below is a synchronous sequential circuit with two T flip-flops <em>T<sub>A</sub></em> and <em>T<sub>B</sub></em> with their outputs denoted as <em>A</em> and <em>B</em> respectively, with <img align="absmiddle" alt="" src="js/questions/topicwise_test_18_part_syllabus_gate_2026_ec_digital_circuits_2/img_10.png"/><br><br><img alt="" src="js/questions/topicwise_test_18_part_syllabus_gate_2026_ec_digital_circuits_2/img_11.png"/><br><br>Starting from initial state (<em>AB</em> = 00), the sequence of states visited by the circuit is`,
      image: "",
      options: [
        `00 → 10 → 01 → 11 → 00`,
        `00 → 10 → 01 → 11 → 10`,
        `00 → 01 → 11 → 00`,
        `00 → 01 → 10 → 11 → 00`
      ],
      answer: "B",
      solution: `<img alt="" src="js/questions/topicwise_test_18_part_syllabus_gate_2026_ec_digital_circuits_2/img_12.png"/><br><br>`
    },
    {
      marks: 2,
      neg: 0.66,
      type: "MCQ",
      text: `A logic circuit implements the boolean function <img align="absmiddle" alt="" src="js/questions/topicwise_test_18_part_syllabus_gate_2026_ec_digital_circuits_2/img_13.png"/> It is found that the input combination Z = 1, Y = 1 can never occur. Taking this into account, a simplified expression for <em>F</em> is given by:`,
      image: "",
      options: [
        `<br><br><img alt="" src="js/questions/topicwise_test_18_part_syllabus_gate_2026_ec_digital_circuits_2/img_14.png"/><br><br>`,
        `<br><br><img alt="" src="js/questions/topicwise_test_18_part_syllabus_gate_2026_ec_digital_circuits_2/img_15.png"/><br><br>`,
        `<br><br><img alt="" src="js/questions/topicwise_test_18_part_syllabus_gate_2026_ec_digital_circuits_2/img_16.png"/><br><br>`,
        `<br><br><img alt="" src="js/questions/topicwise_test_18_part_syllabus_gate_2026_ec_digital_circuits_2/img_17.png"/><br><br>`
      ],
      answer: "B",
      solution: `<img alt="" src="js/questions/topicwise_test_18_part_syllabus_gate_2026_ec_digital_circuits_2/img_18.png"/><br><br>`
    },
    {
      marks: 2,
      neg: 0,
      type: "MSQ",
      text: `In the latch circuit shown, the NAND gates have non-zero, but unequal propagation delays. The present input condition is ; <em>P</em> = <em>Q</em> = ‘0’. If the input condition is changed simultaneously to <em>P</em> = <em>Q</em> = ‘1’, the possible outputs <em>X</em> and <em>Y</em> are<br><br><img alt="" src="js/questions/topicwise_test_18_part_syllabus_gate_2026_ec_digital_circuits_2/img_37.png"/><br><br>`,
      image: "",
      options: [
        `<em>X</em> = 1, <em>Y</em> = 1`,
        `<em>X</em> = 1, <em>Y</em> = 0`,
        `<em>X</em> = 0, <em>Y</em> = 1`,
        `<em>X</em> = 0, <em>Y</em> = 0`
      ],
      answer: ["B", "C"],
      solution: `<img alt="" src="js/questions/topicwise_test_18_part_syllabus_gate_2026_ec_digital_circuits_2/img_38.png"/><br><br>`
    },
    {
      marks: 2,
      neg: 0,
      type: "NAT",
      text: `Consider the combinational circuit below,<br><br><img alt="" src="js/questions/topicwise_test_18_part_syllabus_gate_2026_ec_digital_circuits_2/img_32.png"/><br><br>The duration for which the output Y will be high is ________ (in nsec).`,
      image: "",
      options: [

      ],
      answer: 4,
      solution: `<img alt="" src="js/questions/topicwise_test_18_part_syllabus_gate_2026_ec_digital_circuits_2/img_33.png"/><br><br>`
    },
  ]
});

registerTest({   // made easy ece 2026 topic wise test Analog circuit-1
  series: "ece-gate-pyq",
  name: "TWT - Analog Circuit-1",
  date: "july 14, 2026",
  questions: [
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `A single phase full wave rectifier uses semiconductor diodes. The transformer voltage is 40 V rms with center tap. The load consists of a 45 μF capacitor in parallel with a 300 Ω resistor. The diode and transformer resistances and leakage reactance are neglected. If the power line frequency is 60 Hz, the dc current in the circuit will be`,
      image: "",
      options: [
        `264.12 mA`,
        `288.18 mA`,
        `132.05 mA`,
        `144.08 mA`,
      ],
      answer: "D",
      solution: `<img alt="" src="js/questions/ec_2026_analog_1/img_1.png"/>`
    },
    {
      marks: 1,
      neg: 0,
      type: "NAT",
      text: `Consider the circuit shown in the figure below:<br/><img alt="" src="js/questions/ec_2026_analog_1/img_20.png"/><br/>Assuming the |<em>V</em> <sub> <em>BE</em> (on) </sub> | = 0.7 V, then the value of output voltage <em>V</em> <sub>0</sub> is equal to _________ V.<br/>(Rounded upto 2 decimal places)`,
      image: "",
      options: [
      ],
      answer: -5.15,
      solution: `<img alt="" src="js/questions/ec_2026_analog_1/img_21.png"/>`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `A sinusoidal input is given to the network shown below. The output waveform is<br/><img alt="" src="js/questions/ec_2026_analog_1/img_2.png"/>`,
      image: "",
      options: [
        `<img alt="" src="js/questions/ec_2026_analog_1/img_3.png"/>`,
        `<img alt="" src="js/questions/ec_2026_analog_1/img_4.png"/>`,
        `<img alt="" src="js/questions/ec_2026_analog_1/img_5.png"/>`,
        `<img alt="" src="js/questions/ec_2026_analog_1/img_6.png"/>`,
      ],
      answer: "A",
      solution: `<img alt="" src="js/questions/ec_2026_analog_1/img_7.png"/>`
    },
    {
      marks: 1,
      neg: 0,
      type: "NAT",
      text: `In the given circuit, diodes <em>D</em> <sub>1</sub> and <em>D</em> <sub>2</sub> are ideal and <em> V<sub>i</sub> </em> (<em>t</em> ) = 9 sin (ω<em>t</em> ) volt.<br/><img alt="" src="js/questions/ec_2026_analog_1/img_24.png"/><br/>The average steady-state voltage across diode <em>D</em> <sub>2</sub> (with polarity as mentioned) is _________ volt.<br/>(Rounded upto nearest integer)`,
      image: "",
      options: [
      ],
      answer: -9,
      solution: `<img alt="" src="js/questions/ec_2026_analog_1/img_25.png"/>`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `A signal 30 sin ωt V is applied across <em>AB</em> . Assuming ideal diodes, the output measured across <em>WX</em> is<br/><img alt="" src="js/questions/ec_2026_analog_1/img_8.png"/>`,
      image: "",
      options: [
        `sin ω<em>t</em> V`,
        `<img alt="" src="js/questions/ec_2026_analog_1/img_9.png"/>`,
        `0 V`,
        `60 V`,
      ],
      answer: "C",
      solution: `<img alt="" src="js/questions/ec_2026_analog_1/img_10.png"/><br/><img alt="" src="js/questions/ec_2026_analog_1/img_11.png"/>`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `In the given circuit, assume P<sub>z max</sub> = 2 Watt and V<sub>z</sub> = 5 V for the zener diode. If V<sub>i</sub> =12 sin ωt volt, then the minimum value of <em> R<sub>s</sub> </em> to prevent the burn out of the Zener diode is<br/><img alt="" src="js/questions/ec_2026_analog_1/img_12.png"/>`,
      image: "",
      options: [
        `25 Ω`,
        `17.5 Ω`,
        `20 Ω`,
        `35 Ω`,
      ],
      answer: "B",
      solution: `<img alt="" src="js/questions/ec_2026_analog_1/img_13.png"/>`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `Consider a p-n-p common emitter amplifier shown in the figure below:<br/><img alt="" src="js/questions/ec_2026_analog_1/img_14.png"/><br/>The transfer characteristics of the circuit can be approximately represented as`,
      image: "",
      options: [
        `<img alt="" src="js/questions/ec_2026_analog_1/img_15.png"/>`,
        `<img alt="" src="js/questions/ec_2026_analog_1/img_16.png"/>`,
        `<img alt="" src="js/questions/ec_2026_analog_1/img_17.png"/>`,
        `<img alt="" src="js/questions/ec_2026_analog_1/img_18.png"/>`,
      ],
      answer: "B",
      solution: `<img alt="" src="js/questions/ec_2026_analog_1/img_19.png"/>`
    },

    {
      marks: 1,
      neg: 0,
      type: "NAT",
      text: `A 750 mW maximum power dissipation diode at 25°C has 6 mW/°C de-rating factor. If the forward voltage drop remains constant at 0.7 V, the maximum forward current at 73°C is _______ mA.<br/>(Rounded upto nearest integer)`,
      image: "",
      options: [
      ],
      answer: 660,
      solution: `<img alt="" src="js/questions/ec_2026_analog_1/img_22.png"/><br/><img alt="" src="js/questions/ec_2026_analog_1/img_23.png"/>`
    },

    {
      marks: 1,
      neg: 0,
      type: "MSQ",
      text: `Select the correct option(s) regarding clipper circuits:`,
      image: "",
      options: [
        `Clipper circuits serve to protect circuit from damage as a result of over-voltage condition.`,
        `Clipper circuits are also known as D.C. restorer.`,
        `Clipper circuits are also called wave shaping circuits.`,
        `Clipper circuits cannot be designed by using op-amps.`,
      ],
      answer: ["A", "C"],
      solution: `•Clipping circuits are wave shaping circuits, used to clip off the portions of an input waveform.<br/>They can be used to limit the amplitude of a waveform to a certain level, thus protecting<br/>circuit from damage as a result of over-voltage condition.<br/>•Clipper circuits can also be designed using op-amps.<br/>•Clamper circuits are known as D.C. restorer as they adjust the DC level of the waveform.<br/>Thus, options (a) and (c) are correct.`
    },
    {
      marks: 2,
      neg: 0,
      type: "NAT",
      text: `Consider the circuit shown in the figure below:<br/><img alt="" src="js/questions/ec_2026_analog_1/img_43.png"/><br/>Assume that the cut-in voltage of the BJT | <em> V<sub>BE</sub> </em> | = 0.7 V and β = 80. Then the value of <em> V<sub>CEQ</sub> </em> is<br/>________ V. (Rounded upto three decimal places)`,
      image: "",
      options: [
      ],
      answer: -17.436,
      solution: `<img alt="" src="js/questions/ec_2026_analog_1/img_44.png"/>`
    },
    {
      marks: 2,
      neg: 0.66,
      type: "MCQ",
      text: `Consider the MOS transistor circuit shown in the figure below:<br/><img alt="" src="js/questions/ec_2026_analog_1/img_26.png"/><br/>The two N-MOS transistors are identical with threshold voltage <em> V<sub>T</sub> </em> = 1 V and <img align="absmiddle" alt="" src="js/questions/ec_2026_analog_1/img_27.png"/> Assuming the value of λ = 0, the value of drain to source voltage for transistor <em>T</em> <sub>2</sub> (<em>V</em> <sub> <em>DS</em> 2 </sub> ) is equal to`,
      image: "",
      options: [
        `6 V`,
        `5 V`,
        `9 V`,
        `7 V`,
      ],
      answer: "A",
      solution: `<img alt="" src="js/questions/ec_2026_analog_1/img_28.png"/><br/><img alt="" src="js/questions/ec_2026_analog_1/img_29.png"/>`
    },
    {
      marks: 2,
      neg: 0,
      type: "NAT",
      text: `Consider the class-B output stage with complementary MOSFETs shown in the figure below:<br/><img alt="" src="js/questions/ec_2026_analog_1/img_48.png"/><br/>Assuming that the <em> V<sub>TN</sub> </em> and <em> V<sub>TP</sub> </em> values can be neglected for large signal analysis and<img align="absmiddle" alt="" src="js/questions/ec_2026_analog_1/img_49.png"/> The maximum output voltage such that <em> Q<sub>n</sub> </em> remains biased in saturation region is equal to _________ V. (Rounded upto 2 decimal places)`,
      image: "",
      options: [
      ],
      answer: 10.67,
      solution: `<img alt="" src="js/questions/ec_2026_analog_1/img_50.png"/>`
    },
    {
      marks: 2,
      neg: 0.66,
      type: "MCQ",
      text: `The correct waveform for output (<em>V</em> <sub>0</sub> ) for below network is [Assume cut-in voltage of the diode, <em> V<sub>d</sub> </em> = 0.7 V]<br/><img alt="" src="js/questions/ec_2026_analog_1/img_30.png"/>`,
      image: "",
      options: [
        `<img alt="" src="js/questions/ec_2026_analog_1/img_31.png"/>`,
        `<img alt="" src="js/questions/ec_2026_analog_1/img_32.png"/>`,
        `<img alt="" src="js/questions/ec_2026_analog_1/img_33.png"/>`,
        `<img alt="" src="js/questions/ec_2026_analog_1/img_34.png"/>`,
      ],
      answer: "D",
      solution: `<img alt="" src="js/questions/ec_2026_analog_1/img_35.png"/><br/><img alt="" src="js/questions/ec_2026_analog_1/img_36.png"/><br/><img alt="" src="js/questions/ec_2026_analog_1/img_37.png"/>`
    },
    {
      marks: 2,
      neg: 0,
      type: "NAT",
      text: `Consider the circuit shown in the figure below:<br/><img alt="" src="js/questions/ec_2026_analog_1/img_45.png"/><br/>Assume all the transistors to be matched and working in active region with β = β<sub>1</sub> = β<sub>2</sub> = 100, β<sub>3</sub> = 99 and V<sub>BE(on)</sub> = 0.7 V. If the value of <img align="absmiddle" alt="" src="js/questions/ec_2026_analog_1/img_46.png"/> = 120 mA, then the value of resistance R<sub>1</sub> is equal to _________ Ω. (Rounded upto two decimal places)`,
      image: "",
      options: [
      ],
      answer: 104.98,
      solution: `<img alt="" src="js/questions/ec_2026_analog_1/img_47.png"/>`
    },

    {
      marks: 2,
      neg: 0.66,
      type: "MCQ",
      text: `Consider the circuit shown in the figure below:<br/><img alt="" src="js/questions/ec_2026_analog_1/img_38.png"/><br/>The npn transistor has β = 50, <em>V</em> <sub> <em>CE</em> (sat) </sub> = 0.5 V and <em>V</em> <sub> <em>BE</em> (ON) </sub> = 0.7 V. If the maximum output voltage that can appear is 4.6 V, then the range of input voltage for which the transistor will work in active region is`,
      image: "",
      options: [
        `0.7 V ≤ <em>V</em> <sub>in</sub> ≤ 4.5 V`,
        `1.86 V ≤ <em>V</em> in ≤ 4.225 V`,
        `1.025 V &lt;<em>V</em> <sub>in</sub> ≤ 1.512 V`,
        `2.041 V &lt;<em>V</em> <sub>in</sub> &lt;3.025 V`,
      ],
      answer: "D",
      solution: `<img alt="" src="js/questions/ec_2026_analog_1/img_39.png"/><br/><img alt="" src="js/questions/ec_2026_analog_1/img_40.png"/>`
    },
    {
      marks: 2,
      neg: 0.66,
      type: "MCQ",
      text: `A DC current of 31 μA flows through the circuit shown. The diode in the circuit is forward biased and it has an ideality factor of two. At the quiescent point, the diode has a junction capacitance of 0.8 nF. Its neutral region resistances can be neglected. Assume that the room temperature thermal equivalent voltage is 26 mV.<br/><img alt="" src="js/questions/ec_2026_analog_1/img_41.png"/><br/>For ω = 3 × 10<sup>6</sup> rad/s, the amplitude of the small signal component of diode current is`,
      image: "",
      options: [
        `6.402 μA`,
        `17.637 μA`,
        `5.724 μA`,
        `22.896 μA`,
      ],
      answer: "B",
      solution: `<img alt="" src="js/questions/ec_2026_analog_1/img_42.png"/>`
    },
    {
      marks: 2,
      neg: 0,
      type: "MSQ",
      text: `In the regulator circuit shown below, <em> V<sub>z</sub> </em> = 15 V, β = 60 and <em> V<sub>BE</sub> </em> = 0.7 V<br/><img alt="" src="js/questions/ec_2026_analog_1/img_51.png"/><br/>Then which of the following statements is/are correct?`,
      image: "",
      options: [
        `Current through zener diode is 14.3 mA.`,
        `Output voltage (<em>V</em> <sub>0</sub> ) is 14.3 V.`,
        `Current through zener diode is 4.233 mA.`,
        `Output voltage (<em>V</em> <sub>0</sub> ) is 1.7 V.`,
      ],
      answer: ["B", "C"],
      solution: `<img alt="" src="js/questions/ec_2026_analog_1/img_52.png"/>`
    }
  ]
});

registerTest({   // made easy ece 2026 topic wise test Analog circuit-2
  series: "ece-gate-pyq",
  name: "TWT - Analog Circuit-2",
  date: "july 14, 2026",
  questions: [
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `Consider the NMOS common gate circuit shown below. The device parameters are:<br/>Transconductance, <em> g<sub>m</sub> </em> = 3 mS and channel length modulation parameter, λ = 0 V<sup>–1</sup> .<br/><br/><img alt="" src="js/questions/topicwise_test_14_part_syllabus_gate_2026_ec_analog_circuit_2/img_1.png"/><br/><br/>The mid-band voltage gain <em> A<sub>V</sub> </em> is`,
      image: "",
      options: [
        `21.56`,
        `–21.56`,
        `–10.28`,
        `10.28`,
      ],
      answer: "D",
      solution: `<img alt="" src="js/questions/topicwise_test_14_part_syllabus_gate_2026_ec_analog_circuit_2/img_2.png"/>`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `Consider the transistor circuit shown in the figure below:<br/><br/><img alt="" src="js/questions/topicwise_test_14_part_syllabus_gate_2026_ec_analog_circuit_2/img_3.png"/><br/><br/>Assume that the biasing details are left out and the transistors are working in active region with <em>T</em> <sub>1</sub> having transconductance gm1 and input small signal base-emitter resistance <em>r</em> <sub>π1</sub> and transistor <em>T</em> <sub>2</sub> having the transconductance <em>g</em> <sub> <em>m</em> 2 </sub> and input small signal base-emitter resistance <em>r</em> <sub>π2</sub> . Then the voltage gain | <em> A<sub>V</sub> </em> | is given as`,
      image: "",
      options: [
        `<img alt="" src="js/questions/topicwise_test_14_part_syllabus_gate_2026_ec_analog_circuit_2/img_4.png"/>`,
        `<img alt="" src="js/questions/topicwise_test_14_part_syllabus_gate_2026_ec_analog_circuit_2/img_5.png"/>`,
        `<img alt="" src="js/questions/topicwise_test_14_part_syllabus_gate_2026_ec_analog_circuit_2/img_6.png"/>`,
        `<img alt="" src="js/questions/topicwise_test_14_part_syllabus_gate_2026_ec_analog_circuit_2/img_7.png"/>`,
      ],
      answer: "C",
      solution: `<img alt="" src="js/questions/topicwise_test_14_part_syllabus_gate_2026_ec_analog_circuit_2/img_8.png"/>`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `Given for an FET, g<sub>m</sub> = 11.2 mA/Volt and Total capacitance = 530 pF. For a voltage gain of –40, the bandwidth of the FET amplifier will be`,
      image: "",
      options: [
        `3.360 kHz`,
        `84.08 kHz`,
        `84.08 MHz`,
        `3.360 MHz`,
      ],
      answer: "D",
      solution: `<img alt="" src="js/questions/topicwise_test_14_part_syllabus_gate_2026_ec_analog_circuit_2/img_9.png"/>`
    },
    {
      marks: 1,
      neg: 0,
      type: "NAT",
      text: `Consider the current mirror circuit shown below:<br/><br/><img alt="" src="js/questions/topicwise_test_14_part_syllabus_gate_2026_ec_analog_circuit_2/img_24.png"/><br/><br/>The transistors has the following parameters: <em>k</em> ′ <em> <sub>n</sub> </em> = 60 μA/V<sup>2</sup> , <em> V<sub>TN</sub> </em> = 1.2 V and λ = 0. The value of <img align="absmiddle" alt="" src="js/questions/topicwise_test_14_part_syllabus_gate_2026_ec_analog_circuit_2/img_25.png"/> required for <img align="absmiddle" alt="" src="js/questions/topicwise_test_14_part_syllabus_gate_2026_ec_analog_circuit_2/img_26.png"/> and <em>V</em> <sub>DS2(sat)</sub> = 0.92 V is<br/>(Rounded upto three decimal places)`,
      image: "",
      options: [],
      answer: 0.548,
      solution: `<img alt="" src="js/questions/topicwise_test_14_part_syllabus_gate_2026_ec_analog_circuit_2/img_27.png"/><br><br><img alt="" src="js/questions/topicwise_test_14_part_syllabus_gate_2026_ec_analog_circuit_2/img_28.png"/>`
    },
    {
      marks: 1,
      neg: 0,
      type: "MSQ",
      text: `In the circuit shown below: <img align="absmiddle" alt="" src="js/questions/topicwise_test_14_part_syllabus_gate_2026_ec_analog_circuit_2/img_29.png"/> If <img align="absmiddle" alt="" src="js/questions/topicwise_test_14_part_syllabus_gate_2026_ec_analog_circuit_2/img_30.png"/> = 1.5 mA and the value of C<sub>C</sub> = ∞ and <em>C</em> <sub>1</sub> = 12 μF, then which of the following options are<br/>correct? (Assume <em> V<sub>T</sub> </em> = 25 mV and <em> f<sub>L</sub> </em> is the input cut-off frequency due to capacitor <em>C</em> <sub>1</sub> .)`,
      image: "",
      options: [
        `<img alt="" src="js/questions/topicwise_test_14_part_syllabus_gate_2026_ec_analog_circuit_2/img_31.png"/>`,
        `<img alt="" src="js/questions/topicwise_test_14_part_syllabus_gate_2026_ec_analog_circuit_2/img_32.png"/>`,
        `<img alt="" src="js/questions/topicwise_test_14_part_syllabus_gate_2026_ec_analog_circuit_2/img_33.png"/>`,
        `<em> f<sub>L</sub> </em> = 9 Hz`,
      ],
      answer: ["C", "D"],
      solution: `<img alt="" src="js/questions/topicwise_test_14_part_syllabus_gate_2026_ec_analog_circuit_2/img_34.png"/><br><br><img alt="" src="js/questions/topicwise_test_14_part_syllabus_gate_2026_ec_analog_circuit_2/img_35.png"/>`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `Consider the circuit shown in the figure below:<br/><br/><img alt="" src="js/questions/topicwise_test_14_part_syllabus_gate_2026_ec_analog_circuit_2/img_10.png"/><br/><br/>Assume both the transistors are in active region with current gain β<sub>1</sub> = β<sub>2</sub> = β, small-signal input resistance r<sub>π1</sub> and r<sub>π2</sub> and the transconductance g<sub>m1</sub> and g<sub>m2</sub> respectively, then the value of R<sub>in</sub> is equal to`,
      image: "",
      options: [
        `<img alt="" src="js/questions/topicwise_test_14_part_syllabus_gate_2026_ec_analog_circuit_2/img_11.png"/>`,
        `<img alt="" src="js/questions/topicwise_test_14_part_syllabus_gate_2026_ec_analog_circuit_2/img_12.png"/>`,
        `<img alt="" src="js/questions/topicwise_test_14_part_syllabus_gate_2026_ec_analog_circuit_2/img_13.png"/>`,
        `<img alt="" src="js/questions/topicwise_test_14_part_syllabus_gate_2026_ec_analog_circuit_2/img_14.png"/>`,
      ],
      answer: "B",
      solution: `<img alt="" src="js/questions/topicwise_test_14_part_syllabus_gate_2026_ec_analog_circuit_2/img_15.png"/>`
    },
    {
      marks: 1,
      neg: 0,
      type: "NAT",
      text: `Consider the circuit shown in the figure below:<br/><br/><img alt="" src="js/questions/topicwise_test_14_part_syllabus_gate_2026_ec_analog_circuit_2/img_19.png"/><br/><br/>The transistor is biased such that <em> g<sub>m</sub> </em> = 4 mA/V and value of <em> R<sub>D</sub> </em> and <em> R<sub>S</sub> </em> is equal to 12 kΩ and 6 kΩ respectively. Then the value of <img align="absmiddle" alt="" src="js/questions/topicwise_test_14_part_syllabus_gate_2026_ec_analog_circuit_2/img_20.png"/>is equal to _________. (Rounded upto nearest integer value)`,
      image: "",
      options: [],
      answer: -2,
      solution: `<img alt="" src="js/questions/topicwise_test_14_part_syllabus_gate_2026_ec_analog_circuit_2/img_21.png"/>`
    },
    {
      marks: 1,
      neg: 0,
      type: "NAT",
      text: `Consider the transistor circuit shown in the figure below:<br/><br/><img alt="" src="js/questions/topicwise_test_14_part_syllabus_gate_2026_ec_analog_circuit_2/img_22.png"/><br/><br/>Assume the transistor is biased in saturation region with <em> g<sub>m</sub> </em> = 4 mA/V. Then the value of input resistance <em>R</em> <sub>in</sub> (in Ω) is equal to _________. (Rounded upto nearest integer value)`,
      image: "",
      options: [],
      answer: 250,
      solution: `<img alt="" src="js/questions/topicwise_test_14_part_syllabus_gate_2026_ec_analog_circuit_2/img_23.png"/>`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `Consider the circuit shown in the figure below:<br/><br/><img alt="" src="js/questions/topicwise_test_14_part_syllabus_gate_2026_ec_analog_circuit_2/img_16.png"/><br/><br/>Assume r0 = 96.5 kΩ and β = 75, then the value of <img align="absmiddle" alt="" src="js/questions/topicwise_test_14_part_syllabus_gate_2026_ec_analog_circuit_2/img_17.png"/> is equal to __________. (Assume <em> V<sub>T</sub> </em> = 26 mV)`,
      image: "",
      options: [
        `–7.573 mA/V`,
        `22.72 mA/V`,
        `7.573 mA/V`,
        `–22.72 mA/V`,
      ],
      answer: "A",
      solution: `<img alt="" src="js/questions/topicwise_test_14_part_syllabus_gate_2026_ec_analog_circuit_2/img_18.png"/>`
    },
    {
      marks: 2,
      neg: 0.66,
      type: "MCQ",
      text: `Consider the circuit shown in the figure below:<br/><br/><img alt="" src="js/questions/topicwise_test_14_part_syllabus_gate_2026_ec_analog_circuit_2/img_36.png"/><br/><br/>Assume that both the transistors are working in the active region with <em> V<sub>A</sub> </em> = ∞ and both the transistors have current gain equal to ‘β’. Then the value of input resistance <em>R</em> <sub>in</sub> as seen by small signal applied to the emitter of transistor <em>Q</em> <sub>1</sub> is`,
      image: "",
      options: [
        `<img alt="" src="js/questions/topicwise_test_14_part_syllabus_gate_2026_ec_analog_circuit_2/img_37.png"/>`,
        `<img alt="" src="js/questions/topicwise_test_14_part_syllabus_gate_2026_ec_analog_circuit_2/img_38.png"/>`,
        `<img alt="" src="js/questions/topicwise_test_14_part_syllabus_gate_2026_ec_analog_circuit_2/img_39.png"/>`,
        `<img alt="" src="js/questions/topicwise_test_14_part_syllabus_gate_2026_ec_analog_circuit_2/img_40.png"/>`,
      ],
      answer: "B",
      solution: `<img alt="" src="js/questions/topicwise_test_14_part_syllabus_gate_2026_ec_analog_circuit_2/img_41.png"/><br><br><img alt="" src="js/questions/topicwise_test_14_part_syllabus_gate_2026_ec_analog_circuit_2/img_42.png"/>`
    },
    {
      marks: 2,
      neg: 0,
      type: "NAT",
      text: `Consider the differential amplifier shown in figure. Neglect base currents, assume <em> V<sub>A</sub> </em> = ∞ for all<br/> transistors, and let <img align="absmiddle" alt="" src="js/questions/topicwise_test_14_part_syllabus_gate_2026_ec_analog_circuit_2/img_62.png"/>= 2 mA. The emitter currents can be written as<br/><br/><img alt="" src="js/questions/topicwise_test_14_part_syllabus_gate_2026_ec_analog_circuit_2/img_63.png"/><br/><br/>Assume <em>V</em> <sub>1</sub> = <em>V</em> <sub>2</sub> = 0 and <img align="absmiddle" alt="" src="js/questions/topicwise_test_14_part_syllabus_gate_2026_ec_analog_circuit_2/img_64.png"/> = 1 × 10<sup>–13</sup> A. The value of (<em>V</em> <sub>01</sub> –<em>V</em> <sub>02</sub> ) (in volts) when <em>R</em> <sub> <em>c</em> 1 </sub> = 8 kΩ, <em>R</em> <sub> <em>c</em> 2 </sub> = 7.9 kΩ and <em> V<sub>T</sub> </em> = 26 mV is __________. (Rounded upto two decimal place)<br/><br/><img alt="" src="js/questions/topicwise_test_14_part_syllabus_gate_2026_ec_analog_circuit_2/img_65.png"/>`,
      image: "",
      options: [],
      answer: -0.10,
      solution: `<img alt="" src="js/questions/topicwise_test_14_part_syllabus_gate_2026_ec_analog_circuit_2/img_66.png"/>`
    },
    {
      marks: 2,
      neg: 0.66,
      type: "MCQ",
      text: `Consider the circuit shown in the figure below:<br/><br/><img alt="" src="js/questions/topicwise_test_14_part_syllabus_gate_2026_ec_analog_circuit_2/img_43.png"/><br/><br/>Assume that the transistor has β = 100, <em> V<sub>A</sub> </em> = 120 V and <em> V<sub>T</sub> </em> = 26 mV, then the small-signal voltage gain <em> A<sub>V</sub> </em> =<img align="absmiddle" alt="" src="js/questions/topicwise_test_14_part_syllabus_gate_2026_ec_analog_circuit_2/img_44.png"/>is equal to`,
      image: "",
      options: [
        `–39.47`,
        `42.34 × 10<sup>3</sup>`,
        `42.34`,
        `–39.47 × 10<sup>3</sup>`,
      ],
      answer: "D",
      solution: `<img alt="" src="js/questions/topicwise_test_14_part_syllabus_gate_2026_ec_analog_circuit_2/img_45.png"/><br><br><img alt="" src="js/questions/topicwise_test_14_part_syllabus_gate_2026_ec_analog_circuit_2/img_46.png"/>`
    },
    {
      marks: 2,
      neg: 0,
      type: "MSQ",
      text: `Consider the common-gate circuit shown in figure with parameters <em>V</em> <sup>+</sup> = 5 V, <em>V</em> <sup>–</sup> = –5 V, <em> R<sub>s</sub> </em> = 4 kΩ, <em> R<sub>D</sub> </em> = 2 kΩ, <em> R<sub>L</sub> </em> = 4 kΩ, <em> R<sub>G</sub> </em> = 50 kΩ and <em>R</em> <sub>i</sub> = 0.5 kΩ. The transistor parameters are: <em> k<sub>p</sub> </em> = 1 mA/V<sup>2</sup> , <em> V<sub>TP</sub> </em> = –0.8 V, λ = 0, C<sub>gs</sub> = 4 pF, C<sub>ds</sub> = 0 and C<sub>gd</sub> = 1 pF. Which of the following statements is/are<br/>correct?<img align="absmiddle" alt="" src="js/questions/topicwise_test_14_part_syllabus_gate_2026_ec_analog_circuit_2/img_70.png"/><br/><br/><img alt="" src="js/questions/topicwise_test_14_part_syllabus_gate_2026_ec_analog_circuit_2/img_71.png"/>`,
      image: "",
      options: [
        `The mid band voltage gain is 3.164 V/V.`,
        `The 3 dB upper cutoff frequency is 119.36 MHz.`,
        `The mid band voltage gain is 0.936 V/V`,
        `The drain current is 0.74 mA`,
      ],
      answer: ["B", "C", "D"],
      solution: `<img alt="" src="js/questions/topicwise_test_14_part_syllabus_gate_2026_ec_analog_circuit_2/img_72.png"/><br><br><img alt="" src="js/questions/topicwise_test_14_part_syllabus_gate_2026_ec_analog_circuit_2/img_73.png"/><br><br><img alt="" src="js/questions/topicwise_test_14_part_syllabus_gate_2026_ec_analog_circuit_2/img_74.png"/>`
    },
    {
      marks: 2,
      neg: 0.66,
      type: "MCQ",
      text: `Consider the circuit shown in the figure below:<br/><br/><img alt="" src="js/questions/topicwise_test_14_part_syllabus_gate_2026_ec_analog_circuit_2/img_55.png"/><br/><br/>Assume the thermal voltage <em> V<sub>T</sub> </em> = 25 mV and <em> V<sub>BE</sub> </em> = 0.7 V. The voltage gain <img align="absmiddle" alt="" src="js/questions/topicwise_test_14_part_syllabus_gate_2026_ec_analog_circuit_2/img_56.png"/>is equal to`,
      image: "",
      options: [
        `–196.265 V/V`,
        `–291.41 V/V`,
        `–392.53 V/V`,
        `–292.53 V/V`,
      ],
      answer: "C",
      solution: `<img alt="" src="js/questions/topicwise_test_14_part_syllabus_gate_2026_ec_analog_circuit_2/img_57.png"/><br><br><img alt="" src="js/questions/topicwise_test_14_part_syllabus_gate_2026_ec_analog_circuit_2/img_58.png"/>`
    },
    {
      marks: 2,
      neg: 0,
      type: "NAT",
      text: `Consider the differential amplifier circuit shown below. The circuit and transistor parameters are<br/><br/><img alt="" src="js/questions/topicwise_test_14_part_syllabus_gate_2026_ec_analog_circuit_2/img_59.png"/><br/><br/>V<sup>–1</sup> . The differential mode voltage gain is ________________. (Rounded upto nearest integer value)<br/><br/><img alt="" src="js/questions/topicwise_test_14_part_syllabus_gate_2026_ec_analog_circuit_2/img_60.png"/>`,
      image: "",
      options: [],
      answer: 79,
      solution: `<img alt="" src="js/questions/topicwise_test_14_part_syllabus_gate_2026_ec_analog_circuit_2/img_61.png"/>`
    },
    {
      marks: 2,
      neg: 0.66,
      type: "MCQ",
      text: `In the circuit shown in figure, the transistor parameters are: β = 120, <em>V</em> <sub> <em>BE</em> (on) </sub> = 0.7 V, <em> V<sub>A</sub> </em> = 100 V, <em>C</em> <sub>μ</sub> = 1 pF and <em> f<sub>T</sub> </em> = 600 MHz. The value of <em>C</em> <sub>π</sub> and the equivalent input Miller capacitance <em> C<sub>M</sub> </em> are [ <em> V<sub>T</sub> </em> = 25 mV]<br/><br/><img alt="" src="js/questions/topicwise_test_14_part_syllabus_gate_2026_ec_analog_circuit_2/img_47.png"/>`,
      image: "",
      options: [
        `<img alt="" src="js/questions/topicwise_test_14_part_syllabus_gate_2026_ec_analog_circuit_2/img_48.png"/>`,
        `<img alt="" src="js/questions/topicwise_test_14_part_syllabus_gate_2026_ec_analog_circuit_2/img_49.png"/>`,
        `<img alt="" src="js/questions/topicwise_test_14_part_syllabus_gate_2026_ec_analog_circuit_2/img_50.png"/>`,
        `<img alt="" src="js/questions/topicwise_test_14_part_syllabus_gate_2026_ec_analog_circuit_2/img_51.png"/>`,
      ],
      answer: "C",
      solution: `<img alt="" src="js/questions/topicwise_test_14_part_syllabus_gate_2026_ec_analog_circuit_2/img_52.png"/><br><br><img alt="" src="js/questions/topicwise_test_14_part_syllabus_gate_2026_ec_analog_circuit_2/img_53.png"/><br><br><img alt="" src="js/questions/topicwise_test_14_part_syllabus_gate_2026_ec_analog_circuit_2/img_54.png"/>`
    },
    {
      marks: 2,
      neg: 0,
      type: "NAT",
      text: `The common mode gain of the differential amplifier circuit shown below is _________.<br/><br/><img alt="" src="js/questions/topicwise_test_14_part_syllabus_gate_2026_ec_analog_circuit_2/img_67.png"/><br/><br/>(Rounded upto two decimal places)`,
      image: "",
      options: [],
      answer: -0.56,
      solution: `<img alt="" src="js/questions/topicwise_test_14_part_syllabus_gate_2026_ec_analog_circuit_2/img_68.png"/><br><br><img alt="" src="js/questions/topicwise_test_14_part_syllabus_gate_2026_ec_analog_circuit_2/img_69.png"/>`
    },
  ]
});

registerTest({   // made easy ece 2026 topic wise test Analog circuit-3
  series: "ece-gate-pyq",
  name: "TWT - Analog Circuit-3",
  date: "july 17, 2026",
  questions: [
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `The opamp in circuit shown has input offset voltage 2 mV and it is ideal otherwise. If <em>V</em> <sub>1</sub> = <em>V</em> <sub>2</sub> = 0 then <em>V</em> <sub>0</sub> is<br/><img alt="" src="js/questions/ec_2026_analog_3/img_1.png"/>`,
      image: "",
      options: [
        `42 mV`,
        `2 mV`,
        `22 mV`,
        `–10 mV`,
      ],
      answer: "A",
      solution: `<img alt="" src="js/questions/ec_2026_analog_3/img_2.png"/>`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `Consider the op-amp shown in figure below:<br/><img alt="" src="js/questions/ec_2026_analog_3/img_3.png"/><br/>If the op-amp is ideal, then the threshold voltages of the circuit is`,
      image: "",
      options: [
        `2 V, –2 V`,
        `12 V, –12 V`,
        `1.6 V, –1.6 V`,
        `2.4 V, –2.4 V`,
      ],
      answer: "D",
      solution: `<img alt="" src="js/questions/ec_2026_analog_3/img_4.png"/>`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `For the circuit shown below,<br/><img alt="" src="js/questions/ec_2026_analog_3/img_5.png"/><br/>Let at start <em>V</em> <sub>out</sub> = –15 V, then the input voltage (<em>V</em> <sub>in</sub> ) for which the output changes from –15 V to 15 V is`,
      image: "",
      options: [
        `–2.5 V`,
        `–3 V`,
        `–1.5 V`,
        `–2.15 V`,
      ],
      answer: "C",
      solution: `<img alt="" src="js/questions/ec_2026_analog_3/img_6.png"/>`
    },
    {
      marks: 1,
      neg: 0,
      type: "NAT",
      text: `Consider the difference amplifier shown below:<br/><img alt="" src="js/questions/ec_2026_analog_3/img_16.png"/><br/>The CMRR of the difference amplifier is _________ dB. (Rounded upto two decimal places)`,
      image: "",
      options: [
      ],
      answer: 28.46,
      solution: `<img alt="" src="js/questions/ec_2026_analog_3/img_17.png"/><br/><img alt="" src="js/questions/ec_2026_analog_3/img_18.png"/>`
    },
    {
      marks: 1,
      neg: 0,
      type: "NAT",
      text: `Consider the circuit shown below:<br/><img alt="" src="js/questions/ec_2026_analog_3/img_19.png"/><br/>If the inputs <em>V</em> <sub>1</sub> = <em>V</em> <sub>2</sub> = V; then the output of the op-amp is _________ volt.`,
      image: "",
      options: [
      ],
      answer: 0,
      solution: `<img alt="" src="js/questions/ec_2026_analog_3/img_20.png"/>`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `Consider the circuit shown below:<br/><img alt="" src="js/questions/ec_2026_analog_3/img_7.png"/><br/>The value of <em>C</em> required for sinusoidal oscillation of frequency 7 kHz is`,
      image: "",
      options: [
        `3.18 nF`,
        `74.8 μF`,
        `31.8 μF`,
        `7.58 nF`,
      ],
      answer: "D",
      solution: `<img alt="" src="js/questions/ec_2026_analog_3/img_8.png"/>`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `From the given below options, choose which of the following circuit is incorrectly matched with their name?`,
      image: "",
      options: [
        `<img alt="" src="js/questions/ec_2026_analog_3/img_9.png"/>`,
        `<img alt="" src="js/questions/ec_2026_analog_3/img_10.png"/>`,
        `<img alt="" src="js/questions/ec_2026_analog_3/img_11.png"/>`,
        `<img alt="" src="js/questions/ec_2026_analog_3/img_12.png"/>`,
      ],
      answer: "D",
      solution: `<img alt="" src="js/questions/ec_2026_analog_3/img_13.png"/>`
    },
    {
      marks: 1,
      neg: 0,
      type: "NAT",
      text: `The voltage gain versus frequency curve of an op-amp is shown in figure.<br/><img alt="" src="js/questions/ec_2026_analog_3/img_14.png"/><br/>The gain Bandwidth product of the op-amp is ________ MHz.`,
      image: "",
      options: [
      ],
      answer: 0.2,
      solution: `<img alt="" src="js/questions/ec_2026_analog_3/img_15.png"/>`
    },

    {
      marks: 1,
      neg: 0,
      type: "MSQ",
      text: `For an ideal op-amp, which of the following properties is/are incorrect?`,
      image: "",
      options: [
        `Ideal op-amp is a voltage controlled voltage source.`,
        `Common Mode rejection ratio must be very large or infinite.`,
        `For an ideal op-amp, offset voltage must be infinite.`,
        `Open loop voltage gain of an ideal op-amp must be finite.`,
      ],
      answer: ["C", "D"],
      solution: `<img alt="" src="js/questions/ec_2026_analog_3/img_21.png"/>`
    },
    {
      marks: 2,
      neg: 0,
      type: "NAT",
      text: `The common mode voltage is completely attenuated at the output of the differential given below:<br/><img alt="" src="js/questions/ec_2026_analog_3/img_22.png"/><br/>If <em>R</em> <sub>1</sub> = 1 kΩ, <em>R</em> <sub>2</sub> = 10 kΩ, <em>R</em> <sub>3</sub> = 20 kΩ then the value of resistance <em>R</em> <sub>4</sub> is ________ (MΩ).`,
      image: "",
      options: [
      ],
      answer: 0.2,
      solution: `<img alt="" src="js/questions/ec_2026_analog_3/img_23.png"/><br/><img alt="" src="js/questions/ec_2026_analog_3/img_24.png"/>`
    },
    {
      marks: 2,
      neg: 0.66,
      type: "MCQ",
      text: `Consider the following circuit,<br/><img alt="" src="js/questions/ec_2026_analog_3/img_43.png"/><br/>Which of the following statement(s) is/are correct?`,
      image: "",
      options: [
        `The value of current, <img align="absmiddle" alt="" src="js/questions/ec_2026_analog_3/img_44.png"/>= 2.385 mA`,
        `The output voltage, <em>V</em> <sub>0</sub> = –245.885 V`,
        `The value of current, <img align="absmiddle" alt="" src="js/questions/ec_2026_analog_3/img_45.png"/>= 7.32 mA`,
        `The output voltage, <em>V</em> <sub>0</sub> = 10 V`,
      ],
      answer: "A",
      solution: `<img alt="" src="js/questions/ec_2026_analog_3/img_46.png"/><br/><img alt="" src="js/questions/ec_2026_analog_3/img_47.png"/>`
    },
    {
      marks: 2,
      neg: 0,
      type: "NAT",
      text: `Consider the op-amp circuit given below,<br/><img alt="" src="js/questions/ec_2026_analog_3/img_25.png"/><br/>If the slew rate of the op-amp is SR = 0.5 V/μsec, then the maximum frequency of the input signal <img align="absmiddle" alt="" src="js/questions/ec_2026_analog_3/img_26.png"/> permissible for the distortionless output is _________ × 10<sup>6</sup> rad/sec. (rounded upto two decimal places)`,
      image: "",
      options: [
      ],
      answer: 2.50,
      solution: `<img alt="" src="js/questions/ec_2026_analog_3/img_27.png"/>`
    },
    {
      marks: 2,
      neg: 0.66,
      type: "MCQ",
      text: `Consider the circuit shown in figure below:<br/><img alt="" src="js/questions/ec_2026_analog_3/img_38.png"/><br/>Considering the cut-in voltage of diode is 0.7 V, for the given input the average output voltage (<em>V</em> <sub>0</sub> ) is`,
      image: "",
      options: [
        `–1 V`,
        `–2 V`,
        `–0.5 V`,
        `–1.5 V`,
      ],
      answer: "C",
      solution: `<img alt="" src="js/questions/ec_2026_analog_3/img_39.png"/><br/><img alt="" src="js/questions/ec_2026_analog_3/img_40.png"/>`
    },
    {
      marks: 2,
      neg: 0.66,
      type: "MCQ",
      text: `Consider the circuit shown below,<br/><img alt="" src="js/questions/ec_2026_analog_3/img_41.png"/><br/>For ideal diode, the 3 dB cut-off frequency and DC gain of the circuit are respectively`,
      image: "",
      options: [
        `1000 rad/sec, 20 dB`,
        `2000 rad/sec, 10 dB`,
        `500 rad/sec, 20 dB`,
        `4000 rad/sec, 10 dB`,
      ],
      answer: "C",
      solution: `<img alt="" src="js/questions/ec_2026_analog_3/img_42.png"/>`
    },
    {
      marks: 2,
      neg: 0,
      type: "NAT",
      text: `To keep LED ON, <img align="absmiddle" alt="" src="js/questions/ec_2026_analog_3/img_28.png"/>must be greater than ________ volt.<br/><img alt="" src="js/questions/ec_2026_analog_3/img_29.png"/><br/><img alt="" src="js/questions/ec_2026_analog_3/img_30.png"/>`,
      image: "",
      options: [
      ],
      answer: 1.36,
      solution: `<img alt="" src="js/questions/ec_2026_analog_3/img_31.png"/>`
    },
    {
      marks: 2,
      neg: 0.66,
      type: "MCQ",
      text: `An inverting amplifier with a d.c. source representing the input offset voltage in series with the non-inverting terminal is shown below:<br/><img alt="" src="js/questions/ec_2026_analog_3/img_32.png"/><br/>The maximum input offset voltage for the operational amplifier in the above circuit is 1 mV. If <em>R</em> <sub>1</sub> = 1 kΩ and <em>R</em> <sub>2</sub> = 38 kΩ, then the worst case offset voltage at the output will be`,
      image: "",
      options: [
        `35.64 mV`,
        `43.56 mV`,
        `31.2 mV`,
        `42.8 mV`,
      ],
      answer: "B",
      solution: `<img alt="" src="js/questions/ec_2026_analog_3/img_33.png"/>`
    },
    {
      marks: 2,
      neg: 0.66,
      type: "MCQ",
      text: `The logarithmic amplifier circuit is shown in the figure below:<br/><img alt="" src="js/questions/ec_2026_analog_3/img_34.png"/><br/>The input voltage, <em>V</em> <sub>in</sub> = 100 mV, R = 50 kΩ and diode reverse saturation current, <img align="absmiddle" alt="" src="js/questions/ec_2026_analog_3/img_35.png"/>nA at an ambient temperature of 23°C. The output of the above circuit will be`,
      image: "",
      options: [
        `3 Volt`,
        `–0.2 Volt`,
        `–3 Volt`,
        `–0.7 Volt`,
      ],
      answer: "B",
      solution: `<img alt="" src="js/questions/ec_2026_analog_3/img_36.png"/><br/><img alt="" src="js/questions/ec_2026_analog_3/img_37.png"/>`
    },
  ]
});

registerTest({   // made easy ece 2026 topic wise test Networks-1
  series: "ece-gate-pyq",
  name: "TWT - Networks-1",
  date: "july 11, 2026",
  questions: [
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `The relative heating effects of two current waves of equal peak value, one rectangular and the other, triangular in shape as shown in figure is,<br/><br/><img alt="" src="js/questions/easy_2026_network_1/img_1.png"/>`,
      image: "",
      options: [
        `<img align="absmiddle" alt="" src="js/questions/easy_2026_network_1/img_2.png"/>`,
        `3 : 1`,
        `3 : 2`,
        `<img align="absmiddle" alt="" src="js/questions/easy_2026_network_1/img_3.png"/>`,
      ],
      answer: "B",
      solution: `<img alt="" src="js/questions/easy_2026_network_1/img_4.png"/>`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `Two load resistances <em>R</em> <sub>1</sub> and <em>R</em> <sub>2</sub> dissipate the same power when connected individually to a voltage source ‘ <em> V<sub>s</sub> </em> ’ having an internal resistance of <img align="absmiddle" alt="" src="js/questions/easy_2026_network_1/img_5.png"/><br/>Choose the correct relation between <img align="absmiddle" alt="" src="js/questions/easy_2026_network_1/img_6.png"/> <em>R</em> <sub>1</sub> and <em>R</em> <sub>2</sub> .`,
      image: "",
      options: [
        `<img align="absmiddle" alt="" src="js/questions/easy_2026_network_1/img_7.png"/>`,
        `<img align="absmiddle" alt="" src="js/questions/easy_2026_network_1/img_8.png"/>`,
        `<img align="absmiddle" alt="" src="js/questions/easy_2026_network_1/img_9.png"/>`,
        `<img align="absmiddle" alt="" src="js/questions/easy_2026_network_1/img_10.png"/>`,
      ],
      answer: "C",
      solution: `<img alt="" src="js/questions/easy_2026_network_1/img_11.png"/><br><br><img alt="" src="js/questions/easy_2026_network_1/img_12.png"/>`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `A tungsten filament bulb rated at 500 W, 150 V is to be connected in series with a capacitance across 220 V, 50 Hz supply. The value of capacitor such that the voltage and power consumed by the bulb are according to the rating of the bulb is,`,
      image: "",
      options: [
        `66 μF`,
        `33 μF`,
        `132 μF`,
        `16.5 μF`,
      ],
      answer: "A",
      solution: `<img alt="" src="js/questions/easy_2026_network_1/img_13.png"/>`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `Which of the following static V-I characteristics represents a Bilateral device?`,
      image: "",
      options: [
        `<img align="absmiddle" alt="" src="js/questions/easy_2026_network_1/img_14.png"/>`,
        `<img align="absmiddle" alt="" src="js/questions/easy_2026_network_1/img_15.png"/>`,
        `<img align="absmiddle" alt="" src="js/questions/easy_2026_network_1/img_16.png"/>`,
        `<img align="absmiddle" alt="" src="js/questions/easy_2026_network_1/img_17.png"/>`,
      ],
      answer: "D",
      solution: `When the same relation exists between voltage and current for the current flowing in both directions or in other words, if the VI characteristics curve is similar in opposite quadrants then the element is bidirectional (or) bilateral. Hence, option (d) is correct.`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `To analyze a complex network which consists of a supernode, which of the following laws are required to write the supernodal equations?`,
      image: "",
      options: [
        `KVL and Ohm’s law`,
        `KCL and Ohm’s law`,
        `KVL, KCL and Ohm’s law`,
        `KVL and KCL`,
      ],
      answer: "C",
      solution: `When only an ideal voltage source is connected between two non-reference nodes without any impedance, we form a supernode encompassing these two nodes for applying KCL while the voltage between the nodes are related by KVL. Thus, supernodal equations require applications of KCL, KVL and Ohm ’s law.`
    },
    {
      marks: 1,
      neg: 0,
      type: "NAT",
      text: `The current in the 100 Ω resistor is _________ A. [Rounded off to two decimal places].<br/><br/><img alt="" src="js/questions/easy_2026_network_1/img_18.png"/>`,
      image: "",
      options: [],
      answer: 0.48,
      solution: `<img alt="" src="js/questions/easy_2026_network_1/img_19.png"/>`
    },
    {
      marks: 1,
      neg: 0,
      type: "NAT",
      text: `For maximum power transfer, the value of load resistance ‘ <em> R<sub>L</sub> </em> ’ is __________ Ω. [Rounded off to two decimal places].<br/><br/><img alt="" src="js/questions/easy_2026_network_1/img_20.png"/>`,
      image: "",
      options: [],
      answer: 4.67,
      solution: `<img alt="" src="js/questions/easy_2026_network_1/img_21.png"/>`
    },
    {
      marks: 1,
      neg: 0,
      type: "NAT",
      text: `The magnitude of Thevenin’s equivalent voltage ‘<em>V</em> <sub>Th</sub> ’ across the terminals <em>A</em> -<em>B</em> is ________ V.<br/>[Rounded off to one decimal place]<br/><br/><img alt="" src="js/questions/easy_2026_network_1/img_22.png"/>`,
      image: "",
      options: [],
      answer: 62.5,
      solution: `<img alt="" src="js/questions/easy_2026_network_1/img_23.png"/><br><br><img alt="" src="js/questions/easy_2026_network_1/img_24.png"/>`
    },
    {
      marks: 1,
      neg: 0,
      type: "MSQ",
      text: `When a sinusoidal voltage of 150 V (rms) is applied to a series R-L circuit, it is found that the power dissipation is 1000 W and the current flowing in the circuit is given by <img align="absmiddle" alt="" src="js/questions/easy_2026_network_1/img_25.png"/><br/>Which of the following statements are correct?`,
      image: "",
      options: [
        `The resistance of the circuit is 2.223 Ω.`,
        `The inductance of the circuit is 1.07 H.`,
        `The power factor angle of the circuit is 77.16°.`,
        `Magnitude of total impedance is 5 Ω.`,
      ],
      answer: ["A", "B"],
      solution: `<img alt="" src="js/questions/easy_2026_network_1/img_26.png"/>`
    },
    {
      marks: 2,
      neg: 0.66,
      type: "MCQ",
      text: `The periodic current <img align="absmiddle" alt="" src="js/questions/easy_2026_network_1/img_27.png"/>in the given figure is applied to a pure resistor of 5 Ω. The power dissipated in the resistor is,<br/><br/><img alt="" src="js/questions/easy_2026_network_1/img_28.png"/>`,
      image: "",
      options: [
        `<img align="absmiddle" alt="" src="js/questions/easy_2026_network_1/img_29.png"/>`,
        `<img align="absmiddle" alt="" src="js/questions/easy_2026_network_1/img_30.png"/>`,
        `<img align="absmiddle" alt="" src="js/questions/easy_2026_network_1/img_31.png"/>`,
        `<img align="absmiddle" alt="" src="js/questions/easy_2026_network_1/img_32.png"/>`,
      ],
      answer: "B",
      solution: `<img alt="" src="js/questions/easy_2026_network_1/img_33.png"/><br><br><img alt="" src="js/questions/easy_2026_network_1/img_34.png"/>`
    },
    {
      marks: 2,
      neg: 0.66,
      type: "MCQ",
      text: `If a voltage of 200 V applied between terminals <em>A</em> and <em>B</em> produces a current of 25 A for the circuit shown in the figure below, the power factor of the circuit is<br/><br/><img alt="" src="js/questions/easy_2026_network_1/img_35.png"/>`,
      image: "",
      options: [
        `0.707 (lead)`,
        `0.5 (lag)`,
        `0.87 (lead)`,
        `1`,
      ],
      answer: "C",
      solution: `<img alt="" src="js/questions/easy_2026_network_1/img_36.png"/>`
    },
    {
      marks: 2,
      neg: 0.66,
      type: "MCQ",
      text: `The resistive circuit shown in figure (1) is simplified as shown in figure (2). The sum of resistances (<em>a</em> + <em>b</em> + <em>c</em> + <em>d</em> + <em>e</em> + <em>f</em> ) is,<br/><br/><img alt="" src="js/questions/easy_2026_network_1/img_37.png"/>`,
      image: "",
      options: [
        `57 Ω`,
        `28.5 Ω`,
        `14.25 Ω`,
        `7.125 Ω`,
      ],
      answer: "C",
      solution: `<img alt="" src="js/questions/easy_2026_network_1/img_38.png"/>`
    },
    {
      marks: 2,
      neg: 0.66,
      type: "MCQ",
      text: `In the network shown below, the value of <em>V</em> <sub>1</sub> so that the current through (1 + <em>j</em> ) Ω impedance is zero is,<br/><br/><img alt="" src="js/questions/easy_2026_network_1/img_39.png"/>`,
      image: "",
      options: [
        `<img align="absmiddle" alt="" src="js/questions/easy_2026_network_1/img_40.png"/>`,
        `<img align="absmiddle" alt="" src="js/questions/easy_2026_network_1/img_41.png"/>`,
        `<img align="absmiddle" alt="" src="js/questions/easy_2026_network_1/img_42.png"/>`,
        `<img align="absmiddle" alt="" src="js/questions/easy_2026_network_1/img_43.png"/>`,
      ],
      answer: "D",
      solution: `<img alt="" src="js/questions/easy_2026_network_1/img_44.png"/>`
    },
    {
      marks: 2,
      neg: 0,
      type: "NAT",
      text: `Two voltage sources have equal emfs ‘<em>E</em> ’ and a phase difference ‘θ’. When they are connected in series, the total voltage is 100 V. When one source is reversed, the total voltage is 10 V. The phase angle ‘θ’ is _________ degrees [Rounded off to one decimal place].`,
      image: "",
      options: [],
      answer: 11.4,
      solution: `<img alt="" src="js/questions/easy_2026_network_1/img_45.png"/>`
    },
    {
      marks: 2,
      neg: 0,
      type: "NAT",
      text: `If <img align="absmiddle" alt="" src="js/questions/easy_2026_network_1/img_46.png"/> (degrees).<br/>[Rounded off to one decimal place]<br/><br/><img alt="" src="js/questions/easy_2026_network_1/img_47.png"/>`,
      image: "",
      options: [],
      answer: 51.2,
      solution: `<img alt="" src="js/questions/easy_2026_network_1/img_48.png"/><br><br><img alt="" src="js/questions/easy_2026_network_1/img_49.png"/>`
    },
    {
      marks: 2,
      neg: 0,
      type: "NAT",
      text: `The square wave voltage seen in figure (a) is applied to the combination of inductors seen in figure (b).<br/><br/><img alt="" src="js/questions/easy_2026_network_1/img_50.png"/><br/><br/>The current through the combination of inductors at <em>t</em> = 4 ms is ____________ A.`,
      image: "",
      options: [],
      answer: 10,
      solution: `<img alt="" src="js/questions/easy_2026_network_1/img_51.png"/><br><br><img alt="" src="js/questions/easy_2026_network_1/img_52.png"/>`
    },
    {
      marks: 2,
      neg: 0,
      type: "MSQ",
      text: `In the circuit shown below, <img align="absmiddle" alt="" src="js/questions/easy_2026_network_1/img_53.png"/><br/><br/><img alt="" src="js/questions/easy_2026_network_1/img_54.png"/><br/><br/>Select the correct options regarding power in the given circuit.`,
      image: "",
      options: [
        `The total complex power is 403.04∠+8.07° VA.`,
        `The total real power is 200 W.`,
        `The total reactive power is 56.569 VAR.`,
        `The power factor of the circuit is 0.866.`,
      ],
      answer: ["A", "C"],
      solution: `<img alt="" src="js/questions/easy_2026_network_1/img_55.png"/><br><br><img alt="" src="js/questions/easy_2026_network_1/img_56.png"/>`
    }
  ]
});

registerTest({   // made easy ece 2026 topic wise test Networks-2
  series: "ece-gate-pyq",
  name: "TWT - Networks-2",
  date: "july 18, 2026",
  questions: [
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `An R-L-C series circuit with a resistance of 10 Ω, inductance of 0.2 H and a capacitance of 40 μF is supplied with a 100 V supply at variable frequency. At the time of resonance, the voltage across inductor is`,
      image: "",
      options: [
        `–<em>j</em> 707.1 V`,
        `j112.52 V`,
        `j707.1 V`,
        `–<em>j</em> 112.52 V`
      ],
      answer: "C",
      solution: `<img alt="" src="js/questions/topicwise_test_2_part_syllabus_gate_2026_ec_network_2/img_1.png"/><br><br>`
    },
    {
      marks: 1,
      neg: 0.0,
      type: "NAT",
      text: `The input impedance parameter (Z<sub>11</sub> ) for the network shown in figure is _________ Ω. (rounded upto two decimal places)<br><br><img alt="" src="js/questions/topicwise_test_2_part_syllabus_gate_2026_ec_network_2/img_17.png"/><br><br>`,
      image: "",
      options: [

      ],
      answer: 3.92,
      solution: `<img alt="" src="js/questions/topicwise_test_2_part_syllabus_gate_2026_ec_network_2/img_18.png"/><br><br>`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `For a series resonant circuit at low frequency, circuit impedance is _________ and at high frequency,circuit impedance is ________.`,
      image: "",
      options: [
        `Capacitive, inductive`,
        `Inductive, capacitive`,
        `Resistive, inductive`,
        `Capacitive, resistive`
      ],
      answer: "A",
      solution: `<img alt="" src="js/questions/topicwise_test_2_part_syllabus_gate_2026_ec_network_2/img_2.png"/><br><br>`
    },
    {
      marks: 1,
      neg: 0.0,
      type: "NAT",
      text: `For the periodic waveform shown below:<br><br><img alt="" src="js/questions/topicwise_test_2_part_syllabus_gate_2026_ec_network_2/img_13.png"/><br><br>If the difference between RMS and Average voltage is 2.9 Volt, then the value of ‘<em>A</em> ’ is ________<br/>(rounded upto one decimal place)`,
      image: "",
      options: [

      ],
      answer: 19.9,
      solution: `<img alt="" src="js/questions/topicwise_test_2_part_syllabus_gate_2026_ec_network_2/img_14.png"/><br><br>`
    },
    {
      marks: 1,
      neg: 0.0,
      type: "NAT",
      text: `In the circuit shown in the figure, the value of <em>V</em><sub>0</sub> (<em>t</em> ) (in volts) for <em>t</em> → ∞ is __________ V. (rounded upto two decimal places)<br><br><img alt="" src="js/questions/topicwise_test_2_part_syllabus_gate_2026_ec_network_2/img_15.png"/><br><br>`,
      image: "",
      options: [

      ],
      answer: 42.86,
      solution: `<img alt="" src="js/questions/topicwise_test_2_part_syllabus_gate_2026_ec_network_2/img_16.png"/><br><br>`
    },

    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `In the circuit shown below, the switch <em>S</em> is closed at <em>t</em> = 0. The magnitude of steady state voltage, in volts, across the 10 Ω resistor is<br><br><img alt="" src="js/questions/topicwise_test_2_part_syllabus_gate_2026_ec_network_2/img_3.png"/><br><br>`,
      image: "",
      options: [
        `0 V`,
        `–9.8 V`,
        `9.8 V`,
        `12.2 V`
      ],
      answer: "A",
      solution: `<img alt="" src="js/questions/topicwise_test_2_part_syllabus_gate_2026_ec_network_2/img_4.png"/><br><br>`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `The <em>ABCD</em> parameters of an ideal <em>n</em> : 1 transformer shown in the figure are <img align="absmiddle" alt="" src="js/questions/topicwise_test_2_part_syllabus_gate_2026_ec_network_2/img_5.png"/> The value of <img align="absmiddle" alt="" src="js/questions/topicwise_test_2_part_syllabus_gate_2026_ec_network_2/img_6.png"/>is<br><br><img alt="" src="js/questions/topicwise_test_2_part_syllabus_gate_2026_ec_network_2/img_7.png"/><br><br>`,
      image: "",
      options: [
        `<em>n</em>`,
        `<img align="absmiddle" alt="" src="js/questions/topicwise_test_2_part_syllabus_gate_2026_ec_network_2/img_8.png"/>`,
        `<em>n</em><sup>2</sup>`,
        `<img align="absmiddle" alt="" src="js/questions/topicwise_test_2_part_syllabus_gate_2026_ec_network_2/img_9.png"/>`
      ],
      answer: "B",
      solution: `<img alt="" src="js/questions/topicwise_test_2_part_syllabus_gate_2026_ec_network_2/img_10.png"/><br><br>`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `The short circuit admittance matrix of a two-port network is <img align="absmiddle" alt="" src="js/questions/topicwise_test_2_part_syllabus_gate_2026_ec_network_2/img_11.png"/>The two-port network is`,
      image: "",
      options: [
        `non-reciprocal and passive`,
        `non-reciprocal and active`,
        `reciprocal and passive`,
        `reciprocal and active`
      ],
      answer: "B",
      solution: `<img alt="" src="js/questions/topicwise_test_2_part_syllabus_gate_2026_ec_network_2/img_12.png"/><br><br>`
    },

    {
      marks: 1,
      neg: 0.0,
      type: "MSQ",
      text: `The response of a series RLC circuit are<br><br><img alt="" src="js/questions/topicwise_test_2_part_syllabus_gate_2026_ec_network_2/img_19.png"/><br><br>Where, <em>V<sub>C</sub></em> and <img align="absmiddle" alt="" src="js/questions/topicwise_test_2_part_syllabus_gate_2026_ec_network_2/img_20.png"/> are the capacitor voltage and inductor current respectively.<br/>Choose the correct options for the given circuit.`,
      image: "",
      options: [
        `Capacitor, <em>C</em> = 0.2 F`,
        `The data is insufficient to calculate the value of Resistance and inductance.`,
        `Capacitor, <em>C</em> = 0.2 mF`,
        `The value of inductor, <em>L</em> = 31. 2 mF`
      ],
      answer: ["B", "C"],
      solution: `<img alt="" src="js/questions/topicwise_test_2_part_syllabus_gate_2026_ec_network_2/img_21.png"/><br><br>`
    },
    {
      marks: 2,
      neg: 0.66,
      type: "MCQ",
      text: `When a 250 V, 50 Hz supply is fed to a 12 Ω resistor in parallel, with an inductor, the total current is 25 A. What approximate value must the frequency have for the total current to be 30 A?`,
      image: "",
      options: [
        `12 Hz`,
        `72 Hz`,
        `32 Hz`,
        `52 Hz`
      ],
      answer: "C",
      solution: `<img alt="" src="js/questions/topicwise_test_2_part_syllabus_gate_2026_ec_network_2/img_22.png"/><br><br>`
    },
    {
      marks: 2,
      neg: 0.66,
      type: "MCQ",
      text: `Consider the two-port network shown in the figure.<br><br><img alt="" src="js/questions/topicwise_test_2_part_syllabus_gate_2026_ec_network_2/img_23.png"/><br><br>The impedance parameters, in ohm’s are`,
      image: "",
      options: [
        `<img align="absmiddle" alt="" src="js/questions/topicwise_test_2_part_syllabus_gate_2026_ec_network_2/img_24.png"/>`,
        `<img align="absmiddle" alt="" src="js/questions/topicwise_test_2_part_syllabus_gate_2026_ec_network_2/img_25.png"/>`,
        `<img align="absmiddle" alt="" src="js/questions/topicwise_test_2_part_syllabus_gate_2026_ec_network_2/img_26.png"/>`,
        `Can’t exist.`
      ],
      answer: "D",
      solution: `<img alt="" src="js/questions/topicwise_test_2_part_syllabus_gate_2026_ec_network_2/img_27.png"/><br><br>`
    },
    {
      marks: 2,
      neg: 0,
      type: "NAT",
      text: `Consider the Star-Delta pair shown below:<br><br><img alt="" src="js/questions/topicwise_test_2_part_syllabus_gate_2026_ec_network_2/img_42.png"/><br><br>The value of <img align="absmiddle" alt="" src="js/questions/topicwise_test_2_part_syllabus_gate_2026_ec_network_2/img_43.png"/>is ________ μF. (correct to two decimal places)`,
      image: "",
      options: [

      ],
      answer: 17.08,
      solution: `<img alt="" src="js/questions/topicwise_test_2_part_syllabus_gate_2026_ec_network_2/img_44.png"/><br><br><br><br><img alt="" src="js/questions/topicwise_test_2_part_syllabus_gate_2026_ec_network_2/img_45.png"/><br><br>`
    },
    {
      marks: 2,
      neg: 0,
      type: "MSQ",
      text: `An R-L-C series circuit with a resistance of 5 kΩ has resonance phasor curve as shown below:<br><br><img alt="" src="js/questions/topicwise_test_2_part_syllabus_gate_2026_ec_network_2/img_46.png"/><br><br>Which of the following statement(s) is/are correct?`,
      image: "",
      options: [
        `The value of inductance, <em>L</em> = 53.05 mH`,
        `The value of <em>f</em><sub>2</sub> = 20 kHz`,
        `Quality factor, <em>Q</em> = 0.667`,
        `The value of capacitance, <em>C</em> = 0.125 mH`
      ],
      answer: ["A", "B", "C"],
      solution: `<img alt="" src="js/questions/topicwise_test_2_part_syllabus_gate_2026_ec_network_2/img_47.png"/><br><br><br><br><img alt="" src="js/questions/topicwise_test_2_part_syllabus_gate_2026_ec_network_2/img_48.png"/><br><br>`
    },
    {
      marks: 2,
      neg: 0,
      type: "NAT",
      text: `A coil of 10 Ω resistance has an inductance of 0.1 H and is connected in parallel with a condenser of 100 μF capacitance.<br/>The frequency at which this circuit will behave as a non-inductive resistance is ________ Hz.<br/>(rounded upto two decimal places)`,
      image: "",
      options: [

      ],
      answer: 47.75,
      solution: `<img alt="" src="js/questions/topicwise_test_2_part_syllabus_gate_2026_ec_network_2/img_38.png"/><br><br>`
    },
    {
      marks: 2,
      neg: 0.66,
      type: "MCQ",
      text: `For the R-L circuit shown in figure below, the input <img align="absmiddle" alt="" src="js/questions/topicwise_test_2_part_syllabus_gate_2026_ec_network_2/img_28.png"/>is<br><br><img alt="" src="js/questions/topicwise_test_2_part_syllabus_gate_2026_ec_network_2/img_29.png"/><br><br>`,
      image: "",
      options: [
        `<img align="absmiddle" alt="" src="js/questions/topicwise_test_2_part_syllabus_gate_2026_ec_network_2/img_30.png"/>`,
        `<img align="absmiddle" alt="" src="js/questions/topicwise_test_2_part_syllabus_gate_2026_ec_network_2/img_31.png"/>`,
        `<img align="absmiddle" alt="" src="js/questions/topicwise_test_2_part_syllabus_gate_2026_ec_network_2/img_32.png"/>`,
        `<img align="absmiddle" alt="" src="js/questions/topicwise_test_2_part_syllabus_gate_2026_ec_network_2/img_33.png"/>`
      ],
      answer: "A",
      solution: `<img alt="" src="js/questions/topicwise_test_2_part_syllabus_gate_2026_ec_network_2/img_34.png"/><br><br>`
    },
    {
      marks: 2,
      neg: 0.66,
      type: "MCQ",
      text: `Match <strong>Column (I)</strong> [Network] with <strong>Column (II)</strong> [Equivalent impedance] and select correct answer using the codes given below:<br><br><img alt="" src="js/questions/topicwise_test_2_part_syllabus_gate_2026_ec_network_2/img_35.png"/><br><br>`,
      image: "",
      options: [
        `a`,
        `b`,
        `c`,
        `d`
      ],
      answer: "D",
      solution: `<img alt="" src="js/questions/topicwise_test_2_part_syllabus_gate_2026_ec_network_2/img_36.png"/><br><br><br><br><img alt="" src="js/questions/topicwise_test_2_part_syllabus_gate_2026_ec_network_2/img_37.png"/><br><br>`
    },

    {
      marks: 2,
      neg: 0,
      type: "NAT",
      text: `In the network shown, the switch is closed at <em>t</em> = 0, then <em>V</em> (<em>t</em> )| <sub><em>t</em> = 1</sub> is ________ V. (rounded upto two decimal places)<br><br><img alt="" src="js/questions/topicwise_test_2_part_syllabus_gate_2026_ec_network_2/img_39.png"/><br><br>`,
      image: "",
      options: [

      ],
      answer: 0.37,
      solution: `<img alt="" src="js/questions/topicwise_test_2_part_syllabus_gate_2026_ec_network_2/img_40.png"/><br><br><br><br><img alt="" src="js/questions/topicwise_test_2_part_syllabus_gate_2026_ec_network_2/img_41.png"/><br><br>`
    },
  ]
});

registerTest({   // made easy ece 2026 topic wise test Control system-1
  series: "ece-gate-pyq",
  name: "TWT - Control System-1",
  date: "july 13, 2026",
  questions: [
  ]
});

registerTest({   // made easy ece 2026 topic wise test Control system-2
  series: "ece-gate-pyq",
  name: "TWT - Control System-2",
  date: "july 20, 2026",
  questions: [
  ]
});

registerTest({   // made easy ece 2026 topic wise test Signals & Systems-1
  series: "ece-gate-pyq",
  name: "TWT - Signals & Systems-1",
  date: "july 24, 2026",
  questions: [
  ]
});

registerTest({   // made easy ece 2026 topic wise test Signals & Systems-2
  series: "ece-gate-pyq",
  name: "TWT - Signals & Systems-2",
  date: "july 28, 2026",
  questions: [
  ]
});

registerTest({   // made easy ece 2026 topic wise test Electronic Devices-1
  series: "ece-gate-pyq",
  name: "TWT - Electronic Devices-1",
  date: "july 16, 2026",
  questions: [
  ]
});

registerTest({   // made easy ece 2026 topic wise test electronic device-2
  series: "ece-gate-pyq",
  name: "TWT - Electronic device-2",
  date: "july 21, 2026",
  questions: [
  ]
});

registerTest({   // made easy ece 2026 topic wise test Communication -1
  series: "ece-gate-pyq",
  name: "TWT - Communication-1",
  date: "july 22, 2026",
  questions: [
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `If a modulated signal <em>s</em> (<em>t</em> ) = e<sup>–2t</sup> cosω <em><sub>c</sub> t</em> is given to a envelope detector, the output of the envelope detector at <em>t</em> = 0.5 second is,`,
      image: "",
      options: [
        `1`,
        `<br><br><img alt="" src="js/questions/topicwise_test_19_part_syllabus_gate_2026_ec_communications_1/img_1.png"/><br><br>`,
        `<em>e</em><sup>-2</sup>`,
        `<em>e</em><sup>2</sup>`
      ],
      answer: "B",
      solution: `<img alt="" src="js/questions/topicwise_test_19_part_syllabus_gate_2026_ec_communications_1/img_2.png"/><br><br>`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `A frequency modulated signal having a frequency deviation of 10 kHz is passed through a squaring device. The bandwidth of the FM signal at the output of the squaring device if the message signal frequency is 2 kHz is,`,
      image: "",
      options: [
        `7 kHz`,
        `14 kHz`,
        `22 kHz`,
        `44 kHz`
      ],
      answer: "D",
      solution: `<img alt="" src="js/questions/topicwise_test_19_part_syllabus_gate_2026_ec_communications_1/img_3.png"/><br><br>`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `When a superheterodyne receiver is tuned to 555 kHz, its local oscillator provides the mixer with an input at 1010 kHz. The image frequency is,`,
      image: "",
      options: [
        `455 kHz`,
        `910 kHz`,
        `1465 kHz`,
        `732.5 kHz`
      ],
      answer: "C",
      solution: `<img alt="" src="js/questions/topicwise_test_19_part_syllabus_gate_2026_ec_communications_1/img_4.png"/><br><br>`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `The image channel selectivity of superheterodyne receiver depends upon,`,
      image: "",
      options: [
        `IF amplifier only.`,
        `RF and IF amplifiers only.`,
        `Preselector, RF and IF amplifiers.`,
        `Preselector and RF amplifiers only.`
      ],
      answer: "D",
      solution: `The image rejection should be achieved before IF stage because ones the image frequency enters<br/>into IF amplifier, it becomes impossible to remove it from wanted signal. So, image channel<br/>selectivity depends upon preselector and RF amplifiers only and is achieved by tuning the filter<br/>to attenuate the image frequency. The IF amplifier helps in rejection of adjacent channel frequency<br/>and not image frequency.`
    },
    {
      marks: 1,
      neg: 0,
      type: "NAT",
      text: `If conventional AM modulation technique is replaced with DSB-SC, the % power saving is ‘<em>x</em> ’. If conventional AM modulation technique is replaced with SSB, the % power saving is ‘<em>y</em> ’. The ratio <img align="absmiddle" alt="" src="js/questions/topicwise_test_19_part_syllabus_gate_2026_ec_communications_1/img_14.png"/>if modulation index of AM signal is 0.5 is _________. (Rounded off to 2 decimal places)`,
      image: "",
      options: [],
      answer: 0.94,
      solution: `<img alt="" src="js/questions/topicwise_test_19_part_syllabus_gate_2026_ec_communications_1/img_15.png"/><br><br>`
    },
    {
      marks: 1,
      neg: 0,
      type: "MSQ",
      text: `Which of the following methods are used for the demodulation of FM signal?`,
      image: "",
      options: [
        `Balanced slope detector`,
        `Foster-Seeley Discriminator`,
        `Ratio Detector`,
        `Phase locked loop (PLL) detector`
      ],
      answer: ["A", "B", "C", "D"],
      solution: `Balanced slope detector: This is a FM demodulator that uses two tuned LC circuits to convert<br/>frequency variations into amplitude variations. The two tuned circuits are connected in back-toback<br/>fashion to opposite ends of centre-tapped transformer to provide better linearity.<br/>Foster-seeley discriminator: This circuit uses a tuned LC circuit and diodes to produce an output<br/>voltage that is proportional to the frequency deviation of the FM signal.<br/>Ratio Detector: This type of discriminator also uses tuned circuits and diodes, but it ’s designed<br/>to suppress amplitude variations in the FM signal, improving its robustness.<br/>PLL: PLLs are feedback systems that track the frequency of the incoming FM signal. The PLL ’s<br/>output voltage is proportional to the instantaneous frequency of the FM signal, effectively<br/>demodulating it.`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `Consider a narrow-band FM signal approximately defined by,<br><br><img alt="" src="js/questions/topicwise_test_19_part_syllabus_gate_2026_ec_communications_1/img_5.png"/><br><br>The ratio of the maximum to the minimum value of this modulated signal envelope is,`,
      image: "",
      options: [
        `<br><br><img alt="" src="js/questions/topicwise_test_19_part_syllabus_gate_2026_ec_communications_1/img_6.png"/><br><br>`,
        `<br><br><img alt="" src="js/questions/topicwise_test_19_part_syllabus_gate_2026_ec_communications_1/img_7.png"/><br><br>`,
        `<br><br><img alt="" src="js/questions/topicwise_test_19_part_syllabus_gate_2026_ec_communications_1/img_8.png"/><br><br>`,
        `<br><br><img alt="" src="js/questions/topicwise_test_19_part_syllabus_gate_2026_ec_communications_1/img_9.png"/><br><br>`
      ],
      answer: "A",
      solution: `<img alt="" src="js/questions/topicwise_test_19_part_syllabus_gate_2026_ec_communications_1/img_10.png"/><br><br>`
    },
    {
      marks: 1,
      neg: 0,
      type: "NAT",
      text: `When a sinusoidal test tone of frequency ‘ω <em><sub>m</sub></em> ’ is applied to the input of the modulation in AM broadcasting (DSB with full carrier), the modulated waveform is as shown below:<br><br><img alt="" src="js/questions/topicwise_test_19_part_syllabus_gate_2026_ec_communications_1/img_11.png"/><br><br>The peak envelope power (PEP) across the load of 100 Ω is ________ Watt. (Rounded off to one decimal place)`,
      image: "",
      options: [],
      answer: 49,
      solution: `<img alt="" src="js/questions/topicwise_test_19_part_syllabus_gate_2026_ec_communications_1/img_12.png"/><br><br>`
    },
    {
      marks: 1,
      neg: 0,
      type: "NAT",
      text: `The instantaneous frequency of the given angle modulated signal <em>s</em> (<em>t</em> ) = cos 200π<em>t</em> ⋅ cos(5 sin 2π<em>t</em> ) + sin 200π<em>t</em> ⋅ sin(5 sin 2π<em>t</em> ) at <em>t</em> = 0 is ________ Hz.`,
      image: "",
      options: [],
      answer: 95,
      solution: `<img alt="" src="js/questions/topicwise_test_19_part_syllabus_gate_2026_ec_communications_1/img_13.png"/><br><br>`
    },

    {
      marks: 2,
      neg: 0.66,
      type: "MCQ",
      text: `In the block diagram shown in the below figure, the modulation index and the frequency deviation at point <em>B</em> are respectively, [Assume that at the output of the mixer, the additive frequency component is selected].<br><br><img alt="" src="js/questions/topicwise_test_19_part_syllabus_gate_2026_ec_communications_1/img_16.png"/><br><br>`,
      image: "",
      options: [
        `15, 30 kHz`,
        `15, 60 kHz`,
        `30, 30 kHz`,
        `30, 60 kHz`
      ],
      answer: "A",
      solution: `<img alt="" src="js/questions/topicwise_test_19_part_syllabus_gate_2026_ec_communications_1/img_17.png"/><br><br>`
    },
    {
      marks: 2,
      neg: 0.66,
      type: "MCQ",
      text: `An FM signal, <img align="absmiddle" alt="" src="js/questions/topicwise_test_19_part_syllabus_gate_2026_ec_communications_1/img_18.png"/> is applied to the system as shown in below figure consisting of a high-pass RC filter and an envelope detector. Assume that ω<em>RC</em> << 1 in the frequency band occupied by <em>s</em> (<em>t</em> ). The output signal <em>y</em> (<em>t</em> ) is,<br><br><img alt="" src="js/questions/topicwise_test_19_part_syllabus_gate_2026_ec_communications_1/img_19.png"/><br><br>`,
      image: "",
      options: [
        `<br><br><img alt="" src="js/questions/topicwise_test_19_part_syllabus_gate_2026_ec_communications_1/img_20.png"/><br><br>`,
        `<br><br><img alt="" src="js/questions/topicwise_test_19_part_syllabus_gate_2026_ec_communications_1/img_21.png"/><br><br>`,
        `<br><br><img alt="" src="js/questions/topicwise_test_19_part_syllabus_gate_2026_ec_communications_1/img_22.png"/><br><br>`,
        `<br><br><img alt="" src="js/questions/topicwise_test_19_part_syllabus_gate_2026_ec_communications_1/img_23.png"/><br><br>`
      ],
      answer: "C",
      solution: `<img alt="" src="js/questions/topicwise_test_19_part_syllabus_gate_2026_ec_communications_1/img_24.png"/><br><br>`
    },
    {
      marks: 2,
      neg: 0,
      type: "NAT",
      text: `A transmitter uses a carrier frequency of 500 Hz with the unmodulated carrier given by <em>A<sub>c</sub></em> cos 2π <em>f<sub>c</sub> t</em> .<br/>If the angle modulated signal given by is <em>s</em> (<em>t</em> ) = cos[2π(250)t3 + 50t2], the frequency deviation of the signal <em>s</em> (<em>t</em> ) at <em>t</em> = 1 second is _________ Hz. [Rounded off to two decimal places]`,
      image: "",
      options: [],
      answer: 265.92,
      solution: `<img alt="" src="js/questions/topicwise_test_19_part_syllabus_gate_2026_ec_communications_1/img_28.png"/><br><br>`
    },
    {
      marks: 2,
      neg: 0,
      type: "NAT",
      text: `A DSB-SC modulated signal <em>s</em> (<em>t</em> ) = 5<em>m</em> (<em>t</em> ) . cos2π <em>f<sub>c</sub> t</em> is multiplied with a local carrier <em>c</em> (<em>t</em> ) = 2 cos(ω <em><sub>c</sub> t</em> + θ) and the output is passed through a LPF with a bandwidth equal to the bandwidth of the message signal <em>m</em> (<em>t</em> ). If the power of the message signal <em>m</em> (<em>t</em> ) is 25 W, the power of the signal at the output of the LPF assuming θ = 45° is _______ W. (Rounded off to one decimal place)`,
      image: "",
      options: [],
      answer: 312.5,
      solution: `<img alt="" src="js/questions/topicwise_test_19_part_syllabus_gate_2026_ec_communications_1/img_29.png"/><br><br><br><br><img alt="" src="js/questions/topicwise_test_19_part_syllabus_gate_2026_ec_communications_1/img_30.png"/><br><br>`
    },
    {
      marks: 2,
      neg: 0.66,
      type: "MCQ",
      text: `A modulating signal is given by <em>m</em> (<em>t</em> ) = 5 cos 50π<em>t</em> + 10 cos 100π<em>t</em> and it is frequency modulated with ω <em><sub>c</sub></em> = 10<sup>6</sup> rad/sec and <em>k<sub>f</sub></em> = 500π rad/sec/V. The modulation index of the resulting FM signal is,`,
      image: "",
      options: [
        `75`,
        `50`,
        `25`,
        `150`
      ],
      answer: "A",
      solution: `<img alt="" src="js/questions/topicwise_test_19_part_syllabus_gate_2026_ec_communications_1/img_25.png"/><br><br>`
    },
    {
      marks: 2,
      neg: 0.66,
      type: "MCQ",
      text: `A lower SSB signal with carrier is expressed at <em>s</em> (<em>t</em> ) = [<em>A</em> + <em>m</em> (<em>t</em> )] cosω <em><sub>c</sub> t</em> + <em>m</em> (<em>t</em> ) sinω <em><sub>c</sub> t</em> . If the signal is received and demodulated by an envelope detector, the assumption required to get the output as [<em>A</em> + <em>m</em> (<em>t</em> )] is,`,
      image: "",
      options: [
        `<em>m</em><sup>2</sup> (<em>t</em> ) >> <em>A</em>`,
        `<em>m</em> (<em>t</em> ) >> <em>A</em>`,
        `<em>m</em><sup>2</sup> (<em>t</em> ) << <em>A</em>`,
        `[<em>A</em> + <em>m</em> (<em>t</em> )]<sup>2</sup> << <em>A</em>`
      ],
      answer: "C",
      solution: `<img alt="" src="js/questions/topicwise_test_19_part_syllabus_gate_2026_ec_communications_1/img_26.png"/><br><br>`
    },
    {
      marks: 2,
      neg: 0,
      type: "NAT",
      text: `A modulating signal <em>m</em> (<em>t</em> ) = 25 sin[2π × 10<sup>3</sup><em>t</em> – 8π cos 2π × 10<sup>3</sup><em>t</em> ] is fed to a phase modulator with <em>k<sub>p</sub></em> = 15 rad/V. If the carrier frequency is 35 kHz, the instantaneous frequency at <em>t</em> = 1 msec is _________ kHz.`,
      image: "",
      options: [],
      answer: 410,
      solution: `<img alt="" src="js/questions/topicwise_test_19_part_syllabus_gate_2026_ec_communications_1/img_27.png"/><br><br>`
    },

    {
      marks: 2,
      neg: 0,
      type: "MSQ",
      text: `In an envelope detector, the input is an AM signal expressed as,<br/><em>s</em> (<em>t</em> ) = <em>A<sub>c</sub></em> (1 + μ cos ω <em><sub>m</sub> t</em> ) ⋅ cos ω <em><sub>c</sub> t</em><br/>Which of the following conditions must be specified for an envelope detector to effectively demodulate an AM signal?`,
      image: "",
      options: [
        `<br><br><img alt="" src="js/questions/topicwise_test_19_part_syllabus_gate_2026_ec_communications_1/img_31.png"/><br><br>`,
        `<br><br><img alt="" src="js/questions/topicwise_test_19_part_syllabus_gate_2026_ec_communications_1/img_32.png"/><br><br>`,
        `<br><br><img alt="" src="js/questions/topicwise_test_19_part_syllabus_gate_2026_ec_communications_1/img_33.png"/><br><br>`,
        `<br><br><img alt="" src="js/questions/topicwise_test_19_part_syllabus_gate_2026_ec_communications_1/img_34.png"/><br><br>`
      ],
      answer: ["A", "B", "C"],
      solution: `<img alt="" src="js/questions/topicwise_test_19_part_syllabus_gate_2026_ec_communications_1/img_35.png"/><br><br><br><br><img alt="" src="js/questions/topicwise_test_19_part_syllabus_gate_2026_ec_communications_1/img_36.png"/><br><br>`
    }
  ]
});

registerTest({   // made easy ece 2026 topic wise test Communication -2
  series: "ece-gate-pyq",
  name: "TWT - Communication-2",
  date: "july 27, 2026",
  questions: [
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `Consider two narrow-band signals (with the same carrier frequency ‘ <em> f<sub>c</sub> </em> ’) <em>x</em> (<em>t</em> ) and <em>y</em> (<em>t</em> ) having their complex envelopes <img align="absmiddle" alt="" src="js/questions/ec_2026_communications_2/img_1.png"/> then the complex envelope of <em>g</em> (<em>t</em> ) = <em>x</em> (<em>t</em> ) + <em>y</em> (<em>t</em> ) is,`,
      image: "",
      options: [
        `<img alt="" src="js/questions/ec_2026_communications_2/img_2.png"/>`,
        `<img alt="" src="js/questions/ec_2026_communications_2/img_3.png"/>`,
        `<img alt="" src="js/questions/ec_2026_communications_2/img_4.png"/>`,
        `<img alt="" src="js/questions/ec_2026_communications_2/img_5.png"/>`,
      ],
      answer: "C",
      solution: `<img alt="" src="js/questions/ec_2026_communications_2/img_6.png"/>`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `Consider a function,<br/><img alt="" src="js/questions/ec_2026_communications_2/img_7.png"/><br/>The relation between <em>A</em> , <em>B</em> , <em>C</em> which makes <em>f</em> (<em>x</em> ) a valid probability density function is,`,
      image: "",
      options: [
        `<em>A</em> + <em>B</em> + <em>C</em> = 0`,
        `<em>A</em> + 2<em>B</em> + 5<em>C</em> = 1`,
        `<em>A </em> + <em>B</em> + 5<em>C</em> = 1`,
        `<em>A</em> + 2<em>B</em> + 5<em>C</em> = 0`,
      ],
      answer: "C",
      solution: `<img alt="" src="js/questions/ec_2026_communications_2/img_8.png"/>`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `The autocorrelation function of a wide sense stationary random process <img align="absmiddle" alt="" src="js/questions/ec_2026_communications_2/img_9.png"/> The value of <em>E</em> [<em>X</em> (5) – <em>X</em> (8)]<sup>2</sup> is`,
      image: "",
      options: [
        `50<em>e</em> <sup>–15</sup>`,
        `50[1 – <em>e</em> <sup>–15</sup> ]`,
        `50[1 – <em>e</em> <sup>–5</sup> ]`,
        `25<em>e</em> <sup>–5</sup>`,
      ],
      answer: "B",
      solution: `<img alt="" src="js/questions/ec_2026_communications_2/img_10.png"/>`
    },
    {
      marks: 1,
      neg: 0,
      type: "NAT",
      text: `For the channel shown in figure below, the entropy <em>H</em> (<em>X</em> ) = _________bits/symbol. (Rounded off to three decimal places)<br/><img alt="" src="js/questions/ec_2026_communications_2/img_24.png"/>`,
      image: "",
      options: [
      ],
      answer: 1.571,
      solution: `<img alt="" src="js/questions/ec_2026_communications_2/img_25.png"/>`
    },
    {
      marks: 1,
      neg: 0,
      type: "MSQ",
      text: `Let z be a random variable with probability density function <em> f<sub>z</sub> </em> (<em>z</em> ) = 0.5; –1 ≤ z ≤ 1.<br/>Let ‘x’ and ‘y’ are the random variables given by x = z and y = z2. Select the correct options given below:`,
      image: "",
      options: [
        `<em>E</em> (<em>z</em> ) = 0`,
        `<em>E</em> (<em>x</em> ) = 1`,
        `<img alt="" src="js/questions/ec_2026_communications_2/img_26.png"/>`,
        `‘x’ and ‘y’ are independent random variables.`,
      ],
      answer: ["A", "C"],
      solution: `<img alt="" src="js/questions/ec_2026_communications_2/img_27.png"/>`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `Consider AM and PM singals having modulation indices ‘μ’ and ‘β’ respectively. The relation between ‘μ’ and ‘β’ to have the same noise performance for AM and PM receivers is,`,
      image: "",
      options: [
        `β<sup>2</sup> + μ<sup>2</sup> = 1`,
        `β<sup>2</sup> – μ<sup>2</sup> = 1`,
        `<img alt="" src="js/questions/ec_2026_communications_2/img_11.png"/>`,
        `<img alt="" src="js/questions/ec_2026_communications_2/img_12.png"/>`,
      ],
      answer: "D",
      solution: `<img alt="" src="js/questions/ec_2026_communications_2/img_13.png"/>`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `The power spectral density of a real process <em>X</em> (<em>t</em> ) for positive frequencies is shown below. The value of <em>E</em> [<em>X</em> <sup>2</sup> (t)] is,<br/><img alt="" src="js/questions/ec_2026_communications_2/img_14.png"/>`,
      image: "",
      options: [
        `200400`,
        `100200`,
        `<img alt="" src="js/questions/ec_2026_communications_2/img_15.png"/>`,
        `<img alt="" src="js/questions/ec_2026_communications_2/img_16.png"/>`,
      ],
      answer: "D",
      solution: `<img alt="" src="js/questions/ec_2026_communications_2/img_17.png"/>`
    },
    {
      marks: 1,
      neg: 0,
      type: "NAT",
      text: `The cumulative distribution function <img align="absmiddle" alt="" src="js/questions/ec_2026_communications_2/img_18.png"/> corresponding to the PDF <img align="absmiddle" alt="" src="js/questions/ec_2026_communications_2/img_19.png"/>is ________ (Rounded off to 2 decimal places)`,
      image: "",
      options: [
      ],
      answer: 0.75,
      solution: `<img alt="" src="js/questions/ec_2026_communications_2/img_20.png"/>`
    },
    {
      marks: 1,
      neg: 0,
      type: "NAT",
      text: `A WSS random process <em>x</em> (<em>t</em> ) is applied to the input of an LTI system with impulse response,<img align="absmiddle" alt="" src="js/questions/ec_2026_communications_2/img_21.png"/> The mean value of the output y(t) of the system, if <em>E</em> [<em>x</em> (<em>t</em> )] = 10 is _______. (Roundedoff to three decimal places)`,
      image: "",
      options: [
      ],
      answer: 62.832,
      solution: `<img alt="" src="js/questions/ec_2026_communications_2/img_22.png"/><br/><img alt="" src="js/questions/ec_2026_communications_2/img_23.png"/>`
    },

    {
      marks: 2,
      neg: 0.66,
      type: "MCQ",
      text: `Consider a random process <em>X</em> (<em>t</em> ) = <em>C</em> cosω<sub>0</sub> t + <em>D</em> sin ω<sub>0</sub> <em>t</em> where ‘ω<sub>0</sub> ’ is constant, ‘<em>C</em> ’ and ‘<em>D</em> ’ are independent random variables.<br/>‘<em>C</em> ’ and ‘<em>D</em> ’ both have zero mean and variance of ‘σ<sup>2</sup> ’. The autocorrelation function of <em>X</em> (<em>t</em> ) is,`,
      image: "",
      options: [
        `<img alt="" src="js/questions/ec_2026_communications_2/img_28.png"/>`,
        `<img alt="" src="js/questions/ec_2026_communications_2/img_29.png"/>`,
        `<img alt="" src="js/questions/ec_2026_communications_2/img_30.png"/>`,
        `<img alt="" src="js/questions/ec_2026_communications_2/img_31.png"/>`,
      ],
      answer: "C",
      solution: `<img alt="" src="js/questions/ec_2026_communications_2/img_32.png"/>`
    },
    {
      marks: 2,
      neg: 0.66,
      type: "MCQ",
      text: `Consider a white Gaussian noise process of zero mean and power spectral density <img align="absmiddle" alt="" src="js/questions/ec_2026_communications_2/img_33.png"/>that is applied to the input of the high-pass RL filter as shown below:<br/><img alt="" src="js/questions/ec_2026_communications_2/img_34.png"/><br/>The Autocorrelation function of the filter output is,`,
      image: "",
      options: [
        `<img alt="" src="js/questions/ec_2026_communications_2/img_35.png"/>`,
        `<img alt="" src="js/questions/ec_2026_communications_2/img_36.png"/>`,
        `<img alt="" src="js/questions/ec_2026_communications_2/img_37.png"/>`,
        `<img alt="" src="js/questions/ec_2026_communications_2/img_38.png"/>`,
      ],
      answer: "D",
      solution: `<img alt="" src="js/questions/ec_2026_communications_2/img_39.png"/>`
    },
    {
      marks: 2,
      neg: 0,
      type: "NAT",
      text: `An information source is modelled as a bandlimited process with a bandwidth of 1000 Hz. This process is sampled at a rate higher than the Nyquist rate to provide a guard band of 500 Hz. The resulting samples takes one of the value in the set {<em>a</em> , <em>b</em> , <em>c</em> , <em>d</em> , <em>e</em> , <em>f</em> } with corresponding probabilities {0.05, 0.05, 0.1, 0.5, 0.25, 0.05}. The rate of information of the source is _________ kbps. (correct to two decimal places)`,
      image: "",
      options: [
      ],
      answer: 4.95,
      solution: `<img alt="" src="js/questions/ec_2026_communications_2/img_49.png"/>`
    },
    {
      marks: 2,
      neg: 0,
      type: "NAT",
      text: `A voice-grade AWGN (additive white Gaussian noise) telephone channel has a bandwidth of 5 kHz and two sided noise power spectral density <img align="absmiddle" alt="" src="js/questions/ec_2026_communications_2/img_50.png"/>Watt/Hz. If information rate of 50 kbps is to be transmitted over this channel with arbitrarily small bit error rate, the minimum bit energy required is _________ (mJ/bit) (Rounded off to three decimal places)`,
      image: "",
      options: [
      ],
      answer: 2.046,
      solution: `<img alt="" src="js/questions/ec_2026_communications_2/img_51.png"/>`
    },
    {
      marks: 2,
      neg: 0.66,
      type: "MCQ",
      text: `Consider the sum of two ergodic noise voltages:<br/><em>n</em> (<em>t</em> ) = <em>n</em> <sub>1</sub> (<em>t</em> ) + <em>n</em> <sub>2</sub> (<em>t</em> )<br/>The power of <em>n</em> <sub>1</sub> (<em>t</em> ) is 15 W and the power of <em>n</em> <sub>2</sub> (<em>t</em> ) is 25 W. What is the power of <em>n</em> (<em>t</em> ) if the cross correlation of <em>n</em> <sub>1</sub> (<em>t</em> ) and <em>n</em> <sub>2</sub> (<em>t</em> ) is 5 for τ = 0?`,
      image: "",
      options: [
        `40 W`,
        `45 W`,
        `50 W`,
        `65 W`,
      ],
      answer: "C",
      solution: `<img alt="" src="js/questions/ec_2026_communications_2/img_40.png"/>`
    },
    {
      marks: 2,
      neg: 0.66,
      type: "MCQ",
      text: `An independent random variable voltage process <em>X</em> (<em>t</em> ) is applied to an RLC network as shown in the figure below to get the output random process <em>Y</em> (<em>t</em> ). The power spectral density of input <em>X</em> (<em>t</em> ) is <em> S<sub>X</sub> </em> (ω) and the power spectral density of output <em>Y</em> (<em>t</em> ) is <em> S<sub>Y</sub> </em> (ω).<br/><img alt="" src="js/questions/ec_2026_communications_2/img_41.png"/><br/>The value of <img align="absmiddle" alt="" src="js/questions/ec_2026_communications_2/img_42.png"/>is,`,
      image: "",
      options: [
        `0`,
        `<img alt="" src="js/questions/ec_2026_communications_2/img_43.png"/>`,
        `<img alt="" src="js/questions/ec_2026_communications_2/img_44.png"/>`,
        `<img alt="" src="js/questions/ec_2026_communications_2/img_45.png"/>`,
      ],
      answer: "A",
      solution: `<img alt="" src="js/questions/ec_2026_communications_2/img_46.png"/>`
    },
    {
      marks: 2,
      neg: 0,
      type: "NAT",
      text: `A continuous random variable ‘<em>X</em> ’ is uniformly distributed with pdf as,<br/><img alt="" src="js/questions/ec_2026_communications_2/img_47.png"/><br/>The differential entropy of <em>X</em> for <em>M</em> = 1 is _________.`,
      image: "",
      options: [
      ],
      answer: 1,
      solution: `1<br/><br/>1 (1 - 1)<br/><img alt="" src="js/questions/ec_2026_communications_2/img_48.png"/>`
    },

    {
      marks: 2,
      neg: 0,
      type: "MSQ",
      text: `Which of the following functions represent a valid Autocorrelation function?`,
      image: "",
      options: [
        `<img alt="" src="js/questions/ec_2026_communications_2/img_52.png"/>`,
        `<img alt="" src="js/questions/ec_2026_communications_2/img_53.png"/>`,
        `<img alt="" src="js/questions/ec_2026_communications_2/img_54.png"/>`,
        `<img alt="" src="js/questions/ec_2026_communications_2/img_55.png"/>`,
      ],
      answer: ["B", "D"],
      solution: `<img alt="" src="js/questions/ec_2026_communications_2/img_56.png"/>`
    }
  ]
});

registerTest({   // made easy ece 2026 topic wise test Communication-3
  series: "ece-gate-pyq",
  name: "TWT - Communication-3",
  date: "aug 01, 2026",
  questions: [
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `In a (6, 3) block code, the parity equations are <em>p</em><sub>1</sub> = <em>d</em><sub>2</sub> ⊕ <em>d</em><sub>3</sub> , <em>p</em><sub>2</sub> = <em>d</em><sub>1</sub> ⊕ <em>d</em><sub>3</sub> , <em>p</em><sub>3</sub> = <em>d</em><sub>1</sub> ⊕ <em>d</em><sub>2</sub><br/>The minimum hamming distance is,`,
      image: "",
      options: [
        `0`,
        `3`,
        `2`,
        `1`
      ],
      answer: "B",
      solution: `<img alt="" src="js/questions/topicwise_test_21_part_syllabus_gate_2026_ec_communications_3/img_7.png"/>`
    },

    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `Let <img align="absmiddle" alt="" src="js/questions/topicwise_test_21_part_syllabus_gate_2026_ec_communications_3/img_10.png"/>denote the probabilities of symbol error for the in-phase and quadrature channels of a narrow-band digital communication system. The average probability of symbol error for the overall system is given by,`,
      image: "",
      options: [
        `<img alt="" src="js/questions/topicwise_test_21_part_syllabus_gate_2026_ec_communications_3/img_11.png"/>`,
        `<img alt="" src="js/questions/topicwise_test_21_part_syllabus_gate_2026_ec_communications_3/img_12.png"/>`,
        `<img alt="" src="js/questions/topicwise_test_21_part_syllabus_gate_2026_ec_communications_3/img_13.png"/>`,
        `<img alt="" src="js/questions/topicwise_test_21_part_syllabus_gate_2026_ec_communications_3/img_14.png"/>`
      ],
      answer: "C",
      solution: `<img alt="" src="js/questions/topicwise_test_21_part_syllabus_gate_2026_ec_communications_3/img_15.png"/>`
    },
    {
      marks: 1,
      neg: 0,
      type: "NAT",
      text: `Consider voice transmission using BPSK signalling at a transmission rate of 4.8 kbps and a bandwidth efficiency of 1 bps/Hz. In order to increase the data rate to 38.4 kbps with the symbol rate to remain at 4800 symbols/sec, the number of points required in the signal constellation will be _______.`,
      image: "",
      options: [

      ],
      answer: 256,
      solution: `<img alt="" src="js/questions/topicwise_test_21_part_syllabus_gate_2026_ec_communications_3/img_16.png"/>`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `A signal constellation for some modulation scheme is as shown below. Minimum distance between adjacent points is 2A. Assume that the signal points are equally probable, the average transmitted energy for this constellation is,<br><br><img alt="" src="js/questions/topicwise_test_21_part_syllabus_gate_2026_ec_communications_3/img_8.png"/><br><br>`,
      image: "",
      options: [
        `9<em>A</em><sup>2</sup>`,
        `36<em>A</em><sup>2</sup>`,
        `4.5<em>A</em><sup>2</sup>`,
        `18<em>A</em><sup>2</sup>`
      ],
      answer: "C",
      solution: `<img alt="" src="js/questions/topicwise_test_21_part_syllabus_gate_2026_ec_communications_3/img_9.png"/>`
    },
    {
      marks: 1,
      neg: 0,
      type: "NAT",
      text: `The input signal <em>s</em> (<em>t</em> ) to the matched filter is given by,<br><br><img alt="" src="js/questions/topicwise_test_21_part_syllabus_gate_2026_ec_communications_3/img_17.png"/><br><br>If the impulse response of the matched filter is <em>h</em> (<em>t</em> ), the value of the integral <img align="absmiddle" alt="" src="js/questions/topicwise_test_21_part_syllabus_gate_2026_ec_communications_3/img_18.png"/>is ____________,`,
      image: "",
      options: [

      ],
      answer: -3,
      solution: `<img alt="" src="js/questions/topicwise_test_21_part_syllabus_gate_2026_ec_communications_3/img_19.png"/>`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `A message signal <em>m</em> (<em>t</em> ) = Amtanh(β<em>t</em> ) is applied to a delta modulator, where ‘ <em>A<sub>m</sub></em> ’ and ‘β’ are real positive constants. The minimum step-size required by the delta modulator to eliminate the slopeoverload distortion for the given message signal is, [ <em>T<sub>s</sub></em> : Sampling interval]`,
      image: "",
      options: [
        `<br><br><img alt="" src="js/questions/topicwise_test_21_part_syllabus_gate_2026_ec_communications_3/img_1.png"/><br><br>`,
        `<br><br><img alt="" src="js/questions/topicwise_test_21_part_syllabus_gate_2026_ec_communications_3/img_2.png"/><br><br>`,
        `<br><br><img alt="" src="js/questions/topicwise_test_21_part_syllabus_gate_2026_ec_communications_3/img_3.png"/><br><br>`,
        `<br><br><img alt="" src="js/questions/topicwise_test_21_part_syllabus_gate_2026_ec_communications_3/img_4.png"/><br><br>`
      ],
      answer: "A",
      solution: `<img alt="" src="js/questions/topicwise_test_21_part_syllabus_gate_2026_ec_communications_3/img_5.png"/>`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `Which of the following (<em>n</em> , <em>k</em> ) block code is not an example of ‘Hamming code’?`,
      image: "",
      options: [
        `(7, 4)`,
        `(15, 11)`,
        `(6, 3)`,
        `(3, 1)`
      ],
      answer: "C",
      solution: `<img alt="" src="js/questions/topicwise_test_21_part_syllabus_gate_2026_ec_communications_3/img_6.png"/>`
    },
    {
      marks: 1,
      neg: 0,
      type: "NAT",
      text: `A 5 kHz bandpass channel is to be used for M-ary PSK transmission of data at a rate of 10500 bits/sec.<br/>If we use a signal pulse with a raised cosine spectrum having an excess bandwidth of atleast 70%, the minimum value of M is _______.`,
      image: "",
      options: [

      ],
      answer: 16,
      solution: `<img alt="" src="js/questions/topicwise_test_21_part_syllabus_gate_2026_ec_communications_3/img_20.png"/>`
    },
    {
      marks: 1,
      neg: 0,
      type: "MSQ",
      text: `For (<em>n</em> , <em>k</em> ) Linear Block Code, which of the following is/are correct?`,
      image: "",
      options: [
        `<br><br><img alt="" src="js/questions/topicwise_test_21_part_syllabus_gate_2026_ec_communications_3/img_21.png"/><br><br>`,
        `<em>CH<sup>T</sup></em> = 0`,
        `<br><br><img alt="" src="js/questions/topicwise_test_21_part_syllabus_gate_2026_ec_communications_3/img_22.png"/><br><br>`,
        `<em>GH<sup>T</sup></em> = 0`
      ],
      answer: ["A", "B", "D"],
      solution: `(a, b, d)`
    },
    {
      marks: 2,
      neg: 0.66,
      type: "MCQ",
      text: `An FSK system transmits binary data at the rate of 2.5 × 106 bits per second. During the course of transmission, AWGN of zero mean and power spectral density 5 × 10<sup>–20</sup> W/Hz is added to the signal. In the absence of noise, the amplitude of the received sinusoidal wave for digit 1 or 0 is 1 μV.<br/>The average probability of symbol error, assuming coherent detection is,`,
      image: "",
      options: [
        `2<em>erfc</em> (1)`,
        `<br><br><img alt="" src="js/questions/topicwise_test_21_part_syllabus_gate_2026_ec_communications_3/img_23.png"/><br><br>`,
        `<br><br><img alt="" src="js/questions/topicwise_test_21_part_syllabus_gate_2026_ec_communications_3/img_24.png"/><br><br>`,
        `<br><br><img alt="" src="js/questions/topicwise_test_21_part_syllabus_gate_2026_ec_communications_3/img_25.png"/><br><br>`
      ],
      answer: "D",
      solution: `<img alt="" src="js/questions/topicwise_test_21_part_syllabus_gate_2026_ec_communications_3/img_26.png"/>`
    },
    {
      marks: 2,
      neg: 0,
      type: "NAT",
      text: `A delta modulation system samples a sinusoidal sample of audio data at 256 kHz. Consider the bandwidth of the signal to be 16 kHz and a peak amplitude of 4 V. The Granular noise power generated at the output of DM receiver in order to prevent slope overload is _________ mW.<br/>(Rounded off to one decimal place)`,
      image: "",
      options: [

      ],
      answer: 51.4,
      solution: `<img alt="" src="js/questions/topicwise_test_21_part_syllabus_gate_2026_ec_communications_3/img_33.png"/><br><br><br><br><img alt="" src="js/questions/topicwise_test_21_part_syllabus_gate_2026_ec_communications_3/img_34.png"/>`
    },
    {
      marks: 2,
      neg: 0.66,
      type: "MCQ",
      text: `In a digital communication receiver, the input to the threshold comparator is either 5 V or –5 V for ‘1’ and ‘0’ transmission respectively. The received signal is affected by AWGN with variance 0.5 V<sup>2</sup> . If <em>p</em> (0) = <img align="absmiddle" alt="" src="js/questions/topicwise_test_21_part_syllabus_gate_2026_ec_communications_3/img_27.png"/>the threshold voltage of the comparator is,`,
      image: "",
      options: [
        `0.0347 V`,
        `4.97 V`,
        `–4.97 V`,
        `–0.0347 V`
      ],
      answer: "D",
      solution: `<img alt="" src="js/questions/topicwise_test_21_part_syllabus_gate_2026_ec_communications_3/img_28.png"/><br><br><br><br><img alt="" src="js/questions/topicwise_test_21_part_syllabus_gate_2026_ec_communications_3/img_29.png"/>`
    },
    {
      marks: 2,
      neg: 0,
      type: "NAT",
      text: `The amplitude of a random signal is uniformly distributed between –2 V and 2 V.<br/>If the positive values of the signal are uniformly quantized with a step size of 0.07 V, and the negative values are uniformly quantized with a step size of 0.5 V, the signal to quantization noise ratio of the given PCM system is __________. (rounded off to two decimal places)`,
      image: "",
      options: [

      ],
      answer: 125.54,
      solution: `<img alt="" src="js/questions/topicwise_test_21_part_syllabus_gate_2026_ec_communications_3/img_36.png"/><br><br><br><br><img alt="" src="js/questions/topicwise_test_21_part_syllabus_gate_2026_ec_communications_3/img_37.png"/><br><br>`
    },
    {
      marks: 2,
      neg: 0,
      type: "MSQ",
      text: `Signals <em>S</em><sub>1</sub> (<em>t</em> ) and <em>S</em><sub>2</sub> (<em>t</em> ) shown in below figure (a) are used as orthonormal basis in a binary data transmission system.<br><br><img alt="" src="js/questions/topicwise_test_21_part_syllabus_gate_2026_ec_communications_3/img_38.png"/><br><br>The vector representations <img align="absmiddle" alt="" src="js/questions/topicwise_test_21_part_syllabus_gate_2026_ec_communications_3/img_39.png"/> of the two signal waveforms used for transmission are shown in below figure (b).<br><br><img alt="" src="js/questions/topicwise_test_21_part_syllabus_gate_2026_ec_communications_3/img_40.png"/><br><br>The probability of error if transmission is over an AWGN channel with noise having power spectral density equal to 0.5 W/Hz is Q(c).<br/>Select the correct values of a, b, c from the options given below:`,
      image: "",
      options: [
        `<br><br><img alt="" src="js/questions/topicwise_test_21_part_syllabus_gate_2026_ec_communications_3/img_41.png"/><br><br>`,
        `<br><br><img alt="" src="js/questions/topicwise_test_21_part_syllabus_gate_2026_ec_communications_3/img_42.png"/><br><br>`,
        `<em>c</em> = 2`,
        `<br><br><img alt="" src="js/questions/topicwise_test_21_part_syllabus_gate_2026_ec_communications_3/img_43.png"/><br><br>`
      ],
      answer: ["B", "C"],
      solution: `<img alt="" src="js/questions/topicwise_test_21_part_syllabus_gate_2026_ec_communications_3/img_44.png"/><br><br><br><br><img alt="" src="js/questions/topicwise_test_21_part_syllabus_gate_2026_ec_communications_3/img_45.png"/>`
    },
    {
      marks: 2,
      neg: 0.66,
      type: "MCQ",
      text: `Which of the following pair of modulation schemes have the same average symbol error probability?`,
      image: "",
      options: [
        `ASK with 0° phase shift and FSK with 90° phase shift in the local oscillator.`,
        `ASK with 0° phase shift and PSK with 90° phase shift in the local oscillator.`,
        `FSK with 0° phase shift and PSK with 45° phase shift in the local oscillator.`,
        `FSK with 45° phase shift and ASK with 45° phase shift in the local oscillator.`
      ],
      answer: "C",
      solution: `<img alt="" src="js/questions/topicwise_test_21_part_syllabus_gate_2026_ec_communications_3/img_30.png"/>`
    },
    {
      marks: 2,
      neg: 0.66,
      type: "MCQ",
      text: `For the channel and message probabilities given in the below figure, the decisions about the transmitted message for each possible received response is made using MAP decoding technique.<br><br><img alt="" src="js/questions/topicwise_test_21_part_syllabus_gate_2026_ec_communications_3/img_31.png"/><br><br>Choose the correct decision according to MAP decoding technique:`,
      image: "",
      options: [
        `‘<em>r</em><sub>0</sub> ’ is decoded as ‘<em>m</em><sub>0</sub> ’`,
        `‘<em>r</em><sub>1</sub> ’ is decoded as ‘<em>m</em><sub>1</sub> ’`,
        `‘<em>r</em><sub>2</sub> ’ is decoded as ‘<em>m</em><sub>1</sub> ’`,
        `‘<em>r</em><sub>1</sub> ’ is decoded as ‘<em>m</em><sub>0</sub> ’`
      ],
      answer: "D",
      solution: `<img alt="" src="js/questions/topicwise_test_21_part_syllabus_gate_2026_ec_communications_3/img_32.png"/>`
    },
    {
      marks: 2,
      neg: 0,
      type: "NAT",
      text: `Consider a threshold detector with input <em>R</em> = <em>X</em> + <em>N</em> , where <em>X</em> is the signal level at the input of the detector due to transmitted binary data and <em>N</em> is a noise variable which is characterised by the probability density function f<sub>N</sub> (n) = 0.5e<sup>–</sup> |<sup>n</sup> |.<br/><em>X</em> takes the values : +1 with probability of 1/3<br/>–1 with probability of 2/3<br/>If the threshold value of the detector is decided in an optimum way using maximum a posteriori<br/>(MAP) criteria, the value of optimum threshold voltage is _________. [Rounded off to two decimal places]`,
      image: "",
      options: [

      ],
      answer: 0.35,
      solution: `<img alt="" src="js/questions/topicwise_test_21_part_syllabus_gate_2026_ec_communications_3/img_35.png"/>`
    },
  ]
});

registerTest({   // made easy ece 2026 topic wise test electromagnetic-3
  series: "ece-gate-pyq",
  name: "TWT - Electromagnetic-3",
  date: "aug 08, 2026",
  questions: [
  ]
});

registerTest({   // made easy ece 2026 topic wise test electromagnetic-2
  series: "ece-gate-pyq",
  name: "TWT - Electromagnetic-2",
  date: "aug 04, 2026",
  questions: [
  ]
});

registerTest({   // made easy ece 2026 topic wise test electromagnetic-1
  series: "ece-gate-pyq",
  name: "TWT - Electromagnetic-1",
  date: "july 30, 2026",
  questions: [
  ]
});

registerTest({   // made easy ece 2026 topic wise test COA
  series: "ece-gate-pyq",
  name: "TWT - COA",
  date: "aug 07, 2026",
  questions: [
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `‘Mantissa alignment process is used to adjust the decimal point.’ In this process right alignment _________ the exponent and left alignment _________ the exponent.`,
      image: "",
      options: [
        `increase, increase`,
        `decrease, decrease`,
        `increase, decrease`,
        `decrease, increase`
      ],
      answer: "C",
      solution: `<img alt="" src="js/questions/topicwise_test_16_part_syllabus_gate_2026_ec_computer_organisation/img_1.png"/><br><br>`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `Match Column (I) (Bias Exponent and Mantissa) with Column (II) (Special values) corresponding to the IEEE 754 floating point representation.<br><br><img alt="" src="js/questions/topicwise_test_16_part_syllabus_gate_2026_ec_computer_organisation/img_2.png"/><br><br>`,
      image: "",
      options: [
        `a`,
        `b`,
        `c`,
        `d`
      ],
      answer: "C",
      solution: `<img alt="" src="js/questions/topicwise_test_16_part_syllabus_gate_2026_ec_computer_organisation/img_3.png"/><br><br>`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `How many 128 × 4 RAM chips are needed to provide a memory capacity of 1 k Bytes?`,
      image: "",
      options: [
        `32`,
        `2<sup>3</sup>`,
        `2<sup>6</sup>`,
        `2<sup>4</sup>`
      ],
      answer: "D",
      solution: `<img alt="" src="js/questions/topicwise_test_16_part_syllabus_gate_2026_ec_computer_organisation/img_4.png"/><br><br>`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `Microprogram is`,
      image: "",
      options: [
        `the name of a source program in microcomputers.`,
        `set of micro instructions that defines the individual operations in response to a machine language instruction.`,
        `a very small segment of machine code.`,
        `none of these`
      ],
      answer: "B",
      solution: `A sequence of microinstructions is called a microprogram, which is stored in a ROM or RAM<br/>called a control memory. Each step in a sequence of steps in the execution of a certain machine<br/>instruction is considered as a microinstruction.`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `Which of the following component plays major role in routing data in CPU?`,
      image: "",
      options: [
        `Decoder`,
        `Encoder`,
        `Multiplexer`,
        `Latch`
      ],
      answer: "C",
      solution: `A Multiplexer (MUX) is a key component in routing data within the CPU. It selects one of many<br/>input signals and forwards the selected input into a single line, based on control signals.`
    },
    {
      marks: 1,
      neg: 0,
      type: "NAT",
      text: `Assume that a processor uses a four-stage instruction pipeline. It executes a program with 50 instructions. Assuming an ideal pipeline and complete absence of any hazards, speedup achieved over an equivalent non-pipelined processor would be _________. (correct to two decimal places)`,
      image: "",
      options: [

      ],
      answer: 3.77,
      solution: `<img alt="" src="js/questions/topicwise_test_16_part_syllabus_gate_2026_ec_computer_organisation/img_5.png"/><br><br><br><br><img alt="" src="js/questions/topicwise_test_16_part_syllabus_gate_2026_ec_computer_organisation/img_6.png"/><br><br>`
    },
    {
      marks: 1,
      neg: 0,
      type: "MSQ",
      text: `Select the correct options regarding different semiconductor memories:`,
      image: "",
      options: [
        `SRAM uses 6 transistors for storage of one bit.`,
        `DRAM uses 2 MOSFETs for storage of one bit.`,
        `DRAMs are faster than SRAMs.`,
        `SRAMs are the main memory of computer systems.`
      ],
      answer: ["A", "B"],
      solution: `•DRAMs are slower than SRAMs as it requires periodic refreshing.<br/>•SRAMs are faster and expensive and typically used as the cache memory of computer systems.<br/>•DRAMs are slower but more affordable and typically used as the main memory of computer<br/>systems.<br/>•SRAMs are fabricated using BJT and MOSFET. For storage of 1-bit, 6 transistors are required.<br/>•DRAMs are fabricated using only MOSFET. For storage of 1-bit, 2 MOSFETs are required.`
    },
    {
      marks: 1,
      neg: 0,
      type: "NAT",
      text: `When executing a set of benchmark program for a machine ‘A’, the following performance measures were recorded.<br><br><img alt="" src="js/questions/topicwise_test_16_part_syllabus_gate_2026_ec_computer_organisation/img_7.png"/><br><br>The overall average number of clock cycles per instruction (CPI) for the machine ‘A’ is ________<br/>(Rounded off to two decimal places)`,
      image: "",
      options: [

      ],
      answer: 4.58,
      solution: `<img alt="" src="js/questions/topicwise_test_16_part_syllabus_gate_2026_ec_computer_organisation/img_8.png"/><br><br>`
    },
    {
      marks: 1,
      neg: 0,
      type: "NAT",
      text: `The semiconductor RAM of a digital computer has a word length of 32-bits and a capacity of 16,384 words. It has a cycle time of 50 ns. If the CPU is much faster than the memory, the time required to fill 1024 bytes of this memory with all 0’s will be __________ μs. (Rounded off to one decimal place)`,
      image: "",
      options: [

      ],
      answer: 12.8,
      solution: `<img alt="" src="js/questions/topicwise_test_16_part_syllabus_gate_2026_ec_computer_organisation/img_9.png"/><br><br>`
    },
    {
      marks: 2,
      neg: 0.66,
      type: "MCQ",
      text: `IEEE standard 754 defined single floating point precision formate uses the excess-bias, then the bias is`,
      image: "",
      options: [
        `centre of a exponent range`,
        `half of centre of exponent range`,
        `one less than the half of centre of exponent range`,
        `one less than the centre of a exponent range`
      ],
      answer: "D",
      solution: `In IEEE 754 single-precision floating-point format, the bias is calculated as<br/>Bias = 2<sup>(k –1)</sup> –1<br/>where k is the number of bits in exponent. Thus, bias is one less than the center of the exponent range.`
    },
    {
      marks: 2,
      neg: 0,
      type: "NAT",
      text: `A computer has 24-bit instructions and 8-bit addresses. If there are 250 two address instructions,then the one address instructions which can be formulated are _________.`,
      image: "",
      options: [

      ],
      answer: 1536,
      solution: `<img alt="" src="js/questions/topicwise_test_16_part_syllabus_gate_2026_ec_computer_organisation/img_10.png"/><br><br>`
    },
    {
      marks: 2,
      neg: 0,
      type: "NAT",
      text: `A CPU supports x-bit instruction and <img align="absmiddle" alt="" src="js/questions/topicwise_test_16_part_syllabus_gate_2026_ec_computer_organisation/img_11.png"/>bit address. If number of possible single address instructions are 4, then the number of bits assigned for address is ___________.`,
      image: "",
      options: [

      ],
      answer: 4,
      solution: `<img alt="" src="js/questions/topicwise_test_16_part_syllabus_gate_2026_ec_computer_organisation/img_12.png"/><br><br>`
    },
    {
      marks: 2,
      neg: 0,
      type: "NAT",
      text: `A number is written in a specified format as shown <img align="absmiddle" alt="" src="js/questions/topicwise_test_16_part_syllabus_gate_2026_ec_computer_organisation/img_13.png"/> The equivalent number in decimal number system is _________.`,
      image: "",
      options: [

      ],
      answer: -6.25,
      solution: `<img alt="" src="js/questions/topicwise_test_16_part_syllabus_gate_2026_ec_computer_organisation/img_14.png"/><br><br>`
    },
    {
      marks: 2,
      neg: 0.66,
      type: "MCQ",
      text: `Consider the following hypothetical formate used to represent the data:<br><br><img alt="" src="js/questions/topicwise_test_16_part_syllabus_gate_2026_ec_computer_organisation/img_15.png"/><br><br>Consider the data as (–14.75) ∗ 2<sup>+12</sup> . The hexadecimal equivalent when the data is stored in the memory is`,
      image: "",
      options: [
        `(CBD30)<sub>H</sub>`,
        `(4CD40)<sub>H</sub>`,
        `(4BD40)<sub>H</sub>`,
        `(CED40)<sub>H</sub>`
      ],
      answer: "D",
      solution: `<img alt="" src="js/questions/topicwise_test_16_part_syllabus_gate_2026_ec_computer_organisation/img_16.png"/><br><br>`
    },
    {
      marks: 2,
      neg: 0,
      type: "NAT",
      text: `A pipelined processor has five pipeline stages. These stages along with their execution times are as follows: IF → 3.1 nsec, ID → 2.32 nsec, EXE → 5.5 nsec, MEM → 5 nsec, WB → 6 nsec. The pipeline latch delay is 0.25 nsec.<br/>Assuming complete absence of all types of hazards, the time taken to execute 96 instructions on this processor is ________ μsec. (correct to three decimal places)`,
      image: "",
      options: [

      ],
      answer: 0.625,
      solution: `<img alt="" src="js/questions/topicwise_test_16_part_syllabus_gate_2026_ec_computer_organisation/img_17.png"/><br><br>`
    },
    {
      marks: 2,
      neg: 0.66,
      type: "MCQ",
      text: `A six stage pipeline has stage delays of 152, 121, 111, 169, 147 and 132 nsec. Consider that the register that are used between the pipeline stages have negligible delays.<br/>The total time to execute 150 independent instructions on this pipeline, assuming there are no pipeline stalls is`,
      image: "",
      options: [
        `16.64 μsec`,
        `23.56 μsec`,
        `22.88 μsec`,
        `26.195 μsec`
      ],
      answer: "D",
      solution: `<img alt="" src="js/questions/topicwise_test_16_part_syllabus_gate_2026_ec_computer_organisation/img_18.png"/><br><br>`
    },
    {
      marks: 2,
      neg: 0,
      type: "MSQ",
      text: `The microinstructions stored in the control memory of a processor have a width of 28 bits. Each microinstruction is divided into 4 fields, a micro-operation field of 12 bits, an address field (<em>X</em> ) and two fields for register operand (<em>Y</em><sub>1</sub> ) and (<em>Y</em><sub>2</sub> ). If there are 64 registers present then, choose the correct statements:`,
      image: "",
      options: [
        `maximum possible of addresses is 4.`,
        `<em>Y</em><sub>1</sub> and <em>Y</em><sub>2</sub> fields are of 6 bits.`,
        `number of possible microinstructions is 4096.`,
        `X field is of 4 bits.`
      ],
      answer: ["B", "C", "D"],
      solution: `<img alt="" src="js/questions/topicwise_test_16_part_syllabus_gate_2026_ec_computer_organisation/img_19.png"/><br><br>`
    }
  ]
});

registerTest({   // made easy ece 2026 topic wise test Engineering Mathematics-1
  series: "ece-gate-pyq",
  name: "TWT - Engineering Mathematics-1",
  date: "july 25, 2026",
  questions: [
  ]
});

registerTest({   // made easy ece 2026 topic wise test Engineering Mathematics-2
  series: "ece-gate-pyq",
  name: "TWT - Engineering Mathematics-2",
  date: "aug 08, 2026",
  questions: [
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `The integrating factor for the differential equation <img align="absmiddle" alt="" src="js/questions/ec_2026_eng_math_2/img_1.png"/>is`,
      image: "",
      options: [
        `<img align="absmiddle" alt="" src="js/questions/ec_2026_eng_math_2/img_2.png"/>`,
        `<img align="absmiddle" alt="" src="js/questions/ec_2026_eng_math_2/img_3.png"/>`,
        `<img align="absmiddle" alt="" src="js/questions/ec_2026_eng_math_2/img_4.png"/>`,
        `<img align="absmiddle" alt="" src="js/questions/ec_2026_eng_math_2/img_5.png"/>`,
      ],
      answer: "B",
      solution: `<img alt="" src="js/questions/ec_2026_eng_math_2/img_6.png"/><br><br>`
    },

    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `A student appears for a quiz consisting of only true-false type questions and answer all the questions. The student knows the answers of some questions and guesses the answers for the remaining questions. Whenever the student knows the answer of a question, he gives the correct answer. Assume that the probability of the students giving the correct answer for a question given that he has guessed it, is <img align="absmiddle" alt="" src="js/questions/ec_2026_eng_math_2/img_10.png"/> Also assume that the probability of the answer for a question being guessed, given that the student’s answer is correct is <img align="absmiddle" alt="" src="js/questions/ec_2026_eng_math_2/img_11.png"/>Then the probability that the student knows the answer of a randomly chosen question is`,
      image: "",
      options: [
        `<img align="absmiddle" alt="" src="js/questions/ec_2026_eng_math_2/img_12.png"/>`,
        `<img align="absmiddle" alt="" src="js/questions/ec_2026_eng_math_2/img_13.png"/>`,
        `<img align="absmiddle" alt="" src="js/questions/ec_2026_eng_math_2/img_14.png"/>`,
        `<img align="absmiddle" alt="" src="js/questions/ec_2026_eng_math_2/img_15.png"/>`,
      ],
      answer: "C",
      solution: `<img alt="" src="js/questions/ec_2026_eng_math_2/img_16.png"/><br><br><img alt="" src="js/questions/ec_2026_eng_math_2/img_17.png"/><br><br>`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `The value of <img align="absmiddle" alt="" src="js/questions/ec_2026_eng_math_2/img_75.png"/>is`,
      image: "",
      options: [
        `<img align="absmiddle" alt="" src="js/questions/ec_2026_eng_math_2/img_76.png"/>`,
        `<img align="absmiddle" alt="" src="js/questions/ec_2026_eng_math_2/img_77.png"/>`,
        `<img align="absmiddle" alt="" src="js/questions/ec_2026_eng_math_2/img_78.png"/>`,
        `0`,
      ],
      answer: "D",
      solution: `<img alt="" src="js/questions/ec_2026_eng_math_2/img_79.png"/><br><br>`
    },

    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `The solution of the differential equation <img align="absmiddle" alt="" src="js/questions/ec_2026_eng_math_2/img_20.png"/>is`,
      image: "",
      options: [
        `<img align="absmiddle" alt="" src="js/questions/ec_2026_eng_math_2/img_21.png"/>`,
        `<img align="absmiddle" alt="" src="js/questions/ec_2026_eng_math_2/img_22.png"/>`,
        `<img align="absmiddle" alt="" src="js/questions/ec_2026_eng_math_2/img_23.png"/>`,
        `<img align="absmiddle" alt="" src="js/questions/ec_2026_eng_math_2/img_24.png"/>`,
      ],
      answer: "A",
      solution: `<img alt="" src="js/questions/ec_2026_eng_math_2/img_25.png"/><br><br>`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `If <img align="absmiddle" alt="" src="js/questions/ec_2026_eng_math_2/img_26.png"/>is a continuous random variable with p.d.f. given by<br><br><img alt="" src="js/questions/ec_2026_eng_math_2/img_27.png"/><br><br>The value of <em>k</em> is`,
      image: "",
      options: [
        `<img align="absmiddle" alt="" src="js/questions/ec_2026_eng_math_2/img_28.png"/>`,
        `<img align="absmiddle" alt="" src="js/questions/ec_2026_eng_math_2/img_29.png"/>`,
        `<img align="absmiddle" alt="" src="js/questions/ec_2026_eng_math_2/img_30.png"/>`,
        `<img align="absmiddle" alt="" src="js/questions/ec_2026_eng_math_2/img_31.png"/>`,
      ],
      answer: "C",
      solution: `<img alt="" src="js/questions/ec_2026_eng_math_2/img_32.png"/><br><br>`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `The degree of the differential equation <img align="absmiddle" alt="" src="js/questions/ec_2026_eng_math_2/img_66.png"/>is`,
      image: "",
      options: [
        `1`,
        `2`,
        `3`,
        `None of these`,
      ],
      answer: "C",
      solution: `<img alt="" src="js/questions/ec_2026_eng_math_2/img_67.png"/><br><br>`
    },
    {
      marks: 1,
      neg: 0.0,
      type: "MSQ",
      text: `Which of the following statement(s) is/are correct?`,
      image: "",
      options: [
        `<img align="absmiddle" alt="" src="js/questions/ec_2026_eng_math_2/img_68.png"/>`,
        `<img align="absmiddle" alt="" src="js/questions/ec_2026_eng_math_2/img_69.png"/>`,
        `<img align="absmiddle" alt="" src="js/questions/ec_2026_eng_math_2/img_70.png"/>`,
        `<img align="absmiddle" alt="" src="js/questions/ec_2026_eng_math_2/img_71.png"/>`,
      ],
      answer: ["A", "B", "C"],
      solution: `<img alt="" src="js/questions/ec_2026_eng_math_2/img_72.png"/><br><br>`
    },

    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `A random variable <img align="absmiddle" alt="" src="js/questions/ec_2026_eng_math_2/img_40.png"/>has the following probability distribution <img align="absmiddle" alt="" src="js/questions/ec_2026_eng_math_2/img_41.png"/> If the mean of<br><br><img alt="" src="js/questions/ec_2026_eng_math_2/img_42.png"/><br><br>is 0.8, then a =`,
      image: "",
      options: [
        `5`,
        `1.5`,
        `4`,
        `3`,
      ],
      answer: "D",
      solution: `<img alt="" src="js/questions/ec_2026_eng_math_2/img_43.png"/><br><br>`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `India plays two matches each with England and Australia. In any match the probabilities of India getting points 0, 1 and 2 are 0.45, 0.05 and 0.50 respectively. Assuming that the outcomes are independent, the probability of India getting at least 7 points is`,
      image: "",
      options: [
        `0.8750`,
        `0.0875`,
        `0.0625`,
        `0.0250`,
      ],
      answer: "B",
      solution: `<img alt="" src="js/questions/ec_2026_eng_math_2/img_44.png"/><br><br>`
    },
    {
      marks: 2,
      neg: 0.66,
      type: "MCQ",
      text: `The solution of the differential equation:<br><br><img alt="" src="js/questions/ec_2026_eng_math_2/img_45.png"/><br><br>`,
      image: "",
      options: [
        `<img align="absmiddle" alt="" src="js/questions/ec_2026_eng_math_2/img_46.png"/>`,
        `<img align="absmiddle" alt="" src="js/questions/ec_2026_eng_math_2/img_47.png"/>`,
        `<img align="absmiddle" alt="" src="js/questions/ec_2026_eng_math_2/img_48.png"/>`,
        `<img align="absmiddle" alt="" src="js/questions/ec_2026_eng_math_2/img_49.png"/>`,
      ],
      answer: "A",
      solution: `<img alt="" src="js/questions/ec_2026_eng_math_2/img_50.png"/><br><br>`
    },
    {
      marks: 2,
      neg: 0.0,
      type: "NAT",
      text: `If <img align="absmiddle" alt="" src="js/questions/ec_2026_eng_math_2/img_7.png"/>_______. (Answer in nearest integer)`,
      image: "",
      options: [],
      answer: 0,
      solution: `<img alt="" src="js/questions/ec_2026_eng_math_2/img_8.png"/><br><br><img alt="" src="js/questions/ec_2026_eng_math_2/img_9.png"/><br><br>`
    },
    {
      marks: 2,
      neg: 0.0,
      type: "NAT",
      text: `In a study about a pandemic, data of 900 persons was collected.It was found that<br>• 190 persons had symptom of fever<br>• 220 persons had symptom of cough<br>• 220 persons had symptom of breathing problem<br>• 330 persons had symptom of fever or cough or both<br>• 340 persons had symptom of fever or breathing problem or both<br>• 350 persons had symptom of cough or breathing problem or both<br>• 30 persons had all three symptoms (fever, breathing problem and cough)<br>If a person is chosen randomly from these 900 persons, then the probability that the person has at most one symptom is ______.`,
      image: "",
      options: [],
      answer: 0.80,
      solution: `<img alt="" src="js/questions/ec_2026_eng_math_2/img_18.png"/><br><br><img alt="" src="js/questions/ec_2026_eng_math_2/img_19.png"/><br><br>`
    },
    {
      marks: 2,
      neg: 0.66,
      type: "MCQ",
      text: `If <img align="absmiddle" alt="" src="js/questions/ec_2026_eng_math_2/img_33.png"/>is an integrating factor of the differential equation:<br><br><img alt="" src="js/questions/ec_2026_eng_math_2/img_34.png"/><br><br>`,
      image: "",
      options: [
        `<img align="absmiddle" alt="" src="js/questions/ec_2026_eng_math_2/img_35.png"/>`,
        `7`,
        `<img align="absmiddle" alt="" src="js/questions/ec_2026_eng_math_2/img_36.png"/>`,
        `<img align="absmiddle" alt="" src="js/questions/ec_2026_eng_math_2/img_37.png"/>`,
      ],
      answer: "C",
      solution: `<img alt="" src="js/questions/ec_2026_eng_math_2/img_38.png"/><br><br><img alt="" src="js/questions/ec_2026_eng_math_2/img_39.png"/><br><br>`
    },
    {
      marks: 2,
      neg: 0.66,
      type: "MCQ",
      text: `The solution of the differential equation <img align="absmiddle" alt="" src="js/questions/ec_2026_eng_math_2/img_51.png"/> under the condition y = 0, <img align="absmiddle" alt="" src="js/questions/ec_2026_eng_math_2/img_52.png"/> when <img align="absmiddle" alt="" src="js/questions/ec_2026_eng_math_2/img_53.png"/>is`,
      image: "",
      options: [
        `<img align="absmiddle" alt="" src="js/questions/ec_2026_eng_math_2/img_54.png"/>`,
        `<img align="absmiddle" alt="" src="js/questions/ec_2026_eng_math_2/img_55.png"/>`,
        `<img align="absmiddle" alt="" src="js/questions/ec_2026_eng_math_2/img_56.png"/>`,
        `<img align="absmiddle" alt="" src="js/questions/ec_2026_eng_math_2/img_57.png"/>`,
      ],
      answer: "A",
      solution: `<img alt="" src="js/questions/ec_2026_eng_math_2/img_58.png"/><br><br>`
    },
    {
      marks: 2,
      neg: 0.66,
      type: "MCQ",
      text: `Number of tigers in a reserve is normally distributed with mean &amp; variance respectively as 1200 and 9 × 10<sup>4</sup> . The probability of finding more than 1800 tigers is approximately`,
      image: "",
      options: [
        `0.0125`,
        `0.025`,
        `0.05`,
        `None of these`,
      ],
      answer: "B",
      solution: `<img alt="" src="js/questions/ec_2026_eng_math_2/img_59.png"/><br><br>`
    },
    {
      marks: 2,
      neg: 0.66,
      type: "MCQ",
      text: `If <img align="absmiddle" alt="" src="js/questions/ec_2026_eng_math_2/img_60.png"/>equals`,
      image: "",
      options: [
        `<img align="absmiddle" alt="" src="js/questions/ec_2026_eng_math_2/img_61.png"/>`,
        `<img align="absmiddle" alt="" src="js/questions/ec_2026_eng_math_2/img_62.png"/>`,
        `<img align="absmiddle" alt="" src="js/questions/ec_2026_eng_math_2/img_63.png"/>`,
        `1`,
      ],
      answer: "A",
      solution: `<img alt="" src="js/questions/ec_2026_eng_math_2/img_64.png"/><br><br><img alt="" src="js/questions/ec_2026_eng_math_2/img_65.png"/><br><br>`
    },

    {
      marks: 2,
      neg: 0.66,
      type: "MCQ",
      text: `The value of <img align="absmiddle" alt="" src="js/questions/ec_2026_eng_math_2/img_73.png"/>is`,
      image: "",
      options: [
        `0`,
        `∞`,
        `1/6`,
        `– 1/6`,
      ],
      answer: "A",
      solution: `<img alt="" src="js/questions/ec_2026_eng_math_2/img_74.png"/><br><br>`
    },
  ]
});

registerTest({   // made easy ece 2026 topic wise test General Aptitude-1
  series: "ece-gate-pyq",
  name: "TWT - General Aptitude-1",
  date: "july 23, 2026",
  questions: [
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `The graph of <img align="absmiddle" alt="" src="js/questions/ec_2026_ga_1/img_29.png"/>is given by`,
      image: "",
      options: [
        `<img align="absmiddle" alt="" src="js/questions/ec_2026_ga_1/img_30.png"/>`,
        `<img align="absmiddle" alt="" src="js/questions/ec_2026_ga_1/img_32.png"/>`,
        `<img align="absmiddle" alt="" src="js/questions/ec_2026_ga_1/img_33.png"/>`,
        `<img align="absmiddle" alt="" src="js/questions/ec_2026_ga_1/img_31.png"/>`,
      ],
      answer: "D",
      solution: `<img alt="" src="js/questions/ec_2026_ga_1/img_34.png"/>`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `Which of the following cubes in the answer figure cannot be made based on the unfolded cube in the question figure?<br/><img alt="" src="js/questions/ec_2026_ga_1/img_35.png"/>`,
      image: "",
      options: [
        `<img align="absmiddle" alt="" src="js/questions/ec_2026_ga_1/img_36.png"/>`,
        `<img align="absmiddle" alt="" src="js/questions/ec_2026_ga_1/img_37.png"/>`,
        `<img align="absmiddle" alt="" src="js/questions/ec_2026_ga_1/img_38.png"/>`,
        `<img align="absmiddle" alt="" src="js/questions/ec_2026_ga_1/img_39.png"/>`,
      ],
      answer: "C",
      solution: `From the given unfolded cube, star and dot appear opposite to each other and thus, cannot be<br/>adjacent to each other. Hence, the cube depicted in option (c) cannot be made.`
    },

    {
      marks: 1,
      neg: 0,
      type: "NAT",
      text: `In a rare coin collection, there is one gold coin for every three non-gold coins. 10 more gold coins are added to the collection and the ratio of gold coins to non-gold coins becomes 1 : 2. Based on the information, the total number of coins in the collection now becomes ____.`,
      image: "",
      options: [
      ],
      answer: 90,
      solution: `<img alt="" src="js/questions/ec_2026_ga_1/img_2.png"/>`
    },

    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `A cuboid has six sides of different colours. The red side is opposite to black. The blue side is adjacent to white. The brown side is adjacent to blue. The red side is face down. Which one of the following would be the opposite to brown?`,
      image: "",
      options: [
        `Red`,
        `Black`,
        `While`,
        `Blue`,
      ],
      answer: "C",
      solution: `<img alt="" src="js/questions/ec_2026_ga_1/img_9.png"/>`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `Consider the following statements:<br/>There are six villages <em>A</em> , <em>B</em> , <em>C</em> , <em>D</em> , <em>E</em> and <em>F</em> .<br/><em>F</em> is 1 km to the west of <em>D</em> .<br/><em>B</em> is 1 km to the east of <em>E</em> .<br/><em>A</em> is 2 km to the north of <em>E</em> .<br/><em>C</em> is 1 km to the east of <em>A</em> .<br/><em>D</em> is 1 km to the south of <em>A</em> .<br/>Which three villages are in a line?`,
      image: "",
      options: [
        `<em>A</em> , <em>C</em> , <em>B</em>`,
        `<em>A</em> , <em>D</em> , <em>E</em>`,
        `<em>C</em> , <em>B</em> , <em>F</em>`,
        `<em>E</em> , <em>B</em> , <em>D</em>`,
      ],
      answer: "B",
      solution: `<img alt="" src="js/questions/ec_2026_ga_1/img_10.png"/>`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `The piechart given below shows the distribution of workforce by occupational category for country <em>X</em> in 1981 and 1995. Study the chart and answer the below question.<br/><img alt="" src="js/questions/ec_2026_ga_1/img_12.png"/><br/>The percentage decrease in the number of Blue-Collar workers in the workforce of country <em>X </em> from 1981 to 1995 is`,
      image: "",
      options: [
        `20%`,
        `<img align="absmiddle" alt="" src="js/questions/ec_2026_ga_1/img_13.png"/>`,
        `<img align="absmiddle" alt="" src="js/questions/ec_2026_ga_1/img_14.png"/>`,
        `35%`,
      ],
      answer: "B",
      solution: `<img alt="" src="js/questions/ec_2026_ga_1/img_15.png"/>`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `Consider the following statements:<br/>1. All artists are whimsical.<br/>2. Some artists are drug addicts.<br/>3. Frustrated people are prone to become drug addicts.<br/>From the above three statements, it may be concluded that`,
      image: "",
      options: [
        `Artists are frustrated`,
        `Some drug addicts are whimsical`,
        `Whimsical people are generally frustrated`,
        `All frustrated people are drug addicts`,
      ],
      answer: "B",
      solution: `<img alt="" src="js/questions/ec_2026_ga_1/img_16.png"/>`
    },

    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `Choose the mirror image of following figure.<br/><img alt="" src="js/questions/ec_2026_ga_1/img_5.png"/>`,
      image: "",
      options: [
        `I`,
        `II`,
        `III`,
        `IV`,
      ],
      answer: "C",
      solution: `<img alt="" src="js/questions/ec_2026_ga_1/img_6.png"/>`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `A square paper is folded in a particular manner and a punch is made. When unfolded the paper appears as given below :<br/><img alt="" src="js/questions/ec_2026_ga_1/img_20.png"/><br/>Select the manner in which the paper is folded and punch is made from the responses given.`,
      image: "",
      options: [
        `<img align="absmiddle" alt="" src="js/questions/ec_2026_ga_1/img_21.png"/>`,
        `<img align="absmiddle" alt="" src="js/questions/ec_2026_ga_1/img_22.png"/>`,
        `<img align="absmiddle" alt="" src="js/questions/ec_2026_ga_1/img_23.png"/>`,
        `<img align="absmiddle" alt="" src="js/questions/ec_2026_ga_1/img_24.png"/>`,
      ],
      answer: "D",
      solution: `<img alt="" src="js/questions/ec_2026_ga_1/img_25.png"/>`
    },
    {
      marks: 2,
      neg: 0.66,
      type: "MCQ",
      text: `Amar, Akbar and Anthony are friends, being looked after by a matron Farah. Amar weighs 50% more than Akbar and Anthony weighs 25% less than Amar. Farah weighs a third of the combined weight of three boys. All four together weigh 232 kg. The correct arrangement of the persons in the descending order of their weights is`,
      image: "",
      options: [
        `Amar, Farah, Akbar, Anthony`,
        `Farah, Amar, Akbar, Anthony`,
        `Farah, Amar, Anthony, Akbar`,
        `Amar, Farah, Anthony, Akbar`,
      ],
      answer: "D",
      solution: `<img alt="" src="js/questions/ec_2026_ga_1/img_3.png"/>`
    },
    {
      marks: 2,
      neg: 0.66,
      type: "MCQ",
      text: `Consider the following figure and answer the item that follows:<br/><img alt="" src="js/questions/ec_2026_ga_1/img_7.png"/><br/>A square is divided into four rectangles as shown above. The length of the sides of rectangles are natural numbers, and the areas of two rectangles are indicated in the figure. What is the length of each side of the square?`,
      image: "",
      options: [
        `10`,
        `11`,
        `15`,
        `cannot be determined as the given data insufficient`,
      ],
      answer: "B",
      solution: `<img alt="" src="js/questions/ec_2026_ga_1/img_8.png"/>`
    },

    {
      marks: 2,
      neg: 0.66,
      type: "MCQ",
      text: `The digits of a three digit number <em>x</em> are written in the reverse order to form another three digit number y. If <em>y</em> &gt; <em>x</em> and y – <em>x</em> is perfectly divisible by 7, then which of the following is maximum possible value of x?`,
      image: "",
      options: [
        `108`,
        `156`,
        `208`,
        `299`,
      ],
      answer: "D",
      solution: `<img alt="" src="js/questions/ec_2026_ga_1/img_1.png"/>`
    },
    {
      marks: 2,
      neg: 0.66,
      type: "MCQ",
      text: `<em>A</em> , <em>B</em> , <em>C</em> , <em>D</em> , <em>E</em> and <em>F</em> are cousins. No two cousins are of the same age, but all have birthdays on the same day of the same month. The Youngest is 17 years old and the oldest <em>E</em> is 22 years old. <em>F</em> is somewhere between <em>B</em> and <em>D</em> in age. <em>A</em> is older than <em>B</em> . <em>C</em> is older than <em>D</em> . <em>A</em> is one year<br/>older than <em>C</em> . Which one of the following is possible?`,
      image: "",
      options: [
        `<em>D</em> is 20 years old`,
        `<em>F</em> is 18 years old`,
        `<em>F</em> is 19 years old`,
        `<em>F</em> is 20 years old`,
      ],
      answer: "B",
      solution: `<img alt="" src="js/questions/ec_2026_ga_1/img_4.png"/>`
    },
    {
      marks: 2,
      neg: 0.66,
      type: "MCQ",
      text: `<em>A</em> , <em>B</em> , <em>C</em> , <em>D</em> , <em>E</em> and <em>F</em> not necessarilly in that order, are sitting in six chairs regularly placed around a round table. It is observed that <em>A</em> is between <em>D</em> and <em>F</em> , <em>C</em> is opposite to <em>D</em> and <em>D</em> and <em>E</em> are not on neighbouring chairs. Which of the following pairs must be sitting on neighbouring chairs?`,
      image: "",
      options: [
        `<em>A</em> and <em>B</em>`,
        `<em>C</em> and <em>E</em>`,
        `<em>B</em> and <em>F</em>`,
        `<em>A</em> and <em>C</em>`,
      ],
      answer: "B",
      solution: `<img alt="" src="js/questions/ec_2026_ga_1/img_11.png"/>`
    },

    {
      marks: 2,
      neg: 0.66,
      type: "MCQ",
      text: `The value of <img align="absmiddle" alt="" src="js/questions/ec_2026_ga_1/img_17.png"/>is`,
      image: "",
      options: [
        `0`,
        `0.4`,
        `2.2`,
        `4.4`,
      ],
      answer: "D",
      solution: `<img alt="" src="js/questions/ec_2026_ga_1/img_18.png"/>`
    },
    {
      marks: 2,
      neg: 0,
      type: "NAT",
      text: `The number of 4-digit integers in the closed interval [2022, 4482] formed by using the digits 0, 2, 3, 4, 6, 7 is`,
      image: "",
      options: [
      ],
      answer: 569,
      solution: `<img alt="" src="js/questions/ec_2026_ga_1/img_19.png"/>`
    },

    {
      marks: 2,
      neg: 0.66,
      type: "MCQ",
      text: `At a point on ground, the angle of elevation of a vertical tower, is found to be such that it’s tangent is <img align="absmiddle" alt="" src="js/questions/ec_2026_ga_1/img_26.png"/> On walking 192 meters towards the tower, the tangent of the angle of elevation is found to be <img align="absmiddle" alt="" src="js/questions/ec_2026_ga_1/img_27.png"/>The height of the tower is`,
      image: "",
      options: [
        `180 meters`,
        `160 meters`,
        `240 meters`,
        `260 meters`,
      ],
      answer: "A",
      solution: `<img alt="" src="js/questions/ec_2026_ga_1/img_28.png"/>`
    },
  ]
});

registerTest({   // made easy ece 2026 topic wise test general Aptitude-2
  series: "ece-gate-pyq",
  name: "TWT - General Aptitude-2",
  date: "aug 12, 2026",
  questions: [
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `Select the part (option) of the below sentence that contains an error :<br/>He was consulted seldom by his colleagues while making important decisions on financial matters.`,
      image: "",
      options: [
        `He was consulted seldom`,
        `Decisions on financial matters`,
        `By his colleagues`,
        `While making important`,
      ],
      answer: "A",
      solution: `The adverb of frequency, “seldom,”should typically be placed before the main verb “consulted.”<br/>Thus, the correct sentence is:<br/>He was seldom consulted by his collegues while making important decisions on financial matters.`
    },

    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `If MOBILE is written as ZAMSUM, how TUMOR can be written in that code?`,
      image: "",
      options: [
        `BRAIN`,
        `HGYAD`,
        `GGXYA`,
        `IHZBE`,
      ],
      answer: "C",
      solution: `<img alt="" src="js/questions/topicwise_test_12_part_syllabus_gate_2026_ec_general_aptitude_2/img_1.png"/>`
    },

    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `Select the related word from the given alternatives that fits the analogy.<br/>FLEXIBLE : RIGID : : CONFIDENCE : ?`,
      image: "",
      options: [
        `Diffidence`,
        `Indifference`,
        `Cowardice`,
        `Scare`,
      ],
      answer: "A",
      solution: `“Flexible ”and “Rigid ”are antonyms. Diffidence meaning shyness or lack of confidence is the<br/>opposite of confidence. Thus, option (a) is correct.`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `Select the related word from the given alternatives that fits the analogy:<br/>Horse : Neigh :: Bells : ?`,
      image: "",
      options: [
        `Beat`,
        `Chime`,
        `Rustle`,
        `Roar`,
      ],
      answer: "B",
      solution: `A horse produces a neigh sound, similarly bells produce a chime sound. Therefore, the correct answer is Chime.`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `In questions no. 12 and 13, one/two statements are given followed by two/three conclusions. You have to consider the statements to be true even if they seem to be at variance from commonly known facts. You have to decide which of the given conclusions, if any, follows from the given statements. <strong>Statement:</strong><br/>Sun is the source of light.<br/><strong>Conclusions:</strong><br/>I. Moon is not the source of light<br/>II. Light has only one source.`,
      image: "",
      options: [
        `Only conclusion (I) follows`,
        `Only conclusion (II) follows`,
        `Both conclusions (I) and (II) follow`,
        `Neither conclusion (I) nor (II) follows`,
      ],
      answer: "D",
      solution: `The statement only mentions sun as a source of light but it does not deny other sources (like Moon,<br/>bulbs, fire etc.) and it does not say sun is the only source. Therefore, both conclusions are wrong.`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<strong>Statement:</strong><br/>I. All cities are towns.<br/>II. Some cities are villages.<br/><strong>Conclusions:</strong><br/>I. All villages are towns.<br/>II. No village is a town.<br/>III. Some villages are towns.`,
      image: "",
      options: [
        `Only conclusion (III) follows`,
        `Only conclusion (I) follows`,
        `Only conclusion (II) follows`,
        `None of these`,
      ],
      answer: "A",
      solution: `Some cities are villages, and all cities are towns. So, those villages (which are cities) are also<br/>towns. Hence, some villages are towns.<br/>So, only conclusion III is correct.`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `Which one of the following diagrams best depicts the relationship among Earth, Sea and Sun?`,
      image: "",
      options: [
        `<img align="absmiddle" alt="" src="js/questions/topicwise_test_12_part_syllabus_gate_2026_ec_general_aptitude_2/img_4.png"/>`,
        `<img align="absmiddle" alt="" src="js/questions/topicwise_test_12_part_syllabus_gate_2026_ec_general_aptitude_2/img_5.png"/>`,
        `<img align="absmiddle" alt="" src="js/questions/topicwise_test_12_part_syllabus_gate_2026_ec_general_aptitude_2/img_6.png"/>`,
        `<img align="absmiddle" alt="" src="js/questions/topicwise_test_12_part_syllabus_gate_2026_ec_general_aptitude_2/img_7.png"/>`,
      ],
      answer: "D",
      solution: `Sea is a part of the Earth and Sun is a separated celestial body, not a part of the earth. Thus,<br/>option (d) best depicts the relationship among Earth, Sea and Sun.`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `In the given diagram, circle represents professionals, square represents dancers, triangle represents musicians and rectangle represents Europeans. Different regions in the diagram are numbered 1 to 11. Who among the following is neither a dancer nor a musician but is professional and not a European?<br/><br/><img alt="" src="js/questions/topicwise_test_12_part_syllabus_gate_2026_ec_general_aptitude_2/img_3.png"/>`,
      image: "",
      options: [
        `8`,
        `11`,
        `1`,
        `10`,
      ],
      answer: "D",
      solution: `The people who are neither dancers nor musicians but are professionals and not Europeans,<br/>means part of circle excluding common of circle with Triangle, square and rectangle i.e.<br/>Region “10 ”.`
    },

    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `Choose the correct alternative to fill in the blank in the sentence given below.<br/>Today student should be reconciled _____ the way things are changing.`,
      image: "",
      options: [
        `with`,
        `to`,
        `for`,
        `at`,
      ],
      answer: "A",
      solution: `With is used with reconcile.<br/>Reconcile →To make oneself or another no longer opposed.<br/>Here, with is the right usage.`
    },
    {
      marks: 2,
      neg: 0,
      type: "MSQ",
      text: `The World Health Organisation is briefly called W.H.O. It is a specialised agency of the United Nations and was established in 1948. International health workers can be seen working in all kinds of surroundings: in deserts, jungles, mountains, coconut groves, and rice fields. They help the sick to attain health and the healthy to maintain their health. This global health team assists the local health workers in stopping the spread of what are called communicable diseases, like cholera. These diseases can spread from one country to another and so can be a threat to world health. W.H.O. assists different national health authorities not only in controlling diseases but also in preventing them altogether. Total prevention of diseases is possible in a number of ways. Everyone knows how people, particularly children, are vaccinated against one disease or another. Similarly, most people are familiar with the spraying of houses with poisonous substances which kill disease-carrying insects.<br/>"It is a specialised agency of the United Nations and was established in 1948.” Here specialised means`,
      image: "",
      options: [
        `expert`,
        `extraordinary`,
        `uncommon`,
        `made suitable for a particular purpose`,
      ],
      answer: ["D"],
      solution: `The word “specialised ”refers to something that is focused on a specific area or purpose rather<br/>than being general. In the sentence, W.H.O. is described as a specialised agency —meaning it is<br/>an agency that deals specifically with health matters, not with everything else. Thus, “made<br/>suitable for a particular purpose ”is the most accurate meaning.<br/>(A) expert: relates to skill, but “specialised ”here talks about focus, not expertise.<br/>(B) extraordinary: means very special or unusual —not the meaning here.<br/>(C) uncommon: means rare —not the intended meaning.`
    },
    {
      marks: 2,
      neg: 0.66,
      type: "MCQ",
      text: `If × stands for addition, <for +="" division,="" for="" subtraction,="">for multiplication, – for equal to, ÷ for greater than and = for less than, state which of the following expressions is true? </for>`,
      image: "",
      options: [
        `3 × 2 &lt;4 ÷ 16&gt;2 + 4`,
        `5 &gt; 8 + 4 = 10 &lt;4 × 2`,
        `3 × 4 &gt; 2 – 9 + 3 &lt;3`,
        `5 × 3 × 3 ÷ 8 + 4 × 1`,
      ],
      answer: "D",
      solution: `<img alt="" src="js/questions/topicwise_test_12_part_syllabus_gate_2026_ec_general_aptitude_2/img_2.png"/>`
    },
    {
      marks: 2,
      neg: 0.66,
      type: "MCQ",
      text: `Select the alternative which is the best substitute of the sentence/word:<br/>Take away or alter the natural qualities of`,
      image: "",
      options: [
        `Denature`,
        `Unadulterated`,
        `Authentic`,
        `Limpid`,
      ],
      answer: "A",
      solution: `Denature : Changed from its natural state.<br/>Unadulterated : Pure, not mixed or diluted with any different or extra elements.<br/>Authentic : Genuine, real, not fake or copied. An authentic document is the original, not a duplicate<br/>or forgery.<br/>Limpid : Clear, transparent, often used for liquids, but also can describe clear writing or thought.`
    },
    {
      marks: 2,
      neg: 0.66,
      type: "MCQ",
      text: `Out of given alternatives, choose the one which best expresses the meaning of the word, Envoy`,
      image: "",
      options: [
        `Carrier`,
        `Chief`,
        `Ambassador`,
        `Receiver`,
      ],
      answer: "C",
      solution: `The word “Envoy ”refers to a person who is sent as a representative, often on a diplomatic<br/>mission. An ambassador is a senior diplomat or envoy representing a country. So, “Ambassador ”<br/>best expresses the meaning of the word “Envoy ”.`
    },
    {
      marks: 2,
      neg: 0.66,
      type: "MCQ",
      text: `Choose the word opposite in meaning for the underlined word:<br/>The hot summer afternoon made everyone feel <u>languid</u> and they sought refuge in the shade to escape the heat.`,
      image: "",
      options: [
        `Listless`,
        `Energetic`,
        `Lethargic`,
        `Sluggish`,
      ],
      answer: "B",
      solution: `The word “Languid ”means lacking energy, weak, or slow-often due to fatigue, illness, or heat.<br/>In the context of the sentence, the hot summer afternoon made everyone feel fired and drained.<br/>Hence, “Energetic ”is the opposite in the meaning to “languid ”.`
    },
    {
      marks: 2,
      neg: 0.66,
      type: "MCQ",
      text: `In the following question, the passage/sentence is split into four parts A, B, C and D. These four parts are not given in their proper order. Read the sentence and find out which of the following four combinations is correct.<br/>A. Explained angrily<br/>B. The bricklayer<br/>C. Leaving the site<br/>D. His reasons for`,
      image: "",
      options: [
        `BADC`,
        `DCAB`,
        `CBAD`,
        `ADCB`,
      ],
      answer: "A",
      solution: `The bricklayer explained angrily his reasons for leaving the site. Hence, the correct order is BADC.`
    },
    {
      marks: 2,
      neg: 0.66,
      type: "MCQ",
      text: `If ‘PUNCTUATION’ is coded as ‘QVODUVBUJPO’ and ‘SING’ as ‘TJOH’, then how is ‘PARLIAMENT’ coded?`,
      image: "",
      options: [
        `QBSMJKNFMU`,
        `QBSMJBNFOU`,
        `QTBSMJOFOU`,
        `QASTMJNFOU`,
      ],
      answer: "B",
      solution: `<img alt="" src="js/questions/topicwise_test_12_part_syllabus_gate_2026_ec_general_aptitude_2/img_8.png"/>`
    },
    {
      marks: 2,
      neg: 0.66,
      type: "MCQ",
      text: `Arrange the following four sentences P, Q, R and S in the proper sequence to form a meaningful<br/>paragraph starting from 1 and ending with 6.<br/>1. Communication has been an important aspect all through the ages.<br/>P. E-mail is a convenient way to deliver any requested information.<br/>Q. Today instantaneous communication is vital.<br/>R. Voice is often easier than e-mail, but it is not as easy to create and send nor is it possible to send the same message to a large number of people in different places in the world.<br/>S. It is also a good way to communicate with multiple people at the same time; but e-mail is only one form for communication.<br/>6. The other forms of faster and easier communication are being explored.<br/>Which one of the following is the correct sequence?`,
      image: "",
      options: [
        `SQRP`,
        `QPSR`,
        `SPRQ`,
        `RQSP`,
      ],
      answer: "B",
      solution: `(b)`
    },
  ]
});

registerTest({   // made easy ece 2026 Subject wise test Digital circuit
  series: "ece-gate-pyq",
  name: "SWT - Digital Circuit",
  date: "july 11, 2026",
  questions: [
  ]
});

registerTest({   // made easy ece 2026 Subject wise test Analog circuit
  series: "ece-gate-pyq",
  name: "SWT - Analog Circuit",
  date: "july 14, 2026",
  questions: [
  ]
});

registerTest({   // made easy ece 2026 Subject wise test Networks
  series: "ece-gate-pyq",
  name: "SWT - Networks",
  date: "july 11, 2026",
  questions: [
  ]
});

registerTest({   // made easy ece 2026 Subject wise test Control system
  series: "ece-gate-pyq",
  name: "SWT - Control System",
  date: "july 20, 2026",
  questions: [
  ]
});

registerTest({   // made easy ece 2026 Subject wise test Signals & systems
  series: "ece-gate-pyq",
  name: "SWT - Signals & Systems",
  date: "july 28, 2026",
  questions: [
  ]
});

registerTest({   // made easy ece 2026 Subject wise test Electronic Devices
  series: "ece-gate-pyq",
  name: "SWT - Electronic Devices",
  date: "july 16, 2026",
  questions: [
  ]
});

registerTest({   // made easy ece 2026 Subject wise test digital Communication
  series: "ece-gate-pyq",
  name: "SWT - digital Communication System",
  date: "aug 03, 2026",
  questions: [
  ]
});

registerTest({   // made easy ece 2026 Subject wise test electromagnetic
  series: "ece-gate-pyq",
  name: "SWT - Electromagnetic",
  date: "july 30, 2026",
  questions: [
  ]
});

registerTest({   // made easy ece 2026 Subject wise test COA
  series: "ece-gate-pyq",
  name: "SWT - COA",
  date: "aug 12, 2026",
  questions: [
  ]
});

registerTest({   // made easy ece 2026 Subject wise test Engineering Mathematics
  series: "ece-gate-pyq",
  name: "SWT - Engineering Mathematics",
  date: "july 25, 2026",
  questions: [
  ]
});

registerTest({   // made easy ece 2026 Subject wise test General Aptitude
  series: "ece-gate-pyq",
  name: "SWT - General Aptitude",
  date: "july 23, 2026",
  questions: [
  ]
});

registerTest({   // made easy ece 2026 Subject wise test Analog communication system
  series: "ece-gate-pyq",
  name: "SWT - Analog communication system",
  date: "aug 01, 2026",
  questions: [
  ]
})




registerTest({   // go classes cse topic wise test degital logic-1 
  series: "cs-gate-classes",
  name: "TWT - Digital Logic-1",
  date: "July 07, 2026",
  questions: [
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: "Let A, B, C be three boolean variables. &oplus; and &odot; are exclusive-or(ExOr) and exclusive-nor(ExNor) operations respectively.<br>Consider the following statements:",
      image: "",
      options: [
        "(A &oplus; B) &oplus; C = A &oplus; (B &oplus; C)",
        "(A &odot; B) &odot; C = A &odot; (B &odot; C)",
        "A &oplus; B &oplus; C = A &odot; B &odot; C",
        "A &oplus; B &oplus; C = <span style='text-decoration: overline;'>(A &odot; B &odot; C)</span>"
      ],
      answer: "C",
      solution: "<img src='js/questions/go digital-1/7.png' alt='solution' style='max-width:100%; border-radius: 8px;'>",
    },
    {
      marks: 1,
      neg: 0,
      type: "NAT",
      text: "An XOR gate with 7 variables(inputs) is being developed. Number of different input combinations for which output is 1?",
      image: "",
      answer: 64,
      solution: "<img src='js/questions/go digital-1/8.png' alt='solution' style='max-width:100%; border-radius: 8px;'>",
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: "The possible number of Boolean function of 3 variables X, Y and Z such that f(X, Y, Z) = f(X', Y', Z')",
      image: "",
      options: [
        "8",
        "16",
        "64",
        "32"
      ],
      answer: "B",
      solution: "<img src='js/questions/go digital-1/9.png' alt='solution' style='max-width:100%; border-radius: 8px;'>",
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: "The table in the figure above shows the binary-coded-decimal (BCD) representation of the digits 0 through 9. The Boolean expression that represents the set of invalid codes is",
      image: "js/questions/go digital-1/2.png",
      options: [
        "A &or; BC",
        "AB &or; CD",
        "AB &or; AC",
        "AB &or; AD"
      ],
      answer: "C",
      solution: "Let f = Set of invalid codes minterms = 10, 11, 12, 13, 14, 15<br>f = AC + AB<br><br><img src='js/questions/go digital-1/3.jpg' alt='K-map Solution' style='max-width:100%; border-radius: 8px;'>",
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: "Gray code for some natural number <i>n</i> is 1111 1111 and it is stored in an 8-bit register R. If we store the Gray code of <i>n</i> + 1 in R then what will be the content of R?",
      image: "",
      options: [
        "0000 0000",
        "1010 1011",
        "1111 1110",
        "Cannot store gray code of <i>n</i> + 1 in an 8 bit register."
      ],
      answer: "C",
      solution: "<img src='js/questions/go digital-1/10.png' alt='solution' style='max-width:100%; border-radius: 8px;'>",
    },
    {
      marks: 2,
      neg: 0,
      type: "MSQ",
      text: "Consider the Karnaugh map below for a boolean function F(x, y, z, w).<br><br>Which of the following is/are an implicant that's neither a prime implicant, nor a minterm of function F?",
      image: "js/questions/go digital-1/1.png",
      options: [
        "yw'",
        "yzw'",
        "x'z'",
        "x'yz'w"
      ],
      answer: ["B"],
      solution: "<img src='js/questions/go digital-1/11.png' alt='solution' style='max-width:100%; border-radius: 8px;'>",
    },
    {
      marks: 2,
      neg: 0.66,
      type: "MCQ",
      text: "Consider five seats, numbered 0 to 4, arranged in a circle and described by Boolean variables i<sub>0</sub> to i<sub>4</sub>. Boolean variable i<sub>0</sub> is true if seat 0 is occupied and i<sub>0</sub> is false if the seat is not occupied (no one is sitting in the seat), likewise for i<sub>1</sub>, i<sub>2</sub>, i<sub>3</sub>, and i<sub>4</sub>.<br><br>Which of the following Boolean expressions is true iff at least two people are sitting next to each other and at least one seat is not occupied?",
      image: "",
      options: [
        "(i<sub>0</sub>i<sub>1</sub> + i<sub>1</sub>i<sub>2</sub> + i<sub>2</sub>i<sub>3</sub> + i<sub>3</sub>i<sub>4</sub> + i<sub>4</sub>i<sub>0</sub>) <span style='text-decoration: overline;'>(i<sub>0</sub>i<sub>1</sub>i<sub>2</sub>i<sub>3</sub>i<sub>4</sub>)</span>",
        "(i<sub>0</sub>i<sub>1</sub> + i<sub>1</sub>i<sub>2</sub> + i<sub>2</sub>i<sub>3</sub> + i<sub>3</sub>i<sub>4</sub> + i<sub>4</sub>i<sub>0</sub>) (i<sub>0</sub>i<sub>1</sub>i<sub>2</sub>i<sub>3</sub>i<sub>4</sub>)",
        "(i<sub>0</sub>i<sub>1</sub> + i<sub>1</sub>i<sub>2</sub> + i<sub>2</sub>i<sub>3</sub> + i<sub>3</sub>i<sub>4</sub> + i<sub>4</sub>i<sub>0</sub>)",
        "None"
      ],
      answer: "A",
      solution: "<img src='js/questions/go digital-1/12.png' alt='solution' style='max-width:100%; border-radius: 8px;'>",
    },
    {
      marks: 2,
      neg: 0.66,
      type: "MCQ",
      text: "Let <i>f</i> be a boolean function on <i>n</i> boolean variables (<i>x</i><sub>1</sub>, <i>x</i><sub>2</sub>, ..., <i>x<sub>n</sub></i>). We say a variable <i>x<sub>i</sub></i> is dummy in boolean function <i>f</i> if <i>f</i>(<i>x</i><sub>1</sub>, ..., <i>x<sub>i-1</sub></i>, 0, <i>x<sub>i+1</sub></i>, ..., <i>x<sub>n</sub></i>) = <i>f</i>(<i>x</i><sub>1</sub>, ..., <i>x<sub>i-1</sub></i>, 1, <i>x<sub>i+1</sub></i>, ..., <i>x<sub>n</sub></i>) for all the possible values of the other variables (i.e., variables except <i>x<sub>i</sub></i>). A variable <i>x<sub>k</sub></i> is said to be Non-dummy in function <i>f</i> if <i>x<sub>k</sub></i> is not a dummy variable in <i>f</i>.<br><br>Consider the following statements regarding the minimized expression of the function <i>f</i>:<br>1. A dummy variable is Never present (in original form or complemented form) in any minimized expression of <i>f</i>.<br>2. A dummy variable is always present (in original form or complemented form) in every minimized expression of <i>f</i>.<br>3. A dummy variable may be present (in original form or complemented form) in some minimized expression of <i>f</i>.<br>4. A Non-dummy variable is Always present (in original form or complemented form) in every minimized expression of <i>f</i>.<br>5. A Non-dummy variable may not be present (in original form or complemented form) in some minimized expression of <i>f</i>.<br><br>Which of the above statements is True?",
      image: "",
      options: [
        "Only 1",
        "Only 2, 4",
        "Only 1, 4",
        "Only 3, 5"
      ],
      answer: "C",
      solution: "<img src='js/questions/go digital-1/13.png' alt='solution' style='max-width:100%; border-radius: 8px;'>",
    },
    {
      marks: 2,
      neg: 0,
      type: "NAT",
      text: "Let <i>f</i> be a boolean function on <i>n</i> boolean variables (X<sub>1</sub>, X<sub>2</sub>, ..., X<sub>n</sub>).<br><br>We say a variable X<sub>i</sub> is dummy in boolean function <i>f</i> if<br><i>f</i>(X<sub>1</sub>, ..., X<sub>i-1</sub>, 0, X<sub>i+1</sub>, ..., X<sub>n</sub>) = <i>f</i>(X<sub>1</sub>, ..., X<sub>i-1</sub>, 1, X<sub>i+1</sub>, ..., X<sub>n</sub>)<br>for all the possible values of the other variables (i.e. variables except X<sub>i</sub>).<br><br>i.e. a variable X<sub>i</sub> is called dummy if, whenever we complement the value of X<sub>i</sub> in any row of the truth table of <i>f</i>, then the value of <i>f</i> doesn't change.<br><br>Number of boolean functions on 8 variables (<i>x</i><sub>1</sub>, <i>x</i><sub>2</sub>, ..., <i>x</i><sub>8</sub>) such that <i>x</i><sub>1</sub>, <i>x</i><sub>2</sub>, <i>x</i><sub>3</sub>, <i>x</i><sub>4</sub> are dummy variables in those functions, is __________.",
      image: "",
      answer: 65536,
      solution: "<img src='js/questions/go digital-1/14.png' alt='solution' style='max-width:100%; border-radius: 8px;'>",
    },
    {
      marks: 2,
      neg: 0, // MSQ questions usually have 0 negative marking
      type: "MSQ",
      text: "Let R1 and R2 be two 4-bit registers that store numbers in 1's complement form. For the operation R1 + R2, which one of the following values of R1 and R2 gives an arithmetic overflow?",
      image: "",
      options: [
        "R1 = 1011 and R2 = 1110",
        "R1 = 1100 and R2 = 1010",
        "R1 = 1111 and R2 = 1000",
        "R1 = 1001 and R2 = 1111"
      ],
      answer: ["B"],
      solution: "<img src='js/questions/go digital-1/15.png' alt='solution' style='max-width:100%; border-radius: 8px;'><br><img src='js/questions/go digital-1/16.png' alt='solution' style='max-width:100%; border-radius: 8px;'>"
    },
    {
      marks: 2,
      neg: 0.66,
      type: "MCQ",
      text: "The literal count of a Boolean expression is the sum of the number of times each literal appears in the expression. For example, the literal count of (<i>xy</i> + <i>xz'</i> + <i>x'y</i>) is 6. Let <i>f</i> be some fully-specified function on <i>n</i> variables, <i>n</i> &ge; 4.<br><br>Which of the following statement is necessarily true for <i>f</i> :",
      image: "",
      options: [
        "The minimised SOP (sum of product) and minimised POS (product of sum) forms have the same literal count.",
        "The minimised POS form has smaller literal count than the minimised SOP form.",
        "The minimised SOP form has smaller literal count than the minimised POS form.",
        "None of the above."
      ],
      answer: "D",
      solution: "<img src='js/questions/go digital-1/4.jpg' alt='Solution' style='max-width:100%; border-radius: 8px;'>"
    },
    {
      marks: 2,
      neg: 0.66,
      type: "MCQ",
      text: "Consider two 2-bit numbers <i>A</i> = <i>a</i><sub>1</sub><i>a</i><sub>0</sub> and <i>B</i> = <i>b</i><sub>1</sub><i>b</i><sub>0</sub>. The value of a 2-bit number <i>X</i> = <i>x</i><sub>1</sub><i>x</i><sub>0</sub> is defined as:<br><i>v</i>(<i>X</i>) = <i>x</i><sub>1</sub> &times; 2<sup>1</sup> + <i>x</i><sub>0</sub> &times; 2<sup>0</sup><br><br>Assume that A and B are such that |<i>v</i>(A) - <i>v</i>(B)| &le; 2. A four-variable function <i>f</i>(<i>a</i><sub>1</sub>, <i>a</i><sub>0</sub>, <i>b</i><sub>1</sub>, <i>b</i><sub>0</sub>) is to have value 1 whenever <i>v</i>(A) &le; <i>v</i>(B), and value 0 otherwise.<br><br>The number of prime implicants and essential prime implicants for this function <i>f</i>, respectively, are",
      image: "",
      options: [
        "5, 5",
        "5, 4",
        "6, 5",
        "6, 4"
      ],
      answer: "A",
      solution: "<img src='js/questions/go digital-1/5.jpeg' alt='Solution' style='max-width:100%; border-radius: 8px;'>"
    },
    {
      marks: 2,
      neg: 0.66,
      type: "MCQ",
      text: "<i>F</i> is a boolean function in five boolean variables <i>a, b, c, d</i> and <i>e</i>.<br><br><i>F</i>(<i>a, b, c, d, e</i>) = &sum;(0, 1, 7, 8, 14, 15, 16, 17, 29, 30, 31)<br><br>Let <i>D</i> be the Dual of function <i>F</i>. Then which of the following is Not a subset of (true) minterms of <i>D</i>?",
      image: "",
      options: [
        "3, 4, 5, 6, 27, 28",
        "7, 8",
        "3, 4, 5, 6, 7, 8",
        "3, 4, 7, 8, 23, 24, 29"
      ],
      answer: "D",
      solution: "<img src='js/questions/go digital-1/17.png' alt='Solution' style='max-width:100%; border-radius: 8px;'>"
    },
    {
      marks: 2,
      neg: 0,
      type: "NAT",
      text: "How many boolean functions on 4 Variables are there whose dual is the same as their complement i.e. a function <i>f</i> for which <span style='text-decoration: overline;'>f</span> = <i>f<sub>dual</sub></i>?",
      image: "",
      answer: 256,
      solution: "<img src='js/questions/go digital-1/6.png' alt='Solution' style='max-width:100%; border-radius: 8px;'>"
    },
    {
      marks: 2,
      neg: 0,
      type: "NAT",
      text: "Consider a 4 input boolean function F(X, Y, Z, T).<br><br>The minterm X'Y'Z'T' is known to be in the Canonical SOP form of F.<br><br>What is the maximum number of minterms that the Canonical SOP form of F can have such that no simplification is possible (i.e. Canonical SOP form itself is the minimized SOP form)?",
      image: "",
      answer: 8,
      solution: "<img src='js/questions/go digital-1/18.png' alt='Solution' style='max-width:100%; border-radius: 8px;'>"
    }
  ]
});


registerTest({   // made easy 2026 cse topic wise test theory of computation-1
  series: "cse-gate-2026-pyq",
  name: "TWT - Theory Of Computation-1",
  date: "July 08, 2026",
  questions: [
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: "Which of the following statement is FALSE?",
      image: "",
      options: [
        "All recursive sets are recursively enumerable.",
        "The complement of every recursively enumerable sets is recursively enumerable.",
        "Every Non-empty recursively enumerable set is the range of some totally recursive function.",
        "All finite sets are recursive."
      ],
      answer: "B",
      solution: "The complement of every recursively enumerable sets is recursively enumerable.<br>Because RE language are not closed under complement."
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: "Let <em>r</em> , <em>s</em> , <em>t</em> be regular expressions. Which of the following identities is correct?",
      image: "",
      options: [
        "<img  alt=\"\" src=\"js/questions/easy_2026_TOC-1/1.png\" style=\"max-width:100%; border-radius: 8px;\">",
        "<img  alt=\"\" src=\"js/questions/easy_2026_TOC-1/2.png\" style=\"max-width:100%; border-radius: 8px;\">",
        "<img  alt=\"\" src=\"js/questions/easy_2026_TOC-1/3.png\" style=\"max-width:100%; border-radius: 8px;\">",
        "<img  alt=\"\" src=\"js/questions/easy_2026_TOC-1/4.png\" style=\"max-width:100%; border-radius: 8px;\">"
      ],
      answer: "D",
      solution: "<img  alt=\"\" src=\"js/questions/easy_2026_TOC-1/5.png\" style=\"max-width:100%; border-radius: 8px;\">"
    },
    {
      marks: 1,
      neg: 0,
      type: "MSQ",
      text: "Which of the following problems is decidable? (Here, CFG means context free grammar and CFL means context free language)",
      image: "",
      options: [
        "Given a CFG G, find whether <em>L</em> (<em>G</em> ) = <em>R</em> , where <em>R</em> is regular set.",
        "Given a CFG G, find whether <em>L</em> (<em>G</em> ) = { }.",
        "Find whether the intersection of two CFLs is empty.",
        "Find whether the complement of CFL is a CFL."
      ],
      answer: ["B"],
      solution: "(a) We don’t have any standard algorithm to change CFG into CFL from a given CFG deciding a language is finite is decidable but regular its undecidable.<br> (b) From a given CFG we can determine the CFL and CFL emptiness is decidable.<br> (c) Intersection of two CFL is undecidable because it is not closed under intersection.<br>(d) CFL is not closed under Complement so its undecidable."
    },
    {
      marks: 1,
      neg: 0,
      type: "MSQ",
      text: "Let M be the 5 stage NFA with ∈-transitions shown in the diagram below: <img  alt=\"\" src=\"js/questions/easy_2026_TOC-1/6.png\" style=\"max-width:100%; border-radius: 8px;\"> Which one of the following regular expressions represents the language accepted by M?",
      image: "",
      options: [
        "(00)* + 1(11)*",
        "0* + (1 + 0(00)*) (11)*",
        "(00)* + (1 + (00)*) (11)*",
        "0+ + 1(11)* + 0(11)*"
      ],
      answer: ["A"],
      solution: "•Counter-example for option (a) : 011 is not generated.<br> •Counter-example for option (c) : 000 is not generated.<br>•Counter-example for option (d) : empty string is not generated."
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MSQ",
      text: "<p>Which one of the following regular expressions is equivalent to the language accepted by the DFA given below?</p> <p> <img  alt=\"\" src=\"js/questions/easy_2026_TOC-1/7.png\" style=\"max-width:100%; border-radius: 8px;\"> </p>",
      image: "",
      options: [
        "0* 1(0 + 10* 1)*",
        "0* (10* 11)* 0*",
        "0* 1 (010* 1)* 0*",
        "0(1 + 0* 10* 1)* 0*"
      ],
      answer: ["A"],
      solution: "The given DFA accepts all and only binary strings containing odd number of 1 ’s.<br> So, option (a) is correct regular expression.<br> Option (b) Counter-Example: Generates empty string.<br> Option (c) Counter-Example: Doesn ’t generate 10011.<br>Option (d) Counter-Example: Doesn ’t generate 1. <br>"
    },
    {
      marks: 1,
      neg: 0,
      type: "NAT",
      text: "Let <em>L</em> <sub>1</sub> be the language represented by the regular expression (<em>a</em> + <em>b</em> )* <em>aba</em> (<em>a</em> + <em>b</em> )* and<br> <img  align=\"absmiddle\" alt=\"\" src=\"js/questions/easy_2026_TOC-1/8.png\" style=\"max-width:100%; border-radius: 8px;\">denotes the length of string w. Determine the number of strings in L2 that are also in L1 is ________.",
      image: "",
      options: [],
      answer: 16,
      solution: "<img  alt=\"\" src=\"js/questions/easy_2026_TOC-1/9.png\" style=\"max-width:100%; border-radius: 8px;\">"
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: "For s ∈ (0 + 1)* let d(s) denote the decimal value of s(e.g. d(101) = 5).<br> <img  alt=\"\" src=\"js/questions/easy_2026_TOC-1/10.png\" style=\"max-width:100%; border-radius: 8px;\"> <br>Which one of the following statements is true?",
      image: "",
      options: [
        "<em>L</em> is recursively enumerable, but not recursive.",
        "<em>L</em> is recursive, but not context-free.",
        "<em>L</em> is context-free, but not regular.",
        "<em>L</em> is regular."
      ],
      answer: "D",
      solution: "<img  alt=\"\" src=\"js/questions/easy_2026_TOC-1/11.png\" style=\"max-width:100%; border-radius: 8px;\">"
    },
    {
      marks: 1,
      neg: 0,
      type: "MSQ",
      text: "Which of the following statements are true for every language <em>L</em> ⊆ {0, 1}*?",
      image: "",
      options: [
        "<em>L</em> * is infinite.",
        "<em>L</em> is accepted by some DFA if and only if <em>L</em> is accepted by some NFA.",
        "If <em>L</em> is the union of two undecidable languages, then <em>L</em> is undecidable.",
        "If <em>L</em> is the union of two decidable languages, then <em>L</em> is decidable."
      ],
      answer: ["B", "D"],
      solution: "<img  alt=\"\" src=\"js/questions/easy_2026_TOC-1/12.png\" style=\"max-width:100%; border-radius: 8px;\">"
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: "Consider the regular expression <em>R</em> = (<em>a</em> + <em>b</em> )* (<em>aa</em> + <em>bb</em> ) (<em>a</em> + <em>b</em> )* Which of the following finite automata recognizes the language defined by the regular expression<br> <em>R</em> ? Edges labeled <img  align=\"absmiddle\" alt=\"\" src=\"js/questions/easy_2026_TOC-1/13.png\" style=\"max-width:100%; border-radius: 8px;\">denote transitions on the empty string.",
      image: "",
      options: [
        "<img  align=\"absmiddle\" alt=\"\" src=\"js/questions/easy_2026_TOC-1/14.png\" style=\"max-width:100%; border-radius: 8px;\">",
        "<img  align=\"absmiddle\" alt=\"\" src=\"js/questions/easy_2026_TOC-1/15.png\" style=\"max-width:100%; border-radius: 8px;\">",
        "<img  align=\"absmiddle\" alt=\"\" src=\"js/questions/easy_2026_TOC-1/16.png\" style=\"max-width:100%; border-radius: 8px;\">",
        "<img  align=\"absmiddle\" alt=\"\" src=\"js/questions/easy_2026_TOC-1/17.png\" style=\"max-width:100%; border-radius: 8px;\">"
      ],
      answer: "C",
      solution: "<img  alt=\"\" src=\"js/questions/easy_2026_TOC-1/18.png\" style=\"max-width:100%; border-radius: 8px;\">"
    },
    {
      marks: 2,
      neg: 0.66,
      type: "MCQ",
      text: "Which one of the following regular expressions over {<em>a</em> , <em>b</em> } denotes the set of all strings not containing “baa” as a substring?",
      image: "",
      options: [
        "<img  alt=\"\" src=\"js/questions/easy_2026_TOC-1/19.png\" style=\"max-width:100%; border-radius: 8px;\">",
        "<img  alt=\"\" src=\"js/questions/easy_2026_TOC-1/20.png\" style=\"max-width:100%; border-radius: 8px;\">",
        "<img  alt=\"\" src=\"js/questions/easy_2026_TOC-1/21.png\" style=\"max-width:100%; border-radius: 8px;\">",
        "<img  alt=\"\" src=\"js/questions/easy_2026_TOC-1/22.png\" style=\"max-width:100%; border-radius: 8px;\">"
      ],
      answer: "C",
      solution: "<img  alt=\"\" src=\"js/questions/easy_2026_TOC-1/23.png\" style=\"max-width:100%; border-radius: 8px;\">"
    },
    {
      marks: 2,
      neg: 0.66,
      type: "MCQ",
      text: "<p>Consider the following context-free grammar G:</p> <p> <img  alt=\"\" src=\"js/questions/easy_2026_TOC-1/24.png\" style=\"max-width:100%; border-radius: 8px;\"> </p> <p>Which of the following strings can be generated by the grammar G?</p>",
      image: "",
      options: [
        "abccdd",
        "aabbcc",
        "acbcdd",
        "aaccddbb"
      ],
      answer: "D",
      solution: "<img  alt=\"\" src=\"js/questions/easy_2026_TOC-1/25.png\" style=\"max-width:100%; border-radius: 8px;\">"
    },
    {
      marks: 2,
      neg: 0.66,
      type: "MCQ",
      text: "<p> Consider the following PDA, M that accepts all strings having equal number of a’s and b’s. Then for the complete PDA the missing transaction in the diagram are (here z<sub>0</sub> is the initial stack symbol) </p> <p> <img  alt=\"\" src=\"js/questions/easy_2026_TOC-1/26.png\" style=\"max-width:100%; border-radius: 8px;\"> </p>",
      image: "",
      options: [
        "<img  align=\"absmiddle\" alt=\"\" src=\"js/questions/easy_2026_TOC-1/27.png\" style=\"max-width:100%; border-radius: 8px;\">",
        "<img  align=\"absmiddle\" alt=\"\" src=\"js/questions/easy_2026_TOC-1/28.png\" style=\"max-width:100%; border-radius: 8px;\">",
        "<img  align=\"absmiddle\" alt=\"\" src=\"js/questions/easy_2026_TOC-1/29.png\" style=\"max-width:100%; border-radius: 8px;\">",
        "None of these"
      ],
      answer: "A",
      solution: "Same symbols will be pushed into the stack and opposite symbols will be deleted from the stack.<br>Hence option (a) is correct."
    },
    {
      marks: 2,
      neg: 0.66,
      type: "MCQ",
      text: "Let <em>A</em> = (11, 100, 111), <em>B</em> = (111, 001, 11) and the alphabet, Î£ = {0, 1}, then the solution for PCP is ________.",
      image: "",
      options: [
        "(2, 3, 1)",
        "(2, 1, 3)",
        "(1, 2, 3)",
        "None of these"
      ],
      answer: "C",
      solution: "<img  alt=\"\" src=\"js/questions/easy_2026_TOC-1/30.png\" style=\"max-width:100%; border-radius: 8px;\">"
    },
    {
      marks: 2,
      neg: 0.66,
      type: "MCQ",
      text: "<p> Consider the FSM <em>M</em> and <em>N</em> : </p> <p> <img  alt=\"\" src=\"js/questions/easy_2026_TOC-1/31.png\" style=\"max-width:100%; border-radius: 8px;\"> </p> <p> Then <em>L</em> (<em>M</em> ) ∩ <em>L</em> (<em>N</em> ) is </p>",
      image: "",
      options: [
        "<img  alt=\"\" src=\"js/questions/easy_2026_TOC-1/32.png\" style=\"max-width:100%; border-radius: 8px;\">",
        "<img  alt=\"\" src=\"js/questions/easy_2026_TOC-1/33.png\" style=\"max-width:100%; border-radius: 8px;\">",
        "<img  alt=\"\" src=\"js/questions/easy_2026_TOC-1/34.png\" style=\"max-width:100%; border-radius: 8px;\">",
        "<img  alt=\"\" src=\"js/questions/easy_2026_TOC-1/35.png\" style=\"max-width:100%; border-radius: 8px;\">"
      ],
      answer: "A",
      solution: "<img  alt=\"\" src=\"js/questions/easy_2026_TOC-1/36.png\" style=\"max-width:100%; border-radius: 8px;\">"
    },
    {
      marks: 2,
      neg: 0.66,
      type: "MCQ",
      text: "How many 2 state DFA’s with the designated initial state can be constructed over the alphabet Î£ = {a, b} that accept universal language?",
      image: "",
      options: [
        "4",
        "16",
        "20",
        "24"
      ],
      answer: "C",
      solution: "<img  alt=\"\" src=\"js/questions/easy_2026_TOC-1/37.png\" style=\"max-width:100%; border-radius: 8px;\">"
    },
    {
      marks: 2,
      neg: 0.66,
      type: "MCQ",
      text: "Which of the following is false?",
      image: "",
      options: [
        "Union of two recursive languages is recursive",
        "Intersection of regular and recursive language is not recursive",
        "Union of regular language and recursive language is recursive",
        "None of these"
      ],
      answer: "B",
      solution: "<img  alt=\"\" src=\"js/questions/easy_2026_TOC-1/38.png\" style=\"max-width:100%; border-radius: 8px;\"> <img  alt=\"\" src=\"js/questions/easy_2026_TOC-1/39.png\" style=\"max-width:100%; border-radius: 8px;\">"
    },
    {
      marks: 2,
      neg: 0.66,
      type: "MCQ",
      text: "<p>Consider the NPDA:</p> <p> <img  alt=\"\" src=\"js/questions/easy_2026_TOC-1/40.png\" style=\"max-width:100%; border-radius: 8px;\"> </p> <p> where (as per usual convention) <em>Q</em> is the set of states, Î£ is the input alphabet, <img  align=\"absmiddle\" alt=\"\" src=\"js/questions/easy_2026_TOC-1/41.png\" style=\"max-width:100%; border-radius: 8px;\"> is the stack alphabet, <img  align=\"absmiddle\" alt=\"\" src=\"js/questions/easy_2026_TOC-1/42.png\" style=\"max-width:100%; border-radius: 8px;\"> is the state transition function <em>q</em> <sub>0</sub> is the initial state, <img  align=\"absmiddle\" alt=\"\" src=\"js/questions/easy_2026_TOC-1/43.png\" style=\"max-width:100%; border-radius: 8px;\">is the initial stack symbol, and F is the set of accepting states. The state transition is as follows: </p> <p> <img  alt=\"\" src=\"js/questions/easy_2026_TOC-1/44.png\" style=\"max-width:100%; border-radius: 8px;\"> </p> <p>Which one of the following sequences must follow the string 101100 so that the overall string is accepted by the automaton?</p>",
      image: "",
      options: [
        "10110",
        "10010",
        "01010",
        "01001"
      ],
      answer: "B",
      solution: "<img  alt=\"\" src=\"js/questions/easy_2026_TOC-1/45.png\" style=\"max-width:100%; border-radius: 8px;\">"
    }
  ]
});


registerTest({    // made easy 2026 cse topic wise test theory of computation-2
  series: "cse-gate-2026-pyq",
  name: "TWT - Theory Of Computation-2",
  date: "July 09, 2026",
  questions: [
    {
      marks: 1,
      neg: 0,
      type: "MSQ",
      text: "Consider the following state transition table of epsilon NFA. N, where {<em>q</em> <sub>0</sub> } is start and {<em>q</em> <sub>2</sub> } is final state respectively. <br><br><img src=\"/js/questions/easy_2026_TOC-2/q1_1.png\" style=\"max-width:100%; border-radius: 8px;\"><br><br> Which of the following is the language of NFA?",
      image: "",
      options: [
        "(11*)* [1* 011]*",
        "[11* 0]* (11*)",
        "0*(11*) [11* 0*]*",
        "0*(11* + 1) [11*]*"
      ],
      answer: ["D"],
      solution: "(a) Null String does not belong to language.<br /> (b) String 101 does not belong to language.<br />(c) String 110 does not belong to language."
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: "Consider the following language: <br><br><img src=\"/js/questions/easy_2026_TOC-2/q2_1.png\" style=\"max-width:100%; border-radius: 8px;\"><br><br> Which of the following is true?",
      image: "",
      options: [
        "<em>L</em> <sub>1</sub> ∩ <em>L</em> <sub>2</sub> is non-empty language.",
        "<em>L</em> <sub>1</sub> * – <em>L</em> <sub>1</sub> gives the complement of the language.",
        "<em>L</em> <sub>2</sub> is regular but <em>L</em> <sub>1</sub> is non-regular.",
        "Both are accepted by DFA."
      ],
      answer: "D",
      solution: "<em>L</em> <sub>1</sub> : Finite language, regular.<br /> <em>L</em> <sub>2</sub> : Infinite language but regular.<br />Hence both accepted by DFA and both are disjoint language, so nothing is common in intersection."
    },
    {
      marks: 1,
      neg: 0,
      type: "MSQ",
      text: "Given the context free grammar below: <br><br><img src=\"/js/questions/easy_2026_TOC-2/q3_1.png\" style=\"max-width:100%; border-radius: 8px;\"><br><br> Which of the following regular expression represents the language generated by this grammar?",
      image: "",
      options: [
        "<img src=\"/js/questions/easy_2026_TOC-2/q3_optA_2.png\" style=\"max-width:100%; border-radius: 8px;\">",
        "<img src=\"/js/questions/easy_2026_TOC-2/q3_optB_3.png\" style=\"max-width:100%; border-radius: 8px;\">",
        "<img src=\"/js/questions/easy_2026_TOC-2/q3_optC_4.png\" style=\"max-width:100%; border-radius: 8px;\">",
        "<img src=\"/js/questions/easy_2026_TOC-2/q3_optD_5.png\" style=\"max-width:100%; border-radius: 8px;\">"
      ],
      answer: ["C", "D"],
      solution: "<img src=\"/js/questions/easy_2026_TOC-2/q3_sol_6.png\" style=\"max-width:100%; border-radius: 8px;\">"
    },
    {
      marks: 1,
      neg: 0,
      type: "MSQ",
      text: "Which of the following, represents language accepted by finite automata.<br /> “All string over {<em>a</em> , <em>b</em> } where every ‘<em>a</em> ’ is immediately followed by atleast one <em>b</em> ”.",
      image: "",
      options: [
        "(<em>ab</em> + <em>b</em> *)* <em>ab</em>",
        "(<em>a</em> + <em>b</em> )* (<em>ab</em> )* (<em>a</em> * + <em>b</em> *)",
        "(<em>b</em> + <em>ab</em> )*",
        "<em>b</em> * <em>a</em> * <em>b</em> <sup>+</sup> (<em>a</em> + <em>b</em> *)*"
      ],
      answer: ["C"],
      solution: "(a) Not accepting Null string.<br /> (b) Producing extra string does not belong to language.<br /> (d) Producing extra strings.<br /> e.g.: <em>abba</em> does not belongs to language."
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: "Which of the following is TRUE about the regular expression 1(01)* 0 over the alphabet {0, 1}?",
      image: "",
      options: [
        "Minimum states in DFA is 5.",
        "Accept all strings having even length.",
        "It can generate all strings containing an equal number of 0’s and 1’s.",
        "Generate strings that always start with 1 and end with 0."
      ],
      answer: "D",
      solution: "<img src=\"/js/questions/easy_2026_TOC-2/q5_sol_1.png\" style=\"max-width:100%; border-radius: 8px;\">"
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: "Consider the following grammar: <br><br><img src=\"/js/questions/easy_2026_TOC-2/q6_1.png\" style=\"max-width:100%; border-radius: 8px;\"><br><br> <div>Which is the highest Chomsky hierarchy type that grammar have?</div>",
      image: "",
      options: [
        "Type 2",
        "Type 3",
        "Type 0",
        "Type 1"
      ],
      answer: "C",
      solution: "<img src=\"/js/questions/easy_2026_TOC-2/q6_sol_2.png\" style=\"max-width:100%; border-radius: 8px;\">"
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: "Which of the following is regular language?",
      image: "",
      options: [
        "<img src=\"/js/questions/easy_2026_TOC-2/q15_optA_1.png\" style=\"max-width:100%; border-radius: 8px;\">",
        "<img src=\"/js/questions/easy_2026_TOC-2/q15_optB_2.png\" style=\"max-width:100%; border-radius: 8px;\">",
        "<img src=\"/js/questions/easy_2026_TOC-2/q15_optC_3.png\" style=\"max-width:100%; border-radius: 8px;\">",
        "Both (b) and (c)"
      ],
      answer: "B",
      solution: "<img src=\"/js/questions/easy_2026_TOC-2/q15_sol_4.png\" style=\"max-width:100%; border-radius: 8px;\">"
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: "Consider the following languages: <br><br><img src=\"/js/questions/easy_2026_TOC-2/q11_1.png\" style=\"max-width:100%; border-radius: 8px;\"><br><br> Which of the following is true?",
      image: "",
      options: [
        "<em>L</em> <sub>1</sub> is CFL",
        "<em>L</em> <sub>2</sub> is CFL",
        "Both <em>L</em> <sub>1</sub> and <em>L</em> <sub>2</sub> is CFL",
        "Neither <em>L</em> <sub>1</sub> and <em>L</em> <sub>2</sub> is CFL"
      ],
      answer: "C",
      solution: "<img src=\"/js/questions/easy_2026_TOC-2/q11_sol_2.png\" style=\"max-width:100%; border-radius: 8px;\">"
    },
    {
      marks: 1,
      neg: 0,
      type: "MSQ",
      text: "<p>Which of the following statements are false?</p>",
      image: "",
      options: [
        "Every subset of a regular is regular.",
        "Complement of DFA, gives it’s complement language accepted by it.",
        "Complement of NFA, gives it’s complement language accepted by it.",
        "Expressive power of DPDA is more than finite automata, but equal to PDA."
      ],
      answer: ["A", "C", "D"],
      solution: "<img src=\"/js/questions/easy_2026_TOC-2/q10_sol_1.png\" style=\"max-width:100%; border-radius: 8px;\">"
    },
    {
      marks: 2,
      neg: 0,
      type: "NAT",
      text: "Consider the following DFA: <br><br><img src=\"/js/questions/easy_2026_TOC-2/q8_1.png\" style=\"max-width:100%; border-radius: 8px;\"><br><br> Number of states in minimal DFA is ________?",
      image: "",
      answer: 2,
      solution: "<img src=\"/js/questions/easy_2026_TOC-2/q8_sol_2.png\" style=\"max-width:100%; border-radius: 8px;\">"
    },
    {
      marks: 2,
      neg: 0,
      type: "NAT",
      text: "Consider the following statements for language: <br><br><img src=\"/js/questions/easy_2026_TOC-2/q9_1.png\" style=\"max-width:100%; border-radius: 8px;\"><br><br> How many statements are true?",
      image: "",
      answer: 1,
      solution: "<img src=\"/js/questions/easy_2026_TOC-2/q9_sol_2.png\" style=\"max-width:100%; border-radius: 8px;\">"
    },
    {
      marks: 2,
      neg: 0,
      type: "NAT",
      text: "Consider the following languages: <br><br><img src=\"/js/questions/easy_2026_TOC-2/q12_1.png\" style=\"max-width:100%; border-radius: 8px;\"><br><br> How many number of language are regular?",
      image: "",
      answer: 2,
      solution: "<img src=\"/js/questions/easy_2026_TOC-2/q12_sol_2.png\" style=\"max-width:100%; border-radius: 8px;\">"
    },
    {
      marks: 2,
      neg: 0.66,
      type: "MCQ",
      text: "Which of the given regular expression corresponding to the automata given below: <br><br><img src=\"/js/questions/easy_2026_TOC-2/q13_1.png\" style=\"max-width:100%; border-radius: 8px;\">",
      image: "",
      options: [
        "[1 + 01 + 00 [11* 0*] 0]* 00(11* 0)* 11*",
        "[1 + 0 [0 (11* 0)* 0 + 1]]* 00(11* 0)* 11*",
        "[1 + 0 (00 + 1)]* 001 (1 + 01)*",
        "All of these"
      ],
      answer: "B",
      solution: "<img src=\"/js/questions/easy_2026_TOC-2/q13_sol_2.png\" style=\"max-width:100%; border-radius: 8px;\">"
    },
    {
      marks: 2,
      neg: 0.66,
      type: "MCQ",
      text: "Consider the following NFA: <br><br><img src=\"/js/questions/easy_2026_TOC-2/q14_1.png\" style=\"max-width:100%; border-radius: 8px;\"><br><br> State ‘<em>q</em> <sub>0</sub> ’ is the start state.<br /> Let <em>L</em> <sub>1</sub> , <em>L</em> <sub>2</sub> , <em>L</em> <sub>3</sub> are the language accepted by NFA when ‘<em>q</em> <sub>1</sub> ’, ‘<em>q</em> <sub>2</sub> ’ and ‘<em>q</em> <sub>3</sub> ’ is the final state one at a time.<br /> Which of the following statements true about <em>L</em> <sub>1</sub> , <em>L</em> <sub>2</sub> , <em>L</em> <sub>3</sub> ?",
      image: "",
      options: [
        "<em>L</em> <sub>1</sub> ⊂ <em>L</em> <sub>3</sub>",
        "<em>L</em> <sub>3</sub> = <em>L</em> <sub>2</sub>",
        "<em>L</em> <sub>2</sub> ⊆ <em>L</em> <sub>3</sub>",
        "<em>L</em> <sub>1</sub> = <em>L</em> <sub>3</sub> and <em>L</em> <sub>2</sub> , <em>L</em> <sub>3</sub> ⊆ <em>L</em> <sub>1</sub>"
      ],
      answer: "B",
      solution: "<img src=\"/js/questions/easy_2026_TOC-2/q14_sol_2.png\" style=\"max-width:100%; border-radius: 8px;\">"
    },
    {
      marks: 2,
      neg: 0.66,
      type: "MCQ",
      text: "Consider the following three languages: <br><br><img src=\"/js/questions/easy_2026_TOC-2/q16_1.png\" style=\"max-width:100%; border-radius: 8px;\"><br><br> What is the relation between <em>L</em> <sub>1</sub> , <em>L</em> <sub>2</sub> and <em>L</em> <sub>3</sub> ?",
      image: "",
      options: [
        "<em>L</em> <sub>2</sub> ⊂ <em>L</em> <sub>1</sub> and <em>L</em> <sub>3</sub> ⊂ <em>L</em> <sub>1</sub> and <em>L</em> <sub>1</sub> = <em>L</em> <sub>2</sub> ∪ <em>L</em> <sub>3</sub>",
        "(<em>L</em> <sub>2</sub> = <em>L</em> <sub>3</sub> ) ⊂ <em>L</em> <sub>1</sub>",
        "<em>L</em> <sub>2</sub> ∩ <em>L</em> <sub>1</sub> = <em>L</em> <sub>3</sub>",
        "<em>L</em> <sub>2</sub> ⊂ <em>L</em> <sub>1</sub> and <em>L</em> <sub>3</sub> ⊂ <em>L</em> <sub>1</sub> but <em>L</em> <sub>1</sub> ≠ <em>L</em> <sub>2</sub> ∪ <em>L</em> <sub>3</sub>"
      ],
      answer: "A",
      solution: "<img src=\"/js/questions/easy_2026_TOC-2/q16_sol_2.png\" style=\"max-width:100%; border-radius: 8px;\">"
    },
    {
      marks: 2,
      neg: 0.66,
      type: "MCQ",
      text: "Consider the following languages:</p> <div> <br><br><img src=\"/js/questions/easy_2026_TOC-2/q7_1.png\" style=\"max-width:100%; border-radius: 8px;\"><br><br> </div>",
      image: "",
      options: [
        "<em>L</em> <sub>1</sub> is non-regular, having equal 0’s and 1’s.",
        "<em>L</em> <sub>3</sub> is regular and <em>L</em> <sub>2</sub> is non-regular but DCFL.",
        "<em>L</em> <sub>2</sub> is CFL and <em>L</em> <sub>3</sub> is regular, <em>L</em> <sub>2</sub> ⊆ <em>L</em> <sub>3</sub> .",
        "<em>L</em> <sub>2</sub> and <em>L</em> <sub>3</sub> have same number of the states in the minimal DFA."
      ],
      answer: "D",
      solution: "<em>L</em> <sub>1</sub> is empty string, as having (0 or 1) as an option for string.<br /> <em>L</em> <sub>2</sub> &nbsp;is regular language, having string start and end with same symbol that of <em>L</em> <sub>3</sub> .<br /> So <em>L</em> <sub>3</sub> &nbsp;and L2 both are same language."
    },
    {
      marks: 2,
      neg: 0.66,
      type: "MCQ",
      text: "Consider the following automata that accepts the language <em>L</em> : <br><br><img src=\"/js/questions/easy_2026_TOC-2/q17_1.png\" style=\"max-width:100%; border-radius: 8px;\"><br><br> Which of the following is correct?",
      image: "",
      options: [
        "<img src=\"/js/questions/easy_2026_TOC-2/q17_optA_2.png\" style=\"max-width:100%; border-radius: 8px;\">",
        "<img src=\"/js/questions/easy_2026_TOC-2/q17_optB_3.png\" style=\"max-width:100%; border-radius: 8px;\">",
        "<img src=\"/js/questions/easy_2026_TOC-2/q17_optC_4.png\" style=\"max-width:100%; border-radius: 8px;\">",
        "<img src=\"/js/questions/easy_2026_TOC-2/q17_optD_5.png\" style=\"max-width:100%; border-radius: 8px;\">"
      ],
      answer: "C",
      solution: "<img src=\"/js/questions/easy_2026_TOC-2/q17_sol_6.png\" style=\"max-width:100%; border-radius: 8px;\">"
    }
  ]
});

registerTest({    // made easy 2026 cse topic wise test database-1
  series: "cse-gate-2026-pyq",
  name: "TWT - Database-1",
  date: "July 11, 2026",
  questions: [
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: "Consider an ER model with multiple entries and relation. [None of the attribute entry is NULL] Suppose a relational schema is derived from this ER model. <br><br><img src=\"/js/questions/easy_2026_Database-1/q1_100.png\" style=\"max-width:100%; border-radius: 8px;\"><br><br> <em>X</em> : Minimum number of relations generated if all the resulting relation are in 3NF and allow NULL values.<br> <em>Y</em> : Minimum number of relations generated if all the resulting are in 3NF and do not allow NULL values.<br> Values of <em>X</em> and <em>Y</em> are?",
      image: "",
      options: [
        "<em>X</em> = 3, <em>Y</em> = 5",
        "<em>X</em> = 4, <em>Y</em> = 6",
        "<em>X</em> = 3, <em>Y</em> = 6",
        "<em>X</em> = 5, <em>Y</em> = 6"
      ],
      answer: "C",
      solution: "<img src=\"/js/questions/easy_2026_Database-1/q1_101.png\" style=\"max-width:100%; border-radius: 8px;\">"
    },
    {
      marks: 1,
      neg: 0,
      type: "MSQ",
      text: "Consider two relations <em>R</em> (<em>A</em> , <u> <em>B</em> </u> ), <em>S</em> ( <u> <em>C</em> </u> , <em>D</em> )<br> where <em>B</em> , <em>C</em> are primary keys in respective relation and <em>A</em> is a foreign key in <em>R</em> referencing <em>C</em> in <em>S</em> <br> and <em>D</em> is a foreign key in <em>S</em> referencing <em>B</em> in <em>R</em> .<br>which of the following operations does not violate referential integrity constraints?",
      image: "",
      options: [
        "Inserting the tuple (NULL, <em>X</em> ) in <em>R</em> , where <em>X</em> does not exists in <em>D</em> in <em>S</em> .",
        "Updating the tuple (<em>X</em> , <em>Y</em> ) with (<em>Z</em> , <em>Y</em> ) in <em>S</em> where <em>X</em> does not exist in <em>A</em> in <em>R</em> .",
        "Deleting the tuple (<em>X</em> , <em>Y</em> ) in <em>R</em> , where <em>X</em> exist in <em>C</em> is <em>S</em> but <em>Y</em> does not exist in <em>D</em> in <em>S</em> .",
        "Inserting the tuple (<em>X</em> , <em>Y</em> ) in <em>R</em> , where <em>X</em> does not exists in <em>C</em> in <em>S</em> ."
      ],
      answer: ["A", "B", "C"],
      solution: "<img src=\"/js/questions/easy_2026_Database-1/q2_102.png\" style=\"max-width:100%; border-radius: 8px;\">"
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: "Given the following ER diagram, identify which one of the options below will produce the same relational schema. <br><br><img src=\"/js/questions/easy_2026_Database-1/q12_109.png\" style=\"max-width:100%; border-radius: 8px;\">",
      image: "",
      options: [
        "<img src=\"/js/questions/easy_2026_Database-1/q12_110.png\" style=\"max-width:100%; border-radius: 8px;\">",
        "<img src=\"/js/questions/easy_2026_Database-1/q12_111.png\" style=\"max-width:100%; border-radius: 8px;\">",
        "<img src=\"/js/questions/easy_2026_Database-1/q12_112.png\" style=\"max-width:100%; border-radius: 8px;\">",
        "<img src=\"/js/questions/easy_2026_Database-1/q12_113.png\" style=\"max-width:100%; border-radius: 8px;\">"
      ],
      answer: "C",
      solution: "Composite attribute have minimum two attribute.<br> So option (a), (b) are incorrect.<br> Option (d) have missing [DOB] attribute.<br>Option (c) is right because [Age] is a derived attribute no present in final schema."
    },
    {
      marks: 1,
      neg: 0,
      type: "MSQ",
      text: "Consider a relation R(A, B, C, D, E, F) with the following functional dependencies.<br> {AB → C, C → D, AF → B, B → E}<br>Which of the following is/are true?",
      image: "",
      options: [
        "Relation is in 2NF, but not in 3NF.",
        "{B → E} is a partial dependency, so relation violates 2NF.",
        "The FD : {C → D} violates BCNF, as C is not a super key.",
        "Replacing {C → D} with {AB → D} and keeping all other FD’s, make the relation BCNF complaint."
      ],
      answer: ["A", "C"],
      solution: "AF is the only candidate key.<br> •No partial dependency exist, so relation is in 2NF.<br> •There exist transitive dependency from AF →B →E hence relation is not in 3NF.<br>•Replacing FD : {C →D} with {AB →D} do not make relation in BCNF."
    },
    {
      marks: 1,
      neg: 0,
      type: "NAT",
      text: "Consider a relation R(A, B, C, D, E, G, H) with the following set of functional dependencies.<br> F = {CD → A, EC → H, EG → A, BE → CD, EC → B}<br> Assume all attribute are atomic and R is in 1NF.<br>Number of the candidate keys present in F is/are?",
      image: "",
      answer: 2,
      solution: "EG are essential attribute, [BEG] and [CEG] are candidate keys."
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: "In a relation <em>R</em> (<em>A</em> <sub>1</sub> , <em>A</em> <sub>2</sub> , ..... <em> A<sub>n</sub> </em> ). The set of attributes Σ ⊆ R{<em>A</em> <sub>1</sub> , <em>A</em> <sub>2</sub> , ..... <em> A<sub>n</sub> </em> } is called a superkey if :",
      image: "",
      options: [
        "Σ<sup>+</sup> = <em>R</em> {<em>A</em> <sub>2</sub> , <em>A</em> <sub>3</sub> , ..... <em>A</em> <sub>n</sub> } and Σ may not minimal.",
        "Σ<sup>+</sup> = <em>R</em> {<em>A</em> <sub>1</sub> , <em>A</em> <sub>2</sub> , ..... <em>A</em> <sub>n</sub> – 1} and Σ is minimal.",
        "Σ<sup>+</sup> = <em>R</em> {<em>A</em> <sub>1</sub> , <em>A</em> <sub>2</sub> , ..... <em>A</em> <sub>n</sub> } and Σ may not minimal.",
        "Σ<sup>+</sup> = <em>R</em> {<em>A</em> <sub>1</sub> , <em>A</em> <sub>3</sub> , ..... <em>A</em> <sub>n</sub> } and Σ is minimal."
      ],
      answer: "C",
      solution: "[Superkey = Candidate key + Optional attributes]<br>A candidate key is always a super key but a super key may not be a minimal candidate key (it may have extra attributes)."
    },
    {
      marks: 1,
      neg: 0,
      type: "MSQ",
      text: "In a relational database, which of the following statements about referential integrity is incorrect?",
      image: "",
      options: [
        "A foreign key must reference a primary key in another table.",
        "A foreign key can accept NULL values if the foreign key relationship is optional.",
        "If a tuple is deleted from the parent table, all referencing tuples in the child must be deleted.",
        "A foreign key constraint is used to establish relationship between two table."
      ],
      answer: ["B", "D"],
      solution: "(b, d)"
    },

    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: "Consider a relation <em>R</em> having <em>k</em> is candidate key and <em>D</em> is the domain of attribute <em>A</em> and FK is the foreign key in <em>R</em> . S is another relation with PK as primary key. (t is some random tuple)<br> Match the correct item of <strong>List-1</strong> with <strong>List-2:</strong> <br><br><img src=\"/js/questions/easy_2026_Database-1/q13_114.png\" style=\"max-width:100%; border-radius: 8px;\">",
      image: "",
      options: [
        "a",
        "b",
        "c",
        "d"
      ],
      answer: "A",
      solution: "(a)"
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: "Consider the attribute set in <em>R</em> (A, B, C, D, E, G) and the FD set:<br> {AB → C, AC → B, AD → E, B → D, BC → A, E → G}<br> Consider the following decomposition of R.<br> <em>D</em> <sub>1</sub> : <em>R</em> <sub>1</sub> (AB), <em>R</em> <sub>2</sub> (BC), <em>R</em> <sub>3</sub> (ABDE), <em>R</em> <sub>4</sub> (EG)<br> <em>D</em> <sub>2</sub> : <em>R</em> <sub>1</sub> (ABC), <em>R</em> <sub>2</sub> (ACDE), <em>R</em> <sub>3</sub> (ADG)<br>Which of the following is true?",
      image: "",
      options: [
        "<em>D</em> <sub>1</sub> , <em>D</em> <sub>2</sub> are lossless and not dependency preserving.",
        "<em>D</em> <sub>1</sub> is lossy, <em>D</em> <sub>2</sub> is lossless and <em>D</em> <sub>2</sub> is not dependency preserving but <em>D</em> <sub>1</sub> is.",
        "<em>D</em> <sub>2</sub> is lossy, <em>D</em> <sub>1</sub> is lossless and <em>D</em> <sub>1</sub> is not dependency preserving but <em>D</em> <sub>2</sub> is.",
        "<em>D</em> <sub>2</sub> is lossless, <em>D</em> <sub>1</sub> is lossy and <em>D</em> <sub>1</sub> , <em>D</em> <sub>2</sub> are not dependency preserving."
      ],
      answer: "D",
      solution: "<em>D</em> <sub>1</sub> is lossy and not dependency preserving.<br> <em>D</em> <sub>2</sub> lossless and not dependency preserving."
    },

    {
      marks: 2,
      neg: 0.66,
      type: "MCQ",
      text: "A sorted data file on Anum contains 150000 students records, stored on a harddisk with block size of 4096 B. Each record includes, candidate key Anum of size 5 B and an alternate key Bnum of size 9 B.<br> Size of block pointer is 4 B and record pointer is 8 B. Only 95% of each disk block is usual due to alignment and storage overheads.<br> Assume no index entry spans across disk blocks.<br>How many disk blocks are required to store the second index file, if first level index built-on Bnum.",
      image: "",
      options: [
        "4",
        "3",
        "5",
        "2"
      ],
      answer: "B",
      solution: "<img src=\"/js/questions/easy_2026_Database-1/q10_107.png\" style=\"max-width:100%; border-radius: 8px;\">"
    },
    {
      marks: 2,
      neg: 0,
      type: "NAT",
      text: "Consider a B-tree used to index a file containing 177 × 10<sup>5</sup> records. Each record has a search key of 2B and record pointer of 8B. The size of a block pointer is 16 B and block size is 1024 B. Determine the number of levels in a B-tree constructed with maximum height assuming the leaf<br>nodes do not allocate space for block pointers. (Assume root at level 1)",
      image: "",
      answer: 6,
      solution: "<img src=\"/js/questions/easy_2026_Database-1/q11_108.png\" style=\"max-width:100%; border-radius: 8px;\">",
    },
    {
      marks: 2,
      neg: 0.66,
      type: "MCQ",
      text: "Consider a relation R(A, B, C, D, E) with the following set of FD’s.<br> F = {A → BC, AB → D, B → E, AC → D, C → B, D → E, A → C}<br>Which of the following are correct canonical covers (minimal FD’s) of the given set of functional dependencies?",
      image: "",
      options: [
        "{B → E, AC → D, D → E, C → B, A → C}",
        "{A → D, C → B, A → C, B → E, D → E}",
        "{B → E, AB → D, D → E, C → B, A → C}",
        "{A → D, B → E, D → C, C → B, A → C}"
      ],
      answer: "B",
      solution: "To check which options are valid canonical covers,<br> •The closure of each option is equal to the closure of original FD ’s.<br>•There are no extraneous attributes."
    },
    {
      marks: 2,
      neg: 0,
      type: "MSQ",
      text: "In the context of index file structures used in database, consider the following three alternatives for storing data entries in an index.<br> <em>A</em> <sub>1</sub> : Each data entry with key <em>k</em> is an actual data record with search key <em>k</em> .<br> <em>A</em> <sub>2</sub> : Each data entry is a pair (<em>k</em> , rid), where rid is the record id of data record with search key <em>k</em> .<br> <em>A</em> <sub>3</sub> : Each data entry is a pair (<em>k</em> , rid-list), where rid-list is the list of all record id’s with search key <em>k</em> .<br>Which of the following statements are correct?",
      image: "",
      options: [
        "<em>A</em> <sub>1</sub> act as a specialized fill organization that can substitute a sorted or unsorted file.",
        "Both <em>A</em> <sub>2</sub> and <em>A</em> <sub>3</sub> decouple the index structure from the underlying file organization used for storing data records.",
        "<em>A</em> <sub>3</sub> improves space utilization compared to <em>A</em> <sub>2</sub> , but requires entities to be of fixed length.",
        "<em>A</em> <sub>3</sub> while saving space, reduce redundancy but introduce variable length data entries."
      ],
      answer: ["A", "B", "D"],
      solution: "(a) If the index directly stores full data record (<em>A</em> <sub>1</sub> ) there ’s number need to go elsewhere for the actual data, so it behave like a file itself, not pointer based index.<br> (b) <em>A</em> <sub>2</sub> and <em>A</em> <sub>3</sub> have entries point to record. So it does not matter how or where the actual record one stored.<br> (c) <em>A</em> <sub>3</sub> size depends on rid-list size, depends on how many records share the same key.<br> (d) Instead of repeating (<em>k</em> , rid) for every record (<em>A</em> <sub>2</sub> ) <em>A</em> <sub>3</sub> groups all rid together saving space."
    },
    {
      marks: 2,
      neg: 0,
      type: "NAT",
      text: "Consider the following statements regarding database normalization:<br> <em>S</em> <sub>1</sub> : Every decomposition which satisfies 3NF is always lossless and dependency preserving.<br> <em>S</em> <sub>2</sub> : Every decomposition which satisfies 2NF removes partial dependency but transitive dependency may still exist.<br> <em>S</em> <sub>3</sub> : Every decomposition which satisfies BCNF is always lossless, but may/may not functional dependency preserving.<br> <em>S</em> <sub>4</sub> : ∃ Relation whose decomposition is in BCNF, lossless and dependency preserving.<br>Number of incorrect statements is/are ________.",
      image: "",
      answer: 2,
      solution: "•Every relation possible to decompose 3NF, LLJ and DP.<br> •NPA transitively determine by SK : (not allowed in 3NF).<br> •Every relation possible to decompose into BCNF with LLJ.<br>•Not every relation possible to decompose into BCNF with LLJ and DP."
    },
    {
      marks: 2,
      neg: 0,
      type: "MSQ",
      text: "<img src=\"/js/questions/easy_2026_Database-1/q8_105.png\" style=\"max-width:100%; border-radius: 8px;\"><br><br>Employee FD’s : EID → Name, Name → Phone<br>Which of the following statements are necessarily true?",
      image: "",
      options: [
        "The dependency leadID → DepID causes redundancy unless leadID is a candidate key.",
        "leadID and RevID may belong to different departments without violating any integrity constraint.",
        "Project and Employee relations have same normal form and more redundancy than department relation.",
        "The schema violates referential integrity if EID is not NULL and leadID, RevID is NULL."
      ],
      answer: ["A", "C"],
      solution: "<img src=\"/js/questions/easy_2026_Database-1/q8_106.png\" style=\"max-width:100%; border-radius: 8px;\">"
    },
    {
      marks: 2,
      neg: 0,
      type: "NAT",
      text: "Consider an ER model <em>A</em> , <em>X</em> , <em>B</em> , <em>Y</em> are the entity sets connected by relationship. <br><br><img src=\"/js/questions/easy_2026_Database-1/q3_103.png\" style=\"max-width:100%; border-radius: 8px;\"><br><br> Minimum number of relation generates, in relational model is <em>R</em> and all relations are in 3NF.<br> Then number of foreign keys present in <em>R</em> ?",
      image: "",
      answer: 8,
      solution: "<img src=\"/js/questions/easy_2026_Database-1/q3_104.png\" style=\"max-width:100%; border-radius: 8px;\">"
    },
    {
      marks: 2,
      neg: 0.66,
      type: "MCQ",
      text: "Consider the following relation R(A, B, C, D, E, F) and functional dependencies.<br> A → B, B → C, C → D, A → E, E → F<br>Which of the following valid decomposition of R is not in 3NF but in 2NF?",
      image: "",
      options: [
        "<em>R</em> <sub>1</sub> (A, B, C), <em>R</em> <sub>2</sub> (A, E, F), <em>R</em> <sub>3</sub> (B, D)",
        "<em>R</em> <sub>1</sub> (A, B, E), <em>R</em> <sub>2</sub> (B, D), <em>R</em> <sub>3</sub> (A, E, F)",
        "<em>R</em> <sub>1</sub> (A, B, C, D), <em>R</em> <sub>2</sub> (A, E, F)",
        "<em>R</em> <sub>1</sub> (A, B, C), <em>R</em> <sub>2</sub> (A, E), <em>R</em> <sub>3</sub> (E, F)"
      ],
      answer: "C",
      solution: "<img src=\"/js/questions/easy_2026_Database-1/q16_115.png\" style=\"max-width:100%; border-radius: 8px;\">"
    },
  ]
});


registerTest({    // made easy 2026 cse topic wise test database-2
  series: "cse-gate-2026-pyq",
  name: "TWT - Database-2",
  date: "July 12, 2026",
  questions: [
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: "Consider the following interleaved schedule S involving transaction <em>T</em> <sub>1</sub> , <em>T</em> <sub>2</sub> on data item <em>X</em> and <em>Y</em> .<br> <em>S</em> : <em>R</em> <sub>1</sub> (<em>X</em> ); <em>W</em> <sub>1</sub> (<em>X</em> ); <em>R</em> <sub>2</sub> (<em>X</em> ); <em>W</em> <sub>2</sub> (<em>X</em> ); <em>R</em> <sub>2</sub> (<em>Y</em> ); <em>W</em> <sub>2</sub> (<em>Y</em> ); <em>R</em> <sub>1</sub> (<em>Y</em> ); <em>W</em> <sub>1</sub> (<em>Y</em> ); <em>C</em> <sub>2</sub> , <em>C</em> <sub>1</sub> <br> where <br><br><img src=\"/js/questions/easy_2026_database-2/q1_1.png\" style=\"max-width:100%; border-radius: 8px;\"><br><br> represents read and write operations on items <em>X</em> and <em>Y</em> and C<sub>1/2</sub> are commits of <em>T</em> <sub>1</sub> and <em>T</em> <sub>2</sub> respectively.",
      image: "",
      options: [
        "<em>S</em> is neither conflict, nor view-serializable and never results serializable.",
        "<em>S</em> is serializable away procedure result equal to serial schedule.",
        "<em>S</em> is not serializable, but may results equal to serial if read, write of <em>X</em> , <em>Y</em> in <em>T</em> <sub>1</sub> <em>T</em> <sub>2</sub> are commutative.",
        "<em>S</em> is serializable and consistent for all data items <em>X</em> and <em>Y</em> ."
      ],
      answer: "C",
      solution: "<img src=\"/js/questions/easy_2026_database-2/q1_2.png\" style=\"max-width:100%; border-radius: 8px;\">"
    },

    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: "Consider the given schedule, for transaction <em>T</em> <sub>1</sub> , <em>T</em> <sub>2</sub> : <br><br><img src=\"/js/questions/easy_2026_database-2/q3_5.png\" style=\"max-width:100%; border-radius: 8px;\"><br><br> Which of the following is a correct statement?",
      image: "",
      options: [
        "<em>S</em> is non-recoverable since <em>T</em> <sub>2</sub> commit before <em>T</em> <sub>1</sub> .",
        "<em>S</em> is allow under strict 2PL but not under rigorous 2PL.",
        "<em>S</em> is not strict schedule as <em>T</em> <sub>2</sub> write on same data without previous R/W commit.",
        "Both strict and rigorous 2PL, schedule S efficiently."
      ],
      answer: "B",
      solution: "Schedule work under strict 2PL.<br> Rigorous 2PL search for commit of <em>T</em> <sub>1</sub> to release lock and trap in CPU cycles."
    },
    {
      marks: 1,
      neg: 0,
      type: "MSQ",
      text: "Consider a database with two data items <em>X</em> and <em>Y</em> and two concurrent transactions <em>T</em> <sub>1</sub> and <em>T</em> <sub>2&nbsp;</sub> operating as follows: <br><br><img src=\"/js/questions/easy_2026_database-2/q8_14.png\" style=\"max-width:100%; border-radius: 8px;\"><br><br>Which of the following statements is/are not true?",
      image: "",
      options: [
        "The schedule involves a read-write conflict, where <em>T</em> <sub>2</sub> observes an unrepeatable read on <em>X</em> , violating isolation.",
        "Transaction <em>T</em> <sub>1</sub> performs a dirty read on X, violating isolation.",
        "The schedule contain write-write conflict on <em>X</em> , <em>T</em> <sub>1</sub> may over-write uncommitted data of <em>T</em> <sub>2&nbsp;</sub> which causes lost update problem if <em>T</em> <sub>1</sub> abort before <em>T</em> <sub>2</sub> commit.",
        "Under strict-2PL, schedule S would be allowed and prevent dirty read."
      ],
      answer: ["A", "C", "D"],
      solution: "No unrepeatable read as <em>T</em> <sub>1</sub> reads both <em>X</em> and <em>Y</em> before <em>T</em> <sub>1</sub> perform any writes.<br> •If <em>T</em> <sub>2</sub> abort at any stage, we can abort <em>T</em> <sub>1</sub> as well to prevent atomicity and restart schedules.<br>•Strict-2PL, does not allow to run given schedule as their is a dirty read."
    },
    {
      marks: 1,
      neg: 0,
      type: "MSQ",
      text: "Let <em>R</em> (<em>A</em> ) be a relation that contain both integer and NULL values in attribute <em>A</em> .<br> Consider the following two queries:<br> Query 1: SELECT FROM R WHERE A NOT IN (5, 10, NULL;)<br> Query 2: SELECT FROM R WHERE A &lt;&gt; 5 AND A &lt;&gt; 10 AND A IS NOT NULL;<br>Which of the following statements is/are false?",
      image: "",
      options: [
        "Query 1 and Query 2 return same tuples.",
        "Query 1 will not return any tuple for any value of A.",
        "Query 1 returns rows where A is not NULL and is neither 5 nor 10.",
        "Query 2 will return all rows where A is neither 5 nor 10."
      ],
      answer: ["A", "C", "D"],
      solution: "•Query 1 always gives empty relation.<br>•Query 2 return tuples where A is not NULL, neither 5 nor 10."
    },
    {
      marks: 1,
      neg: 0,
      type: "NAT",
      text: "Consider the following schedules: <br><br><img src=\"/js/questions/easy_2026_database-2/q10_15.png\" style=\"max-width:100%; border-radius: 8px;\"><br><br> Identify the number of recoverable schedules.",
      image: "",
      answer: 3,
      solution: "3<br> <em>S</em> <sub>1</sub> , <em>S</em> <sub>2</sub> , <em>S</em> <sub>4</sub> are recoverable schedule."
    },
    {
      marks: 1,
      neg: 0,
      type: "MSQ",
      text: "Consider the following relational schemas: <br><br><img src=\"/js/questions/easy_2026_database-2/q11_16.png\" style=\"max-width:100%; border-radius: 8px;\"><br><br> Which of the following statement is true regarding the evaluation of the above query?",
      image: "",
      options: [
        "The composite <em>B</em> <sup>+</sup> tree index on (Sid, age) in Sailors can be used to efficiently evaluate S.sid &gt; 500 but not S.age &gt; 25 together.",
        "The <em>B</em> <sup>+</sup> tree index on Reserves.Sid helps in efficiently selecting only those tuples of R that satisfies R.Sid &lt;1000 before the join.",
        "Since R.sid is used in the selection of tuples, using the <em>B</em> <sup>+</sup> tree on <em>R</em> .sid is not helpful as multiple tuples may match.",
        "The index on Sailors helps to reduce the number of sailors tuples participating in the join, by scanning S.sid &gt; 500 and S.age &gt; 2.5"
      ],
      answer: ["B", "D"],
      solution: "The index can be used to find tuples where Sid &gt;500 first and then within these check age &gt;25.<br>(c) Duplicate does not reduce index usefulness."
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: "Consider the following log file, contains log records of the following form.<br> <tranid, variable=\"\"></tranid,> <br><br><img src=\"/js/questions/easy_2026_database-2/q17_29.png\" style=\"max-width:100%; border-radius: 8px;\"><br><br> Identify the correct statement.",
      image: "",
      options: [
        "Transaction <em>T</em> <sub>1</sub> , <em>T</em> <sub>3</sub> redo and <em>T</em> <sub>2</sub> undo after abort.",
        "Transaction <em>T</em> <sub>2</sub> , <em>T</em> <sub>3</sub> redo and <em>T</em> <sub>4</sub> undo after abort.",
        "Transaction <em>T</em> <sub>1</sub> store permanently, <em>T</em> <sub>3</sub> redo and <em>T</em> <sub>2</sub> , <em>T</em> <sub>4</sub> undo.",
        "System cannot recover properly as <em>T</em> <sub>2</sub> and <em>T</em> <sub>3</sub> working on same variable."
      ],
      answer: "C",
      solution: "•<em>T</em> <sub>1</sub> commit before check point so store it.<br> •<em>T</em> <sub>3</sub> commit before abort so redo it.<br> •<em>T</em> <sub>2</sub> , <em>T</em> <sub>4</sub> not commit till abort so undo them."
    },
    {
      marks: 1,
      neg: 0,
      type: "MSQ",
      text: "Consider the following relation schemas: <br><br><img src=\"/js/questions/easy_2026_database-2/q16_27.png\" style=\"max-width:100%; border-radius: 8px;\"><br><br> Where the primary keys are shown underlined. The number of tuples in the purchase relation is<br> 100, and in the Supplier relation is 50, respectively.<br> What are the maximum and minimum number of tuples that can be present in (Purchase * Supplier)<br>where ‘*’ denotes natural full outer join. (Pid in Supplier may/may not foreign key to Pid in Purchase).",
      image: "",
      options: [
        "149, 100",
        "50, 50",
        "150, 100",
        "0, 50"
      ],
      answer: ["A", "C"],
      solution: "<img src=\"/js/questions/easy_2026_database-2/q16_28.png\" style=\"max-width:100%; border-radius: 8px;\">"
    },
    {
      marks: 1,
      neg: 0,
      type: "MSQ",
      text: "A bank maintains checking account data in a relational database, while customer (owner) information is stored in a separate file system on a different server. An operation in performed that adds a new owner to the file system and associates that owner with a newly created account<br> in that database.<br> Assume there is no distributed transaction management between the database and the file system.<br>Which of the following is true regarding the ACID properties of this operation?",
      image: "",
      options: [
        "Atomicity is not guaranteed, as failure in one system may not roll back change in the other.",
        "Isolation is not always ensured as the operations occurs independently on separate system.",
        "Durability is satisfied only if both system independently ensure persistence after commit.",
        "Consistency is always maintained, as each system handles its own constraints."
      ],
      answer: ["A", "B", "C"],
      solution: "<strong>DB + File system on another server:</strong> <br> Two independent systems:<br> •Relational data base<br> •Separate file system<br> No distributed transaction:<br> •Manager to co-ordinate them.<br> <strong>RDBMS server File System server</strong> <br> Required distributed<br>Transaction manager to coordinate system of RDBMS server, FS servers."
    },
    {
      marks: 2,
      neg: 0,
      type: "NAT",
      text: "A relation database contains two tables.<br>Student and Marks as shown below: <br><br><img src=\"/js/questions/easy_2026_database-2/q6_11.png\" style=\"max-width:100%; border-radius: 8px;\"><br><br> The primary key of the Student table is R_no.<br> For the Marks table, the column R_no and Subject together for the composite key and R_no is the<br> foreign key referencing to R_no. in Student table.<br> Select Sum(M.marks), S.S_name<br> From Student S, Marks M<br> where M.mark &gt; 70<br> Group By S.S_name;<br>The number of rows returned by the above SQL query is ________.",
      image: "",
      answer: 5,
      solution: "Condition applied on Mark in Marks table.<br>Group by Sname, in final table so remain with 5 unique S_name tuples."
    },
    {
      marks: 2,
      neg: 0.66,
      type: "MCQ",
      text: "Consider a relation <em>R</em> (<em>a</em> , <em>b</em> , <em>c</em> , <em>d</em> , <em>e</em> ) containing 500000 records, where each data page holds 100 records.<br> R is organized as a sorted files on candidate key. Assume R.a is a candidate key for R, with values<br> lying in the range 0 to 4, 999, 99.<br>Given the following relational algebra queries. <br><br><img src=\"/js/questions/easy_2026_database-2/q2_3.png\" style=\"max-width:100%; border-radius: 8px;\"><br><br> Which of the following is a false statement?",
      image: "",
      options: [
        "Linear hashed index is most efficient for <em>Q</em> <sub>2</sub> , but inefficient for <em>Q</em> <sub>1</sub> and <em>Q</em> <sub>3</sub> .",
        "A clustered <em>B</em> <sup>+</sup> tree is optimal for both <em>Q</em> <sub>1</sub> and <em>Q</em> <sub>3</sub> but not useful for <em>Q</em> <sub>2</sub> and <em>Q</em> <sub>4</sub> .",
        "Full scan is optimal for <em>Q</em> <sub>4</sub> but not for <em>Q</em> <sub>1</sub> .",
        "Hashing is preferable to clustering for <em>Q</em> <sub>3</sub> but inefficient for <em>Q</em> <sub>1</sub> and <em>Q</em> <sub>4</sub> ."
      ],
      answer: "D",
      solution: "<img src=\"/js/questions/easy_2026_database-2/q2_4.png\" style=\"max-width:100%; border-radius: 8px;\">"
    },
    {
      marks: 2,
      neg: 0,
      type: "MSQ",
      text: "Consider the following four queries on the relations: <br><br><img src=\"/js/questions/easy_2026_database-2/q7_12.png\" style=\"max-width:100%; border-radius: 8px;\"><br><br> Which of the following statements is/are correct?",
      image: "",
      options: [
        "Query A, B and D always produce same output.",
        "Query B and D always produce the same output but Query A and C may differ.",
        "All four queries produce the output for distinct Sname in both relations.",
        "Query A and C may produce same result but not Query B and D."
      ],
      answer: ["A", "B", "C"],
      solution: "<img src=\"/js/questions/easy_2026_database-2/q7_13.png\" style=\"max-width:100%; border-radius: 8px;\">"
    },
    {
      marks: 2,
      neg: 0.66,
      type: "MCQ",
      text: "Consider the relations <em>r</em> <sub>1</sub> (<em>A</em> , <em>B</em> , <em>C</em> ), <em>r</em> <sub>2</sub> (<em>C</em> , <em>D</em> , <em>E</em> ) and <em>r</em> <sub>3</sub> (<em>E</em> , <em>F</em> ), having 1000, 1500 and 750 tuples reoperatively.<br> Assume that their are no primary keys, except the entire schema (i.e., all values are uniformly distributed).<br> Let <em>V</em> (<em>X</em> , <em>R</em> ) represents, the distinct values of attribute <em>X</em> in relation <em>R</em> .<br> <em>V</em> (<em>C</em> , <em>r</em> <sub>1</sub> ) = 900, <em>V</em> (<em>C</em> , <em>r</em> <sub>2</sub> ) = 1100, <em>V</em> (<em>E</em> , <em>r</em> <sub>2</sub> ) = 50 and <em>V</em> (<em>E</em> , <em>r</em> <sub>3</sub> ) = 100.<br> Which of the following is the efficient strategy for computing the size of&nbsp;<br><br><img src=\"/js/questions/easy_2026_database-2/q4_6.png\" style=\"max-width:100%; border-radius: 8px;\">",
      image: "",
      options: [
        "<img src=\"/js/questions/easy_2026_database-2/q4_7.png\" style=\"max-width:100%; border-radius: 8px;\">",
        "<img src=\"/js/questions/easy_2026_database-2/q4_8.png\" style=\"max-width:100%; border-radius: 8px;\">",
        "<img src=\"/js/questions/easy_2026_database-2/q4_9.png\" style=\"max-width:100%; border-radius: 8px;\">",
        "None of these"
      ],
      answer: "C",
      solution: "<img src=\"/js/questions/easy_2026_database-2/q4_10.png\" style=\"max-width:100%; border-radius: 8px;\">"
    },

    {
      marks: 2,
      neg: 0.66,
      type: "MCQ",
      text: "Consider the schedules <em>S</em> <sub>1</sub> , <em>S</em> <sub>2</sub> and <em>S</em> <sub>3</sub> below: <br><br><img src=\"/js/questions/easy_2026_database-2/q12_17.png\" style=\"max-width:100%; border-radius: 8px;\"><br><br> Which of the following options correctly classifies each schedule?",
      image: "",
      options: [
        "<img src=\"/js/questions/easy_2026_database-2/q12_18.png\" style=\"max-width:100%; border-radius: 8px;\">",
        "<img src=\"/js/questions/easy_2026_database-2/q12_19.png\" style=\"max-width:100%; border-radius: 8px;\">",
        "<img src=\"/js/questions/easy_2026_database-2/q12_20.png\" style=\"max-width:100%; border-radius: 8px;\">",
        "<img src=\"/js/questions/easy_2026_database-2/q12_21.png\" style=\"max-width:100%; border-radius: 8px;\">"
      ],
      answer: "D",
      solution: "<em>S</em> <sub>1</sub> : Recoverable, cascadeless, strict recoverable.<br> <em>S</em> <sub>2</sub> &nbsp;: Dirty read, not recoverable.<br> <em>S</em> <sub>3</sub> &nbsp;: Recoverable and cascadeless but not strict recoverable."
    },
    {
      marks: 2,
      neg: 0.66,
      type: "MCQ",
      text: "Consider the following relational schemas: <br><br><img src=\"/js/questions/easy_2026_database-2/q13_22.png\" style=\"max-width:100%; border-radius: 8px;\"><br><br> What does the final result of the above query?",
      image: "",
      options: [
        "Names of students who have takes at least one course offered by their department.",
        "Names of students who have not taken any course from their own department, but may have taken courses from other department.",
        "Names of students who have not taken any course at all.",
        "Names of students who have taken all courses offered by their own department."
      ],
      answer: "B",
      solution: "(b)"
    },
    {
      marks: 2,
      neg: 0.66,
      type: "MCQ",
      text: "Consider the following transactions: <br><br><img src=\"/js/questions/easy_2026_database-2/q14_23.png\" style=\"max-width:100%; border-radius: 8px;\"><br><br> The time stamps of <em>T</em> <sub>1</sub> , <em>T</em> <sub>2</sub> and <em>T</em> <sub>3</sub> are 3, 1, 2 respectively.<br>Which of the following is the correct option under Time stamp Ordering Protocol (TOP).",
      image: "",
      options: [
        "S is not possible under basic TOP and <em>T</em> <sub>3</sub> force <em>T</em> <sub>1</sub> to abort/rollback.",
        "S is possible under Thomas Write Rule TOP and S is view serializable.",
        "<em>T</em> <sub>2</sub> and <em>T</em> <sub>3</sub> both rollback to preserve data consistency.",
        "Only <em>T</em> <sub>3</sub> rollback, under basic TOP while <em>T</em> <sub>2</sub> and <em>T</em> <sub>1</sub> complete their operation successfully."
      ],
      answer: "D",
      solution: "<img src=\"/js/questions/easy_2026_database-2/q14_24.png\" style=\"max-width:100%; border-radius: 8px;\">"
    },
    {
      marks: 2,
      neg: 0.66,
      type: "MCQ",
      text: "Suppose, a relation <em>R</em> (<em>A</em> , <em>B</em> ), have following schema: <br><br><img src=\"/js/questions/easy_2026_database-2/q15_25.png\" style=\"max-width:100%; border-radius: 8px;\">",
      image: "",
      options: [
        "{(0, Null,), (Null, Null)}",
        "{(0, 0), (Null, 0)}",
        "{(Null, 1), (0, 0)}",
        "{(0, 0), (Null, 1)}"
      ],
      answer: "C",
      solution: "<img src=\"/js/questions/easy_2026_database-2/q15_26.png\" style=\"max-width:100%; border-radius: 8px;\">"
    },


  ]
});

registerTest({    // made easy 2026 cse topic wise test coa-1
  series: "cse-gate-2026-pyq",
  name: "TWT - Computer Organization and Architecture-1",
  date: "July 13, 2026",
  questions: [
    {
      marks: 1,
      neg: 0,
      type: "NAT",
      text: "A CPU has 24 bits instructions and memory is byte addressable.<br>Consider the following below code: <br> <img alt=\"\" src=\"/js/questions/easy_2026_COA-1/q1_1.png\" style=\"max-width:100%; border-radius: 8px;\"> <br> If Branch == 0, <em>X</em> [PC] is supposed to skip the loop and go directly to MOV <em>R</em> <sub>2</sub> , SUM what should be value of <em>X</em> .",
      answer: 9,
      solution: "<img alt=\"\" src=\"/js/questions/easy_2026_COA-1/q1_2.png\" style=\"max-width:100%; border-radius: 8px;\">"
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: "Match <strong>List-I</strong> (Characteristics) with <strong>List-II</strong> (Processors) and select the correct answer using the codes given below the lists: <br> <img alt=\"\" src=\"/js/questions/easy_2026_COA-1/q2_3.png\" style=\"max-width:100%; border-radius: 8px;\">",
      options: [
        "a",
        "b",
        "c",
        "d"
      ],
      answer: "C",
      solution: "(c)"
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: "Consider the following format:<br> <img alt=\"\" src=\"/js/questions/easy_2026_COA-1/q3_4.png\" style=\"max-width:100%; border-radius: 8px;\"> <br> What is the Hexa decimal equivalent in the memory after adding the following data.<br> 1.1011001000 * 2<sup>+8</sup> <br> 1.0010100011 * 2<sup>+4</sup>",
      options: [
        "(DF12)<sub>H</sub>",
        "(5F12)<sub>H</sub>",
        "(612F)<sub>H</sub>",
        "(F125)<sub>H</sub>"
      ],
      answer: "B",
      solution: "<img alt=\"\" src=\"/js/questions/easy_2026_COA-1/q3_5.png\" style=\"max-width:100%; border-radius: 8px;\">"
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: "Consider a 32 bits hypothetical CPU which supports instruction with 2 register operands, memory operands and 2 immediate constant fields. System supports 100 instructions, 60 registers with a register wide of 32 bits, 4 MB RAM and 13 bits constant size. Program contain 240 Instructions.<br>Number of bytes required to stored the program is _________.",
      options: [
        "2010",
        "2160",
        "2400",
        "1620"
      ],
      answer: "B",
      solution: "<img alt=\"\" src=\"/js/questions/easy_2026_COA-1/q4_6.png\" style=\"max-width:100%; border-radius: 8px;\">"
    },
    {
      marks: 1,
      neg: 0,
      type: "NAT",
      text: "Consider a hypothetical CPU which supports 200 instructions with a CPI of 13. Hardware contain 300 control signals, 16 flags and uses 24 branch conditions. Micro instruction is designed with 6 control signals. Size of a CDR register in the control unit design is ________ (in bits)?",
      answer: 75,
      solution: "<img alt=\"\" src=\"/js/questions/easy_2026_COA-1/q5_7.png\" style=\"max-width:100%; border-radius: 8px;\">"
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: "Consider 1 GHz clock frequency processor, uses different operand access modes shown below:<br> <img alt=\"\" src=\"/js/questions/easy_2026_COA-1/q8_12.png\" style=\"max-width:100%; border-radius: 8px;\"> <br> Assume that 8 cycle consumed for memory reference, 4 cycles consumed for arithmetic computation and 0 cycles consumed when the operand is in register instruction itself. What is the average operand fetch rate (in million words/sec) of the processor?",
      options: [
        "117.45 M words/sec",
        "113.63 M words/sec",
        "217.45 M words/sec",
        "316.45 M words/sec"
      ],
      answer: "B",
      solution: "<img alt=\"\" src=\"/js/questions/easy_2026_COA-1/q8_13.png\" style=\"max-width:100%; border-radius: 8px;\">"
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: "Consider the following sequence of instructions:<br> <img alt=\"\" src=\"/js/questions/easy_2026_COA-1/q9_14.png\" style=\"max-width:100%; border-radius: 8px;\"> <br> The ALU operation instruction size are 32 bits, data transfer instructions are 64 bits and branch instruction size are 16 bits.<br>Assume the program is loaded into memory starting at address 4000 (decimal). If an interrupt occurs during the execution of the HALT instruction, what is the return address pushed onto the stack?",
      options: [
        "4019",
        "4023",
        "4024",
        "4033"
      ],
      answer: "C",
      solution: "<img alt=\"\" src=\"/js/questions/easy_2026_COA-1/q9_15.png\" style=\"max-width:100%; border-radius: 8px;\">"
    },
    {
      marks: 1,
      neg: 0,
      type: "NAT",
      text: "Consider 5-stage pipeline with stage delays as 150, 120, 160, 180 and 140 ns respectively. Registers that are used between every two stages have a delay of 5 ns each. The total time taken to process 1000 data items on this pipeline will be ________ (in μsec up to 2 decimal places).",
      answer: 185.74,
      solution: "<img alt=\"\" src=\"/js/questions/easy_2026_COA-1/q15_27.png\" style=\"max-width:100%; border-radius: 8px;\">"
    },
    {
      marks: 1,
      neg: 0,
      type: "NAT",
      text: "Consider 3 ns CLK cycle CPU which consumes 4 cycles for data transfer instruction, 8 cycles for ALU instruction. 6 cycles for branch instruction, relative frequencies of these instructions are 30%, 60% and 10% respectively. System is enhanced with a respective speedups of 2, 1.6 and 2. Performance gain of an enhanced system is ________?",
      answer: 1.69,
      solution: "<img alt=\"\" src=\"/js/questions/easy_2026_COA-1/q6_8.png\" style=\"max-width:100%; border-radius: 8px;\">"
    },
    {
      marks: 2,
      neg: 0,
      type: "NAT",
      text: "Consider 16 bits CPU used to execute the following code.<br> System supports 1 word opcode and 2 word address @ symbol uses indirect AM, [ ] symbol uses direct AM. Register R<sub>2</sub> is designated as index register. Following code is used to execute in the<br>CPU. Instruction follows the standard syntax. <br> <img align=\"absmiddle\" alt=\"\" src=\"/js/questions/easy_2026_COA-1/q7_9.png\" style=\"max-width:100%; border-radius: 8px;\"> <br> Number of memory references required to access the data is ________ where <img align=\"absmiddle\" alt=\"\" src=\"/js/questions/easy_2026_COA-1/q7_10.png\" style=\"max-width:100%; border-radius: 8px;\">instructions are executed 5 times in the code.",
      answer: 45,
      solution: "<img alt=\"\" src=\"/js/questions/easy_2026_COA-1/q7_11.png\" style=\"max-width:100%; border-radius: 8px;\">"
    },

    {
      marks: 2,
      neg: 0.66,
      type: "MCQ",
      text: "The following assembly code is to be executed in a 3-stage pipelined processor with hazard detection and resolution in each stage. The stage are IF, OF (one or more as required) and execution (including write-back operation). What are the number of possible RAW, WAW and WAR hazards in the execution of the code.<br> <img alt=\"\" src=\"/js/questions/easy_2026_COA-1/q10_16.png\" style=\"max-width:100%; border-radius: 8px;\">",
      options: [
        "6, 1, 2",
        "5, 3, 3",
        "5, 3, 2",
        "3, 1, 2"
      ],
      answer: "D",
      solution: "<img alt=\"\" src=\"/js/questions/easy_2026_COA-1/q10_17.png\" style=\"max-width:100%; border-radius: 8px;\">"
    },

    {
      marks: 2,
      neg: 0,
      type: "MSQ",
      text: "Consider the following machine instruction:<br> <img alt=\"\" src=\"/js/questions/easy_2026_COA-1/q11_18.png\" style=\"max-width:100%; border-radius: 8px;\"> <br> Four stage pipeline, IF (fetch), ID (decode and operand fetch), IE (execute), WB (write back), are used. No data forwarding is present in the pipeline [Each operation takes one cycle in pipeline].<br>Which one of the following is true?",
      options: [
        "<img align=\"absmiddle\" alt=\"\" src=\"/js/questions/easy_2026_COA-1/q11_19.png\" style=\"max-width:100%; border-radius: 8px;\"> have structural dependency and <img align=\"absmiddle\" alt=\"\" src=\"/js/questions/easy_2026_COA-1/q11_20.png\" style=\"max-width:100%; border-radius: 8px;\">have WAR dependency.",
        "<img align=\"absmiddle\" alt=\"\" src=\"/js/questions/easy_2026_COA-1/q11_21.png\" style=\"max-width:100%; border-radius: 8px;\">have RAW dependency, but it will not create any hazard in pipeline.",
        "<img align=\"absmiddle\" alt=\"\" src=\"/js/questions/easy_2026_COA-1/q11_22.png\" style=\"max-width:100%; border-radius: 8px;\">causes stalls in the pipeline to maintain data integrity.",
        "There are 2 RAW dependencies and one WAW dependency in the pipeline."
      ],
      answer: ["C", "D"],
      solution: "<img alt=\"\" src=\"/js/questions/easy_2026_COA-1/q11_23.png\" style=\"max-width:100%; border-radius: 8px;\">"
    },
    {
      marks: 2,
      neg: 0.66,
      type: "MCQ",
      text: "Consider the following code executed on a 32 bits hypothetical CPU, stored in the memory with a starting address of (4000)<sub>10</sub> . CPU cycle time is 2 ns. Each instruction on average takes 5 cycles to complete. Interrupt sub program takes 20 cycles to complete. <br> <img alt=\"\" src=\"/js/questions/easy_2026_COA-1/q12_24.png\" style=\"max-width:100%; border-radius: 8px;\"> <br> In the program execution interrupt occurred, during the execution of ADD instruction and MUL instruction. What is the program execution time in (ns)?",
      options: [
        "70 ns",
        "160 ns",
        "150 ns",
        "190 ns"
      ],
      answer: "B",
      solution: "(b)"
    },
    {
      marks: 2,
      neg: 0,
      type: "MSQ",
      text: "Consider the following format:<br> <img alt=\"\" src=\"/js/questions/easy_2026_COA-1/q13_25.png\" style=\"max-width:100%; border-radius: 8px;\"> <br> Which of the following represents the value (&gt; 16)<sub>10</sub> .",
      options: [
        "0 100011 110100000",
        "0 011110 001011111",
        "0 100010 0000100111",
        "0 100100 001010000"
      ],
      answer: ["A", "D"],
      solution: "<img alt=\"\" src=\"/js/questions/easy_2026_COA-1/q13_26.png\" style=\"max-width:100%; border-radius: 8px;\">"
    },
    {
      marks: 2,
      neg: 0.66,
      type: "MCQ",
      text: "Consider the following statements:<br> <em>S</em> <sub>1</sub> : Relative addressing mode is best suited for calculate the target address in a branch instruction.<br> <em>S</em> <sub>2</sub> : Immediate addressing mode is best suited for specifying the target address in a branch instruction.<br> <em>S</em> <sub>3</sub> : Base register addressing mode can be used in branch instructions where the target segment base address is stored in a register.<br>Which of the following is correct?",
      options: [
        "Only <em>S</em> <sub>1</sub> and <em>S</em> <sub>2</sub>",
        "Only <em>S</em> <sub>1</sub> and <em>S</em> <sub>3</sub>",
        "Only <em>S</em> <sub>2</sub> and <em>S</em> <sub>3</sub>",
        "All <em>S</em> <sub>1</sub> , <em>S</em> <sub>2</sub> and <em>S</em> <sub>3</sub>"
      ],
      answer: "B",
      solution: "Relative addressing mode is best suited for specifying the target address in a branch instruction.<br> EX: Branch &gt;0 –16(PC)<br>Immediate addressing is used to provide constant data values embedded in the instruction."
    },

    {
      marks: 2,
      neg: 0.66,
      type: "MCQ",
      text: "Consider 4 stage instruction pipeline executed on a system:<br> <img alt=\"\" src=\"/js/questions/easy_2026_COA-1/q16_28.png\" style=\"max-width:100%; border-radius: 8px;\"> <br> If all instructions are executed only once, what is the throughput of system?",
      options: [
        "<img align=\"absmiddle\" alt=\"\" src=\"/js/questions/easy_2026_COA-1/q16_29.png\" style=\"max-width:100%; border-radius: 8px;\">",
        "<img align=\"absmiddle\" alt=\"\" src=\"/js/questions/easy_2026_COA-1/q16_30.png\" style=\"max-width:100%; border-radius: 8px;\">",
        "<img align=\"absmiddle\" alt=\"\" src=\"/js/questions/easy_2026_COA-1/q16_31.png\" style=\"max-width:100%; border-radius: 8px;\">",
        "<img align=\"absmiddle\" alt=\"\" src=\"/js/questions/easy_2026_COA-1/q16_32.png\" style=\"max-width:100%; border-radius: 8px;\">"
      ],
      answer: "D",
      solution: "<img alt=\"\" src=\"/js/questions/easy_2026_COA-1/q16_33.png\" style=\"max-width:100%; border-radius: 8px;\">"
    },
    {
      marks: 2,
      neg: 0,
      type: "MSQ",
      text: "Consider the following pipeline design:<br> <img alt=\"\" src=\"/js/questions/easy_2026_COA-1/q17_34.png\" style=\"max-width:100%; border-radius: 8px;\"> <br> Which of the following statements are correct?",
      options: [
        "Pipeline cycle time is 12 ns.",
        "Pipeline cycle time is 14 ns.",
        "Pipeline takes 14 ns to complete the instruction when very large number of instructions are executed in the pipeline.",
        "Pipeline takes 1456 ns time to complete 100 instructions."
      ],
      answer: ["B", "C", "D"],
      solution: "(b, c, d)"
    }
  ]
});

registerTest({    // made easy 2026 cse topic wise test coa-2
  series: "cse-gate-2026-pyq",
  name: "TWT - Computer Organization and Architecture-2",
  date: "July 13, 2026",
  questions: [
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: "Consider the following statements:<br> <em>S</em> <sub>1</sub> : In write back protocol, cache location and main memory location are updated simultaneously.<br> <em>S</em> <sub>2</sub> : Modified or dirty bits are used by write through protocol.<br>Which of the following is false?",
      image: "",
      options: [
        "Only S<sub>1</sub>",
        "Only S<sub>2</sub>",
        "Both <em>S</em> <sub>1</sub> and <em>S</em> <sub>2</sub>",
        "Neither <em>S</em> <sub>1</sub> nor <em>S</em> <sub>2</sub>",
      ],
      answer: "C",
      solution: "Write back protocol first cache is updated and market by dirty bit then main memory is update."
    },
    {
      marks: 1,
      neg: 0,
      type: "NAT",
      text: "Suppose that in 1200 memory references, there are 240 misses in the first-level cache and 60 misses in the second-level cache.<br> Assume that miss penalty from L<sub>2</sub> cache to main memory is 120 cycles, and the hit time of the L<sub>2 </sub> cache is 30 cycles.<br>If there are 3 memory references per instruction, the average stall per instruction is ________ cycles.",
      image: "",
      options: [],
      answer: 36,
      solution: "<img src='js/questions/easy_2026_COA-2/img_2_1.png'>"
    },

    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: "Consider the following statements:<br> <em>S</em> <sub>1</sub> : Direct mapped caches do not need a cache block replacement policy, where as fully associative cache need.<br> <em>S</em> <sub>2</sub> : Direct mapped cache, may produce more misses if programs refers to memory words that occupy a same tag value.<br>Which of the following options is correct?",
      image: "",
      options: [
        "Only <em>S</em> <sub>1</sub> is true",
        "Only <em>S</em> <sub>2</sub> is true",
        "Both <em>S</em> <sub>1</sub> and <em>S</em> <sub>2</sub> are true",
        "Neither of <em>S</em> <sub>1</sub> nor <em>S</em> <sub>2</sub> is true",
      ],
      answer: "A",
      solution: "•Since in direct mapped cache a block can mapped to only a particular block by using formula [MM block % cache blocks = cache block number]. Where as in fully associative cache a block can mapped to more than one cache block with in a set so only fully associative cache needs<br> cache replacement policy. So, statement is true.<br> •Since in direct mapped cache, mapping is based on line offset not on TAG and those memory<br> addresses having same line offset are mapped to same cache line. Therefore, if a program<br>refers to memory access with same TAG value does not ensure more misses. Hence this statement is false."
    },

    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: "Consider cache memory with an access time of 50 ns having hit ratio of 70%. Miss penalty of a cache is 300 ns. Average memory access time is ________ (ns)?",
      image: "",
      options: [
        "140 ns",
        "125 ns",
        "110 ns",
        "135 ns",
      ],
      answer: "B",
      solution: "<img src='js/questions/easy_2026_COA-2/img_7_7.png'>"
    },
    {
      marks: 1,
      neg: 0,
      type: "NAT",
      text: "Consider a hypothetical computer system which has DMA support. The DMA module transfer one 16-bit character in one CPU cycle from a device to memory through cycle stealing mode at regular intervals. Consider a 4 MHz processor. If 0.4% of processor cycles are used for DMA, the data transfer rate of the device is ________ bytes per second.",
      image: "",
      options: [],
      answer: 32000,
      solution: "<img src='js/questions/easy_2026_COA-2/img_8_8.png'>"
    },

    {
      marks: 1,
      neg: 0,
      type: "NAT",
      text: "Consider a 2-way set associative cache with 8 cache blocks. If the memory block requests are accessed 2 time in the following order 0, 4, 8, 4, 0, 4, 8, 4, 3, 15, 19, 15, 3, 15, 19, 15. If LRU replacement policy is used, then the total number of misses are ________.",
      image: "",
      options: [],
      answer: 18,
      solution: "18 <img src='js/questions/easy_2026_COA-2/img_12_10.png'>"
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: "Consider cache memory with a hit ratio of 80% having access time of 40 ns. Access time of a main memory is 5 times of a cache memory access time.<br>What is the average memory access time?",
      image: "",
      options: [
        "72 ns",
        "92 ns",
        "80 ns",
        "68 ns",
      ],
      answer: "C",
      solution: "<img src='js/questions/easy_2026_COA-2/img_14_12.png'>"
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: "Consider 4 MBPS IO device connected to 64 bits CPU using DMA interface. 64 words data is transferred from the IO to memory using DMA interface main memory machine cycle time is&nbsp;0.5 micro sec. Percentage of CPU time consumed in he DMA operation is ________.",
      image: "",
      options: [
        "25",
        "20",
        "4",
        "80",
      ],
      answer: "B",
      solution: "<img src='js/questions/easy_2026_COA-2/img_15_13.png'>"
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: "A cache memory provides a speed up of 7.27 over main memory. If the cache is 40 times faster than main memory, what percentage of total execution time is spent accessing the cache?",
      image: "",
      options: [
        "82%",
        "85%",
        "88%",
        "90%",
      ],
      answer: "C",
      solution: "<img src='js/questions/easy_2026_COA-2/img_10_9.png'>"
    },
    {
      marks: 2,
      neg: 0,
      type: "NAT",
      text: "Consider a two-way set associative cache with total of 8 cache blocks and the following sequence of memory block requests arrived:<br> 20, 17, 21, 32, 20, 16, 27, 22, 7, 16, 32<br>If LRU replacement policy is used then the hit ratio will be ________. (Upto 2 decimal places)",
      image: "",
      options: [],
      answer: 0.18,
      solution: "<img src='js/questions/easy_2026_COA-2/img_3_2.png'><br><img src='js/questions/easy_2026_COA-2/img_3_3.png'>"
    },
    {
      marks: 2,
      neg: 0.66,
      type: "MCQ",
      text: "Consider m-way set associative cache with 32-bit addresses and having block size 128 Bytes. If cache memory has 1024 blocks and TAG bits are 17, then what is the number of sets and associativity of cache?",
      image: "",
      options: [
        "128 sets, 8-way set associativity",
        "256 sets, 4-way set associativity",
        "256 sets, 8-way set associativity",
        "Cannot be determined",
      ],
      answer: "B",
      solution: "<img src='js/questions/easy_2026_COA-2/img_5_4.png'><br><img src='js/questions/easy_2026_COA-2/img_5_5.png'>"
    },
    {
      marks: 2,
      neg: 0,
      type: "NAT",
      text: "Consider a disk that rotates at 60000 rotations per minute and has a transfer rate of 80 MBps. If the average seek time of the disk is twice the average rotational delay and the controller’s transfer time is 8 times the disk transfer time, the average time to read or write a 128 byte sector of the disk is ________ msec. (Upto 4 decimal places)",
      image: "",
      options: [],
      answer: 1.5128,
      solution: "<img src='js/questions/easy_2026_COA-2/img_6_6.png'>"
    },
    {
      marks: 2,
      neg: 0.66,
      type: "MCQ",
      text: "Consider the following statements:<br> S<sub>1</sub> : If compulsory misses are more common then the designers should consider increasing the cache line size to take better advantage of locality.<br> S<sub>2</sub> : If capacity misses are most common then the designer should consider increasing the total cache size so it can contain more lines.<br> S<sub>3</sub> : If conflict misses are most common then the designer should increases the cache’s associatively, in order to provide more flexibility when collision occur.<br>Which of the above statements are true, with respect to reducing number of cache misses.",
      image: "",
      options: [
        "Only <em>S</em> <sub>2</sub> is true",
        "Only <em>S</em> <sub>3</sub> is true",
        "Both <em>S</em> <sub>1</sub> and <em>S</em> <sub>2</sub> are true",
        "All the statements are true",
      ],
      answer: "D",
      solution: "•By increasing cache line size, number of cache blocks will decrease. So, compulsory misses are<br> decrease and we can take advantage of locality.<br>•By increasing cache size, number of lines per cache increase so, capacity misses are reduced.<br>•By increasing cache associativity, we have more lines in particular set, so it provide more<br>flexibility and reduce number of conflict misses."
    },
    {
      marks: 2,
      neg: 0,
      type: "MSQ",
      text: "Which of the following statements is/are correct?",
      image: "",
      options: [
        "Polling increases CPU overhead because the processor continuously checks device status, even if no device needs service.",
        "In polling, control is initiated by the peripheral device to notify the CPU when it is ready.",
        "During DMA transfers, the CPU is momentarily halted while the DMA controller takes control of the system bus.",
        "The DMA controller communicates directly with memory without involving the CPU for each data word transfer.",
      ],
      answer: ["A", "C", "D"],
      solution: "Interrupt-driven I/O, not polling.<br>In polling, CPU initiates the check, not the device. The CPU actively checks the device status periodically."
    },

    {
      marks: 2,
      neg: 0.66,
      type: "MCQ",
      text: "A 8 way set associative cache of 128 KB is organized with 64 byte blocks. The main memory size is 4 GB. Each line in a set has 1 valid bit, 1 dirty bit and 3 replacement bits along with a tag. How much tag directory space is present in the cache controller. (In K bits)",
      image: "",
      options: [
        "42",
        "46",
        "44",
        "36",
      ],
      answer: "B",
      solution: `<img src='js/questions/easy_2026_COA-2/img_13_11.png'>`
    },

    {
      marks: 2,
      neg: 0,
      type: "MSQ",
      text: "Which of the following statement are false?",
      image: "",
      options: [
        "DMA controller is initialized by the I/O device for number of bytes to be transferred.",
        "The DMA controller sends DMA-ACK signal to I/O device after getting DMA-REQ signal from I/O device.",
        "The DMA transfer begins after CPU relinquishes the bus control.",
        "CPU provides information about number of bytes to be transferred and memory address to DMA controller.",
      ],
      answer: ["A", "B"],
      solution: "•DMA is a method that allows an I/O device to send or receive data directly to or from the<br> memory, bypassing the CPU to speedup memory operations. The process is managed by a<br> chip known as a DMA controller.<br> •DMA controller asserts a DMA request signal to the CPU.<br> •CPU complete its current bus activity and returns a DMA-ACK signal to DMA controller.<br> •DMA transfer begins only after receiving the DMA ACK.<br>•CPU does not provide information about number of bytes to be transferred to DMA controller."
    },
    {
      marks: 2,
      neg: 0,
      type: "NAT",
      text: `Consider two cache organizations:<br> (i) The first one is a 128 KB, 2 way set associative cache with 32 byte block size.<br> (ii) The second one is a 128 KB direct-mapped cache.<br> Both use 32 bits addressing.<br> A 2 to 1 multiplexer has latency of 0.5 ns and K-bit comparator has a latency of <img align="absmiddle" alt="" src="js/questions/easy_2026_COA-2/img_17_14.png"> ns.<br>What is the difference between the hit latencies of the two cache (i.e., associative hit latency direct mapped hit latency) in nano seconds?`,
      image: "",
      options: [],
      answer: 0.75,
      solution: `<img src='js/questions/easy_2026_COA-2/img_17_15.png'>`
    },
  ]
});

registerTest({     //made easy 2026 cse topic wise test algorithms part 1
  series: "cse-gate-2026-pyq",
  name: "TWT - Algorithms-1",
  date: "July 13, 2026",
  questions: [
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `Using Masters theorem, what’s the overall asymptotic running time of <img align="absmiddle" alt="" src="js/questions/easy_2026_algorithm-1/img_1.png">`,
      image: "",
      options: [
        `<img align="absmiddle" alt="" src="js/questions/easy_2026_algorithm-1/img_2.png">`,
        `<img align="absmiddle" alt="" src="js/questions/easy_2026_algorithm-1/img_3.png">`,
        `<img align="absmiddle" alt="" src="js/questions/easy_2026_algorithm-1/img_4.png">`,
        `<img align="absmiddle" alt="" src="js/questions/easy_2026_algorithm-1/img_5.png">`,
      ],
      answer: "D",
      solution: "(d)"
    },

    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `Consider the following code segment:<br><br><img alt="" src="js/questions/easy_2026_algorithm-1/img_17.png"><br><br>Let <em>T</em> (<em>n</em> ) element the number of total iterations for given positive integer (<em>n</em> ).<br>Which of the following is always true?`,
      image: "",
      options: [
        `<em>T</em> (<em>n</em> ) = Ο(<em>n</em> log <em>n</em> ) and <em>T</em> (<em>n</em> ) = Ω(log n) but not Θ(<em>n</em> ).`,
        `<em>T</em> (<em>n</em> ) = Ο(<em>n</em><sup>2</sup> ) and <em>T</em> (<em>n</em> ) = Ω(n) as inner loops run for Θ(log <em>n</em> ) times.`,
        `<em>T</em> (<em>n</em> ) = Θ(<em>n</em> ) as outer loops run for Ο(<em>n</em> ) times and inner loop runs for constant time.`,
        `<em>T</em> (<em>n</em> ) = Ο(<em>n</em> ) as outer and inner loop combine time complexity, does not go beyond this.`,
      ],
      answer: "D",
      solution: `<img alt="" src="js/questions/easy_2026_algorithm-1/img_18.png">`
    },

    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `In quick sort algorithm, recursion depth as the maximum number of nested recursive calls from the top of the recursion tree to a leaf (base case) let <em>n</em> be the size of the input array.<br>Which of the following statement about the minimum and maximum possible recursion depth is correct?`,
      image: "",
      options: [
        `Minimum Θ(log <em>n</em> ); Maximum Θ(<em>n</em> )`,
        `Minimum Θ(1); Maximum Θ(n log <em>n</em> )`,
        `Minimum Θ(log <em>n</em> ); Maximum Θ(log <em>n</em> )`,
        `Minimum Θ(<em>n</em> ); Maximum Θ(<em>n</em> )`,
      ],
      answer: "A",
      solution: `<img alt="" src="js/questions/easy_2026_algorithm-1/img_20.png">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: "Which of the following statements is correct?",
      image: "",
      options: [
        "Insertion sort always perform fewer comparison then selection sort.",
        "Selection sort always perform fewer swaps than insertion sort.",
        "Insertion sort is stable but not selection sort.",
        "For reverse sorted array, both insertion and selection have same number of swaps.",
      ],
      answer: "C",
      solution: "For sorted array both selection and insertion sort have zero comparison."
    },
    {
      marks: 1,
      neg: 0,
      type: "MSQ",
      text: `Consider the following function, returning sum of the array:<br><br><img alt="" src="js/questions/easy_2026_algorithm-1/img_43.png"><br><br>Which of the following statements is/are correct?`,
      image: "",
      options: [
        `<em>T</em> (<em>n</em> ) = Ο(<em>n</em> log <em>n</em> ), as algorithm splits array in two equal half.`,
        `Space complexity is Ο(log <em>n</em> ), due to recursion depth.`,
        "Logic work correctly for all inputs.",
        "Logic fails for array size 1.",
      ],
      answer: ["A", "B", "C"],
      solution: "(a, b, c)"
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `Suppose you have a range from [1 – <em>n</em><sup> log <em>n</em></sup> ] integer values. Worst case time complexity of an efficient algorithm to sort n numbers chosen from this range?`,
      image: "",
      options: [
        `Ο(n log <em>n</em> )`,
        `Ο(n<sup>log n</sup> (log n)<sup>2</sup> )`,
        `Ο(n<sup>log n</sup> )`,
        `Ο(log <em>n</em> )<sup>2</sup>`,
      ],
      answer: "A",
      solution: `<img alt="" src="js/questions/easy_2026_algorithm-1/img_44.png">`
    },

    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `Let <em>n</em> be a sufficiently large positive integers. <img alt="" src="js/questions/easy_2026_algorithm-1/img_28.png"><br> Arrange in increasing asymptotic time complexity.`,
      image: "",
      options: [
        `<img align="absmiddle" alt="" src="js/questions/easy_2026_algorithm-1/img_29.png">`,
        `<img align="absmiddle" alt="" src="js/questions/easy_2026_algorithm-1/img_30.png">`,
        `<img align="absmiddle" alt="" src="js/questions/easy_2026_algorithm-1/img_31.png">`,
        `<img align="absmiddle" alt="" src="js/questions/easy_2026_algorithm-1/img_32.png">`,
      ],
      answer: "D",
      solution: "(d)"
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `Consider the functions:<br><br><img alt="" src="js/questions/easy_2026_algorithm-1/img_33.png">`,
      image: "",
      options: [
        `Only statement I is correct, statement II is incorrect because <em>f</em><sub>2</sub> (<em>n</em> ) = ο( <em>f</em><sub>3</sub> (<em>n</em> )).`,
        `Both statement are incorrect, <em>f</em><sub>2</sub> = ο( <em>f</em><sub>1</sub> (<em>n</em> )) contradicts 1.`,
        `Statement II is correct, statement I is incorrect as <em>f</em><sub>2</sub> (<em>n</em> ) ≠ Θ( <em>f</em><sub>3</sub> (<em>n</em> )).`,
        `Both statement are correct and <img align="absmiddle" alt="" src="js/questions/easy_2026_algorithm-1/img_34.png">`,
      ],
      answer: "B",
      solution: `<img alt="" src="js/questions/easy_2026_algorithm-1/img_35.png">`
    },
    {
      marks: 1,
      neg: 0,
      type: "NAT",
      text: `Consider the following statements:<br><br><img alt="" src="js/questions/easy_2026_algorithm-1/img_36.png"><br><br>How many number of correct statements?`,
      image: "",
      options: [],
      answer: 2,
      solution: `<img alt="" src="js/questions/easy_2026_algorithm-1/img_37.png">`
    },
    {
      marks: 2,
      neg: 0.66,
      type: "MCQ",
      text: `Let <img align="absmiddle" alt="" src="js/questions/easy_2026_algorithm-1/img_6.png">Identify the correct asymptotic behaviour.`,
      image: "",
      options: [
        `<img align="absmiddle" alt="" src="js/questions/easy_2026_algorithm-1/img_7.png">`,
        `<img align="absmiddle" alt="" src="js/questions/easy_2026_algorithm-1/img_8.png">`,
        `<img align="absmiddle" alt="" src="js/questions/easy_2026_algorithm-1/img_9.png">`,
        `<img align="absmiddle" alt="" src="js/questions/easy_2026_algorithm-1/img_10.png">`,
      ],
      answer: "B",
      solution: `<img alt="" src="js/questions/easy_2026_algorithm-1/img_11.png">`
    },
    {
      marks: 2,
      neg: 0,
      type: "MSQ",
      text: `Let the following be defined for all large n:<br><br><img alt="" src="js/questions/easy_2026_algorithm-1/img_12.png"><br><br>Which of the following statements is/are correct?`,
      image: "",
      options: [
        `<em>F</em> (<em>n</em> ) = ο(<em>g</em> (<em>n</em> )) and <em>h</em> (<em>n</em> ) = ο(<em>g</em> (<em>n</em> ))`,
        `<img align="absmiddle" alt="" src="js/questions/easy_2026_algorithm-1/img_13.png">`,
        `<img align="absmiddle" alt="" src="js/questions/easy_2026_algorithm-1/img_14.png">`,
        `<img align="absmiddle" alt="" src="js/questions/easy_2026_algorithm-1/img_15.png">`,
      ],
      answer: ["B", "C"],
      solution: `<img alt="" src="js/questions/easy_2026_algorithm-1/img_16.png">`
    },
    {
      marks: 2,
      neg: 0,
      type: "MSQ",
      text: `Consider the following pseudocode logic:<br><br><img alt="" src="js/questions/easy_2026_algorithm-1/img_19.png">`,
      image: "",
      options: [
        `Output is 3 because match occurs at position 0, 2 and 5 in <em>S</em><sub>2</sub> . Matching skips overlapping substring once founds.`,
        "Output is 1 because code is not considering overlapping strings.",
        `Time complexity is Ο(<em>n</em> ⋅ <em>m</em> ) in worst case.`,
        "Given logic correctly detect overlapping pattern.",
      ],
      answer: ["C", "D"],
      solution: `In worst case we run code Ο(<em>n</em> ⋅<em>m</em> ) .`
    },
    {
      marks: 2,
      neg: 0.66,
      type: "MCQ",
      text: `Consider the statement for function f and g condition <em>f</em> (<em>n</em> ) = Ο(<em>g</em> (<em>n</em> )), ∀<em>n</em> , <em>n</em> ≥ <em>n</em><sub>0</sub> .<br><br><img alt="" src="js/questions/easy_2026_algorithm-1/img_38.png">`,
      image: "",
      options: [
        `<em>S</em><sub>1</sub> is sometimes but, <em>S</em><sub>2</sub> is always true.`,
        `If <em>f</em> (<em>n</em> ) ≤ <em>g</em> (<em>n</em> ), ∀<em>n</em> &gt;&gt; 0, <em>S</em><sub>1</sub> is true not <em>S</em><sub>2</sub> .`,
        `<em>S</em><sub>1</sub> is always true, but <em>S</em><sub>2</sub> correctness depends on <em>f</em> ⋅ <em>g</em> .`,
        `<em>S</em><sub>1</sub> is false but <em>S</em><sub>2</sub> is always true.`,
      ],
      answer: "C",
      solution: "(c)"
    },
    {
      marks: 2,
      neg: 0,
      type: "NAT",
      text: `Consider the following array index start with 0.<br><br><img alt="" src="js/questions/easy_2026_algorithm-1/img_21.png"><br><br>To search an element <em>E</em> .<br> Average number of comparison made by linear search = <em>X</em><br> Average number of comparison made by binary search = <em>Y</em><br> Value of <em>X</em> + <em>Y</em> = ________.`,
      image: "",
      options: [],
      answer: 8.5,
      solution: `8.5 <img alt="" src="js/questions/easy_2026_algorithm-1/img_22.png">`
    },
    {
      marks: 2,
      neg: 0,
      type: "MSQ",
      text: `Consider a variant of merge sort called delayed merge sort algorithm work like.<br> • If the input size n is power of 2, say <em>n</em> = 2<sup>k</sup> for some integer <em>k</em> ≥ 0, it recursively divides the array until each sub array has exactly 2 elements (i.e., stops dividing at size 2) and then begin the merging phase.<br> • If <em>n</em> is not power of 2, it behaves exactly like standard merge sort.<br> Assume that merging two sorted array of size a and b takes exactly (<em>a</em> + <em>b</em> – 1) comparisons.<br> Let <em>T</em> (<em>n</em> ) be the total number of comparison performance by delayed merge sort.<br>Which of the following statements are correct?`,
      image: "",
      options: [
        `<img alt="" src="js/questions/easy_2026_algorithm-1/img_23.png">`,
        `<img alt="" src="js/questions/easy_2026_algorithm-1/img_24.png">`,
        `<img alt="" src="js/questions/easy_2026_algorithm-1/img_25.png">`,
        `<img alt="" src="js/questions/easy_2026_algorithm-1/img_26.png">`,
      ],
      answer: ["A", "D"],
      solution: `<img alt="" src="js/questions/easy_2026_algorithm-1/img_27.png">`
    },
    {
      marks: 2,
      neg: 0,
      type: "MSQ",
      text: `Let n is a natural number arr[<em>n</em> ] is the <em>n</em> size array.<br> • <em>A</em> is the minimum number of comparison required to get minimum and maximum of arr, when <em>n</em> is odd.<br> • B is the minimum number of comparison required to get minimum and maximum of arr, when <em>n</em> is even.<br>Which of the following are true?`,
      image: "",
      options: [
        `<img alt="" src="js/questions/easy_2026_algorithm-1/img_39.png">`,
        `<img alt="" src="js/questions/easy_2026_algorithm-1/img_40.png">`,
        `<img alt="" src="js/questions/easy_2026_algorithm-1/img_41.png">`,
        `<img align="absmiddle" alt="" src="js/questions/easy_2026_algorithm-1/img_42.png">`,
      ],
      answer: ["A", "C"],
      solution: "(a, c)"
    },

    {
      marks: 2,
      neg: 0.66,
      type: "MCQ",
      text: `An unsorted array A of size n distinct element, 90% of the successful search at the first 25% of the array (index 0 to <img align="absmiddle" alt="" src="js/questions/easy_2026_algorithm-1/img_45.png"> – 1), remain 10%, of successful search are uniformly spread in rest of the array (indices <img align="absmiddle" alt="" src="js/questions/easy_2026_algorithm-1/img_46.png"> to <em>n</em> – 1). To search element using, comparison based algo, which one is correct.`,
      image: "",
      options: [
        `Expected comparison is less than 0.175 <em>n</em> .`,
        `Apply two pass linear search first, scan 0 to <img align="absmiddle" alt="" src="js/questions/easy_2026_algorithm-1/img_47.png"> if not found, search <img align="absmiddle" alt="" src="js/questions/easy_2026_algorithm-1/img_48.png"> to <em>n</em> – 1.`,
        `Random searching at first 25% location of array for 90% time, then 75% location for 10% time.`,
        "None of these",
      ],
      answer: "B",
      solution: `<img alt="" src="js/questions/easy_2026_algorithm-1/img_49.png">`
    },
  ]
});


registerTest({     //made easy 2026 cse topic wise test algorithm-2
  series: "cse-gate-2026-pyq",
  name: "TWT - Algorithm-2",
  date: "July 13, 2026",
  questions: [

    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `Let <em>G</em> = (<em>V</em> , <em>E</em> ) be a directed graph with non-negative edge weights, let s and t be two vertices such that path exist from <em>s</em> → t.<br>Which of the following conditions, such that path guaranteed to be unique.`,
      image: "",
      options: [
        `When all edges are distinct positive integers.`,
        `When all edges are distinct positive integers and the graph contains no directed cycles.`,
        `When all edge length are distinct power of 2.`,
        `None of the above`
      ],
      answer: "C",
      solution: `(c)`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `Suppose you implement priority queue using sorted and unsorted array. Worst case time complexity of insert and extract-min is [assume ascending order of sorted array extract-min isdelete minimum]`,
      image: "",
      options: [
        `<img alt="" src="js/questions/easy_2026_algorithm-2/img_21.png">`,
        `<img alt="" src="js/questions/easy_2026_algorithm-2/img_22.png">`,
        `<img alt="" src="js/questions/easy_2026_algorithm-2/img_23.png">`,
        `<img alt="" src="js/questions/easy_2026_algorithm-2/img_24.png">`
      ],
      answer: "C",
      solution: `(c)`
    },
    {
      marks: 1,
      neg: 0,
      type: "NAT",
      text: `Consider an array arr[ ] = {10, 7, 15, 17, 2, 20, 6, 3}, array index start with ‘3’.<br>After building a min heap using bottom-up approach, which element at location arr[6].`,
      image: "",
      answer: 10,
      solution: `<img alt="" src="js/questions/easy_2026_algorithm-2/img_25.png">`
    },
    {
      marks: 1,
      neg: 0,
      type: "MSQ",
      text: `Let <em>X</em> = {<em>x</em> <sub>1</sub> , <em>x</em> <sub>2</sub> ..... <em> x<sub>n</sub> </em> } be a set of n real valued points on the number line (not necessarily sorted).<br> An internal [<em>x</em> , <em>x</em> + 2] can be placed starting at any point <em>x</em> ∈ <em>X</em> , and covers all points within that<br> range. We have to cover all points in X using the minimum number of such internals.<br> Greedy algorithm works:<br> While there are uncovered points.<br> Choose the leftmost uncovered point <em> x<sub>i</sub> </em> <br> Place an internal starting at xi → covers [ <em> x<sub>i</sub> </em> , <em> x<sub>i</sub> </em> + 2].<br> <em>S</em> <sub>1</sub> : <em>X</em> = [0.9, 1.1, 2.5, 2.7, 4.2, 4.9, 6.1, 6.8], the algorithm places 3 intervals to cover all points.<br> <em>S</em> <sub>2</sub> : <em>T</em> (<em>n</em> ) = Ο(<em>n</em> log <em>n</em> ) for unsorted array, Ο(n) for sorted array.<br> <em>S</em> <sub>3</sub> : If we replace [<em>x</em> , <em>x</em> + 2] with a symmetric interval [<em>x</em> – 1, <em>x</em> + 1], the greedy strategy needs to be<br>changed to pick rightmost point within range instead of leftmost.`,
      image: "",
      options: [
        `Only <em>S</em> <sub>1</sub> and <em>S</em> <sub>3</sub> are true`,
        `Only <em>S</em> <sub>1</sub> is true`,
        `<em>S</em> <sub>2</sub> and <em>S</em> <sub>3</sub> are true`,
        `<em>S</em> <sub>1</sub> , <em>S</em> <sub>2</sub> and <em>S</em> <sub>3</sub> are true`
      ],
      answer: ["D"],
      solution: `(a) Start with 0.9, internal [0.9, 2.9], [4.2, 6.2], [6.8, 8.8].<br> (b) If unsorted, sort <em>X</em> = Ο(n log n), linear search Ο(n).<br>(c) Strategy is independent of array index location.`
    },
    {
      marks: 1,
      neg: 0,
      type: "NAT",
      text: `Determine the number of ways to fill below tree from [1 to 10] values such that each parent is greater than its children? <br><br><img alt="" src="js/questions/easy_2026_algorithm-2/img_4.png"><br><br>`,
      image: "",
      answer: 5760,
      solution: `<img alt="" src="js/questions/easy_2026_algorithm-2/img_5.png">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `Consider, <em>G</em> = (<em>V</em> , <em>E</em> ) be connected undirected graph with distinct positive edge weights. Let <em>T</em> be the MST of G.<br> Consider the following statements:<br> I. For any two vertices u and v, the path between <em>u</em> and <img align="absmiddle" alt="" src="js/questions/easy_2026_algorithm-2/img_6.png"> in T is not necessarily the shortest path in <em>G</em> .<br> II. If an edge ∈ <em>E</em> is not present in any cycle in <em>G</em> , then <em>e</em> must in every MST of <em>G</em> .<br> III. If <em>e</em> ∈ <em>T</em> and replacing it with a lighter edge <em>e</em> ′ ∉ <em>T</em> then new tree is still a MST.<br>Which of the above statements is/are always true?`,
      image: "",
      options: [
        `Only 1`,
        `1 and 2`,
        `2 and 3`,
        `All 1, 2, and 3`
      ],
      answer: "B",
      solution: `•MST minimizes the total weight not individual shortest paths between pairs.<br>•Edge not in any cycle in bridge edge, and always in MST.`
    },
    {
      marks: 1,
      neg: 0,
      type: "NAT",
      text: `Consider the following graph:<br> Number of different BFS sequence possible from source ‘<em>S</em> ’. <br><br><img alt="" src="js/questions/easy_2026_algorithm-2/img_16.png"><br><br>`,
      image: "",
      answer: 24,
      solution: `After exploring S, we have 3 node in queue arrange in 3! ways, then removing any node from<br> queue, put 2 more node, 2! ways and this process continuous, till queue empty.<br> Total = 3! ×2 ×2<br>= 6 ×4 = 24`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `Consider the adjacency list representation of graph, each vertex maintain list for outgoing edges only. Let <em>n</em> and <em>m</em> denote the number of vertices and edges respectively in graph and <em>k</em> is the maximum in-degree of a vertex.<br>Worst case to compute the in-degree of a given vertex?`,
      image: "",
      options: [
        `Θ(<em>n</em> )`,
        `Θ(<em>m</em> )`,
        `Θ(<em>k</em> )`,
        `Θ(<em>n</em> + <em>k</em> )`
      ],
      answer: "B",
      solution: `Without explicitly maintaining a list of incoming edges, you might have to scan all the edges to identify the incoming arcs.`
    },
    {
      marks: 1,
      neg: 0,
      type: "NAT",
      text: `Consider the following connected graph: <br><br><img alt="" src="js/questions/easy_2026_algorithm-2/img_7.png"><br><br> Suppose <em>x</em> always be part of minimum spanning tree and y can’t be part of MST.<br> What is the sum of Maxvalue(<em>x</em> ) + Minvalue(y) = ?`,
      image: "",
      answer: 29,
      solution: `<img alt="" src="js/questions/easy_2026_algorithm-2/img_8.png">`
    },
    {
      marks: 2,
      neg: 0.66,
      type: "MCQ",
      text: `Consider the following function: <br><br><img alt="" src="js/questions/easy_2026_algorithm-2/img_9.png"><br><br> What is the function computes?`,
      image: "",
      options: [
        `Number of partitions of n into distinct positive integers.`,
        `Number of ordered sequence of positive integers that sum to <em>n</em> .`,
        `Number of subsets of {1, 2, ..... <em>n</em> } that sum to <em>n</em> .`,
        `None of these`
      ],
      answer: "B",
      solution: `<img alt="" src="js/questions/easy_2026_algorithm-2/img_10.png">`
    },
    {
      marks: 2,
      neg: 0.66,
      type: "MCQ",
      text: `Consider the following weighted graph. <br><br><img alt="" src="js/questions/easy_2026_algorithm-2/img_11.png"><br><br> Which of the following is/are true?`,
      image: "",
      options: [
        `Dijkstra fails to find the shortest path in graph.`,
        `Edge [<em>D</em> , <em>E</em> ] [<em>D</em> , <em>F</em> ], [<em>A</em> , <em>B</em> ] are not part of Dijkstra tree.`,
        `There exist a pair of vertex have 2 different shortest path.`,
        `None of these`
      ],
      answer: "D",
      solution: `<img alt="" src="js/questions/easy_2026_algorithm-2/img_12.png">`
    },
    {
      marks: 2,
      neg: 0,
      type: "MSQ",
      text: `Let <em>G</em> = (<em>V</em> , <em>E</em> ) be a connected, undirected, weighted graph with distinct positive edge weights.<br> Suppose <em>T</em> ⊆ <em>G</em> is the unique minimum spanning tree (MST) of <em>G</em> and for a given real value λ defined the set. <br><br><img alt="" src="js/questions/easy_2026_algorithm-2/img_13.png"><br><br> Let <em>G</em> <sub>≤ λ</sub> = (<em>V</em> , <em>E</em> <sub>≤ λ</sub> ) be the threshold subgraph induced by these edges.<br>Which of the following statements is/are always true?`,
      image: "",
      options: [
        `If <em>G</em> ≤ <em>λ</em> is disconnected, then no edge from any component of <em>G</em> ≤ <em>λ</em> can be part of the MST.`,
        `The number of connected components in <em>G</em> <sub>≤ λ</sub> decrease if λ → ∞.`,
        `For any value λ, all edges in <em>T</em> ∩ <em>G</em> <sub>≤ λ</sub> form a forest in <em>G</em> .`,
        `The first |V| – 1 edges added as λ increase will always be the edges of MST <em>T</em> .`
      ],
      answer: ["B", "C"],
      solution: `(a) Disconnected component may part of MST in future.<br>(d) We cannot directly adds |V| –1 edges in MST.`
    },
    {
      marks: 2,
      neg: 0,
      type: "NAT",
      text: `Consider the following <em>G</em> = (<em>V</em> , <em>E</em> ) undirected connected weighted graph, given in form of matrix. <br><br><img alt="" src="js/questions/easy_2026_algorithm-2/img_14.png"><br><br> where ‘0’ entry in matrix represent no edge.<br> Non-zero entry in matrix represent undirected edge and its weights.<br> Value of <em>x</em> for which graph have maximum MST is y.<br> Value of <em>x</em> * y is ________?`,
      image: "",
      answer: 10,
      solution: `<img alt="" src="js/questions/easy_2026_algorithm-2/img_15.png">`
    },

    {
      marks: 2,
      neg: 0.66,
      type: "MCQ",
      text: `Consider the following code for an array [1 ... <em>n</em> ]? <br><br><img alt="" src="js/questions/easy_2026_algorithm-2/img_1.png"><br><br> Let <em>C</em> (<em>n</em> ) be the total number of comparison done during unknown loop(<em>A</em> , <em>n</em> ). (<em>S</em> , <em>n</em> ) be the totalnumber of swaps done.`,
      image: "",
      options: [
        `<img alt="" src="js/questions/easy_2026_algorithm-2/img_2.png">`,
        `The final structure of <em>A</em> cannot be used for in place heap sort because it violets parent child ordering.`,
        `<img alt="" src="js/questions/easy_2026_algorithm-2/img_3.png">`,
        `Both (a) and (c)`
      ],
      answer: "C",
      solution: `•Given code performing bottom-up heap building require Ο(n) comparison and Ο(<em>n</em> ) swaps.<br> •Even elements are same <em>S</em> (<em>n</em> ) = 0, <em>C</em> (<em>n</em> ) ∈0.`
    },
    {
      marks: 2,
      neg: 0,
      type: "MSQ",
      text: `Consider the following directed graph <em>G</em> is source vertex, ‘<em>A</em> ’ is DFS traversal tree.<em>F</em> , <em>B</em> , <em>C</em> , <em>T</em> are forward, back, cross and tree edges. <br><br><img alt="" src="js/questions/easy_2026_algorithm-2/img_17.png"><br><br> Which of the following option is/are correctly possible?`,
      image: "",
      options: [
        `There exist DFS sequence from vertex <em>A</em> with at most two forward edges.`,
        `There exist DFS sequence from vertex <em>A</em> with no forward edges.`,
        `For every sequence of DFS from source A, always no back edges.`,
        `There exists DFS sequence from source A, with no cross edge.`
      ],
      answer: ["B", "C"],
      solution: `<img alt="" src="js/questions/easy_2026_algorithm-2/img_18.png">`
    },
    {
      marks: 2,
      neg: 0.66,
      type: "MCQ",
      text: `Which of the following statement is true for given graph <em>G</em> (<em>n</em> , <em>m</em> ) with <em>m</em> = θ(<em>n</em> <sup>2</sup> ) where <em>n</em> is<br> number of vertices and <em>m</em> is number of edges.<br> (i) Time complexity to test edge <img align="absmiddle" alt="" src="js/questions/easy_2026_algorithm-2/img_19.png"> exists or not in graph.<br>(ii) Space complexity to store graph.`,
      image: "",
      options: [
        `If graph represented in adjacency matrix from (i) is θ(1) (ii) is θ(<em>n</em> ).`,
        `If graph represented in adjacency matrix from (i) is θ(1) (ii) is θ(<em>n</em> <sup>2</sup> ).`,
        `If graph represented in adjacency list from (i) is θ(1) (ii) is θ(<em>n</em> ).`,
        `If graph represented in adjacency list from (i) is θ(<em>n</em> ) (ii) is θ(<em>n</em> ).`
      ],
      answer: "B",
      solution: `<img alt="" src="js/questions/easy_2026_algorithm-2/img_20.png">`
    },

    {
      marks: 2,
      neg: 0,
      type: "NAT",
      text: `Consider the MadeEasy Knapsack called MEKnapack <br><br><img alt="" src="js/questions/easy_2026_algorithm-2/img_26.png"><br><br> What is maximum profit using greedy strategy based on profit/weight ratio?`,
      image: "",
      answer: 33,
      solution: `<img alt="" src="js/questions/easy_2026_algorithm-2/img_27.png">`
    }
  ]
});
