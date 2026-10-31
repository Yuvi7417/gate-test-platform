registerTest({
    series: "cse-gate-2027",
    name: "TWT-Engineering Mathematics(Calculus-I)",
    date: "sep 08, 2026",
    questions: [
        {
            marks: 1,
            neg: 0,
            type: "MSQ",
            text: `<span style="display: inline;">For a real number <span>\\( a \\)</span>, let <span>\\( I(a)=\\int_{-1}^{1}\\left(3 x^{2}-a x+1\\right) d x \\)</span>. Which of the following statements is/are true?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">The value of <span>\\( I(a) \\)</span> is independent of the value of <span>\\( a \\)</span></span>`,
                `<span style="display: inline;">The value of <span>\\( I(a) \\)</span> can vary with the value of <span>\\( a \\)</span></span>`,
                `<span style="display: inline;">There exists <span>\\( a \\in(-\\infty,+\\infty) \\)</span> such that <span>\\( I(a) \\)</span> is a positive real number</span>`,
                `<span style="display: inline;">There exists <span>\\( a \\in(-\\infty,+\\infty) \\)</span> such that <span>\\( I(a) \\)</span> is a negative real number</span>`
            ],
            answer: ["A", "C"],
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <span style="display: inline;"><span>\\( I(a)=\\displaystyle\\int_{-1}^{1}(3x^2-ax+1)\\,dx \\)</span><br/><br/> The middle term <span>\\( -ax \\)</span> is an <b>odd</b> function of <span>\\( x \\)</span>, so its integral over the symmetric interval <span>\\( [-1,1] \\)</span> is exactly <span>\\( 0 \\)</span>, regardless of the value of <span>\\( a \\)</span>. Only the even part survives:<br/> <span>\\( I(a)=\\displaystyle\\int_{-1}^1(3x^2+1)\\,dx=\\Big[x^3+x\\Big]_{-1}^{1}=(1+1)-(-1-1)=2-(-2)=4 \\)</span><br/><br/> So <span>\\( I(a)=4 \\)</span> for <b>every</b> real <span>\\( a \\)</span> — the value is completely independent of <span>\\( a \\)</span>. Since it's always <span>\\( 4&gt;0 \\)</span>, there certainly exists (in fact, every) <span>\\( a \\)</span> for which <span>\\( I(a) \\)</span> is a positive real number; but there is no <span>\\( a \\)</span> making it negative, and the value does not "vary."<br/><br/> <b>Answer: I(a) is independent of a; and there exists a for which I(a) is positive (true for every a, since I(a)=4 always).</b> <br/><br/></span><br><br><a href="https://gateoverflow.in/523129/gate-cse-2026-set-2-question-17#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2026-set-2" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2026 SET-2</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/engineering-mathematics" style="color:#2f6d1a; text-decoration:none" target="_blank">Engineering Mathematics</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">The value of <span>\\( x \\)</span> such that <span>\\( x &gt; 1 \\)</span>, satisfying the equation <span>\\( \\int_{1}^{x}t \\ln t \\, dt = \\frac{1}{4} \\)</span> is</span>`,
            image: "",
            options: [
                `<span style="display: inline;"><span>\\( \\sqrt{e} \\)</span></span>`,
                `<span style="display: inline;"><span>\\( e \\)</span></span>`,
                `<span style="display: inline;"><span>\\( e^2 \\)</span></span>`,
                `<span style="display: inline;"><span>\\( e - 1 \\)</span></span>`
            ],
            answer: "A",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <span style="display: inline;">Integrate by parts: with <span>\\( u=\\ln t,\\ dv=t\\,dt \\)</span> (so <span>\\( du=dt/t,\\ v=t^2/2 \\)</span>):<br/> <span>\\( \\int t\\ln t\\,dt=\\dfrac{t^2}2\\ln t-\\int\\dfrac{t}2\\,dt=\\dfrac{t^2}2\\ln t-\\dfrac{t^2}4 \\)</span><br/><br/> Evaluating from <span>\\( 1 \\)</span> to <span>\\( x \\)</span>: <span>\\( \\left(\\dfrac{x^2}2\\ln x-\\dfrac{x^2}4\\right)-\\left(0-\\dfrac14\\right)=\\dfrac{x^2}2\\ln x-\\dfrac{x^2}4+\\dfrac14 \\)</span><br/><br/> Setting this equal to <span>\\( \\dfrac14 \\)</span>: <span>\\( \\dfrac{x^2}2\\ln x-\\dfrac{x^2}4=0\\ \\Rightarrow\\ \\dfrac{x^2}2\\left(\\ln x-\\dfrac12\\right)=0 \\)</span><br/> Since <span>\\( x&gt;1 \\)</span> means <span>\\( x^2\\ne0 \\)</span>, we need <span>\\( \\ln x=\\dfrac12\\ \\Rightarrow\\ x=e^{1/2}=\\sqrt e \\)</span><br/><br/> <b>Answer: <span>\\( \\sqrt{e} \\)</span> </b><br/><br/></span><br><br><a href="https://gateoverflow.in/460833/gate-cse-2025-set-2-question-2#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2025-set-2" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2025 SET-2</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/engineering-mathematics" style="color:#2f6d1a; text-decoration:none" target="_blank">Engineering Mathematics</a></div></div>`
        },
        {
            marks: 1,
            neg: 0,
            type: "NAT",
            text: `<span style="display: inline;">Consider the given function <span>\\( f(x) \\)</span>. <br/><br/> <span>\\( f(x) = \\begin{cases} ax + b &amp; \\text{for } x &lt; 1 \\\\ x^3 + x^2 + 1 &amp; \\text{for } x \\geq 1 \\end{cases} \\)</span> <br/><br/> If the function is differentiable everywhere, the value of <span>\\( b \\)</span> must be ________. (rounded off to one decimal place)</span>`,
            image: "",
            options: [
            ],
            answer: [-2.1, -1.9],
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <span style="display: inline;">For <span>\\( f \\)</span> to be differentiable at <span>\\( x=1 \\)</span>, it must first be <b>continuous</b> there, and then have matching one-sided derivatives.<br/><br/> <b>Continuity:</b> left-hand value <span>\\( =a(1)+b=a+b \\)</span>; right-hand value <span>\\( =1^3+1^2+1=3 \\)</span>. So <span>\\( a+b=3 \\)</span>.<br/><br/> <b>Matching derivatives:</b> left derivative <span>\\( =\\dfrac{d}{dx}(ax+b)=a \\)</span>. Right derivative <span>\\( =\\dfrac{d}{dx}(x^3+x^2+1)=3x^2+2x \\)</span>, evaluated at <span>\\( x=1 \\)</span>: <span>\\( 3+2=5 \\)</span>. So <span>\\( a=5 \\)</span>.<br/><br/> Substituting back: <span>\\( b=3-a=3-5=-2 \\)</span>.<br/><br/> <b>Answer: -2.0</b><br/><br/></span><br><br><a href="https://gateoverflow.in/460059/gate-cse-2025-set-1-question-21#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2025-set-1" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2025 SET-1</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/engineering-mathematics" style="color:#2f6d1a; text-decoration:none" target="_blank">Engineering Mathematics</a></div></div>`
        },
        {
            marks: 1,
            neg: 0,
            type: "MSQ",
            text: `<span style="display: inline;">Consider the given system of linear equations for variables <span>\\( x \\)</span> and <span>\\( y \\)</span>, where <span>\\( k \\)</span> is a real-valued constant. Which of the following option(s) is/are CORRECT? <br/><br/> <span>\\( x + k y = 1 \\)</span><br/> <span>\\( k x + y = -1 \\)</span></span>`,
            image: "",
            options: [
                `<span style="display: inline;">There is exactly one value of <span>\\( k \\)</span> for which the above system of equations has no solution.</span>`,
                `<span style="display: inline;">There exist an infinite number of values of <span>\\( k \\)</span> for which the system of equations has no solution.</span>`,
                `<span style="display: inline;">There exists exactly one value of <span>\\( k \\)</span> for which the system of equations has exactly one solution.</span>`,
                `<span style="display: inline;">There exists exactly one value of <span>\\( k \\)</span> for which the system of equations has an infinite number of solutions.</span>`
            ],
            answer: ["A", "D"],
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <span style="display: inline;"><span>\\( \\begin{cases}x+ky=1\\\\kx+y=-1\\end{cases} \\)</span>, with determinant <span>\\( \\Delta=1-k^2 \\)</span>.<br/><br/> <b>No solution</b> requires <span>\\( \\Delta=0 \\)</span> (i.e. <span>\\( k=\\pm1 \\)</span>) <i>and</i> the two equations to actually be inconsistent (parallel but not identical lines):<br/> - <span>\\( k=1 \\)</span>: equations become <span>\\( x+y=1 \\)</span> and <span>\\( x+y=-1 \\)</span> — parallel, contradictory → <b>no solution</b>.<br/> - <span>\\( k=-1 \\)</span>: equations become <span>\\( x-y=1 \\)</span> and <span>\\( -x+y=-1 \\)</span>, which is just the first equation multiplied by <span>\\( -1 \\)</span> — the <i>same</i> line → <b>infinitely many solutions</b>, not "no solution."<br/><br/> So there is exactly <b>one</b> value of <span>\\( k \\)</span> (namely <span>\\( k=1 \\)</span>) giving no solution, and exactly <b>one</b> value of <span>\\( k \\)</span> (namely <span>\\( k=-1 \\)</span>) giving infinitely many solutions. For every other <span>\\( k \\)</span> (i.e. <span>\\( k\\ne\\pm1 \\)</span>), <span>\\( \\Delta\\ne0 \\)</span> and there's a unique solution — but that happens for infinitely many values of <span>\\( k \\)</span>, not just one, so the "exactly one k gives a unique solution" claim is false.<br/><br/> <b>Answer: Exactly one k gives no solution; and exactly one k gives infinitely many solutions.</b><br/><br/></span><br><br><a href="https://gateoverflow.in/460067/gate-cse-2025-set-1-question-13#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2025-set-1" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2025 SET-1</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/engineering-mathematics" style="color:#2f6d1a; text-decoration:none" target="_blank">Engineering Mathematics</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Let <span>\\( f(x) \\)</span> be a continuous function from <span>\\( \\mathbb{R} \\)</span> to <span>\\( \\mathbb{R} \\)</span> such that <br/> <span>\\( f(x)=1-f(2-x) \\)</span> <br/> Which one of the following options is the CORRECT value of <span>\\( \\int_0^2 f(x) d x \\)</span> ?</span>`,
            image: "",
            options: [
                `<span style="display: inline;"><span>\\( 0 \\)</span></span>`,
                `<span style="display: inline;"><span>\\( 1 \\)</span></span>`,
                `<span style="display: inline;"><span>\\( 2 \\)</span></span>`,
                `<span style="display: inline;"><span>\\( -1 \\)</span></span>`
            ],
            answer: "B",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <span style="display: inline;">Let <span>\\( I=\\int_0^2 f(x)\\,dx \\)</span>. Substituting <span>\\( x\\to2-x \\)</span> gives <span>\\( I=\\int_0^2 f(2-x)\\,dx \\)</span>.<br/><br/> Adding both: <span>\\( 2I=\\int_0^2\\big(f(x)+f(2-x)\\big)dx=\\int_0^2 1\\,dx=2 \\)</span><br/><br/> <span>\\( I=1 \\)</span><br/><br/> <b>Answer: 1</b><br/><br/></span><br><br><a href="https://gateoverflow.in/422891/gate-cse-2024-set-2-question-6#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2024-set-2" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2024 SET-2</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/engineering-mathematics" style="color:#2f6d1a; text-decoration:none" target="_blank">Engineering Mathematics</a></div></div>`
        },
        {
            marks: 1,
            neg: 0,
            type: "NAT",
            text: `<span style="display: inline;">The value of the definite integral <span>\\( \\int_{-3}^{3} \\int_{-2}^{2} \\int_{-1}^{1} (4x^2y-z^3)dzdydx \\)</span> is _____. (Rounded off to the nearest integer)</span>`,
            image: "",
            options: [
            ],
            answer: 0,
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <span style="display: inline;">Split the integrand:<br/> - <span>\\( 4x^2y \\)</span>: odd in y, integrated over the symmetric range <span>\\( [-2,2] \\)</span> <span>\\( \\rightarrow \\)</span> 0<br/> - <span>\\( z^3 \\)</span>: odd in z, integrated over <span>\\( [-1,1] \\)</span> <span>\\( \\rightarrow \\)</span> 0<br/><br/> Total = 0<br/><br/> <b>Answer: 0</b><br/><br/></span><br><br><a href="https://gateoverflow.in/399290/gate-cse-2023-question-21#a_list_title" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2023" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2023</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/engineering-mathematics" style="color:#2f6d1a; text-decoration:none" target="_blank">Engineering Mathematics</a></div></div>`
        },
        {
            marks: 1,
            neg: 0,
            type: "MSQ",
            text: `<span style="display: inline;">Let <span>\\( f(x)=x^3+15x^2-33x-36 \\)</span> be a real-valued function.<br/> Which of the following statements is/are TRUE?</span>`,
            image: "",
            options: [
                `<span style="display: inline;"><span>\\( f(x) \\)</span> does not have a local maximum.</span>`,
                `<span style="display: inline;"><span>\\( f(x) \\)</span> has a local maximum.</span>`,
                `<span style="display: inline;"><span>\\( f(x) \\)</span> does not have a local minimum.</span>`,
                `<span style="display: inline;"><span>\\( f(x) \\)</span> has a local minimum.</span>`
            ],
            answer: ["B", "D"],
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <span style="display: inline;"><span>\\( f'(x)=3x^2+30x-33=3(x^2+10x-11)=3(x+11)(x-1) \\)</span> <span>\\( \\rightarrow \\)</span> critical points <span>\\( x=-11 \\)</span> and <span>\\( x=1 \\)</span>.<br/><br/> <span>\\( f''(x)=6x+30 \\)</span>:<br/> - <span>\\( f''(-11)=-36 \\lt 0 \\)</span> <span>\\( \\rightarrow \\)</span> local <b>maximum</b><br/> - <span>\\( f''(1)=36 \\gt 0 \\)</span> <span>\\( \\rightarrow \\)</span> local <b>minimum</b><br/><br/> <b>Answer: f(x) has a local maximum and has a local minimum</b><br/><br/></span><br><br><a href="https://gateoverflow.in/399293/gate-cse-2023-question-18#a_list_title" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2023" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2023</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/engineering-mathematics" style="color:#2f6d1a; text-decoration:none" target="_blank">Engineering Mathematics</a></div></div>`
        },
        {
            marks: 1,
            neg: 0,
            type: "NAT",
            text: `<span style="display: inline;">The value of the following limit is _____<br/><span>\\( \\lim_{x \\to 0+} \\frac{ \\sqrt{x}}{1-e^{2 \\sqrt{x}}} \\)</span></span>`,
            image: "",
            options: [
            ],
            answer: -0.5,
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <span style="display: inline;">Let <span>\\( t=\\sqrt x\\to0^+ \\)</span>: the limit is <span>\\( \\lim_{t\\to0}\\frac{t}{1-e^{2t}} \\)</span> (form 0/0).<br/><br/> Since <span>\\( e^{2t}\\approx1+2t \\)</span>: <span>\\( \\frac{t}{1-e^{2t}}\\approx\\frac{t}{-2t}=-\\frac12 \\)</span> (same by L'Hospital: <span>\\( \\frac{1}{-2e^{2t}}\\to-\\frac12 \\)</span>).<br/><br/> <b>Answer: -0.5</b><br/><br/></span><br><br><a href="https://gateoverflow.in/371912/Gate-cse-2022-question-24#a_list_title" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2022" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2022</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/engineering-mathematics" style="color:#2f6d1a; text-decoration:none" target="_blank">Engineering Mathematics</a></div></div>`
        },
        {
            marks: 2,
            neg: 0.66,
            type: "MCQ",
            text: `<span style="display: inline;">For two n-dimensional real vectors <span>\\( P \\)</span> and <span>\\( Q \\)</span>, the operation <span>\\( s(P,Q) \\)</span> is defined as follows: <br/><br/> <span>\\( s(P,Q) = \\displaystyle \\sum_{i=1}^n (P[i] \\cdot Q[i]) \\)</span> <br/><br/>Let <span>\\( \\mathcal{L} \\)</span> be a set of 10-dimensional non-zero real vectors such that for every pair of distinct vectors <span>\\( P,Q \\in \\mathcal{L}, s(P,Q)=0 \\)</span>. What is the maximum cardinality possible for the set <span>\\( \\mathcal{L} \\)</span>?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">9</span>`,
                `<span style="display: inline;">10</span>`,
                `<span style="display: inline;">11</span>`,
                `<span style="display: inline;">100</span>`
            ],
            answer: "B",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <span style="display: inline;">s(P, Q) is the dot product, so the set contains mutually <b>orthogonal</b> non-zero vectors. Such vectors are linearly independent, and <span>\\( \\mathbb{R}^{10} \\)</span> has at most 10 independent vectors (e.g. the 10 unit vectors).<br/><br/> <b>Answer: 10</b><br/><br/></span><br><br><a href="https://gateoverflow.in/357503/gate-cse-2021-set-2-question-37#a_list_title" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2021-set-2" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2021 SET-2</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/engineering-mathematics" style="color:#2f6d1a; text-decoration:none" target="_blank">Engineering Mathematics</a></div></div>`
        },
        {
            marks: 1,
            neg: 0,
            type: "NAT",
            text: `<span style="display: inline;">Suppose that <span>\\( f: \\mathbb{R} \\rightarrow \\mathbb{R} \\)</span> is a continuous function on the interval [-3,3] and a differentiable function in the interval (-3,3) such that for every <span>\\( x \\)</span> in the interval, <span>\\( f'(x) \\leq 2 \\)</span>. If <span>\\( f(-3) =7 \\)</span>, then <span>\\( f(3) \\)</span> is at most __________</span>`,
            image: "",
            options: [
            ],
            answer: 19,
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <span style="display: inline;">By the mean value theorem, <span>\\( f(3)-f(-3)=f'(c)\\cdot6\\le2\\times6=12 \\)</span>.<br/><br/> <span>\\( f(3)\\le7+12=19 \\)</span><br/><br/> <b>Answer: 19</b><br/><br/></span><br><br><a href="https://gateoverflow.in/357515/gate-cse-2021-set-2-question-25#a_list_title" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2021-set-2" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2021 SET-2</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/engineering-mathematics" style="color:#2f6d1a; text-decoration:none" target="_blank">Engineering Mathematics</a></div></div>`
        },
        {
            marks: 1,
            neg: 0,
            type: "NAT",
            text: `<span style="display: inline;">Consider the following expression.<br/><span>\\( \\lim_{x\\rightarrow-3}\\frac{\\sqrt{2x+22}-4}{x+3} \\)</span> <br/> The value of the above expression (rounded to 2 decimal places) is ___________.</span>`,
            image: "",
            options: [
            ],
            answer: 0.25,
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <span style="display: inline;">At x = <span>\\( - \\)</span>3 the numerator is <span>\\( \\sqrt{16}-4=0 \\)</span> (form 0/0). Use L'Hospital:<br/> <span>\\( \\frac{d}{dx}\\sqrt{2x+22}=\\frac{1}{\\sqrt{2x+22}} \\)</span> <span>\\( \\rightarrow \\)</span> at x = <span>\\( - \\)</span>3: <span>\\( \\frac14=0.25 \\)</span><br/><br/> <b>Answer: 0.25</b><br/><br/></span><br><br><a href="https://gateoverflow.in/357431/gate-cse-2021-set-1-question-20#a_list_title" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2021-set-1" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2021 SET-1</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/engineering-mathematics" style="color:#2f6d1a; text-decoration:none" target="_blank">Engineering Mathematics</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Consider the functions <br/><br/>I. <span>\\( e^{-x} \\)</span> <br/>II. <span>\\( x^2-\\sin x \\)</span> <br/>III. <span>\\( \\sqrt{x^3+1} \\)</span> <br/> <br/> Which of the above functions is/are increasing everywhere in [0,1] ?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">III only</span>`,
                `<span style="display: inline;">II only</span>`,
                `<span style="display: inline;">II and III only</span>`,
                `<span style="display: inline;">I and III only</span>`
            ],
            answer: "A",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <span style="display: inline;">Check the derivative on [0, 1]:<br/> - I: <span>\\( (e^{-x})'=-e^{-x} \\lt 0 \\)</span> <span>\\( \\rightarrow \\)</span> decreasing.<br/> - II: <span>\\( 2x-\\cos x \\)</span> is <span>\\( -1 \\)</span> at x = 0 <span>\\( \\rightarrow \\)</span> decreasing near 0.<br/> - III: <span>\\( \\frac{3x^2}{2\\sqrt{x^3+1}}\\ge0 \\)</span> <span>\\( \\rightarrow \\)</span> increasing on the whole interval.<br/><br/> <b>Answer: III only</b><br/><br/></span><br><br><a href="https://gateoverflow.in/333230/gate2020-cs-1#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2020" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2020</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/engineering-mathematics" style="color:#2f6d1a; text-decoration:none" target="_blank">Engineering Mathematics</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Compute <span>\\( \\lim_{x \\to 3}\\frac{x^4-81}{2x^2-5x-3} \\)</span></span>`,
            image: "",
            options: [
                `<span style="display: inline;">1</span>`,
                `<span style="display: inline;">53/12</span>`,
                `<span style="display: inline;">108/7</span>`,
                `<span style="display: inline;">Limit does not exist</span>`
            ],
            answer: "C",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <span style="display: inline;">Factor both and cancel (x <span>\\( - \\)</span> 3):<br/> <span>\\( \\frac{(x-3)(x+3)(x^2+9)}{(x-3)(2x+1)}=\\frac{(x+3)(x^2+9)}{2x+1} \\)</span><br/><br/> At x = 3: <span>\\( \\frac{6\\times18}{7}=\\frac{108}{7} \\)</span><br/><br/> <b>Answer: 108/7</b><br/><br/></span><br><br><a href="https://gateoverflow.in/302835/gate2019-cs-13#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2019" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2019</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/engineering-mathematics" style="color:#2f6d1a; text-decoration:none" target="_blank">Engineering Mathematics</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">The domain of the function <span>\\( \\log (\\log \\sin (x)) \\)</span> is:</span>`,
            image: "",
            options: [
                `<span style="display: inline;"><span>\\( 0\\lt x \\lt \\pi \\)</span></span>`,
                `<span style="display: inline;"><span>\\( 2 n \\pi \\lt x \\lt (2 n+1) \\pi \\)</span>, for n in N</span>`,
                `<span style="display: inline;">Empty set</span>`,
                `<span style="display: inline;">None of the above</span>`
            ],
            answer: "C",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <span style="display: inline;"><span>\\( \\sin x\\le1 \\)</span>, so <span>\\( \\log\\sin x\\le0 \\)</span> wherever it is defined. The outer log needs a positive argument, which never happens. The domain is empty.<br/><br/> <b>Answer: Empty set</b><br/><br/></span><br><br><a href="https://gateoverflow.in/213573/isro2018-15" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/isro-cse-2018" style="color:#2f6d1a; text-decoration:none" target="_blank">ISRO CSE 2018</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/engineering-mathematics" style="color:#2f6d1a; text-decoration:none" target="_blank">Engineering Mathematics</a></div></div>`
        },
        {
            marks: 1,
            neg: 0,
            type: "NAT",
            text: `<span style="display: inline;">The value of <span>\\( \\int_{0}^{\\frac{\\pi }{4}}x\\cos (x^{2})dx \\)</span> correct to three decimal places (assuming that <span>\\( \\pi \\)</span> = 3.14 ) is</span>`,
            image: "",
            options: [
            ],
            answer: [0.27, 0.3],
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <span style="display: inline;">Substitute <span>\\( u=x^2 \\)</span>, <span>\\( du=2x\\,dx \\)</span>:<br/> <span>\\( \\int_0^{\\pi/4}x\\cos(x^2)dx=\\frac12\\sin(x^2)\\Big|_0^{\\pi/4}=\\frac12\\sin\\left(\\frac{\\pi^2}{16}\\right)=\\frac12\\sin(0.616)\\approx\\frac12(0.578)\\approx0.289 \\)</span><br/><br/> <b>Answer: 0.289</b><br/><br/></span><br><br><a href="https://gateoverflow.in/204090/gate2018-16#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2018" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2018</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/engineering-mathematics" style="color:#2f6d1a; text-decoration:none" target="_blank">Engineering Mathematics</a></div></div>`
        }
    ],
});

registerTest({
    series: "cse-gate-2027",
    name: "TWT-Engineering Mathematics(Calculus-II)",
    date: "sep 08, 2026",
    questions: [
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Which one of the following is a closed form expression for the generating function of the sequence <span>\\( \\left \\{ a_{n} \\right \\} \\)</span>, where <span>\\( a_{n}=2n+3 \\)</span> for all n = 0, 1, 2,...?</span>`,
            image: "",
            options: [
                `<span style="display: inline;"><span>\\( \\frac{3}{(1-x)^{2}} \\)</span></span>`,
                `<span style="display: inline;"><span>\\( \\frac{3x}{(1-x)^{2}} \\)</span></span>`,
                `<span style="display: inline;"><span>\\( \\frac{2-x}{(1-x)^{2}} \\)</span></span>`,
                `<span style="display: inline;"><span>\\( \\frac{3-x}{(1-x)^{2}} \\)</span></span>`
            ],
            answer: "D",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <span style="display: inline;"><span>\\( \\sum(2n+3)x^n=2\\sum nx^n+3\\sum x^n=\\frac{2x}{(1-x)^2}+\\frac{3}{1-x}=\\frac{2x+3(1-x)}{(1-x)^2}=\\frac{3-x}{(1-x)^2} \\)</span><br/><br/> <b>Answer: <span>\\( \\frac{3-x}{(1-x)^2} \\)</span></b><br/><br/></span><br><br><a href="https://gateoverflow.in/204075/gate2018-1#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2018" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2018</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/engineering-mathematics" style="color:#2f6d1a; text-decoration:none" target="_blank">Engineering Mathematics</a></div></div>`
        },
        {
            marks: 2,
            neg: 0,
            type: "NAT",
            text: `<span style="display: inline;">If a random variable X has a Poisson distribution with mean 5, then the expectation <span>\\( E[(X+2)^{2}] \\)</span> equals ______________.</span>`,
            image: "",
            options: [
            ],
            answer: 54,
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <span style="display: inline;">For Poisson, mean = variance = 5, so <span>\\( E[X^2]=5+25=30 \\)</span>.<br/><br/> <span>\\( E[(X+2)^2]=E[X^2]+4E[X]+4=30+20+4=54 \\)</span><br/><br/> <b>Answer: 54</b><br/><br/></span><br><br><a href="https://gateoverflow.in/118513/gate2017-2-48#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2017-set-2" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2017 SET-2</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/engineering-mathematics" style="color:#2f6d1a; text-decoration:none" target="_blank">Engineering Mathematics</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">If <span>\\( f(x)=R sin(\\frac{\\pi x}{2})+S,f'(\\frac{1}{2})=\\sqrt{2} \\)</span> and <span>\\( \\int_{0}^{1}f(x)dx=\\frac{2R}{\\pi } \\)</span>, then the constants R and S are, respectively</span>`,
            image: "",
            options: [
                `<span style="display: inline;"><span>\\( \\frac{2}{\\pi} \\)</span> and <span>\\( \\frac{16}{\\pi} \\)</span></span>`,
                `<span style="display: inline;"><span>\\( \\frac{2}{\\pi} \\)</span> and 0</span>`,
                `<span style="display: inline;"><span>\\( \\frac{4}{\\pi} \\)</span> and 0</span>`,
                `<span style="display: inline;"><span>\\( \\frac{4}{\\pi} \\)</span> and <span>\\( \\frac{16}{\\pi} \\)</span></span>`
            ],
            answer: "C",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <span style="display: inline;">Checking each statement:<br/>- <span>\\( f'(x)=\\frac{R\\pi}{2}\\cos\\frac{\\pi x}{2} \\)</span>, so <span>\\( f'(\\tfrac12)=\\frac{R\\pi}{2}\\cdot\\frac{1}{\\sqrt2}=\\sqrt2\\Rightarrow R=\\frac4\\pi \\)</span><br/> - <span>\\( \\int_0^1f\\,dx=R\\cdot\\frac2\\pi+S \\)</span>. This equals <span>\\( \\frac{2R}{\\pi} \\)</span>, so S = 0.<br/><br/> <b>Answer: <span>\\( \\frac4\\pi \\)</span> and 0</b><br/><br/></span><br><br><a href="https://gateoverflow.in/118262/gate2017-2-10#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2017-set-2" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2017 SET-2</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/engineering-mathematics" style="color:#2f6d1a; text-decoration:none" target="_blank">Engineering Mathematics</a></div></div>`
        },
        {
            marks: 2,
            neg: 0.66,
            type: "MCQ",
            text: `<span style="display: inline;">Let u and v be two vectors in <span>\\( R^{2} \\)</span> whose Euclidean norms satisfy ||u||=2|| v|| . What is the value of <span>\\( \\alpha \\)</span> such that w=u+<span>\\( \\alpha \\)</span>v bisects the angle between u and v ?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">2</span>`,
                `<span style="display: inline;"><span>\\( 1/2 \\)</span></span>`,
                `<span style="display: inline;">1</span>`,
                `<span style="display: inline;"><span>\\( -1/2 \\)</span></span>`
            ],
            answer: "A",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <span style="display: inline;">The bisector points along the sum of the <b>unit</b> vectors: <span>\\( \\frac{u}{\\|u\\|}+\\frac{v}{\\|v\\|}=\\frac{u}{2\\|v\\|}+\\frac{v}{\\|v\\|}=\\frac{1}{2\\|v\\|}(u+2v) \\)</span>.<br/><br/> So w = u + 2v bisects the angle: <span>\\( \\alpha=2 \\)</span>.<br/><br/> <b>Answer: 2</b><br/><br/></span><br><br><a href="https://gateoverflow.in/118311/gate2017-1-30#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2017-set-1" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2017 SET-1</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/engineering-mathematics" style="color:#2f6d1a; text-decoration:none" target="_blank">Engineering Mathematics</a></div></div>`
        },
        {
            marks: 2,
            neg: 0.66,
            type: "MCQ",
            text: `<span style="display: inline;">The value of <span>\\( \\lim_{x\\rightarrow 1}\\frac{x^{7}-2x^{5}+1}{x^{3}-3x^{2}+2} \\)</span></span>`,
            image: "",
            options: [
                `<span style="display: inline;">is 0</span>`,
                `<span style="display: inline;">is -1</span>`,
                `<span style="display: inline;">is 1</span>`,
                `<span style="display: inline;">does not exist</span>`
            ],
            answer: "C",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <span style="display: inline;">At x = 1: numerator 1 <span>\\( - \\)</span> 2 + 1 = 0, denominator 1 <span>\\( - \\)</span> 3 + 2 = 0. L'Hospital:<br/> <span>\\( \\frac{7x^6-10x^4}{3x^2-6x}\\Big|_{x=1}=\\frac{-3}{-3}=1 \\)</span><br/><br/> <b>Answer: is 1</b><br/><br/></span><br><br><a href="https://gateoverflow.in/118309/gate2017-1-28#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2017-set-1" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2017 SET-1</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/engineering-mathematics" style="color:#2f6d1a; text-decoration:none" target="_blank">Engineering Mathematics</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;"><span>\\( \\lim_{x\\rightarrow 0}\\frac{\\sqrt{1+x}-\\sqrt{1-x}}{x} \\)</span> is given by</span>`,
            image: "",
            options: [
                `<span style="display: inline;">0</span>`,
                `<span style="display: inline;">-1</span>`,
                `<span style="display: inline;">1</span>`,
                `<span style="display: inline;"><span>\\( \\frac{1}{2} \\)</span></span>`
            ],
            answer: "C",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <span style="display: inline;">Multiply top and bottom by <span>\\( \\sqrt{1+x}+\\sqrt{1-x} \\)</span>:<br/> <span>\\( \\frac{(1+x)-(1-x)}{x(\\sqrt{1+x}+\\sqrt{1-x})}=\\frac{2}{\\sqrt{1+x}+\\sqrt{1-x}}\\rightarrow\\frac22=1 \\)</span><br/><br/> <b>Answer: 1</b><br/><br/></span><br><br><a href="https://gateoverflow.in/55595/isro2016-3" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/isro-cse-2016" style="color:#2f6d1a; text-decoration:none" target="_blank">ISRO CSE 2016</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/engineering-mathematics" style="color:#2f6d1a; text-decoration:none" target="_blank">Engineering Mathematics</a></div></div>`
        },
        {
            marks: 2,
            neg: 0.66,
            type: "MCQ",
            text: `<span style="display: inline;">Which one of the following well-formed formulae in predicate calculus is NOT valid?</span>`,
            image: "",
            options: [
                `<span style="display: inline;"><span>\\( (\\forall x p(x)\\Rightarrow \\forall xq(x))\\Rightarrow (\\exists x\\neg p(x) \\vee \\forall xq(x)) \\)</span></span>`,
                `<span style="display: inline;"><span>\\( (\\exists xp(x)\\vee \\exists xq(x))\\Rightarrow \\exists x(p(x)\\vee q(x)) \\)</span></span>`,
                `<span style="display: inline;"><span>\\( \\exists x (p(x)\\wedge q(x)) \\Rightarrow (\\exists xp(x)\\wedge \\exists xq(x)) \\)</span></span>`,
                `<span style="display: inline;"><span>\\( \\forall x (p(x)\\vee q(x))\\Rightarrow (\\forall x p(x) \\vee \\forall x q(x)) \\)</span></span>`
            ],
            answer: "D",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <span style="display: inline;">Option 4 is not valid: take a domain {1, 2} with p(1), q(2) true and p(2), q(1) false. Then every x satisfies p(x) <span>\\( \\vee \\)</span> q(x), but neither "all p" nor "all q" holds.<br/><br/> Options 1-3 are standard valid implications.<br/><br/> <b>Answer: Option 4</b><br/><br/></span><br><br><a href="https://gateoverflow.in/39618/gate2016-2-27#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2016-set-2" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2016 SET-2</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/engineering-mathematics" style="color:#2f6d1a; text-decoration:none" target="_blank">Engineering Mathematics</a></div></div>`
        },
        {
            marks: 1,
            neg: 0,
            type: "NAT",
            text: `<span style="display: inline;">Let f(x) be a polynomial and g(x) = f'(x) be its derivative. If the degree of (f(x)+ f(-x)) is 10, then the degree of (g(x)-g(-x)) is ________.</span>`,
            image: "",
            options: [
            ],
            answer: 9,
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <span style="display: inline;"><span>\\( f(x)+f(-x) \\)</span> keeps only the <b>even</b> powers of f (times 2). Its degree is 10, so f has an <span>\\( x^{10} \\)</span> term (and no higher even power).<br/><br/> <span>\\( g(x)-g(-x) \\)</span> keeps only the <b>odd</b> powers of g = f'. Even powers of f become odd powers of g: <span>\\( x^{10}\\rightarrow10x^9 \\)</span> is the highest.<br/><br/> Degree = 9<br/><br/> <b>Answer: 9</b><br/><br/></span><br><br><a href="https://gateoverflow.in/39571/gate2016-2-2#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2016-set-2" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2016 SET-2</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/engineering-mathematics" style="color:#2f6d1a; text-decoration:none" target="_blank">Engineering Mathematics</a></div></div>`
        },
        {
            marks: 1,
            neg: 0,
            type: "NAT",
            text: `<span style="display: inline;"><span>\\( \\lim_{x\\rightarrow 4}\\frac{sin(x-4)}{x-4} \\)</span>=_________.</span>`,
            image: "",
            options: [
            ],
            answer: 1,
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <span style="display: inline;">Put <span>\\( t=x-4\\rightarrow0 \\)</span>: <span>\\( \\lim_{t\\to0}\\frac{\\sin t}{t}=1 \\)</span>.<br/><br/> <b>Answer: 1</b><br/><br/></span><br><br><a href="https://gateoverflow.in/39630/gate2016-1-3#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2016-set-1" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2016 SET-1</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/engineering-mathematics" style="color:#2f6d1a; text-decoration:none" target="_blank">Engineering Mathematics</a></div></div>`
        },
        {
            marks: 2,
            neg: 0.66,
            type: "MCQ",
            text: `<span style="display: inline;">If for non-zero <span>\\( x,af(x)+bf\\left ( \\frac{1}{x} \\right )=\\frac{1}{x}-25 \\)</span> where <span>\\( a\\neq b \\)</span> then <span>\\( \\int_{1}^{2}f(x)dx \\)</span> is</span>`,
            image: "",
            options: [
                `<span style="display: inline;"><span>\\( \\frac{1}{a^{2}-b^{2}}[a(ln2-25)+\\frac{47b}{2}] \\)</span></span>`,
                `<span style="display: inline;"><span>\\( \\frac{1}{a^{2}-b^{2}}[a(2ln2-25)-\\frac{47b}{2}] \\)</span></span>`,
                `<span style="display: inline;"><span>\\( \\frac{1}{a^{2}-b^{2}}[a(2ln2-25)+\\frac{47b}{2}] \\)</span></span>`,
                `<span style="display: inline;"><span>\\( \\frac{1}{a^{2}-b^{2}}[a(ln2-25)-\\frac{47b}{2}] \\)</span></span>`
            ],
            answer: "A",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <span style="display: inline;">Replace x by 1/x: <span>\\( af(1/x)+bf(x)=x-25 \\)</span>. Eliminate f(1/x):<br/><br/> <span>\\( (a^2-b^2)f(x)=\\frac ax-25a-bx+25b \\)</span><br/><br/> Integrate from 1 to 2: <span>\\( a\\ln2-25a-\\frac{3b}{2}+25b=a(\\ln2-25)+\\frac{47b}{2} \\)</span><br/><br/> <b>Answer: <span>\\( \\frac{1}{a^2-b^2}[a(\\ln2-25)+\\frac{47b}{2}] \\)</span></b><br/><br/></span><br><br><a href="https://gateoverflow.in/8554/gate2015-3-44#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2015-set-3" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2015 SET-3</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/engineering-mathematics" style="color:#2f6d1a; text-decoration:none" target="_blank">Engineering Mathematics</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">The value of <span>\\( \\lim_{x\\rightarrow \\infty }(1+x^{2})^{e^{-x}} \\)</span> is</span>`,
            image: "",
            options: [
                `<span style="display: inline;">0</span>`,
                `<span style="display: inline;"><span>\\( \\frac{1}{2} \\)</span></span>`,
                `<span style="display: inline;">1</span>`,
                `<span style="display: inline;"><span>\\( \\infty \\)</span></span>`
            ],
            answer: "C",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <span style="display: inline;">Take logs: <span>\\( \\ln L=\\lim e^{-x}\\ln(1+x^2)=\\lim\\frac{\\ln(1+x^2)}{e^x}=0 \\)</span> (the exponential grows much faster).<br/><br/> So <span>\\( L=e^0=1 \\)</span>.<br/><br/> <b>Answer: 1</b><br/><br/></span><br><br><a href="https://gateoverflow.in/8403/gate2015-3-14#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2015-set-3" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2015 SET-3</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/engineering-mathematics" style="color:#2f6d1a; text-decoration:none" target="_blank">Engineering Mathematics</a></div></div>`
        },
        {
            marks: 2,
            neg: 0.66,
            type: "MCQ",
            text: `<span style="display: inline;">Let <span>\\( f(x)=x^{-(1/3)} \\)</span> and A denote the area of the region bounded by f(x) and the x-axis, when x varies from -1 to 1. Which of the following statements is/are TRUE?<br/> I) f is continuous in [-1,1] <br/> II) f is not bounded in [-1,1] <br/> III) A is nonzero and finite</span>`,
            image: "",
            options: [
                `<span style="display: inline;">II only</span>`,
                `<span style="display: inline;">III only</span>`,
                `<span style="display: inline;">II and III only</span>`,
                `<span style="display: inline;">I, II and III</span>`
            ],
            answer: "C",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <span style="display: inline;"><span>\\( f(x)=x^{-1/3} \\)</span> blows up at x = 0, so it is not continuous (I false) and not bounded (II true) on [<span>\\( - \\)</span>1, 1].<br/><br/> Area = <span>\\( 2\\int_0^1x^{-1/3}dx=2\\cdot\\frac32=3 \\)</span>, finite and non-zero (III true).<br/><br/> <b>Answer: II and III only</b><br/><br/></span><br><br><a href="https://gateoverflow.in/8124/gate2015-2-46#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2015-set-2" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2015 SET-2</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/engineering-mathematics" style="color:#2f6d1a; text-decoration:none" target="_blank">Engineering Mathematics</a></div></div>`
        },
        {
            marks: 2,
            neg: 0,
            type: "NAT",
            text: `<span style="display: inline;"><span>\\( \\int_{1/ \\pi }^{2/ \\pi}\\frac{cos(1/x)}{x^{2}}dx= \\)</span>_________.</span>`,
            image: "",
            options: [
            ],
            answer: -1,
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <span style="display: inline;">Let u = 1/x, so <span>\\( du=-\\frac{dx}{x^2} \\)</span>. Limits: x = 1/<span>\\( \\pi \\)</span> <span>\\( \\rightarrow \\)</span> u = <span>\\( \\pi \\)</span>, x = 2/<span>\\( \\pi \\)</span> <span>\\( \\rightarrow \\)</span> u = <span>\\( \\pi/2 \\)</span>.<br/><br/> <span>\\( \\int_{\\pi}^{\\pi/2}-\\cos u\\,du=\\int_{\\pi/2}^{\\pi}\\cos u\\,du=\\sin\\pi-\\sin\\frac{\\pi}{2}=-1 \\)</span><br/><br/> <b>Answer: -1</b><br/><br/></span><br><br><a href="https://gateoverflow.in/8314/gate2015-1-48#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2015-set-1" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2015 SET-1</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/engineering-mathematics" style="color:#2f6d1a; text-decoration:none" target="_blank">Engineering Mathematics</a></div></div>`
        },
        {
            marks: 2,
            neg: 0,
            type: "NAT",
            text: `<span style="display: inline;"><span>\\( \\sum_{x=1}^{99}\\frac{1}{x(x+1)} \\)</span>=__________ .</span>`,
            image: "",
            options: [
            ],
            answer: 0.99,
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <span style="display: inline;"><span>\\( \\frac{1}{x(x+1)}=\\frac1x-\\frac1{x+1} \\)</span>, so the sum telescopes:<br/><br/> <span>\\( 1-\\frac1{100}=0.99 \\)</span><br/><br/> <b>Answer: 0.99</b><br/><br/></span><br><br><a href="https://gateoverflow.in/8248/gate2015-1-31#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2015-set-1" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2015 SET-1</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/engineering-mathematics" style="color:#2f6d1a; text-decoration:none" target="_blank">Engineering Mathematics</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;"><span>\\( \\lim_{x\\rightarrow \\infty }x^{1/x} \\)</span> is</span>`,
            image: "",
            options: [
                `<span style="display: inline;"><span>\\( \\infty \\)</span></span>`,
                `<span style="display: inline;">0</span>`,
                `<span style="display: inline;">1</span>`,
                `<span style="display: inline;">Not defined</span>`
            ],
            answer: "C",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <span style="display: inline;"><span>\\( x^{1/x}=e^{\\frac{\\ln x}{x}} \\)</span>, and <span>\\( \\frac{\\ln x}{x}\\rightarrow0 \\)</span> as <span>\\( x\\rightarrow\\infty \\)</span>.<br/><br/> So the limit is <span>\\( e^0=1 \\)</span>.<br/><br/> <b>Answer: 1</b><br/><br/></span><br><br><a href="https://gateoverflow.in/8021/gate2015-1-2#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2015-set-1" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2015 SET-1</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/engineering-mathematics" style="color:#2f6d1a; text-decoration:none" target="_blank">Engineering Mathematics</a></div></div>`
        }
    ],
});

