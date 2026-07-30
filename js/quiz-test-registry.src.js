registerTest({
  series: "weekly-cs-gate-2027",
  name: "WQT - Digital logic-1|Boolean algebra",
  date: "Jul 30, 2026",
  questions: [
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>In the circuit shown below, which logic function does this circuit generate?<br><img alt="" src="/images/quiz/wqt-dl1/q1_img1.png" style="max-width: 100%;"><br>&nbsp;</p> <p></p>`,
      image: "",
      options: [
        `OR`,
        `AND`,
        `NOR`,
        `NAND`,
      ],
      answer: "A",
      solution: `<img src="/images/quiz/wqt-dl1/1.png" style="max-width: 100%;">`
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
      solution: `<img src="/images/quiz/wqt-dl1/2.png" style="max-width: 100%;">`
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
      solution: `<img src="/images/quiz/wqt-dl1/3.png" style="max-width: 100%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>Refer to the following figure, If \\( \\mathbf{S}_{1}=\\mathbf{1} \\) and \\( \\mathbf{S}_{2}=\\mathbf{0} \\) what will be the logic state at the output \\( \\mathbf{X} \\) ? </p> <p><br><img alt="" src="/images/quiz/wqt-dl1/q4_img2.png" style="max-width: 100%;"></p> <p>&nbsp;</p> <p></p>`,
      image: "",
      options: [
        `\\( \\mathbf{X}=\\mathbf{A} \\)`,
        `\\( \\mathbf{X}=\\mathbf{B} \\)`,
        `\\( \\mathbf{X}=\\mathbf{C} \\)`,
        `\\( \\mathbf{X}=\\mathbf{D} \\)`,
      ],
      answer: "C",
      solution: `<img src="/images/quiz/wqt-dl1/4.png" style="max-width: 100%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>Refer to the following figure. If \\( \\mathbf{A}=\\mathbf{0} \\) and \\( \\mathbf{B}=\\mathbf{1} \\), what will be the logic states at \\( \\mathbf{X}, \\mathbf{Y} \\) and \\( \\mathbf{Z} \\) ?<br><br><img alt="" src="/images/quiz/wqt-dl1/q5_img3.png" style="max-width: 100%;"><br>&nbsp; </p> <p></p>`,
      image: "",
      options: [
        `\\( \\mathrm{X}=1, \\mathrm{Y}=1, \\mathrm{Z}=0 \\)`,
        `\\( \\mathrm{X}=1, Y=0, Z=0 \\)`,
        `\\( \\mathrm{X}=0, \\mathrm{Y}=0, \\mathrm{Z}=1 \\)`,
        `\\( X=0, Y=1, Z=0 \\)`,
      ],
      answer: "C",
      solution: `<img src="/images/quiz/wqt-dl1/5.png" style="max-width: 100%;">`
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
      solution: `<img src="/images/quiz/wqt-dl1/6.png" style="max-width: 100%;">`
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
      solution: `<img src="/images/quiz/wqt-dl1/7.png" style="max-width: 100%;">`
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
      solution: `<img src="/images/quiz/wqt-dl1/8.png" style="max-width: 100%;">`
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
      solution: `<img src="/images/quiz/wqt-dl1/9.png" style="max-width: 100%;">`
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
      solution: `<img src="/images/quiz/wqt-dl1/10.png" style="max-width: 100%;">`
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
      solution: `<img src="/images/quiz/wqt-dl1/11.png" style="max-width: 100%;">`
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
      solution: `<img src="/images/quiz/wqt-dl1/12.png" style="max-width: 100%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p>What does the following circuit evaluate to?<br><img alt="" src="/images/quiz/wqt-dl1/q13_img4.png" style="max-width: 100%;"></p> <p></p>`,
      image: "",
      options: [
        `0`,
        `1`,
        `\\( A^{\\prime} \\)`,
        `\\( A \\)`,
      ],
      answer: "C",
      solution: `<img src="/images/quiz/wqt-dl1/13.png" style="max-width: 100%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p>The logic circuit shown can be minimized to<br><img alt="" src="/images/quiz/wqt-dl1/q14_img5.png" style="max-width: 100%;"></p> <p>&nbsp;</p> <p>&nbsp;</p> <p><br><img alt="" src="/images/quiz/wqt-dl1/q14_img6.png" style="max-width: 100%;"></p> <p></p>`,
      image: "",
      options: [
        `\\( \\mathbf{A} \\)`,
        `\\( \\mathbf{B} \\)`,
        `\\( \\mathbf{C} \\)`,
        `\\( \\mathbf{D} \\)`,
      ],
      answer: "D",
      solution: `<img src="/images/quiz/wqt-dl1/14.png" style="max-width: 100%;">`
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
      solution: `<img src="/images/quiz/wqt-dl1/15.png" style="max-width: 100%;">`
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
      solution: `<img src="/images/quiz/wqt-dl2/1.png" style="max-width: 100%;">`
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
      solution: `<img src="/images/quiz/wqt-dl2/2.png" style="max-width: 100%;">`
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
      solution: `<img src="/images/quiz/wqt-dl2/3.png" style="max-width: 100%;">`
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
      solution: `<img src="/images/quiz/wqt-dl2/4.png" style="max-width: 100%;">`
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
      solution: `<img src="/images/quiz/wqt-dl2/5.png" style="max-width: 100%;">`
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
      solution: `<img src="/images/quiz/wqt-dl2/6.png" style="max-width: 100%;">`
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
      solution: `<img src="/images/quiz/wqt-dl2/7.png" style="max-width: 100%;">`
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
      solution: `<img src="/images/quiz/wqt-dl2/8.png" style="max-width: 100%;">`
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
      solution: `<img src="/images/quiz/wqt-dl2/9.png" style="max-width: 100%;">`
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
      solution: `<img src="/images/quiz/wqt-dl2/10.png" style="max-width: 100%;">`
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
      solution: `<p><a href="https://www.youtube.com/watch?v=3Wj-BXY41MU&t=459s" target="_blank">Detailed Video Solution</a></p><img src="/images/quiz/wqt-dl3/4.png" style="max-width: 100%;">`
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
      solution: `<p><a href="https://www.youtube.com/watch?v=3Wj-BXY41MU&t=1720s" target="_blank">Detailed Video Solution</a></p><img src="/images/quiz/wqt-dl3/5.png" style="max-width: 100%;">`
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
      answer: ["A", "B"],
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
      answer: ["C", "D"],
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
      answer: ["A", "C"],
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
      answer: ["B", "D"],
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
      answer: ["A", "D"],
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
      solution: `<p><a href="https://www.youtube.com/watch?v=3Wj-BXY41MU&t=2659s" target="_blank">Detailed Video Solution</a></p><img src="/images/quiz/wqt-dl3/15.png" style="max-width: 100%;">`
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
      solution: `<img src="/images/quiz/wqt-dl4/1.png" style="max-width: 100%;">`
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
      solution: `<img src="/images/quiz/wqt-dl4/2.png" style="max-width: 100%;">`
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
      solution: `<img src="/images/quiz/wqt-dl4/3.png" style="max-width: 100%;">`
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
      solution: `<img src="/images/quiz/wqt-dl4/4.png" style="max-width: 100%;">`
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
      solution: `<img src="/images/quiz/wqt-dl4/5.png" style="max-width: 100%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "NAT",
      text: `<p></p> <p>Consider the Boolean function F( \\( x1 \\), \\( x2 \\), . . . , \\( x10 \\)) realised by the following combinational circuit. </p> <p><img alt="" src="/images/quiz/wqt-dl4/q6_img1.png" style="max-width: 100%;"></p> <p>Determine the number of input combinations for which the output function F realised by the circuit becomes <strong>true</strong> (logic 1).</p> <p></p>`,
      image: "",
      options: [],
      answer: "943",
      solution: `<img src="/images/quiz/wqt-dl4/6.png" style="max-width: 100%;">`
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
      solution: `<img src="/images/quiz/wqt-dl4/7.png" style="max-width: 100%;">`
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
      solution: `<img src="/images/quiz/wqt-dl4/8.png" style="max-width: 100%;">`
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
      solution: `<img src="/images/quiz/wqt-dl4/9.png" style="max-width: 100%;">`
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
      solution: `<img src="/images/quiz/wqt-dl4/10.png" style="max-width: 100%;">`
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
      solution: `<img src="/images/quiz/wqt-dl4/11.png" style="max-width: 100%;">`
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
      solution: `<img src="/images/quiz/wqt-dl4/12.png" style="max-width: 100%;">`
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
      solution: `<img src="/images/quiz/wqt-dl4/13.png" style="max-width: 100%;">`
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
      solution: `<img src="/images/quiz/wqt-dl4/14.png" style="max-width: 100%;">`
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
      solution: `<img src="/images/quiz/wqt-dl4/15.png" style="max-width: 100%;">`
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
      solution: `<img src="/images/quiz/wqt-dl6/1.png" style="max-width: 100%;">`
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
      solution: `<img src="/images/quiz/wqt-dl6/2.png" style="max-width: 100%;">`
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
      solution: `<img src="/images/quiz/wqt-dl6/3.png" style="max-width: 100%;">`
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
      solution: `<img src="/images/quiz/wqt-dl6/4.png" style="max-width: 100%;">`
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
      solution: `<img src="/images/quiz/wqt-dl6/5.png" style="max-width: 100%;">`
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
      solution: `<img src="/images/quiz/wqt-dl6/6.png" style="max-width: 100%;">`
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
      solution: `<img src="/images/quiz/wqt-dl6/7.png" style="max-width: 100%;">`
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
      solution: `<img src="/images/quiz/wqt-dl6/8.png" style="max-width: 100%;">`
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
      solution: `<img src="/images/quiz/wqt-dl6/9.png" style="max-width: 100%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "NAT",
      text: `<p>In an \\( 8 \\) bit representation of computer system the decimal number \\( 26 \\) has to be subtracted from \\( 22 \\) and the result in binary \\( 2 \\)'s complement is \\( -------- \\) </p>`,
      image: "",
      options: [],
      answer: "11111100",
      solution: `<img src="/images/quiz/wqt-dl6/10.png" style="max-width: 100%;">`
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
      solution: `<img src="/images/quiz/wqt-dl6/11.png" style="max-width: 100%;">`
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
      solution: `<img src="/images/quiz/wqt-dl6/12.png" style="max-width: 100%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "NAT",
      text: `<p>Determine the base of the numbers for the following operation to be correct: \\( 14 / 2=5 \\) </p>`,
      image: "",
      options: [],
      answer: "6",
      solution: `<img src="/images/quiz/wqt-dl6/13.png" style="max-width: 100%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "NAT",
      text: `<p>Determine the base of the numbers for the following operation to be correct: \\( 24+17=40 \\) </p>`,
      image: "",
      options: [],
      answer: "11",
      solution: `<img src="/images/quiz/wqt-dl6/14.png" style="max-width: 100%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "NAT",
      text: `<p>The solutions to the quadratic equation \\( x^{2}-11 \\mathrm{x}+22=0 \\) are \\( x=3 \\) and \\( x=6 \\). What is the base of the numbers? </p>`,
      image: "",
      options: [],
      answer: "8",
      solution: `<img src="/images/quiz/wqt-dl6/15.png" style="max-width: 100%;">`
    },
  ]
});

