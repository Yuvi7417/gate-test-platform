registerTest({
    "name": "DPP 07 - Computer Organization (Machine Instruction & Addressing Modes - Part 1)",
    "testLabel": "DPP 07",
    "testType": "DPP",
    "bracket": "Machine Instruction & Addressing Modes - Part 1",
    "subject": "coa",
    "series": "cse-dpp-2027",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 12,
    "topicsCovered": "Machine Instruction & Addressing Modes (Practice Set 1)",
    "questions": [
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\">In a $12$ -bit computer instruction format, the size of the address field is $3$ bits. The computer uses an expanding OP code technique and has $12$ two-address instructions and 40 one-address instructions. The maximum number of zero-address instructions it can support is $\\_\\_\\_\\_$ .</div></span>",
            "image": "",
            "options": [],
            "answer": "0",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"489369\"></a><div itemprop=\"text\"><p style=\"text-align:center\"><img alt=\"\" height=\"1100\" src=\"https://gateoverflow.in/?qa=blob&amp;qa_blobid=3917529876279488890\" width=\"1200\"/></p><p> </p></div><br><br><a href=\"https://gateoverflow.in/489091/go-classes-dpp-coa-instruction-format#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-coa-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/addressing-modes\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">COA - Machine Instruction & Addressing Modes</a></b></div></div>"
        },
        {
            "marks": 2,
            "neg": 0,
            "type": "MSQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>A processor uses 16-bit instructions and has a byte-addressable memory. It has a post-increment register indirect addressing mode, $\\mathrm{(Rx)+}$, which first fetches the operand from the memory location pointed to by $\\mathrm{R_x}$ and then increments $\\mathrm{R_x}$ by the size of the operand (in this case, $2$ bytes for a $16$ -bit word).</p><p>Before executing the instruction $\\mathrm{ADD R3, (R1)+}$, the state is as follows:</p><p>Which of the following statements is/are TRUE after the execution of the instruction?</p><p><strong>Given Details:</strong></p><ul><li>Register $\\mathrm{R1= 0 \\times 1000}$</li><li>Register $\\mathrm{R3 =0 \\times 3000}$</li><li>$\\mathrm{Memory[0x1000]}$ $=0 \\times 20$</li><li>Memory $[0 \\times 1001]=0 \\times 00$ (So the 16 -bit word at $0 \\times 1000$ is $8 \\times 2000$ )</li></ul></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">The value in register R3 will be $0 \\times 5000$.</span>",
                "<span style=\"display: inline;\">The instruction performs the operation $\\mathrm{R} 3+\\mathrm{R} 3+\\mathrm{M}[\\mathrm{R} 1], \\mathrm{R} 1=\\mathrm{R} 1+2$.</span>",
                "<span style=\"display: inline;\">The value in register R1 will be $0 \\times 1002$.</span>",
                "<span style=\"display: inline;\">The value in register R1 will be $0 \\times 1001$.</span>"
            ],
            "answer": [
                "A"
            ],
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"489122\"></a><div itemprop=\"text\">Initial: R1 = 0x1000, R3 = 0x3000<br/> Memory[0x1000] = 0x20<br/> Memory[0x1001] = 0x00<br/> Treating the two bytes at 0x1000..0x1001 as one 16-bit operand: M[R1] = 0x2000<br/> <br/> <br/> (R1)+ for a 16-bit operand:<br/> operand = M[R1]<br/> R1 ← R1 + 2<br/> <br/> Instruction ADD R3, (R1)+ means:<br/> R3 ← R3 + operand<br/> R1 ← R1 + 2<br/> <br/> Compute:<br/> operand = 0x2000<br/> R3 = 0x3000 + 0x2000<br/> hex add by digit: 0x3000 + 0x2000 = 0x5000<br/> R1 = 0x1000 + 0x0002 = 0x1002<br/> <br/> Conclusions:<br/> A: R3 becomes 0x5000 — TRUE<br/> B: Operation performed is R3 := R3 + M[R1]; then R1 := R1 + 2 — TRUE<br/> C: R1 becomes 0x1002 — TRUE<br/> D: R1 = 0x1001 would be FALSE<br/> </div><br><br><a href=\"https://gateoverflow.in/488425/go-classes-dpp-coa-isa#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-coa-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/addressing-modes\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">COA - Machine Instruction & Addressing Modes</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>A machine has $16$-bit instructions. An address field takes $5$ bits. The machine uses an expanding opcode scheme. If there are $12$ two-address instructions and $150$ one-address instructions, what is the maximum possible number of zero-address instructions?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$1514$<br/></span>",
                "<span style=\"display: inline;\">$1664$<br/></span>",
                "<span style=\"display: inline;\">$48448$<br/></span>",
                "<span style=\"display: inline;\">$49152$</span>"
            ],
            "answer": "A",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"487607\"></a><div itemprop=\"text\">C) 48448</div><br><br><a href=\"https://gateoverflow.in/487575/go-classes-dpp-coa-addressing-mode#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-coa-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/addressing-modes\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">COA - Machine Instruction & Addressing Modes</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>An instruction $\\text{MUL (R3)+, R4}$ is executed. This instruction fetches an operand from the memory location pointed to by register R3, performs the multiplication with R4, and then increments the value of R3 by the size of the operand. This is an example of which addressing mode?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">INDIRECT<br/></span>",
                "<span style=\"display: inline;\">INDEXED<br/></span>",
                "<span style=\"display: inline;\">AUTO-INCREMENT<br/></span>",
                "<span style=\"display: inline;\">RELATIVE</span>"
            ],
            "answer": "A",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"487330\"></a><div itemprop=\"text\">C is the Answer : <br/> <br/> Auto increment addressing mode contains address field which point to the register that holds EA of operand and then fetching data , increment value of the Register by size of the operand</div><br><br><a href=\"https://gateoverflow.in/487055/go-classes-dpp-coa-addressing-mode#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-coa-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/addressing-modes\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">COA - Machine Instruction & Addressing Modes</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>A 16-bit processor uses instructions with the following format:</p><pre> Opcode (4 bits) | Dst Register (3 bits) | Base Register (3 bits) | Offset (6 bits)</pre><p><br/>The opcode $0 \\times 9$ specifies a LOAD operation that uses indexed addressing. The effective memory address is calculated as:</p><pre> Effective Address = (Contents of Base Register) + Offset</pre><p><br/>Consider the instruction word $0 \\times 959 \\mathrm{~A}$. Before the instruction is executed, the system state is as follows:</p><p> </p><p>What is the value loaded into the destination register after this instruction is executed?</p><p><strong>Given Details:</strong></p><ul><li>Register R6 contains the value $80$.</li><li>Memory at address $106$ contains the value $250$ .</li></ul></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$250$</span>",
                "<span style=\"display: inline;\">$106$</span>",
                "<span style=\"display: inline;\">$80$</span>",
                "<span style=\"display: inline;\">$26$</span>"
            ],
            "answer": "A",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"487368\"></a><div itemprop=\"text\"><p><img alt=\"\" height=\"1200\" src=\"https://gateoverflow.in/?qa=blob&amp;qa_blobid=4125967682493275227\" width=\"900\"/><img alt=\"\" src=\"https://drive.google.com/file/d/1UjUFz4TgBi9yGuffSooKKcw1brphyJsi/view?usp=drivesdk\"/>Answer A</p><p> </p></div><br><br><a href=\"https://gateoverflow.in/486761/go-classes-dpp-coa-addressing-mode#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-coa-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/addressing-modes\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">COA - Machine Instruction & Addressing Modes</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>In which addressing mode is the effective address of the operand generated by adding a constant value to the content of a register?</p><p> </p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">Absolute mode<br/></span>",
                "<span style=\"display: inline;\">Indirect mode<br/></span>",
                "<span style=\"display: inline;\">Immediate mode<br/></span>",
                "<span style=\"display: inline;\">Index mode</span>"
            ],
            "answer": "D",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"484901\"></a><div itemprop=\"text\">Option (D) Index Mode</div><br><br><a href=\"https://gateoverflow.in/484898/go-classes-dpp-coa-isro#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-coa-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/addressing-modes\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">COA - Machine Instruction & Addressing Modes</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Which of the following addressing modes is best suited to access elements of an array of contiguous memory locations?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">Indexed addressing mode<br/></span>",
                "<span style=\"display: inline;\">Base Register addressing mode<br/></span>",
                "<span style=\"display: inline;\">Relative address mode<br/></span>",
                "<span style=\"display: inline;\">Displacement mode</span>"
            ],
            "answer": "A",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"484345\"></a><div itemprop=\"text\"><p dir=\"ltr\"><b id=\"docs-internal-guid-ad532002-7fff-3cf1-c355-dfa18f03c5e7\">Indexed addressing mode is best suited to access elements of an array of contiguous memory locations. The effective address is calculated as the sum of the contents of the Index Register and the displacement.</b></p><p> </p></div><br><br><a href=\"https://gateoverflow.in/484344/go-classes-dpp-coa-ugc-net#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-coa-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/addressing-modes\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">COA - Machine Instruction & Addressing Modes</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\">A PC-relative mode branch instruction is stored in memory at address $620_{10}$ The size of the instruction is $2$ bytes. The branch is made to location $530_{10}$ and the address field in the instruction is $16$ bits long.<br/> <br/> The value of displacement (in decimal) in the instruction is ____________</div></span>",
            "image": "",
            "options": [],
            "answer": "530",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"496735\"></a><div itemprop=\"text\"><p data-end=\"466\" data-start=\"383\">In <strong data-end=\"412\" data-start=\"386\">PC-relative addressing</strong>, the <strong data-end=\"439\" data-start=\"418\">effective address</strong> (target) is calculated as:<br/> <strong> Target address=(PC after fetching instruction)+Displacement</strong><br/> </p><p data-end=\"466\" data-start=\"383\">After fetching the 2-byte instruction, the PC points to:<br/> PC after fetching=620+2=622<br/> <br/> 530=622+Displacement<br/> Displacement=530−622=<strong>−92</strong><br/> </p></div><br><br><a href=\"https://gateoverflow.in/483263/go-classes-dpp-coa-instruction-set-architecture#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-coa-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/addressing-modes\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">COA - Machine Instruction & Addressing Modes</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\">Consider a processor that includes a base with an indexing addressing mode. Suppose an instruction is encountered that employs this addressing mode and specifies a displacement of $1970$, in decimal. Currently the base and index registers contain the decimal numbers $48022$ and $8$, respectively.<br/> <br/> The address of the operand (in decimal) is ____________.</div></span>",
            "image": "",
            "options": [],
            "answer": "50",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"483286\"></a><div itemprop=\"text\">base register is with respect to the program and index register is wrt to the base address of the array....<br/> now to get the effective address we add offset + base reg val + index reg val = 48022 + 1970 + 8 = 50,000<br/> <br/> EA = 50,000<br/> </div><br><br><a href=\"https://gateoverflow.in/483258/go-classes-dpp-coa-instruction-set-architecture#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-coa-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/addressing-modes\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">COA - Machine Instruction & Addressing Modes</a></b></div></div>"
        },
        {
            "marks": 2,
            "neg": 0,
            "type": "MSQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider a 16-bit processor in which the following appears in main memory, starting at location 200:</p><p>\\[<br/>\\begin{array}{|l|c|}<br/>\\hline<br/>200 &amp; \\text{Load to AC} \\;\\; | \\;\\; \\text{Mode} \\\\ \\hline<br/>201 &amp; 500 \\\\ \\hline<br/>202 &amp; \\text{Next Instruction} \\\\ \\hline<br/>\\end{array}<br/>\\]</p><p>The first part of the first word indicates that this instruction loads a value into an accumulator. The Mode field specifies an addressing mode and, if appropriate, indicates a source register; assume that when used, the source register is R1, which has a value of $400$.There is also a base register that contains the value $100$.The value of $500$ in location $201$ may be part of the address calculation. Assume that location $399$ contains the value $999$, location $400$ contains the value $1000$ , and so on.</p><p>Which of the following statement(s) is/are correct?<br/><br/>(EA represents effective address.)</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">If direct addressing mode is used, then $\\mathrm{EA}=500$ and operand $=1100$<br/></span>",
                "<span style=\"display: inline;\">If PC relative addressing mode is used, then $\\mathrm{EA}=900$ and operand=mem[900]<br/></span>",
                "<span style=\"display: inline;\">If register indirect addressing mode is used, then $\\mathrm{EA}=400$ and operand $=1000$<br/></span>",
                "<span style=\"display: inline;\">If Indirect addressing mode is used, then $\\mathrm{EA}=1100$ and operand $=1700$</span>"
            ],
            "answer": [
                "A"
            ],
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"483010\"></a><div itemprop=\"text\"><p>A. Direct addressing mode : The value at location 201 specifies the effective address, thus 500 is EA and value at m[500] = m[400] + (500-400) = 1100 . Correct</p><p>B. PC relative : PC value is 202 for execution of instruction at address 200. EA = 500 + 202 = 702. Incorrect.</p><p>C. Register Indirect : R1 contains the value of EA. Thus, EA = 400 and m[400] = 1000. Correct.<br/><br/>D. Indirect addressing : Address part of instruction i.e 500 gives the address of the EA. So EA = m[500] = 1100 and m[1100] = 1100 + (1100-500) = 1700. Correct.<br/><br/>Options <strong>A,C,D </strong></p></div><br><br><a href=\"https://gateoverflow.in/482991/go-classes-dpp-coa-addressing-modes#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-coa-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/addressing-modes\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">COA - Machine Instruction & Addressing Modes</a></b></div></div>"
        }
    ]
});

