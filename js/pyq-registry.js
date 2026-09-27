// ==========================================
// GATE PYQ: Linear Algebra
// ==========================================

registerTest({
    series: "cse-gate-2027",
    name: "TWT-Engineering Mathematics(Linear Algebra-I)",
    isFree: true,
    date: "sep 27, 2026",
    topicsCovered: "Determinants, System of Linear Equations, LU Decomposition, Eigenvalues & Trace, Adjacency Matrix",
    questions: [
        {
            marks: 2,
            neg: 0,
            type: "NAT",
            text: `<span style="display: inline;">The determinant of a <span>\\( 4 \\times 4 \\)</span> matrix <span>\\( A \\)</span> is <span>\\( 3 \\)</span>. The value of the determinant of <span>\\( 2 A \\)</span> is ________. (answer in integer)</span>`,
            image: "",
            options: [
            ],
            answer: "48",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/523094/gate-cse-2026-set-2-question-52#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><b><a href="https://practicepaper.in/gate-cse/gate-cse-2026-set-2" style="color:#2f6d1a; text-decoration:none" target="_blank" text-decoration:="">GATE CSE 2026 SET-2</a></b> <b><a href="https://practicepaper.in/gate-cse/engineering-mathematics" style="color:#2f6d1a; text-decoration:none" target="_blank" text-decoration:="">Engineering Mathematics</a></b></div></div>`
        },
        {
            marks: 1,
            neg: 0,
            type: "NAT",
            text: `<span style="display: inline;">Consider the system of linear equations given below.<br/><br/> <span>\\( \\begin{array}{c} a x+y=b \\\\ 16 x+a y=24 \\end{array} \\)</span> <br/><br/>Suppose the values of <span>\\( a \\)</span> and <span>\\( b \\)</span> are chosen such that the system of linear equations produce multiple solutions. Then the product of <span>\\( a \\)</span> and <span>\\( b \\)</span> is ________. (answer in integer)</span>`,
            image: "",
            options: [
            ],
            answer: "24",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/523125/gate-cse-2026-set-2-question-21#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><b><a href="https://practicepaper.in/gate-cse/gate-cse-2026-set-2" style="color:#2f6d1a; text-decoration:none" target="_blank" text-decoration:="">GATE CSE 2026 SET-2</a></b> <b><a href="https://practicepaper.in/gate-cse/engineering-mathematics" style="color:#2f6d1a; text-decoration:none" target="_blank" text-decoration:="">Engineering Mathematics</a></b></div></div>`
        },
        {
            marks: 1,
            neg: 0,
            type: "MSQ",
            text: `<span style="display: inline;">Let <span>\\( n&gt;1 \\)</span>. Consider an <span>\\( n \\times n \\)</span> matrix <span>\\( M \\)</span> with its elements from <span>\\( \\mathbb{R} \\)</span>. Let the vector <span>\\( (0,1,0,0, \\ldots, 0) \\in \\mathbb{R}^{n} \\)</span> be in the null space of <span>\\( M \\)</span>. <br/>Which of the following options is/are always correct?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">Determinant of <span>\\( M \\)</span> is <span>\\( 1 \\)</span></span>`,
                `<span style="display: inline;">Determinant of <span>\\( M \\)</span> is <span>\\( 0 \\)</span></span>`,
                `<span style="display: inline;">Rank of <span>\\( M \\)</span> is <span>\\( 1 \\)</span></span>`,
                `<span style="display: inline;">There are at least two non-zero vectors in the null space of <span>\\( M \\)</span></span>`
            ],
            answer: ["B", "D"],
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/523070/gate-cse-2026-set-1-question-10#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><b><a href="https://practicepaper.in/gate-cse/gate-cse-2026-set-1" style="color:#2f6d1a; text-decoration:none" target="_blank" text-decoration:="">GATE CSE 2026 SET-1</a></b> <b><a href="https://practicepaper.in/gate-cse/engineering-mathematics" style="color:#2f6d1a; text-decoration:none" target="_blank" text-decoration:="">Engineering Mathematics</a></b></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">For <span>\\( n&gt;1 \\)</span>, the maximum multiplicity of any eigenvalue of an <span>\\( n \\times n \\)</span> matrix with elements from <span>\\( \\mathbb{R} \\)</span> is</span>`,
            image: "",
            options: [
                `<span style="display: inline;"><span>\\( n \\)</span></span>`,
                `<span style="display: inline;"><span>\\( n-1 \\)</span></span>`,
                `<span style="display: inline;"><span>\\( 1 \\)</span></span>`,
                `<span style="display: inline;"><span>\\( n+1 \\)</span></span>`
            ],
            answer: "A",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/523077/gate-cse-2026-set-1-question-3#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><b><a href="https://practicepaper.in/gate-cse/gate-cse-2026-set-1" style="color:#2f6d1a; text-decoration:none" target="_blank" text-decoration:="">GATE CSE 2026 SET-1</a></b> <b><a href="https://practicepaper.in/gate-cse/engineering-mathematics" style="color:#2f6d1a; text-decoration:none" target="_blank" text-decoration:="">Engineering Mathematics</a></b></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Consider <span>\\( 4 \\times 4 \\)</span> matrices with their elements from <span>\\( \\{\\mathbf{0}, \\mathbf{1}\\} \\)</span>. The number of such matrices with even number of <span>\\( \\mathbf{1} \\)</span> s in every row and every column is</span>`,
            image: "",
            options: [
                `<span style="display: inline;">512</span>`,
                `<span style="display: inline;">1025</span>`,
                `<span style="display: inline;">1023</span>`,
                `<span style="display: inline;">255</span>`
            ],
            answer: "A",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/523078/gate-cse-2026-set-1-question-2#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><b><a href="https://practicepaper.in/gate-cse/gate-cse-2026-set-1" style="color:#2f6d1a; text-decoration:none" target="_blank" text-decoration:="">GATE CSE 2026 SET-1</a></b> <b><a href="https://practicepaper.in/gate-cse/engineering-mathematics" style="color:#2f6d1a; text-decoration:none" target="_blank" text-decoration:="">Engineering Mathematics</a></b></div></div>`
        },
        {
            marks: 2,
            neg: 0,
            type: "MSQ",
            text: `<span style="display: inline;">Consider a system of linear equations <span>\\( P X = Q \\)</span> where <span>\\( P \\in \\mathbb{R}^{3 \\times 3} \\)</span> and <span>\\( Q \\in \\mathbb{R}^{3 \\times 1} \\)</span>. Suppose <span>\\( P \\)</span> has an <span>\\( LU \\)</span> decomposition, <span>\\( P = LU \\)</span>, where<br/><br/> <span>\\( L = \\begin{bmatrix} 1 &amp; 0 &amp; 0 \\\\ l_{21} &amp; 1 &amp; 0 \\\\ l_{31} &amp; l_{32} &amp; 1 \\end{bmatrix} \\quad \\text{and} \\quad U = \\begin{bmatrix} u_{11} &amp; u_{12} &amp; u_{13} \\\\ 0 &amp; u_{22} &amp; u_{23} \\\\ 0 &amp; 0 &amp; u_{33} \\end{bmatrix} \\)</span><br/><br/> Which of the following statement(s) is/are TRUE?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">The system <span>\\( P X = Q \\)</span> can be solved by first solving <span>\\( L Y = Q \\)</span> and then <span>\\( U X = Y \\)</span>.</span>`,
                `<span style="display: inline;">If <span>\\( P \\)</span> is invertible, then both <span>\\( L \\)</span> and <span>\\( U \\)</span> are invertible.</span>`,
                `<span style="display: inline;">If <span>\\( P \\)</span> is singular, then at least one of the diagonal elements of <span>\\( U \\)</span> is zero.</span>`,
                `<span style="display: inline;">If <span>\\( P \\)</span> is symmetric, then both <span>\\( L \\)</span> and <span>\\( U \\)</span> are symmetric.</span>`
            ],
            answer: ["A", "B", "C"],
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/460801/gate-cse-2025-set-2-question-34#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><b><a href="https://practicepaper.in/gate-cse/gate-cse-2025-set-2" style="color:#2f6d1a; text-decoration:none" target="_blank" text-decoration:="">GATE CSE 2025 SET-2</a></b> <b><a href="https://practicepaper.in/gate-cse/engineering-mathematics" style="color:#2f6d1a; text-decoration:none" target="_blank" text-decoration:="">Engineering Mathematics</a></b></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Let <span>\\( L \\)</span>, <span>\\( M \\)</span>, and <span>\\( N \\)</span> be non-singular matrices of order 3 satisfying the equations <br/><br/> <span>\\( L^2 = L^{-1}, \\quad M = L^8, \\quad N = L^2. \\)</span><br/><br/> Which ONE of the following is the value of the determinant of <span>\\( (M - N) \\)</span>?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">0</span>`,
                `<span style="display: inline;">1</span>`,
                `<span style="display: inline;">2</span>`,
                `<span style="display: inline;">3</span>`
            ],
            answer: "A",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/460831/gate-cse-2025-set-2-question-4#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><b><a href="https://practicepaper.in/gate-cse/gate-cse-2025-set-2" style="color:#2f6d1a; text-decoration:none" target="_blank" text-decoration:="">GATE CSE 2025 SET-2</a></b> <b><a href="https://practicepaper.in/gate-cse/engineering-mathematics" style="color:#2f6d1a; text-decoration:none" target="_blank" text-decoration:="">Engineering Mathematics</a></b></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;"><span>\\( A = \\begin{pmatrix} 1 &amp; 2 \\\\ 2 &amp; -1 \\end{pmatrix}, \\)</span> then which ONE of the following is <span>\\( A^8 \\)</span>?</span>`,
            image: "",
            options: [
                `<span style="display: inline;"><span>\\( \\begin{pmatrix} 25 &amp; 0 \\\\ 0 &amp; 25 \\end{pmatrix} \\)</span></span>`,
                `<span style="display: inline;"><span>\\( \\begin{pmatrix} 125 &amp; 0 \\\\ 0 &amp; 125 \\end{pmatrix} \\)</span></span>`,
                `<span style="display: inline;"><span>\\( \\begin{pmatrix} 625 &amp; 0 \\\\ 0 &amp; 625 \\end{pmatrix} \\)</span></span>`,
                `<span style="display: inline;"><span>\\( \\begin{pmatrix} 3125 &amp; 0 \\\\ 0 &amp; 3125 \\end{pmatrix} \\)</span></span>`
            ],
            answer: "C",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/460834/gate-cse-2025-set-2-question-1#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><b><a href="https://practicepaper.in/gate-cse/gate-cse-2025-set-2" style="color:#2f6d1a; text-decoration:none" target="_blank" text-decoration:="">GATE CSE 2025 SET-2</a></b> <b><a href="https://practicepaper.in/gate-cse/engineering-mathematics" style="color:#2f6d1a; text-decoration:none" target="_blank" text-decoration:="">Engineering Mathematics</a></b></div></div>`
        },
        {
            marks: 2,
            neg: 0.66,
            type: "MCQ",
            text: `<span style="display: inline;">Let <span>\\( A \\)</span> be a 2x2 matrix as given: <br/> <span>\\( A = \\left[\\begin{array}{cc} 1 &amp; 1 \\\\ 1 &amp; -1 \\end{array}\\right] \\)</span> <br/> What are the eigenvalues of the matrix <span>\\( A^{13} \\)</span>?</span>`,
            image: "",
            options: [
                `<span style="display: inline;"><span>\\( 1,-1 \\)</span></span>`,
                `<span style="display: inline;"><span>\\( 2\\sqrt{2}, -2\\sqrt{2} \\)</span></span>`,
                `<span style="display: inline;"><span>\\( 4\\sqrt{2}, -4\\sqrt{2} \\)</span></span>`,
                `<span style="display: inline;"><span>\\( 64\\sqrt{2}, -64\\sqrt{2} \\)</span></span>`
            ],
            answer: "D",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/460049/gate-cse-2025-set-1-question-31#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><b><a href="https://practicepaper.in/gate-cse/gate-cse-2025-set-1" style="color:#2f6d1a; text-decoration:none" target="_blank" text-decoration:="">GATE CSE 2025 SET-1</a></b> <b><a href="https://practicepaper.in/gate-cse/engineering-mathematics" style="color:#2f6d1a; text-decoration:none" target="_blank" text-decoration:="">Engineering Mathematics</a></b></div></div>`
        },
        {
            marks: 2,
            neg: 0,
            type: "MSQ",
            text: `<span style="display: inline;">Let <span>\\( A \\)</span> be an <span>\\( n \\times n \\)</span> matrix over the set of all real numbers <span>\\( R \\)</span>. Let <span>\\( B \\)</span> be a matrix obtained from <span>\\( A \\)</span> by swapping two rows. Which of the following statements is/are TRUE?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">The determinant of <span>\\( B \\)</span> is the negative of the determinant of <span>\\( A \\)</span></span>`,
                `<span style="display: inline;">If <span>\\( A \\)</span> is invertible, then <span>\\( B \\)</span> is also invertible</span>`,
                `<span style="display: inline;">If <span>\\( A \\)</span> is symmetric, then <span>\\( B \\)</span> is also symmetric</span>`,
                `<span style="display: inline;">If the trace of <span>\\( A \\)</span> is zero, then the trace of <span>\\( B \\)</span> is also zero</span>`
            ],
            answer: ["A", "B"],
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/422860/gate-cse-2024-set-2-question-37#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><b><a href="https://practicepaper.in/gate-cse/gate-cse-2024-set-2" style="color:#2f6d1a; text-decoration:none" target="_blank" text-decoration:="">GATE CSE 2024 SET-2</a></b> <b><a href="https://practicepaper.in/gate-cse/engineering-mathematics" style="color:#2f6d1a; text-decoration:none" target="_blank" text-decoration:="">Engineering Mathematics</a></b></div></div>`
        },
        {
            marks: 2,
            neg: 0.66,
            type: "MCQ",
            text: `<span style="display: inline;">Let <span>\\( x \\)</span> and <span>\\( y \\)</span> be random variables, not necessarily independent, that take real values in the interval <span>\\( [0,1] \\)</span>. Let <span>\\( z=x y \\)</span> and let the mean values of <span>\\( x, y, z \\)</span> be <span>\\( \\bar{x}, \\bar{y}, \\bar{z} \\)</span>, respectively. Which one of the following statements is TRUE?</span>`,
            image: "",
            options: [
                `<span style="display: inline;"><span>\\( \\bar{z}=\\bar{x} \\bar{y} \\)</span></span>`,
                `<span style="display: inline;"><span>\\( \\bar{z} \\leq \\bar{x} \\bar{y} \\)</span></span>`,
                `<span style="display: inline;"><span>\\( \\bar{z} \\geq \\bar{x} \\bar{y} \\)</span></span>`,
                `<span style="display: inline;"><span>\\( \\bar{z} \\leq \\bar{x} \\)</span></span>`
            ],
            answer: "D",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/422863/gate-cse-2024-set-2-question-34#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><b><a ;="" href="https://practicepaper.in/gate-cse/gate-cse-2024-set-2" none'="" style="color:#2f6d1a; text-decoration:none" target="_blank" text-decoration:="">GATE CSE 2024 SET-2</a></b> <b><a href="https://practicepaper.in/gate-cse/engineering-mathematics" style="color:#2f6d1a; text-decoration:none" target="_blank" text-decoration:="">Engineering Mathematics</a></b></div></div>`
        },
        {
            marks: 2,
            neg: 0.66,
            type: "MCQ",
            text: `<span style="display: inline;">Let <span>\\( A \\)</span> be any <span>\\( n \\times m \\)</span> matrix, where <span>\\( m &gt; n \\)</span>. Which of the following statements is/are TRUE about the system of linear equations <span>\\( A x=0 \\)</span> ?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">There exist at least <span>\\( m-n \\)</span> linearly independent solutions to this system</span>`,
                `<span style="display: inline;">There exist <span>\\( m-n \\)</span> linearly independent vectors such that every solution is a linear combination of these vectors</span>`,
                `<span style="display: inline;">There exists a non-zero solution in which at least <span>\\( m-n \\)</span> variables are 0</span>`,
                `<span style="display: inline;">There exists a solution in which at least <span>\\( n \\)</span> variables are non-zero</span>`
            ],
            answer: "A",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/422803/gate-cse-2024-set-1-question-39#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><b><a href="https://practicepaper.in/gate-cse/gate-cse-2024-set-1" style="color:#2f6d1a; text-decoration:none" target="_blank" text-decoration:="">GATE CSE 2024 SET-1</a></b> <b><a href="https://practicepaper.in/gate-cse/engineering-mathematics" style="color:#2f6d1a; text-decoration:none" target="_blank" text-decoration:="">Engineering Mathematics</a></b></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">The product of all eigenvalues of the matrix <span>\\( \\begin{bmatrix} 1 &amp; 2 &amp; 3\\\\ 4 &amp; 5 &amp;6 \\\\ 7 &amp;8 &amp; 9 \\end{bmatrix} \\)</span> is</span>`,
            image: "",
            options: [
                `<span style="display: inline;"><span>\\( -1 \\)</span></span>`,
                `<span style="display: inline;"><span>\\( 0 \\)</span></span>`,
                `<span style="display: inline;"><span>\\( 1 \\)</span></span>`,
                `<span style="display: inline;"><span>\\( 2 \\)</span></span>`
            ],
            answer: "B",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/422840/gate-cse-2024-set-1-question-2#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><b><a href="https://practicepaper.in/gate-cse/gate-cse-2024-set-1" style="color:#2f6d1a; text-decoration:none" target="_blank" text-decoration:="">GATE CSE 2024 SET-1</a></b> <b><a href="https://practicepaper.in/gate-cse/engineering-mathematics" style="color:#2f6d1a; text-decoration:none" target="_blank" text-decoration:="">Engineering Mathematics</a></b></div></div>`
        },
        {
            marks: 1,
            neg: 0,
            type: "NAT",
            text: `<span style="display: inline;">Let A be the adjacency matrix of the graph with vertices {1, 2, 3, 4, 5}.<br/><img src="images/twt-algo/q20.jpg"/><br/>Let <span>\\( \\lambda _1,\\lambda _2,\\lambda _3,\\lambda _4,\\; and \\; \\lambda _5 \\)</span> be the five eigenvalues of A. Note that these eigenvalues need not be distinct.<br/>The value of <span>\\( \\lambda _1+\\lambda _2+\\lambda _3+ \\lambda _4+ \\lambda _5 = \\)</span> _____</span>`,
            image: "",
            options: [
            ],
            answer: "2",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/399291/gate-cse-2023-question-20#a_list_title" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><b><a href="https://practicepaper.in/gate-cse/gate-cse-2023" style="color:#2f6d1a; text-decoration:none" target="_blank" text-decoration:="">GATE CSE 2023</a></b> <b><a href="https://practicepaper.in/gate-cse/engineering-mathematics" style="color:#2f6d1a; text-decoration:none" target="_blank" text-decoration:="">Engineering Mathematics</a></b></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Let <span>\\( A=\\begin{bmatrix} 1 &amp; 2 &amp; 3 &amp;4 \\\\ 4&amp; 1&amp; 2 &amp;3 \\\\ 3&amp; 4 &amp; 1 &amp;2 \\\\ 2 &amp;3 &amp;4 &amp;1 \\end{bmatrix} \\)</span> and <span>\\( B=\\begin{bmatrix} 3&amp; 4 &amp; 1 &amp;2 \\\\ 4&amp; 1&amp; 2 &amp;3 \\\\ 1 &amp; 2 &amp; 3 &amp;4 \\\\ 2 &amp;3 &amp;4 &amp;1 \\end{bmatrix} \\)</span><br/>Let det(A) and det(B) denote the determinants of the matrices A and B, respectively.<br/> Which one of the options given below is TRUE?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">det(A) = det(B)</span>`,
                `<span style="display: inline;">det(B) = - det(A)</span>`,
                `<span style="display: inline;">det(A)=0</span>`,
                `<span style="display: inline;">det(AB) = det(A) + det(B)</span>`
            ],
            answer: "B",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/399304/gate-cse-2023-question-8#a_list_title" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><b><a href="https://practicepaper.in/gate-cse/gate-cse-2023" style="color:#2f6d1a; text-decoration:none" target="_blank" text-decoration:="">GATE CSE 2023</a></b> <b><a href="https://practicepaper.in/gate-cse/engineering-mathematics" style="color:#2f6d1a; text-decoration:none" target="_blank" text-decoration:="">Engineering Mathematics</a></b></div></div>`
        },
    ]
});

