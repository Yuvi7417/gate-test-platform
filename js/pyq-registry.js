registerTest({
    series: "cse-gate-2027",
    name: "TWT-Theory of Computation(Regular Language-I)",
    date: "sep 08, 2026",
    topicsCovered: "Closure Properties, Language Identification, Minimal DFA State Bounds, Pumping Lemma, Prefix & Suffix Closures",
    questions: [
        {
            marks: 2,
            neg: 0.66,
            type: "MCQ",
            text: `<span style="display: inline;">Let <span>\\( L_{1} \\)</span> and <span>\\( L_{2} \\)</span> be two languages over a finite alphabet, such that <span>\\( L_{1} \\cap L_{2} \\)</span> and <span>\\( L_{2} \\)</span> are regular languages. <br/>Which of the following statements is/are always true?</span>`,
            image: "",
            options: [
                `<span style="display: inline;"><span>\\( L_{1} \\)</span> is regular</span>`,
                `<span style="display: inline;"><span>\\( L_{1} \\cup L_{2} \\)</span> is regular</span>`,
                `<span style="display: inline;"><span>\\( \\overline{L_{2}} \\)</span> is context-free</span>`,
                `<span style="display: inline;"><span>\\( L_{1} \\)</span> is context-free</span>`
            ],
            answer: "C",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/523039/gate-cse-2026-set-1-question-41#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2026-set-1" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2026 SET-1</a> | <a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/theory-of-computation" style="color:#2f6d1a; text-decoration:none" target="_blank">Theory of Computation</a></div></div>`
        },
        {
            marks: 2,
            neg: 0,
            type: "MSQ",
            text: `<span style="display: inline;">Let <span>\\( \\Sigma = \\{a, b, c\\} \\)</span>. For <span>\\( x \\in \\Sigma^* \\)</span>, and <span>\\( \\alpha \\in \\Sigma \\)</span>, let <span>\\( \\# _\\alpha (x) \\)</span> denote the number of occurrences of <span>\\( \\alpha \\)</span> in <span>\\( x \\)</span>. <br/><br/> Which one or more of the following option(s) define(s) regular language(s)?</span>`,
            image: "",
            options: [
                `<span style="display: inline;"><span>\\( \\{ a^m b^n \\mid m, n \\geq 0 \\} \\)</span></span>`,
                `<span style="display: inline;"><span>\\( \\{ a, b \\}^* \\cap \\{ a^m b^n c^{m-n} \\mid m \\geq n \\geq 0 \\} \\)</span></span>`,
                `<span style="display: inline;"><span>\\( \\{ w \\mid w \\in \\{ a, b \\}^*, \\#_a(w) \\equiv 2 \\ (\\text{mod}\\ 7), \\#_b(w) \\equiv 3 \\ (\\text{mod}\\ 9) \\} \\)</span></span>`,
                `<span style="display: inline;"><span>\\( \\{ w \\mid w \\in \\{ a, b \\}^*, \\#_a(w) \\equiv 2 \\ (\\text{mod}\\ 7), \\#_a(w) = \\#_b(w) \\} \\)</span></span>`
            ],
            answer: ["A", "C"],
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/460851/gate-cse-2025-set-2-question-42#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2025-set-2" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2025 SET-2</a> | <a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/theory-of-computation" style="color:#2f6d1a; text-decoration:none" target="_blank">Theory of Computation</a></div></div>`
        },
        {
            marks: 2,
            neg: 0.66,
            type: "MCQ",
            text: `<span style="display: inline;">Consider the following two languages over the alphabet <span>\\( \\{a, b\\} \\)</span>: <br/><br/> <span>\\( L_1 = \\{ \\alpha \\beta \\alpha \\mid \\alpha \\in \\{a, b\\}^+ \\text{ and } \\beta \\in \\{a, b\\}^+ \\} \\)</span><br/> <span>\\( L_2 = \\{ \\alpha \\beta \\alpha \\mid \\alpha \\in \\{a\\}^+ \\text{ and } \\beta \\in \\{a, b\\}^+ \\} \\)</span> <br/><br/> Which ONE of the following statements is CORRECT?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">Both <span>\\( L_1 \\)</span> and <span>\\( L_2 \\)</span> are regular languages.</span>`,
                `<span style="display: inline;"><span>\\( L_1 \\)</span> is a regular language but <span>\\( L_2 \\)</span> is not a regular language.</span>`,
                `<span style="display: inline;"><span>\\( L_1 \\)</span> is not a regular language but <span>\\( L_2 \\)</span> is a regular language.</span>`,
                `<span style="display: inline;">Neither <span>\\( L_1 \\)</span> nor <span>\\( L_2 \\)</span> is a regular language.</span>`
            ],
            answer: "C",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/460046/gate-cse-2025-set-1-question-34#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2025-set-1" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2025 SET-1</a> | <a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/theory-of-computation" style="color:#2f6d1a; text-decoration:none" target="_blank">Theory of Computation</a></div></div>`
        },
        {
            marks: 2,
            neg: 0,
            type: "NAT",
            text: `<span style="display: inline;">Let <span>\\( L_1 \\)</span> be the language represented by the regular expression <span>\\( b^* a b^*\\left(a b^* a b^*\\right)^* \\)</span> and <span>\\( L_2=\\left\\{w \\in(a+b)^*|| w \\mid \\leq 4\\right\\} \\)</span>, where <span>\\( |w| \\)</span> denotes the length of string <span>\\( w \\)</span>. The number of strings in <span>\\( L_2 \\)</span> which are also in <span>\\( L_1 \\)</span> is ___</span>`,
            image: "",
            options: [
            ],
            answer: "15",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/422845/gate-cse-2024-set-2-question-52#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2024-set-2" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2024 SET-2</a> | <a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/theory-of-computation" style="color:#2f6d1a; text-decoration:none" target="_blank">Theory of Computation</a></div></div>`
        },
        {
            marks: 1,
            neg: 0,
            type: "MSQ",
            text: `<span style="display: inline;">Let <span>\\( L_1, L_2 \\)</span> be two regular languages and <span>\\( L_3 \\)</span> a language which is not regular. Which of the following statements is/are always TRUE?</span>`,
            image: "",
            options: [
                `<span style="display: inline;"><span>\\( L_1=L_2 \\)</span> if and only if <span>\\( L_1 \\cap \\overline{L_2}=\\phi \\)</span></span>`,
                `<span style="display: inline;"><span>\\( L_1 \\cup L_3 \\)</span> is not regular</span>`,
                `<span style="display: inline;"><span>\\( \\overline{L_3} \\)</span> is not regular</span>`,
                `<span style="display: inline;"><span>\\( \\overline{L_1} \\cup \\overline{L_2} \\)</span> is regular</span>`
            ],
            answer: ["C", "D"],
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/422829/gate-cse-2024-set-1-question-13#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2024-set-1" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2024 SET-1</a> | <a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/theory-of-computation" style="color:#2f6d1a; text-decoration:none" target="_blank">Theory of Computation</a></div></div>`
        },
        {
            marks: 2,
            neg: 0.66,
            type: "MCQ",
            text: `<span style="display: inline;">Consider the following two statements about regular languages:<br/><br/> S1: Every infinite regular language contains an undecidable language as a subset.<br/> S2: Every finite language is regular.<br/><br/> Which one of the following choices is correct?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">Only S1 is true</span>`,
                `<span style="display: inline;">Only S2 is true</span>`,
                `<span style="display: inline;">Both S1 and S2 are true</span>`,
                `<span style="display: inline;">Neither S1 nor S2 is true</span>`
            ],
            answer: "C",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/357504/gate-cse-2021-set-2-question-36#a_list_title" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2021-set-2" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2021 SET-2</a> | <a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/theory-of-computation" style="color:#2f6d1a; text-decoration:none" target="_blank">Theory of Computation</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Let <span>\\( L \\subseteq \\{0,1\\}^* \\)</span> be an arbitrary regular language accepted by a minimal DFA with k states. Which one of the following languages must necessarily be accepted by a minimal DFA with k states?</span>`,
            image: "",
            options: [
                `<span style="display: inline;"><span>\\( L - \\{01\\} \\)</span></span>`,
                `<span style="display: inline;"><span>\\( L \\cup \\{01\\} \\)</span></span>`,
                `<span style="display: inline;"><span>\\( \\{0,1\\}^* -L \\)</span></span>`,
                `<span style="display: inline;"><span>\\( L \\cdot L \\)</span></span>`
            ],
            answer: "C",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/357531/gate-cse-2021-set-2-question-9#a_list_title" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2021-set-2" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2021 SET-2</a> | <a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/theory-of-computation" style="color:#2f6d1a; text-decoration:none" target="_blank">Theory of Computation</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Which of the following is true?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">Every subset of a regular set is regular</span>`,
                `<span style="display: inline;">Every finite subset of non-regular set is regular</span>`,
                `<span style="display: inline;">The union of two non regular set is not regular</span>`,
                `<span style="display: inline;">Infinite union of finite set is regular</span>`
            ],
            answer: "B",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/331442/isro2020-38" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/isro-cse-2020" style="color:#2f6d1a; text-decoration:none" target="_blank">ISRO CSE 2020</a> | <a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/theory-of-computation" style="color:#2f6d1a; text-decoration:none" target="_blank">Theory of Computation</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Consider the following statements.<br/><br/> I. If <span>\\( L_1\\cup L_2 \\)</span> is regular, then both <span>\\( L_1 \\; and \\; L_2 \\)</span> must be regular.<br/> II. The class of regular languages is closed under infinite union.<br/><br/> Which of the above statements is/are TRUE?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">I only</span>`,
                `<span style="display: inline;">II only</span>`,
                `<span style="display: inline;">Both I and II</span>`,
                `<span style="display: inline;">Neither I nor II</span>`
            ],
            answer: "D",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/333223/gate2020-cs-8#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2020" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2020</a> | <a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/theory-of-computation" style="color:#2f6d1a; text-decoration:none" target="_blank">Theory of Computation</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">For <span>\\( \\Sigma =\\{a,b\\} \\)</span>, let us consider the regular language <br/><span>\\( L=\\{x|x=a^{2+3k} \\; or \\; x=b^{10+12k}, k\\geq 0\\} \\)</span>.<br/> Which one of the following can be a pumping length (the constant guaranteed by the pumping lemma) for L?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">3</span>`,
                `<span style="display: inline;">5</span>`,
                `<span style="display: inline;">9</span>`,
                `<span style="display: inline;">24</span>`
            ],
            answer: "D",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/302833/gate2019-cs-15#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2019" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2019</a> | <a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/theory-of-computation" style="color:#2f6d1a; text-decoration:none" target="_blank">Theory of Computation</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">If L is a regular language over <span>\\( \\Sigma =\\{a,b\\} \\)</span>, which one of the following languages is NOT regular ?</span>`,
            image: "",
            options: [
                `<span style="display: inline;"><span>\\( L\\cdot L^R=\\{xy|x \\in L,y^R \\in L\\} \\)</span></span>`,
                `<span style="display: inline;"><span>\\( \\{ww^R|w \\in L\\} \\)</span></span>`,
                `<span style="display: inline;">Prifix(L)={<span>\\( x \\in \\Sigma ^*|\\exists y \\in \\Sigma ^* \\)</span> such that <span>\\( xy \\in L \\)</span>}</span>`,
                `<span style="display: inline;">Suffix(L)={<span>\\( y \\in \\Sigma ^*|\\exists x \\in \\Sigma ^* \\)</span> such that <span>\\( xy \\in L \\)</span>}</span>`
            ],
            answer: "B",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/302841/gate2019-cs-7#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2019" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2019</a> | <a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/theory-of-computation" style="color:#2f6d1a; text-decoration:none" target="_blank">Theory of Computation</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Choose the correct statement -</span>`,
            image: "",
            options: [
                `<span style="display: inline;"><span>\\( A=\\left\\{a^{n} b^{n} \\mid n=1,2,3, \\ldots\\right\\} \\)</span> is a regular language</span>`,
                `<span style="display: inline;">The set B, consisting of all strings made up of only <span>\\( a^{\\prime} s \\)</span> and <span>\\( b^{\\prime} s \\)</span> having equal number of <span>\\( a^{\\prime} s \\)</span> and bs defines a regular language</span>`,
                `<span style="display: inline;"><span>\\( L\\left(A^{*} B\\right) \\cap B \\)</span> gives the set A</span>`,
                `<span style="display: inline;">None of the above</span>`
            ],
            answer: "D",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/213564/isro2018-24" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/isro-cse-2018" style="color:#2f6d1a; text-decoration:none" target="_blank">ISRO CSE 2018</a> | <a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/theory-of-computation" style="color:#2f6d1a; text-decoration:none" target="_blank">Theory of Computation</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Language L1 is defined by the grammar: <span>\\( S_{1}\\rightarrow aS_{1}b|\\varepsilon \\)</span><br/> Language L2 is defined by the grammar: <span>\\( S_{2}\\rightarrow abS_{2}|\\varepsilon \\)</span><br/> Consider the following statements:<br/> P: L1 is regular <br/> Q: L2 is regular<br/> Which one of the following is TRUE?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">Both P and Q are true</span>`,
                `<span style="display: inline;">P is true and Q is false</span>`,
                `<span style="display: inline;">P is false and Q is true</span>`,
                `<span style="display: inline;">Both P and Q are false</span>`
            ],
            answer: "C",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/39542/gate2016-2-17#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2016-set-2" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2016 SET-2</a> | <a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/theory-of-computation" style="color:#2f6d1a; text-decoration:none" target="_blank">Theory of Computation</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Let <span>\\( R_{1} \\)</span> and <span>\\( R_{2} \\)</span> be regular sets defined over the alphabet, then</span>`,
            image: "",
            options: [
                `<span style="display: inline;"><span>\\( R_{1} \\cap R_{2} \\)</span> is not regular</span>`,
                `<span style="display: inline;"><span>\\( R_{1} \\cup R_{2} \\)</span> is not regular</span>`,
                `<span style="display: inline;"><span>\\( \\Sigma^{*}-R_{1} \\)</span> is regular</span>`,
                `<span style="display: inline;"><span>\\( R_{1}^{*} \\)</span> is not regular</span>`
            ],
            answer: "C",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/51701/isro2015-43" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/isro-cse-2015" style="color:#2f6d1a; text-decoration:none" target="_blank">ISRO CSE 2015</a> | <a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/theory-of-computation" style="color:#2f6d1a; text-decoration:none" target="_blank">Theory of Computation</a></div></div>`
        },
        {
            marks: 2,
            neg: 0.66,
            type: "MCQ",
            text: `<span style="display: inline;">Which of the following languages is/are regular? <br/> <span>\\( L_{1}:\\{wxw^{R}|w,x \\in \\{a,b\\}^{*} \\; and \\; |w|,|x| \\gt 0 \\}, w^{R} \\)</span> is the reverse of string w <br/><span>\\( L_{2}:\\{a^{n}b^{m}|m\\neq n \\; and \\; m,n\\geq 0\\} \\)</span><br/> <span>\\( L_{3}:\\{a^{p}b^{q}c^{r}|p,q,r\\geq 0\\} \\)</span></span>`,
            image: "",
            options: [
                `<span style="display: inline;">L1 and L3 only</span>`,
                `<span style="display: inline;">L2 only</span>`,
                `<span style="display: inline;">L2 and L3 only</span>`,
                `<span style="display: inline;">L3 only</span>`
            ],
            answer: "A",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/8254/gate2015-2-36#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2015-set-2" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2015 SET-2</a> | <a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/theory-of-computation" style="color:#2f6d1a; text-decoration:none" target="_blank">Theory of Computation</a></div></div>`
        }
    ]
});

