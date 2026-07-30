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
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>In digital logic, if \\( A\\oplus B=C \\), then which one of the following is true? </p> <p></p>`,
      image: "",
      options: [
        `\\( A\\oplus C=B \\)`,
        `\\( B\\oplus C=A \\)`,
        `\\( A\\oplus B\\oplus C=0 \\)`,
        `Both (A) and (B)`,
      ],
      answer: "N",
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
      answer: ["A"],
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
      answer: ["A"],
      solution: `<img src="/images/quiz/wqt-dl2/10.png" style="max-width: 100%;">`
    },
  ]
});

