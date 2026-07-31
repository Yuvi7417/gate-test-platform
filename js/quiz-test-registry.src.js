registerTest({
  series: "weekly-cs-gate-2027",
  name: "WQT - Digital logic-1|Boolean algebra",
  date: "Jul 30, 2026",
  questions: [
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>In the circuit shown below, which logic function does this circuit generate?<br><img alt="" src="/images/quiz/wqt-dl1/q1_img1.png" style="max-width: 75%;"><br>&nbsp;</p> <p></p>`,
      image: "",
      options: [
        `OR`,
        `AND`,
        `NOR`,
        `NAND`,
      ],
      answer: "A",
      solution: `<img src="/images/quiz/wqt-dl1/1.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>The dual of the Boolean function \\( \\boldsymbol{x}+\\boldsymbol{y} \\boldsymbol{z} \\) is: </p> <p></p>`,
      image: "",
      options: [
        `\\( \\bar{x}(\\bar{y}+\\bar{z}) \\)`,
        `\\( x(y+z) \\)`,
        `\\( x+y z \\)`,
        `\\( \\bar{x}+\\bar{y} \\bar{z} \\)`,
      ],
      answer: "B",
      solution: `<img src="/images/quiz/wqt-dl1/2.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>Applying DeMorgan's theorem to the expression \\( \\overline{\\overline{(\\boldsymbol{X}+\\boldsymbol{Y})}+\\overline{\\boldsymbol{Z}}} \\) , we get </p> <p></p>`,
      image: "",
      options: [
        `\\( (X+Y) Z \\)`,
        `\\( (\\bar{X}+\\bar{Y}) \\bar{Z} \\)`,
        `\\( (\\bar{X}+\\bar{Y}) Z \\)`,
        `\\( (X+Y) \\bar{Z} \\)`,
      ],
      answer: "A",
      solution: `<img src="/images/quiz/wqt-dl1/3.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>Refer to the following figure, If \\( \\mathbf{S}_{1}=\\mathbf{1} \\) and \\( \\mathbf{S}_{2}=\\mathbf{0} \\) what will be the logic state at the output \\( \\mathbf{X} \\) ? </p> <p><br><img alt="" src="/images/quiz/wqt-dl1/q4_img2.png" style="max-width: 75%;"></p> <p>&nbsp;</p> <p></p>`,
      image: "",
      options: [
        `\\( \\mathbf{X}=\\mathbf{A} \\)`,
        `\\( \\mathbf{X}=\\mathbf{B} \\)`,
        `\\( \\mathbf{X}=\\mathbf{C} \\)`,
        `\\( \\mathbf{X}=\\mathbf{D} \\)`,
      ],
      answer: "C",
      solution: `<img src="/images/quiz/wqt-dl1/4.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>Refer to the following figure. If \\( \\mathbf{A}=\\mathbf{0} \\) and \\( \\mathbf{B}=\\mathbf{1} \\), what will be the logic states at \\( \\mathbf{X}, \\mathbf{Y} \\) and \\( \\mathbf{Z} \\) ?<br><br><img alt="" src="/images/quiz/wqt-dl1/q5_img3.png" style="max-width: 75%;"><br>&nbsp; </p> <p></p>`,
      image: "",
      options: [
        `\\( \\mathrm{X}=1, \\mathrm{Y}=1, \\mathrm{Z}=0 \\)`,
        `\\( \\mathrm{X}=1, Y=0, Z=0 \\)`,
        `\\( \\mathrm{X}=0, \\mathrm{Y}=0, \\mathrm{Z}=1 \\)`,
        `\\( X=0, Y=1, Z=0 \\)`,
      ],
      answer: "C",
      solution: `<img src="/images/quiz/wqt-dl1/5.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>The simplification of the Boolean expression \\( (\\overline{\\overline{\\boldsymbol{A}} \\boldsymbol{B} \\overline{\\boldsymbol{C}}})+(\\overline{\\boldsymbol{A} \\overline{\\boldsymbol{B}} \\boldsymbol{C}}) \\) is </p> <p>&nbsp;</p> <p></p>`,
      image: "",
      options: [
        `0`,
        `1`,
        `\\( \\mathbf{A} \\)`,
        `\\( \\mathbf{B C} \\)`,
      ],
      answer: "B",
      solution: `<img src="/images/quiz/wqt-dl1/6.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>In the given truth table, \\( f(x,y) \\) represent the Boolean function.<br> \$\$ \\begin{array}{|c|c|c|} \\hline x &amp; y &amp; f(x,y) \\\\ \\hline 0 &amp; 0 &amp; 1 \\\\ \\hline 0 &amp; 1 &amp; 0 \\\\ \\hline 1 &amp; 0 &amp; 0 \\\\ \\hline 1 &amp; 1 &amp; 1 \\\\ \\hline \\end{array} \$\$ </p> <p></p>`,
      image: "",
      options: [
        `\\( x \\leftrightarrow y \\)`,
        `\\( x \\wedge y \\)`,
        `\\( x \\vee y \\)`,
        `\\( x \\rightarrow y \\)`,
      ],
      answer: "A",
      solution: `<img src="/images/quiz/wqt-dl1/7.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p> \\( (A+C’)(B’+C’) \\) simplifies to </p> <p></p>`,
      image: "",
      options: [
        `\\( AC’+B’ \\)<br>&nbsp;`,
        `\\( C(A’+B’) \\)<br>&nbsp;`,
        `\\( BC’+A \\)<br>&nbsp;`,
        `\\( AB’+C’ \\)`,
      ],
      answer: "D",
      solution: `<img src="/images/quiz/wqt-dl1/8.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>In digital logic, if \\( A\\oplus B=C \\), then which one of the following is true? </p> <p></p>`,
      image: "",
      options: [
        `\\( A\\oplus C=B \\)`,
        `\\( B\\oplus C=A \\)`,
        `\\( A\\oplus B\\oplus C=0 \\)`,
        `Both (A) and (B)`,
      ],
      answer: ["A", "B", "C", "D"],
      solution: `<img src="/images/quiz/wqt-dl1/9.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>In Boolean algebra \\( 1+1+1+1\\dots\\dots 800 \\) times ones \\( =&nbsp; \\) ________&nbsp; . </p> <p></p>`,
      image: "",
      options: [
        `\\( 1 \\)`,
        `\\( 0 \\)`,
        `\\( 11 \\)`,
        `\\( 800 \\)`,
      ],
      answer: "A",
      solution: `<img src="/images/quiz/wqt-dl1/10.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p>Applying DeMorgan's Law to \\( f=\\overline{\\overline{\\overline{A B}+\\bar{C}}(E+\\bar{D}}) \\) will result in: </p> <p></p>`,
      image: "",
      options: [
        `\\( f=\\bar{A}+\\bar{B}+\\bar{C}+\\bar{E}+D \\)`,
        `\\( f=\\bar{A} \\bar{B} \\bar{C}+E \\bar{D} \\)`,
        `\\( f=\\bar{A} \\bar{B} \\bar{C}+(E+\\bar{D}) \\)`,
        `\\( f=\\bar{A}+\\bar{B}+\\bar{C}+\\bar{E} D \\)`,
      ],
      answer: "D",
      solution: `<img src="/images/quiz/wqt-dl1/11.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p>The Boolean function obtained by adding an inverter to each and every input of an \\( \\text{AND} \\) gate is: </p> <p></p>`,
      image: "",
      options: [
        `\\( \\text{OR} \\)`,
        `\\( \\text{XOR} \\)`,
        `\\( \\text{NAND} \\)`,
        `\\( \\text{NOR} \\)`,
      ],
      answer: "D",
      solution: `<img src="/images/quiz/wqt-dl1/12.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p>What does the following circuit evaluate to?<br><img alt="" src="/images/quiz/wqt-dl1/q13_img4.png" style="max-width: 75%;"></p> <p></p>`,
      image: "",
      options: [
        `0`,
        `1`,
        `\\( A^{\\prime} \\)`,
        `\\( A \\)`,
      ],
      answer: "C",
      solution: `<img src="/images/quiz/wqt-dl1/13.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p>The logic circuit shown can be minimized to<br><img alt="" src="/images/quiz/wqt-dl1/q14_img5.png" style="max-width: 75%;"></p> <p>&nbsp;</p> <p>&nbsp;</p> <p><br><img alt="" src="/images/quiz/wqt-dl1/q14_img6.png" style="max-width: 75%;"></p> <p></p>`,
      image: "",
      options: [
        `\\( \\mathbf{A} \\)`,
        `\\( \\mathbf{B} \\)`,
        `\\( \\mathbf{C} \\)`,
        `\\( \\mathbf{D} \\)`,
      ],
      answer: "D",
      solution: `<img src="/images/quiz/wqt-dl1/14.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p>Simplification of the Boolean expression \\( \\boldsymbol{A B}+\\boldsymbol{A B C}+\\boldsymbol{A B C D}+\\boldsymbol{A B C D E}+\\boldsymbol{A B C D E F} \\) yields which of the following results? </p> <p></p>`,
      image: "",
      options: [
        `\\( \\mathrm{AB} \\)`,
        `\\( \\mathrm{AB}+\\mathbf{C D}+\\mathbf{E F} \\)`,
        `\\( A B C D E F \\)`,
        `\\( \\mathbf{A}+\\mathbf{B}+\\mathbf{C}+\\mathbf{D}+\\mathbf{E}+\\mathbf{F} \\)`,
      ],
      answer: "A",
      solution: `<img src="/images/quiz/wqt-dl1/15.png" style="max-width: 75%;">`
    },
  ]
});
registerTest({
  series: "weekly-cs-gate-2027",
  name: "WQT - Digital Logic-2|Boolean algebra",
  date: "Aug 06, 2026",
  questions: [
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>If \\( f(a, b, c)=a+b+c \\) so, what is the value of \\( f\\left[a, b,(a b)^{\\prime}\\right] \\) ? </p> <p></p>`,
      image: "",
      options: [
        `0`,
        `1`,
        `\\( a b \\)`,
        `a'b'`,
      ],
      answer: "B",
      solution: `<img src="/images/quiz/wqt-dl2/1.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>What is the simplified form for the following boolean expression:<br> \$\$ F(x, y, z)=x y z+\\overline{(\\bar{x}+y z)}+\\overline{(\\bar{x} y)} z \$\$ </p> <p></p>`,
      image: "",
      options: [
        `\\( x y z \\)`,
        `\\( x+y \\) 'z`,
        `\\( y+x z \\)`,
        `\\( x^{\\prime}(y+z) \\)`,
      ],
      answer: "B",
      solution: `<img src="/images/quiz/wqt-dl2/2.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>If the boolean function \\( F=\\left(A^{\\prime} B+B D+C\\right)^{\\prime}+\\left(B^{\\prime} C D A\\right)+\\left(C A^{\\prime}+A C+D^{\\prime} E\\right)^{\\prime} \\) , what is the value of \\( F . F^{\\prime} \\) ?<br>&nbsp; </p> <p></p>`,
      image: "",
      options: [
        `\\( A+B+C+D \\)`,
        `1`,
        `\\( A^{\\prime} B \\)`,
        `0`,
      ],
      answer: "D",
      solution: `<img src="/images/quiz/wqt-dl2/3.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>Consider the function \\( f(x, y) \\) where \\( \\oplus \\) is an Exclusive OR operator:<br> \\( f(x, y)=(x y) \\oplus\\left(x^{\\prime}+y\\right) \\oplus\\left(x+y^{\\prime}\\right) \\oplus\\left(x y^{\\prime}\\right) \\oplus\\left(x^{\\prime}+y^{\\prime}\\right) \\) <br>What is the value of \\( f(1, y) . f(0, y) \\) ? </p> <p></p>`,
      image: "",
      options: [
        `0`,
        `1`,
        `\\( x+y \\) '`,
        `\\( y^{\\prime} \\)`,
      ],
      answer: "D",
      solution: `<img src="/images/quiz/wqt-dl2/4.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>Which of the following boolean equations is/are correct?</p> <p></p>`,
      image: "",
      options: [
        `\\( x y+x y^{\\prime}=x \\)`,
        `\\( (x+y)\\left(x+y^{\\prime}\\right)=y \\)`,
        `\\( x y z+x^{\\prime} y+x y z^{\\prime}=y \\)`,
        `\\( (A+B)^{\\prime}\\left(A^{\\prime}+B^{\\prime}\\right)^{\\prime}=0 \\)`,
      ],
      answer: ["A", "C", "D"],
      solution: `<img src="/images/quiz/wqt-dl2/5.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p>The combinatorial circuit shown below takes three 1-bit inputs: A, B, and C, and produces one 1-bit output. The relationship between the inputs and the output is shown below as a truth table. The circuit contains two identical, unknown gates \\( \\mathrm{X} \\).<br><img alt="" src="/images/quiz/wqt-dl2/q6_img1.png" style="max-width: 100%;"><br>What is gate \\( X \\) ? </p> <p></p>`,
      image: "",
      options: [
        `AND`,
        `XNOR`,
        `NAND`,
        `XOR`,
      ],
      answer: "D",
      solution: `<img src="/images/quiz/wqt-dl2/6.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p>The inhibition operation, also known as the AND-NOT operation, is a digital logic function where the output is true (i.e. 1) only if the first input is true (i.e. 1) and the second input is false (i.e. 0). In other words, it produces a high output only when the controlling input (first input) is high and the inhibited input (second input) is low.<br>Now consider the following two statements:<br>S1: The inhibition operation is neither commutative nor associative.<br>S2: The exclusive-OR operation is commutative and associative.<br>Which of the following statement(s) is/are correct?</p> <p></p>`,
      image: "",
      options: [
        `Only S1`,
        `Only S2`,
        `Neither S1 nor S2`,
        `Both S1 and S2`,
      ],
      answer: "D",
      solution: `<img src="/images/quiz/wqt-dl2/7.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p>Determine the input conditions needed to produce \\( x=1 \\) for the circuit below.<br><img alt="" src="/images/quiz/wqt-dl2/q8_img2.png" style="max-width: 100%;"><br>&nbsp; </p> <p></p>`,
      image: "",
      options: [
        `\\( A=1 \\cdot B=0, C=0 \\)`,
        `\\( A=0, B=0, C=1 \\)`,
        `\\( A=1, B=1, C=0 \\)`,
        `\\( A=0, B=1, C=1 \\)`,
      ],
      answer: "D",
      solution: `<img src="/images/quiz/wqt-dl2/8.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p>The complement of the function \\( F 1=\\left(\\left(A B^{\\prime}\\right)^{\\prime}+C\\right) D^{\\prime}+A C^{\\prime} \\) is: </p> <p></p>`,
      image: "",
      options: [
        `\\( A'D + CD \\)`,
        `\\( \\left(A+B^{\\prime}\\right) C \\)`,
        `\\( \\left(A^{\\prime}+B\\right)\\left(C^{\\prime}+D\\right) \\)`,
        `\\( \\left(A+B^{\\prime}\\right)\\left(C+D^{\\prime}\\right) \\)`,
      ],
      answer: "A",
      solution: `<img src="/images/quiz/wqt-dl2/9.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>Which of the following boolean equations is/are correct?</p> <p></p>`,
      image: "",
      options: [
        `\\( \\left(a^{\\prime} c^{\\prime}\\right)^{\\prime}\\left(a+c^{\\prime}\\right)+b+\\left(b^{\\prime}+c^{\\prime}\\right)^{\\prime}=a+b \\)`,
        `\\( a^{\\prime} c+a b^{\\prime}+(a+c)^{\\prime}+a b=1 \\)`,
        `\\( c\\left(a b+a b^{\\prime}\\right)+(a+b)^{\\prime} c=a+b^{\\prime} \\)`,
        `\\( \\left(\\left(b+b^{\\prime}\\right)^{\\prime}+(a+c)\\left(a+c^{\\prime}\\right)\\right)\\left(a^{\\prime}\\left(a^{\\prime}+b\\right)\\right)=0 \\)`,
      ],
      answer: ["A", "B", "D"],
      solution: `<img src="/images/quiz/wqt-dl2/10.png" style="max-width: 75%;">`
    },
  ]
});

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
      solution: `<img src="/images/quiz/wqt-dl3/1.png" style="max-width: 75%;">`
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
      solution: `<img src="/images/quiz/wqt-dl3/2.png" style="max-width: 75%;">`
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
      solution: `<img src="/images/quiz/wqt-dl3/3.png" style="max-width: 75%;">`
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
      solution: `<p><a href="https://www.youtube.com/watch?v=3Wj-BXY41MU&t=459s" target="_blank">Detailed Video Solution</a></p><img src="/images/quiz/wqt-dl3/4.png" style="max-width: 75%;">`
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
      solution: `<p><a href="https://www.youtube.com/watch?v=3Wj-BXY41MU&t=1720s" target="_blank">Detailed Video Solution</a></p><img src="/images/quiz/wqt-dl3/5.png" style="max-width: 75%;">`
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
      solution: `<img src="/images/quiz/wqt-dl3/6.png" style="max-width: 75%;">`
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
      solution: `<img src="/images/quiz/wqt-dl3/7.png" style="max-width: 75%;">`
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
      solution: `<img src="/images/quiz/wqt-dl3/8.png" style="max-width: 75%;">`
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
      answer: ["A", "B"],
      solution: `<img src="/images/quiz/wqt-dl3/9.png" style="max-width: 75%;">`
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
      answer: ["C", "D"],
      solution: `<img src="/images/quiz/wqt-dl3/10.png" style="max-width: 75%;">`
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
      answer: ["A", "C"],
      solution: `<img src="/images/quiz/wqt-dl3/11.png" style="max-width: 75%;">`
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
      answer: ["B", "D"],
      solution: `<img src="/images/quiz/wqt-dl3/12.png" style="max-width: 75%;">`
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
      answer: ["A", "D"],
      solution: `<img src="/images/quiz/wqt-dl3/13.png" style="max-width: 75%;">`
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
      solution: `<img src="/images/quiz/wqt-dl3/14.png" style="max-width: 75%;">`
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
      solution: `<p><a href="https://www.youtube.com/watch?v=3Wj-BXY41MU&t=2659s" target="_blank">Detailed Video Solution</a></p><img src="/images/quiz/wqt-dl3/15.png" style="max-width: 75%;">`
    },
  ]
});