registerTest({
    series: "cse-gate-2027",
    name: "TWT-Theory of Computation(Regular Language-II)",
    date: "sep 08, 2026",
    topicsCovered: "Count Constraints, Concatenation vs Cross Product, String Membership in L*, Myhill-Nerode & Pumping Length",
    questions: [
        {
            marks: 2,
            neg: 0.66,
            type: "MCQ",
            text: `<span style="display: inline;">Let <span>\\( L_{1}=\\{w \\in \\{0,1\\}*|w \\)</span> has at least as many occurrences of (110)'s as (011)'s}. <br/>Let <span>\\( L_{2}=\\{w \\in \\{0,1\\}*|w \\)</span> has at least as many occurrence of (000)'s as (111)'s}. <br/><br/>Which one of the following is TRUE?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">L1 is regular but not L2</span>`,
                `<span style="display: inline;">L2 is regular but not L1</span>`,
                `<span style="display: inline;">Both L1 and L2 are regular</span>`,
                `<span style="display: inline;">Neither L1 nor L2 are regular</span>`
            ],
            answer: "A",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/1995/gate2014-2-36#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2014-set-2" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2014 SET-2</a> | <a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/theory-of-computation" style="color:#2f6d1a; text-decoration:none" target="_blank">Theory of Computation</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">If <span>\\( L_{1}=\\{a^{n}|n\\geq 0\\} \\)</span> and <span>\\( L_{2}=\\{b^{n}|n\\geq 0 \\} \\)</span>, Consider <br/>(I) <span>\\( L_{1}\\cdot L_{2} \\)</span> is a regular language <br/> (II) <span>\\( L_{1} \\cdot L_{2}= \\{a^{n}b^{n}|n \\geq 0\\} \\)</span><br/> Which one of the following is CORRECT?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">Only (I)</span>`,
                `<span style="display: inline;">Only (II)</span>`,
                `<span style="display: inline;">Both (I) and (II)</span>`,
                `<span style="display: inline;">Neither (I) nor (II)</span>`
            ],
            answer: "A",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/1971/gate2014-2-15#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2014-set-2" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2014 SET-2</a> | <a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/theory-of-computation" style="color:#2f6d1a; text-decoration:none" target="_blank">Theory of Computation</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Which one of the following is TRUE?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">The language L = {<span>\\( a^{n}b^{n}\\geq 0 \\)</span>} is regular</span>`,
                `<span style="display: inline;">The language L = {<span>\\( a^{n} \\)</span>| n is prime} is regular</span>`,
                `<span style="display: inline;">The language L={ w | w has 3k +1 b's for some k <span>\\( \\in \\)</span> N with <span>\\( \\Sigma \\)</span> = {a,b} } is regular.</span>`,
                `<span style="display: inline;">The language L = { ww| w<span>\\( \\in \\Sigma^{*} \\)</span> with <span>\\( \\Sigma \\)</span>={0,1}} is regular.</span>`
            ],
            answer: "C",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/1781/gate2014-1-15#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2014-set-1" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2014 SET-1</a> | <a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/theory-of-computation" style="color:#2f6d1a; text-decoration:none" target="_blank">Theory of Computation</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Consider the languages <span>\\( L_{1}=\\phi \\)</span> abd <span>\\( L_{2}=\\{a\\} \\)</span>. Which one of the following represents <span>\\( L_{1} L_{2}^{*} \\cup L_{1}^{*} \\)</span>?</span>`,
            image: "",
            options: [
                `<span style="display: inline;"><span>\\( \\{ \\epsilon \\} \\)</span></span>`,
                `<span style="display: inline;"><span>\\( \\phi \\)</span></span>`,
                `<span style="display: inline;"><span>\\( a^{*} \\)</span></span>`,
                `<span style="display: inline;"><span>\\( \\{ \\epsilon ,a \\} \\)</span></span>`
            ],
            answer: "A",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/1417/gate2013-8#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2013" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2013</a> | <a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/theory-of-computation" style="color:#2f6d1a; text-decoration:none" target="_blank">Theory of Computation</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Given the language L = {ab, aa, baa}, which of the following strings are in L*? <br/> 1) abaabaaabaa <br/> 2) aaaabaaaa <br/> 3) baaaaabaaaab <br/> 4) baaaaabaa</span>`,
            image: "",
            options: [
                `<span style="display: inline;">1, 2 and 3</span>`,
                `<span style="display: inline;">2, 3 and 4</span>`,
                `<span style="display: inline;">1, 3 and 4</span>`,
                `<span style="display: inline;">1, 2 and 4</span>`
            ],
            answer: "D",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/1609/gate2012-25#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2012" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2012</a> | <a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/theory-of-computation" style="color:#2f6d1a; text-decoration:none" target="_blank">Theory of Computation</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Let P be a regular language and Q be a context free language such that Q <span>\\( \\subseteq \\)</span> P. (For example, let P be the language represented by the regular expression p*q* and Q be <span>\\( \\{p^{n}q^{n}|n\\in N\\} \\)</span> Then which of the following is ALWAYS regular?</span>`,
            image: "",
            options: [
                `<span style="display: inline;"><span>\\( P\\cap Q \\)</span></span>`,
                `<span style="display: inline;">P-Q</span>`,
                `<span style="display: inline;"><span>\\( \\sum *-P \\)</span></span>`,
                `<span style="display: inline;"><span>\\( \\sum *-Q \\)</span></span>`
            ],
            answer: "C",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/3429/gate2011-24#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2011" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2011</a> | <a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/theory-of-computation" style="color:#2f6d1a; text-decoration:none" target="_blank">Theory of Computation</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">S<span>\\( \\rightarrow \\)</span>aSa|bSb|a|b; The language generated by the above grammar over the alphabet {a,b} is the set of</span>`,
            image: "",
            options: [
                `<span style="display: inline;">All palindromes.</span>`,
                `<span style="display: inline;">All odd length palindromes.</span>`,
                `<span style="display: inline;">Strings that begin and end with the same symbol</span>`,
                `<span style="display: inline;">All even length palindromes.</span>`
            ],
            answer: "B",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/1304/gate2009-12#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2009" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2009</a> | <a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/theory-of-computation" style="color:#2f6d1a; text-decoration:none" target="_blank">Theory of Computation</a></div></div>`
        },
        {
            marks: 2,
            neg: 0.66,
            type: "MCQ",
            text: `<span style="display: inline;">Which of the following languages is (are) non-regular?<br/> <span>\\( L_1 = \\{0^m1^n \\mid 0 \\leq m \\leq n \\leq 10000\\} \\)</span><br/> <span>\\( L_2 = \\{w \\mid w \\)</span> reads the same forward and backward<span>\\( \\} \\)</span><br/> <span>\\( L_3 = \\{w \\in \\{0, 1\\} ^* \\mid w \\)</span> contains an even number of 0's and an even number of 1's<span>\\( \\} \\)</span><br/></span>`,
            image: "",
            options: [
                `<span style="display: inline;"><span>\\( L_2 \\)</span> and <span>\\( L_3 \\)</span> only</span>`,
                `<span style="display: inline;"><span>\\( L_1 \\)</span> and <span>\\( L_2 \\)</span> only</span>`,
                `<span style="display: inline;"><span>\\( L_3 \\)</span> only</span>`,
                `<span style="display: inline;"><span>\\( L_2 \\)</span> only</span>`
            ],
            answer: "D",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/3345/gate2008-it-35" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-it-2008" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE IT 2008</a> | <a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/theory-of-computation" style="color:#2f6d1a; text-decoration:none" target="_blank">Theory of Computation</a></div></div>`
        },
        {
            marks: 2,
            neg: 0.66,
            type: "MCQ",
            text: `<span style="display: inline;">Which of the following are regular sets? <br/><br/> <span>\\( I. \\{a^{n}b^{2m}|n\\geq 0,m\\geq 0\\} \\)</span><br/> II. <span>\\( \\{a^{n}b^{m}|n=2m\\} \\)</span><br/> III. <span>\\( \\{a^{n}b^{m}|n\\neq m\\} \\)</span><br/> IV. <span>\\( \\{xcy|x,y,\\in \\{a,b\\}^*\\} \\)</span></span>`,
            image: "",
            options: [
                `<span style="display: inline;">I and IV only</span>`,
                `<span style="display: inline;">I and III only</span>`,
                `<span style="display: inline;">I only</span>`,
                `<span style="display: inline;">IV only</span>`
            ],
            answer: "A",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/476/gate2008-53#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2008" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2008</a> | <a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/theory-of-computation" style="color:#2f6d1a; text-decoration:none" target="_blank">Theory of Computation</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Which of the following languages is regular?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">{<span>\\( {ww^{R}|w \\in \\{0,1\\}^{+}} \\)</span>}</span>`,
                `<span style="display: inline;">{<span>\\( {ww^{R}x|x,w \\in \\{0,1\\}^{+}} \\)</span>}</span>`,
                `<span style="display: inline;">{<span>\\( {wxw^{R}|x,w\\in \\{0,1\\}^{+}} \\)</span>}</span>`,
                `<span style="display: inline;">{<span>\\( {xww^{R}|x,w\\in \\{0,1\\}^{+}} \\)</span>}</span>`
            ],
            answer: "C",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/1229/gate2007-31#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2007" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2007</a> | <a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/theory-of-computation" style="color:#2f6d1a; text-decoration:none" target="_blank">Theory of Computation</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Let L be a regular language. Consider the constructions on L below:<br/> I. <span>\\( \\text{repeat} (L) = \\{ww \\mid w \\in L\\} \\)</span><br/> II. <span>\\( \\text{prefix} (L) = \\{u \\mid \\exists v : uv \\in L\\} \\)</span><br/> III. <span>\\( \\text{suffix} (L) = \\{v \\mid \\exists u: uv \\in L\\} \\)</span><br/> IV. <span>\\( \\text{half} (L) = \\{u \\mid \\exists v: | v | = | u | \\text{ and } uv \\in L\\} \\)</span><br/> Which choice of L is best suited to support your answer above?</span>`,
            image: "",
            options: [
                `<span style="display: inline;"><span>\\( (a + b)^* \\)</span></span>`,
                `<span style="display: inline;"><span>\\( \\{\\epsilon, a, ab, bab\\} \\)</span></span>`,
                `<span style="display: inline;"><span>\\( (ab)^* \\)</span></span>`,
                `<span style="display: inline;"><span>\\( \\{a^nb^n \\mid n \\geq 0\\} \\)</span></span>`
            ],
            answer: "A",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/3637/gate2006-it-81" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Let L be a regular language. Consider the constructions on L below:<br/> I. <span>\\( \\text{repeat} (L) = \\{ww \\mid w \\in L\\} \\)</span><br/> II. <span>\\( \\text{prefix} (L) = \\{u \\mid \\exists v : uv \\in L\\} \\)</span><br/> III. <span>\\( \\text{suffix} (L) = \\{v \\mid \\exists u: uv \\in L\\} \\)</span><br/> IV. <span>\\( \\text{half} (L) = \\{u \\mid \\exists v: | v | = | u | \\text{ and } uv \\in L\\} \\)</span><br/>Which of the constructions could lead to a non-regular language?<br/></span>`,
            image: "",
            options: [
                `<span style="display: inline;">Both I and IV</span>`,
                `<span style="display: inline;">Only 1</span>`,
                `<span style="display: inline;">Only IV</span>`,
                `<span style="display: inline;">Both II and III</span>`
            ],
            answer: "B",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/3624/gate2006-it-80" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Which of the following statements about regular languages is NOT true ?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">Every language has a regular superset</span>`,
                `<span style="display: inline;">Every language has a regular subset</span>`,
                `<span style="display: inline;">Every subset of a regular language is regular</span>`,
                `<span style="display: inline;">Every subset of a finite language is regular</span>`
            ],
            answer: "C",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/3569/gate2006-it-30" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">If s is a string over (0+1)*, then let <span>\\( n_0 (s) \\)</span> denote the number of 0's in s and <span>\\( n_1 (s) \\)</span> the number of 1's in s. Which one of the following languages is not regular?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">L = {s <span>\\( \\in \\)</span> (0+1)* | <span>\\( n_0 (s) \\)</span> is a 3-digit prime}</span>`,
                `<span style="display: inline;">L = {s <span>\\( \\in \\)</span> (0+1)* | for every prefix s' of s, |<span>\\( n_0 (s') - n_1 (s') \\)</span>| <span>\\( \\leq \\)</span> 2}</span>`,
                `<span style="display: inline;">L = {s <span>\\( \\in \\)</span> (0+1)* |<span>\\( n_0 (s) - n_1 (s) \\)</span>| <span>\\( \\leq \\)</span> 4}</span>`,
                `<span style="display: inline;">L = {s <span>\\( \\in \\)</span> (0+1)* | <span>\\( n_0(s) \\)</span> mod 7 = <span>\\( n_1(s) \\)</span> mod 5 = 0}</span>`
            ],
            answer: "C",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/992/gate2006-29#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">A language L satisfies the Pumping Lemma for regular languages, and also the Pumping Lemma for context-free languages. Which of the following statements about L is TRUE?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">L is necessarily a regular language.</span>`,
                `<span style="display: inline;">L is necessarily a context-free language, but not necessarily a regular language.</span>`,
                `<span style="display: inline;">L is necessarily a non-regular language.</span>`,
                `<span style="display: inline;">None of the above</span>`
            ],
            answer: "D",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/3787/gate2005-it-40" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
        }
    ]
});

