registerTest({
  series: "weekly-cs-gate-2027",
  name: "WQT - Digital Logic-3|Boolean algebra",
  date: "Aug 13, 2026",
  questions: [
    {
      marks: 1,
      neg: 0,
      type: "NAT",
      text: `<p>For \\( 4 \\) input boolean variables, the number of boolean functions possible is \\( ? \\) </p>`,
      image: "",
      options: [],
      answer: "65536",
      solution: `<img src="/images/quiz/wqt-dl3/1.png" style="max-width: 100%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>For the identity \\( AB + A' C + BC = AB + A' C \\), the dual form is </p> <p></p>`,
      image: "",
      options: [
        `\\( (A+B) (A'+C)(B+C)= (A+B)(A'+C) \\)<br>&nbsp;`,
        `\\( (A'+ B') ( A' + C') (B'+C')= (A'+ B') (A +C') \\)<br>&nbsp;`,
        `\\( (A+B) (A'+C) (B+C) = (A'+ B') (A+ C') \\) <br>&nbsp;`,
        `\\( A'B'+AC'+ B'C'= A'B'+AC' \\)`,
      ],
      answer: "A",
      solution: `<img src="/images/quiz/wqt-dl3/2.png" style="max-width: 100%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>For the switch circuit, taking open as \\( 0 \\) and closed as \\( 1 \\), the expression for the circuit is \\( \\text{Y} \\). </p> <p><img alt="" src="/images/quiz/wqt-dl3/q3_img1.png" style="max-width: 100%;"></p> <p></p>`,
      image: "",
      options: [
        `\\( A+ (B+C) D \\)<br>&nbsp;`,
        `\\( A+ BC +D \\)<br>&nbsp;`,
        `\\( A (BC+D) \\)<br>&nbsp;`,
        `None of these`,
      ],
      answer: "C",
      solution: `<img src="/images/quiz/wqt-dl3/3.png" style="max-width: 100%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>Refer to the following figure. If \\( \\mathbf{A}=\\mathbf{0} \\) and \\( \\mathbf{B}=\\mathbf{1} \\), what will be the logic states at \\( \\mathbf{X}, \\mathbf{Y} \\) and \\( \\mathbf{Z} \\) ?<br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;<img alt="" src="/images/quiz/wqt-dl3/q4_img2.png" style="max-width: 100%;"> </p> <p>&nbsp;</p> <p></p>`,
      image: "",
      options: [
        `\\( \\mathrm{X}=1, \\mathrm{Y}=1, \\mathrm{Z}=0 \\) <br>&nbsp;`,
        `\\( \\mathrm{X}=1, \\mathrm{Y}=0, \\mathrm{Z}=0 \\) <br>&nbsp;`,
        `\\( \\mathrm{X}=0, \\mathrm{Y}=0, \\mathrm{Z}=1 \\) <br>&nbsp;`,
        `\\( \\mathrm{X}=0, \\mathrm{Y}=1, \\mathrm{Z}=0 \\)`,
      ],
      answer: "C",
      solution: `<img src="/images/quiz/wqt-dl3/4.png" style="max-width: 100%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p><img alt="" src="/images/quiz/wqt-dl3/q5_img3.png" style="max-width: 100%;"></p> <p>Given circuit represents</p> <p></p>`,
      image: "",
      options: [
        `INVERTER<br>&nbsp;`,
        `AND<br>&nbsp;`,
        `OR<br>&nbsp;`,
        `NOR`,
      ],
      answer: "C",
      solution: `<img src="/images/quiz/wqt-dl3/5.png" style="max-width: 100%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p><img alt="" src="/images/quiz/wqt-dl3/q6_img4.png" style="max-width: 100%;"></p> <p>In the given network of AND and OR gates <strong>f</strong> can be written as:<br>&nbsp;</p> <p></p>`,
      image: "",
      options: [
        `\\( X0 X1 X2 .....Xn + X1 X2 . ....Xn + X2 X3 ....Xn.... Xn \\) <br>&nbsp;`,
        `&nbsp; \\( X0 X1 + X2 + X3 +....... +Xn-1 . Xn \\) <br>&nbsp;`,
        `\\( X0+X1+ X2+ .......+ Xn \\)<br>&nbsp;`,
        `\\( X0 X1 X3........&nbsp; Xn-1 + X2 X3 X5 ......... Xn-1 + ........+ Xn-2 Xn-1 +Xn \\)`,
      ],
      answer: "D",
      solution: `<img src="/images/quiz/wqt-dl3/6.png" style="max-width: 100%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p>The Boolean expression for the output of the logic circuit shown&nbsp; in the figure is</p> <p><img alt="" src="/images/quiz/wqt-dl3/q7_img5.png" style="max-width: 100%;"></p> <p></p>`,
      image: "",
      options: [
        `\\( Y=AB+ A'B'+C \\)<br>&nbsp;`,
        `\\( Y=&nbsp; AB+A'B'+ C' \\)<br>&nbsp;`,
        `\\( Y=A B'+ A'B+C \\)<br>&nbsp;`,
        `\\( Y=AB+ A'B+ C' \\)`,
      ],
      answer: "B",
      solution: `<img src="/images/quiz/wqt-dl3/7.png" style="max-width: 100%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p>Boolean algebra has an interesting property called duality.<br>The dual form of \\( \\mathrm{A}+\\mathrm{BC} \\) ? </p> <p></p>`,
      image: "",
      options: [
        `\\( \\mathrm{AB}+\\mathrm{C} \\)`,
        `\\( A^{\\prime} B^{\\prime}+C^{\\prime} \\)`,
        `\\( A(B+C) \\)`,
        `\\( A^{\\prime}\\left(B^{\\prime}+C^{\\prime}\\right) \\)`,
      ],
      answer: "C",
      solution: `<img src="/images/quiz/wqt-dl3/8.png" style="max-width: 100%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>Some of the theorems of Boolean algebra are not true for ordinary algebra. Similarly, some of the theorems of ordinary algebra are not true for Boolean algebra.<br>Which of the following cancellation laws is/are not true for Boolean algebra ?</p> <p></p>`,
      image: "",
      options: [
        `If \\( \\mathrm{A}+\\mathrm{B}=\\mathrm{A}+\\mathrm{C} \\) , then \\( \\mathrm{B}=\\mathrm{C} \\)`,
        `If \\( \\mathrm{AB}=\\mathrm{AC} \\), then \\( \\mathrm{B}=\\mathrm{C} \\)`,
        `If \\( \\mathrm{A} \\oplus \\mathrm{B}=\\mathrm{A} \\oplus \\mathrm{C} \\), then \\( \\mathrm{B}=\\mathrm{C} \\)`,
        `If \\( \\mathrm{A} \\odot \\mathrm{B}=\\mathrm{A} \\odot \\mathrm{C} \\), then \\( \\mathrm{B}=\\mathrm{C} \\)`,
      ],
      answer: ["A"],
      solution: `<img src="/images/quiz/wqt-dl3/9.png" style="max-width: 100%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>Some of the theorems of Boolean algebra are not true for ordinary algebra. Similarly, some of the theorems of ordinary algebra are not true for Boolean algebra.<br>Which of the following is/are true for Boolean algebra?</p> <p></p>`,
      image: "",
      options: [
        `If \\( x+y=x+z \\), then \\( y=z \\)`,
        `If \\( x y=x z \\), then \\( y=z \\)`,
        `If \\( \\mathrm{y}=\\mathrm{z} \\), then \\( \\mathrm{x}+\\mathrm{y}=\\mathrm{x}+\\mathrm{z} \\)`,
        `If \\( y=z \\), then \\( x y=x z \\)`,
      ],
      answer: ["C"],
      solution: `<img src="/images/quiz/wqt-dl3/10.png" style="max-width: 100%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>Which of the following statements are always true, in Boolean algebra?</p> <p></p>`,
      image: "",
      options: [
        `If \\( A+B=C \\), then \\( A D^{\\prime}+B D^{\\prime}=C D^{\\prime} \\)`,
        `If \\( A^{\\prime} B+A^{\\prime} C=A^{\\prime} D \\), then \\( B+C=D \\)`,
        `If \\( A+B=C \\), then \\( A+B+D=C+D \\)`,
        `If \\( A+B+C=C+D \\), then \\( A+B=D \\)`,
      ],
      answer: ["A"],
      solution: `<img src="/images/quiz/wqt-dl3/11.png" style="max-width: 100%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>In a Boolean algebra, which of the following statements are true \\( ? \\) </p> <p></p>`,
      image: "",
      options: [
        `If \\( x\\left(y+a^{\\prime}\\right)=x\\left(y+b^{\\prime}\\right) \\), then \\( a=b \\).`,
        `If \\( a^{\\prime} b+a b^{\\prime}=a^{\\prime} c+a c^{\\prime} \\), then \\( b=c \\).`,
        `\\( A \\oplus B C=(A \\oplus B)(A \\oplus C) \\)`,
        `\\( x+y=x \\oplus y \\oplus x y \\)`,
      ],
      answer: ["B"],
      solution: `<img src="/images/quiz/wqt-dl3/12.png" style="max-width: 100%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>In a Boolean algebra, which of the following statements are true?</p> <p></p>`,
      image: "",
      options: [
        `\\( x(y \\oplus z)=x y \\oplus x z \\)`,
        `\\( x+(y \\oplus z)=(x+y) \\oplus(x+z) \\)`,
        `\\( x(y \\equiv z)=x y \\equiv x z \\)`,
        `\\( x+(y \\equiv z)=(x+y) \\equiv(x+z) \\)`,
      ],
      answer: ["A"],
      solution: `<img src="/images/quiz/wqt-dl3/13.png" style="max-width: 100%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p><img alt="" src="/images/quiz/wqt-dl3/q14_img6.png" style="max-width: 100%;"></p> <p>&nbsp;The Boolean expression for the shaded area in the Venn diagram is</p> <p></p>`,
      image: "",
      options: [
        `\\( X'+Y'+Z \\)<br>&nbsp;`,
        `\\( X Y' Z + X' Y Z \\)<br>&nbsp;`,
        `\\( X+Y +Z \\)<br>&nbsp;`,
        `\\( X'Y'Z \\ + \\) \\( XY \\)`,
      ],
      answer: "D",
      solution: `<img src="/images/quiz/wqt-dl3/14.png" style="max-width: 100%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p>The simplification of the Boolean expression \\( (\\overline{\\overline{\\boldsymbol{A}} \\boldsymbol{B} \\overline{\\boldsymbol{C}}})+(\\overline{\\boldsymbol{A} \\overline{\\boldsymbol{B}} \\boldsymbol{C}}) \\) is </p> <p></p>`,
      image: "",
      options: [
        `\\( 0 \\)<br>&nbsp;`,
        `\\( 1 \\)<br>&nbsp;`,
        `\\( A \\)<br>&nbsp;`,
        `\\( BC \\)`,
      ],
      answer: "B",
      solution: `<img src="/images/quiz/wqt-dl3/15.png" style="max-width: 100%;">`
    },
  ]
});
