registerTest({
    series: "cse-gate-2027",
    name: "TWT-DBMS(Relational Schema-II)",
    date: "sep 08, 2026",
    topicsCovered: "Candidate Keys Derivation, Attribute Closures, Superkeys Calculation, Referential Integrity, Functional Dependency Inference, Relation Instances, Lossless Join & Dependency Preservation",
    questions: [
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Let <span>\\( R = (A, B, C, D, E, F) \\)</span> be a relation scheme with the following dependencies <span>\\( C \\rightarrow F \\)</span>, <span>\\( E \\rightarrow A \\)</span>, <span>\\( EC \\rightarrow D \\)</span>, <span>\\( A \\rightarrow B \\)</span>. Which of the following is a key of R?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">CD</span>`,
                `<span style="display: inline;">EC</span>`,
                `<span style="display: inline;">AE</span>`,
                `<span style="display: inline;">AC</span>`
            ],
            answer: "B",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/51174/isro2015-20" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/isro-cse-2015" style="color:#2f6d1a; text-decoration:none" target="_blank">ISRO CSE 2015</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/database-management-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Database Management System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">The maximum length of an attribute of type text is</span>`,
            image: "",
            options: [
                `<span style="display: inline;">127</span>`,
                `<span style="display: inline;">255</span>`,
                `<span style="display: inline;">256</span>`,
                `<span style="display: inline;">It is variable</span>`
            ],
            answer: "D",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/51170/isro2015-19" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/isro-cse-2015" style="color:#2f6d1a; text-decoration:none" target="_blank">ISRO CSE 2015</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/database-management-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Database Management System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Let <span>\\( x, y, z, a, b, c \\)</span> be the attributes of an entity set <span>\\( E \\)</span>. If <span>\\( \\{x\\} \\)</span>, <span>\\( \\{x, y\\} \\)</span>, <span>\\( \\{a, b\\} \\)</span>, <span>\\( \\{a, b, c\\} \\)</span>, <span>\\( \\{x, y, z\\} \\)</span> are superkeys then which of the following are the candidate keys?</span>`,
            image: "",
            options: [
                `<span style="display: inline;"><span>\\( \\{x, y\\} \\)</span> and <span>\\( \\{a, b\\} \\)</span></span>`,
                `<span style="display: inline;"><span>\\( \\{x\\} \\)</span> and <span>\\( \\{a, b\\} \\)</span></span>`,
                `<span style="display: inline;"><span>\\( \\{x, y, z\\} \\)</span> and <span>\\( \\{a, b, c\\} \\)</span></span>`,
                `<span style="display: inline;"><span>\\( \\{z\\} \\)</span> and <span>\\( \\{c\\} \\)</span></span>`
            ],
            answer: "B",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/17425/isro2014-42" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/isro-cse-2014" style="color:#2f6d1a; text-decoration:none" target="_blank">ISRO CSE 2014</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/database-management-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Database Management System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0,
            type: "NAT",
            text: `<span style="display: inline;">Given an instance of the STUDENTS relation as shown below <br><img src="images/twt-dbms/q22.jpg"><br> For (StudentName, StudentAge) to be a key for this instance, the value <span>\\( x \\)</span> should NOT be equal to_______.</span>`,
            image: "",
            options: [
            ],
            answer: "19",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/1980/gate2014-2-22#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2014-set-2" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2014 SET-2</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/database-management-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Database Management System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0,
            type: "NAT",
            text: `<span style="display: inline;">The maximum number of super keys for the relation schema <span>\\( R(E, F, G, H) \\)</span> with <span>\\( E \\)</span> as the key is __________.</span>`,
            image: "",
            options: [
            ],
            answer: "8",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/1978/gate2014-2-21#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2014-set-2" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2014 SET-2</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/database-management-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Database Management System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Consider the relation scheme <span>\\( R = (E, F, G, H, I, J, K, L, M, N) \\)</span> and the set of functional dependencies <br> <span>\\( \\{ \\{E, F\\} \\rightarrow \\{G\\}, \\{F\\} \\rightarrow \\{I, J\\}, \\{E, H\\} \\rightarrow \\{K, L\\}, \\{K\\} \\rightarrow \\{M\\}, \\{L\\} \\rightarrow \\{N\\} \\} \\)</span> on <span>\\( R \\)</span>. What is the key for <span>\\( R \\)</span>?</span>`,
            image: "",
            options: [
                `<span style="display: inline;"><span>\\( \\{E, F\\} \\)</span></span>`,
                `<span style="display: inline;"><span>\\( \\{E, F, H\\} \\)</span></span>`,
                `<span style="display: inline;"><span>\\( \\{E, F, H, K, L\\} \\)</span></span>`,
                `<span style="display: inline;"><span>\\( \\{E\\} \\)</span></span>`
            ],
            answer: "B",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/1788/gate2014-1-21#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2014-set-1" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2014 SET-1</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/database-management-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Database Management System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Consider a relational table with a single record for each registered student with the following attributes. <br><br> 1. Registration_Number: Unique registration number for each registered student <br> 2. UID: Unique Identity number, unique at the national level for each citizen <br> 3. BankAccount_Number: Unique account number at the bank. A student can have multiple accounts or joint accounts. This attributes stores the primary account number <br> 4. Name: Name of the Student <br> 5. Hostel_Room: Room number of the hostel <br><br> Which of the following options is INCORRECT?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">BankAccount_Number is a candidate key</span>`,
                `<span style="display: inline;">Registration_Number can be a primary key</span>`,
                `<span style="display: inline;">UID is a candidate key if all students are from the same country</span>`,
                `<span style="display: inline;">If <span>\\( S \\)</span> is a superkey such that <span>\\( \\text{S} \\cap \\text{UID} \\)</span> is NULL then <span>\\( \\text{S} \\cup \\text{UID} \\)</span> is also a superkey</span>`
            ],
            answer: "A",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/2114/gate2011-12#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2011" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2011</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/database-management-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Database Management System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Purpose of 'Foreign Key' in a table is to ensure</span>`,
            image: "",
            options: [
                `<span style="display: inline;">Null Integrity</span>`,
                `<span style="display: inline;">Referential Integrity</span>`,
                `<span style="display: inline;">Domain Integrity</span>`,
                `<span style="display: inline;">Null and Domain Integrity</span>`
            ],
            answer: "B",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/47321/isro2009-72" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/isro-cse-2009" style="color:#2f6d1a; text-decoration:none" target="_blank">ISRO CSE 2009</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/database-management-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Database Management System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">The following functional dependencies are given:<br><br><span>\\( AB \\rightarrow CD, AF \\rightarrow D, DE \\rightarrow F, C \\rightarrow G, F \\rightarrow E, G \\rightarrow A \\)</span><br><br>Which one of the following options is false?</span>`,
            image: "",
            options: [
                `<span style="display: inline;"><span>\\( \\left\\{ CF \\right\\}^* = \\left\\{ ACDEFG \\right\\} \\)</span></span>`,
                `<span style="display: inline;"><span>\\( \\left\\{ BG \\right\\}^* = \\left\\{ ABCDG \\right\\} \\)</span></span>`,
                `<span style="display: inline;"><span>\\( \\left\\{ AF \\right\\}^* = \\left\\{ ACDEFG \\right\\} \\)</span></span>`,
                `<span style="display: inline;"><span>\\( \\left\\{ AB \\right\\}^* = \\left\\{ ABCDG \\right\\} \\)</span></span>`
            ],
            answer: "C",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/1848/gate2006-70#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2006" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2006</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/database-management-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Database Management System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Consider a relation scheme <span>\\( R = (A, B, C, D, E, H) \\)</span> on which the following functional dependencies hold: <span>\\( \\{ A \\rightarrow B, BC \\rightarrow D, E \\rightarrow C, D \\rightarrow A \\} \\)</span>. What are the candidate keys of <span>\\( R \\)</span>?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">AE, BE</span>`,
                `<span style="display: inline;">AE, BE, DE</span>`,
                `<span style="display: inline;">AEH, BEH, BCH</span>`,
                `<span style="display: inline;">AEH, BEH, DEH</span>`
            ],
            answer: "D",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/1401/gate2005-78#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2005" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2005</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/database-management-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Database Management System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">From the following instance of relation schema <span>\\( R(A, B, C) \\)</span>, we can conclude that : <br><img src="images/twt-dbms/q50.jpg"></span>`,
            image: "",
            options: [
                `<span style="display: inline;">A functionally determines B and B functionally determines C</span>`,
                `<span style="display: inline;">A functionally determines B and B does not functionally determines C .</span>`,
                `<span style="display: inline;">B does not functionally determines C</span>`,
                `<span style="display: inline;">A does not functionally B and B does not functionally determines.</span>`
            ],
            answer: "C",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/855/gate2002-2-25#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2002" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2002</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/database-management-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Database Management System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Let <span>\\( R = (A, B, C, D, E, F) \\)</span> be a relation scheme with the following dependencies <span>\\( C \\rightarrow F, E \\rightarrow A, EC \\rightarrow D, A \\rightarrow B \\)</span>. Which one of the following is a key for <span>\\( R \\)</span>?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">CD</span>`,
                `<span style="display: inline;">EC</span>`,
                `<span style="display: inline;">AE</span>`,
                `<span style="display: inline;">AC</span>`
            ],
            answer: "B",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/1477/gate1999-1-24" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-1999" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 1999</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/database-management-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Database Management System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Consider a schema <span>\\( R(A, B, C, D) \\)</span> and functional dependencies <span>\\( A \\rightarrow B \\)</span> and <span>\\( C \\rightarrow D \\)</span>. Then the decomposition of <span>\\( R \\)</span> into <span>\\( R_1(AB) \\)</span> and <span>\\( R_2(CD) \\)</span> is :</span>`,
            image: "",
            options: [
                `<span style="display: inline;">Dependency preserving and lossless join</span>`,
                `<span style="display: inline;">Lossless join but not dependency preserving</span>`,
                `<span style="display: inline;">Dependency preserving but not lossless join</span>`,
                `<span style="display: inline;">Not dependency preserving and not lossless join</span>`
            ],
            answer: "C",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/716/gate2001-1-23#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2001" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2001</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/database-management-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Database Management System</a></div></div>`
        }
    ]
});

