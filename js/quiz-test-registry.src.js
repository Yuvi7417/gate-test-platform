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
      text: `<p></p> <p>Consider the following circuit using two <span class="MathJax_Preview" style="color: inherit;"></span><span id="MathJax-Element-1-Frame" class="mjx-chtml MathJax_CHTML" tabindex="0" data-mathml="<math xmlns=&quot;http://www.w3.org/1998/Math/MathML&quot;><mn>2</mn><mo>&amp;#x00D7;</mo><mn>1</mn></math>" role="presentation" style="font-size: 113%; position: relative;"><span id="MJXc-Node-1" class="mjx-math" aria-hidden="true"><span id="MJXc-Node-2" class="mjx-mrow"><span id="MJXc-Node-3" class="mjx-mn"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.39em; padding-bottom: 0.335em;">2</span></span><span id="MJXc-Node-4" class="mjx-mo MJXc-space2"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.224em; padding-bottom: 0.335em;">×</span></span><span id="MJXc-Node-5" class="mjx-mn MJXc-space2"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.39em; padding-bottom: 0.335em;">1</span></span></span></span><span class="MJX_Assistive_MathML" role="presentation"><math xmlns="http://www.w3.org/1998/Math/MathML">
                            <mn>2</mn>
                            <mo>×</mo>
                            <mn>1</mn>
                        </math></span></span>
                <script type="math/tex" id="MathJax-Element-1">2\times 1</script> multiplexers:<br><img alt="" src="https://gateoverflow.in/?qa=blob&amp;qa_blobid=324587819628278614" style="max-width: 75%;"><br>Which of the following
                is the correct behavior of this circuit?
            </p> <p></p>`,
      image: "",
      options: [
        `When <span class="MathJax_Preview" style="color: inherit;"></span><span id="MathJax-Element-2-Frame" class="mjx-chtml MathJax_CHTML" tabindex="0" data-mathml="<math xmlns=&quot;http://www.w3.org/1998/Math/MathML&quot;><mi>s</mi><mo>=</mo><mn>0</mn></math>" role="presentation" style="font-size: 113%; position: relative;"><span id="MJXc-Node-6" class="mjx-math" aria-hidden="true"><span id="MJXc-Node-7" class="mjx-mrow"><span id="MJXc-Node-8" class="mjx-mi"><span class="mjx-char MJXc-TeX-math-I" style="padding-top: 0.224em; padding-bottom: 0.279em;">s</span></span><span id="MJXc-Node-9" class="mjx-mo MJXc-space3"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.058em; padding-bottom: 0.335em;">=</span></span><span id="MJXc-Node-10" class="mjx-mn MJXc-space3"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.39em; padding-bottom: 0.39em;">0</span></span></span></span><span class="MJX_Assistive_MathML" role="presentation"><math xmlns="http://www.w3.org/1998/Math/MathML">
                                <mi>s</mi>
                                <mo>=</mo>
                                <mn>0</mn>
                            </math></span></span>
                    <script type="math/tex" id="MathJax-Element-2">s=0</script> then <span class="MathJax_Preview" style="color: inherit;"></span><span id="MathJax-Element-3-Frame" class="mjx-chtml MathJax_CHTML" tabindex="0" data-mathml="<math xmlns=&quot;http://www.w3.org/1998/Math/MathML&quot;><msub><mi>y</mi><mrow class=&quot;MJX-TeXAtom-ORD&quot;><mn>1</mn></mrow></msub><mo>=</mo><msub><mi>x</mi><mrow class=&quot;MJX-TeXAtom-ORD&quot;><mn>1</mn></mrow></msub><mo>,</mo><msub><mi>y</mi><mrow class=&quot;MJX-TeXAtom-ORD&quot;><mn>2</mn></mrow></msub><mo>=</mo><msub><mi>x</mi><mrow class=&quot;MJX-TeXAtom-ORD&quot;><mn>2</mn></mrow></msub></math>" role="presentation" style="font-size: 113%; position: relative;"><span id="MJXc-Node-11" class="mjx-math" aria-hidden="true"><span id="MJXc-Node-12" class="mjx-mrow"><span id="MJXc-Node-13" class="mjx-msubsup"><span class="mjx-base" style="margin-right: -0.006em;"><span id="MJXc-Node-14" class="mjx-mi"><span class="mjx-char MJXc-TeX-math-I" style="padding-top: 0.224em; padding-bottom: 0.501em; padding-right: 0.006em;">y</span></span></span><span class="mjx-sub" style="font-size: 70.7%; vertical-align: -0.212em; padding-right: 0.071em;"><span id="MJXc-Node-15" class="mjx-texatom" style=""><span id="MJXc-Node-16" class="mjx-mrow"><span id="MJXc-Node-17" class="mjx-mn"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.39em; padding-bottom: 0.335em;">1</span></span></span></span></span></span><span id="MJXc-Node-18" class="mjx-mo MJXc-space3"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.058em; padding-bottom: 0.335em;">=</span></span><span id="MJXc-Node-19" class="mjx-msubsup MJXc-space3"><span class="mjx-base"><span id="MJXc-Node-20" class="mjx-mi"><span class="mjx-char MJXc-TeX-math-I" style="padding-top: 0.224em; padding-bottom: 0.279em;">x</span></span></span><span class="mjx-sub" style="font-size: 70.7%; vertical-align: -0.212em; padding-right: 0.071em;"><span id="MJXc-Node-21" class="mjx-texatom" style=""><span id="MJXc-Node-22" class="mjx-mrow"><span id="MJXc-Node-23" class="mjx-mn"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.39em; padding-bottom: 0.335em;">1</span></span></span></span></span></span><span id="MJXc-Node-24" class="mjx-mo"><span class="mjx-char MJXc-TeX-main-R" style="margin-top: -0.163em; padding-bottom: 0.556em;">,</span></span><span id="MJXc-Node-25" class="mjx-msubsup MJXc-space1"><span class="mjx-base" style="margin-right: -0.006em;"><span id="MJXc-Node-26" class="mjx-mi"><span class="mjx-char MJXc-TeX-math-I" style="padding-top: 0.224em; padding-bottom: 0.501em; padding-right: 0.006em;">y</span></span></span><span class="mjx-sub" style="font-size: 70.7%; vertical-align: -0.212em; padding-right: 0.071em;"><span id="MJXc-Node-27" class="mjx-texatom" style=""><span id="MJXc-Node-28" class="mjx-mrow"><span id="MJXc-Node-29" class="mjx-mn"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.39em; padding-bottom: 0.335em;">2</span></span></span></span></span></span><span id="MJXc-Node-30" class="mjx-mo MJXc-space3"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.058em; padding-bottom: 0.335em;">=</span></span><span id="MJXc-Node-31" class="mjx-msubsup MJXc-space3"><span class="mjx-base"><span id="MJXc-Node-32" class="mjx-mi"><span class="mjx-char MJXc-TeX-math-I" style="padding-top: 0.224em; padding-bottom: 0.279em;">x</span></span></span><span class="mjx-sub" style="font-size: 70.7%; vertical-align: -0.212em; padding-right: 0.071em;"><span id="MJXc-Node-33" class="mjx-texatom" style=""><span id="MJXc-Node-34" class="mjx-mrow"><span id="MJXc-Node-35" class="mjx-mn"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.39em; padding-bottom: 0.335em;">2</span></span></span></span></span></span></span></span><span class="MJX_Assistive_MathML" role="presentation"><math xmlns="http://www.w3.org/1998/Math/MathML">
                                <msub>
                                    <mi>y</mi>
                                    <mrow class="MJX-TeXAtom-ORD">
                                        <mn>1</mn>
                                    </mrow>
                                </msub>
                                <mo>=</mo>
                                <msub>
                                    <mi>x</mi>
                                    <mrow class="MJX-TeXAtom-ORD">
                                        <mn>1</mn>
                                    </mrow>
                                </msub>
                                <mo>,</mo>
                                <msub>
                                    <mi>y</mi>
                                    <mrow class="MJX-TeXAtom-ORD">
                                        <mn>2</mn>
                                    </mrow>
                                </msub>
                                <mo>=</mo>
                                <msub>
                                    <mi>x</mi>
                                    <mrow class="MJX-TeXAtom-ORD">
                                        <mn>2</mn>
                                    </mrow>
                                </msub>
                            </math></span></span>
                    <script type="math/tex" id="MathJax-Element-3">y_{1}=x_{1}, y_{2}=x_{2}</script>`,
        `When <span class="MathJax_Preview" style="color: inherit;"></span><span id="MathJax-Element-4-Frame" class="mjx-chtml MathJax_CHTML" tabindex="0" data-mathml="<math xmlns=&quot;http://www.w3.org/1998/Math/MathML&quot;><mi>s</mi><mo>=</mo><mn>0</mn></math>" role="presentation" style="font-size: 113%; position: relative;"><span id="MJXc-Node-36" class="mjx-math" aria-hidden="true"><span id="MJXc-Node-37" class="mjx-mrow"><span id="MJXc-Node-38" class="mjx-mi"><span class="mjx-char MJXc-TeX-math-I" style="padding-top: 0.224em; padding-bottom: 0.279em;">s</span></span><span id="MJXc-Node-39" class="mjx-mo MJXc-space3"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.058em; padding-bottom: 0.335em;">=</span></span><span id="MJXc-Node-40" class="mjx-mn MJXc-space3"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.39em; padding-bottom: 0.39em;">0</span></span></span></span><span class="MJX_Assistive_MathML" role="presentation"><math xmlns="http://www.w3.org/1998/Math/MathML">
                                <mi>s</mi>
                                <mo>=</mo>
                                <mn>0</mn>
                            </math></span></span>
                    <script type="math/tex" id="MathJax-Element-4">s=0</script> then <span class="MathJax_Preview" style="color: inherit;"></span><span id="MathJax-Element-5-Frame" class="mjx-chtml MathJax_CHTML" tabindex="0" data-mathml="<math xmlns=&quot;http://www.w3.org/1998/Math/MathML&quot;><msub><mi>y</mi><mrow class=&quot;MJX-TeXAtom-ORD&quot;><mn>1</mn></mrow></msub><mo>=</mo><msub><mi>x</mi><mrow class=&quot;MJX-TeXAtom-ORD&quot;><mn>2</mn></mrow></msub><mo>,</mo><msub><mi>y</mi><mrow class=&quot;MJX-TeXAtom-ORD&quot;><mn>2</mn></mrow></msub><mo>=</mo><msub><mi>x</mi><mrow class=&quot;MJX-TeXAtom-ORD&quot;><mn>1</mn></mrow></msub></math>" role="presentation" style="font-size: 113%; position: relative;"><span id="MJXc-Node-41" class="mjx-math" aria-hidden="true"><span id="MJXc-Node-42" class="mjx-mrow"><span id="MJXc-Node-43" class="mjx-msubsup"><span class="mjx-base" style="margin-right: -0.006em;"><span id="MJXc-Node-44" class="mjx-mi"><span class="mjx-char MJXc-TeX-math-I" style="padding-top: 0.224em; padding-bottom: 0.501em; padding-right: 0.006em;">y</span></span></span><span class="mjx-sub" style="font-size: 70.7%; vertical-align: -0.212em; padding-right: 0.071em;"><span id="MJXc-Node-45" class="mjx-texatom" style=""><span id="MJXc-Node-46" class="mjx-mrow"><span id="MJXc-Node-47" class="mjx-mn"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.39em; padding-bottom: 0.335em;">1</span></span></span></span></span></span><span id="MJXc-Node-48" class="mjx-mo MJXc-space3"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.058em; padding-bottom: 0.335em;">=</span></span><span id="MJXc-Node-49" class="mjx-msubsup MJXc-space3"><span class="mjx-base"><span id="MJXc-Node-50" class="mjx-mi"><span class="mjx-char MJXc-TeX-math-I" style="padding-top: 0.224em; padding-bottom: 0.279em;">x</span></span></span><span class="mjx-sub" style="font-size: 70.7%; vertical-align: -0.212em; padding-right: 0.071em;"><span id="MJXc-Node-51" class="mjx-texatom" style=""><span id="MJXc-Node-52" class="mjx-mrow"><span id="MJXc-Node-53" class="mjx-mn"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.39em; padding-bottom: 0.335em;">2</span></span></span></span></span></span><span id="MJXc-Node-54" class="mjx-mo"><span class="mjx-char MJXc-TeX-main-R" style="margin-top: -0.163em; padding-bottom: 0.556em;">,</span></span><span id="MJXc-Node-55" class="mjx-msubsup MJXc-space1"><span class="mjx-base" style="margin-right: -0.006em;"><span id="MJXc-Node-56" class="mjx-mi"><span class="mjx-char MJXc-TeX-math-I" style="padding-top: 0.224em; padding-bottom: 0.501em; padding-right: 0.006em;">y</span></span></span><span class="mjx-sub" style="font-size: 70.7%; vertical-align: -0.212em; padding-right: 0.071em;"><span id="MJXc-Node-57" class="mjx-texatom" style=""><span id="MJXc-Node-58" class="mjx-mrow"><span id="MJXc-Node-59" class="mjx-mn"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.39em; padding-bottom: 0.335em;">2</span></span></span></span></span></span><span id="MJXc-Node-60" class="mjx-mo MJXc-space3"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.058em; padding-bottom: 0.335em;">=</span></span><span id="MJXc-Node-61" class="mjx-msubsup MJXc-space3"><span class="mjx-base"><span id="MJXc-Node-62" class="mjx-mi"><span class="mjx-char MJXc-TeX-math-I" style="padding-top: 0.224em; padding-bottom: 0.279em;">x</span></span></span><span class="mjx-sub" style="font-size: 70.7%; vertical-align: -0.212em; padding-right: 0.071em;"><span id="MJXc-Node-63" class="mjx-texatom" style=""><span id="MJXc-Node-64" class="mjx-mrow"><span id="MJXc-Node-65" class="mjx-mn"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.39em; padding-bottom: 0.335em;">1</span></span></span></span></span></span></span></span><span class="MJX_Assistive_MathML" role="presentation"><math xmlns="http://www.w3.org/1998/Math/MathML">
                                <msub>
                                    <mi>y</mi>
                                    <mrow class="MJX-TeXAtom-ORD">
                                        <mn>1</mn>
                                    </mrow>
                                </msub>
                                <mo>=</mo>
                                <msub>
                                    <mi>x</mi>
                                    <mrow class="MJX-TeXAtom-ORD">
                                        <mn>2</mn>
                                    </mrow>
                                </msub>
                                <mo>,</mo>
                                <msub>
                                    <mi>y</mi>
                                    <mrow class="MJX-TeXAtom-ORD">
                                        <mn>2</mn>
                                    </mrow>
                                </msub>
                                <mo>=</mo>
                                <msub>
                                    <mi>x</mi>
                                    <mrow class="MJX-TeXAtom-ORD">
                                        <mn>1</mn>
                                    </mrow>
                                </msub>
                            </math></span></span>
                    <script type="math/tex" id="MathJax-Element-5">y_{1}=x_{2}, y_{2}=x_{1}</script>`,
        `When <span class="MathJax_Preview" style="color: inherit;"></span><span id="MathJax-Element-6-Frame" class="mjx-chtml MathJax_CHTML" tabindex="0" data-mathml="<math xmlns=&quot;http://www.w3.org/1998/Math/MathML&quot;><mi>s</mi><mo>=</mo><mn>1</mn></math>" role="presentation" style="font-size: 113%; position: relative;"><span id="MJXc-Node-66" class="mjx-math" aria-hidden="true"><span id="MJXc-Node-67" class="mjx-mrow"><span id="MJXc-Node-68" class="mjx-mi"><span class="mjx-char MJXc-TeX-math-I" style="padding-top: 0.224em; padding-bottom: 0.279em;">s</span></span><span id="MJXc-Node-69" class="mjx-mo MJXc-space3"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.058em; padding-bottom: 0.335em;">=</span></span><span id="MJXc-Node-70" class="mjx-mn MJXc-space3"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.39em; padding-bottom: 0.335em;">1</span></span></span></span><span class="MJX_Assistive_MathML" role="presentation"><math xmlns="http://www.w3.org/1998/Math/MathML">
                                <mi>s</mi>
                                <mo>=</mo>
                                <mn>1</mn>
                            </math></span></span>
                    <script type="math/tex" id="MathJax-Element-6">s=1</script> then <span class="MathJax_Preview" style="color: inherit;"></span><span id="MathJax-Element-7-Frame" class="mjx-chtml MathJax_CHTML" tabindex="0" data-mathml="<math xmlns=&quot;http://www.w3.org/1998/Math/MathML&quot;><msub><mi>y</mi><mrow class=&quot;MJX-TeXAtom-ORD&quot;><mn>1</mn></mrow></msub><mo>=</mo><msub><mi>x</mi><mrow class=&quot;MJX-TeXAtom-ORD&quot;><mn>1</mn></mrow></msub><mo>,</mo><msub><mi>y</mi><mrow class=&quot;MJX-TeXAtom-ORD&quot;><mn>2</mn></mrow></msub><mo>=</mo><msub><mi>x</mi><mrow class=&quot;MJX-TeXAtom-ORD&quot;><mn>2</mn></mrow></msub></math>" role="presentation" style="font-size: 113%; position: relative;"><span id="MJXc-Node-71" class="mjx-math" aria-hidden="true"><span id="MJXc-Node-72" class="mjx-mrow"><span id="MJXc-Node-73" class="mjx-msubsup"><span class="mjx-base" style="margin-right: -0.006em;"><span id="MJXc-Node-74" class="mjx-mi"><span class="mjx-char MJXc-TeX-math-I" style="padding-top: 0.224em; padding-bottom: 0.501em; padding-right: 0.006em;">y</span></span></span><span class="mjx-sub" style="font-size: 70.7%; vertical-align: -0.212em; padding-right: 0.071em;"><span id="MJXc-Node-75" class="mjx-texatom" style=""><span id="MJXc-Node-76" class="mjx-mrow"><span id="MJXc-Node-77" class="mjx-mn"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.39em; padding-bottom: 0.335em;">1</span></span></span></span></span></span><span id="MJXc-Node-78" class="mjx-mo MJXc-space3"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.058em; padding-bottom: 0.335em;">=</span></span><span id="MJXc-Node-79" class="mjx-msubsup MJXc-space3"><span class="mjx-base"><span id="MJXc-Node-80" class="mjx-mi"><span class="mjx-char MJXc-TeX-math-I" style="padding-top: 0.224em; padding-bottom: 0.279em;">x</span></span></span><span class="mjx-sub" style="font-size: 70.7%; vertical-align: -0.212em; padding-right: 0.071em;"><span id="MJXc-Node-81" class="mjx-texatom" style=""><span id="MJXc-Node-82" class="mjx-mrow"><span id="MJXc-Node-83" class="mjx-mn"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.39em; padding-bottom: 0.335em;">1</span></span></span></span></span></span><span id="MJXc-Node-84" class="mjx-mo"><span class="mjx-char MJXc-TeX-main-R" style="margin-top: -0.163em; padding-bottom: 0.556em;">,</span></span><span id="MJXc-Node-85" class="mjx-msubsup MJXc-space1"><span class="mjx-base" style="margin-right: -0.006em;"><span id="MJXc-Node-86" class="mjx-mi"><span class="mjx-char MJXc-TeX-math-I" style="padding-top: 0.224em; padding-bottom: 0.501em; padding-right: 0.006em;">y</span></span></span><span class="mjx-sub" style="font-size: 70.7%; vertical-align: -0.212em; padding-right: 0.071em;"><span id="MJXc-Node-87" class="mjx-texatom" style=""><span id="MJXc-Node-88" class="mjx-mrow"><span id="MJXc-Node-89" class="mjx-mn"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.39em; padding-bottom: 0.335em;">2</span></span></span></span></span></span><span id="MJXc-Node-90" class="mjx-mo MJXc-space3"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.058em; padding-bottom: 0.335em;">=</span></span><span id="MJXc-Node-91" class="mjx-msubsup MJXc-space3"><span class="mjx-base"><span id="MJXc-Node-92" class="mjx-mi"><span class="mjx-char MJXc-TeX-math-I" style="padding-top: 0.224em; padding-bottom: 0.279em;">x</span></span></span><span class="mjx-sub" style="font-size: 70.7%; vertical-align: -0.212em; padding-right: 0.071em;"><span id="MJXc-Node-93" class="mjx-texatom" style=""><span id="MJXc-Node-94" class="mjx-mrow"><span id="MJXc-Node-95" class="mjx-mn"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.39em; padding-bottom: 0.335em;">2</span></span></span></span></span></span></span></span><span class="MJX_Assistive_MathML" role="presentation"><math xmlns="http://www.w3.org/1998/Math/MathML">
                                <msub>
                                    <mi>y</mi>
                                    <mrow class="MJX-TeXAtom-ORD">
                                        <mn>1</mn>
                                    </mrow>
                                </msub>
                                <mo>=</mo>
                                <msub>
                                    <mi>x</mi>
                                    <mrow class="MJX-TeXAtom-ORD">
                                        <mn>1</mn>
                                    </mrow>
                                </msub>
                                <mo>,</mo>
                                <msub>
                                    <mi>y</mi>
                                    <mrow class="MJX-TeXAtom-ORD">
                                        <mn>2</mn>
                                    </mrow>
                                </msub>
                                <mo>=</mo>
                                <msub>
                                    <mi>x</mi>
                                    <mrow class="MJX-TeXAtom-ORD">
                                        <mn>2</mn>
                                    </mrow>
                                </msub>
                            </math></span></span>
                    <script type="math/tex" id="MathJax-Element-7">y_{1}=x_{1}, y_{2}=x_{2}</script>`,
        `When <span class="MathJax_Preview" style="color: inherit;"></span><span id="MathJax-Element-8-Frame" class="mjx-chtml MathJax_CHTML" tabindex="0" data-mathml="<math xmlns=&quot;http://www.w3.org/1998/Math/MathML&quot;><mi>s</mi><mo>=</mo><mn>1</mn></math>" role="presentation" style="font-size: 113%; position: relative;"><span id="MJXc-Node-96" class="mjx-math" aria-hidden="true"><span id="MJXc-Node-97" class="mjx-mrow"><span id="MJXc-Node-98" class="mjx-mi"><span class="mjx-char MJXc-TeX-math-I" style="padding-top: 0.224em; padding-bottom: 0.279em;">s</span></span><span id="MJXc-Node-99" class="mjx-mo MJXc-space3"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.058em; padding-bottom: 0.335em;">=</span></span><span id="MJXc-Node-100" class="mjx-mn MJXc-space3"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.39em; padding-bottom: 0.335em;">1</span></span></span></span><span class="MJX_Assistive_MathML" role="presentation"><math xmlns="http://www.w3.org/1998/Math/MathML">
                                <mi>s</mi>
                                <mo>=</mo>
                                <mn>1</mn>
                            </math></span></span>
                    <script type="math/tex" id="MathJax-Element-8">s=1</script> then <span class="MathJax_Preview" style="color: inherit;"></span><span id="MathJax-Element-9-Frame" class="mjx-chtml MathJax_CHTML" tabindex="0" data-mathml="<math xmlns=&quot;http://www.w3.org/1998/Math/MathML&quot;><msub><mi>y</mi><mrow class=&quot;MJX-TeXAtom-ORD&quot;><mn>1</mn></mrow></msub><mo>=</mo><msub><mi>x</mi><mrow class=&quot;MJX-TeXAtom-ORD&quot;><mn>2</mn></mrow></msub><mo>,</mo><msub><mi>y</mi><mrow class=&quot;MJX-TeXAtom-ORD&quot;><mn>2</mn></mrow></msub><mo>=</mo><msub><mi>x</mi><mrow class=&quot;MJX-TeXAtom-ORD&quot;><mn>1</mn></mrow></msub></math>" role="presentation" style="font-size: 113%; position: relative;"><span id="MJXc-Node-101" class="mjx-math" aria-hidden="true"><span id="MJXc-Node-102" class="mjx-mrow"><span id="MJXc-Node-103" class="mjx-msubsup"><span class="mjx-base" style="margin-right: -0.006em;"><span id="MJXc-Node-104" class="mjx-mi"><span class="mjx-char MJXc-TeX-math-I" style="padding-top: 0.224em; padding-bottom: 0.501em; padding-right: 0.006em;">y</span></span></span><span class="mjx-sub" style="font-size: 70.7%; vertical-align: -0.212em; padding-right: 0.071em;"><span id="MJXc-Node-105" class="mjx-texatom" style=""><span id="MJXc-Node-106" class="mjx-mrow"><span id="MJXc-Node-107" class="mjx-mn"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.39em; padding-bottom: 0.335em;">1</span></span></span></span></span></span><span id="MJXc-Node-108" class="mjx-mo MJXc-space3"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.058em; padding-bottom: 0.335em;">=</span></span><span id="MJXc-Node-109" class="mjx-msubsup MJXc-space3"><span class="mjx-base"><span id="MJXc-Node-110" class="mjx-mi"><span class="mjx-char MJXc-TeX-math-I" style="padding-top: 0.224em; padding-bottom: 0.279em;">x</span></span></span><span class="mjx-sub" style="font-size: 70.7%; vertical-align: -0.212em; padding-right: 0.071em;"><span id="MJXc-Node-111" class="mjx-texatom" style=""><span id="MJXc-Node-112" class="mjx-mrow"><span id="MJXc-Node-113" class="mjx-mn"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.39em; padding-bottom: 0.335em;">2</span></span></span></span></span></span><span id="MJXc-Node-114" class="mjx-mo"><span class="mjx-char MJXc-TeX-main-R" style="margin-top: -0.163em; padding-bottom: 0.556em;">,</span></span><span id="MJXc-Node-115" class="mjx-msubsup MJXc-space1"><span class="mjx-base" style="margin-right: -0.006em;"><span id="MJXc-Node-116" class="mjx-mi"><span class="mjx-char MJXc-TeX-math-I" style="padding-top: 0.224em; padding-bottom: 0.501em; padding-right: 0.006em;">y</span></span></span><span class="mjx-sub" style="font-size: 70.7%; vertical-align: -0.212em; padding-right: 0.071em;"><span id="MJXc-Node-117" class="mjx-texatom" style=""><span id="MJXc-Node-118" class="mjx-mrow"><span id="MJXc-Node-119" class="mjx-mn"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.39em; padding-bottom: 0.335em;">2</span></span></span></span></span></span><span id="MJXc-Node-120" class="mjx-mo MJXc-space3"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.058em; padding-bottom: 0.335em;">=</span></span><span id="MJXc-Node-121" class="mjx-msubsup MJXc-space3"><span class="mjx-base"><span id="MJXc-Node-122" class="mjx-mi"><span class="mjx-char MJXc-TeX-math-I" style="padding-top: 0.224em; padding-bottom: 0.279em;">x</span></span></span><span class="mjx-sub" style="font-size: 70.7%; vertical-align: -0.212em; padding-right: 0.071em;"><span id="MJXc-Node-123" class="mjx-texatom" style=""><span id="MJXc-Node-124" class="mjx-mrow"><span id="MJXc-Node-125" class="mjx-mn"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.39em; padding-bottom: 0.335em;">1</span></span></span></span></span></span></span></span><span class="MJX_Assistive_MathML" role="presentation"><math xmlns="http://www.w3.org/1998/Math/MathML">
                                <msub>
                                    <mi>y</mi>
                                    <mrow class="MJX-TeXAtom-ORD">
                                        <mn>1</mn>
                                    </mrow>
                                </msub>
                                <mo>=</mo>
                                <msub>
                                    <mi>x</mi>
                                    <mrow class="MJX-TeXAtom-ORD">
                                        <mn>2</mn>
                                    </mrow>
                                </msub>
                                <mo>,</mo>
                                <msub>
                                    <mi>y</mi>
                                    <mrow class="MJX-TeXAtom-ORD">
                                        <mn>2</mn>
                                    </mrow>
                                </msub>
                                <mo>=</mo>
                                <msub>
                                    <mi>x</mi>
                                    <mrow class="MJX-TeXAtom-ORD">
                                        <mn>1</mn>
                                    </mrow>
                                </msub>
                            </math></span></span>
                    <script type="math/tex" id="MathJax-Element-9">y_{1}=x_{2}, y_{2}=x_{1}</script>`,
      ],
      answer: "A",
      solution: ``
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>Consider the following boolean equations:</p> <p>Which of the above is correct?</p> <p></p>`,
      image: "",
      options: [
        `<span class="MathJax_Preview" style="color: inherit;"></span><span id="MathJax-Element-10-Frame" class="mjx-chtml MathJax_CHTML" tabindex="0" data-mathml="<math xmlns=&quot;http://www.w3.org/1998/Math/MathML&quot;><mi>b</mi><mi>d</mi><mo>+</mo><mi>a</mi><mi>c</mi><msup><mi>d</mi><mrow class=&quot;MJX-TeXAtom-ORD&quot;><mi class=&quot;MJX-variant&quot; mathvariant=&quot;normal&quot;>&amp;#x2032;</mi></mrow></msup><mo>+</mo><mi>a</mi><mi>b</mi><mi>c</mi><mo>=</mo><mi>b</mi><mi>d</mi><mo>+</mo><mi>a</mi><mi>c</mi><msup><mi>d</mi><mrow class=&quot;MJX-TeXAtom-ORD&quot;><mi class=&quot;MJX-variant&quot; mathvariant=&quot;normal&quot;>&amp;#x2032;</mi></mrow></msup></math>" role="presentation" style="font-size: 113%; position: relative;"><span id="MJXc-Node-126" class="mjx-math" aria-hidden="true"><span id="MJXc-Node-127" class="mjx-mrow"><span id="MJXc-Node-128" class="mjx-mi"><span class="mjx-char MJXc-TeX-math-I" style="padding-top: 0.445em; padding-bottom: 0.279em;">b</span></span><span id="MJXc-Node-129" class="mjx-mi"><span class="mjx-char MJXc-TeX-math-I" style="padding-top: 0.445em; padding-bottom: 0.279em; padding-right: 0.003em;">d</span></span><span id="MJXc-Node-130" class="mjx-mo MJXc-space2"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.279em; padding-bottom: 0.445em;">+</span></span><span id="MJXc-Node-131" class="mjx-mi MJXc-space2"><span class="mjx-char MJXc-TeX-math-I" style="padding-top: 0.224em; padding-bottom: 0.279em;">a</span></span><span id="MJXc-Node-132" class="mjx-mi"><span class="mjx-char MJXc-TeX-math-I" style="padding-top: 0.224em; padding-bottom: 0.279em;">c</span></span><span id="MJXc-Node-133" class="mjx-msubsup"><span class="mjx-base" style="margin-right: -0.003em;"><span id="MJXc-Node-134" class="mjx-mi"><span class="mjx-char MJXc-TeX-math-I" style="padding-top: 0.445em; padding-bottom: 0.279em; padding-right: 0.003em;">d</span></span></span><span class="mjx-sup" style="font-size: 70.7%; vertical-align: 0.513em; padding-left: 0.076em; padding-right: 0.071em;"><span id="MJXc-Node-135" class="mjx-texatom" style=""><span id="MJXc-Node-136" class="mjx-mrow"><span id="MJXc-Node-137" class="mjx-mi"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.279em; padding-bottom: 0.335em;">′</span></span></span></span></span></span><span id="MJXc-Node-138" class="mjx-mo MJXc-space2"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.279em; padding-bottom: 0.445em;">+</span></span><span id="MJXc-Node-139" class="mjx-mi MJXc-space2"><span class="mjx-char MJXc-TeX-math-I" style="padding-top: 0.224em; padding-bottom: 0.279em;">a</span></span><span id="MJXc-Node-140" class="mjx-mi"><span class="mjx-char MJXc-TeX-math-I" style="padding-top: 0.445em; padding-bottom: 0.279em;">b</span></span><span id="MJXc-Node-141" class="mjx-mi"><span class="mjx-char MJXc-TeX-math-I" style="padding-top: 0.224em; padding-bottom: 0.279em;">c</span></span><span id="MJXc-Node-142" class="mjx-mo MJXc-space3"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.058em; padding-bottom: 0.335em;">=</span></span><span id="MJXc-Node-143" class="mjx-mi MJXc-space3"><span class="mjx-char MJXc-TeX-math-I" style="padding-top: 0.445em; padding-bottom: 0.279em;">b</span></span><span id="MJXc-Node-144" class="mjx-mi"><span class="mjx-char MJXc-TeX-math-I" style="padding-top: 0.445em; padding-bottom: 0.279em; padding-right: 0.003em;">d</span></span><span id="MJXc-Node-145" class="mjx-mo MJXc-space2"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.279em; padding-bottom: 0.445em;">+</span></span><span id="MJXc-Node-146" class="mjx-mi MJXc-space2"><span class="mjx-char MJXc-TeX-math-I" style="padding-top: 0.224em; padding-bottom: 0.279em;">a</span></span><span id="MJXc-Node-147" class="mjx-mi"><span class="mjx-char MJXc-TeX-math-I" style="padding-top: 0.224em; padding-bottom: 0.279em;">c</span></span><span id="MJXc-Node-148" class="mjx-msubsup"><span class="mjx-base" style="margin-right: -0.003em;"><span id="MJXc-Node-149" class="mjx-mi"><span class="mjx-char MJXc-TeX-math-I" style="padding-top: 0.445em; padding-bottom: 0.279em; padding-right: 0.003em;">d</span></span></span><span class="mjx-sup" style="font-size: 70.7%; vertical-align: 0.513em; padding-left: 0.076em; padding-right: 0.071em;"><span id="MJXc-Node-150" class="mjx-texatom" style=""><span id="MJXc-Node-151" class="mjx-mrow"><span id="MJXc-Node-152" class="mjx-mi"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.279em; padding-bottom: 0.335em;">′</span></span></span></span></span></span></span></span><span class="MJX_Assistive_MathML" role="presentation"><math xmlns="http://www.w3.org/1998/Math/MathML">
                                <mi>b</mi>
                                <mi>d</mi>
                                <mo>+</mo>
                                <mi>a</mi>
                                <mi>c</mi>
                                <msup>
                                    <mi>d</mi>
                                    <mrow class="MJX-TeXAtom-ORD">
                                        <mi class="MJX-variant" mathvariant="normal">′</mi>
                                    </mrow>
                                </msup>
                                <mo>+</mo>
                                <mi>a</mi>
                                <mi>b</mi>
                                <mi>c</mi>
                                <mo>=</mo>
                                <mi>b</mi>
                                <mi>d</mi>
                                <mo>+</mo>
                                <mi>a</mi>
                                <mi>c</mi>
                                <msup>
                                    <mi>d</mi>
                                    <mrow class="MJX-TeXAtom-ORD">
                                        <mi class="MJX-variant" mathvariant="normal">′</mi>
                                    </mrow>
                                </msup>
                            </math></span></span>
                    <script type="math/tex" id="MathJax-Element-10">b d+a c d^{\prime}+a b c=b d+a c d^{\prime}</script>`,
        `<span class="MathJax_Preview" style="color: inherit;"></span><span id="MathJax-Element-11-Frame" class="mjx-chtml MathJax_CHTML" tabindex="0" data-mathml="<math xmlns=&quot;http://www.w3.org/1998/Math/MathML&quot;><mo stretchy=&quot;false&quot;>(</mo><mi>b</mi><mo>+</mo><mi>d</mi><mo stretchy=&quot;false&quot;>)</mo><mrow><mo>(</mo><mi>a</mi><mo>+</mo><mi>c</mi><mo>+</mo><msup><mi>d</mi><mrow class=&quot;MJX-TeXAtom-ORD&quot;><mi class=&quot;MJX-variant&quot; mathvariant=&quot;normal&quot;>&amp;#x2032;</mi></mrow></msup><mo>)</mo></mrow><mo stretchy=&quot;false&quot;>(</mo><mi>a</mi><mo>+</mo><mi>b</mi><mo>+</mo><mi>c</mi><mo stretchy=&quot;false&quot;>)</mo><mo>=</mo><mo stretchy=&quot;false&quot;>(</mo><mi>b</mi><mo>+</mo><mi>d</mi><mo stretchy=&quot;false&quot;>)</mo><mrow><mo>(</mo><mi>a</mi><mo>+</mo><mi>c</mi><mo>+</mo><msup><mi>d</mi><mrow class=&quot;MJX-TeXAtom-ORD&quot;><mi class=&quot;MJX-variant&quot; mathvariant=&quot;normal&quot;>&amp;#x2032;</mi></mrow></msup><mo>)</mo></mrow></math>" role="presentation" style="font-size: 113%; position: relative;"><span id="MJXc-Node-153" class="mjx-math" aria-hidden="true"><span id="MJXc-Node-154" class="mjx-mrow"><span id="MJXc-Node-155" class="mjx-mo"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.445em; padding-bottom: 0.611em;">(</span></span><span id="MJXc-Node-156" class="mjx-mi"><span class="mjx-char MJXc-TeX-math-I" style="padding-top: 0.445em; padding-bottom: 0.279em;">b</span></span><span id="MJXc-Node-157" class="mjx-mo MJXc-space2"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.279em; padding-bottom: 0.445em;">+</span></span><span id="MJXc-Node-158" class="mjx-mi MJXc-space2"><span class="mjx-char MJXc-TeX-math-I" style="padding-top: 0.445em; padding-bottom: 0.279em; padding-right: 0.003em;">d</span></span><span id="MJXc-Node-159" class="mjx-mo"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.445em; padding-bottom: 0.611em;">)</span></span><span id="MJXc-Node-160" class="mjx-mrow MJXc-space1"><span id="MJXc-Node-161" class="mjx-mo"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.445em; padding-bottom: 0.611em;">(</span></span><span id="MJXc-Node-162" class="mjx-mi"><span class="mjx-char MJXc-TeX-math-I" style="padding-top: 0.224em; padding-bottom: 0.279em;">a</span></span><span id="MJXc-Node-163" class="mjx-mo MJXc-space2"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.279em; padding-bottom: 0.445em;">+</span></span><span id="MJXc-Node-164" class="mjx-mi MJXc-space2"><span class="mjx-char MJXc-TeX-math-I" style="padding-top: 0.224em; padding-bottom: 0.279em;">c</span></span><span id="MJXc-Node-165" class="mjx-mo MJXc-space2"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.279em; padding-bottom: 0.445em;">+</span></span><span id="MJXc-Node-166" class="mjx-msubsup MJXc-space2"><span class="mjx-base" style="margin-right: -0.003em;"><span id="MJXc-Node-167" class="mjx-mi"><span class="mjx-char MJXc-TeX-math-I" style="padding-top: 0.445em; padding-bottom: 0.279em; padding-right: 0.003em;">d</span></span></span><span class="mjx-sup" style="font-size: 70.7%; vertical-align: 0.513em; padding-left: 0.076em; padding-right: 0.071em;"><span id="MJXc-Node-168" class="mjx-texatom" style=""><span id="MJXc-Node-169" class="mjx-mrow"><span id="MJXc-Node-170" class="mjx-mi"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.279em; padding-bottom: 0.335em;">′</span></span></span></span></span></span><span id="MJXc-Node-171" class="mjx-mo"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.445em; padding-bottom: 0.611em;">)</span></span></span><span id="MJXc-Node-172" class="mjx-mo MJXc-space1"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.445em; padding-bottom: 0.611em;">(</span></span><span id="MJXc-Node-173" class="mjx-mi"><span class="mjx-char MJXc-TeX-math-I" style="padding-top: 0.224em; padding-bottom: 0.279em;">a</span></span><span id="MJXc-Node-174" class="mjx-mo MJXc-space2"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.279em; padding-bottom: 0.445em;">+</span></span><span id="MJXc-Node-175" class="mjx-mi MJXc-space2"><span class="mjx-char MJXc-TeX-math-I" style="padding-top: 0.445em; padding-bottom: 0.279em;">b</span></span><span id="MJXc-Node-176" class="mjx-mo MJXc-space2"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.279em; padding-bottom: 0.445em;">+</span></span><span id="MJXc-Node-177" class="mjx-mi MJXc-space2"><span class="mjx-char MJXc-TeX-math-I" style="padding-top: 0.224em; padding-bottom: 0.279em;">c</span></span><span id="MJXc-Node-178" class="mjx-mo"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.445em; padding-bottom: 0.611em;">)</span></span><span id="MJXc-Node-179" class="mjx-mo MJXc-space3"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.058em; padding-bottom: 0.335em;">=</span></span><span id="MJXc-Node-180" class="mjx-mo MJXc-space3"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.445em; padding-bottom: 0.611em;">(</span></span><span id="MJXc-Node-181" class="mjx-mi"><span class="mjx-char MJXc-TeX-math-I" style="padding-top: 0.445em; padding-bottom: 0.279em;">b</span></span><span id="MJXc-Node-182" class="mjx-mo MJXc-space2"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.279em; padding-bottom: 0.445em;">+</span></span><span id="MJXc-Node-183" class="mjx-mi MJXc-space2"><span class="mjx-char MJXc-TeX-math-I" style="padding-top: 0.445em; padding-bottom: 0.279em; padding-right: 0.003em;">d</span></span><span id="MJXc-Node-184" class="mjx-mo"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.445em; padding-bottom: 0.611em;">)</span></span><span id="MJXc-Node-185" class="mjx-mrow MJXc-space1"><span id="MJXc-Node-186" class="mjx-mo"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.445em; padding-bottom: 0.611em;">(</span></span><span id="MJXc-Node-187" class="mjx-mi"><span class="mjx-char MJXc-TeX-math-I" style="padding-top: 0.224em; padding-bottom: 0.279em;">a</span></span><span id="MJXc-Node-188" class="mjx-mo MJXc-space2"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.279em; padding-bottom: 0.445em;">+</span></span><span id="MJXc-Node-189" class="mjx-mi MJXc-space2"><span class="mjx-char MJXc-TeX-math-I" style="padding-top: 0.224em; padding-bottom: 0.279em;">c</span></span><span id="MJXc-Node-190" class="mjx-mo MJXc-space2"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.279em; padding-bottom: 0.445em;">+</span></span><span id="MJXc-Node-191" class="mjx-msubsup MJXc-space2"><span class="mjx-base" style="margin-right: -0.003em;"><span id="MJXc-Node-192" class="mjx-mi"><span class="mjx-char MJXc-TeX-math-I" style="padding-top: 0.445em; padding-bottom: 0.279em; padding-right: 0.003em;">d</span></span></span><span class="mjx-sup" style="font-size: 70.7%; vertical-align: 0.513em; padding-left: 0.076em; padding-right: 0.071em;"><span id="MJXc-Node-193" class="mjx-texatom" style=""><span id="MJXc-Node-194" class="mjx-mrow"><span id="MJXc-Node-195" class="mjx-mi"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.279em; padding-bottom: 0.335em;">′</span></span></span></span></span></span><span id="MJXc-Node-196" class="mjx-mo"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.445em; padding-bottom: 0.611em;">)</span></span></span></span></span><span class="MJX_Assistive_MathML" role="presentation"><math xmlns="http://www.w3.org/1998/Math/MathML">
                                <mo stretchy="false">(</mo>
                                <mi>b</mi>
                                <mo>+</mo>
                                <mi>d</mi>
                                <mo stretchy="false">)</mo>
                                <mrow>
                                    <mo>(</mo>
                                    <mi>a</mi>
                                    <mo>+</mo>
                                    <mi>c</mi>
                                    <mo>+</mo>
                                    <msup>
                                        <mi>d</mi>
                                        <mrow class="MJX-TeXAtom-ORD">
                                            <mi class="MJX-variant" mathvariant="normal">′</mi>
                                        </mrow>
                                    </msup>
                                    <mo>)</mo>
                                </mrow>
                                <mo stretchy="false">(</mo>
                                <mi>a</mi>
                                <mo>+</mo>
                                <mi>b</mi>
                                <mo>+</mo>
                                <mi>c</mi>
                                <mo stretchy="false">)</mo>
                                <mo>=</mo>
                                <mo stretchy="false">(</mo>
                                <mi>b</mi>
                                <mo>+</mo>
                                <mi>d</mi>
                                <mo stretchy="false">)</mo>
                                <mrow>
                                    <mo>(</mo>
                                    <mi>a</mi>
                                    <mo>+</mo>
                                    <mi>c</mi>
                                    <mo>+</mo>
                                    <msup>
                                        <mi>d</mi>
                                        <mrow class="MJX-TeXAtom-ORD">
                                            <mi class="MJX-variant" mathvariant="normal">′</mi>
                                        </mrow>
                                    </msup>
                                    <mo>)</mo>
                                </mrow>
                            </math></span></span>
                    <script type="math/tex" id="MathJax-Element-11">(b+d)\left(a+c+d^{\prime}\right)(a+b+c)=(b+d)\left(a+c+d^{\prime}\right)</script>`,
        `A Only`,
        `B Only`,
        `Both`,
        `None`,
      ],
      answer: "C",
      solution: ``
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>A demultiplexer can be implemented using a decoder circuit.<br>For example, the <span class="MathJax_Preview" style="color: inherit;"></span><span id="MathJax-Element-12-Frame" class="mjx-chtml MathJax_CHTML" tabindex="0" data-mathml="<math xmlns=&quot;http://www.w3.org/1998/Math/MathML&quot;><mn>2</mn></math>" role="presentation" style="font-size: 113%; position: relative;"><span id="MJXc-Node-197" class="mjx-math" aria-hidden="true"><span id="MJXc-Node-198" class="mjx-mrow"><span id="MJXc-Node-199" class="mjx-mn"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.39em; padding-bottom: 0.335em;">2</span></span></span></span><span class="MJX_Assistive_MathML" role="presentation"><math xmlns="http://www.w3.org/1998/Math/MathML">
                            <mn>2</mn>
                        </math></span></span>
                <script type="math/tex" id="MathJax-Element-12">2</script>-to-<span class="MathJax_Preview" style="color: inherit;"></span><span id="MathJax-Element-13-Frame" class="mjx-chtml MathJax_CHTML" tabindex="0" data-mathml="<math xmlns=&quot;http://www.w3.org/1998/Math/MathML&quot;><mn>4</mn></math>" role="presentation" style="font-size: 113%; position: relative;"><span id="MJXc-Node-200" class="mjx-math" aria-hidden="true"><span id="MJXc-Node-201" class="mjx-mrow"><span id="MJXc-Node-202" class="mjx-mn"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.39em; padding-bottom: 0.335em;">4</span></span></span></span><span class="MJX_Assistive_MathML" role="presentation"><math xmlns="http://www.w3.org/1998/Math/MathML">
                            <mn>4</mn>
                        </math></span></span>
                <script type="math/tex" id="MathJax-Element-13">4</script> decoder can be used as a <span class="MathJax_Preview" style="color: inherit;"></span><span id="MathJax-Element-14-Frame" class="mjx-chtml MathJax_CHTML" tabindex="0" data-mathml="<math xmlns=&quot;http://www.w3.org/1998/Math/MathML&quot;><mn>1</mn></math>" role="presentation" style="font-size: 113%; position: relative;"><span id="MJXc-Node-203" class="mjx-math" aria-hidden="true"><span id="MJXc-Node-204" class="mjx-mrow"><span id="MJXc-Node-205" class="mjx-mn"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.39em; padding-bottom: 0.335em;">1</span></span></span></span><span class="MJX_Assistive_MathML" role="presentation"><math xmlns="http://www.w3.org/1998/Math/MathML">
                            <mn>1</mn>
                        </math></span></span>
                <script type="math/tex" id="MathJax-Element-14">1</script>-to-<span class="MathJax_Preview" style="color: inherit;"></span><span id="MathJax-Element-15-Frame" class="mjx-chtml MathJax_CHTML" tabindex="0" data-mathml="<math xmlns=&quot;http://www.w3.org/1998/Math/MathML&quot;><mn>4</mn></math>" role="presentation" style="font-size: 113%; position: relative;"><span id="MJXc-Node-206" class="mjx-math" aria-hidden="true"><span id="MJXc-Node-207" class="mjx-mrow"><span id="MJXc-Node-208" class="mjx-mn"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.39em; padding-bottom: 0.335em;">4</span></span></span></span><span class="MJX_Assistive_MathML" role="presentation"><math xmlns="http://www.w3.org/1998/Math/MathML">
                            <mn>4</mn>
                        </math></span></span>
                <script type="math/tex" id="MathJax-Element-15">4</script> demultiplexer. Which input of decoder serves
                as the data input for the demultiplexer?<br><span class="MathJax_Preview" style="color: inherit;"></span><span class="mjx-chtml MJXc-display" style="text-align: center;"><span id="MathJax-Element-16-Frame" class="mjx-chtml MathJax_CHTML" tabindex="0" data-mathml="<math xmlns=&quot;http://www.w3.org/1998/Math/MathML&quot; display=&quot;block&quot;><mtable columnalign=&quot;center center center center center center center&quot; rowspacing=&quot;4pt&quot; columnspacing=&quot;1em&quot; rowlines=&quot;solid none&quot; columnlines=&quot;none none solid none none none&quot;><mtr><mtd><mtext>En</mtext></mtd><mtd><msub><mi>w</mi><mrow class=&quot;MJX-TeXAtom-ORD&quot;><mn>1</mn></mrow></msub></mtd><mtd><msub><mi>w</mi><mrow class=&quot;MJX-TeXAtom-ORD&quot;><mn>0</mn></mrow></msub></mtd><mtd><msub><mi>y</mi><mrow class=&quot;MJX-TeXAtom-ORD&quot;><mn>0</mn></mrow></msub></mtd><mtd><msub><mi>y</mi><mrow class=&quot;MJX-TeXAtom-ORD&quot;><mn>1</mn></mrow></msub></mtd><mtd><msub><mi>y</mi><mrow class=&quot;MJX-TeXAtom-ORD&quot;><mn>2</mn></mrow></msub></mtd><mtd><msub><mi>y</mi><mrow class=&quot;MJX-TeXAtom-ORD&quot;><mn>3</mn></mrow></msub></mtd></mtr><mtr><mtd><mn>1</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>1</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd></mtr><mtr><mtd><mn>1</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>1</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>1</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd></mtr><mtr><mtd><mn>1</mn></mtd><mtd><mn>1</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>1</mn></mtd><mtd><mn>0</mn></mtd></mtr><mtr><mtd><mn>1</mn></mtd><mtd><mn>1</mn></mtd><mtd><mn>1</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>1</mn></mtd></mtr><mtr><mtd><mn>0</mn></mtd><mtd><mo>&amp;#x00D7;</mo></mtd><mtd><mo>&amp;#x00D7;</mo></mtd><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd></mtr></mtable></math>" role="presentation" style="font-size: 113%; text-align: center; position: relative;"><span id="MJXc-Node-209" class="mjx-math" aria-hidden="true"><span id="MJXc-Node-210" class="mjx-mrow"><span id="MJXc-Node-211" class="mjx-mtable" style="vertical-align: -3.986em; padding: 0px 0.167em;"><span class="mjx-table"><span id="MJXc-Node-212" class="mjx-mtr" style="height: 1.451em;"><span id="MJXc-Node-213" class="mjx-mtd" style="padding: 0.221em 0.5em 0px 0.4em; border-bottom: 1.3px solid; width: 1.237em;"><span id="MJXc-Node-214" class="mjx-mrow" style="margin-top: -0.2em;"><span id="MJXc-Node-215" class="mjx-mtext"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.39em; padding-bottom: 0.335em;">En</span></span><span class="mjx-strut"></span></span></span><span id="MJXc-Node-216" class="mjx-mtd" style="padding: 0.221em 0.5em 0px; border-bottom: 1.3px solid; width: 1.105em;"><span id="MJXc-Node-217" class="mjx-mrow" style="margin-top: -0.2em;"><span id="MJXc-Node-218" class="mjx-msubsup"><span class="mjx-base"><span id="MJXc-Node-219" class="mjx-mi"><span class="mjx-char MJXc-TeX-math-I" style="padding-top: 0.224em; padding-bottom: 0.279em;">w</span></span></span><span class="mjx-sub" style="font-size: 70.7%; vertical-align: -0.212em; padding-right: 0.071em;"><span id="MJXc-Node-220" class="mjx-texatom" style=""><span id="MJXc-Node-221" class="mjx-mrow"><span id="MJXc-Node-222" class="mjx-mn"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.39em; padding-bottom: 0.335em;">1</span></span></span></span></span></span><span class="mjx-strut"></span></span></span><span id="MJXc-Node-223" class="mjx-mtd" style="border-right: 1.3px solid; padding: 0.221em 0.472em 0px 0.5em; border-bottom: 1.3px solid; width: 1.105em;"><span id="MJXc-Node-224" class="mjx-mrow" style="margin-top: -0.2em;"><span id="MJXc-Node-225" class="mjx-msubsup"><span class="mjx-base"><span id="MJXc-Node-226" class="mjx-mi"><span class="mjx-char MJXc-TeX-math-I" style="padding-top: 0.224em; padding-bottom: 0.279em;">w</span></span></span><span class="mjx-sub" style="font-size: 70.7%; vertical-align: -0.212em; padding-right: 0.071em;"><span id="MJXc-Node-227" class="mjx-texatom" style=""><span id="MJXc-Node-228" class="mjx-mrow"><span id="MJXc-Node-229" class="mjx-mn"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.39em; padding-bottom: 0.39em;">0</span></span></span></span></span></span><span class="mjx-strut"></span></span></span><span id="MJXc-Node-230" class="mjx-mtd" style="padding: 0.221em 0.5em 0px 0.472em; border-bottom: 1.3px solid; width: 0.879em;"><span id="MJXc-Node-231" class="mjx-mrow" style="margin-top: -0.2em;"><span id="MJXc-Node-232" class="mjx-msubsup"><span class="mjx-base" style="margin-right: -0.006em;"><span id="MJXc-Node-233" class="mjx-mi"><span class="mjx-char MJXc-TeX-math-I" style="padding-top: 0.224em; padding-bottom: 0.501em; padding-right: 0.006em;">y</span></span></span><span class="mjx-sub" style="font-size: 70.7%; vertical-align: -0.212em; padding-right: 0.071em;"><span id="MJXc-Node-234" class="mjx-texatom" style=""><span id="MJXc-Node-235" class="mjx-mrow"><span id="MJXc-Node-236" class="mjx-mn"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.39em; padding-bottom: 0.39em;">0</span></span></span></span></span></span><span class="mjx-strut"></span></span></span><span id="MJXc-Node-237" class="mjx-mtd" style="padding: 0.221em 0.5em 0px; border-bottom: 1.3px solid; width: 0.879em;"><span id="MJXc-Node-238" class="mjx-mrow" style="margin-top: -0.2em;"><span id="MJXc-Node-239" class="mjx-msubsup"><span class="mjx-base" style="margin-right: -0.006em;"><span id="MJXc-Node-240" class="mjx-mi"><span class="mjx-char MJXc-TeX-math-I" style="padding-top: 0.224em; padding-bottom: 0.501em; padding-right: 0.006em;">y</span></span></span><span class="mjx-sub" style="font-size: 70.7%; vertical-align: -0.212em; padding-right: 0.071em;"><span id="MJXc-Node-241" class="mjx-texatom" style=""><span id="MJXc-Node-242" class="mjx-mrow"><span id="MJXc-Node-243" class="mjx-mn"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.39em; padding-bottom: 0.335em;">1</span></span></span></span></span></span><span class="mjx-strut"></span></span></span><span id="MJXc-Node-244" class="mjx-mtd" style="padding: 0.221em 0.5em 0px; border-bottom: 1.3px solid; width: 0.879em;"><span id="MJXc-Node-245" class="mjx-mrow" style="margin-top: -0.2em;"><span id="MJXc-Node-246" class="mjx-msubsup"><span class="mjx-base" style="margin-right: -0.006em;"><span id="MJXc-Node-247" class="mjx-mi"><span class="mjx-char MJXc-TeX-math-I" style="padding-top: 0.224em; padding-bottom: 0.501em; padding-right: 0.006em;">y</span></span></span><span class="mjx-sub" style="font-size: 70.7%; vertical-align: -0.212em; padding-right: 0.071em;"><span id="MJXc-Node-248" class="mjx-texatom" style=""><span id="MJXc-Node-249" class="mjx-mrow"><span id="MJXc-Node-250" class="mjx-mn"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.39em; padding-bottom: 0.335em;">2</span></span></span></span></span></span><span class="mjx-strut"></span></span></span><span id="MJXc-Node-251" class="mjx-mtd" style="padding: 0.221em 0.4em 0px 0.5em; border-bottom: 1.3px solid; width: 0.879em;"><span id="MJXc-Node-252" class="mjx-mrow" style="margin-top: -0.2em;"><span id="MJXc-Node-253" class="mjx-msubsup"><span class="mjx-base" style="margin-right: -0.006em;"><span id="MJXc-Node-254" class="mjx-mi"><span class="mjx-char MJXc-TeX-math-I" style="padding-top: 0.224em; padding-bottom: 0.501em; padding-right: 0.006em;">y</span></span></span><span class="mjx-sub" style="font-size: 70.7%; vertical-align: -0.212em; padding-right: 0.071em;"><span id="MJXc-Node-255" class="mjx-texatom" style=""><span id="MJXc-Node-256" class="mjx-mrow"><span id="MJXc-Node-257" class="mjx-mn"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.39em; padding-bottom: 0.39em;">3</span></span></span></span></span></span><span class="mjx-strut"></span></span></span></span><span id="MJXc-Node-258" class="mjx-mtr" style="height: 1.4em;"><span id="MJXc-Node-259" class="mjx-mtd" style="padding: 0.2em 0.5em 0px 0.4em;"><span id="MJXc-Node-260" class="mjx-mrow" style="margin-top: -0.2em;"><span id="MJXc-Node-261" class="mjx-mn"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.39em; padding-bottom: 0.335em;">1</span></span><span class="mjx-strut"></span></span></span><span id="MJXc-Node-262" class="mjx-mtd" style="padding: 0.2em 0.5em 0px;"><span id="MJXc-Node-263" class="mjx-mrow" style="margin-top: -0.2em;"><span id="MJXc-Node-264" class="mjx-mn"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.39em; padding-bottom: 0.39em;">0</span></span><span class="mjx-strut"></span></span></span><span id="MJXc-Node-265" class="mjx-mtd" style="border-right: 1.3px solid; padding: 0.2em 0.472em 0px 0.5em;"><span id="MJXc-Node-266" class="mjx-mrow" style="margin-top: -0.2em;"><span id="MJXc-Node-267" class="mjx-mn"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.39em; padding-bottom: 0.39em;">0</span></span><span class="mjx-strut"></span></span></span><span id="MJXc-Node-268" class="mjx-mtd" style="padding: 0.2em 0.5em 0px 0.472em;"><span id="MJXc-Node-269" class="mjx-mrow" style="margin-top: -0.2em;"><span id="MJXc-Node-270" class="mjx-mn"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.39em; padding-bottom: 0.335em;">1</span></span><span class="mjx-strut"></span></span></span><span id="MJXc-Node-271" class="mjx-mtd" style="padding: 0.2em 0.5em 0px;"><span id="MJXc-Node-272" class="mjx-mrow" style="margin-top: -0.2em;"><span id="MJXc-Node-273" class="mjx-mn"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.39em; padding-bottom: 0.39em;">0</span></span><span class="mjx-strut"></span></span></span><span id="MJXc-Node-274" class="mjx-mtd" style="padding: 0.2em 0.5em 0px;"><span id="MJXc-Node-275" class="mjx-mrow" style="margin-top: -0.2em;"><span id="MJXc-Node-276" class="mjx-mn"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.39em; padding-bottom: 0.39em;">0</span></span><span class="mjx-strut"></span></span></span><span id="MJXc-Node-277" class="mjx-mtd" style="padding: 0.2em 0.4em 0px 0.5em;"><span id="MJXc-Node-278" class="mjx-mrow" style="margin-top: -0.2em;"><span id="MJXc-Node-279" class="mjx-mn"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.39em; padding-bottom: 0.39em;">0</span></span><span class="mjx-strut"></span></span></span></span><span id="MJXc-Node-280" class="mjx-mtr" style="height: 1.4em;"><span id="MJXc-Node-281" class="mjx-mtd" style="padding: 0.2em 0.5em 0px 0.4em;"><span id="MJXc-Node-282" class="mjx-mrow" style="margin-top: -0.2em;"><span id="MJXc-Node-283" class="mjx-mn"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.39em; padding-bottom: 0.335em;">1</span></span><span class="mjx-strut"></span></span></span><span id="MJXc-Node-284" class="mjx-mtd" style="padding: 0.2em 0.5em 0px;"><span id="MJXc-Node-285" class="mjx-mrow" style="margin-top: -0.2em;"><span id="MJXc-Node-286" class="mjx-mn"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.39em; padding-bottom: 0.39em;">0</span></span><span class="mjx-strut"></span></span></span><span id="MJXc-Node-287" class="mjx-mtd" style="border-right: 1.3px solid; padding: 0.2em 0.472em 0px 0.5em;"><span id="MJXc-Node-288" class="mjx-mrow" style="margin-top: -0.2em;"><span id="MJXc-Node-289" class="mjx-mn"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.39em; padding-bottom: 0.335em;">1</span></span><span class="mjx-strut"></span></span></span><span id="MJXc-Node-290" class="mjx-mtd" style="padding: 0.2em 0.5em 0px 0.472em;"><span id="MJXc-Node-291" class="mjx-mrow" style="margin-top: -0.2em;"><span id="MJXc-Node-292" class="mjx-mn"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.39em; padding-bottom: 0.39em;">0</span></span><span class="mjx-strut"></span></span></span><span id="MJXc-Node-293" class="mjx-mtd" style="padding: 0.2em 0.5em 0px;"><span id="MJXc-Node-294" class="mjx-mrow" style="margin-top: -0.2em;"><span id="MJXc-Node-295" class="mjx-mn"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.39em; padding-bottom: 0.335em;">1</span></span><span class="mjx-strut"></span></span></span><span id="MJXc-Node-296" class="mjx-mtd" style="padding: 0.2em 0.5em 0px;"><span id="MJXc-Node-297" class="mjx-mrow" style="margin-top: -0.2em;"><span id="MJXc-Node-298" class="mjx-mn"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.39em; padding-bottom: 0.39em;">0</span></span><span class="mjx-strut"></span></span></span><span id="MJXc-Node-299" class="mjx-mtd" style="padding: 0.2em 0.4em 0px 0.5em;"><span id="MJXc-Node-300" class="mjx-mrow" style="margin-top: -0.2em;"><span id="MJXc-Node-301" class="mjx-mn"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.39em; padding-bottom: 0.39em;">0</span></span><span class="mjx-strut"></span></span></span></span><span id="MJXc-Node-302" class="mjx-mtr" style="height: 1.4em;"><span id="MJXc-Node-303" class="mjx-mtd" style="padding: 0.2em 0.5em 0px 0.4em;"><span id="MJXc-Node-304" class="mjx-mrow" style="margin-top: -0.2em;"><span id="MJXc-Node-305" class="mjx-mn"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.39em; padding-bottom: 0.335em;">1</span></span><span class="mjx-strut"></span></span></span><span id="MJXc-Node-306" class="mjx-mtd" style="padding: 0.2em 0.5em 0px;"><span id="MJXc-Node-307" class="mjx-mrow" style="margin-top: -0.2em;"><span id="MJXc-Node-308" class="mjx-mn"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.39em; padding-bottom: 0.335em;">1</span></span><span class="mjx-strut"></span></span></span><span id="MJXc-Node-309" class="mjx-mtd" style="border-right: 1.3px solid; padding: 0.2em 0.472em 0px 0.5em;"><span id="MJXc-Node-310" class="mjx-mrow" style="margin-top: -0.2em;"><span id="MJXc-Node-311" class="mjx-mn"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.39em; padding-bottom: 0.39em;">0</span></span><span class="mjx-strut"></span></span></span><span id="MJXc-Node-312" class="mjx-mtd" style="padding: 0.2em 0.5em 0px 0.472em;"><span id="MJXc-Node-313" class="mjx-mrow" style="margin-top: -0.2em;"><span id="MJXc-Node-314" class="mjx-mn"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.39em; padding-bottom: 0.39em;">0</span></span><span class="mjx-strut"></span></span></span><span id="MJXc-Node-315" class="mjx-mtd" style="padding: 0.2em 0.5em 0px;"><span id="MJXc-Node-316" class="mjx-mrow" style="margin-top: -0.2em;"><span id="MJXc-Node-317" class="mjx-mn"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.39em; padding-bottom: 0.39em;">0</span></span><span class="mjx-strut"></span></span></span><span id="MJXc-Node-318" class="mjx-mtd" style="padding: 0.2em 0.5em 0px;"><span id="MJXc-Node-319" class="mjx-mrow" style="margin-top: -0.2em;"><span id="MJXc-Node-320" class="mjx-mn"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.39em; padding-bottom: 0.335em;">1</span></span><span class="mjx-strut"></span></span></span><span id="MJXc-Node-321" class="mjx-mtd" style="padding: 0.2em 0.4em 0px 0.5em;"><span id="MJXc-Node-322" class="mjx-mrow" style="margin-top: -0.2em;"><span id="MJXc-Node-323" class="mjx-mn"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.39em; padding-bottom: 0.39em;">0</span></span><span class="mjx-strut"></span></span></span></span><span id="MJXc-Node-324" class="mjx-mtr" style="height: 1.4em;"><span id="MJXc-Node-325" class="mjx-mtd" style="padding: 0.2em 0.5em 0px 0.4em;"><span id="MJXc-Node-326" class="mjx-mrow" style="margin-top: -0.2em;"><span id="MJXc-Node-327" class="mjx-mn"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.39em; padding-bottom: 0.335em;">1</span></span><span class="mjx-strut"></span></span></span><span id="MJXc-Node-328" class="mjx-mtd" style="padding: 0.2em 0.5em 0px;"><span id="MJXc-Node-329" class="mjx-mrow" style="margin-top: -0.2em;"><span id="MJXc-Node-330" class="mjx-mn"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.39em; padding-bottom: 0.335em;">1</span></span><span class="mjx-strut"></span></span></span><span id="MJXc-Node-331" class="mjx-mtd" style="border-right: 1.3px solid; padding: 0.2em 0.472em 0px 0.5em;"><span id="MJXc-Node-332" class="mjx-mrow" style="margin-top: -0.2em;"><span id="MJXc-Node-333" class="mjx-mn"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.39em; padding-bottom: 0.335em;">1</span></span><span class="mjx-strut"></span></span></span><span id="MJXc-Node-334" class="mjx-mtd" style="padding: 0.2em 0.5em 0px 0.472em;"><span id="MJXc-Node-335" class="mjx-mrow" style="margin-top: -0.2em;"><span id="MJXc-Node-336" class="mjx-mn"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.39em; padding-bottom: 0.39em;">0</span></span><span class="mjx-strut"></span></span></span><span id="MJXc-Node-337" class="mjx-mtd" style="padding: 0.2em 0.5em 0px;"><span id="MJXc-Node-338" class="mjx-mrow" style="margin-top: -0.2em;"><span id="MJXc-Node-339" class="mjx-mn"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.39em; padding-bottom: 0.39em;">0</span></span><span class="mjx-strut"></span></span></span><span id="MJXc-Node-340" class="mjx-mtd" style="padding: 0.2em 0.5em 0px;"><span id="MJXc-Node-341" class="mjx-mrow" style="margin-top: -0.2em;"><span id="MJXc-Node-342" class="mjx-mn"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.39em; padding-bottom: 0.39em;">0</span></span><span class="mjx-strut"></span></span></span><span id="MJXc-Node-343" class="mjx-mtd" style="padding: 0.2em 0.4em 0px 0.5em;"><span id="MJXc-Node-344" class="mjx-mrow" style="margin-top: -0.2em;"><span id="MJXc-Node-345" class="mjx-mn"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.39em; padding-bottom: 0.335em;">1</span></span><span class="mjx-strut"></span></span></span></span><span id="MJXc-Node-346" class="mjx-mtr" style="height: 1.421em;"><span id="MJXc-Node-347" class="mjx-mtd" style="padding: 0.2em 0.5em 0px 0.4em;"><span id="MJXc-Node-348" class="mjx-mrow" style="margin-top: -0.2em;"><span id="MJXc-Node-349" class="mjx-mn"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.39em; padding-bottom: 0.39em;">0</span></span><span class="mjx-strut"></span></span></span><span id="MJXc-Node-350" class="mjx-mtd" style="padding: 0.2em 0.5em 0px;"><span id="MJXc-Node-351" class="mjx-mrow" style="margin-top: -0.2em;"><span id="MJXc-Node-352" class="mjx-mo"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.224em; padding-bottom: 0.335em;">×</span></span><span class="mjx-strut"></span></span></span><span id="MJXc-Node-353" class="mjx-mtd" style="border-right: 1.3px solid; padding: 0.2em 0.472em 0px 0.5em;"><span id="MJXc-Node-354" class="mjx-mrow" style="margin-top: -0.2em;"><span id="MJXc-Node-355" class="mjx-mo"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.224em; padding-bottom: 0.335em;">×</span></span><span class="mjx-strut"></span></span></span><span id="MJXc-Node-356" class="mjx-mtd" style="padding: 0.2em 0.5em 0px 0.472em;"><span id="MJXc-Node-357" class="mjx-mrow" style="margin-top: -0.2em;"><span id="MJXc-Node-358" class="mjx-mn"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.39em; padding-bottom: 0.39em;">0</span></span><span class="mjx-strut"></span></span></span><span id="MJXc-Node-359" class="mjx-mtd" style="padding: 0.2em 0.5em 0px;"><span id="MJXc-Node-360" class="mjx-mrow" style="margin-top: -0.2em;"><span id="MJXc-Node-361" class="mjx-mn"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.39em; padding-bottom: 0.39em;">0</span></span><span class="mjx-strut"></span></span></span><span id="MJXc-Node-362" class="mjx-mtd" style="padding: 0.2em 0.5em 0px;"><span id="MJXc-Node-363" class="mjx-mrow" style="margin-top: -0.2em;"><span id="MJXc-Node-364" class="mjx-mn"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.39em; padding-bottom: 0.39em;">0</span></span><span class="mjx-strut"></span></span></span><span id="MJXc-Node-365" class="mjx-mtd" style="padding: 0.2em 0.4em 0px 0.5em;"><span id="MJXc-Node-366" class="mjx-mrow" style="margin-top: -0.2em;"><span id="MJXc-Node-367" class="mjx-mn"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.39em; padding-bottom: 0.39em;">0</span></span><span class="mjx-strut"></span></span></span></span></span></span></span></span><span class="MJX_Assistive_MathML MJX_Assistive_MathML_Block" role="presentation"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
                                <mtable columnalign="center center center center center center center" rowspacing="4pt" columnspacing="1em" rowlines="solid none" columnlines="none none solid none none none">
                                    <mtr>
                                        <mtd>
                                            <mtext>En</mtext>
                                        </mtd>
                                        <mtd>
                                            <msub>
                                                <mi>w</mi>
                                                <mrow class="MJX-TeXAtom-ORD">
                                                    <mn>1</mn>
                                                </mrow>
                                            </msub>
                                        </mtd>
                                        <mtd>
                                            <msub>
                                                <mi>w</mi>
                                                <mrow class="MJX-TeXAtom-ORD">
                                                    <mn>0</mn>
                                                </mrow>
                                            </msub>
                                        </mtd>
                                        <mtd>
                                            <msub>
                                                <mi>y</mi>
                                                <mrow class="MJX-TeXAtom-ORD">
                                                    <mn>0</mn>
                                                </mrow>
                                            </msub>
                                        </mtd>
                                        <mtd>
                                            <msub>
                                                <mi>y</mi>
                                                <mrow class="MJX-TeXAtom-ORD">
                                                    <mn>1</mn>
                                                </mrow>
                                            </msub>
                                        </mtd>
                                        <mtd>
                                            <msub>
                                                <mi>y</mi>
                                                <mrow class="MJX-TeXAtom-ORD">
                                                    <mn>2</mn>
                                                </mrow>
                                            </msub>
                                        </mtd>
                                        <mtd>
                                            <msub>
                                                <mi>y</mi>
                                                <mrow class="MJX-TeXAtom-ORD">
                                                    <mn>3</mn>
                                                </mrow>
                                            </msub>
                                        </mtd>
                                    </mtr>
                                    <mtr>
                                        <mtd>
                                            <mn>1</mn>
                                        </mtd>
                                        <mtd>
                                            <mn>0</mn>
                                        </mtd>
                                        <mtd>
                                            <mn>0</mn>
                                        </mtd>
                                        <mtd>
                                            <mn>1</mn>
                                        </mtd>
                                        <mtd>
                                            <mn>0</mn>
                                        </mtd>
                                        <mtd>
                                            <mn>0</mn>
                                        </mtd>
                                        <mtd>
                                            <mn>0</mn>
                                        </mtd>
                                    </mtr>
                                    <mtr>
                                        <mtd>
                                            <mn>1</mn>
                                        </mtd>
                                        <mtd>
                                            <mn>0</mn>
                                        </mtd>
                                        <mtd>
                                            <mn>1</mn>
                                        </mtd>
                                        <mtd>
                                            <mn>0</mn>
                                        </mtd>
                                        <mtd>
                                            <mn>1</mn>
                                        </mtd>
                                        <mtd>
                                            <mn>0</mn>
                                        </mtd>
                                        <mtd>
                                            <mn>0</mn>
                                        </mtd>
                                    </mtr>
                                    <mtr>
                                        <mtd>
                                            <mn>1</mn>
                                        </mtd>
                                        <mtd>
                                            <mn>1</mn>
                                        </mtd>
                                        <mtd>
                                            <mn>0</mn>
                                        </mtd>
                                        <mtd>
                                            <mn>0</mn>
                                        </mtd>
                                        <mtd>
                                            <mn>0</mn>
                                        </mtd>
                                        <mtd>
                                            <mn>1</mn>
                                        </mtd>
                                        <mtd>
                                            <mn>0</mn>
                                        </mtd>
                                    </mtr>
                                    <mtr>
                                        <mtd>
                                            <mn>1</mn>
                                        </mtd>
                                        <mtd>
                                            <mn>1</mn>
                                        </mtd>
                                        <mtd>
                                            <mn>1</mn>
                                        </mtd>
                                        <mtd>
                                            <mn>0</mn>
                                        </mtd>
                                        <mtd>
                                            <mn>0</mn>
                                        </mtd>
                                        <mtd>
                                            <mn>0</mn>
                                        </mtd>
                                        <mtd>
                                            <mn>1</mn>
                                        </mtd>
                                    </mtr>
                                    <mtr>
                                        <mtd>
                                            <mn>0</mn>
                                        </mtd>
                                        <mtd>
                                            <mo>×</mo>
                                        </mtd>
                                        <mtd>
                                            <mo>×</mo>
                                        </mtd>
                                        <mtd>
                                            <mn>0</mn>
                                        </mtd>
                                        <mtd>
                                            <mn>0</mn>
                                        </mtd>
                                        <mtd>
                                            <mn>0</mn>
                                        </mtd>
                                        <mtd>
                                            <mn>0</mn>
                                        </mtd>
                                    </mtr>
                                </mtable>
                            </math></span></span></span>
                <script type="math/tex; mode=display" id="MathJax-Element-16"> \begin{array}{ccc|cccc} \text{En} & w_{1} & w_{0} & y_{0} & y_{1} & y_{2} & y_{3} \\ \hline 1 & 0 & 0 & 1 & 0 & 0 & 0 \\ 1 & 0 & 1 & 0 & 1 & 0 & 0 \\ 1 & 1 & 0 & 0 & 0 & 1 & 0 \\ 1 & 1 & 1 & 0 & 0 & 0 & 1 \\ 0 & \times & \times & 0 & 0 & 0 & 0 \\ \end{array} </script>
                <span class="MathJax_Preview" style="color: inherit;"></span><span class="mjx-chtml MJXc-display" style="text-align: center;"><span id="MathJax-Element-17-Frame" class="mjx-chtml MathJax_CHTML" tabindex="0" data-mathml="<math xmlns=&quot;http://www.w3.org/1998/Math/MathML&quot; display=&quot;block&quot;><mtext>(a) Truth Table of Decoder</mtext></math>" role="presentation" style="font-size: 113%; text-align: center; position: relative;"><span id="MJXc-Node-368" class="mjx-math" aria-hidden="true"><span id="MJXc-Node-369" class="mjx-mrow"><span id="MJXc-Node-370" class="mjx-mtext"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.445em; padding-bottom: 0.611em;">(a) Truth Table of
                                        Decoder</span></span></span></span><span class="MJX_Assistive_MathML MJX_Assistive_MathML_Block" role="presentation"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
                                <mtext>(a) Truth Table of Decoder</mtext>
                            </math></span></span></span>
                <script type="math/tex; mode=display" id="MathJax-Element-17">\text{(a) Truth Table of Decoder}</script>
                <br><br>&nbsp;
            </p> <p style="text-align:center"><img alt="" height="301" width="287" src="https://gateoverflow.in/?qa=blob&amp;qa_blobid=18398392163275606394" style="max-width: 75%;"></p> <p></p>`,
      image: "",
      options: [
        `<span class="MathJax_Preview" style="color: inherit;"></span><span id="MathJax-Element-18-Frame" class="mjx-chtml MathJax_CHTML" tabindex="0" data-mathml="<math xmlns=&quot;http://www.w3.org/1998/Math/MathML&quot;><msub><mi>w</mi><mrow class=&quot;MJX-TeXAtom-ORD&quot;><mn>0</mn></mrow></msub></math>" role="presentation" style="font-size: 113%; position: relative;"><span id="MJXc-Node-371" class="mjx-math" aria-hidden="true"><span id="MJXc-Node-372" class="mjx-mrow"><span id="MJXc-Node-373" class="mjx-msubsup"><span class="mjx-base"><span id="MJXc-Node-374" class="mjx-mi"><span class="mjx-char MJXc-TeX-math-I" style="padding-top: 0.224em; padding-bottom: 0.279em;">w</span></span></span><span class="mjx-sub" style="font-size: 70.7%; vertical-align: -0.212em; padding-right: 0.071em;"><span id="MJXc-Node-375" class="mjx-texatom" style=""><span id="MJXc-Node-376" class="mjx-mrow"><span id="MJXc-Node-377" class="mjx-mn"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.39em; padding-bottom: 0.39em;">0</span></span></span></span></span></span></span></span><span class="MJX_Assistive_MathML" role="presentation"><math xmlns="http://www.w3.org/1998/Math/MathML">
                                <msub>
                                    <mi>w</mi>
                                    <mrow class="MJX-TeXAtom-ORD">
                                        <mn>0</mn>
                                    </mrow>
                                </msub>
                            </math></span></span>
                    <script type="math/tex" id="MathJax-Element-18">w_{0}</script>`,
        `<span class="MathJax_Preview" style="color: inherit;"></span><span id="MathJax-Element-19-Frame" class="mjx-chtml MathJax_CHTML" tabindex="0" data-mathml="<math xmlns=&quot;http://www.w3.org/1998/Math/MathML&quot;><msub><mtext>E</mtext><mrow class=&quot;MJX-TeXAtom-ORD&quot;><mi>n</mi></mrow></msub></math>" role="presentation" style="font-size: 113%; position: relative;"><span id="MJXc-Node-378" class="mjx-math" aria-hidden="true"><span id="MJXc-Node-379" class="mjx-mrow"><span id="MJXc-Node-380" class="mjx-msubsup"><span class="mjx-base"><span id="MJXc-Node-381" class="mjx-mtext"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.39em; padding-bottom: 0.335em;">E</span></span></span><span class="mjx-sub" style="font-size: 70.7%; vertical-align: -0.212em; padding-right: 0.071em;"><span id="MJXc-Node-382" class="mjx-texatom" style=""><span id="MJXc-Node-383" class="mjx-mrow"><span id="MJXc-Node-384" class="mjx-mi"><span class="mjx-char MJXc-TeX-math-I" style="padding-top: 0.224em; padding-bottom: 0.279em;">n</span></span></span></span></span></span></span></span><span class="MJX_Assistive_MathML" role="presentation"><math xmlns="http://www.w3.org/1998/Math/MathML">
                                <msub>
                                    <mtext>E</mtext>
                                    <mrow class="MJX-TeXAtom-ORD">
                                        <mi>n</mi>
                                    </mrow>
                                </msub>
                            </math></span></span>
                    <script type="math/tex" id="MathJax-Element-19">\text{E}_{n}</script>`,
        `<span class="MathJax_Preview" style="color: inherit;"></span><span id="MathJax-Element-20-Frame" class="mjx-chtml MathJax_CHTML" tabindex="0" data-mathml="<math xmlns=&quot;http://www.w3.org/1998/Math/MathML&quot;><msub><mi>w</mi><mrow class=&quot;MJX-TeXAtom-ORD&quot;><mn>1</mn></mrow></msub></math>" role="presentation" style="font-size: 113%; position: relative;"><span id="MJXc-Node-385" class="mjx-math" aria-hidden="true"><span id="MJXc-Node-386" class="mjx-mrow"><span id="MJXc-Node-387" class="mjx-msubsup"><span class="mjx-base"><span id="MJXc-Node-388" class="mjx-mi"><span class="mjx-char MJXc-TeX-math-I" style="padding-top: 0.224em; padding-bottom: 0.279em;">w</span></span></span><span class="mjx-sub" style="font-size: 70.7%; vertical-align: -0.212em; padding-right: 0.071em;"><span id="MJXc-Node-389" class="mjx-texatom" style=""><span id="MJXc-Node-390" class="mjx-mrow"><span id="MJXc-Node-391" class="mjx-mn"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.39em; padding-bottom: 0.335em;">1</span></span></span></span></span></span></span></span><span class="MJX_Assistive_MathML" role="presentation"><math xmlns="http://www.w3.org/1998/Math/MathML">
                                <msub>
                                    <mi>w</mi>
                                    <mrow class="MJX-TeXAtom-ORD">
                                        <mn>1</mn>
                                    </mrow>
                                </msub>
                            </math></span></span>
                    <script type="math/tex" id="MathJax-Element-20">w_{1}</script>`,
        `We can not implement a demultiplexer using a decoder.`,
      ],
      answer: "B",
      solution: ``
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>A decoder may be described as</p> <p></p>`,
      image: "",
      options: [
        `Multiple-input single-output logic circuit which converts coded inputs into a coded output where the
                    input and output codes are different.`,
        `Single-input single-output logic circuit which converts the coded input into a coded output where
                    the input and output codes are different.`,
        `Multiple-input multiple-output logic circuit which converts coded inputs into coded outputs where
                    the input and output codes are different.`,
        `Single-input multiple-output logic circuit which converts the coded input into coded outputs where
                    the input and output codes are different.`,
      ],
      answer: "C",
      solution: ``
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>Consider the <span class="MathJax_Preview" style="color: inherit;"></span><span id="MathJax-Element-21-Frame" class="mjx-chtml MathJax_CHTML" tabindex="0" data-mathml="<math xmlns=&quot;http://www.w3.org/1998/Math/MathML&quot;><mn>4</mn></math>" role="presentation" style="font-size: 113%; position: relative;"><span id="MJXc-Node-392" class="mjx-math" aria-hidden="true"><span id="MJXc-Node-393" class="mjx-mrow"><span id="MJXc-Node-394" class="mjx-mn"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.39em; padding-bottom: 0.335em;">4</span></span></span></span><span class="MJX_Assistive_MathML" role="presentation"><math xmlns="http://www.w3.org/1998/Math/MathML">
                            <mn>4</mn>
                        </math></span></span>
                <script type="math/tex" id="MathJax-Element-21">4</script>-to-<span class="MathJax_Preview" style="color: inherit;"></span><span id="MathJax-Element-22-Frame" class="mjx-chtml MathJax_CHTML" tabindex="0" data-mathml="<math xmlns=&quot;http://www.w3.org/1998/Math/MathML&quot;><mn>2</mn></math>" role="presentation" style="font-size: 113%; position: relative;"><span id="MJXc-Node-395" class="mjx-math" aria-hidden="true"><span id="MJXc-Node-396" class="mjx-mrow"><span id="MJXc-Node-397" class="mjx-mn"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.39em; padding-bottom: 0.335em;">2</span></span></span></span><span class="MJX_Assistive_MathML" role="presentation"><math xmlns="http://www.w3.org/1998/Math/MathML">
                            <mn>2</mn>
                        </math></span></span>
                <script type="math/tex" id="MathJax-Element-22">2</script> Encoder given below. Note: This is NOT a
                Priority Encoder.
            </p> <p>For the input <span class="MathJax_Preview" style="color: inherit;"></span><span id="MathJax-Element-23-Frame" class="mjx-chtml MathJax_CHTML" tabindex="0" data-mathml="<math xmlns=&quot;http://www.w3.org/1998/Math/MathML&quot;><msub><mrow class=&quot;MJX-TeXAtom-ORD&quot;><mi mathvariant=&quot;normal&quot;>A</mi></mrow><mrow class=&quot;MJX-TeXAtom-ORD&quot;><mn>3</mn></mrow></msub><msub><mrow class=&quot;MJX-TeXAtom-ORD&quot;><mtext>&amp;#xA0;</mtext><mi mathvariant=&quot;normal&quot;>A</mi></mrow><mrow class=&quot;MJX-TeXAtom-ORD&quot;><mn>2</mn></mrow></msub><msub><mrow class=&quot;MJX-TeXAtom-ORD&quot;><mtext>&amp;#xA0;</mtext><mi mathvariant=&quot;normal&quot;>A</mi></mrow><mrow class=&quot;MJX-TeXAtom-ORD&quot;><mn>1</mn></mrow></msub><msub><mrow class=&quot;MJX-TeXAtom-ORD&quot;><mtext>&amp;#xA0;</mtext><mi mathvariant=&quot;normal&quot;>A</mi></mrow><mrow class=&quot;MJX-TeXAtom-ORD&quot;><mn>0</mn></mrow></msub><mo>=</mo><mn>0110</mn></math>" role="presentation" style="font-size: 113%; position: relative;"><span id="MJXc-Node-398" class="mjx-math" aria-hidden="true"><span id="MJXc-Node-399" class="mjx-mrow"><span id="MJXc-Node-400" class="mjx-msubsup"><span class="mjx-base"><span id="MJXc-Node-401" class="mjx-texatom"><span id="MJXc-Node-402" class="mjx-mrow"><span id="MJXc-Node-403" class="mjx-mi"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.445em; padding-bottom: 0.335em;">A</span></span></span></span></span><span class="mjx-sub" style="font-size: 70.7%; vertical-align: -0.212em; padding-right: 0.071em;"><span id="MJXc-Node-404" class="mjx-texatom" style=""><span id="MJXc-Node-405" class="mjx-mrow"><span id="MJXc-Node-406" class="mjx-mn"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.39em; padding-bottom: 0.39em;">3</span></span></span></span></span></span><span id="MJXc-Node-407" class="mjx-msubsup"><span class="mjx-base"><span id="MJXc-Node-408" class="mjx-texatom"><span id="MJXc-Node-409" class="mjx-mrow"><span id="MJXc-Node-410" class="mjx-mtext"><span class="mjx-char MJXc-TeX-main-R" style="margin-top: -0.274em; padding-bottom: 0.335em;">&nbsp;</span></span><span id="MJXc-Node-411" class="mjx-mi"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.445em; padding-bottom: 0.335em;">A</span></span></span></span></span><span class="mjx-sub" style="font-size: 70.7%; vertical-align: -0.212em; padding-right: 0.071em;"><span id="MJXc-Node-412" class="mjx-texatom" style=""><span id="MJXc-Node-413" class="mjx-mrow"><span id="MJXc-Node-414" class="mjx-mn"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.39em; padding-bottom: 0.335em;">2</span></span></span></span></span></span><span id="MJXc-Node-415" class="mjx-msubsup"><span class="mjx-base"><span id="MJXc-Node-416" class="mjx-texatom"><span id="MJXc-Node-417" class="mjx-mrow"><span id="MJXc-Node-418" class="mjx-mtext"><span class="mjx-char MJXc-TeX-main-R" style="margin-top: -0.274em; padding-bottom: 0.335em;">&nbsp;</span></span><span id="MJXc-Node-419" class="mjx-mi"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.445em; padding-bottom: 0.335em;">A</span></span></span></span></span><span class="mjx-sub" style="font-size: 70.7%; vertical-align: -0.212em; padding-right: 0.071em;"><span id="MJXc-Node-420" class="mjx-texatom" style=""><span id="MJXc-Node-421" class="mjx-mrow"><span id="MJXc-Node-422" class="mjx-mn"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.39em; padding-bottom: 0.335em;">1</span></span></span></span></span></span><span id="MJXc-Node-423" class="mjx-msubsup"><span class="mjx-base"><span id="MJXc-Node-424" class="mjx-texatom"><span id="MJXc-Node-425" class="mjx-mrow"><span id="MJXc-Node-426" class="mjx-mtext"><span class="mjx-char MJXc-TeX-main-R" style="margin-top: -0.274em; padding-bottom: 0.335em;">&nbsp;</span></span><span id="MJXc-Node-427" class="mjx-mi"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.445em; padding-bottom: 0.335em;">A</span></span></span></span></span><span class="mjx-sub" style="font-size: 70.7%; vertical-align: -0.212em; padding-right: 0.071em;"><span id="MJXc-Node-428" class="mjx-texatom" style=""><span id="MJXc-Node-429" class="mjx-mrow"><span id="MJXc-Node-430" class="mjx-mn"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.39em; padding-bottom: 0.39em;">0</span></span></span></span></span></span><span id="MJXc-Node-431" class="mjx-mo MJXc-space3"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.058em; padding-bottom: 0.335em;">=</span></span><span id="MJXc-Node-432" class="mjx-mn MJXc-space3"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.39em; padding-bottom: 0.39em;">0110</span></span></span></span><span class="MJX_Assistive_MathML" role="presentation"><math xmlns="http://www.w3.org/1998/Math/MathML">
                            <msub>
                                <mrow class="MJX-TeXAtom-ORD">
                                    <mi mathvariant="normal">A</mi>
                                </mrow>
                                <mrow class="MJX-TeXAtom-ORD">
                                    <mn>3</mn>
                                </mrow>
                            </msub>
                            <msub>
                                <mrow class="MJX-TeXAtom-ORD">
                                    <mtext>&nbsp;</mtext>
                                    <mi mathvariant="normal">A</mi>
                                </mrow>
                                <mrow class="MJX-TeXAtom-ORD">
                                    <mn>2</mn>
                                </mrow>
                            </msub>
                            <msub>
                                <mrow class="MJX-TeXAtom-ORD">
                                    <mtext>&nbsp;</mtext>
                                    <mi mathvariant="normal">A</mi>
                                </mrow>
                                <mrow class="MJX-TeXAtom-ORD">
                                    <mn>1</mn>
                                </mrow>
                            </msub>
                            <msub>
                                <mrow class="MJX-TeXAtom-ORD">
                                    <mtext>&nbsp;</mtext>
                                    <mi mathvariant="normal">A</mi>
                                </mrow>
                                <mrow class="MJX-TeXAtom-ORD">
                                    <mn>0</mn>
                                </mrow>
                            </msub>
                            <mo>=</mo>
                            <mn>0110</mn>
                        </math></span></span>
                <script type="math/tex" id="MathJax-Element-23">\mathrm{A}_{3} \mathrm{~A}_{2} \mathrm{~A}_{1} \mathrm{~A}_{0}=0110</script>
                what is the value of the output <span class="MathJax_Preview" style="color: inherit;"></span><span id="MathJax-Element-24-Frame" class="mjx-chtml MathJax_CHTML" tabindex="0" data-mathml="<math xmlns=&quot;http://www.w3.org/1998/Math/MathML&quot;><msub><mtext>Y</mtext><mrow class=&quot;MJX-TeXAtom-ORD&quot;><mn>1</mn></mrow></msub><msub><mtext>Y</mtext><mrow class=&quot;MJX-TeXAtom-ORD&quot;><mn>0</mn></mrow></msub></math>" role="presentation" style="font-size: 113%; position: relative;"><span id="MJXc-Node-433" class="mjx-math" aria-hidden="true"><span id="MJXc-Node-434" class="mjx-mrow"><span id="MJXc-Node-435" class="mjx-msubsup"><span class="mjx-base"><span id="MJXc-Node-436" class="mjx-mtext"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.39em; padding-bottom: 0.335em;">Y</span></span></span><span class="mjx-sub" style="font-size: 70.7%; vertical-align: -0.212em; padding-right: 0.071em;"><span id="MJXc-Node-437" class="mjx-texatom" style=""><span id="MJXc-Node-438" class="mjx-mrow"><span id="MJXc-Node-439" class="mjx-mn"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.39em; padding-bottom: 0.335em;">1</span></span></span></span></span></span><span id="MJXc-Node-440" class="mjx-msubsup"><span class="mjx-base"><span id="MJXc-Node-441" class="mjx-mtext"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.39em; padding-bottom: 0.335em;">Y</span></span></span><span class="mjx-sub" style="font-size: 70.7%; vertical-align: -0.212em; padding-right: 0.071em;"><span id="MJXc-Node-442" class="mjx-texatom" style=""><span id="MJXc-Node-443" class="mjx-mrow"><span id="MJXc-Node-444" class="mjx-mn"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.39em; padding-bottom: 0.39em;">0</span></span></span></span></span></span></span></span><span class="MJX_Assistive_MathML" role="presentation"><math xmlns="http://www.w3.org/1998/Math/MathML">
                            <msub>
                                <mtext>Y</mtext>
                                <mrow class="MJX-TeXAtom-ORD">
                                    <mn>1</mn>
                                </mrow>
                            </msub>
                            <msub>
                                <mtext>Y</mtext>
                                <mrow class="MJX-TeXAtom-ORD">
                                    <mn>0</mn>
                                </mrow>
                            </msub>
                        </math></span></span>
                <script type="math/tex" id="MathJax-Element-24">\text{Y}_{1} \text{Y}_{0}</script> ?
            </p> <p style="text-align:center"><img alt="" src="https://gateoverflow.in/?qa=blob&amp;qa_blobid=4987808141837399846" style="max-width: 75%;"></p> <p></p>`,
      image: "",
      options: [
        `<span class="MathJax_Preview" style="color: inherit;"></span><span id="MathJax-Element-25-Frame" class="mjx-chtml MathJax_CHTML" tabindex="0" data-mathml="<math xmlns=&quot;http://www.w3.org/1998/Math/MathML&quot;><mn>00</mn></math>" role="presentation" style="font-size: 113%; position: relative;"><span id="MJXc-Node-445" class="mjx-math" aria-hidden="true"><span id="MJXc-Node-446" class="mjx-mrow"><span id="MJXc-Node-447" class="mjx-mn"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.39em; padding-bottom: 0.39em;">00</span></span></span></span><span class="MJX_Assistive_MathML" role="presentation"><math xmlns="http://www.w3.org/1998/Math/MathML">
                                <mn>00</mn>
                            </math></span></span>
                    <script type="math/tex" id="MathJax-Element-25">00</script>`,
        `<span class="MathJax_Preview" style="color: inherit;"></span><span id="MathJax-Element-26-Frame" class="mjx-chtml MathJax_CHTML" tabindex="0" data-mathml="<math xmlns=&quot;http://www.w3.org/1998/Math/MathML&quot;><mn>10</mn></math>" role="presentation" style="font-size: 113%; position: relative;"><span id="MJXc-Node-448" class="mjx-math" aria-hidden="true"><span id="MJXc-Node-449" class="mjx-mrow"><span id="MJXc-Node-450" class="mjx-mn"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.39em; padding-bottom: 0.39em;">10</span></span></span></span><span class="MJX_Assistive_MathML" role="presentation"><math xmlns="http://www.w3.org/1998/Math/MathML">
                                <mn>10</mn>
                            </math></span></span>
                    <script type="math/tex" id="MathJax-Element-26">10</script>`,
        `<span class="MathJax_Preview" style="color: inherit;"></span><span id="MathJax-Element-27-Frame" class="mjx-chtml MathJax_CHTML" tabindex="0" data-mathml="<math xmlns=&quot;http://www.w3.org/1998/Math/MathML&quot;><mn>11</mn></math>" role="presentation" style="font-size: 113%; position: relative;"><span id="MJXc-Node-451" class="mjx-math" aria-hidden="true"><span id="MJXc-Node-452" class="mjx-mrow"><span id="MJXc-Node-453" class="mjx-mn"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.39em; padding-bottom: 0.335em;">11</span></span></span></span><span class="MJX_Assistive_MathML" role="presentation"><math xmlns="http://www.w3.org/1998/Math/MathML">
                                <mn>11</mn>
                            </math></span></span>
                    <script type="math/tex" id="MathJax-Element-27">11</script>`,
        `Cannot be determined.`,
      ],
      answer: "D",
      solution: ``
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p>What is the following circuit?</p> <p style="text-align:center"><img alt="" height="142" width="313" src="https://gateoverflow.in/?qa=blob&amp;qa_blobid=17641776862168967302" style="max-width: 75%;"></p> <p><br>A. <span class="MathJax_Preview" style="color: inherit;"></span><span id="MathJax-Element-28-Frame" class="mjx-chtml MathJax_CHTML" tabindex="0" data-mathml="<math xmlns=&quot;http://www.w3.org/1998/Math/MathML&quot;><mn>2</mn><mo>&amp;#x2212;</mo><mn>1</mn></math>" role="presentation" style="font-size: 113%; position: relative;"><span id="MJXc-Node-454" class="mjx-math" aria-hidden="true"><span id="MJXc-Node-455" class="mjx-mrow"><span id="MJXc-Node-456" class="mjx-mn"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.39em; padding-bottom: 0.335em;">2</span></span><span id="MJXc-Node-457" class="mjx-mo MJXc-space2"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.279em; padding-bottom: 0.445em;">−</span></span><span id="MJXc-Node-458" class="mjx-mn MJXc-space2"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.39em; padding-bottom: 0.335em;">1</span></span></span></span><span class="MJX_Assistive_MathML" role="presentation"><math xmlns="http://www.w3.org/1998/Math/MathML">
                            <mn>2</mn>
                            <mo>−</mo>
                            <mn>1</mn>
                        </math></span></span>
                <script type="math/tex" id="MathJax-Element-28">2-1</script> MUX<br>B. <span class="MathJax_Preview" style="color: inherit;"></span><span id="MathJax-Element-29-Frame" class="mjx-chtml MathJax_CHTML" tabindex="0" data-mathml="<math xmlns=&quot;http://www.w3.org/1998/Math/MathML&quot;><mn>1</mn><mo>&amp;#x2212;</mo><mn>2</mn></math>" role="presentation" style="font-size: 113%; position: relative;"><span id="MJXc-Node-459" class="mjx-math" aria-hidden="true"><span id="MJXc-Node-460" class="mjx-mrow"><span id="MJXc-Node-461" class="mjx-mn"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.39em; padding-bottom: 0.335em;">1</span></span><span id="MJXc-Node-462" class="mjx-mo MJXc-space2"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.279em; padding-bottom: 0.445em;">−</span></span><span id="MJXc-Node-463" class="mjx-mn MJXc-space2"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.39em; padding-bottom: 0.335em;">2</span></span></span></span><span class="MJX_Assistive_MathML" role="presentation"><math xmlns="http://www.w3.org/1998/Math/MathML">
                            <mn>1</mn>
                            <mo>−</mo>
                            <mn>2</mn>
                        </math></span></span>
                <script type="math/tex" id="MathJax-Element-29">1-2</script> Decoder<br>B. <span class="MathJax_Preview" style="color: inherit;"></span><span id="MathJax-Element-30-Frame" class="mjx-chtml MathJax_CHTML" tabindex="0" data-mathml="<math xmlns=&quot;http://www.w3.org/1998/Math/MathML&quot;><mn>2</mn><mo>&amp;#x2212;</mo><mn>1</mn></math>" role="presentation" style="font-size: 113%; position: relative;"><span id="MJXc-Node-464" class="mjx-math" aria-hidden="true"><span id="MJXc-Node-465" class="mjx-mrow"><span id="MJXc-Node-466" class="mjx-mn"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.39em; padding-bottom: 0.335em;">2</span></span><span id="MJXc-Node-467" class="mjx-mo MJXc-space2"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.279em; padding-bottom: 0.445em;">−</span></span><span id="MJXc-Node-468" class="mjx-mn MJXc-space2"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.39em; padding-bottom: 0.335em;">1</span></span></span></span><span class="MJX_Assistive_MathML" role="presentation"><math xmlns="http://www.w3.org/1998/Math/MathML">
                            <mn>2</mn>
                            <mo>−</mo>
                            <mn>1</mn>
                        </math></span></span>
                <script type="math/tex" id="MathJax-Element-30">2-1</script> Priority Encoder<br>C. <span class="MathJax_Preview" style="color: inherit;"></span><span id="MathJax-Element-31-Frame" class="mjx-chtml MathJax_CHTML" tabindex="0" data-mathml="<math xmlns=&quot;http://www.w3.org/1998/Math/MathML&quot;><mn>1</mn><mo>&amp;#x2212;</mo><mn>2</mn></math>" role="presentation" style="font-size: 113%; position: relative;"><span id="MJXc-Node-469" class="mjx-math" aria-hidden="true"><span id="MJXc-Node-470" class="mjx-mrow"><span id="MJXc-Node-471" class="mjx-mn"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.39em; padding-bottom: 0.335em;">1</span></span><span id="MJXc-Node-472" class="mjx-mo MJXc-space2"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.279em; padding-bottom: 0.445em;">−</span></span><span id="MJXc-Node-473" class="mjx-mn MJXc-space2"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.39em; padding-bottom: 0.335em;">2</span></span></span></span><span class="MJX_Assistive_MathML" role="presentation"><math xmlns="http://www.w3.org/1998/Math/MathML">
                            <mn>1</mn>
                            <mo>−</mo>
                            <mn>2</mn>
                        </math></span></span>
                <script type="math/tex" id="MathJax-Element-31">1-2</script> DEMUX
            </p> <p></p>`,
      image: "",
      options: [
      ],
      answer: "A",
      solution: ``
    },
    {
      marks: 2,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>Consider the following function:<br><span class="MathJax_Preview" style="color: inherit;"></span><span class="mjx-chtml MJXc-display" style="text-align: center;"><span id="MathJax-Element-32-Frame" class="mjx-chtml MathJax_CHTML" tabindex="0" data-mathml="<math xmlns=&quot;http://www.w3.org/1998/Math/MathML&quot; display=&quot;block&quot;><mi>f</mi><mo stretchy=&quot;false&quot;>(</mo><mi>a</mi><mo>,</mo><mi>b</mi><mo>,</mo><mi>c</mi><mo stretchy=&quot;false&quot;>)</mo><mo>=</mo><mo>&amp;#x2211;</mo><mi>m</mi><mo stretchy=&quot;false&quot;>(</mo><mn>1</mn><mo>,</mo><mn>3</mn><mo>,</mo><mn>4</mn><mo>,</mo><mn>7</mn><mo stretchy=&quot;false&quot;>)</mo><mo>+</mo><mo>&amp;#x2211;</mo><mi>d</mi><mo stretchy=&quot;false&quot;>(</mo><mn>6</mn><mo stretchy=&quot;false&quot;>)</mo><mo>.</mo></math>" role="presentation" style="font-size: 113%; text-align: center; position: relative;"><span id="MJXc-Node-474" class="mjx-math" aria-hidden="true"><span id="MJXc-Node-475" class="mjx-mrow"><span id="MJXc-Node-476" class="mjx-mi"><span class="mjx-char MJXc-TeX-math-I" style="padding-top: 0.501em; padding-bottom: 0.501em; padding-right: 0.06em;">f</span></span><span id="MJXc-Node-477" class="mjx-mo"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.445em; padding-bottom: 0.611em;">(</span></span><span id="MJXc-Node-478" class="mjx-mi"><span class="mjx-char MJXc-TeX-math-I" style="padding-top: 0.224em; padding-bottom: 0.279em;">a</span></span><span id="MJXc-Node-479" class="mjx-mo"><span class="mjx-char MJXc-TeX-main-R" style="margin-top: -0.163em; padding-bottom: 0.556em;">,</span></span><span id="MJXc-Node-480" class="mjx-mi MJXc-space1"><span class="mjx-char MJXc-TeX-math-I" style="padding-top: 0.445em; padding-bottom: 0.279em;">b</span></span><span id="MJXc-Node-481" class="mjx-mo"><span class="mjx-char MJXc-TeX-main-R" style="margin-top: -0.163em; padding-bottom: 0.556em;">,</span></span><span id="MJXc-Node-482" class="mjx-mi MJXc-space1"><span class="mjx-char MJXc-TeX-math-I" style="padding-top: 0.224em; padding-bottom: 0.279em;">c</span></span><span id="MJXc-Node-483" class="mjx-mo"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.445em; padding-bottom: 0.611em;">)</span></span><span id="MJXc-Node-484" class="mjx-mo MJXc-space3"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.058em; padding-bottom: 0.335em;">=</span></span><span id="MJXc-Node-485" class="mjx-mo MJXc-space3"><span class="mjx-char MJXc-TeX-size2-R" style="padding-top: 0.722em; padding-bottom: 0.722em;">∑</span></span><span id="MJXc-Node-486" class="mjx-mi MJXc-space1"><span class="mjx-char MJXc-TeX-math-I" style="padding-top: 0.224em; padding-bottom: 0.279em;">m</span></span><span id="MJXc-Node-487" class="mjx-mo"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.445em; padding-bottom: 0.611em;">(</span></span><span id="MJXc-Node-488" class="mjx-mn"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.39em; padding-bottom: 0.335em;">1</span></span><span id="MJXc-Node-489" class="mjx-mo"><span class="mjx-char MJXc-TeX-main-R" style="margin-top: -0.163em; padding-bottom: 0.556em;">,</span></span><span id="MJXc-Node-490" class="mjx-mn MJXc-space1"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.39em; padding-bottom: 0.39em;">3</span></span><span id="MJXc-Node-491" class="mjx-mo"><span class="mjx-char MJXc-TeX-main-R" style="margin-top: -0.163em; padding-bottom: 0.556em;">,</span></span><span id="MJXc-Node-492" class="mjx-mn MJXc-space1"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.39em; padding-bottom: 0.335em;">4</span></span><span id="MJXc-Node-493" class="mjx-mo"><span class="mjx-char MJXc-TeX-main-R" style="margin-top: -0.163em; padding-bottom: 0.556em;">,</span></span><span id="MJXc-Node-494" class="mjx-mn MJXc-space1"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.39em; padding-bottom: 0.39em;">7</span></span><span id="MJXc-Node-495" class="mjx-mo"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.445em; padding-bottom: 0.611em;">)</span></span><span id="MJXc-Node-496" class="mjx-mo MJXc-space2"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.279em; padding-bottom: 0.445em;">+</span></span><span id="MJXc-Node-497" class="mjx-mo MJXc-space2"><span class="mjx-char MJXc-TeX-size2-R" style="padding-top: 0.722em; padding-bottom: 0.722em;">∑</span></span><span id="MJXc-Node-498" class="mjx-mi MJXc-space1"><span class="mjx-char MJXc-TeX-math-I" style="padding-top: 0.445em; padding-bottom: 0.279em; padding-right: 0.003em;">d</span></span><span id="MJXc-Node-499" class="mjx-mo"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.445em; padding-bottom: 0.611em;">(</span></span><span id="MJXc-Node-500" class="mjx-mn"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.39em; padding-bottom: 0.39em;">6</span></span><span id="MJXc-Node-501" class="mjx-mo"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.445em; padding-bottom: 0.611em;">)</span></span><span id="MJXc-Node-502" class="mjx-mo"><span class="mjx-char MJXc-TeX-main-R" style="margin-top: -0.163em; padding-bottom: 0.335em;">.</span></span></span></span><span class="MJX_Assistive_MathML MJX_Assistive_MathML_Block" role="presentation"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
                                <mi>f</mi>
                                <mo stretchy="false">(</mo>
                                <mi>a</mi>
                                <mo>,</mo>
                                <mi>b</mi>
                                <mo>,</mo>
                                <mi>c</mi>
                                <mo stretchy="false">)</mo>
                                <mo>=</mo>
                                <mo>∑</mo>
                                <mi>m</mi>
                                <mo stretchy="false">(</mo>
                                <mn>1</mn>
                                <mo>,</mo>
                                <mn>3</mn>
                                <mo>,</mo>
                                <mn>4</mn>
                                <mo>,</mo>
                                <mn>7</mn>
                                <mo stretchy="false">)</mo>
                                <mo>+</mo>
                                <mo>∑</mo>
                                <mi>d</mi>
                                <mo stretchy="false">(</mo>
                                <mn>6</mn>
                                <mo stretchy="false">)</mo>
                                <mo>.</mo>
                            </math></span></span></span>
                <script type="math/tex; mode=display" id="MathJax-Element-32"> f(a, b, c)=\sum m(1,3,4,7)+\sum d(6). </script><br>Note that "<span class="MathJax_Preview" style="color: inherit;"></span><span id="MathJax-Element-33-Frame" class="mjx-chtml MathJax_CHTML" tabindex="0" data-mathml="<math xmlns=&quot;http://www.w3.org/1998/Math/MathML&quot;><mi>m</mi></math>" role="presentation" style="font-size: 113%; position: relative;"><span id="MJXc-Node-503" class="mjx-math" aria-hidden="true"><span id="MJXc-Node-504" class="mjx-mrow"><span id="MJXc-Node-505" class="mjx-mi"><span class="mjx-char MJXc-TeX-math-I" style="padding-top: 0.224em; padding-bottom: 0.279em;">m</span></span></span></span><span class="MJX_Assistive_MathML" role="presentation"><math xmlns="http://www.w3.org/1998/Math/MathML">
                            <mi>m</mi>
                        </math></span></span>
                <script type="math/tex" id="MathJax-Element-33">m</script>" represents the minterms for which <span class="MathJax_Preview" style="color: inherit;"></span><span id="MathJax-Element-34-Frame" class="mjx-chtml MathJax_CHTML" tabindex="0" data-mathml="<math xmlns=&quot;http://www.w3.org/1998/Math/MathML&quot;><mi>f</mi><mo stretchy=&quot;false&quot;>(</mo><mi>a</mi><mo>,</mo><mi>b</mi><mo>,</mo><mi>c</mi><mo stretchy=&quot;false&quot;>)</mo></math>" role="presentation" style="font-size: 113%; position: relative;"><span id="MJXc-Node-506" class="mjx-math" aria-hidden="true"><span id="MJXc-Node-507" class="mjx-mrow"><span id="MJXc-Node-508" class="mjx-mi"><span class="mjx-char MJXc-TeX-math-I" style="padding-top: 0.501em; padding-bottom: 0.501em; padding-right: 0.06em;">f</span></span><span id="MJXc-Node-509" class="mjx-mo"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.445em; padding-bottom: 0.611em;">(</span></span><span id="MJXc-Node-510" class="mjx-mi"><span class="mjx-char MJXc-TeX-math-I" style="padding-top: 0.224em; padding-bottom: 0.279em;">a</span></span><span id="MJXc-Node-511" class="mjx-mo"><span class="mjx-char MJXc-TeX-main-R" style="margin-top: -0.163em; padding-bottom: 0.556em;">,</span></span><span id="MJXc-Node-512" class="mjx-mi MJXc-space1"><span class="mjx-char MJXc-TeX-math-I" style="padding-top: 0.445em; padding-bottom: 0.279em;">b</span></span><span id="MJXc-Node-513" class="mjx-mo"><span class="mjx-char MJXc-TeX-main-R" style="margin-top: -0.163em; padding-bottom: 0.556em;">,</span></span><span id="MJXc-Node-514" class="mjx-mi MJXc-space1"><span class="mjx-char MJXc-TeX-math-I" style="padding-top: 0.224em; padding-bottom: 0.279em;">c</span></span><span id="MJXc-Node-515" class="mjx-mo"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.445em; padding-bottom: 0.611em;">)</span></span></span></span><span class="MJX_Assistive_MathML" role="presentation"><math xmlns="http://www.w3.org/1998/Math/MathML">
                            <mi>f</mi>
                            <mo stretchy="false">(</mo>
                            <mi>a</mi>
                            <mo>,</mo>
                            <mi>b</mi>
                            <mo>,</mo>
                            <mi>c</mi>
                            <mo stretchy="false">)</mo>
                        </math></span></span>
                <script type="math/tex" id="MathJax-Element-34">f(a,b,c)</script> is <span class="MathJax_Preview" style="color: inherit;"></span><span id="MathJax-Element-35-Frame" class="mjx-chtml MathJax_CHTML" tabindex="0" data-mathml="<math xmlns=&quot;http://www.w3.org/1998/Math/MathML&quot;><mn>1</mn><mo>.</mo></math>" role="presentation" style="font-size: 113%; position: relative;"><span id="MJXc-Node-516" class="mjx-math" aria-hidden="true"><span id="MJXc-Node-517" class="mjx-mrow"><span id="MJXc-Node-518" class="mjx-mn"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.39em; padding-bottom: 0.335em;">1</span></span><span id="MJXc-Node-519" class="mjx-mo"><span class="mjx-char MJXc-TeX-main-R" style="margin-top: -0.163em; padding-bottom: 0.335em;">.</span></span></span></span><span class="MJX_Assistive_MathML" role="presentation"><math xmlns="http://www.w3.org/1998/Math/MathML">
                            <mn>1</mn>
                            <mo>.</mo>
                        </math></span></span>
                <script type="math/tex" id="MathJax-Element-35">1 .</script> " <span class="MathJax_Preview" style="color: inherit;"></span><span id="MathJax-Element-36-Frame" class="mjx-chtml MathJax_CHTML" tabindex="0" data-mathml="<math xmlns=&quot;http://www.w3.org/1998/Math/MathML&quot;><mi>d</mi></math>" role="presentation" style="font-size: 113%; position: relative;"><span id="MJXc-Node-520" class="mjx-math" aria-hidden="true"><span id="MJXc-Node-521" class="mjx-mrow"><span id="MJXc-Node-522" class="mjx-mi"><span class="mjx-char MJXc-TeX-math-I" style="padding-top: 0.445em; padding-bottom: 0.279em; padding-right: 0.003em;">d</span></span></span></span><span class="MJX_Assistive_MathML" role="presentation"><math xmlns="http://www.w3.org/1998/Math/MathML">
                            <mi>d</mi>
                        </math></span></span>
                <script type="math/tex" id="MathJax-Element-36">d</script> " represents the "don't care"
                minterms.<br>Which of the following is / are correct for <span class="MathJax_Preview" style="color: inherit;"></span><span id="MathJax-Element-37-Frame" class="mjx-chtml MathJax_CHTML" tabindex="0" data-mathml="<math xmlns=&quot;http://www.w3.org/1998/Math/MathML&quot;><mi>f</mi><mo>?</mo></math>" role="presentation" style="font-size: 113%; position: relative;"><span id="MJXc-Node-523" class="mjx-math" aria-hidden="true"><span id="MJXc-Node-524" class="mjx-mrow"><span id="MJXc-Node-525" class="mjx-mi"><span class="mjx-char MJXc-TeX-math-I" style="padding-top: 0.501em; padding-bottom: 0.501em; padding-right: 0.06em;">f</span></span><span id="MJXc-Node-526" class="mjx-mo"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.445em; padding-bottom: 0.335em;">?</span></span></span></span><span class="MJX_Assistive_MathML" role="presentation"><math xmlns="http://www.w3.org/1998/Math/MathML">
                            <mi>f</mi>
                            <mo>?</mo>
                        </math></span></span>
                <script type="math/tex" id="MathJax-Element-37">f?</script>
            </p> <p></p>`,
      image: "",
      options: [
        `Number of Prime Implicants is <span class="MathJax_Preview" style="color: inherit;"></span><span id="MathJax-Element-38-Frame" class="mjx-chtml MathJax_CHTML" tabindex="0" data-mathml="<math xmlns=&quot;http://www.w3.org/1998/Math/MathML&quot;><mn>4</mn><mo>.</mo></math>" role="presentation" style="font-size: 113%; position: relative;"><span id="MJXc-Node-527" class="mjx-math" aria-hidden="true"><span id="MJXc-Node-528" class="mjx-mrow"><span id="MJXc-Node-529" class="mjx-mn"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.39em; padding-bottom: 0.335em;">4</span></span><span id="MJXc-Node-530" class="mjx-mo"><span class="mjx-char MJXc-TeX-main-R" style="margin-top: -0.163em; padding-bottom: 0.335em;">.</span></span></span></span><span class="MJX_Assistive_MathML" role="presentation"><math xmlns="http://www.w3.org/1998/Math/MathML">
                                <mn>4</mn>
                                <mo>.</mo>
                            </math></span></span>
                    <script type="math/tex" id="MathJax-Element-38">4 .</script>`,
        `Number of Essential Prime Implicants is <span class="MathJax_Preview" style="color: inherit;"></span><span id="MathJax-Element-39-Frame" class="mjx-chtml MathJax_CHTML" tabindex="0" data-mathml="<math xmlns=&quot;http://www.w3.org/1998/Math/MathML&quot;><mn>3</mn><mo>.</mo></math>" role="presentation" style="font-size: 113%; position: relative;"><span id="MJXc-Node-531" class="mjx-math" aria-hidden="true"><span id="MJXc-Node-532" class="mjx-mrow"><span id="MJXc-Node-533" class="mjx-mn"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.39em; padding-bottom: 0.39em;">3</span></span><span id="MJXc-Node-534" class="mjx-mo"><span class="mjx-char MJXc-TeX-main-R" style="margin-top: -0.163em; padding-bottom: 0.335em;">.</span></span></span></span><span class="MJX_Assistive_MathML" role="presentation"><math xmlns="http://www.w3.org/1998/Math/MathML">
                                <mn>3</mn>
                                <mo>.</mo>
                            </math></span></span>
                    <script type="math/tex" id="MathJax-Element-39">3 .</script>`,
        `Number of minimum sum of product expressions is <span class="MathJax_Preview" style="color: inherit;"></span><span id="MathJax-Element-40-Frame" class="mjx-chtml MathJax_CHTML" tabindex="0" data-mathml="<math xmlns=&quot;http://www.w3.org/1998/Math/MathML&quot;><mn>2</mn><mo>.</mo></math>" role="presentation" style="font-size: 113%; position: relative;"><span id="MJXc-Node-535" class="mjx-math" aria-hidden="true"><span id="MJXc-Node-536" class="mjx-mrow"><span id="MJXc-Node-537" class="mjx-mn"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.39em; padding-bottom: 0.335em;">2</span></span><span id="MJXc-Node-538" class="mjx-mo"><span class="mjx-char MJXc-TeX-main-R" style="margin-top: -0.163em; padding-bottom: 0.335em;">.</span></span></span></span><span class="MJX_Assistive_MathML" role="presentation"><math xmlns="http://www.w3.org/1998/Math/MathML">
                                <mn>2</mn>
                                <mo>.</mo>
                            </math></span></span>
                    <script type="math/tex" id="MathJax-Element-40">2 .</script>`,
        `Number of minimum product of sum expressions is <span class="MathJax_Preview" style="color: inherit;"></span><span id="MathJax-Element-41-Frame" class="mjx-chtml MathJax_CHTML" tabindex="0" data-mathml="<math xmlns=&quot;http://www.w3.org/1998/Math/MathML&quot;><mn>2</mn><mo>.</mo></math>" role="presentation" style="font-size: 113%; position: relative;"><span id="MJXc-Node-539" class="mjx-math" aria-hidden="true"><span id="MJXc-Node-540" class="mjx-mrow"><span id="MJXc-Node-541" class="mjx-mn"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.39em; padding-bottom: 0.335em;">2</span></span><span id="MJXc-Node-542" class="mjx-mo"><span class="mjx-char MJXc-TeX-main-R" style="margin-top: -0.163em; padding-bottom: 0.335em;">.</span></span></span></span><span class="MJX_Assistive_MathML" role="presentation"><math xmlns="http://www.w3.org/1998/Math/MathML">
                                <mn>2</mn>
                                <mo>.</mo>
                            </math></span></span>
                    <script type="math/tex" id="MathJax-Element-41">2 .</script>`,
      ],
      answer: "A",
      solution: ``
    },
    {
      marks: 2,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>The following circuit using a <span class="MathJax_Preview" style="color: inherit;"></span><span id="MathJax-Element-42-Frame" class="mjx-chtml MathJax_CHTML" tabindex="0" data-mathml="<math xmlns=&quot;http://www.w3.org/1998/Math/MathML&quot;><mn>3</mn></math>" role="presentation" style="font-size: 113%; position: relative;"><span id="MJXc-Node-543" class="mjx-math" aria-hidden="true"><span id="MJXc-Node-544" class="mjx-mrow"><span id="MJXc-Node-545" class="mjx-mn"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.39em; padding-bottom: 0.39em;">3</span></span></span></span><span class="MJX_Assistive_MathML" role="presentation"><math xmlns="http://www.w3.org/1998/Math/MathML">
                            <mn>3</mn>
                        </math></span></span>
                <script type="math/tex" id="MathJax-Element-42">3</script>-to-<span class="MathJax_Preview" style="color: inherit;"></span><span id="MathJax-Element-43-Frame" class="mjx-chtml MathJax_CHTML" tabindex="0" data-mathml="<math xmlns=&quot;http://www.w3.org/1998/Math/MathML&quot;><mn>8</mn></math>" role="presentation" style="font-size: 113%; position: relative;"><span id="MJXc-Node-546" class="mjx-math" aria-hidden="true"><span id="MJXc-Node-547" class="mjx-mrow"><span id="MJXc-Node-548" class="mjx-mn"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.39em; padding-bottom: 0.39em;">8</span></span></span></span><span class="MJX_Assistive_MathML" role="presentation"><math xmlns="http://www.w3.org/1998/Math/MathML">
                            <mn>8</mn>
                        </math></span></span>
                <script type="math/tex" id="MathJax-Element-43">8</script> binary decoder and an OR gate is an
                implementation of the function:<br><img alt="" src="https://gateoverflow.in/?qa=blob&amp;qa_blobid=13257677602250482208" style="max-width: 75%;">
            </p> <p></p>`,
      image: "",
      options: [
        `<span class="MathJax_Preview" style="color: inherit;"></span><span id="MathJax-Element-44-Frame" class="mjx-chtml MathJax_CHTML" tabindex="0" data-mathml="<math xmlns=&quot;http://www.w3.org/1998/Math/MathML&quot;><mstyle displaystyle=&quot;true&quot; scriptlevel=&quot;0&quot;><mrow class=&quot;MJX-TeXAtom-ORD&quot;></mrow><mi>f</mi><mrow><mo>(</mo><msub><mi>w</mi><mrow class=&quot;MJX-TeXAtom-ORD&quot;><mn>1</mn></mrow></msub><mo>,</mo><msub><mi>w</mi><mrow class=&quot;MJX-TeXAtom-ORD&quot;><mn>2</mn></mrow></msub><mo>,</mo><msub><mi>w</mi><mrow class=&quot;MJX-TeXAtom-ORD&quot;><mn>3</mn></mrow></msub><mo>)</mo></mrow><mo>=</mo><munder><mo>&amp;#x2211;</mo><mrow class=&quot;MJX-TeXAtom-ORD&quot;><mi>m</mi></mrow></munder><mo stretchy=&quot;false&quot;>(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>3</mn><mo>,</mo><mn>4</mn><mo>,</mo><mn>6</mn><mo>,</mo><mn>7</mn><mo stretchy=&quot;false&quot;>)</mo></mstyle></math>" role="presentation" style="font-size: 113%; position: relative;"><span id="MJXc-Node-549" class="mjx-math" aria-hidden="true"><span id="MJXc-Node-550" class="mjx-mrow"><span id="MJXc-Node-551" class="mjx-mstyle"><span id="MJXc-Node-552" class="mjx-mrow"><span id="MJXc-Node-553" class="mjx-texatom"><span id="MJXc-Node-554" class="mjx-mrow"></span></span><span id="MJXc-Node-555" class="mjx-mi"><span class="mjx-char MJXc-TeX-math-I" style="padding-top: 0.501em; padding-bottom: 0.501em; padding-right: 0.06em;">f</span></span><span id="MJXc-Node-556" class="mjx-mrow MJXc-space1"><span id="MJXc-Node-557" class="mjx-mo"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.445em; padding-bottom: 0.611em;">(</span></span><span id="MJXc-Node-558" class="mjx-msubsup"><span class="mjx-base"><span id="MJXc-Node-559" class="mjx-mi"><span class="mjx-char MJXc-TeX-math-I" style="padding-top: 0.224em; padding-bottom: 0.279em;">w</span></span></span><span class="mjx-sub" style="font-size: 70.7%; vertical-align: -0.212em; padding-right: 0.071em;"><span id="MJXc-Node-560" class="mjx-texatom" style=""><span id="MJXc-Node-561" class="mjx-mrow"><span id="MJXc-Node-562" class="mjx-mn"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.39em; padding-bottom: 0.335em;">1</span></span></span></span></span></span><span id="MJXc-Node-563" class="mjx-mo"><span class="mjx-char MJXc-TeX-main-R" style="margin-top: -0.163em; padding-bottom: 0.556em;">,</span></span><span id="MJXc-Node-564" class="mjx-msubsup MJXc-space1"><span class="mjx-base"><span id="MJXc-Node-565" class="mjx-mi"><span class="mjx-char MJXc-TeX-math-I" style="padding-top: 0.224em; padding-bottom: 0.279em;">w</span></span></span><span class="mjx-sub" style="font-size: 70.7%; vertical-align: -0.212em; padding-right: 0.071em;"><span id="MJXc-Node-566" class="mjx-texatom" style=""><span id="MJXc-Node-567" class="mjx-mrow"><span id="MJXc-Node-568" class="mjx-mn"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.39em; padding-bottom: 0.335em;">2</span></span></span></span></span></span><span id="MJXc-Node-569" class="mjx-mo"><span class="mjx-char MJXc-TeX-main-R" style="margin-top: -0.163em; padding-bottom: 0.556em;">,</span></span><span id="MJXc-Node-570" class="mjx-msubsup MJXc-space1"><span class="mjx-base"><span id="MJXc-Node-571" class="mjx-mi"><span class="mjx-char MJXc-TeX-math-I" style="padding-top: 0.224em; padding-bottom: 0.279em;">w</span></span></span><span class="mjx-sub" style="font-size: 70.7%; vertical-align: -0.212em; padding-right: 0.071em;"><span id="MJXc-Node-572" class="mjx-texatom" style=""><span id="MJXc-Node-573" class="mjx-mrow"><span id="MJXc-Node-574" class="mjx-mn"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.39em; padding-bottom: 0.39em;">3</span></span></span></span></span></span><span id="MJXc-Node-575" class="mjx-mo"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.445em; padding-bottom: 0.611em;">)</span></span></span><span id="MJXc-Node-576" class="mjx-mo MJXc-space3"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.058em; padding-bottom: 0.335em;">=</span></span><span id="MJXc-Node-577" class="mjx-munderover MJXc-space3"><span class="mjx-itable"><span class="mjx-row"><span class="mjx-cell"><span class="mjx-op"><span id="MJXc-Node-578" class="mjx-mo"><span class="mjx-char MJXc-TeX-size2-R" style="padding-top: 0.722em; padding-bottom: 0.722em;">∑</span></span></span></span></span><span class="mjx-row"><span class="mjx-under" style="font-size: 70.7%; padding-top: 0.236em; padding-bottom: 0.141em; padding-left: 0.582em;"><span id="MJXc-Node-579" class="mjx-texatom" style=""><span id="MJXc-Node-580" class="mjx-mrow"><span id="MJXc-Node-581" class="mjx-mi"><span class="mjx-char MJXc-TeX-math-I" style="padding-top: 0.224em; padding-bottom: 0.279em;">m</span></span></span></span></span></span></span></span><span id="MJXc-Node-582" class="mjx-mo"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.445em; padding-bottom: 0.611em;">(</span></span><span id="MJXc-Node-583" class="mjx-mn"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.39em; padding-bottom: 0.39em;">0</span></span><span id="MJXc-Node-584" class="mjx-mo"><span class="mjx-char MJXc-TeX-main-R" style="margin-top: -0.163em; padding-bottom: 0.556em;">,</span></span><span id="MJXc-Node-585" class="mjx-mn MJXc-space1"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.39em; padding-bottom: 0.335em;">1</span></span><span id="MJXc-Node-586" class="mjx-mo"><span class="mjx-char MJXc-TeX-main-R" style="margin-top: -0.163em; padding-bottom: 0.556em;">,</span></span><span id="MJXc-Node-587" class="mjx-mn MJXc-space1"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.39em; padding-bottom: 0.39em;">3</span></span><span id="MJXc-Node-588" class="mjx-mo"><span class="mjx-char MJXc-TeX-main-R" style="margin-top: -0.163em; padding-bottom: 0.556em;">,</span></span><span id="MJXc-Node-589" class="mjx-mn MJXc-space1"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.39em; padding-bottom: 0.335em;">4</span></span><span id="MJXc-Node-590" class="mjx-mo"><span class="mjx-char MJXc-TeX-main-R" style="margin-top: -0.163em; padding-bottom: 0.556em;">,</span></span><span id="MJXc-Node-591" class="mjx-mn MJXc-space1"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.39em; padding-bottom: 0.39em;">6</span></span><span id="MJXc-Node-592" class="mjx-mo"><span class="mjx-char MJXc-TeX-main-R" style="margin-top: -0.163em; padding-bottom: 0.556em;">,</span></span><span id="MJXc-Node-593" class="mjx-mn MJXc-space1"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.39em; padding-bottom: 0.39em;">7</span></span><span id="MJXc-Node-594" class="mjx-mo"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.445em; padding-bottom: 0.611em;">)</span></span></span></span></span></span><span class="MJX_Assistive_MathML" role="presentation"><math xmlns="http://www.w3.org/1998/Math/MathML">
                                <mstyle displaystyle="true" scriptlevel="0">
                                    <mrow class="MJX-TeXAtom-ORD"></mrow>
                                    <mi>f</mi>
                                    <mrow>
                                        <mo>(</mo>
                                        <msub>
                                            <mi>w</mi>
                                            <mrow class="MJX-TeXAtom-ORD">
                                                <mn>1</mn>
                                            </mrow>
                                        </msub>
                                        <mo>,</mo>
                                        <msub>
                                            <mi>w</mi>
                                            <mrow class="MJX-TeXAtom-ORD">
                                                <mn>2</mn>
                                            </mrow>
                                        </msub>
                                        <mo>,</mo>
                                        <msub>
                                            <mi>w</mi>
                                            <mrow class="MJX-TeXAtom-ORD">
                                                <mn>3</mn>
                                            </mrow>
                                        </msub>
                                        <mo>)</mo>
                                    </mrow>
                                    <mo>=</mo>
                                    <munder>
                                        <mo>∑</mo>
                                        <mrow class="MJX-TeXAtom-ORD">
                                            <mi>m</mi>
                                        </mrow>
                                    </munder>
                                    <mo stretchy="false">(</mo>
                                    <mn>0</mn>
                                    <mo>,</mo>
                                    <mn>1</mn>
                                    <mo>,</mo>
                                    <mn>3</mn>
                                    <mo>,</mo>
                                    <mn>4</mn>
                                    <mo>,</mo>
                                    <mn>6</mn>
                                    <mo>,</mo>
                                    <mn>7</mn>
                                    <mo stretchy="false">)</mo>
                                </mstyle>
                            </math></span></span>
                    <script type="math/tex" id="MathJax-Element-44">\displaystyle{} f\left(w_{1}, w_{2}, w_{3}\right)=\sum_{m}(0,1,3,4,6,7)</script>`,
        `<span class="MathJax_Preview" style="color: inherit;"></span><span id="MathJax-Element-45-Frame" class="mjx-chtml MathJax_CHTML" tabindex="0" data-mathml="<math xmlns=&quot;http://www.w3.org/1998/Math/MathML&quot;><mstyle displaystyle=&quot;true&quot; scriptlevel=&quot;0&quot;><mrow class=&quot;MJX-TeXAtom-ORD&quot;></mrow><mi>f</mi><mrow><mo>(</mo><msub><mi>w</mi><mrow class=&quot;MJX-TeXAtom-ORD&quot;><mn>1</mn></mrow></msub><mo>,</mo><msub><mi>w</mi><mrow class=&quot;MJX-TeXAtom-ORD&quot;><mn>2</mn></mrow></msub><mo>,</mo><msub><mi>w</mi><mrow class=&quot;MJX-TeXAtom-ORD&quot;><mn>3</mn></mrow></msub><mo>)</mo></mrow><mo>=</mo><munder><mo>&amp;#x2211;</mo><mrow class=&quot;MJX-TeXAtom-ORD&quot;><mi>m</mi></mrow></munder><mo stretchy=&quot;false&quot;>(</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>4</mn><mo>,</mo><mn>5</mn><mo>,</mo><mn>7</mn><mo>,</mo><mn>8</mn><mo stretchy=&quot;false&quot;>)</mo></mstyle></math>" role="presentation" style="font-size: 113%; position: relative;"><span id="MJXc-Node-595" class="mjx-math" aria-hidden="true"><span id="MJXc-Node-596" class="mjx-mrow"><span id="MJXc-Node-597" class="mjx-mstyle"><span id="MJXc-Node-598" class="mjx-mrow"><span id="MJXc-Node-599" class="mjx-texatom"><span id="MJXc-Node-600" class="mjx-mrow"></span></span><span id="MJXc-Node-601" class="mjx-mi"><span class="mjx-char MJXc-TeX-math-I" style="padding-top: 0.501em; padding-bottom: 0.501em; padding-right: 0.06em;">f</span></span><span id="MJXc-Node-602" class="mjx-mrow MJXc-space1"><span id="MJXc-Node-603" class="mjx-mo"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.445em; padding-bottom: 0.611em;">(</span></span><span id="MJXc-Node-604" class="mjx-msubsup"><span class="mjx-base"><span id="MJXc-Node-605" class="mjx-mi"><span class="mjx-char MJXc-TeX-math-I" style="padding-top: 0.224em; padding-bottom: 0.279em;">w</span></span></span><span class="mjx-sub" style="font-size: 70.7%; vertical-align: -0.212em; padding-right: 0.071em;"><span id="MJXc-Node-606" class="mjx-texatom" style=""><span id="MJXc-Node-607" class="mjx-mrow"><span id="MJXc-Node-608" class="mjx-mn"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.39em; padding-bottom: 0.335em;">1</span></span></span></span></span></span><span id="MJXc-Node-609" class="mjx-mo"><span class="mjx-char MJXc-TeX-main-R" style="margin-top: -0.163em; padding-bottom: 0.556em;">,</span></span><span id="MJXc-Node-610" class="mjx-msubsup MJXc-space1"><span class="mjx-base"><span id="MJXc-Node-611" class="mjx-mi"><span class="mjx-char MJXc-TeX-math-I" style="padding-top: 0.224em; padding-bottom: 0.279em;">w</span></span></span><span class="mjx-sub" style="font-size: 70.7%; vertical-align: -0.212em; padding-right: 0.071em;"><span id="MJXc-Node-612" class="mjx-texatom" style=""><span id="MJXc-Node-613" class="mjx-mrow"><span id="MJXc-Node-614" class="mjx-mn"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.39em; padding-bottom: 0.335em;">2</span></span></span></span></span></span><span id="MJXc-Node-615" class="mjx-mo"><span class="mjx-char MJXc-TeX-main-R" style="margin-top: -0.163em; padding-bottom: 0.556em;">,</span></span><span id="MJXc-Node-616" class="mjx-msubsup MJXc-space1"><span class="mjx-base"><span id="MJXc-Node-617" class="mjx-mi"><span class="mjx-char MJXc-TeX-math-I" style="padding-top: 0.224em; padding-bottom: 0.279em;">w</span></span></span><span class="mjx-sub" style="font-size: 70.7%; vertical-align: -0.212em; padding-right: 0.071em;"><span id="MJXc-Node-618" class="mjx-texatom" style=""><span id="MJXc-Node-619" class="mjx-mrow"><span id="MJXc-Node-620" class="mjx-mn"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.39em; padding-bottom: 0.39em;">3</span></span></span></span></span></span><span id="MJXc-Node-621" class="mjx-mo"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.445em; padding-bottom: 0.611em;">)</span></span></span><span id="MJXc-Node-622" class="mjx-mo MJXc-space3"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.058em; padding-bottom: 0.335em;">=</span></span><span id="MJXc-Node-623" class="mjx-munderover MJXc-space3"><span class="mjx-itable"><span class="mjx-row"><span class="mjx-cell"><span class="mjx-op"><span id="MJXc-Node-624" class="mjx-mo"><span class="mjx-char MJXc-TeX-size2-R" style="padding-top: 0.722em; padding-bottom: 0.722em;">∑</span></span></span></span></span><span class="mjx-row"><span class="mjx-under" style="font-size: 70.7%; padding-top: 0.236em; padding-bottom: 0.141em; padding-left: 0.582em;"><span id="MJXc-Node-625" class="mjx-texatom" style=""><span id="MJXc-Node-626" class="mjx-mrow"><span id="MJXc-Node-627" class="mjx-mi"><span class="mjx-char MJXc-TeX-math-I" style="padding-top: 0.224em; padding-bottom: 0.279em;">m</span></span></span></span></span></span></span></span><span id="MJXc-Node-628" class="mjx-mo"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.445em; padding-bottom: 0.611em;">(</span></span><span id="MJXc-Node-629" class="mjx-mn"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.39em; padding-bottom: 0.335em;">1</span></span><span id="MJXc-Node-630" class="mjx-mo"><span class="mjx-char MJXc-TeX-main-R" style="margin-top: -0.163em; padding-bottom: 0.556em;">,</span></span><span id="MJXc-Node-631" class="mjx-mn MJXc-space1"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.39em; padding-bottom: 0.335em;">2</span></span><span id="MJXc-Node-632" class="mjx-mo"><span class="mjx-char MJXc-TeX-main-R" style="margin-top: -0.163em; padding-bottom: 0.556em;">,</span></span><span id="MJXc-Node-633" class="mjx-mn MJXc-space1"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.39em; padding-bottom: 0.335em;">4</span></span><span id="MJXc-Node-634" class="mjx-mo"><span class="mjx-char MJXc-TeX-main-R" style="margin-top: -0.163em; padding-bottom: 0.556em;">,</span></span><span id="MJXc-Node-635" class="mjx-mn MJXc-space1"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.39em; padding-bottom: 0.39em;">5</span></span><span id="MJXc-Node-636" class="mjx-mo"><span class="mjx-char MJXc-TeX-main-R" style="margin-top: -0.163em; padding-bottom: 0.556em;">,</span></span><span id="MJXc-Node-637" class="mjx-mn MJXc-space1"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.39em; padding-bottom: 0.39em;">7</span></span><span id="MJXc-Node-638" class="mjx-mo"><span class="mjx-char MJXc-TeX-main-R" style="margin-top: -0.163em; padding-bottom: 0.556em;">,</span></span><span id="MJXc-Node-639" class="mjx-mn MJXc-space1"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.39em; padding-bottom: 0.39em;">8</span></span><span id="MJXc-Node-640" class="mjx-mo"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.445em; padding-bottom: 0.611em;">)</span></span></span></span></span></span><span class="MJX_Assistive_MathML" role="presentation"><math xmlns="http://www.w3.org/1998/Math/MathML">
                                <mstyle displaystyle="true" scriptlevel="0">
                                    <mrow class="MJX-TeXAtom-ORD"></mrow>
                                    <mi>f</mi>
                                    <mrow>
                                        <mo>(</mo>
                                        <msub>
                                            <mi>w</mi>
                                            <mrow class="MJX-TeXAtom-ORD">
                                                <mn>1</mn>
                                            </mrow>
                                        </msub>
                                        <mo>,</mo>
                                        <msub>
                                            <mi>w</mi>
                                            <mrow class="MJX-TeXAtom-ORD">
                                                <mn>2</mn>
                                            </mrow>
                                        </msub>
                                        <mo>,</mo>
                                        <msub>
                                            <mi>w</mi>
                                            <mrow class="MJX-TeXAtom-ORD">
                                                <mn>3</mn>
                                            </mrow>
                                        </msub>
                                        <mo>)</mo>
                                    </mrow>
                                    <mo>=</mo>
                                    <munder>
                                        <mo>∑</mo>
                                        <mrow class="MJX-TeXAtom-ORD">
                                            <mi>m</mi>
                                        </mrow>
                                    </munder>
                                    <mo stretchy="false">(</mo>
                                    <mn>1</mn>
                                    <mo>,</mo>
                                    <mn>2</mn>
                                    <mo>,</mo>
                                    <mn>4</mn>
                                    <mo>,</mo>
                                    <mn>5</mn>
                                    <mo>,</mo>
                                    <mn>7</mn>
                                    <mo>,</mo>
                                    <mn>8</mn>
                                    <mo stretchy="false">)</mo>
                                </mstyle>
                            </math></span></span>
                    <script type="math/tex" id="MathJax-Element-45">\displaystyle{} f\left(w_{1}, w_{2}, w_{3}\right)=\sum_{m}(1,2,4,5,7,8)</script>`,
        `<span class="MathJax_Preview" style="color: inherit;"></span><span id="MathJax-Element-46-Frame" class="mjx-chtml MathJax_CHTML" tabindex="0" data-mathml="<math xmlns=&quot;http://www.w3.org/1998/Math/MathML&quot;><mstyle displaystyle=&quot;true&quot; scriptlevel=&quot;0&quot;><mrow class=&quot;MJX-TeXAtom-ORD&quot;></mrow><mi>f</mi><mrow><mo>(</mo><msub><mi>w</mi><mrow class=&quot;MJX-TeXAtom-ORD&quot;><mn>1</mn></mrow></msub><mo>,</mo><msub><mi>w</mi><mrow class=&quot;MJX-TeXAtom-ORD&quot;><mn>2</mn></mrow></msub><mo>,</mo><msub><mi>w</mi><mrow class=&quot;MJX-TeXAtom-ORD&quot;><mn>3</mn></mrow></msub><mo>)</mo></mrow><mo>=</mo><munder><mo>&amp;#x220F;</mo><mrow class=&quot;MJX-TeXAtom-ORD&quot;><mi>M</mi></mrow></munder><mo stretchy=&quot;false&quot;>(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>3</mn><mo>,</mo><mn>4</mn><mo>,</mo><mn>6</mn><mo>,</mo><mn>7</mn><mo stretchy=&quot;false&quot;>)</mo></mstyle></math>" role="presentation" style="font-size: 113%; position: relative;"><span id="MJXc-Node-641" class="mjx-math" aria-hidden="true"><span id="MJXc-Node-642" class="mjx-mrow"><span id="MJXc-Node-643" class="mjx-mstyle"><span id="MJXc-Node-644" class="mjx-mrow"><span id="MJXc-Node-645" class="mjx-texatom"><span id="MJXc-Node-646" class="mjx-mrow"></span></span><span id="MJXc-Node-647" class="mjx-mi"><span class="mjx-char MJXc-TeX-math-I" style="padding-top: 0.501em; padding-bottom: 0.501em; padding-right: 0.06em;">f</span></span><span id="MJXc-Node-648" class="mjx-mrow MJXc-space1"><span id="MJXc-Node-649" class="mjx-mo"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.445em; padding-bottom: 0.611em;">(</span></span><span id="MJXc-Node-650" class="mjx-msubsup"><span class="mjx-base"><span id="MJXc-Node-651" class="mjx-mi"><span class="mjx-char MJXc-TeX-math-I" style="padding-top: 0.224em; padding-bottom: 0.279em;">w</span></span></span><span class="mjx-sub" style="font-size: 70.7%; vertical-align: -0.212em; padding-right: 0.071em;"><span id="MJXc-Node-652" class="mjx-texatom" style=""><span id="MJXc-Node-653" class="mjx-mrow"><span id="MJXc-Node-654" class="mjx-mn"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.39em; padding-bottom: 0.335em;">1</span></span></span></span></span></span><span id="MJXc-Node-655" class="mjx-mo"><span class="mjx-char MJXc-TeX-main-R" style="margin-top: -0.163em; padding-bottom: 0.556em;">,</span></span><span id="MJXc-Node-656" class="mjx-msubsup MJXc-space1"><span class="mjx-base"><span id="MJXc-Node-657" class="mjx-mi"><span class="mjx-char MJXc-TeX-math-I" style="padding-top: 0.224em; padding-bottom: 0.279em;">w</span></span></span><span class="mjx-sub" style="font-size: 70.7%; vertical-align: -0.212em; padding-right: 0.071em;"><span id="MJXc-Node-658" class="mjx-texatom" style=""><span id="MJXc-Node-659" class="mjx-mrow"><span id="MJXc-Node-660" class="mjx-mn"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.39em; padding-bottom: 0.335em;">2</span></span></span></span></span></span><span id="MJXc-Node-661" class="mjx-mo"><span class="mjx-char MJXc-TeX-main-R" style="margin-top: -0.163em; padding-bottom: 0.556em;">,</span></span><span id="MJXc-Node-662" class="mjx-msubsup MJXc-space1"><span class="mjx-base"><span id="MJXc-Node-663" class="mjx-mi"><span class="mjx-char MJXc-TeX-math-I" style="padding-top: 0.224em; padding-bottom: 0.279em;">w</span></span></span><span class="mjx-sub" style="font-size: 70.7%; vertical-align: -0.212em; padding-right: 0.071em;"><span id="MJXc-Node-664" class="mjx-texatom" style=""><span id="MJXc-Node-665" class="mjx-mrow"><span id="MJXc-Node-666" class="mjx-mn"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.39em; padding-bottom: 0.39em;">3</span></span></span></span></span></span><span id="MJXc-Node-667" class="mjx-mo"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.445em; padding-bottom: 0.611em;">)</span></span></span><span id="MJXc-Node-668" class="mjx-mo MJXc-space3"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.058em; padding-bottom: 0.335em;">=</span></span><span id="MJXc-Node-669" class="mjx-munderover MJXc-space3"><span class="mjx-itable"><span class="mjx-row"><span class="mjx-cell"><span class="mjx-op"><span id="MJXc-Node-670" class="mjx-mo"><span class="mjx-char MJXc-TeX-size2-R" style="padding-top: 0.722em; padding-bottom: 0.722em;">∏</span></span></span></span></span><span class="mjx-row"><span class="mjx-under" style="font-size: 70.7%; padding-top: 0.236em; padding-bottom: 0.141em; padding-left: 0.378em;"><span id="MJXc-Node-671" class="mjx-texatom" style=""><span id="MJXc-Node-672" class="mjx-mrow"><span id="MJXc-Node-673" class="mjx-mi"><span class="mjx-char MJXc-TeX-math-I" style="padding-top: 0.445em; padding-bottom: 0.279em; padding-right: 0.081em;">M</span></span></span></span></span></span></span></span><span id="MJXc-Node-674" class="mjx-mo"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.445em; padding-bottom: 0.611em;">(</span></span><span id="MJXc-Node-675" class="mjx-mn"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.39em; padding-bottom: 0.39em;">0</span></span><span id="MJXc-Node-676" class="mjx-mo"><span class="mjx-char MJXc-TeX-main-R" style="margin-top: -0.163em; padding-bottom: 0.556em;">,</span></span><span id="MJXc-Node-677" class="mjx-mn MJXc-space1"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.39em; padding-bottom: 0.335em;">1</span></span><span id="MJXc-Node-678" class="mjx-mo"><span class="mjx-char MJXc-TeX-main-R" style="margin-top: -0.163em; padding-bottom: 0.556em;">,</span></span><span id="MJXc-Node-679" class="mjx-mn MJXc-space1"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.39em; padding-bottom: 0.39em;">3</span></span><span id="MJXc-Node-680" class="mjx-mo"><span class="mjx-char MJXc-TeX-main-R" style="margin-top: -0.163em; padding-bottom: 0.556em;">,</span></span><span id="MJXc-Node-681" class="mjx-mn MJXc-space1"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.39em; padding-bottom: 0.335em;">4</span></span><span id="MJXc-Node-682" class="mjx-mo"><span class="mjx-char MJXc-TeX-main-R" style="margin-top: -0.163em; padding-bottom: 0.556em;">,</span></span><span id="MJXc-Node-683" class="mjx-mn MJXc-space1"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.39em; padding-bottom: 0.39em;">6</span></span><span id="MJXc-Node-684" class="mjx-mo"><span class="mjx-char MJXc-TeX-main-R" style="margin-top: -0.163em; padding-bottom: 0.556em;">,</span></span><span id="MJXc-Node-685" class="mjx-mn MJXc-space1"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.39em; padding-bottom: 0.39em;">7</span></span><span id="MJXc-Node-686" class="mjx-mo"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.445em; padding-bottom: 0.611em;">)</span></span></span></span></span></span><span class="MJX_Assistive_MathML" role="presentation"><math xmlns="http://www.w3.org/1998/Math/MathML">
                                <mstyle displaystyle="true" scriptlevel="0">
                                    <mrow class="MJX-TeXAtom-ORD"></mrow>
                                    <mi>f</mi>
                                    <mrow>
                                        <mo>(</mo>
                                        <msub>
                                            <mi>w</mi>
                                            <mrow class="MJX-TeXAtom-ORD">
                                                <mn>1</mn>
                                            </mrow>
                                        </msub>
                                        <mo>,</mo>
                                        <msub>
                                            <mi>w</mi>
                                            <mrow class="MJX-TeXAtom-ORD">
                                                <mn>2</mn>
                                            </mrow>
                                        </msub>
                                        <mo>,</mo>
                                        <msub>
                                            <mi>w</mi>
                                            <mrow class="MJX-TeXAtom-ORD">
                                                <mn>3</mn>
                                            </mrow>
                                        </msub>
                                        <mo>)</mo>
                                    </mrow>
                                    <mo>=</mo>
                                    <munder>
                                        <mo>∏</mo>
                                        <mrow class="MJX-TeXAtom-ORD">
                                            <mi>M</mi>
                                        </mrow>
                                    </munder>
                                    <mo stretchy="false">(</mo>
                                    <mn>0</mn>
                                    <mo>,</mo>
                                    <mn>1</mn>
                                    <mo>,</mo>
                                    <mn>3</mn>
                                    <mo>,</mo>
                                    <mn>4</mn>
                                    <mo>,</mo>
                                    <mn>6</mn>
                                    <mo>,</mo>
                                    <mn>7</mn>
                                    <mo stretchy="false">)</mo>
                                </mstyle>
                            </math></span></span>
                    <script type="math/tex" id="MathJax-Element-46">\displaystyle{} f\left(w_{1}, w_{2}, w_{3}\right)=\prod_{M}(0,1,3,4,6,7)</script>`,
        `<span class="MathJax_Preview" style="color: inherit;"></span><span id="MathJax-Element-47-Frame" class="mjx-chtml MathJax_CHTML" tabindex="0" data-mathml="<math xmlns=&quot;http://www.w3.org/1998/Math/MathML&quot;><mstyle displaystyle=&quot;true&quot; scriptlevel=&quot;0&quot;><mrow class=&quot;MJX-TeXAtom-ORD&quot;></mrow><mi>f</mi><mrow><mo>(</mo><msub><mi>w</mi><mrow class=&quot;MJX-TeXAtom-ORD&quot;><mn>1</mn></mrow></msub><mo>,</mo><msub><mi>w</mi><mrow class=&quot;MJX-TeXAtom-ORD&quot;><mn>2</mn></mrow></msub><mo>,</mo><msub><mi>w</mi><mrow class=&quot;MJX-TeXAtom-ORD&quot;><mn>3</mn></mrow></msub><mo>)</mo></mrow><mo>=</mo><munder><mo>&amp;#x2211;</mo><mrow class=&quot;MJX-TeXAtom-ORD&quot;><mi>m</mi></mrow></munder><mo stretchy=&quot;false&quot;>(</mo><mn>2</mn><mo>,</mo><mn>5</mn><mo stretchy=&quot;false&quot;>)</mo></mstyle></math>" role="presentation" style="font-size: 113%; position: relative;"><span id="MJXc-Node-687" class="mjx-math" aria-hidden="true"><span id="MJXc-Node-688" class="mjx-mrow"><span id="MJXc-Node-689" class="mjx-mstyle"><span id="MJXc-Node-690" class="mjx-mrow"><span id="MJXc-Node-691" class="mjx-texatom"><span id="MJXc-Node-692" class="mjx-mrow"></span></span><span id="MJXc-Node-693" class="mjx-mi"><span class="mjx-char MJXc-TeX-math-I" style="padding-top: 0.501em; padding-bottom: 0.501em; padding-right: 0.06em;">f</span></span><span id="MJXc-Node-694" class="mjx-mrow MJXc-space1"><span id="MJXc-Node-695" class="mjx-mo"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.445em; padding-bottom: 0.611em;">(</span></span><span id="MJXc-Node-696" class="mjx-msubsup"><span class="mjx-base"><span id="MJXc-Node-697" class="mjx-mi"><span class="mjx-char MJXc-TeX-math-I" style="padding-top: 0.224em; padding-bottom: 0.279em;">w</span></span></span><span class="mjx-sub" style="font-size: 70.7%; vertical-align: -0.212em; padding-right: 0.071em;"><span id="MJXc-Node-698" class="mjx-texatom" style=""><span id="MJXc-Node-699" class="mjx-mrow"><span id="MJXc-Node-700" class="mjx-mn"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.39em; padding-bottom: 0.335em;">1</span></span></span></span></span></span><span id="MJXc-Node-701" class="mjx-mo"><span class="mjx-char MJXc-TeX-main-R" style="margin-top: -0.163em; padding-bottom: 0.556em;">,</span></span><span id="MJXc-Node-702" class="mjx-msubsup MJXc-space1"><span class="mjx-base"><span id="MJXc-Node-703" class="mjx-mi"><span class="mjx-char MJXc-TeX-math-I" style="padding-top: 0.224em; padding-bottom: 0.279em;">w</span></span></span><span class="mjx-sub" style="font-size: 70.7%; vertical-align: -0.212em; padding-right: 0.071em;"><span id="MJXc-Node-704" class="mjx-texatom" style=""><span id="MJXc-Node-705" class="mjx-mrow"><span id="MJXc-Node-706" class="mjx-mn"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.39em; padding-bottom: 0.335em;">2</span></span></span></span></span></span><span id="MJXc-Node-707" class="mjx-mo"><span class="mjx-char MJXc-TeX-main-R" style="margin-top: -0.163em; padding-bottom: 0.556em;">,</span></span><span id="MJXc-Node-708" class="mjx-msubsup MJXc-space1"><span class="mjx-base"><span id="MJXc-Node-709" class="mjx-mi"><span class="mjx-char MJXc-TeX-math-I" style="padding-top: 0.224em; padding-bottom: 0.279em;">w</span></span></span><span class="mjx-sub" style="font-size: 70.7%; vertical-align: -0.212em; padding-right: 0.071em;"><span id="MJXc-Node-710" class="mjx-texatom" style=""><span id="MJXc-Node-711" class="mjx-mrow"><span id="MJXc-Node-712" class="mjx-mn"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.39em; padding-bottom: 0.39em;">3</span></span></span></span></span></span><span id="MJXc-Node-713" class="mjx-mo"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.445em; padding-bottom: 0.611em;">)</span></span></span><span id="MJXc-Node-714" class="mjx-mo MJXc-space3"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.058em; padding-bottom: 0.335em;">=</span></span><span id="MJXc-Node-715" class="mjx-munderover MJXc-space3"><span class="mjx-itable"><span class="mjx-row"><span class="mjx-cell"><span class="mjx-op"><span id="MJXc-Node-716" class="mjx-mo"><span class="mjx-char MJXc-TeX-size2-R" style="padding-top: 0.722em; padding-bottom: 0.722em;">∑</span></span></span></span></span><span class="mjx-row"><span class="mjx-under" style="font-size: 70.7%; padding-top: 0.236em; padding-bottom: 0.141em; padding-left: 0.582em;"><span id="MJXc-Node-717" class="mjx-texatom" style=""><span id="MJXc-Node-718" class="mjx-mrow"><span id="MJXc-Node-719" class="mjx-mi"><span class="mjx-char MJXc-TeX-math-I" style="padding-top: 0.224em; padding-bottom: 0.279em;">m</span></span></span></span></span></span></span></span><span id="MJXc-Node-720" class="mjx-mo"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.445em; padding-bottom: 0.611em;">(</span></span><span id="MJXc-Node-721" class="mjx-mn"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.39em; padding-bottom: 0.335em;">2</span></span><span id="MJXc-Node-722" class="mjx-mo"><span class="mjx-char MJXc-TeX-main-R" style="margin-top: -0.163em; padding-bottom: 0.556em;">,</span></span><span id="MJXc-Node-723" class="mjx-mn MJXc-space1"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.39em; padding-bottom: 0.39em;">5</span></span><span id="MJXc-Node-724" class="mjx-mo"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.445em; padding-bottom: 0.611em;">)</span></span></span></span></span></span><span class="MJX_Assistive_MathML" role="presentation"><math xmlns="http://www.w3.org/1998/Math/MathML">
                                <mstyle displaystyle="true" scriptlevel="0">
                                    <mrow class="MJX-TeXAtom-ORD"></mrow>
                                    <mi>f</mi>
                                    <mrow>
                                        <mo>(</mo>
                                        <msub>
                                            <mi>w</mi>
                                            <mrow class="MJX-TeXAtom-ORD">
                                                <mn>1</mn>
                                            </mrow>
                                        </msub>
                                        <mo>,</mo>
                                        <msub>
                                            <mi>w</mi>
                                            <mrow class="MJX-TeXAtom-ORD">
                                                <mn>2</mn>
                                            </mrow>
                                        </msub>
                                        <mo>,</mo>
                                        <msub>
                                            <mi>w</mi>
                                            <mrow class="MJX-TeXAtom-ORD">
                                                <mn>3</mn>
                                            </mrow>
                                        </msub>
                                        <mo>)</mo>
                                    </mrow>
                                    <mo>=</mo>
                                    <munder>
                                        <mo>∑</mo>
                                        <mrow class="MJX-TeXAtom-ORD">
                                            <mi>m</mi>
                                        </mrow>
                                    </munder>
                                    <mo stretchy="false">(</mo>
                                    <mn>2</mn>
                                    <mo>,</mo>
                                    <mn>5</mn>
                                    <mo stretchy="false">)</mo>
                                </mstyle>
                            </math></span></span>
                    <script type="math/tex" id="MathJax-Element-47">\displaystyle{} f\left(w_{1}, w_{2}, w_{3}\right)=\sum_{m}(2,5)</script>`,
      ],
      answer: "A",
      solution: ``
    },
    {
      marks: 2,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>Consider the following function:<br><span class="MathJax_Preview" style="color: inherit;"></span><span class="mjx-chtml MJXc-display" style="text-align: center;"><span id="MathJax-Element-48-Frame" class="mjx-chtml MathJax_CHTML" tabindex="0" data-mathml="<math xmlns=&quot;http://www.w3.org/1998/Math/MathML&quot; display=&quot;block&quot;><mi>f</mi><mo stretchy=&quot;false&quot;>(</mo><mi>a</mi><mo>,</mo><mi>b</mi><mo>,</mo><mi>c</mi><mo>,</mo><mi>d</mi><mo stretchy=&quot;false&quot;>)</mo><mo>=</mo><mo>&amp;#x2211;</mo><mi>m</mi><mo stretchy=&quot;false&quot;>(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>6</mn><mo>,</mo><mn>9</mn><mo>,</mo><mn>11</mn><mo>,</mo><mn>15</mn><mo stretchy=&quot;false&quot;>)</mo><mo>+</mo><mo>&amp;#x2211;</mo><mi>d</mi><mo stretchy=&quot;false&quot;>(</mo><mn>2</mn><mo>,</mo><mn>5</mn><mo>,</mo><mn>8</mn><mo>,</mo><mn>10</mn><mo>,</mo><mn>14</mn><mo stretchy=&quot;false&quot;>)</mo><mo>.</mo></math>" role="presentation" style="font-size: 113%; text-align: center; position: relative;"><span id="MJXc-Node-725" class="mjx-math" aria-hidden="true"><span id="MJXc-Node-726" class="mjx-mrow"><span id="MJXc-Node-727" class="mjx-mi"><span class="mjx-char MJXc-TeX-math-I" style="padding-top: 0.501em; padding-bottom: 0.501em; padding-right: 0.06em;">f</span></span><span id="MJXc-Node-728" class="mjx-mo"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.445em; padding-bottom: 0.611em;">(</span></span><span id="MJXc-Node-729" class="mjx-mi"><span class="mjx-char MJXc-TeX-math-I" style="padding-top: 0.224em; padding-bottom: 0.279em;">a</span></span><span id="MJXc-Node-730" class="mjx-mo"><span class="mjx-char MJXc-TeX-main-R" style="margin-top: -0.163em; padding-bottom: 0.556em;">,</span></span><span id="MJXc-Node-731" class="mjx-mi MJXc-space1"><span class="mjx-char MJXc-TeX-math-I" style="padding-top: 0.445em; padding-bottom: 0.279em;">b</span></span><span id="MJXc-Node-732" class="mjx-mo"><span class="mjx-char MJXc-TeX-main-R" style="margin-top: -0.163em; padding-bottom: 0.556em;">,</span></span><span id="MJXc-Node-733" class="mjx-mi MJXc-space1"><span class="mjx-char MJXc-TeX-math-I" style="padding-top: 0.224em; padding-bottom: 0.279em;">c</span></span><span id="MJXc-Node-734" class="mjx-mo"><span class="mjx-char MJXc-TeX-main-R" style="margin-top: -0.163em; padding-bottom: 0.556em;">,</span></span><span id="MJXc-Node-735" class="mjx-mi MJXc-space1"><span class="mjx-char MJXc-TeX-math-I" style="padding-top: 0.445em; padding-bottom: 0.279em; padding-right: 0.003em;">d</span></span><span id="MJXc-Node-736" class="mjx-mo"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.445em; padding-bottom: 0.611em;">)</span></span><span id="MJXc-Node-737" class="mjx-mo MJXc-space3"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.058em; padding-bottom: 0.335em;">=</span></span><span id="MJXc-Node-738" class="mjx-mo MJXc-space3"><span class="mjx-char MJXc-TeX-size2-R" style="padding-top: 0.722em; padding-bottom: 0.722em;">∑</span></span><span id="MJXc-Node-739" class="mjx-mi MJXc-space1"><span class="mjx-char MJXc-TeX-math-I" style="padding-top: 0.224em; padding-bottom: 0.279em;">m</span></span><span id="MJXc-Node-740" class="mjx-mo"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.445em; padding-bottom: 0.611em;">(</span></span><span id="MJXc-Node-741" class="mjx-mn"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.39em; padding-bottom: 0.39em;">0</span></span><span id="MJXc-Node-742" class="mjx-mo"><span class="mjx-char MJXc-TeX-main-R" style="margin-top: -0.163em; padding-bottom: 0.556em;">,</span></span><span id="MJXc-Node-743" class="mjx-mn MJXc-space1"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.39em; padding-bottom: 0.335em;">1</span></span><span id="MJXc-Node-744" class="mjx-mo"><span class="mjx-char MJXc-TeX-main-R" style="margin-top: -0.163em; padding-bottom: 0.556em;">,</span></span><span id="MJXc-Node-745" class="mjx-mn MJXc-space1"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.39em; padding-bottom: 0.39em;">6</span></span><span id="MJXc-Node-746" class="mjx-mo"><span class="mjx-char MJXc-TeX-main-R" style="margin-top: -0.163em; padding-bottom: 0.556em;">,</span></span><span id="MJXc-Node-747" class="mjx-mn MJXc-space1"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.39em; padding-bottom: 0.39em;">9</span></span><span id="MJXc-Node-748" class="mjx-mo"><span class="mjx-char MJXc-TeX-main-R" style="margin-top: -0.163em; padding-bottom: 0.556em;">,</span></span><span id="MJXc-Node-749" class="mjx-mn MJXc-space1"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.39em; padding-bottom: 0.335em;">11</span></span><span id="MJXc-Node-750" class="mjx-mo"><span class="mjx-char MJXc-TeX-main-R" style="margin-top: -0.163em; padding-bottom: 0.556em;">,</span></span><span id="MJXc-Node-751" class="mjx-mn MJXc-space1"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.39em; padding-bottom: 0.39em;">15</span></span><span id="MJXc-Node-752" class="mjx-mo"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.445em; padding-bottom: 0.611em;">)</span></span><span id="MJXc-Node-753" class="mjx-mo MJXc-space2"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.279em; padding-bottom: 0.445em;">+</span></span><span id="MJXc-Node-754" class="mjx-mo MJXc-space2"><span class="mjx-char MJXc-TeX-size2-R" style="padding-top: 0.722em; padding-bottom: 0.722em;">∑</span></span><span id="MJXc-Node-755" class="mjx-mi MJXc-space1"><span class="mjx-char MJXc-TeX-math-I" style="padding-top: 0.445em; padding-bottom: 0.279em; padding-right: 0.003em;">d</span></span><span id="MJXc-Node-756" class="mjx-mo"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.445em; padding-bottom: 0.611em;">(</span></span><span id="MJXc-Node-757" class="mjx-mn"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.39em; padding-bottom: 0.335em;">2</span></span><span id="MJXc-Node-758" class="mjx-mo"><span class="mjx-char MJXc-TeX-main-R" style="margin-top: -0.163em; padding-bottom: 0.556em;">,</span></span><span id="MJXc-Node-759" class="mjx-mn MJXc-space1"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.39em; padding-bottom: 0.39em;">5</span></span><span id="MJXc-Node-760" class="mjx-mo"><span class="mjx-char MJXc-TeX-main-R" style="margin-top: -0.163em; padding-bottom: 0.556em;">,</span></span><span id="MJXc-Node-761" class="mjx-mn MJXc-space1"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.39em; padding-bottom: 0.39em;">8</span></span><span id="MJXc-Node-762" class="mjx-mo"><span class="mjx-char MJXc-TeX-main-R" style="margin-top: -0.163em; padding-bottom: 0.556em;">,</span></span><span id="MJXc-Node-763" class="mjx-mn MJXc-space1"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.39em; padding-bottom: 0.39em;">10</span></span><span id="MJXc-Node-764" class="mjx-mo"><span class="mjx-char MJXc-TeX-main-R" style="margin-top: -0.163em; padding-bottom: 0.556em;">,</span></span><span id="MJXc-Node-765" class="mjx-mn MJXc-space1"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.39em; padding-bottom: 0.335em;">14</span></span><span id="MJXc-Node-766" class="mjx-mo"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.445em; padding-bottom: 0.611em;">)</span></span><span id="MJXc-Node-767" class="mjx-mo"><span class="mjx-char MJXc-TeX-main-R" style="margin-top: -0.163em; padding-bottom: 0.335em;">.</span></span></span></span><span class="MJX_Assistive_MathML MJX_Assistive_MathML_Block" role="presentation"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
                                <mi>f</mi>
                                <mo stretchy="false">(</mo>
                                <mi>a</mi>
                                <mo>,</mo>
                                <mi>b</mi>
                                <mo>,</mo>
                                <mi>c</mi>
                                <mo>,</mo>
                                <mi>d</mi>
                                <mo stretchy="false">)</mo>
                                <mo>=</mo>
                                <mo>∑</mo>
                                <mi>m</mi>
                                <mo stretchy="false">(</mo>
                                <mn>0</mn>
                                <mo>,</mo>
                                <mn>1</mn>
                                <mo>,</mo>
                                <mn>6</mn>
                                <mo>,</mo>
                                <mn>9</mn>
                                <mo>,</mo>
                                <mn>11</mn>
                                <mo>,</mo>
                                <mn>15</mn>
                                <mo stretchy="false">)</mo>
                                <mo>+</mo>
                                <mo>∑</mo>
                                <mi>d</mi>
                                <mo stretchy="false">(</mo>
                                <mn>2</mn>
                                <mo>,</mo>
                                <mn>5</mn>
                                <mo>,</mo>
                                <mn>8</mn>
                                <mo>,</mo>
                                <mn>10</mn>
                                <mo>,</mo>
                                <mn>14</mn>
                                <mo stretchy="false">)</mo>
                                <mo>.</mo>
                            </math></span></span></span>
                <script type="math/tex; mode=display" id="MathJax-Element-48"> f(a, b, c, d)=\sum m(0,1,6, 9, 11,15)+\sum d(2,5,8,10,14). </script>
                <br>Which of the following is/are Not a Essential Prime Implicant of <span class="MathJax_Preview" style="color: inherit;"></span><span id="MathJax-Element-49-Frame" class="mjx-chtml MathJax_CHTML" tabindex="0" data-mathml="<math xmlns=&quot;http://www.w3.org/1998/Math/MathML&quot;><mi>f</mi><mo>?</mo></math>" role="presentation" style="font-size: 113%; position: relative;"><span id="MJXc-Node-768" class="mjx-math" aria-hidden="true"><span id="MJXc-Node-769" class="mjx-mrow"><span id="MJXc-Node-770" class="mjx-mi"><span class="mjx-char MJXc-TeX-math-I" style="padding-top: 0.501em; padding-bottom: 0.501em; padding-right: 0.06em;">f</span></span><span id="MJXc-Node-771" class="mjx-mo"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.445em; padding-bottom: 0.335em;">?</span></span></span></span><span class="MJX_Assistive_MathML" role="presentation"><math xmlns="http://www.w3.org/1998/Math/MathML">
                            <mi>f</mi>
                            <mo>?</mo>
                        </math></span></span>
                <script type="math/tex" id="MathJax-Element-49">f?</script>
            </p> <p></p>`,
      image: "",
      options: [
        `<span class="MathJax_Preview" style="color: inherit;"></span><span id="MathJax-Element-50-Frame" class="mjx-chtml MathJax_CHTML" tabindex="0" data-mathml="<math xmlns=&quot;http://www.w3.org/1998/Math/MathML&quot;><mi>a</mi><mi>c</mi></math>" role="presentation" style="font-size: 113%; position: relative;"><span id="MJXc-Node-772" class="mjx-math" aria-hidden="true"><span id="MJXc-Node-773" class="mjx-mrow"><span id="MJXc-Node-774" class="mjx-mi"><span class="mjx-char MJXc-TeX-math-I" style="padding-top: 0.224em; padding-bottom: 0.279em;">a</span></span><span id="MJXc-Node-775" class="mjx-mi"><span class="mjx-char MJXc-TeX-math-I" style="padding-top: 0.224em; padding-bottom: 0.279em;">c</span></span></span></span><span class="MJX_Assistive_MathML" role="presentation"><math xmlns="http://www.w3.org/1998/Math/MathML">
                                <mi>a</mi>
                                <mi>c</mi>
                            </math></span></span>
                    <script type="math/tex" id="MathJax-Element-50">ac</script>`,
        `<span class="MathJax_Preview" style="color: inherit;"></span><span id="MathJax-Element-51-Frame" class="mjx-chtml MathJax_CHTML" tabindex="0" data-mathml="<math xmlns=&quot;http://www.w3.org/1998/Math/MathML&quot;><mi>a</mi><msup><mi>b</mi><mo>&amp;#x2032;</mo></msup></math>" role="presentation" style="font-size: 113%; position: relative;"><span id="MJXc-Node-776" class="mjx-math" aria-hidden="true"><span id="MJXc-Node-777" class="mjx-mrow"><span id="MJXc-Node-778" class="mjx-mi"><span class="mjx-char MJXc-TeX-math-I" style="padding-top: 0.224em; padding-bottom: 0.279em;">a</span></span><span id="MJXc-Node-779" class="mjx-msup"><span class="mjx-base"><span id="MJXc-Node-780" class="mjx-mi"><span class="mjx-char MJXc-TeX-math-I" style="padding-top: 0.445em; padding-bottom: 0.279em;">b</span></span></span><span class="mjx-sup" style="font-size: 70.7%; vertical-align: 0.513em; padding-left: 0px; padding-right: 0.071em;"><span id="MJXc-Node-781" class="mjx-mo" style=""><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.279em; padding-bottom: 0.335em;">′</span></span></span></span></span></span><span class="MJX_Assistive_MathML" role="presentation"><math xmlns="http://www.w3.org/1998/Math/MathML">
                                <mi>a</mi>
                                <msup>
                                    <mi>b</mi>
                                    <mo>′</mo>
                                </msup>
                            </math></span></span>
                    <script type="math/tex" id="MathJax-Element-51">ab'</script>`,
        `<span class="MathJax_Preview" style="color: inherit;"></span><span id="MathJax-Element-52-Frame" class="mjx-chtml MathJax_CHTML" tabindex="0" data-mathml="<math xmlns=&quot;http://www.w3.org/1998/Math/MathML&quot;><msup><mi>b</mi><mo>&amp;#x2032;</mo></msup><msup><mi>d</mi><mo>&amp;#x2032;</mo></msup></math>" role="presentation" style="font-size: 113%; position: relative;"><span id="MJXc-Node-782" class="mjx-math" aria-hidden="true"><span id="MJXc-Node-783" class="mjx-mrow"><span id="MJXc-Node-784" class="mjx-msup"><span class="mjx-base"><span id="MJXc-Node-785" class="mjx-mi"><span class="mjx-char MJXc-TeX-math-I" style="padding-top: 0.445em; padding-bottom: 0.279em;">b</span></span></span><span class="mjx-sup" style="font-size: 70.7%; vertical-align: 0.513em; padding-left: 0px; padding-right: 0.071em;"><span id="MJXc-Node-786" class="mjx-mo" style=""><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.279em; padding-bottom: 0.335em;">′</span></span></span></span><span id="MJXc-Node-787" class="mjx-msup"><span class="mjx-base" style="margin-right: -0.003em;"><span id="MJXc-Node-788" class="mjx-mi"><span class="mjx-char MJXc-TeX-math-I" style="padding-top: 0.445em; padding-bottom: 0.279em; padding-right: 0.003em;">d</span></span></span><span class="mjx-sup" style="font-size: 70.7%; vertical-align: 0.513em; padding-left: 0.076em; padding-right: 0.071em;"><span id="MJXc-Node-789" class="mjx-mo" style=""><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.279em; padding-bottom: 0.335em;">′</span></span></span></span></span></span><span class="MJX_Assistive_MathML" role="presentation"><math xmlns="http://www.w3.org/1998/Math/MathML">
                                <msup>
                                    <mi>b</mi>
                                    <mo>′</mo>
                                </msup>
                                <msup>
                                    <mi>d</mi>
                                    <mo>′</mo>
                                </msup>
                            </math></span></span>
                    <script type="math/tex" id="MathJax-Element-52">b'd'</script>`,
        `<span class="MathJax_Preview" style="color: inherit;"></span><span id="MathJax-Element-53-Frame" class="mjx-chtml MathJax_CHTML" tabindex="0" data-mathml="<math xmlns=&quot;http://www.w3.org/1998/Math/MathML&quot;><msup><mi>a</mi><mo>&amp;#x2032;</mo></msup><msup><mi>c</mi><mo>&amp;#x2032;</mo></msup><mi>d</mi></math>" role="presentation" style="font-size: 113%; position: relative;"><span id="MJXc-Node-790" class="mjx-math" aria-hidden="true"><span id="MJXc-Node-791" class="mjx-mrow"><span id="MJXc-Node-792" class="mjx-msup"><span class="mjx-base"><span id="MJXc-Node-793" class="mjx-mi"><span class="mjx-char MJXc-TeX-math-I" style="padding-top: 0.224em; padding-bottom: 0.279em;">a</span></span></span><span class="mjx-sup" style="font-size: 70.7%; vertical-align: 0.513em; padding-left: 0px; padding-right: 0.071em;"><span id="MJXc-Node-794" class="mjx-mo" style=""><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.279em; padding-bottom: 0.335em;">′</span></span></span></span><span id="MJXc-Node-795" class="mjx-msup"><span class="mjx-base"><span id="MJXc-Node-796" class="mjx-mi"><span class="mjx-char MJXc-TeX-math-I" style="padding-top: 0.224em; padding-bottom: 0.279em;">c</span></span></span><span class="mjx-sup" style="font-size: 70.7%; vertical-align: 0.513em; padding-left: 0px; padding-right: 0.071em;"><span id="MJXc-Node-797" class="mjx-mo" style=""><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.279em; padding-bottom: 0.335em;">′</span></span></span></span><span id="MJXc-Node-798" class="mjx-mi"><span class="mjx-char MJXc-TeX-math-I" style="padding-top: 0.445em; padding-bottom: 0.279em; padding-right: 0.003em;">d</span></span></span></span><span class="MJX_Assistive_MathML" role="presentation"><math xmlns="http://www.w3.org/1998/Math/MathML">
                                <msup>
                                    <mi>a</mi>
                                    <mo>′</mo>
                                </msup>
                                <msup>
                                    <mi>c</mi>
                                    <mo>′</mo>
                                </msup>
                                <mi>d</mi>
                            </math></span></span>
                    <script type="math/tex" id="MathJax-Element-53">a'c'd</script>`,
      ],
      answer: "B",
      solution: ``
    },
    {
      marks: 2,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>For any Boolean function, a Non-Essential Prime Implicant is a Prime implicant that has no element that
                cannot be covered by other prime implicants.</p> <p>Which of the following expressions is obtained from a non-essential prime implicant for the given <span class="MathJax_Preview" style="color: inherit;"></span><span id="MathJax-Element-54-Frame" class="mjx-chtml MathJax_CHTML" tabindex="0" data-mathml="<math xmlns=&quot;http://www.w3.org/1998/Math/MathML&quot;><mtext>K-map</mtext><mo>?</mo></math>" role="presentation" style="font-size: 113%; position: relative;"><span id="MJXc-Node-799" class="mjx-math" aria-hidden="true"><span id="MJXc-Node-800" class="mjx-mrow"><span id="MJXc-Node-801" class="mjx-mtext"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.39em; padding-bottom: 0.556em;">K-map</span></span><span id="MJXc-Node-802" class="mjx-mo"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.445em; padding-bottom: 0.335em;">?</span></span></span></span><span class="MJX_Assistive_MathML" role="presentation"><math xmlns="http://www.w3.org/1998/Math/MathML">
                            <mtext>K-map</mtext>
                            <mo>?</mo>
                        </math></span></span>
                <script type="math/tex" id="MathJax-Element-54">\text{K-map}?</script><br>&nbsp;
            </p> <p style="text-align:center"><img alt="" height="236" width="405" src="https://gateoverflow.in/?qa=blob&amp;qa_blobid=9514976199923338262" style="max-width: 75%;"></p> <p>&nbsp;</p> <p></p>`,
      image: "",
      options: [
        `<span class="MathJax_Preview" style="color: inherit;"></span><span id="MathJax-Element-55-Frame" class="mjx-chtml MathJax_CHTML" tabindex="0" data-mathml="<math xmlns=&quot;http://www.w3.org/1998/Math/MathML&quot;><mi>b</mi><msup><mi>c</mi><mo>&amp;#x2032;</mo></msup><mi>d</mi></math>" role="presentation" style="font-size: 113%; position: relative;"><span id="MJXc-Node-803" class="mjx-math" aria-hidden="true"><span id="MJXc-Node-804" class="mjx-mrow"><span id="MJXc-Node-805" class="mjx-mi"><span class="mjx-char MJXc-TeX-math-I" style="padding-top: 0.445em; padding-bottom: 0.279em;">b</span></span><span id="MJXc-Node-806" class="mjx-msup"><span class="mjx-base"><span id="MJXc-Node-807" class="mjx-mi"><span class="mjx-char MJXc-TeX-math-I" style="padding-top: 0.224em; padding-bottom: 0.279em;">c</span></span></span><span class="mjx-sup" style="font-size: 70.7%; vertical-align: 0.513em; padding-left: 0px; padding-right: 0.071em;"><span id="MJXc-Node-808" class="mjx-mo" style=""><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.279em; padding-bottom: 0.335em;">′</span></span></span></span><span id="MJXc-Node-809" class="mjx-mi"><span class="mjx-char MJXc-TeX-math-I" style="padding-top: 0.445em; padding-bottom: 0.279em; padding-right: 0.003em;">d</span></span></span></span><span class="MJX_Assistive_MathML" role="presentation"><math xmlns="http://www.w3.org/1998/Math/MathML">
                                <mi>b</mi>
                                <msup>
                                    <mi>c</mi>
                                    <mo>′</mo>
                                </msup>
                                <mi>d</mi>
                            </math></span></span>
                    <script type="math/tex" id="MathJax-Element-55">bc’d</script>`,
        `<span class="MathJax_Preview" style="color: inherit;"></span><span id="MathJax-Element-56-Frame" class="mjx-chtml MathJax_CHTML" tabindex="0" data-mathml="<math xmlns=&quot;http://www.w3.org/1998/Math/MathML&quot;><msup><mi>d</mi><mo>&amp;#x2032;</mo></msup><msup><mi>b</mi><mo>&amp;#x2032;</mo></msup></math>" role="presentation" style="font-size: 113%; position: relative;"><span id="MJXc-Node-810" class="mjx-math" aria-hidden="true"><span id="MJXc-Node-811" class="mjx-mrow"><span id="MJXc-Node-812" class="mjx-msup"><span class="mjx-base" style="margin-right: -0.003em;"><span id="MJXc-Node-813" class="mjx-mi"><span class="mjx-char MJXc-TeX-math-I" style="padding-top: 0.445em; padding-bottom: 0.279em; padding-right: 0.003em;">d</span></span></span><span class="mjx-sup" style="font-size: 70.7%; vertical-align: 0.513em; padding-left: 0.076em; padding-right: 0.071em;"><span id="MJXc-Node-814" class="mjx-mo" style=""><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.279em; padding-bottom: 0.335em;">′</span></span></span></span><span id="MJXc-Node-815" class="mjx-msup"><span class="mjx-base"><span id="MJXc-Node-816" class="mjx-mi"><span class="mjx-char MJXc-TeX-math-I" style="padding-top: 0.445em; padding-bottom: 0.279em;">b</span></span></span><span class="mjx-sup" style="font-size: 70.7%; vertical-align: 0.513em; padding-left: 0px; padding-right: 0.071em;"><span id="MJXc-Node-817" class="mjx-mo" style=""><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.279em; padding-bottom: 0.335em;">′</span></span></span></span></span></span><span class="MJX_Assistive_MathML" role="presentation"><math xmlns="http://www.w3.org/1998/Math/MathML">
                                <msup>
                                    <mi>d</mi>
                                    <mo>′</mo>
                                </msup>
                                <msup>
                                    <mi>b</mi>
                                    <mo>′</mo>
                                </msup>
                            </math></span></span>
                    <script type="math/tex" id="MathJax-Element-56">d’b’</script>`,
        `<span class="MathJax_Preview" style="color: inherit;"></span><span id="MathJax-Element-57-Frame" class="mjx-chtml MathJax_CHTML" tabindex="0" data-mathml="<math xmlns=&quot;http://www.w3.org/1998/Math/MathML&quot;><mi>a</mi><msup><mi>d</mi><mo>&amp;#x2032;</mo></msup></math>" role="presentation" style="font-size: 113%; position: relative;"><span id="MJXc-Node-818" class="mjx-math" aria-hidden="true"><span id="MJXc-Node-819" class="mjx-mrow"><span id="MJXc-Node-820" class="mjx-mi"><span class="mjx-char MJXc-TeX-math-I" style="padding-top: 0.224em; padding-bottom: 0.279em;">a</span></span><span id="MJXc-Node-821" class="mjx-msup"><span class="mjx-base" style="margin-right: -0.003em;"><span id="MJXc-Node-822" class="mjx-mi"><span class="mjx-char MJXc-TeX-math-I" style="padding-top: 0.445em; padding-bottom: 0.279em; padding-right: 0.003em;">d</span></span></span><span class="mjx-sup" style="font-size: 70.7%; vertical-align: 0.513em; padding-left: 0.076em; padding-right: 0.071em;"><span id="MJXc-Node-823" class="mjx-mo" style=""><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.279em; padding-bottom: 0.335em;">′</span></span></span></span></span></span><span class="MJX_Assistive_MathML" role="presentation"><math xmlns="http://www.w3.org/1998/Math/MathML">
                                <mi>a</mi>
                                <msup>
                                    <mi>d</mi>
                                    <mo>′</mo>
                                </msup>
                            </math></span></span>
                    <script type="math/tex" id="MathJax-Element-57">ad’</script>`,
        `<span class="MathJax_Preview" style="color: inherit;"></span><span id="MathJax-Element-58-Frame" class="mjx-chtml MathJax_CHTML" tabindex="0" data-mathml="<math xmlns=&quot;http://www.w3.org/1998/Math/MathML&quot;><mi>a</mi><mi>b</mi><mi>c</mi></math>" role="presentation" style="font-size: 113%; position: relative;"><span id="MJXc-Node-824" class="mjx-math" aria-hidden="true"><span id="MJXc-Node-825" class="mjx-mrow"><span id="MJXc-Node-826" class="mjx-mi"><span class="mjx-char MJXc-TeX-math-I" style="padding-top: 0.224em; padding-bottom: 0.279em;">a</span></span><span id="MJXc-Node-827" class="mjx-mi"><span class="mjx-char MJXc-TeX-math-I" style="padding-top: 0.445em; padding-bottom: 0.279em;">b</span></span><span id="MJXc-Node-828" class="mjx-mi"><span class="mjx-char MJXc-TeX-math-I" style="padding-top: 0.224em; padding-bottom: 0.279em;">c</span></span></span></span><span class="MJX_Assistive_MathML" role="presentation"><math xmlns="http://www.w3.org/1998/Math/MathML">
                                <mi>a</mi>
                                <mi>b</mi>
                                <mi>c</mi>
                            </math></span></span>
                    <script type="math/tex" id="MathJax-Element-58">abc</script>`,
      ],
      answer: "C",
      solution: ``
    },
    {
      marks: 2,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>The circuit below uses two <span class="MathJax_Preview" style="color: inherit;"></span><span id="MathJax-Element-59-Frame" class="mjx-chtml MathJax_CHTML" tabindex="0" data-mathml="<math xmlns=&quot;http://www.w3.org/1998/Math/MathML&quot;><mn>2</mn></math>" role="presentation" style="font-size: 113%; position: relative;"><span id="MJXc-Node-829" class="mjx-math" aria-hidden="true"><span id="MJXc-Node-830" class="mjx-mrow"><span id="MJXc-Node-831" class="mjx-mn"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.39em; padding-bottom: 0.335em;">2</span></span></span></span><span class="MJX_Assistive_MathML" role="presentation"><math xmlns="http://www.w3.org/1998/Math/MathML">
                            <mn>2</mn>
                        </math></span></span>
                <script type="math/tex" id="MathJax-Element-59">2</script>-to-<span class="MathJax_Preview" style="color: inherit;"></span><span id="MathJax-Element-60-Frame" class="mjx-chtml MathJax_CHTML" tabindex="0" data-mathml="<math xmlns=&quot;http://www.w3.org/1998/Math/MathML&quot;><mn>4</mn></math>" role="presentation" style="font-size: 113%; position: relative;"><span id="MJXc-Node-832" class="mjx-math" aria-hidden="true"><span id="MJXc-Node-833" class="mjx-mrow"><span id="MJXc-Node-834" class="mjx-mn"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.39em; padding-bottom: 0.335em;">4</span></span></span></span><span class="MJX_Assistive_MathML" role="presentation"><math xmlns="http://www.w3.org/1998/Math/MathML">
                            <mn>4</mn>
                        </math></span></span>
                <script type="math/tex" id="MathJax-Element-60">4</script> decoders, and inverter, and an OR gate to
                implement a function <span class="MathJax_Preview" style="color: inherit;"></span><span id="MathJax-Element-61-Frame" class="mjx-chtml MathJax_CHTML" tabindex="0" data-mathml="<math xmlns=&quot;http://www.w3.org/1998/Math/MathML&quot;><mrow class=&quot;MJX-TeXAtom-ORD&quot;><mi mathvariant=&quot;normal&quot;>F</mi></mrow><mo stretchy=&quot;false&quot;>(</mo><mrow class=&quot;MJX-TeXAtom-ORD&quot;><mi mathvariant=&quot;normal&quot;>X</mi></mrow><mo>,</mo><mrow class=&quot;MJX-TeXAtom-ORD&quot;><mi mathvariant=&quot;normal&quot;>Y</mi></mrow><mo>,</mo><mrow class=&quot;MJX-TeXAtom-ORD&quot;><mi mathvariant=&quot;normal&quot;>Z</mi></mrow><mo stretchy=&quot;false&quot;>)</mo></math>" role="presentation" style="font-size: 113%; position: relative;"><span id="MJXc-Node-835" class="mjx-math" aria-hidden="true"><span id="MJXc-Node-836" class="mjx-mrow"><span id="MJXc-Node-837" class="mjx-texatom"><span id="MJXc-Node-838" class="mjx-mrow"><span id="MJXc-Node-839" class="mjx-mi"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.39em; padding-bottom: 0.335em;">F</span></span></span></span><span id="MJXc-Node-840" class="mjx-mo"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.445em; padding-bottom: 0.611em;">(</span></span><span id="MJXc-Node-841" class="mjx-texatom"><span id="MJXc-Node-842" class="mjx-mrow"><span id="MJXc-Node-843" class="mjx-mi"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.39em; padding-bottom: 0.335em;">X</span></span></span></span><span id="MJXc-Node-844" class="mjx-mo"><span class="mjx-char MJXc-TeX-main-R" style="margin-top: -0.163em; padding-bottom: 0.556em;">,</span></span><span id="MJXc-Node-845" class="mjx-texatom MJXc-space1"><span id="MJXc-Node-846" class="mjx-mrow"><span id="MJXc-Node-847" class="mjx-mi"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.39em; padding-bottom: 0.335em;">Y</span></span></span></span><span id="MJXc-Node-848" class="mjx-mo"><span class="mjx-char MJXc-TeX-main-R" style="margin-top: -0.163em; padding-bottom: 0.556em;">,</span></span><span id="MJXc-Node-849" class="mjx-texatom MJXc-space1"><span id="MJXc-Node-850" class="mjx-mrow"><span id="MJXc-Node-851" class="mjx-mi"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.39em; padding-bottom: 0.335em;">Z</span></span></span></span><span id="MJXc-Node-852" class="mjx-mo"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.445em; padding-bottom: 0.611em;">)</span></span></span></span><span class="MJX_Assistive_MathML" role="presentation"><math xmlns="http://www.w3.org/1998/Math/MathML">
                            <mrow class="MJX-TeXAtom-ORD">
                                <mi mathvariant="normal">F</mi>
                            </mrow>
                            <mo stretchy="false">(</mo>
                            <mrow class="MJX-TeXAtom-ORD">
                                <mi mathvariant="normal">X</mi>
                            </mrow>
                            <mo>,</mo>
                            <mrow class="MJX-TeXAtom-ORD">
                                <mi mathvariant="normal">Y</mi>
                            </mrow>
                            <mo>,</mo>
                            <mrow class="MJX-TeXAtom-ORD">
                                <mi mathvariant="normal">Z</mi>
                            </mrow>
                            <mo stretchy="false">)</mo>
                        </math></span></span>
                <script type="math/tex" id="MathJax-Element-61">\mathrm{F}(\mathrm{X}, \mathrm{Y}, \mathrm{Z})</script>.
                <span class="MathJax_Preview" style="color: inherit;"></span><span id="MathJax-Element-62-Frame" class="mjx-chtml MathJax_CHTML" tabindex="0" data-mathml="<math xmlns=&quot;http://www.w3.org/1998/Math/MathML&quot;><mrow class=&quot;MJX-TeXAtom-ORD&quot;><mi mathvariant=&quot;normal&quot;>X</mi></mrow></math>" role="presentation" style="font-size: 113%; position: relative;"><span id="MJXc-Node-853" class="mjx-math" aria-hidden="true"><span id="MJXc-Node-854" class="mjx-mrow"><span id="MJXc-Node-855" class="mjx-texatom"><span id="MJXc-Node-856" class="mjx-mrow"><span id="MJXc-Node-857" class="mjx-mi"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.39em; padding-bottom: 0.335em;">X</span></span></span></span></span></span><span class="MJX_Assistive_MathML" role="presentation"><math xmlns="http://www.w3.org/1998/Math/MathML">
                            <mrow class="MJX-TeXAtom-ORD">
                                <mi mathvariant="normal">X</mi>
                            </mrow>
                        </math></span></span>
                <script type="math/tex" id="MathJax-Element-62">\mathrm{X}</script> is the most significant bit.
            </p> <p style="text-align:center"><img alt="" src="https://gateoverflow.in/?qa=blob&amp;qa_blobid=11492790694095266743" style="max-width: 75%;"></p> <p><br><span class="MathJax_Preview" style="color: inherit;"></span><span id="MathJax-Element-63-Frame" class="mjx-chtml MathJax_CHTML" tabindex="0" data-mathml="<math xmlns=&quot;http://www.w3.org/1998/Math/MathML&quot;><mrow class=&quot;MJX-TeXAtom-ORD&quot;><mi mathvariant=&quot;normal&quot;>F</mi></mrow><mo stretchy=&quot;false&quot;>(</mo><mrow class=&quot;MJX-TeXAtom-ORD&quot;><mi mathvariant=&quot;normal&quot;>X</mi></mrow><mo>,</mo><mrow class=&quot;MJX-TeXAtom-ORD&quot;><mi mathvariant=&quot;normal&quot;>Y</mi></mrow><mo>,</mo><mrow class=&quot;MJX-TeXAtom-ORD&quot;><mi mathvariant=&quot;normal&quot;>Z</mi></mrow><mo stretchy=&quot;false&quot;>)</mo></math>" role="presentation" style="font-size: 113%; position: relative;"><span id="MJXc-Node-858" class="mjx-math" aria-hidden="true"><span id="MJXc-Node-859" class="mjx-mrow"><span id="MJXc-Node-860" class="mjx-texatom"><span id="MJXc-Node-861" class="mjx-mrow"><span id="MJXc-Node-862" class="mjx-mi"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.39em; padding-bottom: 0.335em;">F</span></span></span></span><span id="MJXc-Node-863" class="mjx-mo"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.445em; padding-bottom: 0.611em;">(</span></span><span id="MJXc-Node-864" class="mjx-texatom"><span id="MJXc-Node-865" class="mjx-mrow"><span id="MJXc-Node-866" class="mjx-mi"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.39em; padding-bottom: 0.335em;">X</span></span></span></span><span id="MJXc-Node-867" class="mjx-mo"><span class="mjx-char MJXc-TeX-main-R" style="margin-top: -0.163em; padding-bottom: 0.556em;">,</span></span><span id="MJXc-Node-868" class="mjx-texatom MJXc-space1"><span id="MJXc-Node-869" class="mjx-mrow"><span id="MJXc-Node-870" class="mjx-mi"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.39em; padding-bottom: 0.335em;">Y</span></span></span></span><span id="MJXc-Node-871" class="mjx-mo"><span class="mjx-char MJXc-TeX-main-R" style="margin-top: -0.163em; padding-bottom: 0.556em;">,</span></span><span id="MJXc-Node-872" class="mjx-texatom MJXc-space1"><span id="MJXc-Node-873" class="mjx-mrow"><span id="MJXc-Node-874" class="mjx-mi"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.39em; padding-bottom: 0.335em;">Z</span></span></span></span><span id="MJXc-Node-875" class="mjx-mo"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.445em; padding-bottom: 0.611em;">)</span></span></span></span><span class="MJX_Assistive_MathML" role="presentation"><math xmlns="http://www.w3.org/1998/Math/MathML">
                            <mrow class="MJX-TeXAtom-ORD">
                                <mi mathvariant="normal">F</mi>
                            </mrow>
                            <mo stretchy="false">(</mo>
                            <mrow class="MJX-TeXAtom-ORD">
                                <mi mathvariant="normal">X</mi>
                            </mrow>
                            <mo>,</mo>
                            <mrow class="MJX-TeXAtom-ORD">
                                <mi mathvariant="normal">Y</mi>
                            </mrow>
                            <mo>,</mo>
                            <mrow class="MJX-TeXAtom-ORD">
                                <mi mathvariant="normal">Z</mi>
                            </mrow>
                            <mo stretchy="false">)</mo>
                        </math></span></span>
                <script type="math/tex" id="MathJax-Element-63">\mathrm{F}(\mathrm{X}, \mathrm{Y}, \mathrm{Z})</script>
                can be expressed as (Encircle all that applies):
            </p> <p></p>`,
      image: "",
      options: [
        `<span class="MathJax_Preview" style="color: inherit;"></span><span id="MathJax-Element-64-Frame" class="mjx-chtml MathJax_CHTML" tabindex="0" data-mathml="<math xmlns=&quot;http://www.w3.org/1998/Math/MathML&quot;><mo>&amp;#x2211;</mo><mrow class=&quot;MJX-TeXAtom-ORD&quot;><mi mathvariant=&quot;normal&quot;>m</mi></mrow><mo stretchy=&quot;false&quot;>(</mo><mn>0</mn><mo>,</mo><mn>3</mn><mo>,</mo><mn>4</mn><mo>,</mo><mn>6</mn><mo stretchy=&quot;false&quot;>)</mo></math>" role="presentation" style="font-size: 113%; position: relative;"><span id="MJXc-Node-876" class="mjx-math" aria-hidden="true"><span id="MJXc-Node-877" class="mjx-mrow"><span id="MJXc-Node-878" class="mjx-mo"><span class="mjx-char MJXc-TeX-size1-R" style="padding-top: 0.501em; padding-bottom: 0.501em;">∑</span></span><span id="MJXc-Node-879" class="mjx-texatom MJXc-space1"><span id="MJXc-Node-880" class="mjx-mrow"><span id="MJXc-Node-881" class="mjx-mi"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.169em; padding-bottom: 0.335em;">m</span></span></span></span><span id="MJXc-Node-882" class="mjx-mo"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.445em; padding-bottom: 0.611em;">(</span></span><span id="MJXc-Node-883" class="mjx-mn"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.39em; padding-bottom: 0.39em;">0</span></span><span id="MJXc-Node-884" class="mjx-mo"><span class="mjx-char MJXc-TeX-main-R" style="margin-top: -0.163em; padding-bottom: 0.556em;">,</span></span><span id="MJXc-Node-885" class="mjx-mn MJXc-space1"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.39em; padding-bottom: 0.39em;">3</span></span><span id="MJXc-Node-886" class="mjx-mo"><span class="mjx-char MJXc-TeX-main-R" style="margin-top: -0.163em; padding-bottom: 0.556em;">,</span></span><span id="MJXc-Node-887" class="mjx-mn MJXc-space1"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.39em; padding-bottom: 0.335em;">4</span></span><span id="MJXc-Node-888" class="mjx-mo"><span class="mjx-char MJXc-TeX-main-R" style="margin-top: -0.163em; padding-bottom: 0.556em;">,</span></span><span id="MJXc-Node-889" class="mjx-mn MJXc-space1"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.39em; padding-bottom: 0.39em;">6</span></span><span id="MJXc-Node-890" class="mjx-mo"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.445em; padding-bottom: 0.611em;">)</span></span></span></span><span class="MJX_Assistive_MathML" role="presentation"><math xmlns="http://www.w3.org/1998/Math/MathML">
                                <mo>∑</mo>
                                <mrow class="MJX-TeXAtom-ORD">
                                    <mi mathvariant="normal">m</mi>
                                </mrow>
                                <mo stretchy="false">(</mo>
                                <mn>0</mn>
                                <mo>,</mo>
                                <mn>3</mn>
                                <mo>,</mo>
                                <mn>4</mn>
                                <mo>,</mo>
                                <mn>6</mn>
                                <mo stretchy="false">)</mo>
                            </math></span></span>
                    <script type="math/tex" id="MathJax-Element-64">\sum \mathrm{m}(0,3,4,6)</script>`,
        `<span class="MathJax_Preview" style="color: inherit;"></span><span id="MathJax-Element-65-Frame" class="mjx-chtml MathJax_CHTML" tabindex="0" data-mathml="<math xmlns=&quot;http://www.w3.org/1998/Math/MathML&quot;><mo>&amp;#x2211;</mo><mrow class=&quot;MJX-TeXAtom-ORD&quot;><mi mathvariant=&quot;normal&quot;>m</mi></mrow><mo stretchy=&quot;false&quot;>(</mo><mn>0</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>4</mn><mo>,</mo><mn>7</mn><mo stretchy=&quot;false&quot;>)</mo></math>" role="presentation" style="font-size: 113%; position: relative;"><span id="MJXc-Node-891" class="mjx-math" aria-hidden="true"><span id="MJXc-Node-892" class="mjx-mrow"><span id="MJXc-Node-893" class="mjx-mo"><span class="mjx-char MJXc-TeX-size1-R" style="padding-top: 0.501em; padding-bottom: 0.501em;">∑</span></span><span id="MJXc-Node-894" class="mjx-texatom MJXc-space1"><span id="MJXc-Node-895" class="mjx-mrow"><span id="MJXc-Node-896" class="mjx-mi"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.169em; padding-bottom: 0.335em;">m</span></span></span></span><span id="MJXc-Node-897" class="mjx-mo"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.445em; padding-bottom: 0.611em;">(</span></span><span id="MJXc-Node-898" class="mjx-mn"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.39em; padding-bottom: 0.39em;">0</span></span><span id="MJXc-Node-899" class="mjx-mo"><span class="mjx-char MJXc-TeX-main-R" style="margin-top: -0.163em; padding-bottom: 0.556em;">,</span></span><span id="MJXc-Node-900" class="mjx-mn MJXc-space1"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.39em; padding-bottom: 0.335em;">2</span></span><span id="MJXc-Node-901" class="mjx-mo"><span class="mjx-char MJXc-TeX-main-R" style="margin-top: -0.163em; padding-bottom: 0.556em;">,</span></span><span id="MJXc-Node-902" class="mjx-mn MJXc-space1"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.39em; padding-bottom: 0.335em;">4</span></span><span id="MJXc-Node-903" class="mjx-mo"><span class="mjx-char MJXc-TeX-main-R" style="margin-top: -0.163em; padding-bottom: 0.556em;">,</span></span><span id="MJXc-Node-904" class="mjx-mn MJXc-space1"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.39em; padding-bottom: 0.39em;">7</span></span><span id="MJXc-Node-905" class="mjx-mo"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.445em; padding-bottom: 0.611em;">)</span></span></span></span><span class="MJX_Assistive_MathML" role="presentation"><math xmlns="http://www.w3.org/1998/Math/MathML">
                                <mo>∑</mo>
                                <mrow class="MJX-TeXAtom-ORD">
                                    <mi mathvariant="normal">m</mi>
                                </mrow>
                                <mo stretchy="false">(</mo>
                                <mn>0</mn>
                                <mo>,</mo>
                                <mn>2</mn>
                                <mo>,</mo>
                                <mn>4</mn>
                                <mo>,</mo>
                                <mn>7</mn>
                                <mo stretchy="false">)</mo>
                            </math></span></span>
                    <script type="math/tex" id="MathJax-Element-65">\sum \mathrm{m}(0,2,4,7)</script>`,
        `<span class="MathJax_Preview" style="color: inherit;"></span><span id="MathJax-Element-66-Frame" class="mjx-chtml MathJax_CHTML" tabindex="0" data-mathml="<math xmlns=&quot;http://www.w3.org/1998/Math/MathML&quot;><mo>&amp;#x220F;</mo><mtext>M</mtext><mo stretchy=&quot;false&quot;>(</mo><mn>1</mn><mo>,</mo><mn>3</mn><mo>,</mo><mn>5</mn><mo>,</mo><mn>6</mn><mo stretchy=&quot;false&quot;>)</mo></math>" role="presentation" style="font-size: 113%; position: relative;"><span id="MJXc-Node-906" class="mjx-math" aria-hidden="true"><span id="MJXc-Node-907" class="mjx-mrow"><span id="MJXc-Node-908" class="mjx-mo"><span class="mjx-char MJXc-TeX-size1-R" style="padding-top: 0.501em; padding-bottom: 0.501em;">∏</span></span><span id="MJXc-Node-909" class="mjx-mtext MJXc-space1"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.39em; padding-bottom: 0.335em;">M</span></span><span id="MJXc-Node-910" class="mjx-mo"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.445em; padding-bottom: 0.611em;">(</span></span><span id="MJXc-Node-911" class="mjx-mn"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.39em; padding-bottom: 0.335em;">1</span></span><span id="MJXc-Node-912" class="mjx-mo"><span class="mjx-char MJXc-TeX-main-R" style="margin-top: -0.163em; padding-bottom: 0.556em;">,</span></span><span id="MJXc-Node-913" class="mjx-mn MJXc-space1"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.39em; padding-bottom: 0.39em;">3</span></span><span id="MJXc-Node-914" class="mjx-mo"><span class="mjx-char MJXc-TeX-main-R" style="margin-top: -0.163em; padding-bottom: 0.556em;">,</span></span><span id="MJXc-Node-915" class="mjx-mn MJXc-space1"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.39em; padding-bottom: 0.39em;">5</span></span><span id="MJXc-Node-916" class="mjx-mo"><span class="mjx-char MJXc-TeX-main-R" style="margin-top: -0.163em; padding-bottom: 0.556em;">,</span></span><span id="MJXc-Node-917" class="mjx-mn MJXc-space1"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.39em; padding-bottom: 0.39em;">6</span></span><span id="MJXc-Node-918" class="mjx-mo"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.445em; padding-bottom: 0.611em;">)</span></span></span></span><span class="MJX_Assistive_MathML" role="presentation"><math xmlns="http://www.w3.org/1998/Math/MathML">
                                <mo>∏</mo>
                                <mtext>M</mtext>
                                <mo stretchy="false">(</mo>
                                <mn>1</mn>
                                <mo>,</mo>
                                <mn>3</mn>
                                <mo>,</mo>
                                <mn>5</mn>
                                <mo>,</mo>
                                <mn>6</mn>
                                <mo stretchy="false">)</mo>
                            </math></span></span>
                    <script type="math/tex" id="MathJax-Element-66">\prod&nbsp;\text{M}(1,3,5,6)</script>`,
        `<span class="MathJax_Preview" style="color: inherit;"></span><span id="MathJax-Element-67-Frame" class="mjx-chtml MathJax_CHTML" tabindex="0" data-mathml="<math xmlns=&quot;http://www.w3.org/1998/Math/MathML&quot;><mo>&amp;#x220F;</mo><mtext>M</mtext><mo stretchy=&quot;false&quot;>(</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>5</mn><mo>,</mo><mn>7</mn><mo stretchy=&quot;false&quot;>)</mo></math>" role="presentation" style="font-size: 113%; position: relative;"><span id="MJXc-Node-919" class="mjx-math" aria-hidden="true"><span id="MJXc-Node-920" class="mjx-mrow"><span id="MJXc-Node-921" class="mjx-mo"><span class="mjx-char MJXc-TeX-size1-R" style="padding-top: 0.501em; padding-bottom: 0.501em;">∏</span></span><span id="MJXc-Node-922" class="mjx-mtext MJXc-space1"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.39em; padding-bottom: 0.335em;">M</span></span><span id="MJXc-Node-923" class="mjx-mo"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.445em; padding-bottom: 0.611em;">(</span></span><span id="MJXc-Node-924" class="mjx-mn"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.39em; padding-bottom: 0.335em;">1</span></span><span id="MJXc-Node-925" class="mjx-mo"><span class="mjx-char MJXc-TeX-main-R" style="margin-top: -0.163em; padding-bottom: 0.556em;">,</span></span><span id="MJXc-Node-926" class="mjx-mn MJXc-space1"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.39em; padding-bottom: 0.335em;">2</span></span><span id="MJXc-Node-927" class="mjx-mo"><span class="mjx-char MJXc-TeX-main-R" style="margin-top: -0.163em; padding-bottom: 0.556em;">,</span></span><span id="MJXc-Node-928" class="mjx-mn MJXc-space1"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.39em; padding-bottom: 0.39em;">5</span></span><span id="MJXc-Node-929" class="mjx-mo"><span class="mjx-char MJXc-TeX-main-R" style="margin-top: -0.163em; padding-bottom: 0.556em;">,</span></span><span id="MJXc-Node-930" class="mjx-mn MJXc-space1"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.39em; padding-bottom: 0.39em;">7</span></span><span id="MJXc-Node-931" class="mjx-mo"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.445em; padding-bottom: 0.611em;">)</span></span></span></span><span class="MJX_Assistive_MathML" role="presentation"><math xmlns="http://www.w3.org/1998/Math/MathML">
                                <mo>∏</mo>
                                <mtext>M</mtext>
                                <mo stretchy="false">(</mo>
                                <mn>1</mn>
                                <mo>,</mo>
                                <mn>2</mn>
                                <mo>,</mo>
                                <mn>5</mn>
                                <mo>,</mo>
                                <mn>7</mn>
                                <mo stretchy="false">)</mo>
                            </math></span></span>
                    <script type="math/tex" id="MathJax-Element-67">\prod&nbsp;\text{M}(1,2,5,7)</script>`,
      ],
      answer: "B",
      solution: ``
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p>Consider the following circuit containing a <span class="MathJax_Preview" style="color: inherit;"></span><span id="MathJax-Element-68-Frame" class="mjx-chtml MathJax_CHTML" tabindex="0" data-mathml="<math xmlns=&quot;http://www.w3.org/1998/Math/MathML&quot;><mn>2</mn></math>" role="presentation" style="font-size: 113%; position: relative;"><span id="MJXc-Node-932" class="mjx-math" aria-hidden="true"><span id="MJXc-Node-933" class="mjx-mrow"><span id="MJXc-Node-934" class="mjx-mn"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.39em; padding-bottom: 0.335em;">2</span></span></span></span><span class="MJX_Assistive_MathML" role="presentation"><math xmlns="http://www.w3.org/1998/Math/MathML">
                            <mn>2</mn>
                        </math></span></span>
                <script type="math/tex" id="MathJax-Element-68">2</script>-to-<span class="MathJax_Preview" style="color: inherit;"></span><span id="MathJax-Element-69-Frame" class="mjx-chtml MathJax_CHTML" tabindex="0" data-mathml="<math xmlns=&quot;http://www.w3.org/1998/Math/MathML&quot;><mn>4</mn></math>" role="presentation" style="font-size: 113%; position: relative;"><span id="MJXc-Node-935" class="mjx-math" aria-hidden="true"><span id="MJXc-Node-936" class="mjx-mrow"><span id="MJXc-Node-937" class="mjx-mn"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.39em; padding-bottom: 0.335em;">4</span></span></span></span><span class="MJX_Assistive_MathML" role="presentation"><math xmlns="http://www.w3.org/1998/Math/MathML">
                            <mn>4</mn>
                        </math></span></span>
                <script type="math/tex" id="MathJax-Element-69">4</script> decoder:
            </p> <p style="text-align:center"><img alt="" height="249" width="440" src="https://gateoverflow.in/?qa=blob&amp;qa_blobid=6836692884319524371" style="max-width: 75%;"></p> <p><br>The following circuit behaves like:</p> <p></p>`,
      image: "",
      options: [
        `<span class="MathJax_Preview" style="color: inherit;"></span><span id="MathJax-Element-70-Frame" class="mjx-chtml MathJax_CHTML" tabindex="0" data-mathml="<math xmlns=&quot;http://www.w3.org/1998/Math/MathML&quot;><mn>2</mn></math>" role="presentation" style="font-size: 113%; position: relative;"><span id="MJXc-Node-938" class="mjx-math" aria-hidden="true"><span id="MJXc-Node-939" class="mjx-mrow"><span id="MJXc-Node-940" class="mjx-mn"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.39em; padding-bottom: 0.335em;">2</span></span></span></span><span class="MJX_Assistive_MathML" role="presentation"><math xmlns="http://www.w3.org/1998/Math/MathML">
                                <mn>2</mn>
                            </math></span></span>
                    <script type="math/tex" id="MathJax-Element-70">2</script>-to-<span class="MathJax_Preview" style="color: inherit;"></span><span id="MathJax-Element-71-Frame" class="mjx-chtml MathJax_CHTML" tabindex="0" data-mathml="<math xmlns=&quot;http://www.w3.org/1998/Math/MathML&quot;><mn>4</mn></math>" role="presentation" style="font-size: 113%; position: relative;"><span id="MJXc-Node-941" class="mjx-math" aria-hidden="true"><span id="MJXc-Node-942" class="mjx-mrow"><span id="MJXc-Node-943" class="mjx-mn"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.39em; padding-bottom: 0.335em;">4</span></span></span></span><span class="MJX_Assistive_MathML" role="presentation"><math xmlns="http://www.w3.org/1998/Math/MathML">
                                <mn>4</mn>
                            </math></span></span>
                    <script type="math/tex" id="MathJax-Element-71">4</script> Decoder`,
        `<span class="MathJax_Preview" style="color: inherit;"></span><span id="MathJax-Element-72-Frame" class="mjx-chtml MathJax_CHTML" tabindex="0" data-mathml="<math xmlns=&quot;http://www.w3.org/1998/Math/MathML&quot;><mn>2</mn></math>" role="presentation" style="font-size: 113%; position: relative;"><span id="MJXc-Node-944" class="mjx-math" aria-hidden="true"><span id="MJXc-Node-945" class="mjx-mrow"><span id="MJXc-Node-946" class="mjx-mn"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.39em; padding-bottom: 0.335em;">2</span></span></span></span><span class="MJX_Assistive_MathML" role="presentation"><math xmlns="http://www.w3.org/1998/Math/MathML">
                                <mn>2</mn>
                            </math></span></span>
                    <script type="math/tex" id="MathJax-Element-72">2</script>-to-<span class="MathJax_Preview" style="color: inherit;"></span><span id="MathJax-Element-73-Frame" class="mjx-chtml MathJax_CHTML" tabindex="0" data-mathml="<math xmlns=&quot;http://www.w3.org/1998/Math/MathML&quot;><mn>4</mn></math>" role="presentation" style="font-size: 113%; position: relative;"><span id="MJXc-Node-947" class="mjx-math" aria-hidden="true"><span id="MJXc-Node-948" class="mjx-mrow"><span id="MJXc-Node-949" class="mjx-mn"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.39em; padding-bottom: 0.335em;">4</span></span></span></span><span class="MJX_Assistive_MathML" role="presentation"><math xmlns="http://www.w3.org/1998/Math/MathML">
                                <mn>4</mn>
                            </math></span></span>
                    <script type="math/tex" id="MathJax-Element-73">4</script> Multiplexer`,
        `<span class="MathJax_Preview" style="color: inherit;"></span><span id="MathJax-Element-74-Frame" class="mjx-chtml MathJax_CHTML" tabindex="0" data-mathml="<math xmlns=&quot;http://www.w3.org/1998/Math/MathML&quot;><mn>4</mn></math>" role="presentation" style="font-size: 113%; position: relative;"><span id="MJXc-Node-950" class="mjx-math" aria-hidden="true"><span id="MJXc-Node-951" class="mjx-mrow"><span id="MJXc-Node-952" class="mjx-mn"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.39em; padding-bottom: 0.335em;">4</span></span></span></span><span class="MJX_Assistive_MathML" role="presentation"><math xmlns="http://www.w3.org/1998/Math/MathML">
                                <mn>4</mn>
                            </math></span></span>
                    <script type="math/tex" id="MathJax-Element-74">4</script>-to-<span class="MathJax_Preview" style="color: inherit;"></span><span id="MathJax-Element-75-Frame" class="mjx-chtml MathJax_CHTML" tabindex="0" data-mathml="<math xmlns=&quot;http://www.w3.org/1998/Math/MathML&quot;><mn>1</mn></math>" role="presentation" style="font-size: 113%; position: relative;"><span id="MJXc-Node-953" class="mjx-math" aria-hidden="true"><span id="MJXc-Node-954" class="mjx-mrow"><span id="MJXc-Node-955" class="mjx-mn"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.39em; padding-bottom: 0.335em;">1</span></span></span></span><span class="MJX_Assistive_MathML" role="presentation"><math xmlns="http://www.w3.org/1998/Math/MathML">
                                <mn>1</mn>
                            </math></span></span>
                    <script type="math/tex" id="MathJax-Element-75">1</script> De-multiplexer`,
        `<span class="MathJax_Preview" style="color: inherit;"></span><span id="MathJax-Element-76-Frame" class="mjx-chtml MathJax_CHTML" tabindex="0" data-mathml="<math xmlns=&quot;http://www.w3.org/1998/Math/MathML&quot;><mn>4</mn></math>" role="presentation" style="font-size: 113%; position: relative;"><span id="MJXc-Node-956" class="mjx-math" aria-hidden="true"><span id="MJXc-Node-957" class="mjx-mrow"><span id="MJXc-Node-958" class="mjx-mn"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.39em; padding-bottom: 0.335em;">4</span></span></span></span><span class="MJX_Assistive_MathML" role="presentation"><math xmlns="http://www.w3.org/1998/Math/MathML">
                                <mn>4</mn>
                            </math></span></span>
                    <script type="math/tex" id="MathJax-Element-76">4</script>-to-<span class="MathJax_Preview" style="color: inherit;"></span><span id="MathJax-Element-77-Frame" class="mjx-chtml MathJax_CHTML" tabindex="0" data-mathml="<math xmlns=&quot;http://www.w3.org/1998/Math/MathML&quot;><mn>1</mn></math>" role="presentation" style="font-size: 113%; position: relative;"><span id="MJXc-Node-959" class="mjx-math" aria-hidden="true"><span id="MJXc-Node-960" class="mjx-mrow"><span id="MJXc-Node-961" class="mjx-mn"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.39em; padding-bottom: 0.335em;">1</span></span></span></span><span class="MJX_Assistive_MathML" role="presentation"><math xmlns="http://www.w3.org/1998/Math/MathML">
                                <mn>1</mn>
                            </math></span></span>
                    <script type="math/tex" id="MathJax-Element-77">1</script> Multiplexer`,
      ],
      answer: "D",
      solution: ``
    },
    {
      marks: 2,
      neg: 0,
      type: "MCQ",
      text: `<p>A majority voting machine inputs three binary bits <span class="MathJax_Preview" style="color: inherit;"></span><span id="MathJax-Element-78-Frame" class="mjx-chtml MathJax_CHTML" tabindex="0" data-mathml="<math xmlns=&quot;http://www.w3.org/1998/Math/MathML&quot;><mo stretchy=&quot;false&quot;>(</mo><msub><mi>x</mi><mn>2</mn></msub><mo>,</mo><msub><mi>x</mi><mn>1</mn></msub><mo>,</mo><msub><mi>x</mi><mn>0</mn></msub><mo stretchy=&quot;false&quot;>)</mo></math>" role="presentation" style="font-size: 113%; position: relative;"><span id="MJXc-Node-962" class="mjx-math" aria-hidden="true"><span id="MJXc-Node-963" class="mjx-mrow"><span id="MJXc-Node-964" class="mjx-mo"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.445em; padding-bottom: 0.611em;">(</span></span><span id="MJXc-Node-965" class="mjx-msubsup"><span class="mjx-base"><span id="MJXc-Node-966" class="mjx-mi"><span class="mjx-char MJXc-TeX-math-I" style="padding-top: 0.224em; padding-bottom: 0.279em;">x</span></span></span><span class="mjx-sub" style="font-size: 70.7%; vertical-align: -0.212em; padding-right: 0.071em;"><span id="MJXc-Node-967" class="mjx-mn" style=""><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.39em; padding-bottom: 0.335em;">2</span></span></span></span><span id="MJXc-Node-968" class="mjx-mo"><span class="mjx-char MJXc-TeX-main-R" style="margin-top: -0.163em; padding-bottom: 0.556em;">,</span></span><span id="MJXc-Node-969" class="mjx-msubsup MJXc-space1"><span class="mjx-base"><span id="MJXc-Node-970" class="mjx-mi"><span class="mjx-char MJXc-TeX-math-I" style="padding-top: 0.224em; padding-bottom: 0.279em;">x</span></span></span><span class="mjx-sub" style="font-size: 70.7%; vertical-align: -0.212em; padding-right: 0.071em;"><span id="MJXc-Node-971" class="mjx-mn" style=""><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.39em; padding-bottom: 0.335em;">1</span></span></span></span><span id="MJXc-Node-972" class="mjx-mo"><span class="mjx-char MJXc-TeX-main-R" style="margin-top: -0.163em; padding-bottom: 0.556em;">,</span></span><span id="MJXc-Node-973" class="mjx-msubsup MJXc-space1"><span class="mjx-base"><span id="MJXc-Node-974" class="mjx-mi"><span class="mjx-char MJXc-TeX-math-I" style="padding-top: 0.224em; padding-bottom: 0.279em;">x</span></span></span><span class="mjx-sub" style="font-size: 70.7%; vertical-align: -0.212em; padding-right: 0.071em;"><span id="MJXc-Node-975" class="mjx-mn" style=""><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.39em; padding-bottom: 0.39em;">0</span></span></span></span><span id="MJXc-Node-976" class="mjx-mo"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.445em; padding-bottom: 0.611em;">)</span></span></span></span><span class="MJX_Assistive_MathML" role="presentation"><math xmlns="http://www.w3.org/1998/Math/MathML">
                            <mo stretchy="false">(</mo>
                            <msub>
                                <mi>x</mi>
                                <mn>2</mn>
                            </msub>
                            <mo>,</mo>
                            <msub>
                                <mi>x</mi>
                                <mn>1</mn>
                            </msub>
                            <mo>,</mo>
                            <msub>
                                <mi>x</mi>
                                <mn>0</mn>
                            </msub>
                            <mo stretchy="false">)</mo>
                        </math></span></span>
                <script type="math/tex" id="MathJax-Element-78">(x_2, x_1, x_0)</script>, and outputs <span class="MathJax_Preview" style="color: inherit;"></span><span id="MathJax-Element-79-Frame" class="mjx-chtml MathJax_CHTML" tabindex="0" data-mathml="<math xmlns=&quot;http://www.w3.org/1998/Math/MathML&quot;><mi>y</mi><mo>=</mo><mn>1</mn></math>" role="presentation" style="font-size: 113%; position: relative;"><span id="MJXc-Node-977" class="mjx-math" aria-hidden="true"><span id="MJXc-Node-978" class="mjx-mrow"><span id="MJXc-Node-979" class="mjx-mi"><span class="mjx-char MJXc-TeX-math-I" style="padding-top: 0.224em; padding-bottom: 0.501em; padding-right: 0.006em;">y</span></span><span id="MJXc-Node-980" class="mjx-mo MJXc-space3"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.058em; padding-bottom: 0.335em;">=</span></span><span id="MJXc-Node-981" class="mjx-mn MJXc-space3"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.39em; padding-bottom: 0.335em;">1</span></span></span></span><span class="MJX_Assistive_MathML" role="presentation"><math xmlns="http://www.w3.org/1998/Math/MathML">
                            <mi>y</mi>
                            <mo>=</mo>
                            <mn>1</mn>
                        </math></span></span>
                <script type="math/tex" id="MathJax-Element-79">y=1</script> when the majority of the input bits are
                <span class="MathJax_Preview" style="color: inherit;"></span><span id="MathJax-Element-80-Frame" class="mjx-chtml MathJax_CHTML" tabindex="0" data-mathml="<math xmlns=&quot;http://www.w3.org/1998/Math/MathML&quot;><mn>1.</mn></math>" role="presentation" style="font-size: 113%; position: relative;"><span id="MJXc-Node-982" class="mjx-math" aria-hidden="true"><span id="MJXc-Node-983" class="mjx-mrow"><span id="MJXc-Node-984" class="mjx-mn"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.39em; padding-bottom: 0.335em;">1.</span></span></span></span><span class="MJX_Assistive_MathML" role="presentation"><math xmlns="http://www.w3.org/1998/Math/MathML">
                            <mn>1.</mn>
                        </math></span></span>
                <script type="math/tex" id="MathJax-Element-80">1.</script> Otherwise, the output is <span class="MathJax_Preview" style="color: inherit;"></span><span id="MathJax-Element-81-Frame" class="mjx-chtml MathJax_CHTML" tabindex="0" data-mathml="<math xmlns=&quot;http://www.w3.org/1998/Math/MathML&quot;><mi>y</mi><mo>=</mo><mn>0</mn></math>" role="presentation" style="font-size: 113%; position: relative;"><span id="MJXc-Node-985" class="mjx-math" aria-hidden="true"><span id="MJXc-Node-986" class="mjx-mrow"><span id="MJXc-Node-987" class="mjx-mi"><span class="mjx-char MJXc-TeX-math-I" style="padding-top: 0.224em; padding-bottom: 0.501em; padding-right: 0.006em;">y</span></span><span id="MJXc-Node-988" class="mjx-mo MJXc-space3"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.058em; padding-bottom: 0.335em;">=</span></span><span id="MJXc-Node-989" class="mjx-mn MJXc-space3"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.39em; padding-bottom: 0.39em;">0</span></span></span></span><span class="MJX_Assistive_MathML" role="presentation"><math xmlns="http://www.w3.org/1998/Math/MathML">
                            <mi>y</mi>
                            <mo>=</mo>
                            <mn>0</mn>
                        </math></span></span>
                <script type="math/tex" id="MathJax-Element-81">y=0</script>.

                Number of Prime implicants of Y which are Not Essential Prime Implicants?
            </p>`,
      image: "",
      options: [
      ],
      answer: "",
      solution: ``
    },
    {
      marks: 2,
      neg: 0,
      type: "MCQ",
      text: `<p>A bit counting machine reads a binary input vector <span class="MathJax_Preview" style="color: inherit;"></span><span id="MathJax-Element-82-Frame" class="mjx-chtml MathJax_CHTML" tabindex="0" data-mathml="<math xmlns=&quot;http://www.w3.org/1998/Math/MathML&quot;><mo stretchy=&quot;false&quot;>(</mo><mi>a</mi><mo>,</mo><mi>b</mi><mo>,</mo><mi>c</mi><mo>,</mo><mi>d</mi><mo stretchy=&quot;false&quot;>)</mo></math>" role="presentation" style="font-size: 113%; position: relative;"><span id="MJXc-Node-990" class="mjx-math" aria-hidden="true"><span id="MJXc-Node-991" class="mjx-mrow"><span id="MJXc-Node-992" class="mjx-mo"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.445em; padding-bottom: 0.611em;">(</span></span><span id="MJXc-Node-993" class="mjx-mi"><span class="mjx-char MJXc-TeX-math-I" style="padding-top: 0.224em; padding-bottom: 0.279em;">a</span></span><span id="MJXc-Node-994" class="mjx-mo"><span class="mjx-char MJXc-TeX-main-R" style="margin-top: -0.163em; padding-bottom: 0.556em;">,</span></span><span id="MJXc-Node-995" class="mjx-mi MJXc-space1"><span class="mjx-char MJXc-TeX-math-I" style="padding-top: 0.445em; padding-bottom: 0.279em;">b</span></span><span id="MJXc-Node-996" class="mjx-mo"><span class="mjx-char MJXc-TeX-main-R" style="margin-top: -0.163em; padding-bottom: 0.556em;">,</span></span><span id="MJXc-Node-997" class="mjx-mi MJXc-space1"><span class="mjx-char MJXc-TeX-math-I" style="padding-top: 0.224em; padding-bottom: 0.279em;">c</span></span><span id="MJXc-Node-998" class="mjx-mo"><span class="mjx-char MJXc-TeX-main-R" style="margin-top: -0.163em; padding-bottom: 0.556em;">,</span></span><span id="MJXc-Node-999" class="mjx-mi MJXc-space1"><span class="mjx-char MJXc-TeX-math-I" style="padding-top: 0.445em; padding-bottom: 0.279em; padding-right: 0.003em;">d</span></span><span id="MJXc-Node-1000" class="mjx-mo"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.445em; padding-bottom: 0.611em;">)</span></span></span></span><span class="MJX_Assistive_MathML" role="presentation"><math xmlns="http://www.w3.org/1998/Math/MathML">
                            <mo stretchy="false">(</mo>
                            <mi>a</mi>
                            <mo>,</mo>
                            <mi>b</mi>
                            <mo>,</mo>
                            <mi>c</mi>
                            <mo>,</mo>
                            <mi>d</mi>
                            <mo stretchy="false">)</mo>
                        </math></span></span>
                <script type="math/tex" id="MathJax-Element-82">(a, b, c, d)</script> and produces a binary number <span class="MathJax_Preview" style="color: inherit;"></span><span id="MathJax-Element-83-Frame" class="mjx-chtml MathJax_CHTML" tabindex="0" data-mathml="<math xmlns=&quot;http://www.w3.org/1998/Math/MathML&quot;><mo stretchy=&quot;false&quot;>(</mo><msub><mtext>S</mtext><mrow class=&quot;MJX-TeXAtom-ORD&quot;><mn>2</mn></mrow></msub><mo>,</mo><msub><mtext>S</mtext><mrow class=&quot;MJX-TeXAtom-ORD&quot;><mn>1</mn></mrow></msub><mo>,</mo><msub><mtext>S</mtext><mrow class=&quot;MJX-TeXAtom-ORD&quot;><mn>0</mn></mrow></msub><mo stretchy=&quot;false&quot;>)</mo></math>" role="presentation" style="font-size: 113%; position: relative;"><span id="MJXc-Node-1001" class="mjx-math" aria-hidden="true"><span id="MJXc-Node-1002" class="mjx-mrow"><span id="MJXc-Node-1003" class="mjx-mo"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.445em; padding-bottom: 0.611em;">(</span></span><span id="MJXc-Node-1004" class="mjx-msubsup"><span class="mjx-base"><span id="MJXc-Node-1005" class="mjx-mtext"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.445em; padding-bottom: 0.39em;">S</span></span></span><span class="mjx-sub" style="font-size: 70.7%; vertical-align: -0.212em; padding-right: 0.071em;"><span id="MJXc-Node-1006" class="mjx-texatom" style=""><span id="MJXc-Node-1007" class="mjx-mrow"><span id="MJXc-Node-1008" class="mjx-mn"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.39em; padding-bottom: 0.335em;">2</span></span></span></span></span></span><span id="MJXc-Node-1009" class="mjx-mo"><span class="mjx-char MJXc-TeX-main-R" style="margin-top: -0.163em; padding-bottom: 0.556em;">,</span></span><span id="MJXc-Node-1010" class="mjx-msubsup MJXc-space1"><span class="mjx-base"><span id="MJXc-Node-1011" class="mjx-mtext"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.445em; padding-bottom: 0.39em;">S</span></span></span><span class="mjx-sub" style="font-size: 70.7%; vertical-align: -0.212em; padding-right: 0.071em;"><span id="MJXc-Node-1012" class="mjx-texatom" style=""><span id="MJXc-Node-1013" class="mjx-mrow"><span id="MJXc-Node-1014" class="mjx-mn"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.39em; padding-bottom: 0.335em;">1</span></span></span></span></span></span><span id="MJXc-Node-1015" class="mjx-mo"><span class="mjx-char MJXc-TeX-main-R" style="margin-top: -0.163em; padding-bottom: 0.556em;">,</span></span><span id="MJXc-Node-1016" class="mjx-msubsup MJXc-space1"><span class="mjx-base"><span id="MJXc-Node-1017" class="mjx-mtext"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.445em; padding-bottom: 0.39em;">S</span></span></span><span class="mjx-sub" style="font-size: 70.7%; vertical-align: -0.212em; padding-right: 0.071em;"><span id="MJXc-Node-1018" class="mjx-texatom" style=""><span id="MJXc-Node-1019" class="mjx-mrow"><span id="MJXc-Node-1020" class="mjx-mn"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.39em; padding-bottom: 0.39em;">0</span></span></span></span></span></span><span id="MJXc-Node-1021" class="mjx-mo"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.445em; padding-bottom: 0.611em;">)</span></span></span></span><span class="MJX_Assistive_MathML" role="presentation"><math xmlns="http://www.w3.org/1998/Math/MathML">
                            <mo stretchy="false">(</mo>
                            <msub>
                                <mtext>S</mtext>
                                <mrow class="MJX-TeXAtom-ORD">
                                    <mn>2</mn>
                                </mrow>
                            </msub>
                            <mo>,</mo>
                            <msub>
                                <mtext>S</mtext>
                                <mrow class="MJX-TeXAtom-ORD">
                                    <mn>1</mn>
                                </mrow>
                            </msub>
                            <mo>,</mo>
                            <msub>
                                <mtext>S</mtext>
                                <mrow class="MJX-TeXAtom-ORD">
                                    <mn>0</mn>
                                </mrow>
                            </msub>
                            <mo stretchy="false">)</mo>
                        </math></span></span>
                <script type="math/tex" id="MathJax-Element-83">(\text{S}_{2},\text{S}_{1},\text{S}_{0})</script> that
                counts the number of <span class="MathJax_Preview" style="color: inherit;"></span><span id="MathJax-Element-84-Frame" class="mjx-chtml MathJax_CHTML" tabindex="0" data-mathml="<math xmlns=&quot;http://www.w3.org/1998/Math/MathML&quot;><msup><mn>1</mn><mo>&amp;#x2032;</mo></msup><mtext>s</mtext></math>" role="presentation" style="font-size: 113%; position: relative;"><span id="MJXc-Node-1022" class="mjx-math" aria-hidden="true"><span id="MJXc-Node-1023" class="mjx-mrow"><span id="MJXc-Node-1024" class="mjx-msup"><span class="mjx-base"><span id="MJXc-Node-1025" class="mjx-mn"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.39em; padding-bottom: 0.335em;">1</span></span></span><span class="mjx-sup" style="font-size: 70.7%; vertical-align: 0.591em; padding-left: 0px; padding-right: 0.071em;"><span id="MJXc-Node-1026" class="mjx-mo" style=""><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.279em; padding-bottom: 0.335em;">′</span></span></span></span><span id="MJXc-Node-1027" class="mjx-mtext"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.169em; padding-bottom: 0.335em;">s</span></span></span></span><span class="MJX_Assistive_MathML" role="presentation"><math xmlns="http://www.w3.org/1998/Math/MathML">
                            <msup>
                                <mn>1</mn>
                                <mo>′</mo>
                            </msup>
                            <mtext>s</mtext>
                        </math></span></span>
                <script type="math/tex" id="MathJax-Element-84">1’\text{s}</script> in the input bits. For example when
                <span class="MathJax_Preview" style="color: inherit;"></span><span id="MathJax-Element-85-Frame" class="mjx-chtml MathJax_CHTML" tabindex="0" data-mathml="<math xmlns=&quot;http://www.w3.org/1998/Math/MathML&quot;><mo stretchy=&quot;false&quot;>(</mo><mi>a</mi><mo>,</mo><mi>b</mi><mo>,</mo><mi>c</mi><mo>,</mo><mi>d</mi><mo stretchy=&quot;false&quot;>)</mo><mo>=</mo><mo stretchy=&quot;false&quot;>(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=&quot;false&quot;>)</mo></math>" role="presentation" style="font-size: 113%; position: relative;"><span id="MJXc-Node-1028" class="mjx-math" aria-hidden="true"><span id="MJXc-Node-1029" class="mjx-mrow"><span id="MJXc-Node-1030" class="mjx-mo"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.445em; padding-bottom: 0.611em;">(</span></span><span id="MJXc-Node-1031" class="mjx-mi"><span class="mjx-char MJXc-TeX-math-I" style="padding-top: 0.224em; padding-bottom: 0.279em;">a</span></span><span id="MJXc-Node-1032" class="mjx-mo"><span class="mjx-char MJXc-TeX-main-R" style="margin-top: -0.163em; padding-bottom: 0.556em;">,</span></span><span id="MJXc-Node-1033" class="mjx-mi MJXc-space1"><span class="mjx-char MJXc-TeX-math-I" style="padding-top: 0.445em; padding-bottom: 0.279em;">b</span></span><span id="MJXc-Node-1034" class="mjx-mo"><span class="mjx-char MJXc-TeX-main-R" style="margin-top: -0.163em; padding-bottom: 0.556em;">,</span></span><span id="MJXc-Node-1035" class="mjx-mi MJXc-space1"><span class="mjx-char MJXc-TeX-math-I" style="padding-top: 0.224em; padding-bottom: 0.279em;">c</span></span><span id="MJXc-Node-1036" class="mjx-mo"><span class="mjx-char MJXc-TeX-main-R" style="margin-top: -0.163em; padding-bottom: 0.556em;">,</span></span><span id="MJXc-Node-1037" class="mjx-mi MJXc-space1"><span class="mjx-char MJXc-TeX-math-I" style="padding-top: 0.445em; padding-bottom: 0.279em; padding-right: 0.003em;">d</span></span><span id="MJXc-Node-1038" class="mjx-mo"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.445em; padding-bottom: 0.611em;">)</span></span><span id="MJXc-Node-1039" class="mjx-mo MJXc-space3"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.058em; padding-bottom: 0.335em;">=</span></span><span id="MJXc-Node-1040" class="mjx-mo MJXc-space3"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.445em; padding-bottom: 0.611em;">(</span></span><span id="MJXc-Node-1041" class="mjx-mn"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.39em; padding-bottom: 0.39em;">0</span></span><span id="MJXc-Node-1042" class="mjx-mo"><span class="mjx-char MJXc-TeX-main-R" style="margin-top: -0.163em; padding-bottom: 0.556em;">,</span></span><span id="MJXc-Node-1043" class="mjx-mn MJXc-space1"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.39em; padding-bottom: 0.335em;">1</span></span><span id="MJXc-Node-1044" class="mjx-mo"><span class="mjx-char MJXc-TeX-main-R" style="margin-top: -0.163em; padding-bottom: 0.556em;">,</span></span><span id="MJXc-Node-1045" class="mjx-mn MJXc-space1"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.39em; padding-bottom: 0.335em;">1</span></span><span id="MJXc-Node-1046" class="mjx-mo"><span class="mjx-char MJXc-TeX-main-R" style="margin-top: -0.163em; padding-bottom: 0.556em;">,</span></span><span id="MJXc-Node-1047" class="mjx-mn MJXc-space1"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.39em; padding-bottom: 0.335em;">1</span></span><span id="MJXc-Node-1048" class="mjx-mo"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.445em; padding-bottom: 0.611em;">)</span></span></span></span><span class="MJX_Assistive_MathML" role="presentation"><math xmlns="http://www.w3.org/1998/Math/MathML">
                            <mo stretchy="false">(</mo>
                            <mi>a</mi>
                            <mo>,</mo>
                            <mi>b</mi>
                            <mo>,</mo>
                            <mi>c</mi>
                            <mo>,</mo>
                            <mi>d</mi>
                            <mo stretchy="false">)</mo>
                            <mo>=</mo>
                            <mo stretchy="false">(</mo>
                            <mn>0</mn>
                            <mo>,</mo>
                            <mn>1</mn>
                            <mo>,</mo>
                            <mn>1</mn>
                            <mo>,</mo>
                            <mn>1</mn>
                            <mo stretchy="false">)</mo>
                        </math></span></span>
                <script type="math/tex" id="MathJax-Element-85">(a, b, c, d)=(0,1,1,1)</script>, we have output <span class="MathJax_Preview" style="color: inherit;"></span><span id="MathJax-Element-86-Frame" class="mjx-chtml MathJax_CHTML" tabindex="0" data-mathml="<math xmlns=&quot;http://www.w3.org/1998/Math/MathML&quot;><mo stretchy=&quot;false&quot;>(</mo><msub><mrow class=&quot;MJX-TeXAtom-ORD&quot;><mi mathvariant=&quot;normal&quot;>S</mi></mrow><mn>2</mn></msub><mo>,</mo><msub><mrow class=&quot;MJX-TeXAtom-ORD&quot;><mi mathvariant=&quot;normal&quot;>S</mi></mrow><mn>1</mn></msub><mo>,</mo><msub><mrow class=&quot;MJX-TeXAtom-ORD&quot;><mi mathvariant=&quot;normal&quot;>S</mi></mrow><mn>0</mn></msub><mo stretchy=&quot;false&quot;>)</mo><mo>=</mo><mo stretchy=&quot;false&quot;>(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=&quot;false&quot;>)</mo></math>" role="presentation" style="font-size: 113%; position: relative;"><span id="MJXc-Node-1049" class="mjx-math" aria-hidden="true"><span id="MJXc-Node-1050" class="mjx-mrow"><span id="MJXc-Node-1051" class="mjx-mo"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.445em; padding-bottom: 0.611em;">(</span></span><span id="MJXc-Node-1052" class="mjx-msubsup"><span class="mjx-base"><span id="MJXc-Node-1053" class="mjx-texatom"><span id="MJXc-Node-1054" class="mjx-mrow"><span id="MJXc-Node-1055" class="mjx-mi"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.445em; padding-bottom: 0.39em;">S</span></span></span></span></span><span class="mjx-sub" style="font-size: 70.7%; vertical-align: -0.212em; padding-right: 0.071em;"><span id="MJXc-Node-1056" class="mjx-mn" style=""><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.39em; padding-bottom: 0.335em;">2</span></span></span></span><span id="MJXc-Node-1057" class="mjx-mo"><span class="mjx-char MJXc-TeX-main-R" style="margin-top: -0.163em; padding-bottom: 0.556em;">,</span></span><span id="MJXc-Node-1058" class="mjx-msubsup MJXc-space1"><span class="mjx-base"><span id="MJXc-Node-1059" class="mjx-texatom"><span id="MJXc-Node-1060" class="mjx-mrow"><span id="MJXc-Node-1061" class="mjx-mi"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.445em; padding-bottom: 0.39em;">S</span></span></span></span></span><span class="mjx-sub" style="font-size: 70.7%; vertical-align: -0.212em; padding-right: 0.071em;"><span id="MJXc-Node-1062" class="mjx-mn" style=""><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.39em; padding-bottom: 0.335em;">1</span></span></span></span><span id="MJXc-Node-1063" class="mjx-mo"><span class="mjx-char MJXc-TeX-main-R" style="margin-top: -0.163em; padding-bottom: 0.556em;">,</span></span><span id="MJXc-Node-1064" class="mjx-msubsup MJXc-space1"><span class="mjx-base"><span id="MJXc-Node-1065" class="mjx-texatom"><span id="MJXc-Node-1066" class="mjx-mrow"><span id="MJXc-Node-1067" class="mjx-mi"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.445em; padding-bottom: 0.39em;">S</span></span></span></span></span><span class="mjx-sub" style="font-size: 70.7%; vertical-align: -0.212em; padding-right: 0.071em;"><span id="MJXc-Node-1068" class="mjx-mn" style=""><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.39em; padding-bottom: 0.39em;">0</span></span></span></span><span id="MJXc-Node-1069" class="mjx-mo"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.445em; padding-bottom: 0.611em;">)</span></span><span id="MJXc-Node-1070" class="mjx-mo MJXc-space3"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.058em; padding-bottom: 0.335em;">=</span></span><span id="MJXc-Node-1071" class="mjx-mo MJXc-space3"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.445em; padding-bottom: 0.611em;">(</span></span><span id="MJXc-Node-1072" class="mjx-mn"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.39em; padding-bottom: 0.39em;">0</span></span><span id="MJXc-Node-1073" class="mjx-mo"><span class="mjx-char MJXc-TeX-main-R" style="margin-top: -0.163em; padding-bottom: 0.556em;">,</span></span><span id="MJXc-Node-1074" class="mjx-mn MJXc-space1"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.39em; padding-bottom: 0.335em;">1</span></span><span id="MJXc-Node-1075" class="mjx-mo"><span class="mjx-char MJXc-TeX-main-R" style="margin-top: -0.163em; padding-bottom: 0.556em;">,</span></span><span id="MJXc-Node-1076" class="mjx-mn MJXc-space1"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.39em; padding-bottom: 0.335em;">1</span></span><span id="MJXc-Node-1077" class="mjx-mo"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.445em; padding-bottom: 0.611em;">)</span></span></span></span><span class="MJX_Assistive_MathML" role="presentation"><math xmlns="http://www.w3.org/1998/Math/MathML">
                            <mo stretchy="false">(</mo>
                            <msub>
                                <mrow class="MJX-TeXAtom-ORD">
                                    <mi mathvariant="normal">S</mi>
                                </mrow>
                                <mn>2</mn>
                            </msub>
                            <mo>,</mo>
                            <msub>
                                <mrow class="MJX-TeXAtom-ORD">
                                    <mi mathvariant="normal">S</mi>
                                </mrow>
                                <mn>1</mn>
                            </msub>
                            <mo>,</mo>
                            <msub>
                                <mrow class="MJX-TeXAtom-ORD">
                                    <mi mathvariant="normal">S</mi>
                                </mrow>
                                <mn>0</mn>
                            </msub>
                            <mo stretchy="false">)</mo>
                            <mo>=</mo>
                            <mo stretchy="false">(</mo>
                            <mn>0</mn>
                            <mo>,</mo>
                            <mn>1</mn>
                            <mo>,</mo>
                            <mn>1</mn>
                            <mo stretchy="false">)</mo>
                        </math></span></span>
                <script type="math/tex" id="MathJax-Element-86">(\mathrm{S}_2, \mathrm{S}_1, \mathrm{S}_0)=(0,1,1)</script>, and when <span class="MathJax_Preview" style="color: inherit;"></span><span id="MathJax-Element-87-Frame" class="mjx-chtml MathJax_CHTML" tabindex="0" data-mathml="<math xmlns=&quot;http://www.w3.org/1998/Math/MathML&quot;><mo stretchy=&quot;false&quot;>(</mo><mi>a</mi><mo>,</mo><mi>b</mi><mo>,</mo><mi>c</mi><mo>,</mo><mi>d</mi><mo stretchy=&quot;false&quot;>)</mo><mo>=</mo><mo stretchy=&quot;false&quot;>(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=&quot;false&quot;>)</mo></math>" role="presentation" style="font-size: 113%; position: relative;"><span id="MJXc-Node-1078" class="mjx-math" aria-hidden="true"><span id="MJXc-Node-1079" class="mjx-mrow"><span id="MJXc-Node-1080" class="mjx-mo"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.445em; padding-bottom: 0.611em;">(</span></span><span id="MJXc-Node-1081" class="mjx-mi"><span class="mjx-char MJXc-TeX-math-I" style="padding-top: 0.224em; padding-bottom: 0.279em;">a</span></span><span id="MJXc-Node-1082" class="mjx-mo"><span class="mjx-char MJXc-TeX-main-R" style="margin-top: -0.163em; padding-bottom: 0.556em;">,</span></span><span id="MJXc-Node-1083" class="mjx-mi MJXc-space1"><span class="mjx-char MJXc-TeX-math-I" style="padding-top: 0.445em; padding-bottom: 0.279em;">b</span></span><span id="MJXc-Node-1084" class="mjx-mo"><span class="mjx-char MJXc-TeX-main-R" style="margin-top: -0.163em; padding-bottom: 0.556em;">,</span></span><span id="MJXc-Node-1085" class="mjx-mi MJXc-space1"><span class="mjx-char MJXc-TeX-math-I" style="padding-top: 0.224em; padding-bottom: 0.279em;">c</span></span><span id="MJXc-Node-1086" class="mjx-mo"><span class="mjx-char MJXc-TeX-main-R" style="margin-top: -0.163em; padding-bottom: 0.556em;">,</span></span><span id="MJXc-Node-1087" class="mjx-mi MJXc-space1"><span class="mjx-char MJXc-TeX-math-I" style="padding-top: 0.445em; padding-bottom: 0.279em; padding-right: 0.003em;">d</span></span><span id="MJXc-Node-1088" class="mjx-mo"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.445em; padding-bottom: 0.611em;">)</span></span><span id="MJXc-Node-1089" class="mjx-mo MJXc-space3"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.058em; padding-bottom: 0.335em;">=</span></span><span id="MJXc-Node-1090" class="mjx-mo MJXc-space3"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.445em; padding-bottom: 0.611em;">(</span></span><span id="MJXc-Node-1091" class="mjx-mn"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.39em; padding-bottom: 0.335em;">1</span></span><span id="MJXc-Node-1092" class="mjx-mo"><span class="mjx-char MJXc-TeX-main-R" style="margin-top: -0.163em; padding-bottom: 0.556em;">,</span></span><span id="MJXc-Node-1093" class="mjx-mn MJXc-space1"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.39em; padding-bottom: 0.39em;">0</span></span><span id="MJXc-Node-1094" class="mjx-mo"><span class="mjx-char MJXc-TeX-main-R" style="margin-top: -0.163em; padding-bottom: 0.556em;">,</span></span><span id="MJXc-Node-1095" class="mjx-mn MJXc-space1"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.39em; padding-bottom: 0.335em;">1</span></span><span id="MJXc-Node-1096" class="mjx-mo"><span class="mjx-char MJXc-TeX-main-R" style="margin-top: -0.163em; padding-bottom: 0.556em;">,</span></span><span id="MJXc-Node-1097" class="mjx-mn MJXc-space1"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.39em; padding-bottom: 0.39em;">0</span></span><span id="MJXc-Node-1098" class="mjx-mo"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.445em; padding-bottom: 0.611em;">)</span></span></span></span><span class="MJX_Assistive_MathML" role="presentation"><math xmlns="http://www.w3.org/1998/Math/MathML">
                            <mo stretchy="false">(</mo>
                            <mi>a</mi>
                            <mo>,</mo>
                            <mi>b</mi>
                            <mo>,</mo>
                            <mi>c</mi>
                            <mo>,</mo>
                            <mi>d</mi>
                            <mo stretchy="false">)</mo>
                            <mo>=</mo>
                            <mo stretchy="false">(</mo>
                            <mn>1</mn>
                            <mo>,</mo>
                            <mn>0</mn>
                            <mo>,</mo>
                            <mn>1</mn>
                            <mo>,</mo>
                            <mn>0</mn>
                            <mo stretchy="false">)</mo>
                        </math></span></span>
                <script type="math/tex" id="MathJax-Element-87">(a,b,c,d)=(1,0,1,0)</script>, we have output <span class="MathJax_Preview" style="color: inherit;"></span><span id="MathJax-Element-88-Frame" class="mjx-chtml MathJax_CHTML" tabindex="0" data-mathml="<math xmlns=&quot;http://www.w3.org/1998/Math/MathML&quot;><mo stretchy=&quot;false&quot;>(</mo><msub><mrow class=&quot;MJX-TeXAtom-ORD&quot;><mi mathvariant=&quot;normal&quot;>S</mi></mrow><mn>2</mn></msub><mo>,</mo><msub><mrow class=&quot;MJX-TeXAtom-ORD&quot;><mi mathvariant=&quot;normal&quot;>S</mi></mrow><mn>1</mn></msub><mo>,</mo><msub><mrow class=&quot;MJX-TeXAtom-ORD&quot;><mi mathvariant=&quot;normal&quot;>S</mi></mrow><mn>0</mn></msub><mo stretchy=&quot;false&quot;>)</mo><mo>=</mo><mo stretchy=&quot;false&quot;>(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=&quot;false&quot;>)</mo></math>" role="presentation" style="font-size: 113%; position: relative;"><span id="MJXc-Node-1099" class="mjx-math" aria-hidden="true"><span id="MJXc-Node-1100" class="mjx-mrow"><span id="MJXc-Node-1101" class="mjx-mo"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.445em; padding-bottom: 0.611em;">(</span></span><span id="MJXc-Node-1102" class="mjx-msubsup"><span class="mjx-base"><span id="MJXc-Node-1103" class="mjx-texatom"><span id="MJXc-Node-1104" class="mjx-mrow"><span id="MJXc-Node-1105" class="mjx-mi"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.445em; padding-bottom: 0.39em;">S</span></span></span></span></span><span class="mjx-sub" style="font-size: 70.7%; vertical-align: -0.212em; padding-right: 0.071em;"><span id="MJXc-Node-1106" class="mjx-mn" style=""><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.39em; padding-bottom: 0.335em;">2</span></span></span></span><span id="MJXc-Node-1107" class="mjx-mo"><span class="mjx-char MJXc-TeX-main-R" style="margin-top: -0.163em; padding-bottom: 0.556em;">,</span></span><span id="MJXc-Node-1108" class="mjx-msubsup MJXc-space1"><span class="mjx-base"><span id="MJXc-Node-1109" class="mjx-texatom"><span id="MJXc-Node-1110" class="mjx-mrow"><span id="MJXc-Node-1111" class="mjx-mi"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.445em; padding-bottom: 0.39em;">S</span></span></span></span></span><span class="mjx-sub" style="font-size: 70.7%; vertical-align: -0.212em; padding-right: 0.071em;"><span id="MJXc-Node-1112" class="mjx-mn" style=""><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.39em; padding-bottom: 0.335em;">1</span></span></span></span><span id="MJXc-Node-1113" class="mjx-mo"><span class="mjx-char MJXc-TeX-main-R" style="margin-top: -0.163em; padding-bottom: 0.556em;">,</span></span><span id="MJXc-Node-1114" class="mjx-msubsup MJXc-space1"><span class="mjx-base"><span id="MJXc-Node-1115" class="mjx-texatom"><span id="MJXc-Node-1116" class="mjx-mrow"><span id="MJXc-Node-1117" class="mjx-mi"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.445em; padding-bottom: 0.39em;">S</span></span></span></span></span><span class="mjx-sub" style="font-size: 70.7%; vertical-align: -0.212em; padding-right: 0.071em;"><span id="MJXc-Node-1118" class="mjx-mn" style=""><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.39em; padding-bottom: 0.39em;">0</span></span></span></span><span id="MJXc-Node-1119" class="mjx-mo"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.445em; padding-bottom: 0.611em;">)</span></span><span id="MJXc-Node-1120" class="mjx-mo MJXc-space3"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.058em; padding-bottom: 0.335em;">=</span></span><span id="MJXc-Node-1121" class="mjx-mo MJXc-space3"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.445em; padding-bottom: 0.611em;">(</span></span><span id="MJXc-Node-1122" class="mjx-mn"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.39em; padding-bottom: 0.39em;">0</span></span><span id="MJXc-Node-1123" class="mjx-mo"><span class="mjx-char MJXc-TeX-main-R" style="margin-top: -0.163em; padding-bottom: 0.556em;">,</span></span><span id="MJXc-Node-1124" class="mjx-mn MJXc-space1"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.39em; padding-bottom: 0.335em;">1</span></span><span id="MJXc-Node-1125" class="mjx-mo"><span class="mjx-char MJXc-TeX-main-R" style="margin-top: -0.163em; padding-bottom: 0.556em;">,</span></span><span id="MJXc-Node-1126" class="mjx-mn MJXc-space1"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.39em; padding-bottom: 0.39em;">0</span></span><span id="MJXc-Node-1127" class="mjx-mo"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.445em; padding-bottom: 0.611em;">)</span></span></span></span><span class="MJX_Assistive_MathML" role="presentation"><math xmlns="http://www.w3.org/1998/Math/MathML">
                            <mo stretchy="false">(</mo>
                            <msub>
                                <mrow class="MJX-TeXAtom-ORD">
                                    <mi mathvariant="normal">S</mi>
                                </mrow>
                                <mn>2</mn>
                            </msub>
                            <mo>,</mo>
                            <msub>
                                <mrow class="MJX-TeXAtom-ORD">
                                    <mi mathvariant="normal">S</mi>
                                </mrow>
                                <mn>1</mn>
                            </msub>
                            <mo>,</mo>
                            <msub>
                                <mrow class="MJX-TeXAtom-ORD">
                                    <mi mathvariant="normal">S</mi>
                                </mrow>
                                <mn>0</mn>
                            </msub>
                            <mo stretchy="false">)</mo>
                            <mo>=</mo>
                            <mo stretchy="false">(</mo>
                            <mn>0</mn>
                            <mo>,</mo>
                            <mn>1</mn>
                            <mo>,</mo>
                            <mn>0</mn>
                            <mo stretchy="false">)</mo>
                        </math></span></span>
                <script type="math/tex" id="MathJax-Element-88">( \mathrm{S}_2, \mathrm{S}_1, \mathrm{S}_0)=(0,1,0)</script>.

                Number of Prime Implicants of <span class="MathJax_Preview" style="color: inherit;"></span><span id="MathJax-Element-89-Frame" class="mjx-chtml MathJax_CHTML" tabindex="0" data-mathml="<math xmlns=&quot;http://www.w3.org/1998/Math/MathML&quot;><msub><mrow class=&quot;MJX-TeXAtom-ORD&quot;><mi mathvariant=&quot;normal&quot;>S</mi></mrow><mn>2</mn></msub><mo>?</mo></math>" role="presentation" style="font-size: 113%; position: relative;"><span id="MJXc-Node-1128" class="mjx-math" aria-hidden="true"><span id="MJXc-Node-1129" class="mjx-mrow"><span id="MJXc-Node-1130" class="mjx-msubsup"><span class="mjx-base"><span id="MJXc-Node-1131" class="mjx-texatom"><span id="MJXc-Node-1132" class="mjx-mrow"><span id="MJXc-Node-1133" class="mjx-mi"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.445em; padding-bottom: 0.39em;">S</span></span></span></span></span><span class="mjx-sub" style="font-size: 70.7%; vertical-align: -0.212em; padding-right: 0.071em;"><span id="MJXc-Node-1134" class="mjx-mn" style=""><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.39em; padding-bottom: 0.335em;">2</span></span></span></span><span id="MJXc-Node-1135" class="mjx-mo"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.445em; padding-bottom: 0.335em;">?</span></span></span></span><span class="MJX_Assistive_MathML" role="presentation"><math xmlns="http://www.w3.org/1998/Math/MathML">
                            <msub>
                                <mrow class="MJX-TeXAtom-ORD">
                                    <mi mathvariant="normal">S</mi>
                                </mrow>
                                <mn>2</mn>
                            </msub>
                            <mo>?</mo>
                        </math></span></span>
                <script type="math/tex" id="MathJax-Element-89">\mathrm{S}_2?</script>
            </p>`,
      image: "",
      options: [
      ],
      answer: "",
      solution: ``
    },
    {
      marks: 2,
      neg: 0,
      type: "MCQ",
      text: `<p>A bit counting machine reads a binary input vector <span class="MathJax_Preview" style="color: inherit;"></span><span id="MathJax-Element-90-Frame" class="mjx-chtml MathJax_CHTML" tabindex="0" data-mathml="<math xmlns=&quot;http://www.w3.org/1998/Math/MathML&quot;><mo stretchy=&quot;false&quot;>(</mo><mi>a</mi><mo>,</mo><mi>b</mi><mo>,</mo><mi>c</mi><mo>,</mo><mi>d</mi><mo stretchy=&quot;false&quot;>)</mo></math>" role="presentation" style="font-size: 113%; position: relative;"><span id="MJXc-Node-1136" class="mjx-math" aria-hidden="true"><span id="MJXc-Node-1137" class="mjx-mrow"><span id="MJXc-Node-1138" class="mjx-mo"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.445em; padding-bottom: 0.611em;">(</span></span><span id="MJXc-Node-1139" class="mjx-mi"><span class="mjx-char MJXc-TeX-math-I" style="padding-top: 0.224em; padding-bottom: 0.279em;">a</span></span><span id="MJXc-Node-1140" class="mjx-mo"><span class="mjx-char MJXc-TeX-main-R" style="margin-top: -0.163em; padding-bottom: 0.556em;">,</span></span><span id="MJXc-Node-1141" class="mjx-mi MJXc-space1"><span class="mjx-char MJXc-TeX-math-I" style="padding-top: 0.445em; padding-bottom: 0.279em;">b</span></span><span id="MJXc-Node-1142" class="mjx-mo"><span class="mjx-char MJXc-TeX-main-R" style="margin-top: -0.163em; padding-bottom: 0.556em;">,</span></span><span id="MJXc-Node-1143" class="mjx-mi MJXc-space1"><span class="mjx-char MJXc-TeX-math-I" style="padding-top: 0.224em; padding-bottom: 0.279em;">c</span></span><span id="MJXc-Node-1144" class="mjx-mo"><span class="mjx-char MJXc-TeX-main-R" style="margin-top: -0.163em; padding-bottom: 0.556em;">,</span></span><span id="MJXc-Node-1145" class="mjx-mi MJXc-space1"><span class="mjx-char MJXc-TeX-math-I" style="padding-top: 0.445em; padding-bottom: 0.279em; padding-right: 0.003em;">d</span></span><span id="MJXc-Node-1146" class="mjx-mo"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.445em; padding-bottom: 0.611em;">)</span></span></span></span><span class="MJX_Assistive_MathML" role="presentation"><math xmlns="http://www.w3.org/1998/Math/MathML">
                            <mo stretchy="false">(</mo>
                            <mi>a</mi>
                            <mo>,</mo>
                            <mi>b</mi>
                            <mo>,</mo>
                            <mi>c</mi>
                            <mo>,</mo>
                            <mi>d</mi>
                            <mo stretchy="false">)</mo>
                        </math></span></span>
                <script type="math/tex" id="MathJax-Element-90">(a, b, c, d)</script> and produces a binary number <span class="MathJax_Preview" style="color: inherit;"></span><span id="MathJax-Element-91-Frame" class="mjx-chtml MathJax_CHTML" tabindex="0" data-mathml="<math xmlns=&quot;http://www.w3.org/1998/Math/MathML&quot;><mo stretchy=&quot;false&quot;>(</mo><msub><mtext>S</mtext><mrow class=&quot;MJX-TeXAtom-ORD&quot;><mn>2</mn></mrow></msub><mo>,</mo><msub><mtext>S</mtext><mrow class=&quot;MJX-TeXAtom-ORD&quot;><mn>1</mn></mrow></msub><mo>,</mo><msub><mtext>S</mtext><mrow class=&quot;MJX-TeXAtom-ORD&quot;><mn>0</mn></mrow></msub><mo stretchy=&quot;false&quot;>)</mo></math>" role="presentation" style="font-size: 113%; position: relative;"><span id="MJXc-Node-1147" class="mjx-math" aria-hidden="true"><span id="MJXc-Node-1148" class="mjx-mrow"><span id="MJXc-Node-1149" class="mjx-mo"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.445em; padding-bottom: 0.611em;">(</span></span><span id="MJXc-Node-1150" class="mjx-msubsup"><span class="mjx-base"><span id="MJXc-Node-1151" class="mjx-mtext"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.445em; padding-bottom: 0.39em;">S</span></span></span><span class="mjx-sub" style="font-size: 70.7%; vertical-align: -0.212em; padding-right: 0.071em;"><span id="MJXc-Node-1152" class="mjx-texatom" style=""><span id="MJXc-Node-1153" class="mjx-mrow"><span id="MJXc-Node-1154" class="mjx-mn"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.39em; padding-bottom: 0.335em;">2</span></span></span></span></span></span><span id="MJXc-Node-1155" class="mjx-mo"><span class="mjx-char MJXc-TeX-main-R" style="margin-top: -0.163em; padding-bottom: 0.556em;">,</span></span><span id="MJXc-Node-1156" class="mjx-msubsup MJXc-space1"><span class="mjx-base"><span id="MJXc-Node-1157" class="mjx-mtext"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.445em; padding-bottom: 0.39em;">S</span></span></span><span class="mjx-sub" style="font-size: 70.7%; vertical-align: -0.212em; padding-right: 0.071em;"><span id="MJXc-Node-1158" class="mjx-texatom" style=""><span id="MJXc-Node-1159" class="mjx-mrow"><span id="MJXc-Node-1160" class="mjx-mn"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.39em; padding-bottom: 0.335em;">1</span></span></span></span></span></span><span id="MJXc-Node-1161" class="mjx-mo"><span class="mjx-char MJXc-TeX-main-R" style="margin-top: -0.163em; padding-bottom: 0.556em;">,</span></span><span id="MJXc-Node-1162" class="mjx-msubsup MJXc-space1"><span class="mjx-base"><span id="MJXc-Node-1163" class="mjx-mtext"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.445em; padding-bottom: 0.39em;">S</span></span></span><span class="mjx-sub" style="font-size: 70.7%; vertical-align: -0.212em; padding-right: 0.071em;"><span id="MJXc-Node-1164" class="mjx-texatom" style=""><span id="MJXc-Node-1165" class="mjx-mrow"><span id="MJXc-Node-1166" class="mjx-mn"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.39em; padding-bottom: 0.39em;">0</span></span></span></span></span></span><span id="MJXc-Node-1167" class="mjx-mo"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.445em; padding-bottom: 0.611em;">)</span></span></span></span><span class="MJX_Assistive_MathML" role="presentation"><math xmlns="http://www.w3.org/1998/Math/MathML">
                            <mo stretchy="false">(</mo>
                            <msub>
                                <mtext>S</mtext>
                                <mrow class="MJX-TeXAtom-ORD">
                                    <mn>2</mn>
                                </mrow>
                            </msub>
                            <mo>,</mo>
                            <msub>
                                <mtext>S</mtext>
                                <mrow class="MJX-TeXAtom-ORD">
                                    <mn>1</mn>
                                </mrow>
                            </msub>
                            <mo>,</mo>
                            <msub>
                                <mtext>S</mtext>
                                <mrow class="MJX-TeXAtom-ORD">
                                    <mn>0</mn>
                                </mrow>
                            </msub>
                            <mo stretchy="false">)</mo>
                        </math></span></span>
                <script type="math/tex" id="MathJax-Element-91">(\text{S}_{2},\text{S}_{1},\text{S}_{0})</script> that
                counts the number of <span class="MathJax_Preview" style="color: inherit;"></span><span id="MathJax-Element-92-Frame" class="mjx-chtml MathJax_CHTML" tabindex="0" data-mathml="<math xmlns=&quot;http://www.w3.org/1998/Math/MathML&quot;><msup><mn>1</mn><mo>&amp;#x2032;</mo></msup><mtext>s</mtext></math>" role="presentation" style="font-size: 113%; position: relative;"><span id="MJXc-Node-1168" class="mjx-math" aria-hidden="true"><span id="MJXc-Node-1169" class="mjx-mrow"><span id="MJXc-Node-1170" class="mjx-msup"><span class="mjx-base"><span id="MJXc-Node-1171" class="mjx-mn"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.39em; padding-bottom: 0.335em;">1</span></span></span><span class="mjx-sup" style="font-size: 70.7%; vertical-align: 0.591em; padding-left: 0px; padding-right: 0.071em;"><span id="MJXc-Node-1172" class="mjx-mo" style=""><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.279em; padding-bottom: 0.335em;">′</span></span></span></span><span id="MJXc-Node-1173" class="mjx-mtext"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.169em; padding-bottom: 0.335em;">s</span></span></span></span><span class="MJX_Assistive_MathML" role="presentation"><math xmlns="http://www.w3.org/1998/Math/MathML">
                            <msup>
                                <mn>1</mn>
                                <mo>′</mo>
                            </msup>
                            <mtext>s</mtext>
                        </math></span></span>
                <script type="math/tex" id="MathJax-Element-92">1’\text{s}</script> in the input bits. For example when
                <span class="MathJax_Preview" style="color: inherit;"></span><span id="MathJax-Element-93-Frame" class="mjx-chtml MathJax_CHTML" tabindex="0" data-mathml="<math xmlns=&quot;http://www.w3.org/1998/Math/MathML&quot;><mo stretchy=&quot;false&quot;>(</mo><mi>a</mi><mo>,</mo><mi>b</mi><mo>,</mo><mi>c</mi><mo>,</mo><mi>d</mi><mo stretchy=&quot;false&quot;>)</mo><mo>=</mo><mo stretchy=&quot;false&quot;>(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=&quot;false&quot;>)</mo></math>" role="presentation" style="font-size: 113%; position: relative;"><span id="MJXc-Node-1174" class="mjx-math" aria-hidden="true"><span id="MJXc-Node-1175" class="mjx-mrow"><span id="MJXc-Node-1176" class="mjx-mo"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.445em; padding-bottom: 0.611em;">(</span></span><span id="MJXc-Node-1177" class="mjx-mi"><span class="mjx-char MJXc-TeX-math-I" style="padding-top: 0.224em; padding-bottom: 0.279em;">a</span></span><span id="MJXc-Node-1178" class="mjx-mo"><span class="mjx-char MJXc-TeX-main-R" style="margin-top: -0.163em; padding-bottom: 0.556em;">,</span></span><span id="MJXc-Node-1179" class="mjx-mi MJXc-space1"><span class="mjx-char MJXc-TeX-math-I" style="padding-top: 0.445em; padding-bottom: 0.279em;">b</span></span><span id="MJXc-Node-1180" class="mjx-mo"><span class="mjx-char MJXc-TeX-main-R" style="margin-top: -0.163em; padding-bottom: 0.556em;">,</span></span><span id="MJXc-Node-1181" class="mjx-mi MJXc-space1"><span class="mjx-char MJXc-TeX-math-I" style="padding-top: 0.224em; padding-bottom: 0.279em;">c</span></span><span id="MJXc-Node-1182" class="mjx-mo"><span class="mjx-char MJXc-TeX-main-R" style="margin-top: -0.163em; padding-bottom: 0.556em;">,</span></span><span id="MJXc-Node-1183" class="mjx-mi MJXc-space1"><span class="mjx-char MJXc-TeX-math-I" style="padding-top: 0.445em; padding-bottom: 0.279em; padding-right: 0.003em;">d</span></span><span id="MJXc-Node-1184" class="mjx-mo"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.445em; padding-bottom: 0.611em;">)</span></span><span id="MJXc-Node-1185" class="mjx-mo MJXc-space3"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.058em; padding-bottom: 0.335em;">=</span></span><span id="MJXc-Node-1186" class="mjx-mo MJXc-space3"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.445em; padding-bottom: 0.611em;">(</span></span><span id="MJXc-Node-1187" class="mjx-mn"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.39em; padding-bottom: 0.39em;">0</span></span><span id="MJXc-Node-1188" class="mjx-mo"><span class="mjx-char MJXc-TeX-main-R" style="margin-top: -0.163em; padding-bottom: 0.556em;">,</span></span><span id="MJXc-Node-1189" class="mjx-mn MJXc-space1"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.39em; padding-bottom: 0.335em;">1</span></span><span id="MJXc-Node-1190" class="mjx-mo"><span class="mjx-char MJXc-TeX-main-R" style="margin-top: -0.163em; padding-bottom: 0.556em;">,</span></span><span id="MJXc-Node-1191" class="mjx-mn MJXc-space1"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.39em; padding-bottom: 0.335em;">1</span></span><span id="MJXc-Node-1192" class="mjx-mo"><span class="mjx-char MJXc-TeX-main-R" style="margin-top: -0.163em; padding-bottom: 0.556em;">,</span></span><span id="MJXc-Node-1193" class="mjx-mn MJXc-space1"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.39em; padding-bottom: 0.335em;">1</span></span><span id="MJXc-Node-1194" class="mjx-mo"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.445em; padding-bottom: 0.611em;">)</span></span></span></span><span class="MJX_Assistive_MathML" role="presentation"><math xmlns="http://www.w3.org/1998/Math/MathML">
                            <mo stretchy="false">(</mo>
                            <mi>a</mi>
                            <mo>,</mo>
                            <mi>b</mi>
                            <mo>,</mo>
                            <mi>c</mi>
                            <mo>,</mo>
                            <mi>d</mi>
                            <mo stretchy="false">)</mo>
                            <mo>=</mo>
                            <mo stretchy="false">(</mo>
                            <mn>0</mn>
                            <mo>,</mo>
                            <mn>1</mn>
                            <mo>,</mo>
                            <mn>1</mn>
                            <mo>,</mo>
                            <mn>1</mn>
                            <mo stretchy="false">)</mo>
                        </math></span></span>
                <script type="math/tex" id="MathJax-Element-93">(a, b, c, d)=(0,1,1,1)</script>, we have output <span class="MathJax_Preview" style="color: inherit;"></span><span id="MathJax-Element-94-Frame" class="mjx-chtml MathJax_CHTML" tabindex="0" data-mathml="<math xmlns=&quot;http://www.w3.org/1998/Math/MathML&quot;><mo stretchy=&quot;false&quot;>(</mo><msub><mtext>S</mtext><mrow class=&quot;MJX-TeXAtom-ORD&quot;><mn>2</mn></mrow></msub><mo>,</mo><msub><mtext>S</mtext><mrow class=&quot;MJX-TeXAtom-ORD&quot;><mn>1</mn></mrow></msub><mo>,</mo><msub><mtext>S</mtext><mrow class=&quot;MJX-TeXAtom-ORD&quot;><mn>0</mn></mrow></msub><mo stretchy=&quot;false&quot;>)</mo><mo>=</mo><mo stretchy=&quot;false&quot;>(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=&quot;false&quot;>)</mo></math>" role="presentation" style="font-size: 113%; position: relative;"><span id="MJXc-Node-1195" class="mjx-math" aria-hidden="true"><span id="MJXc-Node-1196" class="mjx-mrow"><span id="MJXc-Node-1197" class="mjx-mo"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.445em; padding-bottom: 0.611em;">(</span></span><span id="MJXc-Node-1198" class="mjx-msubsup"><span class="mjx-base"><span id="MJXc-Node-1199" class="mjx-mtext"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.445em; padding-bottom: 0.39em;">S</span></span></span><span class="mjx-sub" style="font-size: 70.7%; vertical-align: -0.212em; padding-right: 0.071em;"><span id="MJXc-Node-1200" class="mjx-texatom" style=""><span id="MJXc-Node-1201" class="mjx-mrow"><span id="MJXc-Node-1202" class="mjx-mn"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.39em; padding-bottom: 0.335em;">2</span></span></span></span></span></span><span id="MJXc-Node-1203" class="mjx-mo"><span class="mjx-char MJXc-TeX-main-R" style="margin-top: -0.163em; padding-bottom: 0.556em;">,</span></span><span id="MJXc-Node-1204" class="mjx-msubsup MJXc-space1"><span class="mjx-base"><span id="MJXc-Node-1205" class="mjx-mtext"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.445em; padding-bottom: 0.39em;">S</span></span></span><span class="mjx-sub" style="font-size: 70.7%; vertical-align: -0.212em; padding-right: 0.071em;"><span id="MJXc-Node-1206" class="mjx-texatom" style=""><span id="MJXc-Node-1207" class="mjx-mrow"><span id="MJXc-Node-1208" class="mjx-mn"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.39em; padding-bottom: 0.335em;">1</span></span></span></span></span></span><span id="MJXc-Node-1209" class="mjx-mo"><span class="mjx-char MJXc-TeX-main-R" style="margin-top: -0.163em; padding-bottom: 0.556em;">,</span></span><span id="MJXc-Node-1210" class="mjx-msubsup MJXc-space1"><span class="mjx-base"><span id="MJXc-Node-1211" class="mjx-mtext"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.445em; padding-bottom: 0.39em;">S</span></span></span><span class="mjx-sub" style="font-size: 70.7%; vertical-align: -0.212em; padding-right: 0.071em;"><span id="MJXc-Node-1212" class="mjx-texatom" style=""><span id="MJXc-Node-1213" class="mjx-mrow"><span id="MJXc-Node-1214" class="mjx-mn"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.39em; padding-bottom: 0.39em;">0</span></span></span></span></span></span><span id="MJXc-Node-1215" class="mjx-mo"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.445em; padding-bottom: 0.611em;">)</span></span><span id="MJXc-Node-1216" class="mjx-mo MJXc-space3"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.058em; padding-bottom: 0.335em;">=</span></span><span id="MJXc-Node-1217" class="mjx-mo MJXc-space3"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.445em; padding-bottom: 0.611em;">(</span></span><span id="MJXc-Node-1218" class="mjx-mn"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.39em; padding-bottom: 0.39em;">0</span></span><span id="MJXc-Node-1219" class="mjx-mo"><span class="mjx-char MJXc-TeX-main-R" style="margin-top: -0.163em; padding-bottom: 0.556em;">,</span></span><span id="MJXc-Node-1220" class="mjx-mn MJXc-space1"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.39em; padding-bottom: 0.335em;">1</span></span><span id="MJXc-Node-1221" class="mjx-mo"><span class="mjx-char MJXc-TeX-main-R" style="margin-top: -0.163em; padding-bottom: 0.556em;">,</span></span><span id="MJXc-Node-1222" class="mjx-mn MJXc-space1"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.39em; padding-bottom: 0.335em;">1</span></span><span id="MJXc-Node-1223" class="mjx-mo"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.445em; padding-bottom: 0.611em;">)</span></span></span></span><span class="MJX_Assistive_MathML" role="presentation"><math xmlns="http://www.w3.org/1998/Math/MathML">
                            <mo stretchy="false">(</mo>
                            <msub>
                                <mtext>S</mtext>
                                <mrow class="MJX-TeXAtom-ORD">
                                    <mn>2</mn>
                                </mrow>
                            </msub>
                            <mo>,</mo>
                            <msub>
                                <mtext>S</mtext>
                                <mrow class="MJX-TeXAtom-ORD">
                                    <mn>1</mn>
                                </mrow>
                            </msub>
                            <mo>,</mo>
                            <msub>
                                <mtext>S</mtext>
                                <mrow class="MJX-TeXAtom-ORD">
                                    <mn>0</mn>
                                </mrow>
                            </msub>
                            <mo stretchy="false">)</mo>
                            <mo>=</mo>
                            <mo stretchy="false">(</mo>
                            <mn>0</mn>
                            <mo>,</mo>
                            <mn>1</mn>
                            <mo>,</mo>
                            <mn>1</mn>
                            <mo stretchy="false">)</mo>
                        </math></span></span>
                <script type="math/tex" id="MathJax-Element-94">(\text{S}_{2},\text{S}_{1},\text{S}_{0})=(0,1,1)</script>, and when <span class="MathJax_Preview" style="color: inherit;"></span><span id="MathJax-Element-95-Frame" class="mjx-chtml MathJax_CHTML" tabindex="0" data-mathml="<math xmlns=&quot;http://www.w3.org/1998/Math/MathML&quot;><mo stretchy=&quot;false&quot;>(</mo><mi>a</mi><mo>,</mo><mi>b</mi><mo>,</mo><mi>c</mi><mo>,</mo><mi>d</mi><mo stretchy=&quot;false&quot;>)</mo><mo>=</mo><mo stretchy=&quot;false&quot;>(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=&quot;false&quot;>)</mo></math>" role="presentation" style="font-size: 113%; position: relative;"><span id="MJXc-Node-1224" class="mjx-math" aria-hidden="true"><span id="MJXc-Node-1225" class="mjx-mrow"><span id="MJXc-Node-1226" class="mjx-mo"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.445em; padding-bottom: 0.611em;">(</span></span><span id="MJXc-Node-1227" class="mjx-mi"><span class="mjx-char MJXc-TeX-math-I" style="padding-top: 0.224em; padding-bottom: 0.279em;">a</span></span><span id="MJXc-Node-1228" class="mjx-mo"><span class="mjx-char MJXc-TeX-main-R" style="margin-top: -0.163em; padding-bottom: 0.556em;">,</span></span><span id="MJXc-Node-1229" class="mjx-mi MJXc-space1"><span class="mjx-char MJXc-TeX-math-I" style="padding-top: 0.445em; padding-bottom: 0.279em;">b</span></span><span id="MJXc-Node-1230" class="mjx-mo"><span class="mjx-char MJXc-TeX-main-R" style="margin-top: -0.163em; padding-bottom: 0.556em;">,</span></span><span id="MJXc-Node-1231" class="mjx-mi MJXc-space1"><span class="mjx-char MJXc-TeX-math-I" style="padding-top: 0.224em; padding-bottom: 0.279em;">c</span></span><span id="MJXc-Node-1232" class="mjx-mo"><span class="mjx-char MJXc-TeX-main-R" style="margin-top: -0.163em; padding-bottom: 0.556em;">,</span></span><span id="MJXc-Node-1233" class="mjx-mi MJXc-space1"><span class="mjx-char MJXc-TeX-math-I" style="padding-top: 0.445em; padding-bottom: 0.279em; padding-right: 0.003em;">d</span></span><span id="MJXc-Node-1234" class="mjx-mo"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.445em; padding-bottom: 0.611em;">)</span></span><span id="MJXc-Node-1235" class="mjx-mo MJXc-space3"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.058em; padding-bottom: 0.335em;">=</span></span><span id="MJXc-Node-1236" class="mjx-mo MJXc-space3"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.445em; padding-bottom: 0.611em;">(</span></span><span id="MJXc-Node-1237" class="mjx-mn"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.39em; padding-bottom: 0.335em;">1</span></span><span id="MJXc-Node-1238" class="mjx-mo"><span class="mjx-char MJXc-TeX-main-R" style="margin-top: -0.163em; padding-bottom: 0.556em;">,</span></span><span id="MJXc-Node-1239" class="mjx-mn MJXc-space1"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.39em; padding-bottom: 0.39em;">0</span></span><span id="MJXc-Node-1240" class="mjx-mo"><span class="mjx-char MJXc-TeX-main-R" style="margin-top: -0.163em; padding-bottom: 0.556em;">,</span></span><span id="MJXc-Node-1241" class="mjx-mn MJXc-space1"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.39em; padding-bottom: 0.335em;">1</span></span><span id="MJXc-Node-1242" class="mjx-mo"><span class="mjx-char MJXc-TeX-main-R" style="margin-top: -0.163em; padding-bottom: 0.556em;">,</span></span><span id="MJXc-Node-1243" class="mjx-mn MJXc-space1"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.39em; padding-bottom: 0.39em;">0</span></span><span id="MJXc-Node-1244" class="mjx-mo"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.445em; padding-bottom: 0.611em;">)</span></span></span></span><span class="MJX_Assistive_MathML" role="presentation"><math xmlns="http://www.w3.org/1998/Math/MathML">
                            <mo stretchy="false">(</mo>
                            <mi>a</mi>
                            <mo>,</mo>
                            <mi>b</mi>
                            <mo>,</mo>
                            <mi>c</mi>
                            <mo>,</mo>
                            <mi>d</mi>
                            <mo stretchy="false">)</mo>
                            <mo>=</mo>
                            <mo stretchy="false">(</mo>
                            <mn>1</mn>
                            <mo>,</mo>
                            <mn>0</mn>
                            <mo>,</mo>
                            <mn>1</mn>
                            <mo>,</mo>
                            <mn>0</mn>
                            <mo stretchy="false">)</mo>
                        </math></span></span>
                <script type="math/tex" id="MathJax-Element-95">(a, b, c, d)=(1,0,1,0)</script>, we have output <span class="MathJax_Preview" style="color: inherit;"></span><span id="MathJax-Element-96-Frame" class="mjx-chtml MathJax_CHTML" tabindex="0" data-mathml="<math xmlns=&quot;http://www.w3.org/1998/Math/MathML&quot;><mo stretchy=&quot;false&quot;>(</mo><msub><mtext>S</mtext><mrow class=&quot;MJX-TeXAtom-ORD&quot;><mn>2</mn></mrow></msub><mo>,</mo><msub><mtext>S</mtext><mrow class=&quot;MJX-TeXAtom-ORD&quot;><mn>1</mn></mrow></msub><mo>,</mo><msub><mtext>S</mtext><mrow class=&quot;MJX-TeXAtom-ORD&quot;><mn>0</mn></mrow></msub><mo stretchy=&quot;false&quot;>)</mo><mo>=</mo><mo stretchy=&quot;false&quot;>(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=&quot;false&quot;>)</mo></math>" role="presentation" style="font-size: 113%; position: relative;"><span id="MJXc-Node-1245" class="mjx-math" aria-hidden="true"><span id="MJXc-Node-1246" class="mjx-mrow"><span id="MJXc-Node-1247" class="mjx-mo"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.445em; padding-bottom: 0.611em;">(</span></span><span id="MJXc-Node-1248" class="mjx-msubsup"><span class="mjx-base"><span id="MJXc-Node-1249" class="mjx-mtext"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.445em; padding-bottom: 0.39em;">S</span></span></span><span class="mjx-sub" style="font-size: 70.7%; vertical-align: -0.212em; padding-right: 0.071em;"><span id="MJXc-Node-1250" class="mjx-texatom" style=""><span id="MJXc-Node-1251" class="mjx-mrow"><span id="MJXc-Node-1252" class="mjx-mn"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.39em; padding-bottom: 0.335em;">2</span></span></span></span></span></span><span id="MJXc-Node-1253" class="mjx-mo"><span class="mjx-char MJXc-TeX-main-R" style="margin-top: -0.163em; padding-bottom: 0.556em;">,</span></span><span id="MJXc-Node-1254" class="mjx-msubsup MJXc-space1"><span class="mjx-base"><span id="MJXc-Node-1255" class="mjx-mtext"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.445em; padding-bottom: 0.39em;">S</span></span></span><span class="mjx-sub" style="font-size: 70.7%; vertical-align: -0.212em; padding-right: 0.071em;"><span id="MJXc-Node-1256" class="mjx-texatom" style=""><span id="MJXc-Node-1257" class="mjx-mrow"><span id="MJXc-Node-1258" class="mjx-mn"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.39em; padding-bottom: 0.335em;">1</span></span></span></span></span></span><span id="MJXc-Node-1259" class="mjx-mo"><span class="mjx-char MJXc-TeX-main-R" style="margin-top: -0.163em; padding-bottom: 0.556em;">,</span></span><span id="MJXc-Node-1260" class="mjx-msubsup MJXc-space1"><span class="mjx-base"><span id="MJXc-Node-1261" class="mjx-mtext"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.445em; padding-bottom: 0.39em;">S</span></span></span><span class="mjx-sub" style="font-size: 70.7%; vertical-align: -0.212em; padding-right: 0.071em;"><span id="MJXc-Node-1262" class="mjx-texatom" style=""><span id="MJXc-Node-1263" class="mjx-mrow"><span id="MJXc-Node-1264" class="mjx-mn"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.39em; padding-bottom: 0.39em;">0</span></span></span></span></span></span><span id="MJXc-Node-1265" class="mjx-mo"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.445em; padding-bottom: 0.611em;">)</span></span><span id="MJXc-Node-1266" class="mjx-mo MJXc-space3"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.058em; padding-bottom: 0.335em;">=</span></span><span id="MJXc-Node-1267" class="mjx-mo MJXc-space3"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.445em; padding-bottom: 0.611em;">(</span></span><span id="MJXc-Node-1268" class="mjx-mn"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.39em; padding-bottom: 0.39em;">0</span></span><span id="MJXc-Node-1269" class="mjx-mo"><span class="mjx-char MJXc-TeX-main-R" style="margin-top: -0.163em; padding-bottom: 0.556em;">,</span></span><span id="MJXc-Node-1270" class="mjx-mn MJXc-space1"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.39em; padding-bottom: 0.335em;">1</span></span><span id="MJXc-Node-1271" class="mjx-mo"><span class="mjx-char MJXc-TeX-main-R" style="margin-top: -0.163em; padding-bottom: 0.556em;">,</span></span><span id="MJXc-Node-1272" class="mjx-mn MJXc-space1"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.39em; padding-bottom: 0.39em;">0</span></span><span id="MJXc-Node-1273" class="mjx-mo"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.445em; padding-bottom: 0.611em;">)</span></span></span></span><span class="MJX_Assistive_MathML" role="presentation"><math xmlns="http://www.w3.org/1998/Math/MathML">
                            <mo stretchy="false">(</mo>
                            <msub>
                                <mtext>S</mtext>
                                <mrow class="MJX-TeXAtom-ORD">
                                    <mn>2</mn>
                                </mrow>
                            </msub>
                            <mo>,</mo>
                            <msub>
                                <mtext>S</mtext>
                                <mrow class="MJX-TeXAtom-ORD">
                                    <mn>1</mn>
                                </mrow>
                            </msub>
                            <mo>,</mo>
                            <msub>
                                <mtext>S</mtext>
                                <mrow class="MJX-TeXAtom-ORD">
                                    <mn>0</mn>
                                </mrow>
                            </msub>
                            <mo stretchy="false">)</mo>
                            <mo>=</mo>
                            <mo stretchy="false">(</mo>
                            <mn>0</mn>
                            <mo>,</mo>
                            <mn>1</mn>
                            <mo>,</mo>
                            <mn>0</mn>
                            <mo stretchy="false">)</mo>
                        </math></span></span>
                <script type="math/tex" id="MathJax-Element-96">(\text{S}_{2},\text{S}_{1},\text{S}_{0})=(0,1,0)</script>.

                Let <span class="MathJax_Preview" style="color: inherit;"></span><span id="MathJax-Element-97-Frame" class="mjx-chtml MathJax_CHTML" tabindex="0" data-mathml="<math xmlns=&quot;http://www.w3.org/1998/Math/MathML&quot;><mrow class=&quot;MJX-TeXAtom-ORD&quot;><mi mathvariant=&quot;normal&quot;>Y</mi><mo stretchy=&quot;false&quot;>(</mo><mi mathvariant=&quot;normal&quot;>a</mi><mo>,</mo><mi mathvariant=&quot;normal&quot;>b</mi><mo>,</mo><mi mathvariant=&quot;normal&quot;>c</mi><mo>,</mo><mi mathvariant=&quot;normal&quot;>d</mi><mo stretchy=&quot;false&quot;>)</mo></mrow></math>" role="presentation" style="font-size: 113%; position: relative;"><span id="MJXc-Node-1274" class="mjx-math" aria-hidden="true"><span id="MJXc-Node-1275" class="mjx-mrow"><span id="MJXc-Node-1276" class="mjx-texatom"><span id="MJXc-Node-1277" class="mjx-mrow"><span id="MJXc-Node-1278" class="mjx-mi"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.39em; padding-bottom: 0.335em;">Y</span></span><span id="MJXc-Node-1279" class="mjx-mo"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.445em; padding-bottom: 0.611em;">(</span></span><span id="MJXc-Node-1280" class="mjx-mi"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.169em; padding-bottom: 0.335em;">a</span></span><span id="MJXc-Node-1281" class="mjx-mo"><span class="mjx-char MJXc-TeX-main-R" style="margin-top: -0.163em; padding-bottom: 0.556em;">,</span></span><span id="MJXc-Node-1282" class="mjx-mi MJXc-space1"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.39em; padding-bottom: 0.335em;">b</span></span><span id="MJXc-Node-1283" class="mjx-mo"><span class="mjx-char MJXc-TeX-main-R" style="margin-top: -0.163em; padding-bottom: 0.556em;">,</span></span><span id="MJXc-Node-1284" class="mjx-mi MJXc-space1"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.169em; padding-bottom: 0.335em;">c</span></span><span id="MJXc-Node-1285" class="mjx-mo"><span class="mjx-char MJXc-TeX-main-R" style="margin-top: -0.163em; padding-bottom: 0.556em;">,</span></span><span id="MJXc-Node-1286" class="mjx-mi MJXc-space1"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.39em; padding-bottom: 0.335em;">d</span></span><span id="MJXc-Node-1287" class="mjx-mo"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.445em; padding-bottom: 0.611em;">)</span></span></span></span></span></span><span class="MJX_Assistive_MathML" role="presentation"><math xmlns="http://www.w3.org/1998/Math/MathML">
                            <mrow class="MJX-TeXAtom-ORD">
                                <mi mathvariant="normal">Y</mi>
                                <mo stretchy="false">(</mo>
                                <mi mathvariant="normal">a</mi>
                                <mo>,</mo>
                                <mi mathvariant="normal">b</mi>
                                <mo>,</mo>
                                <mi mathvariant="normal">c</mi>
                                <mo>,</mo>
                                <mi mathvariant="normal">d</mi>
                                <mo stretchy="false">)</mo>
                            </mrow>
                        </math></span></span>
                <script type="math/tex" id="MathJax-Element-97">\mathrm{Y(a,b,c,d)}</script> be a boolean function such
                that <span class="MathJax_Preview" style="color: inherit;"></span><span id="MathJax-Element-98-Frame" class="mjx-chtml MathJax_CHTML" tabindex="0" data-mathml="<math xmlns=&quot;http://www.w3.org/1998/Math/MathML&quot;><mi>Y</mi></math>" role="presentation" style="font-size: 113%; position: relative;"><span id="MJXc-Node-1288" class="mjx-math" aria-hidden="true"><span id="MJXc-Node-1289" class="mjx-mrow"><span id="MJXc-Node-1290" class="mjx-mi"><span class="mjx-char MJXc-TeX-math-I" style="padding-top: 0.445em; padding-bottom: 0.279em; padding-right: 0.182em;">Y</span></span></span></span><span class="MJX_Assistive_MathML" role="presentation"><math xmlns="http://www.w3.org/1998/Math/MathML">
                            <mi>Y</mi>
                        </math></span></span>
                <script type="math/tex" id="MathJax-Element-98">Y</script> is <span class="MathJax_Preview" style="color: inherit;"></span><span id="MathJax-Element-99-Frame" class="mjx-chtml MathJax_CHTML" tabindex="0" data-mathml="<math xmlns=&quot;http://www.w3.org/1998/Math/MathML&quot;><mn>1</mn></math>" role="presentation" style="font-size: 113%; position: relative;"><span id="MJXc-Node-1291" class="mjx-math" aria-hidden="true"><span id="MJXc-Node-1292" class="mjx-mrow"><span id="MJXc-Node-1293" class="mjx-mn"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.39em; padding-bottom: 0.335em;">1</span></span></span></span><span class="MJX_Assistive_MathML" role="presentation"><math xmlns="http://www.w3.org/1998/Math/MathML">
                            <mn>1</mn>
                        </math></span></span>
                <script type="math/tex" id="MathJax-Element-99">1</script> for any input combination <span class="MathJax_Preview" style="color: inherit;"></span><span id="MathJax-Element-100-Frame" class="mjx-chtml MathJax_CHTML" tabindex="0" data-mathml="<math xmlns=&quot;http://www.w3.org/1998/Math/MathML&quot;><mo stretchy=&quot;false&quot;>(</mo><mi>a</mi><mo>,</mo><mi>b</mi><mo>,</mo><mi>c</mi><mo>,</mo><mi>d</mi><mo stretchy=&quot;false&quot;>)</mo></math>" role="presentation" style="font-size: 113%; position: relative;"><span id="MJXc-Node-1294" class="mjx-math" aria-hidden="true"><span id="MJXc-Node-1295" class="mjx-mrow"><span id="MJXc-Node-1296" class="mjx-mo"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.445em; padding-bottom: 0.611em;">(</span></span><span id="MJXc-Node-1297" class="mjx-mi"><span class="mjx-char MJXc-TeX-math-I" style="padding-top: 0.224em; padding-bottom: 0.279em;">a</span></span><span id="MJXc-Node-1298" class="mjx-mo"><span class="mjx-char MJXc-TeX-main-R" style="margin-top: -0.163em; padding-bottom: 0.556em;">,</span></span><span id="MJXc-Node-1299" class="mjx-mi MJXc-space1"><span class="mjx-char MJXc-TeX-math-I" style="padding-top: 0.445em; padding-bottom: 0.279em;">b</span></span><span id="MJXc-Node-1300" class="mjx-mo"><span class="mjx-char MJXc-TeX-main-R" style="margin-top: -0.163em; padding-bottom: 0.556em;">,</span></span><span id="MJXc-Node-1301" class="mjx-mi MJXc-space1"><span class="mjx-char MJXc-TeX-math-I" style="padding-top: 0.224em; padding-bottom: 0.279em;">c</span></span><span id="MJXc-Node-1302" class="mjx-mo"><span class="mjx-char MJXc-TeX-main-R" style="margin-top: -0.163em; padding-bottom: 0.556em;">,</span></span><span id="MJXc-Node-1303" class="mjx-mi MJXc-space1"><span class="mjx-char MJXc-TeX-math-I" style="padding-top: 0.445em; padding-bottom: 0.279em; padding-right: 0.003em;">d</span></span><span id="MJXc-Node-1304" class="mjx-mo"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.445em; padding-bottom: 0.611em;">)</span></span></span></span><span class="MJX_Assistive_MathML" role="presentation"><math xmlns="http://www.w3.org/1998/Math/MathML">
                            <mo stretchy="false">(</mo>
                            <mi>a</mi>
                            <mo>,</mo>
                            <mi>b</mi>
                            <mo>,</mo>
                            <mi>c</mi>
                            <mo>,</mo>
                            <mi>d</mi>
                            <mo stretchy="false">)</mo>
                        </math></span></span>
                <script type="math/tex" id="MathJax-Element-100">(a,b,c,d)</script> if and only if both <span class="MathJax_Preview" style="color: inherit;"></span><span id="MathJax-Element-101-Frame" class="mjx-chtml MathJax_CHTML" tabindex="0" data-mathml="<math xmlns=&quot;http://www.w3.org/1998/Math/MathML&quot;><msub><mi>S</mi><mn>1</mn></msub><mo>,</mo><msub><mi>S</mi><mn>0</mn></msub></math>" role="presentation" style="font-size: 113%; position: relative;"><span id="MJXc-Node-1305" class="mjx-math" aria-hidden="true"><span id="MJXc-Node-1306" class="mjx-mrow"><span id="MJXc-Node-1307" class="mjx-msubsup"><span class="mjx-base" style="margin-right: -0.032em;"><span id="MJXc-Node-1308" class="mjx-mi"><span class="mjx-char MJXc-TeX-math-I" style="padding-top: 0.501em; padding-bottom: 0.279em; padding-right: 0.032em;">S</span></span></span><span class="mjx-sub" style="font-size: 70.7%; vertical-align: -0.212em; padding-right: 0.071em;"><span id="MJXc-Node-1309" class="mjx-mn" style=""><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.39em; padding-bottom: 0.335em;">1</span></span></span></span><span id="MJXc-Node-1310" class="mjx-mo"><span class="mjx-char MJXc-TeX-main-R" style="margin-top: -0.163em; padding-bottom: 0.556em;">,</span></span><span id="MJXc-Node-1311" class="mjx-msubsup MJXc-space1"><span class="mjx-base" style="margin-right: -0.032em;"><span id="MJXc-Node-1312" class="mjx-mi"><span class="mjx-char MJXc-TeX-math-I" style="padding-top: 0.501em; padding-bottom: 0.279em; padding-right: 0.032em;">S</span></span></span><span class="mjx-sub" style="font-size: 70.7%; vertical-align: -0.212em; padding-right: 0.071em;"><span id="MJXc-Node-1313" class="mjx-mn" style=""><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.39em; padding-bottom: 0.39em;">0</span></span></span></span></span></span><span class="MJX_Assistive_MathML" role="presentation"><math xmlns="http://www.w3.org/1998/Math/MathML">
                            <msub>
                                <mi>S</mi>
                                <mn>1</mn>
                            </msub>
                            <mo>,</mo>
                            <msub>
                                <mi>S</mi>
                                <mn>0</mn>
                            </msub>
                        </math></span></span>
                <script type="math/tex" id="MathJax-Element-101">S_1,S_0</script> are both <span class="MathJax_Preview" style="color: inherit;"></span><span id="MathJax-Element-102-Frame" class="mjx-chtml MathJax_CHTML" tabindex="0" data-mathml="<math xmlns=&quot;http://www.w3.org/1998/Math/MathML&quot;><mn>1</mn></math>" role="presentation" style="font-size: 113%; position: relative;"><span id="MJXc-Node-1314" class="mjx-math" aria-hidden="true"><span id="MJXc-Node-1315" class="mjx-mrow"><span id="MJXc-Node-1316" class="mjx-mn"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.39em; padding-bottom: 0.335em;">1</span></span></span></span><span class="MJX_Assistive_MathML" role="presentation"><math xmlns="http://www.w3.org/1998/Math/MathML">
                            <mn>1</mn>
                        </math></span></span>
                <script type="math/tex" id="MathJax-Element-102">1</script> for that input combination.

                The number of Prime Implicants in <span class="MathJax_Preview" style="color: inherit;"></span><span id="MathJax-Element-103-Frame" class="mjx-chtml MathJax_CHTML" tabindex="0" data-mathml="<math xmlns=&quot;http://www.w3.org/1998/Math/MathML&quot;><mtext>Y</mtext><mo>?</mo></math>" role="presentation" style="font-size: 113%; position: relative;"><span id="MJXc-Node-1317" class="mjx-math" aria-hidden="true"><span id="MJXc-Node-1318" class="mjx-mrow"><span id="MJXc-Node-1319" class="mjx-mtext"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.39em; padding-bottom: 0.335em;">Y</span></span><span id="MJXc-Node-1320" class="mjx-mo"><span class="mjx-char MJXc-TeX-main-R" style="padding-top: 0.445em; padding-bottom: 0.335em;">?</span></span></span></span><span class="MJX_Assistive_MathML" role="presentation"><math xmlns="http://www.w3.org/1998/Math/MathML">
                            <mtext>Y</mtext>
                            <mo>?</mo>
                        </math></span></span>
                <script type="math/tex" id="MathJax-Element-103">\text{Y}?</script>
            </p>`,
      image: "",
      options: [
      ],
      answer: "",
      solution: ``
    },
  ]
});