registerTest({
    series: "cse-gate-2027",
    name: "TWT-Engineering Mathematics(Linear Algebra-II)",
    isFree: true,
    date: "sep 27, 2026",
    topicsCovered: "Eigenvalues & Eigenvectors, LU Decomposition, Matrix Trace, Rank & Nullity, Skew-Symmetric Matrices, Characteristic Polynomial",
    questions: [
        {
            marks: 2,
            neg: 0,
            type: "MSQ",
            text: `<span style="display: inline;">Which of the following is/are the eigenvector(s) for the matrix given below?<br/><span>\\( \\begin{pmatrix} -9 &amp;-6 &amp;-2 &amp;-4 \\\\ -8&amp; -6 &amp; -3 &amp; -1 \\\\ 20 &amp; 15 &amp; 8 &amp; 5 \\\\ 32&amp; 21&amp; 7&amp;12 \\end{pmatrix} \\)</span></span>`,
            image: "",
            options: [
                `<span style="display: inline;"><span>\\( \\begin{pmatrix} -1\\\\ 1\\\\ 0\\\\ 1 \\end{pmatrix} \\)</span></span>`,
                `<span style="display: inline;"><span>\\( \\begin{pmatrix} 1\\\\ 0\\\\ -1\\\\ 0 \\end{pmatrix} \\)</span></span>`,
                `<span style="display: inline;"><span>\\( \\begin{pmatrix} -1\\\\ 0\\\\ 2\\\\ 2 \\end{pmatrix} \\)</span></span>`,
                `<span style="display: inline;"><span>\\( \\begin{pmatrix} 0\\\\ 1\\\\ -3\\\\ 0 \\end{pmatrix} \\)</span></span>`
            ],
            answer: ["A", "C", "D"],
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/371893/Gate-cse-2022-question-43#a_list_title" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><b><a href="https://practicepaper.in/gate-cse/gate-cse-2022" style="color:#2f6d1a; text-decoration:none" target="_blank" text-decoration:="">GATE CSE 2022</a></b> <b><a href="https://practicepaper.in/gate-cse/engineering-mathematics" style="color:#2f6d1a; text-decoration:none" target="_blank" text-decoration:="">Engineering Mathematics</a></b></div></div>`
        },
        {
            marks: 2,
            neg: 0.66,
            type: "MCQ",
            text: `<span style="display: inline;">Consider solving the following system of simultaneous equations using LU decomposition.<br/><span>\\( \\begin{aligned} x_1+x_2-2x_3&amp;=4 \\\\ x_1+3x_2-x_3&amp;=7 \\\\ 2x_1+x_2-5x_3&amp;=7 \\end{aligned} \\)</span><br/>where L and U are denoted as<br/><span>\\( L= \\begin{bmatrix} L_{11} &amp; 0 &amp; 0 \\\\ L_{21}&amp; L_{22} &amp; 0 \\\\ L_{31} &amp; L_{32} &amp; L_{33} \\end{bmatrix}, U= \\begin{bmatrix} U_{11} &amp; U_{12} &amp; U_{13} \\\\ 0&amp; U_{22} &amp; U_{23} \\\\ 0 &amp; 0 &amp; U_{33} \\end{bmatrix} \\)</span><br/>Which one of the following is the correct combination of values for <span>\\( L_{32}, U_{33}, \\)</span> and <span>\\( x_1 \\)</span>?</span>`,
            image: "",
            options: [
                `<span style="display: inline;"><span>\\( L_{32}=2,U_{33}=-\\frac{1}{2},x_1=-1 \\)</span></span>`,
                `<span style="display: inline;"><span>\\( L_{32}=2,U_{33}=2,x_1=-1 \\)</span></span>`,
                `<span style="display: inline;"><span>\\( L_{32}=-\\frac{1}{2},U_{33}=2,x_1=0 \\)</span></span>`,
                `<span style="display: inline;"><span>\\( L_{32}=-\\frac{1}{2},U_{33}=-\\frac{1}{2},x_1=0 \\)</span></span>`
            ],
            answer: "D",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/371901/Gate-cse-2022-question-35#a_list_title" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><b><a href="https://practicepaper.in/gate-cse/gate-cse-2022" style="color:#2f6d1a; text-decoration:none" target="_blank" text-decoration:="">GATE CSE 2022</a></b> <b><a href="https://practicepaper.in/gate-cse/engineering-mathematics" style="color:#2f6d1a; text-decoration:none" target="_blank" text-decoration:="">Engineering Mathematics</a></b></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Consider the following two statements with respect to the matrices <span>\\( A_{m \\times n},B_{n \\times m},C_{n \\times n} \\text{ and }D_{n \\times n}, \\)</span><br/><br/> Statement 1: <span>\\( tr(AB) = tr(BA) \\)</span> <br/> Statement 2: <span>\\( tr(CD) = tr(DC) \\)</span> <br/><br/>where<span>\\( tr() \\)</span> represents the trace of a matrix. Which one of the following holds?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">Statement 1 is correct and Statement 2 is wrong.</span>`,
                `<span style="display: inline;">Statement 1 is wrong and Statement 2 is correct.</span>`,
                `<span style="display: inline;">Both Statement 1 and Statement 2 are correct.</span>`,
                `<span style="display: inline;">Both Statement 1 and Statement 2 are wrong.</span>`
            ],
            answer: "C",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/371926/Gate-cse-2022-question-10#a_list_title" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><b><a href="https://practicepaper.in/gate-cse/gate-cse-2022" style="color:#2f6d1a; text-decoration:none" target="_blank" text-decoration:="">GATE CSE 2022</a></b> <b><a href="https://practicepaper.in/gate-cse/engineering-mathematics" style="color:#2f6d1a; text-decoration:none" target="_blank" text-decoration:="">Engineering Mathematics</a></b></div></div>`
        },
        {
            marks: 1,
            neg: 0,
            type: "NAT",
            text: `<span style="display: inline;">Suppose that P is a 4x5 matrix such that every solution of the equation Px=0 is a scalar multiple of <span>\\( \\begin{bmatrix} 2 &amp; 5 &amp; 4 &amp;3 &amp; 1 \\end{bmatrix}^T \\)</span>. The rank of P is _______</span>`,
            image: "",
            options: [
            ],
            answer: "4",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/357516/gate-cse-2021-set-2-question-24#a_list_title" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><b><a href="https://practicepaper.in/gate-cse/gate-cse-2021-set-2" style="color:#2f6d1a; text-decoration:none" target="_blank" text-decoration:="">GATE CSE 2021 SET-2</a></b> <b><a href="https://practicepaper.in/gate-cse/engineering-mathematics" style="color:#2f6d1a; text-decoration:none" target="_blank" text-decoration:="">Engineering Mathematics</a></b></div></div>`
        },
        {
            marks: 2,
            neg: 0,
            type: "NAT",
            text: `<span style="display: inline;">Consider the following matrix.<br/><span>\\( \\begin{pmatrix} 0 &amp; 1 &amp; 1 &amp; 1\\\\ 1&amp; 0&amp; 1 &amp; 1\\\\ 1&amp; 1 &amp; 0 &amp; 1 \\\\1 &amp; 1 &amp; 1 &amp; 0 \\end{pmatrix} \\)</span><br/>The largest eigenvalue of the above matrix is __________.</span>`,
            image: "",
            options: [
            ],
            answer: "3",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/357399/gate-cse-2021-set-1-question-52#a_list_title" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><b><a href="https://practicepaper.in/gate-cse/gate-cse-2021-set-1" style="color:#2f6d1a; text-decoration:none" target="_blank" text-decoration:="">GATE CSE 2021 SET-1</a></b> <b><a href="https://practicepaper.in/gate-cse/engineering-mathematics" style="color:#2f6d1a; text-decoration:none" target="_blank" text-decoration:="">Engineering Mathematics</a></b></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">If <span>\\( x+2 y=30 \\)</span>,then <span>\\( \\left(\\frac{2 y}{5}+\\frac{x}{3}\\right)+\\left(\\frac{x}{5}+\\frac{2 y}{3}\\right) \\)</span> will be equal to</span>`,
            image: "",
            options: [
                `<span style="display: inline;">8</span>`,
                `<span style="display: inline;">16</span>`,
                `<span style="display: inline;">18</span>`,
                `<span style="display: inline;">20</span>`
            ],
            answer: "B",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/331481/isro2020-55" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><b><a href="https://practicepaper.in/gate-cse/isro-cse-2020" style="color:#2f6d1a; text-decoration:none" target="_blank">ISRO CSE 2020</a></b>&nbsp;&nbsp;&nbsp;<b><a href="https://practicepaper.in/gate-cse/engineering-mathematics" style="color:#2f6d1a; text-decoration:none" target="_blank">Engineering Mathematics</a></b></div></div>`
        },
        {
            marks: 2,
            neg: 0.66,
            type: "MCQ",
            text: `<span style="display: inline;">Let A and B be two nxn matrices over real numbers. Let rank(M) and det(M) denote the rank and determinant of a matrix M, respectively. Consider the following statements. <br/><br/> I. rank(AB)=rank (A)rank (B)<br/> II. det(AB)=det(A)det(B)<br/> III. rank(A+B) <span>\\( \\leq \\)</span> rank (A) + rank (B)<br/> IV. det(A+B) <span>\\( \\leq \\)</span> det(A) + det(B)<br/><br/> Which of the above statements are TRUE?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">I and II only</span>`,
                `<span style="display: inline;">I and IV only</span>`,
                `<span style="display: inline;">II and III only</span>`,
                `<span style="display: inline;">III and IV only</span>`
            ],
            answer: "C",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/333204/gate2020-cs-27#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><b><a href="https://practicepaper.in/gate-cse/gate-cse-2020" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2020</a></b>&nbsp;&nbsp;&nbsp;<b><a href="https://practicepaper.in/gate-cse/engineering-mathematics" style="color:#2f6d1a; text-decoration:none" target="_blank">Engineering Mathematics</a></b></div></div>`
        },
        {
            marks: 2,
            neg: 0,
            type: "NAT",
            text: `<span style="display: inline;">Consider the following matrix: <br/><span>\\( \\begin{bmatrix} 1 &amp; 2 &amp; 4 &amp; 8\\\\ 1&amp; 3 &amp; 9 &amp;27 \\\\ 1 &amp; 4 &amp; 16 &amp;64 \\\\ 1 &amp; 5 &amp; 25 &amp;125 \\end{bmatrix} \\)</span><br/> The absolute value of the product of Eigenvalues of R is _________ .</span>`,
            image: "",
            options: [
            ],
            answer: "12",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/302804/gate2019-cs-44#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><b><a href="https://practicepaper.in/gate-cse/gate-cse-2019" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2019</a></b>&nbsp;&nbsp;&nbsp;<b><a href="https://practicepaper.in/gate-cse/engineering-mathematics" style="color:#2f6d1a; text-decoration:none" target="_blank">Engineering Mathematics</a></b></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Let X be a square matrix. Consider the following two statements on X.<br/><br/> I. X is invertible<br/> II. Determinant of X is non-zero <br/><br/> Which one of the following is TRUE?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">I implies II; II does not imply I</span>`,
                `<span style="display: inline;">II implies I; I does not imply II</span>`,
                `<span style="display: inline;">I does not imply II; II does not imply I</span>`,
                `<span style="display: inline;">I and II are equivalent statements</span>`
            ],
            answer: "D",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/302839/gate2019-cs-9#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><b><a href="https://practicepaper.in/gate-cse/gate-cse-2019" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2019</a></b>&nbsp;&nbsp;&nbsp;<b><a href="https://practicepaper.in/gate-cse/engineering-mathematics" style="color:#2f6d1a; text-decoration:none" target="_blank">Engineering Mathematics</a></b></div></div>`
        },
        {
            marks: 2,
            neg: 0.66,
            type: "MCQ",
            text: `<span style="display: inline;">Consider a matrix P whose only eigenvectors are the multiples of <span>\\( \\begin{bmatrix} 1\\\\ 4 \\end{bmatrix} \\)</span>. <br/> Consider the following statements. <br/> (I) P does not have an inverse <br/> (II) P has a repeated eigenvalue <br/> (III) P cannot be diagonalized <br/> Which one of the following options is correct?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">Only I and III are necessarily true</span>`,
                `<span style="display: inline;">Only II is necessarily true</span>`,
                `<span style="display: inline;">Only I and II are necessarily true</span>`,
                `<span style="display: inline;">Only II and III are necessarily true</span>`
            ],
            answer: "D",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/204100/gate2018-26#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><b><a href="https://practicepaper.in/gate-cse/gate-cse-2018" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2018</a></b>&nbsp;&nbsp;&nbsp;<b><a href="https://practicepaper.in/gate-cse/engineering-mathematics" style="color:#2f6d1a; text-decoration:none" target="_blank">Engineering Mathematics</a></b></div></div>`
        },
        {
            marks: 1,
            neg: 0,
            type: "NAT",
            text: `<span style="display: inline;">Consider a matrix <span>\\( A=uv^{T}\\; where \\; u=\\begin{bmatrix} 1\\\\ 2 \\end{bmatrix},v=\\begin{bmatrix} 1\\\\ 1 \\end{bmatrix} \\)</span> Note that <span>\\( v^{T} \\)</span> denotes the transpose of v. The largest eigenvalue of A is _____.</span>`,
            image: "",
            options: [
            ],
            answer: "3",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/204091/gate2018-17#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><b><a href="https://practicepaper.in/gate-cse/gate-cse-2018" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2018</a></b>&nbsp;&nbsp;&nbsp;<b><a href="https://practicepaper.in/gate-cse/engineering-mathematics" style="color:#2f6d1a; text-decoration:none" target="_blank">Engineering Mathematics</a></b></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">If A is a skew symmetric matrix then <span>\\( A^{t} \\)</span> is</span>`,
            image: "",
            options: [
                `<span style="display: inline;">Diagonal matrix</span>`,
                `<span style="display: inline;">A</span>`,
                `<span style="display: inline;">0</span>`,
                `<span style="display: inline;">-A</span>`
            ],
            answer: "D",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/128505/isro2017-1" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><b><a href="https://practicepaper.in/gate-cse/isro-cse-2017" style="color:#2f6d1a; text-decoration:none" target="_blank">ISRO CSE 2017</a></b>&nbsp;&nbsp;&nbsp;<b><a href="https://practicepaper.in/gate-cse/engineering-mathematics" style="color:#2f6d1a; text-decoration:none" target="_blank">Engineering Mathematics</a></b></div></div>`
        },
        {
            marks: 2,
            neg: 0,
            type: "NAT",
            text: `<span style="display: inline;">If the characteristics polynomial of 3x3 matrix M over R ( the set of real numbers) is <span>\\( \\lambda ^{3}-4\\lambda ^{2}+a\\lambda +30,a\\in R \\)</span>, and one eigenvalue of M is 2, then the largest among the absolute values of the eigenvalues of M is ________.</span>`,
            image: "",
            options: [
            ],
            answer: "5",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/118618/gate2017-2-52#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><b><a href="https://practicepaper.in/gate-cse/gate-cse-2017-set-2" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2017 SET-2</a></b>&nbsp;&nbsp;&nbsp;<b><a href="https://practicepaper.in/gate-cse/engineering-mathematics" style="color:#2f6d1a; text-decoration:none" target="_blank">Engineering Mathematics</a></b></div></div>`
        },
        {
            marks: 1,
            neg: 0,
            type: "NAT",
            text: `<span style="display: inline;">Consider a quadratic equation <span>\\( x^{2} -13x +36 = 0 \\)</span> with coefficients in a base b. The solutions of this equation in the same base b are x = 5 and x = 6. Then b = ___________.</span>`,
            image: "",
            options: [
            ],
            answer: "8",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/118185/gate2017-2-24#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><b><a href="https://practicepaper.in/gate-cse/gate-cse-2017-set-2" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2017 SET-2</a></b>&nbsp;&nbsp;&nbsp;<b><a href="https://practicepaper.in/gate-cse/engineering-mathematics" style="color:#2f6d1a; text-decoration:none" target="_blank">Engineering Mathematics</a></b></div></div>`
        },
        {
            marks: 1,
            neg: 0,
            type: "NAT",
            text: `<span style="display: inline;">Let <span>\\( P=\\begin{bmatrix} 1 &amp; 1&amp;-1 \\\\ 2&amp;-3 &amp; 4\\\\ 3 &amp;-2 &amp; 3 \\end{bmatrix} \\)</span> and <span>\\( Q=\\begin{bmatrix} -1 &amp; -2&amp;-1 \\\\ 6 &amp; 12&amp; 6\\\\ 5&amp;10 &amp; 5 \\end{bmatrix} \\)</span> be two matrices. Then the rank of P +Q is _____________.</span>`,
            image: "",
            options: [
            ],
            answer: "2",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/118363/gate2017-2-22#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><b><a href="https://practicepaper.in/gate-cse/gate-cse-2017-set-2" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2017 SET-2</a></b>&nbsp;&nbsp;&nbsp;<b><a href="https://practicepaper.in/gate-cse/engineering-mathematics" style="color:#2f6d1a; text-decoration:none" target="_blank">Engineering Mathematics</a></b></div></div>`
        },
    ]
});

