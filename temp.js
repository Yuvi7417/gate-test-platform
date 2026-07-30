registerTest({
  series: "weekly-cs-gate-2027",
  name: "WQT - Digital Logic-5|Boolean Algebra, Minimization, Number System",
  date: "Aug 27, 2026",
  questions: [
    {
      marks: 1,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>Select the Boolean function(s) equivalent to \\( x+yz, \\) where \\( x, y, \\) and \\( z \\) are Boolean variables, and \\( + \\) denotes logical \\( \\text{OR} \\) operation. </p> <p></p>`,
      image: "",
      options: [
        `\\( x + z + xy \\)`,
        `\\( (x + y)(x + z) \\)`,
        `\\( x + xy + yz \\)`,
        `\\( x + xz + xy \\)`,
      ],
      answer: ["B", "C"],
      solution: `<img src="/images/quiz/wqt-dl5/1.png" style="max-width: 100%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>Match the logic gates in <strong>Column A</strong> with their equivalents in <strong>Column B.</strong> </p> <p style="text-align:center"><img alt="" src="/images/quiz/wqt-dl5/q2_img1.png" style="max-width: 100%;"></p> <p></p>`,
      image: "",
      options: [
        `\\( \\text{P-2, Q-4, R-1, S-3} \\)`,
        `\\( \\text{P-4, Q-2, R-1, S-3} \\)`,
        `\\( \\text{P-2, Q-4, R-3, S-1} \\)`,
        `\\( \\text{P-4, Q-2, R-3, S-1} \\)`,
      ],
      answer: "D",
      solution: `<img src="/images/quiz/wqt-dl5/2.png" style="max-width: 100%;">`
    },
    {
      marks: 1,
      neg: 0,
      type: "NAT",
      text: `<p>The number of bytes required to represent the decimal number \\( 1856357 \\) in packed BCD (Binary Coded Decimal) form is ___________. </p>`,
      image: "",
      options: [],
      answer: "4",
      solution: `<img src="/images/quiz/wqt-dl5/3.png" style="max-width: 100%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>The Boolean expression \\( (X+Y)(X+\\overline{Y}) + \\overline{(X\\;\\overline{Y}) + \\overline{X}} \\) simplifies to </p> <p></p>`,
      image: "",
      options: [
        `\\( X \\)`,
        `\\( Y \\)`,
        `\\( XY \\)`,
        `\\( X+Y \\)`,
      ],
      answer: "A",
      solution: `<img src="/images/quiz/wqt-dl5/4.png" style="max-width: 100%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>A function \\( F(A, B, C) \\) defined by three Boolean variables \\( \\text{A, B and C} \\) when expressed as sum of products is given by </p> <p> \$\$ F=\\overline{A}\\:.\\overline{B}\\:.\\overline{C}+\\overline{A}\\:.B\\:.\\overline{C}+A\\:.\\overline{B}\\:.\\overline{C} \$\$ </p> <p>where,&nbsp; \\( \\overline{A}\\:,\\overline{B}\\:,and\\:\\overline{C} \\) are the complements of the respective variables. The product of sums \\( \\text{(POS)} \\) form of the function \\( F \\) is&nbsp; </p> <p></p>`,
      image: "",
      options: [
        `\\( F=\\left ( A +B+C\\right ).\\left ( A+\\overline{B} + C\\right ). \\left ( \\overline{A}+B+C \\right ) \\)`,
        `\\( F=\\left ( \\overline{A} +\\overline{B}+\\overline{C}\\right ).\\left ( \\overline{A} +B+ \\overline{C}\\right ). \\left (A+ \\overline{B}+\\overline{C} \\right ) \\)`,
        `\\( F=\\left ( A +B+\\overline{C}\\right ).\\left ( A+\\overline{B} + \\overline{C}\\right ). \\left (\\overline{A}+ B+\\overline{C} \\right ).\\left ( \\overline{A}+\\overline{B}+C\\right ).\\left ( \\overline{A}+\\overline{B} +\\overline{C}\\right ) \\)`,
        `\\( F=\\left ( \\overline{A}+\\overline{B}+C\\right ).\\left (\\overline{A} +B+ C\\right ). \\left (A+\\overline{B}+ C \\right ).\\left (A+B+\\overline{C}\\right ).\\left ( A+B+C \\right ) \\)`,
      ],
      answer: "C",
      solution: `<img src="/images/quiz/wqt-dl5/5.png" style="max-width: 100%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p>If \\( (1235)_{x}\\:=\\:(3033)_{y} \\), where \\( x \\) and \\( y \\) indicate the bases of the corresponding numbers, then </p> <p></p>`,
      image: "",
      options: [
        `\\( x\\:=\\:7 \\) and \\( y\\:=\\:5 \\)`,
        `\\( x\\:=\\:8 \\) and \\( y\\:=\\:6 \\)`,
        `\\( x\\:=\\:6 \\) and \\( y\\:=\\:4 \\)`,
        `\\( x\\:=\\:9 \\) and \\( y\\:=\\:7 \\)&nbsp;`,
      ],
      answer: "B",
      solution: `<img src="/images/quiz/wqt-dl5/6.png" style="max-width: 100%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p>The output \\( \\mathrm{Y} \\) in the circuit below is always \\( \\text{“1"} \\) when </p> <p style="text-align:center"><img alt="" src="/images/quiz/wqt-dl5/q7_img2.png" style="max-width: 100%;"></p> <p></p>`,
      image: "",
      options: [
        `two or more of the inputs \\( \\mathrm{P, Q, R} \\) are \\( \\text{“0"} \\)`,
        `two or more of the inputs \\( \\mathrm{P, Q, R} \\) are \\( \\text{“1"} \\)`,
        `any odd number of the inputs \\( \\mathrm{P, Q, R} \\) is \\( \\text{“0"} \\)`,
        `any odd number of the inputs \\( \\mathrm{P, Q, R} \\) is \\( \\text{“1"} \\)`,
      ],
      answer: "B",
      solution: `<img src="/images/quiz/wqt-dl5/7.png" style="max-width: 100%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p>Following is the \\( \\text{K-map} \\) of a Boolean&nbsp;function of five variables \\( P,Q,R,S \\) and \\( X \\). The minimum sum-of-product (SOP) expression for the function is </p> <p style="text-align:center"><img alt="" src="/images/quiz/wqt-dl5/q8_img3.png" style="max-width: 100%;"></p> <p></p>`,
      image: "",
      options: [
        `\\( \\overline{P}\\:\\overline{Q}\\:S\\:\\overline{X}+\\;P\\:\\overline{Q}\\:S\\:\\overline{X}+\\;Q\\:\\overline{R}\\:\\overline{S}\\:X+\\;Q\\:R\\:\\overline{S}\\:X \\)`,
        `\\( \\overline{Q}\\:S\\:\\overline{X}+\\;Q\\:\\overline{S}\\:X \\)`,
        `\\( \\overline{Q}\\:S\\:X+\\;Q\\:\\overline{S}\\:\\overline{X} \\)`,
        `\\( \\overline{Q}\\:S+\\;Q\\overline{S} \\)`,
      ],
      answer: "B",
      solution: `<img src="/images/quiz/wqt-dl5/8.png" style="max-width: 100%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p>In the figure shown, the output ܻ \\( Y = AB + \\overline{C}\\:\\:\\overline{D} \\) is required to be ܻ&nbsp;The gates \\( G1 \\) and \\( G2 \\) must be, respectively, </p> <p style="text-align:center"><img alt="" src="/images/quiz/wqt-dl5/q9_img4.png" style="max-width: 100%;"></p> <p></p>`,
      image: "",
      options: [
        `NOR, OR`,
        `OR,&nbsp;NAND`,
        `NAND, OR`,
        `AND,&nbsp;NAND`,
      ],
      answer: "A",
      solution: `<img src="/images/quiz/wqt-dl5/9.png" style="max-width: 100%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p>A function of Boolean variables \\( X, Y \\) and \\( Z \\) is expressed in terms of the min-terms as \$\$ F(X, Y, Z) = \\Sigma&nbsp;(1, 2, 5, 6, 7) \$\$ </p> <p>Which one of the product of sums given below is equal to the function \\( F(X, Y, Z)? \\) </p> <p></p>`,
      image: "",
      options: [
        `\\( (\\overline{X} + \\overline{Y} + \\overline{Z} )\\cdot(\\overline{X} + Y + Z)\\cdot(X + \\overline{Y} + \\overline{Z} ) \\)`,
        `\\( (X + Y + Z)\\cdot(X + \\overline{Y} + \\overline{Z} )\\cdot(\\overline{X} + Y + Z) \\)`,
        `\\( (\\overline{X} + \\overline{Y} + Z)\\cdot(\\overline{X} + Y + \\overline{Z} )\\cdot(X + \\overline{Y} + Z)\\cdot(X + Y + \\overline{Z} )\\cdot(X + Y + Z) \\)`,
        `\\( (X + Y + \\overline{Z} )\\cdot(\\overline{X} + Y + Z)\\cdot(\\overline{X} + Y + \\overline{Z} )\\cdot(\\overline{X} + \\overline{Y} + Z)\\cdot(\\overline{X} + \\overline{Y} + \\overline{Z}) \\)`,
      ],
      answer: "B",
      solution: `<img src="/images/quiz/wqt-dl5/10.png" style="max-width: 100%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p>The Boolean expression \\( F(X,Y,Z) = \\overline{X} \\: Y \\:&nbsp;\\overline{Z}+ X \\:&nbsp;\\overline{Y} \\:&nbsp;\\overline{Z}+ X \\: Y \\:&nbsp;\\overline{Z} + X \\: Y \\: Z \\) converted into the canonical product of sum (POS) form is </p> <p></p>`,
      image: "",
      options: [
        `\\( (X+Y+Z)(X+Y+\\overline{Z})(X+\\overline{Y}+\\overline{Z})(\\overline{X} + Y + \\overline{Z}) \\)`,
        `\\( (X+\\overline{Y}+Z)(\\overline{X}+Y+\\overline{Z})(\\overline{X}+\\overline{Y}+Z)(\\overline{X} + \\overline{Y} +&nbsp;\\overline{Z}) \\)`,
        `\\( (X+Y+Z)(\\overline{X}+Y+\\overline{Z})(X+\\overline{Y}+Z)(\\overline{X} + \\overline{Y} + \\overline{Z}) \\)`,
        `\\( (X+\\overline{Y}+\\overline{Z})(\\overline{X}+Y+Z)(\\overline{X}+\\overline{Y}+Z)(X&nbsp;+ Y&nbsp;+&nbsp;Z) \\)`,
      ],
      answer: "A",
      solution: `<img src="/images/quiz/wqt-dl5/11.png" style="max-width: 100%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p>A \\( 3 \\)-input majority gate is defined by the logic function \\( M(a,b,c)=ab+bc+ca \\). Which one of the following gates is represented by the function \\( M(\\overline{M(a,b,c)}, M(a,b,\\overline{c}),c) \\)? </p> <p></p>`,
      image: "",
      options: [
        `\\( 3 \\)-input NAND gate`,
        `\\( 3 \\)-input XOR gate`,
        `\\( 3 \\)-input NOR gate`,
        `\\( 3 \\)-input XNOR gate`,
      ],
      answer: "B",
      solution: `<img src="/images/quiz/wqt-dl5/12.png" style="max-width: 100%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p>In the circuit shown in the figure, if \\( C=0 \\), the expression for \\( Y \\) is </p> <p style="text-align:center"><img alt="" src="/images/quiz/wqt-dl5/q13_img5.png" style="max-width: 100%;"></p> <p></p>`,
      image: "",
      options: [
        `\\( Y=A \\overline{B} +&nbsp;\\overline{A}B \\)`,
        `\\( Y=A+B \\)`,
        `\\( Y=\\overline{A} +&nbsp;\\overline{B} \\)`,
        `\\( Y=A \\: B \\)`,
      ],
      answer: "A",
      solution: `<img src="/images/quiz/wqt-dl5/13.png" style="max-width: 100%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p>The output \\( F \\) in the digital logic circuit shown in the figure is </p> <p style="text-align:center"><img alt="" src="/images/quiz/wqt-dl5/q14_img6.png" style="max-width: 100%;"></p> <p></p>`,
      image: "",
      options: [
        `\\( F = \\overline{X}\\:Y\\:Z + X\\:\\overline{Y}\\:Z \\)`,
        `\\( F = \\overline{X}\\:Y\\:\\overline{Z} + X\\:\\overline{Y}\\:\\overline{Z} \\)`,
        `\\( F = \\overline{X}\\:\\overline{Y}\\:Z + X\\:Y\\:Z \\)`,
        `\\( F = \\overline{X}\\:\\overline{Y}\\:\\overline{Z}&nbsp;+ X\\:Y\\:Z \\)`,
      ],
      answer: "A",
      solution: `<img src="/images/quiz/wqt-dl5/14.png" style="max-width: 100%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p>Consider the Boolean function \\( F(w,x,y,z) = wy + xy + \\overline{w}\\:xyz + \\overline{w}\\:\\overline{x}\\:y + xz + \\overline{x}\\:\\overline{y}\\:\\overline{z}. \\) Which one of&nbsp; the following is the complete set of essential prime implicants? </p> <p></p>`,
      image: "",
      options: [
        `\\( w,y,xz,\\overline{x}\\:\\overline{z} \\)`,
        `\\( w,y,xz \\)`,
        `\\( y, \\overline{x}\\:\\overline{y}\\:\\overline{z} \\)`,
        `\\( y,xz,\\overline{x}\\:\\overline{z} \\)`,
      ],
      answer: "D",
      solution: `<img src="/images/quiz/wqt-dl5/15.png" style="max-width: 100%;">`
    },
  ]
});
