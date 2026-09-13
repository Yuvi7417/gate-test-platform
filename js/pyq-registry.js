registerTest({
    series: "cse-gate-asymptotic-notation",
    name: "Asymptotic Notation PYQs",
    date: "2026",
    questions: [
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `Consider an array \\( A \\) of integers of size
                \\( n \\). The indices of
                \\( A \\) run from \\( 1 \\) to \\( n \\). An algorithm is to be
                designed to check whether \\( A \\) satisfies the condition
                given below. <br/><br/>\\( \\forall i, j \\in\\{1, \\ldots, n-1\\} \\) such
                that \\( i&gt;j,(A[i+1]-A[i])&gt;(A[j+1]-A[j]) \\) <br/><br/>Which one of the
                following gives the worst case time complexity of the fastest algorithm that can be designed for the
                problem?`,
            image: "",
            options: [
                `\\( \\Theta(n) \\)`,
                `\\( \\Theta(\\log (n)) \\)`,
                `\\( \\Theta(n \\log (n)) \\)`,
                `\\( \\Theta\\left(n^{2}\\right) \\)`
            ],
            answer: "A",
            solution: `<img src="images/gate-cse/asymptotic-notation/q1.png" style="max-width: 100%;"><br>The condition says: for every pair of indices \\( i&gt;j \\) (both in
                    \\( \\{1,\\ldots,n-1\\} \\)),
                    the consecutive difference \\( D[i]=A[i+1]-A[i] \\) must exceed \\( D[j]=A[j+1]-A[j] \\). In other words, the
                    sequence of consecutive differences \\( D[1],D[2],\\ldots,D[n-1] \\)
                    must be <b>strictly increasing</b> (array \\( A \\) is
                    "convex").<br/><br/>
                    This can be checked with a single linear pass: compute each \\( D[i]=A[i+1]-A[i] \\) and verify \\( D[i]&gt;D[i-1] \\)
                    for each consecutive pair, stopping early with "no" the first time this fails. This takes
                    \\( \\Theta(n) \\) time, and it's optimal since
                    every element of the array must be examined at least once to certify the condition holds.<br/><br/>
<b>Answer: \\( \\Theta(n) \\)</b> <br/><br/> <a href="https://gateoverflow.in/523118/gate-cse-2026-set-2-question-28#a_list" rel="noopener" target="_blank">Click here for detail solution</a>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `Consider the following functions, where \\( n \\) is a positive integer.
                <br/><br/>\\( n^{1 / 3}, \\log (n), \\log (n!), 2^{\\log
                                        (n)} \\)<br/><br/>
                Which one of the following options lists the functions in increasing order of asymptotic growth
                rate?<br/> Note: Assume the base of log to be \\( 2 \\).`,
            image: "",
            options: [
                `\\( \\log (n), n^{1 / 3},
                                                        2^{\\log (n)}, \\log (n!) \\)`,
                `\\( n^{1 / 3}, \\log (n), \\log
                                                        (n!), 2^{\\log (n)} \\)`,
                `\\( \\log (n), n^{1 / 3}, \\log
                                                        (n!), 2^{\\log (n)} \\)`,
                `\\( 2^{\\log (n)}, n^{1 / 3},
                                                        \\log (n), \\log (n!) \\)`
            ],
            answer: "A",
            solution: `<img src="images/gate-cse/asymptotic-notation/q2.png" style="max-width: 100%;"><br>Simplify each function's asymptotic growth (using \\( \\log \\)
                    base \\( 2 \\)):<br/><br/>
                    - \\( \\log(n) \\): grows the <b>slowest</b> of
                    all — sub-polynomial.<br/>
                    - \\( n^{1/3} \\):
                    a polynomial with a small (fractional) exponent, grows faster than any power of \\( \\log n \\) but slower than
                    \\( n \\) itself.<br/>
                    - \\( 2^{\\log(n)}=n \\) (since
                    exponentiating base \\( 2 \\) by \\( \\log_2 n \\) simply recovers
                    \\( n \\)) — so this grows
                    exactly like \\( n \\), faster than
                    \\( n^{1/3} \\).<br/>
                    - \\( \\log(n!) \\): by Stirling's
                    approximation, \\( \\log(n!)=\\Theta(n\\log n) \\), which grows <b>faster</b>
                    than plain \\( n \\) (and hence faster
                    than \\( 2^{\\log n}=n \\)).<br/><br/>
                    So the increasing order is: \\( \\log(n) \\;&lt;\\; n^{1/3} \\;&lt;\\;
                                            2^{\\log(n)} \\;&lt;\\; \\log(n!) \\).<br/><br/>
<b>Answer: log(n), n^(1/3), 2^log(n), log(n!)</b> <br/><br/> <a href="https://gateoverflow.in/523132/gate-cse-2026-set-2-question-14#a_list" rel="noopener" target="_blank">Click here for detail solution</a>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `Given an integer array of size \\( N \\), we want to
                check if the array is sorted (in either
                ascending or descending order). An algorithm solves this problem by making a
                single pass through the array and comparing each element of the array only with its
                adjacent elements. The worst-case time complexity of this algorithm is`,
            image: "",
            options: [
                `both \\( \\mathrm{O}(N) \\) and \\( \\Omega(N) \\)`,
                `\\( \\mathrm{O}(N) \\) but not
                                \\( \\Omega(N) \\)`,
                `\\( \\Omega(N) \\) but not
                                \\( \\mathrm{O}(N) \\)`,
                `neither \\( \\mathrm{O}(N) \\) nor \\( \\Omega(N) \\)`
            ],
            answer: "A",
            solution: `<img src="images/gate-cse/asymptotic-notation/q3.png" style="max-width: 100%;"><br><a href="https://gateoverflow.in/422835/gate-cse-2024-set-1-question-7#a_list" rel="noopener" targer="_blank" target="_blank">Click here for detail solution by gateoverflow</a>`
        },
        {
            marks: 1,
            neg: 0,
            type: "MSQ",
            text: `Consider functions Function 1 and Function 2 expressed in
                pseudocode as
                follows:<br/><img class="entered litespeed-loaded" data-lazyloaded="1" data-ll-status="loaded" data-src="/wp-content/uploads/GATE/CS/20231/q44.jpg" decoding="async" src="/wp-content/uploads/GATE/CS/20231/q44.jpg"/><noscript><img decoding="async" src="/wp-content/uploads/GATE/CS/20231/q44.jpg"/></noscript><br/>Let \\( f_1(n) \\) and \\( f_2(n) \\) denote the number of times the
                statement \\( "x = x + 1" \\) is
                executed in Function 1 and Function 2, respectively.<br/>
                Which of the following statements is/are TRUE?`,
            image: "",
            options: [
                `\\( f_1(n)\\in \\Theta (f_2(n)) \\)`,
                `\\( f_1(n)\\in o (f_2(n)) \\)`,
                `\\( f_1(n)\\in \\omega (f_2(n)) \\)`,
                `\\( f_1(n)\\in O  (n) \\)`
            ],
            answer: "A, D",
            solution: `<img src="images/gate-cse/asymptotic-notation/q4.png" style="max-width: 100%;"><br><a href="https://gateoverflow.in/399267/gate-cse-2023-question-44#a_list_title" rel="noopener" target="_blank">Click here for detail solution by gateoverflow</a>`
        },
        {
            marks: 1,
            neg: 0,
            type: "MSQ",
            text: `Let \\( f \\) and \\( g \\) be functions of
                natural numbers given by \\( f(n)=n \\) and \\( g(n)=n^2 \\).<br/>
                Which of the following statements is/are TRUE?`,
            image: "",
            options: [
                `\\( f \\in O(g) \\)`,
                `\\( f \\in \\Omega (g) \\)`,
                `\\( f \\in o(g) \\)`,
                `\\( f \\in \\Theta (g) \\)`
            ],
            answer: "A, C",
            solution: `<img src="images/gate-cse/asymptotic-notation/q5.png" style="max-width: 100%;"><br><a href="https://gateoverflow.in/399292/gate-cse-2023-question-19#a_list_title" rel="noopener" target="_blank">Click here for detail solution by gateoverflow</a>`
        },
    ]
});
