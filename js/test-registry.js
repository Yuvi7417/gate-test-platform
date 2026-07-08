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
registerTest({  // made easy cse topic wise test digital logic-1
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

registerTest({   // made easy cse topic wise test database-1
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

registerTest({   // made easy ece topic wise test digital circuit-1
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
  series: "cs-gate-2026-pyq",
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
  series: "cs-gate-2026-pyq",
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
  series: "cs-gate-2026-pyq",
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