registerTest({
    series: "cse-gate-2027",
    name: "TWT-DBMS(Relational Algebra-I)",
    date: "sep 08, 2026",
    topicsCovered: "Relational Algebra Operators, Relational Division, Left & Full Outer Joins, Join Tuple Counts, Query Optimization, Block Nested Loop Join, Referential Integrity, Indexing vs Hashing",
    questions: [
        {
            marks: 2,
            neg: 0.66,
            type: "MCQ",
            text: `<span style="display: inline;">The relation schema, <span>\\( Person(pid, city) \\)</span>, describes the city of residence for every person uniquely identified by <span>\\( pid \\)</span>. The following relational algebra operators are available: selection, projection, cross product, and rename.<br><br>To find the list of cities where at least 3 persons reside, using the above operators, the minimum number of cross product operations that must be used is</span>`,
            image: "",
            options: [
                `<span style="display: inline;">1</span>`,
                `<span style="display: inline;">2</span>`,
                `<span style="display: inline;">3</span>`,
                `<span style="display: inline;">4</span>`
            ],
            answer: "B",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/422862/gate-cse-2024-set-2-question-35#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2024-set-2" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2024 SET-2</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/database-management-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Database Management System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0,
            type: "MSQ",
            text: `<span style="display: inline;">Consider the following three relations in a relational database.<br><span>\\( Employee(eId, Name), Brand(bId, bName), Own(eId, bId) \\)</span><br>Which of the following relational algebra expressions return the set of <span>\\( eIds \\)</span> who own all the brands?</span>`,
            image: "",
            options: [
                `<span style="display: inline;"><span>\\( \\Pi_{eId}(\\Pi_{eId, bId}(Own) / \\Pi_{bId}(Brand)) \\)</span></span>`,
                `<span style="display: inline;"><span>\\( \\Pi_{eId}(Own) - \\Pi_{eId}\\left((\\Pi_{eId}(Own) \\times \\Pi_{bId}(Brand)) - \\Pi_{eId, bId}(Own)\\right) \\)</span></span>`,
                `<span style="display: inline;"><span>\\( \\Pi_{eId}(\\Pi_{eId, bId}(Own) / \\Pi_{bId}(Own)) \\)</span></span>`,
                `<span style="display: inline;"><span>\\( \\Pi_{eId}\\left((\\Pi_{eId}(Own) \\times \\Pi_{bId}(Own)) / \\Pi_{bId}(Brand)\\right) \\)</span></span>`
            ],
            answer: ["A", "B"],
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/371921/Gate-cse-2022-question-15#a_list_title" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2022" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2022</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/database-management-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Database Management System</a></div></div>`
        },
        {
            marks: 2,
            neg: 0.66,
            type: "MCQ",
            text: `<span style="display: inline;">The following relation records the age of 500 employees of a company, where <span>\\( empNo \\)</span> (indicating the employee number) is the key:<br><br><span>\\( empAge(\\underline{empNo}, age) \\)</span><br><br>Consider the following relational algebra expression:<br><br><span>\\( \\Pi_{empNo}(empAge \\Join_{(age > age1)} \\rho_{empNo1, age1}(empAge)) \\)</span><br><br>What does the above expression generate?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">Employee numbers of only those employees whose age is the maximum</span>`,
                `<span style="display: inline;">Employee numbers of only those employees whose age is more than the age of exactly one other employee</span>`,
                `<span style="display: inline;">Employee numbers of all employees whose age is not the minimum</span>`,
                `<span style="display: inline;">Employee numbers of all employees whose age is the minimum</span>`
            ],
            answer: "C",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/357424/gate-cse-2021-set-1-question-27#a_list_title" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2021-set-1" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2021 SET-1</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/database-management-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Database Management System</a></div></div>`
        },
        {
            marks: 2,
            neg: 0,
            type: "NAT",
            text: `<span style="display: inline;">Consider the following relation <span>\\( P(X, Y, Z), Q(X, Y, T) \\)</span> and <span>\\( R(Y, V) \\)</span>:<br><img src="images/twt-dbms/q55.jpg"><br>How many tuples will be returned by the following relational algebra query?<br><img src="images/twt-dbms/q55a.jpg"><br>Answer:______</span>`,
            image: "",
            options: [
            ],
            answer: "1",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/302793/gate2019-cs-55#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2019" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2019</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/database-management-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Database Management System</a></div></div>`
        },
        {
            marks: 2,
            neg: 0.66,
            type: "MCQ",
            text: `<span style="display: inline;">Consider the relations <span>\\( r(A, B) \\)</span> and <span>\\( s(B, C) \\)</span>, where <span>\\( s.B \\)</span> is a primary key and <span>\\( r.B \\)</span> is a foreign key referencing <span>\\( s.B \\)</span>. Consider the query<br> <span>\\( Q : r \\Join (\\sigma_{B < 5}(s)) \\)</span> <br> Let LOJ denote the natural left outer-join operation. Assume that <span>\\( r \\)</span> and <span>\\( s \\)</span> contain no null values. <br>Which one of the following queries is NOT equivalent to Q?</span>`,
            image: "",
            options: [
                `<span style="display: inline;"><span>\\( \\sigma_{B < 5}(r \\Join s) \\)</span></span>`,
                `<span style="display: inline;"><span>\\( \\sigma_{B < 5}(r \\text{ LOJ } s) \\)</span></span>`,
                `<span style="display: inline;"><span>\\( r \\text{ LOJ } (\\sigma_{B < 5}(s)) \\)</span></span>`,
                `<span style="display: inline;"><span>\\( \\sigma_{B < 5}(r) \\text{ LOJ } s \\)</span></span>`
            ],
            answer: "C",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/204115/gate2018-41#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2018" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2018</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/database-management-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Database Management System</a></div></div>`
        },
        {
            marks: 2,
            neg: 0,
            type: "NAT",
            text: `<span style="display: inline;">Consider a database that has the relation schema <span>\\( CR(StudentName, CourseName) \\)</span>. An instance of the schema <span>\\( CR \\)</span> is as given below.<br><img src="images/twt-dbms/q53.jpg"><br>The following query is made on the database:<br><br><span>\\( T_1 \\leftarrow \\pi_{CourseName}(\\sigma_{StudentName=\\text{'SA'}}(CR)) \\)</span><br><span>\\( T_2 \\leftarrow CR \\div T_1 \\)</span><br><br>The number of rows in <span>\\( T_2 \\)</span> is ____________.</span>`,
            image: "",
            options: [
            ],
            answer: "4",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/118329/gate2017-1-46#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2017-set-1" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2017 SET-1</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/database-management-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Database Management System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Given the relations<br><span>\\( employee(name, salary, dept\\text{-}no) \\)</span>, and<br><span>\\( department(dept\\text{-}no, dept\\text{-}name, address) \\)</span>,<br>Which of the following queries cannot be expressed using the basic relational algebra operations <span>\\( \\left(\\sigma, \\pi, \\times, \\Join, \\cup, \\cap, -\\right) \\)</span>?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">Department address of every employee</span>`,
                `<span style="display: inline;">Employees whose name is the same as their department name</span>`,
                `<span style="display: inline;">The sum of all employees' salaries</span>`,
                `<span style="display: inline;">All employees of a given department</span>`
            ],
            answer: "C",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/647/gate2000-1-23-isro2016-57" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/isro-cse-2016" style="color:#2f6d1a; text-decoration:none" target="_blank">ISRO CSE 2016</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/database-management-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Database Management System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Consider the join of a relation <span>\\( R \\)</span> with a relation <span>\\( S \\)</span>. If <span>\\( R \\)</span> has <span>\\( m \\)</span> tuples and <span>\\( S \\)</span> has <span>\\( n \\)</span> tuples then the maximum and minimum sizes of the join respectively are</span>`,
            image: "",
            options: [
                `<span style="display: inline;"><span>\\( m+n \\)</span> and 0</span>`,
                `<span style="display: inline;"><span>\\( mn \\)</span> and 0</span>`,
                `<span style="display: inline;"><span>\\( m+n \\)</span> and <span>\\( |m-n| \\)</span></span>`,
                `<span style="display: inline;"><span>\\( mn \\)</span> and <span>\\( m+n \\)</span></span>`
            ],
            answer: "B",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/1471/gate1999-1-18-isro2016-53" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/isro-cse-2016" style="color:#2f6d1a; text-decoration:none" target="_blank">ISRO CSE 2016</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/database-management-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Database Management System</a></div></div>`
        },
        {
            marks: 2,
            neg: 0.66,
            type: "MCQ",
            text: `<span style="display: inline;">Consider two relations <span>\\( R_1(A, B) \\)</span> with the tuples (1, 5), (3, 7) and <span>\\( R_2(A, C) = (1, 7), (4, 9) \\)</span>. Assume that <span>\\( R(A, B, C) \\)</span> is the full natural outer join of <span>\\( R_1 \\)</span> and <span>\\( R_2 \\)</span>. Consider the following tuples of the form <span>\\( (A, B, C) \\)</span>: <span>\\( a = (1, 5, \\text{null}), b = (1, \\text{null}, 7), c = (3, \\text{null}, 9), d = (4, 7, \\text{null}), e = (1, 5, 7), f = (3, 7, \\text{null}), g = (4, \\text{null}, 9) \\)</span>. Which one of the following statements is correct?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">R contains a, b, e, f, g but not c, d.</span>`,
                `<span style="display: inline;">R contains all of a, b, c, d, e, f, g.</span>`,
                `<span style="display: inline;">R contains e, f, g but not a, b.</span>`,
                `<span style="display: inline;">R contains e but not f, g.</span>`
            ],
            answer: "C",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/8151/gate2015-2-30#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2015-set-2" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2015 SET-2</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/database-management-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Database Management System</a></div></div>`
        },
        {
            marks: 2,
            neg: 0.66,
            type: "MCQ",
            text: `<span style="display: inline;">Consider the relational schema given below, where <span>\\( eId \\)</span> of the relation <span>\\( dependent \\)</span> is a foreign key referring to <span>\\( empId \\)</span> of the relation <span>\\( employee \\)</span>. Assume that every employee has at least one associated dependent in the dependent relation.<br><img src="images/twt-dbms/q30.jpg"><br>The above query evaluates to the set of <span>\\( empIds \\)</span> of employees whose age is greater than that of</span>`,
            image: "",
            options: [
                `<span style="display: inline;">some dependent</span>`,
                `<span style="display: inline;">all dependents</span>`,
                `<span style="display: inline;">some of his/her dependents</span>`,
                `<span style="display: inline;">all of his/her dependents</span>`
            ],
            answer: "D",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/2064/gate2014-3-30#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2014-set-3" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2014 SET-3</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/database-management-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Database Management System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">What is the optimized version of the relational algebra expression <span>\\( \\pi_{A_1}(\\pi_{A_2}(\\sigma_{F_1}(\\sigma_{F_2}(r)))) \\)</span>, where <span>\\( A_1, A_2 \\)</span> are sets of attributes in <span>\\( r \\)</span> with <span>\\( A_1 \\subset A_2 \\)</span> and <span>\\( F_1, F_2 \\)</span> are Boolean expressions based on the attributes in <span>\\( r \\)</span>?</span>`,
            image: "",
            options: [
                `<span style="display: inline;"><span>\\( \\pi_{A_1}(\\sigma_{F_1 \\wedge F_2}(r)) \\)</span></span>`,
                `<span style="display: inline;"><span>\\( \\pi_{A_1}(\\sigma_{F_1 \\vee F_2}(r)) \\)</span></span>`,
                `<span style="display: inline;"><span>\\( \\pi_{A_2}(\\sigma_{F_1 \\wedge F_2}(r)) \\)</span></span>`,
                `<span style="display: inline;"><span>\\( \\pi_{A_2}(\\sigma_{F_1 \\vee F_2}(r)) \\)</span></span>`
            ],
            answer: "A",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/2055/gate2014-3-21#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2014-set-3" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2014 SET-3</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/database-management-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Database Management System</a></div></div>`
        },
        {
            marks: 2,
            neg: 0.66,
            type: "MCQ",
            text: `<span style="display: inline;">Consider a join (relational algebra) between relations <span>\\( r(R) \\)</span> and <span>\\( s(S) \\)</span> using the nested loop method. There are 3 buffers each of size equal to disk block size, out of which one buffer is reserved for intermediate results. Assuming <span>\\( \\text{size}(r(R)) < \\text{size}(s(S)) \\)</span>, the join will have fewer number of disk block accesses if</span>`,
            image: "",
            options: [
                `<span style="display: inline;">relation <span>\\( r(R) \\)</span> is in the outer loop.</span>`,
                `<span style="display: inline;">relation <span>\\( s(S) \\)</span> is in the outer loop.</span>`,
                `<span style="display: inline;">join selection factor between <span>\\( r(R) \\)</span> and <span>\\( s(S) \\)</span> is more than 0.5.</span>`,
                `<span style="display: inline;">join selection factor between <span>\\( r(R) \\)</span> and <span>\\( s(S) \\)</span> is less than 0.5.</span>`
            ],
            answer: "A",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/1989/gate2014-2-30#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2014-set-2" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2014 SET-2</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/database-management-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Database Management System</a></div></div>`
        },
        {
            marks: 2,
            neg: 0.66,
            type: "MCQ",
            text: `<span style="display: inline;">Consider the following relations <span>\\( A, B \\)</span> and <span>\\( C \\)</span>:<br><img src="images/twt-dbms/q50_2012.jpg"><br>How many tuples does the result of the following relational algebra expression contain? Assume that the schema of <span>\\( A \\cup B \\)</span> is the same as that of <span>\\( A \\)</span>.<br><span>\\( (A \\cup B) \\bowtie_{A.Id > 40 \\vee C.Id < 15} C \\)</span></span>`,
            image: "",
            options: [
                `<span style="display: inline;">7</span>`,
                `<span style="display: inline;">4</span>`,
                `<span style="display: inline;">5</span>`,
                `<span style="display: inline;">9</span>`
            ],
            answer: "A",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/2180/gate2012-50#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2012" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2012</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/database-management-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Database Management System</a></div></div>`
        },
        {
            marks: 2,
            neg: 0.66,
            type: "MCQ",
            text: `<span style="display: inline;">Suppose <span>\\( R_1(A, B) \\)</span> and <span>\\( R_2(C, D) \\)</span> are two relation schemas. Let <span>\\( r_1 \\)</span> and <span>\\( r_2 \\)</span> be the corresponding relation instances. <span>\\( B \\)</span> is a foreign key that refers to <span>\\( C \\)</span> in <span>\\( R_2 \\)</span>. If data in <span>\\( r_1 \\)</span> and <span>\\( r_2 \\)</span> satisfy referential integrity constraints, which of the following is ALWAYS TRUE?</span>`,
            image: "",
            options: [
                `<span style="display: inline;"><span>\\( \\Pi_{B}(r_1) - \\Pi_{C}(r_2) = \\phi \\)</span></span>`,
                `<span style="display: inline;"><span>\\( \\Pi_{C}(r_1) - \\Pi_{B}(r_2) = \\phi \\)</span></span>`,
                `<span style="display: inline;"><span>\\( \\Pi_{B}(r_1) = \\Pi_{C}(r_2) \\)</span></span>`,
                `<span style="display: inline;"><span>\\( \\Pi_{B}(r_1) - \\Pi_{C}(r_2) \\neq \\phi \\)</span></span>`
            ],
            answer: "A",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/2151/gate2012-43#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2012" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2012</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/database-management-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Database Management System</a></div></div>`
        },
        {
            marks: 2,
            neg: 0.66,
            type: "MCQ",
            text: `<span style="display: inline;">Consider a relational table <span>\\( r \\)</span> with sufficient number of records, having attributes <span>\\( A_1, A_2, \\dots, A_n \\)</span> and let <span>\\( 1 \\leq p \\leq n \\)</span>. Two queries <span>\\( Q_1 \\)</span> and <span>\\( Q_2 \\)</span> are given below.<br><br><span>\\( Q_1 : \\pi_{A_1 \\dots A_n}(\\sigma_{A_p = c}(r)) \\)</span> where <span>\\( c \\)</span> is a constant<br><span>\\( Q_2 : \\pi_{A_1 \\dots A_n}(\\sigma_{c_1 \\leq A_p \\leq c_2}(r)) \\)</span> where <span>\\( c_1 \\)</span> and <span>\\( c_2 \\)</span> are constants<br><br>The database can be configured to do ordered indexing on <span>\\( A_p \\)</span> or hashing on <span>\\( A_p \\)</span>.<br><br>Which of the following statements is TRUE?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">Ordered indexing will always outperform hashing for both queries</span>`,
                `<span style="display: inline;">Hashing will always outperform ordered indexing for both queries</span>`,
                `<span style="display: inline;">Hashing will outperform ordered indexing on <span>\\( Q_1 \\)</span>, but not on <span>\\( Q_2 \\)</span></span>`,
                `<span style="display: inline;">Hashing will outperform ordered indexing on <span>\\( Q_2 \\)</span>, but not on <span>\\( Q_1 \\)</span></span>`
            ],
            answer: "C",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/2141/gate2011-39#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2011" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2011</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/database-management-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Database Management System</a></div></div>`
        }
    ]
});

