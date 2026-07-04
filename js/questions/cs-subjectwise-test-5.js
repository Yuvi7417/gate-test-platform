// /* ======================================================================
//    QUESTIONS FILE — GATE 2027 CS Subjectwise Test - 5 (Databases)
//    ======================================================================
//    This is the ONLY file you need to touch for THIS test's content.

//    ✍️  TO TYPE/EDIT A QUESTION:
//        Change the "text" field of the question object.

//    🖼️  TO ADD A DIAGRAM / IMAGE TO A QUESTION:
//        Set the "image" field to the image's file path or URL, e.g.:
//            image: "images/test5-q3.png"
//        (put the actual image file inside yuvraj/images/ and just point
//        to it by name). Leave it as `null` if the question has no image.

//    ✅  "correct" is the index (0 = A, 1 = B, 2 = C, 3 = D) of the right option.
//    🔢  "marks" / "neg" are the positive marks and negative marks for that question.

//    TO CREATE A NEW TEST:
//      1. Copy this file, rename it (e.g. cs-subjectwise-test-6.js).
//      2. Replace the questions inside with the new test's questions.
//      3. Add a <script src="js/questions/cs-subjectwise-test-6.js"></script>
//         line in index.html, right next to this one.
//      4. In js/exam.js, find `proceedFromInstructions()` and add a line to
//         route that test's name to `startPlayer(...)` the same way
//         "Subjectwise Test - 5" is handled — see the comment there.
//    ====================================================================== */