registerTest({
    series: "cse-gate-2027",
    name: "TWT-Engineering Mathematics(Calculus-III)",
    date: "sep 08, 2026",
    questions: [
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">What is the median of data if its mode is 15 and the mean is 30?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">30</span>`,
                `<span style="display: inline;">25</span>`,
                `<span style="display: inline;">22.5</span>`,
                `<span style="display: inline;">27.5</span>`
            ],
            answer: "B",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <span style="display: inline;">Empirical relation: Mode = 3 Median <span>\\( - \\)</span> 2 Mean.<br/><br/> 15 = 3M <span>\\( - \\)</span> 60 <span>\\( \\rightarrow \\)</span> M = 25<br/><br/> <b>Answer: 25</b><br/><br/></span><br><br><a href="https://gateoverflow.in/53902/isro2014-74" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/isro-cse-2014" style="color:#2f6d1a; text-decoration:none" target="_blank">ISRO CSE 2014</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/engineering-mathematics" style="color:#2f6d1a; text-decoration:none" target="_blank">Engineering Mathematics</a></div></div>`
        },
        {
            marks: 2,
            neg: 0.66,
            type: "MCQ",
            text: `<span style="display: inline;">The value of the integral given below is <br/> <span>\\( \\int_{0}^{\\pi }x^{2}cosxdx \\)</span></span>`,
            image: "",
            options: [
                `<span style="display: inline;"><span>\\( -2\\pi \\)</span></span>`,
                `<span style="display: inline;"><span>\\( \\pi \\)</span></span>`,
                `<span style="display: inline;"><span>\\( -\\pi \\)</span></span>`,
                `<span style="display: inline;"><span>\\( 2\\pi \\)</span></span>`
            ],
            answer: "A",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <span style="display: inline;">Integrate by parts: <span>\\( \\int x^2\\cos x\\,dx=x^2\\sin x+2x\\cos x-2\\sin x \\)</span><br/><br/> From 0 to <span>\\( \\pi \\)</span>: <span>\\( (0+2\\pi(-1)-0)-0=-2\\pi \\)</span><br/><br/> <b>Answer: <span>\\( -2\\pi \\)</span></b><br/><br/></span><br><br><a href="https://gateoverflow.in/2081/gate2014-3-47#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2014-set-3" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2014 SET-3</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/engineering-mathematics" style="color:#2f6d1a; text-decoration:none" target="_blank">Engineering Mathematics</a></div></div>`
        },
        {
            marks: 1,
            neg: 0,
            type: "NAT",
            text: `<span style="display: inline;">If <span>\\( \\int_{0}^{2\\pi}|x sinx| dx=k \\pi \\)</span>, then the value of k is equal to _______.</span>`,
            image: "",
            options: [
            ],
            answer: 4,
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <span style="display: inline;">On <span>\\( [0,\\pi] \\)</span>, <span>\\( x\\sin x\\ge0 \\)</span>; on <span>\\( [\\pi,2\\pi] \\)</span>, <span>\\( x\\sin x\\le0 \\)</span>. Antiderivative of <span>\\( x\\sin x \\)</span> is <span>\\( \\sin x-x\\cos x \\)</span>.<br/><br/> - <span>\\( \\int_0^{\\pi}x\\sin x\\,dx=\\pi \\)</span><br/> - <span>\\( -\\int_{\\pi}^{2\\pi}x\\sin x\\,dx=-[(0-2\\pi)-(0+\\pi)]=3\\pi \\)</span><br/><br/> Total = <span>\\( 4\\pi \\)</span> <span>\\( \\rightarrow \\)</span> k = 4<br/><br/> <b>Answer: 4</b><br/><br/></span><br><br><a href="https://gateoverflow.in/2040/gate2014-3-6#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2014-set-3" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2014 SET-3</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/engineering-mathematics" style="color:#2f6d1a; text-decoration:none" target="_blank">Engineering Mathematics</a></div></div>`
        },
        {
            marks: 2,
            neg: 0,
            type: "NAT",
            text: `<span style="display: inline;">The function <span>\\( f(x)=x sin x \\)</span> satisfies the following equation: <span>\\( f''(x)+f(x)+tcos x=0 \\)</span>. The value of t is______.</span>`,
            image: "",
            options: [
            ],
            answer: -2,
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <span style="display: inline;"><span>\\( f'=\\sin x+x\\cos x \\)</span>, <span>\\( f''=2\\cos x-x\\sin x \\)</span>.<br/> <span>\\( f''+f=2\\cos x \\)</span>, so <span>\\( 2\\cos x+t\\cos x=0\\Rightarrow t=-2 \\)</span>.<br/><br/> <b>Answer: -2</b><br/><br/></span><br><br><a href="https://gateoverflow.in/1924/gate2014-1-46#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2014-set-1" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2014 SET-1</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/engineering-mathematics" style="color:#2f6d1a; text-decoration:none" target="_blank">Engineering Mathematics</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Let the function <br/> <span>\\( f(\\theta)=\\begin{vmatrix} sin\\theta &amp; cos\\theta &amp; tan\\theta \\\\ sin(\\frac{\\pi}{6}) &amp; cos(\\frac{\\pi}{6}) &amp; tan(\\frac{\\pi}{6})\\\\ sin(\\frac{\\pi}{3})&amp; cos(\\frac{\\pi}{3}) &amp; tan(\\frac{\\pi}{3}) \\end{vmatrix} \\)</span> <br/> where <span>\\( \\theta \\in [\\frac{\\pi}{6},\\frac{\\pi}{3}] \\)</span> and <span>\\( f'(\\theta ) \\)</span> denote the derivative of f with respect to <span>\\( \\theta \\)</span> . Which of the following statements is/are TRUE? <br/>(I) There existrs <span>\\( \\theta \\in (\\frac{\\pi}{6},\\frac{\\pi}{3}) \\)</span> such that <span>\\( f'(\\theta )=0 \\)</span> <br/> (I) There existrs <span>\\( \\theta \\in (\\frac{\\pi}{6},\\frac{\\pi}{3}) \\)</span> such that <span>\\( f'(\\theta )\\neq 0 \\)</span></span>`,
            image: "",
            options: [
                `<span style="display: inline;">I only</span>`,
                `<span style="display: inline;">II only</span>`,
                `<span style="display: inline;">Both I and II</span>`,
                `<span style="display: inline;">Neither I nor II</span>`
            ],
            answer: "C",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <span style="display: inline;">At <span>\\( \\theta=\\pi/6 \\)</span> the first row equals the second, and at <span>\\( \\theta=\\pi/3 \\)</span> it equals the third, so <span>\\( f(\\pi/6)=f(\\pi/3)=0 \\)</span>.<br/><br/> - By Rolle's theorem, <span>\\( f'(\\theta)=0 \\)</span> somewhere in between <span>\\( \\rightarrow \\)</span> I true.<br/> - f is not constant, so <span>\\( f'(\\theta)\\ne0 \\)</span> somewhere <span>\\( \\rightarrow \\)</span> II true.<br/><br/> <b>Answer: Both I and II</b><br/><br/></span><br><br><a href="https://gateoverflow.in/1763/gate2014-1-6#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2014-set-1" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2014 SET-1</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/engineering-mathematics" style="color:#2f6d1a; text-decoration:none" target="_blank">Engineering Mathematics</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">What is the least value of the function <span>\\( f(x) = 2x^{2}-8x-3 \\)</span> in the interval [0, 5]?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">-15</span>`,
                `<span style="display: inline;">7</span>`,
                `<span style="display: inline;">-11</span>`,
                `<span style="display: inline;">-3</span>`
            ],
            answer: "C",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <span style="display: inline;"></span><br><br><a href="https://gateoverflow.in/44161/isro-2013-49" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/isro-cse-2013" style="color:#2f6d1a; text-decoration:none" target="_blank">ISRO CSE 2013</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/engineering-mathematics" style="color:#2f6d1a; text-decoration:none" target="_blank">Engineering Mathematics</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Which one of the following functions is continuous at x = 3?</span>`,
            image: "",
            options: [
                `<span style="display: inline;"><span>\\( f(x)=\\left\\{\\begin{matrix} 2, &amp; if \\; x=3\\\\ x-1,&amp; if \\; x \\gt 3\\\\ \\frac{x+3}{3},&amp;if \\; x \\lt 3 \\end{matrix}\\right. \\)</span></span>`,
                `<span style="display: inline;"><span>\\( f(x)=\\left\\{\\begin{matrix} 4, &amp; if \\; x=3\\\\ 8-x&amp;if \\; x\\neq 3 \\end{matrix}\\right. \\)</span></span>`,
                `<span style="display: inline;"><span>\\( f(x)=\\left\\{\\begin{matrix} x+3, &amp; if \\; x\\leq 3\\\\ x-4&amp;if \\; x \\gt 3 \\end{matrix}\\right. \\)</span></span>`,
                `<span style="display: inline;"><span>\\( f(x)=\\frac{1}{x^{3}-27}, if \\; x\\neq 3 \\)</span></span>`
            ],
            answer: "A",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <span style="display: inline;">Option 1 at x = 3: f(3) = 2, right limit 3 <span>\\( - \\)</span> 1 = 2, left limit (3 + 3)/3 = 2 <span>\\( \\rightarrow \\)</span> continuous.<br/><br/> - Option 2: limit 5 <span>\\( \\ne \\)</span> f(3) = 4<br/> - Option 3: left 6, right <span>\\( - \\)</span>1<br/> - Option 4: not defined at 3<br/><br/> <b>Answer: Option 1</b><br/><br/></span><br><br><a href="https://gateoverflow.in/1533/gate2013-22#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2013" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2013</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/engineering-mathematics" style="color:#2f6d1a; text-decoration:none" target="_blank">Engineering Mathematics</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Consider the function f(x)=sin(x) in the interval x <span>\\( \\in [\\pi/4, 7\\pi/4] \\)</span>. The number and location(s) of the local minima of this function are</span>`,
            image: "",
            options: [
                `<span style="display: inline;">One, at <span>\\( \\pi \\)</span>/2</span>`,
                `<span style="display: inline;">One, at 3<span>\\( \\pi \\)</span>/2</span>`,
                `<span style="display: inline;">Two, at <span>\\( \\pi \\)</span>/2 and 3<span>\\( \\pi \\)</span>/2</span>`,
                `<span style="display: inline;">Two, at <span>\\( \\pi \\)</span>/4 and 3<span>\\( \\pi \\)</span>/2</span>`
            ],
            answer: "D",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <span style="display: inline;">Checking each statement:<br/>- Inside the interval, sin x has a minimum at <span>\\( 3\\pi/2 \\)</span> (value <span>\\( - \\)</span>1).<br/> - At the left end <span>\\( \\pi/4 \\)</span>, sin x is increasing, so nearby points are larger: it is a local minimum.<br/> - At <span>\\( 7\\pi/4 \\)</span>, sin x is increasing towards it, so it is a local maximum.<br/><br/> <b>Answer: Two, at <span>\\( \\pi/4 \\)</span> and <span>\\( 3\\pi/2 \\)</span></b><br/><br/></span><br><br><a href="https://gateoverflow.in/41/gate2012-9#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2012" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2012</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/engineering-mathematics" style="color:#2f6d1a; text-decoration:none" target="_blank">Engineering Mathematics</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">n-th derivative of <span>\\( x^n \\)</span> is</span>`,
            image: "",
            options: [
                `<span style="display: inline;"><span>\\( nx^{n-1} \\)</span></span>`,
                `<span style="display: inline;"><span>\\( n^n.n! \\)</span></span>`,
                `<span style="display: inline;"><span>\\( nx^n! \\)</span></span>`,
                `<span style="display: inline;">n!</span>`
            ],
            answer: "D",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <span style="display: inline;">Differentiating <span>\\( x^n \\)</span> n times gives <span>\\( n(n-1)\\cdots1\\cdot x^0=n! \\)</span><br/><br/> <b>Answer: n!</b><br/><br/></span><br><br><a href="https://gateoverflow.in/52827/isro2011-59" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/isro-cse-2011" style="color:#2f6d1a; text-decoration:none" target="_blank">ISRO CSE 2011</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/engineering-mathematics" style="color:#2f6d1a; text-decoration:none" target="_blank">Engineering Mathematics</a></div></div>`
        },
        {
            marks: 2,
            neg: 0.66,
            type: "MCQ",
            text: `<span style="display: inline;">Given <span>\\( i=\\sqrt{-1} \\)</span>, what will be the evaluation of the definite integral <span>\\( \\int_{0}^{\\pi /2}\\frac{cosx + i sinx}{cosx -i sinx} dx \\)</span>?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">0</span>`,
                `<span style="display: inline;">2</span>`,
                `<span style="display: inline;">i</span>`,
                `<span style="display: inline;"><span>\\( -i \\)</span></span>`
            ],
            answer: "C",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <span style="display: inline;"><span>\\( \\frac{\\cos x+i\\sin x}{\\cos x-i\\sin x}=\\frac{e^{ix}}{e^{-ix}}=e^{2ix} \\)</span><br/><br/> <span>\\( \\int_0^{\\pi/2}e^{2ix}dx=\\frac{e^{i\\pi}-1}{2i}=\\frac{-2}{2i}=-\\frac1i=i \\)</span><br/><br/> <b>Answer: i</b><br/><br/></span><br><br><a href="https://gateoverflow.in/2133/gate2011-31#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2011" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2011</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/engineering-mathematics" style="color:#2f6d1a; text-decoration:none" target="_blank">Engineering Mathematics</a></div></div>`
        },
        {
            marks: 2,
            neg: 0.66,
            type: "MCQ",
            text: `<span style="display: inline;">The weight of a sequence <span>\\( a_{0},a_{1},...,a_{n-1} \\)</span> of real numbers is defined as <span>\\( a_{0}+a_{1}/2+...+a_{n-1}/2^{n-1} \\)</span> A subsequence of a sequence is obtained by deleting some elements from the sequence, keeping the order of the remaining elements the same. Let X denote the maximum possible weight of a subsequence of <span>\\( a_{0},a_{1},...,a_{n-1} \\)</span> and Y the maximum possible weight of a subsequence of <span>\\( a_{0},a_{1},...,a_{n-1} \\)</span>. Then X is equal to</span>`,
            image: "",
            options: [
                `<span style="display: inline;">max(Y,<span>\\( a_{0} \\)</span>+Y)</span>`,
                `<span style="display: inline;">max(Y,<span>\\( a_{0} \\)</span>+Y/2)</span>`,
                `<span style="display: inline;">max(Y,<span>\\( a_{0} \\)</span>+2Y)</span>`,
                `<span style="display: inline;"><span>\\( a_{0} \\)</span>+Y/2</span>`
            ],
            answer: "B",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <span style="display: inline;">Either a0 is not taken: the best weight comes from the rest, i.e. Y.<br/><br/> Or a0 is taken: a0 gets weight 1 and the rest of the chosen subsequence shifts one place, so its weights halve: <span>\\( a_0+Y/2 \\)</span>.<br/><br/> X = max(Y, <span>\\( a_0+Y/2 \\)</span>)<br/><br/> <b>Answer: max(Y, <span>\\( a_0 \\)</span> + Y/2)</b><br/><br/></span><br><br><a href="https://gateoverflow.in/2208/gate2010-34#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2010" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2010</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/engineering-mathematics" style="color:#2f6d1a; text-decoration:none" target="_blank">Engineering Mathematics</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">What is the value of <span>\\( \\lim_{n\\rightarrow \\infty }(1-\\frac{1}{n})^{2n} \\)</span>?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">0</span>`,
                `<span style="display: inline;"><span>\\( e^{-2} \\)</span></span>`,
                `<span style="display: inline;"><span>\\( e^{-1/2} \\)</span></span>`,
                `<span style="display: inline;">1</span>`
            ],
            answer: "B",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <span style="display: inline;"><span>\\( \\left(1-\\frac1n\\right)^{2n}=\\left[\\left(1-\\frac1n\\right)^{n}\\right]^2\\rightarrow(e^{-1})^2=e^{-2} \\)</span><br/><br/> <b>Answer: <span>\\( e^{-2} \\)</span></b><br/><br/></span><br><br><a href="https://gateoverflow.in/1151/gate2010-5#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2010" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2010</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/engineering-mathematics" style="color:#2f6d1a; text-decoration:none" target="_blank">Engineering Mathematics</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">The value of x at which y is minimum for <span>\\( y=x^2 -3x +1 \\)</span> is</span>`,
            image: "",
            options: [
                `<span style="display: inline;">-3/2</span>`,
                `<span style="display: inline;">3/2</span>`,
                `<span style="display: inline;">0</span>`,
                `<span style="display: inline;">-5/4</span>`
            ],
            answer: "B",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <span style="display: inline;"></span><br><br><a href="https://gateoverflow.in/50479/isro2009-50" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/isro-cse-2009" style="color:#2f6d1a; text-decoration:none" target="_blank">ISRO CSE 2009</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/engineering-mathematics" style="color:#2f6d1a; text-decoration:none" target="_blank">Engineering Mathematics</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;"><span>\\( x=a \\cos(t), y=b \\sin(t) \\)</span> is the parametric form of</span>`,
            image: "",
            options: [
                `<span style="display: inline;">Ellipse</span>`,
                `<span style="display: inline;">Hyperbola</span>`,
                `<span style="display: inline;">Circle</span>`,
                `<span style="display: inline;">Parabola</span>`
            ],
            answer: "A",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <span style="display: inline;"></span><br><br><a href="https://gateoverflow.in/50478/isro2009-49" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/isro-cse-2009" style="color:#2f6d1a; text-decoration:none" target="_blank">ISRO CSE 2009</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/engineering-mathematics" style="color:#2f6d1a; text-decoration:none" target="_blank">Engineering Mathematics</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">The formula <span>\\( \\int\\limits_{x0}^{xa} y(n) dx \\simeq h/2 (y_0 + 2y_1 + \\dots +2y_{n-1} + y_n) - h/12 (\\triangledown y_n - \\triangle y_0) \\)</span><br/> <span>\\( - h/24 (\\triangledown ^2 y_n + \\triangle ^2 y_0) -19h/720 (\\triangledown ^3 y_n - \\triangle ^3 y_0) \\dots \\)</span> is called</span>`,
            image: "",
            options: [
                `<span style="display: inline;">Simpson rule</span>`,
                `<span style="display: inline;">Trapezoidal rule</span>`,
                `<span style="display: inline;">Romberg's rule</span>`,
                `<span style="display: inline;">Gregory's formula</span>`
            ],
            answer: "B",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <span style="display: inline;"></span><br><br><a href="https://gateoverflow.in/50474/isro2009-47" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/isro-cse-2009" style="color:#2f6d1a; text-decoration:none" target="_blank">ISRO CSE 2009</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/engineering-mathematics" style="color:#2f6d1a; text-decoration:none" target="_blank">Engineering Mathematics</a></div></div>`
        }
    ],
});