registerTest({
  series: "weekly-cs-gate-2027",
  name: "WQT - Digital Logic-4|Boolean algebra",
  date: "Aug 20, 2026",
  questions: [
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>Simplify the following expression:<br> \$\$ (\\overline{A B})(\\mathrm{A}^{\\prime}+B)(\\mathrm{B}^{\\prime}+B) \$\$ </p> <p></p>`,
      image: "",
      options: [
        `\\( \\mathrm{A}^{\\prime} \\)<br>&nbsp;`,
        `\\( \\mathrm{B}^{\\prime} \\)<br>&nbsp;`,
        `\\( \\mathrm{A}^{\\prime}\\mathrm{B}^{\\prime} \\) <br>&nbsp;`,
        `\\( \\mathrm{A}^{\\prime}+\\mathrm{B}^{\\prime} \\)`,
      ],
      answer: "A",
      solution: `<img src="/images/quiz/wqt-dl4/1.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>The value of the Boolean expression (with usual definitions) \\( (A’BC’)’ +(AB’C)’ \\) is </p> <p></p>`,
      image: "",
      options: [
        `\\( 0 \\)<br>&nbsp;`,
        `\\( 1 \\)<br>&nbsp;`,
        `\\( A \\)<br>&nbsp;`,
        `\\( BC \\)`,
      ],
      answer: "B",
      solution: `<img src="/images/quiz/wqt-dl4/2.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>What is the minimum number of elementary Boolean operations (AND / OR / NOT) required to construct an equivalent Boolean expression of \\( A B+A \\mathrm{B}^{\\prime}+\\mathrm{A}^{\\prime}C(\\mathrm{X}^{\\prime} \\) denotes the complement of \\( X) \\) ? </p> <p></p>`,
      image: "",
      options: [
        `\\( 1 \\)<br>&nbsp;`,
        `\\( 3 \\)<br>&nbsp;`,
        `\\( 5 \\)<br>&nbsp;`,
        `\\( 7 \\) <p>&nbsp;</p>`,
      ],
      answer: "A",
      solution: `<img src="/images/quiz/wqt-dl4/3.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>Let \\( \\text{a, b, c} \\) be members of a Boolean algebra \\( \\text{B} \\). Define \\( a \\rightarrow b \\stackrel{\\text { def }}{=} \\neg a \\vee b \\). Which of the following statements is correct? </p> <p></p>`,
      image: "",
      options: [
        `\\( a \\rightarrow(b \\rightarrow c)=b \\rightarrow(a \\rightarrow c) \\) <br>&nbsp;`,
        `\\( a \\rightarrow(b \\rightarrow c)=a \\rightarrow(c \\rightarrow b) \\) <br>&nbsp;`,
        `\\( a \\rightarrow(b \\rightarrow c)=b \\rightarrow(c \\rightarrow a) \\) <br>&nbsp;`,
        `\\( a \\rightarrow(b \\rightarrow c)=c \\rightarrow(a \\rightarrow b) \\) <p>&nbsp;</p>`,
      ],
      answer: "A",
      solution: `<img src="/images/quiz/wqt-dl4/4.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>Applying DeMorgan's theorem to the expression&nbsp; &nbsp; \\( \\overline{\\overline{(X+Y)}+\\bar{Z}} \\), we get </p> <p></p>`,
      image: "",
      options: [
        `\\( (X+Y) Z \\)<br>&nbsp;`,
        `\\( (\\mathrm{X}^{\\prime}+\\mathrm{Y}^{\\prime})\\mathrm{Z}^{\\prime} \\) <br>&nbsp;`,
        `\\( (\\mathrm{X}^{\\prime}+\\mathrm{Y}^{\\prime}) Z \\) <br>&nbsp;`,
        `\\( (X+Y) \\mathrm{Z}^{\\prime} \\)`,
      ],
      answer: "A",
      solution: `<img src="/images/quiz/wqt-dl4/5.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "NAT",
      text: `<p></p> <p>Consider the Boolean function F( \\( x1 \\), \\( x2 \\), . . . , \\( x10 \\)) realised by the following combinational circuit. </p> <p><img alt="" src="/images/quiz/wqt-dl4/q6_img1.png" style="max-width: 100%;"></p> <p>Determine the number of input combinations for which the output function F realised by the circuit becomes <strong>true</strong> (logic 1).</p> <p></p>`,
      image: "",
      options: [],
      answer: "943",
      solution: `<img src="/images/quiz/wqt-dl4/6.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>The product of maxterms \\( f(x, y, z)=\\Pi M(0,2,4,7) \\) can be written as: </p> <p></p>`,
      image: "",
      options: [
        `\\( f(x, y, z)=\\sum m(1,3,5,6) \\)<br>&nbsp;`,
        `\\( f(x, y, z)=\\sum m(0,2,4,7) \\)<br>&nbsp;`,
        `\\( f(x, y, z)=\\left(\\sum m(1,3,5,6)\\right)^{\\prime} \\)<br>&nbsp;`,
        `\\( f(x, y, z)=M 0+M 2+M 4+M 7 \\)`,
      ],
      answer: ["A"],
      solution: `<img src="/images/quiz/wqt-dl4/7.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>Which of the following Boolean equations is in the form of product of maxterms of the function<br> \\( \\mathrm{F}(\\mathrm{A}, \\mathrm{B}, \\mathrm{C}) \\) ? </p> <p></p>`,
      image: "",
      options: [
        `\\( F=\\left(A^{\\prime} B C\\right)\\left(A B C^{\\prime}\\right)(A B C) \\) <br>&nbsp;`,
        `\\( F=\\left(A^{\\prime}+B+C^{\\prime}\\right)\\left(A^{\\prime}+C\\right)\\left(A+B^{\\prime}+C\\right) \\) <br>&nbsp;`,
        `\\( \\mathrm{F}=(\\mathrm{A}+\\mathrm{B}+\\mathrm{C})\\left(\\mathrm{A}^{\\prime}+\\mathrm{B}+\\mathrm{C}\\right)\\left(\\mathrm{A}+\\mathrm{B}^{\\prime}+\\mathrm{C}\\right) \\) <br>&nbsp;`,
        `\\( F=A B^{\\prime} C+A^{\\prime} B C^{\\prime}+A^{\\prime} B C^{\\prime} \\)`,
      ],
      answer: ["C"],
      solution: `<img src="/images/quiz/wqt-dl4/8.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p>The output \\( F \\) of the circuit equals logical: </p> <p><br>&nbsp; &nbsp;<img alt="" src="/images/quiz/wqt-dl4/q9_img2.png" style="max-width: 100%;"> </p> <p></p>`,
      image: "",
      options: [
        `\\( \\mathrm{A}^{\\prime}+\\mathrm{B}^{\\prime} \\) <br>&nbsp;`,
        `\\( \\mathrm{A}^{\\prime} \\)<br>&nbsp;`,
        `\\( \\mathrm{A}^{\\prime}+\\mathrm{B} \\)<br>&nbsp;`,
        `\\( \\mathrm{A}+\\mathrm{B}^{\\prime} \\)`,
      ],
      answer: "D",
      solution: `<img src="/images/quiz/wqt-dl4/9.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p>The equivalent canonical (standard) form for the following logical expression \\( \\mathbf{F}=\\mathbf{A B}+\\mathbf{C} \\) is </p> <p></p>`,
      image: "",
      options: [
        `\\( \\mathrm{F}=\\mathrm{ABC}+\\mathrm{A}^{\\prime}&nbsp;\\mathrm{BC}+\\mathrm{A} \\mathrm{B}^{\\prime}&nbsp;\\mathrm{C}+\\mathrm{A}^{\\prime}\\mathrm{B}^{\\prime}&nbsp;\\mathrm{C} \\) <br>&nbsp;`,
        `\\( \\mathrm{F}=\\mathrm{ABC}+\\mathrm{A} \\mathrm{B}^{\\prime}&nbsp;\\mathrm{C}+\\mathrm{A}^{\\prime}\\mathrm{B}^{\\prime}&nbsp;\\mathrm{C}+\\mathrm{AB} \\mathrm{C}^{\\prime} \\) <br>&nbsp;`,
        `\\( \\mathrm{F}=\\mathrm{ABC}+\\mathrm{A}^{\\prime}\\mathrm{BC}+\\mathrm{A}\\mathrm{B}^{\\prime}&nbsp;\\mathrm{C}+\\mathrm{A}^{\\prime}&nbsp;\\mathrm{B}^{\\prime}&nbsp;\\mathrm{C}+\\mathrm{AB} \\mathrm{C}^{\\prime} \\) <br>&nbsp;`,
        `<p data-pm-slice="1 1 []">None of the above</p>`,
      ],
      answer: "C",
      solution: `<img src="/images/quiz/wqt-dl4/10.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p>The function \\( \\mathbf{F}(\\mathbf{A}, \\mathbf{B}, \\mathbf{C})=\\sum(\\mathbf{1}, \\mathbf{2}, \\mathbf{3}, \\mathbf{5}, \\mathbf{7}) \\) is equivalent to </p> <p></p>`,
      image: "",
      options: [
        `\\( \\mathrm{C}^{\\prime}+\\mathrm{A}^{\\prime}B \\) <br>&nbsp;`,
        `\\( C+A B \\)<br>&nbsp;`,
        `\\( C+\\mathrm{A}^{\\prime}B \\)<br>&nbsp;`,
        `\\( C+A\\mathrm{B}^{\\prime} \\)`,
      ],
      answer: "C",
      solution: `<img src="/images/quiz/wqt-dl4/11.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p>From the truth table below, determine the standard \\( \\mathbf{S O P} \\) expression.<br><img alt="" src="/images/quiz/wqt-dl4/q12_img3.png" style="max-width: 100%;"> </p> <p></p>`,
      image: "",
      options: [
        `\\( \\quad X=\\mathrm{A}^{\\prime}\\mathrm{B}^{\\prime}\\mathrm{C}^{\\prime}+A B C+A \\mathrm{B}^{\\prime}C \\) <br>&nbsp;`,
        `\\( \\quad \\mathrm{X}=\\mathrm{ABC}+\\mathrm{ABC}+\\mathrm{ABC} \\) <br>&nbsp;`,
        `\\( \\quad X=A \\mathrm{B}^{\\prime}C+\\mathrm{A}^{\\prime}B C+A B\\mathrm{C}^{\\prime} \\) <br>&nbsp;`,
        `\\( \\quad X=\\mathrm{A}^{\\prime}\\mathrm{B}^{\\prime}C+\\mathrm{A}^{\\prime}B C+A B \\mathrm{C}^{\\prime} \\)`,
      ],
      answer: "D",
      solution: `<img src="/images/quiz/wqt-dl4/12.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p>Consider the circuit from Figure below.<br><img alt="" src="/images/quiz/wqt-dl4/q13_img4.png" style="max-width: 100%;"><br>Function \\( F \\) is: </p> <p></p>`,
      image: "",
      options: [
        `\\( F(A, B)=A B \\)<br>&nbsp;`,
        `\\( F(A, B)=A^{\\prime} B^{\\prime} \\)<br>&nbsp;`,
        `\\( F(A, B)=A B^{\\prime} \\)<br>&nbsp;`,
        `none of the above`,
      ],
      answer: "D",
      solution: `<img src="/images/quiz/wqt-dl4/13.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p>The logic function \\( \\mathrm{F}(\\mathrm{A}, \\mathrm{B}) \\) implemented by the circuit shown in Figure below is equivalent to the logic function of a:<br><img alt="" src="/images/quiz/wqt-dl4/q14_img5.png" style="max-width: 100%;"> </p> <p></p>`,
      image: "",
      options: [
        `\\( 2 \\)-input <strong>AND</strong> gate<br>&nbsp;`,
        `\\( 2 \\)-input <strong>NAND</strong> gate<br>&nbsp;`,
        `\\( 2 \\)-input <strong>XOR</strong> gate<br>&nbsp;`,
        `none of the above`,
      ],
      answer: "D",
      solution: `<img src="/images/quiz/wqt-dl4/14.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p>The truth table for a Boolean expression is specified by the correspondence \\( (P, Q, R) \\rightarrow \\) \\( S \\) where \\( (0,0,0) \\rightarrow 0,(0,0,1) \\rightarrow 1,(0,1,0) \\rightarrow 0,(0,1,1) \\rightarrow 1,(1,0,0) \\rightarrow 0,(1,0,1) \\rightarrow \\) \\( 0,(1,1,0) \\rightarrow 0,(1,1,1) \\rightarrow 1 \\). A Boolean expression having this truth table is </p> <p></p>`,
      image: "",
      options: [
        `\\( [(\\sim P \\wedge \\sim Q) \\vee Q] \\vee R \\) <br>&nbsp;`,
        `\\( [(\\sim P \\wedge \\sim Q) \\wedge Q] \\wedge R \\) <br>&nbsp;`,
        `\\( [(\\sim P \\wedge \\sim Q) \\vee \\sim Q] \\wedge R \\)<br>&nbsp;`,
        `\\( [(\\sim P \\wedge \\sim Q) \\vee Q] \\wedge R \\)`,
      ],
      answer: "D",
      solution: `<img src="/images/quiz/wqt-dl4/15.png" style="max-width: 75%;">`
    },
  ]
});

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
      solution: `<img src="/images/quiz/wqt-dl5/1.png" style="max-width: 75%;">`
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
      solution: `<img src="/images/quiz/wqt-dl5/2.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0,
      type: "NAT",
      text: `<p>The number of bytes required to represent the decimal number \\( 1856357 \\) in packed BCD (Binary Coded Decimal) form is ___________. </p>`,
      image: "",
      options: [],
      answer: "4",
      solution: `<img src="/images/quiz/wqt-dl5/3.png" style="max-width: 75%;">`
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
      solution: `<img src="/images/quiz/wqt-dl5/4.png" style="max-width: 75%;">`
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
      solution: `<img src="/images/quiz/wqt-dl5/5.png" style="max-width: 75%;">`
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
      solution: `<img src="/images/quiz/wqt-dl5/6.png" style="max-width: 75%;">`
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
      solution: `<img src="/images/quiz/wqt-dl5/7.png" style="max-width: 75%;">`
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
      solution: `<img src="/images/quiz/wqt-dl5/8.png" style="max-width: 75%;">`
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
      solution: `<img src="/images/quiz/wqt-dl5/9.png" style="max-width: 75%;">`
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
      solution: `<img src="/images/quiz/wqt-dl5/10.png" style="max-width: 75%;">`
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
      solution: `<img src="/images/quiz/wqt-dl5/11.png" style="max-width: 75%;">`
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
      solution: `<img src="/images/quiz/wqt-dl5/12.png" style="max-width: 75%;">`
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
      solution: `<img src="/images/quiz/wqt-dl5/13.png" style="max-width: 75%;">`
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
      solution: `<img src="/images/quiz/wqt-dl5/14.png" style="max-width: 75%;">`
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
      solution: `<img src="/images/quiz/wqt-dl5/15.png" style="max-width: 75%;">`
    },
  ]
});

registerTest({
  series: "weekly-cs-gate-2027",
  name: "WQT - Digital Logic-6|Number System",
  date: "Sept 3, 2026",
  questions: [
    {
      marks: 1,
      neg: 0,
      type: "NAT",
      text: `<p>Let \\( X \\) be the number of distinct \\( 16 \\)-bit integers in \\( 2's \\) complement representation. Let \\( Y \\) be the number of distinct \\( 16 \\)-bit integers in sign magnitude representation Then \\( X - Y \\) is______. </p>`,
      image: "",
      options: [],
      answer: "1",
      solution: `<img src="/images/quiz/wqt-dl6/1.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>Zero has two representations in</p> <p></p>`,
      image: "",
      options: [
        `Sign-magnitude<br>&nbsp;`,
        `\\( 2's \\) complement<br>&nbsp;`,
        `\\( 1's \\) complement<br>&nbsp;`,
        `None of the above`,
      ],
      answer: ["A", "C"],
      solution: `<img src="/images/quiz/wqt-dl6/2.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>Given that numbers A and B are two \\( 8 \\)-bit 2's complement numbers with \\( \\mathrm{A}=11111111, \\mathrm{~B}=11111111 \\). Then sum \\( A+B \\) is \\( \\qquad \\) </p> <p></p>`,
      image: "",
      options: [
        `\\( 00000010 \\)<br>&nbsp;`,
        `\\( 11111100 \\)<br>&nbsp;`,
        `\\( 11111110 \\)<br>&nbsp;`,
        `\\( 00000000 \\)`,
      ],
      answer: "C",
      solution: `<img src="/images/quiz/wqt-dl6/3.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>The \\( 2 's \\) complement representation of the number \\( (-100)_{10} \\) in an \\( 8 \\) bit computer is </p> <p></p>`,
      image: "",
      options: [
        `\\( 10011011 \\)<br>&nbsp;`,
        `\\( 01100100 \\)<br>&nbsp;`,
        `\\( 11100100 \\)<br>&nbsp;`,
        `\\( 10011100 \\)`,
      ],
      answer: "D",
      solution: `<img src="/images/quiz/wqt-dl6/4.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>The smallest integer that can be represented by an \\( 8\\text{-bit} \\) number in \\( 2's \\) complement form is </p> <p></p>`,
      image: "",
      options: [
        `\\( -256 \\)<br>&nbsp;`,
        `\\( -128 \\)<br>&nbsp;`,
        `\\( -127 \\)<br>&nbsp;`,
        `\\( 0 \\)`,
      ],
      answer: "B",
      solution: `<img src="/images/quiz/wqt-dl6/5.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>The number \\( -6 \\) can be represented as \\( 1010 \\) in \\( 4 \\)-bit \\( 2 \\)'s complement representation. Which of the following is/are CORRECT \\( 2 \\) 's complement representation(s) of \\( -6 \\)? </p> <p></p>`,
      image: "",
      options: [
        `\\( 1000 \\: 1010 \\) in \\( 8 \\) -bits<br>&nbsp;`,
        `\\( 1111 \\: 1010 \\) in \\( 8 \\)-bits<br>&nbsp;`,
        `\\( 1000 \\: 0000 \\: 0000 \\:1010 \\) in \\( 16 \\)-bits<br>&nbsp;`,
        `\\( 1111 \\: 1111 \\: 1111 \\: 1010 \\) in \\( 16 \\)-bits`,
      ],
      answer: ["B", "D"],
      solution: `<img src="/images/quiz/wqt-dl6/6.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p>Which of the following is the representation of the decimal number \\( (-147) \\) in \\( 2's \\) compliment notation on a \\( 12 \\)-bit machine?<br>&nbsp; </p> <p></p>`,
      image: "",
      options: [
        `\\( 111101101100 \\)<br>&nbsp;`,
        `\\( 110001001101 \\)<br>&nbsp;`,
        `\\( 111101101101 \\)<br>&nbsp;`,
        `\\( 000001101101 \\)`,
      ],
      answer: "C",
      solution: `<img src="/images/quiz/wqt-dl6/7.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p>The maximum and minimum value represented in signed \\( 16 \\)-bit \\( 2's \\) compliment representation are<br>&nbsp; </p> <p></p>`,
      image: "",
      options: [
        `\\( -32768 \\) and \\( 32767 \\)<br>&nbsp;`,
        `\\( 0 \\) and \\( 32767 \\)<br>&nbsp;`,
        `\\( 0 \\) and \\( 65535 \\)<br>&nbsp;`,
        `\\( -16384 \\) and \\( 16383 \\)`,
      ],
      answer: "A",
      solution: `<img src="/images/quiz/wqt-dl6/8.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p>In an \\( 8 \\)-bit representation of computer system, the decimal number \\( 47 \\) has to be subtracted from \\( 38 \\) and the result in binary \\( 2's \\) complement is \\( \\qquad \\) </p> <p></p>`,
      image: "",
      options: [
        `\\( 11110111 \\)<br>&nbsp;`,
        `\\( 10001001 \\)<br>&nbsp;`,
        `\\( 11111001 \\)<br>&nbsp;`,
        `\\( 11110001 \\)`,
      ],
      answer: "A",
      solution: `<img src="/images/quiz/wqt-dl6/9.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "NAT",
      text: `<p>In an \\( 8 \\) bit representation of computer system the decimal number \\( 26 \\) has to be subtracted from \\( 22 \\) and the result in binary \\( 2 \\)'s complement is \\( -------- \\) </p>`,
      image: "",
      options: [],
      answer: "11111100",
      solution: `<img src="/images/quiz/wqt-dl6/10.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p>Subtract \\( (1010)_{2} \\) from \\( (1101)_{2} \\) using first complement </p> <p></p>`,
      image: "",
      options: [
        `\\( (1100)_{2} \\)<br>&nbsp;`,
        `\\( (0101)_{2} \\)<br>&nbsp;`,
        `\\( (1001)_{2} \\)<br>&nbsp;`,
        `\\( (0011)_{2} \\)`,
      ],
      answer: "D",
      solution: `<img src="/images/quiz/wqt-dl6/11.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p>The range of \\( n \\)-bit signed magnitude representation is </p> <p></p>`,
      image: "",
      options: [
        `\\( 0 \\) to \\( 2^{n}-1 \\)<br>&nbsp;`,
        `\\( -\\left(2^{n-1}-1\\right) \\) to \\( \\left(2^{n-1}-1\\right) \\)<br>&nbsp;`,
        `\\( -\\left(2^{n}-1\\right) \\) to \\( \\left(2^{n}-1\\right) \\)<br>&nbsp;`,
        `\\( 0 \\) to \\( 2^{n-1}-1 \\)`,
      ],
      answer: "B",
      solution: `<img src="/images/quiz/wqt-dl6/12.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "NAT",
      text: `<p>Determine the base of the numbers for the following operation to be correct: \\( 14 / 2=5 \\) </p>`,
      image: "",
      options: [],
      answer: "6",
      solution: `<img src="/images/quiz/wqt-dl6/13.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "NAT",
      text: `<p>Determine the base of the numbers for the following operation to be correct: \\( 24+17=40 \\) </p>`,
      image: "",
      options: [],
      answer: "11",
      solution: `<img src="/images/quiz/wqt-dl6/14.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "NAT",
      text: `<p>The solutions to the quadratic equation \\( x^{2}-11 \\mathrm{x}+22=0 \\) are \\( x=3 \\) and \\( x=6 \\). What is the base of the numbers? </p>`,
      image: "",
      options: [],
      answer: "8",
      solution: `<img src="/images/quiz/wqt-dl6/15.png" style="max-width: 75%;">`
    },
  ]
});

registerTest({
  series: "weekly-cs-gate-2027",
  name: "WQT - Digital Logic-7|Number System",
  date: "Sept 10, 2026",
  questions: [
    {
      marks: 1,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>Add the following sets of numbers in \\( 2's \\) complement and indicate when an overflow has occurred. Use \\( 4 \\) bits. </p> <p></p>`,
      image: "",
      options: [
        `\\( 2+5 \\)<br>&nbsp;`,
        `\\( 5+7 \\)<br>&nbsp;`,
        `\\( 4-7 \\)<br>&nbsp;`,
        `\\( -4+7 \\)`,
      ],
      answer: ["B"],
      solution: `<img src="/images/quiz/wqt-dl7/1.png" style="max-width: 75%;"><br><a href="https://www.youtube.com/watch?v=UO8TTFJC9OE&t=1956s" target="_blank" style="display:inline-block; margin-top: 10px; color: #007bff; font-weight: bold; text-decoration: none;">▶ Watch Video Solution</a>`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>What decimal value is represented by the following \\( 8 \\)-bit \\( 2's \\) complement bit pattern (given in hexadecimal notation)?<br><br> \$\$ E 1_{16}=-----------_{10} \$\$ <br>&nbsp; </p> <p></p>`,
      image: "",
      options: [
        `\\( 31 \\)<br>&nbsp;`,
        `\\( -31 \\)<br>&nbsp;`,
        `\\( -63 \\)<br>&nbsp;`,
        `\\( 63 \\)`,
      ],
      answer: "B",
      solution: `<img src="/images/quiz/wqt-dl7/2.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>Which of the bit patterns below is the \\( 8 \\)-bit \\( 2's \\) complement representation of the decimal number \\( 84 \\) ? </p> <p></p>`,
      image: "",
      options: [
        `Not representable<br>&nbsp;`,
        `\\( 01010100 \\)<br>&nbsp;`,
        `\\( 10101100 \\)<br>&nbsp;`,
        `\\( 00100011 \\)`,
      ],
      answer: "B",
      solution: `<a href="https://www.youtube.com/watch?v=JxK_KfSa4GY" target="_blank" style="display:inline-block; margin-top: 10px; color: #007bff; font-weight: bold; text-decoration: none;">▶ Watch Video Solution</a>`
    },
    {
      marks: 1,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>In which of the following addition problems (using two's complement notation) does an overflow error occur?</p> <p></p>`,
      image: "",
      options: [
        `\\( 1100+1100 \\)<br>&nbsp;`,
        `\\( 1100+0100 \\)<br>&nbsp;`,
        `\\( 0011+1010 \\)<br>&nbsp;`,
        `\\( 0100+0100 \\)`,
      ],
      answer: ["D"],
      solution: `<img src="/images/quiz/wqt-dl7/4.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>A variable that takes thirteen possible values can be communicated using?</p> <p></p>`,
      image: "",
      options: [
        `Thirteen bits.<br>&nbsp;`,
        `Three bits.<br>&nbsp;`,
        `\\( \\log_{2}13 \\) bits.<br>&nbsp;`,
        `Four bits.`,
      ],
      answer: "D",
      solution: `<img src="/images/quiz/wqt-dl7/5.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "NAT",
      text: `<p>Define the value of \\( r \\) in the following: \\( \\sqrt {(41)_{r}} = (7)_{10} \\) </p>`,
      image: "",
      options: [],
      answer: "12",
      solution: `<img src="/images/quiz/wqt-dl7/6.png" style="max-width: 75%;"><br><a href="https://www.youtube.com/live/vypfAO2bWmg?t=3315s" target="_blank" style="display:inline-block; margin-top: 10px; color: #007bff; font-weight: bold; text-decoration: none;">▶ Watch Video Solution</a>`
    },
    {
      marks: 2,
      neg: 0,
      type: "NAT",
      text: `<p>Assign a binary code in some orderly manner to the 52 playing cards. What is the minimum number of bits required?</p>`,
      image: "",
      options: [],
      answer: "6",
      solution: `<img src="/images/quiz/wqt-dl7/7.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p>Which of the answers below corresponds to the sum and overflow result when the following addition is performed using \\( 8 \\)-bit unsigned: \\( 10011000+1001 \\)? </p> <p></p>`,
      image: "",
      options: [
        `\\( 01111001 \\), with no overflow<br>&nbsp;`,
        `\\( 10100001 \\), with no overflow<br>&nbsp;`,
        `\\( 10100001 \\), with overflow<br>&nbsp;`,
        `\\( 10011001 \\), with no overflow`,
      ],
      answer: "B",
      solution: `<img src="/images/quiz/wqt-dl7/8.png" style="max-width: 75%;"><br><a href="https://www.youtube.com/watch?v=UO8TTFJC9OE&t=3170s" target="_blank" style="display:inline-block; margin-top: 10px; color: #007bff; font-weight: bold; text-decoration: none;">▶ Watch Video Solution</a>`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p>Which of the answers below corresponds to the sum and overflow result when the following addition is performed using \\( 8 \\)-bit \\( 2's \\) complement: \\( 10010000+1001 \\) ? </p> <p></p>`,
      image: "",
      options: [
        `\\( 10011001 \\), with no overflow<br>&nbsp;`,
        `\\( 10001001 \\), with overflow<br>&nbsp;`,
        `\\( 10001001 \\), with no overflow<br>&nbsp;`,
        `\\( 01111001 \\), with overflow`,
      ],
      answer: "C",
      solution: `<img src="/images/quiz/wqt-dl7/9.png" style="max-width: 75%;"><br><a href="https://www.youtube.com/watch?v=UO8TTFJC9OE&t=4550s" target="_blank" style="display:inline-block; margin-top: 10px; color: #007bff; font-weight: bold; text-decoration: none;">▶ Watch Video Solution</a>`
    },
    {
      marks: 2,
      neg: 0,
      type: "NAT",
      text: `<p>Suppose we have two 16-bit 2's complement numbers \$\$ \\begin{align*} &amp;01X1X0X1XX000XXX \\\\ &amp;100XXXX00XXX0X10 \\end{align*} \$\$ where some of the bits have not been identified, and they are represented by \\( x \\). Could the sum of these two numbers possibly result in an overflow? If yes, write \\( 1 \\) in answer. If no, write \\( 0 \\) in answer. </p>`,
      image: "",
      options: [],
      answer: "0",
      solution: `<img src="/images/quiz/wqt-dl7/10.png" style="max-width: 75%;"><br><a href="https://www.youtube.com/watch?v=UO8TTFJC9OE&t=4885s" target="_blank" style="display:inline-block; margin-top: 10px; color: #007bff; font-weight: bold; text-decoration: none;">▶ Watch Video Solution</a>`
    },
    {
      marks: 2,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>Perform the following arithmetic operations on \\( 8 \\)-bit \\( 2's \\) complement values. Express your answer using \\( 8 \\)-bit \\( 2's \\) complement. Which of the following operations results in an overflow? </p> <p></p>`,
      image: "",
      options: [
        `\\( 00100001+00011111 \\)<br>&nbsp;`,
        `\\( 01101100+01011101 \\)<br>&nbsp;`,
        `\\( 11001100-00100101 \\)<br>&nbsp;`,
        `\\( 10001111-01010101 \\)`,
      ],
      answer: ["B", "D"],
      solution: `<img src="/images/quiz/wqt-dl7/11.png" style="max-width: 75%;"><br><a href="https://www.youtube.com/watch?v=UO8TTFJC9OE&t=7583s" target="_blank" style="display:inline-block; margin-top: 10px; color: #007bff; font-weight: bold; text-decoration: none;">▶ Watch Video Solution</a>`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p>What decimal number is represented by the \\( 8 \\)-bit \\( 2's \\) complement bit pattern \\( (97) \\)H (given in hexadecimal notation)? </p> <p></p>`,
      image: "",
      options: [
        `\\( 10010111 \\)<br>&nbsp;`,
        `\\( 183 \\)<br>&nbsp;`,
        `not representable<br>&nbsp;`,
        `\\( -105 \\)`,
      ],
      answer: "D",
      solution: `<img src="/images/quiz/wqt-dl7/12.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p>Which of the following representations in two's complement notation represents the smallest value?</p> <p></p>`,
      image: "",
      options: [
        `\\( 00000010 \\)<br>&nbsp;`,
        `\\( 11110000 \\)<br>&nbsp;`,
        `\\( 00000001 \\)<br>&nbsp;`,
        `\\( 111111111 \\)`,
      ],
      answer: "B",
      solution: `<img src="/images/quiz/wqt-dl7/13.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p>Consider the (decimal) number \\( 182 \\), whose binary representation is \\( 10110110 \\). How many positive integers are there in the following set? \$\$ \\{n\\in \\mathbb{N}: n\\leq 182 \\text{ and n has } \\textit{exactly four} \\text{ ones in its binary representation}\\} \$\$ </p> <p></p>`,
      image: "",
      options: [
        `\\( 91 \\)<br>&nbsp;`,
        `\\( 70 \\)<br>&nbsp;`,
        `\\( 54 \\)<br>&nbsp;`,
        `\\( 35 \\)`,
      ],
      answer: "C",
      solution: `<img src="/images/quiz/wqt-dl7/14.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>Which of the following decimal numbers can be exactly represented in binary notation with a finite number of bits ?</p> <p></p>`,
      image: "",
      options: [
        `\\( 0.1 \\)<br>&nbsp;`,
        `\\( 0.2 \\)<br>&nbsp;`,
        `\\( 0.4 \\)<br>&nbsp;`,
        `\\( 0.5 \\)`,
      ],
      answer: ["D"],
      solution: `<img src="/images/quiz/wqt-dl7/15.png" style="max-width: 75%;">`
    },
  ]
});