registerTest({
    "name": "DPP 08 - Computer Organization (Machine Instruction & Addressing Modes - Part 2)",
    "testLabel": "DPP 08",
    "testType": "DPP",
    "bracket": "Machine Instruction & Addressing Modes - Part 2",
    "subject": "coa",
    "series": "cse-dpp-2027",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 11,
    "topicsCovered": "Machine Instruction & Addressing Modes (Practice Set 2)",
    "questions": [
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\">A PC-relative mode branch instruction is $3$ bytes long. The address of the instruction in decimal is $256028$. What will be the branch target address if the signed displacement in the instruction is -31 ?</div></span>",
            "image": "",
            "options": [],
            "answer": "256000",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"483027\"></a><div itemprop=\"text\"><p>So its a PC-relative branch instruction in which Effective Address (E.A) = Taget Address = PC (after instruction is fetched) + offset(displacement)<br/>Now, initially when PC is holding the address of the instruction to be fetched, so PC = 256028<br/><br/>Now, given Instruction length is of 3 byte, so once instruction is fetched PC will become : PC = PC + 3 (i.e address of next instruction)<br/>​so, PC = 256031<br/><br/>After Instruction is decoded, it is known that its a JMP instruction and displacement is mentioned in the Instruction itself, which helps in getting the target address.<br/><br/>Given, displacement = -31 (negative sign indicates that the target address is <strong data-end=\"247\" data-start=\"235\">backward</strong> in memory i.e a smaller address)<br/> </p><p>Thus, the Effective Address (or <strong>branch target</strong>) =256031+ (-31) = 256000<br/><br/><strong>Note:</strong> All values are in base 10<br/><br/>Reference Topic : <a href=\"https://youtu.be/qKoN27HVwlQ?t=3628\" rel=\"nofollow\" target=\"_blank\">Displacement Based Addressng Modes</a></p></div><br><br><a href=\"https://gateoverflow.in/482987/go-classes-dpp-coa-instruction-set-architecture#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-coa-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/addressing-modes\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">COA - Machine Instruction & Addressing Modes</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider a processor with byte-addressable memory. All registers, including the Program Counter (PC), Program Status Word (PSW), and Stack Pointer (SP), are $1$ word ($1$ word = $2$ bytes) wide. A stack is implemented in the main memory and grows upward (toward higher addresses).</p><p>A CALL instruction occupies $2$ words:<br/><br/>The first word is the opcode and the second word is the starting address of the subroutine. The semantics of CALL (as implemented) are:</p><p>Push operation:<br/>To push a $2$-byte word W onto the stack:</p><ul><li>$\\mathrm{SP} \\leftarrow \\mathrm{SP}+2$ (pre-increment because stack grows upward and SP points to top),<br/> </li><li>then store the word W at memory addresses SP.</li></ul><p>Given:</p><ul><li>The current content of PC just before fetching the CALL instruction = $0x 1000$ (hex).</li><li>The two words of the CALL are located at addresses $0x 1000$ (opcode) and $0x 1002$ (operand = starting address).</li><li>The operand (starting address of subroutine) contained in the CALL is $0x 2000$.</li><li>The current content of PSW = 0xABCD.<br/> </li><li>The current content of $\\mathrm{SP}=0x 3006$.</li></ul><p>If the machine is Little-Endian, after execution of the CALL, the final values of PC and SP, and the bytes stored at addresses $0x 3008$ through $0 x 300 \\mathrm{~B}$ (in increasing address order) will be:</p><p><strong>Given Details:</strong></p><ul><li>Compute the return address = address of the instruction following the CALL.</li><li>Push the return address onto the stack.</li><li>Push the PSW onto the stack.</li><li>Load the starting address of the subroutine into PC.</li></ul></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\mathrm{PC}=0 x 2000, \\mathrm{SP}=0 x300A$, bytes $=0410 \\mathrm{CD} \\mathrm{AB}$</span>",
                "<span style=\"display: inline;\">$\\mathrm{PC}=0 x 2000, \\mathrm{SP}=0 x300A$, bytes $=1004 \\mathrm{AB} \\mathrm{CD}$</span>",
                "<span style=\"display: inline;\">$\\mathrm{PC}=0 x 1004, \\mathrm{SP}=0 x 300A$, bytes $=0410 \\mathrm{CD} \\mathrm{AB}$</span>",
                "<span style=\"display: inline;\">$\\mathrm{PC}=0 x 2000, \\mathrm{SP}=0 x 3008$, bytes $=0410 \\mathrm{CD} \\mathrm{AB}$</span>"
            ],
            "answer": "A",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"482623\"></a><div itemprop=\"text\"><p>Initial values:</p><ul><li>$\\mathrm{PC}=0 \\times 1000$ (before fetching CALL)<br/> </li><li>$\\mathrm{SP}=0 \\times 3006$<br/> </li><li>$\\mathrm{PSW}=0 \\mathrm{xABCD}$<br/> </li><li>Operand of CALL (subroutine address) $=0 \\times 2000$<br/> </li><li>CALL instruction size $=2$ words $=4$ bytes ( 1 word opcode at $0 \\times 1000,1$ word operand at $0 \\times 1002$ ).</li></ul><p>Step 1: Return address calculation</p><ul><li>Size of CALL = 4 bytes.<br/> </li><li>Current PC=0x1000 (points to CALL).<br/> </li><li>Return address $=0 \\times 1000+4=0 \\times 1004$.</li></ul><p>So we must push $0 \\times 1004$ onto the stack.<br/><br/>Step 2: Push return address (Little-Endian)</p><ul><li>Current SP = 0x3006.<br/> </li><li>Pre-increment $\\rightarrow$ SP $=0 \\times 3008$.<br/> </li><li>In Little-Endian:<br/> </li><li>Low byte of $0 \\times 1004=0 \\times 04 \\rightarrow$ stored at $0 \\times 3008$<br/> </li><li>High byte $=0 \\times 10 \\rightarrow$ stored at $0 \\times 3009$</li></ul><p>So memory:</p><p>\\[<br/>\\begin{array}{|c|c|}<br/>\\hline<br/>0x04 &amp; 0x10 \\\\<br/>\\hline<br/>0x3008 &amp; 0x3009 \\\\<br/>\\hline<br/>\\end{array}<br/>\\]</p><p>Step 3: Push PSW (0xABCD)</p><ul><li>Current SP = 0x3008.<br/> </li><li>Pre-increment $\\rightarrow S P=0 \\times 300 A$.<br/> </li><li>In Little-Endian:<br/> </li><li>Low byte of $0 \\times A B C D=0 \\times C D \\rightarrow$ stored at $0 \\times 300 \\mathrm{~A}$<br/> </li><li>High byte $=0 \\times A B \\rightarrow$ stored at $0 \\times 300 \\mathrm{~B}$<br/> </li><li>So memory:</li></ul><p>\\[<br/>\\begin{array}{|c|c|}<br/>\\hline<br/>0xCD &amp; 0xAB \\\\<br/>\\hline<br/>0x300A &amp; 0x300B \\\\<br/>\\hline<br/>\\end{array}<br/>\\]</p><p>Step 4: Load subroutine address</p><ul><li>Operand of CALL $=0 \\times 2000 \\rightarrow$ So now PC $=0 \\times 2000$.</li></ul><p>Final Results</p><ul><li>$\\mathrm{PC}=0 \\times 2000$<br/> </li><li>$\\mathrm{SP}=0 \\times 300 \\mathrm{~A}$</li></ul><p>Memory contents from $0 \\times 3008$ to $0 \\times 300 \\mathrm{~B}$ (in increasing order):</p><p>\\[<br/>\\begin{array}{|r|r|r|c|}<br/>\\hline 0x04 &amp; 0x10 &amp; 0xCD &amp; 0xAB \\\\<br/>\\hline 0x3008 &amp; 0x3009 &amp; 0x300A &amp; 0x300B \\\\<br/>\\hline<br/>\\end{array}<br/>\\]</p><p>So the correct option is:<br/><br/>A. $\\mathrm{PC}=0 \\times 2000, \\mathrm{SP}=0 \\times 300 \\mathrm{~A}$, bytes $=0410 \\mathrm{CD} \\mathrm{AB}$</p></div><br><br><a href=\"https://gateoverflow.in/482618/go-classes-dpp-coa-machine-instruction#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-coa-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/addressing-modes\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">COA - Machine Instruction & Addressing Modes</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>A computer architecture uses a 16-bit instruction format. The system designers want to implement the expand opcode technique to increase the number of instructions while supporting multiple addressing modes.</p><p>Two alternative designs are considered:<br/><br/><strong>Design A:</strong></p><ul><li>Opcode field = 6 bits<br/> </li><li>Addressing mode field $=2$ bits<br/> </li><li>Register/Operand field $=8$ bits</li></ul><p><strong>Design B (Expand Opcode Technique):</strong></p><ul><li>First 4 bits of the instruction = Primary Opcode.<br/> </li><li>If the primary opcode indicates a \"special class\", then the next 4 bits are used as extended opcode.<br/> </li><li>Remaining bits are used for addressing mode (2 bits) and operand (6 bits).<br/> </li><li>There are $25 \\%$ chances that a primary opcode indicates a special class.</li></ul><p>Which of the following options is correct?</p><p><strong>Given Details:</strong></p><ul><li>The instruction format is divided as follows:</li><li>Opcode field</li><li>Addressing mode field</li><li>Register/Operand field(s)</li></ul></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">Design A supports a greater number of instructions and a larger operand field.</span>",
                "<span style=\"display: inline;\">Design $B$ supports a greater number of instructions but a smaller operand field.</span>",
                "<span style=\"display: inline;\">Design A supports a greater number of instructions but a smaller operand field.</span>",
                "<span style=\"display: inline;\">Design $B$ supports both a greater number of instructions and a larger operand field.</span>"
            ],
            "answer": "B",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"482617\"></a><div itemprop=\"text\"><p><strong>Design A</strong></p><ul><li>Opcode field $=6$ bits $\\Rightarrow 64$ opcodes<br/> </li><li>Addressing mode field $=2$ bits $\\Rightarrow 4$ modes<br/> </li><li>Total instructions $=64 \\times 4=256$<br/> </li><li>Operand field $=8$ bits</li></ul><p><strong>Design B</strong><br/><br/>Primary opcode $=4$ bits $\\Rightarrow 16$ patterns</p><p>No. of special instructions $=25 \\%$ of 16=4<br/><br/>1. Normal instructions (12 opcodes):</p><ul><li>Each normal opcode $\\times 4$ addressing modes<br/> </li><li>$=12 \\times 4=48$ instructions</li></ul><p>2. Special instructions (4 primary opcodes, each with extended 4 bits = 16)</p><ul><li>$=4 \\times 16 \\times 4=256$ instructions</li></ul><p>Total $=48+256=304$ instructions</p><ul><li>Operand field $=6$ bits</li></ul><p>That's why option B is correct</p></div><br><br><a href=\"https://gateoverflow.in/482616/go-classes-dpp-coa-expand-opcode-technique#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-coa-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/addressing-modes\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">COA - Machine Instruction & Addressing Modes</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\">A machine supports RISC-style load/store architecture. Each instruction is $4$ bytes. Load and store instructions use base+offset addressing with a $16$-bit signed offset. If the machine has a $32$-bit address space, what is the maximum displacement range (in bytes) achievable from a base register using a single load/store instruction?</div></span>",
            "image": "",
            "options": [],
            "answer": "65536",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"482611\"></a><div itemprop=\"text\">Offset is a 16 -bit signed value $\\rightarrow$ range is $-2^{15}$ to $2^{15}-1$ i.e. -32768 to 32767 . If you report the total span of distinct displacements, that is $2^{16}=65536$ possible values.</div><br><br><a href=\"https://gateoverflow.in/482610/go-classes-dpp-coa-instruction-set-architecture#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-coa-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/addressing-modes\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">COA - Machine Instruction & Addressing Modes</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\">Consider the following binary data:<br/> <br/> \\[<br/> \\begin{array}{|c|c|c|c|c|c|c|c|}<br/> \\hline<br/> 0 &amp; 1 &amp; 1 &amp; 1 &amp; 0 &amp; 1 &amp; 0 &amp; 1 \\\\<br/> \\hline<br/> \\end{array}<br/> \\]<br/> <br/> Suppose you apply logical left shift twice on this data and put it in destination d 1 where d 1 is a 8 bit register.<br/> <br/> Let the content of carry flag at this time is c1.<br/> <br/> Now you apply RCR (Rotate through carry right) operation on d1 and put it in d2 where d2 is a 8 bit register and the carry flag content at this time is c2 .<br/> <br/> Consider a 8-bit binary number B formed by c1 c2 a2 a1 a0 b2 b1 b0<br/> <br/> Where c1 is MSB and b0 is LSB and a2 a1 a0 represents first three bits of d1 and b2 b1 b0 represents first three bit of d2 .<br/> <br/> The value of $B$ in decimal is ______?</div></span>",
            "image": "",
            "options": [],
            "answer": "183",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"482609\"></a><div itemprop=\"text\"><ul><li> Initial byte (MSB $\\rightarrow$ LSB): 01110101 = 01110101 .<br/> </li><li> Logical left shift twice $\\rightarrow \\mathrm{d} 1=11010100$. Carry after two shifts $\\mathrm{c} 1=1$ (the last bit shifted out).<br/> </li><li> RCR on d 1 with initial $\\mathrm{CF}=\\mathrm{c} 1=1 \\rightarrow \\mathrm{~d} 2=11101010$. New carry $\\mathrm{c} 2=0$ (old LSB of d1).<br/> </li><li> a2 a1 a0 = top 3 bits of d1 = 110 .<br/> </li><li> $\\mathrm{b} 2 \\mathrm{~b} 1 \\mathrm{~b} 0=\\mathrm{top} 3$ bits of $\\mathrm{d} 2=111$.<br/> </li><li> Form $\\mathrm{B}=\\mathrm{c} 1 \\mathrm{c} 2 \\mathrm{a} 2 \\mathrm{a} 1 \\mathrm{a} 0 \\mathrm{~b} 2 \\mathrm{~b} 1 \\mathrm{~b} 0=10110111=$ binary $10110111=$ 183.</li></ul></div><br><br><a href=\"https://gateoverflow.in/482608/go-classes-dpp-coa-instruction-format#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-coa-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/addressing-modes\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">COA - Machine Instruction & Addressing Modes</a></b></div></div>"
        },
        {
            "marks": 2,
            "neg": 0,
            "type": "MSQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>The memory locations $3000$, $3002$, and $3010$ contain the values $40$, $7$, and $25$, respectively, before the following program is executed:</p><p>$$\\begin{array}{ll} \\mathrm{MOVI\\ Rs,\\ 2} &amp; :\\text{Move immediate}\\\\ \\mathrm{LOAD\\ Rd,\\ 3000(Rs)} &amp; :\\text{Load from memory}\\\\ \\mathrm{ADDI\\ Rd,\\ 1000} &amp; :\\text{Add immediate}\\\\ \\mathrm{STOREI\\ 0(Rd),\\ 55} &amp; :\\text{Store immediate}\\\\ \\mathrm{ADDI\\ Rd,\\ 1990} &amp; :\\text{Add immediate}\\\\ \\mathrm{STOREI\\ 5(Rd),\\ 79} &amp; :\\text{Store immediate} \\end{array}$$</p><p><strong>Which of the following statements is/are NOT TRUE after the program finishes execution?</strong></p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">Memory location $3000$ has value $55$.<br/></span>",
                "<span style=\"display: inline;\">Memory location $3002$ has value $79$.<br/></span>",
                "<span style=\"display: inline;\">Memory location $3010$ has value $55$.<br/></span>",
                "<span style=\"display: inline;\">Memory location $1007$ has value $55$.</span>"
            ],
            "answer": [
                "A"
            ],
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"482170\"></a><div itemprop=\"text\"><p>MOVI Rs, $2 \\rightarrow$ Rs $=2$<br/><br/>LOAD Rd, 3000(Rs) $\\rightarrow$ EA $=3000+2=3002 \\rightarrow$ Rd $=$ memory[3002] $=7$<br/><br/>ADDI Rd, $1000 \\rightarrow$ Rd $=7+1000$ = 1007<br/><br/>STOREI 0(Rd), $55 \\rightarrow \\mathrm{EA}=0+1007=1007 \\rightarrow$ memory[1007] $=55$<br/><br/>ADDI Rd, $1990 \\rightarrow$ Rd $=1007+1990=2997$<br/><br/>STOREI 5(Rd), $79 \\rightarrow$ EA $=5+2997=3002 \\rightarrow$ memory[3002] $=79$<br/><br/><strong>Hence B,D are True</strong><br/><br/>memory $[3000]=40$, memory $[3010]=25$ as they didn't update</p><p><strong>That's why A,C are not True</strong></p></div><br><br><a href=\"https://gateoverflow.in/482169/go-classes-dpp-coa-addressing-modes#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-coa-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/addressing-modes\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">COA - Machine Instruction & Addressing Modes</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\">A processor has 32 integer registers (RO ... R31) and 128 floating point registers (F0 ... F127).<br/> It uses a 3-byte instruction format.<br/> <br/> The instruction set has four categories:<br/> <br/> 1. Type-1: 6 instructions, each with 3 integer register operands (3 $R$ ).<br/> <br/> 2. Type-2: 10 instructions, each with 2 floating-point register operands (2 F).<br/> <br/> 3. Type-3: 20 instructions, each with 1 integer register and 1 floating-point register operand (1 R + 1 F).<br/> <br/> 4. Type-4: M instructions, each with 1 floating-point register operand (1 F).<br/> <br/> The maximum possible value of $M$ is _________?</div></span>",
            "image": "",
            "options": [],
            "answer": "127616",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"482168\"></a><div itemprop=\"text\"><p>No. of bits taken by an integer operand ( 32 possible integer registers $)=\\log _2 32=5$</p><p>No. of bits taken by a floating point operand (128 possible floating point registers) $=\\log _2 128=7$</p><p>No of possible type- 1 instructions $=2^9$<br/><br/>Given no of type-1 instructions=6 -&gt; No of possible type-2 instruction $=\\left(2^9-6\\right)^* 2^1$</p><p>Similarly, no of type-3 possible instructions $=\\left(\\left(2^9-6\\right)^* 2^1-10\\right)^* 2^2$<br/>And the number of type-4 possible instructions is $\\left(\\left(\\left(2^9-6\\right)^* 2^1-10\\right)^* 2^2-20\\right) * 2^5 =3988^* 32=127616$</p><p><strong>Hence Maximum value of $\\mathrm{M}=127616$</strong></p></div><br><br><a href=\"https://gateoverflow.in/482167/go-classes-dpp-coa-instruction-format#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-coa-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/addressing-modes\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">COA - Machine Instruction & Addressing Modes</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>How do Direct Addressing Mode instructions compare with respect to the Indirect Addressing Mode instructions?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">Faster</span>",
                "<span style=\"display: inline;\">Slower</span>",
                "<span style=\"display: inline;\">No difference</span>",
                "<span style=\"display: inline;\">None of the above</span>"
            ],
            "answer": "A",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"477176\"></a><div itemprop=\"text\">Direct Addressing Mode accesses the operand directly using the address specified in the instruction, making it faster than Indirect Addressing Mode, which requires an additional memory access to get the actual operand address.</div><br><br><a href=\"https://gateoverflow.in/477175/tion-1-go-classes-dpp-coa-addressing-modes-nptel#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-coa-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/addressing-modes\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">COA - Machine Instruction & Addressing Modes</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Which of the following instructions is NOT typically an arithmetic instruction?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">ADD<br/></span>",
                "<span style=\"display: inline;\">SUB<br/></span>",
                "<span style=\"display: inline;\">MOV<br/></span>",
                "<span style=\"display: inline;\">MUL</span>"
            ],
            "answer": "A",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"475536\"></a><div itemprop=\"text\">Mov is a data transfer instruction<br/> moving from register to register<br/> from memory to register<br/> remember we can never transfer data from memory to memory directly<br/> <br/> <br/> rest are arithmetic operations.</div><br><br><a href=\"https://gateoverflow.in/475510/go-classes-dpp-coa-instruction-set-hamacher#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-coa-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/addressing-modes\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">COA - Machine Instruction & Addressing Modes</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\">Registers $R4$ contains the decimal number $2000$. If the addressing mode used is $12$($R4$) (Base plus Displacement addressing mode), what is the Effective Address ($EA$)?</div></span>",
            "image": "",
            "options": [],
            "answer": "2012",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"475142\"></a><div itemprop=\"text\"><p>The Base plus Displacement addressing mode works like this:</p><p>$$<br/>EA=\\text { Displacement }+[\\text { BaseRegister }]<br/>$$</p><ul style=\"list-style-type: disc;\"><li>Displacement $=12$</li><li>Base Register $R4$ $=2000$</li></ul><p>So,</p><p>$$<br/>EA=12+2000=2012<br/>$$</p><p><br/>Final Answer: $2012$</p><p> </p><p> </p><p><b id=\"docs-internal-guid-c0a4a99e-7fff-0350-8e55-c1b78b3d8bd1\"><img alt=\"\" height=\"286\" src=\"https://lh7-rt.googleusercontent.com/docsz/AD_4nXdvwHtJZp3xK62ujiZBaNJqNMRBttau_ZTBxt5jAHdDlPSIxguP-EGid-A7eSs7kJ__dkmQpcssr1sd_k9r7Imb12ja-nEE5ZgH0Fu8YgfFDPU_PfHXBF2H_AXxWeMSvGn5DCv4kA?key=zB-vo1osEtQMTEPzObRkaA\" width=\"447\"/></b></p><p dir=\"ltr\"><b id=\"docs-internal-guid-dfcea227-7fff-1a12-0a72-6b0a4d5ff122\">Screenshot from Carl Hamacher</b></p></div><br><br><a href=\"https://gateoverflow.in/475141/go-classes-dpp-coa-addressing-modes-hamacher#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-coa-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/addressing-modes\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">COA - Machine Instruction & Addressing Modes</a></b></div></div>"
        }
    ]
});

