registerTest({
    "name": "DPP 01 - Engineering Mathematics (Limits, Continuity & Differentiability - Part 1)",
    "testLabel": "DPP 01",
    "testType": "DPP",
    "bracket": "Limits, Continuity & Differentiability - Part 1",
    "subject": "em",
    "series": "cse-dpp-2027",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 10,
    "topicsCovered": "Limits, Continuity & Differentiability (Practice Set 1)",
    "questions": [
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"153\" data-start=\"41\">The function $$f(x)=\\begin{cases}x\\sin\\left(\\frac{1}{x}\\right),&amp;x\\neq0\\\\\\\\0,&amp;x=0\\end{cases}$$ at $x=0$ is:</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">Continuous and differentiable<br/></span>",
                "<span style=\"display: inline;\">Continuous but not differentiable<br/></span>",
                "<span style=\"display: inline;\">Differentiable but not continuous<br/></span>",
                "<span style=\"display: inline;\">Neither continuous nor differentiable</span>"
            ],
            "answer": "B",
            "solution": "<div class=\"solution-content\"><a name=\"533354\"></a><div itemprop=\"text\"><p>We are given $f(x)=\\begin{cases}x\\sin\\left(\\frac{1}{x}\\right),&amp;x\\neq0\\\\\\\\0,&amp;x=0\\end{cases}$.</p><p>First check continuity at $x=0$.</p><p>For $x\\neq0$,</p><p>$-1\\leq\\sin\\left(\\frac{1}{x}\\right)\\leq1$</p><p>Multiplying by $|x|$ shows that $x\\sin\\left(\\frac{1}{x}\\right)$ is trapped between $-|x|$ and $|x|$.</p><p>So,</p><p>$-|x|\\leq x\\sin\\left(\\frac{1}{x}\\right)\\leq |x|$</p><p>As $x\\to0$,</p><p>$-|x|\\to0$ and $|x|\\to0$</p><p>Therefore, by the squeeze theorem,</p><p>$\\lim_{x\\to0}x\\sin\\left(\\frac{1}{x}\\right)=0$</p><p>Since $f(0)=0$, we have $\\lim_{x\\to0}f(x)=f(0)$.</p><p>So $f$ is continuous at $x=0$.</p><p>Now check differentiability at $x=0$ using the definition:</p><p>$f'(0)=\\lim_{x\\to0}\\frac{f(x)-f(0)}{x-0}$</p><p>Since $f(0)=0$,</p><p>$f'(0)=\\lim_{x\\to0}\\frac{x\\sin\\left(\\frac{1}{x}\\right)}{x}$</p><p>$f'(0)=\\lim_{x\\to0}\\sin\\left(\\frac{1}{x}\\right)$</p><p>But $\\sin\\left(\\frac{1}{x}\\right)$ does not approach one fixed value as $x\\to0$. It keeps oscillating between $-1$ and $1$.</p><p>Therefore, $f'(0)$ does not exist.</p><p>So $f$ is continuous at $x=0$, but not differentiable at $x=0$.</p><p>Answer:<strong> B.</strong> Continuous but not differentiable.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/533353/go-classes-dpp-gate-cs-da-calculus-%26-optimization-continuity-%26-differentiability\" target=\"_blank\">GATE Overflow #533353</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"213\" data-start=\"34\">Let $f:\\mathbb{R}\\to\\mathbb{R}$ be an even function. Suppose the left derivative of $f$ at $x=3$ exists and is equal to $-6$. Which of the following is necessarily true?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">The right derivative of $f$ at $x=-3$ need not exist.<br/></span>",
                "<span style=\"display: inline;\">The right derivative of $f$ at $x=-3$ exists and is equal to $-6$.<br/></span>",
                "<span style=\"display: inline;\">The right derivative of $f$ at $x=-3$ exists and is equal to $6$.<br/></span>",
                "<span style=\"display: inline;\">The left derivative of $f$ at $x=-3$ exists and is equal to $6$.</span>"
            ],
            "answer": "C",
            "solution": "<div class=\"solution-content\"><a name=\"533352\"></a><div itemprop=\"text\"><p data-end=\"540\" data-start=\"486\">Since $f$ is even, $f(-x)=f(x)$ for all $x$.</p><p data-end=\"575\" data-start=\"542\">The right derivative at $x=-3$ is</p><p data-end=\"616\" data-start=\"577\">$\\lim_{h\\to0^+}\\frac{f(-3+h)-f(-3)}{h}$</p><p data-end=\"633\" data-start=\"618\">Using evenness,</p><p data-end=\"669\" data-start=\"635\">$f(-3+h)=f(3-h)$ and $f(-3)=f(3)$.</p><p data-end=\"674\" data-start=\"671\">So,</p><p data-end=\"751\" data-start=\"676\">$\\lim_{h\\to0^+}\\frac{f(-3+h)-f(-3)}{h}=\\lim_{h\\to0^+}\\frac{f(3-h)-f(3)}{h}$</p><p data-end=\"808\" data-start=\"753\">Rewrite the denominator as a negative left-side change:</p><p data-end=\"885\" data-start=\"810\">$\\lim_{h\\to0^+}\\frac{f(3-h)-f(3)}{h}=-\\lim_{h\\to0^+}\\frac{f(3-h)-f(3)}{-h}$</p><p data-end=\"984\" data-start=\"887\">But $\\lim_{h\\to0^+}\\frac{f(3-h)-f(3)}{-h}$ is the left derivative of $f$ at $x=3$, which is $-6$.</p><p data-end=\"1041\" data-start=\"986\">Therefore, the right derivative at $x=-3$ is $-(-6)=6$.</p><p data-end=\"1119\" data-start=\"1043\">Answer: <strong>C.</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/533351/go-classes-dpp-gate-cs-da-calculus-%26-optimization-one-sided-derivatives\" target=\"_blank\">GATE Overflow #533351</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"403\" data-start=\"225\">Let $(v_n)$ be a sequence defined by $v_1=2$ and $v_{n+1}=\\frac{1}{2}\\left(v_n+\\frac{8}{v_n}\\right)$ for $n\\geq1$. If $(v_n)$ converges, then $\\lim_{n\\to\\infty}v_n$ is:</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$2$<br/></span>",
                "<span style=\"display: inline;\">$2\\sqrt2$<br/></span>",
                "<span style=\"display: inline;\">$4$<br/></span>",
                "<span style=\"display: inline;\">non-existent</span>"
            ],
            "answer": "B",
            "solution": "<div class=\"solution-content\"><a name=\"533263\"></a><div itemprop=\"text\"><p data-end=\"87\" data-start=\"0\">We are given $v_1=2$ and $v_{n+1}=\\frac{1}{2}\\left(v_n+\\frac{8}{v_n}\\right)$.</p><p data-end=\"203\" data-start=\"89\">First notice that all terms are positive. Since $v_1=2&gt;0$, and if $v_n&gt;0$, then $\\frac{8}{v_n}&gt;0$, so $v_{n+1}&gt;0$.</p><p data-end=\"247\" data-start=\"205\">Now suppose the sequence converges and let</p><p data-end=\"274\" data-start=\"249\">$$\\lim_{n\\to\\infty}v_n=L$$</p><p data-end=\"402\" data-start=\"276\">Since all terms are positive, $L\\geq0$. Also, the recurrence contains $\\frac{8}{v_n}$, so the limit cannot be $0$. Thus $L&gt;0$.</p><p data-end=\"434\" data-start=\"404\">Taking limits on both sides of</p><p data-end=\"488\" data-start=\"436\">$$v_{n+1}=\\frac{1}{2}\\left(v_n+\\frac{8}{v_n}\\right)$$</p><p data-end=\"496\" data-start=\"490\">we get</p><p data-end=\"539\" data-start=\"498\">$$L=\\frac{1}{2}\\left(L+\\frac{8}{L}\\right)$$</p><p data-end=\"568\" data-start=\"541\">Multiply both sides by $2$:</p><p data-end=\"588\" data-start=\"570\">$$2L=L+\\frac{8}{L}$$</p><p data-end=\"619\" data-start=\"590\">Subtract $L$ from both sides:</p><p data-end=\"636\" data-start=\"621\">$$L=\\frac{8}{L}$$</p><p data-end=\"654\" data-start=\"638\">Multiply by $L$:</p><p data-end=\"663\" data-start=\"656\">$$L^2=8$$</p><p data-end=\"668\" data-start=\"665\">So,</p><p data-end=\"694\" data-start=\"670\">$$L=\\pm\\sqrt8=\\pm2\\sqrt2$$</p><p data-end=\"736\" data-start=\"696\">Since $L&gt;0$, we take the positive value:</p><p data-end=\"749\" data-start=\"738\">$$\\boxed{\\therefore L=2\\sqrt2}$$</p><p data-end=\"771\" data-is-last-node=\"\" data-is-only-node=\"\" data-start=\"751\">Answer: <strong>B.</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/533262/go-classes-dpp-gate-cs-da-calculus-%26-optimization-sequence-limits\" target=\"_blank\">GATE Overflow #533262</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"171\" data-start=\"40\">At the point $x=1$, the function $f(x)=\\begin{cases}(x-1)^2\\sin\\left(\\frac{1}{x-1}\\right),&amp;x\\neq1\\\\\\\\0,&amp;x=1\\end{cases}$ is:</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">not continuous<br/></span>",
                "<span style=\"display: inline;\">continuous but not differentiable<br/></span>",
                "<span style=\"display: inline;\">differentiable, but $f'$ is not continuous at $x=1$<br/></span>",
                "<span style=\"display: inline;\">differentiable and $f'$ is continuous at $x=1$</span>"
            ],
            "answer": "C",
            "solution": "<div class=\"solution-content\"><a name=\"533254\"></a><div itemprop=\"text\"><p>We are given $f(x)=\\begin{cases}(x-1)^2\\sin\\left(\\frac{1}{x-1}\\right),&amp;x\\neq1\\\\\\\\0,&amp;x=1\\end{cases}$.</p><p>First check continuity at $x=1$.</p><p>For $x\\neq1$,</p><p>$$-1\\leq \\sin\\left(\\frac{1}{x-1}\\right)\\leq1$$</p><p>Multiplying by $(x-1)^2\\geq0$ gives</p><p>$$-(x-1)^2\\leq (x-1)^2\\sin\\left(\\frac{1}{x-1}\\right)\\leq (x-1)^2$$</p><p>As $x\\to1$, both $-(x-1)^2$ and $(x-1)^2$ go to $0$.</p><p>So by the squeeze theorem,</p><p>$$\\lim_{x\\to1}f(x)=0=f(1)$$</p><p>Therefore, $f$ is continuous at $x=1$.</p><p>Now check differentiability at $x=1$ using the definition:</p><p>$$f'(1)=\\lim_{x\\to1}\\frac{f(x)-f(1)}{x-1}$$</p><p>Since $f(1)=0$,</p><p>$$f'(1)=\\lim_{x\\to1}\\frac{(x-1)^2\\sin\\left(\\frac{1}{x-1}\\right)}{x-1}$$</p><p>$$f'(1)=\\lim_{x\\to1}(x-1)\\sin\\left(\\frac{1}{x-1}\\right)$$</p><p>Again, since $\\sin\\left(\\frac{1}{x-1}\\right)$ is bounded between $-1$ and $1$,</p><p>$$-|x-1|\\leq (x-1)\\sin\\left(\\frac{1}{x-1}\\right)\\leq |x-1|$$</p><p>Both bounds go to $0$, so</p><p>$$f'(1)=0$$</p><p>Thus, $f$ is differentiable at $x=1$.</p><p>Now check whether $f'$ is continuous at $x=1$.</p><p>For $x\\neq1$,</p><p>$$f'(x)=2(x-1)\\sin\\left(\\frac{1}{x-1}\\right)+(x-1)^2\\cos\\left(\\frac{1}{x-1}\\right)\\left(-\\frac{1}{(x-1)^2}\\right)$$</p><p>$$\\Rightarrow f'(x)=2(x-1)\\sin\\left(\\frac{1}{x-1}\\right)-\\cos\\left(\\frac{1}{x-1}\\right)$$</p><p>As $x\\to1$, the first term $2(x-1)\\sin\\left(\\frac{1}{x-1}\\right)\\to0$, but the second term $-\\cos\\left(\\frac{1}{x-1}\\right)$ keeps oscillating and has no limit.</p><p>Therefore, $\\lim_{x\\to1}f'(x)$ does not exist.</p><p>So $f$ is differentiable at $x=1$, but $f'$ is not continuous at $x=1$.</p><p>Answer: <strong>C.</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/533252/go-classes-dpp-gate-cs-da-calculus-%26-optimization-pointwise-differentiability\" target=\"_blank\">GATE Overflow #533252</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"174\" data-start=\"34\">Define $F,G:\\mathbb{R}\\to\\mathbb{R}$ by $$F(x)=\\int_0^x |t(t-2)|dt \\qquad\\text{ and }\\qquad G(x)=\\int_0^x F(t)dt$$ Which of the following is<strong> true</strong>?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$G$ is not differentiable at $x=0$ and $x=2$.<br/></span>",
                "<span style=\"display: inline;\">$G$ is differentiable for every $x$, but not twice differentiable at $x=0$ and $x=2$.<br/></span>",
                "<span style=\"display: inline;\">$G$ is twice differentiable for every $x$, but not three times differentiable at $x=0$ and $x=2$.<br/></span>",
                "<span style=\"display: inline;\">$G$ is three times differentiable for every $x$.</span>"
            ],
            "answer": "C",
            "solution": "<div class=\"solution-content\"><a name=\"533004\"></a><div itemprop=\"text\"><p>Since $F(x)=\\int_0^x |t(t-2)|dt\\quad$ and $\\quad|t(t-2)|$ is continuous for every real number $t$, the Fundamental Theorem of Calculus gives</p><p>$$F'(x)=|x(x-2)|$$</p><p>Also, since $G(x)=\\int_0^x F(t),dt$, we get</p><p>$$G'(x)=F(x)$$</p><p>Differentiating again,</p><p>$$G''(x)=F'(x)=|x(x-2)|$$</p><p>So $G$ is twice differentiable for every $x$.</p><p>Now we check whether $G$ is three times differentiable. For that, $G''(x)=|x(x-2)|$ must be differentiable.</p><p>Let $h(x)=|x(x-2)|$.</p><p>The expression inside the absolute value is $x(x-2)$, which is $0$ at $x=0$ and $x=2$.</p><p>Near $x=0$:</p><p>For $x&lt;0$, $h(x)=x^2-2x$, so $h'(x)=2x-2$, giving left derivative $-2$.</p><p>For $0&lt;x&lt;2$, $h(x)=-x^2+2x$, so $h'(x)=-2x+2$, giving right derivative $2$.</p><p>Since the left and right derivatives are different, $h$ is not differentiable at $x=0$.</p><p>Near $x=2$:</p><p>For $0&lt;x&lt;2$, $h(x)=-x^2+2x$, so $h'(x)=-2x+2$, giving left derivative $-2$.</p><p>For $x&gt;2$, $h(x)=x^2-2x$, so $h'(x)=2x-2$, giving right derivative $2$.</p><p>So $h$ is not differentiable at $x=2$ either.</p><p>Therefore, $G'''(x)$ does not exist at $x=0$ and $x=2$.</p><p>Hence, $G$ is twice differentiable for every $x$, but not three times differentiable at $x=0$ and $x=2$.</p><p>Answer:<strong> C</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/533003/go-classes-dpp-gate-cs-da-calculus-%26-optimization-differentiability\" target=\"_blank\">GATE Overflow #533003</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"128\" data-start=\"31\">Evaluate the limit $L=\\lim_{x\\to\\infty}x\\left(\\sqrt{x^2+6x+10}-\\sqrt{x^2+6x+5}\\right)$.</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$0$<br/></span>",
                "<span style=\"display: inline;\">$\\dfrac{5}{2}$<br/></span>",
                "<span style=\"display: inline;\">$5$<br/></span>",
                "<span style=\"display: inline;\">$\\infty$</span>"
            ],
            "answer": "B",
            "solution": "<div class=\"solution-content\"><a name=\"533000\"></a><div itemprop=\"text\"><p data-end=\"98\" data-start=\"0\">We need to evaluate $L=\\lim_{x\\to\\infty}x\\left(\\sqrt{x^2+6x+10}-\\sqrt{x^2+6x+5}\\right)$.</p><p data-end=\"172\" data-start=\"100\">The expression has two square roots being subtracted, so we rationalize:</p><p data-end=\"319\" data-start=\"174\">$\\Rightarrow L=\\lim_{x\\to\\infty}x\\left(\\sqrt{x^2+6x+10}-\\sqrt{x^2+6x+5}\\right)\\times\\frac{(\\sqrt{x^2+6x+10}+\\sqrt{x^2+6x+5})}{(\\sqrt{x^2+6x+10}+\\sqrt{x^2+6x+5})}$</p><p data-end=\"356\" data-start=\"321\"><br/>Using $(a-b)(a+b)=a^2-b^2$, we get:</p><p data-end=\"448\" data-start=\"358\">$\\Rightarrow L=\\lim_{x\\to\\infty}x\\times\\dfrac{(x^2+6x+10)-(x^2+6x+5)}{\\sqrt{x^2+6x+10}+\\sqrt{x^2+6x+5}}$</p><p data-end=\"473\" data-start=\"450\"><br/>Simplify the numerator:</p><p data-end=\"539\" data-start=\"475\">$\\Rightarrow L=\\lim_{x\\to\\infty}\\dfrac{5x}{\\sqrt{x^2+6x+10}+\\sqrt{x^2+6x+5}}$</p><p data-end=\"582\" data-start=\"541\">Now factor $x^2$ inside each square root:</p><p data-end=\"688\" data-start=\"584\">$\\Rightarrow L=\\lim_{x\\to\\infty}\\dfrac{5x}{x\\sqrt{1+\\dfrac{6}{x}+\\dfrac{10}{x^2}}+x\\sqrt{1+\\dfrac{6}{x}+\\dfrac{5}{x^2}}}$</p><p data-end=\"722\" data-start=\"690\"><br/>Factor $x$ from the denominator:</p><p data-end=\"840\" data-start=\"724\">$\\Rightarrow L=\\lim_{x\\to\\infty}\\dfrac{5x}{x\\left(\\sqrt{1+\\dfrac{6}{x}+\\dfrac{10}{x^2}}+\\sqrt{1+\\dfrac{6}{x}+\\dfrac{5}{x^2}}\\right)}$</p><p data-end=\"853\" data-start=\"842\">Cancel $x$:</p><p data-end=\"956\" data-start=\"855\">$\\Rightarrow L=\\lim_{x\\to\\infty}\\dfrac{5}{\\sqrt{1+\\dfrac{6}{x}+\\dfrac{10}{x^2}}+\\sqrt{1+\\dfrac{6}{x}+\\dfrac{5}{x^2}}}$</p><p data-end=\"1040\" data-start=\"958\">As $x\\to\\infty$, $\\quad \\dfrac{6}{x}\\to0$, $\\quad\\dfrac{10}{x^2}\\to0 \\quad$, and $\\quad \\dfrac{5}{x^2}\\to0$.</p><p data-end=\"1045\" data-start=\"1042\"><br/>$\\Rightarrow L=\\dfrac{5}{\\sqrt{1}+\\sqrt{1}}=\\boxed{\\dfrac{5}{2}}$<br/> </p><p data-end=\"1116\" data-is-last-node=\"\" data-is-only-node=\"\" data-start=\"1092\">Answer:<strong> B</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/532997/go-classes-dpp-gate-cs-da-calculus-%26-optimization-limits\" target=\"_blank\">GATE Overflow #532997</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"179\" data-start=\"28\">Let $f,g:[a,b]\\to\\mathbb{R}$ be continuous on $[a,b]$ and differentiable on $(a,b)$, with $f(a)=f(b)=0$. Which of the following must be true?</p><p data-end=\"231\" data-start=\"181\">Hint: Apply Rolle’s theorem to $f(x)e^{g(x)+x^2}$.</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">There exists $c\\in(a,b)$ such that $f'(c)+f(c)g'(c)+2cf(c)=0$.<br/></span>",
                "<span style=\"display: inline;\">There exists $c\\in(a,b)$ such that $f(c)+f'(c)g'(c)+2c=0$.<br/></span>",
                "<span style=\"display: inline;\">There exists $c\\in(a,b)$ such that $f'(c)+f(c)g(c)+2cf(c)=0$.<br/></span>",
                "<span style=\"display: inline;\">There exists $c\\in(a,b)$ such that $f'(c)+f(c)g'(c)+2c=0$.</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"532911\"></a><div itemprop=\"text\"><p data-end=\"41\" data-start=\"0\">Define $h(x)=f(x)e^{g(x)+x^2}$.</p><p data-end=\"182\" data-start=\"43\">Since $f$ and $g$ are continuous on $[a,b]$ and differentiable on $(a,b)$, $h$ is also continuous on $[a,b]$ and differentiable on $(a,b)$.</p><p data-end=\"207\" data-start=\"184\">Also, $f(a)=f(b)=0$, so</p><p data-end=\"234\" data-start=\"209\">$h(a)=f(a)e^{g(a)+a^2}=0$</p><p data-end=\"239\" data-start=\"236\">and</p><p data-end=\"267\" data-start=\"241\">$h(b)=f(b)e^{g(b)+b^2}=0$.</p><p data-end=\"373\" data-start=\"269\">Therefore, $h(a)=h(b)$, so Rolle’s theorem applies. Hence, there exists $c\\in(a,b)$ such that $h'(c)=0$.</p><p data-end=\"393\" data-start=\"375\">Now differentiate:</p><p data-end=\"447\" data-start=\"395\">$h'(x)=f'(x)e^{g(x)+x^2}+f(x)e^{g(x)+x^2}(g'(x)+2x)$</p><p data-end=\"493\" data-start=\"449\">$h'(x)=e^{g(x)+x^2}(f'(x)+f(x)g'(x)+2xf(x))$</p><p data-end=\"504\" data-start=\"495\">At $x=c$,</p><p data-end=\"546\" data-start=\"506\">$0=e^{g(c)+c^2}(f'(c)+f(c)g'(c)+2cf(c))$</p><p data-end=\"581\" data-start=\"548\">Since $e^{g(c)+c^2}\\neq0$, we get</p><p data-end=\"609\" data-start=\"583\">$f'(c)+f(c)g'(c)+2cf(c)=0$</p><p data-end=\"609\" data-start=\"583\">Correct Answer <strong>: A.</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/532909/go-classes-dpp-gate-cs-da-calculus-%26-optimization-rolles-theorem\" target=\"_blank\">GATE Overflow #532909</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"231\" data-start=\"54\">Let $f,g:[a,b]\\to\\mathbb{R}$ be continuous on $[a,b]$ and differentiable on $(a,b)$. Suppose $f'(x)-g'(x)=2x$ for all $x\\in(a,b)$. Which of the following must be true?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$f(x)=g(x)+x^2$ for all $x\\in[a,b]$<br/></span>",
                "<span style=\"display: inline;\">$f(x)=g(x)+x^2+c$ for all $x\\in[a,b]$ for some $c\\in\\mathbb{R}$<br/></span>",
                "<span style=\"display: inline;\">$f(x)=g(x)+2x+c$ for all $x\\in[a,b]$ for some $c\\in\\mathbb{R}$<br/></span>",
                "<span style=\"display: inline;\">There exists $c\\in[a,b]$ such that $f(c)=g(c)$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"532902\"></a><div itemprop=\"text\">Let, $h(x)=f(x)-g(x)-x^2$. <br/> <br/> $\\Rightarrow h'(x)=f'(x)-g'(x)-2x=0$. <br/> <br/> Since $h'(x)=0$ on $(a,b)$, $h$ is constant on $[a,b]$. <br/> <br/> Therefore $f(x)-g(x)-x^2=c$. <br/> <br/> $\\Rightarrow f(x)=g(x)+x^2+c$ for all $x\\in[a,b]$.</div><br><br><small>Source: <a href=\"https://gateoverflow.in/532901/go-classes-dpp-gate-cs-da-calculus-%26-optimization-mean-value-theorem\" target=\"_blank\">GATE Overflow #532901</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>For every real number $x$, a twice differentiable function $f$ satisfies $f(x)&gt;1$, $\\lim_{x\\to\\infty} f(x)=1$, $$f'(x)\\begin{cases}&gt;0, &amp; x&lt;-1\\\\ =0, &amp; x=-1\\\\ &lt;0, &amp; x&gt;-1\\end{cases}, \\qquad \\text{and} \\qquad f''(x)\\begin{cases}&lt;0, &amp; x&lt;2\\\\ =0, &amp; x=2\\\\ &gt;0, &amp; x&gt;2\\end{cases}$$. Which of the following graphs could be the graph of $f$?</p><p style=\"text-align:center\"><img alt=\"\" height=\"446\" src=\"https://cdn.mathpix.com/snip/images/-OACAjPB8nKdGjLZE4J-iYDJGNnnjX6vvc25gI-0Mb8.original.fullsize.png\" width=\"536\"/></p><p> </p></div></span>",
            "image": "https://cdn.mathpix.com/snip/images/-OACAjPB8nKdGjLZE4J-iYDJGNnnjX6vvc25gI-0Mb8.original.fullsize.png",
            "options": [],
            "answer": "1",
            "solution": "<div class=\"solution-content\"><a name=\"532766\"></a><div itemprop=\"text\"><p>Since $f(x)&gt;1$, the graph must always stay above the line $y=1$. </p><p>Since $f'(x)&gt;0$ for $x&lt;-1$ and $f'(x)&lt;0$ for $x&gt;-1$, </p><p>the graph increases before $x=-1$ and decreases after $x=-1$, </p><p>so $x=-1$ is a local maximum. </p><p>Since $f''(x)&lt;0$ for $x&lt;2$ and $f''(x)&gt;0$ for $x&gt;2$, </p><p>the graph is concave down before $x=2$ and concave up after $x=2$, </p><p>so $x=2$ is an inflection point. </p><p>Since $\\lim_{x\\to\\infty} f(x)=1$ and $f(x)&gt;1$, the graph approaches $y=1$ from above. </p><p>Only graph A satisfies all the conditions, so the answer is <strong>A.</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/532761/go-classes-dpp-gate-cs-da-calculus-%26-optimization-curve-sketching\" target=\"_blank\">GATE Overflow #532761</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>For every real number $x$, a twice differentiable function $f$ satisfies $f(x)&gt;2$, $f'(x)&lt;0$, $f''(x)&gt;0$, and $\\lim_{x\\to\\infty} f(x)=2$. Which of the following graphs could be the graph of $f$?</p><p style=\"text-align:center\"><img alt=\"\" height=\"412\" src=\"https://cdn.mathpix.com/snip/images/pxTawnffgyHp-HnY8Q_latwhcWC44QhWDtTWMqtTTH8.original.fullsize.png\" width=\"497\"/></p><p> </p></div></span>",
            "image": "https://cdn.mathpix.com/snip/images/pxTawnffgyHp-HnY8Q_latwhcWC44QhWDtTWMqtTTH8.original.fullsize.png",
            "options": [],
            "answer": "2",
            "solution": "<div class=\"solution-content\"><a name=\"532760\"></a><div itemprop=\"text\"><p>Since $f(x)&gt;2$, the graph must stay above the line $y=2$. </p><p>Since $f'(x)&lt;0$, the graph must be decreasing for all $x$. </p><p>Since $f''(x)&gt;0$, the graph must be concave up for all $x$. </p><p>Since $\\lim_{x\\to\\infty} f(x)=2$, the graph must approach the horizontal line $y=2$ from above as $x$ increases. </p><p>Only graph A satisfies all these conditions, so the answer is <strong>A.</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/532759/go-classes-dpp-gate-cs-da-calculus-%26-optimization-curve-sketching\" target=\"_blank\">GATE Overflow #532759</a></small></div>"
        }
    ]
});

registerTest({
    "name": "DPP 02 - Engineering Mathematics (Limits, Continuity & Differentiability - Part 2)",
    "testLabel": "DPP 02",
    "testType": "DPP",
    "bracket": "Limits, Continuity & Differentiability - Part 2",
    "subject": "em",
    "series": "cse-dpp-2027",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 10,
    "topicsCovered": "Limits, Continuity & Differentiability (Practice Set 2)",
    "questions": [
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"198\" data-start=\"14\">Let $f$ be differentiable near $x=2$, with $f(2)=1$ and $f'(2)=3$. Define $A(x)=\\ln(4+(f(x))^2)$. Using tangent line approximation at $x=2$, what is a reasonable estimate for $A(2.1)$?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\ln 5+\\frac{3}{25}$<br/></span>",
                "<span style=\"display: inline;\">$\\ln 5+\\frac{3}{5}$<br/></span>",
                "<span style=\"display: inline;\">$\\ln 5+\\frac{1}{10}$<br/></span>",
                "<span style=\"display: inline;\">$\\ln 5+\\frac{6}{25}$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"536310\"></a><div itemprop=\"text\"><p>Given,</p><p>$$A(x) = \\ln(4+(f(x))^2) \\implies A'(x)=\\dfrac{2\\times f(x) \\times f'(x)}{4+{(f(x))}^2}$$</p><p>According to 1st order Taylor Approximation:</p><p>$$A(x)\\approx A(2)+A'(2)(x-2)$$</p><p>Substitute the values, i,e $x=2.1$</p><p>$$A(2.1) \\approx \\ln(5)+\\frac{6(2.1-2)}{5} \\approx \\boxed{\\ln(5)+\\frac{3}{25}}$$</p><hr/><pre><span style=\"color:#d35400;\">Hence option(A) is accurate.</span></pre></div><br><br><small>Source: <a href=\"https://gateoverflow.in/532668/go-classes-dpp-gate-cs-da-calculus-%26-optimization-linear-approximation\" target=\"_blank\">GATE Overflow #532668</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"421\" data-start=\"375\">Let $F$ be continuous on $[0,15]$, and suppose</p><p data-end=\"506\" data-start=\"423\">$$\\begin{array}{|c|c|c|c|c|c|c|c|}\\hline x&amp;0&amp;2&amp;4&amp;7&amp;9&amp;12&amp;15\\\\ \\hline F(x)&amp;5&amp;1&amp;4&amp;-2&amp;3&amp;0&amp;6\\\\ \\hline \\end{array}$$</p><p data-end=\"587\" data-start=\"508\">For $0\\le x\\le15$, what is the fewest possible number of solutions to $F(x)=2$?</p></div></span>",
            "image": "",
            "options": [],
            "answer": "6",
            "solution": "<div class=\"solution-content\"><a name=\"532667\"></a><div itemprop=\"text\"><p data-end=\"191\" data-start=\"112\">ince $F$ is continuous on $[0,15]$, we can use the Intermediate Value Theorem.</p><p data-end=\"234\" data-start=\"193\">We compare each value of $F(x)$ with $2$.</p><p data-end=\"319\" data-start=\"236\">$$\\begin{array}{|c|c|c|c|c|c|c|c|}\\hline x&amp;0&amp;2&amp;4&amp;7&amp;9&amp;12&amp;15\\\\ \\hline F(x)&amp;5&amp;1&amp;4&amp;-2&amp;3&amp;0&amp;6\\\\ \\hline \\end{array}$$</p><p data-end=\"414\" data-start=\"321\">At $x=0$, $F(0)=5&gt;2$, and at $x=2$, $F(2)=1&lt;2$. So there is at least one solution in $(0,2)$.</p><p data-end=\"509\" data-start=\"416\">At $x=2$, $F(2)=1&lt;2$, and at $x=4$, $F(4)=4&gt;2$. So there is at least one solution in $(2,4)$.</p><p data-end=\"605\" data-start=\"511\">At $x=4$, $F(4)=4&gt;2$, and at $x=7$, $F(7)=-2&lt;2$. So there is at least one solution in $(4,7)$.</p><p data-end=\"701\" data-start=\"607\">At $x=7$, $F(7)=-2&lt;2$, and at $x=9$, $F(9)=3&gt;2$. So there is at least one solution in $(7,9)$.</p><p data-end=\"799\" data-start=\"703\">At $x=9$, $F(9)=3&gt;2$, and at $x=12$, $F(12)=0&lt;2$. So there is at least one solution in $(9,12)$.</p><p data-end=\"900\" data-start=\"801\">At $x=12$, $F(12)=0&lt;2$, and at $x=15$, $F(15)=6&gt;2$. So there is at least one solution in $(12,15)$.</p><p data-end=\"960\" data-start=\"902\">Therefore, the fewest possible number of solutions is $\\boxed{6}$</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/532666/go-classes-dpp-gate-cs-da-calculus-%26-optimization-intermediate-value-theorem-root-counting\" target=\"_blank\">GATE Overflow #532666</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"284\" data-start=\"14\">The graph below is the graph of $f''$, where $f$ is twice differentiable on $[0,6]$. Also, $f'(0)=-2$. </p><p style=\"text-align:center\"><img alt=\"\" height=\"197\" src=\"https://cdn.mathpix.com/snip/images/IO4q_fGX_eVFYfCzrI6bvudc8Ax-wuk8-3b5rSJbjfo.original.fullsize.png\" width=\"421\"/></p><p data-end=\"284\" data-start=\"14\">The signed areas between the graph of $f''$ and the $x$-axis are: from $0$ to $1$ is $3$, from $1$ to $3$ is $-4$, from $3$ to $5$ is $2$, and from $5$ to $6$ is $-1$.</p><p data-end=\"333\" data-start=\"286\">Which of the following statements must be true?</p></div></span>",
            "image": "https://cdn.mathpix.com/snip/images/IO4q_fGX_eVFYfCzrI6bvudc8Ax-wuk8-3b5rSJbjfo.original.fullsize.png",
            "options": [
                "<span style=\"display: inline;\">$f$ has a local minimum in $(0,1)$ and a local maximum in $(1,3)$<br/></span>",
                "<span style=\"display: inline;\">$f$ has a local maximum in $(0,1)$ and a local minimum in $(1,3)$<br/></span>",
                "<span style=\"display: inline;\">$f$ has local extrema in all four intervals $(0,1)$, $(1,3)$, $(3,5)$, and $(5,6)$<br/></span>",
                "<span style=\"display: inline;\">$f$ has no local extrema on $(0,6)$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"532664\"></a><div itemprop=\"text\"><p data-end=\"1044\" data-start=\"959\">Since the graph shown is $f''$, the signed area under $f''$ gives the change in $f'$.</p><p data-end=\"1070\" data-start=\"1046\">We are given $f'(0)=-2$.</p><p data-end=\"1139\" data-start=\"1072\">From $0$ to $1$, the signed area is $3$, so $f'(1)=f'(0)+3=-2+3=1$.</p><p data-end=\"1311\" data-start=\"1141\">Since $f'(0)&lt;0$ and $f'(1)&gt;0$, and $f''&gt;0$ on $(0,1)$, $f'$ is increasing there. Therefore, $f'$ changes from negative to positive, so $f$ has a local minimum in $(0,1)$.</p><p data-end=\"1381\" data-start=\"1313\">From $1$ to $3$, the signed area is $-4$, so $f'(3)=f'(1)-4=1-4=-3$.</p><p data-end=\"1553\" data-start=\"1383\">Since $f'(1)&gt;0$ and $f'(3)&lt;0$, and $f''&lt;0$ on $(1,3)$, $f'$ is decreasing there. Therefore, $f'$ changes from positive to negative, so $f$ has a local maximum in $(1,3)$.</p><p data-end=\"1700\" data-start=\"1555\">From $3$ to $5$, the signed area is $2$, so $f'(5)=f'(3)+2=-3+2=-1$. Since $f'$ stays negative, there is no guaranteed local extremum in $(3,5)$.</p><p data-end=\"1848\" data-start=\"1702\">From $5$ to $6$, the signed area is $-1$, so $f'(6)=f'(5)-1=-1-1=-2$. Since $f'$ stays negative, there is no guaranteed local extremum in $(5,6)$.</p><p data-end=\"1885\" data-start=\"1850\">Therefore, the correct answer is <strong>A.</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/532663/go-classes-dpp-gate-cs-da-calculus-%26-optimization-second-derivative-graph\" target=\"_blank\">GATE Overflow #532663</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"160\" data-start=\"14\">Let $f$ be a differentiable function, and suppose $f(x)&gt;0$ where needed. Define $$M(x)=\\ln\\left((x^2+1)^3\\sqrt{f(2x^3-1)}\\right)$$What is $M'(x)$?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\dfrac{6x}{x^2+1}+\\dfrac{3x^2f'(2x^3-1)}{f(2x^3-1)}$<br/><br/></span>",
                "<span style=\"display: inline;\">$\\dfrac{3x}{x^2+1}+\\dfrac{6x^2f'(2x^3-1)}{f(2x^3-1)}$<br/><br/></span>",
                "<span style=\"display: inline;\">$\\dfrac{6x}{x^2+1}+\\dfrac{f'(2x^3-1)}{2f(2x^3-1)}$<br/><br/></span>",
                "<span style=\"display: inline;\">$\\dfrac{6x}{x^2+1}+\\dfrac{3x^2f'(2x^3-1)}{(f(2x^3-1))^2}$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"532593\"></a><div itemprop=\"text\"><p data-end=\"427\" data-start=\"401\">Use logarithm rules first.</p><p data-end=\"477\" data-start=\"429\">$M(x)=\\ln\\left((x^2+1)^3\\sqrt{f(2x^3-1)}\\right)$</p><p data-end=\"523\" data-start=\"479\">$M(x)=3\\ln(x^2+1)+\\frac{1}{2}\\ln(f(2x^3-1))$</p><p data-end=\"549\" data-start=\"525\">Differentiate each part.</p><p data-end=\"605\" data-start=\"551\">The derivative of $3\\ln(x^2+1)$ is $\\frac{6x}{x^2+1}$.</p><p data-end=\"659\" data-start=\"607\">For $\\frac{1}{2}\\ln(f(2x^3-1))$, use the chain rule.</p><p data-end=\"767\" data-start=\"661\">$\\frac{d}{dx}\\left[\\frac{1}{2}\\ln(f(2x^3-1))\\right]=\\frac{1}{2}\\cdot\\frac{f'(2x^3-1)\\cdot6x^2}{f(2x^3-1)}$</p><p data-end=\"823\" data-start=\"769\">This simplifies to $\\frac{3x^2f'(2x^3-1)}{f(2x^3-1)}$.</p><p data-end=\"886\" data-start=\"825\">$\\boxed{\\therefore M'(x)=\\frac{6x}{x^2+1}+\\frac{3x^2f'(2x^3-1)}{f(2x^3-1)}}$</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/532592/go-classes-dpp-gate-cs-da-calculus-%26-optimization-logarithmic-differentiation\" target=\"_blank\">GATE Overflow #532592</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"85\" data-start=\"14\">Evaluate the limit $$\\lim_{x\\to0}\\dfrac{e^{x^2}-\\cos(2x)-3x\\sin x}{x^4}$$</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$0$<br/></span>",
                "<span style=\"display: inline;\">$\\frac{1}{3}$<br/></span>",
                "<span style=\"display: inline;\">$\\frac{1}{2}$<br/></span>",
                "<span style=\"display: inline;\">$1$</span>"
            ],
            "answer": "D",
            "solution": "<div class=\"solution-content\"><a name=\"532591\"></a><div itemprop=\"text\"><p data-end=\"183\" data-start=\"153\">Use the expansions near $x=0$.</p><p data-end=\"221\" data-start=\"185\">$e^{x^2}=1+x^2+\\frac{x^4}{2}+\\cdots$</p><p data-end=\"262\" data-start=\"223\">$\\cos(2x)=1-2x^2+\\frac{2x^4}{3}+\\cdots$</p><p data-end=\"338\" data-start=\"264\">$3x\\sin x=3x\\left(x-\\frac{x^3}{6}+\\cdots\\right)=3x^2-\\frac{x^4}{2}+\\cdots$</p><p data-end=\"355\" data-start=\"340\">Now substitute:</p><p data-end=\"491\" data-start=\"357\">$e^{x^2}-\\cos(2x)-3x\\sin x=\\left(1+x^2+\\frac{x^4}{2}\\right)-\\left(1-2x^2+\\frac{2x^4}{3}\\right)-\\left(3x^2-\\frac{x^4}{2}\\right)+\\cdots$</p><p data-end=\"546\" data-start=\"493\">The constant terms cancel and the $x^2$ terms cancel.</p><p data-end=\"628\" data-start=\"548\">The $x^4$ terms give $\\frac{x^4}{2}-\\frac{2x^4}{3}+\\frac{x^4}{2}=\\frac{x^4}{3}$.</p><p data-end=\"697\" data-start=\"630\">$\\boxed{\\therefore{\\lim_{x\\to0}\\frac{e^{x^2}-\\cos(2x)-3x\\sin x}{x^4}=\\frac{1}{3}}}$</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/532590/go-classes-dpp-gate-cs-da-calculus-%26-optimization-taylor-series-limits\" target=\"_blank\">GATE Overflow #532590</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"102\" data-start=\"14\">Let $f$ and $g$ be differentiable functions. Define $Q(x)=\\dfrac{(f(2x-1))^2}{g(x^2+1)}$.</p><p data-end=\"167\" data-start=\"104\">You are given $f(5)=3$, $f'(5)=-1$, $g(10)=2$, and $Q'(3)=-33$.</p><p data-end=\"199\" data-start=\"169\">What is the value of $g'(10)$?</p></div></span>",
            "image": "",
            "options": [],
            "answer": "10",
            "solution": "<div class=\"solution-content\"><a name=\"532589\"></a><div itemprop=\"text\"><p data-end=\"310\" data-start=\"249\">We need to differentiate $Q(x)=\\frac{(f(2x-1))^2}{g(x^2+1)}$.</p><p data-end=\"351\" data-start=\"312\">Using the quotient rule and chain rule,</p><p data-end=\"448\" data-start=\"353\">$\\Rightarrow Q'(x)=\\frac{2f(2x-1)\\cdot 2f'(2x-1)\\cdot g(x^2+1)-(f(2x-1))^2\\cdot 2xg'(x^2+1)}{(g(x^2+1))^2}$</p><p data-end=\"471\" data-start=\"450\">Now substitute $x=3$.</p><p data-end=\"530\" data-start=\"473\">Since $2(3)-1=5$ and $3^2+1=10$, we use the given values.</p><p data-end=\"593\" data-start=\"532\">$\\Rightarrow Q'(3)=\\frac{2(3)\\cdot 2(-1)\\cdot 2-(3)^2\\cdot 6g'(10)}{2^2}$</p><p data-end=\"623\" data-start=\"595\">$\\Rightarrow -33=\\frac{-24-54g'(10)}{4}$</p><p data-end=\"652\" data-start=\"625\">Multiply both sides by $4$.</p><p data-end=\"673\" data-start=\"654\">$\\Rightarrow -132=-24-54g'(10)$</p><p data-end=\"691\" data-start=\"675\">$\\Rightarrow -108=-54g'(10)$</p><p data-end=\"703\" data-start=\"693\">$\\boxed{\\therefore g'(10)=2}$</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/532588/go-classes-dpp-gate-cs-da-calculus-%26-optimization-chain-%26-quotient-rules\" target=\"_blank\">GATE Overflow #532588</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"149\" data-start=\"14\">Let $a$ and $b$ be real constants, and define $F$ by $$F(x)=\\begin{cases}2x+a, &amp; x&lt;-1 \\\\ x^2+bx+3, &amp; -1\\le x&lt;2 \\\\ ax-b, &amp; x\\ge 2\\end{cases}$$</p><p data-end=\"225\" data-start=\"151\">If $F$ is continuous for all real numbers $x$, what is the value of $a+b$?</p></div></span>",
            "image": "",
            "options": [],
            "answer": "6",
            "solution": "<div class=\"solution-content\"><a name=\"532587\"></a><div itemprop=\"text\"><p> </p><p data-end=\"372\" data-start=\"274\">For $F$ to be continuous everywhere, it must be continuous at the joining points $x=-1$ and $x=2$.</p><p data-end=\"416\" data-start=\"374\">At $x=-1$, the left side is $2(-1)+a=a-2$.</p><p data-end=\"462\" data-start=\"418\">The middle piece gives $(-1)^2+b(-1)+3=4-b$.</p><p data-end=\"498\" data-start=\"464\">So $a-2=4-b$, which gives $a+b=6$.</p><p data-end=\"549\" data-start=\"500\">At $x=2$, the middle piece gives $2^2+2b+3=7+2b$.</p><p data-end=\"580\" data-start=\"551\">The right piece gives $2a-b$.</p><p data-end=\"620\" data-start=\"582\">So $7+2b=2a-b$, which gives $2a-3b=7$.</p><p data-end=\"650\" data-start=\"622\">Now use $a+b=6$, so $a=6-b$.</p><p data-end=\"678\" data-start=\"652\">Substitute into $2a-3b=7$.</p><p data-end=\"693\" data-start=\"680\">$\\Rightarrow 2(6-b)-3b=7$</p><p data-end=\"707\" data-start=\"695\">$\\Rightarrow12-2b-3b=7$</p><p data-end=\"718\" data-start=\"709\">$\\Rightarrow 12-5b=7$</p><p data-end=\"725\" data-start=\"720\">$\\Rightarrow b=1$</p><p data-end=\"738\" data-start=\"727\">Then $a=5$.</p><p data-end=\"751\" data-start=\"740\">$\\boxed{\\therefore a+b=6}$</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/532586/go-classes-dpp-gate-cs-da-calculus-%26-optimization-piecewise-continuity\" target=\"_blank\">GATE Overflow #532586</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Let $f$ be continuous on the closed interval $[0,7]$. Some values of $f$ are shown below.</p><p>\\[<br/>\\begin{array}{|c|c|c|c|c|c|c|c|c|}<br/>\\hline<br/>x &amp; 0 &amp; 1 &amp; 2 &amp; 3 &amp; 4 &amp; 5 &amp; 6 &amp; 7 \\\\<br/>\\hline<br/>f(x) &amp; 7 &amp; k &amp; -2 &amp; 6 &amp; 0 &amp; k &amp; 8 &amp; -3\\\\<br/>\\hline<br/>\\end{array}<br/>\\]</p><p data-end=\"370\" data-start=\"269\">The equation $(f(x)-2)^2=9$ must have at least ten distinct solutions in the interval $(0,7)$ if $k=$</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$-4$<br/></span>",
                "<span style=\"display: inline;\">$-1$<br/></span>",
                "<span style=\"display: inline;\">$0$<br/></span>",
                "<span style=\"display: inline;\">$5$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"532547\"></a><div itemprop=\"text\"><p data-end=\"496\" data-start=\"423\">$(f(x)-2)^2=9$ means $f(x)-2=3$ or $f(x)-2=-3$, so $f(x)=5$ or $f(x)=-1$.</p><p data-end=\"548\" data-start=\"498\">If $k=-4$, then by the Intermediate Value Theorem:</p><p data-end=\"637\" data-start=\"550\">On $(0,1)$, $f$ goes from $7$ to $-4$, so it must hit both $5$ and $-1$: $2$ solutions.</p><p data-end=\"726\" data-start=\"639\">On $(2,3)$, $f$ goes from $-2$ to $6$, so it must hit both $-1$ and $5$: $2$ solutions.</p><p data-end=\"799\" data-start=\"728\">On $(3,4)$, $f$ goes from $6$ to $0$, so it must hit $5$: $1$ solution.</p><p data-end=\"874\" data-start=\"801\">On $(4,5)$, $f$ goes from $0$ to $-4$, so it must hit $-1$: $1$ solution.</p><p data-end=\"963\" data-start=\"876\">On $(5,6)$, $f$ goes from $-4$ to $8$, so it must hit both $-1$ and $5$: $2$ solutions.</p><p data-end=\"1052\" data-start=\"965\">On $(6,7)$, $f$ goes from $8$ to $-3$, so it must hit both $5$ and $-1$: $2$ solutions.</p><p data-end=\"1127\" data-start=\"1054\">So the total number of guaranteed distinct solutions is $2+2+1+1+2+2=10$.</p><p data-end=\"1162\" data-start=\"1129\">Therefore, the answer is A. $-4$.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/532546/go-classes-dpp-gate-cs-da-calculus-%26-optimization-intermediate-value-theorem\" target=\"_blank\">GATE Overflow #532546</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"225\" data-start=\"15\">Let $g$ be defined on the closed interval $[0,6]$ such that $g(0)=g(3)=g(6)=10$. On the open interval $(0,6)$, $g$ is continuous and strictly increasing. Which of the following statements is true?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$g$ attains neither an absolute minimum nor an absolute maximum on $[0,6]$.<br/></span>",
                "<span style=\"display: inline;\">$g$ attains an absolute minimum but not an absolute maximum on $[0,6]$.<br/></span>",
                "<span style=\"display: inline;\">$g$ attains an absolute maximum but not an absolute minimum on $[0,6]$.<br/></span>",
                "<span style=\"display: inline;\">$g$ attains both an absolute minimum and an absolute maximum on $[0,6]$.</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"532443\"></a><div itemprop=\"text\"><p>Since $g$ is strictly increasing on $(0,6)$ and $g(3)=10$, </p><p>We have $g(x)&lt;10$ for every $x\\in(0,3)$ and $g(x)&gt;10$ for every $x\\in(3,6)$.</p><p> Thus $g(0)=10$ is not a minimum, because values just to the right of $0$ can be less than $10$. </p><p>Also, $g(6)=10$ is not a maximum, because values just to the left of $6$ can be greater than $10$. </p><p>Since the interval endpoints do not give extreme values and the function is strictly increasing on $(0,6)$, no absolute minimum or absolute maximum is attained. </p><p>Therefore, the correct option is <strong>A</strong>.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/532441/go-classes-dpp-gate-cs-da-calculus-%26-optimization-extreme-value-theorem\" target=\"_blank\">GATE Overflow #532441</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"135\" data-start=\"15\">Let $q(t)=\\ln(t^2+2t+5)$. Which of the following is the definition of $q'(2)$ using the limit as $t\\to 2$?<br/> </p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$q'(2)=\\lim_{t\\to2}\\dfrac{\\ln(t^2+2t+5)-\\ln13}{t-2}$<br/><br/></span>",
                "<span style=\"display: inline;\">$q'(2)=\\lim_{t\\to0}\\dfrac{\\ln(t^2+2t+5)-\\ln13}{t-2}$<br/><br/></span>",
                "<span style=\"display: inline;\">$q'(2)=\\lim_{t\\to2}\\dfrac{\\ln(t^2+2t+5)-\\ln5}{t-2}$<br/><br/></span>",
                "<span style=\"display: inline;\">$q'(2)=\\lim_{t\\to2}\\dfrac{\\ln(t^2+2t+5)-\\ln13}{t+2}$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"532440\"></a><div itemprop=\"text\"><p>By definition, $q'(a)=\\lim_{t\\to a}\\dfrac{q(t)-q(a)}{t-a}$. </p><p>Here, $a=2$. Also, $q(2)=\\ln(2^2+2(2)+5)=\\ln13$. </p><p>Therefore, $q'(2)=\\lim_{t\\to2}\\dfrac{\\ln(t^2+2t+5)-\\ln13}{t-2}$. </p><p>Hence, the correct option is<strong> A.</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/532439/go-classes-dpp-gate-cs-da-calculus-%26-optimization-derivative-definition\" target=\"_blank\">GATE Overflow #532439</a></small></div>"
        }
    ]
});

registerTest({
    "name": "DPP 03 - Engineering Mathematics (Limits, Continuity & Differentiability - Part 3)",
    "testLabel": "DPP 03",
    "testType": "DPP",
    "bracket": "Limits, Continuity & Differentiability - Part 3",
    "subject": "em",
    "series": "cse-dpp-2027",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 16,
    "topicsCovered": "Limits, Continuity & Differentiability (Practice Set 3)",
    "questions": [
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"150\" data-start=\"15\">The value of $\\lim_{n\\to\\infty}\\dfrac{1}{n}\\left(\\dfrac{n}{n+1}+\\dfrac{n}{n+2}+\\dfrac{n}{n+3}+\\cdots+\\dfrac{n}{2n}\\right)$ is:</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$0$<br/></span>",
                "<span style=\"display: inline;\">$\\ln 2$<br/></span>",
                "<span style=\"display: inline;\">$1$<br/></span>",
                "<span style=\"display: inline;\">$2\\ln 2$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"532300\"></a><div itemprop=\"text\"><p data-path-to-node=\"0\">The given limit is:</p><p>$$L = \\lim_{n\\to\\infty}\\frac{1}{n}\\left(\\frac{n}{n+1}+\\frac{n}{n+2}+\\frac{n}{n+3}+\\cdots+\\frac{n}{2n}\\right)$$</p><p data-path-to-node=\"3\"><b data-index-in-node=\"0\" data-path-to-node=\"3\">First, rewrite the sum in sigma notation.</b></p><p data-path-to-node=\"3\">Notice that the numerator inside the parentheses is always $n$, and the denominator goes from $n+1$ to $n+n$ (since $2n = n+n$).</p><p data-path-to-node=\"3\">We can factor $n$ from the denominators to simplify the terms:</p><p>$$\\frac{n}{n+i} = \\frac{n}{n(1 + \\frac{i}{n})} = \\frac{1}{1 + \\frac{i}{n}}$$</p><p data-path-to-node=\"5\">Now, rewrite the entire expression using summation notation:</p><p>$$L = \\lim_{n\\to\\infty} \\frac{1}{n} \\sum_{i=1}^{n} \\frac{1}{1 + \\frac{i}{n}}$$</p><p data-path-to-node=\"7\"><b data-index-in-node=\"0\" data-path-to-node=\"7\">Now, convert the limit of the sum to a definite integral.</b></p><p data-path-to-node=\"7\">Recall the definition of a definite integral as the limit of a Riemann sum:</p><p>$$\\lim_{n\\to\\infty} \\frac{1}{n} \\sum_{i=1}^{n} f\\left(\\frac{i}{n}\\right) = \\int_{0}^{1} f(x) \\, dx$$</p><p data-path-to-node=\"9\">By matching our expression to the Riemann sum formula, we can identify:</p><ul data-path-to-node=\"10\"><li><p data-path-to-node=\"10,0,0\">$x = \\frac{i}{n}$</p></li><li><p data-path-to-node=\"10,1,0\">$f(x) = \\frac{1}{1 + x}$</p></li><li><p data-path-to-node=\"10,2,0\">$dx = \\frac{1}{n}$</p></li></ul><p data-path-to-node=\"11\">The limits of integration are from $0$ to $1$ because as $i$ goes from $1$ to $n$, the value of $\\frac{i}{n}$ goes from $\\frac{1}{n} \\to 0$ (as $n \\to \\infty$) up to $\\frac{n}{n} = 1$.</p><p data-path-to-node=\"12\">So, the limit becomes the following definite integral:</p><p>$$L = \\int_{0}^{1} \\frac{1}{1 + x} \\, dx$$</p><p data-path-to-node=\"14\"><b data-index-in-node=\"0\" data-path-to-node=\"14\">Now, Evaluate the definite integral.</b></p><p data-path-to-node=\"14\">The antiderivative of $\\frac{1}{1+x}$ is $\\ln|1+x|$.</p><p>$$L = \\left[ \\ln|1+x| \\right]_{0}^{1}$$</p><p>$$L = \\ln(1+1) - \\ln(1+0) = \\ln(2) - \\ln(1)$$</p><p data-path-to-node=\"18\">Since $\\ln(1) = 0$, we are left with:</p><p>$$\\boxed{\\therefore L = \\ln(2)}$$</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/532299/go-classes-dpp-gate-cs-da-calculus-%26-optimization-limits\" target=\"_blank\">GATE Overflow #532299</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"208\" data-start=\"15\">Let $h$ be defined by $$h(x)=\\begin{cases}\\dfrac{e^{2x}-1-2x-2x^2}{x^3}+k\\dfrac{\\ln(1+x)-x+\\frac{x^2}{2}}{x^3},&amp;x\\ne0\\\\\\\\5,&amp;x=0\\end{cases}$$If $h$ is continuous at $x=0$, then $k$ is:</p></div></span>",
            "image": "",
            "options": [],
            "answer": "11",
            "solution": "<div class=\"solution-content\"><a name=\"532189\"></a><div itemprop=\"text\">Since $h$ is continuous at $x=0$, we need $\\lim_{x\\to0}h(x)=h(0)=5$. <br/> <br/> Using expansions, $e^{2x}=1+2x+2x^2+\\frac{4}{3}x^3+\\cdots$, so $\\frac{e^{2x}-1-2x-2x^2}{x^3}\\to\\frac{4}{3}$.<br/> <br/> Also, $\\ln(1+x)=x-\\frac{x^2}{2}+\\frac{x^3}{3}-\\cdots$, so $\\frac{\\ln(1+x)-x+\\frac{x^2}{2}}{x^3}\\to\\frac{1}{3}$. <br/> <br/> Therefore, $\\lim_{x\\to0}h(x)=\\frac{4}{3}+\\frac{k}{3}$. <br/> <br/> Since this must equal $5$, <br/> <br/> we get $\\dfrac{4+k}{3}=5$. <br/> <br/> $\\boxed{\\therefore k=11}$</div><br><br><small>Source: <a href=\"https://gateoverflow.in/532188/go-classes-dpp-gate-cs-da-calculus-%26-optimization-limits-and-continuity\" target=\"_blank\">GATE Overflow #532188</a></small></div>"
        },
        {
            "marks": 2,
            "neg": 0,
            "type": "MSQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"114\" data-start=\"15\">Let $F(x)=\\max\\{x^2-6x+8,\\ 2x-7,\\ 1-x\\}$. Which of the following statements is/are <strong>true</strong>?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$F$ is differentiable at its global minimum.<br/></span>",
                "<span style=\"display: inline;\">The minimum value of $F$ is $-1$.<br/></span>",
                "<span style=\"display: inline;\">The global minimum occurs at $x=3$.<br/></span>",
                "<span style=\"display: inline;\">$F$ is not differentiable at exactly two points.</span>"
            ],
            "answer": "D",
            "solution": "<div class=\"solution-content\"><a name=\"532182\"></a><div itemprop=\"text\"><p data-path-to-node=\"0\">We are given:</p><p>$$F(x) = \\max\\{x^2 - 6x + 8, \\ 2x - 7, \\ 1 - x\\}$$</p><p data-path-to-node=\"2\">Let's define the three individual functions as:</p><ul data-path-to-node=\"3\"><li><p data-path-to-node=\"3,0,0\">$f_1(x) = x^2 - 6x + 8$</p></li><li><p data-path-to-node=\"3,1,0\">$f_2(x) = 2x - 7$</p></li><li><p data-path-to-node=\"3,2,0\">$f_3(x) = 1 - x$</p></li></ul><p data-path-to-node=\"4\"><br/>First, Let's simplify the Function</p><p data-path-to-node=\"5\">First, let's see if one of these functions is always less than another. Let's compare the quadratic $f_1(x)$ and the line $f_3(x)$:</p><p>$$f_1(x) - f_3(x) = (x^2 - 6x + 8) - (1 - x) = x^2 - 5x + 7$$</p><p data-path-to-node=\"7\">To see if this quadratic is always positive, we can check its discriminant ($\\Delta = b^2 - 4ac$):</p><p>$$\\Delta = (-5)^2 - 4(1)(7) = 25 - 28 = -3$$</p><p data-path-to-node=\"9\">Since the discriminant is negative and the leading coefficient ($x^2$) is positive, the quadratic $x^2 - 5x + 7$ is strictly greater than $0$ for all real numbers $x$.</p><p data-path-to-node=\"9\">This means $f_1(x) &gt; f_3(x)$ everywhere. Therefore, $f_3(x)$ will never be the maximum, and we can drop it from our evaluation:</p><p>$$F(x) = \\max\\{x^2 - 6x + 8, \\ 2x - 7\\}$$<br/> </p><p data-path-to-node=\"11\">Now we need to find where $f_1(x)$ and $f_2(x)$ intersect to determine which function is the maximum on different intervals.</p><p>$$x^2 - 6x + 8 = 2x - 7$$</p><p>$$x^2 - 8x + 15 = 0$$</p><p>$$(x - 3)(x - 5) = 0$$</p><p data-path-to-node=\"16\">The functions intersect at <b data-index-in-node=\"28\" data-path-to-node=\"16\">$x = 3$</b> and <b data-index-in-node=\"38\" data-path-to-node=\"16\">$x = 5$</b>.</p><p data-path-to-node=\"17\">Testing values in the intervals created by these points, we get the piecewise definition of $F(x)$:</p><ul data-path-to-node=\"18\"><li><p data-path-to-node=\"18,0,0\"><b data-index-in-node=\"0\" data-path-to-node=\"18,0,0\">For $x &lt; 3$</b>: (e.g., $x=0$), $f_1(0) = 8$ and $f_2(0) = -7$. Here, $f_1(x)$ is larger.</p></li><li><p data-path-to-node=\"18,1,0\"><b data-index-in-node=\"0\" data-path-to-node=\"18,1,0\">For $3 \\le x \\le 5$</b>: (e.g., $x=4$), $f_1(4) = 0$ and $f_2(4) = 1$. Here, $f_2(x)$ is larger.</p></li><li><p data-path-to-node=\"18,2,0\"><b data-index-in-node=\"0\" data-path-to-node=\"18,2,0\">For $x &gt; 5$</b>: (e.g., $x=6$), $f_1(6) = 8$ and $f_2(6) = 5$. Here, $f_1(x)$ is larger again.</p></li></ul><p data-path-to-node=\"19\">So, the piecewise function is:</p><p>$$F(x) = \\begin{cases} x^2 - 6x + 8 &amp; \\text{if } x &lt; 3 \\\\ 2x - 7 &amp; \\text{if } 3 \\le x \\le 5 \\\\ x^2 - 6x + 8 &amp; \\text{if } x &gt; 5 \\end{cases}$$</p><p data-path-to-node=\"21\"> </p><p data-path-to-node=\"22\">Let's find the minimum of each piece on its respective interval:</p><ol data-path-to-node=\"23\" start=\"1\"><li><p data-path-to-node=\"23,0,0\"><b data-index-in-node=\"0\" data-path-to-node=\"23,0,0\">Interval $(-\\infty, 3]$</b>: The function is a parabola opening upwards. Its vertex is at $x = \\frac{-b}{2a} = \\frac{6}{2} = 3$. The minimum on this interval is exactly at the boundary $x=3$.</p><p data-path-to-node=\"23,0,0\">Value: $F(3) = 3^2 - 6(3) + 8 = -1$.</p></li><li><p data-path-to-node=\"23,1,0\"><b data-index-in-node=\"0\" data-path-to-node=\"23,1,0\">Interval $[3, 5]$</b>: The function is $2x - 7$, which is a strictly increasing line. Its minimum is at the lowest $x$ value, which is $x=3$.</p><p data-path-to-node=\"23,1,0\">Value: $F(3) = 2(3) - 7 = -1$.</p></li><li><p data-path-to-node=\"23,2,0\"><b data-index-in-node=\"0\" data-path-to-node=\"23,2,0\">Interval $[5, \\infty)$</b>: The function is the parabola $x^2 - 6x + 8$. Because its vertex is at $x=3$, it is strictly increasing for all $x \\ge 5$. Its minimum on this interval is at $x=5$.</p><p data-path-to-node=\"23,2,0\">Value: $F(5) = 5^2 - 6(5) + 8 = 3$.</p></li></ol><p data-path-to-node=\"24\">Comparing these, the <b data-index-in-node=\"21\" data-path-to-node=\"24\">global minimum value is $-1$</b>, and it occurs exactly at <b data-index-in-node=\"74\" data-path-to-node=\"24\">$x = 3$</b>.</p><h3 data-path-to-node=\"25\"> </h3><p data-path-to-node=\"26\">A piecewise function made of polynomials is differentiable everywhere except possibly at the \"corner\" points where it changes definitions ($x=3$ and $x=5$). We must check the left and right derivatives at these points.</p><ul data-path-to-node=\"27\"><li><p data-path-to-node=\"27,0,0\"><b data-index-in-node=\"0\" data-path-to-node=\"27,0,0\">At $x = 3$:</b></p><ul data-path-to-node=\"27,0,1\"><li><p data-path-to-node=\"27,0,1,0,0\">Left derivative: $\\frac{d}{dx}(x^2 - 6x + 8)$ evaluated at $x=3 \\Rightarrow 2(3) - 6 = \\mathbf{0}$</p></li><li><p data-path-to-node=\"27,0,1,1,0\">Right derivative: $\\frac{d}{dx}(2x - 7)$ evaluated at $x=3 \\Rightarrow \\mathbf{2}$</p></li><li><p data-path-to-node=\"27,0,1,2,0\">Because $0 \\neq 2$, $F(x)$ is <b data-index-in-node=\"26\" data-path-to-node=\"27,0,1,2,0\">not differentiable at $x = 3$</b>.</p></li></ul></li><li><p data-path-to-node=\"27,1,0\"><b data-index-in-node=\"0\" data-path-to-node=\"27,1,0\">At $x = 5$:</b></p><ul data-path-to-node=\"27,1,1\"><li><p data-path-to-node=\"27,1,1,0,0\">Left derivative: $\\frac{d}{dx}(2x - 7)$ evaluated at $x=5 \\Rightarrow \\mathbf{2}$</p></li><li><p data-path-to-node=\"27,1,1,1,0\">Right derivative: $\\frac{d}{dx}(x^2 - 6x + 8)$ evaluated at $x=5 \\Rightarrow 2(5) - 6 = \\mathbf{4}$</p></li><li><p data-path-to-node=\"27,1,1,2,0\">Because $2 \\neq 4$, $F(x)$ is <b data-index-in-node=\"26\" data-path-to-node=\"27,1,1,2,0\">not differentiable at $x = 5$</b>.</p></li></ul></li></ul><h3 data-path-to-node=\"28\"> </h3><p data-path-to-node=\"29\">Now, Let's evaluate the given statements based on our findings:</p><ul data-path-to-node=\"30\"><li><p data-path-to-node=\"30,0,0\">A. $F$ is differentiable at its global minimum.</p><ul data-path-to-node=\"30,0,1\"><li><p data-path-to-node=\"30,0,1,0,0\"><i data-index-in-node=\"0\" data-path-to-node=\"30,0,1,0,0\">False.</i> The global minimum is at $x=3$, and we proved it is not differentiable there.</p></li></ul></li><li><p data-path-to-node=\"30,1,0\">B. The minimum value of $F$ is $-1$.</p><ul data-path-to-node=\"30,1,1\"><li><p data-path-to-node=\"30,1,1,0,0\"><i data-index-in-node=\"0\" data-path-to-node=\"30,1,1,0,0\">True.</i></p></li></ul></li><li><p data-path-to-node=\"30,2,0\">C. The global minimum occurs at $x = 3$.</p><ul data-path-to-node=\"30,2,1\"><li><p data-path-to-node=\"30,2,1,0,0\"><i data-index-in-node=\"0\" data-path-to-node=\"30,2,1,0,0\">True.</i></p></li></ul></li><li><p data-path-to-node=\"30,3,0\">D. $F$ is not differentiable at exactly two points.</p><ul data-path-to-node=\"30,3,1\"><li><p data-path-to-node=\"30,3,1,0,0\"><i data-index-in-node=\"0\" data-path-to-node=\"30,3,1,0,0\">True.</i> (It is not differentiable at $x=3$ and $x=5$).</p></li></ul></li></ul></div><br><br><small>Source: <a href=\"https://gateoverflow.in/532181/go-classes-dpp-gate-cs-da-calculus-%26-optimization-differentiability\" target=\"_blank\">GATE Overflow #532181</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"224\" data-start=\"38\">Let $F:\\mathbb R\\to\\mathbb R$ be defined by $F(x)=|x^2-4x+3|+\\lambda |x-1|$, where $\\lambda\\in\\mathbb R$. For which value of $\\lambda$ is $F$ differentiable at $x=1$?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$-2$<br/></span>",
                "<span style=\"display: inline;\">$0$<br/></span>",
                "<span style=\"display: inline;\">$2$<br/></span>",
                "<span style=\"display: inline;\">No real value of $\\lambda$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"531977\"></a><div itemprop=\"text\"><main id=\"main\" tabindex=\"-1\"><section data-scroll-anchor=\"false\" data-testid=\"conversation-turn-70\" data-turn=\"assistant\" data-turn-id=\"request-WEB:c3e13931-59d6-4b8d-b027-bcb886acd7ab-37\" data-turn-id-container=\"request-WEB:c3e13931-59d6-4b8d-b027-bcb886acd7ab-37\" dir=\"auto\"><p data-end=\"382\" data-start=\"326\">We have $F(x)=|x^2-4x+3|+\\lambda |x-1|$.</p><p data-end=\"410\" data-start=\"384\">Now $x^2-4x+3=(x-1)(x-3)$.</p><p data-end=\"494\" data-start=\"412\">Near $x=1$, the factor $x-3$ is negative. So $|x^2-4x+3|=|(x-1)(x-3)|=|x-1||x-3|$.</p><p data-end=\"566\" data-start=\"496\">Since near $x=1$, $|x-3|=3-x$, we get $F(x)=(3-x)|x-1|+\\lambda |x-1|$.</p><p data-end=\"608\" data-start=\"568\">So $F(x)=(\\lambda+3-x)|x-1|$ near $x=1$.</p><p data-end=\"667\" data-start=\"610\">Put $x=1+h$. Then $F(1+h)=(\\lambda+2-h)|h|$ and $F(1)=0$.</p><p data-end=\"779\" data-start=\"669\">Right hand derivative at $x=1:$</p><p data-end=\"779\" data-start=\"669\">$\\lim_{h\\to0^+}\\frac{F(1+h)-F(1)}{h}=\\lim_{h\\to0^+}(\\lambda+2-h)=\\lambda+2$.</p><p data-end=\"894\" data-start=\"781\">Left hand derivative at $x=1:$</p><p data-end=\"894\" data-start=\"781\">$\\lim_{h\\to0^-}\\frac{F(1+h)-F(1)}{h}=\\lim_{h\\to0^-}-(\\lambda+2-h)=-(\\lambda+2)$.</p><p data-end=\"973\" data-start=\"896\">For differentiability, left hand derivative must equal right hand derivative.</p><p data-end=\"1003\" data-start=\"975\">$\\Rightarrow \\lambda+2=-(\\lambda+2)$.</p><p data-end=\"1043\" data-start=\"1005\">$\\Rightarrow 2\\lambda+4=0$, so $\\lambda=-2$.</p><p data-end=\"1110\" data-is-last-node=\"\" data-is-only-node=\"\" data-start=\"1045\">$\\therefore F$ is differentiable at $x=1$ only when $\\boxed{\\lambda=-2}$</p></section></main></div><br><br><small>Source: <a href=\"https://gateoverflow.in/531976/go-classes-dpp-gate-cs-da-calculus-%26-optimization-differentiability\" target=\"_blank\">GATE Overflow #531976</a></small></div>"
        },
        {
            "marks": 2,
            "neg": 0,
            "type": "MSQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"319\" data-start=\"35\">Let $p:\\mathbb R\\to\\mathbb R$ be continuous at $x=2$ and suppose $p(2)=3$. </p><p data-end=\"319\" data-start=\"35\">For a real number $\\lambda$, define $q:\\mathbb R\\to\\mathbb R$ by $q(y)=\\dfrac{y^2-9}{y-3}$ for $y\\ne3$, and $q(3)=\\lambda$. </p><p data-end=\"319\" data-start=\"35\">Let $H(x)=q(p(x))$. </p><p data-end=\"319\" data-start=\"35\">Which of the following statements is/are <strong>true</strong>?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">If $\\lambda=6$, then $H$ is continuous at $x=2$ for every such function $p$.<br/></span>",
                "<span style=\"display: inline;\">If $\\lambda\\ne6$, then $H$ is discontinuous at $x=2$ for every such function $p$.<br/></span>",
                "<span style=\"display: inline;\">If $\\lambda\\ne6$ and $p(x)\\ne3$ for all $x\\ne2$ in some neighbourhood of $2$, then $H$ is discontinuous at $x=2$.<br/></span>",
                "<span style=\"display: inline;\">If $\\lambda\\ne6$ and $p(x)=3$ for all $x$ in some neighbourhood of $2$, then $H$ is continuous at $x=2$.</span>"
            ],
            "answer": [
                "A"
            ],
            "solution": "<div class=\"solution-content\"><a name=\"531975\"></a><div itemprop=\"text\"><p data-end=\"849\" data-start=\"760\">For $y\\ne3$, we have $q(y)=\\dfrac{y^2-9}{y-3}=\\dfrac{(y-3)(y+3)}{y-3}=y+3$.</p><p data-end=\"872\" data-start=\"851\">Also, $q(3)=\\lambda$.</p><p data-end=\"949\" data-start=\"874\">Since $p$ is continuous at $x=2$ and $p(2)=3$, we get $\\lim_{x\\to2}p(x)=3$.</p><p data-end=\"1157\" data-start=\"951\">For (A), if $\\lambda=6$, then $q(3)=6$ and for $y\\ne3$, $q(y)=y+3$. Thus $q$ is continuous at $y=3$. Since $p$ is continuous at $x=2$, the composite $H(x)=q(p(x))$ is continuous at $x=2$. Hence <strong>(A) is true.</strong></p><p data-end=\"1352\" data-start=\"1159\">For (B), this is not always true. Take $p(x)=3$ for all $x$. Then $H(x)=q(3)=\\lambda$ for all $x$, so $H$ is constant and hence continuous at $x=2$, even when $\\lambda\\ne6$. Hence <strong>(B) is false.</strong></p><p data-end=\"1641\" data-start=\"1354\">For (C), if $p(x)\\ne3$ for all $x\\ne2$ near $2$, then for $x\\ne2$ near $2$, $H(x)=q(p(x))=p(x)+3$. Therefore, $\\lim_{x\\to2}H(x)=\\lim_{x\\to2}(p(x)+3)=6$. But $H(2)=q(p(2))=q(3)=\\lambda$. Since $\\lambda\\ne6$, $\\lim_{x\\to2}H(x)\\ne H(2)$. Hence $H$ is discontinuous at $x=2$. So <strong>(C) is true.</strong></p><p data-end=\"1855\" data-is-last-node=\"\" data-is-only-node=\"\" data-start=\"1643\">For (D), if $p(x)=3$ for all $x$ in some neighbourhood of $2$, then $H(x)=q(3)=\\lambda$ for all $x$ in that neighbourhood. Thus $H$ is locally constant near $x=2$, so it is continuous at $x=2$. Hence <strong>(D) is true.</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/531974/go-classes-dpp-gate-cs-da-calculus-%26-optimization-composition-continuity\" target=\"_blank\">GATE Overflow #531974</a></small></div>"
        },
        {
            "marks": 2,
            "neg": 0,
            "type": "MSQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"208\" data-start=\"37\">Let $f$ be a differentiable function on $\\mathbb R$ such that $f'(x)=\\dfrac{(x+2)^3(x-1)^2(5-x)}{x^2+1}$. Which of the following statements is/are <strong>true</strong>?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$f$ is strictly increasing on $(-2,5)$.<br/></span>",
                "<span style=\"display: inline;\">$x=1$ is a point of local maximum of $f$.<br/></span>",
                "<span style=\"display: inline;\">$x=5$ is a point of local maximum and $f''(5)<0$.<br/></span>",
                "<span style=\"display: inline;\">$f$ has exactly three critical points but exactly two local extrema.</span>"
            ],
            "answer": [
                "A"
            ],
            "solution": "<div class=\"solution-content\"><a name=\"531970\"></a><div itemprop=\"text\"><p data-end=\"575\" data-start=\"472\">Since $x^2+1&gt;0$ for all real $x$, the sign of $f'(x)$ depends on $(x+2)^3(x-1)^2(5-x)$.</p><p data-end=\"657\" data-start=\"577\">The critical points occur when $f'(x)=0$. So $x=-2,1,5$ are the critical points.</p><p data-end=\"714\" data-start=\"659\">Now $(x-1)^2\\ge0$ and it does not change sign at $x=1$.</p><p data-end=\"742\" data-start=\"716\">Check the sign of $f'(x)$:</p><p data-end=\"766\" data-start=\"744\">For $x&lt;-2$, $f'(x)&lt;0$.</p><p data-end=\"792\" data-start=\"768\">For $-2&lt;x&lt;1$, $f'(x)&gt;0$.</p><p data-end=\"817\" data-start=\"794\">For $1&lt;x&lt;5$, $f'(x)&gt;0$.</p><p data-end=\"840\" data-start=\"819\">For $x&gt;5$, $f'(x)&lt;0$.</p><p data-end=\"929\" data-start=\"842\">Thus $f$ changes from decreasing to increasing at $x=-2$, so $x=-2$ is a local minimum.</p><p data-end=\"1031\" data-start=\"931\">At $x=1$, $f'(x)$ is positive on both sides, so there is no local maximum or local minimum at $x=1$.</p><p data-end=\"1114\" data-start=\"1033\">At $x=5$, $f'(x)$ changes from positive to negative, so $x=5$ is a local maximum.</p><p data-end=\"1287\" data-start=\"1116\">Therefore, $f$ is strictly increasing on $(-2,5)$, even though $f'(1)=0$, because the sign of $f'(x)$ stays positive on both sides of $1$. So <strong>(A) is true</strong> and <strong>(B) is false.</strong></p><p data-end=\"1360\" data-start=\"1289\">Now write $f'(x)=(5-x)Q(x)$, where $Q(x)=\\frac{(x+2)^3(x-1)^2}{x^2+1}$.</p><p data-end=\"1393\" data-start=\"1362\">Then $f''(x)=-Q(x)+(5-x)Q'(x)$.</p><p data-end=\"1432\" data-start=\"1395\">Putting $x=5$, we get $f''(5)=-Q(5)$.</p><p data-end=\"1510\" data-start=\"1434\">Since $Q(5)=\\frac{7^3\\cdot4^2}{26}&gt;0$, we get $f''(5)&lt;0$. Hence <strong>(C) is true.</strong></p><p data-end=\"1660\" data-is-last-node=\"\" data-is-only-node=\"\" data-start=\"1512\">There are exactly three critical points: $-2,1,5$. But only $-2$ and $5$ are local extrema. Hence $f$ has exactly two local extrema. So <strong>(D) is true.</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/531968/go-classes-dpp-gate-cs-da-calculus-%26-optimization-derivative-sign-analysis\" target=\"_blank\">GATE Overflow #531968</a></small></div>"
        },
        {
            "marks": 2,
            "neg": 0,
            "type": "MSQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"249\" data-start=\"45\">Let $F$ be continuous on $[1,3]$ and differentiable on an open interval containing $[1,3]$. Suppose $F'(1)=3$ and $F'(3)=-1$. Which of the following statements is/are necessarily true?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">There exists $c\\in(1,3)$ such that $F'(c)=0$.<br/></span>",
                "<span style=\"display: inline;\">$F$ must be decreasing on some interval contained in $(1,3)$.<br/></span>",
                "<span style=\"display: inline;\">For every $k\\in(-1,3)$, there exists $x_k\\in(1,3)$ such that $F'(x_k)=k$.<br/></span>",
                "<span style=\"display: inline;\">$F'(2)=0$.</span>"
            ],
            "answer": "B",
            "solution": "<div class=\"solution-content\"><a name=\"531967\"></a><div itemprop=\"text\"><ol start=\"1\" style=\"list-style-type: upper-alpha;\"><li data-path-to-node=\"2\"><strong>There exists $c \\in (1,3)$ such that $F'(c) = 0$.<br/>True. </strong>Because $F$ is differentiable on an open interval containing $[1,3]$, its derivative $F'$ must satisfy Darboux's Theorem on $[1,3]$. This theorem states that a derivative will take on all intermediate values between its values at the endpoints of an interval.<br/>We are given $F'(1) = 3$ and $F'(3) = -1$.<br/>Since $0$ falls strictly between $-1$ and $3$, Darboux's Theorem guarantees there must be at least one point $c$ in the open interval $(1,3)$ where $F'(c) = 0$.<br/> </li><li><p data-path-to-node=\"5\"><strong>$F$ must be decreasing on some interval contained in $(1,3)$.</strong><br/><strong>True. </strong>Since $F'(3)=-1&lt;0$ and derivatives have the intermediate value property, $F'$ cannot suddenly jump from positive values to $-1$ at $x=3$. Therefore, $F'(x)&lt;0$ for some points just before $3$. Hence $F$ is decreasing on some interval contained in $(1,3)$.<br/> </p></li><li><p data-path-to-node=\"8\"><strong>For every $k \\in (-1,3)$, there exists $x_k \\in (1,3)$ such that $F'(x_k) = k$.<br/>True. </strong>This is a direct application of Darboux's Theorem, just like statement A. Since $F'(3) = -1$ and $F'(1) = 3$, the derivative must take on every single value $k$ that lies between $-1$ and $3$ at some point $x_k$ in the interval $(1,3)$.<br/> </p></li><li><p data-path-to-node=\"10\"><strong>$F'(2) = 0$.<br/>False. </strong>While we proved in Statement A that $F'(x)$ must equal 0 somewhere in the interval $(1,3)$, there is absolutely no rule stating it has to happen exactly in the middle at $x = 2$.<br/><br/>Counterexample: Let $F'(x) = -2x + 5$.</p><ul data-path-to-node=\"12,0,1\"><li><p data-path-to-node=\"12,0,1,0,0\">Check $x = 1$: $F'(1) = -2(1) + 5 = 3$. (Matches our given criteria)</p></li><li><p data-path-to-node=\"12,0,1,1,0\">Check $x = 3$: $F'(3) = -2(3) + 5 = -1$. (Matches our given criteria)</p></li><li><p data-path-to-node=\"12,0,1,2,0\">Check $x = 2$: $F'(2) = -2(2) + 5 = 1$.</p></li><li><p data-path-to-node=\"12,0,1,3,0\">Here, $F'(2) = 1$, not 0.</p></li></ul></li></ol></div><br><br><small>Source: <a href=\"https://gateoverflow.in/531966/go-classes-dpp-gate-cs-da-calculus-%26-optimization-continuity-and-differentiability\" target=\"_blank\">GATE Overflow #531966</a></small></div>"
        },
        {
            "marks": 2,
            "neg": 0,
            "type": "MSQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"286\" data-start=\"41\">Let $f:\\mathbb R\\to\\mathbb R$ be defined by</p><p data-end=\"286\" data-start=\"41\">$$f(x)=\\begin{cases} \\dfrac{\\sin(ax)}{x}, &amp; x\\lt0 \\\\ b, &amp; x=0 \\\\\\\\ \\dfrac{e^{cx}-1}{x}, &amp; x\\gt 0 \\end{cases}$$, </p><p data-end=\"286\" data-start=\"41\">where $a,b,c$ are real constants. Which of the following statements is/are <strong>true</strong>?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">If $f$ is continuous at $x=0$, then $a=b=c$.<br/></span>",
                "<span style=\"display: inline;\">If $f$ is differentiable at $x=0$, then $a=b=c$.<br/></span>",
                "<span style=\"display: inline;\">If $a=b=c$, then $f$ is differentiable at $x=0$.<br/></span>",
                "<span style=\"display: inline;\">If $f$ is differentiable at $x=0$, then $c=-a$.</span>"
            ],
            "answer": [
                "A"
            ],
            "solution": "<div class=\"solution-content\"><a name=\"531951\"></a><div itemprop=\"text\"><p data-end=\"643\" data-start=\"540\">For continuity at $x=0$, we need left hand limit $=$ value at $0$ $=$ right hand limit.</p><p data-end=\"727\" data-start=\"645\">Now $\\lim_{x\\to0^-}\\frac{\\sin(ax)}{x}=a$ and $\\lim_{x\\to0^+}\\frac{e^{cx}-1}{x}=c$.</p><p data-end=\"744\" data-start=\"729\">Also, $f(0)=b$.</p><p data-end=\"809\" data-start=\"746\">So for continuity at $x=0$, we need $a=b=c$. Hence (A) is true.</p><p data-end=\"956\" data-start=\"811\">Now differentiability at $x=0$ first requires continuity at $x=0$. Therefore, if $f$ is differentiable at $x=0$, then $a=b=c$. Hence (B) is true.</p><p data-end=\"1008\" data-start=\"958\">Now suppose $a=b=c$. Let this common value be $k$.</p><p data-end=\"1024\" data-start=\"1010\">Then $f(0)=k$.</p><p data-end=\"1133\" data-start=\"1026\">Left derivative at $0$ is $\\lim_{x\\to0^-}\\frac{f(x)-f(0)}{x}=\\lim_{x\\to0^-}\\frac{\\frac{\\sin(kx)}{x}-k}{x}$.</p><p data-end=\"1234\" data-start=\"1135\">Using $\\sin(kx)=kx-\\frac{k^3x^3}{6}+\\cdots$, we get $\\frac{\\sin(kx)}{x}=k-\\frac{k^3x^2}{6}+\\cdots$.</p><p data-end=\"1315\" data-start=\"1236\">So the left derivative is $\\lim_{x\\to0^-}\\frac{-\\frac{k^3x^2}{6}+\\cdots}{x}=0$.</p><p data-end=\"1425\" data-start=\"1317\">Right derivative at $0$ is $\\lim_{x\\to0^+}\\frac{f(x)-f(0)}{x}=\\lim_{x\\to0^+}\\frac{\\frac{e^{kx}-1}{x}-k}{x}$.</p><p data-end=\"1524\" data-start=\"1427\">Using $e^{kx}=1+kx+\\frac{k^2x^2}{2}+\\cdots$, we get $\\frac{e^{kx}-1}{x}=k+\\frac{k^2x}{2}+\\cdots$.</p><p data-end=\"1615\" data-start=\"1526\">So the right derivative is $\\lim_{x\\to0^+}\\frac{\\frac{k^2x}{2}+\\cdots}{x}=\\frac{k^2}{2}$.</p><p data-end=\"1684\" data-start=\"1617\">For differentiability, left derivative must equal right derivative.</p><p data-end=\"1726\" data-start=\"1686\">So $0=\\frac{k^2}{2}$, which gives $k=0$.</p><p data-end=\"1850\" data-start=\"1728\">Therefore, $a=b=c$ alone does not always guarantee differentiability. It guarantees differentiability only when $a=b=c=0$.</p><p data-end=\"1868\" data-start=\"1852\">So (C) is false.</p><p data-end=\"1990\" data-start=\"1870\">Also, if $f$ is differentiable at $x=0$, then $a=b=c=0$. Hence $c=-a$ is also true because both are $0$. So (D) is true.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/531950/go-classes-dpp-gate-cs-da-calculus-%26-optimization-continuity-%26-differentiability\" target=\"_blank\">GATE Overflow #531950</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\">Let $L=\\lim_{x\\to 0}\\left(\\dfrac{e^{2x}+\\sin x}{1+3x}\\right)^{1/x^2}$. Find the value of $\\log_e L$.</div></span>",
            "image": "",
            "options": [],
            "answer": "2",
            "solution": "<div class=\"solution-content\"><a name=\"531948\"></a><div itemprop=\"text\"><p data-end=\"204\" data-start=\"171\">Let $y=\\log_e L$.</p><p data-end=\"286\" data-start=\"206\">$\\Rightarrow y=\\lim_{x\\to0}\\dfrac{1}{x^2}\\log_e\\left(\\frac{e^{2x}+\\sin x}{1+3x}\\right)$.<br/> </p><p data-end=\"354\" data-start=\"288\">$\\Rightarrow y=\\lim_{x\\to0}\\dfrac{\\log_e(e^{2x}+\\sin x)-\\log_e(1+3x)}{x^2}$.</p><p data-end=\"386\" data-start=\"356\">Now use expansions near $x=0$.</p><p data-end=\"436\" data-start=\"388\">$e^{2x}=1+2x+2x^2+\\cdots$ and $\\sin x=x+\\cdots$.</p><p data-end=\"474\" data-start=\"438\">$\\Rightarrow e^{2x}+\\sin x=1+3x+2x^2+\\cdots$.</p><p data-end=\"528\" data-start=\"476\">For small $u$, $\\log_e(1+u)=u-\\frac{u^2}{2}+\\cdots$.</p><p data-end=\"590\" data-start=\"530\">Therefore, $\\log_e(e^{2x}+\\sin x)=\\log_e(1+3x+2x^2+\\cdots)$.</p><p data-end=\"678\" data-start=\"592\">So $\\log_e(e^{2x}+\\sin x)=(3x+2x^2)-\\frac{(3x)^2}{2}+\\cdots=3x-\\frac{5x^2}{2}+\\cdots$.</p><p data-end=\"726\" data-start=\"680\">Also, $\\log_e(1+3x)=3x-\\frac{9x^2}{2}+\\cdots$.</p><p data-end=\"783\" data-start=\"728\">$\\Rightarrow \\log_e(e^{2x}+\\sin x)-\\log_e(1+3x)=2x^2+\\cdots$.</p><p data-end=\"832\" data-start=\"785\">$\\Rightarrow y=\\lim_{x\\to0}\\frac{2x^2+\\cdots}{x^2}=2$.</p><p data-end=\"858\" data-is-last-node=\"\" data-is-only-node=\"\" data-start=\"834\">$\\boxed{\\therefore \\log_e L=2}$</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/531947/go-classes-dpp-gate-cs-da-calculus-%26-optimization-exponential-limits\" target=\"_blank\">GATE Overflow #531947</a></small></div>"
        },
        {
            "marks": 2,
            "neg": 0,
            "type": "MSQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"297\" data-start=\"38\">A differentiable function $F$ is defined on an interval containing $(0,10)$. The graph shown is the graph of $y=F'(x)$, not the graph of $F(x)$. </p><p style=\"text-align:center\"><img alt=\"\" height=\"310\" src=\"https://cdn.mathpix.com/snip/images/rHhLUnhBWZrtMyKOOSvCcqdFPf1FEALSJNPNL1guNCw.original.fullsize.png\" width=\"423\"/></p><p data-end=\"297\" data-start=\"38\">Based on the graph, on which of the following intervals is $F''(x)&gt;0$ throughout the interval?</p></div></span>",
            "image": "https://cdn.mathpix.com/snip/images/rHhLUnhBWZrtMyKOOSvCcqdFPf1FEALSJNPNL1guNCw.original.fullsize.png",
            "options": [
                "<span style=\"display: inline;\">$(0,2)$<br/></span>",
                "<span style=\"display: inline;\">$(2,4)$<br/></span>",
                "<span style=\"display: inline;\">$(4,7)$<br/></span>",
                "<span style=\"display: inline;\">$(8,10)$</span>"
            ],
            "answer": "D",
            "solution": "<div class=\"solution-content\"><a name=\"531859\"></a><div itemprop=\"text\"><p data-end=\"444\" data-start=\"392\">We are given the graph of $y=F'(x)$.</p><p data-end=\"587\" data-start=\"446\">Now $F''(x)$ represents the derivative of $F'(x)$. Therefore, $F''(x)&gt;0$ exactly on those intervals where the graph of $F'(x)$ is increasing.</p><p data-end=\"671\" data-start=\"589\">On $(0,2)$, the graph of $F'(x)$ is decreasing, so $F''(x)&lt;0$. Hence (A) is false.</p><p data-end=\"754\" data-start=\"673\">On $(2,4)$, the graph of $F'(x)$ is increasing, so $F''(x)&gt;0$. Hence (B) is true.</p><p data-end=\"960\" data-start=\"756\">On $(4,7)$, the graph of $F'(x)$ is above the $x$-axis but decreasing. Since it is decreasing, $F''(x)&lt;0$. Hence (C) is false. This option checks the common mistake of confusing $F'(x)&gt;0$ with $F''(x)&gt;0$.</p><p data-end=\"1044\" data-start=\"962\">On $(8,10)$, the graph of $F'(x)$ is increasing, so $F''(x)&gt;0$. Hence (D) is true.</p><p data-end=\"1093\" data-start=\"1046\">Therefore, the correct options are (B) and (D).</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/531858/go-classes-dpp-gate-cs-da-calculus-%26-optimization-concavity-from-derivative\" target=\"_blank\">GATE Overflow #531858</a></small></div>"
        }
    ]
});

registerTest({
    "name": "DPP 04 - Engineering Mathematics (Limits, Continuity & Differentiability - Part 4)",
    "testLabel": "DPP 04",
    "testType": "DPP",
    "bracket": "Limits, Continuity & Differentiability - Part 4",
    "subject": "em",
    "series": "cse-dpp-2027",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 13,
    "topicsCovered": "Limits, Continuity & Differentiability (Practice Set 4)",
    "questions": [
        {
            "marks": 2,
            "neg": 0,
            "type": "MSQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"186\" data-start=\"0\">A differentiable function $F$ on $\\mathbb{R}$ has the property that $-2\\leq F'(x)\\leq 5$ for every real number $x$. Which of the following statements must always be true?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$F(7)\\leq F(2)+25$<br/></span>",
                "<span style=\"display: inline;\">$F(7)\\geq F(2)-10$<br/></span>",
                "<span style=\"display: inline;\">$F(7)\\leq F(2)+10$<br/></span>",
                "<span style=\"display: inline;\">$F(7)\\geq F(2)-25$</span>"
            ],
            "answer": [
                "A"
            ],
            "solution": "<div class=\"solution-content\"><a name=\"531661\"></a><div itemprop=\"text\"><p data-end=\"458\" data-start=\"307\">Since $F$ is differentiable on $\\mathbb{R}$, by the Mean Value Theorem, there exists some $c\\in(2,7)$ such that $F(7)-F(2)=F'(c)(7-2)$.</p><p data-end=\"482\" data-start=\"460\">So $F(7)-F(2)=5F'(c)$.</p><p data-end=\"540\" data-start=\"484\">Given $-2\\leq F'(x)\\leq 5$, we get $-2\\leq F'(c)\\leq 5$.</p><p data-end=\"596\" data-start=\"542\">Multiplying by $5$, we get $-10\\leq F(7)-F(2)\\leq 25$.</p><p data-end=\"643\" data-start=\"598\">So $F(7)\\geq F(2)-10$ and $F(7)\\leq F(2)+25$.</p><p data-end=\"684\" data-start=\"645\">Therefore, A and B must always be true.</p><p data-end=\"793\" data-start=\"686\">Also, since $F(7)\\geq F(2)-10$, it is automatically true that $F(7)\\geq F(2)-25$. So D must always be true.</p><p data-end=\"889\" data-start=\"795\">But $F(7)\\leq F(2)+10$ need not always be true, because the largest possible increase is $25$.</p><p data-end=\"930\" data-start=\"891\">Hence the correct answer is A, B and D.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/531660/go-classes-dpp-gate-cs-da-calculus-%26-optimization-mean-value-theorem\" target=\"_blank\">GATE Overflow #531660</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Two differentiable functions $u$ and $v$ are combined to form $w(x)=\\dfrac{u(x)}{v(x)}$. At $x=2$, the following information is known: $$w(2)=5, \\qquad v(2)=4, \\qquad u'(2)=18, \\qquad \\text{and} \\qquad w'(2)=\\frac{1}{2}$$ Find $v'(2)$.</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\frac{12}{5}$<br/></span>",
                "<span style=\"display: inline;\">$\\frac{14}{5}$<br/></span>",
                "<span style=\"display: inline;\">$\\frac{16}{5}$<br/></span>",
                "<span style=\"display: inline;\">$\\frac{18}{5}$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"531659\"></a><div itemprop=\"text\"><p data-end=\"344\" data-start=\"272\">Since $w(x)=\\frac{u(x)}{v(x)}$, we have $u(x)=w(x)v(x)$.</p><p data-end=\"371\" data-start=\"346\">Differentiate both sides.</p><p data-end=\"401\" data-start=\"373\">$u'(x)=w'(x)v(x)+w(x)v'(x)$.</p><p data-end=\"444\" data-start=\"403\">Now substitute the given values at $x=2$.</p><p data-end=\"477\" data-start=\"446\">$\\Rightarrow 18=\\frac{1}{2}\\cdot 4+5v'(2)$.</p><p data-end=\"496\" data-start=\"479\">$\\Rightarrow 18=2+5v'(2)$.</p><p data-end=\"515\" data-start=\"498\">$\\Rightarrow 16=5v'(2)$.</p><p data-end=\"515\" data-start=\"498\">$\\boxed{\\therefore v'(2)=\\frac{16}{5}}$</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/531658/go-classes-dpp-gate-cs-da-calculus-%26-optimization-product-rule\" target=\"_blank\">GATE Overflow #531658</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\">Let $g$ be continuous at $x=0$, but not differentiable at $x=0$, and suppose $g(0)=5$. Define $f(x)=x^2g(x)+3x$. Find $f'(0)$.</div></span>",
            "image": "",
            "options": [],
            "answer": "3",
            "solution": "<div class=\"solution-content\"><a name=\"531657\"></a><div itemprop=\"text\"><p data-end=\"245\" data-start=\"194\">Using the definition of derivative,</p><p data-end=\"288\" data-start=\"247\">$f'(0)=\\lim_{h\\to 0}\\frac{f(h)-f(0)}{h}$.</p><p data-end=\"312\" data-start=\"290\">Now $f(x)=x^2g(x)+3x$.</p><p data-end=\"339\" data-start=\"314\">$\\Rightarrow f(0)=0^2g(0)+3(0)=0$.</p><p data-end=\"394\" data-start=\"341\">Therefore, $f'(0)=\\lim_{h\\to 0}\\frac{h^2g(h)+3h}{h}$.</p><p data-end=\"430\" data-start=\"396\">$\\Rightarrow f'(0)=\\lim_{h\\to 0}(hg(h)+3)$.</p><p data-end=\"493\" data-start=\"432\">Since $g$ is continuous at $0$, $g(h)\\to g(0)=5$ as $h\\to 0$.</p><p data-end=\"513\" data-start=\"495\">$\\Rightarrow hg(h)\\to 0$.</p><p data-end=\"535\" data-start=\"515\">$\\Rightarrow f'(0)=0+3=\\boxed{3}$</p><p data-end=\"640\" data-start=\"537\">Note : The fact that $g$ is not differentiable at $0$ does not matter here because $g$ is multiplied by $x^2$.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/531656/go-classes-dpp-gate-cs-da-calculus-%26-optimization-continuity-%26-differentiability\" target=\"_blank\">GATE Overflow #531656</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"154\" data-start=\"0\">A function $p$ is defined near $0$ and satisfies $\\lim_{x\\to 0}p(x)=7$. Another function is defined by $F(x)=x^2p(x)-4x$. What is $F'(0)$?</p></div></span>",
            "image": "",
            "options": [],
            "answer": "7",
            "solution": "<div class=\"solution-content\"><a name=\"531655\"></a><div itemprop=\"text\"><p data-end=\"300\" data-start=\"207\">Using the definition of derivative, $F'(0)=\\lim_{h\\to 0}\\frac{F(h)-F(0)}{h}$.</p><p data-end=\"337\" data-start=\"302\">Now $F(x)=x^2p(x)-4x$, so $F(0)=0$.</p><p data-end=\"386\" data-start=\"339\">Thus $F'(0)=\\lim_{h\\to 0}\\frac{h^2p(h)-4h}{h}$.</p><p data-end=\"422\" data-start=\"388\">$\\Rightarrow F'(0)=\\lim_{h\\to 0}(hp(h)-4)$.</p><p data-end=\"521\" data-start=\"424\">Since $\\lim_{h\\to 0}p(h)=7$, the function $p(h)$ stays bounded near $0$. Therefore, $hp(h)\\to 0$.</p><p data-end=\"540\" data-start=\"523\">$\\boxed{\\Rightarrow F'(0)=-4}$</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/531654/go-classes-dpp-gate-cs-da-calculus-%26-optimization-differentiability-at-a-point\" target=\"_blank\">GATE Overflow #531654</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"248\" data-start=\"0\">Let the piecewise function $f(x)$ be defined by $$f(x)=\\begin{cases}\\dfrac{\\sqrt{1+ax}-\\sqrt{1-bx}}{x},&amp;x&gt;0\\\\\\\\ c,&amp;x=0\\\\\\\\ \\dfrac{\\ln(1+3x)}{\\sin x},&amp;x&lt;0\\end{cases}$$ For which of the following values of $a,b,c$ is $f$ continuous at $x=0$?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$a+b=6$ and $c=3$<br/></span>",
                "<span style=\"display: inline;\">$a+b=3$ and $c=3$<br/></span>",
                "<span style=\"display: inline;\">$a-b=6$ and $c=3$<br/></span>",
                "<span style=\"display: inline;\">$a+b=6$ and $c=\\frac{3}{2}$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"531550\"></a><div itemprop=\"text\"><p data-end=\"464\" data-start=\"368\">For continuity at $x=0$, we need $\\lim_{x\\to 0^-}f(x)=f(0)=\\lim_{x\\to 0^+}f(x)$.</p><p data-end=\"497\" data-start=\"466\">First find the left-hand limit.</p><p data-end=\"542\" data-start=\"499\">For $x&lt;0$, $f(x)=\\frac{\\ln(1+3x)}{\\sin x}$.</p><p data-end=\"597\" data-start=\"544\">As $x\\to 0^-$, $\\ln(1+3x)\\sim 3x$ and $\\sin x\\sim x$.</p><p data-end=\"646\" data-start=\"599\">So $\\lim_{x\\to 0^-}\\frac{\\ln(1+3x)}{\\sin x}=3$.</p><p data-end=\"678\" data-start=\"648\">Now find the right-hand limit.</p><p data-end=\"732\" data-start=\"680\">For $x&gt;0$, $f(x)=\\frac{\\sqrt{1+ax}-\\sqrt{1-bx}}{x}$.</p><p data-end=\"812\" data-start=\"734\">Rationalizing, we get $f(x)=\\frac{(1+ax)-(1-bx)}{x(\\sqrt{1+ax}+\\sqrt{1-bx})}$.</p><p data-end=\"866\" data-start=\"814\">So $f(x)=\\frac{(a+b)x}{x(\\sqrt{1+ax}+\\sqrt{1-bx})}$.</p><p data-end=\"916\" data-start=\"868\">Thus $f(x)=\\frac{a+b}{\\sqrt{1+ax}+\\sqrt{1-bx}}$.</p><p data-end=\"965\" data-start=\"918\">As $x\\to 0^+$, the denominator becomes $1+1=2$.</p><p data-end=\"1006\" data-start=\"967\">So $\\lim_{x\\to 0^+}f(x)=\\frac{a+b}{2}$.</p><p data-end=\"1052\" data-start=\"1008\">For continuity, we need $\\frac{a+b}{2}=c=3$.</p><p data-end=\"1083\" data-start=\"1054\">Therefore, $a+b=6$ and $c=3$.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/531549/go-classes-dpp-gate-cs-da-calculus-%26-optimization-continuity\" target=\"_blank\">GATE Overflow #531549</a></small></div>"
        },
        {
            "marks": 2,
            "neg": 0,
            "type": "MSQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"208\" data-start=\"40\">The function $f$ is defined by $$f(x)=\\begin{cases} ax^2+b &amp; \\text{if } x&lt;1 \\\\ e^{x-1}+cx &amp; \\text{if } 1\\le x&lt;2 \\\\ mx+n &amp; \\text{if } x\\ge 2 \\end{cases}$$</p><p data-end=\"350\" data-start=\"210\">Suppose $f$ is continuous at $x=1$ and $x=2$, differentiable at $x=1$, but not differentiable at $x=2$. Which of the following must be <strong>true</strong>?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$m=c+1$<br/></span>",
                "<span style=\"display: inline;\">$a=\\frac{c+1}{2}$<br/></span>",
                "<span style=\"display: inline;\">$n=e+c-m$<br/></span>",
                "<span style=\"display: inline;\">$m=1+2c$</span>"
            ],
            "answer": "C",
            "solution": "<div class=\"solution-content\"><a name=\"531440\"></a><div itemprop=\"text\"><p data-end=\"515\" data-start=\"413\">Since $f$ is continuous at $x=1$, the left-hand value and right-hand value must match.</p><p data-end=\"551\" data-start=\"517\">From the left piece, $f(1^-)=a+b$.</p><p data-end=\"595\" data-start=\"553\">From the middle piece, $f(1)=e^{0}+c=1+c$.</p><p data-end=\"610\" data-start=\"597\">$\\Rightarrow a+b=1+c$.</p><p data-end=\"712\" data-start=\"612\">Since $f$ is differentiable at $x=1$, the left-hand derivative and right-hand derivative must match.</p><p data-end=\"796\" data-start=\"714\">The derivative of $ax^2+b$ is $2ax$, so the left-hand derivative at $x=1$ is $2a$.</p><p data-end=\"892\" data-start=\"798\">The derivative of $e^{x-1}+cx$ is $e^{x-1}+c$, so the right-hand derivative at $x=1$ is $1+c$.</p><p data-end=\"930\" data-start=\"894\">$\\Rightarrow 2a=1+c$</p><p data-end=\"930\" data-start=\"894\">$\\Rightarrow a=\\frac{c+1}{2}$</p><p data-end=\"930\" data-start=\"894\"> </p><p data-end=\"948\" data-start=\"932\">Now check $x=2$.</p><p data-end=\"1028\" data-start=\"950\">Since $f$ is continuous at $x=2$, the middle piece and right piece must match.</p><p data-end=\"1076\" data-start=\"1030\">From the middle piece, $f(2^-)=e^{1}+2c=e+2c$.</p><p data-end=\"1112\" data-start=\"1078\">From the right piece, $f(2)=2m+n$.</p><p data-end=\"1154\" data-start=\"1114\">$\\Rightarrow 2m+n=e+2c$ </p><p data-end=\"1154\" data-start=\"1114\">$\\Rightarrow n=e+2c-2m$.</p><p data-end=\"1239\" data-start=\"1156\">Because $f$ is not differentiable at $x=2$, the derivatives at $x=2$ are not equal.</p><p data-end=\"1297\" data-start=\"1241\">The left-hand derivative from the middle piece is $e+c$.</p><p data-end=\"1344\" data-start=\"1299\">The right-hand derivative from $mx+n$ is $m$.</p><p data-end=\"1360\" data-start=\"1346\">$\\Rightarrow m\\ne e+c$.</p><p data-end=\"1387\" data-start=\"1362\"> </p><p data-end=\"1387\" data-start=\"1362\">Now evaluate the options : .</p><p data-end=\"1464\" data-start=\"1389\"><strong>A.</strong> $m=c+1$, but we only know $m\\ne e+c$. So A does not have to be true.</p><p data-end=\"1511\" data-start=\"1466\"><strong>B. </strong>$a=\\frac{c+1}{2}$, which must be true.</p><p data-end=\"1595\" data-start=\"1513\"><strong>C. </strong>$n=e+c-m$, but continuity gives $n=e+2c-2m$. So C does not have to be true.</p><p data-end=\"1645\" data-start=\"1597\"><strong>D. </strong>$m=1+2c$, which does not have to be true.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/531439/go-classes-dpp-gate-cs-da-calculus-%26-optimization-piecewise-differentiability\" target=\"_blank\">GATE Overflow #531439</a></small></div>"
        },
        {
            "marks": 2,
            "neg": 0,
            "type": "MSQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"85\" data-start=\"23\">Which of the following statements is/are <strong>TRUE</strong>?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">If $\\lim_{x\\to a} f(x)$ exists and $\\lim_{x\\to a} g(x)$ exists, then $\\lim_{x\\to a} f(g(x))$ must exist.<br/></span>",
                "<span style=\"display: inline;\">If $\\lim_{x\\to a} f(x)=L$ and $L\\ne 0$, then there is some open interval around $a$ where $f(x)\\ne 0$ for all $x\\ne a$.<br/></span>",
                "<span style=\"display: inline;\">If $\\lim_{x\\to a} f(x)g(x)=0$, then either $\\lim_{x\\to a} f(x)=0$ or $\\lim_{x\\to a} g(x)=0$.<br/></span>",
                "<span style=\"display: inline;\">If $\\lim_{x\\to a} |f(x)|=0$, then $\\lim_{x\\to a} f(x)=0$.</span>"
            ],
            "answer": [
                "A"
            ],
            "solution": "<div class=\"solution-content\"><a name=\"531436\"></a><div itemprop=\"text\"><p data-path-to-node=\"0\"><strong>A.</strong> If $\\lim_{x\\to a} f(x)$ exists and $\\lim_{x\\to a} g(x)$ exists, then $\\lim_{x\\to a} f(g(x))$ must exist.</p><ul data-path-to-node=\"2\"><li><p data-path-to-node=\"2,0,0\">FALSE. The fact that $\\lim_{x\\to a} f(x)$ exists only tells us about the behavior of $f$ near $x = a$. It tells us nothing about the behavior of $f$ near the value that $g(x)$ approaches.</p></li><li><p data-path-to-node=\"2,1,0\"><i data-index-in-node=\"0\" data-path-to-node=\"2,1,0\">Counterexample:</i> Let $a = 0$. Suppose $\\lim_{x \\to 0} f(x) = 0$ and $\\lim_{x \\to 0} g(x) = 1$. Since we only know that $f$ has a limit at $0$, $f(x)$ might not even be defined near $1$, or it might have a jump discontinuity at $1$. In such cases, $\\lim_{x\\to 0} f(g(x))$ would not exist.<br/> </p></li></ul><p data-path-to-node=\"3\"><strong>B.</strong> If $\\lim_{x\\to a} f(x)=L$ and $L\\ne 0$, then there is some open interval around $a$ where $f(x)\\ne 0$ for all $x\\ne a$.</p><ul data-path-to-node=\"4\"><li><p data-path-to-node=\"4,0,0\">TRUE. This is known as the Sign-Preserving Property of Limits. By the formal definition of a limit, if $f(x)$ approaches $L$, we can make $f(x)$ as close to $L$ as we want by restricting $x$ close enough to $a$. If we choose a distance strictly less than $|L|$, then $f(x)$ cannot cross over to $0$.</p></li><li><p data-path-to-node=\"4,1,0\"><i data-index-in-node=\"0\" data-path-to-node=\"4,1,0\">Proof:</i> Let $\\epsilon = \\frac{|L|}{2} &gt; 0$. By definition, there exists a $\\delta &gt; 0$ such that if $0 &lt; |x - a| &lt; \\delta$, then $|f(x) - L| &lt; \\frac{|L|}{2}$. This guarantees that $f(x)$ will share the same sign as $L$ within this interval, and therefore cannot be $0$.<br/> </p></li></ul><p data-path-to-node=\"5\"><strong>C. </strong>If $\\lim_{x\\to a} f(x)g(x)=0$, then either $\\lim_{x\\to a} f(x)=0$ or $\\lim_{x\\to a} g(x)=0$.</p><ul data-path-to-node=\"6\"><li><p data-path-to-node=\"6,0,0\">FALSE. This statement fails because the individual limits of $f(x)$ and $g(x)$ might not even exist.</p></li><li><p data-path-to-node=\"6,1,0\"><i data-index-in-node=\"0\" data-path-to-node=\"6,1,0\">Counterexample:</i> Let $a = 0$.</p><p data-path-to-node=\"6,1,0\">Let $f(x) = 1$ for $x &gt; 0$ and $0$ for $x &lt; 0$.</p><p data-path-to-node=\"6,1,0\">Let $g(x) = 0$ for $x &gt; 0$ and $1$ for $x &lt; 0$.</p><p data-path-to-node=\"6,1,0\">The product $f(x)g(x) = 0$ for all $x \\neq 0$, meaning $\\lim_{x\\to 0} [f(x)g(x)] = 0$. However, neither $\\lim_{x\\to 0} f(x)$ nor $\\lim_{x\\to 0} g(x)$ exists due to jump discontinuities.<br/> </p></li></ul><p data-path-to-node=\"7\"><strong>D.</strong> If $\\lim_{x\\to a} |f(x)|=0$, then $\\lim_{x\\to a} f(x)=0$.</p><ul data-path-to-node=\"8\"><li><p data-path-to-node=\"8,0,0\">TRUE. This is a direct application of the Squeeze Theorem (or Sandwich Theorem).</p></li><li><p data-path-to-node=\"8,1,0\"><i data-index-in-node=\"0\" data-path-to-node=\"8,1,0\">Proof:</i> For any real number, $-|f(x)| \\le f(x) \\le |f(x)|$. Since we are given that $\\lim_{x\\to a} |f(x)| = 0$, it must also be true that $\\lim_{x\\to a} -|f(x)| = 0$. Because $f(x)$ is \"squeezed\" between two functions that are both approaching $0$, $\\lim_{x\\to a} f(x)$ must also be $0$.</p></li></ul></div><br><br><small>Source: <a href=\"https://gateoverflow.in/531434/go-classes-dpp-gate-cs-da-calculus-%26-optimization-limit-laws\" target=\"_blank\">GATE Overflow #531434</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"182\" data-start=\"23\">The following are tables of values for two differentiable functions $f(x)$ and $g(x)$ and their derivatives. Missing values are denoted by $?$.</p><p data-end=\"293\" data-start=\"184\">$$f:\\quad \\begin{array}{|c|c|c|c|c|c|} \\hline x&amp;-2&amp;0&amp;1&amp;4&amp;6\\\\ \\hline f(x)&amp;3&amp;-1&amp;2&amp;5&amp;7\\\\ \\hline f'(x)&amp;-4&amp;6&amp;8&amp;-2&amp;? \\\\ \\hline \\end{array} \\qquad \\qquad g:\\quad \\begin{array}{|c|c|c|c|c|c|} \\hline x&amp;-1&amp;0&amp;2&amp;3&amp;5\\\\ \\hline g(x)&amp;4&amp;1&amp;6&amp;0&amp;-2\\\\ \\hline g'(x)&amp;-3&amp;5&amp;2&amp;7&amp;? \\\\ \\hline \\end{array}$$</p><p data-end=\"446\" data-start=\"405\">Let $z(x)=f(g(x))+g(f(x))$. Find $z'(0)$.</p></div></span>",
            "image": "",
            "options": [],
            "answer": "022",
            "solution": "<div class=\"solution-content\"><a name=\"531433\"></a><div itemprop=\"text\"><p data-path-to-node=\"0\">To find the value of $z'(0)$, we first need to find the derivative of the function $z(x)$ using the chain rule.</p><p data-path-to-node=\"1\">Given:</p><p>$$z(x) = f(g(x)) + g(f(x))$$</p><p data-path-to-node=\"3\">Applying the chain rule, the derivative $z'(x)$ is:</p><p>$$z'(x) = f'(g(x)) \\cdot g'(x) + g'(f(x)) \\cdot f'(x)$$</p><p data-path-to-node=\"5\">Now, we evaluate this derivative at $x = 0$:</p><p>$$z'(0) = f'(g(0)) \\cdot g'(0) + g'(f(0)) \\cdot f'(0)$$</p><p data-path-to-node=\"7\">Next, we look up the required values from the provided tables.</p><p data-path-to-node=\"8\">First, find the inner function values and derivatives at $x = 0$</p><ul data-path-to-node=\"9\"><li><p data-path-to-node=\"9,0,0\">From the table for $g$: $g(0) = 1$ and $g'(0) = 5$</p></li><li><p data-path-to-node=\"9,1,0\">From the table for $f$: $f(0) = -1$ and $f'(0) = 6$</p></li></ul><p data-path-to-node=\"10\">Substitute these values into our equation for $z'(0)$:</p><p>$$z'(0) = f'(1) \\cdot 5 + g'(-1) \\cdot 6$$</p><p data-path-to-node=\"12\">Now, find the outer function derivative values</p><p data-path-to-node=\"12\">So, we need to find $f'(1)$ and $g'(-1)$ from the tables:</p><ul data-path-to-node=\"13\"><li><p data-path-to-node=\"13,0,0\">From the table for $f$: at $x = 1$, the derivative $f'(1) = 8$</p></li><li><p data-path-to-node=\"13,1,0\">From the table for $g$: at $x = -1$, the derivative $g'(-1) = -3$</p></li></ul><p data-path-to-node=\"14\"><br/>Substitute these last values into the equation:</p><p>$$\\Rightarrow z'(0) = (8) \\cdot 5 + (-3) \\cdot 6$$</p><p>$$\\Rightarrow z'(0) = 40 - 18$$</p><p>$$\\boxed{\\therefore z'(0) = 22}$$</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/531432/go-classes-dpp-gate-cs-da-calculus-%26-optimization-chain-rule\" target=\"_blank\">GATE Overflow #531432</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"289\" data-start=\"109\">Let $$f(x)=\\frac{(x-3)(x^2+1)}{|x-3|} \\text{ for } x\\ne 3$$ If $f$ is extended to be continuous at $x=3$, what should be the value of $f(3)$?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$10$<br/></span>",
                "<span style=\"display: inline;\">$-10$<br/></span>",
                "<span style=\"display: inline;\">$0$<br/></span>",
                "<span style=\"display: inline;\">No such value exists</span>"
            ],
            "answer": "D",
            "solution": "<div class=\"solution-content\"><a name=\"531431\"></a><div itemprop=\"text\"><p data-path-to-node=\"0\">To determine what value $f(3)$ should be for the function to be continuous at $x=3$, we need to check if the two-sided limit of $f(x)$ as $x$ approaches $3$ exists. For a function to be continuous at a point $x=c$, the limit $\\lim_{x \\to c} f(x)$ must exist and equal $f(c)$.</p><p data-path-to-node=\"1\">Let's find the left-hand limit and the right-hand limit of the function as $x \\to 3$.</p><p data-path-to-node=\"2\">The given function is:</p><p>$$f(x) = \\frac{(x-3)(x^2+1)}{|x-3|}$$</p><p data-path-to-node=\"4\">The absolute value term, $|x-3|$, behaves differently depending on whether $x$ is greater than or less than $3$.</p><ol data-path-to-node=\"5\" start=\"1\"><li><p data-path-to-node=\"5,0,0\"><strong>Right-hand limit </strong>($x \\to 3^+$):</p><p data-path-to-node=\"5,0,0\">When $x$ approaches $3$ from the right, $x &gt; 3$, which means $x - 3 &gt; 0$.</p><p data-path-to-node=\"5,0,0\">Therefore, $|x-3| = x-3$.</p></li></ol><p data-path-to-node=\"6\">Substitute this into the function:</p><p>$$\\Rightarrow \\lim_{x \\to 3^+} f(x) = \\lim_{x \\to 3^+} \\frac{(x-3)(x^2+1)}{x-3}$$</p><p>$$\\Rightarrow \\lim_{x \\to 3^+} f(x) = \\lim_{x \\to 3^+} (x^2+1)$$</p><p>$$\\Rightarrow \\lim_{x \\to 3^+} f(x) = (3)^2 + 1 = \\mathbf{10}$$</p><ol data-path-to-node=\"10\" start=\"2\"><li><p data-path-to-node=\"10,0,0\"><strong>Left-hand limit </strong>($x \\to 3^-$):</p><p data-path-to-node=\"10,0,0\">When $x$ approaches $3$ from the left, $x &lt; 3$, which means $x - 3 &lt; 0$.</p><p data-path-to-node=\"10,0,0\">Therefore, $|x-3| = -(x-3)$.</p></li></ol><p data-path-to-node=\"11\">Substitute this into the function:</p><p>$$\\Rightarrow \\lim_{x \\to 3^-} f(x) = \\lim_{x \\to 3^-} \\frac{(x-3)(x^2+1)}{-(x-3)}$$</p><p>$$\\Rightarrow \\lim_{x \\to 3^-} f(x) = \\lim_{x \\to 3^-} -(x^2+1)$$</p><p>$$\\Rightarrow \\lim_{x \\to 3^-} f(x) = -((3)^2 + 1) = \\mathbf{-10}$$</p><p data-path-to-node=\"15\"> </p><p data-path-to-node=\"15\">Since the right-hand limit and the left-hand limit are not equal ($10 \\neq -10$), the two-sided limit $\\lim_{x \\to 3} f(x)$ does not exist.</p><p data-path-to-node=\"16\">Because the limit does not exist, there is no single value we can assign to $f(3)$ that would make the function continuous at that point.</p><p data-path-to-node=\"17\">The correct answer is <strong>D.</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/531430/go-classes-dpp-gate-cs-da-calculus-%26-optimization-continuity\" target=\"_blank\">GATE Overflow #531430</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"241\" data-start=\"0\">The function $f(x)$ is defined by $$f(x)=\\begin{cases}\\dfrac{x^2+ax+b}{\\sqrt{x+3}},&amp;x\\le 1\\\\\\\\ \\ln(2x-1)+\\dfrac{5x}{x+1},&amp;x&gt;1\\end{cases}$$ where $a$ and $b$ are constants. If $f(x)$ is differentiable at $x=1$, find the value of $a$.</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\frac{35}{8}$<br/></span>",
                "<span style=\"display: inline;\">$\\frac{41}{8}$<br/></span>",
                "<span style=\"display: inline;\">$\\frac{9}{8}$<br/></span>",
                "<span style=\"display: inline;\">$5$</span>"
            ],
            "answer": "B",
            "solution": "<div class=\"solution-content\"><a name=\"531256\"></a><div itemprop=\"text\"><p data-path-to-node=\"0\">To find the value of $a$, we must use the given condition that $f(x)$ is differentiable at $x=1$. For a piecewise function to be differentiable at a point, it must satisfy two conditions at that point:</p><ol data-path-to-node=\"1\" start=\"1\"><li><p data-path-to-node=\"1,0,0\"><strong>Continuity:</strong> The left-hand limit, right-hand limit, and the function value must all be equal.</p></li><li><p data-path-to-node=\"1,1,0\"><strong>Differentiability:</strong> The left-hand derivative must equal the right-hand derivative.</p></li></ol><div> </div><p data-path-to-node=\"2\">Let's use the continuity condition.</p><p data-path-to-node=\"2\">First, find the left-hand limit as $x \\to 1^-$ (using the top piece):</p><p>$$ \\lim_{x\\to 1^-} f(x) = \\lim_{x\\to 1^-} \\frac{x^2+ax+b}{\\sqrt{x+3}} = \\frac{1^2+a(1)+b}{\\sqrt{1+3}} = \\frac{1+a+b}{2} $$</p><p data-path-to-node=\"4\">Next, find the right-hand limit as $x \\to 1^+$ (using the bottom piece):</p><p>$$ \\lim_{x\\to 1^+} f(x) = \\lim_{x\\to 1^+} \\left(\\ln(2x-1)+\\frac{5x}{x+1}\\right) = \\ln(2(1)-1)+\\frac{5(1)}{1+1} = \\ln(1)+\\frac{5}{2} = 0+\\frac{5}{2} = \\frac{5}{2} $$</p><p data-path-to-node=\"6\">Since the function must be continuous at $x=1$, we set the limits equal:</p><p>$$ \\frac{1+a+b}{2} = \\frac{5}{2} $$</p><p>$$ 1+a+b = 5 $$</p><p>$$ a+b = 4 \\implies b = 4-a $$</p><p> </p><p data-path-to-node=\"10\">Now we find the derivatives of the left and right pieces.</p><p data-path-to-node=\"11\">Left-hand derivative:</p><p data-path-to-node=\"11\">Let $g(x) = \\frac{x^2+ax+b}{\\sqrt{x+3}}$. We use the quotient rule:</p><p>$$ g'(x) = \\frac{(2x+a)\\sqrt{x+3} - (x^2+ax+b)\\left(\\frac{1}{2\\sqrt{x+3}}\\right)}{x+3} $$</p><p data-path-to-node=\"13\">Multiply the numerator and denominator by $2\\sqrt{x+3}$ to simplify:</p><p>$$ g'(x) = \\frac{2(2x+a)(x+3) - (x^2+ax+b)}{2(x+3)^{3/2}} $$</p><p data-path-to-node=\"15\">Evaluate at $x=1$:</p><p>$$ g'(1) = \\frac{2(2(1)+a)(1+3) - (1^2+a(1)+b)}{2(1+3)^{3/2}} = \\frac{2(2+a)(4) - (1+a+b)}{2(4)^{3/2}} = \\frac{8(2+a) - (1+a+b)}{2(8)} $$</p><p>$$ g'(1) = \\frac{16+8a-1-a-b}{16} = \\frac{15+7a-b}{16} $$</p><p data-path-to-node=\"18\">Right-hand derivative:</p><p data-path-to-node=\"18\">Let $h(x) = \\ln(2x-1)+\\frac{5x}{x+1}$. We use the chain rule and quotient rule:</p><p>$$ h'(x) = \\frac{2}{2x-1} + \\frac{5(x+1) - 5x(1)}{(x+1)^2} = \\frac{2}{2x-1} + \\frac{5x+5-5x}{(x+1)^2} = \\frac{2}{2x-1} + \\frac{5}{(x+1)^2} $$</p><p data-path-to-node=\"20\">Evaluate at $x=1$:</p><p>$$ h'(1) = \\frac{2}{2(1)-1} + \\frac{5}{(1+1)^2} = \\frac{2}{1} + \\frac{5}{4} = 2 + \\frac{5}{4} = \\frac{13}{4} $$</p><p data-path-to-node=\"22\">Since the function is differentiable at $x=1$, the left-hand and right-hand derivatives must be equal:</p><p>$$ \\frac{15+7a-b}{16} = \\frac{13}{4} $$</p><p data-path-to-node=\"24\"> </p><p data-path-to-node=\"24\">Substitute $b = 4-a$ from our continuity equation into the derivative equation:</p><p>$$ \\Rightarrow \\frac{15+7a-(4-a)}{16} = \\frac{13}{4} $$</p><p>$$ \\Rightarrow \\frac{11+8a}{16} = \\frac{13}{4} $$</p><p data-path-to-node=\"28\">$$ \\Rightarrow 11+8a = 16 \\left(\\frac{13}{4}\\right) $$</p><p>$$ \\Rightarrow 11+8a = 4(13) $$</p><p>$$ \\Rightarrow 11+8a = 52 $$</p><p>$$ \\Rightarrow 8a = 41 $$</p><p>$$ \\boxed{\\therefore a = \\frac{41}{8}} $$</p><p data-path-to-node=\"34\">The correct option is <strong>B.</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/531251/go-classes-dpp-gate-cs-da-calculus-%26-optimization-piecewise-differentiability-conditions\" target=\"_blank\">GATE Overflow #531251</a></small></div>"
        }
    ]
});

registerTest({
    "name": "DPP 05 - Engineering Mathematics (Limits, Continuity & Differentiability - Part 5)",
    "testLabel": "DPP 05",
    "testType": "DPP",
    "bracket": "Limits, Continuity & Differentiability - Part 5",
    "subject": "em",
    "series": "cse-dpp-2027",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 10,
    "topicsCovered": "Limits, Continuity & Differentiability (Practice Set 5)",
    "questions": [
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"252\" data-start=\"0\">Consider the piecewise function $$f(x)=\\begin{cases}\\dfrac{e^{Cx}-1+4x}{\\sin(2x)},&amp;x&lt;0\\\\\\\\ \\dfrac{(C^2-1)x^2+7x+3}{2x^2+\\sqrt{x^4+1}},&amp;x\\ge 0\\end{cases}$$where $C$ is a constant. If $q(x)$ is continuous at $x=0$, find $\\lim_{x\\to\\infty}f(x)$.</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$0$<br/></span>",
                "<span style=\"display: inline;\">$\\frac{1}{3}$<br/></span>",
                "<span style=\"display: inline;\">$1$<br/></span>",
                "<span style=\"display: inline;\">$3$</span>"
            ],
            "answer": "C",
            "solution": "<div class=\"solution-content\"><a name=\"531253\"></a><div itemprop=\"text\"><p data-path-to-node=\"0\">To find the limit $\\lim_{x\\to\\infty}f(x)$, we first need to determine the value of the constant $C$. We are given that $f(x)$ is continuous at $x=0$.</p><p data-path-to-node=\"1\">For a piecewise function to be continuous at a point, its left-hand limit, right-hand limit, and the function's value at that point must all be equal.</p><p data-path-to-node=\"1\"> </p><p data-path-to-node=\"2\"><strong>Step 1:</strong> Find the right-hand limit and function value at $x=0$</p><p data-path-to-node=\"2\">For $x \\ge 0$, the function is $f(x) = \\frac{(C^2-1)x^2+7x+3}{2x^2+\\sqrt{x^4+1}}$.</p><p data-path-to-node=\"2\">Substitute $x=0$ to find the limit from the right (which is also the value of the function at $0$):</p><p>$$ \\lim_{x \\to 0^+} f(x) = \\frac{(C^2-1)(0)^2+7(0)+3}{2(0)^2+\\sqrt{0^4+1}} = \\frac{3}{\\sqrt{1}} = 3 $$</p><p> </p><p data-path-to-node=\"4\"><strong>Step 2:</strong> Find the left-hand limit at $x=0$</p><p data-path-to-node=\"4\">For $x &lt; 0$, the function is $f(x) = \\frac{e^{Cx}-1+4x}{\\sin(2x)}$.</p><p>$$ \\lim_{x \\to 0^-} \\frac{e^{Cx}-1+4x}{\\sin(2x)} $$</p><p data-path-to-node=\"6\">If we directly substitute $x=0$, we get $\\frac{1-1+0}{0} = \\frac{0}{0}$, which is an indeterminate form. We can apply L'Hopital's Rule by taking the derivative of the numerator and the denominator:</p><ul data-path-to-node=\"7\"><li><p data-path-to-node=\"7,0,0\">Derivative of numerator: $\\frac{d}{dx}[e^{Cx}-1+4x] = Ce^{Cx} + 4$</p></li><li><p data-path-to-node=\"7,1,0\">Derivative of denominator: $\\frac{d}{dx}[\\sin(2x)] = 2\\cos(2x)$</p></li></ul><p data-path-to-node=\"8\">Now, evaluate the limit of the new expression as $x \\to 0$:</p><p>$$ \\lim_{x \\to 0^-} \\frac{Ce^{Cx} + 4}{2\\cos(2x)} = \\frac{Ce^0 + 4}{2\\cos(0)} = \\frac{C + 4}{2} $$</p><p> </p><p data-path-to-node=\"10\"><strong>Step 3: </strong>Solve for $C$</p><p data-path-to-node=\"10\">Because the function is continuous at $x=0$, we set the left-hand limit equal to the right-hand limit:</p><p>$$ \\Rightarrow \\frac{C + 4}{2} = 3 $$</p><p>$$ \\Rightarrow C + 4 = 6 $$</p><p>$$ \\Rightarrow C = 2 $$</p><p> </p><p data-path-to-node=\"14\"><strong>Step 4:</strong> Evaluate the limit as $x \\to \\infty$</p><p data-path-to-node=\"14\">Since we are evaluating the limit as $x \\to \\infty$, we use the piece of the function defined for $x \\ge 0$:</p><p>$$ \\lim_{x \\to \\infty} \\frac{(C^2-1)x^2+7x+3}{2x^2+\\sqrt{x^4+1}} $$</p><p data-path-to-node=\"16\">Substitute $C = 2$ into the expression:</p><p>$$ \\lim_{x \\to \\infty} \\frac{(2^2-1)x^2+7x+3}{2x^2+\\sqrt{x^4+1}} = \\lim_{x \\to \\infty} \\frac{3x^2+7x+3}{2x^2+\\sqrt{x^4+1}} $$</p><p data-path-to-node=\"18\">To evaluate this limit at infinity, divide the numerator and the denominator by the highest power of $x$ in the denominator, which is $x^2$ (note that $\\sqrt{x^4} = x^2$ for $x &gt; 0$):</p><p>$$ \\lim_{x \\to \\infty} \\frac{\\frac{3x^2}{x^2} + \\frac{7x}{x^2} + \\frac{3}{x^2}}{\\frac{2x^2}{x^2} + \\frac{\\sqrt{x^4+1}}{\\sqrt{x^4}}} $$</p><p>$$ = \\lim_{x \\to \\infty} \\frac{3 + \\frac{7}{x} + \\frac{3}{x^2}}{2 + \\sqrt{\\frac{x^4+1}{x^4}}} $$</p><p>$$ = \\lim_{x \\to \\infty} \\frac{3 + \\frac{7}{x} + \\frac{3}{x^2}}{2 + \\sqrt{1+\\frac{1}{x^4}}} $$</p><p data-path-to-node=\"22\">As $x \\to \\infty$, the terms with $x$ in the denominator approach $0$:</p><p>$$ \\frac{3 + 0 + 0}{2 + \\sqrt{1+0}} = \\frac{3}{2 + 1} = \\frac{3}{3} = \\boxed{1} $$</p><p data-path-to-node=\"24\">The correct option is <strong>C.</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/531250/go-classes-dpp-gate-cs-da-calculus-%26-optimization-continuity-and-limits\" target=\"_blank\">GATE Overflow #531250</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"146\" data-start=\"0\">Suppose $p(x)$ is twice differentiable for all real values of $x$. Some values of $p'(x)$ and $p''(x)$ are given in the table below:</p><p data-end=\"275\" data-start=\"148\">$$\\begin{array}{|c|c|c|c|c|c|c|c|c|c|}\\hline x&amp;-5&amp;-4&amp;-3&amp;-2&amp;-1&amp;0&amp;1&amp;2&amp;3\\\\ \\hline p'(x)&amp;0&amp;-2&amp;0&amp;0&amp;3&amp;0&amp;-1&amp;0&amp;0\\\\\\hline p''(x)&amp;0&amp;4&amp;-6&amp;0&amp;-2&amp;0&amp;5&amp;8&amp;0\\\\\\hline\\end{array}$$</p><p data-end=\"350\" data-start=\"277\">At which of the following values of $x$ must $p(x)$ have a local minimum?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$x=-5$<br/></span>",
                "<span style=\"display: inline;\">$x=-3$<br/></span>",
                "<span style=\"display: inline;\">$x=0$<br/></span>",
                "<span style=\"display: inline;\">$x=2$</span>"
            ],
            "answer": "D",
            "solution": "<div class=\"solution-content\"><a name=\"531247\"></a><div itemprop=\"text\"><p data-path-to-node=\"0\">Let's do the Second Derivative Test for a twice-differentiable function:</p><ol data-path-to-node=\"2\" start=\"1\"><li><p data-path-to-node=\"2,0,0\"><strong>Find the critical points:</strong> A point $x = c$ is a critical point if $p'(c) = 0$. Local extrema can only occur at these points.</p></li><li><p data-path-to-node=\"2,1,0\">Evaluate the second derivative:</p><ul data-path-to-node=\"2,1,1\"><li><p data-path-to-node=\"2,1,1,0,0\">If $p''(c) &gt; 0$, the function is concave up at $c$, meaning there is a <strong>local minimum.</strong></p></li><li><p data-path-to-node=\"2,1,1,1,0\">If $p''(c) &lt; 0$, the function is concave down at $c$, meaning there is a <strong>local maximum.</strong></p></li><li><p data-path-to-node=\"2,1,1,2,0\">If $p''(c) = 0$, the test is inconclusive (it could be a minimum, maximum, or neither).</p></li></ul></li></ol><p data-path-to-node=\"3\"> </p><p data-path-to-node=\"3\">Now, Let's evaluate the given options:</p><ul data-path-to-node=\"4\"><li><p data-path-to-node=\"4,0,0\"><b data-index-in-node=\"0\" data-path-to-node=\"4,0,0\">A. $x = -5$:</b> $p'(-5) = 0$, so it is a critical point. However, $p''(-5) = 0$. The test is inconclusive, so it <i data-index-in-node=\"104\" data-path-to-node=\"4,0,0\">might</i> not be a local minimum.</p></li><li><p data-path-to-node=\"4,1,0\"><b data-index-in-node=\"0\" data-path-to-node=\"4,1,0\">B. $x = -3$:</b> $p'(-3) = 0$, so it is a critical point. $p''(-3) = -6$. Since the second derivative is negative, there is a <b data-index-in-node=\"116\" data-path-to-node=\"4,1,0\">local maximum</b> at $x = -3$.</p></li><li><p data-path-to-node=\"4,2,0\"><b data-index-in-node=\"0\" data-path-to-node=\"4,2,0\">C. $x = 0$:</b> $p'(0) = 0$, so it is a critical point. However, $p''(0) = 0$. The test is inconclusive.</p></li><li><p data-path-to-node=\"4,3,0\"><b data-index-in-node=\"0\" data-path-to-node=\"4,3,0\">D. $x = 2$:</b> $p'(2) = 0$, so it is a critical point. $p''(2) = 8$. Since the second derivative is positive, there <b data-index-in-node=\"107\" data-path-to-node=\"4,3,0\">must</b> be a <b data-index-in-node=\"117\" data-path-to-node=\"4,3,0\">local minimum</b> at $x = 2$.</p></li></ul><p data-path-to-node=\"5\">Therefore, the correct answer is <b data-index-in-node=\"33\" data-path-to-node=\"5\">D</b>.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/531245/go-classes-dpp-gate-cs-da-calculus-%26-optimization-second-derivative-test\" target=\"_blank\">GATE Overflow #531245</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"274\" data-start=\"0\">A portion of the graph of an even function $f(x)$ is shown only on the interval $[0,6]$, although $f(x)$ is defined for all real numbers. The graph has a vertical asymptote at $x=2$. </p><p style=\"text-align:center\"><img alt=\"\" height=\"383\" src=\"https://cdn.mathpix.com/snip/images/NSK5Nq8BRxMbnIk3FrR0Z55XBeJXj8RhwwLorhfwHRQ.original.fullsize.png\" width=\"500\"/></p><p data-end=\"274\" data-start=\"0\">Using the graph, find the value of :$$\\lim_{h\\to 0}\\frac{f(-4+3h)-f(-4-h)}{h}$$</p></div></span>",
            "image": "https://cdn.mathpix.com/snip/images/NSK5Nq8BRxMbnIk3FrR0Z55XBeJXj8RhwwLorhfwHRQ.original.fullsize.png",
            "options": [
                "<span style=\"display: inline;\">$-8$<br/></span>",
                "<span style=\"display: inline;\">$-6$<br/></span>",
                "<span style=\"display: inline;\">$0$<br/></span>",
                "<span style=\"display: inline;\">$6$</span>"
            ],
            "answer": "D",
            "solution": "<div class=\"solution-content\"><a name=\"531246\"></a><div itemprop=\"text\"><p data-path-to-node=\"1\">We are given that $f(x)$ is an even function, which means $f(-x) = f(x)$ for all $x$ in its domain.</p><p data-path-to-node=\"1\">We can rewrite the terms in the limit using this property:</p><ul data-path-to-node=\"2\"><li><p data-path-to-node=\"2,0,0\">$f(-4 + 3h) = f(4 - 3h)$</p></li><li><p data-path-to-node=\"2,1,0\">$f(-4 - h) = f(4 + h)$</p></li></ul><p data-path-to-node=\"3\">Substituting these into the original limit expression:</p><p>$$L = \\lim_{h \\to 0} \\frac{f(4 - 3h) - f(4 + h)}{h}$$</p><p> </p><p data-path-to-node=\"5\">Now, We can evaluate this limit by recognizing it as a form of the definition of the derivative. Let's add and subtract $f(4)$ in the numerator:</p><p>$$L = \\lim_{h \\to 0} \\frac{f(4 - 3h) - f(4) - (f(4 + h) - f(4))}{h}$$</p><p>$$L = \\lim_{h \\to 0} \\left[ \\frac{f(4 - 3h) - f(4)}{h} - \\frac{f(4 + h) - f(4)}{h} \\right]$$</p><p data-path-to-node=\"8\">Now, split the limit and adjust the denominators to match the terms inside the function:</p><p>$$L = \\lim_{h \\to 0} \\left[ -3 \\cdot \\frac{f(4 - 3h) - f(4)}{-3h} \\right] - \\lim_{h \\to 0} \\left[ \\frac{f(4 + h) - f(4)}{h} \\right]$$</p><p data-path-to-node=\"10\">By definition, $\\lim_{\\Delta x \\to 0} \\frac{f(x + \\Delta x) - f(x)}{\\Delta x} = f'(x)$. Therefore:</p><p>$$L = -3f'(4) - f'(4) = -4f'(4)$$</p><p data-path-to-node=\"12\"><i data-index-in-node=\"0\" data-path-to-node=\"12\">(Alternatively, you can apply L'Hopital's rule directly to the limit since it evaluates to $\\frac{0}{0}$ as $h \\to 0$.)</i></p><p data-path-to-node=\"12\"> </p><p data-path-to-node=\"13\">The value $f'(4)$ is the slope of the tangent line to the graph at $x = 4$.</p><p data-path-to-node=\"13\">Looking at the graph, between $x = 3$ and $x = 5$, the function is a straight line passing through the points $(3, 0)$ and $(5, 3)$.</p><p data-path-to-node=\"14\">Let's calculate the slope ($m$) of this line segment:</p><p>$$m = \\frac{y_2 - y_1}{x_2 - x_1} = \\frac{3 - 0}{5 - 3} = \\frac{3}{2}$$</p><p data-path-to-node=\"16\">Since the graph is a straight line in the interval $(3, 5)$, the derivative is constant and equal to the slope for any $x$ in that interval.</p><p data-path-to-node=\"16\">Therefore, $f'(4) = \\frac{3}{2}$.</p><p data-path-to-node=\"17\"> </p><p data-path-to-node=\"17\">Substitute $f'(4)$ back into our limit expression:</p><p>$$L = -4 \\left(\\frac{3}{2}\\right)$$</p><p>$$ \\boxed{\\therefore L = -6}$$</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/531244/go-classes-dpp-gate-cs-da-calculus-%26-optimization-derivatives-from-graphs\" target=\"_blank\">GATE Overflow #531244</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"69\" data-start=\"0\">Evaluate the following limit and find the value of $a$:</p><p data-end=\"157\" data-start=\"71\">$$\\lim_{x\\to 0}\\frac{\\sqrt{1+4x+7x^2}-\\sqrt[3]{1+6x+9x^2}+x-\\ln(1+x)}{x^2}=\\frac{a}{6}$$</p><p data-end=\"184\" data-start=\"159\">What is the value of $a$?</p></div></span>",
            "image": "",
            "options": [],
            "answer": "18",
            "solution": "<div class=\"solution-content\"><a name=\"531242\"></a><div itemprop=\"text\"><p data-path-to-node=\"0\">To find the value of $a$, we can evaluate the limit by finding the Maclaurin series (Taylor series centered at $x=0$) for each term in the numerator up to the $x^2$ term.</p><p data-path-to-node=\"1\">The limit is given by:</p><p>$$ L = \\lim_{x\\to 0}\\frac{\\sqrt{1+4x+7x^2}-\\sqrt[3]{1+6x+9x^2}+x-\\ln(1+x)}{x^2} $$</p><p data-path-to-node=\"3\">Let's expand each part of the numerator using standard expansions:</p><ol data-path-to-node=\"4\" start=\"1\"><li><p data-path-to-node=\"4,0,0\"><b data-index-in-node=\"0\" data-path-to-node=\"4,0,0\">$(1+u)^n \\approx 1 + nu + \\frac{n(n-1)}{2}u^2$</b></p></li><li><p data-path-to-node=\"4,1,0\"><b data-index-in-node=\"0\" data-path-to-node=\"4,1,0\">$\\ln(1+x) \\approx x - \\frac{x^2}{2}$</b><br/> </p></li></ol><p data-path-to-node=\"5\"><strong>Expansion of $\\sqrt{1+4x+7x^2}$ :</strong></p><p data-path-to-node=\"6\">Here, $u = 4x+7x^2$ and $n = \\frac{1}{2}$.</p><p data-path-to-node=\"6\">Since we only need terms up to $x^2$, $u^2 \\approx (4x)^2 = 16x^2$.</p><p>$$ (1 + (4x+7x^2))^{\\frac{1}{2}} \\approx 1 + \\frac{1}{2}(4x+7x^2) + \\frac{\\frac{1}{2}(-\\frac{1}{2})}{2}(16x^2) $$</p><p>$$ \\approx 1 + 2x + \\frac{7}{2}x^2 - \\frac{1}{8}(16x^2) $$</p><p>$$ \\approx 1 + 2x + \\frac{7}{2}x^2 - 2x^2 $$</p><p>$$ = 1 + 2x + \\frac{3}{2}x^2 $$</p><p> </p><p data-path-to-node=\"11\"><strong>Expansion of $\\sqrt[3]{1+6x+9x^2}$ :</strong></p><p data-path-to-node=\"12\">Here, $u = 6x+9x^2$ and $n = \\frac{1}{3}$.</p><p data-path-to-node=\"12\">Again, for terms up to $x^2$, $u^2 \\approx (6x)^2 = 36x^2$.</p><p>$$ (1 + (6x+9x^2))^{\\frac{1}{3}} \\approx 1 + \\frac{1}{3}(6x+9x^2) + \\frac{\\frac{1}{3}(-\\frac{2}{3})}{2}(36x^2) $$</p><p>$$ \\approx 1 + 2x + 3x^2 - \\frac{1}{9}(36x^2) $$</p><p>$$ \\approx 1 + 2x + 3x^2 - 4x^2 $$</p><p>$$ = 1 + 2x - x^2 $$</p><p> </p><p data-path-to-node=\"17\"><strong>Expansion of $\\ln(1+x)$ :</strong></p><p data-path-to-node=\"18\">This is a standard expansion:</p><p>$$ \\ln(1+x) \\approx x - \\frac{1}{2}x^2 $$</p><p> </p><p data-path-to-node=\"20\"><strong>Substitute Back into the Numerator :</strong></p><p data-path-to-node=\"21\">Now, piece the expanded numerator together:</p><p>$$ \\text{Numerator} = \\left(1 + 2x + \\frac{3}{2}x^2\\right) - (1 + 2x - x^2) + x - \\left(x - \\frac{1}{2}x^2\\right) $$</p><p data-path-to-node=\"23\">Group the constant, $x$, and $x^2$ terms:</p><ul data-path-to-node=\"24\"><li><p data-path-to-node=\"24,0,0\"><b data-index-in-node=\"0\" data-path-to-node=\"24,0,0\">Constant terms:</b> $1 - 1 = 0$</p></li><li><p data-path-to-node=\"24,1,0\"><b data-index-in-node=\"0\" data-path-to-node=\"24,1,0\">$x$ terms:</b> $2x - 2x + x - x = 0$</p></li><li><p data-path-to-node=\"24,2,0\"><b data-index-in-node=\"0\" data-path-to-node=\"24,2,0\">$x^2$ terms:</b> $\\frac{3}{2}x^2 - (-x^2) - \\left(-\\frac{1}{2}x^2\\right) = \\left(\\frac{3}{2} + 1 + \\frac{1}{2}\\right)x^2 = 3x^2$</p></li></ul><p data-path-to-node=\"25\">The numerator simplifies to $3x^2$.</p><p data-path-to-node=\"26\"><br/><strong>Evaluate the Limit and Solve for $a$</strong></p><p data-path-to-node=\"27\">Substitute the simplified numerator back into the limit expression:</p><p>$$ L = \\lim_{x\\to 0}\\frac{3x^2}{x^2} = 3 $$</p><p data-path-to-node=\"29\">We are given that the limit equals $\\frac{a}{6}$:</p><p>$$ 3 = \\frac{a}{6} $$</p><p>$$ \\boxed {\\therefore a = 18} $$</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/531240/go-classes-dpp-gate-cs-da-calculus-%26-optimization-limits\" target=\"_blank\">GATE Overflow #531240</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"44\" data-start=\"14\">Determine the following limit:</p><p data-end=\"91\" data-start=\"46\">$$L=\\lim_{x\\to\\infty}x^2\\left(\\sqrt{9x^2+6x+5}-3x-1-\\frac{2}{3x}\\right)$$</p><p data-end=\"150\" data-start=\"93\">Which of the following is the correct value of the limit?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$0$<br/></span>",
                "<span style=\"display: inline;\">$\\frac{2}{9}$<br/></span>",
                "<span style=\"display: inline;\">$-\\frac{2}{9}$<br/></span>",
                "<span style=\"display: inline;\">$\\frac{1}{3}$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"531006\"></a><div itemprop=\"text\"><p data-path-to-node=\"2\">Let's group the terms inside the parenthesis into two parts: the square root part and the rational part.</p><p>$$L = \\lim_{x\\to\\infty} x^2 \\left( \\sqrt{9x^2+6x+5} - \\left(3x + 1 + \\frac{2}{3x}\\right) \\right)$$</p><p data-path-to-node=\"4\"> </p><p data-path-to-node=\"4\">Multiply the numerator and denominator by the conjugate, which is $\\sqrt{9x^2+6x+5} + \\left(3x + 1 + \\frac{2}{3x}\\right)$.</p><p data-path-to-node=\"4\">Using the difference of squares formula $(A-B)(A+B) = A^2 - B^2$, the expression inside the limit becomes:</p><p>$$\\frac{x^2 \\left( (9x^2+6x+5) - \\left(3x + 1 + \\frac{2}{3x}\\right)^2 \\right)}{\\sqrt{9x^2+6x+5} + 3x + 1 + \\frac{2}{3x}}$$</p><p data-path-to-node=\"6\"> </p><p data-path-to-node=\"6\">Expanding and simplifying the numerator :</p><p data-path-to-node=\"6\">Let's expand the squared term:</p><p>$$\\left(3x + 1 + \\frac{2}{3x}\\right)^2 = (3x+1)^2 + 2(3x+1)\\left(\\frac{2}{3x}\\right) + \\left(\\frac{2}{3x}\\right)^2$$</p><p>$$= 9x^2 + 6x + 1 + \\frac{12x + 4}{3x} + \\frac{4}{9x^2}$$</p><p>$$= 9x^2 + 6x + 1 + 4 + \\frac{4}{3x} + \\frac{4}{9x^2}$$</p><p>$$= 9x^2 + 6x + 5 + \\frac{4}{3x} + \\frac{4}{9x^2}$$</p><p data-path-to-node=\"11\">Now, substitute this back into the numerator and distribute the negative sign. Notice how all the large terms beautifully cancel out:</p><p data-path-to-node=\"11\">Numerator $= x^2 \\left( 9x^2 + 6x + 5 - 9x^2 - 6x - 5 - \\frac{4}{3x} - \\frac{4}{9x^2} \\right)$</p><p data-path-to-node=\"11\">Numerator $= x^2 \\left( - \\frac{4}{3x} - \\frac{4}{9x^2} \\right)$</p><p data-path-to-node=\"11\">Numerator $= - \\frac{4x}{3} - \\frac{4}{9}$</p><p data-path-to-node=\"12\"> </p><p data-path-to-node=\"12\">Evaluating the limit :</p><p data-path-to-node=\"12\">Now put the simplified numerator back over the denominator:</p><p>$$L = \\lim_{x\\to\\infty} \\frac{-\\frac{4x}{3} - \\frac{4}{9}}{\\sqrt{9x^2+6x+5} + 3x + 1 + \\frac{2}{3x}}$$</p><p data-path-to-node=\"14\">Divide the top and bottom by the highest power of $x$ in the denominator, which is $x$:</p><p>$$\\Rightarrow L = \\lim_{x\\to\\infty} \\frac{-\\frac{4}{3} - \\frac{4}{9x}}{\\sqrt{\\frac{9x^2+6x+5}{x^2}} + 3 + \\frac{1}{x} + \\frac{2}{3x^2}}$$</p><p>$$\\Rightarrow L = \\lim_{x\\to\\infty} \\frac{-\\frac{4}{3} - \\frac{4}{9x}}{\\sqrt{9 + \\frac{6}{x} + \\frac{5}{x^2}} + 3 + \\frac{1}{x} + \\frac{2}{3x^2}}$$</p><p data-path-to-node=\"17\">As $x \\to \\infty$, all terms with $x$ in the denominator go to 0:</p><p>$$\\Rightarrow L = \\frac{-\\frac{4}{3} - 0}{\\sqrt{9 + 0 + 0} + 3 + 0 + 0}$$</p><p>$$\\Rightarrow L = \\frac{-\\frac{4}{3}}{3 + 3}= -\\frac{4}{18}$$</p><p>$$\\boxed{\\therefore L = -\\frac{2}{9}}$$</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/531004/go-classes-dpp-gate-cs-da-calculus-%26-optimization-limits-at-infinity\" target=\"_blank\">GATE Overflow #531004</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"171\" data-start=\"14\">Suppose that a function $f$ is defined by $$f(x)=\\begin{cases}\\frac{x^2-2x-8}{x-4}+3, &amp; x\\lt 4 \\\\\\\\ 25, &amp; x=4 \\\\\\\\ \\frac{\\sqrt{x+5}-3}{x-4}, &amp; x\\gt 4\\end{cases}$$</p><p data-end=\"244\" data-start=\"173\">Let $M=\\lim_{x\\to 4^-}f(x)$ and $N=\\lim_{x\\to 4^+}f(x)$. Find $5M+18N$</p></div></span>",
            "image": "",
            "options": [],
            "answer": "48",
            "solution": "<div class=\"solution-content\"><a name=\"531002\"></a><div itemprop=\"text\"><p>We need to evaluate the left-sided limit ($M$) and the right-sided limit ($N$) of the function $f(x)$ as $x$ approaches $4$.</p><p data-path-to-node=\"1\"><strong>Calculating the left-sided limit,</strong> $M :$</p><p data-path-to-node=\"1\">For $x \\lt 4$, the function is $f(x) = \\frac{x^2-2x-8}{x-4} + 3$.</p><p data-path-to-node=\"1\">We evaluate the limit as $x$ approaches $4$ from the left:</p><p>$$\\Rightarrow M = \\lim_{x\\to 4^-} \\left( \\frac{x^2-2x-8}{x-4} + 3 \\right)$$</p><p>$$\\Rightarrow M = \\lim_{x\\to 4^-} \\left( \\frac{(x-4)(x+2)}{x-4} + 3 \\right)$$</p><p data-path-to-node=\"7\">Since $x$ is approaching $4$ but is not equal to $4$, we can cancel the $(x-4)$ terms:</p><p>$$\\Rightarrow M = \\lim_{x\\to 4^-} (x + 2 + 3)$$</p><p>$$\\Rightarrow M = \\lim_{x\\to 4^-} (x + 5)$$</p><p data-path-to-node=\"10\">Substitute $x = 4$:</p><p>$$M = 4 + 5 = 9$$<br/> </p><p data-path-to-node=\"12\"><strong>Calculating the right-sided limit,</strong> $N:$</p><p data-path-to-node=\"12\">For $x \\gt 4$, the function is $f(x) = \\frac{\\sqrt{x+5}-3}{x-4}$.</p><p data-path-to-node=\"12\">We evaluate the limit as $x$ approaches $4$ from the right:</p><p>$$\\Rightarrow N = \\lim_{x\\to 4^+} \\frac{\\sqrt{x+5}-3}{x-4}$$</p><p data-path-to-node=\"14\">Direct substitution of $x=4$ gives the indeterminate form $0/0$. To resolve this, multiply the numerator and the denominator by the conjugate of the numerator, which is $(\\sqrt{x+5}+3)$:</p><p>$$\\Rightarrow N = \\lim_{x\\to 4^+} \\frac{(\\sqrt{x+5}-3)(\\sqrt{x+5}+3)}{(x-4)(\\sqrt{x+5}+3)}$$</p><p data-path-to-node=\"16\">Simplify the numerator using the difference of squares $(a-b)(a+b) = a^2 - b^2$:</p><p>$$\\Rightarrow N = \\lim_{x\\to 4^+} \\frac{(x+5) - 9}{(x-4)(\\sqrt{x+5}+3)}$$</p><p>$$\\Rightarrow N = \\lim_{x\\to 4^+} \\frac{x-4}{(x-4)(\\sqrt{x+5}+3)}$$</p><p data-path-to-node=\"19\">Cancel the common $(x-4)$ term:</p><p>$$\\Rightarrow N = \\lim_{x\\to 4^+} \\frac{1}{\\sqrt{x+5}+3}$$</p><p data-path-to-node=\"21\">Now, substitute $x = 4$:</p><p>$$\\Rightarrow N = \\frac{1}{\\sqrt{4+5}+3}$$</p><p>$$\\Rightarrow N = \\frac{1}{\\sqrt{9}+3}$$</p><p>$$\\Rightarrow N = \\frac{1}{6}$$</p><p data-path-to-node=\"26\"><br/><strong>Calculating</strong> $5M + 18N :$</p><p data-path-to-node=\"26\">Substitute the values of $M=9$ and $N=1/6$ into the expression:</p><p>$$\\Rightarrow 5M + 18N = 5(9) + 18\\left(\\frac{1}{6}\\right) = 45 + 3$$</p><p>$$\\boxed {\\therefore 5M + 18N = 48}$$</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/530991/go-classes-dpp-gate-cs-da-calculus-%26-optimization-one-sided-limits\" target=\"_blank\">GATE Overflow #530991</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"202\" data-start=\"14\">Let $f(x)$ be continuous on $[1,3]$ and differentiable on $(1,3)$. If $f(1)=5$ and $2x+1\\le f'(x)\\le 4x+3$ for all $x\\in(1,3)$, then the smallest and largest possible values of $f(3)$ are:</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$15$ and $27$<br/></span>",
                "<span style=\"display: inline;\">$10$ and $22$<br/></span>",
                "<span style=\"display: inline;\">$12$ and $24$<br/></span>",
                "<span style=\"display: inline;\">$14$ and $26$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"530990\"></a><div itemprop=\"text\"><p data-path-to-node=\"0\">To find the smallest and largest possible values of $f(3)$, we can integrate the given inequality for the derivative $f'(x)$ over the interval from $x = 1$ to $x = 3$.</p><p data-path-to-node=\"1\">We are given the inequality:</p><p>$$2x + 1 \\le f'(x) \\le 4x + 3$$</p><p data-path-to-node=\"3\">Since this holds for all $x$ in the interval, we can integrate all parts of the inequality with respect to $x$ from $1$ to $3:$</p><p>$$\\int_{1}^{3} (2x + 1) dx \\le \\int_{1}^{3} f'(x) dx \\le \\int_{1}^{3} (4x + 3) dx$$</p><p>$$\\Rightarrow \\left[x^2 + x\\right]_{1}^{3} dx \\le \\left[f(x)\\right]_{1}^{3} \\le \\left[2x^2 + 3x\\right]_{1}^{3}$$</p><p>$$\\Rightarrow \\left[(3^2 + 3) - (1^2 + 1)\\right] \\le f(3) - f(1) \\le \\left[(2(3)^2 + 3(3)) - (2(1)^2 + 3(1))\\right] $$</p><p>$$\\Rightarrow \\left[(9 + 3) - (1 + 1)\\right] \\le f(3) - 5 \\le \\left[(2(9) + 9) - (2 + 3)\\right] $$</p><p>$$\\Rightarrow 10 \\le f(3) - 5 \\le 22$$</p><p data-path-to-node=\"22\">Now, add $5$ to all parts of the inequality to isolate $f(3)$:</p><p>$$\\Rightarrow 10 + 5 \\le f(3) \\le 22 + 5$$</p><p>$$\\Rightarrow \\boxed{15 \\le f(3) \\le 27}$$</p><p data-path-to-node=\"25\">The smallest possible value of $f(3)$ is $15$, and the largest possible value is $27$.</p><p data-path-to-node=\"26\">This corresponds to option <strong>A</strong>.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/530989/go-classes-dpp-gate-cs-da-calculus-%26-optimization-derivative-bounds\" target=\"_blank\">GATE Overflow #530989</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"75\" data-start=\"14\">Evaluate the limit $\\lim_{x\\to-\\infty}(\\sqrt{9x^2+6x+5}+3x)$.</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$-1$<br/></span>",
                "<span style=\"display: inline;\">$0$<br/></span>",
                "<span style=\"display: inline;\">$1$<br/></span>",
                "<span style=\"display: inline;\">Limit does not exist</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"530968\"></a><div itemprop=\"text\"><p>To evaluate the limit $\\lim_{x\\to-\\infty}(\\sqrt{9x^2+6x+5}+3x)$, we first notice that as $x$ approaches $-\\infty$, the expression takes the indeterminate form of $\\infty - \\infty$.</p><p data-path-to-node=\"1\">To resolve the indeterminate form, we multiply and divide the expression by its conjugate:</p><p>$$\\Rightarrow \\lim_{x\\to-\\infty} \\frac{(\\sqrt{9x^2+6x+5}+3x)(\\sqrt{9x^2+6x+5}-3x)}{\\sqrt{9x^2+6x+5}-3x}$$</p><p>Using $(a+b)(a-b) = a^2 - b^2$, we can simplify the top expression:</p><p>$$\\Rightarrow \\lim_{x\\to-\\infty} \\frac{(9x^2+6x+5) - (3x)^2}{\\sqrt{9x^2+6x+5}-3x}$$</p><p>$$\\Rightarrow \\lim_{x\\to-\\infty} \\frac{9x^2+6x+5 - 9x^2}{\\sqrt{9x^2+6x+5}-3x}$$</p><p>$$\\Rightarrow \\lim_{x\\to-\\infty} \\frac{6x+5}{\\sqrt{9x^2+6x+5}-3x}$$</p><p data-path-to-node=\"7\">Inside the square root, factor out $x^2$:</p><p>$$\\Rightarrow \\lim_{x\\to-\\infty} \\frac{6x+5}{\\sqrt{x^2(9 + \\frac{6}{x} + \\frac{5}{x^2})} - 3x}$$</p><p data-path-to-node=\"9\">Since $x \\to -\\infty$, $x$ is a negative number. Therefore, when we pull $x^2$ out of the square root, $\\sqrt{x^2} = |x| = -x$. This is a crucial step to get the correct sign.</p><p>$$\\Rightarrow \\lim_{x\\to-\\infty} \\frac{6x+5}{-x\\sqrt{9 + \\frac{6}{x} + \\frac{5}{x^2}} - 3x}$$</p><p data-path-to-node=\"11\">Divide the numerator and denominator by $x$.</p><p>$$\\Rightarrow \\lim_{x\\to-\\infty} \\frac{\\frac{6x}{x} + \\frac{5}{x}}{\\frac{-x\\sqrt{9 + \\frac{6}{x} + \\frac{5}{x^2}}}{x} - \\frac{3x}{x}}$$</p><p>$$\\Rightarrow \\lim_{x\\to-\\infty} \\frac{6 + \\frac{5}{x}}{-\\sqrt{9 + \\frac{6}{x} + \\frac{5}{x^2}} - 3}$$</p><p data-path-to-node=\"14\">Now, Evaluate the limit.</p><p data-path-to-node=\"14\">As $x$ approaches $-\\infty$, all terms with $x$ in the denominator $(\\frac{5}{x}$, $\\frac{6}{x}$, and $\\frac{5}{x^2})$ approach $0$:</p><p>$$\\Rightarrow \\frac{6 + 0}{-\\sqrt{9 + 0 + 0} - 3} = \\frac{6}{-3 - 3} = \\frac{6}{-6} = \\boxed{-1}$$</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/530967/go-classes-dpp-gate-cs-da-calculus-%26-optimization-limits\" target=\"_blank\">GATE Overflow #530967</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"221\" data-start=\"14\">Let $f$ be not defined at $x=2$. For $x\\ne 2$, suppose $f(x)=\\frac{x^2+ax+b}{x-2}$. Which condition on $a$ and $b$ makes $\\lim_{x\\to 2}f(x)$ exist as a finite real number, and what is the value of the limit?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$b=-2a-4$, and the limit is $a+4$<br/></span>",
                "<span style=\"display: inline;\">$b=2a+4$, and the limit is $a-4$<br/></span>",
                "<span style=\"display: inline;\">$b=-2a-4$, and the limit is $2a+b$<br/></span>",
                "<span style=\"display: inline;\">No values of $a$ and $b$ make the limit finite</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"530963\"></a><div itemprop=\"text\"><p data-path-to-node=\"0\">We are given the function:</p><p>$$f(x) = \\frac{x^2 + ax + b}{x - 2}$$</p><p data-path-to-node=\"3\">As $x \\to 2$, the denominator $(x - 2)$ approaches $0$. If the numerator approaches any non-zero value $L$ as $x \\to 2$, the limit of the fraction would be $\\pm \\infty$.</p><p data-path-to-node=\"4\">Therefore, for the limit to exist as a finite real number, the numerator must also approach $0$ as $x \\to 2$. This creates an indeterminate form of $0/0$, which allows for the possibility of a finite limit.</p><p data-path-to-node=\"5\"><br/>Lets find the condition for $a$ and $b$</p><p data-path-to-node=\"5\">Set the limit of the numerator as $x \\to 2$ equal to $0:$</p><p>$$\\lim_{x \\to 2} (x^2 + ax + b) = 0$$</p><p>$$\\Rightarrow (2)^2 + a(2) + b = 0$$</p><p>$$\\Rightarrow 4 + 2a + b = 0$$</p><p>$$\\Rightarrow \\boxed{b = -2a - 4}$$</p><p data-path-to-node=\"11\">Now, Lets find the value of the limit</p><p data-path-to-node=\"11\">Now, substitute $b = -2a - 4$ back into the original function:</p><p>$$\\Rightarrow f(x) = \\frac{x^2 + ax - 2a - 4}{x - 2}$$</p><p data-path-to-node=\"13\">We can factor the numerator by grouping terms:</p><p data-path-to-node=\"13\">Numerator = $(x^2 - 4) + (ax - 2a)$</p><p data-path-to-node=\"13\">Numerator = $(x - 2)(x + 2) + a(x - 2)$</p><p data-path-to-node=\"13\">Numerator = $(x - 2)(x + 2 + a)$</p><p data-path-to-node=\"14\">Substitute this factored form back into the limit expression:</p><p>$$\\lim_{x \\to 2} f(x) = \\lim_{x \\to 2} \\frac{(x - 2)(x + a + 2)}{x - 2}$$</p><p data-path-to-node=\"16\">Since $x$ is approaching $2$ but is not exactly $2$ ($x \\ne 2$), we can cancel the $(x - 2)$ terms from the numerator and denominator:</p><p>$$\\lim_{x \\to 2} f(x) = \\lim_{x \\to 2} (x + a + 2)$$</p><p data-path-to-node=\"18\">Now, evaluate the limit by direct substitution:</p><p>$$\\lim_{x \\to 2} (x + a + 2) = 2 + a + 2 = \\boxed{a + 4}$$</p><p data-path-to-node=\"20\"> </p><p data-path-to-node=\"20\">Therefore, The condition required is $b = -2a - 4$, and the value of the limit is $a + 4$. </p><p data-path-to-node=\"20\">The correct option is <strong>A.</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/530961/go-classes-dpp-gate-cs-da-calculus-%26-optimization-limits-and-continuity\" target=\"_blank\">GATE Overflow #530961</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Determine where the function below is <strong>NOT CONTINUOUS:</strong></p><p>$$<br/>h(t)=\\frac{4 t+10}{t^2-2 t-15}<br/>$$</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\mathrm{t}=3$ AND $\\mathrm{t}=-5$<br/></span>",
                "<span style=\"display: inline;\">$\\mathrm{t}=5$ AND $\\mathrm{t}=-3$<br/></span>",
                "<span style=\"display: inline;\">$\\mathrm{t}=-5$ AND $\\mathrm{t}=-3$<br/></span>",
                "<span style=\"display: inline;\">$t=5$ ONLY</span>"
            ],
            "answer": "B",
            "solution": "<div class=\"solution-content\"><a name=\"502566\"></a><div itemprop=\"text\"><p>The function $h(t)$ is a <strong>rational function</strong> (a polynomial divided by a polynomial). Rational functions are continuous everywhere except where their <strong>denominator is equal to zero.</strong><br/><br/><br/><strong>1. Set the Denominator to Zero:</strong></p><p>$$<br/>t^2-2 t-15=0<br/>$$</p><p><br/><strong>2. Factor the Quadratic Expression:</strong> We look for two numbers that multiply to $-15$ and add up to $-2$. These numbers are $-5$ and $3$ .</p><p>$$<br/>(t-5)(t+3)=0<br/>$$</p><p><br/><strong>3. Solve for $t$ :</strong> Setting each factor equal to zero gives the points of discontinuity:</p><p>$$<br/>\\begin{aligned}<br/>&amp; t-5=0 \\quad \\Rightarrow \\quad t=5 \\\\\\\\<br/>&amp; t+3=0 \\quad \\Rightarrow \\quad t=-3<br/>\\end{aligned}<br/>$$</p><p><br/>The function $h(t)$ is not continuous at $t=5$ and $t=-3$ because the function is undefined at these points.<br/> </p><p>Therefore, the correct option is <strong>B.</strong> $t=5$ <strong>AND</strong> $t=-3$.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/502565/go-classes-dpp-calculus-%26-optimization-continuity\" target=\"_blank\">GATE Overflow #502565</a></small></div>"
        }
    ]
});

registerTest({
    "name": "DPP 06 - Engineering Mathematics (Limits, Continuity & Differentiability - Part 6)",
    "testLabel": "DPP 06",
    "testType": "DPP",
    "bracket": "Limits, Continuity & Differentiability - Part 6",
    "subject": "em",
    "series": "cse-dpp-2027",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 13,
    "topicsCovered": "Limits, Continuity & Differentiability (Practice Set 6)",
    "questions": [
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Estimate the value of the following limit:</p><p>$$<br/>\\lim _{x \\rightarrow 2} g(x)<br/>$$</p><p>where the function $g(x)$ is defined as:</p><p>$$<br/>g(x)= \\begin{cases}\\frac{x^2+4 x-12}{x^2-2 x} &amp; \\text { if } x \\neq 2 \\\\\\\\<br/>6 &amp; \\text { if } x=2\\end{cases}<br/>$$<br/> </p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$-4$<br/></span>",
                "<span style=\"display: inline;\">$4$<br/></span>",
                "<span style=\"display: inline;\">$6$<br/></span>",
                "<span style=\"display: inline;\">THE LIMIT DOES NOT EXIST</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"502564\"></a><div itemprop=\"text\"><p>$$<br/>\\lim _{x \\rightarrow 2} \\frac{x^2+4 x-12}{x^2-2 x}<br/>$$</p><p><br/><strong>Check for Indeterminate Form: </strong>Substituting $x=2$ into the numerator $(N)$ and denominator $(D)$ :</p><p>$$<br/>\\begin{gathered}<br/>N(2)=(2)^2+4(2)-12=4+8-12=0 \\\\\\\\<br/>D(2)=(2)^2-2(2)=4-4=0<br/>\\end{gathered}<br/>$$</p><p><br/>Since the limit is of the indeterminate form $\\frac{0}{0}$, we can apply<strong> L'Hôpital's Rule.</strong><br/><br/><strong>Apply L'Hôpital's Rule:</strong> L'Hôpital's Rule states that $\\lim _{x \\rightarrow 2} \\frac{N(x)}{D(x)}=\\lim _{x \\rightarrow 2} \\frac{N^{\\prime}(x)}{D^{\\prime}(x)}$, where $N^{\\prime}(x)$ and $D^{\\prime}(x)$ are the derivatives of the numerator and denominator, respectively.</p><p>$$<br/>\\begin{aligned}<br/>&amp; N^{\\prime}(x)=\\frac{d}{d x}\\left(x^2+4 x-12\\right)=2 x+4 \\\\\\\\<br/>&amp; D^{\\prime}(x)=\\frac{d}{d x}\\left(x^2-2 x\\right)=2 x-2 \\\\\\\\<br/>&amp; \\qquad \\lim _{x \\rightarrow 2} \\frac{N^{\\prime}(x)}{D^{\\prime}(x)}=\\lim _{x \\rightarrow 2} \\frac{2 x+4}{2 x-2}<br/>\\end{aligned}<br/>$$</p><p><br/><br/>Substitute $x=2$ into the simplified expression:<br/> </p><p>$$<br/>\\frac{2(2)+4}{2(2)-2}=\\frac{4+4}{4-2}=\\frac{8}{2}=4<br/>$$</p><p> </p><p><strong>Key Point</strong>: The value of the function at $x=2$, which is $g(2)=6$, does <strong>not</strong> affect the value of the limit as $x$ approaches $2$ . The limit is determined by the values of $g(x)$ close to $x=2$.</p><p>Therefore, the correct option is $\\textbf{B. 4}$.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/502563/go-classes-dpp-calculus-%26-optimization-limit\" target=\"_blank\">GATE Overflow #502563</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>$\\text { Find the Taylor Series for } f(x)=x^4 \\mathrm{e}^{-3 x^2} \\text { about } x=0 \\text {. }$<br/> </p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\sum_{n=0}^{\\infty} \\frac{(-1)^n 3^n x^{2 n+4}}{(n+1)!}$<br/></span>",
                "<span style=\"display: inline;\">$\\sum_{n=0}^{\\infty} \\frac{(-3)^n x^{2 n+4}}{n!}$<br/></span>",
                "<span style=\"display: inline;\">$\\sum_{n=0}^{\\infty} \\frac{3^n x^{2 n+4}}{n!}$<br/></span>",
                "<span style=\"display: inline;\">$\\sum_{n=0}^{\\infty} \\frac{(-3)^n x^{4 n}}{n!}$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"502363\"></a><div itemprop=\"text\">The problem asks for the Taylor Series for $f(x)=x^4 e^{-3 x^2}$ about $x=0$.<br/> <br/> We can use the known Maclaurin Series (Taylor Series about $x=0$ ) for $e^u$ :<br/> <br/> $$<br/> e^u=\\sum_{n=0}^{\\infty} \\frac{u^n}{n!}=1+u+\\frac{u^2}{2!}+\\frac{u^3}{3!}+\\ldots<br/> $$<br/> <br/> Let $u=-3 x^2$.<br/> <br/> $$<br/> e^{-3 x^2}=\\sum_{n=0}^{\\infty} \\frac{\\left(-3 x^2\\right)^n}{n!}<br/> $$<br/> <br/> Using the properties of exponents, $\\left(-3 x^2\\right)^n=(-3)^n\\left(x^2\\right)^n=(-3)^n x^{2 n}$ :<br/> <br/> $$<br/> e^{-3 x^2}=\\sum_{n=0}^{\\infty} \\frac{(-3)^n x^{2 n}}{n!}<br/> $$<br/> <br/> <br/> <br/> Now we multiply the entire series by the factor $x^4$ :<br/> <br/> $$<br/> f(x)=x^4 e^{-3 x^2}=x^4 \\sum_{n=0}^{\\infty} \\frac{(-3)^n x^{2 n}}{n!}<br/> $$<br/> <br/> We can move the $x^4$ inside the summation by adding its exponent to the existing exponent of $x$ : $x^4 \\cdot x^{2 n}=x^{4+2 n}$.<br/> <br/> $$<br/> f(x)=\\sum_{n=0}^{\\infty} \\frac{(-3)^n x^{2 n+4}}{n!}<br/> $$</div><br><br><small>Source: <a href=\"https://gateoverflow.in/502362/go-classes-dpp-calculus-%26-optimization-taylor-series\" target=\"_blank\">GATE Overflow #502362</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Find the Taylor Series (Maclaurin Series) for $f(x)=e^x$ about $x=0$.</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\sum_{n=0}^{\\infty} \\frac{x^n}{n+1}$<br/></span>",
                "<span style=\"display: inline;\">$\\sum_{n=0}^{\\infty} \\frac{x^{2 n}}{(2 n)!}$<br/></span>",
                "<span style=\"display: inline;\">$\\sum_{n=0}^{\\infty} \\frac{x^n}{n!}$<br/></span>",
                "<span style=\"display: inline;\">$\\sum_{n=0}^{\\infty}(-1)^n \\frac{x^n}{n!}$</span>"
            ],
            "answer": "C",
            "solution": "<div class=\"solution-content\"><a name=\"502361\"></a><div itemprop=\"text\">The Taylor Series for $f(x)$ about $x=a$ is given by:<br/> <br/> $$<br/> f(x)=\\sum_{n=0}^{\\infty} \\frac{f^{(n)}(a)}{n!}(x-a)^n<br/> $$<br/> <br/> Since the expansion is about $x=0$, it is a Maclaurin Series, where $a=0$. The formula simplifies to:<br/> <br/> $$<br/> f(x)=\\sum_{n=0}^{\\infty} \\frac{f^{(n)}(0)}{n!} x^n<br/> $$<br/> <br/> <br/> <br/> The function is $f(x)=e^x$. The derivative of $e^x$ is always $e^x$.<br/> <br/> \\[<br/> \\begin{array}{c l l}<br/> n &amp; f^{(n)}(x) &amp; f^{(n)}(0) \\\\<br/> 0 &amp; f(x)=e^x &amp; f(0)=e^0=1 \\\\<br/> 1 &amp; f'(x)=e^x &amp; f'(0)=e^0=1 \\\\<br/> 2 &amp; f''(x)=e^x &amp; f''(0)=e^0=1 \\\\<br/> 3 &amp; f'''(x)=e^x &amp; f'''(0)=e^0=1 \\\\<br/> n &amp; f^{(n)}(x)=e^x &amp; f^{(n)}(0)=1<br/> \\end{array}<br/> \\]<br/> <br/> Substitute $f^{(n)}(0)=1$ into the series formula:<br/> <br/> $$<br/> \\begin{gathered}<br/> f(x)=\\sum_{n=0}^{\\infty} \\frac{f^{(n)}(0)}{n!} x^n \\\\\\\\<br/> e^x=\\sum_{n=0}^{\\infty} \\frac{1}{n!} x^n \\\\\\\\<br/> e^x=\\sum_{n=0}^{\\infty} \\frac{x^n}{n!}=1+x+\\frac{x^2}{2!}+\\frac{x^3}{3!}+\\ldots<br/> \\end{gathered}<br/> $$<br/> <br/> Option C is correct</div><br><br><small>Source: <a href=\"https://gateoverflow.in/502360/go-classes-dpp-calculus-%26-optimization-taylor-series\" target=\"_blank\">GATE Overflow #502360</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\">Suppose that we know that $f(x)$ is continuous and differentiable on $[6,15]$. Let's also suppose that we know that $f(6)=-2$ and that we know that $f^{\\prime}(x) \\leq 10$. What is the largest possible value for $f(15)$ ?</div></span>",
            "image": "",
            "options": [],
            "answer": "15",
            "solution": "<div class=\"solution-content\"><a name=\"502190\"></a><div itemprop=\"text\"><p>We are given the following information:</p><ul><li>$f(6)=-2$<br/> </li><li>$15-6=9$<br/> </li><li>$f^{\\prime}(x) \\leq 10$ for all $x$ in $[6,15]$.<br/> </li></ul><p>Substitute the known values into the MVT equation:</p><p>$$<br/>\\begin{array}{r}<br/>f^{\\prime}(c)=\\frac{f(15)-(-2)}{9} \\\\\\\\<br/>f^{\\prime}(c)=\\frac{f(15)+2}{9}<br/>\\end{array}<br/>$$</p><p><br/>Since the derivative $f^{\\prime}(x)$ is at most 10 throughout the interval, the value $f^{\\prime}(c)$ must also be $\\leq$ 10:</p><p>$$<br/>f^{\\prime}(c) \\leq 10<br/>$$</p><p><br/>Substitute the expression for $f^{\\prime}(c)$ :</p><p>$$<br/>\\frac{f(15)+2}{9} \\leq 10<br/>$$</p><p><br/>To find the largest possible value for $f(15)$, we solve this inequality:<br/><br/>Multiply both sides by $9$:</p><p>$$<br/>\\begin{gathered}<br/>f(15)+2 \\leq 10 \\cdot 9 \\\\\\\\<br/>f(15)+2 \\leq 90<br/>\\end{gathered}<br/>$$</p><p><br/>Subtract $2$ from both sides:</p><p>$$<br/>\\begin{gathered}<br/>f(15) \\leq 90-2 \\\\\\\\<br/>f(15) \\leq 88<br/>\\end{gathered}<br/>$$</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/502189/go-classes-dpp-calculus-%26-optimization-mvt\" target=\"_blank\">GATE Overflow #502189</a></small></div>"
        },
        {
            "marks": 2,
            "neg": 0,
            "type": "MSQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Given the graph of $f(x)$, determine which of the following statements about its continuity are TRUE for the points $x=-2, x=0$, and $x=3$.</p><p style=\"text-align:center\"><img alt=\"\" height=\"182\" src=\"https://gateoverflow.in/?qa=blob&amp;qa_blobid=4830116881777218921\" width=\"286\"/></p><p> </p></div></span>",
            "image": "https://gateoverflow.in/?qa=blob&qa_blobid=4830116881777218921",
            "options": [
                "<span style=\"display: inline;\">$f(x)$ is <strong>CONTINUOUS</strong> at $x=0$.<br/></span>",
                "<span style=\"display: inline;\">$f(x)$ is <strong>DISCONTINUOUS</strong> at $x=-2$ because $\\lim _{x \\rightarrow-2} f(x)$ does not exist.<br/></span>",
                "<span style=\"display: inline;\">$f(x)$ is <strong>DISCONTINUOUS</strong> at $x=3$ because $f(3)$ is undefined.<br/></span>",
                "<span style=\"display: inline;\">$f(x)$ is <strong>DISCONTINUOUS</strong> at $x=-2$ because $f(-2)$ is defined, $\\lim _{x \\rightarrow-2} f(x)$ exists, but $\\lim _{x \\rightarrow-2} f(x) \\neq f(-2)$.</span>"
            ],
            "answer": [
                "A"
            ],
            "solution": "<div class=\"solution-content\"><a name=\"502188\"></a><div itemprop=\"text\"><p>To answer the question for each point we'll need to get both the limit at that point and the function value at that point. If they are equal the function is continuous at that point and if they aren't equal the function isn't continuous at that point.<br/><br/>First $x=-2$.</p><p>$$<br/>f(-2)=2 \\quad \\lim _{x \\rightarrow-2} f(x) \\text { doesn't exist }<br/>$$</p><p><br/>The function value and the limit aren't the same and so the function is not continuous at this point. This kind of discontinuity in a graph is called a <strong>jump discontinuity</strong>. Jump discontinuities occur where the graph has a break in it as this graph does and the values of the function to either side of the break are finite (i.e. the function doesn't go to infinity).<br/><br/>Now $x=0$.</p><p>$$<br/>f(0)=1 \\quad \\lim _{x \\rightarrow 0} f(x)=1<br/>$$</p><p><br/>The function is continuous at this point since the function and limit have the same value.<br/><br/>Finally $x=3$.</p><p>$$<br/>f(3)=-1 \\quad \\lim _{x \\rightarrow 3} f(x)=0<br/>$$</p><p><br/>The function is not continuous at this point. This kind of discontinuity is called a <strong>removable discontinuity.</strong> Removable discontinuities are those where there is a hole in the graph as there is in this case.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/502187/go-classes-dpp-calculus-%26-optimization-continuity\" target=\"_blank\">GATE Overflow #502187</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\">$\\text { Estimate the value of the following limit. }\\\\$<br/> $$\\lim _{x \\rightarrow 2} \\frac{x^2+4 x-12}{x^2-2 x}$$</div></span>",
            "image": "",
            "options": [],
            "answer": "4",
            "solution": "<div class=\"solution-content\"><a name=\"502186\"></a><div itemprop=\"text\"><p>First, try to substitute $x=2$ directly into the expression:</p><p>$$<br/>\\frac{(2)^2+4(2)-12}{(2)^2-2(2)}=\\frac{4+8-12}{4-4}=\\frac{0}{0}<br/>$$</p><p><br/>Since this results in the <strong>Indeterminate Form</strong> $\\frac{0}{0}$, we must simplify the expression using factoring or apply L'Hôpital's Rule.</p><p>Since the limit is in the indeterminate form $\\frac{0}{0}$, we can also use <strong>L'Hôpital's Rule</strong>, which states that<br/><br/>$\\lim _{x \\rightarrow c} \\frac{f(x)}{g(x)}=\\lim _{x \\rightarrow c} \\frac{f^{\\prime}(x)}{g^{\\prime}(x)}$, provided the latter limit exists.<br/> </p><ul><li>$f(x)=x^2+4 x-12 \\Longrightarrow f^{\\prime}(x)=2 x+4$<br/> </li><li>$g(x)=x^2-2 x \\Longrightarrow g^{\\prime}(x)=2 x-2$<br/> </li></ul><p>$$<br/>\\lim _{x \\rightarrow 2} \\frac{2 x+4}{2 x-2}<br/>$$</p><p><br/>Substitute $x=2$ :</p><p>$$<br/>\\frac{2(2)+4}{2(2)-2}=\\frac{4+4}{4-2}=\\frac{8}{2}=4<br/>$$</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/502185/go-classes-dpp-calculus-%26-optimization-limit\" target=\"_blank\">GATE Overflow #502185</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\">$\\text { If } f(6)=3, f^{\\prime}(6)=1 / 2 \\text { and } f^{\\prime \\prime}(6)=2 \\text {, what could be the value of } f(7) \\text { ? }$</div></span>",
            "image": "",
            "options": [],
            "answer": "4.5",
            "solution": "<div class=\"solution-content\"><a name=\"501490\"></a><div itemprop=\"text\"><p>This problem asks for an approximation of $f(7)$ using the given values of the function and its derivatives at $x=6$. The most accurate method for this type of approximation is using the <strong>Taylor Polynomial</strong> centered at $a=6$.</p><p>Since we are given the function, the first derivative, and the second derivative at $x=6$, we can use a <strong>second-degree Taylor polynomial</strong> ( $P_2(x)$ ).</p><p> </p><p>The formula for the second-degree Taylor polynomial centered at $a$ is:</p><p>$$<br/>P_2(x)=f(a)+f^{\\prime}(a)(x-a)+\\frac{f^{\\prime \\prime}(a)}{2!}(x-a)^2<br/>$$</p><p><br/><br/><strong>1. Substitute the Given Values</strong><br/> </p><p>We have the following values at the center $a=6$ :</p><ul><li>$f(6)=3$<br/> </li><li>$f^{\\prime}(6)=1 / 2$<br/> </li><li>$f^{\\prime \\prime}(6)=2$<br/> </li></ul><p>Substituting these into the formula with $a=6$ :</p><p>$$<br/>P_2(x)=3+\\left(\\frac{1}{2}\\right)(x-6)+\\frac{2}{2!}(x-6)^2<br/>$$</p><p><br/>Simplifying the coefficients:</p><p>$$<br/>P_2(x)=3+\\frac{1}{2}(x-6)+1(x-6)^2<br/>$$</p><p> </p><p>To approximate $f(7)$, we substitute $x=7$ into the Taylor polynomial $P_2(x)$ :</p><p>$$<br/>f(7) \\approx P_2(7)=3+\\frac{1}{2}(7-6)+(7-6)^2<br/>$$<br/> </p><p><strong>A. Calculate the terms</strong></p><ul><li>$(7-6)=1$<br/> </li><li>$(7-6)^2=1^2=1$<br/> </li></ul><p><br/><strong>B. Final Calculation</strong><br/>$$<br/>\\begin{gathered}<br/>f(7) \\approx 3+\\frac{1}{2}(1)+1 \\\\\\\\<br/>f(7) \\approx 3+0.5+1 \\\\\\\\<br/>f(7) \\approx 4.5<br/>\\end{gathered}<br/>$$</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/501489/go-classes-dpp-calculus-%26-optimization-taylor-series\" target=\"_blank\">GATE Overflow #501489</a></small></div>"
        },
        {
            "marks": 2,
            "neg": 0,
            "type": "MSQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>For the piecewise function $G(x)$ defined below, select <strong>ALL</strong> values of $x$ at which the function is discontinuous.</p><p>$$<br/>G(x)= \\begin{cases}\\frac{1}{(x+3)^2} &amp; \\text { if } x \\leq-1\\\\\\\\<br/>2-x &amp; \\text { if }-1&lt;x \\leq 1 \\\\\\\\<br/> \\frac{3}{x+2} &amp; \\text { if } x&gt;1\\end{cases}<br/>$$</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$-3$<br/></span>",
                "<span style=\"display: inline;\">$-2$<br/></span>",
                "<span style=\"display: inline;\">$-1$<br/></span>",
                "<span style=\"display: inline;\">$1$</span>"
            ],
            "answer": [
                "A"
            ],
            "solution": "<div class=\"solution-content\"><a name=\"501460\"></a><div itemprop=\"text\"><p>So answer is A , C<img alt=\"\" height=\"1599\" src=\"https://gateoverflow.in/?qa=blob&amp;qa_blobid=10962540890336799758\" width=\"1200\"/></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/501376/go-classes-dpp-calculus-%26-optimization-continuity\" target=\"_blank\">GATE Overflow #501376</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Let the piecewise function $f(x)$ be defined as:</p><p>$$<br/>f(x)= \\begin{cases}\\frac{\\sqrt{9 x^4+x^2}}{5 x^2+3 x+1}, &amp; \\text { if } x \\geq 0 \\\\\\\\<br/>x, &amp; \\text { if } x&lt;0\\end{cases}<br/>$$</p><p><br/>Is $f$ continuous at $x=0$ ?<br/> </p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">YES, BECAUSE THE LEFT-HAND LIMIT, RIGHT-HAND LIMIT, AND $f(0)$ ALL EQUAL $0$.<br/></span>",
                "<span style=\"display: inline;\">NO, BECAUSE THE LEFT-HAND LIMIT AND RIGHT-HAND LIMIT ARE DIFFERENT.<br/></span>",
                "<span style=\"display: inline;\">YES, BECAUSE THE LEFT-HAND LIMIT, RIGHT-HAND LIMIT, AND $f(0)$ ALL EQUAL $1 / 3$.<br/></span>",
                "<span style=\"display: inline;\">NO, BECAUSE THE FUNCTION VALUE $f(0)$ IS UNDEFINED.</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"501210\"></a><div itemprop=\"text\"><p><strong>1. Check $f(0)$ (Function Value)</strong></p><p>The first part of the function is used for $x \\geq 0$ :</p><p>$$<br/>f(x)=\\frac{\\sqrt{9 x^4+x^2}}{5 x^2+3 x+1}<br/>$$</p><p><br/>Substitute $x=0$ :</p><p>$$<br/>f(0)=\\frac{\\sqrt{9(0)^4+(0)^2}}{5(0)^2+3(0)+1}=\\frac{\\sqrt{0}}{1}=0<br/>$$</p><p>$f(0)$ is <strong>defined</strong> and equal to $\\mathbf{0}$ .<br/><br/><br/><strong>2. Check the Left-Hand Limit (LHL)</strong></p><p>The second part of the function is used for $x&lt;0$ :</p><p>$$<br/>\\begin{gathered}<br/>L H L=\\lim _{x \\rightarrow 0} f(x)=\\lim _{x \\rightarrow 0} x \\\\<br/>L H L=0<br/>\\end{gathered}<br/>$$<br/> </p><p><strong>3. Check the Right-Hand Limit (RHL)</strong></p><p>The first part of the function is used for $x&gt;0$ :</p><p>$$<br/>R H L=\\lim _{x \\rightarrow 0^{+}} f(x)=\\lim _{x \\rightarrow 0^{+}} \\frac{\\sqrt{9 x^4+x^2}}{5 x^2+3 x+1}<br/>$$</p><p><br/>Since this is a composite of a rational function and a square root, and the denominator is nonzero at $x=0$, we can substitute $x=0$ :</p><p>$$<br/>R H L=\\frac{\\sqrt{9(0)^4+(0)^2}}{5(0)^2+3(0)+1}=\\frac{\\sqrt{0}}{1}=0<br/>$$<br/> </p><ul><li>$f(0)=0$<br/> </li><li>$\\lim _{x \\rightarrow 0} f(x)=0$<br/> </li><li>$\\lim _{z \\rightarrow 0^{+}} f(x)=0$<br/> </li></ul><p>Since $f(0)=\\lim _{x \\rightarrow 0^{-}} f(x)=\\lim _{x \\rightarrow 0^*} f(x)=0$, all three conditions for continuity are met.<br/><br/>The function $f$ is <strong>continuous</strong> at $x=0$.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/501209/go-classes-dpp-calculus-%26-optimization-continuity\" target=\"_blank\">GATE Overflow #501209</a></small></div>"
        },
        {
            "marks": 2,
            "neg": 0,
            "type": "MSQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Which of the following statements is/are correct?<br/> </p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$f(x)=\\ln (x)$ is continuous and differentiable in the domain $[0, \\infty)$.<br/></span>",
                "<span style=\"display: inline;\">$f(x)=e^x$ is continuous and differentiable for all $x \\in \\mathbb{R}$.<br/></span>",
                "<span style=\"display: inline;\">$f(x)=\\sqrt{x}$ is continuous but not differentiable at $x=0$.<br/></span>",
                "<span style=\"display: inline;\">$f(x)=\\frac{1}{x}$ is continuous and differentiable for all $x \\neq 0$.</span>"
            ],
            "answer": [
                "A"
            ],
            "solution": "<div class=\"solution-content\"><a name=\"501205\"></a><div itemprop=\"text\"><p><strong>A.</strong> $f(x)=\\ln (x)$<strong> is continuous and differentiable in the domain </strong>$[0, \\infty)$.</p><ul><li><strong>INCORRECT</strong>.<br/> </li><li>The domain of $f(x)=\\ln (x)$ is $(\\mathbf{0}, \\infty)$, not $[0, \\infty)$. The function is not defined at $x=0$.<br/> </li><li>Within its correct domain, $(0, \\infty)$, it is continuous and differentiable, with the derivative $f^{\\prime}(x)=1 / x$.<br/> </li></ul><p><strong>B. </strong>$f(x)=e^x$<strong> is continuous and differentiable for all</strong> $x \\in \\mathbb{R}$.</p><ul><li><strong>CORRECT.</strong><br/> </li><li>The exponential function $f(x)=e^x$ is defined on the entire real number line, $\\mathbb{R}$.<br/> </li><li>It is <strong>continuous</strong> everywhere and <strong>differentiable</strong> everywhere, with the derivative $f^{\\prime}(x)=e^x$.<br/> </li></ul><div><strong>C.</strong> <strong>$f(x)=\\sqrt{x}$ is continuous but not differentiable at $x=0$.</strong><br/> </div><ul><li><strong>CORRECT.</strong><br/> </li><li>The domain of $f(x)=\\sqrt{x}$ is $[0, \\infty)$.<br/> </li><li><strong>Continuity:</strong> The function is continuous on its entire domain $[0, \\infty)$.<br/> </li><li><strong>Differentiability at $x=0$ :</strong> The derivative is $f^{\\prime}(x)=\\frac{1}{2 \\sqrt{x}}$. As $x \\rightarrow 0^{+}$, $f^{\\prime}(x) \\rightarrow \\infty$. This means the tangent line at $x=0$ is <strong>vertical</strong>, which implies the function is <strong>not differentiable</strong> at $x=0$.</li></ul><div><br/><strong>D. $f(x)=\\frac{1}{x}$ is continuous and differentiable for all $x \\neq 0$.</strong><br/> </div><ul><li><strong>CORRECT.</strong><br/> </li><li>The domain of $f(x)=\\frac{1}{x}$ is $x \\in(-\\infty, 0) \\cup(0, \\infty)$.<br/> </li><li>On this domain, the function is both <strong>continuous</strong> and <strong>differentiable.</strong> The derivative is $f^{\\prime}(x)=-\\frac{1}{x^2}$. The function is discontinuous and non-differentiable only at the excluded point $x=0$.</li></ul></div><br><br><small>Source: <a href=\"https://gateoverflow.in/501204/go-classes-dpp-calculus-%26-optimization-continuity\" target=\"_blank\">GATE Overflow #501204</a></small></div>"
        }
    ]
});

registerTest({
    "name": "DPP 07 - Engineering Mathematics (Limits, Continuity & Differentiability - Part 7)",
    "testLabel": "DPP 07",
    "testType": "DPP",
    "bracket": "Limits, Continuity & Differentiability - Part 7",
    "subject": "em",
    "series": "cse-dpp-2027",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 13,
    "topicsCovered": "Limits, Continuity & Differentiability (Practice Set 7)",
    "questions": [
        {
            "marks": 2,
            "neg": 0,
            "type": "MSQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider the following function:</p><p>$$<br/>f(x)= \\begin{cases}7 x+2, &amp; x&gt;1 \\\\ 9, &amp; x \\leq 1\\end{cases}<br/>$$</p><p><br/>Is $f(x)$ continuous at $x=1$ ?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">Yes, it is continuous at $x=1$<br/></span>",
                "<span style=\"display: inline;\">No, it is not continuous at $x=1$<br/></span>",
                "<span style=\"display: inline;\">It is continuous but not differentiable at $x=1$<br/></span>",
                "<span style=\"display: inline;\">It is neither continuous nor differentiable at $x=1$</span>"
            ],
            "answer": [
                "A"
            ],
            "solution": "<div class=\"solution-content\"><a name=\"500685\"></a><div itemprop=\"text\"><p>Now, $\\forall x&lt;1, f$ is a linear function which makes it continuous and $\\forall x \\geq 1, f$ is constant which also makes it continuous. So, the only point we need to check is at $x=1$ :</p><p>$$<br/>\\begin{aligned}<br/>L H L &amp; =\\lim _{x \\rightarrow 1^{-}} f(x) \\\\<br/>&amp; =\\lim _{h \\rightarrow 0} f(1-h) \\\\<br/>&amp; =\\lim _{h \\rightarrow 0} 9 \\\\<br/>&amp; =9<br/>\\end{aligned}<br/>$$</p><p><br/>$$<br/>\\begin{aligned}<br/>\\text { RHL } &amp; =\\lim _{x \\rightarrow 1^{+}} f(x) \\\\<br/>&amp; =\\lim _{h \\rightarrow 0} f(1+h) \\\\<br/>&amp; =\\lim _{h \\rightarrow 0} 7(1+h)+2 \\\\<br/>&amp; =9<br/>\\end{aligned}<br/>$$</p><p>$\\therefore L H L=R H L=f(1)=9 \\Longrightarrow f$ is continuous at $x=1 \\Longrightarrow f$ is continuous.</p><p>Differentiability:<br/><br/>For $x&lt;1$ (left side) $f(x)=9$ so $f^{\\prime}\\left(1^{-}\\right)=0$.<br/><br/>For $x&gt;1$ (right side) $f(x)=7 x+2$ so $f^{\\prime}\\left(1^{+}\\right)=7$.<br/><br/>Since $f^{\\prime}\\left(1^{-}\\right)=0 \\neq f^{\\prime}\\left(1^{+}\\right)=7$, the derivative at $x=1$ does not exist $-f$ is not differentiable at $x=1$</p><p>$\\therefore$ <strong>A and C are correct</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/500684/go-classes-dpp-calculus-%26-optimization-continuity\" target=\"_blank\">GATE Overflow #500684</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider the function $f(x)$ defined by:</p><p>$$<br/>f(x)= \\begin{cases}\\frac{\\sin (x)}{x}, &amp; x \\neq 0 \\\\ 1, &amp; x=0\\end{cases}<br/>$$</p><p><br/>Which of the following is correct?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$f(x)$ is continuous but not differentiable at $x=0$.<br/></span>",
                "<span style=\"display: inline;\">$f(x)$ is both continuous and differentiable at $x=0$.<br/></span>",
                "<span style=\"display: inline;\">$f(x)$ is neither continuous nor differentiable at $x=0$.<br/></span>",
                "<span style=\"display: inline;\">$f(x)$ is discontinuous at $x=0$, hence not differentiable there.</span>"
            ],
            "answer": "B",
            "solution": "<div class=\"solution-content\"><a name=\"500679\"></a><div itemprop=\"text\"><p>$$<br/>f(x)= \\begin{cases}\\frac{\\sin (x)}{x} &amp; , x \\neq 0 \\\\ 1 &amp; , x=0\\end{cases}<br/>$$</p><p><br/>Now, $f$ is continuous at $x=0$ if $\\lim _{x \\rightarrow a^{+}} f(x)=\\lim _{x \\rightarrow a^{-}} f(x)=f(a)$.<br/><br/>First we will compute the left hand limit at $x=0$ :</p><p>$$<br/>\\begin{aligned}<br/>L H L &amp; =\\lim _{x \\rightarrow 0^{-}} f(x) \\\\<br/>&amp; =\\lim _{h \\rightarrow 0} f(0-h) \\\\<br/>&amp; =\\lim _{h \\rightarrow 0} \\frac{\\sin (-h)}{-h} \\\\<br/>&amp; =\\lim _{h \\rightarrow 0} \\frac{\\sin (h)}{h} \\\\<br/>&amp; =1<br/>\\end{aligned}<br/>$$</p><p><br/>Next we will compute the right hand limit at $x=0$ :</p><p>$$<br/>\\begin{aligned}<br/>R H L &amp; =\\lim _{x \\rightarrow 0^{+}} f(x) \\\\<br/>&amp; =\\lim _{h \\rightarrow 0} f(0+h) \\\\<br/>&amp; =\\lim _{h \\rightarrow 0} \\frac{\\sin (h)}{h} \\\\<br/>&amp; =1<br/>\\end{aligned}<br/>$$</p><p>$\\because L H L=R H L=f(0) \\Longrightarrow f$ is continuous at $x=0$<br/><br/>Differentiability at $x=0$<br/><br/>Derivative at 0:</p><p>$$<br/>\\begin{aligned}<br/>f^{\\prime}(0) &amp; =\\lim _{h \\rightarrow 0} \\frac{f(h)-f(0)}{h} \\\\<br/>&amp; =\\lim _{h \\rightarrow 0} \\frac{\\frac{\\sin h}{h}-1}{h} \\\\<br/>&amp; =\\lim _{h \\rightarrow 0} \\frac{\\sin h-h}{h^2}<br/>\\end{aligned}<br/>$$<br/> </p><p>We can use L'Hôpital's Rule, but first check if it's applicable:<br/>As $h \\rightarrow 0, \\sin h-h \\rightarrow 0, h^2 \\rightarrow 0$. So $0 / 0$ form.<br/>Apply L'Hôpital's Rule:</p><p>$$<br/>\\lim _{h \\rightarrow 0} \\frac{\\sin h-h}{h^2} \\stackrel{\\mathrm{H}}{=} \\lim _{h \\rightarrow 0} \\frac{\\cos h-1}{2 h}<br/>$$</p><p><br/>Again $0 / 0$ form as $h \\rightarrow 0: \\cos h-1 \\rightarrow 0,2 h \\rightarrow 0$.<br/>Apply L'Hôpital again:</p><p>$$<br/>\\lim _{h \\rightarrow 0} \\frac{-\\sin h}{2}=\\frac{0}{2}=0<br/>$$</p><p><br/>So $f^{\\prime}(0)=0$, hence $f$ is differentiable at 0.<br/><br/><strong>Option B is correct</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/500678/go-classes-dpp-calculus-%26-optimization-continuity\" target=\"_blank\">GATE Overflow #500678</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\">The value of a function at point $10$ is $100$ . The values of the function's first and second order derivatives at this point are $20$ and $2$ respectively. What will be the function's approximate value correct up to two decimal places at the point $10.5$.</div></span>",
            "image": "",
            "options": [],
            "answer": "110.25",
            "solution": "<div class=\"solution-content\"><a name=\"499379\"></a><div itemprop=\"text\">According to Taylor's series,<br/> <br/> $$<br/> f(x+h)=f(x)+h f^{\\prime}(x)+\\frac{h^2 f^{\\prime}(x)}{2}+\\ldots \\ldots<br/> $$<br/> <br/> Here $x=10, h=0.5$<br/> <br/> $$<br/> \\therefore f(x+h)=110.25<br/> $$</div><br><br><small>Source: <a href=\"https://gateoverflow.in/499378/go-classes-dpp-calculus-%26-optimization-taylor-series\" target=\"_blank\">GATE Overflow #499378</a></small></div>"
        },
        {
            "marks": 2,
            "neg": 0,
            "type": "MSQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider the following function:</p><p>$$<br/>f(x)= \\begin{cases}3 x+3, &amp; \\text { if } x \\geq 3 \\\\\\\\<br/>2 x+8, &amp; \\text { if } x&lt;3\\end{cases}<br/>$$</p><p><br/>Which of the following is/are true?<br/> </p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$f(x)$ is continuous at $x=3$<br/></span>",
                "<span style=\"display: inline;\">$f(x)$ is not continuous at $x=3$<br/></span>",
                "<span style=\"display: inline;\">$f(x)$ is differentiable at $x=3$<br/></span>",
                "<span style=\"display: inline;\">$f(x)$ is not differentiable at $x=3$.</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"498987\"></a><div itemprop=\"text\">$f(x)$ is continuous at $x=3$ if $\\lim _{x \\rightarrow 3^{-}} f(x)=\\lim _{x \\rightarrow 3^{+}} f(x)=f(3)$<br/> <br/> <br/> $$<br/> \\begin{aligned}<br/> &amp; \\lim _{x \\rightarrow 3^{-}}(2 x+8)=2(3)+8=14 \\\\\\\\<br/> &amp; \\lim _{x \\rightarrow 3^{+}}(3 x+3)=3(3)+3=12<br/> \\end{aligned}<br/> $$<br/> <br/> $L H L \\neq R H L$<br/> <br/> Therefore, the function is not continuous at $x=3$<br/> <br/> For a function to be differentiable, the minimum requirement for it is to be continuous at that point. As our function is not continuous, it cannot be differentiable. Hence, options B and D are the correct options.</div><br><br><small>Source: <a href=\"https://gateoverflow.in/498943/go-classes-dpp-calculus-%26-optimization-continuity\" target=\"_blank\">GATE Overflow #498943</a></small></div>"
        },
        {
            "marks": 2,
            "neg": 0,
            "type": "MSQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Which of the following functions is/are continuous?<br/> </p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\frac{1}{x-1}$<br/></span>",
                "<span style=\"display: inline;\">$\\frac{x^2-1}{x-1}$<br/></span>",
                "<span style=\"display: inline;\">$\\operatorname{sign}(x-2)$<br/></span>",
                "<span style=\"display: inline;\">$\\sin (x)$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"498941\"></a><div itemprop=\"text\">Option A is not defined at $x=1$ therefore, it'll have a breakpoint there.<br/> <br/> Hence, not continuous.<br/> <br/> In option B , the function is again not continuous at $x=1$. One may try to simplify the option as follows:<br/> <br/> $$<br/> \\frac{x^2-1}{x-1}=\\frac{(x-1)(x+1)}{x-1}<br/> $$<br/> <br/> Please note that you cannot cancel out $(x-1)$ here because you would be assuming that $x-1$ is not equal to $0$. But, we get $(x-1)=0$ at $x=1$. Here, limits exist but that doesn't necessarily mean that the function is continuous.<br/> <br/> Option C is discontinuous at $x=2$.<br/> <br/> Option D is continuous at all points.</div><br><br><small>Source: <a href=\"https://gateoverflow.in/498940/go-classes-dpp-calculus-%26-optimization-continuity\" target=\"_blank\">GATE Overflow #498940</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>The value of the function $f(x)=\\lim _{x \\rightarrow 0} \\frac{x^3+x^2}{2 x^3-7 x^2}$ is</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$0$<br/></span>",
                "<span style=\"display: inline;\">$-\\frac{1}{7}$<br/></span>",
                "<span style=\"display: inline;\">$\\frac{1}{7}$<br/></span>",
                "<span style=\"display: inline;\">$\\infty$</span>"
            ],
            "answer": "B",
            "solution": "<div class=\"solution-content\"><a name=\"475263\"></a><div itemprop=\"text\">\\[<br/> \\lim_{x \\to 0} \\frac{x^3 + x^2}{2x^3 - 7x^2}<br/> = \\lim_{x \\to 0} \\frac{x^2(x + 1)}{x^2(2x - 7)}<br/> = \\lim_{x \\to 0} \\frac{x + 1}{2x - 7}<br/> = \\frac{1}{-7}<br/> = \\boxed{-\\frac{1}{7}}<br/> \\]<br/> </div><br><br><small>Source: <a href=\"https://gateoverflow.in/475219/go-classes-dpp-calculus-limits-gate-ce\" target=\"_blank\">GATE Overflow #475219</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>The $\\lim _{x \\rightarrow 0} \\frac{\\sin \\left[\\frac{2}{3} x\\right]}{x}$ is</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\frac{2}{3}$<br/></span>",
                "<span style=\"display: inline;\">$1$<br/></span>",
                "<span style=\"display: inline;\">$\\frac{3}{2}$<br/></span>",
                "<span style=\"display: inline;\">$\\infty$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"475294\"></a><div itemprop=\"text\"><p>\\(\\lim _{x\\rightarrow 0}\\left(\\frac{\\textrm{sin}\\left(\\frac{2}{3}x\\right)}{x}\\right)\\)</p><p>\\(\\lim _{x\\rightarrow 0}\\left(\\frac{\\textrm{sin}\\left(\\frac{2}{3}x\\right).\\frac{2}{3}}{x.\\frac{2}{3}}\\right)\\)</p><p>\\(\\lim _{x\\rightarrow 0}\\left(\\frac{\\frac{2}{3}\\textrm{sin}\\left(\\frac{2}{3}x\\right)}{\\frac{2}{3}x}\\right)\\)</p><p>\\(\\frac{2}{3}\\lim _{x\\rightarrow 0}\\left(\\frac{\\textrm{sin}\\left(\\frac{2}{3}x\\right)}{\\left(\\frac{2}{3}x\\right)}\\right)\\)</p><p>\\(\\frac{2}{3}.\\ 1\\)</p><h2><strong>\\(\\frac{2}{3}(A)\\)</strong></h2></div><br><br><small>Source: <a href=\"https://gateoverflow.in/475217/go-classes-dpp-calculus-limits-gate-ce\" target=\"_blank\">GATE Overflow #475217</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>The value of $\\lim _{x \\rightarrow \\infty}\\left(x-\\sqrt{x^2+x}\\right)$ is equal to</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$-1$<br/></span>",
                "<span style=\"display: inline;\">$-0.5$<br/></span>",
                "<span style=\"display: inline;\">$-2$<br/></span>",
                "<span style=\"display: inline;\">$0$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"473924\"></a><div itemprop=\"text\"><p><strong><img alt=\"\" height=\"448\" src=\"https://gateoverflow.in/?qa=blob&amp;qa_blobid=17168613940065977956\" width=\"1139\"/>B</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/473916/go-classes-dpp-calculus-limits-gate-ce\" target=\"_blank\">GATE Overflow #473916</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Evaluate the following limit:</p><p>$$<br/>\\lim _{x \\rightarrow 2}\\left[\\frac{1}{x-2}-\\frac{2(2 x-3)}{x^3-3 x^2+2 x}\\right]<br/>$$</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$0$</span>",
                "<span style=\"display: inline;\">$1$</span>",
                "<span style=\"display: inline;\">$-\\frac{1}{2}$</span>",
                "<span style=\"display: inline;\">$\\frac{1}{2}$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"473608\"></a><div itemprop=\"text\">Given, lim x -&gt; 2 [ 1/(x - 2) - 2(2x - 3)/(x^3 - 3x^2 + 2x) ]<br/> <br/> Now, x^3 - 3x^2 + 2x = x (x^2 - 3x + 2)<br/> <br/> = x (x^2 - 2x - x + 2)<br/> <br/> = x (x(x - 2) - (x - 2))<br/> <br/> = x (x - 1) (x - 2)<br/> <br/> On substituting the value we get,<br/> <br/> lim x -&gt; 2 [ 1/(x - 2) - 2(2x - 3)/x (x - 1) (x - 2) ] Now in the next step we will take common 1 / (x - 2) from both sides<br/> <br/> lim x -&gt; 2 1/(x - 2) [1 - 2(2x - 3)/x (x - 1) ] <br/> <br/> lim x -&gt; 2 1/(x - 2) [{ x(x - 1) - 2(2x - 3) }/ x (x - 1)]<br/> <br/> lim x -&gt; 2 1/(x - 2) [{ x^2 - x - 4x + 6 }/ x (x - 1)]<br/> <br/> lim x -&gt; 2 1/(x - 2) [{ x^2 - 5x + 6 }/ x (x - 1)]<br/> <br/> Factorize x^2 - 5x + 6 and u will get (x - 3)(x - 2)<br/> <br/> lim x -&gt; 2 1/(x - 2) [(x - 3)(x - 2) / x (x - 1)]<br/> <br/> cancel out (x - 2), we get<br/> <br/> lim x -&gt; 2 [(x - 3)/ x (x - 1)]<br/> <br/> (2 - 3)/ 2 (2 - 1) = -1/2<br/> <br/> So C will be the answer</div><br><br><small>Source: <a href=\"https://gateoverflow.in/473567/go-classes-dpp-calculus-limits-ncert\" target=\"_blank\">GATE Overflow #473567</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Let $f:\\mathbb{R}\\rightarrow\\mathbb{R}$ be a function given by</p><p>$$f(x)= \\begin{cases} \\dfrac{1-\\cos(2x)}{x^2}, &amp; x&lt;0 \\\\\\\\ \\alpha, &amp; x=0 \\\\\\\\ \\dfrac{\\beta\\sqrt{1-\\cos x}}{x}, &amp; x&gt;0 \\end{cases}$$</p><p>where $\\alpha,\\beta\\in\\mathbb{R}$. If $f$ is continuous at $x=0$, then $\\alpha^2+\\beta^2$ is equal to:</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$48$<br/></span>",
                "<span style=\"display: inline;\">$6$<br/></span>",
                "<span style=\"display: inline;\">$3$<br/></span>",
                "<span style=\"display: inline;\">$12$</span>"
            ],
            "answer": "D",
            "solution": "<div class=\"solution-content\"><a name=\"473718\"></a><div itemprop=\"text\"><p>Since \\(f(x)\\) is continuous at \\(x=0\\), its left-hand limit, right-hand limit, and function value must be equal. \\[ \\lim_{x\\to0^-}f(x)=f(0)=\\lim_{x\\to0^+}f(x) \\] Using the identity $1-\\cos2x=2\\sin^2x,$</p><p>the left-hand limit is \\[ \\begin{aligned} \\lim_{x\\to0^-}f(x) &amp;=\\lim_{x\\to0^-}\\frac{1-\\cos2x}{x^2}\\\\\\\\ &amp;=2\\lim_{x\\to0^-}\\left(\\frac{\\sin x}{x}\\right)^2=2 \\end{aligned} \\] Since \\(f(0)=\\alpha\\), continuity gives $\\boxed{\\alpha=2}.$ </p><p>Now consider the right-hand limit: \\[ \\begin{aligned} \\lim_{x\\to0^+}f(x) &amp;=\\lim_{x\\to0^+}\\frac{\\beta\\sqrt{1-\\cos x}}x\\\\\\\\ &amp;=\\beta\\sqrt2\\lim_{x\\to0^+}\\frac{|\\sin(x/2)|}{x} \\end{aligned} \\] As \\(x\\to0^+\\), \\(\\sin(x/2)\\) is positive, so \\[ \\begin{aligned} \\lim_{x\\to0^+}f(x) &amp;=\\frac{\\beta}{\\sqrt2} \\lim_{x\\to0^+}\\frac{\\sin(x/2)}{x/2}=\\frac{\\beta}{\\sqrt2} \\end{aligned} \\] For continuity, \\[ \\frac{\\beta}{\\sqrt2}=\\alpha=2 \\] Therefore, \\[ \\boxed{\\beta=2\\sqrt2} \\] Hence, \\[ \\begin{aligned} \\alpha^2+\\beta^2 &amp;=2^2+(2\\sqrt2)^2=4+8=\\boxed{12} \\end{aligned} \\] <strong>Answer : D</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/473563/go-classes-dpp-calculus-limits-and-continuity-jee-mains\" target=\"_blank\">GATE Overflow #473563</a></small></div>"
        }
    ]
});

registerTest({
    "name": "DPP 08 - Engineering Mathematics (Limits, Continuity & Differentiability - Part 8)",
    "testLabel": "DPP 08",
    "testType": "DPP",
    "bracket": "Limits, Continuity & Differentiability - Part 8",
    "subject": "em",
    "series": "cse-dpp-2027",
    "date": "Nov 03, 2026",
    "duration": "15 Min",
    "totalMarks": 2,
    "topicsCovered": "Limits, Continuity & Differentiability (Practice Set 8)",
    "questions": [
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\">Define a function $f$ as follows:<br/> <br/> $$<br/> f(x)= \\begin{cases}k x^2+l, &amp; \\text { if } x \\leqslant 1 \\\\ l x^2+k x+m, &amp; \\text { if } x&gt;1\\end{cases}<br/> $$<br/> <br/> If $f$ is continuous and differentible at $x=1$, find the value of $k-2 l+m$.</div></span>",
            "image": "",
            "options": [],
            "answer": "0",
            "solution": "<div class=\"solution-content\"><a name=\"472749\"></a><div itemprop=\"text\">Since $f$ is continuous at $x=1$, we have:<br/> <br/> $$<br/> k+l=l+k+m \\Longrightarrow m=0<br/> $$<br/> <br/> Since $f$ is differentiable at $x=1$, we have:<br/> <br/> $$<br/> 2 k=2 l+k \\Longrightarrow k=2 l<br/> $$<br/> <br/> From this, we see that $k-2 l+m=0$</div><br><br><small>Source: <a href=\"https://gateoverflow.in/472748/go-classes-dpp-calculus-continuity-and-differentiability-iitm\" target=\"_blank\">GATE Overflow #472748</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Simplify the expression:</p><p> $<br/> \\lim _{x \\rightarrow 4} \\frac{x^2-16}{x-4}<br/> $</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">1</span>",
                "<span style=\"display: inline;\">0</span>",
                "<span style=\"display: inline;\">8</span>",
                "<span style=\"display: inline;\">16</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"472741\"></a><div itemprop=\"text\">$$<br/> \\begin{aligned}<br/> \\lim _{x \\rightarrow 4} \\frac{x^2-16}{x-4} &amp; =\\lim _{x \\rightarrow 4} \\frac{(x+4)(x-4)}{x-4} \\\\<br/> &amp; =\\lim _{x \\rightarrow 4} x+4 \\\\<br/> &amp; =4+4 \\\\<br/> &amp; =8<br/> \\end{aligned}<br/> $$</div><br><br><small>Source: <a href=\"https://gateoverflow.in/472740/go-classes-dpp-calculus-limits-scribd\" target=\"_blank\">GATE Overflow #472740</a></small></div>"
        }
    ]
});

registerTest({
    "name": "DPP 09 - Engineering Mathematics (Differential Calculus & Applications - Part 1)",
    "testLabel": "DPP 09",
    "testType": "DPP",
    "bracket": "Differential Calculus & Applications - Part 1",
    "subject": "em",
    "series": "cse-dpp-2027",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 11,
    "topicsCovered": "Differential Calculus & Applications (Practice Set 1)",
    "questions": [
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"119\" data-start=\"30\">The point of inflection of the function $y=e^x(\\sin x-\\cos x)$ in $[0,\\pi]$ is:</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$x=\\dfrac{\\pi}{4}$<br/><br/></span>",
                "<span style=\"display: inline;\">$x=\\dfrac{3\\pi}{4}$<br/><br/></span>",
                "<span style=\"display: inline;\">$x=\\dfrac{\\pi}{4},\\dfrac{3\\pi}{4}$<br/><br/></span>",
                "<span style=\"display: inline;\">No point of inflection</span>"
            ],
            "answer": "B",
            "solution": "<div class=\"solution-content\"><a name=\"533357\"></a><div itemprop=\"text\"><p>We are given $y=e^x(\\sin x-\\cos x)$.</p><p>To find a point of inflection, we need $y''=0$ and the concavity must change sign.</p><p>First differentiate using the product rule:</p><p>$y'=e^x(\\sin x-\\cos x)+e^x(\\cos x+\\sin x)$</p><p>Simplify:</p><p>$y'=e^x(2\\sin x)$</p><p>$y'=2e^x\\sin x$</p><p>Differentiate again:</p><p>$y''=2e^x\\sin x+2e^x\\cos x$</p><p>$y''=2e^x(\\sin x+\\cos x)$</p><p>Now set $y''=0$:</p><p>$2e^x(\\sin x+\\cos x)=0$</p><p>Since $2e^x&gt;0$ for all $x$, we only need</p><p>$\\sin x+\\cos x=0$</p><p>So,</p><p>$\\tan x=-1$</p><p>In the interval $[0,\\pi]$, this gives</p><p>$x=\\frac{3\\pi}{4}$</p><p style=\"text-align:center\"><img alt=\"\" height=\"333\" src=\"https://cdn.mathpix.com/snip/images/9lKEb8eyG1Ej3zE4mib5GQPYp197xbc8tGN1fdxppf0.original.fullsize.png\" width=\"611\"/></p><p>Now check whether the sign of $y''$ changes at $x=\\frac{3\\pi}{4}$.</p><p>Since $2e^x&gt;0$, the sign of $y''$ depends only on $\\sin x+\\cos x$.</p><p>For $0&lt;x&lt;\\frac{3\\pi}{4}$, $\\sin x+\\cos x&gt;0$, so $y''&gt;0$ and the curve is concave up.</p><p>For $\\frac{3\\pi}{4}&lt;x&lt;\\pi$, $\\sin x+\\cos x&lt;0$, so $y''&lt;0$ and the curve is concave down.</p><p>Therefore, concavity changes at $x=\\frac{3\\pi}{4}$.</p><p>Answer: <strong>B. </strong>$x=\\frac{3\\pi}{4}$</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/533356/go-classes-dpp-gate-cs-da-calculus-%26-optimization-inflection-points\" target=\"_blank\">GATE Overflow #533356</a></small></div>"
        },
        {
            "marks": 2,
            "neg": 0,
            "type": "MSQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"143\" data-start=\"30\">The point(s) of inflection of the curve $$y=\\frac{2}{5}x^6-\\frac{9}{5}x^5-3x^4+22x^3-36x^2+5x+1$$ is/are:</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$x=-2,1,3$<br/></span>",
                "<span style=\"display: inline;\">$x=-2$ and $x=3$ only<br/></span>",
                "<span style=\"display: inline;\">$x=1$ only<br/></span>",
                "<span style=\"display: inline;\">None of the above</span>"
            ],
            "answer": "B",
            "solution": "<div class=\"solution-content\"><a name=\"533258\"></a><div itemprop=\"text\"><p data-end=\"302\" data-start=\"228\">To find points of inflection, we check where $y''$ changes sign.</p><p data-end=\"321\" data-start=\"304\">First derivative:</p><p data-end=\"366\" data-start=\"323\">$$y'=\\frac{12}{5}x^5-9x^4-12x^3+66x^2-72x+5$$</p><p data-end=\"386\" data-start=\"368\">Second derivative:</p><p data-end=\"419\" data-start=\"388\">$$y''=12x^4-36x^3-36x^2+132x-72$$</p><p data-end=\"432\" data-start=\"421\">Now factor:</p><p data-end=\"459\" data-start=\"434\">$$y''=12(x-1)^2(x+2)(x-3)$$</p><p data-end=\"513\" data-start=\"461\">So the possible points of inflection are $x=-2,1,3$.</p><p style=\"text-align:center\"><img alt=\"\" height=\"236\" src=\"https://cdn.mathpix.com/snip/images/GIt9GcOYGoELk7vVYoZHKM-KvNK4CvJyYdah57PVHTk.original.fullsize.png\" width=\"432\"/></p><p data-end=\"543\" data-start=\"515\">Now check the sign of $y''$.</p><p data-end=\"600\" data-start=\"545\">On $(-\\infty,-2)$, $y''&gt;0$, so the curve is concave up.</p><p data-end=\"653\" data-start=\"602\">On $(-2,1)$, $y''&lt;0$, so the curve is concave down.</p><p data-end=\"711\" data-start=\"655\">On $(1,3)$, $y''&lt;0$, so the curve is still concave down.</p><p data-end=\"766\" data-start=\"713\">On $(3,\\infty)$, $y''&gt;0$, so the curve is concave up.</p><p data-end=\"835\" data-start=\"768\">Therefore, concavity changes at $x=-2$ and $x=3$, but not at $x=1$.</p><p data-end=\"869\" data-start=\"837\">Answer: <strong>B.</strong> $x=-2$ and $x=3$ only</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/533257/go-classes-dpp-gate-cs-da-calculus-%26-optimization-inflection-points\" target=\"_blank\">GATE Overflow #533257</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"357\" data-start=\"26\">A $20\\text{ ft}$ ladder leans against a vertical wall. The base of the ladder is sliding away from the wall at $2\\text{ ft/s}$. A point $P$ on the ladder is $6\\text{ ft}$ from the top of the ladder. At the instant when the base is $12\\text{ ft}$ from the wall, at what rate is the height of $P$ above the ground changing?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$-\\frac{3}{2}\\text{ ft/s}$<br/></span>",
                "<span style=\"display: inline;\">$-\\frac{21}{20}\\text{ ft/s}$<br/></span>",
                "<span style=\"display: inline;\">$-\\frac{9}{10}\\text{ ft/s}$<br/></span>",
                "<span style=\"display: inline;\">$\\frac{21}{20}\\text{ ft/s}$</span>"
            ],
            "answer": "B",
            "solution": "<div class=\"solution-content\"><a name=\"533099\"></a><div itemprop=\"text\"><p style=\"text-align:center\"><img alt=\"\" height=\"276\" src=\"https://cdn.mathpix.com/snip/images/TxRi_CUt43yqZJrRvyJsYUaqxC-NVGhZiI75wz48BTk.original.fullsize.png\" width=\"302\"/></p><p data-end=\"143\" data-start=\"0\">Let $x$ be the distance from the wall to the base of the ladder, and let $y$ be the height of the top of the ladder above the ground.</p><p data-end=\"185\" data-start=\"145\">Since the ladder is $20\\text{ ft}$ long,</p><p data-end=\"201\" data-start=\"187\">$$\\Rightarrow x^2+y^2=20^2$$</p><p data-end=\"216\" data-start=\"203\">$$\\Rightarrow x^2+y^2=400$$</p><p data-end=\"253\" data-start=\"218\">Differentiate with respect to time:</p><p data-end=\"290\" data-start=\"255\">$$\\Rightarrow 2x\\frac{dx}{dt}+2y\\frac{dy}{dt}=0$$</p><p data-end=\"306\" data-start=\"292\">$$\\Rightarrow x\\frac{dx}{dt}+y\\frac{dy}{dt}=0$$</p><p data-end=\"386\" data-start=\"343\">We are given $\\frac{dx}{dt}=2\\text{ ft/s}$.</p><p data-end=\"415\" data-start=\"388\">At the instant when $x=12$,</p><p data-end=\"431\" data-start=\"417\">$$\\Rightarrow 12^2+y^2=400$$</p><p data-end=\"446\" data-start=\"433\">$$\\Rightarrow 144+y^2=400$$</p><p data-end=\"457\" data-start=\"448\">$$\\Rightarrow y^2=256$$</p><p data-end=\"465\" data-start=\"459\">$$\\Rightarrow y=16$$</p><p data-end=\"559\" data-start=\"467\">Now substitute $x=12$, $y=16$, and $\\frac{dx}{dt}=2$ into $x\\frac{dx}{dt}+y\\frac{dy}{dt}=0$:</p><p data-end=\"586\" data-start=\"561\">$$\\Rightarrow 12(2)+16\\frac{dy}{dt}=0$$</p><p data-end=\"610\" data-start=\"588\">$$\\Rightarrow 24+16\\frac{dy}{dt}=0$$</p><p data-end=\"633\" data-start=\"612\">$$\\Rightarrow 16\\frac{dy}{dt}=-24$$</p><p data-end=\"675\" data-start=\"635\">$$\\Rightarrow \\frac{dy}{dt}=-\\frac{3}{2}\\text{ ft/s}$$</p><p data-end=\"750\" data-start=\"677\">So the top of the ladder is moving downward at $\\frac{3}{2}\\text{ ft/s}$.</p><p data-end=\"785\" data-start=\"752\">Now find the height of point $P$.</p><p data-end=\"918\" data-start=\"787\">Point $P$ is $6\\text{ ft}$ from the top of the $20\\text{ ft}$ ladder. So point $P$ is $14\\text{ ft}$ from the bottom of the ladder.</p><p data-end=\"968\" data-start=\"920\">Since heights along the ladder are proportional,</p><p data-end=\"997\" data-start=\"970\">$$\\Rightarrow \\frac{h}{y}=\\frac{14}{20}$$</p><p data-end=\"1002\" data-start=\"999\">$$\\Rightarrow h=\\frac{14}{20}y=\\frac{7}{10}y$$</p><p data-end=\"1052\" data-start=\"1038\">Differentiate:</p><p data-end=\"1095\" data-start=\"1054\">$$\\Rightarrow \\frac{dh}{dt}=\\frac{7}{10}\\frac{dy}{dt}$$</p><p data-end=\"1137\" data-start=\"1097\">Substitute $\\frac{dy}{dt}=-\\frac{3}{2}$:</p><p data-end=\"1192\" data-start=\"1139\">$$\\Rightarrow \\frac{dh}{dt}=\\frac{7}{10}\\left(-\\frac{3}{2}\\right)$$</p><p data-end=\"1236\" data-start=\"1194\">$$\\Rightarrow \\frac{dh}{dt}=-\\frac{21}{20}\\text{ ft/s}$$<br/> </p><p data-end=\"1329\" data-start=\"1238\">Therefore, the height of $P$ above the ground is decreasing at $\\dfrac{21}{20}\\text{ ft/s}$.</p><p data-end=\"1370\" data-is-last-node=\"\" data-is-only-node=\"\" data-start=\"1331\">Answer: <strong>B.</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/533098/go-classes-dpp-gate-cs-da-calculus-%26-optimization-related-rates\" target=\"_blank\">GATE Overflow #533098</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"129\" data-start=\"40\">Which of the following is the derivative of $f(x)=(x^2+1)^{x\\ln x}$ when $x&gt;0$?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$(x^2+1)^{x\\ln x}\\left((\\ln x+1)\\ln(x^2+1)+\\dfrac{2x^2\\ln x}{x^2+1}\\right)$<br/></span>",
                "<span style=\"display: inline;\">$(x^2+1)^{x\\ln x}\\left(\\ln(x^2+1)+\\dfrac{2x\\ln x}{x^2+1}\\right)$<br/></span>",
                "<span style=\"display: inline;\">$(x^2+1)^{x\\ln x}\\left(x\\ln x+\\dfrac{2x}{x^2+1}\\right)$<br/></span>",
                "<span style=\"display: inline;\">$(x^2+1)^{x\\ln x}\\left((\\ln x+1)(x^2+1)+2x\\ln x\\right)$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"533095\"></a><div itemprop=\"text\"><p>Let $y=(x^2+1)^{x\\ln x}$.</p><p>Since the variable $x$ appears in both the base and the exponent, use logarithmic differentiation.</p><p>Take $\\ln$ on both sides:</p><p>$\\Rightarrow \\ln y=\\ln\\left((x^2+1)^{x\\ln x}\\right)$</p><p>Using $\\ln(a^b)=b\\ln a$, we get:</p><p>$\\Rightarrow \\ln y=x\\ln x\\cdot \\ln(x^2+1)$</p><p>Now differentiate both sides with respect to $x$.</p><p>Left side:</p><p>$\\Rightarrow \\frac{d}{dx}(\\ln y)=\\frac{y'}{y}$</p><p>Right side needs the product rule. Let $u=x\\ln x$ and $v=\\ln(x^2+1)$.</p><p>Then $u'=\\ln x+1$ and $v'=\\frac{2x}{x^2+1}$.</p><p>So,</p><p>$\\Rightarrow \\frac{y'}{y}=(\\ln x+1)\\ln(x^2+1)+x\\ln x\\cdot\\frac{2x}{x^2+1}$</p><p>Simplify:</p><p>$\\Rightarrow \\frac{y'}{y}=(\\ln x+1)\\ln(x^2+1)+\\frac{2x^2\\ln x}{x^2+1}$</p><p>Now multiply both sides by $y$:</p><p>$\\Rightarrow y'=y\\left((\\ln x+1)\\ln(x^2+1)+\\frac{2x^2\\ln x}{x^2+1}\\right)$</p><p>Since $y=(x^2+1)^{x\\ln x}$,</p><p>$\\boxed{\\therefore f'(x)=(x^2+1)^{x\\ln x}\\left((\\ln x+1)\\ln(x^2+1)+\\frac{2x^2\\ln x}{x^2+1}\\right)}$</p><p>Answer: <strong>A.</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/533094/go-classes-dpp-gate-cs-da-calculus-%26-optimization-differentiation\" target=\"_blank\">GATE Overflow #533094</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"124\" data-start=\"40\">For a function $f:[-1,1]\\to\\mathbb{R}$, consider the following statements:</p><p data-end=\"394\" data-start=\"363\">Which of the following is <strong>true</strong>?</p><p><strong>Given Details:</strong></p><ul><li>(I) and (II) are equivalent.</li><li>(I) implies (III), and (II) implies (III), but neither (I) nor (II) implies the other.</li><li>(III) implies (I), but (I) does not imply (III).</li><li>(II) implies (I), but (I) does not imply (II).</li></ul></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">There exists $\\epsilon&gt;0$ such that for all $x,y\\in(-\\epsilon,\\epsilon)$, if $x&lt;y$, then $f(x)&lt;f(y)$.</span>",
                "<span style=\"display: inline;\">$f'(0)$ exists and $f'(0)&gt;0$.</span>",
                "<span style=\"display: inline;\">There exists $\\epsilon&gt;0$ such that for all $0&lt;|x|&lt;\\epsilon$, $\\frac{f(x)-f(0)}{x}&gt;0$.</span>"
            ],
            "answer": "B",
            "solution": "<div class=\"solution-content\"><a name=\"533006\"></a><div itemprop=\"text\"><p data-end=\"52\" data-start=\"0\">We compare the three statements carefully.</p><p data-end=\"90\" data-start=\"54\"><br/>First, prove that (I) implies (III).</p><p data-end=\"168\" data-start=\"92\">If (I) is true, then $f$ is strictly increasing on some interval around $0$.</p><p data-end=\"277\" data-start=\"170\">So for $0&lt;x&lt;\\epsilon$, we have $f(0)&lt;f(x)$. Therefore, $f(x)-f(0)&gt;0$ and $x&gt;0$, so $\\frac{f(x)-f(0)}{x}&gt;0$.</p><p data-end=\"390\" data-start=\"279\">For $-\\epsilon&lt;x&lt;0$, we have $f(x)&lt;f(0)$. Therefore, $f(x)-f(0)&lt;0$ and $x&lt;0$, so again $\\frac{f(x)-f(0)}{x}&gt;0$.</p><p data-end=\"417\" data-start=\"392\">Hence, (I) implies (III).</p><p data-end=\"453\" data-start=\"419\"><br/>Now prove that (II) implies (III).</p><p data-end=\"492\" data-start=\"455\">If $f'(0)$ exists and $f'(0)&gt;0$, then</p><p data-end=\"536\" data-start=\"494\">$\\lim_{x\\to0}\\frac{f(x)-f(0)}{x}=f'(0)&gt;0$.</p><p data-end=\"673\" data-start=\"538\">Since the limit is positive, the expression $\\frac{f(x)-f(0)}{x}$ must be positive for all $x$ sufficiently close to $0$ with $x\\neq0$.</p><p data-end=\"701\" data-start=\"675\">Hence, (II) implies (III).</p><p data-end=\"744\" data-start=\"703\"><br/>Now we show that (I) does not imply (II).</p><p data-end=\"867\" data-start=\"746\">Take $f(x)=x^3$. This function is strictly increasing on every interval, so (I) is true. But $f'(0)=0$, so (II) is false.</p><p data-end=\"904\" data-start=\"869\">Therefore, (I) does not imply (II).</p><p data-end=\"947\" data-start=\"906\"><br/>Now we show that (II) does not imply (I).</p><p data-end=\"1012\" data-start=\"949\">Take $f(0)=0$ and $f(x)=x+x^2\\sin(\\frac{1}{x^2})$ for $x\\neq0$.</p><p data-end=\"1018\" data-start=\"1014\">Then</p><p data-end=\"1110\" data-start=\"1020\">$f'(0)=\\lim_{x\\to0}\\frac{f(x)-f(0)}{x}=\\lim_{x\\to0}\\left(1+x\\sin(\\frac{1}{x^2})\\right)=1$.</p><p data-end=\"1128\" data-start=\"1112\">So (II) is true.</p><p data-end=\"1147\" data-start=\"1130\">But for $x\\neq0$,</p><p data-end=\"1212\" data-start=\"1149\">$f'(x)=1+2x\\sin(\\frac{1}{x^2})-\\frac{2}{x}\\cos(\\frac{1}{x^2})$.</p><p data-end=\"1355\" data-start=\"1214\">This derivative becomes negative at points arbitrarily close to $0$. Therefore, $f$ cannot be strictly increasing on any interval around $0$.</p><p data-end=\"1384\" data-start=\"1357\">So (II) does not imply (I).</p><p data-end=\"1466\" data-start=\"1386\"><br/>Thus, both (I) and (II) imply (III), but neither (I) nor (II) implies the other.</p><p data-end=\"1466\" data-start=\"1386\">Answer: <strong>B.</strong></p><p data-end=\"1466\" data-start=\"1386\">(I) implies (III), and (II) implies (III), but neither (I) nor (II) implies the other.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/533005/go-classes-dpp-gate-cs-da-calculus-%26-optimization-derivative-and-monotonicity\" target=\"_blank\">GATE Overflow #533005</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"140\" data-start=\"27\">The function $f(x)=3x^5-45x^4+230x^3-450x^2+6x+11$ is concave down on which of the following intervals?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$(1,3)\\cup(5,\\infty)$<br/></span>",
                "<span style=\"display: inline;\">$(-\\infty,1)\\cup(3,5)$<br/></span>",
                "<span style=\"display: inline;\">$(-\\infty,3)\\cup(5,\\infty)$<br/></span>",
                "<span style=\"display: inline;\">$(1,5)$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"532915\"></a><div itemprop=\"text\"><p data-end=\"86\" data-start=\"0\">To determine where $f(x)$ is concave down, we need to find where $f''(x)&lt;0$.</p><p data-end=\"132\" data-start=\"88\">Given $f(x)=3x^5-45x^4+230x^3-450x^2+6x+11$.</p><p data-end=\"151\" data-start=\"134\">First derivative:</p><p data-end=\"187\" data-start=\"153\">$f'(x)=15x^4-180x^3+690x^2-900x+6$</p><p data-end=\"207\" data-start=\"189\">Second derivative:</p><p data-end=\"240\" data-start=\"209\">$f''(x)=60x^3-540x^2+1380x-900$</p><p data-end=\"253\" data-start=\"242\">Now factor:</p><p data-end=\"283\" data-start=\"255\">$f''(x)=60(x^3-9x^2+23x-15)$</p><p data-end=\"311\" data-start=\"285\">$f''(x)=60(x-1)(x-3)(x-5)$</p><p data-end=\"408\" data-start=\"313\">The possible changes in concavity occur when $f''(x)=0$, so the important points are $x=1,3,5$.</p><p style=\"text-align:center\"><img alt=\"\" height=\"307\" src=\"https://cdn.mathpix.com/snip/images/YqhAmnojOt5EqgiwT5YqPNrMwOQlrUQX6g6nxnrvLHE.original.fullsize.png\" width=\"500\"/></p><p data-end=\"408\" data-start=\"313\">Now test the sign of $f''(x)$ on each interval:</p><p data-end=\"547\" data-start=\"459\">On $(-\\infty,1)$, choose $x=0$: $f''(0)=60(-1)(-3)(-5)&lt;0$, so the graph is concave down.</p><p data-end=\"628\" data-start=\"549\">On $(1,3)$, choose $x=2$: $f''(2)=60(1)(-1)(-3)&gt;0$, so the graph is concave up.</p><p data-end=\"710\" data-start=\"630\">On $(3,5)$, choose $x=4$: $f''(4)=60(3)(1)(-1)&lt;0$, so the graph is concave down.</p><p data-end=\"794\" data-start=\"712\">On $(5,\\infty)$, choose $x=6$: $f''(6)=60(5)(3)(1)&gt;0$, so the graph is concave up.</p><p data-end=\"856\" data-start=\"796\">Therefore, $f(x)$ is concave down on $(-\\infty,1)\\cup(3,5)$.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/532914/go-classes-dpp-gate-cs-da-calculus-%26-optimization-concavity-test\" target=\"_blank\">GATE Overflow #532914</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"222\" data-start=\"75\">What are all values of $x$ for which the function $f(x)=\\dfrac{x^5}{5}-\\dfrac{x^4}{4}-\\dfrac{13x^3}{3}+\\dfrac{25x^2}{2}-12x+6$ is increasing?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$(-\\infty,-4)\\cup(1,3)$<br/></span>",
                "<span style=\"display: inline;\">$(-4,1)\\cup(3,\\infty)$<br/></span>",
                "<span style=\"display: inline;\">$(-\\infty,-4)\\cup(3,\\infty)$<br/></span>",
                "<span style=\"display: inline;\">$(-\\infty,1)\\cup(3,\\infty)$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"532908\"></a><div itemprop=\"text\"><p>To find where $f(x)$ is increasing, find where $f'(x)&gt;0$. </p><p>We have $f'(x)=x^4-x^3-13x^2+25x-12=(x+4)(x-1)^2(x-3)$. </p><p>The critical points are $x=-4,1,3$. </p><p style=\"text-align:center\"><img alt=\"\" height=\"270\" src=\"https://cdn.mathpix.com/snip/images/I3oTowxznbGXDVWZEC48kNQRGAyz4qWdysI3h37JqLM.original.fullsize.png\" width=\"429\"/></p><p><br/>Since $(x-1)^2$ is always nonnegative, the sign of $f'(x)$ only changes at $x=-4$ and $x=3$. </p><p>Testing intervals gives $f'(x)&gt;0$ on $(-\\infty,-4)$ and $(3,\\infty)$. </p><p>Therefore, $f(x)$ is increasing on $(-\\infty,-4)\\cup(3,\\infty)$.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/532907/go-classes-dpp-gate-cs-da-calculus-%26-optimization-first-derivative-test\" target=\"_blank\">GATE Overflow #532907</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"171\" data-start=\"54\">For the function $f(x)=x^4-8x^3+18x^2+ax+7$, which statement about having a local maximum at $x=1$ is true?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">It happens for exactly one value of $a$.<br/></span>",
                "<span style=\"display: inline;\">It happens for more than one value of $a$.<br/></span>",
                "<span style=\"display: inline;\">It happens for no value of $a$.<br/></span>",
                "<span style=\"display: inline;\">It happens for every value of $a$.</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"532904\"></a><div itemprop=\"text\"><p data-end=\"65\" data-start=\"0\">If $f(x)$ has a local maximum at $x=1$, then $f'(1)=0$.</p><p data-end=\"91\" data-start=\"67\">$\\Rightarrow f'(x)=4x^3-24x^2+36x+a$</p><p data-end=\"607\" data-start=\"585\">$\\Rightarrow f'(1)=4-24+36+a=16+a$</p><p data-end=\"642\" data-start=\"609\">So $16+a=0$, which gives $a=-16$.</p><p data-end=\"810\" data-start=\"644\">Now check that it is actually a maximum. </p><p data-end=\"810\" data-start=\"644\">$\\Rightarrow f''(x)=12x^2-48x+36$</p><p data-end=\"810\" data-start=\"644\">$\\Rightarrow f''(1)=12-48+36=0$. </p><p data-end=\"810\" data-start=\"644\">The second derivative test does not decide. </p><p data-end=\"810\" data-start=\"644\">Instead, use $f'(x)$ when $a=-16$:</p><p data-end=\"851\" data-start=\"812\">$f'(x)=4x^3-24x^2+36x-16=4(x-1)^2(x-4)$</p><p data-end=\"994\" data-start=\"853\">Near $x=1$, $(x-1)^2$ is always positive and $x-4$ is negative.</p><p data-end=\"994\" data-start=\"853\">So $f'(x)&lt;0$ on both sides of $x=1$. </p><p data-end=\"994\" data-start=\"853\">Therefore, the function is decreasing on both sides of $x=1$, so $x=1$ is not a local maximum.</p><p data-end=\"994\" data-start=\"853\">So, no value of $a$ makes $f(x)$ attain a local maximum at $x=1$.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/532903/go-classes-dpp-gate-cs-da-calculus-%26-optimization-second-derivative-test\" target=\"_blank\">GATE Overflow #532903</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"151\" data-start=\"14\">Let $y$ be defined implicitly by $x^2y+y^3=10$. If the curve passes through $(1,2)$, what is the value of $\\dfrac{d^2y}{dx^2}$ at $(1,2)$?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$-\\dfrac{660}{2197}$<br/><br/></span>",
                "<span style=\"display: inline;\">$-\\dfrac{52}{169}$<br/><br/></span>",
                "<span style=\"display: inline;\">$\\dfrac{660}{2197}$<br/><br/></span>",
                "<span style=\"display: inline;\">$\\dfrac{4}{13}$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"532670\"></a><div itemprop=\"text\"><p data-end=\"303\" data-start=\"255\">Differentiate $x^2y+y^3=10$ with respect to $x$.</p><p data-end=\"325\" data-start=\"305\">$\\Rightarrow 2xy+x^2y'+3y^2y'=0$</p><p data-end=\"343\" data-start=\"327\">Factor out $y'$.</p><p data-end=\"365\" data-start=\"345\">$\\Rightarrow 2xy+(x^2+3y^2)y'=0$</p><p data-end=\"397\" data-start=\"367\">So $y'=\\dfrac{-2xy}{x^2+3y^2}$</p><p data-end=\"458\" data-start=\"399\">At $(1,2)$, $y'=\\dfrac{-2(1)(2)}{1^2+3(2)^2}=\\dfrac{-4}{13}$<br/> </p><p data-end=\"505\" data-start=\"460\">Now differentiate $2xy+(x^2+3y^2)y'=0$ again.</p><p data-end=\"544\" data-start=\"507\">$2y+2xy'+(2x+6yy')y'+(x^2+3y^2)y''=0$</p><p data-end=\"584\" data-start=\"546\">So $2y+4xy'+6y(y')^2+(x^2+3y^2)y''=0$.</p><p data-end=\"634\" data-start=\"586\">Substitute $x=1$, $y=2$, and $y'=-\\frac{4}{13}$.</p><p data-end=\"711\" data-start=\"636\">$\\Rightarrow 4+4(1)\\left(-\\frac{4}{13}\\right)+6(2)\\left(-\\frac{4}{13}\\right)^2+13y''=0$</p><p data-end=\"754\" data-start=\"713\">$\\Rightarrow 4-\\frac{16}{13}+\\frac{192}{169}+13y''=0$</p><p data-end=\"781\" data-start=\"756\">$\\Rightarrow \\frac{660}{169}+13y''=0$</p><p data-end=\"807\" data-start=\"783\">$\\Rightarrow 13y''=-\\frac{660}{169}$</p><p data-end=\"832\" data-start=\"809\">$\\boxed{\\therefore y''=-\\frac{660}{2197}}$</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/532669/go-classes-dpp-gate-cs-da-calculus-%26-optimization-implicit-differentiation\" target=\"_blank\">GATE Overflow #532669</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"163\" data-start=\"14\">A rectangle has its base on the $x$-axis, and its upper two vertices lie on the curve $y=27-x^2$. What is the maximum possible area of the rectangle?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$81$<br/></span>",
                "<span style=\"display: inline;\">$108$<br/></span>",
                "<span style=\"display: inline;\">$162$<br/></span>",
                "<span style=\"display: inline;\">$216$</span>"
            ],
            "answer": "B",
            "solution": "<div class=\"solution-content\"><a name=\"532556\"></a><div itemprop=\"text\"><p data-end=\"300\" data-start=\"218\">Let $x$ be the positive $x$-coordinate of the upper right vertex of the rectangle.</p><p data-end=\"370\" data-start=\"302\">Then the width of the rectangle is $2x$, and the height is $27-x^2$.</p><p data-end=\"405\" data-start=\"372\">So the area is $A(x)=2x(27-x^2)$.</p><p data-end=\"422\" data-start=\"407\">$A(x)=54x-2x^3$</p><p data-end=\"438\" data-start=\"424\">Differentiate.</p><p data-end=\"455\" data-start=\"440\">$A'(x)=54-6x^2$</p><p data-end=\"471\" data-start=\"457\">Set $A'(x)=0$.</p><p data-end=\"484\" data-start=\"473\">$\\Rightarrow 54-6x^2=0$</p><p data-end=\"493\" data-start=\"486\">$\\Rightarrow x^2=9$</p><p data-end=\"500\" data-start=\"495\">$\\Rightarrow x=3$</p><p data-end=\"522\" data-start=\"502\">Now find the height.</p><p data-end=\"537\" data-start=\"524\">$\\Rightarrow y=27-3^2=18$</p><p data-end=\"579\" data-start=\"539\">So the maximum area is $A=2(3)(18)=\\boxed{108}$</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/532555/go-classes-dpp-gate-cs-da-calculus-%26-optimization-area-maximization\" target=\"_blank\">GATE Overflow #532555</a></small></div>"
        }
    ]
});

registerTest({
    "name": "DPP 10 - Engineering Mathematics (Differential Calculus & Applications - Part 2)",
    "testLabel": "DPP 10",
    "testType": "DPP",
    "bracket": "Differential Calculus & Applications - Part 2",
    "subject": "em",
    "series": "cse-dpp-2027",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 11,
    "topicsCovered": "Differential Calculus & Applications (Practice Set 2)",
    "questions": [
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"112\" data-start=\"14\">The intervals for which the function $G(x)=\\frac{x^2}{2}-2x-3\\ln(x^2+1)+8\\tan^{-1}x$ decreases are</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$x<-2,\\ 1<x<3$<br/></span>",
                "<span style=\"display: inline;\">$-2<x<1,\\ x>3$<br/></span>",
                "<span style=\"display: inline;\">$x<1,\\ x>3$<br/></span>",
                "<span style=\"display: inline;\">$-2<x<3$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"532552\"></a><div itemprop=\"text\"><p data-end=\"222\" data-start=\"195\">Differentiate the function.</p><p data-end=\"268\" data-start=\"224\">$G'(x)=x-2-\\frac{6x}{x^2+1}+\\frac{8}{x^2+1}$</p><p data-end=\"309\" data-start=\"270\">$G'(x)=\\frac{(x-2)(x^2+1)-6x+8}{x^2+1}$</p><p data-end=\"346\" data-start=\"311\">$G'(x)=\\frac{x^3-2x^2-5x+6}{x^2+1}$</p><p data-end=\"385\" data-start=\"348\">$G'(x)=\\frac{(x+2)(x-1)(x-3)}{x^2+1}$</p><p data-end=\"475\" data-start=\"387\">Since $x^2+1&gt;0$ for all real $x$, the sign of $G'(x)$ depends only on $(x+2)(x-1)(x-3)$.</p><p data-end=\"521\" data-start=\"477\">The critical numbers are $x=-2,\\ x=1,\\ x=3$.</p><p data-end=\"567\" data-start=\"523\">For $x&lt;-2$, $G'(x)&lt;0$, so $G$ is decreasing.</p><p data-end=\"615\" data-start=\"569\">For $-2&lt;x&lt;1$, $G'(x)&gt;0$, so $G$ is increasing.</p><p data-end=\"662\" data-start=\"617\">For $1&lt;x&lt;3$, $G'(x)&lt;0$, so $G$ is decreasing.</p><p data-end=\"707\" data-start=\"664\">For $x&gt;3$, $G'(x)&gt;0$, so $G$ is increasing.</p><p data-end=\"759\" data-start=\"709\">Therefore, $G(x)$ decreases on $x&lt;-2$ and $1&lt;x&lt;3$.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/532551/go-classes-dpp-gate-cs-da-calculus-%26-optimization-first-derivative-test\" target=\"_blank\">GATE Overflow #532551</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"116\" data-start=\"14\">The intervals for which the function $G(x)=\\frac{x^2}{2}-2x-6\\ln(x^2+1)+14\\tan^{-1}x$ is increasing are</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$x<-3,\\ 1<x<4$<br/></span>",
                "<span style=\"display: inline;\">$-3<x<1,\\ x>4$<br/></span>",
                "<span style=\"display: inline;\">$x<-3,\\ x>4$<br/></span>",
                "<span style=\"display: inline;\">$-3<x<4$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"532550\"></a><div itemprop=\"text\"><p data-end=\"227\" data-start=\"200\">Differentiate the function.</p><p data-end=\"275\" data-start=\"229\">$G'(x)=x-2-\\frac{12x}{x^2+1}+\\frac{14}{x^2+1}$</p><p data-end=\"318\" data-start=\"277\">$G'(x)=\\frac{(x-2)(x^2+1)-12x+14}{x^2+1}$</p><p data-end=\"357\" data-start=\"320\">$G'(x)=\\frac{x^3-2x^2-11x+12}{x^2+1}$</p><p data-end=\"396\" data-start=\"359\">$G'(x)=\\frac{(x+3)(x-1)(x-4)}{x^2+1}$</p><p data-end=\"486\" data-start=\"398\">Since $x^2+1&gt;0$ for all real $x$, the sign of $G'(x)$ depends only on $(x+3)(x-1)(x-4)$.</p><p data-end=\"532\" data-start=\"488\">The critical numbers are $x=-3,\\ x=1,\\ x=4$.</p><p data-end=\"558\" data-start=\"534\">Testing intervals gives:</p><p data-end=\"604\" data-start=\"560\">For $x&lt;-3$, $G'(x)&lt;0$, so $G$ is decreasing.</p><p data-end=\"652\" data-start=\"606\">For $-3&lt;x&lt;1$, $G'(x)&gt;0$, so $G$ is increasing.</p><p data-end=\"699\" data-start=\"654\">For $1&lt;x&lt;4$, $G'(x)&lt;0$, so $G$ is decreasing.</p><p data-end=\"744\" data-start=\"701\">For $x&gt;4$, $G'(x)&gt;0$, so $G$ is increasing.</p><p data-end=\"800\" data-start=\"746\">Therefore, $G(x)$ is increasing on $-3&lt;x&lt;1$ and $x&gt;4$.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/532549/go-classes-dpp-gate-cs-da-calculus-%26-optimization-increasing-intervals\" target=\"_blank\">GATE Overflow #532549</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"237\" data-start=\"15\">Let $T(x,y)=\\dfrac{a x^2+b y^2}{x+y}$, where $a$ and $b$ are constants. If the directional derivative of $T$ at $(1,2)$ in the direction of the vector $(1,-1)$ is $0$, then the relation between $a$ and $b$ is:</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$a=\\dfrac{b}{2}$<br/></span>",
                "<span style=\"display: inline;\">$a=b$<br/></span>",
                "<span style=\"display: inline;\">$a=2b$<br/></span>",
                "<span style=\"display: inline;\">$a=4b$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"532436\"></a><div itemprop=\"text\">The unit vector in the direction of $(1,-1)$ is $\\left(\\frac{1}{\\sqrt2},-\\frac{1}{\\sqrt2}\\right)$.<br/> <br/> So the directional derivative is $\\frac{1}{\\sqrt2}T_x(1,2)-\\frac{1}{\\sqrt2}T_y(1,2)$.<br/> <br/> Since this value is $0$, we get $T_x(1,2)=T_y(1,2)$.<br/> <br/> <br/> Now $T_x=\\dfrac{2ax(x+y)-(ax^2+by^2)}{(x+y)^2}$<br/> <br/> $\\Rightarrow T_x(1,2)=\\dfrac{6a-a-4b}{9}=\\dfrac{5a-4b}{9}$<br/> <br/> <br/> Also $T_y=\\dfrac{2by(x+y)-(ax^2+by^2)}{(x+y)^2}$<br/> <br/> $\\Rightarrow T_y(1,2)=\\dfrac{12b-a-4b}{9}=\\dfrac{8b-a}{9}$<br/> <br/> $\\therefore \\dfrac{5a-4b}{9}=\\dfrac{8b-a}{9}$<br/> <br/> $\\Rightarrow 5a-4b=8b-a$<br/> <br/> $\\Rightarrow 6a=12b$<br/> <br/> $\\boxed{\\therefore a=2b}$</div><br><br><small>Source: <a href=\"https://gateoverflow.in/532435/go-classes-dpp-gate-cs-da-calculus-%26-optimization-partial-derivatives\" target=\"_blank\">GATE Overflow #532435</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\">Let $f(x)=(1+x)(1+x^2)^2(1+x^3)^3$. Find $f'''(0)$.</div></span>",
            "image": "",
            "options": [],
            "answer": "0356530",
            "solution": "<div class=\"solution-content\"><a name=\"531946\"></a><div itemprop=\"text\"><p data-end=\"285\" data-start=\"194\">We know that if $f(x)=a_0+a_1x+a_2x^2+a_3x^3+\\cdots$, then $f'''(0)=3!a_3$.</p><p data-end=\"338\" data-start=\"287\">So we only need the coefficient of $x^3$ in $f(x)$.</p><p data-end=\"375\" data-start=\"340\">Now $f(x)=(1+x)(1+x^2)^2(1+x^3)^3$.</p><p data-end=\"401\" data-start=\"377\">Expand only up to $x^3$.</p><p data-end=\"458\" data-start=\"403\">$(1+x^2)^2=1+2x^2+x^4$, so up to $x^3$, it is $1+2x^2$.</p><p data-end=\"518\" data-start=\"460\">$(1+x^3)^3=1+3x^3+\\cdots$, so up to $x^3$, it is $1+3x^3$.</p><p data-end=\"572\" data-start=\"520\">Therefore, $f(x)=(1+x)(1+2x^2)(1+3x^3)$ up to $x^3$.</p><p data-end=\"611\" data-start=\"574\">First, $(1+x)(1+2x^2)=1+x+2x^2+2x^3$.</p><p data-end=\"640\" data-start=\"613\">Now multiply by $(1+3x^3)$.</p><p data-end=\"678\" data-start=\"642\">The coefficient of $x^3$ is $2+3=5$.</p><p data-end=\"691\" data-start=\"680\">So $a_3=5$.</p><p data-end=\"734\" data-start=\"693\">$\\boxed{\\therefore f'''(0)=3!\\cdot5=6\\cdot5=30}$</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/531944/go-classes-dpp-gate-cs-da-calculus-%26-optimization-coefficient-derivative\" target=\"_blank\">GATE Overflow #531944</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"350\" data-start=\"39\">Shown in the figure are portions of three graphs $A$, $B$, and $C$. </p><p style=\"text-align:center\"><img alt=\"\" height=\"361\" src=\"https://cdn.mathpix.com/snip/images/RBOXB_5MY5LJdbUBKaeBf3jiCUKJ3Lt9Z0C2LHbNUjo.original.fullsize.png\" width=\"481\"/></p><p data-end=\"350\" data-start=\"39\">They represent $y=f(x)$, $y=f'(x)$, and $y=f''(x)$ in some order. Curve $A$ is a dotted upward-opening parabola, curve $B$ is a solid W-shaped curve, and curve $C$ is a dashed cubic curve. Which of the following is correct?</p></div></span>",
            "image": "https://cdn.mathpix.com/snip/images/RBOXB_5MY5LJdbUBKaeBf3jiCUKJ3Lt9Z0C2LHbNUjo.original.fullsize.png",
            "options": [
                "<span style=\"display: inline;\">$A=f(x)$, $B=f'(x)$, $C=f''(x)$<br/></span>",
                "<span style=\"display: inline;\">$A=f''(x)$, $B=f(x)$, $C=f'(x)$<br/></span>",
                "<span style=\"display: inline;\">$A=f'(x)$, $B=f''(x)$, $C=f(x)$<br/></span>",
                "<span style=\"display: inline;\">$A=f'(x)$, $B=f(x)$, $C=f''(x)$</span>"
            ],
            "answer": "C",
            "solution": "<div class=\"solution-content\"><a name=\"531853\"></a><div itemprop=\"text\"><p data-end=\"688\" data-start=\"559\">The solid curve $B$ is W-shaped, so it has three turning points. Therefore, its derivative must have three zeros.</p><p data-end=\"843\" data-start=\"690\">The dashed curve $C$ is cubic-like and cuts the $x$-axis at three points. These three zeros match the three turning points of curve $B$. Hence $C=f'(x)$.</p><p data-end=\"968\" data-start=\"845\">Now, the derivative of a cubic-like curve is a parabola. The dotted curve $A$ is an upward-opening parabola, so $A=f''(x)$.</p><p data-end=\"1099\" data-start=\"970\">Also, the zeros of $A$ match the local maximum and local minimum points of $C$, which confirms that $A$ is the derivative of $C$.</p><p data-end=\"1148\" data-start=\"1101\">Therefore, $B=f(x)$, $C=f'(x)$, and $A=f''(x)$.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/531852/go-classes-dpp-gate-cs-da-calculus-%26-optimization-derivative-graph-relations\" target=\"_blank\">GATE Overflow #531852</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Let $f(x,y)=x^2e^{xy}+y^3$. At the point $P=(1,2)$, find the maximum possible directional derivative of $f$ among all unit vectors $\\mathbf{u}=\\langle a,b\\rangle$ satisfying $a+b=0$.</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$0$<br/></span>",
                "<span style=\"display: inline;\">$\\frac{3e^2-12}{\\sqrt{2}}$<br/></span>",
                "<span style=\"display: inline;\">$\\frac{12-3e^2}{\\sqrt{2}}$<br/></span>",
                "<span style=\"display: inline;\">$4e^2+e^2+12$</span>"
            ],
            "answer": "C",
            "solution": "<div class=\"solution-content\"><a name=\"531554\"></a><div itemprop=\"text\"><p data-end=\"460\" data-start=\"304\">The directional derivative of $f$ at $P$ in the direction of a unit vector $\\mathbf{u}$ is $D_{\\mathbf{u}}f(P)=\\nabla f(P)\\cdot \\mathbf{u}$.</p><p data-end=\"486\" data-start=\"462\">First find the gradient.</p><p data-end=\"514\" data-start=\"488\">$f_x=2xe^{xy}+x^2ye^{xy}$.</p><p data-end=\"537\" data-start=\"516\">$f_y=x^3e^{xy}+3y^2$.</p><p data-end=\"606\" data-start=\"539\">At $(1,2)$, we get $f_x(1,2)=2e^2+2e^2=4e^2$ and $f_y(1,2)=e^2+12$.</p><p data-end=\"654\" data-start=\"608\">So $\\nabla f(1,2)=\\langle 4e^2,e^2+12\\rangle$.</p><p data-end=\"742\" data-start=\"656\">Now $\\mathbf{u}=\\langle a,b\\rangle$ is a unit vector and satisfies $a+b=0$, so $b=-a$.</p><p data-end=\"812\" data-start=\"744\">Since $a^2+b^2=1$, we get $a^2+a^2=1$, so $a=\\pm\\frac{1}{\\sqrt{2}}$.</p><p data-end=\"1009\" data-start=\"814\">Thus the possible unit vectors are $\\mathbf{u}=\\left\\langle \\frac{1}{\\sqrt{2}},-\\frac{1}{\\sqrt{2}}\\right\\rangle$ and $\\mathbf{u}=\\left\\langle -\\frac{1}{\\sqrt{2}},\\frac{1}{\\sqrt{2}}\\right\\rangle$.</p><p data-end=\"1182\" data-start=\"1011\">For $\\mathbf{u}=\\left\\langle \\frac{1}{\\sqrt{2}},-\\frac{1}{\\sqrt{2}}\\right\\rangle$, the directional derivative is $\\frac{4e^2-(e^2+12)}{\\sqrt{2}}=\\frac{3e^2-12}{\\sqrt{2}}$.</p><p data-end=\"1271\" data-start=\"1184\">For the opposite unit vector, the directional derivative is $\\frac{12-3e^2}{\\sqrt{2}}$.</p><p data-end=\"1342\" data-start=\"1273\">The maximum possible value is therefore $\\frac{|3e^2-12|}{\\sqrt{2}}$.</p><p data-end=\"1401\" data-start=\"1344\">Since $3e^2&lt;12$, this becomes $\\boxed{\\frac{12-3e^2}{\\sqrt{2}}}$</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/531553/go-classes-dpp-gate-cs-da-calculus-%26-optimization-directional-derivative\" target=\"_blank\">GATE Overflow #531553</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\">Let $f(x)=\\sqrt[3]{1+ax+bx^2}$, where $a$ and $b$ are real constants. The linear approximation of $f(x)$ at $x=0$ is $L(x)=1+4x$. If the quadratic approximation of $f(x)$ at $x=0$ has no $x^2$ term, then the value of $b$ is:</div></span>",
            "image": "",
            "options": [],
            "answer": "48",
            "solution": "<div class=\"solution-content\"><a name=\"531552\"></a><div itemprop=\"text\"><p data-end=\"369\" data-start=\"295\">We are given $f(x)=\\sqrt[3]{1+ax+bx^2}=(1+ax+bx^2)^{1/3}$.</p><p data-end=\"427\" data-start=\"371\">The linear approximation at $x=0$ is $L(x)=f(0)+f'(0)x$.</p><p data-end=\"479\" data-start=\"429\">Since $f(0)=1$, and $L(x)=1+4x$, we get $f'(0)=4$.</p><p data-end=\"531\" data-start=\"481\">Now, $f'(x)=\\frac{1}{3}(1+ax+bx^2)^{-2/3}(a+2bx)$.</p><p data-end=\"556\" data-start=\"533\">So $f'(0)=\\frac{a}{3}$.</p><p data-end=\"590\" data-start=\"558\">Thus $\\frac{a}{3}=4$, so $a=12$.</p><p data-end=\"634\" data-start=\"592\">Now use the binomial expansion near $x=0$.</p><p data-end=\"662\" data-start=\"636\">$f(x)=(1+12x+bx^2)^{1/3}$.</p><p data-end=\"741\" data-start=\"664\">Using $(1+u)^{1/3}=1+\\frac{1}{3}u-\\frac{1}{9}u^2+\\cdots$, where $u=12x+bx^2$.</p><p data-end=\"817\" data-start=\"743\">Up to the $x^2$ term, $u^2=(12x+bx^2)^2=144x^2+\\text{higher powers of }x$.</p><p data-end=\"880\" data-start=\"819\">So $f(x)=1+\\frac{1}{3}(12x+bx^2)-\\frac{1}{9}(144x^2)+\\cdots$.</p><p data-end=\"938\" data-start=\"882\">Therefore, the coefficient of $x^2$ is $\\frac{b}{3}-16$.</p><p data-end=\"1009\" data-start=\"940\">The quadratic approximation has no $x^2$ term, so $\\frac{b}{3}-16=0$.</p><p data-end=\"1024\" data-start=\"1011\">Hence $\\boxed{b=48}$</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/531551/go-classes-dpp-gate-cs-da-calculus-%26-optimization-linear-approximation\" target=\"_blank\">GATE Overflow #531551</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>If $f(x,y,z)=\\ln(x^2+y^2+z^2)+e^{xy-z}+x\\sin(yz)$, what is the <strong>length of the gradient</strong> of $f$ at the point $(1,0,1)$? </p><p>Enter the answer correct to two decimal places.</p></div></span>",
            "image": "",
            "options": [],
            "answer": "1.94",
            "solution": "<div class=\"solution-content\"><a name=\"531548\"></a><div itemprop=\"text\"><p data-end=\"246\" data-start=\"202\">We need $|\\nabla f(1,0,1)|$.</p><p data-end=\"301\" data-start=\"248\">Given $f(x,y,z)=\\ln(x^2+y^2+z^2)+e^{xy-z}+x\\sin(yz)$.</p><p data-end=\"338\" data-start=\"303\">First find the partial derivatives.</p><p data-end=\"388\" data-start=\"340\">$f_x=\\frac{2x}{x^2+y^2+z^2}+ye^{xy-z}+\\sin(yz)$.</p><p data-end=\"440\" data-start=\"390\">$f_y=\\frac{2y}{x^2+y^2+z^2}+xe^{xy-z}+xz\\cos(yz)$.</p><p data-end=\"491\" data-start=\"442\">$f_z=\\frac{2z}{x^2+y^2+z^2}-e^{xy-z}+xy\\cos(yz)$.</p><p data-end=\"554\" data-start=\"493\">At $(1,0,1)$, we have $x^2+y^2+z^2=2$, $xy-z=-1$, and $yz=0$.</p><p data-end=\"590\" data-start=\"556\">So $f_x(1,0,1)=\\frac{2}{2}+0+0=1$.</p><p data-end=\"630\" data-start=\"592\">$f_y(1,0,1)=0+e^{-1}+1=\\frac{1}{e}+1$.</p><p data-end=\"680\" data-start=\"632\">$f_z(1,0,1)=\\frac{2}{2}-e^{-1}+0=1-\\frac{1}{e}$.</p><p data-end=\"754\" data-start=\"682\">Therefore, $\\nabla f(1,0,1)=\\left(1,1+\\frac{1}{e},1-\\frac{1}{e}\\right)$.</p><p data-end=\"859\" data-start=\"756\">The length is $|\\nabla f(1,0,1)|=\\sqrt{1^2+\\left(1+\\frac{1}{e}\\right)^2+\\left(1-\\frac{1}{e}\\right)^2}$.</p><p data-end=\"942\" data-start=\"861\">Now, $\\left(1+\\frac{1}{e}\\right)^2+\\left(1-\\frac{1}{e}\\right)^2=2+\\frac{2}{e^2}$.</p><p data-end=\"990\" data-start=\"944\">So $|\\nabla f(1,0,1)|=\\sqrt{3+\\frac{2}{e^2}}$.</p><p data-end=\"1055\" data-start=\"992\">Using $e\\approx 2.718$, we get $|\\nabla f(1,0,1)|\\approx 1.94$.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/531547/go-classes-dpp-gate-cs-da-calculus-%26-optimization-gradient\" target=\"_blank\">GATE Overflow #531547</a></small></div>"
        },
        {
            "marks": 2,
            "neg": 0,
            "type": "MSQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"139\" data-start=\"29\">Suppose $f$ is a function such that $f'(x)=x^2(x-4)^3(x+1)$ and $f''(x)=x(x-4)^2(6x^2-15x-8)$.</p><p data-end=\"176\" data-start=\"141\">Which of the following is/are <strong>TRUE</strong>?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$f$ has a local maximum at $x=-1$ by the first derivative test.<br/></span>",
                "<span style=\"display: inline;\">$f$ has a local minimum at $x=0$ by the first derivative test.<br/></span>",
                "<span style=\"display: inline;\">$f$ has a local maximum at $x=4$ by the first derivative test.<br/></span>",
                "<span style=\"display: inline;\">$f$ has a local minimum at $x=4$ by the second derivative test.</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"531438\"></a><div itemprop=\"text\"><p data-end=\"502\" data-start=\"448\">Critical points occur where $f'(x)=0$.</p><p data-end=\"584\" data-start=\"504\">Since $f'(x)=x^2(x-4)^3(x+1)$, the critical points are $x=-1$, $x=0$, and $x=4$.</p><p data-end=\"633\" data-start=\"586\">Now check the sign of $f'(x)$ on each interval.</p><p data-end=\"687\" data-start=\"635\">For $x&lt;-1$, choose $x=-2$. Then $f'(x)$ is positive.</p><p data-end=\"753\" data-start=\"689\">For $-1&lt;x&lt;0$, choose $x=-\\frac{1}{2}$. Then $f'(x)$ is negative.</p><p data-end=\"807\" data-start=\"755\">For $0&lt;x&lt;4$, choose $x=1$. Then $f'(x)$ is negative.</p><p data-end=\"859\" data-start=\"809\">For $x&gt;4$, choose $x=5$. Then $f'(x)$ is positive.</p><p data-end=\"905\" data-start=\"861\">So the sign pattern of $f'(x)$ is $+,-,-,+$.</p><p data-end=\"1043\" data-start=\"907\">At $x=-1$, $f'(x)$ changes from positive to negative, so $f$ has a local maximum at $x=-1$ by the first derivative test. Thus A is true.</p><p data-end=\"1192\" data-start=\"1045\">At $x=0$, $f'(x)$ does not change sign because it is negative on both sides of $0$. So $f$ does not have a local minimum at $x=0$. Thus B is false.</p><p data-end=\"1350\" data-start=\"1194\">At $x=4$, $f'(x)$ changes from negative to positive, so $f$ has a local minimum at $x=4$ by the first derivative test, not a local maximum. Thus C is false.</p><p data-end=\"1641\" data-start=\"1352\">For the second derivative test at $x=4$, we use $f''(4)$. Since $f''(x)=x(x-4)^2(6x^2-15x-8)$, we get $f''(4)=0$. The second derivative test is inconclusive when $f''(4)=0$. Even though $f$ does have a local minimum at $x=4$, it is not shown by the second derivative test. Thus D is false.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/531437/go-classes-dpp-gate-cs-da-calculus-%26-optimization-derivative-tests\" target=\"_blank\">GATE Overflow #531437</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Given the function $f(x, y)=\\frac{x^2}{y^3}$, determine if $f(x, y)$ is INCREASING or DECREASING at the point $(2,5)$, if we allow $x$ to vary and hold $y$ fixed.<br/> </p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">INCREASING<br/></span>",
                "<span style=\"display: inline;\">DECREASING<br/></span>",
                "<span style=\"display: inline;\">NEITHER INCREASING NOR DECREASING<br/></span>",
                "<span style=\"display: inline;\">CANNOT BE DETERMINED</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"502562\"></a><div itemprop=\"text\">if we allow $x$ to vary and hold $y$ fixed.<br/> <br/> In this case we will first need $f_x(x, y)$ and its value at the point.<br/> <br/> $$<br/> f_x(x, y)=\\frac{2 x}{y^3} \\quad \\Rightarrow \\quad f_x(2,5)=\\frac{4}{125}&gt;0<br/> $$<br/> <br/> So, the partial derivative with respect to $x$ is positive and so if we hold $y$ fixed the function is increasing at $(2,5)$ as we vary $x$.</div><br><br><small>Source: <a href=\"https://gateoverflow.in/502561/go-classes-dpp-calculus-%26-optimization-application-of-derivative\" target=\"_blank\">GATE Overflow #502561</a></small></div>"
        }
    ]
});

registerTest({
    "name": "DPP 11 - Engineering Mathematics (Differential Calculus & Applications - Part 3)",
    "testLabel": "DPP 11",
    "testType": "DPP",
    "bracket": "Differential Calculus & Applications - Part 3",
    "subject": "em",
    "series": "cse-dpp-2027",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 10,
    "topicsCovered": "Differential Calculus & Applications (Practice Set 3)",
    "questions": [
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p><strong>Given the function</strong> $f(x, y)=\\cos (2 x)-x^2 e^{5 y}+3 y^2$<strong>, find all the second-order partial derivatives</strong> $\\left(f_{x x}, f_{y y}\\right.$, and $\\left.f_{x y}\\right)$ <strong>:</strong><br/> </p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$f_{x x}=-2 \\sin (2 x)-2 e^{5 y}, ~f_{y y}=-5 x^2 e^{5 y}+6, ~f_{x y}=-5 x e^{5 y}$<br/></span>",
                "<span style=\"display: inline;\">$f_{x x}=-4 \\cos (2 x)-2 e^{5 y}, ~f_{y y}=-25 x^2 e^{5 y}+6, ~f_{x y}=-10 x e^{5 y}$<br/></span>",
                "<span style=\"display: inline;\">$f_{x x}=-4 \\cos (2 x)-2 x, ~f_{y y}=-25 x^2 e^{5 y}+6 y, ~f_{x y}=-10 x e^{5 y}$<br/></span>",
                "<span style=\"display: inline;\">$f_{x x}=-4 \\sin (2 x)-2 e^{5 y}, ~f_{y y}=-5 x^2 e^{5 y}+6, ~f_{x y}=-10 x e^{5 y}$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"502559\"></a><div itemprop=\"text\">We'll first need the first order derivatives so here they are.<br/> <br/> $$<br/> \\begin{aligned}<br/> &amp; f_x(x, y)=-2 \\sin (2 x)-2 x \\mathbf{e}^{5 y} \\\\\\\\<br/> &amp; f_y(x, y)=-5 x^2 \\mathbf{e}^{5 y}+6 y<br/> \\end{aligned}<br/> $$<br/> <br/> Now, let's get the second order derivatives.<br/> <br/> $$<br/> \\begin{aligned}<br/> &amp; f_{x x}=-4 \\cos (2 x)-2 \\mathrm{e}^{5 y} \\\\\\\\<br/> &amp; f_{x y}=-10 x \\mathrm{e}^{5 y} \\\\\\\\<br/> &amp; f_{y x}=-10 x \\mathrm{e}^{5 y} \\\\\\\\<br/> &amp; f_{y y}=-25 x^2 \\mathrm{e}^{5 y}+6<br/> \\end{aligned}<br/> $$</div><br><br><small>Source: <a href=\"https://gateoverflow.in/502558/go-classes-dpp-calculus-%26-optimization-derivative\" target=\"_blank\">GATE Overflow #502558</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Suppose that the height of a hill above sea level is given by $z=1000-0.01 x^2-0.02 y^2$. If you are at the point $(60,100)$ in what direction is the elevation changing fastest? What is the maximum rate of change of the elevation at this point?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\"><strong>Direction:</strong> $\\langle 1.2,4.0\\rangle$<strong>; Max Rate:</strong> $\\sqrt{17.44}$<br/></span>",
                "<span style=\"display: inline;\"><strong>Direction:</strong> $\\langle-1.2,-4.0\\rangle$<strong>; Max Rate:</strong> $\\sqrt{16}$<br/></span>",
                "<span style=\"display: inline;\"><strong>Direction:</strong> $\\langle-1.2,-4.0\\rangle$<strong>; Max Rate:</strong> $\\sqrt{17.44}$<br/></span>",
                "<span style=\"display: inline;\"><strong>Direction:</strong> $\\langle 4.0,1.2\\rangle$<strong>; Max Rate:</strong> $\\sqrt{17.44}$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"502365\"></a><div itemprop=\"text\"><p>The <strong>gradient</strong> of the function, $\\nabla z$, gives the direction of the fastest rate of change and its magnitude gives the maximum rate of change.</p><p><strong>Calculate the partial derivatives:</strong></p><p>$$<br/>\\begin{aligned}<br/>&amp; \\frac{\\partial z}{\\partial x}=\\frac{\\partial}{\\partial x}\\left(1000-0.01 x^2-0.02 y^2\\right)=-0.01(2 x)=-0.02 x \\\\\\\\<br/>&amp; \\frac{\\partial z}{\\partial y}=\\frac{\\partial}{\\partial y}\\left(1000-0.01 x^2-0.02 y^2\\right)=-0.02(2 y)=-0.04 y<br/>\\end{aligned}<br/>$$</p><p><br/><strong>Evaluate the gradient at the point </strong>$P(60,100)$ :</p><p>$$<br/>\\begin{gathered}<br/>\\left.\\frac{\\partial z}{\\partial x}\\right|_{(60,100)}=-0.02(60)=-1.2 \\\\\\\\<br/>\\left.\\frac{\\partial z}{\\partial y}\\right|_{(60,100)}=-0.04(100)=-4.0<br/>\\end{gathered}<br/>$$</p><p><br/>The gradient vector is:</p><p>$$<br/>\\nabla z(60,100)=\\langle-1.2,-4.0\\rangle<br/>$$</p><p><br/>The maximum rate of change is the magnitude of the gradient vector:</p><p>$$<br/>\\begin{gathered}<br/>\\|\\nabla z(60,100)\\|=\\sqrt{\\left(\\frac{\\partial z}{\\partial x}\\right)^2+\\left(\\frac{\\partial z}{\\partial y}\\right)^2} \\\\\\\\<br/>\\|\\nabla z(60,100)\\|=\\sqrt{(-1.2)^2+(-4.0)^2} \\\\\\\\<br/>\\|\\nabla z(60,100)\\|=\\sqrt{1.44+16} \\\\\\\\<br/>\\|\\nabla z(60,100)\\|=\\sqrt{17.44}<br/>\\end{gathered}<br/>$$</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/502364/go-classes-dpp-calculus-%26-optimization-directional-derivative\" target=\"_blank\">GATE Overflow #502364</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Compute the derivative of the function $g(x, y)=x e^{3 y}$ in the direction of the vector $\\mathbf{v}= \\langle 3,-4\\rangle$ at the point $P(2,0)$.</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\frac{21}{5}$<br/></span>",
                "<span style=\"display: inline;\">$\\frac{1}{5}$<br/></span>",
                "<span style=\"display: inline;\">$21$<br/></span>",
                "<span style=\"display: inline;\">$-\\frac{21}{5}$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"501386\"></a><div itemprop=\"text\"><p><strong>1. Compute the Gradient $\\nabla g(x, y)$</strong></p><p>$$<br/>g(x, y)=x e^{3 y}<br/>$$</p><ul><li><strong>Partial with respect to $x$ :</strong></li></ul><p>$$<br/>\\frac{\\partial g}{\\partial x}=e^{3 y}<br/>$$</p><ul><li><strong>Partial with respect to $y$ :</strong> (Using the Chain Rule)</li></ul><p>$$<br/>\\frac{\\partial g}{\\partial y}=x \\cdot\\left(e^{3 y} \\cdot 3\\right)=3 x e^{3 y}<br/>$$</p><ul><li><strong>Gradient Vector:</strong></li></ul><p>$$<br/>\\nabla g(x, y)=\\left\\langle e^{3 y}, 3 x e^{3 y}\\right\\rangle<br/>$$<br/> </p><p><strong>2. Evaluate the Gradient at $P(2,0)$</strong></p><p>Substitute $x=2$ and $y=0$ :</p><p>$$<br/>\\nabla g(2,0)=\\left\\langle e^{3(0)}, 3(2) e^{3(0)}\\right\\rangle=\\left\\langle e^0, 6 e^0\\right\\rangle=\\langle\\mathbf{1}, \\mathbf{6}\\rangle<br/>$$</p><p><br/><strong>3. Determine the Unit Direction Vector $\\mathbf{u}$</strong></p><p>The direction vector is $\\mathbf{v}=\\langle 3,-4\\rangle$.</p><ul><li><strong>Magnitude:</strong></li></ul><p>$$<br/>|\\mathbf{v}|=\\sqrt{3^2+(-4)^2}=\\sqrt{9+16}=\\sqrt{25}=\\mathbf{5}<br/>$$</p><ul><li><strong>Unit Vector:</strong></li></ul><p>$$<br/>\\mathbf{u}=\\frac{\\mathbf{v}}{|\\mathbf{v}|}=\\left\\langle\\frac{\\mathbf{3}}{\\mathbf{5}},-\\frac{\\mathbf{4}}{\\mathbf{5}}\\right\\rangle<br/>$$</p><p><br/><br/><strong>4. Compute the Directional Derivative $D_{\\mathbf{u}} g(2,0)$</strong></p><p>$$<br/>\\begin{gathered}<br/>D_{\\mathbf{u}} g(2,0)=\\nabla g(2,0) \\cdot \\mathbf{u} \\\\\\\\<br/>D_{\\mathbf{u}} g(2,0)=\\langle 1,6\\rangle \\cdot\\left\\langle\\frac{3}{5},-\\frac{4}{5}\\right\\rangle \\\\\\\\<br/>D_{\\mathbf{u}} g(2,0)=(1)\\left(\\frac{3}{5}\\right)+(6)\\left(-\\frac{4}{5}\\right)=\\frac{3}{5}-\\frac{24}{5}=-\\frac{21}{5}<br/>\\end{gathered}<br/>$$</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/501384/go-classes-dpp-calculus-%26-optimization-directional-derivative\" target=\"_blank\">GATE Overflow #501384</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>For the function $f(x, y)=x^2 2^y$ at the point $(3,2)$, in which direction is the directional derivative maximum?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\langle 2,3 \\ln (2)\\rangle$<br/></span>",
                "<span style=\"display: inline;\">$\\langle 2,3\\rangle$<br/></span>",
                "<span style=\"display: inline;\">$\\langle-24,-36 \\ln (2)\\rangle$<br/></span>",
                "<span style=\"display: inline;\">$\\langle 24,36\\rangle$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"501383\"></a><div itemprop=\"text\"><p>The correct answer is <strong>A.</strong></p><p>The maximum rate of increase of a function $f$ at a point $P$ occurs in the direction of the <strong>gradient vector,</strong> $\\nabla f(P)$.<br/><br/>1. The gradient at $P(3,2)$ is $\\nabla f(3,2)=\\langle 24,36 \\ln (2)\\rangle$.<br/><br/>2. The direction vector can be simplified by dividing by $12:\\left(\\frac{24}{12}, \\frac{36 \\ln (2)}{12}\\right\\rangle=\\langle\\mathbf{2}, \\mathbf{3} \\ln (\\mathbf{2})\\rangle$.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/501382/go-classes-dpp-calculus-%26-optimization-directional-derivative\" target=\"_blank\">GATE Overflow #501382</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Compute the derivative of the function $f(x, y)=x^2 2^y$ in the direction of the vector $\\mathbf{v}=\\langle 1,2\\rangle$ at the point $P(3,2)$.<br/> </p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\frac{24+72 \\ln (2)}{\\sqrt{5}}$<br/></span>",
                "<span style=\"display: inline;\">$\\frac{96}{\\sqrt{5}}$<br/></span>",
                "<span style=\"display: inline;\">$24+72 \\ln (2)$<br/></span>",
                "<span style=\"display: inline;\">$8+24 \\ln (2)$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"501381\"></a><div itemprop=\"text\"><p><strong>1. Calculate the Gradient $\\nabla f(x, y)$ :</strong></p><p>$$<br/>\\nabla f(x, y)=\\left\\langle\\frac{\\partial f}{\\partial x}, \\frac{\\partial f}{\\partial y}\\right\\rangle=\\left\\langle 2 x 2^y, x^2 2^y \\ln (2)\\right\\rangle<br/>$$</p><p><br/><strong>2. Evaluate the Gradient at $P(3,2)$ :</strong></p><p>$$<br/>\\nabla f(3,2)=\\left\\langle 2(3) 2^2,(3)^2 2^2 \\ln (2)\\right\\rangle=\\langle 24,36 \\ln (2)\\rangle<br/>$$</p><p><br/><strong>3. Find the Unit Direction Vector $\\mathbf{u}$ :</strong> The magnitude of $\\mathbf{v}=\\langle 1,2\\rangle$ is $|\\mathbf{v}|=\\sqrt{1^2+2^2}=\\sqrt{5}$.</p><p>$$<br/>\\mathbf{u}=\\frac{\\mathbf{v}}{|\\mathbf{v}|}=\\left\\langle\\frac{1}{\\sqrt{5}}, \\frac{2}{\\sqrt{5}}\\right\\rangle<br/>$$</p><p><br/><strong>4. Compute the Directional Derivative</strong> $D_{\\mathrm{u}} f(3,2)$ :</p><p>$$<br/>\\begin{gathered}<br/>D_{\\mathbf{u}} f(3,2)=\\nabla f(3,2) \\cdot \\mathbf{u}=\\langle 24,36 \\ln (2)\\rangle \\cdot\\left\\langle\\frac{1}{\\sqrt{5}}, \\frac{2}{\\sqrt{5}}\\right\\rangle \\\\\\\\<br/>D_{\\mathrm{u}} f(3,2)=\\frac{24}{\\sqrt{5}}+\\frac{36 \\ln (2) \\cdot 2}{\\sqrt{5}}=\\frac{\\mathbf{2 4}+\\mathbf{7 2} \\ln (\\mathbf{2})}{\\sqrt{5}}<br/>\\end{gathered}<br/>$$</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/501379/go-classes-dpp-calculus-%26-optimization-directional-derivative\" target=\"_blank\">GATE Overflow #501379</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>The linear approximation, $L(x)$, of the function $f(x)=(1+x)^n$ at the point $x=0$ is given by:</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$L(x)=1+x$<br/></span>",
                "<span style=\"display: inline;\">$L(x)=(1+x)^n+n x$<br/></span>",
                "<span style=\"display: inline;\">$L(x)=1+n x$<br/></span>",
                "<span style=\"display: inline;\">$L(x)=n(1+x)^{n-1} x$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"501378\"></a><div itemprop=\"text\"><p><strong>The Linear Approximation Formula</strong> The linear approximation of a function $f(x)$ at $x=a$ is given by the formula:</p><p>$$<br/>L(x)=f(a)+f^{\\prime}(a)(x-a)<br/>$$</p><p><br/>In this problem, we have $f(x)=(1+x)^n$ and $a=0$.<br/><br/><strong>1. Find </strong>$f(0)$ :</p><p>$$<br/>f(0)=(1+0)^n=1<br/>$$</p><p><strong>2. Find </strong>$f^{\\prime}(x)$ :</p><p>$$<br/>f^{\\prime}(x)=n(1+x)^{n-1}<br/>$$</p><p><strong>3. Find </strong>$f^{\\prime}(0)$ :</p><p>$$<br/>f^{\\prime}(0)=n(1+0)^{n-1}=n(1)=n<br/>$$</p><p><strong>4. Substitute into</strong> $L(x)$ :</p><p>$$<br/>\\begin{gathered}<br/>L(x)=f(0)+f^{\\prime}(0)(x-0) \\\\\\\\<br/>L(x)=1+n(x) \\\\\\\\<br/>L(x)=\\mathbf{1}+\\mathbf{n x}<br/>\\end{gathered}<br/>$$</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/501377/go-classes-dpp-calculus-%26-optimization-linear-approximation\" target=\"_blank\">GATE Overflow #501377</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>If $f(x, y, z)=\\sin (x y)+e^{y z}+x z^2$, what is the <strong>length of the gradient</strong> at the point $(1,0,2)$ ?<br/>Enter the answer correct to two decimal places.</p></div></span>",
            "image": "",
            "options": [],
            "answer": "4",
            "solution": "<div class=\"solution-content\"><a name=\"501208\"></a><div itemprop=\"text\"><p>The gradient of a scalar function $f(x, y, z)$ is the vector of its partial derivatives:</p><p>$$<br/>\\nabla f(x, y, z)=\\left\\langle f_x, f_y, f_z\\right\\rangle<br/>$$</p><p><br/>Given $f(x, y, z)=\\sin (x y)+e^{y z}+x z^2$.<br/> </p><p><strong>Partial Derivative with respect to $x\\left(f_x\\right)$</strong></p><p>$$<br/>\\begin{gathered}<br/>f_x=\\frac{\\partial}{\\partial x}(\\sin (x y))+\\frac{\\partial}{\\partial x}\\left(e^{y z}\\right)+\\frac{\\partial}{\\partial x}\\left(x z^2\\right) \\\\\\\\<br/>f_x=y \\cos (x y)+0+z^2 \\\\\\\\<br/>f_x=y \\cos (x y)+z^2<br/>\\end{gathered}<br/>$$</p><p><br/><strong>Partial Derivative with respect to $y\\left(f_y\\right)$</strong></p><p>$$<br/>\\begin{gathered}<br/>f_y=\\frac{\\partial}{\\partial y}(\\sin (x y))+\\frac{\\partial}{\\partial y}\\left(e^{y z}\\right)+\\frac{\\partial}{\\partial y}\\left(x z^2\\right) \\\\\\\\<br/>f_y=x \\cos (x y)+z e^{y z}+0 \\\\\\\\<br/>f_y=x \\cos (x y)+z e^{y z}<br/>\\end{gathered}<br/>$$</p><p><br/><strong>Partial Derivative with respect to $z\\left(f_z\\right)$</strong></p><p>$$<br/>\\begin{gathered}<br/>f_z=\\frac{\\partial}{\\partial z}(\\sin (x y))+\\frac{\\partial}{\\partial z}\\left(e^{y z}\\right)+\\frac{\\partial}{\\partial z}\\left(x z^2\\right) \\\\\\\\<br/>f_z=0+y e^{y z}+2 x z \\\\\\\\<br/>f_z=y e^{y z}+2 x z<br/>\\end{gathered}<br/>$$<br/><br/>Therefore, the gradient is:</p><p>\\begin{aligned}<br/>&amp;\\nabla f(x, y, z)=\\left\\langle y \\cos (x y)+z^2, \\quad x \\cos (x y)+z e^{y z}, \\quad y e^{y z}+2 x z\\right\\rangle<br/>\\end{aligned}</p><p> </p><p><strong>2. Evaluating $\\nabla f$ at $(1,0,2)$</strong></p><p>Substitute $x=1, y=0$, and $z=2$ into the components:<br/><br/><strong>Component $f_x$</strong></p><p>$$<br/>\\begin{gathered}<br/>f_x(1,0,2)=(0) \\cos (1 \\cdot 0)+(2)^2 \\\\\\\\<br/>f_x(1,0,2)=0 \\cdot 1+4=4<br/>\\end{gathered}<br/>$$</p><p><br/><strong>Component $f_y$</strong></p><p>$$<br/>\\begin{gathered}<br/>f_y(1,0,2)=(1) \\cos (1 \\cdot 0)+(2) e^{0-2} \\\\\\\\<br/>f_y(1,0,2)=1 \\cdot 1+2 \\cdot e^0=1+2 \\cdot 1=3<br/>\\end{gathered}<br/>$$</p><p><br/><strong>Component $f_z$</strong></p><p>$$<br/>\\begin{gathered}<br/>f_z(1,0,2)=(0) e^{0-2}+2(1)(2) \\\\\\\\<br/>f_z(1,0,2)=0 \\cdot e^0+4=0+4=4<br/>\\end{gathered}<br/>$$</p><p><br/>The gradient vector at the point $(1,0,2)$ is:</p><p>$$<br/>\\nabla f(1,0,2)=\\langle 4,3,4\\rangle<br/>$$</p><p> </p><p><strong>3. Calculating the Length (Magnitude)</strong></p><p>The length (magnitude) of a vector $\\mathbf{v}=\\left\\langle v_1, v_2, v_3\\right\\rangle$ is given by $\\|\\mathbf{v}\\|=\\sqrt{v_1^2+v_2^2+v_3^2}$.</p><p>$$<br/>\\begin{gathered}<br/>\\|\\nabla f(1,0,2)\\|=\\sqrt{4^2+3^2+4^2} \\\\\\\\<br/>\\|\\nabla f(1,0,2)\\|=\\sqrt{16+9+16} \\\\\\\\<br/>\\|\\nabla f(1,0,2)\\|=\\sqrt{41} \\\\\\\\<br/>\\sqrt{41} \\approx \\mathbf{6 . 4 0}<br/>\\end{gathered}<br/>$$</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/501206/go-classes-dpp-calculus-%26-optimization-gradient\" target=\"_blank\">GATE Overflow #501206</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>The <strong>directional derivative</strong> of a scalar function $f(x, y)$ at a point $\\left(x_0, y_0\\right)$ in the direction of a unit vector $\\mathbf{u}$ represents:</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">THE RATE OF CHANGE OF $f$ IN THE DIRECTION OF $\\mathbf{u}$ AT $(x_0, y_0)$.<br/></span>",
                "<span style=\"display: inline;\">THE MAGNITUDE OF THE GRADIENT VECTOR $\\nabla f$ AT $\\left(x_0, y_0\\right)$.<br/></span>",
                "<span style=\"display: inline;\">THE MAXIMUM VALUE OF THE GRADIENT AT $\\left(x_0, y_0\\right)$.<br/></span>",
                "<span style=\"display: inline;\">THE ANGLE BETWEEN THE VECTOR $\\mathbf{u}$ AND $\\nabla f$.</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"501203\"></a><div itemprop=\"text\"><p>Definition: The directional derivative is specifically calculated to find how quickly the function $f(x, y)$ changes as you move away from the point $\\left(x_0, y_0\\right)$ in the precise direction specified by the unit vector $\\mathbf{u}$.</p><p>The correct option is <strong>A. THE RATE OF CHANGE OF</strong> $f$ <strong>IN THE DIRECTION OF</strong> $\\mathbf{u}$ <strong>AT</strong> $(x_0, y_0)$.<br/> </p><p><strong>Why the Other Options are Incorrect</strong></p><ul><li><strong>B. The magnitude of the gradient vector $\\nabla f$ at</strong> $\\left(x_0, y_0\\right)$ : This represents the <strong>maximum</strong> rate of change of the function, which occurs when $\\mathbf{u}$ is in the same direction as $\\nabla f$.<br/> </li><li><strong>C. The maximum value of the gradient at</strong> $\\left(x_0, y_0\\right)$ : The gradient $\\nabla f$ is a vector, not a scalar value, so it doesn't have a \"maximum value\" in the scalar sense. The magnitude of the gradient, $|\\nabla f|$, is the maximum rate of change.<br/> </li><li><strong>D. The angle between the vector $\\mathbf{u}$ and $\\nabla f$ :</strong> The angle is related to the directional derivative by the formula: $D_{\\mathbf{u}} f=|\\nabla f||\\mathbf{u}| \\cos \\theta=|\\nabla f| \\cos \\theta$. The angle $\\theta$ itself is not the directional derivative.</li></ul></div><br><br><small>Source: <a href=\"https://gateoverflow.in/501202/go-classes-dpp-calculus-%26-optimization-directional-derivative\" target=\"_blank\">GATE Overflow #501202</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider the function $f(x, y)=\\sin (x y)$. Let $L(x, y)$ be the <strong>linear approximation</strong> of $f(x, y)$ around the point $P_0=\\left(\\frac{\\pi}{2}, 0\\right)$.</p><p>What is the value of $L\\left(\\frac{\\pi}{2}+0.1,0.1\\right)$ ?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$0.162$<br/></span>",
                "<span style=\"display: inline;\">$0.257$<br/></span>",
                "<span style=\"display: inline;\">$0.157$<br/></span>",
                "<span style=\"display: inline;\">$1.57$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"501201\"></a><div itemprop=\"text\"><p>The linear approximation $L(x, y)$ of a function $f(x, y)$ around a point $(a, b)$ is given by the formula:<br/><br/>$$<br/>L(x, y)=f(a, b)+f_x(a, b)(x-a)+f_y(a, b)(y-b)<br/>$$</p><p><br/>Here, $f(x, y)=\\sin (x y)$ and the point of approximation is $(a, b)=\\left(\\frac{\\pi}{2}, 0\\right)$.</p><p><br/><strong>1. Evaluate the function at the point</strong> ( $a, b$ ):</p><ul><li>$f(x, y)=\\sin (x y)$<br/> </li><li>$f(a, b)=f\\left(\\frac{\\pi}{2}, 0\\right)=\\sin \\left(\\frac{\\pi}{2} \\cdot 0\\right)=\\sin (0)=0$</li></ul><p><br/><strong>2. Calculate the partial derivatives:</strong></p><ul><li><strong>Partial derivative with respect to </strong>$x\\left(f_x\\right)$ :</li></ul><p>$$<br/>f_x(x, y)=\\frac{\\partial}{\\partial x}[\\sin (x y)]=\\cos (x y) \\cdot \\frac{\\partial}{\\partial x}(x y)=y \\cos (x y)<br/>$$</p><ul><li><strong>Partial derivative with respect to</strong> $y\\left(f_y\\right)$ :</li></ul><p>$$<br/>f_y(x, y)=\\frac{\\partial}{\\partial y}[\\sin (x y)]=\\cos (x y) \\cdot \\frac{\\partial}{\\partial y}(x y)=x \\cos (x y)<br/>$$</p><p><strong>3. Evaluate the partial derivatives at the point</strong> $(a, b)$ :</p><ul><li>$f_x(a, b)=f_x\\left(\\frac{\\pi}{2}, 0\\right)$ :</li></ul><p>$$<br/>f_x\\left(\\frac{\\pi}{2}, 0\\right)=0 \\cdot \\cos \\left(\\frac{\\pi}{2} \\cdot 0\\right)=0 \\cdot \\cos (0)=0 \\cdot 1=0<br/>$$</p><ul><li>$f_y(a, b)=f_y\\left(\\frac{\\pi}{2}, 0\\right)$ :</li></ul><p>$$<br/>f_y\\left(\\frac{\\pi}{2}, 0\\right)=\\frac{\\pi}{2} \\cdot \\cos \\left(\\frac{\\pi}{2} \\cdot 0\\right)=\\frac{\\pi}{2} \\cdot \\cos (0)=\\frac{\\pi}{2} \\cdot 1=\\frac{\\pi}{2}<br/>$$</p><p> </p><p><strong>4. Formulate the Linear Approximation</strong> $L(x, y)$ :</p><p>Substitute the values into the formula:</p><p>$$<br/>\\begin{gathered}<br/>L(x, y)=f(a, b)+f_x(a, b)(x-a)+f_y(a, b)(y-b) \\\\\\\\<br/>L(x, y)=0+0\\left(x-\\frac{\\pi}{2}\\right)+\\frac{\\pi}{2}(y-0) \\\\\\\\<br/>L(x, y)=\\frac{\\pi}{2} y<br/>\\end{gathered}<br/>$$</p><p><strong>5. Evaluate</strong> $L(x, y)$<strong> at the requested point:</strong></p><p>The point to evaluate is $(x, y)=\\left(\\frac{\\pi}{2}+0.1,0.1\\right)$. We substitute $y=0.1$ into the linear approximation:</p><p>$$<br/>\\begin{aligned}<br/>&amp; L\\left(\\frac{\\pi}{2}+0.1,0.1\\right)=\\frac{\\pi}{2} \\cdot(0.1) \\\\\\\\<br/>&amp; L\\left(\\frac{\\pi}{2}+0.1,0.1\\right)=0.05 \\pi \\\\\\\\<br/>&amp; L\\left(\\frac{\\pi}{2}+0.1,0.1\\right) \\approx 0.05 \\cdot 3.14 \\\\\\\\<br/>&amp; L\\left(\\frac{\\pi}{2}+0.1,0.1\\right) \\approx 0.157<br/>\\end{aligned}<br/>$$</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/501199/go-classes-dpp-calculus-%26-optimization-linear-approximation\" target=\"_blank\">GATE Overflow #501199</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>For a function $f(x)=-x+2 x^2$, the global minimum occurs at</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$x=-0.25$<br/></span>",
                "<span style=\"display: inline;\">$x=-0.5$<br/></span>",
                "<span style=\"display: inline;\">$x=0.5$<br/></span>",
                "<span style=\"display: inline;\">$x=0.25$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"501047\"></a><div itemprop=\"text\">Given function is convex.<br/> <br/> For a convex fn,<br/> <br/> Global minimum occurs at a point $x$ when $\\nabla(f(x))=0$.<br/> <br/> $$<br/> \\begin{aligned}<br/> &amp; -1+4 x=0 \\\\<br/> &amp; x=0.25<br/> \\end{aligned}<br/> $$</div><br><br><small>Source: <a href=\"https://gateoverflow.in/501046/go-classes-dpp-calculus-%26-optimization-application-of-derivative\" target=\"_blank\">GATE Overflow #501046</a></small></div>"
        }
    ]
});

registerTest({
    "name": "DPP 12 - Engineering Mathematics (Differential Calculus & Applications - Part 4)",
    "testLabel": "DPP 12",
    "testType": "DPP",
    "bracket": "Differential Calculus & Applications - Part 4",
    "subject": "em",
    "series": "cse-dpp-2027",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 11,
    "topicsCovered": "Differential Calculus & Applications (Practice Set 4)",
    "questions": [
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Let $f(x)=-2 x^2+5$. At $x=-3$, is $f(x)$ increasing, decreasing, or neither?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">INCREASING<br/></span>",
                "<span style=\"display: inline;\">DECREASING<br/></span>",
                "<span style=\"display: inline;\">CONSTANT (Neither increasing nor decreasing)<br/></span>",
                "<span style=\"display: inline;\">CANNOT BE DETERMINED</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"501045\"></a><div itemprop=\"text\"><p>Find the derivative $f^{\\prime}(x)$ :</p><p>$$<br/>\\begin{gathered}<br/>f(x)=-2 x^2+5 \\\\<br/>f^{\\prime}(x)=\\frac{d}{d x}\\left(-2 x^2+5\\right)=-4 x<br/>\\end{gathered}<br/>$$</p><p><br/>Evaluate the derivative at $x=-3$ :</p><p>$$<br/>f^{\\prime}(-3)=-4(-3)=12<br/>$$</p><p><br/>Since $f^{\\prime}(-3)=12$ and $12&gt;0$, the function $f(x)$ is INCREASING at $x=-3$.<br/><br/><strong>The correct option is A.</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/501044/go-classes-dpp-calculus-%26-optimization-application-of-derivative\" target=\"_blank\">GATE Overflow #501044</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>What is the linear approximation of $f(x, y)=x^2+y^2$ around $(1,1)$ ?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$2 x+2 y+2$<br/></span>",
                "<span style=\"display: inline;\">$2 x+2 y-2$<br/></span>",
                "<span style=\"display: inline;\">$2 x+2 y+1$<br/></span>",
                "<span style=\"display: inline;\">$2 x+2 y-1$</span>"
            ],
            "answer": "B",
            "solution": "<div class=\"solution-content\"><a name=\"500688\"></a><div itemprop=\"text\"><p>The linear approximation of a function $f$ around $(x, y)=(a, b)$ is given by</p><p>$$<br/>\\begin{aligned}<br/>L(x, y) &amp; =f(a, b)+\\left[\\begin{array}{l}<br/>x-a \\\\<br/>y-b<br/>\\end{array}\\right] \\cdot \\nabla f(a, b) \\\\<br/>&amp; =f(a, b)+(x-a) f_x(a, b)+(y-b) f_y(a, b)<br/>\\end{aligned}<br/>$$</p><p><br/>Here, $(a, b)=(1,1)$ and $f(x, y)=x^2+y^2$,</p><p>$$<br/>\\nabla f(x, y)=\\left[\\begin{array}{l}<br/>2 x \\\\<br/>2 y<br/>\\end{array}\\right] \\Longrightarrow \\nabla f(1,1)=\\left[\\begin{array}{l}<br/>2 \\\\<br/>2<br/>\\end{array}\\right]<br/>$$</p><p><br/>So the linear approximation is given by</p><p>$$<br/>\\begin{aligned}<br/>L(x, y) &amp; =f(1,1)+(x-1)(2)+(y-1)(2) \\\\<br/>&amp; =2 x+2 y-2<br/>\\end{aligned}<br/>$$</p><p><strong>∴ Option B is correct.</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/500687/go-classes-dpp-calculus-%26-optimization-linear-approximation\" target=\"_blank\">GATE Overflow #500687</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\">The partial derivative of $x^3+y^2$ w.r.t. $x$ at $x=1$ and $y=2$ is $\\_\\_\\_\\_$ .</div></span>",
            "image": "",
            "options": [],
            "answer": "3",
            "solution": "<div class=\"solution-content\"><a name=\"500683\"></a><div itemprop=\"text\">The partial derivative of $x^3+y^2$ w.r.t. $x$ is<br/> <br/> $$<br/> \\frac{\\partial}{\\partial x}\\left(x^3+y^2\\right)=3 x^2<br/> $$<br/> <br/> ∴ At $(x, y)=(1,2)$, it will be<br/> <br/> $$<br/> \\left.\\frac{\\partial}{\\partial x}\\left(x^3+y^2\\right)\\right|_{(x, y)=(1,2)}=3<br/> $$<br/> <br/> So, the answer is $3$.</div><br><br><small>Source: <a href=\"https://gateoverflow.in/500682/go-classes-dpp-calculus-%26-optimization-partial-derivative\" target=\"_blank\">GATE Overflow #500682</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>The linear approximation of $\\tan (x)$ around $x=0$ is:</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$1+x$<br/></span>",
                "<span style=\"display: inline;\">$1-x$<br/></span>",
                "<span style=\"display: inline;\">$x-1$<br/></span>",
                "<span style=\"display: inline;\">$x$</span>"
            ],
            "answer": "D",
            "solution": "<div class=\"solution-content\"><a name=\"500681\"></a><div itemprop=\"text\"><p>The linear approximation of a function $f$ around $x=a$ is given by</p><p>$$<br/>L(x)=f(a)+(x-a) f^{\\prime}(a)<br/>$$</p><p><br/>Here, $f(x)=\\tan (x)$ and $a=0$, Substituting these in the above equation, we get</p><p>$$<br/>\\begin{aligned}<br/>L(x) &amp; =\\tan (0)+(x-0) \\sec ^2(0) \\quad\\left[\\because(\\tan x)^{\\prime}=\\sec ^2 x\\right] \\\\<br/>&amp; =x<br/>\\end{aligned}<br/>$$</p><p><strong>∴ Option D is correct</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/500680/go-classes-dpp-calculus-%26-optimization-linear-approximation\" target=\"_blank\">GATE Overflow #500680</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>For the functions $g(x)=(3 x+2)^2$ and $f(x)=e^x$, select the plot that corresponds to the correct composition $h=f o q$.</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\"><p style=\"text-align:center\"><img alt=\"\" height=\"256\" src=\"https://cdn.mathpix.com/snip/images/_sBPXeY6jPktm8OGOYborinjbr1pxLEH_5rowo1doqw.original.fullsize.png\" width=\"234\"/></p><p> </p></span>",
                "<span style=\"display: inline;\"><p style=\"text-align:center\"><img alt=\"\" height=\"253\" src=\"https://cdn.mathpix.com/snip/images/xnSvhy1c3mPY4K0G7E3Z8l8rEBxO_a5nNxVXhyKC29Q.original.fullsize.png\" width=\"206\"/></p><p> </p></span>",
                "<span style=\"display: inline;\"><p style=\"text-align:center\"><img alt=\"\" height=\"254\" src=\"https://cdn.mathpix.com/snip/images/QEXSvKvCzD-vKzKvZ250mC2D1dbEu-0ye_zHo2_pwx0.original.fullsize.png\" width=\"195\"/></p><p> </p></span>",
                "<span style=\"display: inline;\"><p style=\"text-align:center\"><img alt=\"\" height=\"278\" src=\"https://cdn.mathpix.com/snip/images/mhk-EqNKnaoBVCLLyHW-3O00s16GPXpQhTupi9EaasU.original.fullsize.png\" width=\"214\"/></p><p> </p></span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"500034\"></a><div itemprop=\"text\"><p><b id=\"docs-internal-guid-f5a68ed7-7fff-5568-d98c-066f4a50bd10\"><img alt=\"\" height=\"282\" src=\"https://gateoverflow.in/?qa=blob&amp;qa_blobid=180441037118413846\" width=\"501\"/></b></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/500033/go-classes-dpp-calculus-%26-optimization-plots\" target=\"_blank\">GATE Overflow #500033</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>For a given point $x=2$, is the function $f(x)=x e^{-3 x}$ increasing or decreasing?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">Decreasing<br/></span>",
                "<span style=\"display: inline;\">Increasing<br/></span>",
                "<span style=\"display: inline;\">Neither increasing nor decreasing<br/></span>",
                "<span style=\"display: inline;\">Cannot be determined</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"499898\"></a><div itemprop=\"text\">If the first derivative of $f(x)$ at any point $x$ is positive or negative, then we call $f(x)$ as increasing or decreasing respectively.<br/> <br/> $f^{\\prime}(x)=e^{-3 x}(1-3 x)$, at $x=2$ we get $f^{\\prime}(2)=-0.012$.<br/> <br/> Hence decreasing.</div><br><br><small>Source: <a href=\"https://gateoverflow.in/499897/go-classes-dpp-calculus-%26-optimization-first-derivative\" target=\"_blank\">GATE Overflow #499897</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\">The directional derivative of $f(x, y, z)=x^3+y^2+z^3$ at $(1,1,1)$ in the direction of unit vector along $\\mathbf{v}=[1,-2,1]$ is $\\_\\_\\_\\_$ .</div></span>",
            "image": "",
            "options": [],
            "answer": "498990",
            "solution": "<div class=\"solution-content\"><a name=\"498992\"></a><div itemprop=\"text\">directional derivative is given by the dot product of gradient at a point with a unit vector along which the directional derivative is needed.<br/> <br/> $$<br/> \\begin{aligned}<br/> &amp; \\nabla f(x, y, z)=\\left[\\begin{array}{c}<br/> 3 x^2 \\\\<br/> 2 y \\\\<br/> 3 z^2<br/> \\end{array}\\right] \\\\\\\\<br/> &amp; \\Longrightarrow \\nabla f(1,1,1)=\\left[\\begin{array}{l}<br/> 3 \\\\<br/> 2 \\\\<br/> 3<br/> \\end{array}\\right]<br/> \\end{aligned}<br/> $$<br/> <br/> Next, let's find the unit vector along $[1,-2,1]$. To do that, we divide the vector by its magnitude: $\\mathbf{u}=\\frac{[1,-2,1]}{\\|[1,-2,1]\\|}$<br/> <br/> Calculating the magnitude: $\\|[1,-2,1]\\|=\\sqrt{1^2+(-2)^2+1^2}=\\sqrt{6}$<br/> <br/> $$<br/> \\begin{gathered}<br/> \\Longrightarrow \\mathbf{u}=\\left[\\begin{array}{c}<br/> 1 / \\sqrt{6} \\\\<br/> -2 / \\sqrt{6} \\\\<br/> 1 / \\sqrt{6}<br/> \\end{array}\\right] \\\\<br/> D_u[f](v)=\\nabla f(1,1,1) \\cdot \\mathbf{u}=\\left[\\begin{array}{lll}<br/> 3 &amp; 2 &amp; 3<br/> \\end{array}\\right]\\left[\\begin{array}{c}<br/> 1 / \\sqrt{6} \\\\<br/> -2 / \\sqrt{6} \\\\<br/> 1 / \\sqrt{6}<br/> \\end{array}\\right]<br/> \\end{gathered}<br/> $$<br/> <br/> Therefore, the directional derivative of $f(x, y, z)$ at $(1,1,1)$ in the direction of the unit vector along $[1,-2,1]$ is $\\frac{2}{\\sqrt{6}}$.</div><br><br><small>Source: <a href=\"https://gateoverflow.in/498990/go-classes-dpp-calculus-%26-optimization-directional-derivative\" target=\"_blank\">GATE Overflow #498990</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>What is the gradient of $f(x, y)=x^3 y^2$ at $(1,2) ?$<br/> </p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$[12,4]$<br/></span>",
                "<span style=\"display: inline;\">$[4,12]$<br/></span>",
                "<span style=\"display: inline;\">$[1,4]$<br/></span>",
                "<span style=\"display: inline;\">$[4,1]$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"498989\"></a><div itemprop=\"text\">$$<br/> \\nabla f(x, y)=\\left[\\begin{array}{l}<br/> 3 x^2 y^2 \\\\<br/> 2 x^3 y<br/> \\end{array}\\right] \\Longrightarrow \\nabla f(1,2)=\\left[\\begin{array}{c}<br/> 3(1)^2(2)^2 \\\\<br/> 2(1)^3(2)<br/> \\end{array}\\right]=\\left[\\begin{array}{c}<br/> 12 \\\\<br/> 4<br/> \\end{array}\\right]<br/> $$</div><br><br><small>Source: <a href=\"https://gateoverflow.in/498988/go-classes-dpp-calculus-%26-optimization-gradient\" target=\"_blank\">GATE Overflow #498988</a></small></div>"
        },
        {
            "marks": 2,
            "neg": 0,
            "type": "MSQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Let $f$ and $g$ be two real valued functions such that $g(x)=f(x)-2$. Select all true options.</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">If $f$ is odd, then $g$ is odd.<br/></span>",
                "<span style=\"display: inline;\">If $f$ is even, then $g$ is even.<br/></span>",
                "<span style=\"display: inline;\">If $g$ is odd, then $f$ is odd.<br/></span>",
                "<span style=\"display: inline;\">If $g$ is even, then $f$ is even.</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"472747\"></a><div itemprop=\"text\"><p>g(x) = f(x) - 2.<br/><br/>Let's find g(-x), g(-x) = f(-x) - 2.<br/><br/><strong>Option A:</strong> if F(x) is odd, then f(-x) = -f(x). =&gt; g(-x) = -f(x) - 2.<br/><br/>here g(x) is neither even nor odd if f(x) is odd. Hence option A is false.<br/><br/><strong>Option B:</strong> If F(x) is even, then f(-x) = f(x). =&gt; g(-x) = f(x) - 2.<br/><br/>here g(x) is even nor if f(x) is even. Hence option B is True.<br/><br/>Now let's rewrite the given equation as f(x) = g(x) + 2<br/><br/>F(-x) = g(-x) + 2.<br/><br/><strong>Option C:</strong> if g(x) is odd, then g(-x) = -g(x). =&gt; f(-x) = -g(x) + 2.<br/><br/>here f(x) is neither even nor odd if g(x) is odd. Hence option C is false.<br/><br/><strong>Option D:</strong> if g(x) is even , then g(-x) = g(x). =&gt; f(-x) = g(x) + 2.<br/><br/>here g(x) is even if g(x) is even. Hence option D is true.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/472746/go-classes-dpp-calculus-functions-iitm\" target=\"_blank\">GATE Overflow #472746</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Differentiate $y=e^x \\cos x^2$</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$-e^x \\sin x^2$<br/></span>",
                "<span style=\"display: inline;\">$e^x\\left(\\cos x^2-2 x \\sin x^2\\right)$<br/></span>",
                "<span style=\"display: inline;\">$e^x \\cos x^2-2 x \\sin x^2$<br/></span>",
                "<span style=\"display: inline;\">$-2 x e^x \\sin x$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"472743\"></a><div itemprop=\"text\">$$<br/> y=e^x \\cos x^2<br/> $$<br/> <br/> Note: $d(u v)=u d v+v d u$<br/> Where: $u=e^x ; d u=e^x ; v=\\cos x^2 ; d v=-2 x \\sin x^2$<br/> <br/> $$<br/> \\begin{gathered}<br/> y^{\\prime}=e^x\\left(-2 x \\sin x^2\\right)+\\cos x^2\\left(e^x\\right) \\\\<br/> y^{\\prime}=-2 x e^x \\sin x^2+e^x \\cos x^2 \\\\<br/> y=e^x\\left(\\cos x^2-2 x \\sin x^2\\right)<br/> \\end{gathered}<br/> $$<br/> </div><br><br><small>Source: <a href=\"https://gateoverflow.in/472742/go-classes-dpp-calculus-differentiation-scribd\" target=\"_blank\">GATE Overflow #472742</a></small></div>"
        }
    ]
});

registerTest({
    "name": "DPP 13 - Engineering Mathematics (Optimization & Convexity - Part 1)",
    "testLabel": "DPP 13",
    "testType": "DPP",
    "bracket": "Optimization & Convexity - Part 1",
    "subject": "em",
    "series": "cse-dpp-2027",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 11,
    "topicsCovered": "Optimization & Convexity (Practice Set 1)",
    "questions": [
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\">A rectangle is inscribed under the curve $y=12-x^2$ and above the $x$-axis, with its base on the $x$-axis and its top corners on the curve. What is the maximum possible area of the rectangle?</div></span>",
            "image": "",
            "options": [],
            "answer": "32",
            "solution": "<div class=\"solution-content\"><a name=\"532900\"></a><div itemprop=\"text\">Let the rectangle have corners at $(-x,0)$, $(x,0)$, $(-x,12-x^2)$, and $(x,12-x^2)$. <br/> <br/> Its area is $A(x)=2x(12-x^2)=24x-2x^3$. <br/> <br/> Then $A'(x)=24-6x^2$. <br/> <br/> Set $A'(x)=0$, <br/> <br/> $\\Rightarrow 24-6x^2=0$<br/> <br/> $\\Rightarrow x=2$. <br/> <br/> The maximum area is :<br/> <br/> $A(2)=2(2)(12-4)=\\boxed{32}$</div><br><br><small>Source: <a href=\"https://gateoverflow.in/532899/go-classes-dpp-gate-cs-da-calculus-%26-optimization-optimization-with-constraints\" target=\"_blank\">GATE Overflow #532899</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\">Let $f(x)=\\int_0^x (t^2-1)(t-2)dt$ for $0\\le x\\le 3$. The number of points $c\\in(0,3)$ that satisfy the conclusion of Lagrange’s Mean Value Theorem is.</div></span>",
            "image": "",
            "options": [],
            "answer": "3",
            "solution": "<div class=\"solution-content\"><a name=\"532765\"></a><div itemprop=\"text\">By Lagrange’s Mean Value Theorem, <br/> <br/> We need $f'(c)=\\dfrac{f(3)-f(0)}{3-0}$. <br/> <br/> Now $f'(x)=(x^2-1)(x-2)$. <br/> <br/> Also, $f(3)-f(0)=\\int_0^3 (t^2-1)(t-2)dt=\\int_0^3 (t^3-2t^2-t+2)dt=\\dfrac{15}{4}$. <br/> <br/> Hence the required condition is $(c^2-1)(c-2)=\\frac{5}{4}$. <br/> <br/> Let $g(x)=(x^2-1)(x-2)$. <br/> <br/> Then $g(0)=2&gt;\\frac{5}{4}$, $g(1)=0&lt;\\frac{5}{4}$, so there is one solution in $(0,1)$. <br/> <br/> Also, $g(2)=0&lt;\\frac{5}{4}$ and $g(3)=4&gt;\\frac{5}{4}$, so there is one solution in $(2,3)$. <br/> <br/> Since $g'(x)=3x^2-4x-1$ changes sign only once in $(0,3)$, there are no more solutions.</div><br><br><small>Source: <a href=\"https://gateoverflow.in/532764/go-classes-dpp-gate-cs-da-calculus-%26-optimization-mean-value-theorem\" target=\"_blank\">GATE Overflow #532764</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"184\" data-start=\"106\">Let $f(x,y)=x^2+2y^2+2xy-6x-8y$. Which of the following is <strong>true</strong>?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$f$ has no global minimum on $\\mathbb{R}^2$<br/></span>",
                "<span style=\"display: inline;\">$f$ has infinitely many global minima<br/></span>",
                "<span style=\"display: inline;\">$f$ has a unique global minimum at $(2,1)$<br/></span>",
                "<span style=\"display: inline;\">$f$ has a unique global maximum at $(2,1)$</span>"
            ],
            "answer": "C",
            "solution": "<div class=\"solution-content\"><a name=\"532755\"></a><div itemprop=\"text\"><p data-path-to-node=\"0\">To determine the nature of the function $f(x,y) = x^2 + 2y^2 + 2xy - 6x - 8y$, we need to find its critical points and then classify them.</p><p data-path-to-node=\"2\">A critical point occurs where both first-order partial derivatives are equal to zero.</p><p data-path-to-node=\"3\">First, calculate the partial derivatives with respect to $x$ and $y$:</p><p>$$f_x(x,y) = \\frac{\\partial}{\\partial x}(x^2 + 2y^2 + 2xy - 6x - 8y) = 2x + 2y - 6$$</p><p>$$f_y(x,y) = \\frac{\\partial}{\\partial y}(x^2 + 2y^2 + 2xy - 6x - 8y) = 4y + 2x - 8$$</p><p data-path-to-node=\"6\">Next, set both partial derivatives to zero to form a system of linear equations:</p><ol data-path-to-node=\"7\" start=\"1\"><li><p data-path-to-node=\"7,0,0\">$2x + 2y - 6 = 0 \\implies x + y = 3$</p></li><li><p data-path-to-node=\"7,1,0\">$2x + 4y - 8 = 0 \\implies x + 2y = 4$</p></li></ol><p data-path-to-node=\"8\">Subtracting the first equation from the second gives:</p><p>$$(x + 2y) - (x + y) = 4 - 3 \\implies y = 1$$</p><p data-path-to-node=\"10\">Substitute $y = 1$ back into the first equation:</p><p>$$x + 1 = 3 \\implies x = 2$$</p><p data-path-to-node=\"12\">So, the function has a single, unique critical point at <b data-index-in-node=\"56\" data-path-to-node=\"12\">$(2, 1)$</b>.</p><p data-path-to-node=\"14\"> </p><p data-path-to-node=\"15\">To determine if this point is a minimum, maximum, or saddle point, we use the Second Derivative Test. We need the second-order partial derivatives:</p><ul data-path-to-node=\"16\"><li><p data-path-to-node=\"16,0,0\">$f_{xx} = 2$</p></li><li><p data-path-to-node=\"16,1,0\">$f_{yy} = 4$</p></li><li><p data-path-to-node=\"16,2,0\">$f_{xy} = 2$</p></li></ul><p data-path-to-node=\"17\">Now, calculate the determinant of the Hessian matrix ($D$):</p><p>$$D = f_{xx}f_{yy} - (f_{xy})^2$$</p><p>$$D = (2)(4) - (2)^2 = 8 - 4 = 4$$</p><p data-path-to-node=\"20\">Since $D &gt; 0$ and $f_{xx} &gt; 0$, the Second Derivative Test confirms that the critical point $(2, 1)$ is a <b data-index-in-node=\"100\" data-path-to-node=\"20\">local minimum</b>.</p><p data-path-to-node=\"22\"> </p><p data-path-to-node=\"23\">To confirm if this local minimum is also a global minimum, we can rewrite the original function by completing the square.</p><p data-path-to-node=\"24\">Group the terms to form perfect squares:</p><p>$$f(x,y) = x^2 + 2xy + 2y^2 - 6x - 8y$$</p><p data-path-to-node=\"26\">Split $2y^2$ into $y^2 + y^2$:</p><p>$$f(x,y) = (x^2 + 2xy + y^2) + y^2 - 6x - 8y$$</p><p>$$f(x,y) = (x+y)^2 - 6x - 6y - 2y + y^2$$</p><p data-path-to-node=\"29\">Factor out the $-6$:</p><p>$$f(x,y) = (x+y)^2 - 6(x+y) + y^2 - 2y$$</p><p data-path-to-node=\"31\">Now, complete the square for both $(x+y)$ and $y$:</p><p>$$f(x,y) = [(x+y)^2 - 6(x+y) + 9] - 9 + [y^2 - 2y + 1] - 1$$</p><p>$$f(x,y) = (x+y-3)^2 + (y-1)^2 - 10$$</p><p data-path-to-node=\"34\">Because the square of any real number is always non-negative (i.e., $(x+y-3)^2 \\ge 0$ and $(y-1)^2 \\ge 0$), the lowest possible value for this function is $-10$. This minimum is achieved only when both squared terms equal zero:</p><ol data-path-to-node=\"35\" start=\"1\"><li><p data-path-to-node=\"35,0,0\">$y - 1 = 0 \\implies y = 1$</p></li><li><p data-path-to-node=\"35,1,0\">$x + y - 3 = 0 \\implies x + 1 - 3 = 0 \\implies x = 2$</p></li></ol><p data-path-to-node=\"36\">This elegantly proves that the function reaches its absolute lowest point at $(2, 1)$ and nowhere else.</p><p data-path-to-node=\"37\"><b data-index-in-node=\"0\" data-path-to-node=\"37\">The correct answer is C: $f$ has a unique global minimum at $(2,1)$.</b></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/532754/go-classes-dpp-gate-da-calculus-%26-optimization-convex-optimization\" target=\"_blank\">GATE Overflow #532754</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"106\" data-start=\"0\">Let $F(x)=\\int_0^x (t-1)(t-2)^2(t-4)dt$ for $0\\le x\\le 5$. Which of the following is <strong>true</strong>?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$F(x)$ attains its absolute maximum at $x=1$<br/></span>",
                "<span style=\"display: inline;\">$F(x)$ attains its absolute minimum at $x=4$<br/></span>",
                "<span style=\"display: inline;\">$F'(2)=0$, but $x=2$ is neither a local maximum nor a local minimum<br/></span>",
                "<span style=\"display: inline;\">$F(x)$ is decreasing on $(4,5)$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"532752\"></a><div itemprop=\"text\">By the Fundamental Theorem of Calculus, <br/> <br/> $F'(x)=(x-1)(x-2)^2(x-4)$. <br/> <br/> Since $(x-2)^2\\ge 0$, the sign of $F'(x)$ is mainly decided by $(x-1)(x-4)$. <br/> <br/> Thus $F'(x)&gt;0$ on $(0,1)$, $F'(x)&lt;0$ on $(1,4)$ except at $x=2$, and $F'(x)&gt;0$ on $(4,5)$. <br/> <br/> Therefore, <br/> <br/> $x=1$ is a local maximum, <br/> <br/> $x=4$ is a local minimum, and <br/> <br/> $x=2$ is a stationary point <br/> <br/> where the sign of $F'(x)$ does not change. <br/> <br/> Hence $x=2$ is neither a local maximum nor a local minimum.</div><br><br><small>Source: <a href=\"https://gateoverflow.in/532751/go-classes-dpp-gate-cs-da-calculus-%26-optimization-single-variable-optimization\" target=\"_blank\">GATE Overflow #532751</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"190\" data-start=\"0\">Let $f$ be differentiable on $[0,4]$ and suppose $f'(x)=(x-1)^2(x-3)$ for every $x\\in[0,4]$. Also, $f(0)=2$. The value of $x$ at which $f(x)$ attains its maximum on $[0,4]$ is:</p></div></span>",
            "image": "",
            "options": [],
            "answer": "4",
            "solution": "<div class=\"solution-content\"><a name=\"532750\"></a><div itemprop=\"text\">Since $(x-1)^2\\ge 0$, the sign of $f'(x)$ is decided by $x-3$, except at $x=1$. <br/> <br/> So $f'(x)&lt;0$ on $(0,3)$ except at $x=1$, and $f'(x)&gt;0$ on $(3,4)$. <br/> <br/> Hence the maximum can only occur at $x=0$ or $x=4$. <br/> <br/> Now, $f(4)-f(0)=\\int_0^4 (x-1)^2(x-3)dx$<br/> <br/> $\\Rightarrow f(4)-f(0)=\\int_0^4 (x^3-5x^2+7x-3)dx$<br/> <br/> $\\Rightarrow f(4)-f(0)=\\left[\\frac{x^4}{4}-\\frac{5x^3}{3}+\\frac{7x^2}{2}-3x\\right]_0^4=\\frac{4}{3}&gt;0$. <br/> <br/> Therefore $f(4)&gt;f(0)$, so the maximum is attained at $x=4$.</div><br><br><small>Source: <a href=\"https://gateoverflow.in/532749/go-classes-dpp-gate-cs-da-calculus-%26-optimization-single-variable-optimization\" target=\"_blank\">GATE Overflow #532749</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"134\" data-start=\"14\">The graph below is the graph of $f'$, where $f$ is twice differentiable. </p><p style=\"text-align:center\"><img alt=\"\" height=\"379\" src=\"https://cdn.mathpix.com/snip/images/BnsmRz5OM620OiPRGF1IaMWxSTR3sA2UzHSdvzZheL8.original.fullsize.png\" width=\"524\"/></p><p data-end=\"134\" data-start=\"14\">Which of the following statements must be true?</p></div></span>",
            "image": "https://cdn.mathpix.com/snip/images/BnsmRz5OM620OiPRGF1IaMWxSTR3sA2UzHSdvzZheL8.original.fullsize.png",
            "options": [
                "<span style=\"display: inline;\">$f$ has a local minimum at $x=-2$, no local extremum at $x=2$, and a local maximum at $x=5$<br/></span>",
                "<span style=\"display: inline;\">$f$ has local minima at $x=-2$ and $x=2$, and a local maximum at $x=5$<br/></span>",
                "<span style=\"display: inline;\">$f$ has a local maximum at $x=-2$, no local extremum at $x=2$, and a local minimum at $x=5$<br/></span>",
                "<span style=\"display: inline;\">$f$ has no local extrema because the graph shown is $f'$, not $f$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"532651\"></a><div itemprop=\"text\"><p data-end=\"969\" data-start=\"868\">Since the graph shown is $f'$, we use the sign of $f'$ to determine where $f$ increases or decreases.</p><p data-end=\"1015\" data-start=\"971\">For $x&lt;-2$, $f'(x)&lt;0$, so $f$ is decreasing.</p><p data-end=\"1063\" data-start=\"1017\">For $-2&lt;x&lt;2$, $f'(x)&gt;0$, so $f$ is increasing.</p><p data-end=\"1155\" data-start=\"1065\">Since $f'$ changes from negative to positive at $x=-2$, $f$ has a local minimum at $x=-2$.</p><p data-end=\"1314\" data-start=\"1157\">At $x=2$, $f'(2)=0$, but $f'$ is positive on both sides of $x=2$. Therefore, $f$ is increasing before and after $x=2$, so $f$ has no local extremum at $x=2$.</p><p data-end=\"1361\" data-start=\"1316\">For $2&lt;x&lt;5$, $f'(x)&gt;0$, so $f$ is increasing.</p><p data-end=\"1406\" data-start=\"1363\">For $x&gt;5$, $f'(x)&lt;0$, so $f$ is decreasing.</p><p data-end=\"1496\" data-start=\"1408\">Since $f'$ changes from positive to negative at $x=5$, $f$ has a local maximum at $x=5$.</p><p data-end=\"1533\" data-start=\"1498\">Therefore, the correct answer is<strong> A.</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/532650/go-classes-dpp-gate-cs-da-calculus-%26-optimization-local-extrema\" target=\"_blank\">GATE Overflow #532650</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"160\" data-start=\"14\">Let $f$ be continuous on $[0,1]$. For every real number $t$, define $H(t)=\\max_{0\\le x\\le 1}(f(x)-tx)$. Which of the following statements is true?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$H$ must be differentiable for every real number $t$<br/></span>",
                "<span style=\"display: inline;\">$H$ must be continuous for every real number $t$, but it may fail to be differentiable<br/></span>",
                "<span style=\"display: inline;\">$H$ is continuous only if $f$ is differentiable<br/></span>",
                "<span style=\"display: inline;\">$H$ must be constant for all real numbers $t$</span>"
            ],
            "answer": "C",
            "solution": "<div class=\"solution-content\"><a name=\"532584\"></a><div itemprop=\"text\"><p data-path-to-node=\"0\">To determine the properties of the function $H(t) = \\max_{0\\le x\\le 1}(f(x)-tx)$, we can analyze its structure and use a simple example to test the given options.<br/> </p><p data-path-to-node=\"1\"><strong>Continuity of $H(t)$</strong></p><p data-path-to-node=\"2\">For any fixed value of $x \\in [0,1]$, the expression inside the maximum, let's call it $h_x(t) = f(x) - tx$, is a linear (and therefore affine) function of $t$.</p><p data-path-to-node=\"2\">The function $H(t)$ is defined as the pointwise supremum (maximum) of this family of affine functions $h_x(t)$ over all $x \\in [0,1]$.</p><p data-path-to-node=\"3\">A fundamental property in convex analysis is that the pointwise supremum of any collection of affine functions is a <b data-index-in-node=\"116\" data-path-to-node=\"3\">convex function</b>. Because $H(t)$ is finite for all real numbers $t$ (since $f(x)-tx$ is continuous on the compact interval $[0,1]$ and bounded by the Extreme Value Theorem), $H(t)$ is a real-valued convex function defined on the entire real line $\\mathbb{R}$.</p><p data-path-to-node=\"4\">Another key property is that any convex function defined on an open interval (such as $\\mathbb{R}$) is <b data-index-in-node=\"101\" data-path-to-node=\"4\">continuous everywhere</b>. Thus, $H$ must be continuous for every real number $t$, regardless of whether $f$ is differentiable or not. This eliminates option C.</p><p data-path-to-node=\"5\"><br/><strong>Differentiability of $H(t)$</strong></p><p data-path-to-node=\"6\">To see if $H$ must be differentiable, let's test a simple continuous function: $f(x) = 0$ for all $x \\in [0,1]$.</p><p data-path-to-node=\"6\">Substitute this into the definition of $H(t)$:</p><p>$$H(t) = \\max_{0\\le x\\le 1}(0 - tx) = \\max_{0\\le x\\le 1}(-tx)$$</p><p data-path-to-node=\"8\">Let's evaluate this maximum for different values of $t$:</p><ul data-path-to-node=\"9\"><li><p data-path-to-node=\"9,0,0\"><b data-index-in-node=\"0\" data-path-to-node=\"9,0,0\">If $t &gt; 0$:</b> The term $-tx$ is maximized when $x$ is as small as possible. Since $x \\in [0,1]$, the maximum occurs at $x = 0$, giving $H(t) = 0$.</p></li><li><p data-path-to-node=\"9,1,0\"><b data-index-in-node=\"0\" data-path-to-node=\"9,1,0\">If $t \\le 0$:</b> The term $-tx$ is positive (or zero), so it is maximized when $x$ is as large as possible. This occurs at $x = 1$, giving $H(t) = -t$.</p></li></ul><p data-path-to-node=\"10\">Therefore, $H(t) = \\max(0, -t)$.</p><p data-path-to-node=\"10\">While this function is continuous everywhere, it has a sharp corner at $t = 0$. The left-hand derivative is $-1$, and the right-hand derivative is $0$. Because the left and right derivatives do not match, <b data-index-in-node=\"230\" data-path-to-node=\"10\">$H(t)$ is not differentiable at $t = 0$</b>.</p><p data-path-to-node=\"11\">This counterexample eliminates options A (must be differentiable) and D (must be constant).<br/> </p><p data-path-to-node=\"12\"><b data-index-in-node=\"0\" data-path-to-node=\"12\">Correct Answer:</b></p><p data-path-to-node=\"12\"><b data-index-in-node=\"16\" data-path-to-node=\"12\">B. $H$ must be continuous for every real number $t$, but it may fail to be differentiable</b></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/532583/go-classes-dpp-gate-cs-da-calculus-%26-optimization-parametric-optimization\" target=\"_blank\">GATE Overflow #532583</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"119\" data-start=\"14\">A closed circular cylinder has volume $54\\pi$. What is the minimum possible surface area of the cylinder?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$54\\pi$<br/></span>",
                "<span style=\"display: inline;\">$72\\pi$<br/></span>",
                "<span style=\"display: inline;\">$81\\pi$<br/></span>",
                "<span style=\"display: inline;\">$108\\pi$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"532554\"></a><div itemprop=\"text\"><p data-end=\"244\" data-start=\"184\">Let $r$ be the radius and $h$ be the height of the cylinder.</p><p data-end=\"273\" data-start=\"246\">The volume is $V=\\pi r^2h$.</p><p data-end=\"340\" data-start=\"275\">Since $V=54\\pi$, we have $\\pi r^2h=54\\pi$, so $h=\\frac{54}{r^2}$.</p><p data-end=\"404\" data-start=\"342\">The surface area of a closed cylinder is $S=2\\pi r^2+2\\pi rh$.</p><p data-end=\"466\" data-start=\"406\">Substitute $h=\\frac{54}{r^2}$ into the surface area formula.</p><p data-end=\"514\" data-start=\"468\">$\\Rightarrow S=2\\pi r^2+2\\pi r\\left(\\frac{54}{r^2}\\right)$</p><p data-end=\"545\" data-start=\"516\">$\\Rightarrow S=2\\pi r^2+\\frac{108\\pi}{r}$</p><p data-end=\"561\" data-start=\"547\">Differentiate.</p><p data-end=\"596\" data-start=\"563\">$S'(r)=4\\pi r-\\frac{108\\pi}{r^2}$</p><p data-end=\"612\" data-start=\"598\">Set $S'(r)=0$.</p><p data-end=\"643\" data-start=\"614\">$\\Rightarrow 4\\pi r-\\frac{108\\pi}{r^2}=0$</p><p data-end=\"655\" data-start=\"645\">$\\Rightarrow 4r^3=108$</p><p data-end=\"665\" data-start=\"657\">$\\Rightarrow r^3=27$</p><p data-end=\"672\" data-start=\"667\">$\\Rightarrow r=3$</p><p data-end=\"687\" data-start=\"674\">Now find $h$.</p><p data-end=\"709\" data-start=\"689\">$\\Rightarrow h=\\frac{54}{3^2}=6$</p><p data-end=\"745\" data-start=\"711\">Now find the minimum surface area.</p><p data-end=\"771\" data-start=\"747\">$S=2\\pi(3)^2+2\\pi(3)(6)$</p><p data-end=\"771\" data-start=\"747\">$\\Rightarrow S=18\\pi+36\\pi=54\\pi$</p><p data-end=\"794\" data-start=\"773\">$\\boxed{\\therefore S=54\\pi}$</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/532553/go-classes-dpp-gate-cs-da-calculus-%26-optimization-constrained-optimization\" target=\"_blank\">GATE Overflow #532553</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"158\" data-start=\"15\">Consider the function $F(x,y)=x^3+y^3-3xy$.</p><p data-end=\"158\" data-start=\"15\">Which of the following statements is correct about the critical point(s) of $F(x,y)$?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$F$ has only one critical point, and it is a local minimum.<br/></span>",
                "<span style=\"display: inline;\">$F$ has critical points at $(0,0)$ and $(1,1)$; $(0,0)$ is a saddle point and $(1,1)$ is a local minimum.<br/></span>",
                "<span style=\"display: inline;\">$F$ has critical points at $(0,0)$ and $(1,1)$; both are local minima.<br/></span>",
                "<span style=\"display: inline;\">$F$ has no critical points.</span>"
            ],
            "answer": "B",
            "solution": "<div class=\"solution-content\"><a name=\"532438\"></a><div itemprop=\"text\"><p>First find the partial derivatives: $F_x=3x^2-3y$ and $F_y=3y^2-3x$. </p><p>For critical points, set both equal to $0$. </p><p>So $3x^2-3y=0$ gives $y=x^2$, and $3y^2-3x=0$ gives $x=y^2$. </p><p>Substituting $y=x^2$ into $x=y^2$ gives $x=x^4$, so $x=0$ or $x=1$. </p><p>Hence the critical points are $(0,0)$ and $(1,1)$. </p><p>Now use the second derivative test. </p><p>We have $F_{xx}=6x$, $F_{yy}=6y$, and $F_{xy}=-3$.</p><p> The Hessian determinant is $D=F_{xx}F_{yy}-(F_{xy})^2$. </p><p>At $(0,0)$, $D=0\\cdot0-(-3)^2=-9&lt;0$, so $(0,0)$ is a saddle point. </p><p>At $(1,1)$, $D=6\\cdot6-(-3)^2=27&gt;0$ and $F_{xx}=6&gt;0$, so $(1,1)$ is a local minimum. </p><p>Therefore, the correct answer is <strong>B.</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/532437/go-classes-dpp-gate-cs-da-calculus-%26-optimization-critical-point-classification\" target=\"_blank\">GATE Overflow #532437</a></small></div>"
        },
        {
            "marks": 2,
            "neg": 0,
            "type": "MSQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"200\" data-start=\"15\">Let $p$ be twice differentiable on $\\mathbb{R}$ such that $p''(x)&gt;0$ for every real number $x$. Also suppose $p(1)=p(5)=7$. </p><p data-end=\"200\" data-start=\"15\">Which of the following statements must be <strong>true</strong>?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$p(x)<7$ for every $1<x<5$.<br/></span>",
                "<span style=\"display: inline;\">There is exactly one $c\\in(1,5)$ such that $p'(c)=0$.<br/></span>",
                "<span style=\"display: inline;\">The absolute minimum of $p$ must occur at $x=3$.<br/></span>",
                "<span style=\"display: inline;\">$p'(1)<0<p'(5)$.</span>"
            ],
            "answer": [
                "A"
            ],
            "solution": "<div class=\"solution-content\"><a name=\"532191\"></a><div itemprop=\"text\"><p>Since $p''(x)&gt;0$ for all $x$, the function $p$ is strictly convex and $p'$ is strictly increasing. </p><p>Since $p(1)=p(5)=7$, the graph of $p$ lies strictly below the chord joining $(1,7)$ and $(5,7)$ for every $1&lt;x&lt;5$. </p><p>Hence $p(x)&lt;7$ for every $1&lt;x&lt;5$, so <strong>A is true. </strong></p><p>By Rolle’s theorem, since $p(1)=p(5)$, there exists some $c\\in(1,5)$ such that $p'(c)=0$. </p><p>Since $p'$ is strictly increasing, this value of $c$ is unique, so <strong>B is true.</strong> </p><p>Since $p'$ is strictly increasing and $p'(c)=0$, we get $p'(1)&lt;0&lt;p'(5)$, so <strong>D is true. </strong></p><p>However, the minimum does not have to occur at $x=3$.</p><p> For example, $p(x)=e^x-\\frac{e^5-e}{4}x+7-e+\\frac{e^5-e}{4}$ satisfies $p''(x)=e^x&gt;0$ and $p(1)=p(5)=7$, </p><p>but its minimum occurs at $x=\\ln\\left(\\frac{e^5-e}{4}\\right)\\ne3$. Therefore, <strong>C is false.</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/532190/go-classes-dpp-gate-cs-da-calculus-%26-optimization-convex-functions\" target=\"_blank\">GATE Overflow #532190</a></small></div>"
        }
    ]
});

registerTest({
    "name": "DPP 14 - Engineering Mathematics (Optimization & Convexity - Part 2)",
    "testLabel": "DPP 14",
    "testType": "DPP",
    "bracket": "Optimization & Convexity - Part 2",
    "subject": "em",
    "series": "cse-dpp-2027",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 16,
    "topicsCovered": "Optimization & Convexity (Practice Set 2)",
    "questions": [
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"465\" data-start=\"311\">A differentiable function $F$ is defined on $[-2,7]$. Its derivative $F'$ is shown in the graph. </p><p style=\"text-align:center\"><img alt=\"\" height=\"312\" src=\"https://cdn.mathpix.com/snip/images/LnYifCoHlebPLk1I5QEpwqOxi-EWShjUSJCAHbG2ck8.original.fullsize.png\" width=\"416\"/></p><p data-end=\"465\" data-start=\"311\">Which of the following statements are<strong> true</strong>?</p><div> </div><p><strong>Given Details:</strong></p><ul><li>I, II and III only</li><li>I, IV and V only</li><li>I, II, III and V only</li><li>II, III, IV and V only</li></ul></div></span>",
            "image": "https://cdn.mathpix.com/snip/images/LnYifCoHlebPLk1I5QEpwqOxi-EWShjUSJCAHbG2ck8.original.fullsize.png",
            "options": [
                "<span style=\"display: inline;\">$F$ has local minima at $x=-1$ and $x=5$.</span>",
                "<span style=\"display: inline;\">$F(7)&gt;F(3)$.</span>",
                "<span style=\"display: inline;\">$F(5)-F(-1)=6$.</span>",
                "<span style=\"display: inline;\">$x=3$ is an inflection point of $F$.</span>",
                "<span style=\"display: inline;\">The absolute maximum value of $F$ on $[-2,7]$ occurs at $x=7$.</span>"
            ],
            "answer": "C",
            "solution": "<div class=\"solution-content\"><a name=\"532187\"></a><div itemprop=\"text\"><p data-end=\"1188\" data-start=\"797\">From the graph of $F'$, the zeros occur at $x=-1$, $x=3$, and $x=5$. The sign of $F'$ changes from negative to positive at $x=-1$, so $F$ has a local minimum there. The sign of $F'$ changes from positive to negative at $x=3$, so $F$ has a local maximum there. The sign of $F'$ changes from negative to positive at $x=5$, so $F$ has another local minimum there. Hence I is true.</p><p data-end=\"1440\" data-start=\"1190\">Using $F(b)-F(a)=\\int_a^b F'(x),dx$, calculate signed areas. From $x=-1$ to $x=3$, the area above the axis is $8$. From $x=3$ to $x=5$, the area below the axis is $2$. So $F(5)-F(-1)=8-2=6$, and III is true. Also $F(7)-F(3)=-2+3=1&gt;0$, so II is true.</p><p data-end=\"1637\" data-start=\"1442\">For IV, concavity depends on whether $F'$ is increasing or decreasing. Near $x=3$, the graph of $F'$ is decreasing on both sides of $3$, so concavity does not change there. Therefore IV is false.</p><p data-end=\"1854\" data-start=\"1639\">Finally, compare important values relative to $F(-1)$. We get $F(-2)=F(-1)+1$, $F(3)=F(-1)+8$, $F(5)=F(-1)+6$, and $F(7)=F(-1)+9$. The largest value occurs at $x=7$, so V is true. Therefore, the correct answer is C.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/532186/go-classes-dpp-gate-cs-da-calculus-%26-optimization-concavity\" target=\"_blank\">GATE Overflow #532186</a></small></div>"
        },
        {
            "marks": 2,
            "neg": 0,
            "type": "MSQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"177\" data-start=\"15\">Let $f$ be twice differentiable on $\\mathbb{R}$ and suppose $f''(x)&gt;0$ for every real number $x$. Which of the following statements are always true?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$f$ has at most one critical point.<br/></span>",
                "<span style=\"display: inline;\">Every local minimum of $f$ is the unique global minimum of $f$.<br/></span>",
                "<span style=\"display: inline;\">If $f'(1)<0<f'(4)$, then $f$ has a unique global minimum in $(1,4)$.<br/></span>",
                "<span style=\"display: inline;\">If $f$ has no critical point, then $f$ must be bounded below.</span>"
            ],
            "answer": "C",
            "solution": "<div class=\"solution-content\"><a name=\"532185\"></a><div itemprop=\"text\"><p>Since $f''(x)&gt;0$ for every $x$, the derivative $f'(x)$ is strictly increasing. </p><p>Therefore, $f'(x)=0$ can happen at most once, so <strong>A is true. </strong></p><p>Also, if $f$ has a local minimum at $c$, then $f'(c)=0$. </p><p>Since $f'$ is strictly increasing, $f'(x)&lt;0$ for $x&lt;c$ and $f'(x)&gt;0$ for $x&gt;c$, so $f$ decreases before $c$ and increases after $c$.</p><p> Hence that local minimum is the unique global minimum, so <strong>B is true.</strong> </p><p>If $f'(1)&lt;0&lt;f'(4)$, then by continuity of $f'$, there is some $c\\in(1,4)$ such that $f'(c)=0$. Since $f'$ is strictly increasing, this $c$ is unique, and it gives the unique global minimum. Thus <strong>C is true. </strong></p><p><strong>D is false</strong> because $f(x)=x+e^x$ satisfies $f''(x)=e^x&gt;0$ and has no critical point, but $f(x)\\to-\\infty$ as $x\\to-\\infty$. </p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/532183/go-classes-dpp-gate-cs-da-calculus-%26-optimization-convex-functions\" target=\"_blank\">GATE Overflow #532183</a></small></div>"
        },
        {
            "marks": 2,
            "neg": 0,
            "type": "MSQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"281\" data-start=\"38\">The figure shows the graph of $y=F'(x)$ for a differentiable function $F$ on $(-5,6)$. </p><p style=\"text-align:center\"><img alt=\"\" height=\"228\" src=\"https://cdn.mathpix.com/snip/images/o4gUYNsMmSYNawf4fndtwwqpA2waeBbtERsQWZf_QBc.original.fullsize.png\" width=\"500\"/></p><p data-end=\"281\" data-start=\"38\">From the graph, $F'(x)=0$ at $x=-3,-1,2,5$. Also, $F'$ has local extrema at $x=-2,1,2,4$. Which of the following statements is/are true?</p></div></span>",
            "image": "https://cdn.mathpix.com/snip/images/o4gUYNsMmSYNawf4fndtwwqpA2waeBbtERsQWZf_QBc.original.fullsize.png",
            "options": [
                "<span style=\"display: inline;\">$F$ has local maxima at $x=-3$ and $x=5$.<br/></span>",
                "<span style=\"display: inline;\">$F$ is strictly increasing on $(-1,5)$.<br/></span>",
                "<span style=\"display: inline;\">$F$ is concave down on $(1,2)$ and $(4,6)$.<br/></span>",
                "<span style=\"display: inline;\">$x=2$ is a local minimum point of $F$.</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"531973\"></a><div itemprop=\"text\"><p data-end=\"584\" data-start=\"509\">We are given the graph of $F'(x)$, not the graph of $F(x)$.</p><p data-end=\"821\" data-start=\"586\">For (A), local maxima of $F$ occur where $F'(x)$ changes from positive to negative. From the graph, $F'(x)$ changes from positive to negative at $x=-3$ and again at $x=5$. Hence $F$ has local maxima at $x=-3$ and $x=5$. So <strong>(A) is true.</strong></p><p data-end=\"1070\" data-start=\"823\">For (B), on $(-1,5)$, the graph of $F'(x)$ stays above the $x$-axis except at $x=2$, where it only touches the axis. Thus $F'(x)\\ge0$ on $(-1,5)$ and $F'(x)&gt;0$ except at one point. Therefore, $F$ is strictly increasing on $(-1,5)$. So <strong>(B) is true.</strong></p><p data-end=\"1282\" data-start=\"1072\">For (C), $F$ is concave down where $F'(x)$ is decreasing. From the graph, $F'(x)$ is decreasing on $(1,2)$ and also on $(4,6)$. Hence $F''(x)&lt;0$ on these intervals, so $F$ is concave down there. So <strong>(C) is true.</strong></p><p data-end=\"1480\" data-start=\"1284\">For (D), at $x=2$, $F'(x)=0$, but $F'(x)$ is positive on both sides of $x=2$. Therefore, $F$ is increasing before and after $x=2$. So $x=2$ is not a local minimum point of $F$. Hence <strong>(D) is false.</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/531972/go-classes-dpp-gate-cs-da-calculus-%26-optimization-derivative-graph-analysis\" target=\"_blank\">GATE Overflow #531972</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"426\" data-start=\"27\">Let $F:\\mathbb R\\to\\mathbb R$ be a differentiable function such that $F'$ is continuous on $\\mathbb R$. The derivative $F'(x)$ is equal to $0$ exactly at $x=-4,-1,3,7$ and at no other point. It is known that $\\lim_{x\\to-\\infty}F(x)=2$, $\\lim_{x\\to\\infty}F(x)=-1$, $F(-4)=6$, $F(-1)=0$, $F(3)=9$, and $\\int_3^7 F'(x),dx=-11$. The global minimum value of $F(x)$ on $\\mathbb R$ is:</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$0$<br/></span>",
                "<span style=\"display: inline;\">$-2$<br/></span>",
                "<span style=\"display: inline;\">$-1$<br/></span>",
                "<span style=\"display: inline;\">Does not exist</span>"
            ],
            "answer": "B",
            "solution": "<div class=\"solution-content\"><a name=\"531943\"></a><div itemprop=\"text\"><p data-end=\"700\" data-start=\"517\">Since $F'(x)=0$ exactly at $x=-4,-1,3,7$, the sign of $F'(x)$ cannot change inside any of the intervals $(-\\infty,-4)$, $(-4,-1)$, $(-1,3)$, $(3,7)$, and $(7,\\infty)$.</p><p data-end=\"741\" data-start=\"702\">Now $F(7)-F(3)=\\int_3^7 F'(x),dx=-11$.</p><p data-end=\"769\" data-start=\"743\">So $F(7)=F(3)-11=9-11=-2$.</p><p data-end=\"813\" data-start=\"771\">Now compare the behavior on each interval.</p><p data-end=\"1008\" data-start=\"815\">On $(-\\infty,-4)$, $F(x)$ moves from the limiting value $2$ to $F(-4)=6$. Since there is no critical point inside this interval, $F$ is increasing there. So no value less than $2$ occurs there.</p><p data-end=\"1126\" data-start=\"1010\">On $(-4,-1)$, $F$ moves from $6$ to $0$. Hence it is decreasing there, so the least value on this part is $F(-1)=0$.</p><p data-end=\"1243\" data-start=\"1128\">On $(-1,3)$, $F$ moves from $0$ to $9$. Hence it is increasing there, so the least value on this part is $F(-1)=0$.</p><p data-end=\"1360\" data-start=\"1245\">On $(3,7)$, $F$ moves from $9$ to $-2$. Hence it is decreasing there, so the least value on this part is $F(7)=-2$.</p><p data-end=\"1517\" data-start=\"1362\">On $(7,\\infty)$, $F$ moves from $F(7)=-2$ toward the limiting value $-1$. Hence it is increasing there, so the least value on this part is again $F(7)=-2$.</p><p data-end=\"1573\" data-is-last-node=\"\" data-is-only-node=\"\" data-start=\"1519\">Therefore, the global minimum value of $F(x)$ is $\\boxed{-2}$.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/531942/go-classes-dpp-gate-cs-da-calculus-%26-optimization-global-extrema\" target=\"_blank\">GATE Overflow #531942</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>A twice differentiable function $F:\\mathbb R\\to\\mathbb R$ has the following graph of $y=F''(x)$. The graph touches the $x$-axis only at $x=-4,-2,1,3,6$, and $F''(x)=0$ for $x\\le -4$ and $x\\ge 6$. The signed areas between the graph of $F''(x)$ and the $x$-axis are as follows: area on $(-4,-2)$ is $+5$, area on $(-2,1)$ is $-8$, area on $(1,3)$ is $+4$, and area on $(3,6)$ is $-7$. If $F'(-4)=2$, then the number of critical points of $F$ is ________.</p><p style=\"text-align:center\"><img alt=\"\" height=\"260\" src=\"https://cdn.mathpix.com/snip/images/Tzzl9ct8-ihnz_17rEtAw4hROQnxDSvOIA8QzDsJH1w.original.fullsize.png\" width=\"488\"/></p><p> </p></div></span>",
            "image": "https://cdn.mathpix.com/snip/images/Tzzl9ct8-ihnz_17rEtAw4hROQnxDSvOIA8QzDsJH1w.original.fullsize.png",
            "options": [],
            "answer": "3",
            "solution": "<div class=\"solution-content\"><a name=\"531941\"></a><div itemprop=\"text\"><p data-end=\"622\" data-start=\"521\">Critical points of $F$ occur where $F'(x)=0$, since $F$ is differentiable everywhere.</p><p data-end=\"671\" data-start=\"624\">We know that $F'(b)-F'(a)=\\int_a^b F''(x),dx$.</p><p data-end=\"690\" data-start=\"673\">Given $F'(-4)=2$.</p><p data-end=\"749\" data-start=\"692\">On $(-4,-2)$, the signed area is $+5$, so $F'(-2)=2+5=7$.</p><p data-end=\"807\" data-start=\"751\">On $(-2,1)$, the signed area is $-8$, so $F'(1)=7-8=-1$.</p><p data-end=\"864\" data-start=\"809\">On $(1,3)$, the signed area is $+4$, so $F'(3)=-1+4=3$.</p><p data-end=\"921\" data-start=\"866\">On $(3,6)$, the signed area is $-7$, so $F'(6)=3-7=-4$.</p><p data-end=\"986\" data-start=\"923\">Now use the sign of $F''(x)$ to decide monotonicity of $F'(x)$.</p><p data-end=\"1091\" data-start=\"988\">On $(-4,-2)$, $F''(x)&gt;0$, so $F'(x)$ is increasing from $2$ to $7$. Hence no zero of $F'$ occurs there.</p><p data-end=\"1205\" data-start=\"1093\">On $(-2,1)$, $F''(x)&lt;0$, so $F'(x)$ is decreasing from $7$ to $-1$. Hence exactly one zero of $F'$ occurs there.</p><p data-end=\"1318\" data-start=\"1207\">On $(1,3)$, $F''(x)&gt;0$, so $F'(x)$ is increasing from $-1$ to $3$. Hence exactly one zero of $F'$ occurs there.</p><p data-end=\"1431\" data-start=\"1320\">On $(3,6)$, $F''(x)&lt;0$, so $F'(x)$ is decreasing from $3$ to $-4$. Hence exactly one zero of $F'$ occurs there.</p><p data-end=\"1538\" data-start=\"1433\">For $x\\le -4$, $F''(x)=0$, so $F'(x)$ is constant and equal to $2$. Hence no critical point occurs there.</p><p data-end=\"1645\" data-start=\"1540\">For $x\\ge 6$, $F''(x)=0$, so $F'(x)$ is constant and equal to $-4$. Hence no critical point occurs there.</p><p data-end=\"1708\" data-start=\"1647\">Therefore, the total number of critical points of $F$ is $\\boxed{3}$.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/531940/go-classes-dpp-gate-cs-da-calculus-%26-optimization-critical-points\" target=\"_blank\">GATE Overflow #531940</a></small></div>"
        },
        {
            "marks": 2,
            "neg": 0,
            "type": "MSQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"261\" data-start=\"35\">A function $F:\\mathbb R\\to\\mathbb R$ is such that both $F$ and $F'$ are differentiable on $\\mathbb R$. The function $F$ has exactly three critical points. Some information about $F$ and $F'$ is given below:</p><p data-end=\"399\" data-start=\"263\">$$\\begin{array}{c|ccccc} x &amp; -2 &amp; 0 &amp; 2 &amp; 4 &amp; 6 &amp; 7 \\\\ \\hline F(x) &amp; ? &amp; 5 &amp; 5 &amp; ? &amp; ? &amp; ? \\\\ F'(x) &amp; 0 &amp; 2 &amp; ? &amp; -1 &amp; 0 &amp; 3 \\end{array}$$</p><p data-end=\"460\" data-start=\"401\">On which of the following intervals must $F$ be increasing?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$(-1,0)$<br/></span>",
                "<span style=\"display: inline;\">$(1,2)$<br/></span>",
                "<span style=\"display: inline;\">$(3,5)$<br/></span>",
                "<span style=\"display: inline;\">$(6,7)$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"531857\"></a><div itemprop=\"text\"><p data-end=\"695\" data-start=\"555\">Since $F(0)=F(2)$ and $F$ is differentiable, by Rolle's theorem there exists some $\\alpha\\in(0,2)$ such that $F'(\\alpha)=0$.</p><p data-end=\"740\" data-start=\"697\">We are also given $F'(-2)=0$ and $F'(6)=0$.</p><p data-end=\"870\" data-start=\"742\">Since $F$ has exactly three critical points, the only critical points are $x=-2$, $x=\\alpha$, and $x=6$, where $\\alpha\\in(0,2)$.</p><p data-end=\"1097\" data-start=\"872\">Now $F'(0)=2&gt;0$. Since $0$ lies between $-2$ and $\\alpha$, and there is no other zero of $F'$ in $(-2,\\alpha)$, we must have $F'(x)&gt;0$ on the entire interval $(-2,\\alpha)$. Hence $F$ is increasing on $(-1,0)$. So (A) is true.</p><p data-end=\"1295\" data-start=\"1099\">For $(1,2)$, the critical point $\\alpha$ lies somewhere in $(0,2)$. It may lie inside $(1,2)$, or before $1$. Hence we cannot say that $F'(x)&gt;0$ throughout $(1,2)$. So (B) is not necessarily true.</p><p data-end=\"1521\" data-start=\"1297\">Now $F'(4)=-1&lt;0$. Since $4$ lies between $\\alpha$ and $6$, and there is no other zero of $F'$ in $(\\alpha,6)$, we must have $F'(x)&lt;0$ on $(\\alpha,6)$. Therefore, $F$ is decreasing on $(3,5)$, not increasing. So (C) is false.</p><p data-end=\"1665\" data-is-last-node=\"\" data-is-only-node=\"\" data-start=\"1523\">Finally, $F'(7)=3&gt;0$. Since there is no critical point after $6$, $F'(x)&gt;0$ for all $x&gt;6$. Hence $F$ is increasing on $(6,7)$. So (D) is true.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/531856/go-classes-dpp-gate-cs-da-calculus-%26-optimization-rolle-and-monotonicity\" target=\"_blank\">GATE Overflow #531856</a></small></div>"
        },
        {
            "marks": 2,
            "neg": 0,
            "type": "MSQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"329\" data-start=\"27\">A differentiable function $F:\\mathbb R\\to\\mathbb R$ is completely known on one side of $x=1$. For $x\\le1$, $F(x)=\\frac{x+1}{x^2+1}$. For $x&gt;1$, the formula of $F(x)$ is not given. However, it is known that $F'(x)&lt;0$ for every $x\\ge1$. Which of the following statements must be true?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$x=-1+\\sqrt2$ is a point of global maximum.<br/></span>",
                "<span style=\"display: inline;\">$x=1$ is a point of local maximum.<br/></span>",
                "<span style=\"display: inline;\">$x=-1-\\sqrt2$ is necessarily a point of global minimum.<br/></span>",
                "<span style=\"display: inline;\">$x=1$ is not a point of local extremum.</span>"
            ],
            "answer": [
                "A"
            ],
            "solution": "<div class=\"solution-content\"><a name=\"531855\"></a><div itemprop=\"text\"><p data-end=\"623\" data-start=\"561\">For $x\\le1$, we have $F(x)=\\frac{x+1}{x^2+1}$.</p><p data-end=\"699\" data-start=\"625\">Now $F'(x)=\\frac{(x^2+1)-2x(x+1)}{(x^2+1)^2}=\\frac{-x^2-2x+1}{(x^2+1)^2}$.</p><p data-end=\"763\" data-start=\"701\">So $F'(x)=0$ gives $-x^2-2x+1=0$, which gives $x=-1\\pm\\sqrt2$.</p><p data-end=\"819\" data-start=\"765\">Both $-1-\\sqrt2$ and $-1+\\sqrt2$ lie in $(-\\infty,1]$.</p><p data-end=\"948\" data-start=\"821\">The sign of $F'(x)$ is negative on $(-\\infty,-1-\\sqrt2)$, positive on $(-1-\\sqrt2,-1+\\sqrt2)$, and negative on $(-1+\\sqrt2,1]$.</p><p data-end=\"1045\" data-start=\"950\">Hence $x=-1-\\sqrt2$ is a local minimum and $x=-1+\\sqrt2$ is a local maximum for the known part.</p><p data-end=\"1116\" data-start=\"1047\">Now $F(-1+\\sqrt2)=\\frac{\\sqrt2}{(-1+\\sqrt2)^2+1}=\\frac{1+\\sqrt2}{2}$.</p><p data-end=\"1132\" data-start=\"1118\">Also $F(1)=1$.</p><p data-end=\"1214\" data-start=\"1134\">Since $\\frac{1+\\sqrt2}{2}&gt;1$, the value at $x=-1+\\sqrt2$ is greater than $F(1)$.</p><p data-end=\"1327\" data-start=\"1216\">For $x&gt;1$, we are given $F'(x)&lt;0$, so $F$ is decreasing after $x=1$. Therefore, for every $x&gt;1$, $F(x)&lt;F(1)=1$.</p><p data-end=\"1464\" data-start=\"1329\">Thus no value for $x&gt;1$ can exceed $F(-1+\\sqrt2)=\\frac{1+\\sqrt2}{2}$. Hence $x=-1+\\sqrt2$ is a point of global maximum. So (A) is true.</p><p data-end=\"1747\" data-start=\"1466\">At $x=1$, the function is decreasing on the left near $1$, so values just before $1$ are greater than $F(1)$. Also, since $F'(x)&lt;0$ for $x\\ge1$, values just after $1$ are less than $F(1)$. Hence $x=1$ is neither a local maximum nor a local minimum. So (B) is false and (D) is true.</p><p data-end=\"1964\" data-is-last-node=\"\" data-is-only-node=\"\" data-start=\"1749\">For (C), although $x=-1-\\sqrt2$ is a local minimum on the known part, it may not be a global minimum because the unknown part for $x&gt;1$ may keep decreasing and go below this value. Hence (C) is not necessarily true.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/531854/go-classes-dpp-gate-cs-da-calculus-%26-optimization-global-extrema\" target=\"_blank\">GATE Overflow #531854</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"169\" data-start=\"0\">The direction of steepest ascent of $f(x,y,z)=x^2y+yz^2+e^{xz}$ at the point $(1,1,0)$, among all unit directions lying in the plane $u_1+u_2+u_3=0$, is:</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\left\\langle \\frac{1}{\\sqrt{2}},-\\frac{1}{\\sqrt{2}},0\\right\\rangle$<br/></span>",
                "<span style=\"display: inline;\">$\\left\\langle \\frac{2}{\\sqrt{6}},-\\frac{1}{\\sqrt{6}},-\\frac{1}{\\sqrt{6}}\\right\\rangle$<br/></span>",
                "<span style=\"display: inline;\">$\\left\\langle \\frac{1}{\\sqrt{6}},\\frac{1}{\\sqrt{6}},-\\frac{2}{\\sqrt{6}}\\right\\rangle$<br/></span>",
                "<span style=\"display: inline;\">$\\left\\langle -\\frac{2}{\\sqrt{6}},\\frac{1}{\\sqrt{6}},\\frac{1}{\\sqrt{6}}\\right\\rangle$</span>"
            ],
            "answer": "531555",
            "solution": "<div class=\"solution-content\"><a name=\"531556\"></a><div itemprop=\"text\"><p data-end=\"643\" data-start=\"530\">The direction of steepest ascent is the direction in which the directional derivative is maximum.</p><p data-end=\"824\" data-start=\"645\">Without any restriction, this direction is along $\\nabla f$. But here the direction must lie in the plane $u_1+u_2+u_3=0$, so we need the projection of $\\nabla f$ onto this plane.</p><p data-end=\"860\" data-start=\"826\">Given $f(x,y,z)=x^2y+yz^2+e^{xz}$.</p><p data-end=\"918\" data-start=\"862\">$f_x=2xy+ze^{xz}$, $f_y=x^2+z^2$, and $f_z=2yz+xe^{xz}$.</p><p data-end=\"980\" data-start=\"920\">At $(1,1,0)$, we get $\\nabla f(1,1,0)=\\langle 2,1,1\\rangle$.</p><p data-end=\"1060\" data-start=\"982\">The plane $u_1+u_2+u_3=0$ has normal vector $\\mathbf{n}=\\langle 1,1,1\\rangle$.</p><p data-end=\"1186\" data-start=\"1062\">Projection of $\\nabla f$ onto the plane is $\\nabla f-\\frac{\\nabla f\\cdot \\mathbf{n}}{\\mathbf{n}\\cdot \\mathbf{n}}\\mathbf{n}$.</p><p data-end=\"1328\" data-start=\"1188\">So the projection is $\\langle 2,1,1\\rangle-\\frac{4}{3}\\langle 1,1,1\\rangle=\\left\\langle \\frac{2}{3},-\\frac{1}{3},-\\frac{1}{3}\\right\\rangle$.</p><p data-end=\"1347\" data-start=\"1330\">Now normalize it.</p><p data-end=\"1446\" data-start=\"1349\">Its length is $\\sqrt{\\frac{4}{9}+\\frac{1}{9}+\\frac{1}{9}}=\\sqrt{\\frac{6}{9}}=\\frac{\\sqrt{6}}{3}$.</p><p data-end=\"1662\" data-start=\"1448\">Thus the required unit direction is $\\frac{\\left\\langle \\frac{2}{3},-\\frac{1}{3},-\\frac{1}{3}\\right\\rangle}{\\frac{\\sqrt{6}}{3}}=\\left\\langle \\frac{2}{\\sqrt{6}},-\\frac{1}{\\sqrt{6}},-\\frac{1}{\\sqrt{6}}\\right\\rangle$.</p><p data-end=\"1699\" data-start=\"1664\">Therefore, the correct answer is <strong>B.</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/531555/go-classes-dpp-gate-cs-da-calculus-%26-optimization-steepest-ascent\" target=\"_blank\">GATE Overflow #531555</a></small></div>"
        },
        {
            "marks": 2,
            "neg": 0,
            "type": "MSQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"160\" data-start=\"14\">Consider a differentiable function $f$ whose derivative is given by $f'(x)=e^{-x}(x+2)^2(x-1)(x-3)^3$. Which of the following statements are <strong>true</strong>?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">There is a local maximum at $x=-2$<br/></span>",
                "<span style=\"display: inline;\">There is a local maximum at $x=1$<br/></span>",
                "<span style=\"display: inline;\">There is a local minimum at $x=3$<br/></span>",
                "<span style=\"display: inline;\">There is a stationary point at $x=-2$, but no local maximum or local minimum there</span>"
            ],
            "answer": [
                "A"
            ],
            "solution": "<div class=\"solution-content\"><a name=\"530966\"></a><div itemprop=\"text\"><p data-path-to-node=\"1\">The given derivative is:</p><p>$$f'(x) = e^{-x}(x + 2)^2(x - 1)(x - 3)^3$$</p><p data-path-to-node=\"4\"><strong>Finding Critical Points :</strong></p><p data-path-to-node=\"4\">Critical points occur where the derivative is equal to zero or is undefined. Since $f'(x)$ is a product of exponential and polynomial functions, it is defined everywhere. We set $f'(x) = 0$ to find the critical points:</p><p>$$e^{-x}(x + 2)^2(x - 1)(x - 3)^3 = 0$$</p><p data-path-to-node=\"6\">Since the exponential function $e^{-x}$ is strictly positive for all real values of $x$, it can never be zero. Therefore, we only need to set the polynomial factors to zero:</p><ul data-path-to-node=\"7\"><li><p data-path-to-node=\"7,0,0\">$(x + 2)^2 = 0 \\implies x = -2$</p></li><li><p data-path-to-node=\"7,1,0\">$x - 1 = 0 \\implies x = 1$</p></li><li><p data-path-to-node=\"7,2,0\">$(x - 3)^3 = 0 \\implies x = 3$</p></li></ul><p data-path-to-node=\"8\">The critical points are $x = -2$, $x = 1$, and $x = 3$.</p><p data-path-to-node=\"8\"> </p><p data-path-to-node=\"8\"><strong>Applying the First Derivative Test : </strong></p><p data-path-to-node=\"10\">To classify each critical point as a local maximum, local minimum, or neither, we evaluate the sign of $f'(x)$ on the intervals between the critical points.</p><p data-path-to-node=\"11\">The sign of $f'(x)$ depends on the factors. Let's analyze them:</p><ul data-path-to-node=\"12\"><li><p data-path-to-node=\"12,0,0\">$e^{-x}$ is always positive $(+)$.</p></li><li><p data-path-to-node=\"12,1,0\">$(x + 2)^2$ is always non-negative $(+)$, except at $x = -2$ where it is $0$. It will not cause a sign change.</p></li><li><p data-path-to-node=\"12,2,0\">The sign of $f'(x)$ will entirely depend on the product of the remaining factors with odd powers $:(x - 1)(x - 3)^3$.</p></li></ul><div> </div><div><p data-path-to-node=\"13\">Let's test the intervals:</p><ul data-path-to-node=\"14\"><li><p data-path-to-node=\"14,0,0\">Interval $(-\\infty, -2):$ Let $x = -3$.</p><p data-path-to-node=\"14,0,0\">$f'(-3) = (+) \\cdot (+) \\cdot (-4) \\cdot (-6)^3 = (+) \\cdot (+) \\cdot (-) \\cdot (-) = (+)$</p><p data-path-to-node=\"14,0,0\">The function is increasing.</p></li><li><p data-path-to-node=\"14,1,0\">Interval $(-2, 1):$ Let $x = 0$.</p><p data-path-to-node=\"14,1,0\">$f'(0) = (+) \\cdot (+) \\cdot (-1) \\cdot (-3)^3 = (+) \\cdot (+) \\cdot (-) \\cdot (-) = (+)$</p><p data-path-to-node=\"14,1,0\">The function is increasing.</p></li><li><p data-path-to-node=\"14,2,0\">Interval $(1, 3):$ Let $x = 2$.</p><p data-path-to-node=\"14,2,0\">$f'(2) = (+) \\cdot (+) \\cdot (1) \\cdot (-1)^3 = (+) \\cdot (+) \\cdot (+) \\cdot (-) = (-)$</p><p data-path-to-node=\"14,2,0\">The function is decreasing.</p></li><li><p data-path-to-node=\"14,3,0\">Interval $(3, \\infty):$ Let $x = 4$.</p><p data-path-to-node=\"14,3,0\">$f'(4) = (+) \\cdot (+) \\cdot (3) \\cdot (1)^3 = (+) \\cdot (+) \\cdot (+) \\cdot (+) = (+)$</p><p data-path-to-node=\"14,3,0\">The function is increasing.</p></li></ul><div> </div></div><div><p data-path-to-node=\"16\">Now let's check the given options based on our sign analysis:</p><ul data-path-to-node=\"17\"><li><p data-path-to-node=\"17,0,0\">At $x = -2:$ The derivative $f'(x)$ is positive on both the left and the right sides. Since the sign does not change, there is no local extremum here. It is just a stationary point. This makes statement <strong>A false</strong> and statement <strong>D true.</strong></p></li><li><p data-path-to-node=\"17,1,0\">At $x = 1:$ The derivative changes sign from positive to negative. This means the function changes from increasing to decreasing, creating a local maximum. This makes statement <strong>B true.</strong></p></li><li><p data-path-to-node=\"17,2,0\">At $x = 3:$ The derivative changes sign from negative to positive. This means the function changes from decreasing to increasing, creating a local minimum. This makes statement <strong>C true.</strong></p></li></ul></div></div><br><br><small>Source: <a href=\"https://gateoverflow.in/530965/go-classes-dpp-gate-cs-da-calculus-%26-optimization-first-derivative-test\" target=\"_blank\">GATE Overflow #530965</a></small></div>"
        },
        {
            "marks": 2,
            "neg": 0,
            "type": "MSQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"139\" data-start=\"14\">Let $f:\\mathbb{R}\\to\\mathbb{R}$ be differentiable at $x=x^*$<em data-end=\"86\" data-start=\"72\">. </em>If $f'(x^*)=0$, which of the following statements must be <strong>true</strong>?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$f$ is continuous at $x=x^*$<br/></span>",
                "<span style=\"display: inline;\">The tangent line to the graph of $f$ at $x=x^*$ is horizontal<br/></span>",
                "<span style=\"display: inline;\">$f$ has a local maximum or local minimum at $x=x^*$<br/></span>",
                "<span style=\"display: inline;\">$f$ is constant in some open interval around $x=x^*$</span>"
            ],
            "answer": [
                "A"
            ],
            "solution": "<div class=\"solution-content\"><a name=\"530955\"></a><div itemprop=\"text\"><p data-path-to-node=\"0\">We are given that $f(x)$ is differentiable at $x = x^*$ and $f'(x^*) = 0$.</p><div>Lets analyse each statement :<br/> </div><p data-path-to-node=\"2\"><strong>A.</strong> $f$ is continuous at $x = x^*$</p><ul data-path-to-node=\"3\"><li><p data-path-to-node=\"3,0,0\"><strong>True.</strong> A fundamental theorem in calculus states that differentiability implies continuity. If a function has a derivative at a point, it must be continuous at that point. Since we are given that $f$ is differentiable at $x^*$, it must also be continuous there.<br/> </p></li></ul><p data-path-to-node=\"4\"><strong>B.</strong> The tangent line to the graph of $f$ at $x = x^*$ is horizontal</p><ul data-path-to-node=\"5\"><li><p data-path-to-node=\"5,0,0\"><strong>True</strong>. The value of the derivative, $f'(x^*)$, represents the slope of the tangent line to the curve at that specific point. Since $f'(x^*) = 0$, the slope is zero, which means the tangent line is perfectly horizontal.<br/> </p></li></ul><p data-path-to-node=\"6\"><strong>C.</strong> $f$ has a local maximum or local minimum at $x = x^*$</p><ul data-path-to-node=\"7\"><li><p data-path-to-node=\"7,0,0\"><strong>False.</strong> Having a derivative of zero is a necessary condition for a local extremum (minimum or maximum), but it is not a sufficient condition. A function can have a horizontal tangent without having a local maximum or minimum.</p></li><li><p data-path-to-node=\"7,1,0\"><em><strong>Counterexample:</strong></em> Consider the function $f(x) = x^3$ at $x = 0$. The derivative is $f'(x) = 3x^2$, so $f'(0) = 0$. The tangent line is horizontal at $x=0$, but the function simply flattens out and continues to increase. This is known as a saddle point or point of inflection, not an extremum.<br/> </p></li></ul><p data-path-to-node=\"8\"><strong>D.</strong> $f$ is constant in some open interval around $x = x^*$</p><ul data-path-to-node=\"9\"><li><p data-path-to-node=\"9,0,0\"><strong>False.</strong> The fact that the instantaneous rate of change is zero exactly at $x^*$ tells us nothing about the function's behavior in an interval around $x^*$.</p></li><li><p data-path-to-node=\"9,1,0\"><strong><em>Counterexample:</em></strong> Consider $f(x) = x^2$. At $x = 0$, $f'(0) = 0$. However, the function is not constant in any interval around zero; it forms a parabola.</p></li></ul></div><br><br><small>Source: <a href=\"https://gateoverflow.in/530953/go-classes-dpp-gate-cs-da-calculus-%26-optimization-derivatives-%26-stationary-points\" target=\"_blank\">GATE Overflow #530953</a></small></div>"
        }
    ]
});

registerTest({
    "name": "DPP 15 - Engineering Mathematics (Optimization & Convexity - Part 3)",
    "testLabel": "DPP 15",
    "testType": "DPP",
    "bracket": "Optimization & Convexity - Part 3",
    "subject": "em",
    "series": "cse-dpp-2027",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 10,
    "topicsCovered": "Optimization & Convexity (Practice Set 3)",
    "questions": [
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"79\" data-start=\"0\">Find the minimum value of $f(x,y)=xy+x+y$ subject to $x^2+y^2=1$.</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$-1$<br/></span>",
                "<span style=\"display: inline;\">$-\\sqrt{2}$<br/></span>",
                "<span style=\"display: inline;\">$-1/2$<br/></span>",
                "<span style=\"display: inline;\">$-2$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"530868\"></a><div itemprop=\"text\"><p>We want to minimize the objective function $f(x, y) = xy + x + y$ subject to the constraint $g(x, y) = x^2 + y^2 - 1 = 0$.</p><p>We will the method of <b data-index-in-node=\"81\" data-path-to-node=\"0\">Lagrange Multipliers</b>. This method finds the local maxima and minima of a function subject to an equality constraint.</p><p data-path-to-node=\"3\">We introduce a new variable, $\\lambda$ (lambda), called the Lagrange multiplier. The Lagrangian function $\\mathcal{L}$ is defined as:</p><p>$$\\mathcal{L}(x, y, \\lambda) = f(x, y) - \\lambda \\cdot g(x, y)$$</p><p>$$\\mathcal{L}(x, y, \\lambda) = (xy + x + y) - \\lambda(x^2 + y^2 - 1)$$</p><p data-path-to-node=\"6\">To find the critical points, we take the partial derivatives of $\\mathcal{L}$ with respect to $x$, $y$, and $\\lambda$, and set each equal to $0$:</p><ul data-path-to-node=\"7\"><li><p data-path-to-node=\"7,0,0\">$\\frac{\\partial \\mathcal{L}}{\\partial x} = y + 1 - 2\\lambda x = 0 \\implies 2\\lambda x = y + 1$ <b data-index-in-node=\"94\" data-path-to-node=\"7,0,0\">(Eq. 1)</b></p></li><li><p data-path-to-node=\"7,1,0\">$\\frac{\\partial \\mathcal{L}}{\\partial y} = x + 1 - 2\\lambda y = 0 \\implies 2\\lambda y = x + 1$ <b data-index-in-node=\"94\" data-path-to-node=\"7,1,0\">(Eq. 2)</b></p></li><li><p data-path-to-node=\"7,2,0\">$\\frac{\\partial \\mathcal{L}}{\\partial \\lambda} = -(x^2 + y^2 - 1) = 0 \\implies x^2 + y^2 = 1$ <b data-index-in-node=\"93\" data-path-to-node=\"7,2,0\">(Eq. 3)</b></p></li></ul><p data-path-to-node=\"7,2,0\"> </p><p data-path-to-node=\"8\">A common trick to eliminate $\\lambda$ is to multiply <b data-index-in-node=\"84\" data-path-to-node=\"8\">(Eq. 1)</b> by $y$ and <b data-index-in-node=\"101\" data-path-to-node=\"8\">(Eq. 2)</b> by $x$:</p><ul data-path-to-node=\"9\"><li><p data-path-to-node=\"9,0,0\">$2\\lambda xy = y^2 + y$</p></li><li><p data-path-to-node=\"9,1,0\">$2\\lambda xy = x^2 + x$</p></li></ul><p data-path-to-node=\"10\">Since both expressions equal $2\\lambda xy$, we can set them equal to each other:</p><p>$$\\Rightarrow y^2 + y = x^2 + x$$</p><p data-path-to-node=\"12\">$$y^2 - x^2 + y - x = 0$$</p><p data-path-to-node=\"14\">$$\\Rightarrow (y - x)(y + x) + (y - x) = 0$$</p><p data-path-to-node=\"16\">$$\\Rightarrow (y - x)(x + y + 1) = 0$$</p><p data-path-to-node=\"18\">This gives us two distinct cases to explore: either $y = x$ or $x + y + 1 = 0$.</p><p data-path-to-node=\"19\"><b data-index-in-node=\"0\" data-path-to-node=\"19\">Case 1: $y = x$</b></p><p data-path-to-node=\"19\">Substitute $y = x$ into our original constraint <b data-index-in-node=\"60\" data-path-to-node=\"19\">(Eq. 3)</b>:</p><p>$$x^2 + x^2 = 1$$</p><p>$$2x^2 = 1$$</p><p>$$x^2 = \\frac{1}{2} \\implies x = \\pm\\frac{1}{\\sqrt{2}}$$</p><p data-path-to-node=\"23\">This gives us two critical points: $\\left(\\frac{1}{\\sqrt{2}}, \\frac{1}{\\sqrt{2}}\\right)$ and $\\left(-\\frac{1}{\\sqrt{2}}, -\\frac{1}{\\sqrt{2}}\\right)$.</p><p data-path-to-node=\"24\"><b data-index-in-node=\"0\" data-path-to-node=\"24\">Case 2: $x + y + 1 = 0 \\implies y = -x - 1$</b></p><p data-path-to-node=\"24\">Substitute $y = -x - 1$ into our constraint <b data-index-in-node=\"84\" data-path-to-node=\"24\">(Eq. 3)</b>:</p><p>$$x^2 + (-x - 1)^2 = 1$$</p><p>$$x^2 + (x^2 + 2x + 1) = 1$$</p><p>$$2x^2 + 2x = 0$$</p><p>$$2x(x + 1) = 0$$</p><p data-path-to-node=\"29\">This gives $x = 0$ or $x = -1$.</p><ul data-path-to-node=\"30\"><li><p data-path-to-node=\"30,0,0\">If $x = 0$, then $y = -0 - 1 = -1$. This gives the point $(0, -1)$.</p></li><li><p data-path-to-node=\"30,1,0\">If $x = -1$, then $y = -(-1) - 1 = 0$. This gives the point $(-1, 0)$.</p></li></ul><p data-path-to-node=\"31\"><br/>Now we test our four critical points in the original objective function $f(x, y) = xy + x + y$ to find the absolute minimum:</p><ol data-path-to-node=\"32\" start=\"1\"><li><p data-path-to-node=\"32,0,0\">At $\\left(\\frac{1}{\\sqrt{2}}, \\frac{1}{\\sqrt{2}}\\right)$:</p><p>$$f\\left(\\frac{1}{\\sqrt{2}}, \\frac{1}{\\sqrt{2}}\\right) = \\left(\\frac{1}{2}\\right) + \\frac{1}{\\sqrt{2}} + \\frac{1}{\\sqrt{2}} = 0.5 + \\sqrt{2} \\approx 1.914$$</p><p data-path-to-node=\"32,0,2\">(This is the maximum)</p></li><li><p data-path-to-node=\"32,1,0\">At $\\left(-\\frac{1}{\\sqrt{2}}, -\\frac{1}{\\sqrt{2}}\\right)$:</p><p>$$f\\left(-\\frac{1}{\\sqrt{2}}, -\\frac{1}{\\sqrt{2}}\\right) = \\left(\\frac{1}{2}\\right) - \\frac{1}{\\sqrt{2}} - \\frac{1}{\\sqrt{2}} = 0.5 - \\sqrt{2} \\approx -0.914$$</p></li><li><p data-path-to-node=\"32,2,0\">At $(0, -1)$:</p><p>$$f(0, -1) = (0)(-1) + 0 - 1 = -1$$</p></li><li><p data-path-to-node=\"32,3,0\">At $(-1, 0)$:</p><p>$$f(-1, 0) = (-1)(0) - 1 + 0 = -1$$</p></li></ol><p data-path-to-node=\"33\">Comparing all the values, the smallest possible value is exactly <b data-index-in-node=\"65\" data-path-to-node=\"33\">$\\boxed{\\mathbf{-1}}$</b>.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/530867/go-classes-dpp-gate-cs-da-calculus-%26-optimization-constrained-optimization\" target=\"_blank\">GATE Overflow #530867</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"111\" data-start=\"0\">Choose the largest interval of $x$ on which the function $f(x)=x^2\\ln x$, where $x&gt;0$, is convex.</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$(0,e^{-3/2})$<br/></span>",
                "<span style=\"display: inline;\">$[e^{-3/2},\\infty)$<br/></span>",
                "<span style=\"display: inline;\">$(0,\\infty)$<br/></span>",
                "<span style=\"display: inline;\">$[e^{-1},\\infty)$</span>"
            ],
            "answer": "B",
            "solution": "<div class=\"solution-content\"><a name=\"533317\"></a><div itemprop=\"text\"><p>Given, f(x) = x^{2}lnx , where x&gt;0 is convex</p><p><strong> points to remember</strong></p><ul><li><strong>f ' (x) &gt; 0 →→ function is increasing </strong></li><li><strong>f '' (0) &gt; 0 →→ convex</strong></li><li><strong>f ' (0) &lt; 0 →→ function is decreasing </strong></li><li><b>f \"(0) &lt; 0 →→ concave</b></li></ul><p><b>NOW, </b>f ' (x) = 2xlnx + x2x2(1/x)</p><p> = 2xlnx + x</p><p> f \" (x) = 2lnx + 2x(1/x) + 1 </p><p> = 2lnx + 2 + 1</p><p> = 2lnx + 3</p><p><strong>from the question given, a convex function, we do f \" (x) &gt; 0 (point 2)</strong></p><p> f \" (x) &gt; 0</p><p> 2lnx + 3 &gt; 0</p><p> 2lnx &gt; -3</p><p> lnx &gt; -3/2</p><p> e^lnx &gt; e^(-3/2)</p><p> x &gt; e^(-3/2) </p><p> Here, e ^(-3/2) is positive as per the question </p><p>Hence,[e^(-3/2) , ∞∞)</p><p><strong>option B</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/530861/go-classes-dpp-gate-cs-da-calculus-%26-optimization-convexity-testing\" target=\"_blank\">GATE Overflow #530861</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"394\" data-start=\"111\">A company splits $12$ research hours between two tasks. If $x$ hours are spent on task A, then $12-x$ hours are spent on task B. The total difficulty score is $D(x)=x^2+(12-x)^2+\\frac{16}{x}+\\frac{16}{12-x}$, where $0&lt;x&lt;12$. Find the value of $x$ that minimizes $D(x)$.</p></div></span>",
            "image": "",
            "options": [],
            "answer": "6",
            "solution": "<div class=\"solution-content\"><a name=\"530865\"></a><div itemprop=\"text\"><p data-path-to-node=\"23\">Given : </p><p data-path-to-node=\"23\">$$D(x) = x^2 + (12 - x)^2 + 16x^{-1} + 16(12 - x)^{-1} $$</p><p data-path-to-node=\"23\"><span data-index-in-node=\"0\" data-path-to-node=\"23\"><b>Find the first derivative:</b></span></p><p>$$\\Rightarrow D'(x) = \\frac{d}{dx} \\left[ x^2 + (12 - x)^2 + 16x^{-1} + 16(12 - x)^{-1} \\right]$$</p><p data-path-to-node=\"25\">Apply the chain rule and power rule:</p><p>$$\\Rightarrow D'(x) = 2x + 2(12 - x)(-1) - 16x^{-2} - 16(12 - x)^{-2}(-1)$$</p><p>$$\\Rightarrow D'(x) = 2x - 24 + 2x - \\frac{16}{x^2} + \\frac{16}{(12 - x)^2}$$</p><p>$$\\Rightarrow D'(x) = 4x - 24 - \\frac{16}{x^2} + \\frac{16}{(12 - x)^2}$$</p><p data-path-to-node=\"29\"><b data-index-in-node=\"0\" data-path-to-node=\"29\">Set $D'(x) = 0$ to find critical points:</b></p><p>$$\\Rightarrow 4(x - 6) - 16 \\left( \\frac{1}{x^2} - \\frac{1}{(12 - x)^2} \\right) = 0$$</p><p data-path-to-node=\"31\">$$\\Rightarrow 4(x - 6) - 16 \\left( \\frac{(12 - x)^2 - x^2}{x^2(12 - x)^2} \\right) = 0$$</p><p data-path-to-node=\"33\">$$\\Rightarrow 4(x - 6) - 16 \\left( \\frac{144 - 24x}{x^2(12 - x)^2} \\right) = 0$$</p><p data-path-to-node=\"35\">$$\\Rightarrow 4(x - 6) - 16 \\left( \\frac{-24(x - 6)}{x^2(12 - x)^2} \\right) = 0$$</p><p>$$\\Rightarrow 4(x - 6) + \\frac{384(x - 6)}{x^2(12 - x)^2} = 0$$</p><p data-path-to-node=\"38\"><b data-index-in-node=\"0\" data-path-to-node=\"38\">Solve for $x$:</b></p><p data-path-to-node=\"38\">Factor out the common term $4(x - 6)$:</p><p>$$\\Rightarrow 4(x - 6) \\left[ 1 + \\frac{96}{x^2(12 - x)^2} \\right] = 0$$</p><p data-path-to-node=\"40\">For this equation to be true, one of the factors must be zero.</p><p data-path-to-node=\"40\">Let's look at the second factor: $\\left[ 1 + \\frac{96}{x^2(12 - x)^2} \\right]$. Since $x$ is bounded between $0$ and $12$, $x^2(12-x)^2$ is always positive. Therefore, $1$ plus a positive number will always be greater than $0$. This part can never equal zero.</p><p data-path-to-node=\"41\">This leaves us with the only real solution:</p><p>$$\\Rightarrow 4(x - 6) = 0$$</p><p>$$\\boxed{\\therefore x = 6}$$</p><p data-path-to-node=\"44\">You should spend $\\mathbf{6}$<b data-index-in-node=\"17\" data-path-to-node=\"44\"> hours</b> on task A to minimize the difficulty score.</p><p data-path-to-node=\"44\"> </p><p> </p><p>$\\underline{\\textbf{Alternative Method :}}$ </p><p data-path-to-node=\"44\">We have $D(x)=x^2+(12-x)^2+\\frac{16}{x}+\\frac{16}{12-x}$. </p><p data-path-to-node=\"44\">The function is symmetric about $x=6$, because replacing $x$ by $12-x$ gives the same function. </p><p data-path-to-node=\"44\">Also, each term is convex on $0&lt;x&lt;12$, so $D(x)$ is convex. </p><p data-path-to-node=\"44\">Therefore, the symmetric point $x=6$ gives the global minimum. </p><p data-path-to-node=\"44\">Thus the difficulty score is minimized when $\\boxed{x=6}$.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/530859/go-classes-dpp-gate-cs-da-calculus-%26-optimization-convex-optimization\" target=\"_blank\">GATE Overflow #530859</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\">A research team has $60$ hours to divide between technical validation and market validation. If $x$ hours are spent on technical validation, then $60-x$ hours are spent on market validation. The project success score is modeled by $S(x)=x^2(60-x)^3$, where $0&lt;x&lt;60$. How many hours should be spent on technical validation to maximize the success score?</div></span>",
            "image": "",
            "options": [],
            "answer": "530858",
            "solution": "<div class=\"solution-content\"><a name=\"530860\"></a><div itemprop=\"text\"><p data-path-to-node=\"2\">We are given the success score function:</p><p>$$S(x) = x^2(60 - x)^3$$</p><p data-path-to-node=\"4\">where $0 &lt; x &lt; 60$.</p><p data-path-to-node=\"5\">To maximize this function, we need to find its first derivative, $S'(x)$, set it to zero to find the critical points, and determine which one yields the maximum.</p><p data-path-to-node=\"6\"><b data-index-in-node=\"0\" data-path-to-node=\"6\">1. Find the first derivative using the Product Rule:</b></p><p data-path-to-node=\"6\">The product rule states that $\\frac{d}{dx}[u \\cdot v] = u'v + uv'$.</p><p data-path-to-node=\"6\">Let $u = x^2$ and $v = (60 - x)^3$.</p><ul data-path-to-node=\"7\"><li><p data-path-to-node=\"7,0,0\">$u' = 2x$</p></li><li><p data-path-to-node=\"7,1,0\">$v' = 3(60 - x)^2 \\cdot (-1) = -3(60 - x)^2$ (using the chain rule)</p></li></ul><p data-path-to-node=\"8\">Now, apply the product rule:</p><p>$$S'(x) = (2x)(60 - x)^3 + (x^2)[-3(60 - x)^2]$$</p><p>$$S'(x) = 2x(60 - x)^3 - 3x^2(60 - x)^2$$</p><p data-path-to-node=\"11\"><b data-index-in-node=\"0\" data-path-to-node=\"11\">2. Factor the derivative and set it to zero:</b></p><p data-path-to-node=\"11\">Factor out the common terms, which are $x$ and $(60 - x)^2$:</p><p>$$S'(x) = x(60 - x)^2 \\cdot [2(60 - x) - 3x]$$</p><p>$$S'(x) = x(60 - x)^2 \\cdot [120 - 2x - 3x]$$</p><p>$$S'(x) = x(60 - x)^2 \\cdot (120 - 5x)$$</p><p data-path-to-node=\"15\">Set $S'(x) = 0$ to find critical points:</p><ul data-path-to-node=\"16\"><li><p data-path-to-node=\"16,0,0\">$x = 0$</p></li><li><p data-path-to-node=\"16,1,0\">$(60 - x)^2 = 0 \\Rightarrow x = 60$</p></li><li><p data-path-to-node=\"16,2,0\">$120 - 5x = 0 \\Rightarrow 5x = 120 \\Rightarrow x = 24$</p></li></ul><p data-path-to-node=\"17\"><b data-index-in-node=\"0\" data-path-to-node=\"17\">3. Identify the maximum:</b></p><p data-path-to-node=\"17\">The problem states $0 &lt; x &lt; 60$, so we only consider $x = 24$.</p><p data-path-to-node=\"17\">To confirm it's a maximum, we can look at the sign of $S'(x)$ around $x = 24$:</p><ul data-path-to-node=\"18\"><li><p data-path-to-node=\"18,0,0\">For $x &lt; 24$ (e.g., $x = 20$), $(120 - 5(20)) = 20$, which is positive. The function is increasing.</p></li><li><p data-path-to-node=\"18,1,0\">For $x &gt; 24$ (e.g., $x = 30$), $(120 - 5(30)) = -30$, which is negative. The function is decreasing.</p></li></ul><p data-path-to-node=\"19\">Since the function changes from increasing to decreasing at $x = \\mathbf{24}$, it represents a local maximum.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/530858/go-classes-dpp-gate-cs-da-calculus-%26-optimization-maxima\" target=\"_blank\">GATE Overflow #530858</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"184\" data-start=\"0\">A company models its total production cost by $C(x)=x^2+\\frac{16}{x}$, where $x&gt;0$ is the number of units produced in hundreds. Find the minimum possible value of $C(x)$.</p></div></span>",
            "image": "",
            "options": [],
            "answer": "2",
            "solution": "<div class=\"solution-content\"><a name=\"530857\"></a><div itemprop=\"text\"><p data-path-to-node=\"2\">We are given the cost function:</p><p>$$C(x) = x^2 + \\frac{16}{x}$$</p><p data-path-to-node=\"4\">To find the minimum value, we need to find the first derivative of the function, set it to zero to find the critical points, and then verify it's a minimum.</p><p data-path-to-node=\"5\"><b data-index-in-node=\"0\" data-path-to-node=\"5\">1. Find the first derivative, $C'(x)$:</b></p><p>$$C'(x) = \\frac{d}{dx} \\left(x^2 + 16x^{-1}\\right)$$</p><p>$$\\Rightarrow C'(x) = 2x - 16x^{-2}$$</p><p>$$\\Rightarrow C'(x) = 2x - \\frac{16}{x^2}$$</p><p data-path-to-node=\"9\"><b data-index-in-node=\"0\" data-path-to-node=\"9\">2. Set $C'(x) = 0$ to find the critical point:</b></p><p>$$\\Rightarrow 2x - \\frac{16}{x^2} = 0$$</p><p>$$\\Rightarrow 2x = \\frac{16}{x^2}$$</p><p data-path-to-node=\"12\">$$\\Rightarrow x^3 = 8$$</p><p data-path-to-node=\"15\">Taking the cube root of both sides (and since $x &gt; 0$):</p><p>$$\\Rightarrow x = 2$$</p><p data-path-to-node=\"17\"><b data-index-in-node=\"0\" data-path-to-node=\"17\">3. Verify it is a minimum using the second derivative, $C''(x)$:</b></p><p>$$C''(x) = \\frac{d}{dx} \\left(2x - 16x^{-2}\\right)$$</p><p>$$\\Rightarrow C''(x) = 2 - (-2)(16)x^{-3}$$</p><p>$$\\Rightarrow C''(x) = 2 + \\frac{32}{x^3}$$</p><p data-path-to-node=\"21\">Substitute $x = 2$:</p><p>$$\\Rightarrow C''(2) = 2 + \\frac{32}{2^3} = 2 + \\frac{32}{8} = 2 + 4 = 6$$</p><p data-path-to-node=\"23\">Since $C''(2) &gt; 0$, the function has a local minimum at $x = 2$.</p><p data-path-to-node=\"24\"><b data-index-in-node=\"0\" data-path-to-node=\"24\">4. Calculate the minimum value:</b></p><p data-path-to-node=\"24\">Substitute $x = 2$ back into the original cost function:</p><p>$$\\Rightarrow C(2) = (2)^2 + \\frac{16}{2} = 4 + 8 $$</p><p>$$\\boxed{\\therefore C(2)= 12}$$</p><p> </p><p> </p><p>$\\underline{\\textbf{Alternative Method :}}$ </p><p>Using the AM-GM Inequality :</p><p data-path-to-node=\"29\">The Arithmetic Mean-Geometric Mean (AM-GM) inequality states that for non-negative real numbers, the arithmetic mean is always greater than or equal to the geometric mean.</p><p data-path-to-node=\"30\">To cancel out the $x$ variables when multiplying, we can strategically split the $\\frac{16}{x}$ term into two equal halves: $\\frac{8}{x}$ and $\\frac{8}{x}$.</p><p data-path-to-node=\"31\">Apply AM-GM to the three terms $x^2$, $\\frac{8}{x}$, and $\\frac{8}{x}$:</p><p>$$\\Rightarrow \\frac{x^2 + \\frac{8}{x} + \\frac{8}{x}}{3} \\geq \\sqrt[3]{x^2 \\cdot \\frac{8}{x} \\cdot \\frac{8}{x}}$$</p><p>$$\\Rightarrow \\frac{x^2 + \\frac{16}{x}}{3} \\geq \\sqrt[3]{64}$$</p><p>$$\\Rightarrow \\frac{C(x)}{3} \\geq 4$$</p><p>$$\\Rightarrow C(x) \\geq 12$$</p><p data-path-to-node=\"38\">The minimum possible value of $C(x)$ is $\\boxed{\\mathbf{12}}$.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/530856/go-classes-dpp-gate-cs-da-calculus-%26-optimization-minima\" target=\"_blank\">GATE Overflow #530856</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Determine the <strong>relative minimum value</strong> of the function:<br/><br/>\\begin{aligned}<br/>&amp;f(x)=x^3-6 x^2+5<br/>\\end{aligned}</p></div></span>",
            "image": "",
            "options": [],
            "answer": "64",
            "solution": "<div class=\"solution-content\"><a name=\"502568\"></a><div itemprop=\"text\"><p><strong>Find the First Derivative $\\left(f^{\\prime}(x)\\right)$ : </strong>We take the derivative of the function with respect to $x$ :</p><p>$$<br/>f^{\\prime}(x)=\\frac{d}{d x}\\left(x^3-6 x^2+5\\right)=3 x^2-12 x<br/>$$</p><p><br/><strong>Find the Critical Points:</strong> Set the first derivative equal to zero and solve for $x$ :</p><p>$$<br/>3 x^2-12 x=0<br/>$$</p><p><br/>Factor out $3 x$ :</p><p>$$<br/>3 x(x-4)=0<br/>$$</p><p><br/>The critical points are $x=0$ and $x=4$.<br/> </p><p><strong>Determine Minima/Maxima using the Second Derivative Test:</strong> We find the second derivative ( $f^{\\prime \\prime}(x)$ ) and evaluate it at each critical point.</p><p>$$<br/>f^{\\prime \\prime}(x)=\\frac{d}{d x}\\left(3 x^2-12 x\\right)=6 x-12<br/>$$</p><ul><li><strong> At $x=0$ :</strong></li></ul><p>$$<br/>f^{\\prime \\prime}(0)=6(0)-12=-12<br/>$$</p><p><br/> Since $f^{\\prime \\prime}(0)&lt;0$, the function has a <strong>relative maximum</strong> at $x=0$.<br/> </p><ul><li><strong>At $x=4$ :</strong></li></ul><p>$$<br/>f^{\\prime \\prime}(4)=6(4)-12=24-12=12<br/>$$</p><p><br/> Since $f^{\\prime \\prime}(4)&gt;0$, the function has a <strong>relative minimum</strong> at $x=4$.</p><p><br/>\\begin{gathered}<br/>f(4)=(4)^3-6(4)^2+5 \\\\\\\\<br/>f(4)=64-6(16)+5 \\\\\\\\<br/>f(4)=64-96+5 \\\\\\\\<br/>f(4)=-27<br/>\\end{gathered}</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/502567/go-classes-dpp-calculus-%26-optimization-minima\" target=\"_blank\">GATE Overflow #502567</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Find the minimum value of the function $f(x, y)=4 x^2+10 y^2$ on the disk $x^2+y^2 \\leq 4$.</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$4$<br/></span>",
                "<span style=\"display: inline;\">$16$<br/></span>",
                "<span style=\"display: inline;\">$0$<br/></span>",
                "<span style=\"display: inline;\">$-4$</span>"
            ],
            "answer": "C",
            "solution": "<div class=\"solution-content\"><a name=\"502384\"></a><div itemprop=\"text\"><p>The function is $f(x, y)=4 x^2+10 y^2$, and the closed domain is the disk $D: x^2+y^2 \\leq 4$. We must check for extreme values in the interior of the disk and on its boundary.</p><p><br/><strong>Part 1: Interior of the Disk</strong> $(x^2+y^2&lt;4)$<br/><br/>We find the critical points by setting the partial derivatives to zero:</p><p>$$<br/>\\begin{aligned}<br/>&amp; \\frac{\\partial f}{\\partial x}=8 x \\\\\\\\<br/>&amp; \\frac{\\partial f}{\\partial y}=20 y<br/>\\end{aligned}<br/>$$</p><p><br/>Setting them equal to zero:</p><p>$$<br/>\\begin{aligned}<br/>&amp; 8 x=0 \\longrightarrow z=0 \\\\\\\\<br/>&amp; 20 y=0 \\longrightarrow y=0<br/>\\end{aligned}<br/>$$</p><p><br/>The only critical point is $(0,0)$, which is inside the disk.</p><p>$$<br/>f(0,0)=4(0)^2+10(0)^2=0<br/>$$</p><p> </p><p><strong>Part 2: Boundary of the Disk</strong> $\\left(x^2+y^2=4\\right)$<br/><br/>We can use substitution by noting that $x^2=4-y^2$ on the boundary. The function becomes a function of $y$ only:</p><p>$$<br/>\\begin{gathered}<br/>h(y)=4\\left(4-y^2\\right)+10 y^2 \\\\\\\\<br/>h(y)=16-4 y^2+10 y^2=16+6 y^2<br/>\\end{gathered}<br/>$$</p><p><br/>Since $x^2 \\geq 0$, the domain for $y^2$ is $0 \\leq y^2 \\leq 4$.<br/><br/><strong>1. Minimum of $h(y)$ on the boundary:</strong> This occurs when $y^2$ is minimized, i.e., $y^2=0$ (or $y=$ 0 ).</p><ul><li>If $y=0$, then $x^2=4$, so $x= \\pm 2$.<br/> </li><li>$f( \\pm 2,0)=16+6(0)=16$.</li></ul><p><strong>2. Maximum of $h(y)$ on the boundary:</strong> This occurs when $y^2$ is maximized, i.e., $y^2=4$ (or $y= \\pm 2$ ).</p><ul><li>If $y= \\pm 2$, then $x^2=4-4=0$, so $x=0$.<br/> </li><li>$f(0, \\pm 2)=16+6(4)=16+24=40$.<br/> </li></ul><p>We compare all candidate values: $0,16,40$.</p><ul><li><strong>Minimum Value:</strong> $0$<br/> </li><li><strong>Maximum Value:</strong> $40$<br/><br/> </li></ul><p><strong>Second approach: using langrangian multiplier</strong></p><p>At this point we proceed with Lagrange Multipliers and we treat the constraint as an equality instead of the inequality. We only need to deal with the inequality when finding the critical points.<br/><br/>So, here is the system of equations that we need to solve.</p><p>$$<br/>\\begin{aligned}<br/>8 x &amp; =2 \\lambda x \\\\\\\\<br/>20 y &amp; =2 \\lambda y \\\\\\\\<br/>x^2+y^2 &amp; =4<br/>\\end{aligned}<br/>$$</p><p><br/>From the first equation we get,</p><p>$$<br/>2 x(4-\\lambda)=0 \\quad \\Rightarrow \\quad x=0 \\text { or } \\lambda=4<br/>$$</p><p><br/>If we have $x=0$ then the constraint gives us $y= \\pm 2$.<br/><br/>If we have $\\lambda=4$ the second equation gives us,</p><p>$$<br/>20 y=8 y \\quad \\Rightarrow \\quad y=0<br/>$$</p><p><br/>The constraint then tells us that $x= \\pm 2$.</p><p>If we'd performed a similar analysis on the second equation we would arrive at the same points.<br/><br/>So, Lagrange Multipliers gives us four points to check: $(0,2),(0,-2),(2,0)$, and $(-2,0)$.<br/><br/>To find the maximum and minimum we need to simply plug these four points along with the critical point in the function.</p><p>$$<br/>\\begin{array}{ll}<br/>f(0,0)=0 &amp; \\text { Minimum } \\\\\\\\<br/>f(2,0)=f(-2,0)=16 &amp; \\\\\\\\<br/>f(0,2)=f(0,-2)=40 &amp; \\text { Maximum }<br/>\\end{array}<br/>$$</p><p><br/><strong>Option C is correct</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/502382/go-classes-dpp-calculus-%26-optimization-constrained-optimization\" target=\"_blank\">GATE Overflow #502382</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Find the <strong>maximum</strong> value of the function $f(x, y)=5 x-3 y$ subject to the constraint $x^2+ y^2=136$.</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$136$<br/></span>",
                "<span style=\"display: inline;\">$-68$<br/></span>",
                "<span style=\"display: inline;\">$68$<br/></span>",
                "<span style=\"display: inline;\">$34$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"502370\"></a><div itemprop=\"text\"><p>The problem is to maximize $f(x, y)=5 x-3 y$ subject to $g(x, y)=x^2+y^2-136=0$.<br/> </p><p><strong>Set up the Lagrange Multiplier Equations</strong><br/> </p><p>The method requires setting $\\nabla f=\\lambda \\nabla g$.<br/> </p><p><strong>Calculate the gradients:</strong></p><p>$$<br/>\\begin{aligned}<br/>&amp; \\nabla f=\\left\\langle\\frac{\\partial f}{\\partial x}, \\frac{\\partial f}{\\partial y}\\right\\rangle=\\langle 5,-3\\rangle \\\\\\\\<br/>&amp; \\nabla g=\\left\\langle\\frac{\\partial g}{\\partial x}, \\frac{\\partial g}{\\partial y}\\right\\rangle=\\langle 2 x, 2 y\\rangle<br/>\\end{aligned}<br/>$$</p><p><br/><strong>Form the system of equations:</strong></p><p>$$<br/>\\begin{gathered}<br/>5=\\lambda(2 x) \\quad(\\text { Eq. } 1) \\\\\\\\<br/>-3=\\lambda(2 y) \\quad(\\text { Eq. } 2) \\\\\\\\<br/>x^2+y^2=136 \\quad(\\text { Eq. } 3)<br/>\\end{gathered}<br/>$$</p><p><br/>From Eq. 1: $x=\\frac{5}{2 \\lambda}$ From Eq. 2: $y=\\frac{-3}{2 \\lambda}$<br/> </p><p><strong>Substitute $x$ and $y$ into the Constraint Equation (Eq. 3)</strong></p><p>$$<br/>\\begin{gathered}<br/>\\left(\\frac{5}{2 \\lambda}\\right)^2+\\left(\\frac{-3}{2 \\lambda}\\right)^2=136 \\\\\\\\<br/>\\frac{25}{4 \\lambda^2}+\\frac{9}{4 \\lambda^2}=136 \\\\\\\\<br/>\\frac{34}{4 \\lambda^2}=136<br/>\\end{gathered}<br/>$$</p><p><br/>Solve for $\\lambda^2$ :</p><p>$$<br/>\\begin{gathered}<br/>34=136 \\cdot 4 \\lambda^2 \\\\\\\\<br/>34=54 \\lambda^2 \\\\\\\\<br/>\\lambda^2=\\frac{34}{544}=\\frac{1}{16} \\\\\\\\<br/>\\lambda= \\pm \\frac{1}{4}<br/>\\end{gathered}<br/>$$</p><p> </p><p><strong>Case 1</strong>: $\\lambda=\\frac{1}{4}$</p><p>$$<br/>\\begin{aligned}<br/>&amp; x=\\frac{5}{2\\left(\\frac{1}{4}\\right)}=\\frac{5}{\\frac{1}{2}}=10 \\\\\\\\<br/>&amp; y=\\frac{-3}{2\\left(\\frac{1}{4}\\right)}-\\frac{-3}{\\frac{1}{2}}=-6<br/>\\end{aligned}<br/>$$</p><p><br/>Critical Point $1:(10,-6)$<br/><br/><br/><strong>Case 2: </strong>$\\lambda=-\\frac{1}{4}$</p><p>$$<br/>\\begin{gathered}<br/>x=\\frac{5}{2\\left(-\\frac{1}{4}\\right)}=\\frac{5}{-\\frac{1}{2}}=-10 \\\\\\\\<br/>y=\\frac{-3}{2\\left(-\\frac{1}{4}\\right)}=\\frac{-3}{-\\frac{1}{2}}=6<br/>\\end{gathered}<br/>$$</p><p><br/>Critical Point 2: $(-10,6)$<br/> </p><ul><li><strong>Point</strong> $(10,-6)$:</li></ul><p>$$<br/>f(10,-6)=5(10)-3(-6)=50+18=68<br/>$$</p><ul><li><strong>Point</strong> $(-10,6)$ :</li></ul><p>$$<br/>f(-10,6)=5(-10)-3(6)=-50-18=-68<br/>$$</p><p><br/><br/>The <strong>Maximum</strong> value is $\\mathbf{68.}$</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/502367/go-classes-dpp-calculus-%26-optimization-constrained-optimization\" target=\"_blank\">GATE Overflow #502367</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>We want to construct a box whose base length is $3$ times the base width. The material used to build the top and bottom cost $\\$ 10 / \\mathrm{ft}^2$ and the material used to build the sides cost $\\$ 6 / \\mathrm{ft}^2$. If the box must have a volume of $50 ~\\mathrm{ft}^3$ determine the dimensions that will minimize the cost to build the box.</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\mathrm{1.89 ~feet, 5.66 ~feet, 4.72 ~feet}$<br/></span>",
                "<span style=\"display: inline;\">$\\mathrm{2.50 ~feet, 7.50 ~feet, 2.67 ~feet}$<br/></span>",
                "<span style=\"display: inline;\">$\\mathrm{1.50 ~feet, 4.50 ~feet, 7.41 ~feet}$<br/></span>",
                "<span style=\"display: inline;\">$\\mathrm{2.00 ~feet, 6.00 ~feet, 4.17 ~feet}$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"502198\"></a><div itemprop=\"text\"><ul><li>$w$ : the base <strong>width</strong><br/> </li><li>$l$ : the base <strong>length</strong><br/> </li><li>$h$ : the <strong>height</strong><br/> </li></ul><p><strong>1. Constraints and Relationships</strong></p><ul><li><strong>Length-Width Relationship:</strong> The base length is $3$ times the base width.</li></ul><p>$$<br/>l=3 w<br/>$$</p><ul><li><strong>Volume Constraint:</strong> The volume $V$ must be $50 \\mathrm{ft}^3$.<br/> </li></ul><p>$$<br/>\\begin{gathered}<br/>V=l w h \\\\\\\\<br/>50=(3 w) w h \\\\\\\\<br/>50=3 w^2 h \\quad(\\text { Equation } 1)<br/>\\end{gathered}<br/>$$</p><p> </p><p><strong>2. Cost Function (Objective Function)</strong></p><p>The total cost $C$ is the sum of the cost of the top/bottom material and the cost of the side material.</p><ul><li><strong>Area of Top and Bottom:</strong> $2 \\times(l \\cdot w)=2(3 w-w)=6 w^2$<br/> <ul><li>Cost Rate: $810 / \\mathrm{ft}^2$<br/> </li><li>Cost for Top/Bottom: $10 \\times\\left(6 w^2\\right)=60 w^2$<br/> </li></ul></li><li>Area of the Sides (Lateral Area): $2 \\times(l \\cdot h)+2 \\times(w \\cdot h)=2(3 w h)+2(w h)=8 u h$<br/> <ul><li>Cost Rate: $86 / \\mathrm{ft}^2$<br/> </li><li>Cost for Sides: $6 \\times(8 w h)=48 w h$</li></ul></li></ul><p><br/>The total cost function $C$ is:</p><p>$$<br/>C=60 w^2+48 w h \\quad \\text { (Equation 2) }<br/>$$</p><p><br/><br/><br/>To find the minimum cost using differentiation, we must express the Cost function $C$ in terms of only one variable, $w$.<br/><br/><strong>1. Solve Equation 1 for $h:$</strong></p><p>$$<br/>h=\\frac{50}{3 w^2}<br/>$$</p><p><br/><strong>2. Substitute this expression for $h$ into the Cost Equation 2:</strong></p><p>$$<br/>C(w)=60 w^2+48 w\\left(\\frac{50}{3 w^2}\\right)<br/>$$</p><p><br/><strong>3. Simplify the expression:</strong></p><p>$$<br/>\\begin{aligned}<br/>&amp; C(w)=60 w^2+\\frac{48 \\times 50}{3 w} \\\\\\\\<br/>&amp; C(w)=60 w^2+\\frac{2400}{3 w} \\\\\\\\<br/>&amp; C(w)=60 w^2+\\frac{800}{w} \\\\\\\\<br/>&amp; C(w)=60 w^2+800 w^{-1}<br/>\\end{aligned}<br/>$$</p><p><br/> </p><p>We find the minimum cost by setting the <strong>first derivative</strong> of the cost function equal to zero.</p><p>1.<strong> Find the derivative of $C(w)$ with respect to $w$ :</strong></p><p>$$<br/>\\begin{gathered}<br/>\\frac{d C}{d w}=120 w-800 w^{-2} \\\\\\\\<br/>\\frac{d C}{d w}=120 w-\\frac{800}{w^2}<br/>\\end{gathered}<br/>$$</p><p>2. <strong>Set the derivative to zero and solve for $w$</strong> (the critical point):</p><p>$$<br/>\\begin{gathered}<br/>0=120 w-\\frac{800}{w^2} \\\\\\\\<br/>120 w=\\frac{800}{w^2} \\\\\\\\<br/>120 w^3=800 \\\\\\\\<br/>w^3=\\frac{800}{120} \\\\\\\\<br/>w^3=\\frac{80}{12} \\\\\\\\<br/>w^3=\\frac{20}{3} \\\\\\\\<br/>w=\\sqrt[3]{\\frac{20}{3}} \\approx 1.886 \\text { feet }<br/>\\end{gathered}<br/>$$<br/> </p><p>3. <strong>Confirm the minimum</strong> (Optional): The second derivative $\\frac{d^2 C}{d w^2}=120+1600 w^{-3}$. Since $w$ must be positive, the second derivative is positive, confirming that this value of $w$ is a minimum.</p><p>\\begin{gathered}<br/>l=3 w \\\\\\\\<br/>l=3 \\sqrt[3]{\\frac{20}{3}} \\\\\\\\<br/>\\mathbf{l}=\\sqrt[3]{\\frac{\\mathbf{2 7} \\times \\mathbf{2 0}}{\\mathbf{3}}}=\\sqrt[3]{\\mathbf{9} \\times \\mathbf{2 0}}=\\sqrt[3]{\\mathbf{1 8 0}} \\mathrm{ft} \\quad(\\approx \\mathbf{5 . 6 5 9 ~ f t}) \\\\\\\\<br/>h=\\frac{50}{3 w^2} \\\\\\\\<br/>h=\\frac{50}{3\\left(\\sqrt[3]{\\frac{20}{3}}\\right)^2} \\\\\\\\<br/>h=\\frac{50}{3\\left(\\frac{20}{3}\\right)^{2 / 3}}(\\approx \\mathbf{4 . 7 1 5 ~ f t})<br/>\\end{gathered}</p><p> </p><p><strong>WIDTH</strong> $(w): \\sqrt[3]{\\frac{20}{3}} ~\\text{feet} \\approx \\mathbf{1.89 ~feet}$<br/><br/><strong>LENGTH</strong> $(l) : \\sqrt[3]{180} ~\\text{feet} \\approx \\mathbf{5.66 ~feet}$ ​​​​​​​​​​​​​​<br/><br/><strong>HEIGHT</strong> $(h): \\frac{50}{3\\left(\\sqrt[3]{\\frac{21}{3}}\\right)^2} ~\\text{feet} \\approx \\mathbf{4.72 ~feet}$ ​​​​​​​​​​​​​​<br/><br/><br/>Option A is correct</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/502195/go-classes-dpp-calculus-%26-optimization-minima\" target=\"_blank\">GATE Overflow #502195</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>We need to enclose a rectangular field with a fence. We have $\\mathrm{500 ~feet}$ of fencing material and a building is on one side of the field and so won't need any fencing. Determine the dimensions of the field that will enclose the largest area.</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\mathrm{125 ~feet \\times ~250 ~feet}$<br/></span>",
                "<span style=\"display: inline;\">$\\mathrm{100 ~feet \\times ~300 ~feet}$<br/></span>",
                "<span style=\"display: inline;\">$\\mathrm{150 ~feet \\times ~200 ~feet}$<br/></span>",
                "<span style=\"display: inline;\">$\\mathrm{160 ~feet \\times ~180 ~feet}$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"502193\"></a><div itemprop=\"text\"><p>The total amount of fencing available is $\\mathbf{500 ~feet}$ . This represents the perimeter $P$ of the three fenced sides:</p><p>$$<br/>\\begin{gathered}<br/>P=2 x+y \\\\\\\\<br/>500=2 x+y \\quad(\\text { Equation } 1) \\\\\\\\<br/>y=500-2 x<br/>\\end{gathered}<br/>$$</p><p><br/>The area $A$ of the rectangular field is:</p><p>$$<br/>A=x y \\quad \\text { (Equation 2) }<br/>$$</p><p><br/>$$<br/>\\begin{aligned}<br/>&amp; A(x)=x(500-2 x) \\\\\\\\<br/>&amp; A(x)=500 x-2 x^2<br/>\\end{aligned}<br/>$$</p><p> </p><p>The maximum area occurs at the vertex of the parabola represented by $A(x)$, which we can find by setting the <strong>first derivative</strong> of the area function to zero.<br/><br/>1.<strong> Find the derivative of $A(x)$ with respect to $x$ :</strong></p><p>$$<br/>\\frac{d A}{d x}=500-4 x<br/>$$</p><p>2. <strong>Set the derivative to zero and solve for $x$</strong> (to find the critical point):</p><p>$$<br/>\\begin{gathered}<br/>0=500-4 x \\\\\\\\<br/>4 x=500 \\\\\\\\<br/>x=\\frac{500}{4} \\\\\\\\<br/>\\mathrm{x}=125 \\text { feet }<br/>\\end{gathered}<br/>$$</p><p><br/><strong>Confirm the maximum :</strong><br/><br/>The second derivative is $\\frac{d^2 A}{d x^2}=-4$.<br/><br/>Since the second derivative is negative, the function is concave down, confirming that $x=125$ is a <strong>maximum.</strong></p><p>$$<br/>\\begin{gathered}<br/>y=500-2 x \\\\\\\\<br/>y=500-2(125) \\\\\\\\<br/>y=500-250 \\\\\\\\<br/>\\mathbf{y}=\\mathbf{2 5 0} \\text { feet }<br/>\\end{gathered}<br/>$$</p><p><br/>The dimensions of the field that will enclose the largest area are $\\mathbf{1 2 5}$ feet by $\\mathbf{2 5 0}$ feet.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/502192/go-classes-dpp-calculus-%26-optimization-maxima\" target=\"_blank\">GATE Overflow #502192</a></small></div>"
        }
    ]
});

registerTest({
    "name": "DPP 16 - Engineering Mathematics (Optimization & Convexity - Part 4)",
    "testLabel": "DPP 16",
    "testType": "DPP",
    "bracket": "Optimization & Convexity - Part 4",
    "subject": "em",
    "series": "cse-dpp-2027",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 11,
    "topicsCovered": "Optimization & Convexity (Practice Set 4)",
    "questions": [
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\">Consider the function $f(x)=x^3-x^2-x+5$, <br/> <br/> At which positive value of $x$ is $f(x)$ minimum?</div></span>",
            "image": "",
            "options": [],
            "answer": "1",
            "solution": "<div class=\"solution-content\"><a name=\"501810\"></a><div itemprop=\"text\"><p><strong>First Derivative Test (Finding Critical Points)</strong></p><p>First, find the first derivative, $f^{\\prime}(x)$, and set it to zero to find the critical points.<br/><br/><br/><strong>A. Calculate $f^{\\prime}(x)$</strong></p><p>$$<br/>\\begin{gathered}<br/>f(x)=x^3-x^2-x+5 \\\\\\\\<br/>f^{\\prime}(x)=\\frac{d}{d x}\\left(x^3-x^2-x+5\\right)=3 x^2-2 x-1<br/>\\end{gathered}<br/>$$</p><p> </p><p><strong>B. Solve for Critical Points</strong><br/> </p><p>Set $f^{\\prime}(x)=0$ and solve the resulting quadratic equation:</p><p>$$<br/>3 x^2-2 x-1=0<br/>$$</p><p><br/>We can solve this by factoring or using the quadratic formula. By factoring:</p><p>$$<br/>(3 x+1)(x-1)=0<br/>$$</p><p><br/>This gives two critical points:<br/> </p><ol><li> $3 x+1=0 \\Longrightarrow 3 x=-1 \\Longrightarrow x=-\\frac{1}{3}$<br/><br/> </li><li> $x-1=0 \\Longrightarrow x=1$</li></ol><div> </div><div><p>Next, we use the Second Derivative Test to determine if each critical point is a local maximum or a local minimum.</p><p><br/><strong>A. Calculate $f^{\\prime \\prime}(x)$</strong></p><p>Find the second derivative by differentiating $f^{\\prime}(x)$ :</p><p>$$<br/>\\begin{gathered}<br/>f^{\\prime}(x)=3 x^2-2 x-1 \\\\\\\\<br/>f^{\\prime \\prime}(x)=\\frac{d}{d x}\\left(3 x^2-2 x-1\\right)=6 x-2<br/>\\end{gathered}<br/>$$<br/> </p><p><strong>B. Evaluate $f^{\\prime \\prime}(x)$ at the Critical Points</strong><br/> </p><ul><li><strong>For $x=-\\frac{1}{3}$ :</strong></li></ul><p>$$<br/>f^{\\prime \\prime}\\left(-\\frac{1}{3}\\right)=6\\left(-\\frac{1}{3}\\right)-2=-2-2=-4<br/>$$</p><p><br/>Since $f^{\\prime \\prime}\\left(-\\frac{1}{3}\\right)&lt;0$, the function has a <strong>Local Maximum</strong> at $x=-\\frac{1}{3}$.<br/> </p><ul><li><strong>For $x=1$ :</strong></li></ul><p>$$<br/>f^{\\prime \\prime}(1)=6(1)-2=6-2=4<br/>$$</p><p><br/>Since $f^{\\prime \\prime}(1)&gt;0$, the function has a <strong>Local Minimum</strong> at $x=1$.<br/> </p><p>The only positive critical value is $x=1$, and the second derivative test confirms it is a local minimum.</p><p><br/>The final answer is $\\mathbf{x}=\\mathbf{1}$.</p></div></div><br><br><small>Source: <a href=\"https://gateoverflow.in/501809/go-classes-dpp-calculus-%26-optimization-minima\" target=\"_blank\">GATE Overflow #501809</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Which of the following is an stationary point of the below function?</p><p>$$<br/>f(x, y)=8 x^2+12 x y+10 y^2<br/>$$</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$(0,0)$<br/></span>",
                "<span style=\"display: inline;\">$(0,1)$<br/></span>",
                "<span style=\"display: inline;\">$(1,0)$<br/></span>",
                "<span style=\"display: inline;\">$(1,1)$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"501488\"></a><div itemprop=\"text\"><p>A stationary point is found by setting both first-order partial derivatives equal to zero:</p><p>$$<br/>\\frac{\\partial f}{\\partial x}=0 \\quad \\text { and } \\quad \\frac{\\partial f}{\\partial y}=0<br/>$$</p><p><br/>The given function is $f(x, y)=8 x^2+12 x y+10 y^2$.<br/> </p><ul><li><strong>Partial derivative with respect to $x$</strong> (treat $y$ as a constant):</li></ul><p>$$<br/>\\begin{gathered}<br/>\\frac{\\partial f}{\\partial x}=\\frac{\\partial}{\\partial x}\\left(8 x^2+12 x y+10 y^2\\right) \\\\\\\\<br/>\\frac{\\partial f}{\\partial x}=16 x+12 y<br/>\\end{gathered}<br/>$$<br/> </p><ul><li><strong>Partial derivative with respect to $y$</strong> (treat $x$ as a constant):</li></ul><p>$$<br/>\\begin{gathered}<br/>\\frac{\\partial f}{\\partial y}=\\frac{\\partial}{\\partial y}\\left(8 x^2+12 x y+10 y^2\\right) \\\\\\\\<br/>\\frac{\\partial f}{\\partial y}=12 x+20 y<br/>\\end{gathered}<br/>$$</p><p> </p><p>Set both derivatives to zero to form a system of linear equations:</p><p>\\[<br/>\\begin{aligned}<br/>1.~~~~~\\quad &amp;16x + 12y = 0 \\\\\\\\<br/>2.~~~~~\\quad &amp;12x + 20y = 0<br/>\\end{aligned}<br/>\\]<br/><br/>Divide equation (1) by $4$ and equation (2) by $4$ to simplify:</p><p>$$<br/>\\begin{aligned}<br/>&amp; 4 x+3 y=0~~~~~~~~~~~(3)\\\\\\\\<br/>&amp; 3 x+5 y=0~~~~~~~~~~~(4)<br/>\\end{aligned}<br/>$$</p><p><br/>We can solve this system using the method of elimination. Multiply equation (3) by $3$ and equation (4) by $4$:</p><p>$$<br/>\\begin{aligned}<br/>&amp; 3 \\times(4 x+3 y=0) \\Longrightarrow 12 x+9 y=0 \\\\\\\\<br/>&amp; 4 \\times(3 x+5 y=0) \\Longrightarrow 12 x+20 y=0<br/>\\end{aligned}<br/>$$</p><p><br/>Subtract the first new equation from the second new equation:</p><p>$$<br/>\\begin{gathered}<br/>(12 x+20 y)-(12 x+9 y)=0-0 \\\\\\\\<br/>11 y=0 \\Longrightarrow \\mathbf{y}=\\mathbf{0}<br/>\\end{gathered}<br/>$$</p><p><br/>Substitute $y=0$ back into the simplified equation (3):</p><p>$$<br/>\\begin{gathered}<br/>4 x+3(0)=0 \\\\\\\\<br/>4 x=0 \\Longrightarrow \\mathbf{x}=\\mathbf{0}<br/>\\end{gathered}<br/>$$</p><p><br/>The only solution is $(x, y)=(\\mathbf{0}, \\mathbf{0})$, which corresponds to option $\\mathbf{A}$.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/501485/go-classes-dpp-calculus-%26-optimization-stationary-points\" target=\"_blank\">GATE Overflow #501485</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>$f(x, y)=x^2+y^2$<br/><br/>The stationary point of the function is a<br/> </p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">Minima<br/></span>",
                "<span style=\"display: inline;\">Maxima<br/></span>",
                "<span style=\"display: inline;\">Saddle<br/></span>",
                "<span style=\"display: inline;\">Can not be determined</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"501484\"></a><div itemprop=\"text\"><p>First, recall the first partial derivatives:</p><ul><li>$\\frac{\\partial f}{\\partial x}=2 x$<br/> </li><li>$\\frac{\\partial f}{\\partial y}=2 y$<br/> </li></ul><p>Now, calculate the second partial derivatives:</p><ul><li>$A=\\frac{\\partial^2 f}{\\partial x^2}=\\frac{\\partial}{\\partial x}(2 x)=2$<br/> </li><li>$B=\\frac{\\partial^2 f}{\\partial x \\partial y}=\\frac{\\partial}{\\partial y}(2 x)=0$<br/> </li><li>$C=\\frac{\\partial^2 f}{\\partial y^2}=\\frac{\\partial}{\\partial y}(2 y)=2$</li></ul><div><p><br/>The discriminant $D$ (also known as the Hessian determinant) is calculated as:</p><p>$$<br/>D=A C-B^2<br/>$$</p><p><br/>Substitute the values at the stationary point $(0,0)$ :</p><p>$$<br/>\\begin{gathered}<br/>D=(2)(2)-(0)^2 \\\\\\\\<br/>D=4<br/>\\end{gathered}<br/>$$</p><p><br/>Since the value of $D$ is a constant in this case, $D=4$ at all points, including $(0,0)$.<br/><br/><br/>The rules for the Second Derivative Test are:</p><ol><li>If $D&gt;0$ and $A&gt;0$, the point is a <strong>Local Minima.</strong><br/> </li><li>If $D&gt;0$ and $A&lt;0$, the point is a <strong>Local Maxima.</strong><br/> </li><li>If $D&lt;0$, the point is a <strong>Saddle Point.</strong><br/> </li><li>If $D=0$, the test is inconclusive.<br/> </li></ol><p>At the stationary point $(0,0)$ :</p><ul><li>$D=4$, which is $D&gt;0$.<br/> </li><li>$A=2$, which is $A&gt;0$.<br/> </li></ul><p>Since $D&gt;0$ and $A&gt;0$, the stationary point $(0,0)$ is a <strong>Local Minima.</strong></p></div></div><br><br><small>Source: <a href=\"https://gateoverflow.in/501482/go-classes-dpp-calculus-%26-optimization-stationary-points\" target=\"_blank\">GATE Overflow #501482</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>$$<br/>f(x, y)=x^2+y^2<br/>$$</p><p><br/>Which of the following is an stationary point of the above function?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$(0,0)$<br/></span>",
                "<span style=\"display: inline;\">$(0,1)$<br/></span>",
                "<span style=\"display: inline;\">$(1,0)$<br/></span>",
                "<span style=\"display: inline;\">$(1,1)$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"501481\"></a><div itemprop=\"text\"><p>A <strong>stationary point</strong> of a function of two variables, $f(x, y)$, is a point $\\left(x_0, y_0\\right)$ where both firstorder partial derivatives are equal to zero.</p><p>$$<br/>\\frac{\\partial f}{\\partial x}\\left(x_0, y_0\\right)=0 \\quad \\text { and } \\quad \\frac{\\partial f}{\\partial y}\\left(x_0, y_0\\right)=0<br/>$$</p><ol><li>$\\frac{\\partial f}{\\partial x}=2 x=0$<br/> </li><li>$\\frac{\\partial f}{\\partial y}=2 y=0$<br/> </li></ol><p>From equation (1), we get $x=0$. From equation (2), we get $y=0$.<br/> </p><p>The only point that satisfies both conditions is $\\mathbf{(0,0)}$.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/501479/go-classes-dpp-calculus-%26-optimization-stationary-points\" target=\"_blank\">GATE Overflow #501479</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Minimize the function $f=x_1^2+60 x_1+x_2^2$ subject to the constraints $g_1= x_1-80 \\geq 0$ and $g_2=x_1+x_2-120 \\geq 0$ using KKT conditions. Which of the following is the optimal solution set?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\left[x_1^*, x_2^*\\right]=[80,40]$<br/></span>",
                "<span style=\"display: inline;\">$\\left[x_1^*, x_2^*\\right]=[-80,-40]$<br/></span>",
                "<span style=\"display: inline;\">$\\left[x_1^*, x_2^*\\right]=[45,75]$<br/></span>",
                "<span style=\"display: inline;\">$\\left[x_1^*, x_2^*\\right]=[-45,-75]$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"501056\"></a><div itemprop=\"text\">The KKT conditions for the problem with multiple variables are given as follows:<br/> <br/> (i) Stationary condition<br/> <br/> $$<br/> \\frac{\\partial f}{\\partial x_i}+\\sum_{j=1}^2 u_j \\frac{\\partial g_j}{\\partial x_i}=0, i=1,2<br/> $$<br/> <br/> Therefore, we get<br/> <br/> $$<br/> \\begin{gathered}<br/> 2 x_1+60+u_1+u_2=0 \\\\<br/> 2 x_2+u_2=0<br/> \\end{gathered}<br/> $$<br/> <br/> (ii) Complementary slackness condition<br/> <br/> $$<br/> u_i g_i=0, i=1,2<br/> $$<br/> <br/> Therefore, we get<br/> <br/> $$<br/> \\begin{gathered}<br/> u_1\\left(x_1-80\\right)=0 \\\\<br/> u_2\\left(x_1+x_2-120\\right)=0<br/> \\end{gathered}<br/> $$<br/> <br/> (iii) Primal feasibility condition<br/> <br/> $$<br/> g_i \\geq 0<br/> $$<br/> <br/> Therefore, we get<br/> <br/> $$<br/> \\begin{gathered}<br/> x_1-80 \\geq 0 \\\\<br/> x_1+x_2-120 \\geq 0<br/> \\end{gathered}<br/> $$<br/> <br/> (iv) Dual feasibility condition<br/> <br/> $$<br/> u_i \\geq 0<br/> $$<br/> <br/> Therefore, we get<br/> <br/> $$<br/> \\begin{gathered}<br/> x_1-80 \\geq 0 \\\\<br/> x_1+x_2-120 \\geq 0<br/> \\end{gathered}<br/> $$<br/> <br/> From (3), either $u_1=0$ or $x_1=80$<br/> <br/> Case (i): Let $u_1=0$<br/> <br/> Substitute in (1);<br/> <br/> $$<br/> \\begin{gathered}<br/> 2 x_1+60+u_2=0 \\\\<br/> x_1=-\\frac{u_2}{2}-30<br/> \\end{gathered}<br/> $$<br/> <br/> Substitute in (2);<br/> <br/> $$<br/> \\begin{gathered}<br/> 2 x_2+u_2=0 \\\\<br/> x_2=-\\frac{u_2}{2}<br/> \\end{gathered}<br/> $$<br/> <br/> Substitute in (9) and (10) in (4);<br/> <br/> $$<br/> \\begin{gathered}<br/> u_2\\left(-\\frac{u_2}{2}-30-\\frac{u_2}{2}-120\\right)=0 \\\\<br/> u_2\\left(-u_2-150\\right)=0<br/> \\end{gathered}<br/> $$<br/> <br/> From this, $u_2=0$ or $u_2=-150$<br/> <br/> Using $u_2=0$ in (9) and (1) we get, $x_1=-30$ and $x_2=0$ respectively. This violates (5) and (6).<br/> <br/> Using $u_2=-150$ in (9) and (10) we get, $x_1=45$ and $x_2=75$, respectively. This violates (5).<br/> <br/> Case (ii): Let $x_1=80$, substitute in (1)<br/> <br/> $$<br/> \\begin{gathered}<br/> 2(80)+60+u_1+u_2=0 \\\\<br/> u_2=-u_1-220<br/> \\end{gathered}<br/> $$<br/> <br/> Substitute (11) in (2):<br/> <br/> $$<br/> u_1=2 x_2-220<br/> $$<br/> <br/> Using (12) in (11) we get $u_2=-2 x_2$. Using $x_1=80$ and $u_2=-2 x_2$ in (4) we get<br/> <br/> $$<br/> \\begin{gathered}<br/> -2 x_2\\left(80+x_2-120\\right)=0 \\\\<br/> x_2\\left(x_2-40\\right)=0<br/> \\end{gathered}<br/> $$<br/> <br/> From this, either $x_2=0$ or $x_2=40$.<br/> <br/> Case (ii-a): Let $x_2=0$, then from (12) we get $u_1=-220$.<br/> <br/> Substituting $x_1=80, x_2=0$ and $u_1=-220$ in (6) will violate the condition.<br/> <br/> Case (ii-b): Let $x_2=40$<br/> <br/> Substituting $x_1=80, x_2=40$ in (5) and (6), the conditions are satisfied.<br/> <br/> Substituting $x_1=80, x_2=40$ in (11) and (12), we get $u_1=-140$ and $u_2=-80$. These values satisfy conditions (7) and (8).<br/> <br/> Thus the optimal solution is $\\left[x_1^*, x_2^*\\right]=[80,40]$ because it satisfies the KKT conditions.</div><br><br><small>Source: <a href=\"https://gateoverflow.in/501055/go-classes-dpp-calculus-%26-optimization-kkt-conditions\" target=\"_blank\">GATE Overflow #501055</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider two functions $g(x)=2 x-3$ and $f(x)=x-10 \\ln (5 x)$. Let $h(x)$ be the composite function $h=f \\circ g$. Select the true statement.</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$h$ is a convex function.<br/></span>",
                "<span style=\"display: inline;\">$h$ is a concave function.<br/></span>",
                "<span style=\"display: inline;\">$h$ is neither convex nor concave.<br/></span>",
                "<span style=\"display: inline;\">$h$ is both convex and concave (linear).</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"501054\"></a><div itemprop=\"text\">Since $f(x)$ is a convex function and $\\mathrm{g}(\\mathrm{x})$ is a linear function, $h=f o g$ is also a convex function.</div><br><br><small>Source: <a href=\"https://gateoverflow.in/501053/go-classes-dpp-calculus-%26-optimization-convexity\" target=\"_blank\">GATE Overflow #501053</a></small></div>"
        },
        {
            "marks": 2,
            "neg": 0,
            "type": "MSQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider two convex functions $f(x)=x^2$ and $g(x)=e^{3 x^2}$.<br/><br/>Choose the correct convex function(s) that is a resultant of the combination of $f(x)$ and $g(x)$.</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$h(x)=x^2+e^{3 x^2}$<br/></span>",
                "<span style=\"display: inline;\">$h(x)=x^2 e^{-3 x^2}$<br/></span>",
                "<span style=\"display: inline;\">$h(x)=x^2 e^{3 x^2}$<br/></span>",
                "<span style=\"display: inline;\">$h(x)=x^2-e^{3 x^2}$</span>"
            ],
            "answer": [
                "A"
            ],
            "solution": "<div class=\"solution-content\"><a name=\"501050\"></a><div itemprop=\"text\"><p>$h(x)=f(x)+g(x)=x^2+e^{3 x^2}$ is a convex function $h(x)=f(x) \\times g(x)=x^2 e^{3 x^2}$ is a convex function</p><p><strong>Hence, A and C are correct</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/501049/go-classes-dpp-calculus-%26-optimization-convexity\" target=\"_blank\">GATE Overflow #501049</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\">Solve the following linear program using KKT conditions $\\operatorname{minimize} \\quad v=24 y_1+60 y_2$<br/> subject to<br/> <br/> $$<br/> \\begin{gathered}<br/> 0.5 y_1+y_2 \\geq 6 \\\\<br/> 2 y_1+2 y_2 \\geq 14 \\\\<br/> y_1+4 y_2 \\geq 13 \\\\<br/> y_1 \\geq 0, y_2 \\geq 0<br/> \\end{gathered}<br/> $$<br/> <br/> Enter the minimum value of $v$.</div></span>",
            "image": "",
            "options": [],
            "answer": "294",
            "solution": "<div class=\"solution-content\"><a name=\"500200\"></a><div itemprop=\"text\">Minimize $v=24 y_1+60 y_2$ subject to<br/> <br/> $$<br/> 0.5 y_1+y_2 \\geq 6, \\quad 2 y_1+2 y_2 \\geq 14, \\quad y_1+4 y_2 \\geq 13, \\quad y_1 \\geq 0, y_2 \\geq 0 .<br/> $$<br/> <br/> Reduce/clarify constraints:<br/> <br/> Write $c_1: 0.5 y_1+y_2 \\geq 6, \\quad c_2: y_1+y_2 \\geq 7$ (dividing $2 y_1+2 y_2 \\geq 14$ by 2 ), $\\quad c_3: y_1+4 y_2 \\geq$ 13.<br/> <br/> Candidate vertices (intersection of pairs of equalities):<br/> Solve pairs $\\left(c_i=c_j\\right)$ :<br/> <br/> $c_1$ and $c_2: 0.5 y_1+y_2=6, y_1+y_2=7 \\Rightarrow y_1=2, y_2=5$. Feasible.<br/> $c_1$ and $c_3: 0.5 y_1+y_2=6, y_1+4 y_2=13 \\Rightarrow y_1=11, y_2=0.5$. Feasible.<br/> $c_2$ and $c_3: y_1+y_2=7, y_1+4 y_2=13 \\Rightarrow y_1=5, y_2=2$. Infeasible because $c_1$ gives $0.5(5)+2= 4.5&lt;6$.<br/> Axis intersections: $y_1=0$ with $c_2 \\Rightarrow y_2=7$ (feasible); $y_2=0$ with $c_3 \\Rightarrow y_1=13$ (feasible).<br/> <br/> Objective values at feasible candidates:<br/> <br/> At $(2,5): v=24(2)+60(5)=48+300=348$.<br/> At $(11,0.5): v=24(11)+60(0.5)=264+30=294$.<br/> At $(0,7): v=24(0)+60(7)=420$.<br/> At $(13,0): v=24(13)+60(0)=312$.<br/> <br/> KKT formulation:<br/> <br/> Lagrangian (multipliers $\\mu_1, \\mu_2, \\mu_3 \\geq 0$ for $c_1, c_2, c_3 ; \\nu_1, \\nu_2 \\geq 0$ for $y_1 \\geq 0, y_2 \\geq 0$ ):<br/> <br/> $$<br/> \\mathcal{L}=24 y_1+60 y_2-\\mu_1\\left(0.5 y_1+y_2-6\\right)-\\mu_2\\left(y_1+y_2-7\\right)-\\mu_3\\left(y_1+4 y_2-13\\right)-\\nu_1 y_1-\\nu_2 y_2 .<br/> $$<br/> <br/> Stationarity:<br/> <br/> $$<br/> 24-0.5 \\mu_1-\\mu_2-\\mu_3-\\nu_1=0, \\quad 60-\\mu_1-\\mu_2-4 \\mu_3-\\nu_2=0<br/> $$<br/> <br/> Complementary slackness:<br/> <br/> $\\mu_i\\left(c_i\\right.$ expression $)=0$ and $\\nu_j y_j=0$.<br/> <br/> KKT check at $\\left(y_1, y_2\\right)=(11,0.5)$ :<br/> Primal feasibility: checked above (both $c_1, c_3$ active, $c_2$ slack).<br/> Because $y_1&gt;0, y_2&gt;0$ we have $\\nu_1=\\nu_2=0$. Because $c_2$ is slack we set $\\mu_2=0$. Thus stationarity reduces to<br/> <br/> $$<br/> \\begin{aligned}<br/> 24-0.5 \\mu_1-\\mu_3=0 &amp; \\Rightarrow 0.5 \\mu_1+\\mu_3=24 \\\\<br/> 60-\\mu_1-4 \\mu_3=0 &amp; \\Rightarrow \\mu_1+4 \\mu_3=60<br/> \\end{aligned}<br/> $$<br/> <br/> Solve: multiply first by $2 \\rightarrow \\mu_1+2 \\mu_3=48$. Subtract from second $\\rightarrow 2 \\mu_3=12 \\Rightarrow \\mu_3=6$. Then $\\mu_1=$ 36 . Both multipliers are $\\geq 0$, so dual feasibility and complementary slackness hold.<br/> <br/> Optimality justification:<br/> <br/> All KKT conditions (primal feasibility, dual feasibility, stationarity, complementary slackness) are satisfied at $(11,0.5)$. For a linear program (convex), satisfaction of KKT is sufficient for global optimality. Among all feasible vertices computed above, $(11,0.5)$ yields the smallest objective value.<br/> Final answer:<br/> <br/> $$<br/> v_{\\min }=294 \\text { at }\\left(y_1, y_2\\right)=(11,0.5) .<br/> $$</div><br><br><small>Source: <a href=\"https://gateoverflow.in/500199/go-classes-dpp-calculus-%26-optimization-kkt-condition\" target=\"_blank\">GATE Overflow #500199</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Solve the following linear program using KKT conditions. minimize $\\quad v=24 y_1+60 y_2$<br/>subject to</p><p>$$<br/>\\begin{gathered}<br/>0.5 y_1+y_2 \\geq 6 \\\\<br/>2 y_1+2 y_2 \\geq 14 \\\\<br/>y_1+4 y_2 \\geq 13 \\\\<br/>y_1 \\geq 0, y_2 \\geq 0<br/>\\end{gathered}<br/>$$</p><p><br/>Choose the optimal solution for $\\left[y_1^*, y_2^*\\right]$</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$[8,2.5]$<br/></span>",
                "<span style=\"display: inline;\">$[10,6]$<br/></span>",
                "<span style=\"display: inline;\">$[11,0.5]$<br/></span>",
                "<span style=\"display: inline;\">$[10.5,1]$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"500198\"></a><div itemprop=\"text\">$\\left[y_1^*, y_2^*\\right]=[11,0.5]$, satisfies all the constraints and gives minimum value of $v$.</div><br><br><small>Source: <a href=\"https://gateoverflow.in/500197/go-classes-dpp-calculus-%26-optimization-kkt-conditions\" target=\"_blank\">GATE Overflow #500197</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider a vector $\\hat{w}=\\left[\\[\\begin{array}{l}2 \\\\ 4 \\\\ 3\\end{array}\\]\\right]$ in $\\mathbb{R}^3$. In $\\mathbb{R}^3$, there are many unit vectors. Use the Lagrange method to find the unit vector which gives the minimum dot product.</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\hat{u}=\\frac{1}{2 \\lambda}\\left[\\begin{array}{l}2 \\\\ 4 \\\\ 3\\end{array}\\right]$, with $\\lambda \\geq 0$<br/></span>",
                "<span style=\"display: inline;\">$\\hat{u}=\\frac{-1}{3 \\lambda}\\left[\\begin{array}{l}2 \\\\ 4 \\\\ 3\\end{array}\\right]$, with $\\lambda \\geq 0$<br/></span>",
                "<span style=\"display: inline;\">$\\hat{u}=\\frac{-1}{4 \\lambda}\\left[\\begin{array}{l}2 \\\\ 4 \\\\ 3\\end{array}\\right]$, with $\\lambda \\geq 0$<br/></span>",
                "<span style=\"display: inline;\">$\\hat{u}=\\frac{-1}{2 \\lambda}\\left[\\begin{array}{l}2 \\\\ 4 \\\\ 3\\end{array}\\right]$, with $\\lambda \\geq 0$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"500196\"></a><div itemprop=\"text\">Let unit vector be $\\vec{u}=\\left[\\begin{array}{l}x \\\\ y \\\\ z\\end{array}\\right]$.<br/> <br/> Objective is to minimize $\\vec{u} \\cdot \\vec{w}$ subject to $x^2+y^2+z^2=1$.<br/> <br/> $$<br/> f(x, y, z)=\\vec{u} \\cdot \\vec{w}=2 x+4 y+3 z<br/> $$<br/> <br/> Lagrangian function can be written as follows:<br/> <br/> $$<br/> L(x, y, z, \\lambda)=(2 x+4 y+3 z)+\\lambda\\left(x^2+y^2+z^2-1\\right)<br/> $$<br/> <br/> Take partial derivatives with respect to $\\mathrm{x}, \\mathrm{y}, \\mathrm{z}$ and $\\lambda$ and equate to zero.<br/> <br/> $$<br/> \\begin{gathered}<br/> \\frac{\\partial L}{\\partial x}=2+2 \\lambda x=0 \\\\<br/> x=\\frac{-1}{2 \\lambda} 2 \\\\<br/> \\frac{\\partial L}{\\partial y}=4+2 \\lambda y=0 \\\\<br/> y=\\frac{-1}{2 \\lambda} 4 \\\\<br/> \\frac{\\partial L}{\\partial z}=3+2 \\lambda z=0 \\\\<br/> z=\\frac{-1}{2 \\lambda} 3<br/> \\end{gathered}<br/> $$</div><br><br><small>Source: <a href=\"https://gateoverflow.in/500195/go-classes-dpp-calculus-%26-optimization-lagrangian-fn\" target=\"_blank\">GATE Overflow #500195</a></small></div>"
        }
    ]
});

registerTest({
    "name": "DPP 17 - Engineering Mathematics (Optimization & Convexity - Part 5)",
    "testLabel": "DPP 17",
    "testType": "DPP",
    "bracket": "Optimization & Convexity - Part 5",
    "subject": "em",
    "series": "cse-dpp-2027",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 11,
    "topicsCovered": "Optimization & Convexity (Practice Set 5)",
    "questions": [
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\">Krishna runs a steel fabrication industry and produces steel products. He regularly purchases raw steel for Rs. $500$ per tonne. His revenue is modelled by a function $R(s)=100 \\sqrt{s}$, where $s$ is the tonnes of steel purchased. His budget for steel purchase is Rs. $150000$.<br/> <br/> Using the Lagrangian function, find the amount of raw steel to be purchased to get maximum revenue.</div></span>",
            "image": "",
            "options": [],
            "answer": "300",
            "solution": "<div class=\"solution-content\"><a name=\"500192\"></a><div itemprop=\"text\">Maximize $R(s)=100 \\sqrt{s}$ subject to $500 s \\leq 150000$ and $s \\geq 0$.<br/> <br/> The budget constraint is $500 s \\leq 150000$. If the optimum uses the full budget then $500 s=150000 \\Rightarrow s=300$. We will check this with Lagrange multipliers (and complementary slackness).<br/> <br/> Lagrangian:<br/> <br/> $$<br/> \\mathcal{L}(s, \\lambda)=100 \\sqrt{s}+\\lambda(150000-500 s), \\text { with } \\lambda \\geq 0 .<br/> $$<br/> <br/> First-order condition:<br/> <br/> $$<br/> \\begin{aligned}<br/> &amp; \\frac{\\partial \\mathcal{L}}{\\partial s}=\\frac{100}{2 \\sqrt{s}}-500 \\lambda=0 \\\\<br/> &amp; \\text { So } \\lambda=\\frac{100}{2 \\sqrt{s} \\cdot 500}=\\frac{1}{10 \\sqrt{s}}<br/> \\end{aligned}<br/> $$<br/> <br/> Complementary slackness/constraint activity:<br/> <br/> Either $\\lambda=0$ and the constraint is inactive, or $150000-500 s=0$ and the constraint is active.<br/> <br/> If $\\lambda=0$ then $100 /(2 \\sqrt{s})=0$ which is impossible for $s \\geq 0$. Thus $\\lambda&gt;0$ and the budget constraint is active: $500 s=150000 \\Rightarrow s=300$.</div><br><br><small>Source: <a href=\"https://gateoverflow.in/500191/go-classes-dpp-calculus-%26-optimization-lagrangian-fn\" target=\"_blank\">GATE Overflow #500191</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\">Find the minimum value of $f(x, y)=x+y$ subject to $x^2+y^2=1$, where $x$, $y$ are the coordinates of points on the circumference of the unit circle.</div></span>",
            "image": "",
            "options": [],
            "answer": "500031",
            "solution": "<div class=\"solution-content\"><a name=\"500032\"></a><div itemprop=\"text\">The Lagrangian function for the problem is<br/> <br/> $$<br/> L(x, y, \\lambda)=x+y+\\lambda x^2+\\lambda y^2-\\lambda<br/> $$<br/> <br/> Take partial derivatives with respect to $\\mathrm{x}, \\mathrm{y}, \\lambda$ and equate to zero.<br/> <br/> $$<br/> \\begin{gathered}<br/> \\frac{\\partial L}{\\partial x}=2 \\lambda x+1=0 \\\\<br/> x=-\\frac{1}{2 \\lambda} \\\\<br/> \\frac{\\partial L}{\\partial y}=2 \\lambda y+1=0 \\\\<br/> y=-\\frac{1}{2 \\lambda} \\\\<br/> \\frac{\\partial L}{\\partial \\lambda}=x^2+y^2=1<br/> \\end{gathered}<br/> $$<br/> <br/> Substituting (1) and (2) in (3), we get<br/> <br/> $$<br/> \\begin{gathered}<br/> \\frac{1}{4 \\lambda^2}+\\frac{1}{4 \\lambda^2}=1 \\\\<br/> \\lambda= \\pm \\frac{1}{\\sqrt{2}}<br/> \\end{gathered}<br/> $$<br/> <br/> Using (3) in (1) and (2) we get, $x=\\mp \\frac{1}{\\sqrt{2}}$ and $y=\\mp \\frac{1}{\\sqrt{2}}$.<br/> <br/> Since we want to minimize $f(x, y)$, we shall consider $x=-\\frac{1}{\\sqrt{2}}$ and $y=-\\frac{1}{\\sqrt{2}}$.<br/> <br/> Minimum value of $f(x, y)=-1.414$.</div><br><br><small>Source: <a href=\"https://gateoverflow.in/500031/go-classes-dpp-calculus-%26-optimization-constrained-optimization\" target=\"_blank\">GATE Overflow #500031</a></small></div>"
        },
        {
            "marks": 2,
            "neg": 0,
            "type": "MSQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Let the composition of two functions $f(x)=\\sin (x)-2 x^2+1$ and $g(x)=e^x$ be $h=f o g$. At a point $x=5$, Select the true statement(s).</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$h(x)$ is a convex function.<br/></span>",
                "<span style=\"display: inline;\">$h(x)$ is a concave function.<br/></span>",
                "<span style=\"display: inline;\">$h(x)$ is a non-decreasing function.<br/></span>",
                "<span style=\"display: inline;\">$h(x)$ is a decreasing function.</span>"
            ],
            "answer": [
                "A"
            ],
            "solution": "<div class=\"solution-content\"><a name=\"500029\"></a><div itemprop=\"text\"><p><b id=\"docs-internal-guid-d5172d73-7fff-aa0b-7d62-5de6ea160d72\"><img alt=\"\" height=\"351\" src=\"https://gateoverflow.in/?qa=blob&amp;qa_blobid=4688795976577564197\" width=\"452\"/></b></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/500028/go-classes-dpp-calculus-%26-optimization-convexity\" target=\"_blank\">GATE Overflow #500028</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Choose the largest interval of $x$ in which a function $f(x)=x e^{x^2}$ is convex.</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$(-0.5,0.5)$<br/></span>",
                "<span style=\"display: inline;\">$(0, \\infty)$<br/></span>",
                "<span style=\"display: inline;\">$(\\infty, 0)$<br/></span>",
                "<span style=\"display: inline;\">$(1,0)$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"500027\"></a><div itemprop=\"text\">In order to find the interval over which $f(x)$ is convex, let us find where $f^{\\prime \\prime}(x)&gt;0$.<br/> <br/> $$<br/> \\begin{gathered}<br/> f^{\\prime}(x)=2 x^2 e^{x^2} \\\\<br/> f^{\\prime \\prime}(x)=e^{x^2}\\left(4 x^3+6 x\\right)<br/> \\end{gathered}<br/> $$<br/> <br/> Therefore $f^{\\prime \\prime}(x)&gt;0$ implies $e^{x^2}\\left(4 x^3+6 x\\right)&gt;0$.<br/> <br/> To satisfy this inequality, we want an interval of $x$ for which $e^{x^2}&gt;0$ and $\\left(4 x^3+6 x\\right)&gt;0$.<br/> <br/> Because $e$ raised to any power will be positive, first condition can be satisfied for any value of $x$.<br/> <br/> Second condition can be written as $2 x\\left(x^2+3\\right)&gt;0$. $\\left(x^2+3\\right)$ will be greater than 0 for any values of $x$.<br/> <br/> $2 x$ will be positive only when $x&gt;0$.<br/> <br/> Thus in interval notation, the largest interval of $x$ for which $f(x)$ is convex is $(0, \\inf )$.</div><br><br><small>Source: <a href=\"https://gateoverflow.in/500026/go-classes-dpp-calculus-%26-optimization-convexity\" target=\"_blank\">GATE Overflow #500026</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\">Find the value of a function $f(x)=x+3 x^2$ at its global minimum point.</div></span>",
            "image": "",
            "options": [],
            "answer": "1",
            "solution": "<div class=\"solution-content\"><a name=\"500025\"></a><div itemprop=\"text\">To get global minimum, $f^{\\prime}(x)=0$. Therefore $1+6 x=0, x=-\\frac{1}{6}$.<br/> <br/> $$<br/> \\begin{gathered}<br/> f\\left(-\\frac{1}{6}\\right)=-\\frac{1}{6}+3\\left(\\frac{1}{36}\\right) \\\\<br/> =-\\frac{1}{6}+\\frac{3}{36} \\\\<br/> =-\\frac{1}{6}+\\frac{1}{12} \\\\<br/> =-\\frac{2}{12}+\\frac{1}{12}=-\\frac{1}{12} \\\\<br/> -\\frac{1}{12} \\approx-0.083333 \\ldots<br/> \\end{gathered}<br/> $$</div><br><br><small>Source: <a href=\"https://gateoverflow.in/500024/go-classes-dpp-calculus-%26-optimization-minima\" target=\"_blank\">GATE Overflow #500024</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\">The distance of the point on the sphere $x^2+y^2+z^2=3$ closest to the point ( $2,2,2$ ) is $\\_\\_\\_\\_$。</div></span>",
            "image": "",
            "options": [],
            "answer": "1.73",
            "solution": "<div class=\"solution-content\"><a name=\"499896\"></a><div itemprop=\"text\">Given Squared Distance,<br/> <br/> $d^2=f(x, y, z)=(x-2)^2+(y-2)^2+(z-2)^2, g(x, y, z)= x^2+y^2+z^2=3$<br/> <br/> <br/> $$<br/> \\nabla f(x, y, z)=\\left[\\begin{array}{l}<br/> 2(x-2) \\\\<br/> 2(y-2) \\\\<br/> 2(z-2)<br/> \\end{array}\\right], \\nabla g(x, y, z)=\\left[\\begin{array}{l}<br/> 2 x \\\\<br/> 2 y \\\\<br/> 2 z<br/> \\end{array}\\right]<br/> $$<br/> <br/> We find the values of $x, y, z, \\lambda$ that simultancously satisfy the equations to get the extreme points $\\nabla f(x, y, z)=\\lambda \\nabla g(x, y, z)$ and, $g(x, y, z)=x^2+y^2+z^2=3$<br/> <br/> Solving, $\\nabla f(x, y, z)=\\lambda \\nabla g(x, y, z)$<br/> <br/> $$<br/> \\Longrightarrow\\left[\\begin{array}{l}<br/> 2(x-2) \\\\<br/> 2(y-2) \\\\<br/> 2(z-2)<br/> \\end{array}\\right]=\\lambda\\left[\\begin{array}{l}<br/> 2 x \\\\<br/> 2 y \\\\<br/> 2 z<br/> \\end{array}\\right] \\Longrightarrow x=y=z=2 /(1-\\lambda)<br/> $$<br/> <br/> Solving, $g(x, y, z)=x^2+y^2+z^2=3 \\Longrightarrow 12 /(1-\\lambda)^2=3 \\Longrightarrow \\lambda=3,-1$<br/> <br/> Therefore, the extreme point coordinates will be,<br/> <br/> $$<br/> \\begin{aligned}<br/> &amp; \\left(x_1, y_1, z_1\\right)=(1,1,1), d=\\sqrt{(1-2)^2+(1-2)^2+(1-2)^2}=\\sqrt{3}=1.73 \\\\<br/> &amp; \\left(x_2, y_2, z_2\\right)=(-1,-1,-1), d=\\sqrt{\\left((-1-2)^2+(-1-2)^2+(-1-2)^2\\right.}=3 \\sqrt{3}=5.20<br/> \\end{aligned}<br/> $$<br/> <br/> Min distance $= 1.73$</div><br><br><small>Source: <a href=\"https://gateoverflow.in/499895/go-classes-dpp-calculus-%26-optimization-constrained-optimization\" target=\"_blank\">GATE Overflow #499895</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>You are planning to setup a manufacturing business where the revenue $\\text{(r)}$ is a function of labour units $\\text{(l)}$, material units $\\text{(m)}$ and fixed cost $\\text{(c),} ~r=l . m^2+2 c$. You have an annual budget $\\text{(b)}$ of $1004$ million rupees, $b=2 l+16 m+c$ to run the business. What would be maximum revenue that can be generated from the business in million rupees under the optimum combination of labour units $\\text{(l)}$, material units $\\text{(m)}$ and fixed cost $(\\mathrm{c})$.<br/> </p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$1944$<br/></span>",
                "<span style=\"display: inline;\">$2036$<br/></span>",
                "<span style=\"display: inline;\">$2072$<br/></span>",
                "<span style=\"display: inline;\">$2080$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"499894\"></a><div itemprop=\"text\">Given<br/> <br/> Revenue, $r=f(l, m, c)=l \\cdot m^2+2 c$, Budget constraint, $g(l, m, c)=2 l+16 m+c=1004$<br/> <br/> $$<br/> \\nabla f(x, y, z)=\\left[\\begin{array}{c}<br/> m^2 \\\\<br/> 2 l m \\\\<br/> 2<br/> \\end{array}\\right], \\nabla g(x, y, z)=\\left[\\begin{array}{c}<br/> 2 \\\\<br/> 16 \\\\<br/> 1<br/> \\end{array}\\right]<br/> $$<br/> <br/> We find the values of $x, y, z, \\lambda$ that simultaneously satisfy the equations to get the extreme points $\\nabla f(l, m, c)=\\lambda \\nabla g(x, y, z)$ and, $g(l, m, c)=2 l+16 m+c=1004$<br/> <br/> Solving, $\\nabla f(l, m, c)=\\lambda \\nabla g(x, y, z)$<br/> <br/> <br/> $$<br/> \\Longrightarrow\\left[\\begin{array}{c}<br/> m^2 \\\\<br/> 2 l m \\\\<br/> 2<br/> \\end{array}\\right]=\\lambda\\left[\\begin{array}{c}<br/> 2 \\\\<br/> 16 \\\\<br/> 1<br/> \\end{array}\\right] \\Longrightarrow m= \\pm 2, l= \\pm 8, \\lambda=2<br/> $$<br/> <br/> Solving, $g(l, m, c)=2 l+16 m+c=1004 \\Longrightarrow c=1004-2 l-16 m$<br/> <br/> Therefore, the extreme point coordinates will be,<br/> <br/> $\\left(l_1, m_1, c_1\\right)=(8,2,956)$,<br/> <br/> Revenue, $r=f(8,2,956)=8 *(2)^2+2 * 956=1944$<br/> <br/> $\\left(l_2, m_2, c_2\\right)=(-8,-2,1052)$,<br/> <br/> Revenue, $r=f(-8,-2,1052)=-8 *(-2)^2+2 * 1052=$ 2072<br/> <br/> Since, the configurations can not be negative. So, $l \\geq 0, m \\geq 0, c \\geq 0$<br/> <br/> We can see the maximum revenue is achieved under the configuration $l=8, m=2, c= 956$. The maximum revenue is $1944$.</div><br><br><small>Source: <a href=\"https://gateoverflow.in/499892/go-classes-dpp-calculus-%26-optimization-constrained-optimization\" target=\"_blank\">GATE Overflow #499892</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p dir=\"ltr\">A box (cuboid shaped) is to made out of the cardboard with the total area of $24 \\mathrm{~cm}^2$. The maximum volume (in $\\mathrm{cm}^2$) occupied by the box will be $\\_\\_\\_\\_$</p></div></span>",
            "image": "",
            "options": [],
            "answer": "8",
            "solution": "<div class=\"solution-content\"><a name=\"499891\"></a><div itemprop=\"text\">Let dimensions be $x, y, z$ (length, width, height).<br/> <br/> Surface area of cuboid (box with all $6$ faces):<br/> <br/> $$<br/> \\begin{gathered}<br/> 2(x y+y z+z x)=24 \\\\\\\\<br/> x y+y z+z x=12<br/> \\end{gathered}<br/> $$<br/> <br/> We want to maximize $V=x y z$ subject to<br/> <br/> $$<br/> x y+y z+z x=12, \\quad x, y, z&gt;0 .<br/> $$<br/> Let<br/> $$<br/> \\begin{gathered}<br/> f(x, y, z)=x y z, \\quad g(x, y, z)=x y+y z+z x-12=0 . \\\\\\\\<br/> \\nabla f=\\lambda \\nabla g \\\\\\\\<br/> \\nabla f=(y z, x z, x y) \\\\\\\\<br/> \\nabla g=(y+z, x+z, x+y)<br/> \\end{gathered}<br/> $$<br/> So:<br/> $$<br/> \\begin{aligned}<br/> &amp; y z=\\lambda(y+z) \\\\\\\\<br/> &amp; x z=\\lambda(x+z) \\\\\\\\<br/> &amp; x y=\\lambda(x+y)<br/> \\end{aligned}<br/> $$<br/> <br/> From $(1)$ and $(2):$<br/> <br/> $$<br/> \\frac{y z}{y+z}=\\lambda=\\frac{x z}{x+z}<br/> $$<br/> <br/> Multiply through (assuming $y+z&gt;0, x+z&gt;0$ ):<br/> <br/> $$<br/> y z(x+z)=x z(y+z)<br/> $$<br/> Cancel $z&gt;0$ :<br/> $$<br/> \\begin{aligned}<br/> y(x+z) &amp; =x(y+z) \\\\\\\\<br/> x y+y z &amp; =x y+x z \\\\\\\\<br/> y z &amp; =x z<br/> \\end{aligned}<br/> $$<br/> <br/> Cancel $z: y=x$.<br/> <br/> Similarly, from $(1)$ and $(3)$:<br/> $$<br/> \\frac{y z}{y+z}=\\frac{x y}{x+y}<br/> $$<br/> <br/> Cancel $y&gt;0$ :<br/> $$<br/> \\frac{z}{y+z}=\\frac{x}{x+y}<br/> $$<br/> <br/> But $x=y$, so:<br/> $$<br/> \\begin{gathered}<br/> \\frac{z}{x+z}=\\frac{x}{2 x}=\\frac{1}{2} \\\\\\\\<br/> 2 z=x+z \\Longrightarrow z=x<br/> \\end{gathered}<br/> $$<br/> <br/> Thus $x=y=z$.<br/> $$<br/> x y+y z+z x=3 x^2=12 \\Longrightarrow x^2=4 \\Longrightarrow x=2<br/> $$<br/> $$<br/> V=2 \\cdot 2 \\cdot 2=8<br/> $$</div><br><br><small>Source: <a href=\"https://gateoverflow.in/499890/go-classes-dpp-calculus-%26-optimization-maxima\" target=\"_blank\">GATE Overflow #499890</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>The point on the plane $x+y-2 z=6$ that is closest to the origin is<br/> </p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$(1, 1, 1)$<br/></span>",
                "<span style=\"display: inline;\">$(-1,1,2)$<br/></span>",
                "<span style=\"display: inline;\">$(1,2,0)$<br/></span>",
                "<span style=\"display: inline;\">$(1,1,-2)$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"499889\"></a><div itemprop=\"text\"><p>The shortest distance from the origin to the plane is along the <strong>normal vector</strong> to the plane.</p><p><br/>The plane equation:<br/>$$<br/>x+y-2 z=6<br/>$$</p><p>Normal vector $\\mathrm{n}=(1,1,-2)$<br/><br/>The closest point on the plane to the origin is the <strong>foot of the perpendicular</strong> from the origin to the plane.</p><p>Let the foot be $\\mathrm{P}=(\\mathrm{x_0}, \\mathrm{y_0}, \\mathrm{z_0})$<br/><br/>Since $P$ lies on the plane:</p><p>$$<br/>x_0+y_0-2 z_0=6<br/>$$</p><p><br/>Also, $P$ is along the normal direction from the origin:</p><p>$$<br/>(x_0, y_0, z_0)=t(1,1,-2)<br/>$$</p><p>for some scalar $t$.<br/><br/>Substitute into the plane equation:</p><p>$$<br/>t+t-2(-2 t)=6 \\rightarrow t=1<br/>$$<br/>$$<br/>P = (1,1,-2)<br/>$$</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/499888/go-classes-dpp-calculus-%26-optimization-minima\" target=\"_blank\">GATE Overflow #499888</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\">$\\text { The distance of the plane } x+y-2 z=6 \\text { from the origin is } \\_\\_\\_\\_\\_\\_\\_$</div></span>",
            "image": "",
            "options": [],
            "answer": "6",
            "solution": "<div class=\"solution-content\"><a name=\"499714\"></a><div itemprop=\"text\"><p>For <strong>any point</strong> $(x, y, z)$ on the plane, the distance from the origin to that point is:</p><p>$$<br/>\\sqrt{x^2+y^2+z^2}<br/>$$</p><p><br/>But most of those points are <strong>not</strong> the closest point - they are farther away because you're not approaching perpendicularly.</p><p>The <strong>closest point</strong> on the plane is the one where this distance is <strong>smallest.</strong></p><p>We want the shortest distance from the origin $(0,0,0)$ to the plane</p><p>$$<br/>x+y-2 z=6<br/>$$</p><p><br/>The shortest distance is the perpendicular distance, which is the <strong>minimum</strong> of</p><p>$$<br/>\\sqrt{x^2+y^2+z^2}<br/>$$</p><p>for all points $(x, y, z)$ on the plane.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/499713/go-classes-dpp-calculus-%26-optimization-constrained-optimization\" target=\"_blank\">GATE Overflow #499713</a></small></div>"
        }
    ]
});

registerTest({
    "name": "DPP 18 - Engineering Mathematics (Optimization & Convexity - Part 6)",
    "testLabel": "DPP 18",
    "testType": "DPP",
    "bracket": "Optimization & Convexity - Part 6",
    "subject": "em",
    "series": "cse-dpp-2027",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 10,
    "topicsCovered": "Optimization & Convexity (Practice Set 6)",
    "questions": [
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\">The minimum value of $f(x, y)=x^2+4 y^2-2 x+8 y$ subject to the constraint $x+2 y=7$ is $\\_\\_\\_\\_$</div></span>",
            "image": "",
            "options": [],
            "answer": "27",
            "solution": "<div class=\"solution-content\"><a name=\"499712\"></a><div itemprop=\"text\">$g(x, y)=x+2 y-7=0 .$<br/> <br/> $$<br/> \\begin{gathered}<br/> \\nabla f=(2 x-2,8 y+8) \\\\\\\\<br/> \\nabla g=(1,2)<br/> \\end{gathered}<br/> $$<br/> <br/> Set $\\nabla f=\\lambda \\nabla g$ :<br/> <br/> $$<br/> \\begin{aligned}<br/> &amp; 2 x-2=\\lambda \\cdot 1 \\quad \\Rightarrow \\quad 2 x-2=\\lambda \\\\<br/> &amp; 8 y+8=\\lambda \\cdot 2 \\quad \\Rightarrow \\quad 8 y+8=2 \\lambda<br/> \\end{aligned}<br/> $$<br/> <br/> From the first: $\\lambda=2 x-2$.<br/> <br/> Sub into second:<br/> $$<br/> \\begin{gathered}<br/> 8 y+8=2(2 x-2)=4 x-4 \\\\<br/> 8 y+8=4 x-4 \\\\<br/> 8 y-4 x+12=0 \\\\<br/> 2 y-x+3=0<br/> \\end{gathered}<br/> $$<br/> <br/> We also have $x+2 y=7$.<br/> <br/> From $2 y-x+3=0:-x+2 y=-3$.<br/> <br/> From $x+2 y=7$.<br/> <br/> Add the two equations:<br/> $$<br/> \\begin{gathered}<br/> (-x+2 y)+(x+2 y)=-3+7 \\\\<br/> 4 y=4 \\quad \\Rightarrow \\quad y=1<br/> \\end{gathered}<br/> $$<br/> <br/> Then $x+2(1)=7 \\rightarrow x=5$.<br/> <br/> So critical point: $(5,1)$.<br/> $$<br/> \\begin{gathered}<br/> f(5,1)=5^2+4(1)^2-2(5)+8(1) \\\\<br/> =25+4-10+8 \\\\<br/> =27<br/> \\end{gathered}<br/> $$<br/> <br/> The function is convex (positive definite quadratic), so this is the global minimum subject to the constraint.</div><br><br><small>Source: <a href=\"https://gateoverflow.in/499711/go-classes-dpp-calculus-%26-optimization-constrained-optimization\" target=\"_blank\">GATE Overflow #499711</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\">For the function $f(x)=x \\sin (x)-1$, with an initial guess of $x_0=2.5$, and step size of $0.1$ , as per gradient descent algorithm, what will be the value of the function after $4$ iterations? (Correct up to $3$ decimal places)</div></span>",
            "image": "",
            "options": [],
            "answer": "3.355",
            "solution": "<div class=\"solution-content\"><a name=\"499710\"></a><div itemprop=\"text\">$x_{n+1}=x_n-\\eta f^{\\prime}(x)$<br/> <br/> After first iteration $x_1=2.64$<br/> <br/> After second iteration $x_2=2.823$<br/> <br/> After third iteration $x_3=3.059$<br/> <br/> After fourth iteration $x_4=3.355$<br/> <br/> $f(3.355)=-1.710$</div><br><br><small>Source: <a href=\"https://gateoverflow.in/499709/go-classes-dpp-calculus-%26-optimization-minima\" target=\"_blank\">GATE Overflow #499709</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>The point on $y=x^2+1$ closest to $(0,2)$ is<br/> </p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$(0.707,1.5)$<br/></span>",
                "<span style=\"display: inline;\">$(0.707,-1.5)$<br/></span>",
                "<span style=\"display: inline;\">$(-0.707,1.5)$<br/></span>",
                "<span style=\"display: inline;\">$(-0.707,-1.5)$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"499708\"></a><div itemprop=\"text\">Objective function $f(x)=(x-0)^2+\\left(x^2+1-2\\right)^2$<br/> <br/> $$<br/> f(x)=x^4-x^2+1<br/> $$<br/> <br/> For minima $f^{\\prime}(x)=0$<br/> $$<br/> \\begin{aligned}<br/> &amp; 4 x^3-2 x=0 \\\\<br/> &amp; x=0,0.707,-0.707<br/> \\end{aligned}<br/> $$<br/> <br/> Corresponding $y=1,1.5,1.5$</div><br><br><small>Source: <a href=\"https://gateoverflow.in/499707/go-classes-dpp-calculus-%26-optimization-minima\" target=\"_blank\">GATE Overflow #499707</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Two positive numbers have a sum of $60$. What is the minimum product of one number times the square of other number?<br/> </p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$0$<br/></span>",
                "<span style=\"display: inline;\">$900$<br/></span>",
                "<span style=\"display: inline;\">$60$<br/></span>",
                "<span style=\"display: inline;\">$240$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"499702\"></a><div itemprop=\"text\">Let the two numbers be $x$ and $y$<br/> <br/> $$<br/> x+y=60<br/> $$<br/> <br/> objective function from the question will be,<br/> <br/> $$<br/> f(x)=x^2(60-x)<br/> $$<br/> <br/> For optima $f^{\\prime}(x)=0,120 x-3 x^2=0$<br/> <br/> $$<br/> x=0,40<br/> $$<br/> <br/> Product is minimum when $\\mathrm{x}=0$.</div><br><br><small>Source: <a href=\"https://gateoverflow.in/499701/go-classes-dpp-calculus-%26-optimization-minima\" target=\"_blank\">GATE Overflow #499701</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>What is the boundary value of $x$ so that the function $(x-3)^3+(y+1)^2$ to remain convex?<br/> </p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$x \\geq 1$<br/></span>",
                "<span style=\"display: inline;\">$x \\geq 2$<br/></span>",
                "<span style=\"display: inline;\">$x \\geq 3$<br/></span>",
                "<span style=\"display: inline;\">None of these</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"499387\"></a><div itemprop=\"text\">$$<br/> f(x, y)=(x-3)^3+(y+1)^2<br/> $$<br/> First order partial derivatives, $f_x=3(x-3)^2, f_y=2(y+1)$<br/> <br/> Second order partial derivatives, $f_{x x}=6(x-3), f_{x y}=0, f_{y y}=2$<br/> <br/> The Second order partial derivatives with respect to $\\mathrm{x}, f_{x x}=6(x-3)$ changes sign at the point where $x=3$.<br/> <br/> When $x \\geq 3, f_{x x} \\geq 0$ otherwise $f_{x x}&lt;0$<br/> <br/> The hessian matrix will be,<br/> <br/> $$<br/> D=\\left[\\begin{array}{ll}<br/> f_{x x} &amp; f_{x y} \\\\<br/> f_{x y} &amp; f_{y y}<br/> \\end{array}\\right]=\\left[\\begin{array}{cc}<br/> 6(x-3) &amp; 0 \\\\<br/> 0 &amp; 2<br/> \\end{array}\\right]<br/> $$<br/> <br/> D will be non negative when $x \\geq 3$ and the function remains convex.</div><br><br><small>Source: <a href=\"https://gateoverflow.in/499386/go-classes-dpp-calculus-%26-optimization-convexity\" target=\"_blank\">GATE Overflow #499386</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Which of the following is a convex function in $\\mathbb{R}^2$ ?<br/> </p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$f(x)=x^2+y^2$<br/></span>",
                "<span style=\"display: inline;\">$f(x)=-x^2-y^2$<br/></span>",
                "<span style=\"display: inline;\">$f(x)=x^2-y^2$<br/></span>",
                "<span style=\"display: inline;\">None of these</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"499385\"></a><div itemprop=\"text\">$$<br/> \\begin{aligned}<br/> &amp; f(x)=x^2+y^2=v^T A v=\\left[\\begin{array}{ll}<br/> x &amp; y<br/> \\end{array}\\right]\\left[\\begin{array}{ll}<br/> 1 &amp; 0 \\\\<br/> 0 &amp; 1<br/> \\end{array}\\right]\\left[\\begin{array}{l}<br/> x \\\\<br/> y<br/> \\end{array}\\right] \\\\\\\\<br/> &amp; \\text { where } A=\\left[\\begin{array}{ll}<br/> a &amp; b \\\\<br/> b &amp; c<br/> \\end{array}\\right]=\\left[\\begin{array}{ll}<br/> 1 &amp; 0 \\\\<br/> 0 &amp; 1<br/> \\end{array}\\right], v=\\left[\\begin{array}{l}<br/> x \\\\<br/> y<br/> \\end{array}\\right]<br/> \\end{aligned}<br/> $$<br/> <br/> Here, $a&gt;0, a c-b^2=1.1-0^2=1&gt;0$, This shows the matrix A is a positive definite matrix. Therefore, the function is a convex function.</div><br><br><small>Source: <a href=\"https://gateoverflow.in/499384/go-classes-dpp-calculus-%26-optimization-convexity\" target=\"_blank\">GATE Overflow #499384</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Suppose we have n data points randomly distributed in space given by $D= \\left\\{x_1, x_2, \\ldots . ., x_n\\right\\}$. A function $f(p)$ is defined to calculate the sum of distances of data points from a fixed point, say p. Let $f(p)=\\sum_{i=1}^n\\left(p-x_i\\right)^2$. What is the value of $p$ so that $\\mathrm{f}(\\mathrm{p})$ is minimum?<br/> </p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$x_1+x_2+\\ldots . .+x_n$<br/></span>",
                "<span style=\"display: inline;\">$x_1-x_2+x_3-x_4 \\ldots$.<br/></span>",
                "<span style=\"display: inline;\">$\\frac{x_1+x_2+\\ldots .+x_n}{n}$<br/></span>",
                "<span style=\"display: inline;\">$\\frac{x_1-x_2+x_3-x_4 \\ldots .}{n}$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"499383\"></a><div itemprop=\"text\">\\begin{aligned}<br/> &amp; f(p)=\\sum_{i=1}^n\\left(p-x_i\\right)^2 \\\\\\\\<br/> &amp; f(p)=\\left(p-x_1\\right)^2+\\ldots \\ldots+\\left(p-x_n\\right)^2 \\\\\\\\<br/> &amp; f^{\\prime}(p)=2 p\\left(p-x_1\\right)+\\ldots \\ldots+2 p\\left(p-x_n\\right)\\\\<br/> \\end{aligned}<br/> <br/> $\\text { For minima } f^{\\prime}(p)=0$<br/> <br/> \\begin{aligned}<br/> &amp; \\left(p-x_1\\right)+\\left(p-x_2\\right)+\\ldots . .+\\left(p-x_n\\right)=0 \\\\\\\\<br/> &amp; n p-\\left(x_1+x_2+\\ldots .+x_n\\right)=0 \\\\\\\\<br/> &amp; p=\\frac{x_1+x_2+\\ldots .+x_n}{n}<br/> \\end{aligned}</div><br><br><small>Source: <a href=\"https://gateoverflow.in/499382/go-classes-dpp-calculus-%26-optimization-minima\" target=\"_blank\">GATE Overflow #499382</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\">The point of minimum for the function $f\\left(x_1, x_2\\right)=x_1^2-x_1 x_2+2 x_2^2$ with an initial guess of $(3,2)$ with step size $=0.5$ using gradient descent algorithm after second iteration will be $\\_\\_\\_\\_$ (correct up to $3$ decimal places)</div></span>",
            "image": "",
            "options": [],
            "answer": "2.312",
            "solution": "<div class=\"solution-content\"><a name=\"499381\"></a><div itemprop=\"text\">\\begin{aligned}<br/> &amp; x_{n+1}=x_n-\\eta \\nabla f^{\\prime}(x) \\\\\\\\<br/> &amp; \\nabla f=\\left[\\begin{array}{c}<br/> 2 x_1-x_2 \\\\<br/> -x_1+4 x_2<br/> \\end{array}\\right] \\\\\\\\<br/> &amp; x_1=\\left[\\begin{array}{c}<br/> 1 \\\\<br/> -0.5<br/> \\end{array}\\right] \\\\\\\\<br/> &amp; x_2=\\left[\\begin{array}{c}<br/> -0.25 \\\\<br/> 1<br/> \\end{array}\\right] \\\\\\\\<br/> &amp; f(-0.25,1)=2.312<br/> \\end{aligned}</div><br><br><small>Source: <a href=\"https://gateoverflow.in/499380/go-classes-dpp-calculus-%26-optimization-minima\" target=\"_blank\">GATE Overflow #499380</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>The direction of steepest ascent for the function $2 x+y^3+4 z$ at the point ( $1,0,1$ ) is<br/> </p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\left[\\frac{2}{\\sqrt{20}}, ~0, ~\\frac{4}{\\sqrt{20}}\\right]$<br/></span>",
                "<span style=\"display: inline;\">$\\left[\\frac{1}{\\sqrt{29}}, ~0, ~\\frac{1}{\\sqrt{29}}\\right]$<br/></span>",
                "<span style=\"display: inline;\">$\\left[\\frac{-2}{\\sqrt{29}}, ~0, ~\\frac{4}{\\sqrt{29}}\\right]$<br/></span>",
                "<span style=\"display: inline;\">$\\left[\\frac{2}{\\sqrt{20}}, ~0, ~\\frac{-4}{\\sqrt{20}}\\right]$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"498995\"></a><div itemprop=\"text\">We know that function increases most in the direction of gradient<br/> <br/> hence direction of steepest ascent will be the direction of gradient<br/> <br/> <br/> Let $f(x, y, z)=2 x+y^3+4 z$<br/> <br/> $$<br/> \\begin{aligned}<br/> &amp; \\nabla f(x, y, z)=\\left[\\begin{array}{c}<br/> 2 \\\\<br/> 3 y^2 \\\\<br/> 4<br/> \\end{array}\\right] \\\\\\\\<br/> &amp; \\Longrightarrow \\nabla f(1,0,1)=\\left[\\begin{array}{l}<br/> 2 \\\\<br/> 0 \\\\<br/> 4<br/> \\end{array}\\right]<br/> \\end{aligned}<br/> $$<br/> <br/> To obtain the direction of steepest ascent, we need to normalize the gradient vector. The magnitude of the gradient vector is:<br/> <br/> $$<br/> \\|\\nabla f(1,0,1)\\|=\\sqrt{2^2+0^2+4^2}=\\sqrt{20}=2 \\sqrt{5}<br/> $$<br/> <br/> Therefore, the direction of steepest ascent for the function $2 x+y^3+4 z$ at the point $(1,0,1)$ is $\\left[\\frac{2}{\\sqrt{20}}, 0 \\frac{4}{\\sqrt{20}},\\right]$</div><br><br><small>Source: <a href=\"https://gateoverflow.in/498993/go-classes-dpp-calculus-%26-optimization-steepest-ascent\" target=\"_blank\">GATE Overflow #498993</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>The following function has a local minima at which value of $x$ ? $f(x)=x \\sqrt{5-x^2}$</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$-\\frac{\\sqrt{5}}{2}$<br/></span>",
                "<span style=\"display: inline;\">$\\sqrt{5}$<br/></span>",
                "<span style=\"display: inline;\">$\\sqrt{\\frac{5}{2}}$<br/></span>",
                "<span style=\"display: inline;\">$-\\sqrt{\\frac{5}{2}}$</span>"
            ],
            "answer": "D",
            "solution": "<div class=\"solution-content\"><a name=\"475264\"></a><div itemprop=\"text\">\\[<br/> f(x) = x\\sqrt{5 - x^2}<br/> \\]<br/> \\[<br/> f'(x) = \\sqrt{5 - x^2} - \\frac{x^2}{\\sqrt{5 - x^2}} = \\frac{5 - 2x^2}{\\sqrt{5 - x^2}}<br/> \\]<br/> \\[<br/> f'(x) = 0 \\Rightarrow 5 - 2x^2 = 0 \\Rightarrow x = \\pm \\sqrt{\\frac{5}{2}}<br/> \\]<br/> \\[<br/> f^{\\prime\\prime}(x) = \\frac{x \\left[ -4\\sqrt{5 - x^2} + (5 - 2x^2) \\right]}{(5 - x^2)^{3/2}}<br/> \\]<br/> <br/> \\[<br/> f^{\\prime\\prime}\\left(-\\sqrt{\\frac{5}{2}}\\right) &gt; 0 \\Rightarrow \\text{Local minimum at } \\boxed{x = -\\sqrt{\\frac{5}{2}}}<br/> \\]</div><br><br><small>Source: <a href=\"https://gateoverflow.in/475221/go-classes-dpp-calculus-maxima-and-minima-gate-ce\" target=\"_blank\">GATE Overflow #475221</a></small></div>"
        }
    ]
});

registerTest({
    "name": "DPP 19 - Engineering Mathematics (Optimization & Convexity - Part 7)",
    "testLabel": "DPP 19",
    "testType": "DPP",
    "bracket": "Optimization & Convexity - Part 7",
    "subject": "em",
    "series": "cse-dpp-2027",
    "date": "Nov 03, 2026",
    "duration": "15 Min",
    "totalMarks": 3,
    "topicsCovered": "Optimization & Convexity (Practice Set 7)",
    "questions": [
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\">The maximum value of the function $h(x)=-x^3+2 x^2$ in the interval $[-1,1.5]$ is equal to $\\qquad$______ (rounded off to 1 decimal place)</div></span>",
            "image": "",
            "options": [],
            "answer": "3.0",
            "solution": "<div class=\"solution-content\"><a name=\"473577\"></a><div itemprop=\"text\">3.0</div><br><br><small>Source: <a href=\"https://gateoverflow.in/473561/go-classes-dpp-calculus-maxima-and-minima-gate-ce\" target=\"_blank\">GATE Overflow #473561</a></small></div>"
        },
        {
            "marks": 2,
            "neg": 0,
            "type": "MSQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider the function given below and pick one or more CORRECT statement(s) from the following choices.</p><p>$$<br/>f(x)=x^3-\\frac{15}{2} x^2+18 x+20<br/>$$</p><p> </p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$f(x)$ has a local minimum at $x=3$</span>",
                "<span style=\"display: inline;\">$f(x)$ has a local maximum at $x=3$</span>",
                "<span style=\"display: inline;\">$f(x)$ has a local minimum at $x=2$</span>",
                "<span style=\"display: inline;\">$f(x)$ has a local maximum at $x=2$</span>"
            ],
            "answer": [
                "A"
            ],
            "solution": "<div class=\"solution-content\"><a name=\"473598\"></a><div itemprop=\"text\"><p>A and D are answer.</p><p><img alt=\"\" height=\"777\" src=\"https://gateoverflow.in/?qa=blob&amp;qa_blobid=5630145446520073118\" width=\"1036\"/></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/473559/go-classes-dpp-calculus-maxima-and-minima-gate-ce\" target=\"_blank\">GATE Overflow #473559</a></small></div>"
        }
    ]
});

registerTest({
    "name": "DPP 20 - Engineering Mathematics (Integral Calculus - Part 1)",
    "testLabel": "DPP 20",
    "testType": "DPP",
    "bracket": "Integral Calculus - Part 1",
    "subject": "em",
    "series": "cse-dpp-2027",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 10,
    "topicsCovered": "Integral Calculus (Practice Set 1)",
    "questions": [
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\">Find the length of the curve $x=\\cos t,\\ y=t+\\sin t,\\ 0\\le t\\le \\pi$.</div></span>",
            "image": "",
            "options": [],
            "answer": "4",
            "solution": "<div class=\"solution-content\"><a name=\"533436\"></a><div itemprop=\"text\"><p data-end=\"202\" data-start=\"87\">For the parametric curve $x=\\cos t$ and $y=t+\\sin t$, we have $x'(t)=-\\sin t$ and $y'(t)=1+\\cos t$.</p><p data-end=\"277\" data-start=\"204\">The arc length is given by $$L=\\int_0^\\pi \\sqrt{(x'(t))^2+(y'(t))^2} ~dt$$</p><p data-end=\"334\" data-start=\"279\">$$\\Rightarrow L=\\int_0^\\pi \\sqrt{(-\\sin t)^2+(1+\\cos t)^2}dt$$</p><p data-end=\"407\" data-start=\"336\">Now simplify:<br data-end=\"352\" data-start=\"349\"/>$$(-\\sin t)^2+(1+\\cos t)^2=\\sin^2 t+1+2\\cos t+\\cos^2 t$$</p><p data-end=\"463\" data-start=\"409\">Since $\\sin^2 t+\\cos^2 t=1$, this becomes $2+2\\cos t$.</p><p data-end=\"528\" data-start=\"465\">Using $1+\\cos t=2\\cos^2(t/2)$, we get $2+2\\cos t=4\\cos^2(t/2)$.</p><p data-end=\"597\" data-start=\"530\">$\\therefore \\sqrt{4\\cos^2(t/2)}=2\\cos(t/2)$, since $0\\le t\\le \\pi$</p><p data-end=\"633\" data-start=\"599\">$$\\Rightarrow L=\\int_0^\\pi 2\\cos(t/2)dt$$</p><p data-end=\"661\" data-start=\"635\">$$\\Rightarrow L=4\\big[\\sin(t/2)\\big]_0^\\pi$$</p><p data-end=\"691\" data-start=\"663\">$$\\Rightarrow L=4\\sin(\\pi/2)-4\\sin(0)=\\boxed{4}$$</p><p data-end=\"691\" data-start=\"663\"><strong data-end=\"710\" data-start=\"693\">Answer: </strong>The length of the curve is $\\textbf{4}$.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/533435/go-classes-dpp-gate-cs-da-calculus-%26-optimization-arc-length\" target=\"_blank\">GATE Overflow #533435</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"102\" data-start=\"27\">Find $\\dfrac{dy}{dx}$ where $$y=\\int_{x^2}^{\\sin x}\\sqrt{1+t^4}dt$$</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\cos x\\sqrt{1+\\sin^4x}-2x\\sqrt{1+x^8}$<br/></span>",
                "<span style=\"display: inline;\">$\\cos x\\sqrt{1+\\sin^4x}+2x\\sqrt{1+x^8}$<br/></span>",
                "<span style=\"display: inline;\">$\\sqrt{1+\\sin^4x}-\\sqrt{1+x^8}$<br/></span>",
                "<span style=\"display: inline;\">$2x\\sqrt{1+\\sin^4x}-\\cos x\\sqrt{1+x^8}$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"533434\"></a><div itemprop=\"text\"><p>We are given $$y=\\int_{x^2}^{\\sin x}\\sqrt{1+t^4}dt$$</p><p>This integral has both limits depending on $x$, so use the Fundamental Theorem of Calculus with the chain rule.</p><p>If $$y=\\int_{a(x)}^{b(x)}F(t)dt$$ then</p><p>$$\\frac{dy}{dx}=F(b(x))b'(x)-F(a(x))a'(x)$$</p><p>Here,</p><p>$$F(t)=\\sqrt{1+t^4}$$</p><p>$$a(x)=x^2$$</p><p>$$b(x)=\\sin x$$</p><p>So,</p><p>$$\\Rightarrow \\frac{dy}{dx}=F(\\sin x)\\frac{d}{dx}(\\sin x)-F(x^2)\\frac{d}{dx}(x^2)$$</p><p>$$\\Rightarrow \\frac{dy}{dx}=F(\\sin x)\\cos x-F(x^2)(2x)$$</p><p>Now substitute into $F(t)=\\sqrt{1+t^4}$:</p><p>$$\\Rightarrow F(\\sin x)=\\sqrt{1+\\sin^4x}$$</p><p>$$\\Rightarrow F(x^2)=\\sqrt{1+(x^2)^4}=\\sqrt{1+x^8}$$</p><p>$$\\boxed{\\therefore \\frac{dy}{dx}=\\cos x\\sqrt{1+\\sin^4x}-2x\\sqrt{1+x^8}}$$</p><p>Answer: <strong>A.</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/533432/go-classes-dpp-gate-cs-da-calculus-%26-optimization-chain-rule\" target=\"_blank\">GATE Overflow #533432</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"98\" data-start=\"38\">Find $f(x)$ if $f'(x)=6x^2+\\sec^2 x$ and $f(0)=4$.</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$f(x)=2x^3+\\tan x+4$<br/></span>",
                "<span style=\"display: inline;\">$f(x)=2x^3-\\tan x+4$<br/></span>",
                "<span style=\"display: inline;\">$f(x)=6x^3+\\tan x+4$<br/></span>",
                "<span style=\"display: inline;\">$f(x)=2x^3+\\tan x-4$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"533431\"></a><div itemprop=\"text\"><p data-end=\"263\" data-start=\"203\">Since $f'(x)=6x^2+\\sec^2 x$, integrate both sides.</p><p data-end=\"293\" data-start=\"265\">$$\\Rightarrow f(x)=\\int(6x^2+\\sec^2 x)dx$$</p><p data-end=\"315\" data-start=\"295\">$$\\Rightarrow f(x)=2x^3+\\tan x+C$$</p><p data-end=\"334\" data-start=\"317\">Now use $f(0)=4$.</p><p data-end=\"357\" data-start=\"336\">$$\\Rightarrow f(0)=2(0)^3+\\tan0+C$$</p><p data-end=\"368\" data-start=\"359\">$$\\Rightarrow 4=0+0+C$$</p><p data-end=\"375\" data-start=\"370\">$$\\Rightarrow C=4$$</p><p data-end=\"387\" data-start=\"377\">$$\\boxed{\\therefore {f(x)=2x^3+\\tan x+4}}$$</p><p data-end=\"442\" data-is-last-node=\"\" data-is-only-node=\"\" data-start=\"411\">Answer: <strong>A.</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/533430/go-classes-dpp-gate-cs-da-calculus-%26-optimization-initial-value-integration\" target=\"_blank\">GATE Overflow #533430</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Find the area of the region bounded by the lines $x=-1$, $x=2$, $y=0$, and the curve $y=x^3-x^2-2x$.</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\frac{5}{12}$<br/></span>",
                "<span style=\"display: inline;\">$\\frac{8}{3}$<br/></span>",
                "<span style=\"display: inline;\">$\\frac{37}{12}$<br/></span>",
                "<span style=\"display: inline;\">$\\frac{11}{4}$</span>"
            ],
            "answer": "C",
            "solution": "<div class=\"solution-content\"><a name=\"533426\"></a><div itemprop=\"text\"><p data-end=\"334\" data-start=\"223\">The required area is the area between the curve $y=x^3-x^2-2x$ and the $x$-axis from $x=-1$ to $x=2$.</p><p data-end=\"362\" data-start=\"336\">First factor the function:</p><p data-end=\"387\" data-start=\"364\">$$x^3-x^2-2x=x(x^2-x-2)$$</p><p data-end=\"413\" data-start=\"389\">$$x^3-x^2-2x=x(x-2)(x+1)$$</p><p data-end=\"440\" data-start=\"415\">The zeros are $x=-1,0,2$.</p><p data-end=\"507\" data-start=\"442\">On $(-1,0)$, $x(x-2)(x+1)&gt;0$, so the curve is above the $x$-axis.</p><p data-end=\"573\" data-start=\"509\">On $(0,2)$, $x(x-2)(x+1)&lt;0$, so the curve is below the $x$-axis.</p><p style=\"text-align:center\"><img alt=\"\" height=\"275\" src=\"https://cdn.mathpix.com/snip/images/UvuWZ9ul3ITLpnuXu0d9mdfzkaB41rOdCs1LD9CzC-8.original.fullsize.png\" width=\"378\"/></p><p data-end=\"573\" data-start=\"509\"> </p><p data-end=\"597\" data-start=\"575\">Therefore, the area is</p><p data-end=\"653\" data-start=\"599\">$$A=\\int_{-1}^{0}(x^3-x^2-2x)dx-\\int_0^2(x^3-x^2-2x)dx$$</p><p data-path-to-node=\"18\">The general antiderivative is:</p><p>$$\\int (x^3 - x^2 - 2x) dx = \\frac{x^4}{4} - \\frac{x^3}{3} - x^2$$</p><p data-end=\"716\" data-start=\"712\">Now,</p><p>$$\\Rightarrow A = \\left[ \\frac{x^4}{4} - \\frac{x^3}{3} - x^2 \\right]_{-1}^{0} - \\left[ \\frac{x^4}{4} - \\frac{x^3}{3} - x^2 \\right]_{0}^{2}$$</p><p>$$\\Rightarrow A = \\left[ 0 - \\left( \\frac{(-1)^4}{4} - \\frac{(-1)^3}{3} - (-1)^2 \\right) \\right] - \\left[ \\left( \\frac{(2)^4}{4} - \\frac{(2)^3}{3} - (2)^2 \\right) - 0\\right]$$</p><p data-end=\"760\" data-start=\"718\">$$\\Rightarrow A= \\left[\\frac{5}{12}-\\left(-\\frac{8}{3}\\right)\\right]$$</p><p data-end=\"885\" data-start=\"855\">$$\\Rightarrow A=\\frac{5}{12}+\\frac{32}{12}$$</p><p data-end=\"904\" data-start=\"887\">$$\\boxed{\\therefore A=\\frac{37}{12}}$$</p><p data-end=\"932\" data-start=\"906\">Answer: <strong>C</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/533425/go-classes-dpp-gate-cs-da-calculus-%26-optimization-area-between-curves\" target=\"_blank\">GATE Overflow #533425</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"158\" data-start=\"26\">The volume of the solid generated by revolving the region bounded by the curves $y=x^2$ and $y=x+2$ about the $x$-axis is:</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\frac{72}{5}$<br/></span>",
                "<span style=\"display: inline;\">$\\frac{72\\pi}{5}$<br/></span>",
                "<span style=\"display: inline;\">$\\frac{36\\pi}{5}$<br/></span>",
                "<span style=\"display: inline;\">$\\frac{84\\pi}{5}$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"533424\"></a><div itemprop=\"text\"><p>First find the points of intersection.</p><p data-path-to-node=\"3\">To find the limits of integration, we need to determine where the two curves intersect by setting them equal to each other:</p><p>$$\\Rightarrow x^2 = x + 2$$</p><p>$$\\Rightarrow x^2 - x - 2 = 0$$</p><p>$$\\Rightarrow (x - 2)(x + 1) = 0$$</p><p data-path-to-node=\"7\">So, the curves intersect at $x = -1$ and $x = 2$.</p><p data-path-to-node=\"7\"><br/>Now, we'll determine the upper and lower curves.</p><p data-path-to-node=\"8\">Over the interval $[-1, 2]$, we can test a point (like $x = 0$) to see which curve is on top:</p><ul data-path-to-node=\"9\"><li><p data-path-to-node=\"9,0,0\">$y = (0)^2 = 0$</p></li><li><p data-path-to-node=\"9,1,0\">$y = (0) + 2 = 2$</p></li></ul><p data-path-to-node=\"10\">Since $x + 2 &gt; x^2$ on this interval, $y = x + 2$ is the outer radius (top curve) and $y = x^2$ is the inner radius (bottom curve).</p><p style=\"text-align:center\"><img alt=\"\" height=\"286\" src=\"https://cdn.mathpix.com/snip/images/UWDFHC7JvYJs0uxSMXak0mFzLWsAgHuTkZdo010qVuI.original.fullsize.png\" width=\"393\"/></p><p data-path-to-node=\"11\"><br/>Now, when revolving around the $x$-axis, the formula for the volume using the washer method is:</p><p>$$V = \\pi \\int_{a}^{b} [(\\text{Outer Radius})^2 - (\\text{Inner Radius})^2] dx$$</p><p data-path-to-node=\"13\">Substitute the functions and the limits of integration:</p><p>$$\\Rightarrow V = \\pi \\int_{-1}^{2} [(x + 2)^2 - (x^2)^2] dx$$</p><p>$$\\Rightarrow V = \\pi \\int_{-1}^{2} [x^2 + 4x + 4 - x^4] dx$$</p><p data-path-to-node=\"17\">$$\\Rightarrow V = \\pi \\left[ \\frac{x^3}{3} + 2x^2 + 4x - \\frac{x^5}{5} \\right]_{-1}^{2}$$</p><p>$$\\Rightarrow V = \\pi \\left[ \\frac{8}{3} + 2(4) + 4(2) - \\frac{32}{5} \\right] - \\left[ \\frac{-1}{3} + 2(1) + 4(-1) - \\left(\\frac{-1}{5}\\right) \\right]$$</p><p>$$\\Rightarrow V = \\pi \\left[ \\frac{184}{15} - \\left(-\\frac{32}{15}\\right) \\right] = \\pi \\left( \\frac{184 + 32}{15} \\right) = \\pi \\left( \\frac{216}{15} \\right)$$</p><p>$$\\boxed{\\therefore V = \\frac{72\\pi}{5}}$$</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/533423/go-classes-dpp-gate-cs-da-calculus-%26-optimization-applications-of-integration\" target=\"_blank\">GATE Overflow #533423</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"124\" data-start=\"23\">The length of the curve $y=\\frac{1}{3}\\left((x-1)^2+2\\right)^{3/2}$ for $-1\\leq x\\leq2$ is:</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$5$<br/></span>",
                "<span style=\"display: inline;\">$6$<br/></span>",
                "<span style=\"display: inline;\">$\\dfrac{20}{3}$<br/></span>",
                "<span style=\"display: inline;\">$8$</span>"
            ],
            "answer": "B",
            "solution": "<div class=\"solution-content\"><a name=\"533362\"></a><div itemprop=\"text\"><p>We are given $y=\\frac{1}{3}\\left((x-1)^2+2\\right)^{3/2}$ on $-1\\leq x\\leq2$.</p><p>For arc length, use</p><p>$$L=\\int_a^b\\sqrt{1+\\left(\\frac{dy}{dx}\\right)^2}dx$$</p><p>First differentiate $y$.</p><p>$$y=\\frac{1}{3}\\left((x-1)^2+2\\right)^{3/2}$$</p><p>Using the chain rule,</p><p>$$\\frac{dy}{dx}=\\frac{1}{3}\\cdot\\frac{3}{2}\\left((x-1)^2+2\\right)^{1/2}\\cdot2(x-1)$$</p><p>So,</p><p>$$\\frac{dy}{dx}=(x-1)\\sqrt{(x-1)^2+2}$$</p><p>Now substitute into the arc length formula:</p><p>$$L=\\int_{-1}^{2}\\sqrt{1+\\left((x-1)\\sqrt{(x-1)^2+2}\\right)^2}dx$$</p><p>$$L=\\int_{-1}^{2}\\sqrt{1+(x-1)^2((x-1)^2+2)}dx$$</p><p>Expand inside the square root:</p><p>$$1+(x-1)^2((x-1)^2+2)=1+(x-1)^4+2(x-1)^2$$</p><p>This is a perfect square:</p><p>$$1+(x-1)^4+2(x-1)^2=\\left((x-1)^2+1\\right)^2$$</p><p>Therefore,</p><p>$$L=\\int_{-1}^{2}\\sqrt{\\left((x-1)^2+1\\right)^2}dx$$</p><p>Since $(x-1)^2+1$ is always positive,</p><p>$$L=\\int_{-1}^{2}\\left((x-1)^2+1\\right)dx$$</p><p>Now integrate:</p><p>$$L=\\int_{-1}^{2}(x^2-2x+2)dx$$</p><p>$$L=\\left[\\frac{x^3}{3}-x^2+2x\\right]_{-1}^{2}$$</p><p>At $x=2$:</p><p>$$\\frac{8}{3}-4+4=\\frac{8}{3}$$</p><p>At $x=-1$:</p><p>$$-\\frac{1}{3}-1-2=-\\frac{10}{3}$$</p><p>So,</p><p>$$L=\\frac{8}{3}-\\left(-\\frac{10}{3}\\right)=\\frac{18}{3}=6$$</p><p>Answer:<strong> B.</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/533361/go-classes-dpp-gate-cs-da-calculus-%26-optimization-arc-length\" target=\"_blank\">GATE Overflow #533361</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"130\" data-start=\"32\">The area of the region between the curves $y=x^2-2x$ and $y=2x-x^2$ for $x\\in[-1,3]$ is:</p><p style=\"text-align:center\"><img alt=\"\" height=\"282\" src=\"https://cdn.mathpix.com/snip/images/oBT7iBXvrJd1aRzQ5QU0d6kW8jw-s005q5orYOef1hM.original.fullsize.png\" width=\"385\"/></p></div></span>",
            "image": "https://cdn.mathpix.com/snip/images/oBT7iBXvrJd1aRzQ5QU0d6kW8jw-s005q5orYOef1hM.original.fullsize.png",
            "options": [
                "<span style=\"display: inline;\">$4$<br/></span>",
                "<span style=\"display: inline;\">$\\frac{16}{3}$<br/></span>",
                "<span style=\"display: inline;\">$\\frac{20}{3}$<br/></span>",
                "<span style=\"display: inline;\">$8$</span>"
            ],
            "answer": "D",
            "solution": "<div class=\"solution-content\"><a name=\"533360\"></a><div itemprop=\"text\"><p>We need the area between $y=x^2-2x$ and $y=2x-x^2$ on $[-1,3]$.</p><p>First find the difference between the curves:</p><p>$$(2x-x^2)-(x^2-2x)=4x-2x^2$$</p><p>So the area is</p><p>$$\\int_{-1}^{3}|4x-2x^2|dx$$</p><p>Now factor the expression inside the absolute value:</p><p>$$4x-2x^2=2x(2-x)$$</p><p>This is zero at $x=0$ and $x=2$, so we split the integral at these points.</p><p>On $[-1,0]$, $2x(2-x)&lt;0$.</p><p>On $[0,2]$, $2x(2-x)&gt;0$.</p><p>On $[2,3]$, $2x(2-x)&lt;0$.</p><p>Therefore,</p><p>$$\\int_{-1}^{3}|4x-2x^2|dx=-\\int_{-1}^{0}(4x-2x^2)dx+\\int_0^2(4x-2x^2)dx-\\int_2^3(4x-2x^2)dx$$</p><p>An antiderivative is</p><p>$$\\int(4x-2x^2)dx=2x^2-\\frac{2x^3}{3}$$</p><p>Now calculate each part:</p><p>$$-\\int_{-1}^{0}(4x-2x^2)dx=-\\left[2x^2-\\frac{2x^3}{3}\\right]_{-1}^{0}=\\frac{8}{3}$$</p><p>$$\\int_0^2(4x-2x^2)dx=\\left[2x^2-\\frac{2x^3}{3}\\right]_0^2=\\frac{8}{3}$$</p><p>$$-\\int_2^3(4x-2x^2)dx=-\\left[2x^2-\\frac{2x^3}{3}\\right]_2^3=\\frac{8}{3}$$</p><p>So the total area is</p><p>$$\\frac{8}{3}+\\frac{8}{3}+\\frac{8}{3}=8$$</p><p>Answer: <strong>D.</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/533358/go-classes-dpp-gate-cs-da-calculus-%26-optimization-area-between-curves\" target=\"_blank\">GATE Overflow #533358</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Find the value of $$\\int_{-2}^{3}|x^3-3x^2-4x+12|dx$$</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\dfrac{125}{4}$<br/></span>",
                "<span style=\"display: inline;\">$\\dfrac{131}{4}$<br/></span>",
                "<span style=\"display: inline;\">$32$<br/></span>",
                "<span style=\"display: inline;\">$\\dfrac{119}{4}$</span>"
            ],
            "answer": "B",
            "solution": "<div class=\"solution-content\"><a name=\"533261\"></a><div itemprop=\"text\"><p data-end=\"237\" data-start=\"173\">First factor the expression inside the absolute value.</p><p data-end=\"268\" data-start=\"239\">$$\\Rightarrow x^3-3x^2-4x+12=(x^2-4)(x-3)$$</p><p data-end=\"302\" data-start=\"270\">$$\\Rightarrow x^3-3x^2-4x+12=(x+2)(x-2)(x-3)$$</p><p data-end=\"329\" data-start=\"304\">The zeros are $x=-2,2,3$.</p><p style=\"text-align:center\"><img alt=\"\" height=\"351\" src=\"https://cdn.mathpix.com/snip/images/ZVLwjUKIBulzoePUfjkCsjVcahJ7yBMaU43k9Qe9rmo.original.fullsize.png\" width=\"617\"/></p><p data-end=\"411\" data-start=\"331\">On $(-2,2)$, the expression is positive. On $(2,3)$, the expression is negative.</p><p data-end=\"416\" data-start=\"413\">$$\\Rightarrow \\int_{-2}^{3}|x^3-3x^2-4x+12|dx=\\int_{-2}^{2}(x^3-3x^2-4x+12)dx-\\int_{2}^{3}(x^3-3x^2-4x+12)dx$$</p><p data-end=\"536\" data-start=\"516\">An antiderivative is</p><p data-end=\"566\" data-start=\"538\">$$\\frac{x^4}{4}-x^3-2x^2+12x$$</p><p data-end=\"572\" data-start=\"568\">Now,</p><p data-end=\"610\" data-start=\"574\">$$\\int_{-2}^{2}(x^3-3x^2-4x+12)dx=32$$</p><p data-end=\"615\" data-start=\"612\">and</p><p data-end=\"658\" data-start=\"617\">$$\\int_2^3(x^3-3x^2-4x+12)dx=-\\frac{3}{4}$$</p><p data-end=\"670\" data-start=\"660\">Therefore,</p><p data-end=\"748\" data-start=\"672\">$$\\int_{-2}^{3}|x^3-3x^2-4x+12|dx=32-\\left(-\\frac{3}{4}\\right)=\\mathbf{\\frac{131}{4}}$$</p><p data-end=\"776\" data-start=\"750\">Answer: <strong>B</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/533260/go-classes-dpp-gate-cs-da-calculus-%26-optimization-absolute-value-integrals\" target=\"_blank\">GATE Overflow #533260</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"141\" data-start=\"33\">Evaluate $$I=\\int_0^{\\frac{\\pi}{2}}\\frac{\\cos x}{\\sqrt{1+\\sin x}\\left(1+\\sqrt{1+\\sin x}\\right)}dx$$</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$2\\ln\\left(\\frac{1+\\sqrt2}{2}\\right)$<br/></span>",
                "<span style=\"display: inline;\">$\\ln\\left(\\frac{1+\\sqrt2}{2}\\right)$<br/></span>",
                "<span style=\"display: inline;\">$2\\ln(1+\\sqrt2)$<br/></span>",
                "<span style=\"display: inline;\">$\\sqrt2-1$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"533256\"></a><div itemprop=\"text\"><p data-end=\"299\" data-start=\"265\">Let $u=\\sqrt{1+\\sin x}$.</p><p data-end=\"321\" data-start=\"301\">$$\\Rightarrow u^2=1+\\sin x$$</p><p data-end=\"348\" data-start=\"323\">Differentiate both sides:</p><p data-end=\"374\" data-start=\"350\">$$\\Rightarrow 2u\\frac{du}{dx}=\\cos x$$</p><p data-end=\"379\" data-start=\"376\">$$\\Rightarrow \\cos xdx=2udu$$</p><p data-end=\"420\" data-start=\"398\">Now change the limits.</p><p data-end=\"455\" data-start=\"422\">When $x=0$, $u=\\sqrt{1+\\sin0}=1$.</p><p data-end=\"519\" data-start=\"457\">When $x=\\frac{\\pi}{2}$, $u=\\sqrt{1+\\sin\\frac{\\pi}{2}}=\\sqrt2$.</p><p data-end=\"524\" data-start=\"521\">$$\\Rightarrow I=\\int_1^{\\sqrt2}\\frac{2u}{u(1+u)}du$$</p><p data-end=\"577\" data-start=\"566\">$$\\Rightarrow I=\\int_1^{\\sqrt2}\\frac{2}{1+u}du$$</p><p data-end=\"652\" data-start=\"615\">$$\\Rightarrow I=2\\left[\\ln(1+u)\\right]_1^{\\sqrt2}$$</p><p data-end=\"690\" data-start=\"654\">$$\\Rightarrow I=2\\left(\\ln(1+\\sqrt2)-\\ln2\\right)$$</p><p data-end=\"731\" data-start=\"692\">$$\\boxed{\\therefore I=2\\ln\\left(\\frac{1+\\sqrt2}{2}\\right)}$$</p><p data-end=\"781\" data-start=\"733\">Answer: <strong>A.</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/533255/go-classes-dpp-gate-cs-da-calculus-%26-optimization-definite-integration\" target=\"_blank\">GATE Overflow #533255</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"91\" data-start=\"31\">Evaluate $$I=\\int_0^1 \\frac{x^2}{(1-x^2)^{3/2}}dx$$</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\frac{\\pi}{4}$<br/></span>",
                "<span style=\"display: inline;\">$1$<br/></span>",
                "<span style=\"display: inline;\">$2$<br/></span>",
                "<span style=\"display: inline;\">The integral diverges</span>"
            ],
            "answer": "D",
            "solution": "<div class=\"solution-content\"><a name=\"533107\"></a><div itemprop=\"text\"><p data-end=\"72\" data-start=\"0\">The integral is improper because $(1-x^2)^{3/2}=0$ when $x=1$.</p><p data-end=\"97\" data-start=\"74\">So write it as a limit:</p><p data-end=\"153\" data-start=\"99\">$$I=\\lim_{b\\to1^-}\\int_0^b \\frac{x^2}{(1-x^2)^{3/2}}dx$$</p><p data-end=\"191\" data-start=\"155\">Use the substitution $x=\\sin\\theta$.</p><p data-end=\"222\" data-start=\"193\">Then $dx=\\cos\\theta d\\theta$.</p><p data-end=\"247\" data-start=\"224\">When $x=0$, $\\theta=0$.</p><p data-end=\"281\" data-start=\"249\">When $x=b$, $\\theta=\\sin^{-1}b$.</p><p data-end=\"286\" data-start=\"283\">So,</p><p data-end=\"386\" data-start=\"288\">$$I=\\lim_{b\\to1^-}\\int_0^{\\sin^{-1}b}\\frac{\\sin^2\\theta}{(1-\\sin^2\\theta)^{3/2}}\\cos\\theta d\\theta$$</p><p data-end=\"424\" data-start=\"388\">Since $1-\\sin^2\\theta=\\cos^2\\theta$,</p><p data-end=\"514\" data-start=\"426\">$$I=\\lim_{b\\to1^-}\\int_0^{\\sin^{-1}b}\\frac{\\sin^2\\theta}{\\cos^3\\theta}\\cos\\theta d\\theta$$</p><p data-end=\"573\" data-start=\"516\">$$I=\\lim_{b\\to1^-}\\int_0^{\\sin^{-1}b}\\tan^2\\theta d\\theta$$</p><p data-end=\"609\" data-start=\"575\">Use $\\tan^2\\theta=\\sec^2\\theta-1$:</p><p data-end=\"671\" data-start=\"611\">$$I=\\lim_{b\\to1^-}\\int_0^{\\sin^{-1}b}(\\sec^2\\theta-1)d\\theta$$</p><p data-end=\"736\" data-start=\"673\">$$I=\\lim_{b\\to1^-}\\left[\\tan\\theta-\\theta\\right]_0^{\\sin^{-1}b}$$</p><p data-end=\"796\" data-start=\"738\">$$I=\\lim_{b\\to1^-}\\left(\\tan(\\sin^{-1}b)-\\sin^{-1}b\\right)$$</p><p data-end=\"846\" data-start=\"798\">Since $\\tan(\\sin^{-1}b)=\\frac{b}{\\sqrt{1-b^2}}$,</p><p data-end=\"912\" data-start=\"848\">$$I=\\lim_{b\\to1^-}\\left(\\frac{b}{\\sqrt{1-b^2}}-\\sin^{-1}b\\right)$$</p><p data-end=\"998\" data-start=\"914\"><br/>As $b\\to1^-$, $\\quad\\dfrac{b}{\\sqrt{1-b^2}}\\to\\infty\\quad$, while $\\quad\\sin^{-1}b\\to\\dfrac{\\pi}{2}$. Therefore, the integral diverges.</p><p data-end=\"1067\" data-is-last-node=\"\" data-is-only-node=\"\" data-start=\"1035\">Answer: <strong>D.</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/533106/go-classes-dpp-gate-cs-da-calculus-%26-optimization-improper-integrals\" target=\"_blank\">GATE Overflow #533106</a></small></div>"
        }
    ]
});

registerTest({
    "name": "DPP 21 - Engineering Mathematics (Integral Calculus - Part 2)",
    "testLabel": "DPP 21",
    "testType": "DPP",
    "bracket": "Integral Calculus - Part 2",
    "subject": "em",
    "series": "cse-dpp-2027",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 11,
    "topicsCovered": "Integral Calculus (Practice Set 2)",
    "questions": [
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\">Let $f(x)=\\left|x-\\lfloor x\\rfloor-\\frac{1}{2}\\right|$, where $\\lfloor x\\rfloor$ denotes the greatest integer less than or equal to $x$. The value of $\\int_{0.2}^{2.75} f(x)dx$ is ______, up to $2$ decimal places.</div></span>",
            "image": "",
            "options": [],
            "answer": "0.58",
            "solution": "<div class=\"solution-content\"><a name=\"533104\"></a><div itemprop=\"text\"><p data-end=\"152\" data-start=\"0\">Since $\\lfloor x\\rfloor$ is the greatest integer less than or equal to $x$, the expression $x-\\lfloor x\\rfloor$ is the fractional part of $x$.</p><p data-end=\"245\" data-start=\"154\">So $f(x)=\\left|x-\\lfloor x\\rfloor-\\frac{1}{2}\\right|$ repeats every interval of length $1$.</p><p style=\"text-align:center\"><img alt=\"\" height=\"259\" src=\"https://cdn.mathpix.com/snip/images/x-ntRYRK4fC0E9pXYbJMZc16T6VtBTr9B8Mt44YXllc.original.fullsize.png\" width=\"455\"/></p><p data-end=\"327\" data-start=\"247\">On each interval $[n,n+1)$, let $u=x-n$. Then $f(x)=\\left|u-\\frac{1}{2}\\right|$.</p><p data-end=\"352\" data-start=\"329\">Now split the integral:</p><p data-end=\"435\" data-start=\"354\">$$\\int_{0.2}^{2.75}f(x)dx=\\int_{0.2}^{1}f(x)dx+\\int_1^2f(x)dx+\\int_2^{2.75}f(x)dx$$</p><p data-end=\"514\" data-start=\"437\">For the first part, on $[0.2,1]$, the fractional part goes from $0.2$ to $1$:</p><p data-end=\"626\" data-start=\"516\">$$\\Rightarrow \\int_{0.2}^{1}f(x)dx=\\int_{0.2}^{0.5}\\left(\\frac{1}{2}-x\\right)dx+\\int_{0.5}^{1}\\left(x-\\frac{1}{2}\\right)dx$$</p><p data-end=\"647\" data-start=\"628\">$$=0.045+0.125=0.17$$</p><p data-end=\"752\" data-start=\"649\">For the middle part, $[1,2]$ is one full period. The graph is a V-shape made of two equal triangles, so</p><p data-end=\"787\" data-start=\"754\">$$\\int_1^2f(x)dx=\\frac{1}{4}=0.25$$</p><p data-end=\"835\" data-start=\"789\">For the last part, on $[2,2.75]$, let $u=x-2$:</p><p data-end=\"900\" data-start=\"837\">$$\\Rightarrow \\int_2^{2.75}f(x)dx=\\int_0^{0.75}\\left|u-\\frac{1}{2}\\right|du$$</p><p data-end=\"991\" data-start=\"902\">$$=\\int_0^{0.5}\\left(\\frac{1}{2}-u\\right)du+\\int_{0.5}^{0.75}\\left(u-\\frac{1}{2}\\right)du$$</p><p data-end=\"1017\" data-start=\"993\">$$=0.125+0.03125=0.15625$$</p><p data-end=\"1029\" data-start=\"1019\">Therefore,</p><p data-end=\"1082\" data-start=\"1031\">$$\\int_{0.2}^{2.75}f(x)dx=0.17+0.25+0.15625=0.57625\\approx 0.58$$</p><p data-end=\"1151\" data-is-last-node=\"\" data-is-only-node=\"\" data-start=\"1137\">Answer: $\\boxed{0.58}$</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/533100/go-classes-dpp-gate-cs-da-calculus-%26-optimization-integration\" target=\"_blank\">GATE Overflow #533100</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"191\" data-start=\"40\">Let $f:[0,1]\\to\\mathbb{R}$ be continuous and satisfy $f(x)=x^2+\\int_0^1 (x+t)f(t)dt$ for every $x\\in[0,1]$. Which of the following is $f(x)$?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$x^2-5x-\\frac{17}{6}$<br/></span>",
                "<span style=\"display: inline;\">$x^2+5x+\\frac{17}{6}$<br/></span>",
                "<span style=\"display: inline;\">$x^2-\\frac{5}{2}x-\\frac{17}{6}$<br/></span>",
                "<span style=\"display: inline;\">$x^2-5x+\\frac{17}{6}$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"533097\"></a><div itemprop=\"text\"><p data-end=\"59\" data-start=\"0\">Let, $$A=\\int_0^1 f(t)dt \\qquad\\text{ and }\\qquad B=\\int_0^1 tf(t)dt$$</p><p data-end=\"99\" data-start=\"61\">Given, $$f(x)=x^2+\\int_0^1 (x+t)f(t)dt$$</p><p data-end=\"143\" data-start=\"101\">Since $x$ is constant with respect to $t$,</p><p data-end=\"201\" data-start=\"145\">$$\\Rightarrow \\int_0^1 (x+t)f(t)dt=\\int_0^1 xf(t)dt+\\int_0^1 tf(t)dt$$</p><p data-end=\"239\" data-start=\"203\">$$\\Rightarrow \\int_0^1 (x+t)f(t)dt=x\\int_0^1 f(t)dt+\\int_0^1 tf(t)dt$$</p><p data-end=\"248\" data-start=\"241\">$$\\Rightarrow \\int_0^1 (x+t)f(t)dt=xA+B$$</p><p data-end=\"273\" data-start=\"250\">So the equation becomes</p><p data-end=\"291\" data-start=\"275\">$$f(x)=x^2+Ax+B$$</p><p data-end=\"338\" data-start=\"293\">Now use this form of $f$ to find $A$ and $B$.</p><p data-end=\"366\" data-start=\"340\">Since, $A=\\int_0^1 f(t)dt$,</p><p data-end=\"393\" data-start=\"368\">$$\\Rightarrow A=\\int_0^1 (t^2+At+B)dt$$</p><p data-end=\"424\" data-start=\"395\">$$\\Rightarrow A=\\frac{1}{3}+\\frac{A}{2}+B$$</p><p data-end=\"429\" data-start=\"426\">$$\\Rightarrow \\frac{A}{2}-B=\\frac{1}{3}$$</p><p data-end=\"488\" data-start=\"461\">Since $B=\\int_0^1 tf(t)dt$,</p><p data-end=\"516\" data-start=\"490\">$$\\Rightarrow B=\\int_0^1 t(t^2+At+B)dt$$</p><p data-end=\"546\" data-start=\"518\">$$\\Rightarrow B=\\int_0^1 (t^3+At^2+Bt)dt$$</p><p data-end=\"587\" data-start=\"548\">$$\\Rightarrow B=\\frac{1}{4}+\\frac{A}{3}+\\frac{B}{2}$$</p><p data-end=\"592\" data-start=\"589\">$$\\Rightarrow -\\frac{A}{3}+\\frac{B}{2}=\\frac{1}{4}$$</p><p data-end=\"656\" data-start=\"635\">Now solve the system:</p><p data-end=\"685\" data-start=\"658\">$$\\frac{A}{2}-B=\\frac{1}{3}\\quad......(1)\\qquad\\qquad-\\frac{A}{3}+\\frac{B}{2}=\\frac{1}{4}\\quad....(2)$$</p><p data-end=\"762\" data-start=\"727\">Multiply the first equation by $6$:</p><p data-end=\"773\" data-start=\"764\">$$3A-6B=2$$</p><p data-end=\"812\" data-start=\"775\">Multiply the second equation by $12$:</p><p data-end=\"824\" data-start=\"814\">$$-4A+6B=3$$</p><p data-end=\"844\" data-start=\"826\">Add the equations:</p><p data-end=\"852\" data-start=\"846\">$$-A=5$$</p><p data-end=\"864\" data-start=\"854\">$$\\Rightarrow A=-5$$</p><p data-end=\"910\" data-start=\"866\">Substitute into $\\frac{A}{2}-B=\\frac{1}{3}$:</p><p data-end=\"940\" data-start=\"912\">$$\\Rightarrow \\frac{-5}{2}-B=\\frac{1}{3}$$</p><p data-end=\"983\" data-start=\"942\">$$\\Rightarrow -B=\\frac{1}{3}+\\frac{5}{2}=\\frac{17}{6}$$</p><p data-end=\"1006\" data-start=\"985\">$$\\Rightarrow B=-\\frac{17}{6}$$</p><p data-end=\"1018\" data-start=\"1008\"> </p><p data-end=\"1056\" data-start=\"1020\">$$\\therefore f(x)=x^2+Ax+B=\\boxed{x^2-5x-\\frac{17}{6}}$$</p><p data-end=\"1090\" data-is-last-node=\"\" data-is-only-node=\"\" data-start=\"1058\">Answer: <strong>A.</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/533096/go-classes-dpp-gate-cs-da-calculus-%26-optimization-definite-integration\" target=\"_blank\">GATE Overflow #533096</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"253\" data-start=\"39\">Suppose $f:[0,\\infty)\\to[0,\\infty)$ is continuous, strictly increasing, and onto, and let $g=f^{-1}$. For $a,b&gt;0$, define $$I=\\int_0^a f(x)dx+\\int_0^b g(y)dy-ab$$ Which of the following is always<strong> true</strong>?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$I<0$ whenever $b\\neq f(a)$<br/></span>",
                "<span style=\"display: inline;\">$I=0$ for all $a,b>0$<br/></span>",
                "<span style=\"display: inline;\">$I\\geq0$, with equality only when $b=f(a)$<br/></span>",
                "<span style=\"display: inline;\">$I\\leq0$, with equality only when $b=f(a)$</span>"
            ],
            "answer": "C",
            "solution": "<div class=\"solution-content\"><a name=\"533002\"></a><div itemprop=\"text\"><p data-end=\"75\" data-start=\"0\">Let $I=\\int_0^a f(x),dx+\\int_0^b g(y),dy-ab$, where $g=f^{-1}$.</p><p data-end=\"111\" data-start=\"77\">We want to decide the sign of $I$.</p><p data-end=\"166\" data-start=\"113\">Define $F(b)=\\int_0^a f(x),dx+\\int_0^b g(y),dy-ab$.</p><p data-end=\"211\" data-start=\"168\">Here, $a$ is fixed and $b$ is the variable.</p><p data-end=\"247\" data-start=\"213\">Differentiate with respect to $b$:</p><p data-end=\"263\" data-start=\"249\">$F'(b)=g(b)-a$</p><p data-end=\"303\" data-start=\"265\">Since $g=f^{-1}$, we know $g(f(a))=a$.</p><p data-end=\"308\" data-start=\"305\">So,</p><p data-end=\"333\" data-start=\"310\">$F'(b)&lt;0$ when $b&lt;f(a)$</p><p data-end=\"338\" data-start=\"335\">and</p><p data-end=\"364\" data-start=\"340\">$F'(b)&gt;0$ when $b&gt;f(a)$.</p><p data-end=\"487\" data-start=\"366\">Therefore, $F(b)$ decreases before $b=f(a)$ and increases after $b=f(a)$. Hence $F(b)$ has its minimum value at $b=f(a)$.</p><p data-end=\"517\" data-start=\"489\">Now find that minimum value:</p><p data-end=\"575\" data-start=\"519\">$$F(f(a))=\\int_0^a f(x)dx+\\int_0^{f(a)}g(y)dy-a f(a)$$</p><p data-end=\"615\" data-start=\"577\">By the inverse function area identity,</p><p data-end=\"665\" data-start=\"617\">$$\\int_0^a f(x)dx+\\int_0^{f(a)}g(y)dy=a f(a)$$</p><p data-end=\"670\" data-start=\"667\">So,</p><p data-end=\"697\" data-start=\"672\">$$F(f(a))=a f(a)-a f(a)=0$$</p><p data-end=\"774\" data-start=\"699\">Since the minimum value of $F(b)$ is $0$, we get $F(b)\\geq0$ for all $b&gt;0$.</p><p data-end=\"812\" data-start=\"776\">Equality happens only when $b=f(a)$.</p><p data-end=\"812\" data-start=\"776\"> </p><p style=\"text-align:center\"><img alt=\"\" height=\"629\" src=\"https://cdn.mathpix.com/snip/images/c43HYgPm11SI3pkVQQIH6nQVLdq5g0JXMkW8bbpKd3A.original.fullsize.png\" width=\"723\"/></p><p data-end=\"812\" data-start=\"776\"> </p><p data-end=\"812\" data-start=\"776\">Answer: <strong>C.</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/533001/go-classes-dpp-gate-cs-da-calculus-%26-optimization-inverse-function-integrals\" target=\"_blank\">GATE Overflow #533001</a></small></div>"
        },
        {
            "marks": 2,
            "neg": 0,
            "type": "MSQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"212\" data-start=\"134\">Which of the following statements is/are necessarily true?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">If $f$ is continuous on $[-a,a]$, then $\\int_{-a}^{a}x f(x^2),dx=0$.<br/></span>",
                "<span style=\"display: inline;\">If $f$ and $g$ are continuous on $[a,b]$, $f(x)\\ge g(x)$ for all $x\\in[a,b]$, and $\\int_a^b f(x),dx=\\int_a^b g(x),dx$, then $f(x)=g(x)$ for all $x\\in[a,b]$.<br/></span>",
                "<span style=\"display: inline;\">If $f$ is differentiable at $x=c$ and $f'(c)=0$, then $f$ must have a local maximum or local minimum at $x=c$.<br/></span>",
                "<span style=\"display: inline;\">If $f$ is differentiable and $f(x)\\ge0$ for all $x$, then $\\frac{d}{dx}\\sqrt{f(x)}=\\frac{f'(x)}{2\\sqrt{f(x)}}$ for all $x$.</span>"
            ],
            "answer": [
                "A"
            ],
            "solution": "<div class=\"solution-content\"><a name=\"531851\"></a><div itemprop=\"text\"><p data-end=\"897\" data-start=\"733\">For (A), since $f(x^2)$ is an even function, $x f(x^2)$ is an odd function. The integral of an odd function over $[-a,a]$ is $0$. Hence (A) is true.</p><p data-end=\"1266\" data-start=\"899\">For (B), define $h(x)=f(x)-g(x)$. Since $f$ and $g$ are continuous, $h$ is continuous. Also, $h(x)\\ge0$ for all $x\\in[a,b]$. Now $\\int_a^b h(x),dx=\\int_a^b f(x),dx-\\int_a^b g(x),dx=0$. A non-negative continuous function can have integral $0$ only when it is identically $0$. Hence $h(x)=0$ for all $x\\in[a,b]$, so $f(x)=g(x)$ for all $x\\in[a,b]$. Thus (B) is true.</p><p data-end=\"1490\" data-start=\"1268\">For (C), $f'(c)=0$ is only a necessary condition for a local extremum, not a sufficient condition. For example, take $f(x)=x^3$. Then $f'(0)=0$, but $x=0$ is neither a local maximum nor a local minimum. Hence (C) is false.</p><p data-end=\"1731\" data-is-last-node=\"\" data-is-only-node=\"\" data-start=\"1492\">For (D), the formula is valid only where $f(x)&gt;0$. If $f(x)=0$, the expression $\\frac{f'(x)}{2\\sqrt{f(x)}}$ may not be defined. For example, take $f(x)=x^2$. Then $\\sqrt{f(x)}=|x|$, which is not differentiable at $x=0$. Hence (D) is false.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/531850/go-classes-dpp-gate-cs-da-calculus-%26-optimization-integral-%26-derivative-rules\" target=\"_blank\">GATE Overflow #531850</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\">A variable rate $r(t)$ is given by $$r(t)=\\begin{cases}3t^2-4,&amp;0\\leq t&lt;1\\\\ 5-2t,&amp;1\\leq t\\leq 3\\\\ t-4,&amp;3&lt;t\\leq 5\\end{cases}$$ Find the net accumulated change from $t=0$ to $t=5$, that is, find $\\int_0^5 r(t),dt$.</div></span>",
            "image": "",
            "options": [],
            "answer": "-1",
            "solution": "<div class=\"solution-content\"><a name=\"531663\"></a><div itemprop=\"text\"><p data-end=\"370\" data-start=\"281\">Since $r(t)$ is defined in pieces, split the integral at $t=1$ and $t=3$.</p><p data-end=\"450\" data-start=\"372\">$\\int_0^5 r(t),dt=\\int_0^1(3t^2-4),dt+\\int_1^3(5-2t),dt+\\int_3^5(t-4),dt$.</p><p data-end=\"475\" data-start=\"452\">Now evaluate each part.</p><p data-end=\"520\" data-start=\"477\">$\\int_0^1(3t^2-4),dt=[t^3-4t]_0^1=1-4=-3$.</p><p data-end=\"575\" data-start=\"522\">$\\int_1^3(5-2t),dt=[5t-t^2]_1^3=(15-9)-(5-1)=6-4=2$.</p><p data-end=\"684\" data-start=\"577\">$\\int_3^5(t-4),dt=[\\frac{t^2}{2}-4t]_3^5=(\\frac{25}{2}-20)-(\\frac{9}{2}-12)=-\\frac{15}{2}+\\frac{15}{2}=0$.</p><p data-end=\"727\" data-start=\"686\">Therefore, $\\int_0^5 r(t),dt=-3+2+0=\\boxed{-1}$.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/531662/go-classes-dpp-gate-cs-da-calculus-%26-optimization-piecewise-integration\" target=\"_blank\">GATE Overflow #531662</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"182\" data-start=\"14\">Let $f$ be a continuous function defined for all real numbers. Suppose :</p><p data-end=\"182\" data-start=\"14\">$$\\int_0^3 f(x)dx=4, \\qquad\\int_0^6 f(x)dx=9, \\qquad\\int_6^{10} f(x)dx=-2, \\qquad \\text{and} \\qquad \\int_{10}^{21} f(x)dx=7$$ <br/>Find : $$I=\\int_0^2 (6t+3)f(3t^2+3t+3)dt+\\int_1^2 4t f(7-t^2)dt$$</p></div></span>",
            "image": "",
            "options": [],
            "answer": "20",
            "solution": "<div class=\"solution-content\"><a name=\"531013\"></a><div itemprop=\"text\"><p data-path-to-node=\"0\">To solve the given integral, we can break it down into two separate integrals and use substitution for each. Let the original integral be $I = I_1 + I_2$, where:</p><p data-path-to-node=\"1\">$I_1 = \\int_0^2 (6t+3)f(3t^2+3t+3)dt$</p><p data-path-to-node=\"1\">$I_2 = \\int_1^2 4t f(7-t^2)dt$</p><p data-path-to-node=\"2\"> </p><p data-path-to-node=\"2\"><strong>Evaluate $I_1 :$</strong></p><p data-path-to-node=\"3\">We use the substitution method.</p><p data-path-to-node=\"3\">Let $u = 3t^2+3t+3$.</p><p data-path-to-node=\"3\">Then, the derivative is $du = (6t+3)dt$.</p><p data-path-to-node=\"4\">Now, let's find the new limits of integration:</p><p data-path-to-node=\"4\">When $t = 0$, $u = 3(0)^2 + 3(0) + 3 = 3$</p><p data-path-to-node=\"4\">When $t = 2$, $u = 3(2)^2 + 3(2) + 3 = 12 + 6 + 3 = 21$</p><p data-path-to-node=\"5\">Substituting these into $I_1$:</p><p>$$\\Rightarrow I_1 = \\int_3^{21} f(u)du$$</p><p> </p><p data-path-to-node=\"7\"><strong>Evaluate $I_2:$</strong></p><p data-path-to-node=\"8\">We use substitution again.</p><p data-path-to-node=\"8\">Let $v = 7-t^2$.</p><p data-path-to-node=\"8\">Then, the derivative is $dv = -2t dt$.</p><p data-path-to-node=\"8\">We can rewrite this to match the $4t dt$ in our integral: $4t dt = -2 dv$.</p><p data-path-to-node=\"9\">Now, let's find the new limits of integration:</p><p data-path-to-node=\"9\">When $t = 1$, $v = 7 - (1)^2 = 6$</p><p data-path-to-node=\"9\">When $t = 2$, $v = 7 - (2)^2 = 3$</p><p data-path-to-node=\"10\">Substituting these into $I_2$:</p><p>$$\\Rightarrow I_2 = \\int_6^3 f(v)(-2)dv = -2\\int_6^3 f(v)dv$$</p><p data-path-to-node=\"12\">Using the property of definite integrals $\\int_a^b f(x)dx = -\\int_b^a f(x)dx$, we can flip the limits:</p><p>$$\\Rightarrow I_2 = 2\\int_3^6 f(v)dv$$</p><p> </p><p data-path-to-node=\"14\"><strong>Combining and evaluating using the given information :</strong></p><p data-path-to-node=\"15\">Our total integral is now:</p><p>$$I = \\int_3^{21} f(x)dx + 2\\int_3^6 f(x)dx$$</p><p data-path-to-node=\"17\">We need to find the values of these two integrals using the given information:</p><ol data-path-to-node=\"18\" start=\"1\"><li><p data-path-to-node=\"18,0,0\">$\\int_0^3 f(x)dx = 4$</p></li><li><p data-path-to-node=\"18,1,0\">$\\int_0^6 f(x)dx = 9$</p></li><li><p data-path-to-node=\"18,2,0\">$\\int_6^{10} f(x)dx = -2$</p></li><li><p data-path-to-node=\"18,3,0\">$\\int_{10}^{21} f(x)dx = 7$</p></li></ol><p data-path-to-node=\"19\"><br/>First, let's find $\\int_3^6 f(x)dx$:</p><p data-path-to-node=\"19\">We know that $\\int_0^6 f(x)dx = \\int_0^3 f(x)dx + \\int_3^6 f(x)dx$</p><p>$$\\Rightarrow 9 = 4 + \\int_3^6 f(x)dx$$</p><p>$$\\Rightarrow \\int_3^6 f(x)dx = 5$$</p><p data-path-to-node=\"22\">Next, let's find $\\int_3^{21} f(x)dx$:</p><p data-path-to-node=\"22\">We can split this integral into intervals we know:</p><p>$$\\Rightarrow \\int_3^{21} f(x)dx = \\int_3^6 f(x)dx + \\int_6^{10} f(x)dx + \\int_{10}^{21} f(x)dx$$</p><p>$$\\Rightarrow \\int_3^{21} f(x)dx = 5 + (-2) + 7$$</p><p>$$\\Rightarrow \\int_3^{21} f(x)dx = 10$$</p><p> </p><p data-path-to-node=\"27\">Substitute the values back into our equation for $I$:</p><p>$$\\Rightarrow I = \\int_3^{21} f(x)dx + 2\\int_3^6 f(x)dx$$</p><p>$$\\Rightarrow I = 10 + 2(5)$$</p><p>$$\\boxed{\\therefore I = 20}$$</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/531012/go-classes-dpp-gate-cs-da-calculus-%26-optimization-definite-integrals\" target=\"_blank\">GATE Overflow #531012</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"45\" data-start=\"14\">Evaluate the definite integral:</p><p data-end=\"88\" data-start=\"47\">$$I=\\int_0^\\pi x\\sin x\\ln(1+\\cos^2 x),dx$$</p><p data-end=\"134\" data-start=\"90\">Which of the following is the correct value?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\frac{\\pi^2}{2}+\\pi\\ln 2-2\\pi$<br/></span>",
                "<span style=\"display: inline;\">$\\frac{\\pi^2}{4}+\\pi\\ln 2-2\\pi$<br/></span>",
                "<span style=\"display: inline;\">$\\frac{\\pi^2}{2}+\\frac{\\pi}{2}\\ln 2-\\pi$<br/></span>",
                "<span style=\"display: inline;\">$\\pi^2+\\pi\\ln 2-2\\pi$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"531009\"></a><div itemprop=\"text\"><p data-end=\"329\" data-start=\"296\">$$I = \\int_0^\\pi x\\sin x\\ln(1+\\cos^2 x) \\, dx$$</p><p data-path-to-node=\"3\">We use the property $\\int_0^a f(x) \\, dx = \\int_0^a f(a-x) \\, dx$.</p><p data-path-to-node=\"3\">Substituting $x$ with $(\\pi - x)$:</p><p>$$\\Rightarrow I = \\int_0^\\pi (\\pi - x)\\sin(\\pi - x)\\ln(1+\\cos^2(\\pi - x)) \\, dx$$</p><p data-path-to-node=\"5\">Since $\\sin(\\pi - x) = \\sin x$ and $\\cos(\\pi - x) = -\\cos x$ (which means $\\cos^2(\\pi - x) = \\cos^2 x$), we get:</p><p>$$\\Rightarrow I = \\int_0^\\pi (\\pi - x)\\sin x\\ln(1+\\cos^2 x) \\, dx$$</p><p data-path-to-node=\"7\">Add the original integral $I$ and the new expression for $I$:</p><p>$$\\Rightarrow 2I = \\int_0^\\pi x\\sin x\\ln(1+\\cos^2 x) \\, dx + \\int_0^\\pi (\\pi - x)\\sin x\\ln(1+\\cos^2 x) \\, dx$$</p><p>$$\\Rightarrow 2I = \\int_0^\\pi (x + \\pi - x)\\sin x\\ln(1+\\cos^2 x) \\, dx$$</p><p>$$\\Rightarrow 2I = \\pi \\int_0^\\pi \\sin x\\ln(1+\\cos^2 x) \\, dx$$</p><p>$$\\Rightarrow I = \\frac{\\pi}{2} \\int_0^\\pi \\sin x\\ln(1+\\cos^2 x) \\, dx$$</p><p data-path-to-node=\"12\">Let $u = \\cos x$. Then $du = -\\sin x \\, dx$.</p><p data-path-to-node=\"12\">Change the limits of integration:</p><p data-path-to-node=\"12\">When $x = 0$, $u = \\cos(0) = 1$.</p><p data-path-to-node=\"12\">When $x = \\pi$, $u = \\cos(\\pi) = -1$.</p><p data-path-to-node=\"13\">Substituting these into the integral gives:</p><p>$$\\Rightarrow I = \\frac{\\pi}{2} \\int_1^{-1} \\ln(1+u^2) (-du)$$</p><p>$$\\Rightarrow I = \\frac{\\pi}{2} \\int_{-1}^1 \\ln(1+u^2) \\, du$$</p><p data-path-to-node=\"16\">Since $\\ln(1+u^2)$ is an even function, we can simplify this to:</p><p>$$\\Rightarrow I = 2 \\left( \\frac{\\pi}{2} \\right) \\int_0^1 \\ln(1+u^2) \\, du$$</p><p>$$\\Rightarrow I = \\pi \\int_0^1 \\ln(1+u^2) \\, du$$</p><p data-path-to-node=\"19\">To solve $\\int_0^1 \\ln(1+u^2) \\, du$, let:</p><p data-path-to-node=\"19\">$w = \\ln(1+u^2)$, so $dw = \\frac{2u}{1+u^2} \\, du$</p><p data-path-to-node=\"19\">$dv = du$, so $v = u$</p><p data-path-to-node=\"20\">Using the formula $\\int w \\, dv = wv - \\int v \\, dw$:</p><p>$$\\Rightarrow \\int_0^1 \\ln(1+u^2) \\, du = \\left[ u \\ln(1+u^2) \\right]_0^1 - \\int_0^1 \\frac{2u^2}{1+u^2} \\, du$$</p><p data-path-to-node=\"22\">Evaluate the first part:</p><p>$$= (1 \\cdot \\ln(2) - 0) - \\int_0^1 \\frac{2u^2}{1+u^2} \\, du$$</p><p>$$= \\ln 2 - \\int_0^1 \\left( 2 - \\frac{2}{1+u^2} \\right) \\, du$$</p><p data-path-to-node=\"25\">Integrate the remaining terms:</p><p>$$= \\ln 2 - \\left[ 2u - 2\\tan^{-1}(u) \\right]_0^1$$</p><p>$$= \\ln 2 - (2(1) - 2\\tan^{-1}(1)) + (2(0) - 2\\tan^{-1}(0))$$</p><p>$$= \\ln 2 - \\left( 2 - 2\\left(\\frac{\\pi}{4}\\right) \\right)$$</p><p>$$= \\ln 2 - 2 + \\frac{\\pi}{2}$$</p><p data-path-to-node=\"30\">Substitute this result back into the expression for $I$:</p><p>$$\\Rightarrow I = \\pi \\left( \\ln 2 - 2 + \\frac{\\pi}{2} \\right)$$</p><p>$$\\Rightarrow I = \\pi \\ln 2 - 2\\pi + \\frac{\\pi^2}{2}$$</p><p>$$\\boxed{\\therefore I = \\frac{\\pi^2}{2} + \\pi \\ln 2 - 2\\pi}$$</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/531008/go-classes-dpp-gate-cs-da-calculus-%26-optimization-definite-integrals\" target=\"_blank\">GATE Overflow #531008</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"155\" data-start=\"14\">The value of the given integral is : $$I=\\int_0^{\\pi/2}\\left(\\frac{4\\sqrt{\\sin x}+7\\sqrt{\\cos x}}{\\sqrt{\\sin x}+\\sqrt{\\cos x}}+\\sin x\\cos x\\right)dx$$</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\frac{11\\pi}{4}+\\frac{1}{2}$<br/></span>",
                "<span style=\"display: inline;\">$\\frac{11\\pi}{4}$<br/></span>",
                "<span style=\"display: inline;\">$\\frac{9\\pi}{4}+\\frac{1}{2}$<br/></span>",
                "<span style=\"display: inline;\">$\\frac{11\\pi}{2}+\\frac{1}{2}$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"530970\"></a><div itemprop=\"text\"><p>$$I = \\int_0^{\\pi/2} \\left( \\frac{4\\sqrt{\\sin x} + 7\\sqrt{\\cos x}}{\\sqrt{\\sin x} + \\sqrt{\\cos x}} + \\sin x \\cos x \\right) dx$$</p><p data-path-to-node=\"2\">We can express this as $I = I_1 + I_2$, where:</p><p>$$I_1 = \\int_0^{\\pi/2} \\frac{4\\sqrt{\\sin x} + 7\\sqrt{\\cos x}}{\\sqrt{\\sin x} + \\sqrt{\\cos x}} dx$$</p><p>$$I_2 = \\int_0^{\\pi/2} \\sin x \\cos x \\, dx$$</p><p data-path-to-node=\"6\"><br/>For the second integral $I_2$, we can use the substitution method.</p><p data-path-to-node=\"6\">Let $u = \\sin x$, which means $du = \\cos x \\, dx$.</p><p data-path-to-node=\"6\">Next, change the limits of integration:</p><ul data-path-to-node=\"7\"><li><p data-path-to-node=\"7,0,0\">When $x = 0$, $u = \\sin(0) = 0$</p></li><li><p data-path-to-node=\"7,1,0\">When $x = \\pi/2$, $u = \\sin(\\pi/2) = 1$</p></li></ul><p data-path-to-node=\"8\">Now, substitute these into $I_2$:</p><p>$$\\Rightarrow I_2 = \\int_0^1 u \\, du$$</p><p>$$\\Rightarrow I_2 = \\left[ \\frac{u^2}{2} \\right]_0^1 = \\frac{1^2}{2} - \\frac{0^2}{2} = \\frac{1}{2}$$</p><h3 data-path-to-node=\"11\"> </h3><div><p data-path-to-node=\"12\">To solve $I_1$, we will use the definite integral property:</p><p>$$\\int_0^a f(x) \\, dx = \\int_0^a f(a - x) \\, dx$$</p><p data-path-to-node=\"14\">Applying this property to $I_1$ with $a = \\pi/2$:</p><p>$$\\Rightarrow I_1 = \\int_0^{\\pi/2} \\frac{4\\sqrt{\\sin(\\frac{\\pi}{2} - x)} + 7\\sqrt{\\cos(\\frac{\\pi}{2} - x)}}{\\sqrt{\\sin(\\frac{\\pi}{2} - x)} + \\sqrt{\\cos(\\frac{\\pi}{2} - x)}} dx$$</p><p>$$\\Rightarrow I_1 = \\int_0^{\\pi/2} \\frac{4\\sqrt{\\cos x} + 7\\sqrt{\\sin x}}{\\sqrt{\\cos x} + \\sqrt{\\sin x}} dx$$</p><p data-path-to-node=\"18\">Now, we add our original equation for $I_1$ to this new equation for $I_1$:</p><p>$$\\Rightarrow 2I_1 = \\int_0^{\\pi/2} \\frac{4\\sqrt{\\sin x} + 7\\sqrt{\\cos x}}{\\sqrt{\\sin x} + \\sqrt{\\cos x}} dx + \\int_0^{\\pi/2} \\frac{4\\sqrt{\\cos x} + 7\\sqrt{\\sin x}}{\\sqrt{\\sin x} + \\sqrt{\\cos x}} dx$$</p><p>$$\\Rightarrow 2I_1 = \\int_0^{\\pi/2} \\frac{(4 + 7)\\sqrt{\\sin x} + (7 + 4)\\sqrt{\\cos x}}{\\sqrt{\\sin x} + \\sqrt{\\cos x}} dx$$</p><p>$$\\Rightarrow 2I_1 = \\int_0^{\\pi/2} \\frac{11\\sqrt{\\sin x} + 11\\sqrt{\\cos x}}{\\sqrt{\\sin x} + \\sqrt{\\cos x}} dx$$</p><p>$$\\Rightarrow 2I_1 = \\int_0^{\\pi/2} \\frac{11(\\sqrt{\\sin x} + \\sqrt{\\cos x})}{\\sqrt{\\sin x} + \\sqrt{\\cos x}} dx$$</p><p>$$\\Rightarrow 2I_1 = \\int_0^{\\pi/2} 11 \\, dx$$</p><p>$$\\Rightarrow 2I_1 = 11[x]_0^{\\pi/2} = 11\\left(\\frac{\\pi}{2} - 0\\right) = \\frac{11\\pi}{2}$$</p><p>$$\\Rightarrow I_1 = \\frac{11\\pi}{4}$$</p><p data-path-to-node=\"30\">Finally, add the results of the two integrals back together:</p><p>$$\\Rightarrow I = I_1 + I_2$$</p><p>$$\\boxed{\\therefore I = \\frac{11\\pi}{4} + \\frac{1}{2}}$$</p></div></div><br><br><small>Source: <a href=\"https://gateoverflow.in/530969/go-classes-dpp-gate-cs-da-calculus-%26-optimization-definite-integrals\" target=\"_blank\">GATE Overflow #530969</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\">The integral $\\int_0^1 \\frac{d x}{\\sqrt{(1-x)}}$ is equal to</div></span>",
            "image": "",
            "options": [],
            "answer": "2",
            "solution": "<div class=\"solution-content\"><a name=\"475262\"></a><div itemprop=\"text\">$$<br/> \\int_0^1 \\frac{dx}{\\sqrt{1 - x}} = \\int_0^1 (1 - x)^{-\\frac{1}{2}}\\, dx<br/> $$<br/> <br/> Take \\( u = 1 - x \\Rightarrow du = -dx \\)<br/> <br/> When \\( x = 0 \\Rightarrow u = 1 \\), and \\( x = 1 \\Rightarrow u = 0 \\)<br/> <br/> \\[<br/> \\int_0^1 \\frac{dx}{\\sqrt{1 - x}} = \\int_{u=1}^{u=0} \\frac{-du}{\\sqrt{u}} = \\int_0^1 u^{-\\frac{1}{2}}\\, du<br/> \\]<br/> <br/> \\[<br/> \\int_0^1 u^{-\\frac{1}{2}}\\, du = \\left[ \\frac{u^{\\frac{1}{2}}}{\\frac{1}{2}} \\right]_0^1 = 2 \\left[ u^{\\frac{1}{2}} \\right]_0^1 = 2(1 - 0) = 2<br/> \\]<br/> <br/> \\[<br/> \\boxed{2}<br/> \\]<br/> </div><br><br><small>Source: <a href=\"https://gateoverflow.in/475225/go-classes-dpp-calculus-integration-gate-ce\" target=\"_blank\">GATE Overflow #475225</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>The value of the following improper integral is $\\int_0^1 x \\ln x$</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$1 / 4$<br/></span>",
                "<span style=\"display: inline;\">$0$<br/></span>",
                "<span style=\"display: inline;\">$-1 / 4$<br/></span>",
                "<span style=\"display: inline;\">$1$</span>"
            ],
            "answer": "D",
            "solution": "<div class=\"solution-content\"><a name=\"475265\"></a><div itemprop=\"text\">Use integration by parts:<br/> \\[<br/> \\int u \\, dv = uv - \\int v \\, du<br/> \\]<br/> <br/> <br/> Take \\( u = \\log x \\), \\( dv = x \\, dx \\)<br/> <br/> \\( du = \\frac{1}{x} \\, dx \\), \\( v = \\frac{x^2}{2} \\)<br/> <br/> So,<br/> <br/> \\[<br/> \\int_0^1 x \\log x \\, dx<br/> = \\left[ \\frac{x^2}{2} \\log x - \\int \\frac{x^2}{2} \\cdot \\frac{1}{x} \\, dx \\right]_0^1<br/> = \\left[ \\frac{x^2}{2} \\log x - \\frac{1}{4} x^2 \\right]_0^1<br/> = \\boxed{-\\frac{1}{4}}<br/> \\]<br/> </div><br><br><small>Source: <a href=\"https://gateoverflow.in/475223/go-classes-dpp-calculus-integration-gate-ce\" target=\"_blank\">GATE Overflow #475223</a></small></div>"
        }
    ]
});

registerTest({
    "name": "DPP 22 - Engineering Mathematics (Integral Calculus - Part 3)",
    "testLabel": "DPP 22",
    "testType": "DPP",
    "bracket": "Integral Calculus - Part 3",
    "subject": "em",
    "series": "cse-dpp-2027",
    "date": "Nov 03, 2026",
    "duration": "15 Min",
    "totalMarks": 2,
    "topicsCovered": "Integral Calculus (Practice Set 3)",
    "questions": [
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Evaluate the integral:</p><p>$$<br/>\\int_0^{\\frac{\\pi}{2}} \\frac{\\tan ^7 x}{\\cot ^7 x+\\tan ^7 x} d x<br/>$$</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\frac{\\pi}{4}$<br/></span>",
                "<span style=\"display: inline;\">$\\frac{\\pi}{2}$<br/></span>",
                "<span style=\"display: inline;\">$\\frac{1}{2}$<br/></span>",
                "<span style=\"display: inline;\">$\\frac{\\pi}{8}$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"473717\"></a><div itemprop=\"text\">$$<br/> \\begin{aligned}<br/> \\mathrm{I} &amp; =\\int_0^{\\frac{\\pi}{2}} \\frac{\\tan ^7 x}{\\cot ^7 x+\\tan ^7 x} d x \\\\<br/> &amp; =\\int_0^{\\frac{\\pi}{2}} \\frac{\\tan ^7\\left(\\frac{\\pi}{2}-x\\right)}{\\cot ^7\\left(\\frac{\\pi}{2}-x\\right)+\\tan ^7\\left(\\frac{\\pi}{2}-x\\right)} d x \\\\<br/> &amp; =\\int_0^{\\frac{\\pi}{2}} \\frac{\\cot ^7(x) d x}{\\cot ^7 x d x+\\tan ^7 x}<br/> \\end{aligned}<br/> $$<br/> <br/> Adding (1) and (2), we get<br/> <br/> $$<br/> \\begin{aligned}<br/> &amp; 2 \\mathrm{I}=\\int_0^{\\frac{\\pi}{2}}\\left(\\frac{\\tan ^7 x+\\cot ^7 x}{\\tan ^7 x+\\cot ^7 x}\\right) d x \\\\<br/> &amp; =\\int_0^{\\frac{\\pi}{2}} d x \\text { which gives } \\mathrm{I}=\\frac{\\pi}{4}<br/> \\end{aligned}<br/> $$<br/> </div><br><br><small>Source: <a href=\"https://gateoverflow.in/473565/go-classes-dpp-calculus-integration-ncert\" target=\"_blank\">GATE Overflow #473565</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Evaluate the integral:</p><p>$$<br/>\\int \\frac{4}{3 x+2} d x<br/>$$</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$4 \\ln (3 x+2)+C$<br/></span>",
                "<span style=\"display: inline;\">$\\frac{4}{3} \\ln (3 x+2)+C$<br/></span>",
                "<span style=\"display: inline;\">$\\frac{1}{3} \\ln (3 x+2)+C$<br/></span>",
                "<span style=\"display: inline;\">$2 \\ln (3 x+2)+C$</span>"
            ],
            "answer": "B",
            "solution": "<div class=\"solution-content\"><a name=\"472758\"></a><div itemprop=\"text\">Option B is the answer Step 1) Take 3x + 2 = t <br/> <br/> Step 2) Differentiate both sides wrt x u will get dx = dt / 3<br/> <br/> Step 3) replace 3x + 2 by t and dx by dt /3 respectively<br/> <br/> Step 4) integration of 1/t dt will be logt which u already know....</div><br><br><small>Source: <a href=\"https://gateoverflow.in/472744/go-classes-dpp-calculus-integration-scribd\" target=\"_blank\">GATE Overflow #472744</a></small></div>"
        }
    ]
});
