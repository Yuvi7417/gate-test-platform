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
      options: [
        "A",
        "B",
        "C",
        "D"
      ],
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
      options: [
        "A",
        "B",
        "C",
        "D"
      ],
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
      options: [
        "A",
        "B",
        "C",
        "D"
      ],
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
      options: [
        "A",
        "B",
        "C",
        "D"
      ],
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
      options: [
        "A",
        "B",
        "C",
        "D"
      ],
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
      options: [
        "A",
        "B",
        "C",
        "D"
      ],
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
      options: [
        "A",
        "B",
        "C",
        "D"
      ],
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
      options: [
        "A",
        "B",
        "C",
        "D"
      ],
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
      options: [
        "A",
        "B",
        "C",
        "D"
      ],
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
      options: [
        "A",
        "B",
        "C",
        "D"
      ],
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
      answer: ["A", "D"],
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
      answer: ["A", "C"],
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
      answer: ["B", "C", "D"],
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
      answer: ["B", "C"],
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
        "A",
        "B",
        "C",
        "D"
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
      options: [
        "A",
        "B",
        "C",
        "D"
      ],
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
      options: [
        "A",
        "B",
        "C",
        "D"
      ],
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
      options: [
        "A",
        "B",
        "C",
        "D"
      ],
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

registerTest({
  series: "weekly-cs-gate-2027",
  name: "WQT - Digital Logic-14|K-map",
  date: "Aug 24, 2026",
  questions: [
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p><img alt="" src="/images/quiz/wqt-dl14/q1_img1.png" style="max-width: 100%;"></p> <p>What will be the equation of the given \\( K \\)-map? </p> <p></p>`,
      image: "",
      options: [
        `\\( A’B’D’+C’D+AB’C’ \\)`,
        `\\( B’CD’+AB’C’+A’C’ \\)`,
        `\\( B’D’+C’D \\)`,
        `\\( C’D+B’CD’ \\)`,
      ],
      answer: "C",
      solution: `<img src="/images/quiz/wqt-dl14/1.png" style="max-width: 100%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>The most simplified form of the Boolean function</p> <p> \\( x (A, B, C, D) = \\sum (7, 8, 9, 10, 11, 12, 13, 14, 15) \\) </p> <p>(expressed in sum of minterms) is?</p> <p></p>`,
      image: "",
      options: [
        `\\( A + A'BCD \\)<br>&nbsp;`,
        `\\( AB + CD \\)<br>&nbsp;`,
        `\\( A + BCD \\)<br>&nbsp;`,
        `\\( ABC + D \\)`,
      ],
      answer: "C",
      solution: `<img src="/images/quiz/wqt-dl14/2.png" style="max-width: 100%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>The boolean expression \\( \\text{AB + A}\\text{B}'+\\text{A}'\\text{C + AC} \\) is independent of the boolean variable </p> <p></p>`,
      image: "",
      options: [
        `\\( \\text{A} \\)`,
        `\\( \\text{B} \\)`,
        `\\( \\text{C} \\)`,
        `None of these`,
      ],
      answer: "B",
      solution: `<img src="/images/quiz/wqt-dl14/3.png" style="max-width: 100%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>The switching expression corresponding to \\( f(\\text{A, B, C, D}) = \\Sigma(1, 4, 5, 9, 11, 12) \\) is </p> <p></p>`,
      image: "",
      options: [
        `\\( BC'D' + A'C'D + AB'D \\)<br>&nbsp;`,
        `\\( ABC' + ACD + B'C'D \\)<br>&nbsp;`,
        `\\( ACD' + A'BC' + AC'D' \\)<br>&nbsp;`,
        `\\( A'BD + ACD' + BCD' \\)`,
      ],
      answer: "A",
      solution: `<img src="/images/quiz/wqt-dl14/4.png" style="max-width: 100%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p><img alt="" src="/images/quiz/wqt-dl14/q5_img2.png" style="max-width: 100%;"></p> <p>Which will be the equation of simplification of the given \\( K \\)-map? </p> <p></p>`,
      image: "",
      options: [
        `\\( AB' + B'CD' + A'B'C' \\)`,
        `\\( AB' + A'B'D' + A'B'C' \\)`,
        `\\( B'D' + AB' + B'C' \\)`,
        `\\( B'D' + A'B'C' + AB' \\)`,
      ],
      answer: "C",
      solution: `<img src="/images/quiz/wqt-dl14/5.png" style="max-width: 100%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p>Consider the following boolean function of four variables \\( f(w,x,y,z) = \\Sigma(1,3,4,6,9,11,12,14) \\), the function is </p> <p></p>`,
      image: "",
      options: [
        `Independent of one variable`,
        `Independent of two variables`,
        `Independent of three variables`,
        `Dependent on all variables`,
      ],
      answer: "B",
      solution: `<img src="/images/quiz/wqt-dl14/6.png" style="max-width: 100%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p>The \\( K-map \\) below defines a function \\( \\mathrm{G}(\\mathrm{A}, \\mathrm{B}, \\mathrm{C}, \\mathrm{D}) \\). Mark the answer below that corresponds to a minimal <strong>SOP</strong> expression for the function \\( \\mathrm{G}(\\mathrm{A}, \\mathrm{B}, \\mathrm{C}, \\mathrm{D}) \\) ?<br>&nbsp; </p> <p><img alt="" src="/images/quiz/wqt-dl14/q7_img3.png" style="max-width: 100%;"></p> <p></p>`,
      image: "",
      options: [
        `\\( \\mathrm{BD}+\\mathrm{B}^{\\prime} \\mathrm{CD}^{\\prime} \\)<br>&nbsp;`,
        `\\( B^{\\prime} D^{\\prime}+A^{\\prime} B^{\\prime} C+B D \\)<br>&nbsp;`,
        `\\( B D+A^{\\prime} B^{\\prime} C D^{\\prime}+A B^{\\prime} C \\)<br>&nbsp;`,
        `\\( B^{\\prime} D^{\\prime}+B D \\)`,
      ],
      answer: "D",
      solution: `<img src="/images/quiz/wqt-dl14/7.png" style="max-width: 100%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p><img alt="" src="/images/quiz/wqt-dl14/q8_img4.png" style="max-width: 100%;"></p> <p>The truth table for implementing a Boolean variable \\( \\text{F} \\) is given where \\( d \\) represents don't care states. The minimized expression for \\( \\text{F} \\) is: </p> <p></p>`,
      image: "",
      options: [
        `\\( BC' +AC'+AB \\)`,
        `\\( AB+ C' \\)`,
        `\\( A'BC'+ AB'C'+ABC \\)`,
        `None of the above`,
      ],
      answer: "B",
      solution: `<img src="/images/quiz/wqt-dl14/8.png" style="max-width: 100%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p>Which of the following is the Boolean function for majority voting, assuming \\( \\text{A, B, C} \\) are inputs and \\( \\text{Y} \\) is output? </p> <p></p>`,
      image: "",
      options: [
        `\\( \\text{Y = AB + AC + BC} \\)<br>&nbsp;`,
        `\\( \\text{Y = A + B&nbsp;+ C} \\)<br>&nbsp;`,
        `\\( \\text{Y =&nbsp; ABC} \\)<br>&nbsp;`,
        `\\( \\text{Y= AB + BC} \\)`,
      ],
      answer: "A",
      solution: `<img src="/images/quiz/wqt-dl14/9.png" style="max-width: 100%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p>A number of Boolean functions conform to the map shown below:<br><img alt="" src="/images/quiz/wqt-dl14/q10_img5.png" style="max-width: 100%;"><br>What is the minimum "sum of product" expression among the particular functions, having a prime implicant that can not appear in the minimum "sum of products" representation (that conform to the above map) ?</p> <p></p>`,
      image: "",
      options: [
        `\\( \\mathrm{B}^{\\prime}+\\mathrm{C} \\)`,
        `\\( A^{\\prime} B^{\\prime}+A C \\)`,
        `\\( \\mathrm{A}^{\\prime} \\mathrm{B}^{\\prime}+\\mathrm{B}^{\\prime} \\mathrm{C}^{\\prime}+\\mathrm{BC} \\)`,
        `None`,
      ],
      answer: "B",
      solution: `<img src="/images/quiz/wqt-dl14/10.png" style="max-width: 100%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p>Simplify Boolean function represented in sum of product of min-terms, \\( \\text{F}(x, y, z)= \\Sigma(0, 2, 4,5, 6) \\) </p> <p></p>`,
      image: "",
      options: [
        `&nbsp; \\( z' + xy' \\)<br>&nbsp;`,
        `\\( x' y'z' + xyz+ xy'z' \\)<br>&nbsp;`,
        `\\( xyz + x' + y' + z' \\)<br>&nbsp;`,
        `\\( xy+yz+zx \\)`,
      ],
      answer: "A",
      solution: `<img src="/images/quiz/wqt-dl14/11.png" style="max-width: 100%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p>The simplified SOP (Sum of Product) from the Boolean expression</p> <p> \$\$ (\\text{P} + \\overline{\\text{Q}} + \\overline{\\text{R}}) . (\\text{P} + \\text{Q&nbsp;+ R) . (P + Q} +\\overline{\\text{R}}) \$\$ is&nbsp; </p> <p></p>`,
      image: "",
      options: [
        `\\( (\\overline{\\text{P}}.\\text{Q}+\\overline{\\text{R}}) \\)`,
        `\\( (\\text{P + Q}.\\overline{\\text{R}}) \\)`,
        `\\( (\\text{P}.\\overline{\\text{Q}}+\\text{R}) \\)`,
        `\\( \\text{(P.Q + R)} \\)`,
      ],
      answer: "B",
      solution: `<img src="/images/quiz/wqt-dl14/12.png" style="max-width: 100%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p>Consider the following expression</p> <p> \\( a\\bar d + \\bar a \\bar c + b\\bar cd \\) </p> <p>Which of the following expressions does not correspond to the Karnaugh Map obtained for the given expression?</p> <p></p>`,
      image: "",
      options: [
        `\\( \\bar c \\bar d+ a\\bar d + ab\\bar c + \\bar a \\bar cd \\)`,
        `\\( \\bar a\\bar c + \\bar c\\bar d + a\\bar d + ab\\bar cd \\)`,
        `\\( \\bar a\\bar c + a\\bar d + ab\\bar c + \\bar cd \\)`,
        `\\( \\bar b\\bar c \\bar d + ac\\bar d + \\bar a \\bar c + ab\\bar c \\)`,
      ],
      answer: "C",
      solution: `<img src="/images/quiz/wqt-dl14/13.png" style="max-width: 100%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p>\</p> <p><img alt="" src="/images/quiz/wqt-dl14/q14_img6.png" style="max-width: 100%;"></p> <p>The function shown in the figure when simplified will yield a result with _______ terms</p> <p></p>`,
      image: "",
      options: [
        `\\( 2 \\)`,
        `\\( 4 \\)`,
        `\\( 7 \\)`,
        `\\( 14 \\)`,
      ],
      answer: "C",
      solution: `<img src="/images/quiz/wqt-dl14/14.png" style="max-width: 100%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>Find minimal POS (product of sum) expression for \\( F(a, b, c, d) \\) given by the following K-map. Identify the Prime Implicants &amp; Essential Prime Implicants clearly.<br><img alt="" src="/images/quiz/wqt-dl14/q15_img7.png" style="max-width: 100%;"><br>Which of the following is/are correct statements about F? </p> <p></p>`,
      image: "",
      options: [
        `Minimal POS: \\( \\left(a^{\\prime}+b\\right)\\left(b^{\\prime}+c^{\\prime}+d^{\\prime}\\right) \\)`,
        `The number of Prime Implicants is \\( 6 \\).`,
        `The number of Prime Implicants is \\( 4 \\).`,
        `The number of Essential Prime Implicants is \\( 1 \\).`,
      ],
      answer: ["A", "C"],
      solution: `<img src="/images/quiz/wqt-dl14/15.png" style="max-width: 100%;">`
    },
  ]
});

registerTest({
  series: "weekly-cs-gate-2027",
  name: "WQT - Engineering Mathematics-1|Linear Algebra",
  date: "Aug 31, 2026",
  questions: [
    {
      marks: 1,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>Let \\( \\left\\{\\overrightarrow{\\mathbf{u}_{1}}, \\overrightarrow{\\mathbf{u}_{2}}, \\overrightarrow{\\mathbf{u}_{3}}\\right\\} \\) be a linearly independent set in \\( \\mathbb{R}^{3} \\). Then, for a scalar \\( c \\), what can be concluded about the set \\( \\left\\{c \\overrightarrow{\\mathbf{u}_{1}}, c \\overrightarrow{\\mathbf{u}_{2}}, c \\overrightarrow{\\mathbf{u}_{3}}\\right\\} \\) ? </p> <p></p>`,
      image: "",
      options: [
        `&nbsp;The set \\( \\left\\{c \\overrightarrow{\\mathbf{u}_{1}}, c \\overrightarrow{\\mathbf{u}_{2}}, c \\overrightarrow{\\mathbf{u}_{3}}\\right\\} \\) is linearly independent for all values of \\( c \\neq 0 \\)`,
        `&nbsp;The set \\( \\left\\{c \\overrightarrow{\\mathbf{u}_{1}}, c \\overrightarrow{\\mathbf{u}_{2}}, c \\overrightarrow{\\mathbf{u}_{3}}\\right\\} \\) is linearly dependent for all values of \\( c \\neq 0 \\)`,
        `&nbsp;The set \\( \\left\\{c \\overrightarrow{\\mathbf{u}_{1}}, c \\overrightarrow{\\mathbf{u}_{2}}, c \\overrightarrow{\\mathbf{u}_{3}}\\right\\} \\) is linearly independent only if \\( c=1 \\)`,
        `&nbsp;The set \\( \\left\\{c \\overrightarrow{\\mathbf{u}_{1}}, c \\overrightarrow{\\mathbf{u}_{2}}, c \\overrightarrow{\\mathbf{u}_{3}}\\right\\} \\) is linearly dependent only if \\( c=0 \\)`,
      ],
      answer: ["A", "D"],
      solution: `<img src="/images/quiz/wqt-em1/1.png" style="max-width: 100%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>What is the definition of linear independence for a set of vectors \\( \\left\\{\\mathbf{u}_{1}, \\mathbf{u}_{2}, \\ldots, \\mathbf{u}_{m}\\right\\} \\subseteq \\mathbb{R}^{n} \\) ? Let \\( x_{1}, x_{2}, \\ldots, x_{m} \\) be scalars.<br>&nbsp; </p> <p></p>`,
      image: "",
      options: [
        `\\( \\left\\{\\mathbf{u}_{1}, \\mathbf{u}_{2}, \\ldots, \\mathbf{u}_{m}\\right\\} \\subseteq \\mathbb{R}^{n} \\) are linearly independent if the only solution to \\( x_{1} \\mathbf{u}_{1}+x_{2} \\mathbf{u}_{2}+ \\) \\( \\cdots+x_{m} \\mathbf{u}_{m}=\\mathbf{0} \\) is \\( x_{1}=x_{2}=\\cdots=x_{m}=0 \\).`,
        `\\( \\left\\{\\mathbf{u}_{1}, \\mathbf{u}_{2}, \\ldots, \\mathbf{u}_{m}\\right\\} \\subseteq \\mathbb{R}^{n} \\) are linearly independent if there exists a non-trivial solution to \\( x_{1} \\mathbf{u}_{1}+x_{2} \\mathbf{u}_{2}+\\cdots+x_{m} \\mathbf{u}_{m}=\\mathbf{0} \\) .`,
        `\\( \\left\\{\\mathbf{u}_{1}, \\mathbf{u}_{2}, \\ldots, \\mathbf{u}_{m}\\right\\} \\subseteq \\mathbb{R}^{n} \\) are linearly independent if the vectors are orthogonal to each other.`,
        `\\( \\left\\{\\mathbf{u}_{1}, \\mathbf{u}_{2}, \\ldots, \\mathbf{u}_{m}\\right\\} \\subseteq \\mathbb{R}^{n} \\) are linearly independent if the vectors are not scalar multiples of each other.`,
      ],
      answer: "A",
      solution: `<img src="/images/quiz/wqt-em1/2.png" style="max-width: 100%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>Let us consider the following three vectors \\( v_1, v_2, \\) and \\( v_3 \\) in \\( \\mathbb{R}^3 \\).<br> \$\$ \\begin{aligned} &amp; v_1=\\left(\\begin{array}{lll} 1 &amp; 0 &amp; -2 \\end{array}\\right) \\\\ &amp; v_2=\\left(\\begin{array}{lll} -1 &amp; 0 &amp; 2 \\end{array}\\right) \\\\ &amp; v_3=\\left(\\begin{array}{lll} 1 &amp; 0 &amp; 2 \\end{array}\\right) . \\end{aligned} \$\$ </p> <p></p>`,
      image: "",
      options: [
        `The three vectors \\( v_1, v_2, \\) and \\( v_3 \\) are linearly independent.`,
        `Every pair of vectors \\( \\left\\{v_1, v_2\\right\\},\\left\\{v_2, v_3\\right\\} \\), and \\( \\left\\{v_1, v_3\\right\\} \\) are linearly independent.`,
        `All pairs except the pair \\( \\left\\{v_1, v_2\\right\\} \\) are linearly independent.`,
        `All pairs except the pair \\( \\left\\{v_1, v_3\\right\\} \\) are linearly independent.`,
      ],
      answer: "C",
      solution: `<img src="/images/quiz/wqt-em1/3.png" style="max-width: 100%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>Let \\( a, b \\) be in \\( \\mathbb{R} \\). Consider the three vectors<br> \$\$ \\boldsymbol{v}_1=\\left[\\begin{array}{l} a \\\\ 0 \\\\ 0 \\end{array}\\right], \\quad \\boldsymbol{v}_2=\\left[\\begin{array}{l} 0 \\\\ b \\\\ 1 \\end{array}\\right], \\quad \\boldsymbol{v}_3=\\left[\\begin{array}{l} 0 \\\\ 1 \\\\ 1 \\end{array}\\right] . \$\$ <br>For which values of \\( a \\) and \\( b \\) are \\( \\boldsymbol{v}_1, \\boldsymbol{v}_2, \\boldsymbol{v}_3 \\) independent? </p> <p></p>`,
      image: "",
      options: [
        `\\( a=0 \\) and \\( b=1 \\)`,
        `\\( a \\neq 0 \\) and \\( b \\neq 1 \\)`,
        `\\( a=0 \\) and \\( b \\neq 1 \\)`,
        `\\( a \\neq 0 \\) and \\( b=1 \\)`,
      ],
      answer: "B",
      solution: `<img src="/images/quiz/wqt-em1/4.png" style="max-width: 100%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>Which of the following is FALSE?</p> <p></p>`,
      image: "",
      options: [
        `If \\( v_1, \\ldots, v_4 \\) are in \\( \\mathbf{R}^5 \\) and \\( \\left\\{v_1, v_2, v_3\\right\\} \\) is linearly dependent then \\( \\left\\{v_1, v_2, v_3, v_4\\right\\} \\) is linearly dependent.`,
        `If \\( v_1, \\ldots, v_4 \\) are in \\( \\mathbf{R}^5 \\) and \\( v_1 \\) is not a linear combination of \\( \\left\\{v_2, v_3, v_4\\right\\} \\), then \\( \\left\\{v_1, v_2, v_3, v_4\\right\\} \\) is linearly independent.`,
        `If \\( v_1, \\ldots, v_4 \\) are linearly independent vectors in \\( \\mathbf{R}^5 \\), then \\( \\left\\{v_1, v_2, v_3\\right\\} \\) is also linearly independent.`,
        `Any set of \\( 6 \\) vectors in&nbsp; \\( \\mathbf{R}^5 \\) is linearly dependent.&nbsp;`,
      ],
      answer: "B",
      solution: `<img src="/images/quiz/wqt-em1/5.png" style="max-width: 100%;">`
    },
    {
      marks: 1,
      neg: 0,
      type: "NAT",
      text: `<p></p> <p>Consider a set of \\( n \\) linearly independent vectors \\( \\left\\{\\vec{w}_1, \\ldots, \\vec{w}_n\\right\\} \\in \\mathbb{R}^n \\). A vector \\( \\vec{u} \\in \\mathbb{R}^n \\) will: </p> <ul> <li>Option \\( 1. \\) Always be a linear combination of \\( \\left\\{\\vec{w}_1, \\ldots, \\vec{w}_n\\right\\} \\) </li> <li>Option \\( 2. \\) Never be a linear combination of \\( \\left\\{\\vec{w}_1, \\ldots, \\vec{w}_n\\right\\} \\) </li> </ul> <p>Enter the correct option as the numeric number. That is if option \\( 2 \\) is correct then enter \\( \\text{2}. \\) </p> <p></p>`,
      image: "",
      options: [],
      answer: "1",
      solution: `<img src="/images/quiz/wqt-em1/6.png" style="max-width: 100%;">`
    },
    {
      marks: 1,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>Which of the following set is/are linearly independent?</p> <p></p>`,
      image: "",
      options: [
        `\\( \\left\\{\\left[\\begin{array}{l}1 \\\\ 2\\end{array}\\right],\\left[\\begin{array}{l}2 \\\\ 1\\end{array}\\right]\\right\\} \\) <br>&nbsp;`,
        `\\( \\left\\{\\left[\\begin{array}{c}1 \\\\ -1\\end{array}\\right]\\right\\} \\) <br>&nbsp;`,
        `\\( \\left\\{\\left[\\begin{array}{l}1 \\\\ 2 \\\\ 1\\end{array}\\right],\\left[\\begin{array}{l}2 \\\\ 3 \\\\ 4\\end{array}\\right],\\left[\\begin{array}{c}1 \\\\ -1 \\\\ 2\\end{array}\\right],\\left[\\begin{array}{l}0 \\\\ 1 \\\\ 0\\end{array}\\right]\\right\\} \\) <br>&nbsp;`,
        `\\( \\left\\{\\left[\\begin{array}{l}1 \\\\ 1 \\\\ 1\\end{array}\\right],\\left[\\begin{array}{l}1 \\\\ 0 \\\\ 1\\end{array}\\right],\\left[\\begin{array}{l}0 \\\\ 0 \\\\ 0\\end{array}\\right]\\right\\} \\)`,
      ],
      answer: ["A", "B"],
      solution: `<img src="/images/quiz/wqt-em1/7.png" style="max-width: 100%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p> \$\$ a\\left[\\begin{array}{l}1 \\\\ 2 \\\\ 3 \\\\ 4 \\\\ 5\\end{array}\\right]+b\\left[\\begin{array}{c}-1 \\\\ 2 \\\\ -3 \\\\ 4 \\\\ -5\\end{array}\\right]=\\left[\\begin{array}{l}0 \\\\ 0 \\\\ 0 \\\\ 0 \\\\ 0\\end{array}\\right] \$\$ <br>How many number of pairs \\( (a, b) \\) are there, that satisfy the above equation? </p> <p></p>`,
      image: "",
      options: [
        `\\( 0 \\)`,
        `\\( 1 \\)`,
        `Infinite`,
        `\\( 2 \\)`,
      ],
      answer: "B",
      solution: `<img src="/images/quiz/wqt-em1/8.png" style="max-width: 100%;">`
    },
    {
      marks: 1,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>Given a set of vectors \\( \\text{S}(|\\text{S}| \\geq n) \\), with all vectors in \\( \\mathbb{R}^n \\), which of the following is a necessary and sufficient condition for the vectors of \\( \\text{S} \\) to be Linearly Dependent? </p> <p></p>`,
      image: "",
      options: [
        `Exactly \\( n \\) vectors can be represented as a linear combination of other vectors of the set \\( \\text{S} \\).`,
        `At least \\( n \\) vectors can be represented as a linear combination of other vectors of the set \\( \\text{S} \\).`,
        `At least one vector \\( u \\) can be represented as a linear combination of any vector(s) of the set \\( \\text{S} \\).`,
        `At least one vector \\( u \\) can be represented as a linear combination of vectors (other than \\( u \\) ) of the set \\( \\text{S} \\).`,
      ],
      answer: ["D"],
      solution: `<img src="/images/quiz/wqt-em1/9.png" style="max-width: 100%;">`
    },
    {
      marks: 1,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>Which of the following is(are) sufficient&nbsp;argument(s) to show that the vectors of set \\( \\text{S} \\) are linearly dependent?<br> \$\$ \\text{S}=\\left\\{u=\\left[\\begin{array}{c} 1 \\\\ -2 \\\\ 7 \\end{array}\\right], v=\\left[\\begin{array}{c} -7 \\\\ 14 \\\\ -49 \\end{array}\\right], w=\\left[\\begin{array}{l} 0 \\\\ 0 \\\\ 0 \\end{array}\\right]\\right\\} \$\$ <br>Treat each option independently, correct option independently should be sufficient to infer that vectors are&nbsp;linearly dependent. </p> <p></p>`,
      image: "",
      options: [
        `\\( 0 u+0 v+1 w=\\left[\\begin{array}{l}0 \\\\ 0 \\\\ 0\\end{array}\\right] \\) <br>&nbsp;`,
        `\\( 0 u+0 v=w \\)<br>&nbsp;`,
        `\\( 0 u+0 v+0 w=\\left[\\begin{array}{l}0 \\\\ 0 \\\\ 0\\end{array}\\right] \\) <br>&nbsp;`,
        `\\( 7 u+(-1) v+1 w=\\left[\\begin{array}{l}0 \\\\ 0 \\\\ 0\\end{array}\\right] \\)`,
      ],
      answer: ["A", "B"],
      solution: `<img src="/images/quiz/wqt-em1/10.png" style="max-width: 100%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>Which of the following is/are TRUE?</p> <p></p>`,
      image: "",
      options: [
        `If \\( v_{1}, \\ldots, v_{4} \\) are in \\( \\mathbb{R}^{5} \\) and \\( \\left\\{v_{1}, v_{2}, v_{3}\\right\\} \\) is linearly dependent, then \\( \\left\\{v_{1}, v_{2}, v_{3}, v_{4}\\right\\} \\) is linearly dependent.`,
        `If \\( v_{1}, \\ldots, v_{4} \\) are in \\( \\mathbb{R}^{5} \\) and \\( v_{1} \\) is not a linear combination of \\( \\left\\{v_{2}, v_{3}, v_{4}\\right\\} \\), then \\( \\left\\{v_{1}, v_{2}, v_{3}, v_{4}\\right\\} \\) is linearly independent.`,
        `If \\( v_{1}, \\ldots, v_{4} \\) are linearly independent vectors in \\( \\mathbb{R}^{5} \\), then \\( \\left\\{v_{1}, v_{2}, v_{3}\\right\\} \\) is also linearly independent.`,
        `All of the above.`,
      ],
      answer: ["A", "C"],
      solution: `<img src="/images/quiz/wqt-em1/11.png" style="max-width: 100%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>Which of the following is(are) true for the following system of linear equations \\( \\text{AX}=\\overrightarrow{0} \\)<br> \$\$ \\left[\\begin{array}{ccc} 2 &amp; 3 &amp; -5 \\\\ -5 &amp; -1 &amp; 32 \\\\ 2 &amp; -4 &amp; -26 \\end{array}\\right]\\left[\\begin{array}{l} x_1 \\\\ x_2 \\\\ x_3 \\end{array}\\right]=\\left[\\begin{array}{l} 0 \\\\ 0 \\\\ 0 \\end{array}\\right] \$\$ </p> <p></p>`,
      image: "",
      options: [
        `\\( \\text{X}=\\left[\\begin{array}{lll}-7 &amp; 3 &amp; 1\\end{array}\\right]^{\\top} \\) is a solution to the equation \\( \\text{AX}=\\overrightarrow{0} \\).`,
        `Showing that \\( \\text{X}=\\left[\\begin{array}{lll}0 &amp; 0 &amp; 0\\end{array}\\right]^{\\top} \\) is a solution to \\( \\text{AX}=\\overrightarrow{0} \\) is sufficient to conclude that the columns of \\( \\text{A} \\) are Linearly Independent.`,
        `Showing that \\( \\text{X}=\\left[\\begin{array}{lll}-7 &amp; 3 &amp; 1\\end{array}\\right]^{\\top} \\) is a solution to \\( \\text{AX}=\\overrightarrow{0} \\) is sufficient to conclude that the columns of \\( \\text{A} \\) are Linearly Independent.`,
        `\\( \\text{X}=\\left[\\begin{array}{lll}0 &amp; 0 &amp; 0\\end{array}\\right]^{\\top} \\) is a solution to the equation \\( \\text{AX}=\\overrightarrow{0} \\).`,
      ],
      answer: ["D"],
      solution: `<img src="/images/quiz/wqt-em1/12.png" style="max-width: 100%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>Given a set \\( \\text{S} \\) of vectors in \\( \\mathbb{R}^n \\), and set \\( \\text{X(X} \\subset \\text{S}) \\) and \\( \\text{Y(S} \\subset \\text{Y}), \\) mark all the statements which are always true: </p> <p></p>`,
      image: "",
      options: [
        `If the vectors of \\( \\text{S} \\) are Linearly Dependent, then the vectors of \\( \\text{X} \\) are also Linearly Dependent.`,
        `If the vectors of \\( \\text{S} \\) are Linearly Independent, then the vectors of \\( \\text{X} \\) are also Linearly Independent.`,
        `If the vectors of \\( \\text{S} \\) are Linearly Dependent, then the vectors of \\( \\text{Y} \\) are also Linearly Dependent.`,
        `If the vectors of \\( \\text{S} \\) are Linearly Independent, then the vectors of \\( \\text{Y} \\) are also Linearly Independent.`,
      ],
      answer: ["B", "C"],
      solution: `<img src="/images/quiz/wqt-em1/13.png" style="max-width: 100%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>Which of the following is/are CORRECT?<br> \\( u,v, \\text{ and } w \\) are vectors in&nbsp; \\( \\mathbb{R}^n \\). </p> <p></p>`,
      image: "",
      options: [
        `A set \\( \\{u, v, w\\} \\) is linearly independent if \\( &nbsp;u \\) can not be written as linear combination of \\( v \\) and \\( w. \\)`,
        `A set \\( \\{u, v, w\\} \\) is linearly dependent if \\( u \\) is a linear combination of \\( v \\) and \\( w. \\)`,
        `If a set \\( \\{u, v, w\\} \\) is linearly dependent then \\( u \\) is a linear combination of \\( v \\) and \\( w. \\)`,
        `For three vectors \\( \\mathbf{u}, \\mathbf{v}, \\mathbf{w} \\), if \\( \\{\\mathbf{u}, \\mathbf{v}\\} \\) is linearly independent, and \\( \\{\\mathbf{v}, \\mathbf{w}\\} \\) is linearly independent; then \\( \\{\\mathbf{u}, \\mathbf{v}, \\mathbf{w}\\} \\) is linearly independent.`,
      ],
      answer: ["B"],
      solution: `<img src="/images/quiz/wqt-em1/14.png" style="max-width: 100%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <ul> <li> \\( \\mathrm{S} 1: \\) A set of two vectors in \\( \\mathbb{R}^n \\) is Linealy dependent if at least one vector is a multiple of the other. </li> <li> \\( \\text{S2}: \\) A set of \\( n \\) vectors in \\( \\mathbb{R}^n \\) is Linealy independent if and only if none of the vectors are a multiple of any other vector. </li> </ul> <p></p>`,
      image: "",
      options: [
        `\\( \\text{S1} \\) and \\( \\text{S2} \\) both are correct`,
        `\\( \\mathrm{S} 1 \\) is correct and \\( \\mathrm{S} 2 \\) is incorrect`,
        `\\( \\text{S} 2 \\) is correct and \\( \\text{S} 1 \\) is incorrect`,
        `\\( \\text{S} 1 \\) and \\( \\text{S} 2 \\) both are incorrect`,
      ],
      answer: "B",
      solution: `<img src="/images/quiz/wqt-em1/15.png" style="max-width: 100%;">`
    },
  ]
});

registerTest({
  series: "weekly-cs-gate-2027",
  name: "WQT - Engineering Mathematics-2|Linear Algebra",
  date: "Sep 7, 2026",
  questions: [
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>Let \\( \\mathbf{v} \\) be a solution to \\( A \\mathbf{x}=\\mathbf{0} \\) and \\( \\mathbf{w} \\) be a solution to \\( A \\mathbf{x}=\\mathbf{b} \\), where \\( \\mathbf{b} \\neq \\mathbf{0} \\). Find all scalars \\( r \\) and \\( s \\) such that \\( r \\mathbf{v}+s \\mathbf{w} \\) is a solution to \\( A \\mathbf{x}=\\mathbf{b} \\). </p> <p></p>`,
      image: "",
      options: [
        `\\( r=1 \\), and \\( s=1 \\) are the only possible values of scalars`,
        `\\( r=0 \\) and \\( s \\) can be anything`,
        `\\( r \\) can be anything, and \\( s=1 \\)`,
        `\\( r \\) and \\( s \\) can both be any scalar`,
      ],
      answer: "C",
      solution: `<img src="/images/quiz/wqt-em2/1.png" style="max-width: 100%;">`
    },
    {
      marks: 1,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>Consider the following statements about linear systems and matrices. Determine which ones are TRUE.</p> <p></p>`,
      image: "",
      options: [
        `If \\( v_{1}, v_{2} \\), and \\( v_{3} \\) are vectors in \\( \\mathbf{R}^{2} \\), then the vector equation \\( x_{1} v_{1}+x_{2} v_{2}+x_{3} v_{3}=\\binom{0}{0} \\) must have infinitely many solutions.`,
        `Suppose \\( A \\) is a \\( 3 \\times 2 \\) matrix and \\( b \\) is a vector in \\( \\mathbf{R}^{3} \\) such that the equation \\( A \\mathbf{x}=\\mathbf{b} \\) has exactly one solution. Then, the homogeneous system \\( A \\mathbf{x}=0 \\) must have only the trivial solution.`,
        `If \\( A \\) is a \\( 4 \\times 5 \\) matrix and the solution set to \\( A \\mathbf{x}=0 \\) is a line, then the system \\( A \\mathbf{x}=\\mathbf{b} \\) must be inconsistent for some \\( \\mathbf{b} \\in \\mathbf{R}^{4} \\).`,
        `A \\( 2 \\times 2 \\) matrix \\( A \\) exists such that the solution set of \\( A \\mathbf{x}=\\binom{1}{2} \\) is the point \\( \\left\\{\\binom{-1}{1}\\right\\} \\), and the system \\( A \\mathbf{x}=\\binom{2}{1} \\) is inconsistent.`,
      ],
      answer: ["A", "B"],
      solution: `<img src="/images/quiz/wqt-em2/2.png" style="max-width: 100%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>Suppose that the vectors \\( \\mathbf{v}_{1}, \\mathbf{v}_{2}, \\mathbf{v}_{3}, \\mathbf{v}_{4} \\in \\mathbb{R}^{4} \\) span \\( \\mathbb{R}^{4} \\). Let \\( A \\) be the \\( 4 \\times 4 \\) matrix having \\( \\mathbf{v}_{1}, \\mathbf{v}_{2}, \\mathbf{v}_{3}, \\mathbf{v}_{4} \\) as columns. If \\( \\mathbf{x}, \\mathbf{y} \\in \\mathbb{R}^{4} \\) are vectors such that \\( A \\mathbf{x}=A \\mathbf{y} \\), then which of the following is true? </p> <p></p>`,
      image: "",
      options: [
        `\\( \\mathbf{x}=\\mathbf{y} \\)`,
        `\\( \\mathbf{x}-\\mathbf{y}=\\mathbf{v}_{1} \\)`,
        `\\( \\mathbf{x}-\\mathbf{y} \\) is a nonzero solution to \\( A \\mathbf{z}=\\mathbf{0} \\)`,
        `\\( A \\mathbf{x}=A \\mathbf{y} \\) implies \\( A(\\mathbf{x}-\\mathbf{y})=\\mathbf{0} \\), but \\( \\mathbf{x} \\neq \\mathbf{y} \\)`,
      ],
      answer: "A",
      solution: `<img src="/images/quiz/wqt-em2/3.png" style="max-width: 100%;">`
    },
    {
      marks: 1,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>Consider the following statements about linear systems. Which of the following are TRUE?</p> <p></p>`,
      image: "",
      options: [
        `If an \\( m \\times n \\) matrix \\( A \\) has \\( m \\) pivots after row reduction, then for each \\( \\mathbf{b} \\in \\mathbb{R}^{m} \\), the matrix equation \\( A \\mathbf{x}=\\mathbf{b} \\) has at least one solution.`,
        `If a system of linear equations \\( A \\mathbf{x}=\\mathbf{b} \\) has infinitely many solutions, then the system of linear equations \\( A \\mathbf{x}=\\mathbf{c} \\) for any other vector \\( \\mathbf{c} \\) has either no solution or infinitely many solutions.`,
        `For three vectors \\( \\mathbf{u}, \\mathbf{v}, \\mathbf{w} \\), if \\( \\{\\mathbf{u}, \\mathbf{v}\\} \\) is linearly independent, and \\( \\{\\mathbf{v}, \\mathbf{w}\\} \\) is linearly independent, then \\( \\{\\mathbf{u}, \\mathbf{v}, \\mathbf{w}\\} \\) is linearly independent.`,
        `If \\( \\{\\mathbf{u}, \\mathbf{v}, \\mathbf{w}\\} \\) are linearly dependent, then \\( \\mathbf{u} \\) is a linear combination of \\( \\mathbf{v} \\) and \\( \\mathbf{w} \\).`,
      ],
      answer: ["A", "B"],
      solution: `<img src="/images/quiz/wqt-em2/4.png" style="max-width: 100%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>Consider the matrix \\( A \\) with the following facts:<br> \$\$ \\begin{aligned} &amp; A\\left[\\begin{array}{c} -1 \\\\ 1 \\end{array}\\right]=\\left[\\begin{array}{c} -4 \\\\ 3 \\end{array}\\right] \\\\ &amp; A\\left[\\begin{array}{c} 1 \\\\ -2 \\end{array}\\right]=\\left[\\begin{array}{l} 1 \\\\ 0 \\end{array}\\right] \\end{aligned} \$\$ <br>Use this information to find the solution to \\( A \\mathbf{x}=\\left[\\begin{array}{l}0 \\\\ 3\\end{array}\\right] \\). </p> <p></p>`,
      image: "",
      options: [
        `\\( \\mathbf{x}=\\left[\\begin{array}{c}3 \\\\ -7\\end{array}\\right] \\)`,
        `\\( \\mathbf{x}=\\left[\\begin{array}{c}-3 \\\\ 7\\end{array}\\right] \\)`,
        `\\( \\mathbf{x}=\\left[\\begin{array}{c}4 \\\\ -1\\end{array}\\right] \\)`,
        `\\( \\mathbf{x}=\\left[\\begin{array}{c}2 \\\\ -6\\end{array}\\right] \\)`,
      ],
      answer: "A",
      solution: `<img src="/images/quiz/wqt-em2/5.png" style="max-width: 100%;">`
    },
    {
      marks: 1,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>Which of the following statements is/are <strong>TRUE</strong>?</p> <p></p>`,
      image: "",
      options: [
        `If a linear system has strictly more equations than variables, it must be inconsistent.`,
        `If \\( A \\) is an \\( m \\times n \\) matrix such that \\( A \\mathbf{x}=0 \\) has only the trivial solution, then \\( A \\mathbf{x}=\\mathbf{b} \\) has at most one solution for every \\( \\mathbf{b} \\in \\mathbb{R}^{m} \\).`,
        `The rows of any \\( 4 \\times 5 \\) matrix are linearly dependent.`,
        `If the linear system \\( A \\mathbf{x}=\\mathbf{b} \\) is inconsistent, then the coefficient matrix \\( A \\) does not have a pivot position in every row.`,
      ],
      answer: ["B", "D"],
      solution: `<img src="/images/quiz/wqt-em2/6.png" style="max-width: 100%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>For which vector \\( \\mathbf{b} \\) below does the system \\( \\left[\\begin{array}{ll}2 &amp; 4 \\\\ 4 &amp; 6 \\\\ 3 &amp; 4\\end{array}\\right] \\mathbf{x}=\\mathbf{b} \\) have a solution? </p> <p></p>`,
      image: "",
      options: [
        `\\( \\left[\\begin{array}{l}2 \\\\ 3 \\\\ 1\\end{array}\\right] \\)<br>&nbsp;`,
        `\\( \\left[\\begin{array}{l}3 \\\\ 4 \\\\ 3\\end{array}\\right] \\)<br>&nbsp;`,
        `\\( \\left[\\begin{array}{l}1 \\\\ 2 \\\\ 1\\end{array}\\right] \\)<br>&nbsp;`,
        `\\( \\left[\\begin{array}{l}2 \\\\ 2 \\\\ 1\\end{array}\\right] \\)`,
      ],
      answer: "D",
      solution: `<img src="/images/quiz/wqt-em2/7.png" style="max-width: 100%;">`
    },
    {
      marks: 1,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>Consider the following statements about linear systems and matrix theory. Which of the following statements are TRUE?</p> <p></p>`,
      image: "",
      options: [
        `If every column of the coefficient matrix of a linear system \\( A \\mathbf{x}=\\mathbf{b} \\) contains a pivot, then the system has at most one solution.`,
        `If the coefficient matrix of a linear system \\( A \\mathbf{x}=\\mathbf{b} \\) has a pivot in every row, then the system has at<br>least one solution.`,
        `If the linear system \\( A \\mathbf{x}=\\mathbf{0} \\) has at least one solution, then \\( A \\mathbf{x}=\\mathbf{b} \\) must have at least one solution.`,
        `If the linear system \\( A \\mathbf{x}=\\mathbf{0} \\) has at most one solution, then \\( A \\mathbf{x}=\\mathbf{b} \\) has at most one solution.`,
      ],
      answer: ["A", "B", "D"],
      solution: `<img src="/images/quiz/wqt-em2/8.png" style="max-width: 100%;">`
    },
    {
      marks: 1,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>Consider the following statements about linear systems and matrices. Which of the following is/are TRUE? </p> <p></p>`,
      image: "",
      options: [
        `If \\( R \\) is the reduced row echelon form of an \\( m \\times n \\) matrix \\( A \\) and \\( A \\mathbf{x}=\\mathbf{b} \\) is consistent for some vector \\( \\mathbf{b} \\in \\mathbb{R}^{m} \\), then \\( R \\mathbf{x}=\\mathbf{b} \\) must be consistent.`,
        `If the linear system \\( A \\mathbf{x}=\\mathbf{b} \\) has more than one solution for some value \\( \\mathbf{b} \\), then the linear system \\( A \\mathbf{x}=0 \\) also has more than one solution.`,
        `If every column of a matrix has a pivot, then the system is always consistent.`,
        `If every row of a matrix has a pivot, then the system is always consistent.`,
      ],
      answer: ["B", "D"],
      solution: `<img src="/images/quiz/wqt-em2/9.png" style="max-width: 100%;">`
    },
    {
      marks: 1,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>Let \\( Ax = b \\) be a system of linear equations where \\( A \\) is an \\( m \\times n \\) matrix and \\( b \\) is a \\( m \\times 1 \\) column vector and \\( X \\) is an \\( n \\times1 \\) column vector of unknowns. Which of the following is/are \\( \\textbf{True} \\)? </p> <p></p>`,
      image: "",
      options: [
        `<p>The system has a solution if and only if, both \\( A \\) and the augmented matrix \\( [Ab] \\) have the same rank. </p>`,
        `<p>If \\( m &lt; n \\) and \\( b \\) is the zero vector, then the system has infinitely many solutions. </p>`,
        `<p>If \\( m=n \\) and \\( b \\) is a non-zero vector, then the system has a unique solution. </p>`,
        `<p>The system will have only a trivial solution when \\( m=n \\), \\( b \\) is the zero vector and \\( \\text{rank}(A) =n \\). </p>`,
      ],
      answer: ["A", "B", "D"],
      solution: `<img src="/images/quiz/wqt-em2/10.png" style="max-width: 100%;">`
    },
  ]
});

registerTest({
  series: "weekly-cs-gate-2027",
  name: "WQT - Engineering Mathematics-3|Linear Algebra",
  date: "Sep 14, 2026",
  questions: [
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>Consider the vectors \\( \\mathbf{v}_1 \\) and \\( \\mathbf{v}_2 \\) given by<br> \$\$ \\mathbf{v}_1=\\left(\\begin{array}{l} 2 \\\\ t \\\\ 3 \\end{array}\\right), \\quad \\mathbf{v}_2=\\left(\\begin{array}{l} 3 \\\\ 6 \\\\ t \\end{array}\\right) \$\$ <br>Which statement is true? </p> <p></p>`,
      image: "",
      options: [
        `The vectors \\( \\left\\{\\mathbf{v}_1, \\mathbf{v}_2\\right\\} \\) are linearly independent for all \\( t \\)`,
        `The vectors \\( \\left\\{\\mathbf{v}_1, \\mathbf{v}_2\\right\\} \\) are linearly dependent for all \\( t \\)`,
        `The vectors \\( \\left\\{\\mathbf{v}_1, \\mathbf{v}_2\\right\\} \\) are linearly dependent when \\( t=4 \\), and linearly independent otherwise`,
        `The vectors \\( \\left\\{\\mathbf{v}_1, \\mathbf{v}_2\\right\\} \\) are linearly independent when \\( t=4 \\), and linearly dependent otherwise`,
      ],
      answer: "A",
      solution: `<img src="/images/quiz/wqt-em3/1.png" style="max-width: 100%;">`
    },
    {
      marks: 1,
      neg: 0,
      type: "NAT",
      text: `<p>Consider a matrix \\( A_{4 \\times 5} \\)., where all the solutions of \\( A x=0 \\) has the following form - \$\$ \\left[\\begin{array}{c} 6 c-12 e \\\\ -4 c+10 e \\\\ c \\\\ -5 e \\\\ e \\end{array}\\right] \$\$ What will be the rank of \\( A? \\) </p>`,
      image: "",
      options: [],
      answer: "3",
      solution: `<img src="/images/quiz/wqt-em3/2.png" style="max-width: 100%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>Let \\( A \\) be a \\( n \\times n \\) matrix, and let \\( u, v, w \\) be nonzero vectors in \\( \\mathbf{R}^n \\) which are distinct \\( (\\text{so}\\; u \\neq v, u \\neq w \\), and \\( v \\neq w). \\)<br>Suppose \\( A u=2 u, \\quad A v=2 v, \\quad A w=-w \\).<br>Which one of the following vectors must be an eigenvector of \\( A? \\) </p> <p></p>`,
      image: "",
      options: [
        `\\( u-v \\)`,
        `\\( v-w \\)`,
        `\\( u-w \\)`,
        `none of the above`,
      ],
      answer: "A",
      solution: `<img src="/images/quiz/wqt-em3/3.png" style="max-width: 100%;">`
    },
    {
      marks: 1,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>Consider a matrix \\( A_{n \\times&nbsp;n} \\) having the following characteristic equation -<br> \$\$ \\lambda^2(\\lambda-3)(\\lambda+2)^3(\\lambda-4)^3 \$\$<br>What could be \\( \\operatorname{rank}(\\mathrm{A})? \\) </p> <p></p>`,
      image: "",
      options: [
        `\\( 6 \\)`,
        `\\( 7 \\)`,
        `\\( 8 \\)`,
        `\\( 9 \\)`,
      ],
      answer: ["B", "C"],
      solution: `<img src="/images/quiz/wqt-em3/4.png" style="max-width: 100%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>Consider the system below, where \\( h \\) and \\( k \\) are real numbers.<br> \$\$ \\begin{array}{r} x+3 y=2 \\\\ 3 x-h y=k \\end{array} \$\$<br>Find the values of \\( h \\) and \\( k \\) which give the system infinitely many solutions. </p> <p></p>`,
      image: "",
      options: [
        `\\( h=-9 \\) and \\( k \\neq 6 \\)`,
        `\\( h \\neq-9 \\) and \\( k \\) can be any real number`,
        `\\( h=-9 \\) and \\( k=6 \\)`,
        `System is inconsistent for all values of \\( h \\) and \\( k \\)`,
      ],
      answer: "C",
      solution: `<img src="/images/quiz/wqt-em3/5.png" style="max-width: 100%;">`
    },
    {
      marks: 1,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>Let \\( \\vec{v} \\) be an eigenvector of an invertible matrix \\( A \\). Which of the following are necessarily true? </p> <p></p>`,
      image: "",
      options: [
        `\\( \\vec{v} \\) is an eigenvector of \\( A^{-1} \\).`,
        `\\( \\vec{v} \\) is an eigenvector of \\( A^2 \\).`,
        `\\( \\vec{v} \\) is an eigenvector of \\( A+I \\).`,
        `\\( \\vec{v} \\) is an eigenvector of \\( A+2 I \\).`,
      ],
      answer: ["A", "B", "C", "D"],
      solution: `<img src="/images/quiz/wqt-em3/6.png" style="max-width: 100%;">`
    },
    {
      marks: 1,
      neg: 0,
      type: "NAT",
      text: `<p>Let \\( \\mathrm{A} \\) be a \\( 3 \\times 3 \\) matrix. Let \\( \\mathbf{x}, \\mathbf{y}, \\mathbf{z} \\) are linearly independent \\( 3 \\)-dimensional vectors. Suppose that we have \$\$ A \\mathbf{x}=\\left[\\begin{array}{l} 1 \\\\ 0 \\\\ 1 \\end{array}\\right], A \\mathbf{y}=\\left[\\begin{array}{l} 0 \\\\ 1 \\\\ 0 \\end{array}\\right], A \\mathbf{z}=\\left[\\begin{array}{l} 1 \\\\ 1 \\\\ 1 \\end{array}\\right] . \$\$ Then find the value of the determinant of the matrix \\( \\mathrm{A} \\). </p>`,
      image: "",
      options: [],
      answer: "0",
      solution: `<img src="/images/quiz/wqt-em3/7.png" style="max-width: 100%;">`
    },
    {
      marks: 1,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>Which of the following is/are TRUE?</p> <p></p>`,
      image: "",
      options: [
        `If the echelon form of an \\( m \\times n \\) matrix has a pivot in every column then \\( n \\geq m \\)`,
        `If the echelon form of an \\( m \\times n \\) matrix \\( A \\) has a pivot in every row, then the matrix equation \\( A\\left[\\begin{array}{c}x_1 \\\\ \\vdots \\\\ x_n\\end{array}\\right]=\\vec{b} \\) is consistent for every \\( \\vec{b} \\in \\mathbb{R}^m \\).`,
        `A system of \\( 25 \\) linear equations in \\( 13 \\) unknowns always has at least one solution.`,
        `If a system of \\( 25 \\) linear equations in \\( 13 \\) unknowns has at least one solution then it has infinitely many solutions.`,
      ],
      answer: ["B"],
      solution: `<img src="/images/quiz/wqt-em3/8.png" style="max-width: 100%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p> \$\$ \\left[\\begin{array}{ll} 3 &amp; 1 \\\\ 1 &amp; 0 \\\\ 2 &amp; 5 \\end{array}\\right]\\left[\\begin{array}{lll} a &amp; 1 &amp; 0 \\\\ 2 &amp; b &amp; 1 \\end{array}\\right]=A_{3 \\times 3} \$\$ <br>At what values of \\( (a, b), A_{3 \\times 3} \\) will be invertible? </p> <p></p>`,
      image: "",
      options: [
        `\\( (1,-1) \\)`,
        `\\( (-1,1) \\)`,
        `Both A and B`,
        `None of the above`,
      ],
      answer: "D",
      solution: `<img src="/images/quiz/wqt-em3/9.png" style="max-width: 100%;">`
    },
    {
      marks: 1,
      neg: 0,
      type: "NAT",
      text: `<p>The given system has infinitely many solutions for \\( k=? \\) \$\$ \\left[\\begin{array}{ccc} 2 &amp; 2 &amp; -4 \\\\ 1 &amp; 3 &amp; -2 \\\\ -4 &amp; k &amp; 8 \\end{array}\\right]\\left[\\begin{array}{l} x \\\\ y \\\\ z \\end{array}\\right]=\\left[\\begin{array}{c} 3 \\\\ 4 \\\\ -6 \\end{array}\\right] \$\$ </p>`,
      image: "",
      options: [],
      answer: "-4",
      solution: `<img src="/images/quiz/wqt-em3/10.png" style="max-width: 100%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>In the echelon form of the augmented matrix \\( [A \\mid b]: \\)&nbsp; </p> <p>&nbsp;</p> <ul><li>I. A single row of the form \\( (000 \\ldots 0 \\mid 0) \\) is enough to conclude that the system will have infinitely many solutions.</li><li>II. A single row of the form (00 \\( \\cdots 0 \\mid 1) \\) is enough to conclude that the system will have no solution.</li></ul><ol style="list-style-type:upper-alpha"> <li>Only I is true.</li> <li>Only Il is true.</li> <li>Both I and II are true.</li> <li>Neither I, nor II are true.</li> </ol> <p></p>`,
      image: "",
      options: [
        `Only I is true.`,
        `Only II is true.`,
        `Both I and II are true.`,
        `Neither I, nor II are true.`,
      ],
      answer: "B",
      solution: `<img src="/images/quiz/wqt-em3/11.png" style="max-width: 100%;">`
    },
    {
      marks: 1,
      neg: 0,
      type: "NAT",
      text: `<p>If \\( P=\\left[\\begin{array}{lll}1 &amp; \\alpha &amp; 3 \\\\ 1 &amp; 3 &amp; 3 \\\\ 2 &amp; 4 &amp; 4\\end{array}\\right] \\) is the adjoint of a \\( 3 \\times 3 \\) matrix \\( \\mathrm{A}, \\) and \\( \\operatorname{det(A)}=4, \\) then \\( \\alpha \\) equals to? </p>`,
      image: "",
      options: [],
      answer: "11",
      solution: `<img src="/images/quiz/wqt-em3/12.png" style="max-width: 100%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>Given the following matrix:<br> \$\$ A=\\left[\\begin{array}{lll} 1 &amp; 2 &amp; 2 \\\\ 2 &amp; 1 &amp; 2 \\\\ 2 &amp; 2 &amp; 1 \\end{array}\\right] \$\$ <br>Consider the following statements: </p> <ul><li>I. \\( A^2-4 A-5 I=0 \\) (where \\( I \\) is identity matrix).</li><li>II. \\( A^{-1}=\\frac{(A-4 I)}{5} \\).</li></ul><p>Which of the following options is correct?</p> <ol style="list-style-type:upper-alpha"> <li>Only I is true. </li> <li>Only II is true.</li> <li>Both I and II are true.</li> <li>Neither I, nor II are true.</li> </ol> <p></p>`,
      image: "",
      options: [
        `Only I is true.`,
        `Only II is true.`,
        `Both I and II are true.`,
        `Neither I, nor II are true.`,
      ],
      answer: "C",
      solution: `<img src="/images/quiz/wqt-em3/13.png" style="max-width: 100%;">`
    },
    {
      marks: 1,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>Mark all the INCORRECT statements</p> <p></p>`,
      image: "",
      options: [
        `Let \\( A \\)&nbsp;be the matrix of a rotation by angle \\( 30 \\) degree. That is, for any vector \\( x, \\)&nbsp;the angle between \\( x \\) and \\( A x \\) is always \\( 30 \\) degree. Then \\( A \\) has no real eigenvalues.`,
        `Let \\( A \\) be an \\( n \\times n \\) matrix. Then the eigenvalues of \\( A \\) are the diagonal entries of \\( A \\).`,
        `If \\( A \\) is a \\( 3 \\times 3 \\) matrix with eigenvalues \\( \\lambda=1,2,3 \\), then \\( A \\) is singular.`,
        `If \\( A \\) is a symmetric matrix, then all its eigenvectors are orthogonal.`,
      ],
      answer: ["B", "C", "D"],
      solution: `<img src="/images/quiz/wqt-em3/14.png" style="max-width: 100%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>Suppose \\( \\mathbf{A}=\\mathbf{B C} \\), where \\( \\mathbf{B} \\) is a \\( 4 \\times 2 \\) matrix and \\( \\mathbf{C} \\) is a \\( 2 \\times 4 \\) matrix. Is \\( \\mathbf{A} \\) invertible? </p> <p></p>`,
      image: "",
      options: [
        `Yes, \\( \\mathbf{A} \\) is invertible.`,
        `No, \\( \\mathbf{A} \\) is not invertible.`,
        `Depends on \\( \\mathbf{C} \\) only.`,
        `Depends on \\( \\mathbf{B} \\) and \\( \\mathbf{C} \\).`,
      ],
      answer: "B",
      solution: `<img src="/images/quiz/wqt-em3/15.png" style="max-width: 100%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>Let \\( A=\\left[\\begin{array}{cc}1 &amp; 0 \\\\ -1 &amp; 1 \\\\ k &amp; 2\\end{array}\\right] \\) and \\( b=\\left[\\begin{array}{l}1 \\\\ 0 \\\\ 1\\end{array}\\right] \\). For which value of \\( k \\) does the system \\( A \\mathbf{x}=b \\) have a unique solution? </p> <p></p>`,
      image: "",
      options: [
        `There is no such value for \\( k \\).`,
        `\\( k=0 \\)`,
        `\\( k=-1 \\)`,
        `\\( k=1 \\)`,
      ],
      answer: "C",
      solution: `<img src="/images/quiz/wqt-em3/16.png" style="max-width: 100%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>Let \\( A \\) be an \\( m \\times n \\)-matrix and let \\( B \\) be an \\( n \\times m \\)-matrix. Then which of the following statement is not true for all such matrices? </p> <p></p>`,
      image: "",
      options: [
        `\\( B A \\) is defined`,
        `the columns of \\( A B \\) are linear combinations of the columns of \\( B \\)`,
        `\\( A B \\) is defined`,
        `the columns of \\( A B \\) are linear combinations of the columns of \\( A \\)`,
      ],
      answer: "B",
      solution: `<img src="/images/quiz/wqt-em3/17.png" style="max-width: 100%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>Consider \\( A=\\left[\\begin{array}{ll}1 &amp; 0 \\\\ 0 &amp; 1 \\\\ 0 &amp; 2\\end{array}\\right] \\) and \\( B=\\left[\\begin{array}{ccc}1 &amp; 0 &amp; 0 \\\\ 0 &amp; 1 &amp; -1 \\\\ 0 &amp; 2 &amp; 0\\end{array}\\right] \\) . Let \\( \\boldsymbol{v}=\\left[\\begin{array}{l}1 \\\\ 1 \\\\ 1\\end{array}\\right] \\) . Which of the following statements is true? </p> <p></p>`,
      image: "",
      options: [
        `\\( \\boldsymbol{v} \\) is a linear combination of the columns of \\( B \\) but not of the columns of \\( A \\).`,
        `\\( \\boldsymbol{v} \\) is a linear combination of the columns of \\( A \\) and of the columns of \\( B \\).`,
        `\\( \\boldsymbol{v} \\) is a linear combination of the columns of \\( A \\) but not of the columns of \\( B \\).`,
        `\\( \\boldsymbol{v} \\) is neither a linear combination of the columns of \\( A \\) nor of the columns of \\( B \\).`,
      ],
      answer: "A",
      solution: `<img src="/images/quiz/wqt-em3/18.png" style="max-width: 100%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>Let \\( A \\) be a \\( 2 \\times 3 \\)-matrix and \\( b \\) a vector in \\( \\mathbb{R}^2 \\). </p> <p>Consider the following two statements:</p> <ul> <li> \\( (\\text{P}1)\\;&nbsp;A \\) has at most two pivots, </li> <li> \\( (\\text{P2}) \\) Assuming \\( A x=b \\) has a solution, then it has infinitely many solutions. </li> </ul> <p>Then:</p> <p></p>`,
      image: "",
      options: [
        `Only Statement \\( \\text{P2} \\) is correct.`,
        `Neither Statement \\( \\text{P1} \\) nor Statement \\( \\text{P2} \\) is correct.`,
        `Only Statement \\( \\text{P1} \\) is correct.`,
        `Statement \\( \\text{P1} \\) and Statement \\( \\text{P2} \\) are correct.`,
      ],
      answer: "D",
      solution: `<img src="/images/quiz/wqt-em3/19.png" style="max-width: 100%;">`
    },
    {
      marks: 1,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>Suppose \\( A \\) is \\( 3 \\) by \\( 4, \\) and \\( A x=0 \\) has all solutions in the following form -<br> \$\$ \\mathrm{x}=\\mathrm{s}\\left[\\begin{array}{l} 1 \\\\ 1 \\\\ 1 \\\\ 0 \\end{array}\\right]+\\mathrm{t}\\left[\\begin{array}{r} -2 \\\\ -1 \\\\ 0 \\\\ 1 \\end{array}\\right] \$\$ <br>We do some unknown elementary row transformations on \\( A \\) and get the following matrix \\( R \\) -<br> \$\$ R=\\left[\\begin{array}{llll} 1 &amp; 0 &amp; \\mathrm{a} &amp; \\mathrm{b} \\\\ 0 &amp; 1 &amp; \\mathrm{c} &amp; \\mathrm{d} \\\\ 0 &amp; 0 &amp; 0 &amp; 0 \\end{array}\\right] \$\$ <br>What will be the values of \\( a, b, c, \\)&nbsp;and \\( d? \\) </p> <p></p>`,
      image: "",
      options: [
        `\\( a=-1 \\)`,
        `\\( b=2 \\)`,
        `\\( c=-1 \\)`,
        `\\( d=1 \\)`,
      ],
      answer: ["A", "B", "C", "D"],
      solution: `<img src="/images/quiz/wqt-em3/20.png" style="max-width: 100%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>Consider a matrix \\( A \\) of dimension \\( m \\times n \\) such that - </p> <p> \\( A x=\\left[\\begin{array}{l}1 \\\\ 1 \\\\ 1\\end{array}\\right] \\) has no solutions and \\( A x=\\left[\\begin{array}{l}0 \\\\ 1 \\\\ 0\\end{array}\\right] \\) has exactly one solution </p> <p>Which of the following CAN be true?</p> <p></p>`,
      image: "",
      options: [
        `\\( \\operatorname{Rank}(A)=2 \\)`,
        `\\( m=3 \\)`,
        `\\( n=1 \\)`,
        `\\( \\operatorname{Rank}(A)=1 \\)`,
      ],
      answer: ["A", "B", "C", "D"],
      solution: `<img src="/images/quiz/wqt-em3/21.png" style="max-width: 100%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>A three-by-three matrix \\( B \\) is known to have eigenvalues \\( 0,1 \\) and \\( 2. \\) This information is enough to find which one of these (give the answers where possible): </p> <p></p>`,
      image: "",
      options: [
        `The rank of \\( B \\)`,
        `The determinant of \\( B^T B \\)`,
        `The eigenvalues of \\( B^T B \\)`,
        `The eigenvalues of \\( \\left(B^2+I\\right)^{-1} \\)`,
      ],
      answer: ["A", "B", "D"],
      solution: `<img src="/images/quiz/wqt-em3/22.png" style="max-width: 100%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>Let \\( A \\) be an \\( m \\times n \\)-matrix. Consider the system of linear equations \\( A X=b \\), which of the following statement is always true: </p> <p></p>`,
      image: "",
      options: [
        `Suppose \\( m&gt;n \\) then rank of augmented matrix \\( (A \\mid b) \\) can not larger than \\( m \\).`,
        `Suppose \\( A \\) has full rank then \\( A X=b \\) always has a solution.`,
        `If \\( A X=b \\) has a solution then \\( A X=0 \\) has unique solution.`,
        `If \\( A X=b \\) has a unique solution then \\( A \\) has to be invertible.`,
      ],
      answer: ["A"],
      solution: `<img src="/images/quiz/wqt-em3/23.png" style="max-width: 100%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p>Let \\( A \\) be a \\( 3 \\times 3 \\) matrix. Suppose that \\( A \\) has eigenvalues \\( 2 \\) and \\( -1, \\) and suppose that \\( \\mathbf{u} \\) and \\( \\mathbf{v} \\) are eigenvectors corresponding to \\( 2 \\) and \\( -1, \\) respectively, where<br> \$\$ \\mathbf{u}=\\left[\\begin{array}{c} 1 \\\\ 0 \\\\ -1 \\end{array}\\right] \\text { and } \\mathbf{v}=\\left[\\begin{array}{l} 2 \\\\ 1 \\\\ 0 \\end{array}\\right] \$\$ <br>Then compute \\( A^5 \\mathbf{w} \\), where<br> \$\$ \\mathbf{w}=\\left[\\begin{array}{c} 7 \\\\ 2 \\\\ -3 \\end{array}\\right] \$\$ </p> <p></p>`,
      image: "",
      options: [
        `\\( \\left[\\begin{array}{c} 92 \\\\ 2 \\\\ -96 \\end{array}\\right] \\) <br>&nbsp;`,
        `\\( {\\left[\\begin{array}{c} -92 \\\\ -2 \\\\ -96 \\end{array}\\right]} \\) <br>&nbsp;`,
        `\\( {\\left[\\begin{array}{c} 92 \\\\ -2 \\\\ -96 \\end{array}\\right]} \\) <br>&nbsp;`,
        `\\( {\\left[\\begin{array}{c} 92 \\\\ -2 \\\\ 96 \\end{array}\\right]} \\)`,
      ],
      answer: "C",
      solution: `<img src="/images/quiz/wqt-em3/24.png" style="max-width: 100%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "NAT",
      text: `<p>Let \\( u \\in \\mathbb{R}^n \\) be such that \\( u^T u=1 \\) and set \\( A=u u^T \\). What will be the sum of all eigenvalues of \\( A? \\) </p>`,
      image: "",
      options: [],
      answer: "1",
      solution: `<img src="/images/quiz/wqt-em3/25.png" style="max-width: 100%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>Given a matrix \\( A\\left(m \\times&nbsp;n\\right) \\) and \\( A x=b \\). Consider below statements : </p> <ul> <li> \\( \\text{S}: m </li> <li> \\( \\mathrm{P}:\\;&nbsp;A \\) has \\( m&nbsp;\\;\\mathrm{Linearly ~Independent} \\) columns </li> <li> \\( \\text{R}: \\) There is a solution for every&nbsp; \\( b \\) in&nbsp; \\( \\text{R}^m \\). </li> </ul> <p>Which of the following logical implications are ALWAYS true?</p> <p></p>`,
      image: "",
      options: [
        `\\( \\text{S} \\rightarrow \\text{R} \\)`,
        `\\( \\text{R} \\rightarrow \\text{P} \\)`,
        `\\( \\text{S} \\rightarrow \\sim \\text{P} \\)`,
        `\\( (S \\) and \\( \\text{P}) \\rightarrow \\text{R} \\)`,
      ],
      answer: ["B", "D"],
      solution: `<img src="/images/quiz/wqt-em3/26.png" style="max-width: 100%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p>Consider the following set of (column) vectors:<br> \$\$ X=\\left\\{\\left[\\begin{array}{l}x_1 \\\\ x_2 \\\\ x_3\\end{array}\\right] \\in \\mathbb{R}^3 \\mid 2 x_1+3 x_2-x_3=0\\right\\}. \$\$ </p> <p>Which of the following statements are true?</p> <ul><li>I. Every element of set \\( X \\) can be written as linear combination of vectors of \\( S= \\) \\( \\left\\{\\left[\\begin{array}{c}1 \\\\ -1 \\\\ -1\\end{array}\\right],\\left[\\begin{array}{l}1 \\\\ 0 \\\\ 2\\end{array}\\right]\\right\\} \\)</li><li>II. \\( \\left\\{\\left[\\begin{array}{c}1 \\\\ -1 \\\\ -1\\end{array}\\right],\\left[\\begin{array}{l}1 \\\\ 0 \\\\ 2\\end{array}\\right]\\right\\} \\) is a linearly independent set.</li></ul><p>Choose the correct option.</p> <ol style="list-style-type:upper-alpha"> <li>Only I&nbsp;is true.</li> <li>Only II is true.</li> <li>Both I and II are true.</li> <li>Neither I, nor II are true.</li> </ol> <p></p>`,
      image: "",
      options: [
        `Only I is true.`,
        `Only II is true.`,
        `Both I and II are true.`,
        `Neither I, nor II are true.`,
      ],
      answer: "C",
      solution: `<img src="/images/quiz/wqt-em3/27.png" style="max-width: 100%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>Choose the correct statements.</p> <p></p>`,
      image: "",
      options: [
        `If \\( b&gt;\\frac{2}{3} \\), then \\( A=\\left[\\begin{array}{ll}2 &amp; b \\\\ 3 &amp; 1\\end{array}\\right] \\) is invertible.`,
        `If \\( P \\) is an invertible matrix such that \\( B=P^{-1} A P, \\)&nbsp;then \\( \\operatorname{det} A=\\operatorname{det} B \\).`,
        `Let \\( A \\) be an \\( m \\times n \\) matrix. If \\( A=P D P^{-1} \\) for some invertible matrix \\( P \\), and diagonal matrix \\( D, \\)&nbsp;then for any integer \\( k \\geq 1, A^k=P D^k P^{-1} \\).`,
        `A system of linear equations with \\( m \\) equations and \\( n \\) variables, such that \\( m=n, \\)&nbsp;always has a solution.`,
      ],
      answer: ["A", "B", "C"],
      solution: `<img src="/images/quiz/wqt-em3/28.png" style="max-width: 100%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p>Given matrix \\( A\\left(m \\times n\\right) \\) such that \\( A x=b. \\) Consider below statements : </p> <ul> <li> \\( \\text{S1}: \\) If \\( b \\) is Linearly Dependent on cols of matrix, then it need not always have a unique solution. </li> <li> \\( \\text{S2}: \\)&nbsp;If columns&nbsp;of matrix are Linearly Dependent, then above system of equation can have a unique solution. </li> </ul> <p>&nbsp;</p> <p></p>`,
      image: "",
      options: [
        `\\( \\text{S1} \\) and \\( \\text{S2} \\) are true`,
        `\\( \\mathrm{S} 1 \\) and \\( \\mathrm{S} 2 \\) are false`,
        `\\( \\text{S1} \\) is true and \\( \\text{S2} \\) is false`,
        `\\( \\mathrm{S} 2 \\) is true and \\( \\mathrm{S} 1 \\) is false`,
      ],
      answer: "C",
      solution: `<img src="/images/quiz/wqt-em3/29.png" style="max-width: 100%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p>There exist a \\( 3 \\times 3 \\) real symmetric matrix \\( \\text{S} \\) such that - </p> <ul> <li> \\( \\text{Statement 1}:&nbsp;\\text{S}\\left(\\begin{array}{l} 1 \\\\ 2 \\\\ 3 \\end{array}\\right)=\\left(\\begin{array}{l} 2 \\\\ 4 \\\\ 6 \\end{array}\\right) \\text { and } S\\left(\\begin{array}{l} 2 \\\\ 1 \\\\ 0 \\end{array}\\right)=\\left(\\begin{array}{r} -2 \\\\ -1 \\\\ 0 \\end{array}\\right) . \\) </li> <li> \\( \\text{Statement} 2: \\text{S}^2=-\\text{I} \\) </li> </ul> <p>Which of the following option is CORRECT?</p> <p></p>`,
      image: "",
      options: [
        `Statement \\( 1 \\) is true but Statement \\( 2 \\) is false`,
        `Statement \\( 1 \\) is false but Statement \\( 2 \\) is true`,
        `Both Statements are true`,
        `Both Statements are false`,
      ],
      answer: "D",
      solution: `<img src="/images/quiz/wqt-em3/30.png" style="max-width: 100%;">`
    },
  ]
});

registerTest({
  series: "weekly-cs-gate-2027",
  name: "WQT - Engineering Mathematics-4|Linear Algebra",
  date: "Sep 21, 2026",
  questions: [
    {
      marks: 1,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>Let \\( A \\) be an \\( n \\times n \\) matrix of real or complex numbers. Which of the following statements are equivalent to: “the matrix \\( A \\) is invertible”? </p> <p></p>`,
      image: "",
      options: [
        `The columns of \\( A \\) are linearly independent.`,
        `The rows of \\( A \\) are linearly independent.`,
        `The only solution of the homogeneous equations \\( Ax = 0 \\) is \\( x = 0 \\). &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
        `The rank of \\( A \\) is \\( n \\).`,
      ],
      answer: ["A", "B", "C", "D"],
      solution: `<img src="/images/quiz/wqt-em4/1.png" style="max-width: 100%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>Let \\( M \\) be a \\( 2 \\times 2 \\) matrix with the property that the sum of the elements of each row and sum of the elements of each column is the same constant \\( c \\). Which (if any) any of the vectors must be an eigenvector of \\( M \\) ? </p> <p> \\( U = \\left[\\begin{array}{l}1 \\\\ 0 \\\\ \\end{array}\\right], \\) \\( V = \\left[\\begin{array}{l}0 \\\\ 1 \\\\ \\end{array}\\right], \\) \\( W = \\left[\\begin{array}{l}1 \\\\ 1 \\\\ \\end{array}\\right] \\) </p> <p></p>`,
      image: "",
      options: [
        `\\( U \\)`,
        `\\( V \\)`,
        `\\( W \\)`,
        `None of the above`,
      ],
      answer: "C",
      solution: `<img src="/images/quiz/wqt-em4/2.png" style="max-width: 100%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>Let \\( A \\) and \\( B \\) be two \\( n \\times n \\) matrices. If \\( B \\) is invertible and \\( (I+BA)^{-1} = 2B^2 \\), then which of the following is the correct definition of \\( A \\) in terms of \\( B \\)? </p> <p></p>`,
      image: "",
      options: [
        `\\( A = (1/2)B^{-3} - B^{-1} \\)`,
        `\\( A = 2B^{-3}- B^{-1} \\)`,
        `\\( A = 2B^3-I \\)`,
        `None of the above`,
      ],
      answer: "A",
      solution: `<img src="/images/quiz/wqt-em4/3.png" style="max-width: 100%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>A \\( 4 \\times 4 \\) matrix \\( \\mathrm{A} \\) has rank 3 . Which of the following is/are true? </p> <p><br>1. \\( A^{-1} \\) does not exist<br>2. \\( A^{-1} \\) may exist, and if it does, its rank must be less than 3<br>3. \\( A^{-1} \\) may exist, and if it does, its rank must be greater than 1<br>4. \\( A^{-1} \\) may exist, and it can take any rank less than 5 </p> <p></p>`,
      image: "",
      options: [
        `Only 1 is correct`,
        `Only 2,3 are correct`,
        `Only 4 is correct`,
        `None of the statements are correct.`,
      ],
      answer: "A",
      solution: `<img src="/images/quiz/wqt-em4/4.png" style="max-width: 100%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>Consider two matrices \\( \\mathrm{A}_{6 \\times 3} \\) and \\( \\mathrm{B}_{3 \\times 6} \\), the non zero eigenvalues(EVs) of matrix \\( A B \\) are \\( 3,2,7,8 \\); see the following statements<br> \\( \\mathrm{S} 1 \\) : The EVs of BA must be all 0 for the above case to be true<br> \\( \\mathrm{S} 2 \\) : \\( A B \\) should not have more than 3 non zero \\( \\mathrm{EVs} \\) </p> <p></p>`,
      image: "",
      options: [
        `\\( \\mathrm{S} 1 \\) is true, \\( \\mathrm{S} 2 \\) is false`,
        `\\( \\mathrm{S} 2 \\) is true, \\( \\mathrm{S} 1 \\) is false`,
        `Both \\( \\mathrm{S} 1 \\) and \\( \\mathrm{S} 2 \\) are true`,
        `Neither \\( \\mathrm{S} 1 \\) nor \\( \\mathrm{S} 2 \\) is true`,
      ],
      answer: "B",
      solution: `<img src="/images/quiz/wqt-em4/5.png" style="max-width: 100%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>Let the \\( n \\times n \\) matrix \\( A \\) have an eigenvalue \\( \\lambda \\) with corresponding eigenvector \\( v \\).<br>Which of the following statements are true for matrix \\( A \\). </p> <p></p>`,
      image: "",
      options: [
        `\\( -v \\) is an eigenvector of \\( -A \\) with eigenvalue \\( - \\lambda \\).`,
        `If \\( v \\) is also an eigenvector of the \\( n \\times n \\) matrix \\( B \\) with eigenvalue \\( \\mu \\), then \\( \\lambda \\mu \\) is an eigenvalue of \\( AB \\).`,
        `Let \\( \\mu \\) be an eigenvalue of the \\( n \\times n \\) matrix \\( B \\) corresponding to the eigenvector \\( v \\), Then \\( \\lambda + \\mu \\) is an eigenvalue of \\( A+B \\).`,
        `eigenvalue of \\( A^3 \\) is \\( \\lambda^3 \\) and the eigenvector is \\( v^3 \\) .`,
      ],
      answer: ["A", "B", "C"],
      solution: `<img src="/images/quiz/wqt-em4/6.png" style="max-width: 100%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>Consider the following matrix A:<br> \\( \\left[\\begin{array}{lll}2 &amp; -1 &amp; 0 \\\\ 0 &amp; 2 &amp; 0 \\\\ 1 &amp; 0 &amp; 2\\end{array}\\right] \\) <br>Which of the following regarding the matrix \\( A \\) is/are correct?<br>&nbsp; </p> <p></p>`,
      image: "",
      options: [
        `\\( \\lambda = 2 \\) is one of the eigenvalues of \\( A \\).`,
        `\\( \\lambda = 1 \\) is one of the eigenvalues of \\( A \\).`,
        `If \\( x \\) is the eigenvector corresponding to eigenvalue \\( \\lambda \\) then \\( A^3 x \\) is equivalent to \\( \\lambda ^3 x \\) i.e.&nbsp; \\( A^3 x = \\lambda ^3 x \\).`,
        `If \\( x \\) is the eigenvector corresponding to eigenvalue \\( \\lambda \\) of \\( A \\) then \\( x \\) is also the eigenvector of &nbsp; \\( A^{-1} \\).`,
      ],
      answer: ["A", "C", "D"],
      solution: `<img src="/images/quiz/wqt-em4/7.png" style="max-width: 100%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p>Suppose a \\( 3 \\times 5 \\) matrix \\( A \\) has rank \\( r = 3 \\). Then the equation \\( Ax = b \\) \\( \\textbf{BLANK 1} \\) &nbsp;has &nbsp; \\( \\textbf{BLANK 2} \\).<br>Which of the following are appropriate words that can be filled in \\( \\textbf{BLANK 1} \\) &nbsp;has &nbsp; \\( \\textbf{BLANK 2} \\).? </p> <p></p>`,
      image: "",
      options: [
        `BLANK 1: Always, BLANK 2: Unique solution`,
        `BLANK 1: Always, BLANK 2: Infinitely many solutions`,
        `BLANK 1: Sometimes, BLANK 2: Unique solution`,
        `BLANK 1: Sometimes, BLANK 2: Infinitely many solutions`,
      ],
      answer: "B",
      solution: `<img src="/images/quiz/wqt-em4/8.png" style="max-width: 100%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>Which of the following statements is/are \\( \\textbf{NOT CORRECT} \\)? </p> <p></p>`,
      image: "",
      options: [
        `If \\( v1 \\) and \\( v2 \\) are linearly independent eigenvectors then they can correspond to the same eigenvalue.`,
        `If \\( A \\) is a nilpotent matrix, meaning that \\( A^k = 0 \\) for the least positive integer \\( k \\), and if \\( k = 2 \\), then \\( A \\) can have non-zero value as its eigenvalue.`,
        `\\( \\lambda \\) is the eigenvalue of \\( A \\) if and only if &nbsp; \\( \\lambda \\) is the eigenvalue of \\( A^T \\).`,
        `If \\( \\lambda \\) is an eigenvalue of an invertible matrix \\( A \\) then &nbsp; \\( \\lambda ^{-1} \\) is an eigenvalue of \\( A^{-1} \\).`,
      ],
      answer: ["B"],
      solution: `<img src="/images/quiz/wqt-em4/9.png" style="max-width: 100%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p>Given an \\( m \\times n \\) matrix \\( A \\) whose rows are linearly independent. Now, consider following statements regarding \\( A \\):<br>&nbsp;&nbsp; \\( S1: \\) The system of equations \\( Ax = b \\) for any \\( b \\) is consistent.<br>&nbsp;&nbsp; \\( S2: \\) &nbsp; \\( Ax = b \\) always has a unique solution.<br>Which of the following is \\( \\textbf{TRUE} \\) regarding \\( S1 \\) and \\( S2 \\)? </p> <p></p>`,
      image: "",
      options: [
        `Both \\( S1 \\) and \\( S2 \\) are TRUE.`,
        `\\( S1 \\) is TRUE and \\( S2 \\) is FALSE.`,
        `\\( S1 \\) is FALSE and \\( S2 \\) is TRUE.`,
        `Both \\( S1 \\) and \\( S2 \\) are FALSE.`,
      ],
      answer: "B",
      solution: `<img src="/images/quiz/wqt-em4/10.png" style="max-width: 100%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>Which of the following statements is/are \\( \\textbf{FALSE} \\)? </p> <p></p>`,
      image: "",
      options: [
        `For \\( n \\times n \\) real-symmetric matrices \\( A \\) and \\( B \\), \\( AB \\) and \\( BA \\) always have the same eigenvalues.`,
        `For \\( n \\times n \\) matrices \\( A \\) and \\( B \\) with \\( B \\) invertible, \\( AB \\) and \\( BA \\) always have the same eigenvalues.`,
        `For \\( n \\times n \\) matrices \\( A \\) and \\( B \\) with \\( B \\) invertible, \\( AB \\) and \\( BA \\) always have the same eigenvectors.`,
        `For \\( n \\times n \\) real-symmetric matrices \\( A \\) and \\( B \\), \\( AB \\) and \\( BA \\) always have the same eigenvectors.`,
      ],
      answer: ["C", "D"],
      solution: `<img src="/images/quiz/wqt-em4/11.png" style="max-width: 100%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p>The rank and nullity of a matrix \\( A \\) are 4 and 2 , respectively. The nullity of \\( A^{\\top} \\) is 3 . What are the dimensions of \\( A \\) ? </p> <p></p>`,
      image: "",
      options: [
        `\\( 6 \\times 7 \\)`,
        `\\( 4 \\times 5 \\)`,
        `\\( 7 \\times 6 \\)`,
        `\\( 5 \\times 4 \\)`,
      ],
      answer: "C",
      solution: `<img src="/images/quiz/wqt-em4/12.png" style="max-width: 100%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>Which of the followings(s) is/are TRUE ?</p> <p></p>`,
      image: "",
      options: [
        `If a system of linear equations has no free variables, then it has a unique solution.`,
        `If an augmented matrix \\( [A \\mid b] \\) is transformed into \\( [C \\mid d] \\) by elementary row operations, then the equations \\( A x=b \\) and \\( C x=d \\) have exactly the same solution sets.`,
        `If \\( A \\) is an \\( m \\times n \\) matrix and the equation \\( A x=b \\) is consistent for every \\( b \\) in \\( \\mathbb{R}^m \\), then \\( A \\) has m pivot columns.`,
        `If a matrix \\( A \\) with dimensions \\( m \\) by \\( n \\) has a pivot position in every row, then the equation \\( A x=b \\) has \\( a \\) unique solution for every \\( b \\) in the set of real numbers of dimension \\( m \\).`,
      ],
      answer: ["B", "C"],
      solution: `<img src="/images/quiz/wqt-em4/13.png" style="max-width: 100%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>Which of the following(s) is/are TRUE ?</p> <p></p>`,
      image: "",
      options: [
        `If none of the vectors in the set \\( S=\\left\\{\\vec{v}_1, \\vec{v}_2, \\vec{v}_3\\right\\} \\) in \\( \\mathbb{R}^3 \\) is a multiple of one of the other vectors, then \\( S \\) is linearly independent.`,
        `If \\( \\vec{u}, \\vec{v} \\), and \\( \\vec{w} \\) are nonzero vectors in \\( \\mathbb{R}^2 \\), then \\( \\vec{u} \\) is a linear combination of \\( \\vec{v} \\) and \\( \\vec{w} \\).`,
        `If \\( \\vec{w} \\) is a linear combination of \\( \\vec{u} \\) and \\( \\vec{v} \\) in \\( \\mathbb{R}^n \\), then \\( \\vec{u} \\) is a linear combination of \\( \\vec{v} \\) and \\( \\vec{w} \\).`,
        `Suppose that \\( \\vec{v}_1, \\vec{v}_2 \\), and \\( \\vec{v}_3 \\) are non-zero vectors in \\( \\mathbb{R}^5, \\vec{v}_2 \\) is not a multiple of \\( \\vec{v}_1 \\), and \\( \\vec{v}_3 \\) is not a linear combination of \\( \\vec{v}_1 \\) and \\( \\vec{v}_2 \\). Then \\( \\left\\{\\vec{v}_1, \\vec{v}_2, \\vec{v}_3\\right\\} \\) is linearly independent.`,
      ],
      answer: ["D"],
      solution: `<img src="/images/quiz/wqt-em4/14.png" style="max-width: 100%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p>Consider the following two statements:<br> \\( S 1 \\). If \\( A B=I \\), then \\( A \\) is invertible.<br> \\( S 2 \\). If \\( A \\) is a \\( 3 \\times 3 \\) matrix and the equation \\( A \\vec{x}=\\left[\\begin{array}{l}1 \\\\ 0 \\\\ 0\\end{array}\\right] \\) has a unique solution, then \\( A \\) is invertible.<br>Which of the following options is correct? </p> <p></p>`,
      image: "",
      options: [
        `\\( S 1 \\) is true but \\( S 2 \\) is false`,
        `\\( \\mathrm{S} 1 \\) is false but \\( \\mathrm{S} 2 \\) is true`,
        `Both are true`,
        `Both are false`,
      ],
      answer: "B",
      solution: `<img src="/images/quiz/wqt-em4/15.png" style="max-width: 100%;">`
    },
  ]
});

registerTest({
  series: "weekly-cs-gate-2027",
  name: "WQT - Engineering Mathematics-5|Eigen Vectors",
  date: "Aug 06, 2026",
  questions: [
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>Let<br> \$\$ A=\\left[\\begin{array}{ll} a &amp; b \\\\ c &amp; d \\end{array}\\right] \$\$<br>be a \\( 2 \\times 2 \\) real matrix. Which of the following is a necessary and sufficient condition for \\( A \\) not to have a real eigenvalue? </p> <p></p>`,
      image: "",
      options: [
        `\\( (a-d)^{2}+&nbsp;b c&lt;0 \\)<br>&nbsp;`,
        `\\( (a+d)^{2}-4(a d-b c)&lt;0 \\)<br>&nbsp;`,
        `\\( a d-b c&lt;0 \\)<br>&nbsp;`,
        `\\( a^{2}+d^{2}&lt;4 b c \\)`,
      ],
      answer: "B",
      solution: `<img src="/images/quiz/wqt-em5/1.png" style="max-width: 100%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>Find the values of \\( \\alpha \\in \\mathbb{R} \\) such that the matrix<br> \$\$ \\left[\\begin{array}{ll} 3 &amp; \\alpha \\\\ \\alpha &amp; 5 \\end{array}\\right] \$\$ <br>has 2 as an eigenvalue. </p> <p></p>`,
      image: "",
      options: [
        `\\( \\alpha= \\pm 1 \\)<br>&nbsp;`,
        `\\( \\alpha= \\pm \\sqrt{2} \\)<br>&nbsp;`,
        `\\( \\alpha= \\pm \\sqrt{3} \\)<br>&nbsp;`,
        `\\( \\alpha= \\pm 2 \\)`,
      ],
      answer: "C",
      solution: `<img src="/images/quiz/wqt-em5/2.png" style="max-width: 100%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>Let \\( A=\\left(a_{i j}\\right) \\) be a real \\( 3 \\times 3 \\) matrix such that<br> \$\$ a_{i j}=-a_{j i} \\quad \\text { for all } 1 \\leq i, j \\leq 3 \$\$ <br>Suppose \\( 3 i \\) is an eigenvalue of \\( A \\). What are the other eigenvalues of \\( A \\) ? </p> <p></p>`,
      image: "",
      options: [
        `\\( -3 i \\) and \\( 0 \\)<br>&nbsp;`,
        `\\( 3 i \\) and \\( -3 i \\)<br>&nbsp;`,
        `\\( -3 i \\) and \\( 3 \\)<br>&nbsp;`,
        `\\( 3 \\) and \\( -3 \\)`,
      ],
      answer: "A",
      solution: `<img src="/images/quiz/wqt-em5/3.png" style="max-width: 100%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>Let \\( x \\in \\mathbb{R}^{n} \\) be a non-zero column vector, and define<br> \$\$ A=x x^{T} \$\$<br>What is the necessary and sufficient condition for the matrix<br> \$\$ Q=I-2 A \$\$<br>to be an orthogonal matrix? </p> <p></p>`,
      image: "",
      options: [
        `\\( x \\) is an eigenvector of \\( A \\)`,
        `\\( x \\) is a unit vector (i.e., \\( \\|x\\|=1 \\) )`,
        `\\( x \\) has all entries equal to \\( 1 \\)`,
        `\\( \\|x\\|=0 \\)`,
      ],
      answer: "B",
      solution: `<img src="/images/quiz/wqt-em5/4.png" style="max-width: 100%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>Let \\( \\mathbf{x} \\) and \\( \\mathbf{y} \\) be two non-zero \\( n \\times 1 \\) column vectors. Let \\( A=\\mathbf{x} \\mathbf{y}^{T} \\) be an \\( n \\times n \\) matrix. What are the eigenvalues of \\( A \\) ? </p> <p></p>`,
      image: "",
      options: [
        `All eigenvalues are zero.<br>&nbsp;`,
        `Exactly one eigenvalue is \\( \\mathbf{y}^{T} \\mathbf{x} \\), and the rest are zero.<br>&nbsp;`,
        `All eigenvalues are equal to \\( \\mathbf{y}^{T} \\mathbf{x} \\).<br>&nbsp;`,
        `The eigenvalues are \\( \\|\\mathbf{x}\\|\\|\\mathbf{y}\\| \\) and \\( n-1 \\) zeros.`,
      ],
      answer: "B",
      solution: `<img src="/images/quiz/wqt-em5/5.png" style="max-width: 100%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>Let \\( M \\) be a real symmetric \\( 3 \\times 3 \\) matrix that admits the vectors<br> \$\$ \\mathbf{v}_{1}=(1,2,3)^{T} \\quad \\text { and } \\quad \\mathbf{v}_{2}=(1,1,-1)^{T} \$\$ <br>as eigenvectors.<br><br>Which of the following vectors is surely an eigenvector of \\( M \\) ? </p> <p></p>`,
      image: "",
      options: [
        `\\( (1,-1,0)^{T} \\)<br>&nbsp;`,
        `\\( (-5,1,1)^{T} \\)<br>&nbsp;`,
        `\\( (3,2,1)^{T} \\)<br>&nbsp;`,
        `None of the above`,
      ],
      answer: "D",
      solution: `<img src="/images/quiz/wqt-em5/6.png" style="max-width: 100%;">`
    },
    {
      marks: 1,
      neg: 0,
      type: "NAT",
      text: `<p>Let \\( A \\) be a \\( 3 \\times 3 \\) matrix with eigenvalues \\( -1,1,2 \\). Suppose there exist real scalars \\( \\alpha, \\beta, \\gamma \\) such that: \$\$ A^{-1}=\\alpha A^{2}+\\beta A+\\gamma I \$\$ Then find the value of: \$\$ \\alpha+\\beta+\\gamma=? \$\$ </p>`,
      image: "",
      options: [],
      answer: "1",
      solution: `<img src="/images/quiz/wqt-em5/7.png" style="max-width: 100%;">`
    },
    {
      marks: 1,
      neg: 0,
      type: "NAT",
      text: `<p>Let \\( A \\) be a real \\( 3 \\times 3 \\) upper triangular matrix with diagonal entries \\( 1,2,-3 \\). Suppose \\( A^{-1} \\) can be written as a linear combination of \\( I, A, A^{2} \\), i.e., \$\$ A^{-1}=\\alpha I+\\beta A+\\gamma A^{2} \$\$ Find the value of \\( 12(\\alpha+\\beta+\\gamma) \\). </p>`,
      image: "",
      options: [],
      answer: "12",
      solution: `<img src="/images/quiz/wqt-em5/8.png" style="max-width: 100%;">`
    },
    {
      marks: 1,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>Let \\( A \\in \\mathbb{R}^{m \\times n} \\) be a real matrix of rank \\( m \\), where \\( n&gt;m \\). Suppose that for some real number \\( \\alpha \\), the following holds:<br> \$\$ A A^{\\top}=\\alpha I_{m} \$\$ <br>Then, which of the following statements about<br> \\( A^{\\top} A \\in \\mathbb{R}^{n \\times n} \\) are true? </p> <p></p>`,
      image: "",
      options: [
        `\\( A^{\\top} A \\) has exactly zero distinct eigenvalues<br>&nbsp;`,
        `\\( A^{\\top} A \\) has eigenvalue 0 with multiplicity \\( n-m \\)<br>&nbsp;`,
        `\\( \\alpha \\) is an eigenvalue of \\( A^{\\top} A \\) with multiplicity at least \\( n-2 \\)<br>&nbsp;`,
        `\\( A^{\\top} A \\) has exactly two distinct eigenvalues`,
      ],
      answer: ["B", "D"],
      solution: `<img src="/images/quiz/wqt-em5/9.png" style="max-width: 100%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>Which of the following statements are true?</p> <p></p>`,
      image: "",
      options: [
        `There exists a \\( 2 \\times 2 \\) real orthogonal matrix that has 2 as an eigenvalue.<br>&nbsp;`,
        `There exists a \\( 2 \\times 2 \\) real orthogonal matrix&nbsp; that has \\( i \\) as an eigenvalue.<br>&nbsp;`,
        `If \\( A \\in \\mathbb{R}^{2 \\times 2} \\) is orthogonal, then \\( \\|A x\\|=\\|x\\| \\) for every \\( x \\in \\mathbb{R}^{2} \\), where \\( \\|\\cdot\\| \\) denotes the length of a vector.<br>&nbsp;`,
        `If \\( A \\in \\mathbb{R}^{2 \\times 2} \\) is orthogonal, then all its eigenvalues are real.`,
      ],
      answer: ["B", "C"],
      solution: `<img src="/images/quiz/wqt-em5/10.png" style="max-width: 100%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p>Given that the matrix<br> \$\$ A=\\left(\\begin{array}{ll} \\alpha &amp; 1 \\\\ 2 &amp; 3 \\end{array}\\right) \$\$ <br>has 1 as one of its eigenvalues, what are the trace and determinant of the matrix? </p> <p></p>`,
      image: "",
      options: [
        `Trace \\( =4 \\), Determinant \\( =5 \\)<br>&nbsp;`,
        `Trace \\( =5 \\), Determinant \\( =4 \\)<br>&nbsp;`,
        `Trace \\( =6 \\), Determinant \\( =3 \\)<br>&nbsp;`,
        `Trace \\( =3 \\), Determinant \\( =6 \\)`,
      ],
      answer: "B",
      solution: `<img src="/images/quiz/wqt-em5/11.png" style="max-width: 100%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>Pick out the true statements from the following:</p> <p>&nbsp;</p> <p></p>`,
      image: "",
      options: [
        `For any two \\( n \\times n \\) matrices \\( A \\) and \\( B \\),<br> \$\$ (A+B)^{2}=A^{2}+2 A B+B^{2} \$\$`,
        `There exist \\( n \\times n \\) matrices \\( A \\) and \\( B \\) such that<br> \$\$ A B-B A=I \$\$`,
        `For any invertible \\( n \\times n \\) matrix \\( B \\), and any matrix \\( A \\).<br> \$\$ \\operatorname{tr}(A)=\\operatorname{tr}\\left(B^{-1} A B\\right) \$\$`,
        `If \\( A \\) is a real symmetric matrix, then all its eigenvalues are real.`,
      ],
      answer: ["C", "D"],
      solution: `<img src="/images/quiz/wqt-em5/12.png" style="max-width: 100%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p>Let \\( A \\) be a \\( 4 \\times 4 \\) real matrix with eigenvalues \\( -1,1,1,-2 \\). Define<br> \$\$ B=A^{4}-5 A^{2}+5 I \$\$<br>Then the value of \\( \\operatorname{tr}(A+B) \\) is: </p> <p></p>`,
      image: "",
      options: [
        `&nbsp; \\( 0 \\)<br>&nbsp;`,
        `\\( -12 \\)<br>&nbsp;`,
        `\\( 3 \\)<br>&nbsp;`,
        `\\( 9 \\)`,
      ],
      answer: "C",
      solution: `<img src="/images/quiz/wqt-em5/13.png" style="max-width: 100%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p>Let \\( A \\) be an \\( n \\times n \\) real matrix such that the set of all its non-zero eigenvalues has exactly \\( r \\) elements. Which of the following statements is true? </p> <p></p>`,
      image: "",
      options: [
        `\\( \\operatorname{rank}(A) \\leq r \\)<br>&nbsp;`,
        `If \\( r=0 \\), then \\( \\operatorname{rank}(A) < n-1 \\)<br>&nbsp;`,
        `\\( \\operatorname{rank}(A) \\geq r \\)<br>&nbsp;`,
        `\\( A^2 \\) has \\( r \\) non-zero eigenvalues`,
      ],
      answer: "C",
      solution: `<img src="/images/quiz/wqt-em5/14.png" style="max-width: 100%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>Let \\( A \\) and \\( B \\) be \\( n \\times n \\) real matrices, and let<br> \$\$ C=\\left(\\begin{array}{ll} A &amp; B \\\\ B &amp; A \\end{array}\\right) \$\$ <br>Which of the following statements are true? </p> <p></p>`,
      image: "",
      options: [
        `If \\( \\lambda \\) is an eigenvalue of \\( A+B \\), then \\( \\lambda \\) is an eigenvalue of \\( C \\).`,
        `If \\( \\lambda \\) is an eigenvalue of \\( A-B \\), then \\( \\lambda \\) is an eigenvalue of \\( C \\).`,
        `If \\( \\lambda \\) is an eigenvalue of \\( A \\) or \\( B \\), then \\( \\lambda \\) is an eigenvalue of \\( C \\).`,
        `All eigenvalues of \\( C \\) are real.`,
      ],
      answer: ["A", "B"],
      solution: `<img src="/images/quiz/wqt-em5/15.png" style="max-width: 100%;">`
    },
  ]
});

registerTest({
  series: "weekly-cs-gate-2027",
  name: "WQT - Engineering Mathematics-6|Rank , System of equations",
  date: "Aug 13, 2026",
  questions: [
    {
      marks: 1,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>Let \\( A \\) be an \\( m \\times n \\) matrix with real entries. Which of the following statements are true? </p> <p></p>`,
      image: "",
      options: [
        `\\( \\operatorname{rank}\\left(A^{T} A\\right) \\leq \\operatorname{rank}(A) \\) <br>&nbsp;`,
        `\\( \\operatorname{rank}\\left(A^{T} A\\right)=\\operatorname{rank}(A) \\) <br>&nbsp;`,
        `\\( \\operatorname{rank}\\left(A^{T} A\\right)&gt;\\operatorname{rank}(A) \\) <br>&nbsp;`,
        `\\( \\operatorname{rank}\\left(A^{T} A\\right) \\leq \\min (m, n) \\)`,
      ],
      answer: ["A", "B", "D"],
      solution: `<img src="/images/quiz/wqt-em6/1.png" style="max-width: 100%;">`
    },
    {
      marks: 1,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>Let \\( A \\) be an \\( m \\times n \\) matrix, and let \\( P \\in \\mathbb{R}^{m \\times m} \\) and \\( Q \\in \\mathbb{R}^{n \\times n} \\) be invertible matrices.<br>Which of the following statements are true? </p> <p>&nbsp;</p> <p></p>`,
      image: "",
      options: [
        `\\( \\operatorname{rank}(P A Q)=\\operatorname{rank}(A) \\)<br>&nbsp;`,
        `\\( \\operatorname{rank}(P A)=\\operatorname{rank}(A) \\)<br>&nbsp;`,
        `\\( \\operatorname{rank}(A Q)=\\operatorname{rank}(A) \\)<br>&nbsp;`,
        `\\( \\operatorname{rank}(P A Q)=m+n-\\operatorname{rank}(A) \\)`,
      ],
      answer: ["A", "B", "C"],
      solution: `<img src="/images/quiz/wqt-em6/2.png" style="max-width: 100%;">`
    },
    {
      marks: 1,
      neg: 0,
      type: "NAT",
      text: `<p>Let \\( A \\in \\mathbb{R}^{n \\times n} \\) be a real square matrix such that the entry in the \\( (i, j) \\)-th position is given by: \$\$ A(i, j)=i-j \$\$ for all \\( 1 \\leq i, j \\leq n \\), where \\( n \\geq 2 \\). What is the rank of \\( A \\) ? </p>`,
      image: "",
      options: [],
      answer: "2",
      solution: `<img src="/images/quiz/wqt-em6/3.png" style="max-width: 100%;">`
    },
    {
      marks: 1,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>Let \\( P \\) be a square matrix such that<br> \$\$ P^{2}=P \$\$<br>Which of the following statements are true? </p> <p></p>`,
      image: "",
      options: [
        `\\( \\operatorname{Trace}(P) \\) is a non-integer real number`,
        `\\( \\operatorname{Trace}(P)=\\operatorname{Rank}(P) \\)`,
        `\\( \\operatorname{Trace}(P) \\) is an integer`,
        `\\( \\operatorname{Trace}(P) \\) is a purely imaginary number`,
      ],
      answer: ["B", "C"],
      solution: `<img src="/images/quiz/wqt-em6/4.png" style="max-width: 100%;">`
    },
    {
      marks: 1,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>Let \\( A \\) be an \\( n \\times n \\) matrix such that the first \\( 3 \\) rows of \\( A \\) are linearly independent and the first \\( 5 \\) columns of \\( A \\) are linearly independent. Which of the following statements are true? </p> <p>&nbsp;</p> <p></p>`,
      image: "",
      options: [
        `\\( A \\) has at least \\( 5 \\) linearly independent rows.`,
        `\\( 3 \\leq \\operatorname{rank}(A) \\leq 5 \\)`,
        `\\( \\operatorname{rank}(A) \\geq 5 \\)`,
        `\\( \\operatorname{rank}\\left(A^{2}\\right)\\geq 5 \\)`,
      ],
      answer: ["A", "C"],
      solution: `<img src="/images/quiz/wqt-em6/5.png" style="max-width: 100%;">`
    },
    {
      marks: 1,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>Let \\( A \\) be a \\( 5 \\times 5 \\) matrix, and suppose that the dimension of the solution space of the homogeneous system \\( A x=0 \\) is at least \\( 2 \\) .<br>Then, which of the following statements are true? </p> <p></p>`,
      image: "",
      options: [
        `\\( \\operatorname{Rank}\\left(A^{2}\\right) \\leq 3 \\)<br>&nbsp;`,
        `\\( \\operatorname{Rank}\\left(A^{2}\\right) \\geq 3 \\)<br>&nbsp;`,
        `\\( \\operatorname{Rank}\\left(A^{2}\\right)=3 \\) <br>&nbsp;`,
        `\\( \\operatorname{det}\\left(A^{2}\\right)=0 \\)`,
      ],
      answer: ["A", "D"],
      solution: `<img src="/images/quiz/wqt-em6/6.png" style="max-width: 100%;">`
    },
    {
      marks: 1,
      neg: 0,
      type: "NAT",
      text: `<p>Let \\( A \\) be a \\( 4 \\times 5 \\) real matrix row-equivalent to \$\$ R=\\left[\\begin{array}{ccccc} 1 &amp; -2 &amp; -1 &amp; -3 &amp; 0 \\\\ 0 &amp; 0 &amp; 0 &amp; 0 &amp; 1 \\\\ 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 \\\\ 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 \\end{array}\\right] \$\$ Let \\( \\mathbf{c}=\\left[\\begin{array}{l}1 \\\\ 2 \\\\ 3 \\\\ 4 \\\\ 5\\end{array}\\right], \\mathbf{d}=\\left[\\begin{array}{l}y \\\\ 3 \\\\ 4 \\\\ 5 \\\\ 5\\end{array}\\right] \\) be two solutions to \\( A \\mathbf{x}=\\mathbf{b} \\), for some fixed \\( \\mathbf{b} \\in \\mathbb{R}^{4} \\). Find the value of \\( y= \\) \\( \\qquad \\) . </p>`,
      image: "",
      options: [],
      answer: "7",
      solution: `<img src="/images/quiz/wqt-em6/7.png" style="max-width: 100%;">`
    },
    {
      marks: 1,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>Let \\( A \\) be an \\( n \\times n \\) matrix and let \\( b \\) be an \\( n \\times 1 \\) column vector. Suppose the equation<br> \$\$ A x=b \$\$<br>has no solution. Which of the following statements are true? </p> <p></p>`,
      image: "",
      options: [
        `There exists a vector \\( c \\in \\mathbb{R}^{n} \\) such that \\( A x=c \\) has a unique solution.`,
        `There exist infinitely many vectors \\( c \\in \\mathbb{R}^{n} \\) such that \\( A x=c \\) has no solution.`,
        `If \\( y \\) is the first column of \\( A \\), then \\( A x=y \\) has a unique solution.`,
        `\\( \\operatorname{det}(A)=0 \\)`,
      ],
      answer: ["B", "D"],
      solution: `<img src="/images/quiz/wqt-em6/8.png" style="max-width: 100%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>Let<br> \$\$ A=\\left[\\begin{array}{ccc} 2 &amp; 0 &amp; 5 \\\\ 1 &amp; 2 &amp; 3 \\\\ -1 &amp; 5 &amp; 1 \\end{array}\\right] \$\$ <br>Consider the system of linear equations \\( A x=y \\), where \\( x \\in \\mathbb{R}^{3} \\) and \\( y \\in \\mathbb{R}^{3} \\). For which vectors \\( y \\) does this system have a solution?<br>Which one of the following statements is true? </p> <p></p>`,
      image: "",
      options: [
        `The system has a solution only for \\( y=\\left[\\begin{array}{lll}r &amp; 0 &amp; 0\\end{array}\\right]^{T}, r \\in \\mathbb{R} \\) <br>&nbsp;`,
        `The system has a solution only for \\( y=\\left[\\begin{array}{lll}0 &amp; s &amp; 0\\end{array}\\right]^{T}, s \\in \\mathbb{R} \\) <br>&nbsp;`,
        `The system has a solution only for \\( y=\\left[\\begin{array}{lll}0 &amp; s &amp; t\\end{array}\\right]^{T}, s, t \\in \\mathbb{R} \\) <br>&nbsp;`,
        `The system has a solution for all \\( y \\in \\mathbb{R}^{3} \\)`,
      ],
      answer: "D",
      solution: `<img src="/images/quiz/wqt-em6/9.png" style="max-width: 100%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>Let \\( A \\) and \\( B \\) be \\( n \\times n \\) real matrices. </p> <ul> <li>We say the determinant is additive if \\( \\operatorname{det}(A+B)=\\operatorname{det}(A)+\\operatorname{det}(B) \\) </li> <li>We say the determinant is multiplicative if \\( \\operatorname{det}(A B)=\\operatorname{det}(A) \\cdot \\operatorname{det}(B) \\) </li> </ul> <p>Which of the following statements is correct?</p> <p></p>`,
      image: "",
      options: [
        `Determinant is both additive and multiplicative`,
        `Determinant is additive but not multiplicative`,
        `Determinant is multiplicative but not additive`,
        `Determinant is neither additive nor multiplicative`,
      ],
      answer: "C",
      solution: `<img src="/images/quiz/wqt-em6/10.png" style="max-width: 100%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>For \\( t \\in \\mathbb{R} \\), define<br> \$\$ M(t)=\\left[\\begin{array}{ccc} 1 &amp; t &amp; 0 \\\\ 1 &amp; 1 &amp; t^{2} \\\\ 0 &amp; 1 &amp; 1 \\end{array}\\right] \$\$ <br>Which of the following statements is true? </p> <p></p>`,
      image: "",
      options: [
        `\\( \\operatorname{det}(M(t)) \\) is a polynomial of degree \\( 3 \\) in \\( t \\)<br>&nbsp;`,
        `\\( \\operatorname{det}(M(t))=0 \\quad \\forall t \\in \\mathbb{R} \\) <br>&nbsp;`,
        `\\( \\operatorname{det}(M(t))=0 \\) for infinitely many values of \\( t \\in \\mathbb{R} \\)<br>&nbsp;`,
        `\\( \\operatorname{det}(M(t))=0 \\) for exactly two values of \\( t \\in \\mathbb{R} \\)`,
      ],
      answer: "D",
      solution: `<img src="/images/quiz/wqt-em6/11.png" style="max-width: 100%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>Let \\( A \\in \\mathbb{R}^{n \\times n} \\), and let \\( \\operatorname{adj}(A) \\) denote the adjugate of \\( A \\).&nbsp; </p> <p>Which of the following statements are true?</p> <p></p>`,
      image: "",
      options: [
        `If \\( \\operatorname{rank}(A)=n \\), then \\( \\operatorname{rank}(\\operatorname{adj}(A))=n \\)<br>&nbsp;`,
        `If \\( \\operatorname{rank}(A)=n-1 \\), then \\( \\operatorname{rank}(\\operatorname{adj}(A))=1 \\)<br>&nbsp;`,
        `If \\( \\operatorname{rank}(A) < n-1 \\), then \\( \\operatorname{adj}(A)=0 \\)<br>&nbsp;`,
        `If \\( \\operatorname{rank}(A)=n-1 \\), then \\( \\operatorname{adj}(A)=0 \\)`,
      ],
      answer: ["A", "B", "C"],
      solution: `<img src="/images/quiz/wqt-em6/12.png" style="max-width: 100%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>Let \\( A \\) be an \\( n \\times n \\) real matrix that is singular (i.e., not invertible).<br>Let \\( x_{0} \\in \\mathbb{R}^{n} \\) and \\( b \\in \\mathbb{R}^{n} \\) such that the equation<br> \$\$ A x_{0}=b \$\$<br>is satisfied.<br>Which of the following statements are true? </p> <p>&nbsp;</p> <p></p>`,
      image: "",
      options: [
        `There exists a vector \\( y_{0} \\in \\mathbb{R}^{n} \\) such that \\( A^{T} y_{0}=b \\).`,
        `There exist infinitely many solutions to the equation \\( A x=b \\).`,
        `If \\( A^{T} x=0 \\), then \\( b^{T} x=0 \\).`,
        `The solution to the equation \\( A x=b \\) is unique.`,
      ],
      answer: ["B", "C"],
      solution: `<img src="/images/quiz/wqt-em6/13.png" style="max-width: 100%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>Let \\( A \\) be an \\( m \\times m \\) real matrix, and let \\( x \\in \\mathbb{R}^{m} \\) be a column vector of unknowns. Consider the following two statements: </p> <p><br><strong>Statement 1:</strong> There exists a non-zero vector \\( b_{1} \\in \\mathbb{R}^{m} \\) such that the linear system \\( A x=b_{1} \\) has no solution.<br><strong>Statement 2:</strong> There exist non-zero vectors \\( b_{2}, b_{3} \\in \\mathbb{R}^{m} \\), with \\( b_{2} \\neq c b_{3} \\) for any scalar \\( c \\in&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; \\mathbb{R} \\) , such that both systems \\( A x=b_{2} \\) and \\( A x=b_{3} \\) have solutions.<br>&nbsp; </p> <p>Which of the following options is/are correct?</p> <p></p>`,
      image: "",
      options: [
        `Statement \\( 2 \\) is true whenever \\( A \\) is singular.`,
        `Statement \\( 1 \\) is true whenever \\( A \\) is singular.`,
        `Both Statement \\( 1 \\) and Statement \\( 2 \\) can be true simultaneously.`,
        `If \\( m=2 \\), then at least one of Statement \\( 1 \\) and Statement \\( 2 \\) is false.`,
      ],
      answer: ["B", "C", "D"],
      solution: `<img src="/images/quiz/wqt-em6/14.png" style="max-width: 100%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "NAT",
      text: `<p>Let \\( A \\) be a \\( 2 \\times 2 \\) real matrix such that \$\$ \\operatorname{det}(A)=1 \\quad \\text { and } \\quad \\operatorname{tr}(A)=3 . \$\$ What is the value of \\( \\operatorname{tr}\\left(A^{2}\\right) \\) ? </p>`,
      image: "",
      options: [],
      answer: "7",
      solution: `<img src="/images/quiz/wqt-em6/15.png" style="max-width: 100%;">`
    },
  ]
});

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

registerTest({
  series: "weekly-cs-gate-2027",
  name: "WQT - Engineering Mathematics-8|Probability",
  date: "Aug 27, 2026",
  questions: [
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>Suppose Alice rolls a \\( 6 \\)-sided die, and Bob rolls a \\( 4 \\)-sided die. Let \\( X \\) denote the maximum value on the two dice. Find \\( P(X=6) \\). </p> <p></p>`,
      image: "",
      options: [
        `\\( 1 / 24 \\)<br>&nbsp;`,
        `\\( 3 / 24 \\)<br>&nbsp;`,
        `\\( 7 / 24 \\)<br>&nbsp;`,
        `\\( 4 / 24 \\)`,
      ],
      answer: "D",
      solution: `<img src="/images/quiz/wqt-em8/1.png" style="max-width: 100%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>Consider two independent Binomial random variables \\( \\text{X} \\) and \\( \\text{Y} \\) with parameters \\( n=5 \\) and \\( p=1/2. \\) Determine which of the following options correctly describes the random variable represented by \\( \\mathrm{X}+\\mathrm{Y} \\). </p> <p></p>`,
      image: "",
      options: [
        `\\( \\text{X + Y} \\) is a Binomial random variable with parameters \\( n=5 \\) and \\( p=1 / 2 \\).<br>&nbsp;`,
        `\\( \\text{X + Y} \\) is a Binomial random variable with parameters \\( n=10 \\) and \\( p=1 / 2 \\).<br>&nbsp;`,
        `\\( \\text{X + Y} \\) is a Binomial random variable with parameters \\( n=5 \\) and \\( p=1 / 4 \\).<br>&nbsp;`,
        `\\( \\text{X + Y} \\) is a Binomial random variable with parameters \\( n=10 \\) and \\( p=1 / 4 \\).`,
      ],
      answer: "B",
      solution: `<img src="/images/quiz/wqt-em8/2.png" style="max-width: 100%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>Suppose that \\( X, Y \\), and \\( Z \\) are independent random variables. \\( \\mathbf{E}[X]=1, \\mathbf{E}[Y]=2 \\), and \\( \\mathbf{E}[Z]=3 \\). \\( \\operatorname{var}(X)=1 \\), \\( \\operatorname{var}(Y)=2, \\)&nbsp;and \\( \\operatorname{var}(Z)=3 \\). Compute the value of the following expression:<br> \$\$ \\mathbf{E}[2 X+3 Y-Z-10]+\\operatorname{var}(Y-2 X+2 Z) \$\$ </p> <p></p>`,
      image: "",
      options: [
        `\\( 5 \\)<br>&nbsp;`,
        `\\( 13 \\)<br>&nbsp;`,
        `\\( -3 \\)<br>&nbsp;`,
        `\\( 10 \\)`,
      ],
      answer: "B",
      solution: `<img src="/images/quiz/wqt-em8/3.png" style="max-width: 100%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>Assuming that \\( X \\) and \\( Y \\) are non-negative random variables, which may or may not be independent.<br>Which of the following statements is/are ALWAYS true? </p> <p></p>`,
      image: "",
      options: [
        `\\( P(X+Y=2) \\leq P(X=1) P(Y=1) \\)<br>&nbsp;`,
        `\\( P(X+Y=2) \\geq P(X=1) P(Y=1) \\)<br>&nbsp;`,
        `\\( P(X+Y=2) \\leq P(\\{X \\geq 1\\} \\cup\\{Y \\geq 1\\}) \\)<br>&nbsp;`,
        `\\( P(X+Y=2) \\geq P(\\{X \\geq 1\\} \\cup\\{Y \\geq 1\\}) \\)`,
      ],
      answer: "C",
      solution: `<img src="/images/quiz/wqt-em8/4.png" style="max-width: 100%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>Let \\( X \\) be a discrete uniform random variable. It has a probability mass function (PMF) \\( P(X=k)=\\dfrac{1}{n} \\) for \\( k=1, \\ldots, n, \\)&nbsp;the expected value \\( \\mathbb{E}[X] \\) is given by </p> <p></p>`,
      image: "",
      options: [
        `\\( \\frac{n(n+1)}{2} \\)<br>&nbsp;`,
        `\\( \\frac{n^2}{2} \\)<br>&nbsp;`,
        `\\( \\frac{n+1}{2} \\)<br>&nbsp;`,
        `\\( \\frac{n}{2} \\).`,
      ],
      answer: "C",
      solution: `<img src="/images/quiz/wqt-em8/5.png" style="max-width: 100%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>During a lecture, an instructor picks a student at random and asks if they know a certain definition from the course. Define the following two random variables \\( X \\) and \\( Y. X \\) takes the value \\( 0 \\) or \\( 1 \\) where \\( X=1 \\) if the student knows the answer and \\( X=0 \\) otherwise. \\( Y \\) is the number of the student's discussion section, i.e., \\( Y \\) is either \\( 1,2, \\) or \\( 3. \\) The joint probabilities are given in the following table:<br> \$\$ \\begin{array}{|c||c|c|c|} \\hline &amp; Y=1&nbsp;&amp; Y=2&nbsp;&amp; Y=3&nbsp;\\\\ \\hline X=0&nbsp;&amp; 0.2 &amp; 0.2 &amp; 0.2 \\\\ \\hline X=1&nbsp;&amp; 0.05 &amp; 0.05 &amp; 0.3 \\\\ \\hline \\end{array} \$\$ <br>So, for example \\( P(X=0, Y=1)=0.2 \\) and \\( P(X=1, Y=1)=0.05. \\) What is the value of \\( P(X=0 \\mid Y=1)? \\) </p> <p></p>`,
      image: "",
      options: [
        `\\( 0.2 \\)`,
        `\\( 0.8 \\)`,
        `\\( 0.6 \\)`,
        `\\( 0.4 \\)`,
      ],
      answer: "B",
      solution: `<img src="/images/quiz/wqt-em8/6.png" style="max-width: 100%;">`
    },
    {
      marks: 1,
      neg: 0,
      type: "NAT",
      text: `<p>Suppose that \\( X \\) and \\( Y \\) are independent random variables with \\( \\operatorname{Var}(X)=1, \\operatorname{Var}(Y)=2 \\). Find \\( \\operatorname{Var}(1-2 X+3 Y) \\). </p>`,
      image: "",
      options: [],
      answer: "22",
      solution: `<img src="/images/quiz/wqt-em8/7.png" style="max-width: 100%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>Let \\( X \\) be Bernoulli random variables with parameter \\( p&nbsp;(\\text{i.e}., P(X=1)=p, P(X=0)=1-p) \\). </p> <p>Define a random variable \\( Y=2^X 3^{1-X} \\). </p> <p>What is \\( E[Y]? \\) </p> <p></p>`,
      image: "",
      options: [
        `\\( p \\)`,
        `\\( 2^p \\)`,
        `\\( 3-p \\)`,
        `\\( \\log _6 p \\)`,
      ],
      answer: "C",
      solution: `<img src="/images/quiz/wqt-em8/8.png" style="max-width: 100%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>Let \\( X \\) be a random variable with \\( \\mathrm{PDF} \\)<br> \$\$ f(x)= \\begin{cases}C\\left(1-x^2\\right) &amp; -1 < x < 1 \\\\ 0 &amp; \\text{otherwise} \\end{cases} \$\$ <br>What is \\( C ? \\) </p> <p></p>`,
      image: "",
      options: [
        `\\( 1 / 2 \\)`,
        `\\( 1 / 3 \\)`,
        `\\( 1 / 4 \\)`,
        `\\( 3 / 4 \\)`,
      ],
      answer: "D",
      solution: `<img src="/images/quiz/wqt-em8/9.png" style="max-width: 100%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>Let \\( X \\) be a continuous uniform random variable on \\( [0,1] \\). Let \\( a \\in[0,1] \\) be a constant, find the probability \\( P(X&gt;a)? \\) </p> <p></p>`,
      image: "",
      options: [
        `\\( (1-a) \\)`,
        `\\( (1-a) / 2 \\)`,
        `\\( 2(1-a) \\)`,
        `\\( (1-a)^2 \\)`,
      ],
      answer: "A",
      solution: `<img src="/images/quiz/wqt-em8/10.png" style="max-width: 100%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p>Let \\( X_i \\) are independent discrete uniform random variables defined for consecutive integers in the interval \\( [1, n] \\). That is \\( P(X_i=j)=1 / n \\) for any \\( i \\) and \\( j \\) in \\( [1, n] \\).<br><br>Let \\( Y=\\min \\{X_1, X_2, \\ldots, X_n\\} \\).<br><br>Find \\( P(Y&gt;k) \\) for some \\( k = n-1 \\). </p> <p></p>`,
      image: "",
      options: [
        `\\( (1 / n)^ \\mathrm{n} \\)`,
        `\\( (1-1 / n)^ n \\)`,
        `\\( 1-(1 / n)^ n \\)`,
        `None of these`,
      ],
      answer: "A",
      solution: `<img src="/images/quiz/wqt-em8/11.png" style="max-width: 100%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p>Suppose that \\( X \\) and \\( Y \\) are independent random variables,<br><br>such that \\( X \\) has probability mass function \\( P(X=x)=(1 / 3)(2 / 3)^{x-1} \\) for integers \\( x \\geq 1, \\)&nbsp;<br><br>and \\( Y \\) has probability mass function \\( P(Y=y)=(2 / 5)(3 / 5)^{y-1} \\) for integers \\( y \\geq 1 \\).<br><br>Find \\( P(X=Y) \\). </p> <p></p>`,
      image: "",
      options: [
        `\\( 1 / 9 \\)`,
        `\\( 2 / 9 \\)`,
        `\\( 1 / 3 \\)`,
        `\\( 1 / 2 \\)`,
      ],
      answer: "B",
      solution: `<img src="/images/quiz/wqt-em8/12.png" style="max-width: 100%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p>Consider the scenario where you keep tossing the coin until you get a head. Let \\( p \\) represent the probability of getting a head and \\( q&nbsp;\\;( \\)which equals \\( 1-p) \\) represent the probability of getting a tail. </p> <p>Let \\( Y \\) be a random variable that counts the number of tosses until the head appears. What is the probability that \\( Y \\) is a multiple of \\( 3? \\) To calculate this probability assume the coin is fair. </p> <p></p>`,
      image: "",
      options: [
        `\\( 1 / 3 \\)`,
        `\\( 1 / 4 \\)`,
        `\\( 3 / 4 \\)`,
        `\\( 1 / 7 \\)`,
      ],
      answer: "D",
      solution: `<img src="/images/quiz/wqt-em8/13.png" style="max-width: 100%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "NAT",
      text: `<p></p> <p>Suppose that a person wins a game of chance with probability \\( 0.40, \\) and loses otherwise. If he wins, he earns \\( 5 \\) dollars, and if he loses, then he loses \\( 4 \\) dollars. Assume that he plays ten games independently. Let \\( X \\) denote the number of games that he wins. What is his expected gain or loss (altogether) during the ten games? </p> <p><strong>[Hint:</strong> \\( X \\) is a binomial random variable with \\( k \\) successes (or wins) but It is not asked to find \\( E[X&nbsp;], \\) you first need to find gain/loss in terms of \\( X \\) then need to find the expectation of that term] </p> <p></p>`,
      image: "",
      options: [],
      answer: "-4",
      solution: `<img src="/images/quiz/wqt-em8/14.png" style="max-width: 100%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p>You take the bus, walk, or ride your bike to school. In the morning you toss a fair, six-sided die.</p> <ul> <li>If you get a \\( 1 \\) or \\( 2, \\) you take the bus. </li> <li>If you get a \\( 3,4, \\) or \\( 5, \\) you walk. </li> <li>If you get a \\( 6, \\) you ride your bike. </li> </ul> <p>On average, it takes you \\( 12 \\) minutes if you take the bus, \\( 14 \\) minutes if you walk, and \\( 6 \\) minutes if you ride your bike. What is the expected amount of time it takes you to get to campus? </p> <p></p>`,
      image: "",
      options: [
        `\\( 9 \\) minutes`,
        `\\( 10 \\) minutes`,
        `\\( 11 \\) minutes`,
        `\\( 12 \\) minutes`,
      ],
      answer: "D",
      solution: `<img src="/images/quiz/wqt-em8/15.png" style="max-width: 100%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p>A random variable \\( X \\) has a probability mass function given by<br> \$\$ p_X(x)= \\begin{cases}\\frac{1}{4}, &amp; \\text { if } x=1 \\\\ \\frac{1}{2}, &amp; \\text { if } x=\\frac{3}{2} \\\\ \\frac{1}{4}, &amp; \\text { if } x=3 \\\\ 0, &amp; \\text { otherwise. }\\end{cases} \$\$ <br>Find the cumulative distribution function, \\( F_X(x) \\), of \\( X \\). Compute the value of the following expression:<br> \$\$ \\mathbf{E}[X]+F_X(2) \$\$ </p> <p></p>`,
      image: "",
      options: [
        `\\( 3 / 4 \\)`,
        `\\( 7 / 4 \\)`,
        `\\( 2 \\)`,
        `\\( 5 / 2 \\)`,
      ],
      answer: "D",
      solution: `<img src="/images/quiz/wqt-em8/16.png" style="max-width: 100%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p>A die is rolled until two different numbers appear. Let \\( \\mathrm{T} \\) be the total number of times the die is rolled. Obviously \\( \\text{P(T = 0) = P(T = 1) = 0}. \\) </p> <p><strong>For example,</strong></p> <p> \\( \\begin{aligned} &amp; \\{1,1,2\\}, \\text{T} = 3 \\\\ &amp; \\{1,0\\}, \\text{T} = 2 \\\\ &amp; \\{0,0,0,0,5\\}, \\text{T} = 5 \\\\ &amp; \\{4,4,4,4,4,6\\}, \\text{T} = 6 \\end{aligned} \\) </p> <p>Which of the following is the CORRECT PMF for \\( \\text{T}? \\) </p> <p></p>`,
      image: "",
      options: [
        `\\( \\text{P(T} = k)=\\left(\\frac{5}{6}\\right)^{k-2} \\cdot \\frac{1}{6}, \\quad \\text { For } k \\geq 2 \\)`,
        `\\( \\text{P(T} = k)=\\left(\\frac{1}{6}\\right)^{k-2} \\cdot \\frac{5}{6}, \\quad \\text { For } k \\geq 2 \\)`,
        `\\( \\text{P(T} = k)=\\left(\\frac{1}{6}\\right)^k, \\text { For } k \\geq 2 \\)`,
        `\\( \\text{P(T} = k)=\\left(\\frac{5}{6}\\right)^k, &nbsp;\\text { For } k \\geq 2 \\)`,
      ],
      answer: "B",
      solution: `<img src="/images/quiz/wqt-em8/17.png" style="max-width: 100%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p>Let \\( \\mathrm{X}_1, \\mathrm{X}_2 \\) be independent. Bernoulli random variables with parameter \\( p \\) (i.e., they are independent and satisfy \\( P(X_i=1)=p, P(X_i=0)=1-p) \\) Find \\( E\\left[X_1^2 X_2\\right]? \\) </p> <p></p>`,
      image: "",
      options: [
        `\\( p^3 \\)`,
        `\\( p^2 \\)`,
        `\\( p \\)`,
        `\\( 1-p^2 \\)`,
      ],
      answer: "B",
      solution: `<img src="/images/quiz/wqt-em8/18.png" style="max-width: 100%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p>A game is played with a weighted coin that is heads with probability \\( 0.6 \\) and tails with probability \\( 0.4. \\) The game will consist of a number of rounds. In each round, you flip the coin twice, and. </p> <ul> <li>if you get \\( \\mathrm{HH} \\), you win \\( \\$ 5 \\) and you move on to the next round. </li> <li>if you get \\( \\mathrm{HT} \\) or \\( \\mathrm{TH} \\), you win \\( \\$ 1 \\) and you move on to the next round. </li> <li>if you get \\( \\mathrm{TT} \\), the game is over. </li> </ul> <p>Compute your expected winnings from playing this game.</p> <p></p>`,
      image: "",
      options: [
        `\\( 80 / 3 \\)`,
        `\\( 57 / 4 \\)`,
        `\\( 25 \\)`,
        `\\( 32 / 3 \\)`,
      ],
      answer: "B",
      solution: `<img src="/images/quiz/wqt-em8/19.png" style="max-width: 100%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p>Suppose that \\( \\mathrm{X}, \\mathrm{Y} \\) and \\( \\mathrm{Z} \\) are independent random variables such that takes values either \\( 0 \\) or \\( 1 \\) with equal probability \\( 0.5. \\) What will be the \\( P[X+Y+Z=1 \\mid X=Y]=? \\) </p> <p></p>`,
      image: "",
      options: [
        `\\( 1 / 2 \\)`,
        `\\( 1 / 4 \\)`,
        `\\( 1 / 8 \\)`,
        `\\( 1 / 16 \\)`,
      ],
      answer: "B",
      solution: `<img src="/images/quiz/wqt-em8/20.png" style="max-width: 100%;">`
    },
  ]
});

registerTest({
  series: "weekly-cs-gate-2027",
  name: "WQT - Engineering Mathematics-9|Limits, contintuity, Maxima-minima, integral calculus",
  date: "Sep 03, 2026",
  questions: [
    {
      marks: 1,
      neg: 0,
      type: "NAT",
      text: `<p>Let \\( f \\) be a continuous function defined for all real numbers. Suppose \$\$ \\int_0^3 f(x) d x=2, \\quad \\int_1^2 f(x) d x=7, \\quad \\int_3^6 f(x) d x=-5, \\quad \\text { and } \\quad \\int_9^{18} f(x) d x=-3 \$\$ Find \\( \\displaystyle{}\\int_3^6 f\\left(\\frac{1}{3} t\\right) d t \\) </p>`,
      image: "",
      options: [],
      answer: "21",
      solution: `<img src="/images/quiz/wqt-em9/1.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>Which of the following represents the value of \\( \\displaystyle{}\\int_1^e \\frac{\\ln (x)}{x} d x ? \\) </p> <p></p>`,
      image: "",
      options: [
        `\\( 1 \\)`,
        `\\( 2 \\)`,
        `\\( 1 / 2 \\)`,
        `\\( e \\)`,
      ],
      answer: "C",
      solution: `<img src="/images/quiz/wqt-em9/2.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>Find \\( \\displaystyle\\int x e^{-3 x} d x \\) </p> <p></p>`,
      image: "",
      options: [
        `\\( \\dfrac{1}{2} e^{-3 x}(x-3)+C \\) <p>&nbsp;</p>`,
        `\\( -\\dfrac{1}{9} e^{-3 x}(3 x+1)+C \\) <p>&nbsp;</p>`,
        `\\( -\\dfrac{1}{6} x^2 e^{-3 x}+C \\) <p>&nbsp;</p>`,
        `\\( -\\dfrac{1}{3} e^{-3 x}(x+1)+C \\) <p>&nbsp;</p>`,
      ],
      answer: "B",
      solution: `<img src="/images/quiz/wqt-em9/3.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0,
      type: "NAT",
      text: `<p></p> <p>Below is a portion of the graph of an even function \\( f(x) \\), which has domain \\( (-\\infty, \\infty) \\) even though the graph below only shows the function on the interval \\( [0,5] \\). Note that \\( f(x) \\) has a vertical asymptote at \\( x=1 \\). </p> <p style="text-align:center"><img alt="" src="/images/quiz/wqt-em9/q4_img1.png" style="max-width: 75%;"></p> <p><br>Find<br> \$\$ \\lim _{h \\rightarrow 0} \\frac{f(1.5+h)-f(1.5)}{h} \$\$ </p> <p></p>`,
      image: "",
      options: [],
      answer: "4",
      solution: `<img src="/images/quiz/wqt-em9/4.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>Some information about the derivative \\( p^{\\prime}(x) \\) and the second derivative \\( p^{\\prime \\prime}(x) \\) of a function \\( p(x) \\) is provided in the table below.<br> \$\$ \\begin{array}{|r|r|r|r|r|r|r|r|} \\hline x &amp; -4 &amp; -3 &amp; -2 &amp; -1 &amp; 0 &amp; 1 &amp; 2 \\\\ \\hline p^{\\prime}(x) &amp; 1 &amp; 0 &amp; -2 &amp; 0 &amp; -1 &amp; 0 &amp; 2 \\\\ \\hline p^{\\prime \\prime}(x) &amp; -1 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 2 &amp; 1 \\\\ \\hline \\end{array} \$\$ <br>At which of the following values of \\( x \\) must \\( p(x) \\) have a local minimum? </p> <p></p>`,
      image: "",
      options: [
        `\\( x=-3 \\)`,
        `\\( x=-2 \\)`,
        `\\( x=-1 \\)`,
        `\\( x=1 \\)`,
      ],
      answer: ["D"],
      solution: `<img src="/images/quiz/wqt-em9/5.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0,
      type: "NAT",
      text: `<p>Consider the piecewise function \$\$ q(x)=\\left\\{\\begin{array}{cc} 7 e^{x-C}+\\dfrac{x}{3 x-2} &amp; \\quad x&lt;0 \\\\ \\\\ \\dfrac{6+5 x}{2+3 x+4^x} &amp; \\quad x \\geq 0 \\end{array}\\right. \$\$ where \\( C \\) is a constant. Find \\( \\displaystyle\\lim _{x \\rightarrow \\infty} q(x) \\) </p>`,
      image: "",
      options: [],
      answer: "0",
      solution: `<img src="/images/quiz/wqt-em9/6.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>The function \\( g(x) \\) is given by the equation<br> \$\$ g(x)= \\begin{cases}a x^2 &amp; x \\leq 1 \\\\ b-\\ln (3 x) &amp; x&gt;1\\end{cases} \$\$ <br>where \\( a \\) and \\( b \\) are constants.<br>Find the value of \\( a \\) such that function is differentiable at \\( x=1 \\). </p> <p></p>`,
      image: "",
      options: [
        `\\( 1 / 2 \\)`,
        `\\( -1 / 2 \\)`,
        `\\( 2 \\)`,
        `\\( -2 \\)`,
      ],
      answer: "B",
      solution: `<img src="/images/quiz/wqt-em9/7.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>Consider the family of functions<br> \$\$ g(x)=a \\ln (x)+\\frac{b}{x} \$\$ <br>defined for \\( x&gt;0, \\)&nbsp;where \\( a \\) and \\( b \\) are positive constants. </p> <p>Any function \\( g(x) \\) in this family has only one critical point. In terms of \\( a \\) and \\( b, \\)&nbsp;what is the \\( x \\)-coordinate of that critical point? </p> <p></p>`,
      image: "",
      options: [
        `\\( x=b / a \\) is a critical point where the function shows local minima`,
        `\\( x=b / a \\) is a critical point where the function shows local maxima`,
        `\\( x=a / b \\) is a critical point where the function shows local minima`,
        `\\( x=a / b \\) is a critical point where the function shows local maxima`,
      ],
      answer: "A",
      solution: `<img src="/images/quiz/wqt-em9/8.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0,
      type: "NAT",
      text: `<p>The following are tables of values for two differentiable functions \\( f(x) \\) and \\( g(x) \\) and their derivatives. Missing values are denoted by a \\( \\text{“?"}. \\) Assume that each of these functions is defined for all real numbers, that \\( f^{\\prime}(x) \\) and \\( g^{\\prime}(x) \\) are continuous. \$\$ \\begin{array}{|c|c|c|c|c|c|} \\hline x &amp; 0 &amp; 2 &amp; 3 &amp; 6 &amp; 9 \\\\ \\hline f(x) &amp; -1 &amp; ? &amp; 0 &amp; -2 &amp; ? \\\\ \\hline f^{\\prime}(x) &amp; 1 &amp; 4 &amp; -1 &amp; ? &amp; 1 \\\\ \\hline \\end{array} \\qquad \\qquad \\begin{array}{|c|c|c|c|c|c|} \\hline x &amp; -1 &amp; 1 &amp; 3 &amp; 7 &amp; 11 \\\\ \\hline g(x) &amp; -4 &amp; 1 &amp; 2 &amp; 6 &amp; 7 \\\\ \\hline g^{\\prime}(x) &amp; 7 &amp; ? &amp; 3 &amp; 4 &amp; ? \\\\ \\hline \\end{array} \$\$ Let \\( z(x)=f(g(x)) \\). Find \\( z^{\\prime}(3) \\) </p>`,
      image: "",
      options: [],
      answer: "12",
      solution: `<img src="/images/quiz/wqt-em9/9.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>Which of the following is/are TRUE?</p> <p></p>`,
      image: "",
      options: [
        `If \\( \\displaystyle{}\\lim _{x \\rightarrow 5} f(x)=0 \\) and \\( \\displaystyle{}\\lim _{x \\rightarrow 5} g(x)=0 \\), then \\( \\displaystyle{}\\lim _{x \\rightarrow 5} \\frac{f(x)}{g(x)} \\) does not exist.`,
        `If \\( f, g, \\) are any two functions which are continuous for all \\( x \\), then \\( \\dfrac{f}{g} \\) is continuous for all \\( x \\).`,
        `It is possible that functions \\( f \\) and \\( g \\) are not continuous at a point \\( x_0, \\)&nbsp;but \\( f+g \\) is continuous at \\( x_0 \\).`,
        `If \\( f^{\\prime}(c)=0 \\) then \\( f(x) \\) has a local maximum or a local minimum at \\( x=c \\).`,
      ],
      answer: ["C"],
      solution: `<img src="/images/quiz/wqt-em9/10.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>Suppose \\( f \\) is a function such that \\( f^{\\prime}(x)=4 x^3 \\) and \\( f^{\\prime \\prime}(x)=12 x^2 \\). </p> <p>Which of the following is /are true?</p> <p></p>`,
      image: "",
      options: [
        `\\( f \\) has a local maximum at \\( x=0 \\) by the first derivative test`,
        `\\( f \\) has a local minimum at \\( x=0 \\) by the first derivative test`,
        `\\( f \\) has a local maximum at \\( x=0 \\) by the second derivative test`,
        `\\( f \\) has a local minimum at \\( x=0 \\) by the second derivative test`,
      ],
      answer: ["B"],
      solution: `<img src="/images/quiz/wqt-em9/11.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>The derivative of \\( g(x)=e^{\\sqrt{x}} \\) is </p> <p></p>`,
      image: "",
      options: [
        `\\( \\sqrt{x} e^{\\sqrt{x}-1} \\) <p>&nbsp;</p>`,
        `\\( 2 e^{\\sqrt{x}} x^{-0.5} \\) <p>&nbsp;</p>`,
        `\\( \\dfrac{0.5 e^{\\sqrt{x}}}{\\sqrt{x}} \\) <p>&nbsp;</p>`,
        `\\( e^{\\sqrt{x}} \\)`,
      ],
      answer: "C",
      solution: `<img src="/images/quiz/wqt-em9/12.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>The function<br> \$\$ f(x)= \\begin{cases}e^x &amp; \\text { if } \\quad x \\leq 1 \\\\ m x+b &amp; \\text { if } \\quad x&gt;1\\end{cases} \$\$ <br>is continuous and differentiable at \\( x=1 \\). </p> <p>Find the value of \\( m-b? \\) </p> <p></p>`,
      image: "",
      options: [
        `\\( e \\)`,
        `\\( -e \\)`,
        `\\( \\mathrm{e}-1 \\)`,
        `\\( 1-e \\)`,
      ],
      answer: "A",
      solution: `<img src="/images/quiz/wqt-em9/13.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0,
      type: "NAT",
      text: `<p>Given \\( F(x)=(f(g(x)))^2, g(1)=2, g^{\\prime}(1)=3, f(2)=4, \\) and \\( f^{\\prime}(2)=5, \\) find \\( F^{\\prime}(1) \\) </p>`,
      image: "",
      options: [],
      answer: "120",
      solution: `<img src="/images/quiz/wqt-em9/14.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>Find the values of \\( A \\) and \\( B \\) that make<br> \$\$ f(x)=\\left\\{\\begin{array}{lll} x^2+1 &amp; \\text { if } &amp; x \\geq 0 \\\\ A \\sin x+B \\cos x &amp; \\text { if } &amp; x&lt;0 \\end{array}\\right. \$\$ <br>differentiable at \\( x=0 \\). </p> <p></p>`,
      image: "",
      options: [
        `\\( A=0, B=1 \\)`,
        `\\( A=1, B=0 \\)`,
        `\\( A=0, B=-1 \\)`,
        `\\( A=-1, B=0 \\)`,
      ],
      answer: "A",
      solution: `<img src="/images/quiz/wqt-em9/15.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p>Is there a number \\( b \\) such that \\( \\displaystyle\\lim _{x \\rightarrow-2} \\frac{b x^2+15 x+15+b}{x^2+x-2} \\) exists? If so, find the value of the limit. </p> <p></p>`,
      image: "",
      options: [
        `\\( -1 \\)`,
        `\\( -2 \\)`,
        `\\( 1 \\)`,
        `There is no such \\( b \\) for that above limit exist`,
      ],
      answer: "A",
      solution: `<img src="/images/quiz/wqt-em9/16.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "NAT",
      text: `<p> \\( \\displaystyle\\lim _{x \\rightarrow \\infty}(x+\\sin x)^{\\dfrac{1}{x}} \\) </p>`,
      image: "",
      options: [],
      answer: "1",
      solution: `<img src="/images/quiz/wqt-em9/17.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p>If \\( g \\) is continuous (but not differentiable) at \\( x=0, g(0)=8 \\), and \\( f(x)=x g(x), \\)&nbsp;find \\( f^{\\prime}(0) \\). </p> <p></p>`,
      image: "",
      options: [
        `\\( 0 \\)`,
        `\\( 8 \\)`,
        `\\( 1 \\)`,
        `\\( f(x) \\) is also not differentiable&nbsp;at \\( x=0 \\).`,
      ],
      answer: "B",
      solution: `<img src="/images/quiz/wqt-em9/18.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "NAT",
      text: `<p>Suppose that \\( f(x) \\) and \\( g(x) \\) are differentiable functions and that \\( h(x)=f(x) g(x) \\). You are given the following table of values: \$\$ \\begin{array}{|c|c|} \\hline h(1) &amp; 24 \\\\ \\hline g(1) &amp; 6 \\\\ \\hline f^{\\prime}(1) &amp; -2 \\\\ \\hline h^{\\prime}(1) &amp; 20 \\\\ \\hline \\end{array} \$\$ Using the table, find \\( g^{\\prime}(1) \\). </p>`,
      image: "",
      options: [],
      answer: "8",
      solution: `<img src="/images/quiz/wqt-em9/19.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>Suppose \\( f(x) \\) is continuous and diffrentiable for all \\( x \\). And \\( -1 \\leq f^{\\prime}(x) \\leq 3 \\) fo all \\( x \\). Which of the following is/are ALWAYS true? </p> <p></p>`,
      image: "",
      options: [
        `\\( f(5) \\leq f(3)+6 \\)`,
        `\\( f(5) \\geq f(3)-2 \\)`,
        `\\( f(5) \\leq f(3)+10 \\)`,
        `\\( f(5) \\geq f(3)-10 \\)`,
      ],
      answer: ["A", "B", "C", "D"],
      solution: `<img src="/images/quiz/wqt-em9/20.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "NAT",
      text: `<p>Define \$\$ g(x)= \\begin{cases}-6 x+2 &amp; x \\leq 2 \\\\ x-2 &amp; x&gt;2\\end{cases} \$\$ Find \\( \\displaystyle\\int_1^4 g(x) d x \\). </p>`,
      image: "",
      options: [],
      answer: "-5",
      solution: `<img src="/images/quiz/wqt-em9/21.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>Which of the following is/are TRUE?</p> <p></p>`,
      image: "",
      options: [
        `\\( \\displaystyle\\int_{-5}^5\\left(a x^2+b x+c\\right) d x=2 \\int_0^5\\left(a x^2+c\\right) d x \\) <p>&nbsp;</p>`,
        `If \\( f \\) and \\( g \\) are continuous and \\( f(x) \\geqslant g(x) \\) for \\( a \\leqslant x \\leqslant b \\), then<br> \$\$ \\int_a^b f(x) d x \\geqslant \\int_a^b g(x) d x \$\$`,
        `If \\( f \\) and \\( g \\) are differentiable, then<br> \$\$ \\frac{d}{d x}[f(g(x))]=f^{\\prime}(g(x)) g^{\\prime}(x) \$\$`,
        `If \\( f \\) is differentiable, then \\( \\dfrac{d}{d x} \\sqrt{f(x)}=\\dfrac{f^{\\prime}(x)}{2 \\sqrt{f(x)}} \\) .`,
      ],
      answer: ["A", "B", "C"],
      solution: `<img src="/images/quiz/wqt-em9/22.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p>Shown below are portions of the graphs of \\( y=f(x), y=f^{\\prime}(x) \\), and \\( y=f^{\\prime \\prime}(x) \\).<br>Determine which graph is which. </p> <p style="text-align:center"><img alt="" src="/images/quiz/wqt-em9/q23_img2.png" style="max-width: 75%;"></p> <p></p>`,
      image: "",
      options: [
        `\\( A-f(x), B-f^{\\prime}(x), C-f^{\\prime \\prime}(x) \\)`,
        `\\( A-f^{\\prime}(x), B-f(x), C-f^{\\prime \\prime}(x) \\)`,
        `\\( A-f^{\\prime \\prime}(x), B-f(x), C-f^{\\prime}(x) \\)`,
        `\\( A-f^{\\prime}(x), B-f^{\\prime \\prime}(x), C-f(x) \\)`,
      ],
      answer: "B",
      solution: `<img src="/images/quiz/wqt-em9/23.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>The function \\( f(x) \\) is defined as follows:<br> \$\$ f(x)=\\left\\{\\begin{array}{cc} \\dfrac{x}{x^2+1} &amp; x \\leq 0 \\\\ ? &amp; x&gt;0 \\end{array}\\right. \$\$ <br>Note that the formula for \\( f(x) \\) for \\( x&gt;0 \\) is unknown. </p> <p>However, it is known that \\( f(x) \\) is differentiable at each point in its domain \\( (-\\infty, \\infty) \\), and that \\( f^{\\prime}(x)&gt;0 \\) for all \\( x \\geq 0 \\). </p> <p>Which of the following option is/are TRUE?</p> <p></p>`,
      image: "",
      options: [
        `\\( x=0 \\) has global minima`,
        `\\( x=0 \\) has global maxima`,
        `\\( x=-1 \\) has global maxima`,
        `\\( x=-1 \\) has global minima`,
      ],
      answer: ["D"],
      solution: `<img src="/images/quiz/wqt-em9/24.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>Suppose \\( h(x) \\) is a function such that \\( h(x) \\) has exactly three critical point. Two of which are shown in the table below.<br>Assume that both \\( h(x) \\) and \\( h^{\\prime}(x) \\) are differentiable on \\( (-\\infty, \\infty) \\)<br> \$\$ \\begin{array}{|c|c|c|c|c|} \\hline x &amp; 0 &amp; 3 &amp; 5 &amp; 7 \\\\ \\hline h(x) &amp; 2 &amp; ? &amp; 4 &amp; 4 \\\\ \\hline h^{\\prime}(x) &amp; -1 &amp; 0 &amp; 0 &amp; ? \\\\ \\hline \\end{array} \$\$ <br>Further using Lagrange mean value theorem in the interval \\( [5,7], \\)&nbsp;we can determine the interval of the third critical point.<br>On which of the following intervals must \\( h(x) \\) be increasing on the entire interval? </p> <p></p>`,
      image: "",
      options: [
        `\\( (0,3) \\)`,
        `\\( (3,5) \\)`,
        `\\( (5,6) \\)`,
        `\\( (6,7) \\)`,
      ],
      answer: ["B"],
      solution: `<img src="/images/quiz/wqt-em9/25.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>Let \\( q(x) \\) be a continuous function which is defined for all real numbers. A portion of the graph of \\( q^{\\prime}(x), \\)&nbsp;the derivative of \\( \\boldsymbol{q}(\\boldsymbol{x}), \\)&nbsp;is shown below. </p> <p style="text-align:center"><img alt="" src="/images/quiz/wqt-em9/q26_img3.png" style="max-width: 75%;"></p> <p>On which of the following interval(s) is \\( q^{\\prime \\prime}(x) \\) positive? </p> <p></p>`,
      image: "",
      options: [
        `\\( (0,2) \\)`,
        `\\( (2,4) \\)`,
        `\\( (7,9) \\)`,
        `\\( (5,7) \\)`,
      ],
      answer: ["A", "B", "D"],
      solution: `<img src="/images/quiz/wqt-em9/26.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "NAT",
      text: `<p></p> <p>We consider a function \\( f(x) \\) defined for all real numbers. We suppose that the first and second derivatives \\( f^{\\prime}(x) \\) and \\( f^{\\prime \\prime}(x) \\) are also defined for all real numbers. Below we show the graph of the second derivative of \\( f \\). You may assume that \\( f^{\\prime \\prime}(x) \\) is decreasing outside of the region shown. </p> <p style="text-align:center"><img alt="" src="/images/quiz/wqt-em9/q27_img4.png" style="max-width: 75%;"></p> <p>Suppose that \\( f^{\\prime}(0)=5 \\). How many critical points does \\( f \\) have? </p> <p></p>`,
      image: "",
      options: [],
      answer: "2",
      solution: `<img src="/images/quiz/wqt-em9/27.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "NAT",
      text: `<p></p> <p>Consider a continuous function \\( f(x), \\)&nbsp;and suppose that \\( f(x) \\) and its first derivative \\( f^{\\prime}(x) \\) are differentiable everywhere. Suppose we know the following information about \\( f(x) \\) and its first and second derivatives. </p> <ul> <li>On the interval \\( (-\\infty,-2) \\), we have \\( f(x)=2^{-x} \\). </li> <li> \\( \\displaystyle\\lim _{x \\rightarrow \\infty} f(x)=6 \\) </li> <li> \\( f(2)=-5, f(3)=7, \\)&nbsp;and \\( f(4)=8 \\) </li> <li> \\( f^{\\prime}(x) \\) is equal to 0 at \\( x=-1,2,4, \\)&nbsp;and not at any other \\( x \\)-values. </li> <li> \\( f^{\\prime \\prime}(x)&lt;0 \\) on the intervals \\( -1 and \\( 3, and not on any other interval. </li> </ul> <p>Find the global minimum of \\( f(x) \\) on \\( (-\\infty, \\infty)? \\)&nbsp; (minimum value of \\( f(x) \\)) </p> <p></p>`,
      image: "",
      options: [],
      answer: "-5",
      solution: `<img src="/images/quiz/wqt-em9/28.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "NAT",
      text: `<p>If \\( f(x)=(1+x)\\left(1+x^2\\right)\\left(1+x^3\\right)\\left(1+x^4\\right), \\) then \\( f^{\\prime}(0)=? \\) </p>`,
      image: "",
      options: [],
      answer: "1",
      solution: `<img src="/images/quiz/wqt-em9/29.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "NAT",
      text: `<p>Let \\( M = \\displaystyle\\lim _{x \\rightarrow 0^{+}}\\left(e^x+3 x\\right)^{1 / x} \\) . Find the value of \\( log_eM. \\) </p>`,
      image: "",
      options: [],
      answer: "4",
      solution: `<img src="/images/quiz/wqt-em9/30.png" style="max-width: 75%;">`
    },
  ]
});

registerTest({
  series: "weekly-cs-gate-2027",
  name: "WQT - Engineering Mathematics-10|calculus",
  date: "Sep 10, 2026",
  questions: [
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>Suppose that \\( f \\) is continuous on \\( [a, b] \\) and differentiable on \\( (a, b) \\). If \\( f^{\\prime}(x)&gt;0 \\) on ( \\( a, b \\) ). Which of the following is necessarily true? </p> <p></p>`,
      image: "",
      options: [
        `\\( f \\) is decreasing on \\( [a, b] \\),`,
        `\\( f \\) has no local extrema on \\( (a, b) \\),`,
        `\\( f \\) is a constant function on \\( (a, b) \\),`,
        `\\( f \\) is concave up on \\( (a, b) \\),`,
      ],
      answer: "B",
      solution: `<img src="/images/quiz/wqt-em10/1.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>Which of the following are true about the function \\( f \\) if its derivative is \\( f^{\\prime}(x)=(x-1)^{2}(4-x) \\) ? </p> <p>&nbsp;</p> <ul><li>I. \\( f \\) is decreasing for all \\( x&lt;4 \\).</li><li>II. \\( f \\) has a local maximum at \\( x=1 \\).</li><li>III. \\( f \\) is concave up for all \\( x&lt;1 \\).</li></ul> <p>&nbsp;</p> <p></p>`,
      image: "",
      options: [
        `I only`,
        `II only`,
        `III only`,
        `II and III only`,
      ],
      answer: "C",
      solution: `<img src="/images/quiz/wqt-em10/2.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p><img alt="" src="/images/quiz/wqt-em10/q3_img1.png" style="max-width: 75%;"><br><br>The graph of the derivative of a function \\( f \\) is shown above. Which of the following are true about the original function \\( f \\) ? </p> <p>&nbsp;</p> <ul><li>I. \\( f \\) is increasing on the interval \\( (-2,1) \\).</li><li>II. \\( f \\) is continuous at \\( x=0 \\).</li><li>III. \\( f \\) has an inflection point at \\( x=-2 \\).</li></ul> <p>&nbsp;</p> <p></p>`,
      image: "",
      options: [
        `I only`,
        `II only`,
        `III only`,
        `II and III only`,
      ],
      answer: "D",
      solution: `<img src="/images/quiz/wqt-em10/3.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>Given that the function \\( f \\) is continuous at the point ( \\( c, f(c) \\) ), determine which of the following statements could be false. </p> <p></p>`,
      image: "",
      options: [
        `\\( \\lim _{x \\rightarrow c} f(x) \\) exists.`,
        `\\( \\lim _{x \\rightarrow c} f(x)=f(c) \\).`,
        `\\( \\lim _{x \\rightarrow c^{-}} f(x)=\\lim _{x \\rightarrow c^{+}} f(x) \\) .`,
        `\\( \\lim _{x \\rightarrow c} f(x)=c \\).`,
      ],
      answer: "D",
      solution: `<img src="/images/quiz/wqt-em10/4.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>If \\( f(x)=2+|x-3| \\) for all \\( x \\), then the value of the derivative \\( f^{\\prime}(x) \\) at \\( x=3 \\) is </p> <p></p>`,
      image: "",
      options: [
        `\\( -1 \\)`,
        `\\( 0 \\)`,
        `\\( 1 \\)`,
        `nonexistent`,
      ],
      answer: "D",
      solution: `<img src="/images/quiz/wqt-em10/5.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>Let \\( f:[a, b] \\rightarrow \\mathbb{R} \\) be a differentiable function, and define \\( g(x)=(f(x))^{2} \\).<br>Apply the Mean Value Theorem (MVT) to the function \\( g \\) on the interval \\( [a, b] \\).<br>Then which of the following is correct? </p> <p></p>`,
      image: "",
      options: [
        `There exists \\( c \\in(a, b) \\) such that<br> \$\$ \\frac{f(b)^{2}-f(a)^{2}}{b-a}=f^{\\prime}(c)^{2} \$\$`,
        `There exists \\( c \\in(a, b) \\) such that<br> \$\$ \\frac{f(b)^{2}-f(a)^{2}}{b-a}=2 f(c) f^{\\prime}(c) \$\$`,
        `There exists \\( c \\in(a, b) \\) such that<br> \$\$ \\frac{f(b)^{2}-f(a)^{2}}{b-a}=f(c)^{2} \$\$`,
        `There exists \\( c \\in(a, b) \\) such that<br> \$\$ \\frac{f(b)^{2}-f(a)^{2}}{b-a}=f^{\\prime}(c)[f(a)+f(b)] \$\$`,
      ],
      answer: "B",
      solution: `<img src="/images/quiz/wqt-em10/6.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p> \\( \\lim _{n \\rightarrow \\infty} \\frac{2^{n+1}+3^{n+1}}{2^{n}+3^{n}} \\) equals </p> <p></p>`,
      image: "",
      options: [
        `\\( 3 \\)<br>&nbsp;`,
        `\\( 2 \\)<br>&nbsp;`,
        `\\( 1 \\)<br>&nbsp;`,
        `\\( 0 \\)`,
      ],
      answer: "A",
      solution: `<img src="/images/quiz/wqt-em10/7.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>Let<br> \$\$ f(x)=(x-1)(x-2)(x-3)(x-4)(x-5) \$\$ <br>The number of distinct real roots of the equation \\( \\frac{d}{d x} f(x)=0 \\) is exactly </p> <p>&nbsp;</p> <p></p>`,
      image: "",
      options: [
        `\\( 2 \\)`,
        `\\( 3 \\)`,
        `\\( 4 \\)`,
        `\\( 5 \\)`,
      ],
      answer: "C",
      solution: `<img src="/images/quiz/wqt-em10/8.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>The positive integers \\( m \\) and \\( n \\) are relatively prime, and chosen in such a way that<br> \$\$ \\lim _{x \\rightarrow 2} \\frac{5 \\sqrt{1+4 x}-3 \\sqrt{1+12 x}}{x-2}=-\\frac{m}{n} . \$\$ <br>What is \\( n-4 m \\) ? </p> <p></p>`,
      image: "",
      options: [
        `\\( -1 \\)`,
        `\\( 2 \\)`,
        `\\( -3 \\)`,
        `\\( 4 \\)`,
      ],
      answer: "A",
      solution: `<img src="/images/quiz/wqt-em10/9.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p> \$\$ f(x)= \\begin{cases}2 x-2 &amp; \\text { for } x&lt;3 \\\\ 2 x-4 &amp; \\text { for } x \\geq 3\\end{cases} \$\$ <br>Let \\( f \\) be the piecewise-linear function defined above. Which of the following statements are true? </p> <p>&nbsp;</p> <ul><li>I. \\( \\lim _{h \\rightarrow 0^{-}} \\frac{f(3+h)-f(3)}{h}=2 \\)</li><li>II. \\( \\lim _{h \\rightarrow 0^{+}} \\frac{f(3+h)-f(3)}{h}=2 \\)</li><li>III. \\( f^{\\prime}(3)=2 \\)</li></ul> <p></p>`,
      image: "",
      options: [
        `None`,
        `II only`,
        `I and II only`,
        `I, II, and III`,
      ],
      answer: "B",
      solution: `<img src="/images/quiz/wqt-em10/10.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p>Which of the following statements is always true for a function \\( f(x) \\) ? </p> <p>&nbsp;</p> <ul><li>i. If \\( f(x) \\) and \\( g(x) \\) are continuous at \\( x=a \\), then \\( \\frac{f(x)}{g(x)} \\) is continuous at \\( x=a \\).</li><li>ii. If \\( f(x)+g(x) \\) is continuous at \\( x=a \\) and \\( f^{\\prime}(a)=0 \\), then \\( g(x) \\) is continuous at \\( x=a \\).</li><li>iii. If \\( f(x)+g(x) \\) is differentiable at \\( x=a \\), then \\( f(x) \\) and \\( g(x) \\) are both differentiable at \\( x=a \\)</li></ul><p></p>`,
      image: "",
      options: [
        `only i.`,
        `only ii.`,
        `only iii.`,
        `i. and ii.`,
      ],
      answer: "B",
      solution: `<img src="/images/quiz/wqt-em10/11.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p><img alt="" src="/images/quiz/wqt-em10/q12_img2.png" style="max-width: 75%;"><br>The graph of the first derivative \\( f^{\\prime} \\) for a function \\( f \\) is shown above. Which of the following statements must be true? </p> <p>&nbsp;&nbsp;</p> <p>&nbsp;</p> <ul><li>I. \\( f(4)=f(-1) \\)</li><li>II. \\( f(2)&gt;f(4) \\)</li><li>III. \\( f^{\\prime \\prime}(2)&lt;f^{\\prime \\prime}(4) \\)</li></ul> <p>&nbsp;</p> <p></p>`,
      image: "",
      options: [
        `I only`,
        `II only`,
        `II and III only`,
        `I and III only`,
      ],
      answer: "C",
      solution: `<img src="/images/quiz/wqt-em10/12.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p>If \\( f \\) is continuous at \\( x=2 \\), and if \\( f \\) is defined as<br> \$\$ f(x)= \\begin{cases}\\frac{\\ln x^{2}-x \\ln x}{x-2} &amp; x \\neq 2 \\\\ k &amp; x=2,\\end{cases} \$\$ <br>then \\( k \\) is </p> <p></p>`,
      image: "",
      options: [
        `\\( -1 \\)`,
        `\\( -2 \\)`,
        `\\( -\\frac{e}{4} \\)`,
        `\\( -\\ln 2 \\)`,
      ],
      answer: "D",
      solution: `<img src="/images/quiz/wqt-em10/13.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p>If \\( f^{\\prime}(x) \\) and \\( g^{\\prime}(x) \\) exist and \\( f^{\\prime}(x)&gt;g^{\\prime}(x) \\) for all real \\( x \\), then the graph of \\( y=f(x) \\) and the graph of \\( y=g(x) \\) </p> <p></p>`,
      image: "",
      options: [
        `intersect exactly once.`,
        `intersect no more than once.`,
        `do not intersect.`,
        `could intersect more than once.`,
      ],
      answer: "B",
      solution: `<img src="/images/quiz/wqt-em10/14.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p> \\( \\lim _{n \\rightarrow \\infty} \\frac{1-2+3-4+5-6+\\ldots+(-2 n)}{\\sqrt{n^{2}+1}+\\sqrt{n^{2}-1}} \\) equals </p> <p></p>`,
      image: "",
      options: [
        `\\( \\infty \\)`,
        `\\( 1 / 2 \\)`,
        `\\( 0 \\)`,
        `\\( -1 / 2 \\)`,
      ],
      answer: "D",
      solution: `<img src="/images/quiz/wqt-em10/15.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p>Let \\( f(x, y)=\\frac{a x^{2}+b y^{2}}{x y} \\), where \\( a \\) and \\( b \\) are constants. If \\( \\frac{\\partial f}{\\partial x}=\\frac{\\partial f}{\\partial y} \\) at \\( x=1 \\) and \\( y=2 \\), then the relation between \\( a \\) and \\( b \\) is: </p> <p></p>`,
      image: "",
      options: [
        `\\( a=\\frac{b}{4} \\)<br>&nbsp;`,
        `\\( a=\\frac{b}{2} \\)<br>&nbsp;`,
        `\\( a=2 b \\)<br>&nbsp;`,
        `\\( a=4 b \\)`,
      ],
      answer: "D",
      solution: `<img src="/images/quiz/wqt-em10/16.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p>Let<br> \$\$ f(x, y)=15-x^{2}+2 y^{2}+6 x-8 y . \$\$<br>Which of the following statements is correct about the critical point(s) of \\( f(x, y) \\) ? </p> <p></p>`,
      image: "",
      options: [
        `The function has a critical point at \\( (3,2) \\), which is a local maximum.`,
        `The function has a critical point at \\( (3,2) \\), which is a local minimum.`,
        `The function has no critical points.`,
        `The function has a critical point at \\( (3,2) \\), which is a saddle point.`,
      ],
      answer: "D",
      solution: `<img src="/images/quiz/wqt-em10/17.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p>Consider the function \\( f(x)=\\sqrt{3-x} \\). Which of the following is the definition of \\( f^{\\prime}(-1) \\) ? </p> <p></p>`,
      image: "",
      options: [
        `\\( f^{\\prime}(-1)=\\lim _{x \\rightarrow-1} \\frac{\\sqrt{3-x}-2}{x+1} \\) <br>&nbsp;`,
        `\\( f^{\\prime}(-1)=\\lim _{x \\rightarrow \\infty} \\frac{\\sqrt{3-x}-2}{x+1} \\) <br>&nbsp;`,
        `\\( f^{\\prime}(-1)=\\lim _{h \\rightarrow 0} \\frac{\\sqrt{3-x-h}-\\sqrt{3-x}}{h} \\) <br>&nbsp;`,
        `\\( f^{\\prime}(-1)=\\lim _{h \\rightarrow 0} \\frac{h}{\\sqrt{3-x-h}-\\sqrt{3-x}} \\)`,
      ],
      answer: "A",
      solution: `<img src="/images/quiz/wqt-em10/18.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p>The function \\( f \\) is defined on the closed interval \\( [2,4] \\) and \\( f(2)=f(3)=f(4) \\). On the open interval \\( (2,4), f \\) is continuous and strictly decreasing. Which of the following statements is true </p> <p></p>`,
      image: "",
      options: [
        `\\( f \\) attains neither a minimum value nor a maximum value on the closed interval \\( [2,4] \\).`,
        `\\( f \\) attains a minimum value but does not attain a maximum value on the closed interval \\( [2,4] \\).`,
        `\\( f \\) attains a maximum value but does not attain a minimum value on the closed interval \\( [2,4] \\).`,
        `\\( f \\) attains both a minimum value and a maximum value on the closed interval \\( [2,4] \\).`,
      ],
      answer: "A",
      solution: `<img src="/images/quiz/wqt-em10/19.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <table border="1" cellpadding="1" style="width: 500px; margin: auto; border-spacing: 1px;"> <tbody> <tr> <td> \\( x \\) </td> <td> \\( 0 \\) </td> <td> \\( 1 \\) </td> <td> \\( 2 \\) </td> </tr> <tr> <td> \\( f(x) \\) </td> <td> \\( 1 \\) </td> <td> \\( k \\) </td> <td> \\( 2 \\) </td> </tr> </tbody> </table> <p><br>The function \\( f \\) is continuous on the closed interval \\( [0,2] \\) and has values that are given in the table above. The equation \\( f(x)=\\frac{1}{2} \\) must have at least two solutions in the interval \\( [0,2] \\) if \\( k= \\) </p> <p></p>`,
      image: "",
      options: [
        `\\( 0 \\)<br>&nbsp;`,
        `\\( \\frac{1}{2} \\)<br>&nbsp;`,
        `\\( 1 \\)<br>&nbsp;`,
        `\\( 2 \\)`,
      ],
      answer: "A",
      solution: `<img src="/images/quiz/wqt-em10/20.png" style="max-width: 75%;">`
    },
  ]
});
registerTest({
  series: "weekly-cs-gate-2027",
  name: "WQT - Engineering Mathematics-11|calculus",
  date: "Sep 17, 2026",
  questions: [
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>The intervals for which the function \\( F(x)=x^{4}-4 x^{3}+4 x^{2}+6 \\) increases are </p> <p></p>`,
      image: "",
      options: [
        `\\( x&lt;0,1&lt;x&lt;2 \\)<br>&nbsp;`,
        `only \\( x&gt;2 \\)<br>&nbsp;`,
        `\\( 0&lt;x&lt;1, x&gt;2 \\)<br>&nbsp;`,
        `only \\( 0&lt;x&lt;1 \\)`,
      ],
      answer: "C",
      solution: `<img src="/images/quiz/wqt-em11/1.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>Let them \\( x, y \\) be positive real numbers such that \\( x y=1 \\). What is the minimum value \\( x+y \\) ? </p> <p></p>`,
      image: "",
      options: [
        `\\( \\sqrt{2} \\)`,
        `\\( 1 \\)`,
        `\\( 2 \\)`,
        `The minimum value does not exist`,
      ],
      answer: "C",
      solution: `<img src="/images/quiz/wqt-em11/2.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>Let \\( f, g:[a, b] \\rightarrow \\mathbb{R} \\) be continuous functions. Define<br> \$\$ h(x)=\\min \\{f(x), g(x)\\} \$\$ <br>Which of the following statements is <strong>true</strong>? </p> <p></p>`,
      image: "",
      options: [
        `\\( h \\) is not necessarily continuous on \\( [a, b] \\)<br>&nbsp;`,
        `\\( h \\) is continuous only if \\( f(x) \\leq g(x) \\) for all \\( x \\in[a, b] \\)<br>&nbsp;`,
        `\\( h \\) is continuous on \\( [a, b] \\)<br>&nbsp;`,
        `\\( h \\) is continuous only at points where \\( f(x)=g(x) \\)`,
      ],
      answer: "C",
      solution: `<img src="/images/quiz/wqt-em11/3.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>Let<br> \$\$ f(x)= \\begin{cases}-x+c &amp; \\text { if } x \\leq 1 \\\\ 6-2 x^{2} &amp; \\text { if } x&gt;1\\end{cases} \$\$ <br>Find the value of \\( c \\) such that \\( f(x) \\) is continuous at \\( x=1 \\). </p> <p></p>`,
      image: "",
      options: [
        `\\( 2 \\)`,
        `\\( 4 \\)`,
        `\\( 5 \\)`,
        `\\( 6 \\)`,
      ],
      answer: "C",
      solution: `<img src="/images/quiz/wqt-em11/4.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0,
      type: "NAT",
      text: `<p></p> <p>Your friend has two functions, \\( f(x) \\) and \\( g(x) \\). He calls their product \\( h(x) \\); i.e., \\( h(x)=f(x) g(x) \\). One day he asks you to compute \\( g^{\\prime}(5) \\), but only tells you </p> <ul> <li> \\( g(5)=1 \\), </li> <li> \\( f(5)=2 \\), </li> <li> \\( f^{\\prime}(5)=3 \\), </li> <li> \\( h^{\\prime}(5)=4 \\). </li> </ul> <p>What is \\( g^{\\prime}(5) \\) ? </p> <p></p>`,
      image: "",
      options: [],
      answer: "0.5",
      solution: `<img src="/images/quiz/wqt-em11/5.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>Evaluate the limit:<br> \$\$ \\lim _{x \\rightarrow 3} \\frac{x^{2}-x-6}{x^{2}-9} \$\$ </p> <p></p>`,
      image: "",
      options: [
        `\\( \\frac{5}{6} \\)`,
        `\\( 0 \\)`,
        `\\( \\infty \\)`,
        `\\( \\frac{1}{2} \\)`,
      ],
      answer: "A",
      solution: `<img src="/images/quiz/wqt-em11/6.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>What is the derivative of \\( g(x)=\\frac{1}{f(\\sqrt{x})} \\) ? </p> <p></p>`,
      image: "",
      options: [
        `\\( \\frac{f^{\\prime}(\\sqrt{x})}{\\sqrt{x} f(\\sqrt{x})^{2}} \\)<br>&nbsp;`,
        `\\( \\frac{-f^{\\prime}(\\sqrt{x})}{\\sqrt{x} f(\\sqrt{x})^{2}} \\) <br>&nbsp;`,
        `\\( \\frac{f^{\\prime}(\\sqrt{x})}{2 \\sqrt{x} f(\\sqrt{x})^{2}} \\) <br>&nbsp;`,
        `\\( \\frac{-f^{\\prime}(\\sqrt{x})}{2 \\sqrt{x} f(\\sqrt{x})^{2}} \\)`,
      ],
      answer: "D",
      solution: `<img src="/images/quiz/wqt-em11/7.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>The graph of a twice-differentiable function \\( f \\) is shown in the figure below. Which of the following is true?<br><img alt="" src="/images/quiz/wqt-em11/q8_img1.png" style="max-width: 75%;"> </p> <p></p>`,
      image: "",
      options: [
        `\\( f(1)&lt;f^{\\prime}(1)&lt;f^{\\prime \\prime}(1) \\) <br>&nbsp;`,
        `\\( f(1)&lt;f^{\\prime \\prime}(1)&lt;f^{\\prime}(1) \\) <br>&nbsp;`,
        `\\( f^{\\prime}(1)&lt;f(1)&lt;f^{\\prime \\prime}(1) \\) <br>&nbsp;`,
        `\\( f^{\\prime \\prime}(1)&lt;f(1)&lt;f^{\\prime}(1) \\) <br>&nbsp;`,
      ],
      answer: "D",
      solution: `<img src="/images/quiz/wqt-em11/8.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p> \$\$ \\begin{array}{|c|c|c|c|c|c|} \\hline x &amp; 0 &amp; 2 &amp; 5 &amp; 9 &amp; 11 \\\\ \\hline g(x) &amp; 1 &amp; 2.8 &amp; 1.7 &amp; 1 &amp; 3.4 \\\\ \\hline \\end{array} \$\$ <br>The table above shows selected values of a continuous function <strong>g.</strong> For \\( 0 \\leq x \\leq 11 \\), what is the fewest possible number of times \\( g(x)=2 \\) ? </p> <p></p>`,
      image: "",
      options: [
        `One`,
        `Two`,
        `Three`,
        `Four`,
      ],
      answer: "C",
      solution: `<img src="/images/quiz/wqt-em11/9.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>A function \\( f(x) \\) is known to satisfy \\( f(0)=1.05 \\) and \\( f^{\\prime}(0)=-0.1 \\). Using the tangent line approximation, what is a reasonable estimate for it \\( f(0.1) \\) ? </p> <p></p>`,
      image: "",
      options: [
        `\\( 0.95 \\)`,
        `\\( 1.00 \\)`,
        `\\( 1.04 \\)`,
        `\\( 1.10 \\)`,
      ],
      answer: "C",
      solution: `<img src="/images/quiz/wqt-em11/10.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p>Let \\( f \\) be a continuous and one-to-one \\( (1-1) \\) function on the interval \\( [0,1] \\), and suppose \\( f(0)&lt;f(1) \\). Which of the following must be true for every \\( x \\in(0,1) \\) ? </p> <p>&nbsp;</p> <p></p>`,
      image: "",
      options: [
        `\\( f(x)=f(0) \\) or \\( f(x)=f(1) \\)<br>&nbsp;`,
        `\\( f(x) \\notin[f(0), f(1)] \\)<br>&nbsp;`,
        `\\( f(0)&lt;f(x)&lt;f(1) \\)<br>&nbsp;`,
        `\\( f(x)&gt;f(1) \\) or \\( f(x)&lt;f(0) \\)`,
      ],
      answer: "C",
      solution: `<img src="/images/quiz/wqt-em11/11.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p> \\( \\boldsymbol{f(x), f^{\\prime}(x)} \\) \\( \\boldsymbol{,} \\) and \\( \\boldsymbol{f^{\\prime \\prime}(x)} \\) are all positive for any real number \\( \\boldsymbol{x} \\). Which of the following graphs could be a graph of \\( \\boldsymbol{f} \\) ? </p> <p>&nbsp;&nbsp;</p> <p><img alt="" src="/images/quiz/wqt-em11/q12_img2.png" style="max-width: 75%;"></p> <p></p>`,
      image: "",
      options: ["A", "B", "C", "D"],
      answer: "D",
      solution: `<img src="/images/quiz/wqt-em11/12.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p>What are all values of \\( x \\) for which the function \\( f(x)=x^{3}+6 x^{2}+9 x+1 \\) is increasing? </p> <p></p>`,
      image: "",
      options: [
        `\\( (-\\infty,-3) \\mathrm{only} \\)<br>&nbsp;`,
        `\\( (-3,-1)&nbsp;\\mathrm{only} \\)<br>&nbsp;`,
        `\\( (-1, \\infty)&nbsp;\\mathrm{only} \\)<br>&nbsp;`,
        `\\( (-\\infty,-3) \\cup(-1, \\infty) \\)`,
      ],
      answer: "D",
      solution: `<img src="/images/quiz/wqt-em11/13.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p>If \\( g \\) is a differentiable function such that \\( g(x)&lt;0 \\) for all real numbers \\( x \\) and if \\( f^{\\prime}(x)=\\left(x^{2}-4\\right) g(x) \\), which of the following is true? </p> <p></p>`,
      image: "",
      options: [
        `\\( f \\) has a relative maximum at \\( x=-2 \\) and a relative minimum at \\( x=2 \\).<br>&nbsp;`,
        `\\( f \\) has a relative minimum at \\( x=-2 \\) and a relative maximum at \\( x=2 \\).<br>&nbsp;`,
        `\\( f \\) has a relative minima at \\( x=-2 \\) and at \\( x=2 \\).<br>&nbsp;`,
        `\\( f \\) has a relative maxima at \\( x=-2 \\) and at \\( x=2 \\).`,
      ],
      answer: "B",
      solution: `<img src="/images/quiz/wqt-em11/14.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "NAT",
      text: `<p>Evaluate the limit \$\$ \\lim _{x \\rightarrow \\infty}(\\sqrt{x+1}-\\sqrt{x+2}) \$\$ </p>`,
      image: "",
      options: [],
      answer: "0",
      solution: `<img src="/images/quiz/wqt-em11/15.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p>If \\( \\lim _{x \\rightarrow a} f(x)=0 \\) and \\( \\lim _{x \\rightarrow a} g(x)=0 \\) then<br> \$\$ \\lim _{x \\rightarrow a} \\frac{f(x)}{g(x)} \$\$<br>&nbsp; </p> <p></p>`,
      image: "",
      options: [
        `\\( 1 \\)`,
        `\\( 0 \\)`,
        `does not exist`,
        `Not enough information is given to say anything about the limit.`,
      ],
      answer: "D",
      solution: `<img src="/images/quiz/wqt-em11/16.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p>Let \\( f: \\mathbb{R} \\rightarrow \\mathbb{R} \\) be a twice continuously differentiable function such that<br> \$\$ f(0)=f(1)=f^{\\prime}(0)=0 . \$\$ <br>Which of the following statements is necessarily true? </p> <p></p>`,
      image: "",
      options: [
        `\\( f^{\\prime \\prime}(x)=0 \\) for all \\( x \\in \\mathbb{R} \\)`,
        `\\( f^{\\prime \\prime}(0)=0 \\)`,
        `There exists some \\( x \\in(0,1) \\) such that \\( f^{\\prime \\prime}(x)=0 \\)`,
        `\\( f^{\\prime \\prime}(x) \\neq 0 \\) for any \\( x \\in(0,1) \\)`,
      ],
      answer: "C",
      solution: `<img src="/images/quiz/wqt-em11/17.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p>&nbsp;</p> <p style="text-align:center"><img alt="" src="/images/quiz/wqt-em11/q18_img3.png" style="max-width: 75%;"></p> <p><br>The graph of the function \\( f \\) is shown in the figure above. For which of the following values of \\( x \\) is \\( f^{\\prime}(x) \\) positive and increasing? </p> <p></p>`,
      image: "",
      options: [
        `\\( a \\)`,
        `\\( b \\)`,
        `\\( c \\)`,
        `\\( e \\)`,
      ],
      answer: "D",
      solution: `<img src="/images/quiz/wqt-em11/18.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p><img alt="" src="/images/quiz/wqt-em11/q19_img4.png" style="max-width: 75%;"><br>The graph of the function \\( f \\) is shown above. Which of the following statements is false? </p> <p></p>`,
      image: "",
      options: [
        `\\( \\lim _{x \\rightarrow 2} f(x) \\) exists.<br>&nbsp;`,
        `\\( \\lim _{x \\rightarrow 3} f(x) \\) exists.<br>&nbsp;`,
        `\\( \\lim _{x \\rightarrow 4} f(x) \\) exists.<br>&nbsp;`,
        `The function \\( f \\) is continuous at \\( x=3 \\).`,
      ],
      answer: "C",
      solution: `<img src="/images/quiz/wqt-em11/19.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p>Let \\( f:[0,5] \\rightarrow \\mathbb{R} \\) be continuous function with a maximum at \\( x=2 \\) then </p> <p></p>`,
      image: "",
      options: [
        `the derivative of \\( f \\) at \\( 2 \\) may not exist`,
        `the derivative of \\( f \\) at \\( 2 \\) must exist and be nonzero`,
        `the derivative of \\( f \\) at \\( 2 \\) must exist and be zero`,
        `the derivative of \\( f \\) at \\( 2 \\) can not exist`,
      ],
      answer: "A",
      solution: `<img src="/images/quiz/wqt-em11/20.png" style="max-width: 75%;">`
    },
  ]
});

registerTest({
  series: "weekly-cs-gate-2027",
  name: "WQT - C-Programming-1| Number representation and Integer promotion",
  date: "Sep 24, 2026",
  questions: [
    {
      marks: 1,
      neg: 0,
      type: "NAT",
      text: `<p>Consider the number \\( 1001 \\) in \\( 2's \\) Complement number system _________ </p>`,
      image: "",
      options: [],
      answer: "-7",
      solution: `<img src="/images/quiz/wqt-cprog1/1.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0,
      type: "NAT",
      text: `<p>Minimum Number of bits to present \\( +14 \\) in binary in \\( 2's \\) complement system? </p>`,
      image: "",
      options: [],
      answer: "5",
      solution: `<img src="/images/quiz/wqt-cprog1/2.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>Consider a \\( 2's \\) complement system with \\( 16 \\)-bit short integer size. What is the smallest value that can be stored in a signed short? </p> <p></p>`,
      image: "",
      options: [
        `\\( -2^{15} \\)`,
        `\\( -2^{15}-1 \\)`,
        `\\( -2^{16} \\)`,
        `\\( -2^{16}-1 \\)`,
      ],
      answer: "A",
      solution: `<img src="/images/quiz/wqt-cprog1/3.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>What will be the output of the following program?</p> <p>(Assume \\( 2’s \\) complement system for signed numbers) </p> <pre class="prettyprint linenums lang-c_cpp prettyprinted" data-pbcklang="c_cpp" data-pbcktabsize="4" style=""><ol class="linenums"><li class="L0"><span class="kwd">int</span><span class="pln"> main</span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span></li><li class="L1"><span class="pln">    </span><span class="kwd">int</span><span class="pln"> i </span><span class="pun">=</span><span class="pln"> </span><span class="pun">-</span><span class="lit">1</span><span class="pun">;</span></li><li class="L2"><span class="pln">    </span><span class="kwd">int</span><span class="pln"> x </span><span class="pun">=</span><span class="pln"> </span><span class="pun">(</span><span class="kwd">unsigned</span><span class="pln"> </span><span class="kwd">char</span><span class="pun">)</span><span class="pln">i</span><span class="pun">;</span></li><li class="L3"><span class="pln">    printf</span><span class="pun">(</span><span class="str">"%d"</span><span class="pun">,</span><span class="pln"> x</span><span class="pun">);</span></li><li class="L4"><span class="pun">}</span></li></ol></pre> <p></p>`,
      image: "",
      options: [
        `\\( -1 \\)`,
        `\\( 255 \\)`,
        `A huge number`,
        `\\( 11111111 \\)`,
      ],
      answer: "B",
      solution: `<img src="/images/quiz/wqt-cprog1/4.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>In C programming, constant integers are considered to be signed integers by default. One way to represent them as an unsigned constant is by appending \\( \\text{U} \\) as a suffix. For example, \\( -1 \\) is signed, whereas \\( -1\\text{U} \\) is unsigned. </p> <p>Which of the following condition(s) is/are TRUE?</p> <p></p>`,
      image: "",
      options: [
        `\\( -3 &gt; -4\\text{U} \\)`,
        `\\( -1\\text{U} &gt; -2 \\)`,
        `\\( -1\\text{U} &gt; 0\\text{U} \\)`,
        `\\( -1 &gt; 1 \\)`,
      ],
      answer: ["A", "B", "C"],
      solution: `<img src="/images/quiz/wqt-cprog1/5.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p>What will be the output on the execution of the following code segment?</p> <pre class="prettyprint linenums lang-c_cpp prettyprinted" data-pbcklang="c_cpp" data-pbcktabsize="4" style=""><ol class="linenums"><li class="L0"><span class="pln">main</span><span class="pun">()</span></li><li class="L1"><span class="pun">{</span></li><li class="L2"><span class="pln">    </span><span class="kwd">unsigned</span><span class="pln"> num1</span><span class="pun">=-</span><span class="lit">1</span><span class="pun">;</span></li><li class="L3"><span class="pln">    </span><span class="kwd">signed</span><span class="pln"> num2</span><span class="pun">=</span><span class="lit">1</span><span class="pun">;</span></li><li class="L4"><span class="pln">    </span><span class="kwd">if</span><span class="pun">(</span><span class="pln">num1 </span><span class="pun">&lt;</span><span class="pln"> num2</span><span class="pun">)</span></li><li class="L5"><span class="pln">        printf</span><span class="pun">(</span><span class="str">"less"</span><span class="pun">);</span></li><li class="L6"><span class="pln">    </span><span class="kwd">else</span><span class="pln"> </span><span class="kwd">if</span><span class="pun">(</span><span class="pln">num1</span><span class="pun">&gt;</span><span class="pln">num2</span><span class="pun">)</span></li><li class="L7"><span class="pln">        printf</span><span class="pun">(</span><span class="str">"greater"</span><span class="pun">);</span></li><li class="L8"><span class="pln">    </span><span class="kwd">else</span><span class="pln"> </span><span class="kwd">if</span><span class="pun">(</span><span class="pln">num1</span><span class="pun">==</span><span class="pln">num2</span><span class="pun">)</span></li><li class="L9"><span class="pln">        printf</span><span class="pun">(</span><span class="str">"equal"</span><span class="pun">);</span></li><li class="L0"><span class="pun">}</span></li></ol></pre> <p></p>`,
      image: "",
      options: [
        `greater`,
        `less`,
        `equal`,
        `error`,
      ],
      answer: "A",
      solution: `<img src="/images/quiz/wqt-cprog1/6.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>Consider \\( k \\) bit binary pattern. </p> <ul> <li> \\( T_{\\text{max}} \\) and \\( T_{\\text{min}} \\) are maximum and minimum signed numbers we can represent using \\( k \\) bits. </li> <li> \\( U_{\\text{max}} \\) and \\( U_{\\text{min}} \\) are maximum and minimum unsigned numbers we can represent using \\( k \\) bits. </li> </ul> <p>Which of the following(s) is/are true for \\( k =16? \\) </p> <p>Here \\( |.| \\) represents absolute value of a number i.e., \\( |r| = -r \\) if \\( r&lt;0 \\) otherwise \\( |r| = r. \\) </p> <p></p>`,
      image: "",
      options: [
        `\\( |T_{\\text{min}}| = T_{\\text{max}} + 1 \\)`,
        `\\( U_{\\text{max}} = 2*T_{\\text{max}} +1 \\)`,
        `\\( U_{\\text{max}} = |T_{\\text{min}}| +T_{\\text{max}} + 1 \\)`,
        `\\( U_{\\text{min}} = |T_{\\text{min}}| \\)`,
      ],
      answer: ["A", "B"],
      solution: `<img src="/images/quiz/wqt-cprog1/7.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>Consider Figure \\( A \\) and Figure \\( B \\) which represent \\( 4 \\) bit signed and unsigned numbers respectively in \\( 2’s \\) complement system.<br><strong><img alt="" src="/images/quiz/wqt-cprog1/q8_img1.png" style="max-width: 75%;"></strong><br>Assume that a few variables are defined below and initialized in such a way that places them in the spot shown in Figure \\( C \\). </p> <pre class="prettyprint linenums lang-c_cpp prettyprinted" data-pbcklang="c_cpp" data-pbcktabsize="4" style=""><ol class="linenums"><li class="L0"><span class="kwd">int</span><span class="pln"> s1</span><span class="pun">,</span><span class="pln"> s2</span><span class="pun">,</span><span class="pln"> s3</span><span class="pun">;</span></li><li class="L1"><span class="kwd">unsigned</span><span class="pln"> </span><span class="kwd">int</span><span class="pln"> u1</span><span class="pun">,</span><span class="pln"> u2</span><span class="pun">,</span><span class="pln"> u3</span><span class="pun">;</span></li></ol></pre> <p>Which of the following(s) is/are true?</p> <p></p>`,
      image: "",
      options: [
        `\\( s3 &gt; u3 \\)`,
        `\\( s1 &gt; s3 \\)`,
        `\\( u1 &gt; u3 \\)`,
        `\\( s1 &gt; u3 \\)`,
      ],
      answer: ["A", "C", "D"],
      solution: `<img src="/images/quiz/wqt-cprog1/8.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>Consider two program fragments given below. \\( \\text{UINT_MAX} \\) is the maximum unsigned number in the system. </p> <div style="display: flex; justify-content: space-between; font-family:'Segoe UI', sans-serif; font-size:17px; line-height:1.8; margin-top:12px;"> &nbsp;<div style="width:47%;"> <p style="text-align:center; font-weight:bold; color:#0047ab;">Program 1</p> <p style="margin-left:20px;"> \\( \\texttt{main()} \\)<br> \\( \\{ \\)<br>&nbsp;&nbsp; \\( \\texttt{unsigned int a = UINT_MAX;} \\) <br>&nbsp;&nbsp; \\( \\texttt{signed char c = -1;} \\) <br><br>&nbsp;&nbsp; \\( \\texttt{if (c == a)} \\) <br>&nbsp;&nbsp;&nbsp;&nbsp; \\( \\texttt{printf("GO Classes");} \\)<br> \\( \\} \\) </p> </div> <div style="width:47%;"> <p style="text-align:center; font-weight:bold; color:#0047ab;">Program 2</p> <p style="margin-left:20px;"> \\( \\texttt{main()} \\)<br> \\( \\{ \\)<br>&nbsp;&nbsp; \\( \\texttt{unsigned int b = UINT_MAX;} \\) <br>&nbsp;&nbsp; \\( \\texttt{signed char d = -10;} \\) <br><br>&nbsp;&nbsp; \\( \\texttt{if (d == b - 10)} \\) <br>&nbsp;&nbsp;&nbsp;&nbsp; \\( \\texttt{printf("GATE Overflow");} \\) <br> \\( \\} \\) </p> </div> </div> <p style="margin-top:20px;">Which of the following(s) is/are true? All the prints are without double commas. </p> <p></p>`,
      image: "",
      options: [
        `Program \\( 1 \\) prints "GO Classes”`,
        `Program \\( 2 \\) prints "GATE Overflow"`,
        `Program \\( 1 \\) does not print "GO Classes"`,
        `Program \\( 2 \\) does not print "GATE Overflow"`,
      ],
      answer: ["A", "D"],
      solution: `<img src="/images/quiz/wqt-cprog1/9.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p>What is the output of the following code? Assume that int is \\( 32 \\) bits, short is \\( 16 \\) bits, and the representation is two’s complement.&nbsp; </p> <pre class="prettyprint linenums lang-c_cpp prettyprinted" data-pbcklang="c_cpp" data-pbcktabsize="4" style=""><ol class="linenums"><li class="L0"><span class="kwd">signed</span><span class="pln"> </span><span class="kwd">short</span><span class="pln"> ix </span><span class="pun">=</span><span class="pln"> </span><span class="pun">-</span><span class="lit">2</span><span class="pun">;</span></li><li class="L1"><span class="pln">printf</span><span class="pun">(</span><span class="pln"> </span><span class="str">"%u"</span><span class="pun">,</span><span class="pln"> ix </span><span class="pun">);</span></li></ol></pre> <p></p>`,
      image: "",
      options: [
        `\\( -2 \\)`,
        `\\( 2^{32}-2 \\)`,
        `\\( 2^{32}-1 \\)`,
        `\\( 2^{16}-1 \\)`,
      ],
      answer: "B",
      solution: `<img src="/images/quiz/wqt-cprog1/10.png" style="max-width: 75%;">`
    },
  ]
});

registerTest({
  series: "weekly-cs-gate-2027",
  name: "WQT - C-Programming-2 | Functions, Storage classes and Loops",
  date: "Oct 01, 2026",
  questions: [
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>As shown below, the file \\( f.c \\) defines a function f whose code refers to the variable \\( x \\) that is not a local variable or a parameter. The file \\( g.c \\) defines a function \\( g \\) whose code refers to the variable \\( x \\) that is not a local variable or a parameter. </p> <pre class="prettyprint linenums lang-c_cpp prettyprinted" data-pbcklang="c_cpp" data-pbcktabsize="4" style=""><ol class="linenums"><li class="L0"><span class="com">// file f.c</span></li><li class="L1"><span class="com">// declaration for x</span></li><li class="L2"><span class="pln">&nbsp;</span></li><li class="L3"><span class="kwd">void</span><span class="pln"> f</span><span class="pun">(</span><span class="kwd">int</span><span class="pln"> a</span><span class="pun">){</span></li><li class="L4"><span class="pln">    </span><span class="pun">...</span></li><li class="L5"><span class="pln">    x </span><span class="pun">=</span><span class="pln"> </span><span class="pun">...</span></li><li class="L6"><span class="pun">}</span></li></ol></pre> <pre class="prettyprint linenums lang-c_cpp prettyprinted" data-pbcklang="c_cpp" data-pbcktabsize="4" style=""><ol class="linenums"><li class="L0"><span class="com">// file g.c</span></li><li class="L1"><span class="com">// declaration for x</span></li><li class="L2"><span class="pln">&nbsp;</span></li><li class="L3"><span class="kwd">void</span><span class="pln"> g</span><span class="pun">(</span><span class="kwd">char</span><span class="pun">*</span><span class="pln"> p</span><span class="pun">){</span></li><li class="L4"><span class="pln">    </span><span class="pun">...</span></li><li class="L5"><span class="pln">    x </span><span class="pun">=</span><span class="pln"> </span><span class="pun">...</span></li><li class="L6"><span class="pun">}</span></li></ol></pre> <p>The following table below shows how the variable x is defined in each file. For each row in the table, indicate in Column (c) whether the two functions at run-time refer to the SAME identifier (memory location) or to DIFFERENT identifiers (memory locations)<br> \$\$ \\begin{array} {|l|l|c|} \\hline&nbsp;\\qquad \\textbf{Column A}&nbsp;&amp; \\qquad \\textbf{Column B} &amp; \\textbf{Column C} \\\\&nbsp;\\textbf{declaration in f.c} &amp;&nbsp;\\textbf{declaration in g.c} &amp; \\textbf{SAME or DIFFERENT} \\\\\\hline&nbsp; \\text{int x;} &amp; \\text{extern int x;} &amp; {\\color{Red} {\\textbf{SAME}}} \\\\\\hline&nbsp;&nbsp; \\text{int x = 0;} &amp; \\text{static int x;} &amp; \\\\\\hline \\text{static int x;} &amp; \\text{static int x;} &amp; \\\\\\hline \\text{static int x;} &amp; \\text{extern int x = 0;} &amp; \\\\\\hline &nbsp;\\end{array} \$\$ </p> <p>The first row of column C has been filled for hints. What will be in the \\( 2 \\)nd, \\( 3 \\)rd, and \\( 4 \\)th row of Column C, respectively? </p> <p></p>`,
      image: "",
      options: [
        `SAME, DIFFERENT, DIFFERENT`,
        `SAME, SAME, SAME`,
        `DIFFERENT, DIFFERENT, DIFFERENT`,
        `DIFFERENT, SAME, DIFFERENT`,
      ],
      answer: "C",
      solution: `<img src="/images/quiz/wqt-cprog2/1.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>Consider the below program written into \\( 2 \\) files. </p> <p><strong><img alt="" src="/images/quiz/wqt-cprog2/q2_img1.png" style="max-width: 75%;"></strong> </p> <p>Note that compilation of&nbsp;f \\( 1 \\).c and f \\( 2 \\).c happens independently of each other. </p> <p>Which of the following is TRUE?</p> <p></p>`,
      image: "",
      options: [
        `f \\( 1 \\).c and f \\( 2 \\).c can be compiled independently.`,
        `f \\( 1 \\).c will produce a compilation error since variable \\( x \\) does not get any memory, and we are using it in printf.`,
        `f \\( 1 \\).c and f \\( 2 \\).c can be compiled and linked. The output of the program will be \\( 00. \\)`,
        `f \\( 2 \\).c will produce a compilation error since function fun() is not defined in&nbsp;f \\( 2 \\).c.`,
      ],
      answer: "A",
      solution: `<img src="/images/quiz/wqt-cprog2/2.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>Consider a function is_greater() given below. Mark all option(s) which return \\( 1 \\). </p> <pre class="prettyprint linenums lang-c_cpp prettyprinted" data-pbcklang="c_cpp" data-pbcktabsize="4" style=""><ol class="linenums"><li class="L0"><span class="kwd">int</span><span class="pln"> is_greater</span><span class="pun">(</span><span class="kwd">unsigned</span><span class="pln"> </span><span class="kwd">int</span><span class="pln"> x</span><span class="pun">,</span><span class="pln"> </span><span class="kwd">unsigned</span><span class="pln"> </span><span class="kwd">int</span><span class="pln"> y</span><span class="pun">)</span></li><li class="L1"><span class="pun">{</span></li><li class="L2"><span class="pln">    </span><span class="kwd">if</span><span class="pun">(</span><span class="pln">x</span><span class="pun">-</span><span class="pln">y </span><span class="pun">&gt;</span><span class="pln"> </span><span class="lit">0</span><span class="pun">)</span></li><li class="L3"><span class="pln">        </span><span class="kwd">return</span><span class="pln"> </span><span class="lit">1</span><span class="pun">;</span></li><li class="L4"><span class="pln">    </span><span class="kwd">else</span><span class="pln"> </span></li><li class="L5"><span class="pln">        </span><span class="kwd">return</span><span class="pln"> </span><span class="lit">0</span><span class="pun">;</span></li><li class="L6"><span class="pun">}</span></li></ol></pre> <p></p>`,
      image: "",
      options: [
        `is_greater \\( (1, 2) \\)`,
        `is_greater \\( (-1, -2) \\)`,
        `is_greater \\( (-2, -1) \\)`,
        `is_greater \\( (-1, 0) \\)`,
      ],
      answer: ["A", "B", "C", "D"],
      solution: `<img src="/images/quiz/wqt-cprog2/3.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>Which of the following(s) will evaluate to true</p> <p></p>`,
      image: "",
      options: [
        `\\( 0\\; \\&amp;\\&amp;\\; 0 == 0 \\)`,
        `\\( 0\\; \\&amp;\\&amp;\\; 1 == 0 \\)`,
        `\\( 1\\; ||\\; 0 == 0 \\)`,
        `\\( 1\\; ||\\; 1 == 0 \\)`,
      ],
      answer: ["C", "D"],
      solution: `<img src="/images/quiz/wqt-cprog2/4.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>What will be the output printed by the following program?</p> <pre class="prettyprint linenums lang-c_cpp prettyprinted" data-pbcklang="c_cpp" data-pbcktabsize="4" style=""><ol class="linenums"><li class="L0"><span class="com">#include</span><span class="pln"> </span><span class="str">&lt;stdio.h&gt;</span></li><li class="L1"><span class="kwd">int</span><span class="pln"> main</span><span class="pun">()</span></li><li class="L2"><span class="pun">{</span></li><li class="L3"><span class="pln">    </span><span class="kwd">int</span><span class="pln"> i </span><span class="pun">=</span><span class="pln"> </span><span class="lit">1</span><span class="pun">;</span></li><li class="L4"><span class="pln">    </span><span class="kwd">for</span><span class="pun">(</span><span class="pln">i </span><span class="pun">=</span><span class="pln"> </span><span class="lit">0</span><span class="pun">;</span><span class="pln"> i</span><span class="pun">&lt;</span><span class="lit">10</span><span class="pun">;</span><span class="pln"> i</span><span class="pun">+</span><span class="lit">3</span><span class="pun">)</span></li><li class="L5"><span class="pln">    </span><span class="kwd">switch</span><span class="pun">(</span><span class="pln">i</span><span class="pun">)</span></li><li class="L6"><span class="pln">    </span><span class="pun">{</span></li><li class="L7"><span class="pln">        </span><span class="kwd">case</span><span class="pln"> </span><span class="lit">3</span><span class="pun">:</span></li><li class="L8"><span class="pln">            printf</span><span class="pun">(</span><span class="str">"Hi. This is case 3"</span><span class="pun">);</span></li><li class="L9"><span class="pln">            </span><span class="kwd">break</span><span class="pun">;</span></li><li class="L0"><span class="pln">        </span><span class="kwd">case</span><span class="pln"> </span><span class="lit">6</span><span class="pun">:</span></li><li class="L1"><span class="pln">            printf</span><span class="pun">(</span><span class="str">"Hi. This is case 6"</span><span class="pun">);</span></li><li class="L2"><span class="pln">            </span><span class="kwd">break</span><span class="pun">;</span></li><li class="L3"><span class="pln">            </span><span class="kwd">break</span><span class="pun">;</span></li><li class="L4"><span class="pln">        </span><span class="kwd">default</span><span class="pun">:</span></li><li class="L5"><span class="pln">            printf</span><span class="pun">(</span><span class="str">"Hi. This is default"</span><span class="pun">);</span></li><li class="L6"><span class="pln">            </span><span class="kwd">break</span><span class="pun">;</span></li><li class="L7"><span class="pln">    </span><span class="pun">}</span></li><li class="L8"><span class="pln">    </span><span class="kwd">return</span><span class="pln"> </span><span class="lit">0</span><span class="pun">;</span></li><li class="L9"><span class="pun">}</span></li></ol></pre> <p></p>`,
      image: "",
      options: [
        `Hi. This is case \\( 3 \\)`,
        `Hi. This is case \\( 6 \\)`,
        `Infinite Execution`,
        `Hi. This is default`,
      ],
      answer: "C",
      solution: `<img src="/images/quiz/wqt-cprog2/5.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>What will be the value printed by the following program?</p> <pre class="prettyprint linenums lang-c_cpp prettyprinted" data-pbcklang="c_cpp" data-pbcktabsize="4" style=""><ol class="linenums"><li class="L0"><span class="kwd">int</span><span class="pln"> i </span><span class="pun">=</span><span class="pln"> </span><span class="lit">10</span><span class="pun">;</span></li><li class="L1"><span class="pln">i </span><span class="pun">=</span><span class="pln"> </span><span class="pun">!</span><span class="pln">i </span><span class="pun">&gt;</span><span class="pln"> </span><span class="lit">14</span><span class="pun">;</span></li><li class="L2"><span class="pln">printf</span><span class="pun">(</span><span class="str">"%d"</span><span class="pun">,</span><span class="pln"> i</span><span class="pun">);</span></li></ol></pre> <p></p>`,
      image: "",
      options: [
        `\\( 10 \\)`,
        `\\( 14 \\)`,
        `\\( 0 \\)`,
        `\\( 1 \\)`,
      ],
      answer: "C",
      solution: `<img src="/images/quiz/wqt-cprog2/6.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>What will be the output?</p> <pre class="prettyprint linenums lang-c_cpp prettyprinted" data-pbcklang="c_cpp" data-pbcktabsize="4" style=""><ol class="linenums"><li class="L0"><span class="kwd">int</span><span class="pln"> a </span><span class="pun">=</span><span class="pln"> </span><span class="lit">4</span><span class="pun">,</span><span class="pln"> b </span><span class="pun">=</span><span class="lit">15</span><span class="pun">,</span><span class="pln"> c </span><span class="pun">=</span><span class="lit">29</span><span class="pun">;</span></li><li class="L1"><span class="kwd">if</span><span class="pun">(</span><span class="pln">c</span><span class="pun">&gt;</span><span class="pln">b</span><span class="pun">&gt;</span><span class="pln">a</span><span class="pun">)</span></li><li class="L2"><span class="pln">    printf</span><span class="pun">(</span><span class="str">"TRUE"</span><span class="pun">);</span></li><li class="L3"><span class="kwd">else</span></li><li class="L4"><span class="pln">    printf</span><span class="pun">(</span><span class="str">"FALSE"</span><span class="pun">);</span></li></ol></pre> <p></p>`,
      image: "",
      options: [
        `\\( \\text{TRUE} \\)`,
        `\\( \\text{FALSE} \\)`,
        `Syntax Error`,
        `Compilation Error`,
      ],
      answer: "B",
      solution: `<img src="/images/quiz/wqt-cprog2/7.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p><br>If \\( x, y, z, \\) and \\( w \\) are declared as integer variables, which of the following expressions are \\( \\text{NOT} \\) valid in \\( C \\)? </p> <p></p>`,
      image: "",
      options: [
        `\\( x + 5 = y + z \\)`,
        `\\( x = y = z + w \\)`,
        `\\( x = ( z - y ) == w \\)`,
        `\\( w = x != y\\; \\&amp;\\&amp;\\; z \\)`,
      ],
      answer: "A",
      solution: `<img src="/images/quiz/wqt-cprog2/8.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>What will be the output of the following C program?.<br>Here \\( ?: \\) is a ternary operator which is right to left-associative. </p> <pre class="prettyprint linenums lang-c_cpp prettyprinted" data-pbcklang="c_cpp" data-pbcktabsize="4" style=""><ol class="linenums"><li class="L0"><span class="com">#include</span><span class="pln"> </span><span class="str">&lt;stdio.h&gt;</span></li><li class="L1"><span class="kwd">int</span><span class="pln"> main</span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span></li><li class="L2"><span class="pln">    </span><span class="kwd">int</span><span class="pln"> i </span><span class="pun">=</span><span class="lit">2</span><span class="pun">,</span><span class="pln"> j </span><span class="pun">=</span><span class="lit">1</span><span class="pun">;</span></li><li class="L3"><span class="pln">    </span><span class="kwd">if</span><span class="pln"> </span><span class="pun">(--</span><span class="pln">j </span><span class="pun">?</span><span class="pln"> </span><span class="pun">++</span><span class="pln">j</span><span class="pun">?</span><span class="pln"> i </span><span class="pun">:</span><span class="pln"> i</span><span class="pun">++</span><span class="pln"> </span><span class="pun">:</span><span class="pln"> i</span><span class="pun">--)</span></li><li class="L4"><span class="pln">    printf</span><span class="pun">(</span><span class="str">"%d%d\n"</span><span class="pun">,</span><span class="pln"> i</span><span class="pun">,</span><span class="pln"> j</span><span class="pun">);</span></li><li class="L5"><span class="pun">}</span></li></ol></pre> <p></p>`,
      image: "",
      options: [
        `\\( 1\\; 0 \\)`,
        `\\( 2\\; 1 \\)`,
        `\\( 1\\; 1 \\)`,
        `\\( 2\\; 0 \\)`,
      ],
      answer: "A",
      solution: `<img src="/images/quiz/wqt-cprog2/9.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>What is the value printed by the following program?</p> <pre class="prettyprint linenums lang-c_cpp prettyprinted" data-pbcklang="c_cpp" data-pbcktabsize="4" style=""><ol class="linenums"><li class="L0"><span class="kwd">int</span><span class="pln"> main</span><span class="pun">()</span></li><li class="L1"><span class="pun">{</span></li><li class="L2"><span class="pln">    </span><span class="kwd">int</span><span class="pln"> a </span><span class="pun">=</span><span class="pln"> </span><span class="lit">0</span><span class="pun">,</span><span class="pln"> b </span><span class="pun">=</span><span class="pln"> </span><span class="lit">1</span><span class="pun">,</span><span class="pln"> c </span><span class="pun">=</span><span class="pln"> </span><span class="lit">0</span><span class="pun">,</span><span class="pln"> d </span><span class="pun">=-</span><span class="lit">1</span><span class="pun">;</span></li><li class="L3"><span class="pln">    d </span><span class="pun">=</span><span class="pln"> </span><span class="pun">(++</span><span class="pln">a</span><span class="pun">)</span><span class="pln"> </span><span class="pun">&amp;&amp;</span><span class="pln"> </span><span class="pun">(--</span><span class="pln">b</span><span class="pun">)</span><span class="pln"> </span><span class="pun">&amp;&amp;</span><span class="pln"> </span><span class="pun">(++</span><span class="pln">c</span><span class="pun">)</span><span class="pln"> </span><span class="pun">||(--</span><span class="pln">a</span><span class="pun">);</span></li><li class="L4"><span class="pln">    printf</span><span class="pun">(</span><span class="str">"%d"</span><span class="pun">,</span><span class="pln"> d</span><span class="pun">);</span></li><li class="L5"><span class="pun">}</span></li></ol></pre> <p></p>`,
      image: "",
      options: [
        `\\( 0 \\)`,
        `\\( 1 \\)`,
        `\\( -1 \\)`,
        `\\( 2 \\)`,
      ],
      answer: "A",
      solution: `<img src="/images/quiz/wqt-cprog2/10.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>The statement</p> <pre class="prettyprint linenums lang-c_cpp prettyprinted" data-pbcklang="c_cpp" data-pbcktabsize="4" style=""><ol class="linenums"><li class="L0"><span class="kwd">while</span><span class="pln"> </span><span class="pun">(</span><span class="pln"> </span><span class="pun">--</span><span class="pln">counter </span><span class="pun">&gt;=</span><span class="pln"> </span><span class="lit">1</span><span class="pln"> </span><span class="pun">)</span></li><li class="L1"><span class="pln">counter </span><span class="pun">%</span><span class="pln"> </span><span class="lit">2</span><span class="pln"> </span><span class="pun">?</span><span class="pln"> printf</span><span class="pun">(</span><span class="str">"A"</span><span class="pun">)</span><span class="pln"> </span><span class="pun">:</span><span class="pln"> printf</span><span class="pun">(</span><span class="str">"B"</span><span class="pun">);</span></li></ol></pre> <p>can \\( \\text{NOT} \\) be rewritten as </p> <p>&nbsp;</p> <p></p>`,
      image: "",
      options: [
        `&nbsp; <pre class="prettyprint linenums lang-c_cpp prettyprinted" data-pbcklang="c_cpp" data-pbcktabsize="4" style=""><ol class="linenums"><li class="L0"><span class="kwd">while</span><span class="pln"> </span><span class="pun">(</span><span class="pln"> </span><span class="pun">--</span><span class="pln">counter </span><span class="pun">&gt;=</span><span class="pln"> </span><span class="lit">1</span><span class="pln"> </span><span class="pun">)</span></li><li class="L1"><span class="pln"> </span><span class="kwd">if</span><span class="pln"> </span><span class="pun">(</span><span class="pln"> counter </span><span class="pun">%</span><span class="pln"> </span><span class="lit">2</span><span class="pln"> </span><span class="pun">)</span></li><li class="L2"><span class="pln"> printf</span><span class="pun">(</span><span class="str">"A"</span><span class="pun">);</span></li><li class="L3"><span class="pln"> </span><span class="kwd">else</span></li><li class="L4"><span class="pln"> printf</span><span class="pun">(</span><span class="str">"B"</span><span class="pun">);</span></li></ol></pre>`,
        `&nbsp; <pre class="prettyprint linenums lang-c_cpp prettyprinted" data-pbcklang="c_cpp" data-pbcktabsize="4" style=""><ol class="linenums"><li class="L0"><span class="kwd">while</span><span class="pln"> </span><span class="pun">(</span><span class="pln"> counter </span><span class="pun">&gt;=</span><span class="pln"> </span><span class="lit">1</span><span class="pln"> </span><span class="pun">)</span></li><li class="L1"><span class="pln"> </span><span class="kwd">if</span><span class="pln"> </span><span class="pun">(</span><span class="pln">counter </span><span class="pun">%</span><span class="pln"> </span><span class="lit">2</span><span class="pun">)</span></li><li class="L2"><span class="pln"> printf</span><span class="pun">(</span><span class="str">"A"</span><span class="pun">);</span></li><li class="L3"><span class="pln"> </span><span class="kwd">else</span></li><li class="L4"><span class="pln"> printf</span><span class="pun">(</span><span class="str">"B"</span><span class="pun">);</span></li><li class="L5"><span class="pun">--</span><span class="pln">counter</span><span class="pun">;</span></li></ol></pre>`,
        `&nbsp; <pre class="prettyprint linenums lang-c_cpp prettyprinted" data-pbcklang="c_cpp" data-pbcktabsize="4" style=""><ol class="linenums"><li class="L0"><span class="kwd">while</span><span class="pln"> </span><span class="pun">(</span><span class="pln"> counter </span><span class="pun">&gt;</span><span class="pln"> </span><span class="lit">1</span><span class="pln"> </span><span class="pun">)</span></li><li class="L1"><span class="pun">{</span></li><li class="L2"><span class="pln"> </span><span class="pun">--</span><span class="pln">counter</span><span class="pun">;</span></li><li class="L3"><span class="pln"> </span><span class="kwd">if</span><span class="pln"> </span><span class="pun">(</span><span class="pln"> counter </span><span class="pun">%</span><span class="pln"> </span><span class="lit">2</span><span class="pln"> </span><span class="pun">)</span></li><li class="L4"><span class="pln"> printf</span><span class="pun">(</span><span class="str">"A"</span><span class="pun">);</span></li><li class="L5"><span class="pln"> </span><span class="kwd">else</span></li><li class="L6"><span class="pln"> printf</span><span class="pun">(</span><span class="str">"B"</span><span class="pun">);</span></li><li class="L7"><span class="pun">}</span></li></ol></pre>`,
        `&nbsp; <pre class="prettyprint linenums lang-c_cpp prettyprinted" data-pbcklang="c_cpp" data-pbcktabsize="4" style=""><ol class="linenums"><li class="L0"><span class="kwd">do</span></li><li class="L1"><span class="pun">{</span></li><li class="L2"><span class="pln"> </span><span class="pun">--</span><span class="pln">counter</span><span class="pun">;</span></li><li class="L3"><span class="pln"> printf</span><span class="pun">(</span><span class="pln"> counter </span><span class="pun">%</span><span class="pln"> </span><span class="lit">2</span><span class="pln"> </span><span class="pun">?</span><span class="pln"> </span><span class="str">"A"</span><span class="pln"> </span><span class="pun">:</span><span class="pln"> </span><span class="str">"B"</span><span class="pln"> </span><span class="pun">);</span></li><li class="L4"><span class="pun">}</span><span class="pln"> </span><span class="kwd">while</span><span class="pln"> </span><span class="pun">(</span><span class="pln"> counter </span><span class="pun">&gt;=</span><span class="pln"> </span><span class="lit">2</span><span class="pln"> </span><span class="pun">);</span></li></ol></pre>`,
      ],
      answer: ["B", "D"],
      solution: `<img src="/images/quiz/wqt-cprog2/11.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>Professor Greg wants to give assignments to his students to write a \\( C \\) program for the \\( \\text{XOR5} \\) function. \\( \\text{XOR5} \\) is a function that returns true if and only if \\( \\text{EXACTLY} \\) one of the integers \\( A \\) and \\( B \\) is \\( 5 \\).<br>Using which of the following condition(s), \\( \\text{XOR5} \\) can be implemented? </p> <p></p>`,
      image: "",
      options: [
        `\\( (A==5) != (B==5) \\)`,
        `\\( !(A==5) != ! (B==5) \\)`,
        `\\( (A==5) ? ! (B==5) : (B==5) \\)`,
        `\\( ((A==5) || (B==5) )\\; \\&amp;\\&amp;\\; !((A==5)\\; \\&amp;\\&amp;\\; (B==5) ) \\)`,
      ],
      answer: ["A", "B", "C", "D"],
      solution: `<img src="/images/quiz/wqt-cprog2/12.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>Let the variables \\( x,y, \\) and \\( z \\), be of type int and assigned some values. The variable \\( b1 \\) is initialized as follows: </p> <pre class="prettyprint linenums lang-c_cpp prettyprinted" data-pbcklang="c_cpp" data-pbcktabsize="4" style=""><ol class="linenums"><li class="L0"><span class="kwd">int</span><span class="pln"> b1 </span><span class="pun">=</span><span class="pln"> </span><span class="pun">(</span><span class="pln">x </span><span class="pun">&gt;</span><span class="pln"> z</span><span class="pun">)</span><span class="pln"> </span><span class="pun">&amp;&amp;</span><span class="pln"> </span><span class="pun">(</span><span class="pln">y </span><span class="pun">&gt;=</span><span class="pln"> z</span><span class="pun">);</span></li></ol></pre> <p>Variables b2, b3, b4, and b5 are initialized below.</p> <pre class="prettyprint linenums lang-c_cpp prettyprinted" data-pbcklang="c_cpp" data-pbcktabsize="4" style=""><ol class="linenums"><li class="L0"><span class="kwd">int</span><span class="pln"> b2 </span><span class="pun">=</span><span class="pln"> </span><span class="pun">(</span><span class="pln">x </span><span class="pun">&lt;=</span><span class="pln"> z</span><span class="pun">)</span><span class="pln"> </span><span class="pun">||</span><span class="pln"> </span><span class="pun">(</span><span class="pln">y </span><span class="pun">&lt;</span><span class="pln"> z</span><span class="pun">)</span><span class="pln"> </span></li><li class="L1"><span class="kwd">int</span><span class="pln"> b3 </span><span class="pun">=</span><span class="pln"> </span><span class="pun">!((</span><span class="pln">x </span><span class="pun">&lt;</span><span class="pln"> z</span><span class="pun">)</span><span class="pln"> </span><span class="pun">||</span><span class="pln"> </span><span class="pun">(</span><span class="pln">y </span><span class="pun">&lt;=</span><span class="pln"> z</span><span class="pun">))</span><span class="pln"> </span></li><li class="L2"><span class="kwd">int</span><span class="pln"> b4 </span><span class="pun">=</span><span class="pln"> </span><span class="pun">!((</span><span class="pln">x </span><span class="pun">&lt;</span><span class="pln"> z</span><span class="pun">)</span><span class="pln"> </span><span class="pun">&amp;&amp;</span><span class="pln"> </span><span class="pun">(</span><span class="pln">y </span><span class="pun">&gt;=</span><span class="pln"> z</span><span class="pun">))</span><span class="pln"> </span></li><li class="L3"><span class="kwd">int</span><span class="pln"> b5 </span><span class="pun">=</span><span class="pln"> </span><span class="pun">((</span><span class="pln">x </span><span class="pun">&gt;</span><span class="pln"> z</span><span class="pun">)</span><span class="pln"> </span><span class="pun">&amp;&amp;</span><span class="pln"> </span><span class="pun">(</span><span class="pln">y </span><span class="pun">&gt;</span><span class="pln"> z</span><span class="pun">))</span><span class="pln"> </span><span class="pun">||</span><span class="pln"> </span><span class="pun">((</span><span class="pln">x </span><span class="pun">&gt;</span><span class="pln"> z</span><span class="pun">)</span><span class="pln"> </span><span class="pun">&amp;&amp;</span><span class="pln"> </span><span class="pun">(</span><span class="pln">y </span><span class="pun">==</span><span class="pln"> z</span><span class="pun">))</span></li><li class="L4"><span class="pln">&nbsp;</span></li></ol></pre> <p>Variables \\( b2, b3, b4 \\), and \\( b5 \\) ALWAYS, SOMETIMES, or NEVER takes the same value as \\( b1 \\).<br>Which of the variable(s) SOMETIMES takes the same value as \\( b1 \\)? </p> <p></p>`,
      image: "",
      options: [
        `\\( b2 \\)`,
        `\\( b3 \\)`,
        `\\( b4 \\)`,
        `\\( b5 \\)`,
      ],
      answer: ["B", "C"],
      solution: `<img src="/images/quiz/wqt-cprog2/13.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>Consider the following two . \\( c \\) files which both include the same \\( .h \\) file: </p> <p><img alt="" src="/images/quiz/wqt-cprog2/q14_img2.png" style="max-width: 75%;"></p> <p><br>When compiled, linked, and executed, the following output results:<br> \\( x = 1 \\; y = 2\\; z = 3\\; w = 4\\; v = 5 \\) <br>Assuming that this program compiled and linked successfully, and based on the output shown above, add static and/or extern modifiers to the blank lines \\( (1) \\) through \\( (10) \\).<br><br>Leave them blank if neither modifier would be appropriate.<br><br>For example, if we say line \\( (2) \\) is static then we consider line \\( (2) \\) as \\( \\text{“static int x”} \\). Or if we say line \\( (9) \\) is empty then we treat line \\( 9 \\) as \\( \\text{“int w = 4”} \\). </p> <p></p>`,
      image: "",
      options: [
        `<br>Line \\( (1) \\) – empty<br>Line \\( (2) \\) - static<br>Line \\( (3) \\) - empty<br>Line \\( (4) \\) - extern<br>Line \\( (5) \\) – empty<br>Line \\( (6) \\) - empty<br>Line \\( (7) \\) - empty<br>Line \\( (8) \\) - static<br>Line \\( (9) \\) - empty<br>Line \\( (10) \\) - static`,
        `<br>Line \\( (1) \\) – static<br>Line \\( (2) \\) - static<br>Line \\( (3) \\) - extern<br>Line \\( (4) \\) - empty<br>Line \\( (5) \\) – extern<br>Line \\( (6) \\) - empty<br>Line \\( (7) \\) - extern<br>Line \\( (8) \\) - static<br>Line \\( (9) \\) - empty<br>Line \\( (10) \\) - static`,
        `<br>Line \\( (1) \\) – static<br>Line \\( (2) \\) - static<br>Line \\( (3) \\) - empty<br>Line \\( (4) \\) - empty<br>Line \\( (5) \\) – empty<br>Line \\( (6) \\) - empty<br>Line \\( (7) \\) - empty<br>Line \\( (8) \\) - static<br>Line \\( (9) \\) - empty<br>Line \\( (10) \\) - static`,
        `<br>Line \\( (1) \\) – empty<br>Line \\( (2) \\) - static<br>Line \\( (3) \\) - empty<br>Line \\( (4) \\) - empty<br>Line \\( (5) \\) – extern<br>Line \\( (6) \\) - empty<br>Line \\( (7) \\) - empty<br>Line \\( (8) \\) - static<br>Line \\( (9) \\) - empty<br>Line \\( (10) \\) - static`,
      ],
      answer: ["B"],
      solution: `<img src="/images/quiz/wqt-cprog2/14.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p>Consider the following variable and function definitions:</p> <pre class="prettyprint linenums lang-c_cpp prettyprinted" data-pbcklang="c_cpp" data-pbcktabsize="4" style=""><ol class="linenums"><li class="L0"><span class="kwd">int</span><span class="pln"> g</span><span class="pun">=</span><span class="lit">10</span><span class="pun">;</span></li><li class="L1"><span class="kwd">int</span><span class="pln"> q3</span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span></li><li class="L2"><span class="pln">    </span><span class="kwd">static</span><span class="pln"> </span><span class="kwd">int</span><span class="pln"> g</span><span class="pun">=</span><span class="lit">5</span><span class="pun">;</span></li><li class="L3"><span class="pln">    </span><span class="kwd">return</span><span class="pln"> </span><span class="pun">++</span><span class="pln">g</span><span class="pun">;</span></li><li class="L4"><span class="pun">}</span></li><li class="L5"><span class="kwd">int</span><span class="pln"> q4</span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span></li><li class="L6"><span class="pln">    </span><span class="kwd">extern</span><span class="pln"> </span><span class="kwd">int</span><span class="pln"> g</span><span class="pun">;</span></li><li class="L7"><span class="pln">    </span><span class="kwd">return</span><span class="pln"> </span><span class="pun">++</span><span class="pln">g</span><span class="pun">;</span></li><li class="L8"><span class="pun">}</span></li><li class="L9"><span class="kwd">int</span><span class="pln"> q5</span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span></li><li class="L0"><span class="pln">    </span><span class="kwd">int</span><span class="pln"> g</span><span class="pun">=</span><span class="lit">1</span><span class="pun">;</span></li><li class="L1"><span class="pln">    </span><span class="kwd">return</span><span class="pln"> </span><span class="pun">++</span><span class="pln">g</span><span class="pun">;</span></li><li class="L2"><span class="pun">}</span></li></ol></pre> <p>What is the value of the expression \\( q3() + q3() + q4() + q4() + q5() + q5()? \\) </p> <p></p>`,
      image: "",
      options: [
        `\\( 32 \\)`,
        `\\( 34 \\)`,
        `\\( 38 \\)`,
        `\\( 40 \\)`,
      ],
      answer: "D",
      solution: `<img src="/images/quiz/wqt-cprog2/15.png" style="max-width: 75%;">`
    },
  ]
});
registerTest({
  series: "weekly-cs-gate-2027",
  name: "WQT - C-Programming -3|Pointers, storage classes, recursion",
  date: "Oct 01, 2026",
  questions: [
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>What will be the output of the given C code?</p> <pre class="prettyprint linenums lang-c_cpp prettyprinted" data-pbcklang="c_cpp" data-pbcktabsize="4" style=""><ol class="linenums"><li class="L0"><span class="com">#include</span><span class="str">&lt;stdio.h&gt;</span></li><li class="L1"><span class="com">#include</span><span class="str">&lt;stdlib.h&gt;</span></li><li class="L2"><span class="kwd">int</span><span class="pln"> main</span><span class="pun">(){</span></li><li class="L3"><span class="pln">    </span><span class="kwd">int</span><span class="pln"> x</span><span class="pun">,</span><span class="pln"> t</span><span class="pun">[</span><span class="lit">4</span><span class="pun">]</span><span class="pln"> </span><span class="pun">=</span><span class="pln"> </span><span class="pun">{</span><span class="lit">1</span><span class="pun">,</span><span class="lit">3</span><span class="pun">,</span><span class="lit">4</span><span class="pun">,</span><span class="lit">5</span><span class="pun">};</span></li><li class="L4"><span class="pln">    </span><span class="kwd">int</span><span class="pln"> </span><span class="pun">*</span><span class="pln">p</span><span class="pun">,</span><span class="pln"> </span><span class="pun">**</span><span class="pln">pp</span><span class="pun">;</span></li><li class="L5"><span class="pln">    p </span><span class="pun">=</span><span class="pln"> t</span><span class="pun">;</span></li><li class="L6"><span class="pln">    pp </span><span class="pun">=</span><span class="pln"> </span><span class="pun">&amp;</span><span class="pln">p</span><span class="pun">;</span></li><li class="L7"><span class="pln">    printf</span><span class="pun">(</span><span class="str">"%d "</span><span class="pun">,</span><span class="pln"> </span><span class="pun">*</span><span class="pln">p</span><span class="pun">);</span></li><li class="L8"><span class="pln">    printf</span><span class="pun">(</span><span class="str">"%d "</span><span class="pun">,</span><span class="pln"> </span><span class="pun">**</span><span class="pln">pp</span><span class="pun">+</span><span class="lit">1</span><span class="pun">);</span></li><li class="L9"><span class="pln">    printf</span><span class="pun">(</span><span class="str">"%d"</span><span class="pun">,</span><span class="pln"> </span><span class="pun">*(*</span><span class="pln">pp</span><span class="pun">+</span><span class="lit">1</span><span class="pun">));</span></li><li class="L0"><span class="pun">}</span></li></ol></pre> <p></p>`,
      image: "",
      options: [
        `\\( 1\\; 3\\; 4 \\)`,
        `\\( 1\\; 3\\; 3 \\)`,
        `\\( 1 \\;2 \\;3 \\)`,
        `\\( 1 \\;2 \\;2 \\)`,
      ],
      answer: "C",
      solution: `<img src="/images/quiz/wqt-cprog3/1.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>Which of the following is/are valid assignment(s) of the pointer for the given declaration? An assignment is valid if both pointers are of the same type (pointers are compatible) and get successfully compiled with no warning or error.</p> <pre class="prettyprint linenums lang-c_cpp prettyprinted" data-pbcklang="c_cpp" data-pbcktabsize="4" style=""><ol class="linenums"><li class="L0"><span class="kwd">int</span><span class="pln"> a</span><span class="pun">[</span><span class="lit">5</span><span class="pun">]=</span><span class="pln"> </span><span class="pun">{</span><span class="lit">1</span><span class="pun">,</span><span class="lit">2</span><span class="pun">};</span></li><li class="L1"><span class="kwd">int</span><span class="pln"> </span><span class="pun">(*</span><span class="pln">p</span><span class="pun">)[</span><span class="lit">5</span><span class="pun">];</span></li></ol></pre> <p></p>`,
      image: "",
      options: [
        `<pre class="prettyprint linenums lang-c_cpp prettyprinted" data-pbcklang="c_cpp" data-pbcktabsize="4" style=""><ol class="linenums"><li class="L0"><span class="pln"> p </span><span class="pun">=</span><span class="pln"> a</span><span class="pun">;</span></li></ol></pre>`,
        `<pre class="prettyprint linenums lang-c_cpp prettyprinted" data-pbcklang="c_cpp" data-pbcktabsize="4" style=""><ol class="linenums"><li class="L0"><span class="pln"> p </span><span class="pun">=</span><span class="pln"> </span><span class="pun">&amp;</span><span class="pln">a</span><span class="pun">;</span></li></ol></pre>`,
        `<pre class="prettyprint linenums lang-c_cpp prettyprinted" data-pbcklang="c_cpp" data-pbcktabsize="4" style=""><ol class="linenums"><li class="L0"><span class="pln"> p </span><span class="pun">=</span><span class="pln"> </span><span class="pun">*</span><span class="pln">a</span><span class="pun">;</span></li></ol></pre>`,
        `<pre class="prettyprint linenums lang-c_cpp prettyprinted" data-pbcklang="c_cpp" data-pbcktabsize="4" style=""><ol class="linenums"><li class="L0"><span class="pln"> p </span><span class="pun">=</span><span class="pln"> </span><span class="pun">**</span><span class="pln">a</span><span class="pun">;</span></li></ol></pre>`,
      ],
      answer: ["B"],
      solution: `<img src="/images/quiz/wqt-cprog3/2.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>Consider the following declaration of pointer variable  \\( p. \\) </p> <pre class="prettyprint linenums lang-c_cpp prettyprinted" data-pbcklang="c_cpp" data-pbcktabsize="4" style=""><ol class="linenums"><li class="L0"><span class="kwd">int</span><span class="pln"> </span><span class="pun">(*</span><span class="pln">p</span><span class="pun">)[</span><span class="lit">5</span><span class="pun">];</span></li></ol></pre> <p>If the initial value of  \\( p \\) is  \\( 1000, \\) then what will be the value of  \\( p+1? \\) </p> <p>It is given that the system has  \\( 8 \\) bytes of address size and  \\( 4 \\) bytes of integer size. </p> <p></p>`,
      image: "",
      options: [
        `\\( 1001 \\)`,
        `\\( 1004 \\)`,
        `\\( 1020 \\)`,
        `\\( 1008 \\)`,
      ],
      answer: "C",
      solution: `<img src="/images/quiz/wqt-cprog3/3.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>Which of the following is NOT&nbsp;a valid C program? A valid program is a program having no compile-time errors.</p> <pre class="prettyprint linenums lang-c_cpp prettyprinted" data-pbcklang="c_cpp" data-pbcktabsize="4" style=""><ol class="linenums"><li class="L0"><span class="typ">Program</span><span class="pln"> </span><span class="lit">1</span></li><li class="L1"><span class="kwd">auto</span><span class="pln"> </span><span class="kwd">int</span><span class="pln"> a</span><span class="pun">;</span><span class="pln"> </span></li><li class="L2"><span class="pln">main </span><span class="pun">()</span></li><li class="L3"><span class="pun">{</span></li><li class="L4"><span class="pln">  </span><span class="kwd">auto</span><span class="pln"> </span><span class="kwd">int</span><span class="pln"> b</span><span class="pun">;</span><span class="pln"> </span></li><li class="L5"><span class="pln">  </span><span class="kwd">for</span><span class="pln"> </span><span class="pun">(</span><span class="pln">b </span><span class="pun">=</span><span class="pln"> </span><span class="lit">0</span><span class="pun">;</span><span class="pln"> b </span><span class="pun">&lt;</span><span class="pln"> </span><span class="lit">10</span><span class="pun">;</span><span class="pln"> b</span><span class="pun">++)</span></li><li class="L6"><span class="pln">  </span><span class="pun">{</span></li><li class="L7"><span class="pln">    </span><span class="kwd">auto</span><span class="pln"> </span><span class="kwd">int</span><span class="pln"> a </span><span class="pun">=</span><span class="pln"> b</span><span class="pun">;</span><span class="pln"> </span></li><li class="L8"><span class="pln">  </span><span class="pun">}</span></li><li class="L9"><span class="pun">}</span></li></ol></pre> <pre class="prettyprint linenums lang-c_cpp prettyprinted" data-pbcklang="c_cpp" data-pbcktabsize="4" style=""><ol class="linenums"><li class="L0"><span class="typ">Program</span><span class="pln"> </span><span class="lit">2</span></li><li class="L1"><span class="kwd">static</span><span class="pln"> </span><span class="kwd">int</span><span class="pln"> a</span><span class="pun">;</span><span class="pln"> </span></li><li class="L2"><span class="pln">main </span><span class="pun">()</span></li><li class="L3"><span class="pun">{</span></li><li class="L4"><span class="pln">  </span><span class="kwd">static</span><span class="pln"> </span><span class="kwd">int</span><span class="pln"> b</span><span class="pun">;</span><span class="pln"> </span></li><li class="L5"><span class="pln">  </span><span class="kwd">for</span><span class="pln"> </span><span class="pun">(</span><span class="pln">b </span><span class="pun">=</span><span class="pln"> </span><span class="lit">0</span><span class="pun">;</span><span class="pln"> b </span><span class="pun">&lt;</span><span class="pln"> </span><span class="lit">10</span><span class="pun">;</span><span class="pln"> b</span><span class="pun">++)</span></li><li class="L6"><span class="pln">  </span><span class="pun">{</span></li><li class="L7"><span class="pln">    </span><span class="kwd">static</span><span class="pln"> </span><span class="kwd">int</span><span class="pln"> a </span><span class="pun">=</span><span class="pln"> </span><span class="lit">1</span><span class="pun">;</span><span class="pln"> </span></li><li class="L8"><span class="pln">  </span><span class="pun">}</span></li><li class="L9"><span class="pun">}</span></li></ol></pre> <pre class="prettyprint linenums lang-c_cpp prettyprinted" data-pbcklang="c_cpp" data-pbcktabsize="4" style=""><ol class="linenums"><li class="L0"><span class="typ">Program</span><span class="pln"> </span><span class="lit">3</span></li><li class="L1"><span class="kwd">int</span><span class="pln"> a</span><span class="pun">;</span><span class="pln"> </span></li><li class="L2"><span class="pln">main </span><span class="pun">()</span></li><li class="L3"><span class="pun">{</span></li><li class="L4"><span class="pln">  </span><span class="kwd">static</span><span class="pln"> </span><span class="kwd">int</span><span class="pln"> b</span><span class="pun">;</span><span class="pln"> </span></li><li class="L5"><span class="pln">  </span><span class="kwd">for</span><span class="pln"> </span><span class="pun">(</span><span class="pln">b </span><span class="pun">=</span><span class="pln"> </span><span class="lit">0</span><span class="pun">;</span><span class="pln"> b </span><span class="pun">&lt;</span><span class="pln"> </span><span class="lit">10</span><span class="pun">;</span><span class="pln"> b</span><span class="pun">++)</span></li><li class="L6"><span class="pln">  </span><span class="pun">{</span></li><li class="L7"><span class="pln">    </span><span class="kwd">static</span><span class="pln"> </span><span class="kwd">int</span><span class="pln"> a </span><span class="pun">=</span><span class="pln"> </span><span class="lit">1</span><span class="pun">;</span><span class="pln"> </span></li><li class="L8"><span class="pln">  </span><span class="pun">}</span></li><li class="L9"><span class="pun">}</span></li></ol></pre> <pre class="prettyprint linenums lang-c_cpp prettyprinted" data-pbcklang="c_cpp" data-pbcktabsize="4" style=""><ol class="linenums"><li class="L0"><span class="typ">Program</span><span class="pln"> </span><span class="lit">4</span></li><li class="L1"><span class="kwd">extern</span><span class="pln"> </span><span class="kwd">int</span><span class="pln"> a</span><span class="pun">;</span><span class="pln"> </span></li><li class="L2"><span class="pln">main </span><span class="pun">()</span></li><li class="L3"><span class="pun">{</span></li><li class="L4"><span class="pln">  </span><span class="kwd">static</span><span class="pln"> </span><span class="kwd">int</span><span class="pln"> b</span><span class="pun">;</span><span class="pln"> </span></li><li class="L5"><span class="pln">  </span><span class="kwd">for</span><span class="pln"> </span><span class="pun">(</span><span class="pln">b </span><span class="pun">=</span><span class="pln"> </span><span class="lit">0</span><span class="pun">;</span><span class="pln"> b </span><span class="pun">&lt;</span><span class="pln"> </span><span class="lit">10</span><span class="pun">;</span><span class="pln"> b</span><span class="pun">++)</span></li><li class="L6"><span class="pln">  </span><span class="pun">{</span></li><li class="L7"><span class="pln">    </span><span class="kwd">static</span><span class="pln"> </span><span class="kwd">int</span><span class="pln"> a </span><span class="pun">=</span><span class="pln"> </span><span class="lit">1</span><span class="pun">;</span><span class="pln"> </span></li><li class="L8"><span class="pln">  </span><span class="pun">}</span></li><li class="L9"><span class="pun">}</span></li></ol></pre> <p></p>`,
      image: "",
      options: [
        `Program  \\( 1 \\)`,
        `Program  \\( 2 \\)`,
        `Program  \\( 3 \\)`,
        `Program  \\( 4 \\)`,
      ],
      answer: "A",
      solution: `<img src="/images/quiz/wqt-cprog3/4.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>Which of the following is/are TRUE about storage classes in C programming</p> <p></p>`,
      image: "",
      options: [
        `static local variables are NOT available to the linker.`,
        `static global variables are available to the linker.`,
        `extern local variables are available to the linker.`,
        `extern global variables are NOT available to the linker.`,
      ],
      answer: ["A", "C"],
      solution: `<img src="/images/quiz/wqt-cprog3/5.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>The default storage class for functions in C language is –</p> <p></p>`,
      image: "",
      options: [
        `Static`,
        `Auto`,
        `Extern`,
        `None of these`,
      ],
      answer: "C",
      solution: `<img src="/images/quiz/wqt-cprog3/6.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>The default storage class for global variables in the C language is –</p> <p></p>`,
      image: "",
      options: [
        `Static`,
        `Auto`,
        `Extern`,
        `None of these`,
      ],
      answer: "D",
      solution: `<img src="/images/quiz/wqt-cprog3/7.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>Consider the following declaration of struct.</p> <pre class="prettyprint linenums lang-c_cpp prettyprinted" data-pbcklang="c_cpp" data-pbcktabsize="4" style=""><ol class="linenums"><li class="L0"><span class="kwd">struct</span><span class="pln"> myst</span><span class="pun">{</span></li><li class="L1"><span class="pln">    </span><span class="kwd">char</span><span class="pln"> a</span><span class="pun">[</span><span class="lit">20</span><span class="pun">];</span></li><li class="L2"><span class="pln">    </span><span class="kwd">char</span><span class="pln"> </span><span class="pun">*</span><span class="pln">b</span><span class="pun">;</span></li><li class="L3"><span class="pln">    </span><span class="kwd">struct</span><span class="pln"> myst </span><span class="pun">*</span><span class="pln">p</span><span class="pun">;</span></li><li class="L4"><span class="pun">}</span><span class="pln">x</span><span class="pun">[</span><span class="lit">2</span><span class="pun">]</span><span class="pln"> </span><span class="pun">=</span><span class="pln"> </span><span class="pun">{</span><span class="str">"GATE"</span><span class="pun">,</span><span class="pln"> </span><span class="str">"Overflow"</span><span class="pun">,</span><span class="pln"> x</span><span class="pun">+</span><span class="lit">1</span><span class="pun">,</span><span class="pln"> </span><span class="str">"GO"</span><span class="pun">,</span><span class="pln"> </span><span class="str">"Classes"</span><span class="pun">,</span><span class="pln"> x</span><span class="pun">},</span><span class="pln"> </span><span class="pun">*</span><span class="pln">p </span><span class="pun">=</span><span class="pln"> x</span><span class="pun">;</span></li></ol></pre> <p>What will be the output of the following print statement?</p> <pre class="prettyprint linenums lang-c_cpp prettyprinted" data-pbcklang="c_cpp" data-pbcktabsize="4" style=""><ol class="linenums"><li class="L0"><span class="pln">printf</span><span class="pun">(</span><span class="str">"%s"</span><span class="pun">,</span><span class="pln"> p</span><span class="pun">++-&gt;</span><span class="pln">p</span><span class="pun">-&gt;</span><span class="pln">b</span><span class="pun">++);</span></li></ol></pre> <p></p>`,
      image: "",
      options: [
        `Overflow`,
        `Classes`,
        `verflow`,
        `lasses`,
      ],
      answer: "B",
      solution: `<img src="/images/quiz/wqt-cprog3/8.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>Which of the following function declaration can be passed to the following array?</p> <pre class="prettyprint linenums lang-c_cpp prettyprinted" data-pbcklang="c_cpp" data-pbcktabsize="4" style=""><ol class="linenums"><li class="L0"><span class="kwd">char</span><span class="pln"> myArray</span><span class="pun">[</span><span class="lit">3</span><span class="pun">][</span><span class="lit">4</span><span class="pun">];</span></li></ol></pre> <p></p>`,
      image: "",
      options: [
        `<pre class="prettyprint linenums lang-c_cpp prettyprinted" data-pbcklang="c_cpp" data-pbcktabsize="4" style=""><ol class="linenums"><li class="L0"><span class="kwd">void</span><span class="pln"> fun</span><span class="pun">(</span><span class="kwd">char</span><span class="pln"> a</span><span class="pun">[][],</span><span class="pln"> </span><span class="kwd">int</span><span class="pln"> size</span><span class="pun">);</span></li></ol></pre>`,
        `<pre class="prettyprint linenums lang-c_cpp prettyprinted" data-pbcklang="c_cpp" data-pbcktabsize="4" style=""><ol class="linenums"><li class="L0"><span class="kwd">void</span><span class="pln"> fun</span><span class="pun">(</span><span class="kwd">char</span><span class="pln"> a</span><span class="pun">[][</span><span class="lit">4</span><span class="pun">],</span><span class="pln"> </span><span class="kwd">int</span><span class="pln"> size</span><span class="pun">);</span></li></ol></pre>`,
        `<pre class="prettyprint linenums lang-c_cpp prettyprinted" data-pbcklang="c_cpp" data-pbcktabsize="4" style=""><ol class="linenums"><li class="L0"><span class="kwd">void</span><span class="pln"> fun</span><span class="pun">(</span><span class="kwd">char</span><span class="pln"> </span><span class="pun">[</span><span class="lit">3</span><span class="pun">][],</span><span class="pln"> </span><span class="kwd">int</span><span class="pln"> size</span><span class="pun">);</span></li></ol></pre>`,
        `<pre class="prettyprint linenums lang-c_cpp prettyprinted" data-pbcklang="c_cpp" data-pbcktabsize="4" style=""><ol class="linenums"><li class="L0"><span class="kwd">void</span><span class="pln"> fun</span><span class="pun">(</span><span class="kwd">char</span><span class="pln"> </span><span class="pun">[][]</span><span class="pln">a</span><span class="pun">,</span><span class="pln"> </span><span class="kwd">int</span><span class="pln"> size</span><span class="pun">);</span></li></ol></pre>`,
      ],
      answer: "B",
      solution: `<img src="/images/quiz/wqt-cprog3/9.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0,
      type: "NAT",
      text: `<p></p> <div style="font-family:'Segoe UI', sans-serif; line-height:1.8; font-size:17px; color:#222;"> <pre class="prettyprint linenums lang-c_cpp prettyprinted" data-pbcklang="c_cpp" data-pbcktabsize="4" style=""><ol class="linenums"><li class="L0"><span class="kwd">char</span><span class="pln"> </span><span class="pun">*</span><span class="pln">strcollection</span><span class="pun">[</span><span class="lit">3</span><span class="pun">]</span><span class="pln"> </span><span class="pun">=</span><span class="pln"> </span><span class="pun">{</span><span class="str">"GOClasses"</span><span class="pun">,</span><span class="pln"> </span><span class="str">"GATEOverflow"</span><span class="pun">,</span><span class="pln"> </span><span class="str">"IISc"</span><span class="pun">};</span></li></ol></pre> <p>For the above declaration, consider the base addresses of <code style="background:#f1f1f1; padding:2px 6px; border-radius:4px; font-size:17.5px;">strcollection</code>, <code style="background:#f1f1f1; padding:2px 6px; border-radius:4px; font-size:17.5px;">"GOClasses"</code>, <code style="background:#f1f1f1; padding:2px 6px; border-radius:4px; font-size:17.5px;">"GATEOverflow"</code> and <code style="background:#f1f1f1; padding:2px 6px; border-radius:4px; font-size:17.5px;">"IISc"</code> to be <b>1000</b>, <b>2000</b>, <b>3000</b> and <b>4000</b> respectively. </p> <p>What will be the output of the below line?</p> <pre class="prettyprint linenums lang-c_cpp prettyprinted" data-pbcklang="c_cpp" data-pbcktabsize="4" style=""><ol class="linenums"><li class="L0"><span class="pln">printf</span><span class="pun">(</span><span class="str">"%p"</span><span class="pun">,</span><span class="pln"> strcollection </span><span class="pun">+</span><span class="pln"> </span><span class="lit">1</span><span class="pun">);</span></li></ol></pre> <p>Assume character is of one byte, integer is of two bytes, and address is of four bytes.</p> </div> <p></p>`,
      image: "",
      options: [],
      answer: "1004",
      solution: `<img src="/images/quiz/wqt-cprog3/10.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <pre class="prettyprint linenums lang-c_cpp prettyprinted" data-pbcklang="c_cpp" data-pbcktabsize="4" style=""><ol class="linenums"><li class="L0"><span class="kwd">char</span><span class="pln"> my_text</span><span class="pun">[]=</span><span class="pln"> </span><span class="str">"2023 GATE"</span><span class="pun">;</span></li><li class="L1"><span class="kwd">void</span><span class="pln"> fun</span><span class="pun">(</span><span class="kwd">int</span><span class="pln"> position</span><span class="pun">)</span></li><li class="L2"><span class="pun">{</span></li><li class="L3"><span class="pln">    </span><span class="kwd">if</span><span class="pln"> </span><span class="pun">(</span><span class="pln">my_text</span><span class="pun">[</span><span class="pln">position</span><span class="pun">]</span><span class="pln"> </span><span class="pun">!=</span><span class="str">' '</span><span class="pun">)</span></li><li class="L4"><span class="pln">    </span><span class="pun">{</span></li><li class="L5"><span class="pln">        fun</span><span class="pun">(</span><span class="pln">position</span><span class="pun">+</span><span class="lit">1</span><span class="pun">);</span></li><li class="L6"><span class="pln">        printf</span><span class="pun">(</span><span class="str">"%c"</span><span class="pun">,</span><span class="pln"> my_text</span><span class="pun">[</span><span class="pln">position</span><span class="pun">]);</span></li><li class="L7"><span class="pln">    </span><span class="pun">}</span></li><li class="L8"><span class="pun">}</span></li><li class="L9"><span class="kwd">int</span><span class="pln"> main</span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span></li><li class="L0"><span class="pln">    fun</span><span class="pun">(</span><span class="lit">0</span><span class="pun">);</span></li><li class="L1"><span class="pun">}</span></li></ol></pre> <p>What will be the output of a given program ?</p> <p></p>`,
      image: "",
      options: [
        `\\( 2023 \\)`,
        `\\( 3202 \\)`,
        `\\( \\text{ETAG} 3202 \\)`,
        `\\( \\text{ETAG} \\)`,
      ],
      answer: "B",
      solution: `<img src="/images/quiz/wqt-cprog3/11.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <pre class="prettyprint linenums lang-c_cpp prettyprinted" data-pbcklang="c_cpp" data-pbcktabsize="4" style=""><ol class="linenums"><li class="L0"><span class="pln">main</span><span class="pun">()</span></li><li class="L1"><span class="pun">{</span></li><li class="L2"><span class="pln">    </span><span class="kwd">char</span><span class="pln"> s</span><span class="pun">[]=</span><span class="pln"> </span><span class="str">"jjtd\0abc"</span><span class="pun">,</span><span class="pln"> </span><span class="pun">*</span><span class="pln">p</span><span class="pun">;</span></li><li class="L3"><span class="pln">&nbsp;</span></li><li class="L4"><span class="pln">    </span><span class="kwd">for</span><span class="pln"> </span><span class="pun">(</span><span class="pln">p </span><span class="pun">=</span><span class="pln"> s</span><span class="pun">;</span><span class="pln"> </span><span class="pun">*</span><span class="pln">p</span><span class="pun">;</span><span class="pln"> p</span><span class="pun">++)</span><span class="pln"> </span></li><li class="L5"><span class="pln">    </span><span class="pun">{</span></li><li class="L6"><span class="pln">      </span><span class="pun">--(*</span><span class="pln">p</span><span class="pun">);</span></li><li class="L7"><span class="pln">    </span><span class="pun">}</span></li><li class="L8"><span class="pln">&nbsp;</span></li><li class="L9"><span class="pln">    printf</span><span class="pun">(</span><span class="str">"%s"</span><span class="pun">,</span><span class="pln"> s</span><span class="pun">);</span></li><li class="L0"><span class="pun">}</span></li></ol></pre> <p>What will be the output of a given program?</p> <p></p>`,
      image: "",
      options: [
        `iitb abc`,
        `iisc abc`,
        `iisc`,
        `iitb`,
      ],
      answer: "C",
      solution: `<img src="/images/quiz/wqt-cprog3/12.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>Which of the following(s) are true for following function</p> <pre class="prettyprint linenums lang-c_cpp prettyprinted" data-pbcklang="c_cpp" data-pbcktabsize="4" style=""><ol class="linenums"><li class="L0"><span class="kwd">int</span><span class="pln"> mystery</span><span class="pun">(</span><span class="kwd">int</span><span class="pln"> a</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span></li><li class="L1"><span class="kwd">if</span><span class="pun">(</span><span class="pln">a </span><span class="pun">==</span><span class="pln"> </span><span class="lit">256</span><span class="pun">)</span><span class="pln"> </span><span class="kwd">return</span><span class="pln"> </span><span class="lit">3</span><span class="pun">;</span></li><li class="L2"><span class="pln">    </span><span class="kwd">return</span><span class="pln"> </span><span class="lit">1</span><span class="pln"> </span><span class="pun">+</span><span class="pln"> </span><span class="lit">2</span><span class="pln"> </span><span class="pun">*</span><span class="pln"> mystery</span><span class="pun">(</span><span class="pln">a</span><span class="pun">*</span><span class="lit">4</span><span class="pun">);</span><span class="pln"> </span><span class="com">//line 3</span></li><li class="L3"><span class="pun">}</span></li></ol></pre> <p></p>`,
      image: "",
      options: [
        `\\( \\text{mystery(255)} \\) is an example of infinite recursion`,
        `if we replace line  \\( 3 \\)&nbsp;by following line&nbsp;return  \\( 1 +\\text{ mystery(a*4)+ mystery(a*4)}; \\) then also output is same`,
        `Only possible outputs are  \\( 3, 7, 15, 31 \\)`,
        `\\( \\text{mystery(i)} \\) gives output if and only if  \\( i \\) is  \\( 1 \\) or multiple of  \\( 4 \\)`,
      ],
      answer: ["A", "B"],
      solution: `<img src="/images/quiz/wqt-cprog3/13.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>What will be output of following program?</p> <pre class="prettyprint linenums lang-c_cpp prettyprinted" data-pbcklang="c_cpp" data-pbcktabsize="4" style=""><ol class="linenums"><li class="L0"><span class="kwd">void</span><span class="pln"> xyz</span><span class="pun">(</span><span class="kwd">int</span><span class="pln"> i</span><span class="pun">)</span></li><li class="L1"><span class="pun">{</span></li><li class="L2"><span class="pln">    </span><span class="kwd">if</span><span class="pun">(--</span><span class="pln">i</span><span class="pun">)</span></li><li class="L3"><span class="pln">    </span><span class="pun">{</span></li><li class="L4"><span class="pln">        xyz</span><span class="pun">(</span><span class="pln">i</span><span class="pun">++);</span></li><li class="L5"><span class="pln">        printf</span><span class="pun">(</span><span class="str">"%d"</span><span class="pun">,</span><span class="pln">i</span><span class="pun">);</span></li><li class="L6"><span class="pln">    </span><span class="pun">}</span></li><li class="L7"><span class="pun">}</span></li><li class="L8"><span class="pln">main</span><span class="pun">()</span></li><li class="L9"><span class="pun">{</span></li><li class="L0"><span class="pln">    xyz</span><span class="pun">(</span><span class="lit">5</span><span class="pun">);</span></li><li class="L1"><span class="pun">}</span></li></ol></pre> <p></p>`,
      image: "",
      options: [
        `It is an infinite recursion since no base case`,
        `\\( 2345 \\)`,
        `\\( 54321 \\)`,
        `\\( 1234 \\)`,
      ],
      answer: "B",
      solution: `<img src="/images/quiz/wqt-cprog3/14.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0,
      type: "NAT",
      text: `<p></p> <p>What will be the output printed by  \\( \\text{mystery}1(0,6) \\)? </p> <pre class="prettyprint linenums lang-c_cpp prettyprinted" data-pbcklang="c_cpp" data-pbcktabsize="4" style=""><ol class="linenums"><li class="L0"><span class="kwd">void</span><span class="pln"> mystery1</span><span class="pun">(</span><span class="kwd">int</span><span class="pln"> a</span><span class="pun">,</span><span class="pln"> </span><span class="kwd">int</span><span class="pln"> b</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span></li><li class="L1"><span class="pln">    </span><span class="kwd">if</span><span class="pln"> </span><span class="pun">(</span><span class="pln">a </span><span class="pun">&lt;=</span><span class="pln"> b</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span></li><li class="L2"><span class="pln">        </span><span class="kwd">int</span><span class="pln"> m </span><span class="pun">=</span><span class="pln"> </span><span class="pun">(</span><span class="pln">a </span><span class="pun">+</span><span class="pln"> b</span><span class="pun">)</span><span class="pln"> </span><span class="pun">/</span><span class="pln"> </span><span class="lit">2</span><span class="pun">;</span></li><li class="L3"><span class="pln">        printf</span><span class="pun">(</span><span class="str">"%d"</span><span class="pun">,</span><span class="pln"> m</span><span class="pun">);</span></li><li class="L4"><span class="pln">        mystery1</span><span class="pun">(</span><span class="pln">a</span><span class="pun">,</span><span class="pln"> m</span><span class="pun">-</span><span class="lit">1</span><span class="pun">);</span></li><li class="L5"><span class="pln">        mystery1</span><span class="pun">(</span><span class="pln">m</span><span class="pun">+</span><span class="lit">1</span><span class="pun">,</span><span class="pln"> b</span><span class="pun">);</span></li><li class="L6"><span class="pln">    </span><span class="pun">}</span></li><li class="L7"><span class="pun">}</span></li></ol></pre> <p></p>`,
      image: "",
      options: [],
      answer: "3102546",
      solution: `<img src="/images/quiz/wqt-cprog3/15.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p>What will be the output of the following program?</p> <pre class="prettyprint linenums lang-c_cpp prettyprinted" data-pbcklang="c_cpp" data-pbcktabsize="4" style=""><ol class="linenums"><li class="L0"><span class="kwd">struct</span><span class="pln"> s</span><span class="pun">{</span></li><li class="L1"><span class="pln">    </span><span class="kwd">int</span><span class="pln"> i</span><span class="pun">;</span></li><li class="L2"><span class="pln">    </span><span class="kwd">struct</span><span class="pln"> s </span><span class="pun">*</span><span class="pln">p</span><span class="pun">;</span></li><li class="L3"><span class="pun">};</span></li><li class="L4"><span class="kwd">struct</span><span class="pln"> s arr</span><span class="pun">[</span><span class="lit">4</span><span class="pun">]</span><span class="pln"> </span><span class="pun">=</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> </span><span class="lit">7</span><span class="pun">,</span><span class="pln"> arr</span><span class="pun">+</span><span class="lit">3</span><span class="pun">,</span></li><li class="L5"><span class="pln">    </span><span class="lit">8</span><span class="pun">,</span><span class="pln"> arr</span><span class="pun">+</span><span class="lit">2</span><span class="pun">,</span></li><li class="L6"><span class="pln">    </span><span class="lit">9</span><span class="pun">,</span><span class="pln"> arr</span><span class="pun">,</span></li><li class="L7"><span class="pln">    </span><span class="lit">8</span><span class="pun">,</span><span class="pln"> arr</span><span class="pun">+</span><span class="lit">1</span><span class="pun">,</span></li><li class="L8"><span class="pun">};</span></li><li class="L9"><span class="kwd">struct</span><span class="pln"> s </span><span class="pun">*</span><span class="pln">ap</span><span class="pun">[]</span><span class="pln"> </span><span class="pun">=</span><span class="pln"> </span><span class="pun">{</span><span class="pln">arr</span><span class="pun">+</span><span class="lit">3</span><span class="pun">,</span><span class="pln"> arr</span><span class="pun">+</span><span class="lit">2</span><span class="pun">,</span><span class="pln"> arr</span><span class="pun">+</span><span class="lit">1</span><span class="pun">,</span><span class="pln"> arr</span><span class="pun">};</span></li><li class="L0"><span class="kwd">struct</span><span class="pln"> s </span><span class="pun">**</span><span class="pln">pp </span><span class="pun">=</span><span class="pln">ap</span><span class="pun">;</span></li><li class="L1"><span class="kwd">int</span><span class="pln"> main</span><span class="pun">()</span></li><li class="L2"><span class="pun">{</span></li><li class="L3"><span class="pln">    printf</span><span class="pun">(</span><span class="str">"%d "</span><span class="pun">,</span><span class="pln"> ap</span><span class="pun">[++</span><span class="pln">pp</span><span class="pun">[</span><span class="lit">2</span><span class="pun">]-&gt;</span><span class="pln">i</span><span class="pun">-</span><span class="lit">6</span><span class="pun">]-&gt;</span><span class="pln">i</span><span class="pun">++);</span></li><li class="L4"><span class="pln">    printf</span><span class="pun">(</span><span class="str">"%d "</span><span class="pun">,</span><span class="pln"> pp</span><span class="pun">[</span><span class="lit">1</span><span class="pun">]++-&gt;</span><span class="pln">p</span><span class="pun">++-&gt;</span><span class="pln">i</span><span class="pun">);</span></li><li class="L5"><span class="pln">    printf</span><span class="pun">(</span><span class="str">"%d"</span><span class="pun">,</span><span class="pln"> </span><span class="pun">++</span><span class="pln">arr</span><span class="pun">[</span><span class="lit">2</span><span class="pun">].</span><span class="pln">p</span><span class="pun">-&gt;</span><span class="pln">i</span><span class="pun">);</span></li><li class="L6"><span class="pun">}</span></li></ol></pre> <p></p>`,
      image: "",
      options: [
        `\\( 9\\; 10\\; 9 \\)`,
        `\\( 7 \\;8\\; 10 \\)`,
        `\\( 7\\; 8\\; 9 \\)`,
        `None of these`,
      ],
      answer: "B",
      solution: `<img src="/images/quiz/wqt-cprog3/16.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p>Based on the struct alignment discussed in class,</p> <p>What are the sizes of  \\( \\textsf{foo1, foo2, foo3} \\) and  \\( \\textsf{foo4} \\) respectively? </p> <p>Sizes of primitive data types are given below.</p> <pre class="prettyprint linenums lang-c_cpp prettyprinted" data-pbcklang="c_cpp" data-pbcktabsize="4" style=""><ol class="linenums"><li class="L0"><span class="kwd">sizeof</span><span class="pun">(</span><span class="kwd">int</span><span class="pun">)</span><span class="pln"> </span><span class="pun">=</span><span class="pln"> </span><span class="lit">4</span><span class="pln"> bytes</span></li><li class="L1"><span class="kwd">sizeof</span><span class="pun">(</span><span class="kwd">short</span><span class="pun">)</span><span class="pln"> </span><span class="pun">=</span><span class="pln"> </span><span class="lit">2</span><span class="pln"> bytes</span></li><li class="L2"><span class="kwd">sizeof</span><span class="pun">(</span><span class="kwd">char</span><span class="pun">)</span><span class="pln"> </span><span class="pun">=</span><span class="pln"> </span><span class="lit">1</span><span class="pln"> </span><span class="kwd">byte</span></li></ol></pre> <p>&nbsp;</p> <pre class="prettyprint linenums lang-c_cpp prettyprinted" data-pbcklang="c_cpp" data-pbcktabsize="4" style=""><ol class="linenums"><li class="L0"><span class="kwd">struct</span><span class="pln"> foo1 </span><span class="pun">{</span></li><li class="L1"><span class="pln">    </span><span class="kwd">int</span><span class="pln"> d1</span><span class="pun">;</span></li><li class="L2"><span class="pln">    </span><span class="kwd">char</span><span class="pln"> c1</span><span class="pun">;</span></li><li class="L3"><span class="pln">    </span><span class="kwd">int</span><span class="pln"> d2</span><span class="pun">;</span></li><li class="L4"><span class="pun">};</span></li><li class="L5"><span class="pln">&nbsp;</span></li><li class="L6"><span class="kwd">struct</span><span class="pln"> foo2 </span><span class="pun">{</span></li><li class="L7"><span class="pln">    </span><span class="kwd">int</span><span class="pln"> d1</span><span class="pun">;</span></li><li class="L8"><span class="pln">    </span><span class="kwd">char</span><span class="pln"> c1</span><span class="pun">;</span></li><li class="L9"><span class="pln">    </span><span class="kwd">int</span><span class="pln"> d2</span><span class="pun">;</span></li><li class="L0"><span class="pln">    </span><span class="kwd">char</span><span class="pln"> c2</span><span class="pun">;</span></li><li class="L1"><span class="pln">    </span><span class="kwd">short</span><span class="pln"> s</span><span class="pun">;</span></li><li class="L2"><span class="pun">};</span></li><li class="L3"><span class="pln">&nbsp;</span></li><li class="L4"><span class="kwd">struct</span><span class="pln"> foo3 </span><span class="pun">{</span></li><li class="L5"><span class="pln">    </span><span class="kwd">int</span><span class="pln"> d1</span><span class="pun">;</span></li><li class="L6"><span class="pln">    </span><span class="kwd">int</span><span class="pln"> d2</span><span class="pun">;</span></li><li class="L7"><span class="pln">    </span><span class="kwd">char</span><span class="pln"> c1</span><span class="pun">;</span></li><li class="L8"><span class="pln">    </span><span class="kwd">char</span><span class="pln"> c2</span><span class="pun">;</span></li><li class="L9"><span class="pln">    </span><span class="kwd">short</span><span class="pln"> s</span><span class="pun">;</span></li><li class="L0"><span class="pun">};</span></li><li class="L1"><span class="pln">&nbsp;</span></li><li class="L2"><span class="kwd">struct</span><span class="pln"> foo4 </span><span class="pun">{</span></li><li class="L3"><span class="pln">    </span><span class="kwd">char</span><span class="pln"> c1</span><span class="pun">;</span></li><li class="L4"><span class="pln">    </span><span class="kwd">int</span><span class="pln"> d1</span><span class="pun">;</span></li><li class="L5"><span class="pln">    </span><span class="kwd">short</span><span class="pln"> s</span><span class="pun">;</span></li><li class="L6"><span class="pln">    </span><span class="kwd">int</span><span class="pln"> d2</span><span class="pun">;</span></li><li class="L7"><span class="pln">    </span><span class="kwd">char</span><span class="pln"> c2</span><span class="pun">;</span></li><li class="L8"><span class="pun">};</span></li></ol></pre> <p></p>`,
      image: "",
      options: [
        `\\( 9,\\; 12,\\; 12,\\; 12 \\)`,
        `\\( 9,\\; 12,\\;16,\\; 20 \\)`,
        `\\( 12,\\; 16,\\; 12,\\; 20 \\)`,
        `\\( 12,\\; 20,\\; 20,\\; 20 \\)`,
      ],
      answer: "C",
      solution: `<img src="/images/quiz/wqt-cprog3/17.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>Mark all options which are likely to create problems with memory, i.e., run time error or has a memory leak.</p> <p>Assume that malloc is successful in all cases.</p> <pre class="prettyprint linenums lang-c_cpp prettyprinted" data-pbcklang="c_cpp" data-pbcktabsize="4" style=""><ol class="linenums"><li class="L0"><span class="typ">Program</span><span class="pln"> </span><span class="lit">1</span><span class="pun">:</span></li><li class="L1"><span class="kwd">int</span><span class="pln"> </span><span class="pun">*</span><span class="pln">p </span><span class="pun">=</span><span class="pln"> malloc</span><span class="pun">(</span><span class="kwd">sizeof</span><span class="pun">(</span><span class="kwd">int</span><span class="pun">));</span></li><li class="L2"><span class="pun">*</span><span class="pln">p </span><span class="pun">=</span><span class="pln"> </span><span class="lit">0</span><span class="pun">;</span></li><li class="L3"><span class="pln">free</span><span class="pun">(</span><span class="pln">p</span><span class="pun">);</span></li><li class="L4"><span class="pun">*</span><span class="pln">p </span><span class="pun">=</span><span class="pln"> </span><span class="lit">0</span><span class="pun">;</span></li></ol></pre> <pre class="prettyprint linenums lang-c_cpp prettyprinted" data-pbcklang="c_cpp" data-pbcktabsize="4" style=""><ol class="linenums"><li class="L0"><span class="typ">Program2</span><span class="pun">:</span></li><li class="L1"><span class="kwd">int</span><span class="pln"> </span><span class="pun">*</span><span class="pln">p </span><span class="pun">=</span><span class="pln"> malloc</span><span class="pun">(</span><span class="kwd">sizeof</span><span class="pun">(</span><span class="kwd">int</span><span class="pun">));</span></li><li class="L2"><span class="pun">*</span><span class="pln">p </span><span class="pun">=</span><span class="pln"> </span><span class="lit">0</span><span class="pun">;</span></li><li class="L3"><span class="pln">free</span><span class="pun">(</span><span class="pln">p</span><span class="pun">);</span></li><li class="L4"><span class="pln">p </span><span class="pun">=</span><span class="pln"> </span><span class="lit">0</span><span class="pun">;</span></li></ol></pre> <pre class="prettyprint linenums lang-c_cpp prettyprinted" data-pbcklang="c_cpp" data-pbcktabsize="4" style=""><ol class="linenums"><li class="L0"><span class="typ">Program</span><span class="pln"> </span><span class="lit">3</span><span class="pun">:</span></li><li class="L1"><span class="kwd">int</span><span class="pln"> </span><span class="pun">*</span><span class="pln">p </span><span class="pun">=</span><span class="pln"> malloc</span><span class="pun">(</span><span class="lit">3</span><span class="pun">*</span><span class="kwd">sizeof</span><span class="pun">(</span><span class="kwd">int</span><span class="pun">));</span></li><li class="L2"><span class="pun">*</span><span class="pln">p </span><span class="pun">=</span><span class="pln"> </span><span class="lit">0</span><span class="pun">;</span></li><li class="L3"><span class="pln">p</span><span class="pun">++;</span></li><li class="L4"><span class="pln">free</span><span class="pun">(</span><span class="pln">p</span><span class="pun">);</span></li></ol></pre> <pre class="prettyprint linenums lang-c_cpp prettyprinted" data-pbcklang="c_cpp" data-pbcktabsize="4" style=""><ol class="linenums"><li class="L0"><span class="typ">Program</span><span class="pln"> </span><span class="lit">4</span><span class="pun">:</span></li><li class="L1"><span class="kwd">int</span><span class="pln"> </span><span class="pun">*</span><span class="pln">p </span><span class="pun">=</span><span class="pln"> malloc</span><span class="pun">(</span><span class="kwd">sizeof</span><span class="pun">(</span><span class="kwd">char</span><span class="pun">));</span></li><li class="L2"><span class="pun">*</span><span class="pln">p </span><span class="pun">=</span><span class="pln"> </span><span class="lit">0</span><span class="pun">;</span></li></ol></pre> <p></p>`,
      image: "",
      options: [
        `Program  \\( 1 \\)`,
        `Program  \\( 2 \\)`,
        `Program  \\( 3 \\)`,
        `Program  \\( 4 \\)`,
      ],
      answer: ["A", "C", "D"],
      solution: `<img src="/images/quiz/wqt-cprog3/18.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p>Consider the following declarations of variables in a system having  \\( 4 \\) bytes for integers. </p> <pre class="prettyprint linenums lang-c_cpp prettyprinted" data-pbcklang="c_cpp" data-pbcktabsize="4" style=""><ol class="linenums"><li class="L0"><span class="kwd">int</span><span class="pln"> a</span><span class="pun">[</span><span class="lit">5</span><span class="pun">][</span><span class="lit">4</span><span class="pun">];</span></li><li class="L1"><span class="kwd">int</span><span class="pln"> </span><span class="pun">(*</span><span class="pln">p1</span><span class="pun">)[</span><span class="lit">2</span><span class="pun">];</span></li><li class="L2"><span class="kwd">int</span><span class="pln"> </span><span class="pun">(*</span><span class="pln">p2</span><span class="pun">)[</span><span class="lit">2</span><span class="pun">];</span></li><li class="L3"><span class="kwd">int</span><span class="pln"> </span><span class="pun">(*</span><span class="pln">t1</span><span class="pun">)[</span><span class="lit">4</span><span class="pun">];</span></li><li class="L4"><span class="kwd">int</span><span class="pln"> </span><span class="pun">(*</span><span class="pln">t2</span><span class="pun">)[</span><span class="lit">4</span><span class="pun">];</span></li></ol></pre> <p>Suppose array a has base address of  \\( 1000 \\) and initial values of  \\( p1, p2, t1 \\) and  \\( t2 \\) are  \\( 1000, 1048, 1016 \\) and  \\( 1064 \\) respectively. What will be the value of \\( p2-p1 \\) and  \\( t2-t1 \\) respectively? </p> <p></p>`,
      image: "",
      options: [
        `\\( 6 \\;3 \\)`,
        `\\( 48\\; 24  \\)`,
        `\\( 12\\; 6 \\)`,
        `\\( 24\\; 12 \\)`,
      ],
      answer: "A",
      solution: `<img src="/images/quiz/wqt-cprog3/19.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "NAT",
      text: `<p></p> <pre class="prettyprint linenums lang-c_cpp prettyprinted" data-pbcklang="c_cpp" data-pbcktabsize="4" style=""><ol class="linenums"><li class="L0"><span class="kwd">int</span><span class="pln"> mystry </span><span class="pun">(</span><span class="kwd">char</span><span class="pun">*</span><span class="pln"> str</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span></li><li class="L1"><span class="pln">    </span><span class="kwd">if</span><span class="pln"> </span><span class="pun">(*</span><span class="pln">str </span><span class="pun">==</span><span class="pln"> </span><span class="lit">0</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span></li><li class="L2"><span class="pln">        </span><span class="kwd">return</span><span class="pln"> </span><span class="lit">0</span><span class="pun">;</span></li><li class="L3"><span class="pln">    </span><span class="pun">}</span></li><li class="L4"><span class="pln">    </span><span class="kwd">return</span><span class="pln"> mystry </span><span class="pun">(</span><span class="pln">str</span><span class="pun">+</span><span class="lit">1</span><span class="pun">)</span><span class="pln"> </span><span class="pun">+</span><span class="lit">1</span><span class="pun">;</span></li><li class="L5"><span class="pun">}</span></li></ol></pre> <p>What will be the output of mystry("hello")?</p> <p></p>`,
      image: "",
      options: [],
      answer: "5",
      solution: `<img src="/images/quiz/wqt-cprog3/20.png" style="max-width: 75%;">`
    },
  ]
});
registerTest({
  series: "weekly-cs-gate-2027",
  name: "WQT - C-Programming-4 | Structures, Pointers, Storage Classes",
  date: "Oct 01, 2026",
  questions: [
    {
      marks: 1,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>Which of the following(s) function declarations can be used to pass the following array?</p> <pre class="prettyprint linenums lang-c_cpp prettyprinted" data-pbcklang="c_cpp" data-pbcktabsize="4" style=""><ol class="linenums"><li class="L0"><span class="kwd">char</span><span class="pln"> myArray</span><span class="pun">[</span><span class="lit">3</span><span class="pun">][</span><span class="lit">4</span><span class="pun">];</span></li></ol></pre> <p></p>`,
      image: "",
      options: [
        `<pre class="prettyprint linenums lang-c_cpp prettyprinted" data-pbcklang="c_cpp" data-pbcktabsize="4" style=""><ol class="linenums"><li class="L0"><span class="kwd">void</span><span class="pln"> fun</span><span class="pun">(</span><span class="kwd">char</span><span class="pln"> a</span><span class="pun">[</span><span class="lit">3</span><span class="pun">][]);</span></li></ol></pre>`,
        `<pre class="prettyprint linenums lang-c_cpp prettyprinted" data-pbcklang="c_cpp" data-pbcktabsize="4" style=""><ol class="linenums"><li class="L0"><span class="kwd">void</span><span class="pln"> fun</span><span class="pun">(</span><span class="kwd">char</span><span class="pln"> a</span><span class="pun">[][</span><span class="lit">4</span><span class="pun">]);</span></li></ol></pre>`,
        `<pre class="prettyprint linenums lang-c_cpp prettyprinted" data-pbcklang="c_cpp" data-pbcktabsize="4" style=""><ol class="linenums"><li class="L0"><span class="kwd">void</span><span class="pln"> fun</span><span class="pun">(</span><span class="kwd">char</span><span class="pln"> </span><span class="pun">(*</span><span class="pln">a</span><span class="pun">)[</span><span class="lit">4</span><span class="pun">]);</span></li></ol></pre>`,
        `<pre class="prettyprint linenums lang-c_cpp prettyprinted" data-pbcklang="c_cpp" data-pbcktabsize="4" style=""><ol class="linenums"><li class="L0"><span class="kwd">void</span><span class="pln"> fun</span><span class="pun">(</span><span class="kwd">char</span><span class="pln"> </span><span class="pun">**</span><span class="pln">a</span><span class="pun">);</span></li></ol></pre>`,
      ],
      answer: ["B", "C"],
      solution: `<img src="/images/quiz/wqt-cprog4/1.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>What will be printed by the following program?</p> <pre class="prettyprint linenums lang-c_cpp prettyprinted" data-pbcklang="c_cpp" data-pbcktabsize="4" style=""><ol class="linenums"><li class="L0"><span class="com">#include</span><span class="str">&lt;stdio.h&gt;</span><span class="pln"> </span></li><li class="L1"><span class="kwd">struct</span><span class="pln"> card</span></li><li class="L2"><span class="pun">{</span></li><li class="L3"><span class="pln">    </span><span class="kwd">int</span><span class="pln"> face </span><span class="pun">;</span></li><li class="L4"><span class="pun">};</span></li><li class="L5"><span class="kwd">typedef</span><span class="pln"> </span><span class="kwd">struct</span><span class="pln"> card </span><span class="typ">Card</span><span class="pln"> </span><span class="pun">;</span></li><li class="L6"><span class="typ">Card</span><span class="pln"> c </span><span class="pun">;</span></li><li class="L7"><span class="kwd">void</span><span class="pln"> </span><span class="kwd">pass</span><span class="pun">(</span><span class="typ">Card</span><span class="pln"> c</span><span class="pun">);</span></li><li class="L8"><span class="kwd">int</span><span class="pln"> main</span><span class="pun">()</span></li><li class="L9"><span class="pun">{</span></li><li class="L0"><span class="pln">    c</span><span class="pun">.</span><span class="pln">face </span><span class="pun">=</span><span class="pln"> </span><span class="lit">1</span><span class="pun">;</span></li><li class="L1"><span class="pln">    printf</span><span class="pun">(</span><span class="str">"%d "</span><span class="pun">,</span><span class="pln"> c</span><span class="pun">.</span><span class="pln">face</span><span class="pun">);</span></li><li class="L2"><span class="pln">    </span><span class="kwd">pass</span><span class="pun">(</span><span class="pln">c</span><span class="pun">);</span></li><li class="L3"><span class="pln">    printf</span><span class="pun">(</span><span class="str">"%d"</span><span class="pun">,</span><span class="pln">c</span><span class="pun">.</span><span class="pln">face</span><span class="pun">);</span></li><li class="L4"><span class="pun">}</span></li><li class="L5"><span class="pln">&nbsp;</span></li><li class="L6"><span class="kwd">void</span><span class="pln"> </span><span class="kwd">pass</span><span class="pun">(</span><span class="typ">Card</span><span class="pln"> c</span><span class="pun">)</span></li><li class="L7"><span class="pun">{</span></li><li class="L8"><span class="pln">    c</span><span class="pun">.</span><span class="pln">face </span><span class="pun">=</span><span class="pln"> </span><span class="lit">5</span><span class="pun">;</span></li><li class="L9"><span class="pln">    printf</span><span class="pun">(</span><span class="str">"%d "</span><span class="pun">,</span><span class="pln">c</span><span class="pun">.</span><span class="pln">face</span><span class="pun">);</span></li><li class="L0"><span class="pun">}</span></li></ol></pre> <p></p>`,
      image: "",
      options: [
        `\\( 1\\; 1\\; 1 \\)`,
        `\\( 1\\; 5\\; 1 \\)`,
        `\\( 1\\; 5\\; 5 \\)`,
        `None of these`,
      ],
      answer: "B",
      solution: `<img src="/images/quiz/wqt-cprog4/2.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>What will be the output if we compile and execute the following C&nbsp;code?</p> <pre class="prettyprint linenums lang-c_cpp prettyprinted" data-pbcklang="c_cpp" data-pbcktabsize="4" style=""><ol class="linenums"><li class="L0"><span class="com">#include</span><span class="str">&lt;stdio.h&gt;</span></li><li class="L1"><span class="kwd">void</span><span class="pln"> main</span><span class="pun">(){</span></li><li class="L2"><span class="kwd">int</span><span class="pln"> i</span><span class="pun">=</span><span class="lit">10</span><span class="pun">;</span></li><li class="L3"><span class="kwd">static</span><span class="pln"> </span><span class="kwd">int</span><span class="pln"> x</span><span class="pun">=</span><span class="pln">i</span><span class="pun">;</span></li><li class="L4"><span class="kwd">if</span><span class="pun">(</span><span class="pln">x</span><span class="pun">==</span><span class="pln">i</span><span class="pun">)</span></li><li class="L5"><span class="pln">    printf</span><span class="pun">(</span><span class="str">"Equal"</span><span class="pun">);</span></li><li class="L6"><span class="kwd">else</span><span class="pln"> </span><span class="kwd">if</span><span class="pun">(</span><span class="pln">x</span><span class="pun">&gt;</span><span class="pln">i</span><span class="pun">)</span></li><li class="L7"><span class="pln">    printf</span><span class="pun">(</span><span class="str">"Greater than"</span><span class="pun">);</span></li><li class="L8"><span class="kwd">else</span></li><li class="L9"><span class="pln">    printf</span><span class="pun">(</span><span class="str">"Less than"</span><span class="pun">);</span></li><li class="L0"><span class="pun">}</span></li></ol></pre> <p></p>`,
      image: "",
      options: [
        `Equal`,
        `Greater than`,
        `Less than`,
        `Compiler error`,
      ],
      answer: "D",
      solution: `<img src="/images/quiz/wqt-cprog4/3.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>What will be the output if you compile and execute the following C&nbsp;code?</p> <pre class="prettyprint linenums lang-c_cpp prettyprinted" data-pbcklang="c_cpp" data-pbcktabsize="4" style=""><ol class="linenums"><li class="L0"><span class="kwd">extern</span><span class="pln"> </span><span class="kwd">int</span><span class="pln"> x</span><span class="pun">;</span></li><li class="L1"><span class="kwd">void</span><span class="pln"> main</span><span class="pun">()</span></li><li class="L2"><span class="pun">{</span></li><li class="L3"><span class="pln">    printf</span><span class="pun">(</span><span class="str">"%d"</span><span class="pun">,</span><span class="pln">x</span><span class="pun">);</span></li><li class="L4"><span class="pln">    x</span><span class="pun">=</span><span class="lit">2</span><span class="pun">;</span></li><li class="L5"><span class="pun">}</span></li><li class="L6"><span class="kwd">int</span><span class="pln"> x</span><span class="pun">=</span><span class="lit">23</span><span class="pun">;</span></li></ol></pre> <p></p>`,
      image: "",
      options: [
        `\\( 0 \\)`,
        `\\( 2 \\)`,
        `\\( 23 \\)`,
        `Compiler error`,
      ],
      answer: "C",
      solution: `<img src="/images/quiz/wqt-cprog4/4.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>Consider below two files p \\( 1 \\).c and p \\( 2 \\).c<br><strong><img alt="" src="/images/quiz/wqt-cprog4/q5_img1.png" style="max-width: 75%;"></strong> </p> <p>We compile both files independently and link them in case the compilation is successful.<br><br>Which of the following(s) is/are TRUE?</p> <p></p>`,
      image: "",
      options: [
        `p \\( 1 \\).c can not be compiled as there is no main function in the file.`,
        `Line  \\( 3 \\) in p \\( 1 \\).c will produce a compilation error because of the redefinition of variable  \\( a. \\)`,
        `Line  \\( 6 \\) in p \\( 2 \\).c will produce a compilation error since the extern does not allocate&nbsp;memory to variables.`,
        `Line  \\( 7 \\) in p \\( 2 \\).c will produce a compilation error.`,
      ],
      answer: ["D"],
      solution: `<img src="/images/quiz/wqt-cprog4/5.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>Assume that an int variable takes  \\( 4 \\) bytes and a char variable takes  \\( 1 \\) byte. What is the output of the code below? </p> <pre class="prettyprint linenums lang-c_cpp prettyprinted" data-pbcklang="c_cpp" data-pbcktabsize="4" style=""><ol class="linenums"><li class="L0"><span class="kwd">int</span><span class="pln"> main</span><span class="pun">()</span></li><li class="L1"><span class="pun">{</span></li><li class="L2"><span class="pln">    </span><span class="kwd">int</span><span class="pln"> arr</span><span class="pun">[]={</span><span class="lit">10</span><span class="pun">,</span><span class="lit">20</span><span class="pun">,</span><span class="lit">30</span><span class="pun">,</span><span class="lit">40</span><span class="pun">,</span><span class="lit">50</span><span class="pun">,</span><span class="lit">60</span><span class="pun">};</span></li><li class="L3"><span class="pln">    </span><span class="kwd">int</span><span class="pln"> </span><span class="pun">*</span><span class="pln">ptr1</span><span class="pun">=</span><span class="pln">arr</span><span class="pun">;</span></li><li class="L4"><span class="pln">    </span><span class="kwd">int</span><span class="pln"> </span><span class="pun">*</span><span class="pln">ptr2</span><span class="pun">=</span><span class="pln">arr</span><span class="pun">+</span><span class="lit">5</span><span class="pun">;</span></li><li class="L5"><span class="pln">    printf</span><span class="pun">(</span><span class="str">"Number of elements between two pointer are: %d."</span><span class="pun">,</span><span class="pln"> </span></li><li class="L6"><span class="pln">    </span><span class="pun">(</span><span class="pln">ptr2 </span><span class="pun">-</span><span class="pln"> ptr1</span><span class="pun">));</span></li><li class="L7"><span class="pln">    printf</span><span class="pun">(</span><span class="str">"Number of bytes between two pointer are: %d."</span><span class="pun">,</span><span class="pln"> </span></li><li class="L8"><span class="pln">    </span><span class="pun">(</span><span class="kwd">char</span><span class="pun">*)</span><span class="pln">ptr2 </span><span class="pun">-</span><span class="pln"> </span><span class="pun">(</span><span class="kwd">char</span><span class="pun">*)</span><span class="pln">ptr1</span><span class="pun">);</span></li><li class="L9"><span class="pun">}</span></li></ol></pre> <p></p>`,
      image: "",
      options: [
        `Number of elements between two pointer are:  \\( 5 \\). Number of bytes between two pointers are:  \\( 20 \\)`,
        `Number of elements between two pointer are:  \\( 20. \\) Number of bytes between two pointers are:  \\( 20 \\)`,
        `Number of elements between two pointer are:  \\( 5. \\) Number of bytes between two pointers are:  \\( 5 \\)`,
        `Compile time error`,
      ],
      answer: "A",
      solution: `<img src="/images/quiz/wqt-cprog4/6.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>What is the output of the following code?</p> <pre class="prettyprint linenums lang-c_cpp prettyprinted" data-pbcklang="c_cpp" data-pbcktabsize="4" style=""><ol class="linenums"><li class="L0"><span class="com">#include</span><span class="str">&lt;stdio.h&gt;</span></li><li class="L1"><span class="kwd">int</span><span class="pln"> main</span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span></li><li class="L2"><span class="pln">    </span><span class="kwd">unsigned</span><span class="pln"> </span><span class="kwd">int</span><span class="pln"> x </span><span class="pun">=</span><span class="pln"> </span><span class="lit">1</span><span class="pun">;</span></li><li class="L3"><span class="pln">    </span><span class="kwd">int</span><span class="pln"> y </span><span class="pun">=</span><span class="pln"> </span><span class="pun">-</span><span class="lit">2</span><span class="pun">;</span></li><li class="L4"><span class="pln">    </span><span class="pun">(</span><span class="pln">x </span><span class="pun">+</span><span class="pln"> y </span><span class="pun">&gt;</span><span class="pln"> </span><span class="lit">0</span><span class="pun">)</span><span class="pln"> </span><span class="pun">?</span><span class="pln"> printf</span><span class="pun">(</span><span class="str">"WRONG ANSWER"</span><span class="pun">)</span><span class="pln"> </span><span class="pun">:</span><span class="pln"> printf</span><span class="pun">(</span><span class="str">"CORRECT ANSWER"</span><span class="pun">);</span></li><li class="L5"><span class="pun">}</span></li></ol></pre> <p></p>`,
      image: "",
      options: [
        `WRONG ANSWER`,
        `CORRECT ANSWER`,
        `Prints nothing`,
        `None of these`,
      ],
      answer: "A",
      solution: `<img src="/images/quiz/wqt-cprog4/7.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>What will be the output of the following C program?</p> <pre class="prettyprint linenums lang-c_cpp prettyprinted" data-pbcklang="c_cpp" data-pbcktabsize="4" style=""><ol class="linenums"><li class="L0"><span class="com">#include</span><span class="str">&lt;stdio.h&gt;</span></li><li class="L1"><span class="kwd">void</span><span class="pln"> main</span><span class="pun">()</span></li><li class="L2"><span class="pun">{</span></li><li class="L3"><span class="pln">    </span><span class="kwd">int</span><span class="pln"> i</span><span class="pun">=</span><span class="lit">6</span><span class="pun">;</span></li><li class="L4"><span class="pln">    </span><span class="kwd">for</span><span class="pun">(--</span><span class="pln">i</span><span class="pun">;</span><span class="pln"> </span><span class="pun">--</span><span class="pln">i</span><span class="pun">;</span><span class="pln"> i</span><span class="pun">--)</span></li><li class="L5"><span class="pln">    </span><span class="pun">{</span></li><li class="L6"><span class="pln">      printf</span><span class="pun">(</span><span class="str">"%d"</span><span class="pun">,</span><span class="pln">i</span><span class="pun">);</span></li><li class="L7"><span class="pln">    </span><span class="pun">}</span></li><li class="L8"><span class="pun">}</span></li></ol></pre> <p></p>`,
      image: "",
      options: [
        `\\( 42 \\)`,
        `\\( 31 \\)`,
        `Infinite loop`,
        `None of these`,
      ],
      answer: "A",
      solution: `<img src="/images/quiz/wqt-cprog4/8.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <pre class="prettyprint linenums lang-c_cpp prettyprinted" data-pbcklang="c_cpp" data-pbcktabsize="4" style=""><ol class="linenums"><li class="L0"><span class="kwd">void</span><span class="pln"> mystery</span><span class="pun">(</span><span class="kwd">int</span><span class="pln"> n</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span></li><li class="L1"><span class="pln">&nbsp; </span><span class="kwd">if</span><span class="pln"> </span><span class="pun">(</span><span class="pln">n </span><span class="pun">&lt;=</span><span class="pln"> </span><span class="lit">1</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span></li><li class="L2"><span class="pln">&nbsp; &nbsp; printf</span><span class="pun">(</span><span class="str">"%d"</span><span class="pun">,</span><span class="pln"> n</span><span class="pun">);</span></li><li class="L3"><span class="pln">&nbsp; </span><span class="pun">}</span></li><li class="L4"><span class="pln">&nbsp; </span><span class="kwd">else</span><span class="pln"> </span><span class="pun">{</span></li><li class="L5"><span class="pln">&nbsp; &nbsp; printf</span><span class="pun">(</span><span class="str">"%d, "</span><span class="pun">,</span><span class="pln"> n</span><span class="pun">);</span></li><li class="L6"><span class="pln">&nbsp;</span></li><li class="L7"><span class="pln">&nbsp; &nbsp; mystery</span><span class="pun">(</span><span class="pln">n</span><span class="pun">/</span><span class="lit">2</span><span class="pun">);</span></li><li class="L8"><span class="pln">&nbsp; &nbsp; printf</span><span class="pun">(</span><span class="str">", %d"</span><span class="pun">,</span><span class="pln"> n</span><span class="pun">);</span></li><li class="L9"><span class="pln">&nbsp; </span><span class="pun">}</span></li><li class="L0"><span class="pun">}</span></li></ol></pre> <p>What will be the output printed by  \\( \\text{mystery(12)}? \\) </p> <p></p>`,
      image: "",
      options: [
        `\\( 12, 6, 3, 1, 3, 6, 12 \\)`,
        `\\( 12, 6, 3, 1, 3, 6, \\)`,
        `\\( 12, 6, 3, 1, 3, 6, 12, \\)`,
        `None of these`,
      ],
      answer: "A",
      solution: `<img src="/images/quiz/wqt-cprog4/9.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>What will be the output of the following program?</p> <pre class="prettyprint linenums lang-c_cpp prettyprinted" data-pbcklang="c_cpp" data-pbcktabsize="4" style=""><ol class="linenums"><li class="L0"><span class="pln">main</span><span class="pun">()</span></li><li class="L1"><span class="pun">{</span></li><li class="L2"><span class="pln">    </span><span class="kwd">int</span><span class="pln"> a</span><span class="pun">[</span><span class="lit">2</span><span class="pun">][</span><span class="lit">2</span><span class="pun">]</span><span class="pln"> </span><span class="pun">=</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> </span><span class="pun">{</span><span class="lit">1</span><span class="pun">,</span><span class="lit">2</span><span class="pun">},{</span><span class="lit">3</span><span class="pun">,</span><span class="lit">4</span><span class="pun">}</span><span class="pln"> </span><span class="pun">};</span></li><li class="L3"><span class="pln">    </span><span class="kwd">int</span><span class="pun">(*</span><span class="pln">p</span><span class="pun">)[</span><span class="lit">2</span><span class="pun">][</span><span class="lit">2</span><span class="pun">];</span></li><li class="L4"><span class="pln">    p </span><span class="pun">=</span><span class="pln"> </span><span class="pun">&amp;</span><span class="pln">a</span><span class="pun">;</span></li><li class="L5"><span class="pln">    printf</span><span class="pun">(</span><span class="str">"%d"</span><span class="pun">,</span><span class="pln"> </span><span class="pun">(*</span><span class="pln">p</span><span class="pun">)[</span><span class="lit">0</span><span class="pun">][</span><span class="lit">0</span><span class="pun">]);</span></li><li class="L6"><span class="pun">}</span></li></ol></pre> <p></p>`,
      image: "",
      options: [
        `\\( 1 \\)`,
        `\\( 3 \\)`,
        `\\( 4 \\)`,
        `None of these`,
      ],
      answer: "A",
      solution: `<img src="/images/quiz/wqt-cprog4/10.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p>What will be the output of the following C code?</p> <pre class="prettyprint linenums lang-c_cpp prettyprinted" data-pbcklang="c_cpp" data-pbcktabsize="4" style=""><ol class="linenums"><li class="L0"><span class="com">#include</span><span class="str">&lt;stdio.h&gt;</span></li><li class="L1"><span class="kwd">void</span><span class="pln"> fun </span><span class="pun">(</span><span class="kwd">char</span><span class="pln"> </span><span class="pun">*</span><span class="pln">p</span><span class="pun">){</span></li><li class="L2"><span class="pln">    p</span><span class="pun">++[</span><span class="lit">1</span><span class="pun">]=</span><span class="pln"> </span><span class="str">'E'</span><span class="pun">;</span></li><li class="L3"><span class="pln">    </span><span class="pun">++*</span><span class="pln">p</span><span class="pun">++;</span></li><li class="L4"><span class="pln">    printf</span><span class="pun">(</span><span class="str">"%c"</span><span class="pun">,*</span><span class="pln">p</span><span class="pun">);</span></li><li class="L5"><span class="pun">}</span></li><li class="L6"><span class="kwd">int</span><span class="pln"> main</span><span class="pun">(){</span></li><li class="L7"><span class="pln">    </span><span class="kwd">char</span><span class="pln"> c</span><span class="pun">[]=</span><span class="pln"> </span><span class="str">"IISc"</span><span class="pun">;</span></li><li class="L8"><span class="pln">    fun</span><span class="pun">(</span><span class="pln">c</span><span class="pun">);</span></li><li class="L9"><span class="pun">}</span></li></ol></pre> <p></p>`,
      image: "",
      options: [
        `I`,
        `S`,
        `E`,
        `c`,
      ],
      answer: "B",
      solution: `<img src="/images/quiz/wqt-cprog4/11.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "NAT",
      text: `<p></p> <p>Consider the following declaration of  \\( a \\). </p> <pre class="prettyprint linenums lang-c_cpp prettyprinted" data-pbcklang="c_cpp" data-pbcktabsize="4" style=""><ol class="linenums"><li class="L0"><span class="kwd">int</span><span class="pln"> a</span><span class="pun">[</span><span class="lit">100</span><span class="pun">][</span><span class="lit">200</span><span class="pun">][</span><span class="lit">30</span><span class="pun">];</span></li></ol></pre> <p>What will be the integer value of  \\( a[50][300] - a[10][500]? \\) </p> <p></p>`,
      image: "",
      options: [],
      answer: "234000",
      solution: `<img src="/images/quiz/wqt-cprog4/12.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p>What will be the output of the following program?</p> <pre class="prettyprint linenums lang-c_cpp prettyprinted" data-pbcklang="c_cpp" data-pbcktabsize="4" style=""><ol class="linenums"><li class="L0"><span class="com">#include</span><span class="str">&lt;stdio.h&gt;</span></li><li class="L1"><span class="kwd">struct</span><span class="pln"> _myst</span><span class="pun">{</span></li><li class="L2"><span class="pln">    </span><span class="kwd">char</span><span class="pln"> b</span><span class="pun">[</span><span class="lit">20</span><span class="pun">];</span></li><li class="L3"><span class="pln">    </span><span class="kwd">char</span><span class="pln"> </span><span class="pun">*</span><span class="pln">a</span><span class="pun">;</span></li><li class="L4"><span class="pln">    </span><span class="kwd">struct</span><span class="pln"> _myst </span><span class="pun">*</span><span class="pln">c</span><span class="pun">;</span></li><li class="L5"><span class="pun">}</span><span class="pln">x</span><span class="pun">[</span><span class="lit">2</span><span class="pun">]</span><span class="pln"> </span><span class="pun">=</span><span class="pln"> </span><span class="pun">{</span><span class="str">"GATE"</span><span class="pun">,</span><span class="pln"> </span><span class="str">"Overflow"</span><span class="pun">,</span><span class="pln"> x</span><span class="pun">+</span><span class="lit">1</span><span class="pun">,</span><span class="pln"> </span><span class="str">"GO"</span><span class="pun">,</span><span class="pln"> </span><span class="str">"Classes"</span><span class="pun">,</span><span class="pln"> x</span><span class="pun">},</span><span class="pln"> </span><span class="pun">*</span><span class="pln">p </span><span class="pun">=</span><span class="pln"> x</span><span class="pun">;</span></li><li class="L6"><span class="kwd">typedef</span><span class="pln"> </span><span class="kwd">struct</span><span class="pln"> _myst myst</span><span class="pun">;</span></li><li class="L7"><span class="pln">&nbsp;</span></li><li class="L8"><span class="pln">myst</span><span class="pun">*</span><span class="pln"> mystry</span><span class="pun">(</span><span class="pln">myst </span><span class="pun">*</span><span class="pln">p</span><span class="pun">,</span><span class="pln"> </span><span class="kwd">int</span><span class="pln"> n</span><span class="pun">){</span></li><li class="L9"><span class="pln">    </span><span class="kwd">if</span><span class="pln"> </span><span class="pun">(</span><span class="pln">n</span><span class="pun">&lt;=</span><span class="lit">0</span><span class="pun">)</span><span class="pln"> </span><span class="kwd">return</span><span class="pln"> p</span><span class="pun">++;</span></li><li class="L0"><span class="pln">    </span><span class="kwd">if</span><span class="pun">(</span><span class="pln">n</span><span class="pun">%</span><span class="lit">2</span><span class="pun">)</span><span class="pln"> </span><span class="kwd">return</span><span class="pln"> mystry</span><span class="pun">(</span><span class="pln">p</span><span class="pun">-&gt;</span><span class="pln">c</span><span class="pun">,</span><span class="pln"> n</span><span class="pun">-</span><span class="lit">2</span><span class="pun">);</span></li><li class="L1"><span class="pln">    </span><span class="kwd">else</span><span class="pln"> </span><span class="kwd">return</span><span class="pln"> mystry</span><span class="pun">(</span><span class="pln">p</span><span class="pun">-&gt;</span><span class="pln">c</span><span class="pun">,</span><span class="pln"> n</span><span class="pun">-</span><span class="lit">1</span><span class="pun">);</span></li><li class="L2"><span class="pun">}</span></li><li class="L3"><span class="kwd">int</span><span class="pln"> main</span><span class="pun">()</span></li><li class="L4"><span class="pun">{</span></li><li class="L5"><span class="pln">    printf</span><span class="pun">(</span><span class="str">"%s"</span><span class="pun">,</span><span class="pln">mystry</span><span class="pun">(</span><span class="pln">p</span><span class="pun">,</span><span class="lit">2023</span><span class="pun">)-&gt;</span><span class="pln">a</span><span class="pun">);</span></li><li class="L6"><span class="pun">}</span></li></ol></pre> <p></p>`,
      image: "",
      options: [
        `GATE`,
        `Overflow`,
        `Run time error`,
        `Compile-time error`,
      ],
      answer: "B",
      solution: `<img src="/images/quiz/wqt-cprog4/13.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p>What will be the output of the following program?</p> <pre class="prettyprint linenums lang-c_cpp prettyprinted" data-pbcklang="c_cpp" data-pbcktabsize="4" style=""><ol class="linenums"><li class="L0"><span class="kwd">struct</span><span class="pln"> s</span><span class="pun">{</span></li><li class="L1"><span class="pln">    </span><span class="kwd">int</span><span class="pln"> i</span><span class="pun">;</span></li><li class="L2"><span class="pln">    </span><span class="kwd">struct</span><span class="pln"> s </span><span class="pun">*</span><span class="pln">p</span><span class="pun">;</span></li><li class="L3"><span class="pun">};</span></li><li class="L4"><span class="pln">&nbsp;</span></li><li class="L5"><span class="kwd">struct</span><span class="pln"> s arr</span><span class="pun">[</span><span class="lit">4</span><span class="pun">]</span><span class="pln"> </span><span class="pun">=</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> </span><span class="lit">7</span><span class="pun">,</span><span class="pln"> arr</span><span class="pun">+</span><span class="lit">3</span><span class="pun">,</span></li><li class="L6"><span class="pln">    </span><span class="lit">8</span><span class="pun">,</span><span class="pln"> arr</span><span class="pun">+</span><span class="lit">2</span><span class="pun">,</span></li><li class="L7"><span class="pln">    </span><span class="lit">9</span><span class="pun">,</span><span class="pln"> arr</span><span class="pun">,</span></li><li class="L8"><span class="pln">    </span><span class="lit">10</span><span class="pun">,</span><span class="pln"> arr</span><span class="pun">+</span><span class="lit">1</span><span class="pun">,</span></li><li class="L9"><span class="pun">};</span></li><li class="L0"><span class="pln">&nbsp;</span></li><li class="L1"><span class="kwd">struct</span><span class="pln"> s </span><span class="pun">*</span><span class="pln">ap</span><span class="pun">[]</span><span class="pln"> </span><span class="pun">=</span><span class="pln"> </span><span class="pun">{</span><span class="pln">arr</span><span class="pun">+</span><span class="lit">3</span><span class="pun">,</span><span class="pln"> arr</span><span class="pun">+</span><span class="lit">2</span><span class="pun">,</span><span class="pln"> arr</span><span class="pun">+</span><span class="lit">1</span><span class="pun">,</span><span class="pln"> arr</span><span class="pun">};</span></li><li class="L2"><span class="kwd">struct</span><span class="pln"> s </span><span class="pun">**</span><span class="pln">pp </span><span class="pun">=</span><span class="pln">ap</span><span class="pun">;</span></li><li class="L3"><span class="kwd">int</span><span class="pln"> main</span><span class="pun">()</span></li><li class="L4"><span class="pun">{</span></li><li class="L5"><span class="pln">    printf</span><span class="pun">(</span><span class="str">"%d"</span><span class="pun">,</span><span class="pln"> ap</span><span class="pun">[</span><span class="pln">pp</span><span class="pun">[</span><span class="lit">0</span><span class="pun">]-&gt;</span><span class="pln">p</span><span class="pun">-&gt;</span><span class="pln">i</span><span class="pun">%</span><span class="lit">2</span><span class="pun">]-&gt;</span><span class="pln">i</span><span class="pun">++);</span></li><li class="L6"><span class="pun">}</span></li></ol></pre> <p></p>`,
      image: "",
      options: [
        `\\( 7 \\)`,
        `\\( 10 \\)`,
        `\\( 9 \\)`,
        `\\( 8 \\)`,
      ],
      answer: "B",
      solution: `<img src="/images/quiz/wqt-cprog4/14.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "NAT",
      text: `<p></p> <p>What will be the output of the following C program?</p> <pre class="prettyprint linenums lang-c_cpp prettyprinted" data-pbcklang="c_cpp" data-pbcktabsize="4" style=""><ol class="linenums"><li class="L0"><span class="com">#include</span><span class="str">&lt;stdio.h&gt;</span></li><li class="L1"><span class="kwd">void</span><span class="pln"> main</span><span class="pun">()</span></li><li class="L2"><span class="pun">{</span></li><li class="L3"><span class="pln">    </span><span class="kwd">int</span><span class="pln"> b</span><span class="pun">=</span><span class="lit">20</span><span class="pun">,</span><span class="pln"> c</span><span class="pun">=</span><span class="lit">30</span><span class="pun">;</span></li><li class="L4"><span class="pln">    printf</span><span class="pun">(</span><span class="str">"%d%d\n"</span><span class="pun">,</span><span class="pln"> b</span><span class="pun">&lt;&lt;</span><span class="lit">2</span><span class="pun">&gt;&gt;</span><span class="lit">4</span><span class="pun">,</span><span class="pln"> c</span><span class="pun">&lt;&lt;</span><span class="lit">2</span><span class="pun">&gt;&gt;</span><span class="lit">4</span><span class="pun">);</span></li><li class="L5"><span class="pun">}</span></li></ol></pre> <p></p>`,
      image: "",
      options: [],
      answer: "57",
      solution: `<img src="/images/quiz/wqt-cprog4/15.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p>Consider the following declaration of pointer variable p.</p> <pre class="prettyprint linenums lang-c_cpp prettyprinted" data-pbcklang="c_cpp" data-pbcktabsize="4" style=""><ol class="linenums"><li class="L0"><span class="kwd">int</span><span class="pln"> </span><span class="pun">(*</span><span class="pln">p</span><span class="pun">)[</span><span class="lit">10</span><span class="pun">];</span></li></ol></pre> <p>If the initial value of  \\( p \\) is  \\( 1100, \\) then what will be the value of  \\( \\textsf{p+1}? \\) </p> <p>It is given that, system has  \\( 8 \\) bytes of address size and  \\( 4 \\) bytes of integer size. </p> <p></p>`,
      image: "",
      options: [
        `\\( 1140 \\)`,
        `\\( 1180 \\)`,
        `\\( 1104 \\)`,
        `\\( 1108 \\)`,
      ],
      answer: "A",
      solution: `<img src="/images/quiz/wqt-cprog4/16.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>After executing following lines of C&nbsp;code,  \\( \\mathbf{\\&amp;arr[1][2]} \\)&nbsp;is same as:&nbsp;&nbsp; </p> <pre class="prettyprint linenums lang-c_cpp prettyprinted" data-pbcklang="c_cpp" data-pbcktabsize="4" style=""><ol class="linenums"><li class="L0"><span class="kwd">int</span><span class="pln"> </span><span class="pun">(*</span><span class="pln">a</span><span class="pun">)[</span><span class="lit">3</span><span class="pun">];</span></li><li class="L1"><span class="kwd">int</span><span class="pln"> arr</span><span class="pun">[</span><span class="lit">2</span><span class="pun">][</span><span class="lit">3</span><span class="pun">];</span></li><li class="L2"><span class="pln">a </span><span class="pun">=</span><span class="pln"> arr</span><span class="pun">+</span><span class="lit">1</span><span class="pun">;</span></li></ol></pre> <p></p>`,
      image: "",
      options: [
        `<pre class="prettyprint linenums lang-c_cpp prettyprinted" data-pbcklang="c_cpp" data-pbcktabsize="4" style=""><ol class="linenums"><li class="L0"><span class="pun">&amp;</span><span class="pln">a</span><span class="pun">[</span><span class="lit">0</span><span class="pun">][</span><span class="lit">2</span><span class="pun">]</span></li></ol></pre>`,
        `<pre class="prettyprint linenums lang-c_cpp prettyprinted" data-pbcklang="c_cpp" data-pbcktabsize="4" style=""><ol class="linenums"><li class="L0"><span class="pun">(*</span><span class="pln">a</span><span class="pun">+</span><span class="lit">2</span><span class="pun">)</span></li></ol></pre>`,
        `<pre class="prettyprint linenums lang-c_cpp prettyprinted" data-pbcklang="c_cpp" data-pbcktabsize="4" style=""><ol class="linenums"><li class="L0"><span class="pun">(</span><span class="kwd">int</span><span class="pln">&nbsp;</span><span class="pun">*)(&amp;</span><span class="pln">arr</span><span class="pun">+</span><span class="lit">1</span><span class="pun">)-</span><span class="lit">1</span></li></ol></pre>`,
        `<pre class="prettyprint linenums lang-c_cpp prettyprinted" data-pbcklang="c_cpp" data-pbcktabsize="4" style=""><ol class="linenums"><li class="L0"><span class="pun">*(</span><span class="pln">a</span><span class="pun">+</span><span class="lit">2</span><span class="pun">)</span></li></ol></pre>`,
      ],
      answer: ["A", "B", "C"],
      solution: `<img src="/images/quiz/wqt-cprog4/17.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "NAT",
      text: `<p></p> <p>What will be the output of the following program?</p> <pre class="prettyprint linenums lang-c_cpp prettyprinted" data-pbcklang="c_cpp" data-pbcktabsize="4" style=""><ol class="linenums"><li class="L0"><span class="kwd">int</span><span class="pln"> main</span><span class="pun">()</span></li><li class="L1"><span class="pun">{</span></li><li class="L2"><span class="pln">    </span><span class="kwd">int</span><span class="pln"> arr</span><span class="pun">[</span><span class="lit">3</span><span class="pun">][</span><span class="lit">3</span><span class="pun">]</span><span class="pln"> </span><span class="pun">=</span><span class="pln"> </span><span class="pun">{{</span><span class="lit">1</span><span class="pun">,</span><span class="lit">2</span><span class="pun">,</span><span class="lit">3</span><span class="pun">},</span><span class="pln"> </span><span class="pun">{</span><span class="lit">4</span><span class="pun">,</span><span class="lit">5</span><span class="pun">,</span><span class="lit">6</span><span class="pun">},</span><span class="pln"> </span><span class="pun">{</span><span class="lit">7</span><span class="pun">,</span><span class="lit">8</span><span class="pun">,</span><span class="lit">9</span><span class="pun">}};</span></li><li class="L3"><span class="pln">    </span><span class="kwd">int</span><span class="pln"> </span><span class="pun">*</span><span class="pln">p</span><span class="pun">;</span></li><li class="L4"><span class="pln">    p </span><span class="pun">=</span><span class="pln"> </span><span class="pun">(</span><span class="kwd">int</span><span class="pln"> </span><span class="pun">*)(</span><span class="pln">arr</span><span class="pun">+</span><span class="lit">2</span><span class="pun">);</span></li><li class="L5"><span class="pln">    printf</span><span class="pun">(</span><span class="str">"%d"</span><span class="pun">,</span><span class="pln"> </span><span class="pun">*(</span><span class="pln">p</span><span class="pun">-</span><span class="lit">2</span><span class="pun">));</span></li><li class="L6"><span class="pun">}</span></li></ol></pre> <p></p>`,
      image: "",
      options: [],
      answer: "5",
      solution: `<img src="/images/quiz/wqt-cprog4/18.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "NAT",
      text: `<p></p> <p>Assume starting addresses of array arrop and twoD are  \\( 1000 \\) and  \\( 2000 \\) respectively. Also, assume that addresses are of  \\( 8 \\) bytes and integers are of  \\( 4 \\) bytes. </p> <p>What will be the value of  \\( \\textsf{*pp[1]} \\) after the last line  \\( \\textsf{(pp++)} \\) of the following program? </p> <pre class="prettyprint linenums lang-c_cpp prettyprinted" data-pbcklang="c_cpp" data-pbcktabsize="4" style=""><ol class="linenums"><li class="L0"><span class="kwd">int</span><span class="pln"> main</span><span class="pun">()</span></li><li class="L1"><span class="pun">{</span></li><li class="L2"><span class="pln">    </span><span class="kwd">int</span><span class="pln"> </span><span class="pun">**</span><span class="pln">pp</span><span class="pun">;</span></li><li class="L3"><span class="pln">    </span><span class="kwd">int</span><span class="pln"> </span><span class="pun">*</span><span class="pln">arrop</span><span class="pun">[</span><span class="lit">3</span><span class="pun">];</span></li><li class="L4"><span class="pln">    </span><span class="kwd">int</span><span class="pln"> twoD</span><span class="pun">[</span><span class="lit">3</span><span class="pun">][</span><span class="lit">3</span><span class="pun">]</span><span class="pln"> </span><span class="pun">=</span><span class="pln"> </span><span class="pun">{{</span><span class="lit">1</span><span class="pun">,</span><span class="lit">2</span><span class="pun">,</span><span class="lit">3</span><span class="pun">},</span><span class="pln"> </span><span class="pun">{</span><span class="lit">7</span><span class="pun">,</span><span class="lit">8</span><span class="pun">,</span><span class="lit">9</span><span class="pun">},</span><span class="pln"> </span><span class="pun">{</span><span class="lit">4</span><span class="pun">,</span><span class="lit">5</span><span class="pun">,</span><span class="lit">6</span><span class="pun">}};</span></li><li class="L5"><span class="pln">    pp </span><span class="pun">=</span><span class="pln"> arrop</span><span class="pun">;</span></li><li class="L6"><span class="pln">    arrop</span><span class="pun">[</span><span class="lit">0</span><span class="pun">]</span><span class="pln"> </span><span class="pun">=</span><span class="pln"> </span><span class="pun">(</span><span class="kwd">int</span><span class="pln"> </span><span class="pun">*)(</span><span class="pln">twoD</span><span class="pun">+</span><span class="lit">2</span><span class="pun">);</span></li><li class="L7"><span class="pln">    arrop</span><span class="pun">[</span><span class="lit">1</span><span class="pun">]</span><span class="pln"> </span><span class="pun">=</span><span class="pln"> </span><span class="pun">(</span><span class="kwd">int</span><span class="pln"> </span><span class="pun">*)(</span><span class="pln">twoD</span><span class="pun">+</span><span class="lit">1</span><span class="pun">);</span></li><li class="L8"><span class="pln">    arrop</span><span class="pun">[</span><span class="lit">2</span><span class="pun">]</span><span class="pln"> </span><span class="pun">=</span><span class="pln"> </span><span class="pun">(</span><span class="kwd">int</span><span class="pln"> </span><span class="pun">*)(</span><span class="pln">twoD</span><span class="pun">);</span></li><li class="L9"><span class="pln">    pp</span><span class="pun">++;</span></li><li class="L0"><span class="pun">}</span></li></ol></pre> <p></p>`,
      image: "",
      options: [],
      answer: "1",
      solution: `<img src="/images/quiz/wqt-cprog4/19.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p>What will be the output of the following program ?</p> <pre class="prettyprint linenums lang-c_cpp prettyprinted" data-pbcklang="c_cpp" data-pbcktabsize="4" style=""><ol class="linenums"><li class="L0"><span class="com">#include</span><span class="str">&lt;stdio.h&gt;</span></li><li class="L1"><span class="kwd">void</span><span class="pln"> fun</span><span class="pun">(</span><span class="kwd">int</span><span class="pln"> c</span><span class="pun">[</span><span class="lit">2</span><span class="pun">][</span><span class="lit">2</span><span class="pun">]){</span></li><li class="L2"><span class="pln">    c </span><span class="pun">=</span><span class="pln"> c</span><span class="pun">+</span><span class="lit">1</span><span class="pun">;</span></li><li class="L3"><span class="pln">    </span><span class="pun">*</span><span class="pln">c</span><span class="pun">[</span><span class="lit">1</span><span class="pun">]</span><span class="pln"> </span><span class="pun">=</span><span class="pln"> </span><span class="lit">5</span><span class="pun">;</span></li><li class="L4"><span class="pln">    </span><span class="pun">(*</span><span class="pln">c</span><span class="pun">)[</span><span class="lit">1</span><span class="pun">]</span><span class="pln"> </span><span class="pun">=</span><span class="pln"> </span><span class="lit">6</span><span class="pun">;</span></li><li class="L5"><span class="pun">}</span></li><li class="L6"><span class="kwd">int</span><span class="pln"> main</span><span class="pun">()</span></li><li class="L7"><span class="pun">{</span></li><li class="L8"><span class="pln">    </span><span class="kwd">int</span><span class="pln"> a</span><span class="pun">[</span><span class="lit">3</span><span class="pun">][</span><span class="lit">2</span><span class="pun">]</span><span class="pln"> </span><span class="pun">=</span><span class="pln"> </span><span class="pun">{{</span><span class="lit">1</span><span class="pun">,</span><span class="lit">2</span><span class="pun">},</span><span class="pln"> </span><span class="pun">{</span><span class="lit">10</span><span class="pun">,</span><span class="lit">20</span><span class="pun">},</span><span class="pln"> </span><span class="pun">{</span><span class="lit">40</span><span class="pun">,</span><span class="pln"> </span><span class="lit">50</span><span class="pun">}};</span></li><li class="L9"><span class="pln">    fun</span><span class="pun">(</span><span class="pln">a</span><span class="pun">);</span></li><li class="L0"><span class="pln">    printf</span><span class="pun">(</span><span class="str">"%d %d"</span><span class="pun">,</span><span class="pln"> a</span><span class="pun">[</span><span class="lit">2</span><span class="pun">][</span><span class="lit">0</span><span class="pun">],</span><span class="pln"> a</span><span class="pun">[</span><span class="lit">1</span><span class="pun">][</span><span class="lit">0</span><span class="pun">]);</span></li><li class="L1"><span class="pun">}</span></li></ol></pre> <p></p>`,
      image: "",
      options: [
        `\\( 5\\; 10 \\)`,
        `\\( 10\\; 5 \\)`,
        `\\( 10\\; 40 \\)`,
        `Error since  \\( c \\) is a two-dimensional array, and we can not update the value of  \\( c \\) using  \\( c=c+1. \\)`,
      ],
      answer: "A",
      solution: `<img src="/images/quiz/wqt-cprog4/20.png" style="max-width: 75%;">`
    },
  ]
});
registerTest({
  series: "weekly-cs-gate-2027",
  name: "WQT - Data Structure-1 | Asymptotic Notation and Loop Time Complexity",
  date: "Oct 01, 2026",
  questions: [
    {
      marks: 2,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>Consider a problem: Given an array, check whether the array is in sorted order or not. Suppose both iterative and recursive approaches are used to solve this problem.</p> <p>Which of the following statements is/are correct?</p> <p></p>`,
      image: "",
      options: [
        `Recursive approach gives space complexity as  \\( O(n) \\) for recursive stack space.`,
        `Iterative approach gives Auxiliary space as  \\( \\Theta(n). \\)`,
        `Time Complexity for recursive approach is  \\( O(n). \\)`,
        `Time Complexity for iterative approach is  \\( \\Theta(n \\log n). \\)`,
      ],
      answer: ["A", "C"],
      solution: `<img src="/images/quiz/wqt-ds1/1.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p>Rank the following functions by increasing order of growth. That is, find any arrangement  \\( g 1, g 2, g 3, g 4 \\) of the functions satisfying \\( g 1=O(g 2), g 2=O(g 3), g 3= \\)  \\( \\mathrm{O}(\\mathrm{g} 4) \\).<br> \$\$  \\begin{aligned} &amp;f_{1}(n)=2^{(\\log n)^{4}} &amp;f_{2}(n)=\\pi^{n} &amp;f_{3}(n)=n^{5(\\log n)^{2}} &amp;f_{4}(n)=\\sqrt{2^{\\sqrt{n}}} \\end{aligned}  \$\$ </p> <p></p>`,
      image: "",
      options: [
        `\\( f 1, f 3, f 4, f 2 \\)`,
        `\\( f 3, f 1, f 4, f 2 \\)`,
        `\\( f 1, f 3, f 2, f 4 \\)`,
        `\\( f 1, f 3, f 4, f 2 \\)`,
      ],
      answer: "B",
      solution: `<img src="/images/quiz/wqt-ds1/2.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p>What will be the time complexity of  \\( \\text{function()}? \\) </p> <pre class="prettyprint linenums lang-c_cpp prettyprinted" data-pbcklang="c_cpp" data-pbcktabsize="4" style=""><ol class="linenums"><li class="L0"><span class="kwd">function</span><span class="pun">(</span><span class="kwd">int</span><span class="pln"> n</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span></li><li class="L1"><span class="pln">    </span><span class="kwd">for</span><span class="pln"> </span><span class="pun">(</span><span class="kwd">int</span><span class="pln"> i </span><span class="pun">=</span><span class="pln"> </span><span class="lit">0</span><span class="pun">;</span><span class="pln"> i </span><span class="pun">&lt;</span><span class="pln"> n</span><span class="pun">;</span><span class="pln"> i</span><span class="pun">++)</span><span class="pln"> </span><span class="pun">{</span></li><li class="L2"><span class="pln">        </span><span class="kwd">for</span><span class="pln"> </span><span class="pun">(</span><span class="kwd">int</span><span class="pln"> j </span><span class="pun">=</span><span class="pln"> i</span><span class="pun">;</span><span class="pln"> j </span><span class="pun">&lt;</span><span class="pln"> i </span><span class="pun">*</span><span class="pln"> i</span><span class="pun">;</span><span class="pln"> j</span><span class="pun">++)</span><span class="pln"> </span><span class="pun">{</span></li><li class="L3"><span class="pln">            </span><span class="kwd">if</span><span class="pln"> </span><span class="pun">(</span><span class="pln">j </span><span class="pun">%</span><span class="pln"> i </span><span class="pun">==</span><span class="pln"> </span><span class="lit">0</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span></li><li class="L4"><span class="pln">                </span><span class="kwd">for</span><span class="pln"> </span><span class="pun">(</span><span class="kwd">int</span><span class="pln"> k </span><span class="pun">=</span><span class="pln"> </span><span class="lit">0</span><span class="pun">;</span><span class="pln"> k </span><span class="pun">&lt;</span><span class="pln"> j</span><span class="pun">;</span><span class="pln"> k</span><span class="pun">++)</span><span class="pln"> </span><span class="pun">{</span></li><li class="L5"><span class="pln">                    printf</span><span class="pun">(</span><span class="str">"*"</span><span class="pun">);</span></li><li class="L6"><span class="pln">                </span><span class="pun">}</span></li><li class="L7"><span class="pln">            </span><span class="pun">}</span></li><li class="L8"><span class="pln">        </span><span class="pun">}</span></li><li class="L9"><span class="pln">    </span><span class="pun">}</span></li><li class="L0"><span class="pun">}</span><span class="pln">    </span></li></ol></pre> <p></p>`,
      image: "",
      options: [
        `\\( \\Theta \\left(n^{3}\\right) \\)`,
        `\\( \\Theta\\left(n^{4}\\right) \\)`,
        `\\( \\Theta\\left(n^{5}\\right) \\)`,
        `\\( \\Theta\\left(n^{2} \\log n\\right) \\)`,
      ],
      answer: "B",
      solution: `<img src="/images/quiz/wqt-ds1/3.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p>Determine the complexity of the following code, using “ \\( \\Theta \\)” as indicated. </p> <pre class="prettyprint linenums lang-c_cpp prettyprinted" data-pbcklang="c_cpp" data-pbcktabsize="4" style=""><ol class="linenums"><li class="L0"><span class="kwd">int</span><span class="pln"> sum </span><span class="pun">=</span><span class="pln"> </span><span class="lit">0</span><span class="pun">;</span></li><li class="L1"><span class="kwd">for</span><span class="pln"> </span><span class="pun">(</span><span class="kwd">int</span><span class="pln"> i </span><span class="pun">=</span><span class="pln"> </span><span class="lit">1</span><span class="pun">;</span><span class="pln"> i </span><span class="pun">&lt;=</span><span class="pln"> n</span><span class="pun">;</span><span class="pln"> i </span><span class="pun">*=</span><span class="pln"> </span><span class="lit">2</span><span class="pun">)</span></li><li class="L2"><span class="pln">    </span><span class="kwd">for</span><span class="pln"> </span><span class="pun">(</span><span class="kwd">int</span><span class="pln"> j </span><span class="pun">=</span><span class="pln"> </span><span class="lit">1</span><span class="pun">;</span><span class="pln"> j </span><span class="pun">&lt;=</span><span class="pln"> i</span><span class="pun">;</span><span class="pln"> j</span><span class="pun">++)</span></li><li class="L3"><span class="pln">        sum</span><span class="pun">++;</span></li><li class="L4"><span class="pln">        </span><span class="kwd">print</span><span class="pun">(</span><span class="pln">sum</span><span class="pun">);</span></li></ol></pre> <p></p>`,
      image: "",
      options: [
        `\\( \\Theta \\left(n^{2}\\right) \\)`,
        `\\( \\Theta\\left(n^{2} \\log n\\right) \\)`,
        `\\( \\Theta(n) \\)`,
        `None of these`,
      ],
      answer: "C",
      solution: `<img src="/images/quiz/wqt-ds1/4.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>Consider functions  \\( f() \\) and  \\( g() \\) which are positive increasing functions. </p> <p>Which of the following(s) is/are correct?</p> <p></p>`,
      image: "",
      options: [
        `If  \\( f(n)=o(g(n)) \\) then  \\( \\log (f(n))=o(\\log (g(n)) \\), here  \\( o \\) is small-oh`,
        `If  \\( f(n)=\\mathrm{O}(g(n)) \\) then  \\( e^{f(n)}=\\mathrm{O}\\left(e^{g(n)}\\right) \\), here  \\( \\mathrm{O} \\) is big-oh`,
        `If  \\( f(n)=O(g(n)) \\) then  \\( \\log (f(n))=O(\\log (g(n)) \\), here  \\( O \\) is big-oh`,
        `If  \\( f(n)=o(g(n)) \\) then  \\( e^{f(n)}=o\\left(e^{g(n)}\\right) \\), here  \\( o \\) is small-oh`,
      ],
      answer: ["C", "D"],
      solution: `<img src="/images/quiz/wqt-ds1/5.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>Which of the following(s) is/are correct?</p> <p></p>`,
      image: "",
      options: [
        `If  \\( f(n)=n \\log n, g(n)=\\displaystyle{}\\sum_{i=1}^{n} \\frac{n}{i} \\) then  \\( f(n)=\\Theta(g(n)) \\)`,
        `If  \\( f(n)=1.01^{n}, g(n)=n^{1000} \\) then  \\( f(n)=\\Omega(g(n)) \\)`,
        `If  \\( f(n)=\\displaystyle{}\\sum_{i=1}^{n} i^{2}, g(n)=n^{3}+\\sum_{i=1}^{n} i \\) then  \\( f(n)=\\Theta(g(n)) \\)`,
        `If  \\( f(n)=n !, g(n)=3^{n} \\times 5^{n} \\) then \\( f(n)=\\Omega(g(n)) \\)`,
      ],
      answer: ["A", "B", "C", "D"],
      solution: `<img src="/images/quiz/wqt-ds1/6.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p>Which of the following statement is FALSE?</p> <p></p>`,
      image: "",
      options: [
        `If  \\( f(n)=\\mathcal{O}(g(n)) \\) and  \\( f(n)=\\Omega(g(n)) \\), then we have  \\( (f(n))^{2}=&nbsp;\\Theta\\left((g(n))^{2}\\right) \\)`,
        `If  \\( f(n)=\\mathcal{O}(g(n)) \\) and  \\( f(n)=\\Omega(g(n)) \\), then we have  \\( f(n)=g(n) \\)`,
        `\\( 2^{n}+n^{2}=\\mathcal{O}\\left(3^{n}\\right) \\)`,
        `\\( 2^{n}+n^{2}=\\mathcal{O}\\left(2^{n}\\right) \\) &nbsp;`,
      ],
      answer: "B",
      solution: `<img src="/images/quiz/wqt-ds1/7.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>Assume you have two positive functions  \\( f \\) and  \\( g \\) such that  \\( f(n) \\) is in  \\( O(g(n)) \\). For each of the following statements, decide which one(s) is/are always TRUE. </p> <p></p>`,
      image: "",
      options: [
        `\\( 2^{f(n)} \\) is  \\( O\\left(2^{g(n)}\\right) \\)`,
        `\\( f(n)^{2} \\) is  \\( O\\left(g(n)^{2}\\right) \\)`,
        `\\( f(n)=O\\left((f(n))^{2}\\right) \\)`,
        `\\( g(n)=\\Omega(g(n)) \\)`,
      ],
      answer: ["B", "D"],
      solution: `<img src="/images/quiz/wqt-ds1/8.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p>Let  \\( \\text{S}_{1}= \\displaystyle{}\\sum_{r=0}^{\\log n-1} \\frac{n r}{2^{r}} \\) , and  \\( \\text{S}_{2} = \\displaystyle{} \\sum_{r=0}^{\\log n-1} r 2^{r} \\) .<br>Which of the following is true? </p> <p></p>`,
      image: "",
      options: [
        `\\( \\text{S}_{1}=\\Theta(n \\log n), \\text{S}_{2}=\\Theta(n \\log n) \\)`,
        `\\( \\text{S}_{1}=\\Theta(n), \\text{S}_{2}=\\Theta(n \\log n) \\)`,
        `\\( \\text{S}_{1}=\\Theta(n \\log n), \\text{S}_{2}=\\Theta(n) \\)`,
        `\\( \\text{S}_{1}=\\Theta(n), \\text{S}_{2}=\\Theta(n) \\)`,
      ],
      answer: "B",
      solution: `<img src="/images/quiz/wqt-ds1/9.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p>Match Column A with Column B. Column B represents asymptotic time complexity of loops in Column A<br> \$\$ \\begin{array}{|l|l|} \\hline \\qquad&nbsp;\\quad \\textbf {Column A} &amp; \\textbf {Column B} \\\\ \\hline a) \\quad&nbsp;{\\color{Purple} {\\textbf{for} }}&nbsp;\\left(\\mathrm{i}={\\color{Blue} {1}} ; \\mathrm{i}^{*} \\mathrm{i}&lt;=\\mathrm{N} ; \\mathrm{i}={\\color{Green} {2}}^{*} \\mathrm{i}\\right) ; &amp; &nbsp;\\mathrm{i}) \\quad \\Theta(\\log N) \\\\ \\hline &nbsp;b) \\quad {\\color{Purple} {\\textbf{for} }} \\left(\\mathrm{i}={\\color{Blue} {1}} ; \\mathrm{i}&lt;=\\mathrm{N} ; \\mathrm{i}={\\color{Green} {2}}^{*} \\mathrm{i}\\right) &nbsp;&amp; &nbsp;\\mathrm{ii}) \\quad \\Theta(\\mathrm{N}) \\\\ \\quad \\qquad {\\color{Teal} {\\textbf{for} }} (\\mathrm{j}={\\color{Blue} {1}} ; \\mathrm{j}&lt;=\\mathrm{i} ; \\mathrm{j}=\\mathrm{j}+{\\color{Blue} {1}}) ; &amp; \\\\ \\hline c) \\quad {\\color{Purple} {\\textbf{for} }} \\left(\\mathrm{i}={\\color{Blue} {1}} ; \\mathrm{i}{ }^{*} \\mathrm{i}&lt;=\\mathrm{N} ; \\mathrm{i}=\\mathrm{i}+{\\color{Blue} {1}}\\right) &nbsp;&amp; \\mathrm{iii}) \\quad \\Theta(\\sqrt{N} \\log N) \\\\ \\qquad \\quad {\\color{Teal} {\\textbf{for} }} (\\mathrm{j}={\\color{Blue} {1}} ; \\mathrm{j}&lt;=\\mathrm{i} ; \\mathrm{j}=\\mathrm{j}+{\\color{Blue} {1}}) ; &amp; \\\\ \\hline d) \\quad {\\color{Purple} {\\textbf{for} }} \\left(\\mathrm{i}={\\color{Blue} {1}} ; \\mathrm{i}{ }^{*} \\mathrm{i}&lt;=\\mathrm{N} ; \\mathrm{i}=\\mathrm{i}+{\\color{Blue} {1}}\\right)&nbsp;&amp; iv) \\quad \\Theta(N \\log \\mathrm{N}) \\\\ \\qquad \\quad {\\color{Teal} {\\textbf{for} }} \\left(\\mathrm{j}={\\color{Blue} {1}} ; \\mathrm{j}&lt;=\\mathrm{i} ; \\mathrm{j}={\\color{Green} {2}}^{*} \\mathrm{j}\\right) ; &amp; \\\\ \\hline \\end{array} \$\$ </p> <p></p>`,
      image: "",
      options: [
        `\\( \\text{a-i, b-ii, c-iii, d-iv} \\)`,
        `\\( \\text{a-i, b-iv, c-ii, d-iii} \\)`,
        `\\( \\text{a-i, b-ii, c-ii, d-iii} \\)`,
        `None of these`,
      ],
      answer: "C",
      solution: `<img src="/images/quiz/wqt-ds1/10.png" style="max-width: 75%;">`
    },
  ]
});
registerTest({
  series: "weekly-cs-gate-2027",
  name: "WQT - Data Structure-2 | Linked List, Asymptotic Notation and Loop Time Complexity",
  date: "Oct 01, 2026",
  questions: [
    {
      marks: 1,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>If  \\( g(n)= \\Omega(n) \\) and  \\( h(n)=O(n) \\) then  \\( g(n) . h(n) \\) will be - </p> <p></p>`,
      image: "",
      options: [
        `\\( \\Theta(n) \\)<br>&nbsp;`,
        `\\( O(n) \\)<br>&nbsp;`,
        `\\( \\Omega(n) \\)<br>&nbsp;`,
        `None of these`,
      ],
      answer: ["D"],
      solution: `<img src="/images/quiz/wqt-ds2/1.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>Consider a linked list given in the figure below.</p> <p>What is the value of  \\( \\textsf{n} \\rightarrow&nbsp;\\textsf{next}\\rightarrow&nbsp;\\textsf{next}\\rightarrow&nbsp;\\textsf{next}\\rightarrow&nbsp;\\textsf{data}? \\) </p> <p>Where  \\( n \\) and head are pointers to the following struct type and intitallised as per the figure shown. </p> <pre class="prettyprint linenums lang-c_cpp prettyprinted" data-pbcklang="c_cpp" data-pbcktabsize="4" style=""><ol class="linenums"><li class="L0"><span class="kwd">struct</span><span class="pln"> node</span><span class="pun">{</span></li><li class="L1"><span class="pln">    </span><span class="kwd">int</span><span class="pln"> data</span><span class="pun">;</span></li><li class="L2"><span class="pln">    </span><span class="kwd">struct</span><span class="pln"> node </span><span class="pun">*</span><span class="kwd">next</span><span class="pun">;</span></li><li class="L3"><span class="pun">};</span></li></ol></pre> <p><strong><img alt="" src="/images/quiz/wqt-ds2/q2_img1.png" style="max-width: 75%;"></strong> </p> <p></p>`,
      image: "",
      options: [
        `\\( 10 \\)`,
        `\\( 20 \\)`,
        `\\( 30 \\)`,
        `\\( 40 \\)`,
      ],
      answer: "C",
      solution: `<img src="/images/quiz/wqt-ds2/2.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>Consider the following linked list which has nodes of a doubly linked list type.</p> <p><strong><img alt="" src="/images/quiz/wqt-ds2/q3_img2.png" style="max-width: 75%;"></strong> </p> <p>If we execute the following lines of code on a given linked list then what will be the output?</p> <pre class="prettyprint linenums lang-c_cpp prettyprinted" data-pbcklang="c_cpp" data-pbcktabsize="4" style=""><ol class="linenums"><li class="L0"><span class="pln">head</span><span class="pun">-&gt;</span><span class="pln">prev</span><span class="pun">-&gt;</span><span class="kwd">next</span><span class="pun">-&gt;</span><span class="kwd">next</span><span class="pln"> </span><span class="pun">=</span><span class="pln"> head</span><span class="pun">-&gt;</span><span class="kwd">next</span><span class="pun">-&gt;</span><span class="kwd">next</span><span class="pun">;</span></li><li class="L1"><span class="pln">head </span><span class="pun">=</span><span class="pln"> head</span><span class="pun">-&gt;</span><span class="pln">prev</span><span class="pun">-&gt;</span><span class="pln">prev</span><span class="pun">;</span></li><li class="L2"><span class="pln">head</span><span class="pun">-&gt;</span><span class="pln">prev </span><span class="pun">=</span><span class="pln"> head</span><span class="pun">;</span></li><li class="L3"><span class="pln">printf</span><span class="pun">(</span><span class="str">"%d"</span><span class="pun">,</span><span class="pln"> head</span><span class="pun">-&gt;</span><span class="pln">data</span><span class="pun">);</span></li></ol></pre> <p></p>`,
      image: "",
      options: [
        `\\( 2 \\)`,
        `\\( 15 \\)`,
        `\\( 10 \\)`,
        `\\( 13 \\)`,
      ],
      answer: "B",
      solution: `<img src="/images/quiz/wqt-ds2/3.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>Consider a function ReverseList() which has following protype -</p> <pre class="prettyprint linenums lang-c_cpp prettyprinted" data-pbcklang="c_cpp" data-pbcktabsize="4" style=""><ol class="linenums"><li class="L0"><span class="typ">Node</span><span class="pln"> </span><span class="pun">*</span><span class="typ">ReverseList</span><span class="pun">(</span><span class="typ">Node</span><span class="pln"> </span><span class="pun">*</span><span class="pln">p</span><span class="pun">)</span></li></ol></pre> <p>Function reverse the nodes in a given linked list.</p> <p>That is, head = ReverseList(head); will take a list held by head, reverse it and put back to head.</p> <pre class="prettyprint linenums lang-c_cpp prettyprinted" data-pbcklang="c_cpp" data-pbcktabsize="4" style=""><ol class="linenums"><li class="L0"><span class="typ">Node</span><span class="pln"> </span><span class="pun">*</span><span class="pln"> </span><span class="typ">ReverseList</span><span class="pun">(</span><span class="typ">Node</span><span class="pln"> </span><span class="pun">*</span><span class="pln"> p</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span></li><li class="L1"><span class="pln">    </span><span class="kwd">if</span><span class="pln"> </span><span class="pun">(!</span><span class="pln">p</span><span class="pun">)</span><span class="pln"> </span><span class="kwd">return</span><span class="pln"> NULL</span><span class="pun">;</span></li><li class="L2"><span class="pln">    </span><span class="kwd">if</span><span class="pln"> </span><span class="pun">(</span><span class="pln">p </span><span class="pun">-&gt;</span><span class="pln"> </span><span class="kwd">next</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span></li><li class="L3"><span class="pln">        </span><span class="typ">Node</span><span class="pln"> </span><span class="pun">*</span><span class="pln"> q </span><span class="pun">=</span><span class="pln"> </span><span class="typ">ReverseList</span><span class="pun">(</span><span class="pln">p </span><span class="pun">-&gt;</span><span class="pln"> </span><span class="kwd">next</span><span class="pun">);</span></li><li class="L4"><span class="pln">        p </span><span class="pun">-&gt;</span><span class="pln"> </span><span class="kwd">next</span><span class="pln"> </span><span class="pun">-&gt;</span><span class="pln"> </span><span class="kwd">next</span><span class="pln"> </span><span class="pun">=</span><span class="pln"> p</span><span class="pun">;</span></li><li class="L5"><span class="pln">        p </span><span class="pun">-&gt;</span><span class="pln"> </span><span class="kwd">next</span><span class="pln"> </span><span class="pun">=</span><span class="pln"> </span><span class="lit">0</span><span class="pun">;</span></li><li class="L6"><span class="pln">        </span><span class="kwd">return</span><span class="pln"> ______</span><span class="pun">;</span><span class="pln"> </span><span class="com">//Line X</span></li><li class="L7"><span class="pln">    </span><span class="pun">}</span></li><li class="L8"><span class="pln">    </span><span class="kwd">return</span><span class="pln"> ______</span><span class="pun">;</span><span class="pln"> </span><span class="com">//Line Y</span></li><li class="L9"><span class="pun">}</span></li></ol></pre> <p><br>Fill in the blanks for Line X and Line Y. If we say Line X is filled by  \\( p \\) then we consider Line X as  \\( \\textbf{return p;} \\) after filling the blank.<br>Line X and Line Y should be filled by which values respectively such that the function correctly reverses the given linked list. </p> <p></p>`,
      image: "",
      options: [
        `\\( p \\) and  \\( p \\rightarrow  \\) next`,
        `\\( p \\) and  \\( q \\)`,
        `\\( q \\rightarrow \\) next and  \\( p \\)`,
        `\\( q \\) and  \\( p \\)`,
      ],
      answer: "D",
      solution: `<img src="/images/quiz/wqt-ds2/4.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>The intent of the function below is to delete the last node of the list.</p> <pre class="prettyprint linenums lang-c_cpp prettyprinted" data-pbcklang="c_cpp" data-pbcktabsize="4" style=""><ol class="linenums"><li class="L0"><span class="kwd">void</span><span class="pln"> removeLast</span><span class="pun">(</span><span class="typ">Node</span><span class="pun">*</span><span class="pln"> first</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span></li><li class="L1"><span class="pln">    </span><span class="typ">Node</span><span class="pln"> </span><span class="pun">*</span><span class="pln">p</span><span class="pun">,</span><span class="pln"> </span><span class="pun">*</span><span class="pln">q</span><span class="pun">;</span></li><li class="L2"><span class="pln">    p </span><span class="pun">=</span><span class="pln"> first</span><span class="pun">;</span></li><li class="L3"><span class="pln">    q </span><span class="pun">=</span><span class="pln"> p</span><span class="pun">-&gt;</span><span class="kwd">next</span><span class="pun">;</span></li><li class="L4"><span class="pln">    </span><span class="kwd">while</span><span class="pln"> </span><span class="pun">(</span><span class="pln">q</span><span class="pun">-&gt;</span><span class="kwd">next</span><span class="pln"> </span><span class="pun">!=</span><span class="pln"> NULL</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span></li><li class="L5"><span class="pln">        p </span><span class="pun">=</span><span class="pln"> q</span><span class="pun">;</span></li><li class="L6"><span class="pln">        q </span><span class="pun">=</span><span class="pln"> q</span><span class="pun">-&gt;</span><span class="kwd">next</span><span class="pun">;</span></li><li class="L7"><span class="pln">    </span><span class="pun">}</span></li><li class="L8"><span class="pln">    p</span><span class="pun">-&gt;</span><span class="kwd">next</span><span class="pln"> </span><span class="pun">=</span><span class="pln"> NULL</span><span class="pun">;</span></li><li class="L9"><span class="pln">    free</span><span class="pun">(</span><span class="pln">q</span><span class="pun">);</span></li><li class="L0"><span class="pun">}</span></li></ol></pre> <p>Which of the following describes the class of all linked lists for which this function works correctly? </p> <p></p>`,
      image: "",
      options: [
        `No linked lists`,
        `All non-empty linked lists`,
        `All linked lists with more than one node`,
        `The empty list and all linked lists with more than one node`,
      ],
      answer: "C",
      solution: `<img src="/images/quiz/wqt-ds2/5.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>Which of the following statement is/are FALSE? Assume that  \\( \\log \\) base is  \\( 2 \\) in all options. </p> <p></p>`,
      image: "",
      options: [
        `\\( 8^{\\log \\left(n^{2}\\right)} \\in \\Theta\\left(n^{6}\\right) \\) <br>&nbsp;`,
        `If  \\( f, g \\), and  \\( h \\) are functions from the natural numbers to the non-negative real numbers with  \\( f(n) \\geq g(n) \\forall n \\geq 1, f(n) \\in \\Theta(h(n)) \\), and \\( g(n) \\in \\Theta(h(n)) \\), then  \\( (f(n)-g(n)) \\in \\Theta(h(n)) \\)<br>&nbsp;`,
        `\\( (\\log n)^{a} \\) is  \\( \\mathrm{O}\\left(n^{&nbsp;b}\\right) \\) for any constant  \\( a \\), and for any constant  \\( b&gt;0 \\)<br>&nbsp;`,
        `\\( T(n) = O(f(n)) \\) and  \\( g(n) \\) is a function whose value is never negative then  \\( g(n) T(n) \\) is  \\( O(g(n) f(n)) \\)`,
      ],
      answer: ["B"],
      solution: `<img src="/images/quiz/wqt-ds2/6.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p>Consider Iterated logarithm of  \\( n \\), written log  \\( { }^{\\star} n \\). Defined as below.<br> \$\$ \\lg ^{*} N=\\min \\{k \\mid \\underbrace{\\lg \\lg \\cdots \\lg }_{k} N \\leq 1\\} \$\$ <br>Which of the following is TRUE? </p> <p>(log base can be considered as any constant)</p> <p></p>`,
      image: "",
      options: [
        `\\( \\lg \\lg { }^{*} n=o\\left(\\lg ^{*} \\lg n\\right) \\) here o is small oh`,
        `\\( \\lg ^{*} \\lg n=o\\left(\\lg \\lg ^{*} n\\right) \\) here  \\( o \\) is small oh`,
        `\\( \\lg ^{*} \\lg n=\\boldsymbol{\\Theta}\\left(\\lg \\lg { }^{*} n\\right) \\)`,
        `\\( \\lg ^{\\star} \\lg n \\) and  \\( \\lg \\lg ^{\\ast} n \\) are not comparable`,
      ],
      answer: "A",
      solution: `<img src="/images/quiz/wqt-ds2/7.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p>Arrange the following functions in their increasing order of growth.</p> <p> \\( \\left(\\begin{array}{c} \\text { If f(n) = O(g(n)&nbsp;and g(n) = O(h((n))&nbsp;then order is f(n), g(n), h(n).}&nbsp; \\end{array}\\right) \\) </p> <p>In all options  \\( \\log^{2}n \\) means  \\( (\\log n)^{2} \\) </p> <p></p>`,
      image: "",
      options: [
        `\\( 2^{\\log ^{2} n},&nbsp;\\qquad 4^{\\log n},\\qquad(\\sqrt{2})^{\\log n},\\qquad 5 \\sqrt{n} \\) <br>&nbsp;`,
        `\\( 4^{\\log n},\\qquad 2^{\\log ^{2} n},\\qquad 5 \\sqrt{n},\\qquad(\\sqrt{2})^{\\log n} \\) <br>&nbsp;`,
        `\\( 5 \\sqrt{n},\\qquad(\\sqrt{2})^{\\log n},\\qquad 4^{\\log n},\\qquad 2^{\\log ^{2} n} \\) <br>&nbsp;`,
        `\\( 5 \\sqrt{n},\\qquad 4^{\\log n},\\qquad 2^{\\log ^{2} n},\\qquad(\\sqrt{2})^{\\log n} \\)`,
      ],
      answer: "C",
      solution: `<img src="/images/quiz/wqt-ds2/8.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>Which of the following prints the last node of a circular (non empty) linked list?</p> <p>In all options, head is pointing to the first node of the circular (non empty) linked list.</p> <p></p>`,
      image: "",
      options: [
        `&nbsp; <pre class="prettyprint linenums lang-c_cpp prettyprinted" data-pbcklang="c_cpp" data-pbcktabsize="4" style=""><ol class="linenums"><li class="L0"><span class="kwd">struct</span><span class="pln"> node </span><span class="pun">*</span><span class="pln">current </span><span class="pun">=</span><span class="pln"> head</span><span class="pun">;</span></li><li class="L1"><span class="kwd">while</span><span class="pun">(</span><span class="pln">current</span><span class="pun">-&gt;</span><span class="kwd">next</span><span class="pun">!=</span><span class="pln">head</span><span class="pun">)</span></li><li class="L2"><span class="pln">current</span><span class="pun">=</span><span class="pln">current</span><span class="pun">-&gt;</span><span class="kwd">next</span><span class="pun">;</span></li><li class="L3"><span class="pln">printf</span><span class="pun">(</span><span class="str">"%d"</span><span class="pun">,</span><span class="pln"> current</span><span class="pun">-&gt;</span><span class="kwd">value</span><span class="pun">);</span></li></ol></pre>`,
        `&nbsp; <pre class="prettyprint linenums lang-c_cpp prettyprinted" data-pbcklang="c_cpp" data-pbcktabsize="4" style=""><ol class="linenums"><li class="L0"><span class="kwd">struct</span><span class="pln"> node </span><span class="pun">*</span><span class="pln">current </span><span class="pun">=</span><span class="pln"> head</span><span class="pun">-&gt;</span><span class="kwd">next</span><span class="pun">;</span></li><li class="L1"><span class="kwd">while</span><span class="pun">(</span><span class="pln">current</span><span class="pun">-&gt;</span><span class="kwd">next</span><span class="pun">!=</span><span class="pln">head</span><span class="pun">)</span></li><li class="L2"><span class="pln">current</span><span class="pun">=</span><span class="pln">current</span><span class="pun">-&gt;</span><span class="kwd">next</span><span class="pun">;</span></li><li class="L3"><span class="pln">printf</span><span class="pun">(</span><span class="str">"%d"</span><span class="pun">,</span><span class="pln"> current</span><span class="pun">-&gt;</span><span class="kwd">value</span><span class="pun">);</span></li></ol></pre>`,
        `&nbsp; <pre class="prettyprint linenums lang-c_cpp prettyprinted" data-pbcklang="c_cpp" data-pbcktabsize="4" style=""><ol class="linenums"><li class="L0"><span class="kwd">struct</span><span class="pln"> node </span><span class="pun">*</span><span class="pln">current </span><span class="pun">=</span><span class="pln"> head</span><span class="pun">;</span></li><li class="L1"><span class="kwd">while</span><span class="pun">(</span><span class="pln">current</span><span class="pun">!=</span><span class="pln">head</span><span class="pun">-&gt;</span><span class="kwd">next</span><span class="pun">)</span></li><li class="L2"><span class="pln">current</span><span class="pun">=</span><span class="pln">current</span><span class="pun">-&gt;</span><span class="kwd">next</span><span class="pun">;</span></li><li class="L3"><span class="pln">printf</span><span class="pun">(</span><span class="str">"%d"</span><span class="pun">,</span><span class="pln"> current</span><span class="pun">-&gt;</span><span class="kwd">value</span><span class="pun">);</span></li></ol></pre>`,
        `&nbsp; <pre class="prettyprint linenums lang-c_cpp prettyprinted" data-pbcklang="c_cpp" data-pbcktabsize="4" style=""><ol class="linenums"><li class="L0"><span class="kwd">struct</span><span class="pln"> node </span><span class="pun">*</span><span class="pln">current </span><span class="pun">=</span><span class="pln"> head</span><span class="pun">;</span></li><li class="L1"><span class="kwd">while</span><span class="pun">(</span><span class="pln">current</span><span class="pun">-&gt;</span><span class="pln">data</span><span class="pun">!=</span><span class="pln">head</span><span class="pun">-&gt;</span><span class="pln">data</span><span class="pun">)</span></li><li class="L2"><span class="pln">current</span><span class="pun">=</span><span class="pln">current</span><span class="pun">-&gt;</span><span class="kwd">next</span><span class="pun">;</span></li><li class="L3"><span class="pln">printf</span><span class="pun">(</span><span class="str">"%d"</span><span class="pun">,</span><span class="pln"> current</span><span class="pun">-&gt;</span><span class="kwd">value</span><span class="pun">);</span></li></ol></pre>`,
      ],
      answer: ["A", "B"],
      solution: `<img src="/images/quiz/wqt-ds2/9.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>Consider two programs given below. Consider a non-empty linked list which is either a circular or singly linked list.&nbsp; \\( \\text{P1} \\) and&nbsp; \\( \\text{P2} \\) are two programs which try to check if it is circular or not. Let&nbsp; \\( \\text{head} \\) point to the first node of the linked list. </p> <p> \\( \\text{P1} \\) takes the head of the linked list as its argument and  \\( \\text{P2} \\) takes head as the first argument and head-&gt;next as the second argument at the first call. </p> <pre class="prettyprint linenums lang-c_cpp prettyprinted" data-pbcklang="c_cpp" data-pbcktabsize="4" style=""><ol class="linenums"><li class="L0"><span class="kwd">int</span><span class="pln"> P1</span><span class="pun">(</span><span class="kwd">struct</span><span class="pln"> node</span><span class="pun">*</span><span class="pln"> head</span><span class="pun">)</span></li><li class="L1"><span class="pun">{</span></li><li class="L2"><span class="pln">    </span><span class="kwd">if</span><span class="pln"> </span><span class="pun">(</span><span class="pln">head</span><span class="pun">==</span><span class="kwd">null</span><span class="pun">)</span></li><li class="L3"><span class="pln">        </span><span class="kwd">return</span><span class="pln"> </span><span class="lit">1</span><span class="pun">;</span></li><li class="L4"><span class="pln">&nbsp;</span></li><li class="L5"><span class="pln">    </span><span class="kwd">struct</span><span class="pln"> node</span><span class="pun">*</span><span class="pln"> </span><span class="kwd">next</span><span class="pln"> </span><span class="pun">=</span><span class="pln"> head</span><span class="pun">-&gt;</span><span class="kwd">next</span><span class="pun">;</span></li><li class="L6"><span class="pln">&nbsp;</span></li><li class="L7"><span class="pln">    </span><span class="kwd">while</span><span class="pun">(</span><span class="kwd">next</span><span class="pun">!=</span><span class="kwd">null</span><span class="pln"> </span><span class="pun">&amp;&amp;</span><span class="pln"> </span><span class="kwd">next</span><span class="pln"> </span><span class="pun">!=</span><span class="pln">head</span><span class="pun">)</span></li><li class="L8"><span class="pln">    </span><span class="kwd">next</span><span class="pln"> </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">next</span><span class="pun">-&gt;</span><span class="kwd">next</span><span class="pun">;</span></li><li class="L9"><span class="pln">    </span><span class="kwd">return</span><span class="pln"> </span><span class="pun">(</span><span class="kwd">next</span><span class="pln"> </span><span class="pun">==</span><span class="pln"> head</span><span class="pun">);</span></li><li class="L0"><span class="pln">&nbsp;</span></li><li class="L1"><span class="pun">}</span></li></ol></pre> <pre class="prettyprint linenums lang-c_cpp prettyprinted" data-pbcklang="c_cpp" data-pbcktabsize="4" style=""><ol class="linenums"><li class="L0"><span class="kwd">int</span><span class="pln"> P2</span><span class="pun">(</span><span class="kwd">struct</span><span class="pln"> node</span><span class="pun">*</span><span class="pln"> head</span><span class="pun">,</span><span class="pln"> </span><span class="kwd">struct</span><span class="pln"> node</span><span class="pun">*</span><span class="pln"> cur</span><span class="pun">)</span></li><li class="L1"><span class="pun">{</span></li><li class="L2"><span class="pln">    </span><span class="kwd">if</span><span class="pln"> </span><span class="pun">(</span><span class="pln">head</span><span class="pun">==</span><span class="kwd">null</span><span class="pun">)</span></li><li class="L3"><span class="pln">        </span><span class="kwd">return</span><span class="pln"> </span><span class="lit">1</span><span class="pun">;</span></li><li class="L4"><span class="pln">&nbsp;</span></li><li class="L5"><span class="pln">    </span><span class="kwd">if</span><span class="pun">(</span><span class="pln">cur</span><span class="pun">==</span><span class="kwd">null</span><span class="pun">)</span></li><li class="L6"><span class="pln">        </span><span class="kwd">return</span><span class="pln"> </span><span class="lit">0</span><span class="pun">;</span></li><li class="L7"><span class="pln">&nbsp;</span></li><li class="L8"><span class="pln">    </span><span class="kwd">if</span><span class="pun">(</span><span class="pln">head</span><span class="pun">==</span><span class="pln">cur</span><span class="pun">)</span></li><li class="L9"><span class="pln">        </span><span class="kwd">return</span><span class="pln"> </span><span class="lit">1</span><span class="pun">;</span></li><li class="L0"><span class="pln">&nbsp;</span></li><li class="L1"><span class="pln">    </span><span class="kwd">return</span><span class="pln"> P2</span><span class="pun">(</span><span class="pln">head</span><span class="pun">,</span><span class="pln"> cur</span><span class="pun">-&gt;</span><span class="kwd">next</span><span class="pun">);</span></li><li class="L2"><span class="pun">}</span></li></ol></pre> <p>Which of the following is/are true?</p> <p></p>`,
      image: "",
      options: [
        `\\( \\text{P1} \\) returns  \\( 1 \\) if given linked list is circular`,
        `\\( \\text{P2} \\) returns  \\( 1 \\) if given linked list is circular`,
        `\\( \\text{P1} \\) returns  \\( 1 \\) if given linked list is having even number of nodes`,
        `\\( \\text{P2} \\) returns  \\( 1 \\) if given linked list is having even number of nodes`,
      ],
      answer: ["A", "B"],
      solution: `<img src="/images/quiz/wqt-ds2/10.png" style="max-width: 75%;">`
    },
  ]
});
registerTest({
  series: "weekly-cs-gate-2027",
  name: "WQT - Data Structure-3 | Stack and Queue and Asymptotic Notation and Loop Time Complexity",
  date: "Oct 01, 2026",
  questions: [
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p>Consider the implementation of a stack of which is based on dynamic array allocation using malloc in C programming. This implementation allows us to push more elements than the current array capacity. It works as follows.</p> <p>Suppose the array is full, then to push the next element we first allocate a new array of larger size using malloc, copy all elements to the new array, and free up the old array memory.</p> <p>When a dynamic array-based stack becomes full, you increase the array size by the following sequence \\( k, 2 k, 3 k, 4 k, \\dots \\) for some positive constant  \\( k \\). Which means the first time we increase the size by  \\( k \\), next time by  \\( 2 k \\), and so on. </p> <p>If you have an empty stack that uses an array whose initial size is  \\( k \\), and you perform  \\( n \\) pushes (assume that  \\( n&gt;k) \\). What is the total cost complexity of executing n push operations?<br>Let&nbsp;cost of expanding from  \\( k \\) to  \\( 2 k \\) has  \\( 2 k \\) cost, similarly cost of expanding from \\( 2 k \\) to  \\( 3&nbsp;k \\) has  \\( 3&nbsp;k \\) cost. </p> <p></p>`,
      image: "",
      options: [
        `\\( O\\left(n^ 2 / k\\right) \\)<br>&nbsp;`,
        `\\( O(n / k) \\)<br>&nbsp;`,
        `\\( O\\left(n^ 2 k\\right) \\)<br>&nbsp;`,
        `\\( O(n k) \\)`,
      ],
      answer: "A",
      solution: `<img src="/images/quiz/wqt-ds3/1.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p>Given a circular array-based queue capable of holding  \\( 100 \\) objects. Suppose the queue is initially empty, and then objects are put into the queue at the rate of  \\( 10 \\) per minute while meantime they are processed and removed from the queue at the rate of  \\( 5 \\) per minute. After  \\( 120 \\) elements have been added to the queue, which of the following is true? </p> <p></p>`,
      image: "",
      options: [
        `You can't add  \\( 120 \\) elements to an array holding  \\( 100 \\) entries.<br>&nbsp;`,
        `There will be  \\( 60 \\) elements in the queue,  \\( 20 \\) of them at the front of the array where the queue started, and  \\( 40 \\) at the other end.<br>&nbsp;`,
        `There will be  \\( 60 \\) elements in the queue,  \\( 30 \\) of them at the front of the array where the queue started, and  \\( 30 \\) at the other end.<br>&nbsp;`,
        `There will be  \\( 60 \\) elements in the queue,  \\( 40 \\) of them at the front of the array where the queue started, and  \\( 20 \\) at the other end.`,
      ],
      answer: "B",
      solution: `<img src="/images/quiz/wqt-ds3/2.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p>Consider the memory allocation of  \\( \\mathrm{M} \\) blocks. </p> <p>Stack \\( 1 \\) growing from block  \\( 0 \\) up toward block  \\( \\mathrm{M} - 1 \\) and Stack \\( 2 \\) growing from block  \\( \\mathrm{M}-1 \\) down to block  \\( 0. \\) </p> <p>Let Top \\( 1 \\) (initialized to  \\( -1) \\) and Top \\( 2\\; ( \\) initialized&nbsp;to  \\( \\mathrm{M}) \\) be the tops of the stacks. For example, after  \\( 2 \\) calls to PushStack \\( 1 \\) (data) that allocates elements in Stack \\( 1 \\) followed by  \\( 1 \\) call to PushStack \\( 2 \\) (data) that allocates elements in Stack \\( 2, \\) the memory that was initially all free blocks now has  \\( 3 \\) allocated blocks as per the figure: </p> <p style="text-align:center"><img alt="" src="/images/quiz/wqt-ds3/q3_img1.png" style="max-width: 75%;"></p> <p>If Stack \\( 1 \\) was replaced by a circular queue with Front and Rear pointers, then which of the following is true regarding memory utilization? </p> <p></p>`,
      image: "",
      options: [
        `you may not be able to add/push into the stack even when there are some free blocks in the memory.<br>&nbsp;`,
        `you may not be able to add/enqueue into the queue even when there are some free blocks in the memory.<br>&nbsp;`,
        `Stack and queue both can be implemented with efficient memory utilization.<br>&nbsp;`,
        `This implementation is not possible.`,
      ],
      answer: "A",
      solution: `<img src="/images/quiz/wqt-ds3/3.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p>Suppose that we want to design a data structure called Mx-Queue that supports ONLY three&nbsp;operations as follows:</p> <p>Enqueue(x) –&nbsp;It is a standard queue operation that equeue element x into the queue.</p> <p>Dequeue() –&nbsp;It is a standard queue operation that dequeue&nbsp;from front of the queue.</p> <p>FIND-MAX() –&nbsp;It is one extra operation that&nbsp;Mx-Queue&nbsp;supports which&nbsp;finds the maximum element from MX-Queue without removing it in&nbsp; \\( \\mathrm{O}(1) \\) time. </p> <p>To fulfill the purpose we use one more&nbsp;auxiliary data structure along with a standard queue.</p> <p>There are two choices of&nbsp;auxiliary data structures are available to us.&nbsp; (See figure for visual representation)</p> <ul> <li>QueueStack</li> <li>Queue</li> </ul> <p>QueueStack&nbsp;is a data structure that has the special privilege of removing elements from the rear of the queue.</p> <p>&nbsp;</p> <p><img alt="" src="/images/quiz/wqt-ds3/q4_img2.png" style="max-width: 75%;"></p> <p>we call the following functions Insert() and Delete() to add or remove elements into or from&nbsp;Mx-Queue.</p> <pre class="prettyprint linenums lang-c_cpp prettyprinted" data-pbcklang="c_cpp" data-pbcktabsize="4" style=""><ol class="linenums"><li class="L0"><span class="typ">Insert</span><span class="pun">(</span><span class="typ">Mx</span><span class="pun">-</span><span class="typ">Queue</span><span class="pun">,</span><span class="pln">x</span><span class="pun">):</span><span class="pln"> </span></li><li class="L1"><span class="pln">   </span><span class="typ">Enqueue</span><span class="pun">(</span><span class="typ">Mx</span><span class="pun">-</span><span class="typ">Queue</span><span class="pun">,</span><span class="pln"> X</span><span class="pun">)</span></li><li class="L2"><span class="pln">   </span><span class="com">//Do something with auxiliary data structure</span></li><li class="L3"><span class="typ">End</span></li><li class="L4"><span class="pln">&nbsp;</span></li><li class="L5"><span class="pln">&nbsp;</span></li><li class="L6"><span class="typ">Delete</span><span class="pun">(</span><span class="typ">Mx</span><span class="pun">-</span><span class="typ">Queue</span><span class="pun">):</span><span class="pln"> </span></li><li class="L7"><span class="pln">    x </span><span class="pun">=</span><span class="pln"> </span><span class="typ">Dequeue</span><span class="pun">(</span><span class="typ">Mx</span><span class="pun">-</span><span class="typ">Queue</span><span class="pun">)</span></li><li class="L8"><span class="pln">    </span><span class="com">//Do something with auxiliary data structure</span></li><li class="L9"><span class="pln">    </span><span class="typ">Return</span><span class="pln"> x </span></li><li class="L0"><span class="typ">End</span></li></ol></pre> <p>One of the&nbsp;Insert or Delete works in linear time and the other one works in constant time.</p> <p>Choose the correct option.</p> <ul> <li> \\( \\text{S1}: \\) We can implement Mx-Queue by using one&nbsp;Queue and QueueStack data Structure. </li> <li> \\( \\text{S2}: \\) We can implement Mx-Queue by using two Queue data Structures. </li> </ul> <p></p>`,
      image: "",
      options: [
        `\\( \\text{S1} \\) is correct but  \\( \\text{S2} \\) is incorrect`,
        `\\( \\text{S1} \\) is incorrect but  \\( \\text{S2} \\) is correct`,
        `Both are correct`,
        `Both are incorrect`,
      ],
      answer: "A",
      solution: `<img src="/images/quiz/wqt-ds3/4.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>Imagine four railroad cars positioned on the input side of the track in the figure below, numbered  \\( 1, 2, 3, \\) and  \\( 4, \\) from left to right. Suppose we perform the following sequence of operations (which is compatible with the direction of the arrows in the diagram and does not require cars to ”jump over” other cars): </p> <ol start="1" style="list-style-type:lower-alpha"> <li>move car  \\( 1 \\) into the stack; </li> <li>move car  \\( 2 \\) into the stack; </li> <li>move car  \\( 2 \\) into the output; </li> <li>move car  \\( 3 \\) into the stack; </li> <li>move car  \\( 4 \\) into the stack; </li> <li>move car  \\( 4 \\) into the output; </li> <li>move car  \\( 3 \\) into the output; </li> <li>move car  \\( 1 \\) into the output. </li> </ol> <p><strong><img alt="" src="/images/quiz/wqt-ds3/q5_img3.png" style="max-width: 75%;"></strong><br>As a result of these operations the original order of the cars,  \\( 1234, \\) has been changed into  \\( 2431. \\)<br>If there are six railroad cars numbered  \\( 123456, \\) Which of the following statements is/are correct? </p> <p></p>`,
      image: "",
      options: [
        `They can’t be permuted into the order  \\( 154623 \\)<br>&nbsp;`,
        `They can be permuted into the order  \\( 254613 \\)<br>&nbsp;`,
        `They can’t be permuted into the order  \\( 654123 \\)<br>&nbsp;`,
        `They can be permuted into the order  \\( 325641 \\)`,
      ],
      answer: ["A", "C", "D"],
      solution: `<img src="/images/quiz/wqt-ds3/5.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p>A deque (”double-ended queue”) is a linear list for which all the insertions and deletions (and usually all accesses) are made at the ends of the list.</p> <p>The difference between Queue and Deque is that it does not follow the FIFO (First In, First Out) approach. The second feature of Deque is that we can insert and remove elements from either front or rear ends.</p> <p>An output-restricted deque is a linear list in which deletions are allowed to take place at only one end but insertion is allowed at both ends.</p> <p>An input-restricted deque is a linear list in which items may be inserted at one end but removed from either end; clearly, an input-restricted deque can operate either as a stack or as a queue if we consistently remove all items from one of the two ends.</p> <p>The figure shows types of queues pictorially.</p> <p style="text-align:center"><img alt="" src="/images/quiz/wqt-ds3/q6_img4.png" style="max-width: 75%;"></p> <p><br>An output-restricted deque can be operated as</p> <p></p>`,
      image: "",
      options: [
        `Only Stack`,
        `Only Queue`,
        `Either as a stack or as a queue`,
        `Neither as a stack nor as a queue`,
      ],
      answer: "C",
      solution: `<img src="/images/quiz/wqt-ds3/6.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p>Suppose, you have proposed an optimal algorithm which uses extra stack(s) to design a stack such that \\( \\textsf{GetMinimum()} \\) should be  \\( O(1) \\) for n number of elements. </p> <p>Consider the following statements:</p> <ul> <li> \\( \\text{S1} : \\) Minimum number of extra stack(s)  \\( : 1 \\) </li> <li> \\( \\text{S2} : \\) Time Complexity  \\( : O(1) \\) </li> <li> \\( \\text{S3} : \\) Space Complexity  \\( : O(n) \\) </li> </ul> <p>Which of the following is/are correct?</p> <p></p>`,
      image: "",
      options: [
        `Both  \\( \\text{S1} \\) and  \\( \\text{S2} \\) are correct but not  \\( \\text{S3} \\)`,
        `Both  \\( \\text{S1} \\) and  \\( \\text{S3} \\) are correct but not  \\( \\text{S2} \\)`,
        `Both  \\( \\text{S2} \\) and  \\( \\text{S3} \\) are correct but not  \\( \\text{S1} \\)`,
        `\\( \\text{S1, S2} \\) and  \\( \\text{S3} \\) are correct`,
      ],
      answer: "D",
      solution: `<img src="/images/quiz/wqt-ds3/7.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p>We have an implementation that supports the following operations on a stack (in the instructions below, \\( s \\) is the name of the stack). </p> <ul> <li> \\( \\text{isempty(s) :} \\) returns True if  \\( s \\) is empty, and False otherwise. </li> <li> \\( \\text{top(s) :} \\) returns the top element of the stack, but does not pop the stack; returns null if the stack is empty. </li> <li> \\( \\text{push(s, x) :} \\) places  \\( x \\) on top of the stack. </li> <li> \\( \\text{pop(s) :} \\) pops the stack; does nothing if  \\( s \\) is empty. </li> </ul> <p>Consider the following code:</p> <pre class="prettyprint linenums lang-c_cpp prettyprinted" data-pbcklang="c_cpp" data-pbcktabsize="4" style=""><ol class="linenums"><li class="L0"><span class="pln">push_pop </span><span class="pun">(</span><span class="pln">x</span><span class="pun">)</span><span class="pln"> </span><span class="pun">:</span></li><li class="L1"><span class="pln">    s</span><span class="pun">=</span><span class="pln">empty</span></li><li class="L2"><span class="pln">    </span><span class="kwd">for</span><span class="pln"> i</span><span class="pun">=</span><span class="lit">1</span><span class="pln"> to length </span><span class="pun">(</span><span class="pln"> x </span><span class="pun">)</span><span class="pln"> </span><span class="pun">:</span></li><li class="L3"><span class="pln">        </span><span class="kwd">if</span><span class="pln"> </span><span class="pun">(</span><span class="pln"> x </span><span class="pun">[</span><span class="pln">i</span><span class="pun">]</span><span class="pln"> </span><span class="pun">==</span><span class="pln"> </span><span class="pun">’(’</span><span class="pln"> </span><span class="pun">)</span><span class="pln"> </span><span class="pun">:</span></li><li class="L4"><span class="pln">            push </span><span class="pun">(</span><span class="pln"> s </span><span class="pun">,</span><span class="pln"> x </span><span class="pun">[</span><span class="pln"> i </span><span class="pun">]</span><span class="pln"> </span><span class="pun">)</span></li><li class="L5"><span class="pln">        </span><span class="kwd">else</span><span class="pln"> </span><span class="pun">:</span></li><li class="L6"><span class="pln">            </span><span class="kwd">while</span><span class="pln"> </span><span class="pun">(</span><span class="pln"> top </span><span class="pun">(</span><span class="pln">s</span><span class="pun">)==</span><span class="pln"> </span><span class="pun">’</span><span class="pln"> </span><span class="pun">(</span><span class="pln"> </span><span class="pun">’</span><span class="pln"> </span><span class="pun">)</span><span class="pln"> </span><span class="pun">:</span></li><li class="L7"><span class="pln">                pop </span><span class="pun">(</span><span class="pln"> s </span><span class="pun">)</span></li><li class="L8"><span class="pln">            </span><span class="kwd">end</span><span class="pln"> </span><span class="kwd">while</span></li><li class="L9"><span class="pln">            push </span><span class="pun">(</span><span class="pln"> s </span><span class="pun">,</span><span class="pln"> </span><span class="pun">’</span><span class="pln"> </span><span class="pun">)</span><span class="pln"> </span><span class="pun">’</span><span class="pln"> </span><span class="pun">)</span></li><li class="L0"><span class="pln">            push </span><span class="pun">(</span><span class="pln"> s </span><span class="pun">,</span><span class="pln"> </span><span class="pun">’</span><span class="pln"> </span><span class="pun">(</span><span class="pln"> </span><span class="pun">’</span><span class="pln"> </span><span class="pun">)</span></li><li class="L1"><span class="pln">        </span><span class="kwd">end</span><span class="pln"> </span><span class="kwd">if</span></li><li class="L2"><span class="pln">    </span><span class="kwd">end</span><span class="pln"> </span><span class="kwd">for</span></li><li class="L3"><span class="pln">    </span><span class="kwd">while</span><span class="pln"> </span><span class="kwd">not</span><span class="pln"> isempty </span><span class="pun">(</span><span class="pln"> s </span><span class="pun">)</span><span class="pln"> </span><span class="pun">:</span></li><li class="L4"><span class="pln">        </span><span class="kwd">print</span><span class="pln"> top</span><span class="pun">(</span><span class="pln">s</span><span class="pun">)</span></li><li class="L5"><span class="pln">        pop </span><span class="pun">(</span><span class="pln">s</span><span class="pun">)</span></li><li class="L6"><span class="pln">    </span><span class="kwd">end</span><span class="pln"> </span><span class="kwd">while</span></li></ol></pre> <p><br>What is the output of this program when  \\( \\text{push pop(”(((()((())((((”)} \\) is executed? </p> <p></p>`,
      image: "",
      options: [
        `\\( )())(((( \\)`,
        `\\( ((((())( \\)`,
        `\\( ((((())) \\)`,
        `\\( )())(()) \\)`,
      ],
      answer: "C",
      solution: `<img src="/images/quiz/wqt-ds3/8.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p>Consider the following queue of characters, where QUEUE is a circular array which is allocated  \\( 6 \\) memory cells with indexing starting from \\( 1. \\)<br>Consider the below status of Queue where Front and Rear stores  \\( 2 \\) and  \\( 4 \\) respectively.<br><strong><img alt="" src="/images/quiz/wqt-ds3/q9_img5.png" style="max-width: 75%;"></strong><br>Five sequences of operations have been performed on the current status of queue as described below. </p> <ol style="list-style-type:upper-roman"> <li> \\( \\text{‘F’} \\) is added to the queue </li> <li>Two items are removed</li> <li> \\( \\text{‘K’, ‘L’} \\) and  \\( \\text{‘M’} \\) are added </li> <li>Two items are deleted</li> <li> \\( \\text{‘R’} \\) is added to the queue </li> </ol> <p>What will be the final value of Front and Rear respectively?</p> <p></p>`,
      image: "",
      options: [
        `Front  \\( = 2, \\) Rear  \\( = 5 \\)`,
        `Front  \\( = 4, \\) Rear  \\( = 5 \\)`,
        `Front  \\( = 6, \\) Rear  \\( = 2 \\)`,
        `Front  \\( = 6, \\) Rear  \\( = 3 \\)`,
      ],
      answer: "D",
      solution: `<img src="/images/quiz/wqt-ds3/9.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>A stack of int is implemented using an array as the following data type:</p> <pre class="prettyprint linenums lang-c_cpp prettyprinted" data-pbcklang="c_cpp" data-pbcktabsize="4" style=""><ol class="linenums"><li class="L0"><span class="com">#define</span><span class="pln"> SIZE </span><span class="lit">20</span></li><li class="L1"><span class="kwd">typedef</span><span class="pln"> </span><span class="kwd">struct</span><span class="pln"> </span><span class="pun">{</span></li><li class="L2"><span class="pln">    </span><span class="kwd">int</span><span class="pln"> data</span><span class="pun">[</span><span class="pln">SIZE</span><span class="pun">];</span></li><li class="L3"><span class="pln">    </span><span class="kwd">int</span><span class="pln"> top</span><span class="pun">;</span></li><li class="L4"><span class="pun">}</span><span class="pln"> </span><span class="typ">Stack</span><span class="pun">;</span></li></ol></pre> <p>Fill up the missing codes in the  \\( \\textsf{PUSH, POP}, \\) and  \\( \\textsf{TOP} \\) operations of the Stack. </p> <p>Ignore underflow or overflow of stack in case of pop and push respectively. You can assume that&nbsp;underflow or overflow are handled before calling pop or push.</p> <pre class="prettyprint linenums lang-c_cpp prettyprinted" data-pbcklang="c_cpp" data-pbcktabsize="4" style=""><ol class="linenums"><li class="L0"><span class="kwd">void</span><span class="pln"> </span><span class="typ">Push</span><span class="pun">(</span><span class="typ">Stack</span><span class="pln"> </span><span class="pun">*</span><span class="pln">s</span><span class="pun">,</span><span class="pln"> </span><span class="kwd">int</span><span class="pln"> d</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span></li><li class="L1"><span class="pln">    </span><span class="com">// line X</span></li><li class="L2"><span class="pun">}</span></li><li class="L3"><span class="kwd">void</span><span class="pln"> </span><span class="typ">Pop</span><span class="pun">(</span><span class="typ">Stack</span><span class="pln"> </span><span class="pun">*</span><span class="pln">s</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span></li><li class="L4"><span class="pln">    </span><span class="com">// line Y</span></li><li class="L5"><span class="pun">}</span></li><li class="L6"><span class="kwd">int</span><span class="pln"> </span><span class="typ">Top</span><span class="pun">(</span><span class="typ">Stack</span><span class="pln"> </span><span class="pun">*</span><span class="pln">s</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span></li><li class="L7"><span class="pln">    </span><span class="com">// line Z</span></li><li class="L8"><span class="pun">}</span></li></ol></pre> <p></p>`,
      image: "",
      options: [
        `<pre class="prettyprint linenums lang-c_cpp prettyprinted" data-pbcklang="c_cpp" data-pbcktabsize="4" style=""><ol class="linenums"><li class="L0"><span class="pln">line X should be s</span><span class="pun">-&gt;</span><span class="pln">data</span><span class="pun">[++</span><span class="pln">s</span><span class="pun">-&gt;</span><span class="pln">top</span><span class="pun">]</span><span class="pln"> </span><span class="pun">=</span><span class="pln"> d</span><span class="pun">;</span></li></ol></pre>`,
        `<pre class="prettyprint linenums lang-c_cpp prettyprinted" data-pbcklang="c_cpp" data-pbcktabsize="4" style=""><ol class="linenums"><li class="L0"><span class="pln">line Y should be </span><span class="pun">--</span><span class="pln">s</span><span class="pun">-&gt;</span><span class="pln">top</span><span class="pun">;</span></li></ol></pre>`,
        `<pre class="prettyprint linenums lang-c_cpp prettyprinted" data-pbcklang="c_cpp" data-pbcktabsize="4" style=""><ol class="linenums"><li class="L0"><span class="pln">line Z should be </span><span class="kwd">return</span><span class="pln"> s</span><span class="pun">-&gt;</span><span class="pln">data</span><span class="pun">[</span><span class="pln">s</span><span class="pun">-&gt;</span><span class="pln">top</span><span class="pun">]</span></li></ol></pre>`,
        `None of these`,
      ],
      answer: ["A", "B", "C"],
      solution: `<img src="/images/quiz/wqt-ds3/10.png" style="max-width: 75%;">`
    },
  ]
});

registerTest({
  series: "weekly-cs-gate-2027",
  name: "WQT - Data Structure-4 | Complete Data Structure ",
  date: "Oct 01, 2026",
  questions: [
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>In-order traversing a tree resulted in  \\( \\text{E A C K F H D B G}; \\) the preorder traversal would return. </p> <p></p>`,
      image: "",
      options: [
        `\\( \\text{F A E K C D B H G} \\)<br>&nbsp;`,
        `\\( \\text{F A E K C D H G B} \\)<br>&nbsp;`,
        `\\( \\text{E A F K H D C B G} \\)<br>&nbsp;`,
        `\\( \\text{F E A K D C H B G} \\)`,
      ],
      answer: "B",
      solution: `<img src="/images/quiz/wqt-ds4/1.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>Let  \\( \\mathrm{C}(\\mathrm{X}) \\) be the number of leaves in a binary tree rooted at  \\( \\mathrm{T} \\). Assume that  \\( \\mathrm{IsLeaf (T)} \\) returns  \\( 1 \\) if  \\( \\mathrm{T} \\) is a leaf. Which of the following observations leads to a recursive implementation? </p> <p></p>`,
      image: "",
      options: [
        `\\( \\mathrm{C(T):=C(T . Left )+C( T. Right )} \\) <br>&nbsp;`,
        `\\( \\mathrm{C(T):=C(T . Left )+C(T. Right )+1} \\) <br>&nbsp;`,
        `\\( \\mathrm{C(T):=C(T . Left )+C(T. Right )+ IsLeaf (T)} \\)<br>&nbsp;`,
        `\\( \\mathrm{C(T):=C(T . Left )+C(T . Right )+ IsLeaf (T)+1} \\)`,
      ],
      answer: "C",
      solution: `<img src="/images/quiz/wqt-ds4/2.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p>Suppose that a binary min-heap stores six elements with priorities  \\( 10, 20, 30, 40, 50, \\) and  \\( 60 \\) in its array  \\( \\text{A}. \\) What is the largest of these items that could be stored in  \\( \\text{A}[1]? \\) (indexing starts from zero) </p> <p></p>`,
      image: "",
      options: [
        `\\( 20 \\)<br>&nbsp;`,
        `\\( 30 \\)<br>&nbsp;`,
        `\\( 40 \\)<br>&nbsp;`,
        `\\( 50 \\)`,
      ],
      answer: "C",
      solution: `<img src="/images/quiz/wqt-ds4/3.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p>Suppose you wanted to insert the following elements into a binary search tree of integers:  \\( 90,3,16,7,12,38,50 \\). Which of the following insertion orders will result in a <em>complete binary tree?</em> </p> <p></p>`,
      image: "",
      options: [
        `\\( 16,7,3,12,50,38,90 \\)<br>&nbsp;`,
        `\\( 16,38,3,12,50,90,7 \\)<br>&nbsp;`,
        `\\( 7,16,3,90,12,50,38 \\)<br>&nbsp;`,
        `\\( 16,3,12,50,90,7,38 \\)`,
      ],
      answer: "A",
      solution: `<img src="/images/quiz/wqt-ds4/4.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>In a level order traversal of a tree, nodes are traversed level-wise from the root and left to right in a level. For example, the level order traversal of the binary tree shown below is  \\( \\mathrm{X}, \\mathrm{Y}, \\mathrm{Z}, \\mathrm{E}, \\mathrm{C}, \\mathrm{D}, \\mathrm{A}, \\mathrm{B} \\) . </p> <p style="text-align:center"><img alt="" src="/images/quiz/wqt-ds4/q5_img1.png" style="max-width: 75%;"></p> <p><br>Which one of the following combinations uniquely defines a binary tree?</p> <p></p>`,
      image: "",
      options: [
        `Level-order and pre-order traversals<br>&nbsp;`,
        `Level-order and in-order traversals<br>&nbsp;`,
        `Level-order and post-order traversals<br>&nbsp;`,
        `Pre-order and post-order traversals`,
      ],
      answer: ["B"],
      solution: `<img src="/images/quiz/wqt-ds4/5.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p>We consider log to the base of  \\( 2. \\) Thus for  \\( \\log \\mathrm{N} \\) to be a natural number,  \\( \\mathrm{N} \\) must be a power of  \\( 2. \\) Let  \\( \\mathrm{N} \\) be an arbitrary number with  \\( \\mathrm{N}&gt;1 \\). Which one of the following statements is true? (Assume root is at height zero) </p> <p></p>`,
      image: "",
      options: [
        `A binary tree of height  \\( \\log \\mathrm{N} \\) can have exactly  \\( \\mathrm{N} \\) nodes.<br>&nbsp;`,
        `A binary tree of height  \\( \\log \\mathrm{N} \\) can have exactly  \\( \\log \\mathrm{N} \\) nodes.<br>&nbsp;`,
        `A binary tree of height  \\( \\log \\mathrm{N} \\) can have exactly  \\( \\mathrm{N} \\log \\mathrm{N} \\) nodes.<br>&nbsp;`,
        `A binary tree of height  \\( \\log \\mathrm{N} \\) can have exactly  \\( \\mathrm{N}^{2} \\) nodes.`,
      ],
      answer: "A",
      solution: `<img src="/images/quiz/wqt-ds4/6.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p>Consider the following equation, where  \\( \\mathrm{N} \\) is the number of nodes in a particular binary search tree, and  \\( d\\left(x_{i}\\right) \\) is the depth of node  \\( x_{i} \\) in the tree. What does this equation compute? </p> <p>Let All nodes in the tree are equally likely to be searched for.<br> \$\$  \\left(\\sum_{i=1}^{\\mathrm{N}} d\\left(x_{i}\\right)\\right) / \\mathrm{N}  \$\$ </p> <p></p>`,
      image: "",
      options: [
        `The average depth of a node in a specific BST with  \\( \\mathrm{N} \\) nodes<br>&nbsp;`,
        `The average depth of a node in the average BST with  \\( \\mathrm{N} \\) nodes<br>&nbsp;`,
        `The total depth of all nodes in a specific BST with  \\( \\mathrm{N} \\) nodes<br>&nbsp;`,
        `The average total depth of all nodes in all BSTs with  \\( \\mathrm{N} \\) nodes`,
      ],
      answer: "A",
      solution: `<img src="/images/quiz/wqt-ds4/7.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>Suppose we have a complete binary tree,  \\( \\mathrm{X} \\), that is not a heap, and we wish to heapify it. The obvious thing to do is just insert all nodes of  \\( \\mathrm{X} \\) into a new binary heap  \\( \\mathrm{Y} \\). This works, but it doubles the space requirement. Suppose we'd prefer to heapify in place. Which of the following procedures will convert  \\( \\mathrm{X} \\) into a heap (containing all of the original values)? </p> <p></p>`,
      image: "",
      options: [
        `Sink (heapify down) all nodes in level order (first the root, then its left child, then the right child of the root, etc).<br>&nbsp;`,
        `Swim (heapify up) all nodes in level order.<br>&nbsp;`,
        `Swim all nodes in reverse level order.<br>&nbsp;`,
        `Sink all nodes in reverse level order.`,
      ],
      answer: ["B", "D"],
      solution: `<img src="/images/quiz/wqt-ds4/8.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>Which of the following is/are true?</p> <p></p>`,
      image: "",
      options: [
        `Suppose  \\( \\mathrm{T} \\) is a completely filled binary search tree with  \\( 7 \\) nodes, the worst-case number of comparisons for a successful find operation in  \\( \\mathrm{T} \\) is  \\( 3 \\)<br>&nbsp;`,
        `Suppose  \\( \\mathrm{T} \\) is a completely filled binary search tree with  \\( 7 \\) nodes. the best case number of comparisons for a successful find operation in  \\( \\mathrm{T} \\) is  \\( 1 \\)<br>&nbsp;`,
        `Suppose  \\( \\mathrm{T} \\) is a binary search tree with \\( 7 \\) nodes, only one of which is a leaf. suppose all keys are equally likely, the integer closest to the average case number of comparisons for a successful find operation in  \\( \\mathrm{T} \\) is  \\( 4 \\)<br>&nbsp;`,
        `Suppose  \\( \\mathrm{T} \\) is a completely filled binary search tree with  \\( 7 \\) nodes. suppose all keys are equally likely. The integer closest to the average case number of comparisons for a successful find operation in  \\( \\mathrm{T} \\) is  \\( 2 \\)`,
      ],
      answer: ["A", "B", "C", "D"],
      solution: `<img src="/images/quiz/wqt-ds4/9.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "NAT",
      text: `<p>Number of AVL tree(s) containing elements with keys  \\( 2, 4, 6, 8, \\) and  \\( 10. \\) </p>`,
      image: "",
      options: [],
      answer: "6",
      solution: `<img src="/images/quiz/wqt-ds4/10.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>Which of the following is is/are true ?</p> <p></p>`,
      image: "",
      options: [
        `The depths of any two leaves in a max heap differ by at most  \\( 1. \\)<br>&nbsp;`,
        `Inserting into an AVL tree with n nodes requires  \\( \\Theta(\\log n) \\) rotations.<br>&nbsp;`,
        `The height of any binary search tree with  \\( n \\) nodes is  \\( O(\\log n). \\)<br>&nbsp;`,
        `We can convert a heap to Binary Search Tree in  \\( \\Theta(n) \\).`,
      ],
      answer: ["A"],
      solution: `<img src="/images/quiz/wqt-ds4/11.png" style="max-width: 75%;">`
    },
  ]
});

registerTest({
  series: "weekly-cs-gate-2027",
  name: "WQT - Data Structure-5 | Complete Data Structure",
  date: "Oct 01, 2026",
  questions: [
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>We found a new implementation of a priority queue where insert takes constant time and  \\( \\textsf{extractMin} \\) takes  \\( O(\\log n) \\) time. Which of the following is true? </p> <p></p>`,
      image: "",
      options: [
        `This can be used to sort in constant time<br>&nbsp;`,
        `This can be used to sort in linear time<br>&nbsp;`,
        `This can be used to sort in  \\( O(n \\log n) \\) time<br>&nbsp;`,
        `For sorting, one needs a hash table,&nbsp;not a priority queue`,
      ],
      answer: "C",
      solution: `<img src="/images/quiz/wqt-ds5/1.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>Consider a binary search tree whose labels are each one capital letter, and assume that a level-order traversal yields the sequence  \\( \\text{"GENIUS"}. \\) What is the preorder traversal of this tree? </p> <p></p>`,
      image: "",
      options: [
        `\\( \\text{GENIUS} \\)<br>&nbsp;`,
        `\\( \\text{GNEUIS} \\)<br>&nbsp;`,
        `\\( \\text{GUINES} \\)<br>&nbsp;`,
        `\\( \\text{GIUSEN} \\)`,
      ],
      answer: "A",
      solution: `<img src="/images/quiz/wqt-ds5/2.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>Consider a sorted circular doubly linked list where the head element points to the smallest element in the list.</p> <p>Which of the following is/are true?</p> <p></p>`,
      image: "",
      options: [
        `\\( O(1) \\) is the asymptotic&nbsp; complexity of finding the smallest element in the list<br>&nbsp;`,
        `\\( O(1) \\) is the asymptotic&nbsp; complexity of finding the largest element in the list<br>&nbsp;`,
        `\\( O(n) \\) is the asymptotic&nbsp; complexity of determining whether a given element  \\( e \\) appears in the list<br>&nbsp;`,
        `\\( O(1) \\) is the asymptotic complexity of deleting a given element  \\( e \\) in the list (not including the cost of finding it)`,
      ],
      answer: ["A", "B", "C", "D"],
      solution: `<img src="/images/quiz/wqt-ds5/3.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>Consider a program  \\( \\text{P} \\) that does not use recursion.  \\( \\text{P} \\) is a program which tries to reverse a queue using other auxiliary queues. </p> <p>Which of the following is true about  \\( \\text{P}? \\) </p> <p></p>`,
      image: "",
      options: [
        `P reverses a given queue using a minimum of one auxiliary queue.<br>&nbsp;`,
        `P reverses a given queue using a minimum of two auxiliary queues.<br>&nbsp;`,
        `P reverses a given queue using a minimum of three auxiliary queues.<br>&nbsp;`,
        `P reverses a given queue using a minimum of four auxiliary queues.`,
      ],
      answer: "A",
      solution: `<img src="/images/quiz/wqt-ds5/4.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>Suppose that you implement a queue using a null-terminated singly linked list, maintaining a reference to the item least recently added (the front of the list) but not maintaining a reference to the item most recently added (the end of the list).<br>What are the worst-case running times for enqueue and dequeue, respectively?</p> <p></p>`,
      image: "",
      options: [
        `\\( O(1) \\) for both operations<br>&nbsp;`,
        `\\( O(1) \\) for enqueue and  \\( O(n) \\) for dequeue<br>&nbsp;`,
        `\\( O(n) \\) for enqueue and  \\( O(1) \\) for dequeue<br>&nbsp;`,
        `\\( O(n) \\) for both operations`,
      ],
      answer: "C",
      solution: `<img src="/images/quiz/wqt-ds5/5.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>Consider two statements  \\( \\text{S1} \\) and  \\( \\text{S2} \\) below. </p> <ul> <li> \\( \\text{S1}:  \\) If  \\( f_{1}(n)=O\\left(g_{1}(n)\\right) \\) and  \\( f_{2}(n)=O\\left(g_{2}(n)\\right) \\), then  \\( f_{1}(n)+f_{2}(n)=O\\left(\\max \\left\\{g_{1}(n), g_{2}(n)\\right\\}\\right) \\) . </li> <li> \\( \\text{S2}: \\) If  \\( f_{1}(n)=\\Omega\\left(g_{1}(n)\\right) \\) and \\( f_{2}(n)=\\Omega\\left(g_{2}(n)\\right) \\), then \\( f_{1}(n)+f_{2}(n)=\\Omega\\left(\\min \\left\\{g_{1}(n), g_{2}(n)\\right\\}\\right) \\) . </li> </ul> <p>Which of the following is correct?</p> <p></p>`,
      image: "",
      options: [
        `\\( \\text{S1} \\) is true but  \\( \\mathrm{S} 2 \\) is false<br>&nbsp;`,
        `\\( \\text{S}1 \\) is false but  \\( \\text{S}2 \\) is true<br>&nbsp;`,
        `Both statements are true<br>&nbsp;`,
        `Both statements are false`,
      ],
      answer: "C",
      solution: `<img src="/images/quiz/wqt-ds5/6.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>Consider two statements,  \\( \\mathrm{S} 1 \\) and  \\( \\mathrm{S} 2 \\), below. </p> <ul> <li> \\( \\mathrm{S} 1: \\) An  \\( \\Theta(n \\log n) \\) algorithm ALWAYS runs faster than an  \\( \\Theta\\left(n^{2}\\right) \\) algorithm. </li> <li> \\( \\mathrm{S} 2: \\) An  \\( \\Theta(n \\log n) \\) algorithm ALWAYS runs slower than an  \\( \\Theta\\left(n^{2}\\right) \\) algorithm. </li> </ul> <p>Which of the following is correct?</p> <p></p>`,
      image: "",
      options: [
        `\\( \\mathrm{S} 1 \\) is true, but  \\( \\mathrm{S} 2 \\) is false<br>&nbsp;`,
        `\\( \\mathrm{S} 1 \\) is false, but  \\( \\mathrm{S} 2 \\) is true<br>&nbsp;`,
        `Both statements are true<br>&nbsp;`,
        `Both Statements are false`,
      ],
      answer: "D",
      solution: `<img src="/images/quiz/wqt-ds5/7.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>Let  \\( f(n)=\\Omega(n), g(n)=O(n) \\) and  \\( h(n)=\\Theta(n) \\). Then  \\( [f(n) . g(n)]+h(n) \\) is: </p> <p></p>`,
      image: "",
      options: [
        `\\( \\Omega(\\mathrm{n}) \\)<br>&nbsp;`,
        `\\( O(n) \\)<br>&nbsp;`,
        `\\( \\theta(n) \\)<br>&nbsp;`,
        `None of these`,
      ],
      answer: "A",
      solution: `<img src="/images/quiz/wqt-ds5/8.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p>Consider  \\( 2 \\) problems: </p> <ol> <li>Problem  \\( 1: \\) Given a queue  \\( \\text{Q} \\) containing  \\( n \\) elements, transfer these items on to a stack  \\( \\text{S} \\) (initially empty) so that the front element of  \\( \\text{Q} \\) appears at the top of the stack and the order of all other items is preserved. Using enqueue and dequeue operations for the queue, and push and pop operations for the stack. </li> <li>Problem  \\( 2: \\) Generate the permutations possible when using only a single stack and push and pop are the only operations allowed. </li> </ol> <ul> <li> \\( \\text{S1}: \\) An efficient algorithm to solve problem  \\( 1 \\) will take  \\( O(n) \\) time and a constant amount of additional storage. </li> <li> \\( \\text{S2}: \\) The no of stack permutations on a stack with  \\( n \\) elements is equal to the number of balanced parentheses with  \\( 2n \\) total parentheses. </li> </ul> <p>Which of the following is correct?</p> <p></p>`,
      image: "",
      options: [
        `Only  \\( \\text{S1} \\) is correct`,
        `Only  \\( \\text{S2} \\) is correct`,
        `Both  \\( \\text{S1} \\) and  \\( \\text{S2} \\) are correct`,
        `None of them is correct`,
      ],
      answer: "C",
      solution: `<img src="/images/quiz/wqt-ds5/9.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>An  \\( \\text{SQueue} \\) is a queue implemented using two stacks.  \\( \\text{SQueue} \\) supports two operations enqueue() and dequeue().<br>Consider a below pseudo code that implements enqueue() and dequeue() for  \\( \\text{SQueue} \\) using two stacks inbox and outbox.<br>&nbsp; </p> <pre class="prettyprint linenums lang-c_cpp prettyprinted" data-pbcklang="c_cpp" data-pbcktabsize="4" style=""><ol class="linenums"><li class="L0"><span class="typ">Stack</span><span class="pln"> inbox</span><span class="pun">,</span><span class="pln"> outbox</span><span class="pun">;</span><span class="pln"> </span></li><li class="L1"><span class="kwd">void</span><span class="pln"> enqueue</span><span class="pun">(</span><span class="kwd">int</span><span class="pln"> item</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span></li><li class="L2"><span class="pln">    inbox</span><span class="pun">.</span><span class="pln">push</span><span class="pun">(</span><span class="pln">item</span><span class="pun">);</span></li><li class="L3"><span class="pun">}</span></li><li class="L4"><span class="kwd">void</span><span class="pln"> dequeue</span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span></li><li class="L5"><span class="pln">    </span><span class="kwd">if</span><span class="pln"> </span><span class="pun">(</span><span class="pln">outbox</span><span class="pun">.</span><span class="pln">isEmpty</span><span class="pun">())</span></li><li class="L6"><span class="pln">    </span><span class="kwd">while</span><span class="pln"> </span><span class="pun">(!</span><span class="pln">inbox</span><span class="pun">.</span><span class="pln">isEmpty</span><span class="pun">())</span></li><li class="L7"><span class="pln">    outbox</span><span class="pun">.</span><span class="pln">push</span><span class="pun">(</span><span class="kwd">in</span><span class="pun">.</span><span class="pln">pop</span><span class="pun">());</span></li><li class="L8"><span class="pln">    </span><span class="kwd">return</span><span class="pln"> outbox</span><span class="pun">.</span><span class="pln">pop</span><span class="pun">();</span></li><li class="L9"><span class="pun">}</span></li></ol></pre> <p><br>Consider the state of  \\( \\text{SQueue} \\) which is initialized with  \\( 100 \\) items i.e.  \\( 100 \\) enqueue operations have been performed in \\( \\text{SQueue} \\). </p> <p>Which of the following(s) is/are true if we want to dequeue all elements from  \\( \\text{SQueue}? \\) </p> <p></p>`,
      image: "",
      options: [
        `First dequeue() will result in a total of  \\( 200 \\) calls to push and pop operations.<br>&nbsp;`,
        `Apart from the first dequeue(), each of the remaining calls to dequeue will take a total of  \\( 100 \\) calls to push and pop operations.<br>&nbsp;`,
        `Total calls to push and pop were required to dequeue all  \\( 100 \\) elements is  \\( 300. \\)<br>&nbsp;`,
        `Total calls to push and pop were required to dequeue all  \\( 100 \\) elements is  \\( 301. \\)`,
      ],
      answer: ["C"],
      solution: `<img src="/images/quiz/wqt-ds5/10.png" style="max-width: 75%;">`
    },
  ]
});

registerTest({
  series: "weekly-cs-gate-2027",
  name: "WQT - Algorithm-1 | Sorting Algorithms",
  date: "Oct 01, 2026",
  questions: [
    {
      marks: 1,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>For Quick-Sort, let  \\( \\operatorname{comps}(n) \\) be the number of comparisons required to sort  \\( n \\) elements, where each partition step performs \\( n-1 \\) comparisons.<br><br>Consider the following recurrences:<br><br>1.  \\( \\operatorname{comps}(n)=2 \\cdot \\operatorname{comps}(n / 2)+(n-1) \\) <br><br>2.  \\( \\operatorname{comps}(n)=\\operatorname{comps}(n-1)+(n-1) \\)<br><br>Which of the following statements are true? </p> <p></p>`,
      image: "",
      options: [
        `Recurrence ( \\( 1 \\)) leads to  \\( O(n \\log n) \\) comparisons, and this happens when the pivot always splits the array into two equal halves.<br>&nbsp;`,
        `Recurrence ( \\( 2 \\)) leads to  \\( O\\left(n^{2}\\right) \\) comparisons, and this happens when the pivot is always the smallest or largest element.<br>&nbsp;`,
        `Recurrence ( \\( 1 \\)) arises when the array is already sorted.<br>&nbsp;`,
        `Recurrence ( \\( 2 \\)) arises when the pivot is always the median of the current array.`,
      ],
      answer: ["A", "B"],
      solution: `<img src="/images/quiz/wqt-algo1/1.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>Consider the array  \\( \\mathrm{0, 4, 2, 7, 6, 1, 3, 5} \\) being sorted using Insertion Sort.<br><br>What will be the array after inserting the element 3 into its correct position? </p> <p></p>`,
      image: "",
      options: [
        `\\( 01234675 \\)<br>&nbsp;`,
        `\\( 01243675 \\)<br>&nbsp;`,
        `\\( 01246735 \\)<br>&nbsp;`,
        `\\( 01234567 \\)`,
      ],
      answer: "A",
      solution: `<img src="/images/quiz/wqt-algo1/2.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>Merge Sort is applied on the array  \\( \\mathrm{0 , 4 , 2 , 7 , 6 , 1 , 3 , 5} \\) .<br><br>During its execution, several intermediate arrays are produced.<br><br>Which of the following arrays cannot appear as an intermediate step in any correct execution of Merge Sort? </p> <p></p>`,
      image: "",
      options: [
        `\\( 02471635 \\)<br>&nbsp;`,
        `\\( 01243567 \\)<br>&nbsp;`,
        `\\( 04271356 \\)<br>&nbsp;`,
        `\\( 01234567 \\)`,
      ],
      answer: "B",
      solution: `<img src="/images/quiz/wqt-algo1/3.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>Which sorting algorithm most likely produced the shown execution trace?<br><br>Initial array:  \\( 0,4,2,7,6,1,3,5 \\)<br><br>During execution:  \\( 0,2,4,7,6,1,3,5 \\)<br><br>Final sorted result: \\( 0,1,2,3,4,5,6,7 \\)<br>&nbsp; </p> <p></p>`,
      image: "",
      options: [
        `In-place Heapsort<br>&nbsp;`,
        `Selection Sort<br>&nbsp;`,
        `Insertion Sort<br>&nbsp;`,
        `Merge Sort`,
      ],
      answer: "C",
      solution: `<img src="/images/quiz/wqt-algo1/4.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>Consider the number of element swaps performed by selection sort and bubble sort in the worst case for a list of size  \\( N \\).<br><br>Which of the following statements are correct? </p> <p></p>`,
      image: "",
      options: [
        `Selection sort always performs exactly (  \\( N-1 \\) ) element swaps.<br>&nbsp;`,
        `The number of element swaps in selection sort depends on the initial arrangement of elements.<br>&nbsp;`,
        `Bubble sort, in the worst case, performs  \\( \\frac{(N-2)(N-1)}{2} \\) element swaps.<br>&nbsp;`,
        `Bubble sort performs the same number of element swaps for both sorted and reverse-sorted arrays.`,
      ],
      answer: ["A"],
      solution: `<img src="/images/quiz/wqt-algo1/5.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>Consider the following array:<br> \$\$  12,18,27,35,46,58,72,85  \$\$ <br>Which algorithm out of the following options uses the least number of comparisons (among the array elements) to sort the above array in ascending order? </p> <p></p>`,
      image: "",
      options: [
        `Selection sort<br>&nbsp;`,
        `Mergesort<br>&nbsp;`,
        `Insertion sort<br>&nbsp;`,
        `Quicksort using the last element as pivot`,
      ],
      answer: "C",
      solution: `<img src="/images/quiz/wqt-algo1/6.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>You are given an array  \\( A \\) of  \\( n \\) distinct integers in sorted order. The task is to determine whether there exists an index  \\( i \\) such that  \\( A[i]=i \\).<br><br>Which of the following statements are correct? </p> <p></p>`,
      image: "",
      options: [
        `A naive algorithm that checks every index runs in  \\( O(n) \\) time.<br>&nbsp;`,
        `If all integers are non-negative (  \\( A[i] \\geq 0 \\) ), the problem can be solved in \\( O(1) \\) time.<br>&nbsp;`,
        `If all integers are positive, then no valid index can exist.<br>&nbsp;`,
        `The problem always requires  \\( O(n) \\) time, regardless of the input conditions.`,
      ],
      answer: ["A", "B", "C"],
      solution: `<img src="/images/quiz/wqt-algo1/7.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p> <meta content="width=device-width,initial-scale=1"> </p> <p>Consider the following diagrams showing intermediate steps while sorting a collection of sticks by height:</p> <div style="display:flex; align-items:center; gap:10px;"><img class="diagram" alt="image 1" src="/images/quiz/wqt-algo1/q8_img1.png" style="max-width: 75%;"> <span class="arrow">→</span> <img class="diagram" alt="image 2" src="/images/quiz/wqt-algo1/q8_img2.png" style="max-width: 75%;"> <span class="arrow">→</span> <img class="diagram" alt="image 3" src="/images/quiz/wqt-algo1/q8_img3.png" style="max-width: 75%;"></div> <p>Which sorting algorithm might produce such intermediate steps?</p> <p></p>`,
      image: "",
      options: [
        `Selection Sort<br>&nbsp;`,
        `Quicksort<br>&nbsp;`,
        `Insertion Sort<br>&nbsp;`,
        `Merge Sort`,
      ],
      answer: "D",
      solution: `<img src="/images/quiz/wqt-algo1/8.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>Professor Fiorina uses the following algorithm for merging  \\( k \\) sorted lists, each having  \\( \\frac{n}{k} \\) elements: </p> <ul> <li>She merges the first two lists using a linear-time merge procedure.<br>&nbsp;</li> <li>Then she merges the resulting list with the third list, then with the fourth, and so on, until all lists are merged into a single sorted list of  \\( n \\) elements. </li> </ul> <p>What is the worst-case running time of this algorithm in terms of  \\( n \\) and  \\( k \\)? </p> <p></p>`,
      image: "",
      options: [
        `\\( \\Theta(n \\log k) \\)<br>&nbsp;`,
        `\\( \\Theta(n+k) \\)<br>&nbsp;`,
        `\\( \\Theta(n k) \\)<br>&nbsp;`,
        `\\( \\Theta\\left(\\frac{n}{k}\\right) \\)`,
      ],
      answer: "C",
      solution: `<img src="/images/quiz/wqt-algo1/9.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p> <meta content="width=device-width,initial-scale=1"> </p> <p>Consider the following diagrams showing intermediate steps while sorting a collection of sticks by height:</p> <div style="display:flex; align-items:center; gap:10px;"><img class="diagram" alt="image 1" src="/images/quiz/wqt-algo1/q10_img4.png" style="max-width: 75%;"> <span class="arrow">→</span> <img class="diagram" alt="image 2" src="/images/quiz/wqt-algo1/q10_img5.png" style="max-width: 75%;"> <span class="arrow">→</span> <img class="diagram" alt="image 3" src="/images/quiz/wqt-algo1/q10_img6.png" style="max-width: 75%;"></div> <p>Which sorting algorithm might produce such intermediate steps?</p> <p></p>`,
      image: "",
      options: [
        `Selection Sort<br>&nbsp;`,
        `Quicksort<br>&nbsp;`,
        `Insertion Sort<br>&nbsp;`,
        `Merge Sort`,
      ],
      answer: "A",
      solution: `<img src="/images/quiz/wqt-algo1/10.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p> <meta> </p> <p>Consider the following algorithm:</p> <pre data-pbcklang="c_cpp" data-pbcktabsize="4" class="prettyprint linenums lang-c_cpp prettyprinted" style=""><ol class="linenums"><li class="L0"><span class="typ">Process</span><span class="pun">(</span><span class="pln">A</span><span class="pun">):</span></li><li class="L1"><span class="pln">&nbsp;</span></li><li class="L2"><span class="pln">    </span><span class="kwd">done</span><span class="pln"> </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">false</span></li><li class="L3"><span class="pln">    </span><span class="kwd">while</span><span class="pln"> </span><span class="kwd">done</span><span class="pln"> </span><span class="pun">==</span><span class="pln"> </span><span class="kwd">false</span><span class="pun">:</span></li><li class="L4"><span class="pln">        </span><span class="kwd">done</span><span class="pln"> </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">true</span></li><li class="L5"><span class="pln">        </span><span class="kwd">for</span><span class="pln"> i </span><span class="pun">=</span><span class="pln"> </span><span class="lit">0</span><span class="pln"> to n</span><span class="pun">-</span><span class="lit">3</span><span class="pun">:</span></li><li class="L6"><span class="pln">            </span><span class="kwd">if</span><span class="pln"> A</span><span class="pun">[</span><span class="pln">i</span><span class="pun">]</span><span class="pln"> </span><span class="pun">&gt;</span><span class="pln"> A</span><span class="pun">[</span><span class="pln">i</span><span class="pun">+</span><span class="lit">2</span><span class="pun">]:</span></li><li class="L7"><span class="pln">                reverse elements </span><span class="kwd">from</span><span class="pln"> i to i</span><span class="pun">+</span><span class="lit">2</span></li><li class="L8"><span class="pln">                </span><span class="kwd">done</span><span class="pln"> </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">false</span></li></ol></pre> <p>Which of the following is correct?</p> <div class="options"> </div> <p></p>`,
      image: "",
      options: [
        `The algorithm always sorts the array correctly for all possible inputs<br>&nbsp;`,
        `The algorithm may fail to sort the array for some inputs<br>&nbsp;`,
        `The algorithm never terminates for certain inputs<br>&nbsp;`,
        `The algorithm works correctly only if the array size is even`,
      ],
      answer: "B",
      solution: `<img src="/images/quiz/wqt-algo1/11.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p> <meta> </p> <p>Assume a variant of <b>Quicksort</b> in which, at every recursive step, the input array of size  \\( n \\) is deterministically partitioned into two subproblems: </p> <p style="text-align:center; font-size: 18px;"> \$\$  \\boxed{\\;\\;\\;\\underbrace{\\phantom{xxxxxxxx}}_{\\alpha n}\\;\\;\\;\\;\\;\\underbrace{\\phantom{xxxxxxxxxxxxxxxx}}_{(1-\\alpha)n}\\;\\;\\;}  \$\$ </p> <p>where  \\( 0 &lt; \\alpha \\leq \\tfrac{1}{2} \\). </p> <p>What is the asymptotic expression for the <b>maximum depth</b> of the recursion tree in terms of  \\( n \\) and  \\( \\alpha \\)? </p> <div class="options"> </div> <p></p>`,
      image: "",
      options: [
        `\\( -\\dfrac{\\lg n}{\\lg (1-\\alpha)} \\) <br>&nbsp;`,
        `&nbsp; \\( \\dfrac{\\lg n}{\\lg (1-\\alpha)} \\)<br>&nbsp;`,
        `\\( -\\dfrac{\\lg n}{\\lg \\alpha} \\)<br>&nbsp;`,
        `\\( \\dfrac{\\lg n}{\\lg \\alpha} \\)`,
      ],
      answer: "A",
      solution: `<img src="/images/quiz/wqt-algo1/12.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p>Imagine  \\( \\mathbf{n} \\) people standing in a straight line, each holding a card with a number on it.<br>They follow the following method to sort the cards: </p> <ul> <li>In the first round, every even-positioned person (2nd, 4th, 6th, ...) compares with their right neighbor and keeps the smaller number on the left, larger on the right.<br>&nbsp;</li> <li>In the next round, every odd-positioned person (1st, 3rd, 5th, ...) does the same.<br>&nbsp;</li> <li>Rounds alternate until the line is fully sorted.</li> </ul> <p>In the worst case, how many rounds are required?</p> <p></p>`,
      image: "",
      options: [
        `\\( n \\log n \\)<br>&nbsp;`,
        `\\( n^{2} \\)<br>&nbsp;`,
        `\\( n \\)<br>&nbsp;`,
        `\\( n^{1.5} \\)`,
      ],
      answer: "C",
      solution: `<img src="/images/quiz/wqt-algo1/13.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p>Randomized QuickSort (where the pivot is chosen uniformly at random from the current subarray) is applied on an array of  \\( 10 \\) distinct numbers. Suppose we focus on the elements  \\( 25 \\) and  \\( 70 \\), which in the sorted order look like this:<br><br> \$\$ 10,18,22,25,31,40,53,66,70,85 \$\$ <br>What is the probability that  \\( 25 \\) and  \\( 70 \\) are directly compared at some stage of QuickSort? </p> <p></p>`,
      image: "",
      options: [
        `\\( 1 / 10 \\)<br>&nbsp;`,
        `\\( 2 / 7 \\)<br>&nbsp;`,
        `\\( 1 / 3 \\)<br>&nbsp;`,
        `\\( 1 / 5 \\)`,
      ],
      answer: "C",
      solution: `<img src="/images/quiz/wqt-algo1/14.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>Consider the problem of sorting an array of size  \\( n \\) using only the following two operations:<br><br> \\( \\operatorname{compare}(\\mathbf{x}, \\mathbf{y}) \\) : compares two elements  \\( x \\) and  \\( y \\).<br><br>flip(i): reverses the order of the first  \\( i \\) elements of the array.<br><br>For example, if the array is  \\( [1,4,6,5,3,10,1] \\), then applying flip(4) results in  \\( [5,6,4,1,3,10,1] \\).<br><br>The Pancake Sort algorithm works as follows:<br><br>In each iteration, </p> <ul> <li>find the maximum element in the current prefix of size  \\( k \\),<br>&nbsp; </li> <li>flip the prefix to bring this maximum element to the front (if needed),<br>&nbsp;</li> <li>flip the first  \\( k \\) elements to move the maximum into its correct final position at index  \\( k \\). </li> </ul> <p>This process is repeated for  \\( k=n, n-1, \\ldots, 2 \\).<br><br>Which of the following statements is/are correct about Pancake Sort? </p> <p></p>`,
      image: "",
      options: [
        `After the  \\( i \\)-th iteration, the last  \\( i \\) elements of the array are in their correct sorted positions.<br>&nbsp;`,
        `In each iteration, the algorithm always requires exactly 1 flip in the worst case.<br>&nbsp;`,
        `In the worst case, the total number of flips performed by the algorithm is at most  \\( 2 n \\).<br>&nbsp;`,
        `The number of comparisons required by the algorithm is  \\( O\\left(n^{2}\\right) \\).`,
      ],
      answer: ["A", "C", "D"],
      solution: `<img src="/images/quiz/wqt-algo1/15.png" style="max-width: 75%;">`
    },
  ]
});


registerTest({
  series: "weekly-cs-gate-2027",
  name: "WQT - Algorithm-2 | BFS and DFS Algorithms",
  date: "Oct 01, 2026",
  questions: [
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>Consider a graph  \\( G \\). Let  \\( T \\) be a BFS tree with root  \\( r \\).<br>Let  \\( d(u, v) \\) denote the length of the shortest path between nodes  \\( u \\) and  \\( v \\).<br>If a vertex  \\( v \\) is visited before a vertex  \\( u \\) in the BFS traversal, which of the following statements is true? </p> <p></p>`,
      image: "",
      options: [
        `\\( d(r, v)&gt;d(r, u) \\)`,
        `\\( d(r, v)=d(r, u) \\)`,
        `\\( d(r, v)&lt;d(r, u) \\)`,
        `\\( d(r, v) \\leq d(r, u) \\)`,
      ],
      answer: "D",
      solution: `<img src="/images/quiz/wqt-algo2/1.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>Consider the tree below. The search starts from the green node at the top. The yellow node is highlighted. Whenever there is a choice among multiple children, both BFS and DFS choose the leftmost child first.<br><br><img alt="" src="/images/quiz/wqt-algo2/q2_img1.png" style="max-width: 75%;"><br><br>Which algorithm will visit the least number of nodes before reaching the yellow node?</p> <p></p>`,
      image: "",
      options: [
        `BFS`,
        `DFS`,
        `Neither BFS nor DFS will ever reach to the Yellow node`,
        `BFS and DFS visit the same number of nodes before reaching the yellow node`,
      ],
      answer: "A",
      solution: `<img src="/images/quiz/wqt-algo2/2.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>Let  \\( G \\) be a connected undirected graph. Suppose we perform both BFS and DFS starting from the same root vertex  \\( r \\). Which of the following is true regarding the depth of the BFS tree and the DFS tree (both rooted at  \\( r \\) )? </p> <p></p>`,
      image: "",
      options: [
        `The depth of the BFS tree is always greater than or equal to the depth of the DFS tree.`,
        `The depth of the BFS tree is always strictly smaller than the depth of the DFS tree.`,
        `The depth of the DFS tree is always greater than or equal to the depth of the BFS tree.`,
        `The depths of BFS and DFS trees are always equal.`,
      ],
      answer: "C",
      solution: `<img src="/images/quiz/wqt-algo2/3.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>Let  \\( G \\) be a simple undirected graph and let  \\( T_{B} \\) be a breadth first search (BFS) tree of \\( G \\). For every edge  \\( (u, v) \\) of  \\( G \\), let  \\( d(u) \\) and  \\( d(v) \\) denote the depths of  \\( u \\) and  \\( v \\) in  \\( T_{B} \\).<br><br>Which of the following must necessarily hold? </p> <p></p>`,
      image: "",
      options: [
        `\\( |d(u)-d(v)| \\leq 1 \\)`,
        `\\( |d(u)-d(v)|=1 \\)`,
        `\\( |d(u)-d(v)| \\geq 1 \\)`,
        `\\( |d(u)-d(v)|=0 \\)`,
      ],
      answer: "A",
      solution: `<img src="/images/quiz/wqt-algo2/4.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>Consider the given graph shown below:</p> <p><br><img alt="" src="/images/quiz/wqt-algo2/q5_img2.png" style="max-width: 75%;"><br><br>Start a depth-first search (DFS) from node  \\( 1 \\), always visiting the smallestnumbered neighbor first.<br><br>Let  \\( d(v) \\) denote the discovery time of vertex  \\( v \\), and let  \\( f(v) \\) denote its finish time.<br><br>Which of the following relations is always true? (select all that apply) </p> <p>​​​A.  \\( d(3)&lt;d(7)&lt;f(7)&lt;f(3) \\)<br>B.  \\( d(4)&lt;d(2)&lt;f(2)&lt;f(4) \\)<br>C.  \\( d(5)&lt;d(6)&lt;f(6)&lt;f(5) \\)<br>D.  \\( d(7)&lt;d(6)&lt;f(7)&lt;f(6) \\) </p> <p></p>`,
      image: "",
      options: ["A", "B", "C", "D"],
      answer: ["A", "B", "C"],
      solution: `<img src="/images/quiz/wqt-algo2/5.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p>Consider a directed graph with  \\( n \\) vertices arranged in a path: </p> <ul> <li>For each  \\( 1 \\leq i&lt;n \\)&nbsp;there is the forward edge \\( (i, i+1) \\). </li> <li>In addition, for every pair  \\( i&gt;j \\) there is an edge  \\( (i, j) \\). </li> </ul> <p><br>A depth-first search (DFS) is performed on this graph.<br>What are the minimum and maximum possible numbers of back edges, depending only on the order in which DFS explores vertices?<br>&nbsp;</p> <p>&nbsp;</p> <p></p>`,
      image: "",
      options: [
        `Minimum  \\( =0, \\quad \\) Maximum  \\( =n-1 \\)`,
        `Minimum  \\( =n-1, \\quad \\) Maximum  \\( =\\frac{n(n-1)}{2} \\)`,
        `Minimum  \\( =\\frac{n(n-1)}{2}, \\quad \\) Maximum  \\( =n(n-1) / 2 \\)`,
        `Minimum  \\( =n-1, \\quad \\) Maximum  \\( =n-1 \\)`,
      ],
      answer: "B",
      solution: `<img src="/images/quiz/wqt-algo2/6.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p>The discovery and finishing times of vertices in a DFS traversal are:<br> \\( (q, 1,16),(r, 17,20),(s, 2,7),(t, 8,15),(u, 18,19),(v, 3,6),(w, 4,5),(x, 9,12),(y, 13,14),(z, 10,11) \\) <br>If the directed edges given in the options are present in the graph, then which of these would be classified in DFS as a back edge? </p> <p></p>`,
      image: "",
      options: [
        `\\( (y, x) \\)`,
        `\\( (z, y) \\)`,
        `\\( (w, s) \\)`,
        `\\( (u, q) \\)`,
      ],
      answer: "C",
      solution: `<img src="/images/quiz/wqt-algo2/7.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "NAT",
      text: `<p>The discovery and finishing times of vertices in a DFS traversal are: \\( (q, 1,16),(r, 17,20),(s, 2,7),(t, 8,15),(u, 18,19),(v, 3,6),(w, 4,5),(x, 9,12),(y, 13,14),(z, 10,11) \\) If all possible directed edges between these vertices are considered, what is the maximum number of cross edges that can exist while remaining consistent with the given discovery and finishing times? </p>`,
      image: "",
      options: [],
      answer: "30",
      solution: `<img src="/images/quiz/wqt-algo2/8.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>We perform a DFS on a connected undirected graph  \\( G \\). </p> <ul> <li>The global time starts at 0 and is incremented by 1 whenever a vertex is discovered or finished. </li> <li>For each vertex  \\( v \\), let  \\( d(v) \\) denote its discovery time and  \\( f(v) \\) its finish time. </li> <li>Let  \\( T \\) be the DFS tree obtained. </li> </ul> <p><br>Now consider a vertex  \\( u \\) that is a leaf in  \\( T \\).<br>Which of the following statements are always correct? </p> <p></p>`,
      image: "",
      options: [
        `\\( f(u)=d(u)+1 \\)`,
        `\\( f(u)&lt;f(\\operatorname{parent}(u)) \\)`,
        `\\( d(u)&gt;d(\\operatorname{parent}(u)) \\)`,
        `For any two leaves  \\( u \\) and  \\( v \\), if  \\( d(u)&lt;d(v) \\), then  \\( f(u)&lt;f(v) \\)`,
      ],
      answer: ["A", "B", "C", "D"],
      solution: `<img src="/images/quiz/wqt-algo2/9.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>Let  \\( G \\) be a connected undirected graph, and let \\( T \\) be a DFS tree obtained from  \\( G \\).<br>For each vertex  \\( x \\), let  \\( d(x) \\) be its discovery time and  \\( f(x) \\) its finish time.<br>Suppose  \\( u \\) is a vertex in  \\( G \\), and  \\( v \\) is the first vertex discovered after the DFS has completely finished  \\( \\operatorname{exploring} u \\) (i.e., the next new vertex in traversal order after backtracking from  \\( u \\) ).<br><br>Which of the following statements is always true? </p> <p></p>`,
      image: "",
      options: [
        `\\( v \\) cannot be a leaf of the DFS tree  \\( T \\).`,
        `\\( u \\) and  \\( v \\) belong to different DFS subtrees rooted at some common ancestor.`,
        `It is possible that  \\( \\{u, v\\} \\) is an edge in  \\( G \\), but such an edge can only be a back edge (never a tree edge).`,
        `\\( u \\) cannot be the root of the DFS tree.`,
      ],
      answer: ["B", "D"],
      solution: `<img src="/images/quiz/wqt-algo2/10.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>Consider an undirected graph  \\( G=(V, E) \\) with a BFS tree  \\( T \\) rooted at vertex 0 .<br>The BFS partitions the vertices into layers  \\( L_{0}, L_{1}, L_{2}, \\ldots \\), where  \\( L_{k} \\) contains all vertices at distance  \\( k \\) from the root.<br><br>Which of the following statements are true? </p> <p></p>`,
      image: "",
      options: [
        `If two vertices in the same layer are connected by an edge, then the graph contains an odd cycle.`,
        `If two vertices in consecutive layers are connected by an edge, then the graph contains an even cycle.`,
        `Skip-level edges (edges between vertices whose layers differ by at least 2) can never exist in BFS layering.`,
        `If two vertices are at distance  \\( k \\) from the root, then they cannot be connected by any edge.`,
      ],
      answer: ["A", "B", "C"],
      solution: `<img src="/images/quiz/wqt-algo2/11.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p>Suppose  \\( G \\) is a connected undirected graph. An edge whose removal disconnects the graph is called a bridge. Consider a Depth-First Search (DFS) tree of \\( G \\). Which of the following statements is true regarding bridges in  \\( G \\) ? </p> <p></p>`,
      image: "",
      options: [
        `A bridge can only be a back edge in some DFS tree.`,
        `A bridge can be either a tree edge or a back edge in DFS.`,
        `Every bridge must necessarily be a tree edge in every DFS tree of  \\( G \\).`,
        `A bridge can never appear as a tree edge in a DFS tree.`,
      ],
      answer: "C",
      solution: `<img src="/images/quiz/wqt-algo2/12.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>Identify which of the following statements are correct.</p> <p></p>`,
      image: "",
      options: [
        `When visiting a node <span style="font-family: monospace;"> \\( \\text{v} \\) </span>&nbsp;during DFS on an undirected graph, if an adjacent node <span style="font-family: monospace;"> \\( \\text{w} \\) </span>&nbsp;is colored <span style="color:gray; font-weight:bold;">gray</span>, then this indicates a cycle only if <span style="font-family: monospace;"> \\( \\text{w} \\) </span>&nbsp;is not the parent&nbsp; of <span style="font-family: monospace;"> \\( \\text{v} \\) </span>.<br>(Gray means “discovered but not finished”.)<br>&nbsp;`,
        `For an undirected graph  \\( G \\), it is not possible for the BFS tree to have greater height than  \\( G^{\\prime} \\) s DFS tree.<br>&nbsp;`,
        `The time-complexity for using DFS to count connected components in an undirected graph is  \\( \\Theta(V(V+E)) \\).<br>&nbsp;`,
        `BFS can be used to tell if an undirected graph  \\( G \\) is bipartite by checking if a non-tree edge connects nodes on the same level.`,
      ],
      answer: ["A", "B", "D"],
      solution: `<img src="/images/quiz/wqt-algo2/13.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p> <meta> </p> <p>Consider an  \\( n \\)-vertex graph  \\( G \\) where both DFS (using recursion) and BFS (using a queue) are started from the same vertex  \\( v_1 \\). Match each type of graph in Column A with the correct behavior of DFS recursion depth and BFS maximum queue size in Column B. </p> <p> \$\$  \\begin{array}{c|c} \\textbf{Column A (Graph type)} &amp; \\textbf{Column B (Property)} \\\\ \\hline \\\\[-4pt] \\begin{aligned}[t] a.&amp;\\ \\text{Path graph on } n \\text{ vertices} \\\\ b.&amp;\\ \\text{Star graph on } n \\text{ vertices (center }= v_1\\text{)} \\\\ c.&amp;\\ \\text{Complete graph on } n \\text{ vertices} \\end{aligned} &amp; \\begin{aligned}[t] 1.&amp;\\ \\text{DFS recursion depth} \\le 1 \\\\ 2.&amp;\\ \\text{DFS recursion depth} = 2 \\\\ 3.&amp;\\ \\text{DFS recursion depth} = n-1 \\\\ 4.&amp;\\ \\text{BFS queue size} \\le 1 \\\\ 5.&amp;\\ \\text{BFS queue size} = n-1 \\end{aligned} \\end{array}  \$\$ </p> <p>The correct matching between the elements in Column A with those of Column B is:</p> <p></p>`,
      image: "",
      options: [
        `\\( a \\to (3,4),\\; b \\to (1,5),\\; c \\to (3,5) \\)`,
        `\\( a \\to (2,5),\\; b \\to (3,4),\\; c \\to (1,5) \\)`,
        `\\( a \\to (1,5),\\; b \\to (2,4),\\; c \\to (3,5) \\)`,
        `\\( a \\to (3,5),\\; b \\to (2,4),\\; c \\to (1,5) \\)`,
      ],
      answer: "A",
      solution: `<img src="/images/quiz/wqt-algo2/14.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>In a directed graph  \\( G=(V, E) \\), a mother vertex is a vertex  \\( v \\) such that all other vertices in  \\( G \\) are reachable from  \\( v \\).<br>Suppose we are given a vertex  \\( v \\). Which of the following procedures correctly tests whether  \\( v \\) is a mother vertex in  \\( O(n+m) \\) time, where  \\( n=|V| \\) and  \\( m=|E| \\) ? </p> <p></p>`,
      image: "",
      options: [
        `Start DFS from  \\( v \\). If the DFS tree has exactly  \\( n-1 \\) tree edges, then  \\( v \\) is a mother vertex.`,
        `Start BFS from  \\( v \\). If BFS reaches all other  \\( n-1 \\) vertices, then  \\( v \\) is a mother vertex.`,
        `Start DFS from  \\( v \\). If DFS reaches all other  \\( n-1 \\) vertices, then  \\( v \\) is a mother vertex.`,
        `Start DFS from  \\( v \\). If the number of cross edges is zero, then  \\( v \\) is a mother vertex.`,
      ],
      answer: ["A", "B", "C"],
      solution: `<img src="/images/quiz/wqt-algo2/15.png" style="max-width: 75%;">`
    },
  ]
});

registerTest({
  series: "weekly-cs-gate-2027",
  name: "WQT - Algorithm-3 | Shortest Paths",
  date: "Oct 01, 2026",
  questions: [
    {
      marks: 1,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>A shortest-path tree (SPT) of a graph  \\( G=(V, E) \\) rooted at a source  \\( s \\) is a tree in which the path from  \\( s \\) to every other vertex is a shortest path in \\( G \\).<br><br>Now, consider a graph  \\( G=(V, E) \\) with positive edge weights. We run both Dijkstra's algorithm and the Bellman-Ford algorithm from the same source  \\( s \\).<br><br>Which of the following statements is/are correct? </p> <p></p>`,
      image: "",
      options: [
        `Both algorithms always produce the same shortest-path tree.<br>&nbsp;`,
        `Both algorithms always produce the same shortest-path distances from the source to every vertex, but the shortest-path trees may be different.<br>&nbsp;`,
        `Dijkstra's algorithm may give different shortest-path distances compared to Bellman-Ford.<br>&nbsp;`,
        `There exists only one shortest-path tree for a given graph with positive edge weights.`,
      ],
      answer: ["B"],
      solution: `<img src="/images/quiz/wqt-algo3/1.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>Consider a weighted directed graph  \\( G=(V, E, w) \\) and let  \\( X \\) be a shortest  \\( s \\rightarrow t \\) path. Suppose we define a new weight function  \\( w^{\\prime}(e)=2 w(e) \\) for every edge  \\( e \\in E \\). Which of the following is correct? </p> <p></p>`,
      image: "",
      options: [
        `\\( X \\) may no longer be the shortest  \\( s \\rightarrow t \\) path because the edge weights have changed.<br>&nbsp;`,
        `\\( X \\) will still be the shortest  \\( s \\rightarrow t \\) path since doubling all edge weights preserves the relative ordering of path lengths.<br>&nbsp;`,
        `\\( X \\) will remain shortest only if the graph has no cycles.<br>&nbsp;`,
        `\\( X \\) will remain shortest only if all original weights are integers.`,
      ],
      answer: "B",
      solution: `<img src="/images/quiz/wqt-algo3/2.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>Let  \\( \\delta(s, v) \\) denote the shortest-path distance from source  \\( s \\) to vertex  \\( v \\). Consider the following statements.<br>Which of the following is/are TRUE? </p> <p></p>`,
      image: "",
      options: [
        `In a weighted directed graph, Dijkstra's algorithm may relax an edge more than once in a graph with a cycle.`,
        `In a weighted directed graph  \\( G=(V, E, w) \\) with source  \\( s \\), if  \\( G \\) has a negative-weight cycle anywhere, then Bellman-Ford necessarily computes an incorrect result for some  \\( \\delta(s, v) \\).<br>&nbsp;`,
        `Bellman-Ford works correctly if all negative-weight cycles are unreachable from the source  \\( s \\).<br>&nbsp;`,
        `Dijkstra's algorithm always produces correct values of  \\( \\delta(s, v) \\) if the graph has negative-weight edges but no negative-weight cycles.`,
      ],
      answer: ["C"],
      solution: `<img src="/images/quiz/wqt-algo3/3.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>Consider a directed graph  \\( D(V, E) \\).<br><br>Each edge  \\( a \\in E \\) has a value  \\( x_{a} \\).<br><br>We want to check if for every cycle  \\( C \\) in the graph,<br> \$\$  \\sum_{a \\in C} x_{a} \\geq 0  \$\$ <br>Which algorithm can be used to verify this efficiently? </p> <p></p>`,
      image: "",
      options: [
        `Dijkstra's Algorithm<br>&nbsp;`,
        `Bellman-Ford Algorithm<br>&nbsp;`,
        `Depth First Search (DFS)<br>&nbsp;`,
        `Breadth First Search (BFS)`,
      ],
      answer: "B",
      solution: `<img src="/images/quiz/wqt-algo3/4.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>Suppose a directed graph has no negative cycles. You run the Bellman-Ford algorithm from a source  \\( S \\). Which of the following statements is correct? </p> <p></p>`,
      image: "",
      options: [
        `The shortest-path distances from  \\( S \\) are always the same, no matter the order of edge relaxations.<br>&nbsp;`,
        `The exact shortest-path tree chosen is always the same, no matter the order of edge relaxations.<br>&nbsp;`,
        `If a vertex can be reached by two different shortest paths of equal length, the chosen path may depend on relaxation order.<br>&nbsp;`,
        `If each vertex has exactly one shortest path from  \\( S \\), then the shortest-path tree will not depend on the relaxation order.`,
      ],
      answer: ["A", "C", "D"],
      solution: `<img src="/images/quiz/wqt-algo3/5.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>Recall the update operation on distances in the Bellman-Ford algorithm:<br> \$\$  \\operatorname{update}(u \\rightarrow v): \\quad \\operatorname{dist}[v]=\\min (\\operatorname{dist}[v], \\operatorname{dist}[u]+\\ell(u, v))  \$\$ <br>Consider the following graph:<br> \$\$  S \\longrightarrow A \\longrightarrow B  \$\$<br>If all edge weights are positive, which is the shortest sequence of update operations that ensures all distances from  \\( S \\) are correctly computed, irrespective of the edge weights? </p> <p></p>`,
      image: "",
      options: [
        `\\( A \\rightarrow B, S \\rightarrow A \\)<br>&nbsp;`,
        `\\( S \\rightarrow A, A \\rightarrow B \\)<br>&nbsp;`,
        `\\( S \\rightarrow A \\) only<br>&nbsp;`,
        `\\( A \\rightarrow B, S \\rightarrow A, S \\rightarrow B \\)`,
      ],
      answer: "B",
      solution: `<img src="/images/quiz/wqt-algo3/6.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>The Bellman-Ford algorithm starts from a source  \\( s \\) and repeatedly relaxes all edges.<br>Consider the following two statements:<br><br>( \\( 1 \\)) If the graph  \\( G \\) has at most  \\( k \\) negative-weight edges (anywhere in the graph), then running BellmanFord for only  \\( k \\) iterations is enough to compute all shortest path distances from  \\( s \\).<br><br>( \\( 2 \\)) If every shortest path from  \\( s \\) to any vertex uses at most  \\( k \\) edges, then running Bellman-Ford for  \\( k \\) iterations is enough to compute all shortest path distances from  \\( s \\).<br><br>Which of the following is correct? </p> <p></p>`,
      image: "",
      options: [
        `Both ( \\( 1 \\)) and ( \\( 2 \\)) are true<br>&nbsp;`,
        `( \\( 1 \\)) is true, ( \\( 2 \\)) is false<br>&nbsp;`,
        `( \\( 1 \\)) is false, ( \\( 2 \\)) is true<br>&nbsp;`,
        `Both ( \\( 1 \\)) and ( \\( 2 \\)) are false`,
      ],
      answer: "C",
      solution: `<img src="/images/quiz/wqt-algo3/7.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>Given an undirected, unweighted, connected graph G , suppose we run a DFS on G starting at some node s . We find that the DFS tree has the property that for any vertex v , the path in the DFS tree from s to v is a shortest (fewest number of edges) path from s to v in G.&nbsp;<br><br>Which of the following is necessarily true?<br>&nbsp;</p> <p></p>`,
      image: "",
      options: [
        `G must be a tree.<br>&nbsp;`,
        `G must be acyclic, but not necessarily connected.<br>&nbsp;`,
        `G may contain cycles.<br>&nbsp;`,
        `DFS always produces the shortest paths in any connected graph.`,
      ],
      answer: "A",
      solution: `<img src="/images/quiz/wqt-algo3/8.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>Consider the following statements about shortest paths in graphs:<br><br> \\( 1 \\). In a strongly connected directed graph with integer edge weights, it is possible that there exist vertices  \\( s \\) and  \\( t \\) such that no shortest path from  \\( s \\) to  \\( t \\) exists.<br><br> \\( 2 \\). In a graph with positive edge weights, if all edge weights are distinct, then the shortest path between any two vertices  \\( s \\) and  \\( t \\) is unique.<br><br>Which of the following is correct?<br>&nbsp; </p> <p></p>`,
      image: "",
      options: [
        `Only statement  \\( 1 \\) is true.<br>&nbsp;`,
        `Only statement  \\( 2 \\) is true.<br>&nbsp;`,
        `Both statements  \\( 1 \\) and  \\( 2 \\) are true.<br>&nbsp;`,
        `Both statements  \\( 1 \\) and  \\( 2 \\) are false.`,
      ],
      answer: "A",
      solution: `<img src="/images/quiz/wqt-algo3/9.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p> <meta> <meta content="width=device-width,initial-scale=1"> </p> <p>&nbsp;</p> <p><img alt="" src="/images/quiz/wqt-algo3/q10_img1.png" style="max-width: 75%;"></p> <p>The figure above shows an undirected graph. Dijkstra's algorithm is being run from source <code>s</code>.<br><br>Edges already in the current shortest-path tree are drawn <strong>solid</strong>; the remaining edges are dashed. </p> <p>Which dashed edge will be added <em>next</em> to the shortest-path tree by Dijkstra's algorithm?</p> <p></p>`,
      image: "",
      options: [
        `Edge (s, v1) with weight 7`,
        `Edge (v1, v2) with weight 3`,
        `Edge (v6, v7) with weight 3`,
        `Edge (v2, v3) with weight 2`,
      ],
      answer: "C",
      solution: `<img src="/images/quiz/wqt-algo3/10.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>The Bellman-Ford algorithm is used to compute single-source shortest paths in a directed weighted graph \\( G=\\mathrm{(V, E)} \\) with integer edge weights.<br><br>In each iteration, it relaxes all edges, but the order in which the edges are relaxed may vary from one iteration to another. For example, in one iteration the algorithm may relax edges in the order  \\( \\left(e_{1}, e_{2}, e_{3}, \\ldots\\right) \\), while in another iteration it may relax them in a completely different order.<br><br>Which of the following statements are correct? </p> <p></p>`,
      image: "",
      options: [
        `The correctness of the Bellman-Ford algorithm does not depend on the order of edge relaxations in each iteration.<br>&nbsp;`,
        `After  \\( k \\) iterations, the algorithm guarantees the correct shortest-path distance for all vertices whose shortest path uses at most  \\( k \\) edges (anywhere in the graph).<br>&nbsp;`,
        `Running fewer than  \\( |V|-1 \\) iterations may still compute all correct distances if the longest shortest path in the graph uses fewer than  \\( |V|-1 \\) edges.<br>&nbsp;`,
        `The correctness of the Bellman-Ford algorithm depends on the order of edge relaxations in each iteration, i.e., in each iteration, the order of relaxation must be the same as in the first iteration.`,
      ],
      answer: ["A", "B", "C"],
      solution: `<img src="/images/quiz/wqt-algo3/11.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p>There are  \\( n \\) magic portals in a game. </p> <ul> <li>If you enter portal  \\( i \\), it can send you to portal  \\( j \\).<br>&nbsp; </li> <li>Your power gets multiplied by  \\( T[i][j] \\). </li> </ul> <p>Thus, if you follow a sequence of portals<br> \$\$  i_{1} \\rightarrow i_{2} \\rightarrow i_{3} \\rightarrow \\cdots \\rightarrow i_{k} \\rightarrow i_{1},  \$\$ <br>then the final power is<br> \$\$  P=T\\left[i_{1}\\right]\\left[i_{2}\\right] \\cdot T\\left[i_{2}\\right]\\left[i_{3}\\right] \\cdots \\cdots T\\left[i_{k}\\right]\\left[i_{1}\\right] .  \$\$ <br>We want to check if there exists a cycle of portals such that the final power  \\( P&gt;1 \\).<br><br>We want to somehow use the Bellman-Ford algorithm feature of detecting negative cycles here. We will say: if there is a negative cycle, then final power  \\( P&gt;1 \\).<br><br>For this, we must define the edge weight  \\( w(i, j) \\) for each directed edge  \\( (i \\rightarrow j) \\). Which of the following definitions is correct? </p> <p></p>`,
      image: "",
      options: [
        `\\( w(i, j)=T[i][j] \\)<br>&nbsp;`,
        `\\( w(i, j)=-T[i][j] \\)<br>&nbsp;`,
        `\\( w(i, j)=\\log (T[i][j]) \\)<br>&nbsp;`,
        `\\( w(i, j)=-\\log (T[i][j]) \\)`,
      ],
      answer: "D",
      solution: `<img src="/images/quiz/wqt-algo3/12.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>Consider a weighted directed acyclic graph (DAG)  \\( G=(V, E, w) \\). </p> <ul> <li>Edges leaving the source  \\( s \\) may have negative weights.<br>&nbsp; </li> <li>All other edges are non-negative.</li> </ul> <p>We want to compute shortest path distances  \\( \\delta(s, t) \\) for all vertices  \\( t \\).<br><br>Which of the following statements is correct? </p> <p></p>`,
      image: "",
      options: [
        `Dijkstra's algorithm may fail since negative weights are present.<br>&nbsp;`,
        `Dijkstra's algorithm always works in graphs with negative edges as long as there is no negative cycle.<br>&nbsp;`,
        `Dijkstra's algorithm works correctly in this case.<br>&nbsp;`,
        `If a negative edge goes beyond the source (i.e., not directly from  \\( s \\) ), then Dijkstra can fail in this DAG.`,
      ],
      answer: ["C", "D"],
      solution: `<img src="/images/quiz/wqt-algo3/13.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p style="text-align:center"><img alt="" src="/images/quiz/wqt-algo3/q14_img2.png" style="max-width: 75%;"></p> <p>&nbsp;</p> <div style="font-family: Arial, sans-serif; line-height:1.4; max-width:760px;"> <div style="margin:0.6em 0; text-align:left;">After <strong>S</strong> is <em>deleted</em> from the priority queue, which four vertices will be deleted next (in order), and which edge connects each deleted vertex to the tree of shortest paths?</div>&nbsp; </div> <p></p>`,
      image: "",
      options: [
        `C via (S,C), A via (S,A), D via (A,D), F via (C,F)<br>&nbsp;`,
        `A via (S,A), B via (A,B), C via (S,C), F via (C,F)<br>&nbsp;`,
        `C via (S,C), A via (S,A), F via (C,F), D via (S,D)<br>&nbsp;`,
        `C via (S,C), A via (S,A), D via (S,D), F via (C,F)`,
      ],
      answer: "D",
      solution: `<img src="/images/quiz/wqt-algo3/14.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p>Consider a directed graph  \\( G=(V, E) \\) with non-negative edge weights. Let \\( S \\) be a source vertex.<br><br> \\( S1 \\). If  \\( S \\rightarrow a \\rightarrow b \\) is a shortest path from  \\( S \\) to  \\( b \\), then both subpaths  \\( S \\rightarrow a \\) and  \\( a \\rightarrow b \\) are also shortest paths.<br><br> \\( S2 \\). If  \\( S \\rightarrow u \\) is a shortest path from  \\( S \\) to  \\( u \\), and  \\( u \\rightarrow v \\) is a shortest path from  \\( u \\) to  \\( v \\), then the concatenated path  \\( S \\rightarrow u \\rightarrow v \\) is necessarily a shortest path from  \\( S \\) to  \\( v \\).<br><br>Which of the following is correct? </p> <p></p>`,
      image: "",
      options: [
        `Both  \\( S 1 \\) and  \\( S 2 \\) are true.<br>&nbsp;`,
        `\\( S 1 \\) is true;  \\( S 2 \\) is false.<br>&nbsp;`,
        `\\( S 1 \\) is false;  \\( S 2 \\) is true.<br>&nbsp;`,
        `Both  \\( S1 \\) and  \\( S2 \\) are false.`,
      ],
      answer: "B",
      solution: `<img src="/images/quiz/wqt-algo3/15.png" style="max-width: 75%;">`
    },
  ]
});

registerTest({
  series: "weekly-cs-gate-2027",
  name: "WQT - CO and Architecture-1| Addressing Modes",
  date: "Oct 01, 2026",
  questions: [
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>In computer architecture, which of the following addressing modes is most suitable for specifying a constant value or a variable that is directly embedded within the instruction itself, thereby eliminating the need for an additional memory access to fetch the operand data?</p> <p></p>`,
      image: "",
      options: [
        `Absolute addressing<br>&nbsp;`,
        `Address register indirect addressing<br>&nbsp;`,
        `Immediate addressing<br>&nbsp;`,
        `Direct memory addressing`,
      ],
      answer: "C",
      solution: `<img src="/images/quiz/wqt-coa1/1.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0,
      type: "NAT",
      text: `<p>Consider a processor that includes a base with indexing addressing mode. Suppose an instruction is encountered that employs this addressing mode and specifies a displacement of  \\( 1970 \\), in decimal. Currently the base and index register contain the decimal numbers  \\( 48,022 \\) and  \\( 8 \\) , respectively. What is the address of the operand? </p>`,
      image: "",
      options: [],
      answer: "50000",
      solution: `<img src="/images/quiz/wqt-coa1/2.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0,
      type: "NAT",
      text: `<p>A PC-relative mode branch instruction is  \\( 3 \\) bytes long. The address of the instruction, in decimal, is  \\( 256028 \\). Determine the branch target address if the signed displacement in the instruction is  \\( -31 \\) . </p>`,
      image: "",
      options: [],
      answer: "256000",
      solution: `<img src="/images/quiz/wqt-coa1/3.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>Match the  \\( x86 \\) status flags in  \\( \\mathbf{List\\ I} \\) with their correct descriptions in  \\( \\mathbf{List\\ II} \\) </p> <p>\[<br>\begin{array}{|l|l|}<br>\hline<br>\textbf{List I (Flag)} &amp; \textbf{List II (Description)} \\<br>\hline<br>\text{I. Parity Flag (P)}&nbsp;<br>&amp; \text{P. Used in binary-coded decimal (BCD) arithmetic for carries} \\</p> <p>\text{II. Auxiliary Carry (A)}&nbsp;<br>&amp; \text{Q. Indicates that the result of an arithmetic or logic operation is} \\</p> <p>\text{III. Zero Flag (Z)}&nbsp;<br>&amp; \text{R. Indicates an arithmetic overflow after addition or subtraction} \\</p> <p>\text{IV. Overflow Flag (O)}&nbsp;<br>&amp; \text{S. Set to 1 to indicate even parity in the least-significant byte} \\<br>\hline<br>\end{array}<br>\]</p> <p><br>Options:</p> <p></p>`,
      image: "",
      options: [
        `\\( \\mathrm{I} \\)- \\( \\mathrm{S} \\),  \\( \\mathrm{II} \\)- \\( \\mathrm{P} \\),  \\( \\mathrm{III} \\)- \\( \\mathrm{Q} \\),  \\( \\mathrm{IV} \\)- \\( \\mathrm{R} \\)<br>&nbsp;`,
        `\\( \\mathrm{I} \\)- \\( \\mathrm{P} \\),  \\( \\mathrm{II} \\)- \\( \\mathrm{S} \\),  \\( \\mathrm{III} \\)- \\( \\mathrm{Q} \\),  \\( \\mathrm{IV} \\)- \\( \\mathrm{R} \\)<br>&nbsp;`,
        `\\( \\mathrm{I} \\)- \\( \\mathrm{S} \\),  \\( \\mathrm{II} \\)- \\( \\mathrm{Q} \\),  \\( \\mathrm{III} \\)- \\( \\mathrm{P} \\),  \\( \\mathrm{IV} \\)- \\( \\mathrm{R} \\)<br>&nbsp;`,
        `\\( \\mathrm{I} \\)- \\( \\mathrm{R} \\),  \\( \\mathrm{II} \\)- \\( \\mathrm{P} \\),  \\( \\mathrm{III} \\)- \\( \\mathrm{Q} \\),  \\( \\mathrm{IV} \\)- \\( \\mathrm{S} \\)`,
      ],
      answer: "A",
      solution: `<img src="/images/quiz/wqt-coa1/4.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>Which of the following groups contains <strong>ONLY </strong>fundamental design elements that make up an Instruction Set Architecture (ISA)?</p> <p></p>`,
      image: "",
      options: [
        `Operations, Data Types, and Cache Size<br>&nbsp;`,
        `Addressing Modes, Clock Speed, and Registers<br>&nbsp;`,
        `Operations, Data Types, and Instruction Format<br>&nbsp;`,
        `Instruction Format, Registers, and Pipeline Depth`,
      ],
      answer: "C",
      solution: `<img src="/images/quiz/wqt-coa1/5.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p>Consider a processor executing an instruction that utilizes indirect addressing, such as  \\( MOVE (A_{0}), D1 \\). Which of the following statements strictly defines the contents of the register  \\( A_{0} \\) during the execution of this instruction? </p> <p></p>`,
      image: "",
      options: [
        `&nbsp;It contains the actual data value that will be loaded into the destination register  \\( D_{1} \\).<br>&nbsp;`,
        `It contains a memory pointer (the absolute address) that specifies the location in main memory where the actual operand is stored.<br>&nbsp;`,
        `It contains the address of the next instruction to be fetched by the processor.<br>&nbsp;`,
        `It contains a constant numerical value that was immediately available from the fetched instruction.`,
      ],
      answer: "B",
      solution: `<img src="/images/quiz/wqt-coa1/6.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p><strong>Important Note:</strong> You do not need to know the actual functional meaning or execution behavior of all these specific instructions to solve this problem. You only need to analyze the syntax of their operands!<br>Consider the following assembly instructions:</p> <p>a.  \\( CLC \\) </p> <p>b.  \\( \\mathit{CALL\\ WORDPTR\\ [BX]} \\)<br><br>c.  \\( MOV AX, DX \\)<br><br>d.  \\( ADD [SI], BX \\)<br><br>Which of the following statements correctly identify the addressing modes used in these instructions? (Select all that apply) </p> <p></p>`,
      image: "",
      options: [
        `Instruction (a) utilizes <strong>Implied </strong>(or <strong>Implicit</strong>) addressing mode because the operand is inherent within the instruction's opcode itself.<br>&nbsp;`,
        `Instruction (c) utilizes <strong>Direct Memory</strong> addressing mode because data is moved<br>directly from the source to the destination.<br>&nbsp;`,
        `Both instructions (b) and (d) utilize <strong>Register Indirect </strong>addressing mode to reference at least one operand stored in main memory.<br>&nbsp;`,
        `Instruction (c) utilizes <strong>Register </strong>addressing mode because both the source and destination operands are CPU registers.`,
      ],
      answer: ["A", "C", "D"],
      solution: `<img src="/images/quiz/wqt-coa1/7.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p>In the context of  \\( 8 \\)-bit arithmetic operations, consider the following status flags and their meanings: </p> <ul> <li><strong> \\( \\mathbf{C}\\ \\mathbf{(Carry)} \\): </strong> Set to  \\( 1 \\) if there is a carry-out from the most significant bit (MSB) position; otherwise,  \\( 0 \\).<br>&nbsp; </li> <li><strong> \\( \\mathbf{V}\\ \\mathbf{(Overflow)} \\): </strong> Set to  \\( 1 \\) if a signed arithmetic overflow occurs \\( (\\text{e.g., Pos} + \\text{Pos} = \\text{Neg, or Neg} + \\text{Neg} = \\text{Pos}) \\) ; otherwise,  \\( 0 \\).<br>&nbsp; </li> <li> \\( \\mathbf{Z}\\ \\mathbf{(Zero)} \\):&nbsp;Set to \\( 1 \\) if the  \\( 8 \\) - bit result is exactly zero; otherwise, \\( 0 \\).<br>&nbsp; </li> <li> \\( \\mathbf{N}\\ \\mathbf{(Negative)} \\): Set to \\( 1 \\) if the most significant bit (MSB) of the result is  \\( 1 \\) ; otherwise,  \\( 0 \\) . </li> </ul> <p>Match the  \\( 8 \\)-bit binary addition operations in  \\( \\mathbf{List\\ I} \\) with their resulting condition code flag states in  \\( \\mathbf{List\\ II} \\). </p> <p>\[<br>\begin{array}{|c|c|}<br>\hline<br>\mathbf{List\ I\ (8\text{-}bit\ Operation)}&nbsp;<br>&amp; \mathbf{List\ II\ (Resulting\ Flags)} \\<br>\hline</p> <p>\text{I. }01110001 + 01111001&nbsp;<br>&amp; \text{P. } C=1,\ V=0,\ Z=1,\ N=0 \\<br>\hline</p> <p>\text{II. }11110101 + 11000111&nbsp;<br>&amp; \text{Q. } C=1,\ V=0,\ Z=0,\ N=1 \\<br>\hline</p> <p>\text{III. }10100011 + 01011101&nbsp;<br>&amp; \text{R. } C=0,\ V=1,\ Z=0,\ N=1 \\<br>\hline</p> <p>&amp; \text{S. } C=1,\ V=1,\ Z=0,\ N=0 \\<br>\hline<br>\end{array}<br>\]</p> <p><br>Options:</p> <p></p>`,
      image: "",
      options: [
        `\\( \\mathrm{I} \\)- \\( \\mathrm{R} \\),  \\( \\mathrm{II} \\)- \\( \\mathrm{Q} \\),  \\( \\mathrm{III} \\)- \\( \\mathrm{P} \\)<br>&nbsp;`,
        `\\( \\mathrm{I} \\)- \\( \\mathrm{R} \\),  \\( \\mathrm{II} \\)- \\( \\mathrm{S} \\),  \\( \\mathrm{III} \\)- \\( \\mathrm{P} \\)<br>&nbsp;`,
        `\\( \\mathrm{I} \\)- \\( \\mathrm{Q} \\),  \\( \\mathrm{II} \\)- \\( \\mathrm{R} \\),  \\( \\mathrm{III} \\)- \\( \\mathrm{P} \\)<br>&nbsp;`,
        `\\( \\mathrm{I} \\)- \\( \\mathrm{S} \\),  \\( \\mathrm{II} \\)- \\( \\mathrm{Q} \\),  \\( \\mathrm{III} \\)- \\( \\mathrm{R} \\)`,
      ],
      answer: "A",
      solution: `<img src="/images/quiz/wqt-coa1/8.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p>How many times does the processor need to refer to main memory when it fetches and executes an <strong>indirect-address-mode</strong> instruction if the instruction is (a) a computation requiring a single operand; and (b) a branch? </p> <p><br>(Assume the instruction fetch itself requires exactly one memory reference, and the computation instruction only reads the operand without writing it back).</p> <p></p>`,
      image: "",
      options: [
        `(a)  \\( 2 \\) times; (b)  \\( 1 \\) time<br>&nbsp;`,
        `(a)  \\( 3 \\) times; (b)  \\( 3 \\) times<br>&nbsp;`,
        `(a)  \\( 3 \\) times; (b)  \\( 2 \\) times<br>&nbsp;`,
        `(a)  \\( 4 \\) times; (b)  \\( 2 \\) times`,
      ],
      answer: "C",
      solution: `<img src="/images/quiz/wqt-coa1/9.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "NAT",
      text: `<p>A PC-relative mode branch instruction is stored in memory at address  \\( 620_{10} \\). The branch is made to location  \\( 530_{10} \\). The address field in the instruction is  \\( 10 \\) bits long. Assume the memory is word-addressable and the instruction occupies exactly one memory word (meaning the PC is incremented by \\( 1 \\) to point to the next instruction). Determine the  \\( 10 \\)-bit binary value stored in the address field. What is the decimal equivalent of this  \\( 10 \\) -bit binary value when interpreted as an unsigned integer? </p>`,
      image: "",
      options: [],
      answer: "933",
      solution: `<img src="/images/quiz/wqt-coa1/10.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>Consider a  \\( 16 \\) -bit processor in which the following appears in main memory, starting at location  \\( 200 \\):<br>&nbsp; </p> <p style="text-align:center"><img alt="" src="/images/quiz/wqt-coa1/q11_img1.png" style="max-width: 75%;"></p> <p><br>The first part of the first word indicates that this instruction loads a value into an accumulator. The Mode field specifies an addressing mode and, if appropriate, indicates a source register; assume that when used, the source register is  \\( R_{1} \\), which has a value of  \\( 400 \\) . There is also a base register that contains the value  \\( 100 \\). The value of  \\( 500 \\) in location  \\( 201 \\) is the address field  \\( (A) \\) that may be part of the address calculation. Assume that location  \\( X \\) contains the value  \\( X+600 \\) (e.g., location  \\( 399 \\) contains  \\( 999 \\) , location  \\( 400 \\) contains  \\( 1000 \\) , and so on). During the execution of this instruction, assume the Program Counter (PC) points to the next instruction at location  \\( 202 \\).<br><br>Based on the provided context, which of the following statements regarding register-based addressing modes are CORRECT? </p> <p></p>`,
      image: "",
      options: [
        `In Register addressing mode, the operand loaded into the accumulator is  \\( 400 \\).<br>&nbsp;`,
        `In Register Indirect addressing mode, the effective address is  \\( 1000 \\) and the operand loaded into the accumulator is  \\( 1600 \\) .<br>&nbsp;`,
        `In Autoindexing with increment (using  \\( R_{1} \\)), the operand loaded into the accumulator is  \\( 1000 \\) , and  \\( R_{1} \\) is updated to  \\( 401 \\) after execution.<br>&nbsp;`,
        `In Displacement addressing (using the Base Register), the effective address is  \\( 900 \\) and the operand loaded is&nbsp; \\( 1500 \\) .`,
      ],
      answer: ["A", "C"],
      solution: `<img src="/images/quiz/wqt-coa1/11.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>Consider a  \\( 16 \\) -bit processor in which the following appears in main memory, starting at location  \\( 200 \\):<br>&nbsp; </p> <p style="text-align:center"><img alt="" src="/images/quiz/wqt-coa1/q12_img2.png" style="max-width: 75%;"></p> <p><br><br>The first part of the first word indicates that this instruction loads a value into an accumulator. The Mode field specifies an addressing mode and, if appropriate, indicates a source register; assume that when used, the source register is  \\( R_{1} \\), which has a value of  \\( 400 \\). There is also a base register that contains the value  \\( 100 \\). The value of  \\( 500 \\) in location  \\( 201 \\) is the address field  \\( (A) \\) that may be part of the address calculation. Assume that location  \\( X \\) contains the value  \\( X+600 \\) (e.g., location  \\( 399 \\) contains  \\( 999 \\) , location  \\( 400 \\) contains  \\( 1000 \\) , and so on). During the execution of this instruction, assume the Program Counter (PC) points to the next instruction at location  \\( 202 \\).<br><br>Based on the provided context, which of the following statements regarding the Effective Address (EA) and the loaded Operand are CORRECT? </p> <p></p>`,
      image: "",
      options: [
        `In Direct addressing mode, the effective address is  \\( 500 \\) and the operand loaded into the accumulator is  \\( 1100 \\).<br>&nbsp;`,
        `In Indirect addressing mode, the effective address is  \\( 500 \\) and the operand loaded into the accumulator is  \\( 1700 \\).<br>&nbsp;`,
        `In PC Relative addressing mode, the effective address is  \\( 702 \\) and the operand loaded into the accumulator is  \\( 1302 \\).<br>&nbsp;`,
        `In Immediate addressing mode, the operand loaded into the accumulator is  \\( 1100 \\).`,
      ],
      answer: ["A", "C"],
      solution: `<img src="/images/quiz/wqt-coa1/12.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>In displacement addressing, the effective address is calculated using the formula  \\( E A=A+(R) \\). Based on the different uses of this addressing mode, which of the following statements is/are correct? </p> <p>Consider the following notation:<br> \$\$  \\begin{aligned} &amp; A=\\text { contents of an address field in the instruction } \\\\ &amp; R=\\text { contents of an address field in the instruction that refers to a register } \\\\ &amp; E A=\\text { actual (effective) address of the location containing the referenced operand } \\\\ &amp; (X)=\\text { contents of memory location } X \\text { or register } X \\end{aligned}  \$\$ </p> <p></p>`,
      image: "",
      options: [
        `In relative addressing, the implicitly referenced register  \\( R \\) is the Program Counter, and the address field is treated as a signed integer.<br>&nbsp;`,
        `In base-register addressing, the referenced register  \\( R \\) contains a displacement (usually unsigned), and the address field  \\( A \\) contains a main memory address.<br>&nbsp;`,
        `In indexing, the address field  \\( A \\) references a main memory address, and the referenced register  \\( R \\) contains a positive displacement from that address.<br>&nbsp;`,
        `The effective address in displacement addressing is always computed at run time.`,
      ],
      answer: ["A", "C", "D"],
      solution: `<img src="/images/quiz/wqt-coa1/13.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p>Match the addressing modes in List I with their corresponding algorithmic definitions in List II.<br>Consider the following notation:<br><br> \\( \\mathrm{A}= \\) contents of an address field in the instruction<br><br> \\( \\mathrm{R}= \\) contents of an address field in the instruction that refers to a register<br><br> \\( \\mathrm{EA}= \\) actual (effective) address of the location containing the referenced operand<br><br> \\( (\\mathrm{X})= \\) contents of memory location X or register X<br><br> \$\$  \\begin{array}{|l|l|} \\hline \\textbf{List I (Mode)} &amp; \\textbf{List II (Algorithm)} \\\\ \\hline \\text{I. Immediate} &amp; \\text{P. } EA = A \\\\ \\text{II. Direct} &amp; \\text{Q. } EA = (A) \\\\ \\text{III. Indirect} &amp; \\text{R. } EA = A + (R) \\\\ \\text{IV. Displacement} &amp; \\text{S. Operand} = A \\\\ \\hline \\end{array}  \$\$ <br><br>Options: </p> <p></p>`,
      image: "",
      options: [
        `\\( \\mathrm{I} \\)- \\( \\mathrm{S} \\),  \\( \\mathrm{II} \\)- \\( \\mathrm{P} \\),  \\( \\mathrm{III} \\)- \\( \\mathrm{Q} \\),  \\( \\mathrm{IV} \\)- \\( \\mathrm{R} \\)<br>&nbsp;`,
        `\\( \\mathrm{I} \\)- \\( \\mathrm{P} \\),  \\( \\mathrm{II} \\)- \\( \\mathrm{S} \\),  \\( \\mathrm{III} \\)- \\( \\mathrm{R} \\),  \\( \\mathrm{IV} \\)- \\( \\mathrm{Q} \\)<br>&nbsp;`,
        `\\( \\mathrm{I} \\)- \\( \\mathrm{S} \\),  \\( \\mathrm{II} \\)- \\( \\mathrm{Q} \\),  \\( \\mathrm{III} \\)- \\( \\mathrm{P} \\),  \\( \\mathrm{IV} \\)- \\( \\mathrm{R} \\)<br>&nbsp;`,
        `\\( \\mathrm{I} \\)- \\( \\mathrm{R} \\),  \\( \\mathrm{II} \\)- \\( \\mathrm{P} \\),  \\( \\mathrm{III} \\)- \\( \\mathrm{Q} \\),  \\( \\mathrm{IV} \\)- \\( \\mathrm{S} \\)`,
      ],
      answer: "A",
      solution: `<img src="/images/quiz/wqt-coa1/14.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p>A small section of byte-addressable memory is given below:<br> \$\$  \\begin{array}{|c|c|} \\hline \\textbf{Address} &amp; \\textbf{Data} \\\\ \\hline \\text{x0FFE} &amp; \\text{xA2} \\\\ \\hline \\text{x0FFF} &amp; \\text{x25} \\\\ \\hline \\text{x1000} &amp; \\text{x0E} \\\\ \\hline \\text{x1001} &amp; \\text{x1A} \\\\ \\hline \\text{x1002} &amp; \\text{x11} \\\\ \\hline \\text{x1003} &amp; \\text{x0C} \\\\ \\hline \\text{x1004} &amp; \\text{x0B} \\\\ \\hline \\text{x1005} &amp; \\text{x0A} \\\\ \\hline \\end{array}  \$\$ <br><br>Add the  \\( 16 \\)-bit two's complement numbers specified by addresses  \\( x1000 \\) and  \\( x1002 \\) if:<br><br>a. the ISA specifies a little-endian format<br><br>b. the ISA specifies a big-endian format<br><br>Options: </p> <p></p>`,
      image: "",
      options: [
        `Little-endian:  \\( 0x261F \\), Big-endian:  \\( 0x1F26 \\)<br>&nbsp;`,
        `Little-endian:  \\( 0x1F26 \\), Big-endian:  \\( 0x261F \\)<br>&nbsp;`,
        `Little-endian:  \\( 0x251F \\), Big-endian:  \\( 0x1E26 \\)<br>&nbsp;`,
        `Little-endian:  \\( 0x0E1B \\), Big-endian:  \\( 0x1A0C \\)`,
      ],
      answer: "A",
      solution: `<img src="/images/quiz/wqt-coa1/15.png" style="max-width: 75%;">`
    },
  ]
});


registerTest({
  series: "weekly-cs-gate-2027",
  name: "WQT - CO and Architecture-2 | Instruction Set Architecture",
  date: "Oct 01, 2026",
  questions: [
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>Consider a machine with  \\( 16 \\)-bit instructions and  \\( 16 \\) registers. We wish to encode the following instructions: </p> <ul> <li> \\( 15 \\) instructions with  \\( 3 \\) addresses<br>&nbsp; </li> <li> \\( 14 \\) instructions with  \\( 2 \\) addresses<br>&nbsp; </li> <li> \\( 31 \\) instructions with  \\( 1 \\) address<br>&nbsp; </li> <li> \\( 16 \\) instructions with  \\( 0 \\) addresses </li> </ul> <p>Can we encode this instruction set in  \\( 16 \\) bits? </p> <p></p>`,
      image: "",
      options: [
        `Yes, if we use fixed-length opcodes.<br>&nbsp;`,
        `Yes, if we use expanding opcodes.<br>&nbsp;`,
        `No, because  \\( 15 \\) instructions with  \\( 3 \\) addresses leave no combinations available for other formats.<br>&nbsp;`,
        `No, because we can only encode a maximum of  \\( 15 \\) instructions with  \\( 0 \\) addresses.`,
      ],
      answer: "B",
      solution: `<img src="/images/quiz/wqt-coa2/1.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0,
      type: "NAT",
      text: `<p></p> <p>Consider a  \\( 68 \\)K microprocessor system with a  \\( 24 \\)-bit address bus ( \\( A_{23} \\) to  \\( A_{00} \\)) and a  \\( 16 \\)-bit data bus. The system implements the following memory blocks as illustrated in the memory map diagram below: </p> <ul> <li>A  \\( 1 \\) Mbyte ROM block starting at address  \\( 000000 \\).<br>&nbsp; </li> <li>An  \\( 8 \\) Mbyte DRAM block starting at address \\( 800000 \\).<p><img alt="" src="/images/quiz/wqt-coa2/q2_img1.png" style="max-width: 75%;"></p> </li> </ul> <p>The  \\( 8 \\) Mbyte DRAM memory block is constructed using multiple  \\( 2M \\times 4 \\)-bit memory chips. Because the microprocessor has a  \\( 16 \\)-bit data bus, multiple  \\( 4 \\)-bit chips must be arranged in parallel to form a  \\( 16 \\)-bit word. Calculate the total number of \\( 2M \\times 4 \\)-bit chips required to fully implement this  \\( 8 \\) Mbyte DRAM block. </p> <p></p>`,
      image: "",
      options: [],
      answer: "8",
      solution: `<img src="/images/quiz/wqt-coa2/2.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0,
      type: "NAT",
      text: `<p></p> <p>Consider a  \\( 68 \\)K microprocessor system with a  \\( 24 \\)-bit address bus ( \\( A_{23} \\) to  \\( A_{00} \\)) and a  \\( 16 \\)-bit data bus. The system implements the following memory blocks as illustrated in the memory map diagram below: </p> <ul> <li>A  \\( 1 \\) Mbyte ROM block starting at address  \\( 000000 \\).<br>&nbsp; </li> <li>An  \\( 8 \\) Mbyte DRAM block starting at address \\( 800000 \\). </li> </ul> <p style="text-align:center"><img alt="" src="/images/quiz/wqt-coa2/q3_img2.png" style="max-width: 75%;"></p> <p>The  \\( 1 \\) Mbyte ROM block is located starting at base address  \\( \\texttt{00 0000} \\). As shown in the diagram, this \\( 1 \\) Mbyte block is composed of two discrete  \\( 512 \\) Kbyte sub-blocks (using  \\( 256K \\times 16 \\)-bit chips). The microprocessor must use a specific address line to select between the first  \\( 512 \\) Kbyte sub-block and the second  \\( 512 \\) Kbyte sub-block. What is the index  \\( k \\) of this specific address line  \\( A_k \\)? </p> <p></p>`,
      image: "",
      options: [],
      answer: "19",
      solution: `<img src="/images/quiz/wqt-coa2/3.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0,
      type: "NAT",
      text: `<p>An  \\( 8 \\)-bit register contains the  \\( 2 \\)'s complement representation of the decimal number  \\( -48 \\). The processor executes an Arithmetic Shift Right ( \\( ASR \\)) instruction twice sequentially on this register. What is the final decimal value stored in the register? (Provide the answer as a base- \\( 10 \\) integer, including the sign if negative). </p>`,
      image: "",
      options: [],
      answer: "-12",
      solution: `<img src="/images/quiz/wqt-coa2/4.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0,
      type: "NAT",
      text: `<p>Consider an  \\( 8 \\)-bit register containing the binary value \\( X=10010110_{2} \\). Let  \\( Y \\) be the value resulting from a Logical Shift Right (LSR) by  \\( 2 \\) bits on  \\( X \\). Let  \\( Z \\) be the value resulting from an Arithmetic Shift Right (ASR) by  \\( 2 \\) bits on the original value  \\( X \\). Calculate the absolute difference between the unsigned decimal values of  \\( Z \\) and  \\( Y \\) (i.e.,  \\( |Z-Y| \\)). </p>`,
      image: "",
      options: [],
      answer: "192",
      solution: `<img src="/images/quiz/wqt-coa2/5.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "NAT",
      text: `<p>Assume an instruction set that uses a fixed  \\( 16 \\)-bit instruction length. Operand specifiers are  \\( 6 \\) bits in length. If the instruction set supports exactly  \\( 12 \\) two-operand instructions and  \\( 200 \\) zero-operand instructions, what is the maximum number of one-operand instructions that can be supported? </p>`,
      image: "",
      options: [],
      answer: "252",
      solution: `<img src="/images/quiz/wqt-coa2/6.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>Consider a machine architecture where we want to determine if it is possible to design an expanding opcode. Assume the following parameters:</p> <ul> <li>&nbsp;Instruction length:  \\( 12 \\) bits </li> <li>Register operand size:  \\( 3 \\) bits </li> </ul> <p>We wish to encode the following instruction set:</p> <ul> <li> \\( 4 \\) instructions with  \\( 3 \\) registers<br>&nbsp; </li> <li> \\( 255 \\) instructions with  \\( 1 \\) register<br>&nbsp; </li> <li> \\( 16 \\) instructions with \\(  0 \\) registers </li> </ul> <p>Based on the context and the bit pattern capacity method for evaluating expanding opcodes, which of the following statements are CORRECT?</p> <p></p>`,
      image: "",
      options: [
        `The first  \\( 4 \\) instructions (with  \\( 3 \\) registers) account for exactly  \\( 4 \\times 2^{9}=2048 \\) bit patterns in the overall instruction space.<br>&nbsp;`,
        `The  \\( 255 \\) instructions with  \\( 1 \\) register account for exactly  \\( 255 \\) bit patterns since they only utilize a single operand.<br>&nbsp;`,
        `The total maximum capacity of a  \\( 12 \\) -bit instruction format is  \\( 2^{12}=4096 \\) unique bit patterns.<br>&nbsp;`,
        `The proposed instruction set cannot be encoded because the total required bit patterns ( \\( 4104 \\)) exceed the available capacity.`,
      ],
      answer: ["A", "C", "D"],
      solution: `<img src="/images/quiz/wqt-coa2/7.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>Consider a processor utilizing a  \\( 24 \\)-bit instruction format and a register file with  \\( 64 \\) general-purpose registers. The processor supports  \\( 3,2,1 \\), and  \\( 0 \\)-operand instructions exclusively using an expanding opcode technique. Let  \\( N_{k} \\) represent the number of  \\( k \\)-operand instructions encoded in the system. </p> <p>Which of the following statements regarding the theoretical limits of this instruction set are  \\( \\textbf{ALWAYS TRUE} \\)? (Select all that apply) </p> <p></p>`,
      image: "",
      options: [
        `If the processor implements exactly  \\( N_{3}=63 \\), the absolute maximum possible value for  \\( N_{2} \\) is&nbsp; \\( 64 \\).<br>&nbsp;`,
        `The expansion factor (the multiplier for available opcodes) at every transition from  \\( k \\) to  \\( k-1 \\) operands is exactly  \\( 64 \\).<br>&nbsp;`,
        `If the processor implements  \\( N_{3}=64 \\), it becomes impossible to implement any instructions with fewer operands.<br>&nbsp;`,
        `If the processor implements  \\( N_{3}=62 \\) and  \\( N_{2}=64 \\), the available capacity for  \\( 1 \\)-operand instructions is exactly  \\( 4,096 \\).`,
      ],
      answer: ["A", "B", "C", "D"],
      solution: `<img src="/images/quiz/wqt-coa2/8.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>Consider an  \\( 8 \\)-bit microprocessor with a  \\( 16 \\)-bit address bus. An address decoder selects a specific memory block when the top three address bits ( \\( A_{15}, A_{14}, A_{13} \\)) are set to  \\( 101_{2} \\). The remaining  \\( 13 \\) bits  \\( (x) \\) are used to address individual locations within this memory block, forming the address pattern  \\( 101xxxxxxxxxxxxx_{2} \\). Which of the following statements are  \\( \\textbf{TRUE} \\) regarding this memory configuration? (Select all that apply) </p> <p></p>`,
      image: "",
      options: [
        `The lowest accessible address in this memory block is  \\( A000_{16} \\).<br>&nbsp;`,
        `The highest accessible address in this memory block is  \\( \\mathrm{BFFF}_{16} \\).<br>&nbsp;`,
        `The total size of this specific memory block is  \\( 8 \\) KB.<br>&nbsp;`,
        `Decoding the top three address lines divides the entire  \\( 16 \\)-bit address space into exactly  \\( 4 \\) independent blocks.`,
      ],
      answer: ["A", "B", "C"],
      solution: `<img src="/images/quiz/wqt-coa2/9.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>A  \\( 16 \\)-bit microprocessor addresses a  \\( 32 \\) KB block of ROM mapped contiguously starting from the base memory address  \\( 0000_{16} \\). The  \\( 32 \\) KB ROM block is constructed using four separate  \\( 8 \\) KB memory chips (designated Chip  \\( 0 \\), Chip  \\( 1 \\), Chip  \\( 2 \\), and Chip  \\( 3 \\)). Which of the following statements regarding the memory interfacing and addressing of this system are  \\( \\textbf{TRUE} \\)? (Select all that apply) </p> <p></p>`,
      image: "",
      options: [
        `Each  \\( 8 \\) KB memory chip requires exactly  \\( 13 \\) address lines ( \\( A_{0} \\) to  \\( A_{12} \\)) from the processor to select a specific byte within the chip.<br>&nbsp;`,
        `The valid memory address range serviced by the third chip (Chip  \\( 2 \\)) is exactly  \\( 4000_{16} \\) to  \\( 5FFF_{16} \\).<br>&nbsp;`,
        `To properly decode and select exactly one of the four 8 KB chips during a memory access within the 32 KB block, address lines  \\( A_{13} \\) and  \\( A_{14} \\) can be connected to the select inputs of a 2-to-4 decoder.<br>&nbsp;`,
        `During any valid memory access to this  \\( 32 \\) KB ROM block, the highest order address bit ( \\( A_{15} \\)) must be at a logic ' \\( 1 \\)' state.`,
      ],
      answer: ["A", "B", "C"],
      solution: `<img src="/images/quiz/wqt-coa2/10.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "NAT",
      text: `<p>An  \\( 8 \\)-bit microprocessor with a  \\( 16 \\)-bit address bus interfaces with a  \\( 32 \\) KB block of ROM mapped contiguously starting from memory address  \\( 0000_{16} \\). The ROM block is composed of four \\( 8 \\) KB chips (designated Chip  \\( 0 \\) to Chip  \\( 3 \\) in contiguous order). A  \\( 2 \\)-to- \\( 4 \\) line decoder is utilized to generate the active-low Chip Select  \\( (\\overline{CS}) \\) signals for the four chips. Address lines  \\( A_{14} \\) (connected to the MSB select input) and \\( A_{13} \\) (connected to the LSB select input) of the CPU are routed to the decoder. If the microprocessor executes a read operation to fetch data from the hexadecimal address  \\( 6F3A_{16} \\), what is the decimal value of the decoder output line (from  \\( 0 \\) to  \\( 3 \\)) that becomes active? </p>`,
      image: "",
      options: [],
      answer: "3",
      solution: `<img src="/images/quiz/wqt-coa2/11.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p>Consider a  \\( 68 \\)K microprocessor system with a  \\( 24 \\)-bit address bus ( \\( A_{23} \\) to  \\( A_{00} \\)) and a  \\( 16 \\)-bit data bus. The system implements the following memory blocks as illustrated in the memory map diagram below: </p> <ul> <li>A  \\( 1 \\) Mbyte ROM block starting at address \\( 000000 \\).<br>&nbsp; </li> <li>An  \\( 8 \\) Mbyte DRAM block starting at address \\( 800000 \\). </li> </ul> <p style="text-align:center"><img alt="" src="/images/quiz/wqt-coa2/q12_img3.png" style="max-width: 75%;"></p> <p>The  \\( 8 \\) Mbyte DRAM space mapped starting at address \\( 800000 \\) is divided into two equal  \\( 4 \\) Mbyte sub-blocks, denoted as DRAM  \\( 1 \\) and DRAM  \\( 2 \\). Based on the decoding logic, the first sub-block (DRAM  \\( 1 \\)) is selected when  \\( A_{23}=1 \\) and  \\( A_{22}=0 \\). The second sub-block (DRAM  \\( 2 \\)) is selected when  \\( A_{23}=1 \\) and  \\( A_{22}=1 \\). What is the correct hexadecimal address range for the DRAM  \\( 1 \\) and DRAM  \\( 2 \\) sub-blocks respectively? </p> <p></p>`,
      image: "",
      options: [
        `DRAM  \\( 1 \\):  \\( 800000 \\) to  \\( 9FFFFF \\), DRAM  \\( 2 \\):  \\( A00000 \\) to  \\( BFFFFF \\)<br>&nbsp;`,
        `DRAM  \\( 1 \\):  \\( 800000 \\) to  \\( BFFFFF \\), DRAM  \\( 2 \\):  \\( C00000 \\) to  \\( FFFFFF \\)<br>&nbsp;`,
        `DRAM  \\( 1 \\):  \\( 800000 \\) to  \\( 8FFFFF \\), DRAM  \\( 2 \\):  \\( 900000 \\) to  \\( 9FFFFF \\)<br>&nbsp;`,
        `DRAM  \\( 1 \\):  \\( 800000 \\) to  \\( FFFFFF \\), DRAM  \\( 2 \\):  \\( 000000 \\) to  \\( 7FFFFF \\)`,
      ],
      answer: "B",
      solution: `<img src="/images/quiz/wqt-coa2/12.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "NAT",
      text: `<p>Two  \\( 8 \\) -bit registers  \\( R_{1} \\) and  \\( R_{2} \\) hold the initial binary values  \\( 01011011_{2} \\) and  \\( 10101010_{2} \\), respectively. The following sequence of operations is performed: 1. Logical Shift Left (LSL) on  \\( R_{1} \\) by 3 bits. 2. Bitwise XOR  \\( (\\oplus) \\) the new value of  \\( R_{1} \\) with  \\( R_{2} \\), storing the result back in  \\( R_{1} \\). What is the unsigned decimal value of the final result in  \\( R_{1} \\) ? </p>`,
      image: "",
      options: [],
      answer: "114",
      solution: `<img src="/images/quiz/wqt-coa2/13.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "NAT",
      text: `<p>An  \\( 8 \\)-bit register  \\( A \\) contains the hexadecimal value  \\( C6_{16} \\). A Rotate Right (ROR) operation by \\( 4 \\) bits is performed on register  \\( A \\). What is the unsigned decimal value of the resulting number? </p>`,
      image: "",
      options: [],
      answer: "108",
      solution: `<img src="/images/quiz/wqt-coa2/14.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "NAT",
      text: `<p>An  \\( 8 \\)-bit microprocessor register contains the unsigned decimal value  \\( 173 \\). An instruction is executed that performs a Rotate Left (ROL) by  \\( 3 \\) bits. What is the resulting unsigned decimal value in the register? </p>`,
      image: "",
      options: [],
      answer: "109",
      solution: `<img src="/images/quiz/wqt-coa2/15.png" style="max-width: 75%;">`
    },
  ]
});

registerTest({
  series: "weekly-cs-gate-2027",
  name: "WQT - CO and Architecture-3 | Cache Memory",
  date: "Oct 01, 2026",
  questions: [
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>Which cache mapping function does not require a replacement algorithm?</p> <p></p>`,
      image: "",
      options: [
        `Direct mapping<br>&nbsp;`,
        `Set associative mapping<br>&nbsp;`,
        `Fully associative mapping<br>&nbsp;`,
        `None`,
      ],
      answer: "A",
      solution: `<img src="/images/quiz/wqt-coa3/1.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>Which cache mapping function is least likely to thrash, i.e., it has the lowest chance of two blocks contending with each other to be stored in the same line?</p> <p></p>`,
      image: "",
      options: [
        `Direct mapping<br>&nbsp;`,
        `Set associative mapping<br>&nbsp;`,
        `Fully associative mapping<br>&nbsp;`,
        `All are equally likely`,
      ],
      answer: "C",
      solution: `<img src="/images/quiz/wqt-coa3/2.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>Which is the fastest cache mapping function? ("Fastest" in terms of access/lookup speed)</p> <p></p>`,
      image: "",
      options: [
        `Direct mapping<br>&nbsp;`,
        `Set associative mapping<br>&nbsp;`,
        `Fully associative mapping<br>&nbsp;`,
        `All are equally fast`,
      ],
      answer: "A",
      solution: `<img src="/images/quiz/wqt-coa3/3.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>Consider a  \\( 4 \\)-way set associative cache (  \\( \\mathrm{E}=4 \\) ). Which one of the following statements is true? </p> <p></p>`,
      image: "",
      options: [
        `The cache has  \\( 4 \\) blocks per line.<br>&nbsp;`,
        `The cache has  \\( 4 \\) sets per line.<br>&nbsp;`,
        `The cache has  \\( 4 \\) lines per set.<br>&nbsp;`,
        `The cache has  \\( 4 \\) sets per block.`,
      ],
      answer: "C",
      solution: `<img src="/images/quiz/wqt-coa3/4.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>Which one of the following statements about cache memories is true?</p> <p></p>`,
      image: "",
      options: [
        `Fully associative caches offer better latency, while direct-mapped caches have lower miss rates.<br>&nbsp;`,
        `Fully associative caches offer lower miss rates, while direct-mapped caches have better latency.<br>&nbsp;`,
        `Direct-mapped caches have both better miss rates and better latency.<br>&nbsp;`,
        `Both generally have similar latency and miss rates.`,
      ],
      answer: "B",
      solution: `<img src="/images/quiz/wqt-coa3/5.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "NAT",
      text: `<p></p> <p>The following cache represents a 2-way set associative cache, i.e., there are two lines per set. Notice that the set ID values start at 011011012 and increment every other row. This is meant to imply that you are looking at a group of lines/sets toward the middle of the cache and not the entire cache. There are 14 bits for the tag, 8 bits for the set ID, and 2 bits for the word ID.<br>&nbsp;</p> <p style="text-align:center"><img alt="" src="/images/quiz/wqt-coa3/q6_img1.png" style="max-width: 75%;"></p> <p><br><br>How many lines are contained in this cache?</p> <p></p>`,
      image: "",
      options: [],
      answer: "512",
      solution: `<img src="/images/quiz/wqt-coa3/6.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "NAT",
      text: `<p></p> <p>The following cache represents a  \\( 2 \\)-way set associative cache, i.e., there are two lines per set. Notice that the set ID values start at  \\( 011011012 \\) and increment every other row. This is meant to imply that you are looking at a group of lines/sets toward the middle of the cache and not the entire cache. There are  \\( 14 \\) bits for the tag,  \\( 8 \\) bits for the set id, and  \\( 2 \\) bits for the word id. </p> <p style="text-align:center"><img alt="" src="/images/quiz/wqt-coa3/q7_img2.png" style="max-width: 75%;"></p> <p><br>If the number of blocks contained in the memory space (not the cache, but the memory) of the cache system defined above is  \\( 2^{\\mathrm{n}} \\), then what is  \\( \\mathrm{n} \\) ? </p> <p></p>`,
      image: "",
      options: [],
      answer: "22",
      solution: `<img src="/images/quiz/wqt-coa3/7.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "NAT",
      text: `<p></p> <p>The following cache represents a  \\( 2 \\)-way set associative cache, i.e., there are two lines per set. Notice that the set ID values start at  \\( 011011012 \\) and increment every other row. This is meant to imply that you are looking at a group of lines/sets toward the middle of the cache and not the entire cache. There are  \\( 14 \\) bits for the tag,  \\( 8 \\) bits for the set id, and  \\( 2 \\) bits for the word id. </p> <p style="text-align:center"><img alt="" src="/images/quiz/wqt-coa3/q8_img3.png" style="max-width: 75%;"></p> <p><br>A copy of the data from memory address  \\( \\text{7121C5} \\) (hex) is contained in the portion of the cache shown above. Enter the value that was retrieved from that address as an eight-bit binary number with no base identification, e.g.,  \\( \\text{0x4F} \\) (hexadecimal 4F) should be entered as  \\( 01001111 \\). </p> <p></p>`,
      image: "",
      options: [],
      answer: "10100101",
      solution: `<img src="/images/quiz/wqt-coa3/8.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "NAT",
      text: `<p>Consider a  \\( 256 \\) KB  \\( 4 \\)-way set associative cache with  \\( 256 \\) byte cache lines for a processor that uses \\( 64 \\)-bit data words and  \\( 48 \\)-bit byte addresses. What is the size (in bits) of the tag field per cache block? </p>`,
      image: "",
      options: [],
      answer: "32",
      solution: `<img src="/images/quiz/wqt-coa3/9.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>Consider a  \\( 256 \\) KB  \\( 4 \\)-way set associative cache with  \\( 256 \\) byte cache lines for a processor that uses \\( 64 \\)-bit data words and  \\( 48 \\)-bit byte addresses. Assume the variable x, of type uint64_t, is stored in memory at location 0x4A85 B413 A518. (uint64_t means an unsigned  \\( 64 \\)-bit integer)<br>Assume that x is present in the cache, and char* ptr  \\( =0 \\times 4 \\mathrm{~A} 85 \\) B400 0000. (Note: sizeof(char) = 1)<br><br>Consider the accesses in the following options. For each access, it can be a MISS or HIT or NOT ENOUGH INFO. For each access, it is a MISS if it "must" cause a miss, HIT if it will "never" cause a miss, or NOT ENOUGH INFO.<br>Determine which of the following accesses will cause a cache HIT.<br>&nbsp; </p> <p></p>`,
      image: "",
      options: [
        `*(ptr  \\( +0 \\times 11 \\) A538)<br>&nbsp;`,
        `*(ptr  \\( +0 \\times 13 \\) A588)<br>&nbsp;`,
        `*(ptr  \\( +0 \\times 13 \\) 0218)<br>&nbsp;`,
        `None`,
      ],
      answer: ["B"],
      solution: `<img src="/images/quiz/wqt-coa3/10.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "NAT",
      text: `<p>Suppose a computer has an  \\( 8 \\)-bit address space. It has a  \\( 2 \\)-way set-associative cache with LRU replacement policy. Cache size is  \\( 64 \\) Bytes and block size is  \\( 8 \\) Bytes. What is the length of the tag field (in bits) ? </p>`,
      image: "",
      options: [],
      answer: "3",
      solution: `<img src="/images/quiz/wqt-coa3/11.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "NAT",
      text: `<p>Suppose a computer has an 8-bit address space. It has a  \\( 2 \\)-way set-associative cache with LRU replacement policy. Cache size is  \\( 64 \\) Bytes and block size is  \\( 8 \\) Bytes. The addresses of memory access are as follows; the sequence is from the top to bottom in the table. \$\$  \\begin{array}{|l|l|} \\hline \\textbf{Address} &amp; \\textbf{Hit or Miss} \\\\ \\hline 0b10001000 &amp; \\text{Miss} \\\\ \\hline 0b10011000 &amp; \\text{Miss} \\\\ \\hline 0b10001001 &amp; \\text{Hit} \\\\ \\hline 0b00001000 &amp; \\text{Miss} \\\\ \\hline 0b00001001 &amp; \\\\ \\hline 0b10010001 &amp; \\\\ \\hline 0b11001001 &amp; \\\\ \\hline 0b00001010 &amp; \\\\ \\hline 0b10001001 &amp; \\\\ \\hline \\end{array} \$\$ What is the hit rate (in  \\( \\% \\)) of the memory accesses in the above table? (up to two decimal places) </p>`,
      image: "",
      options: [],
      answer: "33.33",
      solution: `<img src="/images/quiz/wqt-coa3/12.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "NAT",
      text: `<p>Suppose a computer has an  \\( 8 \\)-bit address space. It has a direct mapping cache. Cache size is  \\( 64 \\) Bytes and block size is  \\( 8 \\) Bytes. The addresses of memory access are as follows; the sequence is from the top to bottom in the table. \$\$  \\begin{array}{|l|l|} \\hline \\textbf{Address} &amp; \\textbf{Hit or Miss} \\\\ \\hline 0b10001000 &amp; \\text{Miss} \\\\ \\hline 0b10011000 &amp; \\text{Miss} \\\\ \\hline 0b10001001 &amp; \\text{Hit} \\\\ \\hline 0b00001000 &amp; \\text{Miss} \\\\ \\hline 0b00001001 &amp; \\\\ \\hline 0b10010001 &amp; \\\\ \\hline 0b11001001 &amp; \\\\ \\hline 0b00001010 &amp; \\\\ \\hline 0b10001001 &amp; \\\\ \\hline \\end{array} \$\$ What is the hit rate (in  \\( \\% \\)) of the memory accesses in the above table? (up to two decimal places) </p>`,
      image: "",
      options: [],
      answer: "22.22",
      solution: `<img src="/images/quiz/wqt-coa3/13.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p>A direct-mapped cache has  \\( 64 \\) blocks and a block size of  \\( 16 \\) bytes. To what block number in the cache does byte address  \\( 1220_{10} \\) map? </p> <p></p>`,
      image: "",
      options: [
        `\\( 11 \\)<br>&nbsp;`,
        `\\( 13 \\)<br>&nbsp;`,
        `\\( 12 \\)<br>&nbsp;`,
        `None of the other choices`,
      ],
      answer: "C",
      solution: `<img src="/images/quiz/wqt-coa3/14.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p>The size of the physical&nbsp;address space of a processor is  \\( 2^P \\) bytes. The word length is  \\( 2^W \\) bytes. The capacity of cache memory is \\( 2^N \\) bytes. The size of each cache block is \\( 2^M \\) words. For a  \\( K \\)-way set-associative cache memory, the length (in number of bits) of the tag field is </p> <p></p>`,
      image: "",
      options: [
        `\\( P-N- \\log_2K \\)<br>&nbsp;`,
        `\\( P-N+ \\log_2 K \\)<br>&nbsp;`,
        `\\( P-N-M-W- \\log_2 K \\)<br>&nbsp;`,
        `\\( P-N-M-W+&nbsp;\\log_2 K \\)`,
      ],
      answer: "B",
      solution: `<img src="/images/quiz/wqt-coa3/15.png" style="max-width: 75%;">`
    },
  ]
});

registerTest({
  series: "weekly-cs-gate-2027",
  name: "WQT - CO and Architecture-4 | Cache Memory",
  date: "Oct 01, 2026",
  questions: [
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>Which of the following mapping is not used for mapping process in cache memory</p> <p></p>`,
      image: "",
      options: [
        `Associative mapping<br>&nbsp;`,
        `Direct&nbsp;mapping<br>&nbsp;`,
        `Set-Associative&nbsp;mapping<br>&nbsp;`,
        `Segmented – page mapping`,
      ],
      answer: "D",
      solution: `<img src="/images/quiz/wqt-coa4/1.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>The principle of Locality of reference justifies the use of:</p> <p></p>`,
      image: "",
      options: [
        `Virtual memory<br>&nbsp;`,
        `Interrupts<br>&nbsp;`,
        `Cache memory<br>&nbsp;`,
        `Secondary memory`,
      ],
      answer: "C",
      solution: `<img src="/images/quiz/wqt-coa4/2.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>More than one word is put in one cache block to:</p> <p></p>`,
      image: "",
      options: [
        `exploit the temporal locality of reference in a program<br>&nbsp;`,
        `exploit the spatial locality of reference in a program<br>&nbsp;`,
        `reduce the miss penalty<br>&nbsp;`,
        `none of the above`,
      ],
      answer: "B",
      solution: `<img src="/images/quiz/wqt-coa4/3.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>The tag-search used in a fully associative cache memory is</p> <p></p>`,
      image: "",
      options: [
        `Parallel search<br>&nbsp;`,
        `Sequential search<br>&nbsp;`,
        `Binary search<br>&nbsp;`,
        `Selection search`,
      ],
      answer: "A",
      solution: `<img src="/images/quiz/wqt-coa4/4.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>In a cache memory, if the total number of sets is ‘ \\( s \\)’, then the set offset is: </p> <p></p>`,
      image: "",
      options: [
        `\\( 2^8 \\)<br>&nbsp;`,
        `\\( \\log_2s \\)<br>&nbsp;`,
        `\\( s^2 \\)<br>&nbsp;`,
        `\\( s \\)`,
      ],
      answer: "B",
      solution: `<img src="/images/quiz/wqt-coa4/5.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p>A direct-mapped cache with  \\( 128 \\) KB of data is designed using  \\( 32 \\)-bit addresses. The cache uses a block size of \\( 4 \\) bytes. Each cache line has: A valid bit ( \\( 1 \\) bit), A tag field, data block. What is the total size of the cache (in bits), including both the data array and the tag array? </p> <p></p>`,
      image: "",
      options: [
        `\\( 2 \\) Mbits<br>&nbsp;`,
        `\\( 1.7 \\) Mbits<br>&nbsp;`,
        `\\( 2.5 \\) Mbits<br>&nbsp;`,
        `\\( 1.5 \\) Mbits`,
      ],
      answer: "D",
      solution: `<img src="/images/quiz/wqt-coa4/6.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p>Consider a machine with a byte-addressable main memory of  \\( 2^{16} \\) bytes and a block size of  \\( 8 \\) bytes. Assume that a direct-mapped cache consisting of  \\( 32 \\) lines is used with this machine. How many bits will be there in Tag, line and word fields of the format of main memory addresses? </p> <p></p>`,
      image: "",
      options: [
        `\\( 8,5,3 \\)<br>&nbsp;`,
        `\\( 8,6,2 \\)<br>&nbsp;`,
        `\\( 7,5,4 \\)<br>&nbsp;`,
        `\\( 7,6,3 \\)`,
      ],
      answer: "A",
      solution: `<img src="/images/quiz/wqt-coa4/7.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p>Consider a small  \\( 2 \\)-way set-associative cache memory, consisting of four blocks. For choosing the block to be replaced, use the least recently used (LRU) scheme. The number of cache misses for the following sequence of block addresses is  \\( 8, 12, 0, 12, 8 \\). </p> <p></p>`,
      image: "",
      options: [
        `\\( 2 \\)<br>&nbsp;`,
        `\\( 3 \\)<br>&nbsp;`,
        `\\( 4 \\)<br>&nbsp;`,
        `\\( 5 \\)`,
      ],
      answer: "C",
      solution: `<img src="/images/quiz/wqt-coa4/8.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p>A cache memory needs an access time of  \\( 30 \\) ns and main memory  \\( 150 \\) ns, what is the average access time of the CPU (assume hit ratio  \\( = 80\\% \\))? </p> <p></p>`,
      image: "",
      options: [
        `\\( 60 \\) ns<br>&nbsp;`,
        `\\( 30 \\) ns<br>&nbsp;`,
        `\\( 150 \\) ns<br>&nbsp;`,
        `\\( 70 \\) ns`,
      ],
      answer: "A",
      solution: `<img src="/images/quiz/wqt-coa4/9.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p>A two-way set associative cache memory unit with a capacity of  \\( 16\\, KB \\) is built using a block size of<br> \\( 8\\, words.  \\) The word length is  \\( 32-bits. \\) The physical address space is  \\( 4\\, GB. \\)<br>The number of bits in the<strong> TAG, SET</strong> fields are </p> <p></p>`,
      image: "",
      options: [
        `\\( 20,7 \\)<br>&nbsp;`,
        `\\( 19,8 \\)<br>&nbsp;`,
        `\\( 20,8 \\)<br>&nbsp;`,
        `\\( 21,9 \\)`,
      ],
      answer: "B",
      solution: `<img src="/images/quiz/wqt-coa4/10.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p>In a particular system it is observed that the cache performance gets improved as a result of increasing the block size of the cache. The primary reason behind this is:</p> <p></p>`,
      image: "",
      options: [
        `Programs exhibits temporal locality<br>&nbsp;`,
        `Programs have small working set<br>&nbsp;`,
        `Read operation is frequently required rather than write operation<br>&nbsp;`,
        `Programs exhibits spatial locality`,
      ],
      answer: "D",
      solution: `<img src="/images/quiz/wqt-coa4/11.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p>A direct-mapped cache is of size  \\( \\text{32 KB} \\) and has a block size of  \\( 32 \\) Bytes. The CPU also generates a  \\( 32 \\)-bit address. Number of bits needed for indexing the cache: </p> <p></p>`,
      image: "",
      options: [
        `\\( 14 \\)<br>&nbsp;`,
        `\\( 15 \\)<br>&nbsp;`,
        `\\( 10 \\)<br>&nbsp;`,
        `\\( 17 \\)`,
      ],
      answer: "C",
      solution: `<img src="/images/quiz/wqt-coa4/12.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "NAT",
      text: `<p>A computer system uses  \\( 16- \\)bit memory addresses. It has a  \\( 16KB \\) cache organised in a  \\( 4- \\)way set associative manner with  \\( 64  \\) bytes per cache block. Assume that the size of each memory word is 2B. When a program is executed ,The processor reads data sequentially from the following byte addresses:  \$\$ 128,144,2176,2180,128,2176 \$\$ All the above addresses are shown in decimal values. Assume the cache is initially empty. The number of addresses hit in the cache? </p>`,
      image: "",
      options: [],
      answer: "4",
      solution: `<img src="/images/quiz/wqt-coa4/13.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "NAT",
      text: `<p>Consider a computer with a  \\( 12 \\)-bit address space and a byte-addressable memory. It has a data cache capable of holding eight cache blocks. Each cache block is  \\( 4 \\) bytes. During a particular program execution, the processor issues memory read instructions to the following sequence of block addresses: \$\$  128,129,130,131,189,188,257,256,128,129,131,189,130, \\text { and } 188 . \$\$ If a  \\( 2 \\)-way set-associative cache that uses the LRU-replacement algorithm and the cache is initially empty. The number of blocks that are hit in the cache of program is ____________ </p>`,
      image: "",
      options: [],
      answer: "2",
      solution: `<img src="/images/quiz/wqt-coa4/14.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "NAT",
      text: `<p>A  \\( 4 \\)-way set-associative cache memory unit with a capacity of  \\( 16 \\) KB is built using a block size of  \\( 8 \\) words. The word length is  \\( 32 \\) bits. The size of the physical address space is  \\( 4 \\) GB. The number of bits for the TAG field is _________ </p>`,
      image: "",
      options: [],
      answer: "20",
      solution: `<img src="/images/quiz/wqt-coa4/15.png" style="max-width: 75%;">`
    },
  ]
});


registerTest({
  series: "weekly-cs-gate-2027",
  name: "WQT - CO and Architecture-5 | Cache Memory",
  date: "Oct 01, 2026",
  questions: [
    {
      marks: 1,
      neg: 0,
      type: "NAT",
      text: `<p></p> <p>Assume a system with:</p> <ul> <li> \\( 8 \\)-bit memory addresses<br>&nbsp; </li> <li>direct-mapped cache<br>&nbsp;</li> <li> \\( 2 \\)-byte cache block size<br>&nbsp; </li> <li> \\( 4 \\) cache lines </li> </ul> <p>How many bytes of data can be stored in the cache? Do not include metadata like the tag or valid bit.</p> <p></p>`,
      image: "",
      options: [],
      answer: "8",
      solution: `<img src="/images/quiz/wqt-coa5/1.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0,
      type: "NAT",
      text: `<p></p> <p>Assume a system with:</p> <ul> <li> \\( 8 \\)-bit memory addresses<br>&nbsp; </li> <li>direct-mapped cache<br>&nbsp;</li> <li> \\( 2 \\)-byte cache block size<br>&nbsp; </li> <li> \\( 4 \\) cache lines </li> </ul> <p>Determine the number of tag bits.</p> <p></p>`,
      image: "",
      options: [],
      answer: "5",
      solution: `<img src="/images/quiz/wqt-coa5/2.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>In a direct-mapped cache, how are the different bits of the memory address used? (Select all correct options.)</p> <p></p>`,
      image: "",
      options: [
        `The tag bits are used to uniquely identify which block of main memory is currently stored in a cache line.<br>&nbsp;`,
        `The index bits are used to select which cache line a memory block maps to.<br>&nbsp;`,
        `The byte offset bits are used to select the specific byte within a cache block.<br>&nbsp;`,
        `The tag bits are used to select which cache line a memory block maps to.`,
      ],
      answer: ["A", "B", "C"],
      solution: `<img src="/images/quiz/wqt-coa5/3.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0,
      type: "NAT",
      text: `<p></p> <p>Assume a system with:</p> <ul> <li> \\( 8 \\)-bit memory addresses<br>&nbsp; </li> <li> \\( 2 \\)-byte cache block size<br>&nbsp; </li> <li>The cache is  \\( 2 \\)-way set associative with a total of  \\( 4 \\) sets </li> </ul> <p>Determine the number of tag bits.</p> <p></p>`,
      image: "",
      options: [],
      answer: "5",
      solution: `<img src="/images/quiz/wqt-coa5/4.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>LRU is an effective cache replacement strategy, primarily because programs</p> <p></p>`,
      image: "",
      options: [
        `exhibit locality of reference<br>&nbsp;`,
        `usually have small working sets<br>&nbsp;`,
        `read data much more frequently than write data<br>&nbsp;`,
        `always access memory addresses in strictly increasing order`,
      ],
      answer: "A",
      solution: `<img src="/images/quiz/wqt-coa5/5.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>Assume a system with:</p> <ul> <li> \\( 8 \\)-bit memory addresses<br>&nbsp; </li> <li>direct-mapped cache<br>&nbsp;</li> <li> \\( 2 \\)-byte cache block size<br>&nbsp; </li> <li> \\( 4 \\) cache lines </li> </ul> <p>Which of the following pairs of memory addresses belong to different memory blocks but map to the same cache line? (Addresses are specified in base- \\( 2 \\).) </p> <p></p>`,
      image: "",
      options: [
        `\\( 00000000 \\) and  \\( 00001000 \\)<br>&nbsp;`,
        `\\( 00100101 \\) and  \\( 01100101 \\)<br>&nbsp;`,
        `\\( 01010010 \\) and  \\( 01010011 \\)<br>&nbsp;`,
        `\\( 01101010 \\) and  \\( 01101100 \\)`,
      ],
      answer: ["A", "B"],
      solution: `<img src="/images/quiz/wqt-coa5/6.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "NAT",
      text: `<p></p> <p>Assume a system with:</p> <ul> <li> \\( 8 \\)-bit memory addresses<br>&nbsp; </li> <li>direct-mapped cache<br>&nbsp;</li> <li> \\( 2 \\)-byte cache block size<br>&nbsp; </li> <li> \\( 4 \\) cache lines </li> </ul> <p>The following memory operations (R: read, W : write) are performed. Addresses are specified in base- \\( 2 \\).<br><br>1. R \\( 00101010 \\)<br><br>2. W \\( 00101011 \\)<br><br>3. R \\( 11001100 \\)<br><br>4. R \\( 11001010 \\)<br><br>5. R \\( 11001011 \\)<br><br>6. W \\( 00111101 \\)<br><br>7. R \\( 00111100 \\)<br><br>8. W \\( 00101100 \\)<br><br>Each operation above is either a hit or a miss, which indicates whether the data is found in the cache or not. All cache lines are initially empty.<br><br>What is the total number of cache misses that occur during this sequence? </p> <p></p>`,
      image: "",
      options: [],
      answer: "5",
      solution: `<img src="/images/quiz/wqt-coa5/7.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "NAT",
      text: `<p></p> <p>Assume a system with:</p> <ul> <li> \\( 8 \\)-bit memory addresses<br>&nbsp; </li> <li> \\( 2 \\)-byte cache block size<br>&nbsp; </li> <li>The cache is  \\( 2 \\)-way set associative with a total of  \\( 4 \\) sets </li> </ul> <p>The following memory operations (R: read, W: write) are performed. Addresses are specified in base- \\( 2 \\).<br><br>1. R \\( 00011010 \\)<br><br>2. W \\( 00011011 \\)<br><br>3. R \\( 11111000 \\)<br><br>4. R \\( 11111010 \\)<br><br>5. R \\( 01101000 \\)<br><br>6. W \\( 00001001 \\)<br><br>7. R \\( 00000000 \\)<br><br>8. W \\( 00011010 \\)<br><br>Each operation above is either a hit or a miss, which indicates whether the data is found in the cache or not. All cache lines are initially empty. When a block is evicted, select the victim using the LRU (Least Recently Used) replacement policy.<br><br>What is the total number of cache misses that occur during this sequence? </p> <p></p>`,
      image: "",
      options: [],
      answer: "6",
      solution: `<img src="/images/quiz/wqt-coa5/8.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p>If increasing the block size of a cache improves performance, it is primarily because programs</p> <p></p>`,
      image: "",
      options: [
        `exhibit temporal locality<br>&nbsp;`,
        `exhibit spatial locality<br>&nbsp;`,
        `usually have small working sets<br>&nbsp;`,
        `read data much more frequently than write data`,
      ],
      answer: "B",
      solution: `<img src="/images/quiz/wqt-coa5/9.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p>Which of the following statements is/are FALSE?<br><br>I: In set associative mapping, if set size is reduced to  \\( 1 \\), it reduces to fully associative mapping.<br><br>II: In set associative mapping, if only one set is present, it reduces to direct mapping. </p> <p></p>`,
      image: "",
      options: [
        `I Only<br>&nbsp;`,
        `II Only<br>&nbsp;`,
        `Both I and II<br>&nbsp;`,
        `None`,
      ],
      answer: "C",
      solution: `<img src="/images/quiz/wqt-coa5/10.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p>Consider a system with a block size of  \\( p \\) words. What is the range of words present in the  \\( \\mathrm{k^{th}} \\) block of main memory? </p> <p></p>`,
      image: "",
      options: [
        `\\( k \\cdot p \\;\\; \\text{to} \\;\\; (k+1)\\cdot p - 1 \\)<br>&nbsp;`,
        `\\( k \\cdot p^{2} \\;\\; \\text{to} \\;\\; (k+1)\\cdot p^{2} \\)<br>&nbsp;`,
        `\\( k \\cdot 2^{p} \\;\\; \\text{to} \\;\\; (k+1)\\cdot 2^{p} - 1 \\) <br>&nbsp;`,
        `\\( k \\cdot 2^{p} \\;\\; \\text{to} \\;\\; k \\cdot 2^{\\,p+1} - 1 \\)`,
      ],
      answer: "A",
      solution: `<img src="/images/quiz/wqt-coa5/11.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p>A computer has a  \\( 512 \\) KB ,  \\( 8 \\) -way set associative data cache with a block size of  \\( 32 \\) B. The  \\( 1 \\) point processor sends  \\( 32 \\)-bit addresses to the cache controller. Each cache tag directory entry contains, in addition to the address tag,  \\( 2 \\) valid bits,  \\( 1 \\) modified bit and  \\( 1 \\) replacement bit.<br><br>what will be the number of tag bits? </p> <p></p>`,
      image: "",
      options: [
        `\\( 11 \\)<br>&nbsp;`,
        `\\( 16 \\)<br>&nbsp;`,
        `\\( 21 \\)<br>&nbsp;`,
        `\\( 12 \\)`,
      ],
      answer: "B",
      solution: `<img src="/images/quiz/wqt-coa5/12.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p>A computer's processor sends  \\( 32 \\) bit addresses to the cache controller. It has a  \\( 512 \\mathrm{KByte}, 8 \\)-way set associative, write-back data cache with a block size of  \\( 32 \\) Bytes. In addition to the address tag, each cache tag directory entry contains  \\( 3 \\) valid bits and  \\( 1 \\) modified bit. Find the size of the cache tag directory. </p> <p></p>`,
      image: "",
      options: [
        `\\( 212 \\) Kbits<br>&nbsp;`,
        `\\( 320 \\) Kbits<br>&nbsp;`,
        `\\( 160 \\) Kbits<br>&nbsp;`,
        `\\( 120 \\) Kbits`,
      ],
      answer: "B",
      solution: `<img src="/images/quiz/wqt-coa5/13.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p>Consider a small two-way set-associative cache memory, consisting of four blocks. For choosing the block to be replaced, use the least recently used (LRU) scheme. The number of cache misses for the following sequence of block addresses is:</p> <p> \$\$ 8, 12, 0, 12, 8 \$\$ </p> <p></p>`,
      image: "",
      options: [
        `\\( 2 \\)<br>&nbsp;`,
        `\\( 3 \\)<br>&nbsp;`,
        `\\( 4 \\)<br>&nbsp;`,
        `\\( 5 \\)`,
      ],
      answer: "C",
      solution: `<img src="/images/quiz/wqt-coa5/14.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "NAT",
      text: `<p>A  \\( 4 \\)-way set-associative cache memory unit with a capacity of  \\( 16 \\) KB is built using a block size of  \\( 8 \\) words. The word length is  \\( 32 \\) bits. The size of the physical address space is  \\( 4 \\) GB. The number of bits for the TAG field is ____ </p>`,
      image: "",
      options: [],
      answer: "20",
      solution: `<img src="/images/quiz/wqt-coa5/15.png" style="max-width: 75%;">`
    },
  ]
});

registerTest({
  series: "weekly-cs-gate-2027",
  name: "WQT - CO and Architecture-6 | Cache Memory",
  date: "Oct 01, 2026",
  questions: [
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>Match the following types of cache misses with the most appropriate technique to reduce them:<br><br>List – I (Cache Misses)</p> <ol start="1" style="list-style-type: upper-alpha;"> <li>Capacity Misses</li> <li>Compulsory Misses</li> <li>Conflict Misses</li> </ol> <p>List - II (Techniques to reduce them)</p> <ol style="list-style-type:upper-roman"> <li>Increase Associativity</li> <li>Increase Block Size</li> <li>Increase Cache Size</li> </ol> <p>&nbsp;</p> <p>&nbsp;</p> <p></p>`,
      image: "",
      options: [
        `A-III, B-II, C-I<br>&nbsp;`,
        `A-II, B-III, C-I<br>&nbsp;`,
        `A-I, B-II, C-III<br>&nbsp;`,
        `A-III, B-I, C-II`,
      ],
      answer: "A",
      solution: `<img src="/images/quiz/wqt-coa6/1.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>Compared to an  \\( 8 \\) K-byte direct-mapped cache, what type of misses will a  \\( 16 \\) K-byte direct-mapped cache have fewer of? (Mark all that apply). </p> <p></p>`,
      image: "",
      options: [
        `compulsory<br>&nbsp;`,
        `conflict<br>&nbsp;`,
        `capacity<br>&nbsp;`,
        `none`,
      ],
      answer: ["B", "C"],
      solution: `<img src="/images/quiz/wqt-coa6/2.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>Let A1 represents an event of playing a video file by accessing the pixel contents of adjacent frames of the video from memory. And let A2 represents an event of initializing a 1D array with the value zero on all array elements sequentially using a for loop. Which of the following is TRUE?</p> <p></p>`,
      image: "",
      options: [
        `Neither A1 nor A2 shows temporal or spatial locality.<br>&nbsp;`,
        `A1 shows temporal locality and A2 shows spatial locality.<br>&nbsp;`,
        `Both A1 and A2 show spatial locality.<br>&nbsp;`,
        `A1 shows spatial locality and A2 shows temporal locality.`,
      ],
      answer: ["C"],
      solution: `<img src="/images/quiz/wqt-coa6/3.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0,
      type: "NAT",
      text: `<p>A  \\( 128 \\mathrm{~KB} \\)  \\( \\mathrm{n} \\)-way set associative cache has a block size of  \\( 256 \\) bytes. The cache has  \\( 64 \\) sets. Then the value of  \\( n \\) is __________ </p>`,
      image: "",
      options: [],
      answer: "8",
      solution: `<img src="/images/quiz/wqt-coa6/4.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>Consider a machine with a byte-addressable main memory of  \\( 2^{20} \\) bytes, a block size of  \\( 16 \\) bytes and a direct-mapped cache having  \\( 2^{12} \\) cache lines. Let the addresses of two consecutive bytes in main memory be  \\( \\textsf{(E201F)}_{16} \\) and  \\( \\textsf{(E2020)}_{16} \\). What are the tag and cache line addresses (in hex) for main memory address  \\( \\textsf{(E201F)}_{16} \\)? </p> <p></p>`,
      image: "",
      options: [
        `\\( \\textsf{E, 201} \\)<br>&nbsp;`,
        `\\( \\textsf{F, 201} \\)<br>&nbsp;`,
        `\\( \\textsf{E, E20} \\)<br>&nbsp;`,
        `\\( \\textsf{2, 01F} \\)`,
      ],
      answer: "A",
      solution: `<img src="/images/quiz/wqt-coa6/5.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "NAT",
      text: `<p>In a  \\( 32 \\) K-byte four-way set-associative cache with \\( 32 \\)byte blocks, how large is the index field used to address the cache array? (write down the number of bits) </p>`,
      image: "",
      options: [],
      answer: "8",
      solution: `<img src="/images/quiz/wqt-coa6/6.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "NAT",
      text: `<p>Assume you are given a  \\( 64 \\) byte direct-mapped cache. The cache uses a \\( 16 \\) byte line size. Assume that you have a memory reference address stream that is listed below. \$\$  \\begin{array}{|c|} \\hline \\textbf{Reference Address} \\\\ \\hline 0 \\times \\mathrm{0000} \\\\ \\hline 0 \\times \\mathrm{0148} \\\\ \\hline 0 \\times \\mathrm{028c} \\\\ \\hline 0 \\times \\mathrm{03c0} \\\\ \\hline 0 \\times \\mathrm{0004} \\\\ \\hline 0 \\times \\mathrm{0408} \\\\ \\hline 0 \\times \\mathrm{014c} \\\\ \\hline 0 \\times \\mathrm{000c} \\\\ \\hline \\end{array} \$\$ The cache starts in the initial state of all lines invalid. What is the total number of cache misses that occur during this sequence? </p>`,
      image: "",
      options: [],
      answer: "8",
      solution: `<img src="/images/quiz/wqt-coa6/7.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "NAT",
      text: `<p>Assume you are given a  \\( 64 \\) byte  \\( 4 \\)-way set associative cache with LRU replacement. The cache uses a  \\( 16 \\) byte line size. Assume that you have a memory reference address stream that is listed below. \$\$  \\begin{array}{|c|} \\hline \\textbf{Reference Address} \\\\ \\hline 0 \\times \\mathrm{0000} \\\\ \\hline 0 \\times \\mathrm{0148} \\\\ \\hline 0 \\times \\mathrm{028c} \\\\ \\hline 0 \\times \\mathrm{03c0} \\\\ \\hline 0 \\times \\mathrm{0004} \\\\ \\hline 0 \\times \\mathrm{0408} \\\\ \\hline 0 \\times \\mathrm{014c} \\\\ \\hline 0 \\times \\mathrm{000c} \\\\ \\hline \\end{array} \$\$ The cache starts in the initial state of all lines invalid. What is the total number of cache misses that occur during this sequence? </p>`,
      image: "",
      options: [],
      answer: "6",
      solution: `<img src="/images/quiz/wqt-coa6/8.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p>Consider the following two questions:</p> <ol> <li>Can a direct-mapped cache sometimes have a higher hit rate than a fully associative cache with an LRU replacement policy (on the same memory reference pattern and with the same cache size)?<br>&nbsp;</li> <li>Can a  \\( 2 \\)-way set cache sometimes have a higher hit rate than a fully associative cache with an LRU replacement policy (on the same memory reference pattern and with the same cache size)? </li> </ol> <p>What's the correct answer?</p> <p></p>`,
      image: "",
      options: [
        `Yes, Yes<br>&nbsp;`,
        `Yes, No<br>&nbsp;`,
        `No, Yes<br>&nbsp;`,
        `No, No`,
      ],
      answer: "A",
      solution: `<img src="/images/quiz/wqt-coa6/9.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>The following problem concerns basic cache lookups.</p> <ul> <li>The memory is byte-addressable.<br>&nbsp;</li> <li>Memory accesses are to 1-byte words (not 4-byte words).<br>&nbsp;</li> <li>Physical addresses are 13 bits wide.<br>&nbsp;</li> <li>The cache is 4-way set associative, with a 4-byte block size and 32 total lines.</li> </ul> <p>In the following tables, all numbers are given in hexadecimal. The Index column contains the set index for each set of 4 lines. The Tag columns contain the tag value for each line. The V column contains the valid bit for each line. The Bytes 0-3 columns contain the data for each line, numbered left-to-right starting with byte 0 on the left.<br><br>The contents of the cache are as follows:<br>&nbsp;</p> <p style="text-align:center"><img alt="" src="/images/quiz/wqt-coa6/q10_img1.png" style="max-width: 75%;"></p> <p><br><br>For which of the given physical addresses does a cache miss occur?</p> <p></p>`,
      image: "",
      options: [
        `Physical address:  \\( \\mathrm{0x0D74} \\)<br>&nbsp;`,
        `Physical address:  \\( \\mathrm{0x0AEE} \\)<br>&nbsp;`,
        `Physical address:  \\( \\mathrm{0x0A2E} \\)<br>&nbsp;`,
        `Physical address:  \\( \\mathrm{0x109C} \\)`,
      ],
      answer: ["A", "C"],
      solution: `<img src="/images/quiz/wqt-coa6/10.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p>The following problem concerns basic cache lookups.</p> <ul> <li>The memory is byte-addressable.<br>&nbsp;</li> <li>Memory accesses are to  \\( 1 \\)-byte words (not  \\( 4 \\)-byte words).<br>&nbsp; </li> <li>Physical addresses are  \\( 13 \\) bits wide.<br>&nbsp; </li> <li>The cache is  \\( 4 \\)-way set associative, with a 4-byte block size and  \\( 32 \\) total lines. </li> </ul> <p>In the following tables, all numbers are given in hexadecimal. The Index column contains the set index for each set of  \\( 4 \\) lines. The Tag columns contain the tag value for each line. The V column contains the valid bit for each line. The Bytes  \\( 0 \\)- \\( 3 \\) columns contain the data for each line, numbered left-to-right starting with byte  \\( 0 \\) on the left.<br><br>The contents of the cache are as follows:<br>&nbsp; </p> <p style="text-align:center"><img alt="" src="/images/quiz/wqt-coa6/q11_img2.png" style="max-width: 75%;"></p> <p><br><br>For the given physical address below, indicate the cache byte value returned in hex.<br><br>Physical address: 0x0AEE</p> <p></p>`,
      image: "",
      options: [
        `FA<br>&nbsp;`,
        `FF<br>&nbsp;`,
        `\\( 11 \\)<br>&nbsp;`,
        `It's a miss`,
      ],
      answer: "B",
      solution: `<img src="/images/quiz/wqt-coa6/11.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "NAT",
      text: `<p></p> <p>The following problem concerns basic cache lookups.</p> <ul> <li>The memory is byte addressable.<br>&nbsp;</li> <li>Memory accesses are to 1-byte words (not 4-byte words).<br>&nbsp;</li> <li>Physical addresses are 13 bits wide.<br>&nbsp;</li> <li>The cache is 4-way set associative, with a 4-byte block size and 32 total lines.</li> </ul> <p>In the following tables, all numbers are given in hexadecimal. The Index column contains the set index for each set of 4 lines. The Tag columns contain the tag value for each line. The V column contains the valid bit for each line. The Bytes 0-3 columns contain the data for each line, numbered left-to-right starting with byte 0 on the left.<br><br>The contents of the cache are as follows:<br>&nbsp;</p> <p style="text-align:center"><img alt="" src="/images/quiz/wqt-coa6/q12_img3.png" style="max-width: 75%;"></p> <p><br><br>For the given contents of the cache, how many physical memory addresses will hit in Set  \\( 7 \\)? </p> <p></p>`,
      image: "",
      options: [],
      answer: "8",
      solution: `<img src="/images/quiz/wqt-coa6/12.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "NAT",
      text: `<p></p> <p>The following problem concerns basic cache lookups.</p> <ul> <li>The memory is byte-addressable.<br>&nbsp;</li> <li>Memory accesses are to 1-byte words (not  \\( 4 \\)-byte words).<br>&nbsp; </li> <li>Physical addresses are  \\( 13 \\) bits wide.<br>&nbsp; </li> <li>The cache is  \\( 4 \\)-way set associative, with a  \\( 4 \\)-byte block size and  \\( 32 \\) total lines. </li> </ul> <p>In the following tables, all numbers are given in hexadecimal. The Index column contains the set index for each set of  \\( 4 \\) lines. The Tag columns contain the tag value for each line. The V column contains the valid bit for each line. The Bytes  \\( 0 \\)- \\( 3 \\) columns contain the data for each line, numbered left-to-right starting with byte 0 on the left.<br><br>The contents of the cache are as follows:<br>&nbsp; </p> <p style="text-align:center"><img alt="" src="/images/quiz/wqt-coa6/q13_img4.png" style="max-width: 75%;"></p> <p><br><br>For the given contents of the cache, what is the probability (expressed as a percentage) of a cache hit when the physical memory address ranges between 0x1080 and 0x109F? Assume that all addresses are equally likely to be referenced.</p> <p></p>`,
      image: "",
      options: [],
      answer: "50",
      solution: `<img src="/images/quiz/wqt-coa6/13.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "NAT",
      text: `<p>The following  \\( 13 \\) block requests  \\( \\mathrm{A}, \\mathrm{B}, \\mathrm{A}, \\mathrm{C}, \\mathrm{D}, \\mathrm{C}, \\mathrm{B}, \\mathrm{A}, \\mathrm{C}, \\mathrm{D}, \\mathrm{E}, \\mathrm{F}, \\&amp; \\mathrm{E} \\) are mapped to set n of a  \\( 2 \\)-way set associative cache memory that uses LIFO block replacement policy. Assume that set  \\( n \\) is initially empty; then the total number of misses encountered after servicing all these requests is _______. </p>`,
      image: "",
      options: [],
      answer: "11",
      solution: `<img src="/images/quiz/wqt-coa6/14.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "NAT",
      text: `<p>The address of a word in a byte-addressable  \\( 1 \\) MB physical memory is  \\( \\mathrm{0xB7496} \\). This word, upon being brought to the cache, is mapped to set number  \\( 36 \\) (set numbering starts from  \\( 0 \\) to  \\( n-1 \\)). The block size of the cache memory (in bytes) is ________. </p>`,
      image: "",
      options: [],
      answer: "32",
      solution: `<img src="/images/quiz/wqt-coa6/15.png" style="max-width: 75%;">`
    },
  ]
});

registerTest({
  series: "weekly-cs-gate-2027",
  name: "WQT - CO and Architecture-7 | Cache Memory",
  date: "Oct 01, 2026",
  questions: [
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p>A cache memory needs an access time of  \\( 30 \\) ns and main memory  \\( 150 \\) ns, what is the average access time of the CPU (assume hit ratio  \\( = 80\\%)? \\) </p> <p></p>`,
      image: "",
      options: [
        `\\( 60 \\) ns<br>&nbsp;`,
        `\\( 30 \\) ns<br>&nbsp;`,
        `\\( 150 \\) ns<br>&nbsp;`,
        `\\( 70 \\) ns`,
      ],
      answer: "A",
      solution: `<img src="/images/quiz/wqt-coa7/1.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "NAT",
      text: `<p>The L3 cache of a computer has a hit time of  \\( 15 \\) cycles and a miss penalty of  \\( 300 \\) cycles. Suppose that the hit rate for this cache, for a given application, is  \\( 95\\% \\). Considering just this cache, what is the average memory access time in cycles? </p>`,
      image: "",
      options: [],
      answer: "30",
      solution: `<img src="/images/quiz/wqt-coa7/2.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "NAT",
      text: `<p>The timing for a particular cache is as follows: checking the cache takes  \\( 1 \\) cycle. If there's a hit the data is returned to the CPU at the end of the first cycle. If there's a miss, it takes  \\( 10 \\) additional cycles to retrieve the word from main memory, store it in the cache, and return it to the CPU. If we want an average memory access time of  \\( 1.4 \\) cycles, what is the minimum possible value for the cache's hit ratio (in  \\( \\% \\))? </p>`,
      image: "",
      options: [],
      answer: "96",
      solution: `<img src="/images/quiz/wqt-coa7/3.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "NAT",
      text: `<p>The Beta Engineering Team is working on the design of a cache. This cache takes  \\( 2 \\) clock cycles to determine if a memory access is a hit or a miss and, if it's a hit, return data to the Beta(i.e. the CPU). If the access is a miss, the cache takes  \\( 20 \\) additional clock cycles to fill the cache line and return the requested word to the Beta. If the hit rate is  \\( 90\\% \\), what is the Beta's average memory access time in clock cycles? </p>`,
      image: "",
      options: [],
      answer: "4",
      solution: `<img src="/images/quiz/wqt-coa7/4.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "NAT",
      text: `<p>Consider a  \\( 2 \\)-way set-associative cache where each way has \\( 4 \\) cache lines with a block size of  \\( 2 \\) words. Using this cache, a particular benchmark program experiences an average memory access time (AMAT) of  \\( 1.3 \\) cycles. The access time on a cache hit is \\( 1 \\) cycle; the miss penalty (i.e., additional access time) is  \\( 10 \\) cycles. What is the hit ratio when running the benchmark program (in  \\( \\% \\))? </p>`,
      image: "",
      options: [],
      answer: "97",
      solution: `<img src="/images/quiz/wqt-coa7/5.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "NAT",
      text: `<p>Find the AMAT for a processor with a  \\( 1 \\) ns clock cycle time, a miss penalty of  \\( 20 \\) clock cycles, a miss rate of  \\( 0.05 \\) misses per instruction, and a cache access time (including hit detection) of  \\( 1 \\) clock cycle. Assume that the read and write miss penalties are the same and ignore other write stalls. The average memory access time (in ns) per instruction is? </p>`,
      image: "",
      options: [],
      answer: "2",
      solution: `<img src="/images/quiz/wqt-coa7/6.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "NAT",
      text: `<p>Assume that for a certain processor, a read request takes  \\( 50\\:\\text{nanoseconds} \\) on a cache miss and \\( 5\\:\\text{nanoseconds} \\) on a cache hit. Suppose while running a program, it was observed that  \\( 80\\% \\) of the processor's read requests result in a cache hit. The average read access time in nanoseconds is ______. </p>`,
      image: "",
      options: [],
      answer: "14",
      solution: `<img src="/images/quiz/wqt-coa7/7.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "NAT",
      text: `<p>Consider that a computer system has  \\( 5 \\) ns of latency when accessing cache and  \\( 70 \\) ns when accessing main memory. What should your application's average hit rate be (in  \\( \\% \\)) in order to have an average memory access latency of  \\( 15 \\) ns (Round to two decimal places)? </p>`,
      image: "",
      options: [],
      answer: "85.71",
      solution: `<img src="/images/quiz/wqt-coa7/8.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "NAT",
      text: `<p>Assume that checking the cache on each read takes  \\( 1 \\) cycle and that refilling the cache on a miss takes an additional  \\( 8 \\) cycles. If we wanted the average access time over many reads to be  \\( 1.1 \\) cycles, what is the minimum hit ratio the cache must achieve during that period of time (in  \\( \\% \\)) ? </p>`,
      image: "",
      options: [],
      answer: "98.75",
      solution: `<img src="/images/quiz/wqt-coa7/9.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "NAT",
      text: `<p></p> <p>A cache memory that has a hit rate of  \\( 0.8 \\) has an access latency  \\( 10 \\; \\text{ns} \\) and miss penalty  \\( 100 \\; \\text{ns}. \\) An optimization is done on the cache to reduce the miss rate. However, the optimization results in an increase of cache access latency to  \\( 15 \\; \\text{ns}, \\) whereas the miss penalty is not affected. The minimum hit rate <em>(rounded off to two decimal places)</em>&nbsp;needed after the optimization such that it should not increase the average memory access time is _______________. </p> <p></p>`,
      image: "",
      options: [],
      answer: "0.85",
      solution: `<img src="/images/quiz/wqt-coa7/10.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p>A computer has a single cache (off-chip) with a  \\( 3 \\) ns hit time and a  \\( 95\\% \\) hit rate. Main memory has a  \\( 50 \\) ns access time. If we add an on-chip cache with a  \\( 0.6 \\) ns hit time and a  \\( 98\\% \\) hit rate, the computer’s effective access time: </p> <p></p>`,
      image: "",
      options: [
        `\\( \\text{2.8&nbsp;ns} \\)<br>&nbsp;`,
        `\\( \\text{5.5&nbsp;ns} \\)<br>&nbsp;`,
        `\\( \\text{0.7&nbsp;ns} \\)<br>&nbsp;`,
        `None of the options`,
      ],
      answer: "C",
      solution: `<img src="/images/quiz/wqt-coa7/11.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p>In a two-level cache system, the access times of the  \\( L_1 \\) and  \\( L_2 \\) caches are  \\( 1 \\) and  \\( 8 \\) clock cycles, respectively. The miss penalty from the  \\( L_2 \\) cache to main memory is  \\( 18 \\) clock&nbsp;cycles. The miss rate of the \\( L_1 \\) cache is twice that of  \\( L_2 \\). The average memory access time (AMAT) of this cache system is  \\( 2 \\) cycles. The miss rates of  \\( L_1 \\) and  \\( L_2 \\) respectively are </p> <p></p>`,
      image: "",
      options: [
        `\\( 0.111 \\) and  \\( 0.056 \\)<br>&nbsp;`,
        `\\( 0.056 \\) and  \\( 0.111 \\)<br>&nbsp;`,
        `\\( 0.0892 \\) and  \\( 0.1784 \\)<br>&nbsp;`,
        `\\( 0.1784 \\) and  \\( 0.0892 \\)`,
      ],
      answer: "A",
      solution: `<img src="/images/quiz/wqt-coa7/12.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "NAT",
      text: `<p>Consider a memory system with a cache access time of  \\( 10 \\) ns and a memory access time of  \\( 110 \\) ns assume the memory access time includes the time to check the cache. If the effective access time is  \\( 10\\% \\) greater than the cache access time, what is the hit ratio H? (fractional answer) </p>`,
      image: "",
      options: [],
      answer: "0.99",
      solution: `<img src="/images/quiz/wqt-coa7/13.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "NAT",
      text: `<p></p> <p>A file system uses an in-memory cache to cache disk blocks. The miss rate of the cache is shown in the figure. The latency to read a block from the cache is  \\( 1 \\) ms and to read a block from the disk is  \\( 10 \\) ms. Assume that the cost of checking whether a block exists in the cache is negligible. Available cache sizes are in multiples of  \\( 10 \\) MB. </p> <p><img alt="" src="/images/quiz/wqt-coa7/q14_img1.png" style="max-width: 75%;"></p> <p>The smallest cache size required to ensure an average read latency of less than  \\( 6 \\) ms is _________ MB. </p> <p></p>`,
      image: "",
      options: [],
      answer: "30",
      solution: `<img src="/images/quiz/wqt-coa7/14.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <div style="text-align: justify;">Consider a system with a  \\( 2 \\) level cache. Access times of Level  \\( 1 \\) cache, Level  \\( 2 \\) cache and main memory are  \\( 1 \\)  \\( ns \\),  \\( 10 \\)  \\( ns \\), and  \\( 500 \\)  \\( ns \\), respectively. The hit rates of Level  \\( 1 \\) and Level  \\( 2 \\) caches are  \\( 0.8 \\) and  \\( 0.9 \\), respectively. What is the average access time of the system, ignoring the search time within the cache? </div> <p>&nbsp;</p> <p></p>`,
      image: "",
      options: [
        `\\( 13.0 \\)<br>&nbsp;`,
        `\\( 12.8 \\)<br>&nbsp;`,
        `\\( 12.6 \\)<br>&nbsp;`,
        `\\( 12.4 \\)`,
      ],
      answer: "C",
      solution: `<img src="/images/quiz/wqt-coa7/15.png" style="max-width: 75%;">`
    },
  ]
});


registerTest({
  series: "weekly-cs-gate-2027",
  name: "WQT - CO and Architecture-8 | Pipelining",
  date: "Oct 01, 2026",
  questions: [
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>Assume that the original machine is a  \\( 5 \\)-stage pipeline with a  \\( 1\\ \\text{ns} \\) clock cycle. The second machine is a  \\( 12 \\)-stage pipeline with a  \\( 0.6\\ \\text{ns} \\) clock cycle. The  \\( 5 \\)-stage pipeline experiences a stall due to a data hazard every  \\( 5 \\) instructions, whereas the  \\( 12 \\)-stage pipeline experiences  \\( 3 \\) stalls every  \\( 8 \\) instructions. In addition, branches constitute \\( 20\\% \\) of the instructions, and the misprediction rate for both machines is  \\( 5\\% \\).<br><br>If the branch mispredict penalty for the first machine is  \\( 2 \\) cycles but the second machine is  \\( 5 \\) cycles, what are the  \\( \\text{CPI} \\)s of each, taking into account the stalls due to branch mispredictions? </p> <p></p>`,
      image: "",
      options: [
        `\\( \\text{CPI}_5 = 1.20,\\quad \\text{CPI}_{12} = 1.375 \\)<br>&nbsp;`,
        `\\( \\text{CPI}_5 = 1.22,\\quad \\text{CPI}_{12} = 1.425 \\)<br>&nbsp;`,
        `\\( \\text{CPI}_5 = 1.02,\\quad \\text{CPI}_{12} = 1.050 \\)<br>&nbsp;`,
        `\\( \\text{CPI}_5 = 1.42,\\quad \\text{CPI}_{12} = 1.875 \\)`,
      ],
      answer: "B",
      solution: `<img src="/images/quiz/wqt-coa8/1.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>A nonpipelined processor has a clock rate of  \\( 2.5\\ \\text{GHz} \\) and an average  \\( \\text{CPI} \\) (cycles per instruction) of  \\( 4 \\). An upgrade to the processor introduces a five-stage pipeline. However, due to internal pipeline delays, such as latch delay, the clock rate of the new processor has to be reduced to  \\( 2\\ \\text{GHz} \\).<br><br>What is the MIPS rate for each processor? </p> <p></p>`,
      image: "",
      options: [
        `Nonpipelined:  \\( 625\\ \\text{MIPS} \\); Pipelined:  \\( 2000\\ \\text{MIPS} \\)<br>&nbsp;`,
        `Nonpipelined:  \\( 1000\\ \\text{MIPS} \\); Pipelined:  \\( 2500\\ \\text{MIPS} \\)<br>&nbsp;`,
        `Nonpipelined:  \\( 625\\ \\text{MIPS} \\); Pipelined:  \\( 400\\ \\text{MIPS} \\)<br>&nbsp;`,
        `Nonpipelined:  \\( 2500\\ \\text{MIPS} \\); Pipelined:  \\( 2000\\ \\text{MIPS} \\)`,
      ],
      answer: "A",
      solution: `<img src="/images/quiz/wqt-coa8/2.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0,
      type: "NAT",
      text: `<p>Assume a basic instruction pipeline with four stages: Fetch Instruction  \\( \\text{(FI)} \\), Decode Instruction and Calculate Addresses  \\( \\text{(DA)} \\), Fetch Operand  \\( \\text{(FO)} \\), and Execute  \\( \\text{(EX)} \\). Consider a dynamic execution sequence of exactly  \\( 7 \\) valid instructions, where the third instruction in this sequence is a conditional branch that is taken. There are no data dependencies between any of the instructions. Assuming the branch condition and target address are strictly resolved at the end of the Execute  \\( \\text{(EX)} \\) stage (meaning instructions fetched from the fall-through path are flushed), determine the total number of clock cycles required to completely execute this sequence of  \\( 7 \\) instructions. </p>`,
      image: "",
      options: [],
      answer: "13",
      solution: `<img src="/images/quiz/wqt-coa8/3.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>A nonpipelined processor has a clock rate of  \\( 2.5\\ \\text{GHz} \\) and an average  \\( \\text{CPI} \\) (cycles per instruction) of  \\( 4 \\). An upgrade to the processor introduces a five-stage pipeline. However, due to internal pipeline delays, such as latch delay, the clock rate of the new processor has to be reduced to  \\( 2\\ \\text{GHz} \\).<br><br>What is the speedup achieved for a typical program? </p> <p></p>`,
      image: "",
      options: [
        `\\( 0.8 \\)<br>&nbsp;`,
        `\\( 2.0 \\)<br>&nbsp;`,
        `\\( 3.2 \\)<br>&nbsp;`,
        `\\( 4.0 \\)`,
      ],
      answer: "C",
      solution: `<img src="/images/quiz/wqt-coa8/4.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>Which of the following are true statements about control hazards?</p> <p></p>`,
      image: "",
      options: [
        `Control hazards are less challenging to minimize than data hazards.<br>&nbsp;`,
        `Delayed branches completely eliminate the performance impact of control hazards.<br>&nbsp;`,
        `The performance of a pipeline depends on the accuracy of its branch predictor.<br>&nbsp;`,
        `Hardware can do a better job predicting branches than a programmer or compiler.`,
      ],
      answer: ["C", "D"],
      solution: `<img src="/images/quiz/wqt-coa8/5.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>In the context of computer architecture and instruction pipelining, which of the following statements regarding resource and control hazards are correct? (Select all that apply)</p> <p></p>`,
      image: "",
      options: [
        `A resource hazard, sometimes referred to as a structural hazard, occurs when multiple instructions in the pipeline require the same hardware resource simultaneously.<br>&nbsp;`,
        `Increasing available resources, such as adding multiple memory ports or multiple ALU units, is primarily a solution for control hazards.<br>&nbsp;`,
        `A control hazard is also known as a branch hazard and involves bringing instructions into the pipeline that must subsequently be discarded due to incorrect branch prediction.<br>&nbsp;`,
        `A resource conflict can only occur during the instruction fetch and memory read/write phases of a pipeline.`,
      ],
      answer: ["A", "C"],
      solution: `<img src="/images/quiz/wqt-coa8/6.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>Consider the execution of instructions in a pipeline. Which of the following accurately describe data hazards? (Select all that apply)</p> <p></p>`,
      image: "",
      options: [
        `A write after read  \\( \\text{(WAR)} \\) hazard, also known as a true dependency, happens when a read takes place before the write operation is complete.<br>&nbsp;`,
        `A read after write&nbsp; \\( \\text{(RAW)} \\)&nbsp;hazard is also referred to as a true dependency.<br>&nbsp;`,
        `An output dependency&nbsp; \\( \\text{(WAW)} \\)&nbsp;occurs if two instructions write to the same location, and the write operations take place in the reverse order of their intended sequence.<br>&nbsp;`,
        `The instruction sequence  \\( \\verb|ADD R1,R2| \\) followed immediately by \\( \\verb|SUB R3,R1| \\) can lead to a data hazard resulting in inefficient pipeline usage if forwarding is absent.`,
      ],
      answer: ["B", "C", "D"],
      solution: `<img src="/images/quiz/wqt-coa8/7.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "NAT",
      text: `<p>A microprocessor is clocked at a rate of  \\( 5\\ \\text{GHz} \\). Let  \\( x \\) be the duration of a single clock cycle measured in nanoseconds  \\( \\text{(ns)} \\). Let  \\( y \\) be the duration of a particular type of machine instruction consisting of three clock cycles, also measured in nanoseconds  \\( \\text{(ns)} \\).<br>Determine the value of  \\( \\log_x(y) \\). (Round off to  \\( 3 \\) decimal places.) </p>`,
      image: "",
      options: [],
      answer: "0.317",
      solution: `<img src="/images/quiz/wqt-coa8/8.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p>A computer has main memory with an access time of  \\( 60\\ \\text{ns} \\) and cache memory with an access time of  \\( 15\\ \\text{ns} \\). The computer has a  \\( 50\\ \\text{MHz} \\) clock and all operations require two clock cycles. On average the computer spends  \\( 40\\% \\) of its time accessing memory and  \\( 60\\% \\) performing internal operations (an internal operation is a non-memory access). If the hit ratio is  \\( 92\\% \\), what is the speedup ratio for this system? </p> <p></p>`,
      image: "",
      options: [
        `\\( 1.15 \\)<br>&nbsp;`,
        `\\( 1.25 \\)<br>&nbsp;`,
        `\\( 1.38 \\)<br>&nbsp;`,
        `\\( 1.52 \\)`,
      ],
      answer: "C",
      solution: `<img src="/images/quiz/wqt-coa8/9.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p>A computer has main memory with an access time of  \\( 50\\ \\text{ns} \\) and cache memory with an access time of  \\( 10\\ \\text{ns} \\). The cache has a line size of \\( 16\\ \\text{bytes} \\) and the computers memory bus is  \\( 32\\ \\text{bits} \\) wide. The cache controller operates in a burst mode and can transfer  \\( 32\\ \\text{bytes} \\) between cache and main memory in  \\( 80\\ \\text{ns} \\). Whenever a miss occurs the cache must be reloaded with a line. If the average hit ratio is  \\( 90\\% \\), what is the speedup ratio? </p> <p></p>`,
      image: "",
      options: [
        `\\( 2.50 \\)<br>&nbsp;`,
        `\\( 3.57 \\)<br>&nbsp;`,
        `\\( 3.85 \\)<br>&nbsp;`,
        `\\( 5.00 \\)`,
      ],
      answer: "B",
      solution: `<img src="/images/quiz/wqt-coa8/10.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>For the following ideal systems, calculate the hit ratio  \\( (h) \\) required to achieve the stated speedup ratio  \\( S \\). </p> <ol start="1" style="list-style-type: lower-alpha;"> <li> \\( t_m = 60\\ \\text{ns} \\quad t_c = 10\\ \\text{ns} \\quad S = 1.1 \\) <br>&nbsp; </li> <li> \\( t_m = 60\\ \\text{ns} \\quad t_c = 10\\ \\text{ns} \\quad S = 1.5 \\) <br>&nbsp; </li> </ol> <p>Which of the following statements are <strong>CORRECT</strong>?</p> <p></p>`,
      image: "",
      options: [
        `For system (a), the required hit ratio  \\( h \\) is approximately  \\( 10.9\\% \\).<br>&nbsp;`,
        `For system (a), the required hit ratio  \\( h \\) is exactly  \\( 15.0\\% \\).<br>&nbsp;`,
        `For system (b), the required hit ratio  \\( h \\) is exactly  \\( 40.0\\% \\).<br>&nbsp;`,
        `For system (b), the required hit ratio  \\( h \\) is exactly  \\( 50.0\\% \\).`,
      ],
      answer: ["A", "C"],
      solution: `<img src="/images/quiz/wqt-coa8/11.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "NAT",
      text: `<p></p> <p>We begin with a computer implemented in single-cycle implementation. When the stages are split by functionality, the stages do not require exactly the same amount of time. The original machine had a clock cycle time of  \\( 7\\ \\text{ns} \\). After the stages were split, the measured times were  \\( \\text{IF, }1\\ \\text{ns}; \\text{ ID, } 1.5\\ \\text{ns}; \\text{ EX, } 1\\ \\text{ns}; \\text{ MEM, } 2\\ \\text{ns}; \\) and  \\( \\text{WB, } 1.5\\ \\text{ns} \\). The pipeline register delay is  \\( 0.1\\ \\text{ns} \\).<br>If there is a stall every \\( 4 \\) instructions, what is the speedup of the new pipelined machine over the single-cycle machine? <em>(Round off to two decimal places)</em> </p> <p></p>`,
      image: "",
      options: [],
      answer: "2.67",
      solution: `<img src="/images/quiz/wqt-coa8/12.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p>Assume that the original machine is a  \\( 5 \\)-stage pipeline with a  \\( 1\\ \\text{ns} \\) clock cycle. The second machine is a  \\( 12 \\)-stage pipeline with a  \\( 0.6\\ \\text{ns} \\) clock cycle. The  \\( 5 \\)-stage pipeline experiences a stall due to a data hazard every  \\( 5 \\) instructions, whereas the  \\( 12 \\)-stage pipeline experiences  \\( 3 \\) stalls every  \\( 8 \\) instructions. In addition, branches constitute  \\( 20\\% \\) of the instructions, and the misprediction rate for both machines is  \\( 5\\% \\).<br>What is the speedup of the  \\( 12 \\)-stage pipeline over the  \\( 5 \\)-stage pipeline, taking into account only data hazards? </p> <p></p>`,
      image: "",
      options: [
        `\\( 1.25 \\)<br>&nbsp;`,
        `\\( 1.45 \\)<br>&nbsp;`,
        `\\( 1.60 \\)<br>&nbsp;`,
        `\\( 1.83 \\)`,
      ],
      answer: "B",
      solution: `<img src="/images/quiz/wqt-coa8/13.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>Consider two programs that have the following characteristics.</p> <p style="text-align:center"><img alt="" src="/images/quiz/wqt-coa8/q14_img1.png" style="max-width: 75%;"> </p> <p>The ideal CPI is  \\( 1 \\) for both the programs. Let  \\( 50\\% \\) of the load instructions suffer from a load-use hazard. Assume that the frequency of  \\( P_1 \\) is  \\( 1 \\), and the frequency of  \\( P_2 \\) is  \\( 1.5 \\). Here, the units of the frequency are not relevant. Compare the performance of  \\( P_1 \\) and  \\( P_2 \\).<br><br>Which of the following statements is true regarding the performance of the two programs? </p> <p></p>`,
      image: "",
      options: [
        `\\( P_1 \\) is faster than  \\( P_2 \\), with a performance score of  \\( 1.4 \\) vs  \\( 1.23 \\).<br>&nbsp;`,
        `\\( P_2 \\) is faster than  \\( P_1 \\), with a performance score of  \\( 1.22 \\) vs  \\( 0.71 \\).<br>&nbsp;`,
        `Both programs have the same performance because their ideal CPI is  \\( 1 \\).<br>&nbsp;`,
        `\\( P_1 \\) is faster because its load fraction is higher.`,
      ],
      answer: ["B"],
      solution: `<img src="/images/quiz/wqt-coa8/14.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>Assume a microprocessor is executing a program in which the probability of a program jump is  \\( 0.1 \\). For simplicity, assume that all instructions are  \\( 2\\ \\text{bytes} \\) long. </p> <ol start="1" style="list-style-type: lower-alpha;"> <li>What fraction of instruction fetch bus cycles is wasted?<br>&nbsp;</li> <li>Repeat if the instruction queue is  \\( 8\\ \\text{bytes} \\) long. </li> </ol> <p>Assuming the original microprocessor is based on a standard  \\( 4 \\)-byte instruction queue architecture (like the  \\( 8088 \\)), which of the following statements correctly answer the questions above? </p> <p></p>`,
      image: "",
      options: [
        `For part (a), the fraction of wasted instruction fetch bus cycles is exactly  \\( 1/6 \\).<br>&nbsp;`,
        `For part (a), the fraction of wasted instruction fetch bus cycles is exactly  \\( 1/5 \\).<br>&nbsp;`,
        `For part (b), the fraction of wasted instruction fetch bus cycles is exactly  \\( 2/7 \\).<br>&nbsp;`,
        `For part (b), the fraction of wasted instruction fetch bus cycles is exactly  \\( 1/4 \\).`,
      ],
      answer: ["A", "C"],
      solution: `<img src="/images/quiz/wqt-coa8/15.png" style="max-width: 75%;">`
    },
  ]
});

registerTest({
  series: "weekly-cs-gate-2027",
  name: "WQT - CO and Architecture-9 | IO Interfacing",
  date: "Oct 01, 2026",
  questions: [
    {
      marks: 1,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>Which of the following is/are true?</p> <p></p>`,
      image: "",
      options: [
        `DMA requires a special controller that facilitates the transfer of blocks between the I/O device and main memory.<br>&nbsp;`,
        `The overhead of polling depends on the polling frequency.<br>&nbsp;`,
        `Polling is often a viable option for slow and asynchronous devices.<br>&nbsp;`,
        `DMA usually slows down overall system performance.`,
      ],
      answer: ["A", "B"],
      solution: `<img src="/images/quiz/wqt-coa9/1.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>Which of the following is/are true?</p> <p></p>`,
      image: "",
      options: [
        `Direct Memory Access (DMA) bypasses the cache or TLB to read directly from main memory.<br>&nbsp;`,
        `Direct Memory Access (DMA) is "direct" because it accesses devices via memory directly rather than processor instructions.<br>&nbsp;`,
        `Direct Memory Access (DMA) can reduce the load on the processor when accessing block devices such as disks.<br>&nbsp;`,
        `When a DMA controller needs to use the bus to access memory, it performs "cycle stealing" by making the CPU wait if it is also trying to access memory. Even though the CPU is continually executing, the DMA device might find the bus to memory free when it needs to access memory.`,
      ],
      answer: ["A", "C", "D"],
      solution: `<img src="/images/quiz/wqt-coa9/2.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>Which of the following is/are false?</p> <p></p>`,
      image: "",
      options: [
        `Interrupt-driven I/O allows the CPU to perform useful work while the I/O is performed.<br>&nbsp;`,
        `Memory-mapped I/O uses standard memory instructions such as load and store.<br>&nbsp;`,
        `Memory-mapped I/O uses a distinct memory space separate from physical memory.<br>&nbsp;`,
        `DMA passes data through a CPU register during I/O.`,
      ],
      answer: ["C", "D"],
      solution: `<img src="/images/quiz/wqt-coa9/3.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0,
      type: "NAT",
      text: `<p>Assume that a program wants to copy a  \\( 500 \\) word block of data from an I/O device to memory. Let A, B and C be the total number of interrupts for whole block transfer using Programmed IO, Interrupt-driven IO and Direct-memory access respectively. What is the value of  \\( A+B+C \\) ? </p>`,
      image: "",
      options: [],
      answer: "101",
      solution: `<img src="/images/quiz/wqt-coa9/4.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0,
      type: "NAT",
      text: `<p>Assume that for a single polling operation, a processor running at  \\( 1 \\) MHz takes  \\( 200 \\) cycles. A processor polls a printer  \\( 1000 \\) times per minute. What percentage of time does the processor spend in polling? (Round off to  \\( 2 \\) decimal places) </p>`,
      image: "",
      options: [],
      answer: "0.33",
      solution: `<img src="/images/quiz/wqt-coa9/5.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "NAT",
      text: `<p>With the GATE exam just a few months away, Alice realizes she won't finish making notes in time, so she buys a laser printer to print topper's handwritten notes. Suppose that she bought a laser printer that produces up to  \\( 45 \\) pages per minute, where each page consists of \\( 5000 \\) characters. The manual for the laser printer states that the system uses interrupt-driven I/O by raising an interrupt for every character. If each interrupt takes  \\( 50 \\) microseconds to process, how much CPU time will be spent processing interrupts (in  \\( \\% \\))? </p>`,
      image: "",
      options: [],
      answer: "18.75",
      solution: `<img src="/images/quiz/wqt-coa9/6.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "NAT",
      text: `<p>Suppose Bob (a sneaky prankster) replaces Alice's laser printer with a toaster on April  \\( 1^{st} \\). Unfortunately, Alice urgently needs to print lecture notes for the upcoming class, and decides that the easiest solution is to buy a new printer. The new printer has the same specifications as Alice's old printer: it can produce  \\( 45 \\) pages per minute, where each page consists of  \\( 5000 \\) characters. However, an upgrade in the system hardware allows the polling-driven implementation to take up only  \\( 10 \\% \\) of the CPU time instead. How long (in microseconds) should the interrupt-driven implementation take for each interrupt to "break even"? (Round off to  \\( 2 \\) decimal places.) </p>`,
      image: "",
      options: [],
      answer: "26.66",
      solution: `<img src="/images/quiz/wqt-coa9/7.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "NAT",
      text: `<p>Assume that a program wants to copy a  \\( 500 \\) word block of data from an I/O device to memory. Let  \\( \\mathrm{A}, \\mathrm{B} \\) and C be the total number of READ I/O commands issued by the CPU to the I/O module using Programmed IO, Interrupt-driven IO and Direct-memory access respectively. What is the value of  \\( A+B+C \\) ? </p>`,
      image: "",
      options: [],
      answer: "201",
      solution: `<img src="/images/quiz/wqt-coa9/8.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "NAT",
      text: `<p>A DMA module is transferring characters to memory using cycle stealing, from a device transmitting at \\( 9600 \\) bps . The processor is fetching instructions at the rate of  \\( 1 \\) million instructions per second (  \\( 1 \\) MIPS). By how much will the processor be slowed down due to the DMA activity (in  \\( \\% \\))? </p>`,
      image: "",
      options: [],
      answer: "0.12",
      solution: `<img src="/images/quiz/wqt-coa9/9.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p>Consider a system in which bus cycles takes  \\( 500 \\) ns . Transfer of bus control in either direction, from processor to I/O device or vice versa, takes  \\( 250 \\) ns . One of the I/O devices has a data transfer rate of  \\( 50 \\mathrm{~KB} / \\mathrm{s} \\) and employs DMA. Data are transferred 1 byte at a time. Suppose we employ DMA in a burst mode. That is, the DMA interface gains bus mastership prior to the start of a block transfer and maintains control of the bus until the whole block is transferred. For how long would the device tie up the bus when transferring a block of \\( 128 \\) bytes? </p> <p></p>`,
      image: "",
      options: [
        `\\( 64.5 \\) microsecond<br>&nbsp;`,
        `\\( 64 \\) microsecond<br>&nbsp;`,
        `\\( 2.56 \\) millisecond<br>&nbsp;`,
        `\\( 3.56 \\) millisecond`,
      ],
      answer: "C",
      solution: `<img src="/images/quiz/wqt-coa9/10.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "NAT",
      text: `<p>Consider a system in which bus cycles takes  \\( 500 \\) ns . Transfer of bus control in either direction, from processor to I/O device or vice versa, takes  \\( 250 \\) ns . One of the I/O devices has a data transfer rate of  \\( 50 \\mathrm{~KB} / \\mathrm{s} \\) and employs DMA. Data are transferred  \\( 1 \\) byte at a time. Suppose we employ DMA in a cycle-stealing mode. For how long (in microsecond) would the device tie up the bus when transferring a block of  \\( 128 \\) bytes? </p>`,
      image: "",
      options: [],
      answer: "128",
      solution: `<img src="/images/quiz/wqt-coa9/11.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "NAT",
      text: `<p>Consider a system employing interrupt-driven I/O for a particular device that transfers data at an average of  \\( 8 \\mathrm{~KB} / \\mathrm{s} \\) on a continuous basis. Assume that interrupt processing takes about  \\( 100 \\mu s \\) (i.e., the time to jump to the interrupt service routine (ISR), execute it, and return to the main program). Determine what percentage of processor time is consumed by this I/O device if it interrupts for every byte. (Assume  \\( 1 \\mathrm{~KB}=1000 \\) Byte) </p>`,
      image: "",
      options: [],
      answer: "80",
      solution: `<img src="/images/quiz/wqt-coa9/12.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "NAT",
      text: `<p>Consider a system employing interrupt-driven I/O for a particular device that transfers data at an average of  \\( 8 \\mathrm{~KB} / \\mathrm{s} \\) on a continuous basis. Assume that interrupt processing takes about  \\( 100 \\mu s \\) (i.e., the time to jump to the interrupt service routine (ISR), execute it, and return to the main program). Assume that the device has two  \\( 16 \\)-byte buffers and interrupts the processor when one of the buffers is full. Naturally, interrupt processing takes longer, because the ISR must transfer  \\( 16 \\) bytes. While executing the ISR, the processor takes about  \\( 8 \\mu \\mathrm{~s} \\) for the transfer of each byte. Determine what percentage of processor time is consumed by this I/O device in this case. (Assume \\( 1 \\mathrm{~KB}=1000 \\) Byte) </p>`,
      image: "",
      options: [],
      answer: "11.4",
      solution: `<img src="/images/quiz/wqt-coa9/13.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p>A certain microprocessor requires  \\( 4.5~\\mu s \\) to respond to an interrupt. Assume that the three interrupts  \\( I_1 \\),  \\( I_2 \\), and  \\( I_3 \\) require the following execution times after the interrupt is recognized: </p> <ol style="list-style-type:upper-roman"> <li> \\( I_1 \\) requires  \\( 25 \\) microseconds<br>&nbsp; </li> <li> \\( I_2 \\) requires  \\( 35 \\) microseconds<br>&nbsp; </li> <li> \\( I_3 \\) requires  \\( 20 \\) microseconds </li> </ol> <p> \\( I_1 \\) has the highest priority and  \\( I_3 \\) has the lowest priority. What is the possible range of time for  \\( I_3 \\) to be executed, assuming that it may or may not occur simultaneously with the other interrupts? </p> <p></p>`,
      image: "",
      options: [
        `\\( 24.5 \\) microseconds to  \\( 39.5 \\) microseconds<br>&nbsp;`,
        `\\( 24.5 \\) microseconds to  \\( 93.5 \\) microseconds<br>&nbsp;`,
        `\\( 4.5 \\) &nbsp;microseconds to  \\( 24.5 \\) microseconds<br>&nbsp;`,
        `\\( 29.5 \\) microseconds to  \\( 93.5 \\) microseconds`,
      ],
      answer: "B",
      solution: `<img src="/images/quiz/wqt-coa9/14.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "NAT",
      text: `<p></p> <p>A DMA controller transfers  \\( 16 \\) -bit words to memory using cycle stealing. The words are assembled from a device that transmits characters at a rate of  \\( 2400 \\) characters per second. The CPU is fetching and executing instructions at an average rate of  \\( 1 \\) million instructions per second. By how much percentage will the CPU be slowed down because of the DMA transfer? </p> <ol style="list-style-type:upper-alpha"> <li> \\( 0.06 \\)<br>&nbsp; </li> <li> \\( 0.12 \\)<br>&nbsp; </li> <li> \\( 1.2 \\)<br>&nbsp; </li> <li> \\( 2.5 \\) </li> </ol> <p></p>`,
      image: "",
      options: [],
      answer: "0.12",
      solution: `<img src="/images/quiz/wqt-coa9/15.png" style="max-width: 75%;">`
    },
  ]
});

registerTest({
  series: "weekly-cs-gate-2027",
  name: "WQT - CO and Architecture-10 | Floating Point Rep & Booth's Algo",
  date: "Oct 01, 2026",
  questions: [
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>Consider a reduced  \\( 7 \\)-bit  \\( \\text{IEEE} \\) floating-point format, with  \\( 1 \\) bit for the sign,  \\( 3 \\) bits for the exponent, and  \\( 3 \\) bits for the significand. What is the binary representation of the decimal number  \\( 3.5 \\) in this format? </p> <p></p>`,
      image: "",
      options: [
        `\\( 0100110_2 \\)<br>&nbsp;`,
        `\\( 0101110_2 \\)<br>&nbsp;`,
        `\\( 0011110_2 \\)<br>&nbsp;`,
        `\\( 0100011_2 \\)`,
      ],
      answer: "A",
      solution: `<img src="/images/quiz/wqt-coa10/1.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>Match the original binary multiplier in  \\( \\text{List I} \\) with its corresponding Booth encoded representation in  \\( \\text{List II} \\).<br> \$\$  \\begin{array}{ll} \\textbf{List I (Multiplier)} &amp; \\textbf{List II (Booth Encoded)}\\\\ \\text{P. } 0\\ 1\\ 1\\ 1\\ 0\\ 0\\ 0\\ 0 &amp; \\text{1. } +1\\ \\ 0\\ \\ 0\\ \\ -1\\ \\ +1\\ \\ 0\\ \\ -1\\ \\ 0 \\\\ \\text{Q. } 0\\ 1\\ 1\\ 1\\ 0\\ 1\\ 1\\ 0 &amp; \\text{2. } +1\\ \\ 0\\ \\ 0\\ \\ -1\\ \\ 0\\ \\ 0\\ \\ 0\\ \\ 0 \\\\ &amp; \\text{3. } +1\\ \\ -1\\ \\ +1\\ \\ -1\\ \\ +1\\ \\ -1\\ \\ +1\\ \\ -1 \\\\ &amp; \\text{4. } 0\\ \\ 0\\ \\ 0\\ \\ 0\\ \\ +1\\ \\ 0\\ \\ 0\\ \\ -1 \\end{array}  \$\$ <br><strong>Options:</strong> </p> <p></p>`,
      image: "",
      options: [
        `\\( \\text{P-1, Q-2} \\)<br>&nbsp;`,
        `\\( \\text{P-2, Q-1} \\)<br>&nbsp;`,
        `\\( \\text{P-2, Q-4} \\)<br>&nbsp;`,
        `\\( \\text{P-4, Q-1} \\)`,
      ],
      answer: "B",
      solution: `<img src="/images/quiz/wqt-coa10/2.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>Match the original binary multiplier in  \\( \\text{List I} \\) with its corresponding Booth encoded representation in  \\( \\text{List II} \\). Note that one of these multipliers illustrates the worst case for Booths multiplication.<br> \$\$  \\begin{array}{ll} \\textbf{List I (Multiplier)} &amp; \\textbf{List II (Booth Encoded)}\\\\ \\text{P. } 0\\ 0\\ 0\\ 0\\ 0\\ 1\\ 1\\ 1 &amp; \\text{1. } +1\\ \\ 0\\ \\ 0\\ \\ -1\\ \\ 0\\ \\ 0\\ \\ 0\\ \\ 0 \\\\ \\text{Q. } 0\\ 1\\ 0\\ 1\\ 0\\ 1\\ 0\\ 1 &amp; \\text{2. } +1\\ \\ -1\\ \\ +1\\ \\ -1\\ \\ +1\\ \\ -1\\ \\ +1\\ \\ -1 \\\\ &amp; \\text{3. } 0\\ \\ 0\\ \\ 0\\ \\ 0\\ \\ +1\\ \\ 0\\ \\ 0\\ \\ -1 \\\\ &amp; \\text{4. } +1\\ \\ 0\\ \\ 0\\ \\ -1\\ \\ +1\\ \\ 0\\ \\ -1\\ \\ 0 \\end{array}  \$\$ <br><strong>Options:</strong> </p> <p></p>`,
      image: "",
      options: [
        `\\( \\text{P-3, Q-2} \\)<br>&nbsp;`,
        `\\( \\text{P-1, Q-4} \\)<br>&nbsp;`,
        `\\( \\text{P-2, Q-3} \\)<br>&nbsp;`,
        `\\( \\text{P-3, Q-4} \\)`,
      ],
      answer: "A",
      solution: `<img src="/images/quiz/wqt-coa10/3.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0,
      type: "NAT",
      text: `<p>Consider the decimal number  \\( 1000.708 \\). If this number is stored in the standard  \\( \\text{IEEE-754} \\)  \\( 32 \\)-bit single-precision floating-point format, what is the decimal equivalent of the  \\( 8 \\)-bit biased exponent field? </p>`,
      image: "",
      options: [],
      answer: "136",
      solution: `<img src="/images/quiz/wqt-coa10/4.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0,
      type: "NAT",
      text: `<p>A computer system uses the  \\( \\text{IEEE-754} \\) single-precision ( \\( 32 \\)-bit) format to store floating-point numbers. When the decimal number  \\( 100.125 \\) is stored in this format, what is the total number of ' \\( 1 \\)'s present in the entire  \\( 32 \\)-bit binary representation? </p>`,
      image: "",
      options: [],
      answer: "6",
      solution: `<img src="/images/quiz/wqt-coa10/5.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p>Convert the  \\( 32 \\)-bit  \\( \\text{IEEE} \\) format number  \\( \\text{C33BD000}_{16} \\) into its decimal representation. </p> <p></p>`,
      image: "",
      options: [
        `\\( -187.8125 \\)<br>&nbsp;`,
        `\\( 187.8125 \\)<br>&nbsp;`,
        `\\( -155.8125 \\)<br>&nbsp;`,
        `\\( -187.625 \\)`,
      ],
      answer: "A",
      solution: `<img src="/images/quiz/wqt-coa10/6.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p>Match the  \\( \\text{IEEE} \\) floating-point formats given in \\( \\text{List I} \\) with their corresponding precision  \\( (p) \\) and maximum exponent  \\( (E_{\\max}) \\) parameters given in  \\( \\text{List II} \\).<br> \$\$  \\begin{array}{ll} \\textbf{List I (Format)} &amp; \\textbf{List II (Parameters)} \\\\ \\text{P. Single} &amp; \\text{1. } p \\geq 64,\\ E_{\\max} \\geq 16383 \\\\ \\text{Q. Single extended} &amp; \\text{2. } p = 53,\\ E_{\\max} = 1023 \\\\ \\text{R. Double} &amp; \\text{3. } p = 24,\\ E_{\\max} = 127 \\\\ \\text{S. Double extended} &amp; \\text{4. } p \\geq 32,\\ E_{\\max} \\geq 1023 \\end{array}  \$\$ <br><strong>Options:</strong> </p> <p></p>`,
      image: "",
      options: [
        `\\( \\text{P-3, Q-4, R-2, S-1} \\)<br>&nbsp;`,
        `\\( \\text{P-3, Q-2, R-4, S-1} \\)<br>&nbsp;`,
        `\\( \\text{P-4, Q-3, R-1, S-2} \\)<br>&nbsp;`,
        `\\( \\text{P-2, Q-1, R-3, S-4} \\)`,
      ],
      answer: "A",
      solution: `<img src="/images/quiz/wqt-coa10/7.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>Consider the representation of special values in floating-point formats. When the exponent of a number falls outside the normalized range  \\( E_{\\min} \\leq e \\leq E_{\\max} \\), that number has a special interpretation. Match the conditions in  \\( \\text{List I} \\) with their corresponding representations in  \\( \\text{List II} \\).<br> \$\$  \\begin{array}{ll} \\textbf{List I (Exponent and Fraction)} &amp; \\textbf{List II (Represents)} \\\\ \\text{P. } e = E_{\\min} - 1,\\ f = 0 &amp; \\text{1. } \\pm\\infty \\\\ \\text{Q. } e = E_{\\min} - 1,\\ f \\neq 0 &amp; \\text{2. NaN} \\\\ \\text{R. } e = E_{\\max} + 1,\\ f = 0 &amp; \\text{3. } \\pm 0 \\\\ \\text{S. } e = E_{\\max} + 1,\\ f \\neq 0 &amp; \\text{4. } 0.f \\times 2^{E_{\\min}} \\end{array}  \$\$ <br>Which of the following options correctly describe the matching(s)? </p> <p></p>`,
      image: "",
      options: [
        `\\( \\text{P-3, Q-4, R-1, S-2} \\)<br>&nbsp;`,
        `The condition  \\( \\text{P} \\) represents  \\( \\pm 0 \\) and R represents  \\( \\pm\\infty \\).<br>&nbsp;`,
        `The condition  \\( \\text{Q} \\) represents the special value  \\( 0.f \\times 2^{E_{\\min}} \\).<br>&nbsp;`,
        `\\( \\text{P-3, Q-4, R-2, S-1} \\)`,
      ],
      answer: ["A", "B", "C"],
      solution: `<img src="/images/quiz/wqt-coa10/8.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p>Suppose we want to add two floating-point numbers  \\( F1 = 270.75 \\) and  \\( F2 = 2.375 \\). When these numbers are converted to binary scientific notation and their mantissas are appropriately shifted to align the exponents, what is the final normalized result of the addition? </p> <p></p>`,
      image: "",
      options: [
        `\\( 1.00010001001 \\times 2^8 \\)<br>&nbsp;`,
        `\\( 1.00001110111 \\times 2^8 \\)<br>&nbsp;`,
        `\\( 1.00010001001 \\times 2^7 \\)<br>&nbsp;`,
        `\\( 1.01110001011 \\times 2^8 \\)`,
      ],
      answer: "A",
      solution: `<img src="/images/quiz/wqt-coa10/9.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p>Suppose we want to subtract the floating-point number  \\( F2 = 224 \\) from  \\( F1 = 270.75 \\). When these numbers are converted to normalized binary scientific notation and the mantissa of  \\( F2 \\) is properly shifted to align the exponents, what is the final normalized result of the subtraction? </p> <p></p>`,
      image: "",
      options: [
        `\\( 1.01110110 \\times 2^8 \\)<br>&nbsp;`,
        `\\( 1.01110110 \\times 2^5 \\)<br>&nbsp;`,
        `\\( 0.00101110110 \\times 2^8 \\)<br>&nbsp;`,
        `\\( 1.00010111 \\times 2^5 \\)`,
      ],
      answer: "B",
      solution: `<img src="/images/quiz/wqt-coa10/10.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p>Suppose we want to multiply two floating-point numbers  \\( F1 = 270.75 \\) and  \\( F2 = -2.375 \\). When these numbers are converted to normalized base- \\( 2 \\) scientific notation, what is the magnitude of the final result obtained by adding the exponents and multiplying the mantissas? </p> <p></p>`,
      image: "",
      options: [
        `\\( 1.0100000110001 \\times 2^7 \\)<br>&nbsp;`,
        `\\( 1.0000111011000 \\times 2^9 \\)<br>&nbsp;`,
        `\\( 1.0100000110001 \\times 2^9 \\)<br>&nbsp;`,
        `\\( 1.1101000110011 \\times 2^8 \\)`,
      ],
      answer: "C",
      solution: `<img src="/images/quiz/wqt-coa10/11.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p>Suppose we want to divide the floating-point number  \\( F1 = 270.75 \\) by  \\( F2 = -2.375 \\). When these numbers are converted to normalized base- \\( 2 \\) scientific notation, what is the magnitude of the final normalized result obtained by subtracting the exponents and dividing the mantissas? </p> <p></p>`,
      image: "",
      options: [
        `\\( 0.1110010 \\times 2^7 \\)<br>&nbsp;`,
        `\\( 1.110010 \\times 2^8 \\)<br>&nbsp;`,
        `\\( 1.110010 \\times 2^6 \\)<br>&nbsp;`,
        `\\( 1.0000111 \\times 2^7 \\)`,
      ],
      answer: "C",
      solution: `<img src="/images/quiz/wqt-coa10/12.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "NAT",
      text: `<p>Consider the application of Booths multiplication algorithm to compute the product of  \\( (-10) \\times (13) \\), assuming  \\( 5 \\)-bit numbers for the multiplicand  \\( (M) \\) and multiplier  \\( (Q) \\). Let  \\( x \\) be the total number of addition operations \\( (A = A + M) \\),  \\( y \\) be the total number of subtraction operations \\( (A = A - M) \\), and  \\( z \\) be the total number of shift operations performed during the algorithm (strictly after the initialization step). What is the value of the expression  \\( -x - y + z \\)? </p>`,
      image: "",
      options: [],
      answer: "1",
      solution: `<img src="/images/quiz/wqt-coa10/13.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "NAT",
      text: `<p>Consider the application of Booths multiplication algorithm to compute the product of  \\( (-31) \\times (28) \\) using  \\( 6 \\)-bit numbers, as shown in the provided example. Let  \\( x \\) be the number of  \\( 1 \\)s in register  \\( A \\) and  \\( y \\) be the number of  \\( 1 \\)s in register  \\( Q \\), specifically after the final step is completed. What is the value of the ratio  \\( x/y \\)? </p>`,
      image: "",
      options: [],
      answer: "1",
      solution: `<img src="/images/quiz/wqt-coa10/14.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p>Consider a floating-point format with  \\( 8 \\) bits for the biased exponent and  \\( 23 \\) bits for the significand  \\( (\\text{IEEE}\\ 754 \\) single-precision format \\( ) \\). What is the exact  \\( 32 \\)-bit binary pattern for the number  \\( -720 \\)? </p> <p></p>`,
      image: "",
      options: [
        `\\( \\text{1 10001000 01101000000000000000000} \\) <br>&nbsp;`,
        `\\( \\text{1 10000111 01101000000000000000000} \\) <br>&nbsp;`,
        `\\( \\text{0 10001000 01101000000000000000000} \\) <br>&nbsp;`,
        `\\( \\text{1 10001000 10110100000000000000000} \\)`,
      ],
      answer: "A",
      solution: `<img src="/images/quiz/wqt-coa10/15.png" style="max-width: 75%;">`
    },
  ]
});


registerTest({
  series: "weekly-cs-gate-2027",
  name: "WQT - Theory of Computation-1 | Finite Automata",
  date: "Oct 01, 2026",
  questions: [
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>Minimum number of states required in  \\( \\text{DFA} \\) accepting binary strings not ending in  \\( \\text{“101"} \\) is _______. </p> <p></p>`,
      image: "",
      options: [
        `\\( 3 \\)`,
        `\\( 4 \\)`,
        `\\( 5 \\)`,
        `\\( 6 \\)`,
      ],
      answer: "B",
      solution: `<img src="/images/quiz/wqt-toc1/1.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>Given two DFA's  \\( \\text{M}1 \\) and  \\( \\text{M}2 \\). They are equivalent if </p> <p></p>`,
      image: "",
      options: [
        `\\( \\text{M}1 \\) and  \\( \\text{M}2 \\) has the same number of states`,
        `\\( \\text{M}1 \\) and  \\( \\text{M}2 \\) accepts the same language i.e \\( \\text{L(M1) = L(M2)} \\)`,
        `\\( \\text{M}1 \\) and  \\( \\text{M}2 \\) has the same number of final states`,
        `None of the above`,
      ],
      answer: "B",
      solution: `<img src="/images/quiz/wqt-toc1/2.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>The number of  \\( 8 \\)-bit strings beginning with either  \\( 111 \\) or  \\( 101 \\) is ________. </p> <p></p>`,
      image: "",
      options: [
        `\\( 64 \\)`,
        `\\( 128 \\)`,
        `\\( 265 \\)`,
        `None of the above`,
      ],
      answer: "A",
      solution: `<img src="/images/quiz/wqt-toc1/3.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>Consider Language  \\( \\text{A} \\) defined over the alphabet  \\( \\Sigma=\\{0,1\\} \\) as  \\( \\text{A}=\\{0^{\\lfloor n/2 \\rfloor} 1^n :n \\geq 0\\} \\) </p> <p>The expression  \\( \\lfloor n/2 \\rfloor \\) means the floor of  \\( n/2 \\), or what you get by rounding  \\( n/2 \\) down to the nearest integer. </p> <p>Which of the following is not an example of a string in  \\( \\text{A}? \\) </p> <p></p>`,
      image: "",
      options: [
        `\\( 011 \\)`,
        `\\( 0111 \\)`,
        `\\( 0011 \\)`,
        `\\( 001111 \\)`,
      ],
      answer: "C",
      solution: `<img src="/images/quiz/wqt-toc1/4.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>Assume  \\( \\text{L} \\) is a language over the alphabet  \\( \\Sigma \\). </p> <p>Assume  \\( \\lambda \\) denotes the empty string. </p> <p>Which of the following statements is/are always true?</p> <p></p>`,
      image: "",
      options: [
        `\\( \\lambda \\notin \\text{L}^{+} \\)`,
        `\\( \\lambda \\in \\text{L}^{\\ast} \\)`,
        `\\( \\lambda \\notin \\Sigma^{+} \\)`,
        `\\( \\lambda \\in \\Sigma^{\\ast} \\)`,
      ],
      answer: ["B", "C", "D"],
      solution: `<img src="/images/quiz/wqt-toc1/5.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>Assume  \\( \\text{L} \\) is a language over the alphabet  \\( \\Sigma \\). </p> <p>Assume  \\( \\epsilon \\) denotes the empty string. </p> <p>Which of the following statements is/are always true?</p> <p></p>`,
      image: "",
      options: [
        `\\( \\Sigma^*-\\{\\epsilon\\}=\\Sigma^{+} \\)`,
        `\\( \\text{L}^*-\\{\\epsilon\\}=\\text{L}^{+} \\)`,
        `\\( \\Sigma^* = \\Sigma^{+} \\cup \\{\\epsilon\\} \\)`,
        `\\( \\text{L}^* = \\text{L}^{+} \\cup \\{\\epsilon\\} \\)`,
      ],
      answer: ["A", "C", "D"],
      solution: `<img src="/images/quiz/wqt-toc1/6.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>Which of the following statements is/are false?</p> <p></p>`,
      image: "",
      options: [
        `If  \\( \\text{L}=\\left\\{w \\in\\{0,1\\}^*:\\right. \\) w has an unequal number of  \\( 0 \\)'s and  \\( 1 \\)'s  \\( \\}, \\)&nbsp;then  \\( \\text{L}^*=\\{0,1\\}^* \\).`,
        `Let  \\( \\Sigma=\\{a, b\\} \\). There are more than  \\( 20 \\) words of length  \\( 4 \\) over  \\( \\Sigma \\).`,
        `For any languages  \\( \\text{L}_1, \\text{L}_2,\\left(\\text{L}_1 \\cup \\text{L}_2\\right) \\cap \\text{L}_1=\\text{L}_1 \\) .`,
        `For any languages  \\( \\text{L}_1, \\text{L}_2, \\text{L}_1^*=\\text{L}_2^* \\text { iff } \\text{L}_1=\\text{L}_2 \\)`,
      ],
      answer: ["B", "D"],
      solution: `<img src="/images/quiz/wqt-toc1/7.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>Assume  \\( \\Lambda \\) denotes the empty string. </p> <p>Which of the following statements is/are true?</p> <p></p>`,
      image: "",
      options: [
        `For any languages  \\( \\text{L}_1, \\text{L}_2,\\left(\\text{L}_1 \\cup \\text{L}_2\\right)^*=\\text{L}_1^* \\) .`,
        `Every string of length  \\( 4 \\) over the alphabet  \\( \\{a, b\\} \\) contains the substring  \\( xx, \\)&nbsp;for some non-null string  \\( x \\).`,
        `For every language  \\( \\text{L, LL}^*=\\text{L}^* \\) if and only if \\( \\Lambda \\in \\text{L} \\).`,
        `If  \\( \\text{L}_1 \\subseteq \\text{L}_2 \\), then  \\( \\text{L}_1^* \\subseteq \\text{L}_2^* \\).`,
      ],
      answer: ["B", "C", "D"],
      solution: `<img src="/images/quiz/wqt-toc1/8.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p>Consider the following Deterministic Finite Automaton <span style="line-height: 20.8px;"> \\( \\text{M} \\) </span>.</p> <p style="text-align:center"><img alt="DFA diagram" style="max-width: 75%;" src="/images/quiz/wqt-toc1/q9_img1.png"></p> <p>Let <span style="line-height: 20.8px;"> \\( \\text{S} \\) </span> denote the set of eight length bit strings whose second, third, sixth and seventh b<span style="line-height: 20.8px;">its are  \\( 1 \\). The number of strings in  \\( \\text{S} \\) that are accepted by  \\( \\text{M} \\) is </span></p> <p></p>`,
      image: "",
      options: [
        `\\( 0 \\)`,
        `\\( 1 \\)`,
        `\\( 2 \\)`,
        `\\( 3 \\)`,
      ],
      answer: "C",
      solution: `<img src="/images/quiz/wqt-toc1/9.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>Assume  \\( \\Lambda \\) denotes the empty string. </p> <p>Suppose  \\( \\text{L} \\subseteq\\{a, b\\}^* \\) is defined as follows: </p> <p> \\( \\Lambda \\in \\text{L} ; \\; \\) for every  \\( x \\in \\text{L}, \\)&nbsp;both  \\( x a \\) and  \\( x b a \\) are in  \\( \\text{L} \\). </p> <p>For any string  \\( w \\) in  \\( \\mathrm{L}, \\)&nbsp;which of the following statements is/are definitely true? </p> <p></p>`,
      image: "",
      options: [
        `The number of  \\( a \\)'s in  \\( w \\) is more than the number of  \\( b \\)'s in  \\( w. \\)`,
        `The number of  \\( a \\)'s in  \\( w \\) is greater than or equal to the number of \\( b \\)'s in  \\( w \\).`,
        `Every string in&nbsp; \\( w \\) ends with  \\( a. \\)`,
        `\\( w \\) does not contain the substring&nbsp; \\( bb. \\)`,
      ],
      answer: ["B", "D"],
      solution: `<img src="/images/quiz/wqt-toc1/10.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p>What is the complement of the language accepted by the NFA shown below?</p> <p>Assume  \\( \\Sigma = \\{a\\} \\) and  \\( \\epsilon \\) is the empty string. </p> <p style="text-align:center"><a href="http://gatecse.in/w/images/c/c5/2012_12.png"><img alt="" src="/images/quiz/wqt-toc1/q11_img2.png" style="max-width: 75%;"></a></p> <p></p>`,
      image: "",
      options: [
        `\\( \\phi \\)`,
        `\\( \\{\\epsilon\\} \\)`,
        `\\( a^* \\)`,
        `\\( \\{a , \\epsilon\\} \\)`,
      ],
      answer: "B",
      solution: `<img src="/images/quiz/wqt-toc1/11.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p>In the Given language  \\( \\text{L}=\\{ab, aa, baaa\\} \\), _______ number of strings are in  \\( \\text{L}^* \\). </p> <ul> <li> \\( \\text{baaaba} \\) </li> <li> \\( \\text{aabaaaa} \\) </li> <li> \\( \\text{baaabaaaabaa} \\) </li> <li> \\( \\text{baaabaaa} \\) </li> </ul> <p></p>`,
      image: "",
      options: [
        `\\( 1 \\)`,
        `\\( 2 \\)`,
        `\\( 3 \\)`,
        `\\( 4 \\)`,
      ],
      answer: "B",
      solution: `<img src="/images/quiz/wqt-toc1/12.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p>Consider a DFA machine  \\( \\text{M} \\) whose digraph is : </p> <p style="text-align:center"><img alt="" src="/images/quiz/wqt-toc1/q13_img3.png" style="max-width: 75%;"></p> <p>Then  \\( \\text{L(M)}, \\)&nbsp;the language accepted by the machine&nbsp; \\( \\text{M}, \\) is the set of all strings having : </p> <p></p>`,
      image: "",
      options: [
        `two or more  \\( b \\)’s`,
        `three or more  \\( b \\)’s`,
        `two or more  \\( a \\)’s`,
        `three or more  \\( a \\)’s`,
      ],
      answer: "A",
      solution: `<img src="/images/quiz/wqt-toc1/13.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p>There are exactly _______ different finite automata with three states  \\( x \\),  \\( y \\) and  \\( z \\) over the alphabet  \\( \\{a,b\\} \\) where  \\( x \\) is always the start state. </p> <p></p>`,
      image: "",
      options: [
        `\\( 64 \\)`,
        `\\( 256 \\)`,
        `\\( 1024 \\)`,
        `\\( 5832 \\)`,
      ],
      answer: "D",
      solution: `<img src="/images/quiz/wqt-toc1/14.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p>Let  \\( \\Sigma= {a, b} \\) and language  \\( \\text{L} = {aa, bb} \\). Then, the complement of \\( \\text{L} \\) is ________. </p> <p></p>`,
      image: "",
      options: [
        `\\( \\left\\{\\lambda, a, b, ab, ba \\right\\}&nbsp;\\cup&nbsp;\\left\\{w&nbsp;\\in\\left\\{a, b\\right\\}^{*}&nbsp;| |w| &gt; 3&nbsp;\\right\\} \\)`,
        `\\( \\left\\{a, b, ab, ba \\right\\}&nbsp;\\cup&nbsp;\\left\\{w&nbsp;&nbsp;\\in&nbsp;\\left\\{a, b\\right\\}^{*}&nbsp;| |w| \\geq&nbsp;3 \\right\\} \\) &nbsp;`,
        `\\( \\left\\{w \\in&nbsp;&nbsp;\\left\\{a, b\\right\\}^{*}&nbsp;| |w| &gt; 3\\right\\}&nbsp;\\cup&nbsp;\\left\\{a, b, ab, ba \\right\\} \\) &nbsp;`,
        `\\( \\left\\{\\lambda, a, b, ab, ba\\right\\}&nbsp;\\cup&nbsp;\\left\\{w \\in&nbsp;\\left\\{a, b\\right\\}^{*}&nbsp;| |w| \\geq&nbsp;3 \\right\\} \\)`,
      ],
      answer: "D",
      solution: `<img src="/images/quiz/wqt-toc1/15.png" style="max-width: 75%;">`
    },
  ]
});

registerTest({
  series: "weekly-cs-gate-2027",
  name: "WQT - Theory of Computation-2 | Finite Automata and Regular Expression",
  date: "Oct 01, 2026",
  questions: [
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>Which of the following four languages is different from the other three?</p> <p></p>`,
      image: "",
      options: [
        `\\( \\emptyset \\)`,
        `\\( \\emptyset^* \\)`,
        `\\( \\{\\lambda\\} \\)`,
        `\\( \\{\\lambda\\}^* \\)`,
      ],
      answer: "A",
      solution: `<img src="/images/quiz/wqt-toc2/1.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>Which of the following four languages is different from the other three?</p> <p></p>`,
      image: "",
      options: [
        `\\( (\\{a, b\\})^* \\)`,
        `\\( (\\{b, a, a\\})^* \\)`,
        `\\( \\left(\\{a\\}^* \\cup\\{b\\}^*\\right) \\)`,
        `\\( (\\{a\\} \\cup\\{b\\})^* \\)`,
      ],
      answer: "C",
      solution: `<img src="/images/quiz/wqt-toc2/2.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>Is there for all non-deterministic finite automata a deterministic finite automaton that recognizes the same language?</p> <p></p>`,
      image: "",
      options: [
        `Yes, you can construct such an automaton using the power set construction.`,
        `Yes, because you are not required to have non-determinism in a nondeterministic automaton.`,
        `No, because in a non-deterministic automaton  \\( \\lambda \\) transitions are allowed.`,
        `No, because non-deterministic automata are more efficient than deterministic automata.`,
      ],
      answer: "A",
      solution: `<img src="/images/quiz/wqt-toc2/3.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>Is the complement of a regular language always regular?</p> <p></p>`,
      image: "",
      options: [
        `Yes, because the regular languages are exactly the languages that can be recognized with a DFA, and it is easy to construct a DFA for the complement.`,
        `Yes, because the complement of the complement is the language itself, so no information is lost by complementation.`,
        `No, because the complement symbol  \\( \\overline{\\text{L}} \\)&nbsp;is not allowed in a regular expression.`,
        `No, because if the words in a language are regular, all words that are not regular will be in the complement.`,
      ],
      answer: "A",
      solution: `<img src="/images/quiz/wqt-toc2/4.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>Are there languages for which every deterministic finite automaton has a sink (a non-final state for which each transition will loop back to that state)?</p> <p></p>`,
      image: "",
      options: [
        `Yes, when there is a word  \\( w \\) for which any extension  \\( w w^{\\prime} \\) will not be in the language.`,
        `Yes, because each state needs to have a transition for each symbol.`,
        `No, because you can always split a sink in multiple states.`,
        `No, because you can always use a non-deterministic automaton.`,
      ],
      answer: "C",
      solution: `<img src="/images/quiz/wqt-toc2/5.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p>Are there languages for which every non-deterministic finite automaton does <em>not</em> have a sink (a non-final state for which each transition will loop back to that state)?</p> <p></p>`,
      image: "",
      options: [
        `Yes, in the case that each word  \\( w \\) has an extension  \\( w w^{\\prime} \\) that is in the language, there cannot be a sink.`,
        `Yes, in non-deterministic automata there never are sinks.`,
        `No, one can always add a sink to an automaton without changing the language that is accepted.`,
        `No, there are languages for which each non-deterministic finite automaton has a sink.`,
      ],
      answer: "C",
      solution: `<img src="/images/quiz/wqt-toc2/6.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>Let  \\( \\text{M} \\) be a DFA. Say strings  \\( x \\) and  \\( y \\) in  \\( \\Sigma^* \\) are <em>indistinguishable</em>, written  \\( x \\equiv y \\) if and only if<br> \$\$  \\delta^*\\left(q_0, x\\right)=\\delta^*\\left(q_0, y\\right)  \$\$<br>Which of the following is/are necessarily true? </p> <p></p>`,
      image: "",
      options: [
        `Every pair of strings in  \\( \\text{L(M)} \\) are indistinguishable.`,
        `Two different strings in  \\( \\mathrm{L}(\\mathrm{M}) \\) are never indistinguishable.`,
        `Indistinguishable relation on strings in  \\( \\Sigma^* \\) is an equivalence relation.`,
        `Indistinguishable relation on strings in  \\( \\Sigma^* \\) is a partial order relation.`,
      ],
      answer: ["C"],
      solution: `<img src="/images/quiz/wqt-toc2/7.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>Let  \\( M \\) be a DFA. Say strings  \\( x \\) and  \\( y \\) in  \\( \\Sigma^* \\) are <em>indistinguishable</em>, written  \\( x \\equiv y \\) if and only if<br> \$\$  \\delta^*\\left(q_0, x\\right)=\\delta^*\\left(q_0, y\\right)  \$\$<br>Which of the following is/are necessarily true? </p> <p></p>`,
      image: "",
      options: [
        `If strings  \\( x, y \\) are indistinguishable then  \\( x a, ya \\) are also indistinguishable, for every alphabet symbol  \\( a. \\)`,
        `If strings  \\( x a, y a \\) are indistinguishable then  \\( x, y \\) are also indistinguishable, where a is an alphabet symbol.`,
        `If strings  \\( x, y \\) are indistinguishable then  \\( x w, y w \\) are also indistinguishable, for all strings  \\( w \\).`,
        `If strings  \\( xw, yw \\) are indistinguishable then  \\( x, y \\) are also indistinguishable, where \\( w \\) is a string.`,
      ],
      answer: ["A", "C"],
      solution: `<img src="/images/quiz/wqt-toc2/8.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "NAT",
      text: `<p>Give a deterministic finite automaton with the least number of states for the language: \\( \\text{L}_8:=\\left\\{w \\in\\{a, b\\}^* \\mid\\right. \\) the number of  \\( a \\)'s in  \\( w \\) is even iff the number of  \\( b \\)'s is even  \\( \\} \\) (The abbreviation 'iff' stands for 'if and only if') What is the number of states? </p>`,
      image: "",
      options: [],
      answer: "2",
      solution: `<img src="/images/quiz/wqt-toc2/9.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "NAT",
      text: `<p>Give a deterministic finite automaton with the least number of states for the language: \\( \\text{L}_8:=\\left\\{w \\in\\{a, b\\}^* \\mid\\right. \\) the number of  \\( a \\)'s in  \\( w \\) is odd iff the number of  \\( b \\)'s is odd  \\( \\} \\) (The abbreviation 'iff' stands for 'if and only if') What is the number of states? </p>`,
      image: "",
      options: [],
      answer: "2",
      solution: `<img src="/images/quiz/wqt-toc2/10.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>If for a language  \\( \\text{L} \\) is given that  \\( \\text{L}^*=\\text{L}, \\)&nbsp;what does not necessarily follow? </p> <p></p>`,
      image: "",
      options: [
        `\\( \\text{L L = L} \\)`,
        `\\( \\lambda \\in \\text{L} \\)`,
        `\\( \\text{L} \\) is infinite`,
        `\\( \\text{L} \\) is non-empty`,
      ],
      answer: ["C"],
      solution: `<img src="/images/quiz/wqt-toc2/11.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>If for a language  \\( \\text{L} \\) is given that  \\( \\text{L}^\\text{R}=\\text{L}, \\)&nbsp;what does necessarily follow? </p> <p></p>`,
      image: "",
      options: [
        `if  \\( w \\in \\text{L}^* \\) then also  \\( w^\\text{R} \\in \\text{L}^* \\)`,
        `there is a  \\( w \\in \\text{L} \\) for which also  \\( w^\\text{R} \\in \\text{L} \\)`,
        `\\( \\lambda \\in \\text{L}, \\)&nbsp;because  \\( \\lambda^\\text{R}=\\lambda \\)`,
        `there is a  \\( w \\in \\text{L} \\) with  \\( w^\\text{R}=w \\)`,
      ],
      answer: ["A"],
      solution: `<img src="/images/quiz/wqt-toc2/12.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>Let be given a language  \\( \\text{L} \\). Which of the following languages is not necessarily equal to the others? </p> <p></p>`,
      image: "",
      options: [
        `\\( \\text{L L}^* \\)`,
        `\\( \\text{L L}^* \\cup\\{\\lambda\\} \\)`,
        `\\( \\text{L}^* \\text{L}^* \\)`,
        `\\( \\text{L}^* \\)`,
      ],
      answer: ["A"],
      solution: `<img src="/images/quiz/wqt-toc2/13.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p>Which of the following regular expressions describes a language different from the others?</p> <p></p>`,
      image: "",
      options: [
        `\\( (a \\cup b)^* \\)`,
        `\\( \\left(a^* b^*\\right)^* \\)`,
        `\\( \\left(b^* a^*\\right)^* \\)`,
        `\\( \\left(a^* \\cup b^*\\right) \\)`,
      ],
      answer: "D",
      solution: `<img src="/images/quiz/wqt-toc2/14.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p>Which of the following regular expressions describes a language different from the others?</p> <p></p>`,
      image: "",
      options: [
        `\\( a^* b^* \\)`,
        `\\( (\\lambda \\cup a a)^*(\\lambda \\cup b b)^* \\)`,
        `\\( (a \\cup a a)^*(b \\cup b b)^* \\)`,
        `\\( (\\lambda \\cup a)^*(\\lambda \\cup b)^* \\)`,
      ],
      answer: "B",
      solution: `<img src="/images/quiz/wqt-toc2/15.png" style="max-width: 75%;">`
    },
  ]
});

registerTest({
  series: "weekly-cs-gate-2027",
  name: "WQT - Theory of Computation-3 | Finite Automata and Regular Expression",
  date: "Oct 01, 2026",
  questions: [
    {
      marks: 1,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>Consider the following simple Finite Automaton.</p> <p style="text-align:center"><img alt="" src="/images/quiz/wqt-toc3/q1_img1.png" style="max-width: 50%;"></p> <p>Which of the following strings are not accepted by the given finite automaton?</p> <p></p>`,
      image: "",
      options: [
        `\\( 010110 \\)`,
        `\\( 101000 \\)`,
        `\\( 11011100 \\)`,
        `Empty String`,
      ],
      answer: ["B", "D"],
      solution: `<img src="/images/quiz/wqt-toc3/1.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>Which of the following statements is/are true?</p> <p></p>`,
      image: "",
      options: [
        `A language of an automaton can have an infinitely long string (or many of them) in it.`,
        `A language of an automaton can contain infinitely many strings.`,
        `A language of an automaton can contain no strings.`,
        `A language of an automaton can contain finitely many strings.`,
      ],
      answer: ["B", "C", "D"],
      solution: `<img src="/images/quiz/wqt-toc3/2.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0,
      type: "NAT",
      text: `<p></p> <p>How many of these are DFAs over  \\( \\{0, 1\\}? \\) </p> <p style="text-align:center"><img alt="" src="/images/quiz/wqt-toc3/q3_img2.png" style="max-width: 60%;"></p> <p>&nbsp;</p> <p></p>`,
      image: "",
      options: [],
      answer: "3",
      solution: `<img src="/images/quiz/wqt-toc3/3.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p style="text-align:center"><img alt="" src="/images/quiz/wqt-toc3/q4_img3.png" style="max-width: 75%;"></p> <p>As with DFAs, the language of an NFA  \\( N \\) is the set of strings that  \\( N \\) accepts:<br> \$\$  {L}(N)=\\left\\{w \\in \\Sigma^* \\mid N \\text { accepts } w\\right\\} .  \$\$ <br>What is the language of the NFA shown above? </p> <p></p>`,
      image: "",
      options: [
        `\\( \\{01011\\} \\)`,
        `\\( \\left\\{w \\in\\{0,1\\}^* \\mid w\\right. \\) contains at least two  \\( 1\\text{s} \\} \\)`,
        `\\( \\left\\{w \\in\\{0,1\\}^* \\mid w\\right. \\) ends with  \\( 11\\} \\)`,
        `\\( \\left\\{w \\in\\{0,1\\}^* \\mid w\\right. \\) ends with  \\( 1\\} \\)`,
      ],
      answer: ["C"],
      solution: `<img src="/images/quiz/wqt-toc3/4.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0,
      type: "NAT",
      text: `<p></p> <p>We transform the following NFA into an equivalent DFA using the subset construction (or the powerset construction) algorithm.</p> <p style="text-align:center"><img alt="" src="/images/quiz/wqt-toc3/q5_img4.png" style="max-width: 60%;"></p> <p>How many of these rows should be marked as accepting states?</p> <p></p>`,
      image: "",
      options: [],
      answer: "6",
      solution: `<img src="/images/quiz/wqt-toc3/5.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "NAT",
      text: `<p></p> <p style="text-align:center"><img alt="" src="/images/quiz/wqt-toc3/q6_img5.png" style="max-width: 75%;"></p> <p>Suppose we run the above NFA on the string  \\( 10110. \\) How many of the following statements are true? </p> <ul> <li>There is at least one computation that finishes in an accepting state.</li> <li>There is at least one computation that finishes in a rejecting state.</li> <li>There is at least one computation that dies.</li> <li>This NFA accepts  \\( 10110. \\) </li> <li>This NFA rejects  \\( 10110. \\) </li> </ul> <p></p>`,
      image: "",
      options: [],
      answer: "2",
      solution: `<img src="/images/quiz/wqt-toc3/6.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p>We transform the following NFA into an equivalent DFA using the subset construction (or the powerset construction) algorithm.</p> <p style="text-align:center"><img alt="" src="/images/quiz/wqt-toc3/q7_img6.png" style="max-width: 75%;"></p> <p>What should this row look like? &nbsp;</p> <p></p>`,
      image: "",
      options: [
        `\\( \\{q_0, q_2\\}, \\{q_0, q_3\\}, \\{q_0\\} \\)`,
        `\\( \\{q_0, q_2\\}, \\{q_0, q_3\\}, \\{q_0, q_2\\} \\)`,
        `\\( \\{q_0, q_2\\}, \\{q_0, q_1,&nbsp;q_3\\}, \\{q_0\\} \\)`,
        `\\( \\{q_0, q_2\\}, \\{q_0, q_1, q_3\\}, \\{q_0, q_2\\} \\)`,
      ],
      answer: "C",
      solution: `<img src="/images/quiz/wqt-toc3/7.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p>We transform the following NFA into an equivalent DFA using the subset construction (or the powerset construction) algorithm.</p> <p style="text-align:center"><img alt="" src="/images/quiz/wqt-toc3/q8_img7.png" style="max-width: 55%;"></p> <p style="text-align:center"><img alt="" src="/images/quiz/wqt-toc3/q8_img8.png" style="max-width: 75%;"></p> <p>What should this row look like?</p> <p></p>`,
      image: "",
      options: [
        `\\( \\{ q_2, q_3\\},&nbsp;\\{q_0, q_3,q_4&nbsp;\\} ,&nbsp;\\{q_0, q_3,q_4&nbsp;\\} \\)`,
        `\\( \\{ q_2, q_3\\},&nbsp;\\{q_3,q_4&nbsp;\\} ,&nbsp;\\{ q_3,q_4&nbsp;\\} \\)`,
        `\\( \\{ q_2, q_3\\},&nbsp;\\{q_0, q_4&nbsp;\\} ,&nbsp;\\{q_0, q_4&nbsp;\\} \\)`,
        `\\( \\{ q_2, q_3\\},&nbsp;\\{\\varnothing \\} ,&nbsp;\\{\\varnothing \\} \\)`,
      ],
      answer: "A",
      solution: `<img src="/images/quiz/wqt-toc3/8.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "NAT",
      text: `<p></p> <p>Here's the operator precedence for regular expressions, from highest to lowest:<br> \$\$  \\begin{gathered} (\\text{R}) \\\\ \\text{R}^* \\\\ \\text{R}_1 \\text{R}_2 \\\\ \\text{R}_1 \\cup \\text{R}_2 \\end{gathered}  \$\$ <br><br>Consider the regular expression<br> \$\$ ab^*c\\cup d \$\$ </p> <p>How many of the strings below are in the language described by this regular expression?</p> <ul> <li> \\( ababc \\) </li> <li> \\( abd \\) </li> <li> \\( ac \\) </li> <li> \\( abcd \\) </li> </ul> <p></p>`,
      image: "",
      options: [],
      answer: "1",
      solution: `<img src="/images/quiz/wqt-toc3/9.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <ul> <li>Let  \\( \\Sigma=\\{a,b\\} \\). </li> <li>Let  \\( \\text{L}=\\left\\{w \\in \\Sigma^* \\mid w\\right. \\) contains at most one  \\( a \\} \\). </li> </ul> <p>Which of the following is/are a regular expression for  \\( \\text{L}? \\) </p> <p></p>`,
      image: "",
      options: [
        `\\( b^*(a^* \\cup&nbsp;\\;\\varepsilon)\\; b^ \\ast  \\)`,
        `\\( b^* ab^* \\cup\\; b^* \\)`,
        `\\( b^*(a\\cup \\varepsilon)\\;b^ \\ast  \\)`,
        `\\( b^*a^ \\ast b^*\\cup \\;&nbsp;b^* \\)`,
      ],
      answer: ["B", "C"],
      solution: `<img src="/images/quiz/wqt-toc3/10.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p>Consider the following language  \\( \\mathrm{E}: \\)<br> \$\$  E=\\left\\{a^n {b}^n \\mid n \\in \\mathbb{N}\\right\\}  \$\$<br>Which of the following is a regular expression for the language  \\( \\mathrm{E} \\) defined above? </p> <p></p>`,
      image: "",
      options: [
        `\\( a * b * \\)`,
        `\\( (ab)* \\)`,
        `\\( \\varepsilon \\cup a b \\cup a^2 b^2 \\cup a^3 b^3 \\)`,
        `None of the above`,
      ],
      answer: "D",
      solution: `<img src="/images/quiz/wqt-toc3/11.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "NAT",
      text: `<p>For the following language over the indicated alphabet, construct a DFA with the fewest number of states that accepts precisely the strings that are in the indicated language. For the alphabet  \\( \\Sigma=\\{\\mathrm{a}, \\mathrm{b}, \\mathrm{c}\\} \\), construct a DFA for the language  \\( \\left\\{w \\in \\Sigma^* \\mid w\\right. \\) contains exactly two  \\( \\text{c}\\} \\) What is the number of states in the DFA? </p>`,
      image: "",
      options: [],
      answer: "4",
      solution: `<img src="/images/quiz/wqt-toc3/12.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "NAT",
      text: `<p>For the following language over the indicated alphabet, construct a DFA with the fewest number of states that accepts precisely the strings that are in the indicated language. For the alphabet  \\( \\Sigma=\\{\\mathrm{a}, \\mathrm{b}, \\mathrm{c}, \\ldots, \\mathrm{z}\\} \\), construct a DFA for the language  \\( \\left\\{w \\in \\Sigma^* \\mid w\\right. \\) contains the word  \\( \\textsf{“cocoa"} \\) as a substring  \\( \\} \\). What is the number of states in the DFA? </p>`,
      image: "",
      options: [],
      answer: "6",
      solution: `<img src="/images/quiz/wqt-toc3/13.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p>The state elimination algorithm gives a way to transform a finite automaton (DFA or NFA) into a regular expression. It's a really beautiful algorithm once you get the hang of it, so we thought that we'd let you try it out on a particular example.</p> <p>In the following Generalized NFA, we want to remove state  \\( q_1: \\) </p> <p style="text-align:center"><img alt="" src="/images/quiz/wqt-toc3/q14_img9.png" style="max-width: 75%;"></p> <p><br>If we remove state  \\( q_1, \\) then we get two transitions(edges), one from  \\( q_s \\) to  \\( q_1 \\) (this new edge is shown in the figure below) and another from  \\( q_2 \\) to  \\( q_2. \\) </p> <p style="text-align:center"><img alt="" src="/images/quiz/wqt-toc3/q14_img10.png" style="max-width: 75%;"></p> <p>What regex should go on this edge?<br>A.  \\( \\text{R}_{12} \\text{R}_{21} \\)<br>B.  \\( \\text{R}_{12} \\text{R}_{22} * \\text{R}_{21} \\) <br>C.  \\( \\text{R}_{21} \\text{R}_{12} \\)<br>D.  \\( \\text{R}_{21} \\text{R}_{11} * \\text{R}_{12} \\) </p> <p></p>`,
      image: "",
      options: ["A", "B", "C", "D"],
      answer: "D",
      solution: `<img src="/images/quiz/wqt-toc3/14.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>Which of the following statements is/are true?</p> <p></p>`,
      image: "",
      options: [
        `If  \\( \\text{L} \\) is a nonregular language, then there exists a nondeterministic finite automaton that accepts  \\( \\text{L} \\).`,
        `If  \\( \\text{L}_1 \\) and  \\( \\text{L}_2 \\) are languages such that  \\( \\text{L}_1 \\subset \\text{L}_2 \\) and  \\( \\text{L}_2 \\) is nonregular, then  \\( \\text{L}_1 \\) must be nonregular.`,
        `The regular expressions  \\( (\\mathbf{a}+\\mathbf{b})^* \\) and  \\( \\left(\\mathbf{a}^* \\mathbf{b}^*\\right) \\) generate the same language.`,
        `All nonregular languages are infinite.`,
      ],
      answer: ["D"],
      solution: `<img src="/images/quiz/wqt-toc3/15.png" style="max-width: 75%;">`
    },
  ]
});

registerTest({
  series: "weekly-cs-gate-2027",
  name: "WQT - Theory of Computation-4 | Context Free Grammar",
  date: "Oct 01, 2026",
  questions: [
    {
      marks: 1,
      neg: 0,
      type: "NAT",
      text: `<p>Consider the context-free grammar  \\( \\text{G} \\) : \\( \\mathrm{S} \\rightarrow \\mathrm{aS} \\mid \\mathrm{Aa} \\) \\( \\mathrm{A} \\rightarrow \\mathrm{bS} \\mid \\mathrm{Aa} \\mid \\lambda \\) The number of  \\( 2 \\) length strings generated by  \\( \\text{G} \\) is ? </p>`,
      image: "",
      options: [],
      answer: "1",
      solution: `<img src="/images/quiz/wqt-toc4/1.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>Is there for all context-free grammars a right linear grammar that produces the same language?</p> <p></p>`,
      image: "",
      options: [
        `Yes, you can find such a grammar by converting to an automaton, and then converting back to a grammar.`,
        `Yes, because all right linear grammars are context-free grammars.`,
        `No, because not all context-free languages are regular.`,
        `No, because not all regular languages are context-free.`,
      ],
      answer: "C",
      solution: `<img src="/images/quiz/wqt-toc4/2.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>Consider the grammar G:<br> \\( \\mathrm{S} \\rightarrow \\mathrm{AB} \\)<br> \\( \\mathrm{A} \\rightarrow \\mathrm{aA} \\mid \\lambda \\) <br> \\( \\mathrm{B} \\rightarrow \\mathrm{bB} \\mid \\lambda \\) <br>Which of the following is/are correct? </p> <p></p>`,
      image: "",
      options: [
        `\\( \\mathrm{G} \\) is regular.`,
        `\\( \\mathrm{G} \\)&nbsp;is not regular.`,
        `\\( \\mathrm{L(G)} \\) is regular.`,
        `\\( \\mathrm{L(G)} \\) is not regular.`,
      ],
      answer: ["B", "C"],
      solution: `<img src="/images/quiz/wqt-toc4/3.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>Which of the following statements is (are) true?</p> <p></p>`,
      image: "",
      options: [
        `If  \\( \\mathrm{L} \\) is generated by a context-free grammar that is not a regular grammar, then  \\( \\mathrm{L} \\)&nbsp;must not be a regular language.`,
        `If  \\( \\mathrm{L} \\) is generated by a regular grammar then  \\( \\mathrm{L} \\) must be a regular language.`,
        `Every context-free language is a nonregular language.`,
        `If a language  \\( \\mathrm{L} \\) is accepted by a nondeterministic finite automaton, then there must be some context-free grammar that generates  \\( \\mathrm{L} \\).`,
      ],
      answer: ["B", "D"],
      solution: `<img src="/images/quiz/wqt-toc4/4.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>Suppose&nbsp; \\( \\mathrm{L} \\) is a language generated by a regular grammar, and consider the following statements:<br><br>(i)&nbsp; \\( \\mathrm{L} \\) is a regular language.<br>(ii)&nbsp; \\( \\mathrm{L} \\) is a context-free language.<br>(iii) There is a Turing machine that accepts  \\( \\mathrm{L} \\).<br>Which of the following is correct? </p> <p></p>`,
      image: "",
      options: [
        `Only statement (i) is true.`,
        `Only statements (i) and (iii) are true.`,
        `All  \\( 3 \\) statements are true.`,
        `None of the  \\( 3 \\) statements is true.`,
      ],
      answer: "C",
      solution: `<img src="/images/quiz/wqt-toc4/5.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p>Let  \\( \\Sigma=\\{a, b\\} \\), and let  \\( L=\\left\\{a^{n} w a^{n}: n \\geq 1, w \\in \\Sigma^{*}\\right\\} \\). Consider the following statements:<br>(i)  \\( \\mathrm{L} \\) has regular expression  \\( a^{*}(a+b)^{*} a^{*} \\).<br>(ii)  \\( \\mathrm{L} \\) is a non-regular language.<br><br>(iii)  \\( \\mathrm{L} \\) has context-free grammar<br> \$\$  S \\rightarrow a S a \\mid a S \\mid&nbsp; b S \\mid a a  \$\$<br>where \\( S, X \\) are nonterminals.<br>(iv)  \\( \\mathrm{L} \\) has context-free grammar<br> \$\$  \\begin{aligned} S &amp; \\rightarrow a S a \\mid a X a \\\\ X &amp; \\rightarrow a X \\mid b X \\mid \\Lambda \\end{aligned}  \$\$ <br>where  \\( S, X \\) are nonterminals.<br><br>Which of the following is true? </p> <p></p>`,
      image: "",
      options: [
        `Only statement (ii) is correct.`,
        `Only statements (ii) and (iv) are correct.`,
        `Only statement (iv) is correct.`,
        `None of the  \\( 4 \\) statements is correct.`,
      ],
      answer: "C",
      solution: `<img src="/images/quiz/wqt-toc4/6.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p>The language  \\( A=\\left\\{b^{n} a^{n} \\mid n \\geq 0\\right\\} \\) satisfies which of the following? </p> <p></p>`,
      image: "",
      options: [
        `\\( A \\) has regular expression  \\( b^{*} a^{*} \\).`,
        `\\( A \\) has regular expression  \\( (b a)^{*} \\).`,
        `\\( A \\) has CFG  \\( G=(V, \\Sigma, R, S) \\), with  \\( V=\\{S\\}, \\Sigma=\\{a, b\\}, R=\\{S \\rightarrow b S a \\mid \\varepsilon\\} \\) , and starting variable  \\( S \\).`,
        `\\( A \\) is not context-free.`,
      ],
      answer: "C",
      solution: `<img src="/images/quiz/wqt-toc4/7.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p>The following Context-Free Grammar&nbsp;(CFG) :</p> <p> \\( S \\rightarrow aB \\mid bA \\) </p> <p> \\( A \\rightarrow a&nbsp;\\mid aS&nbsp;\\mid bAA \\) </p> <p> \\( B \\rightarrow b&nbsp;\\mid bS&nbsp;\\mid aBB \\) &nbsp; </p> <p>will generate</p> <p></p>`,
      image: "",
      options: [
        `Odd numbers of  \\( a's \\) and odd numbers of  \\( b's \\)`,
        `Even numbers of  \\( a's \\) and even numbers of  \\( b's \\)&nbsp;`,
        `Equal numbers of  \\( a's \\) and  \\( b's \\)`,
        `Different numbers of  \\( a's \\) and  \\( b's \\)&nbsp;`,
      ],
      answer: "C",
      solution: `<img src="/images/quiz/wqt-toc4/8.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p>A context free grammar for  \\( L=\\{w \\mid n_0 (w) &gt; n_1 (w)\\} \\) is given by: </p> <p></p>`,
      image: "",
      options: [
        `\\( S \\rightarrow 0 \\mid 0S \\mid 1 S S \\)`,
        `\\( S \\rightarrow 0 S \\mid 1 S \\mid 0 S S \\mid 1 S S \\mid 0 \\mid 1 \\)`,
        `\\( S \\rightarrow 0 \\mid 0 S \\mid 1 S S \\mid S 1 S \\mid S S 1 \\)`,
        `\\( S \\rightarrow 0 S \\mid 1 S \\mid 0 \\mid 1 \\)`,
      ],
      answer: "C",
      solution: `<img src="/images/quiz/wqt-toc4/9.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p>A regular grammar for the language  \\( L= \\{a^nb^m \\mid \\text{ n &nbsp;is even and m is even } \\} \\) is given by </p> <p></p>`,
      image: "",
      options: [
        `\\( S \\rightarrow aSb \\mid S_1; S_1 \\rightarrow bS_1a \\mid \\lambda \\)`,
        `\\( S \\rightarrow aaS \\mid S_1;S_1 \\rightarrow bSb \\mid \\lambda \\)`,
        `\\( S \\rightarrow aSb \\mid S_1;S_1 \\rightarrow S_1ab \\mid \\lambda \\)`,
        `\\( S \\rightarrow aaS \\mid S_1;S_1 \\rightarrow bbS_1 \\mid \\lambda \\)`,
      ],
      answer: "D",
      solution: `<img src="/images/quiz/wqt-toc4/10.png" style="max-width: 75%;">`
    },
  ]
});

registerTest({
  series: "weekly-cs-gate-2027",
  name: "WQT - Theory of Computation-5 | FA, CFL, DCFL",
  date: "Oct 01, 2026",
  questions: [
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>In the  \\( \\text{CFG} \\)  \\( G=S \\longrightarrow 0 S \\mid 1 S \\mid \\epsilon \\) : </p> <p></p>`,
      image: "",
      options: [
        `The string  \\( 011 \\) is ambiguously derived.`,
        `The string  \\( 010 \\) is ambiguously derived.`,
        `The empty string  \\( \\epsilon \\) is ambiguously derived.`,
        `No string in  \\( \\text{L(G)} \\) is ambiguously derived.`,
      ],
      answer: "D",
      solution: `<img src="/images/quiz/wqt-toc5/1.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>If two different variables in a context-free grammar  \\( G \\) each derive  \\( \\epsilon \\), then: </p> <p></p>`,
      image: "",
      options: [
        `\\( G \\) must be ambiguous<br>&nbsp;`,
        `\\( \\epsilon \\in L(G) \\)<br>&nbsp;`,
        `Converting  \\( G \\) to  \\( G^{\\prime} \\) in Chomsky normal form makes \\( L\\left(G^{\\prime}\\right) \\neq L(G) \\) <br>&nbsp;`,
        `None of the above necessarily happens.`,
      ],
      answer: "D",
      solution: `<img src="/images/quiz/wqt-toc5/2.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>The concatenation  \\( \\emptyset \\cdot \\Sigma^{*} \\) equals: </p> <p></p>`,
      image: "",
      options: [
        `\\( \\emptyset \\)`,
        `\\( \\{\\epsilon\\} \\)`,
        `\\( \\Sigma^{*} \\)`,
        `None of the above.`,
      ],
      answer: "A",
      solution: `<img src="/images/quiz/wqt-toc5/3.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>In the CFG  \\( G=S \\longrightarrow a S \\mid S a \\mid b \\), </p> <p></p>`,
      image: "",
      options: [
        `The string  \\( a b a \\) is ambiguously derived.`,
        `The string  \\( a a b \\) is ambiguously derived.`,
        `The string  \\( b b \\) is ambiguously derived.`,
        `No string in  \\( L(G) \\) is ambiguously derived.`,
      ],
      answer: "A",
      solution: `<img src="/images/quiz/wqt-toc5/4.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>Which of the following statements is/are TRUE?</p> <p></p>`,
      image: "",
      options: [
        `Every finite language is DFA-acceptable.`,
        `For all  \\( L \\),  \\( L^+ \\) is infinite.`,
        `If  \\( M = (Q,\\Sigma,\\delta,q_0,F) \\) is a DFA and \\( F = Q \\), then  \\( L(M) = \\Sigma^* \\)`,
        `If  \\( M = (Q,\\Sigma,\\delta,q_0,F) \\) is a NFA and \\( F = Q \\), then  \\( L(M) = \\Sigma^* \\)`,
      ],
      answer: ["A", "C"],
      solution: `<img src="/images/quiz/wqt-toc5/5.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>The union of two non-regular DCFLs can possibly be (mark all that are possible):<br>&nbsp;</p> <p></p>`,
      image: "",
      options: [
        `Regular`,
        `A non-regular DCFL`,
        `A CFL that is not a DCFL`,
        `Non-CFL`,
      ],
      answer: ["A", "B", "C"],
      solution: `<img src="/images/quiz/wqt-toc5/6.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p>For every language  \\( A \\), the concatenation  \\( A^{*} A^{*} \\) equals: </p> <p></p>`,
      image: "",
      options: [
        `\\( (A A)^{*} \\)`,
        `\\( \\Sigma^{*} \\)`,
        `\\( A^{*} \\)`,
        `None of the above.`,
      ],
      answer: "C",
      solution: `<img src="/images/quiz/wqt-toc5/7.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p>If  \\( M_{1}, M_{2} \\), and  \\( M_{3} \\) are DFAs with  \\( 100 \\) states each and the same alphabet  \\( \\Sigma \\), then  \\( L\\left(M_{1}\\right) \\cup L\\left(M_{2}\\right) \\cup L\\left(M_{3}\\right) \\) is: </p> <p></p>`,
      image: "",
      options: [
        `Always equal to  \\( \\Sigma^{*} \\).`,
        `Always recognized by a DFA with  \\( 300 \\) states.`,
        `Always recognized by an NFA with  \\( 301 \\) states.`,
        `Possibly non-regular.`,
      ],
      answer: "C",
      solution: `<img src="/images/quiz/wqt-toc5/8.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>Which of the following statements is/are false?</p> <p></p>`,
      image: "",
      options: [
        `The intersection of a CFL and a DCFL is always a CFL.`,
        `The union of two regular languages is always a DCFL.`,
        `For every nondeterministic PDA  \\( N \\), there is a deterministic PDA  \\( M \\) such that  \\( L(M)=L(N) \\).`,
        `The intersection of two non-regular languages is always non-regular.`,
      ],
      answer: ["A", "C", "D"],
      solution: `<img src="/images/quiz/wqt-toc5/9.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>Which of the following statements is/are true ?</p> <p></p>`,
      image: "",
      options: [
        `If  \\( A^{*}=A \\), then the language  \\( A \\) includes the empty string.`,
        `If  \\( A \\) and  \\( B \\) are regular languages recognized by  \\( 3 \\)-state DFAs, then  \\( A \\cap B \\) can be recognized by a  \\( 6 \\)-state DFA.`,
        `Every language generated by an unambiguous context-free grammar is accepted by some DPDA.`,
        `Every subset of a regular language is regular.`,
      ],
      answer: ["A"],
      solution: `<img src="/images/quiz/wqt-toc5/10.png" style="max-width: 75%;">`
    },
  ]
});


registerTest({
  series: "weekly-cs-gate-2027",
  name: "WQT - Theory of Computation-6 | Decidability",
  date: "Oct 01, 2026",
  questions: [
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>Consider the language  \\( L \\):<br><br> \\( L = \\) { \\(  \\langle \\text{M} \\rangle \\mid \\text{M} \\) is a \\( \\text{Turing Machine} \\), and there exists an input whose length is less than  \\( 100 \\), on which  \\( \\text{M} \\) halts \\( \\} \\) </p> <p><br>Which of the following options is true?</p> <p></p>`,
      image: "",
      options: [
        `\\( L \\) is recursive.<br>&nbsp;`,
        `\\( L \\) is recursively enumerable but not recursive.<br>&nbsp;`,
        `\\( L \\) is not recursively enumerable.<br>&nbsp;`,
        `\\( L \\) is regular.`,
      ],
      answer: "B",
      solution: `<img src="/images/quiz/wqt-toc6/1.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>Consider the language  \\( L \\) defined as follows.<br> \$\$ L = \\left\\{ \\begin{array}{ll} \\{0\\} &amp; \\text{if God does not exist} \\\\\\\\ \\{1\\} &amp; \\text{if God exists} \\end{array} \\right. \$\$ <br>Which of the following option is <strong>correct</strong> ? </p> <p>(Note that the answer does not depend on your religious convictions.)</p> <p></p>`,
      image: "",
      options: [
        `\\( L \\) is recursive<br>&nbsp;`,
        `\\( L \\) is recursively enumerable but not recursive<br>&nbsp;`,
        `\\( L \\) is not recursively enumerable<br>&nbsp;`,
        `Whether  \\( L \\) is recursively enumerable or not will be known after we find out if God exists or not.`,
      ],
      answer: "A",
      solution: `<img src="/images/quiz/wqt-toc6/2.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>Which of the following options is/are <strong>TRUE</strong>?</p> <p></p>`,
      image: "",
      options: [
        `Every turing machine recognizable language is recursive.<br>&nbsp;`,
        `The complement of a recursive language is recursively enumerable.<br>&nbsp;`,
        `The complement of a context-free language is context-free.<br>&nbsp;`,
        `The set of turing machines which do not halt on empty input forms a recursively enumerable set`,
      ],
      answer: ["B"],
      solution: `<img src="/images/quiz/wqt-toc6/3.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>If  \\( L \\) is a decidable language, then which of the following is/are <strong>TRUE</strong> ? </p> <p></p>`,
      image: "",
      options: [
        `\\( L \\) is recognizable<br>&nbsp;`,
        `\\( L' \\) is recognizable<br>&nbsp;`,
        `\\( L' \\) is decidable<br>&nbsp;`,
        `There is a Turing machine that halts on all inputs, accepting every string in  \\( L \\)`,
      ],
      answer: ["A", "B", "C", "D"],
      solution: `<img src="/images/quiz/wqt-toc6/4.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>Which of the following problems is<strong> undecidable</strong>?</p> <p></p>`,
      image: "",
      options: [
        `Membership Problem for TMs<br>&nbsp;`,
        `Emptiness Problem for FSAs<br>&nbsp;`,
        `Equivalence Problem for FSAs<br>&nbsp;`,
        `Finiteness Problem for CFGs`,
      ],
      answer: "A",
      solution: `<img src="/images/quiz/wqt-toc6/5.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>Which of the following is/are <strong>FALSE</strong>?</p> <p></p>`,
      image: "",
      options: [
        `A non-deterministic TM can decide languages that a deterministic TM cannot decide.<br>&nbsp;`,
        `If a language  \\( L \\) is context-free then  \\( L' \\) is TM decidable.<br>&nbsp;`,
        `The Language  \\( L = \\{\\langle M,w \\rangle \\mid M \\) is a  \\(  \\text{Turing Machine} \\) and  \\(  w \\notin L(M)\\} \\) is TM recognizable.<br>&nbsp;`,
        `The language  \\( L = \\{\\langle D \\rangle \\mid D \\) is  \\( \\text{DFA} \\) and  \\(  L(D)  \\) is  \\( \\text{regular}\\} \\) is decidable.`,
      ],
      answer: ["A", "C"],
      solution: `<img src="/images/quiz/wqt-toc6/6.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p>Let  \\( L_1 \\) and  \\( L_2 \\) be the following languages:<br><br> \\( L_1 = \\{\\langle M \\rangle \\mid M \\) is a  \\( \\text{Turing Machine} \\),  \\( N \\) is a  \\( \\text{Turing Machine} \\) that halts on all inputs, and  \\( N \\in L(M)\\} \\)<br><br> \\( L_2 = \\{\\langle M \\rangle \\mid M \\) is a  \\( \\text{Turing Machine} \\),  \\( N \\) is a  \\( \\text{Turing Machine} \\) that halts on all inputs, and  \\( M \\in L(N)\\} \\)<br><br>Which of the following options is <strong>correct</strong>? </p> <p></p>`,
      image: "",
      options: [
        `Only  \\( L_1 \\) is decidable<br>&nbsp;`,
        `Only  \\( L_2 \\) is decidable<br>&nbsp;`,
        `Both  \\( L_1 \\) and  \\( L_2 \\) are decidable<br>&nbsp;`,
        `Neither  \\( L_1 \\) nor  \\( L_2 \\) is decidable`,
      ],
      answer: "B",
      solution: `<img src="/images/quiz/wqt-toc6/7.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>Which of the following statements is/are <strong>true</strong>?</p> <p></p>`,
      image: "",
      options: [
        `The language  \\( L = \\{\\langle&nbsp;\\text{M}\\rangle \\ \\mid \\ \\text{M} \\) is a Turing machine and  \\( L(M) \\) is regular \\( \\} \\) is undecidable.<br>&nbsp;`,
        `If  \\( L_1, L_2 \\) are two decidable languages, and \\( L \\) is a language such that  \\( L_1 \\subseteq L \\subseteq L_2 \\), then  \\( L \\) is decidable.<br>&nbsp;`,
        `If a language  \\( L \\) is recursively enumerable and its complement  \\( L' \\) is recursively enumerable, then  \\( L \\) is decidable.<br>&nbsp;`,
        `There are undecidable languages over the alphabet containing only one symbol.`,
      ],
      answer: ["A", "C", "D"],
      solution: `<img src="/images/quiz/wqt-toc6/8.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p>Which of the following is/are <strong>decidable</strong>?<br><br> \\( L_1 = \\{\\langle M \\rangle \\mid M \\) is a  \\(  \\text{DFA} \\) that doesnt accept any string containing an odd number of  \\( \\text{1s}\\}  \\)<br><br> \\( L_2 = \\{\\langle G \\rangle \\mid G \\) is a  \\(  \\text{CFG} \\) over  \\( \\{1\\} \\) and  \\( 1^* \\subseteq L(G)\\} \\) </p> <p></p>`,
      image: "",
      options: [
        `Only  \\( L_1 \\)<br>&nbsp;`,
        `Only  \\( L_2 \\)<br>&nbsp;`,
        `Both  \\( L_1 \\) and  \\( L_2 \\)<br>&nbsp;`,
        `Neither  \\( L_1 \\) nor  \\( L_2 \\)`,
      ],
      answer: "C",
      solution: `<img src="/images/quiz/wqt-toc6/9.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>Suppose there are four languages  \\( A \\),  \\( B \\),  \\( C \\), and  \\( D \\). Each of the languages may or may not be recursively enumerable. However, we know the following about them: </p> <ul> <li>There is a mapping reduction (i.e., an algorithm which can be carried out by some Turing machine, not necessarily polynomial-time) from  \\( \\text{A} \\) to  \\( \\text{B}. \\)&nbsp; </li> <li>There is a mapping reduction from  \\( \\mathrm{B} \\) to  \\( \\mathrm{C} \\). </li> <li>There is a mapping reduction from  \\( \\mathrm{D} \\) to  \\( \\mathrm{C} \\) </li> </ul> <p><br>Which of the following options is/are<strong> TRUE</strong>?</p> <p></p>`,
      image: "",
      options: [
        `If  \\( C \\) is recursively enumerable, then  \\( A \\) is recursively enumerable.<br>&nbsp;`,
        `If the complement of  \\( B \\) is not recursive, then the complement of \\( A \\) is not recursive.<br>&nbsp;`,
        `If  \\( C \\) is recursive, then the complement of \\( D \\) is recursively enumerable.<br>&nbsp;`,
        `If  \\( C \\) is recursively enumerable, then  \\( B \\cap D \\) is recursively enumerable.`,
      ],
      answer: ["A", "C", "D"],
      solution: `<img src="/images/quiz/wqt-toc6/10.png" style="max-width: 75%;">`
    },
  ]
});


registerTest({
  series: "weekly-cs-gate-2027",
  name: "WQT - Theory of Computation-7 | Decidability",
  date: "Oct 01, 2026",
  questions: [
    {
      marks: 1,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>For a deterministic Turing machine, a configuration is represented as  \\( u q v \\), where  \\( q \\) is the current state,  \\( u v \\) is the current tape contents, and the head is currently on the first symbol of  \\( v \\).<br><br>A configuration  \\( C_{1} \\) yields configuration  \\( C_{2} \\) (denoted  \\( C_{1} \\vdash C_{2} \\) ) if the machine can legally go from  \\( C_{1} \\) to  \\( C_{2} \\) in a single step. Formally, for symbols \\( a, b, c \\in \\Gamma \\), strings  \\( u, v \\in \\Gamma^{*} \\), and states  \\( q_{i}, q_{j} \\in Q \\) : </p> <ul> <li>Leftward move:  \\( u a q_{i} b v \\vdash u q_{j} a c v \\) if  \\( \\delta\\left(q_{i}, b\\right)=\\left(q_{j}, c, \\mathrm{~L}\\right) \\) <br>&nbsp; </li> <li>Rightward move:  \\( u a q_{i} b v \\vdash u a c q_{j} v \\) if  \\( \\delta\\left(q_{i}, b\\right)=\\left(q_{j}, c, \\mathrm{R}\\right) \\) </li> </ul> <p>Based strictly on these formal definitions, which of the following configuration transitions is/are NOT valid for any Turing machine?</p> <p></p>`,
      image: "",
      options: [
        `\\( q_{1} 0110 \\vdash 0 q_{1} 110 \\)<br>&nbsp;`,
        `\\( 01 q_{1} 10 \\vdash 0 q_{2} 110 \\)<br>&nbsp;`,
        `\\( 011 q_{2} 0 \\vdash 0 q_{2} 110 \\)<br>&nbsp;`,
        `\\( 01 q_{1} 10 \\vdash 0 q_{2} 111 \\)`,
      ],
      answer: ["C", "D"],
      solution: `<img src="/images/quiz/wqt-toc7/1.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>Consider the following two statements:</p> <p><br>Statement  \\( \\mathbf{I}\\left(S_{1}\\right) \\) : For any  \\( k&gt;1 \\), there is no language that is decided by a TM with  \\( k \\) tapes, but is undecidable by any TM having \\( k-1 \\) (or less) tapes. </p> <p><br>Statement  \\( \\mathbf{II}\\left(S_{2}\\right) \\) : Suppose  \\( L \\) is TM recognizable but not TM decidable. Then any TM that recognizes  \\( L \\) must fail to halt on at least one string. </p> <p><br>Which of the following options is correct?</p> <p></p>`,
      image: "",
      options: [
        `Both  \\( S_{1} \\) and  \\( S_{2} \\) are true.<br>&nbsp;`,
        `\\( S_{1} \\) is true, but  \\( S_{2} \\) is false.<br>&nbsp;`,
        `\\( S_{1} \\) is false, but  \\( S_{2} \\) is true.<br>&nbsp;`,
        `Both  \\( S_{1} \\) and  \\( S_{2} \\) are false.`,
      ],
      answer: "A",
      solution: `<img src="/images/quiz/wqt-toc7/2.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>Consider the language of the Acceptance Problem for Turing Machines:<br><br> \$\$  A_{T M}=\\{\\langle M, w\\rangle \\mid M \\text { is a TM and } w \\text { is in } L(M)\\}  \$\$ <br>Define a Turing Machine  \\( N \\) with the following behavior:<br><br> \\( N= \\) "On input  \\( \\langle M, w\\rangle \\) :<br><br>1. Simulate  \\( M \\) on input  \\( w \\).<br><br>2. If  \\( M \\) accepts, accept. If  \\( M \\) rejects, reject."<br><br>Which of the following statements is/are TRUE regarding the Turing Machine  \\( N \\) ? </p> <p></p>`,
      image: "",
      options: [
        `\\( N \\) decides  \\( A_{T M} \\)<br>&nbsp;`,
        `\\( N \\) recognizes  \\( A_{T M} \\)<br>&nbsp;`,
        `\\( N \\) always halts on any given valid input \\( \\langle M, w\\rangle \\)<br>&nbsp;`,
        `\\( N \\) decides the complement of  \\( A_{T M} \\)`,
      ],
      answer: "B",
      solution: `<img src="/images/quiz/wqt-toc7/3.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>Which of the following is decidable?<br>&nbsp;</p> <p></p>`,
      image: "",
      options: [
        `Given two Turing machines  \\( M_{1} \\) and  \\( M_{2} \\), decide if  \\( L \\left(M_{1} \\right) = L \\left(M_{2}\\right) \\).<br>&nbsp;`,
        `Given a Turing machine  \\( M \\), decide if  \\( L(M) \\) is regular.<br>&nbsp;`,
        `Given a Turing machine  \\( M \\), decide if  \\( M \\) accepts all strings.<br>&nbsp;`,
        `Given a Turing machine  \\( M \\), decide if  \\( M \\) takes more than  \\( 1073 \\) steps on every string.`,
      ],
      answer: "D",
      solution: `<img src="/images/quiz/wqt-toc7/4.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>Let  \\( G \\) be an arbitrary Context-Free Grammar ( \\( CFG \\)) over a terminal alphabet  \\( \\Sigma \\). Consider the following decision problems represented as languages:<br><br> \$\$  \\begin{aligned} L_{\\text {empty }} &amp; =\\{\\langle G\\rangle \\mid G \\text { is a CFG and } L(G)=\\emptyset\\} \\\\ L_{\\text {all }} &amp; =\\left\\{\\langle G\\rangle \\mid G \\text { is a CFG and } L(G)=\\Sigma^{*}\\right\\} \\end{aligned}  \$\$ </p> <p>Which of the following statements is/are correct?</p> <p>&nbsp;</p> <p></p>`,
      image: "",
      options: [
        `\\( L_{\\text {empty }} \\) is a decidable language.<br>&nbsp;`,
        `\\( L_{\\text {all }} \\) is an undecidable language.<br>&nbsp;`,
        `There exists a Turing Machine that always halts and accepts the language  \\( L_{\\text {empty }} \\).<br>&nbsp;`,
        `The problem of determining whether a given  \\( CFG \\) generates every possible string over \\( \\Sigma \\) can be solved by a halting Turing Machine.`,
      ],
      answer: ["A", "B", "C"],
      solution: `<img src="/images/quiz/wqt-toc7/5.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>Define languages  \\( L_{1} \\) and  \\( L_{2} \\) as follows :<br><br> \\( L_{1} =\\{\\langle M, w, 0 \\rangle \\mid M \\) accepts \\( w\\} \\)<br><br> \\( L_{2} =\\{\\langle M, w, 1 \\rangle \\mid M \\) does not accept  \\( w\\} \\)<br><br>Here  \\( \\langle M,w,i \\rangle  \\) is a triplet, whose first component  \\( M \\) is an encoding of a Turing Machine, second component  \\( w \\) is a string, and third component  \\( i \\) is a bit.<br><br>Let  \\( L = L_{1} \\cup L_{2} \\). Which of the following is/are false? </p> <p></p>`,
      image: "",
      options: [
        `\\( L \\) is regular because  \\( L=\\Sigma^{*} \\)<br>&nbsp;`,
        `\\( L \\) is recursive<br>&nbsp;`,
        `\\( L_{1} \\) is recursively enumerable but  \\( L_2 \\) is not<br>&nbsp;`,
        `Neither  \\( L \\) nor  \\( L \\) ' is recursively enumerable`,
      ],
      answer: ["A", "B"],
      solution: `<img src="/images/quiz/wqt-toc7/6.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>Here is the state diagram of a simple TM, where  \\( \\Sigma=\\{0,1\\} \\) and  \\( \\Gamma=\\{0,1, x, \\#, B\\} \\). The accept state is \\( q_{a c c} \\). Any transition not shown in the diagram is assumed to go to the reject state,  \\( q_{\\text {rej }} \\)<br>&nbsp; </p> <p style="text-align:center"><img alt="" src="/images/quiz/wqt-toc7/q_img1.png" style="max-width: 75%;"></p> <p>Each step of the Turing machine first reads the symbol on the cell of the tape under the head. Depending on the symbol and the current state of the controller, it then</p> <ul> <li>(optionally) writes a new symbol at the current tape position,<br>&nbsp;</li> <li>moves either left or right, and<br>&nbsp;</li> <li>(optionally) changes to a new state.</li> </ul> <p>For example, the following transition is taken if the controller is in state  \\( q \\) and the symbol under the read head is a. It replaces the b with the character c and then moves right, switching the controller to the state  \\( r \\).<br> \$\$  q \\quad \\mathrm{~b} \\rightarrow \\mathrm{c}, R \\quad r  \$\$ </p> <p>Which of the following statements is/are false?</p> <p></p>`,
      image: "",
      options: [
        `The string  \\( 000111 \\) is accepted by TM<br>&nbsp;`,
        `TM enters into an infinite loop on input  \\( 00111 \\)<br>&nbsp;`,
        `The language recognized by TM is  \\( \\{0^n 1^m \\mid n,m \\geq 1\\} \\)<br>&nbsp;`,
        `TM rejects the string  \\( 0011 \\)`,
      ],
      answer: ["B", "C", "D"],
      solution: `<img src="/images/quiz/wqt-toc7/7.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p>Let  \\( E_{D F A}=\\{\\langle A\\rangle \\mid A \\) is a DFA and  \\( L(A)=\\emptyset\\} \\). When proving the decidability of  \\( E_{D F A} \\), we look for an algorithmic condition to distinguish between a DFA that accepts some string and one that accepts no strings.<br><br>Which of the following statements provides a universally true "if and only if" (iff) condition for  \\( \\langle A\\rangle \\in E_{D F A} \\) ? </p> <p></p>`,
      image: "",
      options: [
        `\\( \\langle A\\rangle \\in E_{D F A} \\) iff  \\( A \\) 's initial state is not an accepting state.<br>&nbsp;`,
        `\\( \\langle A\\rangle \\in E_{D F A} \\) iff  \\( A \\) 's set of accepting states is empty ( \\( F=\\emptyset \\) ).<br>&nbsp;`,
        `\\( \\langle A\\rangle \\in E_{D F A} \\) iff the set of states in  \\( A \\) is the empty set.<br>&nbsp;`,
        `None of the above.`,
      ],
      answer: "D",
      solution: `<img src="/images/quiz/wqt-toc7/8.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p>Consider two languages,  \\( L_1 \\) and  \\( L_2 \\), containing encodings of Turing machines:<br> \$\$  \\begin{aligned} L_1 &amp;= \\{\\langle M\\rangle \\mid M \\text{ halts on a blank tape within at most 20 steps}\\} \\\\ L_2 &amp;= \\{\\langle M\\rangle \\mid \\forall w\\in\\Sigma^{*},\\, M \\text{ halts on input } w \\text{ within at most 20 steps}\\} \\end{aligned}  \$\$ <br>Which of the following is correct regarding the decidability of language  \\( L_1 \\) and language  \\( L_2 \\)? </p> <p></p>`,
      image: "",
      options: [
        `Both  \\( L_{1} \\) and  \\( L_{2} \\) are decidable.<br>&nbsp;`,
        `\\( L_{1} \\) is decidable, but  \\( L_{2} \\) is undecidable.<br>&nbsp;`,
        `\\( L_{1} \\) is undecidable, but  \\( L_{2} \\) is decidable.<br>&nbsp;`,
        `Neither  \\( L_{1} \\) nor  \\( L_{2} \\) is decidable.`,
      ],
      answer: "A",
      solution: `<img src="/images/quiz/wqt-toc7/9.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p>In number theory, a number is said to be perfect if it is equal to the sum of its proper divisors. For example, 6 is perfect (  \\( 6=1+2+3 \\) ), while 15 is not (  \\( 1+3+5 \\neq 15 \\) ). There is a famous, long-standing mathematical conjecture that states: "There are no odd perfect numbers." To date, no one knows if this conjecture is true or false.<br><br>Consider the language  \\( L \\) defined as:<br><br> \$\$  L=\\{x \\mid x \\text { is an odd perfect number in decimal representation }\\}  \$\$ <br><br>Which of the following statements is correct regarding the classification of language  \\( L \\) ? </p> <p></p>`,
      image: "",
      options: [
        `\\( L \\) is Turing decidable.<br>&nbsp;`,
        `\\( L \\) is Turing recognizable but not Turing decidable.<br>&nbsp;`,
        `\\( L \\) is not Turing recognizable.<br>&nbsp;`,
        `The decidability of  \\( L \\) cannot be determined until the mathematical conjecture is proven true or false.`,
      ],
      answer: "A",
      solution: `<img src="/images/quiz/wqt-toc7/10.png" style="max-width: 75%;">`
    },
  ]
});


registerTest({
  series: "weekly-cs-gate-2027",
  name: "WQT - Theory of Computation-8 | Identify Class Language",
  date: "Oct 01, 2026",
  questions: [
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>Consider the following two languages  \\( L_1 \\) and  \\( L_2 \\) defined over their respective alphabets:<br> \$\$ L_1 = \\{a^i b^j c^k \\mid i, j, k \\ge 0 \\text{ and } i \\cdot j = k\\} \$\$ \$\$ L_2 = \\{0^n 10^m \\mid n, m \\ge 0 \\text{ and } n \\equiv_5 m\\} \$\$Which of the following statements is true regarding the regularity of languages  \\( L_1 \\) and  \\( L_2 \\)? </p> <p></p>`,
      image: "",
      options: [
        `Both  \\( L_1 \\) and  \\( L_2 \\) are regular.<br>&nbsp;`,
        `\\( L_1 \\) is regular, but  \\( L_2 \\) is not regular.<br>&nbsp;`,
        `\\( L_2 \\) is regular, but  \\( L_1 \\) is not regular.<br>&nbsp;`,
        `Neither  \\( L_1 \\) nor  \\( L_2 \\) is regular.`,
      ],
      answer: "C",
      solution: `<img src="/images/quiz/wqt-toc8/1.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>Consider the following two languages defined over their respective alphabets:<br> \$\$ L_1 = \\{w \\in \\{a,b\\}^* \\mid \\text{no two consecutive characters in } w \\text{ are the same, and } \\#_a(w) = \\#_b(w)\\} \$\$ \$\$ L_2 = \\{w \\in \\{a,b,c\\}^* \\mid \\text{no two consecutive characters in } w \\text{ are the same, and } \\#_a(w) = \\#_b(w)\\} \$\$ <br>Which of the following options is <strong>TRUE</strong>? </p> <p></p>`,
      image: "",
      options: [
        `Both  \\( L_1 \\) and  \\( L_2 \\) are regular languages.<br>&nbsp;`,
        `\\( L_1 \\) is regular, but  \\( L_2 \\) is non-regular.<br>&nbsp;`,
        `\\( L_1 \\) is non-regular, but  \\( L_2 \\) is regular.<br>&nbsp;`,
        `Both  \\( L_1 \\) and  \\( L_2 \\) are non-regular languages.`,
      ],
      answer: "B",
      solution: `<img src="/images/quiz/wqt-toc8/2.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>Let  \\( L \\) be any context-free language over an alphabet \\( \\Sigma \\). Let  \\( \\overline{L} \\) denote the complement of  \\( L \\), such that  \\( \\overline{L} = \\Sigma^* \\setminus L \\). Consider the language  \\( L_{comb} \\) defined as:<br> \$\$ L_{comb} = (\\overline{L} \\cdot L) \\cup (L \\cdot \\overline{L}) \\cup (L \\cdot L) \\cup (\\overline{L} \\cdot \\overline{L}) \$\$ Which of the following statement is correct about  \\( L_{comb} \\)? </p> <p></p>`,
      image: "",
      options: [
        `\\( L_{comb} \\) is regular only if  \\( L \\) is a regular language.<br>&nbsp;`,
        `\\( L_{comb} \\) is context-free but may not be regular.<br>&nbsp;`,
        `\\( L_{comb} \\) may or may not be context free as context-free languages are not closed under complementation.<br>&nbsp;`,
        `\\( L_{comb} \\) is always regular because it is same as the set of all strings  \\( (\\Sigma^*) \\).`,
      ],
      answer: "D",
      solution: `<img src="/images/quiz/wqt-toc8/3.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>Let  \\( \\Sigma = \\{0,1\\} \\) be a binary alphabet. Consider the language  \\( L \\subseteq \\Sigma^* \\) consisting of all strings whose every prefix has at least as many  \\( 0 \\)'s as  \\( 1 \\)'s. Formally, for a string  \\( w = w_1w_2w_3 \\ldots w_n \\in \\Sigma^* \\),  \\( w \\in L \\) if and only if for every  \\( k \\in \\{1,2,\\ldots,n\\} \\), the prefix  \\( w_1w_2 \\ldots w_k \\) contains at least as many \\( 0 \\)'s as  \\( 1 \\)'s.<br><br>Which of the following options is true regarding the language  \\( L \\)? </p> <p></p>`,
      image: "",
      options: [
        `\\( L \\) is not a context free language.<br>&nbsp;`,
        `\\( L \\) is a language of balanced parentheses.<br>&nbsp;`,
        `\\( L \\) is not a regular language.<br>&nbsp;`,
        `\\( L = \\{w \\in {0,1}^* \\mid |w|_0 \\ge |w|_1\\} \\)`,
      ],
      answer: "C",
      solution: `<img src="/images/quiz/wqt-toc8/4.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>Consider the following languages over the alphabet  \\( \\Sigma = \\{0,1,c\\} \\) </p> <ul> <li> \\( L_1 = \\{0^n1^n \\mid n \\ge 0\\} \\)<br>&nbsp; </li> <li> \\( L_2 = \\{wcw^r \\mid w \\in \\{0,1\\}^*\\} \\) <br>&nbsp; </li> <li> \\( L_3 = \\{ww^r \\mid w \\in \\{0,1\\}^*\\} \\) </li> </ul> <p>Here,  \\( w^r \\) is the reverse of the string  \\( w \\). Which of these languages are deterministic Context-free languages? </p> <p></p>`,
      image: "",
      options: [
        `None of the languages<br>&nbsp;`,
        `Only  \\( L_1 \\)<br>&nbsp;`,
        `Only  \\( L_1 \\) and  \\( L_2 \\)<br>&nbsp;`,
        `All the three languages`,
      ],
      answer: "C",
      solution: `<img src="/images/quiz/wqt-toc8/5.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>Let  \\( \\Sigma \\) be a finite input alphabet. Define the language  \\( L \\) as the set of all strings that represent valid regular expressions over  \\( \\Sigma \\):<br> \$\$ L = \\{x : x \\text{ is a regular expression over } \\Sigma\\} \$\$ </p> <p>Which of the following classes does the language  \\( L \\) belong to? </p> <p></p>`,
      image: "",
      options: [
        `Regular<br>&nbsp;`,
        `Context-Free<br>&nbsp;`,
        `Recursive<br>&nbsp;`,
        `Recursively Enumerable`,
      ],
      answer: ["B", "C", "D"],
      solution: `<img src="/images/quiz/wqt-toc8/6.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>Which of the following languages over the alphabet  \\( \\Sigma = \\{0,1\\} \\) is/are <strong>regular</strong>?<br><em>(Select all that apply)</em> </p> <p></p>`,
      image: "",
      options: [
        `\\( \\{x \\mid x \\in (0+1)^*, \\text{ number of} \\) &nbsp; " \\( 01 \\)" \\( \\text{s in } x = \\text{number of } \\) " \\( 10 \\)" \\( \\text{s&nbsp;in } x\\} \\)<br>&nbsp;`,
        `\\( L^* \\) where  \\( L = \\{0^{i^2} \\mid i \\ge 1\\} \\)<br>&nbsp;`,
        `\\( \\{wxx^Ry \\mid w,x,y \\in (0+1)^+\\} \\), where \\( x^R \\) is the string  \\( x \\) reversed<br>&nbsp;`,
        `\\( \\{x \\mid x \\in (0+1)^*, x \\ne x^R\\} \\)`,
      ],
      answer: ["A", "B", "C"],
      solution: `<img src="/images/quiz/wqt-toc8/7.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>Let  \\( L \\subseteq \\{0,1\\}^* \\) be a language defined recursively as follows: </p> <ul> <li>&nbsp; \\( \\epsilon \\in L \\)<br>&nbsp; </li> <li>&nbsp;For all  \\( w \\in L \\), then  \\( 0w1 \\in L \\)<br>&nbsp; </li> <li>&nbsp;For all  \\( x,y \\in L \\), then  \\( xy \\in L \\)<br>&nbsp; </li> <li>&nbsp;No other strings are in  \\( L \\). </li> </ul> <p>Which of the following statement(s) is/are <strong>true</strong> regarding the language  \\( L \\)? </p> <p></p>`,
      image: "",
      options: [
        `For every string  \\( w \\in L \\), the total number of  \\( 0 \\)'s is equal to the total number of  \\( 1 \\)s, i.e.,  \\( \\#_0(w) = \\#_1(w) \\).<br>&nbsp;`,
        `For every string  \\( w \\in L \\) and every prefix  \\( u \\) of  \\( w \\), the number of  \\( 0 \\)'s is at least the number of  \\( 1 \\)'s&nbsp;(i.e.,  \\( \\#_0(u) \\ge \\#_1(u)) \\).<br>&nbsp;`,
        `\\( L \\) is a Deterministic Context-Free Language (DCFL) but not a Regular Language.<br>&nbsp;`,
        `The language  \\( L \\) can be generated by the Context-Free Grammar:  \\( S \\to 0S1 \\mid SS \\mid \\epsilon \\).`,
      ],
      answer: ["A", "B", "C", "D"],
      solution: `<img src="/images/quiz/wqt-toc8/8.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>Consider the following languages defined over the alphabet  \\( \\Sigma = \\{a,b\\} \\). Let  \\( \\#_a(x) \\) denote the number of occurrences of the symbol ' \\( a \\)' in string  \\( x \\), and  \\( |w| \\) denote the length of string  \\( w \\).<br><br>Which of the following languages is/are <strong>non-regular</strong>? </p> <p></p>`,
      image: "",
      options: [
        `\\( L_1 = \\{a^n w \\mid n \\ge 1; w \\in \\{a,b\\}^*; w \\text{ contains at least } n \\text{ occurrences of } a\\} \\) <br>&nbsp;`,
        `\\( L_2 = \\{a^n w \\mid n \\ge 1; w \\in {a,b}^*; w \\text{ contains at most } n \\text{ occurrences of } a\\} \\) <br>&nbsp;`,
        `\\( L_3 = \\{a^n w \\mid n \\ge 1; w \\in {a,b}^*; w \\text{ contains exactly } n \\text{ occurrences of } a\\} \\) <br>&nbsp;`,
        `\\( L_4 = \\{w \\in {a,b}^* \\mid |w| \\le 33^{1011}\\} \\)`,
      ],
      answer: ["B", "C"],
      solution: `<img src="/images/quiz/wqt-toc8/9.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>Consider an alphabet  \\( \\Sigma = \\{P,n\\} \\), where  \\( P \\) represents a person in a grid square and \\( n \\) represents an empty square. We define a formal language  \\( L \\) that enforces a Social Distancing rule: every pair of  \\( P \\)s in a string must be separated by at least <strong>three </strong>empty squares  \\( (n) \\). Formally:<br> \$\$ L = \\{w \\in \\Sigma^* \\mid \\text{any two occurrences of } P \\text{ in } w \\text{ are separated by at least three } \\text{n's}\\} \$\$ Which of the following options is/are <strong>correct</strong>? </p> <p></p>`,
      image: "",
      options: [
        `The string  \\( PnnPnnnP \\) is a member of the language  \\( L \\).<br>&nbsp;`,
        `To construct a minimal DFA that recognizes  \\( L \\), we need at least  \\( 5 \\) states.<br>&nbsp;`,
        `If the automaton is currently in a state representing that it has seen exactly two  \\( n \\)'s since the last  \\( P \\), receiving another  \\( P \\) as input must transition the machine to a "dead" state.<br>&nbsp;`,
        `The complement of  \\( L \\) is the set of all strings where at least one pair of  \\( P \\)'s is separated by two or fewer  \\( n \\)'s.`,
      ],
      answer: ["B", "C", "D"],
      solution: `<img src="/images/quiz/wqt-toc8/10.png" style="max-width: 75%;">`
    },
  ]
});

registerTest({
  series: "weekly-cs-gate-2027",
  name: "WQT - Theory of Computation-5 | FA, CFL, DCFL",
  date: "Oct 01, 2026",
  questions: [
    {
      marks: 1,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>Let  \\( \\Sigma \\) be a finite alphabet, and let  \\( w^{R} \\) denote the reversal of a string  \\( w \\). Suppose a language  \\( L \\subseteq \\Sigma^{*} \\) is given, and we define the operation:<br> \$\$  L^{R}=\\left\\{w^{R} \\mid w \\in L\\right\\}  \$\$<br>If it is known that \\( L^{R} \\) always belongs to the exact same language class as  \\( L \\) for any choice of  \\( L \\) within that class, which of the following language families could  \\( L \\) belong to?<br>(Select all the correct options.) </p> <p></p>`,
      image: "",
      options: [
        `The class of Regular Languages<br>&nbsp;`,
        `The class of Deterministic Context-Free Languages (DCFLs)<br>&nbsp;`,
        `The class of Context-Free Languages (CFLs)<br>&nbsp;`,
        `The class of Recursive Languages`,
      ],
      answer: ["A", "C", "D"],
      solution: `<img src="/images/quiz/wqt-toc5/1.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>Imagine two context-free languages,  \\( L_{1} \\) and  \\( L_{2} \\), as two different valid programming syntaxes. A software engineer wants to create a new language,  \\( L_{\\text {new }} \\), that only accepts code that is valid in both syntaxes simultaneously.<br>Which of the following statements is TRUE regarding  \\( L_{\\text {new }} \\) ? </p> <p></p>`,
      image: "",
      options: [
        `\\( L_{\\text {new }} \\) is guaranteed to be a context-free language.<br>&nbsp;`,
        `\\( L_{\\text {new }} \\) is guaranteed to be a regular language.<br>&nbsp;`,
        `\\( L_{\\text {new }} \\) may or may not be a context-free language.<br>&nbsp;`,
        `\\( L_{\\text {new }} \\) is guaranteed to be a context-sensitive language but never context-free.`,
      ],
      answer: "C",
      solution: `<img src="/images/quiz/wqt-toc5/2.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>Let  \\( \\Sigma=\\{a, b\\} \\) be an alphabet. Consider two formal languages over  \\( \\Sigma \\), where  \\( L_{1} \\) is known to be a regular language and \\( L_{2} \\) is known to be a nonregular language. Let \\( L_{\\text {new }} \\) be a new language constructed by performing an operation on  \\( L_{1} \\) and  \\( L_{2} \\).<br>Which of the following operations guarantees that  \\( L_{\\text {new }} \\) will always be a nonregular language, regardless of the specific choices of  \\( L_{1} \\) and  \\( L_{2} \\)? </p> <p></p>`,
      image: "",
      options: [
        `\\( L_{\\text {new }}=L_{1} \\cup L_{2} \\)<br>&nbsp;`,
        `\\( L_{\\text {new }}=L_{1} \\cap L_{2} \\)<br>&nbsp;`,
        `\\( L_{\\text {new }}=L_{1}-L_{2} \\)<br>&nbsp;`,
        `\\( L_{\\text {new }}=\\overline{L_{2}} \\)`,
      ],
      answer: "D",
      solution: `<img src="/images/quiz/wqt-toc5/3.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>Let  \\( L_{1} \\) and  \\( L_{2} \\) be two regular languages over the same alphabet  \\( \\Sigma \\). Suppose  \\( M_{1}=\\left(S_{1}, \\Sigma, \\delta_{1}, s_{1}, F_{1}\\right) \\) and \\( M_{2}=\\left(S_{2}, \\Sigma, \\delta_{2}, s_{2}, F_{2}\\right) \\) are Deterministic Finite Automata (DFAs) such that  \\( L\\left(M_{1}\\right)=L_{1} \\) and  \\( L\\left(M_{2}\\right)=L_{2} \\).<br>To prove that the class of regular languages is closed under union, we construct a product DFA  \\( M=\\left(S_{1} \\times S_{2}, \\Sigma, \\delta,\\left(s_{1}, s_{2}\\right), F\\right) \\) that accepts the language  \\( L_{1} \\cup L_{2} \\).<br>Which of the following correctly defines the set of accept states  \\( F \\) for the product DFA  \\( M \\)? </p> <p></p>`,
      image: "",
      options: [
        `\\( F=F_{1} \\times F_{2} \\)<br>&nbsp;`,
        `\\( F=\\left(F_{1} \\times S_{2}\\right) \\cup\\left(S_{1} \\times F_{2}\\right) \\) <br>&nbsp;`,
        `\\( F=\\left(F_{1} \\times\\left(S_{2} \\backslash F_{2}\\right)\\right) \\cup\\left(\\left(S_{1} \\backslash F_{1}\\right) \\times F_{2}\\right) \\) <br>&nbsp;`,
        `\\( F=\\left(S_{1} \\times S_{2}\\right) \\backslash\\left(F_{1} \\times F_{2}\\right) \\)`,
      ],
      answer: "B",
      solution: `<img src="/images/quiz/wqt-toc5/4.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>Let  \\( L \\) be a regular language. We define a new language  \\( L_{\\text {sym }} \\) that contains all strings in \\( L \\) whose reversals are also in  \\( L \\) :<br> \$\$  L_{\\mathrm{sym}}=\\left\\{w \\in L \\mid w^{R} \\in L\\right\\}  \$\$<br>Is the language  \\( L_{\\text {sym }} \\) guaranteed to be regular ? </p> <p></p>`,
      image: "",
      options: [
        `No, because checking if a string matches its reversal requires a stack.<br>&nbsp;`,
        `Yes, because  \\( L_{\\text {sym }} \\) can be written as  \\( L \\cup L^{R} \\). Since regular languages are closed under reversal and union,  \\( L_{\\text {sym }} \\) is regular.<br>&nbsp;`,
        `No, because regular languages are not closed under the reversal operation unless the language is finite.<br>&nbsp;`,
        `Yes, because  \\( L_{\\text {sym }} \\) can be written as  \\( L \\cap L^{R} \\). Since regular languages are closed under reversal and intersection,  \\( L_{\\text {sym }} \\) is regular.`,
      ],
      answer: "D",
      solution: `<img src="/images/quiz/wqt-toc5/5.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>For any language  \\( L \\), we define the operation  \\( L_{1 / 2} \\) to be the language containing the first halves of all strings in  \\( L \\) that have an even length. Formally:<br> \$\$  L_{1 / 2}=\\{x \\mid x y \\in L \\text { for some } y \\text { with }|x|=|y|\\}  \$\$ <br>If  \\( L \\) is a Decidable language, then which of the following is true? </p> <p></p>`,
      image: "",
      options: [
        `\\( L_{1 / 2} \\) must be Decidable.<br>&nbsp;`,
        `\\( L_{1 / 2} \\) is guaranteed to be Recursively Enumerable, but it is not necessarily Decidable.<br>&nbsp;`,
        `Length of every string in  \\( L_{1 / 2} \\) is even.<br>&nbsp;`,
        `\\( L_{1 / 2} \\) may or may not&nbsp;be Recursively Enumerable.`,
      ],
      answer: ["A"],
      solution: `<img src="/images/quiz/wqt-toc5/6.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>Let  \\( \\Sigma \\) be a finite alphabet. Let  \\( L_{1}, L_{2} \\subseteq \\Sigma^{*} \\) be two languages such that  \\( L_{1} \\) is a regular language and  \\( L_{2} \\) is not a regular language. In addition, we are given the following conditions: </p> <ul> <li> \\( L_{2} \\nsubseteq L_{1} \\)<br>&nbsp; </li> <li> \\( L_{1} \\nsubseteq L_{2} \\)<br>&nbsp; </li> <li> \\( L_{1} \\cap L_{2} \\) is an infinite set. </li> </ul> <p>Which of the following statements is/are FALSE?</p> <p></p>`,
      image: "",
      options: [
        `\\( L_{1} \\cap L_{2} \\) can be a regular language.<br>&nbsp;`,
        `\\( L_{1} \\cap L_{2} \\) can be a non-regular language.<br>&nbsp;`,
        `\\( L_{1} \\cap L_{2} \\) must be a non-regular language.<br>&nbsp;`,
        `\\( L_{1} \\cap L_{2} \\) must be a regular language.`,
      ],
      answer: ["C", "D"],
      solution: `<img src="/images/quiz/wqt-toc5/7.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p>Let  \\( A \\) be a finite automaton that accepts a regular language  \\( L \\). We want to build a new automaton  \\( \\overline{A} \\) that accepts the reversed language \\( L^{R} \\) (the language containing all strings of \\( L \\) written backward).<br>To do this, we reverse the direction of all arrows in the transition diagram of  \\( A \\). What must we do with the start and accepting states to complete the construction of  \\( \\overline{A} \\)? </p> <p></p>`,
      image: "",
      options: [
        `In  \\( \\overline{A} \\), create a new start state with \\( \\varepsilon \\)-transitions to all accepting states of  \\( A \\), and keep the accepting states of  \\( A \\) as accepting while also making the start state of  \\( A \\) an accepting state of  \\( \\overline{A} \\).<br>&nbsp;`,
        `Keep the start state of  \\( A \\) as the start state of  \\( \\overline{A} \\), and make all accepting states of  \\( A \\) the new accepting states of  \\( \\overline{A} \\).<br>&nbsp;`,
        `Create a single new start state that connects to all of  \\( \\text{A's} \\)&nbsp;accepting states using \\( \\varepsilon \\)-transitions, and make the original start state of  \\( A \\) the only accepting state of  \\( \\overline{A} \\).<br>&nbsp;`,
        `Make the start state of  \\( A \\) the only accepting state of  \\( \\overline{A} \\), and turn all accepting states of  \\( A \\) into multiple start states of  \\( \\overline{A} \\).`,
      ],
      answer: "C",
      solution: `<img src="/images/quiz/wqt-toc5/8.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "NAT",
      text: `<p>For any two languages  \\( A \\) and  \\( B \\), we define the operation  \\( \\operatorname{CHOP}(A, B) \\) as the language containing all strings  \\( w \\) that can be formed by chopping off a suffix \\( x \\in B \\) from a string  \\( w x \\in A \\) : \$\$  \\operatorname{CHOP}(A, B)=\\{w \\mid \\exists x \\in B \\text { such that } w x \\in A\\} \$\$ Let  \\( X, Y \\), and  \\( Z \\) be three languages defined over the alphabet \\( \\Sigma=\\{\\mathrm{a}, \\mathrm{b}\\} \\) as follows: \$\$  \\begin{aligned} X &amp; =\\{\\mathrm{aab}, \\mathrm{aba}, \\mathrm{bba}, \\mathrm{bbb}\\} \\\\ Y &amp; =\\{\\mathrm{ba}, \\mathrm{bbb}\\} \\\\ Z &amp; =\\left\\{\\mathrm{a}^{n} \\mathrm{~b}^{n} \\mid n \\geq 0\\right\\} \\end{aligned} \$\$ Let  \\( N_{1} \\) be the cardinality of  \\( \\operatorname{CHOP}(X, Y) \\), and let  \\( N_{2} \\) be the cardinality of  \\( \\operatorname{CHOP}(X, Z) \\). What is value of \\( N_{1}+N_{2} \\) ? </p>`,
      image: "",
      options: [],
      answer: "8",
      solution: `<img src="/images/quiz/wqt-toc5/9.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p>For any language  \\( A \\), we define the prefix language  \\( \\operatorname{PREFIX}(A) \\) as the set of all strings  \\( w \\) that form a string in  \\( A \\) when some suffix string  \\( x \\) is appended to them:<br> \$\$  \\operatorname{PREFIX}(A)=\\left\\{w \\mid \\exists x \\in \\Sigma^{*} \\text { such that } w x \\in A\\right\\}  \$\$ <br>Let  \\( M=\\left(Q, \\Sigma, \\delta, q_{0}, F\\right) \\) be a DFA that recognizes the regular language  \\( A \\). We want to construct a new finite automaton \\( M^{\\prime}=\\left(Q, \\Sigma, \\delta, q_{0}, F^{\\prime}\\right) \\) that precisely recognizes  \\( \\operatorname{PREFIX}(A) \\).<br>To achieve this without changing the states, alphabet, transition function, or start state of  \\( M \\), how should the new set of accepting states \\( F^{\\prime} \\) be defined? </p> <p></p>`,
      image: "",
      options: [
        `\\( F^{\\prime}=\\{q \\in Q \\mid q \\notin F\\} \\) <br>&nbsp;`,
        `\\( F^{\\prime}=\\left\\{q \\in Q \\mid\\right. \\) there is a path from  \\( q_{0} \\) to  \\( \\left.q\\right\\} \\)<br>&nbsp;`,
        `\\( F^{\\prime}=\\{q \\in Q \\mid \\) there is a path from  \\( q \\) to some state in  \\( F\\} \\)<br>&nbsp;`,
        `\\( F^{\\prime}=\\{q \\in F \\mid \\delta(q, \\sigma) \\in F \\) for all \\( \\sigma \\in \\Sigma\\} \\)`,
      ],
      answer: "C",
      solution: `<img src="/images/quiz/wqt-toc5/10.png" style="max-width: 75%;">`
    },
  ]
});


registerTest({
  series: "weekly-cs-gate-2027",
  name: "WQT - Theory of Computation-6 | Decidability",
  date: "Oct 01, 2026",
  questions: [
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>Consider the Context-Free Grammar (CFG)  \\( G=(V, \\Sigma, P, S) \\), where  \\( S \\) is the start symbol,  \\( \\Sigma=\\{a, b\\} \\) is the set of terminal symbols, \\( V=\\{S, B\\} \\) is the set of non-terminals, and the set of production rules  \\( P \\) is defined by:<br> \$\$  \\begin{aligned} &amp; S \\longrightarrow S B \\mid a a \\\\ &amp; B \\longrightarrow b S B b \\mid a b \\end{aligned}  \$\$ <br>Let  \\( |w|_{a} \\) denote the number of occurrences of the terminal symbol  \\( a \\) in a string  \\( w \\), and let  \\( |w|_{b} \\) denote the number of occurrences of the terminal symbol  \\( b \\) in  \\( w \\).<br>Which of the following equations correctly describes the relationship between the number of  \\( a \\) 's and  \\( b \\) 's for all terminal strings  \\( w \\in L(G) \\) ? </p> <p></p>`,
      image: "",
      options: [
        `\\( |w|_{a}=|w|_{b}+2 \\)<br>&nbsp;`,
        `\\( |w|_{a}=2|w|_{b} \\)<br>&nbsp;`,
        `\\( |w|_{a}=|w|_{b} \\)<br>&nbsp;`,
        `\\( |w|_{a}=\\left(|w|_{b}+1\\right) \\cdot 2 \\)`,
      ],
      answer: "A",
      solution: `<img src="/images/quiz/wqt-toc6/1.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>Consider the regular grammar below<br> \$\$  \\begin{aligned} S &amp;\\to bS\\ |\\ aA\\ |\\ \\epsilon \\\\ A &amp;\\to aS\\ |\\ bA \\end{aligned}  \$\$ <br>The Myhill-Nerode equivalence classes for the language generated by the grammar are </p> <p></p>`,
      image: "",
      options: [
        `\\( \\{w\\in(a+b)^*\\ |\\ \\#a(w)\\ \\text{is even}\\} \\) and  \\( \\{w\\in(a+b)^*\\ |\\ \\#a(w)\\ \\text{is odd}\\} \\) <br>&nbsp;`,
        `\\( \\{w\\in(a+b)^*\\ |\\ \\#a(w)\\ \\text{is even}\\} \\) and  \\( \\{w\\in(a+b)^*\\ |\\ \\#b(w)\\ \\text{is odd}\\} \\) <br>&nbsp;`,
        `\\( \\{w\\in(a+b)^*\\ |\\ \\#a(w)=\\#b(w)\\} \\) and  \\( \\{w\\in(a+b)^*\\ |\\ \\#a(w)\\neq\\#b(w)\\} \\) <br>&nbsp;`,
        `\\( \\{\\epsilon\\},\\ \\{wa\\ |\\ w\\in(a+b)^*\\} \\) and \\( \\{wb\\ |\\ w\\in(a+b)^*\\} \\)`,
      ],
      answer: "A",
      solution: `<img src="/images/quiz/wqt-toc6/2.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>Let  \\( G \\) be a Context-Free Grammar (CFG) and let  \\( L(G) \\) be its language. Which of the following conditions, if true for a string  \\( w \\in L(G) \\), prove that  \\( G \\) is an ambiguous grammar? </p> <p></p>`,
      image: "",
      options: [
        `The string  \\( w \\) has two different parse trees.<br>&nbsp;`,
        `The string  \\( w \\) has two different left-most derivations.<br>&nbsp;`,
        `The string  \\( w \\) has two different right-most derivations.<br>&nbsp;`,
        `The string  \\( w \\) has two different derivations.`,
      ],
      answer: ["A", "B", "C"],
      solution: `<img src="/images/quiz/wqt-toc6/3.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>Consider the Context-Free Grammar (CFG)  \\( G \\) defined by the production rules:<br> \$\$  S \\longrightarrow a S \\mid a S b S \\mid \\epsilon  \$\$<br>To demonstrate that  \\( G \\) is ambiguous, a student analyzes the string \\( w=a a b \\). Which of the following statement is correct ? </p> <p></p>`,
      image: "",
      options: [
        `The string  \\( w \\) has exactly two distinct parse trees, which directly implies it has exactly two distinct leftmost derivations and exactly two distinct rightmost derivations.<br>&nbsp;`,
        `The string  \\( w \\) has exactly two distinct parse trees, but it has only one unique leftmost derivation.<br>&nbsp;`,
        `The string  \\( w \\) has multiple distinct derivations, which implies that  \\( G \\) is ambiguous.<br>&nbsp;`,
        `The string  \\( w \\) cannot be generated by this grammar.`,
      ],
      answer: "A",
      solution: `<img src="/images/quiz/wqt-toc6/4.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>Consider the following two statements, where  \\( V \\) represents the set of non-terminals,  \\( T \\) represents the set of terminals, and  \\( \\lambda \\) denotes the empty string:<br><br> \\( \\textbf{Statement I:} \\) For every regular language  \\( L \\) not containing  \\( \\lambda \\), there exists a grammar  \\( G \\) with  \\( L = L(G) \\) whose productions are strictly restricted to the forms:<br> \$\$  A \\longrightarrow a B \\quad \\text { or } \\quad A \\longrightarrow a  \$\$ <br>where  \\( A, B \\in V \\) and  \\( a \\in T \\).<br><br> \\( \\textbf{Statement II:} \\) Any regular grammar \\( G \\) for which the generated language is non-empty (  \\( L(G) \\neq \\emptyset \\) ) must have at least one production of the form:<br> \$\$  A \\longrightarrow x  \$\$<br>where \\( A \\in V \\) and  \\( x \\in T^{*} \\).<br>Which of the following option is true? </p> <p></p>`,
      image: "",
      options: [
        `Both Statement  \\( \\textbf{I} \\) and Statement  \\( \\textbf{II} \\) are correct.<br>&nbsp;`,
        `Statement  \\( \\textbf{I} \\) is correct but Statement  \\( \\textbf{II} \\) is incorrect.<br>&nbsp;`,
        `Statement  \\( \\textbf{I} \\) is incorrect but Statement  \\( \\textbf{II} \\) is correct.<br>&nbsp;`,
        `Both Statement  \\( \\textbf{I} \\)&nbsp;and Statement  \\( \\textbf{II} \\)&nbsp;are incorrect.`,
      ],
      answer: "A",
      solution: `<img src="/images/quiz/wqt-toc6/5.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>Consider the Context-Free Grammar  \\( G: \\)<br> \$\$  \\begin{aligned} &amp; S \\longrightarrow A S A \\mid a B \\\\ &amp; A \\longrightarrow B \\mid S \\\\ &amp; B \\longrightarrow b \\mid \\epsilon \\end{aligned}  \$\$ <br>Which of the following strings is/are generated by this grammar ? </p> <p></p>`,
      image: "",
      options: [
        `\\( b b a \\)<br>&nbsp;`,
        `\\( a b \\)<br>&nbsp;`,
        `\\( b a \\)<br>&nbsp;`,
        `\\( b b \\)`,
      ],
      answer: ["A", "B", "C"],
      solution: `<img src="/images/quiz/wqt-toc6/6.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p>Consider the Grammar  \\( G: \\)<br> \$\$  \\begin{aligned} &amp; S \\longrightarrow \\epsilon \\mid a T&nbsp;\\mid b T \\\\ &amp; T \\longrightarrow a S \\mid b S \\end{aligned}  \$\$ <br>Which of the following statements is/are incorrect ? </p> <p></p>`,
      image: "",
      options: [
        `Every terminal string  \\( w \\in L(G) \\) has an even length.<br>&nbsp;`,
        `The string  \\( a a b b \\) can be derived and is accepted by \\( G \\).<br>&nbsp;`,
        `The string  \\( b a b b \\) cannot be derived and is not accepted by  \\( G \\).<br>&nbsp;`,
        `There exists at least one string of even length&nbsp;that does not belong to  \\( L(G) \\).`,
      ],
      answer: "C",
      solution: `<img src="/images/quiz/wqt-toc6/7.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>The following grammar is ambiguous:  \$\$ \\begin{aligned}&amp;S\\to AB\\\\&amp;A\\to aA\\mid a\\\\&amp;B\\to aB\\mid a\\end{aligned} \$\$ Which of the following pairs of derivations correctly prove that the grammar is ambiguous? </p> <p></p>`,
      image: "",
      options: [
        `\\( S\\Rightarrow AB\\Rightarrow aAB\\Rightarrow aaB\\Rightarrow aaa \\) <br> \\( S\\Rightarrow AB\\Rightarrow Aa\\Rightarrow aAa\\Rightarrow aaa \\) <br>&nbsp;`,
        `\\( S\\Rightarrow AB\\Rightarrow aAB\\Rightarrow aaB\\Rightarrow aaa \\) <br>&nbsp; \\( S\\Rightarrow AB\\Rightarrow aB\\Rightarrow aaB\\Rightarrow aaa \\) <br>&nbsp;`,
        `\\( S\\Rightarrow AB\\Rightarrow Aa\\Rightarrow aAa\\Rightarrow aaa \\) <br> \\( S\\Rightarrow AB\\Rightarrow AaB\\Rightarrow Aaa\\Rightarrow aaa \\) <br>&nbsp;`,
        `\\( S\\Rightarrow AB\\Rightarrow aAB\\Rightarrow aaB\\Rightarrow aaa \\) <br> \\( S\\Rightarrow AB\\Rightarrow aB\\Rightarrow aa \\)`,
      ],
      answer: ["B", "C"],
      solution: `<img src="/images/quiz/wqt-toc6/8.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>Consider the Grammar  \\( G: \\)<br> \$\$  \\begin{aligned} &amp; S \\longrightarrow A 1 B \\\\ &amp; A \\longrightarrow 0 A \\mid \\epsilon \\\\ &amp; B \\longrightarrow 0 B \\mid 1 B&nbsp;\\mid \\epsilon \\end{aligned}  \$\$ <br>Which of the following statements is/are incorrect? </p> <p></p>`,
      image: "",
      options: [
        `The regular expression of the language  \\( L(G) \\) is  \\( 0^{*} 1(0+1)^{*} \\).<br>&nbsp;`,
        `The grammar  \\( G \\) is a regular grammar.<br>&nbsp;`,
        `The language  \\( L(G) \\) is a regular language.<br>&nbsp;`,
        `The grammar  \\( G \\) is unambiguous.`,
      ],
      answer: ["B"],
      solution: `<img src="/images/quiz/wqt-toc6/9.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>Consider the Context-Free Grammar  \\( G: \\)<br> \$\$  \\begin{aligned} &amp; S \\longrightarrow 1 S 1 \\mid T \\\\ &amp; T \\longrightarrow 1 X 1 \\mid X \\\\ &amp; X \\longrightarrow 0 X 0 \\mid 1 \\end{aligned}  \$\$ <br>Let  \\( |w| \\) denote the length of a string  \\( w \\). Which of the following statements is/are correct? </p> <p></p>`,
      image: "",
      options: [
        `The string  \\( 11111 \\) has more than one parse tree.<br>&nbsp;`,
        `Every string  \\( w \\in L(G) \\) has an odd length (i.e.,  \\( |w| \\ (\\bmod \\ 2) \\neq 0 \\) ).<br>&nbsp;`,
        `The string  \\( 111 \\) appears at the third position in the lexicographical enumeration of  \\( L(G) \\).<br>&nbsp;`,
        `The grammar  \\( G \\) is a non-regular grammar, but the language  \\( L(G) \\) is a regular language.`,
      ],
      answer: ["A", "B", "C"],
      solution: `<img src="/images/quiz/wqt-toc6/10.png" style="max-width: 75%;">`
    },
  ]
});


registerTest({
  series: "weekly-cs-gate-2027",
  name: "WQT - Theory of Computation-7 | Decidability",
  date: "Oct 01, 2026",
  questions: [
    {
      marks: 1,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>Let  \\( A \\) be a non-empty countable set, and let  \\( f: B \\rightarrow A \\) be a function from an arbitrary set  \\( B \\) to  \\( A \\). For each element  \\( x \\in A \\), let the preimage of  \\( x \\) under  \\( f \\) be denoted as:<br> \$\$  f^{-1}(x)=\\{b \\in B \\mid f(b)=x\\}  \$\$<br>If  \\( f^{-1}(x) \\) is a countable set for every  \\( x \\in A \\), which of the following is the correct conclusion regarding the<br>cardinality of the domain set  \\( B \\)? </p> <p></p>`,
      image: "",
      options: [
        `\\( B \\) must be an uncountably infinite set.<br>&nbsp;`,
        `\\( B \\) must be a finite set.<br>&nbsp;`,
        `\\( B \\) is guaranteed to be a countable set.<br>&nbsp;`,
        `The cardinality of  \\( B \\) cannot be determined.`,
      ],
      answer: ["C"],
      solution: `<img src="/images/quiz/wqt-toc7/1.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>Consider the following two mathematical assertions regarding an arbitrary set  \\( Y \\), where  \\( |Y| \\) denotes the cardinality of  \\( Y, Y \\times Y \\) denotes its Cartesian product, and  \\( \\mathcal{P}(Y) \\) denotes its power set:<br><br> \\( \\textbf{Statement I:} \\) There exists a set  \\( Y \\) such that  \\( |Y| \\neq|Y \\times Y| \\).<br><br> \\( \\textbf{Statement II:} \\) There exists a set  \\( Y \\) such that  \\( |Y| \\neq|\\mathcal{P}(Y)| \\).<br><br>Which of the following option is correct? </p> <p></p>`,
      image: "",
      options: [
        `Both Statement  \\( \\mathbf{I} \\) and Statement  \\( \\mathbf{II} \\) are false.<br>&nbsp;`,
        `Statement  \\( \\mathbf{I} \\)&nbsp;is true, but Statement \\( \\mathbf{II} \\) is false.<br>&nbsp;`,
        `Statement  \\( \\mathbf{I} \\)&nbsp;is false, but Statement \\( \\mathbf{II} \\)&nbsp;is true.<br>&nbsp;`,
        `Both Statement  \\( \\mathbf{I} \\)&nbsp;and Statement  \\( \\mathbf{II} \\) are true.`,
      ],
      answer: "D",
      solution: `<img src="/images/quiz/wqt-toc7/2.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>Let  \\( A \\) and  \\( B \\) be two non-empty sets. Consider the following three assertions expressed in first-order logic symbols, where  \\( |A| \\) and  \\( |B| \\) denote the cardinalities of sets  \\( A \\) and  \\( B \\), respectively: </p> <p> \\( \\mathbf{I.} \\)  \\( \\exists f: A \\rightarrow B \\quad \\forall a_{1} \\in A \\quad \\forall a_{2} \\in A\\left(a_{1} \\neq a_{2} \\rightarrow f\\left(a_{1}\\right) \\neq f\\left(a_{2}\\right)\\right) \\) </p> <p> \\( \\mathbf{II.} \\)  \\( \\exists f: A \\rightarrow B \\quad \\forall b \\in B \\quad \\exists a \\in A(f(a)=b) \\) </p> <p> \\( \\mathbf{III.} \\)  \\( \\exists f: A \\rightarrow B \\quad \\forall b \\in B \\quad \\exists a \\in A\\left(f(a)=b \\wedge \\forall a^{\\prime} \\in A\\left(a \\neq a^{\\prime} \\rightarrow f\\left(a^{\\prime}\\right) \\neq b\\right)\\right) \\) </p> <p><br>Which of the following describes the set cardinality relationships implied by Statements  \\( \\mathbf{I} \\),  \\( \\mathbf{II} \\), and  \\( \\mathbf{III} \\) in order? </p> <p>&nbsp;</p> <p>&nbsp;</p> <p></p>`,
      image: "",
      options: [
        `\\( \\mathbf{I:} \\)&nbsp; \\( |A| \\geq|B|, \\quad \\)  \\( \\mathbf{II:} \\)  \\( |A| \\leq|B|, \\quad \\)  \\( \\mathbf{III:} \\)  \\( |A|=|B| \\)<br>&nbsp;`,
        `\\( \\mathbf{I:} \\)  \\( |A| \\leq|B|, \\quad \\)  \\( \\mathbf{II:} \\)  \\( |A| \\geq|B|, \\quad \\)  \\( \\mathbf{III:} \\)  \\( |A|=|B| \\)<br>&nbsp;`,
        `\\( \\mathbf{I:} \\)&nbsp;  \\( |A| \\leq|B|, \\quad \\)  \\( \\mathbf{II:} \\)  \\( |A| \\leq|B|, \\quad \\)  \\( \\mathbf{III:} \\)  \\( |A| \\neq|B| \\)<br>&nbsp;`,
        `\\( \\mathbf{I:} \\)  \\( |A|=|B|, \\quad \\)  \\( \\mathbf{II:} \\)  \\( |A| \\geq|B|, \\quad \\)  \\( \\mathbf{III:} \\)  \\( |A| \\leq|B| \\)`,
      ],
      answer: "B",
      solution: `<img src="/images/quiz/wqt-toc7/3.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>Let  \\( \\mathbb{R} \\) denote the set of real numbers, \\( \\mathbb{Z} \\) denote the set of integers, and let \\( U=\\mathcal{P}(\\mathbb{R}) \\) be the power set of \\( \\mathbb{R} \\) (meaning the elements of  \\( U \\) are subsets of  \\( \\mathbb{R} \\)). </p> <p>Consider the following two statements:</p> <p> \\( \\mathbf{Statement\\ I} \\): For all subsets  \\( X \\) and  \\( Y \\) in  \\( U \\), if  \\( X \\) and  \\( Y \\) have the same cardinality  \\( (|X|=|Y|) \\), then  \\( X \\) and  \\( Y \\) must be the identical set  \\( (X=Y) \\). </p> <p> \\( \\mathbf{Statement\\ II} \\): There exist two subsets \\( A \\) and  \\( B \\) in  \\( U \\) such that both  \\( A \\) and  \\( B \\) contain the set of integers as a subset  \\( (\\mathbb{Z}\\subseteq A \\text{ and } \\mathbb{Z}\\subseteq B) \\), yet \\( A \\) and  \\( B \\) have strictly different cardinalities  \\( (|A|\\neq|B|) \\). </p> <p>Which of the following is correct ?</p> <p></p>`,
      image: "",
      options: [
        `Both Statement  \\( \\mathbf{\\ I} \\) and Statement&nbsp; \\( \\mathbf{\\ II} \\)&nbsp;are false.<br>&nbsp;`,
        `Statement  \\( \\mathbf{\\ I} \\) is true, but Statement  \\( \\mathbf{\\ II} \\)&nbsp;is false.<br>&nbsp;`,
        `Statement  \\( \\mathbf{\\ I} \\) is false, but Statement  \\( \\mathbf{\\ II} \\) is true.<br>&nbsp;`,
        `Both Statement  \\( \\mathbf{\\ I} \\) and Statement  \\( \\mathbf{\\ II} \\)&nbsp;are true.`,
      ],
      answer: "C",
      solution: `<img src="/images/quiz/wqt-toc7/4.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>Let  \\( \\mathbb{N} \\) denote the set of natural numbers and  \\( \\mathcal{P}(\\mathbb{N}) \\) denote its power set. Which of the following functions successfully serves as a valid example to establish the inequality \\( |\\mathcal{P}(\\mathbb{N})| \\leq|\\mathbb{N}| \\) ? </p> <p></p>`,
      image: "",
      options: [
        `\\( g_{A}: \\mathcal{P}(\\mathbb{N}) \\rightarrow \\mathbb{N} \\quad \\) where  \\( \\quad g_{A}(x)= \\begin{cases}0 &amp; \\text { if } x=\\emptyset \\\\ 1 &amp; \\text { otherwise }\\end{cases} \\) <br>&nbsp;`,
        `\\( g_{B}: \\mathcal{P}(\\mathbb{N}) \\rightarrow \\mathbb{N} \\quad \\) where  \\( \\quad g_{B}(x)=20 \\)<br>&nbsp;`,
        `\\( g_{C}: \\mathcal{P}(\\mathbb{N}) \\rightarrow \\mathbb{N} \\quad \\) where  \\( \\quad g_{C}(x)= \\begin{cases}\\min (x) &amp; \\text { if } x \\neq \\emptyset \\\\ 0 &amp; \\text { otherwise }\\end{cases} \\) <br>&nbsp;`,
        `None of the above, because no such function can exist.`,
      ],
      answer: "D",
      solution: `<img src="/images/quiz/wqt-toc7/5.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>Let  \\( \\mathbb{N} \\) denote the set of all natural numbers  \\( \\{1,2,3, \\ldots\\} \\). Which of the following statements is/are true? (Select all that apply) </p> <p></p>`,
      image: "",
      options: [
        `If  \\( A_{1}, A_{2}, \\ldots, A_{n} \\) is a finite collection of countable sets, then their Cartesian product  \\( A_{1} \\times A_{2} \\times \\cdots \\times A_{n} \\) is also countable.<br>&nbsp;`,
        `If there exists an injective function  \\( f: A \\rightarrow \\mathbb{N} \\), then the set \\( A \\) must be countable.<br>&nbsp;`,
        `If there exists a surjective function  \\( f: \\mathbb{N} \\rightarrow A \\), then the set \\( A \\) must be countable.<br>&nbsp;`,
        `If  \\( A_{n} \\) is a countable set for every  \\( n \\in \\mathbb{N} \\), then their countable union  \\( A=\\bigcup_{n=1}^{\\infty} A_{n} \\) is also countable.`,
      ],
      answer: ["A", "B", "C", "D"],
      solution: `<img src="/images/quiz/wqt-toc7/6.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>Let  \\( A \\) and  \\( B \\) be two non-empty sets, and let  \\( |A| \\) and  \\( |B| \\) denote their respective cardinalities. We wish to prove that the two sets have same cardinality, i.e.,  \\( |A|=|B| \\). Which of the following conditions, considered independently, is/are sufficient to establish the claim? (Select all that apply) </p> <p></p>`,
      image: "",
      options: [
        `Proving that there exists a bijective function  \\( f: A \\rightarrow B \\).<br>&nbsp;`,
        `Proving that there exists a bijective function  \\( f: B \\rightarrow A \\).<br>&nbsp;`,
        `Proving that there exist two injective (one-to-one) functions  \\( f_{1} \\) :  \\( A \\rightarrow B \\) and  \\( f_{2}: B \\rightarrow A \\).<br>&nbsp;`,
        `Proving that there exist two surjective (onto) functions  \\( f_{1}: A \\rightarrow B \\) and  \\( f_{2}: B \\rightarrow A \\).`,
      ],
      answer: ["A", "B", "C", "D"],
      solution: `<img src="/images/quiz/wqt-toc7/7.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>Cantor's diagonalization argument constructs, for any given function  \\( f: \\mathbb{N} \\rightarrow \\mathcal{P}(\\mathbb{N}) \\), a associated diagonal set  \\( D_{f} \\subseteq \\mathbb{N} \\) defined explicitly as:<br> \$\$  D_{f}=\\{x \\in \\mathbb{N} \\mid x \\notin f(x)\\}  \$\$<br>Let  \\( \\mathbb{N}=\\{0,1,2,3, \\ldots\\} \\) denote the set of natural numbers. Consider the following two functions from  \\( \\mathbb{N} \\) to its power set  \\( \\mathcal{P}(\\mathbb{N}) \\) :<br><br> \\( f_{1}(x)=\\{y \\in \\mathbb{N} \\mid y \\) has the same parity as  \\( x\\} \\quad \\) (i.e., both are even or both are odd)<br><br> \\( f_{2}(x)=\\{y \\in \\mathbb{N} \\mid y&gt;x\\} \\) <br><br>Which of the following statements regarding their diagonal sets  \\( D_{f_{1}} \\) and  \\( D_{f_{2}} \\) is/are true? (Select all that apply) </p> <p></p>`,
      image: "",
      options: [
        `The diagonal set  \\( D_{f_{1}} \\) is empty (i.e.,  \\( D_{f_{1}}=\\emptyset \\) ).<br>&nbsp;`,
        `\\( 1 \\in D_{f_{2}} \\).<br>&nbsp;`,
        `The diagonal set  \\( D_{f_{2}} \\) is countably infinite.<br>&nbsp;`,
        `The diagonal set  \\( D_{f_{2}} \\) contains all natural numbers except 0 .`,
      ],
      answer: ["A", "B", "C"],
      solution: `<img src="/images/quiz/wqt-toc7/8.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>Let  \\( \\mathbb{N}=\\{0,1,2,3, \\ldots\\} \\) denote the set of natural numbers, and let  \\( \\mathcal{P}(\\mathbb{N}) \\) denote its power set. Which of the following functions successfully serves as a valid witness to establish the cardinality relationship  \\( |\\mathbb{N}| \\leq|\\mathcal{P}(\\mathbb{N})| \\) ? (Select all that apply) </p> <p></p>`,
      image: "",
      options: [
        `\\( f_{A}: \\mathbb{N} \\rightarrow \\mathcal{P}(\\mathbb{N}) \\quad \\) where  \\( \\quad f_{A}(x)=x^{2} \\)<br>&nbsp;`,
        `\\( f_{B}: \\mathbb{N} \\rightarrow \\mathcal{P}(\\mathbb{N}) \\) where \\( f_{B}(x)=\\left\\{x^{2}\\right\\} \\)<br>&nbsp;`,
        `\\( f_{C}: \\mathbb{N} \\rightarrow \\mathcal{P}(\\mathbb{N}) \\quad \\) where  \\( \\quad f_{C}(x)=\\left\\{y \\in \\mathbb{N} \\mid y \\neq x^{2}\\right\\} \\) <br>&nbsp;`,
        `\\( f_{D}: \\mathbb{N} \\rightarrow \\mathcal{P}(\\mathbb{N}) \\) where \\( f_{D}(x)=\\{x, x+1\\} \\)`,
      ],
      answer: ["B", "C", "D"],
      solution: `<img src="/images/quiz/wqt-toc7/9.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>Let  \\( \\mathbb{Z}^{+} \\)denote the set of positive integers, and let  \\( \\aleph_{0} \\) represent its cardinality (countably infinite). For any arbitrary non-empty sets  \\( A, B \\), and  \\( C \\), let  \\( |A| \\) denote the cardinality of set  \\( A \\), and let  \\( A-B \\) denote the set difference.<br><br>Which of the following is/are true? </p> <p></p>`,
      image: "",
      options: [
        `If  \\( A \\) is an infinite set, then there exists a subset  \\( S \\subseteq A \\) such that  \\( |S|=\\aleph_{0} \\).<br>&nbsp;`,
        `There is no infinite set  \\( A \\) such that  \\( |A|&lt;\\aleph_{0} \\).<br>&nbsp;`,
        `The set cardinality relation  \\( \\leq \\) satisfies transitivity: if  \\( |A| \\leq|B| \\) and  \\( |B| \\leq |C| \\), then  \\( |A| \\leq|C| \\).<br>&nbsp;`,
        `If  \\( A \\) is an uncountably infinite set and  \\( B \\) is a countable set, then the set difference  \\( A-B \\) must be uncountably infinite.`,
      ],
      answer: ["A", "B", "C", "D"],
      solution: `<img src="/images/quiz/wqt-toc7/10.png" style="max-width: 75%;">`
    },
  ]
});


registerTest({
  series: "weekly-cs-gate-2027",
  name: "WQT - Theory of Computation-8 | Identify Class Language",
  date: "Oct 01, 2026",
  questions: [
    {
      marks: 1,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>Which of the following is/are false?</p> <p></p>`,
      image: "",
      options: [
        `If  \\( L \\) satisfies the pumping lemma, then  \\( L \\) may or may not be regular.<br>&nbsp;`,
        `If  \\( L \\) does not satisfy the pumping lemma, then \\( L \\) is non-regular.<br>&nbsp;`,
        `If  \\( L \\) is non-regular, then it does not satisfy the pumping lemma.<br>&nbsp;`,
        `If  \\( L \\) is regular, then it satisfies the pumping lemma.`,
      ],
      answer: ["C"],
      solution: `<img src="/images/quiz/wqt-toc8/1.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0,
      type: "NAT",
      text: `<p>Let  \\( A \\) be the minimum pumping length of the string \\( 0^{*} 1^{*} \\) and  \\( B \\) be the minimum pumping length of the string \\( 00^{*} \\). What is the value of  \\( A+B \\)? </p>`,
      image: "",
      options: [],
      answer: "3",
      solution: `<img src="/images/quiz/wqt-toc8/2.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0,
      type: "NAT",
      text: `<p>Your GO Classes friend is trying to prove that the language  \\( ww^{R} \\), the language of palindromes, is not regular. For pumping length  \\( p \\) he chooses the string  \\( S=01^{p} 1^{p} 0 \\), which is a palindrome. Can he use the pumping lemma for regular languages to prove that this language is not regular? Answer  \\( 1 \\) if yes, else  \\( 0 \\). </p>`,
      image: "",
      options: [],
      answer: "0",
      solution: `<img src="/images/quiz/wqt-toc8/3.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0,
      type: "NAT",
      text: `<p></p> <p>Which of the following is/are true?</p> <ol style="list-style-type:upper-alpha"> <li>A regular language accepted by an  \\( NFA \\) with  \\( n \\) states has pumping length  \\( n \\)<br>&nbsp; </li> <li>If  \\( L \\) is a finite language and the length of the longest string in  \\( L \\) is  \\( m \\), then the minimum pumping length of  \\( L \\) is  \\( \\mathrm{m}+1 \\)<br>&nbsp; </li> <li>If the length of the shortest string in a regular language  \\( L \\) is  \\( k \\), then the minimum pumping length of  \\( L \\) must be greater than  \\( k \\).<br>&nbsp; </li> <li>If  \\( p \\) is a pumping length for a regular language  \\( L \\), then  \\( p+1 \\) is also a pumping length for  \\( L \\). </li> </ol> <p></p>`,
      image: "",
      options: [],
      answer: "null",
      solution: `<img src="/images/quiz/wqt-toc8/4.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>Which of the following is false?</p> <p></p>`,
      image: "",
      options: [
        `If a regular language  \\( L \\) has minimum pumping length  \\( p \\), then any  \\( DFA \\) accepting  \\( L \\) must have at least  \\( p \\) states.<br>&nbsp;`,
        `The minimum pumping length for regular language  \\( \\{0011\\} \\) is  \\( 5 \\).<br>&nbsp;`,
        `On an input string of length  \\( k \\), every  \\( DFA \\) goes through a unique sequence of  \\( \\mathrm{k}+1 \\) states during its computation.<br>&nbsp;`,
        `The minimum pumping length for regular expression  \\( 001+0^{*} 1^{*} \\) is  \\( 2 \\).`,
      ],
      answer: "D",
      solution: `<img src="/images/quiz/wqt-toc8/5.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p>Let  \\( L=\\left\\{0^{n} 1^{m} 0^{n} \\mid m, n \\geq 0\\right\\} \\) be a language over the alphabet  \\( \\Sigma=\\{0,1\\} \\). To prove that  \\( L \\) is not regular using the Pumping Lemma by contradiction, we assume  \\( L \\) is regular and let  \\( p \\) be the pumping length.<br><br>Which of the following choices of string can be used to complete the proof by contradiction? </p> <p></p>`,
      image: "",
      options: [
        `\\( 00000100000 \\)<br>&nbsp;`,
        `\\( 0^{p} 10^{p} \\)<br>&nbsp;`,
        `\\( (010)^{p} \\)<br>&nbsp;`,
        `\\( 0^{p+1} 1^{p} 0^{p} \\)`,
      ],
      answer: "B",
      solution: `<img src="/images/quiz/wqt-toc8/6.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p> \\( \\textbf{Theorem:} \\)  \\( L=\\left\\{0^{n} 1^{n} \\mid n \\geq 0\\right\\} \\) is not regular.<br><br> \\( \\textbf{Proof:} \\) Assume (towards contradiction) that  \\( L \\) is regular. Then the pumping lemma applies to \\( L \\). Let  \\( p \\) be the pumping length. Choose  \\( s \\) to be the string ____,  \\( |s| \\geq p \\). The pumping lemma guarantees  \\( s \\) can be divided into parts  \\( x y z \\) s.t. for any  \\( i \\geq 0, x y^{i} z \\) is in  \\( L \\), and that  \\( |y|&gt;0 \\) and  \\( |x y| \\leq p \\). But if we let  \\( i= \\) ____, we get the string which is not in \\( L \\), a contradiction. Therefore the assumption is false, and  \\( L \\) is not regular.  \\( Q.E.D \\).<br><br>Which values of  \\( s \\) and  \\( i \\) should not be chosen in the proof?<br>&nbsp; </p> <p></p>`,
      image: "",
      options: [
        `\\( s=0^{p} 1^{p}, i=1 \\)<br>&nbsp;`,
        `\\( s=010101, i=0 \\)<br>&nbsp;`,
        `\\( s=000000111111, i=6 \\)<br>&nbsp;`,
        `\\( s=1^{p} 0^{p}, i=5 \\)`,
      ],
      answer: ["A", "B", "C", "D"],
      solution: `<img src="/images/quiz/wqt-toc8/7.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p> \\( \\textbf{Theorem:} \\)  \\( L=\\left\\{w w^{R} \\mid w^{R}\\right. \\) is the reverse of  \\( w \\) and  \\( \\left.w \\in\\{0,1\\}^{*}\\right\\} \\) is not regular.<br><br> \\( \\textbf{Proof:} \\)&nbsp;Assume (towards contradiction) that  \\( L \\) is regular. Then the pumping lemma applies to \\( L \\). Let  \\( p \\) be the pumping length. Choose  \\( s \\) to be the string ____,  \\( |s| \\geq p \\). The pumping lemma guarantees  \\( s \\) can be divided into parts  \\( x y z \\) s.t. for any  \\( i \\geq 0, x y^{i} z \\) is in  \\( L \\), and that  \\( |y|&gt;0 \\) and  \\( |x y| \\leq p \\). But if we let  \\( i= \\) ____, we get the string which is not in \\( L \\), a contradiction. Therefore the assumption is false, and  \\( L \\) is not regular.  \\( Q.E.D. \\)<br><br>Which of the following choices of \\( s \\) and  \\( i \\) makes the proof correct? </p> <p></p>`,
      image: "",
      options: [
        `\\( s=000000111111, i=6 \\)<br>&nbsp;`,
        `\\( s=0^{p} 0^{p}, i=2 \\)<br>&nbsp;`,
        `\\( s=0^{p} 110^{p}, i=2 \\)<br>&nbsp;`,
        `\\( s=0^{p} 10^{p}, i=3 \\)`,
      ],
      answer: ["C"],
      solution: `<img src="/images/quiz/wqt-toc8/8.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>Consider the following two statements:<br><br> \\( \\mathbf{S_1:} \\) If a regular language  \\( L \\) has at least one string whose length lies between  \\( n \\) and  \\( 2 n-1 \\) (inclusive) where  \\( n \\) is the number of states in a  \\( \\text{DFA} \\)  \\( D \\) (where  \\( L(D)=L \\) ), then  \\( L \\) is infinite.<br><br> \\( \\mathbf{S_2:} \\) The set of strings accepted by a \\( \\text{DFA} \\) with n states is non-empty iff the DFA accepts a string of length strictly less than  \\( n \\).<br><br>Which of the following is correct? </p> <p></p>`,
      image: "",
      options: [
        `\\( S_1 \\) is false and  \\( S_2 \\) is false<br>&nbsp;`,
        `\\( S_1 \\) is true and  \\( S_2 \\) is false<br>&nbsp;`,
        `\\( S_1 \\) is false and  \\( S_2 \\) is true<br>&nbsp;`,
        `\\( S_1 \\) is true and  \\( S_2 \\) is true`,
      ],
      answer: ["D"],
      solution: `<img src="/images/quiz/wqt-toc8/9.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>We need to prove that the language  \\( L=\\{w \\mid w \\) has equal number of  \\( 0 \\)'s and  \\( 1 \\)'s  \\( \\} \\) is not regular.<br><br>We are using the Pumping Lemma to prove  \\( L \\) is non-regular. Suppose length  \\( p \\) was given. Which of the following  \\( w \\) 's can we choose for our proof?<br>&nbsp; </p> <p></p>`,
      image: "",
      options: [
        `\\( 0^{\\lfloor p/2 \\rfloor}1^{\\lfloor p/2 \\rfloor} \\)<br>&nbsp;`,
        `\\( (01)^p \\)<br>&nbsp;`,
        `\\( (00)^p(11)^p \\)<br>&nbsp;`,
        `\\( 0^{p-1}1^{p-1} \\)`,
      ],
      answer: ["C"],
      solution: `<img src="/images/quiz/wqt-toc8/10.png" style="max-width: 75%;">`
    },
  ]
});

registerTest({
  series: "weekly-cs-gate-2027",
  name: "WQT - Theory of Computation-9 | Closure Properties",
  date: "Oct 01, 2026",
  questions: [
    {
      marks: 1,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>Let  \\( \\Sigma \\) be a finite alphabet, and let  \\( w^{R} \\) denote the reversal of a string  \\( w \\). Suppose a language  \\( L \\subseteq \\Sigma^{*} \\) is given, and we define the operation:<br> \$\$  L^{R}=\\left\\{w^{R} \\mid w \\in L\\right\\}  \$\$<br>If it is known that \\( L^{R} \\) always belongs to the exact same language class as  \\( L \\) for any choice of  \\( L \\) within that class, which of the following language families could  \\( L \\) belong to?<br>(Select all the correct options.) </p> <p></p>`,
      image: "",
      options: [
        `The class of Regular Languages<br>&nbsp;`,
        `The class of Deterministic Context-Free Languages (DCFLs)<br>&nbsp;`,
        `The class of Context-Free Languages (CFLs)<br>&nbsp;`,
        `The class of Recursive Languages`,
      ],
      answer: ["A", "C", "D"],
      solution: `<img src="/images/quiz/wqt-toc9/1.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>Imagine two context-free languages,  \\( L_{1} \\) and  \\( L_{2} \\), as two different valid programming syntaxes. A software engineer wants to create a new language,  \\( L_{\\text {new }} \\), that only accepts code that is valid in both syntaxes simultaneously.<br>Which of the following statements is TRUE regarding  \\( L_{\\text {new }} \\) ? </p> <p></p>`,
      image: "",
      options: [
        `\\( L_{\\text {new }} \\) is guaranteed to be a context-free language.<br>&nbsp;`,
        `\\( L_{\\text {new }} \\) is guaranteed to be a regular language.<br>&nbsp;`,
        `\\( L_{\\text {new }} \\) may or may not be a context-free language.<br>&nbsp;`,
        `\\( L_{\\text {new }} \\) is guaranteed to be a context-sensitive language but never context-free.`,
      ],
      answer: "C",
      solution: `<img src="/images/quiz/wqt-toc9/2.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>Let  \\( \\Sigma=\\{a, b\\} \\) be an alphabet. Consider two formal languages over  \\( \\Sigma \\), where  \\( L_{1} \\) is known to be a regular language and \\( L_{2} \\) is known to be a nonregular language. Let \\( L_{\\text {new }} \\) be a new language constructed by performing an operation on  \\( L_{1} \\) and  \\( L_{2} \\).<br>Which of the following operations guarantees that  \\( L_{\\text {new }} \\) will always be a nonregular language, regardless of the specific choices of  \\( L_{1} \\) and  \\( L_{2} \\)? </p> <p></p>`,
      image: "",
      options: [
        `\\( L_{\\text {new }}=L_{1} \\cup L_{2} \\)<br>&nbsp;`,
        `\\( L_{\\text {new }}=L_{1} \\cap L_{2} \\)<br>&nbsp;`,
        `\\( L_{\\text {new }}=L_{1}-L_{2} \\)<br>&nbsp;`,
        `\\( L_{\\text {new }}=\\overline{L_{2}} \\)`,
      ],
      answer: "D",
      solution: `<img src="/images/quiz/wqt-toc9/3.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>Let  \\( L_{1} \\) and  \\( L_{2} \\) be two regular languages over the same alphabet  \\( \\Sigma \\). Suppose  \\( M_{1}=\\left(S_{1}, \\Sigma, \\delta_{1}, s_{1}, F_{1}\\right) \\) and \\( M_{2}=\\left(S_{2}, \\Sigma, \\delta_{2}, s_{2}, F_{2}\\right) \\) are Deterministic Finite Automata (DFAs) such that  \\( L\\left(M_{1}\\right)=L_{1} \\) and  \\( L\\left(M_{2}\\right)=L_{2} \\).<br>To prove that the class of regular languages is closed under union, we construct a product DFA  \\( M=\\left(S_{1} \\times S_{2}, \\Sigma, \\delta,\\left(s_{1}, s_{2}\\right), F\\right) \\) that accepts the language  \\( L_{1} \\cup L_{2} \\).<br>Which of the following correctly defines the set of accept states  \\( F \\) for the product DFA  \\( M \\)? </p> <p></p>`,
      image: "",
      options: [
        `\\( F=F_{1} \\times F_{2} \\)<br>&nbsp;`,
        `\\( F=\\left(F_{1} \\times S_{2}\\right) \\cup\\left(S_{1} \\times F_{2}\\right) \\) <br>&nbsp;`,
        `\\( F=\\left(F_{1} \\times\\left(S_{2} \\backslash F_{2}\\right)\\right) \\cup\\left(\\left(S_{1} \\backslash F_{1}\\right) \\times F_{2}\\right) \\) <br>&nbsp;`,
        `\\( F=\\left(S_{1} \\times S_{2}\\right) \\backslash\\left(F_{1} \\times F_{2}\\right) \\)`,
      ],
      answer: "B",
      solution: `<img src="/images/quiz/wqt-toc9/4.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>Let  \\( L \\) be a regular language. We define a new language  \\( L_{\\text {sym }} \\) that contains all strings in \\( L \\) whose reversals are also in  \\( L \\) :<br> \$\$  L_{\\mathrm{sym}}=\\left\\{w \\in L \\mid w^{R} \\in L\\right\\}  \$\$<br>Is the language  \\( L_{\\text {sym }} \\) guaranteed to be regular ? </p> <p></p>`,
      image: "",
      options: [
        `No, because checking if a string matches its reversal requires a stack.<br>&nbsp;`,
        `Yes, because  \\( L_{\\text {sym }} \\) can be written as  \\( L \\cup L^{R} \\). Since regular languages are closed under reversal and union,  \\( L_{\\text {sym }} \\) is regular.<br>&nbsp;`,
        `No, because regular languages are not closed under the reversal operation unless the language is finite.<br>&nbsp;`,
        `Yes, because  \\( L_{\\text {sym }} \\) can be written as  \\( L \\cap L^{R} \\). Since regular languages are closed under reversal and intersection,  \\( L_{\\text {sym }} \\) is regular.`,
      ],
      answer: "D",
      solution: `<img src="/images/quiz/wqt-toc9/5.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>For any language  \\( L \\), we define the operation  \\( L_{1 / 2} \\) to be the language containing the first halves of all strings in  \\( L \\) that have an even length. Formally:<br> \$\$  L_{1 / 2}=\\{x \\mid x y \\in L \\text { for some } y \\text { with }|x|=|y|\\}  \$\$ <br>If  \\( L \\) is a Decidable language, then which of the following is true? </p> <p></p>`,
      image: "",
      options: [
        `\\( L_{1 / 2} \\) must be Decidable.<br>&nbsp;`,
        `\\( L_{1 / 2} \\) is guaranteed to be Recursively Enumerable, but it is not necessarily Decidable.<br>&nbsp;`,
        `Length of every string in  \\( L_{1 / 2} \\) is even.<br>&nbsp;`,
        `\\( L_{1 / 2} \\) may or may not&nbsp;be Recursively Enumerable.`,
      ],
      answer: ["A"],
      solution: `<img src="/images/quiz/wqt-toc9/6.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>Let  \\( \\Sigma \\) be a finite alphabet. Let  \\( L_{1}, L_{2} \\subseteq \\Sigma^{*} \\) be two languages such that  \\( L_{1} \\) is a regular language and  \\( L_{2} \\) is not a regular language. In addition, we are given the following conditions: </p> <ul> <li> \\( L_{2} \\nsubseteq L_{1} \\)<br>&nbsp; </li> <li> \\( L_{1} \\nsubseteq L_{2} \\)<br>&nbsp; </li> <li> \\( L_{1} \\cap L_{2} \\) is an infinite set. </li> </ul> <p>Which of the following statements is/are FALSE?</p> <p></p>`,
      image: "",
      options: [
        `\\( L_{1} \\cap L_{2} \\) can be a regular language.<br>&nbsp;`,
        `\\( L_{1} \\cap L_{2} \\) can be a non-regular language.<br>&nbsp;`,
        `\\( L_{1} \\cap L_{2} \\) must be a non-regular language.<br>&nbsp;`,
        `\\( L_{1} \\cap L_{2} \\) must be a regular language.`,
      ],
      answer: ["C", "D"],
      solution: `<img src="/images/quiz/wqt-toc9/7.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p>Let  \\( A \\) be a finite automaton that accepts a regular language  \\( L \\). We want to build a new automaton  \\( \\overline{A} \\) that accepts the reversed language \\( L^{R} \\) (the language containing all strings of \\( L \\) written backward).<br>To do this, we reverse the direction of all arrows in the transition diagram of  \\( A \\). What must we do with the start and accepting states to complete the construction of  \\( \\overline{A} \\)? </p> <p></p>`,
      image: "",
      options: [
        `In  \\( \\overline{A} \\), create a new start state with \\( \\varepsilon \\)-transitions to all accepting states of  \\( A \\), and keep the accepting states of  \\( A \\) as accepting while also making the start state of  \\( A \\) an accepting state of  \\( \\overline{A} \\).<br>&nbsp;`,
        `Keep the start state of  \\( A \\) as the start state of  \\( \\overline{A} \\), and make all accepting states of  \\( A \\) the new accepting states of  \\( \\overline{A} \\).<br>&nbsp;`,
        `Create a single new start state that connects to all of  \\( \\text{A's} \\)&nbsp;accepting states using \\( \\varepsilon \\)-transitions, and make the original start state of  \\( A \\) the only accepting state of  \\( \\overline{A} \\).<br>&nbsp;`,
        `Make the start state of  \\( A \\) the only accepting state of  \\( \\overline{A} \\), and turn all accepting states of  \\( A \\) into multiple start states of  \\( \\overline{A} \\).`,
      ],
      answer: "C",
      solution: `<img src="/images/quiz/wqt-toc9/8.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "NAT",
      text: `<p>For any two languages  \\( A \\) and  \\( B \\), we define the operation  \\( \\operatorname{CHOP}(A, B) \\) as the language containing all strings  \\( w \\) that can be formed by chopping off a suffix \\( x \\in B \\) from a string  \\( w x \\in A \\) : \$\$  \\operatorname{CHOP}(A, B)=\\{w \\mid \\exists x \\in B \\text { such that } w x \\in A\\} \$\$ Let  \\( X, Y \\), and  \\( Z \\) be three languages defined over the alphabet \\( \\Sigma=\\{\\mathrm{a}, \\mathrm{b}\\} \\) as follows: \$\$  \\begin{aligned} X &amp; =\\{\\mathrm{aab}, \\mathrm{aba}, \\mathrm{bba}, \\mathrm{bbb}\\} \\\\ Y &amp; =\\{\\mathrm{ba}, \\mathrm{bbb}\\} \\\\ Z &amp; =\\left\\{\\mathrm{a}^{n} \\mathrm{~b}^{n} \\mid n \\geq 0\\right\\} \\end{aligned} \$\$ Let  \\( N_{1} \\) be the cardinality of  \\( \\operatorname{CHOP}(X, Y) \\), and let  \\( N_{2} \\) be the cardinality of  \\( \\operatorname{CHOP}(X, Z) \\). What is value of \\( N_{1}+N_{2} \\) ? </p>`,
      image: "",
      options: [],
      answer: "8",
      solution: `<img src="/images/quiz/wqt-toc9/9.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p>For any language  \\( A \\), we define the prefix language  \\( \\operatorname{PREFIX}(A) \\) as the set of all strings  \\( w \\) that form a string in  \\( A \\) when some suffix string  \\( x \\) is appended to them:<br> \$\$  \\operatorname{PREFIX}(A)=\\left\\{w \\mid \\exists x \\in \\Sigma^{*} \\text { such that } w x \\in A\\right\\}  \$\$ <br>Let  \\( M=\\left(Q, \\Sigma, \\delta, q_{0}, F\\right) \\) be a DFA that recognizes the regular language  \\( A \\). We want to construct a new finite automaton \\( M^{\\prime}=\\left(Q, \\Sigma, \\delta, q_{0}, F^{\\prime}\\right) \\) that precisely recognizes  \\( \\operatorname{PREFIX}(A) \\).<br>To achieve this without changing the states, alphabet, transition function, or start state of  \\( M \\), how should the new set of accepting states \\( F^{\\prime} \\) be defined? </p> <p></p>`,
      image: "",
      options: [
        `\\( F^{\\prime}=\\{q \\in Q \\mid q \\notin F\\} \\) <br>&nbsp;`,
        `\\( F^{\\prime}=\\left\\{q \\in Q \\mid\\right. \\) there is a path from  \\( q_{0} \\) to  \\( \\left.q\\right\\} \\)<br>&nbsp;`,
        `\\( F^{\\prime}=\\{q \\in Q \\mid \\) there is a path from  \\( q \\) to some state in  \\( F\\} \\)<br>&nbsp;`,
        `\\( F^{\\prime}=\\{q \\in F \\mid \\delta(q, \\sigma) \\in F \\) for all \\( \\sigma \\in \\Sigma\\} \\)`,
      ],
      answer: "C",
      solution: `<img src="/images/quiz/wqt-toc9/10.png" style="max-width: 75%;">`
    },
  ]
});


registerTest({
  series: "weekly-cs-gate-2027",
  name: "WQT - Theory of Computation-10 | Context Free Grammar",
  date: "Oct 01, 2026",
  questions: [
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>Consider the Context-Free Grammar (CFG)  \\( G=(V, \\Sigma, P, S) \\), where  \\( S \\) is the start symbol,  \\( \\Sigma=\\{a, b\\} \\) is the set of terminal symbols, \\( V=\\{S, B\\} \\) is the set of non-terminals, and the set of production rules  \\( P \\) is defined by:<br> \$\$  \\begin{aligned} &amp; S \\longrightarrow S B \\mid a a \\\\ &amp; B \\longrightarrow b S B b \\mid a b \\end{aligned}  \$\$ <br>Let  \\( |w|_{a} \\) denote the number of occurrences of the terminal symbol  \\( a \\) in a string  \\( w \\), and let  \\( |w|_{b} \\) denote the number of occurrences of the terminal symbol  \\( b \\) in  \\( w \\).<br>Which of the following equations correctly describes the relationship between the number of  \\( a \\) 's and  \\( b \\) 's for all terminal strings  \\( w \\in L(G) \\) ? </p> <p></p>`,
      image: "",
      options: [
        `\\( |w|_{a}=|w|_{b}+2 \\)<br>&nbsp;`,
        `\\( |w|_{a}=2|w|_{b} \\)<br>&nbsp;`,
        `\\( |w|_{a}=|w|_{b} \\)<br>&nbsp;`,
        `\\( |w|_{a}=\\left(|w|_{b}+1\\right) \\cdot 2 \\)`,
      ],
      answer: "A",
      solution: `<img src="/images/quiz/wqt-toc10/1.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>Consider the regular grammar below<br> \$\$  \\begin{aligned} S &amp;\\to bS\\ |\\ aA\\ |\\ \\epsilon \\\\ A &amp;\\to aS\\ |\\ bA \\end{aligned}  \$\$ <br>The Myhill-Nerode equivalence classes for the language generated by the grammar are </p> <p></p>`,
      image: "",
      options: [
        `\\( \\{w\\in(a+b)^*\\ |\\ \\#a(w)\\ \\text{is even}\\} \\) and  \\( \\{w\\in(a+b)^*\\ |\\ \\#a(w)\\ \\text{is odd}\\} \\) <br>&nbsp;`,
        `\\( \\{w\\in(a+b)^*\\ |\\ \\#a(w)\\ \\text{is even}\\} \\) and  \\( \\{w\\in(a+b)^*\\ |\\ \\#b(w)\\ \\text{is odd}\\} \\) <br>&nbsp;`,
        `\\( \\{w\\in(a+b)^*\\ |\\ \\#a(w)=\\#b(w)\\} \\) and  \\( \\{w\\in(a+b)^*\\ |\\ \\#a(w)\\neq\\#b(w)\\} \\) <br>&nbsp;`,
        `\\( \\{\\epsilon\\},\\ \\{wa\\ |\\ w\\in(a+b)^*\\} \\) and \\( \\{wb\\ |\\ w\\in(a+b)^*\\} \\)`,
      ],
      answer: "A",
      solution: `<img src="/images/quiz/wqt-toc10/2.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>Let  \\( G \\) be a Context-Free Grammar (CFG) and let  \\( L(G) \\) be its language. Which of the following conditions, if true for a string  \\( w \\in L(G) \\), prove that  \\( G \\) is an ambiguous grammar? </p> <p></p>`,
      image: "",
      options: [
        `The string  \\( w \\) has two different parse trees.<br>&nbsp;`,
        `The string  \\( w \\) has two different left-most derivations.<br>&nbsp;`,
        `The string  \\( w \\) has two different right-most derivations.<br>&nbsp;`,
        `The string  \\( w \\) has two different derivations.`,
      ],
      answer: ["A", "B", "C"],
      solution: `<img src="/images/quiz/wqt-toc10/3.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>Consider the Context-Free Grammar (CFG)  \\( G \\) defined by the production rules:<br> \$\$  S \\longrightarrow a S \\mid a S b S \\mid \\epsilon  \$\$<br>To demonstrate that  \\( G \\) is ambiguous, a student analyzes the string \\( w=a a b \\). Which of the following statement is correct ? </p> <p></p>`,
      image: "",
      options: [
        `The string  \\( w \\) has exactly two distinct parse trees, which directly implies it has exactly two distinct leftmost derivations and exactly two distinct rightmost derivations.<br>&nbsp;`,
        `The string  \\( w \\) has exactly two distinct parse trees, but it has only one unique leftmost derivation.<br>&nbsp;`,
        `The string  \\( w \\) has multiple distinct derivations, which implies that  \\( G \\) is ambiguous.<br>&nbsp;`,
        `The string  \\( w \\) cannot be generated by this grammar.`,
      ],
      answer: "A",
      solution: `<img src="/images/quiz/wqt-toc10/4.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>Consider the following two statements, where  \\( V \\) represents the set of non-terminals,  \\( T \\) represents the set of terminals, and  \\( \\lambda \\) denotes the empty string:<br><br> \\( \\textbf{Statement I:} \\) For every regular language  \\( L \\) not containing  \\( \\lambda \\), there exists a grammar  \\( G \\) with  \\( L = L(G) \\) whose productions are strictly restricted to the forms:<br> \$\$  A \\longrightarrow a B \\quad \\text { or } \\quad A \\longrightarrow a  \$\$ <br>where  \\( A, B \\in V \\) and  \\( a \\in T \\).<br><br> \\( \\textbf{Statement II:} \\) Any regular grammar \\( G \\) for which the generated language is non-empty (  \\( L(G) \\neq \\emptyset \\) ) must have at least one production of the form:<br> \$\$  A \\longrightarrow x  \$\$<br>where \\( A \\in V \\) and  \\( x \\in T^{*} \\).<br>Which of the following option is true? </p> <p></p>`,
      image: "",
      options: [
        `Both Statement  \\( \\textbf{I} \\) and Statement  \\( \\textbf{II} \\) are correct.<br>&nbsp;`,
        `Statement  \\( \\textbf{I} \\) is correct but Statement  \\( \\textbf{II} \\) is incorrect.<br>&nbsp;`,
        `Statement  \\( \\textbf{I} \\) is incorrect but Statement  \\( \\textbf{II} \\) is correct.<br>&nbsp;`,
        `Both Statement  \\( \\textbf{I} \\)&nbsp;and Statement  \\( \\textbf{II} \\)&nbsp;are incorrect.`,
      ],
      answer: "A",
      solution: `<img src="/images/quiz/wqt-toc10/5.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>Consider the Context-Free Grammar  \\( G: \\)<br> \$\$  \\begin{aligned} &amp; S \\longrightarrow A S A \\mid a B \\\\ &amp; A \\longrightarrow B \\mid S \\\\ &amp; B \\longrightarrow b \\mid \\epsilon \\end{aligned}  \$\$ <br>Which of the following strings is/are generated by this grammar ? </p> <p></p>`,
      image: "",
      options: [
        `\\( b b a \\)<br>&nbsp;`,
        `\\( a b \\)<br>&nbsp;`,
        `\\( b a \\)<br>&nbsp;`,
        `\\( b b \\)`,
      ],
      answer: ["A", "B", "C"],
      solution: `<img src="/images/quiz/wqt-toc10/6.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p>Consider the Grammar  \\( G: \\)<br> \$\$  \\begin{aligned} &amp; S \\longrightarrow \\epsilon \\mid a T&nbsp;\\mid b T \\\\ &amp; T \\longrightarrow a S \\mid b S \\end{aligned}  \$\$ <br>Which of the following statements is/are incorrect ? </p> <p></p>`,
      image: "",
      options: [
        `Every terminal string  \\( w \\in L(G) \\) has an even length.<br>&nbsp;`,
        `The string  \\( a a b b \\) can be derived and is accepted by \\( G \\).<br>&nbsp;`,
        `The string  \\( b a b b \\) cannot be derived and is not accepted by  \\( G \\).<br>&nbsp;`,
        `There exists at least one string of even length&nbsp;that does not belong to  \\( L(G) \\).`,
      ],
      answer: "C",
      solution: `<img src="/images/quiz/wqt-toc10/7.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>The following grammar is ambiguous:  \$\$ \\begin{aligned}&amp;S\\to AB\\\\&amp;A\\to aA\\mid a\\\\&amp;B\\to aB\\mid a\\end{aligned} \$\$ Which of the following pairs of derivations correctly prove that the grammar is ambiguous? </p> <p></p>`,
      image: "",
      options: [
        `\\( S\\Rightarrow AB\\Rightarrow aAB\\Rightarrow aaB\\Rightarrow aaa \\) <br> \\( S\\Rightarrow AB\\Rightarrow Aa\\Rightarrow aAa\\Rightarrow aaa \\) <br>&nbsp;`,
        `\\( S\\Rightarrow AB\\Rightarrow aAB\\Rightarrow aaB\\Rightarrow aaa \\) <br>&nbsp; \\( S\\Rightarrow AB\\Rightarrow aB\\Rightarrow aaB\\Rightarrow aaa \\) <br>&nbsp;`,
        `\\( S\\Rightarrow AB\\Rightarrow Aa\\Rightarrow aAa\\Rightarrow aaa \\) <br> \\( S\\Rightarrow AB\\Rightarrow AaB\\Rightarrow Aaa\\Rightarrow aaa \\) <br>&nbsp;`,
        `\\( S\\Rightarrow AB\\Rightarrow aAB\\Rightarrow aaB\\Rightarrow aaa \\) <br> \\( S\\Rightarrow AB\\Rightarrow aB\\Rightarrow aa \\)`,
      ],
      answer: ["B", "C"],
      solution: `<img src="/images/quiz/wqt-toc10/8.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>Consider the Grammar  \\( G: \\)<br> \$\$  \\begin{aligned} &amp; S \\longrightarrow A 1 B \\\\ &amp; A \\longrightarrow 0 A \\mid \\epsilon \\\\ &amp; B \\longrightarrow 0 B \\mid 1 B&nbsp;\\mid \\epsilon \\end{aligned}  \$\$ <br>Which of the following statements is/are incorrect? </p> <p></p>`,
      image: "",
      options: [
        `The regular expression of the language  \\( L(G) \\) is  \\( 0^{*} 1(0+1)^{*} \\).<br>&nbsp;`,
        `The grammar  \\( G \\) is a regular grammar.<br>&nbsp;`,
        `The language  \\( L(G) \\) is a regular language.<br>&nbsp;`,
        `The grammar  \\( G \\) is unambiguous.`,
      ],
      answer: ["B"],
      solution: `<img src="/images/quiz/wqt-toc10/9.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>Consider the Context-Free Grammar  \\( G: \\)<br> \$\$  \\begin{aligned} &amp; S \\longrightarrow 1 S 1 \\mid T \\\\ &amp; T \\longrightarrow 1 X 1 \\mid X \\\\ &amp; X \\longrightarrow 0 X 0 \\mid 1 \\end{aligned}  \$\$ <br>Let  \\( |w| \\) denote the length of a string  \\( w \\). Which of the following statements is/are correct? </p> <p></p>`,
      image: "",
      options: [
        `The string  \\( 11111 \\) has more than one parse tree.<br>&nbsp;`,
        `Every string  \\( w \\in L(G) \\) has an odd length (i.e.,  \\( |w| \\ (\\bmod \\ 2) \\neq 0 \\) ).<br>&nbsp;`,
        `The string  \\( 111 \\) appears at the third position in the lexicographical enumeration of  \\( L(G) \\).<br>&nbsp;`,
        `The grammar  \\( G \\) is a non-regular grammar, but the language  \\( L(G) \\) is a regular language.`,
      ],
      answer: ["A", "B", "C"],
      solution: `<img src="/images/quiz/wqt-toc10/10.png" style="max-width: 75%;">`
    },
  ]
});


registerTest({
  series: "weekly-cs-gate-2027",
  name: "WQT - Theory of Computation-11 | Countability",
  date: "Oct 01, 2026",
  questions: [
    {
      marks: 1,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>Let  \\( A \\) be a non-empty countable set, and let  \\( f: B \\rightarrow A \\) be a function from an arbitrary set  \\( B \\) to  \\( A \\). For each element  \\( x \\in A \\), let the preimage of  \\( x \\) under  \\( f \\) be denoted as:<br> \$\$  f^{-1}(x)=\\{b \\in B \\mid f(b)=x\\}  \$\$<br>If  \\( f^{-1}(x) \\) is a countable set for every  \\( x \\in A \\), which of the following is the correct conclusion regarding the<br>cardinality of the domain set  \\( B \\)? </p> <p></p>`,
      image: "",
      options: [
        `\\( B \\) must be an uncountably infinite set.<br>&nbsp;`,
        `\\( B \\) must be a finite set.<br>&nbsp;`,
        `\\( B \\) is guaranteed to be a countable set.<br>&nbsp;`,
        `The cardinality of  \\( B \\) cannot be determined.`,
      ],
      answer: ["C"],
      solution: `<img src="/images/quiz/wqt-toc11/1.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>Consider the following two mathematical assertions regarding an arbitrary set  \\( Y \\), where  \\( |Y| \\) denotes the cardinality of  \\( Y, Y \\times Y \\) denotes its Cartesian product, and  \\( \\mathcal{P}(Y) \\) denotes its power set:<br><br> \\( \\textbf{Statement I:} \\) There exists a set  \\( Y \\) such that  \\( |Y| \\neq|Y \\times Y| \\).<br><br> \\( \\textbf{Statement II:} \\) There exists a set  \\( Y \\) such that  \\( |Y| \\neq|\\mathcal{P}(Y)| \\).<br><br>Which of the following option is correct? </p> <p></p>`,
      image: "",
      options: [
        `Both Statement  \\( \\mathbf{I} \\) and Statement  \\( \\mathbf{II} \\) are false.<br>&nbsp;`,
        `Statement  \\( \\mathbf{I} \\)&nbsp;is true, but Statement \\( \\mathbf{II} \\) is false.<br>&nbsp;`,
        `Statement  \\( \\mathbf{I} \\)&nbsp;is false, but Statement \\( \\mathbf{II} \\)&nbsp;is true.<br>&nbsp;`,
        `Both Statement  \\( \\mathbf{I} \\)&nbsp;and Statement  \\( \\mathbf{II} \\) are true.`,
      ],
      answer: "D",
      solution: `<img src="/images/quiz/wqt-toc11/2.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>Let  \\( A \\) and  \\( B \\) be two non-empty sets. Consider the following three assertions expressed in first-order logic symbols, where  \\( |A| \\) and  \\( |B| \\) denote the cardinalities of sets  \\( A \\) and  \\( B \\), respectively: </p> <p> \\( \\mathbf{I.} \\)  \\( \\exists f: A \\rightarrow B \\quad \\forall a_{1} \\in A \\quad \\forall a_{2} \\in A\\left(a_{1} \\neq a_{2} \\rightarrow f\\left(a_{1}\\right) \\neq f\\left(a_{2}\\right)\\right) \\) </p> <p> \\( \\mathbf{II.} \\)  \\( \\exists f: A \\rightarrow B \\quad \\forall b \\in B \\quad \\exists a \\in A(f(a)=b) \\) </p> <p> \\( \\mathbf{III.} \\)  \\( \\exists f: A \\rightarrow B \\quad \\forall b \\in B \\quad \\exists a \\in A\\left(f(a)=b \\wedge \\forall a^{\\prime} \\in A\\left(a \\neq a^{\\prime} \\rightarrow f\\left(a^{\\prime}\\right) \\neq b\\right)\\right) \\) </p> <p><br>Which of the following describes the set cardinality relationships implied by Statements  \\( \\mathbf{I} \\),  \\( \\mathbf{II} \\), and  \\( \\mathbf{III} \\) in order? </p> <p>&nbsp;</p> <p>&nbsp;</p> <p></p>`,
      image: "",
      options: [
        `\\( \\mathbf{I:} \\)&nbsp; \\( |A| \\geq|B|, \\quad \\)  \\( \\mathbf{II:} \\)  \\( |A| \\leq|B|, \\quad \\)  \\( \\mathbf{III:} \\)  \\( |A|=|B| \\)<br>&nbsp;`,
        `\\( \\mathbf{I:} \\)  \\( |A| \\leq|B|, \\quad \\)  \\( \\mathbf{II:} \\)  \\( |A| \\geq|B|, \\quad \\)  \\( \\mathbf{III:} \\)  \\( |A|=|B| \\)<br>&nbsp;`,
        `\\( \\mathbf{I:} \\)&nbsp;  \\( |A| \\leq|B|, \\quad \\)  \\( \\mathbf{II:} \\)  \\( |A| \\leq|B|, \\quad \\)  \\( \\mathbf{III:} \\)  \\( |A| \\neq|B| \\)<br>&nbsp;`,
        `\\( \\mathbf{I:} \\)  \\( |A|=|B|, \\quad \\)  \\( \\mathbf{II:} \\)  \\( |A| \\geq|B|, \\quad \\)  \\( \\mathbf{III:} \\)  \\( |A| \\leq|B| \\)`,
      ],
      answer: "B",
      solution: `<img src="/images/quiz/wqt-toc11/3.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>Let  \\( \\mathbb{R} \\) denote the set of real numbers, \\( \\mathbb{Z} \\) denote the set of integers, and let \\( U=\\mathcal{P}(\\mathbb{R}) \\) be the power set of \\( \\mathbb{R} \\) (meaning the elements of  \\( U \\) are subsets of  \\( \\mathbb{R} \\)). </p> <p>Consider the following two statements:</p> <p> \\( \\mathbf{Statement\\ I} \\): For all subsets  \\( X \\) and  \\( Y \\) in  \\( U \\), if  \\( X \\) and  \\( Y \\) have the same cardinality  \\( (|X|=|Y|) \\), then  \\( X \\) and  \\( Y \\) must be the identical set  \\( (X=Y) \\). </p> <p> \\( \\mathbf{Statement\\ II} \\): There exist two subsets \\( A \\) and  \\( B \\) in  \\( U \\) such that both  \\( A \\) and  \\( B \\) contain the set of integers as a subset  \\( (\\mathbb{Z}\\subseteq A \\text{ and } \\mathbb{Z}\\subseteq B) \\), yet \\( A \\) and  \\( B \\) have strictly different cardinalities  \\( (|A|\\neq|B|) \\). </p> <p>Which of the following is correct ?</p> <p></p>`,
      image: "",
      options: [
        `Both Statement  \\( \\mathbf{\\ I} \\) and Statement&nbsp; \\( \\mathbf{\\ II} \\)&nbsp;are false.<br>&nbsp;`,
        `Statement  \\( \\mathbf{\\ I} \\) is true, but Statement  \\( \\mathbf{\\ II} \\)&nbsp;is false.<br>&nbsp;`,
        `Statement  \\( \\mathbf{\\ I} \\) is false, but Statement  \\( \\mathbf{\\ II} \\) is true.<br>&nbsp;`,
        `Both Statement  \\( \\mathbf{\\ I} \\) and Statement  \\( \\mathbf{\\ II} \\)&nbsp;are true.`,
      ],
      answer: "C",
      solution: `<img src="/images/quiz/wqt-toc11/4.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>Let  \\( \\mathbb{N} \\) denote the set of natural numbers and  \\( \\mathcal{P}(\\mathbb{N}) \\) denote its power set. Which of the following functions successfully serves as a valid example to establish the inequality \\( |\\mathcal{P}(\\mathbb{N})| \\leq|\\mathbb{N}| \\) ? </p> <p></p>`,
      image: "",
      options: [
        `\\( g_{A}: \\mathcal{P}(\\mathbb{N}) \\rightarrow \\mathbb{N} \\quad \\) where  \\( \\quad g_{A}(x)= \\begin{cases}0 &amp; \\text { if } x=\\emptyset \\\\ 1 &amp; \\text { otherwise }\\end{cases} \\) <br>&nbsp;`,
        `\\( g_{B}: \\mathcal{P}(\\mathbb{N}) \\rightarrow \\mathbb{N} \\quad \\) where  \\( \\quad g_{B}(x)=20 \\)<br>&nbsp;`,
        `\\( g_{C}: \\mathcal{P}(\\mathbb{N}) \\rightarrow \\mathbb{N} \\quad \\) where  \\( \\quad g_{C}(x)= \\begin{cases}\\min (x) &amp; \\text { if } x \\neq \\emptyset \\\\ 0 &amp; \\text { otherwise }\\end{cases} \\) <br>&nbsp;`,
        `None of the above, because no such function can exist.`,
      ],
      answer: "D",
      solution: `<img src="/images/quiz/wqt-toc11/5.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>Let  \\( \\mathbb{N} \\) denote the set of all natural numbers  \\( \\{1,2,3, \\ldots\\} \\). Which of the following statements is/are true? (Select all that apply) </p> <p></p>`,
      image: "",
      options: [
        `If  \\( A_{1}, A_{2}, \\ldots, A_{n} \\) is a finite collection of countable sets, then their Cartesian product  \\( A_{1} \\times A_{2} \\times \\cdots \\times A_{n} \\) is also countable.<br>&nbsp;`,
        `If there exists an injective function  \\( f: A \\rightarrow \\mathbb{N} \\), then the set \\( A \\) must be countable.<br>&nbsp;`,
        `If there exists a surjective function  \\( f: \\mathbb{N} \\rightarrow A \\), then the set \\( A \\) must be countable.<br>&nbsp;`,
        `If  \\( A_{n} \\) is a countable set for every  \\( n \\in \\mathbb{N} \\), then their countable union  \\( A=\\bigcup_{n=1}^{\\infty} A_{n} \\) is also countable.`,
      ],
      answer: ["A", "B", "C", "D"],
      solution: `<img src="/images/quiz/wqt-toc11/6.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>Let  \\( A \\) and  \\( B \\) be two non-empty sets, and let  \\( |A| \\) and  \\( |B| \\) denote their respective cardinalities. We wish to prove that the two sets have same cardinality, i.e.,  \\( |A|=|B| \\). Which of the following conditions, considered independently, is/are sufficient to establish the claim? (Select all that apply) </p> <p></p>`,
      image: "",
      options: [
        `Proving that there exists a bijective function  \\( f: A \\rightarrow B \\).<br>&nbsp;`,
        `Proving that there exists a bijective function  \\( f: B \\rightarrow A \\).<br>&nbsp;`,
        `Proving that there exist two injective (one-to-one) functions  \\( f_{1} \\) :  \\( A \\rightarrow B \\) and  \\( f_{2}: B \\rightarrow A \\).<br>&nbsp;`,
        `Proving that there exist two surjective (onto) functions  \\( f_{1}: A \\rightarrow B \\) and  \\( f_{2}: B \\rightarrow A \\).`,
      ],
      answer: ["A", "B", "C", "D"],
      solution: `<img src="/images/quiz/wqt-toc11/7.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>Cantor's diagonalization argument constructs, for any given function  \\( f: \\mathbb{N} \\rightarrow \\mathcal{P}(\\mathbb{N}) \\), a associated diagonal set  \\( D_{f} \\subseteq \\mathbb{N} \\) defined explicitly as:<br> \$\$  D_{f}=\\{x \\in \\mathbb{N} \\mid x \\notin f(x)\\}  \$\$<br>Let  \\( \\mathbb{N}=\\{0,1,2,3, \\ldots\\} \\) denote the set of natural numbers. Consider the following two functions from  \\( \\mathbb{N} \\) to its power set  \\( \\mathcal{P}(\\mathbb{N}) \\) :<br><br> \\( f_{1}(x)=\\{y \\in \\mathbb{N} \\mid y \\) has the same parity as  \\( x\\} \\quad \\) (i.e., both are even or both are odd)<br><br> \\( f_{2}(x)=\\{y \\in \\mathbb{N} \\mid y&gt;x\\} \\) <br><br>Which of the following statements regarding their diagonal sets  \\( D_{f_{1}} \\) and  \\( D_{f_{2}} \\) is/are true? (Select all that apply) </p> <p></p>`,
      image: "",
      options: [
        `The diagonal set  \\( D_{f_{1}} \\) is empty (i.e.,  \\( D_{f_{1}}=\\emptyset \\) ).<br>&nbsp;`,
        `\\( 1 \\in D_{f_{2}} \\).<br>&nbsp;`,
        `The diagonal set  \\( D_{f_{2}} \\) is countably infinite.<br>&nbsp;`,
        `The diagonal set  \\( D_{f_{2}} \\) contains all natural numbers except 0 .`,
      ],
      answer: ["A", "B", "C"],
      solution: `<img src="/images/quiz/wqt-toc11/8.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>Let  \\( \\mathbb{N}=\\{0,1,2,3, \\ldots\\} \\) denote the set of natural numbers, and let  \\( \\mathcal{P}(\\mathbb{N}) \\) denote its power set. Which of the following functions successfully serves as a valid witness to establish the cardinality relationship  \\( |\\mathbb{N}| \\leq|\\mathcal{P}(\\mathbb{N})| \\) ? (Select all that apply) </p> <p></p>`,
      image: "",
      options: [
        `\\( f_{A}: \\mathbb{N} \\rightarrow \\mathcal{P}(\\mathbb{N}) \\quad \\) where  \\( \\quad f_{A}(x)=x^{2} \\)<br>&nbsp;`,
        `\\( f_{B}: \\mathbb{N} \\rightarrow \\mathcal{P}(\\mathbb{N}) \\) where \\( f_{B}(x)=\\left\\{x^{2}\\right\\} \\)<br>&nbsp;`,
        `\\( f_{C}: \\mathbb{N} \\rightarrow \\mathcal{P}(\\mathbb{N}) \\quad \\) where  \\( \\quad f_{C}(x)=\\left\\{y \\in \\mathbb{N} \\mid y \\neq x^{2}\\right\\} \\) <br>&nbsp;`,
        `\\( f_{D}: \\mathbb{N} \\rightarrow \\mathcal{P}(\\mathbb{N}) \\) where \\( f_{D}(x)=\\{x, x+1\\} \\)`,
      ],
      answer: ["B", "C", "D"],
      solution: `<img src="/images/quiz/wqt-toc11/9.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>Let  \\( \\mathbb{Z}^{+} \\)denote the set of positive integers, and let  \\( \\aleph_{0} \\) represent its cardinality (countably infinite). For any arbitrary non-empty sets  \\( A, B \\), and  \\( C \\), let  \\( |A| \\) denote the cardinality of set  \\( A \\), and let  \\( A-B \\) denote the set difference.<br><br>Which of the following is/are true? </p> <p></p>`,
      image: "",
      options: [
        `If  \\( A \\) is an infinite set, then there exists a subset  \\( S \\subseteq A \\) such that  \\( |S|=\\aleph_{0} \\).<br>&nbsp;`,
        `There is no infinite set  \\( A \\) such that  \\( |A|&lt;\\aleph_{0} \\).<br>&nbsp;`,
        `The set cardinality relation  \\( \\leq \\) satisfies transitivity: if  \\( |A| \\leq|B| \\) and  \\( |B| \\leq |C| \\), then  \\( |A| \\leq|C| \\).<br>&nbsp;`,
        `If  \\( A \\) is an uncountably infinite set and  \\( B \\) is a countable set, then the set difference  \\( A-B \\) must be uncountably infinite.`,
      ],
      answer: ["A", "B", "C", "D"],
      solution: `<img src="/images/quiz/wqt-toc11/10.png" style="max-width: 75%;">`
    },
  ]
});


registerTest({
  series: "weekly-cs-gate-2027",
  name: "WQT - Theory of Computation-12 | Pumping Lemma",
  date: "Oct 01, 2026",
  questions: [
    {
      marks: 1,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>Which of the following is/are false?</p> <p></p>`,
      image: "",
      options: [
        `If  \\( L \\) satisfies the pumping lemma, then  \\( L \\) may or may not be regular.<br>&nbsp;`,
        `If  \\( L \\) does not satisfy the pumping lemma, then \\( L \\) is non-regular.<br>&nbsp;`,
        `If  \\( L \\) is non-regular, then it does not satisfy the pumping lemma.<br>&nbsp;`,
        `If  \\( L \\) is regular, then it satisfies the pumping lemma.`,
      ],
      answer: ["C"],
      solution: `<img src="/images/quiz/wqt-toc12/1.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0,
      type: "NAT",
      text: `<p>Let  \\( A \\) be the minimum pumping length of the string \\( 0^{*} 1^{*} \\) and  \\( B \\) be the minimum pumping length of the string \\( 00^{*} \\). What is the value of  \\( A+B \\)? </p>`,
      image: "",
      options: [],
      answer: "3",
      solution: `<img src="/images/quiz/wqt-toc12/2.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0,
      type: "NAT",
      text: `<p>Your GO Classes friend is trying to prove that the language  \\( ww^{R} \\), the language of palindromes, is not regular. For pumping length  \\( p \\) he chooses the string  \\( S=01^{p} 1^{p} 0 \\), which is a palindrome. Can he use the pumping lemma for regular languages to prove that this language is not regular? Answer  \\( 1 \\) if yes, else  \\( 0 \\). </p>`,
      image: "",
      options: [],
      answer: "0",
      solution: `<img src="/images/quiz/wqt-toc12/3.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0,
      type: "NAT",
      text: `<p></p> <p>Which of the following is/are true?</p> <ol style="list-style-type:upper-alpha"> <li>A regular language accepted by an  \\( NFA \\) with  \\( n \\) states has pumping length  \\( n \\)<br>&nbsp; </li> <li>If  \\( L \\) is a finite language and the length of the longest string in  \\( L \\) is  \\( m \\), then the minimum pumping length of  \\( L \\) is  \\( \\mathrm{m}+1 \\)<br>&nbsp; </li> <li>If the length of the shortest string in a regular language  \\( L \\) is  \\( k \\), then the minimum pumping length of  \\( L \\) must be greater than  \\( k \\).<br>&nbsp; </li> <li>If  \\( p \\) is a pumping length for a regular language  \\( L \\), then  \\( p+1 \\) is also a pumping length for  \\( L \\). </li> </ol> <p></p>`,
      image: "",
      options: [],
      answer: "null",
      solution: `<img src="/images/quiz/wqt-toc12/4.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>Which of the following is false?</p> <p></p>`,
      image: "",
      options: [
        `If a regular language  \\( L \\) has minimum pumping length  \\( p \\), then any  \\( DFA \\) accepting  \\( L \\) must have at least  \\( p \\) states.<br>&nbsp;`,
        `The minimum pumping length for regular language  \\( \\{0011\\} \\) is  \\( 5 \\).<br>&nbsp;`,
        `On an input string of length  \\( k \\), every  \\( DFA \\) goes through a unique sequence of  \\( \\mathrm{k}+1 \\) states during its computation.<br>&nbsp;`,
        `The minimum pumping length for regular expression  \\( 001+0^{*} 1^{*} \\) is  \\( 2 \\).`,
      ],
      answer: "D",
      solution: `<img src="/images/quiz/wqt-toc12/5.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p>Let  \\( L=\\left\\{0^{n} 1^{m} 0^{n} \\mid m, n \\geq 0\\right\\} \\) be a language over the alphabet  \\( \\Sigma=\\{0,1\\} \\). To prove that  \\( L \\) is not regular using the Pumping Lemma by contradiction, we assume  \\( L \\) is regular and let  \\( p \\) be the pumping length.<br><br>Which of the following choices of string can be used to complete the proof by contradiction? </p> <p></p>`,
      image: "",
      options: [
        `\\( 00000100000 \\)<br>&nbsp;`,
        `\\( 0^{p} 10^{p} \\)<br>&nbsp;`,
        `\\( (010)^{p} \\)<br>&nbsp;`,
        `\\( 0^{p+1} 1^{p} 0^{p} \\)`,
      ],
      answer: "B",
      solution: `<img src="/images/quiz/wqt-toc12/6.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p> \\( \\textbf{Theorem:} \\)  \\( L=\\left\\{0^{n} 1^{n} \\mid n \\geq 0\\right\\} \\) is not regular.<br><br> \\( \\textbf{Proof:} \\) Assume (towards contradiction) that  \\( L \\) is regular. Then the pumping lemma applies to \\( L \\). Let  \\( p \\) be the pumping length. Choose  \\( s \\) to be the string ____,  \\( |s| \\geq p \\). The pumping lemma guarantees  \\( s \\) can be divided into parts  \\( x y z \\) s.t. for any  \\( i \\geq 0, x y^{i} z \\) is in  \\( L \\), and that  \\( |y|&gt;0 \\) and  \\( |x y| \\leq p \\). But if we let  \\( i= \\) ____, we get the string which is not in \\( L \\), a contradiction. Therefore the assumption is false, and  \\( L \\) is not regular.  \\( Q.E.D \\).<br><br>Which values of  \\( s \\) and  \\( i \\) should not be chosen in the proof?<br>&nbsp; </p> <p></p>`,
      image: "",
      options: [
        `\\( s=0^{p} 1^{p}, i=1 \\)<br>&nbsp;`,
        `\\( s=010101, i=0 \\)<br>&nbsp;`,
        `\\( s=000000111111, i=6 \\)<br>&nbsp;`,
        `\\( s=1^{p} 0^{p}, i=5 \\)`,
      ],
      answer: ["A", "B", "C", "D"],
      solution: `<img src="/images/quiz/wqt-toc12/7.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p> \\( \\textbf{Theorem:} \\)  \\( L=\\left\\{w w^{R} \\mid w^{R}\\right. \\) is the reverse of  \\( w \\) and  \\( \\left.w \\in\\{0,1\\}^{*}\\right\\} \\) is not regular.<br><br> \\( \\textbf{Proof:} \\)&nbsp;Assume (towards contradiction) that  \\( L \\) is regular. Then the pumping lemma applies to \\( L \\). Let  \\( p \\) be the pumping length. Choose  \\( s \\) to be the string ____,  \\( |s| \\geq p \\). The pumping lemma guarantees  \\( s \\) can be divided into parts  \\( x y z \\) s.t. for any  \\( i \\geq 0, x y^{i} z \\) is in  \\( L \\), and that  \\( |y|&gt;0 \\) and  \\( |x y| \\leq p \\). But if we let  \\( i= \\) ____, we get the string which is not in \\( L \\), a contradiction. Therefore the assumption is false, and  \\( L \\) is not regular.  \\( Q.E.D. \\)<br><br>Which of the following choices of \\( s \\) and  \\( i \\) makes the proof correct? </p> <p></p>`,
      image: "",
      options: [
        `\\( s=000000111111, i=6 \\)<br>&nbsp;`,
        `\\( s=0^{p} 0^{p}, i=2 \\)<br>&nbsp;`,
        `\\( s=0^{p} 110^{p}, i=2 \\)<br>&nbsp;`,
        `\\( s=0^{p} 10^{p}, i=3 \\)`,
      ],
      answer: ["C"],
      solution: `<img src="/images/quiz/wqt-toc12/8.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>Consider the following two statements:<br><br> \\( \\mathbf{S_1:} \\) If a regular language  \\( L \\) has at least one string whose length lies between  \\( n \\) and  \\( 2 n-1 \\) (inclusive) where  \\( n \\) is the number of states in a  \\( \\text{DFA} \\)  \\( D \\) (where  \\( L(D)=L \\) ), then  \\( L \\) is infinite.<br><br> \\( \\mathbf{S_2:} \\) The set of strings accepted by a \\( \\text{DFA} \\) with n states is non-empty iff the DFA accepts a string of length strictly less than  \\( n \\).<br><br>Which of the following is correct? </p> <p></p>`,
      image: "",
      options: [
        `\\( S_1 \\) is false and  \\( S_2 \\) is false<br>&nbsp;`,
        `\\( S_1 \\) is true and  \\( S_2 \\) is false<br>&nbsp;`,
        `\\( S_1 \\) is false and  \\( S_2 \\) is true<br>&nbsp;`,
        `\\( S_1 \\) is true and  \\( S_2 \\) is true`,
      ],
      answer: ["D"],
      solution: `<img src="/images/quiz/wqt-toc12/9.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>We need to prove that the language  \\( L=\\{w \\mid w \\) has equal number of  \\( 0 \\)'s and  \\( 1 \\)'s  \\( \\} \\) is not regular.<br><br>We are using the Pumping Lemma to prove  \\( L \\) is non-regular. Suppose length  \\( p \\) was given. Which of the following  \\( w \\) 's can we choose for our proof?<br>&nbsp; </p> <p></p>`,
      image: "",
      options: [
        `\\( 0^{\\lfloor p/2 \\rfloor}1^{\\lfloor p/2 \\rfloor} \\)<br>&nbsp;`,
        `\\( (01)^p \\)<br>&nbsp;`,
        `\\( (00)^p(11)^p \\)<br>&nbsp;`,
        `\\( 0^{p-1}1^{p-1} \\)`,
      ],
      answer: ["C"],
      solution: `<img src="/images/quiz/wqt-toc12/10.png" style="max-width: 75%;">`
    },
  ]
});

registerTest({
  series: "weekly-cs-gate-2027",
  name: "WQT - Theory of Computation-9 | Closure Properties",
  date: "Oct 01, 2026",
  questions: [
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>Which data structure in a compiler is used for managing information about variables and their attributes?<br>&nbsp;</p> <p></p>`,
      image: "",
      options: [
        `Abstract syntax tree<br>&nbsp;`,
        `Symbol table<br>&nbsp;`,
        `Semantic stack<br>&nbsp;`,
        `Parse table`,
      ],
      answer: "B",
      solution: `<img src="/images/quiz/wqt-toc9/1.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>In a compiler, keywords of a language are recognized during<br>&nbsp;</p> <p></p>`,
      image: "",
      options: [
        `parsing of the program<br>&nbsp;`,
        `the code generation<br>&nbsp;`,
        `the lexical analysis of the program<br>&nbsp;`,
        `dataflow analysis`,
      ],
      answer: "C",
      solution: `<img src="/images/quiz/wqt-toc9/2.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>In a compiler the module that checks every character of the source text is called:</p> <p></p>`,
      image: "",
      options: [
        `The code generator.<br>&nbsp;`,
        `The code optimiser.<br>&nbsp;`,
        `The lexical analyser.<br>&nbsp;`,
        `The syntax analyser.`,
      ],
      answer: "C",
      solution: `<img src="/images/quiz/wqt-toc9/3.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>Consider the following statements related to the errors detected during lexical analysis:<br><br> \\( \\text{S1} \\) : A character sequence that cannot be scanned into any valid token is a lexical error.<br><br> \\( \\text{S2} \\) : Misspellings of identifiers, keywords, or operators are considered as lexical errors.<br><br>Which of the above statements is/are CORRECT ?<br>&nbsp; </p> <p></p>`,
      image: "",
      options: [
        `Only  \\( \\text{S1} \\)<br>&nbsp;`,
        `Only  \\( \\text{S2} \\)<br>&nbsp;`,
        `Both  \\( \\text{S1} \\) and  \\( \\text{S2} \\)<br>&nbsp;`,
        `Neither  \\( \\text{S1} \\) or  \\( \\text{S2} \\)`,
      ],
      answer: "A",
      solution: `<img src="/images/quiz/wqt-toc9/4.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>Which of the following statements is/are true ?</p> <p></p>`,
      image: "",
      options: [
        `Lexical analysis is recursive in order to handle nested parentheses.<br>&nbsp;`,
        `Scanners don't know anything about the grammar of a language.<br>&nbsp;`,
        `A regular expression is a type of pattern used to classify lexemes.<br>&nbsp;`,
        `You can change state in a DFA without reading any input character.`,
      ],
      answer: ["B", "C"],
      solution: `<img src="/images/quiz/wqt-toc9/5.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p>The number of tokens in the following C statement is</p> <pre class="prettyprint lang-c_cpp prettyprinted" style=""><span class="pln">printf</span><span class="pun">(</span><span class="str">"i=%d, &amp;i=%x"</span><span class="pun">,</span><span class="pln"> i</span><span class="pun">,</span><span class="pln"> </span><span class="pun">&amp;</span><span class="pln">i</span><span class="pun">);</span></pre> <p></p>`,
      image: "",
      options: [
        `\\( 3 \\)<br>&nbsp;`,
        `\\( 26 \\)<br>&nbsp;`,
        `\\( 10 \\)<br>&nbsp;`,
        `\\( 21 \\)`,
      ],
      answer: "C",
      solution: `<img src="/images/quiz/wqt-toc9/6.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p>The number of tokens in the following C code segment is</p> <pre class="prettyprint linenums lang-c_cpp prettyprinted" data-pbcklang="c_cpp" data-pbcktabsize="4" style=""><ol class="linenums"><li class="L0"><span class="kwd">switch</span><span class="pun">(</span><span class="pln">inputvalue</span><span class="pun">)</span></li><li class="L1"><span class="pun">{</span></li><li class="L2"><span class="pln">    </span><span class="kwd">case</span><span class="pln"> </span><span class="lit">1</span><span class="pln"> </span><span class="pun">:</span><span class="pln"> b </span><span class="pun">=</span><span class="pln">c</span><span class="pun">*</span><span class="pln">d</span><span class="pun">;</span><span class="pln"> </span><span class="kwd">break</span><span class="pun">;</span></li><li class="L3"><span class="pln">    </span><span class="kwd">default</span><span class="pln"> </span><span class="pun">:</span><span class="pln"> b </span><span class="pun">=</span><span class="pln">b</span><span class="pun">++;</span><span class="pln"> </span><span class="kwd">break</span><span class="pun">;</span></li><li class="L4"><span class="pun">}</span></li></ol></pre> <p></p>`,
      image: "",
      options: [
        `\\( 27 \\)<br>&nbsp;`,
        `\\( 29 \\)<br>&nbsp;`,
        `\\( 26 \\)<br>&nbsp;`,
        `\\( 24 \\)`,
      ],
      answer: "C",
      solution: `<img src="/images/quiz/wqt-toc9/7.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "NAT",
      text: `<p>The number of tokens in the following C statement is: \$\$ \\verb|printf("Total = %d \\n", score);| \$\$ </p>`,
      image: "",
      options: [],
      answer: "7",
      solution: `<img src="/images/quiz/wqt-toc9/8.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "NAT",
      text: `<p></p> <p>The number of tokens in the following C code segment is:<br><br><strong>Input text</strong></p> <pre data-pbcklang="c_cpp" data-pbcktabsize="4" class="prettyprint linenums lang-c_cpp prettyprinted" style=""><ol class="linenums"><li class="L0"><span class="com">// this statement does very little</span></li><li class="L1"><span class="kwd">if</span><span class="pln"> </span><span class="pun">(</span><span class="pln">x </span><span class="pun">&gt;=</span><span class="pln"> y</span><span class="pun">)</span><span class="pln"> y </span><span class="pun">=</span><span class="pln"> </span><span class="lit">42</span><span class="pun">;</span></li></ol></pre> <p><br>&nbsp;&nbsp;&nbsp;&nbsp;</p> <p></p>`,
      image: "",
      options: [],
      answer: "10",
      solution: `<img src="/images/quiz/wqt-toc9/9.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "NAT",
      text: `<p>In Ada, an identifier must begin with a letter and can be followed by zero or more letters, digits, or underscore symbols. However, two underscore symbols may not appear in a row and the last character in an identifier may not be an underscore. The minimum number of states required for a DFA to accept all valid ADA identifiers ?</p>`,
      image: "",
      options: [],
      answer: "4",
      solution: `<img src="/images/quiz/wqt-toc9/10.png" style="max-width: 75%;">`
    },
  ]
});


registerTest({
  series: "weekly-cs-gate-2027",
  name: "WQT - Theory of Computation-10 | Context Free Grammar",
  date: "Oct 01, 2026",
  questions: [
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>Consider the Context-Free Grammar (CFG)  \\( G=(V, \\Sigma, P, S) \\), where  \\( S \\) is the start symbol,  \\( \\Sigma=\\{a, b\\} \\) is the set of terminal symbols, \\( V=\\{S, B\\} \\) is the set of non-terminals, and the set of production rules  \\( P \\) is defined by:<br> \$\$  \\begin{aligned} &amp; S \\longrightarrow S B \\mid a a \\\\ &amp; B \\longrightarrow b S B b \\mid a b \\end{aligned}  \$\$ <br>Let  \\( |w|_{a} \\) denote the number of occurrences of the terminal symbol  \\( a \\) in a string  \\( w \\), and let  \\( |w|_{b} \\) denote the number of occurrences of the terminal symbol  \\( b \\) in  \\( w \\).<br>Which of the following equations correctly describes the relationship between the number of  \\( a \\) 's and  \\( b \\) 's for all terminal strings  \\( w \\in L(G) \\) ? </p> <p></p>`,
      image: "",
      options: [
        `\\( |w|_{a}=|w|_{b}+2 \\)<br>&nbsp;`,
        `\\( |w|_{a}=2|w|_{b} \\)<br>&nbsp;`,
        `\\( |w|_{a}=|w|_{b} \\)<br>&nbsp;`,
        `\\( |w|_{a}=\\left(|w|_{b}+1\\right) \\cdot 2 \\)`,
      ],
      answer: "A",
      solution: `<img src="/images/quiz/wqt-toc10/1.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>Consider the regular grammar below<br> \$\$  \\begin{aligned} S &amp;\\to bS\\ |\\ aA\\ |\\ \\epsilon \\\\ A &amp;\\to aS\\ |\\ bA \\end{aligned}  \$\$ <br>The Myhill-Nerode equivalence classes for the language generated by the grammar are </p> <p></p>`,
      image: "",
      options: [
        `\\( \\{w\\in(a+b)^*\\ |\\ \\#a(w)\\ \\text{is even}\\} \\) and  \\( \\{w\\in(a+b)^*\\ |\\ \\#a(w)\\ \\text{is odd}\\} \\) <br>&nbsp;`,
        `\\( \\{w\\in(a+b)^*\\ |\\ \\#a(w)\\ \\text{is even}\\} \\) and  \\( \\{w\\in(a+b)^*\\ |\\ \\#b(w)\\ \\text{is odd}\\} \\) <br>&nbsp;`,
        `\\( \\{w\\in(a+b)^*\\ |\\ \\#a(w)=\\#b(w)\\} \\) and  \\( \\{w\\in(a+b)^*\\ |\\ \\#a(w)\\neq\\#b(w)\\} \\) <br>&nbsp;`,
        `\\( \\{\\epsilon\\},\\ \\{wa\\ |\\ w\\in(a+b)^*\\} \\) and \\( \\{wb\\ |\\ w\\in(a+b)^*\\} \\)`,
      ],
      answer: "A",
      solution: `<img src="/images/quiz/wqt-toc10/2.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>Let  \\( G \\) be a Context-Free Grammar (CFG) and let  \\( L(G) \\) be its language. Which of the following conditions, if true for a string  \\( w \\in L(G) \\), prove that  \\( G \\) is an ambiguous grammar? </p> <p></p>`,
      image: "",
      options: [
        `The string  \\( w \\) has two different parse trees.<br>&nbsp;`,
        `The string  \\( w \\) has two different left-most derivations.<br>&nbsp;`,
        `The string  \\( w \\) has two different right-most derivations.<br>&nbsp;`,
        `The string  \\( w \\) has two different derivations.`,
      ],
      answer: ["A", "B", "C"],
      solution: `<img src="/images/quiz/wqt-toc10/3.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>Consider the Context-Free Grammar (CFG)  \\( G \\) defined by the production rules:<br> \$\$  S \\longrightarrow a S \\mid a S b S \\mid \\epsilon  \$\$<br>To demonstrate that  \\( G \\) is ambiguous, a student analyzes the string \\( w=a a b \\). Which of the following statement is correct ? </p> <p></p>`,
      image: "",
      options: [
        `The string  \\( w \\) has exactly two distinct parse trees, which directly implies it has exactly two distinct leftmost derivations and exactly two distinct rightmost derivations.<br>&nbsp;`,
        `The string  \\( w \\) has exactly two distinct parse trees, but it has only one unique leftmost derivation.<br>&nbsp;`,
        `The string  \\( w \\) has multiple distinct derivations, which implies that  \\( G \\) is ambiguous.<br>&nbsp;`,
        `The string  \\( w \\) cannot be generated by this grammar.`,
      ],
      answer: "A",
      solution: `<img src="/images/quiz/wqt-toc10/4.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>Consider the following two statements, where  \\( V \\) represents the set of non-terminals,  \\( T \\) represents the set of terminals, and  \\( \\lambda \\) denotes the empty string:<br><br> \\( \\textbf{Statement I:} \\) For every regular language  \\( L \\) not containing  \\( \\lambda \\), there exists a grammar  \\( G \\) with  \\( L = L(G) \\) whose productions are strictly restricted to the forms:<br> \$\$  A \\longrightarrow a B \\quad \\text { or } \\quad A \\longrightarrow a  \$\$ <br>where  \\( A, B \\in V \\) and  \\( a \\in T \\).<br><br> \\( \\textbf{Statement II:} \\) Any regular grammar \\( G \\) for which the generated language is non-empty (  \\( L(G) \\neq \\emptyset \\) ) must have at least one production of the form:<br> \$\$  A \\longrightarrow x  \$\$<br>where \\( A \\in V \\) and  \\( x \\in T^{*} \\).<br>Which of the following option is true? </p> <p></p>`,
      image: "",
      options: [
        `Both Statement  \\( \\textbf{I} \\) and Statement  \\( \\textbf{II} \\) are correct.<br>&nbsp;`,
        `Statement  \\( \\textbf{I} \\) is correct but Statement  \\( \\textbf{II} \\) is incorrect.<br>&nbsp;`,
        `Statement  \\( \\textbf{I} \\) is incorrect but Statement  \\( \\textbf{II} \\) is correct.<br>&nbsp;`,
        `Both Statement  \\( \\textbf{I} \\)&nbsp;and Statement  \\( \\textbf{II} \\)&nbsp;are incorrect.`,
      ],
      answer: "A",
      solution: `<img src="/images/quiz/wqt-toc10/5.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>Consider the Context-Free Grammar  \\( G: \\)<br> \$\$  \\begin{aligned} &amp; S \\longrightarrow A S A \\mid a B \\\\ &amp; A \\longrightarrow B \\mid S \\\\ &amp; B \\longrightarrow b \\mid \\epsilon \\end{aligned}  \$\$ <br>Which of the following strings is/are generated by this grammar ? </p> <p></p>`,
      image: "",
      options: [
        `\\( b b a \\)<br>&nbsp;`,
        `\\( a b \\)<br>&nbsp;`,
        `\\( b a \\)<br>&nbsp;`,
        `\\( b b \\)`,
      ],
      answer: ["A", "B", "C"],
      solution: `<img src="/images/quiz/wqt-toc10/6.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p>Consider the Grammar  \\( G: \\)<br> \$\$  \\begin{aligned} &amp; S \\longrightarrow \\epsilon \\mid a T&nbsp;\\mid b T \\\\ &amp; T \\longrightarrow a S \\mid b S \\end{aligned}  \$\$ <br>Which of the following statements is/are incorrect ? </p> <p></p>`,
      image: "",
      options: [
        `Every terminal string  \\( w \\in L(G) \\) has an even length.<br>&nbsp;`,
        `The string  \\( a a b b \\) can be derived and is accepted by \\( G \\).<br>&nbsp;`,
        `The string  \\( b a b b \\) cannot be derived and is not accepted by  \\( G \\).<br>&nbsp;`,
        `There exists at least one string of even length&nbsp;that does not belong to  \\( L(G) \\).`,
      ],
      answer: "C",
      solution: `<img src="/images/quiz/wqt-toc10/7.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>The following grammar is ambiguous:  \$\$ \\begin{aligned}&amp;S\\to AB\\\\&amp;A\\to aA\\mid a\\\\&amp;B\\to aB\\mid a\\end{aligned} \$\$ Which of the following pairs of derivations correctly prove that the grammar is ambiguous? </p> <p></p>`,
      image: "",
      options: [
        `\\( S\\Rightarrow AB\\Rightarrow aAB\\Rightarrow aaB\\Rightarrow aaa \\) <br> \\( S\\Rightarrow AB\\Rightarrow Aa\\Rightarrow aAa\\Rightarrow aaa \\) <br>&nbsp;`,
        `\\( S\\Rightarrow AB\\Rightarrow aAB\\Rightarrow aaB\\Rightarrow aaa \\) <br>&nbsp; \\( S\\Rightarrow AB\\Rightarrow aB\\Rightarrow aaB\\Rightarrow aaa \\) <br>&nbsp;`,
        `\\( S\\Rightarrow AB\\Rightarrow Aa\\Rightarrow aAa\\Rightarrow aaa \\) <br> \\( S\\Rightarrow AB\\Rightarrow AaB\\Rightarrow Aaa\\Rightarrow aaa \\) <br>&nbsp;`,
        `\\( S\\Rightarrow AB\\Rightarrow aAB\\Rightarrow aaB\\Rightarrow aaa \\) <br> \\( S\\Rightarrow AB\\Rightarrow aB\\Rightarrow aa \\)`,
      ],
      answer: ["B", "C"],
      solution: `<img src="/images/quiz/wqt-toc10/8.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>Consider the Grammar  \\( G: \\)<br> \$\$  \\begin{aligned} &amp; S \\longrightarrow A 1 B \\\\ &amp; A \\longrightarrow 0 A \\mid \\epsilon \\\\ &amp; B \\longrightarrow 0 B \\mid 1 B&nbsp;\\mid \\epsilon \\end{aligned}  \$\$ <br>Which of the following statements is/are incorrect? </p> <p></p>`,
      image: "",
      options: [
        `The regular expression of the language  \\( L(G) \\) is  \\( 0^{*} 1(0+1)^{*} \\).<br>&nbsp;`,
        `The grammar  \\( G \\) is a regular grammar.<br>&nbsp;`,
        `The language  \\( L(G) \\) is a regular language.<br>&nbsp;`,
        `The grammar  \\( G \\) is unambiguous.`,
      ],
      answer: ["B"],
      solution: `<img src="/images/quiz/wqt-toc10/9.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>Consider the Context-Free Grammar  \\( G: \\)<br> \$\$  \\begin{aligned} &amp; S \\longrightarrow 1 S 1 \\mid T \\\\ &amp; T \\longrightarrow 1 X 1 \\mid X \\\\ &amp; X \\longrightarrow 0 X 0 \\mid 1 \\end{aligned}  \$\$ <br>Let  \\( |w| \\) denote the length of a string  \\( w \\). Which of the following statements is/are correct? </p> <p></p>`,
      image: "",
      options: [
        `The string  \\( 11111 \\) has more than one parse tree.<br>&nbsp;`,
        `Every string  \\( w \\in L(G) \\) has an odd length (i.e.,  \\( |w| \\ (\\bmod \\ 2) \\neq 0 \\) ).<br>&nbsp;`,
        `The string  \\( 111 \\) appears at the third position in the lexicographical enumeration of  \\( L(G) \\).<br>&nbsp;`,
        `The grammar  \\( G \\) is a non-regular grammar, but the language  \\( L(G) \\) is a regular language.`,
      ],
      answer: ["A", "B", "C"],
      solution: `<img src="/images/quiz/wqt-toc10/10.png" style="max-width: 75%;">`
    },
  ]
});


registerTest({
  series: "weekly-cs-gate-2027",
  name: "WQT - Theory of Computation-11 | Countability",
  date: "Oct 01, 2026",
  questions: [
    {
      marks: 1,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>Let  \\( A \\) be a non-empty countable set, and let  \\( f: B \\rightarrow A \\) be a function from an arbitrary set  \\( B \\) to  \\( A \\). For each element  \\( x \\in A \\), let the preimage of  \\( x \\) under  \\( f \\) be denoted as:<br> \$\$  f^{-1}(x)=\\{b \\in B \\mid f(b)=x\\}  \$\$<br>If  \\( f^{-1}(x) \\) is a countable set for every  \\( x \\in A \\), which of the following is the correct conclusion regarding the<br>cardinality of the domain set  \\( B \\)? </p> <p></p>`,
      image: "",
      options: [
        `\\( B \\) must be an uncountably infinite set.<br>&nbsp;`,
        `\\( B \\) must be a finite set.<br>&nbsp;`,
        `\\( B \\) is guaranteed to be a countable set.<br>&nbsp;`,
        `The cardinality of  \\( B \\) cannot be determined.`,
      ],
      answer: ["C"],
      solution: `<img src="/images/quiz/wqt-toc11/1.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>Consider the following two mathematical assertions regarding an arbitrary set  \\( Y \\), where  \\( |Y| \\) denotes the cardinality of  \\( Y, Y \\times Y \\) denotes its Cartesian product, and  \\( \\mathcal{P}(Y) \\) denotes its power set:<br><br> \\( \\textbf{Statement I:} \\) There exists a set  \\( Y \\) such that  \\( |Y| \\neq|Y \\times Y| \\).<br><br> \\( \\textbf{Statement II:} \\) There exists a set  \\( Y \\) such that  \\( |Y| \\neq|\\mathcal{P}(Y)| \\).<br><br>Which of the following option is correct? </p> <p></p>`,
      image: "",
      options: [
        `Both Statement  \\( \\mathbf{I} \\) and Statement  \\( \\mathbf{II} \\) are false.<br>&nbsp;`,
        `Statement  \\( \\mathbf{I} \\)&nbsp;is true, but Statement \\( \\mathbf{II} \\) is false.<br>&nbsp;`,
        `Statement  \\( \\mathbf{I} \\)&nbsp;is false, but Statement \\( \\mathbf{II} \\)&nbsp;is true.<br>&nbsp;`,
        `Both Statement  \\( \\mathbf{I} \\)&nbsp;and Statement  \\( \\mathbf{II} \\) are true.`,
      ],
      answer: "D",
      solution: `<img src="/images/quiz/wqt-toc11/2.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>Let  \\( A \\) and  \\( B \\) be two non-empty sets. Consider the following three assertions expressed in first-order logic symbols, where  \\( |A| \\) and  \\( |B| \\) denote the cardinalities of sets  \\( A \\) and  \\( B \\), respectively: </p> <p> \\( \\mathbf{I.} \\)  \\( \\exists f: A \\rightarrow B \\quad \\forall a_{1} \\in A \\quad \\forall a_{2} \\in A\\left(a_{1} \\neq a_{2} \\rightarrow f\\left(a_{1}\\right) \\neq f\\left(a_{2}\\right)\\right) \\) </p> <p> \\( \\mathbf{II.} \\)  \\( \\exists f: A \\rightarrow B \\quad \\forall b \\in B \\quad \\exists a \\in A(f(a)=b) \\) </p> <p> \\( \\mathbf{III.} \\)  \\( \\exists f: A \\rightarrow B \\quad \\forall b \\in B \\quad \\exists a \\in A\\left(f(a)=b \\wedge \\forall a^{\\prime} \\in A\\left(a \\neq a^{\\prime} \\rightarrow f\\left(a^{\\prime}\\right) \\neq b\\right)\\right) \\) </p> <p><br>Which of the following describes the set cardinality relationships implied by Statements  \\( \\mathbf{I} \\),  \\( \\mathbf{II} \\), and  \\( \\mathbf{III} \\) in order? </p> <p>&nbsp;</p> <p>&nbsp;</p> <p></p>`,
      image: "",
      options: [
        `\\( \\mathbf{I:} \\)&nbsp; \\( |A| \\geq|B|, \\quad \\)  \\( \\mathbf{II:} \\)  \\( |A| \\leq|B|, \\quad \\)  \\( \\mathbf{III:} \\)  \\( |A|=|B| \\)<br>&nbsp;`,
        `\\( \\mathbf{I:} \\)  \\( |A| \\leq|B|, \\quad \\)  \\( \\mathbf{II:} \\)  \\( |A| \\geq|B|, \\quad \\)  \\( \\mathbf{III:} \\)  \\( |A|=|B| \\)<br>&nbsp;`,
        `\\( \\mathbf{I:} \\)&nbsp;  \\( |A| \\leq|B|, \\quad \\)  \\( \\mathbf{II:} \\)  \\( |A| \\leq|B|, \\quad \\)  \\( \\mathbf{III:} \\)  \\( |A| \\neq|B| \\)<br>&nbsp;`,
        `\\( \\mathbf{I:} \\)  \\( |A|=|B|, \\quad \\)  \\( \\mathbf{II:} \\)  \\( |A| \\geq|B|, \\quad \\)  \\( \\mathbf{III:} \\)  \\( |A| \\leq|B| \\)`,
      ],
      answer: "B",
      solution: `<img src="/images/quiz/wqt-toc11/3.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>Let  \\( \\mathbb{R} \\) denote the set of real numbers, \\( \\mathbb{Z} \\) denote the set of integers, and let \\( U=\\mathcal{P}(\\mathbb{R}) \\) be the power set of \\( \\mathbb{R} \\) (meaning the elements of  \\( U \\) are subsets of  \\( \\mathbb{R} \\)). </p> <p>Consider the following two statements:</p> <p> \\( \\mathbf{Statement\\ I} \\): For all subsets  \\( X \\) and  \\( Y \\) in  \\( U \\), if  \\( X \\) and  \\( Y \\) have the same cardinality  \\( (|X|=|Y|) \\), then  \\( X \\) and  \\( Y \\) must be the identical set  \\( (X=Y) \\). </p> <p> \\( \\mathbf{Statement\\ II} \\): There exist two subsets \\( A \\) and  \\( B \\) in  \\( U \\) such that both  \\( A \\) and  \\( B \\) contain the set of integers as a subset  \\( (\\mathbb{Z}\\subseteq A \\text{ and } \\mathbb{Z}\\subseteq B) \\), yet \\( A \\) and  \\( B \\) have strictly different cardinalities  \\( (|A|\\neq|B|) \\). </p> <p>Which of the following is correct ?</p> <p></p>`,
      image: "",
      options: [
        `Both Statement  \\( \\mathbf{\\ I} \\) and Statement&nbsp; \\( \\mathbf{\\ II} \\)&nbsp;are false.<br>&nbsp;`,
        `Statement  \\( \\mathbf{\\ I} \\) is true, but Statement  \\( \\mathbf{\\ II} \\)&nbsp;is false.<br>&nbsp;`,
        `Statement  \\( \\mathbf{\\ I} \\) is false, but Statement  \\( \\mathbf{\\ II} \\) is true.<br>&nbsp;`,
        `Both Statement  \\( \\mathbf{\\ I} \\) and Statement  \\( \\mathbf{\\ II} \\)&nbsp;are true.`,
      ],
      answer: "C",
      solution: `<img src="/images/quiz/wqt-toc11/4.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>Let  \\( \\mathbb{N} \\) denote the set of natural numbers and  \\( \\mathcal{P}(\\mathbb{N}) \\) denote its power set. Which of the following functions successfully serves as a valid example to establish the inequality \\( |\\mathcal{P}(\\mathbb{N})| \\leq|\\mathbb{N}| \\) ? </p> <p></p>`,
      image: "",
      options: [
        `\\( g_{A}: \\mathcal{P}(\\mathbb{N}) \\rightarrow \\mathbb{N} \\quad \\) where  \\( \\quad g_{A}(x)= \\begin{cases}0 &amp; \\text { if } x=\\emptyset \\\\ 1 &amp; \\text { otherwise }\\end{cases} \\) <br>&nbsp;`,
        `\\( g_{B}: \\mathcal{P}(\\mathbb{N}) \\rightarrow \\mathbb{N} \\quad \\) where  \\( \\quad g_{B}(x)=20 \\)<br>&nbsp;`,
        `\\( g_{C}: \\mathcal{P}(\\mathbb{N}) \\rightarrow \\mathbb{N} \\quad \\) where  \\( \\quad g_{C}(x)= \\begin{cases}\\min (x) &amp; \\text { if } x \\neq \\emptyset \\\\ 0 &amp; \\text { otherwise }\\end{cases} \\) <br>&nbsp;`,
        `None of the above, because no such function can exist.`,
      ],
      answer: "D",
      solution: `<img src="/images/quiz/wqt-toc11/5.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>Let  \\( \\mathbb{N} \\) denote the set of all natural numbers  \\( \\{1,2,3, \\ldots\\} \\). Which of the following statements is/are true? (Select all that apply) </p> <p></p>`,
      image: "",
      options: [
        `If  \\( A_{1}, A_{2}, \\ldots, A_{n} \\) is a finite collection of countable sets, then their Cartesian product  \\( A_{1} \\times A_{2} \\times \\cdots \\times A_{n} \\) is also countable.<br>&nbsp;`,
        `If there exists an injective function  \\( f: A \\rightarrow \\mathbb{N} \\), then the set \\( A \\) must be countable.<br>&nbsp;`,
        `If there exists a surjective function  \\( f: \\mathbb{N} \\rightarrow A \\), then the set \\( A \\) must be countable.<br>&nbsp;`,
        `If  \\( A_{n} \\) is a countable set for every  \\( n \\in \\mathbb{N} \\), then their countable union  \\( A=\\bigcup_{n=1}^{\\infty} A_{n} \\) is also countable.`,
      ],
      answer: ["A", "B", "C", "D"],
      solution: `<img src="/images/quiz/wqt-toc11/6.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>Let  \\( A \\) and  \\( B \\) be two non-empty sets, and let  \\( |A| \\) and  \\( |B| \\) denote their respective cardinalities. We wish to prove that the two sets have same cardinality, i.e.,  \\( |A|=|B| \\). Which of the following conditions, considered independently, is/are sufficient to establish the claim? (Select all that apply) </p> <p></p>`,
      image: "",
      options: [
        `Proving that there exists a bijective function  \\( f: A \\rightarrow B \\).<br>&nbsp;`,
        `Proving that there exists a bijective function  \\( f: B \\rightarrow A \\).<br>&nbsp;`,
        `Proving that there exist two injective (one-to-one) functions  \\( f_{1} \\) :  \\( A \\rightarrow B \\) and  \\( f_{2}: B \\rightarrow A \\).<br>&nbsp;`,
        `Proving that there exist two surjective (onto) functions  \\( f_{1}: A \\rightarrow B \\) and  \\( f_{2}: B \\rightarrow A \\).`,
      ],
      answer: ["A", "B", "C", "D"],
      solution: `<img src="/images/quiz/wqt-toc11/7.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>Cantor's diagonalization argument constructs, for any given function  \\( f: \\mathbb{N} \\rightarrow \\mathcal{P}(\\mathbb{N}) \\), a associated diagonal set  \\( D_{f} \\subseteq \\mathbb{N} \\) defined explicitly as:<br> \$\$  D_{f}=\\{x \\in \\mathbb{N} \\mid x \\notin f(x)\\}  \$\$<br>Let  \\( \\mathbb{N}=\\{0,1,2,3, \\ldots\\} \\) denote the set of natural numbers. Consider the following two functions from  \\( \\mathbb{N} \\) to its power set  \\( \\mathcal{P}(\\mathbb{N}) \\) :<br><br> \\( f_{1}(x)=\\{y \\in \\mathbb{N} \\mid y \\) has the same parity as  \\( x\\} \\quad \\) (i.e., both are even or both are odd)<br><br> \\( f_{2}(x)=\\{y \\in \\mathbb{N} \\mid y&gt;x\\} \\) <br><br>Which of the following statements regarding their diagonal sets  \\( D_{f_{1}} \\) and  \\( D_{f_{2}} \\) is/are true? (Select all that apply) </p> <p></p>`,
      image: "",
      options: [
        `The diagonal set  \\( D_{f_{1}} \\) is empty (i.e.,  \\( D_{f_{1}}=\\emptyset \\) ).<br>&nbsp;`,
        `\\( 1 \\in D_{f_{2}} \\).<br>&nbsp;`,
        `The diagonal set  \\( D_{f_{2}} \\) is countably infinite.<br>&nbsp;`,
        `The diagonal set  \\( D_{f_{2}} \\) contains all natural numbers except 0 .`,
      ],
      answer: ["A", "B", "C"],
      solution: `<img src="/images/quiz/wqt-toc11/8.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>Let  \\( \\mathbb{N}=\\{0,1,2,3, \\ldots\\} \\) denote the set of natural numbers, and let  \\( \\mathcal{P}(\\mathbb{N}) \\) denote its power set. Which of the following functions successfully serves as a valid witness to establish the cardinality relationship  \\( |\\mathbb{N}| \\leq|\\mathcal{P}(\\mathbb{N})| \\) ? (Select all that apply) </p> <p></p>`,
      image: "",
      options: [
        `\\( f_{A}: \\mathbb{N} \\rightarrow \\mathcal{P}(\\mathbb{N}) \\quad \\) where  \\( \\quad f_{A}(x)=x^{2} \\)<br>&nbsp;`,
        `\\( f_{B}: \\mathbb{N} \\rightarrow \\mathcal{P}(\\mathbb{N}) \\) where \\( f_{B}(x)=\\left\\{x^{2}\\right\\} \\)<br>&nbsp;`,
        `\\( f_{C}: \\mathbb{N} \\rightarrow \\mathcal{P}(\\mathbb{N}) \\quad \\) where  \\( \\quad f_{C}(x)=\\left\\{y \\in \\mathbb{N} \\mid y \\neq x^{2}\\right\\} \\) <br>&nbsp;`,
        `\\( f_{D}: \\mathbb{N} \\rightarrow \\mathcal{P}(\\mathbb{N}) \\) where \\( f_{D}(x)=\\{x, x+1\\} \\)`,
      ],
      answer: ["B", "C", "D"],
      solution: `<img src="/images/quiz/wqt-toc11/9.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>Let  \\( \\mathbb{Z}^{+} \\)denote the set of positive integers, and let  \\( \\aleph_{0} \\) represent its cardinality (countably infinite). For any arbitrary non-empty sets  \\( A, B \\), and  \\( C \\), let  \\( |A| \\) denote the cardinality of set  \\( A \\), and let  \\( A-B \\) denote the set difference.<br><br>Which of the following is/are true? </p> <p></p>`,
      image: "",
      options: [
        `If  \\( A \\) is an infinite set, then there exists a subset  \\( S \\subseteq A \\) such that  \\( |S|=\\aleph_{0} \\).<br>&nbsp;`,
        `There is no infinite set  \\( A \\) such that  \\( |A|&lt;\\aleph_{0} \\).<br>&nbsp;`,
        `The set cardinality relation  \\( \\leq \\) satisfies transitivity: if  \\( |A| \\leq|B| \\) and  \\( |B| \\leq |C| \\), then  \\( |A| \\leq|C| \\).<br>&nbsp;`,
        `If  \\( A \\) is an uncountably infinite set and  \\( B \\) is a countable set, then the set difference  \\( A-B \\) must be uncountably infinite.`,
      ],
      answer: ["A", "B", "C", "D"],
      solution: `<img src="/images/quiz/wqt-toc11/10.png" style="max-width: 75%;">`
    },
  ]
});


registerTest({
  series: "weekly-cs-gate-2027",
  name: "WQT - Theory of Computation-12 | Pumping Lemma",
  date: "Oct 01, 2026",
  questions: [
    {
      marks: 1,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>Which of the following is/are false?</p> <p></p>`,
      image: "",
      options: [
        `If  \\( L \\) satisfies the pumping lemma, then  \\( L \\) may or may not be regular.<br>&nbsp;`,
        `If  \\( L \\) does not satisfy the pumping lemma, then \\( L \\) is non-regular.<br>&nbsp;`,
        `If  \\( L \\) is non-regular, then it does not satisfy the pumping lemma.<br>&nbsp;`,
        `If  \\( L \\) is regular, then it satisfies the pumping lemma.`,
      ],
      answer: ["C"],
      solution: `<img src="/images/quiz/wqt-toc12/1.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0,
      type: "NAT",
      text: `<p>Let  \\( A \\) be the minimum pumping length of the string \\( 0^{*} 1^{*} \\) and  \\( B \\) be the minimum pumping length of the string \\( 00^{*} \\). What is the value of  \\( A+B \\)? </p>`,
      image: "",
      options: [],
      answer: "3",
      solution: `<img src="/images/quiz/wqt-toc12/2.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0,
      type: "NAT",
      text: `<p>Your GO Classes friend is trying to prove that the language  \\( ww^{R} \\), the language of palindromes, is not regular. For pumping length  \\( p \\) he chooses the string  \\( S=01^{p} 1^{p} 0 \\), which is a palindrome. Can he use the pumping lemma for regular languages to prove that this language is not regular? Answer  \\( 1 \\) if yes, else  \\( 0 \\). </p>`,
      image: "",
      options: [],
      answer: "0",
      solution: `<img src="/images/quiz/wqt-toc12/3.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0,
      type: "NAT",
      text: `<p></p> <p>Which of the following is/are true?</p> <ol style="list-style-type:upper-alpha"> <li>A regular language accepted by an  \\( NFA \\) with  \\( n \\) states has pumping length  \\( n \\)<br>&nbsp; </li> <li>If  \\( L \\) is a finite language and the length of the longest string in  \\( L \\) is  \\( m \\), then the minimum pumping length of  \\( L \\) is  \\( \\mathrm{m}+1 \\)<br>&nbsp; </li> <li>If the length of the shortest string in a regular language  \\( L \\) is  \\( k \\), then the minimum pumping length of  \\( L \\) must be greater than  \\( k \\).<br>&nbsp; </li> <li>If  \\( p \\) is a pumping length for a regular language  \\( L \\), then  \\( p+1 \\) is also a pumping length for  \\( L \\). </li> </ol> <p></p>`,
      image: "",
      options: [],
      answer: "null",
      solution: `<img src="/images/quiz/wqt-toc12/4.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>Which of the following is false?</p> <p></p>`,
      image: "",
      options: [
        `If a regular language  \\( L \\) has minimum pumping length  \\( p \\), then any  \\( DFA \\) accepting  \\( L \\) must have at least  \\( p \\) states.<br>&nbsp;`,
        `The minimum pumping length for regular language  \\( \\{0011\\} \\) is  \\( 5 \\).<br>&nbsp;`,
        `On an input string of length  \\( k \\), every  \\( DFA \\) goes through a unique sequence of  \\( \\mathrm{k}+1 \\) states during its computation.<br>&nbsp;`,
        `The minimum pumping length for regular expression  \\( 001+0^{*} 1^{*} \\) is  \\( 2 \\).`,
      ],
      answer: "D",
      solution: `<img src="/images/quiz/wqt-toc12/5.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p>Let  \\( L=\\left\\{0^{n} 1^{m} 0^{n} \\mid m, n \\geq 0\\right\\} \\) be a language over the alphabet  \\( \\Sigma=\\{0,1\\} \\). To prove that  \\( L \\) is not regular using the Pumping Lemma by contradiction, we assume  \\( L \\) is regular and let  \\( p \\) be the pumping length.<br><br>Which of the following choices of string can be used to complete the proof by contradiction? </p> <p></p>`,
      image: "",
      options: [
        `\\( 00000100000 \\)<br>&nbsp;`,
        `\\( 0^{p} 10^{p} \\)<br>&nbsp;`,
        `\\( (010)^{p} \\)<br>&nbsp;`,
        `\\( 0^{p+1} 1^{p} 0^{p} \\)`,
      ],
      answer: "B",
      solution: `<img src="/images/quiz/wqt-toc12/6.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p> \\( \\textbf{Theorem:} \\)  \\( L=\\left\\{0^{n} 1^{n} \\mid n \\geq 0\\right\\} \\) is not regular.<br><br> \\( \\textbf{Proof:} \\) Assume (towards contradiction) that  \\( L \\) is regular. Then the pumping lemma applies to \\( L \\). Let  \\( p \\) be the pumping length. Choose  \\( s \\) to be the string ____,  \\( |s| \\geq p \\). The pumping lemma guarantees  \\( s \\) can be divided into parts  \\( x y z \\) s.t. for any  \\( i \\geq 0, x y^{i} z \\) is in  \\( L \\), and that  \\( |y|&gt;0 \\) and  \\( |x y| \\leq p \\). But if we let  \\( i= \\) ____, we get the string which is not in \\( L \\), a contradiction. Therefore the assumption is false, and  \\( L \\) is not regular.  \\( Q.E.D \\).<br><br>Which values of  \\( s \\) and  \\( i \\) should not be chosen in the proof?<br>&nbsp; </p> <p></p>`,
      image: "",
      options: [
        `\\( s=0^{p} 1^{p}, i=1 \\)<br>&nbsp;`,
        `\\( s=010101, i=0 \\)<br>&nbsp;`,
        `\\( s=000000111111, i=6 \\)<br>&nbsp;`,
        `\\( s=1^{p} 0^{p}, i=5 \\)`,
      ],
      answer: ["A", "B", "C", "D"],
      solution: `<img src="/images/quiz/wqt-toc12/7.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p> \\( \\textbf{Theorem:} \\)  \\( L=\\left\\{w w^{R} \\mid w^{R}\\right. \\) is the reverse of  \\( w \\) and  \\( \\left.w \\in\\{0,1\\}^{*}\\right\\} \\) is not regular.<br><br> \\( \\textbf{Proof:} \\)&nbsp;Assume (towards contradiction) that  \\( L \\) is regular. Then the pumping lemma applies to \\( L \\). Let  \\( p \\) be the pumping length. Choose  \\( s \\) to be the string ____,  \\( |s| \\geq p \\). The pumping lemma guarantees  \\( s \\) can be divided into parts  \\( x y z \\) s.t. for any  \\( i \\geq 0, x y^{i} z \\) is in  \\( L \\), and that  \\( |y|&gt;0 \\) and  \\( |x y| \\leq p \\). But if we let  \\( i= \\) ____, we get the string which is not in \\( L \\), a contradiction. Therefore the assumption is false, and  \\( L \\) is not regular.  \\( Q.E.D. \\)<br><br>Which of the following choices of \\( s \\) and  \\( i \\) makes the proof correct? </p> <p></p>`,
      image: "",
      options: [
        `\\( s=000000111111, i=6 \\)<br>&nbsp;`,
        `\\( s=0^{p} 0^{p}, i=2 \\)<br>&nbsp;`,
        `\\( s=0^{p} 110^{p}, i=2 \\)<br>&nbsp;`,
        `\\( s=0^{p} 10^{p}, i=3 \\)`,
      ],
      answer: ["C"],
      solution: `<img src="/images/quiz/wqt-toc12/8.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>Consider the following two statements:<br><br> \\( \\mathbf{S_1:} \\) If a regular language  \\( L \\) has at least one string whose length lies between  \\( n \\) and  \\( 2 n-1 \\) (inclusive) where  \\( n \\) is the number of states in a  \\( \\text{DFA} \\)  \\( D \\) (where  \\( L(D)=L \\) ), then  \\( L \\) is infinite.<br><br> \\( \\mathbf{S_2:} \\) The set of strings accepted by a \\( \\text{DFA} \\) with n states is non-empty iff the DFA accepts a string of length strictly less than  \\( n \\).<br><br>Which of the following is correct? </p> <p></p>`,
      image: "",
      options: [
        `\\( S_1 \\) is false and  \\( S_2 \\) is false<br>&nbsp;`,
        `\\( S_1 \\) is true and  \\( S_2 \\) is false<br>&nbsp;`,
        `\\( S_1 \\) is false and  \\( S_2 \\) is true<br>&nbsp;`,
        `\\( S_1 \\) is true and  \\( S_2 \\) is true`,
      ],
      answer: ["D"],
      solution: `<img src="/images/quiz/wqt-toc12/9.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>We need to prove that the language  \\( L=\\{w \\mid w \\) has equal number of  \\( 0 \\)'s and  \\( 1 \\)'s  \\( \\} \\) is not regular.<br><br>We are using the Pumping Lemma to prove  \\( L \\) is non-regular. Suppose length  \\( p \\) was given. Which of the following  \\( w \\) 's can we choose for our proof?<br>&nbsp; </p> <p></p>`,
      image: "",
      options: [
        `\\( 0^{\\lfloor p/2 \\rfloor}1^{\\lfloor p/2 \\rfloor} \\)<br>&nbsp;`,
        `\\( (01)^p \\)<br>&nbsp;`,
        `\\( (00)^p(11)^p \\)<br>&nbsp;`,
        `\\( 0^{p-1}1^{p-1} \\)`,
      ],
      answer: ["C"],
      solution: `<img src="/images/quiz/wqt-toc12/10.png" style="max-width: 75%;">`
    },
  ]
});

