// ==========================================
// GATE PYQ: Propositional Logic
// ==========================================

registerTest({
    series: "cse-gate-2027",
    name: "TWT-Discrete Mathematics(Propositional Logic-I)",
    isFree: true,
    date: "sep 26, 2026",
    topicsCovered: "Propositional Logic, Predicate Logic, Inference Rules, Quantifiers",
    questions: [
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">For two different persons <span>\\( x \\)</span> and <span>\\( y \\)</span>, the predicate <span>\\( M(x, y) \\)</span> denotes that <span>\\( x \\)</span> knows <span>\\( y \\)</span>. <br/>Consider the following statement.<br/><br/><i>There is a person who does not know anyone else, but that person is known by everyone else.</i> <br/><br/>Which one of the following expressions represents the above statement?</span>`,
            image: "",
            options: [
                `<span style="display: inline;"><span>\\( (\\exists y)(\\forall x)((x \\neq y) \\rightarrow(M(x, y) \\wedge \\neg M(y, x))) \\)</span></span>`,
                `<span style="display: inline;"><span>\\( (\\forall y)(\\exists x)((x \\neq y) \\rightarrow(M(x, y) \\wedge \\neg M(y, x))) \\)</span></span>`,
                `<span style="display: inline;"><span>\\( (\\exists y)(\\exists x)((x \\neq y) \\rightarrow(M(x, y) \\wedge \\neg M(y, x))) \\)</span></span>`,
                `<span style="display: inline;"><span>\\( (\\forall y)(\\forall x)((x \\neq y) \\rightarrow(M(x, y) \\wedge \\neg M(y, x))) \\)</span></span>`
            ],
            answer: "A",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/523146/gate-cse-2026-set-2-question-1#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><b><a ;="" href="https://practicepaper.in/gate-cse/gate-cse-2026-set-2" none'="" style="color:#2f6d1a; text-decoration:none" target="_blank" text-decoration:="">GATE CSE 2026 SET-2</a></b> <b><a href="https://practicepaper.in/gate-cse/discrete-mathematics" style="color:#2f6d1a; text-decoration:none" target="_blank" text-decoration:="">Discrete Mathematics</a></b></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Let <span>\\( P(x) \\)</span> be an arbitrary predicate over the domain of natural numbers. Which ONE of the following statements is TRUE?</span>`,
            image: "",
            options: [
                `<span style="display: inline;"><span>\\( (P(0) \\land (\\forall x [P(x) \\Rightarrow P(x+1)])) \\Rightarrow (\\forall x P(x)) \\)</span></span>`,
                `<span style="display: inline;"><span>\\( (P(0) \\land (\\forall x [P(x) \\Rightarrow P(x-1)])) \\Rightarrow (\\forall x P(x)) \\)</span></span>`,
                `<span style="display: inline;"><span>\\( (P(1000) \\land (\\forall x [P(x) \\Rightarrow P(x-1)])) \\Rightarrow (\\forall x P(x)) \\)</span></span>`,
                `<span style="display: inline;"><span>\\( (P(1000) \\land (\\forall x [P(x) \\Rightarrow P(x+1)])) \\Rightarrow (\\forall x P(x)) \\)</span></span>`
            ],
            answer: "A",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/460830/gate-cse-2025-set-2-question-5#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><b><a href="https://practicepaper.in/gate-cse/gate-cse-2025-set-2" style="color:#2f6d1a; text-decoration:none" target="_blank" text-decoration:="">GATE CSE 2025 SET-2</a></b> <b><a href="https://practicepaper.in/gate-cse/discrete-mathematics" style="color:#2f6d1a; text-decoration:none" target="_blank" text-decoration:="">Discrete Mathematics</a></b></div></div>`
        },
        {
            marks: 2,
            neg: 0,
            type: "MSQ",
            text: `<span style="display: inline;">Which of the following predicate logic formulae/formula is/are CORRECT representation(s) of the statement: "Everyone has exactly one mother"? <br/><br/>The meanings of the predicates used are: <br/> <span>\\( mother(y,x): y \\)</span> is the mother of <span>\\( x \\)</span> <br/><span>\\( noteq(x,y): x \\)</span> and <span>\\( y \\)</span> are not equal</span>`,
            image: "",
            options: [
                `<span style="display: inline;"><span>\\( \\forall x \\exists y \\exists z (mother(y, x) \\land \\neg mother(z, x)) \\)</span></span>`,
                `<span style="display: inline;"><span>\\( \\forall x \\exists y [mother(y, x) \\land \\forall z (noteq(z, y) \\to \\neg mother(z, x))] \\)</span></span>`,
                `<span style="display: inline;"><span>\\( \\forall x \\forall y [mother(y, x) \\to \\exists z (mother(z, x) \\land \\neg noteq(z, y))] \\)</span></span>`,
                `<span style="display: inline;"><span>\\( \\forall x \\exists y [mother(y, x) \\land \\neg \\exists z (noteq(z, y) \\land mother(z, x))] \\)</span></span>`
            ],
            answer: ["B", "D"],
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/460042/gate-cse-2025-set-1-question-38#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><b><a href="https://practicepaper.in/gate-cse/gate-cse-2025-set-1" style="color:#2f6d1a; text-decoration:none" target="_blank" text-decoration:="">GATE CSE 2025 SET-1</a></b> <b><a href="https://practicepaper.in/gate-cse/discrete-mathematics" style="color:#2f6d1a; text-decoration:none" target="_blank" text-decoration:="">Discrete Mathematics</a></b></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Let <span>\\( p \\)</span> and <span>\\( q \\)</span> be the following propositions:<br/><br/> <span>\\( p \\)</span> : Fail grade can be given.<br/> <span>\\( q \\)</span> : Student scores more than <span>\\( 50 \\% \\)</span> marks. <br/><br/> Consider the statement: "Fail grade cannot be given when student scores more than <span>\\( 50 \\% \\)</span> marks." <br/> Which one of the following is the CORRECT representation of the above statement in propositional logic?</span>`,
            image: "",
            options: [
                `<span style="display: inline;"><span>\\( q \\rightarrow \\neg p \\)</span></span>`,
                `<span style="display: inline;"><span>\\( q \\rightarrow p \\)</span></span>`,
                `<span style="display: inline;"><span>\\( p \\rightarrow q \\)</span></span>`,
                `<span style="display: inline;"><span>\\( \\neg p \\rightarrow q \\)</span></span>`
            ],
            answer: "A",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/422895/gate-cse-2024-set-2-question-2#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><b><a href="https://practicepaper.in/gate-cse/gate-cse-2024-set-2" style="color:#2f6d1a; text-decoration:none" target="_blank" text-decoration:="">GATE CSE 2024 SET-2</a></b> <b><a href="https://practicepaper.in/gate-cse/discrete-mathematics" style="color:#2f6d1a; text-decoration:none" target="_blank" text-decoration:="">Discrete Mathematics</a></b></div></div>`
        },
        {
            marks: 1,
            neg: 0,
            type: "MSQ",
            text: `<span style="display: inline;">Geetha has a conjecture about integers, which is of the form<br/><span>\\( \\forall x\\left [P(x)\\Rightarrow \\exists yQ(x,y) \\right ] \\)</span><br/>where <span>\\( P \\)</span> is a statement about integers, and <span>\\( Q \\)</span> is a statement about pairs of integers. Which of the following (one or more) option(s) would imply Geetha's conjecture?</span>`,
            image: "",
            options: [
                `<span style="display: inline;"><span>\\( \\exists x\\left [P(x)\\wedge \\forall yQ(x,y) \\right ] \\)</span></span>`,
                `<span style="display: inline;"><span>\\( \\forall x \\forall y Q(x,y) \\)</span></span>`,
                `<span style="display: inline;"><span>\\( \\exists y \\forall x \\left [P(x) \\Rightarrow Q(x,y) \\right ] \\)</span></span>`,
                `<span style="display: inline;"><span>\\( \\exists x \\left [P(x) \\wedge \\exists y Q(x,y) \\right ] \\)</span></span>`
            ],
            answer: ["B", "C"],
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/399295/gate-cse-2023-question-16#a_list_title" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><b><a href="https://practicepaper.in/gate-cse/gate-cse-2023" style="color:#2f6d1a; text-decoration:none" target="_blank" text-decoration:="">GATE CSE 2023</a></b> <b><a href="https://practicepaper.in/gate-cse/discrete-mathematics" style="color:#2f6d1a; text-decoration:none" target="_blank" text-decoration:="">Discrete Mathematics</a></b></div></div>`
        },
    ]
});
