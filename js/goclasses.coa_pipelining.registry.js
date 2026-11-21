registerTest({
    "name": "DPP 10 - Computer Organization (Pipelining - Part 1)",
    "testLabel": "DPP 10",
    "testType": "DPP",
    "bracket": "Pipelining - Part 1",
    "subject": "coa",
    "series": "cse-dpp-2027",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 10,
    "topicsCovered": "Pipelining (Practice Set 1)",
    "questions": [
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\">The baseline execution time of a program on a single-core machine is $200$ nanoseconds (ns). The code corresponding to $90\\%$ of the execution time can be fully parallelised. The overhead for using each additional core is $5$ ns when running on a multicore system. Assume that all cores in the multicore system run their share of the parallelised code for an equal amount of time.<br/> <br/> The number of cores that minimise the execution time of the program is $\\_\\_\\_\\_$ .</div></span>",
            "image": "",
            "options": [],
            "answer": "6",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"489090\"></a><div itemprop=\"text\"><p>Let's calculate each component based on the problem statement.<br/><br/>Serial Portion ( $10 \\%$ of the work):</p><ul><li>This part's time is constant regardless of the number of cores.<br/> </li><li>Serial Time $=200 \\mathrm{~ns} \\times(1-0.90)=200 \\mathrm{~ns} \\times 0.10=20 \\mathrm{~ns}$</li></ul><p>Parallel Portion (90\\% of the work):</p><ul><li>On a single core, this takes: $200 \\mathrm{~ns} \\times 0.90=180 \\mathrm{~ns}$.<br/> </li><li>When distributed across $N$ cores, the time becomes: $\\frac{180}{N} \\mathrm{~ns}$.</li></ul><p>Overhead Portion:</p><ul><li>The overhead is 5 ns for each additional core. For $N$ cores, there are ( $N-1$ ) additional cores.</li></ul><p>- Overhead Time $=(\\mathrm{N}-1) \\times 5 \\mathrm{~ns}$.</p><p>Combining these parts, the total execution time is:</p><p>$$<br/>\\begin{aligned}<br/>&amp; T_N=\\text { (Serial Time) }+ \\text { (Parallel Time) }+ \\text { (Overhead Time) } \\\\<br/>&amp; T_N=\\underbrace{20}_{\\text {Serial Time }}+\\underbrace{\\frac{180}{N}}_{\\text {Parallel Time }}+\\underbrace{5(N-1)}_{\\text {Overhead Time }} \\\\<br/>&amp; T_N=15+\\frac{180}{N}+5 N<br/>\\end{aligned}<br/>$$</p><p>We take the derivative of the time function with respect to $N$ and set it to zero to find the minimum point.</p><p>$$<br/>\\frac{d T_N}{d N}=-\\frac{180}{N^2}+5<br/>$$</p><p><br/>Setting the derivative to 0 :</p><p>$$<br/>\\begin{gathered}<br/>5-\\frac{180}{N^2}=0 \\\\<br/>5=\\frac{180}{N^2} \\\\<br/>N^2=\\frac{180}{5}=36 \\\\<br/>N=\\sqrt{36}=6<br/>\\end{gathered}<br/>$$</p></div><br><br><a href=\"https://gateoverflow.in/489089/go-classes-dpp-coa-speedup#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-coa-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/pipelining\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">COA - Pipelining</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>An instruction set architecture is implemented using two different processor designs:</p><p> </p><p> </p><p>On the multi-cycle processor (P2), instructions are categorized with the following cycle counts:</p><p> </p><ul><li><p>ALU instructions: $4$ cycles</p></li><li><p>Load/Store instructions: $5$ cycles</p></li><li><p>Branch instructions: $3$ cycles</p></li></ul><p> </p><p>For a program with an instruction mix of $50 %$ ALU, $25 %$ Load/Store, and $25 %$ Branch instructions, which processor is faster and by what factor?</p><p> </p><p><strong>Given Details:</strong></p><ul><li><p>P1: A single-cycle processor with a clock period of $10 \\ \\text{ns}$ .</p></li><li><p>P2: A multi-cycle processor with a clock period of $2 \\ \\text{ns}$ .</p></li></ul></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">P1 IS FASTER BY A FACTOR OF $1.25$.</span>",
                "<span style=\"display: inline;\">P2 IS FASTER BY A FACTOR OF $1.25$.</span>",
                "<span style=\"display: inline;\">P1 IS FASTER BY A FACTOR OF $1.5$.</span>",
                "<span style=\"display: inline;\">P2 IS FASTER BY A FACTOR OF $1.5$.</span>"
            ],
            "answer": "A",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"488429\"></a><div itemprop=\"text\"><p>Let’s calculate the average time per instruction for each processor.</p><p> </p><p><b>For Processor P1 (Single-cycle):</b></p><p> </p><ul><li><p>Every instruction takes one clock cycle.</p></li><li><p>Average time per instruction $= 1 \\ \\text{cycle} \\times 10 \\ \\text{ns/cycle} = 10 \\ \\text{ns}$.</p></li></ul><p> </p><p><b>For Processor P2 (Multi-cycle):</b></p><p> </p><ul><li><p>First, we calculate the average <b>Cycles Per Instruction (CPI)</b>:</p><p>$\\mathrm{CPI} = (0.50 \\times 4) + (0.25 \\times 5) + (0.25 \\times 3)$</p><p>$\\mathrm{CPI} = 2.0 + 1.25 + 0.75 = 4.0$</p></li><li><p>Average time per instruction:</p><p>$\\text{Time} = \\mathrm{CPI} \\times \\text{Clock Period} = 4.0 \\times 2 \\ \\text{ns} = 8 \\ \\text{ns}$</p></li></ul><p> </p><p><b>Comparison:</b></p><p> </p><ul><li><p>P1 takes $10 \\ \\text{ns}$ per instruction.</p></li><li><p>P2 takes $8 \\ \\text{ns}$ per instruction.</p></li></ul><p> </p><p>Since its execution time is lower, <b>P2 is faster</b>.</p><p> </p><p><b>Speedup factor:</b></p><p>$\\text{Speedup} = \\frac{\\text{Time(P1)}}{\\text{Time(P2)}} = \\frac{10 \\ \\text{ns}}{8 \\ \\text{ns}} = 1.25$</p><p> </p><p><b>Therefore, P2 is faster by a factor of $1.25$.</b></p></div><br><br><a href=\"https://gateoverflow.in/488427/go-classes-dpp-coa-pipelining#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-coa-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/pipelining\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">COA - Pipelining</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>A processor has a $5$-stage instruction pipeline: Instruction Fetch (IF), Instruction Decode (ID), Execute (EX), Memory Access (MEM), and Register Writeback (WB). The clock cycle time is $1$ ns. Assume that the pipeline has no data forwarding mechanism. An instruction's result is written to the register file in the WB stage and can be read by another instruction only in the subsequent clock cycles.</p><pre>Consider the following sequence of instructions: I1: ADD R1, R2, R3 (R1 - R2 + R3) I2: SUB R4, R1, R5 (R4 -R1-R5) I3: AND R6, R1, R7 (R6 \\leftarrow R1 AND R7) I4: OR R8, R4, R9 (R8 - R4 ORR9) </pre><p><br/>The total time (in nanoseconds) required to execute this sequence of instructions is $\\_\\_\\_\\_\\_$ .</p></div></span>",
            "image": "",
            "options": [],
            "answer": "0",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"488424\"></a><div itemprop=\"text\"><p>Let's trace the execution in clock cycles:</p><ul><li>I1: Needs 5 cycles to complete (IF, ID, EX, MEM, WB) from cycle 1 to 5 . The result in R1 is written at the end of cycle 5.<br/> </li><li>I2: Depends on R1 . Its ID stage, which reads the register, can only proceed after R1 is written. 12 is fetched in cycle 2 and would normally enter ID in cycle 3 . However, it must stall until cycle 6 to read R1. This introduces 2 stall cycles.<br/> </li><li>I3: Depends on R1 . It is fetched in cycle 3. Due to the stall caused by 12, it can enter the ID stage only at cycle 7. Since R1 is available after cycle 5, there is no additional data hazard stall for I3 .<br/> </li><li>-I4: Depends on R 4 . The result R4 from 12 is written at the end of its WB stage. 12 completes its WB stage in cycle 9.14 reaches its ID stage in cycle 8 but must stall for 1 cycle to wait for R4. It proceeds with its ID stage in cycle 10.</li></ul><p>The pipeline execution looks like this (* indicates a stall):<br/> </p><p><img alt=\"\" height=\"119\" src=\"https://gateoverflow.in/?qa=blob&amp;qa_blobid=5524892157529295653\" width=\"402\"/></p><p> </p></div><br><br><a href=\"https://gateoverflow.in/488423/go-classes-dpp-coa-pipelining#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-coa-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/pipelining\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">COA - Pipelining</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Processor A runs at $3$ GHz with a CPI of $1.5$. Processor B runs at $4$ GHz with a CPI of $1.2$. A program P , when compiled for Processor A , has $1 \\times 10^9$ instructions. An optimizing compiler for Processor $B$ reduces the instruction count for the same program to $0.75 \\times 10^9$ instructions. What is the speedup of Processor B over Processor A for this program?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$1.85$<br/></span>",
                "<span style=\"display: inline;\">$2.00$<br/></span>",
                "<span style=\"display: inline;\">$2.22$<br/></span>",
                "<span style=\"display: inline;\">$2.50$</span>"
            ],
            "answer": "A",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"487645\"></a><div itemprop=\"text\">c. 2.22</div><br><br><a href=\"https://gateoverflow.in/487576/go-classes-dpp-coa-pipelining#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-coa-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/pipelining\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">COA - Pipelining</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>A six-stage pipeline processor has the stages: Fetch (FE), Decode (DE), Register Read (RR), Execute (EX), Memory Access (MA), and Write Back (WB). Each stage takes $1$ clock cycle. The EX stage takes $1$ cycle for SUB instructions and $4$ cycles for DIV instructions. The pipeline uses operand forwarding. Calculate the number of clock cycles needed to execute the following instruction sequence:<br/><br/>SUB R3, R2, R1 (R3 $\\leftarrow$R2 - R1)<br/><br/>DIV R5, R3, R4 (R5$\\leftarrow$ R3 / R4)</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$11$<br/></span>",
                "<span style=\"display: inline;\">$12$<br/></span>",
                "<span style=\"display: inline;\">$13$<br/></span>",
                "<span style=\"display: inline;\">$10$</span>"
            ],
            "answer": "D",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"489750\"></a><div itemprop=\"text\"><p><strong>Answer: D.10</strong></p><div> </div><div>Due to operand forwarding, the result from <span style=\"font-family: monospace;\"><b>SUB</b></span> is available exactly when <strong><span style=\"font-family: monospace;\">DIV</span></strong> needs it. Therefore, <b>no stalls are required</b>.</div><div> <table border=\"1\" cellpadding=\"1\" style=\"width: 500px; border-spacing: 1px;\"><tbody><tr><td>Clock Cycle</td><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td><td>8</td><td>9</td><td>10</td></tr><tr><td>I1:(SUB)</td><td>FE</td><td>DE</td><td>RR</td><td>EX</td><td>MA</td><td>WB</td><td> </td><td> </td><td> </td><td> </td></tr><tr><td>I2:(DIV)</td><td> </td><td>FE</td><td>DE</td><td>RR</td><td>EX1</td><td>EX2</td><td>EX3</td><td>EX4</td><td>MA</td><td>WB</td></tr></tbody></table><br/><strong><span style=\"font-family: monospace;\">EX1</span></strong> through <strong><span style=\"font-family: monospace;\">EX4</span></strong> represent the four execution cycles for the <strong><span style=\"font-family: monospace;\">DIV</span></strong> instruction.</div><div> </div><div>The final stage (WB) of the last instruction <strong>DIV </strong>completes at the end of <b>Clock Cycle 10</b>. Therefore, the total time required is 10 clock cycles.<br/> <p> </p></div></div><br><br><a href=\"https://gateoverflow.in/487052/go-classes-dpp-coa-pipeline#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-coa-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/pipelining\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">COA - Pipelining</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>A five-stage instruction pipeline has the stage delays of $150, 120, 160, 140$ and $130$ nanoseconds respectively. Registers that are used between the stages have a delay of 5 nanoseconds each. What is the approximate speedup of the pipeline in the steady state under ideal conditions as compared to the non-pipelined execution?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$4.0$<br/></span>",
                "<span style=\"display: inline;\">$4.2$<br/></span>",
                "<span style=\"display: inline;\">$4.5$<br/></span>",
                "<span style=\"display: inline;\">$5.0$</span>"
            ],
            "answer": "B",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"487926\"></a><div itemprop=\"text\">Non-pipeline (serial) time (Ts) = 150 + 120 + 160 + 140 + 130 = 700ns<br/> <br/> Pipleline time (Tp) = max(150,120,160,140,130) + 5 = 160 + 5 = 165ns<br/> <br/> Speedup = Ts/Tp<br/> <br/> = 700/165<br/> <br/> = 4.2<br/> <br/> Ans: Option B</div><br><br><a href=\"https://gateoverflow.in/486762/go-classes-dpp-coa-ugc-net#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-coa-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/pipelining\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">COA - Pipelining</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>An instruction's execution is divided into $5$ stages with the following individual stage delays:</p><p>This process is implemented in a pipelined processor. Assume a latch delay (buffer overhead) of $1$ ns between each pipeline stage. For a program with $1000$ instructions, $20\\%$ of the instructions are found to cause $2$ stall cycles each due to data dependencies.</p><p>What is the speedup of this pipelined processor compared to a non-pipelined processor that executes the same instructions?</p><p><strong>Given Details:</strong></p><ul><li>Instruction Fetch (IF): $10$ ns</li><li>Instruction Decode (ID): $8$ ns</li><li>Execute (EX): $10$ ns</li><li>Memory Access (MEM): $12$ ns</li><li>Write Back (WB): $7$ ns</li></ul></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$3.60$</span>",
                "<span style=\"display: inline;\">$2.58$</span>",
                "<span style=\"display: inline;\">$2.79$</span>",
                "<span style=\"display: inline;\">$5.00$</span>"
            ],
            "answer": "B",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"499066\"></a><div itemprop=\"text\">Answer: Option B) Speedup=2.575</div><br><br><a href=\"https://gateoverflow.in/486760/go-classes-dpp-coa-pipeline#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-coa-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/pipelining\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">COA - Pipelining</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>A CPU has a 5-stage pipeline with the following stages: Fetch (F), Decode (D), Execute (E), Memory $(\\mathrm{M})$ and Write-back (W). Each stage takes one clock cycle to complete. Assume there are no pipeline stalls and the pipeline is initially empty. How many clock cycles are required to complete the execution of $10$ instructions?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$10$<br/></span>",
                "<span style=\"display: inline;\">$14$<br/></span>",
                "<span style=\"display: inline;\">$15$<br/></span>",
                "<span style=\"display: inline;\">$19$</span>"
            ],
            "answer": "A",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"485679\"></a><div itemprop=\"text\"><p data-end=\"848\" data-start=\"816\">We have 10 instructions total.</p><p data-end=\"880\" data-start=\"851\"><strong data-end=\"878\" data-start=\"851\">First </strong><strong data-end=\"911\" data-start=\"893\">instruction </strong><strong data-end=\"878\" data-start=\"851\">completed at cycle 5</strong><br/>Remaining <strong data-end=\"911\" data-start=\"893\">9 instructions</strong> will complete one per cycle → <strong data-end=\"965\" data-start=\"942\">9 additional cycles</strong></p><p data-end=\"880\" data-start=\"851\">Total cycles=5+9=14</p></div><br><br><a href=\"https://gateoverflow.in/485675/go-classes-dpp-coa-ugc-net#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-coa-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/pipelining\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">COA - Pipelining</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>A non-pipelined CPU has <strong>$\\mathbf{12}$ general-purpose registers ($R0, R1, R2, \\ldots, R11$)</strong>. The following operations are supported:</p><p>A MUL operation takes $2$ clock cycles, whereas an ADD operation takes $1$ clock cycle.</p><p>Calculate the <strong>minimum number of clock cycles</strong> required to compute the expression $XY+XYZ+YZ$.</p><p>The variables $X$, $Y$, and $Z$ are initially stored in registers $R0$, $R1$, and $R2$, respectively. The contents of these three registers must not be modified.</p><p><strong>Given Details:</strong></p><ul><li><strong>ADD Ra, Rb, Rr :</strong> Add the contents of registers Ra and Rb and store the result in Rr.</li><li><strong>MUL Ra, Rb, Rr :</strong> Multiply the contents of registers Ra and Rb and store the result in Rr.</li></ul></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$5$</span>",
                "<span style=\"display: inline;\">$6$</span>",
                "<span style=\"display: inline;\">$7$</span>",
                "<span style=\"display: inline;\">$8$</span>"
            ],
            "answer": "B",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"555351\"></a><div itemprop=\"text\"><p>Expression to be evaluated $: XY+XYZ+YZ$</p><ul><li>MUL operation = $2$ clock cycles<br/> </li><li>ADD operation = $1$ clock cycle<br/> </li><li>CPU is non-pipelined.<br/> </li><li>$X,Y,Z$ are stored in $R0$, $R1$, $R2$, respectively, and must not be modified.<br/> </li></ul><p>Lets factorize the expression to minimize operations :</p><p>$$XY+XYZ+YZ=Y(X+XZ+Z)$$</p><p><br/>Execute the optimized instructions :</p><p>$$\\begin{array}{|l|l|c|} \\hline \\text{Instruction} &amp; \\text{Operation} &amp; \\text{Clock cycles}\\\\ \\hline \\text{MUL R0, R2, R3} &amp; R3=XZ &amp; 2\\\\ \\hline \\text{ADD R0, R2, R4} &amp; R4=X+Z &amp; 1\\\\ \\hline \\text{ADD R3, R4, R5} &amp; R5=XZ+X+Z &amp; 1\\\\ \\hline \\text{MUL R1, R5, R6} &amp; R6=Y(XZ+X+Z) &amp; 2\\\\ \\hline \\end{array}$$</p><p>Now,</p><p>Number of multiplication operations = $2$</p><p>Number of addition operations = $2$</p><p>$\\text{Total cycles}=(2\\times2)+(2\\times1)$</p><p>$=4+2=\\boxed{6\\text{ clock cycles}}$</p><p><strong>Answer : B</strong></p></div><br><br><a href=\"https://gateoverflow.in/485672/go-classes-dpp-coa-isro#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-coa-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/pipelining\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">COA - Pipelining</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider a $5$-segment pipeline with a clock cycle time of $20$ ns in each sub-operation. Find out the approximate speed-up ratio between a pipelined and non-pipelined system to execute $100$ instructions. (If, on average, every five cycles, a bubble due to data hazard has to be introduced in the pipeline)</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$5$<br/></span>",
                "<span style=\"display: inline;\">$4.03$<br/></span>",
                "<span style=\"display: inline;\">$4.81$<br/></span>",
                "<span style=\"display: inline;\">$4.17$</span>"
            ],
            "answer": "A",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"485836\"></a><div itemprop=\"text\">for pipeline=(5+99)+ 20stall cycles <br/> <br/> time=124*20=2480<br/> <br/> for nonpipeline=100*100=10000<br/> <br/> speedup=10000/2480=4.0322</div><br><br><a href=\"https://gateoverflow.in/485666/go-classes-dpp-coa-isro#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-coa-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/pipelining\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">COA - Pipelining</a></b></div></div>"
        }
    ]
});

