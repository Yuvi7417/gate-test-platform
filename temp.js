registerTest({
  series: "weekly-cs-gate-2027",
  name: "WQT - C-Programming-2 | Functions, Storage classes & Loops",
  date: "Oct 01, 2026",
  questions: [
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p>
            <p>As shown below, the file 
                \\( f.c \\) defines a function f whose code refers to
                the variable 
                \\( x \\) that is not a local variable or a parameter.
                The file 
                \\( g.c \\) defines a function 
                \\( g \\) whose code refers to the variable 
                \\( x \\) that is not a local variable or a parameter.
            </p>
            <pre class="prettyprint linenums lang-c_cpp prettyprinted" data-pbcklang="c_cpp" data-pbcktabsize="4" style=""><ol class="linenums"><li class="L0"><span class="com">// file f.c</span></li><li class="L1"><span class="com">// declaration for x</span></li><li class="L2"><span class="pln">&nbsp;</span></li><li class="L3"><span class="kwd">void</span><span class="pln"> f</span><span class="pun">(</span><span class="kwd">int</span><span class="pln"> a</span><span class="pun">){</span></li><li class="L4"><span class="pln">    </span><span class="pun">...</span></li><li class="L5"><span class="pln">    x </span><span class="pun">=</span><span class="pln"> </span><span class="pun">...</span></li><li class="L6"><span class="pun">}</span></li></ol></pre>
            <pre class="prettyprint linenums lang-c_cpp prettyprinted" data-pbcklang="c_cpp" data-pbcktabsize="4" style=""><ol class="linenums"><li class="L0"><span class="com">// file g.c</span></li><li class="L1"><span class="com">// declaration for x</span></li><li class="L2"><span class="pln">&nbsp;</span></li><li class="L3"><span class="kwd">void</span><span class="pln"> g</span><span class="pun">(</span><span class="kwd">char</span><span class="pun">*</span><span class="pln"> p</span><span class="pun">){</span></li><li class="L4"><span class="pln">    </span><span class="pun">...</span></li><li class="L5"><span class="pln">    x </span><span class="pun">=</span><span class="pln"> </span><span class="pun">...</span></li><li class="L6"><span class="pun">}</span></li></ol></pre>
            <p>The following table below shows how the variable x is defined in each file. For each row in the table,
                indicate in Column (c) whether the two functions at run-time refer to the SAME identifier (memory
                location) or to DIFFERENT identifiers (memory locations)<br>
                \$\$ \\begin{array} {|l|l|c|} \\hline&nbsp;\\qquad \\textbf{Column A}&nbsp;&amp; \\qquad \\textbf{Column B} &amp; \\textbf{Column C} \\\\&nbsp;\\textbf{declaration in f.c} &amp;&nbsp;\\textbf{declaration in g.c} &amp; \\textbf{SAME or DIFFERENT} \\\\\\hline&nbsp; \\text{int x;} &amp; \\text{extern int x;} &amp; {\\color{Red} {\\textbf{SAME}}} \\\\\\hline&nbsp;&nbsp; \\text{int x = 0;} &amp; \\text{static int x;} &amp; \\\\\\hline \\text{static int x;} &amp; \\text{static int x;} &amp; \\\\\\hline \\text{static int x;} &amp; \\text{extern int x = 0;} &amp; \\\\\\hline &nbsp;\\end{array} \$\$
            </p>
            <p>The first row of column C has been filled for hints. What will be in the 
                \\( 2 \\)nd, 
                \\( 3 \\)rd, and 
                \\( 4 \\)th row of Column C, respectively?
            </p>
            
            <p></p>`,
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
      text: `<p></p>
            <p>Consider the below program written into 
                \\( 2 \\) files.
            </p>
            <p><strong><img alt="" src="/images/quiz/wqt-cprog2/q2_img1.png" style="max-width: 75%;"></strong>
            </p>
            <p>Note that compilation of&nbsp;f
                \\( 1 \\).c and f
                \\( 2 \\).c happens independently of each other.
            </p>
            <p>Which of the following is TRUE?</p>
            
            <p></p>`,
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
      text: `<p></p>
            <p>Consider a function is_greater() given below. Mark all option(s) which return 
                \\( 1 \\).
            </p>
            <pre class="prettyprint linenums lang-c_cpp prettyprinted" data-pbcklang="c_cpp" data-pbcktabsize="4" style=""><ol class="linenums"><li class="L0"><span class="kwd">int</span><span class="pln"> is_greater</span><span class="pun">(</span><span class="kwd">unsigned</span><span class="pln"> </span><span class="kwd">int</span><span class="pln"> x</span><span class="pun">,</span><span class="pln"> </span><span class="kwd">unsigned</span><span class="pln"> </span><span class="kwd">int</span><span class="pln"> y</span><span class="pun">)</span></li><li class="L1"><span class="pun">{</span></li><li class="L2"><span class="pln">    </span><span class="kwd">if</span><span class="pun">(</span><span class="pln">x</span><span class="pun">-</span><span class="pln">y </span><span class="pun">&gt;</span><span class="pln"> </span><span class="lit">0</span><span class="pun">)</span></li><li class="L3"><span class="pln">        </span><span class="kwd">return</span><span class="pln"> </span><span class="lit">1</span><span class="pun">;</span></li><li class="L4"><span class="pln">    </span><span class="kwd">else</span><span class="pln"> </span></li><li class="L5"><span class="pln">        </span><span class="kwd">return</span><span class="pln"> </span><span class="lit">0</span><span class="pun">;</span></li><li class="L6"><span class="pun">}</span></li></ol></pre>
            
            <p></p>`,
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
      text: `<p></p>
            <p>Which of the following(s) will evaluate to true</p>
            
            <p></p>`,
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
      text: `<p></p>
            <p>What will be the output printed by the following program?</p>
            <pre class="prettyprint linenums lang-c_cpp prettyprinted" data-pbcklang="c_cpp" data-pbcktabsize="4" style=""><ol class="linenums"><li class="L0"><span class="com">#include</span><span class="pln"> </span><span class="str">&lt;stdio.h&gt;</span></li><li class="L1"><span class="kwd">int</span><span class="pln"> main</span><span class="pun">()</span></li><li class="L2"><span class="pun">{</span></li><li class="L3"><span class="pln">    </span><span class="kwd">int</span><span class="pln"> i </span><span class="pun">=</span><span class="pln"> </span><span class="lit">1</span><span class="pun">;</span></li><li class="L4"><span class="pln">    </span><span class="kwd">for</span><span class="pun">(</span><span class="pln">i </span><span class="pun">=</span><span class="pln"> </span><span class="lit">0</span><span class="pun">;</span><span class="pln"> i</span><span class="pun">&lt;</span><span class="lit">10</span><span class="pun">;</span><span class="pln"> i</span><span class="pun">+</span><span class="lit">3</span><span class="pun">)</span></li><li class="L5"><span class="pln">    </span><span class="kwd">switch</span><span class="pun">(</span><span class="pln">i</span><span class="pun">)</span></li><li class="L6"><span class="pln">    </span><span class="pun">{</span></li><li class="L7"><span class="pln">        </span><span class="kwd">case</span><span class="pln"> </span><span class="lit">3</span><span class="pun">:</span></li><li class="L8"><span class="pln">            printf</span><span class="pun">(</span><span class="str">"Hi. This is case 3"</span><span class="pun">);</span></li><li class="L9"><span class="pln">            </span><span class="kwd">break</span><span class="pun">;</span></li><li class="L0"><span class="pln">        </span><span class="kwd">case</span><span class="pln"> </span><span class="lit">6</span><span class="pun">:</span></li><li class="L1"><span class="pln">            printf</span><span class="pun">(</span><span class="str">"Hi. This is case 6"</span><span class="pun">);</span></li><li class="L2"><span class="pln">            </span><span class="kwd">break</span><span class="pun">;</span></li><li class="L3"><span class="pln">            </span><span class="kwd">break</span><span class="pun">;</span></li><li class="L4"><span class="pln">        </span><span class="kwd">default</span><span class="pun">:</span></li><li class="L5"><span class="pln">            printf</span><span class="pun">(</span><span class="str">"Hi. This is default"</span><span class="pun">);</span></li><li class="L6"><span class="pln">            </span><span class="kwd">break</span><span class="pun">;</span></li><li class="L7"><span class="pln">    </span><span class="pun">}</span></li><li class="L8"><span class="pln">    </span><span class="kwd">return</span><span class="pln"> </span><span class="lit">0</span><span class="pun">;</span></li><li class="L9"><span class="pun">}</span></li></ol></pre>
            
            <p></p>`,
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
      text: `<p></p>
            <p>What will be the value printed by the following program?</p>
            <pre class="prettyprint linenums lang-c_cpp prettyprinted" data-pbcklang="c_cpp" data-pbcktabsize="4" style=""><ol class="linenums"><li class="L0"><span class="kwd">int</span><span class="pln"> i </span><span class="pun">=</span><span class="pln"> </span><span class="lit">10</span><span class="pun">;</span></li><li class="L1"><span class="pln">i </span><span class="pun">=</span><span class="pln"> </span><span class="pun">!</span><span class="pln">i </span><span class="pun">&gt;</span><span class="pln"> </span><span class="lit">14</span><span class="pun">;</span></li><li class="L2"><span class="pln">printf</span><span class="pun">(</span><span class="str">"%d"</span><span class="pun">,</span><span class="pln"> i</span><span class="pun">);</span></li></ol></pre>
            
            <p></p>`,
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
      text: `<p></p>
            <p>What will be the output?</p>
            <pre class="prettyprint linenums lang-c_cpp prettyprinted" data-pbcklang="c_cpp" data-pbcktabsize="4" style=""><ol class="linenums"><li class="L0"><span class="kwd">int</span><span class="pln"> a </span><span class="pun">=</span><span class="pln"> </span><span class="lit">4</span><span class="pun">,</span><span class="pln"> b </span><span class="pun">=</span><span class="lit">15</span><span class="pun">,</span><span class="pln"> c </span><span class="pun">=</span><span class="lit">29</span><span class="pun">;</span></li><li class="L1"><span class="kwd">if</span><span class="pun">(</span><span class="pln">c</span><span class="pun">&gt;</span><span class="pln">b</span><span class="pun">&gt;</span><span class="pln">a</span><span class="pun">)</span></li><li class="L2"><span class="pln">    printf</span><span class="pun">(</span><span class="str">"TRUE"</span><span class="pun">);</span></li><li class="L3"><span class="kwd">else</span></li><li class="L4"><span class="pln">    printf</span><span class="pun">(</span><span class="str">"FALSE"</span><span class="pun">);</span></li></ol></pre>
            
            <p></p>`,
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
      text: `<p></p>
            <p><br>If 
                \\( x, y, z, \\) and 
                \\( w \\) are declared as integer variables, which of
                the following expressions are 
                \\( \\text{NOT} \\) valid in 
                \\( C \\)?
            </p>
            
            <p></p>`,
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
      text: `<p></p>
            <p>What will be the output of the following C program?.<br>Here 
                \\( ?: \\) is a ternary operator which is right to
                left-associative.
            </p>
            <pre class="prettyprint linenums lang-c_cpp prettyprinted" data-pbcklang="c_cpp" data-pbcktabsize="4" style=""><ol class="linenums"><li class="L0"><span class="com">#include</span><span class="pln"> </span><span class="str">&lt;stdio.h&gt;</span></li><li class="L1"><span class="kwd">int</span><span class="pln"> main</span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span></li><li class="L2"><span class="pln">    </span><span class="kwd">int</span><span class="pln"> i </span><span class="pun">=</span><span class="lit">2</span><span class="pun">,</span><span class="pln"> j </span><span class="pun">=</span><span class="lit">1</span><span class="pun">;</span></li><li class="L3"><span class="pln">    </span><span class="kwd">if</span><span class="pln"> </span><span class="pun">(--</span><span class="pln">j </span><span class="pun">?</span><span class="pln"> </span><span class="pun">++</span><span class="pln">j</span><span class="pun">?</span><span class="pln"> i </span><span class="pun">:</span><span class="pln"> i</span><span class="pun">++</span><span class="pln"> </span><span class="pun">:</span><span class="pln"> i</span><span class="pun">--)</span></li><li class="L4"><span class="pln">    printf</span><span class="pun">(</span><span class="str">"%d%d\n"</span><span class="pun">,</span><span class="pln"> i</span><span class="pun">,</span><span class="pln"> j</span><span class="pun">);</span></li><li class="L5"><span class="pun">}</span></li></ol></pre>
            
            <p></p>`,
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
      text: `<p></p>
            <p>What is the value printed by the following program?</p>
            <pre class="prettyprint linenums lang-c_cpp prettyprinted" data-pbcklang="c_cpp" data-pbcktabsize="4" style=""><ol class="linenums"><li class="L0"><span class="kwd">int</span><span class="pln"> main</span><span class="pun">()</span></li><li class="L1"><span class="pun">{</span></li><li class="L2"><span class="pln">    </span><span class="kwd">int</span><span class="pln"> a </span><span class="pun">=</span><span class="pln"> </span><span class="lit">0</span><span class="pun">,</span><span class="pln"> b </span><span class="pun">=</span><span class="pln"> </span><span class="lit">1</span><span class="pun">,</span><span class="pln"> c </span><span class="pun">=</span><span class="pln"> </span><span class="lit">0</span><span class="pun">,</span><span class="pln"> d </span><span class="pun">=-</span><span class="lit">1</span><span class="pun">;</span></li><li class="L3"><span class="pln">    d </span><span class="pun">=</span><span class="pln"> </span><span class="pun">(++</span><span class="pln">a</span><span class="pun">)</span><span class="pln"> </span><span class="pun">&amp;&amp;</span><span class="pln"> </span><span class="pun">(--</span><span class="pln">b</span><span class="pun">)</span><span class="pln"> </span><span class="pun">&amp;&amp;</span><span class="pln"> </span><span class="pun">(++</span><span class="pln">c</span><span class="pun">)</span><span class="pln"> </span><span class="pun">||(--</span><span class="pln">a</span><span class="pun">);</span></li><li class="L4"><span class="pln">    printf</span><span class="pun">(</span><span class="str">"%d"</span><span class="pun">,</span><span class="pln"> d</span><span class="pun">);</span></li><li class="L5"><span class="pun">}</span></li></ol></pre>
            
            <p></p>`,
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
      text: `<p></p>
            <p>The statement</p>
            <pre class="prettyprint linenums lang-c_cpp prettyprinted" data-pbcklang="c_cpp" data-pbcktabsize="4" style=""><ol class="linenums"><li class="L0"><span class="kwd">while</span><span class="pln"> </span><span class="pun">(</span><span class="pln"> </span><span class="pun">--</span><span class="pln">counter </span><span class="pun">&gt;=</span><span class="pln"> </span><span class="lit">1</span><span class="pln"> </span><span class="pun">)</span></li><li class="L1"><span class="pln">counter </span><span class="pun">%</span><span class="pln"> </span><span class="lit">2</span><span class="pln"> </span><span class="pun">?</span><span class="pln"> printf</span><span class="pun">(</span><span class="str">"A"</span><span class="pun">)</span><span class="pln"> </span><span class="pun">:</span><span class="pln"> printf</span><span class="pun">(</span><span class="str">"B"</span><span class="pun">);</span></li></ol></pre>
            <p>can 
                \\( \\text{NOT} \\) be rewritten as
            </p>
            
            <p>&nbsp;</p>
            <p></p>`,
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
      text: `<p></p>
            <p>Professor Greg wants to give assignments to his students to write a 
                \\( C \\) program for the 
                \\( \\text{XOR5} \\) function. 
                \\( \\text{XOR5} \\) is a function that returns true if
                and only if 
                \\( \\text{EXACTLY} \\) one of the integers 
                \\( A \\) and 
                \\( B \\) is 
                \\( 5 \\).<br>Using which of the following
                condition(s), 
                \\( \\text{XOR5} \\) can be implemented?
            </p>
            
            <p></p>`,
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
      text: `<p></p>
            <p>Let the variables 
                \\( x,y, \\) and 
                \\( z \\), be of type int and assigned some values. The
                variable 
                \\( b1 \\) is initialized as follows:
            </p>
            <pre class="prettyprint linenums lang-c_cpp prettyprinted" data-pbcklang="c_cpp" data-pbcktabsize="4" style=""><ol class="linenums"><li class="L0"><span class="kwd">int</span><span class="pln"> b1 </span><span class="pun">=</span><span class="pln"> </span><span class="pun">(</span><span class="pln">x </span><span class="pun">&gt;</span><span class="pln"> z</span><span class="pun">)</span><span class="pln"> </span><span class="pun">&amp;&amp;</span><span class="pln"> </span><span class="pun">(</span><span class="pln">y </span><span class="pun">&gt;=</span><span class="pln"> z</span><span class="pun">);</span></li></ol></pre>
            <p>Variables b2, b3, b4, and b5 are initialized below.</p>
            <pre class="prettyprint linenums lang-c_cpp prettyprinted" data-pbcklang="c_cpp" data-pbcktabsize="4" style=""><ol class="linenums"><li class="L0"><span class="kwd">int</span><span class="pln"> b2 </span><span class="pun">=</span><span class="pln"> </span><span class="pun">(</span><span class="pln">x </span><span class="pun">&lt;=</span><span class="pln"> z</span><span class="pun">)</span><span class="pln"> </span><span class="pun">||</span><span class="pln"> </span><span class="pun">(</span><span class="pln">y </span><span class="pun">&lt;</span><span class="pln"> z</span><span class="pun">)</span><span class="pln"> </span></li><li class="L1"><span class="kwd">int</span><span class="pln"> b3 </span><span class="pun">=</span><span class="pln"> </span><span class="pun">!((</span><span class="pln">x </span><span class="pun">&lt;</span><span class="pln"> z</span><span class="pun">)</span><span class="pln"> </span><span class="pun">||</span><span class="pln"> </span><span class="pun">(</span><span class="pln">y </span><span class="pun">&lt;=</span><span class="pln"> z</span><span class="pun">))</span><span class="pln"> </span></li><li class="L2"><span class="kwd">int</span><span class="pln"> b4 </span><span class="pun">=</span><span class="pln"> </span><span class="pun">!((</span><span class="pln">x </span><span class="pun">&lt;</span><span class="pln"> z</span><span class="pun">)</span><span class="pln"> </span><span class="pun">&amp;&amp;</span><span class="pln"> </span><span class="pun">(</span><span class="pln">y </span><span class="pun">&gt;=</span><span class="pln"> z</span><span class="pun">))</span><span class="pln"> </span></li><li class="L3"><span class="kwd">int</span><span class="pln"> b5 </span><span class="pun">=</span><span class="pln"> </span><span class="pun">((</span><span class="pln">x </span><span class="pun">&gt;</span><span class="pln"> z</span><span class="pun">)</span><span class="pln"> </span><span class="pun">&amp;&amp;</span><span class="pln"> </span><span class="pun">(</span><span class="pln">y </span><span class="pun">&gt;</span><span class="pln"> z</span><span class="pun">))</span><span class="pln"> </span><span class="pun">||</span><span class="pln"> </span><span class="pun">((</span><span class="pln">x </span><span class="pun">&gt;</span><span class="pln"> z</span><span class="pun">)</span><span class="pln"> </span><span class="pun">&amp;&amp;</span><span class="pln"> </span><span class="pun">(</span><span class="pln">y </span><span class="pun">==</span><span class="pln"> z</span><span class="pun">))</span></li><li class="L4"><span class="pln">&nbsp;</span></li></ol></pre>
            <p>Variables 
                \\( b2, b3, b4 \\), and 
                \\( b5 \\) ALWAYS, SOMETIMES, or NEVER takes the same
                value as 
                \\( b1 \\).<br>Which of the variable(s) SOMETIMES takes
                the same value as 
                \\( b1 \\)?
            </p>
            
            <p></p>`,
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
      text: `<p></p>
            <p>Consider the following two .
                \\( c \\) files which both include the same 
                \\( .h \\) file:
            </p>
            <p><img alt="" src="/images/quiz/wqt-cprog2/q14_img2.png" style="max-width: 75%;"></p>
            <p><br>When compiled, linked, and executed, the following output results:<br>
                \\( x = 1 \\; y = 2\\; z = 3\\; w = 4\\; v = 5 \\)
                <br>Assuming that this program compiled and linked successfully, and based on the output shown above,
                add static and/or extern modifiers to the blank lines 
                \\( (1) \\) through 
                \\( (10) \\).<br><br>Leave them blank if neither
                modifier would be appropriate.<br><br>For example, if we say line 
                \\( (2) \\) is static then we consider line 
                \\( (2) \\) as 
                \\( \\text{“static int x”} \\). Or if we say line 
                \\( (9) \\) is empty then we treat line 
                \\( 9 \\) as 
                \\( \\text{“int w = 4”} \\).
            </p>
            
            <p></p>`,
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
      text: `<p></p>
            <p>Consider the following variable and function definitions:</p>
            <pre class="prettyprint linenums lang-c_cpp prettyprinted" data-pbcklang="c_cpp" data-pbcktabsize="4" style=""><ol class="linenums"><li class="L0"><span class="kwd">int</span><span class="pln"> g</span><span class="pun">=</span><span class="lit">10</span><span class="pun">;</span></li><li class="L1"><span class="kwd">int</span><span class="pln"> q3</span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span></li><li class="L2"><span class="pln">    </span><span class="kwd">static</span><span class="pln"> </span><span class="kwd">int</span><span class="pln"> g</span><span class="pun">=</span><span class="lit">5</span><span class="pun">;</span></li><li class="L3"><span class="pln">    </span><span class="kwd">return</span><span class="pln"> </span><span class="pun">++</span><span class="pln">g</span><span class="pun">;</span></li><li class="L4"><span class="pun">}</span></li><li class="L5"><span class="kwd">int</span><span class="pln"> q4</span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span></li><li class="L6"><span class="pln">    </span><span class="kwd">extern</span><span class="pln"> </span><span class="kwd">int</span><span class="pln"> g</span><span class="pun">;</span></li><li class="L7"><span class="pln">    </span><span class="kwd">return</span><span class="pln"> </span><span class="pun">++</span><span class="pln">g</span><span class="pun">;</span></li><li class="L8"><span class="pun">}</span></li><li class="L9"><span class="kwd">int</span><span class="pln"> q5</span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span></li><li class="L0"><span class="pln">    </span><span class="kwd">int</span><span class="pln"> g</span><span class="pun">=</span><span class="lit">1</span><span class="pun">;</span></li><li class="L1"><span class="pln">    </span><span class="kwd">return</span><span class="pln"> </span><span class="pun">++</span><span class="pln">g</span><span class="pun">;</span></li><li class="L2"><span class="pun">}</span></li></ol></pre>
            <p>What is the value of the expression 
                \\( q3() + q3() + q4() + q4() + q5() + q5()? \\)
            </p>
            
            <p></p>`,
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