// const cs_subjectwise_test_5 = [
//   {
//     marks: 1,
//     neg: 0.33,
//     text: "Consider the following ER diagram. The Enrollment relationship set has a many-to-many cardinality between Student and Course. While converting the ER diagram into a relational model, which of the following is the primary key of the resulting Enrollment relation?",
//     image: 'images/mceclip0-1777716919370.png',
//     options: ["roll_no", "cid", "(roll_no, cid)", "enrollment_year"],
//     correct: 2,
//   },
//   {
//     marks: 1,
//     neg: 0.33,
//     text: "Which normal form removes partial functional dependencies on a composite candidate key?",
//     image: null,
//     options: ["1NF", "2NF", "3NF", "BCNF"],
//     correct: 1,
//   },
//   {
//     marks: 1,
//     neg: 0.33,
//     text: "In a B+ tree index, the leaf nodes are typically linked together to support which type of query efficiently?",
//     image: null,
//     options: [
//       "Point queries only",
//       "Range queries",
//       "Aggregate queries only",
//       "Join queries only",
//     ],
//     correct: 1,
//   },
//   {
//     marks: 1,
//     neg: 0.33,
//     text: "Which SQL clause is used to filter groups after aggregation?",
//     image: null,
//     options: ["WHERE", "GROUP BY", "HAVING", "ORDER BY"],
//     correct: 2,
//   },
//   {
//     marks: 1,
//     neg: 0.33,
//     text: "A relation R(A,B,C,D) has the functional dependency A → B and C → D. What is a candidate key of R?",
//     image: null,
//     options: ["A", "C", "AC", "AB"],
//     correct: 2,
//   },
//   {
//     marks: 1,
//     neg: 0.33,
//     text: "Which of the following isolation levels prevents dirty reads but allows non-repeatable reads?",
//     image: null,
//     options: [
//       "Read Uncommitted",
//       "Read Committed",
//       "Repeatable Read",
//       "Serializable",
//     ],
//     correct: 1,
//   },
//   {
//     marks: 1,
//     neg: 0.33,
//     text: "In the relational model, a foreign key constraint ensures that:",
//     image: null,
//     options: [
//       "No duplicate rows exist",
//       "Referential integrity between two relations is maintained",
//       "All attributes are non-null",
//       "A relation is in 3NF",
//     ],
//     correct: 1,
//   },
//   {
//     marks: 1,
//     neg: 0.33,
//     text: "Which of the following is NOT a property of a transaction (ACID)?",
//     image: null,
//     options: ["Atomicity", "Consistency", "Concurrency", "Durability"],
//     correct: 2,
//   },
//   {
//     marks: 1,
//     neg: 0.33,
//     text: 'What does the term "deadlock" refer to in the context of database transactions?',
//     image: null,
//     options: [
//       "A transaction that never commits",
//       "Two or more transactions waiting indefinitely for each other's locks",
//       "A transaction that reads uncommitted data",
//       "A failure of the storage engine",
//     ],
//     correct: 1,
//   },
//   {
//     marks: 2,
//     neg: 0.66,
//     text: "Consider a relation R(A,B,C,D,E) with functional dependencies: A→B, BC→D, D→E. Determine which of the following is the closure of {A,C}, and hence the minimal candidate key.",
//     image: null,
//     options: ["{A,C}", "{A,B,C,D,E}", "{A,B,C}", "{A,C,D}"],
//     correct: 1,
//   },
//   {
//     marks: 2,
//     neg: 0.66,
//     text: "A B+ tree of order 4 (max 3 keys per node) is used to index 100 records. Assuming the tree is built with maximum fan-out at every level, what is the minimum possible height of the tree (root at height 0)?",
//     image: null,
//     options: ["2", "3", "4", "5"],
//     correct: 1,
//   },
//   {
//     marks: 2,
//     neg: 0.66,
//     text: "Two transactions T1 and T2 execute concurrently with the following schedule: R1(X), W2(X), R1(Y), W1(X), Commit1, Commit2. Which of the following statements is true about this schedule?",
//     image: null,
//     options: [
//       "It is conflict serializable",
//       "It is view serializable but not conflict serializable",
//       "It is not serializable",
//       "It is strict but not serializable",
//     ],
//     correct: 2,
//   },
//   {
//     marks: 2,
//     neg: 0.66,
//     text: 'Given relations Employee(eid, name, dept_id) and Department(dept_id, dname), which relational algebra expression correctly returns names of employees who work in the "Sales" department?',
//     image: null,
//     options: [
//       "π_name(σ_dname=Sales(Employee ⋈ Department))",
//       "σ_dname=Sales(π_name(Employee) ⋈ Department)",
//       "π_name(Employee) ⋈ σ_dname=Sales(Department)",
//       "π_dname(σ_name=Sales(Employee ⋈ Department))",
//     ],
//     correct: 0,
//   },
//   {
//     marks: 2,
//     neg: 0.66,
//     text: "A hash index is built on attribute K of a relation with 10,000 records using a hash table of 1,000 buckets. Assuming a uniform hash function, what is the expected number of records per bucket, and what does this imply about worst-case search time in the absence of chaining overflow handling?",
//     image: null,
//     options: [
//       "1 record; O(1) always",
//       "10 records; O(1) on average, O(n) worst case",
//       "100 records; O(log n) always",
//       "10,000 records; O(n) always",
//     ],
//     correct: 1,
//   },
//   {
//     marks: 2,
//     neg: 0.66,
//     text: "Consider the SQL query: SELECT dept_id, COUNT(*) FROM Employee GROUP BY dept_id HAVING COUNT(*) > 5; Which of the following best describes what this query returns?",
//     image: null,
//     options: [
//       "All departments with more than 5 employees, along with their employee count",
//       "All employees in departments with more than 5 rows in any table",
//       "The department with the maximum employees",
//       "All departments, sorted by employee count descending",
//     ],
//     correct: 0,
//   },
//   {
//     marks: 2,
//     neg: 0.66,
//     text: "A relation is decomposed into R1 and R2 using a lossless-join decomposition. Which of the following conditions must hold on the common attributes R1 ∩ R2?",
//     image: null,
//     options: [
//       "R1 ∩ R2 must be a candidate key of R1 or R2",
//       "R1 ∩ R2 must be empty",
//       "R1 ∩ R2 must contain all attributes of R",
//       "R1 ∩ R2 must not functionally determine anything",
//     ],
//     correct: 0,
//   },
//   {
//     marks: 2,
//     neg: 0.66,
//     text: "In two-phase locking (2PL), a transaction acquires all the locks it needs before releasing any. Which of the following properties does strict 2PL additionally guarantee over basic 2PL?",
//     image: null,
//     options: [
//       "Serializability only",
//       "Deadlock freedom",
//       "Recoverability (no cascading aborts)",
//       "Higher concurrency",
//     ],
//     correct: 2,
//   },
// ];
// // pad remaining questions up to 33 with generic placeholders in the same style
// while (cs_subjectwise_test_5.length < 33) {
//   const n = cs_subjectwise_test_5.length + 1;
//   const isTwoMark = cs_subjectwise_test_5.length % 2 === 0;
//   cs_subjectwise_test_5.push({
//     marks: isTwoMark ? 2 : 1,
//     neg: isTwoMark ? 0.66 : 0.33,
//     text: `Placeholder question ${n} for GATE 2027 CS Subjectwise Test - 5 (Databases). Replace this text with the actual question — send the source screenshot and it will be swapped in exactly as shown.`,
//     image: null,
//     options: ["Option A", "Option B", "Option C", "Option D"],
//     correct: 0,
//   });
// }
