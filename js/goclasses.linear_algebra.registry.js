registerTest({
    "name": "DPP 21 - Engineering Mathematics (Matrices & Basic Operations - Part 1)",
    "testLabel": "DPP 21",
    "testType": "DPP",
    "bracket": "Matrices & Basic Operations - Part 1",
    "subject": "em",
    "series": "cse-dpp-2027",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 12,
    "topicsCovered": "Matrices & Basic Operations (Practice Set 1)",
    "questions": [
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>For which values of $a$ is the matrix</p><p>$A = \\begin{bmatrix}<br/>1 &amp; -1 &amp; 0 \\\\<br/>1 &amp; 0 &amp; -1 \\\\<br/>0 &amp; a &amp; 2<br/>\\end{bmatrix}$</p><p>invertible?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$a = -2$</span>",
                "<span style=\"display: inline;\">$a \\neq -2$</span>",
                "<span style=\"display: inline;\">$a = 2$</span>",
                "<span style=\"display: inline;\">All real $a$</span>"
            ],
            "answer": "B",
            "solution": "<div class=\"solution-content\"><a name=\"529061\"></a><div itemprop=\"text\">Given:<br/> <br/> $A = \\begin{bmatrix}<br/> 1 &amp; -1 &amp; 0 \\\\<br/> 1 &amp; 0 &amp; -1 \\\\<br/> 0 &amp; a &amp; 2<br/> \\end{bmatrix}$<br/> <br/> $A$ is invertible $\\iff \\det(A) \\neq 0$<br/> <br/> Compute determinant:<br/> <br/> $\\det(A) =<br/> \\begin{vmatrix}<br/> 1 &amp; -1 &amp; 0 \\\\<br/> 1 &amp; 0 &amp; -1 \\\\<br/> 0 &amp; a &amp; 2<br/> \\end{vmatrix}$<br/> <br/> Expand along first row:<br/> <br/> $= 1 \\begin{vmatrix} 0 &amp; -1 \\\\ a &amp; 2 \\end{vmatrix}<br/> - (-1) \\begin{vmatrix} 1 &amp; -1 \\\\ 0 &amp; 2 \\end{vmatrix}<br/> + 0$<br/> <br/> $= (0 \\cdot 2 - (-1)a) + (1 \\cdot 2 - (-1)\\cdot 0)$<br/> <br/> $= a + 2$<br/> <br/> For invertibility:<br/> <br/> $a + 2 \\neq 0$<br/> <br/> $a \\neq -2$<br/> <br/> Correct Option: $B$</div><br><br><small>Source: <a href=\"https://gateoverflow.in/529060/go-classes-dpp-gate-cs-linear-algebra-invertibility-of-a-matrix\" target=\"_blank\">GATE Overflow #529060</a></small></div>"
        },
        {
            "marks": 2,
            "neg": 0,
            "type": "MSQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"196\" data-start=\"61\">Let $A$ be an $m \\times n$ matrix, $B$ be an $n \\times m$ matrix, and $C$ be an $m \\times m$ matrix. Which of the following statement(s) is(are) <strong>true</strong>?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\operatorname{tr}(AB)=\\operatorname{tr}(BA)$<br/></span>",
                "<span style=\"display: inline;\">$\\operatorname{tr}(CAB)=\\operatorname{tr}(BCA)$<br/></span>",
                "<span style=\"display: inline;\">If $AB=0$, then $BA=0$<br/></span>",
                "<span style=\"display: inline;\">If $AB=I_m$, then $\\operatorname{tr}(BA)=m$</span>"
            ],
            "answer": [
                "A",
                "B",
                "D"
            ],
            "solution": "<div class=\"solution-content\"><a name=\"528865\"></a><div itemprop=\"text\"><p data-end=\"589\" data-start=\"497\"><strong>Statement A is true</strong>. For compatible matrices, $\\operatorname{tr}(AB)=\\operatorname{tr}(BA)$.<br/><br/><strong>Statement B is true</strong>. By the cyclic property of trace, $\\operatorname{tr}(CAB)=\\operatorname{tr}(ABC)=\\operatorname{tr}(BCA)$.<br/><br/><strong>Statement C is false</strong>. A counterexample is</p><p data-end=\"838\" data-start=\"761\">$A=\\begin{bmatrix}1&amp;0\\end{bmatrix}$ and $B=\\begin{bmatrix}0\\\\1\\end{bmatrix}$.</p><p data-end=\"844\" data-start=\"840\">Then</p><p data-end=\"917\" data-start=\"846\">$AB=\\begin{bmatrix}1&amp;0\\end{bmatrix}\\begin{bmatrix}0\\\\1\\end{bmatrix}=0$,</p><p data-end=\"922\" data-start=\"919\">but</p><p data-end=\"1035\" data-start=\"924\">$BA=\\begin{bmatrix}0\\\\1\\end{bmatrix}\\begin{bmatrix}1&amp;0\\end{bmatrix}=\\begin{bmatrix}0&amp;0\\\\1&amp;0\\end{bmatrix}\\ne 0$.</p><p data-end=\"1061\" data-start=\"1037\">So statement C is false.<br/><br/><strong>Statement D is true.</strong> If $AB=I_m$, then using statement A,</p><p data-end=\"1193\" data-start=\"1122\">$\\operatorname{tr}(BA)=\\operatorname{tr}(AB)=\\operatorname{tr}(I_m)=m$.<br/><br/>Hence, statements A, B, and D are true, and statement C is false.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/528864/go-classes-dpp-gate-cs-linear-algebra-matrix-algebra\" target=\"_blank\">GATE Overflow #528864</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"248\" data-start=\"71\">Let $A=\\begin{bmatrix}2&amp;-1&amp;3\\\\4&amp;2&amp;11\\\\-2&amp;13&amp;10\\end{bmatrix}$. In the $LU$ decomposition $A=LU$, where $L$ is unit lower triangular and $U$ is upper triangular, the matrix $U$ is<br/> </p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\begin{bmatrix}2&-1&3\\\\0&4&5\\\\0&0&-2\\end{bmatrix}$<br/></span>",
                "<span style=\"display: inline;\">$\\begin{bmatrix}2&-1&3\\\\0&4&5\\\\0&0&2\\end{bmatrix}$<br/></span>",
                "<span style=\"display: inline;\">$\\begin{bmatrix}2&-1&3\\\\0&4&-5\\\\0&0&-2\\end{bmatrix}$<br/></span>",
                "<span style=\"display: inline;\">$\\begin{bmatrix}2&-1&3\\\\0&2&5\\\\0&0&-2\\end{bmatrix}$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"528857\"></a><div itemprop=\"text\"><p data-end=\"522\" data-start=\"488\">Apply Gaussian elimination to $A$.</p><p data-end=\"534\" data-start=\"524\">Start with</p><p data-end=\"593\" data-start=\"536\">$A=\\begin{bmatrix}2&amp;-1&amp;3\\\\4&amp;2&amp;11\\\\-2&amp;13&amp;10\\end{bmatrix}$.</p><p data-end=\"637\" data-start=\"595\">Eliminate the entry below the first pivot:</p><p data-end=\"677\" data-start=\"639\">$R_2 \\to R_2-2R_1$, $R_3 \\to R_3+R_1$.</p><p data-end=\"689\" data-start=\"679\">This gives</p><p data-end=\"744\" data-start=\"691\">$\\begin{bmatrix}2&amp;-1&amp;3\\\\0&amp;4&amp;5\\\\0&amp;12&amp;13\\end{bmatrix}$.<br/><br/>Now eliminate the entry below the second pivot:</p><p data-end=\"814\" data-start=\"795\">$R_3 \\to R_3-3R_2$.<br/><br/>So we get</p><p data-end=\"879\" data-start=\"827\">$\\begin{bmatrix}2&amp;-1&amp;3\\\\0&amp;4&amp;5\\\\0&amp;0&amp;-2\\end{bmatrix}$.<br/><br/>Hence,</p><p data-end=\"943\" data-start=\"889\">$U=\\begin{bmatrix}2&amp;-1&amp;3\\\\0&amp;4&amp;5\\\\0&amp;0&amp;-2\\end{bmatrix}$.<br/><br/>Therefore, the correct answer is <strong>A</strong>.<br/><br/>The corresponding matrix $L$ is</p><p data-end=\"1070\" data-start=\"1017\">$L=\\begin{bmatrix}1&amp;0&amp;0\\\\2&amp;1&amp;0\\\\-1&amp;3&amp;1\\end{bmatrix}$.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/528856/go-classes-dpp-gate-cs-linear-algebra-lu-decomposition\" target=\"_blank\">GATE Overflow #528856</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Let $S$ be the set of all $3 \\times3$ matrices $A$ with integer entries such that the product $AA^{t}$ is the identity matrix. Here $A^{t}$ denotes the transpose of $A$. Then $\\left | S \\right |$ =</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$12$<br/></span>",
                "<span style=\"display: inline;\">$24$<br/></span>",
                "<span style=\"display: inline;\">$48$<br/></span>",
                "<span style=\"display: inline;\">$60$</span>"
            ],
            "answer": "C",
            "solution": "<div class=\"solution-content\"><a name=\"528421\"></a><div itemprop=\"text\">We are given all $3\\times 3$ integer matrices $A$ such that $AA^t=I$.<br/> <br/> This means that the rows of $A$ are orthonormal.<br/> <br/> Let a row of $A$ be $(a,b,c)$. Since the entries are integers and the row has length $1$, we must have<br/> <br/> $a^2+b^2+c^2=1$.<br/> <br/> The only integer solutions are $(\\pm 1,0,0)$, $(0,\\pm 1,0)$, and $(0,0,\\pm 1)$.<br/> <br/> So each row of $A$ must be one of the standard basis vectors with a possible sign change.<br/> <br/> Also, different rows must be orthogonal, so no two rows can be the same up to sign in the same position. Therefore, $A$ must be a signed permutation matrix.<br/> <br/> To count such matrices:<br/> <br/> There are $3!$ ways to choose the positions of the $1$'s, and for each row there are $2$ choices for the sign.<br/> <br/> Hence,<br/> <br/> $|S|=3!\\cdot 2^3=6\\cdot 8=48$.<br/> <br/> Therefore, $|S|=\\boxed{48}$.<br/> <br/> So the correct answer is $\\boxed{\\text{C. }48}$.</div><br><br><small>Source: <a href=\"https://gateoverflow.in/528420/go-classes-dpp-gate-cs-linear-algebra-orthogonal-matrices\" target=\"_blank\">GATE Overflow #528420</a></small></div>"
        },
        {
            "marks": 2,
            "neg": 0,
            "type": "MSQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>A $n\\times n$ matrix $A$ is said to be $symmetric$ if $A^T=A$. Suppose $A$ is an arbitrary $2\\times 2$ matrix. Then which of the following matrices are symmetric (here $0$ denotes the $2\\times 2$ matrix consisting of zeros):</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$A^TA$<br/></span>",
                "<span style=\"display: inline;\">$\\begin{bmatrix} 0&A^T \\\\ A & 0 \\end{bmatrix}$<br/></span>",
                "<span style=\"display: inline;\">$AA^T$ <br/></span>",
                "<span style=\"display: inline;\">$\\begin{bmatrix} A & 0 \\\\ 0 & A^T \\end{bmatrix}$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"528417\"></a><div itemprop=\"text\">We check each option using the definition of a symmetric matrix: a matrix $M$ is symmetric if $M^T=M$.<br/> <br/> For option A, $(A^TA)^T=A^T(A^T)^T=A^TA$, so $A^TA$ is symmetric.<br/> <br/> For option B, let $M=\\begin{pmatrix}0&amp;A^T\\\\A&amp;0\\end{pmatrix}$. Then<br/> <br/> $M^T=\\begin{pmatrix}0^T&amp;A^T\\\\(A^T)^T&amp;0^T\\end{pmatrix}=\\begin{pmatrix}0&amp;A^T\\\\A&amp;0\\end{pmatrix}=M$.<br/> <br/> So this matrix is symmetric.<br/> <br/> For option C, $(AA^T)^T=(A^T)^TA^T=AA^T$, so $AA^T$ is symmetric.<br/> <br/> For option D, let $N=\\begin{pmatrix}A&amp;0\\\\0&amp;A^T\\end{pmatrix}$. Then<br/> <br/> $N^T=\\begin{pmatrix}A^T&amp;0\\\\0&amp;A\\end{pmatrix}$,<br/> <br/> which is not equal to $N$ in general unless $A=A^T$. Since $A$ is arbitrary, this matrix is not always symmetric.<br/> <br/> Therefore, the symmetric matrices are $\\boxed{A,\\ B,\\ \\text{and}\\ C}$.</div><br><br><small>Source: <a href=\"https://gateoverflow.in/528416/go-classes-dpp-gate-cs-linear-algebra-symmetric-matrices\" target=\"_blank\">GATE Overflow #528416</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Let $$S=\\left \\{ x \\in\\mathbb{R} \\mid x=\\operatorname{Trace}(A) \\text{ for some } A \\in M_{4} (\\mathbb{R}) \\text{ such that }A^{2}=A \\right\\}.$$</p><p>Then which of the following describes $S$?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$S=\\left \\{ 0,2,4 \\right \\}$<br/></span>",
                "<span style=\"display: inline;\">$S=\\left \\{ 0,1/2,1,3/2,2,5/2,3,7/2,4 \\right \\}$<br/></span>",
                "<span style=\"display: inline;\">$S=\\left \\{ 0,1,2,3,4 \\right \\}$<br/></span>",
                "<span style=\"display: inline;\">$S=\\left \\{ 0,4 \\right \\}$</span>"
            ],
            "answer": "C",
            "solution": "<div class=\"solution-content\"><a name=\"528279\"></a><div itemprop=\"text\"><p>Given :<br/>$S=\\{x\\in\\mathbb{R}\\mid x=\\operatorname{Trace}(A)\\text{ for some }A\\in M_4(\\mathbb{R})\\text{ such that }A^2=A\\}$.</p><p>We need to find all possible values of $\\operatorname{Trace}(A)$ when $A$ is an idempotent matrix, that is, $A^2=A$.</p><p>If $A^2=A$, then every eigenvalue $\\lambda$ of $A$ satisfies $\\lambda^2=\\lambda$.<br/><br/>$\\Rightarrow \\lambda(\\lambda-1)=0$,<br/><br/>which gives<br/><br/>$\\lambda=0$ or $\\lambda=1$.<br/><br/>Hence all eigenvalues of $A$ are either $0$ or $1$.<br/><br/>Since $A$ is a $4\\times 4$ matrix, it has $4$ eigenvalues counting algebraic multiplicity. Therefore the trace, being the sum of eigenvalues, must be the number of $1$'s among these $4$ eigenvalues.</p><p>So the possible values of $\\operatorname{Trace}(A)$ are $0,1,2,3,4$.</p><p>Also, each of these values actually occurs. For example, for $r=0,1,2,3,4$, take<br/>$A=\\operatorname{diag}(\\underbrace{1,\\dots,1}_{r\\text{ times}},\\underbrace{0,\\dots,0}_{4-r\\text{ times}})$.</p><p>Then $A^2=A$ and $\\operatorname{Trace}(A)=r$.</p><p>$\\therefore S=\\{0,1,2,3,4\\}$.</p><p>So the correct option is <strong>C</strong>.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/528278/go-classes-dpp-gate-cs-linear-algebra-trace-of-a-matrix\" target=\"_blank\">GATE Overflow #528278</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p><strong>True/False Question :</strong><br/><br/>There exist an integer $r\\geq 1$ and a symmetric matrix $A \\in M_{r}\\left ( \\mathbb{R} \\right )$ such that for all $n \\in \\mathbb{N}$, we have: $$2^{\\sqrt{n}}\\leq \\left | tr\\left ( A^{n} \\right )\\leq \\right |2020 . 2^{\\sqrt{n}}.$$<br/><em>(Note : Mark $\\emph{0}$ for False and $\\emph{1}$ for True.)</em></p></div></span>",
            "image": "",
            "options": [],
            "answer": "0",
            "solution": "<div class=\"solution-content\"><a name=\"528157\"></a><div itemprop=\"text\">Since $A$ is a real symmetric matrix, it is diagonalizable over $\\mathbb{R}$.<br/> <br/> So there exist real eigenvalues $\\lambda_1,\\lambda_2,\\dots,\\lambda_r$<br/> <br/> such that<br/> <br/> $\\operatorname{tr}(A^n)=\\lambda_1^n+\\lambda_2^n+\\cdots+\\lambda_r^n\\qquad \\text{for all } n\\in\\mathbb{N}.$<br/> <br/> Let<br/> <br/> $\\rho=\\max{1\\le i\\le r} |\\lambda i|.$<br/> <br/> We consider three cases.<br/> <br/> $\\textbf{Case 1: } \\rho&lt;1$<br/> <br/> Then $\\lambda_i^n\\to 0$ for every $i$, hence $\\operatorname{tr}(A^n)\\to 0.$<br/> <br/> But the condition requires $|\\operatorname{tr}(A^n)|\\ge 2^{\\sqrt n},$ and $2^{\\sqrt n}\\to\\infty$.<br/> <br/> This is impossible.<br/> <br/> <br/> $\\textbf{Case 2:} \\rho=1$.<br/> <br/> Then $|\\lambda_i^n|\\le 1$ for every $i$, so $|\\operatorname{tr}(A^n)| \\le |\\lambda1^n|+\\cdots+|\\lambda r^n| \\le r.$<br/> <br/> Thus $(|\\operatorname{tr}(A^n)|)$ is bounded.<br/> <br/> But again $2^{\\sqrt n}\\to\\infty,$<br/> <br/> so this is impossible.<br/> <br/> $\\textbf{Case 3: } \\rho&gt;1$.<br/> <br/> Let the eigenvalues with absolute value $\\rho$ be $\\pm \\rho.$<br/> <br/> For even powers $n=2m$, we have $\\lambda i^{2m}=|\\lambda i|^{2m}.$<br/> <br/> Hence every eigenvalue with $|\\lambda_i|=\\rho$ contributes exactly $\\rho^{2m}$.<br/> <br/> So if $k\\ge 1$ is the number of eigenvalues satisfying $|\\lambda_i|=\\rho$, then<br/> <br/> $\\operatorname{tr}(A^{2m}) = k \\rho^{2m} + \\sum{|\\lambda_i|}$<br/> <br/> Therefore, $\\operatorname{tr}(A^{2m}) \\sim k\\rho^{2m}\\qquad (m\\to\\infty).$<br/> <br/> So $|\\operatorname{tr}(A^{2m})|$ grows exponentially like $\\rho^{2m}$.<br/> <br/> But the required upper bound is<br/> <br/> $|\\operatorname{tr}(A^{2m})| \\le 2020\\cdot 2^{\\sqrt{2m}},$ and $2^{\\sqrt{2m}}$ grows subexponentially.<br/> <br/> An exponential function cannot be bounded above by a subexponential one for all large $m$.<br/> <br/> This is impossible.<br/> <br/> Since all three cases lead to contradictions, no such symmetric matrix $A$ can exist.<br/> <br/> $\\textbf{Conclusion:}$ The statement is $\\boxed{\\text{False}}.$</div><br><br><small>Source: <a href=\"https://gateoverflow.in/528154/go-classes-dpp-gate-cs-linear-algebra-symmetric-matrix\" target=\"_blank\">GATE Overflow #528154</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>The matrices $R=\\begin{pmatrix} \\cos\\theta &amp; -\\sin\\theta\\\\ \\sin\\theta &amp; \\cos\\theta \\end{pmatrix}$ and $S=\\begin{pmatrix} a &amp; c\\\\ c &amp; b \\end{pmatrix}$ commute under multiplication if and only if</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\theta=n\\pi,\\; n\\in\\mathbb{Z}$<br/></span>",
                "<span style=\"display: inline;\">$a=b$ and $c=0$<br/></span>",
                "<span style=\"display: inline;\">either $\\theta=n\\pi,\\; n\\in\\mathbb{Z}$ or $a=b$ and $c=0$<br/></span>",
                "<span style=\"display: inline;\">$\\theta=\\dfrac{n\\pi}{2},\\; n\\in\\mathbb{Z}$</span>"
            ],
            "answer": "B",
            "solution": "<div class=\"solution-content\"><a name=\"528020\"></a><div itemprop=\"text\">$R=\\begin{pmatrix}<br/> \\cos\\theta &amp; -\\sin\\theta\\\\<br/> \\sin\\theta &amp; \\cos\\theta<br/> \\end{pmatrix}$, $\\qquad$ $S=\\begin{pmatrix}<br/> a &amp; c\\\\<br/> c &amp; b<br/> \\end{pmatrix}$.<br/> <br/> For the matrices to commute, we must have<br/> <br/> $RS=SR$.<br/> <br/> Now,<br/> <br/> $RS=\\begin{pmatrix}<br/> a\\cos\\theta-c\\sin\\theta &amp; c\\cos\\theta-b\\sin\\theta\\\\<br/> a\\sin\\theta+c\\cos\\theta &amp; c\\sin\\theta+b\\cos\\theta<br/> \\end{pmatrix}$<br/> <br/> and<br/> <br/> $SR=\\begin{pmatrix}<br/> a\\cos\\theta+c\\sin\\theta &amp; -a\\sin\\theta+c\\cos\\theta\\\\<br/> c\\cos\\theta+b\\sin\\theta &amp; -c\\sin\\theta+b\\cos\\theta<br/> \\end{pmatrix}$.<br/> <br/> Equating corresponding entries, we get<br/> <br/> $a\\cos\\theta-c\\sin\\theta=a\\cos\\theta+c\\sin\\theta$,<br/> <br/> $c\\cos\\theta-b\\sin\\theta=-a\\sin\\theta+c\\cos\\theta$.<br/> <br/> From the first equation,<br/> <br/> $-c\\sin\\theta=c\\sin\\theta$,<br/> <br/> so<br/> <br/> $2c\\sin\\theta=0$,<br/> <br/> that is,<br/> <br/> $c\\sin\\theta=0$.<br/> <br/> From the second equation,<br/> <br/> $-b\\sin\\theta=-a\\sin\\theta$,<br/> <br/> so<br/> <br/> $(a-b)\\sin\\theta=0$.<br/> <br/> Thus, the required conditions are<br/> <br/> $c\\sin\\theta=0$<br/> and<br/> $(a-b)\\sin\\theta=0$.<br/> <br/> Now there are two cases.<br/> <br/> If $\\sin\\theta=0$, then $\\theta=n\\pi$, where $n\\in\\mathbb{Z}$, and the matrices commute for every $a,b,c$.<br/> <br/> If $\\sin\\theta\\neq 0$, then we must have<br/> <br/> $c=0$<br/> and<br/> $a=b$.<br/> <br/> So $S=\\begin{pmatrix}a&amp;0\\\\0&amp;a\\end{pmatrix}=aI$, which commutes with every matrix.<br/> <br/> Hence, the matrices commute if and only if either $\\theta=n\\pi$, $n\\in\\mathbb{Z}$, or $a=b$ and $c=0$.<br/> <br/> Therefore, the correct answer is $\\boxed{\\text{C}}$.</div><br><br><small>Source: <a href=\"https://gateoverflow.in/528019/go-classes-dpp-gate-cs-linear-algebra-commutativity-of-matrix-multiplication\" target=\"_blank\">GATE Overflow #528019</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>If product of matrix $A=\\begin{bmatrix}\\cos^{2}\\theta &amp;\\cos \\theta \\sin \\theta \\\\ \\cos \\theta \\sin \\theta &amp;\\sin ^{2} \\theta \\end{bmatrix}$ and $B=\\begin{bmatrix}\\cos^{2}\\phi &amp;\\cos \\phi \\sin \\phi \\\\ \\cos \\phi \\sin \\phi &amp;\\sin ^{2} \\phi \\end{bmatrix}$ is a null matrix, then $\\theta$ and $\\phi$ differ by an</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">odd multiple of $\\pi$<br/></span>",
                "<span style=\"display: inline;\">even multiple of $\\pi$<br/></span>",
                "<span style=\"display: inline;\">odd multiple of $\\dfrac{\\pi}{2}$<br/></span>",
                "<span style=\"display: inline;\">even multiple of $\\dfrac{\\pi}{2}$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"527926\"></a><div itemprop=\"text\">Let $u=\\begin{bmatrix}\\cos\\theta\\\\ \\sin\\theta\\end{bmatrix}$ and $v=\\begin{bmatrix}\\cos\\phi\\\\ \\sin\\phi\\end{bmatrix}$.<br/> <br/> Then $A=uu^T$ and $B=vv^T$.<br/> <br/> So,<br/> $AB=(uu^T)(vv^T)=u(u^Tv)v^T$.<br/> <br/> Now,<br/> $u^Tv=\\cos\\theta\\cos\\phi+\\sin\\theta\\sin\\phi=\\cos(\\theta-\\phi)$.<br/> <br/> Hence,<br/> $AB=\\cos(\\theta-\\phi)\\,uv^T$.<br/> <br/> Since $u$ and $v$ are non-zero vectors, $uv^T$ is not the null matrix. Therefore, for $AB$ to be the null matrix, we must have<br/> <br/> $\\cos(\\theta-\\phi)=0$.<br/> <br/> Thus,<br/> $\\theta-\\phi=\\frac{\\pi}{2}+n\\pi=\\frac{(2n+1)\\pi}{2}$, where $n\\in\\mathbb{Z}$.<br/> <br/> So $\\theta$ and $\\phi$ differ by an odd multiple of $\\frac{\\pi}{2}$.<br/> <br/> Hence, the correct option is $\\boxed{\\text{C}}$.</div><br><br><small>Source: <a href=\"https://gateoverflow.in/527925/go-classes-dpp-gate-cs-linear-algebra-matrix-multiplication\" target=\"_blank\">GATE Overflow #527925</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>If $M$ is a $3\\times 3$ matrix such that $[\\,1\\;\\;2\\;\\;1\\,]M=[\\,2\\;\\;1\\;\\;0\\,]$ and $[\\,2\\;\\;3\\;\\;4\\,]M=[\\,1\\;\\;0\\;\\;3\\,]$, then $[\\,5\\;\\;8\\;\\;9\\,]M$ is equal to</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$[\\,4\\;\\;1\\;\\;6\\,]$<br/></span>",
                "<span style=\"display: inline;\">$[\\,3\\;\\;2\\;\\;6\\,]$<br/></span>",
                "<span style=\"display: inline;\">$[\\,5\\;\\;1\\;\\;6\\,]$<br/></span>",
                "<span style=\"display: inline;\">$[\\,4\\;\\;2\\;\\;3\\,]$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"527736\"></a><div itemprop=\"text\">$[\\,5\\;\\;8\\;\\;9\\,]M$<br/> <br/> $=[\\,1\\;\\;2\\;\\;1\\,]M+2[\\,2\\;\\;3\\;\\;4\\,]M$<br/> <br/> $=[\\,2\\;\\;1\\;\\;0\\,]+2[\\,1\\;\\;0\\;\\;3\\,]$<br/> <br/> $=\\boxed{[\\,4\\;\\;1\\;\\;6\\,].}$</div><br><br><small>Source: <a href=\"https://gateoverflow.in/527735/go-classes-dpp-gate-cs-da-linear-algebra-matrices\" target=\"_blank\">GATE Overflow #527735</a></small></div>"
        }
    ]
});

registerTest({
    "name": "DPP 22 - Engineering Mathematics (Matrices & Basic Operations - Part 2)",
    "testLabel": "DPP 22",
    "testType": "DPP",
    "bracket": "Matrices & Basic Operations - Part 2",
    "subject": "em",
    "series": "cse-dpp-2027",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 10,
    "topicsCovered": "Matrices & Basic Operations (Practice Set 2)",
    "questions": [
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Let $A$ be a $n\\times n$ invertible matrix with real entries whose column sums are all equal to $1$. Consider the following statements:</p><p>Which of the following is TRUE?</p><p><strong>Given Details:</strong></p><ul><li>none of the statements I, II, III is correct</li><li>statement I is correct but not statements II or III</li><li>statement II is correct but not statements I or III</li><li>statement III is correct but not statements I or II</li></ul></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">Every column in the matrix $A^{2}$ sums to $2$</span>",
                "<span style=\"display: inline;\">Every column in the matrix $A^{3}$ sums to $3$</span>",
                "<span style=\"display: inline;\">Every column in the matrix $A^{-1}$ sums to $1$</span>"
            ],
            "answer": "D",
            "solution": "<div class=\"solution-content\"><a name=\"527731\"></a><div itemprop=\"text\"><p>Let<br/>$e^T=\\begin{bmatrix}1 &amp; 1 &amp; \\cdots &amp; 1\\end{bmatrix}$.</p><p>Since every column sum of $A$ is equal to $1$, we have<br/>$e^TA=e^T$.</p><p>Now,<br/>$e^TA^2=(e^TA)A=e^TA=e^T$.</p><p>So every column of $A^2$ also sums to $1$, not $2$.<br/>Hence statement I is false.</p><p>Similarly,<br/>$e^TA^3=(e^TA)A^2=e^TA^2=e^T$.</p><p>So every column of $A^3$ also sums to $1$, not $3$.<br/>Hence statement II is false.</p><p>Now since $A$ is invertible and $e^TA=e^T$, multiply both sides on the right by $A^{-1}$:<br/>$e^TAA^{-1}=e^TA^{-1}$.</p><p>Thus,<br/>$e^T=e^TA^{-1}$.</p><p>Therefore every column of $A^{-1}$ sums to $1$.<br/>Hence statement III is true.</p><p>So only statement III is correct.</p><p>Therefore, the correct option is <strong>D.</strong><br/><br/><br/><br/>$\\underline{\\textbf{Alternate Solution :}}$</p><p>Let $A=\\begin{bmatrix} 1 &amp;0 \\\\ 0 &amp;1 \\end{bmatrix}$</p><p>$A^{2} = A \\cdot A = \\begin{bmatrix} 1 &amp;0 \\\\ 0 &amp;1 \\end{bmatrix}\\cdot\\begin{bmatrix} 1 &amp;0 \\\\ 0 &amp;1 \\end{bmatrix} = \\begin{bmatrix} 1 &amp;0 \\\\ 0 &amp;1 \\end{bmatrix}$</p><ul><li>Every column in the matrix $A^{2}$ sums to $2.\\implies \\text{False}$</li></ul><p> $A^{3} = A^{2} \\cdot A = \\begin{bmatrix} 1 &amp;0 \\\\ 0 &amp;1 \\end{bmatrix}\\cdot\\begin{bmatrix} 1 &amp;0 \\\\ 0 &amp;1 \\end{bmatrix} = \\begin{bmatrix} 1 &amp;0 \\\\ 0 &amp;1 \\end{bmatrix}$</p><ul><li>Every column in the matrix $A^{3}$ sums to $3.\\implies \\text{False}$</li></ul><p>$A^{-1} = \\begin{bmatrix} 1 &amp;0 \\\\ 0 &amp;1 \\end{bmatrix}$ </p><p>Every column in the matrix $A^{-1}$ sums to $1.\\implies \\text{True}$</p><p>Lets take another example for statement $3:$</p><p>$A = \\begin{bmatrix} 3&amp;-6 \\\\ -2 &amp;7 \\end{bmatrix}$ </p><p>$A = \\begin{bmatrix} a &amp;b \\\\ c &amp;d \\end{bmatrix}^{-1} = \\dfrac{1}{ad-bc}\\begin{bmatrix} d &amp;-b \\\\ -c &amp;a \\end{bmatrix}$</p><p><a href=\"https://www.mathsisfun.com/algebra/matrix-inverse.html\" rel=\"nofollow\" target=\"_blank\">In other words:</a> swap the positions of $a$ and $d,$ put <strong>negatives</strong> in front of $b$ and $c,$ and <strong>divide</strong> everything by the <a href=\"https://www.mathsisfun.com/algebra/matrix-determinant.html\" rel=\"nofollow\" target=\"_blank\">determinant</a> $(ad-bc).$</p><p>$A^{-1} = \\dfrac{1}{9}\\begin{bmatrix}7 &amp; 6\\\\ 2 &amp;3 \\end{bmatrix}$</p><ul><li>Every column in the matrix $A^{-1}$ sums to $1.\\implies \\text{True}$</li></ul><p>So, the correct answer is <strong>D.</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/527730/go-classes-dpp-gate-cs-da-linear-algebra-matrix-algebra\" target=\"_blank\">GATE Overflow #527730</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Let $\\theta=\\dfrac{2\\pi}{1013}$. Now consider the matrix $A=<br/>\\begin{bmatrix}<br/>\\cos\\theta &amp; \\sin\\theta\\\\<br/>-\\sin\\theta &amp; \\cos\\theta<br/>\\end{bmatrix}$.<br/><br/>Then the matrix $A^{2026}$ is</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\begin{bmatrix}<br/>\\cos\\theta & \\sin\\theta\\\\<br/>-\\sin\\theta & \\cos\\theta<br/>\\end{bmatrix}$<br/></span>",
                "<span style=\"display: inline;\">$\\begin{bmatrix}<br/>1 & 0\\\\<br/>0 & 1<br/>\\end{bmatrix}$<br/></span>",
                "<span style=\"display: inline;\">$\\begin{bmatrix}<br/>\\cos^{2}\\theta & \\sin^{2}\\theta\\\\<br/>-\\sin^{2}\\theta & \\cos^{2}\\theta<br/>\\end{bmatrix}$<br/></span>",
                "<span style=\"display: inline;\">$\\begin{bmatrix}<br/>0 & 1\\\\<br/>-1 & 0<br/>\\end{bmatrix}$</span>"
            ],
            "answer": "B",
            "solution": "<div class=\"solution-content\"><a name=\"527729\"></a><div itemprop=\"text\"><p>We have $A=<br/>\\begin{bmatrix}<br/>\\cos\\theta &amp; \\sin\\theta\\\\<br/>-\\sin\\theta &amp; \\cos\\theta<br/>\\end{bmatrix}$.</p><p><br/>Now,<br/>$A^2=<br/>\\begin{bmatrix}<br/>\\cos\\theta &amp; \\sin\\theta\\\\<br/>-\\sin\\theta &amp; \\cos\\theta<br/>\\end{bmatrix}<br/>\\begin{bmatrix}<br/>\\cos\\theta &amp; \\sin\\theta\\\\<br/>-\\sin\\theta &amp; \\cos\\theta<br/>\\end{bmatrix}<br/>=<br/>\\begin{bmatrix}<br/>\\cos2\\theta &amp; \\sin2\\theta\\\\<br/>-\\sin2\\theta &amp; \\cos2\\theta<br/>\\end{bmatrix}$.</p><p><br/>Similarly,<br/><br/>$A^3=<br/>\\begin{bmatrix}<br/>\\cos3\\theta &amp; \\sin3\\theta\\\\<br/>-\\sin3\\theta &amp; \\cos3\\theta<br/>\\end{bmatrix}$,<br/><br/>and in general,<br/><br/>$A^n=<br/>\\begin{bmatrix}<br/>\\cos n\\theta &amp; \\sin n\\theta\\\\<br/>-\\sin n\\theta &amp; \\cos n\\theta<br/>\\end{bmatrix}$.<br/><br/>Therefore,<br/><br/>$A^{2026}=<br/>\\begin{bmatrix}<br/>\\cos(2026\\theta) &amp; \\sin(2026\\theta)\\\\<br/>-\\sin(2026\\theta) &amp; \\cos(2026\\theta)<br/>\\end{bmatrix}$.<br/><br/>Now $\\theta=\\dfrac{2\\pi}{1013}$, so<br/><br/>$2026\\theta=2026\\cdot\\dfrac{2\\pi}{1013}=4\\pi$.<br/><br/>Hence,<br/>$A^{2026}=<br/>\\begin{bmatrix}<br/>\\cos4\\pi &amp; \\sin4\\pi\\\\<br/>-\\sin4\\pi &amp; \\cos4\\pi<br/>\\end{bmatrix}$.<br/><br/>Since $\\cos4\\pi=1$ and $\\sin4\\pi=0$, we get<br/><br/>$A^{2026}=<br/>\\begin{bmatrix}<br/>1 &amp; 0\\\\<br/>0 &amp; 1<br/>\\end{bmatrix}$.<br/><br/>So, the correct option is <strong>B</strong>.</p><p> </p><p>$\\underline{\\textbf{Alternate Solution : }}$</p><p>We use the fact that<br/><br/>$A=<br/>\\begin{bmatrix}<br/>\\cos\\theta &amp; \\sin\\theta\\\\<br/>-\\sin\\theta &amp; \\cos\\theta<br/>\\end{bmatrix}$<br/><br/>represents a rotation matrix. Hence, for any positive integer $n$,<br/><br/>$A^n=<br/>\\begin{bmatrix}<br/>\\cos(n\\theta) &amp; \\sin(n\\theta)\\\\<br/>-\\sin(n\\theta) &amp; \\cos(n\\theta)<br/>\\end{bmatrix}$.<br/><br/>Therefore,<br/><br/>$A^{2026}=<br/>\\begin{bmatrix}<br/>\\cos(2026\\theta) &amp; \\sin(2026\\theta)\\\\<br/>-\\sin(2026\\theta) &amp; \\cos(2026\\theta)<br/>\\end{bmatrix}$.<br/><br/>Now $\\theta=\\dfrac{2\\pi}{1013}$, so<br/><br/>$2026\\theta=2026\\cdot\\dfrac{2\\pi}{1013}=4\\pi$.<br/><br/>Hence,<br/>$A^{2026}=<br/>\\begin{bmatrix}<br/>\\cos4\\pi &amp; \\sin4\\pi\\\\<br/>-\\sin4\\pi &amp; \\cos4\\pi<br/>\\end{bmatrix}$.<br/><br/>Since $\\cos4\\pi=1$ and $\\sin4\\pi=0$, we get<br/><br/>$A^{2026}=<br/>\\begin{bmatrix}<br/>1 &amp; 0\\\\<br/>0 &amp; 1<br/>\\end{bmatrix}$.<br/><br/>So, the correct option is <strong>B</strong>.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/527728/go-classes-dpp-gate-cs-da-linear-algebra-matrix-multiplication\" target=\"_blank\">GATE Overflow #527728</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Let<br/>$$<br/>A=<br/>\\begin{bmatrix}<br/>3 &amp; 1 &amp; 0\\\\<br/>3 &amp; 3 &amp; 1\\\\<br/>3 &amp; 3 &amp; 3<br/>\\end{bmatrix}<br/>\\qquad \\text{and} \\qquad<br/>B=<br/>\\begin{bmatrix}<br/>1 &amp; 0 &amp; 0\\\\<br/>2 &amp; 1 &amp; 0\\\\<br/>1 &amp; 2 &amp; 1<br/>\\end{bmatrix}.<br/>$$</p><div><p>Then</p></div></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">There exists a unique matrix $C$ such that $A=BC=CB$<br/></span>",
                "<span style=\"display: inline;\">There exists a unique matrix $C$ such that $A=BC$, but $A\\ne CB$<br/></span>",
                "<span style=\"display: inline;\">There exist infinitely many matrices $C$ such that $A=BC$<br/></span>",
                "<span style=\"display: inline;\">There is no matrix $C$ such that $A=BC$</span>"
            ],
            "answer": "B",
            "solution": "<div class=\"solution-content\"><a name=\"527726\"></a><div itemprop=\"text\"><p>First check whether $B$ is invertible. Since $B$ is lower triangular with all diagonal entries equal to $1$, it is invertible.</p><p>Hence, the equation $A=BC$ has a unique solution given by<br/>$$C = B^{-1}A.$$</p><p>So there exists a unique matrix $C$ such that $A=BC$.</p><p>Now we check whether the same $C$ also satisfies $A=CB$.</p><p>If both $A=BC$ and $A=CB$ hold, then<br/>$$BC = CB,$$so $B$ and $C$ must commute.</p><p>We compute $C = B^{-1}A$.</p><p>First find $B^{-1}$:<br/>$$<br/>B^{-1}=<br/>\\begin{bmatrix}<br/>1 &amp; 0 &amp; 0\\\\<br/>-2 &amp; 1 &amp; 0\\\\<br/>3 &amp; -2 &amp; 1<br/>\\end{bmatrix}.<br/>$$</p><p>Then<br/>$$<br/>C = B^{-1}A =<br/>\\begin{bmatrix}<br/>1 &amp; 0 &amp; 0\\\\<br/>-2 &amp; 1 &amp; 0\\\\<br/>3 &amp; -2 &amp; 1<br/>\\end{bmatrix}<br/>\\begin{bmatrix}<br/>3 &amp; 1 &amp; 0\\\\<br/>3 &amp; 3 &amp; 1\\\\<br/>3 &amp; 3 &amp; 3<br/>\\end{bmatrix}<br/>=<br/>\\begin{bmatrix}<br/>3 &amp; 1 &amp; 0\\\\<br/>-3 &amp; 1 &amp; 1\\\\<br/>6 &amp; 0 &amp; 1<br/>\\end{bmatrix}.<br/>$$</p><p>Now compute $CB$:<br/>$$<br/>CB =<br/>\\begin{bmatrix}<br/>3 &amp; 1 &amp; 0\\\\<br/>-3 &amp; 1 &amp; 1\\\\<br/>6 &amp; 0 &amp; 1<br/>\\end{bmatrix}<br/>\\begin{bmatrix}<br/>1 &amp; 0 &amp; 0\\\\<br/>2 &amp; 1 &amp; 0\\\\<br/>1 &amp; 2 &amp; 1<br/>\\end{bmatrix}<br/>=<br/>\\begin{bmatrix}<br/>5 &amp; 1 &amp; 0\\\\<br/>0 &amp; 3 &amp; 1\\\\<br/>7 &amp; 2 &amp; 1<br/>\\end{bmatrix} \\neq A.<br/>$$</p><p>Therefore, there exists a unique matrix $C$ such that $A=BC$, but $A\\ne CB$.</p><p>Hence, the correct option is <strong>B</strong>.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/527725/go-classes-dpp-gate-cs-da-linear-algebra-matrices\" target=\"_blank\">GATE Overflow #527725</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Let $$ A = \\begin{pmatrix} 1 &amp; 1 &amp; 1 \\\\ 1 &amp; 2 &amp; 2 \\\\ 1 &amp; 2 &amp; 3 \\end{pmatrix} \\text{ and } B=\\begin{pmatrix} 1 &amp; 0 &amp; 0 \\\\ 1 &amp; 1 &amp; 0 \\\\ 1 &amp; 1 &amp; 1 \\end{pmatrix}.$$ Then</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">there exists a matrix $C$ such that $A=BC=CB$<br/></span>",
                "<span style=\"display: inline;\">there is no matrix $C$ such that $A=BC$<br/></span>",
                "<span style=\"display: inline;\">there exists a matrix $C$ such that $A=BC$, but $A \\neq CB$<br/></span>",
                "<span style=\"display: inline;\">there is no matrix $C$ such that $A=CB$</span>"
            ],
            "answer": "B",
            "solution": "<div class=\"solution-content\"><a name=\"527360\"></a><div itemprop=\"text\"><p>Given</p><p>$A=\\begin{pmatrix}<br/>1&amp;1&amp;1\\\\<br/>1&amp;2&amp;2\\\\<br/>1&amp;2&amp;3<br/>\\end{pmatrix},<br/>\\qquad<br/>B=\\begin{pmatrix}<br/>1&amp;0&amp;0\\\\<br/>1&amp;1&amp;0\\\\<br/>1&amp;1&amp;1<br/>\\end{pmatrix}$</p><p>Since</p><p>$|B|=1\\neq 0$</p><p>the matrix $B$ is invertible.</p><p>So the equation</p><p>$A=BC$</p><p>always has a solution, namely</p><p>$C=B^{-1}A$</p><p>Also, the equation</p><p>$A=CB$</p><p>always has a solution, namely</p><p>$C=AB^{-1}$</p><p>Now</p><p>$B^{-1}=\\begin{pmatrix}<br/>1&amp;0&amp;0\\\\<br/>-1&amp;1&amp;0\\\\<br/>0&amp;-1&amp;1<br/>\\end{pmatrix}$</p><p>Hence</p><p>$B^{-1}A<br/>=<br/>\\begin{pmatrix}<br/>1&amp;0&amp;0\\\\<br/>-1&amp;1&amp;0\\\\<br/>0&amp;-1&amp;1<br/>\\end{pmatrix}<br/>\\begin{pmatrix}<br/>1&amp;1&amp;1\\\\<br/>1&amp;2&amp;2\\\\<br/>1&amp;2&amp;3<br/>\\end{pmatrix}<br/>=<br/>\\begin{pmatrix}<br/>1&amp;1&amp;1\\\\<br/>0&amp;1&amp;1\\\\<br/>0&amp;0&amp;1<br/>\\end{pmatrix}$</p><p>and</p><p>$AB^{-1}<br/>=<br/>\\begin{pmatrix}<br/>1&amp;1&amp;1\\\\<br/>1&amp;2&amp;2\\\\<br/>1&amp;2&amp;3<br/>\\end{pmatrix}<br/>\\begin{pmatrix}<br/>1&amp;0&amp;0\\\\<br/>-1&amp;1&amp;0\\\\<br/>0&amp;-1&amp;1<br/>\\end{pmatrix}<br/>=<br/>\\begin{pmatrix}<br/>0&amp;0&amp;1\\\\<br/>-1&amp;0&amp;2\\\\<br/>-1&amp;-1&amp;3<br/>\\end{pmatrix}$</p><p>Thus</p><p>$B^{-1}A\\neq AB^{-1}$</p><p>So there exists a matrix $C$ such that $A=BC$, but $A\\neq CB$ for that same $C$.</p><p>$\\therefore$ The correct option is <strong>C</strong>.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/527359/go-classes-dpp-gate-cs-linear-algebra-matrix-multiplication\" target=\"_blank\">GATE Overflow #527359</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Let $A_{ij}$ denote the minors of an $n \\times n$ matrix $A$. What is the relationship between $\\mid A_{ij} \\mid $ and $\\mid A_{ji} \\mid $?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">They are always equal<br/></span>",
                "<span style=\"display: inline;\">$\\mid A_{ij} \\mid = –\\mid A _{ji} \\mid \\text{ if } i \\neq j$<br/></span>",
                "<span style=\"display: inline;\">They are equal if $A$ is a symmetric matrix<br/></span>",
                "<span style=\"display: inline;\">If $\\mid A_{ij} \\mid =0$ then $\\mid A_{ji} \\mid =0$</span>"
            ],
            "answer": "C",
            "solution": "<div class=\"solution-content\"><a name=\"527352\"></a><div itemprop=\"text\"><p>Let $A = {\\begin{bmatrix} a &amp;b \\\\ c &amp; d \\end{bmatrix}} $<br/><br/>$A_{11} = d$,$A_{12} = c$,$A_{21} = b$,$A_{22} = a$<br/><br/>$\\implies |A_{11}| = d$,$|A_{12}| = c$,$|A_{21}| = b$,$|A_{22}| = a$<br/><br/> <br/>As we can see $|A_{12}| = |A_{21}|$ if $c=b$<br/><br/>$\\implies$ if matrix is ${\\begin{bmatrix} a &amp;c \\\\ c &amp; d \\end{bmatrix}} $<br/><br/>$\\implies A$ should be a symmetric matrix.<br/><br/><br/>$\\therefore$ The correct answer is <strong>C</strong>.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/527351/go-classes-dpp-gate-cs-linear-algebra-minors-in-matrices\" target=\"_blank\">GATE Overflow #527351</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>If $f(x) = \\begin{bmatrix} \\cos x &amp; -\\sin x &amp; 0 \\\\ \\sin x &amp; \\cos x &amp; 0 \\\\ 0 &amp; 0 &amp; 1 \\end{bmatrix}$ then the value of $\\big(f(x)\\big)^2$ is</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$f(x)$<br/></span>",
                "<span style=\"display: inline;\">$f(2x)$<br/></span>",
                "<span style=\"display: inline;\">$2f(x)$<br/></span>",
                "<span style=\"display: inline;\">None of these</span>"
            ],
            "answer": "B",
            "solution": "<div class=\"solution-content\"><a name=\"527199\"></a><div itemprop=\"text\"><p>Let<br/>$<br/>f(x)=<br/>\\begin{bmatrix}<br/>\\cos x &amp; -\\sin x &amp; 0\\\\<br/>\\sin x &amp; \\cos x &amp; 0\\\\<br/>0 &amp; 0 &amp; 1<br/>\\end{bmatrix}.<br/>$</p><p>Then<br/>$(f(x))^2=f(x)\\,f(x)<br/>=<br/>\\begin{bmatrix}<br/>\\cos x &amp; -\\sin x &amp; 0\\\\<br/>\\sin x &amp; \\cos x &amp; 0\\\\<br/>0 &amp; 0 &amp; 1<br/>\\end{bmatrix}<br/>\\begin{bmatrix}<br/>\\cos x &amp; -\\sin x &amp; 0\\\\<br/>\\sin x &amp; \\cos x &amp; 0\\\\<br/>0 &amp; 0 &amp; 1<br/>\\end{bmatrix}.<br/>$<br/><br/>Multiplying,<br/><br/>$<br/>(f(x))^2=<br/>\\begin{bmatrix}<br/>\\cos^2 x-\\sin^2 x &amp; -2\\sin x\\cos x &amp; 0\\\\<br/>2\\sin x\\cos x &amp; \\cos^2 x-\\sin^2 x &amp; 0\\\\<br/>0 &amp; 0 &amp; 1<br/>\\end{bmatrix}.<br/>$</p><p>Using, $\\cos 2x=\\cos^2 x-\\sin^2 x \\quad \\text{and} \\quad \\sin 2x=2\\sin x\\cos x,$<br/><br/>we get<br/>$<br/>(f(x))^2=<br/>\\begin{bmatrix}<br/>\\cos 2x &amp; -\\sin 2x &amp; 0\\\\<br/>\\sin 2x &amp; \\cos 2x &amp; 0\\\\<br/>0 &amp; 0 &amp; 1<br/>\\end{bmatrix}<br/>=f(2x).<br/>$<br/><br/>Therefore, $\\boxed{(f(x))^2=f(2x)}$<br/><br/>So the correct option is <strong>B</strong>.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/527197/go-classes-dpp-gate-cs-linear-algebra-matrix-algebra\" target=\"_blank\">GATE Overflow #527197</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Suppose $\\mathrm{A}$ and $\\mathrm{B}$ are orthogonal $n \\times n$ matrices. Which of the following is also an orthogonal matrix? Assume that $\\mathrm{O}$ is the null matrix of order $n \\times n$ and $I$ is the identity matrix of order $n$.</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\mathrm{AB-BA}$<br/></span>",
                "<span style=\"display: inline;\">$\\begin{bmatrix} \\mathrm{A} & \\mathrm{O} \\\\ \\mathrm{O} & \\mathrm{B} \\end{bmatrix}$<br/></span>",
                "<span style=\"display: inline;\">$\\begin{bmatrix} \\mathrm{A} & \\mathrm{I} \\\\ \\mathrm{I} & \\mathrm{B} \\end{bmatrix}$<br/></span>",
                "<span style=\"display: inline;\">$\\mathrm{A}^2 – \\mathrm{B}^2$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"527008\"></a><div itemprop=\"text\"><p>A matrix $M$ is orthogonal if $M^TM=I$.</p><p>We check each option.</p><p>$\\textbf{A. } AB-BA$</p><p>In general, there is no reason for $AB-BA$ to be orthogonal.</p><p>So A is <strong>not</strong> necessarily orthogonal.<br/> </p><p>$\\textbf{B. } \\begin{bmatrix} A &amp; O \\\\ O &amp; B \\end{bmatrix}$</p><p>Let, $M=\\begin{bmatrix} A &amp; O \\\\ O &amp; B \\end{bmatrix}$.</p><p>Then, $M^T=\\begin{bmatrix} A^T &amp; O \\\\ O &amp; B^T \\end{bmatrix}$.</p><p>Hence, $M^TM<br/>=<br/>\\begin{bmatrix} A^T &amp; O \\\\ O &amp; B^T \\end{bmatrix}<br/>\\begin{bmatrix} A &amp; O \\\\ O &amp; B \\end{bmatrix}<br/>=<br/>\\begin{bmatrix} A^TA &amp; O \\\\ O &amp; B^TB \\end{bmatrix}$.</p><p>Since $A$ and $B$ are orthogonal, $A^TA=I$ and $B^TB=I$.</p><p>Therefore, $M^TM=<br/>\\begin{bmatrix} I &amp; O \\\\ O &amp; I \\end{bmatrix}<br/>=I$.</p><p>So this matrix is <strong>orthogonal.</strong><br/> </p><p>$\\textbf{C. } \\begin{bmatrix} A &amp; I \\\\ I &amp; B \\end{bmatrix}$</p><p>Let, $N=\\begin{bmatrix} A &amp; I \\\\ I &amp; B \\end{bmatrix}$.</p><p>Then, $N^T=\\begin{bmatrix} A^T &amp; I \\\\ I &amp; B^T \\end{bmatrix}$.</p><p>Now, $N^TN<br/>=<br/>\\begin{bmatrix} A^T &amp; I \\\\ I &amp; B^T \\end{bmatrix}<br/>\\begin{bmatrix} A &amp; I \\\\ I &amp; B \\end{bmatrix}<br/>=<br/>\\begin{bmatrix} A^TA+I &amp; A^T+B \\\\ A+B^T &amp; I+B^TB \\end{bmatrix}$.</p><p>Since $A^TA=I$ and $B^TB=I$, this becomes $\\begin{bmatrix} 2I &amp; A^T+B \\\\ A+B^T &amp; 2I \\end{bmatrix}$,<br/>which is not equal to $I$ in general.</p><p>So C is <strong>not</strong> necessarily orthogonal.<br/> </p><p>$\\textbf{D. } A^2-B^2$</p><p>In general, there is no reason for $A^2-B^2$ to be orthogonal.</p><p>So D is <strong>not</strong> necessarily orthogonal.</p><p><br/>Hence the correct answer is $\\boxed{\\text{B}}$</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/527006/go-classes-dpp-gate-cs-da-linear-algebra-orthogonal-matrices\" target=\"_blank\">GATE Overflow #527006</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider the matrix $A=\\begin{pmatrix} 1 &amp; 2 &amp; 0\\\\ 3 &amp; c &amp; 1\\\\ 0 &amp; 1 &amp; 1 \\end{pmatrix}$. For which value of $c$ is the factorization $A=LU$ impossible? </p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$4$ <br/></span>",
                "<span style=\"display: inline;\">$5$ <br/></span>",
                "<span style=\"display: inline;\">$6$ <br/></span>",
                "<span style=\"display: inline;\">$8$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"526821\"></a><div itemprop=\"text\">$\\begin{bmatrix} 1 &amp; 2 &amp;0 \\\\ 3 &amp; c &amp;1 \\\\ 0 &amp;1 &amp;1 \\end{bmatrix}=\\begin{bmatrix} 1 &amp; 0 &amp; 0\\\\ l_{21}&amp; 1 &amp;0 \\\\ l_{31}&amp; l_{32} &amp; 1 \\end{bmatrix}$.$\\begin{bmatrix} u_{11} &amp; u_{12} &amp; u_{13}\\\\ 0&amp; u_{22} &amp;u_{23} \\\\ 0&amp; 0 &amp; u_{33} \\end{bmatrix}$<br/> <br/> $u_{11}=1$<br/> <br/> $u_{12}=2$<br/> <br/> $u_{13}=0$<br/> <br/> $u_{21}=3$<br/> <br/> $u_{22}=c-6$<br/> <br/> $u_{23}=1$<br/> <br/> $l_{31}=0$<br/> <br/> $l_{32}=\\frac{1}{c-6}$<br/> <br/> $u_{33}=1-\\frac{1}{c-6}$<br/> <br/> So, Now lower triangular matrix is<br/> <br/> $=\\begin{bmatrix} 1 &amp; 0 &amp; 0\\\\ 3&amp; 1 &amp;0 \\\\ 0&amp; \\frac{1}{c-6}&amp; 1 \\end{bmatrix}$<br/> <br/> And upper triangular matrix<br/> <br/> $\\begin{bmatrix} 1 &amp; 2 &amp; 0\\\\ 0&amp; c-6 &amp;1 \\\\ 0&amp; 0 &amp; 1-\\frac{1}{c-6} \\end{bmatrix}$<br/> <br/> So, denominator cannot be $0$, So, $c$ cannot be $6$</div><br><br><small>Source: <a href=\"https://gateoverflow.in/526819/go-classes-dpp-gate-cs-da-linear-algebra-lu-decomposition\" target=\"_blank\">GATE Overflow #526819</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\">Let $A$ is a diagonal matrix of order $100$ and $d_i$ is diagonal element of $A$. Given that<br/> $$<br/> d_i=\\left\\{\\begin{array}{ll}<br/> 2 i+1 ; &amp; \\text { if } i \\bmod 3=0 \\\\<br/> i+3 ; &amp; \\text { if } i \\bmod 3=1 \\\\<br/> 0 ; &amp; \\text { if } i \\bmod 3=2<br/> \\end{array}\\right\\} \\text { where } 1 \\leq \\mathrm{i} \\leq 100<br/> $$<br/> Then what is the value of trace of $A$ ?</div></span>",
            "image": "",
            "options": [],
            "answer": "526216",
            "solution": "<div class=\"solution-content\"><a name=\"533427\"></a><div itemprop=\"text\"><p><strong>Simple solution </strong><img alt=\"\" height=\"1030\" src=\"https://gateoverflow.in/?qa=blob&amp;qa_blobid=6196561920810658640\" width=\"1200\"/></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/526216/go-classes-dpp-gate-cs-da-linear-algebra-trace-of-matrix\" target=\"_blank\">GATE Overflow #526216</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>The number of ordered pairs $(X, Y)$, where $X$ and $Y$ are $n \\times n$ real, matrices such that $XY-YX=I$ is</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$0$<br/></span>",
                "<span style=\"display: inline;\">$1$<br/></span>",
                "<span style=\"display: inline;\">$n$<br/></span>",
                "<span style=\"display: inline;\">infinite</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"526210\"></a><div itemprop=\"text\"><p>Gievn. $XY-YX=I$,<br/><br/>where $X$ and $Y$ are $n\\times n$ real matrices.<br/><br/>Now take trace on both sides:</p><p>$\\operatorname{tr}(XY-YX)=\\operatorname{tr}(I)$.</p><p>Using the linearity of trace,</p><p>$\\operatorname{tr}(XY)-\\operatorname{tr}(YX)=\\operatorname{tr}(I)$.</p><p>But for any square matrices $X$ and $Y$ of the same order,</p><p>$\\operatorname{tr}(XY)=\\operatorname{tr}(YX)$.</p><p>So,</p><p>$\\operatorname{tr}(XY)-\\operatorname{tr}(YX)=0$.</p><p>Hence,</p><p>$0=\\operatorname{tr}(I)$.</p><p>Since $I$ is the identity matrix of order $n$,</p><p>$\\operatorname{tr}(I)=n$.</p><p>Therefore,</p><p>$0=n$,</p><p>which is impossible.</p><p>Hence, no such ordered pair $(X,Y)$ exists.</p><p>Therefore, the number of ordered pairs is $\\boxed{0}$.</p><p>So the correct option is <strong>A</strong>.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/526209/go-classes-dpp-gate-cs-da-linear-algebra-matrices\" target=\"_blank\">GATE Overflow #526209</a></small></div>"
        }
    ]
});

registerTest({
    "name": "DPP 23 - Engineering Mathematics (Matrices & Basic Operations - Part 3)",
    "testLabel": "DPP 23",
    "testType": "DPP",
    "bracket": "Matrices & Basic Operations - Part 3",
    "subject": "em",
    "series": "cse-dpp-2027",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 11,
    "topicsCovered": "Matrices & Basic Operations (Practice Set 3)",
    "questions": [
        {
            "marks": 2,
            "neg": 0,
            "type": "MSQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Which of the following matrices is(are)<strong> LU DECOMPOSIBLE</strong>?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\begin{bmatrix} 1 & 2 & 3 \\\\ 2 & 4 & 5 \\\\ 1 & 3 & 4 \\end{bmatrix}$<br/><br/></span>",
                "<span style=\"display: inline;\">$\\begin{bmatrix} 3 & 2 \\\\ 0 & 1 \\end{bmatrix}$<br/><br/></span>",
                "<span style=\"display: inline;\">$\\begin{bmatrix} 0 & 1 \\\\ 3 & 2 \\end{bmatrix}$<br/><br/></span>",
                "<span style=\"display: inline;\">$\\begin{bmatrix} 1 & -3 & 7 \\\\ -2 & 6 & 1 \\\\ 0 & 3 & -2 \\end{bmatrix}$</span>"
            ],
            "answer": [
                "A"
            ],
            "solution": "<div class=\"solution-content\"><a name=\"525975\"></a><div itemprop=\"text\"><p>A matrix is LU decomposable without row interchange if Gaussian elimination can be performed without requiring any row swap.</p><p>A standard test is: all leading principal minors must be non-zero.</p><p>Now check each option.</p><ol start=\"1\" style=\"list-style-type: upper-alpha;\"><li>$A=\\begin{bmatrix}<br/>1&amp;2&amp;3\\\\<br/>2&amp;4&amp;5\\\\<br/>1&amp;3&amp;4<br/>\\end{bmatrix}$<br/><br/>The first leading principal minor is $1\\neq 0$.<br/><br/>The second leading principal minor is $\\begin{vmatrix}1&amp;2\\\\2&amp;4\\end{vmatrix}<br/>=1\\cdot 4-2\\cdot 2=0$.<br/><br/>Since a leading principal minor is zero, this matrix is <strong>not LU decomposable.</strong><br/><br/> </li><li>$B=\\begin{bmatrix}<br/>3&amp;2\\\\<br/>0&amp;1<br/>\\end{bmatrix}$<br/><br/>This matrix is already upper triangular.<br/><br/>So we can write $B=LU$ <br/><br/>with $L=I$ <br/><br/>and $U=\\begin{bmatrix}<br/>3&amp;2\\\\<br/>0&amp;1<br/>\\end{bmatrix}$.<br/><br/>Hence, this matrix <strong>is LU decomposable.</strong><br/><br/> </li><li>$C=\\begin{bmatrix}<br/>0&amp;1\\\\<br/>3&amp;2<br/>\\end{bmatrix}$<br/><br/>Here the first pivot is $0$.<br/><br/>So Gaussian elimination cannot begin without row interchange.<br/><br/>Hence, this matrix is<strong> not LU decomposable.</strong><br/><br/> </li><li>$D=\\begin{bmatrix}<br/>1&amp;-3&amp;7\\\\<br/>-2&amp;6&amp;1\\\\<br/>0&amp;3&amp;-2<br/>\\end{bmatrix}$<br/><br/>The first leading principal minor is $1\\neq 0$.<br/><br/>The second leading principal minor is<br/><br/>$\\begin{vmatrix}<br/>1&amp;-3\\\\<br/>-2&amp;6<br/>\\end{vmatrix} =1\\cdot 6-(-3)(-2)=6-6=0$.<br/><br/>Since a leading principal minor is zero, this matrix is <strong>not LU decomposable.</strong></li></ol><p><br/>Therefore, the only LU decomposable matrix is $\\boxed{\\text{B only}}$.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/525970/go-classes-dpp-gate-cs-da-linear-algebra-lu-decomposition\" target=\"_blank\">GATE Overflow #525970</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Let $A = \\begin{bmatrix} -1 &amp;2 \\\\ 0 &amp; -1 \\end{bmatrix}$, and $B=A+A^{2}+A^{3}+\\dots +A^{50}$, then<br/> </p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$B^{2}=I$ <br/></span>",
                "<span style=\"display: inline;\">$B^{2}=0$ <br/></span>",
                "<span style=\"display: inline;\">$B^{2}=A$ <br/></span>",
                "<span style=\"display: inline;\">$B^{2}=B$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"526043\"></a><div itemprop=\"text\"><p style=\"text-align:center\"><img alt=\"\" height=\"1280\" src=\"https://gateoverflow.in/?qa=blob&amp;qa_blobid=6548674756857916664\" width=\"960\"/></p><p>Ans is B^2=0.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/525953/go-classes-dpp-gate-cs-da-linear-algebra-matrix-arithmetic\" target=\"_blank\">GATE Overflow #525953</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>As we say goodbye to $2026$ batch at GoClasses and begin with $2027$, our matrices $\\mathrm{A}$ and $\\mathrm{B}$ are throwing a big New Batch's party like we do at the felicitation. They're doing something special by calculating the expression $\\mathrm{A}^{2027} \\mathrm{~B}^{2026} v$.<br/><br/>Let's meet the main characters:</p><p>$$<br/>\\text { Let } \\mathbf{A}=\\left[\\begin{array}{ll}<br/>1 &amp; 4 \\\\<br/>0 &amp; 2<br/>\\end{array}\\right], \\mathbf{B}=\\left[\\begin{array}{ll}<br/>1 &amp; -2 \\\\<br/>0 &amp; 0.5<br/>\\end{array}\\right], v=\\left[\\begin{array}{l}<br/>4 \\\\<br/>1<br/>\\end{array}\\right]<br/>$$</p><p>What is the resultant vector of $\\mathrm{A}^{2027} \\mathrm{~B}^{2026} v?$<br/> </p><p> </p><p> </p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\left[\\begin{array}{l}4 \\\\ 1\\end{array}\\right]$</span>",
                "<span style=\"display: inline;\">$\\left[\\begin{array}{l}8 \\\\ 1\\end{array}\\right]$</span>",
                "<span style=\"display: inline;\">$\\left[\\begin{array}{l}8 \\\\ 2\\end{array}\\right]$</span>",
                "<span style=\"display: inline;\">$\\left[\\begin{array}{l}4 \\\\ 2\\end{array}\\right]$</span>"
            ],
            "answer": "C",
            "solution": "<div class=\"solution-content\"><a name=\"525907\"></a><div itemprop=\"text\"><p data-path-to-node=\"3\">As A and B are UTM , so</p><p data-path-to-node=\"3\">$A \\to \\lambda \\to 1, 2$</p><p data-path-to-node=\"4\">$B \\to \\lambda' \\to 1, 0.5$</p><p data-path-to-node=\"4\">Now,</p><p data-path-to-node=\"3\">$B\\mathbf{v}$</p><p data-path-to-node=\"4\">$= \\begin{bmatrix} 1 &amp; -2 \\\\ 0 &amp; 0.5 \\end{bmatrix} \\begin{bmatrix} 4 \\\\ 1 \\end{bmatrix}$</p><p data-path-to-node=\"5\">$= \\begin{bmatrix} 4 - 2 \\\\ 0.5 \\end{bmatrix} = \\begin{bmatrix} 2 \\\\ 0.5 \\end{bmatrix}$</p><p data-path-to-node=\"6\">$= \\frac{1}{2} \\begin{bmatrix} 4 \\\\ 1 \\end{bmatrix}$</p><p data-path-to-node=\"7\">$= 0.5 \\mathbf{v}$</p><p data-path-to-node=\"7\">ie, </p><p data-path-to-node=\"5\">$B \\mathbf{v} = 0.5 \\mathbf{v}$</p><p data-path-to-node=\"6\">$B^{2026} \\mathbf{v} = (0.5)^{2026} \\mathbf{v}$ ------eq(1)</p><p data-path-to-node=\"6\">and also,</p><p data-path-to-node=\"3\">$A \\mathbf{v} =$</p><p data-path-to-node=\"4\">$\\begin{bmatrix} 1 &amp; 4 \\\\ 0 &amp; 2 \\end{bmatrix} \\begin{bmatrix} 4 \\\\ 1 \\end{bmatrix}$</p><p data-path-to-node=\"5\">$= \\begin{bmatrix} 4 + 4 \\\\ 0 + 2 \\end{bmatrix}$</p><p data-path-to-node=\"6\">$= 2 \\begin{bmatrix} 4 \\\\ 1 \\end{bmatrix}$</p><p data-path-to-node=\"7\">$A \\mathbf{v} = 2 \\mathbf{v}$</p><p data-path-to-node=\"8\">$A^{2027}v = 2^{2027} \\mathbf{v}$ -------eq(2)</p><p data-path-to-node=\"8\"> </p><p data-path-to-node=\"3\">Now $A^{2027} (B^{2026} \\mathbf{v})$</p><p data-path-to-node=\"4\">$= A^{2027} (0.5)^{2026} \\mathbf{v}$ $\\quad$ [using eq (1)]</p><p data-path-to-node=\"5\">$= (\\frac{1}{2})^{2026} (A^{2027} \\mathbf{v})$</p><p data-path-to-node=\"6\">$= 2^{-2026} \\times 2^{2027} \\mathbf{v}$ $\\quad$ [using eq (2)]</p><p data-path-to-node=\"7\">$= 2 \\mathbf{v}$</p><p data-path-to-node=\"8\">$= \\begin{bmatrix} 8 \\\\ 2 \\end{bmatrix}$</p><p data-path-to-node=\"8\"> </p><p data-path-to-node=\"8\">ie option C</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/525839/go-classes-dpp-gate-cs-da-linear-algebra-matrix\" target=\"_blank\">GATE Overflow #525839</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>If $C$ is a skew-symmetric matrix of order $n$ and $X$ is $n\\times 1$ column matrix, then $X{^T} CX$ is a</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">Scalar matrix<br/></span>",
                "<span style=\"display: inline;\">Null matrix<br/></span>",
                "<span style=\"display: inline;\">Unit matrix<br/></span>",
                "<span style=\"display: inline;\">matrix will all elements $1$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"525639\"></a><div itemprop=\"text\">Let, $K=X^T C X$<br/> <br/> Since $X^T C X$ is of order $1\\times 1$, $K$ is a $1\\times 1$ matrix.<br/> <br/> Now take transpose:<br/> $K^T=(X^T C X)^T=X^T C^T X$<br/> <br/> Since $C$ is skew-symmetric, $C^T=-C$. Therefore,<br/> $K^T=X^T(-C)X=-X^T C X=-K$<br/> <br/> But $K$ is a $1\\times 1$ matrix, so $K^T=K$.<br/> <br/> Hence, $K=-K$<br/> <br/> So, $2K=0$<br/> <br/> Therefore, $K=0$<br/> <br/> Thus, $X^T C X=0$<br/> <br/> Hence $X^T C X$ is a $1\\times 1$ null matrix.<br/> <br/> So the correct option is $\\boxed{(B)}$</div><br><br><small>Source: <a href=\"https://gateoverflow.in/525638/go-classes-dpp-gate-cs-da-linear-algebra-matrix-arithmetic\" target=\"_blank\">GATE Overflow #525638</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>If\\[<br/>A=\\begin{bmatrix}<br/>\\cos\\alpha &amp; \\sin\\alpha\\\\<br/>-\\sin\\alpha &amp; \\cos\\alpha<br/>\\end{bmatrix}<br/>\\]<br/>and \\(A+A^T=I\\), where \\(I\\) is the identity matrix, then for \\(0\\le \\alpha&lt;2\\pi\\), the value of \\(\\alpha\\) is</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">\\(\\dfrac{\\pi}{6},\\ \\dfrac{11\\pi}{6}\\)<br/></span>",
                "<span style=\"display: inline;\">\\(\\dfrac{\\pi}{3},\\ \\dfrac{5\\pi}{3}\\)<br/></span>",
                "<span style=\"display: inline;\">\\(\\dfrac{\\pi}{2},\\ \\dfrac{3\\pi}{2}\\)<br/></span>",
                "<span style=\"display: inline;\">\\(\\dfrac{2\\pi}{3},\\ \\dfrac{4\\pi}{3}\\)</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"525635\"></a><div itemprop=\"text\">Given $A=\\begin{bmatrix}\\cos\\alpha &amp; \\sin\\alpha\\\\ -\\sin\\alpha &amp; \\cos\\alpha\\end{bmatrix}$<br/> <br/> First, find $A^T$:<br/> <br/> $A^T=\\begin{bmatrix}\\cos\\alpha &amp; -\\sin\\alpha\\\\ \\sin\\alpha &amp; \\cos\\alpha\\end{bmatrix}$<br/> <br/> Now,<br/> $A+A^T=\\begin{bmatrix}\\cos\\alpha &amp; \\sin\\alpha\\\\ -\\sin\\alpha &amp; \\cos\\alpha\\end{bmatrix}+\\begin{bmatrix}\\cos\\alpha &amp; -\\sin\\alpha\\\\ \\sin\\alpha &amp; \\cos\\alpha\\end{bmatrix}=\\begin{bmatrix}2\\cos\\alpha &amp; 0\\\\ 0 &amp; 2\\cos\\alpha\\end{bmatrix}$<br/> <br/> Since $A+A^T=I$, we compare with $I=\\begin{bmatrix}1 &amp; 0\\\\ 0 &amp; 1\\end{bmatrix}$<br/> <br/> Therefore, $2\\cos\\alpha=1$<br/> <br/> So, $\\cos\\alpha=\\frac{1}{2}$<br/> <br/> For $0\\le \\alpha&lt;2\\pi$, $\\alpha=\\frac{\\pi}{3},\\ \\frac{5\\pi}{3}$<br/> <br/> Hence, the correct option is $\\boxed{(B)\\ \\frac{\\pi}{3},\\ \\frac{5\\pi}{3}}$</div><br><br><small>Source: <a href=\"https://gateoverflow.in/525634/go-classes-dpp-gate-cs-da-linear-algebra-matrix\" target=\"_blank\">GATE Overflow #525634</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\">How many invertible $2 \\times 2$ matrices are there whose entries belong to $\\{0,1\\}$ ?</div></span>",
            "image": "",
            "options": [],
            "answer": "6",
            "solution": "<div class=\"solution-content\"><a name=\"525784\"></a><div itemprop=\"text\"><p><img alt=\"\" height=\"815\" src=\"https://gateoverflow.in/?qa=blob&amp;qa_blobid=2490470482747243472\" width=\"777\"/><br/>Answer: 6</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/525556/go-classes-dpp-gate-cs-da-linear-algebra-matrix-invertability\" target=\"_blank\">GATE Overflow #525556</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Let $A$ be $n \\times n$ matrix, $A^{n}$ = $A^{n-1}$ for $n \\geq 1$ and $A^{0}=I$, Which of following is true?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$A^{m}$ .$A^{n}$ =$A^{m+n}$<br/></span>",
                "<span style=\"display: inline;\">$(A^{m})^{n}=A^{mn}$<br/></span>",
                "<span style=\"display: inline;\">both A and B<br/></span>",
                "<span style=\"display: inline;\">none</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"525441\"></a><div itemprop=\"text\">Since $A^n = A^{n-1}$ for $n \\ge 1$, put $n=1$. Then<br/> <br/> $A^1 = A^0$<br/> <br/> So,<br/> <br/> $A = I$<br/> <br/> Hence $A$ is the identity matrix.<br/> <br/> Now check the options:<br/> <br/> For (A),<br/> $A^m \\cdot A^n = I \\cdot I = I$<br/> <br/> and<br/> $A^{m+n} = I$<br/> <br/> So,<br/> $A^m \\cdot A^n = A^{m+n}$<br/> <br/> Thus (A) is true.<br/> <br/> For (B),<br/> $(A^m)^n = I^n = I$<br/> <br/> and<br/> $A^{mn} = I$<br/> <br/> So,<br/> $(A^m)^n = A^{mn}$<br/> <br/> Thus (B) is also true.<br/> <br/> Therefore both (A) and (B) are true.<br/> <br/> So the correct answer is<br/> <br/> $\\boxed{\\text{C. both A and B}}$</div><br><br><small>Source: <a href=\"https://gateoverflow.in/525440/go-classes-dpp-gate-cs-da-linear-algebra-matrix\" target=\"_blank\">GATE Overflow #525440</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\">Let M be a $3 \\times 3$ matrix satisfying:<br/> <br/> $$<br/> M\\left[\\begin{array}{l}<br/> 0 \\\\<br/> 1 \\\\<br/> 0<br/> \\end{array}\\right]=\\left[\\begin{array}{c}<br/> -1 \\\\<br/> 2 \\\\<br/> 3<br/> \\end{array}\\right], \\quad M\\left[\\begin{array}{c}<br/> 1 \\\\<br/> -1 \\\\<br/> 0<br/> \\end{array}\\right]=\\left[\\begin{array}{c}<br/> 1 \\\\<br/> 1 \\\\<br/> -1<br/> \\end{array}\\right], \\text { and } \\quad M\\left[\\begin{array}{l}<br/> 1 \\\\<br/> 1 \\\\<br/> 1<br/> \\end{array}\\right]=\\left[\\begin{array}{c}<br/> 0 \\\\<br/> 0 \\\\<br/> 12<br/> \\end{array}\\right]<br/> $$<br/> Then the sum of the diagonal entries of $M$ is:</div></span>",
            "image": "",
            "options": [],
            "answer": "9",
            "solution": "<div class=\"solution-content\"><a name=\"525118\"></a><div itemprop=\"text\"><p>$\\begin{bmatrix} a &amp; b &amp; c\\\\ p &amp; q &amp; r\\\\ s &amp; t &amp; u \\end{bmatrix} \\begin{bmatrix} 0 &amp;1 &amp; 1\\\\ 1 &amp; -1&amp; 1\\\\ 0&amp; 0&amp; 1 \\end{bmatrix} = \\begin{bmatrix} -1 &amp; 1&amp; 1\\\\ 2 &amp; 1&amp; 1\\\\ 3 &amp; -1&amp; 12 \\end{bmatrix}$<br/><br/>Let's call above equation $M X = B$<br/><br/>We only want to solve for $a$, $q$ and $u$.<br/><br/>To find $q$, multiply $2nd$ row of $M$ with $1st$ column of X to get $q = 2$.<br/><br/>To find $u$,</p><ul><li>Third row * first column gives $t = 3$<br/> </li><li>Third row * second column gives $s - t = -1$. So $s = 2$.<br/> </li><li>Third row * third column gives $s + t + u = 12$. So $u = 7$.</li></ul><p><br/>To find $a$,</p><ul><li>First row * first column gives $b = -1$.<br/> </li><li>First row * second column gives $a - b = 1$. So $a = 0$.</li></ul><p><br/>Thus, Answer : $7 + 2 = \\boxed{9}$.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/525117/go-classes-dpp-gate-cs-da-linear-algebra-matrix-algebra\" target=\"_blank\">GATE Overflow #525117</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Let $A$ be an $n\\times n$ invertible matrix with real entries whose row sums are all equal to $c$. Consider the following statements:</p><p>Which of the following is <strong>TRUE</strong>?</p><p><strong>Given Details:</strong></p><ul><li>none of the statements $(1), (2), (3)$ is correct</li><li>statement $(1)$ is correct but not necessarily statements $(2)$ or $(3)$</li><li>statement $(1)$ and $(2)$ are correct but not necessarily statement $(3)$</li><li>all the three statements $(1), (2),$ and $(3)$ are correct</li></ul></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">Every row in the matrix $2A$ sums to $2c$.</span>",
                "<span style=\"display: inline;\">Every row in the matrix $A^{2}$ sums to $c^{2}$.</span>",
                "<span style=\"display: inline;\">Every row in the matrix $A^{-1}$ sums to $c^{-1}$.</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"525047\"></a><div itemprop=\"text\">$$<br/> A\\left(\\begin{array}{c}<br/> 1 \\\\<br/> 1 \\\\<br/> \\ldots \\\\<br/> 1<br/> \\end{array}\\right)<br/> $$<br/> gives a column vector each of whose entries is the row sum, $r$ say.<br/> <br/> Then<br/> $$<br/> \\begin{gathered}<br/> 2 A\\left(\\begin{array}{c}<br/> 1 \\\\<br/> 1 \\\\<br/> \\ldots \\\\<br/> 1<br/> \\end{array}\\right)=2\\left(\\begin{array}{c}<br/> r \\\\<br/> r \\\\<br/> \\ldots \\\\<br/> r<br/> \\end{array}\\right)=\\left(\\begin{array}{c}<br/> 2 r \\\\<br/> 2 r \\\\<br/> \\ldots \\\\<br/> 2 r<br/> \\end{array}\\right) . \\\\\\\\<br/> A^2\\left(\\begin{array}{c}<br/> 1 \\\\<br/> 1 \\\\<br/> \\ldots \\\\<br/> 1<br/> \\end{array}\\right)=A\\left(\\begin{array}{c}<br/> r \\\\<br/> r \\\\<br/> \\ldots \\\\<br/> r<br/> \\end{array}\\right)=r A\\left(\\begin{array}{c}<br/> 1 \\\\<br/> 1 \\\\<br/> \\ldots \\\\<br/> 1<br/> \\end{array}\\right)=\\left(\\begin{array}{c}<br/> r^2 \\\\<br/> r^2 \\\\<br/> \\ldots \\\\<br/> r^2<br/> \\end{array}\\right) \\\\\\\\<br/> A^{-1}\\left(\\begin{array}{c}<br/> r \\\\<br/> r \\\\<br/> \\ldots \\\\<br/> r<br/> \\end{array}\\right)=A^{-1} A\\left(\\begin{array}{c}<br/> 1 \\\\<br/> 1 \\\\<br/> \\ldots \\\\<br/> 1<br/> \\end{array}\\right)=\\left(\\begin{array}{c}<br/> 1 \\\\<br/> 1 \\\\<br/> \\ldots \\\\<br/> 1<br/> \\end{array}\\right)<br/> \\end{gathered}<br/> $$<br/> and therefore<br/> $$<br/> A^{-1}\\left(\\begin{array}{c}<br/> 1 \\\\<br/> 1 \\\\<br/> \\ldots \\\\<br/> 1<br/> \\end{array}\\right)=\\left(\\begin{array}{c}<br/> r^{-1} \\\\<br/> r^{-1} \\\\<br/> \\ldots \\\\<br/> r^{-1}<br/> \\end{array}\\right)<br/> $$</div><br><br><small>Source: <a href=\"https://gateoverflow.in/525045/go-classes-dpp-gate-cs-da-linear-algebra-matrix\" target=\"_blank\">GATE Overflow #525045</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Suppose $A$ and $B$ are invertible $3 \\times 3$ matrices, with inverses</p><p>$$<br/>A^{-1}=\\left[\\begin{array}{ccc}<br/>1 &amp; 0 &amp; 0 \\\\<br/>-2 &amp; 1 &amp; 0 \\\\<br/>0 &amp; 0 &amp; 1<br/>\\end{array}\\right] \\quad \\text { and } \\quad B^{-1}=\\left[\\begin{array}{lll}<br/>1 &amp; 0 &amp; 0 \\\\<br/>0 &amp; 1 &amp; 0 \\\\<br/>0 &amp; 5 &amp; 1<br/>\\end{array}\\right]<br/>$$</p><p><br/>What is $(A B)^{-1}$ ?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\left[\\begin{array}{ccc}1 & 0 & 0 \\\\ 2 & 1 & 0 \\\\ 0 & -5 & 1\\end{array}\\right]$<br/></span>",
                "<span style=\"display: inline;\">$\\left[\\begin{array}{ccc}1 & 0 & 0 \\\\ 2 & 1 & 0 \\\\ -10 & -5 & 1\\end{array}\\right]$<br/></span>",
                "<span style=\"display: inline;\">$\\left[\\begin{array}{ccc}1 & 0 & 0 \\\\ -2 & 1 & 0 \\\\ 0 & 5 & 1\\end{array}\\right]$<br/></span>",
                "<span style=\"display: inline;\">$\\left[\\begin{array}{ccc}1 & 0 & 0 \\\\ -2 & 1 & 0 \\\\ -10 & 5 & 1\\end{array}\\right]$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"525044\"></a><div itemprop=\"text\">\\begin{aligned}<br/> &amp;\\text { Using the property }(A B)^{-1}=B^{-1} A^{-1} \\text {, we compute: }\\\\\\\\<br/> &amp;B^{-1} A^{-1}=\\left[\\begin{array}{lll}<br/> 1 &amp; 0 &amp; 0 \\\\<br/> 0 &amp; 1 &amp; 0 \\\\<br/> 0 &amp; 5 &amp; 1<br/> \\end{array}\\right]\\left[\\begin{array}{ccc}<br/> 1 &amp; 0 &amp; 0 \\\\<br/> -2 &amp; 1 &amp; 0 \\\\<br/> 0 &amp; 0 &amp; 1<br/> \\end{array}\\right]=\\left[\\begin{array}{ccc}<br/> 1 &amp; 0 &amp; 0 \\\\<br/> -2 &amp; 1 &amp; 0 \\\\<br/> -10 &amp; 5 &amp; 1<br/> \\end{array}\\right]<br/> \\end{aligned}</div><br><br><small>Source: <a href=\"https://gateoverflow.in/525043/go-classes-dpp-gate-cs-da-linear-algebra-inverse-properties\" target=\"_blank\">GATE Overflow #525043</a></small></div>"
        }
    ]
});

registerTest({
    "name": "DPP 24 - Engineering Mathematics (Matrices & Basic Operations - Part 4)",
    "testLabel": "DPP 24",
    "testType": "DPP",
    "bracket": "Matrices & Basic Operations - Part 4",
    "subject": "em",
    "series": "cse-dpp-2027",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 10,
    "topicsCovered": "Matrices & Basic Operations (Practice Set 4)",
    "questions": [
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>If $\\text{A}$ and $\\text{B}$ are square matrices with same order and $\\text{A}$ is symmetric, then $\\text{B}^{\\text{T}}\\text{AB}$ is</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">Skew symmetric<br/></span>",
                "<span style=\"display: inline;\">Symmetric<br/></span>",
                "<span style=\"display: inline;\">Orthogonal<br/></span>",
                "<span style=\"display: inline;\">Idempotent</span>"
            ],
            "answer": "B",
            "solution": "<div class=\"solution-content\"><a name=\"524801\"></a><div itemprop=\"text\">Given that $A$ is symmetric, so $A^T=A$.<br/> <br/> Let $M=B^T A B$.<br/> <br/> Take transpose:<br/> <br/> $M^T=(B^T A B)^T$<br/> <br/> Using $(XYZ)^T=Z^T Y^T X^T$,<br/> <br/> $(B^T A B)^T = B^T A^T B$<br/> <br/> Since $A^T=A$,<br/> <br/> $M^T=B^T A B=M$<br/> <br/> So $M$ is symmetric.<br/> <br/> Therefore, the correct option is $\\boxed{\\text{(B) Symmetric}}$</div><br><br><small>Source: <a href=\"https://gateoverflow.in/524800/go-classes-dpp-gate-cs-da-linear-algebra-matrices\" target=\"_blank\">GATE Overflow #524800</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>The statements $P$ and $Q$ are related to matrices $A$ and $B$, which are conformable for both addition and multiplication.</p><p>$$<br/>\\begin{aligned}<br/>&amp; P:(A+B)^{\\top}=A^{\\top}+B^{\\top} \\\\\\\\<br/>&amp; Q:(A B)^{\\top}=A^{\\top} B^{\\top}<br/>\\end{aligned}<br/>$$</p><p><br/>Which one of the following options is CORRECT?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$P$ is TRUE and $Q$ is FALSE<br/></span>",
                "<span style=\"display: inline;\">Both $P$ and $Q$ are TRUE<br/></span>",
                "<span style=\"display: inline;\">$P$ is FALSE and $Q$ is TRUE<br/></span>",
                "<span style=\"display: inline;\">Both $P$ and $Q$ are FALSE</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"524740\"></a><div itemprop=\"text\">According to properties of a matrix<br/> <br/> (i) $(A+B)^{\\top}=A^{\\top}+B^{\\top}$<br/> <br/> The sum of transpose of matrices is equal to the transpose of the sum of two matrices.<br/> <br/> (ii) $(A B)^{\\top}=B^{\\top} A^{\\top}$<br/> <br/> The product of the transpose of two matrices in reverse order is equal to the transpose of the product of them.</div><br><br><small>Source: <a href=\"https://gateoverflow.in/524739/go-classes-dpp-gate-cs-da-linear-algebra-matrices\" target=\"_blank\">GATE Overflow #524739</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Suppose $A$ is a $3 \\times 3$ matrix so that</p><p>$$<br/>A\\left[\\begin{array}{l}<br/>1 \\\\<br/>4 \\\\<br/>2<br/>\\end{array}\\right]=\\left[\\begin{array}{l}<br/>1 \\\\<br/>0 \\\\<br/>0<br/>\\end{array}\\right], \\quad A\\left[\\begin{array}{l}<br/>3 \\\\<br/>1 \\\\<br/>0<br/>\\end{array}\\right]=\\left[\\begin{array}{l}<br/>0 \\\\<br/>1 \\\\<br/>0<br/>\\end{array}\\right], \\text { and } \\quad A\\left[\\begin{array}{l}<br/>2 \\\\<br/>1 \\\\<br/>7<br/>\\end{array}\\right]=\\left[\\begin{array}{l}<br/>0 \\\\<br/>0 \\\\<br/>1<br/>\\end{array}\\right]<br/>$$</p><p><br/>What is the first column of $A^{-1}$ ?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\left[\\begin{array}{l}1 \\\\ 3 \\\\ 2\\end{array}\\right]$<br/></span>",
                "<span style=\"display: inline;\">$\\left[\\begin{array}{l}1 \\\\ 4 \\\\ 2\\end{array}\\right]$<br/></span>",
                "<span style=\"display: inline;\">$\\left[\\begin{array}{l}3 \\\\ 1 \\\\ 0\\end{array}\\right]$<br/></span>",
                "<span style=\"display: inline;\">$\\left[\\begin{array}{l}2 \\\\ 1 \\\\ 7\\end{array}\\right]$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"524658\"></a><div itemprop=\"text\">If we create a matrix $B$ with columns as $\\left[\\begin{array}{lll}1 &amp; 4 &amp; 2\\end{array}\\right]^T,\\left[\\begin{array}{lll}3 &amp; 1 &amp; 0\\end{array}\\right]^T,\\left[\\begin{array}{lll}2 &amp; 1 &amp; 7\\end{array}\\right]^T$.<br/> <br/> $$<br/> \\begin{gathered}<br/> B=\\left[\\begin{array}{lll}<br/> 1 &amp; 3 &amp; 2 \\\\<br/> 4 &amp; 1 &amp; 1 \\\\<br/> 2 &amp; 0 &amp; 7<br/> \\end{array}\\right] \\\\\\\\<br/> A \\cdot B=\\left[\\begin{array}{lll}<br/> 1 &amp; 0 &amp; 0 \\\\<br/> 0 &amp; 1 &amp; 0 \\\\<br/> 0 &amp; 0 &amp; 1<br/> \\end{array}\\right]<br/> \\end{gathered}<br/> $$<br/> $\\Longrightarrow A B=I \\quad$ [Asking for column of $A^{-1}$, so $A^{-1}$ exists.]<br/> <br/> $$<br/> \\Longrightarrow A^{-1} A B=A^{-1} \\Longrightarrow B=A^{-1}<br/> $$<br/> <br/> First column is: $<br/> \\left[\\begin{array}{l}<br/> 1 \\\\<br/> 4 \\\\<br/> 2<br/> \\end{array}\\right]<br/> $<br/> </div><br><br><small>Source: <a href=\"https://gateoverflow.in/524656/go-classes-dpp-gate-cs-da-linear-algebra-matrices\" target=\"_blank\">GATE Overflow #524656</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>For fixed \\(a,b\\in\\mathbb{R}\\), the matrix $A(x)=\\begin{bmatrix}<br/>x^{2}+ab &amp; x\\\\<br/>a+b &amp; 1<br/>\\end{bmatrix}$, is invertible if and only if</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">\\(x\\in\\mathbb{R}\\)<br/></span>",
                "<span style=\"display: inline;\">\\(x\\in\\mathbb{R},\\ x\\neq 0\\)<br/></span>",
                "<span style=\"display: inline;\">\\(x\\in\\mathbb{R},\\ x>\\max\\{a,b\\}\\)<br/></span>",
                "<span style=\"display: inline;\">\\(x\\in\\mathbb{R},\\ x\\neq a,b\\)</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"524549\"></a><div itemprop=\"text\">$$<br/> A(x)=\\left[\\begin{array}{cc}<br/> x^2+a b &amp; x \\\\<br/> a+b &amp; 1<br/> \\end{array}\\right]<br/> $$<br/> A matrix is invertible if and only if its determinant is non-zero. Compute<br/> \\[<br/> \\det(A(x))=(x^{2}+ab)\\cdot 1 - x(a+b)<br/> = x^{2}-x(a+b)+ab.<br/> \\]<br/> Factor:<br/> \\[<br/> x^{2}-x(a+b)+ab=(x-a)(x-b).<br/> \\]<br/> Hence \\(A(x)\\) is invertible iff<br/> $$\\det(A(x))\\neq 0 \\iff (x-a)(x-b)\\neq 0 \\iff x\\neq a \\text{ and } x\\neq b.$$<br/> $$\\boxed{x\\in\\mathbb{R},\\ x\\ne a,b}$$</div><br><br><small>Source: <a href=\"https://gateoverflow.in/524548/go-classes-dpp-gate-cs-da-linear-algebra-invertibility-of-a-matrix\" target=\"_blank\">GATE Overflow #524548</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Which of the following is <strong>TRUE</strong> ?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">If a system $A x=b$ has more than one solution, then so does the system $A x=0$.<br/></span>",
                "<span style=\"display: inline;\">If $B C=B D$, then $C=D$.<br/></span>",
                "<span style=\"display: inline;\">If $A$ and $B$ are $n \\times n$ matrices, then $(A+B)(A-B)=A^{2}-B^{2}$.<br/></span>",
                "<span style=\"display: inline;\">If $A$ is invertible and $r \\neq 0$, then $(r A)^{-1}=r A^{-1}$.</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"524480\"></a><div itemprop=\"text\"><p>(A). If $Ax=b$ has more than one solution, then so does $Ax=0$.</p><p>Suppose $x_1 \\ne x_2$ and $Ax_1=b$, $Ax_2=b$. Subtract:</p><p>$A(x_1-x_2)=Ax_1-Ax_2=b-b=0$</p><p>and $x_1-x_2 \\ne 0$. So $Ax=0$ has a nontrivial solution, hence more than one solution. <br/>Therefore, A is <strong>true.</strong><br/> </p><p>(B). If $BC=BD$, then $C=D$.</p><p>This is true only if $B$ is invertible. If $B$ is singular, cancellation may fail, so $BC=BD$ does not necessarily imply $C=D$. <br/>Therefore, B is <strong>false.</strong></p><p><br/>(C). If $A$ and $B$ are $n \\times n$ matrices, then $(A+B)(A-B)=A^2-B^2$.</p><p>Expand:</p><p>$(A+B)(A-B)=A^2-AB+BA-B^2$</p><p>This equals $A^2-B^2$ only when $AB=BA$, which is not true in general. <br/>Therefore, C is <strong>false.</strong><br/> </p><p>(D). If $A$ is invertible and $r \\ne 0$, then $(rA)^{-1}=rA^{-1}$.</p><p>Actually,</p><p>$(rA)^{-1}=\\frac{1}{r}A^{-1}$</p><p>So D is <strong>false</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/524479/go-classes-dpp-gate-cs-da-linear-algebra-matrix-properties\" target=\"_blank\">GATE Overflow #524479</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Let \\(A\\) be a \\(4\\times 4\\) matrix such that each row of \\(A\\) is a permutation of \\(\\{1,2,3,4\\}\\).<br/>Let \\(B\\) be a \\(4\\times 4\\) matrix such that each row of \\(B\\) is a permutation of \\(\\{-1,-2,-3,6\\}\\).<br/>Select the right option.</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">Both \\(A\\) and \\(B\\) <strong>can be</strong> invertible.<br/></span>",
                "<span style=\"display: inline;\">Both \\(A\\) and \\(B\\) <strong>cannot be</strong> invertible.<br/></span>",
                "<span style=\"display: inline;\">\\(A\\) <strong>can be</strong> invertible but \\(B\\) <strong>cannot be</strong> invertible.<br/></span>",
                "<span style=\"display: inline;\">\\(B\\) <strong>can be</strong> invertible but \\(A\\) <strong>cannot be</strong> invertible.</span>"
            ],
            "answer": "B",
            "solution": "<div class=\"solution-content\"><a name=\"524329\"></a><div itemprop=\"text\"><p><strong>Why $B$ cannot be invertible</strong><br/><br/>Each row of $B$ is a permutation of $\\{-1,-2,-3,6\\}$.<br/>So the sum of entries in <strong>every row</strong> is the same:</p><p>$$<br/>-1-2-3+6=0<br/>$$<br/>Let $\\mathbf{1}=\\left[\\begin{array}{l}1 \\\\ 1 \\\\ 1 \\\\ 1\\end{array}\\right]$. For any row $r$ of $B, r \\cdot \\mathbf{1}=0$. That means</p><p>$$<br/>B \\mathbf{1}=\\mathbf{0}<br/>$$</p><p><br/>So $B$ has a nonzero vector in its null space, hence</p><p>$$<br/>\\operatorname{det}(B)=0<br/>$$Therefore, $B$ <strong>is not invertible.</strong><br/> </p><p><br/><strong>Why $A$ can be invertible</strong><br/><br/>Each row of $A$ is a permutation of $\\{1,2,3,4\\}$, so every row sum is<br/>$$<br/>1+2+3+4=10<br/>$$That does not force $A \\mathbf{1}=0$. So this row sum fact does not make $A$ singular.<br/><br/>Also, we can actually build an invertible example, for instance take rows as cyclic shifts:</p><p>$$<br/>A=\\left[\\begin{array}{llll}<br/>1 &amp; 2 &amp; 3 &amp; 4 \\\\<br/>2 &amp; 3 &amp; 4 &amp; 1 \\\\<br/>3 &amp; 4 &amp; 1 &amp; 2 \\\\<br/>4 &amp; 1 &amp; 2 &amp; 3<br/>\\end{array}\\right]<br/>$$</p><p>These rows are not forced to be dependent, and such a choice can be invertible.<br/>So $A$ <strong>can be invertible.</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/524321/go-classes-dpp-gate-cs-da-linear-algebra-inverse-of-a-matrix\" target=\"_blank\">GATE Overflow #524321</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Let \\(A\\) be an \\(n\\times n\\) matrix whose entries are all either \\(0\\) or \\(1\\).<br/>If \\(A\\) is invertible, then the maximum possible number of zero entries in \\(A\\) is</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$n^2-2n$<br/></span>",
                "<span style=\"display: inline;\">$n^2-(n-1)$<br/></span>",
                "<span style=\"display: inline;\">$n^2-n$<br/></span>",
                "<span style=\"display: inline;\">inderterminate without knowing the actual value of $n$</span>"
            ],
            "answer": "C",
            "solution": "<div class=\"solution-content\"><a name=\"524181\"></a><div itemprop=\"text\"><p>An $n \\times n$ matrix with entries only $0$ or $1$ can be invertible only if its rows (and columns) are linearly independent.</p><p>To <strong>maximize the number of zeros</strong>, we must <strong>minimize the number of ones</strong> while keeping the matrix invertible.</p><p><em><strong>Key point</strong></em>$:$ <em>If any row is all zeros, the matrix is singular. So <strong>each row must contain at least one</strong> $\\mathbf{1}$. With $n$ rows, the matrix must have <strong>at least $n$ ones.</strong></em></p><p>This minimum is achievable using the identity matrix $I_n$, which has exactly $n$ ones and the rest zeros, and it is invertible.</p><p>Total entries $=n^2$<br/><br/>Minimum ones $=n$<br/><br/>So maximum zeros $=n^2-n$<br/><br/>$\\boxed{n^2-n}$</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/524178/go-classes-dpp-gate-cs-da-linear-algebra-matrix-invertibility\" target=\"_blank\">GATE Overflow #524178</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>If $A$ and $B$ are $3 \\times 3$ matrices and $B=\\left[\\[\\begin{array}{lll}\\mathbf{b}_1 &amp; \\mathbf{b}_2 &amp; \\mathbf{b}_3\\end{array}\\]\\right]$, where $\\mathbf{b}_1=\\left[\\[\\begin{array}{l}b_{11} \\\\ b_{21} \\\\ b_{31}\\end{array}\\]\\right], \\mathbf{b}_2=\\left[\\[\\begin{array}{l}b_{12} \\\\ b_{22} \\\\ b_{32}\\end{array}\\]\\right], \\mathbf{b}_3=\\left[\\[\\begin{array}{l}b_{13} \\\\ b_{23} \\\\ b_{33}\\end{array}\\]\\right]$,<br/>then the product matrix $A B=$<br/> </p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$[\\mathbf{b}_1 A \\quad \\mathbf{b}_2 A \\quad \\mathbf{b}_3 A]$<br/></span>",
                "<span style=\"display: inline;\">$[A \\mathbf{b}_1+A \\mathbf{b}_2+A \\mathbf{b}_3]$<br/></span>",
                "<span style=\"display: inline;\">$[A \\mathbf{b}_1+A \\mathbf{b}_2 \\quad A \\mathbf{b}_2+A \\mathbf{b}_3 \\quad A \\mathbf{b}_1+A \\mathbf{b}_3]$<br/></span>",
                "<span style=\"display: inline;\">$[A \\mathbf{b}_1 \\quad A \\mathbf{b}_2 \\quad A \\mathbf{b}_3]$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"524175\"></a><div itemprop=\"text\"><article data-scroll-anchor=\"true\" data-testid=\"conversation-turn-42\" data-turn=\"assistant\" data-turn-id=\"request-69a6b08f-b0d8-83a2-8892-b2fba49215b0-0\" dir=\"auto\" tabindex=\"-1\"><p data-end=\"187\" data-start=\"51\">If $B=[b_1\\quad b_2\\quad b_3]$ where $b_1,b_2,b_3$ are the column vectors of $B$, then multiplying by $A$ on the left acts column by column:<br/><br/>$AB=\\begin{bmatrix} Ab_1 &amp; Ab_2 &amp; Ab_3 \\end{bmatrix}$<br/><br/><strong>Reason:</strong> the $j$th column of $AB$ is $A$ times the $j$th column of $B$.<br/><br/>Hence,<br/><br/>$\\boxed{AB=\\begin{bmatrix} Ab_1 &amp; Ab_2 &amp; Ab_3 \\end{bmatrix}.}$</p></article></div><br><br><small>Source: <a href=\"https://gateoverflow.in/524174/go-classes-dpp-gate-cs-da-linear-algebra-matrix-multiplication\" target=\"_blank\">GATE Overflow #524174</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Let\\[<br/>A=\\begin{bmatrix}1\\\\2\\\\3\\end{bmatrix},\\qquad<br/>B=\\begin{bmatrix}1\\\\2\\end{bmatrix}.<br/>\\]<br/>Which of the following matrix products is <strong>NOT</strong> defined?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">\\(AB^{T}\\)<br/></span>",
                "<span style=\"display: inline;\">\\(BA^{T}\\)<br/></span>",
                "<span style=\"display: inline;\">\\(A^{T}B\\)<br/></span>",
                "<span style=\"display: inline;\">\\(AA^{T}\\)</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"524116\"></a><div itemprop=\"text\"><p>Here \\(A\\) is \\(3\\times 1\\) and \\(B\\) is \\(2\\times 1\\). Hence \\(A^T\\) is \\(1\\times 3\\) and \\(B^T\\) is \\(1\\times 2\\).</p><ul><li>$AB^T:\\ (3\\times 1)(1\\times 2)\\ \\text{is defined} \\Rightarrow 3\\times 2$<br/> </li><li>$BA^T:\\ (2\\times 1)(1\\times 3)\\ \\text{is defined} \\Rightarrow 2\\times 3$<br/> </li><li>$A^T B:\\ (1\\times 3)(2\\times 1)\\ \\text{is NOT defined since } 3\\neq 2$<br/> </li><li>$AA^T:\\ (3\\times 1)(1\\times 3)\\ \\text{is defined} \\Rightarrow 3\\times 3$</li></ul></div><br><br><small>Source: <a href=\"https://gateoverflow.in/524115/go-classes-dpp-gate-cs-da-linear-algebra-matrix\" target=\"_blank\">GATE Overflow #524115</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Suppose \\(A\\) and \\(B\\) are two square matrices of the same size, then which of the following statements is <strong>NOT necessarily true</strong>?</p><ul><li>$\\text{Statement 1} :$ \\((A+B)^2 = A^2 + 2AB + B^2\\)<br/> </li><li>$\\text{Statement 2} :$ \\((A+B)^2 = A^2 + AB + BA + B^2\\)<br/> </li><li>$\\text{Statement 3} :$ \\((A+B)^2 = A(A+B) + B(A+B)\\)</li></ul><div> </div></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\text{Statement 1}$<br/></span>",
                "<span style=\"display: inline;\">$\\text{Statement 2}$<br/></span>",
                "<span style=\"display: inline;\">$\\text{Statement 3}$<br/></span>",
                "<span style=\"display: inline;\">$\\text{All 3 statements}$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"524114\"></a><div itemprop=\"text\"><p>For matrices, multiplication is distributive, but in general $AB \\ne BA$.</p><p>Expand $(A+B)^2$:</p><p>$(A+B)^2=(A+B)(A+B)=A(A+B)+B(A+B)$</p><p>Now use distributivity:</p><p>$A(A+B)=A^2+AB$</p><p>$B(A+B)=BA+B^2$</p><p>So,</p><p>$(A+B)^2=A^2+AB+BA+B^2$</p><p>Now check the statements.</p><p>$\\textbf{Statement 2:}$ $(A+B)^2=A^2+AB+BA+B^2$ <br/>This matches the correct expansion, so it is always true.</p><p>$\\textbf{Statement 3:}$ $(A+B)^2=A(A+B)+B(A+B)$ <br/>This is the distributive step, so it is always true.</p><p>$\\textbf{Statement 1:}$ $(A+B)^2=A^2+2AB+B^2$ <br/>This would require $AB+BA=2AB$, which happens only if $AB=BA$. That is not necessarily true for matrices.<br/> </p><p>Therefore, the statement that is <strong>not necessarily true</strong> is $\\boxed{\\text{Statement 1}}$</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/524113/go-classes-dpp-gate-cs-da-linear-algebra-matrix-algebra\" target=\"_blank\">GATE Overflow #524113</a></small></div>"
        }
    ]
});

registerTest({
    "name": "DPP 25 - Engineering Mathematics (Matrices & Basic Operations - Part 5)",
    "testLabel": "DPP 25",
    "testType": "DPP",
    "bracket": "Matrices & Basic Operations - Part 5",
    "subject": "em",
    "series": "cse-dpp-2027",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 11,
    "topicsCovered": "Matrices & Basic Operations (Practice Set 5)",
    "questions": [
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\">Let<br/> \\[<br/> A=\\begin{bmatrix}<br/> 3 &amp; 4\\\\<br/> -2 &amp; 1<br/> \\end{bmatrix},\\qquad<br/> B=\\begin{bmatrix}<br/> 5 &amp; -6\\\\<br/> 3 &amp; k<br/> \\end{bmatrix}.<br/> \\]<br/> The value of \\(k\\) for which \\(AB=BA\\) is $\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_.$</div></span>",
            "image": "",
            "options": [],
            "answer": "8",
            "solution": "<div class=\"solution-content\"><a name=\"524107\"></a><div itemprop=\"text\">Given,<br/> <br/> $A=\\begin{bmatrix}3&amp;4\\\\-2&amp;1\\end{bmatrix},\\quad B=\\begin{bmatrix}5&amp;-6\\\\3&amp;k\\end{bmatrix}$<br/> <br/> We want $AB=BA$.<br/> <br/> <br/> First compute $AB$:<br/> <br/> $AB=\\begin{bmatrix}<br/> 3\\cdot5+4\\cdot3 &amp; 3(-6)+4k \\\\<br/> -2\\cdot5+1\\cdot3 &amp; (-2)(-6)+k<br/> \\end{bmatrix}<br/> =\\begin{bmatrix}<br/> 27 &amp; -18+4k \\\\<br/> -7 &amp; 12+k<br/> \\end{bmatrix}$<br/> <br/> Now compute $BA$:<br/> <br/> $BA=\\begin{bmatrix}<br/> 5\\cdot3+(-6)(-2) &amp; 5\\cdot4+(-6)\\cdot1 \\\\<br/> 3\\cdot3+k(-2) &amp; 3\\cdot4+k\\cdot1<br/> \\end{bmatrix}<br/> =\\begin{bmatrix}<br/> 27 &amp; 14 \\\\<br/> 9-2k &amp; 12+k<br/> \\end{bmatrix}$<br/> <br/> Now set corresponding entries equal.<br/> <br/> From the top right entry:<br/> <br/> $-18+4k=14 \\Rightarrow 4k=32 \\Rightarrow k=8$<br/> <br/> Check bottom left entry:<br/> <br/> $-7=9-2k \\Rightarrow -16=-2k \\Rightarrow k=8$<br/> <br/> So the value of $k$ is $\\boxed{8}$</div><br><br><small>Source: <a href=\"https://gateoverflow.in/524106/go-classes-dpp-gate-cs-da-linear-algebra-matrix-multiplication\" target=\"_blank\">GATE Overflow #524106</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Let $A$ be an $n \\times n$ real matrix. Which one of the following statements is equivalent to the condition that $A$ is invertible?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">For every $b \\in \\mathbb{R}^n$, the system $A x=b$ has at least one solution<br/></span>",
                "<span style=\"display: inline;\">The homogeneous system $A x=0$ has infinitely many solutions<br/></span>",
                "<span style=\"display: inline;\">If $A x=b$ is consistent for some $b \\in \\mathbb{R}^n$, then it has a unique solution<br/></span>",
                "<span style=\"display: inline;\">For every $b \\in \\mathbb{R}^n$, the system $A x=b$ has exactly one solution</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"524450\"></a><div itemprop=\"text\"><p>Given matrix A is invertible and a square matrix, so all columns are linearly independent.</p><p><strong>Option A:</strong> False, because it only guarantees at least one solution, but does not ensure uniqueness for every b.</p><p><strong>Option B:</strong> False, because the homogeneous system Ax=0 cannot have infinitely many solutions when the columns are linearly independent.</p><p><strong>Option C:</strong> False, because it mentions consistency for <em>some</em> b, whereas invertibility requires a solution for <em>every</em> b.</p><p><strong>Option D:</strong> Correct, because for every b∈Rn, the system Ax=b has exactly one solution.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/523954/go-classes-dpp-gate-cs-da-linear-algebra-matrix\" target=\"_blank\">GATE Overflow #523954</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\">Let$$<br/> A=\\begin{bmatrix}<br/> 1 &amp; 1\\\\<br/> 2 &amp; 3<br/> \\end{bmatrix},\\quad<br/> B=\\begin{bmatrix}<br/> -2 &amp; 1\\\\<br/> 4 &amp; 3<br/> \\end{bmatrix},\\quad<br/> C=\\begin{bmatrix}<br/> 1 &amp; 3\\\\<br/> -1 &amp; 4<br/> \\end{bmatrix}<br/> $$and $$<br/> M=\\begin{bmatrix}<br/> -1 &amp; 8\\\\<br/> -3 &amp; 9<br/> \\end{bmatrix}.<br/> $$If $$<br/> M=aA+bB+cC,<br/> $$<br/> where \\(a,b,c\\) are scalars, then the value of \\(a+b+c\\) is $\\_\\_\\_\\_\\_\\_\\_.$</div></span>",
            "image": "",
            "options": [],
            "answer": "2",
            "solution": "<div class=\"solution-content\"><a name=\"523945\"></a><div itemprop=\"text\">We are given<br/> <br/> $A=\\begin{bmatrix}1&amp;1\\\\2&amp;3\\end{bmatrix}, \\quad<br/> B=\\begin{bmatrix}-2&amp;1\\\\4&amp;3\\end{bmatrix}, \\quad<br/> C=\\begin{bmatrix}1&amp;3\\\\-1&amp;4\\end{bmatrix}$<br/> <br/> and<br/> <br/> $M=\\begin{bmatrix}-1&amp;8\\\\-3&amp;9\\end{bmatrix}$<br/> <br/> such that<br/> <br/> $M=aA+bB+cC$<br/> <br/> So,<br/> <br/> $aA+bB+cC<br/> =<br/> a\\begin{bmatrix}1&amp;1\\\\2&amp;3\\end{bmatrix}<br/> +b\\begin{bmatrix}-2&amp;1\\\\4&amp;3\\end{bmatrix}<br/> +c\\begin{bmatrix}1&amp;3\\\\-1&amp;4\\end{bmatrix}$<br/> <br/> Adding corresponding entries,<br/> <br/> $aA+bB+cC=<br/> \\begin{bmatrix}<br/> a-2b+c &amp; a+b+3c \\\\<br/> 2a+4b-c &amp; 3a+3b+4c<br/> \\end{bmatrix}$<br/> <br/> Now compare this with<br/> <br/> $\\begin{bmatrix}-1&amp;8\\\\-3&amp;9\\end{bmatrix}$<br/> <br/> Thus, we get the system<br/> <br/> $a-2b+c=-1$<br/> <br/> $a+b+3c=8$<br/> <br/> $2a+4b-c=-3$<br/> <br/> $3a+3b+4c=9$<br/> <br/> From the first equation,<br/> <br/> $a=-1+2b-c$<br/> <br/> Substitute this into the second equation:<br/> <br/> $(-1+2b-c)+b+3c=8$<br/> <br/> $3b+2c=9$<br/> <br/> Substitute $a=-1+2b-c$ into the third equation:<br/> <br/> $2(-1+2b-c)+4b-c=-3$<br/> <br/> $-2+4b-2c+4b-c=-3$<br/> <br/> $8b-3c=-1$<br/> <br/> Now solve the two equations:<br/> <br/> $3b+2c=9$<br/> <br/> $8b-3c=-1$<br/> <br/> Multiplying the first equation by $3$,<br/> <br/> $9b+6c=27$<br/> <br/> Multiplying the second equation by $2$,<br/> <br/> $16b-6c=-2$<br/> <br/> Adding,<br/> <br/> $25b=25 \\Rightarrow b=1$<br/> <br/> Substitute $b=1$ into $3b+2c=9$:<br/> <br/> $3(1)+2c=9$<br/> <br/> $2c=6 \\Rightarrow c=3$<br/> <br/> Now substitute $b=1$ and $c=3$ into $a=-1+2b-c$:<br/> <br/> $a=-1+2(1)-3=-2$<br/> <br/> Therefore,<br/> <br/> $a+b+c=-2+1+3=2$<br/> <br/> Hence,<br/> <br/> $\\boxed{2}$</div><br><br><small>Source: <a href=\"https://gateoverflow.in/523944/go-classes-dpp-gate-cs-da-linear-algebra-linear-combination-of-matrices\" target=\"_blank\">GATE Overflow #523944</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"89\" data-start=\"34\">Let $A=\\begin{pmatrix} a &amp; b \\\\ c &amp; d \\end{pmatrix}$. We wish to obtain the matrix $\\begin{pmatrix} b &amp; a \\\\ d &amp; c \\end{pmatrix}$ by multiplication $A$ with another $2 \\times 2$ matrix.</p><p data-end=\"282\" data-start=\"233\">Which one of the following statements is correct?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">There exists a unique matrix $M_{2\\times2}$ such that, $MA$ gives us the required matrix.<br/></span>",
                "<span style=\"display: inline;\">There exists a unique matrix $N_{2\\times2}$ such that, $AN$ gives the required matrix.<br/></span>",
                "<span style=\"display: inline;\">Both A and B are true.<br/></span>",
                "<span style=\"display: inline;\">Neither A nor B is true.</span>"
            ],
            "answer": "B",
            "solution": "<div class=\"solution-content\"><a name=\"523896\"></a><div itemprop=\"text\"><p><img alt=\"\" src=\"https://gateoverflow.in/?qa=blob&amp;qa_blobid=5017931245256706947\"/></p><p> </p><p> </p><p>\\[<br/>\\begin{bmatrix}<br/>a &amp; b \\\\<br/>c &amp; d<br/>\\end{bmatrix}<br/>\\begin{bmatrix}<br/>0 &amp; 1 \\\\<br/>1 &amp; 0<br/>\\end{bmatrix}<br/>=<br/>\\begin{bmatrix}<br/>b &amp; a \\\\<br/>d &amp; c<br/>\\end{bmatrix}<br/>\\]<br/><br/>\\begin{align*}<br/>&amp;\\text{There is a unique matrix }<br/>N =<br/>\\begin{bmatrix}<br/>0 &amp; 1 \\\\<br/>1 &amp; 0<br/>\\end{bmatrix}<br/>\\text{ such that } \\\\<br/>&amp;AN =<br/>\\begin{bmatrix}<br/>b &amp; a \\\\<br/>d &amp; c<br/>\\end{bmatrix}<br/>\\end{align*}<br/><br/>Hence Option B is true</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/523840/go-classes-dpp-gate-cs-da-linear-algebra-matrix-multiplication\" target=\"_blank\">GATE Overflow #523840</a></small></div>"
        },
        {
            "marks": 2,
            "neg": 0,
            "type": "MSQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Let $A$ and $B$ be $m \\times n$ matrices. Which of the following statements is/are true?</p><div></div></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\"><p data-end=\"225\" data-start=\"115\">If $B$ is obtained from $A$ by column operations, then $A$ can also be obtained from $B$ by column operations.</p></span>",
                "<span style=\"display: inline;\"><p data-end=\"225\" data-start=\"115\">If $B$ is obtained from $A$ by elementary column operations, then $A$ can also be obtained from $B$ by elementary column operations.</p></span>",
                "<span style=\"display: inline;\"><p data-end=\"225\" data-start=\"115\">If $B$ is obtained from $A$ by elementary row operations, then $A$ can also be obtained from $B$ by elementary row operations.</p></span>",
                "<span style=\"display: inline;\"><p data-end=\"602\" data-start=\"498\">If $B$ is obtained from $A$ by row operations, then $A$ can also be obtained from $B$ by row operations.</p></span>"
            ],
            "answer": [
                "A"
            ],
            "solution": "<div class=\"solution-content\"><a name=\"523855\"></a><div itemprop=\"text\"><p data-path-to-node=\"0\"> </p><hr data-path-to-node=\"1\"/><h2 data-path-to-node=\"2\">Analysis of Matrix Operations</h2><h2 data-path-to-node=\"3\">Statement A: General Column Operations</h2><p data-path-to-node=\"4\">If $B$ is obtained from $A$ by general column operations, then $B = AM$ for some matrix $M$. However, general column operations are not necessarily reversible.</p><p data-path-to-node=\"5\"><b data-index-in-node=\"0\" data-path-to-node=\"5\">Counter-example:</b></p><p data-path-to-node=\"5\">Let</p><p>$$A = \\begin{bmatrix} 1 &amp; 2 \\\\ 3 &amp; 4 \\end{bmatrix}$$</p><p data-path-to-node=\"7\">If we replace the second column with the zero column:</p><p>$$B = \\begin{bmatrix} 1 &amp; 0 \\\\ 3 &amp; 0 \\end{bmatrix}$$</p><p data-path-to-node=\"9\">The original information in the second column is lost. $A$ cannot be recovered from $B$.</p><p data-path-to-node=\"9\"><b data-index-in-node=\"85\" data-path-to-node=\"9\">Conclusion: Statement A is False.</b></p><hr data-path-to-node=\"10\"/><h2 data-path-to-node=\"11\">Statement B: Elementary Column Operations</h2><p data-path-to-node=\"12\">Elementary column operations consist of:</p><ol data-path-to-node=\"13\" start=\"1\"><li><p data-path-to-node=\"13,0,0\"><b data-index-in-node=\"0\" data-path-to-node=\"13,0,0\">Swapping</b> two columns.</p></li><li><p data-path-to-node=\"13,1,0\"><b data-index-in-node=\"0\" data-path-to-node=\"13,1,0\">Multiplying</b> a column by a non-zero constant $k$.</p></li><li><p data-path-to-node=\"13,2,0\"><b data-index-in-node=\"0\" data-path-to-node=\"13,2,0\">Adding</b> a multiple of one column to another.</p></li></ol><p data-path-to-node=\"14\">Each of these is inherently reversible.</p><p data-path-to-node=\"15\"><b data-index-in-node=\"0\" data-path-to-node=\"15\">Example:</b></p><p>$$A = \\begin{bmatrix} 1 &amp; 2 \\\\ 3 &amp; 4 \\end{bmatrix}$$</p><p data-path-to-node=\"17\">Swap the columns to get $B$:</p><p>$$B = \\begin{bmatrix} 2 &amp; 1 \\\\ 4 &amp; 3 \\end{bmatrix}$$</p><p data-path-to-node=\"19\">Swapping them again returns $A$. Scaling by $k$ is reversed by scaling by $1/k$. Adding $nC_1$ to $C_2$ is reversed by subtracting $nC_1$ from $C_2$.</p><p data-path-to-node=\"19\"><b data-index-in-node=\"136\" data-path-to-node=\"19\">Conclusion: Statement B is True.</b></p><hr data-path-to-node=\"20\"/><h2 data-path-to-node=\"21\">Statement C: Elementary Row Operations</h2><p data-path-to-node=\"22\">Elementary row operations follow the same logic as column operations but are applied to rows ($R_i$). They are:</p><ol data-path-to-node=\"23\" start=\"1\"><li><p data-path-to-node=\"23,0,0\"><b data-index-in-node=\"0\" data-path-to-node=\"23,0,0\">Swap</b> $R_i \\leftrightarrow R_j$</p></li><li><p data-path-to-node=\"23,1,0\"><b data-index-in-node=\"0\" data-path-to-node=\"23,1,0\">Scale</b> $kR_i$ ($k \\neq 0$)</p></li><li><p data-path-to-node=\"23,2,0\"><b data-index-in-node=\"0\" data-path-to-node=\"23,2,0\">Add</b> $R_i + nR_j \\to R_i$</p></li></ol><p data-path-to-node=\"24\"><b data-index-in-node=\"0\" data-path-to-node=\"24\">Example:</b></p><p>$$A = \\begin{bmatrix} 1 &amp; 2 \\\\ 3 &amp; 4 \\end{bmatrix}$$</p><p data-path-to-node=\"26\">Add $2 \\times$ Row 1 to Row 2:</p><p>$$B = \\begin{bmatrix} 1 &amp; 2 \\\\ 5 &amp; 8 \\end{bmatrix}$$</p><p data-path-to-node=\"28\">Subtracting $2 \\times$ Row 1 from Row 2 returns $A$.</p><p data-path-to-node=\"28\"><b data-index-in-node=\"49\" data-path-to-node=\"28\">Conclusion: Statement C is True.</b></p><hr data-path-to-node=\"29\"/><h2 data-path-to-node=\"30\">Statement D: General Row Operations</h2><p data-path-to-node=\"31\">Like column operations, if a row operation involves multiplying by zero or replacing a row with a constant that ignores the previous values, it is not reversible.</p><p data-path-to-node=\"32\"><b data-index-in-node=\"0\" data-path-to-node=\"32\">Counter-example:</b></p><p>$$A = \\begin{bmatrix} 1 &amp; 2 \\\\ 3 &amp; 4 \\end{bmatrix}$$</p><p data-path-to-node=\"34\">Replace Row 1 with the zero row:</p><p>$$B = \\begin{bmatrix} 0 &amp; 0 \\\\ 3 &amp; 4 \\end{bmatrix}$$</p><p data-path-to-node=\"36\">Since $B$ is singular (determinant is 0) while $A$ was non-singular, we cannot perform an inverse operation to find $A$.</p><p data-path-to-node=\"36\"><b data-index-in-node=\"115\" data-path-to-node=\"36\">Conclusion: Statement D is False.</b></p><hr data-path-to-node=\"37\"/><h2 data-path-to-node=\"38\">Final Summary</h2><ul data-path-to-node=\"39\"><li><p data-path-to-node=\"39,0,0\"><b data-index-in-node=\"0\" data-path-to-node=\"39,0,0\">True Statements:</b> B and C (Elementary operations are always reversible).</p></li><li><p data-path-to-node=\"39,1,0\"><b data-index-in-node=\"0\" data-path-to-node=\"39,1,0\">False Statements:</b> A and D (General operations can result in information loss).</p></li></ul><p data-path-to-node=\"40\"> </p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/523825/go-classes-dpp-gate-cs-da-linear-algebra-matrices\" target=\"_blank\">GATE Overflow #523825</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\">If A and B are M*N matrices such that B can be obtained from A by column operations, then A can also be obtained from B by column operations</div></span>",
            "image": "",
            "options": [],
            "answer": "498729",
            "solution": "<div class=\"solution-content\"><a name=\"498783\"></a><div itemprop=\"text\"><p data-end=\"367\" data-start=\"310\">True<br/><br/>Allowed (elementary) column operations in linear algebra:</p><ol data-end=\"490\" data-start=\"369\"><li data-end=\"390\" data-start=\"369\"><p data-end=\"390\" data-start=\"372\">Swap two columns</p></li><li data-end=\"438\" data-start=\"391\"><p data-end=\"438\" data-start=\"394\">Multiply a column by a <strong data-end=\"429\" data-start=\"417\">non-zero</strong> scalar</p></li><li data-end=\"490\" data-start=\"439\"><p data-end=\"490\" data-start=\"442\">Add a scalar multiple of one column to another</p></li></ol><p data-end=\"600\" data-start=\"492\">Multiplying a column by <strong data-end=\"527\" data-start=\"522\">0</strong> is <strong data-end=\"538\" data-start=\"531\">NOT</strong> an elementary column operation.</p><p data-end=\"600\" data-start=\"492\">If we can get B from A they we can also get A from B.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/498729/https-sites-math-washington-edu-smith-teaching-308-2012-summer-midterm-pdf\" target=\"_blank\">GATE Overflow #498729</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>The statements $P$ and $Q$ are related to matrices $A$ and $B$, which are conformable for both addition and multiplication.</p><p>$$<br/>\\begin{aligned}<br/>&amp; P:(A+B)^{\\top}=A^{\\top}+B^{\\top} \\\\<br/>&amp; Q:(A B)^{\\top}=A^{\\top} B^{\\top}<br/>\\end{aligned}<br/>$$</p><p><br/>Which one of the following options is CORRECT?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$P$ is TRUE and $Q$ is FALSE<br/></span>",
                "<span style=\"display: inline;\">Both $P$ and $Q$ are TRUE<br/></span>",
                "<span style=\"display: inline;\">$P$ is FALSE and $Q$ is TRUE<br/></span>",
                "<span style=\"display: inline;\">Both $P$ and $Q$ are FALSE</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"475243\"></a><div itemprop=\"text\">Answer : A) <br/> <br/> P is true <br/> <br/> Q is false . <br/> <br/> (AB)^T=B^T A^T<br/> <br/> </div><br><br><small>Source: <a href=\"https://gateoverflow.in/475233/go-classes-dpp-linear-algebra-matrices-gate-ce\" target=\"_blank\">GATE Overflow #475233</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Suppose $A$ is a $3 \\times 3$ matrix so that</p><p>$$<br/>A\\left[\\begin{array}{l}<br/>1 \\\\<br/>4 \\\\<br/>2<br/>\\end{array}\\right]=\\left[\\begin{array}{l}<br/>1 \\\\<br/>0 \\\\<br/>0<br/>\\end{array}\\right], \\quad A\\left[\\begin{array}{l}<br/>3 \\\\<br/>1 \\\\<br/>0<br/>\\end{array}\\right]=\\left[\\begin{array}{l}<br/>0 \\\\<br/>1 \\\\<br/>0<br/>\\end{array}\\right], \\text { and } \\quad A\\left[\\begin{array}{l}<br/>2 \\\\<br/>1 \\\\<br/>7<br/>\\end{array}\\right]=\\left[\\begin{array}{l}<br/>0 \\\\<br/>0 \\\\<br/>1<br/>\\end{array}\\right]<br/>$$</p><p><br/>What is the first column of $A^{-1}$ ?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\left[\\begin{array}{l}1 \\\\ 3 \\\\ 2\\end{array}\\right]$<br/></span>",
                "<span style=\"display: inline;\">$\\left[\\begin{array}{l}1 \\\\ 4 \\\\ 2\\end{array}\\right]$<br/></span>",
                "<span style=\"display: inline;\">$\\left[\\begin{array}{l}3 \\\\ 1 \\\\ 0\\end{array}\\right]$<br/></span>",
                "<span style=\"display: inline;\">$\\left[\\begin{array}{l}2 \\\\ 1 \\\\ 7\\end{array}\\right]$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"472592\"></a><div itemprop=\"text\">If we create a matrix $B$ with columns as $\\left[\\begin{array}{lll}1 &amp; 4 &amp; 2\\end{array}\\right]^T,\\left[\\begin{array}{lll}3 &amp; 1 &amp; 0\\end{array}\\right]^T,\\left[\\begin{array}{lll}2 &amp; 1 &amp; 7\\end{array}\\right]^T$.<br/> <br/> $$<br/> \\begin{gathered}<br/> B=\\left[\\begin{array}{lll}<br/> 1 &amp; 3 &amp; 2 \\\\<br/> 4 &amp; 1 &amp; 1 \\\\<br/> 2 &amp; 0 &amp; 7<br/> \\end{array}\\right] \\\\<br/> A \\cdot B=\\left[\\begin{array}{lll}<br/> 1 &amp; 0 &amp; 0 \\\\<br/> 0 &amp; 1 &amp; 0 \\\\<br/> 0 &amp; 0 &amp; 1<br/> \\end{array}\\right]<br/> \\end{gathered}<br/> $$<br/> <br/> $\\Longrightarrow A B=I \\quad$ [Asking for column of $A^{-1}$, so $A^{-1}$ exists.]<br/> <br/> $$<br/> \\Longrightarrow A^{-1} A B=A^{-1} \\Longrightarrow B=A^{-1}<br/> $$<br/> <br/> First column is:<br/> <br/> $$<br/> \\left[\\begin{array}{l}<br/> 1 \\\\<br/> 4 \\\\<br/> 2<br/> \\end{array}\\right]<br/> $$<br/> </div><br><br><small>Source: <a href=\"https://gateoverflow.in/472591/go-classes-dpp-linear-algebra-matrix-binghamton\" target=\"_blank\">GATE Overflow #472591</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Let A be an $\\mathrm{n} \\times \\mathrm{n}$ matrix, and A is invertible. Then which of the following statement is equivalent:</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">Ax $=0$ has only the trivial solution.</span>",
                "<span style=\"display: inline;\">A cannot be expressed as a product of elementary matrices.</span>",
                "<span style=\"display: inline;\">$\\mathrm{Ax}=\\mathrm{b}$ is inconsistent for every $\\mathrm{n} \\times 1$ matrix b .</span>",
                "<span style=\"display: inline;\">$\\mathrm{Ax}=\\mathrm{b}$ has more than one solution for every $\\mathrm{n} \\times 1$ matrix b</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"472586\"></a><div itemprop=\"text\">1. Invertibility implies that $A$ is of full rank, meaning that the matrix equation $A \\mathbf{x}=\\mathbf{0}$ has only the trivial solution $\\mathbf{x}=\\mathbf{0}$. This is a direct consequence of the matrix being nonsingular.<br/> <br/> Therefore, option A is correct:<br/> - $A \\mathbf{x}=0$ has only the trivial solution.<br/> 2. Option $\\mathbf{B}$ is incorrect because every invertible matrix can be expressed as a product of elementary matrices.<br/> 3. Option $\\mathbf{C}$ is incorrect because if $A$ is invertible, then $A \\mathbf{x}=\\mathbf{b}$ has a unique solution for every $\\mathbf{b}$, hence it cannot be inconsistent for every $\\mathbf{b}$.<br/> 4. Option $\\mathbf{D}$ is incorrect because for an invertible matrix $A$, the solution to $A \\mathbf{x}=\\mathbf{b}$ is unique for each $\\mathbf{b}$. Thus, it cannot have more than one solution for every b.</div><br><br><small>Source: <a href=\"https://gateoverflow.in/472585/go-classes-dpp-linear-algebra-matrix-binghamton\" target=\"_blank\">GATE Overflow #472585</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>What is the inverse of the matrix $A$ given by:</p><p>$$<br/>A=\\left[\\begin{array}{lll}<br/>1 &amp; 0 &amp; 0 \\\\<br/>2 &amp; 1 &amp; 0 \\\\<br/>0 &amp; 0 &amp; 1<br/>\\end{array}\\right]<br/>$$</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$A^{-1}=\\left[\\begin{array}{ccc}1 & -2 & 0 \\\\ 0 & 1 & 0 \\\\ 0 & 0 & 1\\end{array}\\right]$<br/></span>",
                "<span style=\"display: inline;\">$A^{-1}=\\left[\\begin{array}{ccc}1 & 0 & 0 \\\\ -2 & 1 & 0 \\\\ 0 & 0 & 1\\end{array}\\right]$<br/></span>",
                "<span style=\"display: inline;\">$A^{-1}=\\left[\\begin{array}{ccc}1 & 0 & 0 \\\\ 0 & 1 & 0 \\\\ 0 & -2 & 1\\end{array}\\right]$<br/></span>",
                "<span style=\"display: inline;\">$A^{-1}=\\left[\\begin{array}{ccc}1 & 0 & 0 \\\\ 2 & -1 & 0 \\\\ 0 & 0 & 1\\end{array}\\right]$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"471372\"></a><div itemprop=\"text\">Given<br/> <br/> $$<br/> A=\\left[\\begin{array}{lll}<br/> 1 &amp; 0 &amp; 0 \\\\<br/> 2 &amp; 1 &amp; 0 \\\\<br/> 0 &amp; 0 &amp; 1<br/> \\end{array}\\right]<br/> $$<br/> <br/> Its determinant is 1 since it is lower triangular with ones on the diagonal.<br/> The cofactor matrix is<br/> <br/> $$<br/> \\left[\\begin{array}{ccc}<br/> 1 &amp; -2 &amp; 0 \\\\<br/> 0 &amp; 1 &amp; 0 \\\\<br/> 0 &amp; 0 &amp; 1<br/> \\end{array}\\right]<br/> $$<br/> <br/> Transpose to get the adjoint:<br/> <br/> $$<br/> \\left[\\begin{array}{ccc}<br/> 1 &amp; 0 &amp; 0 \\\\<br/> -2 &amp; 1 &amp; 0 \\\\<br/> 0 &amp; 0 &amp; 1<br/> \\end{array}\\right]<br/> $$<br/> <br/> Divide by determinant (which is 1 ), so the inverse is<br/> <br/> $$<br/> A^{-1}=\\left[\\begin{array}{ccc}<br/> 1 &amp; 0 &amp; 0 \\\\<br/> -2 &amp; 1 &amp; 0 \\\\<br/> 0 &amp; 0 &amp; 1<br/> \\end{array}\\right]<br/> $$<br/> </div><br><br><small>Source: <a href=\"https://gateoverflow.in/471371/go-classes-dpp-linear-algebra-inverse-of-matrix-binghamton\" target=\"_blank\">GATE Overflow #471371</a></small></div>"
        }
    ]
});

registerTest({
    "name": "DPP 26 - Engineering Mathematics (Determinants - Part 1)",
    "testLabel": "DPP 26",
    "testType": "DPP",
    "bracket": "Determinants - Part 1",
    "subject": "em",
    "series": "cse-dpp-2027",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 10,
    "topicsCovered": "Determinants (Practice Set 1)",
    "questions": [
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Find the value of<br/><br/>$\\begin{vmatrix}<br/>0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 6 \\\\<br/>0 &amp; 0 &amp; 0 &amp; 0 &amp; 5 &amp; 6 \\\\<br/>0 &amp; 0 &amp; 0 &amp; 4 &amp; 5 &amp; 6 \\\\<br/>0 &amp; 0 &amp; 3 &amp; 4 &amp; 5 &amp; 6 \\\\<br/>0 &amp; 2 &amp; 3 &amp; 4 &amp; 5 &amp; 6 \\\\<br/>1 &amp; 2 &amp; 3 &amp; 4 &amp; 5 &amp; 6<br/>\\end{vmatrix}$</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$720$</span>",
                "<span style=\"display: inline;\">$-720$</span>",
                "<span style=\"display: inline;\">$0$</span>",
                "<span style=\"display: inline;\">$360$</span>"
            ],
            "answer": "B",
            "solution": "<div class=\"solution-content\"><a name=\"529059\"></a><div itemprop=\"text\">Apply row operations to convert into upper triangular form.<br/> <br/> Swap $R_1 \\leftrightarrow R_6$,<br/> $R_2 \\leftrightarrow R_5$,<br/> $R_3 \\leftrightarrow R_4$<br/> <br/> Total swaps $= 3$<br/> <br/> So determinant gets multiplied by $(-1)^3 = -1$<br/> <br/> New matrix becomes:<br/> <br/> $\\begin{vmatrix}<br/> 1 &amp; 2 &amp; 3 &amp; 4 &amp; 5 &amp; 6 \\\\<br/> 0 &amp; 2 &amp; 3 &amp; 4 &amp; 5 &amp; 6 \\\\<br/> 0 &amp; 0 &amp; 3 &amp; 4 &amp; 5 &amp; 6 \\\\<br/> 0 &amp; 0 &amp; 0 &amp; 4 &amp; 5 &amp; 6 \\\\<br/> 0 &amp; 0 &amp; 0 &amp; 0 &amp; 5 &amp; 6 \\\\<br/> 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 6<br/> \\end{vmatrix}$<br/> <br/> Now matrix is upper triangular.<br/> <br/> Determinant is product of diagonal elements:<br/> <br/> $1 \\cdot 2 \\cdot 3 \\cdot 4 \\cdot 5 \\cdot 6 = 720$<br/> <br/> Including sign:<br/> <br/> $\\det = -720$<br/> <br/> Correct Option: $B$</div><br><br><small>Source: <a href=\"https://gateoverflow.in/529057/go-classes-dpp-gate-cs-linear-algebra-determinant\" target=\"_blank\">GATE Overflow #529057</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider the following statements:</p><div> </div><p><strong>Given Details:</strong></p><ul><li>Only statement $\\text{i}$ is correct.</li><li>Only statement $\\text{ii}$ is correct.</li><li>Both statements are correct.</li><li>None of the statement is correct.</li></ul></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">If $A^{-1} = A^{T}$ then $\\text{det} (A^{-1}) = ±1$.</span>",
                "<span style=\"display: inline;\">If $A$ is any $n \\times n$ matrix then $(A + A^T)$ is symmetric.</span>"
            ],
            "answer": "C",
            "solution": "<div class=\"solution-content\"><a name=\"529032\"></a><div itemprop=\"text\"><p>Statement $\\text{i}$: $A^{-1} = A^T$</p><p>Take determinant on both sides: </p><p>$$\\det(A^{-1}) = \\det(A^T) \\\\</p><p>\\frac{1}{\\det(A)} = \\det(A) \\\\ </p><p>(\\det(A))^2 = 1\\\\ </p><p>\\det(A) = \\pm 1$$</p><p>Therefore, $\\det(A^{-1}) = \\frac{1}{\\det(A)} = \\pm 1$</p><p>So statement $(i)$ is correct.</p><hr/><p>Now check $(ii)$:</p><p>Take transpose of $(A + A^T)$:<br/>$$(A + A^T)^T = A^T + (A^T)^T \\\\</p><p>= A^T + A \\\\</p><p>= A + A^T$$</p><p>Thus $(A + A^T)^T = (A + A^T)$</p><p>Hence $(A + A^T)$ is symmetric.</p><p>So statement $(ii)$ is correct.</p><hr/><p>Final Answer: Option $C$</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/529026/go-classes-dpp-gate-cs-linear-algebra-determinant-symmetric-matrix\" target=\"_blank\">GATE Overflow #529026</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"192\" data-start=\"61\">The determinant of the matrix $A=\\begin{bmatrix} 1&amp;1&amp;1&amp;1 \\\\ p&amp;q&amp;r&amp;s \\\\ p^2&amp;q^2&amp;r^2&amp;s^2 \\\\ p^3&amp;q^3&amp;r^3&amp;s^3 \\end{bmatrix}$ is <br/> </p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$(q-p)(r-p)(s-p)(r-q)(s-q)(s-r)$<br/></span>",
                "<span style=\"display: inline;\">$(q-p)(r-p)(s-p)(q-r)(q-s)(r-s)$<br/></span>",
                "<span style=\"display: inline;\">$(p+q+r+s)(p-q)(r-s)$<br/></span>",
                "<span style=\"display: inline;\">$0$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"528849\"></a><div itemprop=\"text\"><p data-end=\"350\" data-start=\"316\">\\begin{align*}<br/>|A| &amp;= \\begin{vmatrix} 1 &amp; 1 &amp; 1 &amp; 1 \\\\ p &amp; q &amp; r &amp; s \\\\ p^2 &amp; q^2 &amp; r^2 &amp; s^2 \\\\ p^3 &amp; q^3 &amp; r^3 &amp; s^3 \\end{vmatrix} \\\\\\\\<br/>&amp;\\mathrm{C_2 \\to C_2 - C_1, \\quad C_3 \\to C_3 - C_1, \\quad C_4 \\to C_4 - C_1} \\\\<br/>|A| &amp;= \\begin{vmatrix} 1 &amp; 0 &amp; 0 &amp; 0 \\\\ p &amp; q-p &amp; r-p &amp; s-p \\\\ p^2 &amp; q^2-p^2 &amp; r^2-p^2 &amp; s^2-p^2 \\\\ p^3 &amp; q^3-p^3 &amp; r^3-p^3 &amp; s^3-p^3 \\end{vmatrix} \\\\\\\\<br/>&amp;\\text{Expanding along the first row}\\\\<br/>|A| &amp;= \\begin{vmatrix} q-p &amp; r-p &amp; s-p \\\\ q^2-p^2 &amp; r^2-p^2 &amp; s^2-p^2 \\\\ q^3-p^3 &amp; r^3-p^3 &amp; s^3-p^3 \\end{vmatrix} \\\\\\\\<br/>|A| &amp;= (q-p)(r-p)(s-p) \\begin{vmatrix} 1 &amp; 1 &amp; 1 \\\\ q+p &amp; r+p &amp; s+p \\\\ q^2+pq+p^2 &amp; r^2+rp+p^2 &amp; s^2+sp+p^2 \\end{vmatrix} \\\\\\\\<br/>&amp;\\mathrm{C_2 \\to C_2 - C_1, \\quad C_3 \\to C_3 - C_1} \\\\<br/>|A| &amp;= (q-p)(r-p)(s-p) \\begin{vmatrix} 1 &amp; 0 &amp; 0 \\\\ q+p &amp; r-q &amp; s-q \\\\ q^2+pq+p^2 &amp; (r-q)(r+q+p) &amp; (s-q)(s+q+p) \\end{vmatrix} \\\\\\\\<br/>&amp;\\text{Expanding along the new first row}\\\\<br/>|A| &amp;= (q-p)(r-p)(s-p) \\begin{vmatrix} r-q &amp; s-q \\\\ (r-q)(r+q+p) &amp; (s-q)(s+q+p) \\end{vmatrix} \\\\\\\\<br/>|A| &amp;= (q-p)(r-p)(s-p)(r-q)(s-q) \\begin{vmatrix} 1 &amp; 1 \\\\ r+q+p &amp; s+q+p \\end{vmatrix} \\\\\\\\<br/>\\therefore |A| &amp;= (q-p)(r-p)(s-p)(r-q)(s-q)(s-r)<br/>\\end{align*}</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/528847/go-classes-dpp-gate-cs-linear-algebra-determinant\" target=\"_blank\">GATE Overflow #528847</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"170\" data-start=\"57\">Let $P$ be a $3 \\times 3$ real matrix such that $P^3-6P^2+11P-6I=0$ and $\\operatorname{tr}(P)=7$. Then $\\det(P)=$</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$8$<br/></span>",
                "<span style=\"display: inline;\">$10$<br/></span>",
                "<span style=\"display: inline;\">$12$<br/></span>",
                "<span style=\"display: inline;\">$18$</span>"
            ],
            "answer": "C",
            "solution": "<div class=\"solution-content\"><a name=\"528613\"></a><div itemprop=\"text\"><p data-end=\"283\" data-start=\"217\">Let $\\lambda$ be an eigenvalue of $P$. Then $\\lambda$ must satisfy</p><p data-end=\"322\" data-start=\"285\">$\\lambda^3-6\\lambda^2+11\\lambda-6=0$.</p><p data-end=\"336\" data-start=\"324\">Factorizing,</p><p data-end=\"376\" data-start=\"338\">$(\\lambda-1)(\\lambda-2)(\\lambda-3)=0$.</p><p data-end=\"433\" data-start=\"378\">So the eigenvalues of $P$ can only be $1$, $2$, or $3$.</p><p data-end=\"540\" data-start=\"435\">Since $\\operatorname{tr}(P)=7$, the sum of the three eigenvalues is $7$. The only possible combination is</p><p data-end=\"550\" data-start=\"542\">$2,2,3$.</p><p data-end=\"603\" data-start=\"552\">Now $\\det(P)$ is the product of the eigenvalues, so</p><p data-end=\"636\" data-start=\"605\">$\\det(P)=2 \\cdot 2 \\cdot 3=12$.</p><p data-end=\"679\" data-start=\"638\">Therefore, the correct answer is $\\boxed{12}$.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/528612/go-classes-dpp-gate-cs-linear-algebra-matrix-polynomial\" target=\"_blank\">GATE Overflow #528612</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Perform the following operations on the matrix $\\begin{bmatrix} 3 &amp; 4 &amp; 45 \\\\ 7 &amp; 9 &amp; 105 \\\\ 13 &amp; 2 &amp; 195 \\end{bmatrix}$</p><p>The determinant of the resultant matrix is _____.</p><p><strong>Given Details:</strong></p><ul><li>$0$</li><li>$1$</li><li>$15$</li><li>None of these</li></ul></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">Add the third row to the second row</span>",
                "<span style=\"display: inline;\">Subtract the third column from the first column.</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"528608\"></a><div itemprop=\"text\">Answer $0$, because it is easy to see that first column and third column are multiple of each other.<br/> <br/> Third column $=$ First column $^{\\ast }15.$<br/> <br/> So rank is $&lt; 3$, so Determinant must be $0$.<br/> <br/> It stays zero as row &amp; column transformations don't affect determinant.</div><br><br><small>Source: <a href=\"https://gateoverflow.in/528607/go-classes-dpp-gate-cs-linear-algebra-determinant\" target=\"_blank\">GATE Overflow #528607</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\">Let $Q$ be an invertible matrix of order $4\\times 4$ and $\\det(Q)=2$. Find the value of $\\det(\\operatorname{adj}(\\operatorname{adj}(Q)))$.</div></span>",
            "image": "",
            "options": [],
            "answer": "512",
            "solution": "<div class=\"solution-content\"><a name=\"528419\"></a><div itemprop=\"text\">Since $Q$ is a $4\\times 4$ matrix, we use the fact that for any invertible $n\\times n$ matrix $A$,<br/> <br/> $\\det(\\operatorname{adj}(A))=(\\det A)^{\\,n-1}$.<br/> <br/> First,<br/> $\\det(\\operatorname{adj}(Q))=(\\det Q)^{4-1}=2^3=8$.<br/> <br/> Now $\\operatorname{adj}(Q)$ is also a $4\\times 4$ matrix, so applying the same formula again,<br/> <br/> $\\det(\\operatorname{adj}(\\operatorname{adj}(Q)))=(\\det(\\operatorname{adj}(Q)))^{4-1}=8^3=512$.<br/> <br/> $\\therefore \\det(\\operatorname{adj}(\\operatorname{adj}(Q)))=\\boxed{512}$.</div><br><br><small>Source: <a href=\"https://gateoverflow.in/528418/go-classes-dpp-gate-cs-linear-algebra-determinant\" target=\"_blank\">GATE Overflow #528418</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Let $A,B,C,D$ be $n\\times n$ matrices, each with non-zero determinant. If $ABCD=1$, then $B^{-1}$ is:</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$D^{-1}C^{-1}A^{-1}$<br/></span>",
                "<span style=\"display: inline;\">$CDA$<br/></span>",
                "<span style=\"display: inline;\">$ADC$<br/></span>",
                "<span style=\"display: inline;\">Does not necessarily exist.</span>"
            ],
            "answer": "B",
            "solution": "<div class=\"solution-content\"><a name=\"528273\"></a><div itemprop=\"text\"><p>Given, $ABCD=I$ and all the matrices are invertible (as their determinant is non-zero given)<br/><br/>Pre-multiplying on both sides of the equation with $A^{-1}$, $A^{-1}ABCD=A^{-1}I$ $\\Rightarrow$ $BCD=A^{-1}$<br/><br/>Pre-multiplying on both sides of the equation with $B^{-1}$, $B^{-1}BCD=B^{-1}A^{-1}$ $\\Rightarrow$ $CD=B^{-1}A^{-1}$<br/><br/>Post-multiplying on both sides of the equation with $A$, $CDA=B^{-1}A^{-1}A$ $\\Rightarrow$ $CDA=B^{-1}$<br/><br/>Option <strong>B</strong> is correct.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/528272/go-classes-dpp-gate-cs-linear-algebra-properties-of-inverse\" target=\"_blank\">GATE Overflow #528272</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Let $P$, $Q$, and $R$ be $n \\times n$ matrices, each with non-zero determinant. If $PQR = I,$ then $Q^{-1}$ is</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$RP$<br/></span>",
                "<span style=\"display: inline;\">$R^{-1}P^{-1}$<br/></span>",
                "<span style=\"display: inline;\">$PR$<br/></span>",
                "<span style=\"display: inline;\">$P^{-1}R^{-1}$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"528170\"></a><div itemprop=\"text\"><section data-scroll-anchor=\"true\" data-testid=\"conversation-turn-46\" data-turn=\"assistant\" data-turn-id=\"request-WEB:94295fbe-7c5a-4cd2-889f-4cd91870a83e-23\" dir=\"auto\"><p data-end=\"536\" data-is-last-node=\"\" data-start=\"0\">Given, $PQR=I.$<br/><br/>Since $P$, $Q$, and $R$ have non-zero determinant, all three matrices are invertible.<br/><br/>From $PQR=I,$ we get $Q=(RP)^{-1}.$<br/><br/>Taking inverse on both sides,<br/><br/>$Q^{-1}=RP.$<br/><br/>So the correct answer is $\\boxed{RP}.$</p></section></div><br><br><small>Source: <a href=\"https://gateoverflow.in/528168/go-classes-dpp-gate-cs-linear-algebra-properties-of-inverse\" target=\"_blank\">GATE Overflow #528168</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider two matrices $M_1$ and $M_2$ with $M_1M_2=0$ and $M_1$ is non singular. Then which of the following is true?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$M_2$ is non singular<br/></span>",
                "<span style=\"display: inline;\">$M_2$ is null matrix<br/></span>",
                "<span style=\"display: inline;\">$M_2$ is the identity matrix<br/></span>",
                "<span style=\"display: inline;\">$M_2$ is transpose of $M_1$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"528167\"></a><div itemprop=\"text\">We are given $M_1 M_2 = 0$ and $M_1$ is non-singular.<br/> <br/> Since $M_1$ is non-singular, its inverse $M_1^{-1}$ exists.<br/> <br/> Now multiply both sides of<br/> <br/> $M_1 M_2 = 0$<br/> <br/> from the left by $M_1^{-1}$. Then<br/> <br/> $M_1^{-1}(M_1 M_2)=M_1^{-1}0.$<br/> <br/> $\\Rightarrow (M_1^{-1}M_1)M_2=0.$<br/> <br/> $\\Rightarrow I M_2=0.$<br/> <br/> $\\therefore M_2=0.$<br/> <br/> So $M_2$ must be the null matrix.<br/> <br/> $\\textbf{Answer: } \\boxed{\\text{B. } M_2 \\text{ is null matrix}}$</div><br><br><small>Source: <a href=\"https://gateoverflow.in/528166/go-classes-dpp-gate-cs-linear-algebra-matrix-multiplication\" target=\"_blank\">GATE Overflow #528166</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p><strong>True/False Question :</strong></p><p>Let $A,B$ are $3 \\times 3$ real matrices. Then</p><p>$$det\\left ( AB -BA \\right )=\\frac{tr\\left [ \\left ( AB -BA \\right )^{3} \\right ]}{3}.$$</p><p><em>(Note : Mark $\\emph{0}$ for False and $\\emph{1}$ for True.)</em></p></div></span>",
            "image": "",
            "options": [],
            "answer": "3",
            "solution": "<div class=\"solution-content\"><a name=\"528165\"></a><div itemprop=\"text\">Let<br/> <br/> $X=AB-BA.$<br/> <br/> We know that for any square matrices $A$ and $B$,<br/> <br/> $\\operatorname{tr}(AB)=\\operatorname{tr}(BA).$<br/> <br/> Therefore,<br/> <br/> $\\operatorname{tr}(X)=\\operatorname{tr}(AB-BA)=\\operatorname{tr}(AB)-\\operatorname{tr}(BA)=0.$<br/> <br/> Now let the eigenvalues of $X$ be $\\lambda_1,\\lambda_2,\\lambda_3$.<br/> <br/> Since $X$ is a $3 \\times 3$ matrix, we have<br/> <br/> $\\lambda_1+\\lambda_2+\\lambda_3=\\operatorname{tr}(X)=0.$<br/> <br/> Also,<br/> <br/> $\\det(X)=\\lambda_1\\lambda_2\\lambda_3$<br/> <br/> and<br/> <br/> $\\operatorname{tr}(X^3)=\\lambda_1^3+\\lambda_2^3+\\lambda_3^3.$<br/> <br/> Using the identity<br/> <br/> $a^3+b^3+c^3-3abc=(a+b+c)(a^2+b^2+c^2-ab-bc-ca),$<br/> <br/> and putting $a=\\lambda_1$, $b=\\lambda_2$, $c=\\lambda_3$, we get<br/> <br/> $\\lambda_1^3+\\lambda_2^3+\\lambda_3^3=3\\lambda_1\\lambda_2\\lambda_3$<br/> <br/> because<br/> <br/> $\\lambda_1+\\lambda_2+\\lambda_3=0.$<br/> <br/> Hence,<br/> <br/> $\\operatorname{tr}(X^3)=3\\det(X).$<br/> <br/> So,<br/> <br/> $\\det(X)=\\frac{\\operatorname{tr}(X^3)}{3}.$<br/> <br/> Since $X=AB-BA$, this gives<br/> <br/> <br/> $\\det(AB-BA)=\\dfrac{\\operatorname{tr}\\left((AB-BA)^3\\right)}{3}.$<br/> <br/> <br/> Therefore the given statement is $\\textbf{True}.$</div><br><br><small>Source: <a href=\"https://gateoverflow.in/528162/go-classes-dpp-gate-cs-linear-algebra-symmetric-matrix\" target=\"_blank\">GATE Overflow #528162</a></small></div>"
        }
    ]
});

registerTest({
    "name": "DPP 27 - Engineering Mathematics (Determinants - Part 2)",
    "testLabel": "DPP 27",
    "testType": "DPP",
    "bracket": "Determinants - Part 2",
    "subject": "em",
    "series": "cse-dpp-2027",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 10,
    "topicsCovered": "Determinants (Practice Set 2)",
    "questions": [
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider matrices $M_1,M_2,M_3,M_4\\in M_n(\\mathbb{R})$ such that $M_1$ and $M_4$ are non singular and</p><p>$M_1M_2M_3M_4=0$.</p><p>Then which of the following is necessarily true?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$M_2M_3=0$<br/></span>",
                "<span style=\"display: inline;\">$M_2=0$ or $M_3=0$<br/></span>",
                "<span style=\"display: inline;\">$M_2M_3$ is non singular<br/></span>",
                "<span style=\"display: inline;\">$M_1M_4=0$</span>"
            ],
            "answer": "B",
            "solution": "<div class=\"solution-content\"><a name=\"528025\"></a><div itemprop=\"text\"><p>Since $M_1$ and $M_4$ are non singular, both $M_1^{-1}$ and $M_4^{-1}$ exist.</p><p>Given<br/>$M_1M_2M_3M_4=0$,</p><p>multiply on the left by $M_1^{-1}$ and on the right by $M_4^{-1}$. Then we get</p><p>$M_1^{-1}(M_1M_2M_3M_4)M_4^{-1}=M_1^{-1}\\,0\\,M_4^{-1}$,</p><p>which gives</p><p>$M_2M_3=0$.</p><p>So option $\\boxed{\\text{A}}$ is <strong>true.</strong></p><p>Now check the other options.</p><p>Option B is not necessary. Two nonzero matrices can have zero product.</p><p>For example, take</p><p>$M_2=\\begin{pmatrix}1&amp;0\\\\0&amp;0\\end{pmatrix}$, $\\qquad M_3=\\begin{pmatrix}0&amp;0\\\\0&amp;1\\end{pmatrix}$.</p><p>Then $M_2\\neq 0$, $M_3\\neq 0$, but</p><p>$M_2M_3=0$.</p><p>So B is <strong>false.</strong></p><p>Option C is <strong>false</strong> because $M_2M_3=0$, and the zero matrix is never non singular.</p><p>Option D is also<strong> false</strong> because nothing in the given condition implies $M_1M_4=0$.<br/> </p><p>Hence, the correct answer is <strong>A</strong>.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/528024/go-classes-dpp-gate-cs-linear-algebra-matrix-arithmetics\" target=\"_blank\">GATE Overflow #528024</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Let $A$ and $B$ be invertible square matrices of order $n$, and let $k$ be a non-zero scalar. Which of the following statements is <strong>not always true </strong>?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\det(AB^{-1}A^T)=\\dfrac{(\\det A)^2}{\\det B}$<br/></span>",
                "<span style=\"display: inline;\">$\\det(\\operatorname{adj}(A))=(\\det A)^{n-1}$<br/></span>",
                "<span style=\"display: inline;\">$\\det(A+kI)=\\det(A)+k^n$<br/></span>",
                "<span style=\"display: inline;\">$\\det(A^{-1}B^T)=\\dfrac{\\det B}{\\det A}$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"527938\"></a><div itemprop=\"text\"><p>The statement that is <strong>not always true</strong> is $\\boxed{\\text{C}}$</p><p>because determinant is not additive in general, so $\\det(A+kI)\\neq \\det(A)+k^n$ in general.<br/><br/><em><strong>For example</strong></em>, take $A=I_2$ and $k=1$.<br/><br/>Then $\\det(A+kI)=\\det(2I_2)=4$, but $\\det(A)+k^n=1+1=2$.<br/><br/>So, the equality fails.<br/> </p><p>The other statements are true:</p><p>A. $\\det(AB^{-1}A^T)=\\det(A)\\det(B^{-1})\\det(A^T)=\\det(A)\\cdot \\dfrac{1}{\\det(B)} \\cdot \\det(A)=\\dfrac{(\\det A)^2}{\\det B}$<br/><br/>B. For an invertible matrix $A$ of order $n$, $\\det(\\operatorname{adj}(A))=(\\det A)^{n-1}$<br/><br/>D. $\\det(A^{-1}B^T)=\\det(A^{-1})\\det(B^T)=\\dfrac{1}{\\det A}\\det B=\\dfrac{\\det B}{\\det A}$<br/><br/>Hence, the correct answer is $\\boxed{\\text{C}}$.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/527937/go-classes-dpp-gate-cs-linear-algebra-properties-of-determinant\" target=\"_blank\">GATE Overflow #527937</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\">$N$ is a square matrix of order $n$ and its determinant is $7$. If each element of $N$ is multiplied by $2$, the determinant becomes $112$. The value of $n$ is $?$</div></span>",
            "image": "",
            "options": [],
            "answer": "4",
            "solution": "<div class=\"solution-content\"><a name=\"527933\"></a><div itemprop=\"text\">If each element of an $n \\times n$ matrix is multiplied by $k$, then its determinant gets multiplied by $k^n$.<br/> <br/> $\\left | k\\times A_{n\\times n} \\right |=k^{n}\\left | A_{n\\times n} \\right |$ <br/> <br/> Here, $|N|=7 \\quad$ and $\\quad |2N|=112$.<br/> <br/> So,<br/> $2^n \\cdot 7 = 112$.<br/> <br/> Thus,<br/> $2^n = \\frac{112}{7}=16=2^4$.<br/> <br/> $\\Rightarrow n=4$.<br/> <br/> So, the correct answer is $\\boxed{4}$.</div><br><br><small>Source: <a href=\"https://gateoverflow.in/527931/go-classes-dpp-gate-cs-linear-algebra-properties-of-determinant\" target=\"_blank\">GATE Overflow #527931</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-path-to-node=\"2\">Let $A_n$ be an $n \\times n$ matrix where the entry in the $i$-th row and $j$-th column is given by $a_{ij} = \\min(i, j)$.</p><p data-path-to-node=\"2\">Evaluate the determinant of $A_n$.</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$n!$<br/></span>",
                "<span style=\"display: inline;\">$1$<br/></span>",
                "<span style=\"display: inline;\">$0$<br/></span>",
                "<span style=\"display: inline;\">$n$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"527437\"></a><div itemprop=\"text\"><ul><li><p data-path-to-node=\"6,0,0\"><b data-index-in-node=\"0\" data-path-to-node=\"6,0,0\">Analyze the Structure:</b></p><p data-path-to-node=\"6,0,0\">For $n=3$, the matrix looks like:</p><p>$$A_3 = \\begin{pmatrix} 1 &amp; 1 &amp; 1 \\\\ 1 &amp; 2 &amp; 2 \\\\ 1 &amp; 2 &amp; 3 \\end{pmatrix}$$</p></li><li><p data-path-to-node=\"6,1,0\"><b data-index-in-node=\"0\" data-path-to-node=\"6,1,0\">Apply Row Operations (Gaussian Elimination):</b></p><p data-path-to-node=\"6,1,0\">Perform $R_k \\to R_k - R_{k-1}$ for $k=n, n-1, \\dots, 2$.</p><ul data-path-to-node=\"6,1,1\"><li><p data-path-to-node=\"6,1,1,0,0\">$R_2 - R_1 = (0, 1, 1, \\dots)$</p></li><li><p data-path-to-node=\"6,1,1,1,0\">$R_3 - R_2 = (0, 0, 1, \\dots)$</p><p data-path-to-node=\"6,1,1,1,0\">This transforms $A_n$ into an <b data-index-in-node=\"57\" data-path-to-node=\"6,1,1,1,0\">Upper Triangular Matrix</b> where all diagonal entries are $1$.</p><p>$$U = \\begin{pmatrix} 1 &amp; 1 &amp; 1 &amp; \\dots \\\\ 0 &amp; 1 &amp; 1 &amp; \\dots \\\\ 0 &amp; 0 &amp; 1 &amp; \\dots \\\\ \\vdots &amp; \\vdots &amp; \\vdots &amp; \\ddots \\end{pmatrix}$$</p></li></ul></li><li><p data-path-to-node=\"6,2,0\"><b data-index-in-node=\"0\" data-path-to-node=\"6,2,0\">Calculate Determinant:</b></p><p data-path-to-node=\"6,2,0\">The determinant of a triangular matrix is the product of its diagonal entries.</p><p>$$\\det(A_n) = 1 \\times 1 \\times \\dots \\times 1 = 1$$</p></li></ul></div><br><br><small>Source: <a href=\"https://gateoverflow.in/527436/go-classes-dpp-gate-cs-linear-algebra-determinant\" target=\"_blank\">GATE Overflow #527436</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-path-to-node=\"18\">Let $A$ be a $2027 \\times 2027$ real skew-symmetric matrix (i.e., $A^T = -A$).</p><p data-path-to-node=\"18\">Evaluate $\\det(A)$.</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$1$<br/></span>",
                "<span style=\"display: inline;\">$-1$<br/></span>",
                "<span style=\"display: inline;\">$0$<br/></span>",
                "<span style=\"display: inline;\">Non-zero real number</span>"
            ],
            "answer": "C",
            "solution": "<div class=\"solution-content\"><a name=\"527435\"></a><div itemprop=\"text\">If $A$ were a $2027 \\times 2027$ real skew-symmetric matrix, then $A^T=-A$.<br/> <br/> Taking determinants, we get<br/> <br/> $\\det(A^T)=\\det(-A)$.<br/> <br/> Since $\\det(A^T)=\\det(A)$, this gives<br/> <br/> $\\det(A)=(-1)^{2027}\\det(A)$.<br/> <br/> Because $2027$ is odd, $(-1)^{2027}=-1$, so<br/> <br/> $\\det(A)=-\\det(A)$.<br/> <br/> Therefore,<br/> <br/> $2\\det(A)=0$,<br/> <br/> which implies<br/> <br/> $\\det(A)=0$.<br/> <br/> So if the matrix were $2027 \\times 2027$, the determinant would be $\\boxed{0}$.</div><br><br><small>Source: <a href=\"https://gateoverflow.in/527434/go-classes-dpp-gate-cs-linear-algebra-skew-symmetric-matrix\" target=\"_blank\">GATE Overflow #527434</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-path-to-node=\"10\">Let $P$ be a real $n \\times n$ matrix such that $P^2 = P$ (i.e., $P$ is an idempotent matrix).</p><p data-path-to-node=\"10\">Which of the following relationships is always true?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\det(P) = 1$<br/></span>",
                "<span style=\"display: inline;\">$\\text{Tr}(P) = \\text{rank}(P)$<br/></span>",
                "<span style=\"display: inline;\">$\\text{Tr}(P) = n$<br/></span>",
                "<span style=\"display: inline;\">$\\text{rank}(P) = n$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"527433\"></a><div itemprop=\"text\"><ul><li><p data-path-to-node=\"14,0,0\"><b data-index-in-node=\"0\" data-path-to-node=\"14,0,0\">Identify Eigenvalues:</b></p><p data-path-to-node=\"14,0,0\">Let $\\lambda$ be an eigenvalue. Then $P v = \\lambda v \\implies P^2 v = \\lambda^2 v$.</p><p data-path-to-node=\"14,0,0\">Since $P^2 = P$, we must have $\\lambda^2 = \\lambda$, so $\\lambda \\in \\{0, 1\\}$.</p></li><li><p data-path-to-node=\"14,1,0\"><b data-index-in-node=\"0\" data-path-to-node=\"14,1,0\">Diagonalizability:</b></p><p data-path-to-node=\"14,1,0\">Symmetric idempotent matrices are diagonalizable. Even in the general real case, $P$ is similar to a diagonal matrix $D$ with entries $1$ and $0$.</p></li><li><p data-path-to-node=\"14,2,0\"><b data-index-in-node=\"0\" data-path-to-node=\"14,2,0\">Relate Trace and Rank:</b></p><ul data-path-to-node=\"14,2,1\"><li><p data-path-to-node=\"14,2,1,0,0\"><b data-index-in-node=\"0\" data-path-to-node=\"14,2,1,0,0\">Trace</b> is the sum of eigenvalues: $\\sum \\lambda_i$. Since $\\lambda_i$ is either 0 or 1, the sum is simply the count of how many times $1$ appears.</p></li><li><p data-path-to-node=\"14,2,1,1,0\"><b data-index-in-node=\"0\" data-path-to-node=\"14,2,1,1,0\">Rank</b> is the dimension of the image, which equals the number of non-zero eigenvalues for a diagonalizable matrix.</p><p data-path-to-node=\"14,2,1,1,0\">Therefore, $\\text{Tr}(P) = (\\text{count of } 1s) = \\text{rank}(P)$.</p></li></ul></li></ul></div><br><br><small>Source: <a href=\"https://gateoverflow.in/527432/go-classes-dpp-gate-cs-linear-algebra-idempotent-matrix\" target=\"_blank\">GATE Overflow #527432</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Let $A$ be an $n \\times n$ matrix such that $\\mid A^{2} \\mid\\: =1$. Here $\\mid A \\mid $ stands for determinant of matrix $A$. Then</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\mid A \\mid =1$<br/></span>",
                "<span style=\"display: inline;\">$\\mid A \\mid =0 \\text{ or } 1$<br/></span>",
                "<span style=\"display: inline;\">$\\mid A \\mid =-1, 0 \\text{ or } 1$<br/></span>",
                "<span style=\"display: inline;\">$\\mid A \\mid =-1 \\text{ or } 1$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"527210\"></a><div itemprop=\"text\">Given, $|A^2|=1$<br/> <br/> Using the property of determinants,<br/> <br/> $|A^2|=|A\\cdot A|=|A||A|=(|A|)^2$<br/> <br/> So, $(|A|)^2=1$<br/> <br/> Hence,<br/> <br/> $|A|=\\pm 1$<br/> <br/> $\\therefore$ $|A|=-1$ or $1$.</div><br><br><small>Source: <a href=\"https://gateoverflow.in/527209/go-classes-dpp-gate-cs-linear-algebra-properties-of-determinant\" target=\"_blank\">GATE Overflow #527209</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>The value of $\\begin{vmatrix} 1 &amp; \\log _x y &amp; \\log_x z \\\\ \\log _y x &amp; 1 &amp; \\log_y z \\\\ \\log _z x &amp; \\log _z y &amp; 1 \\end{vmatrix}$ is</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$0$<br/></span>",
                "<span style=\"display: inline;\">$1$<br/></span>",
                "<span style=\"display: inline;\">$-1$<br/></span>",
                "<span style=\"display: inline;\">None of these</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"527207\"></a><div itemprop=\"text\"><p>Let, $D=\\begin{vmatrix}<br/>1 &amp; \\log_x y &amp; \\log_x z\\\\<br/>\\log_y x &amp; 1 &amp; \\log_y z\\\\<br/>\\log_z x &amp; \\log_z y &amp; 1<br/>\\end{vmatrix}$<br/><br/><br/>Using change of base,</p><p>$\\log_x y=\\dfrac{\\log y}{\\log x}, \\quad \\log_x z=\\dfrac{\\log z}{\\log x}$</p><p>$\\log_y x=\\dfrac{\\log x}{\\log y}, \\quad \\log_y z=\\dfrac{\\log z}{\\log y}$</p><p>$\\log_z x=\\dfrac{\\log x}{\\log z}, \\quad \\log_z y=\\dfrac{\\log y}{\\log z}$<br/><br/><br/>So, $D=\\begin{vmatrix}<br/>1 &amp; \\dfrac{\\log y}{\\log x} &amp; \\dfrac{\\log z}{\\log x}\\\\<br/>\\dfrac{\\log x}{\\log y} &amp; 1 &amp; \\dfrac{\\log z}{\\log y}\\\\<br/>\\dfrac{\\log x}{\\log z} &amp; \\dfrac{\\log y}{\\log z} &amp; 1<br/>\\end{vmatrix}$</p><p><br/>Now write the rows as</p><p>$R_1=\\dfrac{1}{\\log x}(\\log x,\\log y,\\log z)$</p><p>$R_2=\\dfrac{1}{\\log y}(\\log x,\\log y,\\log z)$</p><p>$R_3=\\dfrac{1}{\\log z}(\\log x,\\log y,\\log z)$</p><p><br/>Hence all three rows are proportional.</p><p>$\\boxed{\\therefore D=0}$</p><p>So the correct option is <strong>A</strong>.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/527206/go-classes-dpp-gate-cs-linear-algebra-determinant\" target=\"_blank\">GATE Overflow #527206</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>The value of $\\begin{vmatrix} 1+a &amp; 1 &amp; 1 &amp; 1 \\\\ 1 &amp; 1+b &amp; 1 &amp; 1 \\\\ 1 &amp; 1 &amp; 1+c &amp; 1 \\\\ 1 &amp; 1 &amp; 1 &amp; 1+d \\end{vmatrix}$ is<br/> </p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$abcd(1+\\frac{1}{a} + \\frac{1}{b} + \\frac{1}{c} + \\frac{1}{d})$<br/></span>",
                "<span style=\"display: inline;\">$abcd(\\frac{1}{a} + \\frac{1}{b} + \\frac{1}{c} + \\frac{1}{d})$<br/></span>",
                "<span style=\"display: inline;\">$1+\\frac{1}{a} + \\frac{1}{b} + \\frac{1}{c} + \\frac{1}{d}$<br/></span>",
                "<span style=\"display: inline;\">None of these</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"527195\"></a><div itemprop=\"text\"><p>Let, $<br/>D=\\begin{vmatrix}<br/>1+a &amp; 1 &amp; 1 &amp; 1\\\\<br/>1 &amp; 1+b &amp; 1 &amp; 1\\\\<br/>1 &amp; 1 &amp; 1+c &amp; 1\\\\<br/>1 &amp; 1 &amp; 1 &amp; 1+d<br/>\\end{vmatrix}.<br/>$<br/><br/>Apply, $R_1\\to R_1-R_4, \\quad R_2\\to R_2-R_4, \\quad R_3\\to R_3-R_4.$<br/><br/>Then, $<br/>D=\\begin{vmatrix}<br/>a &amp; 0 &amp; 0 &amp; -d\\\\<br/>0 &amp; b &amp; 0 &amp; -d\\\\<br/>0 &amp; 0 &amp; c &amp; -d\\\\<br/>1 &amp; 1 &amp; 1 &amp; 1+d<br/>\\end{vmatrix}.<br/>$<br/><br/>Now take $a,b,c$ common from the first three rows:<br/><br/>$<br/>D=abc\\begin{vmatrix}<br/>1 &amp; 0 &amp; 0 &amp; -\\frac{d}{a}\\\\<br/>0 &amp; 1 &amp; 0 &amp; -\\frac{d}{b}\\\\<br/>0 &amp; 0 &amp; 1 &amp; -\\frac{d}{c}\\\\<br/>1 &amp; 1 &amp; 1 &amp; 1+d<br/>\\end{vmatrix}.<br/>$</p><p>Apply $C_4\\to C_4+\\frac{d}{a}C_1+\\frac{d}{b}C_2+\\frac{d}{c}C_3.$</p><p>So, $<br/>D=abc\\begin{vmatrix}<br/>1 &amp; 0 &amp; 0 &amp; 0\\\\<br/>0 &amp; 1 &amp; 0 &amp; 0\\\\<br/>0 &amp; 0 &amp; 1 &amp; 0\\\\<br/>1 &amp; 1 &amp; 1 &amp; 1+d+\\frac{d}{a}+\\frac{d}{b}+\\frac{d}{c}<br/>\\end{vmatrix}.<br/>$<br/><br/>Hence, $D=abc\\left(1+d+\\frac{d}{a}+\\frac{d}{b}+\\frac{d}{c}\\right).$<br/><br/>Now, $D=abc+abd+acd+bcd+abcd =abcd\\left(1+\\frac{1}{a}+\\frac{1}{b}+\\frac{1}{c}+\\frac{1}{d}\\right).$<br/><br/>Therefore, $\\boxed{D=abcd\\left(1+\\frac{1}{a}+\\frac{1}{b}+\\frac{1}{c}+\\frac{1}{d}\\right)}$<br/><br/>So the correct option is <strong>A</strong>.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/527194/go-classes-dpp-gate-cs-linear-algebra-determinant\" target=\"_blank\">GATE Overflow #527194</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Let $A$ be an $2\\times 2$ matrix such that $|A^2+I|=0$ and $|A| \\ne 0$. Which of the following must be true?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$|A|=1$<br/></span>",
                "<span style=\"display: inline;\">$|A|=-1$<br/></span>",
                "<span style=\"display: inline;\">$|A|^2=1$<br/></span>",
                "<span style=\"display: inline;\">None of these</span>"
            ],
            "answer": "C",
            "solution": "<div class=\"solution-content\"><a name=\"526999\"></a><div itemprop=\"text\">Since $|A^2+I|=0$, the matrix $A^2+I$ is singular. So there exists a nonzero vector $x$ such that<br/> $$<br/> (A^2+I)x=0.<br/> $$<br/> Thus<br/> $$<br/> A^2x=-x.<br/> $$<br/> This shows that $-1$ is an eigenvalue of $A^2$.<br/> <br/> If $\\lambda$ is an eigenvalue of $A$, then $\\lambda^2$ is an eigenvalue of $A^2$. Hence for some eigenvalue $\\lambda$ of $A$,<br/> $$<br/> \\lambda^2=-1.<br/> $$<br/> So $\\lambda=\\pm i$.<br/> <br/> Over the real numbers, nonreal eigenvalues occur in conjugate pairs, so their product is<br/> $$<br/> i(-i)=1.<br/> $$<br/> Since $|A|\\ne 0$, the determinant is the product of all eigenvalues, and the contribution from each nonreal conjugate pair is positive. Therefore the only conclusion forced by the given information is<br/> $$<br/> |A|^2=1.<br/> $$<br/> <br/> Hence the correct answer is $\\boxed{|A|^2=1}.$</div><br><br><small>Source: <a href=\"https://gateoverflow.in/526998/go-classes-dpp-gate-cs-da-linear-algebra-determinant\" target=\"_blank\">GATE Overflow #526998</a></small></div>"
        }
    ]
});

registerTest({
    "name": "DPP 28 - Engineering Mathematics (Determinants - Part 3)",
    "testLabel": "DPP 28",
    "testType": "DPP",
    "bracket": "Determinants - Part 3",
    "subject": "em",
    "series": "cse-dpp-2027",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 10,
    "topicsCovered": "Determinants (Practice Set 3)",
    "questions": [
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Let $X$ be a square matrix. Consider the following two statements on $X$.</p><p>Which one of the following is TRUE?</p><p><strong>Given Details:</strong></p><ul><li>I implies II; II does not imply I</li><li>II implies I; I does not imply II</li><li>I does not imply II; II does not imply I</li><li>I and II are equivalent statements</li></ul></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$X$ is invertible.</span>",
                "<span style=\"display: inline;\">Determinant of $X$ is non-zero.</span>"
            ],
            "answer": "D",
            "solution": "<div class=\"solution-content\"><a name=\"526830\"></a><div itemprop=\"text\"><p>$X^{-1}=\\dfrac{Adj(X)}{\\mid X\\mid}$</p><ol start=\"1\" style=\"list-style-type: upper-roman;\"><li>If $X^{-1}$ exist then $\\mid X\\mid\\:\\neq0$.<br/>$X^{-1}\\implies \\mid X\\mid \\:\\neq0$<br/> </li><li>If $\\mid X\\mid\\:\\neq 0$ then $X^{-1}$ exist.<br/>$\\mid X\\mid\\:\\neq 0\\implies X^{-1}$<br/> </li></ol><table border=\"1\" cellpadding=\"1\" style=\"width:515px\"><tbody><tr><td style=\"width:56px\">$X^{-1}$</td><td style=\"width:91px\">$ \\mid X \\mid \\neq0$.</td><td style=\"width:178px\"> $X^{-1}\\implies \\mid X \\mid \\neq0$</td><td style=\"width:165px\">$\\mid X \\mid \\neq0\\implies X^{-1}$</td></tr><tr><td style=\"width:56px\">$T$</td><td style=\"width:91px\">$T$</td><td style=\"width:178px\">$T$</td><td style=\"width:165px\">$T$</td></tr><tr><td style=\"width:56px\">$T$</td><td style=\"width:91px\">$F$</td><td style=\"width:178px\">$F$</td><td style=\"width:165px\">$T$</td></tr><tr><td style=\"width:56px\">$F$</td><td style=\"width:91px\">$T$</td><td style=\"width:178px\">$T$</td><td style=\"width:165px\">$F$</td></tr><tr><td style=\"width:56px\">$F$</td><td style=\"width:91px\">$F$</td><td style=\"width:178px\">$T$</td><td style=\"width:165px\">$T$</td></tr></tbody></table><p>we can write like this $X^{-1}$ exist $\\textbf{if only if (or) iff}\\: \\mid X\\mid\\:\\neq0$</p><p> </p><table border=\"1\" cellpadding=\"1\" style=\"width:399px\"><tbody><tr><td>$X^{-1}$</td><td style=\"width:76px\">$\\mid X \\mid \\neq0$</td><td style=\"width:255px\"><p> $\\big(X^{-1}\\implies \\mid X \\mid \\neq0\\big)\\wedge \\big(\\mid X \\mid \\neq0\\implies X^{-1}\\big) $</p><p>$\\equiv\\:\\: \\mid X\\mid \\:\\:\\neq 0\\Longleftrightarrow X^{-1}$</p></td></tr><tr><td>$T$</td><td style=\"width:76px\">$T$</td><td style=\"width:255px\">$T$</td></tr><tr><td>$T$</td><td style=\"width:76px\">$F$</td><td style=\"width:255px\">$F$</td></tr><tr><td>$F$</td><td style=\"width:76px\">$T$</td><td style=\"width:255px\">$F$</td></tr><tr><td>$F$</td><td style=\"width:76px\">$F$</td><td style=\"width:255px\">$T$</td></tr></tbody></table><p>I and II Both are equivalent.</p><p>Hence, the correct answer is <strong>D</strong>.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/526829/go-classes-dpp-gate-cs-da-linear-algebra-invertability-of-matrix\" target=\"_blank\">GATE Overflow #526829</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>If $s=a+b+c$, then the value of $\\Delta=\\begin{vmatrix} s+c &amp; a &amp; b \\\\ c &amp; s+a &amp; b \\\\ c &amp; a &amp; s+b \\end{vmatrix}$</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$2s^2$<br/></span>",
                "<span style=\"display: inline;\">$2s^3$<br/></span>",
                "<span style=\"display: inline;\">$s^3$<br/></span>",
                "<span style=\"display: inline;\">$3s^3$</span>"
            ],
            "answer": "B",
            "solution": "<div class=\"solution-content\"><a name=\"526849\"></a><div itemprop=\"text\"><p><img alt=\"\" height=\"697\" src=\"https://gateoverflow.in/?qa=blob&amp;qa_blobid=17214342159546093896\" width=\"555\"/><br/>Answer: B</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/526822/go-classes-dpp-gate-cs-da-linear-algebra-determinant\" target=\"_blank\">GATE Overflow #526822</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>If $C$ is a non-singular matrix and $B=C \\begin{bmatrix} 0 &amp; x &amp; y \\\\ 0 &amp; 0 &amp; x \\\\ 0 &amp; 0 &amp; 0 \\end{bmatrix} C^{-1}$ then:</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$B^2=I$<br/></span>",
                "<span style=\"display: inline;\">$B^2 = \\text{Null Matrix}$<br/></span>",
                "<span style=\"display: inline;\">$B^3=I$<br/></span>",
                "<span style=\"display: inline;\">$B^3 = \\text{Null Matrix}$</span>"
            ],
            "answer": "D",
            "solution": "<div class=\"solution-content\"><a name=\"526733\"></a><div itemprop=\"text\"><p data-path-to-node=\"0\">Let $N = \\begin{bmatrix} 0 &amp; x &amp; y \\\\ 0 &amp; 0 &amp; x \\\\ 0 &amp; 0 &amp; 0 \\end{bmatrix}$</p><p data-path-to-node=\"7\">Therefore, $B = C N C^{-1}$</p><p data-path-to-node=\"8\"><b data-index-in-node=\"0\" data-path-to-node=\"8\">Step 1: Find $B^2$</b></p><p data-path-to-node=\"8\">Squaring both sides:</p><p>$$B^2 = (C N C^{-1})^2$$</p><p>$$B^2 = (C N C^{-1}) \\cdot (C N C^{-1})$$</p><p data-path-to-node=\"11\">Since matrix multiplication is associative:</p><p>$$B^2 = (C N) (C^{-1} C) (N C^{-1})$$</p><p>$$B^2 = (C N) \\cdot I \\cdot (N C^{-1})$$</p><p>$$B^2 = C N^2 C^{-1}$$</p><p data-path-to-node=\"15\">Now, let's calculate $N^2$:</p><p>$$N^2 = \\begin{bmatrix} 0 &amp; x &amp; y \\\\ 0 &amp; 0 &amp; x \\\\ 0 &amp; 0 &amp; 0 \\end{bmatrix} \\cdot \\begin{bmatrix} 0 &amp; x &amp; y \\\\ 0 &amp; 0 &amp; x \\\\ 0 &amp; 0 &amp; 0 \\end{bmatrix} = \\begin{bmatrix} 0 &amp; 0 &amp; x^2 \\\\ 0 &amp; 0 &amp; 0 \\\\ 0 &amp; 0 &amp; 0 \\end{bmatrix}$$</p><p data-path-to-node=\"17\">Substituting $N^2$ back:</p><p>$$B^2 = C \\begin{bmatrix} 0 &amp; 0 &amp; x^2 \\\\ 0 &amp; 0 &amp; 0 \\\\ 0 &amp; 0 &amp; 0 \\end{bmatrix} C^{-1}$$</p><p data-path-to-node=\"19\">We can't infer anything definitive from this result to match the options, so let's find $B^3$.</p><p data-path-to-node=\"20\"><b data-index-in-node=\"0\" data-path-to-node=\"20\">Step 2: Find $B^3$</b></p><p>$$B^3 = (C N C^{-1})^3$$</p><p>$$B^3 = \\underbrace{(C N C^{-1}) \\cdot (C N C^{-1})}_{C N^2 C^{-1}} \\cdot (C N C^{-1})$$</p><p>$$B^3 = (C N^2 C^{-1}) \\cdot (C N C^{-1})$$</p><p>$$B^3 = C N^2 (C^{-1} C) N C^{-1}$$</p><p>$$B^3 = C N^3 C^{-1}$$</p><p data-path-to-node=\"26\">Now, let's calculate $N^3$:</p><p>$$N^3 = N^2 \\cdot N = \\begin{bmatrix} 0 &amp; 0 &amp; x^2 \\\\ 0 &amp; 0 &amp; 0 \\\\ 0 &amp; 0 &amp; 0 \\end{bmatrix} \\cdot \\begin{bmatrix} 0 &amp; x &amp; y \\\\ 0 &amp; 0 &amp; x \\\\ 0 &amp; 0 &amp; 0 \\end{bmatrix} = \\begin{bmatrix} 0 &amp; 0 &amp; 0 \\\\ 0 &amp; 0 &amp; 0 \\\\ 0 &amp; 0 &amp; 0 \\end{bmatrix}$$</p><p data-path-to-node=\"28\">Since $N^3$ is a Null Matrix ($O$):</p><p>$$B^3 = C \\cdot O \\cdot C^{-1}$$</p><p>$$B^3 = O$$</p><p data-path-to-node=\"31\">Therefore, $B^3$ is a Null Matrix.<br/> </p><p data-path-to-node=\"32\"><b data-index-in-node=\"0\" data-path-to-node=\"32\">Correct Option: D</b></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/526732/go-classes-dpp-gate-cs-da-linear-algebra-nilpotent-matrices\" target=\"_blank\">GATE Overflow #526732</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\">If the determinant of the below matrix is $245$, what is the value of $x$?<br/> <br/> $\\begin{bmatrix} 0 &amp; 4&amp; 2 &amp;1 \\\\ 3&amp; -1 &amp; 0 &amp; 2\\\\ 5&amp;2 &amp; x&amp; 4\\\\ 6&amp; 1 &amp; -1 &amp; 0 \\end{bmatrix}$</div></span>",
            "image": "",
            "options": [],
            "answer": "6",
            "solution": "<div class=\"solution-content\"><a name=\"526300\"></a><div itemprop=\"text\">Let, $A=\\begin{bmatrix}<br/> 0&amp;4&amp;2&amp;1\\\\<br/> 3&amp;-1&amp;0&amp;2\\\\<br/> 5&amp;2&amp;x&amp;4\\\\<br/> 6&amp;1&amp;-1&amp;0<br/> \\end{bmatrix}$.<br/> <br/> <br/> Given that, $\\det(A)=245$.<br/> <br/> Apply the row operation<br/> <br/> $R_1 \\leftrightarrow R_2$.<br/> <br/> Then<br/> $\\det(A)=-\\begin{vmatrix}<br/> 3&amp;-1&amp;0&amp;2\\\\<br/> 0&amp;4&amp;2&amp;1\\\\<br/> 5&amp;2&amp;x&amp;4\\\\<br/> 6&amp;1&amp;-1&amp;0<br/> \\end{vmatrix}$.<br/> <br/> Now use<br/> <br/> $R_3 \\to 3R_3-5R_1$<br/> <br/> and<br/> <br/> $R_4 \\to R_4-2R_1$.<br/> <br/> These operations do not change the determinant except for the factor introduced in $R_3$.<br/> <br/> So we get<br/> <br/> $\\det(A)<br/> =-\\frac{1}{3}<br/> \\begin{vmatrix}<br/> 3&amp;-1&amp;0&amp;2\\\\<br/> 0&amp;4&amp;2&amp;1\\\\<br/> 0&amp;11&amp;3x&amp;2\\\\<br/> 0&amp;3&amp;-1&amp;-4<br/> \\end{vmatrix}$.<br/> <br/> Now expand along the first column:<br/> <br/> $\\det(A)<br/> =-\\frac{1}{3}\\cdot 3<br/> \\begin{vmatrix}<br/> 4&amp;2&amp;1\\\\<br/> 11&amp;3x&amp;2\\\\<br/> 3&amp;-1&amp;-4<br/> \\end{vmatrix}$<br/> <br/> $=<br/> -\\begin{vmatrix}<br/> 4&amp;2&amp;1\\\\<br/> 11&amp;3x&amp;2\\\\<br/> 3&amp;-1&amp;-4<br/> \\end{vmatrix}$.<br/> <br/> Now evaluate the $3\\times 3$ determinant:<br/> <br/> $\\begin{vmatrix}<br/> 4&amp;2&amp;1\\\\<br/> 11&amp;3x&amp;2\\\\<br/> 3&amp;-1&amp;-4<br/> \\end{vmatrix}<br/> =<br/> 4\\begin{vmatrix}<br/> 3x&amp;2\\\\<br/> -1&amp;-4<br/> \\end{vmatrix}<br/> -2\\begin{vmatrix}<br/> 11&amp;2\\\\<br/> 3&amp;-4<br/> \\end{vmatrix}<br/> +\\begin{vmatrix}<br/> 11&amp;3x\\\\<br/> 3&amp;-1<br/> \\end{vmatrix}$<br/> <br/> $=<br/> 4\\bigl(3x(-4)-2(-1)\\bigr)<br/> -2\\bigl(11(-4)-2\\cdot 3\\bigr)<br/> +\\bigl(11(-1)-3\\cdot 3x\\bigr)$<br/> <br/> $=<br/> 4(-12x+2)-2(-44-6)+(-11-9x)$<br/> <br/> $=<br/> -48x+8+100-11-9x$<br/> <br/> $=<br/> 97-57x$.<br/> <br/> Hence,<br/> <br/> $\\det(A)=-(97-57x)=57x-97$.<br/> <br/> Since $\\det(A)=245$, we get<br/> <br/> $57x-97=245$<br/> <br/> $57x=342$<br/> <br/> $x=6$.<br/> <br/> <br/> Therefore, $\\boxed{x=6}$.</div><br><br><small>Source: <a href=\"https://gateoverflow.in/526299/go-classes-dpp-gate-cs-da-linear-algebra-determinant\" target=\"_blank\">GATE Overflow #526299</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\">If $A$ and $B$ are matrices of order $4 \\times 4$ such that $A= 5B$ and $\\det(A) = X*\\det(B)$, then $X$ will be</div></span>",
            "image": "",
            "options": [],
            "answer": "625",
            "solution": "<div class=\"solution-content\"><a name=\"526115\"></a><div itemprop=\"text\"><p data-end=\"68\" data-start=\"0\">Since $A=5B$ and both are $4\\times 4$ matrices, we use the property:</p><p data-end=\"130\" data-start=\"70\">If a matrix of order $n$ is multiplied by a scalar $k$, then</p><p data-end=\"154\" data-start=\"132\">$\\det(kB)=k^n \\det(B)$</p><p data-end=\"180\" data-start=\"156\">Here $k=5$ and $n=4$, so</p><p data-end=\"222\" data-start=\"182\">$\\det(A)=\\det(5B)=5^4\\det(B)=625\\det(B)$</p><p data-end=\"238\" data-start=\"224\">Comparing with</p><p data-end=\"258\" data-start=\"240\">$\\det(A)=X\\det(B)$</p><p data-end=\"266\" data-start=\"260\">we get</p><p data-end=\"283\" data-start=\"268\">$\\boxed{X=625}$</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/526114/go-classes-dpp-gate-cs-da-linear-algebra-determinant\" target=\"_blank\">GATE Overflow #526114</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\">The sum of the diagonal elements of a $ 2\\times 2 $ upper triangular matrix is $-6.$ Then, the maximum possible value of the determinant of the matrix is ________.</div></span>",
            "image": "",
            "options": [],
            "answer": "9",
            "solution": "<div class=\"solution-content\"><a name=\"525951\"></a><div itemprop=\"text\"><p><strong>Important properties of Eigen values:</strong></p><ul><li>Sum of all eigen values$=$Sum of leading diagonal(principle diagonal) elements=Trace of the matrix.<br/> </li><li>Product of all Eigen values$=Det(A)= \\mid A \\mid$<br/> </li><li>Any square diagonal(lower triangular or upper triangular) matrix eigen values are leading diagonal (principle diagonal)elements itself.</li></ul><div> </div><div>Now, </div><p>Let upper triangular matrix $A = \\begin{bmatrix} a_{11} &amp;a_{12} \\\\ 0 &amp;a_{22} \\end{bmatrix}_{2\\times 2}$</p><p>Given that: Sum of the diagonal elements of a $2\\times 2$ upper triangular matrix is $-6.$</p><p>$\\implies a_{11} + a_{22} = -6$</p><p>Let one eigen value is $\\lambda$, then other eigen value is $-6-\\lambda.$</p><p>Determinant $ = \\mid A \\mid = a_{11}a_{22} = \\lambda (-6-\\lambda)$</p><p>Lets $ y = \\lambda (-6-\\lambda)$</p><p>$\\implies y = -6\\lambda -\\lambda^{2}\\rightarrow(1)$</p><p>Differentiate with respect to $'\\lambda'$ both side</p><p>$\\implies \\dfrac{\\mathrm{d} y}{\\mathrm{d} \\lambda} = -6-2\\lambda = 0\\implies \\lambda=-3$</p><p>Differentiate with respect to $'\\lambda'$ both side</p><p>$\\implies\\dfrac{\\mathrm{d^{2}} y}{\\mathrm{d} \\lambda^{2}} = -2&lt;0\\:{\\textbf{(Maxima)}}$</p><p>$\\therefore$ for $\\lambda = -3,$ we got Maxima.</p><p>Now, we put $\\lambda = -3$ in equation $(1)$ and get the maximum value of determinant.</p><p>$\\implies y = -6(-3)- (-3)^{2}$</p><p>$\\implies y = 18-9 = 9$</p><p>$\\therefore\\: \\mid A \\mid = a_{11}a_{22} = 9$</p><p>So, the correct answer is $\\boxed{9}.$</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/525950/go-classes-dpp-gate-cs-da-linear-algebra-determinant\" target=\"_blank\">GATE Overflow #525950</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>If $I$ is the unit matrix of order $n$, where $k \\ne 0$ is a constant, then $\\operatorname{adj}(kI)$ is</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$k^n I$<br/></span>",
                "<span style=\"display: inline;\">$k^{n-1} I$<br/></span>",
                "<span style=\"display: inline;\">$kI$<br/></span>",
                "<span style=\"display: inline;\">$I$</span>"
            ],
            "answer": "D",
            "solution": "<div class=\"solution-content\"><a name=\"525850\"></a><div itemprop=\"text\">Let $A = kI$, where $I$ is the unit matrix of order $n$$.$<br/> <br/> We use the identity<br/> $A \\, \\operatorname{adj}(A) = \\det(A)\\, I$.<br/> <br/> Substituting $A = kI$, we get<br/> $(kI)\\operatorname{adj}(kI) = \\det(kI)\\, I$.<br/> <br/> Now,<br/> $\\det(kI) = k^n$.<br/> <br/> So,<br/> $(kI)\\operatorname{adj}(kI) = k^n I$.<br/> <br/> Since $k \\ne 0$, dividing both sides by $k$ gives<br/> $\\operatorname{adj}(kI) = k^{n-1} I$.<br/> <br/> Hence,<br/> $\\boxed{\\operatorname{adj}(kI) = k^{n-1} I}$.</div><br><br><small>Source: <a href=\"https://gateoverflow.in/525849/go-classes-dpp-gate-cs-da-linear-algebra-adjoint-of-a-matrix\" target=\"_blank\">GATE Overflow #525849</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>If a matrix $A$ is given by $f(x)=a_{0}+a_{1}x+a_{2}x^{2}+....+a_{n-1}x^{n-1}+a_{n}x^{n},$then the determinant of $A$ is?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\frac{a_{0}}{a_{n}}$ <br/></span>",
                "<span style=\"display: inline;\">$\\frac{a_{n}}{a_{0}}$<br/></span>",
                "<span style=\"display: inline;\">$(-1)^{n}\\frac{a_{0}}{a_{n}}$ <br/></span>",
                "<span style=\"display: inline;\">$(-1)^{n}\\frac{a_{n}}{a_{0}}$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"525843\"></a><div itemprop=\"text\">$f(x)=a_{0}+a_{1}x+a_{2}x^{2}+\\dots +a_{n}x^{n}$<br/> <br/> Hence $f(A)=a_{0}+a_{1}A+a_{2}A^{2}+ \\dots +a_{n}A^{n}$<br/> <br/> Characteristic equation $f(\\lambda)=a_{0}+a_{1}\\lambda+a_{2}\\lambda^{2}+ \\dots+a_{n}\\lambda^{n}$<br/> <br/> Lets take $ n =2$<br/> <br/> $f(\\lambda)=a_{0}+a_{1}\\lambda+a_{2}\\lambda^{2}$<br/> <br/> $f(\\lambda)= a_{2}\\lambda^{2} + a_{1}\\lambda + a_{0}$<br/> <br/> Lets say roots are $\\lambda_{1},\\lambda_{2}$<br/> <br/> $\\mid A \\mid = \\lambda_{1}\\times \\lambda_{2} = \\dfrac{a_{0}}{a_{2}}$<br/> <br/> Lets take $ n =3$<br/> <br/> $f(\\lambda)=a_{0}+a_{1}\\lambda+a_{2}\\lambda^{2} + a_{3}\\lambda^{3}$<br/> <br/> $f(\\lambda)= a_{3}\\lambda^{3} + a_{2}\\lambda^{2} + a_{1}\\lambda + a_{0}$<br/> <br/> Lets say roots are $\\lambda_{1},\\lambda_{2},\\lambda_{1}$<br/> <br/> $\\mid A \\mid = \\lambda_{1}\\times \\lambda_{2}\\times \\lambda_{3} = -\\:\\dfrac{a_{0}}{a_{3}}$<br/> <br/> $\\text{det(A) = Product of eigen values} = \\lambda_{1}\\times \\lambda_{2}\\times \\dots \\times \\lambda_{n}$<br/> <br/> Hence $det(A)= (-1)^{n}\\dfrac{a_{0}}{a_{n}}\\:\\: \\text{(Product of roots of equation)}$<br/> <br/> So, the correct answer is $(C).$</div><br><br><small>Source: <a href=\"https://gateoverflow.in/525842/go-classes-dpp-gate-cs-da-linear-algebra-determinant\" target=\"_blank\">GATE Overflow #525842</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\">Let $A$ = $\\begin{bmatrix} 1 &amp; 0 &amp; -1 \\\\-1 &amp; 2 &amp; 0 \\\\ 0 &amp; 0 &amp; -2 \\end{bmatrix}$ and $B$ = $A^{3} - A^{2} -4A +5I$ where $I$ is the $3\\times 3$ identity matrix. The determinant of $B$ is ________ (up to $1$ decimal place).</div></span>",
            "image": "",
            "options": [],
            "answer": "1",
            "solution": "<div class=\"solution-content\"><a name=\"525643\"></a><div itemprop=\"text\">The matrix $A$ is block triangular, so its eigenvalues are the eigenvalues of the $2\\times 2$ block $\\begin{bmatrix}1 &amp; 0\\\\ -1 &amp; 2\\end{bmatrix}$ and the entry $-2$.<br/> <br/> Hence the eigenvalues of $A$ are $1,\\ 2,\\ -2$.<br/> <br/> Now,<br/> $B=A^3-A^2-4A+5I$<br/> <br/> So if $\\lambda$ is an eigenvalue of $A$, then the corresponding eigenvalue of $B$ is<br/> $\\lambda^3-\\lambda^2-4\\lambda+5$.<br/> <br/> Substituting:<br/> <br/> For $\\lambda=1$,<br/> $1^3-1^2-4(1)+5=1$<br/> <br/> For $\\lambda=2$,<br/> $2^3-2^2-4(2)+5=8-4-8+5=1$<br/> <br/> For $\\lambda=-2$,<br/> $(-2)^3-(-2)^2-4(-2)+5=-8-4+8+5=1$<br/> <br/> So the eigenvalues of $B$ are<br/> $1,\\ 1,\\ 1$.<br/> <br/> Therefore,<br/> $|B|=1\\cdot 1\\cdot 1=1$<br/> <br/> Hence, the determinant of $B$ is $\\boxed{1}$.</div><br><br><small>Source: <a href=\"https://gateoverflow.in/525642/go-classes-dpp-gate-cs-da-linear-algebra-determinant\" target=\"_blank\">GATE Overflow #525642</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\">Consider a matrix $A=\\begin{bmatrix} a&amp;a^{2} &amp;a^{3}-1 \\\\ b&amp; b^{2} &amp;b^{3}-1 \\\\ c&amp; c^{2}&amp;c^{3}-1 \\end{bmatrix}$<br/> <br/> <br/> if $|A|=0$, then the value of $abc$ is _______________.</div></span>",
            "image": "",
            "options": [],
            "answer": "1",
            "solution": "<div class=\"solution-content\"><a name=\"525320\"></a><div itemprop=\"text\"><p>$A=\\begin{bmatrix} a&amp;a^{2} &amp;a^{3}-1 \\\\ b&amp; b^{2} &amp;b^{3}-1 \\\\ c&amp; c^{2}&amp;c^{3}-1 \\end{bmatrix}$<br/><br/>Given, $|A|=\\begin{vmatrix} a&amp;a^{2} &amp;a^{3}-1 \\\\ b&amp; b^{2} &amp;b^{3}-1 \\\\ c&amp; c^{2}&amp;c^{3}-1 \\end{vmatrix}=0$<br/><br/><br/>$\\begin{vmatrix} a&amp;a^{2} &amp;a^{3} \\\\ b&amp; b^{2} &amp;b^{3} \\\\ c&amp; c^{2}&amp;c^{3} \\end{vmatrix}+\\begin{vmatrix} a&amp;a^{2} &amp;-1 \\\\ b&amp; b^{2} &amp;-1 \\\\ c&amp; c^{2}&amp;-1 \\end{vmatrix}=0$<br/><br/><br/>$abc\\begin{vmatrix} 1&amp;a &amp;a^{2} \\\\ 1&amp; b&amp;b^{2} \\\\ 1&amp; c&amp;c^{2} \\end{vmatrix}+\\begin{vmatrix} a&amp;a^{2} &amp;-1 \\\\ b&amp; b^{2} &amp;-1 \\\\ c&amp; c^{2}&amp;-1 \\end{vmatrix}=0$<br/><br/><br/>$abc\\begin{vmatrix} 1&amp;a &amp;a^{2} \\\\ 1&amp; b&amp;b^{2} \\\\ 1&amp; c&amp;c^{2} \\end{vmatrix}+\\begin{vmatrix} a&amp;-1&amp;a^{2} \\\\ b&amp; -1&amp;b^{2} \\\\ c&amp; -1&amp;c^{2} \\end{vmatrix}=0$<br/><br/><br/>$abc\\begin{vmatrix} 1&amp;a &amp;a^{2} \\\\ 1&amp; b&amp;b^{2} \\\\ 1&amp; c&amp;c^{2} \\end{vmatrix}+\\begin{vmatrix} -1&amp;a&amp;a^{2} \\\\ -1&amp; b&amp;b^{2} \\\\ -1 &amp; c&amp;c^{2} \\end{vmatrix}=0$<br/><br/><br/>$abc\\begin{vmatrix} 1&amp;a &amp;a^{2} \\\\ 1&amp; b&amp;b^{2} \\\\ 1&amp; c&amp;c^{2} \\end{vmatrix}-1\\begin{vmatrix} 1&amp;a&amp;a^{2} \\\\ 1&amp; b&amp;b^{2} \\\\ 1 &amp; c&amp;c^{2} \\end{vmatrix}=0$<br/><br/><br/>$\\begin{vmatrix} 1&amp;a &amp;a^{2} \\\\ 1&amp; b&amp;b^{2} \\\\ 1&amp; c&amp;c^{2} \\end{vmatrix}(abc-1)=0$<br/><br/><br/>$\\begin{vmatrix} 1&amp;a &amp;a^{2} \\\\ 1&amp; b&amp;b^{2} \\\\ 1&amp; c&amp;c^{2} \\end{vmatrix}=0 , (abc-1)=0$<br/><br/><br/><strong>Answer :</strong> $\\boxed{abc=1}$</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/525319/go-classes-dpp-gate-cs-da-linear-algebra-determinant\" target=\"_blank\">GATE Overflow #525319</a></small></div>"
        }
    ]
});

registerTest({
    "name": "DPP 29 - Engineering Mathematics (Determinants - Part 4)",
    "testLabel": "DPP 29",
    "testType": "DPP",
    "bracket": "Determinants - Part 4",
    "subject": "em",
    "series": "cse-dpp-2027",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 11,
    "topicsCovered": "Determinants (Practice Set 4)",
    "questions": [
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\">Let $A$ be a $3 \\times 3$ matrix with integer entries such that $|A| =1$. What is the maximum possible number of entries of $A$ that are even?</div></span>",
            "image": "",
            "options": [],
            "answer": "6",
            "solution": "<div class=\"solution-content\"><a name=\"525312\"></a><div itemprop=\"text\">Let $A=(a_{ij})$ be a $3\\times 3$ matrix with $\\det(A)=1$.<br/> <br/> Assume that $A$ has $7$ or more even entries. Then at most $2$ entries are odd.<br/> <br/> Now, the determinant of a $3\\times 3$ matrix is given by<br/> $$<br/> \\det(A)=<br/> a_{11}a_{22}a_{33}+a_{12}a_{23}a_{31}+a_{13}a_{21}a_{32}<br/> -a_{13}a_{22}a_{31}-a_{11}a_{23}a_{32}-a_{12}a_{21}a_{33}<br/> $$<br/> <br/> Each term is a product of three entries.<br/> <br/> Since there are at most $2$ odd entries in the matrix, every product above must contain at least one even entry. Hence each term is even.<br/> <br/> Therefore, $\\det(A)$ is even, which contradicts $\\det(A)=1$ (odd).<br/> <br/> Hence, the number of even entries is at most $6$.<br/> <br/> Now consider<br/> $$<br/> A=<br/> \\begin{pmatrix}<br/> 1&amp;0&amp;0\\\\<br/> 0&amp;1&amp;0\\\\<br/> 0&amp;0&amp;1<br/> \\end{pmatrix}<br/> $$<br/> <br/> This matrix has $6$ even entries and $\\det(A)=1$.<br/> <br/> Therefore, the maximum possible number of even entries is $\\boxed{6}$</div><br><br><small>Source: <a href=\"https://gateoverflow.in/525308/go-classes-dpp-gate-cs-da-linear-algebra-determinant\" target=\"_blank\">GATE Overflow #525308</a></small></div>"
        },
        {
            "marks": 2,
            "neg": 0,
            "type": "MSQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider a $4 \\times 4$ matrix $M$. Suppose that the following four entries of the matrix are known to be zero.</p><p>For which of the following cases must the determinant of the matrix be equal to $0$ ?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$M[0,0]=0, ~M[1,1]=0, ~M[2,2]=0, ~M[3,3]=0$<br/></span>",
                "<span style=\"display: inline;\">$M[0,0]=0, ~M[0,1]=0, ~M[0,2]=0, ~M[0,3]=0$<br/></span>",
                "<span style=\"display: inline;\">$M[1,0]=0, ~M[0,1]=0, ~M[3,1]=0, ~M[2,3]=0$<br/></span>",
                "<span style=\"display: inline;\">$M[0,2]=0, ~M[1,2]=0, ~M[2,2]=0, ~M[3,2]=0$</span>"
            ],
            "answer": [
                "A"
            ],
            "solution": "<div class=\"solution-content\"><a name=\"525116\"></a><div itemprop=\"text\"><p>Recall that the determinant of a matrix is zero if the matrix has an entire row or an entire column consisting of zeros.</p><p>We analyze each option:</p><ol start=\"1\" style=\"list-style-type: upper-alpha;\"><li>The entries $M[0,0], M[1,1], M[2,2], M[3,3]$ are zero. <br/>These are diagonal entries only, and do not force an entire row or column to be zero. <br/>Therefore, the determinant is <em>not necessarily</em> zero.<br/> </li><li>The entries $M[0,0], M[0,1], M[0,2], M[0,3]$ are zero. <br/>This means the entire first row is zero. <br/>Hence, $\\det(M) = 0$.<br/> </li><li>The entries $M[1,0], M[0,1], M[3,1], M[2,3]$ are zero. <br/>These entries are scattered and do not form a complete row or column. <br/>Therefore, the determinant is \\emph{not necessarily} zero.<br/> </li><li>The entries $M[0,2], M[1,2], M[2,2], M[3,2]$ are zero. <br/>This means the entire third column is zero. <br/>Hence, $\\det(M) = 0$.<br/> </li></ol><p><strong>Answer:</strong> $\\boxed{\\text{B and D}}$</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/525115/go-classes-dpp-gate-cs-da-linear-algebra-determinant\" target=\"_blank\">GATE Overflow #525115</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>If $A$ is a $2 \\times 2$ matrix such that $trace(A) = det (A) = 3,$ then what is the $trace(A^{-1})$?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$1$<br/></span>",
                "<span style=\"display: inline;\">$\\left(\\dfrac{1}{3}\\right)$<br/></span>",
                "<span style=\"display: inline;\">$\\left(\\dfrac{1}{6}\\right)$<br/></span>",
                "<span style=\"display: inline;\">$\\left(\\dfrac{1}{2}\\right)$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"525054\"></a><div itemprop=\"text\">Sum of eigenvalues = Trace of the Matrix<br/> <br/> Product of eigenvalues = Determinant of the Matrix<br/> <br/> <br/> <br/> Let the eigenvalues of $A$ are $\\lambda _{1}$ and $\\lambda _{2}$<br/> <br/> $\\lambda _{1} + \\lambda _{2} = 3 ..............eq.1$<br/> <br/> $\\lambda _{1} * \\lambda _{2} = 3 ................eq.2$<br/> <br/> <br/> <br/> eigenvalues of $A^{-1}$ are $1/\\lambda _{1}$ and $1/\\lambda _{2}$<br/> <br/> $trace(A^{-1}) =$ Sum of eigenvalues<br/> <br/> $= 1/\\lambda _{1} + 1/\\lambda _{2} $<br/> <br/> $ = ( \\lambda _{1} + \\lambda _{2} ) / (\\lambda _{1} * \\lambda _{2} ) $<br/> <br/> on putting values of from $eq.1$ and $eq.2$, we get<br/> <br/> $ = 3/3 $<br/> <br/> $ = 1 $</div><br><br><small>Source: <a href=\"https://gateoverflow.in/525053/go-classes-dpp-gate-cs-da-linear-algebra-trace-of-matrix\" target=\"_blank\">GATE Overflow #525053</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>If $\\alpha, \\beta$ and $\\gamma$ are the roots of $x^3 - px +q = 0$, then the value of the determinant $$\\begin{vmatrix}\\alpha &amp; \\beta &amp; \\gamma\\\\\\beta &amp; \\gamma &amp; \\alpha\\\\\\gamma &amp; \\alpha &amp; \\beta\\end{vmatrix}$$ is</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$p$<br/></span>",
                "<span style=\"display: inline;\">$p^2$<br/></span>",
                "<span style=\"display: inline;\">$0$<br/></span>",
                "<span style=\"display: inline;\">$p^2+6q$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"525052\"></a><div itemprop=\"text\">$\\alpha ,\\beta ,\\gamma$ are roots of equation.<br/> <br/> $\\alpha +\\beta +\\gamma=0$<br/> <br/> $\\alpha \\beta + \\beta \\gamma+ \\gamma\\alpha =-p$<br/> <br/> $\\alpha \\cdot\\beta \\cdot\\gamma=q$<br/> <br/> Now, <br/> <br/> $\\begin{vmatrix} \\alpha &amp;\\beta &amp;\\gamma \\\\ \\beta &amp;\\gamma &amp;\\alpha \\\\ \\gamma &amp;\\alpha &amp;\\beta \\end{vmatrix}$<br/> <br/> Now, $C_{1} \\rightarrow C_{1} + C_{2} + C_{3}$<br/> <br/> $\\begin{vmatrix} \\alpha+\\beta+\\gamma &amp;\\beta &amp;\\gamma \\\\ \\alpha+\\beta+\\gamma &amp;\\gamma &amp;\\alpha \\\\ \\alpha+\\beta+\\gamma &amp;\\alpha &amp;\\beta \\end{vmatrix}$<br/> <br/> $(\\alpha+\\beta+\\gamma)$ $\\begin {vmatrix} 1 &amp;\\beta &amp;\\gamma \\\\ 1 &amp;\\gamma &amp;\\alpha \\\\ 1 &amp;\\alpha &amp;\\beta \\end{vmatrix}$<br/> <br/> Since, $(\\alpha+\\beta+\\gamma)$ $=0$ here<br/> <br/> So, $0 \\times $$\\begin {vmatrix} 1 &amp;\\beta &amp;\\gamma \\\\ 1 &amp;\\gamma &amp;\\alpha \\\\ 1 &amp;\\alpha &amp;\\beta \\end{vmatrix}$ $= 0$</div><br><br><small>Source: <a href=\"https://gateoverflow.in/525051/go-classes-dpp-gate-cs-da-linear-algebra-determinant\" target=\"_blank\">GATE Overflow #525051</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>The matrix $A=\\left[\\[\\begin{array}{ccc}-4 &amp; -3 &amp; -3 \\\\ 1 &amp; 0 &amp; 1 \\\\ 4 &amp; 4 &amp; x\\end{array}\\]\\right]$ is its own adjoint. The value of $x$ will be</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$5$ <br/></span>",
                "<span style=\"display: inline;\">$3$ <br/></span>",
                "<span style=\"display: inline;\">$-3$ <br/></span>",
                "<span style=\"display: inline;\">$-5$</span>"
            ],
            "answer": "B",
            "solution": "<div class=\"solution-content\"><a name=\"525625\"></a><div itemprop=\"text\"><p>Adjoint is the transpose of the cofactor matrix.</p><p>$Adj(A)_{ij}=C_{ji}=(-1)^{i+j}M_{ji}$</p><p>Given: $A = Adj(A)$</p><p>$<br/>\\begin{aligned}<br/>&amp;\\Rightarrow x=A_{33}=Adj(A)_{33}=C_{33}=(-1)^{3+3}M_{33} = M_{33}<br/>= \\begin{vmatrix}<br/>-4 &amp; -3\\\\<br/>1 &amp; 0<br/>\\end{vmatrix}<br/>=3<br/>\\end{aligned}<br/>$</p><p>Answer: <strong>B</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/524898/go-classes-dpp-gate-cs-da-linear-algebra-adjoint-of-matrix\" target=\"_blank\">GATE Overflow #524898</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>If $A=\\begin{bmatrix} 8 &amp; 5 \\\\ 7&amp; 6\\end{bmatrix}$ then $|A^{121}$ - $A^{120}|$ is $:$</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$0$<br/></span>",
                "<span style=\"display: inline;\">$1$<br/></span>",
                "<span style=\"display: inline;\">$120$<br/></span>",
                "<span style=\"display: inline;\">$121$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"524897\"></a><div itemprop=\"text\">$\\det(A^{121}-A^{120})$<br/> $=\\det\\bigl(A^{120}(A-I)\\bigr)$<br/> $=\\det(A^{120})\\det(A-I)$<br/> <br/> <br/> Now compute $A-I$:<br/> <br/> $A-I=\\begin{bmatrix}8-1&amp;5\\\\7&amp;6-1\\end{bmatrix}<br/> =\\begin{bmatrix}7&amp;5\\\\7&amp;5\\end{bmatrix}$<br/> <br/> <br/> The two rows are identical, hence<br/> <br/> $\\det(A-I)=7\\cdot 5-5\\cdot 7=0$<br/> <br/> <br/> Therefore,<br/> <br/> $\\det(A^{121}-A^{120})=\\det(A^{120})\\cdot 0=0$<br/> <br/> <br/> So the correct option is $\\boxed{0}$</div><br><br><small>Source: <a href=\"https://gateoverflow.in/524896/go-classes-dpp-gate-cs-da-linear-algebra-determinant\" target=\"_blank\">GATE Overflow #524896</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\">If $A_{3 \\times 3}$ is a matrix with $|A| = 2$. What is the determinant of $Adj (Adj (Adj (A)))$?</div></span>",
            "image": "",
            "options": [],
            "answer": "256",
            "solution": "<div class=\"solution-content\"><a name=\"524894\"></a><div itemprop=\"text\"><p>We know :</p><blockquote><p>| Adj(A) | = |A|<sup>n-1</sup></p></blockquote><p>Now extending this result we can solve as :</p><p> $ Adj(A) . Adj(Adj(A)) = |Adj(A)| . I$ , where $I$ is identity matrix</p><p>$ ==&gt; | Adj(A) . Adj(Adj(A)) | = |Adj(A)^n|$</p><p>$ ==&gt; | Adj(Adj(A)) | = |Adj(A)|^{n-1} = |A|^{(n-1)^2}$</p><p>$ ==&gt; | Adj(Adj(A)) * Adj( Adj(Adj(A)))| = | Adj(Adj(A)) |^{n}$</p><p>$ ==&gt; | Adj( Adj(Adj(A))) | = | Adj(Adj(A)) |^{(n-1)}$</p><p>$ ==&gt; | Adj( Adj(Adj(A))) | = |A|^{(n-1)^3}$</p><p>Now $n = 3$ here and given $|A| = 2$</p><p>Therefore </p><p> $| Adj( Adj(Adj(A))) | = 2^{2^3}$</p><p>$==&gt; | Adj( Adj(Adj(A))) | = 256$<br/> </p><p><em><strong>Hence $\\mathbf{256}$ is the correct answer..</strong></em></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/524892/go-classes-dpp-gate-cs-da-linear-algebra-determinant\" target=\"_blank\">GATE Overflow #524892</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Let $\\mathrm{M}$ and $\\mathrm{N}$ be two $3 \\times 3$ non-singular skew symmetric matrices such that $\\mathrm{M N=N M}$. If $\\mathrm{P}^{\\top}$ denotes the transpose of $\\mathrm{P}$, then $\\mathrm{M}^2 \\mathrm{~N}^2\\left(\\mathrm{M}^{\\top} \\mathrm{N}\\right)^{-1}\\left(\\mathrm{MN}^{-1}\\right)^{\\top}$ is equal to</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\mathrm{M}^2$<br/></span>",
                "<span style=\"display: inline;\">$-\\mathrm{N}^2$<br/></span>",
                "<span style=\"display: inline;\">$-\\mathrm{M^2}$<br/></span>",
                "<span style=\"display: inline;\">$\\mathrm{MN}$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"524799\"></a><div itemprop=\"text\"><p>Let</p><p>$E=M^2N^2\\,(M^T N)^{-1}\\,(MN^{-1})^T$</p><p>Given $M^T=-M$, $N^T=-N$, and $MN=NM$.<br/> </p><p>$\\textbf{Step 1: Compute }$ $(M^T N)^{-1}$</p><p>$M^T N=(-M)N=-MN$</p><p>$(M^T N)^{-1}=(-MN)^{-1}=-(MN)^{-1}$<br/> </p><p>$\\textbf{Step 2: Compute }$ $(MN^{-1})^T$</p><p>$(MN^{-1})^T=(N^{-1})^T M^T$</p><p>Also,</p><p>$(N^{-1})^T=(N^T)^{-1}=(-N)^{-1}=-N^{-1}$</p><p>and $M^T=-M$. Hence</p><p>$(MN^{-1})^T=(-N^{-1})(-M)=N^{-1}M$<br/> </p><p>$\\textbf{Step 3: Substitute back}$</p><p>$E=M^2N^2\\Bigl(-(MN)^{-1}\\Bigr)\\,(N^{-1}M)$</p><p>$=-M^2N^2(MN)^{-1}N^{-1}M$</p><p>Use $(MN)^{-1}=N^{-1}M^{-1}$ and $MN=NM$ (so inverses also commute):</p><p>$E=-M^2N^2\\,(N^{-1}M^{-1})\\,N^{-1}M$<br/> </p><p><strong>Group terms:</strong></p><p>$E=-M^2\\,(N^2N^{-1}N^{-1})\\,(M^{-1}M)$</p><p>$=-M^2\\cdot I\\cdot I$</p><p>Therefore, $\\boxed{E=-M^2}$</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/524798/go-classes-dpp-gate-cs-da-linear-algebra-matrices\" target=\"_blank\">GATE Overflow #524798</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\">The matrix $\\left[\\[\\begin{array}{cccc}a &amp; 0 &amp; 3 &amp; 7 \\\\ 2 &amp; 5 &amp; 1 &amp; 3 \\\\ 0 &amp; 0 &amp; 2 &amp; 4 \\\\ 0 &amp; 0 &amp; 0 &amp; b\\end{array}\\]\\right]$ has $\\operatorname{det}(A)=100$ and $\\operatorname{trace}(A)=14$.<br/> <br/> The value of $|a-b|$ is $\\qquad$</div></span>",
            "image": "",
            "options": [],
            "answer": "3",
            "solution": "<div class=\"solution-content\"><a name=\"524748\"></a><div itemprop=\"text\"><p>Given:<br/>$$<br/>\\begin{gathered}<br/>A=\\left[\\begin{array}{llll}<br/>a &amp; 0 &amp; 3 &amp; 7 \\\\<br/>2 &amp; 5 &amp; 1 &amp; 3 \\\\<br/>0 &amp; 0 &amp; 2 &amp; 4 \\\\<br/>0 &amp; 0 &amp; 0 &amp; b<br/>\\end{array}\\right] \\\\\\\\<br/>\\operatorname{det}(A)=100, \\quad \\operatorname{trace}(A)=14<br/>\\end{gathered}<br/>$$<br/>Step $1:$ <strong>Trace</strong><br/>$$<br/>\\operatorname{trace}(A)=a+5+2+b=14 \\Longrightarrow a+b=7<br/>$$<br/>Step $2:$ <strong>Determinant</strong><br/><br/>Since last row has only one non-zero element $b$, expanding along last row;<br/>$$<br/>\\begin{gathered}<br/>\\operatorname{det}(A)=b \\cdot \\operatorname{det}\\left|\\begin{array}{lll}<br/>a &amp; 0 &amp; 3 \\\\<br/>2 &amp; 5 &amp; 1 \\\\<br/>0 &amp; 0 &amp; 2<br/>\\end{array}\\right| \\\\\\\\<br/>=b \\cdot 2 \\cdot\\left|\\begin{array}{ll}<br/>a &amp; 0 \\\\<br/>2 &amp; 5<br/>\\end{array}\\right|=b \\cdot 2(a \\cdot 5-0)=10 a b \\\\\\\\<br/>10 a b=100 \\Longrightarrow a b=10<br/>\\end{gathered}<br/>$$<br/>Step $3:$ <strong>Find</strong> $a$ <strong>and</strong> $b$<br/>$$<br/>\\begin{gathered}<br/>a+b=7, \\quad a b=10 \\\\\\\\<br/>a, b \\text { are roots of } x^2-7 x+10=0 \\\\\\\\<br/>x^2-7 x+10=0 \\Longrightarrow(x-5)(x-2)=0 \\\\\\\\<br/>\\therefore a, b=5,2<br/>\\end{gathered}<br/>$$<br/>Step $4:$ <strong>Find</strong> $|a-b|$<br/>$$<br/>|a-b|=|5-2|=3<br/>$$</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/524746/go-classes-dpp-gate-cs-da-linear-algebra-determinant\" target=\"_blank\">GATE Overflow #524746</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>If $\\omega$ is the one of the imaginary cube roots of unity, the value of the determinant $\\begin{vmatrix}<br/>1 &amp; \\omega &amp; \\omega^{2}\\\\<br/>\\omega &amp; \\omega^{2} &amp; 1\\\\<br/>\\omega^{2} &amp; 1 &amp; \\omega<br/>\\end{vmatrix} =$ _____</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$1$<br/></span>",
                "<span style=\"display: inline;\">$\\omega^{3}$<br/></span>",
                "<span style=\"display: inline;\">$0$<br/></span>",
                "<span style=\"display: inline;\">$-1$</span>"
            ],
            "answer": "C",
            "solution": "<div class=\"solution-content\"><a name=\"524665\"></a><div itemprop=\"text\"><p>Let $\\Delta = \\begin{vmatrix}<br/>1 &amp; \\omega &amp; \\omega^{2} \\\\<br/> \\omega &amp; \\omega^{2} &amp; 1 \\\\<br/> \\omega^{2} &amp; 1 &amp; \\omega<br/>\\end{vmatrix} $<br/><br/>Perform the operation $R_{1} \\rightarrow R_{1} + R_{2} + R_{3},$ we get<br/><br/>$\\Delta = \\begin{vmatrix}<br/>1 + \\omega + \\omega^{2} &amp; \\omega + \\omega^{2} + 1 &amp; \\omega^{2} + 1 + \\omega \\\\<br/> \\omega &amp; \\omega^{2} &amp; 1 \\\\<br/> \\omega^{2} &amp; 1 &amp; \\omega<br/>\\end{vmatrix} $<br/><br/>$ \\implies \\Delta = \\begin{vmatrix}<br/>0 &amp; 0 &amp; 0 \\\\<br/> \\omega &amp; \\omega^{2} &amp; 1 \\\\<br/> \\omega^{2} &amp; 1 &amp; \\omega<br/>\\end{vmatrix} \\quad \\left(\\because 1 + \\omega + \\omega^{2} = 0\\right)$<br/><br/>$\\implies \\Delta = 0.$<br/><br/>So, the correct answer is $C$<br/><br/>References:</p><ul><li><a href=\"https://math.vanderbilt.edu/sapirmv/msapir/proofdet2.html\" rel=\"nofollow\" target=\"_blank\">https://math.vanderbilt.edu/sapirmv/msapir/proofdet2.html</a></li><li><a href=\"https://web.archive.org/web/20200615051706/https://ocw.mit.edu/courses/mathematics/18-06sc-linear-algebra-fall-2011/least-squares-determinants-and-eigenvalues/properties-of-determinants/MIT18_06SCF11_Ses2.5sum.pdf\" rel=\"nofollow\" target=\"_blank\">https://web.archive.org/web/20200615051706/https://ocw.mit.edu/courses/mathematics/18-06sc-linear-algebra-fall-2011/least-squares-determinants-and-eigenvalues/properties-of-determinants/MIT18_06SCF11_Ses2.5sum.pdf</a></li></ul></div><br><br><small>Source: <a href=\"https://gateoverflow.in/524664/go-classes-dpp-gate-cs-da-linear-algebra-determinant\" target=\"_blank\">GATE Overflow #524664</a></small></div>"
        }
    ]
});

registerTest({
    "name": "DPP 30 - Engineering Mathematics (Determinants - Part 5)",
    "testLabel": "DPP 30",
    "testType": "DPP",
    "bracket": "Determinants - Part 5",
    "subject": "em",
    "series": "cse-dpp-2027",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 11,
    "topicsCovered": "Determinants (Practice Set 5)",
    "questions": [
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>If $<br/>\\det\\!\\begin{bmatrix}<br/>1 &amp; t &amp; t^{2} &amp; t^{3}\\\\<br/>t &amp; 1 &amp; t &amp; t^{2}\\\\<br/>t^{2} &amp; t &amp; 1 &amp; t\\\\<br/>t^{3} &amp; t^{2} &amp; t &amp; 1<br/>\\end{bmatrix}=(1-A(t))^{p},<br/>$ then<br/> </p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$A(t)=t^3, p=2$<br/></span>",
                "<span style=\"display: inline;\">$A(t)=t^3, p=3$<br/></span>",
                "<span style=\"display: inline;\">$A(t)=t^2, p=2$<br/></span>",
                "<span style=\"display: inline;\">$A(t)=t^2, p=3$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"524570\"></a><div itemprop=\"text\">Let<br/> <br/> $D=\\begin{vmatrix}<br/> 1 &amp; t &amp; t^2 &amp; t^3\\\\<br/> t &amp; 1 &amp; t &amp; t^2\\\\<br/> t^2 &amp; t &amp; 1 &amp; t\\\\<br/> t^3 &amp; t^2 &amp; t &amp; 1<br/> \\end{vmatrix}$<br/> <br/> Do these row operations (they do not change the determinant):<br/> <br/> $R_4 \\to R_4-tR_3 \\quad R_3 \\to R_3-tR_2,\\quad R_2 \\to R_2-tR_1 $<br/> <br/> <br/> $R_4 \\to R_4-tR_3 $:<br/> <br/> $\\begin{vmatrix}<br/> 1 &amp; t &amp; t^2 &amp; t^3\\\\<br/> t &amp; 1 &amp; t &amp; t^2\\\\<br/> t^2 &amp; t &amp; 1 &amp; t\\\\<br/> t^3 &amp; t^2 &amp; t &amp; 1<br/> \\end{vmatrix}<br/> \\xrightarrow{R_4 \\to R_4-tR_3}<br/> \\begin{vmatrix}<br/> 1 &amp; t &amp; t^2 &amp; t^3\\\\<br/> t &amp; 1 &amp; t &amp; t^2\\\\<br/> t^2 &amp; t &amp; 1 &amp; t\\\\<br/> 0 &amp; 0 &amp; 0 &amp; 1-t^2<br/> \\end{vmatrix}$<br/> <br/> <br/> Now apply $R_3 \\to R_3-tR_2$:<br/> <br/> $\\begin{vmatrix}<br/> 1 &amp; t &amp; t^2 &amp; t^3\\\\<br/> t &amp; 1 &amp; t &amp; t^2\\\\<br/> t^2 &amp; t &amp; 1 &amp; t\\\\<br/> 0 &amp; 0 &amp; 0 &amp; 1-t^2<br/> \\end{vmatrix}<br/> \\xrightarrow{R_3 \\to R_3-tR_2}<br/> \\begin{vmatrix}<br/> 1 &amp; t &amp; t^2 &amp; t^3\\\\<br/> t &amp; 1 &amp; t &amp; t^2\\\\<br/> 0 &amp; 0 &amp; 1-t^2 &amp; t(1-t^2)\\\\<br/> 0 &amp; 0 &amp; 0 &amp; 1-t^2<br/> \\end{vmatrix}$<br/> <br/> <br/> Now apply $R_2 \\to R_2-tR_1$:<br/> <br/> <br/> $\\begin{vmatrix}<br/> 1 &amp; t &amp; t^2 &amp; t^3\\\\<br/> t &amp; 1 &amp; t &amp; t^2\\\\<br/> 0 &amp; 0 &amp; 1-t^2 &amp; t(1-t^2)\\\\<br/> 0 &amp; 0 &amp; 0 &amp; 1-t^2<br/> \\end{vmatrix}<br/> \\xrightarrow{R_2 \\to R_2-tR_1}<br/> \\begin{vmatrix}<br/> 1 &amp; t &amp; t^2 &amp; t^3\\\\<br/> 0 &amp; 1-t^2 &amp; t(1-t^2) &amp; t^2(1-t^2)\\\\<br/> 0 &amp; 0 &amp; 1-t^2 &amp; t(1-t^2)\\\\<br/> 0 &amp; 0 &amp; 0 &amp; 1-t^2<br/> \\end{vmatrix}$<br/> <br/> <br/> $D=\\begin{vmatrix}<br/> 1 &amp; t &amp; t^2 &amp; t^3\\\\<br/> 0 &amp; 1-t^2 &amp; t(1-t^2) &amp; t^2(1-t^2)\\\\<br/> 0 &amp; 0 &amp; 1-t^2 &amp; t(1-t^2)\\\\<br/> 0 &amp; 0 &amp; 0 &amp; 1-t^2<br/> \\end{vmatrix}$<br/> <br/> <br/> <br/> Hence,<br/> <br/> $D=(1-t^2)^3$<br/> <br/> Comparing with $(1-A(t))^p$, we get<br/> <br/> $\\boxed{A(t)=t^2,\\quad p=3}$</div><br><br><small>Source: <a href=\"https://gateoverflow.in/524569/go-classes-dpp-gate-cs-da-linear-algebra-determinant\" target=\"_blank\">GATE Overflow #524569</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Solve for \\(x\\) such that<br/>\\[<br/>\\det\\!\\begin{bmatrix}<br/>3 &amp; -4 &amp; 7 &amp; 0 &amp; 6 &amp; -2\\\\<br/>2 &amp; 0 &amp; 1 &amp; 8 &amp; 0 &amp; 0\\\\<br/>3 &amp; 4 &amp; -8 &amp; 3 &amp; 1 &amp; 2\\\\<br/>27 &amp; 6 &amp; 5 &amp; 0 &amp; 0 &amp; 3\\\\<br/>3 &amp; x &amp; 0 &amp; 2 &amp; 1 &amp; -1\\\\<br/>1 &amp; 0 &amp; 1 &amp; 3 &amp; 4 &amp; 0<br/>\\end{bmatrix}=0.<br/>\\]</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$x=-2$<br/></span>",
                "<span style=\"display: inline;\">$x=2 $<br/></span>",
                "<span style=\"display: inline;\">$x=-1$<br/></span>",
                "<span style=\"display: inline;\">$x=1$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"524588\"></a><div itemprop=\"text\">det to get zero then it should have<br/> <br/> 1)zero row or column<br/> <br/> 2)two or more similar rows or columns<br/> <br/> 3) columns or rows are linearly dependent<br/> <br/> In this question we can get 2ndcolumn by multiplying 6thcolumn by 2 then x should be -2<br/> <br/> therefore x=-2</div><br><br><small>Source: <a href=\"https://gateoverflow.in/524567/go-classes-dpp-gate-cs-da-linear-algebra-determinant\" target=\"_blank\">GATE Overflow #524567</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>State whether True or False.<br/><br/>For the block matrix $M=\\begin{bmatrix}A &amp; B\\\\ C &amp; D\\end{bmatrix},$ where \\(A,B,C,D\\) are square matrices of the same order,<br/><br/>we have $\\det(M)=\\det(A)\\det(D)-\\det(B)\\det(C).$<br/> </p><p><em>NOTE$:$ <strong>Enter \"$\\textbf0$\" if the statement is false, otherwise enter \"$\\textbf1$\".</strong></em></p></div></span>",
            "image": "",
            "options": [],
            "answer": "0",
            "solution": "<div class=\"solution-content\"><a name=\"524556\"></a><div itemprop=\"text\"><article data-scroll-anchor=\"true\" data-testid=\"conversation-turn-80\" data-turn=\"assistant\" data-turn-id=\"request-69a6b1bb-045c-83aa-b047-ac5161d0b4b6-10\" dir=\"auto\" tabindex=\"-1\"><p data-end=\"1068\" data-is-last-node=\"\" data-start=\"0\">The statement is <strong>false</strong> in general (it holds for scalar \\(2\\times 2\\) matrices, but not for block matrices).<br/><br/><strong>Counterexample:</strong> take<br/>\\[<br/>A=D=I_2,\\qquad B=I_2,\\qquad C=-I_2.<br/>\\]<br/>Then<br/>\\[<br/>M=\\begin{bmatrix}I_2 &amp; I_2\\\\ -I_2 &amp; I_2\\end{bmatrix}.<br/>\\]<br/>Apply the block row operation \\(R_2 \\leftarrow R_2+R_1\\), which does not change the determinant:<br/>\\[<br/>\\det(M)=\\det\\begin{bmatrix}I_2 &amp; I_2\\\\ 0 &amp; 2I_2\\end{bmatrix}<br/>=\\det(I_2)\\det(2I_2).<br/>\\]<br/>Now<br/>\\[<br/>\\det(I_2)=1,\\qquad \\det(2I_2)=2^2\\det(I_2)=4,<br/>\\]<br/>so<br/>\\[<br/>\\det(M)=1\\cdot 4=4.<br/>\\]<br/>But the given formula yields<br/>\\[<br/>\\det(A)\\det(D)-\\det(B)\\det(C)<br/>=1\\cdot 1-1\\cdot \\det(-I_2).<br/>\\]<br/>Since<br/>\\[<br/>\\det(-I_2)=(-1)^2\\det(I_2)=1,<br/>\\]<br/>the right hand side becomes<br/>\\[<br/>1-1=0.<br/>\\]<br/>Thus \\(4\\neq 0\\), so the claimed identity is not true in general.<br/><br/><strong>Answer:</strong> \\(\\boxed{\\text{False}}\\).</p></article></div><br><br><small>Source: <a href=\"https://gateoverflow.in/524555/go-classes-dpp-gate-cs-da-linear-algebra-determinant\" target=\"_blank\">GATE Overflow #524555</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Let $A$ be a matrix with $\\operatorname{det}(A)=2$. Let $B$ be the matrix obtained after performing the following elementary row operations:</p><p>$\\operatorname{det}(B)=$ $\\_\\_\\_\\_$</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">scaling of $\\text{row-1}$ by $5,$<br/></span>",
                "<span style=\"display: inline;\">adding $3$ times $\\text{row-3}$ to $\\text{row-1},$<br/></span>",
                "<span style=\"display: inline;\">swapping of $\\text{row-2}$ and $\\text{row-3}.$<br/></span>"
            ],
            "answer": "-10",
            "solution": "<div class=\"solution-content\"><a name=\"524338\"></a><div itemprop=\"text\"><p>$(\\det(A)=2).$</p><p>Apply the row operations in order:</p><ol><li><p>$(R_1 \\to 5R_1)$<br/>Determinant gets multiplied by $(5)$.<br/>$$\\det \\to 5\\cdot 2=10$$</p></li><li><p>$(R_1 \\to R_1 + 3R_3)$<br/>Adding a multiple of one row to another does not change the determinant.<br/>$$\\det \\to 10$$</p></li><li><p>Swap $(R_2)$ and $(R_3)$<br/>Row swap multiplies determinant by $(-1)$.<br/>$$\\det \\to -10$$</p></li></ol><p>So,$$\\boxed{\\det(B)=-10}$$</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/524337/go-classes-dpp-gate-cs-da-linear-algebra-determinant\" target=\"_blank\">GATE Overflow #524337</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\">$\\text {What is the determinant of the following matrix?}$<br/> \\begin{aligned}<br/> &amp;A=\\left[\\[\\begin{array}{lll}<br/> 101 &amp; 102 &amp; 103 \\\\<br/> 201 &amp; 202 &amp; 203 \\\\<br/> 301 &amp; 302 &amp; 303<br/> \\end{array}\\]\\right]<br/> \\end{aligned}</div></span>",
            "image": "",
            "options": [],
            "answer": "0",
            "solution": "<div class=\"solution-content\"><a name=\"524336\"></a><div itemprop=\"text\">$A=\\begin{bmatrix}<br/> 101 &amp; 102 &amp; 103\\\\<br/> 201 &amp; 202 &amp; 203\\\\<br/> 301 &amp; 302 &amp; 303<br/> \\end{bmatrix}$<br/> <br/> Look at the rows:<br/> <br/> $R_2-R_1=[100,100,100]$<br/> <br/> $R_3-R_2=[100,100,100]$<br/> <br/> So,<br/> <br/> $R_3-R_2 = R_2-R_1$<br/> <br/> Rearrange:<br/> <br/> $R_3 - 2R_2 + R_1 = 0$<br/> <br/> That means the rows are linearly dependent, so the determinant must be zero.<br/> $$\\boxed{\\det(A)=0}$$</div><br><br><small>Source: <a href=\"https://gateoverflow.in/524335/go-classes-dpp-gate-cs-da-linear-algebra-determinant\" target=\"_blank\">GATE Overflow #524335</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Let \\(A\\) and \\(B\\) be \\(n\\times n\\) matrices such that \\(\\det(A)=2\\) and \\(\\det(B)=5\\).<br/><br/>Then \\(\\det\\!\\left(A^{3}B^{-1}A^{T}\\right)\\) $=$</p><p> </p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\frac{14}{5}$<br/></span>",
                "<span style=\"display: inline;\">$\\frac{16}{5}$<br/></span>",
                "<span style=\"display: inline;\">$-\\frac{16}{5}$<br/></span>",
                "<span style=\"display: inline;\">$-\\frac{14}{5}$</span>"
            ],
            "answer": "B",
            "solution": "<div class=\"solution-content\"><a name=\"524222\"></a><div itemprop=\"text\"><p>Given $\\operatorname{det}(A)=2$ and $\\operatorname{det}(B)=5$. We need $\\operatorname{det}\\left(A^3 B^{-1} A^T\\right)$.<br/><br/>Use properties:</p><ol><li>$\\operatorname{det}(X Y)=\\operatorname{det}(X) \\operatorname{det}(Y)$<br/> </li><li>$\\operatorname{det}\\left(A^3\\right)=(\\operatorname{det} A)^3$<br/> </li><li>$\\operatorname{det}\\left(B^{-1}\\right)=\\frac{1}{\\operatorname{det} B}$<br/> </li><li>$\\operatorname{det}\\left(A^T\\right)=\\operatorname{det}(A)$</li></ol><p><br/>So,$$<br/>\\begin{gathered}<br/>\\operatorname{det}\\left(A^3 B^{-1} A^T\\right)=\\operatorname{det}\\left(A^3\\right) \\operatorname{det}\\left(B^{-1}\\right) \\operatorname{det}\\left(A^T\\right) \\\\\\\\<br/>=(\\operatorname{det} A)^3 \\cdot \\frac{1}{\\operatorname{det} B} \\cdot(\\operatorname{det} A) \\\\\\\\<br/>=2^3 \\cdot \\frac{1}{5} \\cdot 2=\\frac{8 \\cdot 2}{5}=\\frac{16}{5}<br/>\\end{gathered}<br/>$$</p><p><br/>Hence, $\\boxed{\\frac{16}{5}}$.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/524221/go-classes-dpp-gate-cs-da-linear-algebra-properties-of-determinant\" target=\"_blank\">GATE Overflow #524221</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Let $A$ be a $3 \\times 3$ matrix such that</p><p>$$<br/>A\\left[\\begin{array}{c}<br/>2 \\\\<br/>-1 \\\\<br/>3<br/>\\end{array}\\right]=\\left[\\begin{array}{l}<br/>0 \\\\<br/>0 \\\\<br/>0<br/>\\end{array}\\right] .<br/>$$Then $A$ can have non-zero determinant.</p><p><em>NOTE$:$ <strong>Enter \"$\\textbf0$\" if the statement is false, otherwise enter \"$\\textbf1$\".</strong></em></p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">True<br/></span>",
                "<span style=\"display: inline;\">False<br/></span>"
            ],
            "answer": "0",
            "solution": "<div class=\"solution-content\"><a name=\"523950\"></a><div itemprop=\"text\"><p>Since$$<br/>A\\left[\\begin{array}{c}<br/>2 \\\\<br/>-1 \\\\<br/>3<br/>\\end{array}\\right]=\\left[\\begin{array}{l}<br/>0 \\\\<br/>0 \\\\<br/>0<br/>\\end{array}\\right]<br/>$$<br/>and the vector $\\left[\\begin{array}{c}2 \\\\ -1 \\\\ 3\\end{array}\\right]$ is a<strong> non-zero vector</strong>, the homogeneous system $A \\mathbf{x}=0$ has a <strong>non-trivial solution.</strong><br/><br/>That means the columns of $A$ are linearly dependent, so $A$ is <strong>not invertible</strong>.</p><p>Hence,</p><p>$$<br/>\\operatorname{det}(A)=0<br/>$$</p><p>So the statement \"$A$ can have non-zero determinant\" is <strong>false.</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/523949/go-classes-dpp-gate-cs-da-linear-algebra-matrix\" target=\"_blank\">GATE Overflow #523949</a></small></div>"
        },
        {
            "marks": 2,
            "neg": 0,
            "type": "MSQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Let \\(A\\) be a \\(3 \\times 3\\) matrix such that<br/>\\[<br/>\\det(A)=2.<br/>\\]</p><p>Which of the following statement(s) is/are correct?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">\\(\\det(2A)=16\\)<br/></span>",
                "<span style=\"display: inline;\">\\(\\det(3A)=54\\)<br/></span>",
                "<span style=\"display: inline;\">\\(\\det(A^2)=4\\)<br/></span>",
                "<span style=\"display: inline;\">\\(\\det(A^{-1})=\\dfrac{1}{2}\\)</span>"
            ],
            "answer": [
                "A"
            ],
            "solution": "<div class=\"solution-content\"><a name=\"524118\"></a><div itemprop=\"text\"><p style=\"text-align:center\"><img alt=\"\" height=\"1151\" src=\"https://gateoverflow.in/?qa=blob&amp;qa_blobid=10704537121543672262\" width=\"993\"/></p><p> </p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/523947/go-classes-dpp-gate-cs-da-linear-algebra-determinant\" target=\"_blank\">GATE Overflow #523947</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\">The matrix $\\left[\\[\\begin{array}{cccc}a &amp; 0 &amp; 3 &amp; 7 \\\\ 2 &amp; 5 &amp; 1 &amp; 3 \\\\ 0 &amp; 0 &amp; 2 &amp; 4 \\\\ 0 &amp; 0 &amp; 0 &amp; b\\end{array}\\]\\right]$ has $\\operatorname{det}(A)=100$ and $\\operatorname{trace}(A)=14$.<br/> <br/> The value of $|a-b|$ is $\\qquad$</div></span>",
            "image": "",
            "options": [],
            "answer": "3",
            "solution": "<div class=\"solution-content\"><a name=\"475245\"></a><div itemprop=\"text\">Trace = sum of diagonal elements <br/> <br/> Given: $\\text{Trace}(A) = 14$<br/> <br/> $a + b + 7 = 14 \\Rightarrow a + b = 7$<br/> <br/> Also given: $\\det(A) = 100$<br/> <br/> Let's calculate: \\[ |A| = \\begin{vmatrix} a &amp; 0 &amp; 3 &amp; 7 \\\\ 2 &amp; 5 &amp; 1 &amp; 3 \\\\ 0 &amp; 0 &amp; 2 &amp; 4 \\\\ 0 &amp; 0 &amp; 0 &amp; b \\\\ \\end{vmatrix} \\] Expanding along the first row: \\[ |A| = a \\cdot \\begin{vmatrix} 5 &amp; 1 &amp; 3 \\\\ 0 &amp; 2 &amp; 4 \\\\ 0 &amp; 0 &amp; b \\\\ \\end{vmatrix} = a \\cdot (5 \\cdot (2b - 0)) = 10ab \\] \\[ 10ab = 100 \\Rightarrow ab = 10 \\] Putting : $b = 7 - a$\\[ a(7 - a) = 10 \\Rightarrow 7a - a^2 = 10 \\Rightarrow a^2 - 7a + 10 = 0 \\] Solving the quadratic equation: \\[ a = 5, \\quad a = 2 \\Rightarrow b = 2, \\quad b = 5 \\] \\[ |a - b| = |5 - 2| = \\boxed{3} \\]</div><br><br><small>Source: <a href=\"https://gateoverflow.in/475231/go-classes-dpp-linear-algebra-determinant-gate-ec\" target=\"_blank\">GATE Overflow #475231</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>If $A$ is a square matrix of order $3 \\times 3$ and $\\operatorname{det}(A)=5$, then $\\operatorname{det}(2 A)$ must be:</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">5</span>",
                "<span style=\"display: inline;\">10</span>",
                "<span style=\"display: inline;\">25</span>",
                "<span style=\"display: inline;\">40</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"472062\"></a><div itemprop=\"text\">For a matrix $A$ of order $n \\times n$, the determinant of $k A$ is given by:<br/> <br/> $$<br/> \\operatorname{det}(k A)=k^n \\cdot \\operatorname{det}(A)<br/> $$<br/> <br/> Here, the matrix $A$ is of order $3 \\times 3$, so $n=3$.<br/> Given that $\\operatorname{det}(A)=5$, we need to find $\\operatorname{det}(2 A)$.<br/> <br/> $$<br/> \\operatorname{det}(2 A)=2^3 \\cdot \\operatorname{det}(A)=8 \\cdot 5=40<br/> $$<br/> </div><br><br><small>Source: <a href=\"https://gateoverflow.in/472050/go-classes-dpp-linear-algebra-determinant-binghamton\" target=\"_blank\">GATE Overflow #472050</a></small></div>"
        }
    ]
});

registerTest({
    "name": "DPP 31 - Engineering Mathematics (Determinants - Part 6)",
    "testLabel": "DPP 31",
    "testType": "DPP",
    "bracket": "Determinants - Part 6",
    "subject": "em",
    "series": "cse-dpp-2027",
    "date": "Nov 03, 2026",
    "duration": "15 Min",
    "totalMarks": 2,
    "topicsCovered": "Determinants (Practice Set 6)",
    "questions": [
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Let $A$ be a $3 \\times 3$ matrix so that $A\\left[\\[\\begin{array}{c}1 \\\\ 1 \\\\ -1\\end{array}\\]\\right]=\\left[\\[\\begin{array}{l}0 \\\\ 0 \\\\ 0\\end{array}\\]\\right]$. Then $A$ can have non-zero determinant.<br/>$A$. True<br/>$B$. False</p><p>NOTE:- <b id=\"docs-internal-guid-4138212c-7fff-a93b-4065-92e08dff4218\"> 0 if statement is false else give answer as 1</b></p></div></span>",
            "image": "",
            "options": [],
            "answer": "471367",
            "solution": "<div class=\"solution-content\"><a name=\"471721\"></a><div itemprop=\"text\"><p>the answer will be FALSE (0 ) <br/> If in AX=0 we have a <strong data-end=\"196\" data-start=\"172\">non-trivial solution</strong> that produces the zero vector, then the <strong data-end=\"281\" data-start=\"259\">columns of A</strong> are linearly dependent.<br/>if the columns were lineraly independent then there was only one way to produce zero vector and that is through trivial solution .<br/><br/>also,<br/>columns of A are linearly dependent it means it does not have full rank and hence determinant will be zero .<br/>so we cannot have non zero determinant. </p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/471367/go-classes-dpp-linear-algebra-matrix-binghamton\" target=\"_blank\">GATE Overflow #471367</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>The determinant of the matrix $A=\\left[\\[\\begin{array}{cccc}1 &amp; 0 &amp; 0 &amp; 0 \\\\ 0 &amp; 1 &amp; 0 &amp; 0 \\\\ -3 &amp; 0 &amp; 1 &amp; 0 \\\\ 0 &amp; 0 &amp; 0 &amp; 1\\end{array}\\]\\right]$ is:</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">3</span>",
                "<span style=\"display: inline;\">-3</span>",
                "<span style=\"display: inline;\">1</span>",
                "<span style=\"display: inline;\">-1</span>"
            ],
            "answer": "C",
            "solution": "<div class=\"solution-content\"><a name=\"470915\"></a><div itemprop=\"text\"><p>Answer is C.</p><p><img alt=\"\" height=\"203\" src=\"https://gateoverflow.in/?qa=blob&amp;qa_blobid=17602887645875108764\" width=\"1200\"/></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/470901/go-classes-dpp-linear-algebra-determinant-binghamton\" target=\"_blank\">GATE Overflow #470901</a></small></div>"
        }
    ]
});

registerTest({
    "name": "DPP 32 - Engineering Mathematics (Rank & Systems of Linear Equations - Part 1)",
    "testLabel": "DPP 32",
    "testType": "DPP",
    "bracket": "Rank & Systems of Linear Equations - Part 1",
    "subject": "em",
    "series": "cse-dpp-2027",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 13,
    "topicsCovered": "Rank & Systems of Linear Equations (Practice Set 1)",
    "questions": [
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Which of the following represents the complete solution set of the given system?</p><p>$$\\begin{bmatrix}<br/>1 &amp; 0 &amp; 0 &amp; 2 \\\\<br/>0 &amp; 1 &amp; 0 &amp; 0 \\\\<br/>0 &amp; 0 &amp; 1 &amp; -1<br/>\\end{bmatrix}<br/>\\begin{bmatrix}<br/>x \\\\ y \\\\ z \\\\ w<br/>\\end{bmatrix}<br/>=<br/>\\begin{bmatrix}<br/>0 \\\\ 4 \\\\ 3<br/>\\end{bmatrix}$$</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$(x, y, z, w) = (-2t, 4, 3 + t, t),\\ t \\in \\mathbb{R}$</span>",
                "<span style=\"display: inline;\">$(x, y, z, w) = (2t, 4, 3 - t, t),\\ t \\in \\mathbb{R}$</span>",
                "<span style=\"display: inline;\">$(x, y, z, w) = (-2t, 4, 3 - t, t),\\ t \\in \\mathbb{R}$</span>",
                "<span style=\"display: inline;\">$(x, y, z, w) = (-2, 4, 3, 1)$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"529056\"></a><div itemprop=\"text\">Given:<br/> <br/> $\\begin{bmatrix}<br/> 1 &amp; 0 &amp; 0 &amp; 2 \\\\<br/> 0 &amp; 1 &amp; 0 &amp; 0 \\\\<br/> 0 &amp; 0 &amp; 1 &amp; -1<br/> \\end{bmatrix}<br/> \\begin{bmatrix}<br/> x \\\\ y \\\\ z \\\\ w<br/> \\end{bmatrix}<br/> =<br/> \\begin{bmatrix}<br/> 0 \\\\ 4 \\\\ 3<br/> \\end{bmatrix}$<br/> <br/> This gives:<br/> <br/> $x + 2w = 0$<br/> $y = 4$<br/> $z - w = 3$<br/> <br/> Let $w = t$,<br/> <br/> $x = -2t$<br/> $y = 4$<br/> $z = 3 + t$<br/> <br/> Hence:<br/> <br/> $(x, y, z, w) = (-2t, 4, 3 + t, t),\\ t \\in \\mathbb{R}$<br/> <br/> Correct Option: $A$</div><br><br><small>Source: <a href=\"https://gateoverflow.in/529055/go-classes-dpp-gate-cs-linear-algebra-system-of-linear-equations\" target=\"_blank\">GATE Overflow #529055</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider the following statements:</p><div> </div><p><strong>Given Details:</strong></p><ul><li>Only statement $\\text{i}$ is correct.</li><li>Only statement $\\text{ii}$ is correct.</li><li>Both statements are correct.</li><li>None of the statement is correct.</li></ul></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">If $\\text{det}(A) \\neq 0 $ then $Ax = b$ has a unique solution.</span>",
                "<span style=\"display: inline;\">If $Ax = b$ has solutions $u_1 = \\begin{pmatrix} 2 \\\\ 2 \\\\ 2 \\end{pmatrix}$ and $u_2 = \\begin{pmatrix} 4 \\\\ 4 \\\\ 4 \\end{pmatrix}$, then $u_3 = \\begin{pmatrix} 3 \\\\ 3 \\\\ 3 \\end{pmatrix}$ is also a solution.</span>"
            ],
            "answer": "C",
            "solution": "<div class=\"solution-content\"><a name=\"529034\"></a><div itemprop=\"text\"><p>$(i)$ Given $\\det(A) \\ne 0$</p><p>Then $A$ is invertible.</p><p>So solution of $Ax = b$ is: $x = A^{-1}b$</p><p>Hence unique solution exists.</p><p>So statement $(i)$ is correct.</p><hr/><p>(ii) Given $u<em>1 = \\begin{pmatrix} 2 \\\\ 2 \\\\ 2 \\end{pmatrix}$ and $u</em>2 = \\begin{pmatrix} 4 \\\\ 4 \\\\ 4 \\end{pmatrix}$ are solutions.</p><p>Check:</p><p>$u_3 = \\begin{pmatrix} 3 \\\\ 3 \\\\ 3 \\end{pmatrix}$</p><p>Observe:</p><p>$u_3 = \\frac{1}{2} u_1 + \\frac{1}{2}u_2$</p><p>But for linear system $Ax = b$:</p><p>$A(\\alpha u_1 + \\beta u_2) = \\alpha b + \\beta b = (\\alpha + \\beta)b$</p><p>For this to be solution:</p><p>$\\alpha + \\beta = 1$</p><p>Here:</p><p>$\\frac{1}{2} + \\frac{1}{2} = 1$</p><p>So:</p><p>$A u_3 = b$</p><p>Hence $u_3$ is also a solution.</p><p>So statement (ii) is correct.</p><hr/><p>Final Answer: Option C</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/529033/go-classes-dpp-gate-cs-linear-algebra-determinant\" target=\"_blank\">GATE Overflow #529033</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Let $$ A=\\left[\\begin{array}{lll} a &amp; 1 &amp; 1 \\\\ b &amp; a &amp; 1 \\\\ 1 &amp; 1 &amp; 1 \\end{array}\\right] . $$ The number of elements in the set $$ \\left\\{(a, b) \\in \\mathbb{Z}^{2}: 0 \\leq a, b \\leq 2026, \\operatorname{rank}(A)=2\\right\\} $$ is</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$2026$<br/></span>",
                "<span style=\"display: inline;\">$2025$<br/></span>",
                "<span style=\"display: inline;\">$2026^{2}-1$<br/></span>",
                "<span style=\"display: inline;\">$2025 \\times 2026$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"528966\"></a><div itemprop=\"text\"><section data-scroll-anchor=\"false\" data-testid=\"conversation-turn-26\" data-turn=\"assistant\" data-turn-id=\"request-WEB:57ec4ac8-8d1e-4e0c-876b-06082d63f7ac-12\" dir=\"auto\"><p data-end=\"38\" data-start=\"0\">We need $\\operatorname{rank}(A)=2$ for</p><p data-end=\"138\" data-start=\"40\">$A=\\begin{pmatrix} a &amp; 1 &amp; 1 \\\\ b &amp; a &amp; 1 \\\\ 1 &amp; 1 &amp; 1 \\end{pmatrix}$, where $0 \\le a,b \\le 2026$.</p><p data-end=\"244\" data-start=\"140\">For a $3\\times 3$ matrix to have rank $2$, we need $\\det(A)=0$, but the matrix should not have rank $1$.</p><p data-end=\"276\" data-start=\"246\">First compute the determinant:</p><p data-end=\"353\" data-start=\"278\">$\\det(A)=\\begin{vmatrix} a &amp; 1 &amp; 1 \\\\ b &amp; a &amp; 1 \\\\ 1 &amp; 1 &amp; 1 \\end{vmatrix}$</p><p data-end=\"381\" data-start=\"355\">$= a(a-1) - (b-1) + (b-a)$</p><p data-end=\"400\" data-start=\"383\">$= a^2-a-b+1+b-a$</p><p data-end=\"414\" data-start=\"402\">$= a^2-2a+1$</p><p data-end=\"428\" data-start=\"416\">$= (a-1)^2$.</p><p data-end=\"466\" data-start=\"430\">So $\\det(A)=0$ if and only if $a=1$.</p><p data-end=\"487\" data-start=\"468\">Now put $a=1$. Then</p><p data-end=\"559\" data-start=\"489\">$A=\\begin{pmatrix} 1 &amp; 1 &amp; 1 \\\\ b &amp; 1 &amp; 1 \\\\ 1 &amp; 1 &amp; 1 \\end{pmatrix}$.</p><p data-end=\"635\" data-start=\"561\">Here the first and third rows are equal, so $\\operatorname{rank}(A)\\le 2$.</p><p data-end=\"718\" data-start=\"637\">For the rank to be $1$, all rows must be the same, which happens only when $b=1$.</p><p data-end=\"782\" data-start=\"720\">So for $a=1$ and $b\\neq 1$, we get $\\operatorname{rank}(A)=2$.</p><p data-end=\"890\" data-start=\"784\">Now $b$ can be any integer from $0$ to $2026$, so there are $2027$ choices for $b$. Excluding $b=1$ leaves</p><p data-end=\"906\" data-start=\"892\">$2027-1=2026$.</p><p data-end=\"965\" data-start=\"908\">Hence the number of such pairs $(a,b)$ is $\\boxed{2026}$.</p><p data-end=\"1004\" data-is-last-node=\"\" data-is-only-node=\"\" data-start=\"967\">So the correct answer is <strong>A</strong>.</p></section></div><br><br><small>Source: <a href=\"https://gateoverflow.in/528964/go-classes-dpp-gate-cs-linear-algebra-matrix-algebra\" target=\"_blank\">GATE Overflow #528964</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"209\" data-start=\"89\">Let $A$ be an $n \\times n$ matrix such that $\\det(A)=0$ and $\\text{adj}(A) \\neq 0$. Which of the following must be true?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\text{rank}(A)=n-1$<br/></span>",
                "<span style=\"display: inline;\">$\\text{rank}(A)=n-2$<br/></span>",
                "<span style=\"display: inline;\">$\\text{rank}(\\text{adj}(A))=1$<br/></span>",
                "<span style=\"display: inline;\">Both A and C</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"528961\"></a><div itemprop=\"text\"><p data-end=\"498\" data-start=\"442\">We use the identity $A \\cdot \\text{adj}(A) = \\det(A) I$.</p><p data-end=\"556\" data-start=\"500\">Since $\\det(A)=0$, this gives $A \\cdot \\text{adj}(A)=0$.</p><p data-end=\"691\" data-start=\"558\">Given $\\text{adj}(A) \\neq 0$, this implies that the columns of $\\text{adj}(A)$ lie in the null space of $A$, so $\\text{rank}(A) &lt; n$.</p><p data-end=\"791\" data-start=\"693\">A standard result states that if $\\det(A)=0$ and $\\text{adj}(A)\\neq 0$, then $\\text{rank}(A)=n-1$.</p><p data-end=\"819\" data-start=\"793\">Hence, option <strong>A is true.</strong></p><p data-end=\"901\" data-start=\"821\">Also, when $\\text{rank}(A)=n-1$, it follows that $\\text{rank}(\\text{adj}(A))=1$.</p><p data-end=\"934\" data-start=\"903\">Hence, option <strong>C</strong> <strong>is</strong> also <strong>true.</strong><br/><br/>Therefore, both A and C are correct.<br/><br/><br/>$\\underline{\\textbf{Alternate Solution :}}$</p><p data-end=\"577\" data-start=\"433\">We use the fact that $\\operatorname{adj}(A)$ is made from cofactors of $A$, so its entries are determinants of $(n-1)\\times(n-1)$ minors of $A$.</p><p data-end=\"749\" data-start=\"579\">Now $\\operatorname{adj}(A)\\neq 0$ means that at least one entry of $\\operatorname{adj}(A)$ is nonzero. Therefore, at least one $(n-1)\\times(n-1)$ minor of $A$ is nonzero.</p><p data-end=\"800\" data-start=\"751\">Hence, $A$ has a nonzero minor of order $n-1$, so</p><p data-end=\"834\" data-start=\"802\">$\\operatorname{rank}(A)\\ge n-1$.</p><p data-end=\"886\" data-start=\"836\">But $\\det(A)=0$, so the rank of $A$ cannot be $n$.</p><p data-end=\"898\" data-start=\"888\">Therefore,</p><p data-end=\"929\" data-start=\"900\">$\\operatorname{rank}(A)=n-1$.</p><p data-end=\"953\" data-start=\"931\">So option A is true.</p><p data-end=\"1137\" data-start=\"955\">Now if $\\operatorname{rank}(A)=n-1$, then all columns of $\\operatorname{adj}(A)$ are scalar multiples of each other, and similarly all rows are scalar multiples of each other. Hence,</p><p data-end=\"1186\" data-start=\"1139\">$\\operatorname{rank}(\\operatorname{adj}(A))=1$.</p><p data-end=\"1215\" data-start=\"1188\">So option C is also true.</p><p data-end=\"1282\" data-start=\"1217\">Therefore, both A and C are correct, so the correct answer is <strong>D</strong>.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/528960/go-classes-dpp-gate-cs-linear-algebra-matrix-algebra\" target=\"_blank\">GATE Overflow #528960</a></small></div>"
        },
        {
            "marks": 2,
            "neg": 0,
            "type": "MSQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"170\" data-start=\"57\">Mark all the correct statements given below. Let $P$ be an $l \\times m$ matrix and $Q$ be an $m \\times n$ matrix.</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\operatorname{rank}(P^TP)=\\operatorname{rank}(P)$<br/></span>",
                "<span style=\"display: inline;\">If $P$ has full row rank, then there exists an $m \\times l$ matrix $R$ such that $PR=I_l$<br/></span>",
                "<span style=\"display: inline;\">If $PQ=0$, then $\\operatorname{rank}(P)+\\operatorname{rank}(Q)\\le m$<br/></span>",
                "<span style=\"display: inline;\">If $\\operatorname{rank}(PQ)=\\operatorname{rank}(P)$, then $Q$ must have full row rank</span>"
            ],
            "answer": [
                "A"
            ],
            "solution": "<div class=\"solution-content\"><a name=\"528733\"></a><div itemprop=\"text\"><p data-end=\"823\" data-start=\"569\">Statement A is <strong>true.</strong><br/>Since $x^TP^TPx=(Px)^T(Px)=|Px|^2$, we have $P^TPx=0$ if and only if $Px=0$. So $\\ker(P^TP)=\\ker(P)$. Hence both matrices have the same nullity, and therefore the same rank. Thus, $\\operatorname{rank}(P^TP)=\\operatorname{rank}(P)$.<br/><br/>Statement B is <strong>true.</strong><br/>If $P$ has full row rank, then $\\operatorname{rank}(P)=l$. This means the linear map defined by $P$ is onto from $\\mathbb{R}^m$ to $\\mathbb{R}^l$. Therefore a right inverse exists, so there is an $m \\times l$ matrix $R$ such that $PR=I_l$.<br/><br/>Statement C is <strong>true.</strong><br/>If $PQ=0$, then every column of $Q$ lies in $\\ker(P)$. So $\\operatorname{Col}(Q)\\subseteq \\ker(P)$. Hence $\\operatorname{rank}(Q)\\le \\dim(\\ker(P))$. By rank-nullity, $\\dim(\\ker(P))=m-\\operatorname{rank}(P)$. Therefore, $\\operatorname{rank}(Q)\\le m-\\operatorname{rank}(P)$, which gives $\\operatorname{rank}(P)+\\operatorname{rank}(Q)\\le m$.<br/><br/>Statement D is <strong>false.</strong><br/>Take $P=\\begin{bmatrix}1&amp;0\\end{bmatrix}$ and $Q=\\begin{bmatrix}1&amp;0\\\\0&amp;0\\end{bmatrix}$. Then $PQ=\\begin{bmatrix}1&amp;0\\end{bmatrix}$, so $\\operatorname{rank}(PQ)=1=\\operatorname{rank}(P)$. But $\\operatorname{rank}(Q)=1&lt;2$, so $Q$ does not have full row rank.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/528732/go-classes-dpp-gate-cs-linear-algebra-rank-of-matrices\" target=\"_blank\">GATE Overflow #528732</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"131\" data-start=\"61\">Let $M$ be an $n \\times m$ real matrix. Define the following integers:</p><ul><li data-end=\"263\" data-start=\"133\">$k_1$ is the smallest positive integer such that $M=AB$, where $A$ is an $n \\times k_1$ matrix and $B$ is a $k_1 \\times m$ matrix.<br/> </li><li data-end=\"369\" data-start=\"265\">$k_2$ is the smallest positive integer such that $M$ can be written as a sum of $k_2$ rank-$1$ matrices.<br/> </li><li data-end=\"418\" data-start=\"371\">$k_3$ is the dimension of the row space of $M$.<br/> </li><li data-end=\"511\" data-start=\"420\">$k_4$ is the largest integer $r$ such that $M$ has at least one nonzero $r \\times r$ minor.<br/> </li></ul><p data-end=\"544\" data-start=\"513\">Which of the following is true?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$k_1<k_2=k_3<k_4$<br/></span>",
                "<span style=\"display: inline;\">$k_1=k_2=k_3=k_4$<br/></span>",
                "<span style=\"display: inline;\">$k_1=k_3<k_2=k_4$<br/></span>",
                "<span style=\"display: inline;\">$k_2<k_1=k_4<k_3$</span>"
            ],
            "answer": "B",
            "solution": "<div class=\"solution-content\"><a name=\"528726\"></a><div itemprop=\"text\"><p data-end=\"674\" data-start=\"648\">By definition, $k_3$ is the dimension of the row space of $M$, so $k_3=\\operatorname{rank}(M)$.</p><p data-end=\"855\" data-start=\"773\">Also, the largest order of a nonzero minor of a matrix is equal to its rank. Hence</p><p data-end=\"886\" data-start=\"857\">$k_4=\\operatorname{rank}(M)$.</p><p data-end=\"986\" data-start=\"888\">Now consider $k_1$. If $M=AB$ with $A$ of size $n \\times k_1$ and $B$ of size $k_1 \\times m$, then</p><p data-end=\"1099\" data-start=\"988\">$\\operatorname{rank}(M)=\\operatorname{rank}(AB)\\le \\min(\\operatorname{rank}(A),\\operatorname{rank}(B))\\le k_1$.</p><p data-end=\"1137\" data-start=\"1101\">So $k_1 \\ge \\operatorname{rank}(M)$.</p><p data-end=\"1302\" data-start=\"1139\">On the other hand, if $r=\\operatorname{rank}(M)$, then $M$ admits a rank factorization $M=AB$ with $A$ of size $n \\times r$ and $B$ of size $r \\times m$. Therefore</p><p data-end=\"1333\" data-start=\"1304\">$k_1=\\operatorname{rank}(M)$.</p><p data-end=\"1471\" data-start=\"1335\">Now consider $k_2$. A rank-$1$ matrix has rank at most $1$, and rank is subadditive, so if $M$ is a sum of $k_2$ rank-$1$ matrices, then</p><p data-end=\"1505\" data-start=\"1473\">$\\operatorname{rank}(M)\\le k_2$.</p><p data-end=\"1545\" data-start=\"1507\">Thus $k_2 \\ge \\operatorname{rank}(M)$.</p><p data-end=\"1725\" data-start=\"1547\">Conversely, if $\\operatorname{rank}(M)=r$, then from a rank factorization $M=AB$, writing the columns of $A$ as $a_1,\\dots,a_r$ and the rows of $B$ as $b_1^T,\\dots,b_r^T$, we get</p><p data-end=\"1756\" data-start=\"1727\">$M=a_1b_1^T+\\cdots+a_rb_r^T$,</p><p data-end=\"1804\" data-start=\"1758\">which is a sum of $r$ rank-$1$ matrices. Hence</p><p data-end=\"1841\" data-start=\"1806\">$k_2 \\le r=\\operatorname{rank}(M)$.</p><p data-end=\"1875\" data-start=\"1843\">So $k_2=\\operatorname{rank}(M)$.<br/><br/>$\\boxed{\\therefore k_1=k_2=k_3=k_4=\\operatorname{rank}(M)}$</p><p data-end=\"1961\" data-start=\"1932\">So the correct answer is <strong>B</strong>.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/528725/go-classes-dpp-gate-cs-linear-algebra-matrix-algebra\" target=\"_blank\">GATE Overflow #528725</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>What values of $x, y$ and $z$ satisfy the following system of linear equations?</p><p>$$\\begin{bmatrix} 1 &amp;2 &amp;3 \\\\ 1&amp; 3 &amp;4 \\\\ 2&amp; 2 &amp;3 \\end{bmatrix} \\begin{bmatrix} x\\\\y \\\\ z \\end{bmatrix} = \\begin{bmatrix} 6\\\\8 \\\\ 12 \\end{bmatrix}$$</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$x = 6$, $y = 3$, $z = 2$<br/></span>",
                "<span style=\"display: inline;\">$x = 12$, $y = 3$, $z = - 4$<br/></span>",
                "<span style=\"display: inline;\">$x = 6$, $y = 6$, $z = - 4$<br/></span>",
                "<span style=\"display: inline;\">$x = 12$, $y = - 3$, $z = 0$</span>"
            ],
            "answer": "C",
            "solution": "<div class=\"solution-content\"><a name=\"528606\"></a><div itemprop=\"text\"><p>$\\begin{bmatrix} 1 &amp;2 &amp;3 \\\\ 1&amp; 3 &amp;4 \\\\ 2&amp; 2 &amp;3 \\end{bmatrix} \\begin{bmatrix} x\\\\y \\\\ z \\end{bmatrix} = \\begin{bmatrix} 6\\\\8 \\\\ 12 \\end{bmatrix}$</p><ul><li>$x+2y+3z=6\\quad \\to (1)$</li><li>$x+3y+4z=8\\quad \\to(2)$</li><li>$2x+2y+3z=12\\quad \\to (3)$</li></ul><p>Apply $(3)-(1)$<br/>$\\implies x=6$</p><p>Put value of $x$ in any of the $2$ equations. Let's take (1) and (2)</p><ul><li>$2y+3z=0$</li><li>$3y +4z=2$</li><li>$\\implies y=6 , z=-4$</li></ul><p>Hence, Option(C) $x=6,y=6,z=-4$.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/528605/go-classes-dpp-gate-cs-linear-algebra-system-of-linear-equations\" target=\"_blank\">GATE Overflow #528605</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p><strong>True/False Question :</strong></p><p>Suppose $A,B,C$ are $3\\times3$ real matrices with Rank $A =2$, Rank $B=1$, Rank $C=2$. Then Rank $(ABC)=1$.<br/><br/><em>(Note : Mark $\\emph{0}$ for False and $\\emph{1}$ for True.)</em></p></div></span>",
            "image": "",
            "options": [],
            "answer": "0",
            "solution": "<div class=\"solution-content\"><a name=\"528414\"></a><div itemprop=\"text\">We only know that $\\operatorname{rank}(ABC)\\leq \\min\\{\\operatorname{rank}(A),\\operatorname{rank}(B),\\operatorname{rank}(C)\\}=\\min\\{2,1,2\\}=1$.<br/> <br/> So $\\operatorname{rank}(ABC)$ is at most $1$, but it does not have to be equal to $1$. It can also be $0$.<br/> <br/> For example, take $A=\\begin{pmatrix}1&amp;0&amp;0\\\\0&amp;1&amp;0\\\\0&amp;0&amp;0\\end{pmatrix}$, $B=\\begin{pmatrix}0&amp;0&amp;0\\\\0&amp;0&amp;0\\\\1&amp;0&amp;0\\end{pmatrix}$, and $C=\\begin{pmatrix}1&amp;0&amp;0\\\\0&amp;1&amp;0\\\\0&amp;0&amp;0\\end{pmatrix}$.<br/> <br/> Then $\\operatorname{rank}(A)=2$, $\\operatorname{rank}(B)=1$, and $\\operatorname{rank}(C)=2$.<br/> <br/> Now,<br/> $AB=\\begin{pmatrix}1&amp;0&amp;0\\\\0&amp;1&amp;0\\\\0&amp;0&amp;0\\end{pmatrix}\\begin{pmatrix}0&amp;0&amp;0\\\\0&amp;0&amp;0\\\\1&amp;0&amp;0\\end{pmatrix}<br/> =\\begin{pmatrix}0&amp;0&amp;0\\\\0&amp;0&amp;0\\\\0&amp;0&amp;0\\end{pmatrix}$.<br/> <br/> Hence $ABC=0$, so $\\operatorname{rank}(ABC)=0$.<br/> <br/> Therefore, the statement is $\\boxed{\\text{False}}$.</div><br><br><small>Source: <a href=\"https://gateoverflow.in/528413/go-classes-dpp-gate-cs-linear-algebra-rank\" target=\"_blank\">GATE Overflow #528413</a></small></div>"
        },
        {
            "marks": 2,
            "neg": 0,
            "type": "MSQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"57\" data-start=\"15\">For which vector(s) $b$ below does the system $ \\begin{bmatrix}<br/>1 &amp; 2 \\\\<br/>3 &amp; 5 \\\\<br/>2 &amp; 3<br/>\\end{bmatrix} x = b $ have a solution?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$ \\begin{bmatrix} 1 \\\\ 2 \\\\ 1 \\end{bmatrix} $<br/></span>",
                "<span style=\"display: inline;\">$ \\begin{bmatrix} 2 \\\\ 4 \\\\ 3 \\end{bmatrix} $<br/></span>",
                "<span style=\"display: inline;\">$ \\begin{bmatrix} 3 \\\\ 8 \\\\ 5 \\end{bmatrix} $<br/></span>",
                "<span style=\"display: inline;\">$ \\begin{bmatrix} 1 \\\\ 3 \\\\ 2 \\end{bmatrix} $</span>"
            ],
            "answer": [
                "A"
            ],
            "solution": "<div class=\"solution-content\"><a name=\"528285\"></a><div itemprop=\"text\"><p>Let</p><p>$A=\\begin{bmatrix}<br/>1 &amp; 2 \\\\<br/>3 &amp; 5 \\\\<br/>2 &amp; 3<br/>\\end{bmatrix}$</p><p>and we want to know for which vectors $b$ the system $Ax=b$ is consistent.</p><p>Write the columns of $A$ as</p><p>$c_1=\\begin{bmatrix}1\\\\3\\\\2\\end{bmatrix}$, $\\quad c_2=\\begin{bmatrix}2\\\\5\\\\3\\end{bmatrix}$.</p><p>Then $Ax=b$ has a solution exactly when $b$ is a linear combination of $c_1$ and $c_2$, so $b$ must lie in the column space of $A$.</p><p>A quick way is to find a relation among the three entries of any vector in the column space.</p><p>Let $y=\\begin{bmatrix}a\\\\b\\\\c\\end{bmatrix}$ satisfy $y^T A=0$. Then</p><p>$a+3b+2c=0$</p><p>and</p><p>$2a+5b+3c=0$.</p><p>Solving these gives $a=-b$ and $c=-b$, so one such vector is</p><p>$y=\\begin{bmatrix}-1\\\\1\\\\-1\\end{bmatrix}$.</p><p>Therefore every vector $b$ in the column space must satisfy</p><p>$y^T b=0$,</p><p>that is,</p><p>$-b_1+b_2-b_3=0$,</p><p>or equivalently,</p><p>$b_2=b_1+b_3$.</p><p>Now check each option:</p><ol start=\"1\" style=\"list-style-type: upper-alpha;\"><li>$\\begin{bmatrix}1\\\\2\\\\1\\end{bmatrix}$: here $2=1+1$, so it works.<br/> </li><li>$\\begin{bmatrix}2\\\\4\\\\3\\end{bmatrix}$: here $4\\ne 2+3$, so it does not work.<br/> </li><li>$\\begin{bmatrix}3\\\\8\\\\5\\end{bmatrix}$: here $8=3+5$, so it works.<br/> </li><li>$\\begin{bmatrix}1\\\\3\\\\2\\end{bmatrix}$: here $3=1+2$, so it works.</li></ol><p><br/>So the system has a solution for <strong>A, C, and D</strong>.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/528283/go-classes-dpp-gate-cs-linear-algebra-system-of-linear-equations\" target=\"_blank\">GATE Overflow #528283</a></small></div>"
        },
        {
            "marks": 2,
            "neg": 0,
            "type": "MSQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Let $Ax = b$ be a system of linear equations where $A$ is an $m \\times n$ matrix and $b$ is a $m \\times 1$ column vector and $X$ is an $n \\times1$ column vector of unknowns. Which of the following is(are) <strong>True </strong>?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\"><p>The system has a solution if and only if, both $A$ and the augmented matrix $[Ab]$ have the same rank.</p></span>",
                "<span style=\"display: inline;\"><p>If $m &lt; n$ and $b$ is the zero vector, then the system has infinitely many solutions.</p></span>",
                "<span style=\"display: inline;\"><p>If $m=n$ and $b$ is a non-zero vector, then the system has a unique solution.</p></span>",
                "<span style=\"display: inline;\"><p>The system will have only a trivial solution when $m=n$, $b$ is the zero vector and $\\text{rank}(A) =n$.</p></span>"
            ],
            "answer": "C",
            "solution": "<div class=\"solution-content\"><a name=\"528281\"></a><div itemprop=\"text\"><p>We examine each statement one by one.</p><p>$\\textbf{A.}$ The system $Ax=b$ has a solution if and only if $A$ and the augmented matrix $[A | b]$ have the same rank.<br/><br/>This is <strong>true</strong>.<br/><br/>When we add the column $b$ to $A$, we get the augmented matrix $[A | b]$.<br/><br/>If adding $b$ does <strong>not</strong> increase the rank, then $b$ can be written as a linear combination of the columns of $A$. In that case, the equation $Ax=b$ has a solution.<br/><br/>If adding $b$ does increase the rank, then $b$ is not a linear combination of the columns of $A$, so the system has no solution.<br/><br/>Therefore, $Ax=b$ is consistent exactly when<br/>$\\operatorname{rank}(A)=\\operatorname{rank}([A | b])$.</p><p><br/>$\\textbf{B.}$ If $m&lt;n$ and $b$ is the zero vector, then the system has infinitely many solutions.</p><p>This is <strong>true</strong>.</p><p>Here the system is homogeneous: $Ax=0$.</p><p>A homogeneous system always has at least the trivial solution. Also,<br/><br/>$\\operatorname{rank}(A)\\le m&lt;n$,<br/><br/>so by rank-nullity,<br/><br/>$\\dim(\\operatorname{Null}(A))=n-\\operatorname{rank}(A)\\ge n-m&gt;0$.<br/><br/>Hence the null space has positive dimension, so there are infinitely many solutions.<br/><br/>So statement B is true<br/><br/><br/>$\\textbf{C.}$ If $m=n$ and $b$ is a non-zero vector, then the system has a unique solution.</p><p>This is <strong>false</strong>.<br/><br/>Just having $m=n$ does not guarantee a unique solution. It also depends on whether $A$ is invertible.</p><p>For example, let $A=\\begin{bmatrix}0 &amp; 0 \\\\ 0 &amp; 0\\end{bmatrix}$ and $b=\\begin{bmatrix}1 \\\\ 0\\end{bmatrix}$.</p><p>Then $Ax=b$ has no solution.</p><p>So statement C is false.<br/><br/><br/>$\\textbf{D.}$ The system will have only a trivial solution when $m=n$, $b$ is the zero vector and $\\operatorname{rank}(A)=n$.</p><p>This is <strong>true</strong>.</p><p>Since $m=n$ and $\\operatorname{rank}(A)=n$, the matrix $A$ is invertible.</p><p>So the homogeneous system $Ax=0$ has only the trivial solution $x=0$.</p><p>Thus statement D is true.</p><p>Therefore, the true statements are $\\textbf{A, B, and D}$.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/528280/go-classes-dpp-gate-cs-linear-algebra-systems-of-linear-equations-rank-%26-consistency\" target=\"_blank\">GATE Overflow #528280</a></small></div>"
        }
    ]
});

registerTest({
    "name": "DPP 33 - Engineering Mathematics (Rank & Systems of Linear Equations - Part 2)",
    "testLabel": "DPP 33",
    "testType": "DPP",
    "bracket": "Rank & Systems of Linear Equations - Part 2",
    "subject": "em",
    "series": "cse-dpp-2027",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 11,
    "topicsCovered": "Rank & Systems of Linear Equations (Practice Set 2)",
    "questions": [
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Let $A$ be an $n \\times n$ matrix with rank $k$. Consider the following statements:</p><p>Then</p><p><strong>Given Details:</strong></p><ul><li>(I) and (II) are true</li><li>(I) and (II) are false</li><li>(I) is true and (II) is false</li><li>(I) is false and (II) is true</li></ul></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">If $A$ has real entries, then $AA^{t}$ necessarily has rank $k$</span>",
                "<span style=\"display: inline;\">If $A$ has complex entries, then $AA^{t}$ necessarily has rank $k$.</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"528277\"></a><div itemprop=\"text\"><p>Let $\\operatorname{rank}(A)=k$.</p><p>We examine the two statements separately.</p><p>$\\textbf{(I) If $A$ has real entries, then $AA^T$ necessarily has rank $k$.}$</p><p>This statement is true.</p><p>For a real matrix $A$, suppose $AA^T x=0$. Then<br/>$x^T AA^T x = (A^T x)^T(A^T x)=\\|A^T x\\|^2=0$.</p><p>Hence $A^T x=0$. So,<br/>$\\operatorname{null}(AA^T)=\\operatorname{null}(A^T)$.</p><p>Therefore $AA^T$ and $A^T$ have the same nullity, and hence the same rank. Since<br/>$\\operatorname{rank}(A^T)=\\operatorname{rank}(A)=k$,<br/>we get<br/>$\\operatorname{rank}(AA^T)=k$.</p><p>So statement (I) is <strong>true</strong>.</p><p>$\\textbf{(II) If $A$ has complex entries, then $AA^T$ necessarily has rank $k$.}$</p><p>This statement is false.</p><p>For complex matrices, the result $\\operatorname{rank}(AA^T)=\\operatorname{rank}(A)$ need not hold. The correct general result is<br/>$\\operatorname{rank}(AA^*)=\\operatorname{rank}(A)$,<br/>where $A^*$ is the conjugate transpose.</p><p>Consider<br/>$A=\\begin{pmatrix}1 &amp; i \\\\ i &amp; -1\\end{pmatrix}$.</p><p>Then $A\\neq 0$, but<br/>$A^T=A$,<br/>so<br/>$AA^T=A^2$.</p><p>Now,<br/>$A^2=<br/>\\begin{pmatrix}1 &amp; i \\\\ i &amp; -1\\end{pmatrix}<br/>\\begin{pmatrix}1 &amp; i \\\\ i &amp; -1\\end{pmatrix}<br/>=<br/>\\begin{pmatrix}<br/>1+i^2 &amp; i-i \\\\<br/>i-i &amp; i^2+1<br/>\\end{pmatrix}<br/>=<br/>\\begin{pmatrix}<br/>0 &amp; 0 \\\\<br/>0 &amp; 0<br/>\\end{pmatrix}$.</p><p>Thus $\\operatorname{rank}(AA^T)=0$.</p><p>But $\\operatorname{rank}(A)=1$, since the second row is $i$ times the first row.</p><p>Hence $\\operatorname{rank}(AA^T)\\neq \\operatorname{rank}(A)$.</p><p>So statement (II) is <strong>false</strong>.<br/> </p><p>Therefore, $\\textbf{(I) is true and (II) is false}.$</p><p>Correct option: <strong>C</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/528276/go-classes-dpp-gate-cs-linear-algebra-rank-of-a-matrix\" target=\"_blank\">GATE Overflow #528276</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>The given system has infinitely many solutions for $k=?$<br/>$$<br/>\\left[\\begin{array}{ccc}<br/>2 &amp; 2 &amp; -4 \\\\<br/>1 &amp; 3 &amp; -2 \\\\<br/>-4 &amp; k &amp; 8<br/>\\end{array}\\right]\\left[\\begin{array}{l}<br/>x \\\\<br/>y \\\\<br/>z<br/>\\end{array}\\right]=\\left[\\begin{array}{c}<br/>3 \\\\<br/>4 \\\\<br/>-6<br/>\\end{array}\\right]<br/>$$</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$0$<br/></span>",
                "<span style=\"display: inline;\">$4$<br/></span>",
                "<span style=\"display: inline;\">$−4$<br/></span>",
                "<span style=\"display: inline;\">$\\text{All real values}$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"527441\"></a><div itemprop=\"text\">For the system to have infinitely many solutions, the coefficient matrix must be singular, and the system must be consistent.<br/> <br/> The coefficient matrix is $A=\\begin{bmatrix}<br/> 2 &amp; 2 &amp; -4 \\\\<br/> 1 &amp; 3 &amp; -2 \\\\<br/> -4 &amp; k &amp; 8<br/> \\end{bmatrix}$<br/> <br/> and the constant vector is $\\begin{bmatrix}<br/> 3\\\\<br/> 4\\\\<br/> -6<br/> \\end{bmatrix}$.<br/> <br/> First, make the third row easier by comparing it with the first row.<br/> <br/> Notice that if $k=-4$, then the third row becomes<br/> <br/> $[-4 \\quad -4 \\quad 8]$,<br/> <br/> which is exactly $-2$ times the first row:<br/> <br/> $-2[2 \\quad 2 \\quad -4]=[-4 \\quad -4 \\quad 8]$.<br/> <br/> Also, the third entry on the right side is $-6$, and this is exactly $-2$ times the first entry on the right side:<br/> <br/> $-2(3)=-6$.<br/> <br/> So when $k=-4$, the third equation is just a multiple of the first equation. That means one equation is dependent, and the system is consistent.<br/> <br/> Hence, the system has infinitely many solutions when $\\boxed{k=-4}$.<br/> <br/> So the correct answer is $\\boxed{\\text{C. }-4}$.</div><br><br><small>Source: <a href=\"https://gateoverflow.in/527440/go-classes-dpp-gate-cs-linear-algebra-system-of-equations\" target=\"_blank\">GATE Overflow #527440</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\">Consider a matrix $A_{4 \\times 5}$., where all the solutions of $A x=0$ has the following form :<br/> $$<br/> \\left[\\begin{array}{c}<br/> 6 c-12 e \\\\<br/> -4 c+10 e \\\\<br/> c \\\\<br/> -5 e \\\\<br/> e<br/> \\end{array}\\right]<br/> $$<br/> What will be the rank of $A?$</div></span>",
            "image": "",
            "options": [],
            "answer": "3",
            "solution": "<div class=\"solution-content\"><a name=\"527439\"></a><div itemprop=\"text\">We can re-write the given solution in terms of ‘$c$’ and ‘$e$’ as:<br/> <br/> $\\begin{bmatrix} 6c-12e \\\\ -4c+10e \\\\ c \\\\ -5e \\\\e \\end{bmatrix}$ = $c\\begin{bmatrix} 6 \\\\ -4 \\\\ 1 \\\\ 0 \\\\0 \\end{bmatrix}$ + $e\\begin{bmatrix} -12 \\\\ 10 \\\\ 0 \\\\ -5 \\\\1\\end{bmatrix}$.<br/> <br/> It means we have $2$ free columns.<br/> <br/> So, no. of pivot columns $=$ Total no. of columns $–$ No. of free columns $= 5 – 2 = 3$<br/> <br/> Rank $=$ No. of pivot columns $= 3.$</div><br><br><small>Source: <a href=\"https://gateoverflow.in/527438/go-classes-dpp-gate-cs-linear-algebra-rank-of-matrix\" target=\"_blank\">GATE Overflow #527438</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Let $P_1$, $P_2$ and $P_3$ denote, respectively, the planes defined by</p><p>$$\\begin{array} {} a_1x +b_1y+c_1z=\\alpha _1 \\\\ a_2x +b_2y+c_2z=\\alpha _2 \\\\ a_3x +b_3y+c_3z=\\alpha _3 \\end{array}$$</p><p>It is given that $P_1$, $P_2$ and $P_3$ intersect exactly at one point when $\\alpha _1 = \\alpha _2 =\\alpha _3=1$. If now $\\alpha _1 =2, \\: \\alpha _2=3, \\: \\alpha _3 = 4$ then the planes</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">do not have any common point of intersection<br/></span>",
                "<span style=\"display: inline;\">intersect at a unique point<br/></span>",
                "<span style=\"display: inline;\">intersect along a straight line<br/></span>",
                "<span style=\"display: inline;\">intersect along a plane</span>"
            ],
            "answer": "B",
            "solution": "<div class=\"solution-content\"><a name=\"527358\"></a><div itemprop=\"text\"><p>Given that $$\\begin{array} {} a_1x +b_1y+c_1z=\\alpha _1 \\\\ a_2x +b_2y+c_2z=\\alpha _2 \\\\ a_3x +b_3y+c_3z=\\alpha _3 \\end{array}$$</p><p>Non-homogeneous equations is the form of $AX = B$ and augmented matrix $[A:B]$</p><p>Case$1:$ If $\\text{rank}(A) \\neq \\text{rank}([A:B]),$ then no solution. </p><p>Case$2:$ If $\\text{rank}(A) = \\text{rank}([A:B]),$ then</p><ol start=\"1\"><li> If $\\text{rank}(A) = \\text{rank}([A:B]) = \\text{number of variables(unknown)},$ then unique solution.</li><li> If $\\text{rank}(A) = \\text{rank}([A:B]) &lt; \\text{number of variables(unknown)},$ then infinite solution.</li></ol><p>Now, we can write the above equations into an augmented form</p><p>$[A:B] = \\begin{bmatrix} a_{1}&amp; b_{1}&amp;c_{1} &amp; :\\alpha_{1}\\\\ a_{2}&amp;b_{2} &amp;c_{2} &amp;:\\alpha_{2} \\\\a_{3} &amp; b_{3}&amp;c_{3} &amp;:\\alpha_{3} \\end{bmatrix}$</p><p>Given that these planes intersect exactly at one point when $\\alpha _1 = \\alpha _2 =\\alpha _3=1.$ It means unique solution. Or we can say that $\\text{rank}(A) = \\text{rank}([A:B]) = \\text{number of variables(unknown)}.$</p><p>$[A:B] = \\begin{bmatrix} a_{1}&amp; b_{1}&amp;c_{1} &amp; :1 \\\\ a_{2}&amp;b_{2} &amp;c_{2} &amp;:1 \\\\a_{3} &amp; b_{3}&amp;c_{3} &amp;:1 \\end{bmatrix}$</p><p>Operation$:R_{3} \\rightarrow R_{3} - R_{2}, R_{2} \\rightarrow R_{2} - R_{1}$ by doing the elementary transformation rank of the matrix doesn't change.</p><p>$[A:B] = \\begin{bmatrix} a_{1}&amp; b_{1}&amp;c_{1} &amp; :1 \\\\ a_{2} - a_{1} &amp;b_{2} - b_{1} &amp;c_{2} - c_{1} &amp;: 0 \\\\a_{3} - a_{2} &amp; b_{3}- b_{2}&amp;c_{3}-c_{2} &amp;:0 \\end{bmatrix}$</p><p>If $c_{2} - c_{1}\\neq 0 $ and $c_{3}-c_{2} \\neq 0,$ than $\\text{rank}(A) = \\text{rank}([A:B]) = \\text{number of variables(unknown)}=3.$</p><p>If now $\\alpha _1 =2, \\: \\alpha _2=3, \\: \\alpha _3 = 4$ then </p><p>$[A:B] = \\begin{bmatrix} a_{1}&amp; b_{1}&amp;c_{1} &amp; :2 \\\\ a_{2}&amp;b_{2} &amp;c_{2} &amp;:3 \\\\a_{3} &amp; b_{3}&amp;c_{3} &amp;:4 \\end{bmatrix}$</p><p>Operation$:R_{3} \\rightarrow R_{3} - R_{2}, R_{2} \\rightarrow R_{2} - R_{1}$</p><p>$[A:B] = \\begin{bmatrix} a_{1}&amp; b_{1}&amp;c_{1} &amp; :2 \\\\ a_{2} - a_{1} &amp;b_{2} - b_{1} &amp;c_{2} - c_{1} &amp;: 1 \\\\a_{3} - a_{2} &amp; b_{3}- b_{2}&amp;c_{3}-c_{2} &amp;:1 \\end{bmatrix}$</p><p>Operation$:R_{3} \\rightarrow R_{3} - R_{2}$</p><p>$[A:B] = \\begin{bmatrix} a_{1}&amp; b_{1}&amp;c_{1} &amp; :2 \\\\ a_{2} - a_{1} &amp;b_{2} - b_{1} &amp;c_{2} - c_{1} &amp;: 1 \\\\a_{3} - 2a_{2} + a_{1} &amp; b_{3} - 2b_{2} + b_{1} &amp; c_{3} - 2c_{2} + c_{1} &amp;:0 \\end{bmatrix}$</p><p>Here, also $\\text{rank}(A) = \\text{rank}([A:B]) = \\text{number of variables(unknown)}=3.$</p><p>Therefore, intersect at a unique point.</p><p>So, the correct answer is <strong>B</strong> </p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/527357/go-classes-dpp-gate-cs-linear-algebra-system-of-equations\" target=\"_blank\">GATE Overflow #527357</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>The values of $a$ for which the following system of equations</p><p>$$\\begin{array} {} x &amp; + &amp; y &amp; + &amp; z &amp; = &amp; 1 \\\\ x &amp; + &amp; 2y &amp; + &amp; 4z &amp; = &amp; a \\\\ x &amp; + &amp; 4y &amp; + &amp; 10z &amp; = &amp; a ^2 \\end{array}$$ has a solution are</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$a = 1, -2$<br/></span>",
                "<span style=\"display: inline;\">$a = -1, -2$<br/></span>",
                "<span style=\"display: inline;\">$a = 3, -3$<br/></span>",
                "<span style=\"display: inline;\">$a = 1, 2$</span>"
            ],
            "answer": "D",
            "solution": "<div class=\"solution-content\"><a name=\"527356\"></a><div itemprop=\"text\">The given system is<br/> <br/> $x+y+z=1$<br/> <br/> $x+2y+4z=a$<br/> <br/> $x+4y+10z=a^2$<br/> <br/> Its augmented matrix is<br/> <br/> $\\left[\\begin{array}{ccc|c}<br/> 1&amp;1&amp;1&amp;1\\\\<br/> 1&amp;2&amp;4&amp;a\\\\<br/> 1&amp;4&amp;10&amp;a^2<br/> \\end{array}\\right]$<br/> <br/> Apply the row operations<br/> <br/> $R_2 \\to R_2-R_1,\\qquad R_3 \\to R_3-R_1$<br/> <br/> Then we get<br/> <br/> $\\left[\\begin{array}{ccc|c}<br/> 1&amp;1&amp;1&amp;1\\\\<br/> 0&amp;1&amp;3&amp;a-1\\\\<br/> 0&amp;3&amp;9&amp;a^2-1<br/> \\end{array}\\right]$<br/> <br/> Now apply<br/> <br/> $R_3 \\to R_3-3R_2$<br/> <br/> So,<br/> <br/> $\\left[\\begin{array}{ccc|c}<br/> 1&amp;1&amp;1&amp;1\\\\<br/> 0&amp;1&amp;3&amp;a-1\\\\<br/> 0&amp;0&amp;0&amp;a^2-1-3(a-1)<br/> \\end{array}\\right]$<br/> <br/> Simplifying the last entry,<br/> <br/> $a^2-1-3a+3=a^2-3a+2=(a-1)(a-2)$<br/> <br/> Hence,<br/> <br/> $\\left[\\begin{array}{ccc|c}<br/> 1&amp;1&amp;1&amp;1\\\\<br/> 0&amp;1&amp;3&amp;a-1\\\\<br/> 0&amp;0&amp;0&amp;(a-1)(a-2)<br/> \\end{array}\\right]$<br/> <br/> For the system to have a solution, the last row must not be of the form<br/> <br/> $[0\\ \\ 0\\ \\ 0\\ |\\ \\text{non-zero}]$<br/> <br/> So we need<br/> <br/> $(a-1)(a-2)=0$<br/> <br/> Therefore,<br/> <br/> $a=1$ or $a=2$<br/> <br/> Hence, the correct option is $D$.</div><br><br><small>Source: <a href=\"https://gateoverflow.in/527355/go-classes-dpp-gate-cs-linear-algebra-system-of-linear-equations\" target=\"_blank\">GATE Overflow #527355</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Let two systems of linear equations be defined as follows:</p><p>$\\[\\begin{array} {} &amp; x+y &amp; =1 \\\\ P: &amp; 3x+3y &amp; =3 \\\\ &amp; 5x+5y &amp; =5 \\end{array}\\]$ and $\\[\\begin{array} {} &amp; x+y &amp; =3 \\\\ Q: &amp; 2x+2y &amp; =4 \\\\ &amp; 5x+5y &amp; =12 \\end{array}\\]$. Then,<br/> </p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$P$ and $Q$ are inconsistent<br/></span>",
                "<span style=\"display: inline;\">$P$ and $Q$ are consistent<br/></span>",
                "<span style=\"display: inline;\">$P$ is consistent but $Q$ is inconsistent<br/></span>",
                "<span style=\"display: inline;\">None of the above</span>"
            ],
            "answer": "C",
            "solution": "<div class=\"solution-content\"><a name=\"527202\"></a><div itemprop=\"text\">For $P : $<br/> <br/> $x+y=1 \\qquad \\text{...(i)}$<br/> <br/> $3x+3y=3 \\qquad \\text{...(ii)}$<br/> <br/> $5x+5y=5 \\qquad \\text{...(iii)}$<br/> <br/> As we can see,<br/> <br/> $2\\times \\text{(i)}+\\text{(ii)}=\\text{(iii)}$<br/> <br/> This relation is satisfied by both the LHS and RHS.<br/> <br/> $\\therefore \\text{ system } P \\text{ has infinitely many solutions.}$<br/> <br/> $\\therefore P \\text{ is consistent.}$<br/> <br/> For $Q : $<br/> <br/> $x+y=3 \\qquad \\text{...(i)}$<br/> <br/> $2x+2y=4 \\qquad \\text{...(ii)}$<br/> <br/> $5x+5y=12 \\qquad \\text{...(iii)}$<br/> <br/> As we can see,<br/> <br/> $\\text{(i)}+2\\times \\text{(ii)}=\\text{(iii)}$<br/> <br/> This relation is satisfied by the LHS part, but not by the RHS part, since<br/> <br/> $3+2\\times 4=11 \\neq 12.$<br/> <br/> $\\therefore \\text{ system } Q \\text{ has no solution.}$<br/> <br/> $\\therefore Q \\text{ is inconsistent.}$<br/> <br/> $\\therefore \\text{Option C} \\text{ is the correct answer.}$</div><br><br><small>Source: <a href=\"https://gateoverflow.in/527200/go-classes-dpp-gate-cs-linear-algebra-system-of-linear-equations\" target=\"_blank\">GATE Overflow #527200</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>The $a, b, c$ and $d$ satisfy the equations$$\\begin{matrix} a &amp; + &amp; 7b &amp; + &amp; 3c &amp; + &amp; 5d &amp; = &amp;16 \\\\ 8a &amp; + &amp; 4b &amp; + &amp; 6c &amp; + &amp; 2d &amp; = &amp;-16 \\\\ 2a &amp; + &amp; 6b &amp; + &amp; 4c &amp; + &amp; 8d &amp; = &amp;16 \\\\ 5a &amp; + &amp; 7b &amp; + &amp; 3c &amp; + &amp; 5d &amp; = &amp;-16 \\end{matrix}$$Then $(a+d)(b+c)$ equals</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$-64$<br/></span>",
                "<span style=\"display: inline;\">$0$<br/></span>",
                "<span style=\"display: inline;\">$16$<br/></span>",
                "<span style=\"display: inline;\">$-16$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"526251\"></a><div itemprop=\"text\"><p><img alt=\"\" height=\"998\" src=\"https://gateoverflow.in/?qa=blob&amp;qa_blobid=8260445316312296845\" width=\"777\"/><br/><img alt=\"\" height=\"1105\" src=\"https://gateoverflow.in/?qa=blob&amp;qa_blobid=666412809239816911\" width=\"777\"/><br/><br/>Answer: A</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/526211/go-classes-dpp-gate-cs-da-linear-algebra-system-of-linear-equations\" target=\"_blank\">GATE Overflow #526211</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Let $A$ be a $4\\times 3$ real matrix with rank $2$. Let $B=A^T$. Which one of the following statements is true?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">Rank of $BA$ is less than $2$<br/></span>",
                "<span style=\"display: inline;\">Rank of $BA$ is equal to $2$<br/></span>",
                "<span style=\"display: inline;\">Rank of $BA$ is greater than $2$<br/></span>",
                "<span style=\"display: inline;\">Rank of $BA$ can be any number between $1$ and $3$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"525637\"></a><div itemprop=\"text\">Since $B=A^T$, we have<br/> $BA=A^T A$.<br/> <br/> Now,<br/> $\\operatorname{rank}(BA)=\\operatorname{rank}(A^T A)\\le \\min\\big(\\operatorname{rank}(A^T),\\operatorname{rank}(A)\\big)$<br/> <br/> But<br/> $\\operatorname{rank}(A)=\\operatorname{rank}(A^T)=2$<br/> <br/> So,<br/> $\\operatorname{rank}(A^T A)\\le 2$<br/> <br/> To get the exact value, let $A^T A x=0$ for some vector $x$.<br/> Then<br/> $x^T A^T A x = 0$<br/> <br/> So,<br/> $(Ax)^T(Ax)=0$<br/> <br/> This gives<br/> $\\|Ax\\|^2=0$<br/> <br/> Hence,<br/> $Ax=0$<br/> <br/> Therefore, the null space of $A^T A$ is the same as the null space of $A$.<br/> <br/> Now $A$ has $3$ columns and rank $2$, so<br/> $\\operatorname{nullity}(A)=3-2=1$<br/> <br/> Hence,<br/> $\\operatorname{nullity}(A^T A)=1$<br/> <br/> Since $A^T A$ is a $3\\times 3$ matrix,<br/> $\\operatorname{rank}(A^T A)=3-1=2$<br/> <br/> Therefore,<br/> $\\operatorname{rank}(BA)=2$<br/> <br/> So the correct option is $\\boxed{(B)}$</div><br><br><small>Source: <a href=\"https://gateoverflow.in/525636/go-classes-dpp-gate-cs-da-linear-algebra-rank\" target=\"_blank\">GATE Overflow #525636</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\">Consider matrix $A =$ $\\begin{bmatrix} k &amp;2k \\\\ k^{2}-k &amp;k^{2} \\end{bmatrix}$ and $x =$ $\\begin{bmatrix} x1\\\\x2 \\end{bmatrix}$<br/> <br/> The number of distinct real values of $k$ for which the equation $Ax = 0$ has infinitely many solutions is _______.</div></span>",
            "image": "",
            "options": [],
            "answer": "2",
            "solution": "<div class=\"solution-content\"><a name=\"525449\"></a><div itemprop=\"text\">Given, $A=\\begin{bmatrix}<br/> k &amp; 2k\\\\<br/> k^2-k &amp; k^2<br/> \\end{bmatrix}$ and the equation $Ax=0$.<br/> <br/> For the homogeneous system $Ax=0$ to have infinitely many solutions, the matrix $A$ must be singular.<br/> <br/> So we need $\\det(A)=0$<br/> <br/> Now,<br/> <br/> $\\det(A)=k \\cdot k^2 - 2k(k^2-k)$<br/> <br/> $=k^3-2k^3+2k^2$<br/> <br/> $=-k^3+2k^2$<br/> <br/> $=k^2(2-k)$<br/> <br/> <br/> Thus, $k^2(2-k)=0$<br/> <br/> <br/> So, $k=0$ or $k=2$<br/> <br/> These are two distinct real values of $k$.<br/> <br/> Hence, the required number of distinct real values is $\\boxed{2}$</div><br><br><small>Source: <a href=\"https://gateoverflow.in/525448/go-classes-dpp-gate-cs-da-linear-algebra-matrix-dependence-%26-independence\" target=\"_blank\">GATE Overflow #525448</a></small></div>"
        },
        {
            "marks": 2,
            "neg": 0,
            "type": "MSQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>$A$ is $m \\times n$ full rank matrix with $m&gt;n$ and $I$ is an identity matrix. Let matrix $A’ = (A^TA)^{-1} A^T$. Then which of the following statement(s) is(are) FALSE?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$AA’A = A $<br/></span>",
                "<span style=\"display: inline;\">$(AA')^2 = AA'$<br/></span>",
                "<span style=\"display: inline;\">$AA’A = I$<br/></span>",
                "<span style=\"display: inline;\">$AA’A = A’$</span>"
            ],
            "answer": "B",
            "solution": "<div class=\"solution-content\"><a name=\"525443\"></a><div itemprop=\"text\">Given $A$ is an $m \\times n$ full rank matrix with $m&gt;n$, and<br/> $A' = (A^T A)^{-1}A^T$.<br/> <br/> Note that $A'$ is the left inverse of $A$, so<br/> $A'A = I_n$.<br/> <br/> Also,<br/> $AA'$ is not identity. It is a projection matrix onto the column space of $A$.<br/> <br/> Now check the options:<br/> <br/> (A) $AA'A = A$<br/> <br/> We know $A'A = I$, so<br/> $AA'A = A(I) = A$<br/> <br/> Hence (A) is true.<br/> <br/> (B) $(AA')^2 = AA'$<br/> <br/> Since $AA'$ is a projection matrix, it is idempotent. So<br/> $(AA')^2 = AA'$<br/> <br/> Hence (B) is true.<br/> <br/> (C) $AA'A = I$<br/> <br/> But we already have<br/> $AA'A = A \\ne I$ (since $A$ is not square).<br/> <br/> Hence (C) is false.<br/> <br/> (D) $AA'A = A'$<br/> <br/> But<br/> $AA'A = A \\ne A'$<br/> <br/> Hence (D) is also false.<br/> <br/> Therefore, the false statements are<br/> <br/> $\\boxed{\\text{(C) and (D)}}$</div><br><br><small>Source: <a href=\"https://gateoverflow.in/525442/go-classes-dpp-gate-cs-da-linear-algebra-matrix-arithmetic\" target=\"_blank\">GATE Overflow #525442</a></small></div>"
        }
    ]
});

registerTest({
    "name": "DPP 34 - Engineering Mathematics (Rank & Systems of Linear Equations - Part 3)",
    "testLabel": "DPP 34",
    "testType": "DPP",
    "bracket": "Rank & Systems of Linear Equations - Part 3",
    "subject": "em",
    "series": "cse-dpp-2027",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 14,
    "topicsCovered": "Rank & Systems of Linear Equations (Practice Set 3)",
    "questions": [
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>If rank of a $3 \\times 4$ matrix $A$ is $2$ and $P$ is a non-singular matrix of order $4$ then rank of the matrix $AP$ is $\\_\\_\\_\\_$</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$2$<br/></span>",
                "<span style=\"display: inline;\">$<2$<br/></span>",
                "<span style=\"display: inline;\">$\\leq 2$<br/></span>",
                "<span style=\"display: inline;\">$>2$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"525323\"></a><div itemprop=\"text\"><p>Here $P$ is non-singular of order $4$, i.e. $|P|\\neq 0$. So rank of $P$ is $4$.<br/><br/>Since $A$ and $P$ are multiplication compatible, we use<br/>$$<br/>\\operatorname{rank}(AP)\\leq \\min(\\operatorname{rank}(A),\\operatorname{rank}(P))<br/>$$<br/>Therefore, $$\\operatorname{rank}(AP)\\leq \\min(2,4)=2$$<br/>So, $$\\operatorname{rank}(AP)\\leq 2$$<br/>But the rank of a matrix remains unchanged when it is multiplied by a non-singular matrix.<br/><br/><em>(The column rank of a matrix is invariant under pre multiplication by a non singular matrix. Similarly the row rank of a matrix is invariant under post multiplication by a non singular matrix.)</em><br/><br/>Hence, $$\\operatorname{rank}(AP)=\\operatorname{rank}(A)=2$$<br/>Therefore, the correct answer is $\\boxed{2}$.<br/> </p><p>Ref: <a href=\"http://www.biostat.jhsph.edu/~iruczins/teaching/cr/cr.intro.pdf\" ping=\"/url?sa=t&amp;source=web&amp;rct=j&amp;url=http://www.biostat.jhsph.edu/~iruczins/teaching/cr/cr.intro.pdf&amp;ved=2ahUKEwio85uWgP_nAhU363MBHct3BxkQFjALegQIAxAB\" rel=\"nofollow\" target=\"_blank\"><cite>www.biostat.jhsph.edu › ~iruczins › teaching › cr.intro.pdf</cite></a></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/525322/go-classes-dpp-gate-cs-da-linear-algebra-rank-of-matrix\" target=\"_blank\">GATE Overflow #525322</a></small></div>"
        },
        {
            "marks": 2,
            "neg": 0,
            "type": "MSQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider a non-homogeneous system of linear equations representing mathematically an over determined system. Such a system will be</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">consistent having a unique solution<br/></span>",
                "<span style=\"display: inline;\">consistent having many solutions<br/></span>",
                "<span style=\"display: inline;\">inconsistent having a unique solution<br/></span>",
                "<span style=\"display: inline;\">inconsistent having no solution</span>"
            ],
            "answer": [
                "A"
            ],
            "solution": "<div class=\"solution-content\"><a name=\"525629\"></a><div itemprop=\"text\">$$<br/> \\begin{aligned}<br/> &amp;Ax=b,\\quad A\\in\\mathbb{R}^{m\\times n},\\quad b\\in\\mathbb{R}^{m},\\quad m&gt;n.\\\\<br/> &amp;\\text{Since }m&gt;n,\\text{ the system is overdetermined.}\\\\<br/> &amp;\\text{If }\\operatorname{rank}(A)=\\operatorname{rank}([A|b])=n,\\text{ there is a unique solution.}\\\\<br/> &amp;\\text{If }\\operatorname{rank}(A)=\\operatorname{rank}([A|b])&lt;n,\\text{ there are infinitely many solutions.}\\\\<br/> &amp;\\text{If }\\operatorname{rank}(A)&lt;\\operatorname{rank}([A|b]),\\text{ the system is inconsistent, hence no solution.}<br/> \\end{aligned}<br/> $$<br/> <br/> $$<br/> \\therefore\\ \\boxed{A,\\ B,\\ D}<br/> $$</div><br><br><small>Source: <a href=\"https://gateoverflow.in/524900/go-classes-dpp-gate-cs-da-linear-algebra-system-of-linear-equations\" target=\"_blank\">GATE Overflow #524900</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Let $x$ be a real number. If the rank of the matrix $A=\\left[\\[\\begin{array}{ccc}x &amp; -1 &amp; 0 \\\\ 0 &amp; x &amp; -1 \\\\ -1 &amp; 0 &amp; x\\end{array}\\]\\right]$ is $2$, then $x=$</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$0$<br/></span>",
                "<span style=\"display: inline;\">$1$<br/></span>",
                "<span style=\"display: inline;\">$-1$<br/></span>",
                "<span style=\"display: inline;\">$2$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"524806\"></a><div itemprop=\"text\"><p>Given, $A=\\begin{bmatrix}<br/>x &amp; -1 &amp; 0\\\\<br/>0 &amp; x &amp; -1\\\\<br/>-1 &amp; 0 &amp; x<br/>\\end{bmatrix}$<br/> </p><p>For a $3\\times 3$ matrix, $\\text{rank}(A)=2$ means:</p><ol><li>$\\det(A)=0$ (so rank is not $3$), and<br/> </li><li>at least one $2\\times 2$ minor is nonzero (so rank is at least $2$).<br/> </li></ol><p>Compute $\\det(A)$ by expanding along the first row:<br/> </p><p>$\\det(A)=x\\begin{vmatrix}x&amp;-1\\\\0&amp;x\\end{vmatrix}-(-1)\\begin{vmatrix}0&amp;-1\\\\-1&amp;x\\end{vmatrix}+0$<br/> </p><p>$=x(x\\cdot x-(-1)\\cdot 0)+\\begin{vmatrix}0&amp;-1\\\\-1&amp;x\\end{vmatrix}$<br/> </p><p>$=x(x^2)+(0\\cdot x-(-1)(-1))$<br/> </p><p>$=x^3-1$<br/> </p><p>Set $\\det(A)=0$:<br/> </p><p>$x^3-1=0 \\Rightarrow x=1$<br/> </p><p>Now check a $2\\times 2$ minor when $x=1$:<br/> </p><p>$\\begin{vmatrix}1&amp;-1\\\\0&amp;1\\end{vmatrix}=1\\ne 0$<br/> </p><p>So rank is at least $2$. Since $\\det(A)=0$, rank is not $3$. Hence $\\text{rank}(A)=2$.<br/> </p><p>Therefore, $\\boxed{x=1}$</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/524804/go-classes-dpp-gate-cs-da-linear-algebra-rank\" target=\"_blank\">GATE Overflow #524804</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\">The rank of the matrix $\\left[\\[\\begin{array}{ccccc}1 &amp; -1 &amp; 0 &amp; 0 &amp; 0 \\\\ 0 &amp; 0 &amp; 1 &amp; -1 &amp; 0 \\\\ 0 &amp; 1 &amp; -1 &amp; 0 &amp; 0 \\\\ -1 &amp; 0 &amp; 0 &amp; 0 &amp; 1 \\\\ 0 &amp; 0 &amp; 0 &amp; 1 &amp; -1\\end{array}\\]\\right]$ is ?</div></span>",
            "image": "",
            "options": [],
            "answer": "4",
            "solution": "<div class=\"solution-content\"><a name=\"524743\"></a><div itemprop=\"text\">$$<br/> \\begin{aligned}<br/> &amp; A=\\left[\\begin{array}{ccccc}<br/> 1 &amp; -1 &amp; 0 &amp; 0 &amp; 0 \\\\<br/> 0 &amp; 0 &amp; 1 &amp; -1 &amp; 0 \\\\<br/> 0 &amp; 1 &amp; -1 &amp; 0 &amp; 0 \\\\<br/> -1 &amp; 0 &amp; 0 &amp; 0 &amp; 1 \\\\<br/> 0 &amp; 0 &amp; 0 &amp; 1 &amp; -1<br/> \\end{array}\\right] \\\\\\\\<br/> &amp; R_4 \\rightarrow R_4+R_1 \\\\<br/> &amp; A =\\left[\\begin{array}{ccccc}<br/> 1 &amp; -1 &amp; 0 &amp; 0 &amp; 0 \\\\<br/> 0 &amp; 0 &amp; 1 &amp; -1 &amp; 0 \\\\<br/> 0 &amp; 1 &amp; -1 &amp; 0 &amp; 0 \\\\<br/> 0 &amp; -1 &amp; 0 &amp; 0 &amp; 1 \\\\<br/> 0 &amp; 0 &amp; 0 &amp; 1 &amp; -1<br/> \\end{array}\\right] \\\\\\\\<br/> &amp; R_4 \\rightarrow R_4+R_3 \\\\<br/> &amp; A=\\left[\\begin{array}{ccccc}<br/> 1 &amp; -1 &amp; 0 &amp; 0 &amp; 0 \\\\<br/> 0 &amp; 0 &amp; 1 &amp; -1 &amp; 0 \\\\<br/> 0 &amp; 1 &amp; -1 &amp; 0 &amp; 0 \\\\<br/> 0 &amp; 0 &amp; -1 &amp; 0 &amp; 1 \\\\<br/> 0 &amp; 0 &amp; 0 &amp; 1 &amp; -1<br/> \\end{array}\\right] \\\\\\\\<br/> &amp; R_4 \\rightarrow R_4+R_2 \\\\<br/> &amp; A=\\left[\\begin{array}{ccccc}<br/> 1 &amp; -1 &amp; 0 &amp; 0 &amp; 0 \\\\<br/> 0 &amp; 0 &amp; 1 &amp; -1 &amp; 0 \\\\<br/> 0 &amp; 1 &amp; -1 &amp; 0 &amp; 0 \\\\<br/> 0 &amp; 0 &amp; 0 &amp; -1 &amp; 1 \\\\<br/> 0 &amp; 0 &amp; 0 &amp; 1 &amp; -1<br/> \\end{array}\\right] \\\\\\\\<br/> &amp; R_2 \\leftrightarrow R_3 \\text { and } R_5 \\rightarrow R_5+R_4 \\\\<br/> &amp; A=\\left[\\begin{array}{ccccc}<br/> 1 &amp; -1 &amp; 0 &amp; 0 &amp; 0 \\\\<br/> 0 &amp; 1 &amp; -1 &amp; 0 &amp; 0 \\\\<br/> 0 &amp; 0 &amp; 1 &amp; -1 &amp; 0 \\\\<br/> 0 &amp; 0 &amp; 0 &amp; -1 &amp; 1 \\\\<br/> 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0<br/> \\end{array}\\right]<br/> \\end{aligned}<br/> $$<br/> From here we can see the $\\rho(A)$,<br/> $$<br/> \\therefore \\rho(A)=4<br/> $$</div><br><br><small>Source: <a href=\"https://gateoverflow.in/524741/go-classes-dpp-gate-cs-da-linear-algebra-rank\" target=\"_blank\">GATE Overflow #524741</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Let \\(A\\) be a \\(3\\times5\\) real matrix and \\(\\mathbf b\\in\\mathbb R^3\\). Which of the following statements about the matrix equation $A \\mathbf{x}=\\mathbf{b}$ for $\\mathbf{x} \\in \\mathbb{R}^{5}$, and the corresponding homogeneous equation $A \\mathbf{x}=\\mathbf{0}$, could be true?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$A \\mathbf{x}=\\mathbf{b}$ has infinitely many solutions.<br/></span>",
                "<span style=\"display: inline;\">$A \\mathbf{x}=\\mathbf{0}$ is inconsistent.<br/></span>",
                "<span style=\"display: inline;\">$A \\mathbf{x}=\\mathbf{0}$ has exactly two solutions.<br/></span>",
                "<span style=\"display: inline;\">$A \\mathbf{x}=\\mathbf{0}$ has a unique solution and $A \\mathbf{x}=\\mathbf{b}$ has infinitely many solutions.</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"525516\"></a><div itemprop=\"text\"><p>$<br/>\\begin{alignedat}{2}<br/>&amp;\\text{A. }\\textcolor{green}{\\text{Possible.}}<br/>&amp;&amp;\\quad \\text{Since } \\operatorname{rank}(A)\\le 3,\\ \\operatorname{nullity}(A)=5-\\operatorname{rank}(A)\\ge 2. \\\\<br/>&amp;&amp;&amp;\\quad \\text{Hence, if }Ax=b\\text{ is consistent, it has infinitely many solutions.} \\\\<br/>&amp;\\text{B. }\\textcolor{red}{\\text{Not Possible.}}<br/>&amp;&amp;\\quad \\text{A homogeneous system }Ax=0\\text{ is always consistent.} \\\\<br/>&amp;&amp;&amp;\\quad \\text{Rank(A) is always equal to Rank(A|0).} \\\\<br/>&amp;&amp;&amp;\\quad \\text{In particular, }x=0\\text{ is always a solution.} \\\\<br/>&amp;\\text{C. }\\textcolor{red}{\\text{Not Possible.}}<br/>&amp;&amp;\\quad \\text{Since } \\operatorname{nullity}(A)\\ge 2,\\ Ax=0\\text{ has infinitely many solutions,} \\\\<br/>&amp;&amp;&amp;\\quad \\text{not exactly two.} \\\\<br/>&amp;\\text{D. }\\textcolor{red}{\\text{Not Possible.}}<br/>&amp;&amp;\\quad \\text{For }Ax=0\\text{ to have a unique solution, we need } \\operatorname{nullity}(A)=0, \\\\<br/>&amp;&amp;&amp;\\quad \\text{i.e. } \\operatorname{rank}(A)=5,\\text{ impossible for a }3\\times 5\\text{ matrix.}<br/>\\end{alignedat}<br/>$</p><p>Answer: <strong>A</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/524666/go-classes-dpp-gate-cs-da-linear-algebra-system-of-equations\" target=\"_blank\">GATE Overflow #524666</a></small></div>"
        },
        {
            "marks": 2,
            "neg": 0,
            "type": "MSQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider the matrix $A$ below:</p><p>$$<br/>A=\\left[\\begin{array}{llll}<br/>2 &amp; 3 &amp; 4 &amp; 5 \\\\<br/>0 &amp; 6 &amp; 7 &amp; 8 \\\\<br/>0 &amp; 0 &amp; \\alpha &amp; \\beta \\\\<br/>0 &amp; 0 &amp; 0 &amp; \\gamma<br/>\\end{array}\\right]<br/>$$</p><p><br/>For which of the following combinations of $\\alpha, \\beta, \\gamma$, is the rank of $A$ at least three?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\alpha=0$ and $\\beta=\\gamma \\neq 0$<br/></span>",
                "<span style=\"display: inline;\">$\\alpha=\\beta=\\gamma=0$<br/></span>",
                "<span style=\"display: inline;\">$\\beta=\\gamma=0$ and $\\alpha \\neq 0$<br/></span>",
                "<span style=\"display: inline;\">$\\alpha=\\beta=\\gamma \\neq 0$</span>"
            ],
            "answer": [
                "A"
            ],
            "solution": "<div class=\"solution-content\"><a name=\"524663\"></a><div itemprop=\"text\"><p>Given<br/>\\[<br/>A=\\begin{bmatrix}<br/>2&amp;3&amp;4&amp;5\\\\<br/>0&amp;6&amp;7&amp;8\\\\<br/>0&amp;0&amp;\\alpha&amp;\\beta\\\\<br/>0&amp;0&amp;0&amp;\\gamma<br/>\\end{bmatrix}.<br/>\\]</p><p>is upper triangular in blocks. The first two pivots 2 and 6 are nonzero, so $\\operatorname{rank}(A) \\geq 2$ always.</p><p>To have $\\operatorname{rank}(A) \\geq 3$, we need at least one more nonzero pivot coming from the last two rows:</p><ul><li>If $\\alpha \\neq 0$, then row $3$ gives a pivot in column $3$, so rank is at least $3$ (actually at least $3$ regardless of $\\beta, \\gamma$ ).<br/> </li><li>If $\\alpha=0$, then we need $\\beta \\neq 0$ or $\\gamma \\neq 0$ to get a pivot in column $4$. If both $\\beta=\\gamma=0$, rank stays $2$.</li></ul><div> </div><div>Now check options:<br/> </div><ol start=\"1\" style=\"list-style-type: upper-alpha;\"><li><strong>Valid. </strong>$\\alpha=0, \\beta=\\gamma \\neq 0$ gives a pivot in column 4, so rank $=3$.<br/> </li><li><strong>Invalid. </strong>$\\alpha=\\beta=\\gamma=0$ gives rank $=2$.<br/> </li><li><strong>Valid. </strong>$\\alpha \\neq 0, \\beta=\\gamma=0$ gives a pivot in column 3, so rank $=3$.<br/> </li><li><strong>Valid. </strong>$\\alpha=\\beta=\\gamma \\neq 0$ gives pivots in columns 3 and 4, so rank $\\geq 3$.<br/> </li></ol><div>Correct options:<strong> A, C, D</strong></div></div><br><br><small>Source: <a href=\"https://gateoverflow.in/524661/go-classes-dpp-gate-cs-da-linear-algebra-rank\" target=\"_blank\">GATE Overflow #524661</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\">Consider the homogeneous system of linear equations<br/> \\[<br/> x+2y=0,\\qquad ax+8y+3z=0,\\qquad 3y+5z=0.<br/> \\]<br/> For what value of \\(a\\) is it necessary during Gaussian elimination to interchange rows in the coefficient matrix?</div></span>",
            "image": "",
            "options": [],
            "answer": "4",
            "solution": "<div class=\"solution-content\"><a name=\"524551\"></a><div itemprop=\"text\">The homogeneous system is<br/> <br/> $x+2y+0z=0$<br/> <br/> $ax+8y+3z=0$<br/> <br/> $0x+3y+5z=0$<br/> <br/> <br/> So the coefficient matrix is<br/> <br/> $A=\\begin{bmatrix}<br/> 1 &amp; 2 &amp; 0\\\\<br/> a &amp; 8 &amp; 3\\\\<br/> 0 &amp; 3 &amp; 5<br/> \\end{bmatrix}$<br/> <br/> <br/> Start elimination with pivot in $\\text{row 1}$, $\\text{column 1}$ $($which is $(1))$.<br/> <br/> To eliminate the entry $(a)$ below it, do:<br/> <br/> $\\begin{bmatrix}<br/> 1 &amp; 2 &amp; 0\\\\<br/> a &amp; 8 &amp; 3\\\\<br/> 0 &amp; 3 &amp; 5<br/> \\end{bmatrix}<br/> \\xrightarrow{R_2 \\to R_2-aR_1}<br/> \\begin{bmatrix}<br/> 1 &amp; 2 &amp; 0\\\\<br/> 0 &amp; 8-2a &amp; 3\\\\<br/> 0 &amp; 3 &amp; 5<br/> \\end{bmatrix}$<br/> <br/> <br/> Now the next pivot is supposed to be the entry in $\\text{row 2}$, $\\text{column 2}$, which is $(8-2a)$.<br/> <br/> If $(8-2a=0)$, then the pivot position becomes zero and we must swap $\\text{row 2}$ and $\\text{row 3}$ to continue Gaussian elimination $($because $\\text{row 3}$ has a nonzero entry $(3)$ in $\\text{column 2)}$.<br/> <br/> <br/> Condition:<br/> <br/> $8-2a=0 \\Rightarrow a=4$<br/> <br/> So row interchange is necessary when $\\boxed{a=4}$</div><br><br><small>Source: <a href=\"https://gateoverflow.in/524550/go-classes-dpp-gate-cs-da-linear-algebra-gaussian-elimination\" target=\"_blank\">GATE Overflow #524550</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider the system of equations</p><p>$$<br/>\\left\\{\\begin{array}{l}<br/>x+k y=1 \\\\<br/>k x+y=1<br/>\\end{array}\\right.<br/>$$</p><p>For what value(s) of $k$ does this system become inconsistent, i.e., the two equations represent lines that do not intersect, so the system has no solution?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$k \\neq-1$<br/></span>",
                "<span style=\"display: inline;\">$k=-1$<br/></span>",
                "<span style=\"display: inline;\">$k=1$<br/></span>",
                "<span style=\"display: inline;\">$k \\neq 1$</span>"
            ],
            "answer": "B",
            "solution": "<div class=\"solution-content\"><a name=\"524508\"></a><div itemprop=\"text\"><p><strong>Given system:</strong></p><p>\\[ x + ky = 1 \\]</p><p>\\[ kx + y = 1 \\]</p><p>Write as augmented matrix and apply \\( R_2 \\leftarrow R_2 - k \\cdot R_1 \\):</p><p>\\[ \\begin{bmatrix}1 &amp; k &amp; 1 \\\\ k &amp; 1 &amp; 1\\end{bmatrix} \\xrightarrow{R_2 \\leftarrow R_2 - k R_1} \\begin{bmatrix}1 &amp; k &amp; 1 \\\\ 0 &amp; 1-k^2 &amp; 1-k\\end{bmatrix} \\]</p><p>For the system to be <strong>inconsistent</strong>, we need: coefficient = 0 but RHS ≠ 0.</p><p><strong>Step 1:</strong> Set coefficient to zero:</p><p>\\[ 1 - k^2 = 0 \\implies k = \\pm 1 \\]</p><p><strong>Step 2:</strong> Check RHS \\( = 1 - k \\neq 0 \\):</p><ul><li>\\( k = 1 \\): RHS \\( = 1 - 1 = 0 \\) → row becomes \\([0,\\ 0\\ |\\ 0]\\) → <strong>consistent</strong> (infinite solutions), not inconsistent</li><li>\\( k = -1 \\): RHS \\( = 1 - (-1) = 2 \\neq 0 \\) → row becomes \\([0,\\ 0\\ |\\ 2]\\) → <strong>inconsistent</strong> ✓</li></ul><p>\\[ \\therefore k = -1 \\]</p><p><strong>Answer: Option B</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/524476/go-classes-dpp-gate-cs-da-linear-algebra-system-of-equations\" target=\"_blank\">GATE Overflow #524476</a></small></div>"
        },
        {
            "marks": 2,
            "neg": 0,
            "type": "MSQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Let \\(A\\) be an \\(m\\times n\\) matrix with \\(\\operatorname{rank}(A)=r\\).</p><p>Which of the following matrices also have rank \\(r\\)?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">\\(\\begin{bmatrix} A\\\\ A \\end{bmatrix}_{2m\\times n}\\)<br/><br/></span>",
                "<span style=\"display: inline;\">\\(\\begin{bmatrix} A & A \\end{bmatrix}_{m\\times 2n}\\)<br/><br/></span>",
                "<span style=\"display: inline;\">\\(\\begin{bmatrix} A & A\\\\ A & 0 \\end{bmatrix}_{2m\\times 2n}\\)<br/><br/></span>",
                "<span style=\"display: inline;\">None</span>"
            ],
            "answer": [
                "A",
                "B"
            ],
            "solution": "<div class=\"solution-content\"><a name=\"525391\"></a><div itemprop=\"text\"><p><img alt=\"\" height=\"1185\" src=\"https://gateoverflow.in/?qa=blob&amp;qa_blobid=15945549399321448050\" width=\"777\"/><br/>Note:<br/>- We used block row / column operations rather than normal row / column operations.<br/>- We used elementary (block) row / column operations. These preserve rank.</p><p>Answer: A, B</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/524333/go-classes-dpp-gate-cs-da-linear-algebra-rank-of-matrix\" target=\"_blank\">GATE Overflow #524333</a></small></div>"
        },
        {
            "marks": 2,
            "neg": 0,
            "type": "MSQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider the following system of linear equations:<br/><br/>$x_1+2x_2-3x_3+4x_4=b_1,$<br/><br/>$2x_1+5x_2-2x_3+x_4=b_2,$<br/><br/>$5x_1+12x_2-7x_3+6x_4=b_3,$<br/><br/>where \\(b=\\begin{bmatrix}b_1 &amp; b_2 &amp; b_3\\end{bmatrix}^T\\).<br/> </p><p>Which of the following statements is/are TRUE?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">For \\(b=\\begin{bmatrix}2&1&3\\end{bmatrix}^T\\), the system has no solution.<br/></span>",
                "<span style=\"display: inline;\">If \\(b_3=b_1+2b_2\\), the system has a unique solution.<br/></span>",
                "<span style=\"display: inline;\">If \\(b_3=b_1+2b_2\\), the system has infinitely many solutions.<br/></span>",
                "<span style=\"display: inline;\">There exists a unique solution for \\(b_1=b_2=b_3=0\\).</span>"
            ],
            "answer": [
                "A"
            ],
            "solution": "<div class=\"solution-content\"><a name=\"524332\"></a><div itemprop=\"text\"><p>Given system:</p><p>$x_1+2x_2-3x_3+4x_4=b_1$<br/><br/>$2x_1+5x_2-2x_3+x_4=b_2$<br/><br/>$5x_1+12x_2-7x_3+6x_4=b_3$<br/><br/>Notice the third left side is exactly:</p><p>$(x_1+2x_2-3x_3+4x_4) + 2(2x_1+5x_2-2x_3+x_4)$</p><p>Because:</p><p>$[1,2,-3,4] + 2[2,5,-2,1] = [5,12,-7,6]$<br/><br/>So the third equation is not new. It is “equation $1 + 2$ times equation $2$”.</p><p>For the system to be consistent, the right side must follow the same relation:</p><p>$b_3 = b_1 + 2b_2$</p><p><strong>Now check options : </strong></p><ol start=\"1\" style=\"list-style-type: upper-alpha;\"><li><p>For $b=\\begin{bmatrix}2 &amp; 1 &amp; 3\\end{bmatrix}^T$, no solution<br/>Here $b_1+2b_2 = 2+2(1)=4$, but $b_3=3$.<br/>Since $b_3 \\ne b_1+2b_2$, system is inconsistent.<br/>So this is <strong>true</strong>.</p></li><li><p>If $b_3=b_1+2b_2$, unique solution<br/>Even when consistent, we have $3$ equations and $4$ unknowns, and one equation is dependent. So there are free variables, hence not unique.<br/>So this is <strong>false</strong>.</p></li><li><p>If $b_3=b_1+2b_2$, infinite solutions<br/>Yes, then the system is consistent, and with free variables it has infinitely many solutions.<br/>So this is <strong>true</strong>.</p></li><li><p>Unique solution for $b_1=b_2=b_3=0$<br/>Homogeneous case still has free variables here, so infinitely many solutions, not unique.<br/>So this is <strong>false</strong>.</p></li></ol></div><br><br><small>Source: <a href=\"https://gateoverflow.in/524330/go-classes-dpp-gate-cs-da-linear-algebra-system-of-linear-equations\" target=\"_blank\">GATE Overflow #524330</a></small></div>"
        }
    ]
});

registerTest({
    "name": "DPP 35 - Engineering Mathematics (Rank & Systems of Linear Equations - Part 4)",
    "testLabel": "DPP 35",
    "testType": "DPP",
    "bracket": "Rank & Systems of Linear Equations - Part 4",
    "subject": "em",
    "series": "cse-dpp-2027",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 12,
    "topicsCovered": "Rank & Systems of Linear Equations (Practice Set 4)",
    "questions": [
        {
            "marks": 2,
            "neg": 0,
            "type": "MSQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>You are told that the system of linear equations \\(Ax=b\\) has no free variables.</p><p>Which of the following statements is/are <strong>NOT a valid conclusion</strong> about the matrix \\(A\\)?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">\\(A\\) is a full rank matrix<br/></span>",
                "<span style=\"display: inline;\">\\(Ax=0\\) has only the trivial solution<br/></span>",
                "<span style=\"display: inline;\">\\(A\\) is invertible<br/></span>",
                "<span style=\"display: inline;\">Every column in the RREF of \\(A\\) has a pivot variable</span>"
            ],
            "answer": "C",
            "solution": "<div class=\"solution-content\"><a name=\"524226\"></a><div itemprop=\"text\"><p>The system $Ax=b$ has <strong>no free variables</strong>. <br/>That means, in the RREF of $A$, <strong>every column is a pivot column</strong>. <br/>So the number of pivots $=$ the number of variables $n$.<br/> </p><p>Now checking each statement.</p><ol start=\"1\" style=\"list-style-type: upper-alpha;\"><li>$A$ is a full rank matrix.<br/>Since every column is a pivot column, $\\text{rank}(A)=n$ (full column rank). <br/>So <strong>A is a valid conclusion.</strong><br/> </li><li>$Ax=0$ has only the trivial solution.<br/>No free variables means there is no nonzero solution to $Ax=0$. Hence the null space is trivial, so only $x=0$ works. <br/>So <strong>B is a valid conclusion.</strong><br/> </li><li>$A$ is invertible.<br/>To be <strong>invertible</strong>, $A$ must be <strong>square</strong> ($n \\times n$) and full rank. <br/>Here we are not told $A$ is square. $A$ could be $m \\times n$ with $m&gt;n$ and still have no free variables, but it would <strong>not</strong> be invertible.<br/> </li><li>Every column in the RREF of $A$ has a pivot variable.<br/>This is exactly the meaning of “no free variables.” <br/>So <strong>D is a valid conclusion.</strong><br/> </li></ol><p>Therefore, the statement that is <strong>not</strong> a valid conclusion is $\\boxed{C}$</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/524225/go-classes-dpp-gate-cs-da-linear-algebra-rank-of-a-matrix\" target=\"_blank\">GATE Overflow #524225</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>With respect to the following reduced row echelon form of a matrix \\(A\\),<br/>\\[<br/>\\operatorname{RREF}(A)=<br/>\\begin{bmatrix}<br/>1 &amp; 0 &amp; 0 &amp; 0\\\\<br/>0 &amp; 1 &amp; 0 &amp; 0\\\\<br/>0 &amp; 0 &amp; 1 &amp; 0\\\\<br/>0 &amp; 0 &amp; 0 &amp; 0<br/>\\end{bmatrix},<br/>\\]<br/>which one of the following conclusions is valid?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">The homogeneous system \\(Ax=0\\) has a unique solution.<br/></span>",
                "<span style=\"display: inline;\">Matrix \\(A\\) is invertible.<br/></span>",
                "<span style=\"display: inline;\">Rank of \\(A\\) is $3$.<br/></span>",
                "<span style=\"display: inline;\">\\(Ax=b\\) has a unique solution for every \\(b\\).</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"524224\"></a><div itemprop=\"text\"><p>In \\(\\operatorname{RREF}(A)\\), the number of leading \\(1\\)'s (pivot positions) equals the rank of \\(A\\).<br/>Here there are \\(3\\) pivot rows (and one zero row), hence<br/>\\[<br/>\\operatorname{rank}(A)=3.<br/>\\]</p><p><strong>(A)</strong> is <strong>false</strong> because \\(A\\) has \\(4\\) columns and rank \\(3\\), so the nullity is \\(4-3=1\\), giving infinitely many solutions to \\(Ax=0\\). <br/><br/><strong>(B)</strong> is <strong>false</strong> since \\(A\\) is not full rank (also not square in general from the RREF shown).<br/><br/><strong>(D)</strong> is <strong>false</strong> because with rank \\(3&lt;4\\), solutions (if they exist) cannot be unique for every \\(b\\).</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/524223/go-classes-dpp-gate-cs-da-linear-algebra-gaussian-elimination\" target=\"_blank\">GATE Overflow #524223</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider the system of linear equations</p><p>$$<br/>\\begin{gathered}<br/>x+y+z=6 \\\\<br/>2 x+3 y+ z=11 \\\\<br/>x+2y+ 3z=11<br/>\\end{gathered}<br/>$$</p><p>The values of ( $x, y, z$ ) are</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$(1,2,3)$<br/></span>",
                "<span style=\"display: inline;\">$(2,1,3)$<br/></span>",
                "<span style=\"display: inline;\">$(3,1,2)$<br/></span>",
                "<span style=\"display: inline;\">$(2,2,2)$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"524105\"></a><div itemprop=\"text\">We need to solve<br/> <br/> $x+y+z=6$<br/> <br/> $2x+3y+z=11$<br/> <br/> $x+2y+3z=11$<br/> <br/> Using Gaussian elimination, write the augmented matrix:<br/> <br/> $\\left[\\begin{array}{ccc|c}<br/> 1 &amp; 1 &amp; 1 &amp; 6 \\\\<br/> 2 &amp; 3 &amp; 1 &amp; 11 \\\\<br/> 1 &amp; 2 &amp; 3 &amp; 11<br/> \\end{array}\\right]$<br/> <br/> Now perform row operations.<br/> <br/> <br/> First,<br/> <br/> $R_2 \\to R_2-2R_1, \\quad R_3 \\to R_3-R_1$<br/> <br/> So we get<br/> <br/> $\\left[\\begin{array}{ccc|c}<br/> 1 &amp; 1 &amp; 1 &amp; 6 \\\\<br/> 0 &amp; 1 &amp; -1 &amp; -1 \\\\<br/> 0 &amp; 1 &amp; 2 &amp; 5<br/> \\end{array}\\right]$<br/> <br/> Next,<br/> <br/> $R_3 \\to R_3-R_2$<br/> <br/> Then<br/> <br/> $\\left[\\begin{array}{ccc|c}<br/> 1 &amp; 1 &amp; 1 &amp; 6 \\\\<br/> 0 &amp; 1 &amp; -1 &amp; -1 \\\\<br/> 0 &amp; 0 &amp; 3 &amp; 6<br/> \\end{array}\\right]$<br/> <br/> From the third row,<br/> <br/> $3z=6 \\Rightarrow z=2$<br/> <br/> From the second row,<br/> <br/> $y-z=-1$<br/> <br/> $y-2=-1 \\Rightarrow y=1$<br/> <br/> From the first row,<br/> <br/> $x+y+z=6$<br/> <br/> $x+1+2=6 \\Rightarrow x=3$<br/> <br/> So,<br/> <br/> $(x,y,z)=(3,1,2)$</div><br><br><small>Source: <a href=\"https://gateoverflow.in/524101/go-classes-dpp-gate-cs-da-linear-algebra-system-of-linear-equations\" target=\"_blank\">GATE Overflow #524101</a></small></div>"
        },
        {
            "marks": 2,
            "neg": 0,
            "type": "MSQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Let $A$ be an $m \\times n$ matrix and $x$ and $b$ are column vectors.<br/><br/>Which of the following is/are <strong>TRUE</strong>?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">If $A x=0$ has only the trivial solution $x=0$, then $A x=b$ always has a unique solution.<br/></span>",
                "<span style=\"display: inline;\">There are vectors ${b}_{1}, {b}_{2}, {b}_{3} \\in \\mathbb{R}^{m}$ such that $A {x}={b}_{1}$ has no solutions, $A {x}={b}_{2}$ has one solution, and $A {x}={b}_{3}$ has infinitely many solutions.<br/></span>",
                "<span style=\"display: inline;\">If the columns of $A$ are linearly independent, then the equation $A x=b$ has exactly one solution for every $b$.<br/></span>",
                "<span style=\"display: inline;\">If a system $A x=b$ has more than one solution, then so does the system $A x=0$.</span>"
            ],
            "answer": [
                "A"
            ],
            "solution": "<div class=\"solution-content\"><a name=\"524109\"></a><div itemprop=\"text\"><p>Let $A$ be an $m \\times n$ matrix. Now, Checking each statement.</p><ol start=\"1\" style=\"list-style-type: upper-alpha;\"><li>If $Ax=0$ has only the trivial solution $x=0$, then $Ax=b$ always has a unique solution.<br/><br/>If $Ax=0$ has only $x=0$, then any solution of $Ax=b$ (if it exists) is unique. But $Ax=b$ may have $\\textit{no solution}$ for some $b$ (when $b$ is not in the column space of $A$). <br/>So, A is <strong>false</strong><br/><br/> </li><li>There are vectors $b_1,b_2,b_3 \\in \\mathbb{R}^m$ such that $Ax=b_1$ has no solutions, $Ax=b_2$ has one solution, and $Ax=b_3$ has infinitely many solutions.<br/><br/>If $Ax=b$ is consistent and $Ax=0$ has a nontrivial solution, then $Ax=b$ has infinitely many solutions. <br/>If $Ax=0$ has only the trivial solution, then any consistent $Ax=b$ has exactly one solution. <br/>So, with the same matrix $A$, you cannot have \"one solution'' for one $b$ and \"infinitely many'' for another $b$. <br/>So, B is <strong>false</strong><br/><br/> </li><li>If the columns of $A$ are linearly independent, then $Ax=b$ has exactly one solution for every $b$.<br/><br/>Linear independence of columns gives uniqueness $\\textit{when a solution exists}$. It does not guarantee existence for every $b$. <br/>Existence for every $b$ would require the columns of $A$ to span $\\mathbb{R}^m$, which need not be true. <br/>So, C is <strong>false</strong>.<br/><br/> </li><li>If a system $Ax=b$ has more than one solution, then so does the system $Ax=0$.<br/><br/>If $x_1$ and $x_2$ are two different solutions of $Ax=b$, then<br/>$Ax_1=b \\quad \\text{and} \\quad Ax_2=b$<br/>Subtracting,<br/>$A(x_1-x_2)=Ax_1-Ax_2=b-b=0$<br/>and $x_1-x_2 \\neq 0$. So $Ax=0$ has a nontrivial solution, hence more than one solution.<br/>So, D is <strong>true</strong>.</li></ol></div><br><br><small>Source: <a href=\"https://gateoverflow.in/524099/go-classes-dpp-gate-cs-da-linear-algebra-system-of-linear-equations\" target=\"_blank\">GATE Overflow #524099</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider a system of linear equations in $n$ unknowns. If the coefficient matrix of the system has rank $r$, then the number of pivot variables in the system is</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$n-r$<br/></span>",
                "<span style=\"display: inline;\">$r$<br/></span>",
                "<span style=\"display: inline;\">$n+r$<br/></span>",
                "<span style=\"display: inline;\">$n$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"523952\"></a><div itemprop=\"text\">The rank of a matrix is the number of pivot columns (equivalently, the number of leading $1$'s in its row echelon form).<br/> <br/> Each pivot column corresponds to one pivot variable.<br/> <br/> So, if the coefficient matrix has rank $r$, then the number of pivot variables is exactly $\\boxed{r}$</div><br><br><small>Source: <a href=\"https://gateoverflow.in/523951/go-classes-dpp-gate-cs-da-linear-algebra-system-of-linear-equations\" target=\"_blank\">GATE Overflow #523951</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\">The rank of the matrix $\\left[\\[\\begin{array}{ccccc}1 &amp; -1 &amp; 0 &amp; 0 &amp; 0 \\\\ 0 &amp; 0 &amp; 1 &amp; -1 &amp; 0 \\\\ 0 &amp; 1 &amp; -1 &amp; 0 &amp; 0 \\\\ -1 &amp; 0 &amp; 0 &amp; 0 &amp; 1 \\\\ 0 &amp; 0 &amp; 0 &amp; 1 &amp; -1\\end{array}\\]\\right]$ $\\qquad$<br/> <br/> </div></span>",
            "image": "",
            "options": [],
            "answer": "475229",
            "solution": "<div class=\"solution-content\"><a name=\"475246\"></a><div itemprop=\"text\">The rank of the matrix is 4.</div><br><br><small>Source: <a href=\"https://gateoverflow.in/475229/go-classes-dpp-linear-algebra-rank-gate-ec\" target=\"_blank\">GATE Overflow #475229</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider the matrix $A$ below:</p><p>$$<br/>A=\\left[\\begin{array}{llll}<br/>2 &amp; 3 &amp; 4 &amp; 5 \\\\<br/>0 &amp; 6 &amp; 7 &amp; 8 \\\\<br/>0 &amp; 0 &amp; \\alpha &amp; \\beta \\\\<br/>0 &amp; 0 &amp; 0 &amp; \\gamma<br/>\\end{array}\\right]<br/>$$</p><p><br/>For which of the following combinations of $\\alpha, \\beta, \\gamma$, is the rank of $A$ at least three?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\alpha=0$ and $\\beta=\\gamma \\neq 0$<br/></span>",
                "<span style=\"display: inline;\">$\\alpha=\\beta=\\gamma=0$<br/></span>",
                "<span style=\"display: inline;\">$\\beta=\\gamma=0$ and $\\alpha \\neq 0$<br/></span>",
                "<span style=\"display: inline;\">$\\alpha=\\beta=\\gamma \\neq 0$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"475228\"></a><div itemprop=\"text\">The rank of a matrix is the number of non-zero rows in its row echelon form. For an upper triangular matrix, each non-zero pivot (i.e., leading diagonal entry) contributes to the rank.<br/> <br/> Let's analyze each case:<br/> (i) $\\alpha=0, \\beta=\\gamma \\neq 0$<br/> <br/> Row 3 becomes $[000 \\beta]$ and row 4 is $[000 \\gamma]$.<br/> Since $\\beta=\\gamma \\neq 0$, row 3 still has a non-zero entry (in column 4), and so does row 4.<br/> Hence, we still have all 4 non-zero rows. Rank $=4 \\geq 3 \\rightarrow$ Valid<br/> (ii) $\\alpha=\\beta=\\gamma=0$<br/> <br/> Then rows 3 and 4 become all zero. Only rows 1 and 2 remain non-zero.<br/> Rank $=2&lt;3 \\rightarrow$ Not valid<br/> (iii) $\\beta=\\gamma=0, \\alpha \\neq 0$<br/> <br/> Row 3 is $[00 \\alpha 0]$, which is non-zero, and row 4 is zero.<br/> We have 3 non-zero rows. Rank $=3 \\geq 3 \\rightarrow$ Valid<br/> (iv) $\\alpha=\\beta=\\gamma \\neq 0$<br/> <br/> Then all diagonal entries are non-zero, so all rows are non-zero.<br/> Rank $=4 \\geq 3 \\rightarrow$ Valid</div><br><br><small>Source: <a href=\"https://gateoverflow.in/475227/go-classes-dpp-linear-algebra-matrices-gate-ec\" target=\"_blank\">GATE Overflow #475227</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>What is the maximum possible rank of an $\\mathrm{m} \\times \\mathrm{n}$ matrix A that is not square?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\operatorname{rank}(A) \\geq \\min (m, n)$</span>",
                "<span style=\"display: inline;\">$\\operatorname{rank}(A) \\leq \\min (m, n)$</span>",
                "<span style=\"display: inline;\">$\\operatorname{rank}(A)=\\min (m, n)$</span>",
                "<span style=\"display: inline;\">$\\operatorname{rank}(A)=\\max (m, n)$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"472588\"></a><div itemprop=\"text\">We know that rank = no. of linearly independent columns = no. of linear independent rows.<br/> If we have 2 columns and 10 rows, rank can't be greater than 2 , because if it is true, it violates the definition of rank because we don't even have more than 2 columns. We can see in opposite way also, where no. of columns &gt; no. of rows.<br/> Hence $\\operatorname{rank}(\\mathrm{A})&lt;=\\min (\\mathrm{m}, \\mathrm{n})$</div><br><br><small>Source: <a href=\"https://gateoverflow.in/472587/go-classes-dpp-linear-algebra-rank-binghamton\" target=\"_blank\">GATE Overflow #472587</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Find the number of parameters in the general solution of $\\mathrm{Ax}=0$ if A is a $5 \\times 7$ matrix of rank 3 .</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">10</span>",
                "<span style=\"display: inline;\">5</span>",
                "<span style=\"display: inline;\">4</span>",
                "<span style=\"display: inline;\">7</span>"
            ],
            "answer": "C",
            "solution": "<div class=\"solution-content\"><a name=\"472059\"></a><div itemprop=\"text\">#parameter $=$ no of free variables.<br/> <br/> Free variable = #columns - #pivots.<br/> <br/> =&gt; #columns - rank<br/> <br/> $\\Rightarrow 7-3=4$.<br/> <br/> Option C is the answer.</div><br><br><small>Source: <a href=\"https://gateoverflow.in/472056/go-classes-dpp-linear-algebra-rank-university-of-calicut\" target=\"_blank\">GATE Overflow #472056</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>The $6 \\times 6$ matrix with all entries 1 has rank:</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">1</span>",
                "<span style=\"display: inline;\">2</span>",
                "<span style=\"display: inline;\">4</span>",
                "<span style=\"display: inline;\">6</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"472061\"></a><div itemprop=\"text\"><p><b id=\"docs-internal-guid-c9cca682-7fff-a158-7b13-8da6680a9db8\">After converting to echelon form, we’ll have only one non-zero row. Hence rank = 1</b></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/472052/go-classes-dpp-linear-algebra-rank-university-of-calicut\" target=\"_blank\">GATE Overflow #472052</a></small></div>"
        }
    ]
});

registerTest({
    "name": "DPP 36 - Engineering Mathematics (Rank & Systems of Linear Equations - Part 5)",
    "testLabel": "DPP 36",
    "testType": "DPP",
    "bracket": "Rank & Systems of Linear Equations - Part 5",
    "subject": "em",
    "series": "cse-dpp-2027",
    "date": "Nov 03, 2026",
    "duration": "15 Min",
    "totalMarks": 1,
    "topicsCovered": "Rank & Systems of Linear Equations (Practice Set 5)",
    "questions": [
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>A homogeneous linear system in n unknowns whose corresponding augmented matrix has a reduced row echelon form with r leading 1's has</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">n free variables</span>",
                "<span style=\"display: inline;\">$\\mathrm{n}-\\mathrm{r}$ free variables</span>",
                "<span style=\"display: inline;\">$r$ free variables</span>",
                "<span style=\"display: inline;\">cannot be determined</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"471769\"></a><div itemprop=\"text\">B</div><br><br><small>Source: <a href=\"https://gateoverflow.in/471758/go-classes-dpp-linear-algebra-system-of-linear-equations-university-of-calicut\" target=\"_blank\">GATE Overflow #471758</a></small></div>"
        }
    ]
});

registerTest({
    "name": "DPP 37 - Engineering Mathematics (Eigenvalues & Eigenvectors - Part 1)",
    "testLabel": "DPP 37",
    "testType": "DPP",
    "bracket": "Eigenvalues & Eigenvectors - Part 1",
    "subject": "em",
    "series": "cse-dpp-2027",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 11,
    "topicsCovered": "Eigenvalues & Eigenvectors (Practice Set 1)",
    "questions": [
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider three non-zero matrices $A, ~B$ and $C$ such that $ABB^T = CBB^T$ where $B^T$ is the transpose of $B$. Which of the following statements is necessarily true?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\"><p>$r(A) =r(C)$</p></span>",
                "<span style=\"display: inline;\"><p>non-zero eigenvalues of $A$ and $C$ are identical.</p></span>",
                "<span style=\"display: inline;\"><p>$AB = CB$</p></span>",
                "<span style=\"display: inline;\"><p>None of the above.</p></span>"
            ],
            "answer": "C",
            "solution": "<div class=\"solution-content\"><a name=\"528996\"></a><div itemprop=\"text\"><section data-scroll-anchor=\"true\" data-testid=\"conversation-turn-6\" data-turn=\"assistant\" data-turn-id=\"request-WEB:763a9750-ca7b-45ca-8b05-fa4a0285e23e-2\" dir=\"auto\"><p data-end=\"96\" data-start=\"39\">Let $X=A-C$. Then the given condition becomes<br data-end=\"87\" data-start=\"84\"/>$XBB^T=0$.</p><p data-end=\"132\" data-start=\"98\">Now multiply on the right by $X'$:</p><p data-end=\"145\" data-start=\"134\">$XBB^TX^T=0$.</p><p data-end=\"170\" data-start=\"147\">But $XBB^TX^T=(XB)(XB)^T$.</p><p data-end=\"199\" data-start=\"172\">So we have<br data-end=\"185\" data-start=\"182\"/>$(XB)(XB)^T=0$.</p><p data-end=\"258\" data-start=\"201\">A matrix of the form $YY^T$ is zero only when $Y=0$. Hence</p><p data-end=\"267\" data-start=\"260\">$XB=0$.</p><p data-end=\"277\" data-start=\"269\">That is,</p><p data-end=\"290\" data-start=\"279\">$(A-C)B=0$,</p><p data-end=\"294\" data-start=\"292\">so</p><p data-end=\"304\" data-start=\"296\">$AB=CB$.</p><p data-end=\"351\" data-start=\"306\">Therefore <strong data-end=\"350\" data-start=\"316\">option C is necessarily true</strong>.</p></section></div><br><br><small>Source: <a href=\"https://gateoverflow.in/528995/go-classes-dpp-gate-cs-linear-algebra-matrix-algebra\" target=\"_blank\">GATE Overflow #528995</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"331\" data-start=\"121\">Consider non-zero matrices $A\\in M_{m\\times n}$, $B\\in M_{n\\times p}$, and $C\\in M_{p\\times m}$. Then $ABC$, $BCA$, and $CAB$ are all square matrices. Which of the following is necessarily true?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$r(ABC)=r(BCA)=r(CAB)$<br/></span>",
                "<span style=\"display: inline;\">The non-zero eigenvalues of $ABC$, $BCA$, and $CAB$ are identical, counting algebraic multiplicities.<br/></span>",
                "<span style=\"display: inline;\">$ABC$, $BCA$, and $CAB$ are always similar.<br/></span>",
                "<span style=\"display: inline;\">If $ABC=0$, then $BCA=0$.</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"528994\"></a><div itemprop=\"text\"><p data-end=\"748\" data-start=\"582\">A standard result says that for any compatible matrices $X$ and $Y$, the matrices $XY$ and $YX$ have the same non-zero eigenvalues, counting algebraic multiplicities.</p><p data-end=\"859\" data-start=\"750\">Now take $X=AB$ and $Y=C$. Then $XY=ABC$ and $YX=CAB$. So $ABC$ and $CAB$ have the same non-zero eigenvalues.</p><p data-end=\"972\" data-start=\"861\">Next, take $X=A$ and $Y=BC$. Then $XY=ABC$ and $YX=BCA$. So $ABC$ and $BCA$ have the same non-zero eigenvalues.</p><p data-end=\"1079\" data-start=\"974\">Hence $ABC$, $BCA$, and $CAB$ all have the same non-zero eigenvalues. Therefore, <strong>B</strong> <strong>is necessarily true.<br/><br/>A is false</strong> in general. For example, let $A=\\begin{bmatrix}1\\\\0\\end{bmatrix}$, $B=\\begin{bmatrix}1&amp;0\\end{bmatrix}$, and $C=\\begin{bmatrix}0&amp;0\\\\1&amp;0\\end{bmatrix}$. Then $ABC=0$, $BCA=0$, but $CAB=\\begin{bmatrix}0&amp;0\\\\1&amp;0\\end{bmatrix}$, so the ranks are not all equal.<br/><br/><strong>C is false</strong> in general, because these matrices may even have different sizes, so they cannot always be similar.<br/><br/><strong>D is false.</strong> For example, let $A=\\begin{bmatrix}0&amp;1\\\\0&amp;0\\end{bmatrix}$, $B=\\begin{bmatrix}1&amp;0\\\\0&amp;0\\end{bmatrix}$, and $C=\\begin{bmatrix}1&amp;0\\\\0&amp;0\\end{bmatrix}$. Then $ABC=0$, but $BCA=\\begin{bmatrix}0&amp;1\\\\0&amp;0\\end{bmatrix}\\neq0$.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/528992/go-classes-dpp-gate-cs-linear-algebra-eigenvalues-of-matrix-products\" target=\"_blank\">GATE Overflow #528992</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"144\" data-start=\"83\">Suppose that a $4 \\times 4$ matrix $A$ has eigenvalue $3$. If</p><p data-end=\"254\" data-start=\"146\">$A - 3I = \\begin{pmatrix} 1 &amp; -2 &amp; 0 &amp; 4 \\\\ 0 &amp; 0 &amp; 1 &amp; -3 \\\\ 0 &amp; 0 &amp; 0 &amp; 0 \\\\ 0 &amp; 0 &amp; 0 &amp; 0 \\end{pmatrix},$</p><p data-end=\"337\" data-start=\"256\">then the eigenvectors of $A$ corresponding to the eigenvalue $3$ are of the form:</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\begin{pmatrix} 2s - 4t \\\\ s \\\\ 3t \\\\ t \\end{pmatrix} ; s,t \\in \\mathbb{R}$<br/><br/></span>",
                "<span style=\"display: inline;\">$\\begin{pmatrix} 2s + 4t \\\\ s \\\\ 3t \\\\ t \\end{pmatrix} ; s,t \\in \\mathbb{R}$<br/><br/></span>",
                "<span style=\"display: inline;\">$\\begin{pmatrix} 2s - 4t \\\\ s \\\\ t \\\\ 3t \\end{pmatrix} ; s,t \\in \\mathbb{R}$<br/><br/></span>",
                "<span style=\"display: inline;\">$\\begin{pmatrix} 2s - 4t \\\\ 3t \\\\ s \\\\ t \\end{pmatrix} ; s,t \\in \\mathbb{R}$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"528963\"></a><div itemprop=\"text\"><p data-end=\"929\" data-start=\"854\">If $3$ is an eigenvalue of $A$, then the corresponding eigenvectors satisfy</p><p data-end=\"954\" data-start=\"931\">$(A-3I)\\mathbf{x} = 0$.<br/><br/>Let $\\mathbf{x} = \\begin{pmatrix} x_1 \\ x_2 \\ x_3 \\ x_4 \\end{pmatrix}$. Then from</p><p data-end=\"1149\" data-start=\"1042\">$A - 3I = \\begin{pmatrix} 1 &amp; -2 &amp; 0 &amp; 4 \\\\ 0 &amp; 0 &amp; 1 &amp; -3 \\\\ 0 &amp; 0 &amp; 0 &amp; 0 \\\\ 0 &amp; 0 &amp; 0 &amp; 0 \\end{pmatrix}$</p><p data-end=\"1168\" data-start=\"1151\">we get the system</p><p data-end=\"1193\" data-start=\"1170\">$x_1 - 2x_2 + 4x_4 = 0$</p><p data-end=\"1198\" data-start=\"1195\">and</p><p data-end=\"1217\" data-start=\"1200\">$x_3 - 3x_4 = 0$.</p><p data-end=\"1264\" data-start=\"1219\">Since $x_2$ and $x_4$ are free variables, let</p><p data-end=\"1290\" data-start=\"1266\">$x_2 = s$ and $x_4 = t$.</p><p data-end=\"1326\" data-start=\"1292\">Then from $x_3 - 3x_4 = 0$, we get</p><p data-end=\"1339\" data-start=\"1328\">$x_3 = 3t$.</p><p data-end=\"1377\" data-start=\"1341\">From $x_1 - 2x_2 + 4x_4 = 0$, we get</p><p data-end=\"1395\" data-start=\"1379\">$x_1 = 2s - 4t$.<br/><br/>So the eigenvectors are all vectors of the form $\\begin{pmatrix} 2s - 4t \\\\ s \\\\ 3t \\\\ t \\end{pmatrix} ; s,t \\in \\mathbb{R}$.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/528962/go-classes-dpp-gate-cs-linear-algebra-eigen-vectors\" target=\"_blank\">GATE Overflow #528962</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"176\" data-start=\"61\">The eigenvalues of a $3 \\times 3$ matrix $A$ are $-2$, $4$, and $5$. Then the trace of the matrix $A^3-2A^2+3A$ is:</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$93$<br/></span>",
                "<span style=\"display: inline;\">$99$<br/></span>",
                "<span style=\"display: inline;\">$112$<br/></span>",
                "<span style=\"display: inline;\">$117$</span>"
            ],
            "answer": "C",
            "solution": "<div class=\"solution-content\"><a name=\"528855\"></a><div itemprop=\"text\"><p data-end=\"321\" data-start=\"230\">If the eigenvalues of $A$ are $-2$, $4$, and $5$, then the eigenvalues of $A^3-2A^2+3A$ are</p><ul><li data-end=\"442\" data-start=\"409\">$(-2)^3-2(-2)^2+3(-2)=-8-8-6=-22$<br/> </li><li data-end=\"473\" data-start=\"444\">$4^3-2(4)^2+3(4)=64-32+12=44$<br/> </li><li data-end=\"505\" data-start=\"475\">$5^3-2(5)^2+3(5)=125-50+15=90$<br/> </li></ul><p data-end=\"549\" data-start=\"507\">The trace is the sum of these eigenvalues:</p><p data-end=\"597\" data-start=\"551\">$\\operatorname{tr}(A^3-2A^2+3A)=-22+44+90=112$</p><p data-end=\"629\" data-start=\"599\">So the correct value is $\\boxed{112}$.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/528853/go-classes-dpp-gate-cs-linear-algebra-trace-of-matrix\" target=\"_blank\">GATE Overflow #528853</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"147\" data-start=\"61\">Which one of the following statements is NOT always true for a real square matrix $A$?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">If $A$ is diagonalizable and all eigenvalues of $A$ are equal to $2$, then $A=2I$.<br/></span>",
                "<span style=\"display: inline;\">If $A$ is real orthogonal and upper triangular, then every diagonal entry of $A$ is either $1$ or $-1$.<br/></span>",
                "<span style=\"display: inline;\">If $A$ is real and has distinct eigenvalues, then $A$ is orthogonally diagonalizable.<br/></span>",
                "<span style=\"display: inline;\">If $A$ is similar to an upper triangular matrix, then the eigenvalues of $A$ are the diagonal entries of that upper triangular matrix, counted with multiplicity.</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"528852\"></a><div itemprop=\"text\"><ul><li data-end=\"859\" data-start=\"690\"><strong data-end=\"699\" data-start=\"694\">A</strong>: if $A$ is diagonalizable, then $A=PDP^{-1}$ for some diagonal matrix $D$. If all eigenvalues are $2$, then $D=2I$. Hence $A=P(2I)P^{-1}=2I$. So <strong data-end=\"858\" data-start=\"845\">A is true</strong>.<br/> </li><li data-end=\"1105\" data-start=\"861\"><strong data-end=\"870\" data-start=\"865\">B</strong>: if $A$ is orthogonal, then $A^TA=I$. If $A$ is also upper triangular, then $A^T$ is lower triangular, and this forces $A$ to be diagonal. Since $A^TA=I$, each diagonal entry $d$ must satisfy $d^2=1$, so $d=\\pm 1$. Thus <strong data-end=\"1104\" data-start=\"1091\">B is true</strong>.<br/> </li><li data-end=\"1485\" data-start=\"1107\"><strong data-end=\"1116\" data-start=\"1111\">C</strong>: having distinct eigenvalues implies that $A$ is diagonalizable, but not necessarily orthogonally diagonalizable. Orthogonal diagonalization over $\\mathbb{R}$ requires $A$ to be symmetric. For example, $A=\\begin{bmatrix}1&amp;1\\\\0&amp;2\\end{bmatrix}$ has distinct eigenvalues $1$ and $2$, but it is not symmetric, so it is not orthogonally diagonalizable. Thus <strong data-end=\"1484\" data-start=\"1470\">C is false</strong>.<br/> </li><li data-end=\"1835\" data-start=\"1487\"><strong data-end=\"1496\" data-start=\"1491\">D</strong>: similar matrices have the same characteristic polynomial, hence the same eigenvalues. An upper triangular matrix has its eigenvalues on the diagonal. Therefore, if $A$ is similar to an upper triangular matrix, the eigenvalues of $A$ are exactly the diagonal entries of that triangular matrix, counted with multiplicity. So <strong data-end=\"1834\" data-start=\"1821\">D is true</strong>.<br/> </li></ul><p data-end=\"1876\" data-start=\"1837\">Therefore, the correct answer is <strong data-end=\"1875\" data-start=\"1870\">C</strong>.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/528851/go-classes-dpp-gate-cs-linear-algebra-eigenvalues-%26-diagonalization\" target=\"_blank\">GATE Overflow #528851</a></small></div>"
        },
        {
            "marks": 2,
            "neg": 0,
            "type": "MSQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"131\" data-start=\"57\">Let $A$ be an $n \\times n$ real matrix. Which of the following statement(s) is(are) <strong>true</strong>?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">If $A^2=I$ and $A$ has only one eigenvalue, then $A=\\pm I$.<br/></span>",
                "<span style=\"display: inline;\">If $A^3=0$, then $A=0$.<br/></span>",
                "<span style=\"display: inline;\">If $A$ is invertible and $A^2=A$, then $A=I$.<br/></span>",
                "<span style=\"display: inline;\">If $A$ is orthogonal and upper triangular, then $A$ is diagonal and each diagonal entry is $\\pm 1$.</span>"
            ],
            "answer": [
                "A"
            ],
            "solution": "<div class=\"solution-content\"><a name=\"528729\"></a><div itemprop=\"text\"><p data-end=\"832\" data-start=\"494\">Statement A is <strong>true</strong>.<br/>Since $A^2=I$, every eigenvalue $\\lambda$ of $A$ satisfies $\\lambda^2=1$, so $\\lambda=\\pm 1$. Also, the polynomial $x^2-1=(x-1)(x+1)$ has distinct roots, so $A$ is diagonalizable. If $A$ has only one eigenvalue, then that eigenvalue must be either $1$ or $-1$, and since $A$ is diagonalizable, we get $A=I$ or $A=-I$.<br/><br/><br/>Statement B is <strong>false</strong>.<br/>A nonzero nilpotent matrix can satisfy $A^3=0$. For example, $A=\\begin{pmatrix}0&amp;1&amp;0\\\\0&amp;0&amp;1\\\\0&amp;0&amp;0\\end{pmatrix}$ satisfies $A^3=0$ but $A\\ne 0$.<br/><br/><br/>Statement C is <strong>true</strong>.<br/>From $A^2=A$, multiply both sides by $A^{-1}$ to get $A=I$.<br/><br/><br/>Statement D is <strong>true</strong>.<br/>If $A$ is upper triangular and orthogonal, then $A^{-1}=A^T$. Since the inverse of an invertible upper triangular matrix is upper triangular, and $A^T$ is lower triangular, it follows that $A^{-1}$ is both upper and lower triangular. Hence $A^{-1}$, and therefore $A$, must be diagonal. Since $A^TA=I$, each diagonal entry $d_i$ satisfies $d_i^2=1$, so $d_i=\\pm 1$.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/528728/go-classes-dpp-gate-cs-linear-algebra-matrix-theory\" target=\"_blank\">GATE Overflow #528728</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"144\" data-start=\"57\">If the eigenvalues of a $3 \\times 3$ matrix $A$ are $2$, $3$, and $5$, then $A^{-1}$ is</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\frac{1}{30}(A^2-10A+31I)$<br/></span>",
                "<span style=\"display: inline;\">$\\frac{1}{30}(A^2+10A+31I)$<br/></span>",
                "<span style=\"display: inline;\">$\\frac{1}{30}(A^2-10A-31I)$<br/></span>",
                "<span style=\"display: inline;\">$\\frac{1}{30}(A^2-8A+15I)$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"528723\"></a><div itemprop=\"text\"><p data-end=\"367\" data-start=\"283\">Since the eigenvalues of $A$ are $2$, $3$, and $5$, the characteristic polynomial is</p><p data-end=\"416\" data-start=\"369\">$p(\\lambda)=(\\lambda-2)(\\lambda-3)(\\lambda-5)$.</p><p data-end=\"428\" data-start=\"418\">Expanding,</p><p data-end=\"478\" data-start=\"430\">$p(\\lambda)=\\lambda^3-10\\lambda^2+31\\lambda-30$.</p><p data-end=\"511\" data-start=\"480\">By the Cayley-Hamilton theorem,</p><p data-end=\"535\" data-start=\"513\">$A^3-10A^2+31A-30I=0$.</p><p data-end=\"622\" data-start=\"537\">Since all eigenvalues are nonzero, $A$ is invertible. Multiplying by $A^{-1}$, we get</p><p data-end=\"649\" data-start=\"624\">$A^2-10A+31I-30A^{-1}=0$.</p><p data-end=\"654\" data-start=\"651\">So,</p><p data-end=\"679\" data-start=\"656\">$30A^{-1}=A^2-10A+31I$,<br/><br/>$\\boxed{\\therefore A^{-1}=\\frac{1}{30}(A^2-10A+31I)}$.</p><p data-end=\"762\" data-start=\"725\">Hence, the correct answer is <strong>A</strong>.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/528722/go-classes-dpp-gate-cs-linear-algebra-cayley-hamilton-theorem\" target=\"_blank\">GATE Overflow #528722</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"175\" data-start=\"69\">Consider the matrix $A=\\begin{bmatrix}4&amp;1&amp;0&amp;0&amp;1\\\\1&amp;4&amp;1&amp;0&amp;0\\\\0&amp;1&amp;4&amp;1&amp;0\\\\0&amp;0&amp;1&amp;4&amp;1\\\\1&amp;0&amp;0&amp;1&amp;4\\end{bmatrix}$.</p><p data-end=\"217\" data-start=\"177\">The largest eigenvalue of $A$ is ______.</p></div></span>",
            "image": "",
            "options": [],
            "answer": "6",
            "solution": "<div class=\"solution-content\"><a name=\"528623\"></a><div itemprop=\"text\">Row1 Sum = 4 + 1 + 0 + 0 + 1 = 6 <br/> <br/> Row2 sum = 1 + 4 + 1+ 0+ 0 = 6 <br/> <br/> Row3 sum = 0 + 1 + 4 + 1 + 0 = 6 <br/> <br/> Row4 sum = 0 + 0+ 1 + 4 + 1 = 6 <br/> <br/> Row5 sum = 1 + 0 + 0 + 1 + 4 = 6 <br/> <br/> when in matarix sum is constant then <br/> <br/> the largest eignen value = 6</div><br><br><small>Source: <a href=\"https://gateoverflow.in/528611/go-classes-dpp-gate-cs-linear-algebra-eigen-value\" target=\"_blank\">GATE Overflow #528611</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p><strong>True/False Question :</strong></p><p>If $A$ is a $2\\times2$ complex matrix that is invertible and diagonalizable, and such that $A$ and $A^{2}$ have the same characteristic polynomial, then $A$ is the $2\\times2$ identity matrix.<br/><br/><em>(Note : Mark $\\emph{0}$ for False and $\\emph{1}$ for True.)</em></p></div></span>",
            "image": "",
            "options": [],
            "answer": "0",
            "solution": "<div class=\"solution-content\"><a name=\"528412\"></a><div itemprop=\"text\">Let the eigenvalues of $A$ be $\\lambda_1,\\lambda_2 \\in \\mathbb{C}$. Since $A$ is diagonalizable and invertible, both eigenvalues are nonzero, and the eigenvalues of $A^2$ are $\\lambda_1^2,\\lambda_2^2$.<br/> <br/> Because $A$ and $A^2$ have the same characteristic polynomial, they have the same eigenvalues with the same multiplicities. Hence<br/> $\\{\\lambda_1,\\lambda_2\\}=\\{\\lambda_1^2,\\lambda_2^2\\}.$<br/> <br/> For a $2\\times 2$ matrix, equality of characteristic polynomials gives equality of trace and determinant. So<br/> $\\lambda_1+\\lambda_2=\\lambda_1^2+\\lambda_2^2$<br/> and<br/> $\\lambda_1\\lambda_2=(\\lambda_1\\lambda_2)^2.$<br/> <br/> Since $A$ is invertible, $\\lambda_1\\lambda_2\\neq 0$, so<br/> $\\lambda_1\\lambda_2=1.$<br/> <br/> Now write $\\lambda_2=\\frac{1}{\\lambda_1}$. Substituting into the trace equation gives<br/> $\\lambda_1+\\frac{1}{\\lambda_1}=\\lambda_1^2+\\frac{1}{\\lambda_1^2}.$<br/> <br/> Multiplying by $\\lambda_1^2$,<br/> $\\lambda_1^3+\\lambda_1=\\lambda_1^4+1.$<br/> <br/> So<br/> $\\lambda_1^4-\\lambda_1^3-\\lambda_1+1=0.$<br/> <br/> Factor:<br/> $\\lambda_1^4-\\lambda_1^3-\\lambda_1+1=(\\lambda_1-1)^2(\\lambda_1^2+\\lambda_1+1).$<br/> <br/> Thus either<br/> $\\lambda_1=1$ or $\\lambda_1^2+\\lambda_1+1=0.$<br/> <br/> So the possible eigenvalue pairs are:<br/> $(1,1)$ or $(\\omega,\\omega^2),$<br/> where $\\omega$ is a primitive cube root of unity.<br/> <br/> The first case gives $A=I$, but the second case gives a counterexample. For example,<br/> <br/> $A=\\begin{pmatrix}<br/> \\omega &amp; 0\\\\<br/> 0 &amp; \\omega^2<br/> \\end{pmatrix},$<br/> <br/> where $\\omega^3=1$ and $\\omega\\neq 1$.<br/> <br/> Then $A$ is invertible and diagonalizable, and<br/> <br/> $A^2=\\begin{pmatrix}<br/> \\omega^2 &amp; 0\\\\<br/> 0 &amp; \\omega<br/> \\end{pmatrix}.$<br/> <br/> Both $A$ and $A^2$ have characteristic polynomial $(x-\\omega)(x-\\omega^2)=x^2+x+1,$ but clearly $A\\neq I$.<br/> <br/> Therefore, the statement is $\\boxed{\\text{False}}$.</div><br><br><small>Source: <a href=\"https://gateoverflow.in/528411/go-classes-dpp-gate-cs-linear-algebra-diagonalization\" target=\"_blank\">GATE Overflow #528411</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Suppose $A$ is any square matrix of size $n \\times n$ with complex entries. Form the larger matrix $\\begin{bmatrix}<br/>A &amp; A \\\\<br/>0 &amp; A<br/>\\end{bmatrix}.<br/>$</p><p>For which matrices $A$ is this larger matrix diagonalizable?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$A=0$<br/></span>",
                "<span style=\"display: inline;\">$A=I$<br/></span>",
                "<span style=\"display: inline;\">$n=2$<br/></span>",
                "<span style=\"display: inline;\">None of these</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"528161\"></a><div itemprop=\"text\">Let<br/> <br/> $<br/> M=\\begin{bmatrix}<br/> A &amp; A \\\\<br/> 0 &amp; A<br/> \\end{bmatrix}.<br/> $<br/> <br/> We want to find when $M$ is diagonalizable.<br/> <br/> Since $M$ is a block upper triangular matrix, its eigenvalues are exactly the eigenvalues of $A$, each counted twice.<br/> <br/> Now let $\\lambda$ be an eigenvalue of $A$, and let $v \\ne 0$ be an eigenvector of $A$ such that<br/> <br/> $Av=\\lambda v.$<br/> <br/> Then<br/> <br/> $M\\begin{bmatrix} v \\\\ 0 \\end{bmatrix}=\\begin{bmatrix} Av \\\\ 0 \\end{bmatrix}=\\begin{bmatrix} \\lambda v \\\\ 0 \\end{bmatrix}=\\lambda \\begin{bmatrix} v \\\\ 0 \\end{bmatrix}.$<br/> <br/> <br/> So $\\begin{bmatrix} v \\\\ 0 \\end{bmatrix}$ is an eigenvector of $M$ corresponding to $\\lambda$.<br/> <br/> Now consider the vector $\\begin{bmatrix} 0 \\\\ v \\end{bmatrix}$. We have<br/> <br/> $<br/> M\\begin{bmatrix} 0 \\\\ v \\end{bmatrix}<br/> =<br/> \\begin{bmatrix} Av \\\\ Av \\end{bmatrix}<br/> =<br/> \\begin{bmatrix} \\lambda v \\\\ \\lambda v \\end{bmatrix}.<br/> $<br/> <br/> Hence<br/> <br/> $<br/> (M-\\lambda I)\\begin{bmatrix} 0 \\\\ v \\end{bmatrix}<br/> =<br/> \\begin{bmatrix} \\lambda v \\\\ 0 \\end{bmatrix}<br/> =<br/> \\lambda \\begin{bmatrix} v \\\\ 0 \\end{bmatrix}.<br/> $<br/> <br/> If $\\lambda \\ne 0$, then<br/> <br/> $<br/> (M-\\lambda I)\\begin{bmatrix} 0 \\\\ v \\end{bmatrix} \\ne 0,<br/> $<br/> <br/> but<br/> <br/> $<br/> (M-\\lambda I)^2\\begin{bmatrix} 0 \\\\ v \\end{bmatrix}=0.<br/> $<br/> <br/> So for every nonzero eigenvalue $\\lambda$ of $A$, the matrix $M$ has a nontrivial Jordan block corresponding to $\\lambda$. Therefore $M$ cannot be diagonalizable.<br/> <br/> So, if $M$ is diagonalizable, then $A$ cannot have any nonzero eigenvalue. Hence the only eigenvalue of $A$ is $0$. Therefore $A$ is nilpotent.<br/> <br/> But then $M$ is also nilpotent, because all its eigenvalues are $0$. A diagonalizable nilpotent matrix must be the zero matrix. So we must have $M=0.$<br/> <br/> From<br/> <br/> $<br/> M=\\begin{pmatrix}<br/> A &amp; A \\\\<br/> 0 &amp; A<br/> \\end{pmatrix},<br/> $<br/> <br/> $\\Rightarrow A=0.$<br/> <br/> Conversely, if $A=0$, then<br/> <br/> $<br/> M=\\begin{pmatrix}<br/> 0 &amp; 0 \\\\<br/> 0 &amp; 0<br/> \\end{pmatrix},<br/> $<br/> <br/> which is diagonalizable.<br/> <br/> Therefore,<br/> <br/> $<br/> \\begin{pmatrix}<br/> A &amp; A \\\\<br/> 0 &amp; A<br/> \\end{pmatrix}<br/> \\text{ is diagonalizable if and only if } A=0.<br/> $<br/> <br/> So the correct answer is $\\boxed{\\text{A. } A=0}.$</div><br><br><small>Source: <a href=\"https://gateoverflow.in/528160/go-classes-dpp-gate-cs-linear-algebra-diagonalization\" target=\"_blank\">GATE Overflow #528160</a></small></div>"
        }
    ]
});

registerTest({
    "name": "DPP 38 - Engineering Mathematics (Eigenvalues & Eigenvectors - Part 2)",
    "testLabel": "DPP 38",
    "testType": "DPP",
    "bracket": "Eigenvalues & Eigenvectors - Part 2",
    "subject": "em",
    "series": "cse-dpp-2027",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 10,
    "topicsCovered": "Eigenvalues & Eigenvectors (Practice Set 2)",
    "questions": [
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>The eigenvalues of the matrix $A=\\begin{pmatrix}<br/>2 &amp; 1 &amp; 0\\\\<br/>0 &amp; 2 &amp; 1\\\\<br/>0 &amp; 0 &amp; -3<br/>\\end{pmatrix}$ are</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$2,2,-3$<br/></span>",
                "<span style=\"display: inline;\">$2,-3,-3$<br/></span>",
                "<span style=\"display: inline;\">$1,2,-3$<br/></span>",
                "<span style=\"display: inline;\">$2,3,-3$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"528022\"></a><div itemprop=\"text\">Since $A$ is an upper triangular matrix, its eigenvalues are the diagonal entries.<br/> <br/> The diagonal entries of $A=\\begin{pmatrix}<br/> 2 &amp; 1 &amp; 0\\\\<br/> 0 &amp; 2 &amp; 1\\\\<br/> 0 &amp; 0 &amp; -3<br/> \\end{pmatrix}$ are $2,2,-3$.<br/> <br/> Therefore, the eigenvalues of $A$ are $2,2,-3$.</div><br><br><small>Source: <a href=\"https://gateoverflow.in/528021/go-classes-dpp-gate-cs-linear-algebra-eigen-values\" target=\"_blank\">GATE Overflow #528021</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Let $n\\geq 2$. Which of the following statements is true for every $n\\times n$ real matrix $A$ of rank one?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">There exist matrices $P,Q \\in M_{n}\\left ( \\mathbb{R} \\right )$ such that all the entries of the matrix $PAQ$ are equal to $1$<br/></span>",
                "<span style=\"display: inline;\">There exists an invertible matrix $P \\in M_{n}\\left ( \\mathbb{R} \\right )$ such that $PAP^{-1}$ is a diagonal matrix<br/></span>",
                "<span style=\"display: inline;\">$A$ has a nonzero eigenvalue<br/></span>",
                "<span style=\"display: inline;\">The vector $\\left ( 1,1,\\dots,1 \\right )\\in \\mathbb{R}^{n}$ is an eigenvector for $A$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"528018\"></a><div itemprop=\"text\"><p>Since $\\operatorname{rank}(A)=1$, we can write $A=uv^T$ for some nonzero vectors $u,v\\in\\mathbb{R}^n$.</p><p>Now let, $e=\\begin{bmatrix}1\\\\1\\\\ \\vdots \\\\1\\end{bmatrix}\\in\\mathbb{R}^n$.</p><p>Because $u\\neq 0$, there exists a row vector $r^T$ such that<br/>$r^Tu=1$.</p><p>Similarly, because $v\\neq 0$, there exists a column vector $s$ such that<br/>$v^Ts=1$.</p><p>Choose $P=er^T$ and $Q=se^T$.</p><p>Then,<br/>$PAQ=(er^T)(uv^T)(se^T)$</p><p>$=e(r^Tu)(v^Ts)e^T$</p><p>$=e\\cdot 1\\cdot 1\\cdot e^T$</p><p>$=ee^T$.</p><p>But $ee^T$ is the matrix whose every entry is $1$.</p><p>Hence, there exist matrices $P,Q\\in M_n(\\mathbb{R})$ such that all entries of $PAQ$ are equal to $1$.</p><p>So, option $\\boxed{\\text{A}}$ is<strong> true.</strong><br/> </p><p>Now we show that the other options are not true for every rank one matrix.</p><p>Take $A=\\begin{bmatrix}0&amp;1\\\\0&amp;0\\end{bmatrix}$.</p><p>Then $\\operatorname{rank}(A)=1$.</p><p>For this matrix, the characteristic polynomial is $x^2$, so the only eigenvalue is $0$.<br/>Hence, $A$ has no nonzero eigenvalue.<br/>So option $\\text{C}$ is <strong>false.</strong></p><p>Also, this matrix is not diagonalizable.<br/>So option $\\text{B}$ is<strong> false.</strong></p><p>Further,<br/>$A\\begin{bmatrix}1\\\\1\\end{bmatrix}=\\begin{bmatrix}1\\\\0\\end{bmatrix}$,<br/>which is not a scalar multiple of $\\begin{bmatrix}1\\\\1\\end{bmatrix}$.<br/>So option $\\text{D}$ is also<strong> false.</strong></p><p>Therefore, the correct answer is $\\boxed{\\text{A}}$.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/528017/go-classes-dpp-gate-cs-linear-algebra-diagonalization-%26-eigen-vectors\" target=\"_blank\">GATE Overflow #528017</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Which of the following statements is correct for every linear transformation $T:\\mathbb{R}^{3}\\rightarrow \\mathbb{R}^{3}$ such that $T^{3}-T^{2}-T+I=0$?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$T$ is invertible as well as diagonalizable.<br/></span>",
                "<span style=\"display: inline;\">$T$ is invertible, but not necessearily diagonalizable.<br/></span>",
                "<span style=\"display: inline;\">$T$ is diagonalizable, but not necessary invertible.<br/></span>",
                "<span style=\"display: inline;\">None of the other three statements.</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"528015\"></a><div itemprop=\"text\">Represent the linear transformation $T:\\mathbb{R}^3\\to\\mathbb{R}^3$ by a $3\\times 3$ matrix $A$.<br/> <br/> Then the given condition becomes<br/> <br/> $A^3-A^2-A+I=0$.<br/> <br/> Now factor the polynomial expression:<br/> <br/> $A^3-A^2-A+I=A^2(A-I)-I(A-I)$<br/> <br/> $=(A^2-I)(A-I)$<br/> <br/> $=(A-I)^2(A+I)=0$.<br/> <br/> This factorization is useful, but from<br/> $(A-I)^2(A+I)=0$ we cannot say that $A-I=0$ or $A^2-I=0$ separately.<br/> <br/> So, we check the two claims directly.<br/> <br/> First, let $Av=0$ for some vector $v$.<br/> <br/> Then from<br/> $A^3-A^2-A+I=0$,<br/> <br/> we get<br/> <br/> $(A^3-A^2-A+I)v=0$.<br/> <br/> Since $Av=0$, it follows that<br/> <br/> $0-0-0+v=0$,<br/> <br/> so $v=0$.<br/> <br/> Hence, $\\ker(A)=\\{0\\}$.<br/> <br/> Therefore, $A$ is one-one, and since $A$ is a linear map from $\\mathbb{R}^3$ to $\\mathbb{R}^3$, it must be invertible.<br/> <br/> So, $T$ is necessarily invertible.<br/> <br/> Now we check diagonalizability.<br/> <br/> Since<br/> $(A-I)^2(A+I)=0$,<br/> <br/> the minimal polynomial of $A$ divides $(x-1)^2(x+1)$.<br/> <br/> Because this polynomial has a repeated factor $(x-1)^2$, the matrix need not be diagonalizable.<br/> <br/> A counterexample is<br/> <br/> $A=\\begin{pmatrix}<br/> 1&amp;1&amp;0\\\\<br/> 0&amp;1&amp;0\\\\<br/> 0&amp;0&amp;-1<br/> \\end{pmatrix}$.<br/> <br/> This matrix is invertible, but it is not diagonalizable because the block $\\begin{pmatrix}1&amp;1\\\\0&amp;1\\end{pmatrix}$ is a Jordan block.<br/> <br/> Also, this matrix satisfies<br/> <br/> $(A-I)^2(A+I)=0$,<br/> <br/> hence<br/> <br/> $A^3-A^2-A+I=0$.<br/> <br/> Therefore, $T$ is invertible, but not necessarily diagonalizable.<br/> <br/> So, the correct option is $\\boxed{\\text{B}}$.</div><br><br><small>Source: <a href=\"https://gateoverflow.in/528014/go-classes-dpp-gate-cs-linear-algebra-diagonalization-%26-invertibility\" target=\"_blank\">GATE Overflow #528014</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\">Two eigenvalues of a $3\\times 3$ real matrix $Q$ are $(1+\\sqrt{-1})$ and $4$. The determinant of $Q$ is ?</div></span>",
            "image": "",
            "options": [],
            "answer": "8",
            "solution": "<div class=\"solution-content\"><a name=\"527941\"></a><div itemprop=\"text\">Since $Q$ is a real matrix and one eigenvalue is $(1+\\sqrt{-1})$, its conjugate $(1-\\sqrt{-1})$ must also be an eigenvalue.<br/> <br/> So the three eigenvalues are $(1+\\sqrt{-1})$, $(1-\\sqrt{-1})$, and $4$.<br/> <br/> Now, the determinant of a matrix is the product of its eigenvalues.<br/> <br/> $\\therefore \\det(Q)=(1+\\sqrt{-1})(1-\\sqrt{-1})\\cdot 4$.<br/> <br/> Using $(a+b)(a-b)=a^2-b^2$,<br/> <br/> we get, $(1+\\sqrt{-1})(1-\\sqrt{-1})=1-(-1)=2$.<br/> <br/> $\\therefore\\det(Q)=2\\cdot 4=8$.<br/> <br/> So, the correct answer is $\\boxed{8}$.</div><br><br><small>Source: <a href=\"https://gateoverflow.in/527939/go-classes-dpp-gate-cs-linear-algebra-eigen-values\" target=\"_blank\">GATE Overflow #527939</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Let $M$ be a real $n\\times n$ matrix such that for <strong><em>every</em></strong> non-zero vector $x\\in \\mathbb{R}^{n},$ we have $x^{T}M x&gt; 0.$ Then</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">Such an $M$ cannot exist<br/></span>",
                "<span style=\"display: inline;\">Such $M$s exist and their rank is always $n$<br/></span>",
                "<span style=\"display: inline;\">Such $M$s exist, but their eigenvalues are always real<br/></span>",
                "<span style=\"display: inline;\">No eigenvalue of any such $M$ can be real</span>"
            ],
            "answer": "C",
            "solution": "<div class=\"solution-content\"><a name=\"527733\"></a><div itemprop=\"text\"><p>For any real matrix $M$,</p><p>$$<br/>x^T M x=x^T\\left(\\frac{M+M^T}{2}\\right) x<br/>$$</p><p>because the skew-symmetric part does not contribute to $x^T M x$.<br/>So the condition</p><p>$$<br/>x^T M x&gt;0 \\quad \\text { for every nonzero } x \\in \\mathbb{R}^n<br/>$$</p><p>means that the symmetric part</p><p>$$<br/>\\frac{M+M^T}{2}<br/>$$</p><p>is positive definite.<br/>Such matrices definitely exist. For example, $M=I_n$ satisfies the condition. So <strong>A is false.</strong><br/><br/>Now suppose $M$ were not full rank. Then there would exist a nonzero vector $v$ such that</p><p>$$<br/>M v=0 .<br/>$$</p><p><br/>Hence</p><p>$$<br/>v^T M v=v^T 0=0,<br/>$$</p><p>which contradicts the given condition. Therefore $M$ must be invertible, so its rank is always $n$. Thus <strong>B is true</strong>.</p><p>Option <strong>C is false</strong> because eigenvalues need not all be real. Example:</p><p>$$<br/>M=\\left[\\begin{array}{cc}<br/>1 &amp; -1 \\\\<br/>1 &amp; 1<br/>\\end{array}\\right]<br/>$$Then$$<br/>x^T M x=x_1^2+x_2^2&gt;0<br/>$$</p><p>for all nonzero $x$, but the eigenvalues of $M$ are $1 \\pm i$, which are not real.<br/>So <strong>D is also false.</strong><br/><br/>Hence the correct answer is <strong>B.</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/527732/go-classes-dpp-gate-cs-da-linear-algebra-rank-%26-eigen-value\" target=\"_blank\">GATE Overflow #527732</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Let $\\lambda_1, \\lambda_2, \\lambda_3$ denote the eigenvalues of the matrix</p><p>$$A= \\begin{bmatrix} 1 &amp; 0 &amp; 0 \\\\ 0 &amp; \\cos t &amp; \\sin t \\\\ 0 &amp; – \\sin t &amp; \\cos t \\end{bmatrix}.$$ If $\\lambda_1+\\lambda_2+\\lambda_3 = \\sqrt{2}+1$, then the set of possible values of $t, \\: – \\pi \\leq t &lt; \\pi$, is</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">Empty set<br/></span>",
                "<span style=\"display: inline;\">$\\{ \\frac{\\pi}{4} \\}$<br/></span>",
                "<span style=\"display: inline;\">$\\{ – \\frac{\\pi}{4}, \\frac{\\pi}{4} \\}$<br/></span>",
                "<span style=\"display: inline;\">$\\{ – \\frac{\\pi}{3}, \\frac{\\pi}{3} \\}$</span>"
            ],
            "answer": "C",
            "solution": "<div class=\"solution-content\"><a name=\"527354\"></a><div itemprop=\"text\"><p>We know that $T_{r}\\left ( A \\right )$ $=$ $Trace\\left ( A \\right )$ $=$ sum of principle diagonal elements $=$ sum of eigen values of the matrix.<br/><br/>$\\therefore$ $2$$cost$ $+$ $1$ $=$ $\\sqrt{2}$ $+$ $1$<br/><br/>$\\Rightarrow$ $cost$ $=$ $\\frac{1}{\\sqrt{2}}$ <br/><br/>$\\Rightarrow$ $t$ $=$ $-$ $\\frac{\\pi }{4}$ or $\\frac{\\pi }{4}$ (for the interval $\\left [ -\\pi ,\\pi \\right ]$ , $cosx$ is positive between $\\left [ -\\frac{\\pi }{2},\\frac{\\pi}{2} \\right ]$).<br/><br/>$\\therefore$ Option <strong>C</strong> is the correct answer.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/527353/go-classes-dpp-gate-cs-linear-algebra-eigen-values\" target=\"_blank\">GATE Overflow #527353</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Let $A$ be a $2 \\times 2$ matrix with integer entries. Which of the following could be its eigenvalue?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\sqrt[3]{2}$<br/></span>",
                "<span style=\"display: inline;\">$\\pi$<br/></span>",
                "<span style=\"display: inline;\">$\\dfrac{1}{\\sqrt{2}}$<br/></span>",
                "<span style=\"display: inline;\">$\\sqrt{2}$</span>"
            ],
            "answer": "D",
            "solution": "<div class=\"solution-content\"><a name=\"526826\"></a><div itemprop=\"text\"><p>For a $2\\times 2$ matrix $A$ with integer entries, the characteristic polynomial is<br/>$p(x)=x^2-(\\operatorname{tr}A)x+\\det(A)$.<br/><br/>Since the entries of $A$ are integers, both $\\operatorname{tr}A$ and $\\det(A)$ are integers. Thus every eigenvalue of $A$ must be a root of a monic polynomial of degree at most $2$ with integer coefficients.<br/><br/><br/>Now check the options:<br/><br/><strong>A.</strong> $\\sqrt[3]{2}$ has minimal polynomial $x^3-2$, which has degree $3$, so it cannot be an eigenvalue of a $2\\times 2$ matrix.<br/><br/><strong>B.</strong> $\\pi$ is transcendental, so it does not satisfy any polynomial with integer coefficients. Hence it cannot be an eigenvalue.<br/><br/><strong>C.</strong> $\\dfrac{1}{\\sqrt{2}}$ satisfies $2x^2-1=0$. This polynomial has integer coefficients, but it is not monic, so $\\dfrac{1}{\\sqrt{2}}$ is not an algebraic integer. Therefore it cannot be an eigenvalue of an integer matrix.<br/><br/><strong>D.</strong> $\\sqrt{2}$ satisfies $x^2-2=0$, which is monic with integer coefficients, so it can be an eigenvalue.<br/><br/>For example, $A=\\begin{pmatrix}0&amp;2\\\\1&amp;0\\end{pmatrix}$ has characteristic polynomial $x^2-2$, so its eigenvalues are $\\pm\\sqrt{2}$.<br/><br/>Thus the correct answer is <strong>D.</strong>$\\sqrt{\\textbf{2}}$.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/526825/go-classes-dpp-gate-cs-da-linear-algebra-eigen-values\" target=\"_blank\">GATE Overflow #526825</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>The value of $p$ such that the vector $\\begin{bmatrix}1\\\\2\\\\1\\end{bmatrix}$ is an eigenvector of the matrix $\\begin{bmatrix}1&amp;1&amp;0\\\\p&amp;1&amp;0\\\\0&amp;1&amp;1\\end{bmatrix}$ is</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$2$<br/></span>",
                "<span style=\"display: inline;\">$3$<br/></span>",
                "<span style=\"display: inline;\">$4$<br/></span>",
                "<span style=\"display: inline;\">$5$</span>"
            ],
            "answer": "C",
            "solution": "<div class=\"solution-content\"><a name=\"526731\"></a><div itemprop=\"text\"><p data-path-to-node=\"0\">Let</p><p>$$A=\\begin{bmatrix}1&amp;1&amp;0\\\\p&amp;1&amp;0\\\\0&amp;1&amp;1\\end{bmatrix} \\quad \\text{and} \\quad v=\\begin{bmatrix}1\\\\2\\\\1\\end{bmatrix}.$$</p><p data-path-to-node=\"3\">Since $v$ is an eigenvector of $A$, we must have</p><p>$$Av=\\lambda v$$</p><p data-path-to-node=\"5\">for some scalar $\\lambda.$</p><p data-path-to-node=\"6\">Now,</p><p>$$Av=\\begin{bmatrix}1&amp;1&amp;0\\\\p&amp;1&amp;0\\\\0&amp;1&amp;1\\end{bmatrix}\\begin{bmatrix}1\\\\2\\\\1\\end{bmatrix}=\\begin{bmatrix}1\\cdot 1+1\\cdot 2+0\\cdot 1\\\\p\\cdot 1+1\\cdot 2+0\\cdot 1\\\\0\\cdot 1+1\\cdot 2+1\\cdot 1\\end{bmatrix}=\\begin{bmatrix}3\\\\p+2\\\\3\\end{bmatrix}.$$</p><p data-path-to-node=\"8\">So,</p><p>$$\\begin{bmatrix}3\\\\p+2\\\\3\\end{bmatrix}=\\lambda\\begin{bmatrix}1\\\\2\\\\1\\end{bmatrix}=\\begin{bmatrix}\\lambda\\\\2\\lambda\\\\\\lambda\\end{bmatrix}.$$</p><p data-path-to-node=\"10\">Comparing the first and third components, we get $\\lambda=3$.</p><p data-path-to-node=\"11\">Now compare the second components:</p><p>$$p+2=2\\lambda=2\\cdot 3=6.$$</p><p data-path-to-node=\"13\">So, $p=4$.</p><p data-path-to-node=\"14\">Hence, the required value is $\\boxed{4}$.</p><p data-path-to-node=\"15\">Therefore, the correct option is C.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/526730/go-classes-dpp-gate-cs-da-linear-algebra-eigen-vector\" target=\"_blank\">GATE Overflow #526730</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Let, </p><p>$A=\\begin{pmatrix}<br/>3&amp;1&amp;1&amp;1\\\\<br/>1&amp;3&amp;1&amp;1\\\\<br/>1&amp;1&amp;3&amp;1\\\\<br/>1&amp;1&amp;1&amp;3<br/>\\end{pmatrix}$.</p><p>Then for the above given matrix $A$, <br/><br/>$A^4-8A^3+20A^2=$<br/> </p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$64A-96I$<br/></span>",
                "<span style=\"display: inline;\">$96A-64I$<br/></span>",
                "<span style=\"display: inline;\">$32A-64I$<br/></span>",
                "<span style=\"display: inline;\">$288I$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"526798\"></a><div itemprop=\"text\"><p><img alt=\"\" height=\"445\" src=\"https://gateoverflow.in/?qa=blob&amp;qa_blobid=8031826791578137581\" width=\"400\"/></p><p>Option A</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/526723/go-classes-dpp-gate-cs-da-linear-algebra-cayley-hamilton-theorem\" target=\"_blank\">GATE Overflow #526723</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Let $A$ be an $n\\times n$ square matrix for which the entries in every row sum to $0$.<br/><br/>Consider the following statements:</p><p>Which of the above statements must be TRUE?</p><p><strong>Given Details:</strong></p><ul><li>Only II</li><li>Only I and II</li><li>Only II and III</li><li>I, II and III</li></ul></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">The column vector $[1,1,\\ldots,1]^T$ is an eigenvector of $A$.</span>",
                "<span style=\"display: inline;\">$\\det(A)=0$.</span>",
                "<span style=\"display: inline;\">$\\det(A-I)=0$.</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"526717\"></a><div itemprop=\"text\">Let<br/> $\\mathbf{X}=\\begin{pmatrix}1\\\\1\\\\ \\vdots \\\\1\\end{pmatrix}$.<br/> <br/> Since the entries in every row of $A$ sum to $0$, each entry of $A\\mathbf{X}$ is equal to the sum of the corresponding row of $A$.<br/> <br/> Therefore,<br/> <br/> $A\\mathbf{X}=\\begin{pmatrix}0\\\\0\\\\ \\vdots \\\\0\\end{pmatrix}=0\\mathbf{X}$.<br/> <br/> Hence, $\\mathbf{X}$ is an eigenvector of $A$ corresponding to the eigenvalue $0$.<br/> <br/> So statement I is true.<br/> <br/> Since $0$ is an eigenvalue of $A$, we get<br/> <br/> $\\det(A)=0$.<br/> <br/> So statement II is true.<br/> <br/> Now statement III says<br/> <br/> $\\det(A-I)=0$.<br/> <br/> This means that $1$ is an eigenvalue of $A$, which need not be true.<br/> <br/> For example, if $A=\\begin{pmatrix}0&amp;0\\\\0&amp;0\\end{pmatrix}$, then each row sum is $0$, but<br/> <br/> $\\det(A-I)=\\det\\begin{pmatrix}-1&amp;0\\\\0&amp;-1\\end{pmatrix}=1\\ne 0$.<br/> <br/> So statement III is false.<br/> <br/> Therefore, only statements I and II must be true.<br/> <br/> Hence, the correct option is $\\boxed{\\text{B}}$.</div><br><br><small>Source: <a href=\"https://gateoverflow.in/526716/go-classes-dpp-gate-cs-da-linear-algebra-matrix\" target=\"_blank\">GATE Overflow #526716</a></small></div>"
        }
    ]
});

registerTest({
    "name": "DPP 39 - Engineering Mathematics (Eigenvalues & Eigenvectors - Part 3)",
    "testLabel": "DPP 39",
    "testType": "DPP",
    "bracket": "Eigenvalues & Eigenvectors - Part 3",
    "subject": "em",
    "series": "cse-dpp-2027",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 11,
    "topicsCovered": "Eigenvalues & Eigenvectors (Practice Set 3)",
    "questions": [
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\">Consider a square matrix $A$ of order $10$ and $\\mathrm{A}=[\\mathrm{aij}]$; where $1 \\leq \\mathrm{i,j} \\leq 10$.<br/> <br/> Given that $\\mathrm{aij} =\\left\\{\\[\\begin{array}{cc}\\min (i+1,2 j-1) ; &amp; i \\leq j \\\\\\\\ 0 ; &amp; \\text { otherwise }\\end{array}\\]\\right\\}$<br/> <br/> How many linearly independent eigenvectors are there?</div></span>",
            "image": "",
            "options": [],
            "answer": "10",
            "solution": "<div class=\"solution-content\"><a name=\"526715\"></a><div itemprop=\"text\">Since $a_{ij}=0$ for $i&gt;j$, the matrix $A$ is upper triangular.<br/> <br/> Hence, the eigenvalues of $A$ are its diagonal entries.<br/> <br/> For $i=j$,<br/> <br/> $a_{ii}=\\min(i+1,\\,2i-1)$.<br/> <br/> Now compute the diagonal entries:<br/> <br/> $a_{11}=\\min(2,1)=1$<br/> <br/> $a_{22}=\\min(3,3)=3$<br/> <br/> $a_{33}=\\min(4,5)=4$<br/> <br/> $a_{44}=\\min(5,7)=5$<br/> <br/> and similarly,<br/> <br/> $a_{55}=6,\\quad a_{66}=7,\\quad a_{77}=8,\\quad a_{88}=9,\\quad a_{99}=10,\\quad a_{10,10}=11$.<br/> <br/> So the eigenvalues are<br/> <br/> $1,3,4,5,6,7,8,9,10,11$.<br/> <br/> All these eigenvalues are distinct.<br/> <br/> Therefore, $A$ has $10$ linearly independent eigenvectors.<br/> <br/> Hence, the required answer is $\\boxed{10}$.</div><br><br><small>Source: <a href=\"https://gateoverflow.in/526714/go-classes-dpp-gate-cs-da-linear-algebra-eigen-vectors\" target=\"_blank\">GATE Overflow #526714</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Let $A$ have eigenvalues $\\lambda_1,\\lambda_2,\\ldots,\\lambda_n$ and suppose $P$ diagonalises $A$. Then for any positive integer $k$, $A^k=$<br/> </p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$P\\begin{bmatrix}<br/>\\lambda_1 & 0 & \\cdots & 0\\\\<br/>0 & \\lambda_2 & \\cdots & 0\\\\<br/>\\vdots & \\vdots & \\ddots & \\vdots\\\\<br/>0 & 0 & \\cdots & \\lambda_n<br/>\\end{bmatrix}P^{-1}$<br/><br/></span>",
                "<span style=\"display: inline;\">$P\\begin{bmatrix}<br/>\\lambda_1^k & 0 & \\cdots & 0\\\\<br/>0 & \\lambda_2^k & \\cdots & 0\\\\<br/>\\vdots & \\vdots & \\ddots & \\vdots\\\\<br/>0 & 0 & \\cdots & \\lambda_n^k<br/>\\end{bmatrix}P^{-1}$<br/><br/></span>",
                "<span style=\"display: inline;\">$P^{-1}\\begin{bmatrix}<br/>\\lambda_1 & 0 & \\cdots & 0\\\\<br/>0 & \\lambda_2 & \\cdots & 0\\\\<br/>\\vdots & \\vdots & \\ddots & \\vdots\\\\<br/>0 & 0 & \\cdots & \\lambda_n<br/>\\end{bmatrix}$<br/><br/></span>",
                "<span style=\"display: inline;\">None of these.</span>"
            ],
            "answer": "B",
            "solution": "<div class=\"solution-content\"><a name=\"526539\"></a><div itemprop=\"text\"><p>If $P$ diagonalises $A$, then</p><p>$A=PDP^{-1}$,<br/><br/>where<br/><br/>$D=\\operatorname{diag}(\\lambda_1,\\lambda_2,\\dots,\\lambda_n)$.<br/><br/>Therefore,</p><p>$A^k=(PDP^{-1})^k$.<br/><br/>Using $P^{-1}P=I$, we get</p><p>$A^k=PD^kP^{-1}$.</p><p>Now, since $D$ is diagonal,<br/><br/>$D^k=\\operatorname{diag}(\\lambda_1^k,\\lambda_2^k,\\dots,\\lambda_n^k)$.</p><p><br/>Hence, $A^k=<br/>P<br/>\\begin{pmatrix}<br/>\\lambda_1^k &amp; 0 &amp; \\cdots &amp; 0\\\\<br/>0 &amp; \\lambda_2^k &amp; \\cdots &amp; 0\\\\<br/>\\vdots &amp; \\vdots &amp; \\ddots &amp; \\vdots\\\\<br/>0 &amp; 0 &amp; \\cdots &amp; \\lambda_n^k<br/>\\end{pmatrix}<br/>P^{-1}$.</p><p><br/>Therefore, the correct option is <strong>B</strong>.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/526538/go-classes-dpp-gate-cs-da-linear-algebra-diagonalization\" target=\"_blank\">GATE Overflow #526538</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>The Eigen values of a unitary matrix must satisfy the condition that</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">Always lie inside the unit circle<br/></span>",
                "<span style=\"display: inline;\">Always lie outside the unit circle<br/></span>",
                "<span style=\"display: inline;\">Always lie on the unit circle<br/></span>",
                "<span style=\"display: inline;\">None of these</span>"
            ],
            "answer": "C",
            "solution": "<div class=\"solution-content\"><a name=\"526535\"></a><div itemprop=\"text\">Let $\\lambda$ be an eigenvalue of the unitary matrix $A$.<br/> <br/> Since $A$ is unitary, we have<br/> <br/> $A^*A=I$,<br/> <br/> so<br/> <br/> $A^{-1}=A^*$.<br/> <br/> Now, if $\\lambda$ is an eigenvalue of $A$, then $\\dfrac{1}{\\lambda}$ is an eigenvalue of $A^{-1}$.<br/> <br/> Also, the eigenvalues of $A^*$ are the conjugates of the eigenvalues of $A$.<br/> <br/> But $A^{-1}=A^*$, so<br/> <br/> $\\frac{1}{\\lambda}=\\overline{\\lambda}$.<br/> <br/> Multiplying both sides by $\\lambda$, we get<br/> <br/> $\\lambda \\overline{\\lambda}=1$.<br/> <br/> Hence,<br/> <br/> $|\\lambda|^2=1$,<br/> <br/> and therefore,<br/> <br/> $|\\lambda|=1$.<br/> <br/> So every eigenvalue of a unitary matrix lies on the unit circle.<br/> <br/> Hence, the correct option is $\\boxed{\\text{C. Always lie on the unit circle}}$.</div><br><br><small>Source: <a href=\"https://gateoverflow.in/526534/go-classes-dpp-gate-cs-da-linear-algebra-unitary-matrix\" target=\"_blank\">GATE Overflow #526534</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\">The Eigen Vectors of the Matrix $A=\\begin{bmatrix} 3 &amp;4 \\\\ 4 &amp;-3 \\end{bmatrix}$ are $\\begin{bmatrix} a\\\\ 1 \\end{bmatrix},\\begin{bmatrix} 1\\\\ b \\end{bmatrix}$ the $a+b=?$</div></span>",
            "image": "",
            "options": [],
            "answer": "0",
            "solution": "<div class=\"solution-content\"><a name=\"526438\"></a><div itemprop=\"text\"><p><img alt=\"\" height=\"761\" src=\"https://gateoverflow.in/?qa=blob&amp;qa_blobid=17433880199536620214\" width=\"777\"/><br/>Answer: 0</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/526306/go-classes-dpp-gate-cs-da-linear-algebra-eigen-vectors\" target=\"_blank\">GATE Overflow #526306</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\">The number of linearly independent eigen vectors of the identity matrix $I=\\left[\\[\\begin{array}{ll}1 &amp; 0 \\\\ 0 &amp; 1\\end{array}\\]\\right]$ is $\\_\\_\\_\\_$ .</div></span>",
            "image": "",
            "options": [],
            "answer": "2",
            "solution": "<div class=\"solution-content\"><a name=\"526304\"></a><div itemprop=\"text\">For the identity matrix<br/> <br/> $I=\\begin{bmatrix}1&amp;0\\\\0&amp;1\\end{bmatrix}$,<br/> <br/> we have<br/> <br/> $Ix=x$<br/> <br/> for every nonzero vector $x\\in \\mathbb{R}^2$.<br/> <br/> So every nonzero vector is an eigenvector of $I$ corresponding to the eigenvalue $1$.<br/> <br/> Since in $\\mathbb{R}^2$ we can have at most $2$ linearly independent vectors, the number of linearly independent eigenvectors is $\\boxed{2}$.</div><br><br><small>Source: <a href=\"https://gateoverflow.in/526303/go-classes-dpp-gate-cs-da-linear-algebra-linear-independence\" target=\"_blank\">GATE Overflow #526303</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>If $A$ is $2 \\times 2$ matrix, eigen value is $1,-2$ and corresponding eigen vector $[1,2]^T$ and $[9,1]^T$. The sum of all element of the matrix $A$ is ?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\frac{4}{17}$<br/></span>",
                "<span style=\"display: inline;\">$\\frac{9}{17}$<br/></span>",
                "<span style=\"display: inline;\">$\\frac{17}{4}$<br/></span>",
                "<span style=\"display: inline;\">$\\frac{2}{17}$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"526302\"></a><div itemprop=\"text\">Since $A$ has two distinct eigenvalues $1$ and $-2$, it is diagonalizable.<br/> <br/> The corresponding eigenvectors are $\\begin{pmatrix}1\\\\2\\end{pmatrix}$ and $\\begin{pmatrix}9\\\\1\\end{pmatrix}$.<br/> <br/> So take<br/> <br/> $P=\\begin{pmatrix}1&amp;9\\\\2&amp;1\\end{pmatrix}$<br/> <br/> and<br/> <br/> $D=\\begin{pmatrix}1&amp;0\\\\0&amp;-2\\end{pmatrix}$.<br/> <br/> Then<br/> <br/> $A=PDP^{-1}$.<br/> <br/> Now,<br/> <br/> $\\det(P)=1\\cdot 1-9\\cdot 2=1-18=-17$.<br/> <br/> So,<br/> <br/> $P^{-1}<br/> =\\frac{1}{-17}\\begin{pmatrix}1&amp;-9\\\\-2&amp;1\\end{pmatrix}<br/> =\\begin{pmatrix}<br/> -\\frac{1}{17} &amp; \\frac{9}{17}\\\\[4pt]<br/> \\frac{2}{17} &amp; -\\frac{1}{17}<br/> \\end{pmatrix}$.<br/> <br/> Hence,<br/> <br/> $A<br/> =<br/> \\begin{pmatrix}1&amp;9\\\\2&amp;1\\end{pmatrix}<br/> \\begin{pmatrix}1&amp;0\\\\0&amp;-2\\end{pmatrix}<br/> \\begin{pmatrix}<br/> -\\frac{1}{17} &amp; \\frac{9}{17}\\\\[4pt]<br/> \\frac{2}{17} &amp; -\\frac{1}{17}<br/> \\end{pmatrix}$.<br/> <br/> First compute<br/> <br/> $DP^{-1}<br/> =<br/> \\begin{pmatrix}1&amp;0\\\\0&amp;-2\\end{pmatrix}<br/> \\begin{pmatrix}<br/> -\\frac{1}{17} &amp; \\frac{9}{17}\\\\[4pt]<br/> \\frac{2}{17} &amp; -\\frac{1}{17}<br/> \\end{pmatrix}<br/> =<br/> \\begin{pmatrix}<br/> -\\frac{1}{17} &amp; \\frac{9}{17}\\\\[4pt]<br/> -\\frac{4}{17} &amp; \\frac{2}{17}<br/> \\end{pmatrix}$.<br/> <br/> Now,<br/> <br/> $A<br/> =<br/> \\begin{pmatrix}1&amp;9\\\\2&amp;1\\end{pmatrix}<br/> \\begin{pmatrix}<br/> -\\frac{1}{17} &amp; \\frac{9}{17}\\\\[4pt]<br/> -\\frac{4}{17} &amp; \\frac{2}{17}<br/> \\end{pmatrix}$<br/> <br/> $=<br/> \\begin{pmatrix}<br/> \\frac{-1-36}{17} &amp; \\frac{9+18}{17}\\\\[4pt]<br/> \\frac{-2-4}{17} &amp; \\frac{18+2}{17}<br/> \\end{pmatrix}$<br/> <br/> $=<br/> \\begin{pmatrix}<br/> -\\frac{37}{17} &amp; \\frac{27}{17}\\\\[4pt]<br/> -\\frac{6}{17} &amp; \\frac{20}{17}<br/> \\end{pmatrix}$.<br/> <br/> Therefore, the sum of all elements of $A$ is<br/> <br/> $-\\frac{37}{17}+\\frac{27}{17}-\\frac{6}{17}+\\frac{20}{17}<br/> =\\frac{4}{17}$.<br/> <br/> Hence, the required answer is $\\boxed{\\frac{4}{17}}$.</div><br><br><small>Source: <a href=\"https://gateoverflow.in/526301/go-classes-dpp-gate-cs-da-linear-algebra-diagonalization\" target=\"_blank\">GATE Overflow #526301</a></small></div>"
        },
        {
            "marks": 2,
            "neg": 0,
            "type": "MSQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Let $A$ is a singular matrix of order $5$ and their two eigenvalues are $2+3 \\sqrt{-2}, ~2-3 \\sqrt{2}$, then which of the following statement(s) is/are true?</p><div> </div><p><strong>Given Details:</strong></p><ul><li>I only</li><li>I, II only</li><li>I, III only</li><li>All are true</li></ul></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">Trace of $A$ is $8$.</span>",
                "<span style=\"display: inline;\">Determinant of $A$ is $-308$.</span>",
                "<span style=\"display: inline;\">If $AX=0$ is a system of equation then it has many nontrivial solutions.</span>"
            ],
            "answer": "C",
            "solution": "<div class=\"solution-content\"><a name=\"526297\"></a><div itemprop=\"text\"><p>Let the eigenvalues of $A$ be $\\lambda_1,\\lambda_2,\\lambda_3,\\lambda_4,\\lambda_5$.</p><p>We use the following facts:</p><ol><li>Trace of a matrix $=$ sum of its eigenvalues.<br/><br/>So, $\\operatorname{tr}(A)=\\lambda_1+\\lambda_2+\\lambda_3+\\lambda_4+\\lambda_5$.<br/> </li><li>Determinant of a matrix $=$ product of its eigenvalues.<br/><br/>So, $\\det(A)=\\lambda_1\\lambda_2\\lambda_3\\lambda_4\\lambda_5$.<br/> </li><li>Since $A$ is a singular matrix of order $5$, we have $\\det(A)=0$.<br/><br/>Hence, one of its eigenvalues must be $0$.<br/> </li></ol><p>Now, <br/>The complex conjugate of $a+ib$ is $a-ib$ where $i=\\sqrt{-1}$<br/>The conjugate of $a+b\\sqrt{n}$ is $a-b\\sqrt{n}$</p><p>Given that </p><p>$\\lambda_{1}=2+3\\sqrt{-2}=2+3\\sqrt{-1}.\\sqrt{2}=2+3\\sqrt{2}i$</p><p>$\\lambda_{2}=2-3\\sqrt{2}i$</p><p>$\\lambda_{3}=2-3\\sqrt{2}$</p><p>$\\lambda_{4}=2+3\\sqrt{2}$</p><p>$\\lambda_{5}=0$</p><p>For many non trivial solutions $AX=0 (|A|=0)$</p><p>Now check statement III:</p><p>For a singular matrix, the homogeneous system<br/><br/>$AX=0 \\quad (|A|=0)$<br/><br/>has nontrivial solutions.</p><p>So statement III is true.</p><p>Therefore, the correct option is $\\boxed{\\text{C. I, III only}}$.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/526295/go-classes-dpp-gate-cs-da-linear-algebra-matrix-algebra\" target=\"_blank\">GATE Overflow #526295</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>If $A$ is a skew-symmetric matrix of order $n$, then number of linearly independent eigen vectors of $(A + A^T) = $</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$0$<br/></span>",
                "<span style=\"display: inline;\">$1$<br/></span>",
                "<span style=\"display: inline;\">$n -1$<br/></span>",
                "<span style=\"display: inline;\">$n$</span>"
            ],
            "answer": "D",
            "solution": "<div class=\"solution-content\"><a name=\"526220\"></a><div itemprop=\"text\"><p>Since $A$ is skew-symmetric, we have</p><p>$A^T=-A$.</p><p>Therefore,</p><p>$A+A^T=A+(-A)=0$.</p><p>So, $A+A^T$ is the zero matrix of order $n$.</p><p>Now for the zero matrix, every nonzero vector $x$ satisfies</p><p>$(A+A^T)x=0x=0=0\\cdot x$.</p><p>Hence every nonzero vector is an eigenvector of $A+A^T$ corresponding to the eigenvalue $0$.</p><p>Therefore, in $\\mathbb{R}^n$, we can choose $n$ linearly independent eigenvectors.</p><p>So, the number of linearly independent eigenvectors of $(A+A^T)$ is $\\boxed{n}$.</p><p>Hence, the correct option is <strong>D</strong>.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/526219/go-classes-dpp-gate-cs-da-linear-algebra-rank-nullity-theorem\" target=\"_blank\">GATE Overflow #526219</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\">Let $M = \\begin{bmatrix} a &amp; b &amp;c \\\\ b &amp;d &amp; e\\\\ c &amp; e &amp; f \\end{bmatrix}$ be a real matrix with eigenvalues $1, 0$ and $3$. If the eigenvectors corresponding to $1$ and $0$ are $\\left ( 1,1,1 \\right )^T$ and $\\left ( 1,-1, 0 \\right )^T$ respectively, then the value of $3f$ is equal to $\\_\\_\\_\\_\\_\\_\\_.$</div></span>",
            "image": "",
            "options": [],
            "answer": "7",
            "solution": "<div class=\"solution-content\"><a name=\"526215\"></a><div itemprop=\"text\">Let $M=\\begin{pmatrix}<br/> a&amp;b&amp;c\\\\<br/> b&amp;d&amp;e\\\\<br/> c&amp;e&amp;f<br/> \\end{pmatrix}$.<br/> <br/> We know that $MX=\\lambda X$, where $X$ is an eigenvector corresponding to the eigenvalue $\\lambda$.<br/> <br/> For $\\lambda=1$, the eigenvector is $\\begin{pmatrix}1\\\\1\\\\1\\end{pmatrix}$.<br/> <br/> So,<br/> <br/> $\\begin{pmatrix}<br/> a&amp;b&amp;c\\\\<br/> b&amp;d&amp;e\\\\<br/> c&amp;e&amp;f<br/> \\end{pmatrix}<br/> \\begin{pmatrix}<br/> 1\\\\1\\\\1<br/> \\end{pmatrix}<br/> =<br/> 1\\cdot<br/> \\begin{pmatrix}<br/> 1\\\\1\\\\1<br/> \\end{pmatrix}$<br/> <br/> which gives<br/> <br/> $a+b+c=1 \\qquad ...(1)$<br/> <br/> $b+d+e=1 \\qquad ...(2)$<br/> <br/> $c+e+f=1 \\qquad ...(3)$<br/> <br/> Now for $\\lambda=0$, the eigenvector is $\\begin{pmatrix}1\\\\-1\\\\0\\end{pmatrix}$.<br/> <br/> So,<br/> <br/> $\\begin{pmatrix}<br/> a&amp;b&amp;c\\\\<br/> b&amp;d&amp;e\\\\<br/> c&amp;e&amp;f<br/> \\end{pmatrix}<br/> \\begin{pmatrix}<br/> 1\\\\-1\\\\0<br/> \\end{pmatrix}<br/> =<br/> 0\\cdot<br/> \\begin{pmatrix}<br/> 1\\\\-1\\\\0<br/> \\end{pmatrix}$<br/> <br/> which gives<br/> <br/> $a-b=0 \\Rightarrow a=b$<br/> <br/> $b-d=0 \\Rightarrow b=d$<br/> <br/> $c-e=0 \\Rightarrow c=e$<br/> <br/> Hence,<br/> <br/> $a=b=d$ and $c=e$.<br/> <br/> Let<br/> $a=b=d=x$ and $c=e=y$.<br/> <br/> Then the matrix becomes<br/> <br/> $\\begin{pmatrix}<br/> x&amp;x&amp;y\\\\<br/> x&amp;x&amp;y\\\\<br/> y&amp;y&amp;f<br/> \\end{pmatrix}$.<br/> <br/> Now use the fact that<br/> <br/> trace of matrix $=$ sum of eigenvalues.<br/> <br/> So,<br/> <br/> $a+d+f=1+0+3=4$<br/> <br/> that is,<br/> <br/> $x+x+f=4$<br/> <br/> $2x+f=4 \\qquad ...(4)$<br/> <br/> From equation $(1)$,<br/> <br/> $x+x+y=1$<br/> <br/> $2x+y=1 \\qquad ...(5)$<br/> <br/> From equation $(3)$,<br/> <br/> $y+y+f=1$<br/> <br/> $2y+f=1 \\qquad ...(6)$<br/> <br/> From $(6)$,<br/> <br/> $f=1-2y \\qquad ...(7)$<br/> <br/> Substitute this in $(4)$:<br/> <br/> $2x+(1-2y)=4$<br/> <br/> $2x-2y=3 \\qquad ...(8)$<br/> <br/> Also from $(5)$,<br/> <br/> $2x+y=1 \\qquad ...(5)$<br/> <br/> Now subtract $(5)$ from $(8)$:<br/> <br/> $(2x-2y)-(2x+y)=3-1$<br/> <br/> $-3y=2$<br/> <br/> $y=-\\dfrac{2}{3}$<br/> <br/> Now from $(7)$,<br/> <br/> $f=1-2\\left(-\\dfrac{2}{3}\\right)$<br/> <br/> $=1+\\dfrac{4}{3}$<br/> <br/> $=\\dfrac{7}{3}$<br/> <br/> Therefore,<br/> <br/> $3f=3\\cdot \\dfrac{7}{3}=7$.<br/> <br/> Hence, the required value is $\\boxed{7}$.</div><br><br><small>Source: <a href=\"https://gateoverflow.in/526214/go-classes-dpp-gate-cs-da-linear-algebra-eigen-vectors\" target=\"_blank\">GATE Overflow #526214</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Let $A$ be the $2 \\times 2$ matrix with elements $a_{11} = a_{12} = a_{21} = +1$ and $a_{22} = −1$. Then the eigenvalues of the matrix $A^{19}$ are</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$1024$ and $−1024 $<br/></span>",
                "<span style=\"display: inline;\">$1024\\sqrt2$ and $−1024\\sqrt2$<br/></span>",
                "<span style=\"display: inline;\">$4\\sqrt2$ and $−4\\sqrt2 $<br/></span>",
                "<span style=\"display: inline;\">$512\\sqrt2$ and $−512\\sqrt2$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"526113\"></a><div itemprop=\"text\">Given, $A=\\begin{pmatrix}1&amp;1\\\\1&amp;-1\\end{pmatrix}$.<br/> <br/> To find the eigenvalues of $A^{19}$, first find the eigenvalues of $A$.<br/> <br/> We have<br/> $A-\\lambda I=<br/> \\begin{pmatrix}<br/> 1-\\lambda &amp; 1\\\\<br/> 1 &amp; -1-\\lambda<br/> \\end{pmatrix}$.<br/> <br/> So the characteristic equation is<br/> <br/> $\\det(A-\\lambda I)=0$<br/> <br/> that is,<br/> <br/> $\\begin{vmatrix}<br/> 1-\\lambda &amp; 1\\\\<br/> 1 &amp; -1-\\lambda<br/> \\end{vmatrix}=0$.<br/> <br/> Now,<br/> <br/> $(1-\\lambda)(-1-\\lambda)-1=0$<br/> <br/> $=-(1-\\lambda^2)-1=0$<br/> <br/> $\\lambda^2-2=0$.<br/> <br/> Hence,<br/> <br/> $\\lambda=\\pm\\sqrt{2}$.<br/> <br/> So the eigenvalues of $A$ are $\\sqrt{2}$ and $-\\sqrt{2}$.<br/> <br/> Now, if $\\lambda$ is an eigenvalue of $A$, then $\\lambda^{19}$ is an eigenvalue of $A^{19}$.<br/> <br/> Therefore, the eigenvalues of $A^{19}$ are<br/> <br/> $(\\sqrt{2})^{19}=2^9\\sqrt{2}=512\\sqrt{2}$<br/> <br/> and<br/> <br/> $(-\\sqrt{2})^{19}=-2^9\\sqrt{2}=-512\\sqrt{2}$.<br/> <br/> Hence, the eigenvalues of $A^{19}$ are $\\boxed{512\\sqrt{2}\\text{ and }-512\\sqrt{2}}$.<br/> <br/> So the correct option is $\\boxed{\\text{D}}$.</div><br><br><small>Source: <a href=\"https://gateoverflow.in/526111/go-classes-dpp-gate-cs-da-linear-algebra-eigen-values\" target=\"_blank\">GATE Overflow #526111</a></small></div>"
        }
    ]
});

registerTest({
    "name": "DPP 40 - Engineering Mathematics (Eigenvalues & Eigenvectors - Part 4)",
    "testLabel": "DPP 40",
    "testType": "DPP",
    "bracket": "Eigenvalues & Eigenvectors - Part 4",
    "subject": "em",
    "series": "cse-dpp-2027",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 11,
    "topicsCovered": "Eigenvalues & Eigenvectors (Practice Set 4)",
    "questions": [
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Let $A$ be $3 \\times 3$ matrix. Suppose $1$ and $-1$ are two of the three Eigen Values of $A$ and $18$ is one of the Eigen Values of $A^2 + 3A$. Then</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">Both $A$ and $A^2 + 3A$ are invertible.<br/></span>",
                "<span style=\"display: inline;\">$A^2 + 3A$ but $A$ is not.<br/></span>",
                "<span style=\"display: inline;\">$A$ is invertible but $A^2 + 3A$ is not invertible.<br/></span>",
                "<span style=\"display: inline;\">Both $A$ and $A^2 + 3A$ are not invertible.</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"526060\"></a><div itemprop=\"text\"><p>Let the eigenvalues of $A$ be $1$, $-1$, and $\\lambda$.</p><p>We know that if $\\mu$ is an eigenvalue of $A$, then $\\mu^2+3\\mu$ is an eigenvalue of $A^2+3A$.</p><p>So the eigenvalues of $A^2+3A$ are</p><p>$1^2+3(1)=4$,</p><p>$(-1)^2+3(-1)=1-3=-2$,</p><p>and</p><p>$\\lambda^2+3\\lambda$.</p><p>Given that $18$ is one of the eigenvalues of $A^2+3A$, we get</p><p>$\\lambda^2+3\\lambda=18$.</p><p>So,</p><p>$\\lambda^2+3\\lambda-18=0$</p><p>$(\\lambda+6)(\\lambda-3)=0$.</p><p>Hence,</p><p>$\\lambda=3 \\quad \\text{or} \\quad \\lambda=-6$.</p><p>Therefore, the eigenvalues of $A$ are either</p><p>$1,-1,3$</p><p>or</p><p>$1,-1,-6$.</p><p>In both cases, $0$ is not an eigenvalue of $A$.<br/>So $A$ is invertible.</p><p>Now the eigenvalues of $A^2+3A$ are</p><p>$4,-2,18$.</p><p>Again, none of them is zero.<br/>So $A^2+3A$ is also invertible.</p><p>Therefore, both $A$ and $A^2+3A$ are invertible.</p><p>Hence, the correct answer is <strong>A</strong>.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/526059/go-classes-dpp-gate-cs-da-linear-algebra-matrix-inversion\" target=\"_blank\">GATE Overflow #526059</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\">Consider the $5\\times 5$ matrix below :<br/> <br/> $\\begin{bmatrix} 1&amp;0 &amp;0 &amp;0 &amp;1 \\\\ 0&amp; 1 &amp; 1 &amp; 1 &amp; 0\\\\ 0&amp; 1 &amp;1 &amp;1 &amp;0 \\\\ 0&amp; 1 &amp;1 &amp;1 &amp;0 \\\\ 1 &amp; 0 &amp; 0 &amp; 0 &amp; 1 \\end{bmatrix}$<br/> <br/> The product of the non-zero eigenvalues of the matrix is $\\_\\_\\_\\_\\_.$</div></span>",
            "image": "",
            "options": [],
            "answer": "6",
            "solution": "<div class=\"solution-content\"><a name=\"525965\"></a><div itemprop=\"text\">Let $A=\\begin{pmatrix}<br/> 1&amp;0&amp;0&amp;0&amp;1\\\\<br/> 0&amp;1&amp;1&amp;1&amp;0\\\\<br/> 0&amp;1&amp;1&amp;1&amp;0\\\\<br/> 0&amp;1&amp;1&amp;1&amp;0\\\\<br/> 1&amp;0&amp;0&amp;0&amp;1<br/> \\end{pmatrix}$.<br/> <br/> <br/> We want the product of the non-zero eigenvalues of $A$.<br/> <br/> Let $X=\\begin{pmatrix}x_1\\\\x_2\\\\x_3\\\\x_4\\\\x_5\\end{pmatrix}$ be an eigenvector corresponding to eigenvalue $\\lambda$.<br/> <br/> <br/> Then, $AX=\\lambda X$.<br/> <br/> <br/> So, $\\begin{pmatrix}<br/> 1&amp;0&amp;0&amp;0&amp;1\\\\<br/> 0&amp;1&amp;1&amp;1&amp;0\\\\<br/> 0&amp;1&amp;1&amp;1&amp;0\\\\<br/> 0&amp;1&amp;1&amp;1&amp;0\\\\<br/> 1&amp;0&amp;0&amp;0&amp;1<br/> \\end{pmatrix}<br/> \\begin{pmatrix}<br/> x_1\\\\x_2\\\\x_3\\\\x_4\\\\x_5<br/> \\end{pmatrix}<br/> =<br/> \\lambda<br/> \\begin{pmatrix}<br/> x_1\\\\x_2\\\\x_3\\\\x_4\\\\x_5<br/> \\end{pmatrix}$<br/> <br/> which gives<br/> <br/> $\\begin{pmatrix}<br/> x_1+x_5\\\\<br/> x_2+x_3+x_4\\\\<br/> x_2+x_3+x_4\\\\<br/> x_2+x_3+x_4\\\\<br/> x_1+x_5<br/> \\end{pmatrix}<br/> =<br/> \\begin{pmatrix}<br/> \\lambda x_1\\\\<br/> \\lambda x_2\\\\<br/> \\lambda x_3\\\\<br/> \\lambda x_4\\\\<br/> \\lambda x_5<br/> \\end{pmatrix}$.<br/> <br/> Hence we get the system<br/> <br/> $x_1+x_5=\\lambda x_1 \\hspace{1cm} ...(1)$<br/> <br/> $x_2+x_3+x_4=\\lambda x_2 \\hspace{1cm} ...(2)$<br/> <br/> $x_2+x_3+x_4=\\lambda x_3 \\hspace{1cm} ...(3)$<br/> <br/> $x_2+x_3+x_4=\\lambda x_4 \\hspace{1cm} ...(4)$<br/> <br/> $x_1+x_5=\\lambda x_5 \\hspace{1cm} ...(5)$<br/> <br/> Now, from $(1)$ and $(5)$,<br/> <br/> $\\lambda x_1=\\lambda x_5$.<br/> <br/> So,<br/> <br/> $\\lambda(x_1-x_5)=0$.<br/> <br/> For non-zero eigenvalues, $\\lambda\\ne 0$.<br/> Therefore,<br/> <br/> $x_1=x_5$.<br/> <br/> Substituting $x_5=x_1$ in $(1)$,<br/> <br/> $x_1+x_1=\\lambda x_1$<br/> <br/> $2x_1=\\lambda x_1$<br/> <br/> $(2-\\lambda)x_1=0$.<br/> <br/> So either $x_1=0$ or $\\lambda=2$.<br/> <br/> Now from $(2)$, $(3)$ and $(4)$,<br/> <br/> $\\lambda x_2=\\lambda x_3=\\lambda x_4$.<br/> <br/> So,<br/> <br/> $\\lambda(x_2-x_3)=0$<br/> and<br/> $\\lambda(x_3-x_4)=0$.<br/> <br/> Since $\\lambda\\ne 0$, we get<br/> <br/> $x_2=x_3=x_4$.<br/> <br/> Let<br/> $x_2=x_3=x_4=t$.<br/> <br/> Substituting in $(2)$,<br/> <br/> $x_2+x_3+x_4=\\lambda x_2$<br/> <br/> $t+t+t=\\lambda t$<br/> <br/> $3t=\\lambda t$<br/> <br/> $(3-\\lambda)t=0$.<br/> <br/> So either $t=0$ or $\\lambda=3$.<br/> <br/> Now we consider the possible non-zero eigenvalues.<br/> <br/> Case 1: $x_1\\ne 0$<br/> <br/> Then from $(2-\\lambda)x_1=0$, we get<br/> <br/> $\\lambda=2$.<br/> <br/> Case 2: $t\\ne 0$<br/> <br/> Then from $(3-\\lambda)t=0$, we get<br/> <br/> $\\lambda=3$.<br/> <br/> Thus the non-zero eigenvalues are<br/> <br/> $\\lambda=2$ and $\\lambda=3$.<br/> <br/> Therefore, the product of the non-zero eigenvalues is<br/> <br/> $2\\cdot 3=6$.<br/> <br/> Hence, the required answer is $\\boxed{6}$.</div><br><br><small>Source: <a href=\"https://gateoverflow.in/525961/go-classes-dpp-gate-cs-da-linear-algebra-eigen-values\" target=\"_blank\">GATE Overflow #525961</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\">Let $A$ be a $3\\times 3$ matrix with Eigen values $-1,1,0$. Then $\\mid A^{100}+I\\mid$ is $\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_.$</div></span>",
            "image": "",
            "options": [],
            "answer": "4",
            "solution": "<div class=\"solution-content\"><a name=\"525655\"></a><div itemprop=\"text\"><p><img alt=\"\" height=\"400\" src=\"https://gateoverflow.in/?qa=blob&amp;qa_blobid=10346152564598616506\" width=\"777\"/><br/>Answer: 4</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/525640/go-classes-dpp-gate-cs-da-linear-algebra-determinant\" target=\"_blank\">GATE Overflow #525640</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider the following statements :</p><ul><li><strong>Statement I </strong>$:$ Eigenvalues of $M =$ Eigenvalues of $M'$.<br/> $(M'$ is the matrix gets after row operation$)$<br/> </li><li><strong>Statement II </strong>$:$ Eigenvalues of $(M- \\lambda I)$ = Eigenvalues of $(M- \\lambda I)'$.<br/> $((M- \\lambda I)'$ is the matrix gets after row operation$)$</li></ul><div> </div><p>Which of the statement(s) is(are) correct always?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">Only I<br/></span>",
                "<span style=\"display: inline;\">Only II<br/></span>",
                "<span style=\"display: inline;\">Both I and II<br/></span>",
                "<span style=\"display: inline;\">None</span>"
            ],
            "answer": "D",
            "solution": "<div class=\"solution-content\"><a name=\"525571\"></a><div itemprop=\"text\"><p><strong>Statement I is false</strong>, since row operations do not preserve eigenvalues in general.</p><p>For example,<br/>$M=\\begin{pmatrix}1&amp;0\\\\0&amp;1\\end{pmatrix}$<br/>has eigenvalues $1,1$.</p><p>After interchanging the two rows, we get<br/>$M'=\\begin{pmatrix}0&amp;1\\\\1&amp;0\\end{pmatrix}$,<br/>whose eigenvalues are $1,-1$.</p><p>So Statement I is false.</p><p><strong>Statement II is also false</strong>, since row operations on $(M-\\lambda I)$ do not preserve eigenvalues in general.</p><p>Take<br/>$M=\\begin{pmatrix}1&amp;0\\\\0&amp;2\\end{pmatrix}$ and $\\lambda=1$.</p><p>Then<br/>$M-\\lambda I=\\begin{pmatrix}0&amp;0\\\\0&amp;1\\end{pmatrix}$,<br/>whose eigenvalues are $0,1$.</p><p>After interchanging the two rows, we get<br/>$(M-\\lambda I)'=\\begin{pmatrix}0&amp;1\\\\0&amp;0\\end{pmatrix}$,<br/>whose eigenvalues are $0,0$.</p><p>So Statement II is false.</p><p>Hence, the correct answer is $\\boxed{\\text{D. None}}$.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/525570/go-classes-dpp-gate-cs-da-linear-algebra-matrix-operations-and-eigen-values\" target=\"_blank\">GATE Overflow #525570</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>$A$ is $5 \\times 5$ matrix, all of whose entries are $1$ , then</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$A$ is not diagonalizable <br/></span>",
                "<span style=\"display: inline;\">$A$ is idempotent <br/></span>",
                "<span style=\"display: inline;\">$A$ is nilpotent<br/></span>",
                "<span style=\"display: inline;\">$rank(A) = 1$</span>"
            ],
            "answer": "D",
            "solution": "<div class=\"solution-content\"><a name=\"525644\"></a><div itemprop=\"text\"><div style=\"text-align:center\"><figure class=\"image\" style=\"display:inline-block\"><img alt=\"\" height=\"631\" src=\"https://gateoverflow.in/?qa=blob&amp;qa_blobid=4423164706781355271\" width=\"321\"/><figcaption><strong>Option D</strong></figcaption></figure></div><p> </p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/525566/go-classes-dpp-gate-cs-da-linear-algebra-matrix\" target=\"_blank\">GATE Overflow #525566</a></small></div>"
        },
        {
            "marks": 2,
            "neg": 0,
            "type": "MSQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>If $A$ is a unitary matrix, which of the following can be the eigenvalues of $A$ ?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$1,-1$<br/></span>",
                "<span style=\"display: inline;\">$1,-i$<br/></span>",
                "<span style=\"display: inline;\">$i,-i$<br/></span>",
                "<span style=\"display: inline;\">$-1, i$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"525565\"></a><div itemprop=\"text\"><p><strong>Unitary Matrix:</strong> If matrix $A$ is called Unitary matrix then it satisfy this condition $A. A^*=A^* . A=I$<br/>where $A^*=$ Transpose Conjugate of $A=\\left(A^{\\prime}\\right)^T$ (first you Conjugate and then Transpose, you will get Unitary matrix)</p><p><br/>If $\\lambda$ is an eigenvalue of a unitary matrix $A$, then<br/>$|\\lambda|=1$.</p><p>So every eigenvalue of $A$ must lie on the unit circle in the complex plane.</p><p>Now check each option:</p><ol start=\"1\" style=\"list-style-type: upper-alpha;\"><li>$1,-1$ : $|1|=1$ and $|-1|=1$<br/> </li><li>$1,-i$ : $|1|=1$ and $|-i|=1$<br/> </li><li>$i,-i$ : $|i|=1$ and $|-i|=1$<br/> </li><li>$-1,i$ : $|-1|=1$ and $|i|=1$</li></ol><p>Hence all the given pairs can be eigenvalues of a unitary matrix.</p><p>Therefore, the correct answer is:</p><p>$\\boxed{\\text{A, B, C and D}}$</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/525563/go-classes-dpp-gate-cs-da-linear-algebra-eigen-values\" target=\"_blank\">GATE Overflow #525563</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>$A^2-A=0$, where $A$ is a $9 \\times 9$ matrix. Then which of the following is true?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$A$ must be a zero matrix. <br/></span>",
                "<span style=\"display: inline;\">$A$ is an identity matrix<br/></span>",
                "<span style=\"display: inline;\">rank of $A$ is $0$ or $1$ <br/></span>",
                "<span style=\"display: inline;\">$A$ is diagonalizable.</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"525559\"></a><div itemprop=\"text\">Given $A^2-A=0$,<br/> <br/> we get $A(A-I)=0$.<br/> <br/> So $A$ satisfies the polynomial $x(x-1)=0$.<br/> <br/> Hence the minimal polynomial of $A$ divides $x(x-1)$.<br/> <br/> Now $x(x-1)$ has two distinct roots, namely $0$ and $1$. Therefore the minimal polynomial has no repeated root, and hence $A$ is diagonalizable.<br/> <br/> So the correct answer is (D).<br/> <br/> Also, the other options are false:<br/> <br/> (A) is false, since $A=I$ also satisfies $A^2-A=0$.<br/> <br/> (B) is false, since $A=0$ also satisfies $A^2-A=0$.<br/> <br/> (C) is false, since rank$(A)$ need not be only $0$ or $1$. For example, $A=\\operatorname{diag}(1,1,0,\\dots,0)$ satisfies $A^2=A$ and has rank $2$. Another example, $A$ can be the identity, which has rank $9$ in this case.</div><br><br><small>Source: <a href=\"https://gateoverflow.in/525558/go-classes-dpp-gate-cs-da-linear-algebra-diagonalization\" target=\"_blank\">GATE Overflow #525558</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>An arbitrary vector $X$ is an eigen vector of the vector of the matrix $A = \\begin{pmatrix}<br/>1 &amp; 0 &amp; 0 \\\\<br/>0 &amp; a &amp; 0 \\\\<br/>0 &amp; 0 &amp; b<br/>\\end{pmatrix}$, if $(a, b)=$</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$(0, 0)$<br/></span>",
                "<span style=\"display: inline;\">$(1, 1)$<br/></span>",
                "<span style=\"display: inline;\">$(0, 1)$<br/></span>",
                "<span style=\"display: inline;\">$(1, 2)$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"525445\"></a><div itemprop=\"text\">Given matrix is<br/> $A=\\begin{pmatrix}<br/> 1 &amp; 0 &amp; 0\\\\<br/> 0 &amp; a &amp; 0\\\\<br/> 0 &amp; 0 &amp; b<br/> \\end{pmatrix}$<br/> <br/> Since it is a diagonal matrix, its eigenvalues are the diagonal entries, that is, $1$, $a$, $b$.<br/> <br/> Now the question says that an arbitrary vector $X$ is an eigenvector of $A$.<br/> <br/> Let<br/> $X=\\begin{pmatrix}x_1\\\\x_2\\\\x_3\\end{pmatrix}$<br/> <br/> Then for $X$ to be an eigenvector, we must have<br/> $AX=cX$<br/> for some scalar $c$.<br/> <br/> Now take $c=1$. Then<br/> $AX=X$<br/> <br/> So,<br/> $\\begin{pmatrix}<br/> 1 &amp; 0 &amp; 0\\\\<br/> 0 &amp; a &amp; 0\\\\<br/> 0 &amp; 0 &amp; b<br/> \\end{pmatrix}<br/> \\begin{pmatrix}<br/> x_1\\\\x_2\\\\x_3<br/> \\end{pmatrix}<br/> =<br/> \\begin{pmatrix}<br/> x_1\\\\x_2\\\\x_3<br/> \\end{pmatrix}$<br/> <br/> This gives<br/> $\\begin{pmatrix}<br/> x_1\\\\<br/> ax_2\\\\<br/> bx_3<br/> \\end{pmatrix}<br/> =<br/> \\begin{pmatrix}<br/> x_1\\\\<br/> x_2\\\\<br/> x_3<br/> \\end{pmatrix}$<br/> <br/> Comparing both sides, we get<br/> <br/> $x_1=x_1$<br/> <br/> $ax_2=x_2$<br/> <br/> $bx_3=x_3$<br/> <br/> Since $X$ is arbitrary, $x_2$ and $x_3$ can be any values.<br/> <br/> So we must have<br/> <br/> $a=1$<br/> <br/> and<br/> <br/> $b=1$<br/> <br/> Hence,<br/> $(a,b)=(1,1)$<br/> <br/> So the correct answer is $\\boxed{(a,b)=(1,1)}$</div><br><br><small>Source: <a href=\"https://gateoverflow.in/525444/go-classes-dpp-gate-cs-da-linear-algebra-eigen-vector\" target=\"_blank\">GATE Overflow #525444</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Let A be a $4 \\times 4$ matrix with real entries such that $-1,1,2,-2$ are its eigen values. If $B=A^4- 5 \\mathrm{~A}^2+5 I$ where $I$ denotes $4 \\times 4$ identity matrix, then which of the following is correct? $[\\operatorname{det}(\\mathrm{X})$ represents determinant of $X]$</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\operatorname{det}(A+B)=0$<br/></span>",
                "<span style=\"display: inline;\">$\\operatorname{det}(B)=1$<br/></span>",
                "<span style=\"display: inline;\">trace of $A+B$ is $4$<br/></span>",
                "<span style=\"display: inline;\">all of these</span>"
            ],
            "answer": "B",
            "solution": "<div class=\"solution-content\"><a name=\"525439\"></a><div itemprop=\"text\">Given $B = A^4 - 5A^2 + 5I$ and the eigenvalues of $A$ are $-1, 1, 2, -2$.<br/> <br/> If $\\lambda$ is an eigenvalue of $A$, then the corresponding eigenvalue of $B$ is<br/> <br/> $\\lambda^4 - 5\\lambda^2 + 5$.<br/> <br/> Now evaluate for each eigenvalue:<br/> <br/> For $\\lambda = -1$,<br/> $(-1)^4 - 5(-1)^2 + 5 = 1 - 5 + 5 = 1$<br/> <br/> For $\\lambda = 1$,<br/> $1^4 - 5(1)^2 + 5 = 1 - 5 + 5 = 1$<br/> <br/> For $\\lambda = 2$,<br/> $2^4 - 5(2)^2 + 5 = 16 - 20 + 5 = 1$<br/> <br/> For $\\lambda = -2$,<br/> $(-2)^4 - 5(-2)^2 + 5 = 16 - 20 + 5 = 1$<br/> <br/> Hence all eigenvalues of $B$ are $1$. Therefore,<br/> $\\det(B) = 1 \\cdot 1 \\cdot 1 \\cdot 1 = 1$<br/> <br/> So option (b) is correct.<br/> <br/> Now the eigenvalues of $A+B$ are $\\lambda + 1$, so they are<br/> $0, 2, 3, -1$.<br/> <br/> Therefore,<br/> $\\det(A+B) = 0 \\cdot 2 \\cdot 3 \\cdot (-1) = 0$<br/> <br/> So option (a) is correct.<br/> <br/> Also,<br/> $\\operatorname{tr}(A+B) = 0 + 2 + 3 - 1 = 4$<br/> <br/> So option (c) is correct.<br/> <br/> Hence all the statements are true. Therefore, the correct answer is<br/> <br/> $\\boxed{(d)\\ \\text{all of these}}$</div><br><br><small>Source: <a href=\"https://gateoverflow.in/525438/go-classes-dpp-gate-cs-da-linear-algebra-matrix-arithmetic\" target=\"_blank\">GATE Overflow #525438</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider the following matrix: $$A = \\begin{bmatrix} 1.5&amp;0 &amp;1 \\\\ -0.5 &amp; 0.5&amp; -0.5\\\\ -0.5&amp; 0 &amp; 0 \\end{bmatrix}$$</p><p>The eigen values of the above matrix are:</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$-0.5, ~0.5, ~1.5$<br/></span>",
                "<span style=\"display: inline;\">$0.5, ~0.5, ~1$<br/></span>",
                "<span style=\"display: inline;\">$1.75, ~-1, ~0.5$<br/></span>",
                "<span style=\"display: inline;\">$-0.5, ~0.5, ~-1$</span>"
            ],
            "answer": "B",
            "solution": "<div class=\"solution-content\"><a name=\"525317\"></a><div itemprop=\"text\"><p>Given<br/>$$<br/>A=\\begin{pmatrix}<br/>1.5 &amp; 0 &amp; 1\\\\<br/>-0.5 &amp; 0.5 &amp; -0.5\\\\<br/>-0.5 &amp; 0 &amp; 0<br/>\\end{pmatrix}<br/>$$</p><p>Let the eigenvalues of $A$ be $\\lambda_1,\\lambda_2,\\lambda_3$.</p><p>Using the property of eigenvalues,</p><p>$$<br/>\\lambda_1+\\lambda_2+\\lambda_3=\\operatorname{tr}(A)<br/>$$</p><p>Now,<br/>$$<br/>\\operatorname{tr}(A)=1.5+0.5+0=2<br/>$$</p><p>So,<br/>$$<br/>\\lambda_1+\\lambda_2+\\lambda_3=2<br/>$$</p><p>Next, we use another property:<br/>$$<br/>\\lambda_1\\lambda_2\\lambda_3=\\det(A)<br/>$$</p><p>Now,<br/>$$<br/>\\det(A)=<br/>\\begin{vmatrix}<br/>1.5 &amp; 0 &amp; 1\\\\<br/>-0.5 &amp; 0.5 &amp; -0.5\\\\<br/>-0.5 &amp; 0 &amp; 0<br/>\\end{vmatrix}<br/>$$</p><p>Expanding along the third row,<br/>$$<br/>\\det(A)=-0.5<br/>\\begin{vmatrix}<br/>0 &amp; 1\\\\<br/>0.5 &amp; -0.5<br/>\\end{vmatrix}<br/>$$</p><p>$$<br/>=-0.5\\big((0)(-0.5)-(1)(0.5)\\big)<br/>$$</p><p>$$<br/>=-0.5(-0.5)=0.25<br/>$$</p><p>So,<br/>$$<br/>\\lambda_1\\lambda_2\\lambda_3=0.25<br/>$$</p><p>Now check the options:</p><p><strong>A. </strong>$-0.5,\\,0.5,\\,1.5$</p><p>Sum$: -0.5+0.5+1.5=1.5 \\neq 2$</p><p>So <strong>A is incorrect.</strong><br/> </p><p><strong>B.</strong> $0.5,\\,0.5,\\,1$</p><p>Sum$:0.5+0.5+1=2$</p><p>Product$:0.5\\times 0.5\\times 1=0.25$</p><p>So <strong>B satisfies</strong> both properties.</p><p>Hence, the eigenvalues are $\\boxed{0.5,\\;0.5,\\;1}$</p><p>$\\textbf{Answer: B}$</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/525314/go-classes-dpp-gate-cs-da-linear-algebra-eigen-values\" target=\"_blank\">GATE Overflow #525314</a></small></div>"
        }
    ]
});

registerTest({
    "name": "DPP 41 - Engineering Mathematics (Eigenvalues & Eigenvectors - Part 5)",
    "testLabel": "DPP 41",
    "testType": "DPP",
    "bracket": "Eigenvalues & Eigenvectors - Part 5",
    "subject": "em",
    "series": "cse-dpp-2027",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 10,
    "topicsCovered": "Eigenvalues & Eigenvectors (Practice Set 5)",
    "questions": [
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>A matrix $M$ has Eigen values $1$ &amp; $4$ with Eigen vectors $\\begin{pmatrix} 1\\\\ -1 \\end{pmatrix}$ and $\\begin{pmatrix} 2\\\\ 1 \\end{pmatrix}$ respectively. The matrix $M$ is ?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\left(\\begin{array}{ll}2 & 1 \\\\ 1 & 2\\end{array}\\right)$<br/><br/></span>",
                "<span style=\"display: inline;\">$\\left(\\begin{array}{cc}3 & 2 \\\\ 1 & 2\\end{array}\\right)$<br/><br/></span>",
                "<span style=\"display: inline;\">$\\left(\\begin{array}{cc}2 & 2 \\\\ -1 & 3\\end{array}\\right)$<br/><br/></span>",
                "<span style=\"display: inline;\">$\\left(\\begin{array}{cc}3 & 2 \\\\ -2 & 1\\end{array}\\right)$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"525490\"></a><div itemprop=\"text\">May be we can just use some Important points to answer this question, like sum of eigen values = Trace<br/> and product is det<br/> so only B works.</div><br><br><small>Source: <a href=\"https://gateoverflow.in/525302/go-classes-dpp-gate-cs-da-linear-algebra-matrix-diagonalization\" target=\"_blank\">GATE Overflow #525302</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>The<strong> Eigen values</strong> of a $2 \\times 2$ matrix $A$ are $1, -2$, and its <strong>Eigen vectors</strong> $x_1$ and $x_2$ respectively.</p><p>The <strong>Eigen values</strong> and <strong>Eigen vectors</strong> of the matrix $A^{2} - 3A + 4I$ (where $I$ is the identity matrix) will be:</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$2,14$ and $ x_1,x_2$<br/></span>",
                "<span style=\"display: inline;\">$2,14$ and $x_1+x_2 , x_1- x_2$<br/></span>",
                "<span style=\"display: inline;\">$2,0$ and $x_1,x_2$<br/></span>",
                "<span style=\"display: inline;\">$2,0$ and $x_1+x_2, x_1- x_2$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"525124\"></a><div itemprop=\"text\">GIven $A^2-3A+1$,<br/> <br/> Eigen value $1: 1-3+4=2$,<br/> <br/> Eigen value $2= 4+6+4=14$<br/> <br/> We know $AX=\\lambda X$<br/> <br/> $A^2X=A \\lambda X= \\lambda^2X$<br/> <br/> $A^2X-3AX=\\lambda^2X-3 \\lambda X $<br/> <br/> $A^2X-3AX+4IX=A =\\lambda^2X-3 \\lambda X+4IX $<br/> <br/> $(A^2-3A+4I)X=(\\lambda^2-3 \\lambda +4I)X $<br/> <br/> Eigenvalue of the matrix $(A^2 - 3A +4I)$ is $( λ^2 - 3λ + 4)$ and the eigenvector is same as $A$ which is $x_1,x_2$.</div><br><br><small>Source: <a href=\"https://gateoverflow.in/525123/go-classes-dpp-gate-cs-da-linear-algebra-eigen-vectors\" target=\"_blank\">GATE Overflow #525123</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>The condition for which the eigenvalues of the matrix $A=\\begin{bmatrix} 2 &amp; 1\\\\ 1 &amp;k \\end{bmatrix}$ are positive is</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$k > \\frac{1}{2}$<br/></span>",
                "<span style=\"display: inline;\">$ k > −2$<br/></span>",
                "<span style=\"display: inline;\">$ k > 0$<br/></span>",
                "<span style=\"display: inline;\">$k< \\frac{-1}{2}$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"525120\"></a><div itemprop=\"text\"><p>For the matrix<br/>\\[<br/>A=\\begin{bmatrix}2 &amp; 1\\\\[4pt] 1 &amp; k\\end{bmatrix},<br/>\\]<br/>both eigenvalues are positive if and only if:</p><p>\\[<br/>\\operatorname{tr}(A) &gt; 0<br/>\\quad \\text{and} \\quad<br/>\\det(A) &gt; 0.<br/>\\]</p><p>This works because for a $2\\times 2$ real symmetric matrix, the eigenvalues are real, and<br/>\\[<br/>\\lambda_1+\\lambda_2=\\operatorname{tr}(A), \\qquad<br/>\\lambda_1\\lambda_2=\\det(A).<br/>\\]</p><p>Now compute:</p><p>\\[<br/>\\operatorname{tr}(A)=2+k,<br/>\\]<br/>so we need<br/>\\[<br/>2+k&gt;0<br/>\\quad \\Longrightarrow \\quad<br/>k&gt;-2.<br/>\\]</p><p>Also,<br/>\\[<br/>\\det(A)=2k-1,<br/>\\]<br/>so we need<br/>\\[<br/>2k-1&gt;0<br/>\\quad \\Longrightarrow \\quad<br/>k&gt;\\frac12.<br/>\\]</p><p>Combining both conditions:<br/>\\[<br/>k&gt;-2<br/>\\quad \\text{and} \\quad<br/>k&gt;\\frac12<br/>\\quad \\Longrightarrow \\quad<br/>k&gt;\\frac12.<br/>\\]</p><p><strong>Final Answer</strong>$:\\boxed{k&gt;\\frac12}$</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/525119/go-classes-dpp-gate-cs-da-linear-algebra-eigen-value\" target=\"_blank\">GATE Overflow #525119</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Suppose the rank of the matrix</p><p>$$\\begin{pmatrix}1&amp;1&amp;2&amp;2\\\\1&amp;1&amp;1&amp;3\\\\a&amp;b&amp;b&amp;1\\end{pmatrix}$$</p><p>is $2$ for some real numbers $a$ and $b$. Then $b$ equals</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$1$<br/></span>",
                "<span style=\"display: inline;\">$3$<br/></span>",
                "<span style=\"display: inline;\">$1/2$<br/></span>",
                "<span style=\"display: inline;\">$1/3$</span>"
            ],
            "answer": "D",
            "solution": "<div class=\"solution-content\"><a name=\"525050\"></a><div itemprop=\"text\">The easiest solution<br/> <br/> the smallest square submatrix is of $3 \\times 3$<br/> <br/> and rank $=2$ is given, so determinant of any submatrix of order $3 \\times 3$ must be $0$<br/> <br/> let us take<br/> <br/> $\\begin{pmatrix} 1 &amp;2 &amp;2 \\\\ 1&amp;1 &amp;3 \\\\ b&amp;b &amp;1 \\end{pmatrix}$<br/> <br/> Determinant $= 1(1-3b)-2(1-3b)+2(b-b)=0$<br/> <br/> $-1(1-3b)=0$<br/> <br/> $-1+3b=0$<br/> <br/> $b=\\frac{1}{3}$<br/> <br/> Correct Answer: $D$</div><br><br><small>Source: <a href=\"https://gateoverflow.in/525048/go-classes-dpp-gate-cs-da-linear-algebra-eigen-values\" target=\"_blank\">GATE Overflow #525048</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>If $\\mathrm{B}$ has eigenvalues $1, 2, 3, \\mathrm{C}$ has eigenvalues $4, 5, 6$, and $\\mathrm{D}$ has eigenvalues $7, 8, 9,$ what are the eigenvalues of the $6 \\times 6$ matrix $\\mathrm{A}=\\left[\\[\\begin{array}{cc}<br/>\\mathrm{B} &amp; \\mathrm{C} \\\\<br/>0 &amp; \\mathrm{D}<br/>\\end{array}\\]\\right]$ ?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$1,2,3,4,5,6$<br/></span>",
                "<span style=\"display: inline;\">$4,5,6,7,8,9$<br/></span>",
                "<span style=\"display: inline;\">$1,2,3,7,8,9$<br/></span>",
                "<span style=\"display: inline;\">$1,2,3,4,5,6,7,8,9$</span>"
            ],
            "answer": "C",
            "solution": "<div class=\"solution-content\"><a name=\"524906\"></a><div itemprop=\"text\">Let, $A=\\begin{bmatrix}B &amp; C\\\\ 0 &amp; D\\end{bmatrix}$<br/> <br/> <br/> where $B,C,D$ are $3\\times 3$ matrices. The eigenvalues of $A$ are the roots of its characteristic polynomial<br/> <br/> $p_A(\\lambda)=\\det(\\lambda I_6-A)$.<br/> <br/> <br/> Now,<br/> <br/> $\\lambda I_6-A=<br/> \\begin{bmatrix}<br/> \\lambda I_3-B &amp; -C\\\\<br/> 0 &amp; \\lambda I_3-D<br/> \\end{bmatrix}$<br/> <br/> This is a block upper triangular matrix, so its determinant is the product of the determinants of the diagonal blocks:<br/> <br/> $p_A(\\lambda)=\\det(\\lambda I_3-B)\\,\\det(\\lambda I_3-D)$<br/> <br/> <br/> Therefore the roots of $p_A(\\lambda)$ are exactly the roots of<br/> <br/> $\\det(\\lambda I_3-B)=0$ $\\quad$ and $\\quad$ $\\det(\\lambda I_3-D)=0$.<br/> <br/> So the eigenvalues of $A$ are the eigenvalues of $B$ together with the eigenvalues of $D$.<br/> <br/> <br/> Given eigenvalues of $B$ are $1,2,3$ and eigenvalues of $D$ are $7,8,9$, the eigenvalues of $A$ are $\\boxed{1,2,3,7,8,9}$.</div><br><br><small>Source: <a href=\"https://gateoverflow.in/524904/go-classes-dpp-gate-cs-da-linear-algebra-eigen-value\" target=\"_blank\">GATE Overflow #524904</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Which of the following statements about the eigen values of $I_n$, the $n \\times n$ identity matrix (over complex numbers), is true?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">The eigen values are $1, \\omega, \\omega^2, \\dots , \\omega^{n-1}$, where $\\omega$ is a primitive $n$-th root of unity.<br/></span>",
                "<span style=\"display: inline;\">The only eigen value is $-1$<br/></span>",
                "<span style=\"display: inline;\">Both $0$ and $1$ are eigen values, but there are no other eigen values<br/></span>",
                "<span style=\"display: inline;\">The only eigen value is $1$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"524808\"></a><div itemprop=\"text\"><p>Be it real matrix or complex matrix, the identity matrix remains the same. So we will have in $I_n,$ $1's$ only in the principal diagonal elements and the rest of the elements of the matrix will be $0.$ So the characteristic equation will be :</p><p>$\\mid A - λ I \\mid = 0$</p><p>$\\implies \\underbrace{(1 - λ) . (1 - λ) \\ldots (1 - λ)}_{n \\text{ times}} = 0 $</p><p>$\\implies (1 - λ)^n = 0$</p><p>$\\implies λ = 1$ as the only solution the reason being complex roots of unity only holds if it were $λ^n - 1 = 0$ which is not the case here.<br/> </p><p><strong>Hence (D) is the correct answer.</strong></p><p> </p><p>$\\underline{\\textbf{Alternate Solution :}}$</p><p>For the identity matrix $I_n$, for any nonzero vector $v$,</p><p>$I_n v = v = 1\\cdot v$</p><p>So $v$ is an eigenvector and the corresponding eigenvalue is $1$.</p><p>Since this holds for every nonzero $v$, the only eigenvalue of $I_n$ is $1$ (with algebraic multiplicity $n$).</p><p>Therefore, the correct option is $\\boxed{\\text{D. The only eigenvalue is }1}$</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/524807/go-classes-dpp-gate-cs-da-linear-algebra-eigen-value\" target=\"_blank\">GATE Overflow #524807</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\">Consider a matrix, $A =$ $\\begin{bmatrix} 6 &amp; 10\\\\ -2&amp;-3 \\end{bmatrix}$.<br/> <br/> The trace of $A^{10}$ is ______.</div></span>",
            "image": "",
            "options": [],
            "answer": "1025",
            "solution": "<div class=\"solution-content\"><a name=\"524803\"></a><div itemprop=\"text\">Given<br/> <br/> $A=\\begin{bmatrix}6&amp;10\\\\-2&amp;-3\\end{bmatrix}$<br/> <br/> Compute trace and determinant:<br/> <br/> $\\text{tr}(A)=6+(-3)=3$<br/> <br/> $\\det(A)=6(-3)-10(-2)=-18+20=2$<br/> <br/> So the characteristic polynomial is<br/> <br/> $\\lambda^2-\\text{tr}(A)\\lambda+\\det(A)=\\lambda^2-3\\lambda+2$<br/> <br/> Factor:<br/> <br/> $\\lambda^2-3\\lambda+2=(\\lambda-1)(\\lambda-2)$<br/> <br/> Hence the eigenvalues of $A$ are $1$ and $2$.<br/> <br/> Therefore the eigenvalues of $A^{10}$ are $1^{10}$ and $2^{10}$, and the trace is the sum:<br/> <br/> $\\text{tr}(A^{10})=1^{10}+2^{10}=1+1024=1025$<br/> <br/> So, $\\boxed{1025}$</div><br><br><small>Source: <a href=\"https://gateoverflow.in/524802/go-classes-dpp-gate-cs-da-linear-algebra-eigen-values\" target=\"_blank\">GATE Overflow #524802</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Let $A$ be a $10 \\times 10$ matrix with complex entries such that all its eigenvalues are non-negative real numbers, and at least one eigenvalue is positive. Which of the following statements is always false ?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">There exists a matrix $B$ such that $AB-BA = B$<br/></span>",
                "<span style=\"display: inline;\">There exists a matrix $B$ such that $AB-BA = A$<br/></span>",
                "<span style=\"display: inline;\">There exists a matrix $B$ such that $AB+BA=A$<br/></span>",
                "<span style=\"display: inline;\">There exists a matrix $B$ such that $AB+BA=B$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"524952\"></a><div itemprop=\"text\">Assuming Both AB and BA exist, then if A is square matrix =&gt; B is square matrix<br/> <br/> For square matrices tr(AB) = tr(BA) where tr(AB) is the trace of AB<br/> <br/> trace is also equal to the sum of eigen values. We are said All eigen values &gt;= 0 and at least one is positive, So sum of eigen values &gt; 0<br/> <br/> That is trace(A) &gt; 0<br/> <br/> Two important things to note : Tr(AB)=Tr(BA) and Tr(A) &gt; 0<br/> <br/> Option A<br/> <br/> AB - BA = B<br/> <br/> Take trace on both sides<br/> <br/> Tr(AB - BA) = Tr(B)<br/> <br/> Tr(AB) - Tr(BA) = Tr(B)<br/> <br/> 0 = Tr(B) (which is possible, B may be zero matrix)<br/> <br/> Option B<br/> <br/> tr(AB) - tr(BA) = tr(A)<br/> <br/> 0 = tr(A) [This is a contradiction, Tr(A) &gt; 0]<br/> <br/> Therefore option B is always false<br/> <br/> Option C<br/> <br/> AB + BA = A<br/> <br/> If B = 0.5I where I = Identity Matrix<br/> <br/> The equation becomes A(0.5I) + (0.5I)A = A =&gt; 0.5A + 0.5A = A (this is valid for square matrix)<br/> <br/> <br/> <br/> Option D<br/> <br/> AB + BA = B<br/> <br/> If B = zero matrix<br/> <br/> AB + BA = 0 + 0 = 0<br/> <br/> Option B is answer</div><br><br><small>Source: <a href=\"https://gateoverflow.in/524753/go-classes-dpp-gate-cs-da-linear-algebra-matrices\" target=\"_blank\">GATE Overflow #524753</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Let $A$ be a $4 \\times 4$ matrix with eigen values $-5,-2,1,4$. Which of the following is an eigen value of the matrix$\\begin{bmatrix} A &amp; I \\\\ I &amp; A \\end{bmatrix}$, where $I$ is the $4 \\times 4$ identity matrix?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$-5$<br/></span>",
                "<span style=\"display: inline;\">$-7$<br/></span>",
                "<span style=\"display: inline;\">$2$<br/></span>",
                "<span style=\"display: inline;\">$1$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"524752\"></a><div itemprop=\"text\">$\\lambda$ is the eigen value of the matrix $A$.<br/> <br/> The characteristic equation of A is $\\begin{vmatrix} A - \\lambda I \\end{vmatrix} = 0$<br/> <br/> Now, let $\\gamma$ be the eigen value of $\\begin{pmatrix} A &amp; I\\\\ I &amp; A \\end{pmatrix}$<br/> <br/> The characteristic equation of the above matrix is $\\begin{vmatrix} A-\\gamma I &amp; I \\\\ I &amp; A-\\gamma I \\end{vmatrix} = 0$<br/> <br/> $\\begin{vmatrix} A-\\gamma I - I \\end{vmatrix} \\begin{vmatrix} A-\\gamma I + I \\end{vmatrix} = 0$<br/> <br/> <br/> $\\begin{vmatrix} A-(\\gamma+1) I \\end{vmatrix} \\begin{vmatrix} A-(\\gamma-1)I \\end{vmatrix} = 0$<br/> <br/> <br/> Compare the above equation with the characteristic equation of $A$.<br/> <br/> That gives us<br/> <br/> $\\gamma + 1 = \\lambda$;<br/> <br/> $\\Rightarrow$ $\\gamma = \\lambda - 1$;<br/> <br/> $\\gamma - 1 = \\lambda$;<br/> <br/> $\\Rightarrow$ $\\gamma = \\lambda + 1$;<br/> <br/> <br/> Then $ \\lambda + 1$ and $ \\lambda - 1$ eigen values of given matrix are: (according to property of Cayley Hamilton theorem):<br/> <br/> $ \\lambda + 1: (-4,-1,2,5)$<br/> <br/> $ \\lambda - 1:(-6,-3,0,3)$</div><br><br><small>Source: <a href=\"https://gateoverflow.in/524751/go-classes-dpp-gate-cs-da-linear-algebra-eigen-value\" target=\"_blank\">GATE Overflow #524751</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider a $2 \\times 2$ square matrix</p><p>$$<br/>A=\\left[\\begin{array}{ll}<br/>\\sigma &amp; x \\\\<br/>\\omega &amp; \\sigma<br/>\\end{array}\\right]<br/>$$</p><p>where $\\sigma$ and $\\omega$ are real numbers, $\\omega\\neq0$, and $x$ is unknown.</p><p>If the eigenvalues of the matrix $A$ are $(\\sigma+i \\omega)$ and $(\\sigma-i \\omega)$, then $x$ is equal to</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$+i \\omega$<br/></span>",
                "<span style=\"display: inline;\">$-i \\omega$<br/></span>",
                "<span style=\"display: inline;\">$+\\omega$<br/></span>",
                "<span style=\"display: inline;\">$-\\omega$</span>"
            ],
            "answer": "D",
            "solution": "<div class=\"solution-content\"><a name=\"524669\"></a><div itemprop=\"text\"><p>For the given matrix, $A=\\begin{bmatrix} \\sigma &amp; x\\\\ \\omega &amp; \\sigma \\end{bmatrix}$ the determinant is $\\det(A)=\\sigma^2-x\\omega $.</p><p>The determinant of a square matrix equals the product of its eigenvalues.</p><p>Since the given eigenvalues are \\(\\sigma+i\\omega\\) and \\(\\sigma-i\\omega\\),</p><p>\\[ \\begin{aligned} \\det(A) &amp;=(\\sigma+i\\omega)(\\sigma-i\\omega)\\\\ &amp;=\\sigma^2-(i\\omega)^2\\\\ &amp;=\\sigma^2+\\omega^2 \\end{aligned} \\]</p><p>Equating the two expressions for the determinant:</p><p>\\[ \\sigma^2-x\\omega=\\sigma^2+\\omega^2 \\]</p><p>\\[ -x\\omega=\\omega^2 \\]</p><p>Since \\(\\omega\\neq0\\), dividing both sides by \\(\\omega\\) gives:</p><p>\\[ \\boxed{x=-\\omega} \\]</p><p><strong>Answer : D</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/524668/go-classes-dpp-gate-cs-da-linear-algebra-eigen-values\" target=\"_blank\">GATE Overflow #524668</a></small></div>"
        }
    ]
});

registerTest({
    "name": "DPP 42 - Engineering Mathematics (Eigenvalues & Eigenvectors - Part 6)",
    "testLabel": "DPP 42",
    "testType": "DPP",
    "bracket": "Eigenvalues & Eigenvectors - Part 6",
    "subject": "em",
    "series": "cse-dpp-2027",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 10,
    "topicsCovered": "Eigenvalues & Eigenvectors (Practice Set 6)",
    "questions": [
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Let $A$ be an $n \\times n$ matrix. Which of the following is <strong>NOT</strong> equivalent to the statement: $A$ is not invertible?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$0$ is an eigenvalue of $A$.<br/></span>",
                "<span style=\"display: inline;\">$1$ is an eigenvalue of $I_n-A$.<br/></span>",
                "<span style=\"display: inline;\">$0$ is a solution of $\\operatorname{det}\\left(A-\\lambda I_n\\right)=0$.<br/></span>",
                "<span style=\"display: inline;\">$\\operatorname{det}\\left(A-\\lambda I_n\\right)=(1-\\lambda)^n$.</span>"
            ],
            "answer": "D",
            "solution": "<div class=\"solution-content\"><a name=\"524487\"></a><div itemprop=\"text\"><p>$\\boxed{\\text{Correct Option: D}}$</p><p>Note: $A$ is a $n \\times n$ square matrix. So, we can say,</p><p>$A$ is not invertible</p><p>$\\iff \\det(A)=0$</p><p>$ \\iff 0$ is an eigenvalue of $A$ </p><p>$\\iff$ Columns of $A$ are Linearly Dependent.</p><p>$\\iff$ $\\text{Rank(A) &lt; n}$</p><p>All these above statements are Equivalent.</p><p> </p><ol start=\"1\" style=\"list-style-type: upper-alpha;\"><li>$0$ is an eigenvalue of $A$. $\\textcolor{blue}{\\boxed{\\text{Equivalent}}}$<br/> </li><li>$1$ is an eigenvalue of $I_n-A$. $\\textcolor{blue}{\\boxed{\\text{Equivalent}}}$</li></ol><div>If $1$ is an eigenvalue of $I_n-A$ then $\\det((I_n-A)-I_n)=0$.</div><div>It implies that $\\det(-A)=0 \\implies \\det(A)=0$. That means $A$ is not invertible. <br/> </div><ol start=\"3\" style=\"list-style-type: upper-alpha;\"><li>$0$ is a solution of $\\operatorname{det}\\left(A-\\lambda I_n\\right)=0$. $\\textcolor{blue}{\\boxed{\\text{Equivalent}}}$</li></ol><div>Means $\\det(A-0I_n)=0 \\Rightarrow \\det(A)=0$.</div><div> </div><ol start=\"4\" style=\"list-style-type: upper-alpha;\"><li>$\\operatorname{det}\\left(A-\\lambda I_n\\right)=(1-\\lambda)^n$. $\\textcolor{red}{\\boxed{\\text{Not Equivalent}}}$</li></ol><p>Putting $\\lambda=0$ gives $\\det(A)=1 \\neq 0$,<br/>In this case, $A$ is invertible.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/524486/go-classes-dpp-gate-cs-da-linear-algebra-eigen-values\" target=\"_blank\">GATE Overflow #524486</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Let \\(N\\) be the matrix<br/>\\[<br/>N=\\begin{bmatrix}1&amp;2\\\\3&amp;4\\end{bmatrix}.<br/>\\]<br/>Which of the following matrix equations does \\(N\\) satisfy?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">\\(N^{2}-5N-2I=0\\)<br/></span>",
                "<span style=\"display: inline;\">\\(N^{2}+5N-2I=0\\)<br/></span>",
                "<span style=\"display: inline;\">\\(N^{2}-5N+2I=0\\)<br/></span>",
                "<span style=\"display: inline;\">\\(N^{2}+5N+2I=0\\)</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"524483\"></a><div itemprop=\"text\"><article data-scroll-anchor=\"true\" data-testid=\"conversation-turn-80\" data-turn=\"assistant\" data-turn-id=\"request-69a6b08f-b0d8-83a2-8892-b2fba49215b0-4\" dir=\"auto\" tabindex=\"-1\"><p data-end=\"517\" data-is-last-node=\"\" data-start=\"0\">Let $N=\\begin{bmatrix}1&amp;2\\\\3&amp;4\\end{bmatrix}$.<br/><br/>First compute trace and determinant:<br/><br/>$\\text{trace}(N)=1+4=5$<br/><br/>$\\det(N)=1\\cdot 4-2\\cdot 3=4-6=-2$<br/><br/>For a $2\\times 2$ matrix, the characteristic polynomial is<br/><br/>$p(\\lambda)=\\lambda^2-(\\text{trace}(N))\\lambda+\\det(N)$<br/><br/>So,<br/><br/>$p(\\lambda)=\\lambda^2-5\\lambda-2$<br/><br/>By the Cayley-Hamilton theorem, $p(N)=0$, hence<br/><br/>$N^2-5N-2I=0$<br/><br/>Therefore, the correct option is $\\boxed{\\text{A}}$</p></article></div><br><br><small>Source: <a href=\"https://gateoverflow.in/524482/go-classes-dpp-gate-cs-da-linear-algebra-cayley-hamilton-theorem\" target=\"_blank\">GATE Overflow #524482</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>The matrix $\\left[\\[\\begin{array}{ll}1 &amp; a \\\\ 8 &amp; 3\\end{array}\\]\\right]($ where $a&gt;0)$ has a negative eigenvalue if $a$ is grater than</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\frac{3}{8}$<br/></span>",
                "<span style=\"display: inline;\">$\\frac{1}{8}$<br/></span>",
                "<span style=\"display: inline;\">$\\frac{1}{4}$<br/></span>",
                "<span style=\"display: inline;\">$\\frac{1}{5}$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"473914\"></a><div itemprop=\"text\"><p><b>\\begin{equation}<br/>\\begin{aligned}<br/>&amp;\\begin{aligned}<br/>|A-\\lambda I| &amp; =0 \\\\<br/>\\left|\\begin{array}{cc}<br/>1-\\lambda &amp; a \\\\<br/>8 &amp; 3-\\lambda<br/>\\end{array}\\right| &amp; =0 \\\\<br/>(1-\\lambda)(3-\\lambda)-8 &amp; =0 \\\\<br/>\\lambda^2-4 \\lambda+3-8 a &amp; =0 \\\\<br/>\\lambda_1 \\times \\lambda_2 &amp; =\\frac{3-8 a}{1} \\text { (product of roots) } \\\\<br/>&amp; =3-8 a<br/>\\end{aligned}\\\\<br/>&amp;\\text { If one eigen value is negative then product of eigen values must be negative. }\\\\<br/>&amp;\\begin{aligned}<br/>3-8 a &amp; &lt;0 \\\\<br/>a &amp; &gt;3 / 8<br/>\\end{aligned}<br/>\\end{aligned}<br/>\\end{equation}</b></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/473913/go-classes-dpp-linear-algebra-eigen-values-gate-me\" target=\"_blank\">GATE Overflow #473913</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Find the inverse of the following matrix using the Cayley–Hamilton theorem.</p><p>$$A=\\begin{bmatrix}4&amp;3&amp;1\\\\-1&amp;2&amp;1\\\\3&amp;0&amp;1\\end{bmatrix}$$</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$A^{-1}=\\frac{1}{14}\\begin{bmatrix}2&-3&1\\\\4&1&-5\\\\-6&9&11\\end{bmatrix}$<br/><br/></span>",
                "<span style=\"display: inline;\">$A^{-1}=\\frac{1}{8}\\begin{bmatrix}2&-3&-1\\\\4&-2&-3\\\\-6&9&11\\end{bmatrix}$<br/><br/></span>",
                "<span style=\"display: inline;\">$A^{-1}=\\frac{1}{16}\\begin{bmatrix}2&-1&-1\\\\4&-2&-6\\\\-6&9&11\\end{bmatrix}$<br/><br/></span>",
                "<span style=\"display: inline;\">$A^{-1}=\\frac{1}{8}\\begin{bmatrix}2&-3&-1\\\\4&-2&-6\\\\-6&9&11\\end{bmatrix}$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"555349\"></a><div itemprop=\"text\"><p>Given, $A=\\begin{bmatrix}4&amp;3&amp;1\\\\-1&amp;2&amp;1\\\\3&amp;0&amp;1\\end{bmatrix}$<br/> </p><p>Using $|\\lambda I-A|=0$,</p><p>$$\\begin{vmatrix}\\lambda-4&amp;-3&amp;-1\\\\1&amp;\\lambda-2&amp;-1\\\\-3&amp;0&amp;\\lambda-1\\end{vmatrix}=0$$</p><p>On expanding and simplifying,</p><p>$$\\lambda^3-7\\lambda^2+14\\lambda-14=0$$</p><p> </p><p>According to the Cayley–Hamilton theorem, every square matrix satisfies its characteristic equation.</p><p>$$A^3-7A^2+14A-14I=0$$</p><p>Multiplying both sides by $A^{-1}$,</p><p>$$A^2-7A+14I-14A^{-1}=0$$</p><p>$$\\boxed{\\therefore A^{-1}=\\frac{1}{14}(A^2-7A+14I)}$$</p><p>Now,</p><p>$$A^2=\\begin{bmatrix}16&amp;18&amp;8\\\\-3&amp;1&amp;2\\\\15&amp;9&amp;4\\end{bmatrix}$$</p><p>Substituting into the formula,</p><p>$$A^{-1}=\\frac{1}{14}\\left[\\begin{bmatrix}16&amp;18&amp;8\\\\-3&amp;1&amp;2\\\\15&amp;9&amp;4\\end{bmatrix}-7\\begin{bmatrix}4&amp;3&amp;1\\\\-1&amp;2&amp;1\\\\3&amp;0&amp;1\\end{bmatrix}+14I\\right]$$</p><p>On simplifying,</p><p>$$\\boxed{A^{-1}=\\frac{1}{14}\\begin{bmatrix}2&amp;-3&amp;1\\\\4&amp;1&amp;-5\\\\-6&amp;9&amp;11\\end{bmatrix}}$$</p><p><strong>Answer : A</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/472589/go-classes-dpp-linear-algebra-cayley-hamilton-theorem-binghamton\" target=\"_blank\">GATE Overflow #472589</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>The eigenvalues of the matrix $A=\\left[\\[\\begin{array}{ll}1 &amp; 2 \\\\ 3 &amp; 6\\end{array}\\]\\right]$ are:</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">1 and 0</span>",
                "<span style=\"display: inline;\">1 and 6</span>",
                "<span style=\"display: inline;\">2 and 3</span>",
                "<span style=\"display: inline;\">0 and 7</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"472719\"></a><div itemprop=\"text\">Sum of Eigen Values Must be equal to the Trace of the Matrix which is 7 in the given Matrix.<br/> <br/> Also, Det(A) is 0. So, 0 Must be one of the Eigen value.<br/> <br/> since, one Eigen value is 0 so another must be 7 .<br/> <br/> </div><br><br><small>Source: <a href=\"https://gateoverflow.in/472583/go-classes-dpp-linear-algebra-eigen-value-binghamton\" target=\"_blank\">GATE Overflow #472583</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Find the value of $A^3$ where $A=\\left[\\[\\begin{array}{ccc}-1 &amp; -1 &amp; 2 \\\\ 0 &amp; 1 &amp; -1 \\\\ 2 &amp; 2 &amp; 1\\end{array}\\]\\right]$</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\left[\\begin{array}{ccc}-3 & 1 & 7 \\\\ -2 & -3 & -5 \\\\ 6 & 8 & 1\\end{array}\\right]$<br/></span>",
                "<span style=\"display: inline;\">$\\left[\\begin{array}{ccc}3 & 5 & -1 \\\\ 1 & -9 & 1 \\\\ -2 & -4 & -5\\end{array}\\right]$<br/></span>",
                "<span style=\"display: inline;\">$\\left[\\begin{array}{ccc}3 & 5 & -1 \\\\ -2 & -9 & 1 \\\\ -2 & -4 & -5\\end{array}\\right]$<br/></span>",
                "<span style=\"display: inline;\">$\\left[\\begin{array}{ccc}3 & 5 & -1 \\\\ -1 & -9 & 1 \\\\ -2 & -4 & -5\\end{array}\\right]$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"472063\"></a><div itemprop=\"text\">Trace $=1$<br/> Sum of principal minors = -3<br/> Determinant $=-5$<br/> Characteristic equation:<br/> <br/> $$<br/> \\lambda^3-\\lambda^2-3 \\lambda+5=0<br/> $$<br/> <br/> By Cayley-Hamilton:<br/> <br/> $$<br/> A^3=A^2+3 A-5 I<br/> $$<br/> <br/> $A^2:$<br/> <br/> $$<br/> \\left[\\begin{array}{ccc}<br/> 5 &amp; 4 &amp; 1 \\\\<br/> -2 &amp; -1 &amp; 2 \\\\<br/> 0 &amp; 2 &amp; 3<br/> \\end{array}\\right]<br/> $$<br/> <br/> 3A:<br/> <br/> $$<br/> \\left[\\begin{array}{ccc}<br/> -3 &amp; -3 &amp; 6 \\\\<br/> 0 &amp; 3 &amp; -3 \\\\<br/> 6 &amp; 6 &amp; 3<br/> \\end{array}\\right]<br/> $$<br/> <br/> 5I:<br/> <br/> $$<br/> \\left[\\begin{array}{lll}<br/> 5 &amp; 0 &amp; 0 \\\\<br/> 0 &amp; 5 &amp; 0 \\\\<br/> 0 &amp; 0 &amp; 5<br/> \\end{array}\\right]<br/> $$<br/> <br/> Add $A^2+3 A$ :<br/> <br/> $$<br/> \\left[\\begin{array}{ccc}<br/> 2 &amp; 1 &amp; 7 \\\\<br/> -2 &amp; 2 &amp; -5 \\\\<br/> 6 &amp; 8 &amp; 6<br/> \\end{array}\\right]<br/> $$<br/> <br/> Subtract $5 I$ :<br/> <br/> $$<br/> \\left[\\begin{array}{ccc}<br/> -3 &amp; 1 &amp; 7 \\\\<br/> -2 &amp; -3 &amp; -5 \\\\<br/> 6 &amp; 8 &amp; 1<br/> \\end{array}\\right]<br/> $$<br/> <br/> Final answer:<br/> <br/> $$<br/> A^3=\\left[\\begin{array}{ccc}<br/> -3 &amp; 1 &amp; 7 \\\\<br/> -2 &amp; -3 &amp; -5 \\\\<br/> 6 &amp; 8 &amp; 1<br/> \\end{array}\\right]<br/> $$<br/> </div><br><br><small>Source: <a href=\"https://gateoverflow.in/472048/go-classes-dpp-linear-algebra-cayley-hamilton-theorem-binghamton\" target=\"_blank\">GATE Overflow #472048</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Which of the following statements are true?<br/>A. If $M$ is a $4 \\times 4$ matrix with eigenvalues $1,2,3$ and 4 , then $M$ must have an eigenbasis.<br/>B. If $M$ is a $4 \\times 4$ symmetric matrix with eigenvalues $1,2,3$ and 3 , then $M$ must have an eigenbasis.</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">(a) Both A and B are true</span>",
                "<span style=\"display: inline;\">(b) A is true but B is false</span>",
                "<span style=\"display: inline;\">(c) B is true but A is false</span>",
                "<span style=\"display: inline;\">(d) Neither A nor B is true</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"471766\"></a><div itemprop=\"text\">Answer: A<br/> <br/> Explanation: Having an eigenbasis means that the matrix can be diagonalized.i.e., eigen vectors must be linearly independent.<br/> A. Since all eigenvalues are distinct, all eigenvectors are Linearly independent.<br/> B. For symmetric matrices, it is a property that eigenvectors will always be linearly independent irrespective of whether eigenvalues are distinct or not.</div><br><br><small>Source: <a href=\"https://gateoverflow.in/471765/go-classes-dpp-linear-algebra-eigen-value-binghamton\" target=\"_blank\">GATE Overflow #471765</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Suppose $A$ is a $2 \\times 2$ matrix,</p><p>$$<br/>A=\\left[\\begin{array}{ll}<br/>a &amp; b \\\\<br/>c &amp; d<br/>\\end{array}\\right]<br/>$$</p><p>and that $\\mathbf{v}=\\left[\\begin{array}{l}2 \\\\ 3\\end{array}\\right]$ is an eigenvector with eigenvalue 2. Is $\\mathbf{v}$ also an eigenvector of the matrix $2 A$, and if so, what is its eigenvalue?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\mathbf{v}$ is not necessarily an eigenvector of $2 A$.</span>",
                "<span style=\"display: inline;\">$\\mathbf{v}$ must be an eigenvector of $2 A$, with eigenvalue $1 / 2$</span>",
                "<span style=\"display: inline;\">$\\mathbf{v}$ must be an eigenvector of $2 A$, with eigenvalue 2</span>",
                "<span style=\"display: inline;\">$\\mathbf{v}$ must be an eigenvector of $2 A$, with eigenvalue 4</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"471764\"></a><div itemprop=\"text\">- $A \\mathbf{v}=2 \\mathbf{v}$, where $\\mathbf{v}=\\left[\\begin{array}{l}2 \\\\ 3\\end{array}\\right]$<br/> - We are to determine whether $\\mathbf{v}$ is an eigenvector of ( $2 A$ ), and if so, find the eigenvalue.<br/> <br/> If $A \\mathbf{v}=2 \\mathbf{v}$, then:<br/> <br/> $$<br/> 2 A \\cdot \\mathbf{v}=(2 A) \\cdot \\mathbf{v}=2 \\cdot(2 \\mathbf{v})=4 \\mathbf{v}<br/> $$<br/> <br/> So, $\\mathbf{v}$ is an eigenvector of $(2 A)$, with eigenvalue 4 .</div><br><br><small>Source: <a href=\"https://gateoverflow.in/471763/go-classes-dpp-linear-algebra-eigen-value-binghamton\" target=\"_blank\">GATE Overflow #471763</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Which of the following sets of vectors are linearly independent?<br/><br/>- $A=\\left\\{\\left[\\[\\begin{array}{c}4 \\\\ -2 \\\\ 6\\end{array}\\]\\right],\\left[\\[\\begin{array}{c}6 \\\\ -3 \\\\ 9\\end{array}\\]\\right]\\right\\}$<br/><br/>- $B=\\left\\{\\left[\\[\\begin{array}{c}4 \\\\ -2\\end{array}\\]\\right],\\left[\\[\\begin{array}{l}6 \\\\ 0\\end{array}\\]\\right],\\left[\\[\\begin{array}{l}1 \\\\ 3\\end{array}\\]\\right],\\left[\\[\\begin{array}{c}-2 \\\\ 1\\end{array}\\]\\right]\\right\\}$<br/><br/>- $C=\\left\\{\\left[\\[\\begin{array}{c}4 \\\\ -2 \\\\ 6\\end{array}\\]\\right],\\left[\\[\\begin{array}{l}6 \\\\ 2 \\\\ 1\\end{array}\\]\\right],\\left[\\[\\begin{array}{l}0 \\\\ 0 \\\\ 0\\end{array}\\]\\right]\\right\\}$<br/><br/>- $D=\\left\\{\\left[\\[\\begin{array}{c}-1 \\\\ 0 \\\\ 4 \\\\ 2\\end{array}\\]\\right],\\left[\\[\\begin{array}{c}5 \\\\ -5 \\\\ 0 \\\\ 10\\end{array}\\]\\right],\\left[\\[\\begin{array}{c}-1 \\\\ 1 \\\\ 3 \\\\ -11\\end{array}\\]\\right]\\right\\}$</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$D$ only</span>",
                "<span style=\"display: inline;\">$A$ and $D$ only</span>",
                "<span style=\"display: inline;\">$B$ and $D$ only</span>",
                "<span style=\"display: inline;\">$C$ and $D$ only</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"471757\"></a><div itemprop=\"text\">Answer: A<br/> <br/> A: $-\\mathrm{v} 1=\\mathrm{v} 2 * 2 / 3$. Hence Linearly dependent.<br/> B: - there are 4 vectors in R2. So linearly dependent.<br/> C: - Zero vector is present, hence linearly dependent<br/> D: - We can't write any column as a linear combination of other columns.<br/> Hence linearly independent. Or convert to echelon form and check that there will be three non-zero rows, which indicates rank is 3 and \\#linear independent columns=3.</div><br><br><small>Source: <a href=\"https://gateoverflow.in/471756/go-classes-dpp-linear-algebra-eigen-value-binghamton\" target=\"_blank\">GATE Overflow #471756</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>If $A$ is a square matrix, then for every eigenvalue of $A$,</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">The geometric multiplicity is equal to the algebraic multiplicity.</span>",
                "<span style=\"display: inline;\">The geometric multiplicity is less than or equal to the algebraic multiplicity.</span>",
                "<span style=\"display: inline;\">The geometric multiplicity is greater than or equal to the algebraic multiplicity.</span>",
                "<span style=\"display: inline;\">The geometric multiplicity is strictly less than the algebraic multiplicity.</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"471374\"></a><div itemprop=\"text\">\\begin{equation}<br/> \\text { Geometric multiplicity &lt;= Algebraic multiplicity. }<br/> \\end{equation}</div><br><br><small>Source: <a href=\"https://gateoverflow.in/471373/go-classes-dpp-linear-algebra-eigen-value-university-of-calicut\" target=\"_blank\">GATE Overflow #471373</a></small></div>"
        }
    ]
});

registerTest({
    "name": "DPP 43 - Engineering Mathematics (Eigenvalues & Eigenvectors - Part 7)",
    "testLabel": "DPP 43",
    "testType": "DPP",
    "bracket": "Eigenvalues & Eigenvectors - Part 7",
    "subject": "em",
    "series": "cse-dpp-2027",
    "date": "Nov 03, 2026",
    "duration": "15 Min",
    "totalMarks": 4,
    "topicsCovered": "Eigenvalues & Eigenvectors (Practice Set 7)",
    "questions": [
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Suppose $A$ is a $3 \\times 3$ matrix with eigenvalues 0,2 and 7 . Then</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$A$ must be invertible</span>",
                "<span style=\"display: inline;\">A must be non-invertible</span>",
                "<span style=\"display: inline;\">Not enough information to tell</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"471723\"></a><div itemprop=\"text\">product of the eigen values give us the determinant and hence the determinat is zero .<br/> as we know for the matrix inverse to be exist it must be non singular ( determinant should be non zero )<br/> <br/> non singular - determinant is non zero<br/> singular - determinant is zero<br/> <br/> hence it will be not be invertible</div><br><br><small>Source: <a href=\"https://gateoverflow.in/471369/go-classes-dpp-linear-algebra-eigen-value-binghamton\" target=\"_blank\">GATE Overflow #471369</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>If A and B are square matrices of the same order, then $\\operatorname{tr}(A B)=$</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\operatorname{tr}(A+B)$<br/></span>",
                "<span style=\"display: inline;\">$\\operatorname{tr}(A) \\operatorname{tr}(B)$<br/></span>",
                "<span style=\"display: inline;\">$\\operatorname{tr}(B A)$<br/></span>",
                "<span style=\"display: inline;\">$\\operatorname{tr}(A)+\\operatorname{tr}(B)$</span>"
            ],
            "answer": "C",
            "solution": "<div class=\"solution-content\"><a name=\"470906\"></a><div itemprop=\"text\">Matrices AB and BA always share the nonzero eigenvalues. Since the sum of the eigenvalues of a matrix equals its trace, AB and BA will have the same sum of eigenvalues. Consequently, their traces will also be equal.<br/> Option C is the answer.</div><br><br><small>Source: <a href=\"https://gateoverflow.in/470905/go-classes-dpp-linear-algebra-eigen-value-binghamton\" target=\"_blank\">GATE Overflow #470905</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Is 1 an eigenvalue of the matrix</p><p>$$<br/>\\left[\\begin{array}{lll}<br/>3 &amp; 2 &amp; 4 \\\\<br/>6 &amp; 6 &amp; 0 \\\\<br/>0 &amp; 1 &amp; 4<br/>\\end{array}\\right]<br/>$$</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">Yes</span>",
                "<span style=\"display: inline;\">No</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"470900\"></a><div itemprop=\"text\">To determine if 1 is an eigenvalue of the matrix<br/> <br/> $$<br/> A=\\left[\\begin{array}{lll}<br/> 3 &amp; 2 &amp; 4 \\\\<br/> 6 &amp; 6 &amp; 0 \\\\<br/> 0 &amp; 1 &amp; 4<br/> \\end{array}\\right]<br/> $$<br/> <br/> we compute $A-I$ :<br/> <br/> $$<br/> A-I=\\left[\\begin{array}{lll}<br/> 2 &amp; 2 &amp; 4 \\\\<br/> 6 &amp; 5 &amp; 0 \\\\<br/> 0 &amp; 1 &amp; 3<br/> \\end{array}\\right]<br/> $$<br/> <br/> Now calculate the determinant:<br/> <br/> $$<br/> \\operatorname{det}(A-I)=\\left|\\begin{array}{lll}<br/> 2 &amp; 2 &amp; 4 \\\\<br/> 6 &amp; 5 &amp; 0 \\\\<br/> 0 &amp; 1 &amp; 3<br/> \\end{array}\\right|=2(15)-2(18)+4(6)=30-36+24=18<br/> $$<br/> <br/> Since the determinant is not zero, 1 is not an eigenvalue.</div><br><br><small>Source: <a href=\"https://gateoverflow.in/470899/go-classes-dpp-linear-algebra-eigen-value-binghamton\" target=\"_blank\">GATE Overflow #470899</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Which of the following vectors is an eigenvector for the matrix</p><p>$$<br/>\\left[\\begin{array}{ll}<br/>2 &amp; 1 \\\\<br/>0 &amp; \\frac{1}{2}<br/>\\end{array}\\right]<br/>$$</p><p>with eigenvalue $\\frac{1}{2}$ ?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\left[\\begin{array}{l}1 \\\\ 0\\end{array}\\right]$</span>",
                "<span style=\"display: inline;\">$\\left[\\begin{array}{l}0 \\\\ 1\\end{array}\\right]$</span>",
                "<span style=\"display: inline;\">$\\left[\\begin{array}{c}-\\frac{2}{3} \\\\ 1\\end{array}\\right]$</span>",
                "<span style=\"display: inline;\">$\\left[\\begin{array}{l}1 \\\\ \\frac{2}{3}\\end{array}\\right]$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"470898\"></a><div itemprop=\"text\">Given matrix:<br/> <br/> $$<br/> A=\\left[\\begin{array}{ll}<br/> 2 &amp; 1 \\\\<br/> 0 &amp; \\frac{1}{2}<br/> \\end{array}\\right]<br/> $$<br/> <br/> For the eigenvalue $d=\\frac{1}{2}$, we need to find the eigenvector $x$.<br/> Equation:<br/> <br/> $$<br/> \\begin{aligned}<br/> &amp; \\left(A-\\frac{1}{2} I\\right) x=0 \\\\<br/> &amp; {\\left[\\begin{array}{cc}<br/> 3 / 2 &amp; 1 \\\\<br/> 0 &amp; 0<br/> \\end{array}\\right] x=0}<br/> \\end{aligned}<br/> $$<br/> <br/> Let $x=\\left[\\begin{array}{l}x_1 \\\\ x_2\\end{array}\\right]$, then:<br/> <br/> $$<br/> \\frac{3}{2} x_1+x_2=0<br/> $$<br/> <br/> Let $x_2=k$, then:<br/> <br/> $$<br/> x_1=-\\frac{2 k}{3}<br/> $$<br/> <br/> Therefore, the eigenvector $x$ can be written as:<br/> <br/> $$<br/> x=k\\left[\\begin{array}{c}<br/> -\\frac{2}{3} \\\\<br/> 1<br/> \\end{array}\\right]<br/> $$<br/> <br/> If $k=1$, the eigenvector can be written as:<br/> <br/> $$<br/> x=\\left[\\begin{array}{c}<br/> -\\frac{2}{3} \\\\<br/> 1<br/> \\end{array}\\right]<br/> $$<br/> <br/> Thus, the eigenvector corresponding to the eigenvalue $d=\\frac{1}{2}$ is:<br/> <br/> $$<br/> \\left[\\begin{array}{c}<br/> -\\frac{2}{3} \\\\<br/> 1<br/> \\end{array}\\right]<br/> $$<br/> </div><br><br><small>Source: <a href=\"https://gateoverflow.in/470897/go-classes-dpp-linear-algebra-eigen-value-binghamton\" target=\"_blank\">GATE Overflow #470897</a></small></div>"
        }
    ]
});

registerTest({
    "name": "DPP 44 - Engineering Mathematics (Vector Spaces, Basis & Dimension - Part 1)",
    "testLabel": "DPP 44",
    "testType": "DPP",
    "bracket": "Vector Spaces, Basis & Dimension - Part 1",
    "subject": "em",
    "series": "cse-dpp-2027",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 13,
    "topicsCovered": "Vector Spaces, Basis & Dimension (Practice Set 1)",
    "questions": [
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"161\" data-start=\"57\">Suppose that $Q$ is a $6 \\times 9$ matrix such that every solution of the equation $Qx=0$ is of the form</p><p data-end=\"267\" data-start=\"163\">$x=a(1,0,2,-1,3,0,1,4,-2)^T+b(0,1,-1,2,0,3,-2,1,5)^T+c(2,-1,0,1,4,-3,0,2,1)^T+d(1,1,1,0,-2,2,3,-1,0)^T$,</p><p data-end=\"374\" data-start=\"269\">where $a,b,c,d \\in \\mathbb{R}$, and the four vectors are linearly independent. The rank of $Q$ is ______.</p></div></span>",
            "image": "",
            "options": [],
            "answer": "5",
            "solution": "<div class=\"solution-content\"><a name=\"528731\"></a><div itemprop=\"text\"><p data-end=\"522\" data-start=\"386\">Since every solution of $Qx=0$ is a linear combination of $4$ linearly independent vectors, the null space of $Q$ has dimension $4$.<br/><br/>So, $\\operatorname{nullity}(Q)=4$.</p><p data-end=\"613\" data-start=\"556\">Since $Q$ has $9$ columns, the rank-nullity theorem gives</p><p data-end=\"668\" data-start=\"615\">$\\operatorname{rank}(Q)+\\operatorname{nullity}(Q)=9$.</p><p data-end=\"676\" data-start=\"670\">Hence,</p><p data-end=\"707\" data-start=\"678\">$\\operatorname{rank}(Q)+4=9$,</p><p data-end=\"711\" data-start=\"709\">so</p><p data-end=\"740\" data-start=\"713\">$\\operatorname{rank}(Q)=5$.</p><p data-end=\"771\" data-start=\"742\">Therefore, the answer is $5$.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/528730/go-classes-dpp-gate-cs-linear-algebra-rank-nullity-theorem\" target=\"_blank\">GATE Overflow #528730</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\">Suppose that $Q$ is a $6\\times 8$ matrix such that every solution of the equation $Qx=0$ is of the form $x=s(1,0,-1,2,0,3,1,-2)^T+t(0,1,2,-1,1,0,4,3)^T+u(2,-1,0,1,3,-2,0,5)^T$, where $s,t,u \\in \\mathbb{R}$, and the three vectors are linearly independent. The rank of $Q$ is ______.</div></span>",
            "image": "",
            "options": [],
            "answer": "5",
            "solution": "<div class=\"solution-content\"><a name=\"528610\"></a><div itemprop=\"text\"><p data-end=\"476\" data-start=\"358\">Since every solution of $Qx=0$ is a linear combination of $3$ linearly independent vectors, the nullity of $Q$ is $3$.</p><p data-end=\"506\" data-start=\"478\">By the rank-nullity theorem,</p><p data-end=\"561\" data-start=\"508\">$\\operatorname{rank}(Q)+\\operatorname{nullity}(Q)=8$.</p><p data-end=\"566\" data-start=\"563\">So,</p><p data-end=\"597\" data-start=\"568\">$\\operatorname{rank}(Q)+3=8$,</p><p data-end=\"604\" data-start=\"599\">hence</p><p data-end=\"633\" data-start=\"606\">$\\operatorname{rank}(Q)=5$.</p><p data-end=\"664\" data-start=\"635\">Therefore, the answer is $5$.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/528609/go-classes-dpp-gate-cs-linear-algebra-rank-nullity-theorem\" target=\"_blank\">GATE Overflow #528609</a></small></div>"
        },
        {
            "marks": 2,
            "neg": 0,
            "type": "MSQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Which of the following set of vectors are linearly dependent ?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\left\\{ \\begin{bmatrix} 0 \\\\ 0 \\end{bmatrix}, \\begin{bmatrix} 2 \\\\ 1 \\end{bmatrix} \\right\\}$<br/></span>",
                "<span style=\"display: inline;\">$\\left\\{ \\begin{bmatrix} 2 \\\\ 4 \\\\ 6 \\end{bmatrix}, \\begin{bmatrix} 1 \\\\ 2 \\\\ 4 \\end{bmatrix} \\right\\}$<br/></span>",
                "<span style=\"display: inline;\">$\\left\\{ \\begin{bmatrix} 0 \\\\ 0 \\end{bmatrix}, \\begin{bmatrix} 1 \\\\ 2 \\end{bmatrix} \\right\\}$<br/></span>",
                "<span style=\"display: inline;\">$\\left\\{ \\begin{bmatrix} 1 \\\\ 2 \\\\ 3 \\end{bmatrix}, \\begin{bmatrix} 2 \\\\ 4 \\\\ 6 \\end{bmatrix},\\begin{bmatrix} 6 \\\\ 3 \\\\ 11 \\end{bmatrix} , \\begin{bmatrix} 0 \\\\ 3 \\\\ -4 \\end{bmatrix} \\right\\}$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"527859\"></a><div itemprop=\"text\">To check whether a set of vectors is linearly dependent, we use these facts:<br/> <br/> $1.$ If a set contains the zero vector, then it is linearly dependent.<br/> <br/> $2.$ Two nonzero vectors are linearly dependent only if one is a scalar multiple of the other.<br/> <br/> $3.$ Any set containing more than $n$ vectors in $\\mathbb{R}^n$ is linearly dependent.<br/> <br/> Now check each option:<br/> <br/> $A.\\ \\left\\{\\begin{bmatrix}0\\\\0\\end{bmatrix},\\begin{bmatrix}2\\\\1\\end{bmatrix}\\right\\}$<br/> <br/> This set contains the zero vector, so it is linearly dependent.<br/> <br/> $B.\\ \\left\\{\\begin{bmatrix}2\\\\4\\\\6\\end{bmatrix},\\begin{bmatrix}1\\\\2\\\\4\\end{bmatrix}\\right\\}$<br/> <br/> For two vectors to be linearly dependent, one must be a scalar multiple of the other.<br/> <br/> If $\\begin{bmatrix}2\\\\4\\\\6\\end{bmatrix} = k\\begin{bmatrix}1\\\\2\\\\4\\end{bmatrix}$, then from the first entry we get $k=2$.<br/> <br/> But then the third entry would have to satisfy $6 = 2 \\cdot 4 = 8$, which is false.<br/> <br/> So these two vectors are not scalar multiples of each other. Hence this set is linearly independent.<br/> <br/> $C.\\ \\left\\{\\begin{bmatrix}0\\\\0\\end{bmatrix},\\begin{bmatrix}1\\\\2\\end{bmatrix}\\right\\}$<br/> <br/> This set also contains the zero vector, so it is linearly dependent.<br/> <br/> $D.\\ \\left\\{\\begin{bmatrix}1\\\\2\\\\3\\end{bmatrix},\\begin{bmatrix}2\\\\4\\\\6\\end{bmatrix},\\begin{bmatrix}6\\\\3\\\\11\\end{bmatrix},\\begin{bmatrix}0\\\\3\\\\-4\\end{bmatrix}\\right\\}$<br/> <br/> These are $4$ vectors in $\\mathbb{R}^3$.<br/> <br/> Since any set of more than $3$ vectors in $\\mathbb{R}^3$ must be linearly dependent, this set is linearly dependent.<br/> <br/> Also, $\\begin{bmatrix}2\\\\4\\\\6\\end{bmatrix} = 2\\begin{bmatrix}1\\\\2\\\\3\\end{bmatrix}$, which already shows dependence.<br/> <br/> Therefore, the linearly dependent sets are $A$, $C$, and $D$.<br/> <br/> Hence, the correct answer is $\\boxed{A,\\ C,\\ \\text{and}\\ D}$.</div><br><br><small>Source: <a href=\"https://gateoverflow.in/527857/go-classes-dpp-gate-cs-linear-algebra-linear-dependence-%26-independence\" target=\"_blank\">GATE Overflow #527857</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>The set of vectors constituting an orthogonal basis in $\\mathbb{R} ^3$ is</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\begin{Bmatrix} \\begin{bmatrix} 1 \\\\ -1 \\\\ 0 \\end{bmatrix}, & \\begin{bmatrix} 1 \\\\ 1 \\\\ 0 \\end{bmatrix}, & \\begin{bmatrix} 0 \\\\ 0 \\\\ 1 \\end{bmatrix} \\end{Bmatrix}$<br/><br/></span>",
                "<span style=\"display: inline;\">$\\begin{Bmatrix} \\begin{bmatrix} \\frac{1}{\\sqrt{2}} \\\\ \\frac{1}{\\sqrt{2}} \\\\ 0 \\end{bmatrix}, & \\begin{bmatrix} 0 \\\\ 1 \\\\ 0 \\end{bmatrix}, & \\begin{bmatrix} 0 \\\\ 0 \\\\ 1 \\end{bmatrix} \\end{Bmatrix}$<br/><br/></span>",
                "<span style=\"display: inline;\">$\\begin{Bmatrix} \\begin{bmatrix} \\frac{1}{\\sqrt{2}} \\\\ \\frac{1}{\\sqrt{2}} \\\\ 0 \\end{bmatrix}, & \\begin{bmatrix} \\frac{1}{\\sqrt{2}} \\\\ -\\frac{1}{\\sqrt{2}} \\\\ 0 \\end{bmatrix} \\end{Bmatrix}$<br/><br/></span>",
                "<span style=\"display: inline;\">None of these</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"527004\"></a><div itemprop=\"text\"><p>To be an <a href=\"https://en.wikipedia.org/wiki/Orthogonal_basis\" rel=\"nofollow\" target=\"_blank\">Orthogonal Basis</a> of $\\mathbb{R}^3$, the set must satisfy two conditions:</p><ol><li>The vectors must be mutually orthogonal (or perpendicular to one another hence dot product will be zero)<br/> </li><li>Must be linearly independent.<br/> </li><li>There must be three nonzero vectors.<br/> </li></ol><p>Here in <strong>O</strong><strong>ption (A)</strong> the set of vectors are linearly independent as the matrix formed from these vectors has a non zero determinant : $\\begin{vmatrix} 1 &amp; 1 &amp; 0\\\\ -1 &amp; 1 &amp; 0\\\\ 0&amp; 0&amp; 1 \\end{vmatrix}=2$</p><p>Further if we do the dot product of any of the vectors with another it is equal to $0$ </p><p>For Example : ${\\begin{pmatrix} 1 &amp; -1 &amp; 0 \\end{pmatrix}} \\cdot {\\begin{pmatrix} 1 &amp; 1 &amp; 0 \\end{pmatrix}}=0$</p><p>Hence Option (A) forms a orthogonal basis in $\\mathbb{R}^3$</p><p>In Option (B) the vectors are not orthogonal to each other.</p><p>In Option (C) the matrix formed with the given vectors has rank $2$, hence it cannot span $\\mathbb{R}^3$<br/> </p><p>Therefore, the correct answer is $\\boxed{\\text{A}}$</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/527003/go-classes-dpp-gate-cs-da-linear-algebra-orthogonal-vectors\" target=\"_blank\">GATE Overflow #527003</a></small></div>"
        },
        {
            "marks": 2,
            "neg": 0,
            "type": "MSQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Which of the following statement(s) is(are) true?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">If $\\{v_1,v_2,v_3,v_4\\}$ is linearly independent in $\\mathbb{R}^6$, then $\\{v_1+v_2,\\;v_2+v_3,\\;v_3+v_4,\\;v_4\\}$ is linearly independent.<br/></span>",
                "<span style=\"display: inline;\">If $\\{v_1,v_2,v_3,v_4\\}$ is linearly dependent in $\\mathbb{R}^6$, then at least one of the vectors is a linear combination of the other three.<br/></span>",
                "<span style=\"display: inline;\">If $\\{v_1,v_2,v_3\\}$ is linearly independent in $\\mathbb{R}^6$ and $v_4$ is a linear combination of $v_1,v_2,v_3$, then $\\{v_1,v_2,v_3,v_4\\}$ is linearly dependent.<br/></span>",
                "<span style=\"display: inline;\">If $\\{v_1,v_2,v_3,v_4,v_5\\}$ is a linearly independent set in $\\mathbb{R}^7$, then $\\{v_1-v_5,\\;v_2-v_5,\\;v_3-v_5,\\;v_4-v_5\\}$ is linearly independent.</span>"
            ],
            "answer": [
                "B",
                "C"
            ],
            "solution": "<div class=\"solution-content\"><a name=\"526997\"></a><div itemprop=\"text\"><p>$\\textbf{A.}$ <strong>True.</strong></p><p>Suppose<br/>$$<br/>a_1(v_1+v_2)+a_2(v_2+v_3)+a_3(v_3+v_4)+a_4v_4=0.<br/>$$<br/>Then<br/>$$<br/>a_1v_1+(a_1+a_2)v_2+(a_2+a_3)v_3+(a_3+a_4)v_4=0.<br/>$$<br/>Since $\\{v_1,v_2,v_3,v_4\\}$ is linearly independent, all coefficients must be zero. So<br/>$$<br/>a_1=0,\\quad a_1+a_2=0,\\quad a_2+a_3=0,\\quad a_3+a_4=0.<br/>$$<br/>Hence<br/>$$<br/>a_1=a_2=a_3=a_4=0.<br/>$$<br/>Therefore $\\{v_1+v_2,\\;v_2+v_3,\\;v_3+v_4,\\;v_4\\}$ is linearly independent.</p><p><br/>$\\textbf{B.}$<strong> True.</strong></p><p>If $\\{v_1,v_2,v_3,v_4\\}$ is linearly dependent, then there exist scalars $c_1,c_2,c_3,c_4$, not all zero, such that<br/>$$<br/>c_1v_1+c_2v_2+c_3v_3+c_4v_4=0.<br/>$$<br/>At least one coefficient is nonzero. Suppose $c_i\\neq 0$. Then we can solve for $v_i$:<br/>$$<br/>v_i=-\\frac{1}{c_i}\\sum_{j\\ne i} c_j v_j.<br/>$$<br/>So at least one of the vectors is a linear combination of the other three.</p><p><br/>$\\textbf{C.}$ <strong>True.</strong></p><p>If $v_4$ is a linear combination of $v_1,v_2,v_3$, then there exist scalars $a,b,c$ such that<br/>$$<br/>v_4=av_1+bv_2+cv_3.<br/>$$<br/>So<br/>$$<br/>av_1+bv_2+cv_3-v_4=0.<br/>$$<br/>This is a nontrivial linear relation among $v_1,v_2,v_3,v_4$, so $\\{v_1,v_2,v_3,v_4\\}$ is linearly dependent.</p><p><br/>$\\textbf{D.}$ <strong>True.</strong></p><p>Suppose<br/>$$<br/>a_1(v_1-v_5)+a_2(v_2-v_5)+a_3(v_3-v_5)+a_4(v_4-v_5)=0.<br/>$$<br/>Then<br/>$$<br/>a_1v_1+a_2v_2+a_3v_3+a_4v_4-(a_1+a_2+a_3+a_4)v_5=0.<br/>$$<br/>Since $\\{v_1,v_2,v_3,v_4,v_5\\}$ is linearly independent, all coefficients must be zero. Hence<br/>$$<br/>a_1=a_2=a_3=a_4=0.<br/>$$<br/>Therefore $\\{v_1-v_5,\\;v_2-v_5,\\;v_3-v_5,\\;v_4-v_5\\}$ is linearly independent.</p><p><br/>So all four statements are true.</p><p>$$<br/>\\boxed{\\text{A, B, C, and D are all true.}}<br/>$$</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/526996/go-classes-dpp-gate-cs-da-linear-algebra-linear-independence-%26-dependence\" target=\"_blank\">GATE Overflow #526996</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Let $A$ be a matrix such that</p><p>$<br/>A\\begin{bmatrix}1\\\\0\\\\2\\end{bmatrix}<br/>=<br/>\\begin{bmatrix}3\\\\-1\\\\4\\end{bmatrix},<br/>\\qquad<br/>A\\begin{bmatrix}0\\\\1\\\\-1\\end{bmatrix}<br/>=<br/>\\begin{bmatrix}2\\\\5\\\\-3\\end{bmatrix},<br/>\\qquad<br/>A\\begin{bmatrix}2\\\\-1\\\\1\\end{bmatrix}<br/>=<br/>\\begin{bmatrix}7\\\\-8\\\\6\\end{bmatrix}.<br/>$</p><p><br/>Use this information to find the solution to</p><p>$$<br/>A\\mathbf{x}<br/>=<br/>\\begin{bmatrix}11\\\\-15\\\\17\\end{bmatrix}.<br/>$$</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\mathbf{x}=\\begin{bmatrix}4\\\\-2\\\\6\\end{bmatrix}$<br/><br/></span>",
                "<span style=\"display: inline;\">$\\mathbf{x}=\\begin{bmatrix}3\\\\-1\\\\5\\end{bmatrix}$<br/><br/></span>",
                "<span style=\"display: inline;\">$\\mathbf{x}=\\begin{bmatrix}5\\\\-3\\\\4\\end{bmatrix}$<br/><br/></span>",
                "<span style=\"display: inline;\">$\\mathbf{x}=\\begin{bmatrix}2\\\\1\\\\7\\end{bmatrix}$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"526993\"></a><div itemprop=\"text\">Notice that$$<br/> \\begin{bmatrix}11\\\\-15\\\\17\\end{bmatrix}<br/> =<br/> 2\\begin{bmatrix}3\\\\-1\\\\4\\end{bmatrix}<br/> -<br/> \\begin{bmatrix}2\\\\5\\\\-3\\end{bmatrix}<br/> +<br/> \\begin{bmatrix}7\\\\-8\\\\6\\end{bmatrix}.<br/> $$<br/> <br/> By linearity,$$<br/> A\\mathbf{x}<br/> =<br/> 2A\\begin{bmatrix}1\\\\0\\\\2\\end{bmatrix}<br/> -<br/> A\\begin{bmatrix}0\\\\1\\\\-1\\end{bmatrix}<br/> +<br/> A\\begin{bmatrix}2\\\\-1\\\\1\\end{bmatrix}<br/> =<br/> A\\left(<br/> 2\\begin{bmatrix}1\\\\0\\\\2\\end{bmatrix}<br/> -<br/> \\begin{bmatrix}0\\\\1\\\\-1\\end{bmatrix}<br/> +<br/> \\begin{bmatrix}2\\\\-1\\\\1\\end{bmatrix}<br/> \\right).<br/> $$<br/> <br/> So$$<br/> \\mathbf{x}<br/> =<br/> 2\\begin{bmatrix}1\\\\0\\\\2\\end{bmatrix}<br/> -<br/> \\begin{bmatrix}0\\\\1\\\\-1\\end{bmatrix}<br/> +<br/> \\begin{bmatrix}2\\\\-1\\\\1\\end{bmatrix}<br/> =<br/> \\begin{bmatrix}4\\\\-2\\\\6\\end{bmatrix}.<br/> $$<br/> <br/> Hence the correct answer is $\\boxed{\\mathbf{x}=\\begin{bmatrix}4\\\\-2\\\\6\\end{bmatrix}}.$</div><br><br><small>Source: <a href=\"https://gateoverflow.in/526992/go-classes-dpp-gate-cs-da-linear-algebra-linear-transformations\" target=\"_blank\">GATE Overflow #526992</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\">The nullity of $A=\\begin{pmatrix}2&amp;3&amp;7\\\\1&amp;1&amp;9\\\\9&amp;2&amp;x\\end{pmatrix}$ is $1$, then the value of $x$ is $\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_$.</div></span>",
            "image": "",
            "options": [],
            "answer": "158",
            "solution": "<div class=\"solution-content\"><a name=\"526828\"></a><div itemprop=\"text\">Since $A$ is a $3\\times 3$ matrix and nullity$(A)=1$, by rank-nullity theorem,<br/> <br/> $\\operatorname{rank}(A)+\\operatorname{nullity}(A)=3$<br/> <br/> $\\operatorname{rank}(A)+1=3$<br/> <br/> $\\operatorname{rank}(A)=2$<br/> <br/> So $\\det(A)=0$.<br/> <br/> Now,<br/> <br/> $\\det(A)=\\begin{vmatrix}2&amp;3&amp;7\\\\1&amp;1&amp;9\\\\9&amp;2&amp;x\\end{vmatrix}$<br/> <br/> $=2\\begin{vmatrix}1&amp;9\\\\2&amp;x\\end{vmatrix}-3\\begin{vmatrix}1&amp;9\\\\9&amp;x\\end{vmatrix}+7\\begin{vmatrix}1&amp;1\\\\9&amp;2\\end{vmatrix}$<br/> <br/> $=2(x-18)-3(x-81)+7(2-9)$<br/> <br/> $=2x-36-3x+243-49$<br/> <br/> $=158-x$<br/> <br/> Since $\\det(A)=0$,<br/> <br/> $158-x=0$<br/> <br/> $x=158$<br/> <br/> Hence, $\\boxed{x=158}$.</div><br><br><small>Source: <a href=\"https://gateoverflow.in/526827/go-classes-dpp-gate-cs-da-linear-algebra-rank-nullity-theormem\" target=\"_blank\">GATE Overflow #526827</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>If $e$ is the rank of matrix $A_{m \\times n}$, then rank of matrix $A A^{T}$ is</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$e$<br/></span>",
                "<span style=\"display: inline;\">$m-e$<br/></span>",
                "<span style=\"display: inline;\">$n-e$<br/></span>",
                "<span style=\"display: inline;\">$m+n-2 e$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"526537\"></a><div itemprop=\"text\"><p>Given that $\\operatorname{rank}(A)=e$, where $A$ is an $m\\times n$ matrix.</p><p>We have to find $\\operatorname{rank}(AA^T)$.</p><p>We use the following facts:</p><ol><li>$\\operatorname{rank}(A)=\\operatorname{rank}(A^T)$<br/> </li><li>By rank-nullity theorem,<br/><br/>$\\operatorname{rank}(M)+\\operatorname{nullity}(M)=\\text{number of columns of }M$<br/> </li></ol><p>Now consider the equation</p><p>$AA^T x=0$.<br/> </p><p>Multiply from the left by $x^T$:</p><p>$x^TAA^T x=0$<br/><br/>$\\Rightarrow (A^T x)^T(A^T x)=0$<br/> </p><p>Let $A^T x=\\begin{pmatrix}u_1\\\\u_2\\\\ \\vdots \\\\u_n\\end{pmatrix}$.</p><p>Then</p><p>$(A^T x)^T(A^T x)=u_1^2+u_2^2+\\cdots+u_n^2=0$.<br/> </p><p>Since sum of squares is zero only when each term is zero, we get</p><p>$u_1=u_2=\\cdots=u_n=0$.<br/> </p><p>Hence,</p><p>$A^T x=0$.<br/> </p><p>So every solution of $AA^T x=0$ is also a solution of $A^T x=0$.</p><p>Also, if $A^T x=0$, then clearly</p><p>$AA^T x=A0=0$.<br/> </p><p>Therefore, $N(AA^T)=N(A^T)$<br/> </p><p>$\\Rightarrow \\operatorname{nullity}(AA^T)=\\operatorname{nullity}(A^T)$.<br/><br/>Now apply rank-nullity theorem.</p><p>For the matrix $AA^T$ of order $m\\times m$,</p><p>$\\operatorname{rank}(AA^T)+\\operatorname{nullity}(AA^T)=m \\qquad ...(1)$</p><p>For the matrix $A^T$,</p><p>$\\operatorname{rank}(A^T)+\\operatorname{nullity}(A^T)=m \\qquad ...(2)$</p><p>Since<br/>$\\operatorname{nullity}(AA^T)=\\operatorname{nullity}(A^T)$,</p><p>from $(1)$ and $(2)$ we get</p><p>$\\operatorname{rank}(AA^T)=\\operatorname{rank}(A^T)$.</p><p>But</p><p>$\\operatorname{rank}(A^T)=\\operatorname{rank}(A)=e$.</p><p>Hence,</p><p>$\\boxed{\\operatorname{rank}(AA^T)=e}$.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/526536/go-classes-dpp-gate-cs-da-linear-algebra-rank-nullity-theorem\" target=\"_blank\">GATE Overflow #526536</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider the set of vectors $S=\\{v_1,v_2,v_3\\}$, where</p><p>$$v_1=\\begin{pmatrix}1\\\\0\\\\2\\end{pmatrix}, \\qquad<br/>v_2=\\begin{pmatrix}2\\\\1\\\\1\\end{pmatrix}, \\qquad<br/>v_3=\\begin{pmatrix}t\\\\1\\\\t+1\\end{pmatrix}$$</p><p>and $t$ is a parameter. Which statement is true?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$S$ is a linearly independent set of vectors for all $t$<br/></span>",
                "<span style=\"display: inline;\">$S$ is a linearly independent set of vectors exactly when $t\\ne 4$<br/></span>",
                "<span style=\"display: inline;\">$S$ is a linearly independent set of vectors exactly when $t=4$<br/></span>",
                "<span style=\"display: inline;\">$S$ is a linearly independent set of vectors exactly when $t\\ne -4$</span>"
            ],
            "answer": "B",
            "solution": "<div class=\"solution-content\"><a name=\"526533\"></a><div itemprop=\"text\"><p>To check whether the vectors are linearly independent, form the matrix whose columns are $v_1,v_2,v_3$:</p><p>$A=\\begin{pmatrix}<br/>1 &amp; 2 &amp; t\\\\<br/>0 &amp; 1 &amp; 1\\\\<br/>2 &amp; 1 &amp; t+1<br/>\\end{pmatrix}$.<br/> </p><p>The vectors are linearly independent if and only if $\\det(A)\\ne 0$.</p><p>Now,</p><p>$\\det(A)<br/>=<br/>\\begin{vmatrix}<br/>1 &amp; 2 &amp; t\\\\<br/>0 &amp; 1 &amp; 1\\\\<br/>2 &amp; 1 &amp; t+1<br/>\\end{vmatrix}$<br/> </p><p>$=<br/>1\\begin{vmatrix}<br/>1 &amp; 1\\\\<br/>1 &amp; t+1<br/>\\end{vmatrix}<br/>-2\\begin{vmatrix}<br/>0 &amp; 1\\\\<br/>2 &amp; t+1<br/>\\end{vmatrix}<br/>+t\\begin{vmatrix}<br/>0 &amp; 1\\\\<br/>2 &amp; 1<br/>\\end{vmatrix}$<br/> </p><p>$=<br/>1\\bigl(1(t+1)-1\\cdot 1\\bigr)<br/>-2\\bigl(0(t+1)-1\\cdot 2\\bigr)<br/>+t\\bigl(0\\cdot 1-1\\cdot 2\\bigr)$<br/><br/>$= \\bigl(t+1-1\\bigr)-2(0-2)+t(0-2)$<br/><br/>$= t+4-2t$</p><p>$=4-t$.</p><p>Therefore, the vectors are linearly independent exactly when</p><p>$4-t\\ne 0$</p><p>that is,</p><p>$t\\ne 4$.</p><p>Hence, the correct answer is <strong>B</strong>.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/526531/go-classes-dpp-gate-cs-da-linear-algebra-linear-independence\" target=\"_blank\">GATE Overflow #526531</a></small></div>"
        },
        {
            "marks": 2,
            "neg": 0,
            "type": "MSQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Let $\\mathrm{A}$ be an $\\mathrm{n}$ $\\times$ $\\mathrm{n}$ real matrix for which two distinct non-zero $\\mathrm{n}$-dimensional real column vectors $\\mathrm{v}_1$ and $\\mathrm{v}_2$ satisfy the relation $\\mathrm{A}{\\mathrm{v}_1} =\\mathrm{Av}_2 $.<br/><br/>Which of the folllowing statement(s) about $\\mathrm{A}$ is(are) true?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">At least one eigenvalue of $\\mathrm{A}$ is zero.<br/></span>",
                "<span style=\"display: inline;\">$\\mathrm{A}$ is not full rank.<br/></span>",
                "<span style=\"display: inline;\">Columns of $\\mathrm{A}$ are linearly independent.<br/></span>",
                "<span style=\"display: inline;\">The determinant of $\\mathrm{A}$ is zero.</span>"
            ],
            "answer": [
                "A"
            ],
            "solution": "<div class=\"solution-content\"><a name=\"526530\"></a><div itemprop=\"text\"><p>Given that $Av_1=Av_2$,<br/><br/>where $v_1$ and $v_2$ are two distinct nonzero vectors.<br/><br/>Subtracting, we get</p><p>$Av_1-Av_2=0$</p><p>which gives</p><p>$A(v_1-v_2)=0$.</p><p>Since $v_1\\neq v_2$, we have</p><p>$v_1-v_2\\neq 0$.<br/><br/>Thus, the homogeneous system $Ax=0$ has a nontrivial solution.</p><p>Hence, the null space of $A$ contains a nonzero vector, so $A$ is not invertible.</p><p>Therefore, $A$ is not full rank.</p><p>So, <strong>statement B is true</strong>.<br/><br/>Also, for an $n\\times n$ matrix, if $A$ is not invertible, then</p><p>$\\det(A)=0$.</p><p>So, <strong>statement D is true.</strong><br/><br/>Further, if $\\det(A)=0$, then $0$ is an eigenvalue of $A$.</p><p>So, <strong>statement A is true.</strong><br/><br/>Now if $A$ is not invertible, its columns cannot be linearly independent.</p><p>So, <strong>statement C is false.</strong><br/><br/>Therefore, the correct statements are $\\boxed{\\text{A, B and D are true}}$.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/526527/go-classes-dpp-gate-cs-da-linear-algebra-rank-%26-null-space\" target=\"_blank\">GATE Overflow #526527</a></small></div>"
        }
    ]
});

registerTest({
    "name": "DPP 45 - Engineering Mathematics (Vector Spaces, Basis & Dimension - Part 2)",
    "testLabel": "DPP 45",
    "testType": "DPP",
    "bracket": "Vector Spaces, Basis & Dimension - Part 2",
    "subject": "em",
    "series": "cse-dpp-2027",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 12,
    "topicsCovered": "Vector Spaces, Basis & Dimension (Practice Set 2)",
    "questions": [
        {
            "marks": 2,
            "neg": 0,
            "type": "MSQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>For the vectors</p><p>$$<br/>\\vec{v}_1=\\left(\\begin{array}{c}<br/>1 \\\\<br/>-1 \\\\<br/>0<br/>\\end{array}\\right), \\vec{v}_2=\\left(\\begin{array}{c}<br/>0 \\\\<br/>1 \\\\<br/>-1<br/>\\end{array}\\right), \\vec{v}_3=\\left(\\begin{array}{c}<br/>-1 \\\\<br/>0 \\\\<br/>1<br/>\\end{array}\\right) .<br/>$$</p><p><br/>Which of the following sets are linearly independent?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">{${\\vec{v_1}, \\vec{v_2}}$}<br/></span>",
                "<span style=\"display: inline;\">{${\\vec{v_2}, \\vec{v_3}}$}<br/></span>",
                "<span style=\"display: inline;\">{${\\vec{v_1}, \\vec{v_3}}$}<br/></span>",
                "<span style=\"display: inline;\">{${\\vec{v_1}, \\vec{v_2},\\vec{v_3}}$}</span>"
            ],
            "answer": [
                "A"
            ],
            "solution": "<div class=\"solution-content\"><a name=\"526109\"></a><div itemprop=\"text\"><ul><li>A is <strong>True: </strong>$v_1$ and $v_2$ is $LI$<br/> </li><li>B is <strong>True: </strong>$v_2$ and $v_3$ is $LI$<br/> </li><li>C is <strong>True: </strong>$v_1$ and $v_3$ is $LI$<br/> </li><li>D is <b>False : </b>we can represent $v_3 = -(v_1+v_2)$</li></ul></div><br><br><small>Source: <a href=\"https://gateoverflow.in/526108/go-classes-dpp-gate-cs-da-linear-algebra-linear-dependence-%26-independence\" target=\"_blank\">GATE Overflow #526108</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Find $T\\left[\\begin{array}{l}1 \\\\ 1\\end{array}\\right]$ if $T: \\mathbb{R}^{2} \\rightarrow \\mathbb{R}^{3}$ is a linear transformation such that<br/>$$<br/>T\\left[\\begin{array}{l}<br/>1 \\\\<br/>2<br/>\\end{array}\\right]=\\left[\\begin{array}{l}<br/>2 \\\\<br/>0 \\\\<br/>6<br/>\\end{array}\\right] \\quad \\text { and } \\quad T\\left[\\begin{array}{l}<br/>3 \\\\<br/>4<br/>\\end{array}\\right]=\\left[\\begin{array}{c}<br/>0 \\\\<br/>-2 \\\\<br/>4<br/>\\end{array}\\right]<br/>$$</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\left[\\begin{array}{l}2 \\\\ 2 \\\\ 2\\end{array}\\right]$<br/><br/></span>",
                "<span style=\"display: inline;\">$\\left[\\begin{array}{c}2 \\\\ -2 \\\\ 10\\end{array}\\right]$<br/><br/></span>",
                "<span style=\"display: inline;\">$\\left[\\begin{array}{c}1 \\\\ -1 \\\\ 5\\end{array}\\right]$<br/><br/></span>",
                "<span style=\"display: inline;\">$\\left[\\begin{array}{l}-1 \\\\ -1 \\\\ -1\\end{array}\\right]$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"526107\"></a><div itemprop=\"text\">We are given that $T:\\mathbb{R}^2 \\to \\mathbb{R}^3$ is linear, with<br/> <br/> $T\\begin{pmatrix}1\\\\2\\end{pmatrix}<br/> =<br/> \\begin{pmatrix}2\\\\0\\\\6\\end{pmatrix}\\quad$ and $\\quad T\\begin{pmatrix}3\\\\4\\end{pmatrix} = \\begin{pmatrix}0\\\\-2\\\\4\\end{pmatrix}$.<br/> <br/> We want to find $T\\begin{pmatrix}1\\\\1\\end{pmatrix}$.<br/> <br/> First express $\\begin{pmatrix}1\\\\1\\end{pmatrix}$ as a linear combination of $\\begin{pmatrix}1\\\\2\\end{pmatrix}$ and $\\begin{pmatrix}3\\\\4\\end{pmatrix}$.<br/> <br/> Let $\\begin{pmatrix}1\\\\1\\end{pmatrix}<br/> =<br/> a\\begin{pmatrix}1\\\\2\\end{pmatrix}<br/> +b\\begin{pmatrix}3\\\\4\\end{pmatrix}$.<br/> <br/> Then,<br/> <br/> <br/> $a\\begin{pmatrix}1\\\\2\\end{pmatrix}<br/> +b\\begin{pmatrix}3\\\\4\\end{pmatrix}<br/> =<br/> \\begin{pmatrix}a+3b\\\\2a+4b\\end{pmatrix}<br/> =<br/> \\begin{pmatrix}1\\\\1\\end{pmatrix}$.<br/> <br/> So we get<br/> <br/> $a+3b=1 \\hspace{1cm} ...(1)$<br/> <br/> $2a+4b=1 \\hspace{1cm} ...(2)$<br/> <br/> From $(1)$, $a=1-3b$.<br/> <br/> Substitute into $(2)$:<br/> <br/> $2(1-3b)+4b=1$<br/> <br/> $2-6b+4b=1$<br/> <br/> $2-2b=1$<br/> <br/> $-2b=-1$<br/> <br/> $b=\\frac{1}{2}$.<br/> <br/> Now,<br/> <br/> $a=1-3\\left(\\frac{1}{2}\\right)<br/> =1-\\frac{3}{2}<br/> =-\\frac{1}{2}$.<br/> <br/> Thus,<br/> <br/> $\\begin{pmatrix}1\\\\1\\end{pmatrix}<br/> =<br/> -\\frac{1}{2}\\begin{pmatrix}1\\\\2\\end{pmatrix}<br/> +\\frac{1}{2}\\begin{pmatrix}3\\\\4\\end{pmatrix}$.<br/> <br/> Using linearity of $T$,<br/> <br/> $T\\begin{pmatrix}1\\\\1\\end{pmatrix}<br/> =<br/> -\\frac{1}{2}T\\begin{pmatrix}1\\\\2\\end{pmatrix}<br/> +\\frac{1}{2}T\\begin{pmatrix}3\\\\4\\end{pmatrix}$<br/> <br/> $=<br/> -\\frac{1}{2}\\begin{pmatrix}2\\\\0\\\\6\\end{pmatrix}<br/> +\\frac{1}{2}\\begin{pmatrix}0\\\\-2\\\\4\\end{pmatrix}$<br/> <br/> $=<br/> \\begin{pmatrix}-1\\\\0\\\\-3\\end{pmatrix}<br/> +<br/> \\begin{pmatrix}0\\\\-1\\\\2\\end{pmatrix}$<br/> <br/> $=<br/> \\begin{pmatrix}-1\\\\-1\\\\-1\\end{pmatrix}$.<br/> <br/> Hence,<br/> <br/> $\\boxed{<br/> T\\begin{pmatrix}1\\\\1\\end{pmatrix}<br/> =<br/> \\begin{pmatrix}-1\\\\-1\\\\-1\\end{pmatrix}<br/> }$<br/> <br/> So the correct option is $\\boxed{\\text{D}}$.</div><br><br><small>Source: <a href=\"https://gateoverflow.in/526105/go-classes-dpp-gate-cs-da-linear-algebra-linear-transformations\" target=\"_blank\">GATE Overflow #526105</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider the rank of matrix $A$ of size $(m \\times n)$ is $(m-1)$. Then, which of the following is true?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$AA^T$ will be invertible.<br/></span>",
                "<span style=\"display: inline;\">$A$ have $(m-1)$ linearly independent rows and $(m-1)$ linearly independent column.<br/></span>",
                "<span style=\"display: inline;\">$A$ will have $m$ linearly independent rows and $n$ linearly independent columns.<br/></span>",
                "<span style=\"display: inline;\">$A$ will have $(m-1)$ linearly independent rows and $(n-1)$ independent columns.</span>"
            ],
            "answer": "B",
            "solution": "<div class=\"solution-content\"><a name=\"525969\"></a><div itemprop=\"text\"><p>Given that $\\operatorname{rank}(A)=m-1$ for a matrix $A$ of size $m\\times n$.</p><p>We know that rank of a matrix is equal to</p><ol><li>the number of linearly independent rows, and<br/> </li><li>the number of linearly independent columns.<br/> </li></ol><p>So, if $\\operatorname{rank}(A)=m-1$, then $A$ has</p><ul><li>$(m-1)$ linearly independent rows, and<br/> </li><li>$(m-1)$ linearly independent columns.</li></ul><p>Hence, option <strong>B is true.</strong><br/> </p><p>For option A:</p><p>$AA^T$ is an $m\\times m$ matrix, and</p><p>$\\operatorname{rank}(AA^T)=\\operatorname{rank}(A)=m-1$.</p><p>Since its rank is less than $m$, the matrix $AA^T$ is not invertible.</p><p>So, option <strong>A is false.</strong><br/> </p><p>For option C:</p><p>It says that $A$ has $m$ linearly independent rows and $n$ linearly independent columns.</p><p>But $\\operatorname{rank}(A)=m-1$, so this is not possible.</p><p>So, option <strong>C is false.</strong><br/> </p><p>For option D:</p><p>It says that $A$ has $(m-1)$ linearly independent rows and $(n-1)$ linearly independent columns.</p><p>But the number of linearly independent columns must be equal to the rank, that is, $m-1$, not necessarily $n-1$.</p><p>So, option <strong>D is false.</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/525968/go-classes-dpp-gate-cs-da-linear-algebra-linear-dependence-%26-independence\" target=\"_blank\">GATE Overflow #525968</a></small></div>"
        },
        {
            "marks": 2,
            "neg": 0,
            "type": "MSQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider the following three vectors:</p><p>$(1,1,1)$, $(1,-2,1)$, $(3,-3,0)$<br/> </p><p>$\\text{S1}:$ Given vectors are linearly independent.</p><p>$\\text{S2}:$ Given vectors are pairwise orthogonal.<br/> </p><p>Which of the above statements is/are true?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\text{S1}$ only.<br/></span>",
                "<span style=\"display: inline;\">$\\text{S2}$ only.<br/></span>",
                "<span style=\"display: inline;\">Both $\\text{S1}$ and $\\text{S2}$.<br/></span>",
                "<span style=\"display: inline;\">None</span>"
            ],
            "answer": [
                "A"
            ],
            "solution": "<div class=\"solution-content\"><a name=\"525847\"></a><div itemprop=\"text\">Let <br/> $v_1=(1,1,1)$, $v_2=(1,-2,1)$, $v_3=(3,-3,0)$.<br/> <br/> First check $\\text{S2}$.<br/> <br/> We compute the dot products:<br/> <br/> $v_1\\cdot v_2 = 1\\cdot 1 + 1\\cdot(-2) + 1\\cdot 1 = 1-2+1=0$<br/> <br/> $v_1\\cdot v_3 = 1\\cdot 3 + 1\\cdot(-3) + 1\\cdot 0 = 3-3+0=0$<br/> <br/> $v_2\\cdot v_3 = 1\\cdot 3 + (-2)\\cdot(-3) + 1\\cdot 0 = 3+6+0=9$<br/> <br/> Since $v_2\\cdot v_3 \\ne 0$, the vectors are not pairwise orthogonal.<br/> <br/> So $\\text{S2}$ is false.<br/> <br/> Now check $\\text{S1}$.<br/> <br/> Form the matrix with these vectors as rows:<br/> <br/> $M=\\begin{bmatrix}<br/> 1&amp;1&amp;1\\\\<br/> 1&amp;-2&amp;1\\\\<br/> 3&amp;-3&amp;0<br/> \\end{bmatrix}$<br/> <br/> Its determinant is<br/> <br/> $\\det(M)<br/> =1\\begin{vmatrix}-2&amp;1\\\\-3&amp;0\\end{vmatrix}<br/> -1\\begin{vmatrix}1&amp;1\\\\3&amp;0\\end{vmatrix}<br/> +1\\begin{vmatrix}1&amp;-2\\\\3&amp;-3\\end{vmatrix}$<br/> <br/> $=1((-2)(0)-1(-3)) -1((1)(0)-1\\cdot 3) +1((1)(-3)-(-2)(3))$<br/> <br/> $=1(3)-1(-3)+1(-3+6)$<br/> <br/> $=3+3+3=9$<br/> <br/> Since $\\det(M)\\ne 0$, the vectors are linearly independent.<br/> <br/> So $\\text{S1}$ is true.<br/> <br/> <br/> Hence, the correct answer is: $ \\boxed{\\text{S1 only}} $.</div><br><br><small>Source: <a href=\"https://gateoverflow.in/525845/go-classes-dpp-gate-cs-da-linear-algebra-linear-independence-%26-orthogonality-of-vectors\" target=\"_blank\">GATE Overflow #525845</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Let $A$ be an $m \\times n$-matrix. Consider the system of linear equations $A x=b$, where $x$ and $b$ are the column vectors with dimension $n \\times 1$ and $m \\times 1$ respectively.<br/><br/>Which of the following statements are always true:</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">Suppose $m>n$ then the rank of the augmented matrix $(A \\mid b)$ can not be larger than $m$.<br/></span>",
                "<span style=\"display: inline;\">Suppose $A$ has full $\\operatorname{rank}(\\text{i. e.}\\; \\operatorname{rank}(A)=\\min (m, n)$ ) then $A x=b$ always has a solution.<br/></span>",
                "<span style=\"display: inline;\">If $A x=b$ has a solution then $A x=0$ has a unique solution.<br/></span>",
                "<span style=\"display: inline;\">If $A x=b$ has a unique solution then $A$ has to be invertible</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"525835\"></a><div itemprop=\"text\">$\\textbf{A.}$ Suppose $m&gt;n$. Then the augmented matrix $(A\\mid b)$ has $m$ rows, so its rank cannot exceed $m$.<br/> <br/> This is always true, because for any matrix,<br/> $$<br/> \\operatorname{rank}(M)\\le \\text{number of rows of }M.<br/> $$<br/> Hence<br/> $$<br/> \\operatorname{rank}(A\\mid b)\\le m.<br/> $$<br/> <br/> So $\\textbf{A is true}.$<br/> <br/> $\\textbf{B.}$ Suppose $A$ has full rank, that is,<br/> $$<br/> \\operatorname{rank}(A)=\\min(m,n).<br/> $$<br/> This does \\emph{not} mean that $Ax=b$ has a solution for every $b$.<br/> <br/> For example, let<br/> $$<br/> A=\\begin{pmatrix}1\\\\0\\end{pmatrix},<br/> $$<br/> which is a $2\\times 1$ matrix. Then $A$ has full rank since<br/> $$<br/> \\operatorname{rank}(A)=1=\\min(2,1).<br/> $$<br/> But if<br/> $$<br/> b=\\begin{pmatrix}0\\\\1\\end{pmatrix},<br/> $$<br/> then $Ax=b$ becomes<br/> $$<br/> x\\begin{pmatrix}1\\\\0\\end{pmatrix}=\\begin{pmatrix}0\\\\1\\end{pmatrix},<br/> $$<br/> which is impossible.<br/> <br/> So $\\textbf{B is false}.$<br/> <br/> $\\textbf{C.}$ If $Ax=b$ has a solution, then $Ax=0$ has a unique solution.<br/> <br/> This is not always true. The existence of a solution to $Ax=b$ says nothing about uniqueness of the homogeneous system.<br/> <br/> For example, let<br/> $$<br/> A=\\begin{pmatrix}1&amp;0\\end{pmatrix}, \\qquad b=\\begin{pmatrix}1\\end{pmatrix}.<br/> $$<br/> Then $Ax=b$ becomes<br/> $$<br/> x_1=1,<br/> $$<br/> so it has solutions. But the homogeneous system<br/> $$<br/> Ax=0<br/> $$<br/> gives<br/> $$<br/> x_1=0,<br/> $$<br/> while $x_2$ is free. So there are infinitely many solutions:<br/> $$<br/> x=\\begin{pmatrix}0\\\\t\\end{pmatrix}, \\qquad t\\in\\mathbb{R}.<br/> $$<br/> <br/> So $\\textbf{C is false}$.<br/> <br/> $\\textbf{D.}$ If $Ax=b$ has a unique solution, then $A$ has to be invertible.<br/> <br/> This is also false, because a rectangular matrix can give a unique solution for a particular $b$.<br/> <br/> For example, let<br/> $$<br/> A=\\begin{pmatrix}1\\\\0\\end{pmatrix}, \\qquad b=\\begin{pmatrix}1\\\\0\\end{pmatrix}.<br/> $$<br/> Then $Ax=b$ becomes<br/> $$<br/> x\\begin{pmatrix}1\\\\0\\end{pmatrix}=\\begin{pmatrix}1\\\\0\\end{pmatrix},<br/> $$<br/> so the unique solution is $x=1$.<br/> <br/> However, $A$ is a $2\\times 1$ matrix, so it is not even square, hence it cannot be invertible.<br/> <br/> So $\\textbf{D is false}$.<br/> <br/> <br/> <br/> The correct choice is $\\boxed{\\text{A only}}$.</div><br><br><small>Source: <a href=\"https://gateoverflow.in/525834/go-classes-dpp-gate-cs-da-linear-algebra-linear-dependence-%26-independence\" target=\"_blank\">GATE Overflow #525834</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>If $M$ is a square matrix with a zero determinant, which of the following assertion(s) is(are) correct?</p><p><strong>S1:</strong> Each row of $M$ can be represented as a linear combination of the other rows<br/><br/><strong>S2:</strong> Each column of $M$ can be represented as a linear combination of the other columns<br/><br/><strong>S3:</strong> $MX = 0$ has a nontrivial solution<br/><br/><strong>S4:</strong> $M$ has an inverse<br/> </p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$S3$<br/></span>",
                "<span style=\"display: inline;\">$S1$ and $S4$<br/></span>",
                "<span style=\"display: inline;\">$S1$ and $S3$<br/></span>",
                "<span style=\"display: inline;\">$S1, S2$ and $S3$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"525122\"></a><div itemprop=\"text\"><meta/><meta content=\"width=device-width, initial-scale=1.0\"/><p>Let's understand this using three simple examples:</p><p> </p><table><tbody><tr><th> </th><th class=\"example\"> </th><th class=\"example\"> </th><th class=\"example\">\\[<br/>\\begin{array}{|c|c|c|c|}<br/>\\hline<br/> &amp; \\text{Example 1} &amp; \\text{Example 2} &amp; \\text{Example 3} \\\\<br/>\\hline<br/>\\text{Suppose we have:} &amp; v_1 + 2v_2 + v_3 = 0 &amp; v_1 + v_2 + 0v_3 = 0 &amp; 0v_1 + 2v_2 + 6v_3 = 0 \\\\<br/>\\hline<br/>\\text{Can we say} &amp; \\text{Yes, because } v_3 &amp; \\text{Yes, because } v_2 &amp; \\text{Yes, because } v_2 = -3v_3, \\\\<br/>v_1, v_2, v_3 &amp; \\text{is a linear combination} &amp; \\text{is a linear combination} &amp; \\text{showing } v_2 \\\\<br/>\\text{are linearly dependent?} &amp; \\text{of others:} &amp; \\text{of others:} &amp; \\text{is a linear combination} \\\\<br/>\\hline<br/>\\text{Represent:} &amp; v_3 = -(v_1 + 2v_2) &amp; v_2 = -(v_1 + 0v_3) &amp; v_2 = -3v_3 \\\\<br/> &amp; &amp; \\text{or} \\quad v_2 = -v_1 &amp; \\\\<br/>\\hline<br/>\\end{array}<br/>\\]</th></tr></tbody></table><p> </p><p>As we can see, if we can represent <strong>any</strong> of the vectors as a linear combination of others, then we say the vectors are linearly dependent.</p><p>Now, let's take Example 2 and 3 again:</p><div class=\"note\"><p><strong>In Example 2:</strong> Can we represent v<sub>3</sub> as a linear combination of the other vectors?</p><div class=\"answer\"><p><strong>Answer:</strong> No</p><p>This is fine. As long as we have at least one vector that can be represented as a linear combination of the others, we are good to go.</p></div></div><div class=\"note\"><p><strong>In Example 3:</strong> Can we represent v<sub>1</sub> as a linear combination of the other vectors?</p><div class=\"answer\"><p><strong>Answer:</strong> No</p><p>This is fine too.</p></div></div><p>However, in S1 and S2, the statement says \"ALL,\" which makes both S1 and S2 false.</p><p><strong>S3:</strong> MX=0 has a nontrivial solution</p><div class=\"answer\"><p><strong>Answer:</strong> This is TRUE. Because if M has zero determinant, it means rows of M are linearly dependent, hence there are infinitely many solutions.</p></div><p><strong>S4:</strong> M has an inverse</p><div class=\"answer\"><p><strong>Answer:</strong> This is False because det(M) = 0</p></div></div><br><br><small>Source: <a href=\"https://gateoverflow.in/525121/go-classes-dpp-gate-cs-da-linear-algebra-linear-dependence-%26-independence\" target=\"_blank\">GATE Overflow #525121</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Let</p><p>$$<br/>A=\\left[\\begin{array}{lll}<br/>1 &amp; 1 &amp; 1 \\\\<br/>2 &amp; 2 &amp; 3 \\\\<br/>x &amp; y &amp; z<br/>\\end{array}\\right]<br/>$$</p><p>It is given that the set of row vectors of $A$ is linearly dependent.<br/><br/>Let $V$ be the set of all vectors $(x, y, z) \\in \\mathbb{R}^3$ that satisfy this condition.<br/><br/>What is the maximum number of linearly independent vectors that can be chosen from the set $V$ ?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$0$<br/></span>",
                "<span style=\"display: inline;\">$1$<br/></span>",
                "<span style=\"display: inline;\">$2$<br/></span>",
                "<span style=\"display: inline;\">$3$</span>"
            ],
            "answer": "C",
            "solution": "<div class=\"solution-content\"><a name=\"524504\"></a><div itemprop=\"text\"><p><strong>Given:</strong> Row vectors (1,1,1), (2,2,3), (x,y,z) are linearly dependent, so (x,y,z) must lie in the span of the first two rows.</p><p>This means the following system must be consistent:</p><p>\\[ \\alpha_1 \\begin{bmatrix}1\\\\1\\\\1\\end{bmatrix} + \\alpha_2 \\begin{bmatrix}2\\\\2\\\\3\\end{bmatrix} = \\begin{bmatrix}x\\\\y\\\\z\\end{bmatrix} \\]</p><p>Setting up the augmented matrix and row reducing:</p><p>\\[ \\begin{bmatrix}1 &amp; 2 &amp; x \\\\ 1 &amp; 2 &amp; y \\\\ 1 &amp; 3 &amp; z\\end{bmatrix} \\xrightarrow{R_2 \\leftarrow R_2-R_1,\\ R_3 \\leftarrow R_3-R_1} \\begin{bmatrix}1 &amp; 2 &amp; x \\\\ 0 &amp; 0 &amp; y-x \\\\ 0 &amp; 1 &amp; z-x\\end{bmatrix} \\xrightarrow{R_2 \\leftrightarrow R_3} \\begin{bmatrix}1 &amp; 2 &amp; x \\\\ 0 &amp; 1 &amp; z-x \\\\ 0 &amp; 0 &amp; y-x\\end{bmatrix} \\]</p><p>For consistency, the last row requires:</p><p>\\[ y - x = 0 \\implies x = y \\]</p><p>Therefore: \\( V = \\{(x,y,z) \\in \\mathbb{R}^3 : x = y\\} \\), which is a <strong>plane through the origin</strong>.</p><p>\\[ \\dim(V) = 2 \\]</p><p>Hence the maximum number of linearly independent vectors from V is <strong>2 (Option C)</strong>.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/524484/go-classes-dpp-gate-cs-da-linear-algebra-linear-dependence-%26-independence\" target=\"_blank\">GATE Overflow #524484</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>True or false: If the columns of a matrix $A$ are linearly independent, then the rows of $A$ must also be linearly independent.<br/><br/>NOTE:- <b id=\"docs-internal-guid-5fc6ab84-7fff-5f08-c54d-35ab0bd0648e\">give answer as $0$ if statement is false else give answer as $1$</b></p></div></span>",
            "image": "",
            "options": [],
            "answer": "523852",
            "solution": "<div class=\"solution-content\"><a name=\"523853\"></a><div itemprop=\"text\">It is not always true,one counter example is that a matrix can have $1$ column and multiple rows. But all rows can't be LI right, so the given statement is not necessarily true.<br/> <br/> Another counterexample is a $(3\\times 2)$ matrix with independent columns. Its $3$ rows are vectors in $(\\mathbb{R}^2)$, so they cannot all be linearly independent.</div><br><br><small>Source: <a href=\"https://gateoverflow.in/523852/go-classes-dpp-gate-cs-da-linear-algebra-linear-independence\" target=\"_blank\">GATE Overflow #523852</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Let $S=\\left\\{v_1, v_2, v_3, v_4\\right\\} \\subset \\mathbb{R}^3$.<br/><br/>Suppose:</p><p>How many distinct $3$-element subsets of $S$ are linearly independent?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$v_1, v_2, v_3$ are linearly independent.<br/></span>",
                "<span style=\"display: inline;\">$v_4=v_1+2 v_2-v_3$.<br/></span>"
            ],
            "answer": "523846",
            "solution": "<div class=\"solution-content\"><a name=\"523850\"></a><div itemprop=\"text\"><p>Since $v_1, v_2, v_3$ are independent, none of them can be written using the other two.<br/>Also, $v_4=v_1+2 v_2-v_3$ uses all three of $v_1, v_2, v_3$, so $v_4$ is not in the span of any two of them.</p><p>Therefore every $3$-element subset is linearly independent.</p><p>Since there are $4$ vectors, the number of $3$-element subsets is</p><p>$$<br/>\\binom{4}{3}=4<br/>$$ They are:</p><ol><li>$\\left\\{v_1, v_2, v_3\\right\\}$ : This is already given as linearly independent.<br/> </li><li>$\\left\\{v_1, v_2, v_4\\right\\}$ : If this set were linearly dependent, then \\(v_4\\) would have to lie in the span of \\(v_1\\) and \\(v_2\\).<br/>But $v_4=v_1+2v_2-v_3$, which contains the term \\(-v_3\\). Hence \\(v_4\\) cannot be expressed using only \\(v_1\\) and \\(v_2\\).<br/>Therefore, \\(\\{v_1,v_2,v_4\\}\\) is linearly independent.<br/> </li><li>$\\left\\{v_1, v_3, v_4\\right\\}$ : If this set were linearly dependent, then \\(v_4\\) would have to lie in the span of \\(v_1\\) and \\(v_3\\).<br/>But $v_4=v_1+2v_2-v_3,$ which contains the term \\(2v_2\\). Hence \\(v_4\\) cannot be expressed using only \\(v_1\\) and \\(v_3\\).<br/>Therefore, \\(\\{v_1,v_3,v_4\\}\\) is linearly independent.<br/> </li><li>$\\left\\{v_2, v_3, v_4\\right\\}$ : If this set were linearly dependent, then \\(v_4\\) would have to lie in the span of \\(v_2\\) and \\(v_3\\).<br/>But $v_4=v_1+2v_2-v_3,$ which contains the term \\(v_1\\). Hence \\(v_4\\) cannot be expressed using only \\(v_2\\) and \\(v_3\\).<br/>Therefore, \\(\\{v_2,v_3,v_4\\}\\) is linearly independent.</li></ol></div><br><br><small>Source: <a href=\"https://gateoverflow.in/523846/go-classes-dpp-gate-cs-da-linear-algebra-linear-independence\" target=\"_blank\">GATE Overflow #523846</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Let $S \\subseteq \\mathbb{R}^n$ be a finite set with $|S| \\geq n$. Consider the following statements:</p><p><strong>Statement I : </strong>The set $S$ is linearly dependent if there exists a vector $u \\in S$ such that $u$ can be expressed as a linear combination of vectors in $S$.<br/><br/><strong>Statement II : </strong>If $|S|&gt;n$, then the vectors of $S$ are linearly dependent.<br/><br/>Which one of the following is correct?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\"><p data-end=\"638\" data-start=\"420\">Both Statement I and Statement II are true</p></span>",
                "<span style=\"display: inline;\"><p data-end=\"638\" data-start=\"420\">Statement I is true, but Statement II is false</p></span>",
                "<span style=\"display: inline;\"><p data-end=\"638\" data-start=\"420\">Statement I is false, but Statement II is true</p></span>",
                "<span style=\"display: inline;\"><p data-end=\"638\" data-start=\"420\">Both Statement I and Statement II are false</p></span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"523835\"></a><div itemprop=\"text\"><p data-end=\"983\" data-start=\"820\"><strong data-end=\"845\" data-start=\"820\">Statement I is False.</strong><br data-end=\"848\" data-start=\"845\"/>As written, it says $u$ can be expressed as a linear combination of vectors in $S$. But any vector $u \\in S$ can always be written as</p><p>$$u = 1\\cdot u,$$</p><p data-end=\"1232\" data-start=\"1012\">which is a linear combination of vectors in $S$. This does <strong data-end=\"1078\" data-start=\"1071\">not</strong> imply linear dependence.<br data-end=\"1106\" data-start=\"1103\"/>The statement would be true only if it said that $u$ can be written as a linear combination of the <strong data-end=\"1216\" data-start=\"1207\">other</strong> vectors in $S$.<br/><br/><strong data-end=\"1261\" data-start=\"1236\">Statement II is True.</strong><br data-end=\"1264\" data-start=\"1261\"/>In $\\mathbb{R}^n$, any set containing more than $n$ vectors must be linearly dependent.<br/><br/>So, <strong data-end=\"1408\" data-start=\"1359\">Statement I is false and Statement II is true</strong>.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/523831/go-classes-dpp-gate-cs-da-linear-algebra-linear-dependence-%26-independence\" target=\"_blank\">GATE Overflow #523831</a></small></div>"
        }
    ]
});

registerTest({
    "name": "DPP 46 - Engineering Mathematics (Vector Spaces, Basis & Dimension - Part 3)",
    "testLabel": "DPP 46",
    "testType": "DPP",
    "bracket": "Vector Spaces, Basis & Dimension - Part 3",
    "subject": "em",
    "series": "cse-dpp-2027",
    "date": "Nov 03, 2026",
    "duration": "15 Min",
    "totalMarks": 4,
    "topicsCovered": "Vector Spaces, Basis & Dimension (Practice Set 3)",
    "questions": [
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Let the following sets of vectors be given:</p><p><br/>Which of the following is correct regarding linear dependence?</p><p><strong>Given Details:</strong></p><ul><li>All three sets (a), (b), and (c) are linearly independent</li><li>Only set (c) is linearly independent</li><li>Sets (a) and (c) are linearly independent, but (b) is dependent</li><li>Sets (a) and (b) are linearly dependent, but (c) is independent</li></ul></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\vec{v}_1=\\left(\\begin{array}{c}1 \\\\ -1 \\\\ 1\\end{array}\\right), \\vec{v}_2=\\left(\\begin{array}{l}1 \\\\ 2 \\\\ 3\\end{array}\\right), \\vec{v}_3=\\left(\\begin{array}{l}0 \\\\ 0 \\\\ 1\\end{array}\\right)$</span>",
                "<span style=\"display: inline;\">$\\vec{v}_1=\\binom{1}{2}, \\vec{v}_2=\\binom{3}{1}, \\vec{v}_3=\\binom{-1}{-1}$</span>",
                "<span style=\"display: inline;\">$\\vec{v}_1=\\left(\\begin{array}{l}1 \\\\ 0 \\\\ 1\\end{array}\\right), \\vec{v}_2=\\left(\\begin{array}{l}0 \\\\ 1 \\\\ 0\\end{array}\\right)$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"473912\"></a><div itemprop=\"text\">$$<br/> A=\\left[\\begin{array}{ccc}<br/> 1 &amp; 1 &amp; 0 \\\\<br/> -1 &amp; 2 &amp; 0 \\\\<br/> 1 &amp; 3 &amp; 1<br/> \\end{array}\\right], \\quad \\operatorname{det}(A)=3 \\neq 0<br/> $$<br/> <br/> $\\Rightarrow$ Vectors are linearly independent.<br/> Set (b):<br/> 3 vectors in $\\mathbf{R}^2 \\Rightarrow$ Always linearly dependent.<br/> Set (c):<br/> <br/> $$<br/> \\vec{v}_1=\\left[\\begin{array}{l}<br/> 1 \\\\<br/> 0 \\\\<br/> 1<br/> \\end{array}\\right], \\quad \\vec{v}_2=\\left[\\begin{array}{l}<br/> 0 \\\\<br/> 1 \\\\<br/> 0<br/> \\end{array}\\right]<br/> $$<br/> <br/> Clearly linearly independent (not scalar multiples).</div><br><br><small>Source: <a href=\"https://gateoverflow.in/473911/go-classes-dpp-linear-algebra-linear-independence-new-york-university\" target=\"_blank\">GATE Overflow #473911</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Which of the following statements are not true?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">There is a $4 \\times 4$ matrix $A$ of rank 3 such that the system $A \\vec{x}=\\overrightarrow{0}$ has a unique solution.<br/></span>",
                "<span style=\"display: inline;\">A system with 4 equations and 3 unknowns is always inconsistent.<br/></span>",
                "<span style=\"display: inline;\">If the matrices $A$ and $B$ are both invertible, then $A+B$ must be invertible as well.<br/></span>",
                "<span style=\"display: inline;\">If a square matrix $A$ is diagonalizable, then $A$ must have $n$ linearly independent eigenvectors.</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"473910\"></a><div itemprop=\"text\">(A) Not true - For a unique solution in $A \\vec{x}=\\overrightarrow{0}$, matrix $A$ must have full column rank. Rank $3&lt;4 \\Rightarrow$ nontrivial solution exists.<br/> <br/> (B) Not true - A system with 4 equations and 3 unknowns can be consistent if the constant vector lies in the column space of the coefficient matrix. Not always inconsistent.<br/> <br/> (C) Not true - Invertibility of $A$ and $B$ does not imply invertibility of $A+B$. Example: $A=I, B=-I \\Rightarrow$ $A+B=0$.<br/> <br/> (D) True - A matrix is diagonalizable iff it has $n$ linearly independent eigenvectors for an $n \\times n$ matrix.</div><br><br><small>Source: <a href=\"https://gateoverflow.in/473909/go-classes-dpp-linear-algebra-linear-independence-bernstein\" target=\"_blank\">GATE Overflow #473909</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>If A is a matrix with n columns, then</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\operatorname{rank}(\\mathrm{A})+\\operatorname{nullity}(\\mathrm{A})=\\mathrm{n}$</span>",
                "<span style=\"display: inline;\">$\\operatorname{rank}(\\mathrm{A})-\\operatorname{nullity}(\\mathrm{A})=\\mathrm{n}$</span>",
                "<span style=\"display: inline;\">$\\operatorname{rank}(\\mathrm{A})+\\operatorname{nullity}(\\mathrm{A})=2 \\mathrm{n}$</span>",
                "<span style=\"display: inline;\">$\\operatorname{rank}(\\mathrm{A})-\\operatorname{nullity}(\\mathrm{A})=\\mathrm{n} / 2$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"471771\"></a><div itemprop=\"text\">A</div><br><br><small>Source: <a href=\"https://gateoverflow.in/471761/go-classes-dpp-linear-algebra-determinant-binghamton\" target=\"_blank\">GATE Overflow #471761</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>True or false: If the columns of a matrix $A$ are linearly independent, then the rows of $A$ must also be linearly independent.</p><div>NOTE:- <b id=\"docs-internal-guid-5fc6ab84-7fff-5f08-c54d-35ab0bd0648e\">give answer as 0 if statement is false else give answer as 1</b></div></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">True</span>",
                "<span style=\"display: inline;\">False</span>"
            ],
            "answer": "471375",
            "solution": "<div class=\"solution-content\"><a name=\"471720\"></a><div itemprop=\"text\">the answer will be TRUE in case of square matrix .<br/> but if we take non square matrix then it will be False .( in the question not given about square matrix hence answer will be false ) <br/> <br/> lets take an example of 5*3 matrix and assume that 3 columns are linearly independent . now as we know it is R^3 space so we cannot have more than 3 linearly independent vectors so we can atmost have 3 lineraly independent rows . hence the rest of the two rows will be linearly dependent making whole set linearly dependent .</div><br><br><small>Source: <a href=\"https://gateoverflow.in/471375/go-classes-dpp-linear-algebra-linear-independence-binghamton\" target=\"_blank\">GATE Overflow #471375</a></small></div>"
        }
    ]
});
