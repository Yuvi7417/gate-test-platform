registerTest({
  series: "series",
  name: "quiz",
  date: "Oct 01, 2026",
  questions: [
    {
      marks: 1,
      neg: 0,
      type: "MCQ",
      text: ` <p data-start="4387" data-end="4494">Consider a system using a <strong data-start="4413" data-end="4437">two-level page table</strong>. Assume the required page is present in physical memory.</p> <p data-start="4496" data-end="4591">How many main-memory accesses are required for a virtual-address access when a TLB miss occurs?</p> <p data-start="4593" data-end="4655">Include the final access to the requested instruction or data. </p> `,
      image: "",
      options: [
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>4</mn> </math><br>&nbsp;`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>3</mn> </math><br>&nbsp;`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>2</mn> </math><br>&nbsp;`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>1</mn> </math>`,
      ],
      answer: "B",
      solution: `<img src="/images/quiz/test_img/1.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0,
      type: "MCQ",
      text: ` <p data-start="2523" data-end="2712">If an instruction takes <math xmlns="http://www.w3.org/1998/Math/MathML"> <mi>p</mi> </math> microseconds and a page fault takes an additional <math xmlns="http://www.w3.org/1998/Math/MathML"> <mi>q</mi> </math> microseconds, the effective instruction time if, on average, a page fault occurs every <math xmlns="http://www.w3.org/1998/Math/MathML"> <mi>r</mi> </math> instructions is: </p> `,
      image: "",
      options: [
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mstyle displaystyle="true" scriptlevel="0"> <mfrac> <mrow> <mi>p</mi> <mo>+</mo> <mi>q</mi> </mrow> <mi>r</mi> </mfrac> </mstyle> </math><br>&nbsp;`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mi>p</mi> <mo>+</mo> <mo stretchy="false">(</mo> <mi>q</mi> <mo>×</mo> <mi>r</mi> <mo stretchy="false">)</mo> </math><br>&nbsp;`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mi>p</mi> <mo>+</mo> <mstyle displaystyle="true" scriptlevel="0"> <mfrac> <mi>q</mi> <mi>r</mi> </mfrac> </mstyle> </math><br>&nbsp;`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mo stretchy="false">(</mo> <mi>p</mi> <mo>+</mo> <mi>q</mi> <mo stretchy="false">)</mo> <mo>×</mo> <mi>r</mi> </math>`,
      ],
      answer: "C",
      solution: `<img src="/images/quiz/test_img/2.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0,
      type: "MCQ",
      text: ` <p data-start="277" data-end="499">Consider a three level paging scheme with a TLB. Assume no page fault occurs. It takes <math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>1</mn> <mtext>&nbsp;</mtext> <mtext>ns</mtext> </math> to search the TLB and <math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>100</mn> <mtext>&nbsp;</mtext> <mtext>ns</mtext> </math> to access the physical memory. If the TLB hit ratio is <math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>90</mn> <mi mathvariant="normal">%</mi> </math>, what is the effective memory access time?</p> `,
      image: "",
      options: [
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>101</mn> <mtext>&nbsp;</mtext> <mtext>ns</mtext> </math><br>&nbsp;`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>111</mn> <mtext>&nbsp;</mtext> <mtext>ns</mtext> </math><br>&nbsp;`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>121</mn> <mtext>&nbsp;</mtext> <mtext>ns</mtext> </math><br>&nbsp;`,
        `<math xmlns="http://www.w3.org/1998/Math/MathML"> <mn>131</mn> <mtext>&nbsp;</mtext> <mtext>ns</mtext> </math>`,
      ],
      answer: "D",
      solution: `<img src="/images/quiz/test_img/3.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0,
      type: "MCQ",
      text: ` <p data-start="1159" data-end="1247">Which of the following statements about small <math xmlns="http://www.w3.org/1998/Math/MathML"> <mo stretchy="false">(</mo> <mn>4</mn> <mtext>&nbsp;</mtext> <mtext>KB</mtext> <mo stretchy="false">)</mo> </math> and large <math xmlns="http://www.w3.org/1998/Math/MathML"> <mo stretchy="false">(</mo> <mn>4</mn> <mtext>&nbsp;</mtext> <mtext>MB</mtext> <mo stretchy="false">)</mo> </math> pages are correct?</p> `,
      image: "",
      options: [
        `Large pages allow for a more efficient use of the TLB.<br>&nbsp;`,
        `Accessing a large page, in the case of a TLB miss, would be slower than accessing a small page.<br>&nbsp;`,
        `Large pages suffer from internal fragmentation.<br>&nbsp;`,
        `Large pages suffer from external fragmentation.`,
      ],
      answer: "A",
      solution: `<img src="/images/quiz/test_img/4.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0,
      type: "MCQ",
      text: ` <p data-start="3354" data-end="3386">What caching is done in the TLB?</p> `,
      image: "",
      options: [
        `Virtual Address <math xmlns="http://www.w3.org/1998/Math/MathML"> <mo stretchy="false">→</mo> </math> Physical Address<br>&nbsp;`,
        `Virtual Page Number <math xmlns="http://www.w3.org/1998/Math/MathML"> <mo stretchy="false">→</mo> </math> Physical Address<br>&nbsp;`,
        `Virtual Page Number <math xmlns="http://www.w3.org/1998/Math/MathML"> <mo stretchy="false">→</mo> </math> Physical Page Number<br>&nbsp;`,
        `Physical Page Number <math xmlns="http://www.w3.org/1998/Math/MathML"> <mo stretchy="false">→</mo> </math> Virtual Page Number`,
      ],
      answer: "C",
      solution: `<img src="/images/quiz/test_img/5.png" style="max-width: 75%;">`
    },
  ]
});