registerTest({
    series: "cse-gate-2027",
    name: "TWT-Theory of Computation(Context Free Grammar-I)",
    date: "sep 08, 2026",
    topicsCovered: "CFL Constraints, Ambiguity & Derivations, Parsing Comparisons (LL, SLR, LALR, CLR), GOTO Items & CNF Steps",
    questions: [
        {
            marks: 2,
            neg: 0,
            type: "MSQ",
            text: `<span style="display: inline;">Let <span>\\( \\Sigma=\\{a, b, c, d\\} \\)</span> and let <span>\\( L=\\left\\{a^{i} b^{j} c^{k} d^{\\ell} \\mid i, j, k, \\ell \\geq 0\\right\\} \\)</span>. <br/><br/>Which of the following constraints ensure(s) that the language <span>\\( L \\)</span> is context-free?</span>`,
            image: "",
            options: [
                `<span style="display: inline;"><span>\\( i+k=j+\\ell \\)</span></span>`,
                `<span style="display: inline;"><span>\\( i=k \\)</span> and <span>\\( j=\\ell \\)</span></span>`,
                `<span style="display: inline;"><span>\\( i=\\ell \\)</span> and <span>\\( j=k \\)</span></span>`,
                `<span style="display: inline;"><span>\\( i+j=k+\\ell \\)</span></span>`
            ],
            answer: "A, C, D",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/523108/gate-cse-2026-set-2-question-38#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
        },
        {
            marks: 2,
            neg: 0,
            type: "MSQ",
            text: `<span style="display: inline;">Consider the following context-free grammar <span>\\( G \\)</span>.<br/><br/> <span>\\( \\begin{array}{l} S \\rightarrow a b a A B A b b a \\\\ A \\rightarrow a a B B A b \\mid b B a b a a \\\\ B \\rightarrow a B b \\mid a b \\end{array} \\)</span> <br/><br/>In the above grammar, <span>\\( S \\)</span> is the start symbol, <span>\\( a \\)</span> and <span>\\( b \\)</span> are terminal symbols, and <span>\\( A \\)</span> and <span>\\( B \\)</span> are non-terminal symbols.<br/><br/> Let <span>\\( L(G) \\)</span> be the language generated by the grammar <span>\\( G \\)</span>. For a string <span>\\( s \\in L(G) \\)</span>, let <span>\\( n_{1}(s) \\)</span> be the number of <span>\\( a \\)</span> 's in <span>\\( s \\)</span> and <span>\\( n_{2}(s) \\)</span> be the number of <span>\\( b \\)</span> 's in <span>\\( s \\)</span>. <br/><br/>Which of the following statements is/are true?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">There is a string <span>\\( s \\in L(G) \\)</span> such that <span>\\( n_{1}(s) &lt; n_{2}(s) \\)</span></span>`,
                `<span style="display: inline;">For every string <span>\\( s \\in L(G), n_{1}(s) \\geq n_{2}(s) \\)</span></span>`,
                `<span style="display: inline;">There is a string <span>\\( s \\in L(G) \\)</span> such that <span>\\( n_{1}(s)&gt;2 n_{2}(s) \\)</span></span>`,
                `<span style="display: inline;">For every string <span>\\( s \\in L(G), n_{1}(s) \\leq 2 n_{2}(s) \\)</span></span>`
            ],
            answer: "B, D",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/523038/gate-cse-2026-set-1-question-42#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
        },
        {
            marks: 1,
            neg: 0,
            type: "MSQ",
            text: `<span style="display: inline;">Consider the following grammar where <span>\\( S \\)</span> is the start symbol, and <span>\\( a \\)</span> and <span>\\( b \\)</span> are terminal symbols.<br/><br/> <span>\\( S \\rightarrow a S b S \\text { | } b S \\text { | } \\epsilon \\)</span> <br/><br/>Which of the following statements is/are true?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">The grammar is ambiguous</span>`,
                `<span style="display: inline;">The string <span>\\( a b b \\)</span> has two distinct derivations in this grammar</span>`,
                `<span style="display: inline;">The string <span>\\( a b a b \\)</span> has only one rightmost derivation</span>`,
                `<span style="display: inline;">The language generated by the grammar is undecidable</span>`
            ],
            answer: "A, B, C",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/523065/gate-cse-2026-set-1-question-15#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
        },
        {
            marks: 2,
            neg: 0,
            type: "MSQ",
            text: `<span style="display: inline;">Consider two grammars <span>\\( G1 \\)</span> and <span>\\( G2 \\)</span> with the production rules given below:<br/><br/> <span>\\( G1: S \\to \\text{if} E \\text{ then } S \\mid \\text{if} E \\text{ then } S \\text{ else } S \\mid a \\)</span><br/> <span>\\( E \\to b \\)</span><br/><br/> <span>\\( G2: S \\to \\text{if} E \\text{ then } S \\mid M \\)</span><br/> <span>\\( M \\to \\text{if} E \\text{ then } M \\text{ else } S \\mid c \\)</span><br/> <span>\\( E \\to b \\)</span><br/><br/>where <span>\\( if,then,else,a,b,c \\)</span> are the terminals. <br/><br/> Which of the following option(s) is/are CORRECT?</span>`,
            image: "",
            options: [
                `<span style="display: inline;"><span>\\( G1 \\)</span> is not LL(1) and <span>\\( G2 \\)</span> is LL(1).</span>`,
                `<span style="display: inline;"><span>\\( G1 \\)</span> is LL(1) and <span>\\( G2 \\)</span> is not LL(1).</span>`,
                `<span style="display: inline;"><span>\\( G1 \\)</span> and <span>\\( G2 \\)</span> are not LL(1).</span>`,
                `<span style="display: inline;"><span>\\( G1 \\)</span> and <span>\\( G2 \\)</span> are ambiguous.</span>`
            ],
            answer: "C, D",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/460852/gate-cse-2025-set-2-question-41#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
        },
        {
            marks: 2,
            neg: 0.66,
            type: "MCQ",
            text: `<span style="display: inline;">Given a Context-Free Grammar <span>\\( G \\)</span> as follows:<br/><br/> <span>\\( S \\to A a \\mid b A c \\mid d c \\mid b d a \\)</span><br/> <span>\\( A \\to d \\)</span><br/><br/> Which ONE of the following statements is TRUE?</span>`,
            image: "",
            options: [
                `<span style="display: inline;"><span>\\( G \\)</span> is neither LALR(1) nor SLR(1)</span>`,
                `<span style="display: inline;"><span>\\( G \\)</span> is CLR(1), not LALR(1)</span>`,
                `<span style="display: inline;"><span>\\( G \\)</span> is LALR(1), not SLR(1)</span>`,
                `<span style="display: inline;"><span>\\( G \\)</span> is LALR(1), also SLR(1)</span>`
            ],
            answer: "C",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/460805/gate-cse-2025-set-2-question-30#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
        },
        {
            marks: 2,
            neg: 0,
            type: "NAT",
            text: `<span style="display: inline;">Consider the following augmented grammar, which is to be parsed with a SLR parser. The set of terminals is <span>\\( \\{a, b, c, d, \\#, @\\} \\)</span> <br/> <span>\\( \\begin{aligned} &amp; S^{\\prime} \\rightarrow S \\\\ &amp; S \\rightarrow S S|A a| b A c|B c| b B a \\\\ &amp; A \\rightarrow d \\# \\\\ &amp; B \\rightarrow @ \\end{aligned} \\)</span> <br/> Let <span>\\( I_0=\\operatorname{CLOSURE}\\left(\\left\\{S^{\\prime} \\rightarrow \\bullet S\\right\\}\\right) \\)</span>. The number of items in the set <span>\\( \\operatorname{GOTO}\\left(I_0, S\\right) \\)</span> is ____</span>`,
            image: "",
            options: [],
            answer: "9",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/422842/gate-cse-2024-set-2-question-55#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
        },
        {
            marks: 2,
            neg: 0.66,
            type: "MCQ",
            text: `<span style="display: inline;">Consider a context-free grammar <span>\\( G \\)</span> with the following 3 rules. <br/> <span>\\( S \\rightarrow a S, S \\rightarrow a S b S, S \\rightarrow c \\)</span> <br/> Let <span>\\( w \\in L(G) \\)</span>. Let <span>\\( n_a(w), n_b(w), n_c(w) \\)</span> denote the number of times <span>\\( a, b, c \\)</span> occur in <span>\\( w \\)</span>, respectively. Which of the following statements is/are TRUE?</span>`,
            image: "",
            options: [
                `<span style="display: inline;"><span>\\( n_a(w)&gt;n_b(w) \\)</span></span>`,
                `<span style="display: inline;"><span>\\( n_a(w)&gt;n_c(w)-2 \\)</span></span>`,
                `<span style="display: inline;"><span>\\( n_c(w)=n_b(w)+1 \\)</span></span>`,
                `<span style="display: inline;"><span>\\( n_c(w)=n_b(w) * 2 \\)</span></span>`
            ],
            answer: "B",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/422855/gate-cse-2024-set-2-question-42#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
        },
        {
            marks: 2,
            neg: 0.66,
            type: "MCQ",
            text: `<span style="display: inline;">Consider the following context-free grammar where the start symbol is <span>\\( S \\)</span> and the set of terminals is <span>\\( \\{a, b, c, d\\} \\)</span>. <br/> <br/> <span>\\( \\begin{aligned} &amp; S \\rightarrow A a A b \\mid B b B a \\\\ &amp; A \\rightarrow c S \\mid \\epsilon \\\\ &amp; B \\rightarrow d S \\mid \\epsilon \\end{aligned} \\)</span> <br/><br/> The following is a partially-filled LL(1) parsing table.<br/><br/><span>\\( \\begin{array}{|c|c|c|c|c|c|} \\hline &amp; a &amp; b &amp; c &amp; d &amp; \\$ \\\\ \\hline S &amp; S \\rightarrow A a A b &amp; S \\rightarrow B b B a &amp; (1) &amp; (2) &amp; \\\\ \\hline A &amp; A \\rightarrow \\epsilon &amp; (3) &amp; A \\rightarrow c S &amp; &amp; \\\\ \\hline B &amp; (4) &amp; B \\rightarrow \\epsilon &amp; &amp; B \\rightarrow d S &amp; \\\\ \\hline \\end{array} \\)</span> <br/><br/> Which one of the following options represents the CORRECT combination for the numbered cells in the parsing table? <br/> Note: In the options, "blank" denotes that the corresponding cell is empty.</span>`,
            image: "",
            options: [
                `<span style="display: inline;">(1) <span>\\( S \\rightarrow A a A b \\)</span> (2) <span>\\( S \\rightarrow B b B a \\)</span> (3) <span>\\( A \\rightarrow \\epsilon \\)</span> (4) <span>\\( B \\rightarrow \\epsilon \\)</span></span>`,
                `<span style="display: inline;">(1) <span>\\( S \\rightarrow B b B a \\)</span> (2) <span>\\( S \\rightarrow A a A b \\)</span> (3) <span>\\( A \\rightarrow \\epsilon \\)</span> (4) <span>\\( B \\rightarrow \\epsilon \\)</span></span>`,
                `<span style="display: inline;">(1) <span>\\( S \\rightarrow A a A b \\)</span> (2) <span>\\( S \\rightarrow B b B a \\)</span> (3) blank (4) blank</span>`,
                `<span style="display: inline;">(1) <span>\\( S \\rightarrow B b B a \\)</span> (2) <span>\\( S \\rightarrow A a A b \\)</span> (3) blank (4) blank</span>`
            ],
            answer: "A",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/422867/gate-cse-2024-set-2-question-30#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
        },
        {
            marks: 2,
            neg: 0,
            type: "NAT",
            text: `<span style="display: inline;">Let <span>\\( G=(V, \\Sigma, S, P) \\)</span> be a context-free grammar in Chomsky Normal Form with <span>\\( \\Sigma=\\{a, b, c\\} \\)</span> and <span>\\( V \\)</span> containing 10 variable symbols including the start symbol <span>\\( S \\)</span>. The string <span>\\( w=a^{30} b^{30} c^{30} \\)</span> is derivable from <span>\\( S \\)</span>. The number of steps (application of rules) in the derivation <span>\\( S \\rightarrow^* w \\)</span> is _____</span>`,
            image: "",
            options: [],
            answer: "179",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/422793/gate-cse-2024-set-1-question-49#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
        },
        {
            marks: 2,
            neg: 0.66,
            type: "MCQ",
            text: `<span style="display: inline;">Consider the context-free grammar <span>\\( G \\)</span> below<br/><span>\\( S\\rightarrow aSb \\;| \\;X \\)</span> <br/> <span>\\( X\\rightarrow aX \\;| \\;Xb \\;|\\; a\\;|\\; b \\)</span> <br/>where <span>\\( S \\)</span> and <span>\\( X \\)</span> are non-terminals, and <span>\\( a \\)</span> and <span>\\( b \\)</span> are terminal symbols. The starting non-terminal is <span>\\( S \\)</span>.<br/> Which one of the following statements is CORRECT?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">The language generated by <span>\\( G \\text{ is }(a + b)^* \\)</span></span>`,
                `<span style="display: inline;">The language generated by <span>\\( G \\text{ is } a^*(a + b)b^* \\)</span></span>`,
                `<span style="display: inline;">The language generated by <span>\\( G \\text{ is }a^*b^*(a + b) \\)</span></span>`,
                `<span style="display: inline;">The language generated by <span>\\( G \\)</span> is not a regular language</span>`
            ],
            answer: "B",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/399282/gate-cse-2023-question-29#a_list_title" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
        },
        {
            marks: 2,
            neg: 0.66,
            type: "MCQ",
            text: `<span style="display: inline;">Consider the following context-free grammar where the set of terminals is <span>\\( \\{a,b,c,d,f\\} \\)</span>.<br/><br/><span>\\( \\begin{array}{lll} S &amp; \\rightarrow &amp; d \\: a \\: T \\mid R \\: f \\\\ T &amp; \\rightarrow &amp; a \\: S \\: \\mid \\: b \\: a \\: T \\: \\mid \\epsilon \\\\ R &amp; \\rightarrow &amp; c \\: a \\: T \\: R \\: \\mid \\epsilon \\end{array} \\)</span> <br/><br/> The following is a partially-filled LL(1) parsing table.<br/><img src="images/twt-cfg-1/q31a.jpg" style="display: block; max-width: 100%; margin: 10px 0;"/><br/> Which one of the following choices represents the correct combination for the numbered cells in the parsing table ("blank" denotes that the corresponding cell is empty)?<br/><img src="images/twt-cfg-1/q31b.jpg" style="display: block; max-width: 100%; margin: 10px 0;"/><br/></span>`,
            image: "",
            options: [
                `<span style="display: inline;">A</span>`,
                `<span style="display: inline;">B</span>`,
                `<span style="display: inline;">C</span>`,
                `<span style="display: inline;">D</span>`
            ],
            answer: "A",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/357420/gate-cse-2021-set-1-question-31#a_list_title" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">The language which is generated by the grammar <span>\\( S \\rightarrow a S a\\mid b S b\\mid a\\mid b \\)</span> over the alphabet of {a,b} is the set of</span>`,
            image: "",
            options: [
                `<span style="display: inline;">Strings that begin and end with the same symbol</span>`,
                `<span style="display: inline;">All odd and even length palindromes</span>`,
                `<span style="display: inline;">All odd length palindromes</span>`,
                `<span style="display: inline;">All even length palindromes</span>`
            ],
            answer: "C",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/331445/isro2020-39" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Context free languages are closed under</span>`,
            image: "",
            options: [
                `<span style="display: inline;">union, intersection</span>`,
                `<span style="display: inline;">union, kleene closure</span>`,
                `<span style="display: inline;">intersection, complement</span>`,
                `<span style="display: inline;">complement, kleene closure</span>`
            ],
            answer: "B",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/331440/isro2020-37" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">A CFG (Context Free Grammar) is said to be in Chomsky Normal Form (CNF), if all the productions are of the form <span>\\( \\mathrm{A} \\rightarrow \\mathrm{BC} \\)</span> or <span>\\( \\mathrm{A} \\rightarrow \\mathrm{a} \\)</span>. Let G be a CFG in CNF. To derive a string of terminals of length x, the number of products to be used is:</span>`,
            image: "",
            options: [
                `<span style="display: inline;">2x-1</span>`,
                `<span style="display: inline;">2x</span>`,
                `<span style="display: inline;">2x+1</span>`,
                `<span style="display: inline;"><span>\\( 2^{x} \\)</span></span>`
            ],
            answer: "A",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/213561/isro2018-27" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">CFG (Context Free Grammar) is not closed under:</span>`,
            image: "",
            options: [
                `<span style="display: inline;">Union</span>`,
                `<span style="display: inline;">Complementation</span>`,
                `<span style="display: inline;">Kleene star</span>`,
                `<span style="display: inline;">Product</span>`
            ],
            answer: "B",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/213563/isro2018-25" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
        }
    ]
});

