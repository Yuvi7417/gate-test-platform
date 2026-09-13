import re

old_qs = r'''        {
            marks: 2,
            neg: 0.66,
            type: "MCQ",
            text: `<span style="display: inline;">Consider an array <span>\\( A \\)</span> of integers of size <span>\\( n \\)</span>. The indices of <span>\\( A \\)</span> run from <span>\\( 1 \\)</span> to <span>\\( n \\)</span>. An algorithm is to be designed to check whether <span>\\( A \\)</span> satisfies the condition given below. <br/><br/><span>\\( \\forall i, j \\in\\{1, \\ldots, n-1\\} \\)</span> such that <span>\\( i&gt;j,(A[i+1]-A[i])&gt;(A[j+1]-A[j]) \\)</span> <br/><br/>Which one of the following gives the worst case time complexity of the fastest algorithm that can be designed for the problem?</span>`,
            image: "",
            options: [
                `<span style="display: inline;"><span>\\( \\Theta(n) \\)</span></span>`,
                `<span style="display: inline;"><span>\\( \\Theta(\\log (n)) \\)</span></span>`,
                `<span style="display: inline;"><span>\\( \\Theta(n \\log (n)) \\)</span></span>`,
                `<span style="display: inline;"><span>\\( \\Theta\\left(n^{2}\\right) \\)</span></span>`
            ],
            answer: "A",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/523118/gate-cse-2026-set-2-question-28#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><br><span style="font-size:14px;">Source: GATE CSE 2026
                        SET-2 | Algorithms</span></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Consider the following functions, where <span>\\( n \\)</span> is a positive integer. <br/><br/><span>\\( n^{1 / 3}, \\log (n), \\log (n!), 2^{\\log (n)} \\)</span><br/><br/> Which one of the following options lists the functions in increasing order of asymptotic growth rate?<br/> Note: Assume the base of log to be <span>\\( 2 \\)</span>.</span>`,
            image: "",
            options: [
                `<span style="display: inline;"><span>\\( \\log (n), n^{1 / 3}, 2^{\\log (n)}, \\log (n!) \\)</span></span>`,
                `<span style="display: inline;"><span>\\( n^{1 / 3}, \\log (n), \\log (n!), 2^{\\log (n)} \\)</span></span>`,
                `<span style="display: inline;"><span>\\( \\log (n), n^{1 / 3}, \\log (n!), 2^{\\log (n)} \\)</span></span>`,
                `<span style="display: inline;"><span>\\( 2^{\\log (n)}, n^{1 / 3}, \\log (n), \\log (n!) \\)</span></span>`
            ],
            answer: "A",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/523132/gate-cse-2026-set-2-question-14#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><br><span style="font-size:14px;">Source: GATE CSE 2026
                        SET-2 | Algorithms</span></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Given an integer array of size <span>\\( N \\)</span>, we want to check if the array is sorted (in either ascending or descending order). An algorithm solves this problem by making a single pass through the array and comparing each element of the array only with its adjacent elements. The worst-case time complexity of this algorithm is</span>`,
            image: "",
            options: [
                `<span style="display: inline;">both <span>\\( \\mathrm{O}(N) \\)</span> and <span>\\( \\Omega(N) \\)</span></span>`,
                `<span style="display: inline;"><span>\\( \\mathrm{O}(N) \\)</span> but not <span>\\( \\Omega(N) \\)</span></span>`,
                `<span style="display: inline;"><span>\\( \\Omega(N) \\)</span> but not <span>\\( \\mathrm{O}(N) \\)</span></span>`,
                `<span style="display: inline;">neither <span>\\( \\mathrm{O}(N) \\)</span> nor <span>\\( \\Omega(N) \\)</span></span>`
            ],
            answer: "A",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/422835/gate-cse-2024-set-1-question-7#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><br><span style="font-size:14px;">Source: GATE CSE 2024
                        SET-1 | Algorithm</span></div>`
        },
        {
            marks: 2,
            neg: 0,
            type: "MSQ",
            text: `<span style="display: inline;">Consider functions Function 1 and Function 2 expressed in pseudocode as follows:<br/><img src="images/twt-algo/q44.jpg"/><br/>Let <span>\\( f_1(n) \\)</span> and <span>\\( f_2(n) \\)</span> denote the number of times the statement <span>\\( "x = x + 1" \\)</span> is executed in Function 1 and Function 2, respectively.<br/> Which of the following statements is/are TRUE?</span>`,
            image: "",
            options: [
                `<span style="display: inline;"><span>\\( f_1(n)\\in \\Theta (f_2(n)) \\)</span></span>`,
                `<span style="display: inline;"><span>\\( f_1(n)\\in o (f_2(n)) \\)</span></span>`,
                `<span style="display: inline;"><span>\\( f_1(n)\\in \\omega (f_2(n)) \\)</span></span>`,
                `<span style="display: inline;"><span>\\( f_1(n)\\in O (n) \\)</span></span>`
            ],
            answer: ["A", "D"],
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/399267/gate-cse-2023-question-44#a_list_title" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><br><span style="font-size:14px;">Source: GATE CSE
                        2023 | Algorithm</span></div>`
        },
        {
            marks: 1,
            neg: 0,
            type: "MSQ",
            text: `<span style="display: inline;">Let <span>\\( f \\)</span> and <span>\\( g \\)</span> be functions of natural numbers given by <span>\\( f(n)=n \\)</span> and <span>\\( g(n)=n^2 \\)</span>.<br/> Which of the following statements is/are TRUE?</span>`,
            image: "",
            options: [
                `<span style="display: inline;"><span>\\( f \\in O(g) \\)</span></span>`,
                `<span style="display: inline;"><span>\\( f \\in \\Omega (g) \\)</span></span>`,
                `<span style="display: inline;"><span>\\( f \\in o(g) \\)</span></span>`,
                `<span style="display: inline;"><span>\\( f \\in \\Theta (g) \\)</span></span>`
            ],
            answer: ["A", "C"],
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/399292/gate-cse-2023-question-19#a_list_title" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><br><span style="font-size:14px;">Source: GATE CSE
                        2023 | Algorithm</span></div>`
        },
'''

with open(r'h:\yuvraj dutt\js\demo.registry.src.js', 'r', encoding='utf-8') as f:
    js_content = f.read()

target = r'(name:\s*"TWT-Algorithm\(Asymptotic Notation-I\)",\s*date:\s*"sep 08, 2026",\s*questions:\s*\[\s*)(.*?)(\s*\]\s*\n\}\);)'

def replacer(match):
    return match.group(1) + old_qs + match.group(2) + match.group(3)

new_js = re.sub(target, replacer, js_content, flags=re.DOTALL)

with open(r'h:\yuvraj dutt\js\demo.registry.src.js', 'w', encoding='utf-8') as f:
    f.write(new_js)

print("Restored original 5 questions before the new 5 questions.")
