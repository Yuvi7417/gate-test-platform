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
        `<br>&nbsp;`,
        `<br>&nbsp;`,
        `<br>&nbsp;`,
        ``,
      ],
      answer: "B",
      solution: `<img src="/images/quiz/test_img/1.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0,
      type: "MCQ",
      text: ` <p data-start="2523" data-end="2712">If an instruction takes  microseconds and a page fault takes an additional  microseconds, the effective instruction time if, on average, a page fault occurs every instructions is: </p> `,
      image: "",
      options: [
        `<br>&nbsp;`,
        `<br>&nbsp;`,
        `<br>&nbsp;`,
        ``,
      ],
      answer: "C",
      solution: `<img src="/images/quiz/test_img/2.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0,
      type: "MCQ",
      text: ` <p data-start="277" data-end="499">Consider a three level paging scheme with a TLB. Assume no page fault occurs. It takes  to search the TLB and  to access the physical memory. If the TLB hit ratio is , what is the effective memory access time?</p> `,
      image: "",
      options: [
        `<br>&nbsp;`,
        `<br>&nbsp;`,
        `<br>&nbsp;`,
        ``,
      ],
      answer: "D",
      solution: `<img src="/images/quiz/test_img/3.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0,
      type: "MCQ",
      text: ` <p data-start="1159" data-end="1247">Which of the following statements about small  and large  pages are correct?</p> `,
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
        `Virtual Address  Physical Address<br>&nbsp;`,
        `Virtual Page Number  Physical Address<br>&nbsp;`,
        `Virtual Page Number  Physical Page Number<br>&nbsp;`,
        `Physical Page Number  Virtual Page Number`,
      ],
      answer: "C",
      solution: `<img src="/images/quiz/test_img/5.png" style="max-width: 75%;">`
    },
  ]
});