registerTest({
    series: "cse-gate-2027",
    name: "TWT-Theory of Computation(Context Free Grammar-II)",
    date: "sep 08, 2026",
    topicsCovered: "Eliminating Left Recursion, FOLLOW Sets, Grammar Equivalence, Ambiguity & Chomsky Hierarchy",
    questions: [
        {
            marks: 2,
            neg: 0.66,
            type: "MCQ",
            text: `<span style="display: inline;">Consider the following expression grammar G:<br>E<span>\( \rightarrow \)</span>E-T|T<br>T<span>\( \rightarrow \)</span>T+F|F<br>F<span>\( \rightarrow \)</span>(E)|id<br>Which of the following grammars is not left recursive, but is equivalent to G?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">E<span>\( \rightarrow \)</span>E-T|T<br>T<span>\( \rightarrow \)</span>T+F|F<br>F<span>\( \rightarrow \)</span>(E)|id</span>`,
                `<span style="display: inline;">E<span>\( \rightarrow \)</span>TE'<br>E'<span>\( \rightarrow \)</span>TE'|<span>\( \in \)</span><br>T<span>\( \rightarrow \)</span>T+F|F<br>F<span>\( \rightarrow \)</span>(E)|id<br></span>`,
                `<span style="display: inline;">E<span>\( \rightarrow \)</span>TX<br>X<span>\( \rightarrow \)</span>-TX|<span>\( \in \)</span><br>T<span>\( \rightarrow \)</span>FY<br>Y<span>\( \rightarrow \)</span>+FY|<span>\( \in \)</span><br>F<span>\( \rightarrow \)</span>(E)|id</span>`,
                `<span style="display: inline;">E<span>\( \rightarrow \)</span>TX|(TX)<br>X<span>\( \rightarrow \)</span> -TX|+TX|<span>\( \in \)</span><br>T <span>\( \rightarrow \)</span>id</span>`
            ],
            answer: "C",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/118374/gate2017-2-32#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Identify the language generated by the following grammar, where S is start variable.<br>S<span>\( \rightarrow \)</span> XY<br>X<span>\( \rightarrow \)</span> aX|a<br>Y <span>\( \rightarrow \)</span>aYb|<span>\( \in \)</span></span>`,
            image: "",
            options: [
                `<span style="display: inline;"><span>\( \{a^{m}b^{n}|m\geq n,n \gt 0\} \)</span></span>`,
                `<span style="display: inline;"><span>\( \{a^{m}b^{n}|m\geq n,n \geq 0\} \)</span></span>`,
                `<span style="display: inline;"><span>\( \{a^{m}b^{n}|m\gt n,n\geq 0\} \)</span></span>`,
                `<span style="display: inline;"><span>\( \{a^{m}b^{n}|m\gt n,n \gt 0\} \)</span></span>`
            ],
            answer: "C",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/118243/gate2017-2-16#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Which of the following statements about parser is/are CORRECT?<br>I. Canonical LR is more powerful than SLR.<br>II. SLR is more powerful than LALR<br>III. SLR is more powerful than Canonical LR.</span>`,
            image: "",
            options: [
                `<span style="display: inline;">I only</span>`,
                `<span style="display: inline;">II only</span>`,
                `<span style="display: inline;">III only</span>`,
                `<span style="display: inline;">II and III only</span>`
            ],
            answer: "A",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/118343/gate2017-2-6#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
        },
        {
            marks: 2,
            neg: 0.66,
            type: "MCQ",
            text: `<span style="display: inline;">If G is grammar with productions<br><span>\( S\rightarrow SaS|aSb|bSa|SS|\epsilon \)</span><br>where S is the start variable, then which one of the following is not generated by G?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">abab</span>`,
                `<span style="display: inline;">aaab</span>`,
                `<span style="display: inline;">abbaa</span>`,
                `<span style="display: inline;">babba</span>`
            ],
            answer: "D",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/118316/gate2017-1-34#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Consider the following grammar.<br><br>P<span>\( \rightarrow \)</span>xQRS<br>Q<span>\( \rightarrow \)</span>yz|z<br>R<span>\( \rightarrow \)</span>w|<span>\( \varepsilon \)</span><br>S<span>\( \rightarrow \)</span>y<br><br>What is FOLLOW (Q) ?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">{R}</span>`,
                `<span style="display: inline;">{w}</span>`,
                `<span style="display: inline;">{w, y}</span>`,
                `<span style="display: inline;">{w, $}</span>`
            ],
            answer: "C",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/118297/gate2017-1-17#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Consider the following context-free grammar over the alphabet <span>\( \sum \)</span> = {a,b,c} with S as the start symbol.<br><br>S<span>\( \rightarrow \)</span>abScT|abcT<br>T<span>\( \rightarrow \)</span>bT|b<br><br>Which one of the following represents the language generated by the above grammar ?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">{<span>\( (ab)^{n}(cb)^{n}|n\geq 1 \)</span>}</span>`,
                `<span style="display: inline;">{<span>\( (ab)^{n}cb^{m_{1}}cb^{m_{2}}...cb^{m_{n}}|n,m_{1},m_{2},...,m_{n}\geq 1 \)</span>}</span>`,
                `<span style="display: inline;"><span>\( (ab)^{n}(cb^{m})^{n}|n,m\geq 1 \)</span></span>`,
                `<span style="display: inline;"><span>\( (ab)^{n}(cb^{n})^{m}|n,m\geq 1 \)</span></span>`
            ],
            answer: "B",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/118290/gate2017-1-10#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Consider the following statements about the context free grammar<br><span>\( G=\{S \rightarrow S S, S \rightarrow a b, S \rightarrow b a, S \rightarrow \epsilon\} \)</span><br><br>I. G is ambiguous<br>II. G produces all strings with equal number of a's and b's<br>III. G can be accepted by a deterministic PDA.<br><br>Which combination below expresses all the true statements about G?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">I only</span>`,
                `<span style="display: inline;">I and III only</span>`,
                `<span style="display: inline;">II and III only</span>`,
                `<span style="display: inline;">I, II and III</span>`
            ],
            answer: "B",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/995/gate2006-32-isro2016-35" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
        },
        {
            marks: 2,
            neg: 0.66,
            type: "MCQ",
            text: `<span style="display: inline;">Which one of the following grammars is free from left recursion?</span>`,
            image: "",
            options: [
                `<span style="display: inline;"><span>\( S\rightarrow AB \)</span><br><span>\( A\rightarrow Aa|b \)</span><br><span>\( B\rightarrow c \)</span></span>`,
                `<span style="display: inline;"><span>\( S\rightarrow Ab|Bb|c \)</span><br><span>\( A\rightarrow Bb|\varepsilon \)</span><br><span>\( B\rightarrow e \)</span></span>`,
                `<span style="display: inline;"><span>\( S\rightarrow Aa|B \)</span><br><span>\( A\rightarrow Bb|Sc|\varepsilon \)</span><br><span>\( B\rightarrow d \)</span></span>`,
                `<span style="display: inline;"><span>\( S\rightarrow Aa|Bb|c \)</span><br><span>\( A\rightarrow Bd|\varepsilon \)</span><br><span>\( B\rightarrow Ae|\varepsilon \)</span></span>`
            ],
            answer: "B",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/39594/gate2016-2-45#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
        },
        {
            marks: 2,
            neg: 0.66,
            type: "MCQ",
            text: `<span style="display: inline;">Consider the following context-free grammars:<br><br>G1: S<span>\( \rightarrow \)</span>aS|B,<br>B<span>\( \rightarrow \)</span>b|bB<br>G2: S<span>\( \rightarrow \)</span>aA|bB,<br>A<span>\( \rightarrow \)</span>aA|B|<span>\( \varepsilon \)</span>,<br>B<span>\( \rightarrow \)</span>bB|<span>\( \varepsilon \)</span><br><br>Which one of the following pair of languages is generated by G1 and G2, respectively?</span>`,
            image: "",
            options: [
                `<span style="display: inline;"><span>\( \{a^{m}b^{n}|m \gt 0 \; or \; n \gt 0\} \)</span> and <span>\( \{a^{m}b^{n}|m\gt 0 \; and \; n\gt 0\} \)</span></span>`,
                `<span style="display: inline;"><span>\( \{a^{m}b^{n}|m\gt 0 \; or \; n\gt 0\} \)</span> and <span>\( \{a^{m}b^{n}|m\gt 0 \; and \; n \geq 0\} \)</span></span>`,
                `<span style="display: inline;"><span>\( \{a^{m}b^{n}|m\geq 0 \; or \; n\gt 0\} \)</span> and <span>\( \{a^{m}b^{n}|m\gt 0 \; and \; n\gt 0\} \)</span></span>`,
                `<span style="display: inline;"><span>\( \{a^{m}b^{n}|m\geq 0 \; and \; n\gt 0\} \)</span> and <span>\( \{a^{m}b^{n}|m\gt 0 \; or \; n\gt 0\} \)</span></span>`
            ],
            answer: "D",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/39705/gate2016-1-42#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Which of the following languages is generated by the given grammar?<br><span>\( S\rightarrow aS|bS|\varepsilon \)</span></span>`,
            image: "",
            options: [
                `<span style="display: inline;"><span>\( \{a^{n}b^{m}|n,m\geq 0 \} \)</span></span>`,
                `<span style="display: inline;">{<span>\( \{w\in \{a,b\}^*| w \)</span> has equal number of a's and b's}</span>`,
                `<span style="display: inline;"><span>\( \{a^{n}|n\geq 0\}\cup \{b^{n}|n\geq 0\}\cup \{a^{n}b^{n}\geq 0\} \)</span></span>`,
                `<span style="display: inline;">{a,b}*</span>`
            ],
            answer: "D",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/39640/gate2016-1-16#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
        },
        {
            marks: 2,
            neg: 0.66,
            type: "MCQ",
            text: `<span style="display: inline;">A CFG G is given with the following productions where S is the start symbol, A is a non-terminal and a and b are terminals.<br><br><span>\( \begin{array}{l} S \rightarrow a S \mid A \\ A \rightarrow a A b|b A a| \epsilon \end{array} \)</span><br><br>For the string "aabbaab" how many steps are required to derive the string and how many parse trees are there?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">6 and 1</span>`,
                `<span style="display: inline;">6 and 2</span>`,
                `<span style="display: inline;">7 and 2</span>`,
                `<span style="display: inline;">4 and 2</span>`
            ],
            answer: "A",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/3393/gate2008-it-79" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
        },
        {
            marks: 2,
            neg: 0.66,
            type: "MCQ",
            text: `<span style="display: inline;">A CFG G is given with the following productions where S is the start symbol, A is a non-terminal and a and b are terminals.<br><br><span>\( \begin{array}{l} S \rightarrow a S \mid A \\ A \rightarrow a A b|b A a| \epsilon \end{array} \)</span><br><br>Which of the following strings is generated by the grammar above?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">aabbaba</span>`,
                `<span style="display: inline;">aabaaba</span>`,
                `<span style="display: inline;">abababb</span>`,
                `<span style="display: inline;">aabbaab</span>`
            ],
            answer: "D",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/3392/gate2008-it-78" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
        },
        {
            marks: 2,
            neg: 0.66,
            type: "MCQ",
            text: `<span style="display: inline;">Consider a CFG with the following productions.<br><br><span>\( S \to AA \mid B \)</span><br><span>\( A \to 0A \mid A0 \mid 1 \)</span><br><span>\( B \to 0B00 \mid 1 \)</span><br><br>S is the start symbol, A and B are non-terminals and 0 and 1 are the terminals. The language generated by this grammar is:</span>`,
            image: "",
            options: [
                `<span style="display: inline;"><span>\( \left\{0^n 10^{2n} \mid n \geq 1\right\} \)</span></span>`,
                `<span style="display: inline;"><span>\( \left\{0^i 10^j 10^k \mid i, j, k \geq 0\right\} \cup \left\{0^n 10^{2n}\mid n \geq 0\right\} \)</span></span>`,
                `<span style="display: inline;"><span>\( \left\{0^i 10^j \mid i, j \geq 0\right\} \cup \left\{0^n 10^{2n}\mid n \geq 0\right\} \)</span></span>`,
                `<span style="display: inline;">The set of all strings over <span>\( \{0, 1\} \)</span> containing at least two 0's</span>`
            ],
            answer: "B",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/3344/gate2008-it-34" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
        },
        {
            marks: 2,
            neg: 0.66,
            type: "MCQ",
            text: `<span style="display: inline;">Which of the following statements are true?<br><br>I. Every left-recursive grammar can be converted to a right-recursive grammar and vice-versa<br><br>II. All <span>\( \varepsilon \)</span>-productions can be removed from any context-free grammar by suitable transformations<br><br>III. The language generated by a context-free grammar all of whose productions are of the form x <span>\( \rightarrow \)</span> w or x <span>\( \rightarrow \)</span> wY (where, w is a string of terminals and Y is a non-terminal), is always regular<br><br>IV. The derivation trees of strings generated by a context-free grammar in Chomsky Normal Form are always binary trees</span>`,
            image: "",
            options: [
                `<span style="display: inline;">I, II, III and IV</span>`,
                `<span style="display: inline;">II, III and IV only</span>`,
                `<span style="display: inline;">I, III and IV only</span>`,
                `<span style="display: inline;">I, II and IV only</span>`
            ],
            answer: "C",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/395/gate2008-50#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">In the context-free grammar below, S is the start symbol, a and b are terminals, and <span>\( \epsilon \)</span> denotes the empty string.<br><span>\( S \to aSAb \mid \epsilon \)</span><br><span>\( A \to bA \mid \epsilon \)</span><br>The grammar generates the language</span>`,
            image: "",
            options: [
                `<span style="display: inline;"><span>\( ((a + b)^* b) \)</span></span>`,
                `<span style="display: inline;"><span>\( \{a^mb^n \mid m \leq n\} \)</span></span>`,
                `<span style="display: inline;"><span>\( \{a^mb^n \mid m = n) \)</span></span>`,
                `<span style="display: inline;"><span>\( a^* b^* \)</span></span>`
            ],
            answer: "B",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/3573/gate2006-it-34" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
        }
    ]
});