registerTest({
    series: "cse-gate-2027",
    name: "TWT-Engineering Mathematics(Linear Algebra-III)",
    isFree: true,
    date: "sep 27, 2026",
    topicsCovered: "Symmetric Matrices, System of Linear Equations, Matrix Inverses, Complex Eigenvalues, LU Decomposition, Vector Subspaces",
    questions: [
        {
            marks: 2,
            neg: 0.66,
            type: "MCQ",
            text: `<span style="display: inline;">Let A be nxn real valued square symmetric matrix of rank 2 with <span>\\( \\sum_{i=1}^{n}\\sum_{j=1}^{n}A^{2}_{ij}=50 \\)</span>. Consider the following statements. <br/> <br/>(I) One eigen value must be in [-5, 5] <br/> (II) The eigen value with the largest magnitude must be strictly greater than 5. <br/> <br/> Which of the above statements about eigen values of A is/are necessarily CORRECT?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">Both (I) and (II)</span>`,
                `<span style="display: inline;">(I) only</span>`,
                `<span style="display: inline;">(II) only</span>`,
                `<span style="display: inline;">Neither (I) nor (II)</span>`
            ],
            answer: "B",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/118312/gate2017-1-31#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><b><a href="https://practicepaper.in/gate-cse/gate-cse-2017-set-1" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2017 SET-1</a></b>&nbsp;&nbsp;&nbsp;<b><a href="https://practicepaper.in/gate-cse/engineering-mathematics" style="color:#2f6d1a; text-decoration:none" target="_blank">Engineering Mathematics</a></b></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Let <span>\\( c_{1}....c_{n} \\)</span> be scalars, not all zero, such that <span>\\( \\sum_{i=1}^{n}c_{i}a_{i}=0 \\)</span><br/> where <span>\\( a_{i} \\)</span> are column vectors in <span>\\( R^{n} \\)</span>. Consider the set of linear equations Ax = b <br/> where A=<span>\\( a_{1}....a_{n} \\)</span> and b=<span>\\( \\sum_{i=1}^{n}a_{i} \\)</span>. The set of equations has</span>`,
            image: "",
            options: [
                `<span style="display: inline;">a unique solution at <span>\\( x=J_{n} \\)</span> where <span>\\( J_{n} \\)</span> denotes a n-dimensional vector of all 1</span>`,
                `<span style="display: inline;">no solution</span>`,
                `<span style="display: inline;">infinitely many solutions</span>`,
                `<span style="display: inline;">finitely many solutions</span>`
            ],
            answer: "C",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/118282/gate2017-1-3#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><b><a href="https://practicepaper.in/gate-cse/gate-cse-2017-set-1" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2017 SET-1</a></b>&nbsp;&nbsp;&nbsp;<b><a href="https://practicepaper.in/gate-cse/engineering-mathematics" style="color:#2f6d1a; text-decoration:none" target="_blank">Engineering Mathematics</a></b></div></div>`
        },
        {
            marks: 1,
            neg: 0,
            type: "NAT",
            text: `<span style="display: inline;">Suppose that the eigen values of matrix A are 1, 2, 4. The determinant of <span>\\( (A^{-1})^{T} \\)</span> is _________.</span>`,
            image: "",
            options: [
            ],
            answer: "0.125",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/39549/gate2016-2-6#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><b><a href="https://practicepaper.in/gate-cse/gate-cse-2016-set-2" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2016 SET-2</a></b>&nbsp;&nbsp;&nbsp;<b><a href="https://practicepaper.in/gate-cse/engineering-mathematics" style="color:#2f6d1a; text-decoration:none" target="_blank">Engineering Mathematics</a></b></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Consider the systems,each consisting of m linear equations in n variables.<br/> I. If m <span>\\( \\lt \\)</span> n, then all such systems have a solution <br/> II. If m <span>\\( \\gt \\)</span> n, then none of these systems has a solution <br/> III. If m = n, then there exists a system which has a solution <br/> Which one of the following is CORRECT?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">I, II and III are true</span>`,
                `<span style="display: inline;">Only II and III are true</span>`,
                `<span style="display: inline;">Only III is true</span>`,
                `<span style="display: inline;">None of them is true</span>`
            ],
            answer: "C",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/39554/gate2016-2-4#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><b><a href="https://practicepaper.in/gate-cse/gate-cse-2016-set-2" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2016 SET-2</a></b>&nbsp;&nbsp;&nbsp;<b><a href="https://practicepaper.in/gate-cse/engineering-mathematics" style="color:#2f6d1a; text-decoration:none" target="_blank">Engineering Mathematics</a></b></div></div>`
        },
        {
            marks: 2,
            neg: 0,
            type: "NAT",
            text: `<span style="display: inline;">The coefficient of <span>\\( x^{12} \\)</span> in <span>\\( (x^{3}+x^{4}+x^{5}+x^{6}+. . .)^{3} \\)</span> is ______.</span>`,
            image: "",
            options: [
            ],
            answer: "10",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/39693/gate2016-1-26#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><b><a href="https://practicepaper.in/gate-cse/gate-cse-2016-set-1" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2016 SET-1</a></b>&nbsp;&nbsp;&nbsp;<b><a href="https://practicepaper.in/gate-cse/engineering-mathematics" style="color:#2f6d1a; text-decoration:none" target="_blank">Engineering Mathematics</a></b></div></div>`
        },
        {
            marks: 1,
            neg: 0,
            type: "NAT",
            text: `<span style="display: inline;">Two eigen values of a 3x3 real matrix P are (2+<span>\\( \\sqrt{-1} \\)</span>) and 3.The determinantof P is __________.</span>`,
            image: "",
            options: [
            ],
            answer: "15",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/39634/gate2016-1-5#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><b><a href="https://practicepaper.in/gate-cse/gate-cse-2016-set-1" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2016 SET-1</a></b>&nbsp;&nbsp;&nbsp;<b><a href="https://practicepaper.in/gate-cse/engineering-mathematics" style="color:#2f6d1a; text-decoration:none" target="_blank">Engineering Mathematics</a></b></div></div>`
        },
        {
            marks: 2,
            neg: 0.66,
            type: "MCQ",
            text: `<span style="display: inline;">If the following system has non-trivial solution,<br/> px+qy+rz=0 <br/> qx+ry+pz=0 <br/> rx+py+qz=0,<br/> then which one of the following options is TRUE?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">p-q+r=0 or p=q=-r</span>`,
                `<span style="display: inline;">p+q-r=0 or p=-q=r</span>`,
                `<span style="display: inline;">p+q+r=0 or p=q=r</span>`,
                `<span style="display: inline;">p-q+r=0 or p=-q=-r</span>`
            ],
            answer: "C",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/8490/gate2015-3-42#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><b><a href="https://practicepaper.in/gate-cse/gate-cse-2015-set-3" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2015 SET-3</a></b>&nbsp;&nbsp;&nbsp;<b><a href="https://practicepaper.in/gate-cse/engineering-mathematics" style="color:#2f6d1a; text-decoration:none" target="_blank">Engineering Mathematics</a></b></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">In the given matrix <span>\\( \\begin{bmatrix} 1 &amp; -1&amp;2 \\\\ 0&amp; 1 &amp; 0\\\\ 1&amp;2 &amp; 1 \\end{bmatrix} \\)</span>, one of the eigenvalues is 1. The eigenvectors corresponding to the eigenvalue 1 are</span>`,
            image: "",
            options: [
                `<span style="display: inline;">{<span>\\( \\alpha (4,2,1)|\\alpha \\neq 0,\\alpha \\in \\mathbb{R} \\)</span>}</span>`,
                `<span style="display: inline;">{<span>\\( \\alpha (-4,2,1)|\\alpha \\neq 0,\\alpha \\in \\mathbb{R} \\)</span>}</span>`,
                `<span style="display: inline;">{<span>\\( \\alpha (\\sqrt{2},0,1)|\\alpha \\neq 0,\\alpha \\in \\mathbb{R} \\)</span>}</span>`,
                `<span style="display: inline;">{<span>\\( \\alpha (-\\sqrt{2},0,1)|\\alpha \\neq 0,\\alpha \\in \\mathbb{R} \\)</span>}</span>`
            ],
            answer: "B",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/8411/gate2015-3-13#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><b><a href="https://practicepaper.in/gate-cse/gate-cse-2015-set-3" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2015 SET-3</a></b>&nbsp;&nbsp;&nbsp;<b><a href="https://practicepaper.in/gate-cse/engineering-mathematics" style="color:#2f6d1a; text-decoration:none" target="_blank">Engineering Mathematics</a></b></div></div>`
        },
        {
            marks: 2,
            neg: 0,
            type: "NAT",
            text: `<span style="display: inline;">Perform the following operations on the matrix <span>\\( \\begin{bmatrix} 3 &amp; 4&amp;45 \\\\ 7&amp; 9&amp; 105\\\\ 13&amp;2 &amp; 195 \\end{bmatrix} \\)</span>. <br/> (i) Add the third row to the second row <br/>(ii) Subtract the third column from the first column. <br/>The determinant of the resultant matrix is___________.</span>`,
            image: "",
            options: [
            ],
            answer: "0",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/8131/gate2015-2-47#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><b><a href="https://practicepaper.in/gate-cse/gate-cse-2015-set-2" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2015 SET-2</a></b>&nbsp;&nbsp;&nbsp;<b><a href="https://practicepaper.in/gate-cse/engineering-mathematics" style="color:#2f6d1a; text-decoration:none" target="_blank">Engineering Mathematics</a></b></div></div>`
        },
        {
            marks: 1,
            neg: 0,
            type: "NAT",
            text: `<span style="display: inline;">The larger of the two eigenvalues of the matrix <span>\\( \\begin{bmatrix} 4 &amp; 5\\\\ 2&amp;1 \\end{bmatrix} \\)</span> is _______.</span>`,
            image: "",
            options: [
            ],
            answer: "6",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/8051/gate2015-2-5#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><b><a href="https://practicepaper.in/gate-cse/gate-cse-2015-set-2" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2015 SET-2</a></b>&nbsp;&nbsp;&nbsp;<b><a href="https://practicepaper.in/gate-cse/engineering-mathematics" style="color:#2f6d1a; text-decoration:none" target="_blank">Engineering Mathematics</a></b></div></div>`
        },
        {
            marks: 2,
            neg: 0.66,
            type: "MCQ",
            text: `<span style="display: inline;">Consider the following 2x2 matrix A where two elements are unknown and are marked by a and b. The eigenvalues of this matrix are -1 and 7. What are the values of a and b? <br/><span>\\( A=\\begin{pmatrix} 1 &amp; 4\\\\ b&amp;a \\end{pmatrix} \\)</span>.</span>`,
            image: "",
            options: [
                `<span style="display: inline;">a = 6, b = 4</span>`,
                `<span style="display: inline;">a = 4, b = 6</span>`,
                `<span style="display: inline;">a = 3, b = 5</span>`,
                `<span style="display: inline;">a = 5, b =3</span>`
            ],
            answer: "D",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/8285/gate2015-1-49#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><b><a href="https://practicepaper.in/gate-cse/gate-cse-2015-set-1" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2015 SET-1</a></b>&nbsp;&nbsp;&nbsp;<b><a href="https://practicepaper.in/gate-cse/engineering-mathematics" style="color:#2f6d1a; text-decoration:none" target="_blank">Engineering Mathematics</a></b></div></div>`
        },
        {
            marks: 1,
            neg: 0,
            type: "NAT",
            text: `<span style="display: inline;">In the LU decomposition of the matrix <span>\\( \\begin{bmatrix} 2 &amp; 2\\\\ 4&amp;9 \\end{bmatrix} \\)</span>, if the diagonal elements of U are both 1, then the lower diagonal entry <span>\\( l_{22} \\)</span> of L is________.</span>`,
            image: "",
            options: [
            ],
            answer: "5",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/8241/gate2015-1-23#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><b><a href="https://practicepaper.in/gate-cse/gate-cse-2015-set-1" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2015 SET-1</a></b>&nbsp;&nbsp;&nbsp;<b><a href="https://practicepaper.in/gate-cse/engineering-mathematics" style="color:#2f6d1a; text-decoration:none" target="_blank">Engineering Mathematics</a></b></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">The rank of the matrix <span>\\( A=\\left(\\begin{array}{cccc} 1 &amp; 2 &amp; 1 &amp; -1 \\\\ 9 &amp; 5 &amp; 2 &amp; 2 \\\\ 7 &amp; 1 &amp; 0 &amp; 4 \\end{array}\\right) \\)</span> is ____ .</span>`,
            image: "",
            options: [
                `<span style="display: inline;">0</span>`,
                `<span style="display: inline;">1</span>`,
                `<span style="display: inline;">2</span>`,
                `<span style="display: inline;">3</span>`
            ],
            answer: "C",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/52799/isro2014-72" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><b><a href="https://practicepaper.in/gate-cse/isro-cse-2014" style="color:#2f6d1a; text-decoration:none" target="_blank">ISRO CSE 2014</a></b>&nbsp;&nbsp;&nbsp;<b><a href="https://practicepaper.in/gate-cse/engineering-mathematics" style="color:#2f6d1a; text-decoration:none" target="_blank">Engineering Mathematics</a></b></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Let A be a square matrix size n x n. Consider the following pseudocode. What is the expected output? <pre><code> C = 100; for i = 1 to n do for j = 1 to n do { Temp = A[ i ] [ j ] + C ; A [ i ] [ j ] = A [ j ] [ i ] ; A [ j ] [ i ] = Temp - C ; } for i = 1 to n do for j = 1 to n do output (A[ i ] [ j ]); </code></pre></span>`,
            image: "",
            options: [
                `<span style="display: inline;">The matrix A itself</span>`,
                `<span style="display: inline;">Transpose of the matrix A</span>`,
                `<span style="display: inline;">Adding 100 to the upper diagonal elements and subtracting 100 from lower diagonal elements of A</span>`,
                `<span style="display: inline;">None of these</span>`
            ],
            answer: "A",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/2044/gate2014-3-10#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><b><a href="https://practicepaper.in/gate-cse/gate-cse-2014-set-3" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2014 SET-3</a></b>&nbsp;&nbsp;&nbsp;<b><a href="https://practicepaper.in/gate-cse/engineering-mathematics" style="color:#2f6d1a; text-decoration:none" target="_blank">Engineering Mathematics</a></b></div></div>`
        },
        {
            marks: 1,
            neg: 0,
            type: "NAT",
            text: `<span style="display: inline;">If V1 and V2 are 4-dimensional subspaces of a 6-dimensional vector space V, then the smallest possible dimension of V1<span>\\( \\cap \\)</span>V2 is _______.</span>`,
            image: "",
            options: [
            ],
            answer: "2",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/2039/gate2014-3-5#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><b><a href="https://practicepaper.in/gate-cse/gate-cse-2014-set-3" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2014 SET-3</a></b>&nbsp;&nbsp;&nbsp;<b><a href="https://practicepaper.in/gate-cse/engineering-mathematics" style="color:#2f6d1a; text-decoration:none" target="_blank">Engineering Mathematics</a></b></div></div>`
        },
    ]
});