registerTest({
    series: "cse-gate-2027",
    name: "TWT-DBMS(Relational Algebra-II)",
    date: "sep 08, 2026",
    topicsCovered: "Join Size Bounds, Tuple Relational Calculus (TRC), Relational Query Equivalence, Selectivity Estimation, Set Difference & Division, Expressive Power of Relational Algebra, Foreign Key Joins",
    questions: [
        {
            marks: 2,
            neg: 0.66,
            type: "MCQ",
            text: `<span style="display: inline;">The following functional dependencies hold for relations <span>\\( R(A, B, C) \\)</span> and <span>\\( S(B, D, E) \\)</span>:<br><br><span>\\( B \\rightarrow A \\)</span><br><span>\\( A \\rightarrow C \\)</span><br><br>The relation <span>\\( R \\)</span> contains 200 tuples and the relation <span>\\( S \\)</span> contains 100 tuples. What is the maximum number of tuples possible in the natural join <span>\\( R \\Join S \\)</span>?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">100</span>`,
                `<span style="display: inline;">200</span>`,
                `<span style="display: inline;">300</span>`,
                `<span style="display: inline;">2000</span>`
            ],
            answer: "A",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  In R, B \\rightarrow A and A \\rightarrow C, so B is a key of R. Each tuple of S (joined on B) matches at most one tuple of R.<br><br>Max join size = |S| = 100.<br><br><b>Answer: 100</b><br><br><a href="https://gateoverflow.in/2344/gate2010-43#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2010" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2010</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/database-management-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Database Management System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">The join operation can be defined as</span>`,
            image: "",
            options: [
                `<span style="display: inline;">a cartesian product of two relations followed by a selection</span>`,
                `<span style="display: inline;">a cartesian product of two relations</span>`,
                `<span style="display: inline;">a union of two relations followed by cartesian product of the two relations</span>`,
                `<span style="display: inline;">a union of two relations</span>`
            ],
            answer: "A",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/49914/isro2008-33" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/isro-cse-2008" style="color:#2f6d1a; text-decoration:none" target="_blank">ISRO CSE 2008</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/database-management-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Database Management System</a></div></div>`
        },
        {
            marks: 2,
            neg: 0.66,
            type: "MCQ",
            text: `<span style="display: inline;">Consider the following relational schema:<br><pre style="background: #f4f4f4; padding: 8px; border-radius: 4px; font-family: monospace;">Student(school-id, sch-roll-no, sname, saddress)&#10;School(school-id, sch-name, sch-address, sch-phone)&#10;Enrolment(school-id, sch-roll-no, erollno, examname)&#10;ExamResult(erollno, examname, marks)</pre><br>Consider the following tuple relational calculus query:<br><span>\\( \\begin{array}{l} \\{t \\mid \\exists E \\in \\text{Enrolment } t = E.\\text{school-id} \\\\ \\wedge |\\{x \\mid x \\in \\text{Enrolment } \\wedge x.\\text{school-id} = t \\wedge (\\exists B \\in \\text{ExamResult } B.\\text{erollno} = x.\\text{erollno} \\wedge B.\\text{examname} = x.\\text{examname} \\wedge B.\\text{marks} > 35)\\}| \\div |\\{x \\mid x \\in \\text{Enrolment } \\wedge x.\\text{school-id} = t\\}| \\\\ * 100 > 35\\} \\end{array} \\)</span><br><br>If a student needs to score more than 35 marks to pass an exam, what does the query return?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">The empty set</span>`,
                `<span style="display: inline;">schools with more than 35% of its students enrolled in some exam or the other</span>`,
                `<span style="display: inline;">schools with a pass percentage above 35% over all exams taken together</span>`,
                `<span style="display: inline;">schools with a pass percentage above 35% over each exam</span>`
            ],
            answer: "C",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/3389/gate2008-it-75" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-it-2008" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE IT 2008</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/database-management-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Database Management System</a></div></div>`
        },
        {
            marks: 2,
            neg: 0.66,
            type: "MCQ",
            text: `<span style="display: inline;">Let <span>\\( R \\)</span> and <span>\\( S \\)</span> be two relations with the following schema:<br><br><span>\\( R(\\underline{P}, \\underline{Q}, R_1, R_2, R_3) \\)</span><br><span>\\( S(\\underline{P}, \\underline{Q}, S_1, S_2) \\)</span><br><br>Where <span>\\( \\{P, Q\\} \\)</span> is the key for both schemas. Which of the following queries are equivalent?<br><br>I. <span>\\( \\Pi_{P}(R \\Join S) \\)</span><br>II. <span>\\( \\Pi_{P}(R) \\Join \\Pi_{P}(S) \\)</span><br>III. <span>\\( \\Pi_{P}(\\Pi_{P, Q}(R) \\cap \\Pi_{P, Q}(S)) \\)</span><br>IV. <span>\\( \\Pi_{P}(\\Pi_{P, Q}(R) - (\\Pi_{P, Q}(R) - \\Pi_{P, Q}(S))) \\)</span></span>`,
            image: "",
            options: [
                `<span style="display: inline;">Only I and II</span>`,
                `<span style="display: inline;">Only I and III</span>`,
                `<span style="display: inline;">Only I, II and III</span>`,
                `<span style="display: inline;">Only I, III and IV</span>`
            ],
            answer: "D",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/491/gate2008-68#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2008" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2008</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/database-management-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Database Management System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Which operation is used to extract specified columns from a table?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">Project</span>`,
                `<span style="display: inline;">Join</span>`,
                `<span style="display: inline;">Extract</span>`,
                `<span style="display: inline;">Substitute</span>`
            ],
            answer: "A",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/49532/isro2007-52" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/isro-cse-2007" style="color:#2f6d1a; text-decoration:none" target="_blank">ISRO CSE 2007</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/database-management-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Database Management System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Consider the following relation schemas:<br><span>\\( \\text{b-Schema} = (\\text{b-name}, \\text{b-city}, \\text{assets}) \\)</span><br><span>\\( \\text{a-Schema} = (\\text{a-num}, \\text{b-name}, \\text{bal}) \\)</span><br><span>\\( \\text{d-Schema} = (\\text{c-name}, \\text{a-number}) \\)</span><br>Let branch, account and depositor be respectively instances of the above schemas. Assume that account and depositor relations are much bigger than the branch relation.<br><br>Consider the following query:<br><span>\\( \\Pi_{\\text{c-name}}(\\sigma_{\\text{b-city}=\\text{"Agra"} \\wedge \\text{bal} < 0}(branch \\Join (account \\Join depositor))) \\)</span><br><br>Which one of the following queries is the most efficient version of the above query?</span>`,
            image: "",
            options: [
                `<span style="display: inline;"><span>\\( \\Pi_{\\text{c-name}}(\\sigma_{\\text{bal} < 0}(\\sigma_{\\text{b-city}=\\text{"Agra"}} branch \\Join account) \\Join depositor) \\)</span></span>`,
                `<span style="display: inline;"><span>\\( \\Pi_{\\text{c-name}}(\\sigma_{\\text{b-city}=\\text{"Agra"}} branch \\Join (\\sigma_{\\text{bal} < 0} account \\Join depositor)) \\)</span></span>`,
                `<span style="display: inline;"><span>\\( \\Pi_{\\text{c-name}}((\\sigma_{\\text{b-city}=\\text{"Agra"}} branch \\Join \\sigma_{\\text{b-city}=\\text{"Agra"} \\wedge \\text{bal} < 0} account) \\Join depositor) \\)</span></span>`,
                `<span style="display: inline;"><span>\\( \\Pi_{\\text{c-name}}(\\sigma_{\\text{b-city}=\\text{"Agra"}} branch \\Join (\\sigma_{\\text{b-city}=\\text{"Agra"} \\wedge \\text{bal} < 0} account \\Join depositor)) \\)</span></span>`
            ],
            answer: "A",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/3513/gate2007-it-68" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-it-2007" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE IT 2007</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/database-management-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Database Management System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Consider a selection of the form <span>\\( \\sigma_{A \\leq 100}(r) \\)</span>, where <span>\\( r \\)</span> is a relation with 1000 tuples. Assume that the attribute values for <span>\\( A \\)</span> among the tuples are uniformly distributed in the interval [0, 500]. Which one of the following options is the best estimate of the number of tuples returned by the given selection query?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">50</span>`,
                `<span style="display: inline;">100</span>`,
                `<span style="display: inline;">150</span>`,
                `<span style="display: inline;">200</span>`
            ],
            answer: "D",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/3510/gate2007-it-65" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-it-2007" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE IT 2007</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/database-management-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Database Management System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Information about a collection of students is given by the relation <span>\\( studinfo(\\underline{studId}, name, sex) \\)</span>. The relation <span>\\( enroll(studId, courseId) \\)</span> gives which student has enrolled for (or taken) what course(s). Assume that every course is taken by at least one male and at least one female student. What does the following relational algebra expression represent?<br><img src="images/twt-dbms/q59.jpg"><br></span>`,
            image: "",
            options: [
                `<span style="display: inline;">Courses in which all the female students are enrolled.</span>`,
                `<span style="display: inline;">Courses in which a proper subset of female students are enrolled.</span>`,
                `<span style="display: inline;">Courses in which only male students are enrolled.</span>`,
                `<span style="display: inline;">None of the above</span>`
            ],
            answer: "B",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/2428/gate2007-59#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2007" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2007</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/database-management-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Database Management System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Consider the relations <span>\\( r_1(P, Q, R) \\)</span> and <span>\\( r_2(R, S, T) \\)</span> with primary keys <span>\\( P \\)</span> and <span>\\( R \\)</span> respectively. The relation <span>\\( r_1 \\)</span> contains 2000 tuples and <span>\\( r_2 \\)</span> contains 2500 tuples. The maximum size of the join <span>\\( r_1 \\Join r_2 \\)</span> is:</span>`,
            image: "",
            options: [
                `<span style="display: inline;">2000</span>`,
                `<span style="display: inline;">2500</span>`,
                `<span style="display: inline;">4500</span>`,
                `<span style="display: inline;">5000</span>`
            ],
            answer: "A",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/3553/gate2006-it-14" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-it-2006" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE IT 2006</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/database-management-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Database Management System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Let <span>\\( r \\)</span> be a relation instance with schema <span>\\( R = (A, B, C, D) \\)</span>. We define <span>\\( r_1 = \\Pi_{A, B, C}(R) \\)</span> and <span>\\( r_2 = \\Pi_{A, D}(R) \\)</span>. Let <span>\\( s = r_1 * r_2 \\)</span> where <span>\\( * \\)</span> denotes natural join. Given that the decomposition of <span>\\( r \\)</span> into <span>\\( r_1 \\)</span> and <span>\\( r_2 \\)</span> is lossy, which one of the following is TRUE?</span>`,
            image: "",
            options: [
                `<span style="display: inline;"><span>\\( S \\subset r \\)</span></span>`,
                `<span style="display: inline;"><span>\\( r \\cup S = r \\)</span></span>`,
                `<span style="display: inline;"><span>\\( r \\subset S \\)</span></span>`,
                `<span style="display: inline;"><span>\\( r * S = S \\)</span></span>`
            ],
            answer: "C",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/1366/gate2005-30#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2005" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2005</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/database-management-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Database Management System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Consider the relation <span>\\( Student(\\underline{name}, sex, marks) \\)</span>, where the primary key is shown underlined, pertaining to students in a class that has at least one boy and one girl. What does the following relational algebra expression produce?<br>(Note: <span>\\( \\rho \\)</span> is the rename operator).<br><img src="images/twt-dbms/q51.jpg"><br>The condition in join is "<span>\\( (sex = \\text{female} \\wedge x = \\text{male} \\wedge marks \\leq m) \\)</span>"</span>`,
            image: "",
            options: [
                `<span style="display: inline;">names of girl students with the highest marks</span>`,
                `<span style="display: inline;">names of girl students with more marks than some boy student</span>`,
                `<span style="display: inline;">names of girl students with marks not less than some boy student</span>`,
                `<span style="display: inline;">names of girl students with more marks than all the boy students</span>`
            ],
            answer: "D",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/1047/gate2004-51#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2004" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2004</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/database-management-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Database Management System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Let <span>\\( R_1(\\underline{A}, B, C) \\)</span> and <span>\\( R_2(\\underline{D}, E) \\)</span> be two relation schemas, where the primary keys are shown underlined, and let <span>\\( C \\)</span> be a foreign key in <span>\\( R_1 \\)</span> referring to <span>\\( R_2 \\)</span>. Suppose there is no violation of the above referential integrity constraint in the corresponding relation instances <span>\\( r_1 \\)</span> and <span>\\( r_2 \\)</span>. Which one of the following relational algebra expressions would necessarily produce an empty relation?</span>`,
            image: "",
            options: [
                `<span style="display: inline;"><span>\\( \\Pi_{D}(r_2) - \\Pi_{C}(r_1) \\)</span></span>`,
                `<span style="display: inline;"><span>\\( \\Pi_{C}(r_1) - \\Pi_{D}(r_2) \\)</span></span>`,
                `<span style="display: inline;"><span>\\( \\Pi_{D}(r_1 \\Join_{C \\neq D} r_2) \\)</span></span>`,
                `<span style="display: inline;"><span>\\( \\Pi_{C}(r_1 \\Join_{C = D} r_2) \\)</span></span>`
            ],
            answer: "B",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/1010/gate2004-13#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2004" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2004</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/database-management-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Database Management System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">With regard to the expressive power of the formal relational query languages, which of the following statements is true?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">Relational algebra is more powerful than relational calculus.</span>`,
                `<span style="display: inline;">Relational algebra has the same power as relational calculus.</span>`,
                `<span style="display: inline;">Relational algebra has the same power as safe relational calculus.</span>`,
                `<span style="display: inline;">None of the above.</span>`
            ],
            answer: "C",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/825/gate2002-1-20#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2002" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2002</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/database-management-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Database Management System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Given the relations<br><span>\\( employee(name, salary, dept\\text{-}no) \\)</span>, and<br><span>\\( department(dept\\text{-}no, dept\\text{-}name, address) \\)</span>,<br>Which of the following queries cannot be expressed using the basic relational algebra operations <span>\\( \\left(\\sigma, \\pi, \\times, \\Join, \\cup, \\cap, -\\right) \\)</span>?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">Department address of every employee</span>`,
                `<span style="display: inline;">Employees whose name is the same as their department name</span>`,
                `<span style="display: inline;">The sum of all employees\\' salaries</span>`,
                `<span style="display: inline;">All employees of a given department</span>`
            ],
            answer: "C",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/647/gate2000-1-23-isro2016-57" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2000" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2000</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/database-management-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Database Management System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Consider the join of a relation <span>\\( R \\)</span> with a relation <span>\\( S \\)</span>. If <span>\\( R \\)</span> has <span>\\( m \\)</span> tuples and <span>\\( S \\)</span> has <span>\\( n \\)</span> tuples then the maximum and minimum sizes of the join respectively are</span>`,
            image: "",
            options: [
                `<span style="display: inline;"><span>\\( m+n \\)</span> and 0</span>`,
                `<span style="display: inline;"><span>\\( mn \\)</span> and 0</span>`,
                `<span style="display: inline;"><span>\\( m+n \\)</span> and <span>\\( |m-n| \\)</span></span>`,
                `<span style="display: inline;"><span>\\( mn \\)</span> and <span>\\( m+n \\)</span></span>`
            ],
            answer: "B",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/1471/gate1999-1-18-isro2016-53" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-1999" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 1999</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/database-management-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Database Management System</a></div></div>`
        }
    ]
});

