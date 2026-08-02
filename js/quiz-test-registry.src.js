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