registerTest({
    series: "cse-gate-2027",
    name: "TWT-Engineering Mathematics(Linear Algebra-IV)",
    isFree: true,
    date: "sep 27, 2026",
    topicsCovered: "Real Eigenvalues & Trace, Block Matrix Eigenvalues, Matrix Powers, Linear Transformations, Determinant Invariance",
    questions: [
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Which one of the following statements is TRUE about every n x n matrix with only real eigenvalues?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">If the trace of the matrix is positive and the determinant of the matrix is negative, at least one of its eigenvalues is negative.</span>`,
                `<span style="display: inline;">If the trace of the matrix is positive, all its eigenvalues are positive.</span>`,
                `<span style="display: inline;">If the determinant of the matrix is positive, all its eigenvalues are positive.</span>`,
                `<span style="display: inline;">If the product of the trace and determinant of the matrix is positive, all its eigenvalues are positive.</span>`
            ],
            answer: "A",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/2038/gate2014-3-4#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><b><a href="https://practicepaper.in/gate-cse/gate-cse-2014-set-3" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2014 SET-3</a></b>&nbsp;&nbsp;&nbsp;<b><a href="https://practicepaper.in/gate-cse/engineering-mathematics" style="color:#2f6d1a; text-decoration:none" target="_blank">Engineering Mathematics</a></b></div></div>`
        },
        {
            marks: 2,
            neg: 0,
            type: "NAT",
            text: `<span style="display: inline;">The product of the non-zero eigenvalues of the matrix <br/><span>\\( \\begin{bmatrix} 1 &amp; 0&amp;0 &amp; 0&amp;1 \\\\ 0&amp; 1&amp; 1 &amp; 1 &amp; 0\\\\ 0&amp; 1&amp; 1&amp; 1&amp;0 \\\\ 0 &amp; 1 &amp; 1 &amp; 1 &amp; 0\\\\ 1&amp;0 &amp; 0&amp;0 &amp; 1 \\end{bmatrix} \\)</span> <br/> is_______.</span>`,
            image: "",
            options: [
            ],
            answer: "6",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/2013/gate2014-2-47#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><b><a href="https://practicepaper.in/gate-cse/gate-cse-2014-set-2" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2014 SET-2</a></b>&nbsp;&nbsp;&nbsp;<b><a href="https://practicepaper.in/gate-cse/engineering-mathematics" style="color:#2f6d1a; text-decoration:none" target="_blank">Engineering Mathematics</a></b></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">A non-zero polynomial f(x) of degree 3 has roots at x = 1,x = 2 and x = 3. Which one of the following must be TRUE?</span>`,
            image: "",
            options: [
                `<span>\\( f(0)f(4) \\lt 0 \\)</span>`,
                `<span>\\( f(0)f(4) \\gt 0 \\)</span>`,
                `<span>\\( f(0)+f(4) \\gt 0 \\)</span>`,
                `<span>\\( f(0)+f(4) \\lt 0 \\)</span>`
            ],
            answer: "A",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/1957/gate2014-2-5#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><b><a href="https://practicepaper.in/gate-cse/gate-cse-2014-set-2" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2014 SET-2</a></b>&nbsp;&nbsp;&nbsp;<b><a href="https://practicepaper.in/gate-cse/engineering-mathematics" style="color:#2f6d1a; text-decoration:none" target="_blank">Engineering Mathematics</a></b></div></div>`
        },
        {
            marks: 1,
            neg: 0,
            type: "NAT",
            text: `<span style="display: inline;">If the matrix A is such that <br/><span>\\( \\begin{bmatrix} 2\\\\ -4\\\\ 7 \\end{bmatrix}\\begin{bmatrix} 1 &amp;9 &amp;5 \\end{bmatrix} \\)</span> <br/> Then the determinant of A is equal to ________.</span>`,
            image: "",
            options: [
            ],
            answer: "0",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/1956/gate2014-2-4#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><b><a href="https://practicepaper.in/gate-cse/gate-cse-2014-set-2" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2014 SET-2</a></b>&nbsp;&nbsp;&nbsp;<b><a href="https://practicepaper.in/gate-cse/engineering-mathematics" style="color:#2f6d1a; text-decoration:none" target="_blank">Engineering Mathematics</a></b></div></div>`
        },
        {
            marks: 2,
            neg: 0.66,
            type: "MCQ",
            text: `<span style="display: inline;">A function f(x) is continuous in the interval [0,2]. It is known that f(0)=f(2)=-1 and f(1)=1. Which one of the following statements must be true?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">There exists a y in the interval (0,1) such that f(y)=f(y+1)</span>`,
                `<span style="display: inline;">For every y in the interval (0,1), f(y)=f(2-y)</span>`,
                `<span style="display: inline;">The maximum value of the function in the interval (0.2) is 1</span>`,
                `<span style="display: inline;">There exists a y in the interval (0,1) such that f(y)=-f(2-y)</span>`
            ],
            answer: "A",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/1925/gate2014-1-47#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><b><a href="https://practicepaper.in/gate-cse/gate-cse-2014-set-1" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2014 SET-1</a></b>&nbsp;&nbsp;&nbsp;<b><a href="https://practicepaper.in/gate-cse/engineering-mathematics" style="color:#2f6d1a; text-decoration:none" target="_blank">Engineering Mathematics</a></b></div></div>`
        },
        {
            marks: 1,
            neg: 0,
            type: "NAT",
            text: `<span style="display: inline;">The value of the dot product of the eigenvectors corresponding to any pair of different eigenvalues of a 4-by-4 symmetric positive definite matrix is</span>`,
            image: "",
            options: [
            ],
            answer: "0",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/1760/gate2014-1-5#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><b><a href="https://practicepaper.in/gate-cse/gate-cse-2014-set-1" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2014 SET-1</a></b>&nbsp;&nbsp;&nbsp;<b><a href="https://practicepaper.in/gate-cse/engineering-mathematics" style="color:#2f6d1a; text-decoration:none" target="_blank">Engineering Mathematics</a></b></div></div>`
        },
        {
            marks: 1,
            neg: 0,
            type: "NAT",
            text: `<span style="display: inline;">Consider the following system of equations: <br/> 3x + 2y = 1 <br/> 4x + 7z = 1 <br/> x + y + z = 3 <br/> x - 2y + 7z = 0 <br/> The number of solutions for this system is</span>`,
            image: "",
            options: [
            ],
            answer: "1",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/1757/gate2014-1-4#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><b><a href="https://practicepaper.in/gate-cse/gate-cse-2014-set-1" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2014 SET-1</a></b>&nbsp;&nbsp;&nbsp;<b><a href="https://practicepaper.in/gate-cse/engineering-mathematics" style="color:#2f6d1a; text-decoration:none" target="_blank">Engineering Mathematics</a></b></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">What is the matrix transformation which takes the independent vectors <span>\\( \\begin{pmatrix} 1 \\\\ 2 \\end{pmatrix}\\text{ and }\\begin{pmatrix} 2 \\\\ 5 \\end{pmatrix} \\)</span> and transforms them to <span>\\( \\begin{pmatrix} 1\\\\ 1 \\end{pmatrix} \\text{ and }\\begin{pmatrix} 3 \\\\ 2 \\end{pmatrix} \\)</span> respectively?</span>`,
            image: "",
            options: [
                `<span>\\( \\begin{pmatrix} 1&amp;-1 \\\\ 1&amp; 0 \\end{pmatrix} \\)</span>`,
                `<span>\\( \\begin{pmatrix} 0&amp;0 \\\\ 0.5&amp; 0.5 \\end{pmatrix} \\)</span>`,
                `<span>\\( \\begin{pmatrix} -1&amp;0 \\\\ 1&amp; 1 \\end{pmatrix} \\)</span>`,
                `<span>\\( \\begin{pmatrix} -1&amp;1 \\\\ 1&amp; 0 \\end{pmatrix} \\)</span>`
            ],
            answer: "D",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/43968/isro-2013-33" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><b><a href="https://practicepaper.in/gate-cse/isro-cse-2013" style="color:#2f6d1a; text-decoration:none" target="_blank">ISRO CSE 2013</a></b>&nbsp;&nbsp;&nbsp;<b><a href="https://practicepaper.in/gate-cse/engineering-mathematics" style="color:#2f6d1a; text-decoration:none" target="_blank">Engineering Mathematics</a></b></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Which one of the following does NOT equal <br/> <span>\\( \\begin{bmatrix} 1 &amp; x&amp;x^{2} \\\\ 1&amp; y &amp; y^{2}\\\\ 1&amp;z &amp; z^{2} \\end{bmatrix} \\)</span>?</span>`,
            image: "",
            options: [
                `<span>\\( \\begin{bmatrix} 1 &amp; x(x+1)&amp;x+1 \\\\ 1&amp; y(y+1) &amp; y+1\\\\ 1&amp;z(z+1) &amp; z+1 \\end{bmatrix} \\)</span>`,
                `<span>\\( \\begin{bmatrix} 1 &amp; (x+1)&amp;x^{2}+1 \\\\ 1&amp; (y+1) &amp; y^{2}+1\\\\ 1&amp; (z+1) &amp; z^{2}+1 \\end{bmatrix} \\)</span>`,
                `<span>\\( \\begin{bmatrix} 0&amp; x-y &amp; x^{2}-y^2 \\\\ 0&amp; y-z &amp; y^{2}- z^2 \\\\ 1&amp;z &amp; z^{2} \\end{bmatrix} \\)</span>`,
                `<span>\\( \\begin{bmatrix} 2&amp; x+y &amp;x^{2}+y^2 \\\\ 2&amp; y+z &amp; y^{2}+z^2\\\\ 1&amp;z &amp; z^{2} \\end{bmatrix} \\)</span>`
            ],
            answer: "A",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/1412/gate2013-3#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><b><a href="https://practicepaper.in/gate-cse/gate-cse-2013" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2013</a></b>&nbsp;&nbsp;&nbsp;<b><a href="https://practicepaper.in/gate-cse/engineering-mathematics" style="color:#2f6d1a; text-decoration:none" target="_blank">Engineering Mathematics</a></b></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Let A be the 2x2 matrix with elements <span>\\( a_{11}=a_{12}=a_{21}=+1 \\)</span> and <span>\\( a_{22}=-1 \\)</span>. Then the eigenvalues of the matrix <span>\\( A^{19} \\)</span> are</span>`,
            image: "",
            options: [
                `<span style="display: inline;">1024 and -1024</span>`,
                `<span style="display: inline;">1024<span>\\( \\sqrt{2} \\)</span> and -1024<span>\\( \\sqrt{2} \\)</span></span>`,
                `<span style="display: inline;">4<span>\\( \\sqrt{2} \\)</span> and -4<span>\\( \\sqrt{2} \\)</span></span>`,
                `<span style="display: inline;">512<span>\\( \\sqrt{2} \\)</span> and -512<span>\\( \\sqrt{2} \\)</span></span>`
            ],
            answer: "D",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/43/gate2012-11#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><b><a href="https://practicepaper.in/gate-cse/gate-cse-2012" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2012</a></b>&nbsp;&nbsp;&nbsp;<b><a href="https://practicepaper.in/gate-cse/engineering-mathematics" style="color:#2f6d1a; text-decoration:none" target="_blank">Engineering Mathematics</a></b></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">What is the matrix that represents rotation of an object by <span>\\( \\theta^0 \\)</span> about the origin in 2D?</span>`,
            image: "",
            options: [
                `<span style="display: inline;"><span>\\( \\begin{pmatrix} \\cos \\theta &amp; -\\sin \\theta \\\\ \\sin \\theta &amp; \\cos \\theta \\end{pmatrix} \\)</span></span>`,
                `<span style="display: inline;"><span>\\( \\begin{pmatrix} \\sin \\theta &amp; -\\cos \\theta \\\\ \\cos \\theta &amp; \\sin \\theta \\end{pmatrix} \\)</span></span>`,
                `<span style="display: inline;"><span>\\( \\begin{pmatrix} \\cos \\theta &amp; -\\sin \\theta \\\\ \\cos \\theta &amp; \\sin \\theta \\end{pmatrix} \\)</span></span>`,
                `<span style="display: inline;"><span>\\( \\begin{pmatrix} \\sin \\theta &amp; -\\cos \\theta \\\\ \\cos \\theta &amp; \\sin \\theta \\end{pmatrix} \\)</span></span>`
            ],
            answer: "A",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/51518/isro2011-76" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><b><a href="https://practicepaper.in/gate-cse/isro-cse-2011" style="color:#2f6d1a; text-decoration:none" target="_blank">ISRO CSE 2011</a></b>&nbsp;&nbsp;&nbsp;<b><a href="https://practicepaper.in/gate-cse/engineering-mathematics" style="color:#2f6d1a; text-decoration:none" target="_blank">Engineering Mathematics</a></b></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">If <span>\\( A \\)</span> and <span>\\( B \\)</span> are square matrices with same order and <span>\\( A \\)</span> is symmetric, then <span>\\( B^TAB \\)</span> is</span>`,
            image: "",
            options: [
                `<span style="display: inline;">Skew symmetric</span>`,
                `<span style="display: inline;">Symmetric</span>`,
                `<span style="display: inline;">Orthogonal</span>`,
                `<span style="display: inline;">Idempotent</span>`
            ],
            answer: "B",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/52483/isro2011-36" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><b><a href="https://practicepaper.in/gate-cse/isro-cse-2011" style="color:#2f6d1a; text-decoration:none" target="_blank">ISRO CSE 2011</a></b>&nbsp;&nbsp;&nbsp;<b><a href="https://practicepaper.in/gate-cse/engineering-mathematics" style="color:#2f6d1a; text-decoration:none" target="_blank">Engineering Mathematics</a></b></div></div>`
        },
        {
            marks: 2,
            neg: 0.66,
            type: "MCQ",
            text: `<span style="display: inline;">Consider the matrix as given below. <br/><span>\\( \\begin{bmatrix} 1 &amp; 2&amp;3 \\\\ 0&amp; 4 &amp; 7\\\\ 0&amp;0 &amp; 3 \\end{bmatrix} \\)</span> <br/> Which one of the following provides the CORRECT values of eigenvalues of the matrix?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">1,4,3</span>`,
                `<span style="display: inline;">3,7,3</span>`,
                `<span style="display: inline;">7,3,2</span>`,
                `<span style="display: inline;">1,2,3</span>`
            ],
            answer: "A",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/2142/gate2011-40#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><b><a href="https://practicepaper.in/gate-cse/gate-cse-2011" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2011</a></b>&nbsp;&nbsp;&nbsp;<b><a href="https://practicepaper.in/gate-cse/engineering-mathematics" style="color:#2f6d1a; text-decoration:none" target="_blank">Engineering Mathematics</a></b></div></div>`
        },
        {
            marks: 2,
            neg: 0.66,
            type: "MCQ",
            text: `<span style="display: inline;">Consider the following matrix <span>\\( A=\\begin{bmatrix} 2 &amp; 3\\\\ X&amp;Y \\end{bmatrix} \\)</span> <br/> If the eigenvalues of A are 4 and 8, then</span>`,
            image: "",
            options: [
                `<span style="display: inline;">x = 4, y = 10</span>`,
                `<span style="display: inline;">x = 5, y = 8</span>`,
                `<span style="display: inline;">x = -3,y = 9</span>`,
                `<span style="display: inline;">x = -4, y = 10</span>`
            ],
            answer: "D",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/1155/gate2010-29#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><b><a href="https://practicepaper.in/gate-cse/gate-cse-2010" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2010</a></b>&nbsp;&nbsp;&nbsp;<b><a href="https://practicepaper.in/gate-cse/engineering-mathematics" style="color:#2f6d1a; text-decoration:none" target="_blank">Engineering Mathematics</a></b></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;"><span>\\( \\begin{vmatrix} 265 &amp;&amp; 240 &amp;&amp; 219 \\\\ 240 &amp;&amp; 225 &amp;&amp; 198 \\\\ 219 &amp;&amp; 198 &amp;&amp; 181 \\\\ \\end{vmatrix} = \\)</span></span>`,
            image: "",
            options: [
                `<span style="display: inline;">779</span>`,
                `<span style="display: inline;">679</span>`,
                `<span style="display: inline;">0</span>`,
                `<span style="display: inline;">256</span>`
            ],
            answer: "C",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/48079/isro2009-63" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><b><a href="https://practicepaper.in/gate-cse/isro-cse-2009" style="color:#2f6d1a; text-decoration:none" target="_blank">ISRO CSE 2009</a></b>&nbsp;&nbsp;&nbsp;<b><a href="https://practicepaper.in/gate-cse/engineering-mathematics" style="color:#2f6d1a; text-decoration:none" target="_blank">Engineering Mathematics</a></b></div></div>`
        },
    ]
});

