registerTest({
  series: "weekly-cs-gate-2027",
  name: "WQT - Digital logic-1|Boolean algebra",
  date: "Jul 30, 2026",
  questions: [
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p>
            <p>In the circuit shown below, which logic function does this circuit generate?<br><img alt="" src="/images/quiz/wqt-dl1/q1_img1.png" style="max-width: 100%;"><br>&nbsp;</p>
            
            <p></p>`,
      image: "",
      options: [
        `OR`,
        `AND`,
        `NOR`,
        `NAND`,
      ],
      answer: "A",
      solution: ``
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p>
            <p>The dual of the Boolean function 
                \\( \\boldsymbol{x}+\\boldsymbol{y} \\boldsymbol{z} \\) is:
            </p>
            
            <p></p>`,
      image: "",
      options: [
        `\\( \\bar{x}(\\bar{y}+\\bar{z}) \\)`,
        `\\( x(y+z) \\)`,
        `\\( x+y z \\)`,
        `\\( \\bar{x}+\\bar{y} \\bar{z} \\)`,
      ],
      answer: "B",
      solution: ``
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p>
            <p>Applying DeMorgan's theorem to the expression 
                \\( \\overline{\\overline{(\\boldsymbol{X}+\\boldsymbol{Y})}+\\overline{\\boldsymbol{Z}}} \\)
                , we get
            </p>
            
            <p></p>`,
      image: "",
      options: [
        `\\( (X+Y) Z \\)`,
        `\\( (\\bar{X}+\\bar{Y}) \\bar{Z} \\)`,
        `\\( (\\bar{X}+\\bar{Y}) Z \\)`,
        `\\( (X+Y) \\bar{Z} \\)`,
      ],
      answer: "A",
      solution: ``
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p>
            <p>Refer to the following figure, If 
                \\( \\mathbf{S}_{1}=\\mathbf{1} \\) and 
                \\( \\mathbf{S}_{2}=\\mathbf{0} \\) what will be the
                logic state at the output 
                \\( \\mathbf{X} \\) ?
            </p>
            <p><br><img alt="" src="/images/quiz/wqt-dl1/q4_img2.png" style="max-width: 100%;"></p>
            <p>&nbsp;</p>
            
            <p></p>`,
      image: "",
      options: [
        `\\( \\mathbf{X}=\\mathbf{A} \\)`,
        `\\( \\mathbf{X}=\\mathbf{B} \\)`,
        `\\( \\mathbf{X}=\\mathbf{C} \\)`,
        `\\( \\mathbf{X}=\\mathbf{D} \\)`,
      ],
      answer: "C",
      solution: ``
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p>
            <p>Refer to the following figure. If 
                \\( \\mathbf{A}=\\mathbf{0} \\) and 
                \\( \\mathbf{B}=\\mathbf{1} \\), what will be the logic
                states at 
                \\( \\mathbf{X}, \\mathbf{Y} \\) and 
                \\( \\mathbf{Z} \\) ?<br><br><img alt="" src="/images/quiz/wqt-dl1/q5_img3.png" style="max-width: 100%;"><br>&nbsp;
            </p>
            
            <p></p>`,
      image: "",
      options: [
        `\\( \\mathrm{X}=1, \\mathrm{Y}=1, \\mathrm{Z}=0 \\)`,
        `\\( \\mathrm{X}=1, Y=0, Z=0 \\)`,
        `\\( \\mathrm{X}=0, \\mathrm{Y}=0, \\mathrm{Z}=1 \\)`,
        `\\( X=0, Y=1, Z=0 \\)`,
      ],
      answer: "C",
      solution: ``
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p>
            <p>The simplification of the Boolean expression 
                \\( (\\overline{\\overline{\\boldsymbol{A}} \\boldsymbol{B} \\overline{\\boldsymbol{C}}})+(\\overline{\\boldsymbol{A} \\overline{\\boldsymbol{B}} \\boldsymbol{C}}) \\)
                is
            </p>
            <p>&nbsp;</p>
            
            <p></p>`,
      image: "",
      options: [
        `0`,
        `1`,
        `\\( \\mathbf{A} \\)`,
        `\\( \\mathbf{B C} \\)`,
      ],
      answer: "B",
      solution: ``
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p>
            <p>In the given truth table, 
                \\( f(x,y) \\) represent the Boolean function.<br>
                \$\$ \\begin{array}{|c|c|c|} \\hline x &amp; y &amp; f(x,y) \\\\ \\hline 0 &amp; 0 &amp; 1 \\\\ \\hline 0 &amp; 1 &amp; 0 \\\\ \\hline 1 &amp; 0 &amp; 0 \\\\ \\hline 1 &amp; 1 &amp; 1 \\\\ \\hline \\end{array} \$\$
            </p>
            
            <p></p>`,
      image: "",
      options: [
        `\\( x \\leftrightarrow y \\)`,
        `\\(  x \\wedge y \\)`,
        `\\( x \\vee y \\)`,
        `\\( x \\rightarrow y \\)`,
      ],
      answer: "A",
      solution: ``
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p>
            <p>
                \\( (A+C’)(B’+C’) \\) simplifies to
            </p>
            
            <p></p>`,
      image: "",
      options: [
        `\\( AC’+B’ \\)<br>&nbsp;`,
        `\\( C(A’+B’) \\)<br>&nbsp;`,
        `\\( BC’+A \\)<br>&nbsp;`,
        `\\( AB’+C’ \\)`,
      ],
      answer: "D",
      solution: ``
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p>
            <p>In digital logic, if 
                \\( A\\oplus B=C \\), then which one of the following is
                true?
            </p>
            
            <p></p>`,
      image: "",
      options: [
        `\\( A\\oplus C=B \\)`,
        `\\( B\\oplus C=A \\)`,
        `\\( A\\oplus B\\oplus C=0 \\)`,
        `Both (A) and (B)`,
      ],
      answer: "N",
      solution: ``
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p>
            <p>In Boolean algebra 
                \\( 1+1+1+1\\dots\\dots 800 \\) times ones 
                \\( =&nbsp;  \\) ________&nbsp; .
            </p>
            
            <p></p>`,
      image: "",
      options: [
        `\\( 1 \\)`,
        `\\( 0 \\)`,
        `\\( 11 \\)`,
        `\\( 800 \\)`,
      ],
      answer: "A",
      solution: ``
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p>
            <p>Applying DeMorgan's Law to 
                \\( f=\\overline{\\overline{\\overline{A B}+\\bar{C}}(E+\\bar{D}}) \\) will
                result in:
            </p>
            
            <p></p>`,
      image: "",
      options: [
        `\\( f=\\bar{A}+\\bar{B}+\\bar{C}+\\bar{E}+D \\)`,
        `\\( f=\\bar{A} \\bar{B} \\bar{C}+E \\bar{D} \\)`,
        `\\( f=\\bar{A} \\bar{B} \\bar{C}+(E+\\bar{D}) \\)`,
        `\\( f=\\bar{A}+\\bar{B}+\\bar{C}+\\bar{E} D \\)`,
      ],
      answer: "D",
      solution: ``
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p>
            <p>The Boolean function obtained by adding an inverter to each and every input of an 
                \\( \\text{AND} \\) gate is:
            </p>
            
            <p></p>`,
      image: "",
      options: [
        `\\( \\text{OR} \\)`,
        `\\( \\text{XOR} \\)`,
        `\\( \\text{NAND} \\)`,
        `\\( \\text{NOR} \\)`,
      ],
      answer: "D",
      solution: ``
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p>
            <p>What does the following circuit evaluate to?<br><img alt="" src="/images/quiz/wqt-dl1/q13_img4.png" style="max-width: 100%;"></p>
            
            <p></p>`,
      image: "",
      options: [
        `0`,
        `1`,
        `\\( A^{\\prime} \\)`,
        `\\( A \\)`,
      ],
      answer: "C",
      solution: ``
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p>
            <p>The logic circuit shown can be minimized to<br><img alt="" src="/images/quiz/wqt-dl1/q14_img5.png" style="max-width: 100%;"></p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p><br><img alt="" src="/images/quiz/wqt-dl1/q14_img6.png" style="max-width: 100%;"></p>
            
            <p></p>`,
      image: "",
      options: [
        `\\( \\mathbf{A} \\)`,
        `\\( \\mathbf{B} \\)`,
        `\\( \\mathbf{C} \\)`,
        `\\( \\mathbf{D} \\)`,
      ],
      answer: "D",
      solution: ``
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p>
            <p>Simplification of the Boolean expression 
                \\( \\boldsymbol{A B}+\\boldsymbol{A B C}+\\boldsymbol{A B C D}+\\boldsymbol{A B C D E}+\\boldsymbol{A B C D E F} \\)
                yields which of the following results?
            </p>
            
            <p></p>`,
      image: "",
      options: [
        `\\( \\mathrm{AB} \\)`,
        `\\( \\mathrm{AB}+\\mathbf{C D}+\\mathbf{E F} \\)`,
        `\\( A B C D E F \\)`,
        `\\( \\mathbf{A}+\\mathbf{B}+\\mathbf{C}+\\mathbf{D}+\\mathbf{E}+\\mathbf{F} \\)`,
      ],
      answer: "A",
      solution: ``
    },
  ]
});
