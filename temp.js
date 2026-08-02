registerTest({
  series: "weekly-cs-gate-2027",
  name: "WQT - Engineering Mathematics-7|Probability",
  date: "Aug 20, 2026",
  questions: [
    {
      marks: 1,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>Which all of the following is true for the Venn diagram shown here:</p> <p style="text-align:center"><img alt="" src="/images/quiz/wqt-em7/q1_img1.png" style="max-width: 100%;"></p> <p></p>`,
      image: "",
      options: [
        `\\( P(E \\cup G)=P(E)+P(G) \\)<br>&nbsp;`,
        `\\( P(E \\cup G)=P(E)+P(G)-P(E \\cap G) \\)<br>&nbsp;`,
        `\\( P\\left(E^C \\cap F\\right)=P\\left(F^C\\right)-P(E) \\)<br>&nbsp;`,
        `\\( P\\left(E^C \\cap F\\right)=1-\\left(P\\left(F^C\\right)-P(E)\\right) \\)`,
      ],
      answer: ["A", "B"],
      solution: `<img src="/images/quiz/wqt-em7/1.png" style="max-width: 100%;">`
    },
    {
      marks: 1,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>Which of the following is/are CORRECT?</p> <p></p>`,
      image: "",
      options: [
        `If events \\( E_1 \\) and \\( E_2 \\) are statistically independent, then<br> \$\$ \\mathrm{P}\\left(E_1 \\cup E_2\\right)=\\mathrm{P}\\left(E_1\\right)+\\mathrm{P}\\left(E_2\\right) \$\$ <br>&nbsp;`,
        `If events \\( E_1 \\) and \\( E_2 \\) are mutually exclusive, then<br> \$\$ \\mathrm{P}\\left(E_1 \\mid E_2\\right)=0 \$\$<br>&nbsp;`,
        `If \\( E_1, E_2 \\), and \\( E_3 \\) are mutually exclusive and collectively exhaustive, then<br> \$\$ \\mathrm{P}\\left(E_1\\right)=1-\\mathrm{P}\\left(E_2\\right)-\\mathrm{P}\\left(E_3\\right) \$\$ <br>&nbsp;`,
        `\\( \\mathrm{P}\\left(\\overline{E}_1 \\mid E_2 \\cup E_3\\right)=1-\\mathrm{P}\\left(E_1 \\mid \\overline{E_2 \\cup E_3}\\right) \\)`,
      ],
      answer: ["B", "C"],
      solution: `<img src="/images/quiz/wqt-em7/2.png" style="max-width: 100%;">`
    },
    {
      marks: 1,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>Suppose that \\( k \\) events \\( B_1, B_2, \\ldots, B_k \\) form a partition of the sample space \\( S \\). There is another event \\( A \\) that \\( \\operatorname{Pr}(A)&gt;0. \\) </p> <p>Which of the following is/are CORRECT?</p> <p></p>`,
      image: "",
      options: [
        `\\( \\sum_{i=1}^k P\\left(B_i\\right)=1 \\)<br>&nbsp;`,
        `\\( \\sum_{i=1}^k P\\left(B_i \\mid A\\right)=1 \\) <br>&nbsp;`,
        `\\( \\sum_{i=1}^k P\\left(A \\mid B_i\\right)=1 \\) <br>&nbsp;`,
        `\\( \\sum_{i=1}^k P\\left(B_i \\wedge A\\right)=P(A) \\)`,
      ],
      answer: ["A", "B", "D"],
      solution: `<img src="/images/quiz/wqt-em7/3.png" style="max-width: 100%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p> \\( A \\) and \\( B \\) are two events. If \\( P(A, B) \\) decreases while \\( P(A) \\) increases, what must be true: </p> <p></p>`,
      image: "",
      options: [
        `\\( P(A \\mid B) \\) decreases<br>&nbsp;`,
        `\\( P(B \\mid A) \\) decreases<br>&nbsp;`,
        `\\( P(B) \\) decreases<br>&nbsp;`,
        `All of above&nbsp;`,
      ],
      answer: "B",
      solution: `<img src="/images/quiz/wqt-em7/4.png" style="max-width: 100%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>Alice, Bob, and Carl each attempt to solve a crossword puzzle. There is a \\( 70 \\% \\) chance that Alice can solve the puzzle without making a mistake, a \\( 60 \\% \\) chance that Bob can, and a \\( 85 \\% \\) chance that Carl can. What is the probability that each one makes a mistake in solving the puzzle? </p> <p></p>`,
      image: "",
      options: [
        `\\( 0.018 \\)<br>&nbsp;`,
        `\\( 0.357 \\)<br>&nbsp;`,
        `\\( 0.9 \\)<br>&nbsp;`,
        `\\( 0.12 \\)`,
      ],
      answer: "A",
      solution: `<img src="/images/quiz/wqt-em7/5.png" style="max-width: 100%;">`
    },
    {
      marks: 1,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>Which of the following(s) expression is/are the same as \\( P(A, B, C) \\) given no independent assumptions? </p> <p></p>`,
      image: "",
      options: [
        `\\( P(C \\mid A, B) \\cdot P(A, B) \\)<br>&nbsp;`,
        `\\( P(C \\mid A, B) \\cdot P(A) \\cdot P(B) \\) <br>&nbsp;`,
        `\\( P(A \\mid B) \\cdot P(B \\mid C) \\cdot P(C) \\) <br>&nbsp;`,
        `\\( P(A \\mid B, C) \\cdot P(B \\mid C) \\cdot P(C) \\)`,
      ],
      answer: ["A", "D"],
      solution: `<img src="/images/quiz/wqt-em7/6.png" style="max-width: 100%;">`
    },
    {
      marks: 1,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>Suppose we wish to calculate \\( P(H \\mid E 1, E 2), \\)&nbsp;and we have no conditional independence information. </p> <p>Which of the following sets of numbers are sufficient for the calculations?</p> <p></p>`,
      image: "",
      options: [
        `\\( P(E 1, E 2), P(H), P(E 1 \\mid H), P(E 2 \\mid H) \\)<br>&nbsp;`,
        `\\( P(E 1, E 2), P(H), P(E 1, E 2 \\mid H) \\) <br>&nbsp;`,
        `\\( P(H), P(E 1 \\mid H), P(E 2 \\mid H) \\) <br>&nbsp;`,
        `\\( P(H), P(E 1 \\mid H) \\)`,
      ],
      answer: ["B"],
      solution: `<img src="/images/quiz/wqt-em7/7.png" style="max-width: 100%;">`
    },
    {
      marks: 1,
      neg: 0,
      type: "NAT",
      text: `<p>Suppose \\( A \\) and \\( B \\) are independent events. Consider the following probabilities. \$\$ \\begin{aligned} &amp; P(A, B)=0.15 \\\\ &amp; P\\left(A, B^c\\right)=0.45 \\\\ &amp; P\\left(A^c, B\\right)=x \\\\ &amp; P\\left(A^c, B^c\\right)=y \\end{aligned} \$\$ What will be the value of \\( x+y? \\) </p>`,
      image: "",
      options: [],
      answer: "0.4",
      solution: `<img src="/images/quiz/wqt-em7/8.png" style="max-width: 100%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p>Which of the following statements is NOT true?</p> <p></p>`,
      image: "",
      options: [
        `If \\( A \\subset B \\), then \\( P(A) \\leq P(B) \\).<br>&nbsp;`,
        `If \\( P(B)&gt;0 \\), then \\( P(A \\mid B) \\geq P(A) \\).<br>&nbsp;`,
        `\\( P(A \\cap B) \\geq P(A)+P(B)-1 \\).<br>&nbsp;`,
        `\\( P\\left(A \\cap B^c\\right)=P(A \\cup B)-P(B) \\).`,
      ],
      answer: "B",
      solution: `<img src="/images/quiz/wqt-em7/9.png" style="max-width: 100%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p>I have two six-sided dice. The first die has \\( 3 \\) faces painted red and the other \\( 3 \\) painted black. The second has \\( 1 \\) red face and \\( 5 \\) black faces. When I roll a die, each of the six faces are equally likely. I choose a die at random (both dice being equally likely), and roll it twice (rolling the same die both times). </p> <p>What is the conditional probability that I chose the die with \\( 3 \\) red faces, given that the first roll came up \\( \\text{“red"} \\)? </p> <p></p>`,
      image: "",
      options: [
        `\\( 1 / 2 \\)<br>&nbsp;`,
        `\\( 3 / 4 \\)<br>&nbsp;`,
        `\\( 1 / 6 \\)<br>&nbsp;`,
        `\\( 1 / 3 \\)`,
      ],
      answer: "B",
      solution: `<img src="/images/quiz/wqt-em7/10.png" style="max-width: 100%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p>A drug-screening test is used in a group of professional baseball players of whom \\( 4 \\% \\) actually use illegal drugs. It is found that the test indicates positive in \\( 97 \\% \\) of those who use drugs and \\( 2 \\% \\) of those who do not. </p> <p>What is the probability that a randomly chosen player in the group with positive test result actually uses drugs?</p> <p></p>`,
      image: "",
      options: [
        `\\( 0.67 \\)<br>&nbsp;`,
        `\\( 0.97 \\)<br>&nbsp;`,
        `\\( 0.06 \\)<br>&nbsp;`,
        `\\( 0.52 \\)`,
      ],
      answer: "A",
      solution: `<img src="/images/quiz/wqt-em7/11.png" style="max-width: 100%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <ul> <li>Class has&nbsp; \\( 50 \\) students<br>&nbsp; </li> <li> \\( 20 \\) male \\( (M), 25 \\) brown-eyed \\( (B) \\) </li> </ul> <p>For a randomly chosen student, what is the range of possible values for \\( p=P(M \\cup B)? \\) </p> <p></p>`,
      image: "",
      options: [
        `\\( p \\leq 0.4 \\)<br>&nbsp;`,
        `\\( 0.4 \\leq p \\leq 0.5 \\)<br>&nbsp;`,
        `\\( 0.4 \\leq p \\leq 0.9 \\)<br>&nbsp;`,
        `\\( 0.5 \\leq p \\leq 0.9 \\)`,
      ],
      answer: "D",
      solution: `<img src="/images/quiz/wqt-em7/12.png" style="max-width: 100%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p>A box contains three coins: two regular coins and one fake two-headed coin \\( (P(H)=1), \\)&nbsp;You pick a coin at random and toss it. </p> <p>What is the probability that it lands heads up?</p> <p></p>`,
      image: "",
      options: [
        `\\( 1 / 2 \\)<br>&nbsp;`,
        `\\( 2 / 3 \\)<br>&nbsp;`,
        `\\( 4 / 5 \\)<br>&nbsp;`,
        `None of these`,
      ],
      answer: "B",
      solution: `<img src="/images/quiz/wqt-em7/13.png" style="max-width: 100%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p>Consider a three level tree diagram of events happening in a sequence.</p> <p>At first level \\( A, B \\) or \\( C \\) events are possible, at second level \\( D, E \\) or \\( F \\) are possible and at third level \\( P \\) or \\( Q \\) are possible. </p> <p>All edge probabalties at first level are \\( 1 / 3, \\)&nbsp;at second level are \\( 1/3, \\) and at third level are \\( 1/2. \\) </p> <p style="text-align:center"><img alt="" src="/images/quiz/wqt-em7/q14_img2.png" style="max-width: 100%;"></p> <p>Find \\( P(A \\mid P)? \\) </p> <p></p>`,
      image: "",
      options: [
        `\\( 2/3 \\)<br>&nbsp;`,
        `\\( 1 / 3 \\)<br>&nbsp;`,
        `\\( 1 / 2 \\)<br>&nbsp;`,
        `\\( 3 / 4 \\)`,
      ],
      answer: "B",
      solution: `<img src="/images/quiz/wqt-em7/14.png" style="max-width: 100%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p>For a sample space \\( \\mathrm{S} \\) encompassing three events \\( \\mathrm{E}, \\mathrm{F}, \\)&nbsp;and \\( \\mathrm{G}, \\)&nbsp;if it is given that \\( P(E)=0.3, P(F)= \\) \\( 0.8, P(G)=0.2, \\)&nbsp;which of the following can NOT be true? </p> <p></p>`,
      image: "",
      options: [
        `Events \\( \\mathrm{E} \\) and \\( \\mathrm{F} \\) are mutually exclusive events<br>&nbsp;`,
        `Events \\( \\mathrm{F} \\) and \\( \\mathrm{G} \\) are mutually exclusive events<br>&nbsp;`,
        `Events \\( \\mathrm{E} \\) and \\( \\mathrm{F} \\) are independent events<br>&nbsp;`,
        `Events \\( \\mathrm{F} \\) and \\( \\mathrm{G} \\) are independent events`,
      ],
      answer: "A",
      solution: `<img src="/images/quiz/wqt-em7/15.png" style="max-width: 100%;">`
    },
  ]
});