registerTest({
    series: "cse-gate-2027",
    name: "TWT-Engineering Mathematics(Linear Algebra-V)",
    isFree: true,
    date: "sep 27, 2026",
    topicsCovered: "Matrix Transpose, 2x2 Determinants, Determinant Properties, Orthogonal Matrices, Polynomial Interpolation, System of Linear Equations, Eigenvalues & Eigenvectors, Block Matrices",
    questions: [
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">If A, B, C are any three matrices, then A'+B'+C' is equal to</span>`,
            image: "",
            options: [
                `<span style="display: inline;">a null matrix</span>`,
                `<span style="display: inline;">A+B+C</span>`,
                `<span style="display: inline;">(A+B+C)'</span>`,
                `<span style="display: inline;">-(A+B+C)</span>`
            ],
            answer: "C",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/50512/isro2009-62" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><b><a href="https://practicepaper.in/gate-cse/isro-cse-2009" style="color:#2f6d1a; text-decoration:none" target="_blank">ISRO CSE 2009</a></b>&nbsp;&nbsp;&nbsp;<b><a href="https://practicepaper.in/gate-cse/engineering-mathematics" style="color:#2f6d1a; text-decoration:none" target="_blank">Engineering Mathematics</a></b></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">If <span>\\( \\begin{vmatrix} 3 &amp;&amp; 3 \\\\ x &amp;&amp; 5 \\end{vmatrix} =3 \\)</span> then the value of <span>\\( x \\)</span> is</span>`,
            image: "",
            options: [
                `<span style="display: inline;">2</span>`,
                `<span style="display: inline;">3</span>`,
                `<span style="display: inline;">4</span>`,
                `<span style="display: inline;">5</span>`
            ],
            answer: "C",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/50506/isro2009-61" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><b><a href="https://practicepaper.in/gate-cse/isro-cse-2009" style="color:#2f6d1a; text-decoration:none" target="_blank">ISRO CSE 2009</a></b>&nbsp;&nbsp;&nbsp;<b><a href="https://practicepaper.in/gate-cse/engineering-mathematics" style="color:#2f6d1a; text-decoration:none" target="_blank">Engineering Mathematics</a></b></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">If two adjacent rows of a determinant are interchanged, the value of the determinant</span>`,
            image: "",
            options: [
                `<span style="display: inline;">becomes zero</span>`,
                `<span style="display: inline;">remains unaltered</span>`,
                `<span style="display: inline;">becomes infinitive</span>`,
                `<span style="display: inline;">becomes negative of its original value</span>`
            ],
            answer: "D",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/50503/isro2009-60" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><b><a href="https://practicepaper.in/gate-cse/isro-cse-2009" style="color:#2f6d1a; text-decoration:none" target="_blank">ISRO CSE 2009</a></b>&nbsp;&nbsp;&nbsp;<b><a href="https://practicepaper.in/gate-cse/engineering-mathematics" style="color:#2f6d1a; text-decoration:none" target="_blank">Engineering Mathematics</a></b></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">A square matrix A is called orthogonal if A'A=</span>`,
            image: "",
            options: [
                `<span style="display: inline;">I</span>`,
                `<span style="display: inline;">A</span>`,
                `<span style="display: inline;">-A</span>`,
                `<span style="display: inline;">-I</span>`
            ],
            answer: "A",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/50498/isro2009-59" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><b><a href="https://practicepaper.in/gate-cse/isro-cse-2009" style="color:#2f6d1a; text-decoration:none" target="_blank">ISRO CSE 2009</a></b>&nbsp;&nbsp;&nbsp;<b><a href="https://practicepaper.in/gate-cse/engineering-mathematics" style="color:#2f6d1a; text-decoration:none" target="_blank">Engineering Mathematics</a></b></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">The cubic polynomial y(x) which takes the following values: y(0)=1, y(1)=0, y(2)=1 and y(3)=10 is</span>`,
            image: "",
            options: [
                `<span>\\( x^3 +2x^2 +1 \\)</span>`,
                `<span>\\( x^3 +3x^2 -1 \\)</span>`,
                `<span>\\( x^3 +1 \\)</span>`,
                `<span>\\( x^3 -2x^2 +1 \\)</span>`
            ],
            answer: "D",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/50475/isro2009-48" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><b><a href="https://practicepaper.in/gate-cse/isro-cse-2009" style="color:#2f6d1a; text-decoration:none" target="_blank">ISRO CSE 2009</a></b>&nbsp;&nbsp;&nbsp;<b><a href="https://practicepaper.in/gate-cse/engineering-mathematics" style="color:#2f6d1a; text-decoration:none" target="_blank">Engineering Mathematics</a></b></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">If a square matrix <span>\( A \)</span>  satisfies <span>\( A^TA=I \)</span>,  then the matrix <span>\( A \)</span>  is</span>`,
            image: "",
            options: [
                `<span style="display: inline;">Idempotent</span>`,
                `<span style="display: inline;">Symmetric</span>`,
                `<span style="display: inline;">Orthogonal</span>`,
                `<span style="display: inline;">Hermitian</span>`
            ],
            answer: "C",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;"> <strong style="font-size: 16px; color: #000;">Explanation:</strong><br> <a href="https://gateoverflow.in/49916/isro2008-34" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><b><a href="https://practicepaper.in/gate-cse/isro-cse-2008" style="color:#2f6d1a; text-decoration:none" target="_blank" text-decoration:="">ISRO CSE 2008</a></b>   <b><a href="https://practicepaper.in/gate-cse/engineering-mathematics" style="color:#2f6d1a; text-decoration:none" target="_blank" text-decoration:="">Engineering Mathematics</a></b></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">If the two  matrices <span>\( \begin{bmatrix} 1 &amp;0 &amp;x \\ 0 &amp; x&amp; 1\\ 0 &amp; 1 &amp; x \end{bmatrix} \text{and }\begin{bmatrix} x &amp;1 &amp;0 \\ x &amp; 0&amp; 1\\ 0 &amp; x &amp; 1 \end{bmatrix} \)</span>  have the same determinant, then the value of <span>\( x \)</span>  is</span>`,
            image: "",
            options: [
                `<span>\( \frac{1}{2} \)</span>`,
                `<span>\( \sqrt2 \)</span>`,
                `<span>\( \pm \frac{1}{2} \)</span>`,
                `<span>\( \pm \frac{1}{\sqrt2} \)</span>`
            ],
            answer: "A",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;"> <strong style="font-size: 16px; color: #000;">Explanation:</strong><br> <a href="https://gateoverflow.in/47590/isro2008-31" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><b><a href="https://practicepaper.in/gate-cse/isro-cse-2008" style="color:#2f6d1a; text-decoration:none" target="_blank" text-decoration:="">ISRO CSE 2008</a></b>   <b><a href="https://practicepaper.in/gate-cse/engineering-mathematics" style="color:#2f6d1a; text-decoration:none" target="_blank" text-decoration:="">Engineering Mathematics</a></b></div></div>`
        },
        {
            marks: 2,
            neg: 0.66,
            type: "MCQ",
            text: `<span style="display: inline;">If M is a square matrix with a zero  determinant, which of the following assertion (s) is (are) correct?<br/>  S1: Each row of M can be represented as a linear combination of the other  rows<br/>  S2: Each column of M can be represented as a linear combination of the other  columns<br/>  S3: M X=0 has a nontrivial solution<br/>  S4: M has an inverse<br/></span>`,
            image: "",
            options: [
                `<span style="display: inline;">S3 and S2</span>`,
                `<span style="display: inline;">S1 and S4</span>`,
                `<span style="display: inline;">S1 and S3</span>`,
                `<span style="display: inline;">S1, S2 and S3</span>`
            ],
            answer: "D",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;"> <strong style="font-size: 16px; color: #000;">Explanation:</strong><br> <a href="https://gateoverflow.in/3319/gate2008-it-29" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><b><a href="https://practicepaper.in/gate-cse/gate-it-2008" style="color:#2f6d1a; text-decoration:none" target="_blank" text-decoration:="">GATE IT 2008</a></b>   <b><a href="https://practicepaper.in/gate-cse/engineering-mathematics" style="color:#2f6d1a; text-decoration:none" target="_blank" text-decoration:="">Engineering Mathematics</a></b></div></div>`
        },
        {
            marks: 2,
            neg: 0.66,
            type: "MCQ",
            text: `<span style="display: inline;">How many of the following matrices have an  eigenvalue 1? <br/> <span>\( \begin{bmatrix} 1 &amp; 0\\ 0&amp;0 \end{bmatrix}\begin{bmatrix} 0 &amp; 1\\ 0&amp;0 \end{bmatrix}\begin{bmatrix} 1 &amp; -1\\ 1&amp;1 \end{bmatrix} \)</span>  and <span>\( \begin{bmatrix} -1 &amp;0 \\ 1&amp;-1 \end{bmatrix} \)</span></span>`,
            image: "",
            options: [
                `<span style="display: inline;">one</span>`,
                `<span style="display: inline;">two</span>`,
                `<span style="display: inline;">three</span>`,
                `<span style="display: inline;">four</span>`
            ],
            answer: "A",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;"> <strong style="font-size: 16px; color: #000;">Explanation:</strong><br> <a href="https://gateoverflow.in/426/gate2008-28#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><b><a href="https://practicepaper.in/gate-cse/gate-cse-2008" style="color:#2f6d1a; text-decoration:none" target="_blank" text-decoration:="">GATE CSE 2008</a></b>   <b><a href="https://practicepaper.in/gate-cse/engineering-mathematics" style="color:#2f6d1a; text-decoration:none" target="_blank" text-decoration:="">Engineering Mathematics</a></b></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">The following system of equations <br/> <span>\( x_{1}+x_{2}+2x_{3}=1 \)</span> <br/> <span>\( x_{1}+2x_{2}+3x_{3}=2 \)</span> <br/> <span>\( x_{1}+4x_{2}+\alpha x_{3}=4 \)</span><br/>  has a unique solution. The only possible value(s) for <span>\( \alpha \)</span>  is/are</span>`,
            image: "",
            options: [
                `<span style="display: inline;">0</span>`,
                `<span style="display: inline;">either 0 or 1</span>`,
                `<span style="display: inline;">one of 0, 1 or -1</span>`,
                `<span style="display: inline;">any real number other than 5</span>`
            ],
            answer: "D",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;"> <strong style="font-size: 16px; color: #000;">Explanation:</strong><br> <a href="https://gateoverflow.in/401/gate2008-3#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><b><a href="https://practicepaper.in/gate-cse/gate-cse-2008" style="color:#2f6d1a; text-decoration:none" target="_blank" text-decoration:="">GATE CSE 2008</a></b>   <b><a href="https://practicepaper.in/gate-cse/engineering-mathematics" style="color:#2f6d1a; text-decoration:none" target="_blank" text-decoration:="">Engineering Mathematics</a></b></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Eigen vectors of <span>\( \begin{bmatrix} 1 & \cos \theta \\ \cos \theta & 1 \end{bmatrix} \)</span> are</span>`,
            image: "",
            options: [
                `<span style="display: inline;"><span>\( \begin{bmatrix} a^n & 1 \\ 0 & a^n \end{bmatrix} \)</span></span>`,
                `<span style="display: inline;"><span>\( \begin{bmatrix} a^n & n \\ 0 & a^n \end{bmatrix} \)</span></span>`,
                `<span style="display: inline;"><span>\( \begin{bmatrix} a^n & na^{n-1} \\ 0 & a^n \end{bmatrix} \)</span></span>`,
                `<span style="display: inline;"><span>\( \begin{bmatrix} a^n & na^{n-1} \\ -n & a^n \end{bmatrix} \)</span></span>`,
            ],
            answer: "D",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;"> <strong style="font-size: 16px; color: #000;">Explanation:</strong><br> <a href="https://gateoverflow.in/49479/isro2007-09" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><b><a href="https://practicepaper.in/gate-cse/isro-cse-2007" style="color:#2f6d1a; text-decoration:none" target="_blank">ISRO CSE 2007</a></b>&nbsp;&nbsp;&nbsp;<b><a href="https://practicepaper.in/gate-cse/engineering-mathematics" style="color:#2f6d1a; text-decoration:none" target="_blank">Engineering Mathematics</a></b></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Let A be the matrix <span>\( \begin{bmatrix}3 &1 \\ 1&2\end{bmatrix} \)</span>. What is the maximum value of <span>\( x^TAx \)</span> where the maximum is taken over all x that are the unit eigenvectors of A?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">5</span>`,
                `<span style="display: inline;"><span>\( \frac{(5 + \sqrt{5})}{2} \)</span></span>`,
                `<span style="display: inline;">3</span>`,
                `<span style="display: inline;"><span>\( \frac{(5 - \sqrt{5})}{2} \)</span></span>`,
            ],
            answer: "B",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;"> <strong style="font-size: 16px; color: #000;">Explanation:</strong><br> <a href="https://gateoverflow.in/3433/gate2007-it-2" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><b><a href="https://practicepaper.in/gate-cse/gate-it-2007" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE IT 2007</a></b>&nbsp;&nbsp;&nbsp;<b><a href="https://practicepaper.in/gate-cse/engineering-mathematics" style="color:#2f6d1a; text-decoration:none" target="_blank">Engineering Mathematics</a></b></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Let A be a 4 x 4 matrix with eigenvalues -5, -2, 1, 4. Which of the following is an eigenvalue of <br/><span>\( \begin{bmatrix} A & I\\ I&A \end{bmatrix} \)</span><br/> where I is the 4 x 4 identity matrix?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">-5</span>`,
                `<span style="display: inline;">-7</span>`,
                `<span style="display: inline;">2</span>`,
                `<span style="display: inline;">1</span>`,
            ],
            answer: "C",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;"> <strong style="font-size: 16px; color: #000;">Explanation:</strong><br> <a href="https://gateoverflow.in/1223/gate2007-25#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><b><a href="https://practicepaper.in/gate-cse/gate-cse-2007" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2007</a></b>&nbsp;&nbsp;&nbsp;<b><a href="https://practicepaper.in/gate-cse/engineering-mathematics" style="color:#2f6d1a; text-decoration:none" target="_blank">Engineering Mathematics</a></b></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">What are the eigenvalues of the matrix P given below <br/><span>\( P= \begin{pmatrix} a &1 &0 \\ 1& a& 1\\ 0&1 &a \end{pmatrix} \)</span></span>`,
            image: "",
            options: [
                `<span style="display: inline;"><span>\( a, a -\sqrt2, a + \sqrt2 \)</span></span>`,
                `<span style="display: inline;">a, a, a</span>`,
                `<span style="display: inline;">0, a, 2a</span>`,
                `<span style="display: inline;">-a, 2a, 2a</span>`,
            ],
            answer: "A",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;"> <strong style="font-size: 16px; color: #000;">Explanation:</strong><br> <a href="https://gateoverflow.in/3565/gate2006-it-26" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><b><a href="https://practicepaper.in/gate-cse/gate-it-2006" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE IT 2006</a></b>&nbsp;&nbsp;&nbsp;<b><a href="https://practicepaper.in/gate-cse/engineering-mathematics" style="color:#2f6d1a; text-decoration:none" target="_blank">Engineering Mathematics</a></b></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">F is an nxn real matrix. b is an nx1 real vector. Suppose there are two nx1 vectors, u and v such that u<span>\( \neq \)</span>v , and Fu=b, Fv=b. Which one of the following statements is false?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">Determinant of F is zero</span>`,
                `<span style="display: inline;">There are an infinite number of solutions to Fx = b</span>`,
                `<span style="display: inline;">There is an x<span>\( \neq \)</span>0 such that Fx = 0</span>`,
                `<span style="display: inline;">F must have two identical rows</span>`,
            ],
            answer: "D",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;"> <strong style="font-size: 16px; color: #000;">Explanation:</strong><br> <a href="https://gateoverflow.in/984/gate2006-23#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><b><a href="https://practicepaper.in/gate-cse/gate-cse-2006" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2006</a></b>&nbsp;&nbsp;&nbsp;<b><a href="https://practicepaper.in/gate-cse/engineering-mathematics" style="color:#2f6d1a; text-decoration:none" target="_blank">Engineering Mathematics</a></b></div></div>`
        }
    ]
});