registerTest({
    series: "cse-gate-2027",
    name: "TWT-Theory of Computation(Context Free Grammar-III)",
    date: "sep 08, 2026",
    topicsCovered: "Operator Grammars, Decidable Problems for FSM & CFG, Inherent Ambiguity, PDA vs DPDA",
    questions: [
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">In the context-free grammar below, S is the start symbol, a and b are terminals, and<span>\( \epsilon \)</span> denotes the empty string <br> <span>\( S \rightarrow aSa \mid bSb \mid a \mid b \mid \epsilon \)</span><br> Which of the following strings is NOT generated by the grammar?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">aaaa</span>`,
                `<span style="display: inline;">baba</span>`,
                `<span style="display: inline;">abba</span>`,
                `<span style="display: inline;">babaaabab</span>`
            ],
            answer: "B",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/3543/gate2006-it-4" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Consider the following statements about the context-free grammer <br> <span>\( G=\{S\rightarrow SS, S\rightarrow ab, S\rightarrow ba, S\rightarrow \varepsilon \} \)</span> <br> 1. G is ambiguous <br> 2. G produces all strings with equal number of a's and b's <br> 3. G can be accepted by a deterministic PDA. <br> Which combination below expresses all the true statements about G?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">I Only</span>`,
                `<span style="display: inline;">I and III only</span>`,
                `<span style="display: inline;">II and III only</span>`,
                `<span style="display: inline;">I,II and III</span>`
            ],
            answer: "B",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/995/gate2006-32#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Which one of the following statements is FALSE?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">There exist context-free languages such that all the context-free grammars generating them are ambiguous</span>`,
                `<span style="display: inline;">An unambiguous context-free grammar always has a unique parse tree for each string of the language generated by it</span>`,
                `<span style="display: inline;">Both deterministic and non-deterministic pushdown automata always accept the same set of languages</span>`,
                `<span style="display: inline;">A finite set of string from some alphabet is always a regular language</span>`
            ],
            answer: "C",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/3650/gate2004-it-9" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Which of the following grammar rules violate the requirements of an operator grammar? P, Q, R are nonterminals, and r,s,t are terminals. <br> <span>\( (i)P\rightarrow QR \)</span> <br> <span>\( (ii)P\rightarrow QsR \)</span> <br> <span>\( (iii)P\rightarrow \varepsilon \)</span> <br> <span>\( (iv)P\rightarrow QtRr \)</span></span>`,
            image: "",
            options: [
                `<span style="display: inline;">(i) only</span>`,
                `<span style="display: inline;">(i) and (iii) only</span>`,
                `<span style="display: inline;">(ii) and (iii) only</span>`,
                `<span style="display: inline;">(iii) and (iv) only</span>`
            ],
            answer: "B",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/1005/gate2004-8#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Consider the grammar shown below. <br> S <span>\( \rightarrow \)</span> C C <br> C <span>\( \rightarrow \)</span> cC | d <br> The grammar is</span>`,
            image: "",
            options: [
                `<span style="display: inline;">LL(1)</span>`,
                `<span style="display: inline;">LALR (1) but not SLR (1)</span>`,
                `<span style="display: inline;">SLR (1) but not LL (1)</span>`,
                `<span style="display: inline;">LR (1) but not LALR (1)</span>`
            ],
            answer: "A",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/945/gate2003-57#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Let G = ({S}, {a, b} R, S) be a context free grammar where the rule set R is <span>\( S\rightarrow aSb|SS|\epsilon \)</span><br> Which of the following statements is true?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">G is not ambiguous</span>`,
                `<span style="display: inline;">There exist x, y, <span>\( \in \)</span> L (G) such that xy <span>\( \notin \)</span> L(G)</span>`,
                `<span style="display: inline;">There is a deterministic pushdown automaton that accepts L(G)</span>`,
                `<span style="display: inline;">We can find a deterministic finite state automaton that accepts L(G)</span>`
            ],
            answer: "C",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/940/gate2003-51#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Which of the following suffices to convert an arbitrary CFG to an LL(1) grammar?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">Removing left recursion alone</span>`,
                `<span style="display: inline;">Factoring the grammar alone</span>`,
                `<span style="display: inline;">Removing left recursion and factoring the grammar</span>`,
                `<span style="display: inline;">None of this</span>`
            ],
            answer: "D",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/906/gate2003-16#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Consider the following decision problems: <br><br> (P1): Does a given finite state machine accept a given string?<br> (P2): Does a given context free grammar generate an infinite number of strings?<br><br> Which of the following statements is true?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">Both(P1) and (P2) are decidable</span>`,
                `<span style="display: inline;">Neither (P1) nor (P2) is decidable</span>`,
                `<span style="display: inline;">Only (P1) is decidable</span>`,
                `<span style="display: inline;">Only (P2) is decidable</span>`
            ],
            answer: "A",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/656/gate2000-2-9" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Consider a grammar with the following productions<br> <span>\( S \rightarrow a \alpha b \mid b \alpha c \mid aB \)</span><br> <span>\( S \rightarrow \alpha S\mid b \)</span><br> <span>\( S \rightarrow \alpha b b\mid ab \)</span><br> <span>\( S \alpha \rightarrow bd b\mid b \)</span><br> The above grammar is:</span>`,
            image: "",
            options: [
                `<span style="display: inline;">Context free</span>`,
                `<span style="display: inline;">Regular</span>`,
                `<span style="display: inline;">Context sensitive</span>`,
                `<span style="display: inline;">LR(k)</span>`
            ],
            answer: "D",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/2597/gate1995-1-10" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Which of the following features cannot be captured by context-free grammars?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">Syntax of if-then-else statements</span>`,
                `<span style="display: inline;">Syntax of recursive procedures</span>`,
                `<span style="display: inline;">Whether a variable has been declared before its use</span>`,
                `<span style="display: inline;">Variable names of arbitrary length</span>`
            ],
            answer: "C",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/2461/gate1994-1-18" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">What is the highest type number that can be assigned to the following grammar?<br><span>\( S \rightarrow A a, A \rightarrow B a, B \rightarrow a b c \)</span></span>`,
            image: "",
            options: [
                `<span style="display: inline;">Type 0</span>`,
                `<span style="display: inline;">Type 1</span>`,
                `<span style="display: inline;">Type 2</span>`,
                `<span style="display: inline;">Type 3</span>`
            ],
            answer: "D",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/55683/isro2016-38" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
        },
        {
            marks: 2,
            neg: 0.66,
            type: "MCQ",
            text: `<span style="display: inline;">Consider the alphabet <span>\( \Sigma \)</span>={0, 1}, the null/empty string <span>\( \lambda \)</span> and the sets of strings <span>\( X_{0}, X_{1}, \; and \; X_{2} \)</span> generated by the corresponding non-terminals of a regular grammar. <span>\( X_{0}, X_{1}, \; and \; X_{2} \)</span> are related as follows. <br> <span>\( X_{0}=1X_{1} \)</span> <br> <span>\( X_{1},=0X_{1}+1 X_{2} \)</span> <br> <span>\( X_{2}=0X_{1}+ \{\lambda\} \)</span><br> Which one of the following choices precisely represents the strings in <span>\( X_{0} \)</span>?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">10(0* + (10)*)1</span>`,
                `<span style="display: inline;">10(0* + (10)*)*1</span>`,
                `<span style="display: inline;">1(0 + 10)*1</span>`,
                `<span style="display: inline;">10(0 + 10)*1 + 110(0 + 10)*1</span>`
            ],
            answer: "C",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/8159/gate2015-2-50#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Consider the following two statements: <br><br> P: Every regular grammar is LL(1) <br> Q: Every regular set has a LR(1) grammar <br><br> Which of the following is TRUE?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">Both P and Q are true</span>`,
                `<span style="display: inline;">P is true and Q is false</span>`,
                `<span style="display: inline;">P is false and Q is true</span>`,
                `<span style="display: inline;">Both P and Q are false</span>`
            ],
            answer: "C",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/1251/gate2007-53#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Consider the regular grammar below <br> <span>\( S \rightarrow bS \mid aA \mid \epsilon \)</span><br> <span>\( A \rightarrow aS \mid bA \)</span><br> The Myhill-Nerode equivalence classes for the language generated by the grammar are</span>`,
            image: "",
            options: [
                `<span style="display: inline;"><span>\( \{w \in (a + b)^* \mid \#a(w) \text{ is even) and} \{w \in (a + b)^* \mid \#a(w) \text{ is odd}\} \)</span></span>`,
                `<span style="display: inline;"><span>\( \{w \in (a + b)^* \mid \#a(w) \text{ is even) and} \{w \in (a + b)^* \mid \#b(w) \text{ is odd}\} \)</span></span>`,
                `<span style="display: inline;"><span>\( \{w \in (a + b)^* \mid \#a(w) = \#b(w) \text{and }\{w \in (a + b)^* \mid \#a(w) \neq \#b(w)\} \)</span></span>`,
                `<span style="display: inline;"><span>\( \{\epsilon\},\{wa \mid w \in (a + b)^* \text{and} \{wb \mid w \in (a + b)^*\} \)</span></span>`
            ],
            answer: "A",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/3568/gate2006-it-29" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Consider the following grammar G: <br><img src="images/twt_toc6/q88.jpg"/><br> Let Na(w) and Nb(w) denote the number of a's and b's in a string w respectively. <br>The language <span>\( L(G)\subseteq \{a,b\}^{+} \)</span> generated by G is</span>`,
            image: "",
            options: [
                `<span style="display: inline;">{ w | Na(w) <span>\( \gt \)</span> 3Nb(w)}</span>`,
                `<span style="display: inline;">{ w | Nb(w) <span>\( \gt \)</span> 3Na(w)}</span>`,
                `<span style="display: inline;">{ w | Na(w) = 3k, k <span>\( \in \)</span> {0, 1, 2, ...}}</span>`,
                `<span style="display: inline;">{ w | Nb(w) = 3k, k <span>\( \in \)</span> {0, 1, 2, ...}}</span>`
            ],
            answer: "C",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/1082/gate2004-88#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
        }
    ]
});