registerTest({
  series: "weekly-cs-gate-2027",
  name: "WQT - Digital Logic-8|Number System",
  date: "Sept 17, 2026",
  questions: [
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>The Excess- \\( 3 \\)&nbsp;code is also called </p> <p></p>`,
      image: "",
      options: [
        `Cyclic Redundancy Code<br>&nbsp;`,
        `Weighted Code<br>&nbsp;`,
        `Self-Complementing Code<br>&nbsp;`,
        `Algebraic Code`,
      ],
      answer: "C",
      solution: `<img src="/images/quiz/wqt-dl8/1.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>Which of the following is the most efficient to perform arithmetic operations on the numbers?</p> <p></p>`,
      image: "",
      options: [
        `Sign-magnitude<br>&nbsp;`,
        `\\( 1's \\) complement<br>&nbsp;`,
        `\\( 2's \\) complement<br>&nbsp;`,
        `\\( 9's \\) complement`,
      ],
      answer: "C",
      solution: `<img src="/images/quiz/wqt-dl8/2.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>When two \\( n \\)-bit binary numbers are added the sum will contain at the most </p> <p></p>`,
      image: "",
      options: [
        `\\( n \\)&nbsp;bits<br>&nbsp;`,
        `\\( n + 2 \\) bits<br>&nbsp;`,
        `\\( n + 3 \\) bits<br>&nbsp;`,
        `\\( n + 1 \\) bits`,
      ],
      answer: "D",
      solution: `<img src="/images/quiz/wqt-dl8/3.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>The Hexadecimal equivalent of \\( 01111100110111100011 \\) is </p> <p></p>`,
      image: "",
      options: [
        `\\( \\textsf{CD73E} \\)<br>&nbsp;`,
        `\\( \\textsf{ABD3F} \\)<br>&nbsp;`,
        `\\( \\textsf{7CDE3} \\)<br>&nbsp;`,
        `\\( \\textsf{FA4CD} \\)`,
      ],
      answer: "C",
      solution: `<img src="/images/quiz/wqt-dl8/4.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>If \\( 12A7C_{16} = X_8 \\) then the value of \\( X \\) is </p> <p></p>`,
      image: "",
      options: [
        `\\( 224174 \\)<br>&nbsp;`,
        `\\( 425174 \\)<br>&nbsp;`,
        `\\( 6173 \\)<br>&nbsp;`,
        `\\( 225174 \\)`,
      ],
      answer: "D",
      solution: `<img src="/images/quiz/wqt-dl8/5.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p>Add the following numbers in \\( 8 \\)-bit \\( 2's \\) complement representation.<br>a) \\( 10101101+110 \\)<br>b) \\( 01010111+011 \\)<br>Which of the above operations result in an overflow ? </p> <p></p>`,
      image: "",
      options: [
        `Only a`,
        `Only b`,
        `Both`,
        `None`,
      ],
      answer: "D",
      solution: `<img src="/images/quiz/wqt-dl8/6.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p>Which of the answers below corresponds to the sum and overflow result when the following addition is performed using \\( 8 \\)-bit \\( 2's \\) complement: \\( 10101101+110 \\)? </p> <p></p>`,
      image: "",
      options: [
        `\\( 10101011 \\), with no overflow<br>&nbsp;`,
        `\\( 10101011 \\), with overflow<br>&nbsp;`,
        `\\( 10110011 \\), with no overflow<br>&nbsp;`,
        `\\( 10110011 \\), with overflow`,
      ],
      answer: "A",
      solution: `<img src="/images/quiz/wqt-dl8/7.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p>In the decimal system with digits in the set \\( \\{0, \\ldots, 9\\} \\), a notation like \\( 234 \\) stands for \\( 2 \\times 10^{2}+3 \\times 10+4 \\); but in a different base \\( r \\) with digits in the set \\( \\{0, \\ldots, r-1\\} \\), the notation \\( 234 \\) will stand for the number \\( 2 \\times r^{2}+3 \\times r+4 \\). If the relation \\( 430+240=1000 \\) holds when numbers are represented in a certain base \\( r \\), then \\( r \\) equals </p> <p></p>`,
      image: "",
      options: [
        `&nbsp; \\( 5 \\)<br>&nbsp;`,
        `&nbsp; \\( 6 \\)<br>&nbsp;`,
        `&nbsp; \\( 7 \\)<br>&nbsp;`,
        `&nbsp; \\( 8 \\)`,
      ],
      answer: "C",
      solution: `<img src="/images/quiz/wqt-dl8/8.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "NAT",
      text: `<p>Let \\( N=2^{150} \\). How many bits are required to write \\( N \\) in binary (base 2)? </p>`,
      image: "",
      options: [],
      answer: "151",
      solution: `<img src="/images/quiz/wqt-dl8/9.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "NAT",
      text: `<p>Let \\( N=2^{150} \\). How many digits are required to write \\( N \\) in decimal (base 10)? You may assume that \\( \\log _{10} 2=0.30103 \\). </p>`,
      image: "",
      options: [],
      answer: "46",
      solution: `<img src="/images/quiz/wqt-dl8/10.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p>If \\( (12x)_3 = (123)_x \\), then the value of \\( x \\) is </p> <p></p>`,
      image: "",
      options: [
        `\\( 3 \\)<br>&nbsp;`,
        `\\( 3 \\) or \\( 4 \\)<br>&nbsp;`,
        `\\( 2 \\)<br>&nbsp;`,
        `None of these`,
      ],
      answer: "D",
      solution: `<img src="/images/quiz/wqt-dl8/11.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p>If \\( 73_{x} \\) (in base \\( x \\) number system) is equal to \\( 54_{y} \\) (in base \\( y \\) number system), the possible values of \\( x \\) and \\( y \\) are </p> <p></p>`,
      image: "",
      options: [
        `\\( 8 \\) and \\( 16 \\)<br>&nbsp;`,
        `\\( 10 \\) and \\( 12 \\)<br>&nbsp;`,
        `\\( 9 \\) and \\( 13 \\)<br>&nbsp;`,
        `\\( 8 \\) and \\( 11 \\)`,
      ],
      answer: "D",
      solution: `<img src="/images/quiz/wqt-dl8/12.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p>One approach to handling fuzzy logic data might be to design a computer using ternary (base- \\( 3 \\)) logic so that data could be stored as “true,” “false,” and “unknown.” If each ternary logic element is called a flit, how many flits are required to represent at least \\( 256 \\) different values? </p> <p></p>`,
      image: "",
      options: [
        `\\( 4 \\)<br>&nbsp;`,
        `\\( 5 \\)<br>&nbsp;`,
        `\\( 6 \\)<br>&nbsp;`,
        `\\( 7 \\)`,
      ],
      answer: "C",
      solution: `<img src="/images/quiz/wqt-dl8/13.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p>How many different \\( \\text{BCD} \\) numbers can be stored in \\( 12 \\) switches ? (Assume two position or on-off switches). </p> <p></p>`,
      image: "",
      options: [
        `\\( 2^{12} \\)<br>&nbsp;`,
        `\\( 2^{12}-1 \\)<br>&nbsp;`,
        `\\( 10^{12} \\)<br>&nbsp;`,
        `\\( 10^3 \\)`,
      ],
      answer: "D",
      solution: `<img src="/images/quiz/wqt-dl8/14.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p>If \\( N^2 = (7601)_8 \\) where \\( N \\) is a positive integer, then the value of \\( N \\) is </p> <p></p>`,
      image: "",
      options: [
        `\\( (241)_5 \\)<br>&nbsp;`,
        `\\( (143)_6 \\)<br>&nbsp;`,
        `\\( (165)_7 \\)<br>&nbsp;`,
        `\\( (39)_{16} \\)`,
      ],
      answer: "B",
      solution: `<img src="/images/quiz/wqt-dl8/15.png" style="max-width: 75%;">`
    },
  ]
});

