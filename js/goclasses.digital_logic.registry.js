registerTest({
    "name": "DPP 01 - Digital Logic (Number System - Part 1)",
    "testLabel": "DPP 01",
    "testType": "DPP",
    "bracket": "Number System - Part 1",
    "subject": "dl",
    "series": "cse-dpp-2027",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 10,
    "topicsCovered": "Number System (Practice Set 1)",
    "questions": [
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"1784\" data-start=\"1717\">In the following hexadecimal addition, find the digit $x$. $$(4x\\mathrm{D})_{16}+(2\\mathrm{B}7)_{16}=(744)_{16}$$</p></div></span>",
            "image": "",
            "options": [],
            "answer": "8",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"534606\"></a><div itemprop=\"text\"><p data-path-to-node=\"1\">Since the original equation is an addition problem:</p><p>$$(4x\\mathrm{D})_{16} + (2\\mathrm{B}7)_{16} = (744)_{16}$$</p><p data-path-to-node=\"3\">We can rearrange it by isolating the unknown term through subtraction:</p><p>$$(4x\\mathrm{D})_{16} = (744)_{16} - (2\\mathrm{B}7)_{16}$$</p><p data-path-to-node=\"5\">Here is how that exact step-by-step subtraction looks in base $16$ (where we borrow $16$ instead of $10$ or $8$):</p><p data-path-to-node=\"6\">$$\\begin{array}{r@{\\quad}l} (7\\,\\,4\\,\\,4)_{16} \\\\ -\\quad (2\\,\\,\\mathrm{B}\\,7)_{16} \\\\ \\hline \\phantom{+}(4\\,x\\,\\mathrm{D)}_{16} \\end{array}$$</p><ul data-path-to-node=\"8\"><li><p data-path-to-node=\"8,0,0\"><b data-index-in-node=\"0\" data-path-to-node=\"8,0,0\">$\\mathbf{16^0}$ place (Units):</b> $4 - 7$. We cannot do this, so we borrow $1$ from the $16^1$ column.</p><ul data-path-to-node=\"8,0,1\"><li><p data-path-to-node=\"8,0,1,0,0\">The $4$ in the middle column becomes $3$.</p></li><li><p data-path-to-node=\"8,0,1,1,0\">New value: $(4 + 16) - 7 = 20 - 7 = 13$, which is <b data-index-in-node=\"48\" data-path-to-node=\"8,0,1,1,0\">$\\mathrm{D}$</b> in hex.</p></li></ul></li><li><p data-path-to-node=\"8,1,0\"><b data-index-in-node=\"0\" data-path-to-node=\"8,1,0\">$\\mathbf{16^1}$ place:</b> The middle $4$ became $3$ after the borrow. Now we have $3 - \\mathrm{B}$ (remembering that $\\mathrm{B} = 11$). We cannot do this, so we borrow $1$ from the $16^2$ column.</p><ul data-path-to-node=\"8,1,1\"><li><p data-path-to-node=\"8,1,1,0,0\">The $7$ in the leftmost column becomes $6$.</p></li><li><p data-path-to-node=\"8,1,1,1,0\">New value: $(3 + 16) - 11 = 19 - 11 = \\mathbf{8}$.</p></li></ul></li><li><p data-path-to-node=\"8,2,0\"><b data-index-in-node=\"0\" data-path-to-node=\"8,2,0\">$\\mathbf{16^2}$ place:</b> The $7$ became $6$ after the borrow.</p><ul data-path-to-node=\"8,2,1\"><li><p data-path-to-node=\"8,2,1,0,0\">New value: $6 - 2 = \\mathbf{4}$.</p></li></ul></li><li data-path-to-node=\"10\">Putting the columns together, the subtraction gives us:</li></ul><p>$$\\begin{array}{r@{\\quad}l} (7\\,\\,4\\,\\,4)_{16} \\\\ -\\quad (2\\,\\,\\mathrm{B}\\,7)_{16} \\\\ \\hline \\phantom{+}(4\\,\\,8\\,\\mathrm{D)}_{16} \\end{array}$$</p><ul><li data-path-to-node=\"12\">Comparing $(48\\mathrm{D})_{16}$ directly to the term $(4x\\mathrm{D})_{16}$, we get:</li></ul><p>$$\\boxed{x = 8}$$</p><p> </p><p> </p><p> </p><p>$\\underline{\\textbf{Alternative Solution :}}$</p><p data-path-to-node=\"2\">To find the hexadecimal digit $x$, we can perform column-by-column addition from right to left, just like standard decimal addition, but using base-$16$.</p><p data-path-to-node=\"3\">The addition is set up as follows:</p><p>$$\\begin{array}{r@{\\quad}l} \\phantom{+}4\\,\\,x\\,\\mathrm{D}_{16} \\\\ +\\quad 2\\,\\,\\mathrm{B}\\,\\,7_{16} \\\\ \\hline \\phantom{+}7\\,\\,4\\,\\,4_{16} \\end{array}$$</p><p data-path-to-node=\"5\">Step $1:$ <strong>Rightmost Column (Units place)</strong></p><p data-path-to-node=\"6\">We add the digits in the first column on the right:</p><p>$$\\mathrm{D}_{16} + 7_{16}$$</p><p data-path-to-node=\"8\">In decimal, $\\mathrm{D}_{16} = 13_{10}$.</p><p>$$13_{10} + 7_{10} = 20_{10}$$</p><p data-path-to-node=\"10\">To convert $20_{10}$ back to hexadecimal:</p><p>$$20_{10} = 1 \\times 16 + 4 = 14_{16}$$</p><p data-path-to-node=\"12\">We write down the $4$ and carry over $1$ to the next column. This matches the $4$ in the units place of the sum $(744)_{16}$.</p><p data-path-to-node=\"13\">Step $2:$ <strong>Middle Column (Sixteens place)</strong></p><p data-path-to-node=\"14\">We add the carry and the digits in the middle column:</p><p>$$\\text{Carry} + x + \\mathrm{B}_{16}$$</p><p data-path-to-node=\"16\">In decimal, $\\mathrm{B}_{16} = 11_{10}$ and the carry is $1$.</p><p>$$1 + x + 11 = 12 + x$$</p><p data-path-to-node=\"18\">The result in this column is $4$, which means the sum $12 + x$ must end in a $4$ in hexadecimal notation. Since $x$ is a single hexadecimal digit ($0$ to $15$), $12 + x$ must equal $20_{10}$ (which is $14_{16}$, giving a digit of $4$ and a carry of $1$).</p><p data-path-to-node=\"19\">Setting up the equation:</p><p>$$12 + x = 20$$</p><p>$$x = 20 - 12$$</p><p>$$x = 8$$</p><p data-path-to-node=\"23\">Step $3:$ <strong>Leftmost Column (Two-hundred-fiftysixes place)</strong></p><p data-path-to-node=\"24\">Let's verify by adding the leftmost column with the carry of $1$:</p><p>$$\\text{Carry} + 4 + 2 = 1 + 4 + 2 = 7$$</p><p data-path-to-node=\"26\">This perfectly matches the $7$ in the sum $(744)_{16}$.</p><p data-path-to-node=\"27\">Thus, the digit $x$ is <b data-index-in-node=\"21\" data-path-to-node=\"27\">$\\mathbf{8}$</b>.</p></div><br><br><a href=\"https://gateoverflow.in/534602/go-classes-dpp-gate-cs-digital-logic-base-arithmetic#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-digital-logic-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/digital-logic\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Digital Logic - Number System</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"301\" data-start=\"103\">An $8$-bit pattern represents $-45$ in $2$'s complement form. If the same bit pattern is interpreted as a $1$'s complement number, what decimal value does it represent?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$-44$<br/></span>",
                "<span style=\"display: inline;\">$-45$<br/></span>",
                "<span style=\"display: inline;\">$-46$<br/></span>",
                "<span style=\"display: inline;\">$211$</span>"
            ],
            "answer": "A",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"534599\"></a><div itemprop=\"text\"><p data-end=\"464\" data-start=\"388\">First find the $8$-bit $2$'s complement representation of $-45$.</p><p data-end=\"488\" data-start=\"466\">Write $+45$ in binary.</p><p data-end=\"503\" data-start=\"490\">$45=32+8+4+1$</p><p data-end=\"508\" data-start=\"505\">So,</p><p data-end=\"524\" data-start=\"510\">$+45=00101101$</p><p data-end=\"565\" data-start=\"526\">Now take $2$'s complement to get $-45$.</p><p data-end=\"589\" data-start=\"567\">First invert the bits:</p><p data-end=\"622\" data-start=\"591\">$00101101 \\rightarrow 11010010$</p><p data-end=\"636\" data-start=\"624\">Now add $1$:</p><p data-end=\"659\" data-start=\"638\">$11010010+1=11010011$</p><p data-end=\"690\" data-start=\"661\">So, the given bit pattern is:</p><p data-end=\"702\" data-start=\"692\">$11010011$</p><p data-end=\"764\" data-start=\"704\">Now interpret the same bit pattern in $1$'s complement form.</p><p data-end=\"829\" data-start=\"766\">Since the leftmost bit is $1$, it represents a negative number.</p><p data-end=\"912\" data-start=\"831\">In $1$'s complement, to find the magnitude of a negative number, invert all bits.</p><p data-end=\"945\" data-start=\"914\">$11010011 \\rightarrow 00101100$</p><p data-end=\"981\" data-start=\"947\">Now convert $00101100$ to decimal.</p><p data-end=\"1003\" data-start=\"983\">$00101100=32+8+4=44$</p><p data-end=\"1048\" data-start=\"1005\">So, the value in $1$'s complement is $-44$.</p><p data-end=\"1072\" data-is-last-node=\"\" data-is-only-node=\"\" data-start=\"1050\"><strong>Answer: A</strong></p></div><br><br><a href=\"https://gateoverflow.in/534598/go-classes-dpp-gate-cs-digital-logic-representation-change#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-digital-logic-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/digital-logic\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Digital Logic - Number System</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"241\" data-start=\"169\">In the base $8$ subtraction shown below, find the digit $x$.</p><p data-end=\"271\" data-start=\"243\">$$(6251)_8-(3x74)_8=(2555)_8$$</p></div></span>",
            "image": "",
            "options": [],
            "answer": "4",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"534536\"></a><div itemprop=\"text\"><p data-path-to-node=\"2\">To solve the base $8$ (octal) subtraction problem:</p><p>$$(6251)_8 - (3x74)_8 = (2555)_8$$</p><p data-path-to-node=\"4\">We can rearrange the equation to solve for the unknown term $(3x74)_8$:</p><p>$$(3x74)_8 = (6251)_8 - (2555)_8$$</p><p> </p><p data-path-to-node=\"7\">Now, we will perform the subtraction column by column (from right to left) in base $8$. </p><p data-path-to-node=\"7\">Remember that when borrowing, we borrow $8$ (the base) rather than $10$.</p><p data-path-to-node=\"7\"> </p><p data-path-to-node=\"3\">To find $x$, we compute $(6251)_8 - (2555)_8$ in base $8$:</p><p>$$\\begin{array}{r@{\\quad}l} (6251)_8 \\\\ - (2555)_8 \\\\ \\hline \\end{array}$$</p><p><br/>Step-by-step calculation:</p><ul><li><p data-path-to-node=\"6,0,0\"><b data-index-in-node=\"0\" data-path-to-node=\"6,0,0\">Units place:</b> $1 - 5$. We cannot do this, so we borrow $1$ from the $8^1$ column.</p><ul data-path-to-node=\"6,0,1\"><li><p data-path-to-node=\"6,0,1,0,0\">New value: $(1 + 8) - 5 = 4$.</p></li></ul></li><li><p data-path-to-node=\"6,1,0\"><b data-index-in-node=\"0\" data-path-to-node=\"6,1,0\">$\\mathbf{8^1}$ place:</b> The $5$ in the original $6251$ became $4$ after the borrow. Now we have $4 - 5$. We cannot do this, so we borrow $1$ from the $8^2$ column.</p><ul data-path-to-node=\"6,1,1\"><li><p data-path-to-node=\"6,1,1,0,0\">New value: $(4 + 8) - 5 = 7$.</p></li></ul></li><li><p data-path-to-node=\"6,2,0\"><b data-index-in-node=\"0\" data-path-to-node=\"6,2,0\">$\\mathbf{8^2}$ place:</b> The $2$ in the original $6251$ became $1$ after the borrow. Now we have $1 - 5$. We cannot do this, so we borrow $1$ from the $8^3$ column.</p><ul data-path-to-node=\"6,2,1\"><li><p data-path-to-node=\"6,2,1,0,0\">New value: $(1 + 8) - 5 = 4$.</p></li></ul></li><li><p data-path-to-node=\"6,3,0\"><b data-index-in-node=\"0\" data-path-to-node=\"6,3,0\">$\\mathbf{8^3}$ place:</b> The $6$ in the original $6251$ became $5$ after the borrow.</p><ul data-path-to-node=\"6,3,1\"><li><p data-path-to-node=\"6,3,1,0,0\">New value: $5 - 2 = 3$.</p></li></ul></li><li><p data-path-to-node=\"7\">Putting it all together, the result is:</p><p>$$\\begin{array}{r@{\\quad}l} (6251)_8 \\\\ - (2555)_8 \\\\ \\hline (3474)_8 \\end{array}$$</p></li><li><p data-path-to-node=\"13\">Comparing this to the term $(3x74)_8$, we find that:</p><p data-path-to-node=\"14\"><b data-index-in-node=\"0\" data-path-to-node=\"14\">$$\\boxed{x = 4}$$</b></p></li></ul></div><br><br><a href=\"https://gateoverflow.in/534534/go-classes-dpp-gate-cs-digital-logic-base-arithmetic#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-digital-logic-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/digital-logic\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Digital Logic - Number System</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"302\" data-start=\"123\">Consider an $8$-bit signed integer system using $2$’s complement representation. For how many integer values of $x$ does the arithmetic left shift operation $(x &lt;&lt; 1$, i.e left shifting $x$ by $1$ bit) produce a result equivalent to the algebraic value of $2x$?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$64$<br/></span>",
                "<span style=\"display: inline;\">$127$<br/></span>",
                "<span style=\"display: inline;\">$128$<br/></span>",
                "<span style=\"display: inline;\">$129$</span>"
            ],
            "answer": "C",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"534533\"></a><div itemprop=\"text\"><p data-path-to-node=\"7\">An $8$-bit $2$’s complement system can represent integer values in the range:</p><p>$$[-2^{n-1}, 2^{n-1} - 1]$$</p><p data-path-to-node=\"9\">For $n = 8$:</p><p>$$[-2^7, 2^7 - 1] = [-128, 127]$$</p><p data-path-to-node=\"11\"><br/>Now, an arithmetic left shift of a value $x$ by $1$ bit is mathematically equivalent to multiplying $x$ by $2$. For the shift to result in the correct algebraic value ($2x$), the result must not exceed the capacity of the $8$-bit system.</p><p data-path-to-node=\"12\">We define the condition for no overflow (a \"correct\" shift) as:</p><p>$$-128 \\le 2x \\le 127$$</p><p data-path-to-node=\"14\">Divide the entire inequality by $2$:</p><p>$$-64 \\le x \\le 63.5$$</p><p data-path-to-node=\"16\">Since $x$ must be an integer, we truncate the upper bound to the largest integer less than or equal to $63.5$, which is $63$. The lower bound remains $-64$.</p><p data-path-to-node=\"16\">The valid range for $x$ is:</p><p>$$-64 \\le x \\le 63$$</p><p data-path-to-node=\"4,3,0\">Now, the number of integers in the interval $[-64, 63]$ is calculated as:</p><p>$$\\text{Count} = (\\text{Upper Bound} - \\text{Lower Bound}) + 1$$</p><p>$$\\text{Count} = 63 - (-64) + 1 = 63 + 64 + 1 = 128$$</p><p>Therefore, there are $128$ such integer values of $x$.</p></div><br><br><a href=\"https://gateoverflow.in/534530/go-classes-dpp-gate-cs-digital-logic-shift-overflow#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-digital-logic-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/digital-logic\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Digital Logic - Number System</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\">Let $X$ be an $8$-bit integer stored in $2$'s complement representation. If the hexadecimal value of $X$ is given as $(E4)_{16}$, what is the decimal equivalent of the value obtained by performing an arithmetic right shift by $2$ bits on $X$?</div></span>",
            "image": "",
            "options": [],
            "answer": "7",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"534445\"></a><div itemprop=\"text\"><p data-path-to-node=\"22\">First, convert $(E4)_{16}$ to binary: $11100100_2$.</p><p data-path-to-node=\"22\">Because the Most Significant Bit (MSB) is $1$, this is a negative number. To find its magnitude, take the $2$'s complement (invert bits and add 1):</p><p data-path-to-node=\"22\">$00011011 + 1 = 00011100_2 = 28_{10}$. Therefore, $X = -28_{10}$.</p><p data-path-to-node=\"23\">An arithmetic right shift by $2$ bits divides the number by $2^2 = 4$, preserving the sign bit (shifting in $1$s from the left).</p><p data-path-to-node=\"23\">Shift $11100100_2$ right by $2:$</p><p data-path-to-node=\"23\">Result: $11111001_2$</p><p data-path-to-node=\"23\">To find the decimal value of the result, take the $2$'s complement again:</p><p data-path-to-node=\"23\">$00000110 + 1 = 00000111_2 = 7_{10}$.</p><p data-path-to-node=\"23\">Since it's negative, the result is <b data-index-in-node=\"314\" data-path-to-node=\"23\">$-7$</b>.</p></div><br><br><a href=\"https://gateoverflow.in/534444/go-classes-dpp-gate-cs-digital-logic-number-representation#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-digital-logic-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/digital-logic\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Digital Logic - Number System</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\">Consider the valid base conversion equation $(123)_5 = (x8)_y$, where $x$ and $y$ are positive integers. What is the minimum possible decimal value of $x + y$?</div></span>",
            "image": "",
            "options": [],
            "answer": "31",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"534443\"></a><div itemprop=\"text\"><p data-path-to-node=\"5\">First, convert the left side to decimal $($base $10):$</p><p>$$1 \\cdot 5^2 + 2 \\cdot 5^1 + 3 \\cdot 5^0 = 25 + 10 + 3 = 38_{10}$$</p><p data-path-to-node=\"7\">Now, set it equal to the right side evaluated in decimal:</p><p>$$x \\cdot y^1 + 8 \\cdot y^0 = 38 \\implies xy + 8 = 38 \\implies xy = 30$$</p><p data-path-to-node=\"9\">Since the right side contains the digit $8$, the base $y$ must be strictly greater than $8$ ($y &gt; 8$). The positive integer factors of $30$ that are greater than $8$ are $10, 15,$ and $30.$</p><ul data-path-to-node=\"10\"><li><p data-path-to-node=\"10,0,0\">If $y = 10$, then $x = 3$. The sum $x + y = 13$.</p></li><li><p data-path-to-node=\"10,1,0\">If $y = 15$, then $x = 2$. The sum $x + y = 17$.</p></li><li><p data-path-to-node=\"10,2,0\">If $y = 30$, then $x = 1$. The sum $x + y = 31$.</p></li></ul><p data-path-to-node=\"11\">The minimum possible value for $x + y$ is $\\mathbf{13}$.</p></div><br><br><a href=\"https://gateoverflow.in/534442/go-classes-dpp-gate-cs-digital-logic-number-systems#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-digital-logic-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/digital-logic\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Digital Logic - Number System</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"153\" data-start=\"25\">Which of the following exact decimal expressions can be represented in binary notation with a finite number of bits?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$0.84-0.33$<br/></span>",
                "<span style=\"display: inline;\">$0.64-0.015$<br/></span>",
                "<span style=\"display: inline;\">$0.72+0.02$<br/></span>",
                "<span style=\"display: inline;\">$0.45-0.125$</span>"
            ],
            "answer": "A",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"534065\"></a><div itemprop=\"text\"><p data-end=\"378\" data-start=\"224\">A decimal number has a finite binary representation only if, after writing it as a fraction in lowest form, its denominator is a power of $2$.</p><p data-end=\"395\" data-start=\"380\">Check option A:</p><p data-end=\"413\" data-start=\"397\">$0.84-0.33=0.51$</p><p data-end=\"436\" data-start=\"415\">$0.51=\\frac{51}{100}$</p><p data-end=\"463\" data-start=\"438\">Here, $100=2^2\\times5^2$.</p><p data-end=\"556\" data-start=\"465\">Since the denominator contains factor $5$, it does not have a finite binary representation.</p><p data-end=\"586\" data-start=\"558\">So, option A is <strong>not correct.</strong></p><p data-end=\"603\" data-start=\"588\"><br/>Check option B:</p><p data-end=\"623\" data-start=\"605\">$0.64-0.015=0.625$</p><p data-end=\"649\" data-start=\"625\">$0.625=\\frac{625}{1000}$</p><p data-end=\"671\" data-start=\"651\">Reduce the fraction:</p><p data-end=\"703\" data-start=\"673\">$\\frac{625}{1000}=\\frac{5}{8}$</p><p data-end=\"719\" data-start=\"705\">Here, $8=2^3$.</p><p data-end=\"800\" data-start=\"721\">Since the denominator is a power of $2$, it has a finite binary representation.</p><p data-end=\"826\" data-start=\"802\">So, option <strong>B is correct.</strong><br/> </p><p data-end=\"843\" data-start=\"828\">Check option C:</p><p data-end=\"861\" data-start=\"845\">$0.72+0.02=0.74$</p><p data-end=\"898\" data-start=\"863\">$0.74=\\frac{74}{100}=\\frac{37}{50}$</p><p data-end=\"922\" data-start=\"900\">Here, $50=2\\times5^2$.</p><p data-end=\"1015\" data-start=\"924\">Since the denominator contains factor $5$, it does not have a finite binary representation.</p><p data-end=\"1045\" data-start=\"1017\">So, option C is <strong>not correct.</strong><br/> </p><p data-end=\"1062\" data-start=\"1047\">Check option D:</p><p data-end=\"1082\" data-start=\"1064\">$0.45-0.125=0.325$</p><p data-end=\"1122\" data-start=\"1084\">$0.325=\\frac{325}{1000}=\\frac{13}{40}$</p><p data-end=\"1146\" data-start=\"1124\">Here, $40=2^3\\times5$.</p><p data-end=\"1239\" data-start=\"1148\">Since the denominator contains factor $5$, it does not have a finite binary representation.</p><p data-end=\"1269\" data-start=\"1241\">So, option D is <strong>not correct.</strong><br/> </p><p data-end=\"1300\" data-is-last-node=\"\" data-is-only-node=\"\" data-start=\"1271\">Final Answer: <strong>B.</strong></p></div><br><br><a href=\"https://gateoverflow.in/534064/go-classes-dpp-gate-cs-digital-logic-binary-fractions#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-digital-logic-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/digital-logic\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Digital Logic - Number System</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"350\" data-start=\"178\">In a $10$-bit $2$’s complement system, how many bit patterns represent negative integers that are divisible by $8$, not divisible by $16$, and have even parity?</p></div></span>",
            "image": "",
            "options": [],
            "answer": "16",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"534063\"></a><div itemprop=\"text\"><p data-end=\"476\" data-start=\"390\">A $10$-bit $2$’s complement number is negative if its leftmost bit is $1$.</p><p data-end=\"508\" data-start=\"478\">So, the first bit must be $1$.</p><p data-end=\"577\" data-start=\"510\">A binary number is divisible by $8$ if its last $3$ bits are $000$.</p><p data-end=\"615\" data-start=\"579\">So, the last $3$ bits must be $000$.</p><p data-end=\"686\" data-start=\"617\">A binary number is divisible by $16$ if its last $4$ bits are $0000$.</p><p data-end=\"756\" data-start=\"688\">We need numbers that are divisible by $8$ but not divisible by $16$.</p><p data-end=\"802\" data-start=\"758\">Therefore, the last $4$ bits must be $1000$.</p><p data-end=\"828\" data-start=\"804\">So, the pattern becomes:</p><p data-end=\"842\" data-start=\"830\">$1xxxxx1000$</p><p data-end=\"877\" data-start=\"844\">Here, there are $5$ unknown bits.</p><p data-end=\"915\" data-start=\"879\">Now apply the even parity condition.</p><p data-end=\"1002\" data-start=\"917\">Even parity means the total number of $1$s in the full $10$-bit pattern must be even.</p><p data-end=\"1111\" data-start=\"1004\">In $1xxxxx1000$, the fixed bits already contain $2$ ones: one at the sign bit and one in the last $4$ bits.</p><p data-end=\"1197\" data-start=\"1113\">Since $2$ is already even, the $5$ unknown bits must contain an even number of $1$s.</p><p data-end=\"1290\" data-start=\"1199\">The number of $5$-bit patterns with an even number of $1$s is half of all $5$-bit patterns.</p><p data-end=\"1325\" data-start=\"1292\">Total $5$-bit patterns $=2^5=32$.</p><p data-end=\"1359\" data-start=\"1327\">Even-parity patterns $=32/2=16$.</p><p data-end=\"1423\" data-start=\"1361\">Therefore, $16$ bit patterns satisfy all the given conditions.</p></div><br><br><a href=\"https://gateoverflow.in/534062/go-classes-dpp-gate-cs-digital-logic-parity-counting#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-digital-logic-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/digital-logic\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Digital Logic - Number System</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"205\" data-start=\"36\">Which of the following $2$’s complement bit strings represents the smallest decimal value? Each bit string must be interpreted using its own given bit-width.</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$1001011$ as a $7$-bit number<br/></span>",
                "<span style=\"display: inline;\">$11001010$ as an $8$-bit number<br/></span>",
                "<span style=\"display: inline;\">$111000101$ as a $9$-bit number<br/></span>",
                "<span style=\"display: inline;\">$101111$ as a $6$-bit number</span>"
            ],
            "answer": "C",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"534061\"></a><div itemprop=\"text\"><p data-end=\"453\" data-start=\"351\">In an $n$-bit $2$’s complement system, if the leftmost bit is $1$, the number is negative.</p><p data-end=\"525\" data-start=\"455\">For a negative $n$-bit number, signed value $=$ unsigned value $-2^n$.</p><p data-end=\"567\" data-start=\"527\"><br/><strong>A:</strong> $1001011$ is a $7$-bit number.</p><p data-end=\"599\" data-start=\"569\">Unsigned value $=64+8+2+1=75$.</p><p data-end=\"635\" data-start=\"601\">Signed value $=75-2^7=75-128=-53$.</p><p data-end=\"679\" data-start=\"637\"><br/><strong>B:</strong> $11001010$ is an $8$-bit number.</p><p data-end=\"714\" data-start=\"681\">Unsigned value $=128+64+8+2=202$.</p><p data-end=\"752\" data-start=\"716\">Signed value $=202-2^8=202-256=-54$.</p><p data-end=\"796\" data-start=\"754\"><br/><strong>C</strong>: $111000101$ is a $9$-bit number.</p><p data-end=\"835\" data-start=\"798\">Unsigned value $=256+128+64+4+1=453$.</p><p data-end=\"873\" data-start=\"837\">Signed value $=453-2^9=453-512=-59$.</p><p data-end=\"914\" data-start=\"875\"><br/><strong>D:</strong> $101111$ is a $6$-bit number.</p><p data-end=\"948\" data-start=\"916\">Unsigned value $=32+8+4+2+1=47$.</p><p data-end=\"983\" data-start=\"950\">Signed value $=47-2^6=47-64=-17$.</p><p data-end=\"1008\" data-start=\"985\"><br/>Now compare the values:</p><p data-end=\"1049\" data-start=\"1010\">A $=-53$, B $=-54$, C $=-59$, D $=-17$.</p><p data-end=\"1079\" data-start=\"1051\">The smallest value is $-59$.</p><p data-end=\"1130\" data-is-last-node=\"\" data-is-only-node=\"\" data-start=\"1081\"><br/>Final Answer: <strong>C.</strong></p></div><br><br><a href=\"https://gateoverflow.in/534060/go-classes-dpp-gate-cs-digital-logic-twos-complement#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-digital-logic-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/digital-logic\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Digital Logic - Number System</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\">A $12$-bit $2$’s complement number has hexadecimal representation $(B6D)_H$. This number is sign-extended to $16$ bits and then arithmetic right-shifted by $2$ positions. What is the final decimal value?</div></span>",
            "image": "",
            "options": [],
            "answer": "293",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"534059\"></a><div itemprop=\"text\"><p data-end=\"468\" data-start=\"420\">First convert $(B6D)_H$ into binary.</p><p data-end=\"498\" data-start=\"470\">$(B6D)_H=1011,0110,1101_2$</p><p data-end=\"526\" data-start=\"500\">This is a $12$-bit number.</p><p data-end=\"608\" data-start=\"528\">The leftmost bit is $1$, so the number is negative in $12$-bit $2$’s complement.</p><p data-end=\"646\" data-start=\"610\">Now find its unsigned decimal value.</p><p data-end=\"683\" data-start=\"648\">$(B6D)_H=11\\times16^2+6\\times16+13$</p><p data-end=\"705\" data-start=\"685\">$=11\\times256+96+13$</p><p data-end=\"720\" data-start=\"707\">$=2816+96+13$</p><p data-end=\"729\" data-start=\"722\">$=2925$</p><p data-end=\"791\" data-start=\"731\">For a $12$-bit system, total bit patterns are $2^{12}=4096$.</p><p data-end=\"835\" data-start=\"793\">So, the signed value is $2925-4096=-1171$.</p><p data-end=\"955\" data-start=\"837\">Now the number is sign-extended to $16$ bits. Sign extension does not change the value, so the value is still $-1171$.</p><p data-end=\"1054\" data-start=\"957\">Now arithmetic right shift by $2$ positions means dividing by $2^2=4$, while preserving the sign.</p><p data-end=\"1076\" data-start=\"1056\">$-1171\\div4=-292.75$</p><p data-end=\"1192\" data-start=\"1078\">For arithmetic right shift of a negative $2$’s complement number, the result moves toward the lower integer value.</p><p data-end=\"1224\" data-start=\"1194\">So, the final value is $-293$.</p></div><br><br><a href=\"https://gateoverflow.in/534058/go-classes-dpp-gate-cs-digital-logic-signed-bit-operations#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-digital-logic-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/digital-logic\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Digital Logic - Number System</a></b></div></div>"
        }
    ]
});

registerTest({
    "name": "DPP 02 - Digital Logic (Number System - Part 2)",
    "testLabel": "DPP 02",
    "testType": "DPP",
    "bracket": "Number System - Part 2",
    "subject": "dl",
    "series": "cse-dpp-2027",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 11,
    "topicsCovered": "Number System (Practice Set 2)",
    "questions": [
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"122\" data-start=\"56\">Suppose we have two $16$-bit $2$’s complement numbers:</p><p data-end=\"142\" data-start=\"124\">$$101xx101101xxxxx$$</p><p data-end=\"162\" data-start=\"144\">$$1101101xx11xxxxx$$</p><p data-end=\"238\" data-start=\"164\">Here, each $x$ is an independent unknown bit and can be either $0$ or $1$.</p><p data-end=\"371\" data-start=\"240\">Could the sum of these two numbers possibly result in an overflow? If yes, write $1$ in the answer. If no, write $0$ in the answer.</p></div></span>",
            "image": "",
            "options": [],
            "answer": "0",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"534057\"></a><div itemprop=\"text\"><p data-end=\"463\" data-start=\"373\">In $16$-bit $2$’s complement representation, the range is $-32768$ to $32767$.</p><p data-end=\"526\" data-start=\"465\">Both numbers have sign bit $1$, so both numbers are negative.</p><p data-end=\"624\" data-start=\"528\">Overflow in addition of two negative numbers happens only if the sum becomes less than $-32768$.</p><p data-end=\"696\" data-start=\"626\">Now we need to check the most negative possible value of both numbers.</p><p data-end=\"871\" data-start=\"698\">For a negative $2$’s complement number, the value becomes most negative when the remaining bits are as small as possible. So, to get the most negative case, put every $x=0$.</p><p data-end=\"894\" data-start=\"873\">First number becomes:</p><p data-end=\"914\" data-start=\"896\">$1010010110100000$</p><p data-end=\"947\" data-start=\"916\">This is unsigned value $42400$.</p><p data-end=\"1013\" data-start=\"949\">So, its $16$-bit $2$’s complement value is $42400-65536=-23136$.</p><p data-end=\"1037\" data-start=\"1015\">Second number becomes:</p><p data-end=\"1057\" data-start=\"1039\">$1101101001100000$</p><p data-end=\"1090\" data-start=\"1059\">This is unsigned value $55904$.</p><p data-end=\"1155\" data-start=\"1092\">So, its $16$-bit $2$’s complement value is $55904-65536=-9632$.</p><p data-end=\"1199\" data-start=\"1157\">Now add the most negative possible values:</p><p data-end=\"1224\" data-start=\"1201\">$-23136+(-9632)=-32768$</p><p data-end=\"1336\" data-start=\"1226\">The minimum possible sum is exactly $-32768$, which is still inside the valid $16$-bit $2$’s complement range.</p><p data-end=\"1493\" data-start=\"1338\">If any $x$ becomes $1$, the unsigned value increases, so the negative number becomes less negative. Therefore, the sum cannot become smaller than $-32768$.</p><p data-end=\"1524\" data-start=\"1495\">So, overflow is not possible.</p><p data-end=\"1543\" data-is-last-node=\"\" data-is-only-node=\"\" data-start=\"1526\">Final Answer: $0$</p></div><br><br><a href=\"https://gateoverflow.in/534056/go-classes-dpp-gate-cs-digital-logic-twos-complement-overflow#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-digital-logic-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/digital-logic\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Digital Logic - Number System</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\">Find the base $r$ if $(132)_r+(45)_r=(221)_r$</div></span>",
            "image": "",
            "options": [],
            "answer": "6",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"533907\"></a><div itemprop=\"text\"><p data-end=\"204\" data-start=\"144\">First convert each number into decimal form.</p><p data-end=\"225\" data-start=\"206\">$$(132)_r=r^2+3r+2$$</p><p data-end=\"250\" data-start=\"227\">$$(45)_r=4r+5$$</p><p data-end=\"286\" data-start=\"267\">$$(221)_r=2r^2+2r+1$$</p><p data-end=\"315\" data-start=\"288\">Now use the given equation:</p><p data-end=\"341\" data-start=\"317\">$$(132)_r+(45)_r=(221)_r$$</p><p data-end=\"346\" data-start=\"343\">$$\\Rightarrow r^2+3r+2+4r+5=2r^2+2r+1$$</p><p data-end=\"398\" data-start=\"375\">Simplify the left side:</p><p data-end=\"420\" data-start=\"400\">$$\\Rightarrow r^2+7r+7=2r^2+2r+1$$</p><p data-end=\"450\" data-start=\"422\">Bring all terms to one side:</p><p data-end=\"474\" data-start=\"452\">$$\\Rightarrow 0=2r^2+2r+1-r^2-7r-7$$</p><p data-end=\"488\" data-start=\"476\">$$\\Rightarrow 0=r^2-5r-6$$</p><p data-end=\"493\" data-start=\"490\">$$\\Rightarrow r^2-5r-6=0$$</p><p data-end=\"519\" data-start=\"509\">Factorize:</p><p data-end=\"535\" data-start=\"521\">$$\\Rightarrow (r-6)(r+1)=0$$</p><p data-end=\"547\" data-start=\"537\">$$\\Rightarrow r=6 \\quad \\text{ or } \\quad r=-1$$</p><p data-end=\"605\" data-start=\"566\">Since a base cannot be negative, $r=6$.</p><p data-end=\"632\" data-start=\"607\">Now check digit validity.</p><p data-end=\"702\" data-start=\"634\">The largest digit used is $5$, so the base must be greater than $5$.</p><p data-end=\"729\" data-start=\"704\">Since $r=6$, it is valid.</p><p data-end=\"754\" data-is-last-node=\"\" data-is-only-node=\"\" data-start=\"731\"><strong data-end=\"748\" data-start=\"731\">Final Answer:</strong> $\\boxed{r=6}$</p></div><br><br><a href=\"https://gateoverflow.in/533906/go-classes-dpp-gate-cs-digital-logic-base-conversion#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-digital-logic-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/digital-logic\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Digital Logic - Number System</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"268\" data-start=\"33\">A controller has to send one of $45$ possible status messages. Each message is encoded using a fixed-length binary code. What is the minimum number of bits required, and how many binary code patterns will remain unused?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$5$ bits, $13$ unused patterns<br/></span>",
                "<span style=\"display: inline;\">$6$ bits, $19$ unused patterns<br/></span>",
                "<span style=\"display: inline;\">$6$ bits, $18$ unused patterns<br/></span>",
                "<span style=\"display: inline;\">$7$ bits, $83$ unused patterns</span>"
            ],
            "answer": "B",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"533905\"></a><div itemprop=\"text\"><p data-end=\"530\" data-start=\"415\">To represent $45$ possible values, we need the smallest number of bits $n$ such that $2^n \\geq 45$.</p><p data-end=\"556\" data-start=\"532\">Now check powers of $2$.</p><p data-end=\"573\" data-start=\"558\">Using $5$ bits:</p><p data-end=\"583\" data-start=\"575\">$2^5=32$</p><p data-end=\"624\" data-start=\"585\">Since $32&lt;45$, $5$ bits are not enough.</p><p data-end=\"641\" data-start=\"626\">Using $6$ bits:</p><p data-end=\"651\" data-start=\"643\">$2^6=64$</p><p data-end=\"691\" data-start=\"653\">Since $64\\geq45$, $6$ bits are enough.</p><p data-end=\"740\" data-start=\"693\">So, the minimum number of bits required is $6$.</p><p data-end=\"781\" data-start=\"742\">Now find the number of unused patterns.</p><p data-end=\"819\" data-start=\"783\">Total patterns using $6$ bits $=64$.</p><p data-end=\"845\" data-start=\"821\">Required patterns $=45$.</p><p data-end=\"875\" data-start=\"847\">Unused patterns $=64-45=19$.</p><p data-end=\"974\" data-start=\"877\">Therefore, the minimum number of bits required is $6$, and the number of unused patterns is $19$.</p><p data-end=\"1027\" data-is-last-node=\"\" data-is-only-node=\"\" data-start=\"976\"><strong data-end=\"993\" data-start=\"976\">Answer:</strong> <strong>B.</strong> $6$ bits, $19$ unused patterns</p></div><br><br><a href=\"https://gateoverflow.in/533904/go-classes-dpp-gate-cs-digital-logic-minimum-bit-encoding#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-digital-logic-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/digital-logic\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Digital Logic - Number System</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"415\" data-start=\"245\">What is the minimum number of bits required to represent $-92$ in $2$’s complement form, and what is its representation using that minimum number of bits?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$7$ bits, $0100100$<br/></span>",
                "<span style=\"display: inline;\">$8$ bits, $10100100$<br/></span>",
                "<span style=\"display: inline;\">$7$ bits, not representable<br/></span>",
                "<span style=\"display: inline;\">$8$ bits, $11011100$</span>"
            ],
            "answer": "B",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"533903\"></a><div itemprop=\"text\"><p data-end=\"621\" data-start=\"526\">For an $n$-bit $2$’s complement system, the range is $-2^{n-1}$ to $2^{n-1}-1$.</p><p data-end=\"677\" data-start=\"623\">Check whether $-92$ can be represented using $7$ bits.</p><p data-end=\"748\" data-start=\"679\">For $7$ bits, the range is $-2^6$ to $2^6-1$, which is $-64$ to $63$.</p><p data-end=\"810\" data-start=\"750\">Since $-92&lt;-64$, $-92$ cannot be represented using $7$ bits.</p><p data-end=\"831\" data-start=\"812\">Now check $8$ bits.</p><p data-end=\"904\" data-start=\"833\">For $8$ bits, the range is $-2^7$ to $2^7-1$, which is $-128$ to $127$.</p><p data-end=\"992\" data-start=\"906\">Since $-92$ lies between $-128$ and $127$, the minimum number of bits required is $8$.</p><p data-end=\"1028\" data-start=\"994\">Now write $+92$ in $8$-bit binary.</p><p data-end=\"1044\" data-start=\"1030\">$92=64+16+8+4$</p><p data-end=\"1064\" data-start=\"1046\">So, $92=01011100$.</p><p data-end=\"1106\" data-start=\"1066\">To get $-92$, take the $2$’s complement.</p><p data-end=\"1124\" data-start=\"1108\">Invert the bits:</p><p data-end=\"1157\" data-start=\"1126\">$01011100 \\rightarrow 10100011$</p><p data-end=\"1167\" data-start=\"1159\">Add $1$:</p><p data-end=\"1190\" data-start=\"1169\">$10100011+1=10100100$</p><p data-end=\"1277\" data-start=\"1192\">So, the minimum number of bits required is $8$, and the representation is $10100100$.</p><p data-end=\"1320\" data-is-last-node=\"\" data-is-only-node=\"\" data-start=\"1279\"><strong data-end=\"1296\" data-start=\"1279\">Final Answer:</strong> <strong>B.</strong></p></div><br><br><a href=\"https://gateoverflow.in/533902/go-classes-dpp-gate-cs-digital-logic-twos-complement-encoding#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-digital-logic-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/digital-logic\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Digital Logic - Number System</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"169\" data-start=\"34\">What decimal value is represented by the following $8$-bit $2$’s complement bit pattern, given in hexadecimal notation?</p><p data-end=\"203\" data-start=\"171\">$$A7_{16}=\\_\\_\\_\\_\\_\\_\\_\\__{10}$$</p></div></span>",
            "image": "",
            "options": [],
            "answer": "-89",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"533900\"></a><div itemprop=\"text\"><p data-end=\"270\" data-start=\"205\">First convert the hexadecimal number into binary.</p><p data-end=\"308\" data-start=\"272\">$A_{16}=1010_2$ and $7_{16}=0111_2$.</p><p data-end=\"335\" data-start=\"310\">So, $A7_{16}=10100111_2$.</p><p data-end=\"429\" data-start=\"337\">Since this is an $8$-bit $2$’s complement number and the MSB is $1$, the number is negative.</p><p data-end=\"494\" data-start=\"431\">To find its magnitude, take the $2$’s complement of $10100111$.</p><p data-end=\"518\" data-start=\"496\">First invert all bits:</p><p data-end=\"551\" data-start=\"520\">$10100111 \\rightarrow 01011000$</p><p data-end=\"565\" data-start=\"553\">Now add $1$:</p><p data-end=\"588\" data-start=\"567\">$01011000+1=01011001$</p><p data-end=\"628\" data-start=\"590\">Now convert $01011001_2$ into decimal:</p><p data-end=\"655\" data-start=\"630\">$01011001_2=64+16+8+1=89$</p><p data-end=\"683\" data-start=\"657\">So, the magnitude is $89$.</p><p data-end=\"752\" data-start=\"685\">Since the original number was negative, the decimal value is $-89$.</p><p data-end=\"777\" data-is-last-node=\"\" data-is-only-node=\"\" data-start=\"754\"><strong data-end=\"771\" data-start=\"754\">Final Answer:</strong> $\\boxed{-89}$</p></div><br><br><a href=\"https://gateoverflow.in/533899/go-classes-dpp-gate-cs-digital-logic-hex-signed-conversion#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-digital-logic-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/digital-logic\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Digital Logic - Number System</a></b></div></div>"
        },
        {
            "marks": 2,
            "neg": 0,
            "type": "MSQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"224\" data-start=\"114\">In a $5$-bit $2$’s complement system, which of the following additions result in overflow?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$11+9$<br/></span>",
                "<span style=\"display: inline;\">$-13+(-7)$<br/></span>",
                "<span style=\"display: inline;\">$14+(-6)$<br/></span>",
                "<span style=\"display: inline;\">$-9+12$</span>"
            ],
            "answer": "A",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"533898\"></a><div itemprop=\"text\"><p data-path-to-node=\"1\">The range of an $n$-bit $2$’s complement system is given by the formula:</p><p data-path-to-node=\"1\">$[-2^{n-1}, 2^{n-1} - 1]$</p><p data-path-to-node=\"2\">For $n = 5$:</p><ul data-path-to-node=\"3\"><li><p data-path-to-node=\"3,0,0\">Minimum value: $-2^{5-1} = -2^4 = -16$</p></li><li><p data-path-to-node=\"3,1,0\">Maximum value: $2^{5-1} - 1 = 2^4 - 1 = 16 - 1 = 15$</p></li></ul><p data-path-to-node=\"4\">So, a $5$-bit $2$'s complement system can represent any integer from <b data-index-in-node=\"65\" data-path-to-node=\"4\">$-16$ to $15$</b>. An overflow occurs if the true algebraic sum of the numbers falls outside this range.</p><p data-path-to-node=\"5\">Let's evaluate each option:</p><p data-path-to-node=\"6\"><b data-index-in-node=\"0\" data-path-to-node=\"6\">A. $11 + 9$</b></p><ul data-path-to-node=\"7\"><li><p data-path-to-node=\"7,0,0\">Sum: $11 + 9 = 20$</p></li><li><p data-path-to-node=\"7,1,0\">Since $20 &gt; 15$, this sum exceeds the maximum representable value.</p></li><li><p data-path-to-node=\"7,2,0\"><b data-index-in-node=\"0\" data-path-to-node=\"7,2,0\">Result: Overflow</b></p></li></ul><p data-path-to-node=\"8\"><b data-index-in-node=\"0\" data-path-to-node=\"8\">B. $-13 + (-7)$</b></p><ul data-path-to-node=\"9\"><li><p data-path-to-node=\"9,0,0\">Sum: $-13 - 7 = -20$</p></li><li><p data-path-to-node=\"9,1,0\">Since $-20 &lt; -16$, this sum is less than the minimum representable value.</p></li><li><p data-path-to-node=\"9,2,0\"><b data-index-in-node=\"0\" data-path-to-node=\"9,2,0\">Result: Overflow</b></p></li></ul><p data-path-to-node=\"10\"><b data-index-in-node=\"0\" data-path-to-node=\"10\">C. $14 + (-6)$</b></p><ul data-path-to-node=\"11\"><li><p data-path-to-node=\"11,0,0\">Sum: $14 - 6 = 8$</p></li><li><p data-path-to-node=\"11,1,0\">Since $8$ is within the range $[-16, 15]$, it can be perfectly represented. (Note: Adding a positive and a negative number can never cause an overflow).</p></li><li><p data-path-to-node=\"11,2,0\"><b data-index-in-node=\"0\" data-path-to-node=\"11,2,0\">Result: No Overflow</b></p></li></ul><p data-path-to-node=\"12\"><b data-index-in-node=\"0\" data-path-to-node=\"12\">D. $-9 + 12$</b></p><ul data-path-to-node=\"13\"><li><p data-path-to-node=\"13,0,0\">Sum: $-9 + 12 = 3$</p></li><li><p data-path-to-node=\"13,1,0\">Since $3$ is within the range $[-16, 15]$, it can be perfectly represented.</p></li><li><p data-path-to-node=\"13,2,0\"><b data-index-in-node=\"0\" data-path-to-node=\"13,2,0\">Result: No Overflow</b></p></li></ul></div><br><br><a href=\"https://gateoverflow.in/533896/go-classes-dpp-gate-cs-digital-logic-overflow-detection#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-digital-logic-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/digital-logic\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Digital Logic - Number System</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\">The smallest integer that can be represented using a $12$-bit number in $2$’s complement form is</div></span>",
            "image": "",
            "options": [],
            "answer": "2048",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"533748\"></a><div itemprop=\"text\"><p data-end=\"254\" data-start=\"154\">For an $n$-bit $2$’s complement number, the range is from $-2^{n-1}$ to $2^{n-1}-1$.</p><p data-end=\"269\" data-start=\"256\">Here, $n=12$.</p><p data-end=\"325\" data-start=\"271\">So, the smallest representable integer is $-2^{12-1}$.</p><p data-end=\"345\" data-start=\"327\">That is $-2^{11}$.</p><p data-end=\"366\" data-start=\"347\">Now, $2^{11}=2048$.</p><p data-end=\"411\" data-start=\"368\">Therefore, the smallest integer is $-2048$.</p><p data-end=\"438\" data-is-last-node=\"\" data-is-only-node=\"\" data-start=\"413\"><strong data-end=\"430\" data-start=\"413\">Final Answer:</strong> $-2048$</p></div><br><br><a href=\"https://gateoverflow.in/533747/go-classes-dpp-gate-cs-digital-logic-signed-number-range#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-digital-logic-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/digital-logic\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Digital Logic - Number System</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"320\" data-start=\"206\">An $8$-bit $2$’s complement number is given as $10010110$. Find its decimal value.</p></div></span>",
            "image": "",
            "options": [],
            "answer": "106",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"533746\"></a><div itemprop=\"text\"><p data-path-to-node=\"2\"><strong>Method $\\mathbf{1}:$ The Place Value (Positional Weight) Method</strong></p><p data-path-to-node=\"3\">In $2$'s complement, the most significant bit (MSB) has a negative weight, while all other bits have their standard positive weights. For an $8$-bit number, the weights from left to right are:</p><p data-path-to-node=\"3\">$-128,\\ 64,\\ 32,\\ 16,\\ 8,\\ 4,\\ 2,\\ 1$.</p><p data-path-to-node=\"4\">Matching our binary number to these weights:</p><ul data-path-to-node=\"5\"><li><p data-path-to-node=\"5,0,0\">$\\mathbf{1} \\times (-128) = -128$</p></li><li><p data-path-to-node=\"5,1,0\">$\\mathbf{0} \\times 64 = 0$</p></li><li><p data-path-to-node=\"5,2,0\">$\\mathbf{0} \\times 32 = 0$</p></li><li><p data-path-to-node=\"5,3,0\">$\\mathbf{1} \\times 16 = 16$</p></li><li><p data-path-to-node=\"5,4,0\">$\\mathbf{0} \\times 8 = 0$</p></li><li><p data-path-to-node=\"5,5,0\">$\\mathbf{1} \\times 4 = 4$</p></li><li><p data-path-to-node=\"5,6,0\">$\\mathbf{1} \\times 2 = 2$</p></li><li><p data-path-to-node=\"5,7,0\">$\\mathbf{0} \\times 1 = 0$</p></li></ul><p data-path-to-node=\"6\">Now, sum the values:</p><p data-path-to-node=\"6\">$-128 + 16 + 4 + 2 = \\mathbf{-106}$</p><p data-path-to-node=\"6\"> </p><p data-path-to-node=\"6\"> </p><p data-path-to-node=\"8\"><strong>Method $\\mathbf{2}:$ The Invert and Add $\\mathbf{1}$ Method (Finding the Magnitude)</strong></p><p data-path-to-node=\"9\">Because the leftmost bit is a <code data-index-in-node=\"30\" data-path-to-node=\"9\">1</code>, we know the number is negative. To find out its exact magnitude, we can reverse the $2$'s complement process:</p><p data-path-to-node=\"10\"><b data-index-in-node=\"0\" data-path-to-node=\"10\">Step </b><strong>$\\mathbf{1}:$</strong><b data-index-in-node=\"0\" data-path-to-node=\"10\"> Find the $\\mathbf{1}$’s complement</b></p><p data-path-to-node=\"10\">Invert every bit (change $0$s to $1$s, and $1$s to $0$s).</p><p data-path-to-node=\"10\">Original$: 10010110$</p><p data-path-to-node=\"10\">Inverted$: 01101001$</p><p data-path-to-node=\"11\"><b data-index-in-node=\"0\" data-path-to-node=\"11\">Step </b><strong>$\\mathbf{2}:$</strong><b data-index-in-node=\"0\" data-path-to-node=\"11\"> Add </b><strong>$\\mathbf{1}$</strong></p><p data-path-to-node=\"11\">Add $1$ to the inverted result to find the positive magnitude.</p><p>$$01101001 + 1 = \\mathbf{01101010}$$</p><p data-path-to-node=\"13\"><b data-index-in-node=\"0\" data-path-to-node=\"13\">Step </b><strong>$\\mathbf{3}:$</strong><b data-index-in-node=\"0\" data-path-to-node=\"13\"> Convert the result to decimal</b></p><p data-path-to-node=\"13\">Convert the positive binary number $01101010$ to decimal:</p><p data-path-to-node=\"13\">$$64 + 32 + 8 + 2 = 106$$</p><p data-path-to-node=\"14\">Since we knew from the beginning that the original number was negative, we add the negative sign back, giving us <b data-index-in-node=\"113\" data-path-to-node=\"14\">$\\mathbf{-106}$</b>.</p></div><br><br><a href=\"https://gateoverflow.in/533745/go-classes-dpp-gate-cs-digital-logic-signed-binary-arithmetic#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-digital-logic-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/digital-logic\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Digital Logic - Number System</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"169\" data-start=\"30\">Given that $A$ and $B$ are two $8$-bit $2$’s complement numbers where $A=10000001$ and $B=11111110$, then the sum $A+B$ is:</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$01111111$<br/></span>",
                "<span style=\"display: inline;\">$10000011$<br/></span>",
                "<span style=\"display: inline;\">$01111101$<br/></span>",
                "<span style=\"display: inline;\">$11111111$</span>"
            ],
            "answer": "A",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"533744\"></a><div itemprop=\"text\"><p data-path-to-node=\"0\">To find the sum of the two $8$-bit $2$'s complement numbers $A$ and $B$, we can perform standard binary addition and discard any carry that exceeds the $8$th bit (since we are restricted to an 8-bit system).</p><p data-path-to-node=\"1\">Here are the numbers:</p><p data-path-to-node=\"1\">$A = 10000001$</p><p data-path-to-node=\"1\">$B = 11111110$</p><p data-path-to-node=\"2\">Let's align them and add them bit by bit:</p><p>$$\\begin{array}{@{}c@{\\quad}cccccccc} &amp; 1 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 1 \\\\ + &amp; 1 &amp; 1 &amp; 1 &amp; 1 &amp; 1 &amp; 1 &amp; 1 &amp; 0 \\\\ \\hline \\mathbf{1} &amp; \\mathbf{0} &amp; \\mathbf{1} &amp; \\mathbf{1} &amp; \\mathbf{1} &amp; \\mathbf{1} &amp; \\mathbf{1} &amp; \\mathbf{1} &amp; \\mathbf{1} \\end{array}$$</p><p data-path-to-node=\"4\">The result of the binary addition is $101111111$, which is $9$ bits long. Because this is an 8-bit system, we discard the most significant bit (the carry-out bit).</p><p data-path-to-node=\"5\">The remaining $8$ bits give us:</p><p data-path-to-node=\"5\"><b data-index-in-node=\"30\" data-path-to-node=\"5\">$01111111$</b></p><p data-path-to-node=\"6\"><i data-index-in-node=\"0\" data-path-to-node=\"6\">(<strong>Note:</strong> If you look at their decimal values, $A = -127$ and $B = -2$. Their true sum is $-129$, which falls outside the valid 8-bit 2's complement range of $-128$ to $+127$. This means an overflow occurred, which is why the addition of two negative numbers resulted in a positive binary representation. However, the hardware simply performs the binary addition and truncates the carry, giving the 8-bit result).</i></p><p data-path-to-node=\"7\">The correct option is <b data-index-in-node=\"22\" data-path-to-node=\"7\">A. $01111111$</b>.</p></div><br><br><a href=\"https://gateoverflow.in/533743/go-classes-dpp-gate-cs-digital-logic-binary-arithmetic#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-digital-logic-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/digital-logic\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Digital Logic - Number System</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"182\" data-start=\"41\">In an $n$-bit signed number system, zero has exactly $2$ different representations in which of the following representations?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">Sign-magnitude and $1$’s complement only<br/></span>",
                "<span style=\"display: inline;\">$2$’s complement and excess-$2^{n-1}$ only<br/></span>",
                "<span style=\"display: inline;\">Sign-magnitude and $2$’s complement only<br/></span>",
                "<span style=\"display: inline;\">$1$’s complement and excess-$2^{n-1}$ only</span>"
            ],
            "answer": "A",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"533741\"></a><div itemprop=\"text\"><p data-path-to-node=\"3\">In sign-magnitude representation, the most significant bit (MSB) acts as the sign bit ($0$ for positive, $1$ for negative), and the remaining $n-1$ bits represent the magnitude.</p><p data-path-to-node=\"3\">Because zero has a magnitude of zero, the sign bit can be either positive or negative, resulting in two valid representations:</p><ul data-path-to-node=\"4\"><li><p data-path-to-node=\"4,0,0\"><b data-index-in-node=\"0\" data-path-to-node=\"4,0,0\">Positive Zero ($+0$):</b> $000\\dots0$</p></li><li><p data-path-to-node=\"4,1,0\"><b data-index-in-node=\"0\" data-path-to-node=\"4,1,0\">Negative Zero ($-0$):</b> $100\\dots0$</p></li></ul><div> </div><div><p data-path-to-node=\"6\">In $1$'s complement, positive numbers are represented in standard binary, and negative numbers are formed by flipping every bit (changing $0$s to $1$s and vice versa) of the corresponding positive number.</p><ul data-path-to-node=\"7\"><li><p data-path-to-node=\"7,0,0\"><b data-index-in-node=\"0\" data-path-to-node=\"7,0,0\">Positive Zero ($+0$):</b> $000\\dots0$</p></li><li><p data-path-to-node=\"7,1,0\">Inverting all the bits to get the negative equivalent gives us <b data-index-in-node=\"63\" data-path-to-node=\"7,1,0\">Negative Zero ($-0$):</b> $111\\dots1$</p></li></ul><div> </div></div><div><p data-path-to-node=\"9\">In $2$'s complement, negative numbers are formed by taking the $1$'s complement and adding $1$.</p><ul data-path-to-node=\"10\"><li><p data-path-to-node=\"10,0,0\"><b data-index-in-node=\"0\" data-path-to-node=\"10,0,0\">Positive Zero ($+0$):</b> $000\\dots0$</p></li><li><p data-path-to-node=\"10,1,0\">If we take the $1$'s complement of zero ($111\\dots1$) and add $1$, it overflows the $n$-bit register. The carry bit is discarded, leaving us right back at $000\\dots0$. Therefore, $2$'s complement has only <b data-index-in-node=\"189\" data-path-to-node=\"10,1,0\">one</b> unique representation for zero.</p></li></ul><div> </div></div><div><p data-path-to-node=\"12\">In an excess-$K$ (or biased) representation, a fixed value $K$ (in this case, $K = 2^{n-1}$) is added to the actual number to get the stored integer.</p><ul data-path-to-node=\"13\"><li><p data-path-to-node=\"13,0,0\">To represent $0$, the system stores the binary equivalent of $0 + 2^{n-1}$.</p></li><li><p data-path-to-node=\"13,1,0\">Because every number maps to exactly one unique binary sequence through this simple addition, there is only <b data-index-in-node=\"108\" data-path-to-node=\"13,1,0\">one</b> representation for zero.</p></li></ul></div></div><br><br><a href=\"https://gateoverflow.in/533739/go-classes-dpp-gate-cs-digital-logic-signed-number-representation#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-digital-logic-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/digital-logic\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Digital Logic - Number System</a></b></div></div>"
        }
    ]
});

registerTest({
    "name": "DPP 03 - Digital Logic (Number System - Part 3)",
    "testLabel": "DPP 03",
    "testType": "DPP",
    "bracket": "Number System - Part 3",
    "subject": "dl",
    "series": "cse-dpp-2027",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 10,
    "topicsCovered": "Number System (Practice Set 3)",
    "questions": [
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\">Let $X$ be the number of distinct $12$-bit integers representable in $2$’s complement form. Let $Y$ be the number of distinct $12$-bit integers representable in $1$’s complement form. Let $Z$ be the number of distinct $12$-bit integers representable in sign-magnitude form. Then find $X-Y-Z$.</div></span>",
            "image": "",
            "options": [],
            "answer": "1",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"533738\"></a><div itemprop=\"text\"><p data-path-to-node=\"2\"><b data-index-in-node=\"0\" data-path-to-node=\"2\">$\\mathbf{2}$'s Complement Form ($X$)</b></p><p data-path-to-node=\"2\">In $2$'s complement, there is only one representation for zero. The range of representable integers is from $-2^{n-1}$ to $2^{n-1} - 1$.</p><ul data-path-to-node=\"3\"><li><p data-path-to-node=\"3,0,0\">Range for $12$ bits: $-2^{11}$ to $2^{11} - 1$ (which is $-2048$ to $2047$)</p></li><li><p data-path-to-node=\"3,1,0\">Total number of distinct integers ($X$): $2047 - (-2048) + 1 = 4096$</p></li></ul><p data-path-to-node=\"4\"><br/><b data-index-in-node=\"0\" data-path-to-node=\"4\">$\\mathbf{1}$'s Complement Form ($Y$)</b></p><p data-path-to-node=\"4\">In $1$'s complement, there are two representations for zero ($+0$ and $-0$). As a result, the range of representable integers is reduced by one at the negative end: $-(2^{n-1} - 1)$ to $2^{n-1} - 1$.</p><ul data-path-to-node=\"5\"><li><p data-path-to-node=\"5,0,0\">Range for $12$ bits: $-(2^{11} - 1)$ to $2^{11} - 1$ (which is $-2047$ to $2047$)</p></li><li><p data-path-to-node=\"5,1,0\">Total number of distinct integers ($Y$): $2047 - (-2047) + 1 = 4095$</p></li></ul><p data-path-to-node=\"6\"><br/><b data-index-in-node=\"0\" data-path-to-node=\"6\">Sign-Magnitude Form ($Z$)</b></p><p data-path-to-node=\"6\">Similar to $1$'s complement, sign-magnitude also has two representations for zero ($+0$ and $-0$, where the sign bit is different but the magnitude is zero). The range of integers is identical to $1$'s complement: $-(2^{n-1} - 1)$ to $2^{n-1} - 1$.</p><ul data-path-to-node=\"7\"><li><p data-path-to-node=\"7,0,0\">Range for $12$ bits: $-2047$ to $2047$</p></li><li><p data-path-to-node=\"7,1,0\">Total number of distinct integers ($Z$): $2047 - (-2047) + 1 = 4095$</p></li></ul><p data-path-to-node=\"8\"><br/><b data-index-in-node=\"0\" data-path-to-node=\"8\">Calculating $X - Y - Z$:</b></p><p data-path-to-node=\"8\">Now we substitute the values we found:</p><p>$$\\Rightarrow X - Y - Z = 4096 - 4095 - 4095$$</p><p>$$\\Rightarrow X - Y - Z = 1 - 4095$$</p><p>$$\\boxed{\\therefore X - Y - Z = -4094}$$</p></div><br><br><a href=\"https://gateoverflow.in/533737/go-classes-dpp-gate-cs-digital-logic-signed-number-representation#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-digital-logic-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/digital-logic\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Digital Logic - Number System</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>When adding two 8-bit signed 2's complement numbers, $A=01001000$ and $B=01010000$, what happens to the output?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">An arithmetic overflow occurs because the sum of two positive numbers yields a negative representation.</span>",
                "<span style=\"display: inline;\">An end-around carry must be added back to the result.</span>",
                "<span style=\"display: inline;\">The result is correct and no overflow occurs.</span>",
                "<span style=\"display: inline;\">The numbers cannot be added because their signs are different.</span>"
            ],
            "answer": "A",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"533251\"></a><div itemprop=\"text\">Adding $A(+72)$ and $B(+80)$ yields $10011000(-104)$, meaning the value has exceeded the maximum positive capacity ( +127) of an 8-bit signed register.</div><br><br><a href=\"https://gateoverflow.in/533250/go-classes-dpp-gate-cs-digital-logic-number-system#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-digital-logic-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/digital-logic\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Digital Logic - Number System</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Convert the octal number $(34.5)_8$ to its equivalent hexadecimal representation.</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">1C.A</span>",
                "<span style=\"display: inline;\">1C. 5</span>",
                "<span style=\"display: inline;\">$E.A$</span>",
                "<span style=\"display: inline;\">$34 . A$</span>"
            ],
            "answer": "A",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"533249\"></a><div itemprop=\"text\">First convert to binary: $3 \\rightarrow 011$ and $4 \\rightarrow 100$, fraction $5 \\rightarrow$ 101, making $011100.101_2$. Regrouping by four digits from the binary point gives $00011100.1010_2$, which translates to 1C.A in hex.</div><br><br><a href=\"https://gateoverflow.in/533248/go-classes-dpp-gate-cs-digital-logic-number-system#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-digital-logic-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/digital-logic\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Digital Logic - Number System</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>An 8-bit register contains the 2's complement signed binary number $(10110100)_2$. What is its decimal value?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">-116</span>",
                "<span style=\"display: inline;\">-75</span>",
                "<span style=\"display: inline;\">+180</span>",
                "<span style=\"display: inline;\">-76</span>"
            ],
            "answer": "A",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"533247\"></a><div itemprop=\"text\">The most significant bit is 1 , indicating a negative number. Inverting the bits gives 01001011 and adding 1 yields 01001100 , which is +76 in magnitude, making the value -76 .</div><br><br><a href=\"https://gateoverflow.in/533246/go-classes-dpp-gate-cs-digital-logic-number-system#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-digital-logic-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/digital-logic\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Digital Logic - Number System</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>What is the 9 's complement of the decimal number 409?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">500</span>",
                "<span style=\"display: inline;\">591</span>",
                "<span style=\"display: inline;\">408</span>",
                "<span style=\"display: inline;\">590</span>"
            ],
            "answer": "D",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"534571\"></a><div itemprop=\"text\"><p><img alt=\"\" height=\"370\" src=\"https://gateoverflow.in/?qa=blob&amp;qa_blobid=1377843877482455775\" width=\"490\"/></p><p>Option D</p></div><br><br><a href=\"https://gateoverflow.in/533243/go-classes-dpp-gate-cs-digital-logic-number-system#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-digital-logic-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/digital-logic\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Digital Logic - Number System</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>If $(211)_x=(152)_8$, what is the value of the base $x$ ?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">5</span>",
                "<span style=\"display: inline;\">7</span>",
                "<span style=\"display: inline;\">6</span>",
                "<span style=\"display: inline;\">9</span>"
            ],
            "answer": "B",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"534570\"></a><div itemprop=\"text\"><p><img alt=\"\" height=\"623\" src=\"https://gateoverflow.in/?qa=blob&amp;qa_blobid=15839872377708517355\" width=\"466\"/></p><p>Option B</p></div><br><br><a href=\"https://gateoverflow.in/533241/go-classes-dpp-gate-cs-digital-logic-number-system#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-digital-logic-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/digital-logic\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Digital Logic - Number System</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>How many 1s exist in the binary equivalent of the decimal number 93640 ?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">6</span>",
                "<span style=\"display: inline;\">7</span>",
                "<span style=\"display: inline;\">8</span>",
                "<span style=\"display: inline;\">9</span>"
            ],
            "answer": "A",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"536117\"></a><div itemprop=\"text\"><p><strong>Here is the Details Explanation, converting the Number in Hexa will help you and you will get answer much faster <img alt=\"\" height=\"1128\" src=\"https://gateoverflow.in/?qa=blob&amp;qa_blobid=16567981397977076990\" width=\"1200\"/></strong></p></div><br><br><a href=\"https://gateoverflow.in/533233/go-classes-dpp-gate-cs-digital-logic-number-system#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-digital-logic-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/digital-logic\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Digital Logic - Number System</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>How many 3 digit numbers in decimal system are 3 digit numbers in both base 9 and base 11?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">625</span>",
                "<span style=\"display: inline;\">507</span>",
                "<span style=\"display: inline;\">528</span>",
                "<span style=\"display: inline;\">608</span>"
            ],
            "answer": "A",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"533230\"></a><div itemprop=\"text\">Smallest 3 digit numbers in base 9 is<br/> <br/> $$<br/> 1 * 9^2+0 * 9+0 * 9^0=81<br/> $$<br/> <br/> , Largest 3 digit number in base 9 is<br/> <br/> $$<br/> 8 * 9^2+8 * 9+8 * 9=728<br/> $$<br/> <br/> Smallest 3 digit number in base 11 is is<br/> <br/> $$<br/> 1 * 11^2+0 * 11+0 * 11^0=121<br/> $$<br/> <br/> Largest 3 digit number in base 11 is<br/> <br/> $$<br/> 10 * 11^2+10 * 11+10 * 11^0=1330<br/> $$<br/> <br/> So 3 digit numbers in base 10 which are also 3 digit numbers in base 9 and base 11 are from 121 to $728=608$</div><br><br><a href=\"https://gateoverflow.in/533229/go-classes-dpp-gate-cs-digital-logic-number-system#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-digital-logic-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/digital-logic\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Digital Logic - Number System</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>A two digit number A in base 11 is one-third of the number formed by reversing its digits when considered in base 19. How many such numbers are possible?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">5</span>",
                "<span style=\"display: inline;\">6</span>",
                "<span style=\"display: inline;\">7</span>",
                "<span style=\"display: inline;\">8</span>"
            ],
            "answer": "A",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"533228\"></a><div itemprop=\"text\">Let the number be $x y$.<br/> <br/> $$<br/> \\begin{aligned}<br/> &amp; =&gt; \\\\<br/> &amp; \\qquad(x y)_{11}=\\frac{1}{3}(y x)_{19} \\\\<br/> &amp; =&gt; \\\\<br/> &amp; =&gt; \\\\<br/> &amp; y+11 x=\\frac{1}{3}(x+19 y) \\\\<br/> &amp; =&gt;\\quad 3 y+33 x=x+19 y \\\\<br/> &amp; \\\\<br/> &amp; =32 x=16 y<br/> \\end{aligned}<br/> $$<br/> <br/> or<br/> <br/> $$<br/> 2 x=y<br/> $$<br/> <br/> So, $(x, y)$ can be $(2,1)(4,2)(6,3)(8,4)(10,5)$<br/> Numbers such as $10,11,12 .$. etc. are represented as alphabets $\\mathrm{a}, \\mathrm{b}, \\mathrm{c}$ etc in higher bases.<br/> Thus, the case of $(10,5)$ also satisfies our requirements.<br/> The next pair $(12,6)$ can't be considered since 12 is not a single digit number in base 11 and thus, all other cases greater than $(10,5)$ can be excluded.<br/> Thus, the answer is 5.</div><br><br><a href=\"https://gateoverflow.in/533227/go-classes-dpp-gate-cs-digital-logic-number-system#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-digital-logic-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/digital-logic\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Digital Logic - Number System</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>What will be the number of zeroes in</p><p>$$<br/>(2000!)_{34}<br/>$$</p><p>Here 34 is the base in which the number is written.</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">122</span>",
                "<span style=\"display: inline;\">123</span>",
                "<span style=\"display: inline;\">124</span>",
                "<span style=\"display: inline;\">125</span>"
            ],
            "answer": "B",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"533529\"></a><div itemprop=\"text\"><p><img alt=\"\" height=\"657\" src=\"https://gateoverflow.in/?qa=blob&amp;qa_blobid=8050485715246126172\" width=\"537\"/></p><p><strong>Option B</strong></p></div><br><br><a href=\"https://gateoverflow.in/533225/go-classes-dpp-gate-cs-digital-logic-number-system#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-digital-logic-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/digital-logic\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Digital Logic - Number System</a></b></div></div>"
        }
    ]
});

registerTest({
    "name": "DPP 04 - Digital Logic (Number System - Part 4)",
    "testLabel": "DPP 04",
    "testType": "DPP",
    "bracket": "Number System - Part 4",
    "subject": "dl",
    "series": "cse-dpp-2027",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 10,
    "topicsCovered": "Number System (Practice Set 4)",
    "questions": [
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>$$<br/>(245)_x+(162)_x-(427)_x=0<br/>$$</p><p>In some base x . What is the value of x ?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">8</span>",
                "<span style=\"display: inline;\">9</span>",
                "<span style=\"display: inline;\">10</span>",
                "<span style=\"display: inline;\">Cannot be determined</span>"
            ],
            "answer": "A",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"533224\"></a><div itemprop=\"text\">\\begin{aligned}<br/> &amp;(245)_x+(162)_x-(427)_x=0\\\\<br/> &amp;=&gt;\\left(2 x^2+4 x+5\\right)+\\left(x^2+6 x+2\\right)-\\left(4 x^2+2 x+7\\right)=0\\\\<br/> &amp;=&gt;x^2-8 x=0\\\\<br/> &amp;=&gt;x=8\\\\<br/> <br/> &amp; \\boxed{\\text{A. 8 is correct}}<br/> \\end{aligned}</div><br><br><a href=\"https://gateoverflow.in/533220/go-classes-dpp-gate-cs-digital-logic-number-system#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-digital-logic-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/digital-logic\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Digital Logic - Number System</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Which of the following Twos Complement binary numbers is equivalent to $\\mathbf{- 7 5}{ }_{10}$ ?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">11001011</span>",
                "<span style=\"display: inline;\">01001100</span>",
                "<span style=\"display: inline;\">11001100</span>",
                "<span style=\"display: inline;\">10110101</span>"
            ],
            "answer": "D",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"533377\"></a><div itemprop=\"text\">step1 : first find equivalent binary of +75 == 01001011 <br/> <br/> now take 1's complement of given number <br/> <br/> 01001011 flip the bits = 1 0110101 <br/> <br/> which matches option D is correct. <br/> <br/> </div><br><br><a href=\"https://gateoverflow.in/533212/go-classes-dpp-gate-cs-digital-logic-number-system#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-digital-logic-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/digital-logic\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Digital Logic - Number System</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Which of the following 4 bit Excess 3 numbers is equivalent to $5_{10}$ ?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$1101_{b c d x s} 3$</span>",
                "<span style=\"display: inline;\">$0010_{b c d x s 3}$</span>",
                "<span style=\"display: inline;\">$1000_{b c d x s} 3$</span>",
                "<span style=\"display: inline;\">$1010_{b c d x s 3}$</span>"
            ],
            "answer": "C",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"533381\"></a><div itemprop=\"text\">in Binary representation of 5 that is 101 <br/> <br/> add 3 (11) to its complement <br/> <br/> whichis 1000 <br/> <br/> so option C is correct.</div><br><br><a href=\"https://gateoverflow.in/533211/go-classes-dpp-gate-cs-digital-logic-number-system#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-digital-logic-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/digital-logic\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Digital Logic - Number System</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>End around carry is used to correct the result of additions in which of the following number systems?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">8 bit Signed Binary.</span>",
                "<span style=\"display: inline;\">8 bit Ones Complement.</span>",
                "<span style=\"display: inline;\">8 bit Twos Complement.</span>",
                "<span style=\"display: inline;\">Excess $3_{\\mathrm{BCD}}$</span>"
            ],
            "answer": "B",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"533405\"></a><div itemprop=\"text\"><p><strong>Option B</strong></p><p>When adding two numbers in <strong>Ones Complement</strong>, if a carry bit comes out of the most significant bit (MSB), that carry is <strong>not discarded</strong> — instead it is <strong>added back to the LSB</strong> (Least Significant Bit). This is called <strong>End Around Carry</strong>.</p></div><br><br><a href=\"https://gateoverflow.in/533209/go-classes-dpp-gate-cs-digital-logic-number-system#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-digital-logic-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/digital-logic\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Digital Logic - Number System</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>What is the widest range of decimal numbers that can be written in 8 bit signed binary notation?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">-127 to +127</span>",
                "<span style=\"display: inline;\">-0 to +256</span>",
                "<span style=\"display: inline;\">-128 to +128</span>",
                "<span style=\"display: inline;\">-256 to -1</span>"
            ],
            "answer": "A",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"533473\"></a><div itemprop=\"text\"><p><img alt=\"\" height=\"242\" src=\"https://gateoverflow.in/?qa=blob&amp;qa_blobid=14402892171775543532\" width=\"455\"/></p><p><strong>OPTION A</strong></p></div><br><br><a href=\"https://gateoverflow.in/533208/go-classes-dpp-gate-cs-digital-logic-number-system#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-digital-logic-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/digital-logic\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Digital Logic - Number System</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>What is the result of adding $\\mathbf{7}_{10}$ and $\\mathbf{- 4}_{10}$ using 8 bit signed binary notation?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$10000011_2$</span>",
                "<span style=\"display: inline;\">$00001011_2$</span>",
                "<span style=\"display: inline;\">$10001011_2$</span>",
                "<span style=\"display: inline;\">$00000011_2$</span>"
            ],
            "answer": "A",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"533218\"></a><div itemprop=\"text\"><pre><code>Given : We have 2 numbers \\[ 7_{10} = 00000111_2 \\] \\[ -4_{10} = 11111100_2 \\] (using 8-bit 2's complement representation) <strong>Addition:</strong> \\[ \\begin{array}{cccccccc} 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 1 &amp; 1 &amp; 1 \\\\ + &amp; 1 &amp; 1 &amp; 1 &amp; 1 &amp; 1 &amp; 1 &amp; 0 &amp; 0 \\\\ \\hline 1 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 1 &amp; 1 \\end{array} \\] Discarding the carry bit, we get \\[ 00000011_2 \\] Final Answer: \\[ 7_{10} + (-4)_{10} = 00000011_2 \\] Hence, the correct option is \\[ \\boxed{\\text{D. } 00000011_2} \\] </code></pre></div><br><br><a href=\"https://gateoverflow.in/533207/go-classes-dpp-gate-cs-digital-logic-number-system#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-digital-logic-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/digital-logic\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Digital Logic - Number System</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>What is the 8 bit unsigned binary result of $56_{10}-31_{10}$ ?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$00011001_2$</span>",
                "<span style=\"display: inline;\">$00010101_2$</span>",
                "<span style=\"display: inline;\">$00110001_2$</span>",
                "<span style=\"display: inline;\">$00001101_2$</span>"
            ],
            "answer": "A",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"533281\"></a><div itemprop=\"text\">First of Given number is in decimal so directly subtract them. <br/> <br/> 56 - 31 = 25. (decimal) <br/> <br/> Now convert this decimal number into a binary . <br/> <br/> 00011001 <br/> <br/> so option A is correct. <br/> <br/> </div><br><br><a href=\"https://gateoverflow.in/533197/go-classes-dpp-gate-cs-digital-logic-number-system#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-digital-logic-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/digital-logic\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Digital Logic - Number System</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Refer to Figure below.</p><p><img alt=\"\" height=\"145\" src=\"data:image/png;base64,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\" width=\"169\"/></p><p>Which of the tables correctly describes the rules of binary addition?</p></div></span>",
            "image": "data:image/png;base64,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",
            "options": [
                "<span style=\"display: inline;\">(a)</span>",
                "<span style=\"display: inline;\">(b)</span>",
                "<span style=\"display: inline;\">(c)</span>",
                "<span style=\"display: inline;\">(d)</span>"
            ],
            "answer": "B",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"533282\"></a><div itemprop=\"text\">0 + 0 = 0<br/> <br/> 0 + 1 = 1 <br/> <br/> 1 + 0 = 1<br/> <br/> 1 + 1 = carry(1) 0 <br/> <br/> <br/> <br/> Option B is correct.</div><br><br><a href=\"https://gateoverflow.in/533192/go-classes-dpp-gate-cs-digital-logic-number-system#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-digital-logic-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/digital-logic\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Digital Logic - Number System</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>What is the decimal equivalent of the number $3 \\mathrm{~A}_{16}$ ?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">58</span>",
                "<span style=\"display: inline;\">39</span>",
                "<span style=\"display: inline;\">310</span>",
                "<span style=\"display: inline;\">49</span>"
            ],
            "answer": "A",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"533283\"></a><div itemprop=\"text\">firist of all convert given hexadecimal number into a binary number then convert that binary number into decimal numer by bit postion .<br/> <br/> (3A)16 = (00111010)2 binary. <br/> <br/> now binary to decimal <br/> <br/> 32 + 16 + 8 + 2 = 58<br/> <br/> so option A is correct.</div><br><br><a href=\"https://gateoverflow.in/533190/go-classes-dpp-gate-cs-digital-logic-number-system#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-digital-logic-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/digital-logic\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Digital Logic - Number System</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Which of the following decimal numbers is equivalent to the highest value that can be held in an 8 -bit binary register using unsigned binary?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">127</span>",
                "<span style=\"display: inline;\">256</span>",
                "<span style=\"display: inline;\">65536</span>",
                "<span style=\"display: inline;\">255</span>"
            ],
            "answer": "D",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"533447\"></a><div itemprop=\"text\"><p><img alt=\"\" height=\"600\" src=\"https://gateoverflow.in/?qa=blob&amp;qa_blobid=2037692135012155597\" width=\"600\"/></p><p>option D</p></div><br><br><a href=\"https://gateoverflow.in/533187/go-classes-dpp-gate-cs-digital-logic-number-system#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-digital-logic-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/digital-logic\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Digital Logic - Number System</a></b></div></div>"
        }
    ]
});

registerTest({
    "name": "DPP 05 - Digital Logic (Number System - Part 5)",
    "testLabel": "DPP 05",
    "testType": "DPP",
    "bracket": "Number System - Part 5",
    "subject": "dl",
    "series": "cse-dpp-2027",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 10,
    "topicsCovered": "Number System (Practice Set 5)",
    "questions": [
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Which of the following numbers is equivalent to the normalised number $0.126 \\times 10^2 ?$</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$12600_{10}$</span>",
                "<span style=\"display: inline;\">$12.6_{10}$</span>",
                "<span style=\"display: inline;\">$10.26_{10}$</span>",
                "<span style=\"display: inline;\">$1111110_2$</span>"
            ],
            "answer": "B",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"533286\"></a><div itemprop=\"text\">This is nothing but just decimal multiplication by 100. <br/> <br/> 0.126*100 = 12.6 <br/> <br/> so option B is correct.</div><br><br><a href=\"https://gateoverflow.in/533185/go-classes-dpp-gate-cs-digital-logic-number-system#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-digital-logic-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/digital-logic\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Digital Logic - Number System</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>A $6$-bit CPU uses $\\mathbf{2}$<strong>'s complement representation</strong> for signed integers. Two numbers, $X= (101101)_2$ and $Y=(011010)_2$, are fed into an Arithmetic Logic Unit (ALU) to perform the operation $Z=X-Y$.</p><p>Which of the following statements is <strong>TRUE</strong> regarding the result $Z$ ?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">The result $Z$ in decimal is $-45$ and no overflow occurred.<br/></span>",
                "<span style=\"display: inline;\">The result $Z$ in decimal is $+19$ and an overflow occurred.<br/></span>",
                "<span style=\"display: inline;\">The result $Z$ in decimal is $-19$ and no overflow occurred.<br/></span>",
                "<span style=\"display: inline;\">The result $Z$ in decimal is $-27$ and an overflow occurred.</span>"
            ],
            "answer": "A",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"523591\"></a><div itemprop=\"text\"><p>$$<br/>\\begin{aligned}<br/>X &amp; =-19 \\\\\\\\<br/>Y &amp; =+26 \\\\\\\\<br/>Z &amp; =(-19)-(+26)=-45<br/>\\end{aligned}<br/>$$<br/>In a $6$-bit $2$'s complement system, the range of representable integers is:</p><ul><li>Range $:\\left[-2^{n-1}, 2^{n-1}-1\\right]$<br/> </li><li>For $n=6:\\left[-2^5, 2^5-1\\right]=[-32,+31]$.<br/> </li><li>Since the theoretical result $-45$ falls <strong>outside</strong> the range $[-32,31]$, an <strong>overflow</strong> occurs.</li></ul><p>$$<br/>\\begin{aligned}<br/>&amp; X=101101 \\\\\\\\<br/>&amp; -Y=2^{\\prime} \\text { s complement of } 011010=100110 \\\\\\\\<br/>&amp; Z=X+(-Y)=101101+100110=(1) 010011<br/>\\end{aligned}<br/>$$<br/>The $6$-bit result is $010011$, which is $+19$ (the \"incorrect\" result due to overflow).</p></div><br><br><a href=\"https://gateoverflow.in/523590/go-classes-dpp-digital-logic-binary-system#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-digital-logic-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/digital-logic\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Digital Logic - Number System</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>In a hypothetical $8$-bit floating-point representation, $1$ bit is for the sign, $4$ bits are for the <strong>biased exponent </strong>$($bias $=7)$, and $3$ bits are for the fraction (normalized). What is the decimal value represented by the bit pattern $1~1011~101$ ?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$-24$<br/></span>",
                "<span style=\"display: inline;\">$-26$<br/></span>",
                "<span style=\"display: inline;\">$-13$<br/></span>",
                "<span style=\"display: inline;\">$-28$</span>"
            ],
            "answer": "A",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"523588\"></a><div itemprop=\"text\"><p>The bit pattern is 11011101 .</p><ul><li><strong>Sign </strong>$(\\mathbf{S}): 1 \\Longrightarrow$ Negative.<br/> </li><li><strong>Exponent</strong> $(\\mathbf{E}):1011_2=11_{10}$. Actual exponent $e=E - \\mathrm{Bias}=11-7=4$.<br/> </li><li><strong>Mantissa</strong> $(\\mathbf{M}):101_2 \\Longrightarrow 1.101$ $($with the implicit leading $1)$.<br/> </li><li><strong>Calculation: </strong>Value $=(-1)^1 \\times(1.101)_2 \\times 2^4$</li></ul><p>$$<br/>\\begin{aligned}<br/>&amp; (1.101)_2=1+2^{-1}+2^{-3}=1+0.5+0.125=1.625 \\\\\\\\<br/>&amp; \\text { Value }=-1.625 \\times 16=-26<br/>\\end{aligned}<br/>$$</p></div><br><br><a href=\"https://gateoverflow.in/523587/go-classes-dpp-digital-logic-floating-point-representation#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-digital-logic-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/digital-logic\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Digital Logic - Number System</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider a hypothetical 8-bit floating-point representation:</p><p>What is the decimal equivalent of the bit pattern $11010 ~110$?</p><p><strong>Given Details:</strong></p><ul><li>$1$ bit for Sign</li><li>$4$ bits for Exponent (Excess-$7$ bias)</li><li>$3$ bits for Mantissa (Normalized, hidden bit $1$)</li></ul></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$-12$</span>",
                "<span style=\"display: inline;\">$-14$</span>",
                "<span style=\"display: inline;\">$-28$</span>",
                "<span style=\"display: inline;\">$-7$</span>"
            ],
            "answer": "B",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"523438\"></a><div itemprop=\"text\"><p>Bit pattern$: 11010~110$</p><ol><li><strong>Sign bit: </strong>$1 \\rightarrow$ <strong>Negative.</strong><br/> </li><li><strong>Exponent:</strong> $1010_2=10_{10}$.<br/> <ul><li>Actual Exponent $E=$ Exponent - Bias $=10-7=3$.<br/> </li></ul></li><li><strong>Mantissa: </strong>$110_2$.<br/> <ul><li>With hidden bit: $1.110_2=1+1 / 2+1 / 4=1.75_{10}$.<br/> </li></ul></li></ol><p><strong>Value Calculation:</strong></p><p>$$<br/>\\begin{aligned}<br/>&amp; V=(-1)^S \\times(1 . M) \\times 2^E \\\\<br/>&amp; V=-1 \\times 1.75 \\times 2^3 \\\\<br/>&amp; V=-1.75 \\times 8=-14<br/>\\end{aligned}<br/>$$</p><p><strong>CORRECT OPTION: B</strong></p></div><br><br><a href=\"https://gateoverflow.in/523436/go-classes-dpp-digital-logic-floating-point#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-digital-logic-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/digital-logic\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Digital Logic - Number System</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\">Consider the following $8$-bit hexadecimal number representation in $2$'s complement form: $F E_{16}$. If this number is sign-extended to $16$ bits, what is its value in decimal?</div></span>",
            "image": "",
            "options": [],
            "answer": "2",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"522925\"></a><div itemprop=\"text\"><p><strong>Step 1: </strong>Convert $F E_{16}$ to binary.</p><p>$$<br/>F=1111, E=1110 \\text {. So, } F E_{16}=(11111110)_2 \\text { (8-bit). }<br/>$$</p><p><br/><strong>Step 2:</strong> Identify the value.<br/><br/>In $2$'s complement, the MSB is $1$, so the number is negative.</p><ul><li>Magnitude $=2$ 's complement of $11111110=00000001+1=00000010$ $($which is $2_{10})$.<br/> </li><li>Value $=-2$.<br/> </li></ul><p><strong>Step 3:</strong> Sign Extension.<br/><br/>When you sign-extend a $2$'s complement number from $8$ bits to $16$ bits, you replicate the sign bit $(1)$. The value <strong>does not change.</strong><br/><br/>16-bit version: $11111111111111110_2$. This is still $-2$.</p></div><br><br><a href=\"https://gateoverflow.in/522924/go-classes-dpp-digital-logic-number-system#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-digital-logic-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/digital-logic\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Digital Logic - Number System</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>In a $16$-bit floating-point format, $1$ bit is for the sign, $6$ bits are for the exponent $($excess-$31$ bias$)$, and $9$ bits are for the fractional mantissa (normalized). What is the decimal value of the bit pattern $0~100001~101000000$?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$1.625 \\times 2^2$<br/></span>",
                "<span style=\"display: inline;\">$1.625 \\times 2^{-2}$<br/></span>",
                "<span style=\"display: inline;\">$6.5$<br/></span>",
                "<span style=\"display: inline;\">$3.25$</span>"
            ],
            "answer": "A",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"522395\"></a><div itemprop=\"text\"><p>The bit pattern is $0~100001~101000000 .$<br/><br/><strong>Sign</strong> $(S): 0 \\Longrightarrow$ Positive.<br/><br/><strong>Exponent </strong>$(E): 100001$ in binary is $32+1=33$.</p><ul><li>The bias is $31$.<br/> </li><li>True Exponent $e=E$ - Bias $=33-31=2$.<br/> </li></ul><p><strong>Mantissa</strong> $(M): 101 \\ldots$ represents $1.101$ in binary</p><ul><li>Value $=1+\\left(1 \\times 2^{-1}\\right)+\\left(0 \\times 2^{-2}\\right)+\\left(1 \\times 2^{-3}\\right)=1+0.5+0.125=1.625$.</li></ul><p><strong>Final Value:</strong> $+1.625 \\times 2^2=1.625 \\times 4=\\mathbf{6 . 5}$.</p></div><br><br><a href=\"https://gateoverflow.in/522394/go-classes-dpp-digital-logic-floating-point-representation#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-digital-logic-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/digital-logic\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Digital Logic - Number System</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>An 8-bit register stores the number $(D 5)_{16}$. If this number is treated as a $\\mathbf2$<strong>'s</strong> <strong>complement signed integer,</strong> what is its decimal equivalent?</p></div></span>",
            "image": "",
            "options": [],
            "answer": "2",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"522236\"></a><div itemprop=\"text\">$(D 5)_{16}=(11010101)_2 .$<br/> <br/> Since the MSB is $1$ , it is a negative number.<br/> <br/> $1$'s complement$: 00101010$.<br/> <br/> $2$'s complement $($Add $1): 00101011.$<br/> <br/> Value: $-(32+8+2+1)=-43$.</div><br><br><a href=\"https://gateoverflow.in/522231/go-classes-dpp-digital-logic-binary-system#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-digital-logic-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/digital-logic\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Digital Logic - Number System</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider the <strong>IEEE $\\mathbf{754}$ Single Precision $\\mathbf{(32}$-bit$\\mathbf{)}$</strong> floating-point representation of a number. The bit pattern is given in hexadecimal as:</p><p>$$<br/>\\verb|0xC0A00000|<br/>$$</p><p><br/>What is the decimal value represented by this bit pattern?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$-5.0$<br/></span>",
                "<span style=\"display: inline;\">$-1.25$<br/></span>",
                "<span style=\"display: inline;\">$-2.5$<br/></span>",
                "<span style=\"display: inline;\">$-10.0$</span>"
            ],
            "answer": "A",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"521772\"></a><div itemprop=\"text\"><p><strong>Hex to Binary</strong>$: \\verb|C 0 A 0 0 0 0 0| \\rightarrow \\verb|1 10000001 0100000...|$<br/><br/><strong>Sign (S)</strong>$: \\verb|1|$ (Negative)<br/><br/><strong>Biased Exponent (E)</strong>$: \\verb|10000001|$ in binary is $129$ in decimal.<br/><br/><strong>Actual Exponent (e)</strong>$: E-127=129-127=2$.<br/><br/><strong>Mantissa (M):</strong> The fractional part is $\\verb|010...|$, so the significand is $(1.01)_2= 1+2^{-2}=1.25$.<br/><br/><strong>Value:</strong> $(-1)^1 \\times 1.25 \\times 2^2=-1.25 \\times 4=-5.0$.</p></div><br><br><a href=\"https://gateoverflow.in/521771/go-classes-dpp-digital-logic-floating-point-representation#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-digital-logic-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/digital-logic\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Digital Logic - Number System</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>An integer $N$ has the following representations in two different bases, $r_1$ and $r_2$ :</p><p>$$<br/>(121)_{r_1}=(100)_{r_2}<br/>$$</p><p>find the values of the bases $\\mathbf{r 1}$ and $\\mathbf{r 2}$, and determine the decimal value of the integer $\\mathbf{N}$.</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$r_1=2, r_2=3, N=9$<br/></span>",
                "<span style=\"display: inline;\">$r_1=3, r_2=4, N=16$<br/></span>",
                "<span style=\"display: inline;\">Any $r_1>2$ will satisfy this, $N$ is not unique.<br/></span>",
                "<span style=\"display: inline;\">$r_1=5, r_2=6, N=36$</span>"
            ],
            "answer": "C",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"521152\"></a><div itemprop=\"text\"><p>$(121)_{r_1}=1 \\cdot r_1^2+2 \\cdot r_1+1$</p><p>This is a perfect square: $\\left(r_1+1\\right)^2$.</p><p>$(100)_{r_2}=1 \\cdot r_2^2+0 \\cdot r_2+0$<br/><br/>This simplifies to$: r_2^2$.<br/><br/>Substituting the expressions back into the original equality:</p><p>$$<br/>\\left(r_1+1\\right)^2=r_2^2<br/>$$<br/>Taking the square root of both sides (since bases must be positive):</p><p>$$<br/>r_1+1=r_2<br/>$$</p><p>The problem states that $r_2=r_1+1$. This matches our derived equation exactly.<br/><br/>However, we must check the <strong>base constraints:</strong></p><ul><li>In base $r_1$, the digits are $\\{1,2,1\\}$. Therefore, the base must be strictly greater than the largest digit.<br/> </li><li>$r_1&gt;2$.<br/> </li></ul><p>This means <strong>any</strong> integer value for $r_1$ greater than 2 will satisfy the equation $(121)_{r_1}= (100)_{r_1+1}$.</p><ul><li>If $r_1=3$, then $r_2=4 . N=(121)_3=9+6+1=16$. Also, $(100)_4=16$.<br/> </li><li>If $r_1=4$, then $r_2=5 . N=(121)_4=16+8+1=25$. Also, $(100)_5=25$.<br/> </li></ul><p><strong>CORRECT OPTION: C</strong></p></div><br><br><a href=\"https://gateoverflow.in/521151/go-classes-dpp-digital-logic-number-system#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-digital-logic-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/digital-logic\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Digital Logic - Number System</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\">In a number system of base $r$, the equation $x^2-12 x+37=0$ has $x=8$ as one of its solutions. The value of $r$ is_______.</div></span>",
            "image": "",
            "options": [],
            "answer": "11",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"473869\"></a><div itemprop=\"text\">Given Base r ; <br/> <br/> 12 == r + 2 <br/> <br/> 37 == 3r + 7<br/> <br/> x^2 - (r+2)x + (3r + 7) = 0 <br/> <br/> Putting x = 8 in the above equation; <br/> <br/> 64 - 8r - 16 + 3r + 7 = 0 <br/> <br/> 55 - 5r = 0 <br/> <br/> 55= 5r ; <br/> <br/> r = 11 Ans</div><br><br><a href=\"https://gateoverflow.in/473851/go-classes-dpp-digital-logics-number-system-gate-ec#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-digital-logic-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/digital-logic\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Digital Logic - Number System</a></b></div></div>"
        }
    ]
});

registerTest({
    "name": "DPP 06 - Digital Logic (Number System - Part 6)",
    "testLabel": "DPP 06",
    "testType": "DPP",
    "bracket": "Number System - Part 6",
    "subject": "dl",
    "series": "cse-dpp-2027",
    "date": "Nov 03, 2026",
    "duration": "15 Min",
    "totalMarks": 4,
    "topicsCovered": "Number System (Practice Set 6)",
    "questions": [
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>The two numbers represented in signed 2's complement form are $\\mathrm{P}=11101101$ and $\\mathrm{Q}=11100110$. If Q is subtracted from P , the value obtained in signed 2's complement is</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$1000001111$<br/></span>",
                "<span style=\"display: inline;\">$00000111$<br/></span>",
                "<span style=\"display: inline;\">$11111001$<br/></span>",
                "<span style=\"display: inline;\">$111111001$</span>"
            ],
            "answer": "B",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"473850\"></a><div itemprop=\"text\"><p>$$<br/>\\begin{aligned}<br/>&amp; P=11101101 \\rightarrow-19 \\\\<br/>&amp; Q=11100110 \\rightarrow-26 \\\\<br/>&amp; P-Q=(-19)-(-26)=7<br/>\\end{aligned}<br/>$$<br/><br/>7 in 8-bit 2's complement $=00000111$<br/><br/><strong>Correct answer: Option B</strong></p></div><br><br><a href=\"https://gateoverflow.in/473849/go-classes-dpp-digital-logics-number-system-gate-ec#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-digital-logic-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/digital-logic\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Digital Logic - Number System</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\">What bit must be complemented 10 change an ASCII leiter from capital to lowercase and vice versa? (Counting the bit as 1 from LSB)</div></span>",
            "image": "",
            "options": [],
            "answer": "6",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"472485\"></a><div itemprop=\"text\">In ASCII, uppercase and lowercase letters differ only at bit 6 (when counting from LSB as bit 1). This bit has a binary weight of 32 .<br/> <br/> Complementing bit 6 toggles the case of a letter.</div><br><br><a href=\"https://gateoverflow.in/472484/go-classes-dpp-digital-logic-number-representation-morris-mano#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-digital-logic-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/digital-logic\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Digital Logic - Number System</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Say that you are using unsigned binary to represent integers with $\\mathbf{6}$ bits. What range of integers can be represented?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">0 to 64</span>",
                "<span style=\"display: inline;\">1 to 64</span>",
                "<span style=\"display: inline;\">1 to 128</span>",
                "<span style=\"display: inline;\">0 to 63</span>"
            ],
            "answer": "A",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"471251\"></a><div itemprop=\"text\">If we have n bits, the range of unsigned numbers is 0 to $2^{\\mathrm{n}}-1$. Given $n=6$, then range $=0$ to 63</div><br><br><a href=\"https://gateoverflow.in/471250/go-classes-dpp-digital-logic-number-representation-philadelphia-university#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-digital-logic-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/digital-logic\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Digital Logic - Number System</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>The BCD code of the decimal number $937.25$ is $\\qquad$</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$100011111.010101$</span>",
                "<span style=\"display: inline;\">$100100110111.00100101$</span>",
                "<span style=\"display: inline;\">$1110101001.11001$</span>",
                "<span style=\"display: inline;\">$None$ $of$ $the$ $above$</span>"
            ],
            "answer": "B",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"470836\"></a><div itemprop=\"text\">The BCD for the decimal numbers are as follows,<br/> <br/> $$<br/> \\begin{aligned}<br/> &amp; 9 \\rightarrow 1001 \\\\<br/> &amp; 3 \\rightarrow 0011 \\\\<br/> &amp; 7 \\rightarrow 0111 \\\\<br/> &amp; 2 \\rightarrow 0010 \\\\<br/> &amp; 5 \\rightarrow 0101<br/> \\end{aligned}<br/> $$<br/> <br/> So the BCD for 947.25 is 100100110111.00100101 (option B)</div><br><br><a href=\"https://gateoverflow.in/470835/go-classes-dpp-digital-logic-number-representation-philadelphia-university#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-digital-logic-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/digital-logic\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Digital Logic - Number System</a></b></div></div>"
        }
    ]
});

registerTest({
    "name": "DPP 07 - Digital Logic (Boolean Algebra - Part 1)",
    "testLabel": "DPP 07",
    "testType": "DPP",
    "bracket": "Boolean Algebra - Part 1",
    "subject": "dl",
    "series": "cse-dpp-2027",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 10,
    "topicsCovered": "Boolean Algebra (Practice Set 1)",
    "questions": [
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>In a sequential circuit, the circuit is able to remember previous output mainly because of:</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">Encoder<br/></span>",
                "<span style=\"display: inline;\">Decoder<br/></span>",
                "<span style=\"display: inline;\">Feedback or memory element<br/></span>",
                "<span style=\"display: inline;\">Multiplexer</span>"
            ],
            "answer": "C",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"536425\"></a><div itemprop=\"text\"><p>A sequential circuit does not depend only on present inputs.</p><p>It also depends on previous state.</p><p>To remember previous state, the circuit needs feedback or a memory element.</p><p>So, feedback allows the previous output to influence the future output.</p><p><strong>Answer: C.</strong></p></div><br><br><a href=\"https://gateoverflow.in/536424/go-classes-dpp-gate-cs-digital-logic-memory-%26-feedback#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-digital-logic-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/digital-logic\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Digital Logic - Boolean Algebra</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>A Boolean operator $\\odot$ is defined by the following truth table:</p><p>\\[<br/>\\begin{array}{|c|c|c|}<br/>\\hline<br/>A &amp; B &amp; A \\odot B \\\\<br/>\\hline<br/>0 &amp; 0 &amp; 1 \\\\<br/>0 &amp; 1 &amp; 0 \\\\<br/>1 &amp; 0 &amp; 0 \\\\<br/>1 &amp; 1 &amp; 0\\\\<br/>\\hline<br/>\\end{array}<br/>\\]</p><p>Which statement is correct about the set {$\\odot$}?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">It is functionally complete because $\\odot$ is equivalent to NOR<br/></span>",
                "<span style=\"display: inline;\">It is not functionally complete because it cannot generate NOT<br/></span>",
                "<span style=\"display: inline;\">It is not functionally complete because it behaves like XOR<br/></span>",
                "<span style=\"display: inline;\">It is functionally complete only if OR is also given</span>"
            ],
            "answer": "A",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"536228\"></a><div itemprop=\"text\"><p>From the truth table, output is $1$ only when both inputs are $0$.</p><p>So,</p><p>$A\\odot B=(A+B)'$</p><p>This is the NOR operation.</p><p>Using NOR, we can generate NOT:</p><p>$A'=A\\odot A$</p><p>Using NOR, we can generate OR:</p><p>$A+B=(A\\odot B)\\odot(A\\odot B)$</p><p>Using NOR, we can also generate AND:</p><p>$AB=(A'\\ +\\ B')'$</p><p>So,</p><p>$AB=(A\\odot A)\\odot(B\\odot B)$</p><p>Since NOR can generate NOT, OR, and AND, NOR alone is functionally complete.</p><p>Therefore, the set {$\\odot$} is functionally complete.</p><p><br/><b>Answer: A</b></p></div><br><br><a href=\"https://gateoverflow.in/536227/go-classes-dpp-gate-cs-digital-logic-functional-completeness#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-digital-logic-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/digital-logic\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Digital Logic - Boolean Algebra</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Which of the following statements is correct about the set {XOR, NOT}?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">It is functionally complete because it contains NOT<br/></span>",
                "<span style=\"display: inline;\">It is functionally complete because XOR can produce AND<br/></span>",
                "<span style=\"display: inline;\">It is not functionally complete because it cannot produce non-linear functions like AND<br/></span>",
                "<span style=\"display: inline;\">It is functionally complete only for three-variable functions</span>"
            ],
            "answer": "C",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"536226\"></a><div itemprop=\"text\"><p>The set {XOR, NOT} can produce expressions like:</p><p>$A\\oplus B$</p><p>$A\\oplus B\\oplus 1$</p><p>$A'$</p><p>$A\\oplus B\\oplus C$</p><p>These are linear or affine Boolean functions.</p><p>But AND is not a linear function.</p><p>For example, $AB$ cannot be expressed using only XOR and NOT.</p><p>Since this set cannot express every Boolean function, it is not functionally complete.<br/> </p><p><strong>Answer: C</strong></p></div><br><br><a href=\"https://gateoverflow.in/536225/go-classes-dpp-gate-cs-digital-logic-incomplete-set#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-digital-logic-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/digital-logic\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Digital Logic - Boolean Algebra</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Let $A \\uparrow B$ denote the NAND operation, where:</p><p>$A \\uparrow B=(AB)'$</p><p>Which set of expressions correctly proves that NAND alone is functionally complete?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$A'=A\\uparrow A$, $\\quad AB=(A\\uparrow B)\\uparrow(A\\uparrow B)$, $\\quad A+B=(A\\uparrow A)\\uparrow(B\\uparrow B)$<br/></span>",
                "<span style=\"display: inline;\">$A'=A\\uparrow B$, $\\quad AB=A\\uparrow A$, $\\quad A+B=B\\uparrow B$<br/></span>",
                "<span style=\"display: inline;\">$A'=A\\uparrow A$, $\\quad AB=A\\uparrow B$, $\\quad A+B=A\\uparrow B$<br/></span>",
                "<span style=\"display: inline;\">$A'=A\\uparrow B$, $\\quad AB=(A\\uparrow A)\\uparrow B$, $\\quad A+B=A\\uparrow A$</span>"
            ],
            "answer": "A",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"536223\"></a><div itemprop=\"text\"><p>NAND is defined as:</p><p>$A\\uparrow B=(AB)'$</p><p>To get NOT:</p><p>$A'=A\\uparrow A$</p><p>To get AND:</p><p>First get $(AB)'$ using NAND.</p><p>$A\\uparrow B=(AB)'$</p><p>Then invert it again using NAND.</p><p>$AB=(A\\uparrow B)\\uparrow(A\\uparrow B)$</p><p>To get OR, use De Morgan's law:</p><p>$A+B=(A'B')'$</p><p>Now,</p><p>$A'=A\\uparrow A$</p><p>and</p><p>$B'=B\\uparrow B$</p><p>So,</p><p>$A+B=(A\\uparrow A)\\uparrow(B\\uparrow B)$</p><p>Since NAND can form NOT, AND, and OR, NAND alone is functionally complete.<br/> </p><p><strong>Answer: A</strong></p></div><br><br><a href=\"https://gateoverflow.in/536222/go-classes-dpp-gate-cs-digital-logic-nand-as-a-universal-gate#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-digital-logic-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/digital-logic\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Digital Logic - Boolean Algebra</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>For a Boolean function $f(A,B,C)=\\Sigma m(1,2,5,7)$, which expression correctly represents the standard SOP form?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$f=A'B'C+A'BC'+AB'C+ABC$<br/></span>",
                "<span style=\"display: inline;\">$f=A'B'C'+A'BC+AB'C'+ABC'$<br/></span>",
                "<span style=\"display: inline;\">$f=A'B'C+A'BC+AB'C+ABC'$<br/></span>",
                "<span style=\"display: inline;\">$f=A'B'C'+A'BC'+AB'C+ABC$</span>"
            ],
            "answer": "A",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"536220\"></a><div itemprop=\"text\"><p>For three variables $A,B,C$, minterm numbers are written using binary values of $ABC$.</p><p>$m_1=001=A'B'C$</p><p>$m_2=010=A'BC'$</p><p>$m_5=101=AB'C$</p><p>$m_7=111=ABC$</p><p>So,</p><p>$f=\\Sigma m(1,2,5,7)$</p><p>$\\boxed{\\therefore f=A'B'C+A'BC'+AB'C+ABC}$</p><p><br/><strong>Answer: A</strong></p></div><br><br><a href=\"https://gateoverflow.in/536218/go-classes-dpp-gate-cs-digital-logic-minterm-expansion#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-digital-logic-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/digital-logic\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Digital Logic - Boolean Algebra</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>A set of Boolean operations is called functionally complete if:</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">It contains only AND and OR gates<br/></span>",
                "<span style=\"display: inline;\">It can be used to express every Boolean function<br/></span>",
                "<span style=\"display: inline;\">It contains XOR operation<br/></span>",
                "<span style=\"display: inline;\">It can express only SOP expressions</span>"
            ],
            "answer": "B",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"536217\"></a><div itemprop=\"text\"><p>A set of operations is functionally complete if every Boolean function can be written using only the operations present in that set.</p><p>For example, {AND, OR, NOT} is functionally complete because any Boolean function can be written using SOP or POS form with these operations.</p><p><strong>Answer: B</strong></p></div><br><br><a href=\"https://gateoverflow.in/536216/go-classes-dpp-gate-cs-digital-logic-functional-completeness#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-digital-logic-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/digital-logic\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Digital Logic - Boolean Algebra</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>A circuit has two gates in series. First, $X=AB$ is produced using an AND gate with delay $4$ $\\text{ns}$. Then, $F=X+C$ is produced using an OR gate with delay $3$ $\\text{ns}$. If input $A$ changes at time $t=0$ while $B$ and $C$ are stable, what is the worst-case delay for $F$ to change?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$3$ $\\text{ns}$<br/></span>",
                "<span style=\"display: inline;\">$4$ $\\text{ns}$<br/></span>",
                "<span style=\"display: inline;\">$7$ $\\text{ns}$<br/></span>",
                "<span style=\"display: inline;\">$12$ $\\text{ns}$</span>"
            ],
            "answer": "C",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"536044\"></a><div itemprop=\"text\"><p style=\"text-align:center\"><img alt=\"\" height=\"250\" src=\"https://cdn.mathpix.com/snip/images/jJKV4CYTOvnLL1HlMcz2q3EjQRBpsGMcfzCVzfgjUAQ.original.fullsize.png\" width=\"517\"/></p><p><br/>The change in $A$ first affects $X$ through the AND gate.</p><p>Delay for $X$:</p><p>$4$ $\\text{ns}$</p><p>Then $X$ affects $F$ through the OR gate.</p><p>Delay for $F$ after $X$ changes:</p><p>$3$ $\\text{ns}$</p><p>Total delay:</p><p>$4+3=\\boxed{7\\text{ ns}}$</p><p><br/><b>Answer: C</b></p></div><br><br><a href=\"https://gateoverflow.in/536043/go-classes-dpp-gate-cs-digital-logic-propagation-delay#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-digital-logic-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/digital-logic\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Digital Logic - Boolean Algebra</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"3736\" data-start=\"3537\">For $\\mathrm{F}(\\mathrm{A},\\mathrm{B},\\mathrm{C},\\mathrm{D})=\\Sigma_m(2,3,6,7,8,10,14)+\\mathrm{d}(0,11,15)$, how many prime implicants and essential prime implicants are present?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$3$ prime implicants and $2$ essential prime implicants<br/></span>",
                "<span style=\"display: inline;\">$2$ prime implicants and $2$ essential prime implicants<br/></span>",
                "<span style=\"display: inline;\">$2$ prime implicants and $1$ essential prime implicant<br/></span>",
                "<span style=\"display: inline;\">$4$ prime implicants and $2$ essential prime implicants</span>"
            ],
            "answer": "A",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"535319\"></a><div itemprop=\"text\"><p><strong>Correct answer is option -B and here is the Explanation <img alt=\"\" src=\"https://gateoverflow.in/?qa=blob&amp;qa_blobid=18307281446467955658\"/></strong></p></div><br><br><a href=\"https://gateoverflow.in/535236/go-classes-dpp-gate-cs-digital-logic-dont-care-pi#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-digital-logic-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/digital-logic\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Digital Logic - Boolean Algebra</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"1984\" data-start=\"1791\">For $\\mathrm{F}(\\mathrm{A},\\mathrm{B},\\mathrm{C},\\mathrm{D})=\\Sigma _m(0,2,3,4,6,7,9,11,13,15)$, which of the following are correct minimal SOP forms? <em>(Select all that apply.)</em></p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\mathrm{F}=\\mathrm{A}'\\mathrm{D}'+\\mathrm{A}\\mathrm{D}+\\mathrm{A}'\\mathrm{C}$<br/></span>",
                "<span style=\"display: inline;\">$\\mathrm{F}=\\mathrm{A}'\\mathrm{D}'+\\mathrm{A}\\mathrm{D}+\\mathrm{B}\\mathrm{C}$<br/></span>",
                "<span style=\"display: inline;\">$\\mathrm{F}=\\mathrm{A}'\\mathrm{D}'+\\mathrm{A}\\mathrm{D}+\\mathrm{C}\\mathrm{D}$<br/></span>",
                "<span style=\"display: inline;\">$\\mathrm{F}=\\mathrm{A}'\\mathrm{C}+\\mathrm{C}\\mathrm{D}$</span>"
            ],
            "answer": "A",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"535345\"></a><div itemprop=\"text\"><p><strong>Here is the Details Explanation and correct Answer is AC<img alt=\"\" height=\"1626\" src=\"https://gateoverflow.in/?qa=blob&amp;qa_blobid=1075082344387617271\" width=\"1200\"/></strong></p></div><br><br><a href=\"https://gateoverflow.in/535235/go-classes-dpp-gate-cs-digital-logic-non-unique-msop#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-digital-logic-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/digital-logic\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Digital Logic - Boolean Algebra</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"486\" data-start=\"307\">For $\\mathrm{F}(\\mathrm{A},\\mathrm{B},\\mathrm{C},\\mathrm{D})=\\Sigma _m(1,3,5,7,8,9,13,15)$, which of the following are prime implicants? <em>(Select all that apply.)</em></p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\mathrm{A}'\\mathrm{D}$<br/></span>",
                "<span style=\"display: inline;\">$\\mathrm{B}\\mathrm{D}$<br/></span>",
                "<span style=\"display: inline;\">$\\mathrm{C}'\\mathrm{D}$<br/></span>",
                "<span style=\"display: inline;\">$\\mathrm{A}'\\mathrm{C}\\mathrm{D}$</span>"
            ],
            "answer": "0",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"535321\"></a><div itemprop=\"text\"><p><strong>Correct answer is option ABC and here is the Explanation </strong></p><p><strong><img alt=\"\" height=\"739\" src=\"https://gateoverflow.in/?qa=blob&amp;qa_blobid=7769850426649454682\" width=\"1162\"/></strong></p></div><br><br><a href=\"https://gateoverflow.in/535234/go-classes-dpp-gate-cs-digital-logic-prime-implicants#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-digital-logic-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/digital-logic\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Digital Logic - Boolean Algebra</a></b></div></div>"
        }
    ]
});

registerTest({
    "name": "DPP 08 - Digital Logic (Boolean Algebra - Part 2)",
    "testLabel": "DPP 08",
    "testType": "DPP",
    "bracket": "Boolean Algebra - Part 2",
    "subject": "dl",
    "series": "cse-dpp-2027",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 11,
    "topicsCovered": "Boolean Algebra (Practice Set 2)",
    "questions": [
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"4958\" data-start=\"4776\">For the Boolean function $\\mathrm{F}(\\mathrm{A},\\mathrm{B},\\mathrm{C},\\mathrm{D})=\\Sigma _m(2,3,5,7,8,10,12,13)$, how many essential prime implicants are present?</p></div></span>",
            "image": "",
            "options": [],
            "answer": "0",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"535233\"></a><div itemprop=\"text\"><p style=\"text-align:center\"><img alt=\"\" height=\"419\" src=\"https://cdn.mathpix.com/snip/images/5nO1eOt-zx66v0b7vj8g6Yc2XLonbrkNOqVVaoA9Wf8.original.fullsize.png\" width=\"741\"/></p><p data-end=\"5343\" data-start=\"5220\">An essential prime implicant must cover at least one $1$-cell that is not covered by any other prime implicant.</p><p data-end=\"5385\" data-start=\"5345\">Now check the coverage of each $1$-cell.</p><p data-end=\"5437\" data-start=\"5387\">$m_2$ is covered by more than one prime implicant.</p><p data-end=\"5489\" data-start=\"5439\">$m_3$ is covered by more than one prime implicant.</p><p data-end=\"5541\" data-start=\"5491\">$m_5$ is covered by more than one prime implicant.</p><p data-end=\"5593\" data-start=\"5543\">$m_7$ is covered by more than one prime implicant.</p><p data-end=\"5645\" data-start=\"5595\">$m_8$ is covered by more than one prime implicant.</p><p data-end=\"5700\" data-start=\"5647\">$m_{10}$ is covered by more than one prime implicant.</p><p data-end=\"5755\" data-start=\"5702\">$m_{12}$ is covered by more than one prime implicant.</p><p data-end=\"5810\" data-start=\"5757\">$m_{13}$ is covered by more than one prime implicant.</p><p data-end=\"5871\" data-start=\"5812\">So, no $1$-cell is uniquely covered by any prime implicant.</p><p data-end=\"5924\" data-start=\"5873\">Therefore, there are no essential prime implicants.</p></div><br><br><a href=\"https://gateoverflow.in/535231/go-classes-dpp-gate-cs-digital-logic-prime-implicants#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-digital-logic-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/digital-logic\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Digital Logic - Boolean Algebra</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"489\" data-start=\"283\">For the Boolean function $\\mathrm{F}(\\mathrm{A},\\mathrm{B},\\mathrm{C},\\mathrm{D})=\\Sigma_m(0,1,2,5,6,7,8,9,10,14)$, how many prime implicants and essential prime implicants are present?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$5$ prime implicants and $2$ essential prime implicants<br/></span>",
                "<span style=\"display: inline;\">$6$ prime implicants and $3$ essential prime implicants<br/></span>",
                "<span style=\"display: inline;\">$6$ prime implicants and $2$ essential prime implicants<br/></span>",
                "<span style=\"display: inline;\">$7$ prime implicants and $2$ essential prime implicants</span>"
            ],
            "answer": "C",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"535229\"></a><div itemprop=\"text\"><p style=\"text-align:center\"><img alt=\"\" height=\"410\" src=\"https://cdn.mathpix.com/snip/images/UWwLSKm1M6i06S6aFuG-4R4Csrwns7zmALZBFOgmDx8.original.fullsize.png\" width=\"728\"/></p><p> </p><p>The valid prime implicants are:</p><p data-end=\"957\" data-start=\"750\">$$ \\begin{array}{|c|c|} \\hline\\text{Prime Implicant} &amp; \\text{Minterms Covered} \\\\ \\hline \\mathrm{B}'\\mathrm{C}' &amp; 0,1,8,9 \\\\ \\mathrm{B}'\\mathrm{D}' &amp; 0,2,8,10 \\\\ \\mathrm{C}\\mathrm{D}' &amp; 2,6,10,14 \\\\ \\mathrm{A}'\\mathrm{C}'\\mathrm{D} &amp; 1,5 \\\\ \\mathrm{A}'\\mathrm{B}\\mathrm{D} &amp; 5,7 \\\\ \\mathrm{A}'\\mathrm{B}\\mathrm{C} &amp; 6,7 \\\\ \\hline \\end{array} $$</p><p data-end=\"1376\" data-start=\"1334\">So, the number of prime implicants is $6$.</p><p data-end=\"1415\" data-start=\"1378\">Now check essential prime implicants.</p><p data-end=\"1488\" data-start=\"1417\">$\\mathrm{B}'\\mathrm{C}'$ is essential because it covers $m_9$ uniquely.</p><p data-end=\"1563\" data-start=\"1490\">$\\mathrm{C}\\mathrm{D}'$ is essential because it covers $m_{14}$ uniquely.</p><p data-end=\"1617\" data-start=\"1565\">So, the number of essential prime implicants is $2$.</p><p data-end=\"1691\" data-start=\"1619\"><strong>Answer: C</strong></p></div><br><br><a href=\"https://gateoverflow.in/535208/go-classes-dpp-gate-cs-digital-logic-implicants#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-digital-logic-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/digital-logic\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Digital Logic - Boolean Algebra</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"231\" data-start=\"31\">For the Boolean function $\\mathrm{F}(\\mathrm{A},\\mathrm{B},\\mathrm{C},\\mathrm{D})=\\Pi _M(0,2,9,13)+\\mathrm{d}(8,10,12)$, which of the following is the minimal POS form using K-map?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\mathrm{F}=(\\mathrm{B}+\\mathrm{D}')(\\mathrm{A}'+\\mathrm{C})$<br/></span>",
                "<span style=\"display: inline;\">$\\mathrm{F}=(\\mathrm{B}'+\\mathrm{D})(\\mathrm{A}'+\\mathrm{C})$<br/></span>",
                "<span style=\"display: inline;\">$\\mathrm{F}=(\\mathrm{B}+\\mathrm{D})(\\mathrm{A}'+\\mathrm{C})$<br/></span>",
                "<span style=\"display: inline;\">$\\mathrm{F}=(\\mathrm{B}+\\mathrm{D})(\\mathrm{A}+\\mathrm{C}')$</span>"
            ],
            "answer": "C",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"535110\"></a><div itemprop=\"text\"><p data-end=\"854\" data-start=\"733\">Given $\\mathrm{F}(\\mathrm{A},\\mathrm{B},\\mathrm{C},\\mathrm{D})=\\Pi _M(0,2,9,13)+\\mathrm{d}(8,10,12)$.</p><p data-end=\"921\" data-start=\"856\">Since maxterms are given, the cells $m_0,m_2,m_9,m_{13}$ are $0$.</p><p data-end=\"968\" data-start=\"923\">The don’t care cells are $m_8,m_{10},m_{12}$.</p><p data-end=\"1091\" data-start=\"970\">For POS simplification, we group the $0$s. Don’t care cells can also be used as $0$ if they help in making larger groups.</p><p style=\"text-align:center\"><img alt=\"\" height=\"347\" src=\"https://cdn.mathpix.com/snip/images/dTIybSMP68C1Opsc0x32PmwjxFi5cOhnJ7vkjk8DWUE.original.fullsize.png\" width=\"331\"/></p><p><strong>Answer: C</strong></p></div><br><br><a href=\"https://gateoverflow.in/535107/go-classes-dpp-gate-cs-digital-logic-k-map-simplification#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-digital-logic-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/digital-logic\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Digital Logic - Boolean Algebra</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"309\" data-start=\"120\">For the Boolean function $\\mathrm{F}(\\mathrm{A},\\mathrm{B},\\mathrm{C},\\mathrm{D})=\\Pi _M(3,6,7,12,14)$, which of the following is a correct minimal POS form using K-map?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\mathrm{F}=(\\mathrm{A}+\\mathrm{C}+\\mathrm{D}')(\\mathrm{A}'+\\mathrm{B}'+\\mathrm{D})(\\mathrm{B}'+\\mathrm{C}'+\\mathrm{D})$<br/></span>",
                "<span style=\"display: inline;\">$\\mathrm{F}=(\\mathrm{A}+\\mathrm{C}'+\\mathrm{D}')(\\mathrm{A}'+\\mathrm{B}'+\\mathrm{D}')(\\mathrm{B}'+\\mathrm{C}'+\\mathrm{D})$<br/></span>",
                "<span style=\"display: inline;\">$\\mathrm{F}=(\\mathrm{A}+\\mathrm{C}'+\\mathrm{D}')(\\mathrm{A}'+\\mathrm{B}'+\\mathrm{D})(\\mathrm{B}'+\\mathrm{C}'+\\mathrm{D})$<br/></span>",
                "<span style=\"display: inline;\">$\\mathrm{F}=(\\mathrm{A}+\\mathrm{C}'+\\mathrm{D}')(\\mathrm{A}'+\\mathrm{B}+\\mathrm{D})(\\mathrm{B}'+\\mathrm{C}'+\\mathrm{D})$</span>"
            ],
            "answer": "C",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"535106\"></a><div itemprop=\"text\"><p>Given $\\mathrm{F}(\\mathrm{A},\\mathrm{B},\\mathrm{C},\\mathrm{D})=\\Pi _M(3,6,7,12,14)$.</p><p data-end=\"1225\" data-start=\"1158\">Since maxterms are given, these are the cells where $\\mathrm{F}=0$.</p><p data-end=\"1225\" data-start=\"1158\">So, place $0$s at $\\mathrm{m}_3,\\mathrm{m}6,\\mathrm{m}7,\\mathrm{m}{12},\\mathrm{m}{14}$.</p><p data-end=\"1225\" data-start=\"1158\"> </p><p style=\"text-align:center\"><img alt=\"\" height=\"336\" src=\"https://cdn.mathpix.com/snip/images/hv4dul4W2L9Gzz0Xfj8aGhblZjvAEVFw4XrGrKwpp_k.original.fullsize.png\" width=\"447\"/></p><p data-end=\"1225\" data-start=\"1158\"><strong>Answer: C</strong></p></div><br><br><a href=\"https://gateoverflow.in/535104/go-classes-dpp-gate-cs-digital-logic-k-map-simplification#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-digital-logic-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/digital-logic\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Digital Logic - Boolean Algebra</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"268\" data-start=\"83\">For the Boolean function $\\mathrm{F}(\\mathrm{A},\\mathrm{B},\\mathrm{C},\\mathrm{D})=\\Pi _M(1,3,5,7,13,15)$, which of the following is the minimal POS form using K-map?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\mathrm{F}=(\\mathrm{A}+\\mathrm{D}')(\\mathrm{B}'+\\mathrm{D}')$<br/></span>",
                "<span style=\"display: inline;\">$\\mathrm{F}=(\\mathrm{A}'+\\mathrm{D})(\\mathrm{B}+\\mathrm{D})$<br/></span>",
                "<span style=\"display: inline;\">$\\mathrm{F}=(\\mathrm{A}+\\mathrm{C}')(\\mathrm{B}'+\\mathrm{D}')$<br/></span>",
                "<span style=\"display: inline;\">$\\mathrm{F}=(\\mathrm{A}+\\mathrm{D}')(\\mathrm{B}+\\mathrm{D}')$</span>"
            ],
            "answer": "A",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"535102\"></a><div itemprop=\"text\"><p data-end=\"879\" data-start=\"773\">Given $\\mathrm{F}(\\mathrm{A},\\mathrm{B},\\mathrm{C},\\mathrm{D})=\\Pi _M(1,3,5,7,13,15)$.</p><p data-end=\"948\" data-start=\"881\">Since maxterms are given, these are the cells where $\\mathrm{F}=0$.</p><p data-end=\"1000\" data-start=\"950\">So, place $0$s at $m_1,m_3,m_5,m_7,m_{13},m_{15}$.</p><p data-end=\"1056\" data-start=\"1002\">For POS simplification using K-map, we group the $0$s.</p><p data-end=\"1056\" data-start=\"1002\"> </p><p style=\"text-align:center\"><img alt=\"\" height=\"312\" src=\"https://cdn.mathpix.com/snip/images/8awlpJCNOa25mqrxHYfg0mGyeIyGSTx2AedCvGkx9t0.original.fullsize.png\" width=\"270\"/></p><p data-end=\"1056\" data-start=\"1002\"><br/><strong>Final Answer: A</strong></p></div><br><br><a href=\"https://gateoverflow.in/535099/go-classes-dpp-gate-cs-digital-logic-k-map-pos#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-digital-logic-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/digital-logic\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Digital Logic - Boolean Algebra</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"346\" data-start=\"158\">For the Boolean function $\\mathrm{F}(\\mathrm{A},\\mathrm{B},\\mathrm{C},\\mathrm{D})=\\Sigma _m(0,4,5,6,7,8,9)$, which of the following is the minimal POS form using K-map?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\mathrm{F}=(\\mathrm{A}'+\\mathrm{B}')(\\mathrm{B}+\\mathrm{C}')(\\mathrm{A}+\\mathrm{B}+\\mathrm{D}')$<br/></span>",
                "<span style=\"display: inline;\">$\\mathrm{F}=(\\mathrm{A}+\\mathrm{B})(\\mathrm{B}+\\mathrm{C}')(\\mathrm{A}'+\\mathrm{B}'+\\mathrm{D})$<br/></span>",
                "<span style=\"display: inline;\">$\\mathrm{F}=(\\mathrm{A}'+\\mathrm{B}')(\\mathrm{B}'+\\mathrm{C})(\\mathrm{A}+\\mathrm{B}+\\mathrm{D}')$<br/></span>",
                "<span style=\"display: inline;\">$\\mathrm{F}=(\\mathrm{A}'+\\mathrm{B}')(\\mathrm{B}+\\mathrm{C})(\\mathrm{A}+\\mathrm{B}+\\mathrm{D})$</span>"
            ],
            "answer": "A",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"535098\"></a><div itemprop=\"text\"><p data-end=\"1100\" data-start=\"991\">Given $\\mathrm{F}(\\mathrm{A},\\mathrm{B},\\mathrm{C},\\mathrm{D})=\\Sigma \\mathrm{m}(0,4,5,6,7,8,9)$.</p><p data-end=\"1157\" data-start=\"1102\">For POS simplification, we group the $0$s in the K-map.</p><p data-end=\"1231\" data-start=\"1159\">The $0$s are at $m_1,m_2,m_3,m_{10},m_{11},m_{12},m_{13},m_{14},m_{15}$.</p><p data-end=\"1231\" data-start=\"1159\"> </p><p style=\"text-align:center\"><img alt=\"\" height=\"313\" src=\"https://cdn.mathpix.com/snip/images/0jhDrQN6aY6sgoUgoFHFqWgrpKEdggD3r3by1aE3o9M.original.fullsize.png\" width=\"337\"/></p><p data-end=\"1231\" data-start=\"1159\"> </p><p data-end=\"1231\" data-start=\"1159\"><strong>Final Answer: A</strong></p></div><br><br><a href=\"https://gateoverflow.in/535097/go-classes-dpp-gate-cs-digital-logic-k-map-simplification#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-digital-logic-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/digital-logic\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Digital Logic - Boolean Algebra</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"247\" data-start=\"43\">For the Boolean function $\\mathrm{F}(\\mathrm{A},\\mathrm{B},\\mathrm{C},\\mathrm{D})=\\Sigma _m(1,3,7,11,15)+\\mathrm{d}(0,2,5)$, which of the following is the minimal SOP form using K-map?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\mathrm{F}=\\mathrm{A}'\\mathrm{D}+\\mathrm{C}\\mathrm{D}$<br/></span>",
                "<span style=\"display: inline;\">$\\mathrm{F}=\\mathrm{B}'\\mathrm{D}+\\mathrm{C}\\mathrm{D}$<br/></span>",
                "<span style=\"display: inline;\">$\\mathrm{F}=\\mathrm{A}'\\mathrm{B}'\\mathrm{D}+\\mathrm{C}\\mathrm{D}$<br/></span>",
                "<span style=\"display: inline;\">$\\mathrm{F}=\\mathrm{A}'\\mathrm{D}+\\mathrm{A}\\mathrm{C}$</span>"
            ],
            "answer": "A",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"535094\"></a><div itemprop=\"text\"><p data-end=\"893\" data-start=\"768\">Given $\\mathrm{F}(\\mathrm{A},\\mathrm{B},\\mathrm{C},\\mathrm{D})=\\Sigma _m(1,3,7,11,15)+\\mathrm{d}(0,2,5)$.</p><p data-end=\"948\" data-start=\"895\">Here, $1$s are placed at $m_1,m_3,m_7,m_{11},m_{15}$.</p><p data-end=\"995\" data-start=\"950\">Don’t care cells are placed at $m_0,m_2,m_5$.</p><p style=\"text-align:center\"><img alt=\"\" height=\"337\" src=\"https://cdn.mathpix.com/snip/images/F-wuM2LD94dNEDULZD7lByUlc8kCVdoczOfuMud1MiY.original.fullsize.png\" width=\"309\"/></p><p data-end=\"1095\" data-start=\"997\">In K-map simplification, don’t care cells can be used as $1$ if they help in making larger groups.</p><p data-end=\"1134\" data-start=\"1097\">First, group $m_3,m_7,m_{11},m_{15}$.</p><p data-end=\"1206\" data-start=\"1136\">These four cells form a group in the column $\\mathrm{C}\\mathrm{D}=11$.</p><p data-end=\"1315\" data-start=\"1208\">In this group, $\\mathrm{A}$ and $\\mathrm{B}$ change, but $\\mathrm{C}=1$ and $\\mathrm{D}=1$ remain constant.</p><p data-end=\"1361\" data-start=\"1317\">So, this group gives $\\mathrm{C}\\mathrm{D}$.</p><p data-end=\"1394\" data-start=\"1363\">Now $m_1$ is still not covered.</p><p data-end=\"1454\" data-start=\"1396\">Use the don’t care cell $m_5$ and group $m_1,m_3,m_5,m_7$.</p><p data-end=\"1563\" data-start=\"1456\">In this group, $\\mathrm{B}$ and $\\mathrm{C}$ change, but $\\mathrm{A}=0$ and $\\mathrm{D}=1$ remain constant.</p><p data-end=\"1610\" data-start=\"1565\">So, this group gives $\\mathrm{A}'\\mathrm{D}$.</p><p data-end=\"1703\" data-start=\"1612\">Therefore, the minimal SOP form is $\\mathrm{F}=\\mathrm{A}'\\mathrm{D}+\\mathrm{C}\\mathrm{D}$.</p><p data-end=\"1777\" data-is-last-node=\"\" data-is-only-node=\"\" data-start=\"1705\"><strong>Final Answer: A</strong></p></div><br><br><a href=\"https://gateoverflow.in/535093/go-classes-dpp-gate-cs-digital-logic-k-map-dont-cares#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-digital-logic-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/digital-logic\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Digital Logic - Boolean Algebra</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"287\" data-start=\"102\">For the Boolean function $\\mathrm{F}(\\mathrm{A},\\mathrm{B},\\mathrm{C},\\mathrm{D})=\\Sigma _m(0,2,4,5,6,7,8,10,13,15)$, which of the following is the minimal SOP form using K-map?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\mathrm{F}=\\mathrm{B}'\\mathrm{D}'+\\mathrm{A}'\\mathrm{B}+\\mathrm{B}\\mathrm{D}$<br/></span>",
                "<span style=\"display: inline;\">$\\mathrm{F}=\\mathrm{B}'\\mathrm{C}'+\\mathrm{A}'\\mathrm{B}+\\mathrm{C}\\mathrm{D}$<br/></span>",
                "<span style=\"display: inline;\">$\\mathrm{F}=\\mathrm{A}'\\mathrm{D}'+\\mathrm{A}'\\mathrm{B}+\\mathrm{B}\\mathrm{D}$<br/></span>",
                "<span style=\"display: inline;\">$\\mathrm{F}=\\mathrm{B}'\\mathrm{D}'+\\mathrm{A}\\mathrm{B}+\\mathrm{B}\\mathrm{D}$</span>"
            ],
            "answer": "A",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"535040\"></a><div itemprop=\"text\"><p><img alt=\"\" height=\"720\" src=\"https://gateoverflow.in/?qa=blob&amp;qa_blobid=4434972375816773991\" width=\"583\"/></p><p><strong>Option A</strong></p></div><br><br><a href=\"https://gateoverflow.in/534974/go-classes-dpp-gate-cs-digital-logic-k-map-simplification#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-digital-logic-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/digital-logic\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Digital Logic - Boolean Algebra</a></b></div></div>"
        },
        {
            "marks": 2,
            "neg": 0,
            "type": "MSQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"338\" data-start=\"140\">For the Boolean function $\\mathrm{F}(\\mathrm{A},\\mathrm{B},\\mathrm{C},\\mathrm{D})=\\Sigma _m(0,1,2,4,5,7,11,15)$, which of the following is a correct minimal SOP form using K-map?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\mathrm{F}=\\mathrm{A}\\mathrm{C}\\mathrm{D}+\\mathrm{A}'\\mathrm{C}'+\\mathrm{A}'\\mathrm{B}'\\mathrm{D}'+\\mathrm{B}\\mathrm{C}\\mathrm{D}$<br/></span>",
                "<span style=\"display: inline;\">$\\mathrm{F}=\\mathrm{A}\\mathrm{C}\\mathrm{D}+\\mathrm{A}'\\mathrm{C}'+\\mathrm{A}'\\mathrm{B}'\\mathrm{D}'+\\mathrm{A}'\\mathrm{B}\\mathrm{D}$<br/></span>",
                "<span style=\"display: inline;\">$\\mathrm{F}=\\mathrm{A}'\\mathrm{C}'+\\mathrm{A}'\\mathrm{B}'\\mathrm{D}'+\\mathrm{A}\\mathrm{C}\\mathrm{D}$<br/></span>",
                "<span style=\"display: inline;\">$\\mathrm{F}=\\mathrm{A}'\\mathrm{C}'+\\mathrm{A}'\\mathrm{B}\\mathrm{D}+\\mathrm{B}\\mathrm{C}\\mathrm{D}$</span>"
            ],
            "answer": "A",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"534973\"></a><div itemprop=\"text\"><p data-end=\"1131\" data-start=\"1018\">Given $\\mathrm{F}(\\mathrm{A},\\mathrm{B},\\mathrm{C},\\mathrm{D})=\\Sigma _m(0,1,2,4,5,7,11,15)$.</p><p data-end=\"1206\" data-start=\"1133\">First place $1$s in the K-map at $m_0,m_1,m_2,m_4,m_5,m_7,m_{11},m_{15}$.</p><p data-end=\"1206\" data-start=\"1133\">Now, we'll start grouping them.</p><p data-end=\"1206\" data-start=\"1133\"> </p><p style=\"text-align:center\"><img alt=\"\" height=\"332\" src=\"https://cdn.mathpix.com/snip/images/lHLFZfTgpCNxdLtQD_NwZHeOf1il1by80eSB9mmTh7Y.original.fullsize.png\" width=\"718\"/></p><p>Both are correct minimal SOP Forms :</p><ul><li>Option $1 : \\mathrm{F}=\\mathrm{A}\\mathrm{C}\\mathrm{D}+\\mathrm{A}'\\mathrm{C}'+\\mathrm{A}'\\mathrm{B}'\\mathrm{D}'+\\mathrm{B}\\mathrm{C}\\mathrm{D}$<br/> </li><li>Option $2 : \\mathrm{F}=\\mathrm{A}\\mathrm{C}\\mathrm{D}+\\mathrm{A}'\\mathrm{C}'+\\mathrm{A}'\\mathrm{B}'\\mathrm{D}'+\\mathrm{A}'\\mathrm{B}\\mathrm{D}$</li></ul><div> </div><div><strong>Answer: A and B</strong></div></div><br><br><a href=\"https://gateoverflow.in/534953/go-classes-dpp-gate-cs-digital-logic-k-map-simplification#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-digital-logic-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/digital-logic\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Digital Logic - Boolean Algebra</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"244\" data-start=\"46\">For the Boolean function $\\mathrm{F}(\\mathrm{A},\\mathrm{B},\\mathrm{C},\\mathrm{D})=\\Sigma _m(0,1,2,3,8,9,10,11,14,15)$, which of the following is the minimal SOP form using K-map?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\mathrm{F}=\\mathrm{B}'+\\mathrm{A}\\mathrm{C}$<br/></span>",
                "<span style=\"display: inline;\">$\\mathrm{F}=\\mathrm{A}+\\mathrm{B}'\\mathrm{C}$<br/></span>",
                "<span style=\"display: inline;\">$\\mathrm{F}=\\mathrm{B}'+\\mathrm{A}\\mathrm{D}$<br/></span>",
                "<span style=\"display: inline;\">$\\mathrm{F}=\\mathrm{A}'\\mathrm{C}+\\mathrm{B}'\\mathrm{D}'$</span>"
            ],
            "answer": "A",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"534951\"></a><div itemprop=\"text\"><p data-end=\"1539\" data-start=\"1420\">Given, $\\mathrm{F}(\\mathrm{A},\\mathrm{B},\\mathrm{C},\\mathrm{D})=\\Sigma _m(0,1,2,3,8,9,10,11,14,15)$</p><p data-end=\"1587\" data-start=\"1541\">Place $1$s in the K-map at the given minterms.<br/> </p><p style=\"text-align:center\"><img alt=\"\" height=\"273\" src=\"https://cdn.mathpix.com/snip/images/uSfQKT2uuD44grgI49liJ90eGZlznQ5vGKIF-FnHWaY.original.fullsize.png\" width=\"273\"/></p><p data-end=\"1626\" data-start=\"1589\"><br/>Now make the largest possible groups.</p><p data-end=\"1719\" data-start=\"1628\">First, group the $8$ cells in rows $\\mathrm{A}\\mathrm{B}=00$ and $\\mathrm{A}\\mathrm{B}=10$.</p><p data-end=\"1791\" data-start=\"1721\">These two rows are adjacent in K-map because of wrap-around adjacency.</p><p data-end=\"1877\" data-start=\"1793\">In this group, $\\mathrm{A}$ changes, $\\mathrm{C}$ changes, and $\\mathrm{D}$ changes.</p><p data-end=\"1916\" data-start=\"1879\">Only $\\mathrm{B}=0$ remains constant.</p><p data-end=\"1962\" data-start=\"1918\">So, this group gives the term $\\mathrm{B}'$.</p><p data-end=\"2022\" data-start=\"1964\">Now the cells $m_{14}$ and $m_{15}$ are still not covered.</p><p data-end=\"2069\" data-start=\"2024\">Group $m_{10},m_{11},m_{14},m_{15}$ together.</p><p data-end=\"2132\" data-start=\"2071\">In this group, $\\mathrm{B}$ changes and $\\mathrm{D}$ changes.</p><p data-end=\"2188\" data-start=\"2134\">But $\\mathrm{A}=1$ and $\\mathrm{C}=1$ remain constant.</p><p data-end=\"2243\" data-start=\"2190\">So, this group gives the term $\\mathrm{A}\\mathrm{C}$.</p><p data-end=\"2326\" data-start=\"2245\">Therefore, the minimal SOP form is $\\mathrm{F}=\\mathrm{B}'+\\mathrm{A}\\mathrm{C}$.</p><p data-end=\"2390\" data-is-last-node=\"\" data-is-only-node=\"\" data-start=\"2328\"><strong>Final Answer: A</strong></p></div><br><br><a href=\"https://gateoverflow.in/534950/go-classes-dpp-gate-cs-digital-logic-k-map-simplification#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-digital-logic-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/digital-logic\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Digital Logic - Boolean Algebra</a></b></div></div>"
        }
    ]
});

registerTest({
    "name": "DPP 09 - Digital Logic (Boolean Algebra - Part 3)",
    "testLabel": "DPP 09",
    "testType": "DPP",
    "bracket": "Boolean Algebra - Part 3",
    "subject": "dl",
    "series": "cse-dpp-2027",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 10,
    "topicsCovered": "Boolean Algebra (Practice Set 3)",
    "questions": [
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"207\" data-start=\"46\">For the Boolean function $\\mathrm{F}(\\mathrm{A},\\mathrm{B},\\mathrm{C})=\\Sigma _m(1,3,4,5,7)$, which of the following is the minimal SOP form?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\mathrm{F}=\\mathrm{A}+\\mathrm{C}$<br/></span>",
                "<span style=\"display: inline;\">$\\mathrm{F}=\\mathrm{A}\\mathrm{B}'+\\mathrm{C}$<br/></span>",
                "<span style=\"display: inline;\">$\\mathrm{F}=\\mathrm{A}\\mathrm{C}+\\mathrm{B}'\\mathrm{C}$<br/></span>",
                "<span style=\"display: inline;\">$\\mathrm{F}=\\mathrm{A}+\\mathrm{B}\\mathrm{C}$</span>"
            ],
            "answer": "B",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"534949\"></a><div itemprop=\"text\"><p data-end=\"1032\" data-start=\"950\">Given $\\mathrm{F}(\\mathrm{A},\\mathrm{B},\\mathrm{C})=\\Sigma _m(1,3,4,5,7)$.</p><p data-end=\"1089\" data-start=\"1034\">Place $1$s in the K-map at cells $m_1,m_3,m_4,m_5,m_7$.</p><p style=\"text-align:center\"><img alt=\"\" height=\"156\" src=\"https://cdn.mathpix.com/snip/images/NsmJQppwvsxNXlWdNHOGKo2BRI4he1VYdkoWiKbgJ0k.original.fullsize.png\" width=\"254\"/></p><p data-end=\"1128\" data-start=\"1091\">Now make the largest possible groups.</p><p data-end=\"1170\" data-start=\"1130\">First, group $m_1,m_3,m_5,m_7$ together.</p><p data-end=\"1266\" data-start=\"1172\">In this group, $\\mathrm{A}$ changes from $0$ to $1$, and $\\mathrm{B}$ changes from $0$ to $1$.</p><p data-end=\"1305\" data-start=\"1268\">Only $\\mathrm{C}=1$ remains constant.</p><p data-end=\"1350\" data-start=\"1307\">So, this group gives the term $\\mathrm{C}$.</p><p data-end=\"1380\" data-start=\"1352\">Now $m_4$ is left uncovered.</p><p data-end=\"1405\" data-start=\"1382\">Group $m_4$ with $m_5$.</p><p data-end=\"1459\" data-start=\"1407\">In this group, $\\mathrm{C}$ changes from $0$ to $1$.</p><p data-end=\"1515\" data-start=\"1461\">But $\\mathrm{A}=1$ and $\\mathrm{B}=0$ remain constant.</p><p data-end=\"1571\" data-start=\"1517\">So, this group gives the term $\\mathrm{A}\\mathrm{B}'$.</p><p data-end=\"1654\" data-start=\"1573\">Therefore, the minimal SOP form is $\\mathrm{F}=\\mathrm{C}+\\mathrm{A}\\mathrm{B}'$.</p><p data-end=\"1718\" data-is-last-node=\"\" data-is-only-node=\"\" data-start=\"1656\"><strong>Answer: B</strong></p></div><br><br><a href=\"https://gateoverflow.in/534945/go-classes-dpp-gate-cs-digital-logic-k-map-simplification#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-digital-logic-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/digital-logic\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Digital Logic - Boolean Algebra</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"336\" data-start=\"231\">Simplify the Boolean expression $\\mathrm{Z=AB+(C'+A'B')'+A'(AB+AC'D')}$ and identify its minterm form.</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\mathrm{Z=AB+AC+BC},\\ \\quad\\Sigma _m(6,7,10,11,12,13,14,15)$<br/></span>",
                "<span style=\"display: inline;\">$\\mathrm{Z=AB+A'C+BC},\\ \\quad\\Sigma _m(3,5,7,9,11,13,15)$<br/></span>",
                "<span style=\"display: inline;\">$\\mathrm{Z=AB+C'D},\\ \\quad\\Sigma _m(4,5,12,13)$<br/></span>",
                "<span style=\"display: inline;\">$\\mathrm{Z=AC+B'C},\\ \\quad\\Sigma _m(2,3,10,11)$</span>"
            ],
            "answer": "A",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"534944\"></a><div itemprop=\"text\"><p data-end=\"895\" data-start=\"738\">Given, $\\mathrm{Z}=\\mathrm{A}\\mathrm{B}+(\\mathrm{C}'+\\mathrm{A}'\\mathrm{B}')'+\\mathrm{A}'(\\mathrm{A}\\mathrm{B}+\\mathrm{A}\\mathrm{C}'\\mathrm{D}')$</p><p data-end=\"974\" data-start=\"897\">First simplify $(\\mathrm{C}'+\\mathrm{A}'\\mathrm{B}')'$ using De Morgan’s law.</p><p data-end=\"1052\" data-start=\"976\">$\\Rightarrow(\\mathrm{C}'+\\mathrm{A}'\\mathrm{B}')'=\\mathrm{C}(\\mathrm{A}'\\mathrm{B}')'$</p><p data-end=\"1109\" data-start=\"1054\">Now, $(\\mathrm{A}'\\mathrm{B}')'=\\mathrm{A}+\\mathrm{B}$.</p><p data-end=\"1189\" data-start=\"1111\">$\\Rightarrow(\\mathrm{C}'+\\mathrm{A}'\\mathrm{B}')'=\\mathrm{C}(\\mathrm{A}+\\mathrm{B})$</p><p data-end=\"1284\" data-start=\"1191\">$\\Rightarrow(\\mathrm{C}'+\\mathrm{A}'\\mathrm{B}')'=\\mathrm{A}\\mathrm{C}+\\mathrm{B}\\mathrm{C}$</p><p data-end=\"1313\" data-start=\"1286\">Now simplify the last term.</p><p data-end=\"1460\" data-start=\"1315\">$\\mathrm{A}'(\\mathrm{A}\\mathrm{B}+\\mathrm{A}\\mathrm{C}'\\mathrm{D}')=\\mathrm{A}'\\mathrm{A}\\mathrm{B}+\\mathrm{A}'\\mathrm{A}\\mathrm{C}'\\mathrm{D}'$</p><p data-end=\"1517\" data-start=\"1462\">Since $\\mathrm{A}'\\mathrm{A}=0$, both terms become $0$</p><p data-end=\"1594\" data-start=\"1519\">$\\Rightarrow\\mathrm{A}'(\\mathrm{A}\\mathrm{B}+\\mathrm{A}\\mathrm{C}'\\mathrm{D}')=0$.</p><p data-end=\"1616\" data-start=\"1596\">Now substitute back.</p><p data-end=\"1694\" data-start=\"1618\">$\\boxed{\\therefore \\mathrm{Z}=\\mathrm{A}\\mathrm{B}+\\mathrm{A}\\mathrm{C}+\\mathrm{B}\\mathrm{C}}$</p><p data-end=\"1722\" data-start=\"1696\">Now identify the minterms.</p><p data-end=\"1888\" data-start=\"1724\">The expression $\\mathrm{A}\\mathrm{B}+\\mathrm{A}\\mathrm{C}+\\mathrm{B}\\mathrm{C}$ is $1$ when at least two variables among $\\mathrm{A},\\mathrm{B},\\mathrm{C}$ are $1$.</p><p data-end=\"1968\" data-start=\"1890\">The valid $\\mathrm{A}\\mathrm{B}\\mathrm{C}$ combinations are $011,101,110,111$</p><p data-end=\"2072\" data-start=\"1970\">Since $\\mathrm{D}$ is not present in the simplified expression, $\\mathrm{D}$ can be either $0$ or $1$</p><p data-end=\"2151\" data-start=\"2074\">For $\\mathrm{A}\\mathrm{B}\\mathrm{C}=011$, minterms are $0110=6$ and $0111=7$</p><p data-end=\"2232\" data-start=\"2153\">For $\\mathrm{A}\\mathrm{B}\\mathrm{C}=101$, minterms are $1010=10$ and $1011=11$</p><p data-end=\"2313\" data-start=\"2234\">For $\\mathrm{A}\\mathrm{B}\\mathrm{C}=110$, minterms are $1100=12$ and $1101=13$</p><p data-end=\"2394\" data-start=\"2315\">For $\\mathrm{A}\\mathrm{B}\\mathrm{C}=111$, minterms are $1110=14$ and $1111=15$</p><p data-end=\"2461\" data-start=\"2396\">$\\boxed{\\therefore \\mathrm{Z}=\\Sigma _m(6,7,10,11,12,13,14,15)}$</p><p data-end=\"2598\" data-is-last-node=\"\" data-is-only-node=\"\" data-start=\"2463\"><strong>Answer: A</strong></p></div><br><br><a href=\"https://gateoverflow.in/534943/go-classes-dpp-gate-cs-digital-logic-boolean-simplification#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-digital-logic-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/digital-logic\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Digital Logic - Boolean Algebra</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"3159\" data-start=\"3062\">For $F(A,B,C)=A'B+B'C+AC'$, which of the following is the correct canonical POS form?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$(A+B+C)(A'+B'+C')$<br/></span>",
                "<span style=\"display: inline;\">$(A+B+C')(A'+B'+C)$<br/></span>",
                "<span style=\"display: inline;\">$(A+B'+C)(A'+B+C')$<br/></span>",
                "<span style=\"display: inline;\">$(A'+B+C)(A+B'+C')$</span>"
            ],
            "answer": "A",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"534817\"></a><div itemprop=\"text\"><p data-end=\"3294\" data-start=\"3260\">Given, $F=A'B+B'C+AC'$</p><p data-end=\"3333\" data-start=\"3296\">Check where the function becomes $0$.</p><p data-end=\"3351\" data-start=\"3335\">$$<br/>\\begin{array}{c|c|c|c|c|c|c}<br/>A &amp; B &amp; C &amp; A'B &amp; B'C &amp; AC' &amp; F \\\\<br/>\\hline<br/>0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 0 \\\\<br/>0 &amp; 0 &amp; 1 &amp; 0 &amp; 1 &amp; 0 &amp; 1 \\\\<br/>0 &amp; 1 &amp; 0 &amp; 1 &amp; 0 &amp; 0 &amp; 1 \\\\<br/>0 &amp; 1 &amp; 1 &amp; 1 &amp; 0 &amp; 0 &amp; 1 \\\\<br/>1 &amp; 0 &amp; 0 &amp; 0 &amp; 0 &amp; 1 &amp; 1 \\\\<br/>1 &amp; 0 &amp; 1 &amp; 0 &amp; 1 &amp; 0 &amp; 1 \\\\<br/>1 &amp; 1 &amp; 0 &amp; 0 &amp; 0 &amp; 1 &amp; 1 \\\\<br/>1 &amp; 1 &amp; 1 &amp; 0 &amp; 0 &amp; 0 &amp; 0<br/>\\end{array}<br/>$$</p><p data-end=\"3585\" data-start=\"3527\">So, zero indices are $0$ and $7$.</p><p data-end=\"3650\" data-start=\"3622\">Now write the canonical POS.</p><p data-end=\"3707\" data-start=\"3652\">For maxterm $0$, binary is $000$, so term is $(A+B+C)$</p><p data-end=\"3767\" data-start=\"3709\">For maxterm $7$, binary is $111$, so term is $(A'+B'+C')$</p><p data-end=\"3817\" data-start=\"3769\">Therefore, canonical POS is $(A+B+C)(A'+B'+C')$</p><p data-end=\"3855\" data-is-last-node=\"\" data-is-only-node=\"\" data-start=\"3819\"><strong>Answer: A</strong></p></div><br><br><a href=\"https://gateoverflow.in/534816/go-classes-dpp-gate-cs-digital-logic-canonical-forms#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-digital-logic-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/digital-logic\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Digital Logic - Boolean Algebra</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"2334\" data-start=\"2239\">For $F(X,Y,Z)=X'+YZ'+YZ$, which of the following is the correct canonical POS form?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$(X'+Y+Z)(X'+Y+Z')$<br/></span>",
                "<span style=\"display: inline;\">$(X+Y+Z)(X+Y+Z')$<br/></span>",
                "<span style=\"display: inline;\">$(X'+Y'+Z)(X'+Y'+Z')$<br/></span>",
                "<span style=\"display: inline;\">$(X+Y'+Z)(X+Y'+Z')$</span>"
            ],
            "answer": "A",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"534815\"></a><div itemprop=\"text\"><p data-end=\"2467\" data-start=\"2435\">Given, $F=X'+YZ'+YZ$</p><p data-end=\"2499\" data-start=\"2469\">First simplify the expression.</p><p data-end=\"2518\" data-start=\"2501\">$YZ'+YZ=Y(Z'+Z)$</p><p data-end=\"2554\" data-start=\"2520\">Since $Z'+Z=1$, we get $YZ'+YZ=Y$</p><p data-end=\"2569\" data-start=\"2556\">$\\Rightarrow F=X'+Y$</p><p data-end=\"2592\" data-start=\"2571\">Now find where $F=0$</p><p data-end=\"2641\" data-start=\"2594\">For $F=X'+Y$ to be $0$, both terms must be $0$</p><p data-end=\"2664\" data-start=\"2643\">$\\Rightarrow X'=0$ and $Y=0$</p><p data-end=\"2693\" data-start=\"2666\">$\\Rightarrow X=1$ and $Y=0$</p><p data-end=\"2724\" data-start=\"2695\">$Z$ can be either $0$ or $1$</p><p data-end=\"2772\" data-start=\"2726\">So, the zero combinations are $100$ and $101$</p><p data-end=\"2815\" data-start=\"2774\">These correspond to maxterms $4$ and $5$</p><p data-end=\"2873\" data-start=\"2817\">For maxterm $4$, binary is $100$, so term is $(X'+Y+Z)$</p><p data-end=\"2932\" data-start=\"2875\">For maxterm $5$, binary is $101$, so term is $(X'+Y+Z')$</p><p data-end=\"2982\" data-start=\"2934\">Therefore, canonical POS is $(X'+Y+Z)(X'+Y+Z')$</p><p data-end=\"3020\" data-start=\"2984\"><strong>Answer: A</strong></p></div><br><br><a href=\"https://gateoverflow.in/534814/go-classes-dpp-gate-cs-digital-logic-canonical-forms#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-digital-logic-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/digital-logic\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Digital Logic - Boolean Algebra</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"1656\" data-start=\"1551\">For $F(A,B,C,D)=\\Sigma _m(1,2,5,7)$, which of the following is the correct canonical SOP form?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$A'B'C'D+A'B'CD'+A'BC'D+A'BCD$<br/></span>",
                "<span style=\"display: inline;\">$A'B'C'D'+A'B'CD+A'BC'D'+A'BCD'$<br/></span>",
                "<span style=\"display: inline;\">$AB'C'D+A'B'CD'+A'BC'D+ABCD$<br/></span>",
                "<span style=\"display: inline;\">$A'B'C'D+A'B'CD'+AB'C'D+A'BCD$</span>"
            ],
            "answer": "A",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"534813\"></a><div itemprop=\"text\"><p data-end=\"1850\" data-start=\"1801\">Given $F(A,B,C,D)=\\Sigma _m(1,2,5,7)$.</p><p data-end=\"1906\" data-start=\"1852\">For $4$ variables, write each index in $4$-bit binary.</p><p data-end=\"1952\" data-start=\"1908\">Minterm $1$ is $0001$, so term is $A'B'C'D$.</p><p data-end=\"1998\" data-start=\"1954\">Minterm $2$ is $0010$, so term is $A'B'CD'$.</p><p data-end=\"2043\" data-start=\"2000\">Minterm $5$ is $0101$, so term is $A'BC'D$.</p><p data-end=\"2087\" data-start=\"2045\">Minterm $7$ is $0111$, so term is $A'BCD$.</p><p data-end=\"2148\" data-start=\"2089\">Therefore, canonical SOP is $A'B'C'D+A'B'CD'+A'BC'D+A'BCD$.</p><p data-end=\"2197\" data-start=\"2150\"><strong>Answer: A</strong></p></div><br><br><a href=\"https://gateoverflow.in/534812/go-classes-dpp-gate-cs-digital-logic-canonical-forms#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-digital-logic-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/digital-logic\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Digital Logic - Boolean Algebra</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"813\" data-start=\"713\">For $F(A,B,C)=\\Pi _M(1,2,4,6)$, which of the following is the correct canonical SOP form?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$A'B'C'+A'BC+AB'C+ABC$<br/></span>",
                "<span style=\"display: inline;\">$A'B'C+A'BC'+AB'C'+ABC'$<br/></span>",
                "<span style=\"display: inline;\">$A'BC'+AB'C+A'B'C+ABC$<br/></span>",
                "<span style=\"display: inline;\">$A'B'C'+A'B'C+AB'C+ABC'$</span>"
            ],
            "answer": "A",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"534811\"></a><div itemprop=\"text\"><p data-end=\"974\" data-start=\"930\">Given, $F(A,B,C)=\\Pi _M(1,2,4,6)$</p><p data-end=\"1037\" data-start=\"976\">Maxterm indices represent the input combinations where $F=0$</p><p data-end=\"1087\" data-start=\"1039\">For $3$ variables, total indices are $0$ to $7$</p><p data-end=\"1113\" data-start=\"1089\">So, $F=0$ for $1,2,4,6$</p><p data-end=\"1168\" data-start=\"1115\">Therefore, $F=1$ for the remaining indices $0,3,5,7$</p><p data-end=\"1198\" data-start=\"1170\">Now write the canonical SOP.</p><p data-end=\"1254\" data-start=\"1200\">For minterm $0$, binary is $000$, so term is $A'B'C'$</p><p data-end=\"1308\" data-start=\"1256\">For minterm $3$, binary is $011$, so term is $A'BC$</p><p data-end=\"1362\" data-start=\"1310\">For minterm $5$, binary is $101$, so term is $AB'C$</p><p data-end=\"1415\" data-start=\"1364\">For minterm $7$, binary is $111$, so term is $ABC$</p><p data-end=\"1468\" data-start=\"1417\">Therefore, canonical SOP is $A'B'C'+A'BC+AB'C+ABC$</p><p data-end=\"1509\" data-start=\"1470\"><strong>Answer: A</strong></p></div><br><br><a href=\"https://gateoverflow.in/534810/go-classes-dpp-gate-cs-digital-logic-canonical-forms#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-digital-logic-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/digital-logic\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Digital Logic - Boolean Algebra</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"276\" data-start=\"175\">For $F(X,Y,Z)=\\Sigma _m(0,2,3)$, which of the following is the correct canonical SOP form?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$X'Y'Z'+X'YZ'+X'YZ$<br/></span>",
                "<span style=\"display: inline;\">$X'Y'Z+XY'Z'+XY'Z$<br/></span>",
                "<span style=\"display: inline;\">$X'Y'Z'+X'Y'Z+X'YZ'$<br/></span>",
                "<span style=\"display: inline;\">$XYZ+XY'Z+X'YZ$</span>"
            ],
            "answer": "A",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"534809\"></a><div itemprop=\"text\"><p data-end=\"418\" data-start=\"373\">Given $F(X,Y,Z)=\\Sigma _m(0,2,3)$</p><p data-end=\"474\" data-start=\"420\">For minterm $0$, binary is $000$, so term is $X'Y'Z'$</p><p data-end=\"529\" data-start=\"476\">For minterm $2$, binary is $010$, so term is $X'YZ'$</p><p data-end=\"583\" data-start=\"531\">For minterm $3$, binary is $011$, so term is $X'YZ$</p><p data-end=\"633\" data-start=\"585\">Therefore, canonical SOP is $X'Y'Z'+X'YZ'+X'YZ$</p><p data-end=\"671\" data-start=\"635\"><strong>Answer: A</strong></p></div><br><br><a href=\"https://gateoverflow.in/534806/go-classes-dpp-gate-cs-digital-logic-canonical-forms#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-digital-logic-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/digital-logic\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Digital Logic - Boolean Algebra</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"3302\" data-start=\"3092\">For a Boolean function $F(A,B,C)$, where $A$ is the most significant variable, the output is $0$ for input combinations $000$, $011$, and $101$. Which of the following is the correct representation?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$F=\\Sigma (0,3,5)$<br/></span>",
                "<span style=\"display: inline;\">$F=\\Pi (0,3,5)$<br/></span>",
                "<span style=\"display: inline;\">$F=\\Sigma (1,2,6)$<br/></span>",
                "<span style=\"display: inline;\">$F=\\Pi (1,2,4,6,7)$</span>"
            ],
            "answer": "B",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"534611\"></a><div itemprop=\"text\"><p data-end=\"3484\" data-start=\"3401\">For $F(A,B,C)$, each input combination corresponds to a minterm number.</p><p data-end=\"3529\" data-start=\"3486\">Since $A$ is the most significant variable:</p><p data-end=\"3538\" data-start=\"3531\">$000=0$</p><p data-end=\"3547\" data-start=\"3540\">$011=3$</p><p data-end=\"3556\" data-start=\"3549\">$101=5$</p><p data-end=\"3617\" data-start=\"3558\">The question says the output is $0$ for these combinations.</p><p data-end=\"3693\" data-start=\"3619\">Maxterms are used for input combinations where the function output is $0$.</p><p data-end=\"3705\" data-start=\"3695\">Therefore,</p><p data-end=\"3723\" data-start=\"3707\">$F=\\Pi (0,3,5)$</p><p data-end=\"3800\" data-start=\"3725\">The minterms would be the remaining input combinations where output is $1$.</p><p data-end=\"3812\" data-start=\"3802\">Those are:</p><p data-end=\"3825\" data-start=\"3814\">$1,2,4,6,7$</p><p data-end=\"3864\" data-start=\"3827\">So, the equivalent SOP form would be:</p><p data-end=\"3889\" data-start=\"3866\">$F=\\Sigma (1,2,4,6,7)$</p><p data-end=\"3924\" data-is-last-node=\"\" data-is-only-node=\"\" data-start=\"3891\"><strong>Answer: B</strong></p></div><br><br><a href=\"https://gateoverflow.in/534610/go-classes-dpp-gate-cs-digital-logic-minterms-maxterms#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-digital-logic-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/digital-logic\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Digital Logic - Boolean Algebra</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"2532\" data-start=\"2445\">Simplify the Boolean expression $F=(A+\\overline{B})(A+C)+\\overline{A}B+BC$.</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$A+B+C$<br/></span>",
                "<span style=\"display: inline;\">$A+\\overline{B}C$<br/></span>",
                "<span style=\"display: inline;\">$AB+BC$<br/></span>",
                "<span style=\"display: inline;\">$A+C$</span>"
            ],
            "answer": "A",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"534609\"></a><div itemprop=\"text\"><p data-end=\"2611\" data-start=\"2593\">Given:</p><p data-end=\"2655\" data-start=\"2613\">$F=(A+\\overline{B})(A+C)+\\overline{A}B+BC$</p><p data-end=\"2687\" data-start=\"2657\">Use the law $(X+Y)(X+Z)=X+YZ$.</p><p data-end=\"2730\" data-start=\"2689\">Here, $X=A$, $Y=\\overline{B}$, and $Z=C$.</p><p data-end=\"2735\" data-start=\"2732\">So,</p><p data-end=\"2776\" data-start=\"2737\">$(A+\\overline{B})(A+C)=A+\\overline{B}C$</p><p data-end=\"2803\" data-start=\"2778\">Now substitute this back.</p><p data-end=\"2841\" data-start=\"2805\">$F=A+\\overline{B}C+\\overline{A}B+BC$</p><p data-end=\"2881\" data-start=\"2843\">Now use the law $A+\\overline{A}B=A+B$.</p><p data-end=\"2886\" data-start=\"2883\">So,</p><p data-end=\"2912\" data-start=\"2888\">$F=A+B+\\overline{B}C+BC$</p><p data-end=\"2944\" data-start=\"2914\">Now combine $B+\\overline{B}C$.</p><p data-end=\"2974\" data-start=\"2946\">Using $X+\\overline{X}Y=X+Y$,</p><p data-end=\"2997\" data-start=\"2976\">$B+\\overline{B}C=B+C$</p><p data-end=\"3009\" data-start=\"2999\">Therefore,</p><p data-end=\"3020\" data-start=\"3011\">$\\boxed{F=A+B+C}$</p><p data-end=\"3046\" data-start=\"3022\"><strong>Answer: A</strong></p></div><br><br><a href=\"https://gateoverflow.in/534608/go-classes-dpp-gate-cs-digital-logic-boolean-laws#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-digital-logic-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/digital-logic\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Digital Logic - Boolean Algebra</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"2970\" data-start=\"2907\">Simplify $F=(A+\\overline{B})(A+C)+A\\overline{C}+B$.</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$A+B+C$<br/></span>",
                "<span style=\"display: inline;\">$A+\\overline{B}C$<br/></span>",
                "<span style=\"display: inline;\">$A+B\\overline{C}$<br/></span>",
                "<span style=\"display: inline;\">$AB+C$</span>"
            ],
            "answer": "A",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"534529\"></a><div itemprop=\"text\"><p data-end=\"3102\" data-start=\"3042\">Given $F=(A+\\overline{B})(A+C)+A\\overline{C}+B$.</p><p data-end=\"3143\" data-start=\"3104\">First simplify $(A+\\overline{B})(A+C)$.</p><p data-end=\"3175\" data-start=\"3145\">Use the law $(X+Y)(X+Z)=X+YZ$.</p><p data-end=\"3218\" data-start=\"3177\">Here, $X=A$, $Y=\\overline{B}$, and $Z=C$.</p><p data-end=\"3223\" data-start=\"3220\">So,</p><p data-end=\"3264\" data-start=\"3225\">$(A+\\overline{B})(A+C)=A+\\overline{B}C$</p><p data-end=\"3291\" data-start=\"3266\">Now substitute this back.</p><p data-end=\"3328\" data-start=\"3293\">$F=A+\\overline{B}C+A\\overline{C}+B$</p><p data-end=\"3372\" data-start=\"3330\">Using absorption law, $A+A\\overline{C}=A$.</p><p data-end=\"3377\" data-start=\"3374\">So,</p><p data-end=\"3400\" data-start=\"3379\">$F=A+B+\\overline{B}C$</p><p data-end=\"3440\" data-start=\"3402\">Now use the law $X+\\overline{X}Y=X+Y$.</p><p data-end=\"3464\" data-start=\"3442\">Here, $X=B$ and $Y=C$.</p><p data-end=\"3469\" data-start=\"3466\">So,</p><p data-end=\"3492\" data-start=\"3471\">$B+\\overline{B}C=B+C$</p><p data-end=\"3504\" data-start=\"3494\">Therefore,</p><p data-end=\"3515\" data-start=\"3506\">$F=A+B+C$</p><p data-end=\"3541\" data-is-last-node=\"\" data-is-only-node=\"\" data-start=\"3517\"><strong>Answer: A</strong></p></div><br><br><a href=\"https://gateoverflow.in/534528/go-classes-dpp-gate-cs-digital-logic-boolean-laws#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-digital-logic-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/digital-logic\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Digital Logic - Boolean Algebra</a></b></div></div>"
        }
    ]
});

registerTest({
    "name": "DPP 10 - Digital Logic (Boolean Algebra - Part 4)",
    "testLabel": "DPP 10",
    "testType": "DPP",
    "bracket": "Boolean Algebra - Part 4",
    "subject": "dl",
    "series": "cse-dpp-2027",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 11,
    "topicsCovered": "Boolean Algebra (Practice Set 4)",
    "questions": [
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"2247\" data-start=\"2178\">Simplify $F=(A+B+C)(A+B+\\overline{C})(A+\\overline{B}+C)$.</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$A+BC$<br/></span>",
                "<span style=\"display: inline;\">$A+B+C$<br/></span>",
                "<span style=\"display: inline;\">$AB+C$<br/></span>",
                "<span style=\"display: inline;\">$A+\\overline{B}C$</span>"
            ],
            "answer": "A",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"534714\"></a><div itemprop=\"text\"><p><strong>Here is the explanation<img alt=\"\" height=\"745\" src=\"https://gateoverflow.in/?qa=blob&amp;qa_blobid=1447687423122448731\" width=\"1180\"/></strong></p></div><br><br><a href=\"https://gateoverflow.in/534526/go-classes-dpp-gate-cs-digital-logic-boolean-laws#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-digital-logic-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/digital-logic\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Digital Logic - Boolean Algebra</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"1671\" data-start=\"1598\">Simplify the Boolean expression $F=(A+B)(\\overline{A}+C)+BC$.</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$AC+\\overline{A}B$<br/></span>",
                "<span style=\"display: inline;\">$AC+BC$<br/></span>",
                "<span style=\"display: inline;\">$A+B$<br/></span>",
                "<span style=\"display: inline;\">$B+C$</span>"
            ],
            "answer": "A",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"534525\"></a><div itemprop=\"text\"><p data-end=\"1778\" data-start=\"1731\">Given $F=(A+B)(\\overline{A}+C)+BC$.</p><p data-end=\"1817\" data-start=\"1780\">First expand $(A+B)(\\overline{A}+C)$.</p><p data-end=\"1856\" data-start=\"1819\">$F=A\\overline{A}+AC+\\overline{A}B+BC$</p><p data-end=\"1882\" data-start=\"1858\">Since $A\\overline{A}=0$,</p><p data-end=\"1907\" data-start=\"1884\">$F=AC+\\overline{A}B+BC$</p><p data-end=\"1935\" data-start=\"1909\">Now use consensus theorem.</p><p data-end=\"1985\" data-start=\"1937\">The form $XY+\\overline{X}Z+YZ=XY+\\overline{X}Z$.</p><p data-end=\"2033\" data-start=\"1987\">Here, $AC+\\overline{A}B+BC$ matches this form.</p><p data-end=\"2066\" data-start=\"2035\">So, the redundant term is $BC$.</p><p data-end=\"2078\" data-start=\"2068\">Therefore,</p><p data-end=\"2100\" data-start=\"2080\">$F=AC+\\overline{A}B$</p><p data-end=\"2137\" data-start=\"2102\"><strong>Answer: A</strong></p></div><br><br><a href=\"https://gateoverflow.in/534524/go-classes-dpp-gate-cs-digital-logic-boolean-laws#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-digital-logic-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/digital-logic\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Digital Logic - Boolean Algebra</a></b></div></div>"
        },
        {
            "marks": 2,
            "neg": 0,
            "type": "MSQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-path-to-node=\"11\">Which of the following Boolean algebraic equations represent valid mathematical identities? (Select all that apply)</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\"><p data-path-to-node=\"12,0,0\">$A \\oplus B \\oplus AB = A + B$</p></span>",
                "<span style=\"display: inline;\"><p data-path-to-node=\"12,1,0\">$A + \\bar{A}B + \\bar{A}\\bar{B}C = A + B + C$</p></span>",
                "<span style=\"display: inline;\"><p data-path-to-node=\"12,2,0\">$(A + B)(\\bar{A} + C) = AC + \\bar{A}B$</p></span>",
                "<span style=\"display: inline;\"><p data-path-to-node=\"12,3,0\">$(A + B)\\overline{(AB)} = A \\odot B$</p></span>"
            ],
            "answer": [
                "A"
            ],
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"534449\"></a><div itemprop=\"text\"><ul><li><p data-path-to-node=\"14,0,0\"><b data-index-in-node=\"0\" data-path-to-node=\"14,0,0\">(A) is Correct:</b> Let's break down the left-hand side. $A \\oplus B = A\\bar{B} + \\bar{A}B$.</p><p data-path-to-node=\"14,0,0\">Now XOR this result with $AB$:</p><p data-path-to-node=\"14,0,0\">$(A\\bar{B} + \\bar{A}B) \\oplus AB = (A\\bar{B} + \\bar{A}B)\\overline{(AB)} + \\overline{(A\\bar{B} + \\bar{A}B)}(AB)$</p><p data-path-to-node=\"14,0,0\">Substitute $\\overline{(AB)} = \\bar{A} + \\bar{B}$ and recognize that $\\overline{A \\oplus B} = AB + \\bar{A}\\bar{B}$:</p><p data-path-to-node=\"14,0,0\">$= (A\\bar{B} + \\bar{A}B)(\\bar{A} + \\bar{B}) + (AB + \\bar{A}\\bar{B})(AB)$</p><p data-path-to-node=\"14,0,0\">$= A\\bar{B} + \\bar{A}B + AB = A + B$. This is a highly useful identity to memorize.</p></li><li><p data-path-to-node=\"14,1,0\"><b data-index-in-node=\"0\" data-path-to-node=\"14,1,0\">(B) is Correct:</b> This applies the <b data-index-in-node=\"33\" data-path-to-node=\"14,1,0\">Rule of the Missing Variable</b> (or Redundancy Law: $X + \\bar{X}Y = X + Y$) successively.</p><p data-path-to-node=\"14,1,0\">First: $A + \\bar{A}B = A + B$.</p><p data-path-to-node=\"14,1,0\">The expression becomes $(A + B) + \\bar{A}\\bar{B}C$.</p><p data-path-to-node=\"14,1,0\">Notice that $\\bar{A}\\bar{B} = \\overline{(A + B)}$ by De Morgan's Law.</p><p data-path-to-node=\"14,1,0\">Let $X = (A+B)$. The expression is $X + \\bar{X}C$, which simplifies to $X + C$.</p><p data-path-to-node=\"14,1,0\">Substituting $X$ back, we get $A + B + C$.</p></li><li><p data-path-to-node=\"14,2,0\"><b data-index-in-node=\"0\" data-path-to-node=\"14,2,0\">(C) is Correct:</b> This is the <b data-index-in-node=\"28\" data-path-to-node=\"14,2,0\">Transposition Theorem</b>. When expanded:</p><p data-path-to-node=\"14,2,0\">$(A + B)(\\bar{A} + C) = A\\bar{A} + AC + \\bar{A}B + BC$</p><p data-path-to-node=\"14,2,0\">$= AC + \\bar{A}B + BC$</p><p data-path-to-node=\"14,2,0\">By the Consensus Theorem on $AC + \\bar{A}B$, the term $BC$ is redundant. Thus, it simplifies to $AC + \\bar{A}B$.</p></li><li><p data-path-to-node=\"14,3,0\"><b data-index-in-node=\"0\" data-path-to-node=\"14,3,0\">(D) is Incorrect:</b> The expression $(A + B)\\overline{(AB)}$ simplifies to $(A + B)(\\bar{A} + \\bar{B}) = A\\bar{B} + \\bar{A}B$, which is the definition of <b data-index-in-node=\"147\" data-path-to-node=\"14,3,0\">XOR</b> ($A \\oplus B$), not XNOR ($A \\odot B$).</p></li></ul></div><br><br><a href=\"https://gateoverflow.in/534448/go-classes-dpp-gate-cs-digital-logic-boolean-laws#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-digital-logic-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/digital-logic\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Digital Logic - Boolean Algebra</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-path-to-node=\"3\">Consider the Boolean function $F(w, x, y, z)$ given by the following expression:</p><p>$$F = wxy + \\bar{w}z + xyz + w\\bar{x}y$$</p><p data-path-to-node=\"5\">If this expression is minimized using Boolean algebraic laws, which of the following represents the most simplified form?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\"><p data-path-to-node=\"6,0,0\">$wy + \\bar{w}z$</p></span>",
                "<span style=\"display: inline;\"><p data-path-to-node=\"6,1,0\">$wy + yz$</p></span>",
                "<span style=\"display: inline;\"><p data-path-to-node=\"6,2,0\">$wz + \\bar{w}y$</p></span>",
                "<span style=\"display: inline;\"><p data-path-to-node=\"6,3,0\">$wy + \\bar{w}z + xyz$</p></span>"
            ],
            "answer": "A",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"534721\"></a><div itemprop=\"text\"><p><strong>Correct answer is option -A ✅<img alt=\"\" height=\"811\" src=\"https://gateoverflow.in/?qa=blob&amp;qa_blobid=666239881921864530\" width=\"1199\"/></strong></p></div><br><br><a href=\"https://gateoverflow.in/534446/go-classes-dpp-gate-cs-digital-logic-boolean-laws#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-digital-logic-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/digital-logic\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Digital Logic - Boolean Algebra</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Simplify $F=(A+B)(\\overline{A}+C)(B+C)+AB$.</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$B+AC$<br/></span>",
                "<span style=\"display: inline;\">$AB+BC$<br/></span>",
                "<span style=\"display: inline;\">$AC+\\overline{A}B$<br/></span>",
                "<span style=\"display: inline;\">$A+B+C$</span>"
            ],
            "answer": "A",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"534439\"></a><div itemprop=\"text\"><p data-end=\"524\" data-start=\"472\">Given $F=(A+B)(\\overline{A}+C)(B+C)+AB$.</p><p data-end=\"554\" data-start=\"526\">First simplify $(A+B)(B+C)$.</p><p data-end=\"586\" data-start=\"556\">Use the law $(X+Y)(Y+Z)=Y+XZ$.</p><p data-end=\"618\" data-start=\"588\">Here, $X=A$, $Y=B$, and $Z=C$.</p><p data-end=\"642\" data-start=\"620\">So, $(A+B)(B+C)=B+AC$.</p><p data-end=\"682\" data-start=\"644\">Now substitute this in the expression.</p><p data-end=\"714\" data-start=\"684\">$F=(B+AC)(\\overline{A}+C)+AB$.</p><p data-end=\"731\" data-start=\"716\">Now distribute.</p><p data-end=\"777\" data-start=\"733\">$F=B(\\overline{A}+C)+AC(\\overline{A}+C)+AB$.</p><p data-end=\"822\" data-start=\"779\">$F=B\\overline{A}+BC+AC\\overline{A}+ACC+AB$.</p><p data-end=\"843\" data-start=\"824\">Now simplify terms.</p><p data-end=\"889\" data-start=\"845\">Since $A\\overline{A}=0$, $AC\\overline{A}=0$.</p><p data-end=\"906\" data-start=\"891\">Also, $ACC=AC$.</p><p data-end=\"911\" data-start=\"908\">So,</p><p data-end=\"940\" data-start=\"913\">$F=B\\overline{A}+BC+AC+AB$.</p><p data-end=\"973\" data-start=\"942\">Now combine $B\\overline{A}+AB$.</p><p data-end=\"1012\" data-start=\"975\">$B\\overline{A}+AB=B(\\overline{A}+A)$.</p><p data-end=\"1039\" data-start=\"1014\">Since $\\overline{A}+A=1$,</p><p data-end=\"1063\" data-start=\"1041\">$B(\\overline{A}+A)=B$.</p><p data-end=\"1068\" data-start=\"1065\">So,</p><p data-end=\"1082\" data-start=\"1070\">$F=B+BC+AC$.</p><p data-end=\"1115\" data-start=\"1084\">Using absorption law, $B+BC=B$.</p><p data-end=\"1127\" data-start=\"1117\">Therefore,</p><p data-end=\"1138\" data-start=\"1129\">$F=B+AC$.</p></div><br><br><a href=\"https://gateoverflow.in/534438/go-classes-dpp-gate-cs-digital-logic-boolean-laws#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-digital-logic-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/digital-logic\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Digital Logic - Boolean Algebra</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"112\" data-start=\"29\">Simplify $F=(A+B+\\overline{C})(A+\\overline{B}+C)(A+B+C)+A\\overline{C}$.</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$A+BC$<br/></span>",
                "<span style=\"display: inline;\">$A+B+C$<br/></span>",
                "<span style=\"display: inline;\">$AB+C$<br/></span>",
                "<span style=\"display: inline;\">$A+\\overline{B}C$</span>"
            ],
            "answer": "A",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"534211\"></a><div itemprop=\"text\"><p data-end=\"253\" data-start=\"173\">Given $F=(A+B+\\overline{C})(A+\\overline{B}+C)(A+B+C)+A\\overline{C}$.</p><p data-end=\"299\" data-start=\"255\">First simplify the first and third brackets.</p><p data-end=\"313\" data-start=\"301\">Let $X=A+B$.</p><p data-end=\"320\" data-start=\"315\">Then,</p><p data-end=\"372\" data-start=\"322\">$(A+B+\\overline{C})(A+B+C)=(X+\\overline{C})(X+C)$.</p><p data-end=\"414\" data-start=\"374\">Using the law $(X+Y)(X+\\overline{Y})=X$,</p><p data-end=\"442\" data-start=\"416\">$(X+\\overline{C})(X+C)=X$.</p><p data-end=\"447\" data-start=\"444\">So,</p><p data-end=\"481\" data-start=\"449\">$(A+B+\\overline{C})(A+B+C)=A+B$.</p><p data-end=\"510\" data-start=\"483\">Now the expression becomes:</p><p data-end=\"554\" data-start=\"512\">$F=(A+B)(A+\\overline{B}+C)+A\\overline{C}$.</p><p data-end=\"590\" data-start=\"556\">Now use the law $(X+Y)(X+Z)=X+YZ$.</p><p data-end=\"635\" data-start=\"592\">Here, $X=A$, $Y=B$, and $Z=\\overline{B}+C$.</p><p data-end=\"640\" data-start=\"637\">So,</p><p data-end=\"688\" data-start=\"642\">$(A+B)(A+\\overline{B}+C)=A+B(\\overline{B}+C)$.</p><p data-end=\"709\" data-start=\"690\">Now distribute $B$.</p><p data-end=\"752\" data-start=\"711\">$A+B(\\overline{B}+C)=A+B\\overline{B}+BC$.</p><p data-end=\"778\" data-start=\"754\">Since $B\\overline{B}=0$,</p><p data-end=\"808\" data-start=\"780\">$A+B\\overline{B}+BC=A+0+BC$.</p><p data-end=\"813\" data-start=\"810\">So,</p><p data-end=\"846\" data-start=\"815\">$(A+B)(A+\\overline{B}+C)=A+BC$.</p><p data-end=\"868\" data-start=\"848\">Now substitute back:</p><p data-end=\"893\" data-start=\"870\">$F=A+BC+A\\overline{C}$.</p><p data-end=\"937\" data-start=\"895\">Using absorption law, $A+A\\overline{C}=A$.</p><p data-end=\"949\" data-start=\"939\">Therefore,</p><p data-end=\"960\" data-start=\"951\">$F=A+BC$.</p><p data-end=\"985\" data-is-last-node=\"\" data-is-only-node=\"\" data-start=\"962\"><strong>Answer: A.</strong></p></div><br><br><a href=\"https://gateoverflow.in/534210/go-classes-dpp-gate-cs-digital-logic-boolean-algebra-laws#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-digital-logic-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/digital-logic\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Digital Logic - Boolean Algebra</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"1297\" data-start=\"1248\">Simplify $F=AB+\\overline{A}C+BC$.</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$AB+\\overline{A}C$<br/></span>",
                "<span style=\"display: inline;\">$AB+BC$<br/></span>",
                "<span style=\"display: inline;\">$\\overline{A}C+BC$<br/></span>",
                "<span style=\"display: inline;\">$A+B+C$</span>"
            ],
            "answer": "A",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"534209\"></a><div itemprop=\"text\"><p data-end=\"1414\" data-start=\"1372\">Given $F=AB+\\overline{A}C+BC$.</p><p data-end=\"1471\" data-start=\"1416\">The term $BC$ can be expanded using $A+\\overline{A}=1$.</p><p data-end=\"1476\" data-start=\"1473\">So,</p><p data-end=\"1502\" data-start=\"1478\">$BC=BC(A+\\overline{A})$.</p><p data-end=\"1528\" data-start=\"1504\">$BC=ABC+\\overline{A}BC$.</p><p data-end=\"1557\" data-start=\"1530\">Now substitute this in $F$.</p><p data-end=\"1599\" data-start=\"1559\">$F=AB+\\overline{A}C+ABC+\\overline{A}BC$.</p><p data-end=\"1621\" data-start=\"1601\">Now group the terms.</p><p data-end=\"1667\" data-start=\"1623\">$F=(AB+ABC)+(\\overline{A}C+\\overline{A}BC)$.</p><p data-end=\"1707\" data-start=\"1669\">Take $AB$ common from the first group.</p><p data-end=\"1729\" data-start=\"1709\">$AB+ABC=AB(1+C)=AB$.</p><p data-end=\"1781\" data-start=\"1731\">Take $\\overline{A}C$ common from the second group.</p><p data-end=\"1847\" data-start=\"1783\">$\\overline{A}C+\\overline{A}BC=\\overline{A}C(1+B)=\\overline{A}C$.</p><p data-end=\"1859\" data-start=\"1849\">Therefore,</p><p data-end=\"1882\" data-start=\"1861\">$F=AB+\\overline{A}C$.</p><p data-end=\"1919\" data-is-last-node=\"\" data-is-only-node=\"\" data-start=\"1884\"><strong>Answer: A.</strong></p></div><br><br><a href=\"https://gateoverflow.in/534208/go-classes-dpp-gate-cs-digital-logic-boolean-algebra-laws#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-digital-logic-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/digital-logic\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Digital Logic - Boolean Algebra</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"751\" data-start=\"680\">Simplify $F=(A+B+\\overline{C})(A+B+C)(A+\\overline{B})$.</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$A$<br/></span>",
                "<span style=\"display: inline;\">$A+B$<br/></span>",
                "<span style=\"display: inline;\">$A+C$<br/></span>",
                "<span style=\"display: inline;\">$B\\overline{C}$</span>"
            ],
            "answer": "A",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"534207\"></a><div itemprop=\"text\"><p data-end=\"868\" data-start=\"804\">Given $F=(A+B+\\overline{C})(A+B+C)(A+\\overline{B})$.</p><p data-end=\"882\" data-start=\"870\">Let $X=A+B$.</p><p data-end=\"918\" data-start=\"884\">Then the first two factors become:</p><p data-end=\"944\" data-start=\"920\">$(X+\\overline{C})(X+C)$.</p><p data-end=\"984\" data-start=\"946\">Use the law $(X+Y)(X+\\overline{Y})=X$.</p><p data-end=\"1022\" data-start=\"986\">So, $(A+B+\\overline{C})(A+B+C)=A+B$.</p><p data-end=\"1028\" data-start=\"1024\">Now,</p><p data-end=\"1056\" data-start=\"1030\">$F=(A+B)(A+\\overline{B})$.</p><p data-end=\"1086\" data-start=\"1058\">Again use $(X+Y)(X+Z)=X+YZ$.</p><p data-end=\"1129\" data-start=\"1088\">Here, $X=A$, $Y=B$, and $Z=\\overline{B}$.</p><p data-end=\"1134\" data-start=\"1131\">So,</p><p data-end=\"1156\" data-start=\"1136\">$F=A+B\\overline{B}$.</p><p data-end=\"1182\" data-start=\"1158\">Since $B\\overline{B}=0$,</p><p data-end=\"1194\" data-start=\"1184\">$F=A+0=A$.</p><p data-end=\"1216\" data-start=\"1196\"><strong>Answer: A.</strong></p></div><br><br><a href=\"https://gateoverflow.in/534206/go-classes-dpp-gate-cs-digital-logic-boolean-algebra-laws#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-digital-logic-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/digital-logic\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Digital Logic - Boolean Algebra</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"184\" data-start=\"118\">Simplify $F=(A+B)(A+\\overline{C})+\\overline{A}BC$.</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$A+B$<br/></span>",
                "<span style=\"display: inline;\">$A+\\overline{C}$<br/></span>",
                "<span style=\"display: inline;\">$AB+C$<br/></span>",
                "<span style=\"display: inline;\">$B+C$</span>"
            ],
            "answer": "A",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"534205\"></a><div itemprop=\"text\"><p data-end=\"300\" data-start=\"241\">Given $F=(A+B)(A+\\overline{C})+\\overline{A}BC$.</p><p data-end=\"332\" data-start=\"302\">Use the law $(X+Y)(X+Z)=X+YZ$.</p><p data-end=\"378\" data-start=\"334\">So, $(A+B)(A+\\overline{C})=A+B\\overline{C}$.</p><p data-end=\"426\" data-start=\"380\">Therefore, $F=A+B\\overline{C}+\\overline{A}BC$.</p><p data-end=\"458\" data-start=\"428\">Now use $A+\\overline{A}X=A+X$.</p><p data-end=\"473\" data-start=\"460\">Here, $X=BC$.</p><p data-end=\"503\" data-start=\"475\">So, $A+\\overline{A}BC=A+BC$.</p><p data-end=\"539\" data-start=\"505\">Therefore, $F=A+BC+B\\overline{C}$.</p><p data-end=\"561\" data-start=\"541\">Now take $B$ common.</p><p data-end=\"587\" data-start=\"563\">$F=A+B(C+\\overline{C})$.</p><p data-end=\"614\" data-start=\"589\">Since $C+\\overline{C}=1$,</p><p data-end=\"624\" data-start=\"616\">$F=A+B$.</p><p data-end=\"648\" data-start=\"626\"><strong>Answer: A.</strong></p></div><br><br><a href=\"https://gateoverflow.in/534204/go-classes-dpp-gate-cs-digital-logic-boolean-algebra-laws#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-digital-logic-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/digital-logic\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Digital Logic - Boolean Algebra</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"118\" data-start=\"29\">Simplify the Boolean expression $F=(A+B)(A+\\overline{B})(\\overline{A}+C)+AC$.</p><p data-end=\"166\" data-start=\"120\">Which of the following is the simplified form?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$A$<br/></span>",
                "<span style=\"display: inline;\">$AC$<br/></span>",
                "<span style=\"display: inline;\">$A+C$<br/></span>",
                "<span style=\"display: inline;\">$A\\overline{B}+AC$</span>"
            ],
            "answer": "B",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"534203\"></a><div itemprop=\"text\"><section data-scroll-anchor=\"false\" data-testid=\"conversation-turn-22\" data-turn=\"assistant\" data-turn-id=\"request-WEB:91fea45b-ecf9-4439-86cc-7489d0a1e270-10\" data-turn-id-container=\"request-WEB:91fea45b-ecf9-4439-86cc-7489d0a1e270-10\" dir=\"auto\"><p data-end=\"298\" data-start=\"221\">Given expression is $F=(A+B)(A+\\overline{B})(\\overline{A}+C)+AC$.</p><p data-end=\"344\" data-start=\"300\">First use the Boolean law $(X+Y)(X+Z)=X+YZ$.</p><p data-end=\"392\" data-start=\"346\">Here, $(A+B)(A+\\overline{B})=A+B\\overline{B}$.</p><p data-end=\"426\" data-start=\"394\">Since $B\\overline{B}=0$, we get:</p><p data-end=\"458\" data-start=\"428\">$(A+B)(A+\\overline{B})=A+0=A$.</p><p data-end=\"503\" data-start=\"460\">Now substitute this back in the expression.</p><p data-end=\"530\" data-start=\"505\">$F=A(\\overline{A}+C)+AC$.</p><p data-end=\"551\" data-start=\"532\">Now distribute $A$.</p><p data-end=\"577\" data-start=\"553\">$F=A\\overline{A}+AC+AC$.</p><p data-end=\"611\" data-start=\"579\">Since $A\\overline{A}=0$, we get:</p><p data-end=\"625\" data-start=\"613\">$F=0+AC+AC$.</p><p data-end=\"660\" data-start=\"627\">Using idempotent law, $AC+AC=AC$.</p><p data-end=\"680\" data-start=\"662\">Therefore, $F=AC$.</p><p data-end=\"703\" data-is-last-node=\"\" data-is-only-node=\"\" data-start=\"682\"><strong>Answer: B.</strong></p></section></div><br><br><a href=\"https://gateoverflow.in/534202/go-classes-dpp-gate-cs-digital-logic-boolean-algebra-laws#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-digital-logic-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/digital-logic\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Digital Logic - Boolean Algebra</a></b></div></div>"
        }
    ]
});

registerTest({
    "name": "DPP 11 - Digital Logic (Boolean Algebra - Part 5)",
    "testLabel": "DPP 11",
    "testType": "DPP",
    "bracket": "Boolean Algebra - Part 5",
    "subject": "dl",
    "series": "cse-dpp-2027",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 10,
    "topicsCovered": "Boolean Algebra (Practice Set 5)",
    "questions": [
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider a Boolean function $f(A, B, C, D)$ expressed as the sum of minterms $\\sum m(0,1,2,5,8,9,10)$. If the variable $A$ is the Most Significant Bit (MSB), which of the following represents the minimal sum-of-products (SOP) form, and how many <strong>Essential Prime Implicants</strong> does it contain?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\bar{B} \\bar{D}+\\bar{B} \\bar{C}+\\bar{A} \\bar{C} D ;$ $3$ Essential Prime Implicants<br/></span>",
                "<span style=\"display: inline;\">$\\bar{B} \\bar{D}+\\bar{B} \\bar{C}+\\bar{A} B D$; $2$ Essential Prime Implicants<br/></span>",
                "<span style=\"display: inline;\">$\\bar{B} \\bar{D}+\\bar{A} \\bar{C} D ;$ $2$ Essential Prime Implicants<br/></span>",
                "<span style=\"display: inline;\">$\\bar{B} \\bar{D}+\\bar{B} \\bar{C}+\\bar{A} \\bar{C} D$; $2$ Essential Prime Implicants</span>"
            ],
            "answer": "A",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"523582\"></a><div itemprop=\"text\">\\[<br/> \\begin{array}{c|cccc}<br/> AB \\backslash CD &amp; 00(0) &amp; 01(1) &amp; 11(3) &amp; 10(2) \\\\<br/> \\hline<br/> \\mathbf{00} &amp; \\mathbf{1} &amp; \\mathbf{1} &amp; 0 &amp; \\mathbf{1} \\\\<br/> \\mathbf{01} &amp; 0 &amp; \\mathbf{1} &amp; 0 &amp; 0 \\\\<br/> \\mathbf{11} &amp; 0 &amp; 0 &amp; 0 &amp; 0 \\\\<br/> \\mathbf{10} &amp; \\mathbf{1} &amp; \\mathbf{1} &amp; 0 &amp; \\mathbf{1}<br/> \\end{array}<br/> \\]<br/> <br/> $$<br/> F=\\bar{B} \\bar{D}+\\bar{B} \\bar{C}+\\bar{A} \\bar{C} D<br/> $$<br/> <br/> $\\bar{B} \\bar{D}$ : Essential because of $m_2, m_{10}$.<br/> <br/> $\\bar{B} \\bar{C}$ : Essential because of $m_9$.<br/> <br/> $\\bar{A} \\bar{C} D$ : Essential because of $m_5$.</div><br><br><a href=\"https://gateoverflow.in/523581/go-classes-dpp-digital-logic-epi#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-digital-logic-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/digital-logic\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Digital Logic - Boolean Algebra</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>A Boolean function $g(W, X, Y, Z)$ is defined by the Maxterm list:</p><p>$$<br/>g(W, X, Y, Z)=\\prod M(0,1,2,4,5,8,9,10,12,13)<br/>$$Which of the following represents the most minimized POS (Product of Sums) form?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$Y(X+Z)$<br/></span>",
                "<span style=\"display: inline;\">$X(Y+Z)$<br/></span>",
                "<span style=\"display: inline;\">$Z(X+Y)$<br/></span>",
                "<span style=\"display: inline;\">$X \\cdot Y$</span>"
            ],
            "answer": "A",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"523481\"></a><div itemprop=\"text\"><p><img alt=\"\" height=\"112\" src=\"https://gateoverflow.in/?qa=blob&amp;qa_blobid=13568775319312163503\" width=\"300\"/></p><p>Solution using K-map</p></div><br><br><a href=\"https://gateoverflow.in/523434/go-classes-dpp-digital-logic-minimization#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-digital-logic-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/digital-logic\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Digital Logic - Boolean Algebra</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>A Boolean function $f(w, x, y, z)$ is defined by the K-map below (where '$d$' represents don't care conditions):</p><p>\\[<br/>\\begin{array}{c|cccc}<br/>wxlyz &amp; 00 &amp; 01 &amp; 11 &amp; 10 \\\\ \\hline<br/>00 &amp; 1 &amp; 1 &amp; 0 &amp; 0 \\\\<br/>01 &amp; 0 &amp; d &amp; d &amp; 1 \\\\<br/>11 &amp; 0 &amp; 0 &amp; 1 &amp; 1 \\\\<br/>10 &amp; 1 &amp; 0 &amp; 0 &amp; d<br/>\\end{array}<br/>\\]</p><p>What is the number of <strong>Essential Prime Implicants</strong> for this function?</p></div></span>",
            "image": "",
            "options": [],
            "answer": "0",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"522923\"></a><div itemprop=\"text\"><p>A $4$-cell block covering:<br/><br/>$m6, m14, m15$ $($and $d = m7)$<br/><br/>This gives the implicant: $x y$<br/><br/>Now check something important:<br/><br/>$m6, ~m14$, and $m 15$ are <strong>only covered by this implicant.</strong><br/><br/>No other grouping can cover them.<br/><br/>That automatically makes:<br/><br/>$xy\\rightarrow$ <strong>Essential Prime Implicant</strong><br/><br/>Now check the remaining $1$'s$: m0, m1, m8$<br/><br/>Each of these can be covered by more than one prime implicant (different $2$ cell groupings exist for each).<br/><br/>So none of those implicants is essential.</p></div><br><br><a href=\"https://gateoverflow.in/522922/go-classes-dpp-digital-logic-epi#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-digital-logic-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/digital-logic\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Digital Logic - Boolean Algebra</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>In a circuit consisting of a chain of $100$ XOR gates, where the output of the $i^{\\text {th }}$ gate is the input to the $(i+1)^{\\text {th }}$ gate, the first XOR gate has inputs $X$ and $Y$. All subsequent XOR gates have the output of the previous gate and a constant '$1$' as inputs.</p><p>If $X \\oplus Y=0$, the final output of the $100^{\\text {th }}$ gate is:</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$0$<br/></span>",
                "<span style=\"display: inline;\">$1$<br/></span>",
                "<span style=\"display: inline;\">$X$<br/></span>",
                "<span style=\"display: inline;\">$\\bar{Y}$</span>"
            ],
            "answer": "A",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"522921\"></a><div itemprop=\"text\"><p>Let $Z_n$ be the output of the $n^{\\text {th }}$ gate.</p><ul><li>Gate $1: Z_1=X \\oplus Y=0$ (Given).<br/> </li><li>Gate $2: Z_2=Z_1 \\oplus 1=0 \\oplus 1=1$.<br/> </li><li>Gate $3: Z_3=Z_2 \\oplus 1=1 \\oplus 1=0$.<br/> </li><li>Gate $4: Z_4=Z_3 \\oplus 1=0 \\oplus 1=1$.<br/> </li></ul><p><strong>Observation:</strong> Even-numbered gates output $1$; odd-numbered gates (from Gate $3$ onwards) output $0$.<br/>Since $100$ is an even number:</p><p>$$<br/>Z_{100}=1 .<br/>$$</p></div><br><br><a href=\"https://gateoverflow.in/522919/go-classes-dpp-digital-logic-xor#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-digital-logic-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/digital-logic\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Digital Logic - Boolean Algebra</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>A Boolean function $F(A, B, C, D)=\\sum m(0,1,2,5,8,9,10)$ is given. Which of the following represents the most simplified Sum of Products (SOP) form?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\bar{B} \\bar{D}+\\bar{B} \\bar{C}+\\bar{A} C \\bar{D}$<br/></span>",
                "<span style=\"display: inline;\">$\\bar{B} \\bar{D}+\\bar{A} \\bar{B}+\\bar{A} \\bar{C} D$<br/></span>",
                "<span style=\"display: inline;\">$\\bar{B} \\bar{C}+\\bar{B} \\bar{D}+\\bar{A} \\bar{C} D$<br/></span>",
                "<span style=\"display: inline;\">$\\bar{B} \\bar{D}+\\bar{B} \\bar{C}+\\bar{A} \\bar{C} \\bar{D}$</span>"
            ],
            "answer": "A",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"522393\"></a><div itemprop=\"text\">\\begin{aligned}<br/> &amp;\\begin{array}{lllll} <br/> &amp; C D(00) &amp; C D(01) &amp; C D(11) &amp; C D(10) \\\\<br/> A B(00) &amp; 1(\\mathrm{m} 0) &amp; 1(\\mathrm{m} 1) &amp; 0 &amp; 1(\\mathrm{m} 2) \\\\<br/> A B(01) &amp; 0 &amp; 1(\\mathrm{~m} 5) &amp; 0 &amp; 0 \\\\<br/> A B(11) &amp; 0 &amp; 0 &amp; 0 &amp; 0 \\\\<br/> A B(10) &amp; 1(\\mathrm{m} 8) &amp; 1(\\mathrm{m} 9) &amp; 0 &amp; 1(\\mathrm{m} 10)<br/> \\end{array}\\\\\\\\<br/> &amp;F=\\bar{B} \\bar{D}+\\bar{B} \\bar{C}+\\bar{A} \\bar{C} D<br/> \\end{aligned}</div><br><br><a href=\"https://gateoverflow.in/522392/go-classes-dpp-digital-logic-minimization#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-digital-logic-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/digital-logic\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Digital Logic - Boolean Algebra</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider a Boolean function $F(A, B, C, D)$ defined by the following minterms and don't care conditions: $F(A, B, C, D)=\\sum m(0,2,5,7,8,10)+\\sum d(13,15)$ Which of the following represents the most minimized Product-of-Sums (POS) expression?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$(B+\\bar{D})(\\bar{B}+D)$<br/></span>",
                "<span style=\"display: inline;\">$(B+D)(\\bar{B}+\\bar{D})$<br/></span>",
                "<span style=\"display: inline;\">$(\\bar{A}+B+D)(A+\\bar{B}+\\bar{D})$<br/></span>",
                "<span style=\"display: inline;\">$(\\bar{B}+D)(B+\\bar{D})(A+C)$</span>"
            ],
            "answer": "A",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"522230\"></a><div itemprop=\"text\"><p>The function is $F(A, B, C, D)=\\sum m(0,2,5,7,8,10)+\\sum d(13,15)$.<br/><br/><strong>K-map Representation:</strong></p><p>\\[<br/>\\begin{array}{c|cccc}<br/>AB\\backslash CD &amp; \\text{00} &amp; \\text{01} &amp; \\text{11} &amp; \\text{10} \\\\ \\hline<br/>\\text{00} &amp; 1_{0} &amp; 0_{1} &amp; 0_{3} &amp; 1_{2} \\\\<br/>\\text{01} &amp; 0_{4} &amp; 1_{5} &amp; 1_{7} &amp; 0_{6} \\\\<br/>\\text{11} &amp; 0_{12} &amp; X_{13} &amp; X_{15} &amp; 0_{14} \\\\<br/>\\text{10} &amp; 1_{8} &amp; 0_{9} &amp; 0_{11} &amp; 1_{10}<br/>\\end{array}<br/>\\]<br/><strong>Minimized SOP:</strong> $F=\\bar{B} \\bar{D}+B D$ (This is the <strong>XNOR </strong>operation, $B \\odot D$ ).<br/><br/><strong>Conversion to POS</strong>: An XNOR gate is 0 only when the inputs are different ( $B=0, D=1$ or $B=1, D=0$ ).</p><ul><li>For $(B, D)=(0,1)$, the sum term is $(B+\\bar{D})$.<br/> </li><li>For $(B, D)=(1,0)$, the sum term is $(\\bar{B}+D)$.<br/> </li><li><strong>Final POS:</strong> $F=(B+\\bar{D})(\\bar{B}+D)-(\\mathbf{A})$.</li></ul></div><br><br><a href=\"https://gateoverflow.in/522229/go-classes-dpp-digital-logic-minimization#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-digital-logic-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/digital-logic\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Digital Logic - Boolean Algebra</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider a function $F(A, B, C, D)=\\sum m(0,1,2,5,8,9,10)$. Which of the following represents the <strong>minimal Sum of Products (SOP)</strong> form for the given function?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\bar{B} \\bar{D}+\\bar{B} \\bar{C}+\\bar{A} \\bar{C} D$<br/></span>",
                "<span style=\"display: inline;\">$B \\bar{D}+B \\bar{C}+\\bar{A} \\bar{C} D$<br/></span>",
                "<span style=\"display: inline;\">$\\bar{B} \\bar{D}+\\bar{B} \\bar{C}+\\bar{A} B D$<br/></span>",
                "<span style=\"display: inline;\">$\\bar{B} \\bar{D}+B \\bar{C}+\\bar{A} \\bar{C} \\bar{D}$</span>"
            ],
            "answer": "A",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"521768\"></a><div itemprop=\"text\">Grouping the corners $\\{0,2,8,10\\}$ gives $\\bar{B} \\bar{D}$.<br/> <br/> Grouping the top left $\\{0,1,8,9\\}$ gives $\\bar{B} \\bar{C}$.<br/> <br/> Grouping $\\{1,5\\}$ gives $\\bar{A} \\bar{C} D$.</div><br><br><a href=\"https://gateoverflow.in/521767/go-classes-dpp-digital-logic-minimization#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-digital-logic-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/digital-logic\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Digital Logic - Boolean Algebra</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider a logic circuit with $4$ inputs $A, B, C, D$ where the output is $\\text{HIGH}$ only when the number of $\\text{HIGH}$ inputs is even (including zero). Which logic gate can implement this function for $4$ variables?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\text{NOR}$<br/></span>",
                "<span style=\"display: inline;\">$\\text{XOR}$<br/></span>",
                "<span style=\"display: inline;\">$\\text{NAND}$<br/></span>",
                "<span style=\"display: inline;\">$\\text{XNOR}$</span>"
            ],
            "answer": "A",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"521150\"></a><div itemprop=\"text\">For an even number of variables, the $\\text{XNOR}$ gate acts as an evenparity generator, outputting $1$ when the count of $1$ s is even.</div><br><br><a href=\"https://gateoverflow.in/521149/go-classes-dpp-digital-logic-boolean-logic#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-digital-logic-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/digital-logic\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Digital Logic - Boolean Algebra</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>In a specific digital implementation, a $2$-input NAND gate is used where one input is connected to a logic signal $A$, and the other input is left <strong>floating (unconnected).</strong></p><p>In <strong>TTL (Transistor-Transistor Logic)</strong>, what would be the output?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$0$<br/></span>",
                "<span style=\"display: inline;\">$1$<br/></span>",
                "<span style=\"display: inline;\">$A$<br/></span>",
                "<span style=\"display: inline;\">$A^{\\prime}$</span>"
            ],
            "answer": "A",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"520902\"></a><div itemprop=\"text\"><p><strong>Effective Logic Level: </strong>In TTL, a floating input behaves as a <strong>Logic HIGH </strong>$(1)$ because the internal pull-up transistors source current.</p><p><strong>Output:</strong> For a $2$-input NAND, if one input is $A$ and the other is <strong>floating</strong> $(1)$, the output is $\\operatorname{NAND}(A, 1)=\\overline{\\mathbf{A}}$.</p></div><br><br><a href=\"https://gateoverflow.in/520901/go-classes-dpp-gate-cs-digital-logic-ttl#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-digital-logic-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/digital-logic\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Digital Logic - Boolean Algebra</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider a $4$-variable Boolean function $f(A, B, C, D)$ defined by the following minterms and don't-care conditions:</p><p>Determine the <strong>total number of Essential Prime Implicants (EPIs)</strong> for this function.</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\sum m(0,2,5,7,8,10,13,15)$<br/></span>",
                "<span style=\"display: inline;\">$d(1,4,11)$</span>"
            ],
            "answer": "2",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"520899\"></a><div itemprop=\"text\"><p style=\"text-align:center\"><img alt=\"\" height=\"208\" src=\"https://gateoverflow.in/?qa=blob&amp;qa_blobid=7696897445169196441\" width=\"375\"/></p><p><br/>Minterm $0$ is only covered by $\\bar{B} \\bar{D}$. Thus, $\\bar{B} \\bar{D}$ <strong>is an EPI.</strong><br/><br/>Minterm $5$ is only covered by $B D$. Thus, $B D$<strong> is an EPI.</strong><br/><br/><strong>Total EPIs</strong> $= 2$.</p></div><br><br><a href=\"https://gateoverflow.in/520898/go-classes-dpp-gate-cs-digital-logic-epi#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-digital-logic-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/digital-logic\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Digital Logic - Boolean Algebra</a></b></div></div>"
        }
    ]
});

registerTest({
    "name": "DPP 12 - Digital Logic (Boolean Algebra - Part 6)",
    "testLabel": "DPP 12",
    "testType": "DPP",
    "bracket": "Boolean Algebra - Part 6",
    "subject": "dl",
    "series": "cse-dpp-2027",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 11,
    "topicsCovered": "Boolean Algebra (Practice Set 6)",
    "questions": [
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>A function $F(A, B, C)$ defined by three Boolean variables $A, B$ and $C$ when expressed as sum of products is given by</p><p>$$<br/>F=\\bar{A} \\cdot \\bar{B} \\cdot \\bar{C}+\\bar{A} \\cdot B \\cdot \\bar{C}+A \\cdot \\bar{B} \\cdot \\bar{C}<br/>$$</p><p>where, $\\bar{A}, \\bar{B}$ and $\\bar{C}$ are complements of the respective variable. The product of sums (POS) form of the function $F$ is</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$F=(A+B+C) \\cdot(A+\\tilde{B}+C) \\cdot(\\bar{A}+B+C)$<br/></span>",
                "<span style=\"display: inline;\">$F=(\\bar{A}+\\bar{B}+\\bar{C}) \\cdot(\\bar{A}+B+\\bar{C}) \\cdot(A+\\bar{B}+\\bar{C})$<br/></span>",
                "<span style=\"display: inline;\">$F=(A+B+\\bar{C}) \\cdot(A+\\bar{B}+\\bar{C}) \\cdot(\\bar{A}+B+\\bar{C}) \\cdot(\\bar{A}+\\bar{B}+C) \\cdot(\\bar{A}+\\bar{B}+\\bar{C})$<br/></span>",
                "<span style=\"display: inline;\">$F=(\\bar{A}+\\bar{B}+C) \\cdot(\\bar{A}+B+C) \\cdot(A+B+\\bar{C}) \\cdot(A+B+C)$</span>"
            ],
            "answer": "A",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"474350\"></a><div itemprop=\"text\">$\\begin{aligned} F(A, B, C, D)= &amp; \\bar{A} \\bar{B} \\bar{C}+\\bar{A} B \\bar{C}+A \\bar{B} \\bar{C} \\\\ = &amp; \\Sigma m(0,2,4)=\\Pi M(1,3,5,6,7) \\\\ = &amp; (A+B+\\bar{C})(A+\\bar{B}+\\bar{C})(\\bar{A}+B+\\bar{C}) \\\\ &amp; (\\bar{A}+\\bar{B}+C)(\\bar{A}+\\bar{B}+\\bar{C})\\end{aligned}$</div><br><br><a href=\"https://gateoverflow.in/474349/go-classes-dpp-digital-logics-boolean-algebra#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-digital-logic-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/digital-logic\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Digital Logic - Boolean Algebra</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Select the Boolean function(s) equivalent to $x+y z$, where $x, y$, and $z$ are Boolean variables, and + denotes logical OR operation.</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$x+z+x y$<br/></span>",
                "<span style=\"display: inline;\">$(x+y)(x+z)$<br/></span>",
                "<span style=\"display: inline;\">$x+x y+y z$<br/></span>",
                "<span style=\"display: inline;\">$x+x z+x y$</span>"
            ],
            "answer": "A",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"474348\"></a><div itemprop=\"text\"><ol start=\"1\" style=\"list-style-type: upper-alpha;\"><li>$x+z+x y=x(1+y)+z=x+z$<br/> </li><li>$(x+y)(x+z)=x+x z+x y+y z=x(1+y+z)+y z=x+y z$<br/> </li><li>$x+x y+y z=x(1+y)+y z=x+y z$<br/> </li><li>$x+x z+x y=x(1+z+y)=x$</li></ol></div><br><br><a href=\"https://gateoverflow.in/474347/go-classes-dpp-digital-logics-boolean-algebra#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-digital-logic-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/digital-logic\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Digital Logic - Boolean Algebra</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Let $F(A, B, C)$ be the output of a 3-input logic circuit. The minimal sum-of-products expression for $F$ is:</p><p> </p><p> </p><p> </p><p><b id=\"docs-internal-guid-aec6d0de-7fff-5b19-d18b-0fd27ba6124b\"><img alt=\"\" height=\"200\" src=\"https://lh7-rt.googleusercontent.com/docsz/AD_4nXdvE2YnYJuIkD71QaXX63RgXngTZuBfKjPns4daBB3UNb1QVkusXhPftvw7-McQWq9hPBQwQaAZPkkknpkVDaBNdqE9jzLqy2jq5CRn_oUsPrtKdiD-w9JTdUB9U9UpMNHhH4Ojiw?key=6Hc1au4UG79mfLQM7LEBlA\" width=\"385\"/></b></p></div></span>",
            "image": "https://lh7-rt.googleusercontent.com/docsz/AD_4nXdvE2YnYJuIkD71QaXX63RgXngTZuBfKjPns4daBB3UNb1QVkusXhPftvw7-McQWq9hPBQwQaAZPkkknpkVDaBNdqE9jzLqy2jq5CRn_oUsPrtKdiD-w9JTdUB9U9UpMNHhH4Ojiw?key=6Hc1au4UG79mfLQM7LEBlA",
            "options": [
                "<span style=\"display: inline;\">$A B^{\\prime} C+A^{\\prime} B C^{\\prime}$<br/></span>",
                "<span style=\"display: inline;\">$A B^{\\prime} C+B C^{\\prime}$<br/></span>",
                "<span style=\"display: inline;\">$A B^{\\prime} C+A B C^{\\prime}$<br/></span>",
                "<span style=\"display: inline;\">$A \\cdot(B \\oplus C)$</span>"
            ],
            "answer": "A",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"473848\"></a><div itemprop=\"text\"><ul><li>MUX select line: $A$</li><li>Input 0: Top AND gate $=B C^{\\prime}$</li><li>Input 1: XOR gate $=B \\oplus C$</li></ul><p> So the output is:</p><p>$$<br/>F=A(B \\oplus C)+A^{\\prime} B C^{\\prime}<br/>$$</p><p><br/> Now expand:</p><p>$$<br/>\\begin{gathered}<br/>B \\oplus C=B^{\\prime} C+B C^{\\prime} \\\\<br/>F=A\\left(B^{\\prime} C+B C^{\\prime}\\right)+A^{\\prime} B C^{\\prime}=A B^{\\prime} C+A B C^{\\prime}+A^{\\prime} B C^{\\prime}=A B^{\\prime} C+B C^{\\prime}<br/>\\end{gathered}<br/>$$<br/> </p></div><br><br><a href=\"https://gateoverflow.in/473847/go-classes-dpp-digital-logics-logic-gates-mit#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-digital-logic-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/digital-logic\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Digital Logic - Boolean Algebra</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>A universal logic gate can implement any Boolean function by connecting sufficient number of them appropriately. Three gates are shown. Which one of the following statements is TRUE? $F 3=\\bar{X}+Y$</p><p><img alt=\"\" src=\"https://gateoverflow.in/?qa=blob&amp;qa_blobid=3332072641531755320\"/></p></div></span>",
            "image": "https://gateoverflow.in/?qa=blob&qa_blobid=3332072641531755320",
            "options": [
                "<span style=\"display: inline;\">Gate 1 is a universal gate.</span>",
                "<span style=\"display: inline;\">Gate 2 is a universal gate.</span>",
                "<span style=\"display: inline;\">Gate 3 is a universal gate.</span>",
                "<span style=\"display: inline;\">None of the gates shown is a universal gate</span>"
            ],
            "answer": "C",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"473387\"></a><div itemprop=\"text\"><p>Option C</p><p><br/><img alt=\"\" height=\"465\" src=\"https://gateoverflow.in/?qa=blob&amp;qa_blobid=13790075204508253793\" width=\"449\"/></p></div><br><br><a href=\"https://gateoverflow.in/473380/go-classes-dpp-digital-logic-logic-gates-gate-ec-2015#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-digital-logic-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/digital-logic\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Digital Logic - Boolean Algebra</a></b></div></div>"
        },
        {
            "marks": 2,
            "neg": 0,
            "type": "MSQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Let the Boolean function</p><p>$$<br/>F(x, y, z)=\\prod(2,4,5,7)<br/>$$</p><p><br/>Which of the following correctly represent the complement $F^{\\prime}(x, y, z)$ ?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\sum(2,4,5,7)$<br/></span>",
                "<span style=\"display: inline;\">$\\sum(0,1,3,6)$<br/></span>",
                "<span style=\"display: inline;\">$\\prod(0,1,3,6)$<br/></span>",
                "<span style=\"display: inline;\">$\\prod(2,4,5,7)$</span>"
            ],
            "answer": "A",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"473375\"></a><div itemprop=\"text\">Given $F=\\prod(2,4,5,7) \\rightarrow \\mathrm{F}$ is 0 at these inputs.<br/> So, $F^{\\prime}$ is 1 at $2,4,5,7 \\rightarrow$ which is $\\sum(2,4,5,7) \\rightarrow$ Option (A)<br/> Also, $F^{\\prime}$ is 0 at the remaining $0,1,3,6 \\rightarrow$ so $F^{\\prime}=\\prod(0,1,3,6) \\rightarrow$ Option (C)</div><br><br><a href=\"https://gateoverflow.in/473374/go-classes-dpp-digital-logic-boolean-functions-morris-mano#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-digital-logic-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/digital-logic\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Digital Logic - Boolean Algebra</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Simplify the boolean function $F(A, B, C, D)=\\Sigma(0,2,3,5,7,8,10,11,13,15)$</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$F=A D+B^{\\prime} C+A B^{\\prime} D$<br/></span>",
                "<span style=\"display: inline;\">$F=A C+B^{\\prime} D+A B^{\\prime} C$<br/></span>",
                "<span style=\"display: inline;\">$F=B D+B^{\\prime}D^{\\prime}+CD$<br/></span>",
                "<span style=\"display: inline;\">$F=B C+A^{\\prime} D+A^{\\prime} B^{\\prime} C$</span>"
            ],
            "answer": "A",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"472720\"></a><div itemprop=\"text\">None of the option can make minterm 0.</div><br><br><a href=\"https://gateoverflow.in/472488/go-classes-dpp-digital-logic-implicants-morris-mano#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-digital-logic-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/digital-logic\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Digital Logic - Boolean Algebra</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Applying DeMorgan's theorem to the expression $\\overline{\\overline{(\\boldsymbol{X}+\\boldsymbol{Y})}+\\overline{\\boldsymbol{Z}}}$, we get $\\qquad$</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$(X+Y) Z$<br/></span>",
                "<span style=\"display: inline;\">$(\\bar{X}+\\bar{Y}) \\bar{Z}$<br/></span>",
                "<span style=\"display: inline;\">$(\\bar{X}+\\bar{Y}) Z$<br/></span>",
                "<span style=\"display: inline;\">$(X+Y) \\bar{Z}$</span>"
            ],
            "answer": "A",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"472481\"></a><div itemprop=\"text\">$$<br/> \\left((\\mathrm{X}+\\mathrm{Y})^{\\prime}+\\mathrm{Z}^{\\prime}\\right)^{\\prime}=(\\mathrm{X}+\\mathrm{Y}) \\cdot \\mathrm{Z}<br/> $$</div><br><br><a href=\"https://gateoverflow.in/472480/go-classes-dpp-digital-logic-boolean-algebra-philadelphia-university#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-digital-logic-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/digital-logic\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Digital Logic - Boolean Algebra</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>The two circuits below are equal.</p><p><img alt=\"\" src=\"https://gateoverflow.in/?qa=blob&amp;qa_blobid=4437049128122347429\"/></p><p>A. True</p><p>B. Flase</p></div></span>",
            "image": "https://gateoverflow.in/?qa=blob&qa_blobid=4437049128122347429",
            "options": [],
            "answer": "0",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"471847\"></a><div itemprop=\"text\">True implies A as our answer</div><br><br><a href=\"https://gateoverflow.in/471840/go-classes-dpp-digital-logic-logic-gates-philadelphia-university#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-digital-logic-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/digital-logic\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Digital Logic - Boolean Algebra</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>The equivalent canonical (standard) form for the following logical expression</p><p>$$<br/>\\mathbf{F}=\\mathbf{A B}+\\mathbf{C} \\text { is }<br/>$$</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$ \\mathrm{F}=\\mathrm{ABC}+\\overline{\\mathrm{A}} \\mathrm{BC}+\\mathrm{A} \\overline{\\mathrm{B}} \\mathrm{C}+\\overline{\\mathrm{A}} \\overline{\\mathrm{B}} \\mathrm{C}$<br/></span>",
                "<span style=\"display: inline;\">$ \\mathrm{F}=\\mathrm{ABC}+\\mathrm{A} \\overline{\\mathrm{B}} \\mathrm{C}+\\overline{\\mathrm{A}} \\overline{\\mathrm{B}} \\mathrm{C}+\\mathrm{AB} \\overline{\\mathrm{C}}$<br/></span>",
                "<span style=\"display: inline;\">$\\mathrm{F}=\\mathrm{ABC}+\\overline{\\mathrm{A}} \\mathrm{BC}+\\mathrm{A} \\overline{\\mathrm{B}} \\mathrm{C}+\\overline{\\mathrm{A}} \\overline{\\mathrm{B}} \\mathrm{C}+\\mathrm{AB} \\overline{\\mathrm{C}}$<br/></span>",
                "<span style=\"display: inline;\">None of the above</span>"
            ],
            "answer": "A",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"471857\"></a><div itemprop=\"text\">C.</div><br><br><a href=\"https://gateoverflow.in/471838/go-classes-dpp-digital-logic-boolean-algebra-philadelphia-university#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-digital-logic-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/digital-logic\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Digital Logic - Boolean Algebra</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>In the sum of products functions $\\mathbf{f}(\\mathrm{X}, \\mathrm{Y}, \\mathrm{Z})=\\sum(\\mathbf{2}, \\mathbf{3}, \\mathbf{4}, \\mathbf{5})$, the prime implicants are</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\bar{X} Y, X \\bar{Y}$</span>",
                "<span style=\"display: inline;\">$\\bar{X} Y, X \\bar{Y} \\bar{Z}, X \\bar{Y} Z$</span>",
                "<span style=\"display: inline;\">$\\bar{X} Y \\bar{Z}, \\bar{X} Y Z, X \\bar{Y}$</span>",
                "<span style=\"display: inline;\">$\\bar{X} Y \\bar{Z}, \\bar{X} Y Z, X \\bar{Y} \\bar{Z}, X \\bar{Y} Z$</span>"
            ],
            "answer": "A",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"471844\"></a><div itemprop=\"text\">Answer is A</div><br><br><a href=\"https://gateoverflow.in/471834/go-classes-dpp-digital-logic-implicants-philadelphia-university#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-digital-logic-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/digital-logic\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Digital Logic - Boolean Algebra</a></b></div></div>"
        }
    ]
});

registerTest({
    "name": "DPP 13 - Digital Logic (Boolean Algebra - Part 7)",
    "testLabel": "DPP 13",
    "testType": "DPP",
    "bracket": "Boolean Algebra - Part 7",
    "subject": "dl",
    "series": "cse-dpp-2027",
    "date": "Nov 03, 2026",
    "duration": "18 Min",
    "totalMarks": 7,
    "topicsCovered": "Boolean Algebra (Practice Set 7)",
    "questions": [
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>The simplification of the Boolean expression $(\\overline{\\bar{A} B \\bar{C}})+(\\overline{A \\bar{B} C})$ is</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">0</span>",
                "<span style=\"display: inline;\">1</span>",
                "<span style=\"display: inline;\">A</span>",
                "<span style=\"display: inline;\">BC</span>"
            ],
            "answer": "A",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"471705\"></a><div itemprop=\"text\">$\\left(\\mathrm{A}^{\\prime} \\mathrm{B} \\mathrm{C}^{\\prime}\\right)^{\\prime}+\\left(\\mathrm{AB}^{\\prime} \\mathrm{C}\\right)^{\\prime}=\\left(\\mathrm{A}+\\mathrm{B}^{\\prime}+\\mathrm{C}\\right)+\\left(\\mathrm{A}^{\\prime}+\\mathrm{B}+\\mathrm{C}^{\\prime}\\right)=1$.</div><br><br><a href=\"https://gateoverflow.in/471704/go-classes-dpp-digital-logic-boolean-algebra-philadelphia-university#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-digital-logic-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/digital-logic\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Digital Logic - Boolean Algebra</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>The K-map for a Boolean function is shown in the figure. The number of essential prime implicants for this function is<br/><img alt=\"\" src=\"https://gateoverflow.in/?qa=blob&amp;qa_blobid=9061099464243349385\"/></p></div></span>",
            "image": "https://gateoverflow.in/?qa=blob&qa_blobid=9061099464243349385",
            "options": [
                "<span style=\"display: inline;\">4</span>",
                "<span style=\"display: inline;\">5</span>",
                "<span style=\"display: inline;\">6</span>",
                "<span style=\"display: inline;\">8</span>"
            ],
            "answer": "A",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"471702\"></a><div itemprop=\"text\"><p><img alt=\"\" src=\"https://gateoverflow.in/?qa=blob&amp;qa_blobid=2679595429153866413\"/></p></div><br><br><a href=\"https://gateoverflow.in/471701/go-classes-dpp-digital-logic-k-map-philadelphia-university#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-digital-logic-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/digital-logic\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Digital Logic - Boolean Algebra</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>The function $\\mathbf{F}(\\mathbf{A}, \\mathbf{B}, \\mathbf{C})=\\sum(\\mathbf{1}, \\mathbf{2}, \\mathbf{3}, \\mathbf{5}, \\mathbf{7})$ is equivalent to</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\bar{C}+\\bar{A} B$</span>",
                "<span style=\"display: inline;\">$C+A B$</span>",
                "<span style=\"display: inline;\">$C+\\bar{A} B$</span>",
                "<span style=\"display: inline;\">$C+A \\bar{B}$</span>"
            ],
            "answer": "A",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"471255\"></a><div itemprop=\"text\"><p><img alt=\"\" height=\"215\" src=\"https://gateoverflow.in/?qa=blob&amp;qa_blobid=9079799564809023523\" width=\"512\"/></p></div><br><br><a href=\"https://gateoverflow.in/471254/go-classes-dpp-digital-logic-boolean-algebra-philadelphia-university#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-digital-logic-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/digital-logic\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Digital Logic - Boolean Algebra</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Minimize the below expression</p><p>$$<br/>F(a, b, c, d)=\\left(\\left(a+b^{\\prime}+d^{\\prime}\\right) \\cdot(c+d) \\cdot\\left(a^{\\prime}+c+d\\right) \\cdot\\left(a+b+d^{\\prime}\\right)\\right)^{\\prime}<br/>$$</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$a^{\\prime} d+c d^{\\prime}$<br/></span>",
                "<span style=\"display: inline;\">$a^{\\prime} d^{\\prime}+c^{\\prime} d^{\\prime}$<br/></span>",
                "<span style=\"display: inline;\">$a^{\\prime} d+c^{\\prime} d^{\\prime}$<br/></span>",
                "<span style=\"display: inline;\">$a^{\\prime} d+c d$</span>"
            ],
            "answer": "C",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"470858\"></a><div itemprop=\"text\"><p>Answer is C.<img alt=\"\" src=\"https://gateoverflow.in/?qa=blob&amp;qa_blobid=8438454937776246345\"/></p></div><br><br><a href=\"https://gateoverflow.in/470839/go-classes-dpp-digital-logic-boolean-algebra-unc-charlotte#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-digital-logic-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/digital-logic\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Digital Logic - Boolean Algebra</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>From the truth table below, determine the standard <strong>SOP</strong> expression.</p><table border=\"1\" cellpadding=\"1\" style=\"width: 500px; text-align: center; border-spacing: 1px;\"><thead><tr><th colspan=\"3\" scope=\"col\">Inputs</th><th colspan=\"1\" scope=\"col\">Output</th></tr></thead><tbody><tr><td>A</td><td>B</td><td>C</td><td>X</td></tr><tr><td>0</td><td>0</td><td>0</td><td>0</td></tr><tr><td>0</td><td>0</td><td>1</td><td>1</td></tr><tr><td>0</td><td>1</td><td>0</td><td>0</td></tr><tr><td>0</td><td>1</td><td>1</td><td>1</td></tr><tr><td>1</td><td>0</td><td>0</td><td>0</td></tr><tr><td>1</td><td>0</td><td>1</td><td>0</td></tr><tr><td>1</td><td>1</td><td>0</td><td>1</td></tr><tr><td>1</td><td>1</td><td>1</td><td>0</td></tr></tbody></table></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$ X=\\bar{A} \\bar{B} \\bar{C}+A B C+A \\bar{B} C$</span>",
                "<span style=\"display: inline;\">$ X=A B C+A B C+A B C$</span>",
                "<span style=\"display: inline;\">$X=A \\bar{B} C+\\bar{A} B C+A B \\bar{C}$</span>",
                "<span style=\"display: inline;\">$X=\\bar{A} \\bar{B} C+\\bar{A} B C+A B \\bar{C}$</span>"
            ],
            "answer": "D",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"470838\"></a><div itemprop=\"text\">The output is 1 for the following values,<br/> <br/> $$<br/> \\begin{aligned}<br/> &amp; \\mathrm{A}=0, \\mathrm{~B}=0, \\mathrm{C}=1 \\\\<br/> &amp; \\mathrm{~A}=0, \\mathrm{~B}=1, \\mathrm{C}=1 \\\\<br/> &amp; \\mathrm{~A}=1, \\mathrm{~B}=1, \\mathrm{C}=0<br/> \\end{aligned}<br/> $$<br/> <br/> So the SOP expression for the function is $A^{\\prime} B^{\\prime} C+A^{\\prime} B C+A B C^{\\prime}$ (option $D$ )</div><br><br><a href=\"https://gateoverflow.in/470837/go-classes-dpp-digital-logic-boolean-algebra-canonical-form-philadelphia-university#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-digital-logic-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/digital-logic\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Digital Logic - Boolean Algebra</a></b></div></div>"
        },
        {
            "marks": 2,
            "neg": 0,
            "type": "MSQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Which of the following is/are boolean algebra property?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\mathrm{a}+\\mathrm{b}=\\mathrm{b}+\\mathrm{a}$</span>",
                "<span style=\"display: inline;\">$(\\mathrm{a} \\bullet \\mathrm{b})^{\\prime}=\\mathrm{a}^{\\prime}+\\mathrm{b}^{\\prime}$</span>",
                "<span style=\"display: inline;\">$a+a=a$</span>",
                "<span style=\"display: inline;\">$1 \\cdot a=a \\cdot 1=a$</span>"
            ],
            "answer": "C",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"470834\"></a><div itemprop=\"text\">A. $a+b=b+a$-Commutative Law<br/> B. $(a \\cdot b)^{\\prime}=a^{\\prime}+b^{\\prime}$ - De Morgan's Law<br/> C. $a+a=a$-Idempotent Law<br/> D. $1 \\cdot a=a \\cdot 1=a$ - Identity Law</div><br><br><a href=\"https://gateoverflow.in/470833/go-classes-dpp-digital-logic-boolean-algebra-unc-charlotte#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-digital-logic-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/digital-logic\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Digital Logic - Boolean Algebra</a></b></div></div>"
        }
    ]
});

registerTest({
    "name": "DPP 14 - Digital Logic (Combinational Circuit - Part 1)",
    "testLabel": "DPP 14",
    "testType": "DPP",
    "bracket": "Combinational Circuit - Part 1",
    "subject": "dl",
    "series": "cse-dpp-2027",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 10,
    "topicsCovered": "Combinational Circuit (Practice Set 1)",
    "questions": [
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>In a carry look-ahead adder,</p><p>$C_{i+1}=G_i+P_iC_i$</p><p>Which expression correctly represents $C_3$ in terms of $G_0,G_1,G_2,P_0,P_1,P_2$ and $C_0$?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$C_3=G_2+P_2G_1+P_2P_1G_0+P_2P_1P_0C_0$<br/></span>",
                "<span style=\"display: inline;\">$C_3=G_0+P_0G_1+P_0P_1G_2+P_0P_1P_2C_0$<br/></span>",
                "<span style=\"display: inline;\">$C_3=P_2+G_2P_1+G_2G_1P_0+G_2G_1G_0C_0$<br/></span>",
                "<span style=\"display: inline;\">$C_3=G_2+G_1+G_0+C_0$</span>"
            ],
            "answer": "A",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"536052\"></a><div itemprop=\"text\"><p>Given:</p><p>$C_{i+1}=G_i+P_iC_i$</p><p>First,</p><p>$C_1=G_0+P_0C_0$</p><p>Now,</p><p>$C_2=G_1+P_1C_1$</p><p>Substitute $C_1$:</p><p>$C_2=G_1+P_1G_0+P_1P_0C_0$</p><p>Now,</p><p>$C_3=G_2+P_2C_2$</p><p>Substitute $C_2$:</p><p>$\\boxed{C_3=G_2+P_2G_1+P_2P_1G_0+P_2P_1P_0C_0}$</p><p><br/><b>Answer: A</b></p></div><br><br><a href=\"https://gateoverflow.in/536051/go-classes-dpp-gate-cs-digital-logic-carry-look-ahead-equation#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-digital-logic-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/digital-logic\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Digital Logic - Combinational Circuit</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>For a carry look-ahead adder, let</p><p>$G_i=A_iB_i$</p><p>and</p><p>$P_i=A_i\\oplus B_i$</p><p>For bit position $i$, what do $G_i=1$ and $P_i=1$ represent?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$G_i=1$ means carry is propagated, and $P_i=1$ means carry is killed<br/></span>",
                "<span style=\"display: inline;\">$G_i=1$ means carry is generated, and $P_i=1$ means carry is propagated<br/></span>",
                "<span style=\"display: inline;\">$G_i=1$ means sum is generated, and $P_i=1$ means overflow occurs<br/></span>",
                "<span style=\"display: inline;\">$G_i=1$ means carry is killed, and $P_i=1$ means carry is generated</span>"
            ],
            "answer": "B",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"536050\"></a><div itemprop=\"text\"><p>$G_i=A_iB_i$</p><p>So $G_i=1$ when $A_i=1$ and $B_i=1$.</p><p>This means the bit position generates carry on its own.</p><p>$P_i=A_i\\oplus B_i$</p><p>So $P_i=1$ when exactly one of $A_i$ and $B_i$ is $1$.</p><p>This means incoming carry will be propagated to the next stage.</p><p><br/><strong>Answer: B</strong></p></div><br><br><a href=\"https://gateoverflow.in/536049/go-classes-dpp-gate-cs-digital-logic-generate-and-propagate#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-digital-logic-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/digital-logic\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Digital Logic - Combinational Circuit</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>In a ripple carry adder, which condition causes a carry to propagate through bit position $i$?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$A_i=0$ and $B_i=0$<br/></span>",
                "<span style=\"display: inline;\">$A_i=1$ and $B_i=1$<br/></span>",
                "<span style=\"display: inline;\">$A_i\\oplus B_i=1$<br/></span>",
                "<span style=\"display: inline;\">$A_iB_i=1$</span>"
            ],
            "answer": "C",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"536048\"></a><div itemprop=\"text\"><p>Carry propagation means the incoming carry $C_i$ passes to the next carry $C_{i+1}$.</p><p>This happens when exactly one of $A_i$ and $B_i$ is $1$.</p><p>So,</p><p>$P_i=A_i\\oplus B_i$</p><p>If $P_i=1$, then carry propagates.</p><p><br/><strong>Answer: C</strong></p></div><br><br><a href=\"https://gateoverflow.in/536047/go-classes-dpp-gate-cs-digital-logic-carry-propagation#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-digital-logic-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/digital-logic\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Digital Logic - Combinational Circuit</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>A $4$-bit ripple carry adder is made using full adders. For each full adder, carry propagation delay from $C_{in}$ to $C_{out}$ is $2$ $\\text{ns}$, and sum delay from $C_{in}$ to $S$ is $3$ $\\text{ns}$. What is the worst-case delay for the MSB sum $S_3$?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$5$ $\\text{ns}$<br/></span>",
                "<span style=\"display: inline;\">$6$ $\\text{ns}$<br/></span>",
                "<span style=\"display: inline;\">$9$ $\\text{ns}$<br/></span>",
                "<span style=\"display: inline;\">$11$ $\\text{ns}$</span>"
            ],
            "answer": "C",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"536046\"></a><div itemprop=\"text\"><p style=\"text-align:center\"><img alt=\"\" height=\"311\" src=\"https://cdn.mathpix.com/snip/images/xyapLfLkCbHjtWbajVNYvzTFlj8FCSnUL-qeZDq6T8g.original.fullsize.png\" width=\"651\"/></p><p> </p><p>For $S_3$, the carry must ripple through the first three full adders before reaching the fourth full adder.</p><p>Carry delay through first three stages:</p><p>$3\\times 2=6$ ns</p><p>Then the MSB sum is generated using this carry.</p><p>Sum delay:</p><p>$3$ ns</p><p>Total delay:</p><p>$6+3=9$ ns</p><p><br/><strong>Answer: C</strong></p></div><br><br><a href=\"https://gateoverflow.in/536045/go-classes-dpp-gate-cs-digital-logic-ripple-carry-delay#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-digital-logic-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/digital-logic\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Digital Logic - Combinational Circuit</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"475\" data-start=\"306\">In a full adder, the carry output is $C_{out}=AB+C_{in}(A\\oplus B)$. For which input combinations does the full adder generate carry independent of $C_{in}$?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$A=0,B=0$<br/></span>",
                "<span style=\"display: inline;\">$A=0,B=1$<br/></span>",
                "<span style=\"display: inline;\">$A=1,B=0$<br/></span>",
                "<span style=\"display: inline;\">$A=1,B=1$</span>"
            ],
            "answer": "D",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"535941\"></a><div itemprop=\"text\"><p data-end=\"586\" data-start=\"556\">$C_{out}=AB+C_{in}(A\\oplus B)$</p><p data-end=\"684\" data-start=\"588\">Carry is generated independent of $C_{in}$ when $C_{out}=1$ regardless of the value of $C_{in}$.</p><p data-end=\"711\" data-start=\"686\">This happens when $AB=1$.</p><p data-end=\"733\" data-start=\"713\">For $AB=1$, we need:</p><p data-end=\"750\" data-start=\"735\">$A=1$ and $B=1$</p><p data-end=\"757\" data-start=\"752\">Then,</p><p data-end=\"780\" data-start=\"759\">$C_{out}=1+C_{in}(0)$</p><p data-end=\"785\" data-start=\"782\">So,</p><p data-end=\"798\" data-start=\"787\">$C_{out}=1$</p><p data-end=\"832\" data-start=\"800\">This is independent of $C_{in}$.<br/> </p><p data-end=\"860\" data-is-last-node=\"\" data-is-only-node=\"\" data-start=\"834\"><strong>Answer: D</strong></p></div><br><br><a href=\"https://gateoverflow.in/535940/go-classes-dpp-gate-cs-digital-logic-full-adder-carry#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-digital-logic-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/digital-logic\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Digital Logic - Combinational Circuit</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>A $4$-bit ripple carry adder adds $A=1011$ and $B=0111$ with initial carry $C_0=0$. What are the final $4$-bit sum and final carry?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">Sum $=0010$, $C_4=1$<br/></span>",
                "<span style=\"display: inline;\">Sum $=10010$, $C_4=0$<br/></span>",
                "<span style=\"display: inline;\">Sum $=0100$, $C_4=1$<br/></span>",
                "<span style=\"display: inline;\">Sum $=0011$, $C_4=1$</span>"
            ],
            "answer": "A",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"535939\"></a><div itemprop=\"text\"><p>Add from LSB to MSB.</p><p>Bit $0$:</p><p>$1+1+C_0=1+1+0=10$</p><p>So,</p><p>$S_0=0$ and $C_1=1$</p><p>Bit $1$:</p><p>$1+1+C_1=1+1+1=11$</p><p>So,</p><p>$S_1=1$ and $C_2=1$</p><p>Bit $2$:</p><p>$0+1+C_2=0+1+1=10$</p><p>So,</p><p>$S_2=0$ and $C_3=1$</p><p>Bit $3$:</p><p>$1+0+C_3=1+0+1=10$</p><p>So,</p><p>$S_3=0$ and $C_4=1$</p><p>Therefore, the $4$-bit sum is $0010$ and final carry is $1$.</p><p><br/><b>Answer: A</b></p></div><br><br><a href=\"https://gateoverflow.in/535938/go-classes-dpp-gate-cs-digital-logic-ripple-carry-addition#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-digital-logic-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/digital-logic\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Digital Logic - Combinational Circuit</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Two unsigned $2$-bit numbers $A_1A_0$ and $B_1B_0$ are added with no input carry. Which implementation and equations are correct?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">LSB uses half adder: $S_0=A_0\\oplus B_0$, $C_1=A_0B_0$;<br/>MSB uses full adder: $S_1=A_1\\oplus B_1\\oplus C_1$, $C_2=A_1B_1+C_1(A_1\\oplus B_1)$<br/></span>",
                "<span style=\"display: inline;\">Both bits use half adders only, and $C_2=A_1B_1$<br/></span>",
                "<span style=\"display: inline;\">LSB uses full adder and MSB uses half adder, so $S_1=A_1\\oplus B_1$<br/></span>",
                "<span style=\"display: inline;\">LSB uses OR gate: $S_0=A_0+B_0$, and MSB uses XOR gate only</span>"
            ],
            "answer": "A",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"535937\"></a><div itemprop=\"text\"><p>Since there is no input carry at the least significant bit, the LSB can be added using a half adder.</p><p>So,</p><p>$S_0=A_0\\oplus B_0$</p><p>and</p><p>$C_1=A_0B_0$</p><p>Now the MSB must add three inputs:</p><p>$A_1,B_1,C_1$</p><p>So, the MSB needs a full adder.</p><p>Therefore,</p><p>$S_1=A_1\\oplus B_1\\oplus C_1$</p><p>and</p><p>$C_2=A_1B_1+C_1(A_1\\oplus B_1)$<br/> </p><p><strong>Answer: A</strong></p></div><br><br><a href=\"https://gateoverflow.in/535936/go-classes-dpp-gate-cs-digital-logic-two-bit-binary-adder#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-digital-logic-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/digital-logic\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Digital Logic - Combinational Circuit</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>For a full adder with inputs $A$, $B$, and $C_{in}$, for which input combinations are $S=0$ and $C_{out}=1$?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$000,111$<br/></span>",
                "<span style=\"display: inline;\">$011,101,110$<br/></span>",
                "<span style=\"display: inline;\">$001,010,100$<br/></span>",
                "<span style=\"display: inline;\">$011,101,111$</span>"
            ],
            "answer": "B",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"535935\"></a><div itemprop=\"text\"><p>In a full adder, sum is $1$ when the number of $1$s in the input is odd.</p><p>So, $S=0$ when the number of $1$s is even.</p><p>Carry output is $1$ when at least two inputs are $1$.</p><p>Now we need both conditions together:</p><p>$S=0$ and $C_{out}=1$</p><p>This happens when exactly two inputs are $1$.</p><p>The combinations are:</p><p>$011,101,110$<br/> </p><p><strong>Answer: B</strong></p></div><br><br><a href=\"https://gateoverflow.in/535934/go-classes-dpp-gate-cs-digital-logic-full-adder-truth-table#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-digital-logic-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/digital-logic\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Digital Logic - Combinational Circuit</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>A full adder is implemented using two half adders and one OR gate. The first half adder takes inputs $A$ and $B$. The second half adder takes the first sum output and $C_{in}$. Which pair of expressions correctly represents $S$ and $C_{out}$?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$S=A\\oplus B\\oplus C_{in},\\ C_{out}=AB+C_{in}(A\\oplus B)$<br/></span>",
                "<span style=\"display: inline;\">$S=A+B+C_{in},\\ C_{out}=A\\oplus B\\oplus C_{in}$<br/></span>",
                "<span style=\"display: inline;\">$S=(A\\oplus B)C_{in},\\ C_{out}=AB+AC_{in}$<br/></span>",
                "<span style=\"display: inline;\">$S=A\\oplus B\\oplus C_{in},\\ C_{out}=A+B+C_{in}$</span>"
            ],
            "answer": "A",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"535933\"></a><div itemprop=\"text\"><p style=\"text-align:center\"><img alt=\"\" height=\"252\" src=\"https://cdn.mathpix.com/snip/images/zbjNuoWjqGijPF5dP4gDaBmMohb8a_ExWkC_bXyVnmg.original.fullsize.png\" width=\"615\"/></p><p>First half adder gives:</p><p>$S_1=A\\oplus B$</p><p>and</p><p>$C_1=AB$</p><p>Second half adder adds $S_1$ and $C_{in}$.</p><p>So,</p><p>$S=S_1\\oplus C_{in}$</p><p>Therefore,</p><p>$S=A\\oplus B\\oplus C_{in}$</p><p>Second half adder carry is:</p><p>$C_2=S_1C_{in}$</p><p>So,</p><p>$C_2=C_{in}(A\\oplus B)$</p><p>Final carry is OR of both carries:</p><p>$C_{out}=C_1+C_2$<br/> </p><p>$\\boxed{\\therefore C_{out}=AB+C_{in}(A\\oplus B)}$<br/> </p><p><strong>Answer: A</strong></p></div><br><br><a href=\"https://gateoverflow.in/535932/go-classes-dpp-gate-cs-digital-logic-full-adder-using-half-adders#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-digital-logic-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/digital-logic\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Digital Logic - Combinational Circuit</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"5117\" data-start=\"4807\">A $4:2$ priority encoder has active-high inputs $\\mathrm{D}_0,\\mathrm{D}_1,\\mathrm{D}_2,\\mathrm{D}_3$, where $\\mathrm{D}_3$ has the highest priority and $\\mathrm{D}_0$ has the lowest priority. Outputs are $\\mathrm{Y}_1,\\mathrm{Y}_0$ and valid output $\\mathrm{V}$. Which set of equations is correct?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\mathrm{Y}_1=\\mathrm{D}_1+\\mathrm{D}_3,\\ \\mathrm{Y}_0=\\mathrm{D}_2+\\mathrm{D}_3,\\ \\mathrm{V}=\\mathrm{D}_0+\\mathrm{D}_1+\\mathrm{D}_2+\\mathrm{D}_3$<br/></span>",
                "<span style=\"display: inline;\">$\\mathrm{Y}_1=\\mathrm{D}_2+\\mathrm{D}_3,\\ \\mathrm{Y}_0=\\mathrm{D}_1+\\mathrm{D}_3,\\ \\mathrm{V}=\\mathrm{D}_3$<br/></span>",
                "<span style=\"display: inline;\">$\\mathrm{Y}_1=\\mathrm{D}_2+\\mathrm{D}_3,\\ \\mathrm{Y}_0=\\mathrm{D}_3+\\mathrm{D}_2'\\mathrm{D}_1,\\ \\mathrm{V}=\\mathrm{D}_0+\\mathrm{D}_1+\\mathrm{D}_2+\\mathrm{D}_3$<br/></span>",
                "<span style=\"display: inline;\">$\\mathrm{Y}_1=\\mathrm{D}_0+\\mathrm{D}_1,\\ \\mathrm{Y}_0=\\mathrm{D}_2+\\mathrm{D}_3,\\ \\mathrm{V}=\\mathrm{D}_0\\mathrm{D}_1\\mathrm{D}_2\\mathrm{D}_3$</span>"
            ],
            "answer": "C",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"535797\"></a><div itemprop=\"text\"><p style=\"text-align:center\"><img alt=\"\" height=\"290\" src=\"https://cdn.mathpix.com/snip/images/-KGIBsT_Al3I9XIjZHxuXZi9dCawSR-11eImU1VJgOY.original.fullsize.png\" width=\"483\"/></p><p data-end=\"5798\" data-start=\"5694\">In a priority encoder, if more than one input is $1$, the highest priority input is encoded.</p><p data-end=\"5818\" data-start=\"5800\">Priority order is:</p><p data-end=\"5874\" data-start=\"5820\">$\\mathrm{D}_3&gt;\\mathrm{D}_2&gt;\\mathrm{D}_1&gt;\\mathrm{D}_0$.</p><p data-end=\"5901\" data-start=\"5876\">Now check $\\mathrm{Y}_1$.</p><p data-end=\"5975\" data-start=\"5903\">The output code is $10$ when $\\mathrm{D}_2$ is the highest active input.</p><p data-end=\"6031\" data-start=\"5977\">The output code is $11$ when $\\mathrm{D}_3$ is active.</p><p data-end=\"6100\" data-start=\"6033\">So, $\\mathrm{Y}_1=1$ whenever $\\mathrm{D}_2=1$ or $\\mathrm{D}_3=1$.</p><p data-end=\"6149\" data-start=\"6102\">$\\boxed{\\therefore \\mathrm{Y}_1=\\mathrm{D}_2+\\mathrm{D}_3}$</p><p data-end=\"6176\" data-start=\"6151\">Now check $\\mathrm{Y}_0$.</p><p data-end=\"6217\" data-start=\"6178\">$\\mathrm{Y}_0=1$ when $\\mathrm{D}_3=1$.</p><p data-end=\"6309\" data-start=\"6219\">Also, $\\mathrm{Y}_0=1$ when $\\mathrm{D}_1=1$ and no higher input $\\mathrm{D}_2$ is active.</p><p data-end=\"6369\" data-start=\"6311\">$\\boxed{\\therefore \\mathrm{Y}_0=\\mathrm{D}_3+\\mathrm{D}_2'\\mathrm{D}_1}$</p><p data-end=\"6436\" data-start=\"6371\">Valid output $\\mathrm{V}$ is $1$ if at least one input is active.</p><p data-end=\"6441\" data-start=\"6438\">$\\boxed{\\therefore \\mathrm{V}=\\mathrm{D}_0+\\mathrm{D}_1+\\mathrm{D}_2+\\mathrm{D}_3}$<br/> </p><p data-end=\"6686\" data-is-last-node=\"\" data-is-only-node=\"\" data-start=\"6510\"><strong>Answer: C</strong></p></div><br><br><a href=\"https://gateoverflow.in/535796/go-classes-dpp-gate-cs-digital-logic-priority-encoder#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-digital-logic-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/digital-logic\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Digital Logic - Combinational Circuit</a></b></div></div>"
        }
    ]
});

registerTest({
    "name": "DPP 15 - Digital Logic (Combinational Circuit - Part 2)",
    "testLabel": "DPP 15",
    "testType": "DPP",
    "bracket": "Combinational Circuit - Part 2",
    "subject": "dl",
    "series": "cse-dpp-2027",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 10,
    "topicsCovered": "Combinational Circuit (Practice Set 2)",
    "questions": [
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"3844\" data-start=\"3608\">For a $4:2$ binary encoder with active-high inputs $\\mathrm{I}_0,\\mathrm{I}_1,\\mathrm{I}_2,\\mathrm{I}_3$ and outputs $\\mathrm{Y}_1,\\mathrm{Y}_0$, assume exactly one input is $1$ at a time. Which output equations are correct?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\mathrm{Y}_1=\\mathrm{I}_1+\\mathrm{I}_3,\\ \\mathrm{Y}_0=\\mathrm{I}_2+\\mathrm{I}_3$<br/></span>",
                "<span style=\"display: inline;\">$\\mathrm{Y}_1=\\mathrm{I}_2+\\mathrm{I}_3,\\ \\mathrm{Y}_0=\\mathrm{I}_1+\\mathrm{I}_3$<br/></span>",
                "<span style=\"display: inline;\">$\\mathrm{Y}_1=\\mathrm{I}_0+\\mathrm{I}_1,\\ \\mathrm{Y}_0=\\mathrm{I}_2+\\mathrm{I}_3$<br/></span>",
                "<span style=\"display: inline;\">$\\mathrm{Y}_1=\\mathrm{I}_3,\\ \\mathrm{Y}_0=\\mathrm{I}_1$</span>"
            ],
            "answer": "B",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"535795\"></a><div itemprop=\"text\"><p style=\"text-align:center\"><img alt=\"\" height=\"253\" src=\"https://cdn.mathpix.com/snip/images/5MaxXdXzx91aO4GoroS4e1NVaDlAvKFkvW7d2J941pI.original.fullsize.png\" width=\"439\"/></p><p data-end=\"4234\" data-start=\"4164\">A $4:2$ encoder gives the binary code of the active input.</p><p data-end=\"4272\" data-start=\"4236\">If $\\mathrm{I}_0=1$, output is $00$.</p><p data-end=\"4310\" data-start=\"4274\">If $\\mathrm{I}_1=1$, output is $01$.</p><p data-end=\"4348\" data-start=\"4312\">If $\\mathrm{I}_2=1$, output is $10$.</p><p data-end=\"4386\" data-start=\"4350\">If $\\mathrm{I}_3=1$, output is $11$.</p><p data-end=\"4413\" data-start=\"4388\">Now check $\\mathrm{Y}_1$.</p><p data-end=\"4477\" data-start=\"4415\">$\\mathrm{Y}_1=1$ for inputs $\\mathrm{I}_2$ and $\\mathrm{I}_3$.</p><p data-end=\"4524\" data-start=\"4479\">So, $\\mathrm{Y}_1=\\mathrm{I}_2+\\mathrm{I}_3$.</p><p data-end=\"4551\" data-start=\"4526\">Now check $\\mathrm{Y}_0$.</p><p data-end=\"4615\" data-start=\"4553\">$\\mathrm{Y}_0=1$ for inputs $\\mathrm{I}_1$ and $\\mathrm{I}_3$.</p><p data-end=\"4662\" data-start=\"4617\">So, $\\mathrm{Y}_0=\\mathrm{I}_1+\\mathrm{I}_3$.</p><p data-end=\"4762\" data-start=\"4664\"><strong>Answer: B</strong></p></div><br><br><a href=\"https://gateoverflow.in/535794/go-classes-dpp-gate-cs-digital-logic-binary-encoder#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-digital-logic-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/digital-logic\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Digital Logic - Combinational Circuit</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"2166\" data-start=\"2015\">A $1:4$ DEMUX has data input $\\mathrm{D}$ and select lines $\\mathrm{S}_1,\\mathrm{S}_0$. Which of the following output equations is correct?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\mathrm{Y}_0=\\mathrm{S}_1\\mathrm{S}_0\\mathrm{D},\\ \\mathrm{Y}_1=\\mathrm{S}_1\\mathrm{S}_0'\\mathrm{D},\\ \\mathrm{Y}_2=\\mathrm{S}_1'\\mathrm{S}_0\\mathrm{D},\\ \\mathrm{Y}_3=\\mathrm{S}_1'\\mathrm{S}_0'\\mathrm{D}$<br/></span>",
                "<span style=\"display: inline;\">$\\mathrm{Y}_0=\\mathrm{S}_1'\\mathrm{S}_0'\\mathrm{D},\\ \\mathrm{Y}_1=\\mathrm{S}_1\\mathrm{S}_0'\\mathrm{D},\\ \\mathrm{Y}_2=\\mathrm{S}_1'\\mathrm{S}_0\\mathrm{D},\\ \\mathrm{Y}_3=\\mathrm{S}_1\\mathrm{S}_0\\mathrm{D}$<br/></span>",
                "<span style=\"display: inline;\">$\\mathrm{Y}_0=\\mathrm{S}_1'\\mathrm{S}_0'\\mathrm{D},\\ \\mathrm{Y}_1=\\mathrm{S}_1'\\mathrm{S}_0\\mathrm{D},\\ \\mathrm{Y}_2=\\mathrm{S}_1\\mathrm{S}_0'\\mathrm{D},\\ \\mathrm{Y}_3=\\mathrm{S}_1\\mathrm{S}_0\\mathrm{D}$<br/></span>",
                "<span style=\"display: inline;\">$\\mathrm{Y}_0=\\mathrm{S}_0'\\mathrm{D},\\ \\mathrm{Y}_1=\\mathrm{S}_0\\mathrm{D},\\ \\mathrm{Y}_2=\\mathrm{S}_1'\\mathrm{D},\\ \\mathrm{Y}_3=\\mathrm{S}_1\\mathrm{D}$</span>"
            ],
            "answer": "C",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"535793\"></a><div itemprop=\"text\"><p style=\"text-align:center\"><img alt=\"\" height=\"266\" src=\"https://cdn.mathpix.com/snip/images/1y1F_-J93EUQ0ue5b5gBLoouGLY7B-sPdUg6oPRn_hQ.original.fullsize.png\" width=\"472\"/></p><p data-end=\"3048\" data-start=\"2950\">In a $1:4$ DEMUX, only one output receives $\\mathrm{D}$ depending on the select lines.</p><p data-end=\"3116\" data-start=\"3050\">When $\\mathrm{S}_1\\mathrm{S}_0=00$, output goes to $\\mathrm{Y}_0$.</p><p data-end=\"3174\" data-start=\"3118\">So, $\\mathrm{Y}_0=\\mathrm{S}_1'\\mathrm{S}_0'\\mathrm{D}$.</p><p data-end=\"3242\" data-start=\"3176\">When $\\mathrm{S}_1\\mathrm{S}_0=01$, output goes to $\\mathrm{Y}_1$.</p><p data-end=\"3299\" data-start=\"3244\">So, $\\mathrm{Y}_1=\\mathrm{S}_1'\\mathrm{S}_0\\mathrm{D}$.</p><p data-end=\"3367\" data-start=\"3301\">When $\\mathrm{S}_1\\mathrm{S}_0=10$, output goes to $\\mathrm{Y}_2$.</p><p data-end=\"3424\" data-start=\"3369\">So, $\\mathrm{Y}_2=\\mathrm{S}_1\\mathrm{S}_0'\\mathrm{D}$.</p><p data-end=\"3492\" data-start=\"3426\">When $\\mathrm{S}_1\\mathrm{S}_0=11$, output goes to $\\mathrm{Y}_3$.</p><p data-end=\"3548\" data-start=\"3494\">So, $\\mathrm{Y}_3=\\mathrm{S}_1\\mathrm{S}_0\\mathrm{D}$.</p><p data-end=\"3565\" data-start=\"3550\"><strong>Answer: C</strong></p></div><br><br><a href=\"https://gateoverflow.in/535792/go-classes-dpp-gate-cs-digital-logic-demux#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-digital-logic-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/digital-logic\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Digital Logic - Combinational Circuit</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"1120\" data-start=\"851\">A $2:1$ MUX has inputs $\\mathrm{I}_0,\\mathrm{I}_1$, select line $\\mathrm{S}$, and active-low enable input $\\mathrm{E}$. When $\\mathrm{E}=1$, the output is $0$. When $\\mathrm{E}=0$, the MUX works normally. Which expression represents the output $\\mathrm{F}$?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\mathrm{F}=\\mathrm{E}(\\mathrm{S}'\\mathrm{I}_0+\\mathrm{S}\\mathrm{I}_1)$<br/></span>",
                "<span style=\"display: inline;\">$\\mathrm{F}=\\mathrm{E}'+\\mathrm{S}'\\mathrm{I}_0+\\mathrm{S}\\mathrm{I}_1$<br/></span>",
                "<span style=\"display: inline;\">$\\mathrm{F}=\\mathrm{E}'(\\mathrm{S}'\\mathrm{I}_0+\\mathrm{S}\\mathrm{I}_1)$<br/></span>",
                "<span style=\"display: inline;\">$\\mathrm{F}=\\mathrm{S}'\\mathrm{I}_0+\\mathrm{S}\\mathrm{I}_1$</span>"
            ],
            "answer": "C",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"535791\"></a><div itemprop=\"text\"><p style=\"text-align:center\"><img alt=\"\" height=\"202\" src=\"https://cdn.mathpix.com/snip/images/unOUIuq2HtWG4aw0ZrlluQkHXVr0H7nPE2WloMe-3Wg.original.fullsize.png\" width=\"446\"/></p><p data-end=\"1453\" data-start=\"1418\">For a normal $2:1$ MUX,</p><p data-end=\"1515\" data-start=\"1455\">$\\mathrm{F}=\\mathrm{S}'\\mathrm{I}_0+\\mathrm{S}\\mathrm{I}_1$.</p><p data-end=\"1547\" data-start=\"1517\">But here enable is active-low.</p><p data-end=\"1599\" data-start=\"1549\">That means the MUX works only when $\\mathrm{E}=0$.</p><p data-end=\"1659\" data-start=\"1601\">So, the working condition is represented by $\\mathrm{E}'$.</p><p data-end=\"1691\" data-start=\"1661\">Therefore, the output becomes:</p><p data-end=\"1766\" data-start=\"1693\">$\\mathrm{F}=\\mathrm{E}'(\\mathrm{S}'\\mathrm{I}_0+\\mathrm{S}\\mathrm{I}_1)$.</p><p data-end=\"1824\" data-start=\"1768\">When $\\mathrm{E}=1$, $\\mathrm{E}'=0$, so $\\mathrm{F}=0$.</p><p data-end=\"1890\" data-start=\"1826\">When $\\mathrm{E}=0$, $\\mathrm{E}'=1$, so the MUX works normally.</p><p data-end=\"1981\" data-start=\"1892\"><strong>Answer: C</strong></p></div><br><br><a href=\"https://gateoverflow.in/535790/go-classes-dpp-gate-cs-digital-logic-mux-with-enable#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-digital-logic-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/digital-logic\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Digital Logic - Combinational Circuit</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"381\" data-start=\"307\">How many $4:1$ MUXes are required to implement one $16:1$ MUX?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$4$<br/></span>",
                "<span style=\"display: inline;\">$5$<br/></span>",
                "<span style=\"display: inline;\">$6$<br/></span>",
                "<span style=\"display: inline;\">$8$</span>"
            ],
            "answer": "B",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"535789\"></a><div itemprop=\"text\"><p data-end=\"464\" data-start=\"418\">A $16:1$ MUX has $16$ data inputs.</p><p data-end=\"549\" data-start=\"466\">Using $4:1$ MUXes, first divide the $16$ inputs into $4$ groups of $4$ inputs each.</p><p data-end=\"586\" data-start=\"551\">So, first level requires $4$ MUXes.</p><p data-end=\"635\" data-start=\"588\">Each first-level $4:1$ MUX produces one output.</p><p data-end=\"701\" data-start=\"637\">Now these $4$ outputs must be selected using one more $4:1$ MUX.</p><p data-end=\"737\" data-start=\"703\">So, second level requires $1$ MUX.</p><p data-end=\"785\" data-start=\"739\">Total number of $4:1$ MUXes required $=4+1=5$.</p><p data-end=\"785\" data-start=\"739\"> </p><p style=\"text-align:center\"><img alt=\"\" height=\"409\" src=\"https://cdn.mathpix.com/snip/images/4kmb7WIipoBh8Ot7HHgB6DjP1WEjkqaJ6P_w-I-0hWM.original.fullsize.png\" width=\"720\"/></p><p data-end=\"785\" data-start=\"739\"> </p><p data-end=\"807\" data-start=\"787\"><strong>Answer: B</strong></p></div><br><br><a href=\"https://gateoverflow.in/535788/go-classes-dpp-gate-cs-digital-logic-large-mux-using-smaller-mux#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-digital-logic-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/digital-logic\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Digital Logic - Combinational Circuit</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"6626\" data-start=\"6282\">The Boolean function $\\mathrm{F}(\\mathrm{A},\\mathrm{B},\\mathrm{C},\\mathrm{D})=\\Sigma _m(2,3,4,6,9,10,12,13,14,15)$ is to be implemented using a $4:1$ MUX with select lines $\\mathrm{S}_1=\\mathrm{A}$ and $\\mathrm{S}_0=\\mathrm{B}$. What should be connected to $\\mathrm{I}_0,\\mathrm{I}_1,\\mathrm{I}_2,\\mathrm{I}_3$ respectively?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\mathrm{C}+\\mathrm{D},\\mathrm{D}',\\mathrm{C}\\oplus\\mathrm{D},1$<br/></span>",
                "<span style=\"display: inline;\">$\\mathrm{C},\\mathrm{D},\\mathrm{C}\\oplus\\mathrm{D},0$<br/></span>",
                "<span style=\"display: inline;\">$\\mathrm{C}',\\mathrm{D}',\\mathrm{C}\\oplus\\mathrm{D},1$<br/></span>",
                "<span style=\"display: inline;\">$\\mathrm{C},\\mathrm{D}',\\mathrm{C}\\oplus\\mathrm{D},1$</span>"
            ],
            "answer": "D",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"535666\"></a><div itemprop=\"text\"><p style=\"text-align:center\"><img alt=\"\" height=\"357\" src=\"https://cdn.mathpix.com/snip/images/_ZUrcFkTkV_L70phXXJjMDMVzHeax1AMF_-mpwh8164.original.fullsize.png\" width=\"564\"/></p><p data-end=\"7037\" data-start=\"6874\"> </p><p data-end=\"7110\" data-start=\"7039\">For $\\mathrm{A}\\mathrm{B}=00$, possible minterms are $m_0,m_1,m_2,m_3$.</p><p data-end=\"7141\" data-start=\"7112\">Given function has $m_2,m_3$.</p><p data-end=\"7181\" data-start=\"7143\">So, output is $1$ when $\\mathrm{C}=1$.</p><p data-end=\"7220\" data-start=\"7183\">Therefore, $\\mathrm{I}_0=\\mathrm{C}$.</p><p data-end=\"7293\" data-start=\"7222\">For $\\mathrm{A}\\mathrm{B}=01$, possible minterms are $m_4,m_5,m_6,m_7$.</p><p data-end=\"7324\" data-start=\"7295\">Given function has $m_4,m_6$.</p><p data-end=\"7364\" data-start=\"7326\">So, output is $1$ when $\\mathrm{D}=0$.</p><p data-end=\"7404\" data-start=\"7366\">Therefore, $\\mathrm{I}_1=\\mathrm{D}'$.</p><p data-end=\"7483\" data-start=\"7406\">For $\\mathrm{A}\\mathrm{B}=10$, possible minterms are $m_8,m_9,m_{10},m_{11}$.</p><p data-end=\"7517\" data-start=\"7485\">Given function has $m_9,m_{10}$.</p><p data-end=\"7576\" data-start=\"7519\">So, output is $1$ for $\\mathrm{C}\\mathrm{D}=01$ and $10$.</p><p data-end=\"7631\" data-start=\"7578\">Therefore, $\\mathrm{I}_2=\\mathrm{C}\\oplus\\mathrm{D}$.</p><p data-end=\"7716\" data-start=\"7633\">For $\\mathrm{A}\\mathrm{B}=11$, possible minterms are $m_{12},m_{13},m_{14},m_{15}$.</p><p data-end=\"7739\" data-start=\"7718\">All four are present.</p><p data-end=\"7769\" data-start=\"7741\">Therefore, $\\mathrm{I}_3=1$.</p><p data-end=\"7774\" data-start=\"7771\">$\\boxed{\\mathrm{I}_0=\\mathrm{C},\\ \\mathrm{I}_1=\\mathrm{D}',\\ \\mathrm{I}_2=\\mathrm{C}\\oplus\\mathrm{D},\\ \\mathrm{I}_3=1}$</p><p data-end=\"7960\" data-is-last-node=\"\" data-is-only-node=\"\" data-start=\"7890\"><strong>Answer: D</strong></p></div><br><br><a href=\"https://gateoverflow.in/535663/go-classes-dpp-gate-cs-digital-logic-mux-realization#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-digital-logic-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/digital-logic\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Digital Logic - Combinational Circuit</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"4854\" data-start=\"4801\">Two $2:1$ MUXes are connected as follows :</p><p data-end=\"5178\" data-start=\"5130\">What is the Boolean expression for $\\mathrm{F}$?</p><p><strong>Given Details:</strong></p><ul><li>The first MUX has select line $\\mathrm{A}$, input $\\mathrm{I}_0=\\mathrm{B}$, input $\\mathrm{I}_1=\\mathrm{C}$, and output $\\mathrm{X}$.</li><li>The second MUX has select line $\\mathrm{D}$, input $\\mathrm{I}_0=\\mathrm{X}$, input $\\mathrm{I}_1=\\mathrm{B}'$, and output $\\mathrm{F}$.</li></ul></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\mathrm{F}=\\mathrm{D}'(\\mathrm{A}'\\mathrm{B}+\\mathrm{A}\\mathrm{C})+\\mathrm{D}\\mathrm{B}$</span>",
                "<span style=\"display: inline;\">$\\mathrm{F}=\\mathrm{D}'(\\mathrm{A}'\\mathrm{B}+\\mathrm{A}\\mathrm{C})+\\mathrm{D}\\mathrm{B}'$</span>",
                "<span style=\"display: inline;\">$\\mathrm{F}=\\mathrm{D}(\\mathrm{A}'\\mathrm{B}+\\mathrm{A}\\mathrm{C})+\\mathrm{D}'\\mathrm{B}'$</span>",
                "<span style=\"display: inline;\">$\\mathrm{F}=\\mathrm{D}'(\\mathrm{A}\\mathrm{B}'+\\mathrm{A}'\\mathrm{C})+\\mathrm{D}\\mathrm{B}'$</span>"
            ],
            "answer": "B",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"535665\"></a><div itemprop=\"text\"><p style=\"text-align:center\"><img alt=\"\" height=\"288\" src=\"https://cdn.mathpix.com/snip/images/J5lqLLEDJDzzYObHnl5GPTWmx0X4jlfHDIHHQYXN1eU.original.fullsize.png\" width=\"397\"/></p><p data-end=\"5599\" data-start=\"5563\">For the first $2:1$ MUX,</p><p data-end=\"5661\" data-start=\"5601\">$\\mathrm{X}=\\mathrm{A}'\\mathrm{I}_0+\\mathrm{A}\\mathrm{I}_1$.</p><p data-end=\"5725\" data-start=\"5663\">Given $\\mathrm{I}_0=\\mathrm{B}$ and $\\mathrm{I}_1=\\mathrm{C}$.</p><p data-end=\"5730\" data-start=\"5727\">$\\Rightarrow \\mathrm{X}=\\mathrm{A}'\\mathrm{B}+\\mathrm{A}\\mathrm{C}$</p><p data-end=\"5819\" data-start=\"5790\">Now for the second $2:1$ MUX,</p><p data-end=\"5881\" data-start=\"5821\">$\\mathrm{F}=\\mathrm{D}'\\mathrm{I}_0+\\mathrm{D}\\mathrm{I}_1$.</p><p data-end=\"5946\" data-start=\"5883\">Here, $\\mathrm{I}_0=\\mathrm{X}$ and $\\mathrm{I}_1=\\mathrm{B}'$.</p><p data-end=\"5951\" data-start=\"5948\">$\\Rightarrow \\mathrm{F}=\\mathrm{D}'\\mathrm{X}+\\mathrm{D}\\mathrm{B}'$</p><p data-end=\"6036\" data-start=\"6012\">Substitute $\\mathrm{X}$.</p><p data-end=\"6129\" data-start=\"6038\">$\\boxed{\\mathrm{F}=\\mathrm{D}'(\\mathrm{A}'\\mathrm{B}+\\mathrm{A}\\mathrm{C})+\\mathrm{D}\\mathrm{B}'}$</p><p data-end=\"6238\" data-start=\"6131\"><strong>Answer: B</strong></p></div><br><br><a href=\"https://gateoverflow.in/535662/go-classes-dpp-gate-cs-digital-logic-cascaded-mux#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-digital-logic-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/digital-logic\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Digital Logic - Combinational Circuit</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"3652\" data-start=\"3337\">A $4:1$ MUX has select lines $\\mathrm{S}_1=\\mathrm{R}$ and $\\mathrm{S}_0=\\mathrm{S}$, where $\\mathrm{R}$ is MSB and $\\mathrm{S}$ is LSB. The data inputs are $\\mathrm{I}_0=\\mathrm{P}$, $\\mathrm{I}_1=\\mathrm{Q}$, $\\mathrm{I}_2=\\mathrm{P}'$, and $\\mathrm{I}_3=\\mathrm{Q}'$.<br/>What is the output $\\mathrm{Z}$?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\mathrm{Z}=\\mathrm{R}'\\mathrm{S}'\\mathrm{P}+\\mathrm{R}'\\mathrm{S}\\mathrm{Q}'+\\mathrm{R}\\mathrm{S}'\\mathrm{P}'+\\mathrm{R}\\mathrm{S}\\mathrm{Q}$<br/></span>",
                "<span style=\"display: inline;\">$\\mathrm{Z}=\\mathrm{R}'\\mathrm{S}\\mathrm{P}+\\mathrm{R}'\\mathrm{S}'\\mathrm{Q}+\\mathrm{R}\\mathrm{S}'\\mathrm{P}'+\\mathrm{R}\\mathrm{S}\\mathrm{Q}'$<br/></span>",
                "<span style=\"display: inline;\">$\\mathrm{Z}=\\mathrm{R}'\\mathrm{S}'\\mathrm{P}'+\\mathrm{R}'\\mathrm{S}\\mathrm{Q}+\\mathrm{R}\\mathrm{S}'\\mathrm{P}+\\mathrm{R}\\mathrm{S}\\mathrm{Q}'$<br/></span>",
                "<span style=\"display: inline;\">$\\mathrm{Z}=\\mathrm{R}'\\mathrm{S}'\\mathrm{P}+\\mathrm{R}'\\mathrm{S}\\mathrm{Q}+\\mathrm{R}\\mathrm{S}'\\mathrm{P}'+\\mathrm{R}\\mathrm{S}\\mathrm{Q}'$</span>"
            ],
            "answer": "D",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"535661\"></a><div itemprop=\"text\"><p style=\"text-align:center\"><img alt=\"\" height=\"313\" src=\"https://cdn.mathpix.com/snip/images/UFaqUtMNfjMLtdBSMGcBfv5Eu0XMhhxoCaRFVTQXtZg.original.fullsize.png\" width=\"435\"/></p><p data-end=\"4273\" data-start=\"4245\">For a $4:1$ MUX,</p><p data-end=\"4424\" data-start=\"4275\">$\\mathrm{Z}=\\mathrm{R}'\\mathrm{S}'\\mathrm{I}_0+\\mathrm{R}'\\mathrm{S}\\mathrm{I}_1+\\mathrm{R}\\mathrm{S}'\\mathrm{I}_2+\\mathrm{R}\\mathrm{S}\\mathrm{I}_3$</p><p data-end=\"4454\" data-start=\"4426\">Substitute the given inputs.</p><p data-end=\"4599\" data-start=\"4456\">$\\boxed{\\mathrm{Z}=\\mathrm{R}'\\mathrm{S}'\\mathrm{P}+\\mathrm{R}'\\mathrm{S}\\mathrm{Q}+\\mathrm{R}\\mathrm{S}'\\mathrm{P}'+\\mathrm{R}\\mathrm{S}\\mathrm{Q}'}$</p><p data-end=\"4760\" data-start=\"4601\"><strong>Answer: D</strong></p></div><br><br><a href=\"https://gateoverflow.in/535660/go-classes-dpp-gate-cs-digital-logic-mux-output#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-digital-logic-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/digital-logic\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Digital Logic - Combinational Circuit</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"2264\" data-start=\"1925\">The function $\\mathrm{F}(\\mathrm{A},\\mathrm{B})=\\mathrm{A}\\oplus\\mathrm{B}$ is implemented using an $8:1$ MUX. The select lines are connected as $\\mathrm{S}_2=0$, $\\mathrm{S}_1=\\mathrm{A}$, and $\\mathrm{S}_0=\\mathrm{B}$. If unused inputs are marked as $\\mathrm{d}$, what should be connected to $\\mathrm{I}_0$ to $\\mathrm{I}_7$?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$1,0,0,1,\\mathrm{d},\\mathrm{d},\\mathrm{d},\\mathrm{d}$<br/></span>",
                "<span style=\"display: inline;\">$0,1,0,1,\\mathrm{d},\\mathrm{d},\\mathrm{d},\\mathrm{d}$<br/></span>",
                "<span style=\"display: inline;\">$0,1,1,0,\\mathrm{d},\\mathrm{d},\\mathrm{d},\\mathrm{d}$<br/></span>",
                "<span style=\"display: inline;\">$1,1,0,0,\\mathrm{d},\\mathrm{d},\\mathrm{d},\\mathrm{d}$</span>"
            ],
            "answer": "C",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"535659\"></a><div itemprop=\"text\"><p style=\"text-align:center\"><img alt=\"\" height=\"408\" src=\"https://cdn.mathpix.com/snip/images/_EQM9wWzdiCosxyvHBTb2-slw70HTwDeJNFQ3UoOT5k.original.fullsize.png\" width=\"559\"/></p><p data-end=\"2619\" data-start=\"2501\">Since $\\mathrm{S}_2=0$, only inputs $\\mathrm{I}_0,\\mathrm{I}_1,\\mathrm{I}_2,\\mathrm{I}_3$ can be selected.</p><p data-end=\"2726\" data-start=\"2621\">Inputs $\\mathrm{I}_4,\\mathrm{I}_5,\\mathrm{I}_6,\\mathrm{I}_7$ are never selected, so they are don’t cares.</p><p data-end=\"2778\" data-start=\"2728\">Now check $\\mathrm{F}=\\mathrm{A}\\oplus\\mathrm{B}$.</p><p data-end=\"2847\" data-start=\"2780\">For $\\mathrm{A}\\mathrm{B}=00$, $\\mathrm{F}=0$, so $\\mathrm{I}_0=0$.</p><p data-end=\"2916\" data-start=\"2849\">For $\\mathrm{A}\\mathrm{B}=01$, $\\mathrm{F}=1$, so $\\mathrm{I}_1=1$.</p><p data-end=\"2985\" data-start=\"2918\">For $\\mathrm{A}\\mathrm{B}=10$, $\\mathrm{F}=1$, so $\\mathrm{I}_2=1$.</p><p data-end=\"3054\" data-start=\"2987\">For $\\mathrm{A}\\mathrm{B}=11$, $\\mathrm{F}=0$, so $\\mathrm{I}_3=0$.</p><p data-end=\"3066\" data-start=\"3056\">$\\boxed{\\therefore \\mathrm{I}_0,\\mathrm{I}_1,\\mathrm{I}_2,\\mathrm{I}_3,\\mathrm{I}_4,\\mathrm{I}_5,\\mathrm{I}_6,\\mathrm{I}_7=0,1,1,0,\\mathrm{d},\\mathrm{d},\\mathrm{d},\\mathrm{d}}$</p><p data-end=\"3298\" data-start=\"3228\"><strong>Answer: C</strong></p></div><br><br><a href=\"https://gateoverflow.in/535655/go-classes-dpp-gate-cs-digital-logic-mux#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-digital-logic-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/digital-logic\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Digital Logic - Combinational Circuit</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"617\" data-start=\"367\">The Boolean function $\\mathrm{F}(\\mathrm{A},\\mathrm{B},\\mathrm{C})=\\Sigma _m(1,2,4,7)$ is to be implemented using a $2:1$ MUX with select line $\\mathrm{S}=\\mathrm{A}$. </p><p data-end=\"617\" data-start=\"367\">What should be connected to $\\mathrm{I}_0$ and $\\mathrm{I}_1$?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\mathrm{I}_0=\\mathrm{B}'\\mathrm{C}'+\\mathrm{B}\\mathrm{C}$, $\\quad\\mathrm{I}_1=\\mathrm{B}'\\mathrm{C}+\\mathrm{B}\\mathrm{C}'$<br/></span>",
                "<span style=\"display: inline;\">$\\mathrm{I}_0=\\mathrm{B}'\\mathrm{C}+\\mathrm{B}\\mathrm{C}'$, $\\quad\\mathrm{I}_1=\\mathrm{B}'\\mathrm{C}'+\\mathrm{B}\\mathrm{C}$<br/></span>",
                "<span style=\"display: inline;\">$\\mathrm{I}_0=\\mathrm{B}+\\mathrm{C}$, $\\quad\\mathrm{I}_1=\\mathrm{B}'\\mathrm{C}'$<br/></span>",
                "<span style=\"display: inline;\">$\\mathrm{I}_0=\\mathrm{C}$, $\\quad\\mathrm{I}_1=\\mathrm{C}'$</span>"
            ],
            "answer": "A",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"535705\"></a><div itemprop=\"text\"><p><strong>Option -B is Correct and this is the Explanation </strong></p><p><strong><img alt=\"\" height=\"1265\" src=\"https://gateoverflow.in/?qa=blob&amp;qa_blobid=8816084270681262969\" width=\"1138\"/></strong></p></div><br><br><a href=\"https://gateoverflow.in/535651/go-classes-dpp-gate-cs-digital-logic-mux#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-digital-logic-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/digital-logic\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Digital Logic - Combinational Circuit</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"6503\" data-start=\"6092\">The function $\\mathrm{F}(\\mathrm{A},\\mathrm{B},\\mathrm{C},\\mathrm{D})=\\Sigma _m(1,2,4,7,8,11,13,14)$ is to be implemented using an $8:1$ MUX with select lines $\\mathrm{S}_2=\\mathrm{A}$, $\\mathrm{S}_1=\\mathrm{B}$, and $\\mathrm{S}_0=\\mathrm{C}$. </p><p data-end=\"6503\" data-start=\"6092\">What should be connected to $\\mathrm{I}_0,\\mathrm{I}_1,\\mathrm{I}_2,\\mathrm{I}_3,\\mathrm{I}_4,\\mathrm{I}_5,\\mathrm{I}_6,\\mathrm{I}_7$ respectively?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\mathrm{D},\\mathrm{D}',\\mathrm{D}',\\mathrm{D},\\mathrm{D}',\\mathrm{D},\\mathrm{D},\\mathrm{D}'$<br/></span>",
                "<span style=\"display: inline;\">$\\mathrm{D}',\\mathrm{D},\\mathrm{D},\\mathrm{D}',\\mathrm{D},\\mathrm{D}',\\mathrm{D}',\\mathrm{D}$<br/></span>",
                "<span style=\"display: inline;\">$\\mathrm{D},\\mathrm{D},\\mathrm{D}',\\mathrm{D}',\\mathrm{D},\\mathrm{D}',\\mathrm{D},\\mathrm{D}'$<br/></span>",
                "<span style=\"display: inline;\">$\\mathrm{D}',\\mathrm{D}',\\mathrm{D},\\mathrm{D},\\mathrm{D}',\\mathrm{D},\\mathrm{D}',\\mathrm{D}$</span>"
            ],
            "answer": "A",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"535479\"></a><div itemprop=\"text\"><p><strong>Correct answer is option -A and Here is the Details Explanation </strong></p><p><img alt=\"\" height=\"1252\" src=\"https://gateoverflow.in/?qa=blob&amp;qa_blobid=2396965265788645269\" width=\"1149\"/></p></div><br><br><a href=\"https://gateoverflow.in/535476/go-classes-dpp-gate-cs-digital-logic-8-1-mux#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-digital-logic-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/digital-logic\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Digital Logic - Combinational Circuit</a></b></div></div>"
        }
    ]
});

registerTest({
    "name": "DPP 16 - Digital Logic (Combinational Circuit - Part 3)",
    "testLabel": "DPP 16",
    "testType": "DPP",
    "bracket": "Combinational Circuit - Part 3",
    "subject": "dl",
    "series": "cse-dpp-2027",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 10,
    "topicsCovered": "Combinational Circuit (Practice Set 3)",
    "questions": [
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"4502\" data-start=\"4183\">A $4:1$ MUX has select lines $\\mathrm{R}$ and $\\mathrm{S}$, where $\\mathrm{R}$ is the MSB and $\\mathrm{S}$ is the LSB. The data inputs are $\\mathrm{I}_0=\\mathrm{P}+\\mathrm{Q}'$, $\\mathrm{I}_1=\\mathrm{P}$, $\\mathrm{I}_2=\\mathrm{P}\\mathrm{Q}$, and $\\mathrm{I}_3=0$. What is the simplified output $\\mathrm{Z}$?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\mathrm{Z}=\\mathrm{R}'\\mathrm{P}+\\mathrm{S}'\\mathrm{Q}'+\\mathrm{R}\\mathrm{S}'\\mathrm{P}\\mathrm{Q}$<br/></span>",
                "<span style=\"display: inline;\">$\\mathrm{Z}=\\mathrm{R}'\\mathrm{P}+\\mathrm{R}'\\mathrm{S}'\\mathrm{Q}'+\\mathrm{R}\\mathrm{S}'\\mathrm{P}\\mathrm{Q}$<br/></span>",
                "<span style=\"display: inline;\">$\\mathrm{Z}=\\mathrm{R}'\\mathrm{P}+\\mathrm{R}\\mathrm{S}'\\mathrm{Q}'+\\mathrm{R}\\mathrm{S}'\\mathrm{P}\\mathrm{Q}$<br/></span>",
                "<span style=\"display: inline;\">$\\mathrm{Z}=\\mathrm{R}'\\mathrm{P}+\\mathrm{R}'\\mathrm{S}'\\mathrm{Q}+\\mathrm{R}\\mathrm{S}'\\mathrm{P}\\mathrm{Q}$</span>"
            ],
            "answer": "A",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"535487\"></a><div itemprop=\"text\"><p><b>Here is the Explanation and As of now No option in Minimize form </b></p><p><b><img alt=\"\" height=\"918\" src=\"https://gateoverflow.in/?qa=blob&amp;qa_blobid=16343847715214968385\" width=\"1087\"/></b></p></div><br><br><a href=\"https://gateoverflow.in/535474/go-classes-dpp-gate-cs-digital-logic-mux-expression#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-digital-logic-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/digital-logic\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Digital Logic - Combinational Circuit</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"3460\" data-start=\"3229\">The function $\\mathrm{F}(\\mathrm{A},\\mathrm{B})=\\mathrm{A}\\oplus\\mathrm{B}$ is to be implemented using a $2:1$ MUX with select line $\\mathrm{S}=\\mathrm{A}$. </p><p data-end=\"3460\" data-start=\"3229\">What should be connected to $\\mathrm{I}_0$ and $\\mathrm{I}_1$?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\mathrm{I}_0=\\mathrm{B}'$, $\\mathrm{I}_1=\\mathrm{B}$<br/></span>",
                "<span style=\"display: inline;\">$\\mathrm{I}_0=0$, $\\mathrm{I}_1=1$<br/></span>",
                "<span style=\"display: inline;\">$\\mathrm{I}_0=\\mathrm{A}$, $\\mathrm{I}_1=\\mathrm{A}'$<br/></span>",
                "<span style=\"display: inline;\">$\\mathrm{I}_0=\\mathrm{B}$, $\\mathrm{I}_1=\\mathrm{B}'$</span>"
            ],
            "answer": "D",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"535473\"></a><div itemprop=\"text\"><p data-end=\"3706\" data-start=\"3678\">For a $2:1$ MUX,</p><p data-end=\"3768\" data-start=\"3708\">$\\mathrm{F}=\\mathrm{S}'\\mathrm{I}_0+\\mathrm{S}\\mathrm{I}_1$.</p><p data-end=\"3800\" data-start=\"3770\">Here, $\\mathrm{S}=\\mathrm{A}$.</p><p data-end=\"3805\" data-start=\"3802\">So,</p><p data-end=\"3867\" data-start=\"3807\">$\\mathrm{F}=\\mathrm{A}'\\mathrm{I}_0+\\mathrm{A}\\mathrm{I}_1$.</p><p data-end=\"3908\" data-start=\"3869\">Now check $\\mathrm{A}\\oplus\\mathrm{B}$.</p><p data-end=\"3955\" data-start=\"3910\">When $\\mathrm{A}=0$, $\\mathrm{F}=\\mathrm{B}$.</p><p data-end=\"3987\" data-start=\"3957\">So, $\\mathrm{I}_0=\\mathrm{B}$.</p><p data-end=\"4035\" data-start=\"3989\">When $\\mathrm{A}=1$, $\\mathrm{F}=\\mathrm{B}'$.</p><p data-end=\"4068\" data-start=\"4037\">So, $\\mathrm{I}_1=\\mathrm{B}'$.</p><p style=\"text-align:center\"><img alt=\"\" height=\"332\" src=\"https://cdn.mathpix.com/snip/images/iK1aN61VHLKOlI6FE_lA10YG1oycZG3LOczCn9k-EqQ.original.fullsize.png\" width=\"561\"/></p><p data-end=\"4140\" data-start=\"4070\"><strong>Answer: D</strong></p></div><br><br><a href=\"https://gateoverflow.in/535472/go-classes-dpp-gate-cs-digital-logic-2-1-mux#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-digital-logic-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/digital-logic\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Digital Logic - Combinational Circuit</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"2042\" data-start=\"1734\">The function $\\mathrm{F}(\\mathrm{A},\\mathrm{B},\\mathrm{C})=\\Sigma _m(1,2,5,7)$ is to be implemented using a $4:1$ MUX with select lines $\\mathrm{S}_1=\\mathrm{A}$ and $\\mathrm{S}_0=\\mathrm{B}$. </p><p data-end=\"2042\" data-start=\"1734\">What should be connected to $\\mathrm{I}_0,\\mathrm{I}_1,\\mathrm{I}_2,\\mathrm{I}_3$ respectively?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\mathrm{C}',\\mathrm{C},\\mathrm{C},\\mathrm{C}'$<br/></span>",
                "<span style=\"display: inline;\">$\\mathrm{C},\\mathrm{C},\\mathrm{C}',\\mathrm{C}$<br/></span>",
                "<span style=\"display: inline;\">$\\mathrm{C},\\mathrm{C}',\\mathrm{C},\\mathrm{C}$<br/></span>",
                "<span style=\"display: inline;\">$\\mathrm{C}',\\mathrm{C}',\\mathrm{C},\\mathrm{C}$</span>"
            ],
            "answer": "A",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"535513\"></a><div itemprop=\"text\"><p><strong>Here is the Explanation <img alt=\"\" height=\"915\" src=\"https://gateoverflow.in/?qa=blob&amp;qa_blobid=13812535458844165938\" width=\"1155\"/></strong></p></div><br><br><a href=\"https://gateoverflow.in/535470/go-classes-dpp-gate-cs-digital-logic-mux-implementation#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-digital-logic-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/digital-logic\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Digital Logic - Combinational Circuit</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"621\" data-start=\"365\">A $4:1$ MUX has select lines $\\mathrm{S}_1=\\mathrm{A}$ and $\\mathrm{S}_0=\\mathrm{B}$. The data inputs are $\\mathrm{I}_0=0$, $\\mathrm{I}_1=\\mathrm{C}$, $\\mathrm{I}_2=\\mathrm{C}'$, and $\\mathrm{I}_3=1$. </p><p data-end=\"621\" data-start=\"365\">Find the simplified output $\\mathrm{F}$.</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\mathrm{F}=\\mathrm{A}\\mathrm{C}+\\mathrm{B}\\mathrm{C}'$<br/></span>",
                "<span style=\"display: inline;\">$\\mathrm{F}=\\mathrm{A}\\mathrm{C}'+\\mathrm{B}\\mathrm{C}$<br/></span>",
                "<span style=\"display: inline;\">$\\mathrm{F}=\\mathrm{A}'\\mathrm{C}+\\mathrm{B}\\mathrm{C}'$<br/></span>",
                "<span style=\"display: inline;\">$\\mathrm{F}=\\mathrm{A}\\mathrm{B}'+\\mathrm{B}\\mathrm{C}$</span>"
            ],
            "answer": "B",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"535464\"></a><div itemprop=\"text\"><p style=\"text-align:center\"><img alt=\"\" height=\"266\" src=\"https://cdn.mathpix.com/snip/images/2_DvU-_se9yXxkUxrG4_1PJ8-qEvxAwQ_L7fmfLvyWw.original.fullsize.png\" width=\"438\"/></p><p data-end=\"910\" data-start=\"867\">For a $4:1$ MUX, the output is:</p><p data-end=\"1061\" data-start=\"912\">$\\mathrm{F}=\\mathrm{A}'\\mathrm{B}'\\mathrm{I}_0+\\mathrm{A}'\\mathrm{B}\\mathrm{I}_1+\\mathrm{A}\\mathrm{B}'\\mathrm{I}_2+\\mathrm{A}\\mathrm{B}\\mathrm{I}_3$.</p><p data-end=\"1091\" data-start=\"1063\">Substitute the given inputs.</p><p data-end=\"1221\" data-start=\"1093\">$\\mathrm{F}=\\mathrm{A}'\\mathrm{B}'(0)+\\mathrm{A}'\\mathrm{B}\\mathrm{C}+\\mathrm{A}\\mathrm{B}'\\mathrm{C}'+\\mathrm{A}\\mathrm{B}(1)$.</p><p data-end=\"1226\" data-start=\"1223\">So,</p><p data-end=\"1327\" data-start=\"1228\">$\\mathrm{F}=\\mathrm{A}'\\mathrm{B}\\mathrm{C}+\\mathrm{A}\\mathrm{B}'\\mathrm{C}'+\\mathrm{A}\\mathrm{B}$.</p><p data-end=\"1352\" data-start=\"1329\">Now check the minterms.</p><p data-end=\"1400\" data-start=\"1354\">$\\mathrm{A}'\\mathrm{B}\\mathrm{C}$ gives $m_3$.</p><p data-end=\"1449\" data-start=\"1402\">$\\mathrm{A}\\mathrm{B}'\\mathrm{C}'$ gives $m_4$.</p><p data-end=\"1490\" data-start=\"1451\">$\\mathrm{A}\\mathrm{B}$ gives $m_6,m_7$.</p><p data-end=\"1536\" data-start=\"1492\">$\\Rightarrow \\mathrm{F}=\\Sigma _m(3,4,6,7)$</p><p style=\"text-align:center\"><img alt=\"\" height=\"181\" src=\"https://cdn.mathpix.com/snip/images/cfTwYlZSNbAM6O1wbQH9SJdOApTRY7Lam4WVJdA64pQ.original.fullsize.png\" width=\"256\"/></p><p data-end=\"1687\" data-start=\"1615\"><strong>Answer: B</strong></p></div><br><br><a href=\"https://gateoverflow.in/535460/go-classes-dpp-gate-cs-digital-logic-mux-output#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-digital-logic-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/digital-logic\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Digital Logic - Combinational Circuit</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"1002\" data-start=\"867\">How many $8$-bit patterns represent the same decimal value when interpreted as sign-magnitude and $1$'s complement numbers?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$64$<br/></span>",
                "<span style=\"display: inline;\">$127$<br/></span>",
                "<span style=\"display: inline;\">$128$<br/></span>",
                "<span style=\"display: inline;\">$255$</span>"
            ],
            "answer": "C",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"534601\"></a><div itemprop=\"text\"><p data-end=\"1177\" data-start=\"1046\">In both sign-magnitude and $1$'s complement, all patterns starting with $0$ represent positive numbers in the same way.</p><p data-end=\"1262\" data-start=\"1179\">So, all patterns from $00000000$ to $01111111$ have the same value in both systems.</p><p data-end=\"1291\" data-start=\"1264\">Number of such patterns is:</p><p data-end=\"1302\" data-start=\"1293\">$2^7=128$</p><p data-end=\"1344\" data-start=\"1304\">Now consider patterns starting with $1$.</p><p data-end=\"1416\" data-start=\"1346\">In sign-magnitude, the remaining $7$ bits directly give the magnitude.</p><p data-end=\"1493\" data-start=\"1418\">In $1$'s complement, the negative value is found by complementing the bits.</p><p data-end=\"1566\" data-start=\"1495\">So, negative patterns do not represent the same values in both systems.</p><p data-end=\"1649\" data-start=\"1568\">Therefore, only the $128$ patterns starting with $0$ have the same decimal value.</p><p data-end=\"1673\" data-start=\"1651\"><strong>Answer: C</strong></p></div><br><br><a href=\"https://gateoverflow.in/534600/go-classes-dpp-gate-cs-digital-logic-complement-values#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-digital-logic-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/digital-logic\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Digital Logic - Combinational Circuit</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>You are tasked with implementing a $3$-input XOR gate using a single $4$-to-$1$ Multiplexer. The inputs to the XOR gate are $X, Y, Z$. If $X$ and $Y$ are connected to the select lines $S_1$ and $S_0$ respectively, what should be the sequence of inputs $\\left(I_0, I_1, I_2, I_3\\right)$ ?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$(Z, \\bar{Z}, \\bar{Z}, Z)$<br/></span>",
                "<span style=\"display: inline;\">$(\\bar{Z}, Z, Z, \\bar{Z})$<br/></span>",
                "<span style=\"display: inline;\">$(0,1,1,0)$<br/></span>",
                "<span style=\"display: inline;\">$(Z, Z, \\bar{Z}, \\bar{Z})$</span>"
            ],
            "answer": "A",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"534798\"></a><div itemprop=\"text\"><p><strong>Here is the Explanation <img alt=\"\" height=\"1170\" src=\"https://gateoverflow.in/?qa=blob&amp;qa_blobid=9123840573413194847\" width=\"1199\"/></strong></p></div><br><br><a href=\"https://gateoverflow.in/523583/go-classes-dpp-digital-logic-mux#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-digital-logic-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/digital-logic\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Digital Logic - Combinational Circuit</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>An $8: 1$ Multiplexer is used to implement a specific Boolean function $f(A, B, C, D)$. The input lines $I_0$ through $I_7$ are connected as follows:</p><p>The selection lines $S_2, S_1, S_0$ are connected to variables $A, B, C$ respectively.<br/><br/><strong>Identify the simplified sum-of-products (SOP) expression for</strong> $f(A, B, C, D)$.</p><p><strong>Given Details:</strong></p><ul><li>$I_0=I_2=I_4=I_6=0$</li><li>$I_1=I_5=D$</li><li>$I_3=I_7=\\bar{D}$</li></ul></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$A \\cdot(B \\oplus D)$</span>",
                "<span style=\"display: inline;\">$C \\cdot(B \\oplus D)$</span>",
                "<span style=\"display: inline;\">$B \\cdot(C \\oplus D)$</span>",
                "<span style=\"display: inline;\">$D \\cdot(A \\oplus C)$</span>"
            ],
            "answer": "A",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"523431\"></a><div itemprop=\"text\"><p>The output of an $8:1$ MUX is $f=\\sum_{i=0}^7\\left(m_i \\cdot I_i\\right)$, where $m_i$ are the minterms of the select lines $(A, B, C)$.</p><ul><li>$I_0, I_2, I_4, I_6=0$ (These terms vanish).<br/> </li><li>$I_1=D, I_5=D \\rightarrow(\\bar{A} \\bar{B} C \\cdot D)+(A \\bar{B} C \\cdot D)=\\bar{B} C D(A+\\bar{A})=\\bar{B} C D$.<br/> </li><li>$I_3=\\bar{D}, I_7=\\bar{D} \\rightarrow(\\bar{A} B C \\cdot \\bar{D})+(A B C \\cdot \\bar{D})=B C \\bar{D}(A+\\bar{A})=B C \\bar{D}$.<br/> </li></ul><p><strong>Combine the terms:</strong>$$f=\\bar{B} C D+B C \\bar{D}=C(\\bar{B} D+B \\bar{D})=C(B \\oplus D) .$$</p></div><br><br><a href=\"https://gateoverflow.in/523430/go-classes-dpp-digital-logic-mux#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-digital-logic-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/digital-logic\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Digital Logic - Combinational Circuit</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>A circuit consists of two $2-$to$-1$ Multiplexers in cascade. The first MUX has inputs $I_0=1, I_1= 0$ and select line $S_0=A$. Its output is connected to the $I_1$ input of the second MUX. The second MUX has $I_0=0$ and select line $S_1=B$.</p><p>Assuming each MUX has a propagation delay of $\\mathbf{1 0 ~ n s}$, what is the maximum frequency (in MHz) at which this circuit can operate if the output must be stable before the next transition?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$100 ~\\mathrm{MHz}$<br/></span>",
                "<span style=\"display: inline;\">$50 ~\\mathrm{MHz}$<br/></span>",
                "<span style=\"display: inline;\">$25 ~\\mathrm{MHz}$<br/></span>",
                "<span style=\"display: inline;\">$5~\\mathrm{MHz}$</span>"
            ],
            "answer": "A",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"522928\"></a><div itemprop=\"text\">The output of MUX $1$ feeds into MUX $2$. This is a serial (cascaded) path.<br/> <br/> Total Propagation Delay $\\left(t_{p d}\\right)=$ Delay of MUX $1+$ Delay of MUX 2. $t_{p d}=10 \\mathrm{~ns}+10 \\mathrm{~ns}=20 \\mathrm{~ns}$.<br/> <br/> Calculate Maximum Frequency ( $f_{\\text {max }}$ ).<br/> <br/> $$<br/> \\begin{aligned}<br/> &amp; f_{\\max }=\\frac{1}{t_{p d}} \\\\<br/> &amp; f_{\\max }=\\frac{1}{20 \\times 10^{-9}}=0.05 \\times 10^9 \\mathrm{~Hz}=50 \\mathrm{MHz}<br/> \\end{aligned}<br/> $$</div><br><br><a href=\"https://gateoverflow.in/522926/go-classes-dpp-digital-logic-mux#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-digital-logic-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/digital-logic\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Digital Logic - Combinational Circuit</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider a $4$-to-$16$ line decoder with active-low outputs. To implement a logic function that is the NAND of inputs $X_1, X_2, X_3, X_4$, which of the following is required at the output of the decoder?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">An OR gate connected to all outputs except $Y_{15}$<br/></span>",
                "<span style=\"display: inline;\">A single inverter connected to output $Y_{15}$<br/></span>",
                "<span style=\"display: inline;\">A single connection from output $Y_{15}$ (it will already represent the NAND)<br/></span>",
                "<span style=\"display: inline;\">An OR gate connected to all outputs</span>"
            ],
            "answer": "A",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"522401\"></a><div itemprop=\"text\"><p>In the context of a $\\mathbf{4}$<strong>-to-</strong>$\\mathbf{16}$<strong> line Active-Low Decoder:</strong></p><ul><li><strong>Active-Low</strong> means the selected minterm output is $\\mathbf{0}$, and all other $\\mathbf{1 5}$ outputs are $\\mathbf{1}$.<br/> </li><li><strong>For the NAND function:</strong> We need the output to be $0$ only when the input is $1111 ($which is $m_{15})$.<br/> </li><li><strong>The Decoder Match:</strong> When you feed $1111$ into the decoder, output $Y_{15}$ is the only one that drops to $\\mathbf{0}$. For all other inputs $( 0000$ through $1110 )$, $Y_{15}$ stays at $\\mathbf{1}$.</li></ul></div><br><br><a href=\"https://gateoverflow.in/522400/go-classes-dpp-digital-logic-decoder#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-digital-logic-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/digital-logic\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Digital Logic - Combinational Circuit</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>What is the minimum number of $2$-to-$1$ Multiplexers required to implement a $2$-input XOR gate?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$1$<br/></span>",
                "<span style=\"display: inline;\">$2$<br/></span>",
                "<span style=\"display: inline;\">$3$<br/></span>",
                "<span style=\"display: inline;\">$4$</span>"
            ],
            "answer": "A",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"522397\"></a><div itemprop=\"text\"><p>An XOR gate $(A \\oplus B)$ can be written as: $F=\\bar{A} B+A \\bar{B}$.<br/><br/>Using a $2$-to-$1$ MUX where $A$ is the select line:</p><ul><li>If $A=0, F=B$<br/> </li><li>If $A=1, F=\\bar{B}$</li></ul><p>However, to get $\\bar{B}$ from $B$, you need a second $2$-to-$1$ MUX (acting as an inverter) where the inputs are $1$ and $0$ and the select line is $B$.</p><p>Therefore, $\\mathbf{2}$ multiplexers are required.</p></div><br><br><a href=\"https://gateoverflow.in/522396/go-classes-dpp-digital-logic-mux#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-digital-logic-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/digital-logic\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Digital Logic - Combinational Circuit</a></b></div></div>"
        }
    ]
});

registerTest({
    "name": "DPP 17 - Digital Logic (Combinational Circuit - Part 4)",
    "testLabel": "DPP 17",
    "testType": "DPP",
    "bracket": "Combinational Circuit - Part 4",
    "subject": "dl",
    "series": "cse-dpp-2027",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 11,
    "topicsCovered": "Combinational Circuit (Practice Set 4)",
    "questions": [
        {
            "marks": 2,
            "neg": 0,
            "type": "MSQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>A $4$-to-$1$ Multiplexer is used to implement a Boolean function $F(A, B, C)$. The select lines $S_1$ and $S_0$ are connected to variables $A$ and $B$, respectively. The inputs to the MUX are:</p><p>Which of the following statements is/are <strong>CORRECT</strong> regarding the function $F$ ?</p><p><strong>Given Details:</strong></p><ul><li>$I_0=C$</li><li>$I_1=\\bar{C}$</li><li>$I_2=0$</li><li>$I_3=1$</li></ul></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">The simplified SOP form of the function is $F=\\bar{A} \\bar{B} C+\\bar{A} B \\bar{C}+A B$.</span>",
                "<span style=\"display: inline;\">The function $F$ can be implemented using a single 2-input XNOR gate by setting $C=1$.</span>",
                "<span style=\"display: inline;\">The function $F$ evaluates to 1 when the input $(A, B, C)=(1,1,0)$.</span>",
                "<span style=\"display: inline;\">The function $F$ is independent of the variable $C$ when $A=1$.</span>"
            ],
            "answer": [
                "A"
            ],
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"522228\"></a><div itemprop=\"text\"><p><strong>Expansion: </strong>$F=\\bar{A} \\bar{B} I_0+\\bar{A} B I_1+A \\bar{B} I_2+A B I_3$.<br/><br/>Substitute values: $F=\\bar{A} \\bar{B}(C)+\\bar{A} B(\\bar{C})+A \\bar{B}(0)+A B(1)$.<br/><br/><strong>(C) is true:</strong> If $(1,1,0), F=(1)(1)(0)+(1)(1)(1)+0+(1)(1)=1$.<br/><br/><strong>(D) is true:</strong> When $A=1, F=0+0+0+(1) B=B$. This is independent of $C$.</p><p>If we set $C=1, F=\\bar{A} \\bar{B}+A B$<br/><br/>The expression $\\bar{A} \\bar{B}+A B$ is the exact definition of an <strong>XNOR</strong> gate $(A \\odot B)$.</p></div><br><br><a href=\"https://gateoverflow.in/522227/go-classes-dpp-digital-logic-mux#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-digital-logic-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/digital-logic\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Digital Logic - Combinational Circuit</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider a logic circuit consisting of two $\\mathbf{2}$<strong>-to-</strong>$\\mathbf{4}$ decoders and one $\\mathbf{2}$<strong>-input OR gate.</strong></p><p>The final output function $F(A, B, C)$ is obtained by feeding the output $Y_1$ from $D_1$ and $W_2$ from $D_2$ into the $\\mathbf{2}$<strong>-input OR gate.</strong></p><p>Calculate the number of <strong>minterms</strong> present in the simplified expression of $F(A, B, C)$.</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">The first decoder $\\left(D_1\\right)$ has select lines $A$ (MSB) and $B$ (LSB). Its outputs are $Y_0, Y_1, Y_2, Y_3$.<br/></span>",
                "<span style=\"display: inline;\">The second decoder $(D_2)$ has select lines $B$ (MSB) and $C$ (LSB). Its outputs are $W_0, W_1, W_2, W_3$.<br/></span>",
                "<span style=\"display: inline;\">Both decoders are active-high and have their <strong>Enable</strong> $(E)$ inputs connected to logic $\\mathbf{1}$.<br/></span>"
            ],
            "answer": "0",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"521778\"></a><div itemprop=\"text\"><p><strong>Analyze Decoder $1\\left(D_1\\right)$ :</strong></p><ul><li>Select lines: $A, B$<br/> </li><li>Output $Y_1$ corresponds to the binary input $01$.<br/> </li><li>Therefore, $Y_1=\\bar{A} B$.<br/> </li><li>Since the total function has three variables $(A, B, C)$, we expand $Y_1$ :</li></ul><p>$$<br/>Y_1=\\bar{A} B(C+\\bar{C})=\\bar{A} B C+\\bar{A} B \\bar{C} \\quad\\left(\\text { Minterms } m_3, m_2\\right)<br/>$$</p><p><br/><br/><strong>Analyze Decoder $2\\left(D_2\\right)$ :</strong></p><ul><li>Select lines: $B, C$<br/> </li><li>Output $W_2$ corresponds to the binary input $10$.<br/> </li><li>Therefore, $W_2=B \\bar{C}$.<br/> </li><li>Expanding $W_2$ to three variables:</li></ul><p>$$<br/>W_2=(A+\\bar{A}) B \\bar{C}=A B \\bar{C}+\\bar{A} B \\bar{C} \\quad\\left(\\text { Minterms } m_6, m_2\\right)<br/>$$</p><p><br/><strong>Combine using the OR gate:</strong><br/>$$<br/>\\begin{aligned}<br/>&amp; F=Y_1+W_2 \\\\\\\\<br/>&amp; F=\\left\\{m_3, m_2\\right\\} \\cup\\left\\{m_6, m_2\\right\\} \\\\\\\\<br/>&amp; F=\\left\\{m_2, m_3, m_6\\right\\}<br/>\\end{aligned}<br/>$$</p></div><br><br><a href=\"https://gateoverflow.in/521776/go-classes-dpp-digital-logic-decoder#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-digital-logic-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/digital-logic\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Digital Logic - Combinational Circuit</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>A Boolean function $F(X, Y, Z)$ is implemented using a $\\mathbf{4}$<strong>-to-$\\mathbf{1}$ Multiplexer</strong> as shown below. The select lines $S_1$ and $S_0$ are connected to $X$ and $Y$ respectively. The inputs to the MUX are $I_0=Z, I_1=\\bar{Z}, I_2=1$, and $I_3=0$.</p><p>How many <strong>minterms</strong> are present in the canonical Sum of Products (SOP) form of the function $F(X, Y, Z)$?</p></div></span>",
            "image": "",
            "options": [],
            "answer": "0",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"521775\"></a><div itemprop=\"text\">\\begin{aligned}<br/> &amp;F=\\bar{X} \\bar{Y} Z+\\bar{X} Y \\bar{Z}+X \\bar{Y} Z+X \\bar{Y} \\bar{Z}\\\\<br/> &amp;\\text { The minterms are } m_1, m_2, m_5, m_4 \\text {. Total count }=\\mathbf{4} \\text {. }<br/> \\end{aligned}</div><br><br><a href=\"https://gateoverflow.in/521774/go-classes-dpp-digital-logic-mux#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-digital-logic-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/digital-logic\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Digital Logic - Combinational Circuit</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>A Boolean function $f(A, B, C, D)$ is implemented using a $4-$<strong>to</strong>$-1$ <strong>Multiplexer</strong> as shown below. The control lines are connected to $S_1=A$ and $S_0=B$. The inputs to the multiplexer are $I_0=C \\oplus D, I_1=C+\\bar{D}, I_2=\\bar{C} D$, and $I_3=0$.</p><p>Which of the following represents the correct <strong>Sum of Products (SOP)</strong> form for the function $f$ ?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\sum m(1,2,4,6,9)$<br/></span>",
                "<span style=\"display: inline;\">$\\sum m(1,2,4,6,7,9)$<br/></span>",
                "<span style=\"display: inline;\">$\\sum m(1,2,5,6,7,10)$<br/></span>",
                "<span style=\"display: inline;\">$\\sum m(2,4,5,8,9,12)$</span>"
            ],
            "answer": "A",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"521146\"></a><div itemprop=\"text\"><p>To find the SOP form, we evaluate the output $f$ based on the select lines $A$ and $B$. The general equation for a $4-$to$-1$ MUX is:</p><p>$$<br/>f=\\bar{A} \\bar{B}\\left(I_0\\right)+\\bar{A} B\\left(I_1\\right)+A \\bar{B}\\left(I_2\\right)+A B\\left(I_3\\right)<br/>$$<br/><strong>For </strong>$I_0(A B=00)$ : $C \\oplus D=\\bar{C} D+C \\bar{D}$.</p><ul><li>Minterms: $m(0001)=1$ and $m(0010)=2$.</li></ul><p><br/><strong>For </strong>$I_1(A B=01): C+\\bar{D}=C(D+\\bar{D})+\\bar{D}(C+\\bar{C})=C D+C \\bar{D}+\\bar{C} \\bar{D}$.</p><ul><li>Minterms: $m(0111)=7, m(0110)=6$, and $m(0100)=4$. (Note: $m(0101)$ is missing).</li></ul><p><br/><strong>For</strong> $I_2(A B=10): \\bar{C} D$.</p><ul><li>Minterms: $m(1001)=9$.</li></ul><p><br/><strong>For</strong> $I_3(A B=11) : 0 $.</p><ul><li>No minterms.<br/> </li></ul><p>The set of minterms is $\\{1,2,4,6,7,9\\}$</p></div><br><br><a href=\"https://gateoverflow.in/521145/go-classes-dpp-digital-logic-mux#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-digital-logic-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/digital-logic\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Digital Logic - Combinational Circuit</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider a $4$-to-$1$ Multiplexer with select lines $S_1$ (MSB) and $S_0$ (LSB). The input lines $I_0, I_1, I_2, I_3$ are connected as follows: $I_0=0, I_1=1$, $I_2=C$, and $I_3=\\bar{C}$. If the select lines are connected as $S_1=A$ and $S_0=B$, which Boolean function does the multiplexer implement?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$A^{\\prime} B+A C+A B^{\\prime} C$<br/></span>",
                "<span style=\"display: inline;\">$A+B+C$<br/></span>",
                "<span style=\"display: inline;\">$A B C+A^{\\prime} B^{\\prime} C^{\\prime}$<br/></span>",
                "<span style=\"display: inline;\">$A^{\\prime} B+A B^{\\prime} C+A B C^{\\prime}$</span>"
            ],
            "answer": "A",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"520895\"></a><div itemprop=\"text\">The output of a $4$-to-$1$ MUX is $\\sum m\\left(I_n \\cdot \\operatorname{minterm}_n\\right)$. Substituting the given values gives $0+A^{\\prime} B(1)+A B^{\\prime}(C)+A B(\\bar{C})$.</div><br><br><a href=\"https://gateoverflow.in/520894/go-classes-dpp-gate-cs-digital-logic-mux#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-digital-logic-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/digital-logic\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Digital Logic - Combinational Circuit</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>In the circuit shown, $W$ and $Y$ are MSBs of the control inputs. The output $F$ is given by</p><p><img alt=\"\" src=\"https://gateoverflow.in/?qa=blob&amp;qa_blobid=4590764545615280452\"/></p></div></span>",
            "image": "https://gateoverflow.in/?qa=blob&qa_blobid=4590764545615280452",
            "options": [
                "<span style=\"display: inline;\">$F=W \\bar{X}+\\bar{W} X+\\bar{Y} \\bar{Z}$<br/></span>",
                "<span style=\"display: inline;\">$F=W \\bar{X}+\\bar{W} X+\\bar{Y} Z$<br/></span>",
                "<span style=\"display: inline;\">$F=W \\bar{X} \\bar{Y}+\\bar{W} X \\bar{Y}$<br/></span>",
                "<span style=\"display: inline;\">$F=(\\bar{W}+\\bar{X}) \\bar{Y} \\bar{Z}$</span>"
            ],
            "answer": "C",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"474420\"></a><div itemprop=\"text\"><p>Option C </p><p><img alt=\"\" height=\"559\" src=\"https://gateoverflow.in/?qa=blob&amp;qa_blobid=4187000337795181935\" width=\"622\"/></p></div><br><br><a href=\"https://gateoverflow.in/474345/go-classes-dpp-digital-logics-multiplexers#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-digital-logic-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/digital-logic\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Digital Logic - Combinational Circuit</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>The figure below shows a multiplexer where $S_1$ and $S_0$ are the select lines, $I_5$ to $I_5$ are the input data lines, EN is the enable line, and $P(P, Q, R)$ is the output, F is</p><p><img alt=\"\" src=\"https://gateoverflow.in/?qa=blob&amp;qa_blobid=5343442839983943847\"/></p></div></span>",
            "image": "https://gateoverflow.in/?qa=blob&qa_blobid=5343442839983943847",
            "options": [
                "<span style=\"display: inline;\">$P Q+\\bar{Q} R$<br/></span>",
                "<span style=\"display: inline;\">$P+Q \\bar{R}$<br/></span>",
                "<span style=\"display: inline;\">$P \\bar{Q} R+\\bar{P} Q$<br/></span>",
                "<span style=\"display: inline;\">$\\bar{Q}+P R$</span>"
            ],
            "answer": "A",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"473856\"></a><div itemprop=\"text\"><p><b id=\"docs-internal-guid-927e2545-7fff-0139-8904-ef12c8306d0b\"><img alt=\"\" height=\"188\" src=\"https://lh7-rt.googleusercontent.com/docsz/AD_4nXcc6GV4jFtDrJ4C_Lpr8RRM_h95Fkb1iYgj53pMshVI8Juyow9c5ECesh5uIExrx8uV734qt-qeaZJuAPyGZWGSL9YgfaYgtEtAUoiJxBQQH0E97ogAP9W1gcCKJHyM-VbM8mGQ_A?key=6Hc1au4UG79mfLQM7LEBlA\" width=\"320\"/></b></p></div><br><br><a href=\"https://gateoverflow.in/473855/go-classes-dpp-digital-logics-combinational-circuits-gate-ec#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-digital-logic-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/digital-logic\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Digital Logic - Combinational Circuit</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>The propagation delay of the $2 \\times 1 \\mathrm{MUX}$ shown in the circuit is 10 ns . Consider the propagation delay of the inverter as 0 ns .</p><p><img alt=\"\" src=\"https://gateoverflow.in/?qa=blob&amp;qa_blobid=8351093819414822178\"/></p><p>If $S$ is set to 1 then the output $Y$ is $\\qquad$</p></div></span>",
            "image": "https://gateoverflow.in/?qa=blob&qa_blobid=8351093819414822178",
            "options": [
                "<span style=\"display: inline;\">a square wave of frequency 100 MHz</span>",
                "<span style=\"display: inline;\">a square wave of frequency 50 MHz</span>",
                "<span style=\"display: inline;\">constant ar 0</span>",
                "<span style=\"display: inline;\">constantar</span>"
            ],
            "answer": "A",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"473379\"></a><div itemprop=\"text\"><p><b id=\"docs-internal-guid-9ef535e5-7fff-ac91-6000-8abc43714c4d\"><img alt=\"\" height=\"257\" src=\"https://lh7-rt.googleusercontent.com/docsz/AD_4nXepHOPlq931CTu9kdbDXCrUztR_wPKTwTeP32KZGxZaJPRUVUo_rv0MfHNdbYPjh0oAVS-PBIeGUbNi5KWDsu2WUfIvFRVQDfxwwcYOfDZkoaug1ZREZcEeXMLmwzv3KrDKUtXc?key=O-UM7iNCO32Bplxj1aqz2Q\" width=\"381\"/></b></p></div><br><br><a href=\"https://gateoverflow.in/473378/go-classes-dpp-digital-logic-multiplexer-gate-ec-2024#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-digital-logic-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/digital-logic\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Digital Logic - Combinational Circuit</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Q. An 8-to-1 multiplexer has its select lines $S_2, S_1, S_0$ connected to $A, B, C$ respectively. The data inputs are as follows:</p><p>$$<br/>\\begin{aligned}<br/>&amp; I_1=I_2=I_7=0 \\\\<br/>&amp; I_3=I_5=1 \\\\<br/>&amp; I_0=I_4=D \\\\<br/>&amp; I_6=D^{\\prime}<br/>\\end{aligned}<br/>$$</p><p><br/>Which Boolean function of $A, B, C, D$ is implemented by the multiplexer?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$F=A^{\\prime} B^{\\prime} C^{\\prime} D+A^{\\prime} B C+A B^{\\prime} C^{\\prime} D+A B^{\\prime} C+A B C^{\\prime} D^{\\prime}$<br/></span>",
                "<span style=\"display: inline;\">$F=A^{\\prime} B^{\\prime} C^{\\prime} D+A^{\\prime} B C+A B^{\\prime} C^{\\prime} D^{\\prime}+A B^{\\prime} C+A B C^{\\prime} D^{\\prime}$<br/></span>",
                "<span style=\"display: inline;\">$F=A^{\\prime} B^{\\prime} C^{\\prime} D+A^{\\prime} B C+A B^{\\prime} C^{\\prime} D+A B^{\\prime} C+A B C D^{\\prime}$<br/></span>",
                "<span style=\"display: inline;\">$F=A^{\\prime} B^{\\prime} C^{\\prime} D+A^{\\prime} B C+A B^{\\prime} C^{\\prime} D+A B C+A B C^{\\prime} D^{\\prime}$</span>"
            ],
            "answer": "A",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"473389\"></a><div itemprop=\"text\">Option A</div><br><br><a href=\"https://gateoverflow.in/473376/go-classes-dpp-digital-logic-multiplexer-morris-mano#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-digital-logic-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/digital-logic\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Digital Logic - Combinational Circuit</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p><b id=\"docs-internal-guid-db8a99ff-7fff-aa9f-2ecf-e498d81f0c24\">The logic circuit below has three inputs, $X$, $Y$, and $Z$, and two outputs, $F$ and $G$. Which of the below given minterm list for output $F$ is correct?</b></p><p><img alt=\"\" src=\"https://gateoverflow.in/?qa=blob&amp;qa_blobid=3577035623135738994\"/></p></div></span>",
            "image": "https://gateoverflow.in/?qa=blob&qa_blobid=3577035623135738994",
            "options": [
                "<span style=\"display: inline;\">$\\Sigma(0,1,2,4)$<br/></span>",
                "<span style=\"display: inline;\">$\\Sigma(3,5,6,7)$<br/></span>",
                "<span style=\"display: inline;\">$\\Sigma(0,2,4,6)$<br/></span>",
                "<span style=\"display: inline;\">$\\sum(1,3,5,7)$</span>"
            ],
            "answer": "A",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"472487\"></a><div itemprop=\"text\"><p><img alt=\"\" src=\"https://gateoverflow.in/?qa=blob&amp;qa_blobid=4289941403004079836\"/></p></div><br><br><a href=\"https://gateoverflow.in/472486/go-classes-dpp-digital-logic-canonical-normal-form-philadelphia-university#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-digital-logic-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/digital-logic\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Digital Logic - Combinational Circuit</a></b></div></div>"
        }
    ]
});

registerTest({
    "name": "DPP 18 - Digital Logic (Combinational Circuit - Part 5)",
    "testLabel": "DPP 18",
    "testType": "DPP",
    "bracket": "Combinational Circuit - Part 5",
    "subject": "dl",
    "series": "cse-dpp-2027",
    "date": "Nov 03, 2026",
    "duration": "18 Min",
    "totalMarks": 6,
    "topicsCovered": "Combinational Circuit (Practice Set 5)",
    "questions": [
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>$$<br/>\\text { If the input combination } \\mathbf{A}=\\mathbf{0}, \\mathbf{B}=\\mathbf{1} \\text { is applied to this circuit, the (steady state) output will be: }<br/>$$</p><p><img alt=\"\" src=\"https://gateoverflow.in/?qa=blob&amp;qa_blobid=7916948857171836806\"/></p></div></span>",
            "image": "https://gateoverflow.in/?qa=blob&qa_blobid=7916948857171836806",
            "options": [
                "<span style=\"display: inline;\">$X=0, Y=0$<br/></span>",
                "<span style=\"display: inline;\">$\\mathrm{X}=0, Y=1$<br/></span>",
                "<span style=\"display: inline;\">$\\mathrm{X}=1, \\mathrm{Y}=0$<br/></span>",
                "<span style=\"display: inline;\">$\\mathrm{X}=1, \\mathrm{Y}=1$</span>"
            ],
            "answer": "A",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"472483\"></a><div itemprop=\"text\"><p><img alt=\"\" src=\"https://gateoverflow.in/?qa=blob&amp;qa_blobid=5167050191915616902\"/></p></div><br><br><a href=\"https://gateoverflow.in/472482/go-classes-dpp-digital-logic-combinational-circuit-philadelphia-university#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-digital-logic-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/digital-logic\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Digital Logic - Combinational Circuit</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>A $\\mathbf{6 x 6 4}$ line decoder can be built using:</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">Six $2 \\times 4$ line decoders only</span>",
                "<span style=\"display: inline;\">Nine $2 \\times 4$ line decoders only</span>",
                "<span style=\"display: inline;\">Seven $3 \\times 8$ line decoders only</span>",
                "<span style=\"display: inline;\">Nine $3 \\times 8$ line decoders only</span>"
            ],
            "answer": "A",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"471843\"></a><div itemprop=\"text\"><p><img alt=\"\" src=\"https://gateoverflow.in/?qa=blob&amp;qa_blobid=3615434559942934367\"/></p></div><br><br><a href=\"https://gateoverflow.in/471842/go-classes-dpp-digital-logic-combinational-circuits-philadelphia-university#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-digital-logic-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/digital-logic\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Digital Logic - Combinational Circuit</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>The Boolean function realized by the logic circuit shown is</p><p><img alt=\"\" src=\"https://gateoverflow.in/?qa=blob&amp;qa_blobid=6052656889939086402\"/></p></div></span>",
            "image": "https://gateoverflow.in/?qa=blob&qa_blobid=6052656889939086402",
            "options": [
                "<span style=\"display: inline;\">$\\quad F=\\Sigma m(0,1,3,5,9,10.14)$</span>",
                "<span style=\"display: inline;\">$\\quad \\mathrm{F}=\\Sigma \\mathrm{m}(2,3,5,7,8,12.13)$</span>",
                "<span style=\"display: inline;\">$\\quad F=\\Sigma m(1,2,4,5,11,14.15)$</span>",
                "<span style=\"display: inline;\">$\\quad F=\\Sigma m(2,3,5,7,8,9,12)$</span>"
            ],
            "answer": "D",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"471845\"></a><div itemprop=\"text\">answer is D</div><br><br><a href=\"https://gateoverflow.in/471836/go-classes-dpp-digital-logic-multiplexer-philadelphia-university#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-digital-logic-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/digital-logic\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Digital Logic - Combinational Circuit</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>The circuit shown here is most likely a ______ .</p><p><img alt=\"\" src=\"https://gateoverflow.in/?qa=blob&amp;qa_blobid=3344911355778917641\"/></p></div></span>",
            "image": "https://gateoverflow.in/?qa=blob&qa_blobid=3344911355778917641",
            "options": [
                "<span style=\"display: inline;\">Adder</span>",
                "<span style=\"display: inline;\">Multiplexer</span>",
                "<span style=\"display: inline;\">Demultiplexer</span>",
                "<span style=\"display: inline;\">Parity generator</span>"
            ],
            "answer": "A",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"471716\"></a><div itemprop=\"text\">Its most likely to be demux of size 2 to 4<br/> adder basically have 2 output one is carry and another sum so we can neglect it<br/> mux basically have some control lines to choose any 1 input out of n input to pass to 2\"n signal lines<br/> parity generator i guess check for parity bit</div><br><br><a href=\"https://gateoverflow.in/471703/go-classes-dpp-digital-logic-decoder-philadelphia-university#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-digital-logic-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/digital-logic\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Digital Logic - Combinational Circuit</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>What function $F(x, y, z)$ is implemented in the figure shown below?</p><p><img alt=\"\" src=\"https://gateoverflow.in/?qa=blob&amp;qa_blobid=3073381357347192873\"/></p></div></span>",
            "image": "https://gateoverflow.in/?qa=blob&qa_blobid=3073381357347192873",
            "options": [
                "<span style=\"display: inline;\">$F=\\Sigma m(2,4,5)$</span>",
                "<span style=\"display: inline;\">$F=\\Sigma m(3,5,6)$</span>",
                "<span style=\"display: inline;\">$F=\\Sigma m(2,3,5)$</span>",
                "<span style=\"display: inline;\">$F=\\Sigma m(3,4,6)$</span>"
            ],
            "answer": "A",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"471259\"></a><div itemprop=\"text\">$F=\\Sigma m(2,4,5)$</div><br><br><a href=\"https://gateoverflow.in/471258/go-classes-dpp-digital-logic-decoder-philadelphia-university#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-digital-logic-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/digital-logic\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Digital Logic - Combinational Circuit</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>An 8-to-1 multiplexer has inputs $\\mathbf{A}, \\mathbf{B}$, and $\\mathbf{C}$ connected to the selection inputs $\\mathbf{S2}, \\mathbf{S1}$, and $\\mathbf{S0}$, respectively. The data inputs $\\boldsymbol{I}_0$ through $\\boldsymbol{I}_7$ are as follows:</p><p>$$<br/>I_1=I_2=0 ; \\quad I_3=I_5=I_7=1 ; \\quad I_0=I_4=\\bar{D} \\quad \\text { and } \\quad I_6=D<br/>$$</p><p><br/>The Boolean function that the multiplexer implements is</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$F=\\Sigma m(0,6,7,8,10,11,13,14,15) $<br/></span>",
                "<span style=\"display: inline;\">$F=\\Sigma m(1,2,3,4,5,9,12)$<br/></span>",
                "<span style=\"display: inline;\">$ F=\\Sigma m(0,6,7,8,9,11,13,14,15) $<br/></span>",
                "<span style=\"display: inline;\">$ F=\\Sigma m(0,6,7,9,11,14,15) $</span>"
            ],
            "answer": "A",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"470842\"></a><div itemprop=\"text\">The output of the function,<br/> <br/> $$<br/> \\begin{aligned}<br/> &amp; F=I_0 A^{\\prime} B^{\\prime} C^{\\prime}+I_1 A^{\\prime} B^{\\prime} C+I_2 A^{\\prime} B C^{\\prime}+I_3 A^{\\prime} B C+I_4 A B^{\\prime} C^{\\prime}+I_5 A B^{\\prime} C+I_6 A B C^{\\prime}+I_7 A B C \\\\<br/> &amp; F=D^{\\prime} A^{\\prime} B^{\\prime} C^{\\prime}+0 A^{\\prime} B^{\\prime} C+0 A^{\\prime} B C^{\\prime}+1 A^{\\prime} B C+D^{\\prime} A B^{\\prime} C^{\\prime}+1 A B^{\\prime} C+D A B C^{\\prime}+1 A B C \\\\<br/> &amp; F=A^{\\prime} B^{\\prime} C^{\\prime} D^{\\prime}+A^{\\prime} B C+A B^{\\prime} C^{\\prime} D^{\\prime}+A B^{\\prime} C+A B C^{\\prime} D+A B C \\\\<br/> &amp; F=A^{\\prime} B^{\\prime} C^{\\prime} D^{\\prime}+A^{\\prime} B C D^{\\prime}+A^{\\prime} B C D+A B^{\\prime} C^{\\prime} D^{\\prime}+A B^{\\prime} C D^{\\prime}+A B^{\\prime} C D+A B C^{\\prime} D+A B C D^{\\prime}+ \\\\<br/> &amp; A B C D<br/> \\end{aligned}<br/> $$<br/> I.e. $\\Sigma \\mathrm{m}(0,6,7,8,10,11,13,14,15)$ Option A</div><br><br><a href=\"https://gateoverflow.in/470841/go-classes-dpp-digital-logic-multiplexer-output-boolean-algebra-philadelphia-university#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-digital-logic-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/digital-logic\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Digital Logic - Combinational Circuit</a></b></div></div>"
        }
    ]
});

registerTest({
    "name": "DPP 19 - Digital Logic (Sequential Circuit - Part 1)",
    "testLabel": "DPP 19",
    "testType": "DPP",
    "bracket": "Sequential Circuit - Part 1",
    "subject": "dl",
    "series": "cse-dpp-2027",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 10,
    "topicsCovered": "Sequential Circuit (Practice Set 1)",
    "questions": [
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>A ring counter and a Johnson counter are both built using $4$ flip-flops. Assuming normal operation, how many states are produced by the ring counter and the Johnson counter respectively?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">Ring counter: $4$, Johnson counter: $8$<br/></span>",
                "<span style=\"display: inline;\">Ring counter: $8$, Johnson counter: $4$<br/></span>",
                "<span style=\"display: inline;\">Ring counter: $16$, Johnson counter: $8$<br/></span>",
                "<span style=\"display: inline;\">Ring counter: $4$, Johnson counter: $16$</span>"
            ],
            "answer": "A",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"538012\"></a><div itemprop=\"text\"><p>In a ring counter, one active bit circulates through the flip-flops.</p><p>For an $n$-bit ring counter, the number of states is:</p><p>$n$</p><p>So, for $4$ flip-flops:</p><p>Ring counter states $=4$</p><p>In a Johnson counter, the complemented output of the last flip-flop is fed back to the first flip-flop.</p><p>For an $n$-bit Johnson counter, the number of states is:</p><p>$2n$</p><p>So, for $4$ flip-flops:</p><p>Johnson counter states $=2 \\times 4=8$</p><p><br/><strong>Answer: A</strong></p></div><br><br><a href=\"https://gateoverflow.in/538011/go-classes-dpp-gate-cs-digital-logic-ring-counter-%26-johnson-counter#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-digital-logic-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/digital-logic\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Digital Logic - Sequential Circuit</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Which statement is correct for a synchronous counter?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">All flip-flops receive the same clock signal, and the next state is decided using combinational logic<br/></span>",
                "<span style=\"display: inline;\">Only the first flip-flop receives the clock, and the clock then ripples through other flip-flops<br/></span>",
                "<span style=\"display: inline;\">It cannot be used for binary counting<br/></span>",
                "<span style=\"display: inline;\">It does not have any flip-flop</span>"
            ],
            "answer": "A",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"538010\"></a><div itemprop=\"text\"><p>In a synchronous counter, all flip-flops are triggered by the same clock signal.</p><p>The inputs of the flip-flops are generated using combinational logic based on the present state.</p><p>So, all flip-flops update together at the clock edge.</p><p>This reduces the ripple delay problem found in asynchronous counters.</p><p><br/><strong>Answer: A</strong></p></div><br><br><a href=\"https://gateoverflow.in/538009/go-classes-dpp-gate-cs-digital-logic-synchronous-counter#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-digital-logic-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/digital-logic\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Digital Logic - Sequential Circuit</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>A $3$-bit counter is designed to count through the states $0,1,2,3,4,5$ and then return to $0$. What is the modulus of the counter, and how many states are unused?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">Modulo-$5$, $3$ unused states<br/></span>",
                "<span style=\"display: inline;\">Modulo-$6$, $2$ unused states<br/></span>",
                "<span style=\"display: inline;\">Modulo-$8$, $0$ unused states<br/></span>",
                "<span style=\"display: inline;\">Modulo-$7$, $1$ unused state</span>"
            ],
            "answer": "B",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"538008\"></a><div itemprop=\"text\"><p>The modulus of a counter is the number of states in its counting sequence.</p><p>Here the counter goes through:</p><p>$0,1,2,3,4,5$</p><p>So, total used states:</p><p>$6$</p><p>Therefore, it is a modulo-$6$ counter.</p><p>A $3$-bit counter can have:</p><p>$2^3=8$ states</p><p>Used states $=6$</p><p>Unused states $=8-6=2$</p><p><br/><strong>Answer: B</strong></p></div><br><br><a href=\"https://gateoverflow.in/538007/go-classes-dpp-gate-cs-digital-logic-modulo-counter#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-digital-logic-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/digital-logic\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Digital Logic - Sequential Circuit</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>A 3-bit ripple up counter starts from state $000$. What will be its state after $5$ clock pulses?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$011$<br/></span>",
                "<span style=\"display: inline;\">$100$<br/></span>",
                "<span style=\"display: inline;\">$101$<br/></span>",
                "<span style=\"display: inline;\">$110$</span>"
            ],
            "answer": "C",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"538006\"></a><div itemprop=\"text\"><p>A $3$-bit binary up counter counts in normal binary order.</p><p>Starting state:</p><p>$000$</p><p>After $1^\\text{st}$ clock pulse:</p><p>$001$</p><p>After $2^\\text{nd}$ clock pulse:</p><p>$010$</p><p>After $3^\\text{rd}$ clock pulse:</p><p>$011$</p><p>After $4^\\text{th}$ clock pulse:</p><p>$100$</p><p>After $5^\\text{th}$ clock pulse:</p><p>$101$</p><p>So, after $5$ clock pulses, the counter state is $101$.</p><p><br/><b>Answer: C</b></p></div><br><br><a href=\"https://gateoverflow.in/538005/go-classes-dpp-gate-cs-digital-logic-3-bit-ripple-up-counter#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-digital-logic-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/digital-logic\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Digital Logic - Sequential Circuit</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Which statement correctly describes an asynchronous or ripple counter?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">All flip-flops receive the same clock signal directly<br/></span>",
                "<span style=\"display: inline;\">The output of one flip-flop is used as the clock input for the next flip-flop<br/></span>",
                "<span style=\"display: inline;\">It does not use flip-flops<br/></span>",
                "<span style=\"display: inline;\">It always counts only one state</span>"
            ],
            "answer": "B",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"538004\"></a><div itemprop=\"text\"><p>In an asynchronous counter, all flip-flops do not receive the same clock directly.</p><p>The first flip-flop receives the external clock.</p><p>Then the output of one flip-flop triggers the next flip-flop.</p><p>Because the change ripples from one flip-flop to another, it is called a ripple counter.<br/> </p><p><strong>Answer: B</strong></p></div><br><br><a href=\"https://gateoverflow.in/538003/go-classes-dpp-gate-cs-digital-logic-ripple-counter#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-digital-logic-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/digital-logic\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Digital Logic - Sequential Circuit</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\">A clock signal of frequency $16$ kHz is applied to a chain of T flip-flops. Each T flip-flop divides the frequency by $2$. How many T flip-flops are required to obtain an output frequency of $2$ kHz?</div></span>",
            "image": "",
            "options": [],
            "answer": "3",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"537889\"></a><div itemprop=\"text\">Each T flip-flop divides the frequency by $2$.<br/> <br/> After $n$ T flip-flops, output frequency becomes:<br/> <br/> $f_{\\text{out}}=\\frac{f_{\\text{in}}}{2^n}$<br/> <br/> Given:<br/> <br/> $f_{\\text{in}}=16$ kHz<br/> <br/> $f_{\\text{out}}=2$ kHz<br/> <br/> <br/> <br/> $\\Rightarrow2=\\frac{16}{2^n}$<br/> <br/> $\\Rightarrow2^n=8$<br/> <br/> $\\Rightarrow 2^n=2^3$<br/> <br/> $\\boxed{\\therefore n=3}$</div><br><br><a href=\"https://gateoverflow.in/537888/go-classes-dpp-gate-cs-digital-logic-frequency-division-using-t-flip-flops#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-digital-logic-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/digital-logic\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Digital Logic - Sequential Circuit</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>How many states are present in a $5$-bit binary counter, and what is the maximum decimal count value?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$16$ states, maximum count $15$<br/></span>",
                "<span style=\"display: inline;\">$32$ states, maximum count $31$<br/></span>",
                "<span style=\"display: inline;\">$32$ states, maximum count $32$<br/></span>",
                "<span style=\"display: inline;\">$64$ states, maximum count $63$</span>"
            ],
            "answer": "B",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"537887\"></a><div itemprop=\"text\"><p>An $n$-bit binary counter has:</p><p>Number of states $=2^n$</p><p>Maximum count value $=2^n-1$</p><p>For a $5$-bit counter:</p><p>Number of states $=2^5=32$</p><p>Maximum count value $=2^5-1=31$</p><p>So, a $5$-bit binary counter counts from $0$ to $31$.</p><p><br/><strong>Answer: B</strong></p></div><br><br><a href=\"https://gateoverflow.in/537886/go-classes-dpp-gate-cs-digital-logic-binary-counter-states#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-digital-logic-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/digital-logic\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Digital Logic - Sequential Circuit</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>A $4$-bit right shift register initially contains $1011$. Serial input enters from the left side. The serial input values applied in two consecutive clock pulses are $0$ and $1$. What will be the final content of the register after two clock pulses?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$0101$<br/></span>",
                "<span style=\"display: inline;\">$1010$<br/></span>",
                "<span style=\"display: inline;\">$1101$<br/></span>",
                "<span style=\"display: inline;\">$0110$</span>"
            ],
            "answer": "B",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"537885\"></a><div itemprop=\"text\"><p>Initial content:</p><p>$1011$</p><p>In a right shift register, every bit shifts one position to the right and the serial input enters from the left.</p><p>First clock pulse, serial input $=0$:</p><p>$1011 \\rightarrow 0101$</p><p>Second clock pulse, serial input $=1$:</p><p>$0101 \\rightarrow 1010$</p><p>So, the final register content is:</p><p>$1010$</p><p><br/><strong>Answer: B</strong></p></div><br><br><a href=\"https://gateoverflow.in/537884/go-classes-dpp-gate-cs-digital-logic-shift-register-operation#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-digital-logic-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/digital-logic\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Digital Logic - Sequential Circuit</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>How many flip-flops are required to construct a $12$-bit register?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$6$<br/></span>",
                "<span style=\"display: inline;\">$8$<br/></span>",
                "<span style=\"display: inline;\">$12$<br/></span>",
                "<span style=\"display: inline;\">$24$</span>"
            ],
            "answer": "C",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"537883\"></a><div itemprop=\"text\"><p>One flip-flop stores one bit of information.</p><p>So, to store $n$ bits, we need $n$ flip-flops.</p><p>For a $12$-bit register:</p><p>Number of flip-flops required $=12$</p><p><br/><b>Answer: C</b></p></div><br><br><a href=\"https://gateoverflow.in/537882/go-classes-dpp-gate-cs-digital-logic-register#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-digital-logic-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/digital-logic\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Digital Logic - Sequential Circuit</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Which statement correctly defines a register?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">A register is a group of flip-flops used to store binary information<br/></span>",
                "<span style=\"display: inline;\">A register is a combinational circuit used only for arithmetic addition<br/></span>",
                "<span style=\"display: inline;\">A register is a single logic gate used to generate clock pulses<br/></span>",
                "<span style=\"display: inline;\">A register is a decoder used to select one output line</span>"
            ],
            "answer": "A",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"537881\"></a><div itemprop=\"text\"><p>A flip-flop can store one bit of information.</p><p>A register is formed by grouping multiple flip-flops together.</p><p>So, a register is used to store binary data.</p><p>For example, a $4$-bit register stores $4$ bits using $4$ flip-flops.</p><p><br/><b>Answer: A</b></p></div><br><br><a href=\"https://gateoverflow.in/537880/go-classes-dpp-gate-cs-digital-logic-register#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-digital-logic-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/digital-logic\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Digital Logic - Sequential Circuit</a></b></div></div>"
        }
    ]
});

registerTest({
    "name": "DPP 20 - Digital Logic (Sequential Circuit - Part 2)",
    "testLabel": "DPP 20",
    "testType": "DPP",
    "bracket": "Sequential Circuit - Part 2",
    "subject": "dl",
    "series": "cse-dpp-2027",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 10,
    "topicsCovered": "Sequential Circuit (Practice Set 2)",
    "questions": [
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>How does a master-slave JK flip-flop help in avoiding race around condition?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">It removes the clock input completely<br/></span>",
                "<span style=\"display: inline;\">It uses two latches controlled in opposite clock phases so that output changes only once per clock cycle<br/></span>",
                "<span style=\"display: inline;\">It makes $\\mathrm{J}$ and $\\mathrm{K}$ always equal to $0$<br/></span>",
                "<span style=\"display: inline;\">It converts the JK flip-flop into a decoder</span>"
            ],
            "answer": "B",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"537101\"></a><div itemprop=\"text\"><p>Race around happens because the output can toggle repeatedly during the active clock level.</p><p>A master-slave flip-flop uses two stages:</p><p>Master stage</p><p>Slave stage</p><p>The master responds during one clock phase, and the slave responds during the opposite clock phase.</p><p>Because of this, the final output changes only once in one clock cycle.</p><p>So, repeated toggling during the same clock pulse is avoided.</p><p><br/><strong>Answer: B</strong></p></div><br><br><a href=\"https://gateoverflow.in/537100/go-classes-dpp-gate-cs-digital-logic-master-slave-flip-flop#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-digital-logic-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/digital-logic\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Digital Logic - Sequential Circuit</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>In a level-triggered JK flip-flop, race around condition occurs when:</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\mathrm{J}=0,\\mathrm{K}=0$ and clock pulse width is very small<br/></span>",
                "<span style=\"display: inline;\">$\\mathrm{J}=1,\\mathrm{K}=1$ and clock pulse width is greater than propagation delay<br/></span>",
                "<span style=\"display: inline;\">$\\mathrm{J}=1,\\mathrm{K}=0$ and the output is set<br/></span>",
                "<span style=\"display: inline;\">$\\mathrm{J}=0,\\mathrm{K}=1$ and the output is reset</span>"
            ],
            "answer": "B",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"537099\"></a><div itemprop=\"text\"><p>For a JK flip-flop:</p><p>$\\mathrm{J}=1,\\mathrm{K}=1$ causes toggle.</p><p>If the flip-flop is level-triggered and the clock pulse remains active for a long time, the output may toggle more than once during the same clock pulse.</p><p>This happens when clock pulse width is greater than the propagation delay.</p><p>As a result, final output becomes uncertain.</p><p>This problem is called race around condition.</p><p><br/><strong>Answer: B</strong></p></div><br><br><a href=\"https://gateoverflow.in/537098/go-classes-dpp-gate-cs-digital-logic-race-around-condition#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-digital-logic-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/digital-logic\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Digital Logic - Sequential Circuit</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Which statement correctly describes the difference between a level-sensitive D latch and an edge-triggered D flip-flop?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">A level-sensitive latch responds throughout the active clock level, while an edge-triggered flip-flop responds only at the clock edge<br/></span>",
                "<span style=\"display: inline;\">A level-sensitive latch responds only at the falling edge, while an edge-triggered flip-flop responds throughout the clock level<br/></span>",
                "<span style=\"display: inline;\">Both respond continuously whenever clock is low<br/></span>",
                "<span style=\"display: inline;\">Both ignore the clock signal</span>"
            ],
            "answer": "A",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"537096\"></a><div itemprop=\"text\"><p>A level-sensitive latch is transparent during the active level of the clock.</p><p>For example, if a D latch is active when clock is $1$, then output can follow D while clock remains $1$.</p><p>An edge-triggered flip-flop updates only at a clock edge, such as rising edge or falling edge.</p><p>So, the main difference is:</p><p>Latch responds during the clock level.</p><p>Flip-flop responds only at the clock edge.</p><p><br/><strong>Answer: A</strong></p></div><br><br><a href=\"https://gateoverflow.in/537095/go-classes-dpp-gate-cs-digital-logic-level-sensitive-vs-edge-triggered-storage#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-digital-logic-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/digital-logic\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Digital Logic - Sequential Circuit</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>A flip-flop has active-low direct inputs $\\mathrm{Preset}_n$ and $\\mathrm{Clear}_n$. What will be the output when $\\mathrm{Preset}_n=1$ and $\\mathrm{Clear}_n=0$?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\mathrm{Q}=1$<br/></span>",
                "<span style=\"display: inline;\">$\\mathrm{Q}=0$<br/></span>",
                "<span style=\"display: inline;\">Output toggles<br/></span>",
                "<span style=\"display: inline;\">Output depends only on clock</span>"
            ],
            "answer": "B",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"537094\"></a><div itemprop=\"text\"><p>The inputs are active-low.</p><p>So, $\\mathrm{Clear}_n=0$ means clear is active.</p><p>When clear is active, the flip-flop output is forced to 0.</p><p>Here:</p><p>$\\mathrm{Preset}_n=1$ means preset is inactive.</p><p>$\\mathrm{Clear}_n=0$ means clear is active.<br/> </p><p>$\\therefore \\mathrm{Q}=0$<br/> </p><p><strong>Answer: B</strong></p></div><br><br><a href=\"https://gateoverflow.in/537093/go-classes-dpp-gate-cs-digital-logic-active-low-preset-%26-clear#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-digital-logic-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/digital-logic\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Digital Logic - Sequential Circuit</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Which statement correctly describes preset and clear inputs in a flip-flop?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">Preset forces the flip-flop to $0$, and clear forces the flip-flop to $1$<br/></span>",
                "<span style=\"display: inline;\">Preset forces the flip-flop to $1$, and clear forces the flip-flop to $0$<br/></span>",
                "<span style=\"display: inline;\">Preset and clear work only when clock is high<br/></span>",
                "<span style=\"display: inline;\">Preset and clear are the same as normal data inputs</span>"
            ],
            "answer": "B",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"537092\"></a><div itemprop=\"text\"><p>Preset and clear are special direct inputs.</p><p>Preset is also called direct set. It forces the flip-flop output to $1$.</p><p>Clear is also called direct reset. It forces the flip-flop output to $0$.</p><p>These inputs are useful when we want to bring a flip-flop to a known starting state.</p><p><br/><strong>Answer: B</strong></p></div><br><br><a href=\"https://gateoverflow.in/537091/go-classes-dpp-gate-cs-digital-logic-present-%26-clear-inputs#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-digital-logic-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/digital-logic\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Digital Logic - Sequential Circuit</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>A T flip-flop is to be converted into a D flip-flop. Which input equation should be applied to the T input?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$T=D\\oplus Q_n$<br/></span>",
                "<span style=\"display: inline;\">$T=D$<br/></span>",
                "<span style=\"display: inline;\">$T=DQ_n$<br/></span>",
                "<span style=\"display: inline;\">$T=D+Q_n$</span>"
            ],
            "answer": "A",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"536881\"></a><div itemprop=\"text\"><p><span style=\"color:#ffffff;\"><span style=\"background-color:#d35400;\">HERE IS THE SIMPLE AND DETAILS EXPLANATION</span></span> </p><p><img alt=\"\" height=\"1305\" src=\"https://gateoverflow.in/?qa=blob&amp;qa_blobid=1349453090554920052\" width=\"1200\"/></p></div><br><br><a href=\"https://gateoverflow.in/536858/go-classes-dpp-gate-cs-digital-logic-t-flip-flop-to-d-flip-flop#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-digital-logic-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/digital-logic\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Digital Logic - Sequential Circuit</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>An SR flip-flop is to be converted into a T flip-flop. Which pair of input equations correctly makes the SR flip-flop behave like a T flip-flop?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$S=TQ_n',\\ R=TQ_n$<br/></span>",
                "<span style=\"display: inline;\">$S=TQ_n,\\ R=TQ_n'$<br/></span>",
                "<span style=\"display: inline;\">$S=T,\\ R=T$<br/></span>",
                "<span style=\"display: inline;\">$S=T',\\ R=T$</span>"
            ],
            "answer": "A",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"536882\"></a><div itemprop=\"text\"><p><span style=\"color:#ffffff;\"><span style=\"background-color:#d35400;\">HERE IS THE SIMPLE AND DETAILS EXPLANATION <img alt=\"\" height=\"1552\" src=\"https://gateoverflow.in/?qa=blob&amp;qa_blobid=1052939781233960453\" width=\"1112\"/></span></span></p></div><br><br><a href=\"https://gateoverflow.in/536857/go-classes-dpp-gate-cs-digital-logic-sr-flip-flop-to-t-flip-flop#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-digital-logic-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/digital-logic\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Digital Logic - Sequential Circuit</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>A D flip-flop is to be converted into a JK flip-flop. Which expression should be connected to the D input?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$D=JQ_n'+K'Q_n$<br/></span>",
                "<span style=\"display: inline;\">$D=JQ_n+KQ_n'$<br/></span>",
                "<span style=\"display: inline;\">$D=J+K+Q_n$<br/></span>",
                "<span style=\"display: inline;\">$D=JKQ_n$</span>"
            ],
            "answer": "A",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"536873\"></a><div itemprop=\"text\"><p>For a D flip-flop:</p><p>$Q_{n+1}=D$</p><p>So, to make it behave like a JK flip-flop, the D input must be equal to the next-state equation of the JK flip-flop.</p><p>The characteristic equation of a JK flip-flop is:</p><p>$Q_{n+1}=JQ_n'+K'Q_n$</p><p>Therefore, connect:</p><p>$D=JQ_n'+K'Q_n$</p><p><br/><strong>Answer: A</strong></p></div><br><br><a href=\"https://gateoverflow.in/536856/go-classes-dpp-gate-cs-digital-logic-d-flip-flop-to-jk-flip-flop#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-digital-logic-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/digital-logic\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Digital Logic - Sequential Circuit</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>A D flip-flop is to be converted into a T flip-flop. Which input equation should be applied to the D input?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$D=T\\oplus Q_n$<br/></span>",
                "<span style=\"display: inline;\">$D=TQ_n$<br/></span>",
                "<span style=\"display: inline;\">$D=T+Q_n$<br/></span>",
                "<span style=\"display: inline;\">$D=T'Q_n$</span>"
            ],
            "answer": "A",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"536877\"></a><div itemprop=\"text\"><p style=\"text-align:center\"><img alt=\"\" height=\"349\" src=\"https://cdn.mathpix.com/snip/images/2teKmaAU2YFFZXZJs-L_-aEujRIih0yzfYekXZCz_ww.original.fullsize.png\" width=\"577\"/></p><p>For a D flip-flop:</p><p>$Q_{n+1}=D$</p><p>For a T flip-flop:</p><p>When $T=0$, output holds.</p><p>When $T=1$, output toggles.</p><p>So the next state of a T flip-flop is:</p><p>$Q_{n+1}=T\\oplus Q_n$</p><p>Since a D flip-flop directly stores the value applied at D, we must apply:</p><p>$D=T\\oplus Q_n$</p><p><br/><strong>Answer: A</strong></p></div><br><br><a href=\"https://gateoverflow.in/536855/go-classes-dpp-gate-cs-digital-logic-d-flip-flop-to-t-flip-flop#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-digital-logic-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/digital-logic\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Digital Logic - Sequential Circuit</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>A JK flip-flop is to be converted into a T flip-flop. What should be the input connections for J and K?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$J=T,\\ K=T$<br/></span>",
                "<span style=\"display: inline;\">$J=T,\\ K=T'$<br/></span>",
                "<span style=\"display: inline;\">$J=T',\\ K=T$<br/></span>",
                "<span style=\"display: inline;\">$J=0,\\ K=T$</span>"
            ],
            "answer": "A",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"536872\"></a><div itemprop=\"text\"><p>For a T flip-flop:</p><p>When $T=0$, the output should hold.</p><p>When $T=1$, the output should toggle.</p><p>For a JK flip-flop:</p><p>$J=0,K=0$ gives hold.</p><p>$J=1,K=1$ gives toggle.</p><p>So to make a JK flip-flop behave like a T flip-flop, both J and K should receive T.</p><p>Therefore:</p><p>$J=T$</p><p>$K=T$</p><p><br/><strong>Answer: A</strong></p></div><br><br><a href=\"https://gateoverflow.in/536854/go-classes-dpp-gate-cs-digital-logic-jk-flip-flop-to-t-flip-flop#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-digital-logic-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/digital-logic\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Digital Logic - Sequential Circuit</a></b></div></div>"
        }
    ]
});

registerTest({
    "name": "DPP 21 - Digital Logic (Sequential Circuit - Part 3)",
    "testLabel": "DPP 21",
    "testType": "DPP",
    "bracket": "Sequential Circuit - Part 3",
    "subject": "dl",
    "series": "cse-dpp-2027",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 10,
    "topicsCovered": "Sequential Circuit (Practice Set 3)",
    "questions": [
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>A positive-edge triggered T flip-flop has initial output $Q=1$. The value of $T$ at five consecutive positive clock edges is:</p><p>$$1,0,1,1,0$$</p><p>What will be the output sequence after these five clock edges?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$0,0,1,0,0$<br/></span>",
                "<span style=\"display: inline;\">$1,0,1,0,1$<br/></span>",
                "<span style=\"display: inline;\">$0,1,0,1,0$<br/></span>",
                "<span style=\"display: inline;\">$1,1,0,0,1$</span>"
            ],
            "answer": "A",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"536717\"></a><div itemprop=\"text\"><p>For a T flip-flop:</p><p>If $T=0$, the output holds its previous value.</p><p>If $T=1$, the output toggles.</p><p>Initial value:</p><p>$Q=1$</p><p>Edge $1: T=1$, so $Q$ toggles from $1$ to $0$</p><p>Edge $2: T=0$, so $Q$ remains $0$</p><p>Edge $3: T=1$, so $Q$ toggles from $0$ to $1$</p><p>Edge $4: T=1$, so $Q$ toggles from $1$ to $0$</p><p>Edge $5: T=0$, so $Q$ remains $0$<br/> </p><p style=\"text-align:center\"><img alt=\"\" height=\"319\" src=\"https://cdn.mathpix.com/snip/images/6mJw4Fq1o9TlITmPWD4P0dyre4AzhRPzhPuQ756a4mU.original.fullsize.png\" width=\"589\"/></p><p><br/><strong>Answer: A</strong></p></div><br><br><a href=\"https://gateoverflow.in/536716/go-classes-dpp-gate-cs-digital-logic-t-flip-flop#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-digital-logic-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/digital-logic\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Digital Logic - Sequential Circuit</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>For a JK flip-flop, what should be the values of $J$ and $K$ to change the state from $Q_n=0$ to $Q_{n+1}=1$?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$J=0,K=X$<br/></span>",
                "<span style=\"display: inline;\">$J=1,K=X$<br/></span>",
                "<span style=\"display: inline;\">$J=X,K=1$<br/></span>",
                "<span style=\"display: inline;\">$J=X,K=0$</span>"
            ],
            "answer": "B",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"536715\"></a><div itemprop=\"text\"><p>We need transition:</p><p>$Q_n=0$ to $Q_{n+1}=1$</p><p>For a JK flip-flop, when present state is $0$, the next state becomes $1$ if $J=1$.</p><p>The value of $K$ does not matter because $K$ affects reset when the present state is $1$.</p><p>So,</p><p>$J=1,K=X$</p><p><br/><b>Answer: B</b></p></div><br><br><a href=\"https://gateoverflow.in/536714/go-classes-dpp-gate-cs-digital-logic-jk-flip-flop-excitation#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-digital-logic-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/digital-logic\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Digital Logic - Sequential Circuit</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Which expression correctly represents the characteristic equation of a JK flip-flop?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$Q_{n+1}=JQ_n'+K'Q_n$<br/></span>",
                "<span style=\"display: inline;\">$Q_{n+1}=JQ_n+KQ_n'$<br/></span>",
                "<span style=\"display: inline;\">$Q_{n+1}=J+K+Q_n$<br/></span>",
                "<span style=\"display: inline;\">$Q_{n+1}=JKQ_n$</span>"
            ],
            "answer": "A",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"536713\"></a><div itemprop=\"text\"><p>For a JK flip-flop:</p><p>$J=0,K=0$ means hold.</p><p>$J=0,K=1$ means reset.</p><p>$J=1,K=0$ means set.</p><p>$J=1,K=1$ means toggle.</p><p>The characteristic equation that satisfies this behavior is:</p><p>$Q_{n+1}=JQ_n'+K'Q_n$</p><p><br/><strong>Answer: A</strong></p></div><br><br><a href=\"https://gateoverflow.in/536712/go-classes-dpp-gate-cs-digital-logic-jk-flip-flop#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-digital-logic-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/digital-logic\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Digital Logic - Sequential Circuit</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>A positive-edge triggered D flip-flop has initial output $Q=0$. The value of $D$ at three consecutive positive clock edges is $1,0,1$. What will be the output sequence after these three positive clock edges?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$1,0,1$<br/></span>",
                "<span style=\"display: inline;\">$0,1,0$<br/></span>",
                "<span style=\"display: inline;\">$1,1,1$<br/></span>",
                "<span style=\"display: inline;\">$0,0,0$</span>"
            ],
            "answer": "A",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"536711\"></a><div itemprop=\"text\"><p style=\"text-align:center\"><img alt=\"\" height=\"327\" src=\"https://cdn.mathpix.com/snip/images/m6ysui7keJM39xx5zDn0dUDpbMRGvVefiwRrwGm9iHI.original.fullsize.png\" width=\"567\"/></p><p><br/>A positive-edge triggered D flip-flop updates only when the clock changes from $0$ to $1$.</p><p>For a D flip-flop:</p><p>$Q_{n+1}=D$</p><p>At edge $1:$</p><p>$D=1$, so $Q=1$</p><p>At edge $2:$</p><p>$D=0$, so $Q=0$</p><p>At edge $3:$</p><p>$D=1$, so $Q=1$</p><p><br/><strong>Answer: A</strong></p></div><br><br><a href=\"https://gateoverflow.in/536706/go-classes-dpp-gate-cs-digital-logic-positive-edge-triggering#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-digital-logic-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/digital-logic\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Digital Logic - Sequential Circuit</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>A positive-edge triggered D flip-flop has feedback connection $D=Q_n'$. If the initial value is $Q_0=0$, what will be the output sequence after four positive clock edges?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$1,0,1,0$<br/></span>",
                "<span style=\"display: inline;\">$0,1,0,1$<br/></span>",
                "<span style=\"display: inline;\">$1,1,0,0$<br/></span>",
                "<span style=\"display: inline;\">$0,0,1,1$</span>"
            ],
            "answer": "A",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"536704\"></a><div itemprop=\"text\"><p style=\"text-align:center\"><img alt=\"\" height=\"260\" src=\"https://cdn.mathpix.com/snip/images/PypVJb-3gkXcwc9XsDvFXn_CAQ0qdEw60n29F_4MGzw.original.fullsize.png\" width=\"469\"/></p><p><br/>For a D flip-flop:</p><p>$Q_{n+1}=D$</p><p>Given:</p><p>$D=Q_n'$</p><p>So,</p><p>$Q_{n+1}=Q_n'$</p><p>This means the output toggles at every positive clock edge.</p><p>Initial state:</p><p>$Q_0=0$</p><p>After edge 1:</p><p>$Q=1$</p><p>After edge 2:</p><p>$Q=0$</p><p>After edge 3:</p><p>$Q=1$</p><p>After edge 4:</p><p>$Q=0$</p><p><br/><strong>Answer: A</strong></p></div><br><br><a href=\"https://gateoverflow.in/536676/go-classes-dpp-gate-cs-digital-logic-d-flip-flop-with-feedback#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-digital-logic-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/digital-logic\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Digital Logic - Sequential Circuit</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>For an active-high SR flip-flop, which expression correctly represents the next state?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$Q_{n+1}=S+R'Q_n$<br/></span>",
                "<span style=\"display: inline;\">$Q_{n+1}=R+SQ_n$<br/></span>",
                "<span style=\"display: inline;\">$Q_{n+1}=S'R+Q_n$<br/></span>",
                "<span style=\"display: inline;\">$Q_{n+1}=SR+Q_n$</span>"
            ],
            "answer": "A",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"536563\"></a><div itemprop=\"text\"><p>For an SR flip-flop:</p><p>If $S=1$ and $R=0$, the next state becomes $1$.</p><p>If $S=0$ and $R=1$, the next state becomes $0$.</p><p>If $S=0$ and $R=0$, the flip-flop holds the previous state $Q_n$.</p><p>The characteristic equation is:</p><p>$Q_{n+1}=S+R'Q_n$</p><p>This equation is valid when the invalid condition $S=1,R=1$ is avoided.<br/> </p><p><strong>Answer: A</strong></p></div><br><br><a href=\"https://gateoverflow.in/536562/go-classes-dpp-gate-cs-digital-logic-sr-flip-flop#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-digital-logic-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/digital-logic\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Digital Logic - Sequential Circuit</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>For a gated SR latch with active-high clock, which condition is invalid when clock $=1$?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$S=0,R=0$<br/></span>",
                "<span style=\"display: inline;\">$S=1,R=0$<br/></span>",
                "<span style=\"display: inline;\">$S=0,R=1$<br/></span>",
                "<span style=\"display: inline;\">$S=1,R=1$</span>"
            ],
            "answer": "D",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"536561\"></a><div itemprop=\"text\"><p>When clock $=1$, a gated SR latch behaves like a normal SR latch.</p><p>For an active-high SR latch:</p><p>$S=1,R=0$ means set.</p><p>$S=0,R=1$ means reset.</p><p>$S=0,R=0$ means hold.</p><p>$S=1,R=1$ tries to set and reset the latch at the same time.</p><p>So, $S=1,R=1$ is invalid.</p><p style=\"text-align:center\"><img alt=\"\" height=\"188\" src=\"https://cdn.mathpix.com/snip/images/p4_QYsq5-jtWX6JkjmC9jB9xYhO9VaJ9-w3_uguYVk8.original.fullsize.png\" width=\"598\"/></p><p style=\"text-align:center\"><img alt=\"\" height=\"234\" src=\"https://cdn.mathpix.com/snip/images/8oWmf_AShJTGeOByHxHBVJwczDakHsK776-sJ-ap3mU.original.fullsize.png\" width=\"355\"/></p><p><br/><strong>Answer: D</strong></p></div><br><br><a href=\"https://gateoverflow.in/536560/go-classes-dpp-gate-cs-digital-logic-gated-sr-latch#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-digital-logic-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/digital-logic\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Digital Logic - Sequential Circuit</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>In a gated SR latch, the clock input is $0$. If $S=1$ and $R=0$, what will happen to the latch output?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">It will be set to $1$<br/></span>",
                "<span style=\"display: inline;\">It will be reset to $0$<br/></span>",
                "<span style=\"display: inline;\">It will hold the previous state<br/></span>",
                "<span style=\"display: inline;\">It will enter invalid state</span>"
            ],
            "answer": "C",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"536559\"></a><div itemprop=\"text\"><p>In a gated SR latch, the inputs $S$ and $R$ affect the latch only when the clock is active.</p><p>When clock $=0$, the latch does not respond to $S$ and $R$.</p><p>So even if $S=1$ and $R=0$, the output will not change.</p><p>The latch will hold its previous state.<br/> </p><p><strong>Answer: C</strong></p></div><br><br><a href=\"https://gateoverflow.in/536558/go-classes-dpp-gate-cs-digital-logic-gated-sr-latch#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-digital-logic-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/digital-logic\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Digital Logic - Sequential Circuit</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>A clock signal has time period $T=20$ ns. The signal remains high for $8$ ns in every cycle. What are the frequency and duty cycle of the clock?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$25$ MHz, $40$%<br/></span>",
                "<span style=\"display: inline;\">$50$ MHz, $40$%<br/></span>",
                "<span style=\"display: inline;\">$50$ MHz, $60$%<br/></span>",
                "<span style=\"display: inline;\">$100$ MHz, $40$%</span>"
            ],
            "answer": "B",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"536556\"></a><div itemprop=\"text\"><p>Frequency is reciprocal of time period.</p><p>$f=1/T$</p><p>Given:</p><p>$T=20$ ns</p><p>So,</p><p>$f=1/(20 \\times 10^{-9})$</p><p>$f=50 \\times 10^6$ Hz</p><p>Therefore,</p><p>$f=50$ MHz</p><p>Now duty cycle is:</p><p>Duty cycle $=$ high time / total time period $\\times 100$</p><p>Duty cycle $=8/20 \\times 100$</p><p>Duty cycle $=40\\%$<br/> </p><p><strong>Answer: B</strong></p></div><br><br><a href=\"https://gateoverflow.in/536555/go-classes-dpp-gate-cs-digital-logic-clock-signal#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-digital-logic-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/digital-logic\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Digital Logic - Sequential Circuit</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>In basic sequential circuits, a flip-flop can be understood as:</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">A combinational circuit without memory<br/></span>",
                "<span style=\"display: inline;\">A latch controlled by a clock signal<br/></span>",
                "<span style=\"display: inline;\">A decoder controlled by a multiplexer<br/></span>",
                "<span style=\"display: inline;\">A latch whose output never changes</span>"
            ],
            "answer": "B",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"536554\"></a><div itemprop=\"text\"><p>A latch is a basic memory element.</p><p>When a latch is controlled using a clock signal, it becomes a clocked storage element.</p><p>In this context, a flip-flop can be understood as a clocked latch.</p><p>So, the correct option is <strong>B.</strong></p></div><br><br><a href=\"https://gateoverflow.in/536553/go-classes-dpp-gate-cs-digital-logic-latch-vs-flip-flop#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-digital-logic-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/digital-logic\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Digital Logic - Sequential Circuit</a></b></div></div>"
        }
    ]
});

registerTest({
    "name": "DPP 22 - Digital Logic (Sequential Circuit - Part 4)",
    "testLabel": "DPP 22",
    "testType": "DPP",
    "bracket": "Sequential Circuit - Part 4",
    "subject": "dl",
    "series": "cse-dpp-2027",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 10,
    "topicsCovered": "Sequential Circuit (Practice Set 4)",
    "questions": [
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>For an SR latch using NAND gates, the inputs are active-low. Which option correctly describes the latch behavior?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$S=0,R=1$ sets the latch, $S=1,R=0$ resets the latch, $S=1,R=1$ holds the previous state, and $S=0,R=0$ is invalid<br/></span>",
                "<span style=\"display: inline;\">$S=1,R=0$ sets the latch, $S=0,R=1$ resets the latch, $S=0,R=0$ holds the previous state, and $S=1,R=1$ is invalid<br/></span>",
                "<span style=\"display: inline;\">$S=0,R=0$ always holds the previous state<br/></span>",
                "<span style=\"display: inline;\">$S=1,R=1$ is invalid because NAND gates cannot store data</span>"
            ],
            "answer": "A",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"536431\"></a><div itemprop=\"text\"><p style=\"text-align:center\"><img alt=\"\" height=\"293\" src=\"https://cdn.mathpix.com/snip/images/IPl7ZRi8i7x72ixhKtRlud9ZFU6v1Th8JpSTSqfypPs.original.fullsize.png\" width=\"645\"/></p><p>In a NAND-based SR latch, the inputs are active-low.</p><p>So, $S=0$ activates set.</p><p>$R=0$ activates reset.</p><p>When $S=0,R=1$, the latch is set.</p><p>When $S=1,R=0$, the latch is reset.</p><p>When $S=1,R=1$, both inputs are inactive, so the latch holds the previous state.</p><p>When $S=0,R=0$, both set and reset are active at the same time, so the condition is invalid.</p><p><strong>Answer: A</strong></p></div><br><br><a href=\"https://gateoverflow.in/536430/go-classes-dpp-gate-cs-digital-logic-nand-based-sr-latch#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-digital-logic-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/digital-logic\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Digital Logic - Sequential Circuit</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>In a NOR-based SR latch, why is the input condition $S=1,R=1$ considered invalid?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">Because both outputs become $1$<br/></span>",
                "<span style=\"display: inline;\">Because both outputs become $0$, so $Q$ and $Q'$ are not complements<br/></span>",
                "<span style=\"display: inline;\">Because the latch holds the previous state<br/></span>",
                "<span style=\"display: inline;\">Because the latch behaves like a decoder</span>"
            ],
            "answer": "B",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"536429\"></a><div itemprop=\"text\"><p>For a NOR-based SR latch, $S=1$ tries to set the latch and $R=1$ tries to reset the latch at the same time.</p><p>This forces both outputs to become $0$.</p><p>But in a latch, $Q$ and $Q'$ should be complements of each other.</p><p>If both are $0$, then $Q'$ is not the complement of $Q$.</p><p>So, $S=1,R=1$ is invalid.</p><p><strong>Answer: B</strong></p></div><br><br><a href=\"https://gateoverflow.in/536428/go-classes-dpp-gate-cs-digital-logic-nor-based-sr-latch#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-digital-logic-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/digital-logic\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Digital Logic - Sequential Circuit</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>For an active-high SR latch using NOR gates, which option correctly describes the latch behavior?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$S=1,R=0$ sets the latch, $S=0,R=1$ resets the latch, $S=0,R=0$ holds the previous state, and $S=1,R=1$ is invalid<br/></span>",
                "<span style=\"display: inline;\">$S=0,R=1$ sets the latch, $S=1,R=0$ resets the latch, $S=1,R=1$ holds the previous state, and $S=0,R=0$ is invalid<br/></span>",
                "<span style=\"display: inline;\">$S=0,R=0$ always resets the latch, and $S=1,R=1$ always sets the latch<br/></span>",
                "<span style=\"display: inline;\">All input combinations are valid for an SR latch</span>"
            ],
            "answer": "A",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"536427\"></a><div itemprop=\"text\"><p style=\"text-align:center\"><img alt=\"\" height=\"289\" src=\"https://gateoverflow.in/?qa=blob&amp;qa_blobid=766289254157368946\" width=\"573\"/></p><p>In a NOR-based SR latch, inputs are active-high.</p><p>When $S=1$ and $R=0$, the latch is set, so $Q=1$.</p><p>When $S=0$ and $R=1$, the latch is reset, so $Q=0$.</p><p>When $S=0$ and $R=0$, the latch holds the previous state.</p><p>When $S=1$ and $R=1$, both outputs become $0$, so $Q$ and $Q'$ are not complements. This condition is invalid.</p><p><strong>Answer: A.</strong></p></div><br><br><a href=\"https://gateoverflow.in/536426/go-classes-dpp-gate-cs-digital-logic-nor-based-sr-latch#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-digital-logic-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/digital-logic\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Digital Logic - Sequential Circuit</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Which statement correctly differentiates a combinational circuit from a sequential circuit?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">A combinational circuit depends only on current inputs, while a sequential circuit depends on current inputs and previous state<br/></span>",
                "<span style=\"display: inline;\">A combinational circuit always has memory, while a sequential circuit never has memory<br/></span>",
                "<span style=\"display: inline;\">A combinational circuit uses clock only, while a sequential circuit uses only logic gates<br/></span>",
                "<span style=\"display: inline;\">A combinational circuit depends on previous outputs, while a sequential circuit depends only on current inputs</span>"
            ],
            "answer": "A",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"536423\"></a><div itemprop=\"text\"><p style=\"text-align:center\"><img alt=\"\" height=\"297\" src=\"https://cdn.mathpix.com/snip/images/OmPgxvvm1IQ61yUM8IvEFMhORsP7wnbJHxTVKkext0E.original.fullsize.png\" width=\"647\"/></p><p><br/>In a combinational circuit, the output depends only on the present input values.</p><p>In a sequential circuit, the output can depend on present inputs as well as previous state or past inputs.</p><p>So, sequential circuits require memory or feedback.</p><p><strong>Answer: A</strong></p></div><br><br><a href=\"https://gateoverflow.in/536422/go-classes-dpp-gate-cs-digital-logic-combinational-vs-sequential-circuits#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-digital-logic-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/digital-logic\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Digital Logic - Sequential Circuit</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>A $3$-bit synchronous counter uses three $T$ flip-flops $\\left(T_2, T_1, T_0\\right)$ where $Q_2$ is the MSB. The excitation equations are:</p><p>$$<br/>\\begin{aligned}<br/>&amp; T_0=1 \\\\\\\\<br/>&amp; T_1=Q_0 \\\\\\\\<br/>&amp; T_2=Q_1 Q_0<br/>\\end{aligned}<br/>$$</p><p><br/>If the counter is initialized to $\\left(Q_2 Q_1 Q_0\\right)=(011)$, what will be the state after $\\mathbf{3}$ <strong>clock pulses</strong>?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$(110)$<br/></span>",
                "<span style=\"display: inline;\">$(010)$<br/></span>",
                "<span style=\"display: inline;\">$(111)$<br/></span>",
                "<span style=\"display: inline;\">$(001)$</span>"
            ],
            "answer": "A",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"523586\"></a><div itemprop=\"text\"><p>This is a standard $3$-bit binary up-counter. Let's trace the states:<br/><br/><strong>Initial State:</strong> $(011)_2=3_{10}$<br/><br/><strong>After 1st Pulse:</strong> $3+1=4_{10} \\Longrightarrow(100)_2$<br/><br/><strong>After 2nd Pulse: </strong>$4+1=5_{10} \\Longrightarrow(101)_2$<br/><br/><strong>After 3rd Pulse: </strong>$5+1=6_{10} \\Longrightarrow(110)_2$</p></div><br><br><a href=\"https://gateoverflow.in/523585/go-classes-dpp-digital-logic-counter#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-digital-logic-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/digital-logic\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Digital Logic - Sequential Circuit</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>A Mealy Machine is designed to detect the overlapping sequence $\\mathbf{1010}$. For every detected sequence, the output $Z$ becomes $1$. If the input string is $\\mathbf{10101010}$, how many times will the output $Z$ be $1$?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$2$<br/></span>",
                "<span style=\"display: inline;\">$3$<br/></span>",
                "<span style=\"display: inline;\">$4$<br/></span>",
                "<span style=\"display: inline;\">$5$</span>"
            ],
            "answer": "B",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"523440\"></a><div itemprop=\"text\"><p>Pattern to detect$: \\mathbf{1~0~1~0}$ (Overlapping).<br/><br/>Input string$: \\mathbf{1~0~1~0~1~0~1~0}$</p><ul><li>Step $1: 1 \\ldots 0 \\ldots 1 \\ldots 0$ $($Match $1$ at index $4)$<br/> </li><li>Step $2: ($Look at the last '$ 10 $' of the previous match) $... 1 ... 0 ~($Match $2$ at index $6)$<br/> </li><li>Step $3: ($Look at the last '$ 10 $' of the previous match) $... 1 ... 0 ~($Match $3$ at index $8<br/> )$</li></ul><p><strong>Matches found:</strong></p><ol><li>$\\mathbf{1010}1010$<br/> </li><li>$10\\mathbf{1010}10$<br/> </li><li>$1010\\mathbf{1010}$<br/> </li></ol><p>Total detections $=\\mathbf{3}$.<br/><br/><strong>CORRECT OPTION: B</strong></p></div><br><br><a href=\"https://gateoverflow.in/523439/go-classes-dpp-digital-logic-machine#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-digital-logic-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/digital-logic\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Digital Logic - Sequential Circuit</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider a $3$-bit synchronous counter using $T$ flip-flops $\\left(T_2 T_1 T_0\\right)$. The flip-flop inputs are defined by the following excitation equations:</p><p>If the counter starts at the state $\\left(Q_2 Q_1 Q_0\\right)=000$, what will be the state after $\\mathbf{3 7}$ <strong>clock pulses?</strong></p><p><strong>Given Details:</strong></p><ul><li>$T_0=1$</li><li>$T_1=Q_0$</li><li>$T_2=Q_1 \\cdot Q_0$</li></ul></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$101$</span>",
                "<span style=\"display: inline;\">$110$</span>",
                "<span style=\"display: inline;\">$001$</span>",
                "<span style=\"display: inline;\">$111$</span>"
            ],
            "answer": "A",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"523433\"></a><div itemprop=\"text\"><p>This is a standard $3$-bit binary up-counter $\\text{(MOD-8)}$.</p><ul><li>$T_0=1: Q_0$ toggles every clock pulse.<br/> </li><li>$T_1=Q_0: Q_1$ toggles when $Q_0$ is $1 .$<br/> </li><li>$T_2=Q_1 Q_0: Q_2$ toggles when both $Q_1$ and $Q_0$ are $1 .$</li></ul><p>The sequence is: $000 \\rightarrow 001 \\rightarrow 010 \\rightarrow 011 \\rightarrow 100 \\rightarrow 101 \\rightarrow 110 \\rightarrow 111 \\rightarrow 000$. This is a $\\textbf{(MOD-8)}$ <strong>counter.</strong><br/><br/>Total pulses $=37$.<br/><br/>State after $n$ pulses $=37(\\bmod 8)$.</p><p>$37=(8 \\times 4)+5$</p><p>The remainder is $5$.<br/><br/>State $5$ in binary is $101.$<br/><br/><strong>CORRECT OPTION: A</strong></p></div><br><br><a href=\"https://gateoverflow.in/523432/go-classes-dpp-digital-logic-counter#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-digital-logic-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/digital-logic\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Digital Logic - Sequential Circuit</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>A circuit uses two T-Flip-Flops $(T_A$ and $T_B)$ with the following logic:</p><p>If the current state $\\left(Q_A, Q_B\\right)$ is $(0,0)$, what is the sequence of states for the next four clock cycles?</p><p><strong>Given Details:</strong></p><ul><li>$T_A=Q_B$</li><li>$T_B=\\bar{Q}_A$</li></ul></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$(0,0) \\rightarrow(0,1) \\rightarrow(1,0) \\rightarrow(1,0)$</span>",
                "<span style=\"display: inline;\">$(0,0) \\rightarrow(0,1) \\rightarrow(1,1) \\rightarrow(1,0)$</span>",
                "<span style=\"display: inline;\">$(0,0) \\rightarrow(1,0) \\rightarrow(1,1) \\rightarrow(0,1)$</span>",
                "<span style=\"display: inline;\">$(0,0) \\rightarrow(0,1) \\rightarrow(1,0) \\rightarrow(1,1)$</span>"
            ],
            "answer": "A",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"522931\"></a><div itemprop=\"text\"><p><strong>Initial State:</strong> $(0,0)$</p><ul><li>$T_A=Q_B=0 \\rightarrow \\operatorname{Hold} Q_A$.<br/> </li><li>$T_B=\\bar{Q}_A=1 \\rightarrow$ Toggle $Q_B$.<br/> </li><li><strong>Next State </strong>$(1):(0,1)$<br/> </li></ul><p><strong>Current State: </strong>$(0,1)$</p><ul><li>$T_A=Q_B=1 \\rightarrow$ Toggle $Q_A$.<br/> </li><li>$T_B=\\bar{Q}_A=1 \\rightarrow$ Toggle $Q_B$.<br/> </li><li><strong> Next State</strong> $(2):$ $(1,0)$<br/> </li></ul><p>Current State: $(1,0)$</p><ul><li>$T_A=Q_B=0 \\rightarrow \\operatorname{Hold} Q_A$.<br/> </li><li>$T_B=\\bar{Q}_A=0 \\rightarrow \\operatorname{Hold} Q_B$.<br/> </li><li><strong>Next State</strong> $(3):$ $(1,0)$ (The circuit enters a stable state/deadlock).<br/> </li></ul><p>Current State: $(1,0)$</p><ul><li><strong>Next State</strong> $(4):$ $(1,0)$<br/> </li></ul><p>Correct option: A</p></div><br><br><a href=\"https://gateoverflow.in/522930/go-classes-dpp-digital-logic-t-flip-flop#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-digital-logic-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/digital-logic\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Digital Logic - Sequential Circuit</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>A $3$-bit ripple counter is constructed using T flip-flops. If the propagation delay of each flipflop is $20$ ns , what is the maximum clock frequency at which the counter can operate reliably?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$50$ MHz<br/></span>",
                "<span style=\"display: inline;\">$16.67$ MHz<br/></span>",
                "<span style=\"display: inline;\">$25$ MHz<br/></span>",
                "<span style=\"display: inline;\">$10$ MHz</span>"
            ],
            "answer": "A",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"522399\"></a><div itemprop=\"text\"><p>In a ripple counter, the clock must wait for the carry/signal to propagate through all flip-flops.</p><ul><li>Number of flip-flops $(n)=3$.<br/> </li><li>Delay per flip-flop $\\left(t_{p d}\\right)=20 \\mathrm{~ns}$.<br/> </li><li>Total propagation delay $T_{\\text {total }}=n \\times t_{p d}=3 \\times 20=60 \\mathrm{~ns}$.<br/> </li><li>Maximum Frequency $f_{\\text {max }}=\\frac{1}{T_{\\text {total }}}=\\frac{1}{60 \\times 10^{-5}} \\approx 16.67 \\times 10^6 \\mathrm{~Hz}=\\mathbf{1 6 . 6 7} \\mathrm{~MHz}$.</li></ul></div><br><br><a href=\"https://gateoverflow.in/522398/go-classes-dpp-digital-logic-flip-flops#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-digital-logic-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/digital-logic\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Digital Logic - Sequential Circuit</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>A $4$-bit <strong>Left Shift Register </strong>is initialized with the value $1011$ (where the leftmost bit is the MSB). The serial input to the register is provided by the XOR sum of the two most significant bits ( $Q_3 \\oplus Q_2$ ). After <strong>two clock pulses,</strong> what will be the content of the register?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$1111$<br/></span>",
                "<span style=\"display: inline;\">$1110$<br/></span>",
                "<span style=\"display: inline;\">$1011$<br/></span>",
                "<span style=\"display: inline;\">$0111$</span>"
            ],
            "answer": "A",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"522237\"></a><div itemprop=\"text\"><ul><li>Initial State $\\left(Q_3 Q_2 Q_1 Q_0\\right): 1011$<br/> </li><li>Shift Direction: Left Shift (LSB $Q_0$ receives input; MSB $Q_3$ is shifted out).<br/> </li><li>Serial Input $\\left(S_{\\text {in }}\\right)$ : $Q_3 \\oplus Q_2$.</li></ul><p><br/>\\[<br/>\\begin{array}{lccc}<br/>\\text{Clock Pulse} &amp;<br/>\\text{Current State }(Q_3\\,Q_2\\,Q_1\\,Q_0) &amp;<br/>\\text{Input Logic }(S_{\\text{in}} = Q_3 \\oplus Q_2) &amp;<br/>\\text{Next State (Shift Left)} \\\\ \\hline<br/>\\text{Initial} &amp; 1011 &amp; 1 \\oplus 0 = 1 &amp; - \\\\<br/>\\text{Pulse 1} &amp; 1011 \\rightarrow 0111 &amp; 1 \\oplus 0 = 1 &amp; 0111 \\\\<br/>\\text{Pulse 2} &amp; 0111 \\rightarrow 1111 &amp; 0 \\oplus 1 = 1 &amp; 1111<br/>\\end{array}<br/>\\]</p></div><br><br><a href=\"https://gateoverflow.in/522232/go-classes-dpp-digital-logic-shift-register#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-digital-logic-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/digital-logic\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Digital Logic - Sequential Circuit</a></b></div></div>"
        }
    ]
});

registerTest({
    "name": "DPP 23 - Digital Logic (Sequential Circuit - Part 5)",
    "testLabel": "DPP 23",
    "testType": "DPP",
    "bracket": "Sequential Circuit - Part 5",
    "subject": "dl",
    "series": "cse-dpp-2027",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 10,
    "topicsCovered": "Sequential Circuit (Practice Set 5)",
    "questions": [
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider a $3$-bit synchronous counter designed using <strong>J-K Flip-Flops</strong>. The state of the counter is represented as $Q_2 Q_1 Q_0$. The flip-flop inputs are configured as follows:</p><p>If the current state of the counter is $\\mathbf{1 0 1}$, what will be the decimal equivalent of the state after $\\mathbf{3}$ <strong>clock pulses</strong>?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$J_0=1, K_0=1$<br/></span>",
                "<span style=\"display: inline;\">$J_1=Q_0, K_1=Q_0$<br/></span>",
                "<span style=\"display: inline;\">$J_2=Q_1 Q_0, K_2=Q_1 Q_0$</span>"
            ],
            "answer": "3",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"522226\"></a><div itemprop=\"text\"><p>This is a standard <strong>3-bit Binary Up Counter.</strong><br/><br/>State sequence: $101(5) \\rightarrow 110(6) \\rightarrow 111(7) \\rightarrow 000(0)$.<br/><br/>After $3$ pulses, the state is $000$ , which is $0$ in decimal.</p></div><br><br><a href=\"https://gateoverflow.in/522225/go-classes-dpp-digital-logic-counter#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-digital-logic-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/digital-logic\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Digital Logic - Sequential Circuit</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>A 3-bit synchronous counter is designed using <strong>T flip-flops.</strong> The state transitions are defined as follows: $000 \\rightarrow 001 \\rightarrow 011 \\rightarrow 111 \\rightarrow 000 \\ldots$</p><p>The unused states $(010,100,101,110)$ are \"Don't Care\" conditions. If the current state of the counter is represented as $Q_2 Q_1 Q_0$, what is the simplified Boolean expression for the input to the MSB flip-flop $(T_2)$?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$Q_1$<br/></span>",
                "<span style=\"display: inline;\">$Q_1Q_0$<br/></span>",
                "<span style=\"display: inline;\">$Q_2Q_0$<br/></span>",
                "<span style=\"display: inline;\">$Q_2Q_1$</span>"
            ],
            "answer": "A",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"521770\"></a><div itemprop=\"text\"><p>$000 \\rightarrow 001: Q_2$ stays $0$, so $T_2=0$.<br/><br/>$001 \\rightarrow 011: Q_2$ stays $0$, so $T_2=0$.<br/><br/>$011 \\rightarrow 111: Q_2$ changes from $0 \\rightarrow 1$, so $T_2=1$.<br/><br/>$111 \\rightarrow 000: Q_2$ changes from $1 \\rightarrow 0$, so $T_2=1$.<br/><br/><strong>K-map for</strong> $T_2\\left(Q_2, Q_1, Q_0\\right)$</p><p>\\[<br/>\\begin{array}{c|cccc}<br/>Q_2 \\backslash Q_1 Q_0 &amp; 00(0) &amp; 01(1) &amp; 11(3) &amp; 10(2) \\\\ \\hline<br/>0 &amp; 0 &amp; 0 &amp; 1 &amp; \\mathbf{X} \\\\<br/>\\mathbf{1} &amp; \\mathbf{X} &amp; \\mathbf{X} &amp; \\mathbf{1} &amp; \\mathbf{X}<br/>\\end{array}<br/>\\]<br/> </p><p>Answer: A</p></div><br><br><a href=\"https://gateoverflow.in/521769/go-classes-dpp-digital-logic-counter#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-digital-logic-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/digital-logic\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Digital Logic - Sequential Circuit</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>A $4-$bit synchronous down-counter is initialized to $1010$. After $13$ clock pulses, what will be the state of the counter?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$0111$<br/></span>",
                "<span style=\"display: inline;\">$1011$<br/></span>",
                "<span style=\"display: inline;\">$1101$<br/></span>",
                "<span style=\"display: inline;\">$1100$</span>"
            ],
            "answer": "A",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"521148\"></a><div itemprop=\"text\"><p><strong>Start$</strong>: 10$<br/><br/><strong>Pulses</strong> $\\mathbf{1-10}: 9, 8, 7, 6, 5, 4, 3, 2, 1,0$<br/><br/><strong>Pulse</strong> $\\mathbf{11}: 15$ (Underflow occurs here)<br/><br/><strong>Pulse </strong>$\\mathbf{12}: 14$<br/><br/><strong>Pulse</strong> $\\mathbf{13: 13}\\left(1101_2\\right)$</p></div><br><br><a href=\"https://gateoverflow.in/521147/go-classes-dpp-digital-logic-counter#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-digital-logic-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/digital-logic\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Digital Logic - Sequential Circuit</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider a $3$-bit synchronous counter using <strong>T-Flip Flops</strong> $(T_2, T_1, T_0)$. The flip-flop inputs are defined by the following logic:</p><p>If the counter starts at the state $\\left(Q_2 Q_1 Q_0\\right)=(000)$, what is the decimal equivalent of the state of the counter after $\\mathbf{4}$ <strong>clock pulses</strong>?</p><p><strong>Given Details:</strong></p><ul><li>$T_2=Q_1 Q_0$</li><li>$T_1=Q_0$</li><li>$T_0=\\overline{Q_2}$</li></ul></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$3$</span>",
                "<span style=\"display: inline;\">$4$</span>",
                "<span style=\"display: inline;\">$5$</span>",
                "<span style=\"display: inline;\">$6$</span>"
            ],
            "answer": "A",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"521144\"></a><div itemprop=\"text\"><p>For a T-Flip Flop, the next state is given by $Q_{\\text {next }}=T \\oplus Q_{\\text {present }}$. The characteristic equations for this counter are:</p><ol><li>$Q_{0(n+1)}=\\bar{Q}_2 \\oplus Q_0$<br/> </li><li>$Q_{1(n+1)}=Q_0 \\oplus Q_1$<br/> </li><li>$Q_{2(n+1)}=\\left(Q_1 Q_0\\right) \\oplus Q_2$<br/> </li></ol><div><strong>State Transition Table</strong></div><p>\\[<br/>\\begin{array}{|l|l|l|l|l|}<br/>\\hline<br/>\\text{Clock Pulse} &amp; Q_2 &amp; Q_1 &amp; Q_0 &amp; \\text{Decimal} \\\\<br/>\\hline<br/>\\text{Initial} &amp; 0 &amp; 0 &amp; 0 &amp; 0 \\\\<br/>\\hline<br/>\\text{1st Pulse} &amp; 0 \\oplus 0 = 0 &amp; 0 \\oplus 0 - 0 &amp; 1 \\oplus 0 = 1 &amp; 1 \\\\<br/>\\hline<br/>\\text{2nd Pulse} &amp; 0 \\oplus 0 = 0 &amp; 1 \\oplus 0 = 1 &amp; 1 \\oplus 1 = 0 &amp; 2 \\\\<br/>\\hline<br/>\\text{3rd Pulse} &amp; 0 \\oplus 0 = 0 &amp; 0 \\oplus 1 - 1 &amp; 1 \\oplus 0 = 1 &amp; 3 \\\\<br/>\\hline<br/>\\textbf{4th Pulse} &amp; (1 \\cdot 1) \\oplus 0 = \\mathbf{1} &amp; 1 \\oplus 1 = \\mathbf{0} &amp; 1 \\oplus 1 = \\mathbf{0} &amp; \\mathbf{4} \\\\<br/>\\hline<br/>\\end{array}<br/>\\]</p></div><br><br><a href=\"https://gateoverflow.in/521143/go-classes-dpp-digital-logic-counter#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-digital-logic-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/digital-logic\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Digital Logic - Sequential Circuit</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>A synchronous circuit uses two Flip-Flops $(F F_1$ and $F F_2)$ with the following parameters:</p><p>The combinational logic between the two Flip-Flops has a propagation delay $\\left(t_{p d}\\right)$ ranging from $8\\mathrm{~ns}$ to $15 \\mathrm{~ns}$. Calculate the <strong>maximum clock frequency</strong> $(f_{\\max })$ at which this circuit can operate reliably without violating setup time constraints.<br/><br/>(In MHz upto $2$ decimal places).</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\"><strong>Setup time </strong>$\\left(t_{s u}\\right): 5 \\mathrm{~ns}$<br/></span>",
                "<span style=\"display: inline;\"><strong>Hold time</strong> $\\left(t_h\\right): 2 \\mathrm{~ns}$<br/></span>",
                "<span style=\"display: inline;\"><strong>Clock-to-Q delay</strong> $(t_{\\text {cq }}): 10 \\mathrm{~ns}$</span>"
            ],
            "answer": "18",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"524126\"></a><div itemprop=\"text\"><p><strong>1. Maximum Clock Frequency</strong> $(f_{\\text {max }})$<strong> : </strong>To avoid setup time violations, the clock period $T$ must be greater than or equal to the sum of the clock-to-Q delay, the maximum combinational delay, and the setup time.</p><p>$$<br/>\\begin{gathered}<br/>T \\geq t_{c q}+t_{p d(\\max )}+t_{s u} \\\\\\\\<br/>T \\geq 10 \\mathrm{~ns}+15 \\mathrm{~ns}+5 \\mathrm{~ns}=30 \\mathrm{~ns}<br/>\\end{gathered}<br/>$$</p><p><br/>The maximum frequency is the reciprocal of the minimum clock period:</p><p>$$<br/>f_{\\max }=\\frac{1}{30 \\mathrm{~ns}} \\approx 33.33 \\mathrm{MHz}<br/>$$</p><p><strong>2. Hold Time Check: </strong>To avoid hold time violations, the shortest path delay (clock-to-Q + minimum combinational delay) must be greater than or equal to the hold time.</p><p>$$<br/>\\text { Shortest Path }=t_{c q}+t_{p d(\\min )}<br/>$$<br/>Shortest Path $=10 \\mathrm{~ns}+8 \\mathrm{~ns}=18 \\mathrm{~ns}$<br/><br/>Since $18 \\mathrm{~ns} \\geq 2 \\mathrm{~ns}$ (the hold time $t_h$ ), <strong>there is no hold time violation.</strong></p></div><br><br><a href=\"https://gateoverflow.in/520900/go-classes-dpp-gate-cs-digital-logic-counter#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-digital-logic-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/digital-logic\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Digital Logic - Sequential Circuit</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>A synchronous counter is designed using two J-K flip-flops $F F_1$ (MSB) and $F F_0$ (LSB). The input logic is defined as: $J_1=Q_0, K_1=1$ and $J_0=\\bar{Q}_1, K_0=1$. If the initial state $\\left(Q_1 Q_0\\right)$ is $00$, what is the sequence of states generated by the counter?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$00\\rightarrow01\\rightarrow10\\rightarrow00$<br/></span>",
                "<span style=\"display: inline;\">$00\\rightarrow01\\rightarrow11\\rightarrow10$<br/></span>",
                "<span style=\"display: inline;\">$00 \\rightarrow 10 \\rightarrow 01 \\rightarrow 00$<br/></span>",
                "<span style=\"display: inline;\">$00 \\rightarrow 11\\rightarrow00$</span>"
            ],
            "answer": "A",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"524121\"></a><div itemprop=\"text\">Next state is JQbar+KbarQ...<br/> <br/> <br/> <br/> <br/> <br/> So,LSB next state is Q1barQ0bar<br/> <br/> So,MSB next state is Q1barQ0<br/> <br/> <br/> <br/> Then,....00-&gt;01-&gt;10-&gt;00</div><br><br><a href=\"https://gateoverflow.in/520897/go-classes-dpp-gate-cs-digital-logic-counter#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-digital-logic-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/digital-logic\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Digital Logic - Sequential Circuit</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>The circuit shown consists of j-K flip-flops, each with an active low asynchronous reset ( $\\hat{R}_i$ input). The counter corresponding to this circuit is<br/> </p><p><img alt=\"\" height=\"124\" src=\"https://gateoverflow.in/?qa=blob&amp;qa_blobid=6567003645572074949\" width=\"407\"/></p></div></span>",
            "image": "https://gateoverflow.in/?qa=blob&qa_blobid=6567003645572074949",
            "options": [
                "<span style=\"display: inline;\">a modulo- $5$ binary up counter<br/></span>",
                "<span style=\"display: inline;\">a modulo -$6$ binary down counter<br/></span>",
                "<span style=\"display: inline;\">a modulo- $5$ binary down counter<br/></span>",
                "<span style=\"display: inline;\">a modulo- $6$ binary up counter</span>"
            ],
            "answer": "A",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"474344\"></a><div itemprop=\"text\">$Q$ is applied as negative edge triggering clock.<br/> $\\Rightarrow$ Counter is up counter.<br/> Reset signal $=\\overline{Q_2 \\cdot Q_0}$<br/> The counter resets at $101$<br/> $\\Rightarrow$ Counter is $MOD-5$</div><br><br><a href=\"https://gateoverflow.in/474343/go-classes-dpp-digital-logics-counters#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-digital-logic-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/digital-logic\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Digital Logic - Sequential Circuit</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>A 4-bit shift register circuit configured for right-shift operation, i.e, $D_{\\text {in }} \\rightarrow A, A \\rightarrow B, B \\rightarrow C, C \\rightarrow D$, as shown. If the present state of the shift register is $\\mathrm{ABCD}=1101$, the number of clock cycles required to reach the state $\\mathrm{ABCD}=1111$ is $\\qquad$ ,<br/><img alt=\"\" src=\"data:image/png;base64,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\"/></p></div></span>",
            "image": "data:image/png;base64,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",
            "options": [],
            "answer": "10",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"474341\"></a><div itemprop=\"text\"><p><img alt=\"\" height=\"368\" src=\"https://gateoverflow.in/?qa=blob&amp;qa_blobid=8798002800583186653\" width=\"401\"/></p><p> </p><p>So, $10$ clock cycles are required.</p><p> </p><p> </p></div><br><br><a href=\"https://gateoverflow.in/474340/go-classes-dpp-digital-logics-registers#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-digital-logic-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/digital-logic\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Digital Logic - Sequential Circuit</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\">The maximum clock frequency in MHz of a 4-stage ripple counter, utilizing flip-flops, with each flip-flop having a propagation delay of 20 ns , is ___________ MHz . (round off to one decimal place)</div></span>",
            "image": "",
            "options": [],
            "answer": "12.5",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"473854\"></a><div itemprop=\"text\"><p>Total delay $=4$ stages $\\times 20 \\mathrm{~ns}=80 \\mathrm{~ns}$<br/>Maximum frequency $=1 / 80 \\mathrm{~ns}=\\frac{1}{80 \\times 10^9}=12.5 \\mathrm{MHz}$<br/><strong>Answer: 12.5 MHz</strong></p></div><br><br><a href=\"https://gateoverflow.in/473853/go-classes-dpp-digital-logics-sequential-circuits-gate-ee#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-digital-logic-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/digital-logic\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Digital Logic - Sequential Circuit</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>The sequence of states $\\left(Q_1 Q_0\\right)$ of the given synchronous sequential circuit is_____</p><p><img alt=\"\" src=\"https://gateoverflow.in/?qa=blob&amp;qa_blobid=2511214659121662755\"/></p></div></span>",
            "image": "https://gateoverflow.in/?qa=blob&qa_blobid=2511214659121662755",
            "options": [
                "<span style=\"display: inline;\">$00 \\rightarrow 10 \\rightarrow 11 \\rightarrow 00$<br/></span>",
                "<span style=\"display: inline;\">$11 \\rightarrow 00 \\rightarrow 10 \\rightarrow 01 \\rightarrow 00$<br/></span>",
                "<span style=\"display: inline;\">$01 \\rightarrow 10 \\rightarrow 11 \\rightarrow 00 \\rightarrow 01$<br/></span>",
                "<span style=\"display: inline;\">$00 \\rightarrow 01 \\rightarrow 10 \\rightarrow 00$</span>"
            ],
            "answer": "B",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"473386\"></a><div itemprop=\"text\"><p>Option B</p><p><img alt=\"\" height=\"362\" src=\"https://gateoverflow.in/?qa=blob&amp;qa_blobid=7469323944462174391\" width=\"308\"/></p></div><br><br><a href=\"https://gateoverflow.in/473382/go-classes-dpp-digital-logic-sequential-circuits-gate-ec-2024#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-digital-logic-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/digital-logic\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Digital Logic - Sequential Circuit</a></b></div></div>"
        }
    ]
});

registerTest({
    "name": "DPP 24 - Digital Logic (Sequential Circuit - Part 6)",
    "testLabel": "DPP 24",
    "testType": "DPP",
    "bracket": "Sequential Circuit - Part 6",
    "subject": "dl",
    "series": "cse-dpp-2027",
    "date": "Nov 03, 2026",
    "duration": "15 Min",
    "totalMarks": 5,
    "topicsCovered": "Sequential Circuit (Practice Set 6)",
    "questions": [
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p dir=\"ltr\">A sequential circuit with two $\\mathbf{D}$ Flip-Flops, $\\mathbf{A}$ and $\\mathbf{B}$; two inputs, $\\mathbf{x}$ and $\\mathbf{y}$; and one output, $\\mathbf{z}$, Which of the following is the next-state and output equation for A and B ?</p><p dir=\"ltr\"> </p><p><b id=\"docs-internal-guid-835d41b3-7fff-dcae-7249-c98468e4c075\"><img alt=\"\" height=\"242\" src=\"https://lh7-rt.googleusercontent.com/docsz/AD_4nXdPODl4_N3hZVircV-oH27BNQtJmu9Tc79JljN_WHJF90PEZf0FUYtqMd-Rw3a56I5ZvlV9nauMLXWC69m6UDRYgCg62Bx3QLuFI7AnKWEMuOcs_F7HAdEH15xIg1zQ_XXQvVjS?key=x9LOSZAnFQmL_XZp4jEJhQ\" width=\"545\"/></b></p><p> </p><p><img alt=\"\" src=\"https://gateoverflow.in/?qa=blob&amp;qa_blobid=8335427886590561755\"/></p><p> </p></div></span>",
            "image": "https://lh7-rt.googleusercontent.com/docsz/AD_4nXdPODl4_N3hZVircV-oH27BNQtJmu9Tc79JljN_WHJF90PEZf0FUYtqMd-Rw3a56I5ZvlV9nauMLXWC69m6UDRYgCg62Bx3QLuFI7AnKWEMuOcs_F7HAdEH15xIg1zQ_XXQvVjS?key=x9LOSZAnFQmL_XZp4jEJhQ",
            "options": [],
            "answer": "0",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"471709\"></a><div itemprop=\"text\"><p><img alt=\"\" src=\"https://gateoverflow.in/?qa=blob&amp;qa_blobid=1423599565458013445\"/></p></div><br><br><a href=\"https://gateoverflow.in/471708/go-classes-dpp-digital-logic-flip-flop-philadelphia-university#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-digital-logic-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/digital-logic\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Digital Logic - Sequential Circuit</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>When designing the circuit with the state table shown below using JK flip flops, then $\\mathrm{Ja}=\\ldots, \\mathrm{Ka}=\\ldots$</p><p><img alt=\"\" src=\"https://gateoverflow.in/?qa=blob&amp;qa_blobid=909705735286912159\"/></p></div></span>",
            "image": "https://gateoverflow.in/?qa=blob&qa_blobid=909705735286912159",
            "options": [
                "<span style=\"display: inline;\">$\\mathrm{Ja}=\\mathrm{B}, \\mathrm{Ka}=\\mathrm{Bx}$</span>",
                "<span style=\"display: inline;\">$\\mathrm{Ja}=\\mathrm{B}^{\\prime}, \\mathrm{Ka}=\\mathrm{Bx}^{\\prime}$</span>",
                "<span style=\"display: inline;\">$\\mathrm{Ja}=\\mathrm{B}, \\mathrm{Ka}=\\mathrm{B} \\mathrm{x}^{\\prime}$</span>",
                "<span style=\"display: inline;\">$\\mathrm{Ja}=\\mathrm{B}^{\\prime}, \\mathrm{Ka}=\\mathrm{Bx}$</span>"
            ],
            "answer": "A",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"471707\"></a><div itemprop=\"text\"><p><img alt=\"\" height=\"725\" src=\"https://gateoverflow.in/?qa=blob&amp;qa_blobid=4835095744472285512\" width=\"647\"/></p></div><br><br><a href=\"https://gateoverflow.in/471706/go-classes-dpp-digital-logic-flip-flop-philadelphia-university#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-digital-logic-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/digital-logic\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Digital Logic - Sequential Circuit</a></b></div></div>"
        },
        {
            "marks": 2,
            "neg": 0,
            "type": "MSQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p> </p><p><img alt=\"\" src=\"https://gateoverflow.in/?qa=blob&amp;qa_blobid=2017657999918404709\"/></p><p>Which of the following state equations is/are correct for the given circuit?</p></div></span>",
            "image": "https://gateoverflow.in/?qa=blob&qa_blobid=2017657999918404709",
            "options": [
                "<span style=\"display: inline;\">$\\mathrm{A}=\\mathrm{BC}$</span>",
                "<span style=\"display: inline;\">$\\mathrm{B}=\\mathrm{BC}+\\mathrm{B}^{\\prime} \\mathrm{C}^{\\prime}$</span>",
                "<span style=\"display: inline;\">$\\mathrm{C}=\\mathrm{A}^{\\prime} \\mathrm{C}^{\\prime}$</span>",
                "<span style=\"display: inline;\">None of these</span>"
            ],
            "answer": [
                "A"
            ],
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"471257\"></a><div itemprop=\"text\"><p><img alt=\"\" src=\"https://gateoverflow.in/?qa=blob&amp;qa_blobid=7419410139398230697\"/></p></div><br><br><a href=\"https://gateoverflow.in/471256/go-classes-dpp-digital-logic-flip-flop-philadelphia-university#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-digital-logic-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/digital-logic\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Digital Logic - Sequential Circuit</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Which of the following circuits come under the class of combinational logic circuits?</p><p>Select the correct answer from the codes given below:</p><p><strong>Given Details:</strong></p><ul><li>Full adder</li><li>Full subtracter</li><li>Half adder</li><li>J-K flip</li><li>Counter</li></ul></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">1 only</span>",
                "<span style=\"display: inline;\">3 and 4</span>",
                "<span style=\"display: inline;\">4 and 5</span>",
                "<span style=\"display: inline;\">1, 2, and 3</span>"
            ],
            "answer": "A",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"471253\"></a><div itemprop=\"text\">Combinational circuits: - Full adder, Full subtractor, Half adder Sequential circuits: - JK flip flop, Counter</div><br><br><a href=\"https://gateoverflow.in/471252/go-classes-dpp-digital-logic-combinational-circuits-philadelphia-university#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-digital-logic-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/digital-logic\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Digital Logic - Sequential Circuit</a></b></div></div>"
        }
    ]
});