registerTest({
    "name": "DPP 11 - Computer Organization (Pipelining - Part 2)",
    "testLabel": "DPP 11",
    "testType": "DPP",
    "bracket": "Pipelining - Part 2",
    "subject": "coa",
    "series": "cse-dpp-2027",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 14,
    "topicsCovered": "Pipelining (Practice Set 2)",
    "questions": [
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>An instruction pipeline consists of four stages: Fetch (F), Decode (D), Execute (E), and Write-Back (W). Each stage can accommodate only one instruction per clock cycle. The pipeline must process the following five instructions:</p><p>\\[<br/>\\begin{array}{|l|c|c|c|c|}<br/>\\hline<br/>\\text{Instruction} &amp; \\text{Fetch} &amp; \\text{Decode} &amp; \\text{Execute} &amp; \\text{Write-Back} \\\\<br/>\\hline<br/>A &amp; 2 &amp; 1 &amp; 2 &amp; 1 \\\\<br/>B &amp; 1 &amp; 3 &amp; 1 &amp; 2 \\\\<br/>C &amp; 2 &amp; 2 &amp; 2 &amp; 2 \\\\<br/>D &amp; 1 &amp; 1 &amp; 3 &amp; 1 \\\\<br/>E &amp; 2 &amp; 3 &amp; 1 &amp; 1 \\\\<br/>\\hline<br/>\\end{array}<br/>\\]</p><p>Assume:</p><p>What is the minimum number of clock cycles required to complete the execution of all five instructions?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">Only one instruction can occupy a stage at any given clock cycle.<br/></span>",
                "<span style=\"display: inline;\">Instructions must move through stages in order: $\\mathrm{F} \\rightarrow \\mathrm{D} \\rightarrow \\mathrm{E} \\rightarrow \\mathrm{W}$.<br/></span>",
                "<span style=\"display: inline;\">No instruction can overtake another.</span>"
            ],
            "answer": "15",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"498407\"></a><div itemprop=\"text\">Answer: 15 Cycles (By time diagram).</div><br><br><a href=\"https://gateoverflow.in/484896/go-classes-dpp-coa-pipelining#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-coa-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/pipelining\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">COA - Pipelining</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\">Consider a standard 5-stage pipeline CPU.<br/> <br/> The CPU executes the following sequence of instructions:<br/> <br/> 1. I1: LOAD R1, 100(R2) ; R1 $\\leftarrow \\mathrm{M}[\\mathrm{R} 2+100]$<br/> <br/> 2. I2: ADD R3, R1, R4 ; R3 $\\leftarrow \\mathrm{R} 1+\\mathrm{R} 4$<br/> <br/> 3. I3: SUB R5, R3, R6 ; R5 $\\leftarrow \\mathrm{R} 3$ - R6<br/> <br/> 4. I4: STORE R5, 200(R2) ; $\\mathrm{M}[\\mathrm{R} 2+200] \\leftarrow \\mathrm{R} 5$<br/> <br/> 5. I5: ADD R7, R1, R5 ; R7 $\\leftarrow \\mathrm{R} 1+\\mathrm{R} 5$<br/> <br/> Each stage takes exactly one clock cycle. Assume no structural hazards are there.<br/> <br/> The total number of clock cycles required to complete the above sequence of instructions, starting from the fetch of I1 is ________.</div></span>",
            "image": "",
            "options": [],
            "answer": "1391",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"498029\"></a><div itemprop=\"text\"><p><strong>Answer:</strong></p><p>The total number of clock cycles required is <strong>10 </strong>With Forwarding.<br/><br/><strong>Similar: </strong><a href=\"https://gateoverflow.in/1391/gate-cse-2005-question-68\" rel=\"nofollow\" target=\"_blank\">https://gateoverflow.in/1391/gate-cse-2005-question-68</a></p></div><br><br><a href=\"https://gateoverflow.in/484026/go-classes-dpp-coa-pipeline#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-coa-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/pipelining\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">COA - Pipelining</a></b></div></div>"
        },
        {
            "marks": 2,
            "neg": 0,
            "type": "MSQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>A uniprocessor system runs at $1$ GHz and is connected to a sensor device that produces $1$ data word every $2 \\mu \\mathrm{~s}$.</p><p>In Programmed I/O, the processor continuously polls the device. To read one word, it first reads the status register, checks if data is ready, then reads the data register, and finally stores the word in memory. Each instruction (read, check, or store) takes $1$ cycle except reading the data register, which takes $3$ cycles. Reading the status register takes $2$ cycles, and checking it takes $1$ cycle.</p><p>In Interrupt-driven I/O, the device raises an interrupt whenever data is ready. The interrupt service routine first saves the CPU context ($5$ cycles), then reads the status register, checks the status, reads the data register, and stores the word into memory, and finally restores the CPU context ($5$ cycles). Reading the data register takes $3$ cycles, checking the status takes $1$ cycle, and reading the status register takes $2$ cycles.</p><p>Assume the CPU performs useful computation only when it is not servicing I/O. Ignore memory stalls and DMA.</p><p>Which of the following statement(s) is/are correct?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">Programmed I/O consumes fewer CPU cycles per data word than Interrupt-driven I/O.<br/></span>",
                "<span style=\"display: inline;\">Interrupt-driven I/O consumes fewer CPU cycles per data word than Programmed I/O.<br/></span>",
                "<span style=\"display: inline;\">CPU spends more than $1 \\%$ of its time servicing interrupts if using Interrupt-driven I/O.<br/></span>",
                "<span style=\"display: inline;\">CPU spends less than $1 \\%$ of its time servicing I/O if using Programmed I/O.</span>"
            ],
            "answer": "B",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"484043\"></a><div itemprop=\"text\">programmed I/O consumes 100 % of CPU cycles per dataword ( means calculating for the duration of 2 mircosecond)<br/> <br/> interrupt I/O consumes 0.85% of CPU cycles per dataword...(again calculating for the duration of 2 microseconds)<br/> <br/> answer B only,</div><br><br><a href=\"https://gateoverflow.in/484024/go-classes-dpp-coa-pipeline#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-coa-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/pipelining\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">COA - Pipelining</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\">A scalar in-order processor has a base CPI of $1$ in the absence of control hazards. The instruction mix of a program is such that conditional branches are $20$ percent of all instructions and unconditional branches are $5$ percent. The branch target buffer has a hit rate of $80$ percent for both branch types. For conditional branches, when the BTB hits, a $2$-bit saturating counter predictor is used whose direction accuracy is $92$ percent. Unconditional branches are always taken. The actual taken probability of conditional branches is $60$ percent. A direction misprediction incurs a penalty of $5$ cycles. When a branch is taken but the BTB misses, there is a $2$-cycle target resolution penalty even if the direction would have been correct; when a conditional branch is not taken and the BTB misses, there is no penalty. Assume no overlap between penalties and ignore all other stalls.<br/> <br/> The average CPI of this processor is _______ (up to $3$ decimal places)</div></span>",
            "image": "",
            "options": [],
            "answer": "1.132",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"483710\"></a><div itemprop=\"text\">Direction-misprediction stalls per instruction $=0.20 \\times 0.80 \\times 0.08 \\times 5=0.064$<br/> <br/> BTB-miss stalls for conditional branches $=0.20 \\times 0.20 \\times 0.60 \\times 2=0.048$<br/> <br/> BTB-miss stalls for unconditional branches $=0.05 \\times 0.20 \\times 2=0.020$<br/> <br/> Total stall cycles per instruction $=0.064+0.048+0.020=0.132$<br/> <br/> average cpi:<br/> <br/> $$<br/> 1+0.132=1.132<br/> $$</div><br><br><a href=\"https://gateoverflow.in/483709/go-classes-dpp-coa-pipeline#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-coa-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/pipelining\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">COA - Pipelining</a></b></div></div>"
        },
        {
            "marks": 2,
            "neg": 0,
            "type": "MSQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider the standard pipelined execution of the following instruction sequence:</p><p>I1: MUL R1, R2, R3</p><p>I2: ADD R4, R1, R5</p><p>I3: SUB R6, R4, R7</p><p>Which of the following statements is/are correct?<br/><br/>A. There is a RAW dependency between I1 and I2.<br/><br/>B. After execution of the sequence, the content of the registers is $R 1=-2, R 4=-7, R 6=-11 $</p><p>C. 8 stalls are created due to RAW hazard<br/><br/>D. A structural hazard will occur due to the ALU being used by multiple instructions.</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">Initially, registers contain: $\\mathrm{R} 2=3, \\mathrm{R} 3=5, \\mathrm{R} 5=2, \\mathrm{R} 7=4$.<br/></span>",
                "<span style=\"display: inline;\">The processor uses forwarding from the ALU output to the input of subsequent ALU operations.<br/></span>",
                "<span style=\"display: inline;\">Instructions are fetched one per cycle, starting from cycle 1.</span>"
            ],
            "answer": "B",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"483708\"></a><div itemprop=\"text\"><p>Instruction Sequence:<br/><br/>I1: MUL R1, R2, R3</p><p>12: ADD R4, R1, R5<br/><br/>13: SUB R6, R4, R7<br/><br/>Initial Values:<br/><br/>$R 2=3, R 3=5, R 5=2, R 7=4$<br/><br/>Final Register Values after Execution:<br/><br/>I1: R1 = 3 * 5 = 15<br/><br/>I2: $\\mathrm{R} 4=15+2=17$<br/><br/>13: R6 $=17-4=13$<br/><br/>So registers are $\\mathrm{R} 1=15, \\mathrm{R} 4=17, \\mathrm{R} 6=13$. Option B is false.<br/><br/>Dependencies:<br/><br/>Between I1 and I2 on R1 $\\rightarrow$ RAW<br/><br/>Between I 2 and I 3 on $\\mathrm{R} 4 \\rightarrow$ RAW</p><p><br/><strong>So statement A is correct.</strong><br/><br/>Stalls:<br/><br/>With ALU forwarding, I2 gets R1 from I1 and I3 gets R4 from I2 directly. No stalls are needed. Option C is false.</p><p>Structural Hazards:<br/><br/>In a standard single-issue pipeline, the ALU is pipelined and only one stage per cycle is used, so no structural hazard arises. Option D is false.</p><p><strong>Answer: A</strong></p></div><br><br><a href=\"https://gateoverflow.in/483707/go-classes-dpp-coa-pipeline#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-coa-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/pipelining\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">COA - Pipelining</a></b></div></div>"
        },
        {
            "marks": 2,
            "neg": 0,
            "type": "MSQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Assume that the following instruction sequence is executed on standard pipeline:</p><p>$$<br/>\\begin{aligned}<br/>&amp; 11: R 1=R 2+R 3 \\\\<br/>&amp; 12: R 4=R 1+R 5 \\\\<br/>&amp; 13: R 1=R 6-R 7 \\\\<br/>&amp; 14: R 5=R 1+R 8 \\\\<br/>&amp; 15: R 6=R 4+R 1<br/>\\end{aligned}<br/>$$</p><p><br/>Which of the following statements is/are not true?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">There are 3 RAW dependencies in this sequence<br/></span>",
                "<span style=\"display: inline;\">There are 3 WAR hazards in this sequence<br/></span>",
                "<span style=\"display: inline;\">There are 1 WAW hazard in this sequence<br/></span>",
                "<span style=\"display: inline;\">There is a RAW hazard between I1 and I4</span>"
            ],
            "answer": [
                "A"
            ],
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"483706\"></a><div itemprop=\"text\"><p>RAW (true data) dependencies</p><ul><li>$\\mathrm{I} 2 \\rightarrow $ $\\mathrm{I} 2$ (I2 uses R1 produced by I1)<br/> </li><li>$\\mathrm{I} 2 \\rightarrow \\mathrm{I} 5$ (I 5 uses R4 produced by I2)<br/> </li><li>$\\mathrm{I} 3 \\rightarrow \\mathrm{I} 4 $ (I4 uses R1 produced by I3)<br/> </li><li>$\\mathrm{I} 3 \\rightarrow \\mathrm{I} 5$ (I 5 uses R1 produced by I3)<br/> </li></ul><p>RAW count $=4$, not 3.<br/><br/><strong>A is false</strong><br/><br/>WAR/WAW hazards can't be there in single issue pipeline<br/><br/><strong>So B and C are false</strong></p><p>There is no dependency between I1 and I4<br/><br/>That's why hazard can't be there<br/><br/><strong>D is also false</strong><br/><br/><strong>Hence all are false</strong></p></div><br><br><a href=\"https://gateoverflow.in/483705/go-classes-dpp-coa-pipeline#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-coa-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/pipelining\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">COA - Pipelining</a></b></div></div>"
        },
        {
            "marks": 2,
            "neg": 0,
            "type": "MSQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Which of the following statement(s) is/are correct regarding the single-issue pipeline?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">True data dependency always creates stalls in the pipeline<br/></span>",
                "<span style=\"display: inline;\">WAR/WAW hazards may or may not be there in the pipeline<br/></span>",
                "<span style=\"display: inline;\">Out-of-order execution can eliminate some stalls caused by true data dependencies.<br/></span>",
                "<span style=\"display: inline;\">Structural dependency may or may not create stalls if no additional hardware is used.</span>"
            ],
            "answer": "C",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"483704\"></a><div itemprop=\"text\">A) False<br/> <br/> True (RAW) data dependency may or may not create stalls<br/> B) False<br/> <br/> WAR,WAW dependency can be there in single issue pipeline but WAR,WAW hazards can't be there<br/> C) True<br/> <br/> Out-of-order execution can eliminate some stalls caused by true data dependencies<br/> D) False<br/> <br/> Structural dependency always creates stalls if no additional hardware is used.<br/> <br/> So option C is correct</div><br><br><a href=\"https://gateoverflow.in/483703/go-classes-dpp-coa-pipeline#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-coa-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/pipelining\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">COA - Pipelining</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>A processor has 5 stages: Fetch, Decode, Execute, Memory, and Writeback. The latencies of each stage are given below:<br/>\\[\\begin{array}{|l|l|l|}<br/>\\hline Stage &amp; Latency &amp; \\\\<br/>\\hline Fetch &amp; 300 ps &amp; \\\\<br/>\\hline Decode &amp; 400 ps &amp; \\\\<br/>\\hline Execute &amp; 350 ps &amp; \\\\<br/>\\hline Memory &amp; 550 ps &amp; \\\\<br/>\\hline Writeback &amp; 100 ps &amp; \\\\<br/>\\hline<br/>\\end{array}\\]</p><p>In the pipelined version, assume each pipeline register adds an overhead of 20 ps .<br/>What is the cycle time, latency of one instruction, and maximum throughput of the pipelined processor?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">Cycle time $=550 \\mathrm{ps}$, Latency $=2750 \\mathrm{ps}$, Throughput $=1$ instruction every 550 ps<br/></span>",
                "<span style=\"display: inline;\">Cycle time $=570 \\mathrm{ps}$, Latency $=2850 \\mathrm{ps}$, Throughput $=1$ instruction every 570 ps<br/></span>",
                "<span style=\"display: inline;\">Cycle time $=570 \\mathrm{ps}$, Latency $=1700 \\mathrm{ps}$, Throughput $=1$ instruction every 570 ps<br/></span>",
                "<span style=\"display: inline;\">Cycle time $=550 \\mathrm{ps}$, Latency $=1700 \\mathrm{ps}$, Throughput $=1$ instruction every 550 ps</span>"
            ],
            "answer": "B",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"478733\"></a><div itemprop=\"text\">option B is the answer <br/> cycle time -&gt; 550 +20 = 570 <br/> <br/> latency means the time for executing 1 single instruction -&gt; number of stages * cycle time = 5*570 =2850<br/> <br/> throughput -&gt; number of instructions per unit time but in option they are taking unit as 570ps <br/> so throughput will be 1 instruction every 570 ps</div><br><br><a href=\"https://gateoverflow.in/478696/go-classes-dpp-coa-pipelining-uc-san-diego#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-coa-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/pipelining\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">COA - Pipelining</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>A non-pipelined processor has the following stage latencies:<br/>\\[\\begin{array}{|l|l|}<br/>\\hline Stage &amp; Latency \\\\<br/>\\hline Fetch &amp; 300 ps \\\\<br/>\\hline Decode &amp; 400 ps \\\\<br/>\\hline Execute &amp; 350 ps \\\\<br/>\\hline Memory &amp; 550 ps \\\\<br/>\\hline Writeback &amp; 100 ps \\\\<br/>\\hline<br/>\\end{array}\\]</p><p>Assume no overhead between stages in the non-pipelined design.<br/>Which of the following is correct regarding the non-pipelined processor?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">Cycle time $=550$ ps, Latency $=1700$ ps, Throughput $=1$ instruction every 550 ps<br/></span>",
                "<span style=\"display: inline;\">Cycle time $=400 \\mathrm{ps}$, Latency $=2000 \\mathrm{ps}$, Throughput $=1$ instruction every 400 ps<br/></span>",
                "<span style=\"display: inline;\">Cycle time $=1700 \\mathrm{ps}$, Latency $=1700 \\mathrm{ps}$, Throughput $=1$ instruction every 1700 ps<br/></span>",
                "<span style=\"display: inline;\">Cycle time $=1700 \\mathrm{ps}$, Latency $=550 \\mathrm{ps}$, Throughput $=1$ instruction every 1700 ps</span>"
            ],
            "answer": "C",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"479010\"></a><div itemprop=\"text\">In non-pipelined processor, <br/> <br/> Cycle time without storage buffers( no overhead) - 300 + 400 + 350 + 550 + 100 = 1700ps.<br/> <br/> Every instruction has to go thorugh this much time in order to finish execution so latency = 1700ps<br/> <br/> Throughput is for doing 1 instruction in 1700ps(if this is the unit time)<br/> <br/> So option c should be correct.</div><br><br><a href=\"https://gateoverflow.in/478694/go-classes-dpp-coa-pipelining-uc-san-diego#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-coa-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/pipelining\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">COA - Pipelining</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>If an instruction takes $3$ cycles for execution, then how many cycles are needed for executing4 instructions of the same type in a sequence using a $3$-stage pipeline?<br/>Assume that there are no interrupts or exceptions while executing them.</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$12$ cycles<br/></span>",
                "<span style=\"display: inline;\">$6$ cycles<br/></span>",
                "<span style=\"display: inline;\">$9$ cycles<br/></span>",
                "<span style=\"display: inline;\">$4$ cycles</span>"
            ],
            "answer": "A",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"477178\"></a><div itemprop=\"text\">In a 3-stage pipeline, the first instruction takes 3 cycles to complete. After that, each subsequent instruction completes in 1 additional cycle (thanks to overlapping execution).<br/> <br/> For 4 instructions, the total number of cycles is:<br/> <br/> $$<br/> \\begin{aligned}<br/> &amp; =\\text { Pipeline latency }(3 \\text { cycles })+(\\text { Number of instructions }-1) \\\\<br/> &amp; =3+(4-1) \\\\<br/> &amp; =6 \\text { cycles }<br/> \\end{aligned}<br/> $$</div><br><br><a href=\"https://gateoverflow.in/477177/go-classes-dpp-coa-pipelining-nptel#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-coa-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/pipelining\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">COA - Pipelining</a></b></div></div>"
        }
    ]
});