registerTest({
  series: "weekly-cs-gate-2027",
  name: "WQT - Digital Logic-9|Number System",
  date: "Sept 24, 2026",
  questions: [
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>The number \\( 233_{10} \\) is equal to the following: </p> <p></p>`,
      image: "",
      options: [
        `\\( 10101001_{2} \\)<br>&nbsp;`,
        `\\( 11001001_{2} \\)<br>&nbsp;`,
        `\\( 11111001_{2} \\)<br>&nbsp;`,
        `\\( 11101001_{2} \\)`,
      ],
      answer: "D",
      solution: `<img src="/images/quiz/wqt-dl9/1.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>The number \\( 233_8 \\) is equal to the following: </p> <p></p>`,
      image: "",
      options: [
        `\\( 150_{10} \\)<br>&nbsp;`,
        `\\( 164_{10} \\)<br>&nbsp;`,
        `\\( 155_{10} \\)<br>&nbsp;`,
        `\\( 159_{10} \\)`,
      ],
      answer: "C",
      solution: `<img src="/images/quiz/wqt-dl9/2.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>What is the magnitude of the \\( 10 \\)-bit&nbsp; \\( 2's \\) complement number \\( 1011100010_2 \\)? </p> <p></p>`,
      image: "",
      options: [
        `\\( 286_{10} \\)<br>&nbsp;`,
        `\\( -739_{10} \\)<br>&nbsp;`,
        `\\( 738_{10} \\)<br>&nbsp;`,
        `\\( -286_{10} \\)`,
      ],
      answer: "A",
      solution: `<img src="/images/quiz/wqt-dl9/3.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>Which representation schemes allow performing the \\( 9 \\)'s complement of decimal digits by simply taking the one's complement of their binary representations? </p> <p></p>`,
      image: "",
      options: [
        `\\( 2421 \\) code<br>&nbsp;`,
        `the \\( 2 \\)'s complement number system<br>&nbsp;`,
        `XS- \\( 3 \\) code (Excess- \\( 3 \\) Code)<br>&nbsp;`,
        `\\( 8421 \\) code`,
      ],
      answer: ["A", "C"],
      solution: `<img src="/images/quiz/wqt-dl9/4.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>The string \\( ABBA \\) may represent: </p> <p></p>`,
      image: "",
      options: [
        `A number in base \\( 16 \\)<br>&nbsp;`,
        `A number in base \\( 10 \\)<br>&nbsp;`,
        `A number in base \\( 14 \\)<br>&nbsp;`,
        `A \\( 70 \\)s pop group`,
      ],
      answer: ["A", "C"],
      solution: `<img src="/images/quiz/wqt-dl9/5.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p>Express the unsigned fixed-point binary \\( 0011110010_{2} \\) as a decimal, assuming the format \\( bbbbb.bbbbb_{2} \\): </p> <p></p>`,
      image: "",
      options: [
        `\\( 7.06250 \\)<br>&nbsp;`,
        `\\( 6.56250 \\)<br>&nbsp;`,
        `\\( -7.56250 \\)<br>&nbsp;`,
        `\\( 7.56250 \\)`,
      ],
      answer: "D",
      solution: `<img src="/images/quiz/wqt-dl9/6.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>The hexadecimal number \\( 67565_{16} \\) has a value: </p> <p></p>`,
      image: "",
      options: [
        `\\( =1472545_{8} \\)<br>&nbsp;`,
        `\\( &lt;67565_{10} \\)<br>&nbsp;`,
        `\\( <br>&nbsp;`,
        `\\( \\leq 1000000_{10} \\)`,
      ],
      answer: ["A", "C", "D"],
      solution: `<img src="/images/quiz/wqt-dl9/7.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>The sum \\( 110101_{2} + 101_{2} \\) is equivalent to: </p> <p></p>`,
      image: "",
      options: [
        `None of the others<br>&nbsp;`,
        `\\( 111010_{10} \\)<br>&nbsp;`,
        `\\( =65_{8} + 5_{8} \\)<br>&nbsp;`,
        `\\( 00111010_{2} \\)`,
      ],
      answer: ["C", "D"],
      solution: `<img src="/images/quiz/wqt-dl9/8.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>The binary product \\( 110101_{2} \\times 101_{2} \\) is equivalent to: </p> <p></p>`,
      image: "",
      options: [
        `None of the others<br>&nbsp;`,
        `\\( 110101_{2} + 11010100_{2} \\)<br>&nbsp;`,
        `\\( 110101_{2} + 1101010_{2} \\)<br>&nbsp;`,
        `\\( 5_{10} \\times 65_{8} \\)`,
      ],
      answer: ["B", "D"],
      solution: `<img src="/images/quiz/wqt-dl9/9.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p>The binary number \\( 11010.110001 \\) is equivalent to: </p> <p></p>`,
      image: "",
      options: [
        `\\( 1.110110001 \\times 2^{6} \\)<br>&nbsp;`,
        `\\( 1.110110001 \\times 2^{4} \\)<br>&nbsp;`,
        `\\( 0.11010110001 \\times 2^{5} \\)<br>&nbsp;`,
        `\\( 1.110110001 \\times 2^{5} \\)`,
      ],
      answer: "C",
      solution: `<img src="/images/quiz/wqt-dl9/10.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p>What are the decimal values of the binary number ( \\( 8 \\) bits) \\( 10011001 \\), considering the unsigned representation and the two's complement representation, respectively? </p> <p></p>`,
      image: "",
      options: [
        `\\( 153,-102 \\)<br>&nbsp;`,
        `\\( 100,-101 \\)<br>&nbsp;`,
        `\\( 153,-103 \\)<br>&nbsp;`,
        `\\( 129, 103 \\)`,
      ],
      answer: "C",
      solution: `<img src="/images/quiz/wqt-dl9/11.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p>A number in \\( 4 \\)-bit \\( 2 \\)s complement signed representation is \\( a_3 a_2 a_1 a_0 \\). The same number, when stored using \\( 8 \\) bits, will appear like: </p> <p></p>`,
      image: "",
      options: [
        `\\( 0000\\ a_3\\ a_2\\ a_1\\ a_0 \\)<br>&nbsp;`,
        `\\( a_3' \\; a_3' \\; a_3' \\; a_3' \\; a_3 \\; a_2 \\; a_1 \\; a_0 \\) <br>&nbsp;`,
        `\\( a_3\\ a_2\\ a_1\\ a_0\\ a_3\\ a_2\\ a_1\\ a_0 \\) <br>&nbsp;`,
        `\\( a_3\\ a_3\\ a_3\\ a_3\\ a_3\\ a_2\\ a_1\\ a_0 \\)`,
      ],
      answer: "D",
      solution: `<img src="/images/quiz/wqt-dl9/12.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p>The octal number \\( 326.4 \\) is equivalent to </p> <p></p>`,
      image: "",
      options: [
        `\\( (214.2)_{10} \\) and \\( (D6.8)_{16} \\)<br>&nbsp;`,
        `\\( (212.5)_{10} \\) and \\( (D6.8)_{16} \\)&nbsp;<br>&nbsp;`,
        `\\( (214.5)_{10} \\) and \\( (D6.8)_{16} \\)&nbsp;<br>&nbsp;`,
        `\\( (214.5)_{10} \\) and \\( (D6.4)_{16} \\)`,
      ],
      answer: "C",
      solution: `<img src="/images/quiz/wqt-dl9/13.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "NAT",
      text: `<p>Given \\( (135)_x+(144)_x=(323)_x \\) What is the value of base \\( x \\) ? </p>`,
      image: "",
      options: [],
      answer: "6",
      solution: `<img src="/images/quiz/wqt-dl9/14.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p>How many numbers in the range \\( {0, 1, \\dots , 1365} \\) have exactly four \\( 1 \\)’s&nbsp;in their binary representation? (Hint: \\( 1365_{10} \\) is \\( 10101010101_{2} \\), that is, \$\$ 1365=2^{10} + 2^{8}+2^{6}+2^{4}+2^{2}+2^{0}.) \$\$ </p> <p>In the following, the binomial coefficient \\( \\binom{n}{k} \\) counts the number of \\( k \\)-element subsets of an \\( n \\)-element set. </p> <ol start="2" style="list-style-type:upper-alpha" type="A"> <li> \\( \\binom{10}{4} \\) </li> </ol> <ol start="100" style="list-style-type:upper-roman" type="I"> <li> \\( \\binom{10}{4}+\\binom{8}{3}+\\binom{6}{2}+\\binom{5}{1} \\) </li> </ol> <ol start="500" style="list-style-type:upper-roman" type="I"> <li> \\( \\binom{11}{4}+\\binom{9}{3}+\\binom{7}{2}+\\binom{5}{1} \\) </li> </ol> <p></p>`,
      image: "",
      options: [
        `\\( \\binom{6}{4} \\)`,
      ],
      answer: "C",
      solution: `<img src="/images/quiz/wqt-dl9/15.png" style="max-width: 75%;">`
    },
  ]
});

