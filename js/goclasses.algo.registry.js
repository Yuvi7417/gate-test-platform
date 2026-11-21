registerTest({
    "name": "DPP 01 - Algorithms (Asymptotic Analysis & Recurrences - Part 1)",
    "testLabel": "DPP 01",
    "testType": "DPP",
    "bracket": "Asymptotic Analysis & Recurrences - Part 1",
    "subject": "algo",
    "series": "cse-dpp-2027",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 10,
    "topicsCovered": "Asymptotic Analysis & Recurrences (Practice Set 1)",
    "questions": [
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>The algorithm $\\text{ALGSORT}$ sorts an array of distinct integers using comparisons.</p><p>The function $\\text{MININDEX(V,i,j)}$ returns the position of the smallest element in $V[i \\dots j]$ and performs $j-i$ comparisons in the worst case.</p><p>Similarly, $\\text{MAXINDEX(V,i,j)}$ returns the position of the largest element in $V[i \\dots j]$ and also performs $j-i$ comparisons in the worst case.</p><p>Consider:</p><pre class=\"prettyprint linenums lang-c_cpp\" data-linenums=\"true\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"4\" data-rawcode=\"ALGSORT(V, i, j): if j - i == 0: return if j - i == 1: if V[j] &lt; V[i]: swap(V[j], V[i]) return l = MININDEX(V, i, j) swap(V[i], V[l]) g = MAXINDEX(V, i, j) swap(V[j], V[g]) ALGSORT(V, i + 1, j - 1)\">ALGSORT(V, i, j): if j - i == 0: return if j - i == 1: if V[j] &lt; V[i]: swap(V[j], V[i]) return l = MININDEX(V, i, j) swap(V[i], V[l]) g = MAXINDEX(V, i, j) swap(V[j], V[g]) ALGSORT(V, i + 1, j - 1)</pre><p>To sort an array $X[1..n]$, the function is called as:</p><p>$\\text{ALGSORT(X, 1, n)}$</p><p>Which recurrence characterizes its worst-case running time $T(n)$?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$T(n)=T(n-1)+2n-2$<br/></span>",
                "<span style=\"display: inline;\">$T(n)=T(n-2)+2n-2$<br/></span>",
                "<span style=\"display: inline;\">$T(n)=T(n-2)+n-1$<br/></span>",
                "<span style=\"display: inline;\">$T(n)=T(n-2)+(n-1)^2$</span>"
            ],
            "answer": "B",
            "solution": "<div class=\"solution-content\"><a name=\"546621\"></a><div itemprop=\"text\"><section data-testid=\"conversation-turn-8\" data-turn=\"assistant\" data-turn-id=\"request-WEB:63bad255-196e-47a5-ab22-32d85de3334a-3\" data-turn-id-container=\"request-WEB:63bad255-196e-47a5-ab22-32d85de3334a-3\" dir=\"auto\"><p>Let $n = j-i+1$ be the number of elements in the current subarray $V[i \\ldots j]$.</p><p>If $n=1$, then $j-i=0$, so the algorithm returns immediately.</p><p>If $n=2$, then $j-i=1$, so the algorithm performs one comparison, possibly swaps the two elements, and returns.</p><p>Therefore, the base cases are</p><p>$T(1)=\\Theta(1)$</p><p>and</p><p>$T(2)=\\Theta(1)$.</p><p>Now consider the case $n&gt;2$.</p><p>The call $\\text{MAXINDEX}(V,i,j)$ finds the minimum element in $V[i \\ldots j]$.</p><p>Since $j-i=n-1$, it performs $n-1$ comparisons.</p><p>Similarly,</p><p>$\\text{MAXINDEX}(V,i,j)$ also performs $n-1$ comparisons.</p><p>Hence, the total number of comparisons in one call is</p><p>$(n-1)+(n-1)=2n-2$.</p><p>After placing the minimum element at position $i$ and the maximum element at position $j$, the recursive call is</p><p>$\\text{ALGSORT}(V,i+1,j-1)$.</p><p>The size of this new subarray is</p><p>$(j-1)-(i+1)+1=j-i-1=(n-1)-1=n-2$</p><p>Therefore, the recurrence is</p><p>$\\boxed{T(n)=T(n-2)+2n-2}$</p><p> </p><p><strong>Note : </strong></p><p>Also, solving the recurrence gives</p><p>$T(n)=\\Theta(n^2)$,</p><p>since the work is</p><p>$(2n-2)+(2(n-2)-2)+(2(n-4)-2)+\\cdots$,</p><p>which is an arithmetic series with $\\Theta(n)$ terms and total sum $\\Theta(n^2)$.</p></section></div><br><br><small>Source: <a href=\"https://gateoverflow.in/546620/go-classes-dpp-gate-cs-da-algorithms-time-complexity\" target=\"_blank\">GATE Overflow #546620</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"10474\" data-start=\"10465\">Consider,</p><pre class=\"prettyprint linenums lang-c_cpp\" data-end=\"10553\" data-linenums=\"true\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"\" data-rawcode=\"f1(N): x = 0 for i = 0 to N - 1: x++ return x\" data-start=\"10476\">f1(N): x = 0 for i = 0 to N - 1: x++ return x</pre><p data-end=\"10559\" data-start=\"10555\">and,</p><pre class=\"prettyprint linenums lang-c_cpp\" data-end=\"10697\" data-linenums=\"true\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"\" data-rawcode=\"f2(N, R): x = 0 for i = 0 to N - 1: for j = 1; j &lt;= R; j = j + j: x = x + f1(j) return x\" data-start=\"10561\">f2(N, R): x = 0 for i = 0 to N - 1: for j = 1; j &lt;= R; j = j + j: x = x + f1(j) return x</pre><p data-end=\"10760\" data-start=\"10699\">What is the order of growth of the running time of $\\texttt{f2(N,R)}$?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\Theta(N\\log R)$<br/></span>",
                "<span style=\"display: inline;\">$\\Theta(NR)$<br/></span>",
                "<span style=\"display: inline;\">$\\Theta(NR\\log R)$<br/></span>",
                "<span style=\"display: inline;\">$\\Theta(NR^2)$</span>"
            ],
            "answer": "B",
            "solution": "<div class=\"solution-content\"><a name=\"546092\"></a><div itemprop=\"text\"><p data-end=\"10915\" data-start=\"10901\">$\\texttt{f1(j)}$ takes $\\Theta(j)$ time.</p><p data-end=\"10970\" data-start=\"10937\">The inner-loop values of $j$ are:</p><p data-end=\"10988\" data-start=\"10972\">$1,2,4,8,\\ldots$ up to $R$.</p><p data-end=\"11074\" data-start=\"11002\">Therefore, the work performed during one execution of the inner loop is:</p><p data-end=\"11094\" data-start=\"11076\">$1+2+4+8+\\cdots+R$</p><p data-end=\"11123\" data-start=\"11096\">This is a geometric series: $\\Theta(R)$</p><p data-end=\"11162\" data-start=\"11138\">The outer loop executes: $N$ times.</p><p data-end=\"11183\" data-start=\"11177\">Hence,</p><p data-end=\"11209\" data-start=\"11185\">$T(N,R)=N\\cdot\\Theta(R)$</p><p data-end=\"11221\" data-start=\"11211\"> </p><p data-end=\"11243\" data-start=\"11223\"><strong>Answer : </strong>$\\boxed{\\Theta(NR)}$</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/546091/go-classes-dpp-gate-cs-da-algorithms-time-complexity\" target=\"_blank\">GATE Overflow #546091</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"55\" data-start=\"0\">The following running times are observed for a program:</p><p data-end=\"269\" data-start=\"57\">$$\\begin{array}{|c|c|}<br/>\\hline<br/>N &amp; \\text{Running time} \\\\<br/>\\hline<br/>1000 &amp; 0.1\\text{ seconds} \\\\<br/>2000 &amp; 0.3\\text{ seconds} \\\\<br/>4000 &amp; 2.5\\text{ seconds} \\\\<br/>8000 &amp; 19.8\\text{ seconds} \\\\<br/>16000 &amp; 160.1\\text{ seconds} \\\\<br/>\\hline<br/>\\end{array}$$</p><p data-end=\"314\" data-start=\"271\">Estimate the running time, in seconds, for $N = 80000$.</p></div></span>",
            "image": "",
            "options": [],
            "answer": "20000",
            "solution": "<div class=\"solution-content\"><a name=\"546078\"></a><div itemprop=\"text\"><p data-end=\"3409\" data-start=\"3363\">Look at the ratios for sufficiently large $N:\\dfrac{19.8}{2.5}\\approx7.92$ and $\\dfrac{160.1}{19.8}\\approx8.09$</p><p data-end=\"3541\" data-start=\"3481\">So when $N$ doubles, the running time becomes approximately $8$ times larger.</p><p data-end=\"3566\" data-start=\"3563\">If, $T(N)\\propto N^b$</p><p data-end=\"3636\" data-start=\"3587\">then doubling $N$ multiplies the running time by $2^b$</p><p data-end=\"3650\" data-start=\"3645\">Thus, $2^b=8$</p><p data-end=\"3664\" data-start=\"3661\">$\\Rightarrow b=3$</p><p data-end=\"3713\" data-start=\"3673\">The running time is approximately cubic $T(N)\\propto N^3$</p><p data-end=\"3738\" data-start=\"3734\">Now, $80,000/16,000=5$</p><p data-end=\"3777\" data-start=\"3767\">$\\therefore T(80,000)\\approx T(16,000)\\times5^3$</p><p data-end=\"3835\" data-start=\"3818\">$=160.1\\times125\\approx20,012.5$</p><p data-end=\"3896\" data-start=\"3856\"><br/>So the estimated value is approximately $\\boxed{20,000\\text{ seconds}}$</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/546075/go-classes-dpp-gate-cs-da-algorithms-analysis-of-algorithms\" target=\"_blank\">GATE Overflow #546075</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"11732\" data-start=\"11612\">Let $T_A(n)$ and $T_B(n)$ denote the worst-case running times of two algorithms $A$ and $B$ that solve the same problem.</p><p data-end=\"11819\" data-start=\"11734\">We say that $A$ is <strong data-end=\"11813\" data-start=\"11753\">asymptotically more efficient than $B$ in the worst case</strong> when:</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$T_A(n)=o(T_B(n))$<br/></span>",
                "<span style=\"display: inline;\">$T_B(n)=o(T_A(n))$<br/></span>",
                "<span style=\"display: inline;\">$T_A(n)=O(T_B(n))$<br/></span>",
                "<span style=\"display: inline;\">$T_B(n)=O(T_A(n))$<br/></span>",
                "<span style=\"display: inline;\">$T_A(n)=\\Theta(T_B(n))$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"545836\"></a><div itemprop=\"text\"><p data-end=\"12000\" data-start=\"11987\">The notation, </p><p data-end=\"12020\" data-start=\"12002\">$T_A(n)=o(T_B(n))$</p><p data-end=\"12076\" data-start=\"12022\">means that $T_A$ grows <strong data-end=\"12064\" data-start=\"12045\">strictly slower</strong> than $T_B$.</p><p data-end=\"12087\" data-start=\"12078\"><br/>Formally, $\\lim_{n\\to\\infty}\\dfrac{T_A(n)}{T_B(n)}=0$</p><p data-end=\"12145\" data-start=\"12133\">For eg : $T_A(n)=n$ and $T_B(n)=n^2$</p><p data-end=\"12184\" data-start=\"12179\">Then,</p><p data-end=\"12221\" data-start=\"12186\">$\\dfrac{n}{n^2}=\\dfrac1n\\rightarrow0$</p><p data-end=\"12267\" data-start=\"12223\">Therefore $A$ becomes asymptotically faster.</p><p data-end=\"12284\" data-start=\"12269\">Why not merely $T_A=O(T_B)$?</p><p data-end=\"12344\" data-start=\"12301\">Because Big-O permits the same growth rate.</p><p data-end=\"12358\" data-start=\"12346\">For ex, $n=O(n)$ but one algorithm is not asymptotically strictly more efficient simply because both are $\\Theta(n)$.</p><p data-end=\"12502\" data-start=\"12472\">Hence the correct relation is:</p><p data-end=\"12530\" data-start=\"12504\">$\\boxed{T_A(n)=o(T_B(n))}$</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/545835/go-classes-dpp-gate-cs-da-algorithms-asymptotic-analysis\" target=\"_blank\">GATE Overflow #545835</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"120\" data-start=\"0\">Consider the following recursive function $\\texttt{Pot}$, which computes $x^n$, where $x$ is real and $n$ is an integer.</p><pre class=\"prettyprint linenums lang-text\" data-linenums=\"true\" data-pbcklang=\"text\" data-pbcktabsize=\"4\" data-rawcode=\"Pot(x, n): if x == 0: return 0 if n == 0: return 1 if n &lt; 0: return 1 / Pot(x, abs(n)) if n is odd: return x * square(Pot(x, (n - 1) / 2)) else: return square(Pot(x, n / 2))\">Pot(x, n): if x == 0: return 0 if n == 0: return 1 if n &lt; 0: return 1 / Pot(x, abs(n)) if n is odd: return x * square(Pot(x, (n - 1) / 2)) else: return square(Pot(x, n / 2))</pre><p data-end=\"170\" data-start=\"122\">Assume $\\texttt{square(y)}$ takes constant time.</p><p data-end=\"230\" data-start=\"172\">Let $T(n)$ denote the running time of $\\texttt{Pot(x,n)}$.</p><p data-end=\"268\" data-start=\"232\">What is the asymptotic running time?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$O(1)$<br/></span>",
                "<span style=\"display: inline;\">$O(\\log n)$<br/></span>",
                "<span style=\"display: inline;\">$O(n)$<br/></span>",
                "<span style=\"display: inline;\">$O(n\\log n)$<br/></span>",
                "<span style=\"display: inline;\">$O(n^2)$</span>"
            ],
            "answer": "B",
            "solution": "<div class=\"solution-content\"><a name=\"545703\"></a><div itemprop=\"text\"><p data-end=\"1402\" data-start=\"1331\">In every recursive call, the exponent is reduced approximately by half:</p><p data-end=\"1422\" data-start=\"1404\">$n\\rightarrow n/2$</p><p data-end=\"1475\" data-start=\"1424\">There is only <strong data-end=\"1460\" data-start=\"1438\">one recursive call</strong> at each level.</p><p data-end=\"1487\" data-start=\"1477\">$\\therefore T(n)=T(n/2)+O(1)$</p><p data-end=\"1536\" data-start=\"1509\">After $k$ recursive levels:</p><p data-end=\"1555\" data-start=\"1538\">$\\frac{n}{2^k}=1$</p><p data-end=\"1562\" data-start=\"1557\">$\\Rightarrow 2^k=n$</p><p data-end=\"1577\" data-start=\"1573\">$\\Rightarrow k=\\log_2 n$</p><p data-end=\"1599\" data-start=\"1593\">Hence,</p><p data-end=\"1622\" data-start=\"1601\">$\\boxed{T(n)=\\Theta(\\log n)}$</p><p data-end=\"1634\" data-start=\"1624\"><br/><strong>Answer : B</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/545702/go-classes-dpp-gate-cs-da-algorithms-complexity-analysis\" target=\"_blank\">GATE Overflow #545702</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"1174\" data-start=\"1142\">Consider the following functions</p><p data-end=\"1196\" data-start=\"1176\">$f(n)=3n^{\\sqrt{n}}$</p><p data-end=\"1225\" data-start=\"1198\">$g(n)=2^{\\sqrt{n}\\log_2 n}$</p><p data-end=\"1236\" data-start=\"1227\">$h(n)=n!$</p><p data-end=\"1269\" data-start=\"1238\">Which of the following is true?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$h(n)$ is $O(f(n))$<br/></span>",
                "<span style=\"display: inline;\">$h(n)$ is $O(g(n))$<br/></span>",
                "<span style=\"display: inline;\">$g(n)\\neq O(f(n))$<br/></span>",
                "<span style=\"display: inline;\">$f(n)$ is $O(g(n))$</span>"
            ],
            "answer": "D",
            "solution": "<div class=\"solution-content\"><a name=\"543273\"></a><div itemprop=\"text\"><p data-end=\"1443\" data-start=\"1421\">First simplify $g(n)$:</p><p data-end=\"1472\" data-start=\"1445\">$g(n)=2^{\\sqrt{n}\\log_2 n}$</p><p data-end=\"1480\" data-start=\"1474\">Using, $2^{\\log_2 n}=n$</p><p data-end=\"1507\" data-start=\"1500\">we get, $g(n)=n^{\\sqrt{n}}$</p><p data-end=\"1534\" data-start=\"1530\">Now,</p><p data-end=\"1556\" data-start=\"1536\">$f(n)=3n^{\\sqrt{n}}$ and $g(n)=n^{\\sqrt{n}}$</p><p data-end=\"1595\" data-start=\"1585\">$\\therefore f(n)=3g(n)$</p><p data-end=\"1649\" data-start=\"1611\">They differ only by a constant factor.</p><p data-end=\"1657\" data-start=\"1651\">Hence,</p><p data-end=\"1678\" data-start=\"1659\">$f(n)=\\Theta(g(n))$</p><p data-end=\"1690\" data-start=\"1680\">$\\therefore f(n)=O(g(n))$</p><p data-end=\"1730\" data-start=\"1708\">So option (D) is true.</p><p data-end=\"1814\" data-start=\"1732\">Also, $n!$ grows much faster than $n^{\\sqrt n}$, so options (A) and (B) are false.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/543272/go-classes-dpp-gate-cs-da-algorithms-asymptotic-analysis\" target=\"_blank\">GATE Overflow #543272</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"921\" data-start=\"820\">Two sorted subarrays, each containing $n/2$ elements, are merged into one sorted array of length $n$.</p><p data-end=\"1004\" data-start=\"923\">What is the possible range for the number of key comparisons made during merging?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">Approximately $n/4$ to $n/2$<br/></span>",
                "<span style=\"display: inline;\">Approximately $n/2$<br/></span>",
                "<span style=\"display: inline;\">Approximately $n/2$ to $n$<br/></span>",
                "<span style=\"display: inline;\">Approximately $n$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"542941\"></a><div itemprop=\"text\"><p data-end=\"1330\" data-start=\"1258\">During merging, the first unmerged element of each subarray is compared.</p><p data-end=\"1346\" data-start=\"1332\"><strong>Best case</strong></p><p data-end=\"1445\" data-start=\"1348\">Suppose every element of the first subarray is smaller than every element of the second subarray.</p><p data-end=\"1613\" data-start=\"1447\">After comparing and copying all $n/2$ elements of the first subarray, it becomes empty. </p><p data-end=\"1613\" data-start=\"1447\">The remaining second-half elements are copied without further key comparisons.</p><p data-end=\"1625\" data-start=\"1615\">$\\therefore C_{\\min}(n)=\\frac{n}{2}$</p><p data-end=\"1669\" data-start=\"1654\"><br/><strong>Worst case</strong></p><p data-end=\"1811\" data-start=\"1671\">The worst case occurs when the elements of the two subarrays are interleaved. </p><p data-end=\"1811\" data-start=\"1671\">Neither subarray becomes empty until only one element remains.</p><p data-end=\"1823\" data-start=\"1813\">$\\therefore C_{\\max}(n)=n-1$</p><p data-end=\"1864\" data-start=\"1844\"><br/>Hence, the range is:</p><p data-end=\"1896\" data-start=\"1866\">$\\frac{n}{2}\\leq C(n)\\leq n-1$</p><p data-end=\"1949\" data-start=\"1898\">Asymptotically, this is approximately $n/2$ to $n$.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/542940/go-classes-dpp-gate-cs-da-algorithms-merge-comparison\" target=\"_blank\">GATE Overflow #542940</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"2642\" data-start=\"2598\">Initially, there are three sorted sequences:</p><p data-end=\"2663\" data-start=\"2644\">$(3,5), (7,9), (6)$</p><p data-end=\"2755\" data-start=\"2665\">They are merged by choosing sorted sequences from <strong data-end=\"2732\" data-start=\"2715\">left to right</strong> using two-way merging.</p><p data-end=\"2801\" data-start=\"2757\">How many total key comparisons are required?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$3$<br/></span>",
                "<span style=\"display: inline;\">$4$<br/></span>",
                "<span style=\"display: inline;\">$5$<br/></span>",
                "<span style=\"display: inline;\">$6$</span>"
            ],
            "answer": "C",
            "solution": "<div class=\"solution-content\"><a name=\"542792\"></a><div itemprop=\"text\"><p style=\"text-align:center\"><img alt=\"\" height=\"499\" src=\"https://cdn.mathpix.com/snip/images/k03XSCtv3f9vK12DOj8PjDfHKzFNVWrGdib2S297VSM.original.fullsize.png\" width=\"404\"/></p><p data-end=\"62\" data-start=\"14\"> </p><p data-end=\"62\" data-start=\"14\">The sequences are merged from <strong data-end=\"61\" data-start=\"44\">left to right</strong>.</p><p data-end=\"102\" data-start=\"64\"><br/>Step $1:$ Merge $(3,5)$ and $(7,9)$</p><p data-end=\"116\" data-start=\"104\">Comparisons:</p><p data-end=\"123\" data-start=\"118\">$3&lt;7$</p><p data-end=\"130\" data-start=\"125\">$5&lt;7$</p><p data-end=\"148\" data-start=\"132\">Merged sequence:</p><p data-end=\"161\" data-start=\"150\">$(3,5,7,9)$</p><p data-end=\"189\" data-start=\"163\">Number of comparisons $=2$</p><p data-end=\"231\" data-start=\"191\"><br/>Step $2:$ Merge $(3,5,7,9)$ and $(6)$</p><p data-end=\"245\" data-start=\"233\">Comparisons:</p><p data-end=\"252\" data-start=\"247\">$3&lt;6$</p><p data-end=\"259\" data-start=\"254\">$5&lt;6$</p><p data-end=\"266\" data-start=\"261\">$7&gt;6$</p><p data-end=\"284\" data-start=\"268\">Merged sequence:</p><p data-end=\"299\" data-start=\"286\">$(3,5,6,7,9)$</p><p data-end=\"327\" data-start=\"301\">Number of comparisons $=3$</p><p data-end=\"362\" data-start=\"329\"><br/>Therefore, total comparisons are $: 2+3=5$</p><p data-end=\"399\" data-start=\"373\"><br/><strong>Answer : C</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/542787/go-classes-dpp-gate-cs-da-algorithms-merge-operation\" target=\"_blank\">GATE Overflow #542787</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"5458\" data-start=\"5437\">Solve the recurrence:</p><p data-end=\"5482\" data-start=\"5460\">$T(n) = 4T(n/2) + n^2$</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\Theta(n^2)$<br/></span>",
                "<span style=\"display: inline;\">$\\Theta(n^2\\log n)$<br/></span>",
                "<span style=\"display: inline;\">$\\Theta(n^{\\log_2 4})$<br/></span>",
                "<span style=\"display: inline;\">$\\Theta(n^3)$</span>"
            ],
            "answer": "B",
            "solution": "<div class=\"solution-content\"><a name=\"542138\"></a><div itemprop=\"text\"><p data-end=\"1120\" data-start=\"1114\">Given:</p><p data-end=\"1144\" data-start=\"1122\">$T(n) = 4T(n/2) + n^2$</p><p data-end=\"1159\" data-start=\"1146\">Compare with:</p><p data-end=\"1184\" data-start=\"1161\">$T(n) = aT(n/b) + f(n)$</p><p data-end=\"1191\" data-start=\"1186\">Here:</p><p data-end=\"1200\" data-start=\"1193\">$a = 4$</p><p data-end=\"1209\" data-start=\"1202\">$b = 2$</p><p data-end=\"1223\" data-start=\"1211\">$f(n) = n^2$</p><p data-end=\"1239\" data-start=\"1225\">Now calculate:</p><p data-end=\"1270\" data-start=\"1241\">$n^{\\log_b a} = n^{\\log_2 4}$</p><p data-end=\"1278\" data-start=\"1272\">Since:</p><p data-end=\"1294\" data-start=\"1280\">$\\log_2 4 = 2$</p><p data-end=\"1299\" data-start=\"1296\">So:</p><p data-end=\"1321\" data-start=\"1301\">$n^{\\log_2 4} = n^2$</p><p data-end=\"1362\" data-start=\"1323\">Now compare $f(n)$ with $n^{\\log_b a}$:</p><p data-end=\"1376\" data-start=\"1364\">$f(n) = n^2$</p><p data-end=\"1381\" data-start=\"1378\">and</p><p data-end=\"1403\" data-start=\"1383\">$n^{\\log_b a} = n^2$</p><p data-end=\"1425\" data-start=\"1405\">Both are same order.</p><p data-end=\"1464\" data-start=\"1427\">So this is <strong data-end=\"1463\" data-start=\"1438\">Master Theorem Case 2</strong>.</p><p data-end=\"1477\" data-start=\"1466\">For Case 2:</p><p data-end=\"1514\" data-start=\"1479\">$T(n) = \\Theta(n^{\\log_b a}\\log n)$</p><p data-end=\"1526\" data-start=\"1516\">Therefore:</p><p data-end=\"1555\" data-start=\"1528\">$T(n) = \\Theta(n^2 \\log n)$</p><p data-end=\"1570\" data-start=\"1557\">Final answer: $\\boxed{\\Theta(n^2 \\log n)}$</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/542136/go-classes-dpp-gate-cs-da-algorithms-masters-theorem\" target=\"_blank\">GATE Overflow #542136</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"4963\" data-start=\"4942\">Solve the recurrence:</p><p data-end=\"4987\" data-start=\"4965\">$T(n) = 7T(n/2) + n^3$</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\Theta(n^{\\log_2 7})$<br/></span>",
                "<span style=\"display: inline;\">$\\Theta(n^3)$<br/></span>",
                "<span style=\"display: inline;\">$\\Theta(n^3\\log n)$<br/></span>",
                "<span style=\"display: inline;\">$\\Theta(n^2)$</span>"
            ],
            "answer": "B",
            "solution": "<div class=\"solution-content\"><a name=\"542137\"></a><div itemprop=\"text\"><p data-end=\"641\" data-start=\"635\">Given:</p><p data-end=\"665\" data-start=\"643\">$T(n) = 7T(n/2) + n^3$</p><p data-end=\"680\" data-start=\"667\">Compare with:</p><p data-end=\"705\" data-start=\"682\">$T(n) = aT(n/b) + f(n)$</p><p data-end=\"712\" data-start=\"707\">Here:</p><p data-end=\"721\" data-start=\"714\">$a = 7$</p><p data-end=\"730\" data-start=\"723\">$b = 2$</p><p data-end=\"744\" data-start=\"732\">$f(n) = n^3$</p><p data-end=\"760\" data-start=\"746\">Now calculate:</p><p data-end=\"791\" data-start=\"762\">$n^{\\log_b a} = n^{\\log_2 7}$</p><p data-end=\"799\" data-start=\"793\">Since:</p><p data-end=\"825\" data-start=\"801\">$\\log_2 7 \\approx 2.807$</p><p data-end=\"830\" data-start=\"827\">So:</p><p data-end=\"858\" data-start=\"832\">$n^{\\log_2 7} = n^{2.807}$</p><p data-end=\"899\" data-start=\"860\">Now compare $f(n)$ with $n^{\\log_b a}$:</p><p data-end=\"913\" data-start=\"901\">$f(n) = n^3$</p><p data-end=\"964\" data-start=\"915\">$n^3$ grows polynomially faster than $n^{2.807}$.</p><p data-end=\"1003\" data-start=\"966\">So this is <strong data-end=\"1002\" data-start=\"977\">Master Theorem Case 3</strong>.</p><p data-end=\"1015\" data-start=\"1005\">Therefore:</p><p data-end=\"1052\" data-start=\"1017\">$T(n) = \\Theta(f(n)) = \\Theta(n^3)$</p><p data-end=\"1067\" data-start=\"1054\">Final answer: $\\boxed{\\Theta(n^3)}$</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/542134/go-classes-dpp-gate-cs-da-algorithms-masters-theorem\" target=\"_blank\">GATE Overflow #542134</a></small></div>"
        }
    ]
});

registerTest({
    "name": "DPP 02 - Algorithms (Asymptotic Analysis & Recurrences - Part 2)",
    "testLabel": "DPP 02",
    "testType": "DPP",
    "bracket": "Asymptotic Analysis & Recurrences - Part 2",
    "subject": "algo",
    "series": "cse-dpp-2027",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 10,
    "topicsCovered": "Asymptotic Analysis & Recurrences (Practice Set 2)",
    "questions": [
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"4470\" data-start=\"4449\">Solve the recurrence:</p><p data-end=\"4501\" data-start=\"4472\">$T(n) = 10T(n/3) + 17n^{1.2}$<br/> </p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$O(n^{1.2})$<br/></span>",
                "<span style=\"display: inline;\">$O(n^{\\log_3 10})$<br/></span>",
                "<span style=\"display: inline;\">$O(n^{1.2}\\log n)$<br/></span>",
                "<span style=\"display: inline;\">$O(n^3)$</span>"
            ],
            "answer": "B",
            "solution": "<div class=\"solution-content\"><a name=\"542133\"></a><div itemprop=\"text\"><p data-end=\"33\" data-start=\"8\">$T(n)=10T(n/3)+17n^{1.2}$</p><p data-end=\"60\" data-start=\"35\">Using the Master Theorem:</p><p data-end=\"97\" data-start=\"62\">$a=10$, $b=3$, and $f(n)=17n^{1.2}$</p><p data-end=\"109\" data-start=\"99\">Calculate:</p><p data-end=\"139\" data-start=\"111\">$n^{\\log_b a}=n^{\\log_3 10}$</p><p data-end=\"217\" data-start=\"141\">Since $\\log_3 10\\approx 2.096$, $n^{1.2}$ grows slower than $n^{\\log_3 10}$.</p><p data-end=\"260\" data-start=\"219\">Therefore, this is Master Theorem Case $1$.</p><p data-end=\"290\" data-start=\"262\">$T(n)=\\Theta(n^{\\log_3 10})$</p><p data-end=\"321\" data-is-last-node=\"\" data-is-only-node=\"\" data-start=\"292\"><strong>Answer: B.</strong> $O(n^{\\log_3 10})$</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/542132/go-classes-dpp-gate-cs-da-algorithms-masters-theorem\" target=\"_blank\">GATE Overflow #542132</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"3949\" data-start=\"3928\">Solve the recurrence:</p><p data-end=\"3979\" data-start=\"3951\">$T(n) = 3T(n/5) + (\\log n)^2$<br/> </p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$O((\\log n)^2)$<br/></span>",
                "<span style=\"display: inline;\">$O(n^{\\log_5 3})$<br/></span>",
                "<span style=\"display: inline;\">$O(n)$<br/></span>",
                "<span style=\"display: inline;\">$O(n\\log n)$</span>"
            ],
            "answer": "B",
            "solution": "<div class=\"solution-content\"><a name=\"542129\"></a><div itemprop=\"text\"><p data-end=\"6\" data-start=\"0\">Given:</p><p data-end=\"33\" data-start=\"8\">$T(n)=3T(n/5)+(\\log n)^2$</p><p data-end=\"60\" data-start=\"35\">Using the Master Theorem:</p><p data-end=\"97\" data-start=\"62\">$a=3$, $b=5$, and $f(n)=(\\log n)^2$</p><p data-end=\"109\" data-start=\"99\">Calculate:</p><p data-end=\"138\" data-start=\"111\">$n^{\\log_b a}=n^{\\log_5 3}$</p><p data-end=\"223\" data-start=\"140\">Since $(\\log n)^2$ grows slower than $n^{\\log_5 3}$, this is Master Theorem Case $1$.</p><p data-end=\"235\" data-start=\"225\">Therefore:</p><p data-end=\"264\" data-start=\"237\">$T(n)=\\Theta(n^{\\log_5 3})$</p><p data-end=\"294\" data-is-last-node=\"\" data-is-only-node=\"\" data-start=\"266\"><br/><strong>Answer: B</strong> $O(n^{\\log_5 3})$</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/542128/go-classes-dpp-gate-cs-da-algorithms-masters-theorem\" target=\"_blank\">GATE Overflow #542128</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"2967\" data-start=\"2946\">Solve the recurrence:</p><p data-end=\"3006\" data-start=\"2969\">$T(n) = T(n/5) + T(4n/5) + O(n)$</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$O(n)$<br/></span>",
                "<span style=\"display: inline;\">$O(n\\log n)$<br/></span>",
                "<span style=\"display: inline;\">$O(n^2)$<br/></span>",
                "<span style=\"display: inline;\">$O(\\log n)$</span>"
            ],
            "answer": "B",
            "solution": "<div class=\"solution-content\"><a name=\"542126\"></a><div itemprop=\"text\"><p data-end=\"6\" data-start=\"0\">Given:</p><p data-end=\"34\" data-start=\"8\">$T(n)=T(n/5)+T(4n/5)+O(n)$</p><p data-end=\"110\" data-start=\"36\">At each level of the recursion tree, the total size of all subproblems is:</p><p data-end=\"124\" data-start=\"112\">$n/5+4n/5=n$</p><p data-end=\"176\" data-start=\"126\">Therefore, the total work at each level is $O(n)$.</p><p data-end=\"300\" data-start=\"178\">The longest branch repeatedly reduces the problem size by a factor of $4/5$, so the recursion tree has $O(\\log n)$ levels.</p><p data-end=\"307\" data-start=\"302\">Thus:</p><p data-end=\"335\" data-start=\"309\">$T(n)=O(n)\\cdot O(\\log n)$</p><p data-end=\"354\" data-start=\"337\">$\\boxed{T(n)=O(n\\log n)}$</p><p data-end=\"379\" data-is-last-node=\"\" data-is-only-node=\"\" data-start=\"356\"><strong>Answer: B</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/542124/go-classes-dpp-gate-cs-da-algorithms-asymptotic-complexity\" target=\"_blank\">GATE Overflow #542124</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"2407\" data-start=\"2386\">Solve the recurrence:</p><p data-end=\"2432\" data-start=\"2409\">$T(n) = T(n-2) + \\log n$</p><p data-end=\"2474\" data-start=\"2434\">Assume $T(n)$ is constant for small $n$.</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$O(\\log n)$<br/></span>",
                "<span style=\"display: inline;\">$O(n)$<br/></span>",
                "<span style=\"display: inline;\">$O(n\\log n)$<br/></span>",
                "<span style=\"display: inline;\">$O(n^2)$</span>"
            ],
            "answer": "C",
            "solution": "<div class=\"solution-content\"><a name=\"542119\"></a><div itemprop=\"text\"><p data-end=\"6\" data-start=\"0\">Given:</p><p data-end=\"28\" data-start=\"8\">$T(n)=T(n-2)+\\log n$</p><p data-end=\"55\" data-start=\"30\">Expanding the recurrence:</p><p data-end=\"87\" data-start=\"57\">$T(n)=T(n-4)+\\log(n-2)+\\log n$</p><p data-end=\"100\" data-start=\"89\">Continuing:</p><p data-end=\"141\" data-start=\"102\">$T(n)=T(0)+\\log 2+\\log 4+\\cdots+\\log n$</p><p data-end=\"183\" data-start=\"143\">There are about $n/2$ logarithmic terms.</p><p data-end=\"219\" data-start=\"185\">Each term is at most $\\log n$, so:</p><p data-end=\"241\" data-start=\"221\">$T(n)\\in O(n\\log n)$</p><p data-end=\"311\" data-start=\"243\">Also, a constant fraction of the terms are at least $\\log(n/2)$, so:</p><p data-end=\"338\" data-start=\"313\">$T(n)\\in \\Omega(n\\log n)$</p><p data-end=\"350\" data-start=\"340\">Therefore:</p><p data-end=\"377\" data-start=\"352\">$T(n)\\in \\Theta(n\\log n)$</p><p data-end=\"402\" data-is-last-node=\"\" data-is-only-node=\"\" data-start=\"379\"><br/><strong>Answer: C</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/542118/go-classes-dpp-gate-cs-da-algorithms-asymptotic-complexity\" target=\"_blank\">GATE Overflow #542118</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"1770\" data-start=\"1747\">For $T(n,n)$, consider:</p><p data-end=\"1807\" data-start=\"1772\">$T(x,c) = \\Theta(x)$ for $c \\leq 2$</p><p data-end=\"1840\" data-start=\"1809\">$T(x,y) = \\Theta(x) + S(x,y/2)$</p><p data-end=\"1877\" data-start=\"1842\">$S(c,y) = \\Theta(y)$ for $c \\leq 2$</p><p data-end=\"1910\" data-start=\"1879\">$S(x,y) = \\Theta(y) + T(x/2,y)$</p><p data-end=\"716\" data-start=\"670\"><br/>What is the asymptotic complexity of $T(n,n)$?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\Theta(\\log n)$<br/></span>",
                "<span style=\"display: inline;\">$\\Theta(n)$<br/></span>",
                "<span style=\"display: inline;\">$\\Theta(n\\log n)$<br/></span>",
                "<span style=\"display: inline;\">$\\Theta(n^2)$</span>"
            ],
            "answer": "B",
            "solution": "<div class=\"solution-content\"><a name=\"542117\"></a><div itemprop=\"text\">The correct answer here is $\\Theta(n)$. <br/> <br/> To see why, we want to first eliminate the mutually recursive recurrence relations. <br/> <br/> To do so, we will replace all references to the function $S(x, y)$ with the definition of $S(x, y)$. <br/> <br/> This yields the following recurrence relation for $T(x, y)$ : $$T(x, y)=\\Theta(x)+\\Theta(y / 2)+T(x / 2, y / 2) .$$ We can rewrite this to eliminate the constants and get the recurrence $T(x, y)=\\Theta(x+$ $y)+T(x / 2, y / 2)$. <br/> <br/> We may then begin to replace $T(x / 2, y / 2)$ with the recursive formula containing it: $$T(x, y)=c(x+y)+c\\left(\\frac{x+y}{2}\\right)+c\\left(\\frac{x+y}{4}\\right)+c\\left(\\frac{x+y}{8}\\right)+\\ldots$$ This geometric sequence is bounded from above by $2 c(x+y)$, and is obviously bounded from below by $c(x+y)$. <br/> <br/> Therefore, $T(x, y)$ is $\\Theta(x+y)$, and so $T(n, n)$ is $\\boxed{\\Theta(n)}$</div><br><br><small>Source: <a href=\"https://gateoverflow.in/542116/go-classes-dpp-gate-cs-da-algorithms-asymptotic-complexity\" target=\"_blank\">GATE Overflow #542116</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"1167\" data-start=\"1144\">For $T(n,n)$, consider:</p><p data-end=\"1204\" data-start=\"1169\">$T(x,c) = \\Theta(x)$ for $c \\leq 2$</p><p data-end=\"1241\" data-start=\"1206\">$T(c,y) = \\Theta(y)$ for $c \\leq 2$</p><p data-end=\"1274\" data-start=\"1243\">$T(x,y) = \\Theta(x) + T(x,y/2)$<br/> </p><p data-end=\"716\" data-start=\"670\">What is the asymptotic complexity of $T(n,n)$?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\Theta(\\log n)$<br/></span>",
                "<span style=\"display: inline;\">$\\Theta(n)$<br/></span>",
                "<span style=\"display: inline;\">$\\Theta(n\\log n)$<br/></span>",
                "<span style=\"display: inline;\">$\\Theta(n^2)$</span>"
            ],
            "answer": "C",
            "solution": "<div class=\"solution-content\"><a name=\"542115\"></a><div itemprop=\"text\">The correct answer is $\\Theta(n \\log n)$. <br/> <br/> To see why, we rewrite the recurrence relation to avoid $\\Theta$ notation as follows:<br/> <br/> $$T(x, y)=c x+T(x, y / 2) .$$ We may then begin to replace $T(x, y / 2)$ with the recursive formula containing it:<br/> <br/> $$T(x, y)=\\underbrace{c x+c x+c x+\\ldots+c x}_{\\Theta(\\log y) \\text { times }} .$$ As a result, $T(x, y)$ is $\\Theta(x \\log y)$. <br/> <br/> When we substitute $n$ for $x$ and $y$, we get that $T(n, n)$ is $\\boxed{\\Theta(n \\log n)}$</div><br><br><small>Source: <a href=\"https://gateoverflow.in/542114/go-classes-dpp-gate-cs-da-algorithms-asymptotic-complexity\" target=\"_blank\">GATE Overflow #542114</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"557\" data-start=\"534\">For $T(n,n)$, consider:</p><p data-end=\"594\" data-start=\"559\">$T(x,c) = \\Theta(x)$ for $c \\leq 2$</p><p data-end=\"631\" data-start=\"596\">$T(c,y) = \\Theta(y)$ for $c \\leq 2$</p><p data-end=\"668\" data-start=\"633\">$T(x,y) = \\Theta(x+y) + T(x/2,y/2)$</p><p data-end=\"716\" data-start=\"670\"><br/>What is the asymptotic complexity of $T(n,n)$?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\Theta(\\log n)$<br/></span>",
                "<span style=\"display: inline;\">$\\Theta(n)$<br/></span>",
                "<span style=\"display: inline;\">$\\Theta(n\\log n)$<br/></span>",
                "<span style=\"display: inline;\">$\\Theta(n^2)$</span>"
            ],
            "answer": "B",
            "solution": "<div class=\"solution-content\"><a name=\"542113\"></a><div itemprop=\"text\">The correct answer is $\\Theta(n)$.<br/> <br/> To see why, we rewrite the recurrence relation to avoid $\\Theta$ notation as follows:<br/> $$T(x, y)=c(x+y)+T(x / 2, y / 2).$$We may then begin to replace $T(x / 2, y / 2)$ with the recursive formula containing it:<br/> $$T(x, y)=c(x+y)+c\\left(\\frac{x+y}{2}\\right)+c\\left(\\frac{x+y}{4}\\right)+c\\left(\\frac{x+y}{8}\\right)+\\ldots$$ This geometric sequence is bounded from above by $2 c(x+y)$, and is obviously bounded from below by $c(x+y)$.<br/> <br/> Therefore, $T(x, y)$ is $\\Theta(x+y)$, and so $T(n, n)$ is $\\boxed{\\Theta(n)}$</div><br><br><small>Source: <a href=\"https://gateoverflow.in/542112/go-classes-dpp-gate-cs-da-algorithms-asymptotic-complexity\" target=\"_blank\">GATE Overflow #542112</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"3514\" data-start=\"3470\">Consider the following recursive C function:</p><pre class=\"prettyprint linenums lang-c_cpp\" data-end=\"3638\" data-linenums=\"true\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"\" data-rawcode=\"int fun(int n) { if (n &lt;= 1) { return n; } else { return fun(n - 1) + fun(n - 2); } }\" data-start=\"3516\">int fun(int n) { if (n &lt;= 1) { return n; } else { return fun(n - 1) + fun(n - 2); } }</pre><p data-end=\"3680\" data-start=\"3640\">What is the time complexity of $\\texttt{fun(n)}$?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$O(n)$<br/></span>",
                "<span style=\"display: inline;\">$O(\\log n)$<br/></span>",
                "<span style=\"display: inline;\">$O(n^2)$<br/></span>",
                "<span style=\"display: inline;\">$O(2^n)$</span>"
            ],
            "answer": "D",
            "solution": "<div class=\"solution-content\"><a name=\"542023\"></a><div itemprop=\"text\"><p data-end=\"4146\" data-start=\"4106\">This function makes two recursive calls:</p><p data-end=\"4158\" data-start=\"4148\">$\\texttt{fun(n - 1)}$ and $\\texttt{fun(n - 2)}$</p><p data-end=\"4198\" data-start=\"4177\">So the recurrence is:</p><p data-end=\"4231\" data-start=\"4200\">$T(n) = T(n-1) + T(n-2) + O(1)$</p><p data-end=\"4277\" data-start=\"4233\">This is similar to the Fibonacci recurrence.</p><p data-end=\"4362\" data-start=\"4279\">The recursion tree branches repeatedly. Many values are recomputed again and again.</p><p style=\"text-align:center\"><img alt=\"\" height=\"367\" src=\"https://cdn.mathpix.com/snip/images/pyju9riMzWSJHiyQguAbP5LX1-IdRoxcjkRXvKREbvQ.original.fullsize.png\" width=\"555\"/></p><p data-end=\"4448\" data-start=\"4364\"><strong>Answer : D</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/542017/go-classes-dpp-gate-cs-algorithms-code-complexity\" target=\"_blank\">GATE Overflow #542017</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"2804\" data-start=\"2774\">Consider the following C code:</p><pre class=\"prettyprint linenums lang-c_cpp\" data-end=\"2982\" data-linenums=\"true\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"\" data-rawcode=\"int total = 0; for (int i = 0; i &lt; n; i++) { for (int j = 0; j &lt; n; j++) { for (int k = 0; k &lt; n; k++) { total += i * j * k; } } }\" data-start=\"2806\">int total = 0; for (int i = 0; i &lt; n; i++) { for (int j = 0; j &lt; n; j++) { for (int k = 0; k &lt; n; k++) { total += i * j * k; } } }</pre><p data-end=\"3012\" data-start=\"2984\">What is the time complexity?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$O(n)$<br/></span>",
                "<span style=\"display: inline;\">$O(n^2)$<br/></span>",
                "<span style=\"display: inline;\">$O(n^3)$<br/></span>",
                "<span style=\"display: inline;\">$O(\\log n)$</span>"
            ],
            "answer": "C",
            "solution": "<div class=\"solution-content\"><a name=\"542020\"></a><div itemprop=\"text\"><p data-end=\"3553\" data-start=\"3523\">The outer loop runs $n$ times.</p><p data-end=\"3615\" data-start=\"3555\">For every value of $i$, the middle loop also runs $n$ times.</p><p data-end=\"3672\" data-start=\"3617\">For every pair $(i, j)$, the inner loop runs $n$ times.</p><p data-end=\"3738\" data-start=\"3674\">So the total number of executions of the innermost statement is:</p><p data-end=\"3767\" data-start=\"3740\">$n \\times n \\times n = n^3$</p><p data-end=\"3783\" data-start=\"3769\">The statement:</p><p data-end=\"3805\" data-start=\"3785\">$\\texttt{total += i * j * k}$</p><p data-end=\"3827\" data-start=\"3807\">takes constant time.</p><p data-end=\"3865\" data-start=\"3829\">Therefore, total time complexity is: $O(n^3)$</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/542015/go-classes-dpp-gate-cs-algorithms-code-complexity\" target=\"_blank\">GATE Overflow #542015</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Suppose $f(n) \\in \\Omega(n^2)$.</p><p>Classify the following statements:</p><p>Which option is correct?</p><p><strong>Given Details:</strong></p><ul><li>$\\text{S1}$. $f(n) \\in \\Omega(n^3)$</li><li>$\\text{S2}$. $f(n) \\in \\Omega(n)$</li><li>$\\text{S3}$. $f(n) \\in O(n)$</li><li>$\\text{S4}$. $f(n)$ has a Big-Theta bound.</li></ul></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\text{S1}$: Always, $\\text{S2}$: Always, $\\text{S3}$: Never, $\\text{S4}$: Always</span>",
                "<span style=\"display: inline;\">$\\text{S1}$: Sometimes, $\\text{S2}$: Always, $\\text{S3}$: Never, $\\text{S4}$: Sometimes</span>",
                "<span style=\"display: inline;\">$\\text{S1}$: Never, $\\text{S2}$: Always, $\\text{S3}$: Sometimes, $\\text{S4}$: Sometimes</span>",
                "<span style=\"display: inline;\">$\\text{S1}$: Sometimes, $\\text{S2}$: Sometimes, $\\text{S3}$: Never, $\\text{S4}$: Never</span>"
            ],
            "answer": "B",
            "solution": "<div class=\"solution-content\"><a name=\"542013\"></a><div itemprop=\"text\"><p>$\\text{S1}:$ SOMETIMES. For example $f(n)=n^2$ is $\\Omega\\left(n^2\\right)$ but not $\\Omega\\left(n^3\\right)$ while $f(n)=n^3$ is in both.</p><p>$\\text{S2}:$ ALWAYS. Any function lower-bounded by $n^2$ will also be lower-bounded by $n$.</p><p>$\\text{S3}:$ NEVER. A function that is lower-bounded by $n^2$ can’t also be upper-bounded by $n$.</p><p>$\\text{S4}:$ SOMETIMES. If $f(n)$ is also in $O(n^2)$, then it will have a Big-Theta bound, but we’d need more information to know. There are functions that have different Big-Oh and Big-Omega bounds and therefore do not have a Big-Theta</p><p><strong>Answer : B</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/542012/go-classes-dpp-gate-cs-da-algorithms-asymptotic-growth\" target=\"_blank\">GATE Overflow #542012</a></small></div>"
        }
    ]
});

registerTest({
    "name": "DPP 03 - Algorithms (Asymptotic Analysis & Recurrences - Part 3)",
    "testLabel": "DPP 03",
    "testType": "DPP",
    "bracket": "Asymptotic Analysis & Recurrences - Part 3",
    "subject": "algo",
    "series": "cse-dpp-2027",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 11,
    "topicsCovered": "Asymptotic Analysis & Recurrences (Practice Set 3)",
    "questions": [
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"1317\" data-start=\"1244\">Arrange the following functions in increasing order of asymptotic growth:</p><p data-end=\"1341\" data-start=\"1319\">$f_1(n) = n^{\\sqrt n}$</p><p data-end=\"1357\" data-start=\"1343\">$f_2(n) = 2^n$</p><p data-end=\"1389\" data-start=\"1359\">$f_3(n) = n^{10}\\cdot 2^{n/2}$</p><p data-end=\"1421\" data-start=\"1391\">$f_4(n) = \\sum_{i=1}^{n}(i+1)$<br/> </p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$f_4(n) < f_1(n) < f_3(n) < f_2(n)$<br/></span>",
                "<span style=\"display: inline;\">$f_4(n) < f_3(n) < f_1(n) < f_2(n)$<br/></span>",
                "<span style=\"display: inline;\">$f_1(n) < f_4(n) < f_3(n) < f_2(n)$<br/></span>",
                "<span style=\"display: inline;\">$f_4(n) < f_1(n) < f_2(n) < f_3(n)$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"542010\"></a><div itemprop=\"text\">The correct ordering of these functions is $f_4(n)&lt; f_1(n)&lt; f_3(n)&lt; f_2(n)$.<br/> <br/> To see why, we first use the rules of arithmetic series to derive a simpler formula for $f_4(n)$ :<br/> $$f_4(n)=\\sum_{i=1}^n(i+1)=\\frac{n((n+1)+2)}{2}=\\frac{n(n+3)}{2}=\\Theta\\left(n^2\\right)$$ This is clearly asymptotically smaller than $f_1(n)=n^{\\sqrt{n}}$.<br/> <br/> Next, we want to compare $f_1(n), f_2(n)$, and $f_3(n)$.<br/> <br/> To do so, we transform both $f_1(n)$ and $f_3(n)$ so that they look more like $f_3(n)$ :<br/> $$<br/> \\begin{aligned}<br/> &amp; f_1(n)=n^{\\sqrt{n}}=\\left(2^{\\log n}\\right)^{\\sqrt{n}}=2^{\\sqrt{n} \\cdot \\log n} \\\\<br/> &amp; f_3(n)=n^{10} \\cdot 2^{n / 2}=2^{\\log \\left(n^{10}\\right)} \\cdot 2^{n / 2}=2^{n / 2+10 \\log n}<br/> \\end{aligned}<br/> $$ <br/> The exponent of the $2$ in $f_1(n)$ is a function that grows more slowly than linear time; the exponent of the $2$ in $f_3(n)$ is a function that grows linearly with $n$.<br/> <br/> Therefore, $f_1(n)=O\\left(f_3(n)\\right)$.<br/> <br/> Finally, we wish to compare $f_3(n)$ with $f_2(n)$. Both have a linear function of $n$ in their exponent, so it's tempting to say that they behave the same asymptotically, but they do not. If $c$ is any constant and $g(x)$ is a function, then $2^{c g(x)}=\\left(2^c\\right)^{g(x)}$.<br/> <br/> Hence, changing the constant of the function in the exponent is the same as changing the base of the exponent, which does affect the asymptotic running time.<br/> <br/> Hence, $f_3(n)$ is $O\\left(f_2(n)\\right)$, but $f_2(n)$ is not $O\\left(f_3(n)\\right)$.</div><br><br><small>Source: <a href=\"https://gateoverflow.in/542009/go-classes-dpp-gate-cs-da-algorithms-asymptotic-growth\" target=\"_blank\">GATE Overflow #542009</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"570\" data-start=\"497\">Arrange the following functions in increasing order of asymptotic growth:</p><p data-end=\"598\" data-start=\"572\">$f_1(n) = 2^{2^{1000000}}$</p><p data-end=\"622\" data-start=\"600\">$f_2(n) = 2^{100000n}$</p><p data-end=\"647\" data-start=\"624\">$f_3(n) = {}^{n}C_{2}$</p><p data-end=\"668\" data-start=\"649\">$f_4(n) = n\\sqrt n$<br/> </p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$f_1(n) < f_4(n) < f_3(n) < f_2(n)$<br/></span>",
                "<span style=\"display: inline;\">$f_1(n) < f_3(n) < f_4(n) < f_2(n)$<br/></span>",
                "<span style=\"display: inline;\">$f_4(n) < f_1(n) < f_3(n) < f_2(n)$<br/></span>",
                "<span style=\"display: inline;\">$f_1(n) < f_4(n) < f_2(n) < f_3(n)$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"542008\"></a><div itemprop=\"text\"><p>The correct order of these functions is $f_1(n)&lt; f_4(n)&lt; f_3(n)&lt; f_2(n)$. </p><p>The variable $n$ never appears in the formula for $f_1(n)$, so despite the multiple exponentials, $f_1(n)$ is constant. </p><p>Hence, it is asymptotically smaller than $f_4(n)$, which does grow with $n$. </p><p>We may rewrite the formula for $f_4(n)$ to be $f_4(n)=n \\sqrt{n}=n^{1.5}$. </p><p>The value of $f_3(n)={}^{n}C_{2}$ is given by the formula $n(n-1) / 2$, which is $\\Theta\\left(n^2\\right)$. </p><p>Hence, $f_4(n)=n^{1.5}=O\\left(n^2\\right)=O\\left(f_3(n)\\right)$. </p><p>Finally, $f_2(n)$ is exponential, while $f_3(n)$ is quadratic, meaning that $f_3(n)$ is $O\\left(f_2(n)\\right)$.</p><p><strong>Answer : A</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/542007/go-classes-dpp-gate-cs-da-algorithms-asymptotic-growth\" target=\"_blank\">GATE Overflow #542007</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"256\" data-start=\"226\">Consider the following C code:</p><pre class=\"prettyprint linenums lang-c_cpp\" data-end=\"387\" data-linenums=\"true\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"\" data-rawcode=\"int sum = 0; for (int i = 0; i &lt; n; i++) { sum += i; int k = n; while (k &gt; 0) { k = k / 2; } }\" data-start=\"258\">int sum = 0; for (int i = 0; i &lt; n; i++) { sum += i; int k = n; while (k &gt; 0) { k = k / 2; } }</pre><p data-end=\"417\" data-start=\"389\">What is the time complexity?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$O(n)$<br/></span>",
                "<span style=\"display: inline;\">$O(\\log n)$<br/></span>",
                "<span style=\"display: inline;\">$O(n \\log n)$<br/></span>",
                "<span style=\"display: inline;\">$O(n^2)$</span>"
            ],
            "answer": "C",
            "solution": "<div class=\"solution-content\"><a name=\"542002\"></a><div itemprop=\"text\"><p data-end=\"3310\" data-start=\"3274\">The outer $\\texttt{for}$ loop runs $n$ times.</p><p data-end=\"3342\" data-start=\"3312\">Inside each iteration, we set:</p><p data-end=\"3351\" data-start=\"3344\">$k = n$</p><p data-end=\"3405\" data-start=\"3353\">Then the $\\texttt{while}$ loop repeatedly divides $k$ by $2$:</p><p data-end=\"3460\" data-start=\"3407\">$n, \\frac{n}{2}, \\frac{n}{4}, \\frac{n}{8}, \\ldots, 1$</p><p data-end=\"3546\" data-start=\"3462\">The number of times we can divide $n$ by $2$ before reaching $0$ is proportional to:</p><p data-end=\"3558\" data-start=\"3548\">$\\log_2 n$</p><p data-end=\"3641\" data-start=\"3560\">So, the $\\texttt{while}$ loop takes $O(\\log n)$ time for each iteration of the outer loop.</p><p data-end=\"3657\" data-start=\"3643\">Total time is:</p><p data-end=\"3693\" data-start=\"3659\">$n \\times O(\\log n) = O(n \\log n)$</p><p data-end=\"3722\" data-start=\"3695\"><br/><strong>Answer : C</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/541994/go-classes-dpp-gate-cs-algorithms-loop-complexity\" target=\"_blank\">GATE Overflow #541994</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"3103\" data-start=\"3030\">Arrange the following functions in increasing order of asymptotic growth:</p><p data-end=\"3125\" data-start=\"3105\">$f_1(n) = \\log(n^n)$</p><p data-end=\"3148\" data-start=\"3127\">$f_2(n) = (\\log n)^n$</p><p data-end=\"3175\" data-start=\"3150\">$f_3(n) = \\log(n^{6006})$</p><p data-end=\"3203\" data-start=\"3177\">$f_4(n) = (\\log n)^{6006}$</p><p data-end=\"3231\" data-start=\"3205\">$f_5(n) = \\log\\log(6006n)$<br/> </p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\"><p>$f_5(n)&lt; f_3(n)&lt; f_4(n)&lt; f_1(n)&lt; f_2(n)$</p></span>",
                "<span style=\"display: inline;\"><p>$f_5(n)&lt; f_3(n)&lt; f_1(n)&lt; f_4(n)&lt; f_2(n)$</p></span>",
                "<span style=\"display: inline;\"><p>$f_3(n)&lt; f_5(n)&lt; f_4(n)&lt; f_1(n)&lt; f_2(n)$</p></span>",
                "<span style=\"display: inline;\"><p>$f_5(n)&lt; f_4(n)&lt; f_3(n)&lt; f_1(n)&lt; f_2(n)$</p></span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"542004\"></a><div itemprop=\"text\"><p data-end=\"3987\" data-start=\"3974\">For $f_1(n)$:</p><p data-end=\"4009\" data-start=\"3989\">$f_1(n) = \\log(n^n)$</p><p data-end=\"4039\" data-start=\"4011\">Using $\\log(a^b) = b\\log a$:</p><p data-end=\"4059\" data-start=\"4041\">$f_1(n) = n\\log n$</p><p data-end=\"4074\" data-start=\"4061\">For $f_3(n)$:</p><p data-end=\"4101\" data-start=\"4076\">$f_3(n) = \\log(n^{6006})$</p><p data-end=\"4124\" data-start=\"4103\">$f_3(n) = 6006\\log n$</p><p data-end=\"4129\" data-start=\"4126\">So:</p><p data-end=\"4158\" data-start=\"4131\">$f_3(n) \\in \\Theta(\\log n)$</p><p data-end=\"4173\" data-start=\"4160\">For $f_5(n)$:</p><p data-end=\"4201\" data-start=\"4175\">$f_5(n) = \\log\\log(6006n)$</p><p data-end=\"4257\" data-start=\"4203\">The constant $6006$ does not affect asymptotic growth.</p><p data-end=\"4262\" data-start=\"4259\">So:</p><p data-end=\"4295\" data-start=\"4264\">$f_5(n) \\in \\Theta(\\log\\log n)$</p><p data-end=\"4322\" data-start=\"4297\">Now compare growth rates.</p><p data-end=\"4364\" data-start=\"4324\">$\\log\\log n$ grows slower than $\\log n$.</p><p data-end=\"4369\" data-start=\"4366\">So:</p><p data-end=\"4388\" data-start=\"4371\">$f_5(n) &lt; f_3(n)$</p><p data-end=\"4426\" data-start=\"4390\">Next, compare $f_3(n)$ and $f_4(n)$.</p><p data-end=\"4457\" data-start=\"4428\">$f_3(n)$ grows like $\\log n$.</p><p data-end=\"4497\" data-start=\"4459\">$f_4(n)$ grows like $(\\log n)^{6006}$.</p><p data-end=\"4502\" data-start=\"4499\">So:</p><p data-end=\"4521\" data-start=\"4504\">$f_3(n) &lt; f_4(n)$</p><p data-end=\"4559\" data-start=\"4523\">Next, compare $f_4(n)$ and $f_1(n)$.</p><p data-end=\"4587\" data-start=\"4561\">$f_4(n) = (\\log n)^{6006}$</p><p data-end=\"4607\" data-start=\"4589\">$f_1(n) = n\\log n$</p><p data-end=\"4681\" data-start=\"4609\">Any positive power of $n$ grows faster than any fixed power of $\\log n$.</p><p data-end=\"4686\" data-start=\"4683\">So:</p><p data-end=\"4715\" data-start=\"4688\">$(\\log n)^{6006} &lt; n\\log n$</p><p data-end=\"4727\" data-start=\"4717\">Therefore:</p><p data-end=\"4746\" data-start=\"4729\">$f_4(n) &lt; f_1(n)$</p><p data-end=\"4787\" data-start=\"4748\">Finally, compare $f_1(n)$ and $f_2(n)$.</p><p data-end=\"4807\" data-start=\"4789\">$f_1(n) = n\\log n$</p><p data-end=\"4830\" data-start=\"4809\">$f_2(n) = (\\log n)^n$</p><p data-end=\"4921\" data-start=\"4832\">Since the exponent $n$ is applied to $\\log n$, $f_2(n)$ grows much faster than $n\\log n$.</p><p data-end=\"4926\" data-start=\"4923\">So:</p><p data-end=\"4945\" data-start=\"4928\">$f_1(n) &lt; f_2(n)$</p><p data-end=\"4978\" data-start=\"4947\">Therefore, increasing order is:</p><p data-end=\"5028\" data-start=\"4980\">$\\boxed{f_5(n)&lt; f_3(n)&lt; f_4(n)&lt; f_1(n)&lt; f_2(n)}$</p><p data-end=\"5055\" data-is-last-node=\"\" data-is-only-node=\"\" data-start=\"5030\"> </p><p data-end=\"5055\" data-is-last-node=\"\" data-is-only-node=\"\" data-start=\"5030\"><strong>Answer: A</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/541993/go-classes-dpp-gate-cs-da-algorithms-asymptotic-growth\" target=\"_blank\">GATE Overflow #541993</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Suppose we have three functions $f(n)$, $g(n)$, and $h(n)$ such that:</p><p>$f(n) \\in O(g(n))\\qquad$ and $\\qquad g(n) \\in O(h(n))$</p><p>Which of the following statements are guaranteed to be true?</p><p>$\\text{S1}:$ $f(n) \\in O(h(n))$</p><p>$\\text{S2}:$ $h(n) \\in \\Omega(f(n))$</p><p>$\\text{S3}:$ $f(n) + g(n) \\in O(g(n))$</p><p>$\\text{S4}:$ $f(n)\\cdot g(n) \\in O(h(n))$</p><p>$\\text{S5}:$ If we also know that $f(n) \\in \\Theta(h(n))$, then $g(n) \\in \\Theta(h(n))$</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\text{S1}$, $\\text{S2}$ and $\\text{S3}$ only<br/></span>",
                "<span style=\"display: inline;\">$\\text{S1}$, $\\text{S2}$, $\\text{S3}$ and $\\text{S5}$ only<br/></span>",
                "<span style=\"display: inline;\">$\\text{S1}$, $\\text{S4}$ and $\\text{S5}$ only<br/></span>",
                "<span style=\"display: inline;\">$\\text{S1}$, $\\text{S2}$, $\\text{S3}$, $\\text{S4}$ and $\\text{S5}$</span>"
            ],
            "answer": "B",
            "solution": "<div class=\"solution-content\"><a name=\"542001\"></a><div itemprop=\"text\"><p>Given:</p><p>$f(n) \\in O(g(n)) \\qquad$ and $\\qquad g(n) \\in O(h(n))$</p><p>Now check each statement.</p><p>$\\text{S1}$: $f(n) \\in O(h(n))$</p><p>This is true.</p><p>Big-O is transitive.</p><p>If $f(n)$ grows no faster than $g(n)$, and $g(n)$ grows no faster than $h(n)$, then $f(n)$ grows no faster than $h(n)$.</p><p>So:</p><p>$f(n) \\in O(h(n))$</p><p><br/>$\\text{S2}$: $h(n) \\in \\Omega(f(n))$</p><p>This is also true.</p><p>The statement $h(n) \\in \\Omega(f(n))$ means $h(n)$ grows at least as fast as $f(n)$.</p><p>This is the same idea as:</p><p>$f(n) \\in O(h(n))$</p><p>Since $\\text{S1}$ is true, $\\text{S2}$ is also true.</p><p><br/>$\\text{S3}$: $f(n) + g(n) \\in O(g(n))$</p><p>This is true.</p><p>Since $f(n) \\in O(g(n))$, $f(n)$ is not asymptotically bigger than $g(n)$.</p><p>So adding $f(n)$ to $g(n)$ still gives a function bounded by $g(n)$.</p><p>Therefore:</p><p>$f(n) + g(n) \\in O(g(n))$</p><p><br/>$\\text{S4}$: $f(n)\\cdot g(n) \\in O(h(n))$</p><p>This is false.</p><p>Example:</p><p>Let $f(n) = n$, $g(n) = n$, and $h(n) = n$.</p><p>Then:</p><p>$f(n) \\in O(g(n))$</p><p>$g(n) \\in O(h(n))$</p><p>But:</p><p>$f(n)\\cdot g(n) = n^2$</p><p>And $n^2 \\notin O(n)$.</p><p>So, $\\text{S4}$ is false.</p><p><br/>$\\text{S5}$: If $f(n) \\in \\Theta(h(n))$, then $g(n) \\in \\Theta(h(n))$</p><p>This is true.</p><p>We already know:</p><p>$f(n) \\in O(g(n))$ and $g(n) \\in O(h(n))$</p><p>If additionally:</p><p>$f(n) \\in \\Theta(h(n))$</p><p>then $f(n)$ and $h(n)$ grow at the same rate.</p><p>Since $g(n)$ is squeezed between $f(n)$ and $h(n)$ asymptotically, $g(n)$ must also grow like $h(n)$.</p><p>So, $g(n) \\in \\Theta(h(n))$</p><p><br/>Therefore, true statements are: $\\text{S1}$, $\\text{S2}$, $\\text{S3}$, $\\text{S5}$<br/> </p><p><strong>Answer : B</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/541991/go-classes-dpp-gate-cs-da-algorithms-asymptotic-notations\" target=\"_blank\">GATE Overflow #541991</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"1127\" data-start=\"1096\">Suppose $g(n) \\in \\Theta(n^3)$.</p><p data-end=\"1179\" data-start=\"1129\">Which of the following statements are always true?</p><p><strong>Given Details:</strong></p><ul><li>$\\text{S1}:$ $g(n) \\in O(n^3)$</li><li>$\\text{S2}:$ $g(n) \\in \\Theta(n)$</li><li>$\\text{S3}:$ $g(n) \\in \\Omega(n)$</li></ul></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\text{S1}$ only</span>",
                "<span style=\"display: inline;\">$\\text{S1}$ and $\\text{S3}$ only</span>",
                "<span style=\"display: inline;\">$\\text{S2}$ and $\\text{S3}$ only</span>",
                "<span style=\"display: inline;\">$\\text{S1}$, $\\text{S2}$ and $\\text{S3}$</span>"
            ],
            "answer": "B",
            "solution": "<div class=\"solution-content\"><a name=\"541999\"></a><div itemprop=\"text\"><p>Given:</p><p>$g(n) \\in \\Theta(n^3)$</p><p>This means $g(n)$ grows exactly like $n^3$ up to constant factors.</p><p>Now check each statement.</p><p>$\\text{S1}$: $g(n) \\in O(n^3)$</p><p>This is true.</p><p>If $g(n) \\in \\Theta(n^3)$, then it automatically means:</p><p>$g(n) \\in O(n^3)$</p><p>So, $\\text{S1}$ is true.<br/> </p><p>$\\text{S2}$: $g(n) \\in \\Theta(n)$</p><p>This is false.</p><p>$g(n)$ grows like $n^3$, not like $n$.</p><p>So, $\\text{S2}$ is false.</p><p><br/>$\\text{S3}$: $g(n) \\in \\Omega(n)$</p><p>This is true.</p><p>Since $n^3$ grows faster than $n$, any function growing like $n^3$ is also lower bounded by $n$.</p><p>So, $g(n) \\in \\Omega(n)$</p><p><br/>Therefore, true statements are: $\\text{S1}$ and $\\text{S3}$</p><p><strong>Answer : B</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/541990/go-classes-dpp-gate-cs-da-algorithms-asymptotic-notations\" target=\"_blank\">GATE Overflow #541990</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"522\" data-start=\"449\">Arrange the following functions in increasing order of asymptotic growth:</p><p data-end=\"614\" data-start=\"600\"> </p><p><strong>Given Details:</strong></p><ul><li>$f_1(n) = n^{0.999999}\\log n$</li><li>$f_2(n) = 10000000n$</li><li>$f_3(n) = 1.000001^n$</li><li>$f_4(n) = n^2$</li></ul></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$f_1(n)&lt; f_2(n)&lt; f_4(n)&lt; f_3(n)$</span>",
                "<span style=\"display: inline;\">$f_1(n)&lt; f_4(n)&lt; f_2(n)&lt; f_3(n)$</span>",
                "<span style=\"display: inline;\">$f_2(n)&lt;f_1(n)&lt; f_4(n)&lt; f_3(n)$</span>",
                "<span style=\"display: inline;\">$f_1(n)&lt; f_2(n)&lt; f_3(n)&lt; f_4(n)$</span>"
            ],
            "answer": "B",
            "solution": "<div class=\"solution-content\"><a name=\"541997\"></a><div itemprop=\"text\"><p data-end=\"154\" data-start=\"134\">First compare $f_1(n)$ and $f_2(n)$ asymptotically.</p><p data-end=\"349\" data-start=\"320\">$f_1(n) = n^{0.999999}\\log n$</p><p data-end=\"371\" data-start=\"351\">$f_2(n) = 10000000n$</p><p data-end=\"371\" data-start=\"351\">Constants do not matter in asymptotic comparison, so $f_2(n)$ behaves like $n$.</p><p>To see why $f_1(n)$ grows asymptotically slower than $f_2(n)$, recall that for any $c&gt;0, \\log n$ is $O\\left(n^c\\right)$. </p><p>Therefore we have:</p><p>$$<br/>f_1(n)=n^{0.999999} \\log n=O\\left(n^{0.999999} \\cdot n^{0.000001}\\right)=O(n)=O\\left(f_2(n)\\right)<br/>$$</p><p data-end=\"452\" data-start=\"373\">$\\therefore f_1(n) &lt; f_2(n)$</p><p data-end=\"651\" data-start=\"646\">Next,</p><p data-end=\"708\" data-start=\"653\">$f_2(n)$ grows like $n$, and $f_4(n)$ grows like $n^2$.</p><p data-end=\"713\" data-start=\"710\">So:</p><p data-end=\"732\" data-start=\"715\">$f_2(n) &lt; f_4(n)$</p><p data-end=\"828\" data-start=\"734\">Finally, any exponential function with base greater than $1$ grows faster than any polynomial.</p><p data-end=\"833\" data-start=\"830\">So:</p><p data-end=\"852\" data-start=\"835\">$f_4(n) &lt; f_3(n)$</p><p data-end=\"885\" data-start=\"854\">Therefore, increasing order is:</p><p data-end=\"927\" data-start=\"887\">$\\boxed{f_1(n)&lt; f_2(n)&lt; f_4(n)&lt; f_3(n)}$</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/541989/go-classes-dpp-gate-cs-da-algorithms-growth-order-of-functions\" target=\"_blank\">GATE Overflow #541989</a></small></div>"
        },
        {
            "marks": 2,
            "neg": 0,
            "type": "MSQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>An algorithm performs a linear search for an element $k$ in an integer array of size $N$. The algorithm iterates through the array sequentially, starting from the first element, and stops as soon as $k$ is found or the end of the array is reached. Let $T(N)$ denote the time complexity function of this algorithm.</p><p>Which of the following statements are TRUE? (Select all that apply)</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\mathrm{T}(\\mathrm{N})$ is $O(N)$ but not $\\Omega(1)$<br/></span>",
                "<span style=\"display: inline;\">$\\mathrm{T}(\\mathrm{N})$ is $O(1)$ but not $\\Omega(N)$<br/></span>",
                "<span style=\"display: inline;\">$\\mathrm{T}(\\mathrm{N})$ is both $O(N)$ and $\\Omega(1)$<br/></span>",
                "<span style=\"display: inline;\">$\\mathrm{T(N)}$ is both $O(N)$ and $\\Omega(N)$</span>"
            ],
            "answer": "D",
            "solution": "<div class=\"solution-content\"><a name=\"490385\"></a><div itemprop=\"text\"><p>This statement gives the broadest, yet still accurate, bounds that cover all possible scenarios for a linear search.</p><ul><li>$O(N)$ (Big O - Upper Bound): This describes the worst-case performance. Will the search ever take more time than a linear scan? No. In the worst case, you check all $N$ elements. So, the algorithm is upper-bounded by $N$.<br/> </li><li>$\\Omega(1)$ (Big Omega - Lower Bound): This describes the best-case performance. Will the search ever take less time than a single check? No. In the best case, you find the element at the very first position, which takes a constant amount of time. So, the algorithm is lowerbounded by a constant 1 .</li></ul><p>Therefore, the runtime $T(N)$ will always live in the range between a constant time operation and a linear time operation.</p><p> </p><p>Why Option D is Incorrect: $\\mathrm{T}(\\mathrm{N})$ is both $O(N)$ and $\\Omega(N)$</p><p><br/>The error here is with the lower bound, Omega(N).</p><ul><li>$\\Omega(N)$ claims that the algorithm will always take at least an amount of time proportional to $N$, even in the best possible scenario.<br/> </li><li>This is false for linear search. As we saw, the best-case scenario takes only constant time ( $\\Omega(1)$ ), which is much less than linear time.</li></ul><p>Hence $C$ is correct</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/490384/go-classes-dpp-algorithm-time-complexity\" target=\"_blank\">GATE Overflow #490384</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Let $S$ be a sorted array of $n$ distinct positive integers. Let $T(n)$ denote the time complexity of the most efficient algorithm to determine if there exist three indices $i&lt;j&lt;k$ such that the condition $S[i]+S[j]&gt;S[k]$ is met.<br/> <br/>Which of the following is true?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$T(n)=O\\left(n^3\\right)$<br/></span>",
                "<span style=\"display: inline;\">$T(n)=O\\left(n^2\\right)$<br/></span>",
                "<span style=\"display: inline;\">$T(n)=O(n \\log n)$<br/></span>",
                "<span style=\"display: inline;\">$T(n)=O(n)$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"506291\"></a><div itemprop=\"text\">indireclty the question is speakig about the insertion sorting . In insertion sorting if the array is sorted there will be no inversions(swappings) , so here we will have only time for comparisions is O(n).<br/> <br/> n comparisions+ 0 inversions=O(n)</div><br><br><small>Source: <a href=\"https://gateoverflow.in/490382/classes-dpp-algorithm-time-complexity\" target=\"_blank\">GATE Overflow #490382</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>If one uses the binary exponentiation (exponentiation by squaring) method to compute $a^{55}$, which of the following intermediate powers of $a$ is calculated but NOT used in the final product?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$a^4$<br/></span>",
                "<span style=\"display: inline;\">$a^8$<br/></span>",
                "<span style=\"display: inline;\">$a^{16}$<br/></span>",
                "<span style=\"display: inline;\">$a^{32}$</span>"
            ],
            "answer": "B",
            "solution": "<div class=\"solution-content\"><a name=\"490380\"></a><div itemprop=\"text\"><p>Convert the Exponent to Binary<br/><br/>First, we find the binary representation of the exponent, which is 55 .</p><p>$$<br/>55_{10}=110111_2<br/>$$</p><p><br/>Express as a Sum of Powers of 2<br/><br/>The binary representation $110111_2$ shows us which powers of 2 sum up to 55 :</p><p>$$<br/>55=(1 \\cdot 32)+(1 \\cdot 16)+(0 \\cdot 8)+(1 \\cdot 4)+(1 \\cdot 2)+(1 \\cdot 1)<br/>$$</p><p><br/>Therefore, the final product to get $a^{55}$ is:</p><p>$$<br/>a^{55}=a^{32} \\cdot a^{16} \\cdot a^4 \\cdot a^2 \\cdot a^1<br/>$$</p><p><br/>Identify Calculated vs. Used Powers<br/>To get the terms needed for the final product, we must calculate a sequence of powers by repeated squaring:</p><ul><li>$a^1$<br/> </li><li>$a^2=a^1 \\cdot a^1$<br/> </li><li>$a^4=a^2 \\cdot a^2$<br/> </li><li>$a^8=a^4 \\cdot a^4$<br/> </li><li>$a^{16}=a^8 \\cdot a^8$<br/> </li><li>$a^{32}=a^{16} \\cdot a^{16}$</li></ul><p>As you can see, $a^8$ must be calculated to find $a^{16}$, but because there is a ' 0 ' in the 8 's place of the binary representation of 55 , it is not used in the final multiplication.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/490378/go-classes-dpp-algorithm-algorithm-design\" target=\"_blank\">GATE Overflow #490378</a></small></div>"
        }
    ]
});

registerTest({
    "name": "DPP 04 - Algorithms (Asymptotic Analysis & Recurrences - Part 4)",
    "testLabel": "DPP 04",
    "testType": "DPP",
    "bracket": "Asymptotic Analysis & Recurrences - Part 4",
    "subject": "algo",
    "series": "cse-dpp-2027",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 10,
    "topicsCovered": "Asymptotic Analysis & Recurrences (Practice Set 4)",
    "questions": [
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Arrange the following functions by their asymptotic growth rate in increasing order.</p><p><strong>Given Details:</strong></p><ul><li>$f_1(n)=(\\log n)^{\\log n}$</li><li>$f_2(n)=2^{\\sqrt{\\log _2 n}}$</li><li>$f_3(n)=n^{1 / 3}(\\log n)^3$</li><li>$f_4(n)=(\\sqrt{2})^{\\log _2 n}$</li></ul></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$f_2, f_3, f_4, f_1$</span>",
                "<span style=\"display: inline;\">$f_2, f_4, f_3, f_1$</span>",
                "<span style=\"display: inline;\">$f_3, f_2, f_1, f_4$</span>",
                "<span style=\"display: inline;\">$f_2, f_3, f_1, f_4$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"489917\"></a><div itemprop=\"text\"><ul><li>$f_1(n)=\\left(\\log _2 n\\right)^{\\log _2 n}$</li></ul><p>$$<br/>\\log _2\\left(f_1(n)\\right)=\\log _2\\left(\\left(\\log _2 n\\right)^{\\log _2 n}\\right)<br/>$$</p><p><br/>Using the power rule $\\log \\left(a^b\\right)=b \\cdot \\log (a)$, we get:</p><p>$$<br/>\\log _2\\left(f_1(n)\\right)=\\left(\\log _2 n\\right) \\cdot \\log _2\\left(\\log _2 n\\right)<br/>$$</p><ul><li>$f_2(n)=2 \\sqrt{\\log _2 n}$</li></ul><p>$$<br/>\\log _2\\left(f_2(n)\\right)=\\log _2\\left(2^{\\sqrt{\\log _2 n}}\\right)<br/>$$</p><p><br/>Using the rule $\\log _b\\left(b^x\\right)=x$, we get:</p><p>$$<br/>\\log _2\\left(f_2(n)\\right)=\\sqrt{\\log _2 n}<br/>$$</p><ul><li>$f_3(n)=n^{1 / 3}\\left(\\log _2 n\\right)^3$</li></ul><p>$$<br/>\\log _2\\left(f_3(n)\\right)=\\log _2\\left(n^{1 / 3} \\cdot\\left(\\log _2 n\\right)^3\\right)<br/>$$</p><p><br/>Using the product rule $\\log (a \\cdot b)=\\log (a)+\\log (b)$, we get:</p><p>$$<br/>\\log _2\\left(f_3(n)\\right)=\\log _2\\left(n^{1 / 3}\\right)+\\log _2\\left(\\left(\\log _2 n\\right)^3\\right)=\\frac{1}{3} \\log _2 n+3 \\log _2\\left(\\log _2 n\\right)<br/>$$</p><ul><li>$f_4(n)=(\\sqrt{2})^{\\log _2 n}$</li></ul><p>$$<br/>\\log _2\\left(f_4(n)\\right)=\\log _2\\left((\\sqrt{2})^{\\log _2 n}\\right)<br/>$$</p><p><br/>Using the power rule and that $\\sqrt{2}=2^{1 / 2}$ :</p><p>$$<br/>\\begin{aligned}<br/>&amp; \\quad \\log _2\\left(f_4(n)\\right)=\\left(\\log _2 n\\right) \\cdot \\log _2\\left(2^{1 / 2}\\right)=\\left(\\log _2 n\\right) \\cdot \\frac{1}{2}=\\frac{1}{2} \\log _2 n \\\\<br/>&amp; \\log _2\\left(f_2\\right)&lt;\\log _2\\left(f_3\\right)&lt;\\log _2\\left(f_4\\right)&lt;\\log _2\\left(f_1\\right)<br/>\\end{aligned}<br/>$$</p><p><br/>Therefore, the correct order is:</p><p>$$<br/>f_2, f_3, f_4, f_1<br/>$$</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/489916/go-classes-dpp-algorithm-asymptotic-analysis\" target=\"_blank\">GATE Overflow #489916</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider the following three statements regarding asymptotic notation:<br/><br/>I. $\\log \\left(n^c\\right)=\\Theta(\\log n)$ where $c&gt;0$ is a constant<br/><br/>II. $3^{n+5}=\\Theta\\left(3^n\\right)$<br/><br/>III. $3^{2 n}=O\\left(3^n\\right)$</p><p>Which of the above statements are correct?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">I and II<br/></span>",
                "<span style=\"display: inline;\">I and III<br/></span>",
                "<span style=\"display: inline;\">II and III<br/></span>",
                "<span style=\"display: inline;\">I, II, and III</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"490127\"></a><div itemprop=\"text\"><p>Answer : A) I and II</p><p style=\"text-align:center\"><img alt=\"\" height=\"1280\" src=\"https://gateoverflow.in/?qa=blob&amp;qa_blobid=9367706278760332367\" width=\"852\"/></p><p style=\"text-align:center\"><img alt=\"\" height=\"1280\" src=\"https://gateoverflow.in/?qa=blob&amp;qa_blobid=3746326381583134996\" width=\"842\"/></p><p><br/> </p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/489914/go-classes-dpp-algorithm-asymptotic-analysis\" target=\"_blank\">GATE Overflow #489914</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Let $f(n)=2^{2^n}$ and $g(n)=n$ ! be two positive functions of $n$.<br/><br/>Which of the following statements correctly describes the asymptotic relationship between them?<br/><br/>(Note: $f(n)=\\omega(g(n))$ means $f(n)$ grows strictly faster than $g(n)$, and $f(n)=o(g(n))$ means $f(n)$ grows strictly slower than $g(n)$.)</p><p> </p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$f(n)=o(g(n))$<br/></span>",
                "<span style=\"display: inline;\">$g(n)=o(f(n))$<br/></span>",
                "<span style=\"display: inline;\">$f(n)=\\Theta(g(n))$<br/></span>",
                "<span style=\"display: inline;\">The functions have a cyclical dominance relationship.</span>"
            ],
            "answer": "B",
            "solution": "<div class=\"solution-content\"><a name=\"488690\"></a><div itemprop=\"text\">$$<br/> \\begin{aligned}<br/> &amp; \\log _2(f(n))=2^n \\\\<br/> &amp; \\log _2(g(n)) \\approx n \\log _2 n<br/> \\end{aligned}<br/> $$<br/> <br/> Hence B is correct</div><br><br><small>Source: <a href=\"https://gateoverflow.in/488689/go-classes-dpp-algorithm-asymptotic-analysis\" target=\"_blank\">GATE Overflow #488689</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>An element in an array $\\mathbf{X}$ is called a Vanguard if it is greater than all elements to the left of it in $\\mathbf{X}$. The first element is always a Vanguard. The best algorithm to find all Vanguards in an array</p><p> </p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">solves it in linear time using a left-to-right pass of the array<br/></span>",
                "<span style=\"display: inline;\">solves it in linear time using a right-to-left pass of the array<br/></span>",
                "<span style=\"display: inline;\">solves it using divide and conquer in time $\\Theta(n \\log n)$<br/></span>",
                "<span style=\"display: inline;\">solves it in time. $\\Theta\\left(n^2\\right)$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"488951\"></a><div itemprop=\"text\">Set first element as max and traverse linearly , whenver max changes increase vanguard count.</div><br><br><small>Source: <a href=\"https://gateoverflow.in/488686/go-classes-dpp-algorithm-algorithm-design\" target=\"_blank\">GATE Overflow #488686</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider the following algorithm findCenterAlgo that takes a tree $T$ as input.<br/>findCenterAlgo (T)<br/>1. Let $T_{\\text {current }}$ be a copy of the input tree $T$.<br/><br/>2. While the number of vertices in $T_{\\text {current }}$ is greater than 2 :</p><p>3. Output the number of vertices remaining in $T_{\\text {current }}$.</p><p>The output of findCenterAlgo ( $T$ ) for the tree shown in the given figure is $\\_\\_\\_\\_$ .<br/><br/><img alt=\"\" src=\"https://gateoverflow.in/?qa=blob&amp;qa_blobid=8068429736792407099\"/></p></div></span>",
            "image": "https://gateoverflow.in/?qa=blob&qa_blobid=8068429736792407099",
            "options": [
                "<span style=\"display: inline;\">Identify all leaf nodes (nodes with degree 1 ) in $T_{\\text {current }}$.<br/></span>",
                "<span style=\"display: inline;\">Remove all of these leaf nodes and their incident edges from $T_{\\text {current- }}$</span>"
            ],
            "answer": "0",
            "solution": "<div class=\"solution-content\">Question Discussed on GATE Overflow. Refer to: <a href=\"https://gateoverflow.in/488685/go-classes-dpp-algorithm-algorithm-design\" target=\"_blank\">GO Classes DPP | Algorithm|ALGORITHM DESIGN</a></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>In a directed acyclic graph (DAG) with a source vertex $s$, the quality-score of a directed path is defined to be the sum of the weights of the edges on the path. For any other vertex v , its quality-score is the maximum quality-score among all possible paths from $s$ to $v$. The qualityscore of $s$ is 0 .<br/> </p><p style=\"text-align:center\"><img alt=\"\" height=\"250\" src=\"https://gateoverflow.in/?qa=blob&amp;qa_blobid=993105919410362166\" width=\"109\"/></p><p><br/>What is the sum of the quality-scores of all vertices on the graph? </p></div></span>",
            "image": "https://gateoverflow.in/?qa=blob&qa_blobid=993105919410362166",
            "options": [],
            "answer": "19",
            "solution": "<div class=\"solution-content\"><a name=\"489123\"></a><div itemprop=\"text\">Quality-score = maximum sum of edge-weights on any path from s to that vertex.<br/> <br/> Compute path sums:<br/> score(s) = 0<br/> <br/> score(a) = s-&gt;a = 3<br/> <br/> score(b) = s-&gt;b = 1<br/> <br/> score(c) = max( s-&gt;a-&gt;c = 3+2 = 5, s-&gt;b-&gt;c = 1+5 = 6 ) = 6<br/> <br/> score(d) = max( s-&gt;a-&gt;d = 3+6 = 9,<br/> s-&gt;a-&gt;c-&gt;d = 3+2+1 = 6,<br/> s-&gt;b-&gt;c-&gt;d = 1+5+1 = 7 ) = 9<br/> <br/> Sum of quality-scores = 0 + 3 + 1 + 6 + 9 = 19</div><br><br><small>Source: <a href=\"https://gateoverflow.in/488321/go-classes-dpp-algorithm-quality-score\" target=\"_blank\">GATE Overflow #488321</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider the following three functions:</p><p>Which of the following statements about their asymptotic growth is true?</p><p><strong>Given Details:</strong></p><ul><li>$f(n)=\\left(\\log _2 n\\right)^{\\log _2 n}$</li><li>$g(n)=n^{\\sqrt{\\log _2 n}}$</li><li>$h(n)=(\\sqrt{n})$ !</li></ul></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$f(n)$ is $\\Omega(g(n))$</span>",
                "<span style=\"display: inline;\">$h(n)$ is $O(g(n))$</span>",
                "<span style=\"display: inline;\">$g(n)$ is $O(f(n))$</span>",
                "<span style=\"display: inline;\">$g(n)$ is $O(h(n))$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"488318\"></a><div itemprop=\"text\"><p>The most effective way to compare these functions is to analyze the growth rate of their logarithms. If $\\log (a)&gt;\\log (b)$, then $a&gt;b$.<br/><br/>1. Simplify $\\log _2(f(n))$</p><p>$$<br/>\\begin{aligned}<br/>&amp; f(n)=\\left(\\log _2 n\\right)^{\\log _2 n} \\\\<br/>&amp; \\log _2(f(n))=\\log _2\\left(\\left(\\log _2 n\\right)^{\\log _2 n}\\right) \\\\<br/>&amp; \\log _2(f(n))=\\left(\\log _2 n\\right) \\cdot \\log _2\\left(\\log _2 n\\right)<br/>\\end{aligned}<br/>$$</p><p>2. Simplify $\\log _2(g(n))$</p><p>$$<br/>\\begin{aligned}<br/>&amp; g(n)=n^{\\sqrt{\\log _2 n}}=\\left(2^{\\log _2 n}\\right)^{\\sqrt{\\log _2 n}}=2^{\\left(\\log _2 n\\right) \\cdot \\sqrt{\\log _2 n}} \\\\<br/>&amp; \\log _2(g(n))=\\log _2\\left(2^{\\left(\\log _2 n\\right)^{1.5}}\\right) \\\\<br/>&amp; \\log _2(g(n))=\\left(\\log _2 n\\right)^{1.5}<br/>\\end{aligned}<br/>$$</p><p>3. Simplify $\\log _2(h(n))$</p><p>$$<br/>h(n)=(\\sqrt{n})!<br/>$$</p><p><br/>We use Stirling's approximation for the logarithm of a factorial, which is $\\log (k!) \\approx k \\log k$</p><p>Let $k=\\sqrt{n}$.</p><p>$$<br/>\\begin{aligned}<br/>&amp; \\log _2(h(n)) \\approx \\sqrt{n} \\log _2(\\sqrt{n})=\\sqrt{n} \\cdot \\frac{1}{2} \\log _2(n) \\\\<br/>&amp; \\log _2(h(n)) \\approx \\frac{1}{2} \\sqrt{n} \\log _2 n<br/>\\end{aligned}<br/>$$</p><p><br/>Evaluate the Options</p><ul><li>A. $f(n)$ is $\\Omega(g(n))$ : FALSE. This would mean $f(n)$ grows at least as fast as $g(n)$. Our analysis shows it grows slower.<br/> </li><li>B. $h(n)$ is $O(g(n))$ : FALSE. This would mean $h(n)$ is bounded above by $g(n)$. Our analysis shows $h(n)$ grows much faster.<br/> </li><li>C. $g(n)$ is $O(f(n))$ : FALSE. This is the reverse of the true relationship between $f(n)$ and $g(n)$.<br/> </li><li>D. $g(n)$ is $O(h(n))$ : TRUE. Since $h(n)$ is the fastest-growing function in the list, it serves as an asymptotic upper bound for both $f(n)$ and $g(n)$.</li></ul></div><br><br><small>Source: <a href=\"https://gateoverflow.in/488317/go-classes-dpp-algorithm-asymptotic-analysis\" target=\"_blank\">GATE Overflow #488317</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider the following two functions, designed to test a deep understanding of asymptotic behavior:</p><p>$$<br/>\\begin{gathered}<br/>f_1(n)= \\begin{cases}(n!)^2 &amp; \\text { for } 0 \\leq n \\leq 40 \\\\<br/>n^2 \\log n &amp; \\text { for } n&gt;40\\end{cases} \\\\<br/>f_2(n)= \\begin{cases}100 n^3 &amp; \\text { for } 0 \\leq n \\leq 1,000,000 \\\\<br/>n^2 \\log ^2 n &amp; \\text { for } n&gt;1,000,000\\end{cases}<br/>\\end{gathered}<br/>$$</p><p><br/>Which of the following statements correctly describes the long-term growth relationship between these two functions?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$f_1(n)$ is $\\Theta\\left(f_2(n)\\right)$<br/></span>",
                "<span style=\"display: inline;\">$f_1(n)$ is $\\Omega\\left(f_2(n)\\right)$<br/></span>",
                "<span style=\"display: inline;\">$f_2(n)$ is $\\Omega\\left(f_1(n)\\right)$<br/></span>",
                "<span style=\"display: inline;\">$f_1(n)$ is $O\\left(n^2\\right)$</span>"
            ],
            "answer": "C",
            "solution": "<div class=\"solution-content\"><a name=\"490877\"></a><div itemprop=\"text\"><p data-end=\"571\" data-start=\"505\"><strong data-end=\"197\" data-start=\"149\">Correct Answer: Option C – f₂(n) is Ω(f₁(n))</strong></p><p data-end=\"571\" data-start=\"505\">For large <strong data-end=\"214\" data-start=\"209\">n</strong>, only the dominant terms matter.<br/>So we compare:</p><p data-end=\"571\" data-start=\"505\">f₁(n) = n² log n, f₂(n) = n² log² n</p><p data-end=\"571\" data-start=\"505\">Both have the same n²log n term, but f₂(n) has an extra <strong data-end=\"388\" data-start=\"379\">log n</strong> factor.<br/>That means f₂(n) grows faster than f₁(n)<br/>Hence, we say</p><p data-end=\"571\" data-start=\"505\">f₂(n)=Ω(f₁(n)) </p><p data-end=\"571\" data-start=\"505\">which means <strong data-end=\"571\" data-start=\"517\">f₂ grows at least as fast as f₁ (actually faster).</strong></p><hr data-end=\"576\" data-start=\"573\"/><p data-end=\"797\" data-start=\"618\"><strong>Why the other options are incorrect</strong></p><p data-end=\"797\" data-start=\"618\"><strong data-end=\"615\" data-start=\"584\">Option A: f₁(n) is Θ(f₂(n))</strong></p><p data-end=\"797\" data-start=\"618\">Θ (Theta) means both grow at the same rate asymptotically.<br/>But since f₂(n) has one extra log⁡n, it dominates f₁(n).<br/>So they are <strong data-end=\"797\" data-start=\"763\">not asymptotically equivalent.</strong></p><hr data-end=\"802\" data-start=\"799\"/><p data-end=\"996\" data-start=\"844\"><strong data-end=\"841\" data-start=\"810\">Option B: f₁(n) is Ω(f₂(n))</strong></p><p data-end=\"996\" data-start=\"844\">Ω (Omega) means f₁(n) grows faster or equal to f₂(n).<br/>This is <strong data-end=\"925\" data-start=\"916\">false</strong>, because f₂(n) increases faster due to the extra logarithmic term.</p><hr data-end=\"1001\" data-start=\"998\"/><p data-end=\"1210\" data-start=\"1040\"><strong data-end=\"1037\" data-start=\"1009\">Option D: f₁(n) is O(n²)</strong></p><p data-end=\"1210\" data-start=\"1040\">O (Big O) means an upper bound.<br/>But f₁(n) = n²logn grows <em data-end=\"1123\" data-start=\"1106\">slightly faster</em> than n²,<br/>so it’s <strong data-end=\"1162\" data-start=\"1147\">not bounded</strong> by O(n²)<br/>It’s actually O(n² log n)</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/488316/go-classes-dpp-algorithm-asymptotic-analysis\" target=\"_blank\">GATE Overflow #488316</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>You are given a sorted array of $n$ locations on a highway where charging stations are present. You need to select $k$ of these locations to install new fast chargers. The goal is to maximise the minimum distance between any two selected locations. Let $L$ be the total length of the highway segment (i.e., pos[n-1] - pos[0]).</p><p>Which algorithmic paradigm is best suited for solving this optimisation problem efficiently, and what is its time complexity?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">Dynamic Programming with a state for location and number of chargers used, resulting in a complexity of $O(n \\cdot k)$.<br/></span>",
                "<span style=\"display: inline;\">A greedy approach where you iteratively place chargers at the furthest possible valid locations, with a complexity of $O(n \\cdot k)$.<br/></span>",
                "<span style=\"display: inline;\">Binary searching on the answer (the minimum distance), where each check is performed by a greedy scan. The total complexity is $O(n \\log L)$.<br/></span>",
                "<span style=\"display: inline;\">A Divide and Conquer approach similar to the closest pair of points problem, with a complexity of $O(n \\log n)$.</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"487772\"></a><div itemprop=\"text\"><p>This is a classic problem that can be solved by binary searching on the answer. The answer we are looking for is the maximum possible \"minimum distance\"; let's call it $d$.</p><p><strong>Search Space: </strong>The minimum possible value for $d$ is 0 , and the maximum is $L=\\operatorname{pos}[n- 1]-\\operatorname{pos}[0]$.</p><p><strong>Monotonicity:</strong> If we can successfully place $k$ chargers with a minimum distance of $d$, we can also place them with any distance less than $d$. This monotonicity allows us to binary search for the optimal $d$.</p><p><strong>Check Function:</strong> For a given distance $x$ (our mid in binary search), we need a function con_place $(\\mathrm{x})$ that checks if it's possible to place $k$ chargers with at least distance x between them. This check can be done greedily in $O(n)$ time:</p><ul><li>Place the first charger at pos $[0]$.<br/> </li><li>Iterate through the remaining locations. Place the next charger at the first location pos [i] that is at least $\\times$ distance away from the previously placed charger.<br/> </li><li>Count how many chargers you can place. If the count is $\\geq k$, the check is successful.</li></ul><p><strong>Complexity:</strong> The binary search performs $O$ ( $\\log L$ ) iterations. Each iteration calls the can_place function, which takes $O(n)$ time. The total complexity is therefore $O(n \\log L)$. This is typically much more efficient than the $O(n \\cdot k)$ DP approach.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/487771/go-classes-dpp-algorithm-search-space\" target=\"_blank\">GATE Overflow #487771</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>The time complexity of a recursive algorithm is given by the recurrence relation:</p><p>$$<br/>\\begin{aligned}<br/>&amp; T(n)=\\sqrt{n} T(\\sqrt{n})+n \\\\<br/>&amp; T(n)=1 \\text { for } n \\leq 2<br/>\\end{aligned}<br/>$$</p><p><br/>What is the best asymptotic upper bound for $T(n)$ ?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$O(n \\log n)$<br/></span>",
                "<span style=\"display: inline;\">$O(n)$<br/></span>",
                "<span style=\"display: inline;\">$O(n \\log \\log n)$<br/></span>",
                "<span style=\"display: inline;\">$O\\left(n^2\\right)$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"487765\"></a><div itemprop=\"text\">Start with the original equation:<br/> <br/> $$<br/> T(n)=n+\\sqrt{n} T(\\sqrt{n})<br/> $$<br/> <br/> Now, substitute the definition of $T(\\sqrt{n})$ into the equation. For a problem of size $\\sqrt{n}$,<br/> <br/> $$<br/> \\begin{aligned}<br/> &amp; T(\\sqrt{n})=\\sqrt{n}+\\sqrt{\\sqrt{n}} T(\\sqrt{\\sqrt{n}}) \\\\<br/> &amp; T(n)=n+\\sqrt{n}\\left[\\sqrt{n}+n^{1 / 4} T\\left(n^{1 / 4}\\right)\\right]<br/> \\end{aligned}<br/> $$<br/> <br/> Distribute the $\\sqrt{n}$ term:<br/> <br/> $$<br/> \\begin{aligned}<br/> &amp; T(n)=n+(\\sqrt{n} \\cdot \\sqrt{n})+\\left(\\sqrt{n} \\cdot n^{1 / 4}\\right) T\\left(n^{1 / 4}\\right) \\\\<br/> &amp; T(n)=n+n+n^{3 / 4} T\\left(n^{1 / 4}\\right)<br/> \\end{aligned}<br/> $$<br/> <br/> Let's expand one more time. $T\\left(n^{1 / 4}\\right)=n^{1 / 4}+n^{1 / 8} T\\left(n^{1 / 8}\\right)$.<br/> <br/> $$<br/> \\begin{aligned}<br/> &amp; T(n)=n+n+n^{3 / 4}\\left[n^{1 / 4}+n^{1 / 8} T\\left(n^{1 / 8}\\right)\\right] \\\\<br/> &amp; T(n)=n+n+\\left(n^{3 / 4} \\cdot n^{1 / 4}\\right)+\\left(n^{3 / 4} \\cdot n^{1 / 8}\\right) T\\left(n^{1 / 8}\\right) \\\\<br/> &amp; T(n)=n+n+n+n^{7 / 8} T\\left(n^{1 / 8}\\right)<br/> \\end{aligned}<br/> $$<br/> <br/> As you can see, at each step of the expansion, we add another term of size $n$. The total cost is the sum of these $n$ terms. The number of times we can do this expansion is the number of times we have to take the square root of $n$ until it becomes a constant. This depth of recursion is $\\log _2\\left(\\log _2 n\\right)$.<br/> <br/> Therefore, the total time complexity is $T(n)=n+n+n+\\ldots(\\log \\log n$ times), which is $O(n \\log \\log n)$.</div><br><br><small>Source: <a href=\"https://gateoverflow.in/487763/go-classes-dpp-algorithm-recurrence-relation\" target=\"_blank\">GATE Overflow #487763</a></small></div>"
        }
    ]
});

registerTest({
    "name": "DPP 05 - Algorithms (Asymptotic Analysis & Recurrences - Part 5)",
    "testLabel": "DPP 05",
    "testType": "DPP",
    "bracket": "Asymptotic Analysis & Recurrences - Part 5",
    "subject": "algo",
    "series": "cse-dpp-2027",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 10,
    "topicsCovered": "Asymptotic Analysis & Recurrences (Practice Set 5)",
    "questions": [
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>A recursive function is defined by the following recurrence relation, where $T(1)=1$:</p><p>$$<br/>T(n)=T(n-1)+\\log n^5<br/>$$</p><p><br/>What is the tightest asymptotic upper bound for $\\mathrm{T}(\\mathrm{n})$?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$O(\\log n)$<br/></span>",
                "<span style=\"display: inline;\">$O(n)$<br/></span>",
                "<span style=\"display: inline;\">$O(n \\log n)$<br/></span>",
                "<span style=\"display: inline;\">$O\\left(n^2\\right)$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"500435\"></a><div itemprop=\"text\"><p>Answer: C<br/>using stirling's approximation: O(log(n!)) <b>≈ </b>Θ(nlogn)</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/487281/go-classes-dpp-algorithm-recurrence-relation\" target=\"_blank\">GATE Overflow #487281</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>The five items, A, B, C, D, and E, are pushed in a stack, one after the other, starting from A. The stack is popped four times and each element is inserted in a queue. Then two elements are deleted from the queue and pushed back on the stack. Now one item is popped from the stack. The popped item is $\\qquad$</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">A<br/></span>",
                "<span style=\"display: inline;\">B<br/></span>",
                "<span style=\"display: inline;\">C<br/></span>",
                "<span style=\"display: inline;\">D</span>"
            ],
            "answer": "D",
            "solution": "<div class=\"solution-content\"><a name=\"486971\"></a><div itemprop=\"text\">Option D<br/> <br/> Afterbinserting all the elements into stack the stack looks like A B C D E top of stack is E<br/> <br/> Step 2: now popped 4 elements from the stack and inserted into queue each . E,D,C,B are popped and <br/> <br/> Queue contains E,D,C,B front is E and rear is B<br/> <br/> Step 3 : two elements are deleted from. Queue so E,D ARE deleted and pushed into stack <br/> <br/> So now stack contains A,E,D <br/> <br/> NOW again one element from stack is popped out <br/> <br/> And the popped element is D</div><br><br><small>Source: <a href=\"https://gateoverflow.in/486906/go-classes-dpp-algorithm-isro\" target=\"_blank\">GATE Overflow #486906</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider the following recurrence:</p><p>$$<br/>\\begin{aligned}<br/>&amp; T(n)=2 T(\\sqrt{n})+1 \\\\<br/>&amp; T(1)=1<br/>\\end{aligned}<br/>$$</p><p><br/>Which of the following is NOT true?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$T(n)=O(\\log \\log n)$<br/></span>",
                "<span style=\"display: inline;\">$T(n)=O(\\log n)$<br/></span>",
                "<span style=\"display: inline;\">$T(n)=O(\\sqrt{n})$<br/></span>",
                "<span style=\"display: inline;\">$T(n)=O(n)$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"486637\"></a><div itemprop=\"text\"><p>Ans: Option A<br/><br/>We need to find which option is false.<br/><br/>T(n) = θ(log n) and options C and D are greater than this(big oh); hence B, C,D are true.<br/>Option A becomes false because loglog(n) is smaller. It would've been true if it were omega(loglog(n))<br/><br/> <img alt=\"\" height=\"400\" src=\"https://gateoverflow.in/?qa=blob&amp;qa_blobid=15135793881114574433\" width=\"279\"/></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/486524/go-classes-dpp-algorithm-recurrence-relation\" target=\"_blank\">GATE Overflow #486524</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Arrange the following recurrence relations in increasing order of their time capacity.<br/><br/>(A) $\\mathrm{T}(\\mathrm{n})=\\mathrm{T}(\\mathrm{n} / 2)+1$<br/><br/>(B) $\\mathrm{T}(\\mathrm{n})=2 \\mathrm{~T}(\\mathrm{n} / 2)+\\mathrm{n}$<br/><br/>(C) $T(\\mathrm{n})=3 \\mathrm{~T}(\\mathrm{n} / 3)+\\mathrm{n}$<br/><br/>(D) $\\mathrm{T}(\\mathrm{n})=2 \\mathrm{~T}(\\mathrm{n} / 2)+\\sqrt{\\mathrm{n}}$<br/><br/>(E) $\\mathrm{T}(\\mathrm{n})=\\mathrm{T}(\\mathrm{n}-1)+1$</p><p>Choose the correct answer from the options given below :</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\mathrm{(E), (A), (B), (D), (C)}$<br/></span>",
                "<span style=\"display: inline;\">$\\mathrm{(A), (E), (D), (B), (C)}$<br/></span>",
                "<span style=\"display: inline;\">$(\\mathrm{E}),(\\mathrm{A}),(\\mathrm{D}),(\\mathrm{B}),(\\mathrm{C})$<br/></span>",
                "<span style=\"display: inline;\">$\\mathrm{(A), (B), (D), (E), (C)}$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"486224\"></a><div itemprop=\"text\">all of them can be solved by just using master's theorem .<br/> <br/> the largest is C which is theta( n.logn)<br/> then B = C = theta( n.logn)<br/> then D = theta (N)... just use master theorem case ( polynomially greater)<br/> E = D = O(N)</div><br><br><small>Source: <a href=\"https://gateoverflow.in/486207/go-classes-dpp-algorithm-ugc-net\" target=\"_blank\">GATE Overflow #486207</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Which of the following is not time complexity of the following code:<br/>(O represents big-oh)<br/> </p><pre class=\"prettyprint linenums lang-c_cpp\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"4\"> for (i=1 to n): // Some constant time operation,O(1) // Then a loop that runs log(n) times for ( j=1;j&lt;n;j*=2) : //...O(1) operation.</pre><p> </p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$O(n \\log n)$<br/></span>",
                "<span style=\"display: inline;\">$O\\left(n^2\\right)$<br/></span>",
                "<span style=\"display: inline;\">$O(n)$<br/></span>",
                "<span style=\"display: inline;\">$O(n\\log n.\\log n)$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"486242\"></a><div itemprop=\"text\">C</div><br><br><small>Source: <a href=\"https://gateoverflow.in/486205/go-classes-dpp-algorithm-asymtotic-analysis\" target=\"_blank\">GATE Overflow #486205</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider the following functions:</p><p>$$<br/>\\begin{aligned}<br/>&amp; \\mathrm{f}(\\mathrm{n})=3 \\mathrm{n}^{\\sqrt{\\mathrm{n}}} \\\\<br/>&amp; \\mathrm{~g}(\\mathrm{n})=2^{\\sqrt{\\mathrm{n}}\\log _2{\\mathrm{n}}} \\\\<br/>&amp; \\mathrm{~h}(\\mathrm{n})=\\mathrm{n}!<br/>\\end{aligned}<br/>$$</p><p><br/>Which of the following statements is correct?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$h(n)$ is $O(f(n))$<br/></span>",
                "<span style=\"display: inline;\">$\\mathrm{h}(\\mathrm{n})$ is $\\mathrm{O}(\\mathrm{g}(\\mathrm{n}))$<br/></span>",
                "<span style=\"display: inline;\">$\\mathrm{f}(\\mathrm{n})$ is $\\mathrm{O}(\\mathrm{g}(\\mathrm{n})$ )<br/></span>",
                "<span style=\"display: inline;\">$g(n)$ is $\\operatorname{not} O(f(n))$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"485487\"></a><div itemprop=\"text\">C</div><br><br><small>Source: <a href=\"https://gateoverflow.in/485292/go-classes-dpp-algorithm-ugc-net\" target=\"_blank\">GATE Overflow #485292</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>If algorithm $A$ and another algorithm $B$ take $\\log _2(n)$ and $\\sqrt{ } n$ microseconds, respectively, to solve a problem, then the largest size $n$ of a problem these algorithms can solve is, respectively. in one second are __________ and ________.</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$2^{10^6}$ and $10^6$</span>",
                "<span style=\"display: inline;\">$2^{10^6}$ and $10^{12}$</span>",
                "<span style=\"display: inline;\">$2^{10^6}$ and $6.10^6$</span>",
                "<span style=\"display: inline;\">$2^{10^6}$ and $6.10^{12}$</span>"
            ],
            "answer": "B",
            "solution": "<div class=\"solution-content\"><a name=\"498507\"></a><div itemprop=\"text\">Answer: Option B</div><br><br><small>Source: <a href=\"https://gateoverflow.in/485290/go-classes-dpp-algorithm-ugc-net\" target=\"_blank\">GATE Overflow #485290</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Given a 2-D array mat where the elements of each row are sorted in non-decreasing order and the first element of a row is greater than the last element of the previous row (if it exists) and an integer target, determine if the target exists in the given mat or not.</p><p>What is the best possible time complexity in the worst case for doing this task?<br/><br/>Assume the matrix size is $n \\times n$</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$O(logn)$<br/></span>",
                "<span style=\"display: inline;\">$O(nlogn)$<br/></span>",
                "<span style=\"display: inline;\">$O(n)$<br/></span>",
                "<span style=\"display: inline;\">$\\left(\\mathrm{n}^2\\right)$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"498505\"></a><div itemprop=\"text\"><p>This structure means the entire 2D array, when treated as a single sequence of elements, is sorted in non-decreasing order.</p><p>The total number of elements in an n×n matrix is N=n<sup>2</sup><br/>Because the elements are entirely sorted, a binary search algorithm can be applied to the entire matrix as if it were a 1D array. Binary search on N elements has a time complexity of O(logN)<br/><br/>Therefore, the best possible time complexity in the worst case for this task is <strong>O(logn).</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/485287/go-classes-dpp-algorithm-asymptotic-analysis\" target=\"_blank\">GATE Overflow #485287</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>You are given two sorted arrays, each of length $n$. What is the best possible time complexity (in the worst case) to find the median of the combined $2 n$ elements?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$O(n)$<br/></span>",
                "<span style=\"display: inline;\">$O(\\log n)$<br/></span>",
                "<span style=\"display: inline;\">$O(n \\log n)$<br/></span>",
                "<span style=\"display: inline;\">$O(1)$</span>"
            ],
            "answer": "B",
            "solution": "<div class=\"solution-content\"><a name=\"484584\"></a><div itemprop=\"text\"><p>Partition the arrays</p><ul><li>Pick a position $i$ in array A.</li><li>Then pick $j=n-i$ in array B .</li></ul><p>This splits A into:</p><ul><li>Left $\\mathrm{A}=A[0 . . i-1]$, Right $\\mathrm{A}=A[i . . n-1]$</li></ul><p>And $B$ into:</p><ul><li>LeftB $=B[0 . . j-1]$, RightB $=B\\lfloor j . . n-1\\rfloor$</li></ul><p>We want all elements in LeftA + LeftB $\\leq$ all elements in RightA + RightB.<br/><br/>If this is true, the median will be<br/><br/>$\\max ($ Last element in LeftA, Last element in LeftB) and maybe average with min of Right side if even total length.</p><ul><li>Start a binary search on i (0 to n).<br/> </li><li>For current i, compute $\\mathrm{j}=\\mathrm{n}-\\mathrm{i}$.<br/> </li><li>Check two conditions:</li></ul><ol><li>$A[i-1] \\leq B[j]$ (last of LeftA $\\leq$ first of RightB)<br/> </li><li>$B[j-1] \\leq A[i]$ (last of Left $B \\leq$ first of RightA)</li></ol><ul><li>If both are true $\\rightarrow$ correct partition $\\rightarrow$ median found.<br/> </li><li>If $A[i-1]&gt;B[j] \\rightarrow$ move i left (decrease i ).<br/> </li><li>If $B[j-1]&gt;A[i] \\rightarrow$ move i right (increase i).</li></ul><p>Each step halves the search space. $\\rightarrow \\mathbf{O}(\\log \\mathbf{n})$.<br/><br/><strong>Correct option: B</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/484583/go-classes-dpp-algorithm-tifr\" target=\"_blank\">GATE Overflow #484583</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider the recurrence relation:</p><p>$$<br/>T(n)=3 T\\left(\\frac{n}{2}\\right)+n, \\quad T(1)=1<br/>$$</p><p><br/>The asymptotic complexity of this recurrence is:</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$O(n \\log n)$<br/></span>",
                "<span style=\"display: inline;\">$O\\left(n^{\\log _2 3}\\right)$<br/></span>",
                "<span style=\"display: inline;\">$O\\left(n^2\\right)$<br/></span>",
                "<span style=\"display: inline;\">$O\\left(\\log ^2 n\\right)$</span>"
            ],
            "answer": "B",
            "solution": "<div class=\"solution-content\"><a name=\"484587\"></a><div itemprop=\"text\">answer is B you can solve this master theorm</div><br><br><small>Source: <a href=\"https://gateoverflow.in/484582/go-classes-dpp-algorithm-isro\" target=\"_blank\">GATE Overflow #484582</a></small></div>"
        }
    ]
});

registerTest({
    "name": "DPP 06 - Algorithms (Asymptotic Analysis & Recurrences - Part 6)",
    "testLabel": "DPP 06",
    "testType": "DPP",
    "bracket": "Asymptotic Analysis & Recurrences - Part 6",
    "subject": "algo",
    "series": "cse-dpp-2027",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 12,
    "topicsCovered": "Asymptotic Analysis & Recurrences (Practice Set 6)",
    "questions": [
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>The asymptotic complexity of 4 functions $f_1, f_2, f_3, f_4$ are</p><p>Arrange them in increasing order of complexity.</p><p><strong>Given Details:</strong></p><ul><li>$f_1(n)=2^n$</li><li>$f_2(n)=n^{(3 / 2)}$</li><li>$f_3(n)=n \\log n$</li><li>$f_4(n)=n^{(\\log n)}$</li></ul></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$f_2, f_3, f_4, f_1$</span>",
                "<span style=\"display: inline;\">$f_1, f_2, f_3, f_4$</span>",
                "<span style=\"display: inline;\">$f_3, f_2, f_4, f_1$</span>",
                "<span style=\"display: inline;\">$f_3, f_1, f_2, f_4$</span>"
            ],
            "answer": "C",
            "solution": "<div class=\"solution-content\"><a name=\"484588\"></a><div itemprop=\"text\">answer is c</div><br><br><small>Source: <a href=\"https://gateoverflow.in/484581/go-classes-dpp-algorithm-isro\" target=\"_blank\">GATE Overflow #484581</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider the following functions:</p><p>Which of the following statements about the asymptotic relationships among $p(n), q(n)$, and $r(n)$ is correct?</p><p><strong>Given Details:</strong></p><ul><li>$p(n)=5^{n^2}$</li><li>$q(n)=n^{1000}$</li><li>$r(n)=2^{\\log _2 n}$</li></ul></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$p(n)=O(q(n))$ and $q(n)=O(r(n))$</span>",
                "<span style=\"display: inline;\">$p(n)=\\Omega(q(n))$ and $q(n)=O(r(n))$</span>",
                "<span style=\"display: inline;\">$q(n)=O(p(n))$ and $r(n)=O(p(n))$</span>",
                "<span style=\"display: inline;\">$q(n)=\\Omega(p(n))$ and $r(n)=\\Omega(q(n))$</span>"
            ],
            "answer": "C",
            "solution": "<div class=\"solution-content\"><a name=\"484585\"></a><div itemprop=\"text\">Answer is C</div><br><br><small>Source: <a href=\"https://gateoverflow.in/484579/go-classes-dpp-algorithm-asymptotic-analysis\" target=\"_blank\">GATE Overflow #484579</a></small></div>"
        },
        {
            "marks": 2,
            "neg": 0,
            "type": "MSQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Which of the following statements is/are true for all positive functions $f(n)$ ?<br/>(Multiple options may be correct.)</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$f(2 n)=\\Theta(f(n))$<br/></span>",
                "<span style=\"display: inline;\">$f(2 n)=o\\left(f(n)^2\\right)$<br/></span>",
                "<span style=\"display: inline;\">$f(2 n)=O(f(n))$<br/></span>",
                "<span style=\"display: inline;\">$f(n)^2=O\\left(f(n)^2\\right)$</span>"
            ],
            "answer": [
                "A"
            ],
            "solution": "<div class=\"solution-content\"><a name=\"484590\"></a><div itemprop=\"text\"><p><strong>Correct Option: D</strong></p><p>For (A) &amp; (C), Counter-example: $f(n)=2^n$</p><p>For (B) Counter-example: $f(n) = 5$ (any constant function will work here)</p><p>(D) True. In fact for any positive function $g$, $g(n) = \\Theta(g(n))$ <br/>Here, $g(n) = {f(n)}^2$</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/484578/go-classes-dpp-algorithm-asymptotic-analysis\" target=\"_blank\">GATE Overflow #484578</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\">Consider the following recurrence relation:<br/> <br/> $$<br/> \\mathrm{T}(\\mathrm{n})=\\sqrt{n} \\cdot \\log \\mathrm{n}+\\mathrm{T}(\\mathrm{n} / 2), \\mathrm{T}(1)=1<br/> $$<br/> <br/> The above recurrence is equivelant to: $T(n)=\\theta\\left(n^a \\cdot \\log ^b n\\right)$<br/> The value of $a+b$ is (upto 2 decimal places) _________ .</div></span>",
            "image": "",
            "options": [],
            "answer": "1.5",
            "solution": "<div class=\"solution-content\"><a name=\"482312\"></a><div itemprop=\"text\">$\\mathrm{T}(\\mathrm{n})=\\mathrm{T}(\\mathrm{n} / 2)+\\sqrt{n} \\log \\mathrm{n}, \\mathrm{T}(1)=1$.<br/> <br/> case-3 of master theorem applies, hence $T(n)=\\theta(\\sqrt{n} \\log n)$<br/> <br/> So $a=1 / 2, b=1-&gt;a+b=(1 / 2)+1=1.5$<br/> </div><br><br><small>Source: <a href=\"https://gateoverflow.in/482311/go-classes-dpp-algorithms-recurrence-relation\" target=\"_blank\">GATE Overflow #482311</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>What is the time complexity of the following recursive function?<br/> </p><pre class=\"prettyprint linenums lang-c_cpp\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"4\">int DoSomething (int n) { if (n &lt;= 2) return 1; else for( i=1 to sqrt{log n} ) doconstantwork(); // O(1) return (DoSomething (floor (sqrt(n))) + n); }</pre><p> </p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\"><p>$\\Theta(n \\log n)$ </p></span>",
                "<span style=\"display: inline;\"><p>$\\Theta(\\sqrt{\\log n})$</p></span>",
                "<span style=\"display: inline;\"><p>$\\Theta(\\log n)$ </p></span>",
                "<span style=\"display: inline;\"><p>$\\Theta(n)$ </p></span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"482310\"></a><div itemprop=\"text\"><p>$\\mathrm{T}(\\mathrm{n})=\\mathrm{T}(\\sqrt{n})+\\sqrt{\\log n}$.<br/><br/>Solution sketch:</p><ul><li>Let $\\mathrm{n}=2^{\\mathrm{m}} \\rightarrow \\mathrm{T}\\left(2^{\\mathrm{m}}\\right)=\\mathrm{T}\\left(2^{\\mathrm{m} / 2}\\right)+\\sqrt{m}$.<br/> </li><li>Let $\\mathrm{S}(\\mathrm{m})=\\mathrm{T}\\left(2^{\\mathrm{m}}\\right)$<br/><br/>then</li></ul><p>$$<br/>\\mathrm{S}(\\mathrm{~m})=\\mathrm{S}(\\mathrm{~m} / 2)+\\sqrt{m}<br/>$$</p><p><br/>Expansion:</p><p>$$<br/>\\mathrm{S}(\\mathrm{~m})=\\sqrt{m}+\\sqrt{m / 2}+\\sqrt{m / 4}+\\cdots<br/>$$</p><ul><li>This behaves like a decreasing geometric series scaled by $\\sqrt{m}$<br/> </li><li>So total $=\\Theta(\\sqrt{m})$<br/> </li><li>Back-substitute $m=\\log n$</li></ul><p>$$<br/>\\mathrm{T}(\\mathrm{n})=\\Theta(\\sqrt{\\log n}) .<br/>$$</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/482309/go-classes-dpp-algorithms-recurrence-relation\" target=\"_blank\">GATE Overflow #482309</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider the following program:</p><pre class=\"prettyprint linenums lang-c_cpp\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"4\">function GO_Recursion(n): if n &lt;= 1: return for i=1 to n: doConstantWork() // O(1) for j=1 to 5: GO_Recursion(n/3) </pre><p><br/>Which of the following is the worst-case time complexity of this algorithm?<br/><br/>(Here $\\Theta$ represents big-theta.)</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\Theta(n)$<br/></span>",
                "<span style=\"display: inline;\">$\\Theta(n \\log n)$<br/></span>",
                "<span style=\"display: inline;\">$\\Theta\\!\\left(n^{\\log_{3} 5}\\right)$<br/></span>",
                "<span style=\"display: inline;\">$\\Theta\\left(n^2\\right)$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"482307\"></a><div itemprop=\"text\"><p>$$<br/>T(n)=5 T(n / 3)+O(n)<br/>$$</p><p><br/>By Master's Theorem:</p><ul><li>$\\mathrm{a}=5, \\mathrm{~b}=3, \\mathrm{f}(\\mathrm{n})=\\mathrm{n}$<br/> </li><li>$\\mathrm{n}^{\\log _3 5} \\approx \\mathrm{n}^{1.464}$<br/> </li><li>$\\mathrm{n}=\\mathrm{O}\\left(\\mathrm{n}^{1.464}\\right)$<br/> </li><li>case 1 applies</li></ul><p>Correct Answer: $\\Theta\\left(\\mathrm{n}^{\\log _3 5}\\right)$</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/482306/go-classes-dpp-algorithms-recurrence-relation\" target=\"_blank\">GATE Overflow #482306</a></small></div>"
        },
        {
            "marks": 2,
            "neg": 0,
            "type": "MSQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Solve the following recurrences.</p><p>$$<br/>T(n)=2 T(n-2), T(0)=1, T(1)=1 .<br/>$$</p><p>(Here $\\Theta$ represents big-theta.)</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\Theta\\left((\\sqrt{ 2})^n\\right)$<br/></span>",
                "<span style=\"display: inline;\">$\\Theta\\!\\left(\\sqrt{2^n}\\right)$<br/></span>",
                "<span style=\"display: inline;\">$\\Theta\\left(2^n\\right)$<br/></span>",
                "<span style=\"display: inline;\">$\\Theta\\left(n^2\\right)$</span>"
            ],
            "answer": [
                "A"
            ],
            "solution": "<div class=\"solution-content\"><a name=\"482304\"></a><div itemprop=\"text\">\\[<br/> T(n) = 2T(n-2) = 4T(n-4) = 8T(n-6) = 16T(n-8)<br/> \\]<br/> <br/> \\[<br/> = 2^k \\cdot T(n-2k) =<br/> \\begin{cases}<br/> 2^{n/2} \\cdot T(0) &amp; \\text{if $n$ is even} \\\\<br/> 2^{(n-1)/2} \\cdot T(1) &amp; \\text{if $n$ is odd}<br/> \\end{cases}<br/> \\]<br/> <br/> \\[<br/> = \\begin{cases}<br/> 2^{n/2} \\cdot 1 &amp; \\text{if $n$ is even} \\\\<br/> 2^{(n-1)/2} &amp; \\text{if $n$ is odd}<br/> \\end{cases}<br/> \\]<br/> <br/> \\[<br/> = O(2^{n/2})<br/> \\]<br/> <br/> \\[<br/> \\implies \\text{Hence, A and B are correct.}<br/> \\]</div><br><br><small>Source: <a href=\"https://gateoverflow.in/482303/go-classes-dpp-algorithms-recurrence-relation\" target=\"_blank\">GATE Overflow #482303</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Suppose that the function F is defined for all powers of $2$ and is described by the following recurrence equation and base case: $F(n)=n-2+2 F(n / 2), F(1)=1$ respectively</p><p>What is the tightest upper bound of $\\mathrm{F}(\\mathrm{n})$?<br/><br/>(Here O represents big-Oh.)</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\mathrm{O}(n)$<br/></span>",
                "<span style=\"display: inline;\">$\\mathrm{O}(nlogn)$<br/></span>",
                "<span style=\"display: inline;\">$\\mathrm{O}\\left(2^n\\right)$<br/></span>",
                "<span style=\"display: inline;\">$O\\left(n^2\\right)$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"482300\"></a><div itemprop=\"text\">Solution: $F(n)=n-2+2 \\cdot F(n / 2), F(1)=1$<br/> <br/> Let $\\mathrm{n}=2^{\\wedge} \\mathrm{k}-&gt;\\mathrm{k}=\\log _2 \\mathrm{n}$.<br/> <br/> Unrolling (back-substitution):<br/> <br/> $$<br/> \\begin{aligned}<br/> &amp; F(n)=n-2+2 F(n / 2) \\\\<br/> &amp; =n-2+2(n / 2-2+2 F(n / 4)) \\\\<br/> &amp; =n-2+n-4+4 F(n / 4) \\\\<br/> &amp; =2 n-\\left[2^1+2^2\\right]+4 F(n / 4) \\\\<br/> &amp; =3 n-\\left[2^1+2^2+2^3\\right]+8 F(n / 8) \\\\<br/> &amp; =k \\cdot n-\\left[2^1+2^2+2^3+\\ldots+2^k\\right]+2^k F\\left(n / 2^k\\right)<br/> \\end{aligned}<br/> $$<br/> <br/> $$<br/> \\begin{aligned}<br/> &amp; =k \\cdot n-2^{k+1}+2^k \\cdot 1 \\quad\\left(\\left[2^1+2^2+2^3+\\ldots+2^k\\right]&lt;2^{k+1}\\right) \\\\<br/> &amp; =\\log n \\cdot n-2^{\\log n} \\\\<br/> &amp; =\\log n \\cdot n-n \\\\<br/> &amp; =O(n \\log n)<br/> \\end{aligned}<br/> $$</div><br><br><small>Source: <a href=\"https://gateoverflow.in/482299/go-classes-dpp-algorithms-recurrence-relation\" target=\"_blank\">GATE Overflow #482299</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider the equality $\\sum_{i=0}^n i^4=\\mathrm{X}$ and the following choices for X:<br/><br/>I. $\\theta\\left(n^6\\right)$<br/><br/>II. $\\theta\\left(\\mathrm{n}^5\\right)$<br/><br/>III. $\\omega\\left(\\mathrm{n}^6\\right)$<br/><br/>IV. $\\mathrm{O}\\left(\\mathrm{n}^8\\right)$</p><p>The equality above remains correct if X is replaced by</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">Only I<br/></span>",
                "<span style=\"display: inline;\">Only II<br/></span>",
                "<span style=\"display: inline;\">II or IV but not (I or III)<br/></span>",
                "<span style=\"display: inline;\">II or III or IV but not I</span>"
            ],
            "answer": "C",
            "solution": "<div class=\"solution-content\"><a name=\"481957\"></a><div itemprop=\"text\"><p>$$<br/>\\sum_{i=0}^n i^4=\\mathrm{X} \\sim \\int_0^n i^4=\\mathrm{n}^5 / 5=\\theta\\left(\\mathrm{n}^5\\right)=\\mathrm{O}\\left(\\mathrm{n}^8\\right)<br/>$$</p><p><br/><strong>Hence option C is correct</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/481956/go-classes-dpp-algorithms-asymptotic-analysis\" target=\"_blank\">GATE Overflow #481956</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p><b id=\"docs-internal-guid-31bbbf6f-7fff-aee9-d911-c58a1393e4b9\">What is the worst-case time complexity of the following function:</b><br/><br/> </p><pre class=\"prettyprint linenums lang-c_cpp\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"4\">RemoveNegatives(A): i = 0 while i ≤ length(A) - 1: if A[i] &lt; 0: Delete(A, i) else: i = i + 1 Delete(A, i): // definition of Delete(A, i) for j = i to length(A) - 2: A[j] = A[j + 1] decrease length(A) by one</pre><p>(Here $\\Theta$ represents big-theta.)</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\Theta(n)$<br/></span>",
                "<span style=\"display: inline;\">$\\Theta(n \\log n)$<br/></span>",
                "<span style=\"display: inline;\">$\\Theta\\left(n^{\\log _3 5}\\right)$<br/></span>",
                "<span style=\"display: inline;\">$\\Theta\\left(n^2\\right)$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"481955\"></a><div itemprop=\"text\">In the worst case, Delete is called for each element of $A$ (for example if every element is negative). Since the running time of Delete $(A, i)$ is proportional to the length of $A$ minus $i$, this means that in the worst case, the running time of the entire algorithm is proportional to $\\sum_{\\{i=1\\}}^{\\{n\\}}(\\mathrm{n}-\\mathrm{i})$<br/> <br/> This is just the sum from 0 to $n-1$ and we have seen in class that it is in $\\Theta\\left(\\mathrm{n}^2\\right)$.</div><br><br><small>Source: <a href=\"https://gateoverflow.in/481954/go-classes-dpp-algorithms-asymptotic-analysis\" target=\"_blank\">GATE Overflow #481954</a></small></div>"
        }
    ]
});

registerTest({
    "name": "DPP 07 - Algorithms (Asymptotic Analysis & Recurrences - Part 7)",
    "testLabel": "DPP 07",
    "testType": "DPP",
    "bracket": "Asymptotic Analysis & Recurrences - Part 7",
    "subject": "algo",
    "series": "cse-dpp-2027",
    "date": "Nov 03, 2026",
    "duration": "15 Min",
    "totalMarks": 6,
    "topicsCovered": "Asymptotic Analysis & Recurrences (Practice Set 7)",
    "questions": [
        {
            "marks": 2,
            "neg": 0,
            "type": "MSQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>State whether following statement(s) is/are correct or not<br/><br/>S1: If $\\mathrm{f}, \\mathrm{g}, \\mathrm{h}, \\mathrm{k}: \\mathrm{N} \\rightarrow \\mathrm{N}$ are functions such that $\\mathrm{f} \\in \\Theta(\\mathrm{g}), \\mathrm{h} \\in \\Theta(\\mathrm{k})$, and for all $n \\in N, f(n)&gt;h(n)$ and $g(n)&gt;k(n)$ then $f(n)-h(n) \\in O(g(n)- k(n)$ ).</p><p>S2: For any functions $f, g: R \\rightarrow R, \\max (f(n), g(n)) \\in \\Theta(f(n)+g(n))$.</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">S1 is true<br/></span>",
                "<span style=\"display: inline;\">S2 is true<br/></span>",
                "<span style=\"display: inline;\">S1 is false<br/></span>",
                "<span style=\"display: inline;\">S2 is false</span>"
            ],
            "answer": [
                "A"
            ],
            "solution": "<div class=\"solution-content\"><a name=\"481952\"></a><div itemprop=\"text\"><p><strong>S1) False.</strong><br/><br/>Here's a counterexample.<br/>Let $f(n)=n^2+n, g(n)=n^2+1$, and $h(n)=k(n)=n^2$. These functions meet the conditions stated in the question, but $f(n)-h(n)=n$ and $g(n)-k(n)=1$ and $\\mathrm{n} \\notin \\mathrm{O}(1)$.</p><p><strong>S2) False</strong><br/><br/>Counterexample:<br/>Let $\\mathrm{f}(\\mathrm{n})=-\\mathrm{n}, \\mathrm{g}(\\mathrm{n})=\\mathrm{n}$, then $\\max (\\mathrm{f}(\\mathrm{n}), \\mathrm{g}(\\mathrm{n}))=\\mathrm{n}, \\mathrm{f}(\\mathrm{n})+\\mathrm{g}(\\mathrm{n})=0$<br/><br/>Clearly $\\max (f(n), g(n)) \\in \\Theta(f(n)+g(n))$ doesn't hold</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/481951/go-classes-dpp-algorithms-asymptotic-analysis\" target=\"_blank\">GATE Overflow #481951</a></small></div>"
        },
        {
            "marks": 2,
            "neg": 0,
            "type": "MSQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Which of the following statements is/are always true?<br/><br/>(Here 'o' represents small-oh and ' 0 ' represents big-oh)</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">if $f(n)=\\theta(g(n))$ then $e^{f(n)}=O\\left(e^{g(n)}\\right)$<br/></span>",
                "<span style=\"display: inline;\">If $f(n)=O(g(n))$ and $g(n)=O(h(n))$ then $f(n)=o(h(n))$<br/></span>",
                "<span style=\"display: inline;\">If $\\mathrm{f}(\\mathrm{n})=\\mathrm{O}(\\mathrm{g}(\\mathrm{n})$ ) and $\\mathrm{g}(\\mathrm{n})=\\mathrm{O}(\\mathrm{f}(\\mathrm{n}))$ then $\\mathrm{f}(\\mathrm{n})=\\theta(\\mathrm{g}(\\mathrm{n})$ )<br/></span>",
                "<span style=\"display: inline;\">If $f(n)=O(g(n))$, then $\\log (f(n))=O(\\log (g(n)))$</span>"
            ],
            "answer": [
                "A"
            ],
            "solution": "<div class=\"solution-content\"><a name=\"481949\"></a><div itemprop=\"text\">C is always true.<br/> <br/> Counterexamples for:<br/> <br/> A) $f(n)=2 n, g(n)=n$<br/> <br/> B) $f(n)=n, g(n)=n, h(n)=n$<br/> <br/> D) $f(n)=1 / 2, g(n)=1+(1 / n)$</div><br><br><small>Source: <a href=\"https://gateoverflow.in/481948/go-classes-dpp-algorithms-asymptotic-analysis\" target=\"_blank\">GATE Overflow #481948</a></small></div>"
        },
        {
            "marks": 2,
            "neg": 0,
            "type": "MSQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p> </p><p><meta/>Compute the worst-case time complexity of the following function in terms of the number of dollar signs (\\$) printed as a function of N. <br/><br/><strong>(Give the tightest upper bound.)</strong><br/> </p><pre class=\"prettyprint linenums lang-c_cpp\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"4\">myCalc(N) { j = 0 n = N while (n &gt; 1) { n = n / 32 j++ } for (w = 0 to N/3 + 32) { for (k = 1 to j * N) { print(\"$\") } } }</pre><p> </p><p dir=\"ltr\"><b id=\"docs-internal-guid-9949b0c6-7fff-5737-5649-59e0ecae999f\">(Here O represents big-O.)</b></p><p dir=\"ltr\"> </p><p> </p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$O(N^{2}\\log_{32}N)$ <br/></span>",
                "<span style=\"display: inline;\">$O(N^{2}\\log_{2}N)$ <br/></span>",
                "<span style=\"display: inline;\">$O(N^{3})$ <br/></span>",
                "<span style=\"display: inline;\">$O(N^{2})$</span>"
            ],
            "answer": [
                "A"
            ],
            "solution": "<div class=\"solution-content\"><a name=\"481947\"></a><div itemprop=\"text\">$j=\\log _{32} N=\\log N$ So overall time $=\\log N+N^* N^* j=\\log N+N^2 * \\log N=\\Theta(N^2 \\log N)$</div><br><br><small>Source: <a href=\"https://gateoverflow.in/481946/go-classes-dpp-algorithms-asymptotic-analysis\" target=\"_blank\">GATE Overflow #481946</a></small></div>"
        }
    ]
});

registerTest({
    "name": "DPP 08 - Algorithms (Divide & Conquer, Searching & Hashing - Part 1)",
    "testLabel": "DPP 08",
    "testType": "DPP",
    "bracket": "Divide & Conquer, Searching & Hashing - Part 1",
    "subject": "algo",
    "series": "cse-dpp-2027",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 12,
    "topicsCovered": "Divide & Conquer, Searching & Hashing (Practice Set 1)",
    "questions": [
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><section data-testid=\"conversation-turn-18\" data-turn=\"assistant\" data-turn-id=\"request-WEB:63bad255-196e-47a5-ab22-32d85de3334a-8\" data-turn-id-container=\"request-WEB:63bad255-196e-47a5-ab22-32d85de3334a-8\" dir=\"auto\"><p data-end=\"51\" data-start=\"0\">An initially empty hash table $\\text{HT}$ has length $11$.</p><p data-end=\"74\" data-start=\"53\">The hash function is:</p><p data-end=\"96\" data-start=\"76\">$H(key)=key \\bmod 7$</p><p data-end=\"143\" data-start=\"98\">Collisions are resolved using linear probing.</p><p data-end=\"186\" data-start=\"145\">The following keys are inserted in order:</p><p data-end=\"219\" data-start=\"188\">$87, 40, 30, 6, 11, 22, 98, 20$</p><p data-end=\"282\" data-is-last-node=\"\" data-is-only-node=\"\" data-start=\"221\">What is the average search length for an unsuccessful search?</p></section></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$4$<br/></span>",
                "<span style=\"display: inline;\">$5.25$<br/></span>",
                "<span style=\"display: inline;\">$6$<br/></span>",
                "<span style=\"display: inline;\">$6.29$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"546623\"></a><div itemprop=\"text\"><p data-end=\"56\" data-start=\"0\">The hash table has length $11$, and the hash function is</p><p data-end=\"79\" data-start=\"58\">$H(key)=key \\bmod 7$.</p><p data-end=\"129\" data-start=\"81\">Insert the keys one by one using linear probing.</p><p data-end=\"173\" data-start=\"131\">$87 \\bmod 7=3$, so $87$ goes to index $3$.</p><p data-end=\"217\" data-start=\"175\">$40 \\bmod 7=5$, so $40$ goes to index $5$.</p><p data-end=\"261\" data-start=\"219\">$30 \\bmod 7=2$, so $30$ goes to index $2$.</p><p data-end=\"303\" data-start=\"263\">$6 \\bmod 7=6$, so $6$ goes to index $6$.</p><p data-end=\"347\" data-start=\"305\">$11 \\bmod 7=4$, so $11$ goes to index $4$.</p><p data-end=\"391\" data-start=\"349\">$22 \\bmod 7=1$, so $22$ goes to index $1$.</p><p data-end=\"435\" data-start=\"393\">$98 \\bmod 7=0$, so $98$ goes to index $0$.</p><p data-end=\"519\" data-start=\"437\">$20 \\bmod 7=6$. Index $6$ is occupied, so linear probing places $20$ at index $7$.</p><p data-end=\"544\" data-start=\"521\">Thus, the hash table is</p><p data-end=\"579\" data-start=\"546\">$[98,22,30,87,11,40,6,20,-,-,-]$.</p><p data-end=\"688\" data-start=\"581\">For an unsuccessful search, the possible initial hash positions are $0$ to $6$, since $H(key)=key \\bmod 7$.</p><p data-end=\"726\" data-start=\"690\">The unsuccessful search lengths are:</p><p data-end=\"747\" data-start=\"728\">From index $0$: $9$</p><p data-end=\"768\" data-start=\"749\">From index $1$: $8$</p><p data-end=\"789\" data-start=\"770\">From index $2$: $7$</p><p data-end=\"810\" data-start=\"791\">From index $3$: $6$</p><p data-end=\"831\" data-start=\"812\">From index $4$: $5$</p><p data-end=\"852\" data-start=\"833\">From index $5$: $4$</p><p data-end=\"873\" data-start=\"854\">From index $6$: $3$</p><p data-end=\"927\" data-start=\"875\">Therefore, the average unsuccessful search length is :</p><p data-end=\"954\" data-start=\"929\">$\\dfrac{9+8+7+6+5+4+3}{7}=\\dfrac{42}{7}=6$</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/546622/go-classes-dpp-gate-cs-da-algorithms-hashing\" target=\"_blank\">GATE Overflow #546622</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"11890\" data-start=\"11782\">Which of the following <strong data-end=\"11815\" data-start=\"11805\">cannot</strong> be a sequence of keys compared during a binary search for some target key?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$500,200,450,180$<br/></span>",
                "<span style=\"display: inline;\">$500,450,200,180$<br/></span>",
                "<span style=\"display: inline;\">$180,500,200,450$<br/></span>",
                "<span style=\"display: inline;\">$180,200,500,450$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"546094\"></a><div itemprop=\"text\"><p data-end=\"12100\" data-start=\"12026\">Binary search continually narrows the range in which the target can occur.</p><p data-end=\"12120\" data-start=\"12102\">Consider option A :</p><p data-end=\"12169\" data-start=\"12122\">$500\\rightarrow200\\rightarrow450\\rightarrow180$</p><p data-end=\"12245\" data-start=\"12171\">If the next comparison after $500$ is $200$, then the target must satisfy:</p><p data-end=\"12266\" data-start=\"12247\">$\\text{target}&lt;500$</p><p data-end=\"12306\" data-start=\"12268\">Then moving from $200$ to $450$ means:</p><p data-end=\"12327\" data-start=\"12308\">$\\text{target}&gt;200$</p><p data-end=\"12346\" data-start=\"12329\">So at this point:</p><p data-end=\"12371\" data-start=\"12348\">$200&lt;\\text{target}&lt;500$</p><p data-end=\"12405\" data-start=\"12373\">The next comparison is given as:</p><p data-end=\"12412\" data-start=\"12407\">$180$</p><p data-end=\"12483\" data-start=\"12414\">But $180$ lies <strong data-end=\"12470\" data-start=\"12429\">outside the current possible interval</strong> $(200,500)$.</p><p data-end=\"12554\" data-start=\"12485\">Therefore binary search could never compare with $180$ at this stage.</p><p data-end=\"12575\" data-start=\"12556\">So A is impossible.</p><p data-end=\"12688\" data-start=\"12577\">For the other sequences, every new comparison remains inside the interval implied by the preceding comparisons.</p><p data-end=\"12695\" data-start=\"12690\">So, </p><p data-end=\"12695\" data-start=\"12690\"><strong>Answer: A</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/546093/go-classes-dpp-gate-cs-da-algorithms-binary-search\" target=\"_blank\">GATE Overflow #546093</a></small></div>"
        },
        {
            "marks": 2,
            "neg": 0,
            "type": "MSQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"48\" data-start=\"0\">A linear-probing hash table of length $10$ uses:</p><p data-end=\"69\" data-start=\"50\">$h(k) = k \\bmod 10$</p><p data-end=\"142\" data-start=\"71\">After inserting eight keys into an initially empty table, the table is:</p><p data-end=\"330\" data-start=\"144\">$$\\begin{array}{|c|c|c|c|c|c|c|c|c|c|c|}<br/>\\hline<br/>\\text{Index} &amp; 0 &amp; 1 &amp; 2 &amp; 3 &amp; 4 &amp; 5 &amp; 6 &amp; 7 &amp; 8 &amp; 9 \\\\<br/>\\hline<br/>\\text{Value} &amp; 20 &amp; 19 &amp; - &amp; - &amp; 14 &amp; 44 &amp; 6 &amp; 74 &amp; 86 &amp; 59 \\\\<br/>\\hline<br/>\\end{array}$$</p><p data-end=\"365\" data-start=\"332\">The table never grows or shrinks.</p><p data-end=\"422\" data-start=\"367\">Which of the following could be valid insertion orders?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$14, 44, 6, 74, 86, 20, 59, 19$<br/></span>",
                "<span style=\"display: inline;\">$59, 6, 14, 20, 44, 19, 74, 86$<br/></span>",
                "<span style=\"display: inline;\">$20, 59, 6, 74, 14, 86, 44, 19$<br/></span>",
                "<span style=\"display: inline;\">$6, 59, 14, 20, 19, 44, 86, 74$</span>"
            ],
            "answer": [
                "A",
                "B"
            ],
            "solution": "<div class=\"solution-content\"><a name=\"546073\"></a><div itemprop=\"text\"><p data-end=\"1431\" data-start=\"1408\">The home positions are:</p><p data-end=\"1442\" data-start=\"1433\">$h(14)=4$</p><p data-end=\"1453\" data-start=\"1444\">$h(44)=4$</p><p data-end=\"1463\" data-start=\"1455\">$h(6)=6$</p><p data-end=\"1474\" data-start=\"1465\">$h(74)=4$</p><p data-end=\"1485\" data-start=\"1476\">$h(86)=6$</p><p data-end=\"1496\" data-start=\"1487\">$h(20)=0$</p><p data-end=\"1507\" data-start=\"1498\">$h(59)=9$</p><p data-end=\"1518\" data-start=\"1509\">$h(19)=9$</p><p data-end=\"1546\" data-start=\"1520\">Look at the final cluster:</p><p data-end=\"1593\" data-start=\"1548\">$4:14,\\quad5:44,\\quad6:6,\\quad7:74,\\quad8:86$</p><p data-end=\"1683\" data-start=\"1595\">For $44$ to end at index $5$, index $4$ must already contain $14$ when $44$ is inserted.</p><p data-end=\"1695\" data-start=\"1685\">Therefore, $14$ must be inserted before $44$.</p><p data-end=\"1802\" data-start=\"1733\">For $74$, whose home position is $4$, to end at index $7$, positions $4,5,6$ must already be occupied when $74$ is inserted.</p><p data-end=\"1911\" data-start=\"1862\">Thus $14$, $44$, and $6$ must appear before $74$.</p><p data-end=\"2012\" data-start=\"1913\">Similarly, $86$ hashes to $6$. </p><p data-end=\"2012\" data-start=\"1913\">To end at index $8$, positions $6$ and $7$ must already be occupied.</p><p data-end=\"2061\" data-start=\"2014\">Therefore $6$ and $74$ must appear before $86$.</p><p data-end=\"2084\" data-start=\"2063\">At the other cluster:</p><p data-end=\"2112\" data-start=\"2086\">$9:59,\\quad0:20,\\quad1:19$</p><p data-end=\"2219\" data-start=\"2114\">Since $19$ hashes to $9$, positions $9$ and $0$ must already contain $59$ and $20$ when $19$ is inserted.</p><p data-end=\"2249\" data-start=\"2221\">Checking the four sequences:</p><ul data-end=\"2419\" data-start=\"2251\"><li data-end=\"2281\" data-section-id=\"m427n9\" data-start=\"2251\">A satisfies all constraints.<br/> </li><li data-end=\"2312\" data-section-id=\"gd7pue\" data-start=\"2282\">B satisfies all constraints.<br/> </li><li data-end=\"2354\" data-section-id=\"ghj5u3\" data-start=\"2313\">C inserts $74$ before $14$, impossible.<br/> </li><li data-end=\"2419\" data-section-id=\"w3kcdj\" data-start=\"2355\">D inserts $86$ before $74$, so $86$ would not reach index $8$.</li></ul><p data-end=\"2427\" data-start=\"2421\"> </p><p data-end=\"2450\" data-start=\"2429\"><strong>Answer : A, B</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/546071/go-classes-dpp-gate-cs-da-algorithms-linear-probing\" target=\"_blank\">GATE Overflow #546071</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"12998\" data-start=\"12903\">When hashing is used for table addressing, a collision-resolution method is generally required.</p><p data-end=\"13004\" data-start=\"13000\">Why?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">Collision handling is required only when the table is completely full.<br/></span>",
                "<span style=\"display: inline;\">Collision handling is required to calculate the initial hash address of every key.<br/></span>",
                "<span style=\"display: inline;\">Collision handling is required when the table is empty.<br/></span>",
                "<span style=\"display: inline;\">Collision handling is required whenever the inserted key is not already present.<br/></span>",
                "<span style=\"display: inline;\">Different keys may hash to the same table address.</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"545844\"></a><div itemprop=\"text\"><p data-end=\"13506\" data-start=\"13414\">A hash function maps a potentially large key space into a limited number of table positions.</p><p data-end=\"13520\" data-start=\"13508\">For ex,</p><p data-end=\"13537\" data-start=\"13522\">$h(k)=k\\bmod10$</p><p data-end=\"13544\" data-start=\"13539\">Then,</p><p data-end=\"13555\" data-start=\"13546\">$h(17)=7$ and $h(27)=7$</p><p data-end=\"13618\" data-start=\"13574\">Two different keys produce the same address.</p><p data-end=\"13630\" data-start=\"13620\">This is a <strong data-end=\"13645\" data-start=\"13632\">collision.</strong></p><p data-end=\"13731\" data-start=\"13647\">Therefore, a hash table requires some method for resolving such situations, such as:</p><ul data-end=\"13806\" data-start=\"13733\"><li data-end=\"13752\" data-section-id=\"3pe5vk\" data-start=\"13733\">separate chaining<br/> </li><li data-end=\"13769\" data-section-id=\"q362ca\" data-start=\"13753\">linear probing<br/> </li><li data-end=\"13789\" data-section-id=\"mwu0h7\" data-start=\"13770\">quadratic probing<br/> </li><li data-end=\"13806\" data-section-id=\"1plg54f\" data-start=\"13790\">double hashing<br/> </li></ul><p data-end=\"13814\" data-start=\"13808\">Hence,</p><p data-end=\"13842\" data-start=\"13816\"><strong>Answer : E</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/545838/go-classes-dpp-gate-cs-da-algorithms-hash-collision-handling\" target=\"_blank\">GATE Overflow #545838</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"4049\" data-start=\"4013\">Consider three recursive algorithms.</p><p data-end=\"4066\" data-section-id=\"1e7kpso\" data-start=\"4051\"><strong>Algorithm</strong> $\\mathbf{1}$</p><p data-end=\"4175\" data-start=\"4068\">Divides a problem of size $N$ into <strong data-end=\"4110\" data-start=\"4103\">two</strong> subproblems of size $N/2$ and performs constant additional work.</p><p data-end=\"4197\" data-start=\"4177\">$T_1(N)=2T_1(N/2)+c$</p><p data-end=\"4214\" data-section-id=\"1e7kpsr\" data-start=\"4199\"><strong>Algorithm</strong> $\\mathbf{2}$</p><p data-end=\"4294\" data-start=\"4216\">Solves <strong data-end=\"4230\" data-start=\"4223\">one</strong> subproblem of size $N/2$ and performs constant additional work.</p><p data-end=\"4315\" data-start=\"4296\">$T_2(N)=T_2(N/2)+c$</p><p data-end=\"4332\" data-section-id=\"1e7kpsq\" data-start=\"4317\"><strong>Algorithm</strong> $\\mathbf{3}$</p><p data-end=\"4407\" data-start=\"4334\">Solves two subproblems of size $N/2$ and performs linear additional work.</p><p data-end=\"4430\" data-start=\"4409\">$T_3(N)=2T_3(N/2)+cN$</p><p data-end=\"4457\" data-start=\"4432\">Which mapping is correct?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$T_1=\\Theta(\\log N)$, $T_2=\\Theta(N)$, $T_3=\\Theta(N^2)$<br/></span>",
                "<span style=\"display: inline;\">$T_1=\\Theta(N)$, $T_2=\\Theta(\\log N)$, $T_3=\\Theta(N\\log N)$<br/></span>",
                "<span style=\"display: inline;\">$T_1=\\Theta(N\\log N)$, $T_2=\\Theta(\\log N)$, $T_3=\\Theta(N)$<br/></span>",
                "<span style=\"display: inline;\">$T_1=\\Theta(N)$, $T_2=\\Theta(N)$, $T_3=\\Theta(N\\log N)$</span>"
            ],
            "answer": "B",
            "solution": "<div class=\"solution-content\"><a name=\"545707\"></a><div itemprop=\"text\"><p data-end=\"4772\" data-start=\"4756\">For Algorithm $1:$</p><p data-end=\"4797\" data-start=\"4774\">$T_1(N)=2T_1(N/2)+O(1)$</p><p data-end=\"4824\" data-start=\"4799\">Using the Master Theorem:</p><p data-end=\"4841\" data-start=\"4826\">$a=2,\\quad b=2$</p><p data-end=\"4859\" data-start=\"4843\">$n^{\\log_b a}=N$ and $f(N)=O(1)$</p><p data-end=\"4890\" data-start=\"4880\">$\\therefore T_1(N)=\\Theta(N)$<br/> </p><p data-end=\"4928\" data-start=\"4912\">For Algorithm $2:$</p><p data-end=\"4952\" data-start=\"4930\">$T_2(N)=T_2(N/2)+O(1)$</p><p data-end=\"5003\" data-start=\"4954\">The problem size is repeatedly halved, producing $\\Theta(\\log N)$ levels.</p><p data-end=\"5042\" data-start=\"5032\">$\\therefore T_2(N)=\\Theta(\\log N)$</p><p data-end=\"5085\" data-start=\"5069\"><br/>For Algorithm $3:$</p><p data-end=\"5115\" data-start=\"5087\">$T_3(N)=2T_3(N/2)+\\Theta(N)$</p><p data-end=\"5160\" data-start=\"5117\">This is the standard Merge Sort recurrence:</p><p data-end=\"5186\" data-start=\"5162\">$T_3(N)=\\Theta(N\\log N)$</p><p data-end=\"5194\" data-start=\"5188\"> </p><p data-end=\"5214\" data-start=\"5196\"><strong>Answer : B</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/545706/go-classes-dpp-gate-cs-da-algorithms-divide-%26-conquer\" target=\"_blank\">GATE Overflow #545706</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"4\" data-start=\"0\">Let, $L=\\langle r_1,r_2,\\ldots,r_n\\rangle$ be an arbitrary list of integers, not necessarily distinct.</p><p data-end=\"157\" data-start=\"106\">Which of the following statements is <strong data-end=\"156\" data-start=\"143\">incorrect</strong>?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">There exists an optimal deterministic $\\Theta(n)$ algorithm for finding the largest element of $L$.<br/></span>",
                "<span style=\"display: inline;\">The $i$th smallest element can be found using a deterministic $O(n\\log n)$ algorithm.<br/></span>",
                "<span style=\"display: inline;\">If there exists a linear-time algorithm for selecting the $i$th smallest element, then that algorithm can be used to sort the entire list in linear time.<br/></span>",
                "<span style=\"display: inline;\">The third-largest element can be determined in linear time.<br/></span>",
                "<span style=\"display: inline;\">The minimum and maximum can both be found during a single traversal of the list.</span>"
            ],
            "answer": "C",
            "solution": "<div class=\"solution-content\"><a name=\"545705\"></a><div itemprop=\"text\"><p data-end=\"2859\" data-start=\"2774\">A is true. Finding the maximum requires examining the elements, so it can be done in $\\Theta(n)$</p><p data-end=\"2906\" data-start=\"2874\">B is true. One simple method is:</p><ol data-end=\"2981\" data-start=\"2908\"><li data-end=\"2942\" data-section-id=\"1wctrjz\" data-start=\"2908\">Sort the array in $O(n\\log n)$.<br/> </li><li data-end=\"2981\" data-section-id=\"11aokvz\" data-start=\"2943\">Return the element at position $i$.</li></ol><p data-end=\"3021\" data-start=\"2983\">So $O(n\\log n)$ is certainly possible.</p><p data-end=\"3021\" data-start=\"2983\">C is false.</p><p data-end=\"3072\" data-start=\"3036\">Even if one call to selection takes $O(n)$ that does <strong data-end=\"3099\" data-start=\"3092\">not</strong> mean the whole array can be sorted in $O(n)$.</p><p data-end=\"3232\" data-start=\"3147\">To obtain all order statistics independently would require many selection operations.</p><p data-end=\"3286\" data-start=\"3234\">Also, comparison-based sorting has a lower bound of $\\Omega(n\\log n)$ so a general linear-time comparison sort would contradict that lower bound.</p><p data-end=\"3456\" data-start=\"3384\">D is true. The three largest elements can be maintained during one scan $O(n)$</p><p data-end=\"3553\" data-start=\"3466\">E is also true. Minimum and maximum can be tracked simultaneously during one traversal.</p><p data-end=\"3560\" data-start=\"3555\"> </p><p data-end=\"3588\" data-start=\"3562\"><strong>Answer: C</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/545704/go-classes-dpp-gate-cs-da-algorithms-selection-algorithms\" target=\"_blank\">GATE Overflow #545704</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"6456\" data-start=\"6290\">Suppose $n$ elements are divided into groups of $r$ elements. The median of each group is found, and the median of these group medians is used as the selection pivot.</p><p data-end=\"6556\" data-start=\"6458\">For which value of $r$ does the resulting selection algorithm have worst-case running time $O(n)$?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$r=3$<br/></span>",
                "<span style=\"display: inline;\">$r=7$<br/></span>",
                "<span style=\"display: inline;\">Both $r=3$ and $r=7$<br/></span>",
                "<span style=\"display: inline;\">Neither $r=3$ nor $r=7$</span>"
            ],
            "answer": "B",
            "solution": "<div class=\"solution-content\"><a name=\"542950\"></a><div itemprop=\"text\"><section data-testid=\"conversation-turn-38\" data-turn=\"assistant\" data-turn-id=\"request-WEB:9870d8f6-b6ca-4790-8551-42f44e47a3bb-19\" data-turn-id-container=\"request-WEB:9870d8f6-b6ca-4790-8551-42f44e47a3bb-19\" dir=\"auto\"><p data-end=\"98\" data-start=\"13\">In the median-of-medians algorithm, the elements are divided into groups of size $r$.</p><p data-end=\"128\" data-start=\"100\">We check both values of $r$.</p><p data-end=\"147\" data-section-id=\"1jc9m11\" data-start=\"130\"><strong>Case</strong> $\\textbf{1}:$ $r=3$</p><p data-end=\"166\" data-start=\"149\">Number of groups: $\\frac{n}{3}$</p><p data-end=\"262\" data-start=\"183\">The median of the group medians is found recursively, so one recursive term is:</p><p data-end=\"291\" data-start=\"264\">$T\\left(\\frac{n}{3}\\right)$</p><p data-end=\"444\" data-start=\"293\">In each group of $3$, the median is the second element. Therefore, at least $2$ elements in such a group are greater than or equal to the group median.</p><p data-end=\"529\" data-start=\"446\">At least half of the group medians are greater than or equal to the selected pivot.</p><p data-end=\"613\" data-start=\"531\">So, the number of elements guaranteed to be greater than or equal to the pivot is:</p><p data-end=\"665\" data-start=\"615\">$\\frac{1}{2}\\times\\frac{n}{3}\\times 2=\\frac{n}{3}$</p><p data-end=\"746\" data-start=\"667\">Similarly, at least $\\frac{n}{3}$ elements are less than or equal to the pivot.</p><p data-end=\"797\" data-start=\"748\">Therefore, the larger partition has size at most:</p><p data-end=\"827\" data-start=\"799\">$n-\\frac{n}{3}=\\frac{2n}{3}$</p><p data-end=\"847\" data-start=\"829\">The recurrence is:</p><p data-end=\"918\" data-start=\"849\">$T(n)=T\\left(\\frac{n}{3}\\right)+T\\left(\\frac{2n}{3}\\right)+\\Theta(n)$</p><p data-end=\"926\" data-start=\"920\">Since:</p><p data-end=\"955\" data-start=\"928\">$\\frac{1}{3}+\\frac{2}{3}=1$</p><p data-end=\"977\" data-start=\"957\">the running time is:</p><p data-end=\"1001\" data-start=\"979\">$T(n)=\\Theta(n\\log n)$</p><p data-end=\"1046\" data-start=\"1003\">Thus, $r=3$ does not guarantee linear time.</p><p data-end=\"1070\" data-section-id=\"1vk7336\" data-start=\"1053\"><br/><strong>Case</strong> $\\textbf{2}:$ $r=7$</p><p data-end=\"1089\" data-start=\"1072\">Number of groups: $\\frac{n}{7}$</p><p data-end=\"1168\" data-start=\"1106\">The recursive call for finding the median of group medians is:</p><p data-end=\"1197\" data-start=\"1170\">$T\\left(\\frac{n}{7}\\right)$</p><p data-end=\"1350\" data-start=\"1199\">In each group of $7$, the median is the fourth element. Therefore, at least $4$ elements in such a group are greater than or equal to the group median.</p><p data-end=\"1435\" data-start=\"1352\">At least half of the group medians are greater than or equal to the selected pivot.</p><p data-end=\"1522\" data-start=\"1437\">Hence, the number of elements guaranteed to be greater than or equal to the pivot is:</p><p data-end=\"1575\" data-start=\"1524\">$\\frac{1}{2}\\times\\frac{n}{7}\\times 4=\\frac{2n}{7}$</p><p data-end=\"1657\" data-start=\"1577\">Similarly, at least $\\frac{2n}{7}$ elements are less than or equal to the pivot.</p><p data-end=\"1708\" data-start=\"1659\">Therefore, the larger partition has size at most:</p><p data-end=\"1739\" data-start=\"1710\">$n-\\frac{2n}{7}=\\frac{5n}{7}$</p><p data-end=\"1759\" data-start=\"1741\">The recurrence is:</p><p data-end=\"1830\" data-start=\"1761\">$T(n)=T\\left(\\frac{n}{7}\\right)+T\\left(\\frac{5n}{7}\\right)+\\Theta(n)$</p><p data-end=\"1838\" data-start=\"1832\">Since:</p><p data-end=\"1879\" data-start=\"1840\">$\\frac{1}{7}+\\frac{5}{7}=\\frac{6}{7}&lt;1$</p><p data-end=\"1930\" data-start=\"1881\">the total recursive work decreases geometrically.</p><p data-end=\"1942\" data-start=\"1932\">Therefore:</p><p data-end=\"1960\" data-start=\"1944\">$T(n)=\\Theta(n)$</p><p data-end=\"2026\" data-start=\"1962\">Hence, only groups of size $7$ guarantee worst-case linear time.</p><p data-end=\"2067\" data-is-last-node=\"\" data-is-only-node=\"\" data-start=\"2028\"><br/><strong>Answer: B</strong></p></section></div><br><br><small>Source: <a href=\"https://gateoverflow.in/542946/go-classes-dpp-gate-cs-da-algorithms-divide-and-conquer\" target=\"_blank\">GATE Overflow #542946</a></small></div>"
        },
        {
            "marks": 2,
            "neg": 0,
            "type": "MSQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"4165\" data-start=\"4079\">Which of the following are <strong data-end=\"4134\" data-start=\"4106\">important design choices</strong> rather than arbitrary choices?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">In binary search, compute the middle index using $\\texttt{(lo + hi) >>> 1}$ instead of $\\texttt{(lo + hi) / 2}$.<br/></span>",
                "<span style=\"display: inline;\">When equal keys are encountered during merging, copy the element from the left subarray before the equal element from the right subarray.<br/></span>",
                "<span style=\"display: inline;\">During $2$-way quicksort partitioning, stop both scans when they encounter keys equal to the pivot.<br/></span>",
                "<span style=\"display: inline;\">In quicksort, always recursively process the left subarray before processing the right subarray.</span>"
            ],
            "answer": [
                "A"
            ],
            "solution": "<div class=\"solution-content\"><a name=\"542945\"></a><div itemprop=\"text\"><ol start=\"1\" style=\"list-style-type: upper-alpha;\"><li data-end=\"4685\" data-start=\"4668\"><strong>Important</strong><br/>Using the unsigned right-shift calculation protects the middle-index computation when $\\texttt{lo + hi}$ exceeds the maximum positive signed integer value.<br/>Therefore, this choice helps avoid an overflow-related error.<br/> </li><li data-end=\"4915\" data-start=\"4898\"><strong>Important</strong><br/>When equal elements are taken from the left subarray first, their original relative order is preserved.<br/>This property makes mergesort <strong data-end=\"5062\" data-start=\"5052\">stable</strong>.<br/>Therefore, B is important.<br/> </li><li data-end=\"5110\" data-start=\"5093\"><strong>Important</strong><br/>Suppose an array contains many elements equal to the pivot.<br/>If both scans skip all equal keys, partitioning can repeatedly produce poor subproblems and lead to quadratic behaviour.<br/>Stopping on equal keys distributes equal elements across the partition more safely.<br/>Therefore, C is important.<br/> </li><li data-end=\"5425\" data-start=\"5408\"><strong>Arbitrary</strong><br/>Both recursive subarrays must eventually be sorted, but their processing order does not affect the final sorted result.<br/>Processing the right side first would also be correct.<br/>Therefore, D is not an important design requirement.</li></ol></div><br><br><small>Source: <a href=\"https://gateoverflow.in/542944/go-classes-dpp-gate-cs-da-algorithms-implementation-choices\" target=\"_blank\">GATE Overflow #542944</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"3477\" data-start=\"3321\">There are $n$ cities, and exactly $k$ of them are contaminated. A test on any subset tells whether at least one contaminated city is present in that subset.</p><p data-end=\"3618\" data-start=\"3479\">A divide-and-conquer algorithm splits the cities into two equal groups, tests each group, and recurses only into groups that test positive.</p><p data-end=\"3671\" data-start=\"3620\">What is the number of tests used by this algorithm?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$O(\\log n)$<br/></span>",
                "<span style=\"display: inline;\">$O(k\\log n)$<br/></span>",
                "<span style=\"display: inline;\">$O(n)$<br/></span>",
                "<span style=\"display: inline;\">$O(n\\log k)$</span>"
            ],
            "answer": "B",
            "solution": "<div class=\"solution-content\"><a name=\"542791\"></a><div itemprop=\"text\"><p style=\"text-align:center\"><img alt=\"\" height=\"385\" src=\"https://cdn.mathpix.com/snip/images/yQTeWHPHfn_ir7x_4MCckfYouHz_i1I0F8Wg4VCht_U.original.fullsize.png\" width=\"681\"/></p><p data-end=\"110\" data-start=\"14\"><br/>At each level, the algorithm divides every positive group into two halves and tests both halves.</p><p data-end=\"142\" data-start=\"112\">The recursion tree has height $: \\log_2 n$</p><p data-end=\"317\" data-start=\"156\">Since there are exactly $k$ contaminated cities, at any level there can be at most $k$ positive groups. Each positive group produces two tests at the next level.</p><p data-end=\"371\" data-start=\"319\">Therefore, the number of tests per level is at most $: 2k$</p><p data-end=\"430\" data-start=\"379\">Over $\\log n$ levels, the total number of tests is $: T(n,k) \\leq 2k\\log n$</p><p data-end=\"462\" data-start=\"456\">Hence,</p><p data-end=\"483\" data-start=\"464\">$\\boxed{T(n,k)=O(k\\log n)}$<br/> </p><p data-end=\"511\" data-start=\"485\"><strong>Answer : B</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/542789/go-classes-dpp-gate-cs-da-algorithms-divide-and-conquer\" target=\"_blank\">GATE Overflow #542789</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"2120\" data-start=\"1957\">A sorted table contains $2000$ distinct elements in increasing order. A key is searched using binary search, and it is guaranteed that the key exists in the table.</p><p data-end=\"2168\" data-start=\"2122\">What is the maximum number of key comparisons?</p></div></span>",
            "image": "",
            "options": [],
            "answer": "11",
            "solution": "<div class=\"solution-content\"><a name=\"542793\"></a><div itemprop=\"text\"><section data-testid=\"conversation-turn-10\" data-turn=\"assistant\" data-turn-id=\"request-WEB:9870d8f6-b6ca-4790-8551-42f44e47a3bb-5\" data-turn-id-container=\"request-WEB:9870d8f6-b6ca-4790-8551-42f44e47a3bb-5\" dir=\"auto\"><p data-end=\"91\" data-start=\"14\">In binary search, the search space is reduced to half after every comparison.</p><p data-end=\"106\" data-start=\"93\">For $n=2000$:</p><p data-end=\"121\" data-start=\"108\">$2^{10}=1024$</p><p data-end=\"136\" data-start=\"123\">$2^{11}=2048$</p><p data-end=\"144\" data-start=\"138\">Since:</p><p data-end=\"165\" data-start=\"146\">$1024&lt;2000\\leq2048$</p><p data-end=\"244\" data-start=\"167\">the maximum number of comparisons required for a successful binary search is:</p><p data-end=\"277\" data-start=\"246\">$\\lfloor \\log_2 2000 \\rfloor+1=10+1=11$</p><p data-end=\"356\" data-is-last-node=\"\" data-is-only-node=\"\" data-start=\"295\">Therefore, the <strong data-end=\"355\" data-start=\"310\">maximum number of key comparisons is $\\boxed{\\mathbf{11}}$</strong></p></section></div><br><br><small>Source: <a href=\"https://gateoverflow.in/542786/go-classes-dpp-gate-cs-da-algorithms-binary-search\" target=\"_blank\">GATE Overflow #542786</a></small></div>"
        }
    ]
});

registerTest({
    "name": "DPP 09 - Algorithms (Divide & Conquer, Searching & Hashing - Part 2)",
    "testLabel": "DPP 09",
    "testType": "DPP",
    "bracket": "Divide & Conquer, Searching & Hashing - Part 2",
    "subject": "algo",
    "series": "cse-dpp-2027",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 12,
    "topicsCovered": "Divide & Conquer, Searching & Hashing (Practice Set 2)",
    "questions": [
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"3076\" data-start=\"2956\">Karatsuba multiplication multiplies two $n$-digit numbers by reducing the number of recursive half-size multiplications.</p><p data-end=\"3131\" data-start=\"3078\">Which recurrence represents Karatsuba multiplication?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$T(n) = 4T(n/2) + \\Theta(n)$<br/></span>",
                "<span style=\"display: inline;\">$T(n) = 3T(n/2) + \\Theta(n)$<br/></span>",
                "<span style=\"display: inline;\">$T(n) = 2T(n/2) + \\Theta(n^2)$<br/></span>",
                "<span style=\"display: inline;\">$T(n) = T(n/2) + \\Theta(n)$</span>"
            ],
            "answer": "B",
            "solution": "<div class=\"solution-content\"><a name=\"542763\"></a><div itemprop=\"text\"><p data-end=\"2427\" data-start=\"2334\">In normal divide-and-conquer multiplication, two $n$-digit numbers are split into two halves.</p><p data-end=\"2496\" data-start=\"2429\">The normal method uses $4$ recursive multiplications of size $n/2$.</p><p data-end=\"2530\" data-start=\"2498\">So normal recurrence is roughly:</p><p data-end=\"2560\" data-start=\"2532\">$T(n) = 4T(n/2) + \\Theta(n)$</p><p data-end=\"2654\" data-start=\"2562\">Karatsuba improves this by reducing the number of recursive multiplications from $4$ to $3$.</p><p data-end=\"2728\" data-start=\"2656\">It still does linear extra work for addition, subtraction, and shifting.</p><p data-end=\"2756\" data-start=\"2730\">So the recurrence becomes:</p><p data-end=\"2786\" data-start=\"2758\">$T(n) = 3T(n/2) + \\Theta(n)$</p><p data-end=\"2809\" data-start=\"2788\">Using Master Theorem:</p><p data-end=\"2818\" data-start=\"2811\">$a = 3$</p><p data-end=\"2827\" data-start=\"2820\">$b = 2$</p><p data-end=\"2847\" data-start=\"2829\">$f(n) = \\Theta(n)$</p><p data-end=\"2878\" data-start=\"2849\">$n^{\\log_b a} = n^{\\log_2 3}$</p><p data-end=\"2941\" data-start=\"2880\">Since $\\log_2 3 \\approx 1.585$, the recursive work dominates.</p><p data-end=\"2946\" data-start=\"2943\">So:</p><p data-end=\"2977\" data-start=\"2948\">$T(n) = \\Theta(n^{\\log_2 3})$</p><p data-end=\"3040\" data-start=\"2979\">But the question asks for the recurrence, so final answer is : <strong>B</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/542760/go-classes-dpp-gate-cs-da-algorithms-divide-%26-conquer\" target=\"_blank\">GATE Overflow #542760</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"2291\" data-start=\"2146\">An array has distinct elements. A local minimum is an element smaller than both of its neighbors, with endpoints compared to their only neighbor.</p><p data-end=\"2359\" data-start=\"2293\">A divide-and-conquer algorithm checks the middle element $A[mid]$.</p><p data-end=\"2428\" data-start=\"2361\">If $A[mid-1] &lt; A[mid]$, which side should the algorithm recurse on?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">Left half<br/></span>",
                "<span style=\"display: inline;\">Right half<br/></span>",
                "<span style=\"display: inline;\">Both halves<br/></span>",
                "<span style=\"display: inline;\">No recursion is needed</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"542764\"></a><div itemprop=\"text\"><p data-end=\"1641\" data-start=\"1604\">We check the middle element $A[mid]$.</p><p data-end=\"1662\" data-start=\"1643\">Given condition is:</p><p data-end=\"1685\" data-start=\"1664\">$A[mid - 1] &lt; A[mid]$</p><p data-end=\"1751\" data-start=\"1687\">This means the left neighbor is smaller than the middle element.</p><p data-end=\"1805\" data-start=\"1753\">So, if we move left from $mid$, the value decreases.</p><p data-end=\"1924\" data-start=\"1807\">In an array with distinct elements, if there is a decreasing direction, then a local minimum must exist on that side.</p><p data-end=\"1930\" data-start=\"1926\">Because while moving left:</p><ul data-end=\"2130\" data-start=\"1960\"><li data-end=\"2064\" data-section-id=\"1of4d30\" data-start=\"1960\">either values keep decreasing until the first element, then the first element becomes a local minimum,<br/> </li><li data-end=\"2130\" data-section-id=\"rjh7ld\" data-start=\"2065\">or at some point the direction changes, giving a local minimum.</li></ul><p data-end=\"2139\" data-start=\"2132\">So, if:</p><p data-end=\"2162\" data-start=\"2141\">$A[mid - 1] &lt; A[mid]$</p><p data-end=\"2192\" data-start=\"2164\">we recurse on the left half.</p><p data-end=\"2221\" data-start=\"2194\"><strong>Answer : A</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/542759/go-classes-dpp-gate-cs-da-algorithms-local-minimum\" target=\"_blank\">GATE Overflow #542759</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"1321\" data-start=\"1230\">In the divide-and-conquer algorithm for maximum sum subarray, the maximum subarray may lie:</p><p data-end=\"1419\" data-start=\"1387\">What is the third possible case?</p><p><strong>Given Details:</strong></p><ul><li>entirely in the left half</li><li>entirely in the right half</li></ul></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">It must contain only positive elements.</span>",
                "<span style=\"display: inline;\">It must be exactly the middle element.</span>",
                "<span style=\"display: inline;\">It crosses the middle, using a suffix of the left half and a prefix of the right half.</span>",
                "<span style=\"display: inline;\">It must start at the first element and end at the last element.</span>"
            ],
            "answer": "C",
            "solution": "<div class=\"solution-content\"><a name=\"542765\"></a><div itemprop=\"text\"><p data-end=\"950\" data-start=\"865\">In divide and conquer for maximum sum subarray, the array is divided into two halves.</p><p data-end=\"1010\" data-start=\"952\">The maximum sum subarray can occur in three possible ways.</p><p data-end=\"1058\" data-start=\"1012\">Case $1$: It lies completely in the left half.</p><p data-end=\"1107\" data-start=\"1060\">Case $2$: It lies completely in the right half.</p><p data-end=\"1141\" data-start=\"1109\">Case $3$: It crosses the middle.</p><p data-end=\"1190\" data-start=\"1143\">If it crosses the middle, then it must include:</p><ul data-end=\"1248\" data-start=\"1192\"><li data-end=\"1219\" data-section-id=\"ynkh86\" data-start=\"1192\">a suffix of the left half<br/> </li><li data-end=\"1248\" data-section-id=\"1vtw79m\" data-start=\"1220\">a prefix of the right half</li></ul><p data-end=\"1378\" data-start=\"1250\">So, the crossing sum is calculated by taking the best suffix sum from the left side and the best prefix sum from the right side.</p><p data-end=\"1418\" data-start=\"1380\">Therefore, the third possible case is:</p><p data-end=\"1506\" data-start=\"1420\">It crosses the middle, using a suffix of the left half and a prefix of the right half.</p><p data-end=\"1521\" data-start=\"1508\"><strong>Answer: C</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/542758/go-classes-dpp-gate-cs-da-algorithms-max-sum-subarray\" target=\"_blank\">GATE Overflow #542758</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"617\" data-start=\"491\">Suppose array $A[1 \\ldots n]$ is sorted in non-decreasing order and it is guaranteed that there exists an index $i$ such that:</p><p data-end=\"629\" data-start=\"619\">$A[i] = i$</p><p data-end=\"731\" data-start=\"631\">A divide-and-conquer algorithm checks the middle index and then searches only one half of the array.</p><p data-end=\"761\" data-start=\"733\">What is the time complexity?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$O(1)$<br/></span>",
                "<span style=\"display: inline;\">$O(\\log n)$<br/></span>",
                "<span style=\"display: inline;\">$O(n)$<br/></span>",
                "<span style=\"display: inline;\">$O(n\\log n)$</span>"
            ],
            "answer": "B",
            "solution": "<div class=\"solution-content\"><a name=\"542766\"></a><div itemprop=\"text\"><p data-end=\"219\" data-start=\"155\">The array is sorted, and we need to find an index $i$ such that:</p><p data-end=\"231\" data-start=\"221\">$A[i] = i$</p><p data-end=\"290\" data-start=\"233\">The divide-and-conquer algorithm checks the middle index.</p><p data-end=\"322\" data-start=\"292\">Let the middle index be $mid$.</p><p data-end=\"368\" data-start=\"324\">If $A[mid] = mid$, then we found the answer.</p><p data-end=\"491\" data-start=\"370\">Otherwise, based on the sorted property, the algorithm eliminates one half of the array and searches only the other half.</p><p data-end=\"541\" data-start=\"493\">So at every step, the problem size becomes half:</p><p data-end=\"613\" data-start=\"543\">$n \\rightarrow n/2 \\rightarrow n/4 \\rightarrow n/8 \\rightarrow \\cdots$</p><p data-end=\"633\" data-start=\"615\">The recurrence is:</p><p data-end=\"657\" data-start=\"635\">$T(n) = T(n/2) + O(1)$</p><p data-end=\"707\" data-start=\"659\">The number of times we can divide $n$ by $2$ is:</p><p data-end=\"719\" data-start=\"709\">$\\log_2 n$</p><p data-end=\"751\" data-start=\"721\">Therefore, time complexity is: $\\boxed{O(\\log n)}$</p><p data-end=\"799\" data-start=\"774\"><strong>Answer : B</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/542757/go-classes-dpp-gate-cs-da-algorithms-divide-%26-conquer\" target=\"_blank\">GATE Overflow #542757</a></small></div>"
        },
        {
            "marks": 2,
            "neg": 0,
            "type": "MSQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>A Perfectly balanced binary search tree (BST) contains 15 distinct integers.<br/><br/>The largest element is stored at the rightmost node of the tree.<br/><br/>Which of the following elements cannot be the direct parent of the largest element?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">The 2nd largest element<br/></span>",
                "<span style=\"display: inline;\">The 3rd largest element<br/></span>",
                "<span style=\"display: inline;\">The 4th largest element<br/></span>",
                "<span style=\"display: inline;\">The 5th largest element</span>"
            ],
            "answer": [
                "B",
                "C",
                "D"
            ],
            "solution": "<div class=\"solution-content\"><a name=\"501236\"></a><div itemprop=\"text\"><p>Answer: <strong>(B, C, D)</strong></p><p>A perfectly balanced binary search tree (BST) with 15 distinct integers has a height of 4 (including the root). The largest element is always the rightmost node. The parent of this largest element must be the second largest element. This is because in a BST, all elements in the right subtree of a node are larger than the node itself, and to reach the largest element, one consistently traverses right. The only element that can directly point to the largest element is the next largest one.</p><p>For a tree to remain balanced, the depth of the parent of the largest element can vary depending on where other elements are placed, but its value relative to the largest element is fixed as the second largest. The second largest element is the only possible direct parent of the largest element. Therefore, Option B,C,D cannot be the direct parent.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/487769/go-classes-dpp-algorithm-bst\" target=\"_blank\">GATE Overflow #487769</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider the following binary search tree T given below. Which node contains the fourth smallest element in $T$ ?</p><p style=\"text-align:center\"><img alt=\"\" height=\"134\" src=\"https://gateoverflow.in/?qa=blob&amp;qa_blobid=5790067124797230132\" width=\"244\"/></p></div></span>",
            "image": "https://gateoverflow.in/?qa=blob&qa_blobid=5790067124797230132",
            "options": [
                "<span style=\"display: inline;\">Q<br/></span>",
                "<span style=\"display: inline;\">V<br/></span>",
                "<span style=\"display: inline;\">W<br/></span>",
                "<span style=\"display: inline;\">X</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"487273\"></a><div itemprop=\"text\"><p>in-order traversal sequence is: <b>U,Q,X,W,P,V,Y,Z</b></p><p><b>Anwer W</b></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/486905/go-classes-dpp-algorithm-isro\" target=\"_blank\">GATE Overflow #486905</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>The recurrence relation that arises in relation with the complexity of binary search is</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$T(n)=2 T(n / 2)+k$, where k is constant<br/></span>",
                "<span style=\"display: inline;\">$T(n)=T(n / 2)+k$, where k is constant<br/></span>",
                "<span style=\"display: inline;\">$T(n)=T(n / 2)+\\log n$<br/></span>",
                "<span style=\"display: inline;\">$T(n)=T(n / 2)+n$</span>"
            ],
            "answer": "B",
            "solution": "<div class=\"solution-content\"><a name=\"486538\"></a><div itemprop=\"text\">answer is B</div><br><br><small>Source: <a href=\"https://gateoverflow.in/486523/go-classes-dpp-algorithm-isro\" target=\"_blank\">GATE Overflow #486523</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>In a tournament method with $8$ distinct elements, suppose elements are inserted in random order into the knockout tree to find max, $2^{\\text {nd }} \\max$. What is the probability that the second maximum element makes it to the final match?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$1 / 2$<br/></span>",
                "<span style=\"display: inline;\">$1 / 4$<br/></span>",
                "<span style=\"display: inline;\">$4 / 7$<br/></span>",
                "<span style=\"display: inline;\">$1 / 8$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"484213\"></a><div itemprop=\"text\"><p>There are 8 elements. initially<br/><br/>Max can be placed anywhere because it always wins<br/><br/>To reach to the final, $2^{\\text {nd }}$ max should be in the opposite half of the max element</p><ul><li>Fix the bracket with two halves of 4 slots each.<br/> </li><li>Place the max anywhere (8 choices). Now there are 7 remaining slots.<br/> </li><li>Of those 7, 4 are in the opposite half and 3 are in the same half.<br/> </li><li>The 2nd max must be in the opposite half to reach the final.</li></ul><p>$\\operatorname{Pr}(2$nd max reaches final $)=4 / 7$</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/484212/go-classes-dpp-algorithms-tournament-method\" target=\"_blank\">GATE Overflow #484212</a></small></div>"
        },
        {
            "marks": 2,
            "neg": 0,
            "type": "MSQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Which of the following statement(s) is/are correct?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">Tournament method always requires fewer comparisons than linear scan for any $\\mathrm{n}>2$ while finding the max and second max in an array of size $n$.<br/></span>",
                "<span style=\"display: inline;\">If an array of size $n$ is sorted using bottom-up Merge Sort, then the path taken by the maximum element in the merge tree corresponds exactly to the comparisons made in the tournament method for finding the maximum.<br/></span>",
                "<span style=\"display: inline;\">In a randomized tournament, the probability that the second maximum appears in the final round is $\\frac{n}{2(n-1)}$<br/></span>",
                "<span style=\"display: inline;\">To find the third maximum element using a tournament tree of size $n$, one may need to examine up to $\\left\\lceil\\log _2 n\\right\\rceil+\\left\\lceil\\log _2(n / 2)\\right\\rceil-1$ elements in the worst case.</span>"
            ],
            "answer": [
                "A"
            ],
            "solution": "<div class=\"solution-content\"><a name=\"484237\"></a><div itemprop=\"text\"><p>statement A -False , for linear search, it take n-1+n-2 for max,second max and tournament take<strong> n-1+⌈log​n⌉-1</strong> </p><p>for n=3,<strong> it will be 3=3.</strong></p><p>statement B-<strong> true</strong> , In bottom up merge sort, adjacent elements (and then subarrays) are merged layer by layer. </p><p>the max ele in any subarray advances to the next level by being compared against the max of adjacent subarray.</p><p>this bottom up binary tree structure of comparisons is precisely identical to the knockout tree structure used in the </p><p>tournament method to find max.</p><p>statement C- <strong>true</strong>, In randomized tournament method, random balanced binary tree pairing.</p><p>for 2nd max, reach to final it must be in Opposite half of max element.</p><p>total number elements = n</p><p>if n = 2^k,the tree splits into 2 half each containing n/2 elements which are favourable outcome for being 2nd max . so, probability will be <strong>(n/2)/n-1</strong></p><p>for statement D -<strong>False</strong>, because \"To find the third maximum element <strong>using a tournament tree</strong> of size n\" in Statement explicitly says </p><p>tree is already constructed, building a tournament tree of size n require n-1 total comparisons and create a binary tree of height ⌈log​n⌉.</p><p>once built , the root guaranteed to be max , we dont need to re run entire n-1 comparisons .</p><p>it would require to evaluate for m2 and m3 </p><p>for M2, element which directly defeated by M1 - ⌈log​n⌉-1 comparisons.</p><p>for M3, one of the elements that lost directly to M2 .</p><p>one of the remaining element that lost to M1 (excluding m2).</p><p>total M3 = <strong>⌈log​n⌉+⌈log​n⌉-1</strong></p><p><strong>SO in total = (⌈log​n⌉+⌈log​n⌉-1)(//for m3)+(⌈log​n⌉-1) (//for m2)+ No comparison for M1</strong></p><p> </p><p> </p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/484210/go-classes-dpp-algorithms-tournament-method\" target=\"_blank\">GATE Overflow #484210</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>You are given an $n \\times n$ matrix where each row and each column is sorted in ascending order. You need to search for a target element \"x\" in the matrix.</p><p>What is the best possible asymptotic bound in the worst case to solve this problem?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\Theta(\\log n)$<br/></span>",
                "<span style=\"display: inline;\">$\\Theta(n)$<br/></span>",
                "<span style=\"display: inline;\">$\\Theta\\left(n^2\\right)$<br/></span>",
                "<span style=\"display: inline;\">$\\Theta(1)$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"483130\"></a><div itemprop=\"text\"><p>This task can be done in $\\theta(n)$ time using the following approach:<br/>We have an $n \\times n$ matrix:</p><ul><li>Each row is sorted in ascending order (left $\\rightarrow$ right).<br/> </li><li>Each column is sorted in ascending order (top $\\rightarrow$ bottom).<br/> </li><li>Start from the top-right corner (row = 0, col = n-1).<br/> </li><li>Compare with target x. .</li></ul><p>Rules:<br/><br/>1. If $\\operatorname{arr}[\\mathrm{row}][\\mathrm{col}]==x \\rightarrow$ Found.<br/><br/>2. If $\\operatorname{arr}[\\mathrm{row}][\\mathrm{col}]&gt;x \\rightarrow$ Move left (col--).<br/><br/>3. If arr[row][col] $&lt;x \\rightarrow$ Move down (row++).</p><p>In the worst case:</p><ul><li>We move $n-1$ steps down and $n-1$ steps left.<br/> </li><li>Total $=2(n-1)$ steps $=\\Theta(n)$.</li></ul></div><br><br><small>Source: <a href=\"https://gateoverflow.in/483129/go-classes-dpp-algorithms-searching\" target=\"_blank\">GATE Overflow #483129</a></small></div>"
        }
    ]
});

registerTest({
    "name": "DPP 10 - Algorithms (Divide & Conquer, Searching & Hashing - Part 3)",
    "testLabel": "DPP 10",
    "testType": "DPP",
    "bracket": "Divide & Conquer, Searching & Hashing - Part 3",
    "subject": "algo",
    "series": "cse-dpp-2027",
    "date": "Nov 03, 2026",
    "duration": "15 Min",
    "totalMarks": 3,
    "topicsCovered": "Divide & Conquer, Searching & Hashing (Practice Set 3)",
    "questions": [
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>A monkey is given $n$ piles of bananas, where the 'ith' pile has nums[i] bananas (nums is an array of size n ). An integer h represents the total time in hours to eat all bananas.</p><p>Each hour, the monkey chooses a non-empty pile of bananas and eats $k$ bananas. If the pile contains fewer than $k$ bananas, the monkey eats all the bananas in that pile and does not consume any more bananas in that hour.</p><p>What is the best possible worst case time complexity (in terms of $n, m$ where $m$ is the max value in the array) to determine the minimum number of bananas the monkey must eat per hour to finish all the bananas within $h$ hours?<br/><br/>(Here $O$ represents big-oh)</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$O(n.logn)$<br/></span>",
                "<span style=\"display: inline;\">$O(n.m)$<br/></span>",
                "<span style=\"display: inline;\">$O(n.logm)$<br/></span>",
                "<span style=\"display: inline;\">$O(m.logm)$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"483128\"></a><div itemprop=\"text\">Solution: $k$ can't exceed $m$ because we have to find the minimum value of $k$ and if $k$ exceeds $m$, then the monkey can eat only $m$ bananas at max in a single hour, so there is no benefit of $k$ exceeding $m$.<br/> <br/> So k lies in [1,m]<br/> <br/> Apply binary search on this range:<br/> Initialize low=1,high=m,current_ans=-1<br/> <br/> mid=(low+high)/2<br/> while(low&lt;=high)<br/> {<br/> If (is_sufficient(mid)) then current_ans=mid and high=mid <br/> (another smaller value of k may satisfy the constraints)<br/> Else: low=mid<br/> }<br/> <br/> Return current_ans<br/> <br/> &gt;&gt; Is_sufficient is a function which checks whether k satisfies the constraint or not -&gt; O(n)<br/> <br/> Is_sufficient(temp)<br/> {<br/> Current_hours=0<br/> For (i=0 to n-1)<br/> {<br/> Current_hours+=nums[i]/temp;<br/> If(nums[i]%temp!=0)<br/> Current_hours+=1<br/> }<br/> <br/> If(current_hours&lt;=h)<br/> return true<br/> Else<br/> return false<br/> }<br/> Overall time complexity: O(n.logm)<br/> </div><br><br><small>Source: <a href=\"https://gateoverflow.in/483124/go-classes-dpp-algorithms-binary-search\" target=\"_blank\">GATE Overflow #483124</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Alice has two sorted arrays $\\mathrm{A}[1, \\ldots, \\mathrm{n}], \\mathrm{B}[1, \\ldots, \\mathrm{n}+1]$. She knows that A is composed of distinct positive numbers, and B is derived from inserting a zero into $A$. She would like to know the index of this zero. She wonders if you can design and analyse a fast algorithm for her to find the index of the zero in $B$.</p><p>She has provided the following example to ensure that the problem statement is clear.</p><p>A: $[ 1,3,4,6,7,8,9,20]$<br/><br/>B: $[1,3,0,4,6,7,8,9,20]$.<br/><br/>Your algorithm should return 2 in this case, which is the index of the zero in B.<br/><br/>What is the tightest upper bound of the best algorithm to do this task in terms of $n$ ?<br/>(Here O represents big-oh)</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$O(n)$<br/></span>",
                "<span style=\"display: inline;\">$O(logn)$<br/></span>",
                "<span style=\"display: inline;\">$O(1)$<br/></span>",
                "<span style=\"display: inline;\">$O(loglogn)$</span>"
            ],
            "answer": "B",
            "solution": "<div class=\"solution-content\"><a name=\"483133\"></a><div itemprop=\"text\">answer Is B<br/> <br/> O(log n)<br/> <br/> Use Binery Search And Match Middle element If Postion of Middle element Index are Same in Both Array Then Search Element In Next Half Array</div><br><br><small>Source: <a href=\"https://gateoverflow.in/483122/go-classes-dpp-algorithms-binary-search\" target=\"_blank\">GATE Overflow #483122</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><pre class=\"prettyprint linenums lang-c_cpp\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"4\">LazySort(A): n = length(A) if n = 0 or n = 1: return A pivot = A[1] # always pick the first element left = LazySort(elements &lt; pivot) // apply recursion on elements smaller than pivot right = LazySort(elements &gt; pivot) // apply recursion on elements greater than pivot B = left + [pivot] + right # concatenate return MergeSort(B) # finally call MergeSort </pre><p>What is the tightest upper bound of this algorithm?<br/><br/>(Here $\\Theta$ represents big-theta.)</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\Theta\\left(n \\log ^2 n\\right)$<br/></span>",
                "<span style=\"display: inline;\">$\\Theta\\left(n^2 \\log n\\right)$<br/></span>",
                "<span style=\"display: inline;\">$\\Theta\\left(n^3\\right) \\mathrm{}$<br/></span>",
                "<span style=\"display: inline;\">$\\Theta\\left(n^2 \\log n\\right)$</span>"
            ],
            "answer": "B",
            "solution": "<div class=\"solution-content\"><a name=\"496547\"></a><div itemprop=\"text\"><p><img alt=\"\" height=\"383\" src=\"https://gateoverflow.in/?qa=blob&amp;qa_blobid=4286588877183600776\" width=\"814\"/><img alt=\"\" height=\"400\" src=\"https://gateoverflow.in/?qa=blob&amp;qa_blobid=17427500678890107041\" width=\"803\"/>So final Answer is Option B/D</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/482824/go-classes-dpp-algorithms-divide-and-conquer\" target=\"_blank\">GATE Overflow #482824</a></small></div>"
        }
    ]
});

registerTest({
    "name": "DPP 11 - Algorithms (Sorting Algorithms - Part 1)",
    "testLabel": "DPP 11",
    "testType": "DPP",
    "bracket": "Sorting Algorithms - Part 1",
    "subject": "algo",
    "series": "cse-dpp-2027",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 10,
    "topicsCovered": "Sorting Algorithms (Practice Set 1)",
    "questions": [
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"3793\" data-start=\"3665\">During sorting, one complete processing of all elements whose final positions have not yet been determined is called a <strong data-end=\"3792\" data-start=\"3784\">pass</strong>.</p><p data-end=\"3889\" data-start=\"3795\">Which of the following sequences <strong data-end=\"3838\" data-start=\"3828\">cannot</strong> be the result after the second pass of Quick Sort?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$5,2,16,12,28,60,32,72$<br/></span>",
                "<span style=\"display: inline;\">$2,16,5,28,12,60,32,72$<br/></span>",
                "<span style=\"display: inline;\">$2,12,16,5,28,32,72,60$<br/></span>",
                "<span style=\"display: inline;\">$5,2,12,28,16,32,72,60$</span>"
            ],
            "answer": "D",
            "solution": "<div class=\"solution-content\"><a name=\"557313\"></a><div itemprop=\"text\"><p><strong>A.</strong></p><p>Pivot = 72</p><p>[ 5 ] [ 2 ] [ 16 ] [ 12 ] [ 28 ] [ 60 ] [ 32 ] [ 72 ]</p><p>Second pass, pivot = 28</p><p>[ 5 ] [ 2 ] [ 16 ] [ 12 ] [ 28 ] [ 60 ] [ 32 ] [ 72 ]</p><p>Possible.</p><p><strong>B.</strong></p><p>Pivot = 72</p><p>[ 2 ] [ 16 ] [ 5 ] [ 28 ] [ 12 ] [ 60 ] [ 32 ] [ 72 ]</p><p>Second pass, pivot = 2</p><p>[ 2 ] [ 16 ] [ 5 ] [ 28 ] [ 12 ] [ 60 ] [ 32 ] [ 72 ]</p><p>Possible.</p><p><strong>C.</strong></p><p>Pivot = 28</p><p>[ 2 ] [ 12 ] [ 16 ] [ 5 ] [ 28 ] [ 32 ] [ 72 ] [ 60 ]</p><p>Second pass, pivots = 2 and 32</p><p>[ 2 ] [ 12 ] [ 16 ] [ 5 ] [ 28 ] [ 32 ] [ 72 ] [ 60 ]</p><p>Possible.</p><p><strong>D.</strong></p><p>Pivot = 12</p><p>[ 5 ] [ 2 ] [ 12 ] [ 28 ] [ 16 ] [ 32 ] [ 72 ] [ 60 ]</p><p>In the second pass, [5, 2] must be partitioned, but neither element can be a valid pivot in this order.</p><p>If we take 32 as the first pivot, [72, 60] must also be partitioned, which is not possible in the given order.</p><p>Hence, Option D cannot be obtained.</p><p><strong>Answer: D</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/546624/go-classes-dpp-gate-cs-da-algorithms-quick-sort\" target=\"_blank\">GATE Overflow #546624</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"14327\" data-start=\"14252\">Let $P$ be the problem of sorting $n\\geq1$ elements using only comparisons.</p><p data-end=\"14408\" data-start=\"14329\">Consider the class of all comparison-based algorithms that correctly solve $P$.</p><p data-end=\"14501\" data-start=\"14410\">What is the asymptotic lower bound on the number of comparisons required in the worst case?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\Omega(\\log n)$<br/></span>",
                "<span style=\"display: inline;\">$\\Omega(n)$<br/></span>",
                "<span style=\"display: inline;\">$\\Omega(n\\log n)$<br/></span>",
                "<span style=\"display: inline;\">$\\Omega(n^2)$</span>"
            ],
            "answer": "C",
            "solution": "<div class=\"solution-content\"><a name=\"545846\"></a><div itemprop=\"text\"><p data-end=\"14744\" data-start=\"14659\">A comparison-based sorting algorithm can be represented using a binary decision tree.</p><p data-end=\"14783\" data-start=\"14746\">For $n$ distinct elements, there are $n!$ possible input permutations.</p><p data-end=\"14872\" data-start=\"14821\">Therefore, the decision tree must contain at least $n!$ leaves.</p><p data-end=\"14934\" data-start=\"14889\">A binary tree of height $h$ contains at most $2^h$ leaves.</p><p data-end=\"14957\" data-start=\"14952\">Thus,</p><p data-end=\"14971\" data-start=\"14959\">$2^h\\geq n!$</p><p data-end=\"14991\" data-start=\"14973\">Taking log,</p><p data-end=\"15010\" data-start=\"14993\">$h\\geq\\log_2(n!)$</p><p data-end=\"15018\" data-start=\"15012\">Using, $\\log(n!)=\\Theta(n\\log n)$</p><p data-end=\"15058\" data-start=\"15048\">we get,</p><p data-end=\"15079\" data-start=\"15060\">$h=\\Omega(n\\log n)$</p><p data-end=\"15141\" data-start=\"15081\">Therefore every comparison-based sorting algorithm requires $\\boxed{\\Omega(n\\log n)}$ comparisons in the worst case.</p><p data-end=\"15141\" data-start=\"15081\"><strong>Answer : C</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/545845/go-classes-dpp-gate-cs-da-algorithms-sorting-complexity\" target=\"_blank\">GATE Overflow #545845</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"700\" data-start=\"669\">You are given an initial array:</p><p data-end=\"724\" data-start=\"702\">$[22,10,14,37,14,4,3]$</p><p data-end=\"842\" data-start=\"726\">For the following array, indicate which sorting algorithm could produce this state after an iteration has completed:</p><p data-end=\"866\" data-start=\"844\">$[3,4,14,37,14,10,22]$</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">Insertion sort<br/></span>",
                "<span style=\"display: inline;\">Selection sort<br/></span>",
                "<span style=\"display: inline;\">Radix sort<br/></span>",
                "<span style=\"display: inline;\">None</span>"
            ],
            "answer": "B",
            "solution": "<div class=\"solution-content\"><a name=\"543766\"></a><div itemprop=\"text\"><p data-end=\"1006\" data-start=\"995\">Start with:</p><p data-end=\"1030\" data-start=\"1008\">$[22,10,14,37,14,4,3]$</p><p data-end=\"1169\" data-start=\"1032\">In standard <strong data-end=\"1062\" data-start=\"1044\">Selection Sort</strong>, during each iteration we find the smallest element in the unsorted portion and place it at the beginning.</p><p data-end=\"1191\" data-start=\"1171\"><strong data-end=\"1191\" data-start=\"1171\">First iteration:</strong></p><p data-end=\"1217\" data-start=\"1193\">The smallest element is: $3$</p><p data-end=\"1243\" data-start=\"1224\">Swap $3$ with $22$:</p><p data-end=\"1267\" data-start=\"1245\">$[3,10,14,37,14,4,22]$</p><p data-end=\"1290\" data-start=\"1269\"><strong data-end=\"1290\" data-start=\"1269\">Second iteration:</strong></p><p data-end=\"1323\" data-start=\"1292\">Now consider the unsorted part:</p><p data-end=\"1345\" data-start=\"1325\">$[10,14,37,14,4,22]$</p><p data-end=\"1371\" data-start=\"1347\">The smallest element is: $4$</p><p data-end=\"1397\" data-start=\"1378\">Swap $4$ with $10$:</p><p data-end=\"1421\" data-start=\"1399\">$[3,4,14,37,14,10,22]$</p><p data-end=\"1460\" data-start=\"1423\">This exactly matches the given array.</p><p data-end=\"1515\" data-start=\"1462\">Therefore, the state can occur during Selection Sort.</p><p data-end=\"1693\" data-start=\"1517\">It cannot be Insertion Sort because Insertion Sort grows a sorted prefix by inserting the next element, and this exact arrangement does not occur after any completed iteration.</p><p data-end=\"1700\" data-start=\"1695\"><strong>Answer : B</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/543765/go-classes-dpp-gate-cs-da-algorithms-identify-sort-state\" target=\"_blank\">GATE Overflow #543765</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"3794\" data-start=\"3670\">What effect does the initial ordering of the records have on the number of comparisons performed by standard Selection Sort?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">No effect<br/></span>",
                "<span style=\"display: inline;\">Only a constant-factor difference<br/></span>",
                "<span style=\"display: inline;\">The asymptotic running time can change significantly</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"543760\"></a><div itemprop=\"text\"><p data-end=\"4039\" data-start=\"3964\">Selection Sort must search the complete unsorted portion during every pass.</p><p data-end=\"4079\" data-start=\"4041\">For $n$ elements, the comparisons are: $n-1$ in the first pass,</p><p data-end=\"4113\" data-start=\"4108\">$n-2$ in the second pass, and so on.</p><p data-end=\"4158\" data-start=\"4148\">$\\therefore C(n)=(n-1)+(n-2)+\\cdots+1$</p><p data-end=\"4212\" data-start=\"4189\">$\\Rightarrow C(n)=\\dfrac{n(n-1)}{2}$</p><p data-end=\"4283\" data-start=\"4214\"><br/>Notice that this calculation does not depend on whether the array is:</p><ul data-end=\"4337\" data-start=\"4285\"><li data-end=\"4301\" data-section-id=\"17rmvqt\" data-start=\"4285\">Already sorted<br/> </li><li data-end=\"4318\" data-section-id=\"dj5lv7\" data-start=\"4302\">Reverse sorted<br/> </li><li data-end=\"4337\" data-section-id=\"hrdgx5\" data-start=\"4319\">Randomly ordered<br/> </li></ul><p data-end=\"4434\" data-start=\"4339\">Selection Sort still scans the entire unsorted portion to find the required minimum or maximum.</p><p data-end=\"4572\" data-start=\"4436\">Therefore, the initial ordering has no effect on the number of comparisons in this implementation.</p><p data-end=\"4600\" data-start=\"4574\"><strong>Answer : A</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/543758/go-classes-dpp-gate-cs-da-algorithms-selection-sort\" target=\"_blank\">GATE Overflow #543758</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"2211\" data-start=\"2079\">Suppose Binary Search is used in Insertion Sort to locate where the $i$th element should be inserted among the first $i-1$ elements.</p><p data-end=\"2272\" data-start=\"2213\">What is the worst-case running time of this implementation?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\Theta(n^2)$<br/></span>",
                "<span style=\"display: inline;\">$\\Theta(n\\log n)$<br/></span>",
                "<span style=\"display: inline;\">$\\Theta(n)$<br/></span>",
                "<span style=\"display: inline;\">$\\Theta(\\log n)$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"543757\"></a><div itemprop=\"text\"><p data-end=\"2512\" data-start=\"2413\">Normally, Insertion Sort searches backward through the sorted portion to find the correct position.</p><p data-end=\"2555\" data-start=\"2514\">Using Binary Search improves this search.</p><p data-end=\"2619\" data-start=\"2557\">For the $i$th element, the insertion position can be found in: $\\Theta(\\log i)$ time.</p><p data-end=\"2704\" data-start=\"2646\">It may therefore appear that the total complexity becomes: $\\Theta(n\\log n)$</p><p data-end=\"2810\" data-start=\"2725\">But after finding the correct location, elements must still be shifted to make space.</p><p data-end=\"2880\" data-start=\"2812\">In the worst case, inserting the $i$th element may require shifting: $i-1$ elements.</p><p data-end=\"2910\" data-start=\"2900\">$\\therefore T(n)=1+2+3+\\cdots+(n-1)$</p><p data-end=\"2962\" data-start=\"2939\">$\\Rightarrow T(n)=\\frac{n(n-1)}{2}$</p><p data-end=\"2970\" data-start=\"2964\">Hence,</p><p data-end=\"2990\" data-start=\"2972\">$T(n)=\\Theta(n^2)$</p><p data-end=\"3199\" data-start=\"2992\">Binary Search reduces the number of comparisons needed to find the insertion position, but it does not eliminate the linear number of shifts required for each insertion.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/543756/go-classes-dpp-gate-cs-da-algorithms-binary-search-insertion\" target=\"_blank\">GATE Overflow #543756</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"851\" data-start=\"723\">After the first complete pass of Bubble Sort on an array of size $n$, which element is guaranteed to be in its correct position?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">The smallest element<br/></span>",
                "<span style=\"display: inline;\">The largest element<br/></span>",
                "<span style=\"display: inline;\">A randomly chosen element<br/></span>",
                "<span style=\"display: inline;\">The middle element</span>"
            ],
            "answer": "B",
            "solution": "<div class=\"solution-content\"><a name=\"543755\"></a><div itemprop=\"text\"><p data-end=\"1083\" data-start=\"1025\">Bubble Sort compares adjacent elements from left to right.</p><p data-end=\"1094\" data-start=\"1085\">Whenever:</p><p data-end=\"1109\" data-start=\"1096\">$A[j]&gt;A[j+1]$</p><p data-end=\"1140\" data-start=\"1111\">the two elements are swapped.</p><p data-end=\"1204\" data-start=\"1142\">As a result, the larger element keeps moving toward the right.</p><p data-end=\"1218\" data-start=\"1206\">For example:</p><p data-end=\"1233\" data-start=\"1220\">$[5,2,4,1,3]$</p><p data-end=\"1257\" data-start=\"1235\">During the first pass:</p><p data-end=\"1272\" data-start=\"1259\">$[5,2,4,1,3]$</p><p data-end=\"1299\" data-start=\"1274\">$\\rightarrow [2,5,4,1,3]$</p><p data-end=\"1326\" data-start=\"1301\">$\\rightarrow [2,4,5,1,3]$</p><p data-end=\"1353\" data-start=\"1328\">$\\rightarrow [2,4,1,5,3]$</p><p data-end=\"1380\" data-start=\"1355\">$\\rightarrow [2,4,1,3,5]$</p><p data-end=\"1432\" data-start=\"1382\">The largest element $5$ reaches the last position.</p><p data-end=\"1577\" data-start=\"1434\">Therefore, after one complete pass, the largest element is guaranteed to be in its final sorted position.</p><p data-end=\"1577\" data-start=\"1434\"><strong>Answer : B</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/543754/go-classes-dpp-gate-cs-da-algorithms-bubble-sort\" target=\"_blank\">GATE Overflow #543754</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"6537\" data-start=\"6485\">Problem: Sort a file of huge records with tiny keys.</p><p data-end=\"6587\" data-start=\"6539\">Example application: Reorganize your MP-$3$ files.</p><p data-end=\"6617\" data-start=\"6589\">Which sorting method to use?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">a system sort, guaranteed to run in time $\\sim N\\log N$<br/></span>",
                "<span style=\"display: inline;\">selection sort<br/></span>",
                "<span style=\"display: inline;\">bubble sort<br/></span>",
                "<span style=\"display: inline;\">a custom algorithm for huge records/tiny keys<br/></span>",
                "<span style=\"display: inline;\">insertion sort</span>"
            ],
            "answer": "B",
            "solution": "<div class=\"solution-content\"><a name=\"543583\"></a><div itemprop=\"text\"><p data-end=\"6896\" data-start=\"6849\">Here, the important issue is <strong data-end=\"6895\" data-start=\"6878\">data movement</strong>.</p><p data-end=\"6974\" data-start=\"6898\">The records are huge, so exchanging or moving an entire record is expensive.</p><p data-end=\"7113\" data-start=\"6976\">Bubble Sort and Insertion Sort can perform many exchanges or shifts. </p><p data-end=\"7113\" data-start=\"6976\">For randomly ordered data, the number of exchanges can be quadratic.</p><p data-end=\"7143\" data-start=\"7115\">Selection Sort is different.</p><p data-end=\"7245\" data-start=\"7145\">It searches for the correct element using comparisons and performs only about one exchange per pass.</p><p data-end=\"7252\" data-start=\"7247\">Thus, $\\text{Number of exchanges}\\approx N$</p><p data-end=\"7334\" data-start=\"7293\">even though the number of comparisons is $\\sim\\frac{N^2}{2}$</p><p data-end=\"7497\" data-start=\"7357\">Since the <strong data-end=\"7384\" data-start=\"7367\">keys are tiny</strong>, comparing them is relatively cheap. </p><p data-end=\"7497\" data-start=\"7357\">Since the <strong data-end=\"7452\" data-start=\"7432\">records are huge</strong>, minimizing movement is much more important.</p><p data-end=\"7703\" data-start=\"7499\">Selection Sort is best for this scenario because it avoids the large number of exchanges required by Insertion Sort and Bubble Sort.</p><p data-end=\"7715\" data-start=\"7705\"><strong>Answer: B</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/543582/go-classes-dpp-gate-cs-da-algorithms-sorting-comparison\" target=\"_blank\">GATE Overflow #543582</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"4962\" data-start=\"4905\">When is insertionsort a good choice for sorting an array?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">Each component of the array requires a large amount of memory.<br/></span>",
                "<span style=\"display: inline;\">Each component of the array requires a small amount of memory.<br/></span>",
                "<span style=\"display: inline;\">The array has only a few items out of place.<br/></span>",
                "<span style=\"display: inline;\">The processor speed is fast.</span>"
            ],
            "answer": "C",
            "solution": "<div class=\"solution-content\"><a name=\"543580\"></a><div itemprop=\"text\"><p data-end=\"5330\" data-start=\"5229\">Insertion Sort works by taking each element and moving it left until it reaches its correct position.</p><p data-end=\"5429\" data-start=\"5332\">If an array is already nearly sorted, most elements are already close to their correct positions.</p><p data-end=\"5441\" data-start=\"5431\">Therefore:</p><ul data-end=\"5561\" data-start=\"5443\"><li data-end=\"5474\" data-section-id=\"tdky4m\" data-start=\"5443\">Very few shifts are required.<br/> </li><li data-end=\"5511\" data-section-id=\"cdmwv\" data-start=\"5475\">Very few comparisons are required.<br/> </li><li data-end=\"5561\" data-section-id=\"1v9fg2t\" data-start=\"5512\">The algorithm can approach linear running time.</li></ul><p data-end=\"5897\" data-start=\"5563\">The work performed by Insertion Sort is closely related to the number of inversions in the input. </p><p data-end=\"5897\" data-start=\"5563\">An almost-sorted array has relatively few inversions, making Insertion Sort especially effective. </p><p data-end=\"5897\" data-start=\"5563\">So, Insertion Sort is very fast when the array is nearly sorted.</p><p data-end=\"5909\" data-start=\"5899\"><strong>Answer: C</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/543579/go-classes-dpp-gate-cs-da-algorithms-insertion-sort\" target=\"_blank\">GATE Overflow #543579</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"3728\" data-start=\"3554\">Suppose that a selectionsort of $100$ items has completed $42$ iterations of the main loop. How many items are now guaranteed to be in their final spot (never to be moved again)?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$21$<br/></span>",
                "<span style=\"display: inline;\">$41$<br/></span>",
                "<span style=\"display: inline;\">$42$<br/></span>",
                "<span style=\"display: inline;\">$43$</span>"
            ],
            "answer": "C",
            "solution": "<div class=\"solution-content\"><a name=\"543577\"></a><div itemprop=\"text\"><p data-end=\"3849\" data-start=\"3811\">The key property of Selection Sort is:</p><p data-end=\"3928\" data-start=\"3851\"><strong data-end=\"3928\" data-start=\"3851\">Each iteration places exactly one element into its final sorted position.</strong></p><p data-end=\"3956\" data-start=\"3930\">After the first iteration:</p><p data-end=\"3996\" data-start=\"3958\">$1$ element is guaranteed to be fixed.</p><p data-end=\"4025\" data-start=\"3998\">After the second iteration:</p><p data-end=\"4067\" data-start=\"4027\">$2$ elements are guaranteed to be fixed.</p><p data-end=\"4101\" data-start=\"4069\">Therefore, after $k$ iterations:</p><p data-end=\"4162\" data-start=\"4103\">$k$ elements are guaranteed to be in their final positions.</p><p data-end=\"4168\" data-start=\"4164\">For $k=42$,</p><p data-end=\"4227\" data-start=\"4178\">The number of elements guaranteed to be fixed is $\\boxed{42}$</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/543576/go-classes-dpp-gate-cs-da-algorithms-selection-sort\" target=\"_blank\">GATE Overflow #543576</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"2271\" data-start=\"2151\">In a selectionsort of n elements, how many times is the swap function called in the complete execution of the algorithm?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$1$<br/></span>",
                "<span style=\"display: inline;\">$n-1$<br/></span>",
                "<span style=\"display: inline;\">$n\\log n$<br/></span>",
                "<span style=\"display: inline;\">$n^2$</span>"
            ],
            "answer": "B",
            "solution": "<div class=\"solution-content\"><a name=\"543574\"></a><div itemprop=\"text\"><p data-end=\"2450\" data-start=\"2369\">Selection Sort places one element into its final position during every iteration.</p><p data-end=\"2481\" data-start=\"2452\">For an array of $n$ elements:</p><ul data-end=\"2613\" data-start=\"2483\"><li data-end=\"2521\" data-section-id=\"eqrvun\" data-start=\"2483\">Pass $1$ places one element correctly.<br/> </li><li data-end=\"2564\" data-section-id=\"ddbk4z\" data-start=\"2522\">Pass $2$ places another element correctly.<br/> </li><li data-end=\"2613\" data-section-id=\"17l7t2x\" data-start=\"2565\">This continues until only one element remains.<br/> </li></ul><p data-end=\"2631\" data-start=\"2615\">Therefore, only $n-1$ passes are required.</p><p data-end=\"2753\" data-start=\"2662\">Since the standard Selection Sort implementation performs one swap at the end of each pass:</p><p data-end=\"2783\" data-start=\"2755\">$\\text{Number of swaps}=n-1$</p><p data-end=\"3062\" data-start=\"2785\"><strong>Note :</strong> An important feature of Selection Sort is that the number of swaps does not depend on whether the input is sorted, reverse sorted, or randomly ordered. Selection Sort uses only about $N$ exchanges.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/543573/go-classes-dpp-gate-cs-da-algorithms-selection-sort\" target=\"_blank\">GATE Overflow #543573</a></small></div>"
        }
    ]
});

registerTest({
    "name": "DPP 12 - Algorithms (Sorting Algorithms - Part 2)",
    "testLabel": "DPP 12",
    "testType": "DPP",
    "bracket": "Sorting Algorithms - Part 2",
    "subject": "algo",
    "series": "cse-dpp-2027",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 11,
    "topicsCovered": "Sorting Algorithms (Practice Set 2)",
    "questions": [
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"1051\" data-start=\"914\">The nontrivial operation involved in the bubble sort is comparing two numbers, i.e., checking the $\\texttt{if}$ condition in the inner $\\texttt{for}$ loop.</p><p data-end=\"1136\" data-start=\"1053\">How many comparisons need to be done if the input finite sequence is of length $n$?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$n-1$<br/></span>",
                "<span style=\"display: inline;\">$\\dfrac{n(n-1)}{2}$<br/></span>",
                "<span style=\"display: inline;\">$n^2$<br/></span>",
                "<span style=\"display: inline;\">$n\\log n$</span>"
            ],
            "answer": "B",
            "solution": "<div class=\"solution-content\"><a name=\"543571\"></a><div itemprop=\"text\"><p data-end=\"1277\" data-start=\"1212\">In Bubble Sort, during each pass, adjacent elements are compared.</p><p data-end=\"1329\" data-start=\"1279\">The number of comparisons in successive passes is:</p><p data-end=\"1366\" data-start=\"1331\">$(n-1), (n-2), (n-3), \\ldots, 2, 1$</p><p data-end=\"1401\" data-start=\"1368\">Therefore, total comparisons are:</p><p data-end=\"1432\" data-start=\"1403\">$C(n)=(n-1)+(n-2)+\\cdots+2+1$</p><p data-end=\"1440\" data-start=\"1434\">Using,</p><p data-end=\"1477\" data-start=\"1442\">$1+2+\\cdots+(n-1)=\\frac{n(n-1)}{2}$</p><p data-end=\"1486\" data-start=\"1479\">we get,</p><p data-end=\"1511\" data-start=\"1488\">$C(n)=\\frac{n(n-1)}{2}$</p><p data-end=\"1518\" data-start=\"1513\">Thus,</p><p data-end=\"1546\" data-start=\"1520\">$\\boxed{\\frac{n(n-1)}{2}}$</p><p data-end=\"1663\" data-start=\"1548\">Hence, Bubble Sort performs $\\Theta(n^2)$ comparisons in this implementation.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/543570/go-classes-dpp-gate-cs-da-algorithms-bubble-sort\" target=\"_blank\">GATE Overflow #543570</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"6414\" data-start=\"6371\">Consider an array containing $2n$ elements:</p><p data-end=\"6459\" data-start=\"6416\">$1,\\ n+1,\\ 2,\\ n+2,\\ 3,\\ n+3,\\ldots,n,\\ 2n$</p><p data-end=\"6485\" data-start=\"6461\">For example, when $n=8$:</p><p data-end=\"6557\" data-start=\"6487\">$1,\\ 9,\\ 2,\\ 10,\\ 3,\\ 11,\\ 4,\\ 12,\\ 5,\\ 13,\\ 6,\\ 14,\\ 7,\\ 15,\\ 8,\\ 16$</p><p data-end=\"6631\" data-start=\"6559\">Approximately how many comparisons does standard selection sort perform?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\sim\\frac{1}{4}n^2$<br/></span>",
                "<span style=\"display: inline;\">$\\sim\\frac{1}{2}n^2$<br/></span>",
                "<span style=\"display: inline;\">$\\sim n^2$<br/></span>",
                "<span style=\"display: inline;\">$\\sim\\frac{3}{2}n^2$<br/></span>",
                "<span style=\"display: inline;\">$\\sim2n^2$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"543455\"></a><div itemprop=\"text\"><p data-end=\"6922\" data-start=\"6794\">An important property of selection sort is that its number of comparisons does <strong data-end=\"6921\" data-start=\"6873\">not depend on the initial order of the array</strong>.</p><p data-end=\"6943\" data-start=\"6924\">The array contains: $2n$ elements.</p><p data-end=\"7011\" data-start=\"6962\">During the first iteration, selection sort makes: $2n-1$ comparisons.</p><p data-end=\"7063\" data-start=\"7035\">During the second iteration: $2n-2$ comparisons.</p><p data-end=\"7108\" data-start=\"7087\">This continues until: $1$ comparison remains.</p><p data-end=\"7169\" data-start=\"7136\">Therefore, total comparisons are: $(2n-1)+(2n-2)+\\cdots+1$</p><p data-end=\"7203\" data-start=\"7197\">Using, $1+2+\\cdots+m=\\frac{m(m+1)}{2}$</p><p data-end=\"7203\" data-start=\"7197\">with, $m=2n-1$</p><p data-end=\"7262\" data-start=\"7255\">we get,</p><p data-end=\"7291\" data-start=\"7264\">$C(n)=\\frac{(2n-1)(2n)}{2}$</p><p data-end=\"7307\" data-start=\"7293\">$C(n)=n(2n-1)$</p><p data-end=\"7322\" data-start=\"7309\">$C(n)=2n^2-n$</p><p data-end=\"7383\" data-start=\"7324\">Using tilde notation, the lower-order term $-n$ is ignored:</p><p data-end=\"7399\" data-start=\"7385\">$C(n)\\sim2n^2$</p><p data-end=\"7411\" data-start=\"7401\"><br/><strong>Answer: E</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/543454/go-classes-dpp-gate-cs-da-algorithms-selection-sort\" target=\"_blank\">GATE Overflow #543454</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"5148\" data-start=\"5069\">You need to sort hotels on a travel website according to their <strong data-end=\"5147\" data-start=\"5132\">star rating</strong>.</p><p data-end=\"5204\" data-start=\"5150\">Which sorting algorithm would be the most appropriate?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">Insertion sort<br/></span>",
                "<span style=\"display: inline;\">Merge sort<br/></span>",
                "<span style=\"display: inline;\">Quicksort<br/></span>",
                "<span style=\"display: inline;\">Bucket sort</span>"
            ],
            "answer": "D",
            "solution": "<div class=\"solution-content\"><a name=\"543453\"></a><div itemprop=\"text\"><p data-end=\"5401\" data-start=\"5332\">Hotel star ratings come from a small, fixed range of possible values.</p><p data-end=\"5468\" data-start=\"5403\">For example, ratings can be placed into separate buckets such as:</p><p data-end=\"5489\" data-start=\"5470\">$1,\\ 2,\\ 3,\\ 4,\\ 5$</p><p data-end=\"5568\" data-start=\"5491\">For every hotel, simply place it into the bucket corresponding to its rating.</p><p data-end=\"5664\" data-start=\"5570\">If there are $n$ hotels and $k$ possible ratings, bucket-based processing takes approximately:</p><p data-end=\"5674\" data-start=\"5666\">$O(n+k)$</p><p data-end=\"5718\" data-start=\"5676\">Since $k$ is very small compared with $n$:</p><p data-end=\"5733\" data-start=\"5720\">$O(n+k)=O(n)$</p><p data-end=\"5814\" data-start=\"5735\">Comparison-based algorithms such as merge sort and quicksort generally require:</p><p data-end=\"5828\" data-start=\"5816\">$O(n\\log n)$ for arbitrary inputs.</p><p data-end=\"5949\" data-start=\"5853\">Therefore, exploiting the small bounded range of star ratings makes bucket sort the best option.<br/> </p><p data-end=\"5998\" data-start=\"5951\"><strong>Answer: D</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/543452/go-classes-dpp-gate-cs-da-algorithms-non-comparison-sorting\" target=\"_blank\">GATE Overflow #543452</a></small></div>"
        },
        {
            "marks": 2,
            "neg": 0,
            "type": "MSQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"3448\" data-start=\"3401\">Consider the following max-heap in level-order:</p><p data-end=\"3490\" data-start=\"3450\">$[80,75,70,10,55,65,40,5,0,20,30,60,50]$</p><p data-end=\"3537\" data-start=\"3492\">Suppose the next operation is <strong data-end=\"3536\" data-start=\"3522\">Delete-Max</strong>.</p><p data-end=\"3613\" data-start=\"3539\">Which of the following pairs of keys will be compared during the deletion?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$50-30$</span>",
                "<span style=\"display: inline;\">$50-55$</span>",
                "<span style=\"display: inline;\">$50-60$</span>",
                "<span style=\"display: inline;\">$50-65$</span>",
                "<span style=\"display: inline;\">$50-70$</span>",
                "<span style=\"display: inline;\">$50-75$</span>",
                "<span style=\"display: inline;\">$50-80$</span>",
                "<span style=\"display: inline;\">$0-5$</span>",
                "<span style=\"display: inline;\">$20-30$</span>",
                "<span style=\"display: inline;\">$10-55$</span>",
                "<span style=\"display: inline;\">$70-75$</span>",
                "<span style=\"display: inline;\">$40-65$</span>"
            ],
            "answer": "K",
            "solution": "<div class=\"solution-content\"><a name=\"543451\"></a><div itemprop=\"text\"><p>The Max Heap is :</p><p style=\"text-align:center\"><img alt=\"\" height=\"238\" src=\"https://cdn.mathpix.com/snip/images/n0mXrpMLWZespdXqtVGc5Y2wWMhWHU36zsy5w8FCFqg.original.fullsize.png\" width=\"572\"/></p><p data-end=\"3868\" data-start=\"3829\">Delete-Max first removes the root $80$.</p><p data-end=\"3913\" data-start=\"3870\">The last element $50$ is moved to the root.</p><p data-end=\"3928\" data-start=\"3915\">So initially:</p><p data-end=\"3934\" data-start=\"3930\">$50$ has children: $75$ and $70$</p><p data-end=\"3997\" data-start=\"3966\">First compare the two children: $75$ vs $70$</p><p data-end=\"4023\" data-start=\"4013\">$\\therefore \\boxed{70-75}$ is compared.</p><p data-end=\"4086\" data-start=\"4056\">Since $75$ is larger, compare: $50$ vs $75$</p><p data-end=\"4112\" data-start=\"4102\">$\\therefore \\boxed{50-75}$ is compared.</p><p data-end=\"4174\" data-start=\"4145\">Since $50&lt;75$, exchange them.</p><p data-end=\"4198\" data-start=\"4176\">Now $50$ has children: $10$ and $55$</p><p data-end=\"4223\" data-start=\"4215\">Compare: $10$ vs $55$</p><p data-end=\"4249\" data-start=\"4239\">$\\therefore \\boxed{10-55}$ is compared.</p><p data-end=\"4295\" data-start=\"4282\">Then compare: $50$ vs $55$</p><p data-end=\"4321\" data-start=\"4311\">$\\therefore \\boxed{50-55}$ is compared.</p><p data-end=\"4383\" data-start=\"4354\">Since $50&lt;55$, exchange them.</p><p data-end=\"4407\" data-start=\"4385\">Now $50$ has children: $20$ and $30$</p><p data-end=\"4432\" data-start=\"4424\">Compare: $20$ vs $30$</p><p data-end=\"4458\" data-start=\"4448\">$\\therefore \\boxed{20-30}$ is compared.</p><p data-end=\"4504\" data-start=\"4491\">Then compare: $50$ vs $30$</p><p data-end=\"4530\" data-start=\"4520\">$\\therefore \\boxed{50-30}$ is compared.</p><p data-end=\"4608\" data-start=\"4563\">Since $50&gt;30$, the heap property is restored.</p><p data-end=\"4639\" data-start=\"4610\">Thus, the compared pairs are:</p><p data-end=\"4696\" data-start=\"4641\">$\\boxed{50-30,\\ 50-55,\\ 50-75,\\ 20-30,\\ 10-55,\\ 70-75}$</p><p data-end=\"4704\" data-start=\"4698\">Hence:</p><p data-end=\"4739\" data-start=\"4706\">$\\boxed{\\text{A, B, F, I, J, K}}$ is correct.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/543450/go-classes-dpp-gate-cs-da-algorithms-heap\" target=\"_blank\">GATE Overflow #543450</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"2082\" data-start=\"2027\">Mergesort recursively sorts the two halves of an array.</p><p data-end=\"2191\" data-start=\"2084\">After both recursive calls have finished, but <strong data-end=\"2160\" data-start=\"2130\">before the merge operation</strong>, which statement must be true?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">The complete array forms a heap.<br/></span>",
                "<span style=\"display: inline;\">Each half of the array is sorted independently.<br/></span>",
                "<span style=\"display: inline;\">Every element in the first half is smaller than every element in the second half.<br/></span>",
                "<span style=\"display: inline;\">None of the above.</span>"
            ],
            "answer": "B",
            "solution": "<div class=\"solution-content\"><a name=\"543449\"></a><div itemprop=\"text\"><p data-end=\"2471\" data-start=\"2440\">Mergesort works in three steps:</p><ol data-end=\"2572\" data-start=\"2473\"><li data-end=\"2509\" data-section-id=\"111bxqq\" data-start=\"2473\">Divide the array into two halves.<br/> </li><li data-end=\"2540\" data-section-id=\"1fraexa\" data-start=\"2510\">Recursively sort each half.<br/> </li><li data-end=\"2572\" data-section-id=\"1ss7co5\" data-start=\"2541\">Merge the two sorted halves.<br/> </li></ol><p data-end=\"2582\" data-start=\"2574\">Suppose:</p><p data-end=\"2600\" data-start=\"2584\">$A = [L \\mid R]$</p><p data-end=\"2628\" data-start=\"2602\">After the recursive calls:</p><p data-end=\"2644\" data-start=\"2630\">$L$ is sorted.</p><p data-end=\"2660\" data-start=\"2646\">$R$ is sorted.</p><p data-end=\"2715\" data-start=\"2662\">However, the two halves have <strong data-end=\"2714\" data-start=\"2691\">not yet been merged</strong>.<br/> </p><p data-end=\"2753\" data-start=\"2717\">Therefore, it is not necessary that:</p><p data-end=\"2777\" data-start=\"2755\">$\\max(L) \\leq \\min(R)$</p><p data-end=\"2816\" data-start=\"2779\"><br/>For example, the two halves might be:</p><p data-end=\"2830\" data-start=\"2818\">$L=[2,8,10]$</p><p data-end=\"2843\" data-start=\"2832\">$R=[1,4,7]$</p><p data-end=\"2921\" data-start=\"2845\">Both halves are internally sorted, but the complete array is not yet sorted.</p><p data-end=\"2961\" data-start=\"2923\">Therefore, immediately before merging:</p><p data-end=\"3013\" data-start=\"2963\">$\\boxed{\\text{Each half is sorted independently}}$</p><p data-end=\"3021\" data-start=\"3015\"><br/><strong>Answer: B</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/543442/go-classes-dpp-gate-cs-da-algorithms-merge-sort\" target=\"_blank\">GATE Overflow #543442</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"669\" data-start=\"591\">A quadratic sorting algorithm has completed four iterations. The array is now:</p><p data-end=\"710\" data-start=\"671\">$1,\\ 2,\\ 3,\\ 4,\\ 5,\\ 0,\\ 6,\\ 7,\\ 8,\\ 9$</p><p data-end=\"773\" data-start=\"712\">Assume that selection sort places the largest elements first.</p><p data-end=\"802\" data-start=\"775\">Which statement is correct?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">It could be either selection sort or insertion sort.<br/></span>",
                "<span style=\"display: inline;\">It could be selection sort, but not insertion sort.<br/></span>",
                "<span style=\"display: inline;\">It could be insertion sort, but not selection sort.<br/></span>",
                "<span style=\"display: inline;\">It could be neither selection sort nor insertion sort.</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"543441\"></a><div itemprop=\"text\"><p data-end=\"1167\" data-start=\"1081\">For <strong data-end=\"1103\" data-start=\"1085\">insertion sort</strong>, after four iterations, the first five elements must be sorted.</p><p data-end=\"1174\" data-start=\"1169\">Here, $1,\\ 2,\\ 3,\\ 4,\\ 5$ are sorted.</p><p data-end=\"1263\" data-start=\"1210\">Therefore, this state is possible for insertion sort.</p><p data-end=\"1367\" data-start=\"1265\">Now consider <strong data-end=\"1296\" data-start=\"1278\">selection sort</strong>, where the largest element is placed at the end during each iteration.</p><p data-end=\"1459\" data-start=\"1369\">After four iterations, the four largest elements should occupy their final four positions.</p><p data-end=\"1488\" data-start=\"1461\">The last four elements are: $6,\\ 7,\\ 8,\\ 9$</p><p data-end=\"1584\" data-start=\"1507\">which are exactly the four largest elements and are in their final positions.</p><p data-end=\"1644\" data-start=\"1586\">Therefore, this state is also possible for selection sort.</p><p data-end=\"1708\" data-start=\"1646\">Hence, the array could have been produced by either algorithm.</p><p data-end=\"1744\" data-start=\"1710\"><strong>Answer: A</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/543440/go-classes-dpp-gate-cs-da-algorithms-identify-the-sort\" target=\"_blank\">GATE Overflow #543440</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"8685\" data-start=\"8600\">Which of the following algorithms is better when dealing with reverse sorted numbers?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">Quicksort<br/></span>",
                "<span style=\"display: inline;\">Heap sort<br/></span>",
                "<span style=\"display: inline;\">Insertion sort<br/></span>",
                "<span style=\"display: inline;\">all are equally good</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"543413\"></a><div itemprop=\"text\"><p data-end=\"8891\" data-start=\"8824\">Consider the behaviour of each algorithm on a reverse-sorted array.</p><p data-end=\"8912\" data-start=\"8893\"><strong data-end=\"8912\" data-start=\"8893\">Insertion sort:</strong></p><p data-end=\"8986\" data-start=\"8914\">Every new element must be moved across almost the entire sorted portion.</p><p data-end=\"8998\" data-start=\"8988\">Therefore:</p><p data-end=\"9013\" data-start=\"9000\">$T(n)=O(n^2)$</p><p data-end=\"9029\" data-start=\"9015\"><strong data-end=\"9029\" data-start=\"9015\">Quicksort:</strong></p><p data-end=\"9166\" data-start=\"9031\">For the standard implementation using the first or last element as pivot, a reverse-sorted array produces highly unbalanced partitions.</p><p data-end=\"9210\" data-start=\"9168\">Therefore, its worst-case running time is:</p><p data-end=\"9225\" data-start=\"9212\">$T(n)=O(n^2)$</p><p data-end=\"9241\" data-start=\"9227\"><strong data-end=\"9241\" data-start=\"9227\">Heap sort:</strong></p><p data-end=\"9339\" data-start=\"9243\">Heap sort maintains its guaranteed running time regardless of the initial order of the elements.</p><p data-end=\"9361\" data-start=\"9341\">Its running time is:</p><p data-end=\"9380\" data-start=\"9363\">$T(n)=O(n\\log n)$</p><p data-end=\"9469\" data-start=\"9382\">Thus, among the given algorithms, heap sort performs better for a reverse-sorted input.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/543412/go-classes-dpp-gate-cs-da-algorithms-sorting-comparison\" target=\"_blank\">GATE Overflow #543412</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"7756\" data-start=\"7558\">While sorting the numbers $\\text{(70, 48, 76, 58, 43, 47, 78, 53)}$ using quicksort, the last number is chosen as pivot, what will be the permutation of the numbers after partition function has been applied?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\text{48 43 47 53 70 76 78 58}$<br/></span>",
                "<span style=\"display: inline;\">$\\text{43 47 48 53 58 70 76 78}$<br/></span>",
                "<span style=\"display: inline;\">$\\text{48 47 43 53 70 78 76 58}$<br/></span>",
                "<span style=\"display: inline;\">$\\text{47 48 43 53 78 76 70 58}$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"543411\"></a><div itemprop=\"text\"><p data-end=\"7938\" data-start=\"7925\">The array is:</p><p data-end=\"7967\" data-start=\"7940\">$[70,48,76,58,43,47,78,53]$</p><p data-end=\"8005\" data-start=\"7969\">The last element is chosen as pivot:</p><p data-end=\"8017\" data-start=\"8007\">$Pivot=53$</p><p data-end=\"8088\" data-start=\"8019\">Using partitioning, elements smaller than $53$ are moved to the left.</p><p data-end=\"8122\" data-start=\"8090\">Process the elements one by one.</p><p data-end=\"8131\" data-start=\"8124\">$70&gt;53$</p><p data-end=\"8143\" data-start=\"8133\">No change.</p><p data-end=\"8152\" data-start=\"8145\">$48&lt;53$</p><p data-end=\"8176\" data-start=\"8154\">Move $48$ to the left:</p><p data-end=\"8205\" data-start=\"8178\">$[48,70,76,58,43,47,78,53]$</p><p data-end=\"8214\" data-start=\"8207\">$76&gt;53$</p><p data-end=\"8226\" data-start=\"8216\">No change.</p><p data-end=\"8235\" data-start=\"8228\">$58&gt;53$</p><p data-end=\"8247\" data-start=\"8237\">No change.</p><p data-end=\"8256\" data-start=\"8249\">$43&lt;53$</p><p data-end=\"8280\" data-start=\"8258\">Move $43$ to the left:</p><p data-end=\"8309\" data-start=\"8282\">$[48,43,76,58,70,47,78,53]$</p><p data-end=\"8318\" data-start=\"8311\">$47&lt;53$</p><p data-end=\"8342\" data-start=\"8320\">Move $47$ to the left:</p><p data-end=\"8371\" data-start=\"8344\">$[48,43,47,58,70,76,78,53]$</p><p data-end=\"8438\" data-start=\"8373\">Finally, place the pivot $53$ after all elements smaller than it:</p><p data-end=\"8467\" data-start=\"8440\">$[48,43,47,53,70,76,78,58]$</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/543410/go-classes-dpp-gate-cs-da-algorithms-quicksort-partitioning\" target=\"_blank\">GATE Overflow #543410</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"6581\" data-start=\"6348\">Consider the Quick sort algorithm which sorts elements in ascending order using the first element as pivot. </p><p data-end=\"6581\" data-start=\"6348\">Then which of the following input sequence will require a maximum number of comparisons when this algorithm is applied on it?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\text{22 25 56 67 89}$<br/></span>",
                "<span style=\"display: inline;\">$\\text{52 25 76 67 89}$<br/></span>",
                "<span style=\"display: inline;\">$\\text{22 25 76 67 50}$<br/></span>",
                "<span style=\"display: inline;\">$\\text{52 25 89 67 76}$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"543409\"></a><div itemprop=\"text\"><p data-end=\"6760\" data-start=\"6714\">Quicksort uses the <strong data-end=\"6759\" data-start=\"6733\">first element as pivot</strong>.</p><p data-end=\"6852\" data-start=\"6762\">The maximum number of comparisons occurs when each partition is as unbalanced as possible.</p><p data-end=\"6868\" data-start=\"6854\">Option (A) is:</p><p data-end=\"6886\" data-start=\"6870\">$22,25,56,67,89$</p><p data-end=\"6917\" data-start=\"6888\">This array is already sorted.</p><p data-end=\"6974\" data-start=\"6919\">The first pivot is $22$, which is the smallest element.</p><p data-end=\"7011\" data-start=\"6976\">Therefore, the partition sizes are: $0$ and $4$</p><p data-end=\"7103\" data-start=\"7026\">The next pivot is $25$, again the smallest element of the remaining subarray.</p><p data-end=\"7132\" data-start=\"7105\">The partition sizes become: $0$ and $3$</p><p data-end=\"7187\" data-start=\"7147\">This continues throughout the algorithm.</p><p data-end=\"7219\" data-start=\"7189\">The comparisons are therefore: $4+3+2+1=10$</p><p data-end=\"7268\" data-start=\"7239\">In general, for $n$ elements:</p><p data-end=\"7292\" data-start=\"7270\">$(n-1)+(n-2)+\\cdots+1=\\frac{n(n-1)}{2}$</p><p data-end=\"7439\" data-start=\"7315\">Thus, an already sorted array produces the maximum number of comparisons when the first element is always selected as pivot.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/543408/go-classes-dpp-gate-cs-da-algorithms-quick-sort\" target=\"_blank\">GATE Overflow #543408</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"5595\" data-start=\"5501\">The best case behaviour occurs for quick sort is, if partition splits the array of size $n$ into</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$n/2:(n/2)-1$<br/></span>",
                "<span style=\"display: inline;\">$n/2:n/3$<br/></span>",
                "<span style=\"display: inline;\">$n/4:3n/2$<br/></span>",
                "<span style=\"display: inline;\">$n/4:3n/4$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"543283\"></a><div itemprop=\"text\"><p data-end=\"5828\" data-start=\"5714\">The best case of quicksort occurs when every pivot divides the array into two parts that are as equal as possible.</p><p data-end=\"5875\" data-start=\"5830\">One position is occupied by the pivot itself.</p><p data-end=\"5995\" data-start=\"5877\">Therefore, for an array containing $n$ elements, the remaining $n-1$ elements should be divided approximately equally.</p><p data-end=\"6043\" data-start=\"5997\">The two subarrays are therefore approximately $\\frac{n}{2}$ and $\\frac{n}{2}-1$</p><p data-end=\"6120\" data-start=\"6083\">This gives a balanced recursion tree.</p><p data-end=\"6168\" data-start=\"6122\">The corresponding recurrence is approximately:</p><p data-end=\"6189\" data-start=\"6170\">$T(n)=2T(n/2)+O(n)$</p><p data-end=\"6203\" data-start=\"6191\">which gives,</p><p data-end=\"6222\" data-start=\"6205\">$T(n)=O(n\\log n)$</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/543282/go-classes-dpp-gate-cs-da-algorithms-quicksort-best-case\" target=\"_blank\">GATE Overflow #543282</a></small></div>"
        }
    ]
});

registerTest({
    "name": "DPP 13 - Algorithms (Sorting Algorithms - Part 3)",
    "testLabel": "DPP 13",
    "testType": "DPP",
    "bracket": "Sorting Algorithms - Part 3",
    "subject": "algo",
    "series": "cse-dpp-2027",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 10,
    "topicsCovered": "Sorting Algorithms (Practice Set 3)",
    "questions": [
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"4679\" data-start=\"4615\">Which of the following is correct with regard to insertion sort?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">insertion sort is stable and it sorts In-place<br/></span>",
                "<span style=\"display: inline;\">insertion sort is unstable and it sorts In-place<br/></span>",
                "<span style=\"display: inline;\">insertion sort is stable and it does not sort In-place<br/></span>",
                "<span style=\"display: inline;\">insertion sort is unstable and it does not sort In-place</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"543281\"></a><div itemprop=\"text\"><p data-end=\"5004\" data-start=\"4960\">Insertion sort has two important properties.</p><p data-end=\"5017\" data-start=\"5006\"><strong data-end=\"5017\" data-start=\"5006\">Stable:</strong></p><p data-end=\"5117\" data-start=\"5019\">If two elements have equal keys, their relative order is preserved during standard insertion sort.</p><p data-end=\"5155\" data-start=\"5119\">Therefore, insertion sort is stable.</p><p data-end=\"5170\" data-start=\"5157\"><strong data-end=\"5170\" data-start=\"5157\">In-place:</strong></p><p data-end=\"5282\" data-start=\"5172\">Insertion sort requires only a constant amount of additional memory for variables such as the key and indices.</p><p data-end=\"5307\" data-start=\"5284\">Its auxiliary space is $O(1)$.</p><p data-end=\"5381\" data-start=\"5317\">Therefore, insertion sort is also an in-place sorting algorithm.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/543280/go-classes-dpp-gate-cs-da-algorithms-insertion-sort-properties\" target=\"_blank\">GATE Overflow #543280</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"4126\" data-start=\"4041\">How many iteration on an array of size $N$, does insertion sort algorithm consist of?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$N$<br/></span>",
                "<span style=\"display: inline;\">$N-1$<br/></span>",
                "<span style=\"display: inline;\">$N+1$<br/></span>",
                "<span style=\"display: inline;\">$N^2$</span>"
            ],
            "answer": "B",
            "solution": "<div class=\"solution-content\"><a name=\"543279\"></a><div itemprop=\"text\"><p data-end=\"4297\" data-start=\"4225\">In insertion sort, the first element is already considered to be sorted.</p><p data-end=\"4351\" data-start=\"4299\">Therefore, insertion begins from the second element.</p><p data-end=\"4397\" data-start=\"4353\">The algorithm processes elements at indices:</p><p data-end=\"4417\" data-start=\"4399\">$1,2,3,\\ldots,N-1$</p><p data-end=\"4460\" data-start=\"4419\">Hence, the total number of iterations is: $N-1$</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/543278/go-classes-dpp-gate-cs-da-algorithms-insertion-sort-iterations\" target=\"_blank\">GATE Overflow #543278</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"3257\" data-start=\"3134\">Consider an array of elements $5, 4, 3, 2, 1$, what are the steps of insertions done while doing insertion sort in the array.</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$(4,5,3,2,1) \\rightarrow (3,4,5,2,1) \\rightarrow (2,3,4,5,1) \\rightarrow (1,2,3,4,5)$<br/></span>",
                "<span style=\"display: inline;\">$(5,4,3,1,2) \\rightarrow (5,4,1,2,3) \\rightarrow (5,1,2,3,4) \\rightarrow (1,2,3,4,5)$<br/></span>",
                "<span style=\"display: inline;\">$(4,3,2,1,5) \\rightarrow (3,2,1,5,4) \\rightarrow (2,1,5,4,3) \\rightarrow (1,5,4,3,2)$<br/></span>",
                "<span style=\"display: inline;\">$(4,5,3,2,1) \\rightarrow (2,3,4,5,1) \\rightarrow (3,4,5,2,1) \\rightarrow (1,2,3,4,5)$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"543277\"></a><div itemprop=\"text\"><p data-end=\"3624\" data-start=\"3610\">Initial array: $5,4,3,2,1$</p><p data-end=\"3668\" data-start=\"3635\"><strong data-end=\"3646\" data-start=\"3635\">Pass 1:</strong> Insert $4$ into $[5]$</p><p data-end=\"3677\" data-start=\"3670\">$4,5,3,2,1$</p><p data-end=\"3714\" data-start=\"3679\"><strong data-end=\"3690\" data-start=\"3679\">Pass 2:</strong> Insert $3$ into $[4,5]$</p><p data-end=\"3723\" data-start=\"3716\">$3,4,5,2,1$</p><p data-end=\"3762\" data-start=\"3725\"><strong data-end=\"3736\" data-start=\"3725\">Pass 3:</strong> Insert $2$ into $[3,4,5]$</p><p data-end=\"3771\" data-start=\"3764\">$2,3,4,5,1$</p><p data-end=\"3812\" data-start=\"3773\"><strong data-end=\"3784\" data-start=\"3773\">Pass 4:</strong> Insert $1$ into $[2,3,4,5]$</p><p data-end=\"3821\" data-start=\"3814\">$1,2,3,4,5$</p><p data-end=\"3850\" data-start=\"3823\">Therefore, the sequence is:</p><p data-end=\"3915\" data-start=\"3852\">$(4,5,3,2,1)\\rightarrow(3,4,5,2,1)\\rightarrow(2,3,4,5,1)\\rightarrow(1,2,3,4,5)$</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/543276/go-classes-dpp-gate-cs-da-algorithms-insertion-sort-execution\" target=\"_blank\">GATE Overflow #543276</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"1980\" data-start=\"1943\">Consider the following two statements</p><p data-end=\"2089\" data-start=\"1982\">Statement $1:$ In insertion sort, after $m$ passes through the array, the first $m$ elements are in sorted order.</p><p data-end=\"2164\" data-start=\"2091\">Statement $2:$ And these elements are the $m$ smallest elements in the array.</p><p data-end=\"2170\" data-start=\"2166\">Then</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">Both the statements are true<br/></span>",
                "<span style=\"display: inline;\">Statement $1$ is true but statement $2$ is false<br/></span>",
                "<span style=\"display: inline;\">Statement $1$ is false but statement $2$ is true<br/></span>",
                "<span style=\"display: inline;\">Both the statements are false</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"543275\"></a><div itemprop=\"text\"><p data-end=\"2450\" data-start=\"2392\">Insertion sort maintains a <strong data-end=\"2436\" data-start=\"2419\">sorted prefix</strong> of the array.</p><p data-end=\"2529\" data-start=\"2452\">After every pass, the elements processed so far are arranged in sorted order.</p><p data-end=\"2566\" data-start=\"2531\">Therefore, Statement $1$ is true.</p><p data-end=\"2663\" data-start=\"2568\">However, these sorted elements are not necessarily the smallest elements of the complete array.</p><p data-end=\"2677\" data-start=\"2665\">For example, $[4,5,1,2,3]$</p><p data-end=\"2811\" data-start=\"2694\">The initial portion $[4,5]$ may be sorted, but $4$ and $5$ are clearly not the smallest elements of the entire array.</p><p data-end=\"2961\" data-start=\"2813\">Insertion sort guarantees that the processed portion is sorted, but it does not guarantee that this portion contains the globally smallest elements.</p><p data-end=\"2973\" data-start=\"2963\">Therefore,</p><p data-end=\"2993\" data-start=\"2975\">Statement $1 =$ True</p><p data-end=\"3014\" data-start=\"2995\">Statement $2 =$ False</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/543274/go-classes-dpp-gate-cs-da-algorithms-insertion-sort-properties\" target=\"_blank\">GATE Overflow #543274</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"364\" data-start=\"244\">In Insertion sort, for the array $[34, 8, 64, 51, 32, 21]$, how will the array elements look like after second iteration</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$8, 21, 32, 34, 51, 64$<br/></span>",
                "<span style=\"display: inline;\">$8, 32, 34, 51, 64, 21$<br/></span>",
                "<span style=\"display: inline;\">$8, 34, 51, 64, 32, 21$<br/></span>",
                "<span style=\"display: inline;\">$8, 34, 64, 51, 32, 21$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"543271\"></a><div itemprop=\"text\"><p data-end=\"557\" data-start=\"543\">Initial array:</p><p data-end=\"579\" data-start=\"559\">$[34,8,64,51,32,21]$</p><p data-end=\"704\" data-start=\"581\">In insertion sort, each iteration inserts the current element into its correct position in the already sorted left portion.</p><p data-end=\"726\" data-start=\"706\"><br/><strong data-end=\"726\" data-start=\"706\">First iteration:</strong></p><p data-end=\"736\" data-start=\"728\">Key $=8$</p><p data-end=\"760\" data-start=\"738\">Compare $8$ with $34$.</p><p data-end=\"825\" data-start=\"762\">Since $8&lt;34$, shift $34$ to the right and insert $8$ before it.</p><p data-end=\"841\" data-start=\"827\">Array becomes:</p><p data-end=\"863\" data-start=\"843\">$[8,34,64,51,32,21]$</p><p data-end=\"886\" data-start=\"865\"><br/><strong data-end=\"886\" data-start=\"865\">Second iteration:</strong></p><p data-end=\"897\" data-start=\"888\">Key $=64$</p><p data-end=\"922\" data-start=\"899\">Compare $64$ with $34$.</p><p data-end=\"963\" data-start=\"924\">Since $64&gt;34$, no shifting is required.</p><p data-end=\"1003\" data-start=\"965\">Therefore, after the second iteration:</p><p data-end=\"1025\" data-start=\"1005\">$[8,34,64,51,32,21]$</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/543270/go-classes-dpp-gate-cs-da-algorithms-insertion-sort-tracing\" target=\"_blank\">GATE Overflow #543270</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"7984\" data-start=\"7899\">Randomized quicksort is applied to $n$ distinct keys, where $n$ is divisible by $16$.</p><p data-end=\"8024\" data-start=\"7986\">A pivot is chosen uniformly at random.</p><p data-end=\"8121\" data-start=\"8026\">What is the probability that both recursive subarrays contain at least $\\frac{n}{16}$ elements?</p><p data-end=\"8153\" data-start=\"8123\"><em>Give your answer as a decimal.</em></p></div></span>",
            "image": "",
            "options": [],
            "answer": "0.875",
            "solution": "<div class=\"solution-content\"><a name=\"543029\"></a><div itemprop=\"text\"><p data-end=\"8278\" data-start=\"8218\">Suppose the selected pivot has rank $i$ in the sorted order.</p><p data-end=\"8285\" data-start=\"8280\">Then:</p><ul data-end=\"8377\" data-start=\"8287\"><li data-end=\"8331\" data-section-id=\"vitu0y\" data-start=\"8287\">The left subarray contains $i-1$ elements.<br/> </li><li data-end=\"8377\" data-section-id=\"sme9dy\" data-start=\"8332\">The right subarray contains $n-i$ elements.<br/> </li></ul><p data-end=\"8445\" data-start=\"8379\">For the left subarray to contain at least $\\frac{n}{16}$ elements:</p><p data-end=\"8468\" data-start=\"8447\">$\\Rightarrow i-1\\geq\\frac{n}{16}$</p><p data-end=\"8480\" data-start=\"8470\">$\\therefore i\\geq\\frac{n}{16}+1$</p><p data-end=\"8572\" data-start=\"8505\">For the right subarray to contain at least $\\frac{n}{16}$ elements:</p><p data-end=\"8595\" data-start=\"8574\">$\\Rightarrow n-i\\geq\\frac{n}{16}$</p><p data-end=\"8607\" data-start=\"8597\">$\\therefore i\\leq\\frac{15n}{16}$</p><p data-end=\"8670\" data-start=\"8632\">Hence, the acceptable pivot ranks are:</p><p data-end=\"8727\" data-start=\"8672\">$\\frac{n}{16}+1,\\frac{n}{16}+2,\\ldots,\\frac{15n}{16}$</p><p data-end=\"8769\" data-start=\"8729\">The number of acceptable pivot ranks is:</p><p data-end=\"8800\" data-start=\"8771\">$\\frac{15n}{16}-\\frac{n}{16}=\\frac{14n}{16}=\\frac{7n}{8}$</p><p data-end=\"8896\" data-start=\"8838\">There are $n$ possible pivot choices, each equally likely.</p><p data-end=\"8908\" data-start=\"8898\">$\\therefore P=\\frac{7n/8}{n}=\\frac{7}{8}=\\boxed{0.875}$</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/543027/go-classes-dpp-gate-cs-da-algorithms-quicksort\" target=\"_blank\">GATE Overflow #543027</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"6087\" data-start=\"6040\">Consider an array of $2n$ elements of the form:</p><p data-end=\"6134\" data-start=\"6089\">$1,2n-1,2,2n-2,3,2n-3,4,2n-4,\\ldots,n,n$</p><p data-end=\"6160\" data-start=\"6136\">For example, when $n=8$:</p><p data-end=\"6231\" data-start=\"6162\">$1,15,2,14,3,13,4,12,5,11,6,10,7,9,8,8$</p><p data-end=\"6324\" data-start=\"6233\">What is the number of comparisons made by standard $2$-way quicksort with no initial shuffle?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\Theta(\\log n)$<br/></span>",
                "<span style=\"display: inline;\">$\\Theta(n)$<br/></span>",
                "<span style=\"display: inline;\">$\\Theta(n\\log n)$<br/></span>",
                "<span style=\"display: inline;\">$\\Theta(n^2)$</span>"
            ],
            "answer": "D",
            "solution": "<div class=\"solution-content\"><a name=\"543026\"></a><div itemprop=\"text\"><p data-end=\"6517\" data-start=\"6486\">Let the length of the array be:</p><p data-end=\"6525\" data-start=\"6519\">$m=2n$</p><p data-end=\"6582\" data-start=\"6527\">Standard quicksort uses the first element as the pivot.</p><p data-end=\"6607\" data-start=\"6584\">In the first partition:</p><ul data-end=\"6710\" data-start=\"6609\"><li data-end=\"6628\" data-section-id=\"oq61ds\" data-start=\"6609\">The pivot is $1$.<br/> </li><li data-end=\"6658\" data-section-id=\"1mlhp17\" data-start=\"6629\">It is the smallest element.<br/> </li><li data-end=\"6710\" data-section-id=\"6x149q\" data-start=\"6659\">The resulting subarrays have sizes $0$ and $m-1$.<br/> </li></ul><p data-end=\"6739\" data-start=\"6712\">In the next recursive call:</p><ul data-end=\"6838\" data-start=\"6741\"><li data-end=\"6786\" data-section-id=\"gdo8xc\" data-start=\"6741\">The pivot is the largest remaining element.<br/> </li><li data-end=\"6838\" data-section-id=\"n3sza5\" data-start=\"6787\">The resulting subarrays have sizes $m-2$ and $0$.<br/> </li></ul><p data-end=\"6969\" data-start=\"6840\">This pattern continues. </p><p data-end=\"6969\" data-start=\"6840\">In every recursive call, the pivot is either the smallest or the largest element of the current subarray.</p><p data-end=\"7023\" data-start=\"6971\">Therefore, the sizes of the subarrays processed are:</p><p data-end=\"7053\" data-start=\"7025\">$m,m-1,m-2,\\ldots,2,1$</p><p data-end=\"7122\" data-start=\"7055\">Partitioning an array of size $k$ requires $\\Theta(k)$ comparisons.</p><p data-end=\"7156\" data-start=\"7124\">Thus, the total comparisons are:</p><p data-end=\"7182\" data-start=\"7158\">$m+(m-1)+(m-2)+\\cdots+1$</p><p data-end=\"7220\" data-start=\"7184\">Using the arithmetic-series formula: $\\frac{m(m+1)}{2}$</p><p data-end=\"7252\" data-start=\"7242\">Therefore:</p><p data-end=\"7272\" data-start=\"7254\">$T(m)=\\Theta(m^2)$</p><p data-end=\"7287\" data-start=\"7274\">Since $m=2n$:</p><p data-end=\"7311\" data-start=\"7289\">$T(2n)=\\Theta((2n)^2)$</p><p data-end=\"7328\" data-start=\"7313\">$=\\Theta(4n^2)=\\Theta(n^2)$</p><p data-end=\"7352\" data-start=\"7346\"><br/><strong>Answer: D</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/543025/go-classes-dpp-gate-cs-da-algorithms-quicksort\" target=\"_blank\">GATE Overflow #543025</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"4407\" data-start=\"4296\">Consider the problem of sorting an array of $n$ comparable elements in which there are only four distinct keys.</p><p data-end=\"4501\" data-start=\"4409\">It is possible to design an algorithm that makes at most $4n$ comparisons in the worst case.</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">True<br/></span>",
                "<span style=\"display: inline;\">False</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"543024\"></a><div itemprop=\"text\"><p data-end=\"4597\" data-start=\"4577\">Use $3$-way quicksort.</p><p data-end=\"4692\" data-start=\"4599\">When a pivot value $v$ is selected, $3$-way partitioning divides the subarray into three parts:</p><ul data-end=\"4773\" data-start=\"4694\"><li data-end=\"4721\" data-section-id=\"1j2807c\" data-start=\"4694\">Elements smaller than $v$<br/> </li><li data-end=\"4745\" data-section-id=\"1tl9r38\" data-start=\"4722\">Elements equal to $v$<br/> </li><li data-end=\"4773\" data-section-id=\"zjh5qq\" data-start=\"4746\">Elements greater than $v$<br/> </li></ul><p data-end=\"4911\" data-start=\"4775\">After partitioning, all elements equal to $v$ are in their final positions. </p><p data-end=\"4911\" data-start=\"4775\">The algorithm does not process that equal-key portion again.</p><p data-end=\"5058\" data-start=\"4913\">Since the array contains only four distinct keys, there can be at most four non-empty partitioning calls, one corresponding to each distinct key.</p><p data-end=\"5154\" data-start=\"5060\">A partitioning call examines at most $n$ elements and therefore makes at most $n$ comparisons.</p><p data-end=\"5185\" data-start=\"5156\">Thus, a valid upper bound is: $4\\times n=4n$</p><p data-end=\"5287\" data-start=\"5203\">Therefore, the array can be sorted using at most $4n$ comparisons in the worst case.</p><p data-end=\"5367\" data-start=\"5289\"><strong>Answer: A</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/543021/go-classes-dpp-gate-cs-da-algorithms-quicksort\" target=\"_blank\">GATE Overflow #543021</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"2422\" data-start=\"2337\">Why do $2$-pivot and $3$-pivot quicksort generally perform better than $1$-pivot quicksort?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">They always perform fewer comparisons.<br/></span>",
                "<span style=\"display: inline;\">They always perform fewer exchanges.<br/></span>",
                "<span style=\"display: inline;\">They produce fewer cache misses.<br/></span>",
                "<span style=\"display: inline;\">None of the above.</span>"
            ],
            "answer": "C",
            "solution": "<div class=\"solution-content\"><a name=\"543023\"></a><div itemprop=\"text\"><p data-end=\"2814\" data-start=\"2652\">Fewer cache misses is the correct reason.</p><p data-end=\"2814\" data-start=\"2652\">Number of entries scanned is a good proxy for cache performance when comparing quicksort variants</p><p data-end=\"2814\" data-start=\"2652\">The running time of an algorithm on a real computer is influenced not only by comparisons and exchanges, but also by how frequently the algorithm accesses memory.</p><p data-end=\"2946\" data-start=\"2816\">A cache miss occurs when the required array entry is not available in the processor cache and must be obtained from slower memory.<br/> </p><p style=\"text-align:center\"><img alt=\"\" height=\"294\" src=\"https://cdn.mathpix.com/snip/images/Dy5KTacNvocmicvPLXCWwL3qi7n7LLcy3aKu_Dh03-w.original.fullsize.png\" width=\"707\"/></p><p data-end=\"2999\" data-start=\"2948\"><br/>Thus, multi-pivot quicksort scans fewer array entries.</p><p data-end=\"3199\" data-start=\"3157\">Fewer scanned entries generally result in:</p><ul data-end=\"3282\" data-start=\"3201\"><li data-end=\"3224\" data-section-id=\"11atujh\" data-start=\"3201\">Better cache locality<br/> </li><li data-end=\"3245\" data-section-id=\"ci2jp1\" data-start=\"3225\">Fewer cache misses<br/> </li><li data-end=\"3282\" data-section-id=\"1chfji1\" data-start=\"3246\">Less time spent waiting for memory<br/> </li></ul><p data-end=\"3416\" data-start=\"3284\">The number of exchanges may actually be higher for multi-pivot quicksort. </p><p data-end=\"3416\" data-start=\"3284\">Therefore, fewer exchanges cannot explain the improvement.</p><p data-end=\"3571\" data-start=\"3418\">Although the number of comparisons may sometimes be slightly lower, the primary practical benefit identified in the source is improved cache performance.<br/> </p><p data-end=\"3583\" data-start=\"3573\"><strong>Answer: C</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/543019/go-classes-dpp-gate-cs-da-algorithms-quicksort\" target=\"_blank\">GATE Overflow #543019</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"914\" data-start=\"764\">In the worst case, approximately how many key comparisons and exchanges does the standard $\\texttt{partition()}$ procedure perform on a subarray of length $n$?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\frac{n}{2}$ comparisons and $\\frac{n}{2}$ exchanges<br/></span>",
                "<span style=\"display: inline;\">$\\frac{n}{2}$ comparisons and $n$ exchanges<br/></span>",
                "<span style=\"display: inline;\">$n$ comparisons and $\\frac{n}{2}$ exchanges<br/></span>",
                "<span style=\"display: inline;\">$n$ comparisons and $n$ exchanges</span>"
            ],
            "answer": "C",
            "solution": "<div class=\"solution-content\"><a name=\"543006\"></a><div itemprop=\"text\"><p data-end=\"1179\" data-start=\"1159\">During partitioning:</p><ul data-end=\"1330\" data-start=\"1181\"><li data-end=\"1220\" data-section-id=\"vbjyha\" data-start=\"1181\">Pointer $i$ scans from left to right.<br/> </li><li data-end=\"1260\" data-section-id=\"7f7w4t\" data-start=\"1221\">Pointer $j$ scans from right to left.<br/> </li><li data-end=\"1330\" data-section-id=\"q166vy\" data-start=\"1261\">Every element is compared with the pivot during one of these scans.<br/> </li></ul><p data-end=\"1392\" data-start=\"1332\">Therefore, the total number of comparisons is approximately: $n$</p><p data-end=\"1443\" data-start=\"1399\">More precisely, the implementation can make: $n+1$ comparisons in the worst case.</p><p data-end=\"1619\" data-start=\"1484\">An exchange occurs when both scans stop at elements that are on the wrong sides of the pivot. </p><p data-end=\"1619\" data-start=\"1484\">Every such exchange handles two elements.</p><p data-end=\"1654\" data-start=\"1621\">Therefore, at most approximately: $\\frac{n}{2}$ exchanges are performed.</p><p data-end=\"1703\" data-start=\"1697\">Hence:</p><p data-end=\"1783\" data-start=\"1705\">$\\boxed{\\text{Comparisons}\\approx n,\\quad \\text{exchanges}\\approx\\frac{n}{2}}$</p><p data-end=\"1806\" data-start=\"1785\"><br/><strong data-end=\"1806\" data-start=\"1785\">Answer: C</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/543005/go-classes-dpp-gate-cs-da-algorithms-quicksort-partition\" target=\"_blank\">GATE Overflow #543005</a></small></div>"
        }
    ]
});

registerTest({
    "name": "DPP 14 - Algorithms (Sorting Algorithms - Part 4)",
    "testLabel": "DPP 14",
    "testType": "DPP",
    "bracket": "Sorting Algorithms - Part 4",
    "subject": "algo",
    "series": "cse-dpp-2027",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 10,
    "topicsCovered": "Sorting Algorithms (Practice Set 4)",
    "questions": [
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"8383\" data-start=\"8227\">The standard $2$-way quicksort partition procedure uses the first element as the pivot and stops both scans when they encounter an element equal to the pivot.</p><p data-end=\"8463\" data-start=\"8385\">It is applied to an array of $16$ identical elements indexed from $0$ to $15$:</p><p data-end=\"8500\" data-start=\"8465\">$[A,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A]$</p><p data-end=\"8565\" data-start=\"8502\">At which index is the original pivot placed after partitioning?</p></div></span>",
            "image": "",
            "options": [],
            "answer": "8",
            "solution": "<div class=\"solution-content\"><a name=\"542949\"></a><div itemprop=\"text\"><p style=\"text-align:center\"><img alt=\"\" height=\"525\" src=\"https://cdn.mathpix.com/snip/images/oPv5hmAUnLXaL9pWTgKH0_3-IQLqk4CriBLdd1lOcDY.original.fullsize.png\" width=\"526\"/></p><p data-end=\"8636\" data-start=\"8626\"><br/>Initially:</p><p data-end=\"8657\" data-start=\"8638\">$lo=0,\\qquad hi=15$</p><p data-end=\"8697\" data-start=\"8659\">The pivot is the element at index $0$.</p><p data-end=\"8804\" data-start=\"8699\">The left pointer starts scanning from index $1$, while the right pointer starts scanning from index $15$.</p><p data-end=\"8874\" data-start=\"8806\">Because every element equals the pivot, both scans stop immediately.</p><p data-end=\"8906\" data-start=\"8876\">The exchanged index pairs are:</p><p data-end=\"8916\" data-start=\"8908\">$(1,15)$</p><p data-end=\"8926\" data-start=\"8918\">$(2,14)$</p><p data-end=\"8936\" data-start=\"8928\">$(3,13)$</p><p data-end=\"8946\" data-start=\"8938\">$(4,12)$</p><p data-end=\"8956\" data-start=\"8948\">$(5,11)$</p><p data-end=\"8966\" data-start=\"8958\">$(6,10)$</p><p data-end=\"8975\" data-start=\"8968\">$(7,9)$</p><p data-end=\"9059\" data-start=\"8977\">Since all elements are identical, these exchanges do not visibly change the array.</p><p data-end=\"9078\" data-start=\"9061\">On the next scan:</p><p data-end=\"9096\" data-start=\"9080\">$i=8,\\qquad j=8$</p><p data-end=\"9224\" data-start=\"9098\">The pointers have met, so partitioning stops. </p><p data-end=\"9224\" data-start=\"9098\">The original pivot at index $0$ is then exchanged with the element at index $j$.</p><p data-end=\"9260\" data-start=\"9226\">Therefore, the pivot is placed at $: \\boxed{j=8}$</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/542947/go-classes-dpp-gate-cs-da-algorithms-quicksort-partition\" target=\"_blank\">GATE Overflow #542947</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"2523\" data-start=\"2477\">An array contains $n\\geq 8$ distinct elements:</p><p data-end=\"2545\" data-start=\"2525\">$a_1&lt;a_2&lt;\\cdots&lt;a_n$</p><p data-end=\"2594\" data-start=\"2547\">The array is sorted using randomized quicksort.</p><p data-end=\"2670\" data-start=\"2596\">What is the probability that $a_7$ and $a_8$ are compared with each other?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$0$<br/></span>",
                "<span style=\"display: inline;\">$\\dfrac{1}{n}$<br/></span>",
                "<span style=\"display: inline;\">$\\dfrac{2}{n}$<br/></span>",
                "<span style=\"display: inline;\">$1$</span>"
            ],
            "answer": "D",
            "solution": "<div class=\"solution-content\"><a name=\"542943\"></a><div itemprop=\"text\"><p data-end=\"2902\" data-start=\"2778\">In randomized quicksort, two elements $a_i$ and $a_j$, where $i&lt;j$, are compared exactly when the first pivot selected from:</p><p data-end=\"2932\" data-start=\"2904\">${a_i,a_{i+1},\\ldots,a_j}$</p><p data-end=\"2959\" data-start=\"2934\">is either $a_i$ or $a_j$.</p><p data-end=\"2971\" data-start=\"2961\">$\\therefore P(a_i\\text{ and }a_j\\text{ are compared})=\\frac{2}{j-i+1}$</p><p data-end=\"3054\" data-start=\"3034\">For $a_7$ and $a_8$:</p><p data-end=\"3072\" data-start=\"3056\">$i=7,\\qquad j=8$</p><p data-end=\"3079\" data-start=\"3074\">Thus:</p><p data-end=\"3100\" data-start=\"3081\">$P=\\frac{2}{8-7+1}=\\frac{2}{2}=1$</p><p data-end=\"3302\" data-start=\"3121\">Another way to understand it is that $a_7$ and $a_8$ are adjacent in sorted order. </p><p data-end=\"3302\" data-start=\"3121\">There is no element whose pivot selection can separate them before one of the two becomes a pivot.</p><p data-end=\"3340\" data-start=\"3304\">Therefore, they are always compared.</p><p data-end=\"3363\" data-start=\"3342\"><br/><strong data-end=\"3363\" data-start=\"3342\">Answer : D</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/542942/go-classes-dpp-gate-cs-da-algorithms-randomized-quicksort\" target=\"_blank\">GATE Overflow #542942</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Assume that a merge sort algorithm in the worst case takes $30$ seconds for an input of size $64$. </p><p>Which of the following most closely approximates the maximum input size of a problem that can be solved in $6$ minutes?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$256$<br/></span>",
                "<span style=\"display: inline;\">$512$<br/></span>",
                "<span style=\"display: inline;\">$1024$<br/></span>",
                "<span style=\"display: inline;\">$2048$</span>"
            ],
            "answer": "B",
            "solution": "<div class=\"solution-content\"><a name=\"542796\"></a><div itemprop=\"text\"><p data-end=\"31\" data-start=\"14\">Merge sort takes:</p><p data-end=\"50\" data-start=\"33\">$T(n)=cn\\log_2 n$</p><p data-end=\"76\" data-start=\"52\">where $c$ is a constant.</p><p data-end=\"132\" data-start=\"78\">For input size $64$, the running time is $30$ seconds:</p><p data-end=\"153\" data-start=\"134\">$30=c(64\\log_2 64)$</p><p data-end=\"161\" data-start=\"155\">Since:</p><p data-end=\"176\" data-start=\"163\">$\\log_2 64=6$</p><p data-end=\"185\" data-start=\"178\">we get:</p><p data-end=\"210\" data-start=\"187\">$30=c(64\\times 6)=384c$</p><p data-end=\"250\" data-start=\"212\">The new available time is $6$ minutes:</p><p data-end=\"276\" data-start=\"252\">$6\\times 60=360$ seconds</p><p data-end=\"306\" data-start=\"278\">Thus, the available time is $:\\dfrac{360}{30}=12$</p><p data-end=\"353\" data-start=\"329\">times the original time.</p><p data-end=\"402\" data-start=\"355\">Therefore, the new input size $n$ must satisfy:</p><p data-end=\"438\" data-start=\"404\">$\\dfrac{n\\log_2 n}{64\\log_2 64}=12$</p><p data-end=\"443\" data-start=\"440\"><br/>So:</p><p data-end=\"476\" data-start=\"445\">$n\\log_2 n=12\\times 64\\times 6$</p><p data-end=\"494\" data-start=\"478\">$n\\log_2 n=4608$</p><p data-end=\"524\" data-start=\"496\">Now check the given options:</p><p data-end=\"538\" data-start=\"526\">For $n=256$:</p><p data-end=\"572\" data-start=\"540\">$256\\log_2 256=256\\times 8=2048$</p><p data-end=\"586\" data-start=\"574\">For $n=512$:</p><p data-end=\"620\" data-start=\"588\">$512\\log_2 512=512\\times 9=4608$</p><p data-end=\"680\" data-start=\"622\">Thus, $n=512$ exactly satisfies the required running time.</p><p data-end=\"719\" data-start=\"682\">Therefore, the maximum input size is: $\\boxed{512}$</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/542795/go-classes-dpp-gate-cs-da-algorithms-merge-sort\" target=\"_blank\">GATE Overflow #542795</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"787\" data-start=\"569\">Suppose instead of dividing the input into two parts, a modified merge sort divides the input into <strong data-end=\"688\" data-start=\"668\">four equal parts</strong>, sorts each one-fourth recursively, and finally combines the four parts using an $O(n)$ procedure.</p><p data-end=\"833\" data-start=\"789\">Which recurrence describes the running time?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$T(n) = 4T(n/4) + O(n)$<br/></span>",
                "<span style=\"display: inline;\">$T(n) = 4T(n/2) + 2O(n)$<br/></span>",
                "<span style=\"display: inline;\">$T(n) = T(n/4) + 4O(n)$<br/></span>",
                "<span style=\"display: inline;\">$T(n) = 4T(n/4) + 4O(n)$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"542794\"></a><div itemprop=\"text\"><p data-end=\"62\" data-start=\"14\">The modified merge sort performs two main steps:</p><p data-end=\"89\" data-start=\"64\"><strong>1) Recursive sorting</strong></p><p data-end=\"150\" data-start=\"91\">The input of size $n$ is divided into <strong data-end=\"149\" data-start=\"129\">four equal parts</strong>.</p><p data-end=\"181\" data-start=\"152\">So, the size of each part is $:n/4$</p><p data-end=\"275\" data-start=\"190\">Each of the four parts is sorted recursively. Therefore, the total recursive cost is $: 4T(n/4)$</p><p data-end=\"322\" data-start=\"288\"><br/><strong>2) Combining the sorted parts</strong></p><p data-end=\"414\" data-start=\"324\">After the four parts are sorted, they are merged using a procedure that takes linear time $:O(n)$</p><p data-end=\"464\" data-start=\"424\">Hence, the total running time satisfies:</p><p data-end=\"485\" data-start=\"466\">$\\boxed{T(n)=4T(n/4)+O(n)}$</p><p data-end=\"520\" data-start=\"487\"><strong>Answer : A </strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/542785/go-classes-dpp-gate-cs-da-algorithms-four-way-merge-sort\" target=\"_blank\">GATE Overflow #542785</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"3859\" data-start=\"3733\">Merge sort divides an array of size $n$ into two halves, recursively sorts both halves, and then merges the two sorted halves.</p><p data-end=\"3910\" data-start=\"3861\">Which recurrence correctly represents merge sort?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$T(n) = T(n/2) + \\Theta(n)$<br/></span>",
                "<span style=\"display: inline;\">$T(n) = 2T(n/2) + \\Theta(1)$<br/></span>",
                "<span style=\"display: inline;\">$T(n) = 2T(n/2) + \\Theta(n)$<br/></span>",
                "<span style=\"display: inline;\">$T(n) = T(n-1) + \\Theta(n)$</span>"
            ],
            "answer": "C",
            "solution": "<div class=\"solution-content\"><a name=\"542762\"></a><div itemprop=\"text\"><p data-end=\"3171\" data-start=\"3139\">Merge sort works in three steps.</p><p data-end=\"3216\" data-start=\"3173\">Step $1$: Divide the array into two halves.</p><p data-end=\"3237\" data-start=\"3218\">Each half has size:</p><p data-end=\"3244\" data-start=\"3239\">$n/2$</p><p data-end=\"3285\" data-start=\"3246\">Step $2$: Recursively sort both halves.</p><p data-end=\"3308\" data-start=\"3287\">So recursive cost is:</p><p data-end=\"3319\" data-start=\"3310\">$2T(n/2)$</p><p data-end=\"3359\" data-start=\"3321\">Step $3$: Merge the two sorted halves.</p><p data-end=\"3417\" data-start=\"3361\">Merging two sorted arrays with total $n$ elements takes:</p><p data-end=\"3430\" data-start=\"3419\">$\\Theta(n)$</p><p data-end=\"3461\" data-start=\"3432\">Therefore, the recurrence is:</p><p data-end=\"3491\" data-start=\"3463\">$T(n) = 2T(n/2) + \\Theta(n)$</p><p data-end=\"3514\" data-start=\"3493\">Using Master Theorem:</p><p data-end=\"3523\" data-start=\"3516\">$a = 2$</p><p data-end=\"3532\" data-start=\"3525\">$b = 2$</p><p data-end=\"3552\" data-start=\"3534\">$f(n) = \\Theta(n)$</p><p data-end=\"3587\" data-start=\"3554\">$n^{\\log_b a} = n^{\\log_2 2} = n$</p><p data-end=\"3592\" data-start=\"3589\">So:</p><p data-end=\"3623\" data-start=\"3594\">$f(n) = \\Theta(n^{\\log_b a})$</p><p data-end=\"3657\" data-start=\"3625\">This is Master Theorem Case $2$.</p><p data-end=\"3669\" data-start=\"3659\">Therefore:</p><p data-end=\"3696\" data-start=\"3671\">$T(n) = \\Theta(n \\log n)$</p><p data-end=\"3759\" data-start=\"3698\">But the question asks for the recurrence, so final answer is :<strong> C</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/542761/go-classes-dpp-gate-cs-da-algorithms-merge-sort\" target=\"_blank\">GATE Overflow #542761</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p><button title=\"Click to view full question\" type=\"button\"></button></p><p><button title=\"Click to view full question\" type=\"button\">Which of the following statements is/are correct?</button></p><p><label>A.<button title=\"View full option\" type=\"button\"></button></label></p><p><label><button title=\"View full option\" type=\"button\">Merge sort always has more number of swaps that comparisons</button></label></p><p><br/><label><button title=\"View full option\" type=\"button\"></button></label></p><p><label><button title=\"View full option\" type=\"button\">Number of comparisons in partition algorithm are same for best case and worst case.</button></label></p><p><label>C.<button title=\"View full option\" type=\"button\"></button></label></p><p><label><button title=\"View full option\" type=\"button\">Quick sort is an inplace algorithm while merge sort is an out place algorithm.</button></label></p><p><label>D.<button title=\"View full option\" type=\"button\"></button></label></p><p><label><button title=\"View full option\" type=\"button\">None of these</button></label></p></div></span>",
            "image": "",
            "options": [],
            "answer": "535667",
            "solution": "<div class=\"solution-content\"><a name=\"542649\"></a><div itemprop=\"text\"><p><strong>A)</strong> Merge sort processes elements by diving and merging. It does not always perform more swaps than comparison. In fact, standard merge sort moves elements to another array rather than performing traditional element swaps. So <strong>A is False.</strong></p><p><b>B)</b> The total number of comparisons in the partition process depends entirely on how evenly the array is partitioned. In best case, array can be partitioned into two equal halves, creating balanced tree that require very few total comparisons (O(nlogn)).In worst case, the array may get split unevenly that forces the entire array to compared over and over again.(O(<span class=\"math-tex\" data-latex=\"n^{2}\">$n^{2}$)). So <strong>B is False.</strong></span></p><p><strong>Note</strong> that if single partition routine is performed, then the number of comparisons remains same in best and worst case.</p><p><span class=\"math-tex\" data-latex=\"n^{2}\"><strong>C)</strong> Merge sort uses an extra array to combine two subarrays. So it is not an inplace algorithm. Quicksort just picks a pivot and place it into its right position (no extra space). So <strong>C is True.</strong></span></p><p> </p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/535667/algorithm\" target=\"_blank\">GATE Overflow #535667</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Assume that a Bubble Sort algorithm in the worst case takes $\\mathbf{2 5}$ seconds for an input of size $\\mathbf{5 0}$. Which of the following most closely approximates the maximum input size of a problem that can be solved in $\\mathbf{4}$ minutes?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$100$<br/></span>",
                "<span style=\"display: inline;\">$155$<br/></span>",
                "<span style=\"display: inline;\">$200$<br/></span>",
                "<span style=\"display: inline;\">$480$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"488991\"></a><div itemprop=\"text\"><p>ANS: 155 <img alt=\"\" height=\"577\" src=\"https://gateoverflow.in/?qa=blob&amp;qa_blobid=2761358663613005658\" width=\"1200\"/></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/488901/go-classes-dpp-algorithms-bubblesort\" target=\"_blank\">GATE Overflow #488901</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>If one uses a straight two-way merge sort algorithm to sort the following elements in ascending order:</p><p>$$<br/>50,10,35,80,22,5,70,45,18,60,25,90<br/>$$</p><p>then the order of these elements after the third pass of the algorithm is:</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$10,35,50,80,5,22,45,70,18,25,60,90$<br/></span>",
                "<span style=\"display: inline;\">$5,10,22,35,45,50,70,80,18,25,60,90$<br/></span>",
                "<span style=\"display: inline;\">$5,10,18,22,25,35,45,50,60,70,80,90$<br/></span>",
                "<span style=\"display: inline;\">$10,35,50,80,5,18,22,25,45,60,70,90$<br/></span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"488908\"></a><div itemprop=\"text\">B</div><br><br><small>Source: <a href=\"https://gateoverflow.in/488898/go-classes-dpp-algorithms-mergesort\" target=\"_blank\">GATE Overflow #488898</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>If one uses the straight two-way merge sort algorithm to sort the following elements in ascending order: $20,47,15,8,9,4,40,30,12,17$, then the order of these elements after the second pass of the algorithms is</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$8,9,15,20,47,4,12,7,30,30$<br/></span>",
                "<span style=\"display: inline;\">$8,15,20,47,4,9,30,40,12,17$<br/></span>",
                "<span style=\"display: inline;\">$15,20,47,4,8,9,12,30,40,17$<br/></span>",
                "<span style=\"display: inline;\">$4,8,9,15,20,47,12,17,30,40$</span>"
            ],
            "answer": "B",
            "solution": "<div class=\"solution-content\"><a name=\"487285\"></a><div itemprop=\"text\"><p><b>Result after 1st Pass:</b> <code>20, 47, 8, 15, 4, 9, 30, 40, 12, 17</code></p><p><b>Result after 2nd Pass:</b> <b><code>8, 15, 20, 47, 4, 9, 30, 40, 12, 17</code></b></p><p><b><code>Answer B</code></b></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/486902/go-classes-dpp-algorithm-isro\" target=\"_blank\">GATE Overflow #486902</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\">If the array $A$ contains elements $25,40,23,7,54,78$ and $2$ in that order, The element at $3^{\\text {rd }}$ position of the array after $3^{\\text {rd }}$ pass of insertion sort will be ________.</div></span>",
            "image": "",
            "options": [],
            "answer": "25",
            "solution": "<div class=\"solution-content\"><a name=\"487261\"></a><div itemprop=\"text\">given Array 25,40,23,7,54,78,2<br/> <br/> 1st Pass : 25,40 | 23,7,54,78,2<br/> <br/> 2nd pass : 23,25,40 | 7,54,78,2<br/> <br/> 3rd pass : 7,23,25,40 | 54,78,2<br/> <br/> There fore at third position 25</div><br><br><small>Source: <a href=\"https://gateoverflow.in/486203/go-classes-dpp-algorithm-sorting\" target=\"_blank\">GATE Overflow #486203</a></small></div>"
        }
    ]
});

registerTest({
    "name": "DPP 15 - Algorithms (Sorting Algorithms - Part 5)",
    "testLabel": "DPP 15",
    "testType": "DPP",
    "bracket": "Sorting Algorithms - Part 5",
    "subject": "algo",
    "series": "cse-dpp-2027",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 14,
    "topicsCovered": "Sorting Algorithms (Practice Set 5)",
    "questions": [
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\">If Counting Sort is applied to an array of size $n=50$ with maximum element $k=200$, the minimum auxiliary array size required is (assume the array doesn't contain negative numbers) _______?</div></span>",
            "image": "",
            "options": [],
            "answer": "201",
            "solution": "<div class=\"solution-content\"><a name=\"484042\"></a><div itemprop=\"text\">answer is 201 <br/> <br/> so maximum element 200 so we will size of 200+1 array to store the count</div><br><br><small>Source: <a href=\"https://gateoverflow.in/483910/go-classes-dpp-algorithms-counting-sort\" target=\"_blank\">GATE Overflow #483910</a></small></div>"
        },
        {
            "marks": 2,
            "neg": 0,
            "type": "MSQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Which of the following statements is/are correct regarding the tightest upper bound of sorting an array of size $=n$?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">Mergesort performs $\\mathrm{O}($ nlogn $)$ swaps in worst case<br/></span>",
                "<span style=\"display: inline;\">Bubblesort performs $\\mathrm{O}\\left(\\mathrm{n}^2\\right)$ swaps in worst case<br/></span>",
                "<span style=\"display: inline;\">Selection sort performs $O(n)$ swaps in worst case<br/></span>",
                "<span style=\"display: inline;\">Counting sort performs $\\mathrm{O}(\\mathrm{n}+\\mathrm{k})$ swaps in worst case where k is the maximum element in the array</span>"
            ],
            "answer": "B",
            "solution": "<div class=\"solution-content\"><a name=\"484000\"></a><div itemprop=\"text\"><p><strong>Ans : B,C</strong></p><p>Common mistake that we consider a time complexity but here ask swap </p><p>Option A is wrong because in merge sort number of swap not define </p><p>Option B is true in worst case require n^2 swap (array sorted in decreasing order)</p><p>Option C is true because selection sort is only sorting algo which has lower swap require n</p><p>OPtion D is wrong not comparion base </p><p> </p><p>Correct me if i am wrong 😅</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/483908/go-classes-dpp-algorithms-sorting\" target=\"_blank\">GATE Overflow #483908</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>For an array consisting of only a small number of unique elements, i.e., the array size can be very large but the range is limited to a very short constant, say $10$.</p><p>It means array can have numbers from $0$ to $10$ only<br/><br/>Which of the following sorting algorithm will outform the rests in this case</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">Mergesort<br/></span>",
                "<span style=\"display: inline;\">Quicksort<br/></span>",
                "<span style=\"display: inline;\">Bubblesort<br/></span>",
                "<span style=\"display: inline;\">Counting sort</span>"
            ],
            "answer": "D",
            "solution": "<div class=\"solution-content\"><a name=\"484041\"></a><div itemprop=\"text\">again counting sort is for minmum time so answer is D</div><br><br><small>Source: <a href=\"https://gateoverflow.in/483904/go-classes-dpp-algorithms-sorting\" target=\"_blank\">GATE Overflow #483904</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>To determine which of your Facebook friends were early adopters, you decide to sort them by their Facebook account ids, which are $64$-bit integers. (Recall that you are super popular, so you have very many Facebook friends.)</p><p>Which of the following algorithms will outperform the rest in this case</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">Insertion Sort<br/></span>",
                "<span style=\"display: inline;\">Merge Sort<br/></span>",
                "<span style=\"display: inline;\">Radix Sort<br/></span>",
                "<span style=\"display: inline;\">Counting Sort</span>"
            ],
            "answer": "C",
            "solution": "<div class=\"solution-content\"><a name=\"484040\"></a><div itemprop=\"text\">since your id range are within 6 digit which quite high so you can't use the counting sort which is not feasible, so we will use radix sort O(d⋅(n+b)) so answer is C</div><br><br><small>Source: <a href=\"https://gateoverflow.in/483902/go-classes-dpp-algorithms-radix-sort\" target=\"_blank\">GATE Overflow #483902</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>You are tasked with sorting the purchase history of $1,000,000$ e-commerce transactions on a small IoT device with only $8$ KB of free memory. The transaction amounts are integers in the range $[1,1000]$.<br/>Which sorting algorithm would be the most efficient under these constraints?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">Insertion Sort<br/></span>",
                "<span style=\"display: inline;\">Merge Sort<br/></span>",
                "<span style=\"display: inline;\">Heap Sort<br/></span>",
                "<span style=\"display: inline;\">Counting Sort</span>"
            ],
            "answer": "D",
            "solution": "<div class=\"solution-content\"><a name=\"497287\"></a><div itemprop=\"text\"><h4 data-end=\"499\" data-start=\"478\"><strong data-end=\"499\" data-start=\"483\">C. Heap Sort</strong></h4><ul><li><h4 data-end=\"499\" data-start=\"478\">Time: <strong data-end=\"522\" data-start=\"508\">O(n log n)</strong> — good.</h4></li><li><h4 data-end=\"499\" data-start=\"478\">Memory: in-place (requires O(1) extra).</h4></li><li><h4 data-end=\"499\" data-start=\"478\">But since range is <strong data-end=\"614\" data-start=\"600\">very small</strong> (1–1000), we can do much better than O(n log n). <br/><br/><br/> </h4></li></ul><div><h4 data-end=\"698\" data-start=\"673\"><strong data-end=\"698\" data-start=\"678\">D. Counting Sort</strong></h4><ul data-end=\"918\" data-start=\"699\"><li data-end=\"757\" data-start=\"699\"><p data-end=\"757\" data-start=\"701\">Time: <strong data-end=\"719\" data-start=\"707\">O(n + k)</strong> = O(1,000,000 + 1,000) ≈ <strong data-end=\"753\" data-start=\"745\">O(n)</strong> </p></li><li data-end=\"875\" data-start=\"758\"><p data-end=\"875\" data-start=\"760\">Space: <strong data-end=\"775\" data-start=\"767\">O(k)</strong> = 1000 integers<br data-end=\"794\" data-start=\"791\"/>→ 1000 × 4 bytes = 4000 bytes ≈ <strong data-end=\"836\" data-start=\"828\">4 KB</strong>, which easily fits within <strong data-end=\"871\" data-start=\"863\">8 KB</strong> </p></li><li data-end=\"918\" data-start=\"876\"><p data-end=\"918\" data-start=\"878\">Perfect for small range of integer keys.<br/> </p></li></ul><div> </div></div><div><hr/><p>Final Answer: Option D) Counting Sort</p></div></div><br><br><small>Source: <a href=\"https://gateoverflow.in/483899/go-classes-dpp-algorithms-sorting\" target=\"_blank\">GATE Overflow #483899</a></small></div>"
        },
        {
            "marks": 2,
            "neg": 0,
            "type": "MSQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider the following statements about sorting algorithms:<br/><br/>S1: There exists an input of size $n$ where standard 2 way quick Sort runs asymptotically faster than Merge Sort.</p><p>S2: There exists an input of size n for which Merge Sort runs in $\\Theta(\\mathrm{n} \\cdot \\sqrt{n})$ time.<br/><br/>S3: Quick Sort is in-place but unstable, whereas Merge Sort is stable but not in-place in its standard form.</p><p>S4: Insertion Sort is asymptotically faster than Merge Sort when the input is nearly sorted.</p><p>Which of the above statement(s) is/are correct?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">S1, S3, and S4 only<br/></span>",
                "<span style=\"display: inline;\">S1 and S3 only<br/></span>",
                "<span style=\"display: inline;\">S3 and S4 only<br/></span>",
                "<span style=\"display: inline;\">S1, S2, and S3 only</span>"
            ],
            "answer": [
                "A"
            ],
            "solution": "<div class=\"solution-content\"><a name=\"483377\"></a><div itemprop=\"text\"><p><strong>S1: false</strong></p><p>Quick Sort runs in $O(nlogn)$ in the best case, while mergesort runs in $O(nlogn)$ in the worst case. That's why on some inputs they may be asymptotatically equal but quicksort can't be asymptotically faster than mergesort regardless of the input</p><p><strong>S2: false</strong><br/><br/>Mergesort: $\\theta(n \\log n)$ in worst case<br/>But $\\Theta(\\mathrm{n} \\cdot \\sqrt{n})$ is asymptotatically slower than $\\Theta(\\mathrm{n} \\cdot \\operatorname{logn})$<br/><br/>That's why it's false<br/><br/><strong>S3: True</strong><br/><br/>Quicksort is place but not stable, while mergesort is stable but not in place<br/><br/><strong>S4: True</strong> on nearly sorted arrays, insertion sort takes O(n) time in the worst case, whereas mergesort takes $O(n \\operatorname{logn})$ irrespective of the input. <strong>Hence it's true</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/483376/go-classes-dpp-algorithms-sorting\" target=\"_blank\">GATE Overflow #483376</a></small></div>"
        },
        {
            "marks": 2,
            "neg": 0,
            "type": "MSQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider the following statements:<br/><br/>S1: There exists an array of size $n$ such that optimized Bubblesort outperforms mergesort on this array</p><p>S2: Consider a modification of insertion sort: while finding the correct position of the current element in the previously sorted array, you apply binary search instead of linear search.<br/>This algorithm takes $\\mathrm{O}(n \\log n)$ time in the worst case, where O represents big-oh<br/><br/>S3: $\\log (n!)=o(n \\log n)$ where o represents small-oh<br/><br/>Which of the following statements is/are correct?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">S1 is true<br/></span>",
                "<span style=\"display: inline;\">S2 is true and S1,S3 are false<br/></span>",
                "<span style=\"display: inline;\">S1,S3 are true and S2 Is false<br/></span>",
                "<span style=\"display: inline;\">S1,S2 are true and S3 is false</span>"
            ],
            "answer": [
                "A"
            ],
            "solution": "<div class=\"solution-content\"><a name=\"483375\"></a><div itemprop=\"text\"><ul><li><strong>S1 - True. </strong>For example, an already-sorted array makes optimised Bubble Sort run in $O(n)$ (early-exit), while Merge Sort still takes $\\Theta(n \\operatorname{logn})$. So bubble can outperform merge on some inputs.<br/> </li><li>S2 -<strong> False</strong>. Binary search reduces comparisons to $O(nlogn)$, but shifting elements still costs $\\Theta\\left(n^2\\right)$ time in the worst case.<br/> </li><li><strong>S3 – False</strong>. By Stirling's approximation $\\log (n!)=\\Theta(n \\log n)$, so it is not o(nlogn).</li></ul></div><br><br><small>Source: <a href=\"https://gateoverflow.in/483374/go-classes-dpp-algorithms-sorting\" target=\"_blank\">GATE Overflow #483374</a></small></div>"
        },
        {
            "marks": 2,
            "neg": 0,
            "type": "MSQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider An array of $n$ Comparable objects that is sorted except for $k$ randomly located pairs of adjacent elements that have been swapped (each element is part of at most one pair).</p><p>You want to sort this array.<br/>Which of the following statements is/are correct regarding the tightest upper bound of doing this task?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">Optimized Bubblesort can sort this array in O(n) time in worst case<br/></span>",
                "<span style=\"display: inline;\">Optimized Bubblesort can sort this array in $\\mathrm{O}\\left(\\mathrm{n}^2\\right)$ time in worst case<br/></span>",
                "<span style=\"display: inline;\">Insertion sort can sort this array in $O(n)$ time in worst case<br/></span>",
                "<span style=\"display: inline;\">Insertions sort can sort this array in $\\mathrm{O}\\left(\\mathrm{n}^2\\right)$ time in worst case</span>"
            ],
            "answer": [
                "A"
            ],
            "solution": "<div class=\"solution-content\"><a name=\"483460\"></a><div itemprop=\"text\"><p>\\[<br/>\\boxed{\\textsf{Optimized Bubble Sort}}<br/>\\]</p><p><br/>$<br/>\\textsf{First pass will do: } n-1 \\textsf{ comparisons and } k \\textsf{ swaps (one per inverted adjacent pair).}<br/>$</p><p>$\\textsf{Second pass will do : }n-1 \\text{ comparisons and } 0 \\textsf{ swaps and then terminate early.}$<br/> </p><p>$<br/>\\textsf{So : }T = O(n-1+k+n-1) = O(n + k) = O(n) \\textsf{ (because here k } \\textsf{will be }\\le n/2 \\text{).}<br/>$<br/><br/> </p><hr/><p>\\[<br/>\\boxed{\\textsf{Insertion Sort}}<br/>\\]</p><p>$<br/>\\textsf{Total inversions will be I} = k.<br/>$</p><p>$<br/>\\textsf{Insertion Sort is } T = O(n+I) = O(n+k).<br/>$</p><p>$<br/>\\textsf{So}, \\; T = O(n).<br/>$</p><hr/><p> </p><p>$\\boxed{\\textsf{Correct options: (A) and (C)}}$<br/> </p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/483372/go-classes-dpp-algorithms-sorting\" target=\"_blank\">GATE Overflow #483372</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\">Suppose you apply Bubble Sort to sort the following array in ascending order<br/> <br/> $$<br/> 50,32,35,46,3,4,1,8<br/> $$<br/> <br/> The element at the $2^{\\text {nd }}$ last position after 3 passes will be ____________ .</div></span>",
            "image": "",
            "options": [],
            "answer": "46",
            "solution": "<div class=\"solution-content\"><a name=\"483371\"></a><div itemprop=\"text\"><ul><li>After pass 1: [32, 35, 46, 3, 4, 1, 8, 50]<br/> </li><li>After pass 2: [32, 35, 3, 4, 1, 8, 46, 50]<br/> </li><li>After pass 3: [32, 3, 4, 1, 8, 35, 46, 50]</li></ul><p>Second last element = 46 .</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/483370/go-classes-dpp-algorithms-bubblesort\" target=\"_blank\">GATE Overflow #483370</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>You are running a library catalogue. You know that the books in your collection are almost in sorted ascending order by title, with the exception of one book which is in the wrong place. You want the catalogue to be completely sorted in ascending order.</p><p>Which of the following algorithms is best suited in this setting?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">Insertion Sort<br/></span>",
                "<span style=\"display: inline;\">Merge Sort<br/></span>",
                "<span style=\"display: inline;\">Bubblesort<br/></span>",
                "<span style=\"display: inline;\">Quicksort</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"483378\"></a><div itemprop=\"text\">insertion sort</div><br><br><small>Source: <a href=\"https://gateoverflow.in/483367/go-classes-dpp-algorithms-sorting\" target=\"_blank\">GATE Overflow #483367</a></small></div>"
        }
    ]
});

registerTest({
    "name": "DPP 16 - Algorithms (Sorting Algorithms - Part 6)",
    "testLabel": "DPP 16",
    "testType": "DPP",
    "bracket": "Sorting Algorithms - Part 6",
    "subject": "algo",
    "series": "cse-dpp-2027",
    "date": "Nov 03, 2026",
    "duration": "18 Min",
    "totalMarks": 8,
    "topicsCovered": "Sorting Algorithms (Practice Set 6)",
    "questions": [
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\">A machine needs a maximum of $200$ seconds to sort $1000$ elements by Quick sort. The maximum time needed (in seconds) to sort $200$ elements will be approximately ________.</div></span>",
            "image": "",
            "options": [],
            "answer": "8",
            "solution": "<div class=\"solution-content\"><a name=\"483142\"></a><div itemprop=\"text\"><p> </p><p>The problem states that a machine takes a maximum of 200 seconds to sort 1000 elements using Quicksort. We need to find the maximum time to sort 200 elements.</p><p>The worst-case time complexity of Quicksort is $O(n^2)$, where $n$ is the number of elements to be sorted. This is because in the worst-case scenario (e.g., an already sorted array with the last element as the pivot), the partitions are highly imbalanced, leading to a quadratic time complexity.</p><p>The maximum time $T_{max}(n)$ to sort $n$ elements can be modeled as a function proportional to $n^2$:<br/>$$T_{max}(n) = k \\cdot n^2$$<br/>where $k$ is a constant of proportionality.</p><p>We are given the following information:<br/>$T_{max}(1000) = 200$ seconds</p><p>We can use this information to solve for the constant $k$:<br/>$$200 = k \\cdot (1000)^2$$<br/>$$200 = k \\cdot 1,000,000$$<br/>$$k = \\frac{200}{1,000,000} = \\frac{1}{5000}$$</p><p>Now, we can use this value of $k$ to find the maximum time to sort 200 elements:<br/>$$T_{max}(200) = k \\cdot (200)^2$$<br/>$$T_{max}(200) = \\frac{1}{5000} \\cdot (200)^2$$<br/>$$T_{max}(200) = \\frac{1}{5000} \\cdot 40,000$$<br/>$$T_{max}(200) = \\frac{40,000}{5000}$$<br/>$$T_{max}(200) = 8$$</p><p><strong>Hence, Answer is 8 seconds.</strong><br/> </p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/483120/go-classes-dpp-algorithms-quicksort\" target=\"_blank\">GATE Overflow #483120</a></small></div>"
        },
        {
            "marks": 2,
            "neg": 0,
            "type": "MSQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Which of the following statements is/are not correct?<br/>(Here $o, \\omega$ represents small-oh and small-omega, respectively.)</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">The average-case time complexity of quicksort $=\\omega$ (the average case time complexity of mergesort)<br/></span>",
                "<span style=\"display: inline;\">The best-case time complexity of quicksort = o(the best-case time complexity of mergesort)<br/></span>",
                "<span style=\"display: inline;\">The best-case behaviour occurs for quicksort when the partition splits the array of size $n$ into $n / 2:(n / 2)-1$<br/></span>",
                "<span style=\"display: inline;\">Quicksort is a stable algorithm</span>"
            ],
            "answer": [
                "A"
            ],
            "solution": "<div class=\"solution-content\"><a name=\"483119\"></a><div itemprop=\"text\"><p>The average and best-case time complexity of both algorithms is $\\Theta$ (nlogn)</p><p><strong>Quicksort is not stable</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/483118/go-classes-dpp-algorithms-quicksort-mergesort\" target=\"_blank\">GATE Overflow #483118</a></small></div>"
        },
        {
            "marks": 2,
            "neg": 0,
            "type": "MSQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider the Merge Sort algorithm applied to an array of size $n$.<br/><br/>Suppose every time we divide the array, instead of splitting it exactly in half, the left subarray always has $\\left\\lceil\\frac{9 n}{10}\\right\\rceil$ elements and the right subarray has the rest.</p><p>Which of the following statements is/are correct regarding this algorithm?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">The recurrence relation for this algorithm is: $\\mathrm{T}(\\mathrm{n})=\\mathrm{T}\\left(\\frac{9 n}{10}\\right)+\\mathrm{T}\\left(\\frac{n}{10}\\right)+\\mathrm{O}(\\mathrm{n})$<br/></span>",
                "<span style=\"display: inline;\">The worst-case time complexity of this algorithm is $O(n \\log n)$ where $O$ represents big-oh<br/></span>",
                "<span style=\"display: inline;\">The worst-case time complexity of this algorithm is $\\theta($ nlogn $)$ where $\\theta$ represents big-theta<br/></span>",
                "<span style=\"display: inline;\">The worst-case time complexity of this algorithm is $\\theta\\left(n^2\\right)$ where $\\theta$ represents big-theta</span>"
            ],
            "answer": [
                "A",
                "B",
                "C"
            ],
            "solution": "<div class=\"solution-content\"><a name=\"482979\"></a><div itemprop=\"text\">Answer is A,B,C</div><br><br><small>Source: <a href=\"https://gateoverflow.in/482831/go-classes-dpp-algorithms-mergesort\" target=\"_blank\">GATE Overflow #482831</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\">If one uses a straight two-way merge sort algorithm to sort the following elements in ascending order:<br/> <br/> $$<br/> 2,1,4,3,5,6,8,7,9,10,12,11,14,13,16,15<br/> $$<br/> <br/> The minimum number of passes after which the whole array will be sorted in ascending order is ________</div></span>",
            "image": "",
            "options": [],
            "answer": "4",
            "solution": "<div class=\"solution-content\"><a name=\"482980\"></a><div itemprop=\"text\">no. of passes means i think we will be doing iterative merge sort here... so following bottom up approach.<br/> the structure will be complete binary tree with leaf nodes haivng N elements for array of size N<br/> no. of passes will be height of binary tree... i.e log(n)<br/> <br/> here size of array N = log(16) = 4 <br/> so 4 passes</div><br><br><small>Source: <a href=\"https://gateoverflow.in/482829/go-classes-dpp-algorithms-mergesort\" target=\"_blank\">GATE Overflow #482829</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\">Suppose you apply straight mergesort on the given sequence: $7$ $11$ $14$ $6$ $9$ $4$ $3$ $12$.<br/> <br/> The element at the $2^{\\text {nd }}$ position after the second phase will be _________</div></span>",
            "image": "",
            "options": [],
            "answer": "7",
            "solution": "<div class=\"solution-content\"><a name=\"483272\"></a><div itemprop=\"text\">Answer is 7</div><br><br><small>Source: <a href=\"https://gateoverflow.in/482826/go-classes-dpp-algorithms-mergesort\" target=\"_blank\">GATE Overflow #482826</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\">Assume that a mergesort algorithm in the worst case takes $15$ seconds for an input size of $128$. The maximum input size of a problem that can be solved in $4$ minutes using mergesort is _______</div></span>",
            "image": "",
            "options": [],
            "answer": "1375",
            "solution": "<div class=\"solution-content\"><a name=\"496548\"></a><div itemprop=\"text\"><p>Answer: 1375<strong>&lt;</strong> max input size <strong>&lt;</strong>1376</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/482823/go-classes-dpp-algorithms-mergesort\" target=\"_blank\">GATE Overflow #482823</a></small></div>"
        }
    ]
});

registerTest({
    "name": "DPP 17 - Algorithms (Greedy Algorithms & Dynamic Programming - Part 1)",
    "testLabel": "DPP 17",
    "testType": "DPP",
    "bracket": "Greedy Algorithms & Dynamic Programming - Part 1",
    "subject": "algo",
    "series": "cse-dpp-2027",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 10,
    "topicsCovered": "Greedy Algorithms & Dynamic Programming (Practice Set 1)",
    "questions": [
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"49\" data-start=\"0\">Suppose Huffman coding is implemented as follows.</p><p data-end=\"144\" data-start=\"51\">Initially, the $n$ symbols are stored in a min priority queue according to their frequencies.</p><p data-end=\"180\" data-start=\"146\">The algorithm repeatedly performs:</p><pre class=\"prettyprint linenums lang-c_cpp\" data-linenums=\"true\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"4\" data-rawcode=\"while more than one node remains in Q: x = ExtractMin(Q) y = ExtractMin(Q) create a new node z z.frequency = x.frequency + y.frequency Insert(Q, z)\">while more than one node remains in Q: x = ExtractMin(Q) y = ExtractMin(Q) create a new node z z.frequency = x.frequency + y.frequency Insert(Q, z)</pre><p data-end=\"507\" data-start=\"442\">Assume the priority queue is implemented using a binary min heap.</p><p data-end=\"578\" data-start=\"509\">What is the asymptotic running time of the Huffman tree construction?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$O(n)$<br/></span>",
                "<span style=\"display: inline;\">$O(n^2)$<br/></span>",
                "<span style=\"display: inline;\">$O(n^2 \\log n)$<br/></span>",
                "<span style=\"display: inline;\">$O(n \\log n)$</span>"
            ],
            "answer": "D",
            "solution": "<div class=\"solution-content\"><a name=\"546397\"></a><div itemprop=\"text\"><p data-end=\"812\" data-start=\"658\">There are initially $n$ nodes in the heap. In each iteration, two nodes are removed and one new node is inserted, so the number of nodes decreases by $1$.</p><p data-end=\"855\" data-start=\"814\">Therefore, the loop executes $n-1$ times.</p><p data-end=\"879\" data-start=\"857\">For a binary min heap:</p><p data-end=\"926\" data-start=\"881\">$\\texttt{ExtractMin}$ takes $O(\\log n)$ time.</p><p data-end=\"969\" data-start=\"928\">$\\texttt{Insert}$ takes $O(\\log n)$ time.</p><p data-end=\"1110\" data-start=\"971\">Each iteration performs two $\\texttt{ExtractMin}$ operations and one $\\texttt{Insert}$ operation, so the time per iteration is $O(\\log n)$.</p><p data-end=\"1171\" data-start=\"1112\">Since there are $n-1$ iterations, the total running time is $O(n \\log n)$.</p><p data-end=\"1222\" data-start=\"1189\">Answer : $\\boxed{O(n \\log n)}$</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/546395/go-classes-dpp-gate-cs-da-algorithms-time-complexity\" target=\"_blank\">GATE Overflow #546395</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"14831\" data-start=\"14817\"><em>True or False:</em></p><p data-end=\"14975\" data-start=\"14833\">In every dynamic-programming solution, the asymptotic space requirement must be at least as large as the total number of distinct subproblems.</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">True<br/></span>",
                "<span style=\"display: inline;\">False</span>"
            ],
            "answer": "0",
            "solution": "<div class=\"solution-content\"><a name=\"545375\"></a><div itemprop=\"text\"><p data-end=\"15182\" data-start=\"15050\">Dynamic programming may have many distinct subproblems, but we do not necessarily need to keep <strong data-end=\"15181\" data-start=\"15145\">all their answers simultaneously</strong>.</p><p data-end=\"15251\" data-start=\"15184\">Consider Edit Distance for two strings of length approximately $n$.</p><p data-end=\"15281\" data-start=\"15253\">The usual DP table contains $n\\times n$ states.</p><p data-end=\"15346\" data-start=\"15305\">So the number of distinct subproblems is $\\Theta(n^2)$</p><p data-end=\"15458\" data-start=\"15363\">However, when computing one row of the table, we often need only the immediately preceding row.</p><p data-end=\"15518\" data-start=\"15460\">Therefore, instead of storing the full table, we can keep:</p><ul data-end=\"15548\" data-start=\"15520\"><li data-end=\"15534\" data-section-id=\"1tf4fv7\" data-start=\"15520\">Previous row</li><li data-end=\"15548\" data-section-id=\"10cgyej\" data-start=\"15535\">Current row</li></ul><p data-end=\"15563\" data-start=\"15550\">Each row has $\\Theta(n)$ entries.</p><p data-end=\"15634\" data-start=\"15588\">Thus, the space requirement can be reduced to $\\Theta(n)$ even though the number of subproblems remains $\\Theta(n^2)$</p><p data-end=\"15722\" data-start=\"15712\">$\\therefore \\text{Space} &lt; \\text{Number of subproblems}$ is entirely possible.</p><p data-end=\"15800\" data-start=\"15794\">Hence,</p><p data-end=\"15835\" data-start=\"15802\">$\\boxed{\\text{Answer: (B) False}}$</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/545374/go-classes-dpp-gate-cs-da-algorithms-dynamic-programming\" target=\"_blank\">GATE Overflow #545374</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"13377\" data-start=\"13363\"><em>True or False:</em></p><p data-end=\"13487\" data-start=\"13379\">The root of an optimal binary search tree must always contain the key having the highest search probability.</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">True<br/></span>",
                "<span style=\"display: inline;\">False</span>"
            ],
            "answer": "B",
            "solution": "<div class=\"solution-content\"><a name=\"545372\"></a><div itemprop=\"text\"><p data-end=\"13672\" data-start=\"13562\">Choosing the most probable key as the root may appear natural, but the complete structure of the tree matters.</p><p data-end=\"13702\" data-start=\"13674\">Consider three ordered keys:</p><p data-end=\"13711\" data-start=\"13704\">$A&lt;B&lt;C$</p><p data-end=\"13732\" data-start=\"13713\">with probabilities:</p><p data-end=\"13744\" data-start=\"13734\">$p(A)=0.4$</p><p data-end=\"13756\" data-start=\"13746\">$p(B)=0.3$</p><p data-end=\"13768\" data-start=\"13758\">$p(C)=0.3$</p><p data-end=\"13809\" data-start=\"13770\">The highest probability belongs to $A$.</p><p data-end=\"13832\" data-section-id=\"14ru9fe\" data-start=\"13811\"><br/>Make $A$ the root</p><p data-end=\"13882\" data-start=\"13834\">A possible optimal arrangement with root $A$ is $A$</p><p data-end=\"13932\" data-start=\"13889\">with $B$ and then $C$ in its right subtree.</p><p data-end=\"13955\" data-start=\"13934\">Expected comparisons:</p><p data-end=\"13985\" data-start=\"13957\">$(0.4)(1)+(0.3)(2)+(0.3)(3)$</p><p data-end=\"14001\" data-start=\"13987\">$=0.4+0.6+0.9=1.9$</p><p data-end=\"14032\" data-section-id=\"wb11rt\" data-start=\"14011\"><br/>Make $B$ the root</p><p data-end=\"14085\" data-start=\"14034\">Then $A$ is the left child and $C$ the right child.</p><p data-end=\"14108\" data-start=\"14087\">Expected comparisons:</p><p data-end=\"14138\" data-start=\"14110\">$(0.3)(1)+(0.4)(2)+(0.3)(2)$</p><p data-end=\"14154\" data-start=\"14140\">$=0.3+0.8+0.6=1.7$</p><p data-end=\"14169\" data-start=\"14164\">Thus,</p><p data-end=\"14180\" data-start=\"14171\">$1.7&lt;1.9$</p><p data-end=\"14272\" data-start=\"14182\">So the optimal root is $B$, even though $A$ has the highest individual search probability.</p><p data-end=\"14284\" data-start=\"14274\"> </p><p data-end=\"14319\" data-start=\"14286\">$\\boxed{\\therefore \\text{Answer: (B) False}}$</p><p data-end=\"14453\" data-start=\"14321\">The optimal root depends on the <strong data-end=\"14402\" data-start=\"14353\">total expected search cost of the entire tree</strong>, not simply on the largest individual probability.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/545371/go-classes-dpp-gate-cs-da-algorithms-dynamic-programming\" target=\"_blank\">GATE Overflow #545371</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"12119\" data-start=\"12084\">An instance of Subset Sum contains:</p><p data-end=\"12246\" data-start=\"12176\">What is the running time of the standard dynamic-programming solution?</p><p><strong>Given Details:</strong></p><ul><li>$n$ positive integers</li><li>a positive target value $m$</li></ul></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\Theta(m+n)$</span>",
                "<span style=\"display: inline;\">$\\Theta(m)$</span>",
                "<span style=\"display: inline;\">$\\Theta(n)$</span>",
                "<span style=\"display: inline;\">$\\Theta(mn)$</span>"
            ],
            "answer": "D",
            "solution": "<div class=\"solution-content\"><a name=\"545369\"></a><div itemprop=\"text\"><p data-end=\"12432\" data-start=\"12376\">The standard DP maintains information for possible sums:</p><p data-end=\"12450\" data-start=\"12434\">$0,1,2,\\ldots,m$</p><p data-end=\"12538\" data-start=\"12452\">For every one of the $n$ input values, we may need to process up to $m$ possible sums.</p><p data-end=\"12587\" data-start=\"12540\">Therefore, the DP table contains $\\approx n\\times m$ states or state updates.</p><p data-end=\"12633\" data-start=\"12628\">Thus,</p><p data-end=\"12654\" data-start=\"12635\">$T(n,m)=\\Theta(nm)$</p><p data-end=\"12662\" data-start=\"12656\"><br/>$\\boxed{\\text{Answer: D}}$</p><p data-end=\"12757\" data-start=\"12692\"><br/>A subtle point is that this is called <strong data-end=\"12756\" data-start=\"12730\">pseudo-polynomial time</strong>.</p><p data-end=\"12795\" data-start=\"12759\">The numeric value $m$ requires only $\\Theta(\\log m)$ bits in the input.</p><p data-end=\"12962\" data-start=\"12835\">So $O(nm)$ is polynomial in the <strong data-end=\"12883\" data-start=\"12867\">value of $m$</strong>, but not necessarily polynomial in the number of bits needed to represent $m$.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/545361/go-classes-dpp-gate-cs-da-algorithms-dynamic-programming\" target=\"_blank\">GATE Overflow #545361</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><section data-testid=\"conversation-turn-19\" data-turn=\"user\" data-turn-id=\"8ff37863-f3f0-44ab-b473-7e0f5b297106\" data-turn-id-container=\"8ff37863-f3f0-44ab-b473-7e0f5b297106\" dir=\"auto\">There is an unlimited supply of three item types:</section><section data-testid=\"conversation-turn-20\" data-turn=\"assistant\" data-turn-id=\"request-WEB:fa02ce3a-1cf7-4c29-8bcc-6a4ed8bdd45b-9\" data-turn-id-container=\"request-WEB:fa02ce3a-1cf7-4c29-8bcc-6a4ed8bdd45b-9\" dir=\"auto\"><p data-end=\"120\" data-is-last-node=\"\" data-is-only-node=\"\" data-start=\"0\">$$\\begin{array}{|c|cc|}<br/>\\hline<br/>\\text{Item} &amp; \\text{Size} &amp; \\text{Value} \\\\<br/>\\hline<br/>A &amp; 1 &amp; 2 \\\\<br/>B &amp; 2 &amp; 6 \\\\<br/>C &amp; 3 &amp; 9 \\\\<br/>\\hline<br/>\\end{array}$$</p><p data-end=\"10839\" data-start=\"10814\">The knapsack capacity is $5$.</p><p data-end=\"10889\" data-start=\"10846\">What is the maximum total value obtainable?</p></section></div></span>",
            "image": "",
            "options": [],
            "answer": "15",
            "solution": "<div class=\"solution-content\"><a name=\"545360\"></a><div itemprop=\"text\"><p data-end=\"11031\" data-start=\"10951\">Because items may be used repeatedly, this is an <strong data-end=\"11022\" data-start=\"11000\">unbounded knapsack</strong> problem.</p><p data-end=\"11037\" data-start=\"11033\">Let, </p><p data-end=\"11088\" data-start=\"11039\">$DP[w]=$ maximum value possible with capacity $w$</p><p data-end=\"11108\" data-start=\"11090\">For each capacity:</p><p data-end=\"11148\" data-start=\"11110\">$DP[w]=\\max_i\\{value_i+DP[w-size_i]\\}$</p><p data-end=\"11164\" data-start=\"11150\">Now calculate.</p><p data-end=\"11182\" data-section-id=\"rneslf\" data-start=\"11166\"><br/><strong>Capacity $\\mathbf{1}$</strong></p><p data-end=\"11196\" data-start=\"11184\">Only A fits:</p><p data-end=\"11207\" data-start=\"11198\">$DP[1]=2$</p><p data-end=\"11225\" data-section-id=\"rneskg\" data-start=\"11209\"><br/><strong>Capacity $\\mathbf{2}$</strong></p><p data-end=\"11235\" data-start=\"11227\">Options:</p><p data-end=\"11244\" data-start=\"11237\">$A+A=4$</p><p data-end=\"11251\" data-start=\"11246\">$B=6$</p><p data-end=\"11263\" data-start=\"11253\">$\\therefore DP[2]=6$</p><p data-end=\"11292\" data-section-id=\"rnesjl\" data-start=\"11276\"><br/><strong>Capacity $\\mathbf{3}$</strong></p><p data-end=\"11310\" data-start=\"11294\">Options include:</p><p data-end=\"11321\" data-start=\"11312\">$A+A+A=6$</p><p data-end=\"11330\" data-start=\"11323\">$A+B=8$</p><p data-end=\"11337\" data-start=\"11332\">$C=9$</p><p data-end=\"11349\" data-start=\"11339\">$\\therefore DP[3]=9$</p><p data-end=\"11378\" data-section-id=\"rnesiu\" data-start=\"11362\"><br/><strong>Capacity $\\mathbf{4}$</strong></p><p data-end=\"11392\" data-start=\"11380\">Best choice:</p><p data-end=\"11399\" data-start=\"11394\">$B+B$</p><p data-end=\"11407\" data-start=\"11401\">Value:</p><p data-end=\"11417\" data-start=\"11409\">$6+6=12$</p><p data-end=\"11429\" data-start=\"11419\">$\\therefore DP[4]=12$<br/> </p><p data-end=\"11459\" data-section-id=\"rneshz\" data-start=\"11443\"><strong>Capacity $\\mathbf{5}$</strong></p><p data-end=\"11499\" data-start=\"11461\">Possible optimal combinations include:</p><p data-end=\"11506\" data-start=\"11501\">$B+C$</p><p data-end=\"11515\" data-start=\"11508\">Weight:</p><p data-end=\"11524\" data-start=\"11517\">$2+3=5$</p><p data-end=\"11532\" data-start=\"11526\">Value:</p><p data-end=\"11542\" data-start=\"11534\">$6+9=15$</p><p data-end=\"11554\" data-start=\"11544\">$\\therefore DP[5]=15$</p><p data-end=\"11574\" data-start=\"11568\"> </p><p data-end=\"11588\" data-start=\"11576\"><strong>Answer : </strong>$\\boxed{15}$</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/545359/go-classes-dpp-gate-cs-da-algorithms-dynamic-programming\" target=\"_blank\">GATE Overflow #545359</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><section data-testid=\"conversation-turn-18\" data-turn=\"assistant\" data-turn-id=\"request-WEB:fa02ce3a-1cf7-4c29-8bcc-6a4ed8bdd45b-8\" data-turn-id-container=\"request-WEB:fa02ce3a-1cf7-4c29-8bcc-6a4ed8bdd45b-8\" dir=\"auto\"><p data-end=\"98\" data-start=\"0\">The following function $\\texttt{CalcEditDistance}$ computes the edit distance between two strings.</p><p data-end=\"117\" data-start=\"100\">For this problem:</p><p data-end=\"495\" data-start=\"333\">Let $D[X][Y]$ denote the minimum cost required to transform the first $X$ characters of $\\texttt{Str1}$ into the first $Y$ characters of $\\texttt{Str2}$.</p><p data-end=\"857\" data-start=\"823\">Consider the following pseudocode:</p><pre class=\"prettyprint linenums lang-c_cpp\" data-end=\"1564\" data-linenums=\"true\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"\" data-rawcode=\"CalcEditDistance(Str1, Str1Len, Str2, Str2Len): create array D[0 .. Str1Len][0 .. Str2Len] for X = 0 to Str1Len: D[X][0] = X for Y = 0 to Str2Len: D[0][Y] = Y for X = 1 to Str1Len: for Y = 1 to Str2Len: if Str1[X - 1] == Str2[Y - 1]: D[X][Y] = min( D[X - 1][Y - 1], D[X - 1][Y] + 1, D[X][Y - 1] + 1 ) else: D[X][Y] = min( D[X - 1][Y] + 1, D[X][Y - 1] + 1 ) return D[Str1Len][Str2Len]\" data-start=\"859\">CalcEditDistance(Str1, Str1Len, Str2, Str2Len): create array D[0 .. Str1Len][0 .. Str2Len] for X = 0 to Str1Len: D[X][0] = X for Y = 0 to Str2Len: D[0][Y] = Y for X = 1 to Str1Len: for Y = 1 to Str2Len: if Str1[X - 1] == Str2[Y - 1]: D[X][Y] = min(D[X - 1][Y - 1], D[X - 1][Y] + 1, D[X][Y - 1] + 1) else: D[X][Y] = min(D[X - 1][Y] + 1, D[X][Y - 1] + 1) return D[Str1Len][Str2Len] </pre><p data-end=\"1588\" data-start=\"1566\">Now consider the call:</p><pre class=\"prettyprint linenums lang-c_cpp\" data-end=\"1643\" data-linenums=\"true\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"\" data-rawcode='CalcEditDistance(\"peace\", 5, \"people\", 6)' data-start=\"1590\">CalcEditDistance(\"peace\", 5, \"people\", 6)</pre><p data-end=\"1684\" data-start=\"1645\">What value is returned by the function?</p></section></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">Inserting one character has cost $1$.</span>",
                "<span style=\"display: inline;\">Deleting one character has cost $1$.</span>",
                "<span style=\"display: inline;\">If two characters are equal, they may be matched with cost $0$.</span>",
                "<span style=\"display: inline;\">Direct character replacement is not used as a separate operation.</span>"
            ],
            "answer": "2",
            "solution": "<div class=\"solution-content\"><a name=\"545797\"></a><div itemprop=\"text\"><p data-end=\"101\" data-start=\"0\">The key idea is that <strong data-end=\"61\" data-start=\"26\">when replacement is not allowed</strong>, we can think of the transformation as:</p><ul data-end=\"207\" data-start=\"103\"><li data-end=\"158\" data-section-id=\"xii2r4\" data-start=\"103\">Delete characters from <code data-end=\"137\" data-start=\"128\">\"peace\"</code> that are not needed.</li><li data-end=\"207\" data-section-id=\"m7ruzb\" data-start=\"159\">Insert characters needed to obtain <code data-end=\"206\" data-start=\"196\">\"people\"</code>.</li><li data-end=\"207\" data-section-id=\"m7ruzb\" data-start=\"159\">A=\"peace\", B=\"people\"</li></ul><div>Because we need to transform from A to B, we will delete characters from A that are not common (not part of LCS) and insert characters that are extra in B.</div><div>Deleting cost from A = |A| - LCS(A,B)</div><div>Inserting cost in A = |B| - LCS(A,B)</div><div> </div><div>so,</div><p data-end=\"224\" data-start=\"209\">Edit Distance=∣A∣+∣B∣−2×LCS(A,B)​</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/545357/go-classes-dpp-gate-cs-da-algorithms-dynamic-programming\" target=\"_blank\">GATE Overflow #545357</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"7424\" data-start=\"7411\">For an array, $a[1],a[2],\\ldots,a[n]$ consider the proposed DP state:</p><p data-end=\"7580\" data-start=\"7484\">$LIS[i]=$ length of the longest increasing subsequence contained anywhere within $a[1\\ldots i]$.</p><p data-end=\"7653\" data-start=\"7582\">Using <strong data-end=\"7607\" data-start=\"7588\">only this state</strong>, can a correct recurrence for LIS be written?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">Yes<br/></span>",
                "<span style=\"display: inline;\">No</span>"
            ],
            "answer": "B",
            "solution": "<div class=\"solution-content\"><a name=\"545233\"></a><div itemprop=\"text\"><p data-end=\"7772\" data-start=\"7721\">The problem with this state is that it stores only, <strong data-end=\"7837\" data-start=\"7774\">the length of the best increasing subsequence in the prefix </strong>but does not tell us <strong data-end=\"7891\" data-start=\"7860\">where that subsequence ends</strong>.</p><p data-end=\"7902\" data-start=\"7894\">Suppose,</p><p data-end=\"7916\" data-start=\"7904\">$LIS[i-1]=k$</p><p data-end=\"8009\" data-start=\"7918\">When processing $a[i]$, we need to know whether $a[i]$ can extend the previous subsequence.</p><p data-end=\"8052\" data-start=\"8011\">For that, we need to know its last value.</p><p data-end=\"8109\" data-start=\"8054\">But the proposed state does not store that information.</p><p data-end=\"8153\" data-start=\"8111\">For eg, two prefixes could both have, </p><p data-end=\"8167\" data-start=\"8155\">$LIS[i-1]=3$</p><p data-end=\"8225\" data-start=\"8169\">but their best subsequences may end in different values.</p><p data-end=\"8269\" data-start=\"8227\">$a[i]$ might extend one but not the other.</p><p data-end=\"8304\" data-start=\"8271\">A more useful classical state is,</p><p data-end=\"8380\" data-start=\"8306\">$DP[i]=$ length of the longest increasing subsequence <strong data-end=\"8380\" data-start=\"8360\">ending at $a[i]$</strong></p><p data-end=\"8387\" data-start=\"8382\">Then,</p><p data-end=\"8428\" data-start=\"8389\">$DP[i]=1+\\max{DP[j]:j&lt;i,\\ a[j]&lt;a[i]}$</p><p data-end=\"8471\" data-start=\"8430\">Thus, the proposed state is insufficient.</p><p data-end=\"8483\" data-start=\"8473\">So, </p><p data-end=\"8483\" data-start=\"8473\"><strong>Answer: B</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/545232/go-classes-dpp-gate-cs-da-algorithms-longest-increasing-subsequence\" target=\"_blank\">GATE Overflow #545232</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"53\" data-start=\"0\">A $15$ kg knapsack is given with the following items:</p><p data-end=\"193\" data-start=\"55\">$$\\begin{array}{|c|cc|}<br/>\\hline<br/>\\text{Item} &amp; \\text{Weight} &amp; \\text{Value} \\\\<br/>\\hline<br/>A &amp; 2 &amp; 7 \\\\<br/>B &amp; 3 &amp; 10 \\\\<br/>C &amp; 5 &amp; 18 \\\\<br/>D &amp; 6 &amp; 20 \\\\<br/>\\hline<br/>\\end{array}$$</p><p data-end=\"234\" data-start=\"195\">Each item can be selected at most once.</p><p data-end=\"303\" data-is-last-node=\"\" data-is-only-node=\"\" data-start=\"236\">What is the maximum total value that can be placed in the knapsack?</p></div></span>",
            "image": "",
            "options": [],
            "answer": "48",
            "solution": "<div class=\"solution-content\"><a name=\"545417\"></a><div itemprop=\"text\">Selecting B,C and D. <br/> <br/> Total weights = 3+5+6= 14 &lt;15 works<br/> <br/> Profit = 10+18+20=48</div><br><br><small>Source: <a href=\"https://gateoverflow.in/545231/go-classes-dpp-gate-cs-da-algorithms-0-1-knapsack\" target=\"_blank\">GATE Overflow #545231</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"4755\" data-start=\"4732\">Consider the sequences:</p><p data-end=\"4776\" data-start=\"4757\">$X=\\{A,C,B,C,D,C\\}$</p><p data-end=\"4797\" data-start=\"4778\">$Y=\\{C,D,B,D,C,A\\}$</p><p data-end=\"4854\" data-start=\"4799\">What is the length of their longest common subsequence?</p></div></span>",
            "image": "",
            "options": [],
            "answer": "4",
            "solution": "<div class=\"solution-content\"><a name=\"545230\"></a><div itemprop=\"text\"><p data-end=\"4919\" data-start=\"4915\">Let, $L[i][j]$ represent the LCS length between the first $i$ elements of $X$ and the first $j$ elements of $Y$.</p><p data-end=\"5049\" data-start=\"5031\">The recurrence is:</p><p data-end=\"5054\" data-start=\"5051\">If :</p><p data-end=\"5067\" data-start=\"5056\">$X[i]=Y[j]$</p><p data-end=\"5074\" data-start=\"5069\">then :</p><p data-end=\"5099\" data-start=\"5076\">$L[i][j]=L[i-1][j-1]+1$</p><p data-end=\"5111\" data-start=\"5101\">Otherwise :</p><p data-end=\"5148\" data-start=\"5113\">$L[i][j]=\\max(L[i-1][j],L[i][j-1])$</p><p data-end=\"5221\" data-start=\"5150\"><br/>Applying this recurrence to the two sequences gives the final DP entry:</p><p data-end=\"5234\" data-start=\"5223\">$L[6][6]=4$</p><p data-end=\"5291\" data-start=\"5236\">We can also exhibit a common subsequence of length $4$.</p><p data-end=\"5305\" data-start=\"5293\">For eg:</p><p data-end=\"5316\" data-start=\"5307\">$C,B,D,C$</p><p data-end=\"5346\" data-start=\"5318\">appears in $X$ in the order: $C,B,D,C$</p><p data-end=\"5383\" data-start=\"5359\">and in $Y$ in the order: $C,B,D,C$</p><p data-end=\"5435\" data-start=\"5396\">Therefore, an LCS of length $4$ exists.</p><p data-end=\"5523\" data-start=\"5437\"><br/><strong>Answer : </strong>$\\boxed{4}$</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/545229/go-classes-dpp-gate-cs-da-algorithms-longest-common-subsequence\" target=\"_blank\">GATE Overflow #545229</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"3267\" data-start=\"3219\">Consider four matrices whose dimension array is:</p><p data-end=\"3284\" data-start=\"3269\">$p=[5,2,2,4,6]$</p><p data-end=\"3291\" data-start=\"3286\">Thus:</p><p data-end=\"3307\" data-start=\"3293\">$A_1:5\\times2$</p><p data-end=\"3323\" data-start=\"3309\">$A_2:2\\times2$</p><p data-end=\"3339\" data-start=\"3325\">$A_3:2\\times4$</p><p data-end=\"3355\" data-start=\"3341\">$A_4:4\\times6$</p><p data-end=\"3473\" data-start=\"3357\">Using optimal matrix-chain multiplication, what is the minimum number of scalar multiplications required to compute:</p><p data-end=\"3489\" data-start=\"3475\">$A_1A_2A_3A_4$</p></div></span>",
            "image": "",
            "options": [],
            "answer": "124",
            "solution": "<div class=\"solution-content\"><a name=\"545228\"></a><div itemprop=\"text\"><p data-end=\"3630\" data-start=\"3552\">Let $c[i,j]$ denote the minimum number of scalar multiplications required for:</p><p data-end=\"3654\" data-start=\"3632\">$A_iA_{i+1}\\cdots A_j$</p><p data-end=\"3687\" data-start=\"3656\">The source table already gives:</p><p data-end=\"3700\" data-start=\"3689\">$c[1,2]=20$</p><p data-end=\"3713\" data-start=\"3702\">$c[2,3]=16$</p><p data-end=\"3726\" data-start=\"3715\">$c[3,4]=48$</p><p data-end=\"3739\" data-start=\"3728\">$c[1,3]=56$</p><p data-end=\"3752\" data-start=\"3741\">$c[2,4]=64$</p><p data-end=\"3775\" data-start=\"3754\">Now compute $c[1,4]$.</p><p data-end=\"3824\" data-start=\"3777\">There are three possible final split positions.</p><p data-end=\"3847\" data-section-id=\"1lwr0v3\" data-start=\"3826\"><br/><strong>Split after $A_1$</strong></p><p data-end=\"3865\" data-start=\"3849\">$A_1(A_2A_3A_4)$</p><p data-end=\"3872\" data-start=\"3867\">Cost:</p><p data-end=\"3899\" data-start=\"3874\">$c[1,1]+c[2,4]+p_0p_1p_4$</p><p data-end=\"3918\" data-start=\"3901\">$=0+64+(5)(2)(6)=64+60=124$</p><p data-end=\"3959\" data-section-id=\"1lwr0u4\" data-start=\"3938\"><br/><strong>Split after $A_2$</strong></p><p data-end=\"3979\" data-start=\"3961\">$(A_1A_2)(A_3A_4)$</p><p data-end=\"3986\" data-start=\"3981\">Cost:</p><p data-end=\"4013\" data-start=\"3988\">$c[1,2]+c[3,4]+p_0p_2p_4$</p><p data-end=\"4033\" data-start=\"4015\">$=20+48+(5)(2)(6)=128$</p><p data-end=\"4064\" data-section-id=\"1lwr0t9\" data-start=\"4043\"><br/><strong>Split after $A_3$</strong></p><p data-end=\"4082\" data-start=\"4066\">$(A_1A_2A_3)A_4$</p><p data-end=\"4089\" data-start=\"4084\">Cost:</p><p data-end=\"4116\" data-start=\"4091\">$c[1,3]+c[4,4]+p_0p_3p_4$</p><p data-end=\"4135\" data-start=\"4118\">$=56+0+(5)(4)(6)=176$</p><p data-end=\"4155\" data-start=\"4145\"> </p><p data-end=\"4183\" data-start=\"4157\">$\\therefore c[1,4]=\\min(124,128,176)=124$</p><p data-end=\"4183\" data-start=\"4157\"><strong>Answer</strong> $: \\boxed{124}$</p><p data-end=\"4183\" data-start=\"4157\">The optimal final split is after $A_1$.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/545227/go-classes-dpp-gate-cs-da-algorithms-matrix-chain-multiplication\" target=\"_blank\">GATE Overflow #545227</a></small></div>"
        }
    ]
});

registerTest({
    "name": "DPP 18 - Algorithms (Greedy Algorithms & Dynamic Programming - Part 2)",
    "testLabel": "DPP 18",
    "testType": "DPP",
    "bracket": "Greedy Algorithms & Dynamic Programming - Part 2",
    "subject": "algo",
    "series": "cse-dpp-2027",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 12,
    "topicsCovered": "Greedy Algorithms & Dynamic Programming (Practice Set 2)",
    "questions": [
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"993\" data-start=\"959\">Consider the following statements.</p><p data-end=\"1518\" data-start=\"1494\">Which option is correct?</p><p><strong>Given Details:</strong></p><ul><li>Dynamic programming generally solves smaller subproblems, stores their solutions, and combines those stored results to solve progressively larger subproblems.</li><li>Divide and conquer recursively decomposes a problem into independent smaller subproblems, solves them, and combines their solutions.</li><li>Greedy algorithms make locally optimal choices and may not always obtain a globally optimal solution. Problems suited to greedy algorithms should not possess optimal substructure.</li></ul></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">All three statements are true.</span>",
                "<span style=\"display: inline;\">All three statements are false.</span>",
                "<span style=\"display: inline;\">Only I and II are true.</span>",
                "<span style=\"display: inline;\">Only II and III are true.</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"545226\"></a><div itemprop=\"text\"><p data-end=\"1769\" data-start=\"1745\"><strong data-end=\"1769\" data-start=\"1745\">Statement I is true.</strong></p><p data-end=\"1881\" data-start=\"1771\">Dynamic programming is useful when a problem can be decomposed into subproblems whose solutions can be reused.</p><p data-end=\"1955\" data-start=\"1883\">Instead of repeatedly solving the same subproblem, DP stores its result.</p><p data-end=\"1978\" data-start=\"1957\">So the basic idea is:</p><p data-end=\"2069\" data-start=\"1980\">$\\text{Solve subproblems} \\rightarrow \\text{Store results} \\rightarrow \\text{Reuse them}$</p><p data-end=\"2096\" data-start=\"2071\"><br/><strong data-end=\"2096\" data-start=\"2071\">Statement II is true.</strong></p><p data-end=\"2208\" data-start=\"2098\">Divide and conquer also breaks a problem into smaller problems, but its subproblems are generally independent.</p><p data-end=\"2256\" data-start=\"2210\">Examples include Merge Sort and Binary Search.</p><p data-end=\"2285\" data-start=\"2258\"><br/><strong data-end=\"2285\" data-start=\"2258\">Statement III is false.</strong></p><p data-end=\"2372\" data-start=\"2287\">The first part about greedy algorithms is correct. They make locally optimal choices.</p><p data-end=\"2503\" data-start=\"2374\">However, the statement incorrectly says that problems suitable for greedy algorithms should <strong data-end=\"2473\" data-start=\"2466\">not</strong> possess optimal substructure.</p><p data-end=\"2618\" data-start=\"2505\">In fact, optimal substructure is generally an important property of problems solved by greedy algorithms as well.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/545225/go-classes-dpp-gate-cs-da-algorithms-dynamic-programming\" target=\"_blank\">GATE Overflow #545225</a></small></div>"
        },
        {
            "marks": 2,
            "neg": 0,
            "type": "MSQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"5152\" data-start=\"5082\">Which algorithm-design strategies can reasonably describe Bubble Sort?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">Greedy<br/></span>",
                "<span style=\"display: inline;\">Brute force<br/></span>",
                "<span style=\"display: inline;\">Decrease-and-conquer<br/></span>",
                "<span style=\"display: inline;\">Divide-and-conquer<br/></span>",
                "<span style=\"display: inline;\">Dynamic programming</span>"
            ],
            "answer": "B",
            "solution": "<div class=\"solution-content\"><a name=\"543762\"></a><div itemprop=\"text\"><p data-end=\"5327\" data-section-id=\"1pigd1f\" data-start=\"5309\"><strong>B. Brute force</strong></p><p data-end=\"5425\" data-start=\"5329\">Bubble Sort repeatedly scans through the unsorted elements and directly compares adjacent pairs.</p><p data-end=\"5499\" data-start=\"5427\">It does not use a sophisticated method to avoid unnecessary comparisons.</p><p data-end=\"5570\" data-start=\"5501\">Therefore, it is primarily classified as a <strong data-end=\"5569\" data-start=\"5544\">brute-force algorithm</strong>.</p><p data-end=\"5599\" data-section-id=\"1axfyr7\" data-start=\"5572\"><br/><strong>C. Decrease-and-conquer</strong></p><p data-end=\"5670\" data-start=\"5601\">After the first pass, the largest element reaches its final position.</p><p data-end=\"5723\" data-start=\"5672\">Therefore, the remaining unsorted problem has size: $n-1$</p><p data-end=\"5764\" data-start=\"5732\">After the next pass, it becomes: $n-2$ and so on.</p><p data-end=\"5887\" data-start=\"5785\">Thus, Bubble Sort can also be viewed as reducing the unsorted problem by one element after every pass.</p><p data-end=\"5943\" data-start=\"5889\">This corresponds to the <strong data-end=\"5937\" data-start=\"5913\">decrease-and-conquer</strong> idea.</p><p data-end=\"6294\" data-start=\"5945\">It does not divide the problem into independent subproblems, so Divide-and-Conquer is incorrect. </p><p data-end=\"6294\" data-start=\"5945\">It also does not use overlapping subproblems or an optimal-choice rule, so Dynamic Programming and Greedy are incorrect. </p><p data-end=\"6294\" data-start=\"5945\">The source classifies Bubble Sort as brute force and also reasonably as decrease-and-conquer.</p><p data-end=\"6328\" data-start=\"6296\"><br/><strong>Answer: B and C</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/543761/go-classes-dpp-gate-cs-da-algorithms-bubble-sort\" target=\"_blank\">GATE Overflow #543761</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Suppose four characters A, B, C, D have the frequencies $15, 8, 6,$ and $5$, respectively. After constructing the optimal Huffman code for this alphabet, what is the total number of bits required to encode the string $\\mathbf{B A D C}$ ?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$8$<br/></span>",
                "<span style=\"display: inline;\">$9$<br/></span>",
                "<span style=\"display: inline;\">$10$<br/></span>",
                "<span style=\"display: inline;\">$11$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"490415\"></a><div itemprop=\"text\"><p style=\"text-align:center\"><img alt=\"\" height=\"560\" src=\"https://gateoverflow.in/?qa=blob&amp;qa_blobid=11887876928535569371\" width=\"540\"/></p><p> B A D C<br/>10 0 111 110<br/><br/>Total = 2+1+3+3 = 9 bits</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/490388/go-classes-dpp-algorithm-huffman-coding\" target=\"_blank\">GATE Overflow #490388</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\">Let $C_1, C_2, C_3$, and $C_4$ be four matrices of dimensions $40 \\times 20,20 \\times 30,30 \\times 10$, and $10 \\times$ 30 , respectively. The minimum number of scalar multiplications required to find the product $C_1 C_2 C_3 C_4$ using the basic matrix multiplication method is $\\_\\_\\_\\_$ .</div></span>",
            "image": "",
            "options": [],
            "answer": "488896",
            "solution": "<div class=\"solution-content\"><a name=\"488897\"></a><div itemprop=\"text\">The minimum value is 26,000 . This corresponds to the parenthesization $\\left(\\left(C_1\\left(C_2 C_3\\right)\\right) C_4\\right.$</div><br><br><small>Source: <a href=\"https://gateoverflow.in/488896/go-classes-dpp-algorithms-mcm\" target=\"_blank\">GATE Overflow #488896</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\">Let $B_1, B_2, B_3, B_4$, and $B_5$ be five matrices of dimensions $20 \\times 10,10 \\times 30,30 \\times 5,5 \\times 40$, and $40 \\times 15$, respectively. The minimum number of scalar multiplications required to find the product $B_1 B_2 B_3 B_4 B_5$ using the basic matrix multiplication method is $\\_\\_\\_\\_$ .</div></span>",
            "image": "",
            "options": [],
            "answer": "7000",
            "solution": "<div class=\"solution-content\"><a name=\"488895\"></a><div itemprop=\"text\">Best split: ((B1 (B2 B3)) (B4 B5)) $\\rightarrow$ no of comparisons = 7000</div><br><br><small>Source: <a href=\"https://gateoverflow.in/488894/go-classes-dpp-algorithms-mcm\" target=\"_blank\">GATE Overflow #488894</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\">Define $C_n$ to be the minimum cost to acquire a total rod length of exactly $n$ meters. You can purchase rods of standard integer lengths, and for $i&gt;0$, let $\\operatorname{cost}[i]$ denote the purchase price of a rod whose length is $i$ meters. You can combine multiple purchased rods to achieve the target length $n$.<br/> <br/> Consider the array of costs for standard lengths:<br/> <br/> $$<br/> \\operatorname{cost}[1]=2, \\operatorname{cost}[2]=5, \\operatorname{cost}[3]=7, \\operatorname{cost}[4]=8<br/> $$<br/> <br/> What is the minimum cost $C_8$ to acquire a total length of 8 meters, with the additional constraint that you are allowed to purchase at most three rods in total?</div></span>",
            "image": "",
            "options": [],
            "answer": "16",
            "solution": "<div class=\"solution-content\"><a name=\"512003\"></a><div itemprop=\"text\">16</div><br><br><small>Source: <a href=\"https://gateoverflow.in/488688/go-classes-dpp-algorithm-dp\" target=\"_blank\">GATE Overflow #488688</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\">Consider a sequence of 10 elements: $A=[2,3,-2,4,-1,0,-3,5,-4,2]$. The sequence product is defined as $P(i, j)=\\prod_{k=i}^j A[k]$. Determine the maximum of $P(i, j)$, where $0 \\leq i \\leq j&lt;10$. (A dynamic programming approach may be used.)<br/> <br/> Answer: $\\_\\_\\_\\_\\_\\_\\_$</div></span>",
            "image": "",
            "options": [],
            "answer": "120",
            "solution": "<div class=\"solution-content\"><a name=\"489142\"></a><div itemprop=\"text\"><pre><code>Given: A = [2, 3, -2, 4, -1, 0, -3, 5, -4, 2] We'll use two DP arrays: - dpMax[i]: Stores the maximum product ending at index i. - dpMin[i]: Stores the minimum product ending at index i. - overallMax: Stores the overall maximum product found so far. Initialization: - dpMax[0] = 2 - dpMin[0] = 2 - overallMax = 2 Iteration: </code></pre><p><b data-complete=\"true\" data-processed=\"true\">Initial State (before any iteration, or after processing A[0]):</b><br data-complete=\"true\" data-processed=\"true\" data-serialized-params=\"[]\"/><code data-complete=\"true\" data-sae=\"\">A = [2, 3, -2, 4, -1, 0, -3, 5, -4, 2]</code><br data-complete=\"true\" data-processed=\"true\" data-serialized-params=\"[]\"/><code data-complete=\"true\" data-sae=\"\">dpMax = [2, _, _, _, _, _, _, _, _, _]</code><br data-complete=\"true\" data-processed=\"true\" data-serialized-params=\"[]\"/><code data-complete=\"true\" data-sae=\"\">dpMin = [2, _, _, _, _, _, _, _, _, _]</code><br data-complete=\"true\" data-processed=\"true\" data-serialized-params=\"[]\"/><code data-complete=\"true\" data-sae=\"\">overallMax = 2</code><button aria-label=\"View related links\" data-amic=\"true\" data-icl-uuid=\"4d7522b3-81e3-4761-95c1-cd42b9e85f87\" data-ved=\"2ahUKEwjGx_OLsvqPAxVW8DgGHeFNOxgQye0OegYIAQgDEAE\" tabindex=\"0\"></button></p><p><b data-complete=\"true\" data-processed=\"true\">Iteration 1 (Processing A[1] = 3):</b><br data-complete=\"true\" data-processed=\"true\" data-serialized-params=\"[]\"/><code data-complete=\"true\" data-sae=\"\">dpMax = [2, 6, _, _, _, _, _, _, _, _]</code><br data-complete=\"true\" data-processed=\"true\" data-serialized-params=\"[]\"/><code data-complete=\"true\" data-sae=\"\">dpMin = [2, 3, _, _, _, _, _, _, _, _]</code><br data-complete=\"true\" data-processed=\"true\" data-serialized-params=\"[]\"/><code data-complete=\"true\" data-sae=\"\">overallMax = 6</code><button aria-label=\"View related links\" data-amic=\"true\" data-icl-uuid=\"156df07c-6b19-4ab7-b290-4229111a5e3c\" data-ved=\"2ahUKEwjGx_OLsvqPAxVW8DgGHeFNOxgQye0OegYIAQgEEAE\" tabindex=\"0\"></button></p><p><b data-complete=\"true\" data-processed=\"true\">Iteration 2 (Processing A[2] = -2):</b><br data-complete=\"true\" data-processed=\"true\" data-serialized-params=\"[]\"/><code data-complete=\"true\" data-sae=\"\">dpMax = [2, 6, -2, _, _, _, _, _, _, _]</code><br data-complete=\"true\" data-processed=\"true\" data-serialized-params=\"[]\"/><code data-complete=\"true\" data-sae=\"\">dpMin = [2, 3, -12, _, _, _, _, _, _, _]</code><br data-complete=\"true\" data-processed=\"true\" data-serialized-params=\"[]\"/><code data-complete=\"true\" data-sae=\"\">overallMax = 6</code><button aria-label=\"View related links\" data-amic=\"true\" data-icl-uuid=\"74ca7ead-b42a-4cda-9ad6-e55a6483ed42\" data-ved=\"2ahUKEwjGx_OLsvqPAxVW8DgGHeFNOxgQye0OegYIAQgFEAE\" tabindex=\"0\"></button></p><p><b data-complete=\"true\" data-processed=\"true\">Iteration 3 (Processing A[3] = 4):</b><br data-complete=\"true\" data-processed=\"true\" data-serialized-params=\"[]\"/><code data-complete=\"true\" data-sae=\"\">dpMax = [2, 6, -2, 4, _, _, _, _, _, _]</code><br data-complete=\"true\" data-processed=\"true\" data-serialized-params=\"[]\"/><code data-complete=\"true\" data-sae=\"\">dpMin = [2, 3, -12, -48, _, _, _, _, _, _]</code><br data-complete=\"true\" data-processed=\"true\" data-serialized-params=\"[]\"/><code data-complete=\"true\" data-sae=\"\">overallMax = 6</code><button aria-label=\"View related links\" data-amic=\"true\" data-icl-uuid=\"307c3906-e6ed-45e7-9aa7-76ec0d09c214\" data-ved=\"2ahUKEwjGx_OLsvqPAxVW8DgGHeFNOxgQye0OegYIAQgGEAE\" tabindex=\"0\"></button></p><p><b data-complete=\"true\" data-processed=\"true\">Iteration 4 (Processing A[4] = -1):</b><br data-complete=\"true\" data-processed=\"true\" data-serialized-params=\"[]\"/><code data-complete=\"true\" data-sae=\"\">dpMax = [2, 6, -2, 4, 48, _, _, _, _, _]</code><br data-complete=\"true\" data-processed=\"true\" data-serialized-params=\"[]\"/><code data-complete=\"true\" data-sae=\"\">dpMin = [2, 3, -12, -48, -4, _, _, _, _, _]</code><br data-complete=\"true\" data-processed=\"true\" data-serialized-params=\"[]\"/><code data-complete=\"true\" data-sae=\"\">overallMax = 48</code><button aria-label=\"View related links\" data-amic=\"true\" data-icl-uuid=\"7ba38b8f-5ef6-4f43-8281-88f592d148bc\" data-ved=\"2ahUKEwjGx_OLsvqPAxVW8DgGHeFNOxgQye0OegYIAQgHEAE\" tabindex=\"0\"></button></p><p><b data-complete=\"true\" data-processed=\"true\">Iteration 5 (Processing A[5] = 0):</b><br data-complete=\"true\" data-processed=\"true\" data-serialized-params=\"[]\"/><code data-complete=\"true\" data-sae=\"\">dpMax = [2, 6, -2, 4, 48, 0, _, _, _, _]</code><br data-complete=\"true\" data-processed=\"true\" data-serialized-params=\"[]\"/><code data-complete=\"true\" data-sae=\"\">dpMin = [2, 3, -12, -48, -4, 0, _, _, _, _]</code><br data-complete=\"true\" data-processed=\"true\" data-serialized-params=\"[]\"/><code data-complete=\"true\" data-sae=\"\">overallMax = 48</code><button aria-label=\"View related links\" data-amic=\"true\" data-icl-uuid=\"f4be6445-20ed-4d51-9031-ff494a217fb2\" data-ved=\"2ahUKEwjGx_OLsvqPAxVW8DgGHeFNOxgQye0OegYIAQgIEAE\" tabindex=\"0\"></button></p><p><b data-complete=\"true\" data-processed=\"true\">Iteration 6 (Processing A[6] = -3):</b><br data-complete=\"true\" data-processed=\"true\" data-serialized-params=\"[]\"/><code data-complete=\"true\" data-sae=\"\">dpMax = [2, 6, -2, 4, 48, 0, 0, _, _, _]</code><br data-complete=\"true\" data-processed=\"true\" data-serialized-params=\"[]\"/><code data-complete=\"true\" data-sae=\"\">dpMin = [2, 3, -12, -48, -4, 0, -3, _, _, _]</code><br data-complete=\"true\" data-processed=\"true\" data-serialized-params=\"[]\"/><code data-complete=\"true\" data-sae=\"\">overallMax = 48</code><button aria-label=\"View related links\" data-amic=\"true\" data-icl-uuid=\"b1436d41-9523-4926-99e3-ff5f41598996\" data-ved=\"2ahUKEwjGx_OLsvqPAxVW8DgGHeFNOxgQye0OegYIAQgJEAE\" tabindex=\"0\"></button></p><p><b data-complete=\"true\" data-processed=\"true\">Iteration 7 (Processing A[7] = 5):</b><br data-complete=\"true\" data-processed=\"true\" data-serialized-params=\"[]\"/><code data-complete=\"true\" data-sae=\"\">dpMax = [2, 6, -2, 4, 48, 0, 0, 5, _, _]</code><br data-complete=\"true\" data-processed=\"true\" data-serialized-params=\"[]\"/><code data-complete=\"true\" data-sae=\"\">dpMin = [2, 3, -12, -48, -4, 0, -3, -15, _, _]</code><br data-complete=\"true\" data-processed=\"true\" data-serialized-params=\"[]\"/><code data-complete=\"true\" data-sae=\"\">overallMax = 48</code><button aria-label=\"View related links\" data-amic=\"true\" data-icl-uuid=\"86eea515-7f62-4bec-8a5b-2b6b8523a6d0\" data-ved=\"2ahUKEwjGx_OLsvqPAxVW8DgGHeFNOxgQye0OegYIAQgLEAE\" tabindex=\"0\"></button></p><p><b data-complete=\"true\" data-processed=\"true\">Iteration 8 (Processing A[8] = -4):</b><br data-complete=\"true\" data-processed=\"true\" data-serialized-params=\"[]\"/><code data-complete=\"true\" data-sae=\"\">dpMax = [2, 6, -2, 4, 48, 0, 0, 5, 60, _]</code><br data-complete=\"true\" data-processed=\"true\" data-serialized-params=\"[]\"/><code data-complete=\"true\" data-sae=\"\">dpMin = [2, 3, -12, -48, -4, 0, -3, -15, -20, _]</code><br data-complete=\"true\" data-processed=\"true\" data-serialized-params=\"[]\"/><code data-complete=\"true\" data-sae=\"\">overallMax = 60</code><button aria-label=\"View related links\" data-amic=\"true\" data-icl-uuid=\"931cd612-9fce-4919-baff-828adac6cbf5\" data-ved=\"2ahUKEwjGx_OLsvqPAxVW8DgGHeFNOxgQye0OegYIAQgMEAE\" tabindex=\"0\"></button></p><p><b data-complete=\"true\" data-processed=\"true\">Iteration 9 (Processing A[9] = 2 - Final Iteration):</b><br data-complete=\"true\" data-processed=\"true\" data-serialized-params=\"[]\"/><code data-complete=\"true\" data-sae=\"\">dpMax = [2, 6, -2, 4, 48, 0, 0, 5, 60, 120]</code><br data-complete=\"true\" data-processed=\"true\" data-serialized-params=\"[]\"/><code data-complete=\"true\" data-sae=\"\">dpMin = [2, 3, -12, -48, -4, 0, -3, -15, -20, -40]</code><br data-complete=\"true\" data-processed=\"true\" data-serialized-params=\"[]\"/><code data-complete=\"true\" data-sae=\"\">overallMax = 120</code></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/488687/go-classes-dpp-algorithm-dp\" target=\"_blank\">GATE Overflow #488687</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider a scheduling problem with $n$ tasks and $k$ distinct resources. Each task $i$ is represented by a tuple ( $s_{-} i, f_{-} i, r_{-} i$ ), where $s_{-} i$ is the start time, $f_{-} i$ is the finish time, and $r_{-} i \\in 1,2, \\ldots, k$ is the ID of the single resource it requires. The objective is to select the maximum number of tasks to execute, with the constraint that no two tasks using the same resource can overlap in time.</p><p>Which of the following greedy strategies guarantees an optimal solution for this problem?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">Sort all tasks by their start times in increasing order. Iterate through the sorted tasks and schedule a task if its required resource is free during its time interval.<br/></span>",
                "<span style=\"display: inline;\">Sort all tasks by their duration $\\left(f_{-} i-s_{-} i\\right)$ in increasing order. Iterate through the sorted tasks and schedule a task if its required resource is free.<br/></span>",
                "<span style=\"display: inline;\">Sort all tasks by their finish times in increasing order. Iterate through the sorted tasks and schedule a task if its start time is after the finish time of the last scheduled task on that same resource.<br/></span>",
                "<span style=\"display: inline;\">For each of the $k$ resources, independently find the optimal schedule for the tasks requiring that resource, and then combine the results.</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"501241\"></a><div itemprop=\"text\"><p><strong data-end=\"1583\" data-start=\"1571\">Option A</strong> (sort by start times): Fails even in the single-resource case (long jobs starting early can block multiple shorter ones). As noted in interval-scheduling literature.<br/><strong data-end=\"1804\" data-start=\"1792\">Option B</strong> (sort by duration): Also fails — a short job might conflict with many moderate jobs whose finish times are better aligned. That also fails even for a single resource.</p><p><strong>The greedy strategies that <em data-end=\"2075\" data-start=\"2064\">guarantee</em> an optimal solution are C and D.</strong></p><p>standard one is <strong data-end=\"2189\" data-start=\"2184\">D</strong> (solve each resource independently via interval-scheduling).</p><p>“global finish-time + per-resource last-finish” (option C) is optimal.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/487768/go-classes-dpp-algorithm-greedy\" target=\"_blank\">GATE Overflow #487768</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>You are given a rod of length $n$ and an array prices where prices[i] is the selling price of a piece of length i . A fixed cost c is incurred for every cut made. Let $P[i]$ be the maximum profit from a rod of length $i$. Which of the following descriptions accurately represents the calculation for $P[i]$ ? (Assume $P[0]=0$ ).</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$P[i]=\\max _{1 \\leq j \\leq i}(\\operatorname{prices}[j]+P[i-j]-c)$<br/></span>",
                "<span style=\"display: inline;\">$P[i]=\\max \\left(\\operatorname{prices}[i], \\max _{1 \\leq j<i}(P[j]+P[i-j]-c)\\right)$<br/></span>",
                "<span style=\"display: inline;\">$P[i]=\\max \\left(\\operatorname{prices}[i]-c, \\max _{1 \\leq j<i}(P[j]+P[i-j])\\right)$<br/></span>",
                "<span style=\"display: inline;\">$P[i]=\\left(\\max _{1 \\leq j \\leq i}(\\operatorname{prices}[j]+P[i-j])\\right)-c$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"487767\"></a><div itemprop=\"text\"><p>The problem is rod-cutting with a cut cost of c.<br/>Key points:</p><ul><li>If we cut a rod of length $i$ into two pieces of lengths $j$ and $i-j$,</li><li>we earn prices[j] + P[i-j]</li><li>but we pay c once for that cut.</li><li>We also have the option of not cutting at all, selling the rod whole for prices[i], which incurs no cost.</li></ul><p>The correct recurrence must therefore take the maximum of:</p><ul><li>selling whole: prices[i]</li><li>best first-cut: prices[j] + P[i-j] - c for some $1 \\leq j&lt;i$.</li></ul><p>Among the choices:<br/>(B)</p><p>$$<br/>P[i]=\\max \\left(\\operatorname{prices}[i], \\max _{1 \\leq j&lt;i}\\{P[j]+P[i-j]-c\\}\\right)<br/>$$</p><p><br/>This exactly matches the reasoning above.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/487766/go-classes-dpp-algorithm-dp\" target=\"_blank\">GATE Overflow #487766</a></small></div>"
        },
        {
            "marks": 2,
            "neg": 0,
            "type": "MSQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Imagine you have a list of jobs you can do. For each job, you know its start time, finish time, and the profit you'll earn. You cannot do two jobs if their times overlap. Your goal is to choose a set of non-overlapping jobs to make the maximum possible total profit.</p><p>Which of the following statement(s) is/are correct?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">greedy algorithm can solve this problem efficiently<br/></span>",
                "<span style=\"display: inline;\">the most efficient algorithm takes O (nlogn) time in worst case (assume tightest upper bound)<br/></span>",
                "<span style=\"display: inline;\">the most efficient algorithm takes $\\mathrm{O}(\\mathrm{n})$ time in worst case (assume tightest upper bound)<br/></span>",
                "<span style=\"display: inline;\">dynamic programming can solve this problem efficiently</span>"
            ],
            "answer": [
                "A"
            ],
            "solution": "<div class=\"solution-content\"><a name=\"487287\"></a><div itemprop=\"text\"><p>This problem is called Weighted Interval Scheduling. A simple greedy choice (like picking the job with the most profit) won't guarantee the best overall solution. It is best solved with dynamic programming.<br/><br/>1. Sort the Jobs: First, sort all ' $n$ ' jobs based on their finish times. This step takes $O(n \\log n)$ time.<br/><br/>2. Calculate Maximum Profit: After sorting, you can calculate the maximum profit in an efficient way. You process one job at a time and decide whether to include it or not. For each job, the maximum profit is either:<br/> </p><ul><li>The maximum profit you could get without this job, OR<br/> </li><li>The profit of this job, plus the maximum profit from earlier jobs that don't overlap with it.</li></ul><p>This calculation part can be done in $\\mathrm{O}(\\mathrm{n})$ time after the initial sort.<br/>The total time complexity is dominated by the sorting step, so the most efficient algorithm runs in $O(n \\log n)$ time.<br/> </p><p>Why greedy fails:<br/>A greedy algorithm fails because making the locally optimal choice at each step does not guarantee a globally optimal solution. The choice that looks best in the moment might block you from choosing a combination of other jobs that would have been worth more in total.</p><p>Let's use a simple counterexample to prove this.<br/>Consider the most intuitive greedy strategy: \"Always pick the compatible job with the highest profit.\"</p><p>The Scenario<br/><br/>Suppose you have these three jobs:<br/><br/><img alt=\"\" src=\"https://gateoverflow.in/?qa=blob&amp;qa_blobid=3593682699619844329\"/></p><p><img alt=\"\" height=\"393\" src=\"https://gateoverflow.in/?qa=blob&amp;qa_blobid=18286574084632369015\" width=\"518\"/><img alt=\"\" height=\"336\" src=\"https://gateoverflow.in/?qa=blob&amp;qa_blobid=14688220699753852290\" width=\"534\"/></p><p> </p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/487284/go-classes-dpp-algorithm-dp\" target=\"_blank\">GATE Overflow #487284</a></small></div>"
        }
    ]
});

registerTest({
    "name": "DPP 19 - Algorithms (Greedy Algorithms & Dynamic Programming - Part 3)",
    "testLabel": "DPP 19",
    "testType": "DPP",
    "bracket": "Greedy Algorithms & Dynamic Programming - Part 3",
    "subject": "algo",
    "series": "cse-dpp-2027",
    "date": "Nov 03, 2026",
    "duration": "18 Min",
    "totalMarks": 6,
    "topicsCovered": "Greedy Algorithms & Dynamic Programming (Practice Set 3)",
    "questions": [
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\">Two programmers, Alex and Ben, are working on a version control system. They have two versions of a code file, represented by strings $$S_1= ALGORITHM $$ and <br/> <br/> $$S _2= LOGARITHM $$<br/> <br/> To merge these files efficiently, they need to find the shortest possible string that contains both $S _1$ and $S _2$ as subsequences. What is the length of this Shortest Common Supersequence (SCS)?</div></span>",
            "image": "",
            "options": [],
            "answer": "11",
            "solution": "<div class=\"solution-content\"><a name=\"490610\"></a><div itemprop=\"text\">11</div><br><br><small>Source: <a href=\"https://gateoverflow.in/486909/go-classes-dpp-algorithm-scs\" target=\"_blank\">GATE Overflow #486909</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\">Consider two DNA sequences represented by strings $S_1=$ \"AGGTAB\" and $S_2=$ \"GXTXAYB\". To analyse their relationship, a bioinformatician wants to find the shortest possible sequence that contains both $S_1$ and $S_2$ as subsequences.<br/> <br/> The length of shortest common supersequence of $\\mathrm{S} 1, \\mathrm{~S} 2$ will be ______________.</div></span>",
            "image": "",
            "options": [],
            "answer": "7",
            "solution": "<div class=\"solution-content\"><a name=\"499651\"></a><div itemprop=\"text\"><p>Answer: (6+7) - 4= 9 ;|LCS|=4, |S1|= 6, |S2|=7</p><p>Length of this Shortest Common Supersequence (SCS)<strong data-end=\"49\" data-start=\"16\"> = |S1| + |S2| − L</strong>,<br/> where <strong data-end=\"62\" data-start=\"57\">L</strong> is the length of the <strong data-end=\"120\" data-start=\"84\">Longest Common Subsequence (LCS)</strong> of S1 and S2.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/486907/go-classes-dpp-algorithm-scs\" target=\"_blank\">GATE Overflow #486907</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>A file contains the following characters with the given frequencies:</p><p>What is the total number of bits required to encode the message <strong>'bad'</strong> using a Huffman code generated from these frequencies?</p><p><strong>Given Details:</strong></p><ul><li>a: $45$</li><li>b: $13$</li><li>c: $12$</li><li>d: $16$</li><li>e: $9$</li><li>f: $5$</li></ul></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$9$</span>",
                "<span style=\"display: inline;\">$7$</span>",
                "<span style=\"display: inline;\">$6$</span>",
                "<span style=\"display: inline;\">$8$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"486540\"></a><div itemprop=\"text\">answer is 7 and b is answer</div><br><br><small>Source: <a href=\"https://gateoverflow.in/486528/go-classes-dpp-algorithm-huffman-coding\" target=\"_blank\">GATE Overflow #486528</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>A Huffman tree is constructed for the following data: $[A, B, C, D, E]$ with frequency $\\{0.17$, $0.11,0.24,0.33$ and $0.15$} respectively. $1000001101$ is decoded as</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">BACE<br/></span>",
                "<span style=\"display: inline;\">CADE<br/></span>",
                "<span style=\"display: inline;\">BAD<br/></span>",
                "<span style=\"display: inline;\">CADD</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"486292\"></a><div itemprop=\"text\">Option A :<br/> <br/> tree : in preordr : 100 , 41 ,59,17,24,26,33,11,15<br/> <br/> </div><br><br><small>Source: <a href=\"https://gateoverflow.in/486201/go-classes-dpp-algorithm-isro\" target=\"_blank\">GATE Overflow #486201</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\">Consider the weights and values of items listed below. Note that there is only one unit of each item.<br/> <br/> \\[<br/> \\begin{array}{|l|c|c|}<br/> \\hline<br/> \\text{Item number} &amp; \\text{Weight (in Kgs)} &amp; \\text{Value (in rupees)} \\\\<br/> \\hline<br/> 1 &amp; 8 &amp; 48 \\\\<br/> 2 &amp; 5 &amp; 30 \\\\<br/> 3 &amp; 3 &amp; 18 \\\\<br/> 4 &amp; 1 &amp; 12 \\\\<br/> \\hline<br/> \\end{array}<br/> \\]<br/> <br/> The task is to pick a subset of these items such that their total weight is no more than 10 Kgs and their total value is maximized. Moreover, the item may be split. The total value of items picked by an optimal algorithm is denoted by $V_{\\text {opt }}$.<br/> <br/> A greedy algorithm sorts the items by their value-to-weight ratios in descending order and packs them greedily, starting from the first item in the ordered list. The total value of items picked by the greedy algorithm is denoted by $V_{\\text {greedy }}$.<br/> <br/> The value of $V_{\\text {opt }}-V_{\\text {greedy }}$ is __________.</div></span>",
            "image": "",
            "options": [],
            "answer": "0",
            "solution": "<div class=\"solution-content\"><a name=\"485677\"></a><div itemprop=\"text\">Since the items may be split <br/> <br/> Hence greedy will be optimal algorithm here <br/> <br/> That's why answer is 0</div><br><br><small>Source: <a href=\"https://gateoverflow.in/485295/go-classes-dpp-algorithm-greedy-algorithm\" target=\"_blank\">GATE Overflow #485295</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>We are given 8 tasks $T_1, T_2, \\ldots, T_8$. The execution of each task requires one unit of time. We can execute one task at a time. Each task $T_i$ has a profit $P_i$ and a deadline $d_i$. Profit $P_i$ is earned if the task is completed before the end of the $d_i^{t h}$ unit of time.</p><p>\\[<br/>\\begin{array}{|l|c|c|c|c|c|c|c|c|}<br/>\\hline<br/>\\text{Task} &amp; T_{1} &amp; T_{2} &amp; T_{3} &amp; T_{4} &amp; T_{5} &amp; T_{6} &amp; T_{7} &amp; T_{s} \\\\<br/>\\hline<br/>\\text{Profit} &amp; 12 &amp; 25 &amp; 18 &amp; 30 &amp; 20 &amp; 15 &amp; 10 &amp; 22 \\\\<br/>\\hline<br/>\\text{Deadline} &amp; 4 &amp; 2 &amp; 3 &amp; 1 &amp; 3 &amp; 2 &amp; 4 &amp; 1 \\\\<br/>\\hline<br/>\\end{array}<br/>\\]</p><p>What is the maximum profit that can be earned?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$122$</span>",
                "<span style=\"display: inline;\">$87$</span>",
                "<span style=\"display: inline;\">$120$</span>",
                "<span style=\"display: inline;\">$125$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"485565\"></a><div itemprop=\"text\">is answer is 87 (T4,T2,T5,T1)</div><br><br><small>Source: <a href=\"https://gateoverflow.in/485293/go-classes-dpp-algorithm-greedy-algorithm\" target=\"_blank\">GATE Overflow #485293</a></small></div>"
        }
    ]
});

registerTest({
    "name": "DPP 20 - Algorithms (Graph Algorithms (BFS, DFS & Traversals - Part 1)",
    "testLabel": "DPP 20",
    "testType": "DPP",
    "bracket": "Graph Algorithms (BFS, DFS & Traversals - Part 1",
    "subject": "algo",
    "series": "cse-dpp-2027",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 12,
    "topicsCovered": "Graph Algorithms (BFS, DFS & Traversals (Practice Set 1)",
    "questions": [
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"7629\" data-start=\"7535\">Let $G$ be an undirected graph and let $G^*$ be obtained by removing an edge $(u,v)$ from $G$.</p><p data-end=\"7672\" data-start=\"7631\">Suppose both $G$ and $G^*$ are connected.</p><p data-end=\"7762\" data-start=\"7674\">Let $T$ be a BFS tree of $G$ rooted at $s$, and $T^*$ a BFS tree of $G^*$ rooted at $s$.</p><p data-end=\"7867\" data-start=\"7764\">If every vertex has the same depth in $T$ and $T^*$, then $u$ and $v$ must be at the same depth in $T$.</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">True<br/></span>",
                "<span style=\"display: inline;\">False</span>"
            ],
            "answer": "B",
            "solution": "<div class=\"solution-content\"><a name=\"545043\"></a><div itemprop=\"text\"><p data-end=\"7967\" data-start=\"7942\">We need a counterexample.</p><p data-end=\"7988\" data-start=\"7969\">Consider the edges:</p><p data-end=\"7995\" data-start=\"7990\">$s-u$</p><p data-end=\"8002\" data-start=\"7997\">$s-x$</p><p data-end=\"8009\" data-start=\"8004\">$x-v$</p><p data-end=\"8016\" data-start=\"8011\">$u-v$</p><p data-end=\"8049\" data-start=\"8018\">The BFS distances from $s$ are:</p><p data-end=\"8059\" data-start=\"8051\">$d(s)=0$</p><p data-end=\"8069\" data-start=\"8061\">$d(u)=1$</p><p data-end=\"8079\" data-start=\"8071\">$d(x)=1$</p><p data-end=\"8089\" data-start=\"8081\">$d(v)=2$</p><p data-end=\"8134\" data-start=\"8091\">Therefore, the removed-edge endpoints have:</p><p data-end=\"8144\" data-start=\"8136\">$d(u)=1$</p><p data-end=\"8150\" data-start=\"8146\">and:</p><p data-end=\"8160\" data-start=\"8152\">$d(v)=2$</p><p data-end=\"8202\" data-start=\"8162\">So they are on <strong data-end=\"8201\" data-start=\"8177\">different BFS levels</strong>.</p><p data-end=\"8215\" data-start=\"8204\">Now remove:</p><p data-end=\"8224\" data-start=\"8217\">$(u,v)$</p><p data-end=\"8262\" data-start=\"8226\">Vertex $v$ is still reachable using:</p><p data-end=\"8293\" data-start=\"8264\">$s\\rightarrow x\\rightarrow v$</p><p data-end=\"8320\" data-start=\"8295\">and its distance remains:</p><p data-end=\"8330\" data-start=\"8322\">$d(v)=2$</p><p data-end=\"8424\" data-start=\"8332\">The depths of all vertices remain unchanged even though $u$ and $v$ were on adjacent levels.</p><p data-end=\"8529\" data-start=\"8426\">Therefore, unchanged BFS depths do <strong data-end=\"8468\" data-start=\"8461\">not</strong> imply that the removed edge had endpoints on the same level.</p><p data-end=\"8537\" data-start=\"8531\"><br/><strong>Answer: B</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/545042/go-classes-dpp-gate-cs-da-algorithms-bfs-tree\" target=\"_blank\">GATE Overflow #545042</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"5893\" data-start=\"5805\">Let $T$ be any tree which contains all the vertices of a connected undirected graph $G$.</p><p data-end=\"5957\" data-start=\"5895\">There is a way to break ties in DFS such that DFS outputs $T$.</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">True<br/></span>",
                "<span style=\"display: inline;\">False</span>"
            ],
            "answer": "B",
            "solution": "<div class=\"solution-content\"><a name=\"545041\"></a><div itemprop=\"text\"><p data-end=\"6172\" data-start=\"6032\">The statement claims that <strong data-end=\"6081\" data-start=\"6058\">every spanning tree</strong> of a connected graph can be generated as a DFS tree by choosing a suitable neighbor order.</p><p data-end=\"6216\" data-start=\"6174\">A counterexample is enough to disprove it.</p><p data-end=\"6246\" data-start=\"6218\">Consider the complete graph $K_4$</p><p data-end=\"6288\" data-start=\"6255\">Suppose DFS starts at vertex $A$.</p><p data-end=\"6363\" data-start=\"6290\">Because every vertex is connected to every other vertex, DFS can proceed:</p><p data-end=\"6407\" data-start=\"6365\">$A\\rightarrow B\\rightarrow C\\rightarrow D$</p><p data-end=\"6533\" data-start=\"6409\">At $B$, there is always another unvisited vertex available, so DFS continues deeper instead of returning immediately to $A$.</p><p data-end=\"6583\" data-start=\"6535\">Thus a DFS tree of $K_4$ has the form of a path:</p><p data-end=\"6594\" data-start=\"6585\">$A-B-C-D$</p><p data-end=\"6640\" data-start=\"6596\">Now consider another spanning tree of $K_4$:</p><p data-end=\"6645\" data-start=\"6642\">$A$</p><p data-end=\"6667\" data-start=\"6647\">with three children:</p><p data-end=\"6676\" data-start=\"6669\">$B,C,D$</p><p data-end=\"6780\" data-start=\"6678\">This is a valid spanning tree of the original graph, but DFS cannot produce this star as its DFS tree.</p><p data-end=\"6862\" data-start=\"6782\">After reaching $B$, DFS will discover one of $C$ or $D$ before returning to $A$.</p><p data-end=\"6922\" data-start=\"6864\">Therefore, not every spanning tree can be produced by DFS.</p><p data-end=\"6930\" data-start=\"6924\"> </p><p data-end=\"6965\" data-start=\"6932\"><strong>Answer: B</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/545040/go-classes-dpp-gate-cs-da-algorithms-dfs-tree\" target=\"_blank\">GATE Overflow #545040</a></small></div>"
        },
        {
            "marks": 2,
            "neg": 0,
            "type": "MSQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"4036\" data-start=\"3973\">Let $G$ be an undirected graph with $n$ vertices and $m$ edges.</p><p data-end=\"4184\" data-start=\"4083\">$\\text{S1}:$ All its DFS forests, for traversals starting at different vertices, have the same number of trees.</p><p data-end=\"4278\" data-start=\"4186\">$\\text{S2}:$ All its DFS forests have the same number of tree edges and the same number of back edges.</p><p data-end=\"4081\" data-start=\"4038\">Which of the given statement(s) is/are true?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">Only $\\text{S1}$<br/></span>",
                "<span style=\"display: inline;\">Only $\\text{S2}$<br/></span>",
                "<span style=\"display: inline;\">Both<br/></span>",
                "<span style=\"display: inline;\">None</span>"
            ],
            "answer": "C",
            "solution": "<div class=\"solution-content\"><a name=\"545039\"></a><div itemprop=\"text\"><p data-end=\"4354\" data-start=\"4332\">Let the graph contain $c$ connected components.</p><p data-end=\"4399\" data-section-id=\"va8ngi\" data-start=\"4384\"><strong>Statement $1$</strong></p><p data-end=\"4507\" data-start=\"4401\">When DFS begins from an unvisited vertex, it visits the entire connected component containing that vertex.</p><p data-end=\"4625\" data-start=\"4509\">When that DFS finishes, another DFS is started only if some vertex in another connected component remains unvisited.</p><p data-end=\"4694\" data-start=\"4627\">Therefore, every connected component produces exactly one DFS tree.</p><p data-end=\"4702\" data-start=\"4696\">Hence, $\\text{Number of DFS trees}=c$</p><p data-end=\"4829\" data-start=\"4736\">The starting order may change <strong data-end=\"4799\" data-start=\"4766\">which vertex becomes the root</strong>, but not the number of trees.</p><p data-end=\"4844\" data-start=\"4831\">So, $\\text{S1}$ is true.<br/> </p><p data-end=\"4861\" data-section-id=\"va8ngh\" data-start=\"4846\"><strong>Statement $2$</strong></p><p data-end=\"4895\" data-start=\"4863\">Suppose the component sizes are $n_1,n_2,\\ldots,n_c$</p><p data-end=\"4960\" data-start=\"4919\">A DFS tree containing $n_i$ vertices has $n_i-1$ tree edges.</p><p data-end=\"5029\" data-start=\"4984\">Therefore, the total number of tree edges is:</p><p data-end=\"5054\" data-start=\"5031\">$\\sum_{i=1}^{c}(n_i-1)=n-c$</p><p data-end=\"5078\" data-start=\"5064\">This is fixed.</p><p data-end=\"5150\" data-start=\"5080\">In an undirected DFS, every edge is either a tree edge or a back edge.</p><p data-end=\"5162\" data-start=\"5152\">$\\therefore \\text{Back edges}=m-(n-c)$ which is also fixed.</p><p data-end=\"5376\" data-start=\"5215\">Hence both quantities are independent of DFS traversal order.</p><p data-end=\"5376\" data-start=\"5215\"> </p><p data-end=\"5376\" data-start=\"5215\"><strong>Answer : C</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/545038/go-classes-dpp-gate-cs-da-algorithms-dfs-forest\" target=\"_blank\">GATE Overflow #545038</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"2494\" data-start=\"2393\">Which of the following is <strong data-end=\"2426\" data-start=\"2419\">NOT</strong> a possible depth-first search sequence of the given directed graph?</p><p style=\"text-align:center\"><img alt=\"\" height=\"245\" src=\"https://cdn.mathpix.com/snip/images/vaghhdHuMIGpExn5yIJYdn-TBv1nYUby708aAVpYqp8.original.fullsize.png\" width=\"300\"/></p></div></span>",
            "image": "https://cdn.mathpix.com/snip/images/vaghhdHuMIGpExn5yIJYdn-TBv1nYUby708aAVpYqp8.original.fullsize.png",
            "options": [
                "<span style=\"display: inline;\">$V_1,V_5,V_2,V_3,V_4$<br/></span>",
                "<span style=\"display: inline;\">$V_1,V_3,V_2,V_5,V_4$<br/></span>",
                "<span style=\"display: inline;\">$V_1,V_2,V_5,V_3,V_4$<br/></span>",
                "<span style=\"display: inline;\">$V_1,V_2,V_3,V_4,V_5$</span>"
            ],
            "answer": "D",
            "solution": "<div class=\"solution-content\"><a name=\"545037\"></a><div itemprop=\"text\"><p data-end=\"2661\" data-start=\"2646\">Check option D.</p><p data-end=\"2673\" data-start=\"2663\">It begins:</p><p data-end=\"2695\" data-start=\"2675\">$V_1\\rightarrow V_2$</p><p data-end=\"2774\" data-start=\"2697\">After DFS reaches $V_2$, vertex $V_2$ still has an unvisited adjacent vertex $V_5$</p><p data-end=\"2811\" data-start=\"2783\">The fundamental DFS rule is:</p><p data-end=\"2890\" data-start=\"2815\"><em>Continue as deeply as possible from the current vertex before backtracking.</em></p><p data-end=\"2946\" data-start=\"2892\">Therefore, after reaching $V_2$, DFS must continue to $V_5$ before it can backtrack and later visit $V_3$.</p><p data-end=\"3022\" data-start=\"3003\">But option D gives:</p><p data-end=\"3044\" data-start=\"3024\">$V_1,V_2,V_3,\\ldots$</p><p data-end=\"3139\" data-start=\"3046\">This means DFS leaves $V_2$ even though an unvisited continuation through $V_5$ still exists.</p><p data-end=\"3167\" data-start=\"3141\">That is impossible in DFS.</p><p data-end=\"3406\" data-start=\"3169\">The other three sequences can be obtained through appropriate choices among available unvisited neighbors.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/545036/go-classes-dpp-gate-cs-da-algorithms-dfs-traversal-order\" target=\"_blank\">GATE Overflow #545036</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"687\" data-start=\"587\">Let $G$ be a connected graph with $n$ vertices. Two searches are performed starting from vertex $v$:</p><p data-end=\"884\" data-start=\"822\">Let $d(x,y)$ denote the distance between vertices $x$ and $y$.</p><p data-end=\"920\" data-start=\"886\">Which of the following is correct?</p><p><strong>Given Details:</strong></p><ul><li>$l(x)$ denotes the order in which vertex $x$ is reached by BFS.</li><li>$p(x)$ denotes the order in which vertex $x$ is reached by DFS.</li></ul></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">If $l(u)&lt;l(w)$ and $p(u)&lt;p(w)$, then $d(v,u)&lt;d(v,w)$.</span>",
                "<span style=\"display: inline;\">If $l(u)&lt;l(w)$ and $p(u)&gt;p(w)$, then $d(v,u)=d(v,w)$.</span>",
                "<span style=\"display: inline;\">If $l(u)&gt;l(w)$ and $p(u)&lt;p(w)$, then $d(v,u)\\leq d(v,w)$.</span>",
                "<span style=\"display: inline;\">If $l(u)&lt;l(w)$ and $p(u)&gt;p(w)$, then $d(v,u)\\leq d(v,w)$.</span>"
            ],
            "answer": "D",
            "solution": "<div class=\"solution-content\"><a name=\"545034\"></a><div itemprop=\"text\"><p data-end=\"1308\" data-start=\"1266\">The important property comes from <strong data-end=\"1307\" data-start=\"1300\">BFS</strong>.</p><p data-end=\"1403\" data-start=\"1310\">BFS explores vertices in nondecreasing order of their shortest-path distance from the source.</p><p data-end=\"1419\" data-start=\"1405\">Therefore, if, $l(u)&lt;l(w)$</p><p data-end=\"1491\" data-start=\"1434\">then $u$ was reached before $w$ by BFS, which guarantees,</p><p data-end=\"1512\" data-start=\"1493\">$d(v,u)\\leq d(v,w)$</p><p data-end=\"1567\" data-start=\"1514\">Notice that the inequality is not necessarily strict.</p><p data-end=\"1635\" data-start=\"1569\">Two vertices on the same BFS level can be reached in either order.</p><p data-end=\"1649\" data-start=\"1637\">For eg:</p><p data-end=\"1668\" data-start=\"1651\">$d(v,u)=d(v,w)=2$</p><p data-end=\"1689\" data-start=\"1670\">while still having $l(u)&lt;l(w)$</p><p data-end=\"1782\" data-start=\"1704\">The DFS ordering $p(u)$ and $p(w)$ does not change this BFS distance property.</p><p data-end=\"1801\" data-start=\"1784\">Therefore, under $l(u)&lt;l(w)$ and $p(u)&gt;p(w)$</p><p data-end=\"1849\" data-start=\"1835\">we still know,</p><p data-end=\"1870\" data-start=\"1851\">$d(v,u)\\leq d(v,w)$<br/> </p><p data-end=\"1878\" data-start=\"1872\">$\\boxed{\\therefore \\text{Answer: D}}$</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/545033/go-classes-dpp-gate-cs-da-algorithms-bfs-order-vs-dfs-order\" target=\"_blank\">GATE Overflow #545033</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p style=\"text-align:center\"><img alt=\"\" height=\"181\" src=\"https://cdn.mathpix.com/snip/images/t-oKHHKq1P68njIHEt0Fpplp23jrpvZ9kEYVaAVww5U.original.fullsize.png\" width=\"302\"/></p><p data-end=\"7313\" data-start=\"7269\">Can the above graph be topologically sorted?</p></div></span>",
            "image": "https://cdn.mathpix.com/snip/images/t-oKHHKq1P68njIHEt0Fpplp23jrpvZ9kEYVaAVww5U.original.fullsize.png",
            "options": [
                "<span style=\"display: inline;\">Yes<br/></span>",
                "<span style=\"display: inline;\">No</span>"
            ],
            "answer": "B",
            "solution": "<div class=\"solution-content\"><a name=\"544835\"></a><div itemprop=\"text\"><p data-end=\"7507\" data-start=\"7381\">A directed graph has a topological ordering <strong data-end=\"7468\" data-start=\"7425\">if and only if it has no directed cycle</strong>.</p><p data-end=\"7507\" data-start=\"7381\">Look at the graph, it contains the directed edges:</p><p data-end=\"7579\" data-start=\"7562\">$B \\rightarrow C$</p><p data-end=\"7598\" data-start=\"7581\">$C \\rightarrow D$</p><p data-end=\"7617\" data-start=\"7600\">$D \\rightarrow B$</p><p style=\"text-align:center\"><img alt=\"\" height=\"151\" src=\"https://cdn.mathpix.com/snip/images/71XaAhO6KZ379cLFc0ECDyNdbyRVekNN7r3hloGW7B8.original.fullsize.png\" width=\"311\"/></p><p data-end=\"7646\" data-start=\"7619\">These edges form the cycle:</p><p data-end=\"7693\" data-start=\"7648\">$B \\rightarrow C \\rightarrow D \\rightarrow B$</p><p data-end=\"7738\" data-start=\"7695\">Now suppose a topological ordering existed.</p><p data-end=\"7745\" data-start=\"7740\">From $B \\rightarrow C$</p><p data-end=\"7774\" data-start=\"7766\">we need $B$ before $C$</p><p data-end=\"7797\" data-start=\"7792\">From $C \\rightarrow D$</p><p data-end=\"7826\" data-start=\"7818\">we need, $C$ before $D$</p><p data-end=\"7849\" data-start=\"7844\">From $D \\rightarrow B$</p><p data-end=\"7878\" data-start=\"7870\">we need $D$ before $B$</p><p data-end=\"7937\" data-start=\"7896\">Combining these conditions would require:</p><p data-end=\"7948\" data-start=\"7939\">$B&lt;C&lt;D&lt;B$</p><p data-end=\"7970\" data-start=\"7950\">which is impossible.</p><p data-end=\"8024\" data-start=\"7972\">Therefore, the graph cannot be topologically sorted.</p><p data-end=\"8032\" data-start=\"8026\"><br/><strong>Answer: B</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/544834/go-classes-dpp-gate-cs-da-algorithms-topological-sort\" target=\"_blank\">GATE Overflow #544834</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"5929\" data-start=\"5806\">Suppose DFS is called on a DAG $G$, and the resulting DFS forest has a single tree. Then $G$ has exactly one source vertex.</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">True<br/></span>",
                "<span style=\"display: inline;\">False</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"544833\"></a><div itemprop=\"text\"><p data-end=\"6047\" data-start=\"6003\">A <strong data-end=\"6022\" data-start=\"6005\">source vertex</strong> in a directed graph has $\\text{indegree}=0$</p><p data-end=\"6127\" data-start=\"6070\">Therefore, no other vertex has an edge entering a source.</p><p data-end=\"6212\" data-start=\"6129\">This also means that no DFS starting from another vertex can reach a source vertex.</p><p data-end=\"6328\" data-start=\"6214\">So every source must be discovered directly by the outer DFS procedure and must become the <strong data-end=\"6327\" data-start=\"6305\">root of a DFS tree</strong>.</p><p data-end=\"6381\" data-start=\"6330\">Now the question says the DFS forest contains only $1$ tree.</p><p data-end=\"6432\" data-start=\"6395\">Therefore, it contains only one root.</p><p data-end=\"6479\" data-start=\"6434\">Hence, the graph can have at most one source.</p><p data-end=\"6535\" data-start=\"6481\">Also, every finite DAG has at least one source vertex.</p><p data-end=\"6547\" data-start=\"6537\">$\\therefore \\text{Number of sources}=1$</p><p data-end=\"6577\" data-start=\"6549\"><br/><strong>Answer: A</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/544832/go-classes-dpp-gate-cs-da-algorithms-dfs-tree-in-dag\" target=\"_blank\">GATE Overflow #544832</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"4477\" data-start=\"4404\">Is the reverse postorder the only valid topological order for this graph?</p><p style=\"text-align:center\"><img alt=\"\" height=\"323\" src=\"https://cdn.mathpix.com/snip/images/EJOr7LO2A7LX_0t52SdlvXWANMZoBv6vm6qSnt3lLpw.original.fullsize.png\" width=\"294\"/></p></div></span>",
            "image": "https://cdn.mathpix.com/snip/images/EJOr7LO2A7LX_0t52SdlvXWANMZoBv6vm6qSnt3lLpw.original.fullsize.png",
            "options": [
                "<span style=\"display: inline;\">No<br/></span>",
                "<span style=\"display: inline;\">Yes</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"544830\"></a><div itemprop=\"text\"><p data-end=\"4577\" data-start=\"4545\">DFS gives the reverse postorder:</p><p data-end=\"4594\" data-start=\"4579\">$3,6,0,5,2,1,4$</p><p style=\"text-align:center\"><img alt=\"\" height=\"350\" src=\"https://cdn.mathpix.com/snip/images/4ICr1ZZq5aUNfN4jlQmnaOeJCE1QQgOi2HZvyZVn5Ko.original.fullsize.png\" width=\"156\"/></p><p data-end=\"4633\" data-start=\"4596\">This is a valid topological ordering.</p><p data-end=\"4776\" data-start=\"4635\">However, a DAG can have <strong data-end=\"4703\" data-start=\"4659\">more than one valid topological ordering</strong> whenever some vertices do not have a precedence constraint between them.</p><p data-end=\"4872\" data-start=\"4778\">In this graph, vertices $1$ and $2$ do not have an edge forcing one to occur before the other.</p><p data-end=\"4911\" data-start=\"4874\">Therefore, another valid ordering is:</p><p data-end=\"4928\" data-start=\"4913\">$3,6,0,5,1,2,4$</p><p data-end=\"4961\" data-start=\"4930\">Check the relevant constraints:</p><p data-end=\"5000\" data-start=\"4963\">$0$ still appears before $1$ and $2$.</p><p data-end=\"5031\" data-start=\"5002\">$5$ still appears before $2$.</p><p data-end=\"5062\" data-start=\"5033\">$1$ still appears before $4$.</p><p data-end=\"5122\" data-start=\"5064\">All other directed-edge constraints also remain satisfied.</p><p data-end=\"5308\" data-start=\"5124\">Thus, reverse DFS postorder gives <strong data-end=\"5163\" data-start=\"5158\">a</strong> valid topological ordering, but it need not be the only one. </p><p data-end=\"5316\" data-start=\"5310\"><br/><strong>Answer: A</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/544828/go-classes-dpp-gate-cs-da-algorithms-topological-ordering\" target=\"_blank\">GATE Overflow #544828</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Which of the following is a valid topological ordering of the vertices in the given graph?</p><p style=\"text-align:center\"><img alt=\"\" height=\"300\" src=\"https://cdn.mathpix.com/snip/images/Ux4nqhHgx3wDSzp7V5N0BhEQHrelwjjGm6XKO5E7K2s.original.fullsize.png\" width=\"291\"/></p></div></span>",
            "image": "https://cdn.mathpix.com/snip/images/Ux4nqhHgx3wDSzp7V5N0BhEQHrelwjjGm6XKO5E7K2s.original.fullsize.png",
            "options": [
                "<span style=\"display: inline;\">$0 \\rightarrow 6 \\rightarrow 1 \\rightarrow 7 \\rightarrow 3 \\rightarrow 5 \\rightarrow 4 \\rightarrow 2$<br/></span>",
                "<span style=\"display: inline;\">$0 \\rightarrow 2 \\rightarrow 6 \\rightarrow 1 \\rightarrow 5 \\rightarrow 7 \\rightarrow 4 \\rightarrow 3$<br/></span>",
                "<span style=\"display: inline;\">$6 \\rightarrow 0 \\rightarrow 1 \\rightarrow 3 \\rightarrow 5 \\rightarrow 4 \\rightarrow 2 \\rightarrow 7$<br/></span>",
                "<span style=\"display: inline;\">$0 \\rightarrow 6 \\rightarrow 7 \\rightarrow 1 \\rightarrow 3 \\rightarrow 2 \\rightarrow 5 \\rightarrow 4$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"544822\"></a><div itemprop=\"text\"><p data-end=\"1139\" data-start=\"1088\">In a topological ordering, for every directed edge:</p><p data-end=\"1158\" data-start=\"1141\">$u \\rightarrow v$</p><p data-end=\"1205\" data-start=\"1160\">vertex $u$ must appear <strong data-end=\"1193\" data-start=\"1183\">before</strong> vertex $v$.</p><p data-end=\"1257\" data-start=\"1207\">From the graph, the important constraints include:</p><p data-end=\"1276\" data-start=\"1259\">$0 \\rightarrow 6$</p><p data-end=\"1295\" data-start=\"1278\">$0 \\rightarrow 3$</p><p data-end=\"1314\" data-start=\"1297\">$6 \\rightarrow 1$</p><p data-end=\"1333\" data-start=\"1316\">$6 \\rightarrow 7$</p><p data-end=\"1352\" data-start=\"1335\">$1 \\rightarrow 2$</p><p data-end=\"1371\" data-start=\"1354\">$7 \\rightarrow 2$</p><p data-end=\"1390\" data-start=\"1373\">$3 \\rightarrow 5$</p><p data-end=\"1409\" data-start=\"1392\">$3 \\rightarrow 4$</p><p data-end=\"1428\" data-start=\"1411\">$5 \\rightarrow 4$</p><p data-end=\"1447\" data-start=\"1430\">$4 \\rightarrow 2$</p><p data-end=\"1471\" data-start=\"1449\">Now check the options.</p><ol start=\"1\" style=\"list-style-type: upper-alpha;\"><li data-end=\"1485\" data-section-id=\"wnghxg\" data-start=\"1473\">$0,6,1,7,3,5,4,2$<br/>All the required predecessors occur before their corresponding successors.<br/>For eg:<br/>$6$ is before $1$ and $7$.<br/>$3$ is before $5$ and $4$.<br/>$5$ is before $4$.<br/>$1,7,$ and $4$ are all before $2$.<br/>So A is valid.<br/> </li><li data-end=\"1736\" data-section-id=\"wnghxj\" data-start=\"1724\">$2$ occurs before vertices such as $1,7,$ and $4$, even though:<br/>$1 \\rightarrow 2$<br/>$7 \\rightarrow 2$<br/>$4 \\rightarrow 2$<br/>Therefore B is invalid.<br/> </li><li data-end=\"1897\" data-section-id=\"wnghxi\" data-start=\"1885\">$6$ occurs before $0$, but:<br/>$0 \\rightarrow 6$<br/>Therefore C is invalid.<br/> </li><li data-end=\"1984\" data-section-id=\"wnghxd\" data-start=\"1972\">$2$ appears before $4$, but:<br/>$4 \\rightarrow 2$<br/>Therefore D is invalid.</li></ol></div><br><br><small>Source: <a href=\"https://gateoverflow.in/544821/go-classes-dpp-gate-cs-da-algorithms-topological-ordering\" target=\"_blank\">GATE Overflow #544821</a></small></div>"
        },
        {
            "marks": 2,
            "neg": 0,
            "type": "MSQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><section data-testid=\"conversation-turn-26\" data-turn=\"assistant\" data-turn-id=\"request-WEB:af655032-1491-4364-ae06-a6a567bcd6cd-12\" data-turn-id-container=\"request-WEB:af655032-1491-4364-ae06-a6a567bcd6cd-12\" dir=\"auto\"><p data-end=\"196\" data-is-last-node=\"\" data-is-only-node=\"\" data-start=\"0\">Suppose that during an execution of depth-first search in a digraph $G$, $\\texttt{dfs(v)}$ is called as a recursive subcall after $\\texttt{dfs(w)}$ is called, but before $\\texttt{dfs(w)}$ returns.</p></section><p data-end=\"6050\" data-start=\"5974\">Which of the following must be true of the graph $G$? <em>(Select all that apply.)</em></p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">There exists a directed path from $v$ to $w$.<br/></span>",
                "<span style=\"display: inline;\">There exists a directed path from $w$ to $v$.<br/></span>",
                "<span style=\"display: inline;\">There does not exist a directed path from $v$ to $w$.<br/></span>",
                "<span style=\"display: inline;\">There exists a directed cycle containing both $v$ and $w$.</span>"
            ],
            "answer": "B",
            "solution": "<div class=\"solution-content\"><a name=\"544777\"></a><div itemprop=\"text\"><p>Since <code data-end=\"608\" data-start=\"600\">dfs(v)</code> is called <strong data-end=\"629\" data-start=\"619\">inside</strong> <code data-end=\"638\" data-start=\"630\">dfs(w)</code>, then <strong data-end=\"696\" data-start=\"645\">w is an ancestor of v in the DFS recursion tree</strong>, hence <strong data-end=\"736\" data-start=\"704\">w → v path definitely exists</strong>.<br/>hence, ans is <strong>B</strong>.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/544726/go-classes-dpp-gate-cs-da-algorithms-recursive-dfs-calls\" target=\"_blank\">GATE Overflow #544726</a></small></div>"
        }
    ]
});

registerTest({
    "name": "DPP 21 - Algorithms (Graph Algorithms (BFS, DFS & Traversals - Part 2)",
    "testLabel": "DPP 21",
    "testType": "DPP",
    "bracket": "Graph Algorithms (BFS, DFS & Traversals - Part 2",
    "subject": "algo",
    "series": "cse-dpp-2027",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 11,
    "topicsCovered": "Graph Algorithms (BFS, DFS & Traversals (Practice Set 2)",
    "questions": [
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"4630\" data-start=\"4533\">Run DFS on a directed graph $G$ computing visit times $pre(v)$ and $post(v)$ for each vertex $v$.</p><p data-end=\"4677\" data-start=\"4632\">An edge $(u,v)$ is a back edge if and only if $pre(v)&lt;pre(u)&lt;post(u)&lt;post(v)$.</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">True<br/></span>",
                "<span style=\"display: inline;\">False</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"544724\"></a><div itemprop=\"text\"><p data-end=\"4809\" data-start=\"4784\">back edge has the form:</p><p data-end=\"4856\" data-start=\"4811\">$\\text{descendant}\\rightarrow\\text{ancestor}$</p><p data-end=\"4888\" data-start=\"4858\">For $(u,v)$ to be a back edge:</p><ul data-end=\"5040\" data-start=\"4890\"><li data-end=\"4924\" data-section-id=\"w13pm8\" data-start=\"4890\">$u$ must be a descendant of $v$.</li><li data-end=\"4972\" data-section-id=\"x2reay\" data-start=\"4925\">Therefore, $v$ must be discovered before $u$.</li><li data-end=\"5040\" data-section-id=\"154koyr\" data-start=\"4973\">DFS must finish exploring $u$ before it can finish exploring $v$.</li></ul><p data-end=\"5076\" data-start=\"5042\">So the events occur in this order:</p><ol data-end=\"5137\" data-start=\"5078\"><li data-end=\"5093\" data-section-id=\"18t2bvj\" data-start=\"5078\">Discover $v$</li><li data-end=\"5109\" data-section-id=\"xokywv\" data-start=\"5094\">Discover $u$</li><li data-end=\"5123\" data-section-id=\"11lcgvy\" data-start=\"5110\">Finish $u$</li><li data-end=\"5137\" data-section-id=\"1r7czve\" data-start=\"5124\">Finish $v$</li></ol><p data-end=\"5144\" data-start=\"5139\">Thus,</p><p data-end=\"5177\" data-start=\"5146\">$pre(v)&lt;pre(u)&lt;post(u)&lt;post(v)$</p><p data-end=\"5231\" data-start=\"5179\">This is exactly the nested-interval property of DFS.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/544723/go-classes-dpp-gate-cs-da-algorithms-dfs-back-edge\" target=\"_blank\">GATE Overflow #544723</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"3218\" data-start=\"3204\">If the DFS tree has no back edges, then there are no cycles in the graph.</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">True<br/></span>",
                "<span style=\"display: inline;\">False</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"544722\"></a><div itemprop=\"text\"><p data-end=\"3454\" data-start=\"3367\">A back edge is an edge that goes from a vertex to one of its ancestors in the DFS tree.</p><p data-end=\"3485\" data-start=\"3456\">Suppose there is a back edge:</p><p data-end=\"3503\" data-start=\"3487\">$u\\rightarrow v$</p><p data-end=\"3537\" data-start=\"3505\">where $v$ is an ancestor of $u$.</p><p data-end=\"3620\" data-start=\"3539\">Because $v$ is an ancestor of $u$, the DFS tree already contains a directed path:</p><p data-end=\"3635\" data-start=\"3622\">$v\\leadsto u$</p><p data-end=\"3658\" data-start=\"3637\">Adding the back edge:</p><p data-end=\"3676\" data-start=\"3660\">$u\\rightarrow v$</p><p data-end=\"3696\" data-start=\"3678\">completes a cycle:</p><p data-end=\"3724\" data-start=\"3698\">$v\\leadsto u\\rightarrow v$</p><p data-end=\"3776\" data-start=\"3726\">More importantly, the reverse property also holds:</p><p data-end=\"3851\" data-start=\"3778\"><strong data-end=\"3851\" data-start=\"3778\">If a directed graph contains a cycle, DFS must encounter a back edge.</strong></p><p data-end=\"3863\" data-start=\"3853\">$\\therefore \\text{Cycle exists} \\iff \\text{DFS has a back edge}$</p><p data-end=\"3994\" data-start=\"3920\">Hence, if DFS contains <strong data-end=\"3959\" data-start=\"3943\">no back edge</strong>, the graph cannot contain a cycle.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/544721/go-classes-dpp-gate-cs-da-algorithms-dfs-cycle-detection\" target=\"_blank\">GATE Overflow #544721</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"1863\" data-start=\"1694\">Let $T$ be a depth-first search tree of a undirected graph. Let $(x,y)$ be an edge of $G$ that is not an edge of $T$, then one of $x$ or $y$ is an ancestor of the other.</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">True<br/></span>",
                "<span style=\"display: inline;\">False</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"544720\"></a><div itemprop=\"text\"><p data-end=\"1993\" data-start=\"1937\">Consider a non-tree edge $(x,y)$ in an undirected graph.</p><p data-end=\"2027\" data-start=\"1995\">Suppose $x$ is discovered first.</p><p data-end=\"2080\" data-start=\"2029\">When DFS explores $x$, there are two possibilities.</p><p data-end=\"2177\" data-start=\"2082\">If $y$ is still unvisited when $(x,y)$ is examined, then DFS would visit $y$ through this edge.</p><p data-end=\"2192\" data-start=\"2179\">In that case, $(x,y)$ would become a <strong data-end=\"2231\" data-start=\"2218\">tree edge</strong>.</p><p data-end=\"2292\" data-start=\"2234\">But the question says that $(x,y)$ is <strong data-end=\"2279\" data-start=\"2272\">not</strong> a tree edge.</p><p data-end=\"2370\" data-start=\"2294\">Therefore, when the edge is examined, $y$ must already have been discovered.</p><p data-end=\"2503\" data-start=\"2372\">In an undirected DFS, this means that one endpoint lies on the active DFS path of the other. </p><p data-end=\"2503\" data-start=\"2372\">Hence one is an ancestor of the other.</p><p data-end=\"2603\" data-start=\"2505\">So every non-tree edge in an undirected DFS is a back edge connecting a descendant to an ancestor.</p><p data-end=\"2615\" data-start=\"2605\"><br/>$\\therefore$ <strong>Answer: A</strong></p><p data-end=\"2615\" data-start=\"2605\"><br/><strong>Note :</strong> This is also why an undirected DFS has only <strong data-end=\"2724\" data-start=\"2695\">tree edges and back edges</strong>, not cross or forward edges.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/544718/go-classes-dpp-gate-cs-da-algorithms-dfs-edge\" target=\"_blank\">GATE Overflow #544718</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"619\" data-start=\"458\">In DFS, if $(u,v)$ is an edge which connects two node such that they do not have any ancestor and a descendant relationship between them, than the edge is called</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">Tree edge<br/></span>",
                "<span style=\"display: inline;\">Back edge<br/></span>",
                "<span style=\"display: inline;\">Forward edge<br/></span>",
                "<span style=\"display: inline;\">Cross edge</span>"
            ],
            "answer": "D",
            "solution": "<div class=\"solution-content\"><a name=\"544715\"></a><div itemprop=\"text\"><p data-end=\"868\" data-start=\"747\">In DFS of a directed graph, edges are classified according to the relationship between their endpoints in the DFS forest.</p><p data-end=\"938\" data-start=\"870\">A <strong data-end=\"885\" data-start=\"872\">tree edge</strong> is an edge through which a new vertex is discovered.</p><p data-end=\"1003\" data-start=\"940\">A <strong data-end=\"955\" data-start=\"942\">back edge</strong> goes from a descendant to one of its ancestors.</p><p data-end=\"1086\" data-start=\"1005\">A <strong data-end=\"1023\" data-start=\"1007\">forward edge</strong> goes from an ancestor to a descendant, but is not a tree edge.</p><p data-end=\"1180\" data-start=\"1088\">A <strong data-end=\"1104\" data-start=\"1090\">cross edge</strong> connects two vertices for which neither vertex is an ancestor of the other.</p><p data-end=\"1264\" data-start=\"1182\">It is mentioned that $u$ and $v$ have <strong data-end=\"1263\" data-start=\"1224\">no ancestor-descendant relationship</strong>.</p><p data-end=\"1290\" data-start=\"1266\">$\\therefore (u,v)$ is a Cross edge.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/544714/go-classes-dpp-gate-cs-da-algorithms-dfs-edge-classification\" target=\"_blank\">GATE Overflow #544714</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"6907\" data-start=\"6875\">Is the following statement true?</p><p data-end=\"7057\" data-start=\"6909\">A DFS of a directed graph always produces the same number of tree edges, i.e. independent of the order in which the vertices are considered for DFS.</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">Yes<br/></span>",
                "<span style=\"display: inline;\">No</span>"
            ],
            "answer": "B",
            "solution": "<div class=\"solution-content\"><a name=\"544540\"></a><div itemprop=\"text\"><p data-end=\"1732\" data-start=\"1704\">Consider the directed graph:</p><p data-end=\"1753\" data-start=\"1737\">$A\\rightarrow B$</p><p style=\"text-align:center\"><img alt=\"\" height=\"302\" src=\"https://cdn.mathpix.com/snip/images/HhjzoPqb1OZ0VjOPKyN3YR7fY7jK2MyjHVF3gUqoOg8.original.fullsize.png\" width=\"569\"/></p><p data-end=\"1837\" data-start=\"1806\"><strong data-end=\"1837\" data-start=\"1806\">Order $\\mathbf{1}:$ Start DFS from $A$</strong></p><p data-end=\"1864\" data-start=\"1839\">DFS reaches $B$ from $A$.</p><p data-end=\"1890\" data-start=\"1866\">Number of DFS trees $=1$</p><p data-end=\"1917\" data-start=\"1892\">Number of tree edges $=1$</p><p data-end=\"1950\" data-start=\"1919\"><strong data-end=\"1950\" data-start=\"1919\">Order $\\mathbf{2}:$ Start DFS from $B$</strong></p><p data-end=\"2065\" data-start=\"1952\">$B$ cannot reach $A$, so DFS first creates a tree containing only $B$. It later starts another DFS tree from $A$.</p><p data-end=\"2091\" data-start=\"2067\">Number of DFS trees $=2$</p><p data-end=\"2118\" data-start=\"2093\">Number of tree edges $=0$</p><p data-end=\"2195\" data-start=\"2120\">Therefore, the number of tree edges depends on the vertex-processing order. </p><p data-end=\"2195\" data-start=\"2120\">i.e, the number of DFS tree edges is not always the same. It depends on the DFS start/order.</p><p data-end=\"2195\" data-start=\"2120\"><br/><strong>Answer : B</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/544535/go-classes-dpp-gate-cs-da-algorithms-dfs-tree-edges\" target=\"_blank\">GATE Overflow #544535</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"5812\" data-start=\"5735\">Suppose we run DFS on an undirected graph, and we discover a vertex $v$ with:</p><p data-end=\"5824\" data-start=\"5814\">$\\mathrm{pre}(v)=1$ and $\\mathrm{post}(v)=2|V|$</p><p data-end=\"5880\" data-start=\"5847\">Then the graph must be connected.</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">True<br/></span>",
                "<span style=\"display: inline;\">False</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"544538\"></a><div itemprop=\"text\"><p data-end=\"5964\" data-start=\"5954\">The value, $pre(v)=1$ means $v$ is the <strong data-end=\"6022\" data-start=\"5995\">first vertex discovered</strong> by DFS.</p><p data-end=\"6042\" data-start=\"6032\">The value, $post(v)=2|V|$ means $v$ is the <strong data-end=\"6102\" data-start=\"6077\">last vertex to finish</strong>.</p><p data-end=\"995\" data-start=\"957\">Therefore, the DFS interval of $v$ is:</p><p data-end=\"1024\" data-start=\"997\">$[pre(v),post(v)]=[1,2|V|]$</p><p data-end=\"6042\" data-start=\"6032\"> </p><p style=\"text-align:center\"><img alt=\"\" height=\"360\" src=\"https://cdn.mathpix.com/snip/images/PLBzQHNa1UMuBsS_vPhpl2HiqbrFPmsdN-seYB-0rOk.original.fullsize.png\" width=\"721\"/></p><p data-end=\"1212\" data-start=\"1072\"><br/>By the DFS parenthesis property, the discovery and finishing interval of every vertex reached during DFS from $v$ lies inside this interval.</p><p data-end=\"1314\" data-start=\"1214\">Since $v$ starts first and finishes last, all other vertices are descendants of $v$ in the DFS tree.</p><p data-end=\"1362\" data-start=\"1316\">Therefore, every vertex is reachable from $v$.</p><p data-end=\"1418\" data-start=\"1364\">Since the graph is undirected, the graph is connected.</p><p data-end=\"6641\" data-start=\"6609\"><br/><b>Answer: A</b></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/544534/go-classes-dpp-gate-cs-da-algorithms-dfs-connectivity\" target=\"_blank\">GATE Overflow #544534</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"4357\" data-start=\"4248\">Suppose a directed graph has a path from vertex $\\text{X}$ to vertex $\\text{Y}$, but no path from vertex $\\text{Y}$ to vertex $\\text{X}$.</p><p data-end=\"4427\" data-start=\"4359\">The relationship between the finish times for depth-first search is:</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\text{finish(X)}<\\text{finish(Y)}$<br/></span>",
                "<span style=\"display: inline;\">$\\text{finish(X)}>\\text{finish(Y)}$<br/></span>",
                "<span style=\"display: inline;\">$\\text{finish(X)}=\\text{finish(Y)}$<br/></span>",
                "<span style=\"display: inline;\">Could be either A or B</span>"
            ],
            "answer": "B",
            "solution": "<div class=\"solution-content\"><a name=\"544537\"></a><div itemprop=\"text\"><p data-end=\"4630\" data-start=\"4601\">There are two possible cases.</p><p data-end=\"4672\" data-section-id=\"xf78i8\" data-start=\"4632\"><strong>Case $\\mathbf{1}:$ DFS discovers $X$ before $Y$</strong></p><p data-end=\"4696\" data-start=\"4674\">Since there is a path:</p><p data-end=\"4712\" data-start=\"4698\">$X \\leadsto Y$</p><p data-end=\"4776\" data-start=\"4714\">DFS from $X$ can eventually discover $Y$ before finishing $X$.</p><p data-end=\"4832\" data-start=\"4778\">Thus, $Y$ becomes a descendant of $X$ in the DFS tree.</p><p style=\"text-align:center\"><img alt=\"\" height=\"399\" src=\"https://cdn.mathpix.com/snip/images/4o1vQy7yyGnpG9tbvD2WFIbmvxLnrJM_-efc6Jx5BNs.original.fullsize.png\" width=\"514\"/></p><p data-end=\"4873\" data-start=\"4834\"> </p><p data-end=\"4963\" data-section-id=\"1n3runn\" data-start=\"4923\"><strong>Case $\\mathbf{2}:$ DFS discovers $Y$ before $X$</strong></p><p data-end=\"5002\" data-start=\"4965\">There is <strong data-end=\"5001\" data-start=\"4974\">no path from $Y$ to $X$</strong>.</p><p data-end=\"5054\" data-start=\"5004\">Therefore, DFS starting from $Y$ cannot reach $X$.</p><p data-end=\"5133\" data-start=\"5056\">DFS completely finishes $Y$ before a later DFS tree starts at or reaches $X$.</p><p data-end=\"5146\" data-start=\"5135\">Thus again, $f(Y)&lt;f(X)$</p><p data-end=\"5187\" data-start=\"5161\">So in both possible cases:</p><p data-end=\"5208\" data-start=\"5189\">$\\boxed{f(X)&gt;f(Y)}$</p><p data-end=\"5220\" data-start=\"5210\"><br/><strong>Answer: B</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/544532/go-classes-dpp-gate-cs-da-algorithms-dfs-finishing-time\" target=\"_blank\">GATE Overflow #544532</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Suppose vertices $A,B,C,D,E,F,G$ are stored in alphabetical order in the graph shown below. </p><p style=\"text-align:center\"><img alt=\"\" height=\"161\" src=\"https://cdn.mathpix.com/snip/images/4_PzaQi9c5Axu8DdbKhu2BOkhe6dqf_0y5qtOp8V-1I.original.fullsize.png\" width=\"231\"/></p><p>What is DFS order of traversing this graph starting from vertex $G$?</p></div></span>",
            "image": "https://cdn.mathpix.com/snip/images/4_PzaQi9c5Axu8DdbKhu2BOkhe6dqf_0y5qtOp8V-1I.original.fullsize.png",
            "options": [
                "<span style=\"display: inline;\">$G,A,B,C,D,E,F$<br/></span>",
                "<span style=\"display: inline;\">$G,A,B,D,C,E,F$<br/></span>",
                "<span style=\"display: inline;\">$G,A,B,C,E,D,F$<br/></span>",
                "<span style=\"display: inline;\">$G,A,B,C,F,E,D$</span>"
            ],
            "answer": "C",
            "solution": "<div class=\"solution-content\"><a name=\"544531\"></a><div itemprop=\"text\"><p data-end=\"3145\" data-start=\"3136\">Start at $G$</p><p data-end=\"3213\" data-start=\"3152\">Its outgoing choices are considered alphabetically, so visit:</p><p data-end=\"3232\" data-start=\"3215\">$G \\rightarrow A$</p><p data-end=\"3283\" data-start=\"3234\">From $A$, the first unvisited adjacent vertex is: $B$</p><p data-end=\"3293\" data-start=\"3290\">So, $G \\rightarrow A \\rightarrow B$</p><p data-end=\"3410\" data-start=\"3328\">From $B$, consider its neighbors alphabetically. </p><p data-end=\"3410\" data-start=\"3328\">Vertex $C$ is visited before $D$:</p><p data-end=\"3429\" data-start=\"3412\">$B \\rightarrow C$</p><p data-end=\"3470\" data-start=\"3431\">From $C$, the next unvisited choice is $E$</p><p data-end=\"3482\" data-start=\"3477\">Then, $E \\rightarrow D$</p><p data-end=\"3562\" data-start=\"3503\">Vertex $D$ has no new vertex to explore, so DFS backtracks.</p><p data-end=\"3647\" data-start=\"3564\">After all reachable choices along this branch are completed, vertex $F$ is visited.</p><p data-end=\"3659\" data-start=\"3649\">$\\therefore G,A,B,C,E,D,F$</p><p data-end=\"3684\" data-start=\"3678\"><br/><strong>Answer: C</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/544530/go-classes-dpp-gate-cs-da-algorithms-dfs-traversal\" target=\"_blank\">GATE Overflow #544530</a></small></div>"
        },
        {
            "marks": 2,
            "neg": 0,
            "type": "MSQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"443\" data-start=\"389\">Find a DFS traversal for the following directed graph:</p><p style=\"text-align:center\"><img alt=\"\" height=\"312\" src=\"https://cdn.mathpix.com/snip/images/0MQyqHso3x_Kzdr5upNZSCOBHQThcuYKSuaG9Se55xg.original.fullsize.png\" width=\"313\"/></p><p data-end=\"443\" data-start=\"389\"> </p></div></span>",
            "image": "https://cdn.mathpix.com/snip/images/0MQyqHso3x_Kzdr5upNZSCOBHQThcuYKSuaG9Se55xg.original.fullsize.png",
            "options": [
                "<span style=\"display: inline;\">$10 \\rightarrow 6 \\rightarrow 2 \\rightarrow 3 \\rightarrow 7 \\rightarrow 5 \\rightarrow 1 \\rightarrow 0 \\rightarrow 4 \\rightarrow 11 \\rightarrow 9 \\rightarrow 13 \\rightarrow 12 \\rightarrow 8 \\rightarrow 14 \\rightarrow 15$<br/></span>",
                "<span style=\"display: inline;\">$9 \\rightarrow 5 \\rightarrow 1 \\rightarrow 0 \\rightarrow 13 \\rightarrow 12 \\rightarrow 8 \\rightarrow 4 \\rightarrow 2 \\rightarrow 3 \\rightarrow 6 \\rightarrow 10 \\rightarrow 14 \\rightarrow 15 \\rightarrow 7 \\rightarrow 3 \\rightarrow 11$<br/></span>",
                "<span style=\"display: inline;\">$2 \\rightarrow 3 \\rightarrow 6 \\rightarrow 7 \\rightarrow 10 \\rightarrow 11 \\rightarrow 14 \\rightarrow 15 \\rightarrow 9 \\rightarrow 5 \\rightarrow 1 \\rightarrow 0 \\rightarrow 8 \\rightarrow 4 \\rightarrow 13 \\rightarrow 12$<br/></span>",
                "<span style=\"display: inline;\">$11 \\rightarrow 7 \\rightarrow 3 \\rightarrow 10 \\rightarrow 6 \\rightarrow 2 \\rightarrow 9 \\rightarrow 5 \\rightarrow 1 \\rightarrow 0 \\rightarrow 8 \\rightarrow 4 \\rightarrow 13 \\rightarrow 12 \\rightarrow 14 \\rightarrow 15$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"544529\"></a><div itemprop=\"text\"><p data-end=\"1436\" data-start=\"1409\">Start DFS from vertex $10$.</p><p data-end=\"1482\" data-start=\"1438\">One possible choice of outgoing edges gives:</p><p data-end=\"1502\" data-start=\"1484\">$10 \\rightarrow 6$</p><p data-end=\"1532\" data-start=\"1504\">From $6$, go deeper through:</p><p data-end=\"1565\" data-start=\"1534\">$6 \\rightarrow 2 \\rightarrow 3$</p><p data-end=\"1626\" data-start=\"1567\">Vertex $3$ has no new outgoing vertex, so backtrack to $6$.</p><p data-end=\"1633\" data-start=\"1628\">Next:</p><p data-end=\"1652\" data-start=\"1635\">$6 \\rightarrow 7$</p><p data-end=\"1722\" data-start=\"1654\">Vertex $7$ leads to $3$, which is already visited, so return to $6$.</p><p data-end=\"1729\" data-start=\"1724\">Then:</p><p data-end=\"1776\" data-start=\"1731\">$6 \\rightarrow 5 \\rightarrow 1 \\rightarrow 0$</p><p data-end=\"1808\" data-start=\"1778\">After returning to $5$, visit:</p><p data-end=\"1827\" data-start=\"1810\">$5 \\rightarrow 4$</p><p data-end=\"1852\" data-start=\"1829\">Thus the first part is:</p><p data-end=\"1874\" data-start=\"1854\">$10,6,2,3,7,5,1,0,4$</p><p data-end=\"1891\" data-start=\"1876\">Return to $10$.</p><p data-end=\"1904\" data-start=\"1893\">Next visit:</p><p data-end=\"1925\" data-start=\"1906\">$10 \\rightarrow 11$</p><p data-end=\"1968\" data-start=\"1927\">Vertex $11$ leads to already visited $7$.</p><p data-end=\"1983\" data-start=\"1970\">Then explore:</p><p data-end=\"2003\" data-start=\"1985\">$10 \\rightarrow 9$</p><p data-end=\"2014\" data-start=\"2005\">From $9$:</p><p data-end=\"2049\" data-start=\"2016\">$9 \\rightarrow 13 \\rightarrow 12$</p><p data-end=\"2077\" data-start=\"2051\">After backtracking to $9$:</p><p data-end=\"2096\" data-start=\"2079\">$9 \\rightarrow 8$</p><p data-end=\"2138\" data-start=\"2098\">Vertex $8$ leads to already visited $4$.</p><p data-end=\"2177\" data-start=\"2140\">So the DFS tree rooted at $10$ gives:</p><p data-end=\"2212\" data-start=\"2179\">$10,6,2,3,7,5,1,0,4,11,9,13,12,8$</p><p data-end=\"2274\" data-start=\"2214\">Vertices $14$ and $15$ are still unvisited, so DFS restarts:</p><p data-end=\"2295\" data-start=\"2276\">$14 \\rightarrow 15$</p><p data-end=\"2329\" data-start=\"2297\">Hence the complete traversal is:</p><p data-end=\"2378\" data-start=\"2331\">$\\boxed{10,6,2,3,7,5,1,0,4,11,9,13,12,8,14,15}$</p><p data-end=\"2390\" data-start=\"2380\">$\\therefore$ <strong>Answer: A</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/544528/go-classes-dpp-gate-cs-da-algorithms-dfs-traversal\" target=\"_blank\">GATE Overflow #544528</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"2029\" data-start=\"1857\">Let $T$ be a breadth-first search tree of a undirected graph. Let $(x, y)$ be an edge of $G$ that is not an edge of $T$, then one of $x$ or $y$ is an ancestor of the other.</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">True<br/></span>",
                "<span style=\"display: inline;\">False</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"544080\"></a><div itemprop=\"text\"><p data-end=\"2144\" data-start=\"2104\">Consider a BFS starting from source $s$.</p><p data-end=\"2154\" data-start=\"2146\">Suppose,</p><p data-end=\"2159\" data-start=\"2156\">$s$ has two children: $x$ and $y$ and there is also an edge: $(x,y)$</p><p data-end=\"2252\" data-start=\"2230\">The BFS tree contains $(s,x)$ and $(s,y)$.</p><p data-end=\"2321\" data-start=\"2278\">Both $x$ and $y$ lie at the same BFS level:</p><p data-end=\"2340\" data-start=\"2323\">$d(s,x)=d(s,y)=1$</p><p data-end=\"2351\" data-start=\"2342\">The edge $(x,y)$ is an edge of the original graph but is <strong data-end=\"2409\" data-start=\"2402\">not</strong> a BFS-tree edge.</p><p data-end=\"2482\" data-start=\"2428\">Also, neither $x$ nor $y$ is an ancestor of the other.</p><p data-end=\"2576\" data-start=\"2484\">Therefore, a non-tree edge in BFS does not necessarily connect an ancestor and a descendant.</p><p data-end=\"2644\" data-start=\"2578\">In fact, for an undirected graph, an edge can connect vertices on:</p><ul data-end=\"2700\" data-start=\"2646\"><li data-end=\"2670\" data-section-id=\"1unygbf\" data-start=\"2646\">the same BFS level, or<br/> </li><li data-end=\"2700\" data-section-id=\"o4r5as\" data-start=\"2671\">two consecutive BFS levels.<br/> </li></ul><p data-end=\"2856\" data-start=\"2702\">Thus the statement is false.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/544079/go-classes-dpp-gate-cs-da-algorithms-bfs-tree\" target=\"_blank\">GATE Overflow #544079</a></small></div>"
        }
    ]
});

registerTest({
    "name": "DPP 22 - Algorithms (Graph Algorithms (BFS, DFS & Traversals - Part 3)",
    "testLabel": "DPP 22",
    "testType": "DPP",
    "bracket": "Graph Algorithms (BFS, DFS & Traversals - Part 3",
    "subject": "algo",
    "series": "cse-dpp-2027",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 13,
    "topicsCovered": "Graph Algorithms (BFS, DFS & Traversals (Practice Set 3)",
    "questions": [
        {
            "marks": 2,
            "neg": 0,
            "type": "MSQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"4767\" data-start=\"4695\">BFS is performed from the root of a binary tree containing $n$ vertices.</p><p data-end=\"4857\" data-start=\"4769\">For which type of binary tree can BFS require $\\Theta(n)$ extra space in the worst case?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">A completely skewed binary tree<br/></span>",
                "<span style=\"display: inline;\">A complete balanced binary tree<br/></span>",
                "<span style=\"display: inline;\">A tree having exactly one vertex at every level<br/></span>",
                "<span style=\"display: inline;\">A path containing all $n$ vertices</span>"
            ],
            "answer": "B",
            "solution": "<div class=\"solution-content\"><a name=\"544078\"></a><div itemprop=\"text\"><p data-end=\"5190\" data-start=\"5101\">BFS stores vertices that have been discovered but have not yet been processed in a queue.</p><p data-end=\"5278\" data-start=\"5192\">Therefore, the maximum space used by BFS depends on the <strong data-end=\"5265\" data-start=\"5248\">maximum width</strong> of the tree.</p><p data-end=\"5312\" data-start=\"5280\">Consider a complete binary tree.</p><p data-end=\"5327\" data-start=\"5314\">At level $0: 1$ vertex</p><p data-end=\"5354\" data-start=\"5341\">At level $1: 2$ vertices</p><p data-end=\"5383\" data-start=\"5370\">At level $2: 4$ vertices</p><p data-end=\"5412\" data-start=\"5399\">At level $k: 2^k$ vertices</p><p data-end=\"5548\" data-start=\"5430\">For a complete binary tree containing $n$ vertices, the final full level contains a constant fraction of all vertices.</p><p data-end=\"5596\" data-start=\"5550\">Thus, at some point the BFS queue can contain $\\Theta(n)$ vertices simultaneously. </p><p data-end=\"5596\" data-start=\"5550\">Now consider a skewed tree or a path.</p><p data-end=\"5950\" data-start=\"5834\">There is only a constant number of vertices at each level, so the BFS queue contains only $O(1)$ vertices at a time.</p><p data-end=\"5962\" data-start=\"5952\"><br/>$\\therefore$ <strong>Answer: B</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/544077/go-classes-dpp-gate-cs-da-algorithms-bfs-maximum-space\" target=\"_blank\">GATE Overflow #544077</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"3141\" data-start=\"3030\">Breadth-first search (BFS) will visit every vertex in a directed graph, in nondecreasing order from the source.</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">True<br/></span>",
                "<span style=\"display: inline;\">False</span>"
            ],
            "answer": "B",
            "solution": "<div class=\"solution-content\"><a name=\"544075\"></a><div itemprop=\"text\"><p data-end=\"3295\" data-start=\"3216\">BFS starting from a source $s$ visits vertices that are <strong data-end=\"3294\" data-start=\"3272\">reachable from $s$</strong>.</p><p data-end=\"3390\" data-start=\"3297\">For the reachable vertices, BFS visits them in nondecreasing shortest-path distance from $s$.</p><p data-end=\"3404\" data-start=\"3392\">For example:</p><p data-end=\"3417\" data-start=\"3406\">$L_0={s}$</p><p data-end=\"3450\" data-start=\"3419\">$L_1=$ vertices at distance $1$</p><p data-end=\"3483\" data-start=\"3452\">$L_2=$ vertices at distance $2$</p><p data-end=\"3495\" data-start=\"3485\">and so on.</p><p data-end=\"3573\" data-start=\"3497\">But in a directed graph, some vertices may not be reachable from $s$ at all.</p><p data-end=\"3584\" data-start=\"3575\">Consider:</p><p data-end=\"3615\" data-start=\"3586\">$s\\rightarrow a\\rightarrow b$</p><p data-end=\"3657\" data-start=\"3617\">and another isolated directed component:</p><p data-end=\"3675\" data-start=\"3659\">$c\\rightarrow d$</p><p data-end=\"3706\" data-start=\"3677\">Starting BFS from $s$ visits:</p><p data-end=\"3715\" data-start=\"3708\">$s,a,b$</p><p data-end=\"3739\" data-start=\"3717\">but it does not visit:</p><p data-end=\"3746\" data-start=\"3741\">$c,d$</p><p data-end=\"3819\" data-start=\"3748\">Therefore, the statement that BFS will visit <strong data-end=\"3809\" data-start=\"3793\">every vertex</strong> is false.</p><p data-end=\"3845\" data-start=\"3821\">The correct property is:</p><p data-end=\"4072\" data-start=\"3847\">BFS visits every vertex <strong data-end=\"3893\" data-start=\"3871\">reachable from $s$</strong> in nondecreasing shortest-path distance from $s$.</p><p data-end=\"4080\" data-start=\"4074\"><br/><strong>Answer: B</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/544074/go-classes-dpp-gate-cs-da-algorithms-bfs-in-di-graph\" target=\"_blank\">GATE Overflow #544074</a></small></div>"
        },
        {
            "marks": 2,
            "neg": 0,
            "type": "MSQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"711\" data-start=\"646\">Consider the standard BFS algorithm, except for one modification:</p><p data-end=\"839\" data-start=\"713\">A vertex is marked as visited <strong data-end=\"785\" data-start=\"743\">only when it is removed from the queue</strong>, instead of when it is first inserted into the queue.</p><p data-end=\"874\" data-start=\"841\">Which of the following can occur?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">The same vertex may be inserted into the queue multiple times.<br/></span>",
                "<span style=\"display: inline;\">The number of queue insertions can become exponentially larger than in standard BFS.<br/></span>",
                "<span style=\"display: inline;\">If predecessor/distance information is updated whenever a vertex is inserted, the shortest-path information may become incorrect.<br/></span>",
                "<span style=\"display: inline;\">Every vertex is still inserted into the queue exactly once.</span>"
            ],
            "answer": [
                "A"
            ],
            "solution": "<div class=\"solution-content\"><a name=\"544073\"></a><div itemprop=\"text\"><p data-end=\"1377\" data-start=\"1285\">In standard BFS, a vertex is marked as soon as it is discovered and inserted into the queue.</p><p data-end=\"1462\" data-start=\"1379\">Therefore, once a vertex $v$ is discovered, another vertex cannot insert $v$ again.</p><p data-end=\"1531\" data-start=\"1464\">Now suppose marking is delayed until $v$ is removed from the queue.</p><p data-end=\"1590\" data-start=\"1533\">Assume two vertices $u$ and $w$ both have an edge to $v$.</p><p data-end=\"1650\" data-start=\"1592\">If $u$ processes $v$ first, it inserts $v$ into the queue.</p><p data-end=\"1678\" data-start=\"1652\">But $v$ is still unmarked.</p><p data-end=\"1771\" data-start=\"1680\">Before $v$ is removed, $w$ may also process the edge to $v$ and insert another copy of $v$.</p><p data-end=\"1831\" data-start=\"1773\">Therefore, the same vertex can be inserted multiple times.</p><p data-end=\"1849\" data-start=\"1833\">So <strong>A is correct.</strong></p><p data-end=\"2127\" data-start=\"1851\">In graphs containing many different paths to the same vertices, this repeated insertion can multiply rapidly. </p><p data-end=\"2127\" data-start=\"1851\">The number of queue entries can become exponentially large. </p><p data-end=\"2127\" data-start=\"1851\">This is one reason vertices must be marked when they are discovered.</p><p data-end=\"2145\" data-start=\"2129\">So <strong>B is correct.</strong></p><p data-end=\"2346\" data-start=\"2147\">If predecessor or distance information is overwritten whenever another copy of the vertex is inserted, a later and longer path can replace information obtained from the first shortest-path discovery.</p><p data-end=\"2438\" data-start=\"2348\">Therefore, the usual BFS shortest-path guarantee can be lost under such an implementation.</p><p data-end=\"2456\" data-start=\"2440\">So <strong>C is correct.</strong></p><p data-end=\"2525\" data-start=\"2458\"><strong>D is</strong> clearly <strong>false</strong> because a vertex may be inserted multiple times.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/544072/go-classes-dpp-gate-cs-da-algorithms-bfs-queue\" target=\"_blank\">GATE Overflow #544072</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"2558\" data-start=\"2483\">You can detect whether a graph $G=(V,E)$ is bipartite in $O(|V|+|E|)$ time.</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">True<br/></span>",
                "<span style=\"display: inline;\">False</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"543909\"></a><div itemprop=\"text\"><p data-end=\"2765\" data-start=\"2632\">A graph is bipartite if its vertices can be divided into two sets such that every edge connects vertices belonging to different sets.</p><p data-end=\"2794\" data-start=\"2767\">We can test this using BFS.</p><p data-end=\"2844\" data-start=\"2796\">Start BFS from a vertex and assign it color $0$.</p><p data-end=\"2904\" data-start=\"2846\">All vertices at the next BFS level are assigned color $1$.</p><p data-end=\"2951\" data-start=\"2906\">The next level receives color $0$, and so on.</p><p data-end=\"2958\" data-start=\"2953\">Thus, $L_0,L_2,L_4,\\ldots$ receive one color,</p><p data-end=\"2958\" data-start=\"2953\">while, $L_1,L_3,L_5,\\ldots$ receive the other color.</p><p data-end=\"3093\" data-start=\"3057\">While processing every edge $(u,v)$:</p><ul data-end=\"3221\" data-start=\"3095\"><li data-end=\"3155\" data-section-id=\"1lbovtu\" data-start=\"3095\">If $u$ and $v$ have different colors, there is no problem.<br/> </li><li data-end=\"3221\" data-section-id=\"azbpsn\" data-start=\"3156\">If $u$ and $v$ have the same color, the graph is not bipartite.</li></ul><p data-end=\"3302\" data-start=\"3223\">For a disconnected graph, simply start another BFS from every unvisited vertex.</p><p data-end=\"3405\" data-start=\"3304\">Using adjacency lists, BFS examines every vertex once and every edge only a constant number of times.</p><p data-end=\"3417\" data-start=\"3407\">$\\therefore T(V,E)=O(|V|+|E|)$<br/> </p><p data-end=\"3446\" data-start=\"3440\">$\\Rightarrow$ <strong>Answer: A</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/543908/go-classes-dpp-gate-cs-da-algorithms-bipartite-graph\" target=\"_blank\">GATE Overflow #543908</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"1002\" data-start=\"931\">Let $G=(V,E)$ be a graph where its BFS tree contains at least 3 layers.</p><p data-end=\"1117\" data-start=\"1004\">Consider the cut $(L_0 \\cup L_1,L_2)$, i.e., all nodes that are $2$ edges away from $s$ form one side of the cut.</p><p data-end=\"1164\" data-start=\"1119\">All edges which cross the cut are tree edges.</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">True<br/></span>",
                "<span style=\"display: inline;\">False</span>"
            ],
            "answer": "B",
            "solution": "<div class=\"solution-content\"><a name=\"543907\"></a><div itemprop=\"text\"><p data-end=\"1253\" data-start=\"1239\">In a BFS tree:</p><p data-end=\"1281\" data-start=\"1255\">$L_0$ contains the source.</p><p data-end=\"1323\" data-start=\"1283\">$L_1$ contains vertices at distance $1$.</p><p data-end=\"1365\" data-start=\"1325\">$L_2$ contains vertices at distance $2$.</p><p data-end=\"1398\" data-start=\"1367\">Consider a vertex $v$ in $L_2$.</p><p data-end=\"1462\" data-start=\"1400\">Suppose $v$ is connected to two vertices $u$ and $w$ in $L_1$.</p><p data-end=\"1546\" data-start=\"1464\">During BFS, whichever of $u$ or $w$ discovers $v$ first creates the BFS tree edge.</p><p data-end=\"1560\" data-start=\"1548\">For eg, $(u,v)$ is a tree edge.</p><p data-end=\"1591\" data-start=\"1587\">But, $(w,v)$ can still be an edge of the original graph without being part of the BFS tree.</p><p data-end=\"1760\" data-start=\"1682\">Both edges cross from $L_1$ to $L_2$, but only one is necessarily a tree edge.</p><p data-end=\"1824\" data-start=\"1762\">Therefore, not every edge crossing the cut is a BFS tree edge.</p><p data-end=\"1832\" data-start=\"1826\"><br/>$\\Rightarrow$<strong> Answer: B</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/543906/go-classes-dpp-gate-cs-da-algorithms-bfs-tree\" target=\"_blank\">GATE Overflow #543906</a></small></div>"
        },
        {
            "marks": 2,
            "neg": 0,
            "type": "MSQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"2687\" data-start=\"2538\">If you perform a breadth-first search (BFS) on the given graph, starting from node $6$, which of the edges of the graph will be part of the BFS tree?</p><p data-end=\"2750\" data-start=\"2689\">Assume that ties are broken in favor of lower-numbered nodes.</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$(6,4)$<br/></span>",
                "<span style=\"display: inline;\">$(6,5)$<br/></span>",
                "<span style=\"display: inline;\">$(4,3)$<br/></span>",
                "<span style=\"display: inline;\">$(4,2)$<br/></span>",
                "<span style=\"display: inline;\">$(5,4)$<br/></span>",
                "<span style=\"display: inline;\">$(5,2)$<br/></span>",
                "<span style=\"display: inline;\">$(5,1)$<br/></span>",
                "<span style=\"display: inline;\">$(2,1)$</span>"
            ],
            "answer": [
                "A",
                "B",
                "C",
                "D"
            ],
            "solution": "<div class=\"solution-content\"><a name=\"543896\"></a><div itemprop=\"text\"><p data-end=\"2931\" data-start=\"2916\">Start BFS from: $6$</p><p data-end=\"2972\" data-start=\"2938\">The outgoing neighbors of $6$ are: $4,5$</p><p data-end=\"3022\" data-start=\"2981\">So both are discovered directly from $6$.</p><p data-end=\"3039\" data-start=\"3024\">BFS tree edges:</p><p data-end=\"3048\" data-start=\"3041\">$(6,4)$</p><p data-end=\"3057\" data-start=\"3050\">$(6,5)$</p><p data-end=\"3065\" data-start=\"3059\">Queue:</p><p data-end=\"3074\" data-start=\"3067\">$[4,5]$</p><p data-end=\"3092\" data-start=\"3076\">Now process $4$.</p><p data-end=\"3146\" data-start=\"3094\">Its undiscovered outgoing neighbors are $2$ and $3$.</p><p data-end=\"3163\" data-start=\"3148\">Therefore, add:</p><p data-end=\"3172\" data-start=\"3165\">$(4,2)$</p><p data-end=\"3181\" data-start=\"3174\">$(4,3)$</p><p data-end=\"3200\" data-start=\"3183\">Next process $5$.</p><p data-end=\"3276\" data-start=\"3202\">Vertices $4$ and $2$ have already been discovered, but vertex $1$ has not.</p><p data-end=\"3293\" data-start=\"3278\">Therefore, add:</p><p data-end=\"3302\" data-start=\"3295\">$(5,1)$</p><p data-end=\"3377\" data-start=\"3304\">When vertex $2$ is later processed, vertex $1$ is already discovered, so $(2,1)$ is not a BFS-tree edge.</p><p data-end=\"3467\" data-start=\"3413\">Hence, the BFS-tree edges among the given choices are:</p><p data-end=\"3508\" data-start=\"3469\">$\\boxed{(6,4),(6,5),(4,3),(4,2),(5,1)}$</p><p data-end=\"3520\" data-start=\"3510\"><br/><strong>Answer : A, B, C, D and G</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/543895/go-classes-dpp-gate-cs-da-algorithms-bfs-tree-edges\" target=\"_blank\">GATE Overflow #543895</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"901\" data-start=\"734\">Consider two vertices $x$ and $y$ that are simultaneously on the FIFO queue at some point during the execution of breadth-first search from $s$ in an undirected graph.</p><p data-end=\"935\" data-start=\"903\">Which of the following are true?</p><p data-end=\"1284\" data-start=\"1243\"> </p><p><strong>Given Details:</strong></p><ul><li>The number of edges on the shortest path between $s$ and $x$ is at most one more than the number of edges on the shortest path between $s$ and $y$.</li><li>The number of edges on the shortest path between $s$ and $x$ is at least one less than the number of edges on the shortest path between $s$ and $y$.</li><li>There is a path between $x$ and $y$.</li></ul></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">I only</span>",
                "<span style=\"display: inline;\">I and II only</span>",
                "<span style=\"display: inline;\">I and III only</span>",
                "<span style=\"display: inline;\">I, II and III</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"543894\"></a><div itemprop=\"text\"><p data-end=\"1430\" data-start=\"1426\">Let,</p><p data-end=\"1444\" data-start=\"1432\">$d_x=d(s,x)$</p><p data-end=\"1458\" data-start=\"1446\">$d_y=d(s,y)$</p><p data-end=\"1497\" data-start=\"1460\">BFS explores vertices level by level.</p><p data-end=\"1595\" data-start=\"1499\">At any instant, the FIFO queue can contain vertices from at most <strong data-end=\"1594\" data-start=\"1564\">two consecutive BFS levels</strong>.</p><p data-end=\"1607\" data-start=\"1597\">$\\therefore |d_x-d_y|\\leq1$</p><p data-end=\"1630\" data-start=\"1627\">$\\Rightarrow d_x\\leq d_y+1$</p><p data-end=\"1676\" data-start=\"1649\">Hence, Statement I is true.</p><p data-end=\"1683\" data-start=\"1678\">Also,</p><p data-end=\"1700\" data-start=\"1685\">$d_x\\geq d_y-1$</p><p data-end=\"1730\" data-start=\"1702\">Hence, Statement II is true.</p><p data-end=\"1799\" data-start=\"1732\">Now both $x$ and $y$ have been discovered by BFS starting from $s$.</p><p data-end=\"1828\" data-start=\"1801\">Therefore, there is a path,</p><p data-end=\"1893\" data-start=\"1830\">$x\\rightarrow\\cdots\\rightarrow s\\rightarrow\\cdots\\rightarrow y$</p><p data-end=\"1927\" data-start=\"1895\">because the graph is undirected.</p><p data-end=\"1963\" data-start=\"1929\">Hence, Statement III is also true.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/543893/go-classes-dpp-gate-cs-da-algorithms-bfs-queue\" target=\"_blank\">GATE Overflow #543893</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>A project manager has broken down a project into $8$ tasks: $A, B, C, D, E, F, G,$ and $H$. The dependencies between the tasks are shown in the directed graph below. A valid \"work plan\" is any sequence of tasks that respects all dependencies (i.e., a topological ordering).</p><p>The dependencies are as follows:<br/><br/> </p><p style=\"text-align:center\"><img alt=\"\" height=\"312\" src=\"https://cdn.mathpix.com/snip/images/UaCKjZ-TxBZPjfCXVzo_bpqjenxwvPX_nhEBnlssKcM.original.fullsize.png\" width=\"432\"/></p><p>How many distinct valid work plans exist for this project?</p></div></span>",
            "image": "https://cdn.mathpix.com/snip/images/UaCKjZ-TxBZPjfCXVzo_bpqjenxwvPX_nhEBnlssKcM.original.fullsize.png",
            "options": [],
            "answer": "42",
            "solution": "<div class=\"solution-content\"><a name=\"511221\"></a><div itemprop=\"text\">42</div><br><br><small>Source: <a href=\"https://gateoverflow.in/490386/go-classes-dpp-algorithm-topological-sort\" target=\"_blank\">GATE Overflow #490386</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p><b id=\"docs-internal-guid-85631584-7fff-b826-ac32-64939aac2447\"><img alt=\"\" height=\"232\" src=\"https://gateoverflow.in/?qa=blob&amp;qa_blobid=3962750493136265628\" width=\"262\"/></b></p><p>Among the following sequences:<br/><br/>I. $GDFHACBE$<br/><br/>II. $GHFACDBE$<br/><br/>III. $GHDACFBE$<br/><br/>IV. $GFDHCABE$</p><p>Which of the following are possible breadth-first traversals of the graph, starting from node G?</p></div></span>",
            "image": "https://gateoverflow.in/?qa=blob&qa_blobid=3962750493136265628",
            "options": [
                "<span style=\"display: inline;\">I and III only<br/></span>",
                "<span style=\"display: inline;\">II and IV only<br/></span>",
                "<span style=\"display: inline;\">I and IV only<br/></span>",
                "<span style=\"display: inline;\">II and III only</span>"
            ],
            "answer": "C",
            "solution": "<div class=\"solution-content\"><a name=\"489521\"></a><div itemprop=\"text\">Option C . I and IV only<br/> <br/> Reason : The closest neighbours for G are H,D and F. They have to come in the next 3 places after 'G' in any order. And only I and IV does that. Also that is the only option satisfying the given condition, hence the correct anwer.</div><br><br><small>Source: <a href=\"https://gateoverflow.in/489486/go-classes-dpp-algorithm-bfs\" target=\"_blank\">GATE Overflow #489486</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p><b id=\"docs-internal-guid-9f3ae37d-7fff-01cb-b574-d6d3b3496f61\"><img alt=\"\" height=\"203\" src=\"https://gateoverflow.in/?qa=blob&amp;qa_blobid=3360815249517570517\" width=\"244\"/></b></p><p>Among the following sequences:<br/><br/>I. $A B E C F G D H$<br/><br/>II. $A D G F C H B E$<br/><br/>III. $ACFGBDEH$<br/><br/>IV. $ADHFGCBE$</p><p>Which of the following are possible depth-first traversals (DFS) of the graph, starting from node $A$ ?</p></div></span>",
            "image": "https://gateoverflow.in/?qa=blob&qa_blobid=3360815249517570517",
            "options": [
                "<span style=\"display: inline;\">I and II only<br/></span>",
                "<span style=\"display: inline;\">I and III only<br/></span>",
                "<span style=\"display: inline;\">II and IV only<br/></span>",
                "<span style=\"display: inline;\">III and IV only</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"511602\"></a><div itemprop=\"text\">A</div><br><br><small>Source: <a href=\"https://gateoverflow.in/489485/go-classes-dpp-algorithm-dfs\" target=\"_blank\">GATE Overflow #489485</a></small></div>"
        }
    ]
});

registerTest({
    "name": "DPP 23 - Algorithms (Graph Algorithms (BFS, DFS & Traversals - Part 4)",
    "testLabel": "DPP 23",
    "testType": "DPP",
    "bracket": "Graph Algorithms (BFS, DFS & Traversals - Part 4",
    "subject": "algo",
    "series": "cse-dpp-2027",
    "date": "Nov 03, 2026",
    "duration": "18 Min",
    "totalMarks": 7,
    "topicsCovered": "Graph Algorithms (BFS, DFS & Traversals (Practice Set 4)",
    "questions": [
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p><b id=\"docs-internal-guid-e09d5142-7fff-0ba0-cce1-5be8a3503835\"><img alt=\"\" height=\"160\" src=\"https://gateoverflow.in/?qa=blob&amp;qa_blobid=7546236697378743778\" width=\"165\"/></b></p><p>Among the following sequences:<br/><br/>I. abefgh<br/><br/>II. afehbg<br/><br/>III. abghef<br/><br/>IV. aebfhg</p><p>Which are the possible depth-first traversals of the modified graph, starting from node 'a'?</p></div></span>",
            "image": "https://gateoverflow.in/?qa=blob&qa_blobid=7546236697378743778",
            "options": [
                "<span style=\"display: inline;\">I and III only<br/></span>",
                "<span style=\"display: inline;\">III and IV only<br/></span>",
                "<span style=\"display: inline;\">II and III only<br/></span>",
                "<span style=\"display: inline;\">IV only</span>"
            ],
            "answer": "D",
            "solution": "<div class=\"solution-content\"><a name=\"489600\"></a><div itemprop=\"text\"><p>Sequence I : abe<span style=\"color:#c0392b;\"><span style=\"text-decoration: line-through;\">f</span></span> : `e` has an unvisited neighbour \"g\"<br/>Sequence II : af<span style=\"color:#c0392b;\"><span style=\"text-decoration: line-through;\">e </span></span> : 'f' has an unvisited neighbour \"b\" and also \"h\"<br/>Sequence III : abgh<span style=\"color:#c0392b;\"><span style=\"text-decoration: line-through;\">e</span></span> : h has an unvisited neighbour \"f\"<br/>Sequence IV : <span style=\"color:#27ae60;\">aebfhg</span> ✓<br/><br/>Option D : Only IV</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/489484/go-classes-dpp-algorithm-dfs\" target=\"_blank\">GATE Overflow #489484</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider a state space of positive integers from 1 to 100 , where the start state is 1. The successor function for a state numbered $n$ returns two states: $n * 2$ and $n + 3$. Any successor state greater than 100 is considered invalid and is ignored.</p><p>Assume that for any state, the valid successor $n * 2$ is explored before $n+3$, and that previously expanded states are not revisited.</p><p>Which ONE of the following statements about breadth-first search (BFS) and depth-first search (DFS) is true when reaching the goal state number 10 ?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">BFS EXPANDS MORE STATES THAN DFS.<br/></span>",
                "<span style=\"display: inline;\">DFS EXPANDS MORE STATES THAN BFS.<br/></span>",
                "<span style=\"display: inline;\">BOTH BFS AND DFS EXPAND AN EQUAL NUMBER OF STATES.<br/></span>",
                "<span style=\"display: inline;\">NEITHER BFS NOR DFS CAN REACH THE GOAL STATE NUMBER 10.</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"489125\"></a><div itemprop=\"text\">BFS (level-order, stop when 10 is generated):<br/> Expand 1 → discover 2, 4 (expanded: 1)<br/> Expand 2 → discover 5 (expanded: 2)<br/> Expand 4 → discover 8, 7 (expanded: 3)<br/> Expand 5 → discover 10 (goal) (expanded: 4)<br/> BFS expansions before finding 10 = 4 (nodes expanded: 1, 2, 4, 5)<br/> <br/> DFS (depth-first, always follow n*2 first, recursive style):<br/> Expand 1 → recurse to 2 (expanded: 1)<br/> Expand 2 → recurse to 4 (expanded: 2)<br/> Expand 4 → recurse to 8 (expanded: 3)<br/> Expand 8 → recurse to 16 (expanded: 4)<br/> Expand 16 → recurse to 32 (expanded: 5)<br/> Expand 32 → recurse to 64 (expanded: 6)<br/> Expand 64 → try 64*2 (128 invalid), then 64+3=67 → expand 67 (expanded: 7)<br/> ... DFS continues deeply along +3 chains and backtracks, only after exhausting that deep subtree does it return to 2 and finally try 2+3=5 → then 5*2 = 10<br/> So DFS expands at least the doubling chain 1,2,4,8,16,32,64 (7 nodes) before it even reaches 5; in practice it expands many more nodes while exploring the deep subtree rooted at 64 before returning. Therefore DFS expands strictly more states than BFS.<br/> </div><br><br><small>Source: <a href=\"https://gateoverflow.in/488319/go-classes-dpp-algorithm-graph-search\" target=\"_blank\">GATE Overflow #488319</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>G is an undirected graph with vertex set ( $\\mathrm{v} 1, \\mathrm{v} 2, \\mathrm{v3}, \\mathrm{v4}, \\mathrm{v5}, \\mathrm{v6}, \\mathrm{v7}$ ) and edge set [ $\\mathrm{v} 1 \\mathrm{v2}$, $\\mathrm{v1v3}, \\mathrm{v1v4}, \\mathrm{v2v4}, \\mathrm{v2v5}, \\mathrm{v3v4}, \\mathrm{v4v5}, \\mathrm{v4v6}, \\mathrm{v5v6}, \\mathrm{v6v7}$).<br/><br/>A breadth-first search of the graph is performed with $\\mathrm{v 1}$ as the root node. Which of the following is a tree edge?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\mathrm{v 2}, \\mathrm{v 4}$<br/></span>",
                "<span style=\"display: inline;\">$\\mathrm{v 1}, \\mathrm{v 4}$<br/></span>",
                "<span style=\"display: inline;\">$\\mathrm{v} 4, \\mathrm{v} 5$<br/></span>",
                "<span style=\"display: inline;\">$\\mathrm{v3},\\mathrm{v4}$</span>"
            ],
            "answer": "B",
            "solution": "<div class=\"solution-content\"><a name=\"486283\"></a><div itemprop=\"text\">answer is B</div><br><br><small>Source: <a href=\"https://gateoverflow.in/486202/go-classes-dpp-algorithm-isro\" target=\"_blank\">GATE Overflow #486202</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider an undirected, weighted graph G with positive weights. Let a breadth-first traversal of G be done starting from a node r.</p><p>Let $d(r, u), d(r, v)$ represent the length of the shortest path from $r$ to $u, v$ respectively.<br/><br/>If u is visited before v during the traversal, which of the following must hold?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$d(r, u)<d(r, v)$<br/></span>",
                "<span style=\"display: inline;\">$d(r, u) \\leq d(r, v)$<br/></span>",
                "<span style=\"display: inline;\">$d(r, u) \\geq d(r, v)$<br/></span>",
                "<span style=\"display: inline;\">None of the above</span>"
            ],
            "answer": "D",
            "solution": "<div class=\"solution-content\"><a name=\"484216\"></a><div itemprop=\"text\">answer is D becuse it weighted graph but if weights are contant then B and c is correct deppend on which node visited first is correct.</div><br><br><small>Source: <a href=\"https://gateoverflow.in/484208/go-classes-dpp-algorithms-bfs\" target=\"_blank\">GATE Overflow #484208</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider a directed graph $G=(V, E)$, where</p><p>Suppose the adjacency list of each vertex is arranged in increasing order of vertex number. A Depth-First Search is started at vertex $1$.</p><p>How many vertices will be discovered after vertex $10$ ?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\mathrm{V}=\\{1,2, \\ldots, 40\\}$<br/></span>",
                "<span style=\"display: inline;\">For every vertex $u$, there is an edge $(u, v)$ iff $v=2 u$ or $v=2 u+1$</span>"
            ],
            "answer": "21",
            "solution": "<div class=\"solution-content\"><a name=\"484207\"></a><div itemprop=\"text\"><p>Solution: Given graph is nothing but a binary tree<br/><br/><br/><img alt=\"\" src=\"https://gateoverflow.in/?qa=blob&amp;qa_blobid=10370766456891757400\"/></p><p>As per given conditions, DFS will be pre-order traversal of this tree<br/><br/>DFS sequence: $1,2,4,8,16,32,33,17,34,35,9,18,36,37,19,38,39,5,10, \\ldots$<br/><br/>Number of nodes visited till $10$ is $19$<br/><br/>So the number of nodes visited after $10$ will be $40-19=21$.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/484205/go-classes-dpp-algorithms-dfs\" target=\"_blank\">GATE Overflow #484205</a></small></div>"
        },
        {
            "marks": 2,
            "neg": 0,
            "type": "MSQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider the following undirected graph:<br/><br/><img alt=\"\" src=\"https://gateoverflow.in/?qa=blob&amp;qa_blobid=22222733827770896\"/></p><p>Which of the following is/are not correct DFS traversal sequences of the above graph starting from the vertex 3 (Assume the adjacency list of each vertex is arranged in increasing order of vertex number)?</p><p> </p></div></span>",
            "image": "https://gateoverflow.in/?qa=blob&qa_blobid=22222733827770896",
            "options": [
                "<span style=\"display: inline;\">$3,4,6,5,2,8,1,7$<br/></span>",
                "<span style=\"display: inline;\">$3,6,4,5,2,8,1,7$<br/></span>",
                "<span style=\"display: inline;\">$3,6,4,2,8,1,5,7$<br/></span>",
                "<span style=\"display: inline;\">$3,2,1,6,4,5,8,7$</span>"
            ],
            "answer": [
                "A"
            ],
            "solution": "<div class=\"solution-content\"><a name=\"484204\"></a><div itemprop=\"text\">$D$ represents the dfs traversal starting from vertex $3$ but $A, B, C$ are not correct DFS traversals here because adjacency list of each vertex is arranged in increasing order of vertex number</div><br><br><small>Source: <a href=\"https://gateoverflow.in/484203/go-classes-dpp-algorithms-dfs\" target=\"_blank\">GATE Overflow #484203</a></small></div>"
        }
    ]
});

registerTest({
    "name": "DPP 24 - Algorithms (Graph Algorithms (MST & Shortest Paths - Part 1)",
    "testLabel": "DPP 24",
    "testType": "DPP",
    "bracket": "Graph Algorithms (MST & Shortest Paths - Part 1",
    "subject": "algo",
    "series": "cse-dpp-2027",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 10,
    "topicsCovered": "Graph Algorithms (MST & Shortest Paths (Practice Set 1)",
    "questions": [
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"5774\" data-start=\"5672\">Let $G$ be a directed graph with <strong data-end=\"5733\" data-start=\"5705\">nonnegative edge weights</strong>, and let $s$ and $t$ be vertices of $G$.</p><p data-end=\"5799\" data-start=\"5776\">Consider the statement:</p><p data-end=\"5926\" data-start=\"5803\">Any shortest path from $s$ to $t$ in $G$ is also a shortest path from $s$ to $t$ after the weight of every edge is squared.</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">True<br/></span>",
                "<span style=\"display: inline;\">False</span>"
            ],
            "answer": "B",
            "solution": "<div class=\"solution-content\"><a name=\"546643\"></a><div itemprop=\"text\"><p><strong data-complete=\"true\" data-copy-service-computed-style='font-family: \"Google Sans\", Arial, sans-serif; font-size: 16px; font-weight: 700; margin: 0px; text-decoration: none; border-bottom: 0px rgb(230, 232, 240);' data-processed=\"true\" data-sfc-cp=\"\" data-sfc-root=\"ep\">The statement is False.</strong></p><p>Squaring edge weights changes which path is the shortest. It makes big numbers get much bigger, while small numbers stay small.</p><p><strong data-complete=\"true\" data-copy-service-computed-style='font-family: \"Google Sans\", Arial, sans-serif; font-size: 16px; font-weight: 700; margin: 0px; text-decoration: none; border-bottom: 0px rgb(230, 232, 240);' data-processed=\"true\" data-sfc-cp=\"\" data-sfc-root=\"ep\">Simple Example</strong></p><p>Imagine you want to travel from point s to point t. You have two choices:</p><ul data-complete=\"true\" data-copy-service-computed-style='font-family: \"Google Sans\", Arial, sans-serif; font-size: 16px; font-weight: 400; margin: 12px 0px 16px; text-decoration: none; border-bottom: 0px rgb(230, 232, 240);' data-hveid=\"CAAICxAA\" data-processed=\"true\" data-sfc-cp=\"\" data-sfc-root=\"ep\" data-ved=\"2ahUKEwi4hKvrl8qWAxU_TWwGHVUpLwUQ-7AUegYIAAgLEAA\"><li data-complete=\"true\" data-copy-service-computed-style='font-family: \"Google Sans\", Arial, sans-serif; font-size: 16px; font-weight: 400; margin: 0px 0px 12px; text-decoration: none; border-bottom: 0px rgb(230, 232, 240);' data-hveid=\"CAAICxAB\" data-sae=\"\" data-sfc-cp=\"\" data-sfc-root=\"ep\">Path 1: Takes 1 long road with a weight of 4.</li><li data-complete=\"true\" data-copy-service-computed-style='font-family: \"Google Sans\", Arial, sans-serif; font-size: 16px; font-weight: 400; margin: 0px 0px 12px; text-decoration: none; border-bottom: 0px rgb(230, 232, 240);' data-hveid=\"CAAICxAC\" data-sae=\"\" data-sfc-cp=\"\" data-sfc-root=\"ep\">Path 2: Takes 5 short roads, and each road has a weight of 1.</li></ul><p><strong data-complete=\"true\" data-copy-service-computed-style='font-family: \"Google Sans\", Arial, sans-serif; font-size: 16px; font-weight: 700; margin: 0px; text-decoration: none; border-bottom: 0px rgb(230, 232, 240);' data-processed=\"true\" data-sfc-cp=\"\" data-sfc-root=\"ep\">Original Graph Costs:</strong></p><ul data-complete=\"true\" data-copy-service-computed-style='font-family: \"Google Sans\", Arial, sans-serif; font-size: 16px; font-weight: 400; margin: 12px 0px 16px; text-decoration: none; border-bottom: 0px rgb(230, 232, 240);' data-hveid=\"CAAIDRAA\" data-processed=\"true\" data-sfc-cp=\"\" data-sfc-root=\"ep\" data-ved=\"2ahUKEwi4hKvrl8qWAxU_TWwGHVUpLwUQ-7AUegYIAAgNEAA\"><li data-complete=\"true\" data-copy-service-computed-style='font-family: \"Google Sans\", Arial, sans-serif; font-size: 16px; font-weight: 400; margin: 0px 0px 12px; text-decoration: none; border-bottom: 0px rgb(230, 232, 240);' data-hveid=\"CAAIDRAB\" data-sae=\"\" data-sfc-cp=\"\" data-sfc-root=\"ep\">Path 1 total cost: 4</li><li data-complete=\"true\" data-copy-service-computed-style='font-family: \"Google Sans\", Arial, sans-serif; font-size: 16px; font-weight: 400; margin: 0px 0px 12px; text-decoration: none; border-bottom: 0px rgb(230, 232, 240);' data-hveid=\"CAAIDRAC\" data-sae=\"\" data-sfc-cp=\"\" data-sfc-root=\"ep\">Path 2 total cost: 1 + 1 + 1 + 1 + 1 = 5</li><li data-complete=\"true\" data-copy-service-computed-style='font-family: \"Google Sans\", Arial, sans-serif; font-size: 16px; font-weight: 400; margin: 0px 0px 12px; text-decoration: none; border-bottom: 0px rgb(230, 232, 240);' data-hveid=\"CAAIDRAD\" data-sae=\"\" data-sfc-cp=\"\" data-sfc-root=\"ep\">Result: Path 1 is the shortest path (4 is less than 5).</li></ul><p><strong data-complete=\"true\" data-copy-service-computed-style='font-family: \"Google Sans\", Arial, sans-serif; font-size: 16px; font-weight: 700; margin: 0px; text-decoration: none; border-bottom: 0px rgb(230, 232, 240);' data-processed=\"true\" data-sfc-cp=\"\" data-sfc-root=\"ep\">Costs After Squaring (x²):</strong></p><ul data-complete=\"true\" data-copy-service-computed-style='font-family: \"Google Sans\", Arial, sans-serif; font-size: 16px; font-weight: 400; margin: 12px 0px 16px; text-decoration: none; border-bottom: 0px rgb(230, 232, 240);' data-hveid=\"CAAIDxAA\" data-processed=\"true\" data-sfc-cp=\"\" data-sfc-root=\"ep\" data-ved=\"2ahUKEwi4hKvrl8qWAxU_TWwGHVUpLwUQ-7AUegYIAAgPEAA\"><li data-complete=\"true\" data-copy-service-computed-style='font-family: \"Google Sans\", Arial, sans-serif; font-size: 16px; font-weight: 400; margin: 0px 0px 12px; text-decoration: none; border-bottom: 0px rgb(230, 232, 240);' data-hveid=\"CAAIDxAB\" data-sae=\"\" data-sfc-cp=\"\" data-sfc-root=\"ep\">Path 1 total cost: 4 × 4 = 16</li><li data-complete=\"true\" data-copy-service-computed-style='font-family: \"Google Sans\", Arial, sans-serif; font-size: 16px; font-weight: 400; margin: 0px 0px 12px; text-decoration: none; border-bottom: 0px rgb(230, 232, 240);' data-hveid=\"CAAIDxAC\" data-sae=\"\" data-sfc-cp=\"\" data-sfc-root=\"ep\">Path 2 total cost: 1² + 1² + 1² + 1² + 1² = 1 + 1 + 1 + 1 + 1 = 5</li><li data-complete=\"true\" data-copy-service-computed-style='font-family: \"Google Sans\", Arial, sans-serif; font-size: 16px; font-weight: 400; margin: 0px 0px 12px; text-decoration: none; border-bottom: 0px rgb(230, 232, 240);' data-hveid=\"CAAIDxAD\" data-sae=\"\" data-sfc-cp=\"\" data-sfc-root=\"ep\">Result: Path 2 becomes the new shortest path (5 is less than 16).</li></ul></div><br><br><small>Source: <a href=\"https://gateoverflow.in/546626/go-classes-dpp-gate-cs-da-algorithms-directed-graph\" target=\"_blank\">GATE Overflow #546626</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"7309\" data-start=\"7276\">Consider the following statement:</p><p data-end=\"7474\" data-start=\"7313\">For every connected weighted graph $G$, there exists some vertex $v$ such that a shortest path tree rooted at $v$ is identical to a minimum spanning tree of $G$.</p><p data-end=\"7501\" data-start=\"7476\">Is the statement correct?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">True<br/></span>",
                "<span style=\"display: inline;\">False</span>"
            ],
            "answer": "B",
            "solution": "<div class=\"solution-content\"><a name=\"546414\"></a><div itemprop=\"text\"><p>False. Note that the MST will always avoid the largest weight edge in a cycle (assuming there is a unique largest), whereas the shortest path tree might use it. </p><p>Consider the following graph where the diagonal edges have weight $3$ and the other edges have weight $2$. </p><p style=\"text-align:center\"><img alt=\"\" height=\"219\" src=\"https://cdn.mathpix.com/snip/images/ncIlrseZJMySu9Soffrd5OeoAm7A-N0Z5pXoygt_Ewg.original.fullsize.png\" width=\"254\"/></p><p>A MST consists of three of the weight $2$ edges, whereas a shortest path tree will use one of the diagonal edges.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/546412/go-classes-dpp-gate-cs-da-algorithms-mst-vs-shortest-path-tree\" target=\"_blank\">GATE Overflow #546412</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"238\" data-start=\"0\">Consider a simple version of Bellman-Ford algorithm where we initialize $\\text{distTo}[s]$ to $0$ and the rest of $\\text{distTo}[v]$ to $+\\infty$. Then fix an order on all edges $e_1,\\ldots,e_E$ and relax them in this order $V$ times.</p><p data-end=\"395\" data-start=\"240\">If there are no negative cycles, we know this procedure will result in the array $\\text{distTo}[v]$ containing the distance from $s$ to $v$ for each $v$.</p><p data-end=\"574\" data-start=\"397\">Suppose we perform no actions in addition to the above, and the graph does have a negative cycle accessible from $s$. Which of the following must be true?<em> (Select all that apply).</em></p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">At the end of the process, at least one of the $\\text{distTo}[v]$ values will be negative.<br/></span>",
                "<span style=\"display: inline;\">At the end of the process, $\\text{distTo}[s]$ must be negative.<br/></span>",
                "<span style=\"display: inline;\">The execution as described above will crash.<br/></span>",
                "<span style=\"display: inline;\">None of the above.</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"546411\"></a><div itemprop=\"text\"><p data-end=\"129\" data-start=\"0\">The existence of a reachable negative cycle tells us that distances can continue decreasing if the cycle is traversed repeatedly.</p><p data-end=\"228\" data-start=\"131\">But this does <strong data-end=\"152\" data-start=\"145\">not</strong> imply that some distance must already be negative after exactly $V$ passes.</p><p data-end=\"320\" data-start=\"230\">For example, suppose reaching the negative cycle initially has a very large positive cost.</p><p data-end=\"401\" data-start=\"322\">The cycle might reduce the path cost by only a small amount on every traversal.</p><p data-end=\"512\" data-start=\"403\">It could therefore require more than $V$ passes before any $\\text{distTo}$ value actually becomes negative.</p><p data-end=\"555\" data-start=\"514\">So the first statement is not guaranteed.</p><p data-end=\"593\" data-start=\"557\"><strong data-end=\"593\" data-start=\"557\">What about $\\text{distTo}[s]$?</strong></p><p data-end=\"657\" data-start=\"595\">The negative cycle does not have to contain the source vertex.</p><p data-end=\"669\" data-start=\"659\">Therefore, $\\text{distTo}[s]$ does not necessarily become negative.</p><p data-end=\"774\" data-start=\"732\">So the second statement is not guaranteed.</p><p data-end=\"805\" data-start=\"776\"><strong data-end=\"805\" data-start=\"776\">Does the algorithm crash?</strong></p><p data-end=\"810\" data-start=\"807\">No.</p><p data-end=\"884\" data-start=\"812\">Ordinary relaxation simply continues changing numerical distance values.</p><p data-end=\"964\" data-start=\"886\">The existence of a negative cycle does not itself cause a computational crash.</p><p data-end=\"1003\" data-start=\"966\">So the third statement is also false.</p><p data-end=\"1074\" data-start=\"1005\">Therefore, none of the first three statements must necessarily occur.</p><p data-end=\"1105\" data-start=\"1076\">Hence, the correct answer is $\\boxed{\\text{None of the above}}$</p><p data-end=\"1105\" data-start=\"1076\">If relaxation continued indefinitely, eventually some distance would become negative, but this can take more than $V$ rounds.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/546410/go-classes-dpp-gate-cs-da-algorithms-bellman-ford\" target=\"_blank\">GATE Overflow #546410</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"48\" data-start=\"0\">Consider Dijkstra's algorithm on a graph having $V$ vertices and $E$ edges.</p><p data-end=\"133\" data-start=\"83\">Suppose an indexed priority queue is <strong data-end=\"127\" data-start=\"120\">not</strong> used.</p><p data-end=\"349\" data-start=\"135\">Instead, the tentative distances are stored only in an array $\\text{distTo[ ]}$, and whenever the next vertex must be selected, the algorithm scans the array to find the unprocessed vertex having minimum distance.</p><p data-end=\"400\" data-start=\"351\">Assume there are no self loops or parallel edges.</p><p data-end=\"438\" data-start=\"402\">What is the asymptotic running time?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$O(V+E)$<br/></span>",
                "<span style=\"display: inline;\">$O(E\\log V)$<br/></span>",
                "<span style=\"display: inline;\">$O(V^2)$<br/></span>",
                "<span style=\"display: inline;\">$O(VE)$</span>"
            ],
            "answer": "C",
            "solution": "<div class=\"solution-content\"><a name=\"546406\"></a><div itemprop=\"text\"><p data-end=\"559\" data-start=\"498\">Dijkstra's algorithm processes each of the $V$ vertices once.</p><p data-end=\"698\" data-start=\"561\">Without a priority queue, finding the unprocessed vertex with minimum tentative distance requires scanning the $\\text{distTo[ ]}$ array.</p><p data-end=\"716\" data-start=\"700\">Each scan takes $O(V)$</p><p data-end=\"808\" data-start=\"726\">Since this is done for all $V$ vertices, the total time for selecting vertices is:</p><p data-end=\"831\" data-start=\"810\">$O(V \\cdot V)=O(V^2)$</p><p data-end=\"884\" data-start=\"833\">Relaxing all edges over the entire algorithm takes $O(E)$</p><p data-end=\"931\" data-start=\"894\">Therefore, the total running time is $O(V^2+E)$</p><p data-end=\"1024\" data-start=\"945\">Since there are no self loops or parallel edges, the number of edges satisfies $E=O(V^2)$</p><p data-end=\"1044\" data-start=\"1038\">Hence,</p><p data-end=\"1063\" data-start=\"1046\">$O(V^2+E)=O(V^2)$</p><p data-end=\"1098\" data-start=\"1065\">Answer $: \\boxed{O(V^2)}$</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/546405/go-classes-dpp-gate-cs-da-algorithms-dijkstras-algorithm\" target=\"_blank\">GATE Overflow #546405</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"25\" data-start=\"0\">Consider a directed edge $e = v \\to w$ with weight $7$. Suppose that during a shortest path algorithm:</p><p data-end=\"121\" data-start=\"96\">$\\operatorname{distTo}[v] = 16$ and $\\operatorname{distTo}[w] = 25$.</p><p data-end=\"184\" data-start=\"156\">The edge $e$ is now relaxed.</p><p data-end=\"204\" data-start=\"186\">What will the pair $(\\operatorname{distTo}[v], \\operatorname{distTo}[w])$ be after relaxation?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$(16,16)$<br/></span>",
                "<span style=\"display: inline;\">$(16,23)$<br/></span>",
                "<span style=\"display: inline;\">$(16,25)$<br/></span>",
                "<span style=\"display: inline;\">$(18,23)$</span>"
            ],
            "answer": "B",
            "solution": "<div class=\"solution-content\"><a name=\"546402\"></a><div itemprop=\"text\"><p>Edge relaxation checks whether reaching $w$ through $v$ gives a shorter path.</p><p>We compare:</p><p>$\\operatorname{distTo}[w]\\quad$ with $\\quad\\operatorname{distTo}[v] + \\operatorname{weight}(v,w)$</p><p>Substitute the values:</p><p>$16 + 7 = 23$</p><p>The current distance to $w$ is $25$</p><p>Since, $23 &lt; 25$</p><p>we update,</p><p>$\\operatorname{distTo}[w] = 23$</p><p>The value of $\\operatorname{distTo}[v]$ does not change.</p><p>$\\therefore (\\operatorname{distTo}[v], \\operatorname{distTo}[w]) = (16,23)$</p><p><br/><strong>Answer :</strong> $\\boxed{(16,23)}$</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/546400/go-classes-dpp-gate-cs-da-algorithms-edge-relaxation\" target=\"_blank\">GATE Overflow #546400</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"16490\" data-start=\"16486\">Let, $G=(V,E)$ be a connected undirected graph. Edge weights may be negative.</p><p data-end=\"16585\" data-start=\"16567\">We want to choose, $E'\\subseteq E$ such that $G'=(V,E')$ is connected and: $\\sum_{e\\in E'}w(e)$ is as small as possible.</p><p data-end=\"16751\" data-start=\"16696\">Is the optimal solution $E'$ guaranteed to form a tree?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">Yes<br/></span>",
                "<span style=\"display: inline;\">No</span>"
            ],
            "answer": "B",
            "solution": "<div class=\"solution-content\"><a name=\"546101\"></a><div itemprop=\"text\"><p data-end=\"16978\" data-start=\"16818\">With ordinary MST reasoning, cycles are unnecessary because removing an appropriate cycle edge does not hurt connectivity and can reduce or preserve total cost.</p><p data-end=\"17038\" data-start=\"16980\">But this changes when edges can have <strong data-end=\"17037\" data-start=\"17017\">negative weights</strong>.</p><p data-end=\"17060\" data-start=\"17040\">Consider a triangle:</p><p data-end=\"17067\" data-start=\"17062\">$A-B$</p><p data-end=\"17074\" data-start=\"17069\">$B-C$</p><p data-end=\"17081\" data-start=\"17076\">$C-A$</p><p data-end=\"17111\" data-start=\"17083\">where every edge has weight $-1$</p><p data-end=\"17180\" data-start=\"17119\">Any spanning tree contains two edges, so its total weight is $-2$</p><p data-end=\"17227\" data-start=\"17188\">But choosing <strong data-end=\"17220\" data-start=\"17201\">all three edges</strong> gives $-3$</p><p data-end=\"17295\" data-start=\"17235\">The resulting graph is connected and has lower total weight.</p><p data-end=\"17326\" data-start=\"17297\">However, it contains a cycle.</p><p data-end=\"17391\" data-start=\"17328\">Therefore the optimal connected edge subset need not be a tree.</p><p data-end=\"17515\" data-start=\"17393\">In fact, negative edges can be beneficial even when they create cycles, because adding them decreases the objective value.</p><p data-end=\"17515\" data-start=\"17393\"><br/><strong>Answer : B</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/546100/go-classes-dpp-gate-cs-da-algorithms-mst\" target=\"_blank\">GATE Overflow #546100</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"14729\" data-start=\"14664\">Let $G=(V,E)$ be a directed graph with <strong data-end=\"14728\" data-start=\"14703\">positive edge weights</strong>.</p><p data-end=\"14746\" data-start=\"14731\">Given vertices $s,w,t$ we want the length of the shortest path from $s$ to $t$ that must pass through $w$.</p><p data-end=\"14875\" data-start=\"14842\">Consider the following algorithm.</p><p data-end=\"15153\" data-start=\"15128\">Is the algorithm correct?</p><p><strong>Given Details:</strong></p><ul><li>Run Dijkstra on $G$ using $w$ as the source.<br data-end=\"50\" data-start=\"47\"/>Store $A[v] = \\text{distance from } w \\text{ to } v$.</li><li>Reverse every edge of $G$ to obtain $G_r$.</li><li>Run Dijkstra on $G_r$ using $w$ as the source.<br data-end=\"207\" data-start=\"204\"/>Store $B[v] = \\text{distance from } w \\text{ to } v \\text{ in } G_r$.</li><li>Return $B[s] + A[t]$.</li></ul></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">Yes</span>",
                "<span style=\"display: inline;\">No</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"546098\"></a><div itemprop=\"text\"><p data-end=\"321\" data-start=\"206\">The algorithm is <strong data-end=\"234\" data-start=\"223\">correct</strong>, assuming we are looking for the shortest route from $s$ to $t$ that goes through $w$.</p><p data-end=\"352\" data-start=\"323\">Any such route has two parts:</p><p data-end=\"371\" data-start=\"354\">$s \\rightarrow w$ and $w \\rightarrow t$</p><p data-end=\"415\" data-start=\"397\">So we need to find</p><p data-end=\"454\" data-start=\"417\">$\\text{dist}(s,w) + \\text{dist}(w,t)$</p><p data-end=\"511\" data-start=\"456\">First, run Dijkstra from $w$ in the original graph $G$.</p><p data-end=\"582\" data-start=\"513\">This gives the shortest distance from $w$ to every vertex. Therefore,</p><p data-end=\"609\" data-start=\"584\">$A[t] = \\text{dist}(w,t)$</p><p data-end=\"729\" data-start=\"611\">The problem is that we still need $\\text{dist}(s,w)$, but Dijkstra starting at $w$ does not give distances <strong data-end=\"724\" data-start=\"718\">to</strong> $w$.</p><p data-end=\"769\" data-start=\"731\">So we reverse every edge of the graph.</p><p data-end=\"800\" data-start=\"771\">In the reversed graph, a path $s \\rightarrow w$ in $G$ becomes $w \\rightarrow s$ in $G_r$ with the same total weight.</p><p data-end=\"946\" data-start=\"895\">Therefore, running Dijkstra from $w$ in $G_r$ gives $B[s] = \\text{dist}(s,w)$ in the original graph.</p><p data-end=\"1005\" data-start=\"999\">Hence,</p><p data-end=\"1020\" data-start=\"1007\">$B[s] + A[t] = \\text{dist}(s,w) + \\text{dist}(w,t)$</p><p data-end=\"1115\" data-start=\"1063\">which is the required shortest distance through $w$.</p><p data-end=\"1200\" data-start=\"1117\">Since all edge weights are positive, Dijkstra's algorithm can be used in both runs.</p><p data-end=\"1217\" data-start=\"1202\"><br/><strong data-end=\"1217\" data-start=\"1202\">Answer: Yes</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/546097/go-classes-dpp-gate-cs-da-algorithms-dijkstras-algorithm\" target=\"_blank\">GATE Overflow #546097</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"13321\" data-start=\"13193\">What is the primary reason to use Floyd's algorithm for the <strong data-end=\"13288\" data-start=\"13253\">all-pairs shortest-path problem</strong> instead of Dijkstra's algorithm?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">Faster for dense graphs.<br/></span>",
                "<span style=\"display: inline;\">Faster for sparse graphs.<br/></span>",
                "<span style=\"display: inline;\">Implementing Fibonacci heaps is difficult.<br/></span>",
                "<span style=\"display: inline;\">Floyd's algorithm can reconstruct the path itself, while Dijkstra's cannot.</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"546096\"></a><div itemprop=\"text\"><p data-end=\"128\" data-start=\"52\">Floyd's algorithm solves the <strong data-end=\"125\" data-start=\"81\">all-pairs shortest-path problem directly</strong> in $O(V^3)$ time.</p><p data-end=\"249\" data-start=\"147\">To solve the same problem using Dijkstra's algorithm, we must run Dijkstra once from <strong data-end=\"248\" data-start=\"232\">every vertex</strong>.</p><p data-end=\"311\" data-start=\"251\">Using a binary heap, one run of Dijkstra takes approximately $O(E \\log V)$</p><p data-end=\"369\" data-start=\"328\">So running it from all $V$ vertices takes $O(VE \\log V)$</p><p data-end=\"409\" data-start=\"387\">For a <strong data-end=\"408\" data-start=\"393\">dense graph</strong>,</p><p data-end=\"423\" data-start=\"411\">$E = O(V^2)$</p><p data-end=\"454\" data-start=\"425\">so repeated Dijkstra can take $O(V^3 \\log V)$ whereas Floyd's algorithm remains $O(V^3)$</p><p data-end=\"597\" data-start=\"518\">Therefore, Floyd's algorithm is generally a better choice for <strong data-end=\"596\" data-start=\"580\">dense graphs</strong>.</p><p data-end=\"697\" data-start=\"599\">For a <strong data-end=\"621\" data-start=\"605\">sparse graph</strong>, where $E$ is much smaller than $V^2$, repeated Dijkstra is usually faster.</p><p data-end=\"731\" data-start=\"699\">The other choices are incorrect:</p><ul data-end=\"1080\" data-start=\"733\"><li data-end=\"820\" data-section-id=\"1l8ypki\" data-start=\"733\"><strong data-end=\"763\" data-start=\"735\">Faster for sparse graphs</strong> : false; Dijkstra is generally better for sparse graphs.<br/> </li><li data-end=\"958\" data-section-id=\"11tnars\" data-start=\"821\"><strong data-end=\"868\" data-start=\"823\">Implementing Fibonacci heaps is difficult</strong> : this is an implementation issue, not the primary algorithmic reason for choosing Floyd.<br/> </li><li data-end=\"1080\" data-section-id=\"1rr9q85\" data-start=\"959\"><strong data-end=\"1012\" data-start=\"961\">Floyd can reconstruct paths but Dijkstra cannot</strong> : false; Dijkstra can reconstruct paths using predecessor pointers.<br/> </li></ul><p data-end=\"1118\" data-is-last-node=\"\" data-is-only-node=\"\" data-start=\"1082\"><strong data-end=\"1118\" data-is-last-node=\"\" data-start=\"1082\">Answer : A</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/546095/go-classes-dpp-gate-cs-da-algorithms-floyd-warshall\" target=\"_blank\">GATE Overflow #546095</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"58\" data-start=\"0\">Let $G$ be a directed graph with nonnegative edge weights.</p><p data-end=\"210\" data-start=\"60\">Run Dijkstra's algorithm from source $s$. After the algorithm terminates, use the $\\text{prev}$ pointers to construct a shortest path from $s$ to $t$.</p><p data-end=\"319\" data-start=\"212\">Is this path guaranteed to contain the <strong data-end=\"318\" data-start=\"251\">fewest number of edges among all shortest paths from $s$ to $t$</strong>?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">Yes<br/></span>",
                "<span style=\"display: inline;\">No</span>"
            ],
            "answer": "B",
            "solution": "<div class=\"solution-content\"><a name=\"546087\"></a><div itemprop=\"text\"><p data-end=\"9134\" data-start=\"9103\">Dijkstra's algorithm optimizes total path weight.</p><p data-end=\"9185\" data-start=\"9164\">It does not optimize, number of edges among equal-weight shortest paths.</p><p data-end=\"9304\" data-start=\"9249\">For eg, </p><p style=\"text-align:center\"><img alt=\"\" height=\"151\" src=\"https://cdn.mathpix.com/snip/images/S3_S_R6V56HWRYq2lhG80ybgwsDRcDVItvKLkblTy0k.original.fullsize.png\" width=\"319\"/></p><p data-end=\"10026\" data-start=\"9780\">Dijkstra’s algorithm will return the path $s \\rightarrow a \\rightarrow b \\rightarrow t$, but the one with the smallest number of edges is just $s \\rightarrow c \\rightarrow t$.</p><p data-end=\"9304\" data-start=\"9249\">Both may have the same shortest-path length, but the first has $3$ edges while the second has only $2$.</p><p data-end=\"9661\" data-start=\"9492\">Depending on the order in which equal-distance vertices are processed and the behavior of the relaxation rule, Dijkstra's $\\texttt{prev}$ pointers can retain the three-edge path.</p><p data-end=\"9778\" data-start=\"9663\">Therefore the algorithm guarantees a minimum <strong data-end=\"9718\" data-start=\"9708\">weight</strong>, not a minimum edge count among all paths with that weight.</p><p data-end=\"10026\" data-start=\"9780\">Hence,</p><p data-end=\"10026\" data-start=\"9780\"><strong>Answer : B</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/546086/go-classes-dpp-gate-cs-da-algorithms-dijkstras-algorithm\" target=\"_blank\">GATE Overflow #546086</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"34\" data-start=\"0\">Consider the following statements.</p><p data-end=\"394\" data-start=\"370\">Which option is correct?</p><p><strong>Given Details:</strong></p><ul><li>Let $M$ be an MST of a connected undirected graph with positive edge weights. If $7$ is added to every edge weight, $M$ is guaranteed to remain an MST.</li><li>Let $P$ be a shortest path from $u$ to $v$ in a graph with positive edge weights. If $7$ is added to every edge weight, $P$ is guaranteed to remain a shortest path.</li></ul></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">Both I and II are true.</span>",
                "<span style=\"display: inline;\">Only I is true.</span>",
                "<span style=\"display: inline;\">Only II is true.</span>",
                "<span style=\"display: inline;\">Neither is true.</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"546085\"></a><div itemprop=\"text\"><p data-end=\"7354\" data-section-id=\"va8ngq\" data-start=\"7339\"><strong>Statement I</strong></p><p data-end=\"7393\" data-start=\"7356\">Every spanning tree contains exactly $|V|-1$ edges.</p><p data-end=\"7506\" data-start=\"7412\">Adding $7$ to every edge therefore increases the weight of <strong data-end=\"7494\" data-start=\"7471\">every spanning tree</strong> by exactly : $7(|V|-1)$</p><p data-end=\"7614\" data-start=\"7520\">Since every spanning tree receives the same increase, their relative ordering does not change.</p><p data-end=\"7643\" data-start=\"7616\">Thus an MST remains an MST.</p><p data-end=\"7668\" data-start=\"7645\">So Statement I is <strong>true.</strong></p><p data-end=\"7686\" data-section-id=\"11ycqpv\" data-start=\"7670\"><br/><strong>Statement II</strong></p><p data-end=\"7743\" data-start=\"7688\">Different paths can contain different numbers of edges.</p><p data-end=\"7753\" data-start=\"7745\">Suppose,</p><p data-end=\"7786\" data-start=\"7755\">$u\\rightarrow b$ has weight $1$</p><p data-end=\"7819\" data-start=\"7788\">$b\\rightarrow v$ has weight $1$</p><p data-end=\"7825\" data-start=\"7821\">and,</p><p data-end=\"7858\" data-start=\"7827\">$u\\rightarrow v$ has weight $3$</p><p data-end=\"7870\" data-start=\"7860\">Initially,</p><p data-end=\"7901\" data-start=\"7872\">$u\\rightarrow b\\rightarrow v$</p><p data-end=\"7912\" data-start=\"7903\">has cost : $1+1=2$</p><p data-end=\"7973\" data-start=\"7923\">so it is shorter than the direct path of cost $3$.</p><p data-end=\"8006\" data-start=\"7975\">After adding $7$ to every edge:</p><p data-end=\"8022\" data-start=\"8008\">Two-edge path $:8+8=16$</p><p data-end=\"8046\" data-start=\"8034\">Direct path $:10$</p><p data-end=\"8085\" data-start=\"8054\">Now the direct path is shorter.</p><p data-end=\"8149\" data-start=\"8087\">Therefore the original shortest path need not remain shortest.</p><p data-end=\"8276\" data-start=\"8151\">So Statement II is <strong>false.</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/546083/go-classes-dpp-gate-cs-da-algorithms-minimum-spanning-tree\" target=\"_blank\">GATE Overflow #546083</a></small></div>"
        }
    ]
});

registerTest({
    "name": "DPP 25 - Algorithms (Graph Algorithms (MST & Shortest Paths - Part 2)",
    "testLabel": "DPP 25",
    "testType": "DPP",
    "bracket": "Graph Algorithms (MST & Shortest Paths - Part 2",
    "subject": "algo",
    "series": "cse-dpp-2027",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 11,
    "topicsCovered": "Graph Algorithms (MST & Shortest Paths (Practice Set 2)",
    "questions": [
        {
            "marks": 2,
            "neg": 0,
            "type": "MSQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"4535\" data-start=\"4465\">Consider the following directed weighted graph with source vertex $0$:</p><p style=\"text-align:center\"><img alt=\"\" height=\"285\" src=\"https://cdn.mathpix.com/snip/images/vzico5cfuwbNZNgzrpOuddPiH76_R0D-FZe4aMRoOvA.original.fullsize.png\" width=\"465\"/></p><p data-end=\"4570\" data-start=\"4537\"><br/>Bellman-Ford performs one complete pass, relaxing edges in this exact order:</p><p data-end=\"4938\" data-start=\"4923\">$$0\\rightarrow1,\\quad 0\\rightarrow3,\\quad 0\\rightarrow4,\\quad 1\\rightarrow2,\\quad 4\\rightarrow1,\\quad 4\\rightarrow2,\\quad 4\\rightarrow3,\\quad 4\\rightarrow5,\\quad 5\\rightarrow2$$</p><p data-end=\"5207\" data-start=\"5076\">Immediately after this first pass, for which vertices is $\\text{distTo[v]}$ already equal to the <strong data-end=\"5206\" data-start=\"5166\">true shortest-path distance from $0$</strong>?</p></div></span>",
            "image": "https://cdn.mathpix.com/snip/images/vzico5cfuwbNZNgzrpOuddPiH76_R0D-FZe4aMRoOvA.original.fullsize.png",
            "options": [
                "<span style=\"display: inline;\">Vertex $0$<br/></span>",
                "<span style=\"display: inline;\">Vertex $1$<br/></span>",
                "<span style=\"display: inline;\">Vertex $2$<br/></span>",
                "<span style=\"display: inline;\">Vertex $3$<br/></span>",
                "<span style=\"display: inline;\">Vertex $4$<br/></span>",
                "<span style=\"display: inline;\">Vertex $5$</span>"
            ],
            "answer": [
                "A",
                "B",
                "D"
            ],
            "solution": "<div class=\"solution-content\"><a name=\"546081\"></a><div itemprop=\"text\"><p data-end=\"5398\" data-start=\"5388\">Initially,</p><p data-end=\"5408\" data-start=\"5400\">$d(0)=0$ and every other distance is $\\infty$.</p><p data-end=\"5474\" data-start=\"5449\">Relax the edges in order.</p><p data-end=\"5498\" data-start=\"5476\">After $0\\rightarrow1:d(1)=100$</p><p data-end=\"5534\" data-start=\"5512\">After $0\\rightarrow3:d(3)=80$</p><p data-end=\"5569\" data-start=\"5547\">After $0\\rightarrow4:d(4)=30$</p><p data-end=\"5604\" data-start=\"5582\">After $1\\rightarrow2:d(2)=110$</p><p data-end=\"5640\" data-start=\"5618\">After $4\\rightarrow1:d(1)=30+50=80$</p><p data-end=\"5681\" data-start=\"5659\">After $4\\rightarrow2:d(2)=\\min(110,130)=110$</p><p data-end=\"5731\" data-start=\"5709\">After $4\\rightarrow3:d(3)=\\min(80,70)=70$</p><p data-end=\"5778\" data-start=\"5756\">After $4\\rightarrow5:d(5)=40$</p><p data-end=\"5813\" data-start=\"5791\">After $5\\rightarrow2:d(2)=\\min(110,100)=100$</p><p data-end=\"5859\" data-start=\"5841\">So after one pass:</p><p data-end=\"5882\" data-start=\"5861\">$[0,80,100,70,30,40]$</p><p data-end=\"5934\" data-start=\"5884\">But the actual shortest distance to vertex $2$ is:</p><p data-end=\"5975\" data-start=\"5936\">$0\\rightarrow4\\rightarrow1\\rightarrow2$</p><p data-end=\"5987\" data-start=\"5977\">with cost : $30+50+10=90$</p><p data-end=\"6196\" data-start=\"6004\">The improvement of $d(1)$ from $100$ to $80$ happens <strong data-end=\"6066\" data-start=\"6057\">after</strong> edge $1\\rightarrow2$ has already been relaxed in this pass, so the value $90$ cannot propagate to vertex $2$ until the next pass.</p><p data-end=\"6243\" data-start=\"6198\">Therefore only vertex $2$ is still incorrect.</p><p data-end=\"6251\" data-start=\"6245\">Hence, $\\boxed{0,1,3,4,5}$<br/> </p><p data-end=\"6251\" data-start=\"6245\"><strong>Answer : A, B, D, E, F</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/546080/go-classes-dpp-gate-cs-da-algorithms-bellman-ford\" target=\"_blank\">GATE Overflow #546080</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"870\" data-start=\"776\">Let $G=(V,E)$ be a connected weighted undirected graph in which all edge weights are distinct.</p><p data-end=\"876\" data-start=\"872\">Let, $e=(u,v)$ be an edge of weight $w(e)$.</p><p data-end=\"1063\" data-start=\"920\">Construct a graph $G'$ containing the same vertices as $G$, but containing only those edges whose weights are <strong data-end=\"1062\" data-start=\"1030\">strictly smaller than $w(e)$</strong>.</p><p data-end=\"1165\" data-start=\"1065\">Which of the following correctly determines whether $e$ belongs to the minimum spanning tree of $G$?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$e$ belongs to the MST if $u$ and $v$ are in the same connected component of $G'$.<br/></span>",
                "<span style=\"display: inline;\">$e$ belongs to the MST if $u$ and $v$ are in different connected components of $G'$.<br/></span>",
                "<span style=\"display: inline;\">$e$ belongs to the MST only if $u$ and $v$ both have degree $1$ in $G'$.<br/></span>",
                "<span style=\"display: inline;\">$e$ belongs to the MST only if $G'$ is disconnected.</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"545854\"></a><div itemprop=\"text\"><p data-end=\"1531\" data-start=\"1521\">Construct, $G'=(V,E')$ where, $E'={f\\in E:w(f)&lt;w(e)}$</p><p data-end=\"1633\" data-start=\"1581\">Now check whether $u$ and $v$ are connected in $G'$.</p><p data-end=\"1680\" data-section-id=\"fgmbvi\" data-start=\"1635\">Case $1:u$ and $v$ are already connected</p><p data-end=\"1703\" data-start=\"1682\">Then there is a path, $u\\leadsto v$</p><p data-end=\"1769\" data-start=\"1720\">using only edges with weight smaller than $w(e)$.</p><p data-end=\"1811\" data-start=\"1771\">Adding $e$ to that path creates a cycle.</p><p data-end=\"1920\" data-start=\"1813\">Since every edge on the existing path is lighter than $e$, edge $e$ is the <strong data-end=\"1919\" data-start=\"1888\">heaviest edge on that cycle</strong>.</p><p data-end=\"2004\" data-start=\"1922\">By the cycle property, the heaviest edge of such a cycle cannot belong to the MST.</p><p data-end=\"2016\" data-start=\"2006\">$\\therefore e\\notin MST$</p><p data-end=\"2084\" data-section-id=\"135o7ga\" data-start=\"2033\"><br/>Case $2: u$ and $v$ are in different components</p><p data-end=\"2173\" data-start=\"2086\">Take the cut separating the component containing $u$ from the component containing $v$.</p><p style=\"text-align:center\"><img alt=\"\" height=\"359\" src=\"https://cdn.mathpix.com/snip/images/ae6qwBu7N2WIpHNCNtE7QpjZA9aq0ndagC-0ckY6Yfk.original.fullsize.png\" width=\"476\"/></p><p data-end=\"2276\" data-start=\"2175\">No edge lighter than $e$ crosses this cut. Otherwise, $u$ and $v$ would already be connected in $G'$.</p><p data-end=\"2333\" data-start=\"2278\">Hence $e$ is the minimum-weight edge crossing that cut.</p><p data-end=\"2430\" data-start=\"2335\">Because all edge weights are distinct, the cut property guarantees that $e$ belongs to the MST.</p><p data-end=\"2442\" data-start=\"2432\">$\\boxed{\\therefore e\\in MST\\iff u\\text{ and }v\\text{ are in different components of }G'}$</p><p data-end=\"2527\" data-start=\"2524\"><br/>So, <strong>Answer : B</strong></p><p data-end=\"2603\" data-start=\"2557\"><em>Note : </em>A DFS or BFS can test connectivity in $G'$ in $O(V+E)$</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/545847/go-classes-dpp-gate-cs-da-algorithms-minimum-spanning-tree\" target=\"_blank\">GATE Overflow #545847</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"10179\" data-start=\"10132\">Suppose every edge weight of a graph is either:</p><p data-end=\"10246\" data-start=\"10223\">Consider the statement:</p><p data-end=\"10358\" data-start=\"10250\">Dijkstra's algorithm will always compute the correct shortest-path distances if each edge is processed once.</p><p><strong>Given Details:</strong></p><ul><li>a positive integer, or</li><li>exactly $-1$.</li></ul></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">True</span>",
                "<span style=\"display: inline;\">False</span>"
            ],
            "answer": "B",
            "solution": "<div class=\"solution-content\"><a name=\"545834\"></a><div itemprop=\"text\"><p data-end=\"10487\" data-start=\"10433\">Dijkstra's algorithm relies on the following property:</p><p data-end=\"10585\" data-start=\"10489\">Once the minimum-distance unprocessed vertex is finalized, its distance can never improve later.</p><p data-end=\"10639\" data-start=\"10587\">This property requires <strong data-end=\"10638\" data-start=\"10610\">nonnegative edge weights</strong>.</p><p data-end=\"10650\" data-start=\"10641\">Consider,</p><p data-end=\"10684\" data-start=\"10652\">$s\\rightarrow b$ with weight $1$</p><p data-end=\"10718\" data-start=\"10686\">$s\\rightarrow a$ with weight $2$</p><p data-end=\"10753\" data-start=\"10720\">$a\\rightarrow b$ with weight $-2$</p><p data-end=\"10765\" data-start=\"10755\">Initially,</p><p data-end=\"10775\" data-start=\"10767\">$d(b)=1$</p><p data-end=\"10785\" data-start=\"10777\">$d(a)=2$</p><p data-end=\"10822\" data-start=\"10787\">Dijkstra chooses $b$ first because $1&lt;2$ and finalizes $d(b)=1$</p><p data-end=\"10894\" data-start=\"10857\">But there is actually a shorter path:</p><p data-end=\"10925\" data-start=\"10896\">$s\\rightarrow a\\rightarrow b$</p><p data-end=\"10939\" data-start=\"10927\">with weight:</p><p data-end=\"10951\" data-start=\"10941\">$2+(-2)=0$</p><p data-end=\"10977\" data-start=\"10953\">So the true distance is:</p><p data-end=\"10987\" data-start=\"10979\">$d(b)=0$</p><p data-end=\"11033\" data-start=\"10989\">The early finalization of $b$ was incorrect.</p><p data-end=\"11139\" data-start=\"11035\">Therefore, even a negative edge of weight $-1$ can invalidate Dijkstra's correctness in suitable graphs.</p><p data-end=\"11147\" data-start=\"11141\">Hence,</p><p data-end=\"11175\" data-start=\"11149\"><strong>Answer : B</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/545833/go-classes-dpp-gate-cs-da-algorithms-dijkstras-algorithm\" target=\"_blank\">GATE Overflow #545833</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"8723\" data-start=\"8658\">Consider the following code executed while processing vertex $v$:</p><pre class=\"prettyprint linenums lang-c_cpp\" data-end=\"8913\" data-linenums=\"true\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"\" data-rawcode=\"for each edge e in G.adj(v): w = e.to() if dist[w] &gt; dist[v] + e.weight(): dist[w] = dist[v] + e.weight() pred[w] = e pq.insert(dist[w], w)\" data-start=\"8725\">for each edge e in G.adj(v): w = e.to() if dist[w] &gt; dist[v] + e.weight(): dist[w] = dist[v] + e.weight() pred[w] = e pq.insert(dist[w], w)</pre><p data-end=\"8954\" data-start=\"8915\">Which operation does this code perform?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">Processes a vertex for Prim's algorithm<br/></span>",
                "<span style=\"display: inline;\">Computes the MST of a weighted graph<br/></span>",
                "<span style=\"display: inline;\">Topologically sorts a directed graph<br/></span>",
                "<span style=\"display: inline;\">Processes a vertex for Dijkstra's algorithm<br/></span>",
                "<span style=\"display: inline;\">Detects a cycle in a graph</span>"
            ],
            "answer": "D",
            "solution": "<div class=\"solution-content\"><a name=\"545719\"></a><div itemprop=\"text\"><p data-end=\"9228\" data-start=\"9207\">The key condition is:</p><p data-end=\"9259\" data-start=\"9230\">$dist[w]&gt;dist[v]+weight(v,w)$</p><p data-end=\"9290\" data-start=\"9261\">This checks whether the path:</p><p data-end=\"9343\" data-start=\"9292\">$source\\rightarrow\\cdots\\rightarrow v\\rightarrow w$</p><p data-end=\"9398\" data-start=\"9345\">is shorter than the best currently known path to $w$.</p><p data-end=\"9419\" data-start=\"9400\">If so, it performs:</p><p data-end=\"9450\" data-start=\"9421\">$dist[w]=dist[v]+weight(v,w)$</p><p data-end=\"9497\" data-start=\"9452\">This operation is called <strong data-end=\"9496\" data-start=\"9477\">edge relaxation</strong>.</p><p data-end=\"9565\" data-start=\"9499\">The new tentative distance is then inserted into a priority queue.</p><p data-end=\"9621\" data-start=\"9567\">This is the central operation of Dijkstra's algorithm.</p><p data-end=\"9633\" data-start=\"9623\">$\\therefore$ <strong>Answer: D</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/545717/go-classes-dpp-gate-cs-da-algorithms-dijkstras-algorithm\" target=\"_blank\">GATE Overflow #545717</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"7431\" data-start=\"7408\">Consider the statement:</p><p data-end=\"7561\" data-start=\"7435\">The minimum spanning tree of a connected weighted graph $G$ is unique <strong data-end=\"7523\" data-start=\"7505\">if and only if</strong> all edge weights in $G$ are distinct.</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">True<br/></span>",
                "<span style=\"display: inline;\">False</span>"
            ],
            "answer": "B",
            "solution": "<div class=\"solution-content\"><a name=\"545716\"></a><div itemprop=\"text\"><p data-end=\"7652\" data-start=\"7636\">It is true that:</p><p data-end=\"7716\" data-start=\"7654\">$\\text{all edge weights distinct}\\Rightarrow\\text{unique MST}$</p><p data-end=\"7754\" data-start=\"7718\">But the converse is not always true.</p><p data-end=\"7796\" data-start=\"7756\">Consider a graph that is already a tree:</p><p style=\"text-align:center\"><img alt=\"\" height=\"50\" src=\"https://cdn.mathpix.com/snip/images/svIihjwix1Eg0sHUVUgOHkwjdKYNN1VykfKazVF-bQM.original.fullsize.png\" width=\"291\"/></p><p data-end=\"7875\" data-start=\"7842\">The graph has equal edge weights.</p><p data-end=\"7970\" data-start=\"7877\">However, there is only one possible spanning tree because the graph itself is already a tree.</p><p data-end=\"8026\" data-start=\"7972\">Therefore, its MST is unique despite repeated weights.</p><p data-end=\"8034\" data-start=\"8028\">Hence:</p><p data-end=\"8098\" data-start=\"8036\">$\\text{unique MST}\\not\\Rightarrow\\text{distinct edge weights}$</p><p data-end=\"8143\" data-start=\"8100\">So the \"if and only if\" statement is false.</p><p data-end=\"8171\" data-start=\"8145\"><br/><b>Answer : B</b></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/545710/go-classes-dpp-gate-cs-da-algorithms-minimum-spanning-trees\" target=\"_blank\">GATE Overflow #545710</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"2641\" data-start=\"2527\">Let $G=(V,E)$ be a dag, where each edge is annotated with some positive length. Let $s$ be a source vertex in $G$.</p><p data-end=\"2813\" data-start=\"2643\">Suppose we run Dijkstra's algorithm to compute the distance from $s$ to each vertex $v \\in V$, and then order the vertices in increasing order of their distance from $s$.</p><p data-end=\"2878\" data-start=\"2815\">Are we guaranteed that this is a valid topological sort of $G$?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">Yes<br/></span>",
                "<span style=\"display: inline;\">No</span>"
            ],
            "answer": "B",
            "solution": "<div class=\"solution-content\"><a name=\"544825\"></a><div itemprop=\"text\"><p data-end=\"3039\" data-start=\"2946\">A topological ordering depends on the <strong data-end=\"3006\" data-start=\"2984\">direction of edges</strong>, not on shortest-path distances.</p><p data-end=\"3056\" data-start=\"3041\">For every edge, $u \\rightarrow v$ a topological ordering requires $u$ before $v$</p><p data-end=\"3248\" data-start=\"3127\">But it is possible for $v$ to have a shorter distance from the source than $u$ because $v$ may have another shorter path.</p><p data-end=\"3268\" data-start=\"3250\">Consider this DAG:</p><p data-end=\"3303\" data-start=\"3270\">$s \\rightarrow v$ with weight $1$</p><p data-end=\"3339\" data-start=\"3305\">$s \\rightarrow u$ with weight $10$</p><p data-end=\"3374\" data-start=\"3341\">$u \\rightarrow v$ with weight $1$</p><p data-end=\"3408\" data-start=\"3376\">The shortest-path distances are:</p><p data-end=\"3418\" data-start=\"3410\">$d(s)=0$</p><p data-end=\"3428\" data-start=\"3420\">$d(v)=1$</p><p data-end=\"3439\" data-start=\"3430\">$d(u)=10$</p><p data-end=\"3499\" data-start=\"3441\">Therefore, ordering vertices by increasing distance gives:</p><p data-end=\"3508\" data-start=\"3501\">$s,v,u$</p><p data-end=\"3533\" data-start=\"3510\">But the graph contains:</p><p data-end=\"3552\" data-start=\"3535\">$u \\rightarrow v$</p><p data-end=\"3601\" data-start=\"3554\">So every valid topological ordering must place:</p><p data-end=\"3617\" data-start=\"3603\">$u$ before $v$</p><p data-end=\"3661\" data-start=\"3619\">The distance ordering puts $v$ before $u$.</p><p data-end=\"3716\" data-start=\"3663\">Therefore it is <strong data-end=\"3686\" data-start=\"3679\">not</strong> a valid topological ordering.</p><p data-end=\"3724\" data-start=\"3718\"><br/><strong>Answer: B</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/544823/go-classes-dpp-gate-cs-da-algorithms-distance-vs-topological-order\" target=\"_blank\">GATE Overflow #544823</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"576\" data-start=\"477\">Suppose BFS is run on a cycle graph $C_n$. For which values of $n$ will no coloring conflict occur?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">All $n$<br/></span>",
                "<span style=\"display: inline;\">Odd $n$<br/></span>",
                "<span style=\"display: inline;\">Even $n$<br/></span>",
                "<span style=\"display: inline;\">Only prime $n$</span>"
            ],
            "answer": "C",
            "solution": "<div class=\"solution-content\"><a name=\"544082\"></a><div itemprop=\"text\"><p data-end=\"795\" data-start=\"691\">To check whether a graph is bipartite using BFS, we assign alternating colors to consecutive BFS levels.</p><p data-end=\"816\" data-start=\"797\">Consider the cycle,</p><p data-end=\"906\" data-start=\"818\">$v_1 \\rightarrow v_2 \\rightarrow v_3 \\rightarrow \\cdots \\rightarrow v_n \\rightarrow v_1$</p><p data-end=\"942\" data-start=\"908\">Assign the first vertex color $0$.</p><p data-end=\"970\" data-start=\"944\">Then the colors alternate:</p><p data-end=\"988\" data-start=\"972\">$0,1,0,1,\\ldots$</p><p data-end=\"1008\" data-section-id=\"1qs52at\" data-start=\"990\"><strong>If $n$ is even :</strong></p><p data-end=\"1022\" data-start=\"1010\">For eg, $C_6$</p><p data-end=\"1052\" data-start=\"1031\">The coloring becomes $0,1,0,1,0,1$</p><p data-end=\"1137\" data-start=\"1069\">The last vertex has color $1$, while the first vertex has color $0$.</p><p data-end=\"1204\" data-start=\"1139\">Thus, when the cycle closes, the endpoints have different colors.</p><p data-end=\"1243\" data-start=\"1206\">So there is <strong data-end=\"1242\" data-start=\"1218\">no coloring conflict</strong>.<br/> </p><p data-end=\"1262\" data-section-id=\"1jpp08i\" data-start=\"1245\"><strong>If $n$ is odd: </strong></p><p data-end=\"1276\" data-start=\"1264\">For eg, $C_5$</p><p data-end=\"1306\" data-start=\"1285\">The coloring becomes: $0,1,0,1,0$</p><p data-end=\"1378\" data-start=\"1321\">The last vertex and the first vertex both have color $0$.</p><p data-end=\"1402\" data-start=\"1380\">But they are adjacent.</p><p data-end=\"1442\" data-start=\"1404\">Therefore, a coloring conflict occurs.</p><p data-end=\"1504\" data-start=\"1444\">Hence, a cycle is bipartite exactly when its length is even.</p><p data-end=\"1540\" data-start=\"1506\"><br/><strong>Answer: C</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/544081/go-classes-dpp-gate-cs-da-algorithms-bfs-graph\" target=\"_blank\">GATE Overflow #544081</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"4338\" data-start=\"4209\">Given any directed graph, there is always a shortest-paths tree (SPT) containing every vertex reachable from a source vertex $s$.</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">True<br/></span>",
                "<span style=\"display: inline;\">False</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"543911\"></a><div itemprop=\"text\"><p data-end=\"4470\" data-start=\"4412\">Consider any vertex $v$ that is reachable from source $s$.</p><p data-end=\"4476\" data-start=\"4472\">Let $d(v)$ denote the length of a shortest path from $s$ to $v$.</p><p data-end=\"4544\" data-start=\"4541\">If $d(v)=k$ then there must be some predecessor $u$ of $v$ on a shortest path such that,</p><p data-end=\"4644\" data-start=\"4634\">$d(u)=k-1$ and $(u,v)\\in E$</p><p data-end=\"4732\" data-start=\"4666\">For every reachable vertex $v\\neq s$, choose one such predecessor.</p><p data-end=\"4746\" data-start=\"4734\">For eg, </p><p data-end=\"4794\" data-start=\"4748\">$s\\rightarrow u_1\\rightarrow u_2\\rightarrow v$</p><p data-end=\"4801\" data-start=\"4796\">with,</p><p data-end=\"4811\" data-start=\"4803\">$d(s)=0$</p><p data-end=\"4823\" data-start=\"4813\">$d(u_1)=1$</p><p data-end=\"4835\" data-start=\"4825\">$d(u_2)=2$</p><p data-end=\"4845\" data-start=\"4837\">$d(v)=3$</p><p data-end=\"4928\" data-start=\"4847\">Choosing one predecessor for every reachable vertex creates a tree rooted at $s$.</p><p data-end=\"4992\" data-start=\"4930\">The path from $s$ to each vertex $v$ in this tree has exactly $d(v)$ edges.</p><p data-end=\"5083\" data-start=\"5010\">Therefore, every tree path is also a shortest path in the original graph.</p><p data-end=\"5170\" data-start=\"5085\">Hence, a shortest-path tree containing every vertex reachable from $s$ always exists.</p><p data-end=\"5204\" data-start=\"5172\">$\\Rightarrow$ <strong>Answer: A</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/543910/go-classes-dpp-gate-cs-da-algorithms-shortest-path-tree\" target=\"_blank\">GATE Overflow #543910</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\">Let G be a connected, undirected graph of $50$ vertices and $200$ edges. The weight of a minimum spanning tree of G is $800$ . When the weight of each edge of G is decreased by ten, the weight of a minimum spanning tree becomes $\\_\\_\\_\\_$ .</div></span>",
            "image": "",
            "options": [],
            "answer": "800",
            "solution": "<div class=\"solution-content\"><a name=\"489927\"></a><div itemprop=\"text\"><p>A minimum spanning tree (MST) for a graph with $\\mathbf{V}$ vertices always contains exactly $\\mathbf{V}-1$ edges.<br/><br/>1. Number of Edges in MST: The graph has 50 vertices, so its MST will always have 50 $1=49$ edges.<br/><br/>2. Effect of Weight Change: Decreasing the weight of every edge in the graph by the same amount (10) doesn't change the relative order of the weights. This means the same set of 49 edges that formed the original MST will also form the new MST.<br/><br/>3. Calculate the New Weight:</p><ul><li>The original MST weight was $800$.<br/> </li><li>Each of the $\\mathbf{4 9}$ edges in that MST is now $\\mathbf{1 0}$ units lighter.<br/> </li><li>Total weight decrease $=49$ edges $\\times 10=\\mathbf{4 9 0}$.<br/> </li><li>New MST weight $=800-490=\\mathbf{3 1 0}$.</li></ul></div><br><br><small>Source: <a href=\"https://gateoverflow.in/489926/go-classes-dpp-algorithm-mst\" target=\"_blank\">GATE Overflow #489926</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>The number of distinct minimum spanning trees for the weighted graph below is____________</p><p style=\"text-align:center\"><img alt=\"\" height=\"149\" src=\"https://cdn.mathpix.com/snip/images/BkM4R5qAxMg0oFijsWdFAxxLI9mUxUdRu2hwFZiHqfs.original.fullsize.png\" width=\"345\"/></p><p><br/> </p></div></span>",
            "image": "https://cdn.mathpix.com/snip/images/BkM4R5qAxMg0oFijsWdFAxxLI9mUxUdRu2hwFZiHqfs.original.fullsize.png",
            "options": [],
            "answer": "8",
            "solution": "<div class=\"solution-content\"><a name=\"490480\"></a><div itemprop=\"text\"><p><img alt=\"\" height=\"176\" src=\"https://gateoverflow.in/?qa=blob&amp;qa_blobid=14246089353288395628\" width=\"400\"/><br/> ↑<br/>We have to include the edge having cost = 3, even though it has highest cost, or else it will make a minimum spanning forest rather than a spanning tree.<br/><br/>The Minimum Spanning Tree will have = 7 edges (8 -1)<br/>5 edges are added. The remaining 2 have to be added.<br/><br/>total number of MCST possible = (select 1 edge out of 4 with weight 2) * (select 1 edge out of 2 with weight 3) = 4C1*2C1 = 2*4 = 8</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/489924/go-classes-dpp-algorithm-mst\" target=\"_blank\">GATE Overflow #489924</a></small></div>"
        }
    ]
});

registerTest({
    "name": "DPP 26 - Algorithms (Graph Algorithms (MST & Shortest Paths - Part 3)",
    "testLabel": "DPP 26",
    "testType": "DPP",
    "bracket": "Graph Algorithms (MST & Shortest Paths - Part 3",
    "subject": "algo",
    "series": "cse-dpp-2027",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 10,
    "topicsCovered": "Graph Algorithms (MST & Shortest Paths (Practice Set 3)",
    "questions": [
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider a graph with the following weighted edges: </p><p style=\"text-align:center\"><img alt=\"\" height=\"287\" src=\"https://cdn.mathpix.com/snip/images/FHKeV6rblXxtszFHJjCKblY4cNGAiCDw3zqRIlmBD-4.original.fullsize.png\" width=\"315\"/></p><p><br/>Which one of the following sequences cannot be the order of edges added to a Minimum Spanning Tree (MST) using Kruskal's algorithm?</p></div></span>",
            "image": "https://cdn.mathpix.com/snip/images/FHKeV6rblXxtszFHJjCKblY4cNGAiCDw3zqRIlmBD-4.original.fullsize.png",
            "options": [
                "<span style=\"display: inline;\">(E-F), (A-B), (A-D), (B-C), (D-E), (F-G)<br/></span>",
                "<span style=\"display: inline;\">(E-F), (A-B), (C-D), (A-D), (B-E), (F-G)<br/></span>",
                "<span style=\"display: inline;\">(E-F), (A-B), (B-C), (A-D), (B-E), (E-G)<br/></span>",
                "<span style=\"display: inline;\">(E-F), (A-B), (B-C), (A-D), (B-E), (F-G)</span>"
            ],
            "answer": "C",
            "solution": "<div class=\"solution-content\"><a name=\"489923\"></a><div itemprop=\"text\">1. The Algorithm's State: Let's trace the sequence in option C. After adding the first five edges – (E-F), (A-B), (B-C), (A-D), and (B-E) – the graph's components have been merged into two sets: $\\{A, B, C, D, E, F\\}$ and $\\{G\\}$.<br/> <br/> 2. The Critical Choice: According to the sorted list of all available edges, the next cheapest edge is (F-G) with a weight of 5.<br/> <br/> 3. The Violation: Adding the edge (F-G) would connect vertex G to the main component without forming a cycle. Because Kruskal's is a greedy algorithm, it must select this valid, lowest-cost edge next.<br/> <br/> The sequence in option C incorrectly skips the valid edge (F-G) and instead adds the more expensive edge (E-G) with a weight of $\\mathbf{6}$. An algorithm following Kruskal's rules would have already completed the spanning tree with the cheaper edge and would never even consider the (E-G) edge.<br/> <br/> Therefore, the sequence in Option $\\mathbf{C}$ cannot be generated by Kruskal's algorithm. The other options (A, B, and D) represent valid sequences that can occur depending on the order in which edges of the same weight are chosen.</div><br><br><small>Source: <a href=\"https://gateoverflow.in/489919/go-classes-dpp-algorithm-mst\" target=\"_blank\">GATE Overflow #489919</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider the following weighted, undirected graph:<br/><br/><b id=\"docs-internal-guid-ced2d2b5-7fff-232f-6f97-47ab5efc249a\"><img alt=\"\" height=\"171\" src=\"https://gateoverflow.in/?qa=blob&amp;qa_blobid=8449196668596815873\" width=\"409\"/></b></p><p>What is the total weight of the Minimum Spanning Tree (MST) for this graph?</p></div></span>",
            "image": "https://gateoverflow.in/?qa=blob&qa_blobid=8449196668596815873",
            "options": [],
            "answer": "489487",
            "solution": "<div class=\"solution-content\"><a name=\"489500\"></a><div itemprop=\"text\"><figure class=\"image\"><img alt=\"\" height=\"488\" src=\"https://gateoverflow.in/?qa=blob&amp;qa_blobid=7270530438404815951\" width=\"480\"/><figcaption>Caption</figcaption></figure><p> </p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/489487/go-classes-dpp-algorithm-mst\" target=\"_blank\">GATE Overflow #489487</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Suppose we run Dijkstra's single-source shortest path algorithm on the following edge-weighted directed graph with vertex $\\mathbf{S}$ as the source. (Assume alphabetical order for tie-breaking).<br/><b id=\"docs-internal-guid-77178a00-7fff-3f16-2955-b0f21e8e239a\"><img alt=\"\" height=\"244\" src=\"https://gateoverflow.in/?qa=blob&amp;qa_blobid=672638618454458430\" width=\"269\"/></b></p></div></span>",
            "image": "https://gateoverflow.in/?qa=blob&qa_blobid=672638618454458430",
            "options": [
                "<span style=\"display: inline;\">$S, U, Q, R, T, P$<br/></span>",
                "<span style=\"display: inline;\">$S, R, Q, U, T, P$<br/></span>",
                "<span style=\"display: inline;\">$S, Q, R, U, T, P$<br/></span>",
                "<span style=\"display: inline;\">$S, R, U, Q, T, P$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"489516\"></a><div itemprop=\"text\">c</div><br><br><small>Source: <a href=\"https://gateoverflow.in/489481/go-classes-dpp-algorithm-dijkstras-algo\" target=\"_blank\">GATE Overflow #489481</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p dir=\"ltr\"><b id=\"docs-internal-guid-b1713add-7fff-64f2-91bb-79325fab1625\">How many spanning trees does the following graph have ?</b></p><p><img alt=\"\" src=\"https://gateoverflow.in/?qa=blob&amp;qa_blobid=5196421894002076151\"/></p></div></span>",
            "image": "https://gateoverflow.in/?qa=blob&qa_blobid=5196421894002076151",
            "options": [],
            "answer": "488904",
            "solution": "<div class=\"solution-content\"><a name=\"531925\"></a><div itemprop=\"text\"><p><strong>If the Question missed the word minimum then only <img alt=\"\" height=\"1489\" src=\"https://gateoverflow.in/?qa=blob&amp;qa_blobid=15072460321210778797\" width=\"1200\"/></strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/488904/go-classes-dpp-algorithms-mst\" target=\"_blank\">GATE Overflow #488904</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider the directed, weighted graph G defined by the following vertices and edges:</p><p>Using Dijkstra's algorithm, what is the cost of the single-source shortest path from vertex $\\mathbf{A}$ to vertex F?</p><p><strong>Given Details:</strong></p><ul><li>Vertices: $\\{A, B, C, D, E, F\\}$</li><li>Edges and Weights:</li><li>$\\mathrm{A} \\rightarrow \\mathrm{B}(4)$</li><li>$\\mathrm{A} \\rightarrow \\mathrm{C}(2)$</li><li>$\\mathrm{B} \\rightarrow \\mathrm{C}(5)$</li><li>$\\mathrm{B} \\rightarrow \\mathrm{D}(10)$</li><li>$C \\rightarrow E$ ( 3 )</li><li>$\\mathrm{C} \\rightarrow \\mathrm{D}$ (8)</li><li>$D \\rightarrow F$ (11)</li><li>$\\mathrm{E} \\rightarrow \\mathrm{D}(4)$</li><li>$\\mathrm{E} \\rightarrow \\mathrm{F}(10)$</li></ul></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$21$</span>",
                "<span style=\"display: inline;\">$20$</span>",
                "<span style=\"display: inline;\">$15$</span>",
                "<span style=\"display: inline;\">$25$</span>"
            ],
            "answer": "C",
            "solution": "<div class=\"solution-content\"><a name=\"489124\"></a><div itemprop=\"text\">Run of Dijkstra from source A:<br/> <br/> Initialize:<br/> dist(A)=0, dist(B)=∞, dist(C)=∞, dist(D)=∞, dist(E)=∞, dist(F)=∞<br/> visited = {}<br/> <br/> Start at A:<br/> dist(B) ← 0 + 4 = 4<br/> dist(C) ← 0 + 2 = 2<br/> unvisited dists: B=4, C=2, D=∞, E=∞, F=∞<br/> <br/> Pick smallest unvisited → C (2). visited={C}<br/> relax edges from C:<br/> C→E: dist(E) ← 2 + 3 = 5<br/> C→D: dist(D) ← 2 + 8 = 10<br/> unvisited dists: B=4, D=10, E=5, F=∞<br/> <br/> Pick smallest unvisited → B (4). visited={C,B}<br/> relax edges from B:<br/> B→C: 4 + 5 = 9 (C already 2 → no change)<br/> B→D: 4 +10 =14 (D already 10 → no change)<br/> unvisited dists: D=10, E=5, F=∞<br/> <br/> Pick smallest unvisited → E (5). visited={C,B,E}<br/> relax edges from E:<br/> E→D: 5 + 4 = 9 (improves D from 10 to 9)<br/> E→F: 5 +10 =15 (set F = 15)<br/> unvisited dists: D=9, F=15<br/> <br/> Pick smallest unvisited → D (9). visited={C,B,E,D}<br/> relax edges from D:<br/> D→F: 9 +11 =20 (F currently 15 → no change)<br/> unvisited dists: F=15<br/> <br/> Pick smallest unvisited → F (15). visited includes all now.<br/> <br/> Final shortest distances from A:<br/> dist(A)=0<br/> dist(B)=4<br/> dist(C)=2<br/> dist(E)=5<br/> dist(D)=9<br/> dist(F)=15<br/> <br/> So the shortest path cost A → F is 15 (answer C).<br/> </div><br><br><small>Source: <a href=\"https://gateoverflow.in/488320/go-classes-dpp-algorithm-dijkstras-algo\" target=\"_blank\">GATE Overflow #488320</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>The Floyd-Warshall algorithm is used on a directed graph with 4 vertices (labelled 1, 2, 3, 4). The initial shortest distances are given by an adjacency matrix where <strong>\"inf\" means infinity (no direct path).</strong></p><p>The initial distances are:</p><p>The algorithm calculates the shortest paths by adding intermediate vertices one by one. What is the length of the shortest path from vertex 4 to vertex 1 after the algorithm has considered using vertices $\\{1,2,3\\}$ as intermediate points?</p><p><strong>Given Details:</strong></p><ul><li>From 1 to 1 is 0, to 2 is 8, to 3 is inf, and to 4 is 1.</li><li>From 2 to 1 is inf, to 2 is 0, to 3 is 1, and to 4 is inf.</li><li>From 3 to 1 is 4, to 2 is inf, to 3 is 0, and to 4 is inf.</li><li>From 4 to 1 is inf, to 2 is 2, to 3 is 9, and to 4 is 0.</li></ul></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$7$</span>",
                "<span style=\"display: inline;\">$9$</span>",
                "<span style=\"display: inline;\">$11$</span>",
                "<span style=\"display: inline;\">inf (infinity)</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"502286\"></a><div itemprop=\"text\">Option A : 7</div><br><br><small>Source: <a href=\"https://gateoverflow.in/487283/go-classes-dpp-algorithm-floyd-warshalls-algo\" target=\"_blank\">GATE Overflow #487283</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>You are given a weighted directed acyclic graph (DAG) $G=(V, E)$ with a designated source vertex $s$ and a sink vertex $t$. All edge weights are positive. We define the \"path value\" of a path from $s$ to $t$ as the product of the weights of all edges along the path. You need to find the path from $s$ to $t$ with the maximum possible path value.</p><p>Which of the following algorithmic paradigms is most suitable for solving this problem efficiently?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">Dijkstra's algorithm on the original graph.<br/></span>",
                "<span style=\"display: inline;\">A greedy approach that always picks the edge with the maximum weight from the current vertex.<br/></span>",
                "<span style=\"display: inline;\">Dijkstra's algorithm is applied after transforming edge weights $w$ to $\\log (w)$.<br/></span>",
                "<span style=\"display: inline;\">Dijkstra's algorithm applied after transforming edge weights $w$ to $-\\log (w)$.</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"541201\"></a><div itemprop=\"text\"><p><b data-index-in-node=\"0\" data-path-to-node=\"10,0,0\">Correct Answer:</b> <b data-index-in-node=\"16\" data-path-to-node=\"10,0,0\">4. Dijkstra's algorithm applied after transforming edge weights $w$ to $-\\log(w)$.</b></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/487282/go-classes-dpp-algorithm-dijkstras-algo\" target=\"_blank\">GATE Overflow #487282</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Let $G=(V, E)$ be an undirected graph where every edge has a distinct positive weight.<br/>Consider any cycle, $C$, within the graph $G$. Let $e$ be the edge with the maximum weight in this cycle $C$.</p><p>Which of the following statements about the edge $e$ must be true?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">THE EDGE $e$ IS GUARANTEED TO BE PART OF THE SHORTEST PATH BETWEEN ITS TWO ENDPOINTS.<br/></span>",
                "<span style=\"display: inline;\">THE EDGE $e$ CANNOT BE PART OF THE UNIQUE MINIMUM SPANNING TREE (MST) OF $G$.<br/></span>",
                "<span style=\"display: inline;\">REMOVING THE EDGE $e$ FROM THE GRAPH WILL ALWAYS DISCONNECT THE GRAPH.<br/></span>",
                "<span style=\"display: inline;\">THE EDGE $e$ MUST BE PART OF THE LONGEST PATH IN THE GRAPH $G$.</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"489603\"></a><div itemprop=\"text\">B<br/> <br/> </div><br><br><small>Source: <a href=\"https://gateoverflow.in/487280/go-classes-dpp-algorithm-mst\" target=\"_blank\">GATE Overflow #487280</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider the following weighted, directed graph. If Dijkstra's single-source shortest path algorithm is run with source vertex 'S', what is the order in which the vertices are finalised (i.e., extracted from the priority queue)?</p><p><strong>Given Details:</strong></p><ul><li>S to A: weight 5</li><li>S to B: weight 2</li><li>B to A: weight 2</li><li>B to C: weight 4</li><li>A to C: weight 1</li><li>A to D: weight 6</li><li>C to D: weight 3<br/></li></ul></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$S, B, A, C, D$</span>",
                "<span style=\"display: inline;\">$S, A, B, C, D$</span>",
                "<span style=\"display: inline;\">$S, B, C, A, D$</span>",
                "<span style=\"display: inline;\">$S, B, A, D, C$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"486541\"></a><div itemprop=\"text\">answer is A</div><br><br><small>Source: <a href=\"https://gateoverflow.in/486527/go-classes-dpp-algorithm-dijkstras-algo\" target=\"_blank\">GATE Overflow #486527</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider a connected, undirected graph $G=(V, E)$ with a weight function $w: E \\rightarrow \\mathbb{R}^{+}$ where all edge weights are distinct. Let $T$ be the Minimum Spanning Tree (MST) of $G$. A new graph $G^{\\prime}=(V, E)$ is created with a new weight function $w^{\\prime}(e)=(w(e))^2+c$ for every edge $e \\in E$, where $c$ is a positive constant. Let $T^{\\prime}$ be the MST of $G^{\\prime}$.</p><p>Which of the following is true?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$T$ is always identical to $T^{\\prime}$.<br/></span>",
                "<span style=\"display: inline;\">$T$ is never identical to $T^{\\prime}$.<br/></span>",
                "<span style=\"display: inline;\">$T$ is identical to $T^{\\prime}$ only if the graph has no cycles.<br/></span>",
                "<span style=\"display: inline;\">Whether $T$ is identical to $T^{\\prime}$ depends on the value of the constant $c$.</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"486543\"></a><div itemprop=\"text\">answer is A</div><br><br><small>Source: <a href=\"https://gateoverflow.in/486525/go-classes-dpp-algorithm-minimum-spanning-tree\" target=\"_blank\">GATE Overflow #486525</a></small></div>"
        }
    ]
});