registerTest({
    series: "cse-gate-2027",
    name: "TWT-Theory of Computation(Context Free Language-I)",
    date: "sep 08, 2026",
    topicsCovered: "CFL & DCFL Identification, Closure Properties, Decidability of CFLs, Intersection with Regular Languages",
    questions: [
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Let <span>\( G_1, G_2 \)</span> be Context-Free Grammars (CFGs) and <span>\( R \)</span> be a regular expression. For a grammar <span>\( G \)</span>, let <span>\( L(G) \)</span> denote the language generated by <span>\( G \)</span>. <br> Which ONE among the following questions is decidable?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">Is <span>\( L(G_1) = L(G_2) \)</span>?</span>`,
                `<span style="display: inline;">Is <span>\( L(G_1) \cap L(G_2) = \emptyset \)</span>?</span>`,
                `<span style="display: inline;">Is <span>\( L(G_1) = L(R) \)</span>?</span>`,
                `<span style="display: inline;">Is <span>\( L(G_1) = \emptyset \)</span>?</span>`
            ],
            answer: "D",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/460820/gate-cse-2025-set-2-question-15#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
        },
        {
            marks: 2,
            neg: 0.66,
            type: "MCQ",
            text: `<span style="display: inline;">Consider the following two languages over the alphabet <span>\( \{a, b, c\} \)</span>, where <span>\( m \)</span> and <span>\( n \)</span> are natural numbers: <br><br> <span>\( L_1 = \{ a^m b^m c^{m+n} \mid m, n \geq 1 \} \)</span><br> <span>\( L_2 = \{ a^m b^n c^{m+n} \mid m, n \geq 1 \} \)</span> <br><br> Which ONE of the following statements is CORRECT?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">Both <span>\( L_1 \)</span> and <span>\( L_2 \)</span> are context-free languages.</span>`,
                `<span style="display: inline;"><span>\( L_1 \)</span> is a context-free language but <span>\( L_2 \)</span> is not a context-free language.</span>`,
                `<span style="display: inline;"><span>\( L_1 \)</span> is not a context-free language but <span>\( L_2 \)</span> is a context-free language.</span>`,
                `<span style="display: inline;">Neither <span>\( L_1 \)</span> nor <span>\( L_2 \)</span> are context-free languages.</span>`
            ],
            answer: "C",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/460045/gate-cse-2025-set-1-question-35#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Consider the following context-free grammar <span>\( G \)</span>, where <span>\( S \)</span>, <span>\( A \)</span>, and <span>\( B \)</span> are the variables (non-terminals), <span>\( a \)</span> and <span>\( b \)</span> are the terminal symbols, <span>\( S \)</span> is the start variable, and the rules of <span>\( G \)</span> are described as: <br><br> <span>\( S \to aaB \mid Abb \)</span><br> <span>\( A \to a \mid aA \)</span><br> <span>\( B \to b \mid bB \)</span> <br><br> Which ONE of the languages <span>\( L(G) \)</span> is accepted by <span>\( G \)</span>?</span>`,
            image: "",
            options: [
                `<span style="display: inline;"><span>\( L(G) = \{ a^2b^n \mid n \geq 1 \} \cup \{ a^n b^2 \mid n \geq 1 \} \)</span></span>`,
                `<span style="display: inline;"><span>\( L(G) = \{ a^n b^{2n} \mid n \geq 1 \} \cup \{ a^{2n} b^n \mid n \geq 1 \} \)</span></span>`,
                `<span style="display: inline;"><span>\( L(G) = \{ a^n b^n \mid n \geq 1 \} \)</span></span>`,
                `<span style="display: inline;"><span>\( L(G) = \{ a^{2n} b^{2n} \mid n \geq 1 \} \)</span></span>`
            ],
            answer: "A",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/460071/gate-cse-2025-set-1-question-9#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
        },
        {
            marks: 1,
            neg: 0,
            type: "MSQ",
            text: `<span style="display: inline;">Which of the following statements is/are CORRECT?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">The intersection of two regular languages is regular.</span>`,
                `<span style="display: inline;">The intersection of two context-free languages is context-free.</span>`,
                `<span style="display: inline;">The intersection of two recursive languages is recursive.</span>`,
                `<span style="display: inline;">The intersection of two recursively enumerable languages is recursively enumerable.</span>`
            ],
            answer: ["A", "C", "D"],
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/399298/gate-cse-2023-question-14#a_list_title" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
        },
        {
            marks: 2,
            neg: 0,
            type: "MSQ",
            text: `<span style="display: inline;">Consider the following languages:<br><br> <span>\( \begin{aligned} L_1&= \{ ww|w \in \{a,b\}^* \} \\ L_2&= \{a^nb^nc^m | m,n \geq 0 \} \\ L_3 &= \{a^mb^nc^n|m,n \geq 0 \} \end{aligned} \)</span><br><br>Which of the following statements is/are FALSE?</span>`,
            image: "",
            options: [
                `<span style="display: inline;"><span>\( L_1 \)</span> is not context-free but <span>\( L_2 \)</span> and <span>\( L_3 \)</span> are deterministic context-free.</span>`,
                `<span style="display: inline;">Neither <span>\( L_1 \)</span> nor <span>\( L_2 \)</span> is context-free.</span>`,
                `<span style="display: inline;"><span>\( L_2,L_3 \)</span> and <span>\( L_2 \cap L_3 \)</span> all are context-free.</span>`,
                `<span style="display: inline;">Neither <span>\( L_1 \)</span> nor its complement is context-free.</span>`
            ],
            answer: ["B", "C", "D"],
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/371898/Gate-cse-2022-question-38#a_list_title" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a></div>`
        },
        {
            marks: 2,
            neg: 0,
            type: "MSQ",
            text: `<span style="display: inline;">Consider the following languages:<br><br><span>\( \begin{aligned} L_1&= \{a^n wa^n|w  \in  \{a,b \}^* \}   \\   L_2&= \{wxw^R | w,x  \in   \{a,b \}^*, |w|,|x|  \gt 0  \}   \end{aligned} \)</span><br><br>Note that <span>\( w^R \)</span> is the reversal of the string <span>\( w \)</span>. Which of the following is/are TRUE?</span>`,
            image: "",
            options: [
                `<span style="display: inline;"><span>\( L_1 \)</span> and <span>\( L_2 \)</span> are regular.</span>`,
                `<span style="display: inline;"><span>\( L_1 \)</span> and <span>\( L_2 \)</span>  are context-free.</span>`,
                `<span style="display: inline;"><span>\( L_1 \)</span> is regular and <span>\( L_2 \)</span> is context-free.</span>`,
                `<span style="display: inline;"><span>\( L_1 \)</span> and <span>\( L_2 \)</span>  are context-free but not regular.</span>`
            ],
            answer: ["A", "B", "C"],
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/371899/Gate-cse-2022-question-37#a_list_title"  target="_blank" >Click here for detail solution by gateoverflow</a></div>`
        },
        {
            marks: 2,
            neg: 0,
            type: "MSQ",
            text: `<span style="display: inline;">For a string <span>\( w \)</span>, we define <span>\( w^R \)</span> to be the reverse of <span>\( w \)</span>. For example, if <span>\( w=01101 \)</span> then <span>\( w^R=10110 \)</span>. <br> Which of the following languages is/are context-free?</span>`,
            image: "",
            options: [
                `<span style="display: inline;"><span>\( \{ wxw^Rx^R \mid w,x \in \{0,1\} ^* \} \)</span></span>`,
                `<span style="display: inline;"><span>\( \{ ww^Rxx^R \mid w,x \in \{0,1\} ^* \} \)</span></span>`,
                `<span style="display: inline;"><span>\( \{ wxw^R \mid w,x \in \{0,1\} ^* \} \)</span></span>`,
                `<span style="display: inline;"><span>\( \{ wxx^Rw^R \mid w,x \in \{0,1\} ^* \} \)</span></span>`
            ],
            answer: ["B", "C", "D"],
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/357499/gate-cse-2021-set-2-question-41#a_list_title" target=_blank">Click here for detail solution by gateoverflow</a></div>`
        },
        {
            marks: 1,
            neg: 0,
            type: "MSQ",
            text: `<span style="display: inline;">Let <span>\( L_1 \)</span> be a regular language and <span>\( L_2 \)</span> be a context-free language. Which of the following languages is/are context-free?</span>`,
            image: "",
            options: [
                `<span style="display: inline;"><span>\( L_1 \cap \overline{L_2} \)</span></span>`,
                `<span style="display: inline;"><span>\( \overline{\overline{L_1} \cup \overline{L_2}} \)</span></span>`,
                `<span style="display: inline;"><span>\( L_1 \cup (L_2 \cup \overline{L_2}) \)</span></span>`,
                `<span style="display: inline;"><span>\( (L_1 \cap L_2) \cup (\overline{L_1} \cap L_2) \)</span></span>`
            ],
            answer: ["B", "C", "D"],
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/357528/gate-cse-2021-set-2-question-12#a_list_title" target=_blank">Click here for detail solution by gateoverflow</a></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Suppose that <span>\( L_1 \)</span> is a regular language and <span>\( L_2 \)</span> is a context-free language. Which one of the following languages is NOT necessarily context-free?</span>`,
            image: "",
            options: [
                `<span style="display: inline;"><span>\( L_1\cap L_2 \)</span></span>`,
                `<span style="display: inline;"><span>\( L_1\cdot L_2 \)</span></span>`,
                `<span style="display: inline;"><span>\( L_1 - L_2 \)</span></span>`,
                `<span style="display: inline;"><span>\( L_1\cup L_2 \)</span></span>`
            ],
            answer: "C",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/357451/gate-cse-2021-set-1-question-1#a_list_title" target=_blank">Click here for detail solution by gateoverflow</a></div>`
        },
        {
            marks: 2,
            neg: 0.66,
            type: "MCQ",
            text: `<span style="display: inline;">Consider the following languages. <br><span>\( L_1=\{wxyx|w,x,y \in (0+1)^+\} \)</span> <br><span>\( L_2=\{xy|x,y \in (a+b)^*,|x|=|y|,x\neq y\} \)</span> <br> <br>Which one of the following is TRUE?</span>`,
            image: "",
            options: [
                `<span style="display: inline;"><span>\( L_1 \)</span> is regular and <span>\( L_2 \)</span> is context- free.</span>`,
                `<span style="display: inline;"><span>\( L_1 \)</span> context- free but not regular and <span>\( L_2 \)</span> is context-free.</span>`,
                `<span style="display: inline;">Neither <span>\( L_1 \)</span> nor <span>\( L_2 \)</span> is context- free.</span>`,
                `<span style="display: inline;"><span>\( L_1 \)</span> context- free but  <span>\( L_2 \)</span> is not context-free.</span>`
            ],
            answer: "A",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/333199/gate2020-cs-32#a_list" target="_blank">Click here for detail solution by gateoverflow</a></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Consider the language <span>\( L=\{a^n|n\geq 0\}\cup \{a^nb^n|n\geq 0\} \)</span> and the following statements. <br><br> I. L is deterministic context-free.<br> II. L is context-free but not deterministic context-free.<br> III. L is not LL(k) for any k.<br><br> Which of the above statements is/are TRUE?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">I only</span>`,
                `<span style="display: inline;">II only</span>`,
                `<span style="display: inline;">I and III only</span>`,
                `<span style="display: inline;">III only</span>`
            ],
            answer: "C",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/333221/gate2020-cs-10#a_list" target="_blank">Click here for detail solution by gateoverflow</a></div>`
        },
        {
            marks: 2,
            neg: 0.66,
            type: "MCQ",
            text: `<span style="display: inline;">Which one of the following languages over <span>\( \Sigma =\{a,b\} \)</span> is NOT context-free?</span>`,
            image: "",
            options: [
                `<span>\( \{ww^R|w \in \{a,b\}^*\} \)</span>`,
                `<span>\( \{wa^nb^nw^R|w \in \{a,b\}^*,n\geq 0\} \)</span>`,
                `<span>\( \{wa^nw^Rb^n|w \in \{a,b\}^*,n\geq 0\} \)</span>`,
                `<span>\( \{a^nb^i|i \in \{n,3n,5n\},n\geq 0\} \)</span>`
            ],
            answer: "C",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/302817/gate2019-cs-31#a_list" target="_blank">Click here for detail solution by gateoverflow</a></div>`
        },
        {
            marks: 2,
            neg: 0.66,
            type: "MCQ",
            text: `<span style="display: inline;">Consider the following languages: <br><br>I. <span>\( \{a^{m}b^{n}c^{p}d^{q}|m+p=n+q, \; where \;  m,n,p,q \geq 0 \} \)</span>    <br>  II. <span>\( \{a^{m}b^{n}c^{p}d^{q}|m=n \; and \; p=q, \; where \;  m,n,p,q\geq 0 \} \)</span> <br> III. <span>\( \{a^{m}b^{n}c^{p}d^{q}|m=n=p \; and \; p\neq q, \; where \; m,n,p,q\geq 0 \} \)</span> <br>  IV. <span>\( \{a^{m}b^{n}c^{p}d^{q}|mn=p+q, \; where\;  m,n,p,q\geq 0\} \)</span> <br><br>Which of the languages above are context-free?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">I and IV only</span>`,
                `<span style="display: inline;">I and II only</span>`,
                `<span style="display: inline;">II and III only</span>`,
                `<span style="display: inline;">II and IV only</span>`
            ],
            answer: "B",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/204109/gate2018-35#a_list" target="_blank">Click here for detail solution by gateoverflow</a></div>`
        },
        {
            marks: 2,
            neg: 0.66,
            type: "MCQ",
            text: `<span style="display: inline;">Consider the following languages<br><br> <span>\( L_{1}=\{a^{p}|p \)</span> is a prime number} <br><span>\( L_{2}=\{a^{n}b^{m}c^{2m}|n\geq 0,m\geq 0\} \)</span><br> <span>\( L_{3}=\{a^{n}b^{n}c^{2n}|n\geq 0\} \)</span><br><span>\( L_{4}=\{a^{n}b^{n}|n\geq 1\} \)</span><br><br> Which of the following are CORRECT ?<br><br> I.<span>\( L_{1} \)</span> is context-free but not regular. <br> II. <span>\( L_{2} \)</span> is not context-free. <br> III. <span>\( L_{3} \)</span> is not context-free but recursive. <br> IV. <span>\( L_{4} \)</span> is deterministic context-free.</span>`,
            image: "",
            options: [
                `<span style="display: inline;">I ,II and IV only</span>`,
                `<span style="display: inline;">II and III only</span>`,
                `<span style="display: inline;">I and IV only</span>`,
                `<span style="display: inline;">III and IV only</span>`
            ],
            answer: "D",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/118615/gate2017-2-40#a_list" target="_blank">Click here for detail solution by gateoverflow</a></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Let <span>\( L_{1},L_{2} \)</span> be any two context free languages and R be any regular language. Then which of the following is/are CORRECT ?<br> I. <span>\( L_{1}\cup L_{2} \)</span> is context - free <br>II. <span>\( \bar{L_{1}} \)</span>  is context - free <br>III. <span>\( L_{1} - R \)</span> is context - free <br> IV. <span>\( L_{1}\cap L_{2} \)</span> is context - free</span>`,
            image: "",
            options: [
                `<span style="display: inline;">I, II and IV only</span>`,
                `<span style="display: inline;">I and III only</span>`,
                `<span style="display: inline;">II and IV only</span>`,
                `<span style="display: inline;">I only</span>`
            ],
            answer: "B",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/118143/gate2017-2-4#a_list" target="_blank">Click here for detail solution by gateoverflow</a></div>`
        }
    ]
});