registerTest({
    "name": "DPP 12 - Computer Organization (Pipelining - Part 3)",
    "testLabel": "DPP 12",
    "testType": "DPP",
    "bracket": "Pipelining - Part 3",
    "subject": "coa",
    "series": "cse-dpp-2027",
    "date": "Nov 03, 2026",
    "duration": "15 Min",
    "totalMarks": 3,
    "topicsCovered": "Pipelining (Practice Set 3)",
    "questions": [
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>A 5-stage pipelined processor has the following stage latencies:</p><table border=\"1\" cellpadding=\"1\" style=\"width: 500px; border-spacing: 1px;\"><thead><tr><th scope=\"col\">Stage</th><th scope=\"col\">Latency</th></tr></thead><tbody><tr><td>Fetch</td><td>300 ps</td></tr><tr><td>Decode</td><td>400 ps</td></tr><tr><td>Execute</td><td>350 ps</td></tr><tr><td>Memory</td><td>550 ps</td></tr><tr><td>Writeback</td><td>100 ps</td></tr></tbody></table><p>Each pipeline register adds 20 ps overhead. If a stage is split into two halves, which half should be split to minimise cycle time?</p><p>What are the new cycle time, latency, and throughput?</p><p> </p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">Split Memory $\\rightarrow$ Cycle time $=420 \\mathrm{ps}$, Latency $=2520 \\mathrm{ps}$, Throughput $=1$ instruction $/ 420 \\mathrm{ps}$<br/></span>",
                "<span style=\"display: inline;\">Split Decode $\\rightarrow$ Cycle time $=370$ ps, Latency $=2220$ ps, Throughput $=1 $ instruction $/ 370$ ps<br/></span>",
                "<span style=\"display: inline;\">Split Execute $\\rightarrow$ Cycle time $=350$ ps, Latency $=2100$ ps, Throughput $=1 $ instruction $/ 350$ ps<br/></span>",
                "<span style=\"display: inline;\">Split Fetch $\\rightarrow$ Cycle time $=300$ ps, Latency $=1800$ ps, Throughput $=1 $ instruction $/ 300$ ps</span>"
            ],
            "answer": "A",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"475518\"></a><div itemprop=\"text\">We would want to choose the longest stage to split in half. The new cycle time becomes the<br/> originally the 2nd longest stage length. <br/> <br/> Calculate latency and throughput correspondingly, but<br/> Remember, there are now 6 stages instead of 5.<br/> <br/> A. CT = 400 + 20 = 420 ps<br/> Latency = 6 * 420 = 2520 ps<br/> Throughput = 1/420 inst/ps<br/> </div><br><br><a href=\"https://gateoverflow.in/475517/go-classes-dpp-coa-pipelining-uc-san-diego#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-coa-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/pipelining\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">COA - Pipelining</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\">A machine has a base CPI of 2 clock cycles. Measurements obtained show that the instruction miss rate is $12 \\%$ and the data miss rate is $6 \\%$, and that on average, $30 \\%$ of all instructions contain one data reference. The miss penalty for the cache is 10 cycles. What is the total CPI?</div></span>",
            "image": "",
            "options": [],
            "answer": "3.38",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"475522\"></a><div itemprop=\"text\">Instruction stall cycles per instruction:<br/> \\[<br/> \\text{IMR} \\times \\text{Miss Penalty} = 0.12 \\times 10 = 1.2<br/> \\]<br/> <br/> Data miss rate per instruction:<br/> \\[<br/> \\text{Fraction of data instructions} \\times \\text{DMR} = 0.30 \\times 0.06 = 0.018<br/> \\]<br/> <br/> Data stall cycles per instruction:<br/> \\[<br/> 0.018 \\times 10 = 0.18<br/> \\]<br/> <br/> Total CPI:<br/> \\[<br/> \\text{Base CPI} + \\text{Instruction stalls} + \\text{Data stalls} = 2 + 1.2 + 0.18 = 3.38<br/> \\]<br/> </div><br><br><a href=\"https://gateoverflow.in/475514/go-classes-dpp-coa-pipelining-hamacher#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-coa-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/pipelining\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">COA - Pipelining</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider the following statements about pipeline hazards in a typical 5 -stage instruction pipeline (IF, ID, EX, MEM, WB):</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">Data hazards can sometimes be resolved using forwarding (bypassing)</span>",
                "<span style=\"display: inline;\">Structural hazards occur when two instructions require the same hardware resource at the same time</span>",
                "<span style=\"display: inline;\">Control hazards are completely eliminated by instruction pipelining</span>",
                "<span style=\"display: inline;\">Read After Write (RAW), Write After Read (WAR), and Write After Write (WAW) are all types of data hazards</span>"
            ],
            "answer": "C",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"475144\"></a><div itemprop=\"text\">A. Forwarding (bypassing) can resolve some data hazards. This statement is correct.<br/> <br/> B. Structural hazards occur when two instructions need the same hardware resource at the same time. This statement is also correct.<br/> <br/> C. Control hazards are completely eliminated by instruction pipelining. This is incorrect; pipelining introduces control hazards, and techniques like branch prediction can reduce but not completely remove them.<br/> <br/> D. RAW, WAR, and WAW are all types of data hazards. This is incorrect; only RAW is a true data hazard in inorder pipelines. WAR and WAW typically become hazards only in out-of-order execution.</div><br><br><a href=\"https://gateoverflow.in/475143/go-classes-dpp-coa-pipelining-hamacher#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-coa-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/pipelining\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">COA - Pipelining</a></b></div></div>"
        }
    ]
});
