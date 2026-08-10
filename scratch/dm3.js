registerTest({
  series: "weekly-cs-gate-2027",
  name: "WQT - Discrete Mathematics-3 | Propositional Logic",
  date: "Oct 01, 2026",
  questions: [
    {
      marks: 1,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>Which of the following compound propositions is/are a tautology?</p> <p></p>`,
      image: "",
      options: [
        `\\( [p \\land (p \\rightarrow q)] \\rightarrow q \\)`,
        `\\( [q \\land (p \\rightarrow q)] \\rightarrow p \\)`,
        `\\( [(p \\lor q) \\land (r \\rightarrow p) \\land (r \\rightarrow q)] \\rightarrow r \\)`,
        `\\( [(p \\lor q) \\land (p \\rightarrow r) \\land (q \\rightarrow r)] \\rightarrow r \\) <br>&nbsp;`,
      ],
      answer: ["A", "D"],
      solution: `<img src="/images/quiz/wqt-dm-3/1.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>Let  \\( p,q \\) be two atomic propositional assertions. Then which of the following is/are false? </p> <p></p>`,
      image: "",
      options: [
        `\\( (p \\rightarrow q) \\vee (p \\rightarrow \\neg q) \\) is a&nbsp;tautology.`,
        `\\( (p \\rightarrow q) \\vee (q \\rightarrow p) \\) is a&nbsp;tautology.`,
        `\\( (p \\rightarrow q) \\vee (q \\rightarrow \\neg p) \\) is a&nbsp;tautology.`,
        `\\( (p \\rightarrow q) \\vee (\\neg q \\rightarrow \\neg p) \\) is a&nbsp;tautology.`,
      ],
      answer: ["D"],
      solution: `<img src="/images/quiz/wqt-dm-3/2.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>Let’s consider the interpretation  \\( v \\) where  \\( v(p) = F, v(q) = T, v(r) = T. \\) Which of the following propositional formulas are satisfied by  \\( v \\)? </p> <p></p>`,
      image: "",
      options: [
        `\\( (p \\rightarrow \\neg q) \\vee \\neg(r \\wedge q) \\)`,
        `\\( (\\neg p \\vee \\neg q) \\rightarrow (p \\vee \\neg r) \\)`,
        `\\( \\neg(\\neg p \\rightarrow \\neg q) \\wedge r \\)`,
        `\\( \\neg (\\neg p \\rightarrow q \\wedge \\neg r) \\)`,
      ],
      answer: ["A", "C", "D"],
      solution: `<img src="/images/quiz/wqt-dm-3/3.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>Consider the following atomic propositions:</p> <ul> <li> \\( \\text{R} \\): It is Raining </li> <li> \\( \\text{S} \\): Sonu is Sick </li> </ul> <p>Which of the following is/are correct English Translation of the following logical expression:<br> \$\$ (\\text{R} \\vee \\neg \\text{S} )\\wedge (\\neg \\text{R} \\vee&nbsp;\\text{S})? \$\$ </p> <p></p>`,
      image: "",
      options: [
        `It is raining if and only if sonu is not sick`,
        `If sonu is sick then it is raining, and vice versa`,
        `It is raining is equivalent to sonu is sick`,
        `It is raining or sonu is sick but not both`,
      ],
      answer: ["B", "C"],
      solution: `<img src="/images/quiz/wqt-dm-3/4.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>Consider the following arguments.</p> <ul> <li> \\( \\text{Argument 1:} \\) Kerry errs or Myrna fails to show. If Kerry errs, then he does not break the record. Myrna fails to show. Therefore, Kerry does break the record. </li> <li> \\( \\text{Argument 2:} \\) If Tasha leaves, then Carol moves in. If Carol moves in, then Sam is not happy. If Sam is not happy, then Josh laughs. Sam is happy. Hence, Tasha does not leave. </li> </ul> <p>Which of the following is true?</p> <p></p>`,
      image: "",
      options: [
        `Only Argument  \\( 1 \\) is valid.`,
        `Only Argument  \\( 2 \\) is valid.`,
        `Both Arguments are valid.`,
        `No Argument is valid.`,
      ],
      answer: "B",
      solution: `<img src="/images/quiz/wqt-dm-3/5.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>Let  \\( F \\) and  \\( G \\) be two propositional formula. </p> <p>Which of the following is/are True?</p> <p></p>`,
      image: "",
      options: [
        `\\( F \\vee G \\) is a tautology iff at least one of them is a tautology`,
        `If  \\( F \\rightarrow G \\) is a tautology and  \\( F \\) is a tautology, then  \\( G \\) is a tautology.`,
        `\\( (F \\rightarrow G) \\vee (F \\rightarrow \\neg G) \\) is a tautology.`,
        `\\( (F \\rightarrow G) \\wedge (F \\rightarrow \\neg G) \\) is a tautology iff  \\( F \\) is a contradiction.`,
      ],
      answer: ["B", "C", "D"],
      solution: `<img src="/images/quiz/wqt-dm-3/6.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>The “implies” connective “ \\( \\rightarrow \\)” is one of the stranger connectives in propositional logic. Below are a series of statements regarding implications. </p> <p>Which of the following statements is/are TRUE?</p> <p></p>`,
      image: "",
      options: [
        `For any propositions  \\( P \\) and  \\( Q, \\) the following is always true:  \\( (P \\rightarrow Q) \\vee (Q \\rightarrow P). \\)`,
        `For any propositions  \\( P, Q \\) and  \\( R \\), the following statement is always true: \\( (P\\rightarrow Q) \\vee (Q \\rightarrow R). \\)`,
        `For any propositions  \\( P, Q \\) and  \\( R \\), the following statement is always true: \\( (P\\rightarrow Q) \\vee (\\neg P \\rightarrow R). \\)`,
        `For any propositions  \\( P, Q \\)&nbsp;and  \\( R, \\) the following statement is always true: \\( (P \\rightarrow Q) \\vee (R \\rightarrow Q) \\).`,
      ],
      answer: ["A", "B", "C"],
      solution: `<img src="/images/quiz/wqt-dm-3/7.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>Which of the following logical arguments is/are valid?</p> <p></p>`,
      image: "",
      options: [
        `\\( \\begin{aligned} &amp; P \\rightarrow(Q \\rightarrow R) \\\\ &amp; \\neg R \\\\ \\therefore &amp; \\neg P \\\\ &amp; \\end{aligned} \\)`,
        `\\( \\begin{aligned} &amp; (P \\wedge Q) \\rightarrow \\neg R \\\\ &amp; R \\rightarrow P\\\\ \\therefore &amp;&nbsp; \\neg(Q \\wedge R) \\\\ &amp; \\end{aligned} \\)`,
        `\\( \\begin{aligned} &amp; (Q \\rightarrow P) \\vee R\\\\&amp; \\neg(R \\wedge Q)\\\\ &amp; \\therefore \\neg \\neg Q \\rightarrow P \\\\ &amp; \\end{aligned} \\)`,
        `\\( \\begin{aligned} &amp; P \\rightarrow(Q \\vee R) \\\\ &amp; \\neg R \\\\ &amp; Q \\rightarrow \\neg(P \\wedge R) \\\\ &amp; \\therefore Q\\end{aligned} \\)`,
      ],
      answer: ["B", "C"],
      solution: `<img src="/images/quiz/wqt-dm-3/8.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>The Logic Problem, taken from  \\( \\text{"WFF'N PROOF,&nbsp;The Game of Logic"} \\) has these two assumptions: </p> <ol> <li>"Logic is difficult or not many students like logic."</li> <li>"If mathematics is easy, then logic is not difficult."</li> </ol> <p>By translating these assumptions into statements involving propositional variables and logical connectives, Find out which of the following are valid conclusions of these assumptions:</p> <p></p>`,
      image: "",
      options: [
        `"Mathematics is not easy, if many students like logic."`,
        `"Not many students like logic, if mathematics is not easy."`,
        `"Mathematics is not easy or logic is difficult."`,
        `"Logic is not difficult or mathematics is not easy."`,
      ],
      answer: ["A", "D"],
      solution: `<img src="/images/quiz/wqt-dm-3/9.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>Which of the following statements is/are true?</p> <p></p>`,
      image: "",
      options: [
        `The argument form with premises  \\( p_1, p_2, \\ldots, p_n \\) and conclusion  \\( q \\rightarrow r \\) is valid iff the argument form with premises  \\( p_1, p_2, \\ldots, p_n, r \\), and conclusion \\( q \\) is valid.`,
        `The argument form with premises  \\( p_1, p_2, \\ldots, p_n \\) and conclusion  \\( q \\rightarrow r \\) is valid iff the argument form with premises  \\( p_1, p_2, \\ldots ,p_n, q, \\) and conclusion \\( r \\) is valid.`,
        `The argument form with premises  \\( p_1, p_2, \\ldots, p_n \\) and conclusion  \\( q \\rightarrow r \\) is valid iff the argument form with premises  \\( p_1, p_2, \\ldots ,p_n, q \\), and conclusion \\( \\sim r \\) is valid.`,
        `The argument form with premises  \\( p_1, p_2, \\ldots, p_n \\) and conclusion  \\( q \\rightarrow r \\) is valid iff the argument form with premises  \\( p_1, p_2, \\ldots, p_n, \\sim r \\), and conclusion  \\( \\sim q \\) is valid.`,
      ],
      answer: ["B", "D"],
      solution: `<img src="/images/quiz/wqt-dm-3/10.png" style="max-width: 75%;">`
    },
  ]
});