registerTest({
  series: "weekly-cs-gate-2027",
  name: "WQT - Digital Logic-10|Multiplexer",
  date: "Oct 1, 2026",
  questions: [
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>The logic function implemented by the circuit below is (ground implies a logic \\( \\text{“0”}) \\) </p> <p style="text-align:center"><img alt="" src="/images/quiz/wqt-dl10/q1_img1.png" style="max-width: 100%;"></p> <p></p>`,
      image: "",
      options: [
        `\\( \\text{F=AND(P,Q}) \\)`,
        `\\( \\text{F=OR(P,Q}) \\)`,
        `\\( \\text{F=XNOR(P,Q}) \\)`,
        `\\( \\text{F=XOR(P,Q}) \\)`,
      ],
      answer: "D",
      solution: `<img src="/images/quiz/wqt-dl10/1.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>The figure below shows a multiplexer where \\( S_{1} \\) and \\( S_{0} \\) are the select lines,&nbsp; \\( I_{0} \\) to \\( I_{3} \\) are the input data lines, \\( \\text{EN} \\) is the enable line, and \\( \\text{F(P, Q, R)} \\) is the output.&nbsp; \\( \\text{F} \\) is&nbsp; </p> <p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<img alt="" src="/images/quiz/wqt-dl10/q2_img2.png" style="max-width: 100%;"></p> <p></p>`,
      image: "",
      options: [
        `\\( PQ+\\overline{Q}R. \\)`,
        `\\( PQ+Q\\overline{R}. \\)`,
        `\\( P\\overline{Q}R+\\overline{P}Q. \\)`,
        `\\( \\overline{Q}+PR. \\)`,
      ],
      answer: "A",
      solution: `<img src="/images/quiz/wqt-dl10/2.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>An \\( 8 \\)- to \\( 1 \\) multiplexer is used to implement a logical function \\( Y \\) as shown in the figure. The output \\( Y \\) is given by </p> <p style="text-align:center"><img alt="" src="/images/quiz/wqt-dl10/q3_img3.png" style="max-width: 50%;"></p> <p></p>`,
      image: "",
      options: [
        `\\( Y = A \\: \\overline{B} \\:C+A&nbsp;\\: \\overline{C}&nbsp; \\:D \\)`,
        `\\( Y&nbsp; =&nbsp;\\overline{A} \\: B \\:C +A&nbsp;\\: \\overline{B} \\: D \\)`,
        `\\( Y = A \\: B&nbsp;\\: \\overline{C} +&nbsp;\\overline{A}&nbsp; \\: C \\:D \\)`,
        `\\( Y= \\overline{A} \\: \\overline{B} \\: D + A&nbsp; \\: \\overline{B}&nbsp; \\: C \\)`,
      ],
      answer: "C",
      solution: `<img src="/images/quiz/wqt-dl10/3.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>Consider the \\( \\text{2–bit} \\) multiplexer \\( \\text{(MUX)} \\) shown in the figure. For \\( \\text{OUTPUT} \\) to be the \\( \\text{XOR} \\) of \\( \\text{C} \\) and \\( \\text{D}, \\) the values for \\( A_{0}, A_{1}, A_{2}, \\) and \\( A_{3} \\) are _______________. </p> <p style="text-align:center"><img alt="" src="/images/quiz/wqt-dl10/q4_img4.png" style="max-width: 50%;"></p> <p></p>`,
      image: "",
      options: [
        `\\( A_{0} = 0, A_{1} = 0, A_{2} = 1, A_{3} = 1 \\)`,
        `\\( A_{0} = 1, A_{1} = 0, A_{2} = 1, A_{3} = 0 \\)`,
        `\\( A_{0} = 0, A_{1} = 1, A_{2} = 1, A_{3} = 0 \\)`,
        `\\( A_{0} = 1, A_{1} = 1, A_{2} = 0, A_{3} = 0 \\)`,
      ],
      answer: "C",
      solution: `<img src="/images/quiz/wqt-dl10/4.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>In the circuit shown below, \\( \\mathrm{P} \\) and \\( \\mathrm{Q} \\) are the inputs. The logical function realized by the circuit shown below is </p> <p style="text-align:center"><img alt="" src="/images/quiz/wqt-dl10/q5_img5.png" style="max-width: 100%;"></p> <p></p>`,
      image: "",
      options: [
        `\\( \\mathrm{Y}=\\mathrm{PQ} \\)`,
        `\\( \\mathrm{Y}=\\mathrm{P}+\\mathrm{Q} \\)`,
        `\\( \\mathrm{Y}=\\overline{\\mathrm{PQ}} \\)`,
        `\\( \\mathrm{Y}=\\overline{\\mathrm{P}+\\mathrm{Q}} \\)`,
      ],
      answer: "A",
      solution: `<img src="/images/quiz/wqt-dl10/5.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p>The Boolean function realized by the logic circuit shown is</p> <p style="text-align:center"><img alt="" src="/images/quiz/wqt-dl10/q6_img6.png" style="max-width: 100%;"></p> <p></p>`,
      image: "",
      options: [
        `\\( \\text{F} = \\sum_{\\text{m}} (0, 1, 3, 5, 9, 10, 14) \\)`,
        `\\( \\text{F}=\\sum_{\\text{m}}(2,3,5,7,8,12,13) \\)`,
        `\\( \\text{F}=\\sum_{\\text{m}}(1,2,4,5,11, 14,15) \\)`,
        `\\( \\text{F}= \\sum_{\\text{m}}(2,3,5,7,8,9,12) \\)`,
      ],
      answer: "D",
      solution: `<img src="/images/quiz/wqt-dl10/6.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p>A four-variable Boolean function is realized using&nbsp; \\( 4\\times 1 \\) multiplexers as shown in the figure. </p> <p><img alt="" src="/images/quiz/wqt-dl10/q7_img7.png" style="max-width: 100%;"></p> <p>The minimized expression for \\( \\text{F(U,V,W,X)} \\) is&nbsp; </p> <p></p>`,
      image: "",
      options: [
        `\\( \\left ( UV+\\overline{U}\\:\\overline{V}\\right )\\overline{W} \\)`,
        `\\( \\left ( UV+\\overline{U}\\:\\overline{V}\\right )\\left (\\overline{W}\\: \\overline{X}+\\overline{W}\\:X\\right ) \\)`,
        `\\( \\left ( U\\:\\overline{V}+\\overline{U}\\:V\\right )\\overline{W} \\)`,
        `\\( \\left ( U\\:\\overline{V}+\\overline{U}\\:V\\right )\\left (\\overline{W}\\:&nbsp;\\overline{X}+\\overline{W}\\:X\\right ) \\)`,
      ],
      answer: "C",
      solution: `<img src="/images/quiz/wqt-dl10/7.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p>In the circuit shown, \\( W \\) and \\( Y \\) are MSBs of the control inputs. The output \\( F \\) is given by </p> <p><img alt="" src="/images/quiz/wqt-dl10/q8_img8.png" style="max-width: 70%;"></p> <p></p>`,
      image: "",
      options: [
        `\\( F= W\\overline{X}+\\overline{W}X+\\overline{Y}\\overline{Z} \\)`,
        `\\( F= W\\overline{X}+\\overline{W}X+\\overline{Y}Z \\)`,
        `\\( F= W\\overline{X}\\overline{Y}+\\overline{W}X\\overline{Y} \\)`,
        `\\( F= ( \\overline{W}+\\overline{X} &nbsp;)\\overline{Y}\\overline{Z} \\)`,
      ],
      answer: "C",
      solution: `<img src="/images/quiz/wqt-dl10/8.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p>Consider the multiplexer based logic circuit shown in the figure.</p> <p style="text-align:center"><img alt="" src="/images/quiz/wqt-dl10/q9_img9.png" style="max-width: 70%;"></p> <p>Which one of the following Boolean functions is realized by the circuit?</p> <p></p>`,
      image: "",
      options: [
        `\\( F= W \\overline{S_1} \\: \\overline{S_2} \\)`,
        `\\( F= WS_1+WS_2 + S_{1}S_{2} \\)`,
        `\\( F= \\overline{W}+S_{1}+S_{2} \\)`,
        `\\( F= W\\oplus S_{1}\\oplus S_{2} \\)`,
      ],
      answer: "D",
      solution: `<img src="/images/quiz/wqt-dl10/9.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p>Consider the circuit shown in the figure.&nbsp;</p> <p><img alt="" src="/images/quiz/wqt-dl10/q10_img10.png" style="max-width: 70%;"></p> <p>The Boolean expression \\( F \\) implemented by the circuit is </p> <p></p>`,
      image: "",
      options: [
        `\\( \\overline{X} \\overline{Y} \\overline{Z}&nbsp;+ X Y +\\overline{Y} Z&nbsp; \\)`,
        `\\( \\overline{X} Y \\overline{Z} + X Z + \\overline{Y} Z&nbsp; \\)`,
        `\\( \\overline{X} Y \\overline{Z} +XY + \\overline{Y} Z&nbsp; \\)`,
        `\\( \\overline{X} \\overline{Y} \\overline{Z}&nbsp; + XZ+ \\overline{Y}Z&nbsp; \\) &nbsp;`,
      ],
      answer: "B",
      solution: `<img src="/images/quiz/wqt-dl10/10.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p>A Boolean function \\( f(A, B, C, D) = \\prod&nbsp;&nbsp;(1,5,12,15) \\) is to be implemented using an \\( 8 \\times 1 \\) multiplexer ( \\( A \\) is \\( MSB \\)). The inputs \\( ABC \\) are connected to the select inputs \\( S_{2} S_{1} S_{0} \\) of the multiplexer respectively. </p> <p style="text-align:center"><img alt="" src="/images/quiz/wqt-dl10/q11_img11.png" style="max-width: 100%;"></p> <p>Which one of the following options gives the correct inputs to pins \\( 0,1,2,3,4,5,6,7 \\) in order? </p> <p></p>`,
      image: "",
      options: [
        `\\( D, 0, D, 0, 0, 0, \\overline{D}, D \\)&nbsp;`,
        `\\( \\overline{D}, 1, \\overline{D}, 1, 1, 1, D,&nbsp;\\overline{D} \\)`,
        `\\( D, 1, D, 1, 1, 1, \\overline{D}, D \\)&nbsp;`,
        `\\( \\overline{D}, 0, \\overline{D}, 0, 0, 0,D, \\overline{D} \\)`,
      ],
      answer: "B",
      solution: `<img src="/images/quiz/wqt-dl10/11.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p>In the \\( 4 \\times 1 \\) multiplexer, the output \\( F \\) is given by \\( F = A \\oplus &nbsp;B \\). Find the required input \\( 'I_{3}, I_{2}, I_{1}, I_{0}' \\). </p> <p style="text-align:center"><img alt="" src="/images/quiz/wqt-dl10/q12_img12.png" style="max-width: 100%;"></p> <p></p>`,
      image: "",
      options: [
        `\\( 1010 \\)`,
        `\\( 0110 \\)`,
        `\\( 1000 \\)`,
        `\\( 1110 \\)`,
      ],
      answer: "B",
      solution: `<img src="/images/quiz/wqt-dl10/12.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p>Consider the following circuit which uses a \\( 2 \\)-to- \\( 1 \\) multiplexer as shown in the figure below. The Boolean expression for output \\( F \\) in terms of \\( A \\) and \\( B \\) is </p> <p style="text-align:center"><img alt="" src="/images/quiz/wqt-dl10/q13_img13.png" style="max-width: 100%;"></p> <p></p>`,
      image: "",
      options: [
        `\\( A\\oplus B \\)`,
        `\\( \\overline{A+B} \\)`,
        `\\( A+B \\)`,
        `\\( \\overline{A \\oplus B} \\)`,
      ],
      answer: "D",
      solution: `<img src="/images/quiz/wqt-dl10/13.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>The output \\( \\text{F} \\) of the digital circuit shown can be written in the form(s) __________ </p> <p><img alt="" src="/images/quiz/wqt-dl10/q14_img14.png" style="max-width: 100%;"></p> <p></p>`,
      image: "",
      options: [
        `\\( \\overline{A \\cdot B} \\)`,
        `\\( \\overline{A} + \\overline{B} \\)`,
        `\\( \\overline{A+B} \\)`,
        `\\( \\overline{A} \\cdot&nbsp;\\overline{B} \\)`,
      ],
      answer: ["A", "B"],
      solution: `<img src="/images/quiz/wqt-dl10/14.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p>&nbsp;A \\( 4 \\times 1 \\) multiplexer with two selector lines is used to realize a Boolean function \\( \\text{F} \\) having four Boolean variables \\( \\text{X, Y, Z} \\) and \\( \\text{W} \\) as shown below. \\( S_{0} \\) and \\( S_{1} \\) denote the least significant bit \\( \\text{(LSB)} \\) and most significant bit \\( \\text{(MSB)} \\) of the selector lines of the multiplexer respectively. \\( I_{0}, I_{1}, I_{2}, I_{3} \\) are the input lines of the multiplexer. </p> <p><img alt="" src="/images/quiz/wqt-dl10/q15_img15.png" style="max-width: 100%;"></p> <p>The canonical sum of product representation of \\( \\text{F} \\) is </p> <p></p>`,
      image: "",
      options: [
        `\\( F\\left ( X,Y,Z,W \\right )=\\sum \\text{m}\\left ( 0,1,3,14,15 \\right ) \\)`,
        `\\( F\\left ( X,Y,Z,W \\right )=\\sum \\text{m}\\left ( 0,1,3,11,14 \\right ) \\)`,
        `\\( F\\left ( X,Y,Z,W \\right )=\\sum \\text{m}\\left ( 2,5,9,11,14 \\right ) \\)`,
        `\\( F\\left ( X,Y,Z,W \\right )=\\sum \\text{m}\\left ( 1,3,7,9,15 \\right ) \\)`,
      ],
      answer: "B",
      solution: `<img src="/images/quiz/wqt-dl10/15.png" style="max-width: 75%;">`
    },
  ]
});

