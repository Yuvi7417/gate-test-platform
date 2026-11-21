registerTest({
    "name": "DPP 01 - C Programming (Pointers, Arrays & Strings - Part 1)",
    "testLabel": "DPP 01",
    "testType": "DPP",
    "bracket": "Pointers, Arrays & Strings - Part 1",
    "subject": "c_prog",
    "series": "cse-dpp-2027",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 10,
    "topicsCovered": "Pointers, Arrays & Strings (Practice Set 1)",
    "questions": [
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>What is the output of the following code?</p><pre class=\"prettyprint linenums lang-c_cpp\" data-linenums=\"true\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"\" data-rawcode='#include &lt;stdio.h&gt; void func(int a, int *bptr) { a = 42; *bptr = 42; return; } int main(void) { int x = 100, y = 100; func(x, &amp;y); printf(\"x = %d, y = %d\\n\", x, y); return 0; }' dir=\"ltr\">#include &lt;stdio.h&gt; void func(int a, int *bptr) { a = 42; *bptr = 42; return; } int main(void) { int x = 100, y = 100; func(x, &amp;y); printf(\"x = %d, y = %d\\n\", x, y); return 0; }</pre></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\texttt{x = 42, y = 42}$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{x = 100, y = 100}$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{x = 100, y = 42}$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{x = 42, y = 100}$</span>"
            ],
            "answer": "C",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"538354\"></a><div itemprop=\"text\"><p><img alt=\"\" height=\"874\" src=\"https://gateoverflow.in/?qa=blob&amp;qa_blobid=2937967374619473068\" width=\"614\"/><br/><strong>Option C</strong></p></div><br><br><a href=\"https://gateoverflow.in/538121/go-classes-dpp-gate-cs-c-programming-pass-by-pointer#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-c-programming-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/c-programming\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">C Programming - Pointers, Arrays & Strings</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>What is the output of the following code?</p><pre class=\"prettyprint linenums lang-c_cpp\" data-linenums=\"true\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"\" data-rawcode='#include &lt;stdio.h&gt; int main() { int x = 25; void *p = &amp;x; printf(\"%d\", *(int *)p); return 0; }' dir=\"ltr\">#include &lt;stdio.h&gt; int main() { int x = 25; void *p = &amp;x; printf(\"%d\", *(int *)p); return 0; }</pre></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\texttt{25}$<br/></span>",
                "<span style=\"display: inline;\">Address of $\\texttt{x}$<br/></span>",
                "<span style=\"display: inline;\">Compilation error<br/></span>",
                "<span style=\"display: inline;\">Undefined behavior</span>"
            ],
            "answer": "A",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"537076\"></a><div itemprop=\"text\"><p>Here:</p><p dir=\"ltr\">$\\texttt{void *p = \\&amp;x;}$</p><p>means $\\texttt{p}$ is a void pointer storing the address of $\\texttt{x}$.</p><p>A $\\texttt{void *}$ pointer can store the address of any data type.</p><p>But a $\\texttt{void *}$ pointer cannot be directly dereferenced because the compiler does not know how many bytes to read.</p><p>So, before dereferencing, we typecast it:</p><p dir=\"ltr\">$\\texttt{(int *)p}$</p><p>Now the compiler treats $\\texttt{p}$ as an integer pointer.</p><p>Then:</p><p dir=\"ltr\">$\\texttt{*(int *)p}$</p><p>accesses the integer value stored at the address of $\\texttt{x}$.</p><p>Since $\\texttt{x = 25}$, the output is $\\texttt{25}$.</p><p><br/><strong>Answer: A</strong></p></div><br><br><a href=\"https://gateoverflow.in/537075/go-classes-dpp-gate-cs-c-programming-void-pointer-typecasting#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-c-programming-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/c-programming\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">C Programming - Pointers, Arrays & Strings</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Which of the following correctly describes the declarations?</p><pre class=\"prettyprint linenums lang-c_cpp\" data-linenums=\"true\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"\" data-rawcode=\"int *a[10]; int (*p)[5];\" dir=\"ltr\">int *a[10]; int (*p)[5];</pre></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\texttt{a}$ is a pointer to an array of $10$ integers, and $\\texttt{p}$ is an array of $5$ integer pointers<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{a}$ is an array of $10$ pointers to integers, and $\\texttt{p}$ is a pointer to an array of $5$ integers<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{a}$ is an array of $10$ integers, and $\\texttt{p}$ is a pointer to an integer<br/></span>",
                "<span style=\"display: inline;\">Both $\\texttt{a}$ and $\\texttt{p}$ are arrays of integer pointers</span>"
            ],
            "answer": "B",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"537074\"></a><div itemprop=\"text\"><p>For:</p><p class=\"prettyprint linenums lang-c_cpp\" data-linenums=\"true\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"\" data-rawcode=\"int *a[10];\" dir=\"ltr\">$\\texttt{int *a[10];}$</p><p>Start from the identifier $\\texttt{a}$.</p><p>On the right side, we see $\\texttt{[10]}$, so $\\texttt{a}$ is an array of $10$.</p><p>Then we move left and see $\\texttt{*}$, so each element is a pointer.</p><p>Finally, the base type is $\\texttt{int}$.</p><p>So, $\\texttt{a}$ is an array of $10$ pointers to integers.</p><p><br/>Now for:</p><p dir=\"ltr\">$\\texttt{int (*p)[5];}$</p><p>Start from the identifier $\\texttt{p}$.</p><p>Because $\\texttt{p}$ is inside parentheses with $\\texttt{*}$, first we read that $\\texttt{p}$ is a pointer.</p><p>Then outside the parentheses, we see $\\texttt{[5]}$, so it points to an array of $5$.</p><p>Finally, the base type is $\\texttt{int}$.</p><p>So, $\\texttt{p}$ is a pointer to an array of $5$ integers.<br/> </p><p><strong>Answer: B</strong></p></div><br><br><a href=\"https://gateoverflow.in/537071/go-classes-dpp-gate-cs-c-programming-complex-declaration#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-c-programming-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/c-programming\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">C Programming - Pointers, Arrays & Strings</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>What is the output of the following code?</p><pre class=\"prettyprint linenums lang-c_cpp\" data-linenums=\"true\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"\" data-rawcode='#include &lt;stdio.h&gt; int main() { int a[3][2] = { {1, 2}, {3, 4}, {5, 6} }; int (*p)[2] = a; p++; printf(\"%d %d %d\", (*p)[0], *(*(p + 1) + 1), *(*p + 1)); return 0; }' dir=\"ltr\">#include &lt;stdio.h&gt; int main() { int a[3][2] = { {1, 2}, {3, 4}, {5, 6} }; int (*p)[2] = a; p++; printf(\"%d %d %d\", (*p)[0], *(*(p + 1) + 1), *(*p + 1)); return 0; }</pre></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\texttt{3 6 4}$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{1 6 2}$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{3 4 6}$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{5 6 4}$</span>"
            ],
            "answer": "A",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"536811\"></a><div itemprop=\"text\"><p style=\"text-align:center\"><img alt=\"\" height=\"429\" src=\"https://cdn.mathpix.com/snip/images/74e-9pUhk8F5B9gVy_91yxYgSkoDhhepLIDlnnak-GA.original.fullsize.png\" width=\"827\"/></p><p><br/>Here,</p><p>$\\texttt{int (*p)[2] = a;}$</p><p>means $\\texttt{p}$ is a pointer to an array of $\\texttt{2}$ integers.</p><p>So, $\\texttt{p}$ moves row by row.</p><p>Initially, $\\texttt{p}$ points to row $\\texttt{0}$.</p><p>Then,</p><p>$\\texttt{p++}$</p><p>moves $\\texttt{p}$ from row $\\texttt{0}$ to row $\\texttt{1}$.</p><p>Now $\\texttt{p}$ points to:</p><p>$\\texttt{a[1]}$</p><p>The array is:</p><p>Row $\\texttt{0}$: $\\texttt{1, 2}$<br/>Row $\\texttt{1}$: $\\texttt{3, 4}$<br/>Row $\\texttt{2}$: $\\texttt{5, 6}$</p><p>First expression:</p><p>$\\texttt{(*p)[0]}$</p><p>Since $\\texttt{p}$ points to row $\\texttt{1}$,</p><p>$\\texttt{(*p)[0] = a[1][0] = 3}$</p><p>Second expression:</p><p>$\\texttt{((p + 1) + 1)}$</p><p>Since $\\texttt{p}$ points to row $\\texttt{1}$,</p><p>$\\texttt{p + 1}$ points to row $\\texttt{2}$.</p><p>Then,</p><p>$\\texttt{*(p + 1) + 1}$ points to column $\\texttt{1}$ of row $\\texttt{2}$.</p><p>So,</p><p>$\\texttt{((p + 1) + 1) = a[2][1] = 6}$</p><p>Third expression:</p><p>$\\texttt{*(*p + 1)}$</p><p>Since $\\texttt{p}$ points to row $\\texttt{1}$,</p><p>$\\texttt{*p}$ gives the base address of row $\\texttt{1}$.</p><p>Then,</p><p>$\\texttt{*p + 1}$ points to column $\\texttt{1}$ of row $\\texttt{1}$.</p><p>So,</p><p>$\\texttt{*(*p + 1) = a[1][1] = 4}$</p><p><br/>$\\therefore$ <strong>Output :</strong> $\\texttt{3 6 4}$</p><p><br/><strong>Answer: A</strong></p></div><br><br><a href=\"https://gateoverflow.in/536793/go-classes-dpp-gate-cs-c-programming-pointer-to-row#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-c-programming-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/c-programming\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">C Programming - Pointers, Arrays & Strings</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>What is the output of the following code?</p><pre class=\"prettyprint linenums lang-c_cpp\" data-linenums=\"true\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"\" data-rawcode='#include &lt;stdio.h&gt; int main() { int a[2][3] = { {2, 4, 6}, {8, 10, 12} }; printf(\"%d %d %d\", a[1][2], *(*(a + 1) + 1), *(*a + 2)); return 0; }' dir=\"ltr\">#include &lt;stdio.h&gt; int main() { int a[2][3] = { {2, 4, 6}, {8, 10, 12} }; printf(\"%d %d %d\", a[1][2], *(*(a + 1) + 1), *(*a + 2)); return 0; }</pre></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\texttt{12 10 6}$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{12 8 6}$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{10 12 6}$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{12 10 4}$</span>"
            ],
            "answer": "A",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"536809\"></a><div itemprop=\"text\"><p style=\"text-align:center\"><img alt=\"\" height=\"370\" src=\"https://cdn.mathpix.com/snip/images/kaff9OiSZd1WrVI9apvNAAHBRxXNzLu7nAZ2n_OKqt4.original.fullsize.png\" width=\"889\"/></p><p> </p><p>The 2D array is:</p><p>First row:</p><p>$\\texttt{a[0][0] = 2}$<br/>$\\texttt{a[0][1] = 4}$<br/>$\\texttt{a[0][2] = 6}$</p><p>Second row:</p><p>$\\texttt{a[1][0] = 8}$<br/>$\\texttt{a[1][1] = 10}$<br/>$\\texttt{a[1][2] = 12}$</p><p>First expression:</p><p>$\\texttt{a[1][2]}$</p><p>This directly gives:</p><p>$\\texttt{12}$</p><p>Second expression:</p><p>$\\texttt{((a + 1) + 1)}$</p><p>Here,</p><p>$\\texttt{a + 1}$ moves to row $\\texttt{1}$.</p><p>$\\texttt{*(a + 1)}$ gives the base address of row $\\texttt{1}$.</p><p>Then,</p><p>$\\texttt{*(a + 1) + 1}$ moves to column $\\texttt{1}$ of row $\\texttt{1}$.</p><p>So,</p><p>$\\texttt{((a + 1) + 1) = a[1][1] = 10}$</p><p>Third expression:</p><p>$\\texttt{*(*a + 2)}$</p><p>Here,</p><p>$\\texttt{*a}$ refers to row $\\texttt{0}$.</p><p>Then,</p><p>$\\texttt{*a + 2}$ moves to column $\\texttt{2}$ of row $\\texttt{0}$.</p><p>So,</p><p>$\\texttt{*(*a + 2) = a[0][2] = 6}$</p><p><br/>$\\therefore$ <strong>Output :</strong> $\\texttt{12 10 6}$</p><p><br/><strong>Answer: A</strong></p></div><br><br><a href=\"https://gateoverflow.in/536792/go-classes-dpp-gate-cs-c-programming-2d-array-access#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-c-programming-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/c-programming\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">C Programming - Pointers, Arrays & Strings</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>What is the output of the following code?</p><pre class=\"prettyprint linenums lang-c_cpp\" data-linenums=\"true\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"\" data-rawcode='#include &lt;stdio.h&gt; void update(int **q, int *r) { **q = **q + 5; *q = r; **q = **q + 2; } int main() { int x = 3, y = 8; int *p = &amp;x; update(&amp;p, &amp;y); printf(\"%d %d %d\", x, y, *p); return 0; }' dir=\"ltr\">#include &lt;stdio.h&gt; void update(int **q, int *r) { **q = **q + 5; *q = r; **q = **q + 2; } int main() { int x = 3, y = 8; int *p = &amp;x; update(&amp;p, &amp;y); printf(\"%d %d %d\", x, y, *p); return 0; }</pre></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\texttt{8 8 8}$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{8 10 10}$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{3 10 10}$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{8 10 8}$</span>"
            ],
            "answer": "B",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"536805\"></a><div itemprop=\"text\"><p style=\"text-align:center\"><img alt=\"\" height=\"451\" src=\"https://cdn.mathpix.com/snip/images/fmiETDwGVEM2pFiDFBCAfShzoyBcYBZ0ExYA0rXRYwg.original.fullsize.png\" width=\"842\"/></p><p><br/>In $\\texttt{main()}$:</p><p>$\\texttt{x = 3}$</p><p>$\\texttt{y = 8}$</p><p>$\\texttt{p}$ points to $\\texttt{x}$.</p><p>Function call:</p><p>$\\texttt{update(\\&amp;p, \\&amp;y)}$</p><p>So, inside $\\texttt{update()}$:</p><p>$\\texttt{q}$ points to $\\texttt{p}$.</p><p>$\\texttt{r}$ points to $\\texttt{y}$.</p><p>First statement:</p><p>$\\texttt{**q = **q + 5}$</p><p>Since $\\texttt{q}$ points to $\\texttt{p}$ and $\\texttt{p}$ points to $\\texttt{x}$,</p><p>$\\texttt{**q}$ refers to $\\texttt{x}$.</p><p>So,</p><p>$\\texttt{x = 3 + 5 = 8}$</p><p>Second statement:</p><p>$\\texttt{*q = r}$</p><p>Here, $\\texttt{*q}$ means $\\texttt{p}$.</p><p>So, this changes $\\texttt{p}$ itself.</p><p>Now $\\texttt{p}$ points to $\\texttt{y}$.</p><p>Third statement:</p><p>$\\texttt{**q = **q + 2}$</p><p>Now $\\texttt{p}$ points to $\\texttt{y}$.</p><p>So, $\\texttt{**q}$ refers to $\\texttt{y}$.</p><p>Therefore,</p><p>$\\texttt{y = 8 + 2 = 10}$</p><p>At the end:</p><p>$\\texttt{x = 8}$</p><p>$\\texttt{y = 10}$</p><p>$\\texttt{p}$ points to $\\texttt{y}$, so $\\texttt{*p = 10}$<br/> </p><p>$\\therefore$ <strong>Output :</strong> $\\texttt{8 10 10}$</p><p><br/><strong>Answer: B</strong></p></div><br><br><a href=\"https://gateoverflow.in/536791/go-classes-dpp-gate-cs-c-programming-double-pointer-in-function#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-c-programming-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/c-programming\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">C Programming - Pointers, Arrays & Strings</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>What is the output of the following code?</p><pre class=\"prettyprint linenums lang-c_cpp\" data-linenums=\"true\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"\" data-rawcode='#include &lt;stdio.h&gt; int main() { int a = 5, b = 9; int *p = &amp;a; int **q = &amp;p; *p = *p + 2; *q = &amp;b; **q = **q + 3; printf(\"%d %d %d\", a, b, *p); return 0; }' dir=\"ltr\">#include &lt;stdio.h&gt; int main() { int a = 5, b = 9; int *p = &amp;a; int **q = &amp;p; *p = *p + 2; *q = &amp;b; **q = **q + 3; printf(\"%d %d %d\", a, b, *p); return 0; }</pre></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\texttt{7 9 7}$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{7 12 12}$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{5 12 12}$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{7 12 7}$</span>"
            ],
            "answer": "B",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"536799\"></a><div itemprop=\"text\"><p style=\"text-align:center\"><img alt=\"\" height=\"317\" src=\"https://cdn.mathpix.com/snip/images/a8nHwi9TqtJS_3lRERW1AYpg_-Jl5ZYOA8g_W8A-l88.original.fullsize.png\" width=\"793\"/></p><p> </p><p>Initially:</p><p>$\\texttt{a = 5}$</p><p>$\\texttt{b = 9}$</p><p>$\\texttt{p}$ points to $\\texttt{a}$.</p><p>$\\texttt{q}$ points to $\\texttt{p}$.</p><p>First statement:</p><p>$\\texttt{*p = *p + 2}$</p><p>Since $\\texttt{p}$ points to $\\texttt{a}$,</p><p>$\\texttt{a = 5 + 2 = 7}$</p><p>Now:</p><p>$\\texttt{a = 7}$</p><p>Second statement:</p><p>$\\texttt{*q = \\&amp;b}$</p><p>Since $\\texttt{q}$ points to $\\texttt{p}$, $\\texttt{*q}$ means $\\texttt{p}$.</p><p>So, this statement changes $\\texttt{p}$ itself.</p><p>Now $\\texttt{p}$ stops pointing to $\\texttt{a}$ and starts pointing to $\\texttt{b}$.</p><p>Third statement:</p><p>$\\texttt{**q = **q + 3}$</p><p>Now $\\texttt{p}$ points to $\\texttt{b}$.</p><p>So, $\\texttt{**q}$ refers to $\\texttt{b}$.</p><p>Therefore,</p><p>$\\texttt{b = 9 + 3 = 12}$</p><p>At the end:</p><p>$\\texttt{a = 7}$</p><p>$\\texttt{b = 12}$</p><p>$\\texttt{p}$ points to $\\texttt{b}$, so $\\texttt{*p = 12}$</p><p><br/>$\\therefore$ <strong>Output :</strong> $\\texttt{7 12 12}$</p><p><br/><strong>Answer: B</strong></p></div><br><br><a href=\"https://gateoverflow.in/536790/go-classes-dpp-gate-cs-c-programming-pointer-redirection#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-c-programming-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/c-programming\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">C Programming - Pointers, Arrays & Strings</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>What is the output of the following code?</p><pre class=\"prettyprint linenums lang-c_cpp\" data-linenums=\"true\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"\" data-rawcode='#include &lt;stdio.h&gt; int main() { int x = 10; int *p = &amp;x; int **q = &amp;p; **q = **q + 4; *p = *p + 1; printf(\"%d %d\", x, **q); return 0; }' dir=\"ltr\">#include &lt;stdio.h&gt; int main() { int x = 10; int *p = &amp;x; int **q = &amp;p; **q = **q + 4; *p = *p + 1; printf(\"%d %d\", x, **q); return 0; }</pre></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\texttt{14 14}$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{15 15}$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{10 15}$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{Compilation error}$</span>"
            ],
            "answer": "B",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"536797\"></a><div itemprop=\"text\"><p>Here, $\\texttt{p}$ points to $\\texttt{x}$.</p><p>Also, $\\texttt{q}$ points to $\\texttt{p}$.</p><p>So,</p><p>$\\texttt{*q}$ gives $\\texttt{p}$</p><p>and</p><p>$\\texttt{**q}$ gives the value of $\\texttt{x}$.</p><p>Initially:</p><p>$\\texttt{x = 10}$</p><p>First statement:</p><p>$\\texttt{**q = **q + 4}$</p><p>Since $\\texttt{**q}$ refers to $\\texttt{x}$,</p><p>$\\texttt{x = 10 + 4 = 14}$</p><p>Second statement:</p><p>$\\texttt{*p = *p + 1}$</p><p>Since $\\texttt{p}$ points to $\\texttt{x}$,</p><p>$\\texttt{x = 14 + 1 = 15}$</p><p>Now,</p><p>$\\texttt{x = 15}$</p><p>and</p><p>$\\texttt{**q = 15}$<br/> </p><p>$\\therefore$ <strong>Output :</strong> $\\texttt{15 15}$<br/> </p><p><strong>Answer: B</strong></p></div><br><br><a href=\"https://gateoverflow.in/536789/go-classes-dpp-gate-cs-c-programming-double-pointer-basics#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-c-programming-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/c-programming\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">C Programming - Pointers, Arrays & Strings</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>What is the output of the following code?</p><pre class=\"prettyprint linenums lang-c_cpp\" data-linenums=\"true\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"\" data-rawcode='#include &lt;stdio.h&gt; void fun(int *p) { *p = *p + 1; p++; *p = *p + 2; } int main() { int arr[] = {5, 10, 15}; fun(arr + 1); printf(\"%d %d %d\", arr[0], arr[1], arr[2]); return 0; }' dir=\"ltr\">#include &lt;stdio.h&gt; void fun(int *p) { *p = *p + 1; p++; *p = *p + 2; } int main() { int arr[] = {5, 10, 15}; fun(arr + 1); printf(\"%d %d %d\", arr[0], arr[1], arr[2]); return 0; }</pre></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\texttt{5 10 15}$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{5 11 15}$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{5 11 17}$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{6 12 15}$</span>"
            ],
            "answer": "C",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"536646\"></a><div itemprop=\"text\"><p style=\"text-align:center\"><img alt=\"\" height=\"382\" src=\"https://cdn.mathpix.com/snip/images/tb_h1_Xw1t1pLw6ljDZyZghJHuSMbgd7xLAIz3hFPSo.original.fullsize.png\" width=\"778\"/></p><p><br/>The function call is:</p><p>$\\texttt{fun(arr + 1)}$</p><p>Here, $\\texttt{arr + 1}$ means the address of $\\texttt{arr[1]}$.</p><p>So, inside $\\texttt{fun()}$, pointer $\\texttt{p}$ initially points to $\\texttt{arr[1]}$.</p><p>Initial array:</p><p>$\\texttt{arr[0] = 5}$<br/>$\\texttt{arr[1] = 10}$<br/>$\\texttt{arr[2] = 15}$</p><p>First statement:</p><p>$\\texttt{*p = *p + 1}$</p><p>Since $\\texttt{p}$ points to $\\texttt{arr[1]}$,</p><p>$\\texttt{arr[1] = 10 + 1 = 11}$</p><p>Now,</p><p>$\\texttt{p++}$</p><p>moves $\\texttt{p}$ from $\\texttt{arr[1]}$ to $\\texttt{arr[2]}$.</p><p>Now,</p><p>$\\texttt{*p = *p + 2}$</p><p>Since $\\texttt{p}$ now points to $\\texttt{arr[2]}$,</p><p>$\\texttt{arr[2] = 15 + 2 = 17}$</p><p>$\\texttt{arr[0]}$ remains unchanged.</p><p>Final array becomes:</p><p>$\\texttt{5, 11, 17}$<br/> </p><p>$\\therefore$ <strong>Output :</strong> $\\texttt{5 11 17}$<br/> </p><p><strong>Answer: C</strong></p></div><br><br><a href=\"https://gateoverflow.in/536645/go-classes-dpp-gate-cs-c-programming-shifted-pointer-in-function#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-c-programming-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/c-programming\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">C Programming - Pointers, Arrays & Strings</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>What is the output of the following code?</p><pre class=\"prettyprint linenums lang-\" data-linenums=\"true\" data-pbcklang=\"\" data-pbcktabsize=\"\" data-rawcode='#include &lt;stdio.h&gt; void update(int a[]) { a[0] = a[0] + a[2]; *(a + 1) = *(a + 1) + 5; } int main() { int arr[] = {2, 4, 6}; update(arr); printf(\"%d %d %d\", arr[0], arr[1], arr[2]); return 0; }' dir=\"ltr\">#include &lt;stdio.h&gt; void update(int a[]) { a[0] = a[0] + a[2]; *(a + 1) = *(a + 1) + 5; } int main() { int arr[] = {2, 4, 6}; update(arr); printf(\"%d %d %d\", arr[0], arr[1], arr[2]); return 0; }</pre></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\texttt{2 4 6}$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{8 9 6}$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{8 4 6}$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{2 9 6}$</span>"
            ],
            "answer": "B",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"536642\"></a><div itemprop=\"text\"><p>In the function call:</p><p>$\\texttt{update(arr)}$</p><p>the base address of the array is passed.</p><p>So, inside $\\texttt{update()}$, parameter $\\texttt{a}$ refers to the same original array $\\texttt{arr}$.</p><p>Initial array:</p><p>$\\texttt{arr[0] = 2}$<br/>$\\texttt{arr[1] = 4}$<br/>$\\texttt{arr[2] = 6}$</p><p>First statement:</p><p>$\\texttt{a[0] = a[0] + a[2]}$</p><p>So,</p><p>$\\texttt{arr[0] = 2 + 6 = 8}$</p><p>Now array becomes:</p><p>$\\texttt{8, 4, 6}$</p><p>Second statement:</p><p>$\\texttt{*(a + 1) = *(a + 1) + 5}$</p><p>Here, $\\texttt{*(a + 1)}$ is the same as $\\texttt{a[1]}$.</p><p>So,</p><p>$\\texttt{arr[1] = 4 + 5 = 9}$</p><p>Final array becomes:</p><p>$\\texttt{8, 9, 6}$<br/> </p><p>$\\therefore$ <strong>Output : </strong>$\\texttt{8 9 6}$</p><p><br/><strong>Answer: B</strong></p></div><br><br><a href=\"https://gateoverflow.in/536641/go-classes-dpp-gate-cs-c-programming-array-passed-to-function#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-c-programming-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/c-programming\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">C Programming - Pointers, Arrays & Strings</a></b></div></div>"
        }
    ]
});

registerTest({
    "name": "DPP 02 - C Programming (Pointers, Arrays & Strings - Part 2)",
    "testLabel": "DPP 02",
    "testType": "DPP",
    "bracket": "Pointers, Arrays & Strings - Part 2",
    "subject": "c_prog",
    "series": "cse-dpp-2027",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 10,
    "topicsCovered": "Pointers, Arrays & Strings (Practice Set 2)",
    "questions": [
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>What is the output of the following code?</p><pre class=\"prettyprint linenums lang-c_cpp\" data-linenums=\"true\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"\" data-rawcode=\"#include &lt;stdio.h&gt; void change(char *p) { p[1] = 'X'; *(p + 3) = '\\0'; } int main() { char str[] = &quot;GATE&quot;; change(str); printf(&quot;%s&quot;, str); return 0; }\" dir=\"ltr\">#include &lt;stdio.h&gt; void change(char *p) { p[1] = 'X'; *(p + 3) = '\\0'; } int main() { char str[] = \"GATE\"; change(str); printf(\"%s\", str); return 0; }</pre></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\texttt{GATE}$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{GXTE}$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{GXT}$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{GX}$</span>"
            ],
            "answer": "C",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"536640\"></a><div itemprop=\"text\"><p style=\"text-align:center\"><img alt=\"\" height=\"410\" src=\"https://cdn.mathpix.com/snip/images/t5wp0xtiFw09COYg5kOrVLQG5ng0VnSX_CjZ_F6CwtM.original.fullsize.png\" width=\"790\"/></p><p> </p><p>Initially,</p><p>$\\texttt{str = \"GATE\"}$</p><p>So,</p><p>$\\texttt{str[0] = 'G'}$<br/>$\\texttt{str[1] = 'A'}$<br/>$\\texttt{str[2] = 'T'}$<br/>$\\texttt{str[3] = 'E'}$<br/>$\\texttt{str[4] = '\\textbackslash0'}$</p><p>In the function call:</p><p>$\\texttt{change(str)}$</p><p>the base address of the character array is passed.</p><p>So, inside the function, $\\texttt{p}$ points to the same original character array.</p><p>First statement:</p><p>$\\texttt{p[1] = 'X'}$</p><p>This changes $\\texttt{str[1]}$ from $\\texttt{'A'}$ to $\\texttt{'X'}$.</p><p>Now the string becomes:</p><p>$\\texttt{\"GXTE\"}$</p><p>Second statement:</p><p>$\\texttt{*(p + 3) = '\\textbackslash0'}$</p><p>This changes $\\texttt{str[3]}$ from $\\texttt{'E'}$ to $\\texttt{'\\textbackslash0'}$.</p><p>Now the string becomes:</p><p>$\\texttt{\"GXT\"}$</p><p>When printed using $\\texttt{\\%s}$, printing stops at $\\texttt{'\\textbackslash0'}$.<br/> </p><p>$\\therefore$ <strong>Output : </strong>$\\texttt{GXT}$<br/> </p><p><strong>Answer: C</strong></p></div><br><br><a href=\"https://gateoverflow.in/536638/go-classes-dpp-gate-cs-c-programming-string-passed-to-function#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-c-programming-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/c-programming\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">C Programming - Pointers, Arrays & Strings</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>What is the output of the following code?</p><pre class=\"prettyprint linenums lang-c_cpp\" data-linenums=\"true\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"\" data-rawcode=\"#include &lt;stdio.h&gt; int main() { char str[] = &quot;HELLO&quot;; char *p = str + 1; *(p + 2) = 'A'; printf(&quot;%s %c&quot;, str, *p); return 0; }\" dir=\"ltr\">#include &lt;stdio.h&gt; int main() { char str[] = \"HELLO\"; char *p = str + 1; *(p + 2) = 'A'; printf(\"%s %c\", str, *p); return 0; }</pre></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\texttt{HELLO E}$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{HELAO E}$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{HALLO A}$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{HELAO A}$</span>"
            ],
            "answer": "B",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"536637\"></a><div itemprop=\"text\"><p style=\"text-align:center\"><img alt=\"\" height=\"442\" src=\"https://cdn.mathpix.com/snip/images/w3LXFPZJsr0joNe1FeTiUaonDP02F28OHuvI24Ft2GI.original.fullsize.png\" width=\"766\"/></p><p> </p><p>Initially,</p><p>$\\texttt{str = \"HELLO\"}$</p><p>So,</p><p>$\\texttt{str[0] = 'H'}$<br/>$\\texttt{str[1] = 'E'}$<br/>$\\texttt{str[2] = 'L'}$<br/>$\\texttt{str[3] = 'L'}$<br/>$\\texttt{str[4] = 'O'}$</p><p>Now,</p><p>$\\texttt{p = str + 1}$</p><p>So, $\\texttt{p}$ points to $\\texttt{str[1]}$, which is $\\texttt{'E'}$.</p><p>Now,</p><p>$\\texttt{p + 2}$</p><p>points to $\\texttt{str[3]}$.</p><p>So,</p><p>$\\texttt{*(p + 2) = 'A'}$</p><p>changes $\\texttt{str[3]}$ from $\\texttt{'L'}$ to $\\texttt{'A'}$.</p><p>Now the string becomes:</p><p>$\\texttt{\"HELAO\"}$</p><p>Also, $\\texttt{p}$ is still pointing to $\\texttt{str[1]}$.</p><p>So,</p><p>$\\texttt{*p = 'E'}$<br/> </p><p>$\\therefore$ <strong>Output :</strong></p><p>$\\texttt{HELAO E}$<br/> </p><p><strong>Answer: B</strong></p></div><br><br><a href=\"https://gateoverflow.in/536631/go-classes-dpp-gate-cs-c-programming-string-pointer-movement#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-c-programming-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/c-programming\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">C Programming - Pointers, Arrays & Strings</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>What is the output of the following code?</p><pre class=\"prettyprint linenums lang-c_cpp\" data-linenums=\"true\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"\" data-rawcode=\"#include &lt;stdio.h&gt; int main() { char str[] = {'C', 'S', 'E', '\\0', 'X'}; printf(&quot;%s %c&quot;, str, str[4]); return 0; }\" dir=\"ltr\">#include &lt;stdio.h&gt; int main() { char str[] = {'C', 'S', 'E', '\\0', 'X'}; printf(\"%s %c\", str, str[4]); return 0; }</pre></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\texttt{CSE X}$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{CSEX X}$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{CSE \\textbackslash0}$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{Compilation error}$</span>"
            ],
            "answer": "A",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"549938\"></a><div itemprop=\"text\"><p>Explanation </p><p><img alt=\"\" height=\"1132\" src=\"https://gateoverflow.in/?qa=blob&amp;qa_blobid=8583237998439953171\" width=\"1200\"/></p></div><br><br><a href=\"https://gateoverflow.in/536626/go-classes-dpp-gate-cs-c-programming-null-character-in-string#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-c-programming-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/c-programming\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">C Programming - Pointers, Arrays & Strings</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>What is the output of the following code?</p><pre class=\"prettyprint linenums lang-c_cpp\" data-linenums=\"true\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"\" data-rawcode=\"#include &lt;stdio.h&gt; int main() { char str[] = &quot;CODE&quot;; char *p = str; p++; *p = 'A'; printf(&quot;%s %c&quot;, str, *(p + 2)); return 0; }\" dir=\"ltr\">#include &lt;stdio.h&gt; int main() { char str[] = \"CODE\"; char *p = str; p++; *p = 'A'; printf(\"%s %c\", str, *(p + 2)); return 0; }</pre></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\texttt{CODE D}$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{CADE E}$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{CADE D}$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{COAE E}$</span>"
            ],
            "answer": "B",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"536534\"></a><div itemprop=\"text\"><p style=\"text-align:center\"><img alt=\"\" height=\"306\" src=\"https://cdn.mathpix.com/snip/images/uEQM4QJ3skIdnul69oHFPXIS5eR5V59qVSOQWKjUy4Q.original.fullsize.png\" width=\"711\"/></p><p><br/>Initially,</p><p>$\\texttt{str = \"CODE\"}$</p><p>So,</p><p>$\\texttt{str[0] = 'C'}$</p><p>$\\texttt{str[1] = 'O'}$</p><p>$\\texttt{str[2] = 'D'}$</p><p>$\\texttt{str[3] = 'E'}$</p><p>Now,</p><p>$\\texttt{p = str}$</p><p>So, $\\texttt{p}$ points to $\\texttt{str[0]}$.</p><p>Then,</p><p>$\\texttt{p++}$</p><p>moves $\\texttt{p}$ to $\\texttt{str[1]}$.</p><p>Now,</p><p>$\\texttt{*p = 'A'}$</p><p>changes $\\texttt{str[1]}$ from $\\texttt{'O'}$ to $\\texttt{'A'}$.</p><p>So, the string becomes:</p><p>$\\texttt{\"CADE\"}$</p><p>Now,</p><p>$\\texttt{p}$ is still pointing to $\\texttt{str[1]}$.</p><p>So,</p><p>$\\texttt{p + 2}$ points to $\\texttt{str[3]}$.</p><p>Therefore,</p><p>$\\texttt{*(p + 2) = 'E'}$</p><p>So, the output is:</p><p>$\\texttt{CADE E}$</p><p><br/><strong>Answer: B</strong></p></div><br><br><a href=\"https://gateoverflow.in/536533/go-classes-dpp-gate-cs-c-programming-string-pointer-update#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-c-programming-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/c-programming\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">C Programming - Pointers, Arrays & Strings</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>What is the output of the following code?</p><pre class=\"prettyprint linenums lang-c_cpp\" data-linenums=\"true\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"\" data-rawcode='#include &lt;stdio.h&gt; int main() { char str[] = \"GATE\"; char *p = str; printf(\"%c %c %s\", str[1], *(p + 2), p + 1); return 0; }' dir=\"ltr\">#include &lt;stdio.h&gt; int main() { char str[] = \"GATE\"; char *p = str; printf(\"%c %c %s\", str[1], *(p + 2), p + 1); return 0; }</pre></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\texttt{G A GATE}$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{A T ATE}$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{A T TE}$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{T A ATE}$</span>"
            ],
            "answer": "B",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"536532\"></a><div itemprop=\"text\"><p style=\"text-align:center\"><img alt=\"\" height=\"301\" src=\"https://cdn.mathpix.com/snip/images/SzeoMVmYn3ilXMTeMZwBYDntP6EFCv7HEuLMm8IaVro.original.fullsize.png\" width=\"688\"/></p><p><br/>The string is:</p><p>$\\texttt{str = \"GATE\"}$</p><p>So, the characters are:</p><p>$\\texttt{str[0] = 'G'}$</p><p>$\\texttt{str[1] = 'A'}$</p><p>$\\texttt{str[2] = 'T'}$</p><p>$\\texttt{str[3] = 'E'}$</p><p>Now,</p><p>$\\texttt{p = str}$</p><p>So, $\\texttt{p}$ points to the first character of the string.</p><p>First expression:</p><p>$\\texttt{str[1]}$</p><p>This gives $\\texttt{'A'}$.</p><p>Second expression:</p><p>$\\texttt{*(p + 2)}$</p><p>Since $\\texttt{p}$ points to $\\texttt{str[0]}$, $\\texttt{p + 2}$ points to $\\texttt{str[2]}$.</p><p>So,</p><p>$\\texttt{*(p + 2) = 'T'}$</p><p>Third expression:</p><p>$\\texttt{p + 1}$</p><p>This points to $\\texttt{str[1]}$.</p><p>When printed using $\\texttt{\\%s}$, it prints the string from that position.</p><p>So, it prints:</p><p>$\\texttt{\"ATE\"}$<br/> </p><p>$\\therefore$ <strong>Output :</strong> $\\texttt{A T ATE}$</p><p><br/><strong>Answer: B</strong></p></div><br><br><a href=\"https://gateoverflow.in/536531/go-classes-dpp-gate-cs-c-programming-string-indexing#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-c-programming-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/c-programming\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">C Programming - Pointers, Arrays & Strings</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>What will happen when the following code is compiled?</p><pre class=\"prettyprint linenums lang-c_cpp\" data-linenums=\"true\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"\" data-rawcode='#include &lt;stdio.h&gt; int main() { int a[] = {10, 20, 30}; a = a + 1; printf(\"%d\", *a); return 0; }' dir=\"ltr\">#include &lt;stdio.h&gt; int main() { int a[] = {10, 20, 30}; a = a + 1; printf(\"%d\", *a); return 0; }</pre></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\texttt{10}$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{20}$<br/></span>",
                "<span style=\"display: inline;\">Compilation error<br/></span>",
                "<span style=\"display: inline;\">Undefined behavior</span>"
            ],
            "answer": "C",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"536530\"></a><div itemprop=\"text\"><p style=\"text-align:center\"><img alt=\"\" height=\"410\" src=\"https://cdn.mathpix.com/snip/images/XSHyWkBs-jaAIoQe-AGP5xqMRNUssMGG-Py_ZP5pyYs.original.fullsize.png\" width=\"743\"/></p><p> </p><p>In C, the array name $\\texttt{a}$ represents the base address of the array in most expressions.</p><p>But the array name is not a modifiable variable.</p><p>So, we cannot assign a new address to $\\texttt{a}$.</p><p>This statement is invalid:</p><p>$\\texttt{a = a + 1}$</p><p>It tries to change the array name itself.</p><p>That is not allowed.</p><p>Therefore, the code gives a compilation error.<br/> </p><p><strong>Answer: C</strong></p></div><br><br><a href=\"https://gateoverflow.in/536529/go-classes-dpp-gate-cs-c-programming-array-name-not-assignable#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-c-programming-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/c-programming\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">C Programming - Pointers, Arrays & Strings</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider the following declarations:</p><pre class=\"prettyprint linenums lang-c_cpp\" data-linenums=\"true\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"\" data-rawcode='#include &lt;stdio.h&gt; int main() { int a[4] = {6, 4, 1, 2}; int b[8] = {9, 8, 11, 10, 5, 7, 0, 3}; int *p = &amp;a[1]; int *q = b; printf(\"%p\", p + q); return 0; }' dir=\"ltr\">#include &lt;stdio.h&gt; int main() { int a[4] = {6, 4, 1, 2}; int b[8] = {9, 8, 11, 10, 5, 7, 0, 3}; int *p = &amp;a[1]; int *q = b; printf(\"%p\", p + q); return 0; }</pre><p>What will happen?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">It prints the sum of two addresses<br/></span>",
                "<span style=\"display: inline;\">It prints the address of $\\texttt{a[1] + b[0]}$<br/></span>",
                "<span style=\"display: inline;\">Compilation error<br/></span>",
                "<span style=\"display: inline;\">Undefined behavior after successful compilation</span>"
            ],
            "answer": "C",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"536528\"></a><div itemprop=\"text\"><p>In C, adding two pointers is not allowed.</p><p>This expression is invalid:</p><p>$\\texttt{p + q}$</p><p>Pointer arithmetic allows adding an integer to a pointer, like:</p><p>$\\texttt{p + 1}$</p><p>But adding one pointer to another pointer is not valid.</p><p>So,</p><p>$\\texttt{p + q}$</p><p>will cause a compilation error.</p><p>Therefore, the correct answer is $\\texttt{Compilation error}$.</p><p><strong>Answer: C</strong></p></div><br><br><a href=\"https://gateoverflow.in/536527/go-classes-dpp-gate-cs-c-programming-invalid-pointer-addition#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-c-programming-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/c-programming\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">C Programming - Pointers, Arrays & Strings</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>What is the output of the following code?</p><pre class=\"prettyprint linenums lang-c_cpp\" data-linenums=\"true\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"\" data-rawcode='#include &lt;stdio.h&gt; int main() { int a[] = {5, 10, 15, 20}; int *p = a + 1; printf(\"%d %d %td\", *(p + 1), p[2], (p + 2) - a); return 0; }' dir=\"ltr\">#include &lt;stdio.h&gt; int main() { int a[] = {5, 10, 15, 20}; int *p = a + 1; printf(\"%d %d %td\", *(p + 1), p[2], (p + 2) - a); return 0; }</pre></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\texttt{10 15 2}$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{15 20 3}$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{15 20 2}$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{20 15 3}$</span>"
            ],
            "answer": "B",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"536526\"></a><div itemprop=\"text\"><p style=\"text-align:center\"><img alt=\"\" height=\"425\" src=\"https://cdn.mathpix.com/snip/images/GBCm-fEUnOtw_CwHtPLn1AwUhFV5PljJ-L-GCzgXSzE.original.fullsize.png\" width=\"719\"/></p><p><br/>The array is:</p><p>$\\texttt{a[0] = 5}$<br/>$\\texttt{a[1] = 10}$<br/>$\\texttt{a[2] = 15}$<br/>$\\texttt{a[3] = 20}$</p><p>Now,</p><p>$\\texttt{p = a + 1}$</p><p>So, $\\texttt{p}$ points to $\\texttt{a[1]}$.</p><p>First expression:</p><p>$\\texttt{*(p + 1)}$</p><p>Since $\\texttt{p}$ points to $\\texttt{a[1]}$, $\\texttt{p + 1}$ points to $\\texttt{a[2]}$.</p><p>So,</p><p>$\\texttt{*(p + 1) = a[2] = 15}$</p><p>Second expression:</p><p>$\\texttt{p[2]}$</p><p>In C,</p><p>$\\texttt{p[2]}$ means $\\texttt{*(p + 2)}$.</p><p>Since $\\texttt{p}$ points to $\\texttt{a[1]}$, $\\texttt{p + 2}$ points to $\\texttt{a[3]}$.</p><p>So,</p><p>$\\texttt{p[2] = a[3] = 20}$</p><p>Third expression:</p><p>$\\texttt{(p + 2) - a}$</p><p>Here, $\\texttt{p + 2}$ points to $\\texttt{a[3]}$.</p><p>Also, $\\texttt{a}$ represents the base address, which means $\\texttt{a[0]}$.</p><p>So, the distance between $\\texttt{a[0]}$ and $\\texttt{a[3]}$ is $\\texttt{3}$ array elements.</p><p>Therefore,</p><p>$\\texttt{(p + 2) - a = 3}$</p><p>So, the output is:</p><p>$\\texttt{15 20 3}$<br/> </p><p><strong>Answer: B</strong></p></div><br><br><a href=\"https://gateoverflow.in/536525/go-classes-dpp-gate-cs-c-programming-array-pointer-expression#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-c-programming-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/c-programming\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">C Programming - Pointers, Arrays & Strings</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>What is the output of the following code?</p><pre class=\"prettyprint linenums lang-\" data-linenums=\"true\" data-pbcklang=\"\" data-pbcktabsize=\"\" data-rawcode='#include &lt;stdio.h&gt; int main() { int a[] = {2, 4, 6, 8, 10}; int *p = a + 2; printf(\"%d %d %td\", p[-1], 1[p], p - a); return 0; }' dir=\"ltr\">#include &lt;stdio.h&gt; int main() { int a[] = {2, 4, 6, 8, 10}; int *p = a + 2; printf(\"%d %d %td\", p[-1], 1[p], p - a); return 0; }</pre></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\texttt{4 8 2}$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{6 8 2}$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{4 6 2}$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{4 8 1}$</span>"
            ],
            "answer": "A",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"536409\"></a><div itemprop=\"text\"><p style=\"text-align:center\"><img alt=\"\" height=\"434\" src=\"https://cdn.mathpix.com/snip/images/I7lPwQ6JqyBjAolXXaFRV_3iRLxB8piWjQKyXt5YPpw.original.fullsize.png\" width=\"788\"/></p><p><br/>The array is:</p><p>$\\texttt{a[0] = 2}$<br/>$\\texttt{a[1] = 4}$<br/>$\\texttt{a[2] = 6}$<br/>$\\texttt{a[3] = 8}$<br/>$\\texttt{a[4] = 10}$</p><p>Now,</p><p>$\\texttt{p = a + 2}$</p><p>So, $\\texttt{p}$ points to $\\texttt{a[2]}$.</p><p>Now,</p><p>$\\texttt{p[-1]}$ means:</p><p>$\\texttt{*(p - 1)}$</p><p>Since $\\texttt{p}$ points to $\\texttt{a[2]}$, $\\texttt{p - 1}$ points to $\\texttt{a[1]}$.</p><p>So,</p><p>$\\texttt{p[-1] = a[1] = 4}$</p><p>Now,</p><p>$\\texttt{1[p]}$ is valid in C.</p><p>Because:</p><p>$\\texttt{1[p] = *(1 + p)}$</p><p>This is the same as:</p><p>$\\texttt{p[1]}$</p><p>Since $\\texttt{p}$ points to $\\texttt{a[2]}$, $\\texttt{p[1]}$ means $\\texttt{a[3]}$.</p><p>So,</p><p>$\\texttt{1[p] = a[3] = 8}$</p><p>Now,</p><p>$\\texttt{p - a}$ gives the distance between $\\texttt{p}$ and the base address of array $\\texttt{a}$.</p><p>Since $\\texttt{p}$ points to $\\texttt{a[2]}$,</p><p>$\\texttt{p - a = 2}$<br/> </p><p>$\\therefore$ <strong>Output :</strong> $\\texttt{4 8 2}$<br/> </p><p><strong>Answer: A</strong></p></div><br><br><a href=\"https://gateoverflow.in/536408/go-classes-dpp-gate-cs-c-programming-pointer-indexing#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-c-programming-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/c-programming\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">C Programming - Pointers, Arrays & Strings</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>What is the output of the following code?</p><pre class=\"prettyprint linenums lang-c_cpp\" data-linenums=\"true\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"\" data-rawcode='#include &lt;stdio.h&gt; int main() { int a[4] = {6, 4, 1, 2}; int b[8] = {9, 8, 11, 10, 5, 7, 0, 3}; int *p = &amp;a[1]; int *q = b; int *r = b + 2; printf(\"%d %d %td\", *p, *(r + 1), r - q); return 0; }' dir=\"ltr\">#include &lt;stdio.h&gt; int main() { int a[4] = {6, 4, 1, 2}; int b[8] = {9, 8, 11, 10, 5, 7, 0, 3}; int *p = &amp;a[1]; int *q = b; int *r = b + 2; printf(\"%d %d %td\", *p, *(r + 1), r - q); return 0; }</pre></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\texttt{4 10 2}$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{4 11 2}$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{6 10 2}$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{4 10 3}$</span>"
            ],
            "answer": "A",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"536399\"></a><div itemprop=\"text\"><p style=\"text-align:center\"><img alt=\"\" height=\"315\" src=\"https://cdn.mathpix.com/snip/images/RBWt77IQGhC8TbNWejxZ6BUVkSU9TI54X8aodgfSmT0.original.fullsize.png\" width=\"717\"/></p><p><br/>First array:</p><p>$\\texttt{a[0] = 6}$<br/>$\\texttt{a[1] = 4}$<br/>$\\texttt{a[2] = 1}$<br/>$\\texttt{a[3] = 2}$</p><p>Second array:</p><p>$\\texttt{b[0] = 9}$<br/>$\\texttt{b[1] = 8}$<br/>$\\texttt{b[2] = 11}$<br/>$\\texttt{b[3] = 10}$</p><p>Now,</p><p>$\\texttt{p = \\&amp;a[1]}$</p><p>So, $\\texttt{p}$ points to $\\texttt{a[1]}$.</p><p>Therefore,</p><p>$\\texttt{*p = 4}$</p><p>Now,</p><p>$\\texttt{q = b}$</p><p>So, $\\texttt{q}$ points to $\\texttt{b[0]}$.</p><p>Also,</p><p>$\\texttt{r = b + 2}$</p><p>So, $\\texttt{r}$ points to $\\texttt{b[2]}$.</p><p>Now,</p><p>$\\texttt{r + 1}$ points to $\\texttt{b[3]}$.</p><p>Therefore,</p><p>$\\texttt{*(r + 1) = b[3] = 10}$</p><p>Now,</p><p>$\\texttt{r - q}$ is valid because both $\\texttt{r}$ and $\\texttt{q}$ point inside the same array $\\texttt{b}$.</p><p>Since $\\texttt{r}$ points to $\\texttt{b[2]}$ and $\\texttt{q}$ points to $\\texttt{b[0]}$,</p><p>$\\texttt{r - q = 2}$<br/> </p><p>$\\therefore$<strong> Output :</strong> $\\texttt{4 10 2}$<br/> </p><p><strong>Answer: A</strong></p></div><br><br><a href=\"https://gateoverflow.in/536395/go-classes-dpp-gate-cs-c-programming-pointer-difference#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-c-programming-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/c-programming\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">C Programming - Pointers, Arrays & Strings</a></b></div></div>"
        }
    ]
});

registerTest({
    "name": "DPP 03 - C Programming (Pointers, Arrays & Strings - Part 3)",
    "testLabel": "DPP 03",
    "testType": "DPP",
    "bracket": "Pointers, Arrays & Strings - Part 3",
    "subject": "c_prog",
    "series": "cse-dpp-2027",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 10,
    "topicsCovered": "Pointers, Arrays & Strings (Practice Set 3)",
    "questions": [
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>What is the output of the following code?</p><pre class=\"prettyprint linenums lang-c_cpp\" data-linenums=\"true\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"\" data-rawcode='#include &lt;stdio.h&gt; int main() { int a[] = {3, 6, 9, 12, 15}; int *p = a + 1; printf(\"%d %d %td\", *p, *(p + 2), p - a); return 0; }' dir=\"ltr\">#include &lt;stdio.h&gt; int main() { int a[] = {3, 6, 9, 12, 15}; int *p = a + 1; printf(\"%d %d %td\", *p, *(p + 2), p - a); return 0; }</pre></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\texttt{3 9 1}$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{6 12 1}$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{6 12 2}$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{6 9 1}$</span>"
            ],
            "answer": "B",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"536391\"></a><div itemprop=\"text\"><p>The array is:</p><p>$\\texttt{a[0] = 3}$<br/>$\\texttt{a[1] = 6}$<br/>$\\texttt{a[2] = 9}$<br/>$\\texttt{a[3] = 12}$<br/>$\\texttt{a[4] = 15}$</p><p>Now,</p><p>$\\texttt{p = a + 1}$</p><p>So, $\\texttt{p}$ points to $\\texttt{a[1]}$.</p><p>Therefore,</p><p>$\\texttt{*p = a[1] = 6}$</p><p>Now,</p><p>$\\texttt{p + 2}$ moves two elements forward from $\\texttt{a[1]}$.</p><p>So, it points to $\\texttt{a[3]}$.</p><p>Therefore,</p><p>$\\texttt{*(p + 2) = a[3] = 12}$</p><p>Now,</p><p>$\\texttt{p - a}$ means the number of elements between $\\texttt{p}$ and $\\texttt{a}$.</p><p>Since $\\texttt{p}$ points to $\\texttt{a[1]}$ and $\\texttt{a}$ represents $\\texttt{a[0]}$,</p><p>$\\texttt{p - a = 1}$</p><p><br/>$\\therefore$ <strong>Output :</strong> $\\texttt{6 12 1}$</p><p><br/><strong>Answer: B</strong></p></div><br><br><a href=\"https://gateoverflow.in/536389/go-classes-dpp-gate-cs-c-programming-shifted-pointer#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-c-programming-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/c-programming\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">C Programming - Pointers, Arrays & Strings</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>What is the output of the following code?</p><pre class=\"prettyprint linenums lang-c_cpp\" data-linenums=\"true\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"\" data-rawcode='#include &lt;stdio.h&gt; int main() { int a[10] = {10, 11, 12, 13, 14, 15, 16, 17, 18, 19}; int *b = a + 4; int *c = &amp;(a[4]); printf(\"%d %d %d\", *b, *c, b == c); return 0; }' dir=\"ltr\">#include &lt;stdio.h&gt; int main() { int a[10] = {10, 11, 12, 13, 14, 15, 16, 17, 18, 19}; int *b = a + 4; int *c = &amp;(a[4]); printf(\"%d %d %d\", *b, *c, b == c); return 0; }</pre></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\texttt{14 14 1}$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{14 14 0}$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{4 4 1}$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{Compilation error}$</span>"
            ],
            "answer": "A",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"536393\"></a><div itemprop=\"text\"><p style=\"text-align:center\"><img alt=\"\" height=\"327\" src=\"https://cdn.mathpix.com/snip/images/GeAkIqiT_Qn6fPMpKHFaFjxmPXLMzqa_pa7KtWqtopg.original.fullsize.png\" width=\"629\"/></p><p>Here,</p><p>$\\texttt{a + 4}$ means address of $\\texttt{a[4]}$.</p><p>So,</p><p>$\\texttt{b = a + 4}$</p><p>means $\\texttt{b}$ points to $\\texttt{a[4]}$.</p><p>Also,</p><p>$\\texttt{c = \\&amp;(a[4])}$</p><p>directly means $\\texttt{c}$ points to $\\texttt{a[4]}$.</p><p>So both $\\texttt{b}$ and $\\texttt{c}$ point to the same array element.</p><p>Now,</p><p>$\\texttt{a[4] = 14}$</p><p>Therefore,</p><p>$\\texttt{*b = 14}$</p><p>and</p><p>$\\texttt{*c = 14}$</p><p>Since both pointers store the same address,</p><p>$\\texttt{b == c}$ is true.</p><p>In C, true is printed as $\\texttt{1}$.</p><p><br/>$\\therefore$ <strong>Output :</strong> $\\texttt{14 14 1}$</p><p><br/><strong>Answer: A</strong></p></div><br><br><a href=\"https://gateoverflow.in/536388/go-classes-dpp-gate-cs-c-programming-same-address#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-c-programming-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/c-programming\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">C Programming - Pointers, Arrays & Strings</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>What is the output of the following code?</p><pre class=\"prettyprint linenums lang-c_cpp\" data-linenums=\"true\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"\" data-rawcode='#include &lt;stdio.h&gt; int main() { int a[] = {2, 4, 6, 8, 10}; printf(\"%d %d %d\", *a, *(a + 3), 3[a]); return 0; }' dir=\"ltr\">#include &lt;stdio.h&gt; int main() { int a[] = {2, 4, 6, 8, 10}; printf(\"%d %d %d\", *a, *(a + 3), 3[a]); return 0; }</pre></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\texttt{2 6 8}$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{2 8 8}$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{4 8 10}$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{Compilation error}$</span>"
            ],
            "answer": "B",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"536384\"></a><div itemprop=\"text\"><p>In C, the array name $\\texttt{a}$ represents the base address of the array.</p><p>So,</p><p>$\\texttt{a}$ means $\\texttt{(a + 0)}$</p><p>Therefore,</p><p>$\\texttt{*a = a[0] = 2}$</p><p>Now,</p><p>$\\texttt{*(a + 3)}$ means value at index $\\texttt{3}$.</p><p>So,</p><p>$\\texttt{*(a + 3) = a[3] = 8}$</p><p>Also,</p><p>$\\texttt{3[a]}$ looks unusual, but it is valid in C.</p><p>Because:</p><p>$\\texttt{3[a] = *(3 + a)}$</p><p>And this is the same as:</p><p>$\\texttt{a[3]}$</p><p>So,</p><p>$\\texttt{3[a] = 8}$<br/> </p><p>$\\therefore$ <strong>Output :</strong> $\\texttt{2 8 8}$<br/> </p><p><strong>Answer: B</strong></p></div><br><br><a href=\"https://gateoverflow.in/536382/go-classes-dpp-gate-cs-c-programming-array-expression#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-c-programming-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/c-programming\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">C Programming - Pointers, Arrays & Strings</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>What is the output of the following code?</p><pre class=\"prettyprint linenums lang-c_cpp\" data-linenums=\"true\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"\" data-rawcode='#include &lt;stdio.h&gt; int main() { int a[] = {10, 20, 30, 40}; int *p = a; int *q = &amp;a[3]; if (p &lt; q) p = p + 2; else q = q - 1; printf(\"%d %td\", *p, q - p); return 0; }' dir=\"ltr\">#include &lt;stdio.h&gt; int main() { int a[] = {10, 20, 30, 40}; int *p = a; int *q = &amp;a[3]; if (p &lt; q) p = p + 2; else q = q - 1; printf(\"%d %td\", *p, q - p); return 0; }</pre></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\texttt{20 2}$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{30 1}$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{30 2}$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{40 1}$</span>"
            ],
            "answer": "B",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"536186\"></a><div itemprop=\"text\"><p style=\"text-align:center\"><img alt=\"\" height=\"397\" src=\"https://cdn.mathpix.com/snip/images/93TVP_mSOyaZ4R4ZwEQoLN1fJTwjG8nW6fdLNbMT8gc.original.fullsize.png\" width=\"812\"/></p><p><br/>Initially:</p><p>$\\texttt{p}$ points to $\\texttt{a[0]}$</p><p>and</p><p>$\\texttt{q}$ points to $\\texttt{a[3]}$.</p><p>Since both pointers point inside the same array, comparing them is valid.</p><p>Now,</p><p>$\\texttt{p &lt; q}$</p><p>is true because $\\texttt{p}$ points to an earlier element than $\\texttt{q}$.</p><p>So, this statement runs:</p><p>$\\texttt{p = p + 2}$</p><p>Now $\\texttt{p}$ points to $\\texttt{a[2]}$.</p><p>$\\texttt{q}$ still points to $\\texttt{a[3]}$.</p><p>So,</p><p>$\\texttt{*p = a[2] = 30}$</p><p>Now,</p><p>$\\texttt{q - p}$</p><p>means the number of array elements between $\\texttt{q}$ and $\\texttt{p}$.</p><p>Since $\\texttt{q}$ is at $\\texttt{a[3]}$ and $\\texttt{p}$ is at $\\texttt{a[2]}$:</p><p>$\\texttt{q - p = 1}$<br/> </p><p>$\\therefore$ <strong>Output :</strong> $\\texttt{30 1}$<br/> </p><p><strong>Answer: B</strong></p></div><br><br><a href=\"https://gateoverflow.in/536185/go-classes-dpp-gate-cs-c-programming-pointer-comparison#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-c-programming-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/c-programming\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">C Programming - Pointers, Arrays & Strings</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>What is the output of the following code?</p><pre class=\"prettyprint linenums lang-c_cpp\" data-linenums=\"true\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"\" data-rawcode='#include &lt;stdio.h&gt; int main() { int a[2][3] = { {1, 2, 3}, {4, 5, 6} }; int (*p)[3] = a; printf(\"%d %d %d\", **p, *(*(p + 1) + 2), *(*p + 1)); return 0; }' dir=\"ltr\">#include &lt;stdio.h&gt; int main() { int a[2][3] = { {1, 2, 3}, {4, 5, 6} }; int (*p)[3] = a; printf(\"%d %d %d\", **p, *(*(p + 1) + 2), *(*p + 1)); return 0; }</pre></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\texttt{1 5 2}$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{1 6 2}$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{4 6 2}$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{1 6 3}$</span>"
            ],
            "answer": "B",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"536184\"></a><div itemprop=\"text\"><p style=\"text-align:center\"><img alt=\"\" height=\"390\" src=\"https://cdn.mathpix.com/snip/images/0Y7yBWcvN6cGuHcrzCuFMJdjDU9JZm32kz1LdVHx174.original.fullsize.png\" width=\"761\"/></p><p><br/>Here,</p><p>$\\texttt{int (*p)[3] = a;}$</p><p>means $\\texttt{p}$ is a pointer to an array of $\\texttt{3}$ integers.</p><p>So, $\\texttt{p}$ points to the first row of the 2D array.</p><p>The array is:</p><p>$\\texttt{a[0][0] = 1}$, $\\texttt{a[0][1] = 2}$, $\\texttt{a[0][2] = 3}$</p><p>$\\texttt{a[1][0] = 4}$, $\\texttt{a[1][1] = 5}$, $\\texttt{a[1][2] = 6}$</p><p>Now,</p><p>$\\texttt{**p}$</p><p>means first row, first element.</p><p>So,</p><p>$\\texttt{**p = a[0][0] = 1}$</p><p>Next,</p><p>$\\texttt{((p + 1) + 2)}$</p><p>Here, $\\texttt{p + 1}$ moves to the second row.</p><p>So,</p><p>$\\texttt{*(p + 1)}$ represents row $\\texttt{1}$.</p><p>Then,</p><p>$\\texttt{*(p + 1) + 2}$ points to $\\texttt{a[1][2]}$.</p><p>So,</p><p>$\\texttt{((p + 1) + 2) = a[1][2] = 6}$</p><p>Next,</p><p>$\\texttt{*(*p + 1)}$</p><p>Here, $\\texttt{*p}$ represents the first row.</p><p>So,</p><p>$\\texttt{*p + 1}$ points to $\\texttt{a[0][1]}$.</p><p>Therefore,</p><p>$\\texttt{*(*p + 1) = a[0][1] = 2}$<br/> </p><p>$\\therefore$ <strong>Output :</strong> $\\texttt{1 6 2}$<br/> </p><p><strong>Answer: B</strong></p></div><br><br><a href=\"https://gateoverflow.in/536183/go-classes-dpp-gate-cs-c-programming-pointer-to-array#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-c-programming-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/c-programming\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">C Programming - Pointers, Arrays & Strings</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>What is the output of the following code?</p><pre class=\"prettyprint linenums lang-c_cpp\" data-linenums=\"true\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"\" data-rawcode='#include &lt;stdio.h&gt; int main() { int a[] = {5, 10, 15}; int *p = a; printf(\"%d \", (*p)++); printf(\"%d \", *p++); printf(\"%d \", ++*p); printf(\"%d\", *++p); return 0; }' dir=\"ltr\">#include &lt;stdio.h&gt; int main() { int a[] = {5, 10, 15}; int *p = a; printf(\"%d \", (*p)++); printf(\"%d \", *p++); printf(\"%d \", ++*p); printf(\"%d\", *++p); return 0; }</pre></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\texttt{5 6 11 15}$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{5 10 11 15}$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{6 6 11 15}$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{5 6 10 15}$</span>"
            ],
            "answer": "A",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"536182\"></a><div itemprop=\"text\"><p style=\"text-align:center\"><img alt=\"\" height=\"503\" src=\"https://cdn.mathpix.com/snip/images/9d6fDmYfmXTvJSr3UCt8DCsfEj_okE-9Pv0dQwh1qs4.original.fullsize.png\" width=\"1233\"/></p><p> </p><p>Initial array:</p><p>$\\texttt{a[0] = 5}$</p><p>$\\texttt{a[1] = 10}$</p><p>$\\texttt{a[2] = 15}$</p><p>Initially, $\\texttt{p}$ points to $\\texttt{a[0]}$.</p><p>First print:</p><p>$\\texttt{(*p)++}$</p><p>This prints the current value of $\\texttt{a[0]}$, then increments $\\texttt{a[0]}$.</p><p>So, it prints $\\texttt{5}$.</p><p>Now $\\texttt{a[0]}$ becomes $\\texttt{6}$.</p><p>Second print:</p><p>$\\texttt{*p++}$</p><p>This means $\\texttt{*(p++)}$.</p><p>So, it first prints the value at current $\\texttt{p}$, then moves $\\texttt{p}$ to the next element.</p><p>Currently, $\\texttt{p}$ is still pointing to $\\texttt{a[0]}$.</p><p>So, it prints $\\texttt{6}$.</p><p>Then $\\texttt{p}$ moves to $\\texttt{a[1]}$.</p><p>Third print:</p><p>$\\texttt{++*p}$</p><p>This means increment the value pointed to by $\\texttt{p}$.</p><p>Now $\\texttt{p}$ points to $\\texttt{a[1]}$.</p><p>So, $\\texttt{a[1]}$ changes from $\\texttt{10}$ to $\\texttt{11}$.</p><p>Then it prints $\\texttt{11}$.</p><p>Fourth print:</p><p>$\\texttt{*++p}$</p><p>This means first move $\\texttt{p}$ to the next element, then dereference it.</p><p>So, $\\texttt{p}$ moves from $\\texttt{a[1]}$ to $\\texttt{a[2]}$.</p><p>Then it prints $\\texttt{a[2]}$, which is $\\texttt{15}$.<br/> </p><p>$\\therefore$ <strong>Output :</strong> $\\texttt{5 6 11 15}$<br/> </p><p><strong>Answer : A</strong></p></div><br><br><a href=\"https://gateoverflow.in/536181/go-classes-dpp-gate-cs-c-programming-pointer-arithmetic#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-c-programming-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/c-programming\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">C Programming - Pointers, Arrays & Strings</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>What is the output of the following code?</p><pre class=\"prettyprint linenums lang-c_cpp\" data-linenums=\"true\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"\" data-rawcode='#include &lt;stdio.h&gt; void change(int **pp, int *q) { **pp = **pp + 3; *pp = q; **pp = **pp + 4; } int main() { int a = 5, b = 10; int *p = &amp;a; change(&amp;p, &amp;b); printf(\"%d %d %d\", a, b, *p); return 0; }' dir=\"ltr\">#include &lt;stdio.h&gt; void change(int **pp, int *q) { **pp = **pp + 3; *pp = q; **pp = **pp + 4; } int main() { int a = 5, b = 10; int *p = &amp;a; change(&amp;p, &amp;b); printf(\"%d %d %d\", a, b, *p); return 0; }</pre></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\texttt{8 10 8}$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{8 14 14}$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{5 14 14}$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{8 14 8}$</span>"
            ],
            "answer": "B",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"536178\"></a><div itemprop=\"text\"><p style=\"text-align:center\"><img alt=\"\" height=\"414\" src=\"https://cdn.mathpix.com/snip/images/_tIdMRGznTtF1yGVMFcGZnnqg7iU5RlG-lEEEJCRt4E.original.fullsize.png\" width=\"790\"/></p><p><br/> </p><p>In $\\texttt{main()}$:</p><p>$\\texttt{a = 5}$, $\\texttt{b = 10}$</p><p>and</p><p>$\\texttt{p}$ points to $\\texttt{a}$.</p><p>Now the function call is:</p><p>$\\texttt{change(\\&amp;p, \\&amp;b)}$</p><p>So, inside the function:</p><p>$\\texttt{pp}$ points to $\\texttt{p}$.</p><p>$\\texttt{q}$ points to $\\texttt{b}$.</p><p>First statement:</p><p>$\\texttt{**pp = **pp + 3}$</p><p>Since $\\texttt{*pp}$ is $\\texttt{p}$, and $\\texttt{p}$ points to $\\texttt{a}$, this changes $\\texttt{a}$.</p><p>So,</p><p>$\\texttt{a = 5 + 3 = 8}$</p><p>Second statement:</p><p>$\\texttt{*pp = q}$</p><p>This changes $\\texttt{p}$ itself.</p><p>Now $\\texttt{p}$ no longer points to $\\texttt{a}$.</p><p>Now $\\texttt{p}$ points to $\\texttt{b}$.</p><p>Third statement:</p><p>$\\texttt{**pp = **pp + 4}$</p><p>Now $\\texttt{p}$ points to $\\texttt{b}$, so this changes $\\texttt{b}$.</p><p>So,</p><p>$\\texttt{b = 10 + 4 = 14}$</p><p>At the end:</p><p>$\\texttt{a = 8}$</p><p>$\\texttt{b = 14}$</p><p>$\\texttt{p}$ points to $\\texttt{b}$, so $\\texttt{*p = 14}$.<br/> </p><p>$\\therefore$ <strong>Output :</strong> $\\texttt{8 14 14}$<br/> </p><p><strong>Answer: B</strong></p></div><br><br><a href=\"https://gateoverflow.in/536177/go-classes-dpp-gate-cs-c-programming-pointer-to-pointer#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-c-programming-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/c-programming\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">C Programming - Pointers, Arrays & Strings</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>What is the output of the following code?</p><pre class=\"prettyprint linenums lang-c_cpp\" data-linenums=\"true\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"\" data-rawcode='#include &lt;stdio.h&gt; int main() { int a = 10; int *p = &amp;a; int **q = &amp;p; **q = **q + 5; *p = *p + 2; printf(\"%d %d\", a, **q); return 0; }' dir=\"ltr\">#include &lt;stdio.h&gt; int main() { int a = 10; int *p = &amp;a; int **q = &amp;p; **q = **q + 5; *p = *p + 2; printf(\"%d %d\", a, **q); return 0; }</pre></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\texttt{15 15}$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{17 17}$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{12 17}$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{Compilation error}$</span>"
            ],
            "answer": "B",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"536176\"></a><div itemprop=\"text\"><p style=\"text-align:center\"><img alt=\"\" height=\"295\" src=\"https://cdn.mathpix.com/snip/images/BOZEfD0hYqYPhSXzJRrxHBvkCDotXz-gPCCJt9cw8dU.original.fullsize.png\" width=\"768\"/></p><p><br/>Here, $\\texttt{p}$ points to $\\texttt{a}$.</p><p>Also, $\\texttt{q}$ points to $\\texttt{p}$.</p><p>So,</p><p>$\\texttt{*q}$ gives $\\texttt{p}$</p><p>and</p><p>$\\texttt{**q}$ gives the value of $\\texttt{a}$.</p><p>Initially:</p><p>$\\texttt{a = 10}$</p><p>Now,</p><p>$\\texttt{**q = **q + 5}$</p><p>This means:</p><p>$\\texttt{a = a + 5 = 15}$</p><p>Then,</p><p>$\\texttt{*p = *p + 2}$</p><p>Since $\\texttt{p}$ points to $\\texttt{a}$, this becomes:</p><p>$\\texttt{a = 15 + 2 = 17}$</p><p>So,</p><p>$\\texttt{a = 17}$</p><p>and</p><p>$\\texttt{**q = 17}$<br/> </p><p>$\\therefore$<strong> Output :</strong> $\\texttt{17 17}$<br/> </p><p><strong>Answer: B</strong></p></div><br><br><a href=\"https://gateoverflow.in/536175/go-classes-dpp-gate-cs-c-programming-pointer-to-pointer#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-c-programming-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/c-programming\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">C Programming - Pointers, Arrays & Strings</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>What is the output of the following code?</p><pre class=\"prettyprint linenums lang-c_cpp\" data-linenums=\"true\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"\" data-rawcode='#include &lt;stdio.h&gt; void fun(int a[], int *p) { a[1] = a[1] + 5; *(p + 2) = *(p + 2) + 10; p++; *p = *p + 1; } int main() { int arr[] = {1, 2, 3, 4}; fun(arr, arr); printf(\"%d %d %d %d\", arr[0], arr[1], arr[2], arr[3]); return 0; }' dir=\"ltr\">#include &lt;stdio.h&gt; void fun(int a[], int *p) { a[1] = a[1] + 5; *(p + 2) = *(p + 2) + 10; p++; *p = *p + 1; } int main() { int arr[] = {1, 2, 3, 4}; fun(arr, arr); printf(\"%d %d %d %d\", arr[0], arr[1], arr[2], arr[3]); return 0; }</pre></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\texttt{1 7 13 4}$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{1 8 13 4}$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{1 8 3 4}$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{1 7 3 4}$</span>"
            ],
            "answer": "B",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"536030\"></a><div itemprop=\"text\"><p style=\"text-align:center\"><img alt=\"\" height=\"448\" src=\"https://cdn.mathpix.com/snip/images/Yqz2J1egZBpeeV2IqjS0m0N1EkAnylvRJj5g7exWlQ4.original.fullsize.png\" width=\"827\"/></p><p><br/>In the function call:</p><p>$\\texttt{fun(arr, arr)}$</p><p>the array base address is passed.</p><p>So, inside $\\texttt{fun()}$, both $\\texttt{a}$ and $\\texttt{p}$ refer to the same array.</p><p>Initial array:</p><p>$\\texttt{arr[0] = 1}$<br/>$\\texttt{arr[1] = 2}$<br/>$\\texttt{arr[2] = 3}$<br/>$\\texttt{arr[3] = 4}$</p><p>First statement:</p><p>$\\texttt{a[1] = a[1] + 5}$</p><p>So,</p><p>$\\texttt{arr[1] = 2 + 5 = 7}$</p><p>Now array becomes:</p><p>$\\texttt{1, 7, 3, 4}$</p><p>Second statement:</p><p>$\\texttt{*(p + 2) = *(p + 2) + 10}$</p><p>Since $\\texttt{p}$ points to $\\texttt{arr[0]}$, $\\texttt{p + 2}$ points to $\\texttt{arr[2]}$.</p><p>So,</p><p>$\\texttt{arr[2] = 3 + 10 = 13}$</p><p>Now array becomes:</p><p>$\\texttt{1, 7, 13, 4}$</p><p>Then,</p><p>$\\texttt{p++}$</p><p>Now $\\texttt{p}$ points to $\\texttt{arr[1]}$.</p><p>Finally,</p><p>$\\texttt{*p = *p + 1}$</p><p>So,</p><p>$\\texttt{arr[1] = 7 + 1 = 8}$</p><p>Final array becomes:</p><p>$\\texttt{1, 8, 13, 4}$</p><p>Therefore, the output is $\\texttt{1 8 13 4}$.</p><p><br/><strong>Answer: B</strong></p></div><br><br><a href=\"https://gateoverflow.in/536026/go-classes-dpp-gate-cs-c-programming-array-%26-pointers#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-c-programming-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/c-programming\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">C Programming - Pointers, Arrays & Strings</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>What is the output of the following code?</p><pre class=\"prettyprint linenums lang-c_cpp\" data-linenums=\"true\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"\" data-rawcode='#include &lt;stdio.h&gt; int main() { int a[] = {10, 20, 30}; int *p = a; printf(\"%d \", *p++); printf(\"%d \", *p); printf(\"%d\", ++*p); return 0; }' dir=\"ltr\">#include &lt;stdio.h&gt; int main() { int a[] = {10, 20, 30}; int *p = a; printf(\"%d \", *p++); printf(\"%d \", *p); printf(\"%d\", ++*p); return 0; }</pre></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\texttt{10 20 21}$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{10 20 20}$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{11 20 21}$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{10 21 21}$</span>"
            ],
            "answer": "A",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"536029\"></a><div itemprop=\"text\"><p style=\"text-align:center\"><img alt=\"\" height=\"410\" src=\"https://cdn.mathpix.com/snip/images/fnK9QPCevHYEyj2aeQEQAW2iv6UfDxRuthmHFHSGlMA.original.fullsize.png\" width=\"748\"/></p><p>Initially, $\\texttt{p}$ points to $\\texttt{a[0]}$.</p><p>So,</p><p>$\\texttt{*p = 10}$</p><p>Now look at the first print:</p><p>$\\texttt{*p++}$</p><p>Post-increment has higher priority than dereference.</p><p>So,</p><p>$\\texttt{*p++}$ means:</p><p>$\\texttt{*(p++)}$</p><p>This prints the value at current $\\texttt{p}$ first, then moves $\\texttt{p}$ to the next element.</p><p>So, it prints $\\texttt{10}$ and then $\\texttt{p}$ moves to $\\texttt{a[1]}$.</p><p>Now second print:</p><p>$\\texttt{*p}$</p><p>Since $\\texttt{p}$ points to $\\texttt{a[1]}$, it prints $\\texttt{20}$.</p><p>Now third print:</p><p>$\\texttt{++*p}$</p><p>This means increment the value pointed to by $\\texttt{p}$.</p><p>Currently, $\\texttt{p}$ points to $\\texttt{a[1]}$.</p><p>So, $\\texttt{a[1]}$ changes from $\\texttt{20}$ to $\\texttt{21}$.</p><p>Then it prints $\\texttt{21}$.</p><p>Therefore, the output is $\\texttt{10 20 21}$.</p><p><br/><strong>Answer: A</strong></p></div><br><br><a href=\"https://gateoverflow.in/536024/go-classes-dpp-gate-cs-c-programming-pointer-increment#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-c-programming-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/c-programming\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">C Programming - Pointers, Arrays & Strings</a></b></div></div>"
        }
    ]
});

registerTest({
    "name": "DPP 04 - C Programming (Pointers, Arrays & Strings - Part 4)",
    "testLabel": "DPP 04",
    "testType": "DPP",
    "bracket": "Pointers, Arrays & Strings - Part 4",
    "subject": "c_prog",
    "series": "cse-dpp-2027",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 10,
    "topicsCovered": "Pointers, Arrays & Strings (Practice Set 4)",
    "questions": [
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>What is the output of the following code?</p><pre class=\"prettyprint linenums lang-c_cpp\" data-linenums=\"true\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"\" data-rawcode='#include &lt;stdio.h&gt; int main() { int a[] = {3, 5, 7, 9}; printf(\"%d %d %d\", *(a + 1), 2[a], *(2 + a)); return 0; }' dir=\"ltr\">#include &lt;stdio.h&gt; int main() { int a[] = {3, 5, 7, 9}; printf(\"%d %d %d\", *(a + 1), 2[a], *(2 + a)); return 0; }</pre></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\texttt{5 7 7}$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{5 2 7}$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{7 7 5}$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{Compilation error}$</span>"
            ],
            "answer": "A",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"536027\"></a><div itemprop=\"text\"><p style=\"text-align:center\"><img alt=\"\" height=\"309\" src=\"https://cdn.mathpix.com/snip/images/QSDzx5h3lurJJZYQIpCXnPKi4h0PRyQ-forU9rkQk-w.original.fullsize.png\" width=\"494\"/></p><p>In C,</p><p>$\\texttt{a[i]}$ is the same as $\\texttt{*(a + i)}$.</p><p>So,</p><p>$\\texttt{*(a + 1) = a[1] = 5}$</p><p>Now,</p><p>$\\texttt{2[a]}$ may look unusual, but it is valid in C.</p><p>Because:</p><p>$\\texttt{2[a] = *(2 + a)}$</p><p>And this is the same as:</p><p>$\\texttt{a[2]}$</p><p>So,</p><p>$\\texttt{2[a] = a[2] = 7}$</p><p>Also,</p><p>$\\texttt{*(2 + a) = a[2] = 7}$</p><p>Therefore, the output is $\\texttt{5 7 7}$.<br/> </p><p><strong>Answer: A</strong></p></div><br><br><a href=\"https://gateoverflow.in/536022/go-classes-dpp-gate-cs-c-programming-pointer-notation#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-c-programming-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/c-programming\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">C Programming - Pointers, Arrays & Strings</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>What is the output of the following code?</p><pre class=\"prettyprint linenums lang-c_cpp\" data-linenums=\"true\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"\" data-rawcode='#include &lt;stdio.h&gt; int main() { int a[] = {2, 4, 6, 8}; int *p = a; p = p + 2; printf(\"%d %d\", *p, p[-1]); return 0; }' dir=\"ltr\">#include &lt;stdio.h&gt; int main() { int a[] = {2, 4, 6, 8}; int *p = a; p = p + 2; printf(\"%d %d\", *p, p[-1]); return 0; }</pre></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\texttt{6 4}$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{6 6}$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{4 6}$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{8 6}$</span>"
            ],
            "answer": "A",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"536023\"></a><div itemprop=\"text\"><p style=\"text-align:center\"><img alt=\"\" height=\"341\" src=\"https://cdn.mathpix.com/snip/images/POFc4fWWT3P8q-okinRDmEFZu8cMmM-S8YyyDCq5-5U.original.fullsize.png\" width=\"652\"/></p><p> </p><p>Initially, $\\texttt{p}$ points to $\\texttt{a[0]}$.</p><p>The array is:</p><p>$\\texttt{a[0] = 2}$<br/>$\\texttt{a[1] = 4}$<br/>$\\texttt{a[2] = 6}$<br/>$\\texttt{a[3] = 8}$</p><p>Now,</p><p>$\\texttt{p = p + 2}$</p><p>So, $\\texttt{p}$ moves from $\\texttt{a[0]}$ to $\\texttt{a[2]}$.</p><p>Therefore,</p><p>$\\texttt{*p = a[2] = 6}$</p><p>Now,</p><p>$\\texttt{p[-1]}$ means:</p><p>$\\texttt{*(p - 1)}$</p><p>Since $\\texttt{p}$ is currently pointing to $\\texttt{a[2]}$, $\\texttt{p - 1}$ points to $\\texttt{a[1]}$.</p><p>So,</p><p>$\\texttt{p[-1] = a[1] = 4}$</p><p>Therefore, the output is $\\texttt{6 4}$.</p><p><br/><strong>Answer: A</strong></p></div><br><br><a href=\"https://gateoverflow.in/536020/go-classes-dpp-gate-cs-c-programming-pointer-arithmetic#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-c-programming-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/c-programming\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">C Programming - Pointers, Arrays & Strings</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>What is the output of the following code?</p><pre class=\"prettyprint linenums lang-c_cpp\" data-linenums=\"true\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"\" data-rawcode='#include &lt;stdio.h&gt; int main() { int arr[] = {10, 20, 30}; int *p = arr; printf(\"%d %d\", *p, *(arr + 2)); return 0; }' dir=\"ltr\">#include &lt;stdio.h&gt; int main() { int arr[] = {10, 20, 30}; int *p = arr; printf(\"%d %d\", *p, *(arr + 2)); return 0; }</pre></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\texttt{10 20}$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{10 30}$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{20 30}$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{Compilation error}$</span>"
            ],
            "answer": "B",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"536019\"></a><div itemprop=\"text\"><p style=\"text-align:center\"><img alt=\"\" height=\"291\" src=\"https://cdn.mathpix.com/snip/images/TFelZEbrP0tqKiCnZwfDs0iEiqoh5kQv4U_9-BEEb7I.original.fullsize.png\" width=\"607\"/></p><p>Here, $\\texttt{arr}$ represents the base address of the array.</p><p>So,</p><p>$\\texttt{p = arr}$</p><p>means $\\texttt{p}$ points to the first element of the array.</p><p>Now,</p><p>$\\texttt{*p}$ gives the value of the first element.</p><p>So,</p><p>$\\texttt{*p = arr[0] = 10}$</p><p>Also,</p><p>$\\texttt{*(arr + 2)}$ means the value at index $\\texttt{2}$.</p><p>So,</p><p>$\\texttt{*(arr + 2) = arr[2] = 30}$<br/> </p><p>$\\therefore$ <strong>Output :</strong> $\\texttt{10 30}$</p><p><strong>Answer: B</strong></p></div><br><br><a href=\"https://gateoverflow.in/536016/go-classes-dpp-gate-cs-c-programming-array-%26-pointers#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-c-programming-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/c-programming\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">C Programming - Pointers, Arrays & Strings</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>What is the output of the following code?</p><pre class=\"prettyprint linenums lang-c_cpp\" data-linenums=\"true\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"\" data-rawcode='#include &lt;stdio.h&gt; int main() { int *p; printf(\"%d\", *p); return 0; }' dir=\"ltr\">#include &lt;stdio.h&gt; int main() { int *p; printf(\"%d\", *p); return 0; }</pre></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\texttt{0}$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{Garbage value}$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{Compilation error}$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{Undefined behavior}$</span>"
            ],
            "answer": "D",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"535888\"></a><div itemprop=\"text\"><p style=\"text-align:center\"><img alt=\"\" height=\"435\" src=\"https://cdn.mathpix.com/snip/images/8RGmU0YVQw30UdmbFGCywN7Qk4XxGpHKFovyAxOEQAI.original.fullsize.png\" width=\"755\"/></p><p> </p><p>So, the program has undefined behavior.</p><p>It may print something, crash, or behave unpredictably.</p><p>Therefore, the correct answer is $\\texttt{Undefined behavior}$.</p><p><strong>Answer: D</strong></p></div><br><br><a href=\"https://gateoverflow.in/535887/go-classes-dpp-gate-cs-c-programming-uninitialized-pointer#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-c-programming-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/c-programming\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">C Programming - Pointers, Arrays & Strings</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>What is the output of the following code?</p><pre class=\"prettyprint linenums lang-c_cpp\" data-linenums=\"true\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"\" data-rawcode='#include &lt;stdio.h&gt; void change(int *p, int q) { *p = *p + q; q = q + 5; *p = *p + q; } int main() { int a = 2, b = 3; change(&amp;a, b); printf(\"%d %d\", a, b); return 0; }' dir=\"ltr\">#include &lt;stdio.h&gt; void change(int *p, int q) { *p = *p + q; q = q + 5; *p = *p + q; } int main() { int a = 2, b = 3; change(&amp;a, b); printf(\"%d %d\", a, b); return 0; }</pre></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\texttt{5 3}$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{10 8}$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{13 3}$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{13 8}$</span>"
            ],
            "answer": "C",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"535884\"></a><div itemprop=\"text\"><p style=\"text-align:center\"><img alt=\"\" height=\"407\" src=\"https://cdn.mathpix.com/snip/images/uuXBwIpQqn9pLBTTFdg67ZWgt9H88_hwRjh9zYQRIHA.original.fullsize.png\" width=\"774\"/></p><p>In the function call:</p><p>$\\texttt{change(\\&amp;a, b)}$</p><p>$\\texttt{p}$ receives the address of $\\texttt{a}$.</p><p>So, any change through $\\texttt{*p}$ changes original $\\texttt{a}$.</p><p>But $\\texttt{q}$ receives only the value of $\\texttt{b}$.</p><p>So, changing $\\texttt{q}$ does not change original $\\texttt{b}$.</p><p>Initially:</p><p>$\\texttt{a = 2}$ and $\\texttt{b = 3}$</p><p>Inside the function:</p><p>$\\texttt{q = 3}$</p><p>First statement:</p><p>$\\texttt{*p = *p + q}$</p><p>So,</p><p>$\\texttt{a = 2 + 3 = 5}$</p><p>Then,</p><p>$\\texttt{q = q + 5}$</p><p>So,</p><p>$\\texttt{q = 3 + 5 = 8}$</p><p>Now,</p><p>$\\texttt{*p = *p + q}$</p><p>So,</p><p>$\\texttt{a = 5 + 8 = 13}$</p><p>Original $\\texttt{b}$ is still $\\texttt{3}$.<br/> </p><p>$\\therefore$ <strong>Output :</strong> $\\texttt{13 3}$</p><p><strong>Answer: C</strong></p></div><br><br><a href=\"https://gateoverflow.in/535881/go-classes-dpp-gate-cs-c-programming-call-by-address#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-c-programming-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/c-programming\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">C Programming - Pointers, Arrays & Strings</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>What is the output of the following code?</p><pre class=\"prettyprint linenums lang-c_cpp\" data-linenums=\"true\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"\" data-rawcode='#include &lt;stdio.h&gt; int main() { int a = 5, b = 8; int *p = &amp;a; int *q = &amp;b; q = p; *q = *q + b; printf(\"%d %d\", a, b); return 0; }' dir=\"ltr\">#include &lt;stdio.h&gt; int main() { int a = 5, b = 8; int *p = &amp;a; int *q = &amp;b; q = p; *q = *q + b; printf(\"%d %d\", a, b); return 0; }</pre></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\texttt{5 13}$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{13 8}$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{13 13}$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{5 8}$</span>"
            ],
            "answer": "B",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"535880\"></a><div itemprop=\"text\"><p style=\"text-align:center\"><img alt=\"\" height=\"578\" src=\"https://cdn.mathpix.com/snip/images/2hRbdCAZAb6z5TcJgQubSixIHlYBHBHfDegfns5OsSQ.original.fullsize.png\" width=\"1033\"/></p><p> </p><p>Initially:</p><p>$\\texttt{a = 5}$ and $\\texttt{b = 8}$</p><p>$\\texttt{p}$ points to $\\texttt{a}$.</p><p>$\\texttt{q}$ points to $\\texttt{b}$.</p><p>Now,</p><p>$\\texttt{q = p}$</p><p>This means $\\texttt{q}$ also starts pointing to $\\texttt{a}$.</p><p>Now both $\\texttt{p}$ and $\\texttt{q}$ point to $\\texttt{a}$.</p><p>Then,</p><p>$\\texttt{*q = *q + b}$</p><p>Since $\\texttt{q}$ points to $\\texttt{a}$, $\\texttt{*q}$ means $\\texttt{a}$.</p><p>So,</p><p>$\\texttt{a = a + b = 5 + 8 = 13}$</p><p>$\\texttt{b}$ remains unchanged.</p><p>$\\therefore$ <strong>Output :</strong> $\\texttt{13 8}$</p><p><strong>Answer: B</strong></p></div><br><br><a href=\"https://gateoverflow.in/535875/go-classes-dpp-gate-cs-c-programming-pointer-aliasing#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-c-programming-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/c-programming\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">C Programming - Pointers, Arrays & Strings</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>What is the output of the following code?</p><pre class=\"prettyprint linenums lang-c_cpp\" data-linenums=\"true\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"\" data-rawcode='#include &lt;stdio.h&gt; int main() { int a = 10; int *p = &amp;a; *p = *p + 5; a = a + 2; printf(\"%d\", *p); return 0; }' dir=\"ltr\">#include &lt;stdio.h&gt; int main() { int a = 10; int *p = &amp;a; *p = *p + 5; a = a + 2; printf(\"%d\", *p); return 0; }</pre></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\texttt{10}$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{15}$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{17}$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{Garbage value}$</span>"
            ],
            "answer": "C",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"535873\"></a><div itemprop=\"text\"><p style=\"text-align:center\"><img alt=\"\" height=\"362\" src=\"https://cdn.mathpix.com/snip/images/UkVcBlJfWwPoszl2XTVnJGqU6SV6rv1Zq15k99ppKiQ.original.fullsize.png\" width=\"717\"/></p><p>Here, $\\texttt{p}$ points to $\\texttt{a}$.</p><p>So, changing $\\texttt{*p}$ directly changes $\\texttt{a}$.</p><p>Initially:</p><p>$\\texttt{a = 10}$</p><p>Now,</p><p>$\\texttt{*p = *p + 5}$</p><p>Since $\\texttt{*p}$ means $\\texttt{a}$, this becomes:</p><p>$\\texttt{a = 10 + 5 = 15}$</p><p>Then,</p><p>$\\texttt{a = a + 2}$</p><p>So,</p><p>$\\texttt{a = 15 + 2 = 17}$</p><p>Since $\\texttt{p}$ still points to $\\texttt{a}$, $\\texttt{*p}$ is also $\\texttt{17}$.</p><p>$\\therefore$ <strong>Output :</strong> $\\texttt{17}$</p><p><strong>Answer: C</strong></p></div><br><br><a href=\"https://gateoverflow.in/535871/go-classes-dpp-gate-cs-c-programming-pointer-update#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-c-programming-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/c-programming\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">C Programming - Pointers, Arrays & Strings</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>What is the output of the following code?</p><pre class=\"prettyprint linenums lang-c_cpp\" data-linenums=\"true\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"\" data-rawcode='#include &lt;stdio.h&gt; int main() { int a = 25; int *p = &amp;a; printf(\"%d %d\", a, *p); return 0; }' dir=\"ltr\">#include &lt;stdio.h&gt; int main() { int a = 25; int *p = &amp;a; printf(\"%d %d\", a, *p); return 0; }</pre></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\texttt{25 25}$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{25 address}$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{address 25}$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{Compilation error}$</span>"
            ],
            "answer": "A",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"535866\"></a><div itemprop=\"text\"><p style=\"text-align:center\"><img alt=\"\" height=\"347\" src=\"https://cdn.mathpix.com/snip/images/SK-afdwRYubFmJFuOtZ325fjT-RHnIYzkD9NWRAR6Xo.original.fullsize.png\" width=\"590\"/></p><p>Here, $\\texttt{p}$ is a pointer to integer.</p><p>$\\texttt{p = \\&amp;a}$ means $\\texttt{p}$ stores the address of $\\texttt{a}$.</p><p>$\\texttt{*p}$ means value stored at the address present in $\\texttt{p}$.</p><p>Since $\\texttt{p}$ points to $\\texttt{a}$, $\\texttt{*p}$ gives the value of $\\texttt{a}$.</p><p>So,</p><p>$\\texttt{a = 25}$</p><p>$\\texttt{*p = 25}$<br/> </p><p>$\\therefore$ <strong>Output :</strong> $\\texttt{25 25}$</p></div><br><br><a href=\"https://gateoverflow.in/535865/go-classes-dpp-gate-cs-c-programming-address-and-dereference#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-c-programming-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/c-programming\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">C Programming - Pointers, Arrays & Strings</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>What is the output of the following code?</p><pre class=\"prettyprint linenums lang-c_cpp\" data-linenums=\"true\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"\" data-rawcode='#include &lt;stdio.h&gt; void update(int n, int *p) { if (n &lt;= 0) return; *p = *p + n; update(n - 2, p); *p = *p + n; } int main() { int x = 1; update(5, &amp;x); printf(\"%d\", x); return 0; }' dir=\"ltr\">#include &lt;stdio.h&gt; void update(int n, int *p) { if (n &lt;= 0) return; *p = *p + n; update(n - 2, p); *p = *p + n; } int main() { int x = 1; update(5, &amp;x); printf(\"%d\", x); return 0; } </pre></div></span>",
            "image": "",
            "options": [],
            "answer": "19",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"535786\"></a><div itemprop=\"text\"><p style=\"text-align:center\"><img alt=\"\" height=\"403\" src=\"https://cdn.mathpix.com/snip/images/JrHo8e3sv68WQAU06cZ1OrJGI3epu_VCx5U-qYZg0Kw.original.fullsize.png\" width=\"768\"/></p><p>Here, pointer $\\texttt{p}$ points to $\\texttt{x}$.</p><p>So, every change made using $\\texttt{*p}$ directly changes the original variable $\\texttt{x}$.</p><p>Initially, $\\texttt{x = 1}$.</p><p>The call is $\\texttt{update(5, \\&amp;x)}$.</p><p>In $\\texttt{update(5)}$:</p><p>$\\texttt{*p = *p + 5}$</p><p>So, $\\texttt{x = 1 + 5 = 6}$</p><p>Then it calls $\\texttt{update(3, p)}$.</p><p>In $\\texttt{update(3)}$:</p><p>$\\texttt{*p = *p + 3}$</p><p>So, $\\texttt{x = 6 + 3 = 9}$</p><p>Then it calls $\\texttt{update(1, p)}$.</p><p>In $\\texttt{update(1)}$:</p><p>$\\texttt{*p = *p + 1}$</p><p>So, $\\texttt{x = 9 + 1 = 10}$</p><p>Then it calls $\\texttt{update(-1, p)}$.</p><p>Since $\\texttt{n &lt;= 0}$, it returns immediately.</p><p>Now returning starts.</p><p>Back in $\\texttt{update(1)}$:</p><p>$\\texttt{*p = *p + 1}$</p><p>So, $\\texttt{x = 10 + 1 = 11}$</p><p>Back in $\\texttt{update(3)}$:</p><p>$\\texttt{*p = *p + 3}$</p><p>So, $\\texttt{x = 11 + 3 = 14}$</p><p>Back in $\\texttt{update(5)}$:</p><p>$\\texttt{*p = *p + 5}$</p><p>So, $\\texttt{x = 14 + 5 = 19}$<br/> </p><p>$\\therefore$ <strong>Output :</strong> $\\boxed{19}$</p></div><br><br><a href=\"https://gateoverflow.in/535785/go-classes-dpp-gate-cs-c-programming-pointer-recursion#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-c-programming-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/c-programming\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">C Programming - Pointers, Arrays & Strings</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"338\" data-start=\"281\">What is the output of the following code?</p><pre class=\"prettyprint linenums lang-c_cpp\" data-end=\"538\" data-linenums=\"true\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"\" data-rawcode='#include &lt;stdio.h&gt; void update(int *p, int *q) { *p = *p + 2; *q = *q + 3; *p = *p + *q; } int main() { int a = 5; update(&amp;a, &amp;a); printf(\"%d\", a); return 0; }' data-start=\"340\">#include &lt;stdio.h&gt; void update(int *p, int *q) { *p = *p + 2; *q = *q + 3; *p = *p + *q; } int main() { int a = 5; update(&amp;a, &amp;a); printf(\"%d\", a); return 0; }</pre></div></span>",
            "image": "",
            "options": [],
            "answer": "20",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"534509\"></a><div itemprop=\"text\"><p data-end=\"712\" data-start=\"615\">Here, both $\\texttt{p}$ and $\\texttt{q}$ point to the same variable $\\texttt{a}$.</p><p data-end=\"742\" data-start=\"714\">Initially, $\\texttt{a = 5}$.</p><p data-end=\"802\" data-start=\"744\">The statement $\\texttt{*p = *p + 2}$ changes $\\texttt{a}$.</p><p data-end=\"833\" data-start=\"804\">So, $\\texttt{a = 5 + 2 = 7}$.</p><p data-end=\"907\" data-start=\"835\">Now, $\\texttt{*q = *q + 3}$ also changes the same variable $\\texttt{a}$.</p><p data-end=\"939\" data-start=\"909\">So, $\\texttt{a = 7 + 3 = 10}$.</p><p data-end=\"1041\" data-start=\"941\">Now, $\\texttt{*p = *p + *q}$ means $\\texttt{a = a + a}$ because both pointers point to $\\texttt{a}$.</p><p data-end=\"1075\" data-start=\"1043\">So, $\\texttt{a = 10 + 10 = 20}$.</p><p data-end=\"1116\" data-start=\"1077\">Therefore, the output is $\\texttt{20}$.</p></div><br><br><a href=\"https://gateoverflow.in/534508/go-classes-dpp-gate-cs-c-programming-pointer-aliasing#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-c-programming-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/c-programming\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">C Programming - Pointers, Arrays & Strings</a></b></div></div>"
        }
    ]
});

registerTest({
    "name": "DPP 05 - C Programming (Pointers, Arrays & Strings - Part 5)",
    "testLabel": "DPP 05",
    "testType": "DPP",
    "bracket": "Pointers, Arrays & Strings - Part 5",
    "subject": "c_prog",
    "series": "cse-dpp-2027",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 10,
    "topicsCovered": "Pointers, Arrays & Strings (Practice Set 5)",
    "questions": [
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"3005\" data-start=\"2948\">What is the output of the following code?</p><pre class=\"prettyprint linenums lang-c_cpp\" data-end=\"3243\" data-linenums=\"true\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"\" data-rawcode='#include &lt;stdio.h&gt; int solve(int n) { static int x = 1; if (n == 0) return x; x = x + n; return solve(n - 1); } int main() { printf(\"%d \", solve(3)); printf(\"%d\", solve(2)); return 0; }' data-start=\"3007\">#include &lt;stdio.h&gt; int solve(int n) { static int x = 1; if (n == 0) return x; x = x + n; return solve(n - 1); } int main() { printf(\"%d \", solve(3)); printf(\"%d\", solve(2)); return 0; }</pre></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\texttt{7\\ 10}$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{7\\ 7}$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{6\\ 9}$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{10\\ 7}$</span>"
            ],
            "answer": "A",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"534198\"></a><div itemprop=\"text\"><p data-end=\"3386\" data-start=\"3330\">Here, $\\texttt{x}$ is a static variable.</p><p data-end=\"3474\" data-start=\"3388\">A static variable is initialized only once and keeps its value between function calls.</p><p data-end=\"3510\" data-start=\"3476\">First call is $\\texttt{solve(3)}$.</p><p data-end=\"3540\" data-start=\"3512\">Initially, $\\texttt{x = 1}$.</p><p data-end=\"3589\" data-start=\"3542\">For $\\texttt{n = 3}$, $\\texttt{x = 1 + 3 = 4}$.</p><p data-end=\"3638\" data-start=\"3591\">For $\\texttt{n = 2}$, $\\texttt{x = 4 + 2 = 6}$.</p><p data-end=\"3687\" data-start=\"3640\">For $\\texttt{n = 1}$, $\\texttt{x = 6 + 1 = 7}$.</p><p data-end=\"3773\" data-start=\"3689\">For $\\texttt{n = 0}$, the function returns $\\texttt{x}$, so it returns $\\texttt{7}$.</p><p data-end=\"3815\" data-start=\"3775\">So, first printed value is $\\texttt{7}$.</p><p data-end=\"3856\" data-start=\"3817\">Now second call is $\\texttt{solve(2)}$.</p><p data-end=\"3961\" data-start=\"3858\">Since $\\texttt{x}$ is static, it does not reset to $\\texttt{1}$. It starts from old value $\\texttt{7}$.</p><p data-end=\"4010\" data-start=\"3963\">For $\\texttt{n = 2}$, $\\texttt{x = 7 + 2 = 9}$.</p><p data-end=\"4060\" data-start=\"4012\">For $\\texttt{n = 1}$, $\\texttt{x = 9 + 1 = 10}$.</p><p data-end=\"4147\" data-start=\"4062\">For $\\texttt{n = 0}$, the function returns $\\texttt{x}$, so it returns $\\texttt{10}$.</p><p data-end=\"4191\" data-start=\"4149\">Therefore, the output is $\\texttt{7\\ 10}$.</p><p data-end=\"4224\" data-start=\"4193\"><strong data-end=\"4204\" data-start=\"4193\">Answer:</strong> <strong>A.</strong></p></div><br><br><a href=\"https://gateoverflow.in/534197/go-classes-dpp-gate-cs-c-programming-static-variable-in-recursion#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-c-programming-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/c-programming\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">C Programming - Pointers, Arrays & Strings</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"256\" data-start=\"199\">What is the output of the following code?</p><pre class=\"prettyprint linenums lang-c_cpp\" data-end=\"453\" data-linenums=\"true\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"\" data-rawcode='#include &lt;stdio.h&gt; int main() { int a = 5, b = 10; int *p = &amp;a; int **q = &amp;p; **q = **q + 3; p = &amp;b; **q = **q + a; printf(\"%d %d\", a, b); return 0; }' data-start=\"258\">#include &lt;stdio.h&gt; int main() { int a = 5, b = 10; int *p = &amp;a; int **q = &amp;p; **q = **q + 3; p = &amp;b; **q = **q + a; printf(\"%d %d\", a, b); return 0; }</pre></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\texttt{8\\ 18}$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{5\\ 15}$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{8\\ 10}$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{5\\ 18}$</span>"
            ],
            "answer": "A",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"534192\"></a><div itemprop=\"text\"><p data-end=\"608\" data-start=\"542\">Initially, $\\texttt{a = 5}$ and $\\texttt{b = 10}$.</p><p data-end=\"654\" data-start=\"610\">Pointer $\\texttt{p}$ points to $\\texttt{a}$.</p><p data-end=\"700\" data-start=\"656\">Pointer $\\texttt{q}$ points to $\\texttt{p}$.</p><p data-end=\"784\" data-start=\"702\">So, $\\texttt{**q}$ means the value pointed by $\\texttt{p}$, which is $\\texttt{a}$.</p><p data-end=\"837\" data-start=\"786\">Now, $\\texttt{**q = **q + 3}$ changes $\\texttt{a}$.</p><p data-end=\"868\" data-start=\"839\">So, $\\texttt{a = 5 + 3 = 8}$.</p><p data-end=\"940\" data-start=\"870\">Now, $\\texttt{p = \\&amp;b}$ means $\\texttt{p}$ now points to $\\texttt{b}$.</p><p data-end=\"1027\" data-start=\"942\">Since $\\texttt{q}$ points to $\\texttt{p}$, now $\\texttt{**q}$ refers to $\\texttt{b}$.</p><p data-end=\"1089\" data-start=\"1029\">The statement $\\texttt{**q = **q + a}$ changes $\\texttt{b}$.</p><p data-end=\"1122\" data-start=\"1091\">So, $\\texttt{b = 10 + 8 = 18}$.</p><p data-end=\"1180\" data-start=\"1124\">Final values are $\\texttt{a = 8}$ and $\\texttt{b = 18}$.</p><p data-end=\"1213\" data-start=\"1182\"><strong data-end=\"1193\" data-start=\"1182\">Answer:</strong> <strong>A.</strong></p></div><br><br><a href=\"https://gateoverflow.in/534191/go-classes-dpp-gate-cs-c-programming-pointer-to-pointer#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-c-programming-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/c-programming\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">C Programming - Pointers, Arrays & Strings</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"4922\" data-start=\"4865\">What is the output of the following code?</p><pre class=\"prettyprint linenums lang-c_cpp\" data-linenums=\"true\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"\" data-rawcode='#include &lt;stdio.h&gt; void change(int *p, int *q) { *p = *p + 4; *q = *p + *q; p = q; *p = *p - 3; } int main() { int a = 6, b = 10; change(&amp;a, &amp;b); printf(\"%d %d\", a, b); return 0; }'>#include &lt;stdio.h&gt; void change(int *p, int *q) { *p = *p + 4; *q = *p + *q; p = q; *p = *p - 3; } int main() { int a = 6, b = 10; change(&amp;a, &amp;b); printf(\"%d %d\", a, b); return 0; }</pre></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\texttt{10\\ 17}$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{10\\ 20}$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{6\\ 17}$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{13\\ 17}$</span>"
            ],
            "answer": "A",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"534190\"></a><div itemprop=\"text\"><main id=\"main\" tabindex=\"-1\"><section data-scroll-anchor=\"false\" data-testid=\"conversation-turn-12\" data-turn=\"assistant\" data-turn-id=\"request-WEB:2b538e3f-809d-44dc-80d6-ce3c8e7c01c0-5\" data-turn-id-container=\"request-WEB:2b538e3f-809d-44dc-80d6-ce3c8e7c01c0-5\" dir=\"auto\"><p data-end=\"5308\" data-start=\"5242\">Initially, $\\texttt{a = 6}$ and $\\texttt{b = 10}$.</p><p data-end=\"5359\" data-start=\"5310\">The function call is $\\texttt{change(\\&amp;a, \\&amp;b)}$.</p><p data-end=\"5474\" data-start=\"5361\">Inside the function, pointer $\\texttt{p}$ points to $\\texttt{a}$ and pointer $\\texttt{q}$ points to $\\texttt{b}$.</p><p data-end=\"5534\" data-start=\"5476\">The statement $\\texttt{*p = *p + 4}$ changes $\\texttt{a}$.</p><p data-end=\"5566\" data-start=\"5536\">So, $\\texttt{a = 6 + 4 = 10}$.</p><p data-end=\"5627\" data-start=\"5568\">The statement $\\texttt{*q = *p + *q}$ changes $\\texttt{b}$.</p><p data-end=\"5677\" data-start=\"5629\">Here, $\\texttt{*p = 10}$ and $\\texttt{*q = 10}$.</p><p data-end=\"5711\" data-start=\"5679\">So, $\\texttt{b = 10 + 10 = 20}$.</p><p data-end=\"5800\" data-start=\"5713\">Now, $\\texttt{p = q}$ means local pointer $\\texttt{p}$ starts pointing to $\\texttt{b}$.</p><p data-end=\"5860\" data-start=\"5802\">The statement $\\texttt{*p = *p - 3}$ changes $\\texttt{b}$.</p><p data-end=\"5893\" data-start=\"5862\">So, $\\texttt{b = 20 - 3 = 17}$.</p><p data-end=\"5952\" data-start=\"5895\">Final values are $\\texttt{a = 10}$ and $\\texttt{b = 17}$.</p><p data-end=\"5997\" data-start=\"5954\">Therefore, the output is $\\texttt{10\\ 17}$.</p><p data-end=\"6031\" data-is-last-node=\"\" data-is-only-node=\"\" data-start=\"5999\"><strong data-end=\"6010\" data-start=\"5999\">Answer:</strong> <strong>A.</strong></p></section></main></div><br><br><a href=\"https://gateoverflow.in/534189/go-classes-dpp-gate-cs-c-programming-functions-and-pointers#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-c-programming-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/c-programming\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">C Programming - Pointers, Arrays & Strings</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"255\" data-start=\"198\">What is the output of the following code?</p><pre class=\"prettyprint linenums lang-c_cpp\" data-end=\"447\" data-linenums=\"true\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"\" data-rawcode='#include &lt;stdio.h&gt; int main() { int a = 8, b = 12; int *p = &amp;a; int *q = &amp;b; *p = *p + *q; q = p; *q = *q - 5; printf(\"%d %d\", a, b); return 0; }' data-start=\"257\">#include &lt;stdio.h&gt; int main() { int a = 8, b = 12; int *p = &amp;a; int *q = &amp;b; *p = *p + *q; q = p; *q = *q - 5; printf(\"%d %d\", a, b); return 0; }</pre></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\texttt{15\\ 12}$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{20\\ 12}$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{15\\ 15}$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{8\\ 12}$</span>"
            ],
            "answer": "A",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"534182\"></a><div itemprop=\"text\"><p data-end=\"605\" data-start=\"539\">Initially, $\\texttt{a = 8}$ and $\\texttt{b = 12}$.</p><p data-end=\"699\" data-start=\"607\">Pointer $\\texttt{p}$ points to $\\texttt{a}$ and pointer $\\texttt{q}$ points to $\\texttt{b}$.</p><p data-end=\"760\" data-start=\"701\">The statement $\\texttt{*p = *p + *q}$ changes $\\texttt{a}$.</p><p data-end=\"793\" data-start=\"762\">So, $\\texttt{a = 8 + 12 = 20}$.</p><p data-end=\"873\" data-start=\"795\">Now, $\\texttt{q = p}$ means $\\texttt{q}$ also starts pointing to $\\texttt{a}$.</p><p data-end=\"939\" data-start=\"875\">So now both $\\texttt{p}$ and $\\texttt{q}$ point to $\\texttt{a}$.</p><p data-end=\"1005\" data-start=\"941\">The statement $\\texttt{*q = *q - 5}$ again changes $\\texttt{a}$.</p><p data-end=\"1038\" data-start=\"1007\">So, $\\texttt{a = 20 - 5 = 15}$.</p><p data-end=\"1088\" data-start=\"1040\">The value of $\\texttt{b}$ remains $\\texttt{12}$.</p><p data-end=\"1133\" data-start=\"1090\">Therefore, the output is $\\texttt{15\\ 12}$.</p><p data-end=\"1167\" data-start=\"1135\"><strong data-end=\"1146\" data-start=\"1135\">Answer:</strong> <strong>A.</strong></p></div><br><br><a href=\"https://gateoverflow.in/534181/go-classes-dpp-gate-cs-c-programming-pointers#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-c-programming-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/c-programming\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">C Programming - Pointers, Arrays & Strings</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"167\" data-start=\"110\">What is the output of the following code?</p><pre class=\"prettyprint linenums lang-\" data-end=\"385\" data-linenums=\"true\" data-pbcklang=\"\" data-pbcktabsize=\"\" data-rawcode='#include &lt;stdio.h&gt; int main() { int a = 10, b = 20; int *p, *q; p = &amp;a; q = &amp;b; *p = *p + 5; *q = *p + *q; p = q; *p = *p - 10; printf(\"%d %d\", a, b); return 0; }' data-start=\"169\">#include &lt;stdio.h&gt; int main() { int a = 10, b = 20; int *p, *q; p = &amp;a; q = &amp;b; *p = *p + 5; *q = *p + *q; p = q; *p = *p - 10; printf(\"%d %d\", a, b); return 0; }</pre></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\texttt{15\\ 25}$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{15\\ 35}$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{10\\ 25}$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{25\\ 15}$</span>"
            ],
            "answer": "A",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"534055\"></a><div itemprop=\"text\"><p data-end=\"545\" data-start=\"478\">Initially, $\\texttt{a = 10}$ and $\\texttt{b = 20}$.</p><p data-end=\"642\" data-start=\"547\">The statement $\\texttt{p = \\&amp;a}$ means pointer $\\texttt{p}$ stores the address of $\\texttt{a}$.</p><p data-end=\"739\" data-start=\"644\">The statement $\\texttt{q = \\&amp;b}$ means pointer $\\texttt{q}$ stores the address of $\\texttt{b}$.</p><p data-end=\"847\" data-start=\"741\">Now, $\\texttt{*p = *p + 5}$ changes the value of $\\texttt{a}$ because $\\texttt{p}$ points to $\\texttt{a}$.</p><p data-end=\"880\" data-start=\"849\">So, $\\texttt{a = 10 + 5 = 15}$.</p><p data-end=\"989\" data-start=\"882\">Now, $\\texttt{*q = *p + *q}$ changes the value of $\\texttt{b}$ because $\\texttt{q}$ points to $\\texttt{b}$.</p><p data-end=\"1039\" data-start=\"991\">Here, $\\texttt{*p = 15}$ and $\\texttt{*q = 20}$.</p><p data-end=\"1073\" data-start=\"1041\">So, $\\texttt{b = 15 + 20 = 35}$.</p><p data-end=\"1172\" data-start=\"1075\">Now, $\\texttt{p = q}$ means pointer $\\texttt{p}$ now points to the same variable as $\\texttt{q}$.</p><p data-end=\"1239\" data-start=\"1174\">So now, both $\\texttt{p}$ and $\\texttt{q}$ point to $\\texttt{b}$.</p><p data-end=\"1291\" data-start=\"1241\">Now, $\\texttt{*p = *p - 10}$ changes $\\texttt{b}$.</p><p data-end=\"1325\" data-start=\"1293\">So, $\\texttt{b = 35 - 10 = 25}$.</p><p data-end=\"1384\" data-start=\"1327\">Final values are $\\texttt{a = 15}$ and $\\texttt{b = 25}$.</p><p data-end=\"1429\" data-start=\"1386\">Therefore, the output is $\\texttt{15\\ 25}$.</p><p data-end=\"1463\" data-is-last-node=\"\" data-is-only-node=\"\" data-start=\"1431\"><strong data-end=\"1442\" data-start=\"1431\">Answer:</strong> <strong>A.</strong></p></div><br><br><a href=\"https://gateoverflow.in/534054/go-classes-dpp-gate-cs-c-programming-pointers#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-c-programming-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/c-programming\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">C Programming - Pointers, Arrays & Strings</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"284\" data-start=\"227\">What is the output of the following code?</p><pre class=\"prettyprint linenums lang-c_cpp\" data-end=\"620\" data-linenums=\"true\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"\" data-rawcode='#include &lt;stdio.h&gt; int main() { int a[5] = {2, 4, 1, 3, 5}; int i, sum = 0; for (i = 0; i &lt; 5; i++) { if (a[i] % 2 == 0) sum = sum + a[i]; else { sum = sum + i; if (sum &gt; 8) break; } } printf(\"%d %d\", i, sum); return 0; }' data-start=\"286\">#include &lt;stdio.h&gt; int main() { int a[5] = {2, 4, 1, 3, 5}; int i, sum = 0; for (i = 0; i &lt; 5; i++) { if (a[i] % 2 == 0) sum = sum + a[i]; else { sum = sum + i; if (sum &gt; 8) break; } } printf(\"%d %d\", i, sum); return 0; }</pre></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\texttt{3\\ 11}$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{4\\ 16}$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{5\\ 16}$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{2\\ 8}$</span>"
            ],
            "answer": "A",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"534046\"></a><div itemprop=\"text\"><p data-end=\"754\" data-start=\"708\">Initially, $\\texttt{sum = 0}$.</p><p data-end=\"845\" data-start=\"756\">For $\\texttt{i = 0}$, $\\texttt{a[0] = 2}$, which is even. So, $\\texttt{sum = 0 + 2 = 2}$.</p><p data-end=\"936\" data-start=\"847\">For $\\texttt{i = 1}$, $\\texttt{a[1] = 4}$, which is even. So, $\\texttt{sum = 2 + 4 = 6}$.</p><p data-end=\"1081\" data-start=\"938\">For $\\texttt{i = 2}$, $\\texttt{a[2] = 1}$, which is odd. So, $\\texttt{sum = 6 + 2 = 8}$. Since $\\texttt{sum &gt; 8}$ is false, the loop continues.</p><p data-end=\"1172\" data-start=\"1083\">For $\\texttt{i = 3}$, $\\texttt{a[3] = 3}$, which is odd. So, $\\texttt{sum = 8 + 3 = 11}$.</p><p data-end=\"1238\" data-start=\"1174\">Now $\\texttt{sum &gt; 8}$ is true, so $\\texttt{break}$ is executed.</p><p data-end=\"1310\" data-start=\"1240\">Therefore, the loop stops at $\\texttt{i = 3}$ and $\\texttt{sum = 11}$.</p><p data-end=\"1343\" data-start=\"1312\"><strong data-end=\"1323\" data-start=\"1312\">Answer:</strong> A. $\\texttt{3\\ 11}$</p></div><br><br><a href=\"https://gateoverflow.in/534045/go-classes-dpp-gate-cs-c-programming-loop-control#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-c-programming-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/c-programming\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">C Programming - Pointers, Arrays & Strings</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Which of the following expressions is NOT equivalent to ${ }^*(\\operatorname{arr}+3)$ where arr is an integer array?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\operatorname{arr}[3]$<br/></span>",
                "<span style=\"display: inline;\">*(&arr $[0]+3)$<br/></span>",
                "<span style=\"display: inline;\">$* a r r+3$<br/></span>",
                "<span style=\"display: inline;\">$*(3+a r r)$</span>"
            ],
            "answer": "C",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"479610\"></a><div itemprop=\"text\">Ans: Option C<br/> <br/> A) Correct, $\\text{arr}[i] = *(\\text{arr} + i)$<br/> B) Correct, array name $(\\text{arr})$ represents address of first element $\\&amp;\\text{arr}[0]$<br/> <br/> C) Incorrect, $[*\\text{arr} + 3]$ first dereferences to $\\text{arr}[0]$ then we add 3. which doesn't match<br/> D) Correct, $\\text{arr}[3] = 3[\\text{arr}] = *(3 + \\text{arr})$</div><br><br><a href=\"https://gateoverflow.in/478595/go-classes-dpp-c-programming-pointers-dennis-richie#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-c-programming-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/c-programming\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">C Programming - Pointers, Arrays & Strings</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>What is the output of the following program: (Assume that the appropriate preprocessor directives are included and there is not syntax error)<br/> </p><pre class=\"prettyprint linenums lang-c_cpp\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"4\">main( ) { char S[]=\"ABCDEFGH\"; printf(\"%C\", *(&amp;S[3])); printf(\"%s\", S+4); printf(\"%u\", S); /*Base address of S is 1000 */ } </pre></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$ABCDEFGH1000$ <br/></span>",
                "<span style=\"display: inline;\">$CDEFGH1000$ <br/></span>",
                "<span style=\"display: inline;\">$DDEFGHH1000$ <br/></span>",
                "<span style=\"display: inline;\">$DEFGH1000$</span>"
            ],
            "answer": "D",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"477449\"></a><div itemprop=\"text\"><p>Ans : D maybe😁</p><hr/><p>First Printf statement is Give Value at S[3] mean D</p><p>Second Give base address +4*(value of each string like for int ,float = 4 ) Give E to whole string EFGH</p><p>Third and last is base address of s mean 1000 and if you not solve 3rd statement also okay because in all option same value</p><p> </p><p>and correct me if i am wrong</p></div><br><br><a href=\"https://gateoverflow.in/477406/go-classes-dpp-c-programming-strings-ugc-net#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-c-programming-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/c-programming\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">C Programming - Pointers, Arrays & Strings</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p><b id=\"docs-internal-guid-6511b545-7fff-de04-5b24-5c935f9b04b3\">Consider the following C code:</b></p><pre class=\"prettyprint linenums lang-c_cpp\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"4\">int arr[] = {10, 20, 30, 40, 50}; int *p = arr + 2; printf(\"%d\", *(p - 1)); </pre><p>What is the output of this code? </p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$10$ <br/></span>",
                "<span style=\"display: inline;\">$20$ <br/></span>",
                "<span style=\"display: inline;\">$30$ <br/></span>",
                "<span style=\"display: inline;\">$40$</span>"
            ],
            "answer": "A",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"477401\"></a><div itemprop=\"text\">p points to $\\operatorname{arr}[2]$, which is $30, \\mathrm{p}-1$ points to $\\operatorname{arr}[1]$, which is 20 .</div><br><br><a href=\"https://gateoverflow.in/477400/go-classes-dpp-c-programming-pointers-dennis-richie#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-c-programming-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/c-programming\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">C Programming - Pointers, Arrays & Strings</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>What is the output of the following code?</p><pre class=\"prettyprint linenums lang-c_cpp\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"4\">#include &lt;stdio.h&gt; int main() { int val[] = {5, 10, 15}; int *ptr = val; *ptr++ = 20; printf(\"%d %d %d\\n\", val[0], ptr[2], val[2]); return 0; } </pre></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">5 10 15<br/></span>",
                "<span style=\"display: inline;\">20 15 15<br/></span>",
                "<span style=\"display: inline;\">20 10 15<br/></span>",
                "<span style=\"display: inline;\">None of the above</span>"
            ],
            "answer": "D",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"474338\"></a><div itemprop=\"text\"><p><strong>Answer: D. None of the above</strong><br/><br/>*ptr++ = 20; sets val [0] = 20, then ptr points to val[1] ptr[2] refers to val[3], which is out-of-bounds and causes undefined behavior<br/>So the output is not guaranteed, making Option D the correct choice.</p></div><br><br><a href=\"https://gateoverflow.in/474336/go-classes-dpp-c-programming-pointers-peter-van-der-linden#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-c-programming-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/c-programming\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">C Programming - Pointers, Arrays & Strings</a></b></div></div>"
        }
    ]
});

registerTest({
    "name": "DPP 06 - C Programming (Pointers, Arrays & Strings - Part 6)",
    "testLabel": "DPP 06",
    "testType": "DPP",
    "bracket": "Pointers, Arrays & Strings - Part 6",
    "subject": "c_prog",
    "series": "cse-dpp-2027",
    "date": "Nov 03, 2026",
    "duration": "15 Min",
    "totalMarks": 4,
    "topicsCovered": "Pointers, Arrays & Strings (Practice Set 6)",
    "questions": [
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>What is the output of the code given below?</p><pre class=\"prettyprint linenums lang-c_cpp\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"4\">#include&lt;stdio.h&gt; int main() { char name[] = \"satellites\"; int len; int size; len = strlen(name); size = sizeof(name); printf(\"%d\", len * size); return 0; } </pre><p> </p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$100$<br/></span>",
                "<span style=\"display: inline;\">$110$<br/></span>",
                "<span style=\"display: inline;\">$40$<br/></span>",
                "<span style=\"display: inline;\">$44$</span>"
            ],
            "answer": "A",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"474335\"></a><div itemprop=\"text\">$\\mathrm{strlen(name)}$ returns the number of characters in the string, excluding the null character.<br/> <br/> $len=10$<br/> <br/> $\\mathrm{sizeof(name)}$ returns the total size of the character array, including the null character.<br/> <br/> $size=10+1=11\\text{ bytes}$<br/> <br/> The $\\mathrm{printf()}$ statement prints:<br/> <br/> $len\\times size=10\\times11=\\boxed{110}$</div><br><br><a href=\"https://gateoverflow.in/474334/go-classes-dpp-c-programming-strings-isro-2020#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-c-programming-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/c-programming\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">C Programming - Pointers, Arrays & Strings</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>What string does the following program print?</p><pre class=\"prettyprint linenums lang-c_cpp\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"4\">#include &lt;stdio.h&gt; #include &lt;string.h&gt; void strFunc2 (char A[], int n) { char t; if (n &lt;= 1) return; t = A[0]; A[0] = A[n-1]; A[n-1] = t; strFunc2(&amp;A[1],n-2); } int main () { char A[10] = \"PDS 2005\"; strFunc2(A,strlen(A)); printf(\"%s\", A); } </pre></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$5002$ $SDP$<br/></span>",
                "<span style=\"display: inline;\">$5DS$ $200P$<br/></span>",
                "<span style=\"display: inline;\">$PDS$ $2005$<br/></span>",
                "<span style=\"display: inline;\">$\\operatorname{SDP} 2005$</span>"
            ],
            "answer": "A",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"474331\"></a><div itemprop=\"text\">The function strFuncz swaps the first and last characters of the given array, then recursively calls itself on the subarray excluding the first and last characters. <br/> <br/> Initial string: \"PDS 2005\"<br/> we are always swapping from the start and end inward. So effectively, it reverses the string.</div><br><br><a href=\"https://gateoverflow.in/474330/go-classes-dpp-c-programming-recursion-iit-kgp#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-c-programming-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/c-programming\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">C Programming - Pointers, Arrays & Strings</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider the following C program executed on a little-endian system:</p><pre class=\"prettyprint linenums lang-c_cpp\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"4\">#include &lt;stdio.h&gt; int main() { int a = 320; char *ptr; ptr = (char *)&amp;a; printf(\"%d \", *ptr); return 0; } </pre><p>What will be the output of the program?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$2$<br/></span>",
                "<span style=\"display: inline;\">$320$<br/></span>",
                "<span style=\"display: inline;\">$64$<br/></span>",
                "<span style=\"display: inline;\">Compilation error</span>"
            ],
            "answer": "A",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"473919\"></a><div itemprop=\"text\">$$<br/> a=320 \\rightarrow \\text { binary: } 00000001 01000000<br/> $$<br/> <br/> In little-endian, lower byte ( 64 ) is stored first. ptr $=\\left(\\right.$ char $\\left.{ }^*\\right) \\&amp;$ a points to least significant byte. *ptr gives 64.<br/> So, output is 64 .</div><br><br><a href=\"https://gateoverflow.in/473726/go-classes-dpp-c-programming-program-output#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-c-programming-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/c-programming\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">C Programming - Pointers, Arrays & Strings</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider the following C program:</p><pre class=\"prettyprint linenums lang-c_cpp\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"4\">#include &lt;stdio.h&gt; #include &lt;conio.h&gt; void main() { int *ptr, i; i = 12; *ptr = i * i; ++i; printf(\"%d %d\", i, *ptr); }</pre><p>What will be the output of the above program?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$12,144$</span>",
                "<span style=\"display: inline;\">$13,144$</span>",
                "<span style=\"display: inline;\">$13,0$</span>",
                "<span style=\"display: inline;\">None of these</span>"
            ],
            "answer": "A",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"473920\"></a><div itemprop=\"text\">Explanation: The pointer ptr is declared but not initialized before being dereferenced with *ptr - 1 * 1 ; . This leads to undefined behavior due to accessing an invalid memory location.</div><br><br><a href=\"https://gateoverflow.in/473724/go-classes-dpp-c-programming-pointers#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-c-programming-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/c-programming\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">C Programming - Pointers, Arrays & Strings</a></b></div></div>"
        }
    ]
});

registerTest({
    "name": "DPP 07 - C Programming (Functions & Recursion - Part 1)",
    "testLabel": "DPP 07",
    "testType": "DPP",
    "bracket": "Functions & Recursion - Part 1",
    "subject": "c_prog",
    "series": "cse-dpp-2027",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 10,
    "topicsCovered": "Functions & Recursion (Practice Set 1)",
    "questions": [
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>What is the output of the following code?</p><pre class=\"prettyprint linenums lang-c_cpp\" data-linenums=\"true\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"\" data-rawcode='#include &lt;stdio.h&gt; int fun(int n) { if (n &lt;= 0) return 1; if (n == 1) return 2; return fun(n - 1) + 2 * fun(n - 2); } int main() { printf(\"%d\", fun(4)); return 0; }' dir=\"ltr\">#include &lt;stdio.h&gt; int fun(int n) { if (n &lt;= 0) return 1; if (n == 1) return 2; return fun(n - 1) + 2 * fun(n - 2); } int main() { printf(\"%d\", fun(4)); return 0; }</pre></div></span>",
            "image": "",
            "options": [],
            "answer": "16",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"535784\"></a><div itemprop=\"text\"><p style=\"text-align:center\"><img alt=\"\" height=\"325\" src=\"https://cdn.mathpix.com/snip/images/P8R0oBvxYon4egd0pM_qabkLlaTQH1JwqDYTG6_iTSU.original.fullsize.png\" width=\"751\"/></p><p> </p><p>The function call is $\\texttt{fun(4)}$.</p><p>Base cases are:</p><p>$\\texttt{fun(0) = 1}$</p><p>$\\texttt{fun(1) = 2}$</p><p>Now calculate step by step.</p><p>For $\\texttt{fun(2)}$:</p><p>$\\texttt{fun(2) = fun(1) + 2 * fun(0)}$</p><p>$\\texttt{fun(2) = 2 + 2 * 1 = 4}$</p><p>For $\\texttt{fun(3)}$:</p><p>$\\texttt{fun(3) = fun(2) + 2 * fun(1)}$</p><p>$\\texttt{fun(3) = 4 + 2 * 2 = 8}$</p><p>For $\\texttt{fun(4)}$:</p><p>$\\texttt{fun(4) = fun(3) + 2 * fun(2)}$</p><p>$\\texttt{fun(4) = 8 + 2 * 4 = 16}$<br/> </p><p>$\\therefore$ <strong>Output</strong> <strong>:</strong> $\\texttt{16}$</p></div><br><br><a href=\"https://gateoverflow.in/535783/go-classes-dpp-gate-cs-c-programming-two-calls-%26-recursion#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-c-programming-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/c-programming\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">C Programming - Functions & Recursion</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>What is the output of the following code?</p><pre class=\"prettyprint linenums lang-c_cpp\" data-linenums=\"true\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"\" data-rawcode='#include &lt;stdio.h&gt; int fun(int n) { int x = n; if (n &lt;= 0) return 0; x = x + 2; return x + fun(n - 2); } int main() { printf(\"%d\", fun(5)); return 0; }' dir=\"ltr\">#include &lt;stdio.h&gt; int fun(int n) { int x = n; if (n &lt;= 0) return 0; x = x + 2; return x + fun(n - 2); } int main() { printf(\"%d\", fun(5)); return 0; }</pre></div></span>",
            "image": "",
            "options": [],
            "answer": "15",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"535781\"></a><div itemprop=\"text\"><p>Here, $\\texttt{x}$ is a local variable.</p><p>So, every recursive call gets a new separate copy of $\\texttt{x}$.</p><p>The function call is $\\texttt{fun(5)}$.</p><p>For $\\texttt{fun(5)}$:</p><p>$\\texttt{x = 5}$</p><p>Then $\\texttt{x = x + 2 = 7}$</p><p>So,</p><p>$\\texttt{fun(5) = 7 + fun(3)}$</p><p>For $\\texttt{fun(3)}$:</p><p>$\\texttt{x = 3}$</p><p>Then $\\texttt{x = x + 2 = 5}$</p><p>So,</p><p>$\\texttt{fun(3) = 5 + fun(1)}$</p><p>For $\\texttt{fun(1)}$:</p><p>$\\texttt{x = 1}$</p><p>Then $\\texttt{x = x + 2 = 3}$</p><p>So,</p><p>$\\texttt{fun(1) = 3 + fun(-1)}$</p><p>For $\\texttt{fun(-1)}$, the condition $\\texttt{n &lt;= 0}$ is true.</p><p>So,</p><p>$\\texttt{fun(-1) = 0}$</p><p>Now substitute back:</p><p>$\\texttt{fun(1) = 3 + 0 = 3}$</p><p>$\\texttt{fun(3) = 5 + 3 = 8}$</p><p>$\\texttt{fun(5) = 7 + 8 = 15}$<br/> </p><p>$\\therefore$ <strong>Output</strong> <strong>:</strong> $\\texttt{15}$</p></div><br><br><a href=\"https://gateoverflow.in/535779/go-classes-dpp-gate-cs-c-programming-recursion#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-c-programming-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/c-programming\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">C Programming - Functions & Recursion</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>How many times is $\\texttt{fun()}$ called when the following code is executed? <em>(Count the first call also).</em></p><pre class=\"prettyprint linenums lang-c_cpp\" data-linenums=\"true\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"\" data-rawcode=\"#include &lt;stdio.h&gt; int fun(int n) { if (n &lt;= 1) return 1; return fun(n - 1) + fun(n - 2); } int main() { fun(4); return 0; }\" dir=\"ltr\">#include &lt;stdio.h&gt; int fun(int n) { if (n &lt;= 1) return 1; return fun(n - 1) + fun(n - 2); } int main() { fun(4); return 0; }</pre></div></span>",
            "image": "",
            "options": [],
            "answer": "9",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"535777\"></a><div itemprop=\"text\"><p style=\"text-align:center\"><img alt=\"\" height=\"309\" src=\"https://cdn.mathpix.com/snip/images/5Q7N_k0IVPJvLqS2z0AvljEKfCACts6ZQVfz2ancmxk.original.fullsize.png\" width=\"579\"/></p><p>We have to count how many times $\\texttt{fun()}$ is called when $\\texttt{fun(4)}$ is executed.</p><p>Count the first call also.</p><p>The first call is:</p><p>$\\texttt{fun(4)}$</p><p>Since $\\texttt{4 &gt; 1}$, it calls:</p><p>$\\texttt{fun(3)}$ and $\\texttt{fun(2)}$</p><p>Now trace each side.</p><p>From $\\texttt{fun(3)}$:</p><p>$\\texttt{fun(3)}$ calls $\\texttt{fun(2)}$ and $\\texttt{fun(1)}$.</p><p>From this $\\texttt{fun(2)}$:</p><p>$\\texttt{fun(2)}$ calls $\\texttt{fun(1)}$ and $\\texttt{fun(0)}$.</p><p>Now go to the other $\\texttt{fun(2)}$ that was directly called by $\\texttt{fun(4)}$.</p><p>This $\\texttt{fun(2)}$ also calls $\\texttt{fun(1)}$ and $\\texttt{fun(0)}$.</p><p>Now count all function calls:</p><p>$\\texttt{fun(4)}$: $1$ call</p><p>$\\texttt{fun(3)}$: $1$ call</p><p>$\\texttt{fun(2)}$: $2$ calls</p><p>$\\texttt{fun(1)}$: $3$ calls</p><p>$\\texttt{fun(0)}$: $2$ calls</p><p>Total calls:</p><p>$1 + 1 + 2 + 3 + 2 = 9$</p><p>Therefore, $\\texttt{fun()}$ is called $\\textbf{9}$ <strong>times.</strong></p></div><br><br><a href=\"https://gateoverflow.in/535776/go-classes-dpp-gate-cs-c-programming-call-count#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-c-programming-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/c-programming\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">C Programming - Functions & Recursion</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>What is the output of the following code?</p><pre class=\"prettyprint linenums lang-c_cpp\" data-linenums=\"true\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"\" data-rawcode='#include &lt;stdio.h&gt; int fun(int n) { if (n &lt;= 1) return n + 1; if (n % 2 == 0) return fun(n - 1) + fun(n - 2); return fun(n - 2) + n; } int main() { printf(\"%d\", fun(5)); return 0; }' dir=\"ltr\">#include &lt;stdio.h&gt; int fun(int n) { if (n &lt;= 1) return n + 1; if (n % 2 == 0) return fun(n - 1) + fun(n - 2); return fun(n - 2) + n; } int main() { printf(\"%d\", fun(5)); return 0; }</pre></div></span>",
            "image": "",
            "options": [],
            "answer": "10",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"535775\"></a><div itemprop=\"text\"><p>The function call is $\\texttt{fun(5)}$.</p><p>Since $\\texttt{5}$ is odd, the function returns:</p><p>$\\texttt{fun(5) = fun(3) + 5}$</p><p>Now solve $\\texttt{fun(3)}$.</p><p>Since $\\texttt{3}$ is odd:</p><p>$\\texttt{fun(3) = fun(1) + 3}$</p><p>Now $\\texttt{fun(1)}$ satisfies $\\texttt{n &lt;= 1}$.</p><p>So,</p><p>$\\texttt{fun(1) = 1 + 1 = 2}$</p><p>Therefore,</p><p>$\\texttt{fun(3) = 2 + 3 = 5}$</p><p>Now,</p><p>$\\texttt{fun(5) = 5 + 5 = 10}$<br/> </p><p>$\\therefore$ <strong>Output :</strong> $\\texttt{10}$</p></div><br><br><a href=\"https://gateoverflow.in/535774/go-classes-dpp-gate-cs-c-programming-return-trace#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-c-programming-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/c-programming\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">C Programming - Functions & Recursion</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>What is the output of the following code?</p><pre class=\"prettyprint linenums lang-\" data-linenums=\"true\" data-pbcklang=\"\" data-pbcktabsize=\"\" data-rawcode='#include &lt;stdio.h&gt; void g(int n); void f(int n) { if (n &lt;= 0) return; printf(\"F%d \", n); g(n - 1); printf(\"f%d \", n); } void g(int n) { if (n &lt;= 0) return; printf(\"G%d \", n); f(n - 2); printf(\"g%d \", n); } int main() { f(4); return 0; }' dir=\"ltr\">#include &lt;stdio.h&gt; void g(int n); void f(int n) { if (n &lt;= 0) return; printf(\"F%d \", n); g(n - 1); printf(\"f%d \", n); } void g(int n) { if (n &lt;= 0) return; printf(\"G%d \", n); f(n - 2); printf(\"g%d \", n); } int main() { f(4); return 0; }</pre></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\texttt{F4\\ G3\\ F1\\ f1\\ g3\\ f4}$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{F4\\ G3\\ F1\\ g3\\ f1\\ f4}$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{F4\\ G3\\ F2\\ f2\\ g3\\ f4}$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{F4\\ G3\\ f4\\ F1\\ f1\\ g3}$</span>"
            ],
            "answer": "A",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"535731\"></a><div itemprop=\"text\"><figure class=\"image\"><img alt=\"\" height=\"1600\" src=\"https://gateoverflow.in/?qa=blob&amp;qa_blobid=12787023485372016649\" width=\"1200\"/><figcaption>Caption</figcaption></figure><p> </p></div><br><br><a href=\"https://gateoverflow.in/535618/go-classes-dpp-gate-cs-c-programming-mutual-recursion#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-c-programming-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/c-programming\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">C Programming - Functions & Recursion</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>What is the output of the following code?</p><pre class=\"prettyprint linenums lang-c_cpp\" data-linenums=\"true\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"\" data-rawcode='#include &lt;stdio.h&gt; void fun(int n) { static int x = 0; if (n == 0) return; x++; printf(\"%d:%d \", n, x); fun(n - 1); printf(\"%d:%d \", n, x); } int main() { fun(3); return 0; }' dir=\"ltr\">#include &lt;stdio.h&gt; void fun(int n) { static int x = 0; if (n == 0) return; x++; printf(\"%d:%d \", n, x); fun(n - 1); printf(\"%d:%d \", n, x); } int main() { fun(3); return 0; }</pre></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\texttt{3:1\\ 2:2\\ 1:3\\ 1:3\\ 2:3\\ 3:3}$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{3:1\\ 2:2\\ 1:3\\ 1:1\\ 2:2\\ 3:3}$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{1:1\\ 2:2\\ 3:3\\ 3:3\\ 2:2\\ 1:1}$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{3:1\\ 2:1\\ 1:1\\ 1:1\\ 2:1\\ 3:1}$</span>"
            ],
            "answer": "A",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"535615\"></a><div itemprop=\"text\"><p style=\"text-align:center\"><img alt=\"\" height=\"364\" src=\"https://cdn.mathpix.com/snip/images/MU6UA_F4HmalvujoCr2mfoV4NXtZZ8bPhxClFvqRB6Y.original.fullsize.png\" width=\"724\"/></p><p><br/>Here, $\\texttt{x}$ is a static variable.</p><p>So, $\\texttt{x}$ is shared across all recursive calls.</p><p>Initially, $\\texttt{x = 0}$.</p><p>For $\\texttt{fun(3)}$, $\\texttt{x++}$ makes $\\texttt{x = 1}$.</p><p>So, it prints $\\texttt{3:1}$ and calls $\\texttt{fun(2)}$.</p><p>For $\\texttt{fun(2)}$, $\\texttt{x++}$ makes $\\texttt{x = 2}$.</p><p>So, it prints $\\texttt{2:2}$ and calls $\\texttt{fun(1)}$.</p><p>For $\\texttt{fun(1)}$, $\\texttt{x++}$ makes $\\texttt{x = 3}$.</p><p>So, it prints $\\texttt{1:3}$ and calls $\\texttt{fun(0)}$.</p><p>For $\\texttt{fun(0)}$, the base condition is true, so it returns.</p><p>Now returning starts.</p><p>Since $\\texttt{x}$ is static, its current value is still $\\texttt{3}$.</p><p>So, while returning:</p><p>$\\texttt{fun(1)}$ prints $\\texttt{1:3}$.</p><p>$\\texttt{fun(2)}$ prints $\\texttt{2:3}$.</p><p>$\\texttt{fun(3)}$ prints $\\texttt{3:3}$.</p><p>$\\therefore$ <strong>Complete Output :</strong></p><p>$\\texttt{3:1\\ 2:2\\ 1:3\\ 1:3\\ 2:3\\ 3:3}$</p><p><strong>Answer: A</strong></p></div><br><br><a href=\"https://gateoverflow.in/535614/go-classes-dpp-gate-cs-c-programming-recursion-%26-static-with-prints#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-c-programming-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/c-programming\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">C Programming - Functions & Recursion</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>What is the output of the following code?</p><pre class=\"prettyprint linenums lang-c_cpp\" data-linenums=\"true\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"\" data-rawcode='#include &lt;stdio.h&gt; int fun(int n) { static int sum = 0; int temp; if (n &lt;= 0) return sum; sum = sum + n; temp = fun(n - 2); return temp + sum; } int main() { printf(\"%d\", fun(5)); return 0; }' dir=\"ltr\">#include &lt;stdio.h&gt; int fun(int n) { static int sum = 0; int temp; if (n &lt;= 0) return sum; sum = sum + n; temp = fun(n - 2); return temp + sum; } int main() { printf(\"%d\", fun(5)); return 0; }</pre></div></span>",
            "image": "",
            "options": [],
            "answer": "36",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"535611\"></a><div itemprop=\"text\"><p style=\"text-align:center\"><img alt=\"\" height=\"412\" src=\"https://cdn.mathpix.com/snip/images/MV-59QeJJH9_Pd17LNLBCcnpU3scjWus5SOYh2hIykU.original.fullsize.png\" width=\"766\"/></p><p>Here, $\\texttt{sum}$ is a static variable.</p><p>So, there is only one copy of $\\texttt{sum}$, and it keeps its value across recursive calls.</p><p>Initially, $\\texttt{sum = 0}$.</p><p>For $\\texttt{fun(5)}$:</p><p>$\\texttt{sum = 0 + 5 = 5}$, then it calls $\\texttt{fun(3)}$.</p><p>For $\\texttt{fun(3)}$:</p><p>$\\texttt{sum = 5 + 3 = 8}$, then it calls $\\texttt{fun(1)}$.</p><p>For $\\texttt{fun(1)}$:</p><p>$\\texttt{sum = 8 + 1 = 9}$, then it calls $\\texttt{fun(-1)}$.</p><p>For $\\texttt{fun(-1)}$, the base condition is true, so it returns $\\texttt{sum}$.</p><p>So, $\\texttt{fun(-1)}$ returns $\\texttt{9}$.</p><p>Now returning starts.</p><p>In $\\texttt{fun(1)}$, $\\texttt{temp = 9}$ and current $\\texttt{sum = 9}$.</p><p>So, $\\texttt{fun(1)}$ returns $\\texttt{9 + 9 = 18}$.</p><p>In $\\texttt{fun(3)}$, $\\texttt{temp = 18}$ and current $\\texttt{sum = 9}$.</p><p>So, $\\texttt{fun(3)}$ returns $\\texttt{18 + 9 = 27}$.</p><p>In $\\texttt{fun(5)}$, $\\texttt{temp = 27}$ and current $\\texttt{sum = 9}$.</p><p>So, $\\texttt{fun(5)}$ returns $\\texttt{27 + 9 = 36}$.</p><p>$\\therefore$ <strong>Output</strong> $:\\texttt{36}$</p></div><br><br><a href=\"https://gateoverflow.in/535610/go-classes-dpp-gate-cs-c-programming-static-sum-%26-recursion#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-c-programming-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/c-programming\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">C Programming - Functions & Recursion</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>What is the output of the following code?</p><pre class=\"prettyprint linenums lang-c_cpp\" data-linenums=\"true\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"\" data-rawcode='#include &lt;stdio.h&gt; int fun(int n) { static int step = 1; if (n &lt;= 1) return n; step++; return n + fun(n - step); } int main() { printf(\"%d\", fun(6)); return 0; }' dir=\"ltr\">#include &lt;stdio.h&gt; int fun(int n) { static int step = 1; if (n &lt;= 1) return n; step++; return n + fun(n - step); } int main() { printf(\"%d\", fun(6)); return 0; }</pre></div></span>",
            "image": "",
            "options": [],
            "answer": "11",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"535609\"></a><div itemprop=\"text\"><p style=\"text-align:center\"><img alt=\"\" height=\"349\" src=\"https://cdn.mathpix.com/snip/images/mTVyPsFfGOmMKeZhZNmRqfjrc_QXYXhVcgb0GhZoyKQ.original.fullsize.png\" width=\"615\"/></p><p> </p><p>Here, $\\texttt{step}$ is a static variable.</p><p>So, $\\texttt{step}$ is initialized only once and keeps its value across recursive calls.</p><p>Initially, $\\texttt{step = 1}$.</p><p>For $\\texttt{fun(6)}$, $\\texttt{step++}$ makes $\\texttt{step = 2}$.</p><p>So,</p><p>$\\texttt{fun(6) = 6 + fun(6 - 2)}$</p><p>$\\texttt{fun(6) = 6 + fun(4)}$</p><p>Now in $\\texttt{fun(4)}$, $\\texttt{step}$ is already $\\texttt{2}$.</p><p>After $\\texttt{step++}$, $\\texttt{step = 3}$.</p><p>So,</p><p>$\\texttt{fun(4) = 4 + fun(4 - 3)}$</p><p>$\\texttt{fun(4) = 4 + fun(1)}$</p><p>Now $\\texttt{fun(1)}$ hits the base condition because $\\texttt{n &lt;= 1}$.</p><p>So,</p><p>$\\texttt{fun(1) = 1}$</p><p>Now substitute back:</p><p>$\\texttt{fun(4) = 4 + 1 = 5}$</p><p>$\\texttt{fun(6) = 6 + 5 = 11}$</p><p>$\\therefore$ <strong>Output</strong> $:\\texttt{11}$</p></div><br><br><a href=\"https://gateoverflow.in/535608/go-classes-dpp-gate-cs-c-programming-static-variable-%26-recursion#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-c-programming-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/c-programming\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">C Programming - Functions & Recursion</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>What is the output of the following code?</p><pre class=\"prettyprint linenums lang-c_cpp\" data-linenums=\"true\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"\" data-rawcode='#include &lt;stdio.h&gt; int fun(int n) { if (n == 0) return 1; return n + fun(n - 1); printf(\"%d \", n); } int main() { printf(\"%d\", fun(3)); return 0; }' dir=\"ltr\">#include &lt;stdio.h&gt; int fun(int n) { if (n == 0) return 1; return n + fun(n - 1); printf(\"%d \", n); } int main() { printf(\"%d\", fun(3)); return 0; }</pre></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\texttt{6}$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{7}$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{3\\ 2\\ 1\\ 7}$<br/></span>",
                "<span style=\"display: inline;\">Compilation error</span>"
            ],
            "answer": "B",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"535607\"></a><div itemprop=\"text\"><p style=\"text-align:center\"><img alt=\"\" height=\"388\" src=\"https://cdn.mathpix.com/snip/images/xND3wy1IeTUv49Npt1N7y-UBlf8UN2nmzj1vYu9Hb7o.original.fullsize.png\" width=\"657\"/></p><p>The function call is $\\texttt{fun(3)}$.</p><p>The important point is that once a $\\texttt{return}$ statement executes, the code written after it does not execute.</p><p>So, this line never executes:</p><p>$\\texttt{printf(\"\\%d \", n);}$</p><p>Now calculate the return value.</p><p>$\\texttt{fun(3) = 3 + fun(2)}$</p><p>$\\texttt{fun(2) = 2 + fun(1)}$</p><p>$\\texttt{fun(1) = 1 + fun(0)}$</p><p>Base case:</p><p>$\\texttt{fun(0) = 1}$</p><p>Now substitute back:</p><p>$\\texttt{fun(1) = 1 + 1 = 2}$</p><p>$\\texttt{fun(2) = 2 + 2 = 4}$</p><p>$\\texttt{fun(3) = 3 + 4 = 7}$</p><p>Therefore, the output is $\\texttt{7}$.</p><p><strong>Answer: B</strong></p></div><br><br><a href=\"https://gateoverflow.in/535606/go-classes-dpp-gate-cs-c-programming-return-in-recursion#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-c-programming-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/c-programming\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">C Programming - Functions & Recursion</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>What is the output of the following code?</p><pre class=\"prettyprint linenums lang-c_cpp\" data-linenums=\"true\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"\" data-rawcode='#include &lt;stdio.h&gt; void fun(int n) { if (n &lt;= 0) return; printf(\"%d \", n); fun(n - 1); printf(\"%d \", n); fun(n - 2); } int main() { fun(3); return 0; }' dir=\"ltr\">#include &lt;stdio.h&gt; void fun(int n) { if (n &lt;= 0) return; printf(\"%d \", n); fun(n - 1); printf(\"%d \", n); fun(n - 2); } int main() { fun(3); return 0; }</pre></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\texttt{3\\ 2\\ 1\\ 1\\ 2\\ 3\\ 1\\ 1}$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{3\\ 2\\ 1\\ 2\\ 3\\ 1}$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{3\\ 2\\ 1\\ 1\\ 2\\ 3}$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{1\\ 1\\ 2\\ 3\\ 2\\ 1}$</span>"
            ],
            "answer": "A",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"535442\"></a><div itemprop=\"text\"><p style=\"text-align:center\"><img alt=\"\" height=\"399\" src=\"https://cdn.mathpix.com/snip/images/ZZhaBtl2WUBZIaJCnJ7_TuCAZCzaacSUMOmves62ztA.original.fullsize.png\" width=\"706\"/></p><p>The function call is $\\texttt{fun(3)}$.</p><p>For $\\texttt{fun(3)}$, first it prints $\\texttt{3}$, then calls $\\texttt{fun(2)}$.</p><p>For $\\texttt{fun(2)}$, first it prints $\\texttt{2}$, then calls $\\texttt{fun(1)}$.</p><p>For $\\texttt{fun(1)}$, first it prints $\\texttt{1}$, then calls $\\texttt{fun(0)}$.</p><p>For $\\texttt{fun(0)}$, the base condition is true, so it returns.</p><p>Now control comes back to $\\texttt{fun(1)}$, so the second $\\texttt{printf}$ prints $\\texttt{1}$.</p><p>Then $\\texttt{fun(1)}$ calls $\\texttt{fun(-1)}$, which returns immediately.</p><p>Now control comes back to $\\texttt{fun(2)}$, so the second $\\texttt{printf}$ prints $\\texttt{2}$.</p><p>Then $\\texttt{fun(2)}$ calls $\\texttt{fun(0)}$, which returns immediately.</p><p>Now control comes back to $\\texttt{fun(3)}$, so the second $\\texttt{printf}$ prints $\\texttt{3}$.</p><p>Then $\\texttt{fun(3)}$ calls $\\texttt{fun(1)}$.</p><p>This new $\\texttt{fun(1)}$ prints $\\texttt{1}$, calls $\\texttt{fun(0)}$, returns, then prints $\\texttt{1}$, and calls $\\texttt{fun(-1)}$.</p><p>Therefore, the complete output is $\\texttt{3\\ 2\\ 1\\ 1\\ 2\\ 3\\ 1\\ 1}$</p><p><strong>Answer: A</strong></p></div><br><br><a href=\"https://gateoverflow.in/535422/go-classes-dpp-gate-cs-c-programming-recursion-tracing#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-c-programming-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/c-programming\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">C Programming - Functions & Recursion</a></b></div></div>"
        }
    ]
});

registerTest({
    "name": "DPP 08 - C Programming (Functions & Recursion - Part 2)",
    "testLabel": "DPP 08",
    "testType": "DPP",
    "bracket": "Functions & Recursion - Part 2",
    "subject": "c_prog",
    "series": "cse-dpp-2027",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 10,
    "topicsCovered": "Functions & Recursion (Practice Set 2)",
    "questions": [
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>What is the output of the following code?</p><pre class=\"prettyprint linenums lang-c_cpp\" data-linenums=\"true\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"\" data-rawcode='#include &lt;stdio.h&gt; void g(int n); void f(int n) { if (n &lt;= 0) return; printf(\"%d \", n); g(n - 1); } void g(int n) { if (n &lt;= 0) return; printf(\"%d \", n); f(n - 2); } int main() { f(5); return 0; }' dir=\"ltr\">#include &lt;stdio.h&gt; void g(int n); void f(int n) { if (n &lt;= 0) return; printf(\"%d \", n); g(n - 1); } void g(int n) { if (n &lt;= 0) return; printf(\"%d \", n); f(n - 2); } int main() { f(5); return 0; }</pre></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\texttt{5\\ 4\\ 3\\ 2\\ 1}$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{5\\ 4\\ 2\\ 1}$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{5\\ 3\\ 1}$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{4\\ 2\\ 1}$</span>"
            ],
            "answer": "B",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"535437\"></a><div itemprop=\"text\"><p style=\"text-align:center\"><img alt=\"\" height=\"370\" src=\"https://cdn.mathpix.com/snip/images/A172nKGJUFCBiyqM3VDMKTQpcFjBo2jV9Qkb8NvQKeE.original.fullsize.png\" width=\"536\"/></p><p> </p><p>The function call is $\\texttt{f(5)}$.</p><p>In $\\texttt{f(5)}$, $\\texttt{5}$ is printed and then $\\texttt{g(4)}$ is called.</p><p>In $\\texttt{g(4)}$, $\\texttt{4}$ is printed and then $\\texttt{f(2)}$ is called.</p><p>In $\\texttt{f(2)}$, $\\texttt{2}$ is printed and then $\\texttt{g(1)}$ is called.</p><p>In $\\texttt{g(1)}$, $\\texttt{1}$ is printed and then $\\texttt{f(-1)}$ is called.</p><p>In $\\texttt{f(-1)}$, the condition $\\texttt{n &lt;= 0}$ is true, so it returns.</p><p>Therefore, the output is $\\texttt{5\\ 4\\ 2\\ 1}$</p><p><strong>Answer: B</strong></p></div><br><br><a href=\"https://gateoverflow.in/535420/go-classes-dpp-gate-cs-c-programming-mutual-recursion#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-c-programming-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/c-programming\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">C Programming - Functions & Recursion</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>What happens when the following code is executed?</p><pre class=\"prettyprint linenums lang-c_cpp\" data-linenums=\"true\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"\" data-rawcode='#include &lt;stdio.h&gt; void fun(int n) { if (n == 0) return; printf(\"%d \", n); fun(n--); } int main() { fun(3); return 0; }' dir=\"ltr\">#include &lt;stdio.h&gt; void fun(int n) { if (n == 0) return; printf(\"%d \", n); fun(n--); } int main() { fun(3); return 0; }</pre></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\texttt{3\\ 2\\ 1}$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{3\\ 3\\ 3\\ ...}$ until stack overflow<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{2\\ 1}$<br/></span>",
                "<span style=\"display: inline;\">Compilation error</span>"
            ],
            "answer": "A",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"535488\"></a><div itemprop=\"text\"><p><strong>covering other cases also : </strong><img alt=\"\" height=\"654\" src=\"https://gateoverflow.in/?qa=blob&amp;qa_blobid=1409245340632301731\" width=\"1200\"/></p></div><br><br><a href=\"https://gateoverflow.in/535419/go-classes-dpp-gate-cs-c-programming-post-decrement-in-recursion#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-c-programming-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/c-programming\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">C Programming - Functions & Recursion</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>What is the output of the following code?</p><pre class=\"prettyprint linenums lang-c_cpp\" data-linenums=\"true\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"\" data-rawcode='#include &lt;stdio.h&gt; int fun(int n) { static int x = 0; int y; if (n == 0) return 0; x++; y = fun(n - 1); return y + x; } int main() { printf(\"%d\", fun(3)); return 0; }' dir=\"ltr\">#include &lt;stdio.h&gt; int fun(int n) { static int x = 0; int y; if (n == 0) return 0; x++; y = fun(n - 1); return y + x; } int main() { printf(\"%d\", fun(3)); return 0; }</pre></div></span>",
            "image": "",
            "options": [],
            "answer": "9",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"535427\"></a><div itemprop=\"text\"><p>Here, $\\texttt{x}$ is a static variable.<br/><br/>A static variable is initialized only once and keeps its value across recursive calls.</p><p> </p><p style=\"text-align:center\"><img alt=\"\" height=\"362\" src=\"https://cdn.mathpix.com/snip/images/83_wiA_hgehTXEupYTSY7Ld-8QHUazo65vRuxEtBi9c.original.fullsize.png\" width=\"565\"/></p><p><br/>Initially, $\\texttt{x = 0}$.<br/><br/>For $\\texttt{fun(3)}$, $\\texttt{x++}$ makes $\\texttt{x = 1}$, then it calls $\\texttt{fun(2)}$.<br/><br/>For $\\texttt{fun(2)}$, $\\texttt{x++}$ makes $\\texttt{x = 2}$, then it calls $\\texttt{fun(1)}$.<br/><br/>For $\\texttt{fun(1)}$, $\\texttt{x++}$ makes $\\texttt{x = 3}$, then it calls $\\texttt{fun(0)}$.<br/><br/>For $\\texttt{fun(0)}$, the base condition becomes true and it returns $\\texttt{0}$.<br/><br/>Now returning starts.<br/><br/>In $\\texttt{fun(1)}$, $\\texttt{y = 0}$ and current $\\texttt{x = 3}$.<br/><br/>So, it returns $\\texttt{0 + 3 = 3}$.<br/><br/>In $\\texttt{fun(2)}$, $\\texttt{y = 3}$ and current $\\texttt{x = 3}$.<br/><br/>So, it returns $\\texttt{3 + 3 = 6}$.<br/><br/>In $\\texttt{fun(3)}$, $\\texttt{y = 6}$ and current $\\texttt{x = 3}$.<br/><br/>So, it returns $\\texttt{6 + 3 = 9}$.<br/><br/>$\\therefore$ Output $:\\texttt{9}$</p></div><br><br><a href=\"https://gateoverflow.in/535418/go-classes-dpp-gate-cs-c-programming-static-variable-in-recursion#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-c-programming-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/c-programming\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">C Programming - Functions & Recursion</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>What is the output of the following code?</p><pre class=\"prettyprint linenums lang-c_cpp\" data-linenums=\"true\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"\" data-rawcode='#include &lt;stdio.h&gt; void fun(int n) { if (n == 0) return; printf(\"%d \", n); fun(n - 1); printf(\"%d \", n); } int main() { fun(3); return 0; }' dir=\"ltr\">#include &lt;stdio.h&gt; void fun(int n) { if (n == 0) return; printf(\"%d \", n); fun(n - 1); printf(\"%d \", n); } int main() { fun(3); return 0; }</pre></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\texttt{3\\ 2\\ 1\\ 1\\ 2\\ 3}$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{1\\ 2\\ 3\\ 3\\ 2\\ 1}$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{3\\ 2\\ 1}$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{1\\ 2\\ 3}$</span>"
            ],
            "answer": "A",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"535426\"></a><div itemprop=\"text\"><p style=\"text-align:center\"><img alt=\"\" height=\"315\" src=\"https://cdn.mathpix.com/snip/images/BfbGzJ9UrirselgrnVKLz2UhmfQ8tDqCBT2cUoX2Ok4.original.fullsize.png\" width=\"577\"/></p><p><br/>The function call is $\\texttt{fun(3)}$.</p><p>In this function, one $\\texttt{printf}$ is before the recursive call and one $\\texttt{printf}$ is after the recursive call.</p><p>The first $\\texttt{printf}$ runs while going down in recursion.</p><p>So, it prints:</p><p>$\\texttt{3\\ 2\\ 1}$</p><p>Then $\\texttt{fun(0)}$ is called, and the base condition becomes true.</p><p>Now the function calls start returning.</p><p>The second $\\texttt{printf}$ runs while returning from recursion.</p><p>So, it prints:</p><p>$\\texttt{1\\ 2\\ 3}$</p><p>The complete output is $\\texttt{3\\ 2\\ 1\\ 1\\ 2\\ 3}$</p><p><strong>Answer: A</strong></p></div><br><br><a href=\"https://gateoverflow.in/535417/go-classes-dpp-gate-cs-c-programming-print-before-and-after-recursion#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-c-programming-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/c-programming\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">C Programming - Functions & Recursion</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>What is the output of the following code?</p><pre class=\"prettyprint linenums lang-c_cpp\" data-linenums=\"true\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"\" data-rawcode='#include &lt;stdio.h&gt; int fun(int n) { static int count = 0; if (n == 0) return count; count = count + n; return fun(n - 1); } int main() { printf(\"%d\", fun(3)); return 0; }' dir=\"ltr\">#include &lt;stdio.h&gt; int fun(int n) { static int count = 0; if (n == 0) return count; count = count + n; return fun(n - 1); } int main() { printf(\"%d\", fun(3)); return 0; }</pre></div></span>",
            "image": "",
            "options": [],
            "answer": "6",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"535192\"></a><div itemprop=\"text\"><p style=\"text-align:center\"><img alt=\"\" height=\"351\" src=\"https://cdn.mathpix.com/snip/images/9NbxzSlULmsB46upxALiKf_ebsXjOYVsnplxWsmnYHk.original.fullsize.png\" width=\"538\"/></p><p>Here, $\\texttt{count}$ is a static variable.</p><p>A static variable is initialized only once and keeps its value across recursive calls.</p><p>Initially, $\\texttt{count = 0}$.</p><p>For $\\texttt{fun(3)}$, $\\texttt{count = 0 + 3 = 3}$, then it calls $\\texttt{fun(2)}$.</p><p>For $\\texttt{fun(2)}$, $\\texttt{count = 3 + 2 = 5}$, then it calls $\\texttt{fun(1)}$.</p><p>For $\\texttt{fun(1)}$, $\\texttt{count = 5 + 1 = 6}$, then it calls $\\texttt{fun(0)}$.</p><p>For $\\texttt{fun(0)}$, the base condition becomes true and it returns $\\texttt{count}$.</p><p>So, it returns $\\texttt{6}$.</p><p>Therefore, the output is $\\texttt{6}$.</p></div><br><br><a href=\"https://gateoverflow.in/535190/go-classes-dpp-gate-cs-c-programming-static-variable-in-recursion#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-c-programming-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/c-programming\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">C Programming - Functions & Recursion</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>What is the output of the following code?</p><pre class=\"prettyprint linenums lang-c_cpp\" data-linenums=\"true\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"\" data-rawcode='#include &lt;stdio.h&gt; int fact(int n) { if (n == 0) return 1; return n * fact(n - 1); } int main() { printf(\"%d\", fact(4)); return 0; }' dir=\"ltr\">#include &lt;stdio.h&gt; int fact(int n) { if (n == 0) return 1; return n * fact(n - 1); } int main() { printf(\"%d\", fact(4)); return 0; } </pre></div></span>",
            "image": "",
            "options": [],
            "answer": "24",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"535189\"></a><div itemprop=\"text\"><p>The function call is $\\texttt{fact(4)}$.</p><p>The function returns $\\texttt{n * fact(n - 1)}$ until $\\texttt{n == 0}$.</p><p>So,</p><p style=\"text-align:center\"><img alt=\"\" height=\"335\" src=\"https://cdn.mathpix.com/snip/images/KxjCdWW2_hPdm6GgzNutY0c7lqmxNegGqH5e3SZFIx4.original.fullsize.png\" width=\"623\"/></p><p> </p><p>$\\texttt{fact(4) = 4 * fact(3)}$</p><p>$\\texttt{fact(3) = 3 * fact(2)}$</p><p>$\\texttt{fact(2) = 2 * fact(1)}$</p><p>$\\texttt{fact(1) = 1 * fact(0)}$</p><p>Base case:</p><p>$\\texttt{fact(0) = 1}$</p><p>Now substitute back:</p><p>$\\texttt{fact(1) = 1 * 1 = 1}$</p><p>$\\texttt{fact(2) = 2 * 1 = 2}$</p><p>$\\texttt{fact(3) = 3 * 2 = 6}$</p><p>$\\texttt{fact(4) = 4 * 6 = 24}$</p><p>Therefore, the output is $\\boxed{\\texttt{24}}$</p></div><br><br><a href=\"https://gateoverflow.in/535187/go-classes-dpp-gate-cs-c-programming-recursion#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-c-programming-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/c-programming\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">C Programming - Functions & Recursion</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>What is the output of the following code?</p><pre class=\"prettyprint linenums lang-c_cpp\" data-linenums=\"true\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"\" data-rawcode='#include &lt;stdio.h&gt; int sum(int n) { if (n == 1) return 1; return n + sum(n - 1); } int main() { printf(\"%d\", sum(5)); return 0; }' dir=\"ltr\">#include &lt;stdio.h&gt; int sum(int n) { if (n == 1) return 1; return n + sum(n - 1); } int main() { printf(\"%d\", sum(5)); return 0; } </pre></div></span>",
            "image": "",
            "options": [],
            "answer": "15",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"535186\"></a><div itemprop=\"text\"><p>The function call is $\\texttt{sum(5)}$.<br/><br/>The function returns $\\texttt{n + sum(n - 1)}$ until $\\texttt{n == 1}$.</p><p>So,</p><p style=\"text-align:center\"><img alt=\"\" height=\"260\" src=\"https://cdn.mathpix.com/snip/images/2j2fG38swIAvO1b-dTlZZPM7fKuklnPnzjovAqXSmFw.original.fullsize.png\" width=\"561\"/></p><p><br/><br/>$\\texttt{sum(5) = 5 + sum(4)}$<br/><br/>$\\texttt{sum(4) = 4 + sum(3)}$<br/><br/>$\\texttt{sum(3) = 3 + sum(2)}$<br/><br/>$\\texttt{sum(2) = 2 + sum(1)}$<br/><br/>Base case:<br/><br/>$\\texttt{sum(1) = 1}$<br/><br/>Now substitute back:<br/><br/>$\\texttt{sum(2) = 2 + 1 = 3}$<br/><br/>$\\texttt{sum(3) = 3 + 3 = 6}$<br/><br/>$\\texttt{sum(4) = 4 + 6 = 10}$<br/><br/>$\\texttt{sum(5) = 5 + 10 = 15}$<br/><br/>Therefore, the output is $\\boxed{\\texttt{15}}$</p></div><br><br><a href=\"https://gateoverflow.in/535184/go-classes-dpp-gate-cs-c-programming-recursive-sum#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-c-programming-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/c-programming\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">C Programming - Functions & Recursion</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>What is the output of the following code?</p><pre class=\"prettyprint linenums lang-c_cpp\" data-linenums=\"true\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"\" data-rawcode='#include &lt;stdio.h&gt; void fun(int n) { if (n == 0) return; fun(n - 1); printf(\"%d \", n); } int main() { fun(4); return 0; }' dir=\"ltr\">#include &lt;stdio.h&gt; void fun(int n) { if (n == 0) return; fun(n - 1); printf(\"%d \", n); } int main() { fun(4); return 0; }</pre></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\texttt{4\\ 3\\ 2\\ 1}$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{1\\ 2\\ 3\\ 4}$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{0\\ 1\\ 2\\ 3\\ 4}$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{4\\ 3\\ 2\\ 1\\ 0}$</span>"
            ],
            "answer": "B",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"535183\"></a><div itemprop=\"text\"><p style=\"text-align:center\"><img alt=\"\" height=\"332\" src=\"https://cdn.mathpix.com/snip/images/wKlxEMz7gtnszS_WYK-BQo3Jn_G2dw8uuq6oKG3EFlY.original.fullsize.png\" width=\"774\"/></p><p><br/>The function call is $\\texttt{fun(4)}$.</p><p>Here, $\\texttt{printf}$ is written after the recursive call.</p><p>So, first the recursive calls keep going down until the base condition is reached.</p><p>The calls happen like this:</p><p>$\\texttt{fun(4) -&gt; fun(3) -&gt; fun(2) -&gt; fun(1) -&gt; fun(0)}$</p><p>When $\\texttt{fun(0)}$ is called, the base condition becomes true and it returns.</p><p>Now the pending $\\texttt{printf}$ statements start executing while returning.</p><p>So, $\\texttt{fun(1)}$ prints $\\texttt{1}$.</p><p>Then $\\texttt{fun(2)}$ prints $\\texttt{2}$.</p><p>Then $\\texttt{fun(3)}$ prints $\\texttt{3}$.</p><p>Then $\\texttt{fun(4)}$ prints $\\texttt{4}$.</p><p>Therefore, the output is $\\texttt{1\\ 2\\ 3\\ 4}$.</p><p><strong>Answer: B</strong></p></div><br><br><a href=\"https://gateoverflow.in/535182/go-classes-dpp-gate-cs-c-programming-recursion-with-print-after-call#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-c-programming-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/c-programming\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">C Programming - Functions & Recursion</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>What is the output of the following code?</p><pre class=\"prettyprint linenums lang-c_cpp\" data-linenums=\"true\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"\" data-rawcode='#include &lt;stdio.h&gt; void fun(int n) { if (n == 0) return; printf(\"%d \", n); fun(n - 1); } int main() { fun(4); return 0; }' dir=\"ltr\">#include &lt;stdio.h&gt; void fun(int n) { if (n == 0) return; printf(\"%d \", n); fun(n - 1); } int main() { fun(4); return 0; }</pre></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\texttt{1\\ 2\\ 3\\ 4}$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{4\\ 3\\ 2\\ 1}$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{4\\ 3\\ 2\\ 1\\ 0}$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{0\\ 1\\ 2\\ 3\\ 4}$</span>"
            ],
            "answer": "B",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"535181\"></a><div itemprop=\"text\"><p style=\"text-align:center\"><img alt=\"\" height=\"395\" src=\"https://cdn.mathpix.com/snip/images/qH4tAsagvWPKjBaNOHFIqiMi3saT6fpLYPPH9pFYmxM.original.fullsize.png\" width=\"697\"/></p><p> </p><p>The function call is $\\texttt{fun(4)}$.</p><p>In this function, $\\texttt{printf}$ is written before the recursive call.</p><p>So, the value is printed first, and then the next recursive call happens.</p><p>For $\\texttt{fun(4)}$, it prints $\\texttt{4}$ and calls $\\texttt{fun(3)}$.</p><p>For $\\texttt{fun(3)}$, it prints $\\texttt{3}$ and calls $\\texttt{fun(2)}$.</p><p>For $\\texttt{fun(2)}$, it prints $\\texttt{2}$ and calls $\\texttt{fun(1)}$.</p><p>For $\\texttt{fun(1)}$, it prints $\\texttt{1}$ and calls $\\texttt{fun(0)}$.</p><p>For $\\texttt{fun(0)}$, the base condition becomes true and the function returns without printing anything.</p><p>Therefore, the output is $\\texttt{4\\ 3\\ 2\\ 1}$.</p><p><strong>Answer: B</strong></p></div><br><br><a href=\"https://gateoverflow.in/535180/go-classes-dpp-gate-cs-c-programming-recursion-with-print-before-call#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-c-programming-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/c-programming\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">C Programming - Functions & Recursion</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Which of the following correctly explains the use of $\\texttt{static}$ in C?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">A static local variable is created again every time the function is called<br/></span>",
                "<span style=\"display: inline;\">A static global variable can be directly accessed from any other file<br/></span>",
                "<span style=\"display: inline;\">A static function can be called directly from any other file<br/></span>",
                "<span style=\"display: inline;\">A static local variable retains its value between function calls</span>"
            ],
            "answer": "D",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"535118\"></a><div itemprop=\"text\"><p>A static local variable is initialized only once.</p><p>It is not created again and again on every function call.</p><p>It retains its value between function calls.</p><p>A static global variable has internal linkage, so it cannot be directly accessed from another file.</p><p>A static function also has internal linkage, so it cannot be directly called from another file.</p><p>Therefore, the correct statement is that a static local variable retains its value between function calls.</p><p><strong>Answer: D</strong></p></div><br><br><a href=\"https://gateoverflow.in/535117/go-classes-dpp-gate-cs-c-programming-static-keyword#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-c-programming-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/c-programming\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">C Programming - Functions & Recursion</a></b></div></div>"
        }
    ]
});

registerTest({
    "name": "DPP 09 - C Programming (Functions & Recursion - Part 3)",
    "testLabel": "DPP 09",
    "testType": "DPP",
    "bracket": "Functions & Recursion - Part 3",
    "subject": "c_prog",
    "series": "cse-dpp-2027",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 10,
    "topicsCovered": "Functions & Recursion (Practice Set 3)",
    "questions": [
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Given the following two files, what will happen when they are compiled and linked together?</p><p><strong>file1.c</strong></p><pre class=\"prettyprint linenums lang-c_cpp\" data-linenums=\"true\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"\" data-rawcode='#include &lt;stdio.h&gt; static void show() { printf(\"Hello\"); }' dir=\"ltr\">#include &lt;stdio.h&gt; static void show() { printf(\"Hello\"); }</pre><p><strong>main.c</strong></p><pre class=\"prettyprint linenums lang-c_cpp\" data-linenums=\"true\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"\" data-rawcode=\"void show(); int main() { show(); return 0; }\" dir=\"ltr\">void show(); int main() { show(); return 0; }</pre></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\texttt{Hello}$<br/></span>",
                "<span style=\"display: inline;\">Compilation error<br/></span>",
                "<span style=\"display: inline;\">Linker error<br/></span>",
                "<span style=\"display: inline;\">Runtime error</span>"
            ],
            "answer": "C",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"534942\"></a><div itemprop=\"text\"><p>In $\\texttt{file1.c}$, the function $\\texttt{show()}$ is declared as static.</p><p>A static function has internal linkage.</p><p>This means $\\texttt{show()}$ can be used only inside $\\texttt{file1.c}$.</p><p>It is not visible to other files.</p><p style=\"text-align:center\"><img alt=\"\" height=\"292\" src=\"https://cdn.mathpix.com/snip/images/KXLYo1X91GC8zHOQP7zJx4qQV6GDhqx1EFIZ8-GZjms.original.fullsize.png\" width=\"597\"/></p><p><br/>In $\\texttt{main.c}$, the line $\\texttt{void show();}$ only declares that a function named $\\texttt{show()}$ exists somewhere.</p><p>But during linking, the linker cannot access the $\\texttt{show()}$ function from $\\texttt{file1.c}$ because it is static.</p><p>So, a linker error occurs.</p><p><strong>Answer: C</strong></p></div><br><br><a href=\"https://gateoverflow.in/534941/go-classes-dpp-gate-cs-c-programming-static-function-linkage#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-c-programming-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/c-programming\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">C Programming - Functions & Recursion</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"338\" data-start=\"263\">Is there any difference between the following declarations?</p><pre class=\"prettyprint linenums lang-c_cpp\" data-end=\"377\" data-linenums=\"true\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"\" data-rawcode=\"extern int fun(); int fun();\" data-start=\"340\">extern int fun(); int fun();</pre></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">Both are identical<br/></span>",
                "<span style=\"display: inline;\">No difference, except $\\texttt{extern int fun();}$ is probably in another file<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{int fun();}$ is overridden with $\\texttt{extern int fun();}$<br/></span>",
                "<span style=\"display: inline;\">None of these</span>"
            ],
            "answer": "A",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"534825\"></a><div itemprop=\"text\"><p data-end=\"131\" data-start=\"24\">In C, when we write a <strong data-end=\"70\" data-start=\"46\">function declaration</strong>, the function is already treated as <strong data-end=\"130\" data-start=\"107\">external by default</strong>.</p><p data-end=\"131\" data-start=\"24\">Writing $\\texttt{extern int fun();}$ explicitly mentions the same thing.</p><p data-end=\"172\" data-start=\"133\">So these two lines mean the same thing:</p><pre class=\"prettyprint linenums lang-c_cpp\" data-end=\"211\" data-linenums=\"true\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"\" data-rawcode=\"extern int fun(); int fun();\" data-start=\"174\">extern int fun(); int fun();</pre><p data-end=\"248\" data-start=\"213\">Both are only telling the compiler:</p><p data-end=\"348\" data-is-last-node=\"\" data-is-only-node=\"\" data-start=\"250\">There is a function named fun, it returns int, and its definition may be found later in this file.</p><p data-end=\"657\" data-start=\"580\">Therefore, both declarations are identical in meaning.</p><p data-end=\"998\" data-is-last-node=\"\" data-is-only-node=\"\" data-start=\"965\"><strong data-end=\"976\" data-start=\"965\">Answer:</strong> <strong>A</strong></p></div><br><br><a href=\"https://gateoverflow.in/534823/go-classes-dpp-gate-cs-c-programming-extern-function-declaration#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-c-programming-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/c-programming\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">C Programming - Functions & Recursion</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"1296\" data-start=\"1239\">What is the output of the following code?</p><pre class=\"prettyprint linenums lang-c_cpp\" data-end=\"1472\" data-linenums=\"true\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"\" data-rawcode='#include &lt;stdio.h&gt; int fun(int n) { if (n &lt;= 1) return n; return fun(n - 1) + fun(n - 3); } int main() { printf(\"%d\", fun(5)); return 0; }' data-start=\"1298\">#include &lt;stdio.h&gt; int fun(int n) { if (n &lt;= 1) return n; return fun(n - 1) + fun(n - 3); } int main() { printf(\"%d\", fun(5)); return 0; }</pre></div></span>",
            "image": "",
            "options": [],
            "answer": "1",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"534511\"></a><div itemprop=\"text\"><p data-end=\"1595\" data-start=\"1545\">We need to find $\\texttt{fun(5)}$.</p><p data-end=\"1619\" data-start=\"1597\">The given function is:</p><p data-end=\"1664\" data-start=\"1621\">$\\texttt{fun(n) = fun(n - 1) + fun(n - 3)}$</p><p data-end=\"1681\" data-start=\"1666\">Base condition:</p><p data-end=\"1732\" data-start=\"1683\">If $\\texttt{n &lt;= 1}$, then $\\texttt{fun(n) = n}$.</p><p data-end=\"1738\" data-start=\"1734\">Now,</p><p data-end=\"1775\" data-start=\"1740\">$\\texttt{fun(5) = fun(4) + fun(2)}$</p><p data-end=\"1812\" data-start=\"1777\">$\\texttt{fun(4) = fun(3) + fun(1)}$</p><p data-end=\"1849\" data-start=\"1814\">$\\texttt{fun(3) = fun(2) + fun(0)}$</p><p data-end=\"1887\" data-start=\"1851\">$\\texttt{fun(2) = fun(1) + fun(-1)}$</p><p data-end=\"1912\" data-start=\"1889\">Now use base condition:</p><p data-end=\"1935\" data-start=\"1914\">$\\texttt{fun(1) = 1}$</p><p data-end=\"1958\" data-start=\"1937\">$\\texttt{fun(0) = 0}$</p><p data-end=\"1983\" data-start=\"1960\">$\\texttt{fun(-1) = -1}$</p><p data-end=\"1988\" data-start=\"1985\">So,</p><p data-end=\"2022\" data-start=\"1990\">$\\texttt{fun(2) = 1 + (-1) = 0}$</p><p data-end=\"2053\" data-start=\"2024\">$\\texttt{fun(3) = 0 + 0 = 0}$</p><p data-end=\"2084\" data-start=\"2055\">$\\texttt{fun(4) = 0 + 1 = 1}$</p><p data-end=\"2115\" data-start=\"2086\">$\\texttt{fun(5) = 1 + 0 = 1}$</p><p data-end=\"2155\" data-start=\"2117\">Therefore, the output is $\\texttt{1}$.</p></div><br><br><a href=\"https://gateoverflow.in/534510/go-classes-dpp-gate-cs-c-programming-recursion-trace#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-c-programming-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/c-programming\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">C Programming - Functions & Recursion</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"1316\" data-start=\"1259\">What is the output of the following code?</p><pre class=\"prettyprint linenums lang-c_cpp\" data-end=\"1483\" data-linenums=\"true\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"\" data-rawcode='#include &lt;stdio.h&gt; int fun(int n) { if (n == 0) return 1; return n * fun(n - 2); } int main() { printf(\"%d\", fun(6)); return 0; }' data-start=\"1318\">#include &lt;stdio.h&gt; int fun(int n) { if (n == 0) return 1; return n * fun(n - 2); } int main() { printf(\"%d\", fun(6)); return 0; }</pre></div></span>",
            "image": "",
            "options": [],
            "answer": "48",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"534194\"></a><div itemprop=\"text\"><p data-end=\"1615\" data-start=\"1560\">The function call is $\\texttt{fun(6)}$.</p><p data-end=\"1644\" data-start=\"1617\">Now expand it step by step.</p><p data-end=\"1676\" data-start=\"1646\">$\\texttt{fun(6) = 6 * fun(4)}$</p><p data-end=\"1708\" data-start=\"1678\">$\\texttt{fun(4) = 4 * fun(2)}$</p><p data-end=\"1740\" data-start=\"1710\">$\\texttt{fun(2) = 2 * fun(0)}$</p><p data-end=\"1786\" data-start=\"1742\">The base condition is $\\texttt{fun(0) = 1}$.</p><p data-end=\"1791\" data-start=\"1788\">So,</p><p data-end=\"1822\" data-start=\"1793\">$\\texttt{fun(2) = 2 * 1 = 2}$</p><p data-end=\"1853\" data-start=\"1824\">$\\texttt{fun(4) = 4 * 2 = 8}$</p><p data-end=\"1885\" data-start=\"1855\">$\\texttt{fun(6) = 6 * 8 = 48}$</p><p data-end=\"1926\" data-start=\"1887\">Therefore, the output is $\\texttt{48}$.</p></div><br><br><a href=\"https://gateoverflow.in/534193/go-classes-dpp-gate-cs-c-programming-recursion#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-c-programming-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/c-programming\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">C Programming - Functions & Recursion</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"2431\" data-start=\"2374\">What is the output of the following code?</p><pre class=\"prettyprint linenums lang-c_cpp\" data-end=\"2601\" data-linenums=\"true\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"\" data-rawcode='#include &lt;stdio.h&gt; int calc(int n) { if (n == 1) return 2; return n + calc(n - 1); } int main() { printf(\"%d\", calc(4)); return 0; }' data-start=\"2433\">#include &lt;stdio.h&gt; int calc(int n) { if (n == 1) return 2; return n + calc(n - 1); } int main() { printf(\"%d\", calc(4)); return 0; } </pre></div></span>",
            "image": "",
            "options": [],
            "answer": "11",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"534186\"></a><div itemprop=\"text\"><p data-end=\"2732\" data-start=\"2676\">The function call is $\\texttt{calc(4)}$.</p><p data-end=\"2761\" data-start=\"2734\">Now expand it step by step.</p><p data-end=\"2795\" data-start=\"2763\">$\\texttt{calc(4) = 4 + calc(3)}$</p><p data-end=\"2829\" data-start=\"2797\">$\\texttt{calc(3) = 3 + calc(2)}$</p><p data-end=\"2863\" data-start=\"2831\">$\\texttt{calc(2) = 2 + calc(1)}$</p><p data-end=\"2910\" data-start=\"2865\">The base condition is $\\texttt{calc(1) = 2}$.</p><p data-end=\"2915\" data-start=\"2912\">So,</p><p data-end=\"2947\" data-start=\"2917\">$\\texttt{calc(2) = 2 + 2 = 4}$</p><p data-end=\"2979\" data-start=\"2949\">$\\texttt{calc(3) = 3 + 4 = 7}$</p><p data-end=\"3012\" data-start=\"2981\">$\\texttt{calc(4) = 4 + 7 = 11}$</p><p data-end=\"3053\" data-start=\"3014\">Therefore, the output is $\\texttt{11}$.</p></div><br><br><a href=\"https://gateoverflow.in/534185/go-classes-dpp-gate-cs-c-programming-recursion#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-c-programming-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/c-programming\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">C Programming - Functions & Recursion</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"1290\" data-start=\"1233\">What is the output of the following code?</p><pre class=\"prettyprint linenums lang-c_cpp\" data-end=\"1490\" data-linenums=\"true\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"\" data-rawcode='#include &lt;stdio.h&gt; void fun() { static int x = 3; int y = 2; x = x + y; y = y + x; printf(\"%d \", x); } int main() { fun(); fun(); fun(); return 0; }' data-start=\"1292\">#include &lt;stdio.h&gt; void fun() { static int x = 3; int y = 2; x = x + y; y = y + x; printf(\"%d \", x); } int main() { fun(); fun(); fun(); return 0; }</pre></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\texttt{5\\ 5\\ 5}$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{5\\ 7\\ 9}$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{3\\ 5\\ 7}$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{5\\ 10\\ 15}$</span>"
            ],
            "answer": "B",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"534184\"></a><div itemprop=\"text\"><p data-end=\"1645\" data-start=\"1589\">Here, $\\texttt{x}$ is a static variable.</p><p data-end=\"1733\" data-start=\"1647\">A static variable is initialized only once and keeps its value between function calls.</p><p data-end=\"1838\" data-start=\"1735\">But $\\texttt{y}$ is a normal local variable, so it is created again every time with value $\\texttt{2}$.</p><p data-end=\"1897\" data-start=\"1840\">In the first call, $\\texttt{x = 3}$ and $\\texttt{y = 2}$.</p><p data-end=\"1952\" data-start=\"1899\">So, $\\texttt{x = 3 + 2 = 5}$. It prints $\\texttt{5}$.</p><p data-end=\"2045\" data-start=\"1954\">In the second call, $\\texttt{x}$ keeps its old value $\\texttt{5}$. Again, $\\texttt{y = 2}$.</p><p data-end=\"2100\" data-start=\"2047\">So, $\\texttt{x = 5 + 2 = 7}$. It prints $\\texttt{7}$.</p><p data-end=\"2192\" data-start=\"2102\">In the third call, $\\texttt{x}$ keeps its old value $\\texttt{7}$. Again, $\\texttt{y = 2}$.</p><p data-end=\"2247\" data-start=\"2194\">So, $\\texttt{x = 7 + 2 = 9}$. It prints $\\texttt{9}$.</p><p data-end=\"2293\" data-start=\"2249\">Therefore, the output is $\\texttt{5\\ 7\\ 9}$.</p><p data-end=\"2328\" data-start=\"2295\"><strong data-end=\"2306\" data-start=\"2295\">Answer:</strong> <strong>B.</strong></p></div><br><br><a href=\"https://gateoverflow.in/534183/go-classes-dpp-gate-cs-c-programming-static-variables-in-functions#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-c-programming-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/c-programming\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">C Programming - Functions & Recursion</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"1464\" data-start=\"1407\">What is the output of the following code?</p><pre class=\"prettyprint linenums lang-c_cpp\" data-linenums=\"true\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"\" data-rawcode='#include &lt;stdio.h&gt; int update(int x) { x = x + 3; return x * 2; } int main() { int a = 4, b; b = update(a); printf(\"%d %d\", a, b); return 0; }'>#include &lt;stdio.h&gt; int update(int x) { x = x + 3; return x * 2; } int main() { int a = 4, b; b = update(a); printf(\"%d %d\", a, b); return 0; }</pre></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\texttt{7\\ 14}$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{4\\ 14}$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{4\\ 8}$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{7\\ 8}$</span>"
            ],
            "answer": "B",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"534049\"></a><div itemprop=\"text\"><p data-end=\"1776\" data-start=\"1732\">Initially, $\\texttt{a = 4}$.</p><p data-end=\"1820\" data-start=\"1778\">The function call is $\\texttt{update(a)}$.</p><p data-end=\"1937\" data-start=\"1822\">In C, arguments are passed by value. So, a copy of $\\texttt{a}$ is sent to the function, not the original variable.</p><p data-end=\"1977\" data-start=\"1939\">Inside the function, $\\texttt{x = 4}$.</p><p data-end=\"2026\" data-start=\"1979\">Then $\\texttt{x = x + 3}$, so $\\texttt{x = 7}$.</p><p data-end=\"2079\" data-start=\"2028\">The function returns $\\texttt{x * 2 = 7 * 2 = 14}$.</p><p data-end=\"2103\" data-start=\"2081\">So, $\\texttt{b = 14}$.</p><p data-end=\"2165\" data-start=\"2105\">But the original variable $\\texttt{a}$ remains $\\texttt{4}$.</p><p data-end=\"2209\" data-start=\"2167\">Therefore, the output is $\\texttt{4\\ 14}$.</p><p data-end=\"2242\" data-start=\"2211\"><strong data-end=\"2222\" data-start=\"2211\">Answer:</strong> B. $\\texttt{4\\ 14}$</p></div><br><br><a href=\"https://gateoverflow.in/534048/go-classes-dpp-gate-cs-c-programming-functions-%26-pass-by-value#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-c-programming-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/c-programming\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">C Programming - Functions & Recursion</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Given the pseudocode below for the function remains(), which of the following statements is true about the output, if we pass it a positive integer $n&gt;2$ ?<br/> </p><pre class=\"prettyprint linenums lang-c_cpp\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"4\"> int remains(int n) { int x = n; for (i=(n-1);i&gt;1;i-) { x = x % i ; } return x i }</pre></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">Output is always $0$</span>",
                "<span style=\"display: inline;\">Output is always $1$</span>",
                "<span style=\"display: inline;\">Output is $0$ only if $n$ is NOT a prime number</span>",
                "<span style=\"display: inline;\">Output is $1$ only if $n$ is a prime number</span>"
            ],
            "answer": "A",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"478976\"></a><div itemprop=\"text\"><ul data-end=\"1874\" data-start=\"1694\"><li data-end=\"1800\" data-start=\"1694\"><p data-end=\"1756\" data-start=\"1696\"><strong data-end=\"1737\" data-start=\"1696\">First iteration is the most important</strong>: <code data-end=\"1754\" data-start=\"1739\">x = n % (n-1)</code></p><ul data-end=\"1800\" data-start=\"1759\"><li data-end=\"1800\" data-start=\"1759\"><p data-end=\"1800\" data-start=\"1761\">This gives 1 (for example: <code data-end=\"1799\" data-start=\"1788\">7 % 6 = 1</code>)</p></li></ul></li><li data-end=\"1833\" data-start=\"1801\"><p data-end=\"1833\" data-start=\"1803\">After that, <code data-end=\"1833\" data-start=\"1815\">1 % anything = 1</code></p></li><li data-end=\"1874\" data-start=\"1834\"><p data-end=\"1874\" data-start=\"1836\">So, for <strong data-end=\"1853\" data-start=\"1844\">n &gt; 2</strong>, the output is <strong data-end=\"1874\" data-start=\"1869\">1</strong></p></li></ul><h3 data-end=\"1905\" data-start=\"1881\"> </h3></div><br><br><a href=\"https://gateoverflow.in/478597/go-classes-dpp-c-programming-program-output-tifr#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-c-programming-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/c-programming\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">C Programming - Functions & Recursion</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>What is the value returned by the function $f$ given below when $n=100$ ?</p><pre class=\"prettyprint linenums lang-c_cpp\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"4\">let f(int n) { if (n==0) then return n; else return n+f(n-2); } </pre></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$2550$<br/></span>",
                "<span style=\"display: inline;\">$2556$<br/></span>",
                "<span style=\"display: inline;\">$5220$<br/></span>",
                "<span style=\"display: inline;\">$5520$</span>"
            ],
            "answer": "A",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"477410\"></a><div itemprop=\"text\">For f (100) = 100 + f(98)<br/> <br/> = 100 + 98 + f(96)<br/> <br/> = 100 + 98 + 96 + f(94) and so on, But we will conclude it at n = 0<br/> <br/> = 100 + 98 + 96 + ..... + 4 + 2 + f(0) {Since it will return 0 at f(0)}<br/> <br/> = 100 + 98 + 96 + ..... + 4 + 2<br/> <br/> From 1 to 100, we have 100 natural numbers out of them, 50 are even and 50 are odd.<br/> <br/> Here we are considering the even numbers<br/> <br/> So We know about Sum of n terms of AP that Sum = n/2 (a + l) where a = first term and l = Last term<br/> <br/> = (50 / 2) (2 + 100) = (25)(102) = 2550<br/> <br/> So option A is correct</div><br><br><a href=\"https://gateoverflow.in/477404/go-classes-dpp-c-programming-recursion-ugc-net#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-c-programming-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/c-programming\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">C Programming - Functions & Recursion</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider the following recursive C function.</p><pre class=\"prettyprint linenums lang-c_cpp\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"4\">unsigned int f(unsigned int n) { if (n &lt; 10) printf(\"%d\",n); else { printf(\"%d\", n%10); f(n/10); printf(\"%d\", n%10); } } </pre><p>What does the call $£(351274)$ print?</p></div></span>",
            "image": "",
            "options": [],
            "answer": "351274",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"474333\"></a><div itemprop=\"text\"><ul><li>The function $f(n)$ first prints $n \\% 10$ (last digit), then calls $f(n / 10)$ (removes last digit), and finally prints $n \\% 10$ again.</li><li>So effectively:</li></ul><p>$\\rightarrow$ It prints digits in reverse order first,<br/>$\\rightarrow$ Then the first digit,<br/>$\\rightarrow$ Then the same digits again in reverse of reverse (i.e., original order).<br/>For $f(351274)$ :</p><ul><li>Forward part (before recursion): 47215</li><li>First digit (base case): 3</li><li>Backward part (after recursion): 51274</li></ul><p>Final output: 47215351274</p></div><br><br><a href=\"https://gateoverflow.in/474332/go-classes-dpp-c-programming-recursion-iit-kgp#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-c-programming-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/c-programming\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">C Programming - Functions & Recursion</a></b></div></div>"
        }
    ]
});

registerTest({
    "name": "DPP 10 - C Programming (Functions & Recursion - Part 4)",
    "testLabel": "DPP 10",
    "testType": "DPP",
    "bracket": "Functions & Recursion - Part 4",
    "subject": "c_prog",
    "series": "cse-dpp-2027",
    "date": "Nov 03, 2026",
    "duration": "15 Min",
    "totalMarks": 2,
    "topicsCovered": "Functions & Recursion (Practice Set 4)",
    "questions": [
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Let the function g be defined as follows:</p><pre class=\"prettyprint linenums lang-c_cpp\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"4\"> int g ( int n ) { if (n &lt; 2) return n; return g(n/2); } </pre><p>What is the value returned by the call $\\mathrm{g}(142857)$ ?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$0$<br/></span>",
                "<span style=\"display: inline;\">$1$<br/></span>",
                "<span style=\"display: inline;\">$2$<br/></span>",
                "<span style=\"display: inline;\">$71428$</span>"
            ],
            "answer": "A",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"474329\"></a><div itemprop=\"text\">The function repeatedly divides $n$ by 2 until $n&lt;2$, then returns $n$.<br/> So for $g(142857)$ :<br/> - Keep dividing by 2:<br/> <br/> $$<br/> \\begin{aligned}<br/> &amp; 142857 \\rightarrow 71428 \\rightarrow 35714 \\rightarrow 17857 \\rightarrow 8928 \\rightarrow 4464 \\rightarrow 2232 \\rightarrow 1116 \\rightarrow 558 \\rightarrow 279 \\rightarrow 139 \\rightarrow 69 \\rightarrow 34 \\rightarrow \\\\<br/> &amp; 17 \\rightarrow 8 \\rightarrow 4 \\rightarrow 2 \\rightarrow 1<br/> \\end{aligned}<br/> $$<br/> <br/> - Finally, $n&lt;2 \\Rightarrow$ return 1</div><br><br><a href=\"https://gateoverflow.in/474328/go-classes-dpp-c-programming-recursion-iit-kgp#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-c-programming-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/c-programming\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">C Programming - Functions & Recursion</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider the following recursive function definition:</p><pre class=\"prettyprint linenums lang-c_cpp\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"4\"> function FOO(n) if (n=0) then return 0 else if ( n = 1) then return 1 else if ( n = 2) then return 3 else return n + FOO(n-1) + FOO(n-2) end if end function</pre><p>What is the value returned by $F O O(5)$ ?<br/>A. $10$<br/>B. $14$<br/>C. $26$<br/>D. $35$</p></div></span>",
            "image": "",
            "options": [],
            "answer": "26",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"473918\"></a><div itemprop=\"text\">$$<br/> \\begin{aligned}<br/> &amp; F O O(0)=0 \\\\<br/> &amp; F O O(1)=1 \\\\<br/> &amp; F O O(2)=3<br/> \\end{aligned}<br/> $$<br/> <br/> $$<br/> \\begin{aligned}<br/> \\mathrm{FOO}(3) &amp; =3+\\mathrm{FOO}(2)+\\mathrm{FOO}(1) \\\\<br/> &amp; =3+3+1=7<br/> \\end{aligned}<br/> $$<br/> <br/> $$<br/> \\begin{aligned}<br/> F O O(4) &amp; =4+F O O(3)+F O O(2) \\\\<br/> &amp; =4+7+3=14<br/> \\end{aligned}<br/> $$<br/> <br/> $$<br/> \\begin{aligned}<br/> \\mathrm{FOO}(5) &amp; =5+\\mathrm{FOO}(4)+\\mathrm{FOO}(3) \\\\<br/> &amp; =5+14+7=26<br/> \\end{aligned}<br/> $$<br/> </div><br><br><a href=\"https://gateoverflow.in/473728/go-classes-dpp-c-programming-program-output#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-c-programming-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/c-programming\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">C Programming - Functions & Recursion</a></b></div></div>"
        }
    ]
});

registerTest({
    "name": "DPP 11 - C Programming (Loops & Control Statements - Part 1)",
    "testLabel": "DPP 11",
    "testType": "DPP",
    "bracket": "Loops & Control Statements - Part 1",
    "subject": "c_prog",
    "series": "cse-dpp-2027",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 10,
    "topicsCovered": "Loops & Control Statements (Practice Set 1)",
    "questions": [
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>What does the following code do?</p><pre class=\"prettyprint linenums lang-c_cpp\" data-linenums=\"true\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"\" data-rawcode=\"#include &lt;stdio.h&gt; int main() { char c; while ((c = getchar()) != EOF) { if (c &gt;= 'A' &amp;&amp; c &lt;= 'Z') c = c - 'A' + 'a'; putchar(c); } return 0; }\" dir=\"ltr\">#include &lt;stdio.h&gt; int main() { char c; while ((c = getchar()) != EOF) { if (c &gt;= 'A' &amp;&amp; c &lt;= 'Z') c = c - 'A' + 'a'; putchar(c); } return 0; }</pre></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">It converts lowercase letters to uppercase<br/></span>",
                "<span style=\"display: inline;\">It converts uppercase letters to lowercase and prints the input<br/></span>",
                "<span style=\"display: inline;\">It prints only uppercase letters<br/></span>",
                "<span style=\"display: inline;\">It stops when newline is found</span>"
            ],
            "answer": "B",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"538110\"></a><div itemprop=\"text\"><p>The program reads characters until $\\texttt{EOF}$.</p><p>For each character, it checks:</p><p>$\\texttt{c &gt;= 'A' \\&amp;\\&amp; c &lt;= 'Z'}$</p><p>This condition is true only for uppercase English letters.</p><p>If the character is uppercase, this statement runs:</p><p>$\\texttt{c = c - 'A' + 'a';}$</p><p>This converts the uppercase letter to its lowercase form.</p><p>Then,</p><p>$\\texttt{putchar(c);}$</p><p>prints the character.</p><p>So uppercase letters are converted to lowercase, while other characters are printed as they are.</p><p><br/><strong>Answer: B</strong></p></div><br><br><a href=\"https://gateoverflow.in/538109/go-classes-dpp-gate-cs-c-programming-character-i-o#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-c-programming-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/c-programming\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">C Programming - Loops & Control Statements</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider the following program:</p><pre class=\"prettyprint linenums lang-c_cpp\" data-linenums=\"true\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"\" data-rawcode=\"#include &lt;stdio.h&gt; int main(void) { char ch; printf(&quot;Enter your input: &quot;); while ((ch = getchar()) != 'C') { putchar(ch); } return 0; }\" dir=\"ltr\">#include &lt;stdio.h&gt; int main(void) { char ch; printf(\"Enter your input: \"); while ((ch = getchar()) != 'C') { putchar(ch); } return 0; }</pre><p>For the input:</p><pre dir=\"ltr\"><code dir=\"ltr\">In 1983, a committee was formed to standardize the C programming language.</code></pre><p>What will be printed?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\texttt{Enter your input: In 1983, a committee was formed to standardize the}$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{Enter your input: In 1983, a committee was formed to standardize the C}$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{Enter your input: C programming language.}$<br/></span>",
                "<span style=\"display: inline;\">Compilation error</span>"
            ],
            "answer": "A",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"538108\"></a><div itemprop=\"text\"><p>The loop reads characters one by one using $\\texttt{getchar()}$.</p><p>The condition is:</p><p>$\\texttt{(ch = getchar()) != 'C'}$</p><p>So, the loop continues until the uppercase character '$\\texttt{C}$' is read.</p><p>For every character before '$\\texttt{C}$', $\\texttt{putchar(ch)}$ prints that character.</p><p>In the given input, the first uppercase '$\\texttt{C}$' appears in:</p><p>$\\texttt{C programming language}$</p><p>So the program prints everything before that '$\\texttt{C}$', and then stops.</p><p>It does not print the uppercase '$\\texttt{C}$'.</p><p><br/><strong>Answer: A</strong></p></div><br><br><a href=\"https://gateoverflow.in/538107/go-classes-dpp-gate-cs-c-programming-getchar-putchar-loop#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-c-programming-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/c-programming\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">C Programming - Loops & Control Statements</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"4354\" data-start=\"4297\">What is the output of the following code?</p><pre class=\"prettyprint linenums lang-c_cpp\" data-end=\"4681\" data-linenums=\"true\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"\" data-rawcode='#include &lt;stdio.h&gt; int main() { int i, j, sum = 0; for (i = 1; i &lt;= 4; i++) { for (j = 1; j &lt;= 5; j++) { if (j % i == 0) continue; if (i + j &gt; 6) break; sum = sum + i + j; } } printf(\"%d\", sum); return 0; }' data-start=\"4356\">#include &lt;stdio.h&gt; int main() { int i, j, sum = 0; for (i = 1; i &lt;= 4; i++) { for (j = 1; j &lt;= 5; j++) { if (j % i == 0) continue; if (i + j &gt; 6) break; sum = sum + i + j; } } printf(\"%d\", sum); return 0; }</pre></div></span>",
            "image": "",
            "options": [],
            "answer": "28",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"534200\"></a><div itemprop=\"text\"><p data-end=\"4804\" data-start=\"4758\">Initially, $\\texttt{sum = 0}$.</p><p data-end=\"4973\" data-start=\"4806\">For $\\texttt{i = 1}$:<br data-end=\"4830\" data-start=\"4827\"/>Every value of $\\texttt{j}$ is divisible by $\\texttt{1}$, so $\\texttt{continue}$ runs every time.<br data-end=\"4930\" data-start=\"4927\"/>Nothing is added.<br data-end=\"4950\" data-start=\"4947\"/>So, $\\texttt{sum = 0}$.</p><p data-end=\"5472\" data-start=\"4975\">For $\\texttt{i = 2}$:<br data-end=\"4999\" data-start=\"4996\"/>$\\texttt{j = 1}$ is not divisible by $\\texttt{2}$ and $\\texttt{i + j = 3}$, so add $\\texttt{2 + 1 = 3}$.<br data-end=\"5106\" data-start=\"5103\"/>$\\texttt{j = 2}$ is divisible by $\\texttt{2}$, so skip.<br data-end=\"5164\" data-start=\"5161\"/>$\\texttt{j = 3}$ is not divisible by $\\texttt{2}$ and $\\texttt{i + j = 5}$, so add $\\texttt{2 + 3 = 5}$.<br data-end=\"5271\" data-start=\"5268\"/>$\\texttt{j = 4}$ is divisible by $\\texttt{2}$, so skip.<br data-end=\"5329\" data-start=\"5326\"/>$\\texttt{j = 5}$ is not divisible by $\\texttt{2}$, but $\\texttt{i + j = 7}$, so $\\texttt{break}$ occurs.<br data-end=\"5436\" data-start=\"5433\"/>Now, $\\texttt{sum = 0 + 3 + 5 = 8}$.</p><p data-end=\"5914\" data-start=\"5474\">For $\\texttt{i = 3}$:<br data-end=\"5498\" data-start=\"5495\"/>$\\texttt{j = 1}$ is not divisible by $\\texttt{3}$ and $\\texttt{i + j = 4}$, so add $\\texttt{3 + 1 = 4}$.<br data-end=\"5605\" data-start=\"5602\"/>$\\texttt{j = 2}$ is not divisible by $\\texttt{3}$ and $\\texttt{i + j = 5}$, so add $\\texttt{3 + 2 = 5}$.<br data-end=\"5712\" data-start=\"5709\"/>$\\texttt{j = 3}$ is divisible by $\\texttt{3}$, so skip.<br data-end=\"5770\" data-start=\"5767\"/>$\\texttt{j = 4}$ is not divisible by $\\texttt{3}$, but $\\texttt{i + j = 7}$, so $\\texttt{break}$ occurs.<br data-end=\"5877\" data-start=\"5874\"/>Now, $\\texttt{sum = 8 + 4 + 5 = 17}$.</p><p data-end=\"6333\" data-start=\"5916\">For $\\texttt{i = 4}$:<br data-end=\"5940\" data-start=\"5937\"/>$\\texttt{j = 1}$ is not divisible by $\\texttt{4}$ and $\\texttt{i + j = 5}$, so add $\\texttt{4 + 1 = 5}$.<br data-end=\"6047\" data-start=\"6044\"/>$\\texttt{j = 2}$ is not divisible by $\\texttt{4}$, but $\\texttt{i + j = 6}$ is not greater than $\\texttt{6}$, so add $\\texttt{4 + 2 = 6}$.<br data-end=\"6188\" data-start=\"6185\"/>$\\texttt{j = 3}$ is not divisible by $\\texttt{4}$, but $\\texttt{i + j = 7}$, so $\\texttt{break}$ occurs.<br data-end=\"6295\" data-start=\"6292\"/>Now, $\\texttt{sum = 17 + 5 + 6 = 28}$.</p><p data-end=\"6374\" data-start=\"6335\">Therefore, the output is $\\texttt{28}$.</p></div><br><br><a href=\"https://gateoverflow.in/534199/go-classes-dpp-gate-cs-c-programming-nested-loops#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-c-programming-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/c-programming\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">C Programming - Loops & Control Statements</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"3200\" data-start=\"3143\">What is the output of the following code?</p><pre class=\"prettyprint linenums lang-c_cpp\" data-end=\"3476\" data-linenums=\"true\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"\" data-rawcode='#include &lt;stdio.h&gt; int main() { int i, j, count = 0; for (i = 1; i &lt;= 4; i++) { for (j = 1; j &lt;= 4; j++) { if (i * j &gt; 6) break; count = count + j; } } printf(\"%d\", count); return 0; }' data-start=\"3202\">#include &lt;stdio.h&gt; int main() { int i, j, count = 0; for (i = 1; i &lt;= 4; i++) { for (j = 1; j &lt;= 4; j++) { if (i * j &gt; 6) break; count = count + j; } } printf(\"%d\", count); return 0; }</pre></div></span>",
            "image": "",
            "options": [],
            "answer": "20",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"534188\"></a><div itemprop=\"text\"><p data-end=\"3601\" data-start=\"3553\">Initially, $\\texttt{count = 0}$.</p><p data-end=\"3926\" data-start=\"3603\">For $\\texttt{i = 1}$:<br data-end=\"3627\" data-start=\"3624\"/>$\\texttt{j = 1}$ gives $\\texttt{1 * 1 = 1}$, so add $\\texttt{1}$.<br data-end=\"3695\" data-start=\"3692\"/>$\\texttt{j = 2}$ gives $\\texttt{1 * 2 = 2}$, so add $\\texttt{2}$.<br data-end=\"3763\" data-start=\"3760\"/>$\\texttt{j = 3}$ gives $\\texttt{1 * 3 = 3}$, so add $\\texttt{3}$.<br data-end=\"3831\" data-start=\"3828\"/>$\\texttt{j = 4}$ gives $\\texttt{1 * 4 = 4}$, so add $\\texttt{4}$.<br data-end=\"3899\" data-start=\"3896\"/>Now, $\\texttt{count = 10}$.</p><p data-end=\"4275\" data-start=\"3928\">For $\\texttt{i = 2}$:<br data-end=\"3952\" data-start=\"3949\"/>$\\texttt{j = 1}$ gives $\\texttt{2 * 1 = 2}$, so add $\\texttt{1}$.<br data-end=\"4020\" data-start=\"4017\"/>$\\texttt{j = 2}$ gives $\\texttt{2 * 2 = 4}$, so add $\\texttt{2}$.<br data-end=\"4088\" data-start=\"4085\"/>$\\texttt{j = 3}$ gives $\\texttt{2 * 3 = 6}$, so add $\\texttt{3}$.<br data-end=\"4156\" data-start=\"4153\"/>$\\texttt{j = 4}$ gives $\\texttt{2 * 4 = 8}$, so $\\texttt{break}$ occurs.<br data-end=\"4231\" data-start=\"4228\"/>Now, $\\texttt{count = 10 + 1 + 2 + 3 = 16}$.</p><p data-end=\"4539\" data-start=\"4277\">For $\\texttt{i = 3}$:<br data-end=\"4301\" data-start=\"4298\"/>$\\texttt{j = 1}$ gives $\\texttt{3 * 1 = 3}$, so add $\\texttt{1}$.<br data-end=\"4369\" data-start=\"4366\"/>$\\texttt{j = 2}$ gives $\\texttt{3 * 2 = 6}$, so add $\\texttt{2}$.<br data-end=\"4437\" data-start=\"4434\"/>$\\texttt{j = 3}$ gives $\\texttt{3 * 3 = 9}$, so $\\texttt{break}$ occurs.<br data-end=\"4512\" data-start=\"4509\"/>Now, $\\texttt{count = 19}$.</p><p data-end=\"4735\" data-start=\"4541\">For $\\texttt{i = 4}$:<br data-end=\"4565\" data-start=\"4562\"/>$\\texttt{j = 1}$ gives $\\texttt{4 * 1 = 4}$, so add $\\texttt{1}$.<br data-end=\"4633\" data-start=\"4630\"/>$\\texttt{j = 2}$ gives $\\texttt{4 * 2 = 8}$, so $\\texttt{break}$ occurs.<br data-end=\"4708\" data-start=\"4705\"/>Now, $\\texttt{count = 20}$.</p><p data-end=\"4776\" data-start=\"4737\">Therefore, the output is $\\texttt{20}$.</p></div><br><br><a href=\"https://gateoverflow.in/534187/go-classes-dpp-gate-cs-c-programming-nested-loops#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-c-programming-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/c-programming\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">C Programming - Loops & Control Statements</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"4050\" data-start=\"3993\">What is the output of the following code?</p><pre class=\"prettyprint linenums lang-\" data-end=\"4357\" data-linenums=\"true\" data-pbcklang=\"\" data-pbcktabsize=\"\" data-rawcode='#include &lt;stdio.h&gt; int main() { int x = 3, y = 1; switch (x - 1) { case 1: y = y + 2; case 2: y = y * 3; case 3: y = y - 1; break; default: y = y + 5; } printf(\"%d\", y); return 0; }' data-start=\"4052\">#include &lt;stdio.h&gt; int main() { int x = 3, y = 1; switch (x - 1) { case 1: y = y + 2; case 2: y = y * 3; case 3: y = y - 1; break; default: y = y + 5; } printf(\"%d\", y); return 0; }</pre></div></span>",
            "image": "",
            "options": [],
            "answer": "2",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"534053\"></a><div itemprop=\"text\"><p data-end=\"4469\" data-start=\"4430\">Here, $\\texttt{x = 3}$.</p><p data-end=\"4496\" data-start=\"4471\">So, $\\texttt{x - 1 = 2}$.</p><p data-end=\"4549\" data-start=\"4498\">Therefore, execution starts from $\\texttt{case 2}$.</p><p data-end=\"4579\" data-start=\"4551\">Initially, $\\texttt{y = 1}$.</p><p data-end=\"4653\" data-start=\"4581\">In $\\texttt{case 2}$, $\\texttt{y = y * 3}$, so $\\texttt{y = 1 * 3 = 3}$.</p><p data-end=\"4757\" data-start=\"4655\">There is no $\\texttt{break}$ after $\\texttt{case 2}$, so execution falls through to $\\texttt{case 3}$.</p><p data-end=\"4831\" data-start=\"4759\">In $\\texttt{case 3}$, $\\texttt{y = y - 1}$, so $\\texttt{y = 3 - 1 = 2}$.</p><p data-end=\"4889\" data-start=\"4833\">Now $\\texttt{break}$ is encountered, so the switch ends.</p><p data-end=\"4929\" data-start=\"4891\">Therefore, the output is $\\texttt{2}$.</p></div><br><br><a href=\"https://gateoverflow.in/534052/go-classes-dpp-gate-cs-c-programming-switch-case#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-c-programming-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/c-programming\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">C Programming - Loops & Control Statements</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"2372\" data-start=\"2315\">What is the output of the following code?</p><pre class=\"prettyprint linenums lang-c_cpp\" data-linenums=\"true\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"\" data-rawcode='#include &lt;stdio.h&gt; int main() { int i, j, count = 0; for (i = 1; i &lt;= 4; i++) { for (j = 1; j &lt;= 4; j++) { if (i == j) continue; if (i + j &gt; 5) break; count++; } } printf(\"%d\", count); return 0; }'>#include &lt;stdio.h&gt; int main() { int i, j, count = 0; for (i = 1; i &lt;= 4; i++) { for (j = 1; j &lt;= 4; j++) { if (i == j) continue; if (i + j &gt; 5) break; count++; } } printf(\"%d\", count); return 0; }</pre></div></span>",
            "image": "",
            "options": [],
            "answer": "6",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"534051\"></a><div itemprop=\"text\"><p data-end=\"2809\" data-start=\"2761\">Initially, $\\texttt{count = 0}$.</p><p data-end=\"3105\" data-start=\"2811\">For $\\texttt{i = 1}$:<br data-end=\"2835\" data-start=\"2832\"/>$\\texttt{j = 1}$ is skipped because $\\texttt{i == j}$.<br data-end=\"2892\" data-start=\"2889\"/>$\\texttt{j = 2}$ gives $\\texttt{i + j = 3}$, so $\\texttt{count = 1}$.<br data-end=\"2964\" data-start=\"2961\"/>$\\texttt{j = 3}$ gives $\\texttt{i + j = 4}$, so $\\texttt{count = 2}$.<br data-end=\"3036\" data-start=\"3033\"/>$\\texttt{j = 4}$ gives $\\texttt{i + j = 5}$, so $\\texttt{count = 3}$.</p><p data-end=\"3404\" data-start=\"3107\">For $\\texttt{i = 2}$:<br data-end=\"3131\" data-start=\"3128\"/>$\\texttt{j = 1}$ gives $\\texttt{i + j = 3}$, so $\\texttt{count = 4}$.<br data-end=\"3203\" data-start=\"3200\"/>$\\texttt{j = 2}$ is skipped because $\\texttt{i == j}$.<br data-end=\"3260\" data-start=\"3257\"/>$\\texttt{j = 3}$ gives $\\texttt{i + j = 5}$, so $\\texttt{count = 5}$.<br data-end=\"3332\" data-start=\"3329\"/>$\\texttt{j = 4}$ gives $\\texttt{i + j = 6}$, so $\\texttt{break}$ occurs.</p><p data-end=\"3677\" data-start=\"3406\">For $\\texttt{i = 3}$:<br data-end=\"3430\" data-start=\"3427\"/>$\\texttt{j = 1}$ gives $\\texttt{i + j = 4}$, so $\\texttt{count = 6}$.<br data-end=\"3502\" data-start=\"3499\"/>$\\texttt{j = 2}$ gives $\\texttt{i + j = 5}$, so $\\texttt{count = 7}$.<br data-end=\"3574\" data-start=\"3571\"/>$\\texttt{j = 3}$ is skipped.<br data-end=\"3605\" data-start=\"3602\"/>$\\texttt{j = 4}$ gives $\\texttt{i + j = 7}$, so $\\texttt{break}$ occurs.</p><p data-end=\"3847\" data-start=\"3679\">For $\\texttt{i = 4}$:<br data-end=\"3703\" data-start=\"3700\"/>$\\texttt{j = 1}$ gives $\\texttt{i + j = 5}$, so $\\texttt{count = 8}$.<br data-end=\"3775\" data-start=\"3772\"/>$\\texttt{j = 2}$ gives $\\texttt{i + j = 6}$, so $\\texttt{break}$ occurs.</p><p data-end=\"3887\" data-start=\"3849\">Therefore, the output is $\\texttt{8}$.</p></div><br><br><a href=\"https://gateoverflow.in/534050/go-classes-dpp-gate-cs-c-programming-break-and-continue#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-c-programming-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/c-programming\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">C Programming - Loops & Control Statements</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"1465\" data-start=\"1408\">What is the output of the following code?</p><pre class=\"prettyprint linenums lang-c_cpp\" data-end=\"1787\" data-linenums=\"true\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"\" data-rawcode='#include &lt;stdio.h&gt; int main() { int i, j, sum = 0; for (i = 1; i &lt;= 4; i++) { for (j = 1; j &lt;= 4; j++) { if (j == i) continue; if (i + j &gt; 5) break; sum = sum + i + j; } } printf(\"%d\", sum); return 0; }' data-start=\"1467\">#include &lt;stdio.h&gt; int main() { int i, j, sum = 0; for (i = 1; i &lt;= 4; i++) { for (j = 1; j &lt;= 4; j++) { if (j == i) continue; if (i + j &gt; 5) break; sum = sum + i + j; } } printf(\"%d\", sum); return 0; }</pre></div></span>",
            "image": "",
            "options": [],
            "answer": "34",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"533890\"></a><div itemprop=\"text\"><p data-end=\"1910\" data-start=\"1864\">Initially, $\\texttt{sum = 0}$.</p><p data-end=\"2109\" data-start=\"1912\">For $\\texttt{i = 1}$,<br/>$\\texttt{j = 1}$ is skipped because $\\texttt{j == i}$.<br/>Then values added are $\\texttt{1 + 2}$, $\\texttt{1 + 3}$, and $\\texttt{1 + 4}$.<br/>So, $\\texttt{sum = 0 + 3 + 4 + 5 = 12}$.</p><p data-end=\"2364\" data-start=\"2111\">For $\\texttt{i = 2}$,<br/>$\\texttt{j = 1}$ adds $\\texttt{2 + 1 = 3}$,<br/>$\\texttt{j = 2}$ is skipped, and $\\texttt{j = 3}$ adds $\\texttt{2 + 3 = 5}$.<br/>For $\\texttt{j = 4}$, $\\texttt{i + j = 6}$, so $\\texttt{break}$ occurs.<br/>Now, $\\texttt{sum = 12 + 3 + 5 = 20}$.</p><p data-end=\"2650\" data-start=\"2366\">For $\\texttt{i = 3}$,<br/>$\\texttt{j = 1}$ adds $\\texttt{3 + 1 = 4}$, and $\\texttt{j = 2}$ adds $\\texttt{3 + 2 = 5}$.<br/>Then $\\texttt{j = 3}$ is skipped because $\\texttt{j == i}$.<br/>For $\\texttt{j = 4}$, $\\texttt{i + j = 7}$, so $\\texttt{break}$ occurs.<br/>Now, $\\texttt{sum = 20 + 4 + 5 = 29}$.</p><p data-end=\"2824\" data-start=\"2652\">For $\\texttt{i = 4}$,<br/>$\\texttt{j = 1}$ adds $\\texttt{4 + 1 = 5}$.<br/>For $\\texttt{j = 2}$, $\\texttt{i + j = 6}$, so $\\texttt{break}$ occurs.<br/>Now, $\\texttt{sum = 29 + 5 = 34}$.</p><p data-end=\"2865\" data-start=\"2826\">Therefore, the output is $\\texttt{34}$.</p></div><br><br><a href=\"https://gateoverflow.in/533889/go-classes-dpp-gate-cs-c-programming-nested-loops#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-c-programming-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/c-programming\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">C Programming - Loops & Control Statements</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"1111\" data-start=\"1054\">What is the output of the following code?</p><pre class=\"prettyprint linenums lang-c_cpp\" data-linenums=\"true\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"\" data-rawcode='#include &lt;stdio.h&gt; int main() { int i, j, count = 0; for (i = 1; i &lt;= 3; i++) { for (j = 1; j &lt;= i; j++) { count = count + j; } } printf(\"%d\", count); return 0; }'>#include &lt;stdio.h&gt; int main() { int i, j, count = 0; for (i = 1; i &lt;= 3; i++) { for (j = 1; j &lt;= i; j++) { count = count + j; } } printf(\"%d\", count); return 0; }</pre></div></span>",
            "image": "",
            "options": [],
            "answer": "10",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"533881\"></a><div itemprop=\"text\"><p data-end=\"1535\" data-start=\"1423\">For $\\texttt{i = 1}$, the inner loop runs for $\\texttt{j = 1}$, so $\\texttt{count = 0 + 1 = 1}$.</p><p data-end=\"1640\" data-start=\"1537\">For $\\texttt{i = 2}$, the inner loop runs for $\\texttt{j = 1, 2}$, so $\\texttt{count = 1 + 1 + 2 = 4}$.</p><p data-end=\"1753\" data-start=\"1642\">For $\\texttt{i = 3}$, the inner loop runs for $\\texttt{j = 1, 2, 3}$, so $\\texttt{count = 4 + 1 + 2 + 3 = 10}$.</p><p data-end=\"1794\" data-start=\"1755\">Therefore, the output is $\\texttt{10}$.</p></div><br><br><a href=\"https://gateoverflow.in/533880/go-classes-dpp-gate-cs-c-programming-nested-loops#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-c-programming-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/c-programming\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">C Programming - Loops & Control Statements</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"173\" data-start=\"116\">What is the output of the following code?</p><pre class=\"prettyprint linenums lang-c_cpp\" data-end=\"488\" data-linenums=\"true\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"\" data-rawcode='#include &lt;stdio.h&gt; int main() { int x = 2, y = 0; switch (x) { case 1: y = y + 1; case 2: y = y + 2; case 3: y = y + 3; break; default: y = y + 4; } printf(\"%d\", y); return 0; }' data-start=\"175\">#include &lt;stdio.h&gt; int main() { int x = 2, y = 0; switch (x) { case 1: y = y + 1; case 2: y = y + 2; case 3: y = y + 3; break; default: y = y + 4; } printf(\"%d\", y); return 0; }</pre></div></span>",
            "image": "",
            "options": [],
            "answer": "5",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"533879\"></a><div itemprop=\"text\"><p data-end=\"644\" data-start=\"561\">Here, $\\texttt{x = 2}$, so execution starts from $\\texttt{case 2}$.</p><p data-end=\"710\" data-start=\"646\">In $\\texttt{case 2}$, $\\texttt{y = y + 2}$, so $\\texttt{y = 2}$.</p><p data-end=\"814\" data-start=\"712\">There is no $\\texttt{break}$ after $\\texttt{case 2}$, so execution falls through to $\\texttt{case 3}$.</p><p data-end=\"880\" data-start=\"816\">In $\\texttt{case 3}$, $\\texttt{y = y + 3}$, so $\\texttt{y = 5}$.</p><p data-end=\"938\" data-start=\"882\">Now $\\texttt{break}$ is encountered, so the switch ends.</p><p data-end=\"978\" data-start=\"940\">Therefore, the output is $\\texttt{5}$.</p></div><br><br><a href=\"https://gateoverflow.in/533878/go-classes-dpp-gate-cs-c-programming-switch-fallthrough#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-c-programming-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/c-programming\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">C Programming - Loops & Control Statements</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"2180\" data-start=\"2123\">What is the output of the following code?</p><pre class=\"prettyprint linenums lang-c_cpp\" data-linenums=\"true\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"\" data-rawcode='#include &lt;stdio.h&gt; int main() { int i, sum = 0; for (i = 1; i &lt;= 6; i++) { if (i % 2 == 0) continue; sum = sum + i; if (sum &gt; 6) break; } printf(\"%d %d\", i, sum); return 0; }'>#include &lt;stdio.h&gt; int main() { int i, sum = 0; for (i = 1; i &lt;= 6; i++) { if (i % 2 == 0) continue; sum = sum + i; if (sum &gt; 6) break; } printf(\"%d %d\", i, sum); return 0; }</pre></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\texttt{5\\ 9}$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{6\\ 9}$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{7\\ 9}$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{5\\ 4}$</span>"
            ],
            "answer": "A",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"533723\"></a><div itemprop=\"text\"><p data-end=\"2569\" data-start=\"2523\">Initially, $\\texttt{sum = 0}$.</p><p data-end=\"2644\" data-start=\"2571\">For $\\texttt{i = 1}$, $\\texttt{i}$ is odd, so $\\texttt{sum = 0 + 1 = 1}$.</p><p data-end=\"2766\" data-start=\"2646\">For $\\texttt{i = 2}$, $\\texttt{i}$ is even, so $\\texttt{continue}$ is executed and the rest of the loop body is skipped.</p><p data-end=\"2841\" data-start=\"2768\">For $\\texttt{i = 3}$, $\\texttt{i}$ is odd, so $\\texttt{sum = 1 + 3 = 4}$.</p><p data-end=\"2922\" data-start=\"2843\">For $\\texttt{i = 4}$, $\\texttt{i}$ is even, so $\\texttt{continue}$ is executed.</p><p data-end=\"2997\" data-start=\"2924\">For $\\texttt{i = 5}$, $\\texttt{i}$ is odd, so $\\texttt{sum = 4 + 5 = 9}$.</p><p data-end=\"3063\" data-start=\"2999\">Now $\\texttt{sum &gt; 6}$ is true, so $\\texttt{break}$ is executed.</p><p data-end=\"3125\" data-start=\"3065\">The loop stops when $\\texttt{i = 5}$ and $\\texttt{sum = 9}$.</p><p data-end=\"3168\" data-start=\"3127\">Therefore, the output is $\\texttt{5\\ 9}$.</p><p data-end=\"3200\" data-is-last-node=\"\" data-is-only-node=\"\" data-start=\"3170\"><strong data-end=\"3181\" data-start=\"3170\">Answer:</strong><strong> A</strong></p></div><br><br><a href=\"https://gateoverflow.in/533722/go-classes-dpp-gate-cs-c-programming-loop-control#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-c-programming-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/c-programming\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">C Programming - Loops & Control Statements</a></b></div></div>"
        }
    ]
});

registerTest({
    "name": "DPP 12 - C Programming (Loops & Control Statements - Part 2)",
    "testLabel": "DPP 12",
    "testType": "DPP",
    "bracket": "Loops & Control Statements - Part 2",
    "subject": "c_prog",
    "series": "cse-dpp-2027",
    "date": "Nov 03, 2026",
    "duration": "15 Min",
    "totalMarks": 3,
    "topicsCovered": "Loops & Control Statements (Practice Set 2)",
    "questions": [
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"822\" data-section-id=\"1vwmnko\" data-start=\"770\">Which of the following is <strong>not</strong> a keyword in C?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\texttt{int}$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{return}$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{main}$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{while}$</span>"
            ],
            "answer": "A",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"533673\"></a><div itemprop=\"text\"><p data-end=\"114\" data-start=\"23\">In C, $\\texttt{int}$, $\\texttt{return}$, and $\\texttt{while}$ are keywords.</p><p data-end=\"276\" data-start=\"116\">$\\texttt{int}$ is used to declare integer variables.<br data-end=\"171\" data-start=\"168\"/>$\\texttt{return}$ is used to return a value from a function.<br data-end=\"234\" data-start=\"231\"/>$\\texttt{while}$ is used to create a loop.</p><p data-end=\"401\" data-start=\"278\">However, $\\texttt{main}$ is not a keyword in C. It is the name of the function from where program execution usually begins.</p><p data-end=\"472\" data-start=\"403\">Therefore, the option which is not a keyword in C is $\\texttt{main}$.</p></div><br><br><a href=\"https://gateoverflow.in/533672/go-classes-dpp-gate-cs-c-programming-c-keywords#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-c-programming-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/c-programming\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">C Programming - Loops & Control Statements</a></b></div></div>"
        },
        {
            "marks": 2,
            "neg": 0,
            "type": "MSQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider the following psuedocode fragment, where $y$ is an integer that has been initialized.</p><pre class=\"prettyprint linenums lang-c_cpp\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"4\"> int i=1 int j=1 while (i&lt;10): j=j*i i=i+1 if (i==y): break end if end while</pre><p>Consider the following statements:<br/>i. $(i==10)$ or $(i==y)$<br/>ii. If $y&gt;10$, then $i==10$<br/>iii. If $j=6$, then $y==4$</p><p>Which of the above statements is/are TRUE at the end of the while loop? Choose from the following options.</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">i only<br/></span>",
                "<span style=\"display: inline;\">iii only<br/></span>",
                "<span style=\"display: inline;\">ii and iii only<br/></span>",
                "<span style=\"display: inline;\">i, ii, and iii</span>"
            ],
            "answer": "D",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"478642\"></a><div itemprop=\"text\">option D<br/> <br/> </div><br><br><a href=\"https://gateoverflow.in/478599/go-classes-dpp-c-programming-loop-invariants-tifr#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-c-programming-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/c-programming\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">C Programming - Loops & Control Statements</a></b></div></div>"
        }
    ]
});

registerTest({
    "name": "DPP 13 - C Programming (Data Types, Operators & Expressions - Part 1)",
    "testLabel": "DPP 13",
    "testType": "DPP",
    "bracket": "Data Types, Operators & Expressions - Part 1",
    "subject": "c_prog",
    "series": "cse-dpp-2027",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 10,
    "topicsCovered": "Data Types, Operators & Expressions (Practice Set 1)",
    "questions": [
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>What is the output of the following code?</p><pre class=\"prettyprint linenums lang-c_cpp\" data-linenums=\"true\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"\" data-rawcode='#include &lt;stdio.h&gt; int x; int x; int main() { printf(\"%d\", x); return 0; }' dir=\"ltr\">#include &lt;stdio.h&gt; int x; int x; int main() { printf(\"%d\", x); return 0; }</pre></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\texttt{0}$<br/></span>",
                "<span style=\"display: inline;\">Garbage value<br/></span>",
                "<span style=\"display: inline;\">Compilation error<br/></span>",
                "<span style=\"display: inline;\">Linker error</span>"
            ],
            "answer": "A",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"534936\"></a><div itemprop=\"text\"><p>Here, $\\texttt{int x;}$ is written at file scope (global).</p><p>At file scope, $\\texttt{int x;}$ without initialization is called a tentative definition.</p><p>Writing $\\texttt{int x;}$ more than once in the same file is allowed in C, as long as the declarations are compatible.</p><p>So, these two lines do not create two separate variables:</p><p>$\\texttt{int x;}$<br/>$\\texttt{int x;}$</p><p>They refer to the same global variable $\\texttt{x}$.</p><p>Since no value is assigned to $\\texttt{x}$, it is initialized to $\\texttt{0}$ by default.</p><p>Therefore, the output is $\\texttt{0}$.</p><p><strong>Answer: A</strong></p></div><br><br><a href=\"https://gateoverflow.in/534935/go-classes-dpp-gate-cs-c-programming-multiple-global-declarations#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-c-programming-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/c-programming\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">C Programming - Data Types, Operators & Expressions</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"177\" data-start=\"120\">What is the output of the following code?</p><pre class=\"prettyprint linenums lang-c_cpp\" data-linenums=\"true\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"\" data-rawcode='#include &lt;stdio.h&gt; int main() { int a = 1, b = 2, c = 3; if (a++ &gt; 1 &amp;&amp; ++b &gt; 2 || c++ == 3) printf(\"%d %d %d\", a, b, c); else printf(\"%d %d %d\", c, b, a); return 0; }'>#include &lt;stdio.h&gt; int main() { int a = 1, b = 2, c = 3; if (a++ &gt; 1 &amp;&amp; ++b &gt; 2 || c++ == 3) printf(\"%d %d %d\", a, b, c); else printf(\"%d %d %d\", c, b, a); return 0; }</pre></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\texttt{2\\ 3\\ 4}$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{2\\ 2\\ 4}$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{4\\ 2\\ 2}$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{1\\ 2\\ 3}$</span>"
            ],
            "answer": "B",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"533885\"></a><div itemprop=\"text\"><p data-end=\"563\" data-start=\"487\">The expression is $\\texttt{a++ &gt; 1 \\&amp;\\&amp; ++b &gt; 2 || c++ == 3}$.</p><p data-end=\"633\" data-start=\"565\">The operator $\\texttt{\\&amp;\\&amp;}$ has higher precedence than $\\texttt{||}$.</p><p data-end=\"714\" data-start=\"635\">So, the expression is evaluated as $\\texttt{(a++ &gt; 1 \\&amp;\\&amp; ++b &gt; 2) || c++ == 3}$.</p><p data-end=\"784\" data-start=\"716\">Initially, $\\texttt{a = 1}$, $\\texttt{b = 2}$, and $\\texttt{c = 3}$.</p><p data-end=\"855\" data-start=\"786\">Now, $\\texttt{a++ &gt; 1}$ uses the current value of $\\texttt{a}$ first.</p><p data-end=\"922\" data-start=\"857\">So, $\\texttt{1 &gt; 1}$ is false, and then $\\texttt{a}$ becomes $2$.</p><p data-end=\"1013\" data-start=\"924\">Since the first condition of $\\texttt{\\&amp;\\&amp;}$ is false, $\\texttt{++b &gt; 2}$ is not evaluated.</p><p data-end=\"1044\" data-start=\"1015\">So, $\\texttt{b}$ remains $2$.</p><p data-end=\"1098\" data-start=\"1046\">Now the expression becomes $\\texttt{0 || c++ == 3}$.</p><p data-end=\"1171\" data-start=\"1100\">Here, $\\texttt{c++ == 3}$ uses the current value of $\\texttt{c}$ first.</p><p data-end=\"1238\" data-start=\"1173\">So, $\\texttt{3 == 3}$ is true, and then $\\texttt{c}$ becomes $4$.</p><p data-end=\"1287\" data-start=\"1240\">Therefore, the $\\texttt{if}$ condition is true.</p><p data-end=\"1326\" data-start=\"1289\">So, the output is $\\texttt{2\\ 2\\ 4}$.</p><p data-end=\"1361\" data-start=\"1328\"><strong data-end=\"1339\" data-start=\"1328\">Answer:</strong> <strong>B.</strong></p></div><br><br><a href=\"https://gateoverflow.in/533884/go-classes-dpp-gate-cs-c-programming-short-circuit-evaluation#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-c-programming-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/c-programming\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">C Programming - Data Types, Operators & Expressions</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"1935\" data-start=\"1878\">What is the output of the following code?</p><pre class=\"prettyprint linenums lang-c_cpp\" data-linenums=\"true\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"\" data-rawcode='#include &lt;stdio.h&gt; int main() { int x = 3, y = 4, z; z = x++ + ++y; printf(\"%d %d %d\", x, y, z); return 0; }'>#include &lt;stdio.h&gt; int main() { int x = 3, y = 4, z; z = x++ + ++y; printf(\"%d %d %d\", x, y, z); return 0; }</pre></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\texttt{4\\ 5\\ 8}$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{3\\ 5\\ 8}$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{4\\ 4\\ 7}$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{4\\ 5\\ 9}$</span>"
            ],
            "answer": "A",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"533883\"></a><div itemprop=\"text\"><section data-scroll-anchor=\"false\" data-testid=\"conversation-turn-26\" data-turn=\"assistant\" data-turn-id=\"request-WEB:68871a44-2bcd-4107-b023-aa5ce5221a54-14\" data-turn-id-container=\"request-WEB:68871a44-2bcd-4107-b023-aa5ce5221a54-14\" dir=\"auto\"><p data-end=\"2247\" data-start=\"2182\">Initially, $\\texttt{x = 3}$ and $\\texttt{y = 4}$.</p><p data-end=\"2288\" data-start=\"2249\">The expression is $\\texttt{x++ + ++y}$.</p><p data-end=\"2398\" data-start=\"2290\">In $\\texttt{x++}$, the current value $\\texttt{3}$ is used first, and then $\\texttt{x}$ becomes $\\texttt{4}$.</p><p data-end=\"2520\" data-start=\"2400\">In $\\texttt{++y}$, $\\texttt{y}$ is increased first, so $\\texttt{y}$ becomes $\\texttt{5}$, and then $\\texttt{5}$ is used.</p><p data-end=\"2551\" data-start=\"2522\">So, $\\texttt{z = 3 + 5 = 8}$.</p><p data-end=\"2627\" data-start=\"2553\">Final values are $\\texttt{x = 4}$, $\\texttt{y = 5}$, and $\\texttt{z = 8}$.</p><p data-end=\"2673\" data-start=\"2629\">Therefore, the output is $\\texttt{4\\ 5\\ 8}$.</p><p data-end=\"2708\" data-is-last-node=\"\" data-is-only-node=\"\" data-start=\"2675\"><strong data-end=\"2686\" data-start=\"2675\">Answer:</strong> <strong>A</strong></p></section></div><br><br><a href=\"https://gateoverflow.in/533882/go-classes-dpp-gate-cs-c-programming-increment-operators#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-c-programming-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/c-programming\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">C Programming - Data Types, Operators & Expressions</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>What is the output of the following code?</p><pre class=\"prettyprint linenums lang-c_cpp\" data-linenums=\"true\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"4\" data-rawcode='#include &lt;stdio.h&gt; int main() { int a = 0, b = 5, c = 10; int ans = a++ &amp;&amp; ++b || c--; printf(\"%d %d %d %d\", ans, a, b, c); return 0; }'>#include &lt;stdio.h&gt; int main() { int a = 0, b = 5, c = 10; int ans = a++ &amp;&amp; ++b || c--; printf(\"%d %d %d %d\", ans, a, b, c); return 0; }</pre></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\texttt{1\\ 1\\ 6\\ 9}$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{1\\ 1\\ 5\\ 9}$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{0\\ 1\\ 5\\ 10}$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{1\\ 0\\ 5\\ 9}$</span>"
            ],
            "answer": "B",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"533721\"></a><div itemprop=\"text\"><p data-end=\"1255\" data-start=\"1192\">The expression is $\\texttt{a++ \\&amp;\\&amp; ++b || c--}$.</p><p data-end=\"1325\" data-start=\"1257\">The operator $\\texttt{\\&amp;\\&amp;}$ has higher precedence than $\\texttt{||}$.</p><p data-end=\"1392\" data-start=\"1327\">So the expression is evaluated as $\\texttt{(a++ \\&amp;\\&amp; ++b) || c--}$.</p><p data-end=\"1463\" data-start=\"1394\">Initially, $\\texttt{a = 0}$, $\\texttt{b = 5}$, and $\\texttt{c = 10}$.</p><p data-end=\"1555\" data-start=\"1465\">In $\\texttt{a++}$, the current value $0$ is used first, and then $\\texttt{a}$ becomes $1$.</p><p data-end=\"1689\" data-start=\"1557\">Since the first operand of $\\texttt{\\&amp;\\&amp;}$ is $0$, the second operand $\\texttt{++b}$ is not evaluated due to short-circuit evaluation.</p><p data-end=\"1720\" data-start=\"1691\">So, $\\texttt{b}$ remains $5$.</p><p data-end=\"1769\" data-start=\"1722\">Now the expression becomes $\\texttt{0 || c--}$.</p><p data-end=\"1862\" data-start=\"1771\">In $\\texttt{c--}$, the current value $10$ is used first, and then $\\texttt{c}$ becomes $9$.</p><p data-end=\"1910\" data-start=\"1864\">Since $10$ is non-zero, it is treated as true.</p><p data-end=\"1942\" data-start=\"1912\">Therefore, $\\texttt{ans = 1}$.</p><p data-end=\"2038\" data-start=\"1944\">Final values are $\\texttt{ans = 1}$, $\\texttt{a = 1}$, $\\texttt{b = 5}$, and $\\texttt{c = 9}$.</p><p data-end=\"2076\" data-start=\"2040\"><strong data-end=\"2051\" data-start=\"2040\">Answer:</strong> <strong>B.</strong> $\\texttt{1\\ 1\\ 5\\ 9}$</p></div><br><br><a href=\"https://gateoverflow.in/533720/go-classes-dpp-gate-cs-c-programming-short-circuit-evaluation#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-c-programming-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/c-programming\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">C Programming - Data Types, Operators & Expressions</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"4460\" data-section-id=\"1xf6jw0\" data-start=\"4433\">What is the output of the following code?</p><pre class=\"prettyprint linenums lang-c_cpp\" data-linenums=\"true\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"\" data-rawcode='#include &lt;stdio.h&gt; int main() { int a = 5, b = 2; float x = a / b + 0.5; printf(\"%.1f\", x); return 0; }'>#include &lt;stdio.h&gt; int main() { int a = 5, b = 2; float x = a / b + 0.5; printf(\"%.1f\", x); return 0; } </pre></div></span>",
            "image": "",
            "options": [],
            "answer": "2.5",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"534741\"></a><div itemprop=\"text\"><p><img alt=\"\" height=\"377\" src=\"https://gateoverflow.in/?qa=blob&amp;qa_blobid=6818201904005257703\" width=\"521\"/></p><p><strong>2.5</strong> is the answer</p></div><br><br><a href=\"https://gateoverflow.in/533718/go-classes-dpp-gate-cs-c-programming-type-conversion#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-c-programming-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/c-programming\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">C Programming - Data Types, Operators & Expressions</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"4460\" data-section-id=\"1xf6jw0\" data-start=\"4433\">What is the output of the following code?</p><pre class=\"prettyprint linenums lang-c_cpp\" data-linenums=\"true\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"\" data-rawcode='#include &lt;stdio.h&gt; int main() { float x = 5 / 2; printf(\"%.1f\", x); printf(\"\\n\"); float y = 5.0 / 2; printf(\"%.1f\", y); return 0; }'>#include &lt;stdio.h&gt; int main() { float x = 5 / 2; printf(\"%.1f\", x); printf(\" \"); float y = 5.0 / 2; printf(\"%.1f\", y); return 0; }</pre></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\verb|2.5 2.0|$<br/></span>",
                "<span style=\"display: inline;\">$\\verb|2.0 2.5|$ <br/></span>",
                "<span style=\"display: inline;\">$\\verb|3.0 3.0|$ <br/></span>",
                "<span style=\"display: inline;\">Compilation error</span>"
            ],
            "answer": "B",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"533717\"></a><div itemprop=\"text\"><p data-end=\"138\" data-start=\"28\">In the statement $\\texttt{float x = 5 / 2;}$, both $\\texttt{5}$ and $\\texttt{2}$ are integers.</p><p data-end=\"180\" data-start=\"140\">So, integer division is performed first.</p><p data-end=\"209\" data-start=\"182\">Thus, $\\texttt{5 / 2 = 2}$.</p><p data-end=\"316\" data-start=\"211\">Then this integer value $\\texttt{2}$ is stored in the float variable $\\texttt{x}$, so $\\texttt{x = 2.0}$.</p><p data-end=\"412\" data-start=\"318\">Now, in the statement $\\texttt{float y = 5.0 / 2;}$, $\\texttt{5.0}$ is a floating-point value.</p><p data-end=\"455\" data-start=\"414\">So, floating-point division is performed.</p><p data-end=\"488\" data-start=\"457\">Thus, $\\texttt{5.0 / 2 = 2.5}$.</p><p data-end=\"535\" data-start=\"490\">Therefore, the output is $\\texttt{2.0\\ 2.5}$.</p><p data-end=\"571\" data-is-last-node=\"\" data-is-only-node=\"\" data-start=\"537\"><strong data-end=\"548\" data-start=\"537\">Answer:</strong> <strong>B.</strong> $\\texttt{2.0\\ 2.5}$</p></div><br><br><a href=\"https://gateoverflow.in/533716/go-classes-dpp-gate-cs-c-programming-type-conversion#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-c-programming-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/c-programming\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">C Programming - Data Types, Operators & Expressions</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"4460\" data-section-id=\"1xf6jw0\" data-start=\"4433\">What is the output of the following code?</p><pre class=\"prettyprint linenums lang-c_cpp\" data-linenums=\"true\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"\" data-rawcode='#include &lt;stdio.h&gt; int main() { int x = 5; printf(\"%d\", x++); printf(\"%d\", ++x); return 0; }'>#include &lt;stdio.h&gt; int main() { int x = 5; printf(\"%d\", x++); printf(\"%d\", ++x); return 0; }</pre></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$57$<br/></span>",
                "<span style=\"display: inline;\">$67$<br/></span>",
                "<span style=\"display: inline;\">Compilation error<br/></span>",
                "<span style=\"display: inline;\">Undefined behavior</span>"
            ],
            "answer": "A",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"533714\"></a><div itemprop=\"text\"><p data-end=\"76\" data-start=\"32\">Initially, $\\texttt{x = 5}$.</p><p data-end=\"131\" data-start=\"78\">The first statement is $\\texttt{printf(\"\\%d\", x++)}$.</p><p data-end=\"269\" data-start=\"133\">Here, $\\texttt{x++}$ is post-increment. So, the current value $\\texttt{5}$ is printed first, and then $\\texttt{x}$ becomes $\\texttt{6}$.</p><p data-end=\"330\" data-start=\"271\">Now, the second statement is $\\texttt{printf(\"\\%d\", ++x)}$.</p><p data-end=\"449\" data-start=\"332\">Here, $\\texttt{++x}$ is pre-increment. So, $\\texttt{x}$ first becomes $\\texttt{7}$, and then $\\texttt{7}$ is printed.</p><p data-end=\"551\" data-start=\"451\">Since there is no space between the two $\\texttt{printf()}$ statements, the output is $\\texttt{57}$.</p></div><br><br><a href=\"https://gateoverflow.in/533713/go-classes-dpp-gate-cs-c-programming-increment-operators#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-c-programming-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/c-programming\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">C Programming - Data Types, Operators & Expressions</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"2888\" data-section-id=\"1u8p3py\" data-start=\"2861\">What is the output of the following code?</p><pre class=\"prettyprint linenums lang-c_cpp\" data-linenums=\"true\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"\" data-rawcode='#include &lt;stdio.h&gt; int main() { int a = 5, b = 10; printf(\"%d\", a &lt; b &amp;&amp; b &gt; 0); return 0; }'>#include &lt;stdio.h&gt; int main() { int a = 5, b = 10; printf(\"%d\", a &lt; b &amp;&amp; b &gt; 0); return 0; }</pre></div></span>",
            "image": "",
            "options": [],
            "answer": "1",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"533678\"></a><div itemprop=\"text\"><p data-end=\"91\" data-start=\"30\">Here, $\\texttt{a = 5}$ and $\\texttt{b = 10}$.</p><p data-end=\"137\" data-start=\"93\">The expression is $\\texttt{a &lt; b \\&amp;\\&amp; b &gt; 0}$.</p><p data-end=\"221\" data-start=\"139\">Now, $\\texttt{a &lt; b}$ means $\\texttt{5 &lt; 10}$, which is true, so its value is $1$.</p><p data-end=\"306\" data-start=\"223\">Also, $\\texttt{b &gt; 0}$ means $\\texttt{10 &gt; 0}$, which is true, so its value is $1$.</p><p data-end=\"355\" data-start=\"308\">Therefore, the expression becomes $1 \\ \\&amp;\\&amp; \\ 1$.</p><p data-end=\"434\" data-start=\"357\">In C, logical AND $\\texttt{\\&amp;\\&amp;}$ gives $1$ only when both conditions are true.</p><p data-end=\"457\" data-start=\"436\">So, $1 \\ \\&amp;\\&amp; \\ 1 = 1$.</p><p data-end=\"497\" data-start=\"459\">Therefore, the output is $\\texttt{1}$.</p></div><br><br><a href=\"https://gateoverflow.in/533677/go-classes-dpp-gate-cs-c-programming-logical-operators#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-c-programming-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/c-programming\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">C Programming - Data Types, Operators & Expressions</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"3074\" data-section-id=\"x935rr\" data-start=\"3047\">What is the output of the following code?</p><pre class=\"prettyprint linenums lang-c_cpp\" data-linenums=\"true\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"\" data-rawcode='&lt;code&gt;#include &lt;stdio.h&gt; int main() { int a = 5, b = 10; printf(\"%d\", a &gt; b || b &gt; 0); return 0; }&lt;/code&gt;'>#include &lt;stdio.h&gt; int main() { int a = 5, b = 10; printf(\"%d\", a &gt; b || b &gt; 0); return 0; } </pre></div></span>",
            "image": "",
            "options": [],
            "answer": "1",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"533675\"></a><div itemprop=\"text\"><p data-end=\"91\" data-start=\"30\">Here, $\\texttt{a = 5}$ and $\\texttt{b = 10}$.</p><p data-end=\"164\" data-start=\"93\">The expression inside $\\texttt{printf()}$ is $\\texttt{a &gt; b || b &gt; 0}$.</p><p data-end=\"249\" data-start=\"166\">Now, $\\texttt{a &gt; b}$ means $\\texttt{5 &gt; 10}$, which is false, so its value is $0$.</p><p data-end=\"334\" data-start=\"251\">Also, $\\texttt{b &gt; 0}$ means $\\texttt{10 &gt; 0}$, which is true, so its value is $1$.</p><p data-end=\"383\" data-start=\"336\">Therefore, the expression becomes $0 \\ || \\ 1$.</p><p data-end=\"460\" data-start=\"385\">In C, logical OR $\\texttt{||}$ gives $1$ if at least one condition is true.</p><p data-end=\"483\" data-start=\"462\">So, $0 \\ || \\ 1 = 1$.</p><p data-end=\"523\" data-start=\"485\">Therefore, the output is $\\texttt{1}$.</p></div><br><br><a href=\"https://gateoverflow.in/533674/go-classes-dpp-gate-cs-c-programming-logical-operators#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-c-programming-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/c-programming\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">C Programming - Data Types, Operators & Expressions</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Assume that $\\texttt{char}$ is $8$ bits and signed integers are represented using $2$'s complement. Consider the following C code:</p><pre class=\"prettyprint linenums lang-c_cpp\" data-linenums=\"true\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"4\" data-rawcode='#include &lt;stdio.h&gt; int main() { signed char x = 0xF9; unsigned char y = x; printf(\"%d %u\", x, (unsigned int)y); return 0; }'>#include &lt;stdio.h&gt; int main() { signed char x = 0xF9; unsigned char y = x; printf(\"%d %u\", x, (unsigned int)y); return 0; }</pre><p data-end=\"393\" data-start=\"369\">What will be the output?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\texttt{-7\\ 249}$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{249\\ 249}$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{-7\\ -7}$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{7\\ 249}$</span>"
            ],
            "answer": "A",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"533671\"></a><div itemprop=\"text\"><p data-end=\"589\" data-start=\"489\">The hexadecimal value $\\texttt{0xF9}$ has binary representation $\\texttt{11111001}$.</p><p data-end=\"719\" data-start=\"591\">Since $\\texttt{x}$ is a signed $8$-bit value using $2$'s complement, the most significant bit is $1$, so the number is negative.</p><p data-end=\"789\" data-start=\"721\">To find its value, take the $2$'s complement of $\\texttt{11111001}$.</p><p data-end=\"834\" data-start=\"791\">First invert the bits $:\\texttt{00000110}$.</p><p data-end=\"870\" data-start=\"836\">Then add $1: \\texttt{00000111}$.</p><p data-end=\"929\" data-start=\"872\">So the magnitude is $7$, and therefore $\\texttt{x = -7}$.</p><p data-end=\"1058\" data-start=\"931\">Now $\\texttt{y}$ is an $\\texttt{unsigned char}$. The same bit pattern $\\texttt{11111001}$ is interpreted as an unsigned number.</p><p data-end=\"1119\" data-start=\"1060\">So $\\texttt{y = 249}$, because $\\texttt{11111001}_2 = 249$.</p><p data-end=\"1165\" data-start=\"1121\">Therefore, the output is $\\texttt{-7\\ 249}$.</p><p data-end=\"1200\" data-is-last-node=\"\" data-is-only-node=\"\" data-start=\"1167\"><strong data-end=\"1178\" data-start=\"1167\">Answer:</strong> <strong>A.</strong></p></div><br><br><a href=\"https://gateoverflow.in/533670/go-classes-dpp-gate-cs-c-programming-integer-representation#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-c-programming-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/c-programming\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">C Programming - Data Types, Operators & Expressions</a></b></div></div>"
        }
    ]
});

registerTest({
    "name": "DPP 14 - C Programming (Data Types, Operators & Expressions - Part 2)",
    "testLabel": "DPP 14",
    "testType": "DPP",
    "bracket": "Data Types, Operators & Expressions - Part 2",
    "subject": "c_prog",
    "series": "cse-dpp-2027",
    "date": "Nov 03, 2026",
    "duration": "21 Min",
    "totalMarks": 7,
    "topicsCovered": "Data Types, Operators & Expressions (Practice Set 2)",
    "questions": [
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"152\" data-start=\"86\">Which of the following is a valid identifier in C?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\texttt{2sum}$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{total-marks}$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{_value}$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{float}$</span>"
            ],
            "answer": "C",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"533669\"></a><div itemprop=\"text\"><p data-end=\"441\" data-start=\"276\">In C, an identifier can contain letters, digits, and underscore. However, it cannot start with a digit. Also, keywords cannot be used as identifiers.</p><p data-end=\"501\" data-start=\"443\">$\\texttt{2sum}$ is invalid because it starts with a digit.</p><p data-end=\"599\" data-start=\"503\">$\\texttt{total-marks}$ is invalid because the symbol $\\texttt{-}$ is not allowed in identifiers.</p><p data-end=\"658\" data-start=\"601\">$\\texttt{float}$ is invalid because it is a keyword in C.</p><p data-end=\"714\" data-start=\"660\">Therefore, the valid identifier is $\\texttt{_value}$.</p><p data-end=\"749\" data-is-last-node=\"\" data-is-only-node=\"\" data-start=\"716\"><strong data-end=\"727\" data-start=\"716\">Answer:</strong> <strong>C.</strong></p></div><br><br><a href=\"https://gateoverflow.in/533668/go-classes-dpp-gate-cs-c-programming-identifiers-and-keywords#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-c-programming-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/c-programming\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">C Programming - Data Types, Operators & Expressions</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><pre class=\"prettyprint linenums lang-c_cpp\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"4\">int arr[ ]={1, 2, 3, 4} int count; incr( ) {return ++count;} main( ) { arr[count++]=incr( ); printf(\"arr[count]=%d\\n\", arr[count]); } </pre><p>The value printed by the above program is :</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$1$<br/></span>",
                "<span style=\"display: inline;\">$2$<br/></span>",
                "<span style=\"display: inline;\">$3$<br/></span>",
                "<span style=\"display: inline;\">$4$</span>"
            ],
            "answer": "A",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"477409\"></a><div itemprop=\"text\">First count is initialized to $0$ , then in the main function count will be incremented two times, hence count $=2$. After that it prints the third value in the array i.e., $3$.</div><br><br><a href=\"https://gateoverflow.in/477408/go-classes-dpp-c-programming-program-output-ugc-net#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-c-programming-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/c-programming\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">C Programming - Data Types, Operators & Expressions</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>What will be the output the following:</p><pre class=\"prettyprint linenums lang-c_cpp\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"4\">#include&lt;stdio.h&gt; #include&lt;conio.h&gt; void main() { int *i, *j, a=12, b=2, c ; c= (a=a+b, b=a/b, a=a*b, b=a-b); i= &amp;c; printf (\"%d\",--(*i)); } </pre><p> </p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">93</span>",
                "<span style=\"display: inline;\">91</span>",
                "<span style=\"display: inline;\">92</span>",
                "<span style=\"display: inline;\">90</span>"
            ],
            "answer": "D",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"473115\"></a><div itemprop=\"text\">Answer D<br/> <br/> Comma is evaluated from left to right and value to variable c is the value present in variable b (right most evaluation result)<br/> <br/> Value is updated as<br/> <br/> Initially a=12, b=2<br/> <br/> a=a+b → a=14<br/> <br/> b =a/b → b=7<br/> <br/> a=a*b → a=14*7 → a=98<br/> <br/> b =a-b→ b=91<br/> <br/> Now c takes value returned by last evaluation i.e 91<br/> <br/> And prints --(c) i.e 90</div><br><br><a href=\"https://gateoverflow.in/473036/go-classes-dpp-c-programming-program-output#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-c-programming-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/c-programming\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">C Programming - Data Types, Operators & Expressions</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider the following C code:</p><p>What will be the final values of $x$ and $y$ after the if statement is executed?</p><pre class=\"prettyprint linenums lang-c_cpp\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"4\">int x = 4, y = 0; if ((x = 0) &amp;&amp; (y = 10)) { // some code } </pre></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$x$ is 4 and $y$ is 0</span>",
                "<span style=\"display: inline;\">x is 0 and y is 10</span>",
                "<span style=\"display: inline;\">x is 0 and y is 0</span>",
                "<span style=\"display: inline;\">Syntax Error</span>"
            ],
            "answer": "A",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"473035\"></a><div itemprop=\"text\">$(\\mathrm{x}=0) \\rightarrow$ This is an assignment, not a comparison. So x becomes 0 , and the whole expression evaluates to false (i.e., 0 ).<br/> <br/> Since the left side of the $\\&amp; \\&amp;$ is false, short-circuiting happens:<br/> $\\rightarrow$ The right side $(y=10)$ is not evaluated.<br/> So, y remains unchanged i.e., still 0 .</div><br><br><a href=\"https://gateoverflow.in/473034/go-classes-dpp-c-programming-program-output#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-c-programming-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/c-programming\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">C Programming - Data Types, Operators & Expressions</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider the following C program:</p><pre class=\"prettyprint linenums lang-c_cpp\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"4\">#include &lt;stdio.h&gt; void main() { int a, b, c; a = 2; b = 2 * (a++); c = 2 * (++a); printf(\"b = %d \\n c = %d\", b, c); } </pre><p> </p><p> </p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$b=4, c=6$</span>",
                "<span style=\"display: inline;\">b $=3, c=8$</span>",
                "<span style=\"display: inline;\">$b=3, c=6$</span>",
                "<span style=\"display: inline;\">$b=4, c=8$</span>"
            ],
            "answer": "D",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"473033\"></a><div itemprop=\"text\">Initially, $a=2$.<br/> <br/> $b=2 *(a++)$ : Post-increment - first use $a$ (which is 2 ), then increment. So, $b=2 * 2=4$, now $a$ $=3$.<br/> <br/> $c=2 *(++a)$ : Pre-increment - first increment a to 4, then use it. So, $c=2 * 4=8$.<br/> <br/> Output: $b=4, c=8$.</div><br><br><a href=\"https://gateoverflow.in/473032/go-classes-dpp-c-programming-program-output#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-c-programming-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/c-programming\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">C Programming - Data Types, Operators & Expressions</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>What will be the output of following program?</p><pre class=\"prettyprint linenums lang-c_cpp\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"4\">#include&lt;stdio.h&gt; #include&lt;conio.h&gt; void main() { int i, j, k; j = 5; i = 2*j/2; k = 2*(j/2); printf(\"i=%d \\n k=%d\", i, k); }</pre></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$i=5, k=5$<br/></span>",
                "<span style=\"display: inline;\">$i=5, k=4$<br/></span>",
                "<span style=\"display: inline;\">$i=4, k=4$<br/></span>",
                "<span style=\"display: inline;\">$i=4, k=5$</span>"
            ],
            "answer": "B",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"473031\"></a><div itemprop=\"text\"><p>In C, the multiplication ($*$) and division ($/$) operators have equal precedence and left-to-right associativity. </p><p>The variable $j$ is initialized as, $ j=5$</p><p>Consider the expression: \\[ i=2*j/2 \\] Since multiplication and division have equal precedence, the expression is grouped from left to right. \\[ \\begin{aligned} i&amp;=(2*5)/2\\\\ &amp;=10/2\\\\ &amp;=5 \\end{aligned} \\] Now consider: \\[ k=2*(j/2) \\] The expression inside the parentheses is evaluated first. Since both operands are integers, integer division is performed. \\[ 5/2=2 \\] Therefore, \\[ \\begin{aligned} k&amp;=2*(5/2)=2*2=4 \\end{aligned} \\] Thus, the values printed are: \\[ \\boxed{i=5,\\quad k=4} \\] <strong>Answer : B</strong></p></div><br><br><a href=\"https://gateoverflow.in/473030/go-classes-dpp-c-programming-program-output#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-c-programming-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/c-programming\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">C Programming - Data Types, Operators & Expressions</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Which of the following operators has the lowest precedence in C?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">++ (post-increment)</span>",
                "<span style=\"display: inline;\">% (modulus)</span>",
                "<span style=\"display: inline;\">II (logical OR)</span>",
                "<span style=\"display: inline;\">() (parentheses)</span>"
            ],
            "answer": "A",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"473029\"></a><div itemprop=\"text\">Logical OR has lowest precedence among given operators, check the precedence table in below link:<br/> <br/> Shortcut to remember: PUMA'S REBL TAC ( spell \"REBL\" as if \"REBEL\", TAC is reverse of CAT)<br/> <br/> P - Primary<br/> U - Unary<br/> M - Multiplicative<br/> A - Additive<br/> S- Shift<br/> R- Relational<br/> E- Equality<br/> <br/> B-BitWise ( $\\&amp;&gt;^{\\wedge}&gt;1$ )<br/> L- Logical ( logical \\&amp; \\&amp; &gt; logical ||)<br/> and the last three operators are<br/> T- Ternary<br/> A- Assignment<br/> C- Comma</div><br><br><a href=\"https://gateoverflow.in/473028/go-classes-dpp-c-programming-precedence-of-operators#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-c-programming-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/c-programming\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">C Programming - Data Types, Operators & Expressions</a></b></div></div>"
        }
    ]
});

registerTest({
    "name": "DPP 15 - C Programming (Structures, Unions & Memory Management - Part 1)",
    "testLabel": "DPP 15",
    "testType": "DPP",
    "bracket": "Structures, Unions & Memory Management - Part 1",
    "subject": "c_prog",
    "series": "cse-dpp-2027",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 11,
    "topicsCovered": "Structures, Unions & Memory Management (Practice Set 1)",
    "questions": [
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Assume:</p><p>$\\texttt{short = 2 bytes}$, $\\texttt{int = 4 bytes}$, $\\texttt{char = 1 byte}$</p><p>$\\texttt{int}$ needs $4$-byte alignment and the final structure size is rounded to a multiple of $4$.</p><p>Find the size of each structure in order: $\\texttt{struct X}$, $\\texttt{struct Y}$, and $\\texttt{struct Z}$.</p><pre class=\"prettyprint linenums lang-c_cpp\" data-linenums=\"true\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"\" data-rawcode=\"struct X { short s; int i; char c; }; struct Y { int i; char c; short s; }; struct Z { int i; short s; char c; };\" dir=\"ltr\">struct X { short s; int i; char c; }; struct Y { int i; char c; short s; }; struct Z { int i; short s; char c; };</pre></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\texttt{7 7 7}$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{8 8 8}$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{12 8 8}$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{12 12 8}$</span>"
            ],
            "answer": "C",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"538219\"></a><div itemprop=\"text\"><p>For $\\texttt{struct X}$, $\\texttt{short s}$ takes $2$ bytes. </p><p>Since $\\texttt{int i}$ needs $4$-byte alignment, $2$ bytes of padding are added before $\\texttt{int i}$. </p><p>Then $\\texttt{int i}$ takes $4$ bytes and $\\texttt{char c}$ takes $1$ byte. </p><p>This gives $9$ bytes, which is rounded up to the next multiple of $4$. </p><p>Hence, the total size is $12$ bytes.</p><p>For $\\texttt{struct Y}$, $\\texttt{int i}$ takes $4$ bytes, $\\texttt{char c}$ takes $1$ byte, and $\\texttt{short s}$ takes $2$ bytes. </p><p>Since the question specifies an alignment requirement only for $\\texttt{int}$, we do not assume any additional padding before $\\texttt{short s}$. </p><p>This gives $7$ bytes, which is rounded up to the next multiple of $4$. Hence, the total size is $8$ bytes.</p><p>For $\\texttt{struct Z}$, $\\texttt{int i}$ takes $4$ bytes, $\\texttt{short s}$ takes $2$ bytes, and $\\texttt{char c}$ takes $1$ byte. </p><p>This gives $7$ bytes, which is rounded up to the next multiple of $4$. </p><p>Hence, the total size is $8$ bytes.</p><p><br/><strong>Answer: C</strong></p></div><br><br><a href=\"https://gateoverflow.in/538218/go-classes-dpp-gate-cs-c-programming-struct-padding#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-c-programming-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/c-programming\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">C Programming - Structures, Unions & Memory Management</a></b></div></div>"
        },
        {
            "marks": 2,
            "neg": 0,
            "type": "MSQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Assume:</p><pre class=\"prettyprint linenums lang-c_cpp\" data-linenums=\"true\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"\" data-rawcode=\"struct Student { double gpa; }; struct Student alice; struct Student *sptr = &amp;alice;\" dir=\"ltr\">struct Student { double gpa; }; struct Student alice; struct Student *sptr = &amp;alice;</pre><p>Which of the following correctly assigns $\\texttt{4.0}$ to $\\texttt{alice.gpa}$?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\texttt{*sptr.gpa = 4.0;}$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{(*sptr).gpa = 4.0;}$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{sptr->gpa = 4.0;}$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{sptr.gpa = 4.0;}$</span>"
            ],
            "answer": "B",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"538217\"></a><div itemprop=\"text\"><p>Since $\\texttt{sptr}$ is a pointer to structure, we can access the member using either $\\texttt{(*sptr).gpa}$ or $\\texttt{sptr-&gt;gpa}$.</p><p>$\\texttt{​​​​​​​*sptr.gpa}$ is wrong because it is treated as $\\texttt{​​​​​​​*(sptr.gpa)}$, but $\\texttt{sptr}$ is not a structure variable.<br/> </p><p><strong>Answer: B and C</strong></p></div><br><br><a href=\"https://gateoverflow.in/538216/go-classes-dpp-gate-cs-c-programming-struct-pointer#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-c-programming-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/c-programming\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">C Programming - Structures, Unions & Memory Management</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider the following code idea from the source:</p><pre class=\"prettyprint linenums lang-c_cpp\" data-linenums=\"true\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"\" data-rawcode='typedef struct { double x, y; } Point; void reset(Point p) { p.x = p.y = 0; } int main() { Point a = {12.0, 42.0}; Point b = a; reset(a); b.x = 0; printf(\"a: %.0f,%.0f\\n\", a.x, a.y); printf(\"b: %.0f,%.0f\\n\", b.x, b.y); }' dir=\"ltr\">typedef struct { double x, y; } Point; void reset(Point p) { p.x = p.y = 0; } int main() { Point a = {12.0, 42.0}; Point b = a; reset(a); b.x = 0; printf(\"a: %.0f,%.0f\\n\", a.x, a.y); printf(\"b: %.0f,%.0f\\n\", b.x, b.y); }</pre><p>What is the output?</p><p>A.</p><pre dir=\"ltr\"><code dir=\"ltr\">a: 0,0 b: 0,42</code></pre><p>B.</p><pre dir=\"ltr\"><code dir=\"ltr\">a: 12,42 b: 0,42</code></pre><p>C.</p><pre dir=\"ltr\"><code dir=\"ltr\">a: 12,42 b: 12,42</code></pre><p>D.</p><pre dir=\"ltr\"><code dir=\"ltr\">a: 0,42 b: 0,42</code></pre></div></span>",
            "image": "",
            "options": [],
            "answer": "B",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"538215\"></a><div itemprop=\"text\"><p>$\\texttt{Point b = a;}$ copies the structure values. </p><p>Then $\\texttt{reset(a)}$ gets a copy of $\\texttt{a}$, so the original $\\texttt{a}$ is not changed. </p><p>After that, $\\texttt{b.x = 0}$ changes only $\\texttt{b.x}$.</p><p>So $\\texttt{a}$ remains $\\texttt{(12, 42)}$ and $\\texttt{​​​​​​​b}$ becomes $\\texttt{(0, 42)}$.</p><p><strong>Answer: B</strong></p></div><br><br><a href=\"https://gateoverflow.in/538214/go-classes-dpp-gate-cs-c-programming-struct-copy#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-c-programming-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/c-programming\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">C Programming - Structures, Unions & Memory Management</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>What is printed by the following program?</p><pre class=\"prettyprint linenums lang-c_cpp\" data-linenums=\"true\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"\" data-rawcode=\"#include &lt;stdio.h&gt; struct Student { int id, year; char grade; }; int main() { struct Student s; s.id = 10001; s.year = 2010; s.grade = 'B'; printf(&quot;%d %d %c\\n&quot;, s.id, s.year, s.grade); }\" dir=\"ltr\">#include &lt;stdio.h&gt; struct Student { int id, year; char grade; }; int main() { struct Student s; s.id = 10001; s.year = 2010; s.grade = 'B'; printf(\"%d %d %c\\n\", s.id, s.year, s.grade); }</pre></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\texttt{10001 2010 B}$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{2010 10001 B}$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{10001 B 2010}$<br/></span>",
                "<span style=\"display: inline;\">Compilation error</span>"
            ],
            "answer": "A",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"538213\"></a><div itemprop=\"text\"><p>The structure variable is $\\texttt{s}$. Its members are accessed using the dot operator. </p><p>The values assigned are $\\texttt{id = 10001}$, $\\texttt{year = 2010}$, and $\\texttt{grade = 'B'}$.</p><p><strong>Answer: A</strong></p></div><br><br><a href=\"https://gateoverflow.in/538212/go-classes-dpp-gate-cs-c-programming-member-access#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-c-programming-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/c-programming\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">C Programming - Structures, Unions & Memory Management</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Which option correctly completes the given exercise?</p><pre class=\"prettyprint linenums lang-c_cpp\" data-linenums=\"true\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"\" data-rawcode='#include &lt;stdio.h&gt; /* define the person struct here using the typedef syntax */ int main() { person john; john.name = \"John\"; john.age = 27; printf(\"%s is %d years old.\", john.name, john.age); }' dir=\"ltr\">#include &lt;stdio.h&gt; /* define the person struct here using the typedef syntax */ int main() { person john; john.name = \"John\"; john.age = 27; printf(\"%s is %d years old.\", john.name, john.age); }</pre><p>A.</p><pre class=\"prettyprint linenums lang-c_cpp\" data-linenums=\"true\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"\" data-rawcode=\"struct person { char *name; int age; };\" dir=\"ltr\">struct person { char *name; int age; };</pre><p>B.</p><pre class=\"prettyprint linenums lang-c_cpp\" data-linenums=\"true\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"\" data-rawcode=\"typedef struct { char *name; int age; } person;\" dir=\"ltr\">typedef struct { char *name; int age; } person;</pre><p>C.</p><pre class=\"prettyprint linenums lang-c_cpp\" data-linenums=\"true\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"\" data-rawcode=\"typedef struct person { char name; int age; };\" dir=\"ltr\">typedef struct person { char name; int age; };</pre><p>D.</p><pre class=\"prettyprint linenums lang-c_cpp\" data-linenums=\"true\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"\" data-rawcode=\"struct { char *name; int age; } person;\" dir=\"ltr\">struct { char *name; int age; } person;</pre></div></span>",
            "image": "",
            "options": [],
            "answer": "B",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"538211\"></a><div itemprop=\"text\"><p>The code uses $\\texttt{person john;}$ so $\\texttt{person}$ must be a type name. </p><p>That is why $\\texttt{typedef}$ is required. </p><p>The structure must also contain $\\texttt{char *name}$ and $\\texttt{int age}$.</p><p><strong>Answer: B</strong></p></div><br><br><a href=\"https://gateoverflow.in/538210/go-classes-dpp-gate-cs-c-programming-typedef-structure#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-c-programming-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/c-programming\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">C Programming - Structures, Unions & Memory Management</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Assume:</p><p>What is the output of the following code?</p><pre class=\"prettyprint linenums lang-c_cpp\" data-linenums=\"true\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"\" data-rawcode='#include &lt;stdio.h&gt; struct Test { char c; int x; char d; }; int main() { printf(\"%zu\", sizeof(struct Test)); return 0; }' dir=\"ltr\">#include &lt;stdio.h&gt; struct Test { char c; int x; char d; }; int main() { printf(\"%zu\", sizeof(struct Test)); return 0; } </pre></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\texttt{char}$ takes $1$ byte<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{int}$ takes $4$ bytes<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{int}$ must be stored at an address divisible by $4$<br/></span>",
                "<span style=\"display: inline;\">Structure size is rounded to a multiple of the largest alignment requirement<br/></span>"
            ],
            "answer": "D",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"538023\"></a><div itemprop=\"text\"><p>The structure is:</p><pre class=\"prettyprint linenums lang-c_cpp\" data-linenums=\"true\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"\" data-rawcode=\"struct Test { char c; int x; char d; };\" dir=\"ltr\">struct Test { char c; int x; char d; };</pre><p>Now calculate memory layout.</p><p>First member:</p><p>$\\texttt{char c}$ takes $1$ byte.</p><p>So, $\\texttt{c}$ is placed at byte $0$.</p><p>Next member:</p><p>$\\texttt{int x}$ needs $4$-byte alignment.</p><p>So, $\\texttt{x}$ must start at an address divisible by $4$.</p><p>After $\\texttt{c}$, byte $1$ is available, but byte $1$ is not divisible by $4$.</p><p>Therefore, $3$ padding bytes are added after $\\texttt{c}$.</p><p>Now, $\\texttt{x}$ starts at byte $4$ and occupies $4$ bytes:</p><p>bytes $4, 5, 6,$ and $7$.</p><p>Next member:</p><p>$\\texttt{char d}$ takes $1$ byte.</p><p>So, $\\texttt{d}$ is placed at byte $8$.</p><p>Now total used bytes are:</p><p>byte $0$ for $\\texttt{c}$</p><p>bytes $1$ to $3$ as padding</p><p>bytes $4$ to $7$ for $\\texttt{x}$</p><p>byte $8$ for $\\texttt{d}$</p><p>So far, $9$ bytes are used.</p><p>But the structure size must be a multiple of $4$.</p><p>The next multiple of $4$ after $9$ is $12$.</p><p>So, $3$ tail padding bytes are added.</p><p><br/>Therefore:</p><p>$\\texttt{sizeof(struct Test) = 12}$</p><p><br/><strong>Answer: D</strong></p></div><br><br><a href=\"https://gateoverflow.in/538021/go-classes-dpp-gate-cs-c-programming-structure-padding#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-c-programming-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/c-programming\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">C Programming - Structures, Unions & Memory Management</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>What is the output of the following code?</p><pre class=\"prettyprint linenums lang-c_cpp\" data-linenums=\"true\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"\" data-rawcode=\"#include &lt;stdio.h&gt; struct Book { char name[4]; int pages; }; int main() { struct Book b1 = {&quot;CAT&quot;, 50}; struct Book b2; b2 = b1; b2.name[0] = 'B'; b2.pages = b2.pages + 10; printf(&quot;%s %d %s %d&quot;, b1.name, b1.pages, b2.name, b2.pages); return 0; }\" dir=\"ltr\">#include &lt;stdio.h&gt; struct Book { char name[4]; int pages; }; int main() { struct Book b1 = {\"CAT\", 50}; struct Book b2; b2 = b1; b2.name[0] = 'B'; b2.pages = b2.pages + 10; printf(\"%s %d %s %d\", b1.name, b1.pages, b2.name, b2.pages); return 0; }</pre></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\texttt{BAT 60 BAT 60}$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{CAT 50 BAT 60}$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{CAT 60 BAT 60}$<br/></span>",
                "<span style=\"display: inline;\">Compilation error</span>"
            ],
            "answer": "B",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"538020\"></a><div itemprop=\"text\"><p>In C, one structure variable can be assigned to another structure variable of the same type.</p><p>So this statement is valid:</p><p>$\\texttt{b2 = b1;}$</p><p>It copies all member values of $\\texttt{b1}$ into $\\texttt{b2}$.</p><p>Initially:</p><p>$\\texttt{b1.name = \"CAT\"}$</p><p>$\\texttt{b1.pages = 50}$</p><p>After:</p><p>$\\texttt{b2 = b1;}$</p><p>we get:</p><p>$\\texttt{b2.name = \"CAT\"}$</p><p>$\\texttt{b2.pages = 50}$</p><p>Now:</p><p>$\\texttt{b2.name[0] = 'B';}$</p><p>changes only $\\texttt{b2.name[0]}$.</p><p>So, $\\texttt{b2.name}$ becomes $\\texttt{\"BAT\"}$.</p><p>The original $\\texttt{b1.name}$ remains $\\texttt{\"CAT\"}$.</p><p>Next:</p><p>$\\texttt{b2.pages = b2.pages + 10;}$</p><p>So,</p><p>$\\texttt{b2.pages = 50 + 10 = 60}$</p><p>The original $\\texttt{b1.pages}$ remains $\\texttt{50}$.</p><p><br/>Therefore, the output is:</p><p>$\\texttt{CAT 50 BAT 60}$</p><p><br/><strong>Answer: B</strong></p></div><br><br><a href=\"https://gateoverflow.in/538019/go-classes-dpp-gate-cs-c-programming-structure-assignment#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-c-programming-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/c-programming\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">C Programming - Structures, Unions & Memory Management</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>What is the output of the following code?</p><pre class=\"prettyprint linenums lang-c_cpp\" data-linenums=\"true\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"\" data-rawcode='#include &lt;stdio.h&gt; struct Item { int code; int price; }; void f(struct Item x) { x.code = x.code + 1; x.price = x.price + 50; } void g(struct Item *p) { p-&gt;code = p-&gt;code + 2; p-&gt;price = p-&gt;price + 20; } int main() { struct Item i = {10, 100}; f(i); g(&amp;i); printf(\"%d %d\", i.code, i.price); return 0; }' dir=\"ltr\">#include &lt;stdio.h&gt; struct Item { int code; int price; }; void f(struct Item x) { x.code = x.code + 1; x.price = x.price + 50; } void g(struct Item *p) { p-&gt;code = p-&gt;code + 2; p-&gt;price = p-&gt;price + 20; } int main() { struct Item i = {10, 100}; f(i); g(&amp;i); printf(\"%d %d\", i.code, i.price); return 0; }</pre></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\texttt{10 100}$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{11 150}$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{12 120}$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{13 170}$</span>"
            ],
            "answer": "C",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"538018\"></a><div itemprop=\"text\"><p>Initially:</p><p>$\\texttt{i.code = 10}$</p><p>$\\texttt{i.price = 100}$</p><p>First function call:</p><p>$\\texttt{f(i);}$</p><p>Here, the structure is passed by value.</p><p>So, $\\texttt{f()}$ gets a copy of $\\texttt{i}$.</p><p>Changes made inside $\\texttt{f()}$ do not affect the original structure variable $\\texttt{i}$ in $\\texttt{main()}$.</p><p>So after $\\texttt{f(i)}$:</p><p>$\\texttt{i.code = 10}$</p><p>$\\texttt{i.price = 100}$</p><p>Next function call:</p><p>$\\texttt{g(\\&amp;i);}$</p><p>Here, the address of $\\texttt{i}$ is passed.</p><p>So, $\\texttt{p}$ points to the original structure variable $\\texttt{i}$.</p><p>Inside $\\texttt{g()}$:</p><p>$\\texttt{p-&gt;code = p-&gt;code + 2;}$</p><p>So,</p><p>$\\texttt{i.code = 10 + 2 = 12}$</p><p>And:</p><p>$\\texttt{p-&gt;price = p-&gt;price + 20;}$</p><p>So,</p><p>$\\texttt{i.price = 100 + 20 = 120}$</p><p>Therefore, the output is:</p><p>$\\texttt{12 120}$</p><p><br/><strong>Answer: C</strong></p></div><br><br><a href=\"https://gateoverflow.in/538017/go-classes-dpp-gate-cs-c-programming-structure-passed-by-value#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-c-programming-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/c-programming\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">C Programming - Structures, Unions & Memory Management</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>What is the output of the following code?</p><pre class=\"prettyprint linenums lang-c_cpp\" data-linenums=\"true\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"\" data-rawcode='#include &lt;stdio.h&gt; struct Student { int roll; int marks; }; int main() { struct Student s[3] = { {1, 50}, {2, 60}, {3, 70} }; struct Student *p = s; (p + 1)-&gt;marks = (p + 1)-&gt;marks + 5; p++; p-&gt;roll = (p - 1)-&gt;roll + p-&gt;roll; printf(\"%d %d %d\", s[0].roll, s[1].roll, s[1].marks); return 0; }' dir=\"ltr\">#include &lt;stdio.h&gt; struct Student { int roll; int marks; }; int main() { struct Student s[3] = { {1, 50}, {2, 60}, {3, 70} }; struct Student *p = s; (p + 1)-&gt;marks = (p + 1)-&gt;marks + 5; p++; p-&gt;roll = (p - 1)-&gt;roll + p-&gt;roll; printf(\"%d %d %d\", s[0].roll, s[1].roll, s[1].marks); return 0; }</pre></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\texttt{1 2 65}$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{1 3 65}$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{2 3 65}$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{1 3 60}$</span>"
            ],
            "answer": "B",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"538016\"></a><div itemprop=\"text\"><p>Here, $\\texttt{s}$ is an array of structures.</p><p>Initially:</p><p>$\\texttt{s[0].roll = 1}$, $\\texttt{s[0].marks = 50}$</p><p>$\\texttt{s[1].roll = 2}$, $\\texttt{s[1].marks = 60}$</p><p>$\\texttt{s[2].roll = 3}$, $\\texttt{s[2].marks = 70}$</p><p>Now:</p><p>$\\texttt{struct Student *p = s;}$</p><p>So, $\\texttt{p}$ points to $\\texttt{s[0]}$.</p><p>First statement:</p><p>$\\texttt{(p + 1)-&gt;marks = (p + 1)-&gt;marks + 5;}$</p><p>Here, $\\texttt{p + 1}$ points to $\\texttt{s[1]}$.</p><p>So,</p><p>$\\texttt{s[1].marks = 60 + 5 = 65}$</p><p>Next:</p><p>$\\texttt{p++;}$</p><p>Now, $\\texttt{p}$ points to $\\texttt{s[1]}$.</p><p>Next:</p><p>$\\texttt{p-&gt;roll = (p - 1)-&gt;roll + p-&gt;roll;}$</p><p>Here, $\\texttt{p-&gt;roll}$ means $\\texttt{s[1].roll}$.</p><p>Also, $\\texttt{(p - 1)-&gt;roll}$ means $\\texttt{s[0].roll}$.</p><p>So,</p><p>$\\texttt{s[1].roll = 1 + 2 = 3}$</p><p>Therefore:</p><p>$\\texttt{s[0].roll = 1}$</p><p>$\\texttt{s[1].roll = 3}$</p><p>$\\texttt{s[1].marks = 65}$</p><p>So the output is:</p><p>$\\texttt{1 3 65}$<br/> </p><p><strong>Answer: B</strong></p></div><br><br><a href=\"https://gateoverflow.in/538015/go-classes-dpp-gate-cs-c-programming-array-of-structures-with-pointer#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-c-programming-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/c-programming\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">C Programming - Structures, Unions & Memory Management</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>What will happen when the following code is compiled?</p><pre class=\"prettyprint linenums lang-c_cpp\" data-linenums=\"true\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"\" data-rawcode='#include &lt;stdio.h&gt; struct Node { int data; }; int main() { struct Node n = {25}; struct Node *p = &amp;n; printf(\"%d\", *p.data); return 0; }' dir=\"ltr\">#include &lt;stdio.h&gt; struct Node { int data; }; int main() { struct Node n = {25}; struct Node *p = &amp;n; printf(\"%d\", *p.data); return 0; }</pre></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\texttt{25}$<br/></span>",
                "<span style=\"display: inline;\">Address of $\\texttt{data}$<br/></span>",
                "<span style=\"display: inline;\">Compilation error<br/></span>",
                "<span style=\"display: inline;\">Undefined behavior</span>"
            ],
            "answer": "C",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"538014\"></a><div itemprop=\"text\"><p>Here, $\\texttt{p}$ is a pointer to a structure.</p><p>To access the member using a structure pointer, we should write:</p><p>$\\texttt{p-&gt;data}$</p><p>or</p><p>$\\texttt{(*p).data}$</p><p>But the code uses:</p><p>$\\texttt{*p.data}$</p><p>The dot operator $\\texttt{.}$ has higher precedence than the dereference operator $\\texttt{*}$.</p><p>So, this expression is treated as:</p><p>$\\texttt{*(p.data)}$</p><p>But $\\texttt{p}$ is a pointer, not a structure variable.</p><p>So, $\\texttt{p.data}$ is invalid.</p><p>Therefore, the code gives a compilation error.</p><p><br/><strong>Answer: C</strong></p></div><br><br><a href=\"https://gateoverflow.in/538013/go-classes-dpp-gate-cs-c-programming-structure-pointer-precedence#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-c-programming-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/c-programming\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">C Programming - Structures, Unions & Memory Management</a></b></div></div>"
        }
    ]
});

registerTest({
    "name": "DPP 16 - C Programming (Structures, Unions & Memory Management - Part 2)",
    "testLabel": "DPP 16",
    "testType": "DPP",
    "bracket": "Structures, Unions & Memory Management - Part 2",
    "subject": "c_prog",
    "series": "cse-dpp-2027",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 10,
    "topicsCovered": "Structures, Unions & Memory Management (Practice Set 2)",
    "questions": [
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>What will happen when the following code is compiled?</p><pre class=\"prettyprint linenums lang-c_cpp\" data-linenums=\"true\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"\" data-rawcode='#include &lt;stdio.h&gt; struct Point { int x; int y; }; int main() { struct Point p1 = {2, 4}; struct Point p2; p2 = p1; p2.x = 10; if (p1 == p2) printf(\"Same\"); else printf(\"%d %d\", p1.x, p2.x); return 0; }' dir=\"ltr\">#include &lt;stdio.h&gt; struct Point { int x; int y; }; int main() { struct Point p1 = {2, 4}; struct Point p2; p2 = p1; p2.x = 10; if (p1 == p2) printf(\"Same\"); else printf(\"%d %d\", p1.x, p2.x); return 0; }</pre></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\texttt{Same}$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{2 10}$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{10 10}$<br/></span>",
                "<span style=\"display: inline;\">Compilation error</span>"
            ],
            "answer": "D",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"537791\"></a><div itemprop=\"text\"><p>In C, one structure variable can be assigned to another structure variable of the same type.</p><p>So, this statement is valid:</p><p>$\\texttt{p2 = p1;}$</p><p>It copies all member values of $\\texttt{p1}$ into $\\texttt{p2}$.</p><p>After this:</p><p>$\\texttt{p2.x = 2}$</p><p>$\\texttt{p2.y = 4}$</p><p>Then:</p><p>$\\texttt{p2.x = 10;}$</p><p>changes only $\\texttt{p2.x}$.</p><p>So now:</p><p>$\\texttt{p1.x = 2}$</p><p>$\\texttt{p2.x = 10}$</p><p>But the problem is this statement:</p><p>$\\texttt{if (p1 == p2)}$</p><p>In C, direct comparison of two structure variables using $\\texttt{==}$ is not allowed.</p><p>So the code gives a compilation error.</p><p><br/><strong>Answer: D</strong></p></div><br><br><a href=\"https://gateoverflow.in/537790/go-classes-dpp-gate-cs-c-programming-structure-copy#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-c-programming-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/c-programming\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">C Programming - Structures, Unions & Memory Management</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>What is the output of the following code?</p><pre class=\"prettyprint linenums lang-c_cpp\" data-linenums=\"true\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"\" data-rawcode='#include &lt;stdio.h&gt; struct Item { int code; int price; }; void update(struct Item *p) { p-&gt;price = p-&gt;price + 20; (*p).code = (*p).code + 1; } int main() { struct Item i1 = {10, 100}; update(&amp;i1); printf(\"%d %d\", i1.code, i1.price); return 0; }' dir=\"ltr\">#include &lt;stdio.h&gt; struct Item { int code; int price; }; void update(struct Item *p) { p-&gt;price = p-&gt;price + 20; (*p).code = (*p).code + 1; } int main() { struct Item i1 = {10, 100}; update(&amp;i1); printf(\"%d %d\", i1.code, i1.price); return 0; }</pre></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\texttt{10 100}$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{11 120}$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{10 120}$<br/></span>",
                "<span style=\"display: inline;\">Compilation error</span>"
            ],
            "answer": "B",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"537789\"></a><div itemprop=\"text\"><p>Here, $\\texttt{i1}$ is a structure variable.</p><p>The function call is:</p><p>$\\texttt{update(\\&amp;i1);}$</p><p>So, the address of $\\texttt{i1}$ is passed to the function.</p><p>Inside the function, $\\texttt{p}$ points to the original structure variable $\\texttt{i1}$.</p><p><br/>First statement:</p><p>$\\texttt{p-&gt;price = p-&gt;price + 20;}$</p><p>So,</p><p>$\\texttt{i1.price = 100 + 20 = 120}$</p><p><br/>Second statement:</p><p>$\\texttt{(*p).code = (*p).code + 1;}$</p><p>Here, $\\texttt{(*p).code}$ is the same as $\\texttt{p-&gt;code}$.</p><p>So,</p><p>$\\texttt{i1.code = 10 + 1 = 11}$</p><p><br/>Therefore, the output is:</p><p>$\\texttt{11 120}$<br/> </p><p><strong>Answer: B</strong></p></div><br><br><a href=\"https://gateoverflow.in/537788/go-classes-dpp-gate-cs-c-programming-structure-pointer-in-function#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-c-programming-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/c-programming\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">C Programming - Structures, Unions & Memory Management</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>What is the output of the following code?</p><pre class=\"prettyprint linenums lang-c_cpp\" data-linenums=\"true\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"\" data-rawcode='#include &lt;stdio.h&gt; struct Box { int width; int height; }; int main() { struct Box b = {4, 6}; struct Box *p = &amp;b; p-&gt;width = p-&gt;width + 2; (*p).height = (*p).height + p-&gt;width; printf(\"%d %d\", b.width, b.height); return 0; }' dir=\"ltr\">#include &lt;stdio.h&gt; struct Box { int width; int height; }; int main() { struct Box b = {4, 6}; struct Box *p = &amp;b; p-&gt;width = p-&gt;width + 2; (*p).height = (*p).height + p-&gt;width; printf(\"%d %d\", b.width, b.height); return 0; }</pre></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\texttt{4 6}$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{6 10}$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{6 12}$<br/></span>",
                "<span style=\"display: inline;\">Compilation error</span>"
            ],
            "answer": "C",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"537787\"></a><div itemprop=\"text\"><p>Here, $\\texttt{p}$ is a pointer to the structure variable $\\texttt{b}$.</p><p>So,</p><p>$\\texttt{p-&gt;width}$ is the same as $\\texttt{(*p).width}$.</p><p>Initially:</p><p>$\\texttt{b.width = 4}$</p><p>$\\texttt{b.height = 6}$</p><p><br/>Now:</p><p>$\\texttt{p-&gt;width = p-&gt;width + 2;}$</p><p>So,</p><p>$\\texttt{b.width = 4 + 2 = 6}$</p><p><br/>Next:</p><p>$\\texttt{(*p).height = (*p).height + p-&gt;width;}$</p><p>Here, $\\texttt{(*p).height}$ means $\\texttt{b.height}$.</p><p>And $\\texttt{p-&gt;width}$ means $\\texttt{b.width}$.</p><p>So,</p><p>$\\texttt{b.height = 6 + 6 = 12}$</p><p><br/>Therefore, the output is:</p><p>$\\texttt{6 12}$</p><p><br/><strong>Answer: C</strong></p></div><br><br><a href=\"https://gateoverflow.in/537786/go-classes-dpp-gate-cs-c-programming-structure-pointer#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-c-programming-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/c-programming\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">C Programming - Structures, Unions & Memory Management</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>What is the output of the following code?</p><pre class=\"prettyprint linenums lang-c_cpp\" data-linenums=\"true\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"\" data-rawcode='#include &lt;stdio.h&gt; struct Student { int roll; int marks; }; int main() { struct Student s[3] = { {1, 70}, {2, 80}, {3, 90} }; s[1].marks = s[1].marks + 5; s[2].roll = s[0].roll + s[1].roll; printf(\"%d %d %d\", s[1].marks, s[2].roll, s[2].marks); return 0; }' dir=\"ltr\">#include &lt;stdio.h&gt; struct Student { int roll; int marks; }; int main() { struct Student s[3] = { {1, 70}, {2, 80}, {3, 90} }; s[1].marks = s[1].marks + 5; s[2].roll = s[0].roll + s[1].roll; printf(\"%d %d %d\", s[1].marks, s[2].roll, s[2].marks); return 0; }</pre></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\texttt{80 3 90}$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{85 3 90}$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{85 2 90}$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{85 3 95}$</span>"
            ],
            "answer": "A",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"537905\"></a><div itemprop=\"text\"><p><img alt=\"\" src=\"https://gateoverflow.in/?qa=blob&amp;qa_blobid=6859416346203268786\" style=\"max-width: 100%;\" width=\"1200\"/>Anwser is in the uploaded image</p></div><br><br><a href=\"https://gateoverflow.in/537782/go-classes-dpp-gate-cs-c-programming-array-of-structures#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-c-programming-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/c-programming\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">C Programming - Structures, Unions & Memory Management</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>What is the output of the following code?</p><pre class=\"prettyprint linenums lang-c_cpp\" data-linenums=\"true\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"\" data-rawcode=\"#include &lt;stdio.h&gt; struct Book { char name; float price; int pages; }; int main() { struct Book b1 = {'C', 150.5, 300}; b1.pages = b1.pages + 50; b1.price = b1.price + 10.5; printf(&quot;%c %.1f %d&quot;, b1.name, b1.price, b1.pages); return 0; }\" dir=\"ltr\">#include &lt;stdio.h&gt; struct Book { char name; float price; int pages; }; int main() { struct Book b1 = {'C', 150.5, 300}; b1.pages = b1.pages + 50; b1.price = b1.price + 10.5; printf(\"%c %.1f %d\", b1.name, b1.price, b1.pages); return 0; }</pre></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\texttt{C 150.5 300}$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{C 161.0 350}$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{C 160.5 350}$<br/></span>",
                "<span style=\"display: inline;\">Compilation error</span>"
            ],
            "answer": "B",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"537781\"></a><div itemprop=\"text\"><p>Here, $\\texttt{b1}$ is a structure variable of type $\\texttt{struct Book}$</p><p>The members are accessed using the dot operator $\\texttt{.}$</p><p>Initially:</p><p>$\\texttt{b1.name = 'C'}$</p><p>$\\texttt{b1.price = 150.5}$</p><p>$\\texttt{b1.pages = 300}$</p><p><br/>Now:</p><p>$\\texttt{b1.pages = b1.pages + 50;}$</p><p>So,</p><p>$\\texttt{b1.pages = 300 + 50 = 350}$</p><p><br/>Next:</p><p>$\\texttt{b1.price = b1.price + 10.5;}$</p><p>So,</p><p>$\\texttt{b1.price = 150.5 + 10.5 = 161.0}$</p><p><br/>$\\therefore$ <strong>Output:</strong> $\\texttt{C 161.0 350}$<br/> </p><p><strong>Answer: B</strong></p></div><br><br><a href=\"https://gateoverflow.in/537779/go-classes-dpp-gate-cs-c-programming-structure-member-access#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-c-programming-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/c-programming\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">C Programming - Structures, Unions & Memory Management</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>What is the main issue in the following code? Assume both $\\texttt{malloc()}$ calls succeed.</p><pre class=\"prettyprint linenums lang-c_cpp\" data-linenums=\"true\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"\" data-rawcode='#include &lt;stdio.h&gt; #include &lt;stdlib.h&gt; int main() { int *p = (int *)malloc(sizeof(int)); *p = 5; p = (int *)malloc(sizeof(int)); *p = 10; printf(\"%d\", *p); free(p); return 0; }' dir=\"ltr\">#include &lt;stdio.h&gt; #include &lt;stdlib.h&gt; int main() { int *p = (int *)malloc(sizeof(int)); *p = 5; p = (int *)malloc(sizeof(int)); *p = 10; printf(\"%d\", *p); free(p); return 0; }</pre></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">It gives compilation error<br/></span>",
                "<span style=\"display: inline;\">It prints $\\texttt{10}$, but the first allocated memory block is leaked<br/></span>",
                "<span style=\"display: inline;\">It prints $\\texttt{5}$, and no memory leak occurs<br/></span>",
                "<span style=\"display: inline;\">It gives undefined behavior because $\\texttt{p}$ is reassigned</span>"
            ],
            "answer": "B",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"537086\"></a><div itemprop=\"text\"><p>First:</p><p>$\\texttt{int *p = (int *)malloc(sizeof(int));}$</p><p>allocates one integer block on the heap.</p><p>Then:</p><p>$\\texttt{*p = 5;}$</p><p>stores $\\texttt{5}$ in that first heap block.</p><p>Now:</p><p>$\\texttt{p = (int *)malloc(sizeof(int));}$</p><p>allocates a second heap block and stores its address in $\\texttt{p}$.</p><p>But the address of the first heap block is lost.</p><p>Since no pointer now stores the address of the first block, we cannot free it later.</p><p>This is called a memory leak.</p><p>Then:</p><p>$\\texttt{*p = 10;}$</p><p>stores $\\texttt{10}$ in the second heap block.</p><p>So:</p><p>$\\texttt{printf(\"\\%d\", *p);}$</p><p>prints $\\texttt{10}$</p><p>Finally:</p><p>$\\texttt{free(p);}$</p><p>frees only the second block.</p><p>The first block remains leaked.</p><p><br/><strong>Answer: B</strong></p></div><br><br><a href=\"https://gateoverflow.in/537085/go-classes-dpp-gate-cs-c-programming-memory-leak#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-c-programming-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/c-programming\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">C Programming - Structures, Unions & Memory Management</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>What will happen in the following code?</p><pre class=\"prettyprint linenums lang-c_cpp\" data-linenums=\"true\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"\" data-rawcode='#include &lt;stdio.h&gt; #include &lt;stdlib.h&gt; int main() { int *p = (int *)malloc(sizeof(int)); *p = 10; free(p); printf(\"%d\", *p); return 0; }' dir=\"ltr\">#include &lt;stdio.h&gt; #include &lt;stdlib.h&gt; int main() { int *p = (int *)malloc(sizeof(int)); *p = 10; free(p); printf(\"%d\", *p); return 0; }</pre></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">It always prints $\\texttt{10}$<br/></span>",
                "<span style=\"display: inline;\">It always prints $\\texttt{0}$<br/></span>",
                "<span style=\"display: inline;\">Compilation error<br/></span>",
                "<span style=\"display: inline;\">Undefined behavior due to dangling pointer</span>"
            ],
            "answer": "D",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"537084\"></a><div itemprop=\"text\"><p>Here,</p><p>$\\texttt{int *p = (int *)malloc(sizeof(int));}$</p><p>allocates one integer block on the heap.</p><p>Then:</p><p>$\\texttt{*p = 10;}$</p><p>stores $\\texttt{10}$ in that heap block.</p><p>Now:</p><p>$\\texttt{free(p);}$</p><p>releases the allocated heap memory.</p><p>After $\\texttt{free(p)}$, pointer $\\texttt{p}$ still stores the old address, but that memory is no longer valid for use.</p><p>So $\\texttt{p}$ becomes a dangling pointer.</p><p>Now:</p><p>$\\texttt{printf(\"\\%d\", *p);}$</p><p>tries to access memory that has already been freed.</p><p>This is undefined behavior.</p><p>The program may print something, crash, or behave unpredictably.</p><p><br/><strong>Answer: D</strong></p></div><br><br><a href=\"https://gateoverflow.in/537083/go-classes-dpp-gate-cs-c-programming-dangling-pointer#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-c-programming-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/c-programming\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">C Programming - Structures, Unions & Memory Management</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>What is the output of the following code? Assume $\\texttt{malloc()}$ succeeds.</p><pre class=\"prettyprint linenums lang-c_cpp\" data-linenums=\"true\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"\" data-rawcode='#include &lt;stdio.h&gt; #include &lt;stdlib.h&gt; int main() { int *p = (int *)malloc(3 * sizeof(int)); p[0] = 4; p[1] = 7; p[2] = p[0] + p[1]; printf(\"%d\", *(p + 2)); free(p); return 0; }' dir=\"ltr\">#include &lt;stdio.h&gt; #include &lt;stdlib.h&gt; int main() { int *p = (int *)malloc(3 * sizeof(int)); p[0] = 4; p[1] = 7; p[2] = p[0] + p[1]; printf(\"%d\", *(p + 2)); free(p); return 0; }</pre></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\texttt{4}$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{7}$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{11}$<br/></span>",
                "<span style=\"display: inline;\">Compilation error</span>"
            ],
            "answer": "C",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"537080\"></a><div itemprop=\"text\"><p>Here:</p><p>$\\texttt{malloc(3 * sizeof(int))}$</p><p>allocates space for $3$ integers on the heap.</p><p>Pointer $\\texttt{p}$ stores the address of the first integer block.</p><p>Now:</p><p>$\\texttt{p[0] = 4}$</p><p>$\\texttt{p[1] = 7}$</p><p>Then:</p><p>$\\texttt{p[2] = p[0] + p[1];}$</p><p>So:</p><p>$\\texttt{p[2] = 4 + 7 = 11}$</p><p>Now:</p><p>$\\texttt{*(p + 2)}$</p><p>is the same as:</p><p>$\\texttt{p[2]}$</p><p>So the output is $\\texttt{11}$.</p><p>Finally, $\\texttt{free(p)}$ releases the heap memory.</p><p><br/><strong>Answer: C</strong></p></div><br><br><a href=\"https://gateoverflow.in/537077/go-classes-dpp-gate-cs-c-programming-malloc-%26-heap-memory#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-c-programming-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/c-programming\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">C Programming - Structures, Unions & Memory Management</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"1061\" data-start=\"1004\">What is the output of the following code?</p><pre class=\"prettyprint linenums lang-c_cpp\" data-end=\"1264\" data-linenums=\"true\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"\" data-rawcode='#include &lt;stdio.h&gt; struct Point { int x; int y; }; int main() { struct Point p = {4, 7}; p.x = p.x + 3; p.y = p.x + p.y; printf(\"%d %d\", p.x, p.y); return 0; }' data-start=\"1063\">#include &lt;stdio.h&gt; struct Point { int x; int y; }; int main() { struct Point p = {4, 7}; p.x = p.x + 3; p.y = p.x + p.y; printf(\"%d %d\", p.x, p.y); return 0; }</pre></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\texttt{4\\ 7}$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{7\\ 14}$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{7\\ 11}$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{4\\ 11}$</span>"
            ],
            "answer": "B",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"534517\"></a><div itemprop=\"text\"><p data-end=\"1459\" data-start=\"1352\">Here, $\\texttt{struct Point p = {4, 7}}$ means $\\texttt{p.x = 4}$ and $\\texttt{p.y = 7}$.</p><p data-end=\"1491\" data-start=\"1461\">Now, $\\texttt{p.x = p.x + 3}$.</p><p data-end=\"1524\" data-start=\"1493\">So, $\\texttt{p.x = 4 + 3 = 7}$.</p><p data-end=\"1558\" data-start=\"1526\">Now, $\\texttt{p.y = p.x + p.y}$.</p><p data-end=\"1617\" data-start=\"1560\">At this point, $\\texttt{p.x = 7}$ and $\\texttt{p.y = 7}$.</p><p data-end=\"1651\" data-start=\"1619\">So, $\\texttt{p.y = 7 + 7 = 14}$.</p><p data-end=\"1695\" data-start=\"1653\">Therefore, the output is $\\texttt{7\\ 14}$.</p><p data-end=\"1728\" data-is-last-node=\"\" data-is-only-node=\"\" data-start=\"1697\"><strong data-end=\"1708\" data-start=\"1697\">Answer:</strong><strong> B</strong></p></div><br><br><a href=\"https://gateoverflow.in/534516/go-classes-dpp-gate-cs-c-programming-structure-initialization#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-c-programming-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/c-programming\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">C Programming - Structures, Unions & Memory Management</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"155\" data-start=\"98\">What is the output of the following code?</p><pre class=\"prettyprint linenums lang-c_cpp\" data-linenums=\"true\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"\" data-rawcode='#include &lt;stdio.h&gt; struct Student { int roll; int marks; }; int main() { struct Student s1; s1.roll = 10; s1.marks = 85; printf(\"%d %d\", s1.roll, s1.marks); return 0; }'>#include &lt;stdio.h&gt; struct Student { int roll; int marks; }; int main() { struct Student s1; s1.roll = 10; s1.marks = 85; printf(\"%d %d\", s1.roll, s1.marks); return 0; }</pre></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\texttt{10\\ 85}$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{85\\ 10}$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{10\\ 10}$<br/></span>",
                "<span style=\"display: inline;\">Compilation error</span>"
            ],
            "answer": "A",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"534515\"></a><div itemprop=\"text\"><p data-end=\"562\" data-start=\"460\">Here, $\\texttt{struct Student}$ has two members: $\\texttt{roll}$ and $\\texttt{marks}$.</p><p data-end=\"623\" data-start=\"564\">The variable $\\texttt{s1}$ is created using this structure.</p><p data-end=\"714\" data-start=\"625\">The statement $\\texttt{s1.roll = 10}$ stores $\\texttt{10}$ in the $\\texttt{roll}$ member.</p><p data-end=\"807\" data-start=\"716\">The statement $\\texttt{s1.marks = 85}$ stores $\\texttt{85}$ in the $\\texttt{marks}$ member.</p><p data-end=\"866\" data-start=\"809\">So, $\\texttt{s1.roll = 10}$ and $\\texttt{s1.marks = 85}$.</p><p data-end=\"911\" data-start=\"868\">Therefore, the output is $\\texttt{10\\ 85}$.</p><p data-end=\"945\" data-start=\"913\"><strong data-end=\"924\" data-start=\"913\">Answer:</strong> <strong>A.</strong></p></div><br><br><a href=\"https://gateoverflow.in/534514/go-classes-dpp-gate-cs-c-programming-structures#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-c-programming-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/c-programming\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">C Programming - Structures, Unions & Memory Management</a></b></div></div>"
        }
    ]
});

registerTest({
    "name": "DPP 17 - C Programming (Structures, Unions & Memory Management - Part 3)",
    "testLabel": "DPP 17",
    "testType": "DPP",
    "bracket": "Structures, Unions & Memory Management - Part 3",
    "subject": "c_prog",
    "series": "cse-dpp-2027",
    "date": "Nov 03, 2026",
    "duration": "15 Min",
    "totalMarks": 3,
    "topicsCovered": "Structures, Unions & Memory Management (Practice Set 3)",
    "questions": [
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"2078\" data-start=\"2021\">What is the output of the following code?</p><pre class=\"prettyprint linenums lang-c_cpp\" data-end=\"2326\" data-linenums=\"true\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"\" data-rawcode='#include &lt;stdio.h&gt; struct Student { int marks; }; void update(struct Student s) { s.marks = s.marks + 10; } int main() { struct Student st; st.marks = 40; update(st); printf(\"%d\", st.marks); return 0; }' data-start=\"2080\">#include &lt;stdio.h&gt; struct Student { int marks; }; void update(struct Student s) { s.marks = s.marks + 10; } int main() { struct Student st; st.marks = 40; update(st); printf(\"%d\", st.marks); return 0; }</pre></div></span>",
            "image": "",
            "options": [],
            "answer": "50",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"534196\"></a><div itemprop=\"text\"><p data-end=\"2459\" data-start=\"2407\">Initially, $\\texttt{st.marks = 40}$.</p><p data-end=\"2504\" data-start=\"2461\">The function call is $\\texttt{update(st)}$.</p><p data-end=\"2563\" data-start=\"2506\">In C, structure variables are passed by value by default.</p><p data-end=\"2617\" data-start=\"2565\">So, a copy of $\\texttt{st}$ is sent to the function.</p><p data-end=\"2691\" data-start=\"2619\">Inside the function, $\\texttt{s.marks}$ becomes $\\texttt{40 + 10 = 50}$.</p><p data-end=\"2734\" data-start=\"2693\">But this change happens only in the copy.</p><p data-end=\"2812\" data-start=\"2736\">The original $\\texttt{st.marks}$ in $\\texttt{main()}$ remains $\\texttt{40}$.</p><p data-end=\"2853\" data-start=\"2814\">Therefore, the output is $\\texttt{40}$.</p></div><br><br><a href=\"https://gateoverflow.in/534195/go-classes-dpp-gate-cs-c-programming-structures-and-pass-by-value#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-c-programming-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/c-programming\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">C Programming - Structures, Unions & Memory Management</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><pre class=\"prettyprint linenums lang-c_cpp\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"4\">#include &lt;stdio.h&gt; struct Point { int x, y; }; int main() { struct Point p1 = {10, 20}; struct Point *ptr = &amp;p1; ptr-&gt;x += 5; (*ptr).y -= 10; printf(\"%d %d\\n\", p1.x, p1.y); return 0; }</pre><p>What is the output?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$1510$<br/></span>",
                "<span style=\"display: inline;\">$1010$<br/></span>",
                "<span style=\"display: inline;\">$530$<br/></span>",
                "<span style=\"display: inline;\">$1520$</span>"
            ],
            "answer": "A",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"478621\"></a><div itemprop=\"text\"><p dir=\"ltr\">There are two ways to access the members of the structure with the help of a structure pointer:</p><p dir=\"ltr\">1.) Dereferencing pointer and Using (.) Dot Operator</p><p dir=\"ltr\">2.) Using ( -&gt; ) Arrow operator.</p><p dir=\"ltr\">So , both<em><strong> ptr -&gt; x</strong></em> and<em><strong> (*ptr).y</strong></em> are equivalent ways to access struct members through a pointer.</p><p dir=\"ltr\">Opt A . 15 , 10</p></div><br><br><a href=\"https://gateoverflow.in/478603/go-classes-dpp-c-programming-structures-dennis-richie#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-c-programming-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/c-programming\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">C Programming - Structures, Unions & Memory Management</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider the following structure on a $32$ -bit machine ( $4$ -byte alignment for int, char alignment is $1$ byte):</p><pre class=\"prettyprint linenums lang-c_cpp\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"4\">struct test { char a; int b; char c; }; </pre><p>What is the size (in bytes) of this structure? </p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$6$ <br/></span>",
                "<span style=\"display: inline;\">$8$ <br/></span>",
                "<span style=\"display: inline;\">$9$ <br/></span>",
                "<span style=\"display: inline;\">$12$</span>"
            ],
            "answer": "A",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"477403\"></a><div itemprop=\"text\"><p>char a : $1 $byte<br/>$3$ bytes padding to align int $b$ on a $4$ -byte boundary $\\rightarrow$ now $4$ bytes so far.<br/>int $\\mathrm{b}: 4$ bytes $\\rightarrow$ total 8 bytes so far.<br/>char c: $1$ byte $\\rightarrow$ total $9$ bytes.<br/>$3$ bytes padding at the end to make the total size a multiple of the largest member's alignment ($4$ bytes).</p><p>Final structure size $=12$ bytes.</p><div style=\"text-align: center;\"><p><a href=\"https://youtu.be/Kh_zZ85NQ8E?si=gAvy-Jjlt9n5GKWF\" rel=\"noopener noreferrer nofollow\" style=\"display: inline-block; background-color: #008CBA; color: white; padding: 10px 20px; text-align: center; text-decoration: none; font-size: 16px; border-radius: 6px; border: none; font-family: sans-serif;\" target=\"_blank\">Watch this video for better understanding: </a> </p></div></div><br><br><a href=\"https://gateoverflow.in/477402/go-classes-dpp-c-programming-structures-dennis-richie#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-c-programming-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/c-programming\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">C Programming - Structures, Unions & Memory Management</a></b></div></div>"
        }
    ]
});

registerTest({
    "name": "DPP 18 - C Programming (Storage Classes, Scope & Preprocessors - Part 1)",
    "testLabel": "DPP 18",
    "testType": "DPP",
    "bracket": "Storage Classes, Scope & Preprocessors - Part 1",
    "subject": "c_prog",
    "series": "cse-dpp-2027",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 10,
    "topicsCovered": "Storage Classes, Scope & Preprocessors (Practice Set 1)",
    "questions": [
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider the macro:</p><pre class=\"prettyprint linenums lang-c_cpp\" data-linenums=\"true\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"\" data-rawcode=\"#define square(x) (x*x)\" dir=\"ltr\">#define square(x) (x*x)</pre><p>Now consider the statement:</p><pre class=\"prettyprint linenums lang-c_cpp\" data-linenums=\"true\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"\" data-rawcode=\"c = square(a + b);\" dir=\"ltr\">c = square(a + b);</pre><p>After macro expansion, which expression is produced?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\texttt{c = ((a + b) * (a + b));}$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{c = (a + b * a + b);}$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{c = (a + b) * a + b;}$<br/></span>",
                "<span style=\"display: inline;\">Compilation error</span>"
            ],
            "answer": "B",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"538120\"></a><div itemprop=\"text\"><p>The macro is:</p><p>$\\texttt{#define square(x) (x*x)}$</p><p>So when we write:</p><p>$\\texttt{square(a + b)}$</p><p>the argument $\\texttt{a + b}$ is substituted wherever $\\texttt{x}$ appears.</p><p>So it becomes:</p><p>$\\texttt{(a + b * a + b)}$</p><p>This is not the same as:</p><p>$\\texttt{(a + b) * (a + b)}$</p><p>because the macro parameter was not individually protected using parentheses.</p><p>Correct safer macro would be:</p><p>$\\texttt{#define square(x) ((x) * (x))}$</p><p><br/><strong>Answer: B</strong></p></div><br><br><a href=\"https://gateoverflow.in/538119/go-classes-dpp-gate-cs-c-programming-macro-parentheses-trap#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-c-programming-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/c-programming\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">C Programming - Storage Classes, Scope & Preprocessors</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider the statement:</p><pre class=\"prettyprint linenums lang-c_cpp\" data-linenums=\"true\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"\" data-rawcode=\"double ans = 18.0 / squared(2 + 1);\" dir=\"ltr\">double ans = 18.0 / squared(2 + 1);</pre><p>For each of the following macro definitions, find the value of $\\texttt{ans}$.</p><pre class=\"prettyprint linenums lang-c_cpp\" data-linenums=\"true\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"\" data-rawcode=\"#define squared(x) x*x #define squared(x) (x*x) #define squared(x) (x)*(x) #define squared(x) ((x)*(x))\" dir=\"ltr\">#define squared(x) x*x #define squared(x) (x*x) #define squared(x) (x)*(x) #define squared(x) ((x)*(x))</pre><p>Which option gives the correct values in order?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\texttt{12, 3.6, 18, 2}$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{2, 2, 2, 2}$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{12, 12, 18, 2}$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{18, 3.6, 18, 2}$</span>"
            ],
            "answer": "A",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"538301\"></a><div itemprop=\"text\"><p><strong>Option A</strong></p><p><br/><img alt=\"\" src=\"https://gateoverflow.in/?qa=blob&amp;qa_blobid=8571131576165261773\"/></p></div><br><br><a href=\"https://gateoverflow.in/538116/go-classes-dpp-gate-cs-c-programming-macro-expansion-trap#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-c-programming-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/c-programming\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">C Programming - Storage Classes, Scope & Preprocessors</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>What is the output of the following code?</p><pre class=\"prettyprint linenums lang-\" data-linenums=\"true\" data-pbcklang=\"\" data-pbcktabsize=\"\" data-rawcode='#include &lt;stdio.h&gt; int a = 1; void fun() { static int a = 2; a++; printf(\"%d \", a); } int main() { auto int b = 5; fun(); { extern int a; printf(\"%d \", a); } fun(); printf(\"%d\", b); return 0; }' dir=\"ltr\">#include &lt;stdio.h&gt; int a = 1; void fun() { static int a = 2; a++; printf(\"%d \", a); } int main() { auto int b = 5; fun(); { extern int a; printf(\"%d \", a); } fun(); printf(\"%d\", b); return 0; }</pre></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\texttt{3\\ 1\\ 4\\ 5}$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{3\\ 2\\ 4\\ 5}$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{2\\ 1\\ 3\\ 5}$<br/></span>",
                "<span style=\"display: inline;\">Compilation error</span>"
            ],
            "answer": "A",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"535122\"></a><div itemprop=\"text\"><p>The global variable is $\\texttt{a = 1}$.</p><p>Inside $\\texttt{fun()}$, there is a static local variable also named $\\texttt{a}$.</p><p>This static local $\\texttt{a}$ is different from the global $\\texttt{a}$.</p><p>In the first call to $\\texttt{fun()}$, static $\\texttt{a}$ starts from $\\texttt{2}$.</p><p>After $\\texttt{a++}$, it becomes $\\texttt{3}$, so it prints $\\texttt{3}$.</p><p>Inside the block in $\\texttt{main()}$, the statement $\\texttt{extern int a;}$ refers to the global variable $\\texttt{a}$.</p><p>So, it prints the global value $\\texttt{1}$.</p><p>In the second call to $\\texttt{fun()}$, the static local $\\texttt{a}$ keeps its old value $\\texttt{3}$.</p><p>After $\\texttt{a++}$, it becomes $\\texttt{4}$, so it prints $\\texttt{4}$.</p><p>Finally, $\\texttt{b}$ is an automatic local variable with value $\\texttt{5}$.</p><p>So, the final output is $\\texttt{3\\ 1\\ 4\\ 5}$.</p><p><strong>Answer: A</strong></p></div><br><br><a href=\"https://gateoverflow.in/535121/go-classes-dpp-gate-cs-c-programming-mixed-storage-classes#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-c-programming-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/c-programming\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">C Programming - Storage Classes, Scope & Preprocessors</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>What is the output of the following code?</p><pre class=\"prettyprint linenums lang-c_cpp\" data-linenums=\"true\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"\" data-rawcode='#include &lt;stdio.h&gt; void f() { static int x = 0; x = x + 2; printf(\"%d \", x); } void g() { static int x = 5; x = x + 3; printf(\"%d \", x); } int main() { f(); g(); f(); g(); return 0; }' dir=\"ltr\">#include &lt;stdio.h&gt; void f() { static int x = 0; x = x + 2; printf(\"%d \", x); } void g() { static int x = 5; x = x + 3; printf(\"%d \", x); } int main() { f(); g(); f(); g(); return 0; }</pre></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\texttt{2\\ 8\\ 4\\ 11}$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{2\\ 5\\ 4\\ 8}$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{2\\ 8\\ 2\\ 8}$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{0\\ 5\\ 2\\ 8}$</span>"
            ],
            "answer": "A",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"535120\"></a><div itemprop=\"text\"><p>The function $\\texttt{f()}$ has its own static variable $\\texttt{x}$.</p><p>The function $\\texttt{g()}$ also has its own separate static variable $\\texttt{x}$.</p><p>These two variables have the same name, but they are different variables because they are declared inside different functions.</p><p>In the first call, $\\texttt{f()}$ starts with $\\texttt{x = 0}$.</p><p>So, $\\texttt{x = 0 + 2 = 2}$ and it prints $\\texttt{2}$.</p><p>In the first call, $\\texttt{g()}$ starts with $\\texttt{x = 5}$.</p><p>So, $\\texttt{x = 5 + 3 = 8}$ and it prints $\\texttt{8}$.</p><p>In the second call, $\\texttt{f()}$ keeps its old value $\\texttt{2}$.</p><p>So, $\\texttt{x = 2 + 2 = 4}$ and it prints $\\texttt{4}$.</p><p>In the second call, $\\texttt{g()}$ keeps its old value $\\texttt{8}$.</p><p>So, $\\texttt{x = 8 + 3 = 11}$ and it prints $\\texttt{11}$.</p><p>Therefore, the output is $\\texttt{2\\ 8\\ 4\\ 11}$.</p><p><strong>Answer: A</strong></p></div><br><br><a href=\"https://gateoverflow.in/535119/go-classes-dpp-gate-cs-c-programming-static-variables#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-c-programming-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/c-programming\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">C Programming - Storage Classes, Scope & Preprocessors</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>What will happen when the following code is compiled?</p><pre class=\"prettyprint linenums lang-c_cpp\" data-linenums=\"true\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"\" data-rawcode='#include &lt;stdio.h&gt; int x = 5; int main() { extern int x; int x = 10; printf(\"%d\", x); return 0; }' dir=\"ltr\">#include &lt;stdio.h&gt; int x = 5; int main() { extern int x; int x = 10; printf(\"%d\", x); return 0; }</pre></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\texttt{5}$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{10}$<br/></span>",
                "<span style=\"display: inline;\">Compilation error<br/></span>",
                "<span style=\"display: inline;\">Linker error</span>"
            ],
            "answer": "C",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"535115\"></a><div itemprop=\"text\"><p>Here, $\\texttt{int x = 5;}$ is a global variable.</p><p>Inside $\\texttt{main()}$, the statement $\\texttt{extern int x;}$ refers to the global variable $\\texttt{x}$.</p><p>After that, the statement $\\texttt{int x = 10;}$ tries to declare another local variable with the same name in the same block.</p><p>This creates a conflict because $\\texttt{x}$ has already been declared in that block using $\\texttt{extern}$.</p><p>So, the program gives a compilation error.</p><p><strong>Answer: C</strong></p></div><br><br><a href=\"https://gateoverflow.in/535114/go-classes-dpp-gate-cs-c-programming-extern#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-c-programming-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/c-programming\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">C Programming - Storage Classes, Scope & Preprocessors</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Which of the following statements is correct in C?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">An automatic local variable has block scope and lifetime throughout the program execution<br/></span>",
                "<span style=\"display: inline;\">A static local variable has block scope and lifetime throughout the program execution<br/></span>",
                "<span style=\"display: inline;\">A static global variable has external linkage<br/></span>",
                "<span style=\"display: inline;\">A register variable must always be stored in a CPU register</span>"
            ],
            "answer": "A",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"535159\"></a><div itemprop=\"text\"><table data-path-to-node=\"6\"><thead><tr><td><strong>Option Statement</strong></td><td><strong>Status</strong></td><td><strong>The Correct Rule</strong></td></tr></thead><tbody><tr><td><i data-index-in-node=\"0\" data-path-to-node=\"6,1,0,0\">An automatic local variable has block scope and lifetime throughout the program execution</i></td><td><b data-index-in-node=\"0\" data-path-to-node=\"6,1,1,0\">Incorrect</b></td><td>It has block scope, but its lifetime ends as soon as the block exits (stack allocation).</td></tr><tr><td><b data-index-in-node=\"0\" data-path-to-node=\"6,2,0,0\"><i data-index-in-node=\"0\" data-path-to-node=\"6,2,0,0\">A static local variable has block scope and lifetime throughout the program execution</i></b></td><td><b data-index-in-node=\"0\" data-path-to-node=\"6,2,1,0\">CORRECT</b></td><td><b data-index-in-node=\"0\" data-path-to-node=\"6,2,2,0\">It stays in memory for the whole program runtime, but is only accessible inside its block.</b></td></tr><tr><td><i data-index-in-node=\"0\" data-path-to-node=\"6,3,0,0\">A static global variable has external linkage</i></td><td><b data-index-in-node=\"0\" data-path-to-node=\"6,3,1,0\">Incorrect</b></td><td>The <code data-index-in-node=\"4\" data-path-to-node=\"6,3,2,0\">static</code> keyword explicitly gives it <b data-index-in-node=\"39\" data-path-to-node=\"6,3,2,0\">internal linkage</b> (hiding it from other <code data-index-in-node=\"78\" data-path-to-node=\"6,3,2,0\">.c</code> files).</td></tr><tr><td><i data-index-in-node=\"0\" data-path-to-node=\"6,4,0,0\">A register variable must always be stored in a CPU register</i></td><td><b data-index-in-node=\"0\" data-path-to-node=\"6,4,1,0\">Incorrect</b></td><td>It is just a hint; the compiler can put it in RAM if registers are full.</td></tr></tbody></table></div><br><br><a href=\"https://gateoverflow.in/535111/go-classes-dpp-gate-cs-c-programming-scope-lifetime-and-linkage#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-c-programming-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/c-programming\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">C Programming - Storage Classes, Scope & Preprocessors</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>What is the output of the following code?</p><pre class=\"prettyprint linenums lang-c_cpp\" data-linenums=\"true\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"\" data-rawcode='#include &lt;stdio.h&gt; int x = 10; int main() { int x = 20; { extern int x; printf(\"%d\", x); } return 0; }' dir=\"ltr\">#include &lt;stdio.h&gt; int x = 10; int main() { int x = 20; { extern int x; printf(\"%d\", x); } return 0; }</pre></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\texttt{10}$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{20}$<br/></span>",
                "<span style=\"display: inline;\">Garbage value<br/></span>",
                "<span style=\"display: inline;\">Compilation error</span>"
            ],
            "answer": "A",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"534940\"></a><div itemprop=\"text\"><p>Here, $\\texttt{int x = 10;}$ is a global variable.</p><p>Inside $\\texttt{main()}$, another local variable $\\texttt{x = 20}$ is declared.</p><p>Normally, this local $\\texttt{x}$ hides the global $\\texttt{x}$ inside $\\texttt{main()}$.</p><p>But inside the inner block, we write $\\texttt{extern int x;}$.</p><p style=\"text-align:center\"><img alt=\"\" height=\"263\" src=\"https://cdn.mathpix.com/snip/images/DAAkE4ijRgmlkO2q1KpQKZz2f6uT0C-zVsGWAdfyriI.original.fullsize.png\" width=\"543\"/></p><p>The statement $\\texttt{extern int x;}$ tells the compiler to use the external global variable $\\texttt{x}$.</p><p>So, inside that block, $\\texttt{x}$ refers to the global variable, not the local variable.</p><p>Therefore, the value printed is $\\texttt{10}$.</p><p><strong>Answer: A</strong></p></div><br><br><a href=\"https://gateoverflow.in/534939/go-classes-dpp-gate-cs-c-programming-extern-with-local-shadowing#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-c-programming-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/c-programming\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">C Programming - Storage Classes, Scope & Preprocessors</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>What is the output of the following code?</p><pre class=\"prettyprint linenums lang-c_cpp\" data-linenums=\"true\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"\" data-rawcode='#include &lt;stdio.h&gt; int add(int n) { static int total = 1; total = total + n; return total; } int main() { int i, ans = 0; for (i = 1; i &lt;= 3; i++) { ans = add(i); } printf(\"%d\", ans); return 0; }' dir=\"ltr\">#include &lt;stdio.h&gt; int add(int n) { static int total = 1; total = total + n; return total; } int main() { int i, ans = 0; for (i = 1; i &lt;= 3; i++) { ans = add(i); } printf(\"%d\", ans); return 0; }</pre></div></span>",
            "image": "",
            "options": [],
            "answer": "2",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"534938\"></a><div itemprop=\"text\"><p style=\"text-align:center\"><img alt=\"\" height=\"268\" src=\"https://cdn.mathpix.com/snip/images/z1BIzgQ97AkN1Ez8oVmnXex8-_GCDYH9merC6GgThRw.original.fullsize.png\" width=\"553\"/></p><p> </p><p>Here, $\\texttt{total}$ is a static local variable.<br/><br/>A static local variable is initialized only once and keeps its value between function calls.<br/><br/>Initially, $\\texttt{total = 1}$.<br/><br/>For $\\texttt{i = 1}$, function call is $\\texttt{add(1)}$.<br/><br/>So, $\\texttt{total = 1 + 1 = 2}$ and $\\texttt{ans = 2}$.<br/><br/>For $\\texttt{i = 2}$, function call is $\\texttt{add(2)}$.<br/><br/>Now $\\texttt{total}$ starts from old value $\\texttt{2}$.<br/><br/>So, $\\texttt{total = 2 + 2 = 4}$ and $\\texttt{ans = 4}$.<br/><br/>For $\\texttt{i = 3}$, function call is $\\texttt{add(3)}$.<br/><br/>Now $\\texttt{total}$ starts from old value $\\texttt{4}$.<br/><br/>So, $\\texttt{total = 4 + 3 = 7}$ and $\\texttt{ans = 7}$.<br/><br/>Therefore, the output is $\\texttt{7}$.</p></div><br><br><a href=\"https://gateoverflow.in/534937/go-classes-dpp-gate-cs-c-programming-static-local-variable#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-c-programming-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/c-programming\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">C Programming - Storage Classes, Scope & Preprocessors</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"4054\" data-start=\"3939\">Given the following three files, what will be the output after compiling and linking them together?</p><p data-end=\"4067\" data-start=\"4056\"><strong>file1.c</strong></p><pre class=\"prettyprint linenums lang-c_cpp\" data-end=\"4114\" data-linenums=\"true\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"\" data-rawcode=\"extern int i; void f() { i++; }\" data-start=\"4069\">extern int i; void f() { i++; }</pre><p data-end=\"4127\" data-start=\"4116\"><strong>file2.c</strong></p><pre class=\"prettyprint linenums lang-c_cpp\" data-end=\"4182\" data-linenums=\"true\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"2\" data-rawcode=\"int i = 0; void f(); void g() { f(); }\" data-start=\"4129\">int i = 0; void f(); void g() { f(); }</pre><p data-end=\"4194\" data-start=\"4184\"><strong>main.c</strong></p><pre class=\"prettyprint linenums lang-c_cpp\" data-end=\"4330\" data-linenums=\"true\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"\" data-rawcode='#include &lt;stdio.h&gt; extern int i; void f(); void g(); int main() { f(); g(); printf(\"%d\", i); return 0; }' data-start=\"4196\">#include &lt;stdio.h&gt; extern int i; void f(); void g(); int main() { f(); g(); printf(\"%d\", i); return 0; }</pre></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\texttt{0}$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{1}$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{2}$<br/></span>",
                "<span style=\"display: inline;\">Linker error</span>"
            ],
            "answer": "C",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"534932\"></a><div itemprop=\"text\"><p data-end=\"4539\" data-start=\"4403\">In $\\texttt{file2.c}$, the statement $\\texttt{int i = 0;}$ is the actual definition of the global variable $\\texttt{i}$.</p><p data-end=\"4656\" data-start=\"4541\">In $\\texttt{file1.c}$, the statement $\\texttt{extern int i;}$ declares that $\\texttt{i}$ is defined somewhere else.</p><p data-end=\"4739\" data-start=\"4658\">So, $\\texttt{file1.c}$ uses the same global $\\texttt{i}$ from $\\texttt{file2.c}$.</p><p data-end=\"4841\" data-start=\"4741\">In $\\texttt{main.c}$ also, $\\texttt{extern int i;}$ refers to the same global variable $\\texttt{i}$.</p><p data-end=\"4871\" data-start=\"4843\">Initially, $\\texttt{i = 0}$.</p><p data-end=\"4926\" data-start=\"4873\">In $\\texttt{main()}$, first $\\texttt{f()}$ is called.</p><p data-end=\"5010\" data-start=\"4928\">Function $\\texttt{f()}$ does $\\texttt{i++}$, so $\\texttt{i}$ becomes $\\texttt{1}$.</p><p data-end=\"5042\" data-start=\"5012\">Then $\\texttt{g()}$ is called.</p><p data-end=\"5107\" data-start=\"5044\">Inside $\\texttt{g()}$, function $\\texttt{f()}$ is called again.</p><p data-end=\"5177\" data-start=\"5109\">So, $\\texttt{i++}$ runs again and $\\texttt{i}$ becomes $\\texttt{2}$.</p><p data-end=\"5217\" data-start=\"5179\">Therefore, the output is $\\texttt{2}$.</p><p data-end=\"5246\" data-is-last-node=\"\" data-is-only-node=\"\" data-start=\"5219\"><img alt=\"\" height=\"366\" src=\"https://cdn.mathpix.com/snip/images/_czdn8QKvaCt4NIhRAj-2GiBZyHbnkO0xeB3C5RqlM4.original.fullsize.png\" width=\"660\"/></p><p data-end=\"5246\" data-is-last-node=\"\" data-is-only-node=\"\" data-start=\"5219\"><strong>Answer: C</strong></p></div><br><br><a href=\"https://gateoverflow.in/534931/go-classes-dpp-gate-cs-c-programming-multi-file-extern-linkage#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-c-programming-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/c-programming\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">C Programming - Storage Classes, Scope & Preprocessors</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"2907\" data-start=\"2800\">Given the following two files, what will happen when they are compiled and linked together?</p><p data-end=\"2920\" data-start=\"2909\"><strong>file1.c</strong></p><pre class=\"prettyprint linenums lang-c_cpp\" data-end=\"2994\" data-linenums=\"true\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"\" data-rawcode=\"static int count = 3; void update() { count = count + 1; }\" data-start=\"2922\">static int count = 3; void update() { count = count + 1; }</pre><p data-end=\"3006\" data-start=\"2996\"><strong>main.c</strong></p><pre class=\"prettyprint linenums lang-c_cpp\" data-end=\"3140\" data-linenums=\"true\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"\" data-rawcode='#include &lt;stdio.h&gt; extern int count; void update(); int main() { update(); printf(\"%d\", count); return 0; }' data-start=\"3008\">#include &lt;stdio.h&gt; extern int count; void update(); int main() { update(); printf(\"%d\", count); return 0; }</pre></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\texttt{3}$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{4}$<br/></span>",
                "<span style=\"display: inline;\">Compilation error<br/></span>",
                "<span style=\"display: inline;\">Linker error</span>"
            ],
            "answer": "D",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"534834\"></a><div itemprop=\"text\"><p data-end=\"3335\" data-start=\"3218\">In $\\texttt{file1.c}$, the variable $\\texttt{count}$ is declared as $\\texttt{static int count = 3;}$.</p><p data-end=\"3383\" data-start=\"3337\">A static global variable has internal linkage.</p><p data-end=\"3457\" data-start=\"3385\">This means $\\texttt{count}$ is available only inside $\\texttt{file1.c}$.</p><p data-end=\"3508\" data-start=\"3459\">It cannot be accessed directly from another file.</p><p data-end=\"3650\" data-start=\"3510\">In $\\texttt{main.c}$, the statement $\\texttt{extern int count;}$ tries to access a global variable named $\\texttt{count}$ from another file.</p><p data-end=\"3743\" data-start=\"3652\">But the $\\texttt{count}$ in $\\texttt{file1.c}$ is static, so it is hidden from other files.</p><p data-end=\"3822\" data-start=\"3745\">Therefore, the linker cannot find an external definition of $\\texttt{count}$.</p><p data-end=\"3850\" data-start=\"3824\">So, a linker error occurs.</p><p data-end=\"3879\" data-start=\"3852\"><strong>Answer: D</strong></p></div><br><br><a href=\"https://gateoverflow.in/534833/go-classes-dpp-gate-cs-c-programming-static-global-%26-external-access#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-c-programming-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/c-programming\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">C Programming - Storage Classes, Scope & Preprocessors</a></b></div></div>"
        }
    ]
});

registerTest({
    "name": "DPP 19 - C Programming (Storage Classes, Scope & Preprocessors - Part 2)",
    "testLabel": "DPP 19",
    "testType": "DPP",
    "bracket": "Storage Classes, Scope & Preprocessors - Part 2",
    "subject": "c_prog",
    "series": "cse-dpp-2027",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 10,
    "topicsCovered": "Storage Classes, Scope & Preprocessors (Practice Set 2)",
    "questions": [
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"1039\" data-start=\"959\">What will happen when the following code is compiled and linked?</p><pre class=\"prettyprint linenums lang-c_cpp\" data-end=\"1139\" data-linenums=\"true\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"\" data-rawcode='#include &lt;stdio.h&gt; int main() { extern int a; printf(\"%d\", a); return 0; }' data-start=\"1041\">#include &lt;stdio.h&gt; int main() { extern int a; printf(\"%d\", a); return 0; }</pre></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\texttt{0}$<br/></span>",
                "<span style=\"display: inline;\">Garbage value<br/></span>",
                "<span style=\"display: inline;\">Compilation error<br/></span>",
                "<span style=\"display: inline;\">Linker error</span>"
            ],
            "answer": "D",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"534832\"></a><div itemprop=\"text\"><p data-end=\"1313\" data-start=\"1218\">The statement $\\texttt{extern int a;}$ only declares the variable $\\texttt{a}$.</p><p data-end=\"1395\" data-start=\"1315\">It means the actual definition of $\\texttt{a}$ should be present somewhere else.</p><p data-end=\"1490\" data-start=\"1397\">But in this program, there is no definition like $\\texttt{int a;}$ or $\\texttt{int a = 10;}$.</p><p data-end=\"1594\" data-start=\"1492\">So, the compiler accepts the declaration, but the linker cannot find the actual variable $\\texttt{a}$.</p><p data-end=\"1629\" data-start=\"1596\">Therefore, a linker error occurs.</p><p data-end=\"1658\" data-start=\"1631\"><strong data-end=\"1642\" data-start=\"1631\">Answer:</strong> <strong>D</strong></p></div><br><br><a href=\"https://gateoverflow.in/534831/go-classes-dpp-gate-cs-c-programming-extern-%26-linker-error#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-c-programming-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/c-programming\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">C Programming - Storage Classes, Scope & Preprocessors</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"1920\" data-start=\"1863\">What is the output of the following code?</p><pre class=\"prettyprint linenums lang-c_cpp\" data-end=\"2034\" data-linenums=\"true\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"\" data-rawcode='#include &lt;stdio.h&gt; int main() { extern int i; printf(\"%d\", i); return 0; } int i = 100;' data-start=\"1922\">#include &lt;stdio.h&gt; int main() { extern int i; printf(\"%d\", i); return 0; } int i = 100;</pre></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">Garbage value<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{0}$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{100}$<br/></span>",
                "<span style=\"display: inline;\">Compilation error</span>"
            ],
            "answer": "C",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"534829\"></a><div itemprop=\"text\"><p data-end=\"2268\" data-start=\"2115\">Inside $\\texttt{main()}$, the statement $\\texttt{extern int i;}$ tells the compiler that variable $\\texttt{i}$ is defined somewhere else.</p><p data-end=\"2325\" data-start=\"2270\">After $\\texttt{main()}$, we have the actual definition:</p><p data-end=\"2350\" data-start=\"2327\">$\\texttt{int i = 100;}$</p><p data-end=\"2423\" data-start=\"2352\">This is valid because the definition can appear later in the same file.</p><p data-end=\"2467\" data-start=\"2425\">So, $\\texttt{i}$ has value $\\texttt{100}$.</p><p data-end=\"2509\" data-start=\"2469\">Therefore, the output is $\\texttt{100}$.</p><p data-end=\"2540\" data-start=\"2511\"><strong data-end=\"2522\" data-start=\"2511\">Answer:</strong> <strong>C</strong></p></div><br><br><a href=\"https://gateoverflow.in/534828/go-classes-dpp-gate-cs-c-programming-extern-variable-declaration#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-c-programming-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/c-programming\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">C Programming - Storage Classes, Scope & Preprocessors</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"249\" data-start=\"140\">In which stage is the following code</p><pre class=\"prettyprint linenums lang-c_cpp\" data-linenums=\"true\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"4\" data-rawcode=\"#include &lt;stdio.h&gt;\">#include &lt;stdio.h&gt;</pre><p class=\"prettyprint linenums lang-c_cpp\" data-end=\"278\" data-linenums=\"true\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"\" data-rawcode=\"#include &lt;stdio.h&gt;\" data-start=\"251\">is replaced by the contents of the file $\\texttt{stdio.h}$?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">During editing<br/></span>",
                "<span style=\"display: inline;\">During linking<br/></span>",
                "<span style=\"display: inline;\">During execution<br/></span>",
                "<span style=\"display: inline;\">During preprocessing</span>"
            ],
            "answer": "D",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"534827\"></a><div itemprop=\"text\"><p data-end=\"450\" data-start=\"367\">The line $\\texttt{#include &lt;stdio.h&gt;}$ is a preprocessor directive.</p><p data-end=\"534\" data-start=\"452\">All lines starting with $\\texttt{#}$ are handled before actual compilation starts.</p><p data-end=\"680\" data-start=\"536\">During the preprocessing stage, the preprocessor replaces $\\texttt{#include &lt;stdio.h&gt;}$ with the contents of the header file $\\texttt{stdio.h}$.</p><p data-end=\"757\" data-start=\"682\">So, this replacement does not happen during editing, linking, or execution.</p><p data-end=\"791\" data-start=\"759\">It happens during preprocessing.</p><p data-end=\"828\" data-is-last-node=\"\" data-is-only-node=\"\" data-start=\"793\"><strong data-end=\"804\" data-start=\"793\">Answer:</strong> <strong>D</strong></p></div><br><br><a href=\"https://gateoverflow.in/534826/go-classes-dpp-gate-cs-c-programming-preprocessor-directives#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-c-programming-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/c-programming\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">C Programming - Storage Classes, Scope & Preprocessors</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"3415\" data-start=\"3358\">What is the output of the following code?</p><pre class=\"prettyprint linenums lang-c_cpp\" data-end=\"3540\" data-linenums=\"true\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"\" data-rawcode='#include &lt;stdio.h&gt; int main() { register int x = 10; int *p = &amp;x; printf(\"%d\", *p); return 0; }' data-start=\"3417\">#include &lt;stdio.h&gt; int main() { register int x = 10; int *p = &amp;x; printf(\"%d\", *p); return 0; }</pre></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\texttt{10}$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{0}$<br/></span>",
                "<span style=\"display: inline;\">Garbage value<br/></span>",
                "<span style=\"display: inline;\">Compilation error</span>"
            ],
            "answer": "D",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"534622\"></a><div itemprop=\"text\"><p data-end=\"3690\" data-start=\"3620\">Here, $\\texttt{x}$ is declared as a register variable.</p><p data-end=\"3774\" data-start=\"3692\">In C, the $\\texttt{register}$ storage class suggests to the compiler that the variable $\\texttt{x}$ should be stored in a CPU register instead of standard RAM to allow for faster access.</p><p data-path-to-node=\"3\">Because CPU registers do not reside in the main memory (RAM), <b data-index-in-node=\"62\" data-path-to-node=\"3\">they do not have memory addresses</b>.</p><p data-path-to-node=\"4\">Therefore, the C standard strictly prohibits using the address-of operator ($\\texttt{\\&amp;}$) on any variable declared with the $\\texttt{register}$ keyword. Line $5$ ($\\texttt{int *p = \\&amp;x;}$) violates this constraint, causing the compiler to throw an error.</p><p data-end=\"4000\" data-is-last-node=\"\" data-is-only-node=\"\" data-start=\"3968\"><strong data-end=\"3979\" data-start=\"3968\">Answer:</strong> <strong>D</strong></p></div><br><br><a href=\"https://gateoverflow.in/534621/go-classes-dpp-gate-cs-c-programming-register-variable#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-c-programming-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/c-programming\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">C Programming - Storage Classes, Scope & Preprocessors</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"2697\" data-start=\"2625\">What can be said about the output of the following code?</p><pre class=\"prettyprint linenums lang-c_cpp\" data-end=\"2795\" data-linenums=\"true\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"\" data-rawcode='#include &lt;stdio.h&gt; int main() { auto int x; printf(\"%d\", x); return 0; }' data-start=\"2699\">#include &lt;stdio.h&gt; int main() { auto int x; printf(\"%d\", x); return 0; }</pre></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">Output is always $\\texttt{0}$<br/></span>",
                "<span style=\"display: inline;\">Output is always $\\texttt{1}$<br/></span>",
                "<span style=\"display: inline;\">Output cannot be predicted<br/></span>",
                "<span style=\"display: inline;\">Compilation error</span>"
            ],
            "answer": "C",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"534620\"></a><div itemprop=\"text\"><p data-end=\"2987\" data-start=\"2921\">Here, $\\texttt{x}$ is an automatic local variable.</p><p data-end=\"3036\" data-start=\"2989\">In C, local variables are automatic by default.</p><p data-end=\"3098\" data-start=\"3038\">Automatic local variables are not initialized automatically.</p><p data-end=\"3219\" data-start=\"3100\">So, if we write $\\texttt{auto int x;}$ and do not assign any value to $\\texttt{x}$, it contains an indeterminate value.</p><p data-end=\"3263\" data-start=\"3221\">Therefore, the output cannot be predicted.</p><p data-end=\"3306\" data-start=\"3265\"><strong data-end=\"3276\" data-start=\"3265\">Answer:</strong> <strong>C</strong></p></div><br><br><a href=\"https://gateoverflow.in/534619/go-classes-dpp-gate-cs-c-programming-auto-variable#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-c-programming-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/c-programming\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">C Programming - Storage Classes, Scope & Preprocessors</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"1981\" data-start=\"1924\">What is the output of the following code?</p><pre class=\"prettyprint linenums lang-c_cpp\" data-end=\"2090\" data-linenums=\"true\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"\" data-rawcode='#include &lt;stdio.h&gt; int a; static int b; int main() { printf(\"%d %d\", a, b); return 0; }' data-start=\"1983\">#include &lt;stdio.h&gt; int a; static int b; int main() { printf(\"%d %d\", a, b); return 0; }</pre></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\texttt{0\\ 0}$<br/></span>",
                "<span style=\"display: inline;\">Garbage values<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{1\\ 1}$<br/></span>",
                "<span style=\"display: inline;\">Compilation error</span>"
            ],
            "answer": "A",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"534618\"></a><div itemprop=\"text\"><p data-end=\"2232\" data-start=\"2176\">Here, $\\texttt{a}$ is a global variable.</p><p data-end=\"2318\" data-start=\"2234\">Global variables are automatically initialized to $\\texttt{0}$ if no value is given.</p><p data-end=\"2367\" data-start=\"2320\">Also, $\\texttt{b}$ is a static global variable.</p><p data-end=\"2458\" data-start=\"2369\">Static variables are also automatically initialized to $\\texttt{0}$ if no value is given.</p><p data-end=\"2502\" data-start=\"2460\">So, $\\texttt{a = 0}$ and $\\texttt{b = 0}$.</p><p data-end=\"2545\" data-start=\"2504\">Therefore, the output is $\\texttt{0\\ 0}$.</p><p data-end=\"2577\" data-start=\"2547\"><strong data-end=\"2558\" data-start=\"2547\">Answer:</strong> <strong>A</strong></p></div><br><br><a href=\"https://gateoverflow.in/534617/go-classes-dpp-gate-cs-c-programming-global-variable#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-c-programming-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/c-programming\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">C Programming - Storage Classes, Scope & Preprocessors</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"996\" data-start=\"939\">What is the output of the following code?</p><pre class=\"prettyprint linenums lang-c_cpp\" data-end=\"1166\" data-linenums=\"true\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"\" data-rawcode='#include &lt;stdio.h&gt; void fun() { static int x = 1; x = x + 2; printf(\"%d \", x); } int main() { fun(); fun(); fun(); return 0; }' data-start=\"998\">#include &lt;stdio.h&gt; void fun() { static int x = 1; x = x + 2; printf(\"%d \", x); } int main() { fun(); fun(); fun(); return 0; }</pre></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\texttt{3\\ 3\\ 3}$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{3\\ 5\\ 7}$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{1\\ 3\\ 5}$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{2\\ 4\\ 6}$</span>"
            ],
            "answer": "B",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"534704\"></a><div itemprop=\"text\"><p><img alt=\"\" height=\"409\" src=\"https://gateoverflow.in/?qa=blob&amp;qa_blobid=7654902165071227518\" width=\"516\"/></p><p><strong>Option B</strong></p></div><br><br><a href=\"https://gateoverflow.in/534615/go-classes-dpp-gate-cs-c-programming-static-local-variable#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-c-programming-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/c-programming\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">C Programming - Storage Classes, Scope & Preprocessors</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"206\" data-start=\"149\">What is the output of the following code?</p><pre class=\"prettyprint linenums lang-c_cpp\" data-end=\"317\" data-linenums=\"true\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"\" data-rawcode='#include &lt;stdio.h&gt; int x = 10; int main() { int x = 20; printf(\"%d\", x); return 0; }' data-start=\"208\">#include &lt;stdio.h&gt; int x = 10; int main() { int x = 20; printf(\"%d\", x); return 0; }</pre></div></span>",
            "image": "",
            "options": [],
            "answer": "20",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"534614\"></a><div itemprop=\"text\"><p data-end=\"463\" data-start=\"398\">Here, there are two variables named $\\texttt{x}$.</p><p data-end=\"524\" data-start=\"465\">One $\\texttt{x}$ is global, and its value is $\\texttt{10}$.</p><p data-end=\"625\" data-start=\"526\">Inside $\\texttt{main()}$, another local variable $\\texttt{x}$ is declared with value $\\texttt{20}$.</p><p data-end=\"742\" data-start=\"627\">When a local variable and a global variable have the same name, the local variable gets priority inside that block.</p><p data-end=\"812\" data-start=\"744\">So, inside $\\texttt{main()}$, $\\texttt{x}$ means the local variable.</p><p data-end=\"853\" data-start=\"814\">Therefore, the output is $\\texttt{20}$.</p></div><br><br><a href=\"https://gateoverflow.in/534613/go-classes-dpp-gate-cs-c-programming-local-and-global-variables#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-c-programming-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/c-programming\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">C Programming - Storage Classes, Scope & Preprocessors</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"3250\" data-start=\"3193\">What is the output of the following code?</p><pre class=\"prettyprint linenums lang-c_cpp\" data-end=\"3408\" data-linenums=\"true\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"\" data-rawcode='#include &lt;stdio.h&gt; #define SQUARE(x) x * x int main() { int a = 3; int result = SQUARE(a + 1); printf(\"%d\", result); return 0; }' data-start=\"3252\">#include &lt;stdio.h&gt; #define SQUARE(x) x * x int main() { int a = 3; int result = SQUARE(a + 1); printf(\"%d\", result); return 0; }</pre></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\texttt{16}$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{7}$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{13}$<br/></span>",
                "<span style=\"display: inline;\">Compilation error</span>"
            ],
            "answer": "B",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"534513\"></a><div itemprop=\"text\"><p data-end=\"3517\" data-start=\"3488\">The macro is:</p><p data-end=\"3553\" data-start=\"3519\">$\\texttt{#define SQUARE(x) x * x}$</p><p data-end=\"3577\" data-start=\"3555\">Now, the statement is:</p><p data-end=\"3612\" data-start=\"3579\">$\\texttt{result = SQUARE(a + 1)}$</p><p data-end=\"3648\" data-start=\"3614\">After macro expansion, it becomes:</p><p data-end=\"3683\" data-start=\"3650\">$\\texttt{result = a + 1 * a + 1}$</p><p data-end=\"3787\" data-start=\"3685\">It does not become $\\texttt{(a + 1) * (a + 1)}$ because the macro definition does not use parentheses.</p><p data-end=\"3811\" data-start=\"3789\">Now, $\\texttt{a = 3}$.</p><p data-end=\"3816\" data-start=\"3813\">So,</p><p data-end=\"3851\" data-start=\"3818\">$\\texttt{result = 3 + 1 * 3 + 1}$</p><p data-end=\"3904\" data-start=\"3853\">Multiplication has higher precedence than addition.</p><p data-end=\"3909\" data-start=\"3906\">So,</p><p data-end=\"3944\" data-start=\"3911\">$\\texttt{result = 3 + 3 + 1 = 7}$</p><p data-end=\"3984\" data-start=\"3946\">Therefore, the output is $\\texttt{7}$.</p><p data-end=\"4013\" data-start=\"3986\"><strong data-end=\"3997\" data-start=\"3986\">Answer:</strong> <strong>B.</strong></p></div><br><br><a href=\"https://gateoverflow.in/534512/go-classes-dpp-gate-cs-c-programming-macro-expansion#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-c-programming-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/c-programming\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">C Programming - Storage Classes, Scope & Preprocessors</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><pre class=\"prettyprint linenums lang-c_cpp\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"4\"> #include &lt;stdio.h&gt; void fun() { static int count = 0; count++; printf(\"%d \", count); } int main() { for (int i = 0; i &lt; 3; i++) fun(); return 0; } </pre><p>What is the output of the above C program?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$111$<br/></span>",
                "<span style=\"display: inline;\">$012$<br/></span>",
                "<span style=\"display: inline;\">$123$<br/></span>",
                "<span style=\"display: inline;\">$321$</span>"
            ],
            "answer": "A",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"478736\"></a><div itemprop=\"text\"><p>The variable <code data-end=\"84\" data-start=\"77\">count</code> is declared as <code data-end=\"108\" data-is-only-node=\"\" data-start=\"100\">static</code>, so it retains its value between function calls. Each time <code data-end=\"175\" data-start=\"168\">fun()</code> is called, <code data-end=\"194\" data-start=\"187\">count</code> increases by 1 and prints its value.<br/><br/>so, Ans- c. 123</p></div><br><br><a href=\"https://gateoverflow.in/478601/go-classes-dpp-c-programming-program-output-dennis-richie#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-c-programming-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/c-programming\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">C Programming - Storage Classes, Scope & Preprocessors</a></b></div></div>"
        }
    ]
});

registerTest({
    "name": "DPP 20 - C Programming (Storage Classes, Scope & Preprocessors - Part 3)",
    "testLabel": "DPP 20",
    "testType": "DPP",
    "bracket": "Storage Classes, Scope & Preprocessors - Part 3",
    "subject": "c_prog",
    "series": "cse-dpp-2027",
    "date": "Nov 03, 2026",
    "duration": "15 Min",
    "totalMarks": 1,
    "topicsCovered": "Storage Classes, Scope & Preprocessors (Practice Set 3)",
    "questions": [
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><pre class=\"prettyprint linenums lang-c_cpp\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"4\">#include &lt;stdio.h&gt; int x = 180; void func() { static int x = 10; x += 5; printf(\"%d \", x); } int main() { int x = 1; printf(\"%d \", x); func(); { int x = 50; x++; printf(\"%d \", x); func(); } printf(\"%d\", x); return 0; }</pre><p>What will be the output of the above program?<br/>A 1 15 51 20 1<br/>B 1 10 51 15 1<br/>C 1 15 51 15 100<br/>D 1 15 51 20 100</p></div></span>",
            "image": "",
            "options": [],
            "answer": "A",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"473749\"></a><div itemprop=\"text\">Ans is A accoding to me.<br/> <br/> in code start execute from main function then first x = 1 then print 1<br/> <br/> then execute fun() there is static x mean change is store x value in fun() become 15 and print 15<br/> <br/> then come in bracket in main x value is 50 which is increase by 1 and become 51 and print 51<br/> <br/> again fun() called and x value is 15 due to static then increase by 5 mean become 20 and print 20<br/> <br/> and at last x value in main() is 1 there for print 1 mean output is 1 15 51 20 1<br/> <br/> this question is based on scope of variable.</div><br><br><a href=\"https://gateoverflow.in/473730/go-classes-dpp-c-programming-program-output#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-c-programming-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/c-programming\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">C Programming - Storage Classes, Scope & Preprocessors</a></b></div></div>"
        }
    ]
});