registerTest({
    series: "cse-gate-2027",
    name: "TWT-Engineering Mathematics(Calculus-IV)",
    date: "sep 08, 2026",
    questions: [
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Which of the following statement is correct</span>`,
            image: "",
            options: [
                `<span style="display: inline;"><span>\\( \\triangle (U_k V_k) = U_k \\triangle V_k + V_k \\triangle U_k \\)</span></span>`,
                `<span style="display: inline;"><span>\\( \\triangle (U_k V_k) = U_{k+1} \\triangle V_k + V_{k+1} \\triangle U_k \\)</span></span>`,
                `<span style="display: inline;"><span>\\( \\triangle (U_k V_k) = V_{k+1} \\triangle U_k + U_k \\triangle V_k \\)</span></span>`,
                `<span style="display: inline;"><span>\\( \\triangle (U_k V_k) = U_{k+1} \\triangle V_k + V_k \\triangle U_k \\)</span></span>`
            ],
            answer: "B",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <span style="display: inline;"></span><br><br><a href="https://gateoverflow.in/48070/isro2009-45" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/isro-cse-2009" style="color:#2f6d1a; text-decoration:none" target="_blank">ISRO CSE 2009</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/engineering-mathematics" style="color:#2f6d1a; text-decoration:none" target="_blank">Engineering Mathematics</a></div></div>`
        },
        {
            marks: 2,
            neg: 0.66,
            type: "MCQ",
            text: `<span style="display: inline;"><span>\\( \\int_{0}^{\\pi /4}(1-tanx)/(1+tanx)dx \\)</span> evaluates to</span>`,
            image: "",
            options: [
                `<span style="display: inline;">0</span>`,
                `<span style="display: inline;">1</span>`,
                `<span style="display: inline;">ln 2</span>`,
                `<span style="display: inline;">1/2ln2</span>`
            ],
            answer: "D",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <span style="display: inline;"></span><br><br><a href="https://gateoverflow.in/802/gate2009-25#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2009" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2009</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/engineering-mathematics" style="color:#2f6d1a; text-decoration:none" target="_blank">Engineering Mathematics</a></div></div>`
        },
        {
            marks: 2,
            neg: 0.66,
            type: "MCQ",
            text: `<span style="display: inline;">If <span>\\( f(x) \\)</span> is defined as follows, what is the minimum value of <span>\\( f(x) \\)</span> for <span>\\( x \\in (0, 2] \\)</span> ?<br/> <span>\\( f(x) = \\begin{cases} \\frac{25}{8x} \\text{ when } x \\leq \\frac{3}{2} \\\\ x+ \\frac{1}{x} \\text { otherwise}\\end{cases} \\)</span></span>`,
            image: "",
            options: [
                `<span style="display: inline;">2</span>`,
                `<span style="display: inline;"><span>\\( 2 \\frac{1}{12} \\)</span></span>`,
                `<span style="display: inline;"><span>\\( 2\\frac{1}{6} \\)</span></span>`,
                `<span style="display: inline;"><span>\\( 2\\frac{1}{2} \\)</span></span>`
            ],
            answer: "B",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <span style="display: inline;"></span><br><br><a href="https://gateoverflow.in/3341/gate2008-it-31" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-it-2008" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE IT 2008</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/engineering-mathematics" style="color:#2f6d1a; text-decoration:none" target="_blank">Engineering Mathematics</a></div></div>`
        },
        {
            marks: 2,
            neg: 0.66,
            type: "MCQ",
            text: `<span style="display: inline;">Let x be a random variable following normal distribution with mean +1 and variance 4. Let Y be another normal variable with mean -1 and variance unknown. If P (x <span>\\( \\leq \\)</span> -1) = P (Y <span>\\( \\geq \\)</span>2) , the standard deviation of Y is</span>`,
            image: "",
            options: [
                `<span style="display: inline;">3</span>`,
                `<span style="display: inline;">2</span>`,
                `<span style="display: inline;"><span>\\( \\sqrt{2} \\)</span></span>`,
                `<span style="display: inline;">1</span>`
            ],
            answer: "A",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <span style="display: inline;"></span><br><br><a href="https://gateoverflow.in/427/gate2008-29#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2008" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2008</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/engineering-mathematics" style="color:#2f6d1a; text-decoration:none" target="_blank">Engineering Mathematics</a></div></div>`
        },
        {
            marks: 2,
            neg: 0.66,
            type: "MCQ",
            text: `<span style="display: inline;">A point on a curve is said to be an extremum if it is a local minimum or a local maximum. The number of distinct extrema for the curve <span>\\( 3x^{4}-16x^{3}+24x^{2}+37 \\)</span> is</span>`,
            image: "",
            options: [
                `<span style="display: inline;">0</span>`,
                `<span style="display: inline;">1</span>`,
                `<span style="display: inline;">2</span>`,
                `<span style="display: inline;">3</span>`
            ],
            answer: "B",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <span style="display: inline;"></span><br><br><a href="https://gateoverflow.in/423/gate2008-25#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2008" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2008</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/engineering-mathematics" style="color:#2f6d1a; text-decoration:none" target="_blank">Engineering Mathematics</a></div></div>`
        },
        {
            marks: 2,
            neg: 0.66,
            type: "MCQ",
            text: `<span style="display: inline;"><img src="images/twt-calculus/q24.jpg"/></span>`,
            image: "",
            options: [
                `<span style="display: inline;">P = Q - K</span>`,
                `<span style="display: inline;">P = Q + K</span>`,
                `<span style="display: inline;">P = Q</span>`,
                `<span style="display: inline;">P = Q + 2K</span>`
            ],
            answer: "A",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <span style="display: inline;"></span><br><br><a href="https://gateoverflow.in/422/gate2008-24#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2008" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2008</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/engineering-mathematics" style="color:#2f6d1a; text-decoration:none" target="_blank">Engineering Mathematics</a></div></div>`
        },
        {
            marks: 2,
            neg: 0.66,
            type: "MCQ",
            text: `<span style="display: inline;">The minimum number of equal length subintervals needed to approximate <span>\\( \\int_{1}^{2}xe^{x}dx \\)</span> to an accuracy of at least <span>\\( \\frac{1}{3}*10^{-6} \\)</span> using the trapezoidal rule is</span>`,
            image: "",
            options: [
                `<span style="display: inline;">1000e</span>`,
                `<span style="display: inline;">1000</span>`,
                `<span style="display: inline;">100e</span>`,
                `<span style="display: inline;">100</span>`
            ],
            answer: "A",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <span style="display: inline;"></span><br><br><a href="https://gateoverflow.in/419/gate2008-21#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2008" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2008</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/engineering-mathematics" style="color:#2f6d1a; text-decoration:none" target="_blank">Engineering Mathematics</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;"><span>\\( \\lim_{x\\rightarrow \\infty }\\frac{x-sin x}{x+cos x} \\)</span> equals</span>`,
            image: "",
            options: [
                `<span style="display: inline;">1</span>`,
                `<span style="display: inline;">-1</span>`,
                `<span style="display: inline;"><span>\\( \\infty \\)</span></span>`,
                `<span style="display: inline;"><span>\\( -\\infty \\)</span></span>`
            ],
            answer: "A",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <span style="display: inline;"></span><br><br><a href="https://gateoverflow.in/399/gate2008-1#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2008" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2008</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/engineering-mathematics" style="color:#2f6d1a; text-decoration:none" target="_blank">Engineering Mathematics</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Consider the set of (column) vectors defined by <br/> <span>\\( X=\\{x\\in R^{3}|x_{1}+x_{2}+x_{3}=0, \\; where \\; x^{T}=[x_{1},x_{2},x_{3}]^{T}\\}. \\)</span><br/> Which of the following is TRUE?</span>`,
            image: "",
            options: [
                `<span style="display: inline;"><span>\\( \\{[1,-1,0]^{T},[1,0,-1]^{T}\\} \\)</span> is a basis for the subspace X.</span>`,
                `<span style="display: inline;"><span>\\( \\{[1,-1,0]^{T},[1,0,-1]^{T}\\} \\)</span> is a linearly independent set, but it does not span X and therefore is not a basis of X.</span>`,
                `<span style="display: inline;">X is not a subspace of <span>\\( R^{3} \\)</span></span>`,
                `<span style="display: inline;">None of the above</span>`
            ],
            answer: "A",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <span style="display: inline;"></span><br><br><a href="https://gateoverflow.in/1225/gate2007-27#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2007" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2007</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/engineering-mathematics" style="color:#2f6d1a; text-decoration:none" target="_blank">Engineering Mathematics</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Consider the following two statements about the function f(x)=|x|:<br/><br/> P. f(x) is continuous for all real values of x <br/> Q. f(x) is differentiable for all real values of x <br/><br/> Which of the following is TRUE?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">P is true and Q is false.</span>`,
                `<span style="display: inline;">P is false and Q is true.</span>`,
                `<span style="display: inline;">Both P and Q are true.</span>`,
                `<span style="display: inline;">Both P and Q are false.</span>`
            ],
            answer: "A",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <span style="display: inline;"></span><br><br><a href="https://gateoverflow.in/1200/gate2007-1#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2007" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2007</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/engineering-mathematics" style="color:#2f6d1a; text-decoration:none" target="_blank">Engineering Mathematics</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">The following definite integral evaluates to <br/><span>\\( \\int_{-\\infty}^{0} e^ {-\\left(\\frac{x^2}{20} \\right )}dx \\)</span></span>`,
            image: "",
            options: [
                `<span style="display: inline;"><span>\\( \\frac{1}{2} \\)</span></span>`,
                `<span style="display: inline;"><span>\\( \\pi \\sqrt{10} \\)</span></span>`,
                `<span style="display: inline;"><span>\\( \\sqrt{10} \\)</span></span>`,
                `<span style="display: inline;"><span>\\( \\pi \\)</span></span>`
            ],
            answer: "A",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <span style="display: inline;"></span><br><br><a href="https://gateoverflow.in/3567/gate2006-it-28" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-it-2006" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE IT 2006</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/engineering-mathematics" style="color:#2f6d1a; text-decoration:none" target="_blank">Engineering Mathematics</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">What is the value of <span>\\( \\int_{0}^{2\\pi}(x-\\pi)^2 (\\sin x) dx \\)</span></span>`,
            image: "",
            options: [
                `<span style="display: inline;">-1</span>`,
                `<span style="display: inline;">0</span>`,
                `<span style="display: inline;">1</span>`,
                `<span style="display: inline;"><span>\\( \\pi \\)</span></span>`
            ],
            answer: "B",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <span style="display: inline;"></span><br><br><a href="https://gateoverflow.in/3782/gate2005-it-35" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-it-2005" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE IT 2005</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/engineering-mathematics" style="color:#2f6d1a; text-decoration:none" target="_blank">Engineering Mathematics</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Let <span>\\( G(x)=\\frac{1}{(1-x)^{2}}=\\sum_{i=0}^{\\infty }g(i)x^{i} \\)</span>, where <span>\\( |x| \\lt 1 \\)</span>. What is g(i)?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">i</span>`,
                `<span style="display: inline;">i+1</span>`,
                `<span style="display: inline;">2i</span>`,
                `<span style="display: inline;"><span>\\( 2^{i} \\)</span></span>`
            ],
            answer: "B",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <span style="display: inline;"></span><br><br><a href="https://gateoverflow.in/1175/gate2005-50#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2005" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2005</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/engineering-mathematics" style="color:#2f6d1a; text-decoration:none" target="_blank">Engineering Mathematics</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">A point is randomly selected with uniform probability in the X-Y plane within the rectangle with corners at (0,0), (1,0), (1,2) and (0,2). If p is the length of the position vector of the point, the expected value of <span>\\( p^{2} \\)</span> is</span>`,
            image: "",
            options: [
                `<span style="display: inline;">2/3</span>`,
                `<span style="display: inline;">1</span>`,
                `<span style="display: inline;">4/3</span>`,
                `<span style="display: inline;">5/3</span>`
            ],
            answer: "D",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <span style="display: inline;"></span><br><br><a href="https://gateoverflow.in/1074/gate2004-80#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2004" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2004</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/engineering-mathematics" style="color:#2f6d1a; text-decoration:none" target="_blank">Engineering Mathematics</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Let <span>\\( S = \\sum_{i=3}^{100} i \\log_{2} i \\)</span>, and <span>\\( T = \\int_{2}^{100} x \\log_{2}x dx. \\)</span><br/> Which of the following statements is true?</span>`,
            image: "",
            options: [
                `<span style="display: inline;"><span>\\( S \\gt T \\)</span></span>`,
                `<span style="display: inline;"><span>\\( S = T \\)</span></span>`,
                `<span style="display: inline;"><span>\\( S \\lt T \\)</span> and <span>\\( 2S \\gt T \\)</span></span>`,
                `<span style="display: inline;"><span>\\( 2S \\leq T \\)</span></span>`
            ],
            answer: "A",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <span style="display: inline;"></span><br><br><a href="https://gateoverflow.in/650/gate2000-2-3" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2000" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2000</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/engineering-mathematics" style="color:#2f6d1a; text-decoration:none" target="_blank">Engineering Mathematics</a></div></div>`
        }
    ],
});

registerTest({
    series: "cse-gate-2027",
    name: "TWT-Engineering Mathematics(Calculus-V)",
    date: "sep 08, 2026",
    questions: [
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">What is the maximum value of the function <span>\\( f(x) = 2x^2 - 2x + 6 \\)</span> in the interval <span>\\( \\left[0,2 \\right] \\)</span>?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">6</span>`,
                `<span style="display: inline;">10</span>`,
                `<span style="display: inline;">12</span>`,
                `<span style="display: inline;">5.5</span>`
            ],
            answer: "B",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <span style="display: inline;"></span><br><br><a href="https://gateoverflow.in/2242/gate1997-4-1" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-1997" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 1997</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/engineering-mathematics" style="color:#2f6d1a; text-decoration:none" target="_blank">Engineering Mathematics</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">The formula used to compute an approximation for the second derivative of a function <span>\\( f \\)</span> at a point <span>\\( x_0 \\)</span> is</span>`,
            image: "",
            options: [
                `<span style="display: inline;"><span>\\( \\dfrac{f(x_0 +h) + f(x_0 - h)}{2} \\)</span></span>`,
                `<span style="display: inline;"><span>\\( \\dfrac{f(x_0 +h) - f(x_0 - h)}{2h} \\)</span></span>`,
                `<span style="display: inline;"><span>\\( \\dfrac{f(x_0 +h) + 2f(x_0) + f(x_0 - h)}{h^2} \\)</span></span>`,
                `<span style="display: inline;"><span>\\( \\dfrac{f(x_0 +h) - 2f(x_0) + f(x_0 - h)}{h^2} \\)</span></span>`
            ],
            answer: "D",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <span style="display: inline;"></span><br><br><a href="https://gateoverflow.in/2710/gate1996-1-6" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-1996" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 1996</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/engineering-mathematics" style="color:#2f6d1a; text-decoration:none" target="_blank">Engineering Mathematics</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">The solution of differential equation <span>\\( y''+3y'+2y=0 \\)</span> is of the form</span>`,
            image: "",
            options: [
                `<span style="display: inline;"><span>\\( C_1e^x+C_2e^{2x} \\)</span></span>`,
                `<span style="display: inline;"><span>\\( C_1e^{-x}+C_2e^{3x} \\)</span></span>`,
                `<span style="display: inline;"><span>\\( C_1e^{-x}+C_2e^{-2x} \\)</span></span>`,
                `<span style="display: inline;"><span>\\( C_1e^{-2x}+C_2e^{-x} \\)</span></span>`
            ],
            answer: "C",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <span style="display: inline;"></span><br><br><a href="https://gateoverflow.in/2630/gate1995-2-18" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-1995" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 1995</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/engineering-mathematics" style="color:#2f6d1a; text-decoration:none" target="_blank">Engineering Mathematics</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">In the interval <span>\\( [0, \\pi] \\)</span> the equation <span>\\( x=\\cos x \\)</span> has</span>`,
            image: "",
            options: [
                `<span style="display: inline;">No solution</span>`,
                `<span style="display: inline;">Exactly one solution</span>`,
                `<span style="display: inline;">Exactly two solutions</span>`,
                `<span style="display: inline;">An infinite number of solutions</span>`
            ],
            answer: "B",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <span style="display: inline;"></span><br><br><a href="https://gateoverflow.in/2608/gate1995-1-21" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-1995" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 1995</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/engineering-mathematics" style="color:#2f6d1a; text-decoration:none" target="_blank">Engineering Mathematics</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Backward Euler method for solving the differential equation <span>\\( \\frac{dy}{dx}=f(x, y) \\)</span> is specified by, (choose one of the following).</span>`,
            image: "",
            options: [
                `<span style="display: inline;"><span>\\( y_{n+1}=y_n+hf(x_n, y_n) \\)</span></span>`,
                `<span style="display: inline;"><span>\\( y_{n+1}=y_n+hf(x_{n+1}, y_{n+1}) \\)</span></span>`,
                `<span style="display: inline;"><span>\\( y_{n+1}=y_{n-1}+2hf(x_n, y_n) \\)</span></span>`,
                `<span style="display: inline;"><span>\\( y_{n+1}= (1+h)f(x_{n+1}, y_{n+1}) \\)</span></span>`
            ],
            answer: "B",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <span style="display: inline;"></span><br><br><a href="https://gateoverflow.in/2439/gate1994-1-3" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-1994" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 1994</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/engineering-mathematics" style="color:#2f6d1a; text-decoration:none" target="_blank">Engineering Mathematics</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">The function <span>\\( f\\left(x,y\\right) = x^2y - 3xy + 2y +x \\)</span> has</span>`,
            image: "",
            options: [
                `<span style="display: inline;">no local extremum</span>`,
                `<span style="display: inline;">one local minimum but no local maximum</span>`,
                `<span style="display: inline;">one local maximum but no local minimum</span>`,
                `<span style="display: inline;">one local minimum and one local maximum</span>`
            ],
            answer: "A",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <span style="display: inline;"></span><br><br><a href="https://gateoverflow.in/602/gate1993-01-7" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-1993" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 1993</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/engineering-mathematics" style="color:#2f6d1a; text-decoration:none" target="_blank">Engineering Mathematics</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Which of the following improper integrals is (are) convergent?</span>`,
            image: "",
            options: [
                `<span style="display: inline;"><span>\\( \\int ^{1} _{0} \\frac{\\sin x}{1-\\cos x}dx \\)</span></span>`,
                `<span style="display: inline;"><span>\\( \\int ^{\\infty} _{0} \\frac{\\cos x}{1+x} dx \\)</span></span>`,
                `<span style="display: inline;"><span>\\( \\int ^{\\infty} _{0} \\frac{x}{1+x^2} dx \\)</span></span>`,
                `<span style="display: inline;"><span>\\( \\int ^{1} _{0} \\frac{1-\\cos x}{\\frac{x^5}{2}} dx \\)</span></span>`
            ],
            answer: "A",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <span style="display: inline;"></span><br><br><a href="https://gateoverflow.in/601/gate1993-01-6" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-1993" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 1993</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/engineering-mathematics" style="color:#2f6d1a; text-decoration:none" target="_blank">Engineering Mathematics</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">The differential equation <br/><span>\\( \\frac{d^2 y}{dx^2}+\\frac{dy}{dx}+\\sin y =0 \\)</span> is:</span>`,
            image: "",
            options: [
                `<span style="display: inline;">linear</span>`,
                `<span style="display: inline;">non- linear</span>`,
                `<span style="display: inline;">homogeneous</span>`,
                `<span style="display: inline;">of degree two</span>`
            ],
            answer: "A",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <span style="display: inline;"></span><br><br><a href="https://gateoverflow.in/597/gate1993-01-2" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-1993" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 1993</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/engineering-mathematics" style="color:#2f6d1a; text-decoration:none" target="_blank">Engineering Mathematics</a></div></div>`
        }
    ],
});