registerTest({
  series: "weekly-cs-gate-2027",
  name: "WQT - Digital Logic-11|Combinational Circuits",
  date: "Oct 8, 2026",
  questions: [
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p> \\( \\text{P, Q}, \\)&nbsp;and \\( \\text{R} \\) are the decimal integers corresponding to the \\( 4 \\)-bit binary number \\( 1100 \\) considered in signed magnitude, \\( 1 \\)’s&nbsp;complement, and \\( 2 \\)’s&nbsp;complement representations, respectively. The \\( 6 \\)-bit \\( 2 \\)’s&nbsp;complement representation of \\( \\text{(P+Q+R)} \\) is&nbsp; ________. </p> <p></p>`,
      image: "",
      options: [
        `\\( 110101 \\)`,
        `\\( 110010 \\)`,
        `\\( 111101 \\)`,
        `\\( 111001 \\)`,
      ],
      answer: "A",
      solution: `<img src="/images/quiz/wqt-dl11/1.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>Any set of Boolean operators that is sufficient to represent all Boolean expressions is said to be complete. Which of the following is not complete?</p> <p></p>`,
      image: "",
      options: [
        `\\( \\{\\text{NOT, OR}\\} \\)`,
        `\\( \\{\\text{NOR}\\} \\)`,
        `\\( \\{\\text{AND, OR}\\} \\)`,
        `\\( \\{\\text{AND, NOT}\\} \\)`,
      ],
      answer: ["C"],
      solution: `<img src="/images/quiz/wqt-dl11/2.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p> \\( Q, R, S \\) are Boolean variables and \\( \\oplus \\) is the XOR operator. Select the CORRECT option(s). </p> <p></p>`,
      image: "",
      options: [
        `\\( (Q \\oplus R) \\oplus S=Q \\oplus(R \\oplus S) \\)`,
        `\\( (Q \\oplus R) \\oplus S=0 \\) when any two of the Boolean variables \\( (Q, R, S) \\) are \\( 0 \\) and the third variable is \\( 1. \\)`,
        `\\( (Q \\oplus R) \\oplus S=1 \\) when \\( Q=R=S=1 \\)`,
        `\\( ((Q \\oplus R) \\oplus(R \\oplus S)) \\oplus(Q \\oplus S)=1 \\)`,
      ],
      answer: ["A", "C"],
      solution: `<img src="/images/quiz/wqt-dl11/3.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>Input bits \\( \\mathrm{X} \\) and \\( \\mathrm{Y} \\) are added by using the combinational logic as shown below. \\( \\text{S} \\) represents the sum of the two bits. For a correct implementation of the sum, the signals \\( \\text{D}_0, \\text{D}_1, \\text{D}_2, \\text{D}_3 \\) are, respectively. </p> <p style="text-align:center"><img alt="" src="/images/quiz/wqt-dl11/q4_img1.png" style="max-width: 100%;"></p> <p></p>`,
      image: "",
      options: [
        `\\( 1,0,0,1 \\)`,
        `\\( 0,1,0,1 \\)`,
        `\\( 1,0,1,1 \\)`,
        `\\( 0,1,1,0 \\)`,
      ],
      answer: "A",
      solution: `<img src="/images/quiz/wqt-dl11/4.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>In the circuit shown below, \\( \\text{Y} \\) is a \\( 2 \\)-bit \\( \\left(\\text{Y}_1 \\text{Y}_0\\right) \\) output of the combinational logic. What is the maximum value of \\( \\text{Y} \\) for any given digital inputs, \\( \\text{A}_1 \\text{A}_0 \\) and \\( \\text{B}_1 \\text{B}_0? \\) </p> <p style="text-align:center"><img alt="" src="/images/quiz/wqt-dl11/q5_img2.png" style="max-width: 100%;"></p> <p></p>`,
      image: "",
      options: [
        `\\( 01 \\)`,
        `\\( 10 \\)`,
        `\\( 00 \\)`,
        `\\( 11 \\)`,
      ],
      answer: "A",
      solution: `<img src="/images/quiz/wqt-dl11/5.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>For the output \\( \\text{F} \\) to be \\( 1 \\) in the logic circuit shown, the input combination should be </p> <p style="text-align:center"><img alt="" src="/images/quiz/wqt-dl11/q6_img3.png" style="max-width: 100%;"></p> <p></p>`,
      image: "",
      options: [
        `\\( \\mathrm{A}=1, \\mathrm{~B}=1, \\mathrm{C}=0 \\)`,
        `\\( \\text{A = 1, B = 0, C = 0} \\)`,
        `\\( \\mathrm{A}=0, \\mathrm{~B}=1, \\mathrm{C}=0 \\)`,
        `\\( \\text{A = 0, B = 0, C = 1} \\)`,
      ],
      answer: ["D"],
      solution: `<img src="/images/quiz/wqt-dl11/6.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p>In the sum of products function \\( f(X,Y,Z)=\\sum(2,3,4,5) \\), the prime implicants are </p> <p></p>`,
      image: "",
      options: [
        `\\( \\overline{X}Y,X\\overline{Y} \\)`,
        `\\( \\overline{X}Y,X\\overline{Y}\\;\\overline{Z},X\\overline{Y}Z \\)`,
        `\\( \\overline{X}Y\\overline{Z},\\overline{X}YZ,X\\overline{Y} \\)`,
        `\\( \\overline{X}Y\\overline{Z},\\overline{X}YZ,X\\overline{Y}\\;\\overline{Z},X\\overline{Y}Z \\)`,
      ],
      answer: "A",
      solution: `<img src="/images/quiz/wqt-dl11/7.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p>A logic circuit implements the boolean function \\( F=\\overline{X} \\cdot Y+X \\cdot \\overline{Y} \\cdot \\overline{Z} \\). It is found that the input combination \\( X=Y=1 \\) can never occur. Taking this into account, a simplified expression for \\( F \\) is given by </p> <p></p>`,
      image: "",
      options: [
        `\\( \\overline{X}+\\overline{Y} \\cdot \\overline{Z} \\)`,
        `\\( X+Z \\)`,
        `\\( X+Y \\)`,
        `\\( Y+X \\cdot \\overline{Z} \\)`,
      ],
      answer: "D",
      solution: `<img src="/images/quiz/wqt-dl11/8.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p>Let \\( X=X_1 X_0 \\) and \\( Y=Y_1 Y_0 \\) be unsigned \\( 2 \\)-bit numbers. The function \\( F=1 \\) if \\( X&gt;Y \\) and \\( F=0 \\) otherwise. The minimized sum of products expression for \\( F \\) is ______. </p> <p></p>`,
      image: "",
      options: [
        `\\( Y_1 \\cdot Y_0+X_0 \\cdot Y_0+\\overline{X}_1 \\cdot \\overline{X}_0 \\cdot \\overline{Y}_1 \\)`,
        `\\( X_0 \\cdot \\overline{Y}_1+Y_1 \\cdot \\overline{Y}_0+X_1 \\cdot \\overline{X}_0 \\)`,
        `\\( Y_1 \\cdot \\overline{X}_1+Y_0 \\cdot \\overline{X}_1 \\cdot \\overline{X}_0+Y_1 \\cdot Y_0 \\cdot \\overline{X}_0 \\)`,
        `\\( X_1 \\cdot \\overline{Y}_1+X_0 \\cdot \\overline{Y}_0 \\cdot \\overline{Y}_1+X_0 \\cdot X_1 \\cdot \\overline{Y}_0 \\)`,
      ],
      answer: "D",
      solution: `<img src="/images/quiz/wqt-dl11/9.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p>A MUX circuit shown in the figure below implements a logic function \\( F_1 \\). </p> <p style="text-align:center"><img alt="" src="/images/quiz/wqt-dl11/q10_img4.png" style="max-width: 100%;"></p> <p>The correct expression for \\( F_1 \\) is _____. </p> <p></p>`,
      image: "",
      options: [
        `\\( (\\overline{X \\oplus Y}) \\oplus Z \\)<br>&nbsp;`,
        `\\( \\overline{(\\overline{X \\oplus Y)} \\oplus Z} \\) <br>&nbsp;`,
        `\\( (X \\oplus Y) \\oplus \\overline{Z} \\)<br>&nbsp;`,
        `\\( (X \\oplus Y)+Z \\)`,
      ],
      answer: "B",
      solution: `<img src="/images/quiz/wqt-dl11/10.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p>A universal logic gate can implement any Boolean function by connecting sufficient number of them appropriately. Three gates are shown.</p> <p><img alt="" src="/images/quiz/wqt-dl11/q11_img5.png" style="max-width: 100%;"></p> <p>Which one of the following statements is TRUE?</p> <p></p>`,
      image: "",
      options: [
        `Gate \\( 1 \\) is a universal gate`,
        `Gate \\( 2 \\) is a universal gate`,
        `Gate \\( 3 \\) is a universal gate`,
        `None of the gates shown is a universal gate`,
      ],
      answer: "C",
      solution: `<img src="/images/quiz/wqt-dl11/11.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>Consider a Boolean gate \\( \\text{(D)} \\) where the output \\( Y \\) is related to the inputs \\( A \\) and \\( B \\) as, \\( Y = A + \\overline{B}, \\) where \\( + \\) denotes logical \\( \\text{OR} \\) operation. The Boolean inputs \\( ’0’ \\) and \\( ’1’ \\) are also available separately. Using instances of only \\( \\text{D} \\) gates and inputs \\( ’0’ \\) and \\( ’1’, \\) _______________ (select the correct option(s)). </p> <p></p>`,
      image: "",
      options: [
        `\\( \\text{NAND} \\) logic can be implemented`,
        `\\( \\text{OR} \\) logic cannot be implemented`,
        `\\( \\text{NOR} \\) logic can be implemented`,
        `\\( \\text{AND} \\) logic cannot be implemented`,
      ],
      answer: ["A", "C"],
      solution: `<img src="/images/quiz/wqt-dl11/12.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>All digital circuits can be realized using only</p> <p></p>`,
      image: "",
      options: [
        `XOR gates`,
        `Multiplexers`,
        `Half adders`,
        `OR gates`,
      ],
      answer: ["B", "C"],
      solution: `<img src="/images/quiz/wqt-dl11/13.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>Which of the following sets of component(s) is/are sufficient to implement any arbitrary Boolean function?</p> <p></p>`,
      image: "",
      options: [
        `<p>XOR gates, NOT gates</p>`,
        `<p> \\( 2 \\) to \\( 1 \\) multiplexers </p>`,
        `<p>AND gates, XOR gates</p>`,
        `<p>Three-input gates that output \\( (A.B) + C \\) for the inputs \\( A, B \\), and \\( C \\). </p>`,
      ],
      answer: ["B", "C"],
      solution: `<img src="/images/quiz/wqt-dl11/14.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>This question is about the concept of functional completeness. A set of Boolean gates is said to be functionally complete if any Boolean function can be implemented by a circuit consisting of only these gates (and perhaps the constants \\( 0 \\) and \\( 1) \\). For example, the NAND \\( (o u t=\\overline{i n 1 \\cdot i n 2}) \\) and NOR \\( (o u t= \\) \\( \\overline{i n 1+i n 2}) \\) gates are functionally complete. This is because any Boolean circuit can be implemented using AND, OR and NOT gates, and NAND (respectively, NOR) gates can be used to implement the functionality of AND, OR and NOT gates. For example, using NAND gates, we can implement a NOT gate as out \\( =\\overline{i n \\cdot i n} \\), an OR gate as out \\( =\\overline{\\overline{i n 1 \\cdot i n 1} \\cdot \\overline{i n 2 \\cdot i n 2}} \\) .<br><br>Which of the following sets of Boolean gates is/are functionally complete? </p> <p></p>`,
      image: "",
      options: [
        `Three-input gates that output \\( \\mathrm{A}^{\\prime}+\\mathrm{BC}^{\\prime} \\) for the inputs \\( \\mathrm{A}, \\mathrm{B} \\) and \\( \\mathrm{C} \\).`,
        `\\( \\mathrm{XOR}(\\text { out }=i n 1 \\cdot \\overline{i n 2}+i n 2 \\cdot \\overline{i n 2} \\) gates.`,
        `Three-input gates that output \\( \\mathrm{A}^{\\prime} \\mathrm{B}+\\mathrm{B}^{\\prime} \\mathrm{C} \\) for the inputs \\( \\mathrm{A}, \\mathrm{B} \\) and \\( \\mathrm{C} \\).`,
        `Three-input gates that output \\( A'+ BC \\) for the inputs \\( A, B \\) and \\( C. \\)`,
      ],
      answer: ["A", "C", "D"],
      solution: `<img src="/images/quiz/wqt-dl11/15.png" style="max-width: 75%;">`
    },
  ]
});