registerTest({
    series: "cse-gate-2027",
    name: "TWT-Engineering Mathematics(Linear Algebra-VI)",
    isFree: true,
    date: "sep 27, 2026",
    topicsCovered: "Polynomial Evaluation, Determinants, Eigenvalues, System of Linear Equations, Matrix Inverses, Tridiagonal Determinants, Symmetric Matrices Combinatorics, Matrix Rank, Polynomial Interpolation",
    questions: [
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Consider the polynomial <span>\( p(x)=a_{0}+a_{1}x+a_{2}x^{2} + a_{3}x^{3} \)</span>, where <span>\( a_{i}\neq 0,\forall i \)</span>. The minimum number of multiplications needed to evaluate p on an input x is:</span>`,
            image: "",
            options: [
                `<span style="display: inline;">3</span>`,
                `<span style="display: inline;">5</span>`,
                `<span style="display: inline;">6</span>`,
                `<span style="display: inline;">9</span>`,
            ],
            answer: "A",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;"> <strong style="font-size: 16px; color: #000;">Explanation:</strong><br> <a href="https://gateoverflow.in/792/gate2006-1#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><b><a href="https://practicepaper.in/gate-cse/gate-cse-2006" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2006</a></b>&nbsp;&nbsp;&nbsp;<b><a href="https://practicepaper.in/gate-cse/engineering-mathematics" style="color:#2f6d1a; text-decoration:none" target="_blank">Engineering Mathematics</a></b></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">The determinant of the matrix given below is<br/> <span>\( \begin{bmatrix} 0 &1 &0 &2 \\ -1& 1& 1& 3\\ 0&0 &0 & 1\\ 1& -2& 0& 1 \end{bmatrix} \)</span></span>`,
            image: "",
            options: [
                `<span style="display: inline;">-1</span>`,
                `<span style="display: inline;">0</span>`,
                `<span style="display: inline;">1</span>`,
                `<span style="display: inline;">2</span>`,
            ],
            answer: "A",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;"> <strong style="font-size: 16px; color: #000;">Explanation:</strong><br> <a href="https://gateoverflow.in/3747/gate2005-it-3" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><b><a href="https://practicepaper.in/gate-cse/gate-it-2005" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE IT 2005</a></b>&nbsp;&nbsp;&nbsp;<b><a href="https://practicepaper.in/gate-cse/engineering-mathematics" style="color:#2f6d1a; text-decoration:none" target="_blank">Engineering Mathematics</a></b></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">What are the eigen values of the following 2 x 2 matrix? <br/> <span>\( \begin{bmatrix} 2 &-1 \\ -4 & 5 \end{bmatrix} \)</span></span>`,
            image: "",
            options: [
                `<span style="display: inline;">1 and -1</span>`,
                `<span style="display: inline;">1 and 6</span>`,
                `<span style="display: inline;">2 and 5</span>`,
                `<span style="display: inline;">4 and -1</span>`,
            ],
            answer: "B",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;"> <strong style="font-size: 16px; color: #000;">Explanation:</strong><br> <a href="https://gateoverflow.in/1174/gate2005-49#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><b><a href="https://practicepaper.in/gate-cse/gate-cse-2005" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2005</a></b>&nbsp;&nbsp;&nbsp;<b><a href="https://practicepaper.in/gate-cse/engineering-mathematics" style="color:#2f6d1a; text-decoration:none" target="_blank">Engineering Mathematics</a></b></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Consider the following system of equations in three real variables <span>\( x_1, x_2 \; and \; x_3 \)</span> : <br/><br/> <span>\( 2x_1 - x_2 + 3x_3 = 1 \)</span><br/> <span>\( 3x_1 + 2x_2 + 5x_3 = 2 \)</span> <br/> <span>\( -x_1 + 4x_2 + x_3 = 3 \)</span><br/><br/> The system of equations has</span>`,
            image: "",
            options: [
                `<span style="display: inline;">no solution</span>`,
                `<span style="display: inline;">a unique solution</span>`,
                `<span style="display: inline;">more than one but a finite number of solutions</span>`,
                `<span style="display: inline;">an infinite number of solutions</span>`,
            ],
            answer: "B",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;"> <strong style="font-size: 16px; color: #000;">Explanation:</strong><br> <a href="https://gateoverflow.in/1173/gate2005-48#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><b><a href="https://practicepaper.in/gate-cse/gate-cse-2005" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2005</a></b>&nbsp;&nbsp;&nbsp;<b><a href="https://practicepaper.in/gate-cse/engineering-mathematics" style="color:#2f6d1a; text-decoration:none" target="_blank">Engineering Mathematics</a></b></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">If matrix <span>\( X = \begin{bmatrix} a & 1 \\ -a^2+a-1 & 1-a \end{bmatrix} \)</span> and <span>\( X^2 - X + I = O \)</span> (<span>\( I \)</span> is the identity matrix and <span>\( O \)</span> is the zero matrix), then the inverse of <span>\( X \)</span> is</span>`,
            image: "",
            options: [
                `<span style="display: inline;"><span>\( \begin{bmatrix} 1-a &-1 \\ a^2& a \end{bmatrix} \)</span></span>`,
                `<span style="display: inline;"><span>\( \begin{bmatrix} 1-a &-1 \\ a^2-a+1& a \end{bmatrix} \)</span></span>`,
                `<span style="display: inline;"><span>\( \begin{bmatrix} -a &1 \\ -a^2+a-1& 1-a \end{bmatrix} \)</span></span>`,
                `<span style="display: inline;"><span>\( \begin{bmatrix} a^2-a+1 &a \\ 1& 1-a \end{bmatrix} \)</span></span>`,
            ],
            answer: "B",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;"> <strong style="font-size: 16px; color: #000;">Explanation:</strong><br> <a href="https://gateoverflow.in/3679/gate2004-it-36" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><b><a href="https://practicepaper.in/gate-cse/gate-it-2004" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE IT 2004</a></b>&nbsp;&nbsp;&nbsp;<b><a href="https://practicepaper.in/gate-cse/engineering-mathematics" style="color:#2f6d1a; text-decoration:none" target="_blank">Engineering Mathematics</a></b></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Let A be an <span>\( n \times n \)</span> matrix of the following form.<br/> <span>\( A = \begin{bmatrix}3&1&0&0&0&\ldots&0&0&0\\ 1&3&1&0&0&\ldots&0&0&0\\ 0&1&3&1&0&\ldots&0&0&0\\ 0&0&1&3&1&\ldots&0&0&0\\ \ldots\\ \ldots \\ 0&0&0&0&0&\ldots&1&3&1\\ 0&0&0&0&0&\ldots&0&1&3\\ \end{bmatrix}_{n\times n} \)</span><br/> What is the value of the determinant of A?</span>`,
            image: "",
            options: [
                `<span style="display: inline;"><span>\( \left(\frac{5+\sqrt3}{2}\right)^{n-1} \left(\frac{5\sqrt3 + 7}{2 \sqrt 3}\right) +\left(\frac{5-\sqrt3}{2}\right)^{n-1} \left(\frac{5\sqrt3 - 7}{2 \sqrt 3}\right) \)</span></span>`,
                `<span style="display: inline;"><span>\( \left(\frac{7+\sqrt5}{2}\right)^{n-1} \left(\frac{7\sqrt5 + 3}{2 \sqrt 5}\right) +\left(\frac{7-\sqrt5}{2}\right)^{n-1} \left(\frac{7\sqrt5 - 3}{2 \sqrt 5}\right) \)</span></span>`,
                `<span style="display: inline;"><span>\( \left(\frac{3+\sqrt7}{2}\right)^{n-1} \left(\frac{3\sqrt7 + 5}{2 \sqrt 7}\right) +\left(\frac{3-\sqrt7}{2}\right)^{n-1} \left(\frac{3\sqrt7 - 5}{2 \sqrt 7}\right) \)</span></span>`,
                `<span style="display: inline;"><span>\( \left(\frac{3+\sqrt5}{2}\right)^{n-1} \left(\frac{3\sqrt5 + 7}{2 \sqrt 5}\right) + \left(\frac{3-\sqrt5}{2}\right)^{n-1} \left(\frac{3\sqrt5 - 7}{2 \sqrt 5}\right) \)</span></span>`,
            ],
            answer: "D",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;"> <strong style="font-size: 16px; color: #000;">Explanation:</strong><br> <a href="https://gateoverflow.in/3675/gate2004-it-32" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><b><a href="https://practicepaper.in/gate-cse/gate-it-2004" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE IT 2004</a></b>&nbsp;&nbsp;&nbsp;<b><a href="https://practicepaper.in/gate-cse/engineering-mathematics" style="color:#2f6d1a; text-decoration:none" target="_blank">Engineering Mathematics</a></b></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">What values of x, y and z satisfy the following system of linear equations?<br/> <span>\( \begin{bmatrix} 1 &2 &3 \\ 1& 3 &4 \\ 2& 2 &3 \\ \end{bmatrix} \begin{bmatrix} x\\y \\ z \end{bmatrix} = \begin{bmatrix} 6\\8 \\ 12 \end{bmatrix} \)</span></span>`,
            image: "",
            options: [
                `<span style="display: inline;">x = 6, y = 3, z = 2</span>`,
                `<span style="display: inline;">x = 12, y = 3, z = - 4</span>`,
                `<span style="display: inline;">x = 6, y = 6, z = - 4</span>`,
                `<span style="display: inline;">x = 12, y = - 3, z = 0</span>`,
            ],
            answer: "C",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;"> <strong style="font-size: 16px; color: #000;">Explanation:</strong><br> <a href="https://gateoverflow.in/3647/gate2004-it-6" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><b><a href="https://practicepaper.in/gate-cse/gate-it-2004" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE IT 2004</a></b>&nbsp;&nbsp;&nbsp;<b><a href="https://practicepaper.in/gate-cse/engineering-mathematics" style="color:#2f6d1a; text-decoration:none" target="_blank">Engineering Mathematics</a></b></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">In an M x N matrix such that all non-zero entries are covered in a rows and b columns. Then the maximum number of non-zero entries, such that no two are on the same row or column, is</span>`,
            image: "",
            options: [
                `<span style="display: inline;"><span>\( \leq \)</span> a+b</span>`,
                `<span style="display: inline;"><span>\( \leq \)</span> max{a,b}</span>`,
                `<span style="display: inline;"><span>\( \leq \)</span> min{M-a,N-b}</span>`,
                `<span style="display: inline;"><span>\( \leq \)</span> min{a,b}</span>`,
            ],
            answer: "D",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;"> <strong style="font-size: 16px; color: #000;">Explanation:</strong><br> <a href="https://gateoverflow.in/1070/gate2004-76#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><b><a href="https://practicepaper.in/gate-cse/gate-cse-2004" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2004</a></b>&nbsp;&nbsp;&nbsp;<b><a href="https://practicepaper.in/gate-cse/engineering-mathematics" style="color:#2f6d1a; text-decoration:none" target="_blank">Engineering Mathematics</a></b></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">How many solutions does the following system of linear equations have?<br/><br/> -x + 5y = -1 <br/> x - y = 2 <br/> x + 3y = 3 <br/></span>`,
            image: "",
            options: [
                `<span style="display: inline;">infinitely many</span>`,
                `<span style="display: inline;">two distinct solutions</span>`,
                `<span style="display: inline;">unique</span>`,
                `<span style="display: inline;">none</span>`,
            ],
            answer: "C",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;"> <strong style="font-size: 16px; color: #000;">Explanation:</strong><br> <a href="https://gateoverflow.in/1065/gate2004-71#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><b><a href="https://practicepaper.in/gate-cse/gate-cse-2004" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2004</a></b>&nbsp;&nbsp;&nbsp;<b><a href="https://practicepaper.in/gate-cse/engineering-mathematics" style="color:#2f6d1a; text-decoration:none" target="_blank">Engineering Mathematics</a></b></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Let A,B,C,D be n x n matrices, each with non-zero determinant. If ABCD=I, then <span>\( B^{-1} \)</span> is</span>`,
            image: "",
            options: [
                `<span style="display: inline;"><span>\( D^{-1}C^{-1}A^{-1} \)</span></span>`,
                `<span style="display: inline;">CDA</span>`,
                `<span style="display: inline;">ADC</span>`,
                `<span style="display: inline;">Does not necessarily exist</span>`,
            ],
            answer: "B",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;"> <strong style="font-size: 16px; color: #000;">Explanation:</strong><br> <a href="https://gateoverflow.in/1024/gate2004-27#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><b><a href="https://practicepaper.in/gate-cse/gate-cse-2004" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2004</a></b>&nbsp;&nbsp;&nbsp;<b><a href="https://practicepaper.in/gate-cse/engineering-mathematics" style="color:#2f6d1a; text-decoration:none" target="_blank">Engineering Mathematics</a></b></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">The number of different n x n symmetric matrices with each element being either 0 or 1 is : (Note: power (2,x) is same as <span>\( 2^{x} \)</span>)</span>`,
            image: "",
            options: [
                `<span style="display: inline;">power (2,n)</span>`,
                `<span style="display: inline;">power (2,<span>\( n^{2} \)</span>)</span>`,
                `<span style="display: inline;">power (2,<span>\( (n^{2}+n)/2 \)</span>)</span>`,
                `<span style="display: inline;">power (2,<span>\( (n^{2}-n)/2 \)</span>)</span>`,
            ],
            answer: "C",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;"> <strong style="font-size: 16px; color: #000;">Explanation:</strong><br> <a href="https://gateoverflow.in/1023/gate2004-26#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><b><a href="https://practicepaper.in/gate-cse/gate-cse-2004" style="color:#2f6d1a; text-decoration:none" target="_blank" >GATE CSE 2004</a></b>&nbsp;&nbsp;&nbsp;<b><a href="https://practicepaper.in/gate-cse/engineering-mathematics" style="color:#2f6d1a; text-decoration:none" target="_blank" >Engineering Mathematics</a></b></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Consider the following system of linear equations <br/> <span>\( \begin{bmatrix} 2 & 1 & -4\\ 4 & 3 & -12\\ 1 & 2 & -8 \end{bmatrix}\begin{bmatrix} x\\ y\\ z \end{bmatrix}\begin{bmatrix} \alpha \\ 5\\ 7 \end{bmatrix} \)</span> <br/> Notice that the second and the third columns of the coefficient matrix are linearly dependent. For how many values of <span>\( \alpha \)</span>, does this system of equations have infinitely many solutions?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">0</span>`,
                `<span style="display: inline;">1</span>`,
                `<span style="display: inline;">2</span>`,
                `<span style="display: inline;">infinitely many</span>`,
            ],
            answer: "B",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;"> <strong style="font-size: 16px; color: #000;">Explanation:</strong><br> <a href="https://gateoverflow.in/932/gate2003-41#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><b><a href="https://practicepaper.in/gate-cse/gate-cse-2003" style="color:#2f6d1a; text-decoration:none" target="_blank" >GATE CSE 2003</a></b>&nbsp;&nbsp;&nbsp;<b><a href="https://practicepaper.in/gate-cse/engineering-mathematics" style="color:#2f6d1a; text-decoration:none" target="_blank" >Engineering Mathematics</a></b></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">The rank of the matrix <span>\( \begin{bmatrix} 1 & 1\\ 0& 0 \end{bmatrix} \)</span> is</span>`,
            image: "",
            options: [
                `<span style="display: inline;">4</span>`,
                `<span style="display: inline;">2</span>`,
                `<span style="display: inline;">1</span>`,
                `<span style="display: inline;">0</span>`,
            ],
            answer: "C",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;"> <strong style="font-size: 16px; color: #000;">Explanation:</strong><br> <a href="https://gateoverflow.in/805/gate2002-1-1#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><b><a href="https://practicepaper.in/gate-cse/gate-cse-2002" style="color:#2f6d1a; text-decoration:none" target="_blank" >GATE CSE 2002</a></b>&nbsp;&nbsp;&nbsp;<b><a href="https://practicepaper.in/gate-cse/engineering-mathematics" style="color:#2f6d1a; text-decoration:none" target="_blank" >Engineering Mathematics</a></b></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">A polynomial p(x) satisfies the following:<br/> p(1) = p(3) = p(5) = 1 <br/> p(2) = p(4) = -1<br/> The minimum degree of such a polynomial is</span>`,
            image: "",
            options: [
                `<span style="display: inline;">1</span>`,
                `<span style="display: inline;">2</span>`,
                `<span style="display: inline;">3</span>`,
                `<span style="display: inline;">4</span>`,
            ],
            answer: "D",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;"> <strong style="font-size: 16px; color: #000;">Explanation:</strong><br> <a href="https://gateoverflow.in/651/gate2000-2-4" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><b><a href="https://practicepaper.in/gate-cse/gate-cse-2000" style="color:#2f6d1a; text-decoration:none" target="_blank" >GATE CSE 2000</a></b>&nbsp;&nbsp;&nbsp;<b><a href="https://practicepaper.in/gate-cse/engineering-mathematics" style="color:#2f6d1a; text-decoration:none" target="_blank" >Engineering Mathematics</a></b></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">The determinant of the matrix<br/><span>\( \begin{bmatrix}2 &0 &0 &0 \\ 8& 1& 7& 2\\ 2& 0&2 &0 \\ 9&0 & 6 & 1 \end{bmatrix} \)</span></span>`,
            image: "",
            options: [
                `<span style="display: inline;">4</span>`,
                `<span style="display: inline;">0</span>`,
                `<span style="display: inline;">15</span>`,
                `<span style="display: inline;">20</span>`,
            ],
            answer: "A",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;"> <strong style="font-size: 16px; color: #000;">Explanation:</strong><br> <a href="https://gateoverflow.in/626/gate2000-1-3" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><b><a href="https://practicepaper.in/gate-cse/gate-cse-2000" style="color:#2f6d1a; text-decoration:none" target="_blank" >GATE CSE 2000</a></b>&nbsp;&nbsp;&nbsp;<b><a href="https://practicepaper.in/gate-cse/engineering-mathematics" style="color:#2f6d1a; text-decoration:none" target="_blank" >Engineering Mathematics</a></b></div></div>`
        }
    ]
});