registerTest({
    series: "cse-gate-2027",
    name: "TWT-DBMS(Normal Form-I)",
    date: "sep 08, 2026",
    topicsCovered: "Armstrong's Axioms, Dependency Preservation, 1NF & 2NF Properties, 3NF vs BCNF Conditions, Minimal Cover, Partial Dependencies, Trivial Functional Dependencies, Lossless Decomposition",
    questions: [
        {
            marks: 2,
            neg: 0.66,
            type: "MCQ",
            text: `<span style="display: inline;">In the context of schema normalization in relational DBMS, consider a set <span>\\( F \\)</span> of functional dependencies. The set of all functional dependencies implied by <span>\\( F \\)</span> is called the closure of <span>\\( F \\)</span>. To compute the closure of <span>\\( F \\)</span>, Armstrong\\'s Axioms can be applied. Consider <span>\\( X, Y \\)</span>, and <span>\\( Z \\)</span> as sets of attributes over a relational schema. The three rules of Armstrong\\'s Axioms are described as follows:<br><br>Reflexivity: If <span>\\( Y \\subseteq X \\)</span>, then <span>\\( X \\rightarrow Y \\)</span><br>Augmentation: If <span>\\( X \\rightarrow Y \\)</span>, then <span>\\( XZ \\rightarrow YZ \\)</span> for any <span>\\( Z \\)</span><br>Transitivity: If <span>\\( X \\rightarrow Y \\)</span> and <span>\\( Y \\rightarrow Z \\)</span>, then <span>\\( X \\rightarrow Z \\)</span><br><br>The additional rule of Union is defined as follows:<br><br>Union: If <span>\\( X \\rightarrow Y \\)</span> and <span>\\( X \\rightarrow Z \\)</span>, then <span>\\( X \\rightarrow YZ \\)</span><br><br>It can be proved that the additional rule of Union is also implied by the three rules of Armstrong\\'s Axioms. Listed below are four combinations of these three rules. Which one of these combinations is both necessary and sufficient for the proof?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">Reflexivity, Augmentation, and Transitivity</span>`,
                `<span style="display: inline;">Reflexivity and Augmentation</span>`,
                `<span style="display: inline;">Transitivity</span>`,
                `<span style="display: inline;">Augmentation and Transitivity</span>`
            ],
            answer: "D",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  1. <span>\\( X \\rightarrow Y \\)</span> (given). By Augmentation (adding <span>\\( X \\)</span> to both sides): <span>\\( X \\rightarrow XY \\)</span>.<br>2. <span>\\( X \\rightarrow Z \\)</span> (given). By Augmentation (adding <span>\\( Y \\)</span> to both sides): <span>\\( XY \\rightarrow YZ \\)</span>.<br>3. Combining steps 1 and 2 via Transitivity: <span>\\( X \\rightarrow XY \\)</span> and <span>\\( XY \\rightarrow YZ \\)</span> gives <span>\\( X \\rightarrow YZ \\)</span>.<br><br>This derivation only ever invokes Augmentation and Transitivity; Reflexivity is never needed. So these two rules alone are both necessary and sufficient.<br><br><b>Answer: Augmentation and Transitivity</b><br><br><a href="https://gateoverflow.in/523114/gate-cse-2026-set-2-question-32#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2026-set-2" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2026 SET-2</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/database-management-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Database Management System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0,
            type: "MSQ",
            text: `<span style="display: inline;">In the context of relational database normalization, which of the following statements is/are true?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">It is always possible to obtain a dependency-preserving <span>\\( 3 \\)</span>NF decomposition of a relation</span>`,
                `<span style="display: inline;">It is always possible to obtain a dependency-preserving <span>\\( 1 \\)</span>NF decomposition of a relation</span>`,
                `<span style="display: inline;">It is not always possible to obtain a dependency-preserving BCNF decomposition of a relation</span>`,
                `<span style="display: inline;">It is not always possible to obtain a dependency-preserving <span>\\( 2 \\)</span>NF decomposition of a relation</span>`
            ],
            answer: ["A", "B", "C"],
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  - <b>3NF:</b> Every relation schema has a dependency-preserving (and lossless-join) decomposition into 3NF via the synthesis algorithm. <b>True.</b><br>- <b>1NF:</b> 1NF only requires atomic domains; a relation can always trivially preserve 1NF without giving up any dependency. <b>True.</b><br>- <b>BCNF:</b> A dependency-preserving BCNF decomposition is <i>not always</i> possible. <b>True.</b><br>- <b>2NF:</b> Since a dependency-preserving 3NF decomposition always exists and 3NF implies 2NF, a dependency-preserving 2NF decomposition is always achievable. So statement 4 is false.<br><br><b>Answer: Options A, B, and C</b><br><br><a href="https://gateoverflow.in/523059/gate-cse-2026-set-1-question-21#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2026-set-1" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2026 SET-1</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/database-management-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Database Management System</a></div></div>`
        },
        {
            marks: 2,
            neg: 0,
            type: "MSQ",
            text: `<span style="display: inline;">Consider a relational schema <span>\\( team(name, city, owner) \\)</span>, with functional dependencies <span>\\( \\{ name \\rightarrow city, name \\rightarrow owner \\} \\)</span>.<br><br>The relation <span>\\( team \\)</span> is decomposed into two relations, <span>\\( t_1(name, city) \\)</span> and <span>\\( t_2(name, owner) \\)</span>. Which of the following statement(s) is/are TRUE?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">The relation <span>\\( team \\)</span> is NOT in BCNF.</span>`,
                `<span style="display: inline;">The relations <span>\\( t_1 \\)</span> and <span>\\( t_2 \\)</span> are in BCNF.</span>`,
                `<span style="display: inline;">The decomposition constitutes a lossless join.</span>`,
                `<span style="display: inline;">The relation <span>\\( team \\)</span> is NOT in 3NF.</span>`
            ],
            answer: ["B", "C"],
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  Since <span>\\( name \\)</span> functionally determines every other attribute, <span>\\( name \\)</span> is a candidate key of <span>\\( team \\)</span>, so <span>\\( team \\)</span> is already in BCNF and 3NF.<br><br>In <span>\\( t_1(name, city) \\)</span> and <span>\\( t_2(name, owner) \\)</span>, <span>\\( name \\)</span> remains a key, so both are in BCNF. The common attribute is <span>\\( name \\)</span>, which is a key of both relations, making the decomposition lossless.<br><br><b>Answer: Options B and C</b><br><br><a href="https://gateoverflow.in/460043/gate-cse-2025-set-1-question-37#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2025-set-1" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2025 SET-1</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/database-management-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Database Management System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0,
            type: "MSQ",
            text: `<span style="display: inline;">Which of the following statements about a relation <span>\\( R \\)</span> in first normal form (1NF) is/are TRUE?</span>`,
            image: "",
            options: [
                `<span style="display: inline;"><span>\\( R \\)</span> can have a multi-attribute key</span>`,
                `<span style="display: inline;"><span>\\( R \\)</span> cannot have a foreign key</span>`,
                `<span style="display: inline;"><span>\\( R \\)</span> cannot have a composite attribute</span>`,
                `<span style="display: inline;"><span>\\( R \\)</span> cannot have more than one candidate key</span>`
            ],
            answer: ["A", "C"],
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  1NF only requires every attribute value to be atomic.<br><br>- R can have a multi-attribute key: TRUE.<br>- R cannot have a foreign key: FALSE.<br>- R cannot have a composite attribute: TRUE (composite attributes must be broken down into atomic attributes).<br>- R cannot have more than one candidate key: FALSE.<br><br><b>Answer: Options A and C</b><br><br><a href="https://gateoverflow.in/422830/gate-cse-2024-set-1-question-12#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2024-set-1" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2024 SET-1</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/database-management-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Database Management System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">In a relational data model, which one of the following statements is TRUE?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">A relation with only two attributes is always in BCNF.</span>`,
                `<span style="display: inline;">If all attributes of a relation are prime attributes, then the relation is in BCNF.</span>`,
                `<span style="display: inline;">Every relation has at least one non-prime attribute.</span>`,
                `<span style="display: inline;">BCNF decompositions preserve functional dependencies.</span>`
            ],
            answer: "A",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  For a relation R(A, B), any non-trivial FD is either A \\rightarrow B or B \\rightarrow A. In either case the determinant is a candidate key, so R is always in BCNF.<br><br><b>Answer: A relation with only two attributes is always in BCNF.</b><br><br><a href="https://gateoverflow.in/371932/Gate-cse-2022-question-4#a_list_title" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2022" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2022</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/database-management-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Database Management System</a></div></div>`
        },
        {
            marks: 2,
            neg: 0,
            type: "MSQ",
            text: `<span style="display: inline;">Suppose the following functional dependencies hold on a relation U with attributes <span>\\( P, Q, R, S, \\text{ and } T \\)</span>:<br><br><span>\\( P \\rightarrow QR \\)</span><br><span>\\( RS \\rightarrow T \\)</span><br><br>Which of the following functional dependencies can be inferred from the above functional dependencies?</span>`,
            image: "",
            options: [
                `<span style="display: inline;"><span>\\( PS \\rightarrow T \\)</span></span>`,
                `<span style="display: inline;"><span>\\( R \\rightarrow T \\)</span></span>`,
                `<span style="display: inline;"><span>\\( P \\rightarrow R \\)</span></span>`,
                `<span style="display: inline;"><span>\\( PS \\rightarrow Q \\)</span></span>`
            ],
            answer: ["A", "C", "D"],
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  Checking each statement:<br>- <span>\\( P \\rightarrow QR \\Rightarrow P \\rightarrow R \\)</span> (decomposition) True<br>- <span>\\( PS \\rightarrow RS \\)</span> (augmentation) and <span>\\( RS \\rightarrow T \\Rightarrow PS \\rightarrow T \\)</span> True<br>- <span>\\( P \\rightarrow Q \\Rightarrow PS \\rightarrow Q \\)</span> True<br>- <span>\\( R \\rightarrow T \\)</span>: <span>\\( R^+ = \\{R\\} \\)</span>, so not implied False<br><br><b>Answer: Options A, C, and D (<span>\\( PS \\rightarrow T, \\; P \\rightarrow R, \\; PS \\rightarrow Q \\)</span>)</b><br><br><a href="https://gateoverflow.in/357500/gate-cse-2021-set-2-question-40#a_list_title" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2021-set-2" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2021 SET-2</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/database-management-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Database Management System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">If every non-key attribute functionally dependent on the primary key, then the relation will be in</span>`,
            image: "",
            options: [
                `<span style="display: inline;">First normal form</span>`,
                `<span style="display: inline;">Second normal form</span>`,
                `<span style="display: inline;">Third normal form</span>`,
                `<span style="display: inline;">Fourth Normal form</span>`
            ],
            answer: "B",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  2NF: every non-key attribute is <b>fully functionally dependent</b> on the primary key (no partial dependency). That is exactly the condition given.<br><br><b>Answer: Second normal form</b><br><br><a href="https://gateoverflow.in/331394/isro2020-50" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/isro-cse-2020" style="color:#2f6d1a; text-decoration:none" target="_blank">ISRO CSE 2020</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/database-management-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Database Management System</a></div></div>`
        },
        {
            marks: 2,
            neg: 0.66,
            type: "MCQ",
            text: `<span style="display: inline;">Consider a relational table R that is in 3NF, but not in BCNF. Which one of the following statements is TRUE?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">R has a nontrivial functional dependency <span>\\( X \\rightarrow A \\)</span>, where X is not a superkey and A is a prime attribute.</span>`,
                `<span style="display: inline;">R has a nontrivial functional dependency <span>\\( X \\rightarrow A \\)</span>, where X is not a superkey and A is a non-prime attribute and X is not a proper subset of any key.</span>`,
                `<span style="display: inline;">R has a nontrivial functional dependency <span>\\( X \\rightarrow A \\)</span>, where X is not a superkey and A is a non-prime attribute and X is a proper subset of some key.</span>`,
                `<span style="display: inline;">A cell in R holds a set instead of an atomic value.</span>`
            ],
            answer: "A",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  3NF allows <span>\\( X \\rightarrow A \\)</span> with X not a superkey only when A is a <b>prime attribute</b>. BCNF forbids it.<br><br>So a relation in 3NF but not in BCNF must have such an FD with prime A. The other options describe 3NF/2NF violations or a 1NF violation.<br><br><b>Answer: R has a nontrivial functional dependency <span>\\( X \\rightarrow A \\)</span>, where X is not a superkey and A is a prime attribute.</b><br><br><a href="https://gateoverflow.in/333195/gate2020-cs-36#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2020" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2020</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/database-management-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Database Management System</a></div></div>`
        },
        {
            marks: 2,
            neg: 0.66,
            type: "MCQ",
            text: `<span style="display: inline;">Let the set of functional dependencies <span>\\( F = \\{ QR \\rightarrow S, R \\rightarrow P, S \\rightarrow Q \\} \\)</span> hold on a relation schema <span>\\( X = (PQRS) \\)</span>. X is not in BCNF. Suppose X is decomposed into two schemas Y and Z where <span>\\( Y = (PR) \\)</span> and <span>\\( Z = (QRS) \\)</span>.<br><br>Consider the two statements given below:<br><br>I. Both Y and Z are in BCNF<br>II. Decomposition of X into Y and Z is dependency preserving and lossless.<br><br>Which of the above statements is/are correct?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">Both I and II</span>`,
                `<span style="display: inline;">I only</span>`,
                `<span style="display: inline;">II only</span>`,
                `<span style="display: inline;">Neither I nor II</span>`
            ],
            answer: "C",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  Checking each statement:<br>- <span>\\( Y(P, R) \\)</span>: <span>\\( R \\rightarrow P \\)</span> with R as key <span>\\( \\rightarrow \\)</span> BCNF.<br>- <span>\\( Z(Q, R, S) \\)</span>: <span>\\( QR \\rightarrow S \\)</span> and <span>\\( S \\rightarrow Q \\)</span>. Keys are QR and RS. In <span>\\( S \\rightarrow Q \\)</span>, S is not a superkey <span>\\( \\rightarrow Z \\)</span> is <b>not BCNF</b>. So I is false.<br>- Dependencies: <span>\\( R \\rightarrow P \\)</span> is in Y; <span>\\( QR \\rightarrow S \\)</span> and <span>\\( S \\rightarrow Q \\)</span> are in Z <span>\\( \\rightarrow \\)</span> preserved.<br>- Lossless: common attribute R, and <span>\\( R \\rightarrow P \\)</span> makes R a key of Y <span>\\( \\rightarrow \\)</span> lossless. So II is true.<br><br><b>Answer: II only</b><br><br><a href="https://gateoverflow.in/302816/gate2019-cs-32#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2019" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2019</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/database-management-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Database Management System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">The set of attributes X will be fully functionally dependent on the set of attributes Y if the following conditions are satisfied.</span>`,
            image: "",
            options: [
                `<span style="display: inline;">X is functionally dependent on Y</span>`,
                `<span style="display: inline;">X is not functionally dependent on any subset of Y</span>`,
                `<span style="display: inline;">Both (A) and (B)</span>`,
                `<span style="display: inline;">None of these</span>`
            ],
            answer: "C",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  X is fully functionally dependent on Y when <span>\\( Y \\rightarrow X \\)</span> holds and no proper subset of Y determines X. Both conditions are needed.<br><br><b>Answer: Both (A) and (B)</b><br><br><a href="https://gateoverflow.in/213534/isro2018-54" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/isro-cse-2018" style="color:#2f6d1a; text-decoration:none" target="_blank">ISRO CSE 2018</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/database-management-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Database Management System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">For a database relation <span>\\( R(a, b, c, d) \\)</span> where the domain of <span>\\( a, b, c \\)</span> and <span>\\( d \\)</span> include only atomic values, only the following functional dependencies and those that can be inferred from them hold:<br><br><span>\\( a \\rightarrow c \\)</span><br><span>\\( b \\rightarrow d \\)</span><br><br>The relation is in:</span>`,
            image: "",
            options: [
                `<span style="display: inline;">First normal form but not in second normal form</span>`,
                `<span style="display: inline;">Second normal form but not in third normal form</span>`,
                `<span style="display: inline;">Third normal form</span>`,
                `<span style="display: inline;">None of the above</span>`
            ],
            answer: "A",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  The only candidate key is <span>\\( \\{a, b\\} \\)</span>. <span>\\( a \\rightarrow c \\)</span> and <span>\\( b \\rightarrow d \\)</span> are <b>partial dependencies</b> (part of the candidate key determines a non-prime attribute), so <span>\\( R \\)</span> is not in 2NF. Atomic domains make it 1NF.<br><br><b>Answer: First normal form but not in second normal form</b><br><br><a href="https://gateoverflow.in/213547/isro2018-41" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/isro-cse-2018" style="color:#2f6d1a; text-decoration:none" target="_blank">ISRO CSE 2018</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/database-management-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Database Management System</a></div></div>`
        },
        {
            marks: 2,
            neg: 0.66,
            type: "MCQ",
            text: `<span style="display: inline;">Consider the following four relational schemas. For each schema, all non-trivial functional dependencies are listed. The underlined attributes are the respective primary keys.<br><br><img src="images/twt-dbms/q42.jpg"><br><br>Which one of the relational schemas above is in 3NF but not in BCNF?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">Schema I</span>`,
                `<span style="display: inline;">Schema II</span>`,
                `<span style="display: inline;">Schema III</span>`,
                `<span style="display: inline;">Schema IV</span>`
            ],
            answer: "B",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  Checking each schema:<br>- <b>Schema I:</b> A set-valued attribute violates 1NF.<br>- <b>Schema II:</b> Candidate keys are <span>\\( (\\text{rollno}, \\text{courseid}) \\)</span> and <span>\\( (\\text{email}, \\text{courseid}) \\)</span>. In <span>\\( \\text{email} \\rightarrow \\text{rollno} \\)</span>, <span>\\( \\text{email} \\)</span> is not a superkey, but <span>\\( \\text{rollno} \\)</span> is a <b>prime attribute</b> <span>\\( \\rightarrow \\)</span> allowed in 3NF, not in BCNF.<br>- <b>Schema III:</b> <span>\\( \\text{marks} \\rightarrow \\text{grade} \\)</span> is a transitive dependency with a non-prime right-hand side <span>\\( \\rightarrow \\)</span> not in 3NF.<br>- <b>Schema IV:</b> <span>\\( \\text{courseid} \\rightarrow \\text{credit} \\)</span> is a partial dependency <span>\\( \\rightarrow \\)</span> not in 2NF.<br><br><b>Answer: Schema II</b><br><br><a href="https://gateoverflow.in/204116/gate2018-42#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2018" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2018</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/database-management-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Database Management System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">The following functional dependencies hold true for the relational schema <span>\\( R(V, W, X, Y, Z) \\)</span>:<br><br><span>\\( V \\rightarrow W \\)</span><br><span>\\( VW \\rightarrow X \\)</span><br><span>\\( Y \\rightarrow VX \\)</span><br><span>\\( Y \\rightarrow Z \\)</span><br><br>Which of the following is an irreducible equivalent for this set of functional dependencies?</span>`,
            image: "",
            options: [
                `<span style="display: inline;"><span>\\( V \\rightarrow W \\)</span><br><span>\\( V \\rightarrow X \\)</span><br><span>\\( Y \\rightarrow V \\)</span><br><span>\\( Y \\rightarrow Z \\)</span></span>`,
                `<span style="display: inline;"><span>\\( V \\rightarrow W \\)</span><br><span>\\( W \\rightarrow X \\)</span><br><span>\\( Y \\rightarrow V \\)</span><br><span>\\( Y \\rightarrow Z \\)</span></span>`,
                `<span style="display: inline;"><span>\\( V \\rightarrow W \\)</span><br><span>\\( V \\rightarrow X \\)</span><br><span>\\( Y \\rightarrow V \\)</span><br><span>\\( Y \\rightarrow X \\)</span><br><span>\\( Y \\rightarrow Z \\)</span></span>`,
                `<span style="display: inline;"><span>\\( V \\rightarrow W \\)</span><br><span>\\( W \\rightarrow X \\)</span><br><span>\\( Y \\rightarrow V \\)</span><br><span>\\( Y \\rightarrow X \\)</span><br><span>\\( Y \\rightarrow Z \\)</span></span>`
            ],
            answer: "A",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  Checking each dependency:<br>- In <span>\\( VW \\rightarrow X \\)</span>: since <span>\\( V \\rightarrow W \\)</span>, attribute <span>\\( W \\)</span> is extraneous, so it simplifies to <span>\\( V \\rightarrow X \\)</span>.<br>- In <span>\\( Y \\rightarrow VX \\)</span>: decomposes into <span>\\( Y \\rightarrow V \\)</span> and <span>\\( Y \\rightarrow X \\)</span>; here <span>\\( Y \\rightarrow X \\)</span> is redundant because <span>\\( Y \\rightarrow V \\rightarrow X \\)</span>.<br><br>Minimal cover: <span>\\( \\{ V \\rightarrow W, \\; V \\rightarrow X, \\; Y \\rightarrow V, \\; Y \\rightarrow Z \\} \\)</span>.<br><br><b>Answer: Option A</b><br><br><a href="https://gateoverflow.in/118296/gate2017-1-16#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2017-set-1" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2017 SET-1</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/database-management-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Database Management System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">A database of research articles in a journal uses the following schema.<br><br><img src="images/twt-dbms/q23.jpg"><br><br>Which is the weakest normal form that the new database satisfies, but the old one does not?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">1NF</span>`,
                `<span style="display: inline;">2NF</span>`,
                `<span style="display: inline;">3NF</span>`,
                `<span style="display: inline;">BCNF</span>`
            ],
            answer: "B",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  Old schema: primary key is <span>\\( (\\text{VOLUME}, \\text{NUMBER}, \\text{STARTPAGE}, \\text{ENDPAGE}) \\)</span>, and <span>\\( (\\text{VOLUME}, \\text{NUMBER}) \\rightarrow \\text{YEAR} \\)</span> is a <b>partial dependency</b> (part of the candidate key determines a non-prime attribute), so it is only in 1NF.<br><br>New schemas: <span>\\( \\text{YEAR} \\)</span> is moved to <span>\\( (\\text{VOLUME}, \\text{NUMBER}, \\text{YEAR}) \\)</span>, eliminating the partial dependency <span>\\( \\rightarrow \\)</span> it satisfies 2NF (in fact both tables are in BCNF).<br><br>The weakest normal form that the new database satisfies but the old one does not is <b>2NF</b>.<br><br><b>Answer: 2NF</b><br><br><a href="https://gateoverflow.in/39646/gate2016-1-23#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2016-set-1" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2016 SET-1</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/database-management-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Database Management System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Consider the relation <span>\\( X(P, Q, R, S, T, U) \\)</span> with the following set of functional dependencies:<br><br><span>\\( F = \\{ \\{P, R\\} \\rightarrow \\{S, T\\}, \\; \\{P, S, U\\} \\rightarrow \\{Q, R\\} \\} \\)</span><br><br>Which of the following is a trivial functional dependency in <span>\\( F^{+} \\)</span>, where <span>\\( F^{+} \\)</span> is the closure of <span>\\( F \\)</span>?</span>`,
            image: "",
            options: [
                `<span style="display: inline;"><span>\\( \\{P, R\\} \\rightarrow \\{S, T\\} \\)</span></span>`,
                `<span style="display: inline;"><span>\\( \\{P, R\\} \\rightarrow \\{R, T\\} \\)</span></span>`,
                `<span style="display: inline;"><span>\\( \\{P, S\\} \\rightarrow \\{S\\} \\)</span></span>`,
                `<span style="display: inline;"><span>\\( \\{P, S, U\\} \\rightarrow \\{Q\\} \\)</span></span>`
            ],
            answer: "C",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  A functional dependency <span>\\( X \\rightarrow Y \\)</span> is trivial if and only if <span>\\( Y \\subseteq X \\)</span>.<br><br>Here, <span>\\( \\{S\\} \\subseteq \\{P, S\\} \\)</span>, so <span>\\( \\{P, S\\} \\rightarrow \\{S\\} \\)</span> is trivial. In option B, <span>\\( T \\notin \\{P, R\\} \\)</span>.<br><br><b>Answer: <span>\\( \\{P, S\\} \\rightarrow \\{S\\} \\)</span></b><br><br><a href="https://gateoverflow.in/8420/gate2015-3-3#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2015-set-3" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2015 SET-3</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/database-management-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Database Management System</a></div></div>`
        }
    ]
});

registerTest({
    series: "cse-gate-2027",
    name: "TWT-DBMS(Normal Form-II)",
    date: "sep 08, 2026",
    topicsCovered: "Multivalued Dependencies, Prime Attributes, Candidate Keys Calculation, 3NF vs BCNF, Transitive Dependencies, Minimal Cover, Full Functional Dependency, BCNF Decomposition",
    questions: [
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Consider the following table:<br><br><img src="images/twt-dbms/q63.jpg"><br><br>The table is in which normal form?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">First Normal Form</span>`,
                `<span style="display: inline;">Second Normal Form</span>`,
                `<span style="display: inline;">Third Normal Form but not BCNF</span>`,
                `<span style="display: inline;">Third Normal Form and BCNF</span>`
            ],
            answer: "C",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  From the diagram: <span>\\( AB \\rightarrow C, D, E \\)</span> and <span>\\( C \\rightarrow B \\)</span>.<br><br>- Candidate keys: <span>\\( AB \\)</span> and <span>\\( AC \\)</span>, so <span>\\( A, B, C \\)</span> are prime attributes.<br>- No partial or transitive dependency of a non-prime attribute <span>\\( \\rightarrow \\)</span> 3NF.<br>- In <span>\\( C \\rightarrow B \\)</span>, <span>\\( C \\)</span> is not a superkey <span>\\( \\rightarrow \\)</span> not in BCNF (it is allowed in 3NF because <span>\\( B \\)</span> is a prime attribute).<br><br><b>Answer: Third Normal Form but not BCNF</b><br><br><a href="https://gateoverflow.in/55019/isro2014-63" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/isro-cse-2014" style="color:#2f6d1a; text-decoration:none" target="_blank">ISRO CSE 2014</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/database-management-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Database Management System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Every time the attribute <span>\\( A \\)</span> appears, it is matched with the same value of attribute <span>\\( B \\)</span> but not the same value of attribute <span>\\( C \\)</span>. Which of the following is true?</span>`,
            image: "",
            options: [
                `<span style="display: inline;"><span>\\( A \\rightarrow (B, C) \\)</span></span>`,
                `<span style="display: inline;"><span>\\( A \\rightarrow B, \\; A \\twoheadrightarrow C \\)</span></span>`,
                `<span style="display: inline;"><span>\\( A \\rightarrow B, \\; C \\twoheadrightarrow A \\)</span></span>`,
                `<span style="display: inline;"><span>\\( A \\twoheadrightarrow B, \\; B \\rightarrow C \\)</span></span>`
            ],
            answer: "B",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  Attribute <span>\\( A \\)</span> always uniquely determines <span>\\( B \\rightarrow \\)</span> functional dependency <span>\\( A \\rightarrow B \\)</span>.<br><br>Attribute <span>\\( A \\)</span> can be associated with multiple values of <span>\\( C \\rightarrow \\)</span> multivalued dependency <span>\\( A \\twoheadrightarrow C \\)</span>.<br><br><b>Answer: <span>\\( A \\rightarrow B, \\; A \\twoheadrightarrow C \\)</span></b><br><br><a href="https://gateoverflow.in/16128/isro2014-30" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/isro-cse-2014" style="color:#2f6d1a; text-decoration:none" target="_blank">ISRO CSE 2014</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/database-management-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Database Management System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Consider the schema <span>\\( R(A, B, C, D) \\)</span> and the functional dependencies <span>\\( A \\rightarrow B \\)</span> and <span>\\( C \\rightarrow D \\)</span>. If the decomposition is made as <span>\\( R_1(A, B) \\)</span> and <span>\\( R_2(C, D) \\)</span>, then which of the following is TRUE?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">Preserves dependency but cannot perform lossless join</span>`,
                `<span style="display: inline;">Preserves dependency and performs lossless join</span>`,
                `<span style="display: inline;">Does not perform dependency and cannot perform lossless join</span>`,
                `<span style="display: inline;">Does not preserve dependency but perform lossless join</span>`
            ],
            answer: "A",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  Checking each statement:<br>- <span>\\( A \\rightarrow B \\)</span> lies in <span>\\( R_1 \\)</span> and <span>\\( C \\rightarrow D \\)</span> in <span>\\( R_2 \\rightarrow \\)</span> dependency preserving.<br>- <span>\\( R_1 \\cap R_2 = \\emptyset \\)</span>, which is not a superkey of either relation <span>\\( \\rightarrow \\)</span> lossy join.<br><br><b>Answer: Preserves dependency but cannot perform lossless join</b><br><br><a href="https://gateoverflow.in/17319/isro2014-22" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/isro-cse-2014" style="color:#2f6d1a; text-decoration:none" target="_blank">ISRO CSE 2014</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/database-management-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Database Management System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">A prime attribute of a relation scheme <span>\\( R \\)</span> is an attribute that appears</span>`,
            image: "",
            options: [
                `<span style="display: inline;">in all candidate keys of <span>\\( R \\)</span>.</span>`,
                `<span style="display: inline;">in some candidate key of <span>\\( R \\)</span>.</span>`,
                `<span style="display: inline;">in a foreign keys of <span>\\( R \\)</span></span>`,
                `<span style="display: inline;">only in the primary key of <span>\\( R \\)</span>.</span>`
            ],
            answer: "B",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  By definition, a prime attribute is an attribute that belongs to at least one candidate key of <span>\\( R \\)</span>.<br><br><b>Answer: in some candidate key of R.</b><br><br><a href="https://gateoverflow.in/2056/gate2014-3-22#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2014-set-3" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2014 SET-3</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/database-management-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Database Management System</a></div></div>`
        },
        {
            marks: 2,
            neg: 0.66,
            type: "MCQ",
            text: `<span style="display: inline;">Given the following two statements:<br><br><span>\\( S_1 \\)</span>: Every table with two single-valued attributes is in 1NF, 2NF, 3NF and BCNF.<br><span>\\( S_2 \\)</span>: <span>\\( AB \\rightarrow C, \\; D \\rightarrow E, \\; E \\rightarrow C \\)</span> is a minimal cover for the set of functional dependencies <span>\\( \\{ AB \\rightarrow C, \\; D \\rightarrow E, \\; AB \\rightarrow E, \\; E \\rightarrow C \\} \\)</span>.<br><br>Which one of the following is CORRECT?</span>`,
            image: "",
            options: [
                `<span style="display: inline;"><span>\\( S_1 \\)</span> is TRUE and <span>\\( S_2 \\)</span> is FALSE</span>`,
                `<span style="display: inline;">Both <span>\\( S_1 \\)</span> and <span>\\( S_2 \\)</span> are TRUE.</span>`,
                `<span style="display: inline;"><span>\\( S_1 \\)</span> is FALSE and <span>\\( S_2 \\)</span> is TRUE.</span>`,
                `<span style="display: inline;">Both <span>\\( S_1 \\)</span> and <span>\\( S_2 \\)</span> are FALSE.</span>`
            ],
            answer: "A",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  Checking each statement:<br>- <b><span>\\( S_1 \\)</span>:</b> With two attributes, any non-trivial functional dependency must have a superkey on the left <span>\\( \\rightarrow \\)</span> BCNF (and therefore 1NF, 2NF, 3NF) <span>\\( \\rightarrow \\)</span> <b>TRUE</b>.<br>- <b><span>\\( S_2 \\)</span>:</b> In the original set, <span>\\( AB \\rightarrow C \\)</span> is redundant because <span>\\( AB \\rightarrow E \\rightarrow C \\)</span>. The minimal cover must retain <span>\\( AB \\rightarrow E \\)</span>. The proposed set drops <span>\\( AB \\rightarrow E \\)</span>, which cannot be derived from it <span>\\( \\rightarrow \\)</span> <b>FALSE</b>.<br><br><b>Answer: <span>\\( S_1 \\)</span> is TRUE and <span>\\( S_2 \\)</span> is FALSE</b><br><br><a href="https://gateoverflow.in/1797/gate2014-1-30#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2014-set-1" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2014 SET-1</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/database-management-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Database Management System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Consider the following dependencies and the BOOK table in a relational database design. Determine the normal form of the given relation:<br><br><span>\\( \\text{ISBN} \\rightarrow \\text{Title} \\)</span><br><span>\\( \\text{ISBN} \\rightarrow \\text{Publisher} \\)</span><br><span>\\( \\text{Publisher} \\rightarrow \\text{Address} \\)</span></span>`,
            image: "",
            options: [
                `<span style="display: inline;">First Normal Form</span>`,
                `<span style="display: inline;">Second Normal Form</span>`,
                `<span style="display: inline;">Third Normal Form</span>`,
                `<span style="display: inline;">BCNF</span>`
            ],
            answer: "B",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  Candidate key is <span>\\( \\text{ISBN} \\)</span>. All non-prime attributes (Title, Publisher, Address) are fully functionally dependent on <span>\\( \\text{ISBN} \\)</span>, so the relation is in 2NF. However, <span>\\( \\text{Publisher} \\rightarrow \\text{Address} \\)</span> represents a transitive dependency (a non-prime attribute determining another non-prime attribute), so the relation is not in 3NF.<br><br><b>Answer: Second Normal Form</b><br><br><a href="https://gateoverflow.in/43861/isro-2013-25" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/isro-cse-2013" style="color:#2f6d1a; text-decoration:none" target="_blank">ISRO CSE 2013</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/database-management-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Database Management System</a></div></div>`
        },
        {
            marks: 2,
            neg: 0.66,
            type: "MCQ",
            text: `<span style="display: inline;">Relation <span>\\( R \\)</span> has eight attributes <span>\\( ABCDEFGH \\)</span>. Fields of <span>\\( R \\)</span> contain only atomic values.<br><br><span>\\( F = \\{ CH \\rightarrow G, \\; A \\rightarrow BC, \\; B \\rightarrow CFH, \\; E \\rightarrow A, \\; F \\rightarrow EG \\} \\)</span> is a set of functional dependencies (FDs) so that <span>\\( F^{+} \\)</span> is exactly the set of FDs that hold for <span>\\( R \\)</span>.<br><br>The relation <span>\\( R \\)</span> is:</span>`,
            image: "",
            options: [
                `<span style="display: inline;">in 1NF, but not in 2NF.</span>`,
                `<span style="display: inline;">in 2NF, but not in 3NF.</span>`,
                `<span style="display: inline;">in 3NF, but not in BCNF.</span>`,
                `<span style="display: inline;">in BCNF</span>`
            ],
            answer: "A",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  Candidate keys are <span>\\( AD, BD, ED, FD \\)</span>. Prime attributes are <span>\\( A, B, D, E, F \\)</span>. Non-prime attributes are <span>\\( C, G, H \\)</span>.<br><br>In <span>\\( A \\rightarrow BC \\)</span>, attribute <span>\\( A \\)</span> is a proper subset of candidate key <span>\\( AD \\)</span>, and <span>\\( C \\)</span> is a non-prime attribute. This constitutes a partial dependency. Hence, the relation is not in 2NF. Since fields contain only atomic values, it is in 1NF.<br><br><b>Answer: in 1NF, but not in 2NF.</b><br><br><a href="https://gateoverflow.in/43290/gate2013-55#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2013" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2013</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/database-management-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Database Management System</a></div></div>`
        },
        {
            marks: 2,
            neg: 0.66,
            type: "MCQ",
            text: `<span style="display: inline;">Relation <span>\\( R \\)</span> has eight attributes <span>\\( ABCDEFGH \\)</span>. Fields of <span>\\( R \\)</span> contain only atomic values.<br><br><span>\\( F = \\{ CH \\rightarrow G, \\; A \\rightarrow BC, \\; B \\rightarrow CFH, \\; E \\rightarrow A, \\; F \\rightarrow EG \\} \\)</span> is a set of functional dependencies (FDs) so that <span>\\( F^{+} \\)</span> is exactly the set of FDs that hold for <span>\\( R \\)</span>.<br><br>How many candidate keys does the relation <span>\\( R \\)</span> have?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">3</span>`,
                `<span style="display: inline;">4</span>`,
                `<span style="display: inline;">5</span>`,
                `<span style="display: inline;">6</span>`
            ],
            answer: "B",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  Attribute <span>\\( D \\)</span> does not appear on the right side of any functional dependency, so <span>\\( D \\)</span> must be part of every candidate key.<br><br>Computing closures of candidate single attributes with <span>\\( D \\)</span>:<br>- <span>\\( A^+ = \\{A, B, C, E, F, G, H\\} \\rightarrow (AD)^+ = ABCDEFGH \\)</span><br>- <span>\\( B^+ = \\{A, B, C, E, F, G, H\\} \\rightarrow (BD)^+ = ABCDEFGH \\)</span><br>- <span>\\( E^+ = \\{A, B, C, E, F, G, H\\} \\rightarrow (ED)^+ = ABCDEFGH \\)</span><br>- <span>\\( F^+ = \\{A, B, C, E, F, G, H\\} \\rightarrow (FD)^+ = ABCDEFGH \\)</span><br><br>No other attribute combinations form minimal superkeys. Therefore, there are 4 candidate keys: <span>\\( AD, BD, ED, FD \\)</span>.<br><br><b>Answer: 4</b><br><br><a href="https://gateoverflow.in/1558/gate2013-54#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2013" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2013</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/database-management-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Database Management System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Which of the following is TRUE?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">Every relation in 3NF is also in BCNF</span>`,
                `<span style="display: inline;">A relation R is in 3NF if every non-prime attribute of R is fully functionally dependent on every key of R</span>`,
                `<span style="display: inline;">Every relation in BCNF is also in 3NF</span>`,
                `<span style="display: inline;">No relation can be in both BCNF and 3NF</span>`
            ],
            answer: "C",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  BCNF is a stricter normal form than 3NF: every relation that is in BCNF is guaranteed to be in 3NF (BCNF <span>\\( \\subset \\)</span> 3NF).<br><br>Option B describes 2NF (freedom from partial dependencies), not 3NF.<br><br><b>Answer: Every relation in BCNF is also in 3NF</b><br><br><a href="https://gateoverflow.in/34/gate2012-2#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2012" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2012</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/database-management-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Database Management System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">In functional dependency, Armstrong inference rules refer to:</span>`,
            image: "",
            options: [
                `<span style="display: inline;">Reflexive, Augmentation and Decomposition</span>`,
                `<span style="display: inline;">Transitive, Augmentation and Reflexive</span>`,
                `<span style="display: inline;">Augmentation, Transitive, Reflexive and Decomposition</span>`,
                `<span style="display: inline;">Reflexive, Transitive and Decomposition</span>`
            ],
            answer: "B",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  Armstrong's primary axioms are: Reflexivity, Augmentation, and Transitivity. Secondary rules like union, decomposition, and pseudo-transitivity are derived from these three primary rules.<br><br><b>Answer: Transitive, Augmentation and Reflexive</b><br><br><a href="https://gateoverflow.in/50639/isro2011-53" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/isro-cse-2011" style="color:#2f6d1a; text-decoration:none" target="_blank">ISRO CSE 2011</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/database-management-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Database Management System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Which normal form is based on the concept of 'full functional dependency'?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">First Normal Form</span>`,
                `<span style="display: inline;">Second Normal Form</span>`,
                `<span style="display: inline;">Third Normal Form</span>`,
                `<span style="display: inline;">Fourth Normal Form</span>`
            ],
            answer: "B",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  Second Normal Form (2NF) is based on the concept of full functional dependency. It requires every non-prime attribute to be fully functionally dependent on every candidate key (no partial dependencies).<br><br><b>Answer: Second Normal Form</b><br><br><a href="https://gateoverflow.in/18117/isro2011-29" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/isro-cse-2011" style="color:#2f6d1a; text-decoration:none" target="_blank">ISRO CSE 2011</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/database-management-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Database Management System</a></div></div>`
        },
        {
            marks: 2,
            neg: 0.66,
            type: "MCQ",
            text: `<span style="display: inline;">Consider the following relational schema:<br><pre style="background-color: #f8f9fa; border: 1px solid #dee2e6; border-radius: 5px; padding: 12px; overflow-x: auto; font-family: monospace; font-size: 14px; margin-top: 10px;">Suppliers(<u>sid:integer</u>, sname:string, city:string, street:string)
Parts(<u>pid:integer</u>, pname:string, color:string)
Catalog(<u>sid:integer, pid:integer</u>, cost:real)</pre>Assume that, in the suppliers relation above, each supplier and each street within a city has a unique name, and (sname, city) forms a candidate key. No other functional dependencies are implied other than those implied by primary and candidate keys. Which one of the following is TRUE about the above schema?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">The schema is in BCNF</span>`,
                `<span style="display: inline;">The schema is in 3NF but not in BCNF</span>`,
                `<span style="display: inline;">The schema is in 2NF but not in 3NF</span>`,
                `<span style="display: inline;">The schema is not in 2NF</span>`
            ],
            answer: "A",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  For all three relations, the only functional dependencies are those implied by the primary and candidate keys:<br>- In <b>Suppliers</b>, the candidate keys are <span>\\( \\text{sid} \\)</span> and <span>\\( (\\text{sname}, \\text{city}) \\)</span>. All non-trivial FDs have superkeys on their left-hand side <span>\\( \\rightarrow \\)</span> BCNF.<br>- In <b>Parts</b>, the only key is <span>\\( \\text{pid} \\rightarrow \\)</span> BCNF.<br>- In <b>Catalog</b>, the only key is <span>\\( (\\text{sid}, \\text{pid}) \\rightarrow \\)</span> BCNF.<br><br>Since every relation is in BCNF, the overall schema is in BCNF.<br><br><b>Answer: The schema is in BCNF</b><br><br><a href="https://gateoverflow.in/43474/gate2009-56#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2009" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2009</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/database-management-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Database Management System</a></div></div>`
        },
        {
            marks: 2,
            neg: 0.66,
            type: "MCQ",
            text: `<span style="display: inline;">Let <span>\\( R(A, B, C, D, E, P, G) \\)</span> be a relational schema in which the following functional dependencies are known to hold:<br><br><span>\\( AB \\rightarrow CD, \\; DE \\rightarrow P, \\; C \\rightarrow E, \\; P \\rightarrow C, \\; B \\rightarrow G \\)</span><br><br>The relational schema <span>\\( R \\)</span> is:</span>`,
            image: "",
            options: [
                `<span style="display: inline;">in BCNF</span>`,
                `<span style="display: inline;">in 3NF, but not in BCNF</span>`,
                `<span style="display: inline;">in 2NF, but not in 3NF</span>`,
                `<span style="display: inline;">not in 2NF</span>`
            ],
            answer: "D",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  To find candidate keys of <span>\\( R \\)</span>: Attribute <span>\\( A \\)</span> never appears on the right side of any dependency, so <span>\\( A \\)</span> must be in every key.<br><br>Computing closure: <span>\\( (AB)^+ = \\{A, B, C, D, E, P, G\\} = R \\)</span>, so <span>\\( AB \\)</span> is a candidate key.<br><br>In the dependency <span>\\( B \\rightarrow G \\)</span>, attribute <span>\\( B \\)</span> is a proper subset of the candidate key <span>\\( AB \\)</span> and <span>\\( G \\)</span> is a non-prime attribute. This is a partial dependency, so the schema is <b>not in 2NF</b>.<br><br><b>Answer: not in 2NF</b><br><br><a href="https://gateoverflow.in/3372/gate2008-it-62" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-it-2008" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE IT 2008</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/database-management-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Database Management System</a></div></div>`
        },
        {
            marks: 2,
            neg: 0.66,
            type: "MCQ",
            text: `<span style="display: inline;">Let <span>\\( R(A, B, C, D) \\)</span> be a relational schema in which the following functional dependencies are known to hold:<br><br><span>\\( A \\rightarrow B, \\; B \\rightarrow C, \\; C \\rightarrow D, \\; D \\rightarrow B \\)</span><br><br>The decomposition of <span>\\( R \\)</span> into <span>\\( (A, B), \\; (B, C), \\; (B, D) \\)</span>:</span>`,
            image: "",
            options: [
                `<span style="display: inline;">gives a lossless join, and is dependency preserving</span>`,
                `<span style="display: inline;">gives a lossless join, but is not dependency preserving</span>`,
                `<span style="display: inline;">does not give a lossless join, but is dependency preserving</span>`,
                `<span style="display: inline;">does not give a lossless join and is not dependency preserving</span>`
            ],
            answer: "A",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  - <b>Lossless join:</b> <span>\\( R_2(B, C) \\cap R_3(B, D) = \\{B\\} \\)</span>, and <span>\\( B \\rightarrow D \\)</span> holds in <span>\\( R_3 \\)</span> (via <span>\\( B \\rightarrow C \\rightarrow D \\)</span>), making <span>\\( B \\)</span> a key of <span>\\( R_3 \\)</span>. Then <span>\\( R_1(A, B) \\cap R_{23}(B, C, D) = \\{B\\} \\)</span>, where <span>\\( B \\)</span> is a key of <span>\\( R_{23} \\)</span>. Thus, the decomposition has a lossless join.<br>- <b>Dependency preservation:</b> <span>\\( A \\rightarrow B \\)</span> is directly preserved in <span>\\( R_1 \\)</span>; <span>\\( B \\rightarrow C \\)</span> in <span>\\( R_2 \\)</span>; <span>\\( D \\rightarrow B \\)</span> in <span>\\( R_3 \\)</span>; and <span>\\( C \\rightarrow D \\)</span> is implied since <span>\\( C \\rightarrow D \\rightarrow B \\)</span> gives <span>\\( C \\rightarrow B \\)</span> and <span>\\( B \\rightarrow D \\)</span> gives <span>\\( C \\rightarrow D \\)</span>. Thus, all dependencies are preserved.<br><br><b>Answer: gives a lossless join, and is dependency preserving</b><br><br><a href="https://gateoverflow.in/3371/gate2008-it-61" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-it-2008" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE IT 2008</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/database-management-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Database Management System</a></div></div>`
        },
        {
            marks: 2,
            neg: 0.66,
            type: "MCQ",
            text: `<span style="display: inline;">Consider the following relational schemas for a library database:<br><br><span>\\( \\text{Book}(\\text{Title}, \\text{Author}, \\text{Catalog\_no}, \\text{Publisher}, \\text{Year}, \\text{Price}) \\)</span><br><span>\\( \\text{Collection}(\\text{Title}, \\text{Author}, \\text{Catalog\_no}) \\)</span><br><br>with the following functional dependencies:<br><br>I. <span>\\( \\text{Title, Author} \\rightarrow \\text{Catalog\_no} \\)</span><br>II. <span>\\( \\text{Catalog\_no} \\rightarrow \\text{Title, Author, Publisher, Year} \\)</span><br>III. <span>\\( \\text{Publisher, Title, Year} \\rightarrow \\text{Price} \\)</span><br><br>Assume <span>\\( \\{\\text{Author, Title}\\} \\)</span> is the key for both schemes. Which of the following statements is true?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">Both Book and Collection are in BCNF</span>`,
                `<span style="display: inline;">Both Book and Collection are in 3NF only</span>`,
                `<span style="display: inline;">Book is in 2NF and Collection is in 3NF</span>`,
                `<span style="display: inline;">Both Book and Collection are in 2NF only</span>`
            ],
            answer: "C",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  - <b>Collection(Title, Author, Catalog_no):</b> The candidate keys are <span>\\( \\{\\text{Title, Author}\\} \\)</span> and <span>\\( \\{\\text{Catalog\_no}\\} \\)</span>. All attributes are prime attributes, which guarantees that the relation is in <b>3NF</b>.<br>- <b>Book:</b> Candidate keys are <span>\\( \\{\\text{Title, Author}\\} \\)</span> and <span>\\( \\{\\text{Catalog\_no}\\} \\)</span>. The non-prime attributes are Publisher, Year, and Price. No non-prime attribute depends on a proper subset of any candidate key, so Book is in <b>2NF</b>. However, in <span>\\( \\text{Publisher, Title, Year} \\rightarrow \\text{Price} \\)</span>, the determinant is not a superkey and Price is not a prime attribute, violating 3NF.<br><br>Therefore, Book is in 2NF and Collection is in 3NF.<br><br><b>Answer: Book is in 2NF and Collection is in 3NF</b><br><br><a href="https://gateoverflow.in/492/gate2008-69#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2008" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2008</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/database-management-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Database Management System</a></div></div>`
        }
    ]
});

registerTest({
    series: "cse-gate-2027",
    name: "TWT-DBMS(Normal Form-III)",
    date: "sep 08, 2026",
    topicsCovered: "BCNF Trade-offs, Lossless Decomposition, 3NF vs BCNF Distinguishing Tests, Redundancy Elimination in BCNF, Multivalued Dependency Rules, Candidate Keys Identification, Schema Normalization",
    questions: [
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">BCNF is not used for cases where a relation has:</span>`,
            image: "",
            options: [
                `<span style="display: inline;">Two (or more) candidate keys</span>`,
                `<span style="display: inline;">Two candidate keys and composite</span>`,
                `<span style="display: inline;">The candidate key overlap</span>`,
                `<span style="display: inline;">Two mutually exclusive foreign keys</span>`
            ],
            answer: "B",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  BCNF requires that for every non-trivial functional dependency <span>\\( X \\rightarrow Y \\)</span>, <span>\\( X \\)</span> must be a superkey. When relations have two composite candidate keys, 3NF may still permit certain redundancies that BCNF addresses.<br><br><b>Answer: Two candidate keys and composite</b><br><br><a href="https://gateoverflow.in/49536/isro2007-54" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/isro-cse-2007" style="color:#2f6d1a; text-decoration:none" target="_blank">ISRO CSE 2007</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/database-management-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Database Management System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Armstrong's inference rules do not determine:</span>`,
            image: "",
            options: [
                `<span style="display: inline;">Reflexivity</span>`,
                `<span style="display: inline;">Augmentation</span>`,
                `<span style="display: inline;">Transitivity</span>`,
                `<span style="display: inline;">Mutual dependency</span>`
            ],
            answer: "D",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  Armstrong's primary inference axioms consist of Reflexivity, Augmentation, and Transitivity (along with derived rules such as Union, Decomposition, and Pseudo-transitivity). "Mutual dependency" is not determined by Armstrong's inference rules.<br><br><b>Answer: Mutual dependency</b><br><br><a href="https://gateoverflow.in/49531/isro2007-51" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/isro-cse-2007" style="color:#2f6d1a; text-decoration:none" target="_blank">ISRO CSE 2007</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/database-management-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Database Management System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Consider the following implications relating to functional and multivalued dependencies given below, which may or may not be correct.<br><br>i. if <span>\\( A \\twoheadrightarrow B \\)</span> and <span>\\( A \\twoheadrightarrow C \\)</span> then <span>\\( A \\rightarrow BC \\)</span><br>ii. if <span>\\( A \\rightarrow B \\)</span> and <span>\\( A \\rightarrow C \\)</span> then <span>\\( A \\twoheadrightarrow BC \\)</span><br>iii. if <span>\\( A \\twoheadrightarrow BC \\)</span> and <span>\\( A \\rightarrow B \\)</span> then <span>\\( A \\rightarrow C \\)</span><br>iv. if <span>\\( A \\rightarrow BC \\)</span> and <span>\\( A \\rightarrow B \\)</span> then <span>\\( A \\twoheadrightarrow C \\)</span><br><br>Exactly how many of the above implications are valid?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">0</span>`,
                `<span style="display: inline;">1</span>`,
                `<span style="display: inline;">2</span>`,
                `<span style="display: inline;">3</span>`
            ],
            answer: "C",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  Evaluating each implication:<br>- <b>i:</b> Multivalued dependencies do not imply functional dependencies; <span>\\( A \\twoheadrightarrow B \\)</span> and <span>\\( A \\twoheadrightarrow C \\)</span> does not imply <span>\\( A \\rightarrow BC \\)</span> (Invalid).<br>- <b>ii:</b> <span>\\( A \\rightarrow B \\)</span> and <span>\\( A \\rightarrow C \\implies A \\rightarrow BC \\)</span>. Since every functional dependency is also a multivalued dependency (<span>\\( X \\rightarrow Y \\implies X \\twoheadrightarrow Y \\)</span>), <span>\\( A \\twoheadrightarrow BC \\)</span> holds (Valid).<br>- <b>iii:</b> An MVD and an FD cannot produce an FD for an unrelated attribute; it only implies <span>\\( A \\twoheadrightarrow C \\)</span>, not <span>\\( A \\rightarrow C \\)</span> (Invalid).<br>- <b>iv:</b> <span>\\( A \\rightarrow BC \\implies A \\rightarrow C \\)</span>. Since every FD is also an MVD, <span>\\( A \\twoheadrightarrow C \\)</span> holds (Valid).<br><br>Exactly 2 implications (ii and iv) are valid.<br><br><b>Answer: 2</b><br><br><a href="https://gateoverflow.in/3512/gate2007-it-67" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-it-2007" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE IT 2007</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/database-management-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Database Management System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Which one of the following statements is FALSE?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">Any relation with two attributes is in BCNF</span>`,
                `<span style="display: inline;">A relation in which every key has only one attribute is in 2NF</span>`,
                `<span style="display: inline;">A prime attribute can be transitively dependent on a key in a 3 NF relation.</span>`,
                `<span style="display: inline;">A prime attribute can be transitively dependent on a key in a BCNF relation.</span>`
            ],
            answer: "D",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  - In BCNF, for every non-trivial functional dependency <span>\\( X \\rightarrow Y \\)</span>, <span>\\( X \\)</span> must be a superkey. Therefore, no attribute can be transitively dependent on any candidate key in a BCNF relation. Hence, statement D is <b>FALSE</b>.<br>- Statement A is TRUE (any two-attribute relation is always in BCNF).<br>- Statement B is TRUE (partial dependency requires composite keys; with only single-attribute keys, 2NF is always satisfied).<br>- Statement C is TRUE (3NF allows <span>\\( X \\rightarrow A \\)</span> when <span>\\( A \\)</span> is a prime attribute, allowing transitive dependency to prime attributes).<br><br><b>Answer: A prime attribute can be transitively dependent on a key in a BCNF relation.</b><br><br><a href="https://gateoverflow.in/1260/gate2007-62#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2007" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2007</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/database-management-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Database Management System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Which of the following is TRUE about formulae in Conjunctive Normal Form?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">For any formula, there is a truth assignment for which at least half the clauses evaluate to true.</span>`,
                `<span style="display: inline;">For any formula, there is a truth assignment for which all the clauses evaluate to true.</span>`,
                `<span style="display: inline;">There is a formula such that for each truth assignment, at most one-fourth of the clauses evaluate to true.</span>`,
                `<span style="display: inline;">None of the above.</span>`
            ],
            answer: "A",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  By the probabilistic method / linearity of expectation in propositional logic:<br>For any CNF formula with non-empty clauses, every clause of length <span>\\( k \\ge 1 \\)</span> has probability <span>\\( 1 - 2^{-k} \\ge 1/2 \\)</span> of being satisfied by a uniform random truth assignment. Hence, the expected number of satisfied clauses is at least <span>\\( m/2 \\)</span>, which guarantees the existence of a truth assignment satisfying at least half of the clauses.<br><br><b>Answer: For any formula, there is a truth assignment for which at least half the clauses evaluate to true.</b><br><br><a href="https://gateoverflow.in/1246/gate2007-48#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2007" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2007</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/database-management-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Database Management System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Consider a relation <span>\\( R \\)</span> with five attributes <span>\\( V, W, X, Y, \\text{ and } Z \\)</span>. The following functional dependencies hold:<br><br><span>\\( VY \\rightarrow W, \\; WX \\rightarrow Z, \\; ZY \\rightarrow V \\)</span>.<br><br>Which of the following is a candidate key for <span>\\( R \\)</span>?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">VXZ</span>`,
                `<span style="display: inline;">VXY</span>`,
                `<span style="display: inline;">VWXY</span>`,
                `<span style="display: inline;">VWXYZ</span>`
            ],
            answer: "B",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  Attributes <span>\\( X \\)</span> and <span>\\( Y \\)</span> do not appear on the right-hand side of any dependency, so they must be part of every candidate key.<br><br>Testing <span>\\( VXY \\)</span>:<br>- <span>\\( VY \\rightarrow W \\implies \\{V, W, X, Y\\} \\)</span><br>- <span>\\( WX \\rightarrow Z \\implies \\{V, W, X, Y, Z\\} = R \\)</span><br><br>No proper subset of <span>\\( VXY \\)</span> determines all attributes (<span>\\( (XY)^+ = \\{X, Y\\} \\)</span>). Hence, <span>\\( VXY \\)</span> is a candidate key.<br><br><b>Answer: VXY</b><br><br><a href="https://gateoverflow.in/3604/gate2006-it-60" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-it-2006" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE IT 2006</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/database-management-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Database Management System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">In a schema with attributes <span>\\( A, B, C, D, \\text{ and } E \\)</span>, the following set of functional dependencies are given:<br><br><span>\\( A \\rightarrow B \\)</span><br><span>\\( A \\rightarrow C \\)</span><br><span>\\( CD \\rightarrow E \\)</span><br><span>\\( B \\rightarrow D \\)</span><br><span>\\( E \\rightarrow A \\)</span><br><br>Which of the following functional dependencies is NOT implied by the above set?</span>`,
            image: "",
            options: [
                `<span style="display: inline;"><span>\\( CD \\rightarrow AC \\)</span></span>`,
                `<span style="display: inline;"><span>\\( BD \\rightarrow CD \\)</span></span>`,
                `<span style="display: inline;"><span>\\( BC \\rightarrow CD \\)</span></span>`,
                `<span style="display: inline;"><span>\\( AC \\rightarrow BC \\)</span></span>`
            ],
            answer: "B",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  Let us compute the attribute closures under the given set of functional dependencies:<br>- <span>\\( (CD)^+ = \\{C, D, E, A, B\\} \\implies CD \\rightarrow AC \\)</span> holds.<br>- <span>\\( (BD)^+ = \\{B, D\\} \\not\\supseteq \\{C, D\\} \\implies BD \\rightarrow CD \\)</span> <b>does NOT hold</b>.<br>- <span>\\( (BC)^+ = \\{B, C, D, E, A\\} \\implies BC \\rightarrow CD \\)</span> holds.<br>- <span>\\( (AC)^+ = \\{A, C, B, D, E\\} \\implies AC \\rightarrow BC \\)</span> holds.<br><br><b>Answer: <span>\\( BD \\rightarrow CD \\)</span></b><br><br><a href="https://gateoverflow.in/3833/gate2005-it-70" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-it-2005" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE IT 2005</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/database-management-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Database Management System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">A table has fields <span>\\( F_1, F_2, F_3, F_4, F_5 \\)</span> with the following functional dependencies:<br><br><span>\\( F_1 \\rightarrow F_3, \\; F_2 \\rightarrow F_4, \\; (F_1, F_2) \\rightarrow F_5 \\)</span><br><br>In terms of Normalization, this table is in:</span>`,
            image: "",
            options: [
                `<span style="display: inline;">1NF</span>`,
                `<span style="display: inline;">2NF</span>`,
                `<span style="display: inline;">3NF</span>`,
                `<span style="display: inline;">None of these</span>`
            ],
            answer: "A",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  The candidate key is <span>\\( (F_1, F_2) \\)</span>. The non-prime attributes are <span>\\( F_3, F_4, F_5 \\)</span>.<br><br>Dependencies <span>\\( F_1 \\rightarrow F_3 \\)</span> and <span>\\( F_2 \\rightarrow F_4 \\)</span> have determinants that are proper subsets of the candidate key determining non-prime attributes. These are partial functional dependencies, which violate 2NF.<br><br>Therefore, the relation is in <b>1NF</b> only.<br><br><b>Answer: 1NF</b><br><br><a href="https://gateoverflow.in/3767/gate2005-it-22" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-it-2005" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE IT 2005</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/database-management-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Database Management System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Which one of the following statements about normal forms is FALSE?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">BCNF is stricter than 3NF</span>`,
                `<span style="display: inline;">Lossless, dependency-preserving decomposition into 3NF is always possible</span>`,
                `<span style="display: inline;">Lossless, dependency-preserving decomposition into BCNF is always possible</span>`,
                `<span style="display: inline;">Any relation with two attributes is in BCNF</span>`
            ],
            answer: "C",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  - It is NOT always possible to achieve a decomposition into BCNF that is both lossless and dependency-preserving (a well-known counterexample is <span>\\( R(A, B, C) \\)</span> with <span>\\( AB \\rightarrow C, \\; C \\rightarrow B \\)</span>). Hence, statement C is <b>FALSE</b>.<br>- Statement A is true (BCNF strictly contains fewer redundancies than 3NF).<br>- Statement B is true (guaranteed via the 3NF synthesis algorithm).<br>- Statement D is true (any two-attribute relation is always in BCNF).<br><br><b>Answer: Lossless, dependency-preserving decomposition into BCNF is always possible</b><br><br><a href="https://gateoverflow.in/1365/gate2005-29#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2005" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2005</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/database-management-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Database Management System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">A relation <span>\\( \\text{Empdtl} \\)</span> is defined with attributes <span>\\( \\text{empcode} \\)</span> (unique), name, street, city, state and pincode. For any pincode, there is only one city and state. Also, for any given street, city and state, there is just one pincode. In normalization terms, <span>\\( \\text{Empdtl} \\)</span> is a relation in:</span>`,
            image: "",
            options: [
                `<span style="display: inline;">1NF only</span>`,
                `<span style="display: inline;">2NF and hence also in 1NF</span>`,
                `<span style="display: inline;">3NF and hence also in 2NF and 1NF</span>`,
                `<span style="display: inline;">BCNF and hence also in 3NF, 2NF and 1NF</span>`
            ],
            answer: "B",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  Candidate key is <span>\\( \\text{empcode} \\)</span> (single-attribute), which ensures that no partial dependency can exist, so the relation is in <b>2NF</b>.<br><br>However, <span>\\( \\text{pincode} \\rightarrow \\text{city, state} \\)</span> is a transitive dependency (a non-prime attribute determining other non-prime attributes). This violates 3NF.<br><br>Hence, <span>\\( \\text{Empdtl} \\)</span> is in 2NF (and 1NF), but not in 3NF.<br><br><b>Answer: 2NF and hence also in 1NF</b><br><br><a href="https://gateoverflow.in/3719/gate2004-it-75" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-it-2004" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE IT 2004</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/database-management-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Database Management System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Consider the following entity relationship diagram (ERD), where two entities <span>\\( E_1 \\)</span> and <span>\\( E_2 \\)</span> have a relation <span>\\( R \\)</span> of cardinality <span>\\( 1:m \\)</span>.<br><img src="images/twt-dbms/q73.jpg"><br>The attributes of <span>\\( E_1 \\)</span> are <span>\\( A_{11}, A_{12} \\)</span> and <span>\\( A_{13} \\)</span> where <span>\\( A_{11} \\)</span> is the key attribute. The attributes of <span>\\( E_2 \\)</span> are <span>\\( A_{21}, A_{22} \\)</span> and <span>\\( A_{23} \\)</span> where <span>\\( A_{21} \\)</span> is the key attribute and <span>\\( A_{23} \\)</span> is a multi-valued attribute. Relation <span>\\( R \\)</span> does not have any attribute. A relational database containing minimum number of tables with each table satisfying the requirements of the third normal form (3NF) is designed from the above ERD. The number of tables in the database is</span>`,
            image: "",
            options: [
                `<span style="display: inline;">2</span>`,
                `<span style="display: inline;">3</span>`,
                `<span style="display: inline;">5</span>`,
                `<span style="display: inline;">4</span>`
            ],
            answer: "B",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  1. <b>Table for entity <span>\\( E_1 \\)</span>:</b> <span>\\( T_1(A_{11}, A_{12}, A_{13}) \\)</span> with primary key <span>\\( A_{11} \\)</span>.<br>2. <b>Table for entity <span>\\( E_2 \\)</span> and relationship <span>\\( R \\)</span> (1:m cardinality):</b> Since relation <span>\\( R \\)</span> is <span>\\( 1:m \\)</span> from <span>\\( E_1 \\)</span> to <span>\\( E_2 \\)</span>, we can combine relation <span>\\( R \\)</span> into entity <span>\\( E_2 \\)</span> by placing primary key of <span>\\( E_1 \\)</span> (i.e., <span>\\( A_{11} \\)</span>) as a foreign key: <span>\\( T_2(A_{21}, A_{22}, A_{11}) \\)</span> with primary key <span>\\( A_{21} \\)</span>.<br>3. <b>Table for multivalued attribute <span>\\( A_{23} \\)</span>:</b> A multivalued attribute cannot be placed in the main entity table without violating 1NF, so it requires its own table: <span>\\( T_3(A_{21}, A_{23}) \\)</span> with composite primary key <span>\\( (A_{21}, A_{23}) \\)</span>.<br><br>Therefore, the minimum number of tables required is <b>3</b>.<br><br><b>Answer: 3</b><br><br><a href="https://gateoverflow.in/3717/gate2004-it-73" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-it-2004" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE IT 2004</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/database-management-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Database Management System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">The relation scheme Student Performance (name, courseNo, rollNo, grade) has the following functional dependencies:<br><br><span>\\( \\text{name, courseNo} \\rightarrow \\text{grade} \\)</span><br><span>\\( \\text{rollNo, courseNo} \\rightarrow \\text{grade} \\)</span><br><span>\\( \\text{name} \\rightarrow \\text{rollNo} \\)</span><br><span>\\( \\text{rollNo} \\rightarrow \\text{name} \\)</span><br><br>The highest normal form of this relation scheme is</span>`,
            image: "",
            options: [
                `<span style="display: inline;">2NF</span>`,
                `<span style="display: inline;">3NF</span>`,
                `<span style="display: inline;">BCNF</span>`,
                `<span style="display: inline;">4NF</span>`
            ],
            answer: "B",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  - Candidate keys: <span>\\( \\{\\text{name, courseNo}\\} \\)</span> and <span>\\( \\{\\text{rollNo, courseNo}\\} \\)</span>.<br>- Prime attributes: <span>\\( \\text{name, rollNo, courseNo} \\)</span>.<br>- Non-prime attribute: <span>\\( \\text{grade} \\)</span>.<br><br><b>Checking 2NF:</b> The non-prime attribute <span>\\( \\text{grade} \\)</span> is fully functionally dependent on each candidate key. Dependencies <span>\\( \\text{name} \\rightarrow \\text{rollNo} \\)</span> and <span>\\( \\text{rollNo} \\rightarrow \\text{name} \\)</span> only determine prime attributes, so no partial dependency on a non-prime attribute exists. Thus, the relation is in <b>2NF</b>.<br><br><b>Checking 3NF:</b> For every FD <span>\\( X \\rightarrow Y \\)</span>:<br>- <span>\\( \\text{name, courseNo} \\rightarrow \\text{grade} \\)</span>: LHS is a superkey (Candidate Key).<br>- <span>\\( \\text{rollNo, courseNo} \\rightarrow \\text{grade} \\)</span>: LHS is a superkey (Candidate Key).<br>- <span>\\( \\text{name} \\rightarrow \\text{rollNo} \\)</span>: RHS (rollNo) is a prime attribute.<br>- <span>\\( \\text{rollNo} \\rightarrow \\text{name} \\)</span>: RHS (name) is a prime attribute.<br>Since all FDs satisfy the 3NF condition (either LHS is a superkey or RHS is a prime attribute), the relation is in <b>3NF</b>.<br><br><b>Checking BCNF:</b> In <span>\\( \\text{name} \\rightarrow \\text{rollNo} \\)</span>, name is not a superkey. Hence, BCNF is violated.<br><br>Therefore, the highest normal form is <b>3NF</b>.<br><br><b>Answer: 3NF</b><br><br><a href="https://gateoverflow.in/1046/gate2004-50#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2004" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2004</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/database-management-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Database Management System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Consider the following functional dependencies in a database:<br><br><span>\\( \\begin{array}{|l|l|}\\hline \\text{Date\\_of\\_Birth} \\rightarrow \\text{Age} & \\text{Age} \\rightarrow \\text{Eligibility} \\\\ \\hline \\text{Name} \\rightarrow \\text{Roll\\_number} & \\text{Roll\\_number} \\rightarrow \\text{Name} \\\\ \\hline \\text{Course\\_number} \\rightarrow \\text{Course\\_name} & \\text{Course\\_number} \\rightarrow \\text{Instructor} \\\\ \\hline \\text{(Roll\\_number, Course\\_number)} \\rightarrow \\text{Grade} & \\\\ \\hline \\end{array} \\)</span><br><br>The relation <span>\\( (\\text{Roll\\_number, Name, Date\\_of\\_Birth, Age}) \\)</span> is</span>`,
            image: "",
            options: [
                `<span style="display: inline;">in second normal form but not in third normal form</span>`,
                `<span style="display: inline;">in third normal form but not in BCNF</span>`,
                `<span style="display: inline;">in BCNF</span>`,
                `<span style="display: inline;">in none of the above</span>`
            ],
            answer: "D",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  For the relation <span>\\( R(\\text{Roll\\_number, Name, Date\\_of\\_Birth, Age}) \\)</span>, the applicable functional dependencies are:<br>- <span>\\( \\text{Date\\_of\\_Birth} \\rightarrow \\text{Age} \\)</span><br>- <span>\\( \\text{Name} \\rightarrow \\text{Roll\\_number} \\)</span><br>- <span>\\( \\text{Roll\\_number} \\rightarrow \\text{Name} \\)</span><br><br>Since <span>\\( \\text{Date\\_of\\_Birth} \\)</span> is not on the right-hand side of any dependency, it must be included in every candidate key.<br>Candidate keys are:<br>1. <span>\\( \\{\\text{Roll\\_number, Date\\_of\\_Birth}\\} \\)</span><br>2. <span>\\( \\{\\text{Name, Date\\_of\\_Birth}\\} \\)</span><br><br>Prime attributes: <span>\\( \\text{Roll\\_number, Name, Date\\_of\\_Birth} \\)</span>.<br>Non-prime attribute: <span>\\( \\text{Age} \\)</span>.<br><br>Notice the dependency <span>\\( \\text{Date\\_of\\_Birth} \\rightarrow \\text{Age} \\)</span>:<br>Here, <span>\\( \\text{Date\\_of\\_Birth} \\)</span> is a <b>proper subset</b> of the candidate key <span>\\( \\{\\text{Roll\\_number, Date\\_of\\_Birth}\\} \\)</span> determining a non-prime attribute (<span>\\( \\text{Age} \\)</span>). This is a <b>partial dependency</b>, which violates 2NF.<br><br>Because the relation is not even in 2NF, it cannot be in 3NF or BCNF. Therefore, it is in none of the above.<br><br><b>Answer: in none of the above</b><br><br><a href="https://gateoverflow.in/968/gate2003-85#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2003" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2003</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/database-management-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Database Management System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Relation <span>\\( R \\)</span> is decomposed using a set of functional dependencies, <span>\\( F \\)</span>, and relation <span>\\( S \\)</span> is decomposed using another set of functional dependencies, <span>\\( G \\)</span>. One decomposition is definitely BCNF, the other is definitely 3NF, but it is not known which is which. To make a guaranteed identification, which one of the following tests should be used on the decompositions? (Assume that the closures of <span>\\( F \\)</span> and <span>\\( G \\)</span> are available).</span>`,
            image: "",
            options: [
                `<span style="display: inline;">Dependency-preservation</span>`,
                `<span style="display: inline;">Lossless-join</span>`,
                `<span style="display: inline;">BCNF definition</span>`,
                `<span style="display: inline;">3NF definition</span>`
            ],
            answer: "C",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  - By definition, every relation in <b>BCNF is already in 3NF</b> (BCNF is a stricter normal form than 3NF: <span>\\( \\text{BCNF} \\subset \\text{3NF} \\)</span>).<br>- If we apply the <b>3NF definition test</b>, <b>both</b> decompositions will satisfy 3NF, so it cannot distinguish which one is strictly 3NF and which is BCNF.<br>- If we apply the <b>BCNF definition test</b>:<br>  1. The decomposition that is in BCNF will pass.<br>  2. The decomposition that is only in 3NF (and not BCNF) will fail.<br><br>Hence, testing the <b>BCNF definition</b> guarantees a correct identification of both decompositions.<br><br><b>Answer: BCNF definition</b><br><br><a href="https://gateoverflow.in/854/gate2002-2-24#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2002" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2002</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/database-management-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Database Management System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Relation <span>\\( R \\)</span> with an associated set of functional dependencies, <span>\\( F \\)</span>, is decomposed into BCNF. The redundancy (arising out of functional dependencies) in the resulting set of relations is:</span>`,
            image: "",
            options: [
                `<span style="display: inline;">Zero</span>`,
                `<span style="display: inline;">More than zero but less than that of an equivalent 3NF decomposition</span>`,
                `<span style="display: inline;">Proportional to the size of <span>\\( F^+ \\)</span></span>`,
                `<span style="display: inline;">Indeterminate</span>`
            ],
            answer: "A",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  - Redundancy arising out of functional dependencies occurs when a non-key determinant specifies attribute values across multiple tuples.<br>- In <b>BCNF</b>, for every non-trivial functional dependency <span>\\( X \\rightarrow Y \\)</span>, <span>\\( X \\)</span> must be a superkey.<br>- Because every determinant is a superkey, no functional dependency can be repeated across distinct tuples.<br>- Therefore, all redundancy arising specifically from functional dependencies is completely eliminated, making it <b>Zero</b>.<br><br><b>Answer: Zero</b><br><br><a href="https://gateoverflow.in/824/gate2002-1-19#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2002" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2002</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/database-management-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Database Management System</a></div></div>`
        }
    ]
});

registerTest({
    series: "cse-gate-2027",
    name: "TWT-DBMS(Transaction-I)",
    date: "sep 08, 2026",
    topicsCovered: "Conflict Serializability, Precedence Graph, ACID Properties, Lost Update Anomaly, Dirty Reads & Cascading Rollback, Two-Phase Locking (2PL) Protocol",
    questions: [
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Consider concurrent execution of two transactions <span>\\( T_1 \\)</span> and <span>\\( T_2 \\)</span> in a DBMS, both of which access a data object <span>\\( A \\)</span>. For these two transactions to not conflict on <span>\\( A \\)</span>, which one of the following statements must be true?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">Both <span>\\( T_1 \\)</span> and <span>\\( T_2 \\)</span> only read <span>\\( A \\)</span></span>`,
                `<span style="display: inline;"><span>\\( T_1 \\)</span> reads <span>\\( A \\)</span> and <span>\\( T_2 \\)</span> writes <span>\\( A \\)</span></span>`,
                `<span style="display: inline;"><span>\\( T_1 \\)</span> writes <span>\\( A \\)</span> and <span>\\( T_2 \\)</span> reads <span>\\( A \\)</span></span>`,
                `<span style="display: inline;">Both <span>\\( T_1 \\)</span> and <span>\\( T_2 \\)</span> write <span>\\( A \\)</span></span>`
            ],
            answer: "A",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  Two operations by different transactions on the same data item <span>\\( A \\)</span> are in <b>conflict</b> if and only if at least one of the operations is a <b>write</b> operation.<br><br>The combinations of operations are:<br>- <b>Read-Read:</b> Non-conflicting (neither transaction alters the data item <span>\\( A \\)</span>).<br>- <b>Read-Write:</b> Conflicting.<br>- <b>Write-Read:</b> Conflicting.<br>- <b>Write-Write:</b> Conflicting.<br><br>Therefore, for <span>\\( T_1 \\)</span> and <span>\\( T_2 \\)</span> to not conflict on <span>\\( A \\)</span>, both transactions must only read <span>\\( A \\)</span>.<br><br><b>Answer: Both <span>\\( T_1 \\)</span> and <span>\\( T_2 \\)</span> only read <span>\\( A \\)</span></b><br><br><a href="https://gateoverflow.in/523136/gate-cse-2026-set-2-question-10#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2026-set-2" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2026 SET-2</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/database-management-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Database Management System</a></div></div>`
        },
        {
            marks: 2,
            neg: 0,
            type: "MSQ",
            text: `<span style="display: inline;">Consider the database transactions <span>\\( T_1 \\)</span> and <span>\\( T_2 \\)</span>, and data items <span>\\( X \\)</span> and <span>\\( Y \\)</span>. Which of the schedule(s) is/are conflict serializable?<br><br><span>\\( \\begin{array}{|l|}\\hline \\textbf{Transaction } T_1 \\\\ \\hline R_1(X) \\\\ \\hline W_1(Y) \\\\ \\hline R_1(X) \\\\ \\hline W_1(X) \\\\ \\hline \\text{COMMIT}(T_1) \\\\ \\hline \\end{array} \\)</span> &nbsp;&nbsp; <span>\\( \\begin{array}{|l|}\\hline \\textbf{Transaction } T_2 \\\\ \\hline W_2(X) \\\\ \\hline W_2(Y) \\\\ \\hline \\text{COMMIT}(T_2) \\\\ \\hline \\end{array} \\)</span></span>`,
            image: "",
            options: [
                `<span style="display: inline;"><span>\\( R_1(X), W_2(X), W_1(Y), W_2(Y), R_1(X), W_1(X), \\text{COMMIT}(T_2), \\text{COMMIT}(T_1) \\)</span></span>`,
                `<span style="display: inline;"><span>\\( W_2(X), R_1(X), W_2(Y), W_1(Y), R_1(X), \\text{COMMIT}(T_2), W_1(X), \\text{COMMIT}(T_1) \\)</span></span>`,
                `<span style="display: inline;"><span>\\( R_1(X), W_1(Y), W_2(X), W_2(Y), R_1(X), W_1(X), \\text{COMMIT}(T_1), \\text{COMMIT}(T_2) \\)</span></span>`,
                `<span style="display: inline;"><span>\\( W_2(X), R_1(X), W_1(Y), W_2(Y), R_1(X), \\text{COMMIT}(T_2), W_1(X), \\text{COMMIT}(T_1) \\)</span></span>`
            ],
            answer: ["B"],
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  To determine conflict serializability, construct the precedence (conflict) graph for each schedule:<br><br>- <b>Option A:</b> <span>\\( R_1(X) \\)</span> appears before <span>\\( W_2(X) \\implies T_1 \\rightarrow T_2 \\)</span>, but <span>\\( W_2(X) \\)</span> appears before the second <span>\\( R_1(X) \\implies T_2 \\rightarrow T_1 \\)</span>. This forms a cycle. Hence, <b>not</b> conflict serializable.<br><br>- <b>Option B:</b><br>&nbsp;&nbsp;• On <span>\\( X \\)</span>: <span>\\( W_2(X) \\)</span> precedes <span>\\( R_1(X) \\)</span> and <span>\\( W_1(X) \\implies T_2 \\rightarrow T_1 \\)</span>.<br>&nbsp;&nbsp;• On <span>\\( Y \\)</span>: <span>\\( W_2(Y) \\)</span> precedes <span>\\( W_1(Y) \\implies T_2 \\rightarrow T_1 \\)</span>.<br>All directed edges go from <span>\\( T_2 \\rightarrow T_1 \\)</span> with no backward edges. The precedence graph is acyclic. Hence, it is <b>conflict serializable</b> (equivalent to serial order <span>\\( T_2 \\rightarrow T_1 \\)</span>).<br><br>- <b>Option C:</b> <span>\\( R_1(X) \\)</span> precedes <span>\\( W_2(X) \\implies T_1 \\rightarrow T_2 \\)</span>, and <span>\\( W_2(X) \\)</span> precedes the second <span>\\( R_1(X) \\implies T_2 \\rightarrow T_1 \\)</span> (cycle).<br><br>- <b>Option D:</b> <span>\\( W_2(X) \\)</span> precedes <span>\\( R_1(X) \\implies T_2 \\rightarrow T_1 \\)</span>, but <span>\\( W_1(Y) \\)</span> precedes <span>\\( W_2(Y) \\implies T_1 \\rightarrow T_2 \\)</span> (cycle).<br><br><b>Answer: Option B</b><br><br><a href="https://gateoverflow.in/460850/gate-cse-2025-set-2-question-43#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2025-set-2" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2025 SET-2</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/database-management-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Database Management System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0,
            type: "MSQ",
            text: `<span style="display: inline;">An audit of a banking transactions system has found that on an earlier occasion, two joint holders of account <span>\\( A \\)</span> attempted simultaneous transfers of Rs. 10000 each from account <span>\\( A \\)</span> to account <span>\\( B \\)</span>. Both transactions read the same value, Rs. 11000, as the initial balance in <span>\\( A \\)</span> and were allowed to go through. <span>\\( B \\)</span> was credited Rs. 10000 twice. <span>\\( A \\)</span> was debited only once and ended up with a balance of Rs. 1000.<br><br>Which of the following properties is/are certain to have been violated by the system?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">Atomicity</span>`,
                `<span style="display: inline;">Consistency</span>`,
                `<span style="display: inline;">Isolation</span>`,
                `<span style="display: inline;">Durability</span>`
            ],
            answer: ["B", "C"],
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  This scenario represents the classic <b>lost update problem</b> resulting from concurrent execution:<br><br>- <b>Isolation Violation:</b> Both transactions ran concurrently without proper serializability control. Both transactions read the balance of <span>\\( A \\)</span> as 11,000 simultaneously, and each wrote back 1,000 (overwriting each other's debit). One transaction's intermediate state was not isolated from the other, which is a direct violation of <b>Isolation</b>.<br><br>- <b>Consistency Violation:</b> Total money in the system must be conserved (sum of balances before = sum of balances after). Initially, <span>\\( A \\)</span> had 11,000. 20,000 was credited to <span>\\( B \\)</span>, but only 10,000 was debited from <span>\\( A \\)</span>, leaving <span>\\( A \\)</span> with 1,000. The integrity constraint (conservation of funds) was violated, which is a violation of <b>Consistency</b>.<br><br>- <b>Atomicity</b> is preserved because each transaction executed all its intended steps (both were allowed to go through and neither was partially aborted).<br>- <b>Durability</b> is preserved because committed values persist.<br><br><b>Answer: Consistency and Isolation</b><br><br><a href="https://gateoverflow.in/460818/gate-cse-2025-set-2-question-17#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2025-set-2" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2025 SET-2</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/database-management-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Database Management System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">A schedule of three database transactions <span>\\( T_1, T_2, \\text{ and } T_3 \\)</span> is shown. <span>\\( R_i(A) \\)</span> and <span>\\( W_i(A) \\)</span> denote read and write of data item <span>\\( A \\)</span> by transaction <span>\\( T_i \\)</span>, <span>\\( i = 1, 2, 3 \\)</span>. The transaction <span>\\( T_1 \\)</span> aborts at the end. Which other transaction(s) will be required to be rolled back?<br><br><span>\\( R_1(X) \\quad W_1(Y) \\quad R_2(X) \\quad R_2(Y) \\quad R_3(Y) \\quad \\text{ABORT}(T_1) \\)</span></span>`,
            image: "",
            options: [
                `<span style="display: inline;">Only <span>\\( T_2 \\)</span></span>`,
                `<span style="display: inline;">Only <span>\\( T_3 \\)</span></span>`,
                `<span style="display: inline;">Both <span>\\( T_2 \\)</span> and <span>\\( T_3 \\)</span></span>`,
                `<span style="display: inline;">Neither <span>\\( T_2 \\)</span> nor <span>\\( T_3 \\)</span></span>`
            ],
            answer: "C",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  In the given schedule:<br><span>\\( R_1(X) \\quad W_1(Y) \\quad R_2(X) \\quad R_2(Y) \\quad R_3(Y) \\quad \\text{ABORT}(T_1) \\)</span><br><br>- <span>\\( T_1 \\)</span> writes to <span>\\( Y \\)</span> with <span>\\( W_1(Y) \\)</span>.<br>- Subsequently, <span>\\( T_2 \\)</span> executes <span>\\( R_2(Y) \\)</span>, which reads the uncommitted value written by <span>\\( T_1 \\)</span> (dirty read). When <span>\\( T_1 \\)</span> aborts, <span>\\( T_2 \\)</span> must be rolled back.<br>- Next, <span>\\( T_3 \\)</span> executes <span>\\( R_3(Y) \\)</span>. Since <span>\\( Y \\)</span> was not overwritten by any other transaction, <span>\\( T_3 \\)</span> also read the dirty value produced by <span>\\( T_1 \\)</span> (and subsequently read by <span>\\( T_2 \\)</span>). Therefore, <span>\\( T_3 \\)</span> must also be rolled back (cascading rollback).<br><br>Thus, <b>both <span>\\( T_2 \\)</span> and <span>\\( T_3 \\)</span></b> must be rolled back.<br><br><b>Answer: Both <span>\\( T_2 \\)</span> and <span>\\( T_3 \\)</span></b><br><br><a href="https://gateoverflow.in/460075/gate-cse-2025-set-1-question-5#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2025-set-1" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2025 SET-1</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/database-management-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Database Management System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0,
            type: "MSQ",
            text: `<span style="display: inline;">Which of the following statements about the Two Phase Locking (2PL) protocol is/are TRUE?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">2PL permits only serializable schedules</span>`,
                `<span style="display: inline;">With 2PL, a transaction always locks the data item being read or written just before every operation and always releases the lock just after the operation</span>`,
                `<span style="display: inline;">With 2PL, once a lock is released on any data item inside a transaction, no more locks on any data item can be obtained inside that transaction</span>`,
                `<span style="display: inline;">A deadlock is possible with 2PL</span>`
            ],
            answer: ["A", "C", "D"],
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  - <b>Statement A is TRUE:</b> The 2PL protocol guarantees conflict serializability, meaning every schedule allowed by 2PL is conflict serializable (and therefore serializable).<br><br>- <b>Statement B is FALSE:</b> Locking right before an operation and unlocking immediately after is simple locking, not 2PL. Under 2PL, locks cannot be acquired after any lock has been released.<br><br>- <b>Statement C is TRUE:</b> In 2PL, each transaction has two phases: Growing Phase (locks may be acquired, but none released) and Shrinking Phase (locks may be released, but no new locks can be acquired). Thus, once any lock is released, no more locks can be obtained.<br><br>- <b>Statement D is TRUE:</b> Basic 2PL does not prevent deadlocks; two or more transactions can hold locks that each other requires, resulting in a deadlock cycle.<br><br><b>Answer: Options A, C and D</b><br><br><a href="https://gateoverflow.in/422880/gate-cse-2024-set-2-question-17#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2024-set-2" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2024 SET-2</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/database-management-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Database Management System</a></div></div>`
        }
    ]
});