registerTest({
    "name": "DPP 09 - Computer Organization (Machine Instruction & Addressing Modes - Part 3)",
    "testLabel": "DPP 09",
    "testType": "DPP",
    "bracket": "Machine Instruction & Addressing Modes - Part 3",
    "subject": "coa",
    "series": "cse-dpp-2027",
    "date": "Nov 03, 2026",
    "duration": "15 Min",
    "totalMarks": 2,
    "topicsCovered": "Machine Instruction & Addressing Modes (Practice Set 3)",
    "questions": [
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\">Registers $R$$4$ and $R5$ contain the decimal numbers $2000$ and $3000$, respectively. If the addressing mode used is $\\mathbf{2 8 ( R 4 , ~ R 5 )}$, what is the Effective Address (EA)?</div></span>",
            "image": "",
            "options": [],
            "answer": "5028",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"475140\"></a><div itemprop=\"text\"><p>The addressing mode $\\mathbf{2 8 ( R 4 , ~ R 5 )}$ refers to Base plus Index plus Displacement Addressing.<br/>The formula is:</p><p>$$<br/>E A=\\text { Displacement }+[\\text { BaseRegister }]+[\\text { IndexRegister }]<br/>$$</p><ul style=\"list-style-type: disc;\"><li>Displacement $=28$</li><li>R4 (Base Register) = $2000$</li><li>R5 (Index Register) $=3000$</li></ul><p>So,</p><p>$$<br/>E A=28+2000+3000=5028<br/>$$</p><p><br/>Final Answer: $5028$</p><p>Yet another version of the Index mode uses two registers plus a constant, which can be denoted as</p><p>$$<br/>\\mathrm{X}(\\mathrm{R} i, \\mathrm{R} j)<br/>$$</p><p><br/>In this case, the effective address is the sum of the constant X and the contents of registers $\\mathrm{R} i$ and Rj . This added flexibility is useful in accessing multiple components inside each item in a record, where the beginning of an item is specified by the ( $\\mathrm{R} i, \\mathrm{Rj}$ ) part of the addressing mode.</p></div><br><br><a href=\"https://gateoverflow.in/475139/go-classes-dpp-coa-addressing-modes-hamacher#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-coa-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/addressing-modes\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">COA - Machine Instruction & Addressing Modes</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Fixed instruction length is a feature of one of the following architecture.</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">CISC</span>",
                "<span style=\"display: inline;\">RISC</span>",
                "<span style=\"display: inline;\">X $86$</span>",
                "<span style=\"display: inline;\">None of the above</span>"
            ],
            "answer": "A",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"475136\"></a><div itemprop=\"text\"><p>RISC (Reduced Instruction Set Computer) architectures typically use fixed-length instructions, which simplifies instruction decoding and improves performance. In contrast, CISC (Complex Instruction Set Computer), like x$86$, uses variable-length instructions.<br/> </p><div style=\"text-align: center;\"><p><a href=\"https://youtu.be/DZ-tGKk3TNE?si=fqsGUh_v7TkorIDx\" rel=\"noopener noreferrer nofollow\" style=\"display: inline-block; background-color: #008CBA; color: white; padding: 10px 20px; text-align: center; text-decoration: none; font-size: 16px; border-radius: 6px; border: none; font-family: sans-serif;\" target=\"_blank\">Watch this lecture for complete understanding </a> </p></div></div><br><br><a href=\"https://gateoverflow.in/475135/go-classes-dpp-coa-architecture-nptel#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-coa-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/addressing-modes\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">COA - Machine Instruction & Addressing Modes</a></b></div></div>"
        }
    ]
});
