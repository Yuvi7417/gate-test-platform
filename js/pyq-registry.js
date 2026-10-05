
registerTest({
    series: "cse-gate-2027",
    name: "TWT-data sturctue(Array-I)",
    date: "may 20, 2026",
    questions: [
        {
            marks: 2,
            neg: 0.66,
            type: "MCQ",
            text: `<span style="display: inline;">An array <span>\\( A \\)</span> of length <span>\\( n \\)</span> with distinct elements is said to be bitonic if there is an index <span>\\( 1 \\leq i \\leq n \\)</span> such that <span>\\( A[1..i] \\)</span> is sorted in the non-decreasing order and <span>\\( A[i+1..n] \\)</span> is sorted in the non-increasing order. <br/> Which ONE of the following represents the best possible asymptotic bound for the worst-case number of comparisons by an algorithm that searches for an element in a bitonic array <span>\\( A \\)</span>?</span>`,
            image: "",
            options: [
                `<span style="display: inline;"><span>\\( \\Theta(n) \\)</span></span>`,
                `<span style="display: inline;"><span>\\( \\Theta(1) \\)</span></span>`,
                `<span style="display: inline;"><span>\\( \\Theta(\\log ^2 n) \\)</span></span>`,
                `<span style="display: inline;"><span>\\( \\Theta(\\log n) \\)</span></span>`
            ],
            answer: "D",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/460804/gate-cse-2025-set-2-question-31#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2025-set-2" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2025 SET-2</a> | <a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/data-structure" style="color:#2f6d1a; text-decoration:none" target="_blank">Data Structure</a></div></div>`
        },
        {
            marks: 1,
            neg: 0,
            type: "NAT",
            text: `<span style="display: inline;">Let <span>\\( A \\)</span> be an array containing integer values. The distance of <span>\\( A \\)</span> is defined as the minimum number of elements in <span>\\( A \\)</span> that must be replaced with another integer so that the resulting array is sorted in non-decreasing order. The distance of the array <span>\\( [2,5,3,1,4,2,6] \\)</span> is _____</span>`,
            image: "",
            options: [
            ],
            answer: "3",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/422872/gate-cse-2024-set-2-question-25#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2024-set-2" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2024 SET-2</a> | <a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/data-structure" style="color:#2f6d1a; text-decoration:none" target="_blank">Data Structure</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">What is the worst-case number of arithmetic operations performed by recursive binary search on a sorted array of size n?</span>`,
            image: "",
            options: [
                `<span style="display: inline;"><span>\\( \\Theta (\\sqrt{n}) \\)</span></span>`,
                `<span style="display: inline;"><span>\\( \\Theta ( \\log _2 (n)) \\)</span></span>`,
                `<span style="display: inline;"><span>\\( \\Theta ( n^2) \\)</span></span>`,
                `<span style="display: inline;"><span>\\( \\Theta ( n) \\)</span></span>`
            ],
            answer: "B",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/357532/gate-cse-2021-set-2-question-8#a_list_title" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2021-set-2" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2021 SET-2</a> | <a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/data-structure" style="color:#2f6d1a; text-decoration:none" target="_blank">Data Structure</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Let P be an array containing n integers. Let t be the lowest upper bound on the number of comparisons of the array elements, required to find the minimum and maximum values in an arbitrary array of n elements. Which one of the following choices is correct?</span>`,
            image: "",
            options: [
                `<span style="display: inline;"><span>\\( t \\gt 2n-2 \\)</span></span>`,
                `<span style="display: inline;"><span>\\( t \\gt 3\\lceil \\frac{n}{2}\\rceil \\text{ and } t\\leq 2n-2 \\)</span></span>`,
                `<span style="display: inline;"><span>\\( t \\gt n \\text{ and } t\\leq 3\\lceil \\frac{n}{2}\\rceil \\)</span></span>`,
                `<span style="display: inline;"><span>\\( t \\gt \\lceil \\log_2(n)\\rceil \\text{ and } t\\leq n \\)</span></span>`
            ],
            answer: "C",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/357450/gate-cse-2021-set-1-question-2#a_list_title" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2021-set-1" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2021 SET-1</a> | <a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/data-structure" style="color:#2f6d1a; text-decoration:none" target="_blank">Data Structure</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">If an array A contains the items 10, 4, 7, 23, 67, 12 and 5 in that order, what will be the resultant array A after third pass of insertion sort?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">67,12,10,5,4,7,23</span>`,
                `<span style="display: inline;">4,7,10,23,67,12,5</span>`,
                `<span style="display: inline;">4,5,7,67,10,12,23</span>`,
                `<span style="display: inline;">10,7,4,67,23,12,5</span>`
            ],
            answer: "B",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/331354/isro2020-33" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/isro-cse-2020" style="color:#2f6d1a; text-decoration:none" target="_blank">ISRO CSE 2020</a> | <a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/data-structure" style="color:#2f6d1a; text-decoration:none" target="_blank">Data Structure</a></div></div>`
        }
    ]
});
