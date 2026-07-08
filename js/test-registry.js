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

registerTest({
  series: "ece-gate-pyq",
  name: "TWT - Digital Circuit-1",
  date: "July 07, 2026",
  questions: [
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: "",
      options: [],
      answer: "",
      solution: "",
    }
  ]
});

registerTest({
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