registerTest({
  series: "weekly-cs-gate-2027",
  name: "WQT - Digital Logic-12|Combinational Circuits",
  date: "Aug 10, 2026",
  questions: [
    {
      marks: 1,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>Consider the following circuit using two \\( 2\\times 1 \\) multiplexers:<br><img alt="" src="https://gateoverflow.in/?qa=blob&amp;qa_blobid=324587819628278614" style="max-width: 75%;"><br>Which of the following is the correct behavior of this circuit? </p> <p></p>`,
      image: "",
      options: [
        `When \\( s=0 \\) then \\( y_{1}=x_{1}, y_{2}=x_{2} \\)`,
        `When \\( s=0 \\) then \\( y_{1}=x_{2}, y_{2}=x_{1} \\)`,
        `When \\( s=1 \\) then \\( y_{1}=x_{1}, y_{2}=x_{2} \\)`,
        `When \\( s=1 \\) then \\( y_{1}=x_{2}, y_{2}=x_{1} \\)`,
      ],
      answer: ["A","D"],
      solution: `<img src="/images/quiz/wqt-dl12/1.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p>Consider the following boolean equations:</p> <ol style="list-style-type: upper-alpha;"><li>\\( b d+a c d^{\\prime}+a b c=b d+a c d^{\\prime} \\)</li><li>\\( (b+d)\\left(a+c+d^{\\prime}\\right)(a+b+c)=(b+d)\\left(a+c+d^{\\prime}\\right) \\)</li></ol> <p>Which of the above is correct?</p>`,
      image: "",
      options: [
        `A Only`,
        `B Only`,
        `Both`,
        `None`,
      ],
      answer: "C",
      solution: `<img src="/images/quiz/wqt-dl12/2.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p>A demultiplexer can be implemented using a decoder circuit.<br>For example, the \\( 2 \\)-to- \\( 4 \\) decoder can be used as a \\( 1 \\)-to- \\( 4 \\) demultiplexer. Which input of decoder serves as the data input for the demultiplexer?<br><span class="mjx-chtml MJXc-display" style="text-align: center;"></span> \\( \\begin{array}{ccc|cccc} \\text{En} &amp; w_{1} &amp; w_{0} &amp; y_{0} &amp; y_{1} &amp; y_{2} &amp; y_{3} \\\\ \\hline 1 &amp; 0 &amp; 0 &amp; 1 &amp; 0 &amp; 0 &amp; 0 \\\\ 1 &amp; 0 &amp; 1 &amp; 0 &amp; 1 &amp; 0 &amp; 0 \\\\ 1 &amp; 1 &amp; 0 &amp; 0 &amp; 0 &amp; 1 &amp; 0 \\\\ 1 &amp; 1 &amp; 1 &amp; 0 &amp; 0 &amp; 0 &amp; 1 \\\\ 0 &amp; \\times &amp; \\times &amp; 0 &amp; 0 &amp; 0 &amp; 0 \\end{array} \\) <br><br> \\( \\text{(a) Truth Table of Decoder} \\) </p> <p style="text-align:center"><img alt="" height="301" width="287" src="https://gateoverflow.in/?qa=blob&amp;qa_blobid=18398392163275606394" style="max-width: 75%;"></p>`,
      image: "",
      options: [
        `\\( w_{0} \\)`,
        `\\( \\text{E}_{n} \\)`,
        `\\( w_{1} \\)`,
        `We can not implement a demultiplexer using a decoder.`,
      ],
      answer: "B",
      solution: `<img src="/images/quiz/wqt-dl12/3.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>A decoder may be described as</p> <p></p>`,
      image: "",
      options: [
        `Multiple-input single-output logic circuit which converts coded inputs into a coded output where the input and output codes are different.`,
        `Single-input single-output logic circuit which converts the coded input into a coded output where the input and output codes are different.`,
        `Multiple-input multiple-output logic circuit which converts coded inputs into coded outputs where the input and output codes are different.`,
        `Single-input multiple-output logic circuit which converts the coded input into coded outputs where the input and output codes are different.`,
      ],
      answer: "C",
      solution: `<img src="/images/quiz/wqt-dl12/4.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>Consider the \\( 4 \\)-to- \\( 2 \\) Encoder given below. Note: This is NOT a Priority Encoder. </p> <p>For the input \\( \\mathrm{A}_{3} \\mathrm{~A}_{2} \\mathrm{~A}_{1} \\mathrm{~A}_{0}=0110 \\) what is the value of the output \\( \\text{Y}_{1} \\text{Y}_{0} \\) ? </p> <p style="text-align:center"><img alt="" src="https://gateoverflow.in/?qa=blob&amp;qa_blobid=4987808141837399846" style="max-width: 75%;"></p> <p></p>`,
      image: "",
      options: [
        `\\( 00 \\)`,
        `\\( 10 \\)`,
        `\\( 11 \\)`,
        `Cannot be determined.`,
      ],
      answer: "D",
      solution: `<img src="/images/quiz/wqt-dl12/5.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p>What is the following circuit?</p> <p style="text-align:center"><img alt="" height="142" width="313" src="https://gateoverflow.in/?qa=blob&amp;qa_blobid=17641776862168967302" style="max-width: 75%;"></p>`,
      image: "",
      options: [
        `\\( 2-1 \\) MUX`,
        `\\( 1-2 \\) Decoder`,
        `\\( 2-1 \\) Priority Encoder`,
        `\\( 1-2 \\) DEMUX`,
      ],
      answer: "A",
      solution: `<img src="/images/quiz/wqt-dl12/6.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "MSQ",
      text: `<p>Consider the following function:<br><span class="mjx-chtml MJXc-display" style="text-align: center;"></span> \\( f(a, b, c)=\\sum m(1,3,4,7)+\\sum d(6). \\)<br>Note that " \\( m \\)" represents the minterms for which \\( f(a,b,c) \\) is \\( 1 . \\) " \\( d \\) " represents the "don't care" minterms.<br>Which of the following is / are correct for \\( f? \\) </p>`,
      image: "",
      options: [
        `Number of Prime Implicants is \\( 4 . \\)`,
        `Number of Essential Prime Implicants is \\( 3 . \\)`,
        `Number of minimum sum of product expressions is \\( 2 . \\)`,
        `Number of minimum product of sum expressions is \\( 2 . \\)`,
      ],
      answer: ["A","C"],
      solution: `<img src="/images/quiz/wqt-dl12/7.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>The following circuit using a \\( 3 \\)-to- \\( 8 \\) binary decoder and an OR gate is an implementation of the function:<br><img alt="" src="https://gateoverflow.in/?qa=blob&amp;qa_blobid=13257677602250482208" style="max-width: 75%;"> </p> <p></p>`,
      image: "",
      options: [
        `\\( \\displaystyle{} f\\left(w_{1}, w_{2}, w_{3}\\right)=\\sum_{m}(0,1,3,4,6,7) \\)`,
        `\\( \\displaystyle{} f\\left(w_{1}, w_{2}, w_{3}\\right)=\\sum_{m}(1,2,4,5,7,8) \\)`,
        `\\( \\displaystyle{} f\\left(w_{1}, w_{2}, w_{3}\\right)=\\prod_{M}(0,1,3,4,6,7) \\)`,
        `\\( \\displaystyle{} f\\left(w_{1}, w_{2}, w_{3}\\right)=\\sum_{m}(2,5) \\)`,
      ],
      answer: ["A"],
      solution: `<img src="/images/quiz/wqt-dl12/8.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>Consider the following function:<br><span class="mjx-chtml MJXc-display" style="text-align: center;"></span> \\$\$ f(a, b, c, d)=\\sum m(0,1,6, 9, 11,15)+\\sum d(2,5,8,10,14). \\$\$ <br>Which of the following is/are Not a Essential Prime Implicant of \\( f? \\) </p> <p></p>`,
      image: "",
      options: [
        `\\( ac \\)`,
        `\\( ab' \\)`,
        `\\( b'd' \\)`,
        `\\( a'c'd \\)`,
      ],
      answer: ["B","C","D"],
      solution: `<img src="/images/quiz/wqt-dl12/9.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>For any Boolean function, a Non-Essential Prime Implicant is a Prime implicant that has no element that cannot be covered by other prime implicants.</p> <p>Which of the following expressions is obtained from a non-essential prime implicant for the given \\( \\text{K-map}? \\)<br>&nbsp; </p> <p style="text-align:center"><img alt="" height="236" width="405" src="https://gateoverflow.in/?qa=blob&amp;qa_blobid=9514976199923338262" style="max-width: 75%;"></p> <p>&nbsp;</p> <p></p>`,
      image: "",
      options: [
        `\\( bc’d \\)`,
        `\\( d’b’ \\)`,
        `\\( ad’ \\)`,
        `\\( abc \\)`,
      ],
      answer: ["C"],
      solution: `<img src="/images/quiz/wqt-dl12/10.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>The circuit below uses two \\( 2 \\)-to- \\( 4 \\) decoders, and inverter, and an OR gate to implement a function \\( \\mathrm{F}(\\mathrm{X}, \\mathrm{Y}, \\mathrm{Z}) \\). \\( \\mathrm{X} \\) is the most significant bit. </p> <p style="text-align:center"><img alt="" src="https://gateoverflow.in/?qa=blob&amp;qa_blobid=11492790694095266743" style="max-width: 75%;"></p> <p><br> \\( \\mathrm{F}(\\mathrm{X}, \\mathrm{Y}, \\mathrm{Z}) \\) can be expressed as (Encircle all that applies): </p> <p></p>`,
      image: "",
      options: [
        `\\( \\sum \\mathrm{m}(0,3,4,6) \\)`,
        `\\( \\sum \\mathrm{m}(0,2,4,7) \\)`,
        `\\( \\prod&nbsp;\\text{M}(1,3,5,6) \\)`,
        `\\( \\prod&nbsp;\\text{M}(1,2,5,7) \\)`,
      ],
      answer: ["B","C"],
      solution: `<img src="/images/quiz/wqt-dl12/11.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p>Consider the following circuit containing a \\( 2 \\)-to- \\( 4 \\) decoder: </p> <p style="text-align:center"><img alt="" height="249" width="440" src="https://gateoverflow.in/?qa=blob&amp;qa_blobid=6836692884319524371" style="max-width: 75%;"></p> <p><br>The following circuit behaves like:</p> <p></p>`,
      image: "",
      options: [
        `\\( 2 \\)-to- \\( 4 \\) Decoder`,
        `\\( 2 \\)-to- \\( 4 \\) Multiplexer`,
        `\\( 4 \\)-to- \\( 1 \\) De-multiplexer`,
        `\\( 4 \\)-to- \\( 1 \\) Multiplexer`,
      ],
      answer: "D",
      solution: `<img src="/images/quiz/wqt-dl12/12.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "NAT",
      text: `<p>A majority voting machine inputs three binary bits \\( (x_2, x_1, x_0) \\), and outputs \\( y=1 \\) when the majority of the input bits are \\( 1. \\) Otherwise, the output is \\( y=0 \\). Number of Prime implicants of Y which are Not Essential Prime Implicants? </p>`,
      image: "",
      options: [
      ],
      answer: "0",
      solution: `<img src="/images/quiz/wqt-dl12/13.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "NAT",
      text: `<p>A bit counting machine reads a binary input vector \\( (a, b, c, d) \\) and produces a binary number \\( (\\text{S}_{2},\\text{S}_{1},\\text{S}_{0}) \\) that counts the number of \\( 1’\\text{s} \\) in the input bits. For example when \\( (a, b, c, d)=(0,1,1,1) \\), we have output \\( (\\mathrm{S}_2, \\mathrm{S}_1, \\mathrm{S}_0)=(0,1,1) \\), and when \\( (a,b,c,d)=(1,0,1,0) \\), we have output \\( ( \\mathrm{S}_2, \\mathrm{S}_1, \\mathrm{S}_0)=(0,1,0) \\). Number of Prime Implicants of \\( \\mathrm{S}_2? \\) </p>`,
      image: "",
      options: [
      ],
      answer: "1",
      solution: `<img src="/images/quiz/wqt-dl12/14.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "NAT",
      text: `<p>A bit counting machine reads a binary input vector \\( (a, b, c, d) \\) and produces a binary number \\( (\\text{S}_{2},\\text{S}_{1},\\text{S}_{0}) \\) that counts the number of \\( 1’\\text{s} \\) in the input bits. For example when \\( (a, b, c, d)=(0,1,1,1) \\), we have output \\( (\\text{S}_{2},\\text{S}_{1},\\text{S}_{0})=(0,1,1) \\), and when \\( (a, b, c, d)=(1,0,1,0) \\), we have output \\( (\\text{S}_{2},\\text{S}_{1},\\text{S}_{0})=(0,1,0) \\). Let \\( \\mathrm{Y(a,b,c,d)} \\) be a boolean function such that \\( Y \\) is \\( 1 \\) for any input combination \\( (a,b,c,d) \\) if and only if both \\( S_1,S_0 \\) are both \\( 1 \\) for that input combination. The number of Prime Implicants in \\( \\text{Y}? \\) </p>`,
      image: "",
      options: [
      ],
      answer: "4",
      solution: `<img src="/images/quiz/wqt-dl12/15.png" style="max-width: 75%;">`
    },
  ]
});

registerTest({
  series: "weekly-cs-gate-2027",
  name: "WQT - Digital Logic-13|K-map",
  date: "Aug 17, 2026",
  questions: [
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>The output expression for the Karnaugh map shown below is</p> <p><img alt="" src="/images/quiz/wqt-dl13/q1_img1.png" style="max-width: 100%;"></p> <p></p>`,
      image: "",
      options: [
        `\\( Q \\bar{R} +S \\)`,
        `\\( Q \\bar{R} + \\bar{S} \\)`,
        `\\( QR+S \\)`,
        `\\( Q R&nbsp;+\\bar{S} \\)`,
      ],
      answer: "A",
      solution: `<img src="/images/quiz/wqt-dl13/1.png" style="max-width: 100%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>The output expression for the Karnaugh&nbsp;map shown below is</p> <p><img alt="" src="/images/quiz/wqt-dl13/q2_img2.png" style="max-width: 100%;"></p> <p></p>`,
      image: "",
      options: [
        `\\( B \\overline{D}+BCD \\)`,
        `\\( B \\overline{D}+AB \\)`,
        `\\( \\overline{B}D+ABC \\)`,
        `\\( B \\overline{D}+ABC \\)`,
      ],
      answer: "D",
      solution: `<img src="/images/quiz/wqt-dl13/2.png" style="max-width: 100%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>The output expression for the Karnaugh map shown below is</p> <p><img alt="" src="/images/quiz/wqt-dl13/q3_img3.png" style="max-width: 100%;"></p> <p></p>`,
      image: "",
      options: [
        `\\( A+\\bar{B} \\)`,
        `\\( A+\\bar{C} \\)`,
        `\\( \\bar{A}+\\bar{C} \\)`,
        `\\( \\bar{A}+C \\)`,
      ],
      answer: "B",
      solution: `<img src="/images/quiz/wqt-dl13/3.png" style="max-width: 100%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>A \\( 3 \\)-Variable Karnaugh map has : </p> <p></p>`,
      image: "",
      options: [
        `eight cells`,
        `three cells`,
        `sixteen cells`,
        `four cells`,
      ],
      answer: "A",
      solution: `<img src="/images/quiz/wqt-dl13/4.png" style="max-width: 100%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>Simplified Boolean equation for the following truth table is :</p> <p> \\( \\begin{array}{|c|c|c|c|}\\hline x&nbsp; &amp; y &amp; z &amp; F \\\\ \\hline&nbsp;\\text{0}&nbsp; &amp; \\text{0} &amp; \\text{0} &amp; \\text{0} \\\\ \\hline \\text{0}&nbsp; &amp; \\text{0} &amp; \\text{1} &amp; \\text{1} \\\\ \\hline \\text{0}&nbsp; &amp; \\text{1} &amp; \\text{0} &amp; \\text{0} \\\\ \\hline \\text{0}&nbsp; &amp; \\text{1} &amp; \\text{1} &amp; \\text{1} \\\\ \\hline \\text{1}&nbsp; &amp; \\text{0} &amp; \\text{0} &amp; \\text{1} \\\\ \\hline \\text{1}&nbsp; &amp; \\text{0} &amp; \\text{1} &amp; \\text{0} \\\\ \\hline \\text{1}&nbsp; &amp; \\text{1} &amp; \\text{0} &amp; \\text{1} \\\\ \\hline \\text{1}&nbsp; &amp; \\text{1} &amp; \\text{1} &amp; \\text{0} \\\\ \\hline \\end{array} \\) </p> <p></p>`,
      image: "",
      options: [
        `\\( F=y \\bar{z}+\\bar{y}z \\)`,
        `\\( F=x \\bar{y}+\\bar{x}y \\)`,
        `\\( F=\\bar{x}z+x\\bar{z} \\)`,
        `\\( F=\\bar{x}z+x\\bar{z}+xyz \\)`,
      ],
      answer: "C",
      solution: `<img src="/images/quiz/wqt-dl13/5.png" style="max-width: 100%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p>What will be the simplified logic expression of give figure ?<br><img alt="" src="/images/quiz/wqt-dl13/q6_img4.png" style="max-width: 100%;"></p> <p></p>`,
      image: "",
      options: [
        `\\( Q=A B \\bar{C}+A \\bar{B}+A \\bar{C} \\)`,
        `\\( \\mathrm{Q}=\\mathrm{ABC}+(\\overline{\\mathrm{A}}+\\overline{\\mathrm{B}}) \\mathrm{A} \\)`,
        `\\( Q=A B C+A \\bar{B}+B \\bar{C} \\)`,
        `\\( Q=A B C+A \\bar{B}+A \\bar{C} \\)`,
      ],
      answer: "D",
      solution: `<img src="/images/quiz/wqt-dl13/6.png" style="max-width: 100%;">`
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
      solution: `<img src="/images/quiz/wqt-dl13/7.png" style="max-width: 100%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p>Which one of the following gives the simplified sum of products expression for the Boolean function \\( F=m_{0}+m_{2}+m_{3}+m_{5} \\), where \\( m_{0},m_{2},m_{3} \\) and \\( m_{5} \\) are minterms corresponding to the inputs \\( A,B \\) and \\( C \\) with \\( A \\) as the \\( MSB \\) and \\( C \\) as the \\( LSB \\)? </p> <p></p>`,
      image: "",
      options: [
        `\\( \\overline{A}B+\\overline{A} \\: \\overline{B} \\: \\overline{C}+A\\overline{B}C \\)`,
        `\\( \\overline{A} \\: \\overline{C}+\\overline{A}B+A \\overline{B}C \\)`,
        `\\( \\overline{A} \\: \\overline{C}+A \\: \\overline{B}+A \\overline{B} C \\)`,
        `\\( \\overline{A} BC+\\overline{A} \\: \\overline{C}+A \\overline{B}C \\)`,
      ],
      answer: "B",
      solution: `<img src="/images/quiz/wqt-dl13/8.png" style="max-width: 100%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "NAT",
      text: `<p>The number of essential prime implicants in the function \\( f(a, b, c, d) = Σ(1, 2, 4, 5, 6, 7, 8, 9, 10, 11, 12, 15) \\) is ________. </p>`,
      image: "",
      options: [],
      answer: "0",
      solution: `<img src="/images/quiz/wqt-dl13/9.png" style="max-width: 100%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "NAT",
      text: `<p>The number of essential prime implicates of \\( F(A,B,C,D)=∑m(0,1,5,7,10,14,15) \\)are___________. </p>`,
      image: "",
      options: [],
      answer: "1",
      solution: `<img src="/images/quiz/wqt-dl13/10.png" style="max-width: 100%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p>Identify the number of prime implicants and essential prime implicants for the function<br> \$\$ f(A, B, C, D)=\\Sigma m(0,1,4,6,7,8,10,14,15) \$\$<br>(where m represents min terms)<br>&nbsp; </p> <p></p>`,
      image: "",
      options: [
        `\\( 7 \\), \\( 2 \\)<br>&nbsp;`,
        `\\( 6 \\), \\( 2 \\)<br>&nbsp;`,
        `\\( 7 \\), \\( 1 \\)<br>&nbsp;`,
        `\\( 6 \\), \\( 1 \\)`,
      ],
      answer: "A",
      solution: `<img src="/images/quiz/wqt-dl13/11.png" style="max-width: 100%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "NAT",
      text: `<p>The number of essential prime implicants for the Function \\( Y= \\) \\( A^{\\prime} B^{\\prime} C^{\\prime} D+A^{\\prime} B C D^{\\prime}+A B C^{\\prime} D^{\\prime} \\) is given by \\( \\qquad \\) </p>`,
      image: "",
      options: [],
      answer: "3",
      solution: `<img src="/images/quiz/wqt-dl13/12.png" style="max-width: 100%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p>Simplify the following using K-Map<br> \$\$ \\mathrm{F}(\\mathrm{~A}, \\mathrm{~B}, \\mathrm{C}, \\mathrm{D})=\\sum(0,2,5,7,8,10,13,15) \$\$ </p> <p></p>`,
      image: "",
      options: [
        `\\( \\mathrm{BD}+\\mathrm{B}^{\\prime} \\mathrm{D}^{\\prime} \\)`,
        `\\( \\mathrm{AC}+\\mathrm{A}^{\\prime} \\mathrm{C}^{\\prime} \\)`,
        `\\( \\mathrm{BC}+\\mathrm{B}^{\\prime} \\mathrm{C}^{\\prime} \\)`,
        `\\( \\mathrm{AD}+\\mathrm{A}^{\\prime} \\mathrm{D}^{\\prime} \\)`,
      ],
      answer: "A",
      solution: `<img src="/images/quiz/wqt-dl13/13.png" style="max-width: 100%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p><img alt="" src="/images/quiz/wqt-dl13/q14_img5.png" style="max-width: 100%;"></p> <p></p>`,
      image: "",
      options: [],
      answer: "A",
      solution: `<img src="/images/quiz/wqt-dl13/14.png" style="max-width: 100%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p>A number of Boolean functions conform to the map shown below:<br><img alt="" src="/images/quiz/wqt-dl13/q15_img6.png" style="max-width: 100%;"><br>What is the minimum "sum of product" expression among the particular functions, having four minterms, that conform to the above map ?</p> <p></p>`,
      image: "",
      options: [
        `\\( \\mathrm{B}^{\\prime}+\\mathrm{C} \\)`,
        `\\( A^{\\prime} B^{\\prime}+A C \\)`,
        `\\( A^{\\prime} B^{\\prime}+B^{\\prime} C^{\\prime}+A B C \\)`,
        `None`,
      ],
      answer: "B",
      solution: `<img src="/images/quiz/wqt-dl13/15.png" style="max-width: 100%;">`
    },
  ]
});
