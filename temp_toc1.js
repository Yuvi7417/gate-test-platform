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
