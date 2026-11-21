registerTest({
    "name": "DPP 01 - Operating System (Process Management & CPU Scheduling - Part 1)",
    "testLabel": "DPP 01",
    "testType": "DPP",
    "bracket": "Process Management & CPU Scheduling - Part 1",
    "subject": "os",
    "series": "cse-dpp-2027",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 11,
    "topicsCovered": "Process Management & CPU Scheduling (Practice Set 1)",
    "questions": [
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"58\" data-start=\"0\">Consider the following statements about operating systems:</p><p data-end=\"488\" data-start=\"464\">Which option is correct?</p><p><strong>Given Details:</strong></p><ul><li>Management of input/output operations allows peripheral devices to be shared among multiple processes.</li><li>Memory management depends on hardware support, particularly the MMU, for mechanisms such as partitioning, paging, and segmentation.</li><li>Time-sharing operating systems do not require interrupts for their implementation.</li><li>FIFO process scheduling is inherently preemptive.</li></ul></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">Only I and II are true</span>",
                "<span style=\"display: inline;\">Only I, II and III are true</span>",
                "<span style=\"display: inline;\">Only I, II and IV are true</span>",
                "<span style=\"display: inline;\">Only II and IV are true</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"546611\"></a><div itemprop=\"text\"><p data-end=\"1445\" data-start=\"1421\"><strong data-end=\"1445\" data-start=\"1421\">Statement I is true.</strong></p><p data-end=\"1576\" data-start=\"1447\">One of the OS's responsibilities is managing I/O devices so multiple processes can use shared peripherals in a controlled manner.</p><p data-end=\"1649\" data-start=\"1578\"><strong data-end=\"1602\" data-start=\"1578\">Statement II is true</strong> under the framing of the original examination.</p><p data-end=\"1799\" data-start=\"1651\">Hardware address-translation support, particularly the MMU, is central to implementing memory-management mechanisms such as paging and segmentation.</p><p data-end=\"1828\" data-start=\"1801\"><strong data-end=\"1828\" data-start=\"1801\">Statement III is false.</strong></p><p data-end=\"1915\" data-start=\"1830\">Time-sharing requires the operating system to regain control of the CPU periodically.</p><p data-end=\"1963\" data-start=\"1917\">A <strong data-end=\"1938\" data-start=\"1919\">timer interrupt</strong> provides this mechanism.</p><p data-end=\"2029\" data-start=\"1965\">Without it, a running process could retain the CPU indefinitely.</p><p data-end=\"2057\" data-start=\"2031\"><strong data-end=\"2057\" data-start=\"2031\">Statement IV is false.</strong></p><p data-end=\"2114\" data-start=\"2059\">FIFO or FCFS scheduling is normally <strong data-end=\"2113\" data-start=\"2095\">non-preemptive</strong>.</p><p data-end=\"2181\" data-start=\"2116\">Once selected, a process continues until it terminates or blocks.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/546610/go-classes-dpp-gate-cs-operating-system-os-resource-management\" target=\"_blank\">GATE Overflow #546610</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"100\" data-start=\"0\">Three processes enter the ready queue as follows. A <strong data-end=\"99\" data-start=\"52\">larger priority value means higher priority</strong>.</p><p data-end=\"343\" data-start=\"102\">$$\\begin{array}{|c|c|c|c|}<br/>\\hline<br/>\\text{Process} &amp; \\text{Arrival Time} &amp; \\text{Priority} &amp; \\text{CPU Time} \\\\<br/>\\hline<br/>P_1 &amp; 0\\text{ ms} &amp; 1 &amp; 60\\text{ ms} \\\\<br/>P_2 &amp; 20\\text{ ms} &amp; 10 &amp; 42\\text{ ms} \\\\<br/>P_3 &amp; 30\\text{ ms} &amp; 100 &amp; 13\\text{ ms} \\\\<br/>\\hline<br/>\\end{array}$$</p><p data-end=\"396\" data-start=\"345\">The system uses <strong data-end=\"395\" data-start=\"361\">preemptive priority scheduling</strong>.</p><p data-end=\"457\" data-start=\"398\">What is the average turnaround time of the three processes?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$60\\text{ ms}$<br/></span>",
                "<span style=\"display: inline;\">$61\\text{ ms}$<br/></span>",
                "<span style=\"display: inline;\">$70\\text{ ms}$<br/></span>",
                "<span style=\"display: inline;\">$71\\text{ ms}$</span>"
            ],
            "answer": "B",
            "solution": "<div class=\"solution-content\"><a name=\"546418\"></a><div itemprop=\"text\"><p data-end=\"599\" data-start=\"538\">At time $0$, only $P_1$ is available, so it starts executing.</p><p data-end=\"618\" data-start=\"601\">From $0$ to $20$:</p><p data-end=\"654\" data-start=\"620\">$P_1$ executes for $20\\text{ ms}$.</p><p data-end=\"682\" data-start=\"656\">Its remaining CPU time is:</p><p data-end=\"704\" data-start=\"684\">$60-20=40\\text{ ms}$</p><p data-end=\"819\" data-start=\"706\">At time $20$, $P_2$ arrives. Since its priority $10$ is higher than the priority $1$ of $P_1$, it preempts $P_1$.</p><p data-end=\"839\" data-start=\"821\">From $20$ to $30$:</p><p data-end=\"875\" data-start=\"841\">$P_2$ executes for $10\\text{ ms}$.</p><p data-end=\"903\" data-start=\"877\">Its remaining CPU time is:</p><p data-end=\"925\" data-start=\"905\">$42-10=32\\text{ ms}$</p><p data-end=\"997\" data-start=\"927\">At time $30$, $P_3$ arrives with priority $100$, so it preempts $P_2$.</p><p data-end=\"1032\" data-start=\"999\">$P_3$ executes from time $30$ to:</p><p data-end=\"1044\" data-start=\"1034\">$30+13=43$</p><p data-end=\"1081\" data-start=\"1046\">Thus, $P_3$ completes at time $43$.</p><p data-end=\"1192\" data-start=\"1083\">Next, $P_2$ has the highest priority among the remaining processes. It executes its remaining $32\\text{ ms}$:</p><p data-end=\"1204\" data-start=\"1194\">$43+32=75$</p><p data-end=\"1241\" data-start=\"1206\">Thus, $P_2$ completes at time $75$.</p><p data-end=\"1296\" data-start=\"1243\">Finally, $P_1$ executes its remaining $40\\text{ ms}$:</p><p data-end=\"1309\" data-start=\"1298\">$75+40=115$</p><p data-end=\"1347\" data-start=\"1311\">Thus, $P_1$ completes at time $115$.</p><p data-end=\"1372\" data-start=\"1349\">The turnaround time is:</p><p data-end=\"1441\" data-start=\"1374\">$\\text{Turnaround Time}=\\text{Completion Time}-\\text{Arrival Time}$</p><p data-end=\"1453\" data-start=\"1443\">Therefore:</p><p data-end=\"1637\" data-start=\"1455\">$$\\begin{array}{|c|c|c|c|}<br/>\\hline<br/>\\text{Process} &amp; \\text{Arrival} &amp; \\text{Completion} &amp; \\text{Turnaround} \\\\<br/>\\hline<br/>P_1 &amp; 0 &amp; 115 &amp; 115 \\\\<br/>P_2 &amp; 20 &amp; 75 &amp; 55 \\\\<br/>P_3 &amp; 30 &amp; 43 &amp; 13 \\\\<br/>\\hline<br/>\\end{array}$$</p><p data-end=\"1670\" data-start=\"1639\">The average turnaround time is :</p><p data-end=\"1693\" data-start=\"1672\">$\\dfrac{115+55+13}{3}=\\dfrac{183}{3}=61\\text{ ms}$</p><p data-end=\"1763\" data-start=\"1730\"><br/><strong>Answer :</strong> $\\boxed{61\\text{ ms}}$</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/546416/go-classes-dpp-gate-cs-operating-system-priority-scheduling\" target=\"_blank\">GATE Overflow #546416</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"117\" data-start=\"0\">Which of the following events may cause a process $\\text{P}$ to move from the <strong data-end=\"116\" data-start=\"78\">running state to the blocked state</strong>?</p><p data-end=\"322\" data-start=\"256\"> </p><p><strong>Given Details:</strong></p><ul><li>$\\text{P}$ attempts to read a file.</li><li>$\\text{P}s CPU time quantum expires.</li><li>$\\text{P}$ requests an I/O device.</li><li>$\\text{P}$ executes a semaphore $\\text{wait()}$ operation.</li></ul></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">I and IV only</span>",
                "<span style=\"display: inline;\">II and III only</span>",
                "<span style=\"display: inline;\">III and IV only</span>",
                "<span style=\"display: inline;\">I, III and IV only</span>"
            ],
            "answer": "D",
            "solution": "<div class=\"solution-content\"><a name=\"546114\"></a><div itemprop=\"text\"><p data-end=\"93\" data-start=\"0\">A process moves from <strong data-end=\"32\" data-start=\"21\">running</strong> to <strong data-end=\"47\" data-start=\"36\">blocked</strong> when it must wait for some event or resource.</p><p data-end=\"143\" data-start=\"95\"><strong>I can block.</strong></p><p data-end=\"290\" data-start=\"145\">If the required data is not immediately available, $\\text{P}$ must wait for the I/O operation to complete. Hence, it may enter the blocked state.</p><p data-end=\"345\" data-start=\"292\"><strong data-end=\"98\" data-start=\"76\">II does not block.</strong></p><p data-end=\"417\" data-start=\"347\">When the time quantum expires, the process is preempted and moved from $\\text{Running} \\rightarrow \\text{Ready}$ not to the blocked state.</p><p data-end=\"538\" data-start=\"489\"><strong data-end=\"253\" data-start=\"235\">III can block.</strong></p><p data-end=\"642\" data-start=\"540\">If the I/O device is busy or the operation takes time, $\\text{P}$ must wait, so it may become blocked.</p><p data-end=\"716\" data-start=\"644\"><strong data-end=\"366\" data-start=\"349\">IV can block.</strong></p><p data-end=\"840\" data-start=\"718\">If the semaphore is unavailable, $\\text{P}$ must wait until another process releases it. </p><p data-end=\"840\" data-start=\"718\">Therefore, it may become blocked.</p><p data-end=\"876\" data-start=\"842\"><br/><strong>Answer : D</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/546113/go-classes-dpp-gate-cs-operating-system-process-state-transitions\" target=\"_blank\">GATE Overflow #546113</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"34\" data-start=\"0\">A system uses two feedback queues:</p><p data-end=\"342\" data-start=\"310\">Initially both queues are empty.</p><p data-end=\"412\" data-start=\"344\">Processes $\\text{P1}$ and $\\text{P2}$ are created in that order.</p><p data-end=\"440\" data-start=\"414\">Their CPU burst times are:</p><ul><li data-end=\"489\" data-start=\"442\">$\\text{P1}$: $30$ ms<br/> </li><li data-end=\"489\" data-start=\"442\">$\\text{P2}$: $20$ ms</li></ul><p data-end=\"526\" data-start=\"491\">What is their average waiting time?</p><p><strong>Given Details:</strong></p><ul><li>$\\text{Q1}$: Round Robin with time quantum $10$ ms</li><li>$\\text{Q2}$: Shortest Job First</li><li>$\\text{Q1}$ has higher priority than $\\text{Q2}$</li><li>New processes enter $\\text{Q1}$</li><li>A process that does not finish after one quantum in $\\text{Q1}$ moves to $\\text{Q2}$</li></ul></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$25$ ms</span>",
                "<span style=\"display: inline;\">$20$ ms</span>",
                "<span style=\"display: inline;\">$15$ ms</span>",
                "<span style=\"display: inline;\">$10$ ms</span>"
            ],
            "answer": "C",
            "solution": "<div class=\"solution-content\"><a name=\"546056\"></a><div itemprop=\"text\"><p>Both first enter $\\text{Q1}$.</p><p>Schedule:</p><p>$0 - 10: \\text{P1}$</p><p>$\\text{P1}$ has $20$ ms remaining and moves to $\\text{Q2}$.</p><p>$10 - 20: \\text{P2}$</p><p>$\\text{P2}$ has $10$ ms remaining and moves to $\\text{Q2}$.</p><p>Now $\\text{Q1}$ is empty.</p><p>$\\text{Q2}$ uses SJF:</p><ul><li><p>$\\text{P2}$ remaining $= 10$ ms</p></li><li><p>$\\text{P1}$ remaining $= 20$ ms</p></li></ul><p>So,</p><p>$20 - 30: \\text{P2}$</p><p>$30 - 50: \\text{P1}$</p><p>Waiting time:</p><ul><li><p>$\\text{P1}$ waits from $10$ to $30 = 20$ ms</p></li><li><p>$\\text{P2}$ waits from $0$ to $10 = 10$ ms</p></li></ul><p><br/>Average $:(20 + 10) / 2 = 15$ ms</p><p><br/><strong>Answer : C</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/546054/go-classes-dpp-gate-cs-operating-system-feedback-queue-scheduling\" target=\"_blank\">GATE Overflow #546054</a></small></div>"
        },
        {
            "marks": 2,
            "neg": 0,
            "type": "MSQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider the following system:</p><p>$$\\begin{array}{|c|c|c|}<br/>\\hline<br/>\\text{Process} &amp; \\text{Allocation }(A,B,C,D) &amp; \\text{Max }(A,B,C,D) \\\\<br/>\\hline<br/>P_0 &amp; (0,0,1,2) &amp; (0,0,1,2) \\\\<br/>P_1 &amp; (1,0,0,0) &amp; (1,7,5,0) \\\\<br/>P_2 &amp; (1,3,5,4) &amp; (2,3,5,6) \\\\<br/>P_3 &amp; (0,6,3,2) &amp; (0,6,5,2) \\\\<br/>P_4 &amp; (0,0,1,4) &amp; (0,6,5,6) \\\\<br/>\\hline<br/>\\end{array}$$</p><p>Available: $(1,5,2,0)$</p><p>Which statements are correct?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\operatorname{Need}(P_1)=(0,7,5,0)$.<br/></span>",
                "<span style=\"display: inline;\">The current system state is safe.<br/></span>",
                "<span style=\"display: inline;\">If $P_1$ requests $(0,4,2,0)$, the request can be granted immediately under Banker's Algorithm.<br/></span>",
                "<span style=\"display: inline;\">After tentatively granting $(0,4,2,0)$ to $P_1$, $P_1$ itself can be the first process to complete in the safety test.</span>"
            ],
            "answer": [
                "A"
            ],
            "solution": "<div class=\"solution-content\"><a name=\"545026\"></a><div itemprop=\"text\"><p data-end=\"7254\" data-start=\"7246\">Compute, $\\mathrm{Need=Max-Allocation}$</p><p data-end=\"7290\" data-start=\"7280\">$$\\begin{array}{|c|c|}<br/>\\hline<br/>\\text{Process} &amp; \\text{Need} \\\\<br/>\\hline<br/>P_0 &amp; (0,0,0,0) \\\\<br/>P_1 &amp; (0,7,5,0) \\\\<br/>P_2 &amp; (1,0,0,2) \\\\<br/>P_3 &amp; (0,0,2,0) \\\\<br/>P_4 &amp; (0,6,4,2) \\\\<br/>\\hline<br/>\\end{array}$$</p><p data-end=\"7462\" data-start=\"7442\">So <strong data-end=\"7461\" data-start=\"7445\">A is correct</strong>.</p><p data-end=\"7492\" data-section-id=\"rli9kn\" data-start=\"7464\"><br/><strong>Check the original state</strong></p><p data-end=\"7500\" data-start=\"7494\">Start, $Work=(1,5,2,0)$</p><p data-end=\"7550\" data-start=\"7521\">$P_0$ can finish immediately.</p><p data-end=\"7564\" data-start=\"7552\">After $P_0$:</p><p data-end=\"7592\" data-start=\"7566\">$Work=(1,5,2,0)+(0,0,1,2)=(1,5,3,2)$.</p><p data-end=\"7638\" data-start=\"7609\">Now $P_2$ can finish because:</p><p data-end=\"7665\" data-start=\"7640\">$(1,0,0,2)\\leq(1,5,3,2)$.</p><p data-end=\"7679\" data-start=\"7667\">After $P_2$:</p><p data-end=\"7707\" data-start=\"7681\">$Work=(1,5,3,2)+(1,3,5,4)=(2,8,8,6)$.</p><p data-end=\"7783\" data-start=\"7724\">At this point the remaining processes can all be completed.</p><p data-end=\"7817\" data-start=\"7785\">Thus the original state is safe.</p><p data-end=\"7839\" data-start=\"7819\">So <strong data-end=\"7838\" data-start=\"7822\">B is correct</strong>.</p><p data-end=\"7868\" data-section-id=\"1909shr\" data-start=\"7846\"><br/><strong>Request from $P_1$</strong></p><p data-end=\"7892\" data-start=\"7870\">$Request_1=(0,4,2,0)$.</p><p data-end=\"7900\" data-start=\"7894\">First:</p><p data-end=\"7924\" data-start=\"7902\">$Request_1\\leq Need_1$</p><p data-end=\"7932\" data-start=\"7926\">since, $(0,4,2,0)\\leq(0,7,5,0)$.</p><p data-end=\"7966\" data-start=\"7961\">Also, $Request_1\\leq Available$</p><p data-end=\"8001\" data-start=\"7995\">since, $(0,4,2,0)\\leq(1,5,2,0)$.</p><p data-end=\"8063\" data-start=\"8030\">Now pretend to grant the request.</p><p data-end=\"8079\" data-start=\"8065\">New Available: $(1,5,2,0)-(0,4,2,0)=(1,1,0,0)$.</p><p data-end=\"8137\" data-start=\"8119\">New Need of $P_1$:</p><p data-end=\"8160\" data-start=\"8139\">$(0,7,5,0)-(0,4,2,0)=(0,3,3,0)$.</p><p data-end=\"8192\" data-start=\"8177\">At this moment:</p><p data-end=\"8220\" data-start=\"8194\">$(0,3,3,0)\\nleq(1,1,0,0)$.</p><p data-end=\"8255\" data-start=\"8222\">So <strong data-end=\"8254\" data-start=\"8225\">$P_1$ cannot finish first</strong>.</p><p data-end=\"8278\" data-start=\"8257\">Hence, <strong>D is false.</strong></p><p data-end=\"8331\" data-start=\"8280\">But $P_0$ has zero remaining need, so it completes:</p><p data-end=\"8359\" data-start=\"8333\">$Work=(1,1,0,0)+(0,0,1,2)=(1,1,1,2)$.</p><p data-end=\"8397\" data-start=\"8376\">Now $P_2$ can finish:</p><p data-end=\"8425\" data-start=\"8399\">$Work=(1,1,1,2)+(1,3,5,4)=(2,4,6,6)$</p><p data-end=\"8477\" data-start=\"8442\">Now the remaining need of $P_1$ is:</p><p data-end=\"8504\" data-start=\"8479\">$(0,3,3,0)\\leq(2,4,6,6)$.</p><p data-end=\"8565\" data-start=\"8506\">So $P_1$ can complete, followed by the remaining processes.</p><p data-end=\"8603\" data-start=\"8567\">A safe sequence exists, for eg:</p><p data-end=\"8671\" data-start=\"8605\">$P_0\\rightarrow P_2\\rightarrow P_1\\rightarrow P_3\\rightarrow P_4$.</p><p data-end=\"8714\" data-start=\"8673\">Therefore the request <strong data-end=\"8713\" data-start=\"8695\">can be granted</strong>.</p><p data-end=\"8732\" data-start=\"8716\">So <strong>C is correct.</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/545025/go-classes-dpp-gate-cs-operating-system-resource-request-check\" target=\"_blank\">GATE Overflow #545025</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"16\" data-start=\"0\">The instruction:</p><p data-end=\"43\" data-start=\"18\">$\\texttt{LOAD GR, B, AD}$</p><p data-end=\"240\" data-start=\"45\">adds the contents of base register $B$ to the address field $AD$. The resulting effective address is used to access main memory, and the data stored at that location is loaded into register $GR$.</p><p data-end=\"269\" data-start=\"242\">Base register $1$ contains : $100$</p><p data-end=\"316\" data-start=\"278\">The relevant main-memory contents are:</p><p data-end=\"545\" data-start=\"318\">$$\\begin{array}{|c|c|}<br/>\\hline<br/>\\text{Memory address} &amp; \\text{Stored value} \\\\<br/>\\hline<br/>100 &amp; 1100 \\\\<br/>101 &amp; 1101 \\\\<br/>200 &amp; 1200 \\\\<br/>201 &amp; 1201 \\\\<br/>300 &amp; 1300 \\\\<br/>301 &amp; 1301 \\\\<br/>1200 &amp; 2200 \\\\<br/>1201 &amp; 2201 \\\\<br/>1300 &amp; 2300 \\\\<br/>1301 &amp; 2301 \\\\<br/>\\hline<br/>\\end{array}$$</p><p data-end=\"630\" data-start=\"547\">What value is loaded into register $GR$ when the following instruction is executed?</p><p data-end=\"658\" data-start=\"632\">$\\texttt{LOAD GR, 1, 200}$<br/> </p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$1201$<br/></span>",
                "<span style=\"display: inline;\">$1300$<br/></span>",
                "<span style=\"display: inline;\">$2200$<br/></span>",
                "<span style=\"display: inline;\">$2300$</span>"
            ],
            "answer": "B",
            "solution": "<div class=\"solution-content\"><a name=\"542806\"></a><div itemprop=\"text\"><p data-end=\"5630\" data-start=\"5541\">The effective address is obtained by adding the address field to the base-register value:</p><p data-end=\"5663\" data-start=\"5632\">$\\text{Effective address}=AD+B$</p><p data-end=\"5670\" data-start=\"5665\">Here:</p><p data-end=\"5680\" data-start=\"5672\">$AD=200$</p><p data-end=\"5689\" data-start=\"5682\">$B=100$</p><p data-end=\"5701\" data-start=\"5691\">Therefore:</p><p data-end=\"5737\" data-start=\"5703\">$\\text{Effective address}=200+100=300$</p><p data-end=\"5796\" data-start=\"5747\">The value stored at main-memory address $300$ is:</p><p data-end=\"5823\" data-start=\"5798\">$\\text{Memory}[300]=1300$</p><p data-end=\"5859\" data-start=\"5825\">Therefore, register $GR$ receives: $1300$</p><p data-end=\"5898\" data-start=\"5869\"><br/><strong>Answer : B</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/542805/go-classes-dpp-gate-cs-operating-system-base-relative-addressing\" target=\"_blank\">GATE Overflow #542805</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"49\" data-start=\"0\">Consider the following table of active processes:</p><p data-end=\"185\" data-start=\"51\">$$\\begin{array}{|c|c|c|}<br/>\\hline<br/>\\text{Process} &amp; \\text{Base} &amp; \\text{Bound} \\\\<br/>\\hline<br/>A &amp; 100 &amp; 10 \\\\<br/>B &amp; 1000 &amp; 20 \\\\<br/>C &amp; 500 &amp; 50 \\\\<br/>\\hline<br/>\\end{array}$$</p><p data-end=\"375\" data-start=\"187\">Process $A$ is initially running on the CPU. The operating system performs a context switch from process $A$ to process $B$ and correctly loads the base and bound registers of process $B$.</p><p data-end=\"450\" data-start=\"377\">Which of the following physical addresses can process $B$ legally access?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$0$<br/></span>",
                "<span style=\"display: inline;\">$20$<br/></span>",
                "<span style=\"display: inline;\">$500$<br/></span>",
                "<span style=\"display: inline;\">$1015$</span>"
            ],
            "answer": "D",
            "solution": "<div class=\"solution-content\"><a name=\"542803\"></a><div itemprop=\"text\"><p data-end=\"3826\" data-start=\"3810\">For process $B$:</p><p data-end=\"3839\" data-start=\"3828\">$base=1000$</p><p data-end=\"3851\" data-start=\"3841\">$bound=20$</p><p data-end=\"3888\" data-start=\"3853\">The legal logical-address range is:</p><p data-end=\"3903\" data-start=\"3890\">$0\\leq LA&lt;20$</p><p data-end=\"3951\" data-start=\"3905\">Therefore, the possible logical addresses are:</p><p data-end=\"3970\" data-start=\"3953\">$0,1,2,\\ldots,19$</p><p data-end=\"4010\" data-start=\"3972\">The physical address is calculated as:</p><p data-end=\"4024\" data-start=\"4012\">$PA=base+LA$</p><p data-end=\"4059\" data-start=\"4026\">The smallest physical address is:</p><p data-end=\"4074\" data-start=\"4061\">$1000+0=1000$</p><p data-end=\"4108\" data-start=\"4076\">The largest physical address is:</p><p data-end=\"4124\" data-start=\"4110\">$1000+19=1019$</p><p data-end=\"4173\" data-start=\"4126\">Therefore, the legal physical-address range is:</p><p data-end=\"4193\" data-start=\"4175\">$1000\\leq PA&lt;1020$</p><p data-end=\"4216\" data-start=\"4195\">Checking the options:</p><ul data-end=\"4372\" data-start=\"4218\"><li data-end=\"4235\" data-section-id=\"jrzzvh\" data-start=\"4218\">$0$ is invalid.</li><li data-end=\"4254\" data-section-id=\"1ubjfxr\" data-start=\"4236\">$20$ is invalid.</li><li data-end=\"4274\" data-section-id=\"127e56g\" data-start=\"4255\">$500$ is invalid.</li><li data-end=\"4312\" data-section-id=\"ebhkj4\" data-start=\"4275\">$1015$ lies within the legal range.</li><li data-end=\"4372\" data-section-id=\"1xtvac3\" data-start=\"4313\">$1020$ is invalid because the upper boundary is excluded.</li></ul><p data-end=\"4403\" data-start=\"4374\"><br/><strong>Answer :</strong> <strong data-end=\"4419\" data-start=\"4405\">D</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/542802/go-classes-dpp-gate-cs-operating-system-legal-physical-address\" target=\"_blank\">GATE Overflow #542802</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"37\" data-start=\"0\">Consider the following segment table:</p><p data-end=\"209\" data-start=\"39\">$$\\begin{array}{|c|c|c|}<br/>\\hline<br/>\\text{Segment} &amp; \\text{Base} &amp; \\text{Limit} \\\\<br/>\\hline<br/>0 &amp; 219 &amp; 600 \\\\<br/>1 &amp; 2300 &amp; 14 \\\\<br/>2 &amp; 90 &amp; 100 \\\\<br/>3 &amp; 1327 &amp; 580 \\\\<br/>4 &amp; 1952 &amp; 96 \\\\<br/>\\hline<br/>\\end{array}$$</p><p data-end=\"304\" data-start=\"211\">In the process’s logical address space, the segments are arranged consecutively in the order:</p><p data-end=\"321\" data-start=\"306\">$0, 1, 2, 3, 4$</p><p data-end=\"383\" data-start=\"323\">What physical address corresponds to logical address $1000$?</p><p data-end=\"426\" data-is-last-node=\"\" data-is-only-node=\"\" data-start=\"385\"><em>(Enter the physical address as an integer.)</em></p></div></span>",
            "image": "",
            "options": [],
            "answer": "1613",
            "solution": "<div class=\"solution-content\"><a name=\"542800\"></a><div itemprop=\"text\"><p data-end=\"2380\" data-start=\"2320\">First, construct the logical-address ranges of the segments.</p><p data-end=\"2397\" data-section-id=\"tobxsl\" data-start=\"2382\"><strong>Segment $\\mathbf{0}$</strong></p><p data-end=\"2410\" data-start=\"2399\">Size $=600$</p><p data-end=\"2426\" data-start=\"2412\">Logical range:</p><p data-end=\"2440\" data-start=\"2428\">$0$ to $599$</p><p data-end=\"2457\" data-section-id=\"tobxtg\" data-start=\"2442\"><strong>Segment $\\mathbf{1}$</strong></p><p data-end=\"2469\" data-start=\"2459\">Size $=14$</p><p data-end=\"2485\" data-start=\"2471\">Logical range:</p><p data-end=\"2501\" data-start=\"2487\">$600$ to $613$</p><p data-end=\"2518\" data-section-id=\"tobxuf\" data-start=\"2503\"><strong>Segment $\\mathbf{2}$</strong></p><p data-end=\"2531\" data-start=\"2520\">Size $=100$</p><p data-end=\"2547\" data-start=\"2533\">Logical range:</p><p data-end=\"2563\" data-start=\"2549\">$614$ to $713$</p><p data-end=\"2580\" data-section-id=\"tobxva\" data-start=\"2565\"><strong>Segment $\\mathbf{3}$</strong></p><p data-end=\"2593\" data-start=\"2582\">Size $=580$</p><p data-end=\"2609\" data-start=\"2595\">Logical range:</p><p data-end=\"2626\" data-start=\"2611\">$714$ to $1293$</p><p data-end=\"2671\" data-start=\"2628\">Logical address $1000$ lies in segment $3$.</p><p data-end=\"2720\" data-start=\"2673\">The logical starting address of segment $3$ is $:714$</p><p data-end=\"2773\" data-start=\"2729\">Therefore, the offset inside segment $3$ is:</p><p data-end=\"2799\" data-start=\"2775\">$\\text{Offset}=1000-714=286$</p><p data-end=\"2843\" data-start=\"2809\">The limit of segment $3$ is $580$.</p><p data-end=\"2851\" data-start=\"2845\">Since:</p><p data-end=\"2862\" data-start=\"2853\">$286&lt;580$</p><p data-end=\"2885\" data-start=\"2864\">the address is valid.</p><p data-end=\"2911\" data-start=\"2887\">The physical address is:</p><p data-end=\"2977\" data-start=\"2913\">$\\text{Physical address}=\\text{Base of segment 3}+\\text{Offset}$</p><p data-end=\"2990\" data-start=\"2979\">$=1327+286=1613$</p><p data-end=\"3022\" data-start=\"3001\"><br/><strong>Answer</strong> $: 1613$</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/542799/go-classes-dpp-gate-cs-operating-system-segment-translation\" target=\"_blank\">GATE Overflow #542799</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"1252\" data-start=\"1195\">Four processes arrive at time $0$ in the following order:</p><p data-end=\"1277\" data-start=\"1254\">$P_1,\\ P_2,\\ P_3,\\ P_4$</p><p data-end=\"1305\" data-start=\"1279\">Their CPU burst times are:</p><p data-end=\"1314\" data-start=\"1307\">$P_1=8$</p><p data-end=\"1323\" data-start=\"1316\">$P_2=4$</p><p data-end=\"1332\" data-start=\"1325\">$P_3=2$</p><p data-end=\"1341\" data-start=\"1334\">$P_4=1$</p><p data-end=\"1488\" data-start=\"1343\">Calculate the difference between the average waiting time under FCFS scheduling and the average waiting time under non-preemptive SJF scheduling.</p><p data-end=\"1531\" data-start=\"1490\"><em>Give the answer up to two decimal places.</em></p></div></span>",
            "image": "",
            "options": [],
            "answer": "5.75",
            "solution": "<div class=\"solution-content\"><a name=\"542778\"></a><div itemprop=\"text\"><p><strong>Using FCFS scheduling:</strong></p><p><span class=\"math-tex\" data-latex=\"|^{0} P1 |^{8} P2 |^{12} P3 |^{14} P4 |^{15}\">$|^{0} P1 |^{8} P2 |^{12} P3 |^{14} P4 |^{15}$</span></p><p><span class=\"math-tex\" data-latex=\"|^{0} P1 |^{8} P2 |^{12} P3 |^{14} P4 |^{15}\">Average waiting time = (0+8+12+14)/4 = 8.5</span></p><p><span class=\"math-tex\" data-latex=\"|^{0} P1 |^{8} P2 |^{12} P3 |^{14} P4 |^{15}\"><strong>Using non-preemptive SJF scheduling :</strong></span></p><p><span class=\"math-tex\" data-latex=\"|^{0} P1 |^{8} P2 |^{12} P3 |^{14} P4 |^{15}\">$|^{0} P4 |^{1} P3 |^{3} P2 |^{7} P1 |^{15}$</span></p><p><span class=\"math-tex\" data-latex=\"|^{0} P1 |^{8} P2 |^{12} P3 |^{14} P4 |^{15}\">Average waiting time = (0+1+3+7)/4 = 2.75</span></p><p><span class=\"math-tex\" data-latex=\"|^{0} P1 |^{8} P2 |^{12} P3 |^{14} P4 |^{15}\">So, difference between average waiting time of both : 8.5 - 2.75 = <strong>5.75</strong></span></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/542698/go-classes-dpp-gate-cs-operating-system-cpu-scheduling\" target=\"_blank\">GATE Overflow #542698</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Match the following</p><p>$$<br/>\\begin{array}{ll}<br/>\\text{I. FCFS} &amp; \\text{i. Optimal Waiting Time} \\\\<br/>\\text{II. SJF} &amp; \\text{ii. Convoy effect} \\\\<br/>\\text{III. Round Robin} &amp; \\text{iii. Not practical} \\\\<br/>\\text{IV. SRTF} &amp; \\text{iv. No Starvation}<br/>\\end{array}<br/>$$</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\text{I - ii, II - i, III - iv, IV - iii}$<br/></span>",
                "<span style=\"display: inline;\">$\\text{I - i, II - ii, III - iv, IV - iii}$<br/></span>",
                "<span style=\"display: inline;\">$\\text{I - iii, II - i, III - iv, IV - ii}$<br/></span>",
                "<span style=\"display: inline;\">$\\text{I - iii, II - iv, III - i, IV - i}$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"540971\"></a><div itemprop=\"text\"><p data-end=\"4987\" data-start=\"4978\"><strong>For FCFS:</strong></p><p data-end=\"5088\" data-start=\"4989\">A long process may make several short processes wait behind it. This is known as the convoy effect.</p><p data-end=\"5100\" data-start=\"5090\">$\\therefore \\mathrm{I \\rightarrow ii}$</p><p data-end=\"5130\" data-start=\"5122\"><strong>For SJF:</strong></p><p data-end=\"5272\" data-start=\"5132\">SJF selects the process with the shortest CPU burst first and gives the minimum average waiting time for a given set of available processes.</p><p data-end=\"5284\" data-start=\"5274\">$\\therefore \\mathrm{II \\rightarrow i}$</p><p data-end=\"5322\" data-start=\"5306\"><strong>For Round Robin:</strong></p><p data-end=\"5467\" data-start=\"5324\">Every ready process gets CPU time in cyclic order. Therefore, a ready process does not wait indefinitely under standard Round Robin scheduling.</p><p data-end=\"5479\" data-start=\"5469\">$\\therefore \\mathrm{III \\rightarrow iv}$</p><p data-end=\"5512\" data-start=\"5503\"><strong>For SRTF:</strong></p><p data-end=\"5649\" data-start=\"5514\">SRTF requires knowledge or prediction of the remaining CPU burst time. Exact future CPU burst times are generally not known in advance.</p><p data-end=\"5661\" data-start=\"5651\">$\\therefore \\mathrm{IV \\rightarrow iii}$</p><p data-end=\"5716\" data-start=\"5685\"><br/>Hence, the correct matching is:</p><p data-end=\"5749\" data-start=\"5718\">$\\therefore \\mathrm{I-ii,\\ II-i,\\ III-iv,\\ IV-iii}$</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/540970/go-classes-dpp-gate-cs-operating-system-scheduling\" target=\"_blank\">GATE Overflow #540970</a></small></div>"
        }
    ]
});

registerTest({
    "name": "DPP 02 - Operating System (Process Management & CPU Scheduling - Part 2)",
    "testLabel": "DPP 02",
    "testType": "DPP",
    "bracket": "Process Management & CPU Scheduling - Part 2",
    "subject": "os",
    "series": "cse-dpp-2027",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 13,
    "topicsCovered": "Process Management & CPU Scheduling (Practice Set 2)",
    "questions": [
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>$4$ processes $A,B,C,D$ have estimated burst times of $4,~5,~6,~7$ $\\text{ns}$ respectively. They are scheduled in round robin fashion and the time slice is of $2$ $\\text{ns}$. The processes $A,B,C,D$ arrive at the $0,~0.5,~1,~1.5$ $\\text{ns}$ respectively. The order in which the processes are completed.</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$B,A,C,D$<br/></span>",
                "<span style=\"display: inline;\">$D,A,B,C$<br/></span>",
                "<span style=\"display: inline;\">$A,B,D,C$<br/></span>",
                "<span style=\"display: inline;\">$A,B,C,D$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"540969\"></a><div itemprop=\"text\"><p data-end=\"3726\" data-start=\"3706\">The time quantum is:</p><p data-end=\"3736\" data-start=\"3728\">$q=2$ ns</p><p data-end=\"3770\" data-start=\"3738\">At $t=0$, only $A$ is available.</p><p data-end=\"3791\" data-start=\"3772\">$A:0 \\rightarrow 2$</p><p data-end=\"3821\" data-start=\"3793\">Remaining burst time of $A$:</p><p data-end=\"3830\" data-start=\"3823\">$4-2=2$</p><p data-end=\"3879\" data-start=\"3832\">During this interval, $B$, $C$, and $D$ arrive.</p><p data-end=\"3905\" data-start=\"3881\">The ready queue becomes:</p><p data-end=\"3916\" data-start=\"3907\">$B,C,D,A$</p><p data-end=\"3922\" data-start=\"3918\">Now,</p><p data-end=\"3943\" data-start=\"3924\">$B:2 \\rightarrow 4$</p><p data-end=\"3974\" data-start=\"3945\">Remaining burst time of $B=3$</p><p data-end=\"3995\" data-start=\"3976\">$C:4 \\rightarrow 6$</p><p data-end=\"4026\" data-start=\"3997\">Remaining burst time of $C=4$</p><p data-end=\"4047\" data-start=\"4028\">$D:6 \\rightarrow 8$</p><p data-end=\"4078\" data-start=\"4049\">Remaining burst time of $D=5$</p><p data-end=\"4100\" data-start=\"4080\">$A:8 \\rightarrow 10$</p><p data-end=\"4116\" data-start=\"4102\">$A$ completes.</p><p data-end=\"4123\" data-start=\"4118\">Next,</p><p data-end=\"4146\" data-start=\"4125\">$B:10 \\rightarrow 12$</p><p data-end=\"4177\" data-start=\"4148\">Remaining burst time of $B=1$</p><p data-end=\"4200\" data-start=\"4179\">$C:12 \\rightarrow 14$</p><p data-end=\"4231\" data-start=\"4202\">Remaining burst time of $C=2$</p><p data-end=\"4254\" data-start=\"4233\">$D:14 \\rightarrow 16$</p><p data-end=\"4285\" data-start=\"4256\">Remaining burst time of $D=3$</p><p data-end=\"4308\" data-start=\"4287\">$B:16 \\rightarrow 17$</p><p data-end=\"4324\" data-start=\"4310\">$B$ completes.</p><p data-end=\"4347\" data-start=\"4326\">$C:17 \\rightarrow 19$</p><p data-end=\"4363\" data-start=\"4349\">$C$ completes.</p><p data-end=\"4386\" data-start=\"4365\">$D:19 \\rightarrow 21$</p><p data-end=\"4417\" data-start=\"4388\">Remaining burst time of $D=1$</p><p data-end=\"4440\" data-start=\"4419\">$D:21 \\rightarrow 22$</p><p data-end=\"4456\" data-start=\"4442\">$D$ completes.</p><p data-end=\"4505\" data-start=\"4458\">Therefore, the processes complete in the order:</p><p data-end=\"4552\" data-start=\"4507\">$A \\rightarrow B \\rightarrow C \\rightarrow D$</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/540968/go-classes-dpp-gate-cs-operating-system-round-robin-scheduling\" target=\"_blank\">GATE Overflow #540968</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Which of the following statements is false for Round Robin (RR) process scheduling?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">RR is suitable for a time-sharing system<br/></span>",
                "<span style=\"display: inline;\">RR is a preemptive scheduling algorithm<br/></span>",
                "<span style=\"display: inline;\">Its turnaround time does not depend on the time quantum<br/></span>",
                "<span style=\"display: inline;\">In case of RR algorithm, the priority of all the processes are same</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"540967\"></a><div itemprop=\"text\"><p data-end=\"2697\" data-start=\"2675\">Statement (A) is true.</p><p data-end=\"2803\" data-start=\"2699\">Round Robin is suitable for time-sharing systems because every ready process gets CPU time periodically.</p><p data-end=\"2827\" data-start=\"2805\">Statement (B) is true.</p><p data-end=\"2982\" data-start=\"2829\">Round Robin is a preemptive scheduling algorithm. When the time quantum expires, the running process can be preempted and placed back in the ready queue.</p><p data-end=\"3007\" data-start=\"2984\">Statement (C) is false.</p><p data-end=\"3157\" data-start=\"3009\">The turnaround time depends on the time quantum because changing the quantum can change the execution pattern and completion times of the processes.</p><p data-end=\"3181\" data-start=\"3159\">Statement (D) is true.</p><p data-end=\"3282\" data-start=\"3183\">In standard Round Robin scheduling, all processes are treated equally and are scheduled cyclically.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/540966/go-classes-dpp-gate-cs-operating-system-round-robin-scheduling\" target=\"_blank\">GATE Overflow #540966</a></small></div>"
        },
        {
            "marks": 2,
            "neg": 0,
            "type": "MSQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Which of the following statements is/are true?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">The performance of the Round Robin scheduling algorithm depends on the size of the time quantum.<br/></span>",
                "<span style=\"display: inline;\">If the time quantum is extremely small, Round Robin algorithm for scheduling can result in a large number of context switches.<br/></span>",
                "<span style=\"display: inline;\">A large time quantum can make Round Robin behave more like First-Come, First-Served (FCFS).<br/></span>",
                "<span style=\"display: inline;\">All of the above statements</span>"
            ],
            "answer": [
                "A"
            ],
            "solution": "<div class=\"solution-content\"><a name=\"540964\"></a><div itemprop=\"text\"><p data-end=\"1758\" data-start=\"1736\">Statement (A) is true.</p><p data-end=\"1839\" data-start=\"1760\">The performance of Round Robin depends greatly on the size of the time quantum.</p><p data-end=\"1863\" data-start=\"1841\">Statement (B) is true.</p><p data-end=\"2015\" data-start=\"1865\">If the time quantum is very small, processes are preempted very frequently. This results in a large number of context switches and increases overhead.</p><p data-end=\"2039\" data-start=\"2017\">Statement (C) is true.</p><p data-end=\"2120\" data-start=\"2041\">As the time quantum becomes larger, each process gets more continuous CPU time.</p><p data-end=\"2195\" data-start=\"2122\">If the time quantum is sufficiently large, Round Robin behaves like FCFS.</p><p data-end=\"2236\" data-start=\"2197\">Therefore, all the statements are true.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/540963/go-classes-dpp-gate-cs-operating-system-round-robin-scheduling\" target=\"_blank\">GATE Overflow #540963</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider the following five processes: </p><p>$$<br/>\\begin{array}{|c|c|c|c|}<br/>\\hline<br/>\\text{Process} &amp; \\text{Arrival Time} &amp; \\text{Burst Time} &amp; \\text{Priority} \\\\<br/>\\hline<br/>P_1 &amp; 0 &amp; 4 &amp; 1 \\\\<br/>P_2 &amp; 1 &amp; 3 &amp; 2 \\\\<br/>P_3 &amp; 2 &amp; 1 &amp; 3 \\\\<br/>P_4 &amp; 3 &amp; 5 &amp; 4 \\\\<br/>P_5 &amp; 4 &amp; 2 &amp; 5 \\\\<br/>\\hline<br/>\\end{array}<br/>$$ <br/>The scheduling policy is non-preemptive priority scheduling. </p><p>A larger priority value means higher priority. What is the average turnaround time?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$7.0$ <br/></span>",
                "<span style=\"display: inline;\">$7.6$ <br/></span>",
                "<span style=\"display: inline;\">$8.6$ <br/></span>",
                "<span style=\"display: inline;\">$9.6$</span>"
            ],
            "answer": "B",
            "solution": "<div class=\"solution-content\"><a name=\"540962\"></a><div itemprop=\"text\"><p data-end=\"571\" data-start=\"516\">At $t=0$, only $P_1$ is available, so it executes first.</p><p data-end=\"594\" data-start=\"573\">$P_1: 0 \\rightarrow 4$</p><p data-end=\"647\" data-start=\"596\">At $t=4$, all the remaining processes have arrived.</p><p data-end=\"704\" data-start=\"649\">Since larger value means higher priority, the order is:</p><p data-end=\"755\" data-start=\"706\">$P_5 \\rightarrow P_4 \\rightarrow P_3 \\rightarrow P_2$</p><p data-end=\"796\" data-start=\"757\">Hence, the complete execution order is:</p><p data-end=\"862\" data-start=\"798\">$P_1 \\rightarrow P_5 \\rightarrow P_4 \\rightarrow P_3 \\rightarrow P_2$</p><p data-end=\"885\" data-start=\"864\">Completion times are:</p><p data-end=\"898\" data-start=\"887\">$CT_{P_1}=4$</p><p data-end=\"911\" data-start=\"900\">$CT_{P_5}=6$</p><p data-end=\"925\" data-start=\"913\">$CT_{P_4}=11$</p><p data-end=\"939\" data-start=\"927\">$CT_{P_3}=12$</p><p data-end=\"953\" data-start=\"941\">$CT_{P_2}=15$</p><p data-end=\"974\" data-start=\"955\">Turnaround time is:</p><p data-end=\"987\" data-start=\"976\">$TAT=CT-AT$</p><p data-end=\"999\" data-start=\"989\">Therefore,</p><p data-end=\"1017\" data-start=\"1001\">$TAT_{P_1}=4-0=4$</p><p data-end=\"1037\" data-start=\"1019\">$TAT_{P_2}=15-1=14$</p><p data-end=\"1057\" data-start=\"1039\">$TAT_{P_3}=12-2=10$</p><p data-end=\"1076\" data-start=\"1059\">$TAT_{P_4}=11-3=8$</p><p data-end=\"1094\" data-start=\"1078\">$TAT_{P_5}=6-4=2$</p><p data-end=\"1120\" data-start=\"1096\"><br/>Average turnaround time:</p><p data-end=\"1164\" data-start=\"1122\">$\\text{Average TAT}=\\dfrac{4+14+10+8+2}{5}=\\dfrac{38}{5}=\\boxed{7.6}$</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/540949/go-classes-dpp-gate-cs-operating-system-priority-scheduling\" target=\"_blank\">GATE Overflow #540949</a></small></div>"
        },
        {
            "marks": 2,
            "neg": 0,
            "type": "MSQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"8320\" data-start=\"8248\">Which of the following statements about priority scheduling are correct?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">Priority scheduling can behave like SJF if the predicted CPU burst time is used as the priority.<br/></span>",
                "<span style=\"display: inline;\">A low-priority process can suffer starvation if higher-priority processes continue to be preferred.<br/></span>",
                "<span style=\"display: inline;\">Aging gradually improves the priority of a process as it waits longer.<br/></span>",
                "<span style=\"display: inline;\">Aging solves starvation by continuously decreasing the priority of waiting processes.</span>"
            ],
            "answer": [
                "A"
            ],
            "solution": "<div class=\"solution-content\"><a name=\"540877\"></a><div itemprop=\"text\"><p data-end=\"8789\" data-start=\"8760\"><strong data-end=\"8789\" data-start=\"8760\">Statement (A) is correct.</strong></p><p data-end=\"8978\" data-start=\"8791\">Priority scheduling is a general mechanism. If priority is assigned according to predicted CPU burst length, shorter predicted jobs receive higher preference, producing SJF-like behavior.</p><p data-end=\"9009\" data-start=\"8980\"><strong data-end=\"9009\" data-start=\"8980\">Statement (B) is correct.</strong></p><p data-end=\"9170\" data-start=\"9011\">A low-priority process may remain indefinitely in the ready queue if higher-priority work continues to arrive and execute. This condition is called starvation.</p><p data-end=\"9201\" data-start=\"9172\"><strong data-end=\"9201\" data-start=\"9172\">Statement (C) is correct.</strong></p><p data-end=\"9316\" data-start=\"9203\">Aging prevents indefinite waiting by gradually improving the priority of a process the longer it remains waiting.</p><p data-end=\"9349\" data-start=\"9318\"><strong data-end=\"9349\" data-start=\"9318\">Statement (D) is incorrect.</strong></p><p data-end=\"9464\" data-start=\"9351\">Aging does not make waiting processes less important. It does the opposite by improving their priority over time.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/540876/go-classes-dpp-gate-cs-operating-system-priority-scheduling\" target=\"_blank\">GATE Overflow #540876</a></small></div>"
        },
        {
            "marks": 2,
            "neg": 0,
            "type": "MSQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"6365\" data-start=\"6319\">Which of the following statements are correct?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">LJF is a non-preemptive scheduling policy that selects the ready job with the largest original CPU burst.<br/></span>",
                "<span style=\"display: inline;\">LRTF is a preemptive scheduling policy that selects the process having the largest remaining processing time.<br/></span>",
                "<span style=\"display: inline;\">In LJF, if a new process with a larger burst time arrives, it immediately preempts the currently running process.<br/></span>",
                "<span style=\"display: inline;\">LRTF always selects the process with the smallest remaining CPU burst.</span>"
            ],
            "answer": [
                "A"
            ],
            "solution": "<div class=\"solution-content\"><a name=\"540875\"></a><div itemprop=\"text\"><p data-end=\"6875\" data-start=\"6846\"><strong data-end=\"6875\" data-start=\"6846\">Statement (A) is correct.</strong></p><p data-end=\"6944\" data-start=\"6877\">LJF selects the job having the largest original size or burst time.</p><p data-end=\"7059\" data-start=\"6946\">It is non-preemptive. Once a process begins execution, it is not interrupted merely because a larger job arrives.</p><p data-end=\"7090\" data-start=\"7061\"><strong data-end=\"7090\" data-start=\"7061\">Statement (B) is correct.</strong></p><p data-end=\"7209\" data-start=\"7092\">LRTF, called LRPT in the source, gives preemptive priority to the process with the largest remaining processing time.</p><p data-end=\"7242\" data-start=\"7211\"><strong data-end=\"7242\" data-start=\"7211\">Statement (C) is incorrect.</strong></p><p data-end=\"7348\" data-start=\"7244\">LJF is non-preemptive. A newly arriving larger process does not preempt the currently executing process.</p><p data-end=\"7381\" data-start=\"7350\"><strong data-end=\"7381\" data-start=\"7350\">Statement (D) is incorrect.</strong></p><p data-end=\"7442\" data-start=\"7383\">Selecting the smallest remaining burst corresponds to SRTF.</p><p data-end=\"7510\" data-start=\"7444\">LRTF does the opposite and selects the <strong data-end=\"7509\" data-start=\"7483\">largest remaining time</strong>.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/540874/go-classes-dpp-gate-cs-operating-system-ljf-%26-lrtf-scheduling\" target=\"_blank\">GATE Overflow #540874</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"4518\" data-start=\"4431\">Five CPU-bound jobs $A,B,C,D,E$ arrive at approximately the same time with burst times:</p><p>\\[<br/>\\begin{array}{c|c}<br/>\\text{Job} &amp; \\text{Burst Time} \\\\<br/>\\hline<br/>A &amp; 10 \\\\<br/>B &amp; 6 \\\\<br/>C &amp; 2 \\\\<br/>D &amp; 4 \\\\<br/>E &amp; 8<br/>\\end{array}<br/>\\]</p><p data-end=\"4744\" data-start=\"4614\">The system uses <strong data-end=\"4656\" data-start=\"4630\">Round Robin scheduling</strong> with a time quantum much smaller than the shortest job. Ignore context-switch overhead.</p><p data-end=\"4841\" data-start=\"4746\">Treating the small-quantum behavior as processor sharing, what is the <strong data-end=\"4840\" data-start=\"4816\">mean turnaround time</strong>?</p></div></span>",
            "image": "",
            "options": [],
            "answer": "22",
            "solution": "<div class=\"solution-content\"><a name=\"543184\"></a><div itemprop=\"text\"><p><img alt=\"\" src=\"https://gateoverflow.in/?qa=blob&amp;qa_blobid=6737317396854458977\" style=\"max-width: 100%;\" width=\"853\"/></p><p>When the <strong data-end=\"64\" data-start=\"10\">time quantum is much smaller than the shortest job</strong>, Round Robin behaves like <strong data-end=\"117\" data-start=\"91\">Processor Sharing (PS)</strong>.<br/>Answer is 22</p><p> </p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/540871/go-classes-dpp-gate-cs-operating-system-round-robin-scheduling\" target=\"_blank\">GATE Overflow #540871</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"2893\" data-start=\"2842\">Three processes have the following CPU burst times:</p><p data-end=\"2902\" data-start=\"2895\">$P_1=7$</p><p data-end=\"2911\" data-start=\"2904\">$P_2=1$</p><p data-end=\"2921\" data-start=\"2913\">$P_3=16$</p><p data-end=\"3008\" data-start=\"2923\">At time $0$, only $P_1$ and $P_3$ are ready. Process $P_2$ becomes ready at time $2$.</p><p data-end=\"3107\" data-start=\"3010\">If <strong data-end=\"3046\" data-start=\"3013\">Shortest Remaining Time First</strong> scheduling is used, what is the <strong data-end=\"3106\" data-start=\"3079\">average turnaround time</strong>?</p></div></span>",
            "image": "",
            "options": [],
            "answer": "11",
            "solution": "<div class=\"solution-content\"><a name=\"540883\"></a><div itemprop=\"text\"><table style=\"width:100%;border-collapse:collapse;\"><thead><tr><th style=\"border:1px solid #ccc;padding:8px 12px;background:#f0f0f0;font-weight:bold;text-align:left;\">P1</th><th style=\"border:1px solid #ccc;padding:8px 12px;background:#f0f0f0;font-weight:bold;text-align:left;\">P2</th><th style=\"border:1px solid #ccc;padding:8px 12px;background:#f0f0f0;font-weight:bold;text-align:left;\">P1</th><th style=\"border:1px solid #ccc;padding:8px 12px;background:#f0f0f0;font-weight:bold;text-align:left;\">P3</th></tr></thead><tbody></tbody></table><p>0 2 3 8 24<br/><br/>P1, P3 arrived at time 0<br/>P1 starts executing, because it has lower CPU burst time than P3. It will execute for 2 units, because P2 will enter at time 2. So, P1 will be preempted.<br/> <br/>P2 enters at time 2<br/>P2 completes it Burst time because it is the process with the lowest burst time among all the processes. <br/><br/>Again P1 will start executing at time 3 and completes its execution at time 8. <br/><br/>Now P3 starts executing at time 8 and completes its execution at time 24. <br/><br/>Average or mean turn around time = (24+8+1)/3 = 11<br/>Ans = 11</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/540870/go-classes-dpp-gate-cs-operating-system-srtf-scheduling\" target=\"_blank\">GATE Overflow #540870</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"1039\" data-start=\"967\">Consider the following processes. All processes arrive at the same time.</p><p data-end=\"1039\" data-start=\"967\">\\[<br/>\\begin{array}{c|c|c}<br/>\\text{Process} &amp; \\text{Burst Time} &amp; \\text{Priority} \\\\<br/>\\hline<br/>P_1 &amp; 10 &amp; 3 \\\\<br/>P_2 &amp; 1 &amp; 1 \\\\<br/>P_3 &amp; 2 &amp; 4 \\\\<br/>P_4 &amp; 1 &amp; 5 \\\\<br/>P_5 &amp; 5 &amp; 2<br/>\\end{array}<br/>\\]</p><p data-end=\"1292\" data-start=\"1185\">A smaller priority number represents a higher priority. For FCFS, a lower process number is selected first.</p><p data-end=\"1358\" data-start=\"1294\">Which tuple correctly gives the <strong data-end=\"1351\" data-start=\"1326\">average waiting times</strong> under:</p><p data-end=\"1385\" data-start=\"1360\">$\\text{(FCFS,\\ SJF,\\ Priority)}$</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$(9.6,\\ 3.2,\\ 8.2)$<br/></span>",
                "<span style=\"display: inline;\">$(8.2,\\ 3.2,\\ 9.6)$<br/></span>",
                "<span style=\"display: inline;\">$(9.6,\\ 8.2,\\ 3.2)$<br/></span>",
                "<span style=\"display: inline;\">$(8.2,\\ 9.6,\\ 3.2)$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"540935\"></a><div itemprop=\"text\"><p>OPTION A (correct Answer)<img alt=\"\" src=\"https://gateoverflow.in/?qa=blob&amp;qa_blobid=13568147058840665239\"/></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/540869/go-classes-dpp-gate-cs-operating-system-scheduling\" target=\"_blank\">GATE Overflow #540869</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"8221\" data-start=\"8177\">A system has two processes, $P_1$ and $P_2$.</p><p data-end=\"8452\" data-start=\"8422\">Consider the following events:</p><p data-end=\"8955\" data-start=\"8909\">Which sequence correctly describes the events?</p><ol start=\"1\" style=\"list-style-type: upper-alpha;\"><li data-end=\"8972\" data-start=\"8957\">$3,1,4,5,7$<br/> </li><li data-end=\"8989\" data-start=\"8974\">$3,4,1,7,5$<br/> </li><li data-end=\"9006\" data-start=\"8991\">$1,3,5,4,7$<br/> </li><li data-end=\"9023\" data-start=\"9008\">$3,1,5,4,6$</li></ol><p><strong>Given Details:</strong></p><ul><li>$P_1$ is currently running.</li><li>$P_2$ is ready.</li><li>The operating system uses preemptive Round Robin scheduling.</li><li>$P_1s scheduling quantum is about to expire.</li><li>$P_2$ will be selected to run next.</li></ul></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$P_1$'s user-level state is saved into a trap frame.</span>",
                "<span style=\"display: inline;\">$P_2$'s user-level state is saved into a trap frame.</span>",
                "<span style=\"display: inline;\">A timer interrupt occurs.</span>",
                "<span style=\"display: inline;\">The operating system scheduler runs.</span>",
                "<span style=\"display: inline;\">A context switch occurs from the thread of $P_1$ to the thread of $P_2$.</span>",
                "<span style=\"display: inline;\">$P_1$'s user-level state is restored.</span>",
                "<span style=\"display: inline;\">$P_2$'s user-level state is restored.</span>",
                "<span style=\"display: inline;\">A system-call instruction is executed.</span>",
                "<span style=\"display: inline;\">The thread of $P_2$ is created.</span>",
                "<span style=\"display: inline;\">The thread of $P_1$ is destroyed.</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"540755\"></a><div itemprop=\"text\"><p data-end=\"1200\" data-start=\"1153\">Initially, $P_1$ is running and $P_2$ is ready.</p><p data-end=\"1278\" data-start=\"1202\">When the time quantum of $P_1$ expires, the following events occur in order:</p><p data-end=\"1320\" data-start=\"1280\">First, the timer generates an interrupt.</p><p data-end=\"1350\" data-start=\"1322\">$3.$ Timer interrupt occurs.</p><p data-end=\"1440\" data-start=\"1352\"><br/>The current user-level state of $P_1$ must then be saved so that $P_1$ can resume later.</p><p data-end=\"1499\" data-start=\"1442\">$1.$ $P_1$'s user-level state is saved into a trap frame.</p><p data-end=\"1570\" data-start=\"1501\"><br/>The operating system scheduler now runs and selects the next process.</p><p data-end=\"1613\" data-start=\"1572\">$4.$ The operating system scheduler runs.</p><p data-end=\"1684\" data-start=\"1615\"><br/>Since $P_2$ is selected, a context switch occurs from $P_1$ to $P_2$.</p><p data-end=\"1726\" data-start=\"1686\">$5.$ Context switch from $P_1$ to $P_2$.</p><p data-end=\"1817\" data-start=\"1728\"><br/>Finally, the saved user-level state of $P_2$ is restored so that it can resume execution.</p><p data-end=\"1861\" data-start=\"1819\">$7.$ $P_2$'s user-level state is restored.</p><p data-end=\"1898\" data-start=\"1863\"><br/> </p><p style=\"text-align:center\"><img alt=\"\" height=\"373\" src=\"https://cdn.mathpix.com/snip/images/ritlJAkqxiSpg7jcEJthome4tDHqcx2ZNfYiiSJJ8EY.original.fullsize.png\" width=\"517\"/></p><p data-end=\"1898\" data-start=\"1863\">Therefore, the correct sequence is:</p><p data-end=\"1959\" data-start=\"1900\">$3 \\rightarrow 1 \\rightarrow 4 \\rightarrow 5 \\rightarrow 7$</p><p data-end=\"1990\" data-start=\"1961\"><br/><strong>Answer : A</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/540752/go-classes-dpp-gate-cs-operating-system-round-robin-scheduling\" target=\"_blank\">GATE Overflow #540752</a></small></div>"
        }
    ]
});

registerTest({
    "name": "DPP 03 - Operating System (Process Management & CPU Scheduling - Part 3)",
    "testLabel": "DPP 03",
    "testType": "DPP",
    "bracket": "Process Management & CPU Scheduling - Part 3",
    "subject": "os",
    "series": "cse-dpp-2027",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 15,
    "topicsCovered": "Process Management & CPU Scheduling (Practice Set 3)",
    "questions": [
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"6334\" data-start=\"6301\">Consider the following processes:</p><p>$$\\begin{array}{c|c|c} \\text{Process} &amp; \\text{Arrival Time} &amp; \\text{Processing Time} \\\\ \\hline P_1 &amp; 0 &amp; 2 \\\\ P_2 &amp; 1 &amp; 6 \\\\ P_3 &amp; 4 &amp; 1 \\\\ P_4 &amp; 7 &amp; 4 \\\\ P_5 &amp; 8 &amp; 3 \\end{array}$$</p><p data-end=\"6527\" data-start=\"6520\">Assume:</p><p data-end=\"6642\" data-start=\"6604\">What is the <strong data-end=\"6641\" data-start=\"6616\">average response time</strong>?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">Shortest Remaining Time First scheduling<br/></span>",
                "<span style=\"display: inline;\">Zero context-switch overhead<br/></span>"
            ],
            "answer": "1.4",
            "solution": "<div class=\"solution-content\"><a name=\"540756\"></a><div itemprop=\"text\"><p data-end=\"91\" data-start=\"17\">Under SRTF, the process with the shortest remaining CPU burst is selected. </p><p data-end=\"91\" data-start=\"17\">At $t=0$, only $P_1$ is available, so it starts execution. </p><p data-end=\"91\" data-start=\"17\">$P_1: 0 \\rightarrow 2$ </p><p data-end=\"91\" data-start=\"17\">At $t=1$, $P_2$ arrives, but $P_1$ has only $1$ unit remaining. Therefore, $P_1$ continues. </p><p data-end=\"91\" data-start=\"17\">At $t=2$, $P_1$ completes and $P_2$ starts execution. </p><p data-end=\"91\" data-start=\"17\">At $t=4$, $P_3$ arrives with burst time $1$. </p><p data-end=\"91\" data-start=\"17\">At this point, $P_2$ has $4$ units remaining. </p><p data-end=\"91\" data-start=\"17\">Since $1&lt;4$, $P_3$ preempts $P_2$. </p><p data-end=\"91\" data-start=\"17\">$P_3: 4 \\rightarrow 5$ </p><p data-end=\"91\" data-start=\"17\">At $t=5$, $P_2$ resumes execution. </p><p data-end=\"91\" data-start=\"17\">At $t=7$, $P_4$ arrives with burst time $4$, but $P_2$ has only $2$ units remaining. </p><p data-end=\"91\" data-start=\"17\">At $t=8$, $P_5$ arrives with burst time $3$, but $P_2$ has only $1$ unit remaining. </p><p data-end=\"91\" data-start=\"17\">Therefore, $P_2$ continues and completes at $t=9$. </p><p data-end=\"91\" data-start=\"17\">Now $P_4$ and $P_5$ are ready. </p><p data-end=\"91\" data-start=\"17\">Since $3&lt;4$, $P_5$ executes before $P_4$. </p><p data-end=\"91\" data-start=\"17\">$P_5: 9 \\rightarrow 12$ </p><p data-end=\"91\" data-start=\"17\">$P_4: 12 \\rightarrow 16$ </p><p style=\"text-align:center\"><img alt=\"\" height=\"249\" src=\"https://cdn.mathpix.com/snip/images/_8rJ8KthkgJnMu_LPlhAwbL6g3yqCHzCLElwDKN0eO8.original.fullsize.png\" width=\"576\"/></p><p data-end=\"91\" data-start=\"17\">Response time is: </p><p data-end=\"91\" data-start=\"17\">$RT=\\text{First CPU Time}-\\text{Arrival Time}$ </p><p data-end=\"91\" data-start=\"17\">Therefore, </p><p data-end=\"91\" data-start=\"17\">$RT_{P_1}=0-0=0$ </p><p data-end=\"91\" data-start=\"17\">$RT_{P_2}=2-1=1$ </p><p data-end=\"91\" data-start=\"17\">$RT_{P_3}=4-4=0$ </p><p data-end=\"91\" data-start=\"17\">$RT_{P_4}=12-7=5$ </p><p data-end=\"91\" data-start=\"17\">$RT_{P_5}=9-8=1$ </p><p data-end=\"91\" data-start=\"17\">Therefore, </p><p data-end=\"91\" data-start=\"17\">$\\text{Average Response Time} = \\dfrac{0+1+0+5+1}{5}= \\dfrac{7}{5}= \\boxed{1.4}$</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/540750/go-classes-dpp-gate-cs-operating-system-shortest-remaining-time-first\" target=\"_blank\">GATE Overflow #540750</a></small></div>"
        },
        {
            "marks": 2,
            "neg": 0,
            "type": "MSQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"4247\" data-start=\"4201\">Which of the following statements are correct?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">A Round Robin scheduler may preempt the currently running job.<br/></span>",
                "<span style=\"display: inline;\">A Shortest-Time-to-Completion-First scheduler cannot cause jobs to starve.<br/></span>",
                "<span style=\"display: inline;\">If all jobs arrive at the same point in time, SJF and Shortest-Time-to-Completion-First will behave the same.<br/></span>",
                "<span style=\"display: inline;\">If all jobs have identical run lengths, Round Robin provides worse average turnaround time than FIFO.</span>"
            ],
            "answer": [
                "A"
            ],
            "solution": "<div class=\"solution-content\"><a name=\"540747\"></a><div itemprop=\"text\"><p data-end=\"4712\" data-start=\"4683\"><strong data-end=\"4712\" data-start=\"4683\">Statement (A) is correct.</strong></p><p data-end=\"4863\" data-start=\"4714\">Round Robin is a preemptive algorithm. When the time quantum expires, the currently running process may be preempted and returned to the ready queue.</p><p data-end=\"4896\" data-start=\"4865\"><strong data-end=\"4896\" data-start=\"4865\">Statement (B) is incorrect.</strong></p><p data-end=\"5077\" data-start=\"4898\">A long process can starve under Shortest-Time-to-Completion-First if shorter processes continue arriving. Each newly arriving short process may be preferred over the long process.</p><p data-end=\"5108\" data-start=\"5079\"><strong data-end=\"5108\" data-start=\"5079\">Statement (C) is correct.</strong></p><p data-end=\"5197\" data-start=\"5110\">If every job is available at time $0$, SJF selects jobs in increasing burst-time order.</p><p data-end=\"5312\" data-start=\"5199\">The preemptive version has no newly arriving process to cause a preemption, so it produces the same order as SJF.</p><p data-end=\"5343\" data-start=\"5314\"><strong data-end=\"5343\" data-start=\"5314\">Statement (D) is correct.</strong></p><p data-end=\"5395\" data-start=\"5345\">Suppose several equal-length jobs arrive together.</p><p data-end=\"5462\" data-start=\"5397\">Under FIFO, the first job finishes early, followed by the others.</p><p data-end=\"5621\" data-start=\"5464\">Under RR with a small quantum, all jobs make progress together and tend to finish near the end of the total workload. This increases average turnaround time.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/540745/go-classes-dpp-gate-cs-operating-system-scheduling\" target=\"_blank\">GATE Overflow #540745</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"2716\" data-start=\"2684\">Consider the following workload:</p><p>$$\\begin{array}{c|c|c} \\text{Job} &amp; \\text{Arrival Time} &amp; \\text{CPU Burst Time} \\\\ \\hline A &amp; 0 &amp; 8 \\\\ B &amp; 2 &amp; 4 \\\\ C &amp; 5 &amp; 7 \\end{array}$$</p><p data-end=\"2923\" data-start=\"2861\">Assume Round Robin scheduling with a time slice of $1$ second.</p><p data-end=\"2964\" data-start=\"2925\">What is the turnaround time of job $B$?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$8$ seconds<br/></span>",
                "<span style=\"display: inline;\">$9$ seconds<br/></span>",
                "<span style=\"display: inline;\">$10$ seconds<br/></span>",
                "<span style=\"display: inline;\">$11$ seconds</span>"
            ],
            "answer": "B",
            "solution": "<div class=\"solution-content\"><a name=\"540743\"></a><div itemprop=\"text\"><p data-end=\"3196\" data-start=\"3106\">Round Robin gives each ready process at most $1$ second before moving to the next process.</p><p data-end=\"3252\" data-start=\"3198\">The relevant execution sequence until $B$ finishes is:</p><p>$$0\\xrightarrow{A} 1 \\xrightarrow{A} 2 \\xrightarrow{B} 3 \\xrightarrow{A} 4 \\xrightarrow{B} 5 \\xrightarrow{C} 6 \\xrightarrow{A} 7 \\xrightarrow{B} 8 \\xrightarrow{C} 9 \\xrightarrow{A} 10 \\xrightarrow{B}11$$</p><p data-end=\"3484\" data-start=\"3463\">Job $B$ completes at:</p><p>$CT_B=11$</p><p data-end=\"3521\" data-start=\"3501\">Its arrival time is:</p><p>$AT_B=2$</p><p data-end=\"3556\" data-start=\"3537\">Turnaround time is:</p><p>$TAT_B=CT_B-AT_B$</p><p>$\\Rightarrow TAT_B=11-2=9$</p><p data-end=\"3611\" data-start=\"3601\">$\\boxed{\\therefore TAT_B=9 \\text{ seconds}}$</p><p data-end=\"3776\" data-start=\"3645\">Hence, the correct answer is <strong>B.</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/540742/go-classes-dpp-gate-cs-operating-system-round-robin-scheduling\" target=\"_blank\">GATE Overflow #540742</a></small></div>"
        },
        {
            "marks": 2,
            "neg": 0,
            "type": "MSQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Three jobs arrive at approximately the same time, with $A$ arriving slightly before $B$, and $B$ slightly before $C$. </p><p>Their CPU burst times are: $A = 2$ seconds $B = 8$ seconds $C = 7$ seconds </p><p>Given an SJF scheduler, what is the average response time of the three jobs? </p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$2$ seconds <br/></span>",
                "<span style=\"display: inline;\">$3.67$ seconds <br/></span>",
                "<span style=\"display: inline;\">$9$ seconds <br/></span>",
                "<span style=\"display: inline;\">$9.33$ seconds</span>"
            ],
            "answer": "B",
            "solution": "<div class=\"solution-content\"><a name=\"540612\"></a><div itemprop=\"text\"><p>Since $A$ arrives first, it starts execution immediately. </p><p>$A: 0 \\rightarrow 2$ </p><p>At time $2$, both $B$ and $C$ are available. </p><p>Since $C$ has the shorter CPU burst, </p><p>$7 &lt; 8$ </p><p>SJF selects $C$. </p><p>$C: 2 \\rightarrow 9$ </p><p>Then $B$ executes. </p><p>$B: 9 \\rightarrow 17$ </p><p>Response time is the time from arrival until the process gets the CPU for the first time. </p><p>Therefore, </p><p>$RT_A = 0$ </p><p>$RT_C = 2$ </p><p>$RT_B = 9$ </p><p>Hence, </p><p>Average Response Time $= \\dfrac{0+2+9}{3}$ $= \\dfrac{11}{3}$ $\\approx 3.67$ seconds </p><p><br/><strong>Answer : B</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/540611/go-classes-dpp-gate-cs-operating-system-sjf-scheduling\" target=\"_blank\">GATE Overflow #540611</a></small></div>"
        },
        {
            "marks": 2,
            "neg": 0,
            "type": "MSQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider the following statements about CPU scheduling. Assume SJF refers to non-preemptive Shortest Job First scheduling, while STCF refers to its preemptive counterpart, Shortest Time-to-Completion First.</p><p>Which of the following statements are correct? <em>(Select all correct options.)</em></p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">For a fixed set of jobs available at the same time, a FIFO scheduler has a lower average turnaround time when shorter jobs are executed before longer jobs than when longer jobs are executed before shorter jobs, assuming the job lengths are not all equal.<br/></span>",
                "<span style=\"display: inline;\">An SJF scheduler may preempt the currently running job.<br/></span>",
                "<span style=\"display: inline;\">Under non-preemptive SJF, shorter jobs arriving after a long job has started executing may have to wait until that job finishes.<br/></span>",
                "<span style=\"display: inline;\">If all jobs arrive at the same point in time, SJF and STCF produce the same execution order, assuming identical tie-breaking rules.</span>"
            ],
            "answer": [
                "A"
            ],
            "solution": "<div class=\"solution-content\"><a name=\"540610\"></a><div itemprop=\"text\"><p>The given statements compare First-Come, First-Served (FCFS/FIFO), non-preemptive Shortest Job First (SJF), and Shortest Time-to-Completion First (STCF) CPU scheduling algorithms.</p><p><strong>A : Correct</strong></p><p>In FCFS scheduling, processes are executed in the order in which they enter the ready queue.</p><p>When all processes are available at the same time, executing shorter jobs before longer jobs reduces the average turnaround time, provided the job lengths are not all equal.</p><p>Consider two processes with burst times $a$ and $b$, where $a&lt;b$.</p><p>If the shorter process executes first, their turnaround times are:</p><p>$T_1=a,\\qquad T_2=a+b$</p><p>$\\therefore \\text{Average TAT}=\\dfrac{2a+b}{2}$</p><p>If the longer process executes first:</p><p>$T_1=b,\\qquad T_2=a+b$</p><p>$\\therefore \\text{Average TAT}=\\dfrac{a+2b}{2}$</p><p>Since $a&lt;b$,</p><p>$\\dfrac{2a+b}{2}&lt;\\dfrac{a+2b}{2}$</p><p>Thus, executing shorter jobs first reduces the average turnaround time. </p><p>The same principle extends to any number of simultaneously available jobs.</p><p>Hence, <strong>A is correct.</strong></p><p><br/><strong>B : Incorrect</strong></p><p>Non-preemptive SJF selects the process with the shortest CPU burst among the processes currently in the ready queue.</p><p>Once a process starts executing, it continues until its CPU burst is completed or it otherwise relinquishes the CPU.</p><p>Therefore, <strong>non-preemptive SJF cannot preempt a currently running process</strong>.</p><p>Preemption is supported by STCF, also called Shortest Remaining Time First (SRTF), which can interrupt a running process when another process with a shorter remaining execution time becomes available.</p><p>Hence, <strong>B is incorrect.</strong></p><p><br/><strong>C : Correct</strong></p><p>In non-preemptive SJF, a long process may begin execution when no shorter process is available.</p><p>If shorter processes arrive after the long process has started, they must wait until the running process finishes.</p><p>For eg, consider,</p><p>$$\\begin{array}{|c|c|c|}\\hline \\text{Process}&amp;\\text{Arrival Time}&amp;\\text{Burst Time}\\\\ \\hline P_1&amp;0&amp;20\\\\ \\hline P_2&amp;1&amp;2\\\\ \\hline P_3&amp;2&amp;1\\\\ \\hline \\end{array}$$</p><p>At time $t=0$, only $P_1$ is available, so it starts executing. Since SJF is non-preemptive, $P_1$ continues until time $t=20$.</p><p>The execution order is $:P_1\\rightarrow P_3\\rightarrow P_2$</p><p style=\"text-align:center\"><img alt=\"\" height=\"128\" src=\"https://cdn.mathpix.com/snip/images/-R-g4u1R-3RpRqrnV-bOZ3w0Za3gsoLOlEYhPQAYNfs.original.fullsize.png\" width=\"481\"/></p><p>Both shorter processes must wait for $P_1$ to finish, even though their CPU bursts are much smaller.</p><p>This demonstrates that non-preemptive SJF can produce a convoy-like waiting situation, although the convoy effect is conventionally associated with FCFS scheduling.</p><p>Hence, <strong>C is correct.</strong></p><p><br/><strong>D : Correct</strong></p><p>STCF is the preemptive version of SJF.</p><p>In STCF, a running process is preempted when another available process has a strictly shorter remaining execution time.</p><p>However, if all processes arrive at the same time, no new process arrives later to trigger preemption.</p><p>Both SJF and STCF initially select the process with the shortest burst time. After it completes, they select the next shortest process.</p><p>Therefore, assuming identical tie-breaking rules, both algorithms produce the same execution order when all processes arrive simultaneously.</p><p>Hence, <strong>D is correct.</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/540608/go-classes-dpp-gate-cs-operating-system-fcfs-%26-sjf-scheduling\" target=\"_blank\">GATE Overflow #540608</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider the following processes: </p><p>$$<br/>\\begin{array}{|c|c|c|}<br/>\\hline<br/>\\text{Job} &amp; \\text{Arrival Time} &amp; \\text{CPU Burst Time} \\\\ \\hline A &amp; 0 &amp; 8 \\\\ B &amp; 2 &amp; 4 \\\\ C &amp; 5 &amp; 7 \\\\ \\hline \\end{array} $$</p><p>Given an FCFS scheduler, what is the average turnaround time of the three jobs? </p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$10$ seconds <br/></span>",
                "<span style=\"display: inline;\">$10\\frac{1}{3}$ seconds <br/></span>",
                "<span style=\"display: inline;\">$10\\frac{2}{3}$ seconds <br/></span>",
                "<span style=\"display: inline;\">$13$ seconds</span>"
            ],
            "answer": "C",
            "solution": "<div class=\"solution-content\"><a name=\"540607\"></a><div itemprop=\"text\"><p>Under FCFS, processes execute in the order of arrival: $A \\rightarrow B \\rightarrow C$ </p><p>The execution order is: </p><p>$$0 \\; \\xrightarrow{\\quad A \\quad} \\; 8 \\; \\xrightarrow{\\quad B \\quad} \\; 12 \\; \\xrightarrow{\\quad C \\quad} \\; 19$$</p><p>Thus, the completion times are: </p><p>$C_A = 8$ </p><p>$C_B = 12$ </p><p>$C_C = 19$ </p><p>Turnaround time is: </p><p>$TAT = \\text{Completion Time} - \\text{Arrival Time}$ </p><p>Therefore, </p><p>$TAT_A = 8 - 0 = 8$ </p><p>$TAT_B = 12 - 2 = 10$ </p><p>$TAT_C = 19 - 5 = 14$ </p><p>Hence, </p><p>$\\text{Average Turnaround Time} = \\dfrac{8+10+14}{3}$ $= \\dfrac{32}{3}$ $= 10\\dfrac{2}{3}$ seconds.</p><p> </p><p><strong>Answer : C</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/540604/go-classes-dpp-gate-cs-operating-system-fcfs-scheduling\" target=\"_blank\">GATE Overflow #540604</a></small></div>"
        },
        {
            "marks": 2,
            "neg": 0,
            "type": "MSQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"7079\" data-start=\"6971\">According to the standard process-state model, which of the following transitions are valid?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">A RUNNING process may move to the WAITING state when it blocks for an event such as I/O.<br/></span>",
                "<span style=\"display: inline;\">A RUNNING process may move to the READY state when its allocated CPU time expires.<br/></span>",
                "<span style=\"display: inline;\">When the event awaited by a WAITING process occurs, the process must move directly from WAITING to RUNNING.<br/></span>",
                "<span style=\"display: inline;\">A READY process may move to RUNNING when selected for CPU execution.</span>"
            ],
            "answer": [
                "A"
            ],
            "solution": "<div class=\"solution-content\"><a name=\"540458\"></a><div itemprop=\"text\"><ol start=\"1\" style=\"list-style-type: upper-alpha;\"><li data-end=\"7648\" data-start=\"7517\"><strong data-end=\"7533\" data-start=\"7517\">Correct.</strong> A process that needs to wait for I/O or another event cannot continue execution and moves from RUNNING to WAITING.<br/> </li><li data-end=\"7772\" data-start=\"7650\"><strong data-end=\"7666\" data-start=\"7650\">Correct.</strong> In a preemptive system, expiration of a process's time allocation can move it from RUNNING back to READY.<br/> </li><li data-end=\"7880\" data-start=\"7774\"><strong data-end=\"7792\" data-start=\"7774\">Incorrect.</strong> Event completion makes the process eligible for execution, so the normal transition is:<br/>WAITING $\\rightarrow$ READY<br/>The scheduler must select it before it moves to RUNNING.<br/> </li><li data-end=\"8048\" data-start=\"7987\"><strong data-end=\"8003\" data-start=\"7987\">Correct.</strong> Dispatching a process causes the transition:<br/>READY $\\rightarrow$ RUNNING</li></ol></div><br><br><small>Source: <a href=\"https://gateoverflow.in/540457/go-classes-dpp-gate-cs-operating-system-process-state-transitions\" target=\"_blank\">GATE Overflow #540457</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>A single-CPU system contains three processes with priorities:</p><p>$$X &gt; Y &gt; Z$$</p><p>The scheduler always runs the highest-priority runnable process and performs preemption when necessary.</p><p>At a particular point:</p><p>The disk I/O requested by $X$ now completes.</p><p>What are the states immediately after the scheduler reacts?</p><p><strong>Given Details:</strong></p><ul><li>$X$ is BLOCKED waiting for disk I/O.</li><li>$Y$ is RUNNING.</li><li>$Z$ is READY.</li></ul></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$X$: READY, $Y$: RUNNING, $Z$: READY</span>",
                "<span style=\"display: inline;\">$X$: RUNNING, $Y$: READY, $Z$: READY</span>",
                "<span style=\"display: inline;\">$X$: RUNNING, $Y$: BLOCKED, $Z$: READY</span>",
                "<span style=\"display: inline;\">$X$: READY, $Y$: READY, $Z$: RUNNING</span>"
            ],
            "answer": "B",
            "solution": "<div class=\"solution-content\"><a name=\"540454\"></a><div itemprop=\"text\"><p>Initially:</p><ul><li>$X$ is BLOCKED because it is waiting for disk I/O.<br/> </li><li>$Y$ is RUNNING because $X$ is unavailable.<br/> </li><li>$Z$ is READY.</li></ul><p>Now, the disk I/O of $X$ completes.</p><p>This causes the transition:</p><p>$X:$ BLOCKED $\\rightarrow$ READY</p><p>At this moment, both $X$ and $Z$ are ready, while $Y$ is currently running.</p><p>Given the priority order:</p><p>$$X &gt; Y &gt; Z$$</p><p>$X$ has a higher priority than the currently running process $Y$. Since the scheduler is preemptive, $X$ immediately preempts $Y$.</p><p>Therefore:</p><ul><li>$X$: READY $\\rightarrow$ RUNNING<br/> </li><li>$Y$: RUNNING $\\rightarrow$ READY<br/> </li><li>$Z$: remains READY</li></ul><p>So the final states are:</p><p>$X:$ RUNNING,$\\quad Y:$ READY, $\\quad Z:$ READY</p><p><br/><strong>Answer : B</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/540452/go-classes-dpp-gate-cs-operating-system-priority-preemption-scheduling\" target=\"_blank\">GATE Overflow #540452</a></small></div>"
        },
        {
            "marks": 2,
            "neg": 0,
            "type": "MSQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"820\" data-start=\"758\">Which of the following statements are correct?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">The CPU dispatcher determines the policy for which process should be run and when.<br/></span>",
                "<span style=\"display: inline;\">With cooperative multitasking, it is possible for a process to keep running on the CPU for as long as it chooses.<br/></span>",
                "<span style=\"display: inline;\">When executing a return-from-trap instruction, the hardware restores the user process's registers, changes to user mode, and transfers control back to the appropriate code location.<br/></span>",
                "<span style=\"display: inline;\">When an I/O operation completes, the previously blocked process necessarily moves directly into the RUNNING state.</span>"
            ],
            "answer": [
                "A"
            ],
            "solution": "<div class=\"solution-content\"><a name=\"540446\"></a><div itemprop=\"text\"><ol start=\"1\" style=\"list-style-type: upper-alpha;\"><li data-end=\"1589\" data-start=\"1397\"><strong data-end=\"1415\" data-start=\"1397\">Incorrect. </strong>The scheduler determines the scheduling policy, meaning which process should run.<br/>The dispatcher implements the mechanism that transfers CPU control to the selected process.<br/> </li><li data-end=\"1819\" data-start=\"1591\"><strong data-end=\"1607\" data-start=\"1591\">Correct. </strong>In cooperative multitasking, the operating system depends on the running process to voluntarily give up control, usually through a system call or another trap.<br/>A process that does not yield can continue running.<br/> </li><li data-end=\"1946\" data-start=\"1821\"><strong data-end=\"1837\" data-start=\"1821\">Correct. </strong>A return-from-trap restores the saved execution context and returns execution from kernel mode to user mode.<br/> </li><li data-end=\"2116\" data-start=\"1948\"><strong data-end=\"1966\" data-start=\"1948\">Incorrect. </strong>When I/O completes, a blocked process becomes eligible to run. It normally moves to the READY state, unless it is immediately selected for execution.</li></ol></div><br><br><small>Source: <a href=\"https://gateoverflow.in/540445/go-classes-dpp-gate-cs-operating-system-process-scheduling-%26-state-transitions\" target=\"_blank\">GATE Overflow #540445</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"2533\" data-start=\"2469\">Which of the following is <strong>not</strong> applicable to RAM?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">RAM is volatile memory.<br/></span>",
                "<span style=\"display: inline;\">RAM holds the BIOS, which is essential for starting up the computer.<br/></span>",
                "<span style=\"display: inline;\">RAM is significantly faster than hard drives.<br/></span>",
                "<span style=\"display: inline;\">RAM allows the CPU to access memory locations directly.</span>"
            ],
            "answer": "B",
            "solution": "<div class=\"solution-content\"><a name=\"539855\"></a><div itemprop=\"text\"><p data-end=\"3061\" data-start=\"2843\">RAM is volatile memory, which means its contents are lost when the computer is switched off. </p><p data-end=\"3061\" data-start=\"2843\">It is faster than secondary storage devices such as hard drives and allows direct access to memory locations.</p><p data-end=\"3207\" data-start=\"3063\">The BIOS is stored in non-volatile memory, traditionally ROM and commonly flash memory in modern computers. </p><p data-end=\"3207\" data-start=\"3063\">It is not permanently stored in RAM.</p><p data-end=\"3318\" data-is-last-node=\"\" data-is-only-node=\"\" data-start=\"3209\"><strong>Answer : B</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/539854/go-classes-dpp-gate-cs-operating-system-computer-memory\" target=\"_blank\">GATE Overflow #539854</a></small></div>"
        }
    ]
});

registerTest({
    "name": "DPP 04 - Operating System (Process Management & CPU Scheduling - Part 4)",
    "testLabel": "DPP 04",
    "testType": "DPP",
    "bracket": "Process Management & CPU Scheduling - Part 4",
    "subject": "os",
    "series": "cse-dpp-2027",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 12,
    "topicsCovered": "Process Management & CPU Scheduling (Practice Set 4)",
    "questions": [
        {
            "marks": 2,
            "neg": 0,
            "type": "MSQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"964\" data-start=\"871\">Which of the following is/are not treated as a resource in a computer system?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">CPU cycles<br/></span>",
                "<span style=\"display: inline;\">Main memory<br/></span>",
                "<span style=\"display: inline;\">User processes<br/></span>",
                "<span style=\"display: inline;\">None of the other options</span>"
            ],
            "answer": "C",
            "solution": "<div class=\"solution-content\"><a name=\"539851\"></a><div itemprop=\"text\"><p data-end=\"1208\" data-start=\"1089\">CPU cycles and main memory are system resources that are allocated and managed by the operating system.</p><p data-end=\"1391\" data-start=\"1210\">A user process is a program currently being executed. </p><p data-end=\"1391\" data-start=\"1210\">It uses resources such as CPU time, memory, files, and input/output devices, but it is not itself treated as a system resource.</p><p data-end=\"1449\" data-start=\"1393\"><strong>Answer : C</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/539850/go-classes-dpp-gate-cs-operating-system-os-resource-management\" target=\"_blank\">GATE Overflow #539850</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>A system has $4$ processes $(P_1$ to $P_4)$ and $10$ instances of a single resource type $R$. Each process requires a maximum of $m$ instances to complete. What is the <strong>MAXIMUM</strong> value of $m$ such that the system is guaranteed to be deadlock-free, regardless of the order in which processes request and release resources?</p></div></span>",
            "image": "",
            "options": [],
            "answer": "523674",
            "solution": "<div class=\"solution-content\"><a name=\"523675\"></a><div itemprop=\"text\">\\begin{aligned}<br/> &amp;\\text {To ensure a system is guaranteed to be deadlock-free, the total resources } R \\text { must satisfy: }\\\\\\\\<br/> &amp;R \\geq \\sum\\left(\\text { Max_Need }_i-1\\right)+1\\\\\\\\<br/> &amp; 10 \\geq 4(m-1)+1 \\\\\\\\<br/> &amp; 10 \\geq 4 m-4+1 \\\\\\\\<br/> &amp; 10 \\geq 4 m-3 \\\\\\\\<br/> &amp; 13 \\geq 4 m \\\\\\\\<br/> &amp; m \\leq 3.25<br/> \\end{aligned}<br/> $\\text { Since } m \\text { must be an integer, the maximum value is } 3 \\text {. }$</div><br><br><small>Source: <a href=\"https://gateoverflow.in/523674/go-classes-dpp-os-resource-allocation\" target=\"_blank\">GATE Overflow #523674</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider a uniprocessor system with three processes $\\mathrm{P1, P2,}$ and $\\mathrm{P3}$ arriving at time $\\mathrm{t}=0$. Their burst times are $10,20 ,$ and $30$ units, respectively. The system uses a <strong>Round Robin</strong> scheduling algorithm with a time quantum of $5$ units. If the context switching overhead is $1$ unit per switch (assume context switch overhead is applied every time a process is preempted or finishes it's quantum), what is the completion time (in units) for process $\\mathrm{P3}$?</p></div></span>",
            "image": "",
            "options": [],
            "answer": "72",
            "solution": "<div class=\"solution-content\"><a name=\"523671\"></a><div itemprop=\"text\">\\begin{aligned}<br/> &amp; P_1:(0 \\text { to } 5)+1 \\text { switch }=6 .\\left(P_1 \\text { remains: } 5\\right) \\\\<br/> &amp; P_2:(6 \\text { to } 11)+1 \\text { switch }=12 .\\left(P_2 \\text { remains: } 15\\right) \\\\<br/> &amp; P_3:(12 \\text { to } 17)+1 \\text { switch }=18 .\\left(P_3 \\text { remains: } 25\\right) \\\\<br/> &amp; P_1:(18 \\text { to } 23)+1 \\text { switch }=24 .\\left(P_1 \\text { finishes }\\right) \\\\<br/> &amp; P_2:(24 \\text { to } 29)+1 \\text { switch }=30 .\\left(P_2 \\text { remains: } 10\\right) \\\\<br/> &amp; P_3:(30 \\text { to } 35)+1 \\text { switch }=36 .\\left(P_3 \\text { remains: } 20\\right) \\\\<br/> &amp; P_2:(36 \\text { to } 41)+1 \\text { switch }=42 .\\left(P_2 \\text { remains: } 5\\right) \\\\<br/> &amp; P_3:(42 \\text { to } 47)+1 \\text { switch }=48 .\\left(P_3 \\text { remains: } 15\\right) \\\\<br/> &amp; P_2:(48 \\text { to } 53)+1 \\text { switch }=54 .\\left(P_2 \\text { finishes }\\right) \\\\<br/> &amp; P_3:(54 \\text { to } 59)+1 \\text { switch }=60 .\\left(P_3 \\text { remains: } 10\\right) \\\\<br/> &amp; P_3:(60 \\text { to } 65)+1 \\text { switch }=66 .\\left(P_3 \\text { remains: } 5\\right) \\\\<br/> &amp; P_3:(66 \\text { to } 71)+1 \\text { switch }=72 .\\left(P_3 \\text { finishes }\\right)<br/> \\end{aligned}</div><br><br><small>Source: <a href=\"https://gateoverflow.in/523670/go-classes-dpp-os-process-scheduling\" target=\"_blank\">GATE Overflow #523670</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>A system has $n$ processes and $r$ identical resource instances. Each process requires a maximum of $m$ instances. What is the <strong>minimum</strong> number of resource instances $r$ required to ensure that the system is always deadlock-free?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$n(m-1)+1$<br/></span>",
                "<span style=\"display: inline;\">$n m-1$<br/></span>",
                "<span style=\"display: inline;\">$n(m+1)-1$<br/></span>",
                "<span style=\"display: inline;\">$m(n-1)+1$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"523323\"></a><div itemprop=\"text\"><p>Max resources each process can hold without finishing: $(m-1)$.<br/><br/>Total resources held by $n$ processes without any finishing: $n(m-1)$.<br/><br/>To ensure at least one process can finish (breaking the deadlock), we need <strong>one more </strong>resource.</p><p><strong>Formula:</strong> $r=n(m-1)+1$.<br/><br/><strong>Correct Option: A.</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/523322/go-classes-dpp-os-resource-allocation\" target=\"_blank\">GATE Overflow #523322</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider a uniprocessor system with three processes $P_1, P_2$, and $P_3$ arriving at time $t=0$. Their burst times are $10,20 ,$ and $30$ units, respectively. The system uses a <strong>Round Robin</strong> scheduling algorithm with a time quantum of $5$ units. If the context switch overhead is $1$ unit (incurred every time a process is swapped out, including the last burst), what is the total completion time of the last process to finish?</p></div></span>",
            "image": "",
            "options": [],
            "answer": "72",
            "solution": "<div class=\"solution-content\"><a name=\"523318\"></a><div itemprop=\"text\"><p><strong>Total Burst Time:</strong> $10+20+30=60$ units.<br/><br/><strong>Execution Order</strong> $($<strong>Quantum </strong>$=5):$</p><ol><li>$P_1(5), P_2(5), P_3(5)$<br/> </li><li>$P_1(5) \\rightarrow P_1$ <strong>finishes,</strong> $P_2(5), P_3(5)$<br/> </li><li>$P_2(5), P_3(5)$<br/> </li><li>$P_2(5) \\rightarrow P_2$ <strong>finishes,</strong> $P_3(5)$<br/> </li><li>$P_3(5), P_3(5) \\rightarrow P_3$ <strong>finishes</strong><br/> </li></ol><p><strong>Context Switches:</strong> There are $11$ switches between processes plus $1$ final switch after the last process completes $(12$ total$)$.</p><p>Total number of switches $=72$</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/523317/go-classes-dpp-os-process-scheduling\" target=\"_blank\">GATE Overflow #523317</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider three processes $P_1, P_2$, and $P_3$ arriving at time $t=0$ with burst times $10,5 ,$ and $8$ respectively. The scheduler uses<strong> Preemptive Shortest Remaining Time First (SRTF)</strong>. A new process $P_4$ arrives at $t=3$ with a burst time of $2$.</p><p>Calculate the average waiting time for all four processes (round off to $2$ decimal places).</p></div></span>",
            "image": "",
            "options": [],
            "answer": "6.00",
            "solution": "<div class=\"solution-content\"><a name=\"522472\"></a><div itemprop=\"text\"><p><strong>At</strong> $t=0$ : Ready processes are $P_1(10), P_2(5), P_3(8)$. $P_2$ is the shortest.<br/><br/><strong>At </strong>$t=3: P_2$ has remained $5-3=2 . P_4$ arrives with $B T=2$. Since $P_2$ and $P_4$ have equal remaining time, $P_2$ continues (tie-breaker: same process).<br/><br/><strong>At</strong> $t=5: P_2$ finishes. Remaining: $P_4(2), P_3(8), P_1(10) . P_4$ runs next.<br/><br/><strong>At</strong> $t=7: P_4$ finishes. Remaining: $P_3(8), P_1(10)$. $P_3$ runs next.<br/><br/><strong>At</strong> $t=15: P_3$ finishes. $P_1$ runs last.<br/><br/><strong>At </strong>$t=25: P_1$ finishes.<br/> </p><p><strong>Wait Times</strong> $(W T=T A T-B T)$ :</p><ul><li>$P_1: 25-10=15$<br/> </li><li>$P_2: 5-5=0$<br/> </li><li>$P_3: 15-8=7$<br/> </li><li>$P_4:(7-3)-2=2$<br/> </li></ul><p><strong>Average</strong> $W T: \\frac{15+0+7+2}{4}=\\frac{24}{4}=6.00$</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/522471/go-classes-dpp-os-process-scheduling\" target=\"_blank\">GATE Overflow #522471</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider a system with three processes $P_1, P_2$, and $P_3$ with burst times 8,4 , and 2 units respectively. All processes arrive at time $t=0$. The system uses a<strong> Round Robin</strong> scheduling algorithm with a time quantum of 3 units. Calculate the <strong>Average Turnaround Time</strong> (in units) for these processes. (Assume no context switch overhead).</p></div></span>",
            "image": "",
            "options": [],
            "answer": "11.33",
            "solution": "<div class=\"solution-content\"><a name=\"522312\"></a><div itemprop=\"text\"><p><strong>Arrival Times: $P_1=0, P_2=0, P_3=0$. Quantum $= 3.$</strong><br/><br/><strong>Execution Order:</strong></p><ol><li>$P_1$ runs from $0-3$ $($Remaining$: 5)$<br/> </li><li>$P_2$ runs from $3-6$ $($Remaining$: 1 )$<br/> </li><li>$P_3$ runs from $6-8$ $($Remaining$: 0 ) \\rightarrow P_3$ finishes at $8$<br/> </li><li>$P_1$ runs from $8-11$ $($Remaining$: 2 )$<br/> </li><li>$P_2$ runs from $11-12$ $($Remaining$: 0 ) \\rightarrow P_2$ finishes at $12$<br/> </li><li>$P_1$ runs from $12-14$ $($Remaining$: 0 ) \\rightarrow P_1$ finishes at $14$</li></ol><p><br/><strong>Turnaround Times (Finish - Arrival):</strong></p><ul><li>$P_1: 14-0=14$<br/> </li><li>$P_2: 12-0=12$<br/> </li><li>$P_3: 8-0=8$</li></ul><p><br/><strong>Average TAT:</strong> $34 / 3=11.33$</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/522311/go-classes-dpp-os-process-scheduling\" target=\"_blank\">GATE Overflow #522311</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider three processes with the following CPU burst times: $P_1=2, P_2=7$, and $P_3=10$. All processes arrive at time $t=0$. The system uses <strong>Round Robin</strong> scheduling with a time quantum $Q=4$.</p><p><strong>Calculate the Average Turnaround Time (TAT) for these processes.</strong></p></div></span>",
            "image": "",
            "options": [],
            "answer": "11.33",
            "solution": "<div class=\"solution-content\"><a name=\"521947\"></a><div itemprop=\"text\"><p dir=\"ltr\">$0-2: P_1$ (Finishes). $T A T=2$.<br/><br/>$2-6: P_2$ $($Remains $3).$<br/><br/>$6-10: P_3$ $($Remains $6).$<br/><br/>$10-13: P_2$ (Finishes). $T A T=13$.<br/><br/>$13-17$ : $P_3$ $($Remains $2).$<br/><br/>$17-19: P_3$ (Finishes). $T A T=19$.<br/><br/><strong>Avg TAT</strong> $=(2+13+19) / 3=34 / 3=11.33$.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/521946/go-classes-dpp-os-round-robin\" target=\"_blank\">GATE Overflow #521946</a></small></div>"
        },
        {
            "marks": 2,
            "neg": 0,
            "type": "MSQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider a system with $3$ processes $P_1, P_2, P_3$ and two resource types $R_1$ and $R_2$.</p><p>The current allocation and request state is as follows:</p><ul><li>$P_1$ holds one instance of $R_1$ and requests one instance of $R_2$.<br/> </li><li>$P_2$ holds one instance of $R_2$ and requests one instance of $R_1$.<br/> </li><li>$P_3$ holds one instance of $R_1$ and one instance of $R_2$.<br/> </li><li>$P_3$ now requests one instance of $R_1$.<br/> </li></ul><p><strong>Which of the following statements is/are TRUE?</strong></p><p><strong>Given Details:</strong></p><ul><li>$R_1$ has $\\mathbf{2}$<strong> instances.</strong></li><li>$R_2$ has $\\mathbf{2}$<strong> instances.</strong></li></ul></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">THE SYSTEM IS IN A DEADLOCK STATE.</span>",
                "<span style=\"display: inline;\">THERE IS A CYCLE IN THE RESOURCE ALLOCATION GRAPH.</span>",
                "<span style=\"display: inline;\">$P_3$ IS THE ONLY PROCESS PREVENTING A DEADLOCK.</span>",
                "<span style=\"display: inline;\">IF $P_3$ RELEASES ALL ITS RESOURCES, THE REMAINING PROCESSES CAN FINISH.</span>"
            ],
            "answer": [
                "A"
            ],
            "solution": "<div class=\"solution-content\"><a name=\"521161\"></a><div itemprop=\"text\"><p>The system contains two instances each of resources $R_1$ and $R_2$.</p><p>The current allocations are:</p><p>$P_1=(1,0),\\quad P_2=(0,1),\\quad P_3=(1,1)$</p><p>The total allocated resources are:</p><p>$(1,0)+(0,1)+(1,1)=(2,2)$</p><p>Since the total resources in the system are $(2,2)$, the currently available resources are:</p><p>$\\text{Available}=(2,2)-(2,2)=\\boxed{(0,0)}$</p><p><br/><strong>A : True</strong></p><p>All three processes are waiting for additional resources, but no instances are available. Since none can satisfy its pending request, no process can proceed to completion and release its resources.</p><p>Therefore, the system is in a <strong>deadlock state</strong>.<br/> </p><p><strong>B : True</strong></p><p>The resource allocation graph contains the cycle:</p><p>$P_1\\rightarrow R_2\\rightarrow P_2\\rightarrow R_1\\rightarrow P_1$</p><p>Here, $P_1$ waits for $R_2$, which is held by $P_2$, while $P_2$ waits for $R_1$, which is held by $P_1$.</p><p>Therefore, a <strong>cycle exists</strong> in the resource allocation graph.</p><p><br/><strong>C : False</strong></p><p>$P_3$ is not preventing deadlock, as the system is already deadlocked. </p><p>All three processes have unsatisfied resource requests and are unable to proceed.<br/> </p><p><strong>D : True</strong></p><p>If $P_3$ releases all its allocated resources, it releases one instance each of $R_1$ and $R_2$.</p><p>The available resources become, $\\text{Available}=(1,1)$</p><p>Now, $P_1$ can obtain its requested $R_2$ instance, and $P_2$ can obtain its requested $R_1$ instance.</p><p>Both processes can then complete and release their resources, assuming no further requests.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/521160/go-classes-dpp-os-resource-allocation\" target=\"_blank\">GATE Overflow #521160</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>A system uses <strong>Variable Partitioning</strong> for memory management. The total physical memory is $\\mathbf{1 0 0 0 ~ K B}$, out of which $\\mathbf{2 0 0~ K B}$ is occupied by the Resident OS. The remaining memory is currently allocated to three processes as follows:</p><p>The gaps between processes are currently empty. A new process $\\mathbf{P4}$ arrives requiring $\\mathbf{2 5 0}$ KB.<br/>Consider the following two scenarios:</p><p>Which of the following statements is <strong>TRUE</strong>?</p><ol start=\"1\" style=\"list-style-type: upper-alpha;\"><li>$P4$ can be accommodated in Scenario I using the Best-Fit algorithm.<br/> </li><li>In Scenario II, it will take $60$ ms to create a contiguous block for $P4$ if we move $P2$ and $P3$ upward.<br/> </li><li>In Scenario II, it will take $40$ ms to create a contiguous block for $P4$ if we move $P2$ and $P3$ upward.<br/> </li><li>$P4$ cannot be accommodated even after compaction.</li></ol><p><strong>Given Details:</strong></p><ul><li>$\\mathbf{P1}: 200$ KB $($starts at address $200)$</li><li>$\\mathbf{P2}: 150$ KB $($starts at address $500)$</li><li>$\\mathbf{P3}: 250$ KB $($starts at address $750)$</li></ul></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\"><strong>Scenario I:</strong> The system does not support compaction.</span>",
                "<span style=\"display: inline;\"><strong>Scenario II:</strong> The system supports compaction, but it takes $\\mathbf{1 ~ m s}$ to move $\\mathbf{1 0 ~ K B}$ of data.</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"520982\"></a><div itemprop=\"text\"><p><strong>OS:</strong> $200\\mathrm{~KB}(0$ to $199)$<br/><br/>$\\mathbf{P1}: 200$ KB $(200$ to $399)$<br/><br/><strong>Hole 1:</strong> $400$ to $499 ~(100\\mathrm{~KB})$<br/><br/>$\\mathbf{P2}: 150$ KB $(500$ to $649)$<br/><br/><strong>Hole 2:</strong> $650$ to $749 ~(100\\mathrm{~KB})$<br/><br/>$\\mathbf{P3}: 250$ KB $(750$ to $1000)$<br/><br/><strong>Total Used:</strong> $200+200+150+250=800 \\mathrm{~KB}$.<br/><br/><strong>Total Free:</strong> $1000-800=\\mathbf{2 0 0} \\mathrm{~KB}$.</p><p>The largest contiguous hole is $100 \\mathrm{~KB} . ~P_4$ requires $250\\mathrm{~KB}$ . Therefore, $P4$ <strong>cannot be accommodated.</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/520981/go-classes-dpp-os-memory-management\" target=\"_blank\">GATE Overflow #520981</a></small></div>"
        }
    ]
});

registerTest({
    "name": "DPP 05 - Operating System (Process Management & CPU Scheduling - Part 5)",
    "testLabel": "DPP 05",
    "testType": "DPP",
    "bracket": "Process Management & CPU Scheduling - Part 5",
    "subject": "os",
    "series": "cse-dpp-2027",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 10,
    "topicsCovered": "Process Management & CPU Scheduling (Practice Set 5)",
    "questions": [
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider three processes $P_1, P_2$, and $P_3$ arriving at time $t=0$ with burst times $10,20 ,$ and $30$ units, respectively. The system uses a <strong>Round Robin </strong>scheduling algorithm with a time quantum of $\\mathbf{10}$ <strong>units</strong>. If the context switching overhead is $\\mathbf2$<strong> units</strong> per switch, what is the completion time of process $P_2$ ? (Assume context switch occurs even if the next process is the same, but not after the very last process finishes).</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$44$ UNITS<br/></span>",
                "<span style=\"display: inline;\">$46$ UNITS<br/></span>",
                "<span style=\"display: inline;\">$50$ UNITS<br/></span>",
                "<span style=\"display: inline;\">$52$ UNITS</span>"
            ],
            "answer": "B",
            "solution": "<div class=\"solution-content\"><a name=\"520732\"></a><div itemprop=\"text\"><p>Completion time of process P₂</p><p> </p><p>Step 1: Simulate the Round Robin scheduling</p><p> </p><p>The processes $P_1$, $P_2$, and $P_3$ arrive at $t=0$ with burst times of 10, 20, and 30 units, respectively, and a time quantum of 10 units. The context switch overhead is 2 units.</p><p> </p><p>The sequence of execution is as follows:</p><ul><li>$P_1$ runs from $t=0$ to $t=10$. $P_1$ completes its burst.</li><li>Context switch occurs (2 units). Time is $10+2=12$.</li><li>$P_2$ runs from $t=12$ to $t=22$ (quantum). Remaining burst for $P_2$ is $20-10=10$.</li><li>Context switch occurs (2 units). Time is $22+2=24$.</li><li>$P_3$ runs from $t=24$ to $t=34$ (quantum). Remaining burst for $P_3$ is $30-10=20$.</li><li>Context switch occurs (2 units). Time is $34+2=36$.</li><li>$P_1$ is complete. $P_2$ runs from $t=36$ to $t=46$ (remaining 10 units). $P_2$ completes its burst.</li></ul><p>Step 2: Determine the completion time of $P_2$</p><p> </p><p>Process $P_2$ finishes its execution at $t=46$ units.</p><p> </p><p>Answer: The completion time of process $P_2$ is 46 UNITS (Option B).</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/520698/go-classes-dpp-os-cpu-scheduling\" target=\"_blank\">GATE Overflow #520698</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider a system with two priority queues for CPU scheduling: <strong>Queue $\\mathbf{1}$ (High Priority)</strong> uses Round Robin (RR) with a time quantum of $\\mathbf{2 ~ms}$, and <strong>Queue $\\mathbf{2}$ (Low Priority)</strong> uses First-Come-First-Serve (FCFS).</p><p>Two processes, $P_1$ and $P_2$, arrive in Queue $1$ at time $t=0$ and $t=1$ respectively, with burst times of $\\mathbf{4} \\mathbf{~ m s}$ each. One process $P_3$ arrives in Queue $2$ at $t=0$ with a burst time of $\\mathbf{2} \\mathbf{~ m s}$. What is the completion time of process $P_3$ ?</p><p><strong>Given Details:</strong></p><ul><li>A process from Queue $2$ can only run if Queue $1$ is empty.</li><li>If a process arrives in Queue $1$ while a process from Queue $2$ is running, the Queue $2$ process is preempted immediately.</li><li>The context switching overhead is $\\mathbf{0 . 5 ~ m s}$ whenever the CPU switches from one process to another (including switching between processes in the same queue).</li></ul></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$11.5 ~\\mathrm{ms}$</span>",
                "<span style=\"display: inline;\">$12.0 ~\\mathrm{ms}$</span>",
                "<span style=\"display: inline;\">$13.5 ~\\mathrm{ms}$</span>",
                "<span style=\"display: inline;\">$14.0 ~\\mathrm{ms}$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"518820\"></a><div itemprop=\"text\"><p>$t=0$<strong> to</strong> $t=2: P_1$ runs for its first quantum (RR, $q=2$). Remainder: $P_1=2 \\mathrm{~ms}$.<br/><br/>$t=2$ <strong>to</strong> $t=2.5$ : Context switch from $P_1$ to $P_2$ (Overhead $=0.5 \\mathrm{~ms}$).<br/><br/>$t=2.5$ <strong>to</strong> $t=4.5: P_2$ runs for its first quantum. Remainder: $P_2=2 \\mathrm{~ms}$.<br/><br/>$t=4.5$ <strong>to</strong> $t=5.0$ : Context switch from $P_2$ back to $P_1$ (Overhead $=0.5 \\mathrm{~ms}$).<br/><br/>$t=5.0$ <strong>to</strong> $t=7.0: P_1$ runs for its final $2 \\mathrm{~ms}$ and <strong>completes.</strong><br/><br/>$t=7.0$ <strong>to</strong> $t=7.5$ : Context switch from $P_1$ to $P_2$ (Overhead $=0.5 \\mathrm{~ms}$).<br/><br/>$t=7.5$ <strong>to</strong> $t=9.5: P_2$ runs for its final $2 \\mathrm{~ms}$ and <strong>completes.</strong><br/><br/>$t=9.5$ <strong>to</strong> $t=10.0$ : Queue $1$ is now empty. Context switch from $P_2$ to $P_3$ (Overhead $= 0.5 \\mathrm{~ms}$).<br/><br/>$t=10.0$<strong> to</strong> $t=12.0: P_3$ runs for its $2 \\mathrm{~ms}$ burst and <strong>completes.</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/518810/go-classes-dpp-os-cpu-scheduling\" target=\"_blank\">GATE Overflow #518810</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\">Consider a system with three processes $P_1, P_2$, and $P_3$ that arrive at time $t=0$ in that order. The total CPU burst time for each process is $10$ units. However, each process follows a specific execution pattern: it executes on the CPU for $2$ units, then performs an I/O operation for $5$ units, and finally returns for its remaining $8$ units of CPU burst.<br/> <br/> If the system uses Preemptive Shortest Remaining Time First (SRTF) scheduling and I/O operations can happen in parallel, what is the finish time of the last process to complete?</div></span>",
            "image": "",
            "options": [],
            "answer": "31",
            "solution": "<div class=\"solution-content\"><a name=\"518272\"></a><div itemprop=\"text\">Total CPU burst for each: 2 (initial) +8 (final) = 10 units.<br/> <br/> 1. $t=0$ to $t=2$ : $P_1$ runs (SRTF tie-break). At $t=2, P_1$ finishes its first burst and goes to I/O for 5 units (ready at $t=7$ ).<br/> <br/> 2. $t=2$ to $t=4: P_2$ runs. At $t=4, P_2$ goes to $\\mathrm{I} / \\mathrm{O}$ for 5 units (ready at $t=9$ ).<br/> <br/> 3. $t=4$ to $t=6: P_3$ runs. At $t=6, P_3$ goes to I/O for 5 units (ready at $t=11$ ).<br/> <br/> 4. $t=6$ to $t=7$ : CPU is IDLE (All processes are in I/O).<br/> <br/> 5. $t=7$ to $t=15: P_1$ returns from I/O. Its remaining burst is 8 . It finishes at $t=15$.<br/> <br/> 6. $t=15$ to $t=23: P_2$ returns (at $t=9$ ) and runs its 8 units. It finishes at $t=23$.<br/> <br/> 7. $t=23$ to $t=31: P_3$ returns (at $t=11$ ) and runs its 8 units. It finishes at $t=31$.</div><br><br><small>Source: <a href=\"https://gateoverflow.in/518271/go-classes-dpp-os-cpu-scheduling\" target=\"_blank\">GATE Overflow #518271</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider a system with three processes, $P_1, P_2$, and $P_3$, with arrival times and burst times as shown in the table below. The system uses a <strong>Preemptive Priority Scheduling</strong> algorithm. Note that a <strong>lower priority number</strong> indicates a <strong>higher priority.</strong></p><p>\\[<br/>\\begin{array}{llll}<br/>\\text{Process} &amp; \\text{Arrival Time} &amp; \\text{Burst Time} &amp; \\text{Priority} \\\\<br/>P_1 &amp; 0 &amp; 7 &amp; 3 \\\\<br/>P_2 &amp; 2 &amp; 4 &amp; 1 \\\\<br/>P_3 &amp; 4 &amp; 2 &amp; 2<br/>\\end{array}<br/>\\]<br/> </p><p>What is the <strong>Average Waiting Time</strong> for these processes?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$2.00$<br/></span>",
                "<span style=\"display: inline;\">$2.33$<br/></span>",
                "<span style=\"display: inline;\">$2.67$<br/></span>",
                "<span style=\"display: inline;\">$3.00$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"516819\"></a><div itemprop=\"text\"><p><strong>Gantt Chart:</strong></p><ul><li>$[0-2]: P_1$ runs $($Remaining: $P_1=5)$.<br/> </li><li>$[2-6]: P_2$ arrives $($Priority $1)$ and preempts $P_1 \\cdot P_2$ finishes.<br/> </li><li>$[6-8]: P_3$ $($Priority $2)$ runs because it has higher priority than $P_1 . P_3$ finishes.<br/> </li><li>$[8-13]: P_1$ resumes and finishes.<br/> </li></ul><p><strong>Completion Times</strong> $(C T)$ : $P_1=13, P_2=6, P_3=8$.<br/><br/><strong>Turnaround Times</strong> $(T A T=C T-A T): P_1=13, P_2=4, P_3=4$.<br/><br/><strong>Waiting Times</strong> $(W T=T A T-B T): P_1=6, P_2=0, P_3=2$.<br/><br/><strong>Average WT: </strong>$\\frac{6+0+2}{3}=\\frac{8}{3} \\approx 2.66$.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/516818/go-classes-dpp-os-cpu-scheduling\" target=\"_blank\">GATE Overflow #516818</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider three processes $P_1, P_2,$ and $P_3$ arriving at time $t=0$ with CPU burst times of $10,6,$ and $4$ milliseconds, respectively. The system uses a <strong>Non-Preemptive Priority Scheduling</strong> algorithm.</p><p>The priority of a process is calculated dynamically every time the CPU becomes free, using the formula:</p><p>$$<br/>\\text { Priority }=\\frac{\\text { Waiting Time }+ \\text { Burst Time }}{\\text { Burst Time }}<br/>$$</p><p><em>(A higher value indicates a higher priority. If priorities are equal, the process with the lower ID takes precedence)</em>.</p><p><strong>Calculate the average turnaround time (in milliseconds) for these processes.</strong></p></div></span>",
            "image": "",
            "options": [],
            "answer": "20",
            "solution": "<div class=\"solution-content\"><a name=\"516251\"></a><div itemprop=\"text\"><ul><li><strong>Priority of</strong> $P_1: \\frac{0+10}{10}=1.0$<br/> </li><li><strong>Priority of</strong> $P_2: \\frac{0+6}{6}=1.0$<br/> </li><li><strong>Priority of</strong> $P_3: \\frac{0+4}{4}=1.0$<br/> </li></ul><p><strong>Tie-breaker rule:</strong> The problem states that if priorities are equal, the process with the <strong>lower ID</strong> takes precedence. Therefore, $P_1$ is scheduled first.</p><p>Since the algorithm is <strong>Non-Preemptive</strong>, $P_1$ will run for its full burst time.</p><ol><li><strong>From</strong> $t=0$<strong> to </strong>$t=10: P_1$ executes.<br/> </li><li><strong>At </strong>$t=10$ (<strong>$P_1$ finishes):</strong> We recalculate priorities for the remaining processes. Both have been waiting for $10 ~\\mathrm{ms}$ .<br/> <ul><li><strong>Priority of</strong> $P_2: \\frac{10+6}{6}=\\frac{16}{6} \\approx 2.67$<br/> </li><li><strong>Priority of</strong> $P_3: \\frac{10+4}{4}=\\frac{14}{4}=3.5$<br/> </li><li><strong>Decision: </strong>$P_3$ has the higher priority. $P_3$ executes next.<br/> </li></ul></li><li><strong>From $t=10$ to $t=14: P_3$</strong> executes $(10+4=14)$.<br/> </li><li><strong>From $t=14$ to $t=20: P_2$ </strong>is the only process left. It executes $(14+6=20)$.<br/> </li></ol><p>Average TAT $=\\frac{10+20+14}{3}=\\frac{44}{3}=\\mathbf{1 4 . 6 7 ~ m s}$</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/516249/go-classes-dpp-os-cpu-scheduling\" target=\"_blank\">GATE Overflow #516249</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider a system with three processes, $\\mathbf{P 1}, \\mathbf{P 2}$, and $\\mathbf{P 3}$, arriving at time $t=0$. Their burst times are $4 \\mathrm{~ms}, 6 \\mathrm{~ms}$, and $8 ~\\mathrm{ms}$ , respectively. The system uses the Round Robin (RR) scheduling algorithm with a time quantum of $2 ~\\mathrm{ms}$.</p><p>However, there is a <strong>context switching overhead of </strong>$\\mathbf{0 . 5 ~ m s}$ every time the CPU switches from one process to another (this overhead does not occur before the first process starts or after the last process finishes).</p><p>What is the <strong>Completion Time</strong> of process $\\mathbf{P3}$?</p><p><strong>Assume :</strong> if there is no process left in the queue after time quantum expires of running process then context switch does not occur and process keeps running.</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$18.0 ~\\mathrm{ms}$<br/></span>",
                "<span style=\"display: inline;\">$20.5 ~\\mathrm{ms}$<br/></span>",
                "<span style=\"display: inline;\">$21.0 ~\\mathrm{ms}$<br/></span>",
                "<span style=\"display: inline;\">$21.5 ~\\mathrm{ms}$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"514338\"></a><div itemprop=\"text\">\\[<br/> \\begin{array}{|l|l|l|l|l|l|l|}<br/> \\hline<br/> \\text{Step} &amp; \\text{Process} &amp; \\text{Start Time} &amp; \\text{End Time} &amp; \\text{Burst Used} &amp; \\text{Remaining Burst} &amp; \\text{Switch Occurs?} \\\\<br/> \\hline<br/> 1 &amp; P1 &amp; 0\\,\\text{ms} &amp; 2\\,\\text{ms} &amp; 2\\,\\text{ms} &amp; 2\\,\\text{ms} &amp; \\text{Yes (0.5 ms)} \\\\<br/> \\hline<br/> 2 &amp; P2 &amp; 2.5\\,\\text{ms} &amp; 4.5\\,\\text{ms} &amp; 2\\,\\text{ms} &amp; 4\\,\\text{ms} &amp; \\text{Yes (0.5 ms)} \\\\<br/> \\hline<br/> 3 &amp; P3 &amp; 5.0\\,\\text{ms} &amp; 7.0\\,\\text{ms} &amp; 2\\,\\text{ms} &amp; 6\\,\\text{ms} &amp; \\text{Yes (0.5 ms)} \\\\<br/> \\hline<br/> 4 &amp; P1 &amp; 7.5\\,\\text{ms} &amp; 9.5\\,\\text{ms} &amp; 2\\,\\text{ms} &amp; 0\\,\\text{ms (Finishes)} &amp; \\text{Yes (0.5 ms)} \\\\<br/> \\hline<br/> 5 &amp; P2 &amp; 10.0\\,\\text{ms} &amp; 12.0\\,\\text{ms} &amp; 2\\,\\text{ms} &amp; 2\\,\\text{ms} &amp; \\text{Yes (0.5 ms)} \\\\<br/> \\hline<br/> 6 &amp; P3 &amp; 12.5\\,\\text{ms} &amp; 14.5\\,\\text{ms} &amp; 2\\,\\text{ms} &amp; 4\\,\\text{ms} &amp; \\text{Yes (0.5 ms)} \\\\<br/> \\hline<br/> 7 &amp; P2 &amp; 15.0\\,\\text{ms} &amp; 17.0\\,\\text{ms} &amp; 2\\,\\text{ms} &amp; 0\\,\\text{ms (Finishes)} &amp; \\text{Yes (0.5 ms)} \\\\<br/> \\hline<br/> 8 &amp; P3 &amp; 17.5\\,\\text{ms} &amp; 19.5\\,\\text{ms} &amp; 2\\,\\text{ms} &amp; 2\\,\\text{ms} &amp; \\text{No (Only P3 left)} \\\\<br/> \\hline<br/> 9 &amp; P3 &amp; 19.5\\,\\text{ms} &amp; 21.5\\,\\text{ms} &amp; 2\\,\\text{ms} &amp; 0\\,\\text{ms (Finishes)} &amp; - \\\\<br/> \\hline<br/> \\end{array}<br/> \\]<br/> </div><br><br><small>Source: <a href=\"https://gateoverflow.in/514337/go-classes-dpp-os-process-scheduling\" target=\"_blank\">GATE Overflow #514337</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider a system with a single processor and three processes $P 1, P 2$, and $P 3$ that arrive at time $t=0$. The burst times are $10$,$20$, and $30$ units, respectively. The system uses a <strong>Non-Preemptive Priority Scheduling</strong> algorithm.</p><p>Each process $P i$ has a priority $P r_i$ calculated by the following formula, where $W_i$ is the time the process has been waiting in the ready queue:</p><p>$$<br/>P r_i=\\frac{W_i+\\text { Burst Time }_i}{\\text { Burst Time }_i}<br/>$$</p><p><br/>The process with the <strong>HIGHEST </strong>$P r_i$ value is selected to run. If there is a tie, the process with the lowest ID (e.g., $P 1&lt;P 2$ ) is chosen.</p><p>What is the average waiting time for these three processes?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$10.0$ UNITS<br/></span>",
                "<span style=\"display: inline;\">$13.33$ UNITS<br/></span>",
                "<span style=\"display: inline;\">$20.0$ UNITS<br/></span>",
                "<span style=\"display: inline;\">$23.33$ UNITS</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"513427\"></a><div itemprop=\"text\">At $t=0$, all processes have $W_i=0$, so $P r_i=1$. By tie-breaker, $P 1$ runs. At $t=10, P 2$ has $P r=(10+20) / 20=1.5$ and $P 3$ has $P r=(10+ 30) / 30=1.33 . P 2$ runs, then $P 3$.<br/> <br/> Average waiting time $=(0+10+30) / 3=40 / 3=13.33$</div><br><br><small>Source: <a href=\"https://gateoverflow.in/513426/go-classes-dpp-os-process-scheduling\" target=\"_blank\">GATE Overflow #513426</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider a system where each process has a maximum need of $\\mathbf{4}$<strong> instances</strong> of a specific resource type. The system has a total of $\\mathbf{13}$ <strong>instances</strong> of this resource available.</p><p><strong>What is the largest number of processes $(N)$ that the system can support to always avoid deadlock?</strong></p></div></span>",
            "image": "",
            "options": [],
            "answer": "4",
            "solution": "<div class=\"solution-content\"><a name=\"512802\"></a><div itemprop=\"text\">\\begin{aligned}<br/> &amp; N^*(4-1)&lt;13 \\\\\\\\<br/> &amp; 3 N \\leq 12 \\\\\\\\<br/> &amp; N=4<br/> \\end{aligned}</div><br><br><small>Source: <a href=\"https://gateoverflow.in/512801/go-classes-dpp-os-resource-allocation\" target=\"_blank\">GATE Overflow #512801</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider a system with $\\mathbf{4}$ <strong>processes</strong> $(P_1, P_2, P_3, P_4)$ and $\\mathbf{10}$ <strong>instances</strong> of a resource. $P_1$ has a maximum need of $\\mathbf{3}$ instances, and $P_2$ has a maximum need of $\\mathbf{4}$ instances. $P_3$ and $P_4$ both have the same maximum need of $\\mathbf{K}$ instances.</p><p><strong>The largest integer value of $\\mathbf{K}$ that will always avoid deadlock is:</strong></p></div></span>",
            "image": "",
            "options": [],
            "answer": "3",
            "solution": "<div class=\"solution-content\"><a name=\"512800\"></a><div itemprop=\"text\">\\begin{aligned}<br/> &amp;\\sum_{i=1}^n\\left(\\text { Max_Need }_i-1\\right) \\leq R-1\\\\\\\\<br/> &amp; 3-1+4-1+k-1+k-1 \\leq 10-1\\\\\\\\<br/> &amp; 2 K+3 \\leq 9 \\\\\\\\<br/> &amp; K \\leq 6 / 2 \\\\\\\\<br/> &amp; K=3<br/> \\end{aligned}</div><br><br><small>Source: <a href=\"https://gateoverflow.in/512798/go-classes-dpp-os-resource-allocation\" target=\"_blank\">GATE Overflow #512798</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider a system with $\\mathbf{5}$ <strong>processes</strong> that share $\\mathbf{12}$ <strong>instances</strong> of the same resource type. Each process can request a maximum of $\\mathbf{K}$ instances. Resources can be requested and released only one at a time.</p><p><strong>The largest value of $\\mathbf{K}$ that will always avoid deadlock is:</strong></p></div></span>",
            "image": "",
            "options": [],
            "answer": "3",
            "solution": "<div class=\"solution-content\"><a name=\"512796\"></a><div itemprop=\"text\">\\begin{aligned}<br/> &amp; 5(k-1)&lt;12 \\\\<br/> &amp; 5 k-5&lt;12 \\\\<br/> &amp; K&lt;17 / 5 \\\\<br/> &amp; K=3<br/> \\end{aligned}</div><br><br><small>Source: <a href=\"https://gateoverflow.in/512795/go-classes-dpp-os-resource-allocation\" target=\"_blank\">GATE Overflow #512795</a></small></div>"
        }
    ]
});

registerTest({
    "name": "DPP 06 - Operating System (Process Management & CPU Scheduling - Part 6)",
    "testLabel": "DPP 06",
    "testType": "DPP",
    "bracket": "Process Management & CPU Scheduling - Part 6",
    "subject": "os",
    "series": "cse-dpp-2027",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 10,
    "topicsCovered": "Process Management & CPU Scheduling (Practice Set 6)",
    "questions": [
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider the following set of processes to be scheduled on a single CPU using the <strong>Shortest Remaining Time First (SRTF)</strong> algorithm.</p><p>\\[<br/>\\begin{array}{ccc}<br/>\\text{Process} &amp; \\text{Arrival (ms)} &amp; \\text{Execution (ms)}\\\\<br/>P1 &amp; 0 &amp; 8\\\\<br/>P2 &amp; 2 &amp; 4\\\\<br/>P3 &amp; 4 &amp; 2\\\\<br/>P4 &amp; 5 &amp; 1\\\\<br/>P5 &amp; 8 &amp; 3<br/>\\end{array}<br/>\\]<br/> </p><p>The average process turnaround time (in msec) is $\\_\\_\\_\\_$ .</p></div></span>",
            "image": "",
            "options": [],
            "answer": "33",
            "solution": "<div class=\"solution-content\"><a name=\"510818\"></a><div itemprop=\"text\"><p><strong>Gantt Chart Development</strong></p><ul><li><strong>Time </strong>$\\mathbf{[0-2]:}$ Only $\\mathbf{P1}$ has arrived. It runs for $\\mathrm{2 ms}$ . Remaining time for $\\mathrm{P1}: \\mathbf{6}$ .<br/> </li><li><strong>Time </strong>$\\mathbf{[2-4]:}$ $\\mathbf{P2}$ arrives at $T=2$ with $B T=4$. Since $4&lt;6$ $(\\mathrm{P1}$'s remaining), $\\mathbf{P2}$ preempts $\\mathrm{P1}$. $\\mathrm{P2}$ runs for $\\mathrm{2 ~ms}$ . Remaining time for $\\mathrm{P2}: \\mathbf{2}$.<br/> </li><li><strong>Time </strong>$\\mathbf{[4-5]:}$ $\\mathbf{P3}$ arrives at $T=4$ with $B T=2$. Both $\\mathrm{P2}$ and $\\mathrm{P3}$ have $\\mathrm{2 ~ms}$ left. By convention (FCFS for ties), $\\mathbf{P2}$ continues. It runs for $\\mathrm{1 ~ms}$ . Remaining time for $\\mathrm{P2}: \\mathbf{1}$.<br/> </li><li><strong>Time </strong>$\\mathbf{[5-6]:}$ $\\mathbf{P4}$ arrives at $T=5$ with $B T=1$. Now $\\mathrm{P2}$ has $\\mathrm{1 ~ms}$ left and $\\mathrm{P4}$ has $\\mathrm{1 ~ms}$ left. $\\mathbf{P2}$ finishes its final $\\mathrm{1 ~ms}$.<br/> </li><li><strong>Time </strong>$\\mathbf{[6-7]:}$ $\\mathrm{P4}$ is now the shortest $(1&lt;2$ for $\\mathrm{P3})$. $\\mathbf{P4}$ runs and finishes.<br/> </li><li><strong>Time </strong>$\\mathbf{[7-9]:}$ $\\mathbf{P3}$ is the shortest remaining $(2 \\mathrm{~ms})$. It runs and finishes.<br/> </li><li><strong>Time </strong>$\\mathbf{[9-12]:}$ At $T=8, \\mathbf{P5}$ had arrived $(B T=3)$. At $T=9, \\mathrm{P5}$ is shorter than the remaining $\\mathrm{P1 (6 ~ms)}$. $\\mathbf{P5}$ runs and finishes.<br/> </li><li><strong>Time</strong> $\\mathbf{[12-18]:}$ Finally, $\\mathbf{P1}$ returns to finish its remaining $\\mathrm{6 ~ms}$.<br/> </li></ul><p>$\\textbf{Gantt Chart Summary: } \\mid \\verb|P1(2)| \\mid \\verb|P2(4)| \\mid \\verb|P4(1)| \\mid \\verb|P3(2)| \\mid \\verb|P5(3)| \\mid \\verb|P1(6)| \\mid \\verb|0 2 6 7 9 12 18| \\verb| |$<br/><br/><br/><strong>Total Turnaround Time</strong> $=18+4+5+2+4=33 \\mathrm{~ms}$<br/><br/><br/><strong>Average Turnaround Time</strong> $=\\frac{33}{5}=\\mathbf{6.6} \\mathrm{~ms}$</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/510811/go-classes-dpp-os-process-scheduling\" target=\"_blank\">GATE Overflow #510811</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>A program is structured using an overlay tree to fit into limited physical memory.</p><p><b id=\"docs-internal-guid-5fe8cb3a-7fff-0a99-b6c6-e6b5824e6eae\"><img alt=\"\" height=\"243\" src=\"https://gateoverflow.in/?qa=blob&amp;qa_blobid=3253084711087630036\" width=\"275\"/></b></p><p><strong>What is the minimum partition size in physical memory required to run the longest possible path of this program?</strong></p></div></span>",
            "image": "https://gateoverflow.in/?qa=blob&qa_blobid=3253084711087630036",
            "options": [
                "<span style=\"display: inline;\">$44$ KB<br/></span>",
                "<span style=\"display: inline;\">$22$ KB<br/></span>",
                "<span style=\"display: inline;\">$26$ KB<br/></span>",
                "<span style=\"display: inline;\">$48$ KB</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"507900\"></a><div itemprop=\"text\">$\\text { Minimum Partition Size }=\\operatorname{Max}(\\operatorname{Path} 1, \\text { Path 2) }=26 \\mathrm{~KB}$</div><br><br><small>Source: <a href=\"https://gateoverflow.in/507899/go-classes-dpp-os-overlay\" target=\"_blank\">GATE Overflow #507899</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider the following set of CPU-intensive processes. The operating system uses the <strong>Preemptive Shortest Remaining Time First (SRTF)</strong> scheduling algorithm.</p><p>\\[<br/>\\begin{array}{c|c|c}<br/>\\text{Process} &amp; \\text{Arrival Time} &amp; \\text{Burst Time} \\\\<br/>\\hline<br/>\\text{P1} &amp; 0 &amp; 8 \\\\<br/>\\text{P2} &amp; 2 &amp; 3 \\\\<br/>\\text{P3} &amp; 5 &amp; 2 \\\\<br/>\\text{P4} &amp; 6 &amp; 4<br/>\\end{array}<br/>\\]<br/>Find the <strong>Average Turnaround Time </strong>and the number of <strong>Context Switches</strong> (excluding the switch at time zero and at the very end).</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">Avg TAT $: 6.50$; Context Switches $: 4$<br/></span>",
                "<span style=\"display: inline;\">Avg TAT $: 6.75$; Context Switches $: 3$<br/></span>",
                "<span style=\"display: inline;\">Avg TAT $: 6.75$; Context Switches $: 4$<br/></span>",
                "<span style=\"display: inline;\">Avg TAT$: 7.50$; Context Switches $: 3$</span>"
            ],
            "answer": "C",
            "solution": "<div class=\"solution-content\"><a name=\"507894\"></a><div itemprop=\"text\"><p>To find the Average Turnaround Time, we first track the execution using a Gantt chart:</p><ul><li><strong>Time</strong> $\\mathbf{0-2: P1}$ starts. At $t=2,~\\mathrm{P}1$ has $\\mathbf{6}$ remaining.<br/> </li><li><strong>Time</strong> $\\mathbf{2: P2}$ arrives (Burst $3$ ). Since $3&lt;6, \\mathbf{P2}$ <strong>preempts </strong>$\\mathbf{P1}$ $($<strong>Context Switch</strong> $\\mathbf{\\#1})$.<br/> </li><li><strong>Time</strong> $\\mathbf{2-5: P2}$ runs. At $t=5,~\\mathrm{P}2$ finishes its burst of $3$.<br/> </li><li><strong>Time</strong> $\\mathbf{5: P3}$ arrives (Burst $2$). The ready queue has $\\mathrm{P1(6)}$ and $\\mathrm{P3(2)}$. $\\mathbf{P3}$ <strong>starts. </strong>$($<strong>Context Switch</strong> $\\mathbf{\\#2})$.<br/> </li><li><strong>Time</strong> $\\mathbf{5-6: P3}$ runs. At $t=6,~\\mathbf{P4}$ arrives (Burst $4$). $\\mathrm{P3}$ has $\\mathbf{1}$ remaining. Since $1&lt;4$ and $1&lt;6$, $\\mathbf{P3}$ <strong>continues.</strong><br/> </li><li><strong>Time</strong> $\\mathbf{7: P3}$ finishes. Ready queue: $\\mathrm{P4} ~(4)$, and $\\mathrm{P1~(6)}$. $\\mathbf{P4}$ <strong>starts.</strong> $($<strong>Context Switch</strong> $\\mathbf{\\#3})$.<br/> </li><li><strong>Time</strong> $\\mathbf{7-11: P4}$ runs and finishes.<br/> </li><li><strong>Time</strong> $\\mathbf{11-17: P1}$ resumes and finishes its remaining $6$ units.</li></ul><p><br/><strong>Turnaround Time (TAT) Calculation</strong><br/><br/>$T A T=$ Completion Time $-$ Arrival Time</p><p><br/>\\[<br/>\\begin{array}{c|c|c|c}<br/>\\text{Process} &amp; \\text{Completion Time} &amp; \\text{Arrival Time} &amp; \\text{Turnaround Time} \\\\<br/>\\hline<br/>\\text{P1} &amp; 17 &amp; 0 &amp; 17 \\\\<br/>\\text{P2} &amp; 5 &amp; 2 &amp; 3 \\\\<br/>\\text{P3} &amp; 7 &amp; 5 &amp; 2 \\\\<br/>\\text{P4} &amp; 11 &amp; 6 &amp; 5<br/>\\end{array}<br/>\\]<br/><br/>$\\text { Average TAT }=\\frac{17+3+12+5}{4}=\\frac{27}{4}=6.75$<br/> </p><ol><li><strong>Switch </strong>$1:$ At $t=2, \\mathbf{P} 1$ is preempted by $\\mathbf{P 2}$.<br/> </li><li><strong>Switch </strong>$2$: At $t=5, \\mathbf{P 2}$ finishes and $\\mathbf{P 3}$ is scheduled.<br/> </li><li><strong>Switch</strong> $3:$ At $t=7, \\mathbf{P3}$ finishes and $\\mathbf{P4}$ is scheduled.<br/> </li><li><strong>Switch</strong> $4:$ At $t=11, \\mathbf{P4}$ finishes and $\\mathbf{P} 1$ is scheduled for its final stint.<br/> </li></ol><p><strong>Total Context Switches</strong> $\\mathbf{: 4}$</p><p><br/><strong>Correct Answer : C</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/507883/go-classes-dpp-os-cpu-scheduling\" target=\"_blank\">GATE Overflow #507883</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>The sequence $\\_\\_\\_\\_$ is an optimal non-preemptive scheduling sequence for the following jobs which leaves the CPU idle for $\\_\\_\\_\\_$ unit(s) of time.</p><p>\\[<br/>\\begin{array}{c|c|c}<br/>\\text{Job} &amp; \\text{Arrival Time} &amp; \\text{Burst Time} \\\\<br/>\\hline<br/>1 &amp; 0.0 &amp; 4 \\\\<br/>2 &amp; 1.5 &amp; 8 \\\\<br/>3 &amp; 2.0 &amp; 2<br/>\\end{array}<br/>\\]</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\{1,3,2\\}, 0$<br/></span>",
                "<span style=\"display: inline;\">$\\{1,2,3\\}, 0$<br/></span>",
                "<span style=\"display: inline;\">$\\{3,1,2\\}, 2$<br/></span>",
                "<span style=\"display: inline;\">$\\{1,3,2\\}, 1.5$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"507877\"></a><div itemprop=\"text\"><p><strong>Correct Answer : A</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/507876/go-classes-dpp-os-cpu-scheduling\" target=\"_blank\">GATE Overflow #507876</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>A system uses a <strong>Buddy System</strong> memory allocator to manage a $\\mathbf{1 0 2 4}$ <strong>KB</strong> physical memory space. The system currently has three active processes allocated as follows:</p><p>Assume the memory was initially one contiguous block and processes were allocated in the order A, then B, then C. No memory compaction is performed.</p><p>What is the <strong>SMALLEST</strong> allocation request (in KB) that could be <strong>DENIED</strong> due to external fragmentation, even though the total sum of all free memory holes is larger than the request?<br/> </p><p><strong>Given Details:</strong></p><ul><li><strong>Process A:</strong> $110$ KB</li><li><strong>Process B:</strong> $240$ KB</li><li><strong>Process C:</strong> $60$ KB</li></ul></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$129$ KB</span>",
                "<span style=\"display: inline;\">$257$ KB</span>",
                "<span style=\"display: inline;\">$513$ KB</span>",
                "<span style=\"display: inline;\">$65$ KB</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"507492\"></a><div itemprop=\"text\"><p>We start with a single $\\textbf{1024 KB}$ block.<br/> </p><p>1. <strong>Process A $\\textbf{(110 KB)}$:</strong></p><ul><li>$110$ KB requires a $2^7=128 \\mathrm{~KB}$ block.<br/> </li><li>The system splits $1024 \\rightarrow 512,512$.<br/> </li><li>Then splits $512 \\rightarrow 256,256$.<br/> </li><li>Then splits $256 \\rightarrow 128,128$.<br/> </li><li><strong>Result:</strong> A takes the first $128$ KB . Holes remaining: $128 \\mathrm{~KB}, 256 \\mathrm{~KB}, 512 \\mathrm{~KB}$.<br/> </li></ul><p>2. <strong>Process B ( $\\mathbf{240 ~KB}$ ):</strong></p><ul><li>$240$ KB requires a $2^8=256 \\mathrm{~KB}$ block.<br/> </li><li>A $256$ KB hole is already available.<br/> </li><li><strong>Result:</strong> B takes the $256$ KB block. Holes remaining: $128 \\mathrm{~KB}, 512 \\mathrm{~KB}$.<br/> </li></ul><p>3. <strong>Process C $\\textbf{(60 KB)}$:</strong></p><ul><li>$60$ KB requires a $2^6=64 \\mathrm{~KB}$ block.<br/> </li><li>No $64$ KB hole exists, so the system splits the $128$ KB hole $\\rightarrow 64,64$.<br/> </li><li><strong>Result:</strong> C takes the first $64$ KB block. Holes remaining: $64$ KB and $512$ KB .</li></ul><div> </div><div>We need to find the <strong>SMALLEST</strong> request that is <strong>denied</strong> even though total free memory is enough.<br/> </div><ul><li><strong>Total Free Memory:</strong> $64 \\mathrm{~KB}+512 \\mathrm{~KB}=\\mathbf{5 7 6} \\mathrm{KB}$.<br/> </li><li><strong>Request $\\mathbf{5 1 3}$ KB:</strong> This request is less than the total free space $(513&lt;576)$.<br/> </li><li>However, in a Buddy System, a $513$ KB request requires a $2^{10}=\\mathbf{1 0 2 4 ~ K B}$ block $($because it is larger than the next smallest power of $2$ , which is $512)$.<br/> </li><li>Since the largest available block is only $512$ KB, a $1024$ KB block cannot be formed, and the request is <strong>denied.</strong></li></ul></div><br><br><small>Source: <a href=\"https://gateoverflow.in/507293/go-classes-dpp-os-memory-management\" target=\"_blank\">GATE Overflow #507293</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p><strong>Consider a system where a single resource type has $\\mathbf{5}$ instances.</strong> Each process can request a maximum of $\\mathbf{4}$ <strong>instances.</strong> Resources can be requested and released only one at a time. The largest number of processes (N) that the system can support while always avoiding deadlock is $\\_\\_\\_\\_$ .</p></div></span>",
            "image": "",
            "options": [],
            "answer": "504042",
            "solution": "<div class=\"solution-content\"><a name=\"504157\"></a><div itemprop=\"text\"><p style=\"text-align:center\"><img alt=\"\" height=\"1054\" src=\"https://gateoverflow.in/?qa=blob&amp;qa_blobid=15941681947610478514\" width=\"1080\"/></p><p> </p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/504042/go-classes-dpp-os-resource-allocation\" target=\"_blank\">GATE Overflow #504042</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p dir=\"ltr\"><strong>Consider a system with $\\mathbf{2}$ processes that share $\\mathbf{5}$ instances of the same resource type.</strong> Each process can request a maximum of $\\mathbf{k}$ instances. Resources can be requested and released only one at a time. The largest value of $\\mathbf{K}$ that will always avoid deadlock is $\\_\\_\\_\\_$ .</p></div></span>",
            "image": "",
            "options": [],
            "answer": "504041",
            "solution": "<div class=\"solution-content\"><a name=\"504160\"></a><div itemprop=\"text\"><p style=\"text-align:center\"><img alt=\"\" height=\"904\" src=\"https://gateoverflow.in/?qa=blob&amp;qa_blobid=462856908536588156\" width=\"1080\"/></p><p> </p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/504041/go-classes-dpp-os-resource-allocation\" target=\"_blank\">GATE Overflow #504041</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider a system with a pool of $\\mathbf{20}$ instances of a single resource type. Each process can request a maximum of $\\mathbf{5}$ instances. To guarantee that the system will <strong>always avoid deadlock,</strong> what is the <strong>maximum</strong> number of processes $(N)$ that the system can support?</p></div></span>",
            "image": "",
            "options": [],
            "answer": "4",
            "solution": "<div class=\"solution-content\"><a name=\"504048\"></a><div itemprop=\"text\">Here we need to understand for the process to avoid deadlock there needs to be a conditional equation being satisfied which is as follows :<br/> <br/> <br/> R &gt;= n* (k - 1) + 1<br/> <br/> <br/> <br/> Where R = total number of instances, n = max instance a process can have, and k = max number of process system can support. <br/> <br/> Now, we are given, R = 20, n = 5, k = To find. Therefore, putting in equation we get,<br/> <br/> 20 &gt;= 5*(k-1)+1<br/> <br/> 19 &gt;= 5 * (k-1)<br/> <br/> 19/5 &gt;= k-1<br/> <br/> We, will, take the ceil value of 19/5, which comes out to be 3 as 19/5 = 3.8, therefore equality becomes,<br/> <br/> 3 &gt;= k - 1<br/> 3 + 1 &gt;= k<br/> <br/> 4 &gt;= k <br/> Therefore k cannot exceed the maximum value of 4. Thus, k = 4 is the answer of the question.</div><br><br><small>Source: <a href=\"https://gateoverflow.in/503601/go-classes-dpp-os-resource-allocation\" target=\"_blank\">GATE Overflow #503601</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider a system with $4$ processes that share $16$ instances of the same resource type. Each process can request a maximum of $K$ instances. Resources can be requested and released only one at a time. The largest value of $K$ that will<strong> always</strong> avoid deadlock is:</p></div></span>",
            "image": "",
            "options": [],
            "answer": "503599",
            "solution": "<div class=\"solution-content\"><a name=\"503600\"></a><div itemprop=\"text\"><p>The maximum number of resources that can be held by $N$ processes without causing a deadlock is given by the formula:</p><p>$$<br/>\\text { Max Held Resources }&lt;R<br/>$$</p><p>$$<br/>\\mathbf{4 \\times(K-1) + 1 \\leq 16}<br/>$$</p><p>$$<br/>\\begin{aligned}<br/>&amp; K-1 \\leq \\frac{15}{4} \\\\\\\\<br/>&amp; K-1 \\leq 3.75<br/>\\end{aligned}<br/>$$<br/>$$<br/>K \\leq 4.75<br/>$$</p><p><br/>Since $K$ must be an integer (number of resource instances), the <strong>largest integer value of</strong> $K$ that satisfies this condition is $\\mathbf{4}$.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/503599/go-classes-dpp-os-resource-allocation\" target=\"_blank\">GATE Overflow #503599</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>A computer system has $12$ <strong>tape drives</strong> (reusable resources). There are $n$ <strong>processes</strong> competing for these resources. Each process may require a <strong>maximum of</strong> $5$ <strong>tape drives</strong> to complete its execution.</p><p>The maximum value of $n$ for which the system can guarantee to be <strong>deadlock-free</strong> is:</p></div></span>",
            "image": "",
            "options": [],
            "answer": "2",
            "solution": "<div class=\"solution-content\"><a name=\"501849\"></a><div itemprop=\"text\"><p>Let:</p><ul><li>$R=$ Total number of resources (tape drives) $=12$<br/> </li><li>$M=$ Maximum number of resources needed by any single process $= 5$<br/> </li><li>$n=$ Number of processes (what we are solving for)<br/> </li></ul><p><strong>Worst-Case Scenario (Maximum Holding):</strong> For $n$ processes, the maximum resources that can be held without any process being able to complete is when all $n$ processes hold $M-1$ resources.</p><p>$$<br/>\\text { Total resources held }=n \\times(M-1)<br/>$$</p><p><br/><strong>Deadlock Condition:</strong> To guarantee no deadlock, the total number of resources must be strictly greater than the maximum resources that can be held in a state where no process can finish.</p><p>$$<br/>R&gt;n \\times(M-1)<br/>$$</p><p><br/>We are looking for the maximum integer $n$ that satisfies this condition.</p><p>$$<br/>\\begin{gathered}<br/>12&gt;n \\times(5-1) \\\\\\\\<br/>12&gt;4 n \\\\\\\\<br/>n&lt;\\frac{12}{4} \\\\\\\\<br/>n&lt;3<br/>\\end{gathered}<br/>$$</p><p><br/>Max value of $\\mathrm{n}=2$</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/501847/go-classes-dpp-os-resource-allocation\" target=\"_blank\">GATE Overflow #501847</a></small></div>"
        }
    ]
});

registerTest({
    "name": "DPP 07 - Operating System (Process Management & CPU Scheduling - Part 7)",
    "testLabel": "DPP 07",
    "testType": "DPP",
    "bracket": "Process Management & CPU Scheduling - Part 7",
    "subject": "os",
    "series": "cse-dpp-2027",
    "date": "Nov 03, 2026",
    "duration": "15 Min",
    "totalMarks": 4,
    "topicsCovered": "Process Management & CPU Scheduling (Practice Set 7)",
    "questions": [
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>A $\\mathbf{2000 ~Kbyte}$ memory is managed using variable partitions but no compaction. It currently has three partitions of sizes $\\mathbf{300 ~Kbyte}$, $\\mathbf{450 ~Kbyte}$, and $\\mathbf{650 ~Kbyte}$ respectively.</p><p>Assuming the system uses the <strong>Worst Fit</strong> allocation strategy, the <strong>smallest allocation request (in $\\textbf{Kbyte}$) that could be denied</strong> is for $\\_\\_\\_\\_$ .</p></div></span>",
            "image": "",
            "options": [],
            "answer": "201",
            "solution": "<div class=\"solution-content\"><a name=\"501372\"></a><div itemprop=\"text\"><p>$~\\text{Allocated Space} =300+450+650=1400 ~\\text{Kbyte}$</p><p>$~\\text{Total Free Space} =2000 ~\\text{Kbyte} -1400 ~\\text{Kbyte} =600 ~\\text{Kbyte}$<br/><br/><br/><strong>Determine the Denial Threshold ( $H_{\\max }+1$ ):</strong> When <strong>no compaction</strong> is available, a request $R$ is denied due to <strong>external fragmentation</strong> if $R$ is larger than the size of the largest available contiguous hole ( $H_{\\text {max }}$ ), even if the total free space is $\\geq R$.<br/><br/>The <strong>smallest request that could be denied</strong> is $H_{\\text {max }}+1$. To make this value as <strong>small</strong> as possible, we must assume a scenario where the largest hole, $H_{\\text {max }}$, is also as small as possible. This happens when the total free space is fragmented into many small, approximately equal pieces.<br/><br/><br/>Largest Hole $\\left(H_{\\text {max }}\\right)=\\frac{\\text { Total Free Space }}{\\text { Number of Partitions }}=\\frac{600 \\text { Kbyte }}{3}=200 ~\\text{Kbyte}$<br/><br/><br/>The smallest allocation request that could be denied is $\\mathbf{H}_{\\text {max }}+\\mathbf{1}$.<br/><br/><br/>Denied Request $=200~\\text{Kbyte} +1 ~\\text{Kbyte} =201~\\text{Kbyte}$</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/501370/go-classes-dpp-os-variable-partition\" target=\"_blank\">GATE Overflow #501370</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>A $\\mathbf{1500 ~Kbyte}$ memory is managed using variable partitions but no compaction. It currently has three partitions of sizes $\\mathbf{100 ~Kbyte, 200 ~Kbyte,}$ and $\\mathbf{400 ~Kbyte}$ respectively.</p><p>A request for $\\mathbf{250 ~Kbyte}$ is received and satisfied using the <strong>Best Fit</strong> allocation strategy.<br/><br/>The<strong> total amount of unused memory space</strong> remaining in the system (in Kbyte) is $\\_\\_\\_\\_$ .<br/>(Answer in integer)</p></div></span>",
            "image": "",
            "options": [],
            "answer": "950",
            "solution": "<div class=\"solution-content\"><a name=\"501766\"></a><div itemprop=\"text\">Well, the only thing were we could mislead in this question is no noticing the \"currently has three partiotions \" which means the three partitions are allocated and are the remaining of the total are free space to use. Because if it would have been free space then the answer would have been 450 as that would choose 400kb ( the smallest partiotion that can fit the required one) and then the remaining space would be 150. Thus, Totaling it we get 100+200+150 = 450. And this is wrong in this context.<br/> <br/> As, \"currently has three partitions\" means the spaces are allocated and that becomes, <br/> <br/> Total allocated space = 100+200+400 = 700 kb<br/> <br/> Total Size = 1500 kb<br/> <br/> Remaining size = 1500-700 = 800 kb<br/> <br/> Now the remaning size is free size, thus, 250 will come in 800 kb and the remaining size will become,<br/> <br/> Remaining size = 800-250 = 550 kb<br/> <br/> And, New Allocation size becomes = 100+200+400+250 = 950<br/> <br/> Therefore, Total Unused Memory Space becomes 550 kb.</div><br><br><small>Source: <a href=\"https://gateoverflow.in/501368/go-classes-dpp-os-variable-partition\" target=\"_blank\">GATE Overflow #501368</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\">Consider the following set of processes, with the arrival times and the CPU-burst times given in milliseconds.<br/> <br/> \\[<br/> \\begin{array}{lll}<br/> \\text{Process} &amp; \\text{Arrival Time} &amp; \\text{Burst Time} \\\\<br/> P1 &amp; 0 &amp; 8 \\\\<br/> P2 &amp; 3 &amp; 2 \\\\<br/> P3 &amp; 5 &amp; 1 \\\\<br/> P4 &amp; 6 &amp; 4 \\\\<br/> \\end{array}<br/> \\]<br/> <br/> What is the average completion time (in ms) for these processes with the Non-preemptive Shortest Job First (SJF) algorithm?</div></span>",
            "image": "",
            "options": [],
            "answer": "10.75",
            "solution": "<div class=\"solution-content\"><a name=\"501192\"></a><div itemprop=\"text\">43/4 = 10.75</div><br><br><small>Source: <a href=\"https://gateoverflow.in/501041/go-classes-dpp-os-cpu-scheduling\" target=\"_blank\">GATE Overflow #501041</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\">Consider the following set of processes, with the arrival times and the CPU-burst times given in milliseconds. A time quantum ($q$) of $2$ milliseconds is used.<br/> <br/> \\[<br/> \\begin{array}{lll}<br/> \\text{Process} &amp; \\text{Arrival Time} &amp; \\text{Burst Time} \\\\<br/> P1 &amp; 0 &amp; 7 \\\\<br/> P2 &amp; 2 &amp; 4 \\\\<br/> P3 &amp; 4 &amp; 5 \\\\<br/> P4 &amp; 6 &amp; 2 \\\\<br/> \\end{array}<br/> \\]<br/> <br/> What is the average waiting time (in ms) for these processes with the Round Robin (RR) algorithm?</div></span>",
            "image": "",
            "options": [],
            "answer": "6.75",
            "solution": "<div class=\"solution-content\"><a name=\"501040\"></a><div itemprop=\"text\">Correct Gantt Chart ( $\\mathrm{q}=2 \\mathrm{~ms}$ ):<br/> <br/> P1: 0-2<br/> <br/> P2: 2-4<br/> <br/> P1: 4-6<br/> <br/> P3: 6-8<br/> <br/> P2: 8-10<br/> <br/> P4: 10-12 ← here P4 is chosen<br/> <br/> P1: 12-14<br/> <br/> P3: 14-16<br/> <br/> P1: 16-17<br/> <br/> P3: 17-18<br/> <br/> Completion times:<br/> <br/> $$<br/> P 1=17, P 2=10, P 3=18, P 4=12<br/> $$<br/> <br/> Waiting times:<br/> <br/> $$<br/> \\begin{aligned}<br/> &amp; \\mathrm{P} 1: 17-0-7=10 \\mathrm{~ms} \\\\<br/> &amp; \\mathrm{P} 2: 10-2-4=4 \\mathrm{~ms} \\\\<br/> &amp; \\mathrm{P} 3: 18-4-5=9 \\mathrm{~ms} \\\\<br/> &amp; \\mathrm{P} 4: 12-6-2=4 \\mathrm{~ms}<br/> \\end{aligned}<br/> $$<br/> <br/> <br/> Average waiting time:<br/> <br/> $$<br/> \\frac{10+4+9+4}{4}=\\frac{27}{4}=6.75 \\mathrm{~ms}<br/> $$</div><br><br><small>Source: <a href=\"https://gateoverflow.in/501039/go-classes-dpp-os-round-robin\" target=\"_blank\">GATE Overflow #501039</a></small></div>"
        }
    ]
});

registerTest({
    "name": "DPP 08 - Operating System (System Calls, Threads & IPC - Part 1)",
    "testLabel": "DPP 08",
    "testType": "DPP",
    "bracket": "System Calls, Threads & IPC - Part 1",
    "subject": "os",
    "series": "cse-dpp-2027",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 14,
    "topicsCovered": "System Calls, Threads & IPC (Practice Set 1)",
    "questions": [
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Three processes $P_1$, $P_2$, and $P_3$ are scheduled using <strong>Round Robin</strong>.</p><p>Assume:</p><p>What percentage of CPU busy time is spent on <strong>context-switching overhead</strong>?</p><p>Give the answer approximately as a percentage.</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\"><p>Each process has one kernel thread</p></span>",
                "<span style=\"display: inline;\"><p>Time quantum $=\\text{10 ms}$</p></span>",
                "<span style=\"display: inline;\"><p>Context switch time $=\\text{100 microseconds}$</p></span>",
                "<span style=\"display: inline;\"><p>Two processes are CPU-bound</p></span>",
                "<span style=\"display: inline;\"><p>The third process performs an I/O operation after every $\\text{1 ms}$ of CPU execution</p></span>"
            ],
            "answer": "1.4",
            "solution": "<div class=\"solution-content\"><a name=\"546613\"></a><div itemprop=\"text\"><p>Consider one complete scheduling cycle.</p><p>The two CPU-bound processes each consume their full quantum:</p><p>$10 \\text{ ms} + 10 \\text{ ms}$</p><p>The I/O-bound process executes for only $1 \\text{ ms}$ before blocking for I/O.</p><p>Therefore, useful execution time is:</p><p>$10 + 10 + 1 = 21 \\text{ ms}$</p><p>There are three context switches in the cycle.</p><p>Each costs:</p><p>$100 \\text{ microseconds} = 0.1 \\text{ ms}$</p><p>Therefore, total switching time is:</p><p>$3 \\times 0.1 = 0.3 \\text{ ms}$</p><p>Total CPU busy time:</p><p>$21 + 0.3 = 21.3 \\text{ ms}$</p><p>Scheduling overhead:</p><p>$\\dfrac{0.3}{21.3} \\times 100\\approx 1.408\\%$</p><p> </p><p><strong>$\\therefore$ Answer $\\approx 1.4\\%$</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/546612/go-classes-dpp-gate-cs-operating-system-scheduling-overhead\" target=\"_blank\">GATE Overflow #546612</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"8467\" data-start=\"8415\">Which statement about <strong data-end=\"8455\" data-start=\"8437\">pipe-based IPC</strong> is correct?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">A conventional pipe directly provides simultaneous bidirectional communication.<br/></span>",
                "<span style=\"display: inline;\">Pipe capacity is limited only by available disk capacity.<br/></span>",
                "<span style=\"display: inline;\">Both reading from and writing to a pipe can cause a process to block.<br/></span>",
                "<span style=\"display: inline;\">A pipe can have only one reader or only one writer.</span>"
            ],
            "answer": "C",
            "solution": "<div class=\"solution-content\"><a name=\"546107\"></a><div itemprop=\"text\"><p data-end=\"8838\" data-start=\"8794\">A pipe is implemented using a finite buffer.</p><p data-end=\"8880\" data-start=\"8840\">A read can block when the pipe is empty.</p><p data-end=\"8929\" data-start=\"8882\">A write can block when the pipe buffer is full.</p><p data-end=\"8967\" data-start=\"8931\">Therefore both operations can block.</p><p data-end=\"9080\" data-start=\"8969\">Its capacity is not determined by total disk space, and multiple processes can potentially hold pipe endpoints.</p><p data-end=\"9095\" data-start=\"9082\"><strong data-end=\"9095\" data-start=\"9082\">Answer: C</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/546106/go-classes-dpp-gate-cs-operating-system-pipe-communication\" target=\"_blank\">GATE Overflow #546106</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"53\" data-start=\"0\">Consider the following statements about system calls:</p><p data-end=\"500\" data-start=\"471\">Which statements are correct?</p><p><strong>Given Details:</strong></p><ul><li>While a system-call service routine executes, the CPU operates in kernel mode.</li><li>By providing system calls, the operating system prevents user programs from directly accessing I/O devices.</li><li>Different operating systems provide applications with an identical, unified system-call interface.</li><li>System calls are the interface through which the OS kernel provides services to applications.</li></ul></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">I and IV only</span>",
                "<span style=\"display: inline;\">II and III only</span>",
                "<span style=\"display: inline;\">I, II and IV only</span>",
                "<span style=\"display: inline;\">I, III and IV only</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"546105\"></a><div itemprop=\"text\"><p data-end=\"7885\" data-start=\"7812\"><strong data-end=\"7826\" data-start=\"7812\">I is true.</strong> The actual service routine executes with kernel privilege.</p><p data-end=\"8010\" data-start=\"7887\"><strong data-end=\"7902\" data-start=\"7887\">II is true.</strong> Direct device operations are controlled by the OS. Applications request such services through system calls.</p><p data-end=\"8117\" data-start=\"8012\"><strong data-end=\"8029\" data-start=\"8012\">III is false.</strong> System-call interfaces are not inherently identical across different operating systems.</p><p data-end=\"8181\" data-start=\"8119\"><strong data-end=\"8134\" data-start=\"8119\">IV is true.</strong> This is a fundamental purpose of system calls.</p><p data-end=\"8193\" data-start=\"8183\"> </p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/546104/go-classes-dpp-gate-cs-operating-system-system-call-interface\" target=\"_blank\">GATE Overflow #546104</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"192\" data-start=\"0\">A process $\\text{P}$ contains a thread $\\text{T}$. Thread $\\text{T}$ opens a file and obtains file descriptor $\\text{fd}$, and then creates two threads $\\text{Ta}$ and $\\text{Tb}$.</p><p data-end=\"192\" data-start=\"0\">Which of the following resources can $\\text{Ta}$ and $\\text{Tb}$ share?</p><div> </div><div></div><p><strong>Given Details:</strong></p><ul><li>Address space of process $\\text{P}$</li><li>Stack of thread $\\text{T}$</li><li>File descriptor $\\text{fd}$</li></ul></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">I only</span>",
                "<span style=\"display: inline;\">I and III only</span>",
                "<span style=\"display: inline;\">II and III only</span>",
                "<span style=\"display: inline;\">I, II and III</span>"
            ],
            "answer": "B",
            "solution": "<div class=\"solution-content\"><a name=\"546163\"></a><div itemprop=\"text\"><p>Correct answer is <strong>B. I and III only</strong>.</p><ul><li><strong>I is True:</strong> All threads in process P share the exact same virtual address space.</li><li><strong>II is False:</strong> Each thread is allocated its own stack. While thread stacks physically sit inside that shared address space (meaning a thread <em>can</em> access a sibling's stack variable via a direct pointer because the MMU only enforces memory protection per process, not per thread), they do not share thread T's stack. Meaning that they have different stack space, stack space is not shared. But a thread can access a siblings stack, if needed.</li><li><strong>III is True:</strong> File descriptors belong to the process. Since T opened fd before spawning T_a and T_b, fd is shared by all threads in P.</li></ul></div><br><br><small>Source: <a href=\"https://gateoverflow.in/546052/go-classes-dpp-gate-cs-operating-system-thread-resource-sharing\" target=\"_blank\">GATE Overflow #546052</a></small></div>"
        },
        {
            "marks": 2,
            "neg": 0,
            "type": "MSQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"55\" data-start=\"0\">A system has resource types $A, B, C$ and four threads.</p><p data-end=\"99\" data-start=\"57\">The total number of resource instances is:</p><p data-end=\"121\" data-start=\"101\">$(A,B,C)=(11,21,19)$</p><p data-end=\"176\" data-start=\"123\">The current allocations and maximum requirements are:</p><p data-end=\"398\" data-start=\"178\">$$\\begin{array}{|c|c|c|}<br/>\\hline<br/>\\text{Thread} &amp; \\text{Allocation }(A,B,C) &amp; \\text{Maximum }(A,B,C) \\\\<br/>\\hline<br/>T_1 &amp; (2,3,10) &amp; (4,10,19) \\\\<br/>T_2 &amp; (1,6,3) &amp; (5,9,5) \\\\<br/>T_3 &amp; (4,7,3) &amp; (9,13,6) \\\\<br/>T_4 &amp; (2,3,1) &amp; (4,5,3) \\\\<br/>\\hline<br/>\\end{array}$$</p><p data-end=\"429\" data-start=\"400\">Which statements are correct?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">With $21$ instances of $B$, the system is in a safe state.<br/></span>",
                "<span style=\"display: inline;\">$T_4 \\rightarrow T_2 \\rightarrow T_3 \\rightarrow T_1$ is a valid safe sequence.<br/></span>",
                "<span style=\"display: inline;\">If the total number of $B$ instances is reduced from $21$ to $20$, the system is still safe.<br/></span>",
                "<span style=\"display: inline;\">With only $20$ instances of $B$, no thread can be selected as the first thread by the safety algorithm.</span>"
            ],
            "answer": "B",
            "solution": "<div class=\"solution-content\"><a name=\"545023\"></a><div itemprop=\"text\"><p data-end=\"4971\" data-start=\"4923\">First calculate the current available resources.</p><p data-end=\"4998\" data-start=\"4973\">Total current allocation:</p><p data-end=\"5013\" data-start=\"5000\">$A=2+1+4+2=9$</p><p data-end=\"5029\" data-start=\"5015\">$B=3+6+7+3=19$</p><p data-end=\"5047\" data-start=\"5031\">$C=10+3+3+1=17$.</p><p data-end=\"5059\" data-start=\"5049\">$\\therefore Available=(11,21,19)-(9,19,17)=(2,2,2)$</p><p data-end=\"5127\" data-start=\"5108\">Now calculate Need:</p><p>$$\\begin{array}{|c|c|}<br/>\\hline<br/>\\text{Thread} &amp; \\text{Need} \\\\<br/>\\hline<br/>T_1 &amp; (2,7,9) \\\\<br/>T_2 &amp; (4,3,2) \\\\<br/>T_3 &amp; (5,6,3) \\\\<br/>T_4 &amp; (2,2,2) \\\\<br/>\\hline<br/>\\end{array}$$</p><p data-end=\"5277\" data-start=\"5246\">Initially only $T_4$ satisfies $(2,2,2)\\leq(2,2,2)$.</p><p data-end=\"5357\" data-start=\"5302\">So $T_4$ completes and releases its current allocation:</p><p data-end=\"5381\" data-start=\"5359\">$Work=(2,2,2)+(2,3,1)=(4,5,3)$</p><p data-end=\"5417\" data-start=\"5396\">Now $T_2$ can finish:</p><p data-end=\"5440\" data-start=\"5419\">$(4,3,2)\\leq(4,5,3)$</p><p data-end=\"5454\" data-start=\"5442\">After $T_2$:</p><p data-end=\"5478\" data-start=\"5456\">$Work=(4,5,3)+(1,6,3)=(5,11,6)$</p><p data-end=\"5515\" data-start=\"5494\">Now $T_3$ can finish:</p><p data-end=\"5539\" data-start=\"5517\">$(5,6,3)\\leq(5,11,6)$.</p><p data-end=\"5553\" data-start=\"5541\">After $T_3$:</p><p data-end=\"5578\" data-start=\"5555\">$Work=(5,11,6)+(4,7,3)=(9,18,9)$</p><p data-end=\"5619\" data-start=\"5594\">Finally $T_1$ can finish.</p><p data-end=\"5626\" data-start=\"5621\">Thus, $\\boxed{T_4\\rightarrow T_2\\rightarrow T_3\\rightarrow T_1}$ is a safe sequence.</p><p data-end=\"5736\" data-start=\"5709\">So <strong data-end=\"5735\" data-start=\"5712\">A and B are correct</strong>.<br/> </p><p data-end=\"5776\" data-section-id=\"1ffo2xo\" data-start=\"5738\">Now reduce total $B$ from $21$ to $20$</p><p data-end=\"5796\" data-start=\"5778\">Available becomes $(2,1,2)$</p><p data-end=\"5840\" data-start=\"5810\">But all remaining B-needs are:</p><p data-end=\"5849\" data-start=\"5842\">$T_1:7$</p><p data-end=\"5858\" data-start=\"5851\">$T_2:3$</p><p data-end=\"5867\" data-start=\"5860\">$T_3:6$</p><p data-end=\"5877\" data-start=\"5869\">$T_4:2$.</p><p data-end=\"5941\" data-start=\"5879\">Even $T_4$ requires $2$ units of $B$, while only $1$ is available.</p><p data-end=\"5990\" data-start=\"5943\">So <strong data-end=\"5989\" data-start=\"5946\">no thread can start the safety sequence</strong>.</p><p data-end=\"6012\" data-start=\"5992\">The state is unsafe.</p><p data-end=\"6020\" data-start=\"6014\">So, <strong>C is false and D is true.</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/545021/go-classes-dpp-gate-cs-operating-system-multi-resource-safety\" target=\"_blank\">GATE Overflow #545021</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"49\" data-start=\"0\">A system uses base-and-bound address translation.</p><p data-end=\"73\" data-start=\"51\">The registers contain:</p><p data-end=\"97\" data-start=\"75\">$\\texttt{base} = 1000$</p><p data-end=\"121\" data-start=\"99\">$\\texttt{bound} = 100$</p><p data-end=\"178\" data-start=\"123\">The CPU fetches and executes the following instruction:</p><p data-end=\"202\" data-start=\"180\">$\\texttt{load 10, r1}$</p><p data-end=\"276\" data-start=\"204\">Assume that the instruction itself is stored at a valid logical address.</p><p data-end=\"368\" data-start=\"278\">How many main-memory accesses are generated while fetching and executing this instruction?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$0$<br/></span>",
                "<span style=\"display: inline;\">$1$<br/></span>",
                "<span style=\"display: inline;\">$2$<br/></span>",
                "<span style=\"display: inline;\">$3$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"542798\"></a><div itemprop=\"text\"><p data-end=\"59\" data-start=\"0\">The instruction requires two separate main-memory accesses.</p><p data-end=\"149\" data-start=\"61\">First memory access: The CPU fetches the instruction $\\texttt{load 10, r1}$ from memory.</p><p data-end=\"227\" data-start=\"151\">Second memory access: The CPU loads the data stored at logical address $10$.</p><p data-end=\"268\" data-start=\"229\">The physical address of the operand is:</p><p data-end=\"336\" data-start=\"270\">$\\text{Physical address} = \\texttt{base} + \\text{logical address}$</p><p data-end=\"351\" data-start=\"338\">$= 1000 + 10$</p><p data-end=\"361\" data-start=\"353\">$= 1010$</p><p data-end=\"480\" data-start=\"363\">The bound check and address addition are performed by hardware. </p><p data-end=\"480\" data-start=\"363\">They do not require an additional main-memory access.</p><p data-end=\"492\" data-start=\"482\">$\\therefore\\text{Total memory accesses} = 1 + 1 = 2$</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/542797/go-classes-dpp-gate-cs-operating-system-base-bound-accesses\" target=\"_blank\">GATE Overflow #542797</a></small></div>"
        },
        {
            "marks": 2,
            "neg": 0,
            "type": "MSQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"46\" data-start=\"0\">Which of the following statements are correct?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">A successful $\\texttt{exec()}$ call replaces the current program image but does not change the process ID.<br/></span>",
                "<span style=\"display: inline;\">After a successful $\\texttt{fork()}$, the parent and child initially have separate logical address spaces.<br/></span>",
                "<span style=\"display: inline;\">All threads belonging to the same process share one common stack and one common program counter.<br/></span>",
                "<span style=\"display: inline;\">Kernel-level threads belonging to the same process may execute simultaneously on different processor cores.</span>"
            ],
            "answer": [
                "A"
            ],
            "solution": "<div class=\"solution-content\"><a name=\"542697\"></a><div itemprop=\"text\"><p data-end=\"23\" data-start=\"0\">Statement A is correct.</p><p data-end=\"150\" data-start=\"25\">A successful $\\texttt{exec()}$ call replaces the code, data, heap, and stack of the current process with a new program image.</p><p data-end=\"224\" data-start=\"152\">However, it remains the same process, so its process ID does not change.<br/> </p><p data-end=\"249\" data-start=\"226\">Statement B is correct.</p><p data-end=\"334\" data-start=\"251\">After $\\texttt{fork()}$, the parent and child have separate logical address spaces.</p><p data-end=\"483\" data-start=\"336\">Each process has its own copy of variables, stack, and heap. A change made by one process does not normally modify the private memory of the other.</p><p data-end=\"510\" data-start=\"485\"><br/>Statement C is incorrect.</p><p data-end=\"586\" data-start=\"512\">Threads of the same process share code, global data, heap, and open files.</p><p data-end=\"621\" data-start=\"588\">However, each thread has its own:</p><ul data-end=\"664\" data-start=\"623\"><li data-end=\"630\" data-section-id=\"93mldt\" data-start=\"623\">Stack<br/> </li><li data-end=\"648\" data-section-id=\"vnib1r\" data-start=\"631\">Program counter<br/> </li><li data-end=\"664\" data-section-id=\"1jokz7\" data-start=\"649\">CPU registers</li></ul><p data-end=\"689\" data-start=\"666\"><br/>Statement D is correct.</p><p data-end=\"772\" data-start=\"691\">Kernel-level threads are independently visible to the operating system scheduler.</p><p data-end=\"875\" data-is-last-node=\"\" data-is-only-node=\"\" data-start=\"774\">Therefore, different threads of the same process may run simultaneously on different processor cores.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/542694/go-classes-dpp-gate-cs-operating-system-process-and-threads\" target=\"_blank\">GATE Overflow #542694</a></small></div>"
        },
        {
            "marks": 2,
            "neg": 0,
            "type": "MSQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"6268\" data-start=\"6229\">Consider the following shared variable:</p><p data-end=\"6300\" data-start=\"6270\">$\\texttt{volatile int counter = 1000;}$</p><p data-end=\"6354\" data-start=\"6302\">Two threads each execute the following exactly once:</p><p data-end=\"6368\" data-start=\"6356\">$\\texttt{counter--;}$</p><p data-end=\"6442\" data-start=\"6370\">The main thread waits for both worker threads and then prints $\\texttt{counter}$.</p><p data-end=\"6487\" data-start=\"6444\">Which of the following values are possible?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$1000$<br/></span>",
                "<span style=\"display: inline;\">$999$<br/></span>",
                "<span style=\"display: inline;\">$998$<br/></span>",
                "<span style=\"display: inline;\">$997$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"541170\"></a><div itemprop=\"text\"><p data-end=\"6667\" data-start=\"6588\">If the two decrement operations execute sequentially, the first thread changes:</p><p data-end=\"6691\" data-start=\"6669\">$1000 \\rightarrow 999$</p><p data-end=\"6724\" data-start=\"6693\">The second thread then changes:</p><p data-end=\"6747\" data-start=\"6726\">$999 \\rightarrow 998$</p><p data-end=\"6778\" data-start=\"6749\">Therefore, $998$ is possible.</p><p data-end=\"6818\" data-start=\"6780\">Now consider an interleaved execution.</p><p data-end=\"6861\" data-start=\"6820\">Both threads may read the original value:</p><p data-end=\"6869\" data-start=\"6863\">$1000$</p><p data-end=\"6899\" data-start=\"6871\">Each independently computes:</p><p data-end=\"6913\" data-start=\"6901\">$1000-1=999$</p><p data-end=\"6937\" data-start=\"6915\">Both then write $999$.</p><p data-end=\"6988\" data-start=\"6939\">One decrement is lost, so $999$ is also possible.</p><p data-end=\"7064\" data-start=\"6990\">The value cannot remain $1000$ because at least one write of $999$ occurs.</p><p data-end=\"7148\" data-start=\"7066\">The value cannot become $997$ because only two decrement operations are performed.</p><p data-end=\"7186\" data-start=\"7150\">Therefore, the possible outputs are: <strong>B, C</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/541169/go-classes-dpp-gate-cs-operating-system-concurrent-decrement-outputs\" target=\"_blank\">GATE Overflow #541169</a></small></div>"
        },
        {
            "marks": 2,
            "neg": 0,
            "type": "MSQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"4647\" data-start=\"4619\">Consider the following code:</p><p data-end=\"4699\" data-start=\"4649\">$\\texttt{balance}$ is a shared variable initialized to $0$.</p><p data-end=\"4737\" data-start=\"4701\">Each of two worker threads performs:</p><p data-end=\"4756\" data-start=\"4739\">$\\texttt{int result = 0;}$</p><p data-end=\"4782\" data-start=\"4758\">$\\texttt{result = result + 200;}$</p><p data-end=\"4810\" data-start=\"4784\">$\\texttt{balance = balance + 200;}$</p><p data-end=\"4858\" data-start=\"4812\">Which of the following statements are correct?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">Each thread prints $200$ for its private variable $\\texttt{result}$.<br/></span>",
                "<span style=\"display: inline;\">The value printed for $\\texttt{result}$ may vary because both threads share it.<br/></span>",
                "<span style=\"display: inline;\">The final value of $\\texttt{balance}$ may vary because both threads update it without synchronization.<br/></span>",
                "<span style=\"display: inline;\">Since each thread adds $200$, the final value of $\\texttt{balance}$ is guaranteed to be $400$.</span>"
            ],
            "answer": [
                "A"
            ],
            "solution": "<div class=\"solution-content\"><a name=\"541168\"></a><div itemprop=\"text\"><p data-end=\"5270\" data-start=\"5245\">Statement (A) is correct.</p><p data-end=\"5379\" data-start=\"5272\">$\\texttt{result}$ is a local variable. Each thread has its own stack and therefore its own private copy of $\\texttt{result}$.</p><p data-end=\"5402\" data-start=\"5381\">Each thread performs:</p><p data-end=\"5422\" data-start=\"5404\">$\\texttt{result}=0+200=200$</p><p data-end=\"5451\" data-start=\"5424\">Statement (B) is incorrect.</p><p data-end=\"5509\" data-start=\"5453\">The two threads do not share the same $\\texttt{result}$ variable.</p><p data-end=\"5536\" data-start=\"5511\">Statement (C) is correct.</p><p data-end=\"5573\" data-start=\"5538\">$\\texttt{balance}$ is shared. The operation:</p><p data-end=\"5600\" data-start=\"5575\">$\\texttt{balance} = \\texttt{balance} + 200$</p><p data-end=\"5713\" data-start=\"5602\">contains separate read, modify, and write steps. The two threads may interleave these steps and lose an update.</p><p data-end=\"5742\" data-start=\"5715\">Statement (D) is incorrect.</p><p data-end=\"5897\" data-start=\"5744\">The final value can be $400$ when the updates occur one after another, but it can also be $200$ if both threads read $0$ before either writes its result.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/541167/go-classes-dpp-gate-cs-operating-system-shared-variable-race\" target=\"_blank\">GATE Overflow #541167</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"3469\" data-start=\"3424\">A shared variable $x$ initially contains $0$.</p><p data-end=\"3506\" data-start=\"3471\">Thread $T_1$ adds $1$ to $x$ using:</p><p data-end=\"3515\" data-start=\"3508\">$R_1=x$</p><p data-end=\"3528\" data-start=\"3517\">$R_1=R_1+1$</p><p data-end=\"3537\" data-start=\"3530\">$x=R_1$</p><p data-end=\"3574\" data-start=\"3539\">Thread $T_2$ adds $2$ to $x$ using:</p><p data-end=\"3583\" data-start=\"3576\">$R_2=x$</p><p data-end=\"3596\" data-start=\"3585\">$R_2=R_2+2$</p><p data-end=\"3605\" data-start=\"3598\">$x=R_2$</p><p data-end=\"3655\" data-start=\"3607\">The instructions execute in the following order:</p><p data-end=\"3672\" data-start=\"3657\">$T_1:$ read $x$</p><p data-end=\"3688\" data-start=\"3674\">$T_1:$ add $1$</p><p data-end=\"3705\" data-start=\"3690\">$T_2:$ read $x$</p><p data-end=\"3721\" data-start=\"3707\">$T_2:$ add $2$</p><p data-end=\"3739\" data-start=\"3723\">$T_1:$ write $x$</p><p data-end=\"3757\" data-start=\"3741\">$T_2:$ write $x$</p><p data-end=\"3790\" data-start=\"3759\"> </p><p data-end=\"3790\" data-start=\"3759\">What is the final value of $x$?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$1$<br/></span>",
                "<span style=\"display: inline;\">$2$<br/></span>",
                "<span style=\"display: inline;\">$3$<br/></span>",
                "<span style=\"display: inline;\">The value must be greater than $3$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"541165\"></a><div itemprop=\"text\"><p data-end=\"3904\" data-start=\"3894\">Initially,</p><p data-end=\"3911\" data-start=\"3906\">$x=0$</p><p data-end=\"3936\" data-start=\"3913\">Thread $T_1$ reads $x$:</p><p data-end=\"3945\" data-start=\"3938\">$R_1=0$</p><p data-end=\"3959\" data-start=\"3947\">It adds $1$:</p><p data-end=\"3968\" data-start=\"3961\">$R_1=1$</p><p data-end=\"4028\" data-start=\"3970\">Before $T_1$ writes its result, $T_2$ reads the old value:</p><p data-end=\"4037\" data-start=\"4030\">$R_2=0$</p><p data-end=\"4061\" data-start=\"4039\">Thread $T_2$ adds $2$:</p><p data-end=\"4070\" data-start=\"4063\">$R_2=2$</p><p data-end=\"4097\" data-start=\"4072\">Thread $T_1$ then writes:</p><p data-end=\"4104\" data-start=\"4099\">$x=1$</p><p data-end=\"4135\" data-start=\"4106\">Finally, thread $T_2$ writes:</p><p data-end=\"4142\" data-start=\"4137\">$x=2$</p><p data-end=\"4219\" data-start=\"4144\">The update performed by $T_1$ is overwritten by the later store from $T_2$.</p><p data-end=\"4231\" data-start=\"4221\">$\\boxed{\\therefore x=2}$</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/541164/go-classes-dpp-gate-cs-operating-system-lost-update-interleaving\" target=\"_blank\">GATE Overflow #541164</a></small></div>"
        }
    ]
});

registerTest({
    "name": "DPP 09 - Operating System (System Calls, Threads & IPC - Part 2)",
    "testLabel": "DPP 09",
    "testType": "DPP",
    "bracket": "System Calls, Threads & IPC - Part 2",
    "subject": "os",
    "series": "cse-dpp-2027",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 19,
    "topicsCovered": "System Calls, Threads & IPC (Practice Set 2)",
    "questions": [
        {
            "marks": 2,
            "neg": 0,
            "type": "MSQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"1905\" data-start=\"1859\">Which of the following statements are correct?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">Processes normally have private address spaces, so a shared-memory segment must be explicitly established in their address spaces.<br/></span>",
                "<span style=\"display: inline;\">Shared memory removes the need to synchronize accesses to shared data.<br/></span>",
                "<span style=\"display: inline;\">Message passing allows processes to communicate without using shared variables.<br/></span>",
                "<span style=\"display: inline;\">A non-blocking send is synchronous because the sender waits until the receiver accepts the message.</span>"
            ],
            "answer": [
                "A"
            ],
            "solution": "<div class=\"solution-content\"><a name=\"541163\"></a><div itemprop=\"text\"><p data-end=\"2388\" data-start=\"2363\">Statement (A) is correct.</p><p data-end=\"2553\" data-start=\"2390\">Different processes normally have separate address spaces. The operating system must explicitly map a common shared-memory region into the participating processes.</p><p data-end=\"2582\" data-start=\"2555\">Statement (B) is incorrect.</p><p data-end=\"2733\" data-start=\"2584\">Multiple processes can access shared memory concurrently. Therefore, synchronization is required to prevent inconsistent updates and race conditions.</p><p data-end=\"2760\" data-start=\"2735\">Statement (C) is correct.</p><p data-end=\"2908\" data-start=\"2762\">In message passing, processes exchange data through operations such as $\\texttt{send}$ and $\\texttt{receive}$. They do not need to directly access common variables.</p><p data-end=\"2937\" data-start=\"2910\">Statement (D) is incorrect.</p><p data-end=\"3052\" data-start=\"2939\">A non-blocking send is asynchronous. The sender sends the message and continues without waiting for the receiver.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/541162/go-classes-dpp-gate-cs-operating-system-properties-of-ipc\" target=\"_blank\">GATE Overflow #541162</a></small></div>"
        },
        {
            "marks": 2,
            "neg": 0,
            "type": "MSQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"856\" data-start=\"747\">Which of the following statements are true about a scheduler that implements a Round Robin scheduling policy?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">This scheduler will minimize the number of context switches when scheduling processes that never sleep or wait for I/O.<br/></span>",
                "<span style=\"display: inline;\">This scheduler has higher throughput than a First-Come First-Served policy.<br/></span>",
                "<span style=\"display: inline;\">This scheduler will approximately evenly divide CPU time between processes that never sleep or wait for I/O.<br/></span>",
                "<span style=\"display: inline;\">It is possible to implement a Round Robin scheduler such that selecting the next process to run and marking a process as runnable takes $O(1)$ time.</span>"
            ],
            "answer": [
                "A"
            ],
            "solution": "<div class=\"solution-content\"><a name=\"540741\"></a><div itemprop=\"text\"><ol start=\"1\" style=\"list-style-type: upper-alpha;\"><li data-end=\"1596\" data-start=\"1390\"><strong data-end=\"1408\" data-start=\"1390\">Incorrect. </strong>Round Robin periodically preempts processes after their time quantum expires.<br/>This can cause many context switches.<br/>FCFS generally performs fewer context switches for CPU-bound processes.<br/> </li><li data-end=\"1748\" data-start=\"1598\"><strong data-end=\"1616\" data-start=\"1598\">Incorrect. </strong>Round Robin does not inherently guarantee higher throughput than FCFS.<br/>Frequent context switches may introduce additional overhead.<br/> </li><li data-end=\"1946\" data-start=\"1750\"><strong data-end=\"1766\" data-start=\"1750\">Correct. </strong>If several CPU-bound processes remain continuously runnable, Round Robin repeatedly gives each process a time quantum.<br/>Hence, CPU time is divided approximately equally among them.<br/> </li><li data-end=\"2148\" data-start=\"1948\"><strong data-end=\"1964\" data-start=\"1948\">Correct. </strong>The ready queue can be maintained using an appropriate queue structure so that removing the next runnable process and adding a runnable process can both be performed in constant time.</li></ol></div><br><br><small>Source: <a href=\"https://gateoverflow.in/540739/go-classes-dpp-gate-cs-operating-system-round-robin-scheduling\" target=\"_blank\">GATE Overflow #540739</a></small></div>"
        },
        {
            "marks": 2,
            "neg": 0,
            "type": "MSQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"5352\" data-start=\"5256\">Which of the following statements about operating-system schedulers are correct?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">The long-term scheduler selects jobs from the job pool and admits them for execution.<br/></span>",
                "<span style=\"display: inline;\">The short-term scheduler selects a process from the ready queue and allocates the CPU to it.<br/></span>",
                "<span style=\"display: inline;\">The medium-term scheduler swaps processes out of memory and can reduce the degree of multiprogramming.<br/></span>",
                "<span style=\"display: inline;\">Once a process has been swapped out by the medium-term scheduler, it cannot later be reintroduced into memory to resume execution.</span>"
            ],
            "answer": [
                "A"
            ],
            "solution": "<div class=\"solution-content\"><a name=\"540456\"></a><div itemprop=\"text\"><ol start=\"1\" style=\"list-style-type: upper-alpha;\"><li data-end=\"5990\" data-start=\"5854\"><strong data-end=\"5870\" data-start=\"5854\">Correct.</strong> The long-term scheduler, also called the job scheduler, controls which jobs are admitted into the system for execution.<br/> </li><li data-end=\"6110\" data-start=\"5992\"><strong data-end=\"6008\" data-start=\"5992\">Correct.</strong> The short-term or CPU scheduler selects among ready processes and decides which one receives the CPU.<br/> </li><li data-end=\"6324\" data-start=\"6112\"><strong data-end=\"6128\" data-start=\"6112\">Correct.</strong> The medium-term scheduler can temporarily remove processes from memory. This reduces the number of processes actively competing for resources and therefore reduces the degree of multiprogramming.<br/> </li><li data-end=\"6448\" data-start=\"6326\"><strong data-end=\"6344\" data-start=\"6326\">Incorrect.</strong> A swapped-out process may later be brought back into memory and resume execution from where it stopped.</li></ol></div><br><br><small>Source: <a href=\"https://gateoverflow.in/540455/go-classes-dpp-gate-cs-operating-system-schedulers\" target=\"_blank\">GATE Overflow #540455</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"2635\" data-start=\"2563\">Consider a single-CPU system with processes $A$, $B$, and $C$.</p><p data-end=\"2672\" data-start=\"2637\">The following events have occurred:</p><p data-end=\"2982\" data-start=\"2908\">Immediately after Step $5$, what are the states of $A$, $B$, and $C$ respectively?</p><p><strong>Given Details:</strong></p><ul><li>$A$ begins execution.</li><li>$A$ creates $B$, and $B$ is scheduled.</li><li>The running process requests disk I/O.</li><li>The running process creates $C$, but $C$ is not yet scheduled.</li><li>The time slice of the running process expires, and $C$ is scheduled.</li></ul></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$A:$ RUNNING, $B:$ BLOCKED, $C:$ READY</span>",
                "<span style=\"display: inline;\">$A:$ READY, $B:$ BLOCKED, $C:$ RUNNING</span>",
                "<span style=\"display: inline;\">$A:$ BLOCKED, $B:$ READY, $C:$ RUNNING</span>",
                "<span style=\"display: inline;\">$A:$ READY, $B:$ RUNNING, $C:$ BLOCKED</span>"
            ],
            "answer": "B",
            "solution": "<div class=\"solution-content\"><a name=\"540448\"></a><div itemprop=\"text\"><p>At Step $2$, $B$ is scheduled while $A$ becomes ready.</p><p>$B$ subsequently issues the disk I/O request, so $B$ becomes BLOCKED.</p><p>$A$ resumes execution and creates $C$. $C$ initially enters the ready state.</p><p>When $A$'s time slice expires and $C$ is scheduled:</p><ul><li>$A$ becomes READY<br/> </li><li>$B$ remains BLOCKED, since its I/O has not yet completed<br/> </li><li>$C$ becomes RUNNING<br/> </li></ul><p><strong>Answer : B</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/540447/go-classes-dpp-gate-cs-operating-system-process-state\" target=\"_blank\">GATE Overflow #540447</a></small></div>"
        },
        {
            "marks": 2,
            "neg": 0,
            "type": "MSQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"3117\" data-start=\"3032\">Which of the following statements about threading models are correct?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">User-level threads can be implemented without modifying the operating-system kernel.<br/></span>",
                "<span style=\"display: inline;\">In a pure user-level threading model, a blocking I/O operation by one thread may block all threads of the process.<br/></span>",
                "<span style=\"display: inline;\">Kernel-level threads belonging to the same process cannot execute simultaneously on multiple processors.<br/></span>",
                "<span style=\"display: inline;\">A hybrid threading model can map multiple user-level threads onto a smaller number of kernel scheduling entities.</span>"
            ],
            "answer": [
                "A"
            ],
            "solution": "<div class=\"solution-content\"><a name=\"540363\"></a><div itemprop=\"text\"><p data-end=\"3809\" data-start=\"3625\"><strong data-end=\"3654\" data-start=\"3625\">Statement (A) is correct.</strong><br data-end=\"3657\" data-start=\"3654\"/>User-level threads are managed by a user-space thread library.<br/>They can therefore be implemented without adding thread-management support to the kernel.</p><p data-end=\"4022\" data-start=\"3811\"><strong data-end=\"3840\" data-start=\"3811\">Statement (B) is correct.</strong><br data-end=\"3843\" data-start=\"3840\"/>In a many-to-one user-level model, the kernel sees the entire process as one schedulable entity.<br/>If one user thread performs blocking I/O, the kernel may block the entire process.</p><p data-end=\"4244\" data-start=\"4024\"><strong data-end=\"4055\" data-start=\"4024\">Statement (C) is incorrect.</strong><br data-end=\"4058\" data-start=\"4055\"/>Kernel-level threads are independently visible to the operating-system scheduler.<br/>Different threads of the same process can therefore be scheduled simultaneously on different processors.</p><p data-end=\"4490\" data-start=\"4246\"><strong data-end=\"4275\" data-start=\"4246\">Statement (D) is correct.</strong><br data-end=\"4278\" data-start=\"4275\"/>A hybrid or many-to-many model multiplexes several user-level threads over a set of kernel-level threads.<br/>It combines user-level management with kernel-supported parallelism.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/540362/go-classes-dpp-gate-cs-operating-system-multithreading-models\" target=\"_blank\">GATE Overflow #540362</a></small></div>"
        },
        {
            "marks": 2,
            "neg": 0,
            "type": "MSQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"889\" data-start=\"803\">Which of the following statements about context switching are correct?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">When switching between two threads, the registers, stack pointer, and program counter of the outgoing thread must be saved.<br/></span>",
                "<span style=\"display: inline;\">Switching between two threads of the same process always requires loading a different top-level page-table pointer.<br/></span>",
                "<span style=\"display: inline;\">When switching between threads belonging to different processes, the address-space information of the incoming process must be loaded.<br/></span>",
                "<span style=\"display: inline;\">A thread cannot be context-switched while it is executing inside a critical section and holding a lock.</span>"
            ],
            "answer": [
                "A"
            ],
            "solution": "<div class=\"solution-content\"><a name=\"540361\"></a><div itemprop=\"text\"><p data-end=\"1672\" data-start=\"1451\"><strong data-end=\"1480\" data-start=\"1451\">Statement (A) is correct.</strong><br data-end=\"1483\" data-start=\"1480\"/>Every thread has a separate execution context.<br/>The registers, stack pointer, and program counter of the outgoing thread are stored in its TCB, and those of the incoming thread are restored.</p><p data-end=\"1884\" data-start=\"1674\"><strong data-end=\"1705\" data-start=\"1674\">Statement (B) is incorrect.</strong><br data-end=\"1708\" data-start=\"1705\"/>Threads belonging to the same process share the same address space and page table.<br/>Therefore, switching between them does not require changing the top-level page-table pointer.</p><p data-end=\"2112\" data-start=\"1886\"><strong data-end=\"1915\" data-start=\"1886\">Statement (C) is correct.</strong><br data-end=\"1918\" data-start=\"1915\"/>Threads belonging to different processes use different address spaces.<br/>In addition to restoring the thread context, the operating system must load the page-table pointer of the incoming process.</p><p data-end=\"2363\" data-start=\"2114\"><strong data-end=\"2145\" data-start=\"2114\">Statement (D) is incorrect.</strong><br data-end=\"2148\" data-start=\"2145\"/>Locks and scheduling are independent.<br/>A timer interrupt may cause a thread to be preempted while it holds a lock.<br/>The lock remains held until the thread resumes and releases it.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/540360/go-classes-dpp-gate-cs-operating-system-threads-%26-context-switching\" target=\"_blank\">GATE Overflow #540360</a></small></div>"
        },
        {
            "marks": 2,
            "neg": 0,
            "type": "MSQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"2550\" data-start=\"2488\">Which of the following statements are correct?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">With kernel-level threads, if one thread of a process blocks, all the threads of that process will also be blocked.<br/></span>",
                "<span style=\"display: inline;\">A lock implementation should always block instead of spin if it will always be used only on a uniprocessor.<br/></span>",
                "<span style=\"display: inline;\">On a multiprocessor, a lock implementation should spin instead of block if it is known that the lock will be available before the time required for a context switch.<br/></span>",
                "<span style=\"display: inline;\">Periodically yielding the processor while spin-waiting reduces the amount of wasted time to be proportional to the duration of a time slice.</span>"
            ],
            "answer": [
                "A"
            ],
            "solution": "<div class=\"solution-content\"><a name=\"540358\"></a><div itemprop=\"text\"><p data-end=\"3370\" data-start=\"3167\"><strong data-end=\"3198\" data-start=\"3167\">Statement (A) is incorrect.</strong><br/>Kernel-level threads are individually known to the operating system.<br/>If one kernel-level thread blocks, another runnable thread of the same process can still be scheduled.</p><p data-end=\"3567\" data-start=\"3372\"><strong data-end=\"3401\" data-start=\"3372\">Statement (B) is correct.</strong><br/>On a uniprocessor, a thread that is spinning prevents the thread holding the lock from running.<br/>Blocking allows the lock holder to be scheduled and release the lock.</p><p data-end=\"3798\" data-start=\"3569\"><strong data-end=\"3598\" data-start=\"3569\">Statement (C) is correct.</strong><br/>On a multiprocessor, the lock holder may be executing on another processor.<br/>If the lock will become available sooner than the cost of blocking and performing a context switch, spinning is preferable.</p><p data-end=\"4043\" data-start=\"3800\"><strong data-end=\"3831\" data-start=\"3800\">Statement (D) is incorrect.</strong><br/>Yielding avoids spinning for an entire time slice.<br/>The resulting wasted time is related to the cost of context switching, not the full duration of the scheduling time slice.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/540357/go-classes-dpp-gate-cs-operating-system-threads-%26-context-switching\" target=\"_blank\">GATE Overflow #540357</a></small></div>"
        },
        {
            "marks": 2,
            "neg": 0,
            "type": "MSQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"700\" data-start=\"638\">Which of the following statements are correct?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">Threads that are part of the same process share the same stack pointer.<br/></span>",
                "<span style=\"display: inline;\">Threads that are part of the same process share the same page-table base register.<br/></span>",
                "<span style=\"display: inline;\">Threads that are part of the same process share the same general-purpose registers.<br/></span>",
                "<span style=\"display: inline;\">Context-switching between threads of the same process requires flushing the TLB or tracking an ASID in the TLB.</span>"
            ],
            "answer": [
                "A"
            ],
            "solution": "<div class=\"solution-content\"><a name=\"540355\"></a><div itemprop=\"text\"><p data-end=\"1303\" data-start=\"1134\"><strong data-end=\"1165\" data-start=\"1134\">Statement (A) is incorrect.</strong><br/>Each thread has a separate stack and stack pointer so that it can maintain its own function calls, local variables and execution history.</p><p data-end=\"1470\" data-start=\"1305\"><strong data-end=\"1334\" data-start=\"1305\">Statement (B) is correct.</strong><br/>Threads of the same process share the same virtual address space.<br/>Therefore, they use the same page table and page-table base register.</p><p data-end=\"1671\" data-start=\"1472\"><strong data-end=\"1503\" data-start=\"1472\">Statement (C) is incorrect.</strong><br/>Every thread has an independent register context.<br/>The registers of the outgoing thread are saved and those of the incoming thread are restored during a context switch.</p><p data-end=\"1884\" data-start=\"1673\"><strong data-end=\"1704\" data-start=\"1673\">Statement (D) is incorrect.</strong><br/>Threads of the same process use the same virtual-to-physical address mappings.<br/>Existing TLB entries remain valid when switching between them.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/540354/go-classes-dpp-gate-cs-operating-system-threads-%26-context-switching\" target=\"_blank\">GATE Overflow #540354</a></small></div>"
        },
        {
            "marks": 2,
            "neg": 0,
            "type": "MSQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"377\" data-start=\"220\">Consider a process that successfully executes a member of the $\\texttt{exec()}$ family of system calls. </p><p data-end=\"377\" data-start=\"220\">Which of the following statements are correct?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">The process continues with the same process ID.<br/></span>",
                "<span style=\"display: inline;\">A new child process is created.<br/></span>",
                "<span style=\"display: inline;\">The existing program image is replaced by the new program image.<br/></span>",
                "<span style=\"display: inline;\">After the new program terminates, execution resumes from the statement following $\\texttt{exec()}$.<br/></span>",
                "<span style=\"display: inline;\">Open file descriptors generally remain open across the $\\texttt{exec()}$ call, unless specifically marked to be closed.</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"540222\"></a><div itemprop=\"text\"><p data-end=\"1136\" data-start=\"807\">A successful $\\texttt{exec()}$ does not create a new process. </p><p data-end=\"1136\" data-start=\"807\">It transforms the currently running process by replacing its code, static data, heap, stack, and other program-memory components with those of the new executable. </p><p data-end=\"1136\" data-start=\"807\">Since it remains the same process, its PID does not change.</p><p data-end=\"1340\" data-start=\"1138\">A successful $\\texttt{exec()}$ never returns to the old program. </p><p data-end=\"1340\" data-start=\"1138\">Execution begins at the entry point of the new program, so the statement following $\\texttt{exec()}$ is not executed.</p><p data-end=\"1604\" data-is-last-node=\"\" data-is-only-node=\"\" data-start=\"1342\">Open file descriptors are generally preserved across $\\texttt{exec()}$. </p><p data-end=\"1604\" data-is-last-node=\"\" data-is-only-node=\"\" data-start=\"1342\">This behaviour enables shells to set up input/output redirection before executing a new program. </p><p data-end=\"1604\" data-is-last-node=\"\" data-is-only-node=\"\" data-start=\"1342\">A descriptor marked with the close-on-exec flag is an exception.</p><p data-end=\"1604\" data-is-last-node=\"\" data-is-only-node=\"\" data-start=\"1342\"><strong>Answer : A; C; E</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/540221/go-classes-dpp-gate-cs-operating-system-exec-system-call\" target=\"_blank\">GATE Overflow #540221</a></small></div>"
        },
        {
            "marks": 2,
            "neg": 0,
            "type": "MSQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"5856\" data-start=\"5778\">Consider the following statements about processes and threads. Which of them is/are correct?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">Using multiple threads can allow a process to continue performing useful work while one thread waits for a long-latency operation.<br/></span>",
                "<span style=\"display: inline;\">A multithreaded program is useful only when it runs on a multiprocessor system.<br/></span>",
                "<span style=\"display: inline;\">Thread management should always be performed entirely in user space because kernel-supported threads provide no significant advantage.<br/></span>",
                "<span style=\"display: inline;\">A multithreaded server can be organised using a dispatcher thread and multiple worker threads to receive and process requests.</span>"
            ],
            "answer": [
                "A"
            ],
            "solution": "<div class=\"solution-content\"><a name=\"540219\"></a><div itemprop=\"text\"><p data-end=\"6677\" data-start=\"6555\"><strong data-end=\"6582\" data-start=\"6555\">Statement A is correct.</strong><br/>While one thread waits for I/O or communication, another ready thread may perform useful work.</p><p data-end=\"6933\" data-start=\"6679\"><strong data-end=\"6709\" data-start=\"6679\">Statement B is incorrect.</strong><br/>Threads can improve responsiveness and overlap I/O with computation even on a single-core system.<br/>A single core provides concurrency through interleaved execution, although it cannot provide simultaneous parallel execution.</p><p data-end=\"7129\" data-start=\"6935\"><strong data-end=\"6966\" data-start=\"6935\">Statement C is incorrect.</strong><br/>User-level threads may have lower management overhead, but kernel-level threads allow independent kernel scheduling and true parallel execution on multiple cores.</p><p data-end=\"7311\" data-is-last-node=\"\" data-is-only-node=\"\" data-start=\"7131\"><strong data-end=\"7159\" data-start=\"7131\">Statement D is correct.</strong><br/>Dispatcher and worker-thread structures are commonly used to divide request acceptance from request processing.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/540218/go-classes-dpp-gate-cs-operating-system-multithreading\" target=\"_blank\">GATE Overflow #540218</a></small></div>"
        }
    ]
});

registerTest({
    "name": "DPP 10 - Operating System (System Calls, Threads & IPC - Part 3)",
    "testLabel": "DPP 10",
    "testType": "DPP",
    "bracket": "System Calls, Threads & IPC - Part 3",
    "subject": "os",
    "series": "cse-dpp-2027",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 11,
    "topicsCovered": "System Calls, Threads & IPC (Practice Set 3)",
    "questions": [
        {
            "marks": 2,
            "neg": 0,
            "type": "MSQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"4497\" data-start=\"4393\">Which of the following statements are correct for threads belonging to the same process?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">They share the process’s code, data, and heap.<br/></span>",
                "<span style=\"display: inline;\">Every thread has its own stack and register context.<br/></span>",
                "<span style=\"display: inline;\">Kernel-level threads of the same process may execute simultaneously on different CPU cores.<br/></span>",
                "<span style=\"display: inline;\">All threads share one program counter.<br/></span>",
                "<span style=\"display: inline;\">In a many-to-one model, the kernel schedules every user thread independently.</span>"
            ],
            "answer": [
                "A",
                "B",
                "C"
            ],
            "solution": "<div class=\"solution-content\"><a name=\"540217\"></a><div itemprop=\"text\"><p data-end=\"5060\" data-start=\"4889\">Threads of the same process operate within a common address space. </p><p data-end=\"5060\" data-start=\"4889\">Therefore, they share code, global data, heap memory, and other process-level resources.</p><p data-end=\"5147\" data-start=\"5062\">Each thread represents a separate execution stream, so every thread requires its own:</p><ul data-end=\"5219\" data-start=\"5149\"><li data-end=\"5166\" data-section-id=\"1et53s8\" data-start=\"5149\">Program counter<br/> </li><li data-end=\"5182\" data-section-id=\"6rn050\" data-start=\"5167\">CPU registers<br/> </li><li data-end=\"5190\" data-section-id=\"178hrba\" data-start=\"5183\">Stack<br/> </li><li data-end=\"5219\" data-section-id=\"1ndexwg\" data-start=\"5191\">Thread-control information<br/> </li></ul><p data-end=\"5362\" data-start=\"5221\">When threads are visible to the kernel, different threads of the same process can be scheduled on separate CPU cores and execute in parallel.</p><p data-end=\"5545\" data-start=\"5364\">In the many-to-one model, the kernel sees only one kernel-level schedulable entity and does not independently schedule every user-level thread.</p><p data-end=\"5545\" data-start=\"5364\"><strong>Answer : A,B,C</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/540216/go-classes-dpp-gate-cs-operating-system-resources-%26-execution-of-threads\" target=\"_blank\">GATE Overflow #540216</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"1817\" data-start=\"1720\">Consider the following events that occur when a user process makes a system call:</p><p data-end=\"2276\" data-start=\"2229\">Which of the following gives the correct order?</p><p><strong>Given Details:</strong></p><ul><li>The kernel executes the requested service routine.</li><li>The library wrapper places the system-call number and arguments in specified locations.</li><li>A trap instruction saves the user context and changes the processor to kernel mode.</li><li>The kernel uses the system-call number to locate the appropriate handler.</li><li>A return-from-trap instruction restores the user context and changes the processor to user mode.</li></ul></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$2, 3, 4, 1, 5$</span>",
                "<span style=\"display: inline;\">$2, 4, 3, 1, 5$</span>",
                "<span style=\"display: inline;\">$3, 2, 4, 5, 1$</span>",
                "<span style=\"display: inline;\">$4, 2, 3, 1, 5$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"540213\"></a><div itemprop=\"text\"><p data-end=\"2488\" data-start=\"2396\">The system-call wrapper first prepares the system-call number and arguments.</p><p data-end=\"2610\" data-start=\"2490\">The special trap instruction then transfers control to the kernel while saving the state required to resume the process.</p><p data-end=\"2763\" data-start=\"2612\">The kernel uses the system-call number as an index into its system-call table, locates the corresponding handler, and performs the requested operation.</p><p data-end=\"2910\" data-start=\"2765\">Finally, the return-from-trap instruction restores the saved user state and resumes execution in user mode.</p><p data-end=\"2910\" data-start=\"2765\"><strong>Answer : A</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/540212/go-classes-dpp-gate-cs-operating-system-system-call-execution\" target=\"_blank\">GATE Overflow #540212</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"334\" data-start=\"243\">Consider the following C program. Assume that every $\\texttt{fork()}$ call succeeds.</p><pre class=\"prettyprint linenums lang-c_cpp\" data-end=\"496\" data-linenums=\"true\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"\" data-rawcode=\"int main(void) { unsigned long int i; for (i = 0; i &lt; 6; i++) if (fork() &gt;= 0) continue; else break; }\" data-start=\"336\">int main(void) { unsigned long int i; for (i = 0; i &lt; 6; i++) if (fork() &gt;= 0) continue; else break; }</pre><p data-end=\"602\" data-start=\"498\">What is the total number of processes present after the loop terminates, including the original process?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$7$<br/></span>",
                "<span style=\"display: inline;\">$8$<br/></span>",
                "<span style=\"display: inline;\">$32$<br/></span>",
                "<span style=\"display: inline;\">$64$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"540093\"></a><div itemprop=\"text\"><p data-end=\"716\" data-start=\"670\">Asuccessful $\\texttt{fork()}$ returns:</p><ul data-end=\"785\" data-start=\"718\"><li data-end=\"758\" data-section-id=\"1b0jom8\" data-start=\"718\">A positive value in the parent process<br/> </li><li data-end=\"785\" data-section-id=\"t8875z\" data-start=\"759\">$0$ in the child process<br/> </li></ul><p data-end=\"914\" data-start=\"787\">Therefore, the condition $\\texttt{fork() &gt;= 0}$ is true in both the parent and the child. </p><p data-end=\"914\" data-start=\"787\">Every process continues to the next iteration.</p><p data-end=\"966\" data-start=\"916\">The number of processes doubles in each iteration:</p><ul data-end=\"1120\" data-start=\"968\"><li data-end=\"992\" data-section-id=\"purio2\" data-start=\"968\">After iteration $1:~2$</li><li data-end=\"1017\" data-section-id=\"qjinjb\" data-start=\"993\">After iteration $2: ~4$</li><li data-end=\"1042\" data-section-id=\"omzky2\" data-start=\"1018\">After iteration $3: ~8$</li><li data-end=\"1068\" data-section-id=\"70lape\" data-start=\"1043\">After iteration $4: ~16$</li><li data-end=\"1094\" data-section-id=\"f87vqt\" data-start=\"1069\">After iteration $5: ~32$</li><li data-end=\"1120\" data-section-id=\"11x3eph\" data-start=\"1095\">After iteration $6: ~64$</li></ul><p data-end=\"1170\" data-start=\"1122\">Thus, the total number of processes is $2^6=64$.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/540092/go-classes-dpp-gate-cs-operating-system-fork-system-call\" target=\"_blank\">GATE Overflow #540092</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"1470\" data-start=\"1413\">Assume that every $\\texttt{fork()}$ call succeeds.</p><pre class=\"prettyprint linenums lang-c_cpp\" data-end=\"1656\" data-linenums=\"true\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"\" data-rawcode='int main() { int a = 0; int rc = fork(); a++; if (rc == 0) { rc = fork(); a++; } else { a++; } printf(\"a is %d\\n\", a); }' data-start=\"1472\">int main() { int a = 0; int rc = fork(); a++; if (rc == 0) { rc = fork(); a++; } else { a++; } printf(\"a is %d\\n\", a); }</pre><p data-end=\"1714\" data-start=\"1658\">What is the largest value of $\\texttt{a}$ printed by the program?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">The value may vary because of a race condition<br/></span>",
                "<span style=\"display: inline;\">$2$<br/></span>",
                "<span style=\"display: inline;\">$3$<br/></span>",
                "<span style=\"display: inline;\">None of the above</span>"
            ],
            "answer": "B",
            "solution": "<div class=\"solution-content\"><a name=\"540091\"></a><div itemprop=\"text\"><p data-end=\"1930\" data-start=\"1839\">After the first $\\texttt{fork()}$, the parent and child have separate copies of $\\texttt{a}$.</p><p data-end=\"2023\" data-start=\"1932\">Both processes execute the first increment, making their private value of $\\texttt{a}$ equal to $1$.</p><p data-end=\"2039\" data-start=\"2025\">In the parent:</p><p data-end=\"2054\" data-start=\"2041\">$\\texttt{a++;}$</p><p data-end=\"2089\" data-start=\"2056\">Therefore, the parent prints $2$.</p><p data-end=\"2195\" data-start=\"2091\">The first child executes another $\\texttt{fork()}$. Both the child and the newly created grandchild then execute:</p><p data-end=\"2210\" data-start=\"2197\">$\\texttt{a++;}$</p><p data-end=\"2249\" data-start=\"2212\">Their private value also becomes $2$.</p><p data-end=\"2323\" data-start=\"2251\">Hence, every process prints $2$, and the largest value printed is $2$.</p><p data-end=\"2323\" data-start=\"2251\"><strong>Answer : B</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/540090/go-classes-dpp-gate-cs-operating-system-fork-system-call\" target=\"_blank\">GATE Overflow #540090</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"2606\" data-start=\"2549\">Assume that every $\\texttt{fork()}$ call succeeds.</p><pre class=\"prettyprint linenums lang-c_cpp\" data-end=\"2758\" data-linenums=\"true\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"\" data-rawcode='int main() { int pid; pid = fork() &amp;&amp; fork(); if (!pid) printf(\"A\\n\"); else printf(\"B\\n\"); return 0; }' data-start=\"2608\">int main() { int pid; pid = fork() &amp;&amp; fork(); if (!pid) printf(\"A\\n\"); else printf(\"B\\n\"); return 0; }</pre><p data-end=\"2813\" data-start=\"2760\">How many times are $\\texttt{A}$ and $\\texttt{B}$ printed, respectively?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\texttt{A}$ is printed once and $\\texttt{B}$ is printed once<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{A}$ is printed once and $\\texttt{B}$ is printed twice<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{A}$ is printed twice and $\\texttt{B}$ is printed once<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{A}$ is printed twice and $\\texttt{B}$ is printed twice</span>"
            ],
            "answer": "C",
            "solution": "<div class=\"solution-content\"><a name=\"540088\"></a><div itemprop=\"text\"><p data-end=\"3201\" data-start=\"3140\">The expression uses the logical AND operator:</p><p data-end=\"3228\" data-start=\"3203\">$\\texttt{fork() \\&amp;\\&amp; fork()}$</p><p data-end=\"3302\" data-start=\"3230\">The second $\\texttt{fork()}$ is evaluated only when the first operand is nonzero.</p><p data-end=\"3327\" data-start=\"3304\">For the first $\\texttt{fork()}$ :</p><ul data-end=\"3506\" data-start=\"3329\"><li data-end=\"3404\" data-section-id=\"5y4dvn\" data-start=\"3329\">The parent receives a positive value, so it executes the second $\\texttt{fork()}$.<br/> </li><li data-end=\"3506\" data-section-id=\"s5hj7\" data-start=\"3405\">The child receives $0$, so short-circuit evaluation prevents it from executing the second $\\texttt{fork()}$.</li></ul><p data-end=\"3562\" data-start=\"3508\">The parent that executes the second $\\texttt{fork()}$ produces:</p><ul data-end=\"3672\" data-start=\"3564\"><li data-end=\"3618\" data-section-id=\"496x2w\" data-start=\"3564\">One parent for which the complete expression is true<br/> </li><li data-end=\"3672\" data-section-id=\"12bvgsx\" data-start=\"3619\">One child for which the second $\\texttt{fork()}$ returns $0$</li></ul><p data-end=\"3711\" data-start=\"3674\">Therefore, there are three processes:</p><ul data-end=\"3828\" data-start=\"3713\"><li data-end=\"3749\" data-section-id=\"1ioxyal\" data-start=\"3713\">First child $: \\texttt{pid = 0}$, prints $\\texttt{A}$<br/> </li><li data-end=\"3787\" data-section-id=\"1ozczjr\" data-start=\"3750\">Second child $: \\texttt{pid = 0}$, prints $\\texttt{A}$<br/> </li><li data-end=\"3828\" data-section-id=\"1vha896\" data-start=\"3788\">Original parent $:\\texttt{pid = 1}$, prints $\\texttt{B}$</li></ul><p data-end=\"3881\" data-start=\"3830\">Thus, $\\texttt{A}$ is printed twice and $\\texttt{B}$ is printed once.</p><p data-end=\"3881\" data-start=\"3830\"><strong>Answer : C</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/540064/go-classes-dpp-gate-cs-operating-system-fork-system-call\" target=\"_blank\">GATE Overflow #540064</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"4216\" data-start=\"4127\">Consider the following program. Assume that every $\\texttt{fork()}$ call succeeds.</p><pre class=\"prettyprint linenums lang-c_cpp\" data-end=\"4382\" data-linenums=\"true\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"\" data-rawcode=\"int main() { int p1 = 1, p2 = 2, p3 = 3; p1 = fork(); if (p2 &gt; 0) p2 = fork(); if (p1 &gt; 0) p3 = fork(); return 0; }\" data-start=\"4218\">int main() { int p1 = 1, p2 = 2, p3 = 3; p1 = fork(); if (p2 &gt; 0) p2 = fork(); if (p1 &gt; 0) p3 = fork(); return 0; }</pre><p data-end=\"4469\" data-start=\"4384\">Including the original process, how many processes exist when the program terminates?</p></div></span>",
            "image": "",
            "options": [],
            "answer": "6",
            "solution": "<div class=\"solution-content\"><a name=\"540063\"></a><div itemprop=\"text\"><p data-end=\"4553\" data-start=\"4505\">Initially, there is one process.</p><p data-end=\"4578\" data-start=\"4555\">The first statement is:</p><p data-end=\"4601\" data-start=\"4580\">$\\texttt{p1 = fork();}$</p><p data-end=\"4630\" data-start=\"4603\">This creates two processes:</p><ul data-end=\"4685\" data-start=\"4632\"><li data-end=\"4663\" data-section-id=\"ahr8sg\" data-start=\"4632\">Original parent with $\\texttt{p1 &gt; 0}$</li><li data-end=\"4685\" data-section-id=\"vatscs\" data-start=\"4664\">Child with $\\texttt{p1 = 0}$</li></ul><p data-end=\"4733\" data-start=\"4687\">Both processes have $\\texttt{p2 = 2}$, so both execute:</p><p data-end=\"4756\" data-start=\"4735\">$\\texttt{p2 = fork();}$</p><p data-end=\"4794\" data-start=\"4758\">The number of processes becomes $4$.</p><p data-end=\"4809\" data-start=\"4796\">Now consider:</p><pre class=\"prettyprint linenums lang-c_cpp\" data-end=\"4848\" data-linenums=\"true\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"\" data-rawcode=\"if (p1 &gt; 0) p3 = fork();\" data-start=\"4811\">if (p1 &gt; 0) p3 = fork();</pre><p data-end=\"4914\" data-start=\"4850\">Only processes descended from the original parent have $\\texttt{p1 &gt; 0}$.</p><p data-end=\"5010\" data-start=\"4916\">There are two such processes after the second $\\texttt{fork()}$, and each creates one additional child.</p><p data-end=\"5022\" data-start=\"5012\">Therefore:</p><p data-end=\"5031\" data-start=\"5024\">$4+2=6$</p><p data-end=\"5079\" data-is-last-node=\"\" data-is-only-node=\"\" data-start=\"5033\">Hence, the total number of processes is $6$.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/540062/go-classes-dpp-gate-cs-operating-system-fork-system-call\" target=\"_blank\">GATE Overflow #540062</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"372\" data-start=\"210\">Consider the following C program. When the execution reaches line $5$, how many processes and threads, respectively, exist in the process hierarchy?</p><pre class=\"prettyprint linenums lang-c_cpp\" data-end=\"469\" data-linenums=\"true\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"\" data-rawcode=\"int main() { int i; for (i = 0; i &lt; 3; i++) fork(); while (1); }\" data-start=\"374\">int main() { int i; for (i = 0; i &lt; 3; i++) fork(); while (1); }</pre></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$1$ process and $0$ threads<br/></span>",
                "<span style=\"display: inline;\">$3$ processes and $0$ threads<br/></span>",
                "<span style=\"display: inline;\">$7$ processes and $7$ threads<br/></span>",
                "<span style=\"display: inline;\">$8$ processes and $8$ threads</span>"
            ],
            "answer": "D",
            "solution": "<div class=\"solution-content\"><a name=\"540061\"></a><div itemprop=\"text\"><p data-end=\"744\" data-start=\"674\">Initially, there is one process containing one thread.</p><p data-end=\"864\" data-start=\"746\">Each process executes every subsequent $\\texttt{fork()}$ call. Therefore, the number of processes doubles after each iteration:</p><ul data-end=\"992\" data-start=\"866\"><li data-end=\"907\" data-section-id=\"1vt29t7\" data-start=\"866\">After the first $\\texttt{fork()}:$ $2$ processes<br/> </li><li data-end=\"950\" data-section-id=\"1porlgn\" data-start=\"908\">After the second $\\texttt{fork()}:$ $4$ processes<br/> </li><li data-end=\"992\" data-section-id=\"x2xwag\" data-start=\"951\">After the third $\\texttt{fork()}:$ $8$ processes</li></ul><p data-end=\"1083\" data-start=\"994\">In general, after $n$ consecutive $\\texttt{fork()}$ calls, the total number of processes is $2^n$.</p><p data-end=\"1150\" data-start=\"1085\">Thus, the program has $2^3 = 8$ processes when it reaches line $5$.</p><p data-end=\"1312\" data-start=\"1152\">No additional threads are explicitly created. </p><p data-end=\"1312\" data-start=\"1152\">Every process contains its single original thread, so there are $8$ threads across the complete process hierarchy.</p><p data-end=\"1381\" data-is-last-node=\"\" data-is-only-node=\"\" data-start=\"1314\"><strong>Answer : D</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/540060/go-classes-dpp-gate-cs-operating-system-fork-system-call\" target=\"_blank\">GATE Overflow #540060</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"7973\" data-start=\"7924\">Consider the following statement:</p><p data-end=\"8091\" data-start=\"7977\">After $\\texttt{fork()}$, the child’s standard input, standard output, and standard error are reset to their default states.</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">True<br/></span>",
                "<span style=\"display: inline;\">False</span>"
            ],
            "answer": "B",
            "solution": "<div class=\"solution-content\"><a name=\"539956\"></a><div itemprop=\"text\"><p data-end=\"8233\" data-start=\"8142\">The child inherits copies of the parent’s open file descriptors, including:</p><ul data-end=\"8286\" data-start=\"8235\"><li data-end=\"8251\" data-section-id=\"8fmmw5\" data-start=\"8235\">Standard input<br/> </li><li data-end=\"8269\" data-section-id=\"1rthq6k\" data-start=\"8252\">Standard output<br/> </li><li data-end=\"8286\" data-section-id=\"8ckeuj\" data-start=\"8270\">Standard error<br/> </li></ul><p data-end=\"8450\" data-start=\"8288\">The corresponding descriptors in the parent and child generally refer to the same underlying open-file descriptions. </p><p data-end=\"8450\" data-start=\"8288\">They are not automatically reset by $\\texttt{fork()}$.</p><p data-end=\"8450\" data-start=\"8288\">Therefore, the given statement is <strong>False.</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/539954/go-classes-dpp-gate-cs-operating-system-fork-system-call\" target=\"_blank\">GATE Overflow #539954</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"3546\" data-start=\"3489\">Assume that every $\\texttt{fork()}$ call succeeds.</p><pre class=\"prettyprint linenums lang-c_cpp\" data-end=\"3765\" data-linenums=\"true\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"\" data-rawcode='int value = 0; int main() { fork(); value++; fork(); value++; if (fork() == 0) printf(\"Child\\n\"); else printf(\"Parent\\n\"); value++; printf(\"%d\\n\", value); }' data-start=\"3548\">int value = 0; int main() { fork(); value++; fork(); value++; if (fork() == 0) printf(\"Child\\n\"); else printf(\"Parent\\n\"); value++; printf(\"%d\\n\", value); }</pre><p data-end=\"3869\" data-start=\"3767\">How many times is $\\texttt{Child}$ printed, and what value is printed by every process in the final $\\texttt{printf()}$?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\texttt{Child}$ is printed $2$ times, and the value is $3$.<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{Child}$ is printed $4$ times, and the value is $3$.<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{Child}$ is printed $4$ times, and the value is $8$.<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{Child}$ is printed $8$ times, and the value is $3$.</span>"
            ],
            "answer": "B",
            "solution": "<div class=\"solution-content\"><a name=\"539953\"></a><div itemprop=\"text\"><p>When $\\texttt{fork()}$ is called, the operating system creates a child process that is an exact duplicate of the parent process.</p><p>Each process gets its own independent copy of the variables in memory. </p><p>When one process increments $\\texttt{value}$, it does not affect the $\\texttt{value}$ in any other process.</p><p> </p><p>Lets now tracing the Code.</p><p><strong>Initial State </strong>$:$ We start with $1$ process. $\\texttt{value = 0}$.</p><p><strong>First</strong> $\\texttt{fork()}:$</p><ul><li>The $1$ process splits into $2$ processes.<br/> </li><li>Both processes execute $\\texttt{value++}$.<br/> </li><li>Both processes now have $\\texttt{value = 1}$ in their respective memories.<br/> </li></ul><p><strong>Second</strong> $\\texttt{fork()}:$</p><ul><li>Both of those $2$ processes call $\\texttt{fork()}$, splitting into $4$ processes.<br/> </li><li>All $4$ processes execute $\\texttt{value++}$.<br/> </li><li>All $4$ processes now have $\\texttt{value = 2}$ in their respective memories.<br/> </li></ul><p><strong>Third</strong> $\\texttt{fork()}$ (inside the $\\texttt{if}$ statement) $:$</p><ul><li>All $4$ processes call $\\texttt{fork()}$, splitting into $8$ processes total, consisting of $4$ parent processes and $4$ new child processes.<br/> </li><li>$\\texttt{fork()}$ returns $0$ to the newly created child processes, so the $\\texttt{if (fork() == 0)}$ condition is true for exactly $4$ processes.<br/> </li><li>Therefore, $\\texttt{\"Child\"}$ is printed $4$ times, and $\\texttt{\"Parent\"}$ is printed $4$ times.<br/> </li></ul><p><strong>Final Increment and Print </strong>$:$</p><p>All $8$ processes proceed to the end of the program.</p><p>All $8$ processes execute $\\texttt{value++}$, changing their individual local copies of $\\texttt{value}$ from $2$ to $3$.</p><p>All $8$ processes print $3$.</p><p> </p><p><strong>Answer : B</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/539951/go-classes-dpp-gate-cs-operating-system-fork-system-call\" target=\"_blank\">GATE Overflow #539951</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"1478\" data-start=\"1389\">Assuming that no error occurs, which statement about $\\texttt{fork()}$ is correct?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">It is called once and returns once.<br/></span>",
                "<span style=\"display: inline;\">It is called once and returns twice.<br/></span>",
                "<span style=\"display: inline;\">It is called once and never returns.<br/></span>",
                "<span style=\"display: inline;\">It is called twice and returns once.</span>"
            ],
            "answer": "B",
            "solution": "<div class=\"solution-content\"><a name=\"539946\"></a><div itemprop=\"text\"><p data-end=\"1864\" data-start=\"1708\">A successful call to $\\texttt{fork()}$ creates a child process. </p><p data-end=\"1864\" data-start=\"1708\">Both the parent and child continue execution from the instruction following $\\texttt{fork()}$.</p><p data-end=\"1898\" data-start=\"1866\">The return values are different:</p><ul data-end=\"1969\" data-start=\"1900\"><li data-end=\"1925\" data-section-id=\"4sa57h\" data-start=\"1900\">The child receives $0$.<br/> </li><li data-end=\"1969\" data-section-id=\"10bu2xx\" data-start=\"1926\">The parent receives the PID of the child.<br/> </li></ul><p data-end=\"2039\" data-start=\"1971\">Therefore, one invocation produces two returns, one in each process.</p><p data-end=\"2039\" data-start=\"1971\"><br/><strong>Answer : B</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/539945/go-classes-dpp-gate-cs-operating-system-fork-system-call\" target=\"_blank\">GATE Overflow #539945</a></small></div>"
        }
    ]
});

registerTest({
    "name": "DPP 11 - Operating System (System Calls, Threads & IPC - Part 4)",
    "testLabel": "DPP 11",
    "testType": "DPP",
    "bracket": "System Calls, Threads & IPC - Part 4",
    "subject": "os",
    "series": "cse-dpp-2027",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 12,
    "topicsCovered": "System Calls, Threads & IPC (Practice Set 4)",
    "questions": [
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"725\" data-start=\"600\">When a process creates a child using $\\texttt{fork()}$, which of the following is shared between the parent and child?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">Stack<br/></span>",
                "<span style=\"display: inline;\">Heap<br/></span>",
                "<span style=\"display: inline;\">Shared-memory segments<br/></span>",
                "<span style=\"display: inline;\">All of the above</span>"
            ],
            "answer": "C",
            "solution": "<div class=\"solution-content\"><a name=\"539944\"></a><div itemprop=\"text\"><p data-end=\"1008\" data-start=\"845\">The child receives its own logical copy of the parent’s stack and heap. </p><p data-end=\"1008\" data-start=\"845\">Changes made by one process to these areas do not affect the other process.</p><p data-end=\"1100\" data-start=\"1010\">However, an explicitly created shared-memory segment remains accessible to both processes.</p><p data-end=\"1166\" data-start=\"1102\"><strong>Answer : C</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/539943/go-classes-dpp-gate-cs-operating-system-fork-system-call\" target=\"_blank\">GATE Overflow #539943</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"203\" data-start=\"95\">When a child process is created using the $\\texttt{fork()}$ system call, its state is set to running.</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">True<br/></span>",
                "<span style=\"display: inline;\">False</span>"
            ],
            "answer": "B",
            "solution": "<div class=\"solution-content\"><a name=\"539857\"></a><div itemprop=\"text\"><p data-end=\"418\" data-start=\"254\">After a child process is created using $\\texttt{fork()}$, it is placed in the <strong data-end=\"354\" data-start=\"339\">ready state</strong>, meaning it is ready to execute and waiting for CPU allocation.</p><p data-end=\"631\" data-start=\"420\">The operating system scheduler decides whether the parent process or the child process will execute next. </p><p data-end=\"631\" data-start=\"420\">Therefore, the child process does not necessarily enter the running state immediately after its creation.</p><p data-end=\"667\" data-is-last-node=\"\" data-is-only-node=\"\" data-start=\"633\">Hence, the statement is <strong data-end=\"666\" data-start=\"657\">False</strong>.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/539856/go-classes-dpp-gate-cs-operating-system-fork-system-call\" target=\"_blank\">GATE Overflow #539856</a></small></div>"
        },
        {
            "marks": 2,
            "neg": 0,
            "type": "MSQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"1583\" data-start=\"1517\">Which of the following is/are true for interrupts?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">Interrupts temporarily suspend the currently running process to handle a specific event.<br/></span>",
                "<span style=\"display: inline;\">When an interrupt occurs, the CPU saves its current state.<br/></span>",
                "<span style=\"display: inline;\">Interrupts can be generated by external devices or by a program itself.<br/></span>",
                "<span style=\"display: inline;\">All of the above</span>"
            ],
            "answer": "D",
            "solution": "<div class=\"solution-content\"><a name=\"539853\"></a><div itemprop=\"text\"><p data-end=\"2042\" data-start=\"1883\">When an interrupt occurs, the CPU temporarily stops the execution of the current process and transfers control to an interrupt service routine.</p><p data-end=\"2166\" data-start=\"2044\">Before handling the interrupt, the CPU saves the current execution state so that the interrupted process can resume later.</p><p data-end=\"2314\" data-start=\"2168\">Interrupts may be generated by external hardware devices, such as keyboards and timers, or by software through traps, exceptions, or system calls.</p><p data-end=\"2408\" data-start=\"2316\">Therefore, all the given statements are correct.</p><p data-end=\"2408\" data-start=\"2316\"><strong>Answer : D</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/539852/go-classes-dpp-gate-cs-operating-system-interrupts\" target=\"_blank\">GATE Overflow #539852</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"209\" data-start=\"120\">Which of the following is <strong>not</strong> the responsibility of the operating system?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">Resource management<br/></span>",
                "<span style=\"display: inline;\">Controlling program execution<br/></span>",
                "<span style=\"display: inline;\">Network management<br/></span>",
                "<span style=\"display: inline;\">Developing application software</span>"
            ],
            "answer": "D",
            "solution": "<div class=\"solution-content\"><a name=\"539849\"></a><div itemprop=\"text\"><p data-end=\"563\" data-start=\"388\">An operating system manages hardware and software resources, controls the execution of programs, and provides services related to networking and communication.</p><p data-end=\"701\" data-start=\"565\">Developing application software is performed by programmers and software developers. </p><p data-end=\"701\" data-start=\"565\">It is not a responsibility of the operating system.</p><p data-end=\"776\" data-start=\"703\"><strong><span data-end=\"775\" data-start=\"736\">Answer : </span></strong><strong data-end=\"775\" data-start=\"736\">D</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/539848/go-classes-dpp-gate-cs-operating-system-responsibilities-of-os\" target=\"_blank\">GATE Overflow #539848</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider the following C code snippet executed on a standard Linux system:</p><pre class=\"prettyprint linenums lang-c_cpp\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"4\">int main() { if (fork() == 0) { if (fork() == 0) { printf(\"A\"); } else { printf(\"B\"); } } else { printf(\"C\"); } return 0; }</pre><p>Assuming all $\\verb|fork()|$ calls are successful, how many times will the character '$\\mathbf{A}$' be printed, and what is the total number of processes created (including the parent)?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$1$ '$\\text{A}$', $3$ processes<br/></span>",
                "<span style=\"display: inline;\">$1$ '$\\text{A}$', $4$ processes<br/></span>",
                "<span style=\"display: inline;\">$2$ '$\\text{A}$', $3$ processes<br/></span>",
                "<span style=\"display: inline;\">$2$ '$\\text{A}$', $4$ processes</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"523529\"></a><div itemprop=\"text\"><p><strong>Parent Process</strong> $(P_0):$ Executes the first $\\verb|fork()|$. It receives the PID of the child (nonzero), so it enters the $\\verb|else|$ block and prints ' $\\mathbf{C}$ '.</p><p><strong>First Child </strong>$(P_1):$ Created by the first $\\verb|fork()|$. It receives $0$, enters the first $\\verb|if|$ block, and then executes the second $\\verb|fork()|$.</p><p><strong>Second Child</strong> $(P_2):$ Created by $P_1$ during the second $\\verb|fork()|$. It receives $0$, enters the inner $\\verb|if|$ block, and prints '$\\mathbf{A}$'.<br/><br/>$P_1$ <strong>(returning from second fork): </strong>It receives the PID of $P_2$ (non-zero), so it enters the inner $\\verb|else|$ block and prints ' $\\mathbf{B}$ '.</p><p><strong>Total Processes:</strong> $P_0, P_1, P_2=3$ <strong>processes.</strong><br/><br/><strong>Outputs:</strong> '$\\mathbf{C}$' $($from $P_0)$, '$\\mathbf{B}$' $($from $P_1)$, '$\\mathbf{A}$' $($from $P_2)$.<br/><br/><strong>Frequency of</strong> '$\\mathbf{A}$'$: 1$.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/523528/go-classes-dpp-os-system-calls\" target=\"_blank\">GATE Overflow #523528</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>In a system with $5$ processes and $12$ identical resources, each process requires a maximum of $3$ resources to complete its execution.</p><p>What is the minimum number of resources required to ensure the system is<strong> NEVER</strong> in a deadlock?</p></div></span>",
            "image": "",
            "options": [],
            "answer": "11",
            "solution": "<div class=\"solution-content\"><a name=\"522470\"></a><div itemprop=\"text\"><p>To find the minimum resources $R$ to avoid deadlock, we use the formula:</p><p>$$<br/>R \\geq \\sum_{i=1}^n\\left(\\text { Max_Need }_i-1\\right)+1<br/>$$</p><ul><li>Number of processes $(n)=5$<br/> </li><li>$Max$_$Need$ for each $= 3$<br/> </li><li>$R \\geq(3-1) \\times 5+1$<br/> </li><li>$R \\geq 2 \\times 5+1=11$</li></ul></div><br><br><small>Source: <a href=\"https://gateoverflow.in/522469/go-classes-dpp-os-resource-allocation\" target=\"_blank\">GATE Overflow #522469</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>A system has $5$ identical resource instances shared by $N$ processes. Each process requires a maximum of $2$ resource instances to complete its execution. What is the <strong>Maximum Value of</strong> $N$ for which the system is guaranteed to be <strong>Deadlock-Free</strong>?</p></div></span>",
            "image": "",
            "options": [],
            "answer": "522317",
            "solution": "<div class=\"solution-content\"><a name=\"522318\"></a><div itemprop=\"text\">For a system to be guaranteed deadlock-free, the total number of resources $(R)$ must satisfy the condition:<br/> <br/> $$<br/> R \\geq \\sum\\left(\\operatorname{Max} \\operatorname{Need}_i-1\\right)+1<br/> $$<br/> <br/> Here, $R=5$. Each process $i$ has a Max Need of $2$ .<br/> <br/> $$<br/> \\begin{aligned}<br/> &amp; 5 \\geq \\sum_{i=1}^N(2-1)+1 \\\\\\\\<br/> &amp; 5 \\geq N(1)+1 \\\\\\\\<br/> &amp; 4 \\geq N<br/> \\end{aligned}<br/> $$<br/> <br/> So, the maximum value of $N$ is $\\mathbf{4}$. If there were $5$ processes, each could hold $1$ resource and wait for another, causing a deadlock.</div><br><br><small>Source: <a href=\"https://gateoverflow.in/522317/go-classes-dpp-os-resource-allocation\" target=\"_blank\">GATE Overflow #522317</a></small></div>"
        },
        {
            "marks": 2,
            "neg": 0,
            "type": "MSQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>A system has $4$ copies of resource $R$. There are $n$ processes, and each process requires at most $2$ copies of resource $R$ to complete its execution.</p><p>Which of the following statements is/are TRUE?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">THE SYSTEM IS GUARANTEED TO BE DEADLOCK-FREE IF $N=3$.<br/></span>",
                "<span style=\"display: inline;\">THE SYSTEM IS GUARANTEED TO BE DEADLOCK-FREE IF $N=4$.<br/></span>",
                "<span style=\"display: inline;\">THE MAXIMUM NUMBER OF PROCESSES THE SYSTEM CAN SUPPORT WITHOUT ANY POSSIBILITY OF DEADLOCK IS $3$.<br/></span>",
                "<span style=\"display: inline;\">IF $N=5$, A DEADLOCK IS CERTAIN TO OCCUR.</span>"
            ],
            "answer": [
                "A"
            ],
            "solution": "<div class=\"solution-content\"><a name=\"521953\"></a><div itemprop=\"text\"><p>$$<br/>\\begin{gathered}<br/>n(2-1)&lt;4 \\\\<br/>n(1)&lt;4 \\\\<br/>n&lt;4<br/>\\end{gathered}<br/>$$</p><p><br/>This means the system is guaranteed to be deadlock-free if the number of processes $n$ is $\\mathbf{3}$ <strong>or fewer.</strong></p><ol start=\"1\" style=\"list-style-type: upper-alpha;\"><li><strong>THE SYSTEM IS GUARANTEED TO BE DEADLOCK-FREE IF $N=3$ : TRUE.</strong> As calculated, $n=3$ satisfies the condition $n&lt;4$. Even in the worst-case scenario where each of the $3$ processes holds $1$ resource $($Total $= 3)$, there is still $1$ resource left in the pool to satisfy any process's request for a second copy.<br/> </li><li><strong>THE SYSTEM IS GUARANTEED TO BE DEADLOCK-FREE IF $N=4$ : FALSE.</strong> If $n=4$ , it is possible for each process to hold $1$ resource. At this point, all 4 resources are exhausted. Each process will then wait for a second resource that will never become available. This is a deadlock state.<br/> </li><li><strong>THE MAXIMUM NUMBER OF PROCESSES THE SYSTEM CAN SUPPORT WITHOUT ANY POSSIBILITY OF DEADLOCK IS $\\mathbf{3}$: TRUE.</strong> This is the direct result of our inequality $n&lt;4$. If $n$ increases to $4$, the \"guarantee\" of being deadlock-free disappears.<br/> </li><li><strong>IF $N=5$, A DEADLOCK IS CERTAIN TO OCCUR: FALSE.</strong> In GATE questions, \"certain to occur\" is a very strong claim. While deadlock is possible if $n=5$, it is not certain. If one process finishes its execution and releases its resources before the others hit their peak demand, the system can still complete all tasks without deadlocking.</li></ol></div><br><br><small>Source: <a href=\"https://gateoverflow.in/521952/go-classes-dpp-os-resource-allocation\" target=\"_blank\">GATE Overflow #521952</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider a uniprocessor system with three processes $P_1, P_2$, and $P_3$ arriving at time $t=0$. Each process has a total execution time of $20$ units. The execution profile of each process is as follows:</p><p>The OS uses a <strong>Shortest Remaining CPU Time First (SRTF)</strong> scheduling algorithm. A new process is scheduled whenever the current process finishes its CPU burst or becomes blocked on I/O. Assume all I/O operations can be overlapped perfectly and the CPU never remains idle if a process is ready.</p><p><strong>What is the total time (in units) at which all processes complete their execution?</strong></p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">First $20 \\%$ of time: <strong>I/O BURST</strong><br/></span>",
                "<span style=\"display: inline;\">Next $60 \\%$ of time: <strong>CPU BURST</strong><br/></span>",
                "<span style=\"display: inline;\">Last $20 \\%$ of time:<strong> I/O BURST</strong></span>"
            ],
            "answer": "44",
            "solution": "<div class=\"solution-content\"><a name=\"521154\"></a><div itemprop=\"text\">Each process has$:$ $\\mathrm{I} / \\mathrm{O}$ $(4)$, $\\mathrm{CPU}$ $(12)$, $\\mathrm{I} / \\mathrm{O}$ $(4)$.<br/> <br/> At $t=0$, all start $\\mathrm{I} / \\mathrm{O}$. At $t=4$, all three are ready for $\\mathrm{CPU}$.<br/> <br/> Since all have the same remaining $\\mathrm{CPU}$ time $(12)$, $P_1$ runs from $4-16$.<br/> <br/> $P_2$ runs from $16-28$.<br/> <br/> $P_3$ runs from $28-40$<br/> <br/> $P_3$ finishes its final $\\mathrm{I} / \\mathrm{O}$ at $40+4=44$.</div><br><br><small>Source: <a href=\"https://gateoverflow.in/521153/go-classes-dpp-os-process-scheduling\" target=\"_blank\">GATE Overflow #521153</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>The following C program is executed on a Unix/Linux system:<br/> </p><pre class=\"prettyprint linenums lang-c_cpp\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"4\">#include &lt;unistd.h&gt; #include &lt;stdio.h&gt; int main() { int i; for(i = 0; i &lt; 6; i++) { if(i % 3 == 0) { fork(); } } return 0; }</pre><p><br/>The total number of child processes created is $\\_\\_\\_\\_$ .</p></div></span>",
            "image": "",
            "options": [],
            "answer": "3",
            "solution": "<div class=\"solution-content\"><a name=\"510159\"></a><div itemprop=\"text\">$\\text { Total } 3 \\text { child process will be created }$</div><br><br><small>Source: <a href=\"https://gateoverflow.in/510158/go-classes-dpp-os-system-call\" target=\"_blank\">GATE Overflow #510158</a></small></div>"
        }
    ]
});

registerTest({
    "name": "DPP 12 - Operating System (System Calls, Threads & IPC - Part 5)",
    "testLabel": "DPP 12",
    "testType": "DPP",
    "bracket": "System Calls, Threads & IPC - Part 5",
    "subject": "os",
    "series": "cse-dpp-2027",
    "date": "Nov 03, 2026",
    "duration": "18 Min",
    "totalMarks": 7,
    "topicsCovered": "System Calls, Threads & IPC (Practice Set 5)",
    "questions": [
        {
            "marks": 2,
            "neg": 0,
            "type": "MSQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider the following C program executed on a UNIX-like system:<br/> </p><pre class=\"prettyprint linenums lang-c_cpp\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"4\">#include &lt;stdio.h&gt; #include &lt;unistd.h&gt; int main() { int x = 1; if (fork() &amp;&amp; fork()) { x = x + 2; } else { x = x + 1; } printf(\"%d\\n\", x); return 0; }</pre><p><br/>Which of the following statements is/are correct?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">Exactly $3$ processes are created in total<br/></span>",
                "<span style=\"display: inline;\">Exactly $4$ processes are created in total<br/></span>",
                "<span style=\"display: inline;\">The value $\\verb|3|$ is printed exactly once<br/></span>",
                "<span style=\"display: inline;\">The value $\\verb|2|$ is printed more than once</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"505752\"></a><div itemprop=\"text\"><p>Initial process $\\text{P0}$ starts with $\\mathrm{x}=1$.<br/> </p><p>Expression is $\\verb|fork() &amp;&amp; fork()|$ with short-circuit AND.<br/> </p><p>In $\\text{P0}$, first $\\verb|fork()|$ is executed.<br/><br/>$\\text{P0}$ gets non-zero → evaluates second $\\verb|fork()|$ .<br/><br/>Child $\\text{C1}$ gets $0 \\rightarrow$ short-circuit applies, second fork() is NOT executed in $\\text{C1}$.<br/> </p><p>Now from $\\text{P0}$'s second $\\verb|fork()|$ :<br/><br/>Parent $\\text{P0}$ gets non-zero.<br/><br/>Child $\\text{C2}$ gets $0$.<br/><br/><br/>Total processes:<br/><br/>$\\mathrm{P0}, \\mathrm{C} 1, \\mathrm{C} 2 \\rightarrow 3$ processes.<br/> </p><p>So option A is correct, option B is false.<br/> </p><p><strong>Which Branch Executes:</strong><br/><br/>$\\text{P0}:$first fork true AND second fork true → condition true $\\rightarrow x=1+2=3$<br/><br/>$\\text{C1}:$ first fork false → goes to else $\\rightarrow x=1+1=2$<br/><br/>$\\text{C2}:$ first fork true, second fork false → condition false → else → $\\mathrm{x}=1+1=2$<br/><br/><br/><strong>Output Analysis:</strong><br/><br/>Value $3$ is printed once (by $\\text{P0}$).<br/><br/>Value $2$ is printed twice (by $\\text{C1}$ and $\\text{C2}$).<br/><br/><br/><strong>Final Answer:</strong><br/><br/>Correct options: A, C, D</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/505750/go-classes-dpp-os-fork\" target=\"_blank\">GATE Overflow #505750</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider the following two threads R1 and R2 that update two shared variables x and y . Assume that initially $\\mathbf{x}=\\mathbf{5}$ and $\\mathbf{y = 1 0}$. Though context switching between threads can happen at any time, each statement of R1 or R2 is executed atomically without interruption.</p><p>$$<br/>\\begin{array}{lccl}<br/>\\mathrm{R} 1 &amp; &amp; &amp; \\mathrm{R} 2 \\\\<br/>\\mathrm{x}=\\mathrm{y}+1 ; &amp; &amp; &amp; \\mathrm{y}=\\mathrm{x} \\times 2 ; \\\\<br/>\\mathrm{y}=\\mathrm{x}+2 ; &amp; &amp; &amp; \\mathrm{x}=\\mathrm{y}-3 ;<br/>\\end{array}<br/>$$</p><p><br/>Which one of the following options lists all the possible combinations of values of x and y after both R1 and R2 finish execution?</p><p> </p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\{(\\mathrm{x}=11, \\mathrm{y}=13) ;(\\mathrm{x}=19, \\mathrm{y}=22) ;(\\mathrm{x}=19, \\mathrm{y}=21) ;(\\mathrm{x}=10, \\mathrm{y}=13)\\}$ <br/></span>",
                "<span style=\"display: inline;\">$\\{(\\mathrm{x}= 11, \\mathrm{y}=13) ;(\\mathrm{x}=19, \\mathrm{y}=22) ;(\\mathrm{x}=10, \\mathrm{y}=13) ;(\\mathrm{x}=7, \\mathrm{y}=9)\\}$ <br/></span>",
                "<span style=\"display: inline;\">$\\{(\\mathrm{x}=19, \\mathrm{y}= 21) ;(\\mathrm{x}=11, \\mathrm{y}=13) ;(\\mathrm{x}=19, \\mathrm{y}=22) ;(\\mathrm{x}=10, \\mathrm{y}=13) ;(\\mathrm{x}=7, \\mathrm{y}=9)\\}$ <br/></span>",
                "<span style=\"display: inline;\">$\\{(\\mathrm{x}= 12, \\mathrm{y}=14) ;(\\mathrm{x}=17, \\mathrm{y}=13) ;(\\mathrm{x}=17, \\mathrm{y}=19) ;(\\mathrm{x}=12, \\mathrm{y}=12)\\}$</span>"
            ],
            "answer": "C",
            "solution": "<div class=\"solution-content\"><a name=\"504520\"></a><div itemprop=\"text\"><p>The two threads, R1 and R2, are:</p><p>$$<br/>\\begin{array}{lccl}<br/>\\mathrm{R} 1 &amp; &amp; &amp; \\mathrm{R} 2 \\\\<br/>\\mathrm{x}=\\mathrm{y}+1 ;(1) &amp; &amp; &amp; \\mathrm{y}=\\mathrm{x} \\times 2 ;(3) \\\\<br/>\\mathrm{y}=\\mathrm{x}+2 ;(2) &amp; &amp; &amp; \\mathrm{x}=\\mathrm{y}-3 ;(4)<br/>\\end{array}<br/>$$</p><p> </p><p>\\[<br/>\\begin{array}{|l|l|l|l|l|l|}<br/>\\hline<br/>\\text{Sequence} <br/>&amp; \\text{Step 1 } (x,y) <br/>&amp; \\text{Step 2 } (x,y) <br/>&amp; \\text{Step 3 } (x,y) <br/>&amp; \\text{Step 4 } (x,y) <br/>&amp; \\text{Final Pair } (x,y) \\\\<br/>\\hline<br/>(1,2,3,4)<br/>&amp; x=10+1=11<br/>&amp; \\begin{aligned} y&amp;=11+2=13 \\end{aligned}<br/>&amp; \\begin{aligned} y&amp;=11\\times2=22 \\end{aligned}<br/>&amp; \\begin{aligned} x&amp;=22-3=19 \\end{aligned}<br/>&amp; (19,22) \\\\<br/>\\hline<br/>(3,4,1,2)<br/>&amp; \\begin{aligned} y&amp;=5\\times2=10 \\end{aligned}<br/>&amp; \\begin{aligned} x&amp;=10-3=7 \\end{aligned}<br/>&amp; \\begin{aligned} x&amp;=10+1=11 \\end{aligned}<br/>&amp; \\begin{aligned} y&amp;=11+2=13 \\end{aligned}<br/>&amp; (11,13) \\\\<br/>\\hline<br/>(1,3,4,2)<br/>&amp; \\begin{aligned} x&amp;=10+1=11 \\end{aligned}<br/>&amp; \\begin{aligned} y&amp;=11\\times2=22 \\end{aligned}<br/>&amp; \\begin{aligned} x&amp;=22-3=19 \\end{aligned}<br/>&amp; \\begin{aligned} y&amp;=19+2=21 \\end{aligned}<br/>&amp; (19,21) \\\\<br/>\\hline<br/>(3,1,2,4)<br/>&amp; \\begin{aligned} y&amp;=5\\times2=10 \\end{aligned}<br/>&amp; \\begin{aligned} x&amp;=10+1=11 \\end{aligned}<br/>&amp; \\begin{aligned} y&amp;=11+2=13 \\end{aligned}<br/>&amp; \\begin{aligned} x&amp;=13-3=10 \\end{aligned}<br/>&amp; (10,13) \\\\<br/>\\hline<br/>(1,3,2,4)<br/>&amp; \\begin{aligned} x&amp;=10+1=11 \\end{aligned}<br/>&amp; \\begin{aligned} y&amp;=11\\times2=22 \\end{aligned}<br/>&amp; \\begin{aligned} y&amp;=11+2=13 \\end{aligned}<br/>&amp; \\begin{aligned} x&amp;=13-3=10 \\end{aligned}<br/>&amp; (10,13) \\\\<br/>\\hline<br/>(3,1,4,2)<br/>&amp; \\begin{aligned} y&amp;=5\\times2=10 \\end{aligned}<br/>&amp; \\begin{aligned} x&amp;=10+1=11 \\end{aligned}<br/>&amp; \\begin{aligned} x&amp;=10-3=7 \\end{aligned}<br/>&amp; \\begin{aligned} y&amp;=7+2=9 \\end{aligned}<br/>&amp; (7,9) \\\\<br/>\\hline<br/>\\end{array}<br/>\\]<br/> </p><p>Option <strong>C</strong> is correct</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/504519/go-classes-dpp-os-threads\" target=\"_blank\">GATE Overflow #504519</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider the following C program snippet :</p><pre class=\"prettyprint linenums lang-c_cpp\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"4\">#include &lt;stdio.h&gt; #include &lt;unistd.h&gt; #include &lt;sys/wait.h&gt; void main() &amp; int i; for (i = 0; i &lt; 3; i++) { if (fork() == 0) { printf(\"Child Process: i = %d\\n\", i); _exit(0); // Use _exit to immediately terminate the child } } for (i = 0; i &lt; 3; i++) { wait(NULL); } printf(\"Parent Process finished.\\n\"); }</pre><p><br/>Assuming all $\\verb|fork()|$ calls are successful and the parent process executes the $\\verb|wait()|$ loop correctly:<br/><br/>What is the <strong>total number of new processes</strong> created by this program (excluding the initial parent process)?</p></div></span>",
            "image": "",
            "options": [],
            "answer": "503602",
            "solution": "<div class=\"solution-content\"><a name=\"504040\"></a><div itemprop=\"text\">In this question there will be total four process but excluding parents there are three child process formed. Its all about two concepts being kept in mind to solve the question.<br/> <br/> 1) fork call executes two process, one parent and other child with pid of child being 0 and pid of parent being non zero.<br/> <br/> <br/> <br/> 2) Fork call can establish the child grandson relationship meaning the child can become parent the very next time its execution leads to another child in the process.<br/> <br/> Thus this question has three child processes and one parent process in execution.</div><br><br><small>Source: <a href=\"https://gateoverflow.in/503602/go-classes-dpp-os-fork\" target=\"_blank\">GATE Overflow #503602</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider the following C code segment:<br/> </p><pre class=\"prettyprint linenums lang-c_cpp\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"4\">#include &lt;unistd.h&gt; #include &lt;stdio.h&gt; int main() { int i; for (i = 0; i &lt; 2; i++) { pid_t pid = fork(); if (pid == 0) { // Child branch printf(\"Child %d created in iteration %d\\n\", getpid(), i); break; // Exit the loop only for the child process } else { // Parent branch printf(\"Parent %d created child %d in iteration %d\\n\", getpid(), pid, i); } } sleep(1); return 0; }</pre><p><br/>Assuming all $\\verb|fork()|$ calls succeed, what is the <strong>total number of processes </strong>(including the original parent) that will be running immediately before the program terminates?</p></div></span>",
            "image": "",
            "options": [],
            "answer": "1",
            "solution": "<div class=\"solution-content\"><a name=\"503044\"></a><div itemprop=\"text\"><ol><li><strong>Original Parent (P):</strong> Completes both loop iterations.<br/> </li><li><strong>Child 1 (C1):</strong> Created during $i=0$, then <strong>breaks</strong> out of the loop immediately.<br/> </li><li><strong>Child 2 (C2):</strong> Created during $i=1$, then <strong>breaks</strong> out of the loop immediately.<br/> </li></ol><p>The total number of processes running before the program terminates is <strong>THREE.</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/503043/go-classes-dpp-os-fork\" target=\"_blank\">GATE Overflow #503043</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>$\\text { The following C program is executed on a Unix/Linux system: }$<br/> </p><pre class=\"prettyprint linenums lang-c_cpp\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"4\">#include &lt;unistd.h&gt; #include &lt;stdio.h&gt; int main() { //Note the use of the logical AND operator (&amp;&amp;) if(fork() &amp;&amp; fork()) { fork(); } printf(\"GATE\\n\"); return 0; } </pre><p><br/>$\\text { The total number of times the word}$ <strong>\"GATE\"</strong> $\\text {is printed is: }$</p><p> </p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$3$<br/></span>",
                "<span style=\"display: inline;\">$4$<br/></span>",
                "<span style=\"display: inline;\">$6$<br/></span>",
                "<span style=\"display: inline;\">$8$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"538799\"></a><div itemprop=\"text\"><p>number of time GATE would get printed is 4<img alt=\"\" src=\"https://gateoverflow.in/?qa=blob&amp;qa_blobid=7163060176331690997\"/></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/501841/go-classes-dpp-os-system-call\" target=\"_blank\">GATE Overflow #501841</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>The following C program is executed on a Unix/Linux system. Assume that the input $n$ is a positive integer and all $\\mathrm{fork()}$ calls succeed.</p><pre class=\"prettyprint linenums lang-c_cpp\" data-linenums=\"true\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"\" data-rawcode='#include &lt;unistd.h&gt; #include &lt;stdio.h&gt; int main() { int i, n; scanf(\"%d\", &amp;n); for (i = 0; i &lt; n; i++) { if (i % 2 != 0) { fork(); } } return 0; }'>#include &lt;unistd.h&gt; #include &lt;stdio.h&gt; int main() { int i, n; scanf(\"%d\", &amp;n); for (i = 0; i &lt; n; i++) { if (i % 2 != 0) { fork(); } } return 0; } </pre><p>Which of the following expressions gives the total number of processes, including the original parent process, after the loop completes, for every positive integer $n$?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$2^n$<br/></span>",
                "<span style=\"display: inline;\">$2^{n/2}$<br/></span>",
                "<span style=\"display: inline;\">$2^{\\lfloor n/2\\rfloor}$<br/></span>",
                "<span style=\"display: inline;\">$2^{\\lceil n/2\\rceil}$</span>"
            ],
            "answer": "D",
            "solution": "<div class=\"solution-content\"><a name=\"501932\"></a><div itemprop=\"text\">Answer option D<br/> <br/> The loop runs from i = 0 to 9 because n = 10. Since the condition is (i % 2 != 0) , the fork() call happens only for odd values of i, which are 1, 3, 5, 7, and 9, so it executes 5 times. Every time fork() is called, the number of processes doubles. Therefore, after 5 such calls, the total number of processes becomes 2⁵ = 32, including the original parent process. Hence, the correct answer is 2^(n/2) = 32.</div><br><br><small>Source: <a href=\"https://gateoverflow.in/501840/go-classes-dpp-os-system-call\" target=\"_blank\">GATE Overflow #501840</a></small></div>"
        }
    ]
});

registerTest({
    "name": "DPP 13 - Operating System (Process Synchronization - Part 1)",
    "testLabel": "DPP 13",
    "testType": "DPP",
    "bracket": "Process Synchronization - Part 1",
    "subject": "os",
    "series": "cse-dpp-2027",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 14,
    "topicsCovered": "Process Synchronization (Practice Set 1)",
    "questions": [
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Suppose $\\texttt{x}$ is a <strong>condition variable inside a monitor</strong>.</p><p>What happens when a process executes:</p><p>$\\texttt{x.wait()}$</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">Mutual exclusion is established on variable $\\texttt{x}$<br/></span>",
                "<span style=\"display: inline;\">One process blocked on $\\texttt{x}$ is awakened<br/></span>",
                "<span style=\"display: inline;\">The value of $\\texttt{x}$ is tested to determine whether the process should block<br/></span>",
                "<span style=\"display: inline;\">The executing process is blocked and inserted into the waiting queue associated with $\\texttt{x}$</span>"
            ],
            "answer": "D",
            "solution": "<div class=\"solution-content\"><a name=\"546615\"></a><div itemprop=\"text\"><p>A condition variable is not an ordinary Boolean or integer whose value is inspected.</p><p>When a process executes:</p><p>$\\texttt{x.wait()}$</p><p>the process cannot continue.</p><p>It is:</p><ol><li><p>blocked,</p></li><li><p>placed in the queue associated with condition variable $\\texttt{x}$,</p></li><li><p>and monitor ownership becomes available so another process can enter.</p></li></ol><p>A $\\texttt{signal()}$ operation is used to wake a waiting process.</p><p>Therefore:</p><ol start=\"1\" style=\"list-style-type: upper-alpha;\"><li>False<br/> </li><li>False, this describes $\\texttt{signal()}$<br/> </li><li>False<br/> </li><li>True<br/> </li></ol><p><strong>Answer: D</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/546614/go-classes-dpp-gate-cs-operating-system-condition-wait\" target=\"_blank\">GATE Overflow #546614</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"2234\" data-start=\"2131\">For a correct mechanism controlling entry into a critical section, consider the following requirements:</p><p data-end=\"2680\" data-start=\"2595\">Which statements are fundamental requirements of a correct critical-section solution?</p><p><strong>Given Details:</strong></p><ul><li>Two processes must not execute simultaneously inside their critical sections.</li><li>If the critical section is free, an eligible process should be allowed to enter.</li><li>A process waiting to enter its critical section should not wait indefinitely.</li><li>A process that cannot enter its critical section must immediately relinquish the CPU.</li></ul></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">I and IV only</span>",
                "<span style=\"display: inline;\">II and III only</span>",
                "<span style=\"display: inline;\">I, II and III only</span>",
                "<span style=\"display: inline;\">I, III and IV only</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"546421\"></a><div itemprop=\"text\"><p data-end=\"2854\" data-section-id=\"n338xy\" data-start=\"2833\"><strong>Statement I: True</strong></p><p data-end=\"2885\" data-start=\"2856\">This is <strong data-end=\"2884\" data-start=\"2864\">mutual exclusion</strong>.</p><p data-end=\"2953\" data-start=\"2887\">At most one process can execute in the critical section at a time.</p><p data-end=\"2982\" data-section-id=\"17s9bbj\" data-start=\"2960\"> </p><p data-end=\"2982\" data-section-id=\"17s9bbj\" data-start=\"2960\"><strong>Statement II: True</strong></p><p data-end=\"3017\" data-start=\"2984\">This corresponds to <strong data-end=\"3016\" data-start=\"3004\">progress</strong>.</p><p data-end=\"3136\" data-start=\"3019\">If nobody is in the critical section and some process wants to enter, selection should not be postponed indefinitely.</p><p data-end=\"3166\" data-section-id=\"1h1d0py\" data-start=\"3143\"> </p><p data-end=\"3166\" data-section-id=\"1h1d0py\" data-start=\"3143\"><strong>Statement III: True</strong></p><p data-end=\"3208\" data-start=\"3168\">This corresponds to <strong data-end=\"3207\" data-start=\"3188\">bounded waiting</strong>.</p><p data-end=\"3305\" data-start=\"3210\">Once a process requests entry, there must be some finite bound on how long it can be postponed.</p><p data-end=\"3335\" data-section-id=\"rzffmj\" data-start=\"3312\"> </p><p data-end=\"3335\" data-section-id=\"rzffmj\" data-start=\"3312\"><strong>Statement IV: False</strong></p><p data-end=\"3402\" data-start=\"3337\">A process that cannot enter need not necessarily give up the CPU.</p><p data-end=\"3488\" data-start=\"3404\">For example, some valid synchronization techniques use <strong data-end=\"3475\" data-start=\"3459\">busy waiting</strong> or spinning.</p><p data-end=\"3580\" data-start=\"3490\">Therefore immediate relinquishing of the CPU is not a fundamental correctness requirement.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/546420/go-classes-dpp-gate-cs-operating-system-critical-section-requirements\" target=\"_blank\">GATE Overflow #546420</a></small></div>"
        },
        {
            "marks": 2,
            "neg": 0,
            "type": "MSQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"3025\" data-start=\"2991\">Consider an integer semaphore $\\texttt{S}$.</p><p data-end=\"3039\" data-section-id=\"1fc1ka0\" data-start=\"3027\"><strong>Method</strong> $\\textbf{1}$</p><pre data-end=\"3228\" data-start=\"3041\"><code>wait(S): disable interrupts while S &lt;= 0: do nothing S = S - 1 enable interrupts signal(S): disable interrupts S = S + 1 enable interrupts</code></pre><p data-end=\"3242\" data-section-id=\"1fc1ka3\" data-start=\"3230\"><strong>Method</strong> $\\textbf{2}$</p><pre data-end=\"3465\" data-start=\"3244\"><code>wait(S): disable interrupts while S &lt;= 0: enable interrupts disable interrupts S = S - 1 enable interrupts signal(S): disable interrupts S = S + 1 enable interrupts</code></pre><p data-end=\"3496\" data-start=\"3467\">Which statements are correct?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">Access to $\\texttt{S}$ in $\\texttt{wait()}$ and $\\texttt{signal()}$ must be mutually exclusive.<br/></span>",
                "<span style=\"display: inline;\">Method $1$ is correct because interrupts remain disabled while $\\texttt{wait()}$ checks $\\texttt{S}$.<br/></span>",
                "<span style=\"display: inline;\">Method $2$ avoids the fundamental problem present in Method $1$.<br/></span>",
                "<span style=\"display: inline;\">A user-mode program may freely use interrupt enable/disable instructions to implement its critical sections.</span>"
            ],
            "answer": [
                "A"
            ],
            "solution": "<div class=\"solution-content\"><a name=\"546058\"></a><div itemprop=\"text\"><p data-end=\"3995\" data-start=\"3887\"><strong data-end=\"3901\" data-start=\"3887\">A is true.</strong> $\\texttt{S}$ is shared and can be read and modified concurrently. The update must therefore be atomic.</p><p data-end=\"4088\" data-start=\"3997\"><strong data-end=\"4012\" data-start=\"3997\">B is false. </strong> Suppose $\\texttt{S &lt;= 0}$. Method $1$ disables interrupts and then waits continuously.</p><p data-end=\"294\" data-start=\"213\">But another process cannot execute the operation needed to increase $\\texttt{S}$.</p><p data-end=\"343\" data-start=\"296\">The waiting process can therefore spin forever.</p><p data-end=\"4344\" data-start=\"4213\"><strong data-end=\"4227\" data-start=\"4213\">C is true. </strong> Method $2$ temporarily re-enables interrupts while waiting. This permits another execution path to perform $\\texttt{signal()}$.</p><p data-end=\"559\" data-start=\"484\">Before examining and modifying $\\texttt{S}$, interrupts are disabled again.</p><p data-end=\"4552\" data-start=\"4414\"><strong data-end=\"4429\" data-start=\"4414\">D is false.</strong> Interrupt-control instructions are privileged instructions and cannot normally be directly executed by user-mode programs.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/546057/go-classes-dpp-gate-cs-operating-system-semaphore-atomicity\" target=\"_blank\">GATE Overflow #546057</a></small></div>"
        },
        {
            "marks": 2,
            "neg": 0,
            "type": "MSQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"46\" data-start=\"0\">Which of the following statements are correct?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">In the standard reader-preference solution, the first reader executes $\\texttt{wait(wrt)}$.<br/></span>",
                "<span style=\"display: inline;\">In the standard reader-preference solution, the last reader executes $\\texttt{signal(wrt)}$.<br/></span>",
                "<span style=\"display: inline;\">Continuous arrival of readers may cause a waiting writer to starve.<br/></span>",
                "<span style=\"display: inline;\">In the dining-philosophers problem with five philosophers, allowing all five philosophers to acquire their left chopsticks first prevents deadlock.</span>"
            ],
            "answer": [
                "A"
            ],
            "solution": "<div class=\"solution-content\"><a name=\"542702\"></a><div itemprop=\"text\"><p data-end=\"23\" data-start=\"0\">Statement A is correct.</p><p data-end=\"95\" data-start=\"25\">In the standard reader-preference solution, the first reader executes:</p><p data-end=\"117\" data-start=\"97\">$\\texttt{wait(wrt)}$</p><p data-end=\"181\" data-start=\"119\">This prevents a writer from entering while readers are active.</p><p data-end=\"206\" data-start=\"183\"><br/>Statement B is correct.</p><p data-end=\"233\" data-start=\"208\">The last reader executes:</p><p data-end=\"257\" data-start=\"235\">$\\texttt{signal(wrt)}$</p><p data-end=\"314\" data-start=\"259\">This allows a waiting writer to access the shared data.</p><p data-end=\"339\" data-start=\"316\"><br/>Statement C is correct.</p><p data-end=\"422\" data-start=\"341\">If readers continue arriving, the number of active readers may never become zero.</p><p data-end=\"513\" data-start=\"424\">As a result, a waiting writer may remain blocked indefinitely. This is writer starvation.</p><p data-end=\"540\" data-start=\"515\"><br/>Statement D is incorrect.</p><p data-end=\"667\" data-start=\"542\">If all five philosophers acquire their left chopsticks first, each philosopher may hold one chopstick and wait for the other.</p><p data-end=\"722\" data-is-last-node=\"\" data-is-only-node=\"\" data-start=\"669\">This creates circular waiting and may cause deadlock.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/542701/go-classes-dpp-gate-cs-operating-system-synchronization\" target=\"_blank\">GATE Overflow #542701</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"57\" data-start=\"0\">A bounded buffer has capacity $6$ and is initially empty.</p><p data-end=\"94\" data-start=\"59\">The semaphore values are initially:</p><p data-end=\"116\" data-start=\"96\">$\\texttt{empty} = 6$</p><p data-end=\"137\" data-start=\"118\">$\\texttt{full} = 0$</p><p data-end=\"159\" data-start=\"139\">$\\texttt{mutex} = 1$</p><p data-end=\"178\" data-start=\"161\">During execution:</p><p data-end=\"226\" data-start=\"180\">$9$ producer insertions complete successfully.</p><p data-end=\"272\" data-start=\"228\">$4$ consumer removals complete successfully.</p><p data-end=\"345\" data-start=\"274\">Assume that no producer or consumer operation is currently in progress.</p><p data-end=\"383\" data-start=\"347\">What are the final semaphore values?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\texttt{empty} = 1,\\ \\texttt{full} = 5,\\ \\texttt{mutex} = 1$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{empty} = 5,\\ \\texttt{full} = 1,\\ \\texttt{mutex} = 1$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{empty} = 1,\\ \\texttt{full} = 5,\\ \\texttt{mutex} = 0$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{empty} = 0,\\ \\texttt{full} = 6,\\ \\texttt{mutex} = 1$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"542703\"></a><div itemprop=\"text\"><p data-end=\"23\" data-start=\"0\">The buffer capacity is: $6$</p><p data-end=\"40\" data-start=\"30\">Initially,</p><p data-end=\"62\" data-start=\"42\">$\\texttt{empty} = 6$</p><p data-end=\"83\" data-start=\"64\">$\\texttt{full} = 0$</p><p data-end=\"105\" data-start=\"85\">$\\texttt{mutex} = 1$</p><p data-end=\"177\" data-start=\"107\">A total of $9$ producer insertions and $4$ consumer removals complete.</p><p data-end=\"210\" data-start=\"179\">The number of items present is:</p><p data-end=\"245\" data-start=\"212\">$\\text{Buffer occupancy} = 9 - 4= 5$</p><p data-end=\"295\" data-start=\"254\">Therefore, the number of filled slots is:</p><p data-end=\"316\" data-start=\"297\">$\\texttt{full} = 5$</p><p data-end=\"347\" data-start=\"318\">The number of empty slots is:</p><p data-end=\"373\" data-start=\"349\">$\\texttt{empty} = 6 - 5= 1$</p><p data-end=\"492\" data-start=\"382\">Since no producer or consumer operation is currently in progress, the mutual-exclusion semaphore is available:</p><p data-end=\"514\" data-start=\"494\">$\\texttt{mutex} = 1$</p><p data-end=\"522\" data-start=\"516\">Hence,</p><p data-end=\"585\" data-is-last-node=\"\" data-is-only-node=\"\" data-start=\"524\">$\\texttt{empty} = 1,\\ \\texttt{full} = 5,\\ \\texttt{mutex} = 1$</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/542700/go-classes-dpp-gate-cs-operating-system-producer-consumer-semaphores\" target=\"_blank\">GATE Overflow #542700</a></small></div>"
        },
        {
            "marks": 2,
            "neg": 0,
            "type": "MSQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"49\" data-start=\"0\">A shared variable $x$ is initially equal to $10$.</p><p data-end=\"133\" data-start=\"51\">Two threads execute the following operations exactly once without synchronization:</p><p data-end=\"157\" data-start=\"135\">Thread $T_1$</p><p data-end=\"170\" data-start=\"159\">$x = x + 1$</p><p data-end=\"194\" data-start=\"172\">Thread $T_2$</p><p data-end=\"207\" data-start=\"196\">$x = x - 2$</p><p data-end=\"292\" data-start=\"209\">Assume that each statement consists of separate read, modify, and write operations.</p><p data-end=\"347\" data-start=\"294\">Which of the following can be the final value of $x$?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$8$<br/></span>",
                "<span style=\"display: inline;\">$9$<br/></span>",
                "<span style=\"display: inline;\">$10$<br/></span>",
                "<span style=\"display: inline;\">$11$</span>"
            ],
            "answer": "C",
            "solution": "<div class=\"solution-content\"><a name=\"542756\"></a><div itemprop=\"text\"><p data-end=\"2014\" data-start=\"2004\">Initially,</p><p data-end=\"2022\" data-start=\"2016\">$x=10$</p><p data-end=\"2046\" data-start=\"2024\">Thread $T_1$ performs:</p><p data-end=\"2055\" data-start=\"2048\">$x=x+1$</p><p data-end=\"2079\" data-start=\"2057\">Thread $T_2$ performs:</p><p data-end=\"2088\" data-start=\"2081\">$x=x-2$</p><p data-end=\"2158\" data-start=\"2090\">Each statement contains separate read, modify, and write operations.</p><p data-end=\"2192\" data-section-id=\"q8nshu\" data-start=\"2160\"><strong>Case $1:$ Sequential execution</strong></p><p data-end=\"2219\" data-start=\"2194\">If $T_1$ completes first:</p><p data-end=\"2230\" data-start=\"2221\">$10+1=11$</p><p data-end=\"2252\" data-start=\"2232\">Then $T_2$ executes:</p><p data-end=\"2262\" data-start=\"2254\">$11-2=9$</p><p data-end=\"2300\" data-start=\"2264\">Similarly, if $T_2$ completes first:</p><p data-end=\"2310\" data-start=\"2302\">$10-2=8$</p><p data-end=\"2332\" data-start=\"2312\">Then $T_1$ executes:</p><p data-end=\"2341\" data-start=\"2334\">$8+1=9$</p><p data-end=\"2370\" data-start=\"2343\">Therefore, $9$ is possible.</p><p data-end=\"2406\" data-section-id=\"1cl6ocl\" data-start=\"2372\"><strong>Case $2:$ Both threads read $10$</strong></p><p data-end=\"2473\" data-start=\"2408\">Suppose both threads read the initial value before either writes.</p><p data-end=\"2490\" data-start=\"2475\">$T_1$ computes:</p><p data-end=\"2501\" data-start=\"2492\">$10+1=11$</p><p data-end=\"2518\" data-start=\"2503\">$T_2$ computes:</p><p data-end=\"2528\" data-start=\"2520\">$10-2=8$</p><p data-end=\"2571\" data-start=\"2530\">If $T_1$ writes last, the final value is:</p><p data-end=\"2579\" data-start=\"2573\">$x=11$</p><p data-end=\"2622\" data-start=\"2581\">If $T_2$ writes last, the final value is:</p><p data-end=\"2629\" data-start=\"2624\">$x=8$</p><p data-end=\"2672\" data-start=\"2631\">Therefore, the possible final values are:</p><p data-end=\"2686\" data-start=\"2674\">$8,\\ 9,\\ 11$</p><p data-end=\"2791\" data-start=\"2688\">The value $10$ is not possible because at least one thread performs a write with the value $8$ or $11$.</p><p data-end=\"2824\" data-start=\"2793\"><br/>Hence, the correct options are A, B, D.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/542699/go-classes-dpp-gate-cs-operating-system-race-condition\" target=\"_blank\">GATE Overflow #542699</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"10866\" data-start=\"10820\">Five philosophers sit around a circular table.</p><p data-end=\"10994\" data-start=\"10868\">There is one chopstick between each pair of adjacent philosophers, and a philosopher requires both adjacent chopsticks to eat.</p><p data-end=\"11066\" data-is-last-node=\"\" data-is-only-node=\"\" data-start=\"10996\">What is the maximum number of philosophers who can eat simultaneously?</p></div></span>",
            "image": "",
            "options": [],
            "answer": "2",
            "solution": "<div class=\"solution-content\"><a name=\"543068\"></a><div itemprop=\"text\"><p>Ans is 2 <br/>assume person 1 , 2 , 3 ,4, 5 sit in round table in order 1-2-3-4-5.<br/><br/><img alt=\"\" src=\"https://gateoverflow.in/?qa=blob&amp;qa_blobid=742710822525391060\"/><br/><br/>1 wants to eat so it takes left chopstic of 5 and right chopstic of 2<br/>so 5 and 2 cant eat unless 1 will release chopsticks. but person 3 can eat coz their left and right chopstics are free ( left of 2 and right of 4 )</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/542693/go-classes-dpp-gate-cs-operating-system-dining-philosophers\" target=\"_blank\">GATE Overflow #542693</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"85\" data-start=\"0\">In a reader-preference solution, a writer is waiting while readers continue arriving.</p><p data-end=\"120\" data-start=\"87\">Which of the following may occur?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">Reader starvation<br/></span>",
                "<span style=\"display: inline;\">Writer starvation<br/></span>",
                "<span style=\"display: inline;\">Immediate deadlock among all readers<br/></span>",
                "<span style=\"display: inline;\">Two writers enter simultaneously</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"543069\"></a><div itemprop=\"text\">Ans is writer starvation <br/> bcoz if reader continues arriving and read ,writer dont have chance of write that data .</div><br><br><small>Source: <a href=\"https://gateoverflow.in/542691/go-classes-dpp-gate-cs-operating-system-reader-preference\" target=\"_blank\">GATE Overflow #542691</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"37\" data-start=\"0\">Consider a modified reader algorithm:</p><p data-end=\"62\" data-start=\"39\">$\\texttt{wait(mutex);}$</p><p data-end=\"87\" data-start=\"64\">$\\texttt{readcount++;}$</p><p data-end=\"114\" data-start=\"89\">$\\texttt{signal(mutex);}$</p><p data-end=\"146\" data-start=\"116\">$\\texttt{if(readcount == 1)}$</p><p data-end=\"169\" data-start=\"148\">$\\texttt{wait(wrt);}$</p><p data-end=\"269\" data-start=\"171\">Two readers may increment $\\texttt{readcount}$ before either executes the $\\texttt{if}$ statement.</p><p data-end=\"294\" data-start=\"271\">What problem can occur?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">Both readers must deadlock.<br/></span>",
                "<span style=\"display: inline;\">No reader may acquire $\\texttt{wrt}$, allowing a writer and readers to access the shared data simultaneously.<br/></span>",
                "<span style=\"display: inline;\">The writer permanently owns $\\texttt{mutex}$.<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{readcount}$ can never become greater than $1$.</span>"
            ],
            "answer": "B",
            "solution": "<div class=\"solution-content\"><a name=\"545593\"></a><div itemprop=\"text\"><p data-end=\"22\" data-start=\"0\">The correct answer is:</p><p>B. No reader may acquire wrt, allowing a writer and readers to access the shared data simultaneously.​</p><h3 data-end=\"164\" data-section-id=\"ynlq0v\" data-start=\"156\">Why?</h3><p data-end=\"192\" data-start=\"166\">The modified algorithm is:</p><pre data-end=\"282\" data-start=\"194\"> </pre><pre><code>wait(mutex); readcount++; signal(mutex); if (readcount == 1) wait(wrt);</code></pre><p data-end=\"365\" data-start=\"284\">The important problem is that the <code data-end=\"322\" data-start=\"318\">if</code> check happens <strong data-end=\"364\" data-start=\"337\">after releasing <code data-end=\"362\" data-start=\"355\">mutex</code></strong>.</p><p data-end=\"415\" data-start=\"367\">Suppose two readers, <strong data-end=\"394\" data-start=\"388\">R1</strong> and <strong data-end=\"405\" data-start=\"399\">R2</strong>, execute:</p><ol data-end=\"803\" data-start=\"417\"><li data-end=\"497\" data-section-id=\"7fifr9\" data-start=\"417\"><p data-end=\"436\" data-start=\"420\">R1 gets <code data-end=\"435\" data-start=\"428\">mutex</code>:</p><pre data-end=\"471\" data-start=\"440\"> </pre><pre><code>readcount = 1</code></pre><p data-end=\"497\" data-start=\"475\">Then releases <code data-end=\"496\" data-start=\"489\">mutex</code>.</p></li><li data-end=\"621\" data-section-id=\"37p4sy\" data-start=\"499\"><p data-end=\"560\" data-start=\"502\">Before R1 executes <code data-end=\"542\" data-start=\"521\">if (readcount == 1)</code>, R2 gets <code data-end=\"559\" data-start=\"552\">mutex</code>:</p><pre data-end=\"595\" data-start=\"564\"> </pre><pre><code>readcount = 2</code></pre><p data-end=\"621\" data-start=\"599\">Then releases <code data-end=\"620\" data-start=\"613\">mutex</code>.</p></li><li data-end=\"726\" data-section-id=\"1ppegj0\" data-start=\"623\"><p data-end=\"640\" data-start=\"626\">Now R1 checks:</p><pre data-end=\"681\" data-start=\"644\"> </pre><pre><code>if (readcount == 1)</code></pre><p data-end=\"726\" data-start=\"685\">But <code data-end=\"700\" data-start=\"689\">readcount</code> is already 2 → <strong data-end=\"725\" data-start=\"716\">false</strong>.</p></li><li data-end=\"803\" data-section-id=\"1iu3675\" data-start=\"728\"><p data-end=\"746\" data-start=\"731\">R2 also checks:</p><pre data-end=\"787\" data-start=\"750\"> </pre><pre><code>if (readcount == 1)</code></pre><p data-end=\"803\" data-start=\"791\">Again false.</p></li></ol><p data-end=\"848\" data-start=\"805\">So <strong data-end=\"847\" data-start=\"808\">neither reader executes <code data-end=\"845\" data-start=\"834\">wait(wrt)</code></strong>.</p><p data-end=\"971\" data-start=\"850\">That means <code data-end=\"866\" data-start=\"861\">wrt</code> remains available. A writer can therefore acquire <code data-end=\"922\" data-start=\"917\">wrt</code> while the readers are accessing the shared data.</p><h3 data-end=\"990\" data-section-id=\"1f77ox\" data-start=\"973\">The key issue</h3><p data-end=\"1092\" data-start=\"992\">In the <strong data-end=\"1036\" data-start=\"999\">correct readers-writers algorithm</strong>, the increment and the test must be protected together:</p><pre data-end=\"1183\" data-start=\"1094\"> </pre><pre><code>wait(mutex); readcount++; if (readcount == 1) wait(wrt); signal(mutex);</code></pre><p data-end=\"1291\" data-start=\"1185\">The modified version releases <code data-end=\"1222\" data-start=\"1215\">mutex</code> <strong data-end=\"1233\" data-start=\"1223\">before</strong> checking <code data-end=\"1259\" data-start=\"1243\">readcount == 1</code>, creating a <strong data-end=\"1290\" data-start=\"1272\">race condition</strong>.</p><p data-end=\"1308\" data-is-last-node=\"\" data-is-only-node=\"\" data-start=\"1293\">✅ <strong data-end=\"1308\" data-is-last-node=\"\" data-start=\"1295\">Answer: B</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/542689/go-classes-dpp-gate-cs-operating-system-reader-writer\" target=\"_blank\">GATE Overflow #542689</a></small></div>"
        },
        {
            "marks": 2,
            "neg": 0,
            "type": "MSQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"43\" data-start=\"0\">In the standard reader-preference solution:</p><p data-end=\"195\" data-start=\"149\">Which of the following statements are correct?</p><p><strong>Given Details:</strong></p><ul><li>$\\texttt{mutex}$ protects $\\texttt{readcount}$.</li><li>$\\texttt{wrt}$ controls access to the shared data.</li></ul></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">The first reader executes $\\texttt{wait(wrt)}$.</span>",
                "<span style=\"display: inline;\">Every reader individually executes $\\texttt{wait(wrt)}$ before reading.</span>",
                "<span style=\"display: inline;\">The last reader executes $\\texttt{signal(wrt)}$.</span>",
                "<span style=\"display: inline;\">Updates to $\\texttt{readcount}$ must be protected by $\\texttt{mutex}$.</span>"
            ],
            "answer": [
                "A"
            ],
            "solution": "<div class=\"solution-content\"><a name=\"547649\"></a><div itemprop=\"text\"><p data-end=\"57\" data-start=\"38\">$\\textbf{A. Correct}$</p><p data-end=\"85\" data-start=\"59\">The first reader executes:</p><p data-end=\"107\" data-start=\"87\">$\\texttt{wait(wrt)}$</p><p data-end=\"185\" data-start=\"109\">This blocks writers while one or more readers are accessing the shared data.</p><p data-end=\"208\" data-start=\"187\">$\\textbf{B. Incorrect}$</p><p data-end=\"261\" data-start=\"210\">Every reader does not execute $\\texttt{wait(wrt)}$.</p><p data-end=\"309\" data-start=\"263\">Only the first reader acquires $\\texttt{wrt}$.</p><p data-end=\"366\" data-start=\"311\">Other readers can enter while $\\texttt{readcount &gt; 0}$.</p><p data-end=\"387\" data-start=\"368\">$\\textbf{C. Correct}$</p><p data-end=\"451\" data-start=\"389\">When the last reader leaves, $\\texttt{readcount}$ becomes $0$.</p><p data-end=\"483\" data-start=\"453\">The last reader then executes $\\texttt{signal(wrt)}$</p><p data-end=\"564\" data-start=\"509\">This allows a waiting writer to access the shared data.</p><p data-end=\"585\" data-start=\"566\">$\\textbf{D. Correct}$</p><p data-end=\"678\" data-start=\"587\">Since multiple readers can update $\\texttt{readcount}$, these updates must be protected by $\\texttt{mutex}$ to avoid race conditions.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/542688/go-classes-dpp-gate-cs-operating-system-readers-writers-problem\" target=\"_blank\">GATE Overflow #542688</a></small></div>"
        }
    ]
});

registerTest({
    "name": "DPP 14 - Operating System (Process Synchronization - Part 2)",
    "testLabel": "DPP 14",
    "testType": "DPP",
    "bracket": "Process Synchronization - Part 2",
    "subject": "os",
    "series": "cse-dpp-2027",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 13,
    "topicsCovered": "Process Synchronization (Practice Set 2)",
    "questions": [
        {
            "marks": 2,
            "neg": 0,
            "type": "MSQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"97\" data-start=\"0\">Which of the following statements are correct for a correctly synchronized bounded-buffer system?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\texttt{empty}$ prevents producers from inserting into a full buffer.<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{full}$ prevents consumers from removing from an empty buffer.<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{mutex}$ protects shared buffer data and shared buffer indices.<br/></span>",
                "<span style=\"display: inline;\">Different producers may update the same insertion index simultaneously without synchronization.</span>"
            ],
            "answer": [
                "A"
            ],
            "solution": "<div class=\"solution-content\"><a name=\"547639\"></a><div itemprop=\"text\"><p data-end=\"57\" data-start=\"38\">$\\textbf{A. Correct}$</p><p data-end=\"127\" data-start=\"59\">$\\texttt{empty}$ represents the number of empty slots in the buffer.</p><p data-end=\"151\" data-start=\"129\">If the buffer is full,</p><p data-end=\"173\" data-start=\"153\">$\\texttt{empty} = 0$</p><p data-end=\"201\" data-start=\"175\">so the producer blocks at:</p><p data-end=\"225\" data-start=\"203\">$\\texttt{wait(empty)}$</p><p data-end=\"278\" data-start=\"227\">Hence, a producer cannot insert into a full buffer.</p><p data-end=\"299\" data-start=\"280\">$\\textbf{B. Correct}$</p><p data-end=\"369\" data-start=\"301\">$\\texttt{full}$ represents the number of filled slots in the buffer.</p><p data-end=\"394\" data-start=\"371\">If the buffer is empty,</p><p data-end=\"415\" data-start=\"396\">$\\texttt{full} = 0$</p><p data-end=\"443\" data-start=\"417\">so the consumer blocks at:</p><p data-end=\"466\" data-start=\"445\">$\\texttt{wait(full)}$</p><p data-end=\"529\" data-start=\"468\">Hence, a consumer cannot remove an item from an empty buffer.</p><p data-end=\"550\" data-start=\"531\">$\\textbf{C. Correct}$</p><p data-end=\"693\" data-start=\"552\">$\\texttt{mutex}$ provides mutual exclusion while accessing shared buffer data and shared indices such as the insertion and removal positions.</p><p data-end=\"744\" data-start=\"695\">Thus, only one process can modify them at a time.</p><p data-end=\"767\" data-start=\"746\">$\\textbf{D. Incorrect}$</p><p data-end=\"845\" data-start=\"769\">Different producers must not update the same insertion index simultaneously.</p><p data-end=\"926\" data-start=\"847\">Such updates must be protected using $\\texttt{mutex}$ to avoid race conditions.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/542156/go-classes-dpp-gate-cs-operating-system-bounded-buffer-properties\" target=\"_blank\">GATE Overflow #542156</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"7848\" data-start=\"7791\">A bounded buffer has capacity $5$ and is initially empty.</p><p data-end=\"7870\" data-start=\"7850\">During an execution:</p><p data-end=\"7980\" data-start=\"7943\">Assume no insertion or removal fails.</p><p data-end=\"8042\" data-start=\"7982\">What is the number of items currently present in the buffer?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$8$ producer insertions complete.<br/></span>",
                "<span style=\"display: inline;\">$5$ consumer removals complete.</span>"
            ],
            "answer": "2",
            "solution": "<div class=\"solution-content\"><a name=\"542371\"></a><div itemprop=\"text\">The initial is 0 ;<br/> Fill full 5;<br/> Remove 3;<br/> Remain 2;<br/> Fill full (means 2+3 ) 5;<br/> Remove 2;<br/> Remain 3. This is a parallel dynamic process. So the capacity is 5 but this process can be done.<br/> <br/> Total insert 8 and remove 5 ; final 3 is remaining.</div><br><br><small>Source: <a href=\"https://gateoverflow.in/542155/go-classes-dpp-gate-cs-operating-system-buffer-occupancy\" target=\"_blank\">GATE Overflow #542155</a></small></div>"
        },
        {
            "marks": 2,
            "neg": 0,
            "type": "MSQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"20\" data-start=\"0\">A producer executes:</p><p data-end=\"45\" data-start=\"22\">$\\texttt{wait(mutex);}$</p><p data-end=\"72\" data-start=\"49\">$\\texttt{wait(empty);}$</p><p data-end=\"102\" data-start=\"76\">$\\texttt{insert_item();}$</p><p data-end=\"130\" data-start=\"106\">$\\texttt{signal(full);}$</p><p data-end=\"159\" data-start=\"134\">$\\texttt{signal(mutex);}$</p><p data-end=\"228\" data-start=\"163\">A consumer must acquire $\\texttt{mutex}$ before removing an item.</p><p data-end=\"276\" data-start=\"230\">Which of the following statements are correct?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">If the buffer is full, the producer may block on $\\texttt{empty}$ while holding $\\texttt{mutex}$.<br/></span>",
                "<span style=\"display: inline;\">The consumer may be unable to acquire $\\texttt{mutex}$ to remove an item.<br/></span>",
                "<span style=\"display: inline;\">The system can enter deadlock.<br/></span>",
                "<span style=\"display: inline;\">The ordering guarantees that producers never block.</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"542641\"></a><div itemprop=\"text\"><p>option A is correct <br/>As when the buffer is full the value of <em>empty</em> will <em>0 &amp;</em> producer will acquire the <strong>wait(mutex); </strong>and enter the code and will be stuck in these line -: <strong>wait(empty); </strong></p><p>Producer is waiting for <code data-end=\"802\" data-start=\"791\">empty &gt; 0</code></p><p>But the consumer cannot proceed because it is waiting for<strong> <code data-end=\"949\" data-start=\"942\">mutex</code>.</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/542154/go-classes-dpp-gate-cs-operating-system-producer-consumer\" target=\"_blank\">GATE Overflow #542154</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"83\" data-start=\"0\">Which of the following is the correct order of semaphore operations for a producer?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\texttt{wait(mutex)}$, $\\texttt{wait(empty)}$, insert item, $\\texttt{signal(full)}$, $\\texttt{signal(mutex)}$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{wait(empty)}$, $\\texttt{wait(mutex)}$, insert item, $\\texttt{signal(mutex)}$, $\\texttt{signal(full)}$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{wait(full)}$, $\\texttt{wait(mutex)}$, insert item, $\\texttt{signal(mutex)}$, $\\texttt{signal(empty)}$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{wait(empty)}$, insert item, $\\texttt{wait(mutex)}$, $\\texttt{signal(full)}$, $\\texttt{signal(mutex)}$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"542920\"></a><div itemprop=\"text\"><p>To avoid leadlock between producer &amp; consumer: <strong>The Golden Rule</strong></p><p data-path-to-node=\"9\">Always reserve counting semaphores (<code data-index-in-node=\"36\" data-path-to-node=\"9\">empty</code> / <code data-index-in-node=\"44\" data-path-to-node=\"9\">full</code>) for <b data-index-in-node=\"54\" data-path-to-node=\"9\">resource availability</b> checks <i data-index-in-node=\"83\" data-path-to-node=\"9\">before</i> acquiring the binary semaphore (<code data-index-in-node=\"122\" data-path-to-node=\"9\">mutex</code>) for <b data-index-in-node=\"133\" data-path-to-node=\"9\">critical section access</b>.</p><ul data-path-to-node=\"10\"><li><p data-path-to-node=\"10,0,0\"><b data-index-in-node=\"0\" data-path-to-node=\"10,0,0\">Correct Producer:</b> <code data-index-in-node=\"18\" data-path-to-node=\"10,0,0\">wait(empty)</code> $\\rightarrow$ <code data-index-in-node=\"42\" data-path-to-node=\"10,0,0\">wait(mutex)</code> $\\rightarrow$ <i data-index-in-node=\"66\" data-path-to-node=\"10,0,0\">[Critical Section]</i> $\\rightarrow$ <code data-index-in-node=\"97\" data-path-to-node=\"10,0,0\">signal(mutex)</code> $\\rightarrow$ <code data-index-in-node=\"123\" data-path-to-node=\"10,0,0\">signal(full)</code></p></li><li><p data-path-to-node=\"10,1,0\"><b data-index-in-node=\"0\" data-path-to-node=\"10,1,0\">Correct Consumer:</b> <code data-index-in-node=\"18\" data-path-to-node=\"10,1,0\">wait(full)</code> $\\rightarrow$ <code data-index-in-node=\"41\" data-path-to-node=\"10,1,0\">wait(mutex)</code> $\\rightarrow$ <i data-index-in-node=\"65\" data-path-to-node=\"10,1,0\">[Critical Section]</i> $\\rightarrow$ <code data-index-in-node=\"96\" data-path-to-node=\"10,1,0\">signal(mutex)</code> $\\rightarrow$ <code data-index-in-node=\"122\" data-path-to-node=\"10,1,0\">signal(empty)</code></p></li></ul></div><br><br><small>Source: <a href=\"https://gateoverflow.in/542153/go-classes-dpp-gate-cs-operating-system-producer-synchronization\" target=\"_blank\">GATE Overflow #542153</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"62\" data-start=\"0\">A producer-consumer system uses a buffer containing $N$ slots.</p><p data-end=\"83\" data-start=\"64\">The semaphores are:</p><p data-end=\"288\" data-start=\"221\">Which initialization is correct when the buffer is initially empty?</p><p><strong>Given Details:</strong></p><ul><li>$\\texttt{empty}$, representing empty slots</li><li>$\\texttt{full}$, representing filled slots</li><li>$\\texttt{mutex}$, protecting buffer access</li></ul></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\texttt{empty = 0}$, $\\texttt{full = N}$, $\\texttt{mutex = 1}$</span>",
                "<span style=\"display: inline;\">$\\texttt{empty = N}$, $\\texttt{full = 0}$, $\\texttt{mutex = 1}$</span>",
                "<span style=\"display: inline;\">$\\texttt{empty = N}$, $\\texttt{full = 1}$, $\\texttt{mutex = 0}$</span>",
                "<span style=\"display: inline;\">$\\texttt{empty = 1}$, $\\texttt{full = N}$, $\\texttt{mutex = 0}$</span>"
            ],
            "answer": "B",
            "solution": "<div class=\"solution-content\"><a name=\"547643\"></a><div itemprop=\"text\"><p data-end=\"69\" data-start=\"20\">Initially, the buffer is empty and has $N$ slots.</p><p data-end=\"106\" data-start=\"71\">Therefore, all $N$ slots are empty:</p><p data-end=\"128\" data-start=\"108\">$\\texttt{empty} = N$</p><p data-end=\"148\" data-start=\"130\">No slot is filled:</p><p data-end=\"169\" data-start=\"150\">$\\texttt{full} = 0$</p><p data-end=\"247\" data-start=\"171\">The mutex semaphore should allow one process to access the buffer initially:</p><p data-end=\"269\" data-start=\"249\">$\\texttt{mutex} = 1$</p><p data-end=\"308\" data-start=\"271\">Hence, the correct initialization is:</p><p data-end=\"379\" data-start=\"310\">$\\texttt{empty} = N,\\quad \\texttt{full} = 0,\\quad \\texttt{mutex} = 1$</p><p data-end=\"407\" data-is-last-node=\"\" data-is-only-node=\"\" data-start=\"381\">$\\boxed{\\text{Answer: B}}$</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/542152/go-classes-dpp-gate-cs-operating-system-bounded-buffer\" target=\"_blank\">GATE Overflow #542152</a></small></div>"
        },
        {
            "marks": 2,
            "neg": 0,
            "type": "MSQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"46\" data-start=\"0\">Which of the following statements are correct?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">Semaphore $\\texttt{wait()}$ and $\\texttt{signal()}$ operations must be atomic.<br/></span>",
                "<span style=\"display: inline;\">A counting semaphore can represent the number of available instances of a resource.<br/></span>",
                "<span style=\"display: inline;\">In a blocking semaphore implementation, $\\texttt{wait()}$ may block the calling process.<br/></span>",
                "<span style=\"display: inline;\">The $\\texttt{signal()}$ operation always blocks the process that executes it.</span>"
            ],
            "answer": [
                "A"
            ],
            "solution": "<div class=\"solution-content\"><a name=\"543185\"></a><div itemprop=\"text\">correct - A,B,C<br/> <br/> C - blocking semaphore wait blocks the process when s&lt;0 <br/> <br/> D - signal can wake up the process when s&lt;=0 , it can never block it</div><br><br><small>Source: <a href=\"https://gateoverflow.in/542151/go-classes-dpp-gate-cs-operating-system-semaphore-properties\" target=\"_blank\">GATE Overflow #542151</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"38\" data-start=\"0\">A semaphore $S$ is initialized to $1$.</p><p data-end=\"80\" data-start=\"40\">The following operations occur in order:</p><p data-end=\"100\" data-start=\"82\">$\\texttt{wait(S)}$</p><p data-end=\"120\" data-start=\"102\">$\\texttt{wait(S)}$</p><p data-end=\"142\" data-start=\"122\">$\\texttt{signal(S)}$</p><p data-end=\"162\" data-start=\"144\">$\\texttt{wait(S)}$</p><p data-end=\"184\" data-start=\"164\">$\\texttt{signal(S)}$</p><p data-end=\"206\" data-start=\"186\">$\\texttt{signal(S)}$</p><p data-end=\"324\" data-start=\"208\">Assume the blocking implementation where $\\texttt{wait(S)}$ decrements $S$, and $\\texttt{signal(S)}$ increments $S$.</p><p data-end=\"394\" data-start=\"326\">What are the final value of $S$ and the number of blocked processes?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$S = 1$, blocked processes $= 0$<br/></span>",
                "<span style=\"display: inline;\">$S = 0$, blocked processes $= 1$<br/></span>",
                "<span style=\"display: inline;\">$S = -1$, blocked processes $= 1$<br/></span>",
                "<span style=\"display: inline;\">$S = 2$, blocked processes $= 0$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"542358\"></a><div itemprop=\"text\"><p>Correct Answer A . S=1, blocked processes =0</p><p><br/>Explanation :</p><p> </p><p><strong>initial S = 1</strong></p><p> </p><p data-end=\"100\" data-start=\"82\">wait(S) s= 0</p><p data-end=\"100\" data-start=\"82\">wait(S) s= -1</p><p data-end=\"120\" data-start=\"102\">signal(S) s= 0</p><p data-end=\"162\" data-start=\"144\">wait(S) s= -1</p><p data-end=\"184\" data-start=\"164\">signal(S) s=0</p><p data-end=\"206\" data-start=\"186\">signal(S) s=1</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/542150/go-classes-dpp-gate-cs-operating-system-semaphore-operation-trace\" target=\"_blank\">GATE Overflow #542150</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"34\" data-start=\"0\">Two semaphores are initialized as:</p><p data-end=\"43\" data-start=\"36\">$S = 1$</p><p data-end=\"52\" data-start=\"45\">$T = 0$</p><p data-end=\"87\" data-start=\"54\">Two processes execute repeatedly:</p><p data-end=\"102\" data-start=\"89\"><strong data-end=\"102\" data-start=\"89\">Process P</strong></p><p data-end=\"123\" data-start=\"104\">$\\texttt{wait(S);}$</p><p data-end=\"149\" data-start=\"127\">$\\texttt{print(\"A\");}$</p><p data-end=\"174\" data-start=\"153\">$\\texttt{signal(T);}$</p><p data-end=\"191\" data-start=\"178\"><strong data-end=\"191\" data-start=\"178\">Process Q</strong></p><p data-end=\"212\" data-start=\"193\">$\\texttt{wait(T);}$</p><p data-end=\"238\" data-start=\"216\">$\\texttt{print(\"B\");}$</p><p data-end=\"263\" data-is-last-node=\"\" data-is-only-node=\"\" data-start=\"242\">$\\texttt{signal(S);}$</p><p data-end=\"4835\" data-start=\"4772\">Which of the following can be the first six characters printed?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\texttt{AAABBB}$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{ABABAB}$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{BABABA}$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{AABBAB}$</span>"
            ],
            "answer": "B",
            "solution": "<div class=\"solution-content\"><a name=\"542734\"></a><div itemprop=\"text\"><p>if we run process Q first, then the process gets blocked due to wait(T) as T is already 0 . so we have to start from process P.then we run process Q after the execution of signal (T) in process P. while executing this we get the pattern \"AB\" repeating everytime due to process order PQPQ.... if we alter the process order(PQ) then no character will be printed.</p><p>so the correct answer is <strong>B</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/542149/go-classes-dpp-gate-cs-operating-system-binary-semaphore\" target=\"_blank\">GATE Overflow #542149</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"4020\" data-start=\"3987\">Two concurrent processes execute:</p><p data-end=\"4035\" data-start=\"4022\"><strong data-end=\"4035\" data-start=\"4022\">Process A</strong></p><p data-end=\"4042\" data-start=\"4037\">$A_1$</p><p data-end=\"4049\" data-start=\"4044\">$A_2$</p><p data-end=\"4056\" data-start=\"4051\">$A_3$</p><p data-end=\"4063\" data-start=\"4058\">$A_4$</p><p data-end=\"4078\" data-start=\"4065\"><strong data-end=\"4078\" data-start=\"4065\">Process B</strong></p><p data-end=\"4085\" data-start=\"4080\">$B_1$</p><p data-end=\"4092\" data-start=\"4087\">$B_2$</p><p data-end=\"4099\" data-start=\"4094\">$B_3$</p><p data-end=\"4106\" data-start=\"4101\">$B_4$</p><p data-end=\"4146\" data-start=\"4108\">A semaphore $S$ is initialized to $0$.</p><p data-end=\"4212\" data-start=\"4148\">The requirement is that $A_2$ must complete before $B_4$ begins.</p><p data-end=\"4262\" data-start=\"4214\">Where should the semaphore operations be placed?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\texttt{wait(S)}$ after $A_2$ and $\\texttt{signal(S)}$ before $B_4$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{signal(S)}$ after $A_2$ and $\\texttt{wait(S)}$ before $B_4$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{wait(S)}$ before $A_2$ and $\\texttt{signal(S)}$ after $B_4$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{signal(S)}$ before $A_2$ and $\\texttt{wait(S)}$ after $B_4$</span>"
            ],
            "answer": "B",
            "solution": "<div class=\"solution-content\"><a name=\"547637\"></a><div itemprop=\"text\">Initially,<br/> <br/> $S = 0$<br/> <br/> We need to guarantee that $A_2$ finishes before $B_4$ starts.<br/> <br/> So after completing $A_2$, Process A should execute:<br/> <br/> $\\texttt{signal(S);}$<br/> <br/> This indicates that $A_2$ has completed.<br/> <br/> Before executing $B_4$, Process B should execute:<br/> <br/> $\\texttt{wait(S);}$<br/> <br/> If $A_2$ has not yet completed, $S=0$, so Process B will block at $\\texttt{wait(S)}$.<br/> <br/> Once $A_2$ completes, $\\texttt{signal(S)}$ allows Process B to continue and execute $B_4$.<br/> <br/> Therefore, the correct placement is:<br/> <br/> $A_2 \\rightarrow \\texttt{signal(S)}$<br/> <br/> $\\texttt{wait(S)} \\rightarrow B_4$<br/> <br/> $\\boxed{\\text{Answer: B}}$</div><br><br><small>Source: <a href=\"https://gateoverflow.in/542148/go-classes-dpp-gate-cs-operating-system-semaphore-ordering\" target=\"_blank\">GATE Overflow #542148</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><section data-testid=\"conversation-turn-2\" data-turn=\"assistant\" data-turn-id=\"request-WEB:7f62bf49-98bf-43e8-9b83-41f14fde5617-0\" data-turn-id-container=\"request-WEB:7f62bf49-98bf-43e8-9b83-41f14fde5617-0\" dir=\"auto\"><p data-end=\"47\" data-start=\"0\">A counting semaphore $S$ is initialized to $2$.</p><p data-end=\"169\" data-start=\"49\">Three processes execute $\\texttt{wait(S)}$ one after another. No process executes $\\texttt{signal(S)}$ during this time.</p><p data-end=\"281\" data-start=\"171\">Assume that $\\texttt{wait(S)}$ first decrements $S$ and blocks the process if the resulting value is negative.</p><p data-end=\"372\" data-start=\"283\">What are the value of $S$ and the number of blocked processes after the three operations?</p></section></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$S = 0$, blocked processes $= 1$<br/></span>",
                "<span style=\"display: inline;\">$S = -1$, blocked processes $= 1$<br/></span>",
                "<span style=\"display: inline;\">$S = -1$, blocked processes $= 2$<br/></span>",
                "<span style=\"display: inline;\">$S = 0$, blocked processes $= 0$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"542658\"></a><div itemprop=\"text\"><figure class=\"image\"><img alt=\"\" height=\"658\" src=\"https://gateoverflow.in/?qa=blob&amp;qa_blobid=17743096817923442981\" width=\"1200\"/><figcaption>block process = 1 </figcaption></figure><p> </p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/542147/go-classes-dpp-gate-cs-operating-system-counting-semaphores\" target=\"_blank\">GATE Overflow #542147</a></small></div>"
        }
    ]
});

registerTest({
    "name": "DPP 15 - Operating System (Process Synchronization - Part 3)",
    "testLabel": "DPP 15",
    "testType": "DPP",
    "bracket": "Process Synchronization - Part 3",
    "subject": "os",
    "series": "cse-dpp-2027",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 15,
    "topicsCovered": "Process Synchronization (Practice Set 3)",
    "questions": [
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"2775\" data-start=\"2723\">Two processors $CPU_0$ and $CPU_1$ share a variable.</p><p data-end=\"2888\" data-start=\"2777\">$CPU_0$ disables its local interrupts and enters a critical section without acquiring any shared hardware lock.</p><p data-end=\"2949\" data-start=\"2890\">At the same time, $CPU_1$ enters the same critical section.</p><p data-end=\"2998\" data-start=\"2951\">Which critical-section requirement is violated?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">Mutual exclusion<br/></span>",
                "<span style=\"display: inline;\">Progress<br/></span>",
                "<span style=\"display: inline;\">Bounded waiting<br/></span>",
                "<span style=\"display: inline;\">No requirement is violated</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"550108\"></a><div itemprop=\"text\">A. Mutual exclusion<br/> <br/> The problem states that CPU0 and CPU1 enter the same critical section at the same time. This simultaneous entry completely breaks the rule of mutual exclusion.</div><br><br><small>Source: <a href=\"https://gateoverflow.in/542145/go-classes-dpp-gate-cs-operating-system-multiprocessor-interrupt-lock\" target=\"_blank\">GATE Overflow #542145</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"2215\" data-start=\"2102\">The atomic operation $\\texttt{compare_and_swap(x, old, new)}$ changes $x$ to $\\texttt{new}$ only if its current value equals $\\texttt{old}$.</p><p data-end=\"2227\" data-start=\"2217\">Initially,</p><p data-end=\"2234\" data-start=\"2229\">$x=5$</p><p data-end=\"2276\" data-start=\"2236\">The following operations occur in order:</p><p data-end=\"2312\" data-start=\"2278\">$P_2:$ $\\texttt{compare_and_swap(x, 5, 7)}$</p><p data-end=\"2348\" data-start=\"2314\">$P_1:$ $\\texttt{compare_and_swap(x, 5, 9)}$<br/> </p><p data-end=\"2384\" data-start=\"2350\">Which of the following is correct?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">Both operations succeed, and the final value of $x$ is $9$<br/></span>",
                "<span style=\"display: inline;\">Only $P_1$ succeeds, and the final value of $x$ is $9$<br/></span>",
                "<span style=\"display: inline;\">Only $P_2$ succeeds, and the final value of $x$ is $7$<br/></span>",
                "<span style=\"display: inline;\">Both operations fail, and the final value of $x$ is $5$</span>"
            ],
            "answer": "C",
            "solution": "<div class=\"solution-content\"><a name=\"549615\"></a><div itemprop=\"text\"><p>Right ! It's simple.</p><p>what <strong>compare_and_swap(x, old, new) do , if x == old then x = new</strong> ..that's it.</p><p><br/>First P2 : current value of x = 5 , old = 5 , new = 7 , then x == old --&gt; true , then x = new = 7.</p><p><br/>Second P1 : current value of x = 7 (from P2) , old = 5 , new = 9 then x == old --&gt; false , no change in x </p><p>So the final value is 7 and P2 succeded.<br/>Option C<br/><br/> </p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/542144/go-classes-dpp-gate-cs-operating-system-compare-and-swap\" target=\"_blank\">GATE Overflow #542144</a></small></div>"
        },
        {
            "marks": 2,
            "neg": 0,
            "type": "MSQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"1580\" data-start=\"1552\">Consider the following lock:</p><p data-end=\"1604\" data-start=\"1582\">Initially, $\\texttt{lock = 0.}$</p><p data-end=\"1636\" data-start=\"1606\">$\\texttt{while(test_and_set(\\&amp;lock));}$</p><p data-end=\"1656\" data-start=\"1638\">$\\texttt{Critical Section}$</p><p data-end=\"1669\" data-start=\"1658\">$\\texttt{lock = 0;}$</p><p data-end=\"1717\" data-start=\"1671\">Which of the following statements are correct?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">At most one process can execute inside the critical section at a time.<br/></span>",
                "<span style=\"display: inline;\">A waiting process repeatedly consumes CPU time while checking the lock.<br/></span>",
                "<span style=\"display: inline;\">The solution guarantees bounded waiting for every process.<br/></span>",
                "<span style=\"display: inline;\">A process may starve if other processes repeatedly acquire the lock before it.</span>"
            ],
            "answer": [
                "A",
                "B",
                "D"
            ],
            "solution": "<div class=\"solution-content\"><a name=\"542663\"></a><div itemprop=\"text\"><p><code data-end=\"209\" data-start=\"189\">test_and_set(lock)</code> ek <strong data-end=\"235\" data-start=\"213\">atomic instruction</strong> hai.</p><p>Iska kaam:</p><p>old = lock;<br/>lock = 1;<br/>return old;</p><p>case 1: staring me lock =0</p><p>P1 executes:</p><p>old = 0<br/>lock = 1<br/>return 0</p><p data-end=\"420\" data-start=\"412\">while(0)</p><p data-end=\"475\" data-start=\"422\">False → loop se bahar → <strong data-end=\"475\" data-start=\"446\">Critical Section me enter</strong></p><p data-end=\"475\" data-start=\"422\">Case 2: Dusra process aaya</p><p data-end=\"475\" data-start=\"422\">lock = 1</p><p data-end=\"475\" data-start=\"422\">old = 1<br/>lock = 1<br/>return 1</p><p data-end=\"592\" data-start=\"584\">while(1)</p><p data-end=\"598\" data-start=\"594\">True</p><p data-end=\"641\" data-start=\"600\">P2 loop me ghoomta rahega (busy waiting).</p><p data-end=\"641\" data-start=\"600\">Correct ans= a,b,d</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/542143/go-classes-dpp-gate-cs-operating-system-test-and-set-spinlock\" target=\"_blank\">GATE Overflow #542143</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"970\" data-start=\"930\">Consider the following atomic operation:</p><p data-end=\"1037\" data-start=\"972\">$\\texttt{test_and_set(x)}$ sets $x$ to $1$ and returns its previous value.</p><p data-end=\"1049\" data-start=\"1039\">Initially,</p><p data-end=\"1056\" data-start=\"1051\">$x=0$</p><p data-end=\"1154\" data-start=\"1058\">Process $P_1$ executes $\\texttt{test_and_set(x)}$, followed by process $P_2$ executing $\\texttt{test_and_set(x)}$.</p><p data-end=\"1190\" data-start=\"1156\"><br/>Which of the following is correct?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$P_1$ returns $0$, $P_2$ returns $1$, and the final value of $x$ is $1$<br/></span>",
                "<span style=\"display: inline;\">$P_1$ returns $1$, $P_2$ returns $0$, and the final value of $x$ is $0$<br/></span>",
                "<span style=\"display: inline;\">Both processes return $0$, and the final value of $x$ is $1$<br/></span>",
                "<span style=\"display: inline;\">Both processes return $1$, and the final value of $x$ is $0$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"542665\"></a><div itemprop=\"text\"><h3 data-end=\"79\" data-section-id=\"6tv2vp\" data-start=\"70\">Given</h3><p data-end=\"99\" data-start=\"81\"><code data-end=\"98\" data-start=\"81\">test_and_set(x)</code>:</p><pre data-end=\"137\" data-start=\"101\"> </pre><pre><code>old = x; x = 1; return old; </code> </pre><p data-end=\"151\" data-start=\"139\">Iska matlab:</p><ul data-end=\"245\" data-start=\"152\"><li data-end=\"187\" data-section-id=\"1lilo6x\" data-start=\"152\">Pehle purani value return karega.</li><li data-end=\"211\" data-section-id=\"toq3n4\" data-start=\"188\">Fir <code data-end=\"201\" data-start=\"194\">x = 1</code> kar dega.</li><li data-end=\"245\" data-section-id=\"xos8rh\" data-start=\"212\">Ye sab <strong data-end=\"235\" data-start=\"221\">atomically</strong> hota hai.</li></ul><p data-end=\"257\" data-start=\"247\">Initially:</p><pre data-end=\"276\" data-start=\"259\"> </pre><pre><code>x = 0</code></pre><p data-end=\"324\" data-start=\"278\">Pehle <strong data-end=\"290\" data-start=\"284\">P1</strong> execute karega, uske baad <strong data-end=\"323\" data-start=\"317\">P2</strong>.</p><p data-end=\"324\" data-start=\"278\">p1 ke time x = 0 he ;</p><p data-end=\"324\" data-start=\"278\">to old=0</p><p data-end=\"324\" data-start=\"278\">x=1</p><p data-end=\"324\" data-start=\"278\">return old;</p><p data-end=\"324\" data-start=\"278\">p1=0 and x=1</p><p data-end=\"324\" data-start=\"278\">now;</p><p data-end=\"324\" data-start=\"278\">p2 </p><p data-end=\"324\" data-start=\"278\">x = 1; it mean lock accure by p1</p><p data-end=\"324\" data-start=\"278\">old=1</p><p data-end=\"324\" data-start=\"278\">return old;</p><p data-end=\"324\" data-start=\"278\">p2=1</p><p data-end=\"324\" data-start=\"278\">x=1</p><p data-end=\"324\" data-start=\"278\"> </p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/542140/go-classes-dpp-gate-cs-operating-system-atomic-instructions\" target=\"_blank\">GATE Overflow #542140</a></small></div>"
        },
        {
            "marks": 2,
            "neg": 0,
            "type": "MSQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"388\" data-start=\"315\">Which of the following statements about disabling interrupts are correct?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">On a uniprocessor system, disabling interrupts can prevent the running process from being preempted while executing its critical section.<br/></span>",
                "<span style=\"display: inline;\">Disabling interrupts on one processor is sufficient to prevent all other processors from accessing shared memory in a multiprocessor system.<br/></span>",
                "<span style=\"display: inline;\">Allowing ordinary user processes to disable interrupts can be dangerous.<br/></span>",
                "<span style=\"display: inline;\">Keeping interrupts disabled for a long duration may affect timer and I/O services.</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"551976\"></a><div itemprop=\"text\">Option A) True on a uniprocessor system if interrupts are disable there can't be context switch as scheduler cant interrupt the process..<br/> <br/> Option B ) False In a multiprocessor system it is possible that two process may enter the same shared memory as they may be scheduled on different processor so it is not enough to disable the interrupts of one Processor.<br/> <br/> Option C ) True example : A usesr may diable interrupt and never enables it back.<br/> <br/> Option D ) True When interrupts are disable it disable the I/o services and timer as they use the interrupts.</div><br><br><small>Source: <a href=\"https://gateoverflow.in/542139/go-classes-dpp-gate-cs-operating-system-disabling-interrupts\" target=\"_blank\">GATE Overflow #542139</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"2057\" data-start=\"1993\">Consider the following alternative entry code for process $P_i$:</p><p data-end=\"2074\" data-start=\"2059\">$\\texttt{wants[i] = 1}$;</p><p data-end=\"2097\" data-start=\"2076\">$\\texttt{while(wants[1 - i]);}$</p><p data-end=\"2137\" data-start=\"2099\">The shared array $\\texttt{wants}$ is initially:</p><p data-end=\"2160\" data-start=\"2139\">$\\texttt{wants[0] = wants[1] = 0}$</p><p data-end=\"2241\" data-start=\"2162\"><br/>What can happen if both processes request entry at approximately the same time?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">Both processes enter the critical section simultaneously.<br/></span>",
                "<span style=\"display: inline;\">Both processes spin forever, violating progress.<br/></span>",
                "<span style=\"display: inline;\">The process with the smaller process number always enters first.<br/></span>",
                "<span style=\"display: inline;\">Both processes enter one after another with bounded waiting.</span>"
            ],
            "answer": "B",
            "solution": "<div class=\"solution-content\"><a name=\"541988\"></a><div itemprop=\"text\"><p data-end=\"2560\" data-start=\"2529\">Suppose the execution order is:</p><p data-end=\"2583\" data-start=\"2562\">$P_0:$ $\\texttt{wants[0] = 1}$</p><p data-end=\"2606\" data-start=\"2585\">$P_1:$ $\\texttt{wants[1] = 1}$</p><p data-end=\"2625\" data-start=\"2608\">Now $P_0$ checks:</p><p data-end=\"2646\" data-start=\"2627\">$\\texttt{while(wants[1]);}$</p><p data-end=\"2680\" data-start=\"2648\">Since $\\texttt{wants[1] =1}$, $P_0$ waits.</p><p data-end=\"2706\" data-start=\"2682\">Similarly, $P_1$ checks:</p><p data-end=\"2727\" data-start=\"2708\">$\\texttt{while(wants[0]);}$</p><p data-end=\"2766\" data-start=\"2729\">Since $\\texttt{wants[0] = 1}$, $P_1$ also waits.</p><p data-end=\"2841\" data-start=\"2768\">Neither process can reach the critical section or reset its intent value.</p><p data-end=\"2882\" data-start=\"2843\">Therefore, both processes spin forever.</p><p data-end=\"2996\" data-start=\"2884\">The critical section is empty, but no interested process can enter. </p><p data-end=\"2996\" data-start=\"2884\">Hence, the progress requirement is violated.</p><p data-end=\"3031\" data-start=\"2998\"><br/><strong>Answer : B</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/541987/go-classes-dpp-gate-cs-operating-system-petersons-algorithm\" target=\"_blank\">GATE Overflow #541987</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"3413\" data-start=\"3317\">Two threads execute Peterson’s entry code. The following statements execute in this exact order:</p><p data-end=\"3438\" data-start=\"3415\">$T_0:$ $\\texttt{flag[0] = true}$</p><p data-end=\"3457\" data-start=\"3440\">$T_0:$ $\\texttt{turn = 1}$</p><p data-end=\"3482\" data-start=\"3459\">$T_1:$ $\\texttt{flag[1] = true}$</p><p data-end=\"3501\" data-start=\"3484\">$T_1:$ $\\texttt{turn = 0}$</p><p data-end=\"3554\" data-start=\"3503\">Both threads now evaluate their $\\texttt{while}$ conditions:</p><p data-end=\"3566\" data-start=\"3556\">For $T_0$:</p><p data-end=\"3599\" data-start=\"3568\">$\\texttt{while(flag[1] \\&amp;\\&amp; turn == 1);}$</p><p data-end=\"3611\" data-start=\"3601\">For $T_1$:</p><p data-end=\"3644\" data-start=\"3613\">$\\texttt{while(flag[0] \\&amp;\\&amp; turn == 0);}$</p><p data-end=\"3693\" data-start=\"3646\"><br/>Which thread enters the critical section first?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">Only $T_0$<br/></span>",
                "<span style=\"display: inline;\">Only $T_1$<br/></span>",
                "<span style=\"display: inline;\">Both $T_0$ and $T_1$<br/></span>",
                "<span style=\"display: inline;\">Neither thread</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"541986\"></a><div itemprop=\"text\"><p data-end=\"3844\" data-start=\"3817\">After the four assignments:</p><p data-end=\"3860\" data-start=\"3846\">$\\texttt{flag[0] = true}$</p><p data-end=\"3876\" data-start=\"3862\">$\\texttt{flag[1]= true}$</p><p data-end=\"3886\" data-start=\"3878\">$\\texttt{turn = 0}$</p><p data-end=\"3924\" data-start=\"3888\">For $T_0$, the waiting condition is:</p><p data-end=\"3949\" data-start=\"3926\">$\\texttt{flag[1] \\&amp;\\&amp; turn = 1}$</p><p data-end=\"3975\" data-start=\"3951\">Substituting the values:</p><p data-end=\"4002\" data-start=\"3977\">$\\texttt{true\\ \\&amp;\\&amp;\\ false = false}$</p><p data-end=\"4067\" data-start=\"4004\">Therefore, $T_0$ does not wait and enters the critical section.</p><p data-end=\"4105\" data-start=\"4069\">For $T_1$, the waiting condition is:</p><p data-end=\"4130\" data-start=\"4107\">$\\texttt{flag[0]\\ \\&amp;\\&amp;\\ turn=0}$</p><p data-end=\"4156\" data-start=\"4132\">Substituting the values:</p><p data-end=\"4181\" data-start=\"4158\">$\\texttt{true\\ \\&amp;\\&amp;\\ true=true}$</p><p data-end=\"4206\" data-start=\"4183\">Therefore, $T_1$ waits.</p><p data-end=\"4239\" data-start=\"4208\">Hence, only $T_0$ enters first.</p><p data-end=\"4263\" data-start=\"4241\"><br/><strong>Answer : A</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/541985/go-classes-dpp-gate-cs-operating-system-petersons-solution\" target=\"_blank\">GATE Overflow #541985</a></small></div>"
        },
        {
            "marks": 2,
            "neg": 0,
            "type": "MSQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"4620\" data-start=\"4545\">Consider the following variation of Peterson’s algorithm for process $P_i$:</p><p data-end=\"4639\" data-start=\"4622\">$\\texttt{flag[i] = TRUE;}$</p><p data-end=\"4652\" data-start=\"4641\">$\\texttt{turn = i;}$</p><p data-end=\"4685\" data-start=\"4654\">$\\texttt{while(flag[j] \\&amp;\\&amp; turn == j);}$</p><p data-end=\"4705\" data-start=\"4687\">$\\texttt{Critical Section}$</p><p data-end=\"4725\" data-start=\"4707\">$\\texttt{flag[i] = FALSE;}$</p><p data-end=\"4778\" data-start=\"4727\">Which critical-section requirement can be violated?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">Mutual exclusion<br/></span>",
                "<span style=\"display: inline;\">Progress only<br/></span>",
                "<span style=\"display: inline;\">Bounded waiting only<br/></span>",
                "<span style=\"display: inline;\">None of the requirements</span>"
            ],
            "answer": "C",
            "solution": "<div class=\"solution-content\"><a name=\"541984\"></a><div itemprop=\"text\"><p data-end=\"40\" data-start=\"0\">For process $P_i$, the entry code is:</p><p data-end=\"106\" data-start=\"81\">$\\texttt{flag[i] = TRUE}$</p><p data-end=\"127\" data-start=\"108\">$\\texttt{turn = i}$</p><p data-end=\"148\" data-start=\"129\">and it waits while:</p><p data-end=\"191\" data-start=\"150\">$\\texttt{while(flag[j] \\&amp;\\&amp; turn == j);}$</p><p data-end=\"248\" data-start=\"193\">Suppose $P_j$ enters the critical section before $P_i$.</p><p data-end=\"310\" data-start=\"250\">After leaving the critical section, $P_j$ can again execute:</p><p data-end=\"337\" data-start=\"312\">$\\texttt{flag[j] = TRUE}$</p><p data-end=\"358\" data-start=\"339\">$\\texttt{turn = j}$</p><p data-end=\"458\" data-start=\"360\">Now $P_i$ again finds $\\texttt{flag[j] = TRUE}$ and $\\texttt{turn == j}$, so it continues waiting.</p><p data-end=\"523\" data-start=\"460\">This can happen repeatedly. Hence, $P_i$ may wait indefinitely.</p><p data-end=\"573\" data-start=\"525\">Therefore, bounded waiting is violated.</p><p data-end=\"625\" data-start=\"575\">Mutual exclusion and progress are still satisfied.</p><p data-end=\"653\" data-is-last-node=\"\" data-is-only-node=\"\" data-start=\"627\">$\\boxed{\\text{Answer: C}}$</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/541983/go-classes-dpp-gate-cs-operating-system-petersons-algorithm\" target=\"_blank\">GATE Overflow #541983</a></small></div>"
        },
        {
            "marks": 2,
            "neg": 0,
            "type": "MSQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"5895\" data-start=\"5849\">Which of the following statements are correct?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">Both strict alternation and Peterson’s solution use busy waiting.<br/></span>",
                "<span style=\"display: inline;\">Both strict alternation and Peterson’s solution satisfy the progress requirement.<br/></span>",
                "<span style=\"display: inline;\">Peterson’s solution uses intent flags to indicate whether a process wants to enter its critical section.<br/></span>",
                "<span style=\"display: inline;\">Under strict alternation, a process can be forced to wait even when the other process is executing only its remainder section.</span>"
            ],
            "answer": [
                "A"
            ],
            "solution": "<div class=\"solution-content\"><a name=\"541980\"></a><div itemprop=\"text\"><p data-end=\"6384\" data-start=\"6359\"><strong>Statement (A) is correct.</strong></p><p data-end=\"6477\" data-start=\"6386\">Both solutions repeatedly evaluate a condition while waiting, so both involve busy waiting.</p><p data-end=\"6506\" data-start=\"6479\"><strong>Statement (B) is incorrect.</strong></p><p data-end=\"6548\" data-start=\"6508\">Strict alternation can violate progress.</p><p data-end=\"6706\" data-start=\"6550\">For example, suppose $\\texttt{turn = 1}$, but $P_1$ is in its remainder section and does not want to enter. </p><p data-end=\"6706\" data-start=\"6550\">Process $P_0$ must still wait for $P_1$ to change $\\texttt{turn}$.</p><p data-end=\"6733\" data-start=\"6708\"><strong>Statement (C) is correct.</strong></p><p data-end=\"6760\" data-start=\"6735\">Peterson’s solution uses:</p><p data-end=\"6771\" data-start=\"6762\">$\\texttt{flag[0]}$ and $\\texttt{flag[1]}$</p><p data-end=\"6858\" data-start=\"6789\">to indicate whether each process wants to enter the critical section.</p><p data-end=\"6885\" data-start=\"6860\"><strong>Statement (D) is correct.</strong></p><p data-end=\"7069\" data-start=\"6887\">Strict alternation forces processes to take turns, even when only one process wants to enter repeatedly. </p><p data-end=\"7069\" data-start=\"6887\">A process in its remainder section can therefore delay an interested process.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/541979/go-classes-dpp-gate-cs-operating-system-peterson-vs-alternation\" target=\"_blank\">GATE Overflow #541979</a></small></div>"
        },
        {
            "marks": 2,
            "neg": 0,
            "type": "MSQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"687\" data-start=\"615\">Which of the following statements about Peterson’s solution are correct?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">Peterson’s solution uses atomic load and store operations.<br/></span>",
                "<span style=\"display: inline;\">Peterson’s solution directly supports any number of processes without modification.<br/></span>",
                "<span style=\"display: inline;\">Peterson’s solution uses busy waiting.<br/></span>",
                "<span style=\"display: inline;\">For two processes, it satisfies mutual exclusion, progress, and bounded waiting under the assumed memory model.</span>"
            ],
            "answer": [
                "A"
            ],
            "solution": "<div class=\"solution-content\"><a name=\"541977\"></a><div itemprop=\"text\"><p data-end=\"1090\" data-start=\"1065\"><strong>Statement (A) is correct.</strong></p><p data-end=\"1196\" data-start=\"1092\">Peterson’s solution is a software solution that assumes individual load and store operations are atomic.</p><p data-end=\"1225\" data-start=\"1198\"><strong>Statement (B) is incorrect.</strong></p><p data-end=\"1316\" data-start=\"1227\">The standard Peterson’s solution discussed here is designed for two processes or threads.</p><p data-end=\"1343\" data-start=\"1318\"><strong>Statement (C) is correct.</strong></p><p data-end=\"1439\" data-start=\"1345\">A waiting process repeatedly evaluates the $\\texttt{while}$ condition. Therefore, it uses busy waiting.</p><p data-end=\"1466\" data-start=\"1441\"><strong>Statement (D) is correct.</strong></p><p data-end=\"1559\" data-start=\"1468\">For two processes and under the required memory assumptions, Peterson’s solution satisfies:</p><ol><li data-end=\"1582\" data-start=\"1561\">Mutual exclusion<br/> </li><li data-end=\"1597\" data-start=\"1584\">Progress<br/> </li><li data-end=\"1619\" data-start=\"1599\">Bounded waiting</li></ol></div><br><br><small>Source: <a href=\"https://gateoverflow.in/541976/go-classes-dpp-gate-cs-operating-system-petersons-solution\" target=\"_blank\">GATE Overflow #541976</a></small></div>"
        }
    ]
});

registerTest({
    "name": "DPP 16 - Operating System (Process Synchronization - Part 4)",
    "testLabel": "DPP 16",
    "testType": "DPP",
    "bracket": "Process Synchronization - Part 4",
    "subject": "os",
    "series": "cse-dpp-2027",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 16,
    "topicsCovered": "Process Synchronization (Practice Set 4)",
    "questions": [
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"7552\" data-start=\"7498\">Two processes $P_i$ and $P_j$ use Peterson’s solution:</p><p data-end=\"7571\" data-start=\"7554\">$\\texttt{flag[i] = TRUE;}$</p><p data-end=\"7584\" data-start=\"7573\">$\\texttt{turn = j;}$</p><p data-end=\"7617\" data-start=\"7586\">$\\texttt{while(flag[j] \\&amp;\\&amp; turn == j);}$</p><p data-end=\"7637\" data-start=\"7619\">$\\texttt{Critical Section}$</p><p data-end=\"7657\" data-start=\"7639\">$\\texttt{flag[i] = FALSE;}$</p><p data-end=\"7727\" data-start=\"7659\">Assume $P_i$ has requested entry and is waiting in the $\\texttt{while}$ loop.</p><p data-end=\"7835\" data-start=\"7729\">What is the maximum number of times $P_j$ can enter its critical section before $P_i$ is allowed to enter?</p></div></span>",
            "image": "",
            "options": [],
            "answer": "1",
            "solution": "<div class=\"solution-content\"><a name=\"541686\"></a><div itemprop=\"text\"><p data-end=\"7911\" data-start=\"7885\">If $P_i$ is waiting, then:</p><p data-end=\"7929\" data-start=\"7913\">$\\texttt{flag[j] = TRUE}$</p><p data-end=\"7934\" data-start=\"7931\">and</p><p data-end=\"7946\" data-start=\"7936\">$\\texttt{turn = j}$</p><p data-end=\"7998\" data-start=\"7948\">Process $P_j$ may enter its critical section once.</p><p data-end=\"8031\" data-start=\"8000\">When $P_j$ leaves, it executes:</p><p data-end=\"8051\" data-start=\"8033\">$\\texttt{flag[j] = FALSE;}$</p><p data-end=\"8126\" data-start=\"8053\">This makes the waiting condition of $P_i$ false, allowing $P_i$ to enter.</p><p data-end=\"8192\" data-start=\"8128\">Even if $P_j$ immediately requests entry again, it must execute:</p><p data-end=\"8205\" data-start=\"8194\">$\\texttt{turn = i;}$</p><p data-end=\"8238\" data-start=\"8207\">This gives preference to $P_i$.</p><p data-end=\"8328\" data-start=\"8240\">Therefore, $P_j$ can enter its critical section at most once after $P_i$ begins waiting.</p><p data-end=\"8351\" data-start=\"8330\"><strong>Answer :</strong> $1$</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/541685/go-classes-dpp-gate-cs-operating-system-petersons-solution\" target=\"_blank\">GATE Overflow #541685</a></small></div>"
        },
        {
            "marks": 2,
            "neg": 0,
            "type": "MSQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"5791\" data-start=\"5741\">Consider the following solution for process $P_i$:</p><p data-end=\"5813\" data-start=\"5793\">$\\texttt{while (turn != i);}$</p><p data-end=\"5833\" data-start=\"5815\">$\\texttt{Critical Section}$</p><p data-end=\"5846\" data-start=\"5835\">$\\texttt{turn = j;}$</p><p data-end=\"5894\" data-start=\"5848\">Which of the following statements are correct?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">The solution satisfies mutual exclusion.<br/></span>",
                "<span style=\"display: inline;\">The solution uses busy waiting.<br/></span>",
                "<span style=\"display: inline;\">The solution may violate progress if $\\texttt{turn = j}$, but process $P_j$ remains in its remainder section.<br/></span>",
                "<span style=\"display: inline;\">Process $P_i$ can immediately re-enter its critical section after leaving, regardless of the value of $\\texttt{turn}$.</span>"
            ],
            "answer": [
                "A"
            ],
            "solution": "<div class=\"solution-content\"><a name=\"541684\"></a><div itemprop=\"text\"><p data-end=\"6287\" data-start=\"6262\"><strong>Statement (A) is correct.</strong></p><p data-end=\"6436\" data-start=\"6289\">The shared variable $\\texttt{turn}$ can contain only one process identifier at a time. Therefore, only the process whose identifier equals $\\texttt{turn}$ can enter.</p><p data-end=\"6463\" data-start=\"6438\"><strong>Statement (B) is correct.</strong></p><p data-end=\"6493\" data-start=\"6465\">A process repeatedly checks:</p><p data-end=\"6515\" data-start=\"6495\">$\\texttt{while(turn != i);}$</p><p data-end=\"6582\" data-start=\"6517\">while waiting. This consumes CPU time and is called busy waiting.</p><p data-end=\"6609\" data-start=\"6584\"><strong>Statement (C) is correct.</strong></p><p data-end=\"6656\" data-start=\"6611\">Suppose $P_i$ wants to enter, but $\\texttt{turn = j}$.</p><p data-end=\"6781\" data-start=\"6658\">Even if $P_j$ does not want to enter and remains in its remainder section, $P_i$ cannot proceed until $P_j$ changes $\\texttt{turn}$.</p><p data-end=\"6900\" data-start=\"6783\">Thus, a process outside its critical section can prevent an interested process from entering. This violates progress.</p><p data-end=\"6929\" data-start=\"6902\"><strong>Statement (D) is incorrect.</strong></p><p data-end=\"6981\" data-start=\"6931\">After leaving its critical section, $P_i$ assigns:</p><p data-end=\"6994\" data-start=\"6983\">$\\texttt{turn = j;}$</p><p data-end=\"7055\" data-start=\"6996\">Therefore, it cannot re-enter until $P_j$ returns the turn.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/541683/go-classes-dpp-gate-cs-operating-system-turn-variable\" target=\"_blank\">GATE Overflow #541683</a></small></div>"
        },
        {
            "marks": 2,
            "neg": 0,
            "type": "MSQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"4105\" data-start=\"4054\">Two processes use the following symmetric solution:</p><p data-end=\"4125\" data-start=\"4107\">For process $P_i$:</p><p data-end=\"4144\" data-start=\"4127\">$\\texttt{flag[i] = TRUE;}$</p><p data-end=\"4164\" data-start=\"4146\">$\\texttt{while (flag[j]);}$</p><p data-end=\"4184\" data-start=\"4166\">$\\texttt{Critical Section}$</p><p data-end=\"4204\" data-start=\"4186\">$\\texttt{flag[i] = FALSE;}$</p><p data-end=\"4252\" data-start=\"4206\">Which of the following statements are correct?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">The solution satisfies mutual exclusion.<br/></span>",
                "<span style=\"display: inline;\">If both processes set their flags to $\\texttt{TRUE}$ before checking the other flag, both processes can wait forever.<br/></span>",
                "<span style=\"display: inline;\">The solution satisfies the progress requirement.<br/></span>",
                "<span style=\"display: inline;\">The solution guarantees bounded waiting under every possible execution.</span>"
            ],
            "answer": [
                "A"
            ],
            "solution": "<div class=\"solution-content\"><a name=\"541682\"></a><div itemprop=\"text\"><p data-end=\"4626\" data-start=\"4601\"><strong>Statement (A) is correct.</strong></p><p data-end=\"4772\" data-start=\"4628\">While one process is executing in its critical section, its flag remains $\\texttt{TRUE}$. Therefore, the other process cannot pass its waiting condition.</p><p data-end=\"4799\" data-start=\"4774\"><strong>Statement (B) is correct.</strong></p><p data-end=\"4832\" data-start=\"4801\">Suppose both processes execute:</p><p data-end=\"4851\" data-start=\"4834\">$\\texttt{flag[i] = TRUE;}$</p><p data-end=\"4899\" data-start=\"4853\">before either evaluates the $\\texttt{while}$ condition.</p><p data-end=\"5062\" data-start=\"4901\">Each process then sees the other process’s flag as $\\texttt{TRUE}$. Both wait for the other process to reset its flag, but neither can reach the statement that resets it.</p><p data-end=\"5089\" data-start=\"5064\">This results in deadlock.</p><p data-end=\"5118\" data-start=\"5091\"><strong>Statement (C) is incorrect.</strong></p><p data-end=\"5244\" data-start=\"5120\">The system may have an empty critical section while both interested processes wait forever. Therefore, progress is violated.</p><p data-end=\"5273\" data-start=\"5246\"><strong>Statement (D) is incorrect.</strong></p><p data-end=\"5354\" data-start=\"5275\">Since a requesting process may wait forever, bounded waiting is not guaranteed.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/541681/go-classes-dpp-gate-cs-operating-system-mutual-exclusion\" target=\"_blank\">GATE Overflow #541681</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"2435\" data-start=\"2370\">Consider the following entry and exit code used by two processes:</p><p data-end=\"2452\" data-start=\"2437\">$\\texttt{while(lock);}$</p><p data-end=\"2468\" data-start=\"2454\">$\\texttt{lock = TRUE;}$</p><p data-end=\"2488\" data-start=\"2470\">$\\texttt{Critical Section}$</p><p data-end=\"2505\" data-start=\"2490\">$\\texttt{lock = FALSE;}$</p><p data-end=\"2533\" data-start=\"2507\">Initially, $\\texttt{lock = FALSE.}$</p><p data-end=\"2650\" data-start=\"2535\">Which of the following interleavings can cause both processes to execute in their critical sections simultaneously?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$P_0$ observes $\\texttt{lock = FALSE}$, sets it to $\\texttt{TRUE}$, completes its critical section, and then $P_1$ executes.<br/></span>",
                "<span style=\"display: inline;\">$P_0$ observes $\\texttt{lock = FALSE}$ and is preempted before setting it. $P_1$ also observes $\\texttt{lock = FALSE}$, sets it to $\\texttt{TRUE}$, and enters. $P_0$ then resumes, sets it to $\\texttt{TRUE}$, and also enters.<br/></span>",
                "<span style=\"display: inline;\">Both processes observe $\\texttt{lock = TRUE}$ and immediately enter their critical sections.<br/></span>",
                "<span style=\"display: inline;\">$P_0$ sets $\\texttt{lock = TRUE}$, causing $P_1$ to wait until $P_0$ resets it.</span>"
            ],
            "answer": "B",
            "solution": "<div class=\"solution-content\"><a name=\"541175\"></a><div itemprop=\"text\"><p data-end=\"3171\" data-start=\"3156\">The operations:</p><p data-end=\"3188\" data-start=\"3173\">$\\texttt{while (lock);}$</p><p data-end=\"3193\" data-start=\"3190\">and</p><p data-end=\"3209\" data-start=\"3195\">$\\texttt{lock = TRUE;}$</p><p data-end=\"3235\" data-start=\"3211\">are separate operations.</p><p data-end=\"3329\" data-start=\"3237\">Suppose $P_0$ reads the value of $\\texttt{lock}$ as $\\texttt{FALSE}$ but is preempted before assigning $\\texttt{TRUE}$.</p><p data-end=\"3424\" data-start=\"3331\">Process $P_1$ can also read $\\texttt{lock}$ as $\\texttt{FALSE}$, assign $\\texttt{TRUE}$, and enter its critical section.</p><p data-end=\"3479\" data-start=\"3426\">When $P_0$ resumes, it continues from the assignment:</p><p data-end=\"3495\" data-start=\"3481\">$\\texttt{lock = TRUE;}$</p><p data-end=\"3538\" data-start=\"3497\">It then also enters its critical section.</p><p data-end=\"3619\" data-start=\"3540\">Therefore, both processes may enter simultaneously, violating mutual exclusion.</p><p data-end=\"3650\" data-start=\"3621\"><strong>Answer : B</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/541174/go-classes-dpp-gate-cs-operating-system-lock-variable\" target=\"_blank\">GATE Overflow #541174</a></small></div>"
        },
        {
            "marks": 2,
            "neg": 0,
            "type": "MSQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"802\" data-start=\"756\">Which of the following statements are correct?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">Mutual exclusion ensures that if one process is executing in its critical section, no other process can execute in its critical section.<br/></span>",
                "<span style=\"display: inline;\">A process executing in its remainder section may participate in deciding which waiting process enters the critical section next.<br/></span>",
                "<span style=\"display: inline;\">Bounded waiting requires a limit on the number of times other processes may enter their critical sections after a process requests entry and before its request is granted.<br/></span>",
                "<span style=\"display: inline;\">A correct solution may assume that one process always executes faster than the other processes.</span>"
            ],
            "answer": [
                "A"
            ],
            "solution": "<div class=\"solution-content\"><a name=\"541173\"></a><div itemprop=\"text\"><p data-end=\"1439\" data-start=\"1414\">Statement (A) is correct.</p><p data-end=\"1530\" data-start=\"1441\">Mutual exclusion allows at most one process to execute in its critical section at a time.</p><p data-end=\"1559\" data-start=\"1532\">Statement (B) is incorrect.</p><p data-end=\"1706\" data-start=\"1561\">Under the progress requirement, only processes interested in entering the critical section may participate in deciding which process enters next.</p><p data-end=\"1733\" data-start=\"1708\">Statement (C) is correct.</p><p data-end=\"1869\" data-start=\"1735\">Bounded waiting requires a finite bound on the number of times other processes may enter before a waiting process receives permission.</p><p data-end=\"1898\" data-start=\"1871\">Statement (D) is incorrect.</p><p data-end=\"2016\" data-start=\"1900\">A correct critical-section solution must not depend on assumptions about the relative execution speeds of processes.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/541172/go-classes-dpp-gate-cs-operating-system-process-synchronization\" target=\"_blank\">GATE Overflow #541172</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"692\" data-start=\"610\">Why may two processes prefer shared memory over message passing for communication?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">Shared memory automatically prevents race conditions.<br/></span>",
                "<span style=\"display: inline;\">Shared memory is often faster because communication can occur without repeated kernel intervention and copying.<br/></span>",
                "<span style=\"display: inline;\">Shared memory allows processes on different computers to communicate without networking.<br/></span>",
                "<span style=\"display: inline;\">Shared memory guarantees that only one process accesses the shared data at a time.</span>"
            ],
            "answer": "B",
            "solution": "<div class=\"solution-content\"><a name=\"541161\"></a><div itemprop=\"text\"><p data-end=\"1161\" data-start=\"1083\">Shared memory allows both processes to access a common memory region directly.</p><p data-end=\"1374\" data-start=\"1163\">After the shared-memory region has been established, communicating processes can read and write the region like ordinary memory. This avoids repeated system calls and repeated copying of data through the kernel.</p><p data-end=\"1521\" data-start=\"1376\">However, shared memory does not automatically provide synchronization. Processes must still coordinate their accesses to prevent race conditions.</p><p data-end=\"1521\" data-start=\"1376\"><strong>Answer : B</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/541160/go-classes-dpp-gate-cs-operating-system-inter-process-communication\" target=\"_blank\">GATE Overflow #541160</a></small></div>"
        },
        {
            "marks": 2,
            "neg": 0,
            "type": "MSQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Two processes, $A$ and $B$, share a counting semaphore $\\verb|S|$ initialized to $2$. Each process executes the following code segment exactly once:</p><pre class=\"prettyprint linenums lang-c_cpp\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"4\">wait(S); /* Critical Section */ signal(S);</pre><p><br/>Which of the following statements is/are <strong>TRUE</strong>?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">The maximum number of processes that can be in the critical section simultaneously is $2$.<br/></span>",
                "<span style=\"display: inline;\">If the initial value of $\\verb|S|$ was $0$, a deadlock would occur if both processes attempted to enter.<br/></span>",
                "<span style=\"display: inline;\">A binary semaphore would yield the same synchronization behavior as this counting semaphore.<br/></span>",
                "<span style=\"display: inline;\">The $\\verb|wait|$ operation on a counting semaphore always decrements the value, even if it is already $0$.</span>"
            ],
            "answer": [
                "A"
            ],
            "solution": "<div class=\"solution-content\"><a name=\"523673\"></a><div itemprop=\"text\"><p><strong>A) TRUE:</strong> A counting semaphore initialized to $n$ allows $n$ processes into the CS. Here, $n=2$.<br/><br/><strong>B) TRUE:</strong> If $\\verb|S = 0|$, the first process to call $\\verb|wait(S)|$ will block. If both call it, both block, leading to a deadlock.<br/><br/><strong>C) FALSE: </strong>A binary semaphore only allows $1$ process $(0$ or $1)$. A counting semaphore with $S=2$ allows $2$ processes.<br/><br/><strong>D) FALSE: </strong>If $S=0$, the $\\verb|wait|$ operation typically blocks the process and puts it in a queue; it does not necessarily decrement the integer below zero in all implementations , though in some definitions it becomes negative to indicate the number of blocked processes. However, in the standard \"Test and Set\" logic, it stops at $0$.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/523672/go-classes-dpp-os-semaphores\" target=\"_blank\">GATE Overflow #523672</a></small></div>"
        },
        {
            "marks": 2,
            "neg": 0,
            "type": "MSQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider the following two-process synchronization code where $\\verb|flag[0]|$ and $\\verb|flag[1]|$ are initialized to $\\verb|false|$ and $\\verb|turn|$ is initialized to $0$ or $1$ randomly$:$</p><p><strong>Process</strong> $P_i(i=0,1 ; j=1-i)$ :</p><pre class=\"prettyprint linenums lang-c_cpp\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"4\">while (true) { flag[i] = true; turn = j; while (flag[j] &amp;&amp; turn == j); // CRITICAL SECTION flag[i] = false; // REMAINDER SECTION }</pre><p><br/>Which of the following statements is/are <strong>CORRECT</strong>?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">THE SOLUTION GUARANTEES MUTUAL EXCLUSION.<br/></span>",
                "<span style=\"display: inline;\">THE SOLUTION GUARANTEES PROGRESS.<br/></span>",
                "<span style=\"display: inline;\">THE SOLUTION GUARANTEES BOUNDED WAITING.<br/></span>",
                "<span style=\"display: inline;\">THE SOLUTION IS PRONE TO DEADLOCK.</span>"
            ],
            "answer": [
                "A"
            ],
            "solution": "<div class=\"solution-content\"><a name=\"523368\"></a><div itemprop=\"text\">The solution is not prone to deadlock because even if both processes try to enter the critical section at the same time, the turn variable makes sure that only one process is selected to proceed so the other one needs to wait. The selected process completes its execution and then resets its flag, allowing the waiting process(other one) to enter critical section.<br/> <br/> Since at least one process can always move forward into critical section without another's intervention and both cannot get stuck waiting indefinitely for each other , hence deadlock does not occur.</div><br><br><small>Source: <a href=\"https://gateoverflow.in/523315/go-classes-dpp-os-synchronization\" target=\"_blank\">GATE Overflow #523315</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\">A counting semaphore $S$ is initialized to $10 $. The following operations are performed in order:<br/> $8 P(S)$ operations, followed by $3 V(S)$ operations, followed by $1 P(S)$ operation.<br/> <br/> What is the final value of the semaphore $S$ ?</div></span>",
            "image": "",
            "options": [],
            "answer": "4",
            "solution": "<div class=\"solution-content\"><a name=\"522468\"></a><div itemprop=\"text\">Initial Value$: 10$<br/> <br/> After $8 P(S)$ (Wait/Decrement): $10-8=2$<br/> <br/> After $3 V(S)$ (Signal/Increment): $2+3=5$<br/> <br/> After $1 P(S)$ (Wait/Decrement): $5-1=4$</div><br><br><small>Source: <a href=\"https://gateoverflow.in/522467/go-classes-dpp-os-semaphores\" target=\"_blank\">GATE Overflow #522467</a></small></div>"
        },
        {
            "marks": 2,
            "neg": 0,
            "type": "MSQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Which of the following statements regarding <strong>Semaphores</strong> and <strong>Monitors</strong> is/are <strong>CORRECT</strong>?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">A binary semaphore can be used to achieve Mutual Exclusion.<br/></span>",
                "<span style=\"display: inline;\">If a process performing a $\\verb|signal()|$ operation on a counting semaphore does not find any waiting processes, the semaphore value is incremented.<br/></span>",
                "<span style=\"display: inline;\">Monitors are high-level synchronization constructs that require the programmer to manually manage the $\\verb|wait()|$ and $\\verb|signal()|$ operations for mutual exclusion.<br/></span>",
                "<span style=\"display: inline;\">A counting semaphore initialized to $5$ can allow at most $5$ processes to enter the critical section simultaneously.</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"522314\"></a><div itemprop=\"text\"><p><strong>(A) CORRECT: </strong>Binary semaphores $(0$ or $1)$ are primarily used for mutual exclusion (mutex).<br/><br/><strong>(B) CORRECT:</strong> In a counting semaphore, the $\\verb|signal()|$ (or $\\verb|V|$ ) operation increments the semaphore value. If the value becomes $\\leq 0$ after incrementing, it means a process was blocked and is now woken up; if $&gt;0$, it simply increases the available resource count.<br/><br/><strong>(C) INCORRECT:</strong> Monitors are high-level constructs where mutual exclusion is automatically handled by the compiler/runtime. The programmer only manages synchronization via condition variables.<br/><br/><strong>(D) CORRECT:</strong> A counting semaphore initialized to $N$ allows $N$ processes to pass the $\\verb|wait()|$ operation before blocking.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/522313/go-classes-dpp-os-semaphore\" target=\"_blank\">GATE Overflow #522313</a></small></div>"
        }
    ]
});

registerTest({
    "name": "DPP 17 - Operating System (Process Synchronization - Part 5)",
    "testLabel": "DPP 17",
    "testType": "DPP",
    "bracket": "Process Synchronization - Part 5",
    "subject": "os",
    "series": "cse-dpp-2027",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 12,
    "topicsCovered": "Process Synchronization (Practice Set 5)",
    "questions": [
        {
            "marks": 2,
            "neg": 0,
            "type": "MSQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider three concurrent processes $P_1, P_2$, and $P_3$ sharing a single counting semaphore $\\verb|S|$ initialized to $\\mathbf{2}$. Each process executes the following sequence of operations exactly once:</p><pre class=\"prettyprint linenums lang-text\" data-pbcklang=\"text\" data-pbcktabsize=\"4\">wait(S); // Critical Section signal(S); signal(S);</pre><p>Which of the following statements is/are TRUE after all three processes have finished execution?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">THE MAXIMUM POSSIBLE VALUE OF THE SEMAPHORE $\\verb|S|$ IS $5$.<br/></span>",
                "<span style=\"display: inline;\">THE MINIMUM POSSIBLE VALUE OF THE SEMAPHORE $\\verb|S|$ IS $2$.<br/></span>",
                "<span style=\"display: inline;\">DEADLOCK IS NOT POSSIBLE IN THIS SCENARIO.<br/></span>",
                "<span style=\"display: inline;\">AT MOST TWO PROCESSES CAN BE IN THE CRITICAL SECTION SIMULTANEOUSLY AT ANY POINT.</span>"
            ],
            "answer": [
                "A"
            ],
            "solution": "<div class=\"solution-content\"><a name=\"521945\"></a><div itemprop=\"text\"><p><strong>(A) is TRUE:</strong> Total signals $(6)$ minus total waits $(3)$ added to initial $(2)$ equals $5$.<br/><br/><strong>(C) is TRUE:</strong> Since $S$ starts at $2$, at least two processes can always proceed; no circular wait can occur.<br/><br/><strong>(D) is TRUE:</strong> The initial $\\verb|wait(S)|$ prevents more than two processes from entering the CS before a $\\verb|signal(S)|$ occurs.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/521944/go-classes-dpp-os-synchronization\" target=\"_blank\">GATE Overflow #521944</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Three processes ( $P_1, P_2, P_3$ ) share a single resource and coordinate using two binary semaphores, $S_1$ and $S_2$, both initialized to $0$. The processes execute the following code snippets:</p><p>\\[<br/>\\begin{array}{lll}<br/>P_1 &amp; P_2 &amp; P_3 \\\\<br/>\\hline<br/>\\verb|print(\"A\")| &amp; \\verb|wait(S1)| &amp; \\verb|wait(S2)| \\\\<br/>\\verb|signal(S1)| &amp; \\verb|print(\"B\")| &amp; \\verb|print(\"C\")| \\\\<br/>\\verb|signal(S2)| &amp; \\verb|signal(S2)| &amp; \\verb|wait(S1)|<br/>\\end{array}<br/>\\]<br/>Which of the following execution sequences is <strong>NOT</strong> possible?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\verb|A B C|$<br/></span>",
                "<span style=\"display: inline;\">$\\verb|A C B|$<br/></span>",
                "<span style=\"display: inline;\">$\\verb|B A C|$<br/></span>",
                "<span style=\"display: inline;\">$\\verb|A|$ followed by $P_2$ and $P_3$ in any order</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"520976\"></a><div itemprop=\"text\"><p>This is a dependency problem. We analyze the initial states of the semaphores: $S_1=0$, $S_2=0$.<br/><br/>$P_2$ is stuck at $\\verb|wait(S1)|$. It cannot print \"$\\verb|B|$\" until $S_1&gt;0$.<br/><br/>$P_3$ is stuck at $\\verb|wait(S2)|$. It cannot print \"$\\verb|C|$\" until $S_2&gt;0$.<br/><br/>Only $P_1$ can start because it does not have an initial $\\verb|wait|$.</p><ol start=\"1\" style=\"list-style-type: upper-alpha;\"><li>$\\verb|A B C|:$ Possible. $P_1$ finishes, then $P_2$ runs, then $P_3$ runs.<br/> </li><li>$\\verb|A C B|:$ Possible. $P_1$ finishes, then $P_3$ runs, then $P_2$ runs.<br/> </li><li>$\\verb|B A C|:$ <strong>IMPOSSIBLE</strong>. \"$\\verb|B|$\" cannot be printed before \"$\\verb|A|$\" because $P_2$ is waiting for the signal that $P_1$ sends after printing \"$\\verb|A|$\".<br/> </li><li>$\\verb|A|$ <strong>followed by</strong> $P2$ <strong>and</strong> $P3$: Possible. Once $P_1$ signals both, $P_2$ and $P_3$ are in the ready queue and can be interleaved.</li></ol></div><br><br><small>Source: <a href=\"https://gateoverflow.in/520975/go-classes-dpp-os-synchronization\" target=\"_blank\">GATE Overflow #520975</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider a counting semaphore $S$ initialized to $10$. The following operations are performed on $S$ in the given order:</p><p>If the final value of the semaphore is $\\mathbf{3}$, what is the value of $\\mathbf{x}$ ?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\mathbf{12} ~P(S)$ operations<br/></span>",
                "<span style=\"display: inline;\">$\\mathbf{7} ~V(S)$ operations<br/></span>",
                "<span style=\"display: inline;\">$\\mathbf{5} ~P(S)$ operations<br/></span>",
                "<span style=\"display: inline;\">$\\mathbf{x} ~V(S)$ operations</span>"
            ],
            "answer": "3",
            "solution": "<div class=\"solution-content\"><a name=\"520696\"></a><div itemprop=\"text\"><ul><li><strong>Initial value:</strong> $S=10$<br/> </li><li>$\\mathbf{12} ~P(S)$ operations: $10-12=-2$<br/> </li><li>$\\mathbf{7} ~ V(S)$ operations: $-2+7=5$<br/> </li><li>$\\mathbf{5} ~ P(S)$ operations: $5-5=0$<br/> </li><li>$\\mathbf{x} ~ V(S)$ operations: $0+\\mathrm{x}=\\mathrm{x}$<br/> </li></ul><p>The problem states the final value is $3$. Therefore: $\\mathrm{x}=3$</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/520695/go-classes-dpp-os-semaphore\" target=\"_blank\">GATE Overflow #520695</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider the Producer-Consumer problem with a shared buffer of size $N=5$. The system uses three semaphores$: \\verb|empty|$ $($initialized to $5 )$, $\\verb|full|$ $($initialized to $0 )$, and $\\verb|mutex|$ $($initialized to $1)$.</p><p>The Producer process executes the following code:</p><pre class=\"prettyprint linenums lang-c_cpp\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"4\">while(true) { // Produce item Wait(empty); Wait(mutex); // Add to buffer Signal(mutex); Signal(full); }</pre><p>The Consumer process executes the following code:</p><pre class=\"prettyprint linenums lang-c_cpp\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"4\">while(true) { Wait(full); Wait(mutex); // Remove from buffer Signal(mutex); Signal(empty); // Consume item }</pre><p>Suppose the Producer has already added $\\mathbf{3}$<strong> items</strong> to the buffer. If $\\mathbf{2}$<strong> Consumer instances</strong> and $\\mathbf{1}$ <strong>Producer instance</strong> now attempt to access the buffer simultaneously, what is the <strong>maximum</strong> possible value the semaphore $\\verb|empty|$ can reach during their execution?</p></div></span>",
            "image": "",
            "options": [],
            "answer": "4",
            "solution": "<div class=\"solution-content\"><a name=\"518816\"></a><div itemprop=\"text\"><p>Buffer size $N=5$.<br/><br/>$3$ items are already in the buffer.<br/><br/>$\\verb|full|$ $=3$ (counts items present).<br/><br/>$\\verb|empty| = 2$ (counts available slots: $5-3=2$).<br/><br/>$\\verb|mutex| =1$.<br/> </p><p><strong>Execution for Maximum</strong> $\\verb|empty|$ <strong>Value: </strong>To maximize $\\verb|empty|$, we need the Consumers to finish their work before the Producer starts theirs.</p><p>Consumer increments empty so it will become $4$ after $2$ consumers.<br/><br/>Producer decrements empty so it will become $3$ after $1$ producer.<br/><br/>Max possible empty during execution $= 4$</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/518815/go-classes-dpp-os-synchronization\" target=\"_blank\">GATE Overflow #518815</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Three processes $(P_1, P_2, P_3)$ share a common counting semaphore $S$ , which is initialized to $2$. Each process executes the following sequence of operations exactly once:</p><pre class=\"prettyprint linenums lang-text\" data-pbcklang=\"text\" data-pbcktabsize=\"4\">Wait(S); // Critical Section Signal(S); Wait(S); // Critical Section Signal(S);</pre><p>If no other processes or operations interfere with $S$, what is the maximum possible value the semaphore $S$ can reach at any point during the execution of these three processes?</p></div></span>",
            "image": "",
            "options": [],
            "answer": "2",
            "solution": "<div class=\"solution-content\"><a name=\"518813\"></a><div itemprop=\"text\">The first $\\verb|Wait|$ operations will always bring $S$ down.<br/> <br/> The $\\verb|Signal|$ operations only happen after a process has already \"consumed\" a unit of the semaphore.<br/> <br/> That's why the max possible value of $S$ is $2$</div><br><br><small>Source: <a href=\"https://gateoverflow.in/518811/go-classes-dpp-os-synchronization\" target=\"_blank\">GATE Overflow #518811</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider two processes, $P_1$ and $P_2$, sharing a common variable count (initialized to 10) and using a binary semaphore S (initialized to 1). The processes execute the following code:</p><p>Process $P_1$ :</p><pre class=\"prettyprint linenums lang-c_cpp\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"4\">wait(S); count = count + 5; signal(S);</pre><p><br/>Process $P_2$ :</p><pre class=\"prettyprint linenums lang-c_cpp\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"4\">wait(S); count = count * 2; signal(S);</pre><p><br/>If these processes are executed concurrently, what is the difference between the maximum possible value and the minimum possible value of count after both processes complete?</p></div></span>",
            "image": "",
            "options": [],
            "answer": "5",
            "solution": "<div class=\"solution-content\"><a name=\"518277\"></a><div itemprop=\"text\"><p>Since a BINARY SEMAPHORE is used, the processes cannot interleave their internal steps; one must finish its entire operation before the other starts. We need to find the difference between the possible final values.</p><ul><li>Case $1\\left(P_1\\right.$ then $\\left.P_2\\right)$ :</li></ul><p>1. Start with 10.<br/><br/>2. $P_1$ adds 5: $10+5=15$.<br/><br/>3. $P_2$ multiplies by 2 : $15 \\times 2=\\mathbf{3 0}$.<br/> </p><ul><li>Case $2\\left(P_2\\right.$ then $\\left.P_1\\right)$ :</li></ul><p>1. Start with 10.<br/><br/>2. $P_2$ multiplies by 2 : $10 \\times 2=20$.<br/><br/>3. $P_1$ adds $5: 20+5=\\mathbf{2 5}$.<br/> </p><p>Difference = 5</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/518276/go-classes-dpp-os-synchronization\" target=\"_blank\">GATE Overflow #518276</a></small></div>"
        },
        {
            "marks": 2,
            "neg": 0,
            "type": "MSQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Two processes, $P 1$ and $P 2$, share a common variable $X$, which is initialized to $10$. They also use a binary semaphore $S$, initialized to $1$ . The processes execute the following code concurrently:</p><pre class=\"prettyprint linenums lang-text\" data-pbcklang=\"text\" data-pbcktabsize=\"4\">Process P1: wait(S); X = X + 5; signal(S); Process P2: wait(S); X = X * 2; signal(S);</pre><p><br/>What are the possible final values of $X$ ?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$15$<br/></span>",
                "<span style=\"display: inline;\">$20$<br/></span>",
                "<span style=\"display: inline;\">$25$<br/></span>",
                "<span style=\"display: inline;\">$30$</span>"
            ],
            "answer": [
                "A"
            ],
            "solution": "<div class=\"solution-content\"><a name=\"516830\"></a><div itemprop=\"text\">Since the binary semaphore ensures mutual exclusion, the processes must execute serially; if $P 1$ goes first, $(10+5) \\times 2=30$, and if $P2$ goes first, $(10 \\times 2)+5=25$.</div><br><br><small>Source: <a href=\"https://gateoverflow.in/516829/go-classes-dpp-os-synchronization\" target=\"_blank\">GATE Overflow #516829</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Two processes, $\\mathbf{P1}$ and $\\mathbf{P2}$, share two binary semaphores (mutexes) $\\mathbf{S}$ and $\\mathbf{Q}$, both initialized to $\\mathbf{1}$. The code for the processes is shown below:</p><p>$\\mathbf{Process ~P1:}$</p><pre class=\"prettyprint linenums lang-c_cpp\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"4\">while (true) { wait(S); wait(Q); // Critical Section signal(S); signal(Q); }</pre><p><br/>$\\mathbf{Process ~P2:}$</p><pre class=\"prettyprint linenums lang-c_cpp\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"4\">while (true) { wait(Q) ; wait(S); // Critical Section signal(Q); signal(S); }</pre><p><br/>Which of the following statements is <strong>TRUE</strong> regarding the execution of these processes?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">The system is free from deadlock but may suffer from starvation.<br/></span>",
                "<span style=\"display: inline;\">The system is guaranteed to execute without any synchronization issues.<br/></span>",
                "<span style=\"display: inline;\">The system may enter a deadlock state.<br/></span>",
                "<span style=\"display: inline;\">The system enforces strict alteration between $\\mathrm{P1}$ and $\\mathrm{P2}$.</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"514336\"></a><div itemprop=\"text\"><p>If $\\mathrm{P1}$ executes $\\verb|wait(S)| ~($locking $\\mathrm{S)}$ and is then preempted...<br/><br/>$\\mathrm{P2}$ executes $\\verb|wait(Q)| ~($locking $\\mathrm{Q})$ and then tries to execute $\\verb|wait(S)|$...<br/><br/>$\\mathrm{P2}$ will block because $\\mathrm{S}$ is held by $\\mathrm{P1}$.<br/><br/>When $\\mathrm{P1}$ resumes, it tries to execute $\\verb|wait(Q)|$, but $\\mathrm{Q}$ is held by $\\mathrm{P2}$.<br/><br/>$\\mathrm{P1}$ blocks waiting for $\\mathrm{Q}$, and $\\mathrm{P2}$ blocks waiting for $\\mathrm{S}$. Both wait forever.<br/><br/>Therefore, the system <strong>may enter a deadlock state.</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/514334/go-classes-dpp-os-synchronization\" target=\"_blank\">GATE Overflow #514334</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider a <strong>NON-NEGATIVE COUNTING SEMAPHORE</strong> $S$. The operation $P(S)$ (wait) attempts to decrement $S$, and the operation $V(S)$ (signal) increments $S$. A process executing a $P(S)$ operation will <strong>BLOCK</strong> if the current value of $S$ is $0$ .</p><p>During a specific execution sequence, $\\mathbf{35}$ $P(S)$ <strong>OPERATIONS</strong> and $\\mathbf{18}$ $V(S)$ <strong>OPERATIONS</strong> are issued in an arbitrary order. What is the <strong>LARGEST INITIAL VALUE</strong> of $S$ for which at least <strong>THREE</strong> $P(S)$ operations will remain blocked at the end of the sequence?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$13$<br/></span>",
                "<span style=\"display: inline;\">$14$<br/></span>",
                "<span style=\"display: inline;\">$15$<br/></span>",
                "<span style=\"display: inline;\">$16$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"508385\"></a><div itemprop=\"text\">Total $P(S)$ issued $=35$.<br/> <br/> Total $V(S)$ issued $=18$.<br/> <br/> Let $I$ be the initial value of the semaphore.<br/> <br/> Total potential successful $P(S)$ operations $=I+18$.<br/> <br/> Number Blocked $=$ Total $P(S)-($ Initial $S+$ Total $V(S))$<br/> <br/> $3 \\leq 35-(I+18)$<br/> <br/> $I \\leq 14$</div><br><br><small>Source: <a href=\"https://gateoverflow.in/508383/go-classes-dpp-os-semaphore\" target=\"_blank\">GATE Overflow #508383</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>A system uses a modified <strong>Counting Semaphore</strong> $S$ to manage access to a pool of 3 identical resources. The semaphore is initialized to $S=3$. The $\\verb|Wait (S)|$ and $\\verb|Signal(S)|$ operations are redefined to prioritize processes based on their <strong>Priority Level</strong> $(L)$, where a higher $L$ means higher priority.</p><p>Consider five processes $\\left\\{P_1, P_2, P_3, P_4, P_5\\right\\}$ with Priority Levels $\\{10,20,30,40,50\\}$ respectively. They arrive in the following order:<br/><br/>1. $P_1, P_2, P_3$ arrive and successfully execute $\\verb|Wait|$.<br/><br/>2. $P_4$ and $P_5$ arrive and execute $\\verb|Wait|$, entering queue $Q$.<br/><br/>3. $P_1$ executes $\\verb|Signal|$.<br/><br/>4. A new process $P_6$ with Priority Level $L=100$ arrives and executes $\\verb|Wait|$.<br/> </p><p>Which one of the following is TRUE regarding this scenario?</p><p><strong>Given Details:</strong></p><ul><li>$\\verb|WAIT(S, L)|:$ If $S>0, S=S-1$. If $S=0$, the process enters a Priority Queue $Q$ sorted by $L$.</li><li>$\\verb|SIGNAL(S)|:$ If $Q$ is empty, $S=S+1$. If $Q$ is not empty, the process with the <strong>highest priority</strong> $L$ in $Q$ is woken up and immediately consumes the resource $(S$ remains $0)$.</li></ul></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$P_4$ WILL ACQUIRE THE RESOURCE AFTER $P_1$ SIGNALS, REGARDLESS OF $P_6$.</span>",
                "<span style=\"display: inline;\">$P_5$ WILL ACQUIRE THE RESOURCE AFTER $P_1$ SIGNALS, BUT $P_6$ MAY CAUSE $P_4$ TO STARVE.</span>",
                "<span style=\"display: inline;\">$P_6$ WILL ACQUIRE THE RESOURCE IMMEDIATELY AFTER $P_1$ SIGNALS, BYPASSING $P_4$ AND $P_5$.</span>",
                "<span style=\"display: inline;\">THE SYSTEM IS GUARANTEED TO BE STARVATION-FREE BECAUSE THE QUEUE IS SORTED.</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"507494\"></a><div itemprop=\"text\"><p><strong>1. Initial State:</strong></p><ul><li>$S=3 ~(3$ resources available$)$.<br/> </li><li>$Q=\\emptyset$ (Empty).<br/> </li></ul><p><strong>2. </strong>$P_1, P_2, P_3$ <strong>arrive and execute</strong> $\\verb|Wait|$ :</p><ul><li>All three find $S&gt;0$.<br/> </li><li>$S$ decrements three times: $3 \\rightarrow 2 \\rightarrow 1 \\rightarrow 0$.<br/> </li><li><strong>Current State:</strong> $S=0 . P_1, P_2, P_3$ are holding resources. $Q=\\emptyset$.<br/> </li></ul><p><strong>3. </strong>$P_4(L=40)$ <strong>and</strong> $P_5(L=50)$ <strong>arrive and execute</strong> $\\verb|Wait|$ :</p><ul><li>$S=0$, so they cannot acquire the resource.<br/> </li><li>They enter the Priority Queue $Q$.<br/> </li><li>Since $Q$ is sorted by $L$ : $Q=\\left[P_5(50), P_4(40)\\right]$.<br/> </li><li><strong>Current State:</strong> $S=0 . Q=\\left\\{P_5, P_4\\right\\}$.</li></ul><div> </div><div><p><strong>4.</strong> $P_1$ <strong>executes</strong> $\\verb|Signal|$ :</p><ul><li>According to the logic: \"If $Q$ is not empty, the process with the highest priority $L$ in $Q$ is woken up... $S$ remains $0$.\"<br/> </li><li>$P_5$ has the highest priority ( $L=50$ ) in $Q$.<br/> </li><li><strong>Result: </strong>$P_5$ is woken up and takes $P_1$ 's resource.<br/> </li><li><strong>Current State:</strong> $S=0 . Q=\\left\\{P_4\\right\\}$.<br/> </li></ul><p><strong>5. </strong>$P_6(L=100)$ <strong>arrives and executes</strong> $\\verb|Wait|$ :</p><ul><li>$S=0$, so $P_6$ must enter the queue $Q$.<br/> </li><li>Since $Q$ is sorted by $L$ and $P_6$ has priority $100$, it moves to the <strong>front</strong> of the queue.<br/> </li><li><strong>Current State:</strong> $S=0 . Q=\\left[P_6(100), P_4(40)\\right]$.<br/> </li></ul><p><strong>A is False:</strong> $P_5$ (Priority 50) acquired the resource after $P_1$ signaled, not $P_4$.<br/><br/><strong>B is True:</strong> $P_5$ acquired the resource because it was at the head of the queue when $P_1$ signaled. However, because $P_6$ arrived with a higher priority than $P_4, P_6$ will be the next to wake up when $P_2$ or $P_3$ signals. If more high-priority processes $(P_7, P_8 \\ldots)$ continue to arrive, $P_4$ will stay in the queue indefinitely.</p><p><strong>C is False: </strong>$P_6$ enters the queue. It must wait for the <em>next </em>$\\verb|Signal|$ event $($from $P_2, P_3$, or $P_5)$ to acquire a resource. It cannot \"snatch\" the resource from $P_5$ during $P_1$ 's signal.</p><p><strong>D is False:</strong> Strict priority queues are a classic cause of <strong>Starvation</strong> for low-priority processes.</p></div></div><br><br><small>Source: <a href=\"https://gateoverflow.in/507328/go-classes-dpp-os-process-synchronization\" target=\"_blank\">GATE Overflow #507328</a></small></div>"
        }
    ]
});

registerTest({
    "name": "DPP 18 - Operating System (Process Synchronization - Part 6)",
    "testLabel": "DPP 18",
    "testType": "DPP",
    "bracket": "Process Synchronization - Part 6",
    "subject": "os",
    "series": "cse-dpp-2027",
    "date": "Nov 03, 2026",
    "duration": "15 Min",
    "totalMarks": 6,
    "topicsCovered": "Process Synchronization (Practice Set 6)",
    "questions": [
        {
            "marks": 2,
            "neg": 0,
            "type": "MSQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>A counting semaphore $\\verb|S|$ is initialized to $3.$<br/><br/>Five identical processes $\\text{P1}-\\text{P5}$ execute the following code concurrently:</p><pre class=\"prettyprint linenums lang-c_cpp\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"4\">wait(S); /* critical section */ signal(S);</pre><p>Assume no process terminates inside the critical section.<br/><br/>Which of the following statements is/are correct?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">At most $3$ processes can be in the critical section at any time<br/></span>",
                "<span style=\"display: inline;\">Deadlock is possible<br/></span>",
                "<span style=\"display: inline;\">Starvation is possible if semaphore scheduling is unfair<br/></span>",
                "<span style=\"display: inline;\">Exactly $3$ processes will always be in the critical section</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"505749\"></a><div itemprop=\"text\"><p>The semaphore $\\verb|S|$ is initialized to $3$ , so at most $3 ~\\verb|wait(S)|$ operations can succeed simultaneously. Hence, at most $3$ processes can be in the critical section at any time.<br/>Option <strong>A is correct.</strong></p><p>Deadlock is not possible because every process that enters the critical section eventually executes $\\verb|signal(S)|$, and there is no circular wait.<br/>Option <strong>B is false.</strong></p><p>Starvation is possible if the semaphore implementation uses unfair scheduling. A process may remain waiting indefinitely while others repeatedly enter the critical section.<br/>Option<strong> C is correct.</strong></p><p>It is not guaranteed that exactly 3 processes will always be in the critical section, since fewer than $3$ may be executing or ready at some times.<br/>Option <strong>D is false.</strong></p><p><strong>Correct options: A, C</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/505748/go-classes-dpp-os-synchronization\" target=\"_blank\">GATE Overflow #505748</a></small></div>"
        },
        {
            "marks": 2,
            "neg": 0,
            "type": "MSQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Two processes $\\text{P1}$ and $\\text{P2}$ share two semaphores $\\verb|S|$ and $\\verb|T|$, both initialized to $1$.<br/><br/>The code executed by the processes is:<br/><br/>$\\textbf{P1} : $</p><pre class=\"prettyprint linenums lang-c_cpp\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"4\">wait(S); wait(T); /* critical section */ signal(T); signal(S);</pre><p><br/>$\\textbf{P2} : $</p><pre class=\"prettyprint linenums lang-c_cpp\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"4\">wait(T); wait(S); /* critical section */ signal(S); signal(T);</pre><p><br/>Which of the following statements is/are correct?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">Mutual exclusion is guaranteed<br/></span>",
                "<span style=\"display: inline;\">Deadlock is possible<br/></span>",
                "<span style=\"display: inline;\">Starvation is possible<br/></span>",
                "<span style=\"display: inline;\">Both processes can be in the critical section at the same time</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"505747\"></a><div itemprop=\"text\"><p>Mutual exclusion is guaranteed because both processes must successfully execute $\\verb|wait(S)|$ and $\\verb|wait(T)|$ before entering the critical section. Since $\\verb|S|$ and $\\verb|T|$ are binary semaphores, only one process can hold each at a time.<br/>So option <strong>A is correct.</strong></p><p>Deadlock is possible because $\\text{P1}$ may acquire $\\verb|S|$ and wait for $\\verb|T|$, while simultaneously $\\text{P2}$ acquires $\\verb|T|$ and waits for $\\verb|S|$. This circular wait leads to deadlock.<br/>So option <strong>B is correct.</strong></p><p>Starvation is not inherent in this code. If deadlock does not occur, each process eventually releases the semaphores. Starvation is not guaranteed by the structure itself.<br/>So option <strong>C is false.</strong></p><p>Both processes cannot be in the critical section at the same time because they must acquire both semaphores before entering.<br/>So option <strong>D is false.</strong></p><p><strong>Correct options: A, B</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/505746/go-classes-dpp-os-synchronization\" target=\"_blank\">GATE Overflow #505746</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\">The following two functions, $\\mathrm{G1}$ and $\\mathrm{G2}$, that share a variable $\\mathrm{Y}$ with an initial value of $10$, execute concurrently.<br/> <br/> $$<br/> \\begin{array}{lccl}<br/> \\mathrm{G} 1() &amp; &amp; &amp; \\mathrm{G} 2() \\\\<br/> \\mathrm{Y}=\\mathrm{Y}+4 ;(1) &amp; &amp; &amp; \\mathrm{Q}=\\mathrm{Y}+5 ;(3) \\\\<br/> \\mathrm{P}=\\mathrm{Y} / 2 ;(2) &amp; &amp; &amp; \\mathrm{Y}=\\mathrm{Q}-1 ;(4) \\\\<br/> \\} &amp; &amp; &amp; \\}<br/> \\end{array}<br/> $$<br/> <br/> The number of distinct values that $\\mathrm{Y}$ can possibly take after the execution is $\\_\\_\\_\\_$.</div></span>",
            "image": "",
            "options": [],
            "answer": "14",
            "solution": "<div class=\"solution-content\"><a name=\"504513\"></a><div itemprop=\"text\">Final possible values of $\\mathrm{Y}$ are $: 14, 18$</div><br><br><small>Source: <a href=\"https://gateoverflow.in/504512/go-classes-dpp-os-synchronization\" target=\"_blank\">GATE Overflow #504512</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\">The following two functions, $\\mathrm{F1}$ and $\\mathrm{F2}$ , that share a variable $\\mathrm{X}$ with an initial value of $5$, execute concurrently.<br/> <br/> $$<br/> \\begin{array}{lccl}<br/> \\mathrm{F} 1() &amp; &amp; &amp; \\mathrm{F} 2() \\\\<br/> \\mathrm{A}=\\mathrm{X}+3 ; &amp; &amp; &amp; \\mathrm{E}=3 * \\mathrm{X} \\\\<br/> \\mathrm{X}=\\mathrm{A}-1 ; &amp; &amp; &amp; \\mathrm{X}=\\mathrm{E}+2 \\\\<br/> \\} &amp; &amp; &amp; \\}<br/> \\end{array}<br/> $$<br/> <br/> The number of distinct values that $\\mathrm{X}$ can possibly take after the execution is $\\_\\_\\_\\_$.</div></span>",
            "image": "",
            "options": [],
            "answer": "1",
            "solution": "<div class=\"solution-content\"><a name=\"504511\"></a><div itemprop=\"text\">Case$-1:$ F1 executes before F2<br/> <br/> Final value of $X$ will be $23$<br/> <br/> Case$-2:$ F2 executes before F1<br/> <br/> Final value of $X$ will be $19$<br/> <br/> Interleaving execution $\\rightarrow$ case $-1:$ F1 overwrites the value written by F2<br/> <br/> Final value of $X$ will be $7$ in this case<br/> <br/> Interleaving execution $\\rightarrow$ case $-2:$ F2 overwrites the value written by F1<br/> <br/> Final value of $X$ wil be 17 in this case<br/> <br/> The possible values of $X$ are $\\{7,17,19,23\\}$</div><br><br><small>Source: <a href=\"https://gateoverflow.in/504510/go-classes-dpp-os-synchronization\" target=\"_blank\">GATE Overflow #504510</a></small></div>"
        }
    ]
});

registerTest({
    "name": "DPP 19 - Operating System (Deadlocks - Part 1)",
    "testLabel": "DPP 19",
    "testType": "DPP",
    "bracket": "Deadlocks - Part 1",
    "subject": "os",
    "series": "cse-dpp-2027",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 11,
    "topicsCovered": "Deadlocks (Practice Set 1)",
    "questions": [
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"19\" data-start=\"0\">Six students share $3$ knives and $3$ forks.</p><p data-end=\"124\" data-start=\"47\">To eat, every student always performs the following operations in this order:</p><p data-end=\"274\" data-start=\"205\">A student holding a knife waits if a fork is temporarily unavailable.</p><p data-end=\"315\" data-start=\"276\">Can the six students become deadlocked?</p><p><strong>Given Details:</strong></p><ul><li>Acquire one knife.</li><li>Acquire one fork.</li><li>Eat.</li><li>Release both resources.</li></ul></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">Yes. Three students may each acquire one knife and then all wait forever for forks.</span>",
                "<span style=\"display: inline;\">Yes. Six processes competing for only three instances of each resource necessarily cause deadlock.</span>",
                "<span style=\"display: inline;\">No. With equal numbers of knives and forks and a fixed knife-before-fork acquisition order, acquisition of all knives still leaves enough forks for the knife holders to proceed, preventing a circular wait.</span>",
                "<span style=\"display: inline;\">No. Deadlock is impossible because knives and forks are preemptible resources.</span>"
            ],
            "answer": "C",
            "solution": "<div class=\"solution-content\"><a name=\"546428\"></a><div itemprop=\"text\"><p data-end=\"892\" data-start=\"804\">At most $3$ students can hold knives at the same time because there are only $3$ knives.</p><p data-end=\"936\" data-start=\"894\">Suppose all $3$ knives have been acquired.</p><p data-end=\"1016\" data-start=\"938\">Those $3$ students are now the only students who can attempt to acquire forks.</p><p data-end=\"1066\" data-start=\"1018\">But all $3$ forks are still available initially.</p><p data-end=\"1127\" data-start=\"1068\">A student cannot hold a fork without first holding a knife.</p><p data-end=\"1262\" data-start=\"1129\">Therefore, it is impossible for all knife holders to be waiting for forks while the forks are held by some different set of students.</p><p data-end=\"1347\" data-start=\"1264\">At least one knife holder can acquire a fork, eat, and then release both resources.</p><p data-end=\"1396\" data-start=\"1349\">This allows another waiting student to proceed.</p><p data-end=\"1453\" data-start=\"1398\">Also, all students acquire resources in the same order:</p><p data-end=\"1497\" data-start=\"1455\">$\\text{knife} \\rightarrow \\text{fork}$</p><p data-end=\"1530\" data-start=\"1499\">so a circular wait cannot form.</p><p data-end=\"1585\" data-start=\"1532\">Therefore, the six students cannot become deadlocked.<br/> </p><p data-end=\"1609\" data-start=\"1587\"><strong>Answer : C</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/546427/go-classes-dpp-gate-cs-operating-system-resource-ordering-deadlock\" target=\"_blank\">GATE Overflow #546427</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"4104\" data-start=\"4004\">In a system, the sizes of most programs are <strong data-end=\"4103\" data-start=\"4048\">less than or equal to half of the current page size</strong>.</p><p data-end=\"4197\" data-start=\"4106\">The system is short of physical memory and is already operating near its performance limit.</p><p data-end=\"4262\" data-start=\"4199\">Suppose the <strong data-end=\"4243\" data-start=\"4211\">page size is reduced to half</strong> its present value.</p><p data-end=\"4293\" data-start=\"4264\">Which outcome is most likely?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">Memory-management overhead decreases because pages become smaller.<br/></span>",
                "<span style=\"display: inline;\">Page replacement performance deteriorates because there is less spare space inside each page.<br/></span>",
                "<span style=\"display: inline;\">Wasted space inside allocated pages decreases, alleviating the shortage of physical memory.<br/></span>",
                "<span style=\"display: inline;\">The number of page faults necessarily increases, reducing system performance.</span>"
            ],
            "answer": "C",
            "solution": "<div class=\"solution-content\"><a name=\"546424\"></a><div itemprop=\"text\"><p data-end=\"25\" data-start=\"0\">The crucial condition is:</p><p data-end=\"86\" data-start=\"27\">Most programs occupy no more than half of one current page.</p><p data-end=\"134\" data-start=\"88\">Suppose the current page size is $\\text{P}$.</p><p data-end=\"232\" data-start=\"136\">A program of approximately $\\text{P/2}$ still consumes one complete page of size $\\text{P}$.</p><p data-end=\"294\" data-start=\"234\">Therefore, roughly half of the allocated page may be unused.</p><p data-end=\"331\" data-start=\"296\">This is <strong data-end=\"330\" data-start=\"304\">internal fragmentation</strong>.</p><p data-end=\"358\" data-start=\"333\">If the page size becomes: $\\text{P/2}$</p><p data-end=\"443\" data-start=\"376\">the same program can fit much more closely into its allocated page.</p><p data-end=\"486\" data-start=\"445\">So the amount of wasted memory decreases.</p><p data-end=\"521\" data-start=\"488\"><strong data-end=\"521\" data-start=\"488\">Why A is false</strong></p><p data-end=\"584\" data-start=\"523\">Smaller pages mean <strong data-end=\"556\" data-start=\"542\">more pages</strong> for the same address space.</p><p data-end=\"671\" data-start=\"586\">This usually means more page-table entries and greater management overhead, not less.</p><p data-end=\"707\" data-start=\"673\"><strong data-end=\"707\" data-start=\"673\">Why B is false</strong></p><p data-end=\"783\" data-start=\"709\">The unused portion of a page is not working space required by the program.</p><p data-end=\"862\" data-start=\"785\">Reducing this internal waste does not inherently make page replacement worse.</p><p data-end=\"898\" data-start=\"864\"><strong data-end=\"898\" data-start=\"864\">Why D is false</strong></p><p data-end=\"990\" data-start=\"900\">Smaller pages do not imply that the number of page faults must increase in this situation.</p><p data-end=\"1154\" data-start=\"992\">Since physical memory is scarce and much of it is being lost to internal fragmentation, reducing that waste can allow more useful program data to remain resident.</p><p data-end=\"1189\" data-start=\"1156\"><br/><strong>Answer : C</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/546422/go-classes-dpp-gate-cs-operating-system-page-size-fragmentation\" target=\"_blank\">GATE Overflow #546422</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"146\" data-start=\"0\">Consider the resource allocation graph below consisting of four tasks $(\\text{T1}$, $\\text{T2}$, $\\text{T3}$, and $\\text{T4})$ and three resources $(\\text{R1}$, $\\text{R2}$, and $\\text{R3})$. $\\text{R1}$ has two instances while the other two resources have only one instance each.</p><p style=\"text-align:center\"><img alt=\"\" height=\"243\" src=\"https://cdn.mathpix.com/snip/images/lFp_ciumX2LHd8GgLROgXKwfrHf0k9w3jba6bGDI8fE.original.fullsize.png\" width=\"306\"/></p><p data-end=\"659\" data-start=\"572\">An arrow from a task to a resource denotes the fact that the task requests one instance of the resource, while an arrow from a resource to a task denotes the fact that the task holds an instance of the resource. Assume that resources cannot be preempted and tasks do not voluntary release resources before terminating.</p><p data-end=\"659\" data-start=\"572\">The initial system is deadlocked.</p><p data-end=\"752\" data-start=\"696\">Now <strong data-end=\"742\" data-start=\"700\">one additional instance of $\\text{R2}$</strong> is added.</p><p data-end=\"788\" data-start=\"754\">Which of the following is correct?</p></div></span>",
            "image": "https://cdn.mathpix.com/snip/images/lFp_ciumX2LHd8GgLROgXKwfrHf0k9w3jba6bGDI8fE.original.fullsize.png",
            "options": [
                "<span style=\"display: inline;\">The system remains deadlocked.<br/></span>",
                "<span style=\"display: inline;\">The system can complete in the order<br/></span>",
                "<span style=\"display: inline;\">$\\text{T3} \\rightarrow \\text{T1} \\rightarrow \\text{T4} \\rightarrow \\text{T2}$<br/>The only possible completion order is<br/></span>",
                "<span style=\"display: inline;\">$\\text{T2} \\rightarrow \\text{T4} \\rightarrow \\text{T3} \\rightarrow \\text{T1}$<br/>Adding $\\text{R2}$ cannot affect a cycle involving $\\text{R1}$.</span>"
            ],
            "answer": "B",
            "solution": "<div class=\"solution-content\"><a name=\"546110\"></a><div itemprop=\"text\"><p data-end=\"62\" data-start=\"0\">Initially,</p><ul data-end=\"342\" data-start=\"155\"><li data-end=\"226\" data-section-id=\"cvgvd8\" data-start=\"155\">both instances of $\\text{R1}$ are held by $\\text{T2}$ and $\\text{T3}$</li><li data-end=\"284\" data-section-id=\"1wn064k\" data-start=\"227\">the only instance of $\\text{R2}$ is held by $\\text{T1}$</li><li data-end=\"342\" data-section-id=\"1lz4pcw\" data-start=\"285\">the only instance of $\\text{R3}$ is held by $\\text{T4}$</li></ul><p data-end=\"441\" data-start=\"344\">After adding one more instance of $\\text{R2}$, there is now <strong data-end=\"440\" data-start=\"404\">one free instance of $\\text{R2}$</strong>.</p><p data-end=\"482\" data-start=\"443\">Give this free instance to $\\text{T3}$.</p><p data-end=\"616\" data-start=\"484\">$\\text{T3}$ was waiting only for $\\text{R2}$, so it can now finish and release its resources, including one instance of $\\text{R1}$.</p><p data-end=\"705\" data-start=\"618\">Now $\\text{T1}$ can obtain the released $\\text{R1}$, finish, and release its resources.</p><p data-end=\"781\" data-start=\"707\">Next, $\\text{T4}$ can obtain $\\text{R2}$, finish, and release $\\text{R3}$.</p><p data-end=\"851\" data-start=\"783\">Finally, $\\text{T2}$ can obtain the released $\\text{R3}$ and finish.</p><p data-end=\"891\" data-start=\"853\">Therefore, a valid completion order is</p><p data-end=\"970\" data-start=\"893\">$\\text{T3} \\rightarrow \\text{T1} \\rightarrow \\text{T4} \\rightarrow \\text{T2}$</p><p data-end=\"1038\" data-start=\"972\">So the additional instance of $\\text{R2}$ <strong data-end=\"1037\" data-start=\"1014\">breaks the deadlock</strong>.</p><p data-end=\"1038\" data-start=\"972\"><br/><strong>Answer : B</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/546109/go-classes-dpp-gate-cs-operating-system-deadlock-resource-graph\" target=\"_blank\">GATE Overflow #546109</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"90\" data-start=\"0\">An underwater vehicle takes <strong data-end=\"59\" data-start=\"28\">one photograph every minute</strong> during a $\\textbf{1}$<strong data-end=\"89\" data-start=\"69\">-hour mission</strong>.</p><p data-end=\"145\" data-start=\"92\">Each photograph is stored as a separate file of size $5$ kB</p><p data-end=\"242\" data-start=\"155\">After the mission, all photographs are copied to a computer whose FAT$32$ partition uses $8$ kB clusters</p><p data-end=\"290\" data-start=\"261\">Assume $1$ kB = $1024$ bytes.</p><p data-end=\"360\" data-start=\"292\">How much disk space is required on the computer for all photographs?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$240$ kB<br/></span>",
                "<span style=\"display: inline;\">$300$ kB<br/></span>",
                "<span style=\"display: inline;\">$360$ kB<br/></span>",
                "<span style=\"display: inline;\">$480$ kB</span>"
            ],
            "answer": "D",
            "solution": "<div class=\"solution-content\"><a name=\"546062\"></a><div itemprop=\"text\"><p data-end=\"38\" data-start=\"0\">A $1$-hour mission lasts $60$ minutes.</p><p data-end=\"83\" data-start=\"40\">Since one photograph is taken every minute:</p><p data-end=\"113\" data-start=\"85\">Number of photographs = $60$</p><p data-end=\"185\" data-start=\"115\">Each photograph has size $5$ kB, but the FAT$32$ cluster size is $8$ kB.</p><p data-end=\"289\" data-start=\"187\">Since each photograph is stored as a separate file, each $5$ kB file occupies one full $8$ kB cluster.</p><p data-end=\"323\" data-start=\"291\">So total disk space required is:</p><p data-end=\"347\" data-start=\"325\">$60 \\times 8 = 480$ kB</p><p data-end=\"400\" data-is-last-node=\"\" data-is-only-node=\"\" data-start=\"349\">Therefore, the required disk space is $480$ kB.</p><p data-end=\"400\" data-is-last-node=\"\" data-is-only-node=\"\" data-start=\"349\"><strong>Answer : D</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/546061/go-classes-dpp-gate-cs-operating-system-cluster-storage-overhead\" target=\"_blank\">GATE Overflow #546061</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider a UNIX file system with:</p><p>How many <strong>total bytes of disk space</strong>, including the inode, indirect blocks, and file data, are required to store a file containing exactly $4$ GiB of user data?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\"><p>Disk block size = $\\text{4096 bytes}$</p></span>",
                "<span style=\"display: inline;\"><p>All block pointers = $\\text{32 bits}$</p></span>",
                "<span style=\"display: inline;\"><p>Inode has $12$ direct pointers</p></span>",
                "<span style=\"display: inline;\"><p>$1$ single-indirect pointer</p></span>",
                "<span style=\"display: inline;\"><p>$1$ double-indirect pointer</p></span>",
                "<span style=\"display: inline;\"><p>Inode size = $\\text{256 bytes}$</p></span>",
                "<span style=\"display: inline;\"><p>Every indirect block occupies one complete disk block</p></span>"
            ],
            "answer": "4299165952",
            "solution": "<div class=\"solution-content\"><a name=\"545862\"></a><div itemprop=\"text\"><p data-end=\"24\" data-start=\"0\">The user data itself is:</p><p data-end=\"57\" data-start=\"26\">$\\mathrm{4 GiB = 2^{32} bytes}$</p><p data-end=\"79\" data-start=\"59\">Each block contains:</p><p data-end=\"111\" data-start=\"81\">$\\mathrm{4096 = 2^{12} bytes}$</p><p data-end=\"142\" data-start=\"113\">Therefore, the file requires:</p><p data-end=\"179\" data-start=\"144\">$\\mathrm{2^{32} / 2^{12} = 2^{20}}=1,048,576$ data blocks</p><p data-end=\"238\" data-section-id=\"8lpekq\" data-start=\"207\"><br/><strong>Pointers per indirect block</strong></p><p data-end=\"256\" data-start=\"240\">Each pointer is $:\\text{4 bytes}$</p><p data-end=\"281\" data-start=\"278\">So, $\\text{4096 / 4 = 1024 pointers}$</p><p data-end=\"348\" data-section-id=\"1ajk4jf\" data-start=\"320\"><br/><strong>Indirect metadata blocks</strong></p><p data-end=\"397\" data-start=\"350\">The first $12$ data blocks use direct pointers.</p><p data-end=\"429\" data-start=\"399\">The remaining data blocks are:</p><p data-end=\"456\" data-start=\"431\">$1,048,576 - 12=1,048,564$</p><p data-end=\"519\" data-start=\"472\">One indirect block can contain $1024$ pointers.</p><p data-end=\"540\" data-start=\"521\">Therefore, we need $\\text{1024 indirect blocks}$ to contain pointers to the remaining data blocks.</p><p data-end=\"650\" data-start=\"626\">We additionally require :</p><p data-end=\"691\" data-start=\"652\">$\\text{1 double-indirect root block}$</p><p data-end=\"728\" data-start=\"693\">Therefore, metadata pointer blocks:</p><p data-end=\"763\" data-start=\"730\">$\\text{1024 + 1 = 1025 blocks}$</p><p data-end=\"779\" data-start=\"765\">Their size is:</p><p data-end=\"803\" data-start=\"781\">$1025 × 4096=4,198,400$ bytes</p><p data-end=\"844\" data-start=\"825\">The inode requires $: \\text{256 bytes}$</p><p data-end=\"894\" data-start=\"868\">Thus, total disk space is:</p><p data-end=\"938\" data-start=\"896\">$4,294,967,296 + 4,198,400 + 256$</p><p data-end=\"977\" data-is-last-node=\"\" data-is-only-node=\"\" data-start=\"940\">$=\\boxed{4,299,165,952\\text{ bytes}}$</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/545861/go-classes-dpp-gate-cs-operating-system-metadata-storage-overhead\" target=\"_blank\">GATE Overflow #545861</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"52\" data-start=\"0\">A system contains three distinct critical resources: $R_1,R_2,R_3$ shared by four processes.</p><p data-end=\"128\" data-start=\"96\">Their resource requirements are:</p><p data-end=\"351\" data-start=\"262\">If a deadlock occurs, what is the <strong data-end=\"350\" data-start=\"296\">minimum number of processes that can be deadlocked</strong>?</p><p><strong>Given Details:</strong></p><ul><li>$P_1$ requires $R_1$ and $R_2$.</li><li>$P_2$ requires $R_2$ and $R_3$.</li><li>$P_3$ requires $R_1$ and $R_3$.</li><li>$P_4$ requires only $R_2$.</li></ul></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$1$</span>",
                "<span style=\"display: inline;\">$2$</span>",
                "<span style=\"display: inline;\">$3$</span>",
                "<span style=\"display: inline;\">$4$</span>"
            ],
            "answer": "B",
            "solution": "<div class=\"solution-content\"><a name=\"545223\"></a><div itemprop=\"text\"><p data-end=\"9369\" data-start=\"9304\">A single process cannot form a circular resource dependency here.</p><p data-end=\"9416\" data-start=\"9371\">Now check whether two processes can deadlock.</p><p data-end=\"9460\" data-start=\"9418\">$P_1$ and $P_2$ have only $R_2$ in common.</p><p data-end=\"9525\" data-start=\"9462\">$P_1$ does not require $R_3$, and $P_2$ does not require $R_1$.</p><p data-end=\"9618\" data-start=\"9527\">So they cannot hold different resources required by each other to form a two-process cycle.</p><p data-end=\"9630\" data-start=\"9620\">Similarly:</p><ul data-end=\"9703\" data-start=\"9632\"><li data-end=\"9667\" data-section-id=\"1oq33ii\" data-start=\"9632\">$P_1$ and $P_3$ share only $R_1$.</li><li data-end=\"9703\" data-section-id=\"y74pd7\" data-start=\"9668\">$P_2$ and $P_3$ share only $R_3$.</li></ul><p data-end=\"9743\" data-start=\"9705\">No pair can construct a circular wait.</p><p data-end=\"9911\" data-start=\"9745\">$P_4$ requires only $R_2$. If it obtains $R_2$, it has no second resource to wait for. If it waits for $R_2$, it does not contribute another held resource to a cycle.</p><p data-end=\"9946\" data-start=\"9913\">But three processes can deadlock:</p><ul data-end=\"10070\" data-start=\"9948\"><li data-end=\"9988\" data-section-id=\"1bf3ldb\" data-start=\"9948\">$P_1$ holds $R_1$ and waits for $R_2$.</li><li data-end=\"10029\" data-section-id=\"9t3bu6\" data-start=\"9989\">$P_2$ holds $R_2$ and waits for $R_3$.</li><li data-end=\"10070\" data-section-id=\"mz3h7w\" data-start=\"10030\">$P_3$ holds $R_3$ and waits for $R_1$.</li></ul><p data-end=\"10086\" data-start=\"10072\">This produces:</p><p data-end=\"10139\" data-start=\"10088\">$P_1\\rightarrow P_2\\rightarrow P_3\\rightarrow P_1$.</p><p data-end=\"10173\" data-start=\"10141\">Therefore the minimum number is $\\boxed{3}$</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/545222/go-classes-dpp-gate-cs-operating-system-minimum-deadlocked-processes\" target=\"_blank\">GATE Overflow #545222</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"115\" data-start=\"0\">In a multiprocessor system with preemptive scheduling, three processes $P_1,P_2,P_3$ share resources $R_1,R_2,R_3$.</p><p data-end=\"366\" data-start=\"339\">Which statement is correct?</p><p><strong>Given Details:</strong></p><ul><li>$P_1$ and $P_2$ compete for $R_1$.</li><li>$P_2$ and $P_3$ compete for $R_2$ and $R_3$.</li><li>$R_1$ and $R_3$ are <strong data-end=\"238\" data-start=\"223\">preemptible</strong>.</li><li>$R_2$ is <strong data-end=\"270\" data-start=\"251\">non-preemptible</strong>.</li><li>All processes use mutual exclusion for their critical sections.</li></ul></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">Deadlock cannot occur among the three processes.</span>",
                "<span style=\"display: inline;\">Deadlock can occur between $P_1$ and $P_2$.</span>",
                "<span style=\"display: inline;\">Deadlock can occur between $P_2$ and $P_3$.</span>",
                "<span style=\"display: inline;\">Deadlock can occur between $P_1$ and $P_3$.</span>",
                "<span style=\"display: inline;\">A circular wait involving all three processes can occur.</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"545220\"></a><div itemprop=\"text\"><p data-end=\"7535\" data-start=\"7414\">For deadlock to persist, the <strong data-end=\"7470\" data-start=\"7443\">no-preemption condition</strong> must hold for the resources involved in the circular dependency.</p><p data-end=\"7556\" data-section-id=\"1dbg9qm\" data-start=\"7537\">$P_1$ and $P_2$</p><p data-end=\"7586\" data-start=\"7558\">They compete only for $R_1$.</p><p data-end=\"7613\" data-start=\"7588\">But $R_1$ is preemptible.</p><p data-end=\"7683\" data-start=\"7615\">Therefore a permanent resource deadlock between them cannot persist.</p><p data-end=\"7699\" data-start=\"7685\">So <strong>B is false.</strong><br/> </p><p data-end=\"7720\" data-section-id=\"ij3w3w\" data-start=\"7701\">$P_2$ and $P_3$</p><p data-end=\"7755\" data-start=\"7722\">They compete for $R_2$ and $R_3$.</p><p data-end=\"7813\" data-start=\"7757\">Although $R_2$ is non-preemptible, $R_3$ is preemptible.</p><p data-end=\"7823\" data-start=\"7815\">Suppose:</p><ul data-end=\"7906\" data-start=\"7825\"><li data-end=\"7865\" data-section-id=\"9t3bu6\" data-start=\"7825\">$P_2$ holds $R_2$ and waits for $R_3$.</li><li data-end=\"7906\" data-section-id=\"mz3i0f\" data-start=\"7866\">$P_3$ holds $R_3$ and waits for $R_2$.</li></ul><p data-end=\"7965\" data-start=\"7908\">The system can preempt $R_3$, breaking the waiting cycle.</p><p data-end=\"7981\" data-start=\"7967\">So <strong>C is false.</strong><br/> </p><p data-end=\"8002\" data-section-id=\"1dbg9tb\" data-start=\"7983\">$P_1$ and $P_3$</p><p data-end=\"8048\" data-start=\"8004\">They do not compete for any common resource.</p><p data-end=\"8064\" data-start=\"8050\">So <strong>D is false.</strong><br/> </p><p data-end=\"8180\" data-start=\"8066\">A three-process cycle also cannot be constructed because $P_1$ and $P_3$ have no resource dependency between them.</p><p data-end=\"8192\" data-start=\"8182\">$\\boxed{\\therefore \\text{Deadlock cannot occur among the three}}$</p><p data-end=\"8268\" data-start=\"8250\"><br/><strong>Answer : A</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/545218/go-classes-dpp-gate-cs-operating-system-preemptible-resource-deadlock\" target=\"_blank\">GATE Overflow #545218</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"163\" data-start=\"17\">In the wait-for graph for transactions $A$ through $G$ shown below, which option lists <strong data-end=\"162\" data-start=\"104\">all transactions that are in a permanent waiting state</strong>?</p><p data-end=\"305\" data-start=\"165\">Here, an edge $X \\to Y$ in the wait-for graph means that transaction $X$ is waiting for a resource locked by transaction $Y$ to be unlocked.</p><p data-end=\"351\" data-start=\"307\"><strong data-end=\"351\" data-start=\"307\">Wait-for graph for transactions $A$–$G$:</strong></p><p style=\"text-align:center\"><img alt=\"\" height=\"133\" src=\"https://cdn.mathpix.com/snip/images/fjEcEHTIn89LZxnw0-fOr3MDRaQCcTXK2WF2EMewfNo.original.fullsize.png\" width=\"373\"/></p><p data-end=\"496\" data-start=\"462\">Which of the following is correct?</p></div></span>",
            "image": "https://cdn.mathpix.com/snip/images/fjEcEHTIn89LZxnw0-fOr3MDRaQCcTXK2WF2EMewfNo.original.fullsize.png",
            "options": [
                "<span style=\"display: inline;\">$A,\\ B,\\ C,\\ D$<br/></span>",
                "<span style=\"display: inline;\">$B,\\ C,\\ D$<br/></span>",
                "<span style=\"display: inline;\">$B,\\ C,\\ D,\\ F$<br/></span>",
                "<span style=\"display: inline;\">$C,\\ D,\\ E,\\ F,\\ G$</span>"
            ],
            "answer": "C",
            "solution": "<div class=\"solution-content\"><a name=\"545216\"></a><div itemprop=\"text\"><p data-end=\"5658\" data-start=\"5635\">First identify a cycle:</p><p data-end=\"5676\" data-start=\"5660\">$B\\rightarrow D$</p><p data-end=\"5694\" data-start=\"5678\">$D\\rightarrow C$</p><p data-end=\"5713\" data-start=\"5696\">$C\\rightarrow B$</p><p data-end=\"5725\" data-start=\"5715\">So, $\\boxed{B\\rightarrow D\\rightarrow C\\rightarrow B}$ is a wait-for cycle.</p><p data-end=\"5807\" data-start=\"5801\">Hence, $B,C,D$ are deadlocked.</p><p data-end=\"5851\" data-start=\"5835\">Now examine $F$.</p><p data-end=\"5886\" data-start=\"5853\">$F$ waits for $D$ as well as $E$.</p><p data-end=\"5975\" data-start=\"5888\">Since $D$ is part of the deadlocked cycle, it will never release the required resource.</p><p data-end=\"6067\" data-start=\"5977\">Therefore $F$ also waits permanently, even though $F$ itself does not belong to the cycle.</p><p data-end=\"6103\" data-start=\"6069\">So the permanently waiting set is $\\boxed{{B,C,D,F}}$<br/> </p><p data-end=\"6127\" data-start=\"6105\"><strong>Answer : C</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/545215/go-classes-dpp-gate-cs-operating-system-wait-for-graph\" target=\"_blank\">GATE Overflow #545215</a></small></div>"
        },
        {
            "marks": 2,
            "neg": 0,
            "type": "MSQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"40\" data-start=\"0\">Four processes have the following state:</p><section data-testid=\"conversation-turn-8\" data-turn=\"assistant\" data-turn-id=\"request-WEB:fa02ce3a-1cf7-4c29-8bcc-6a4ed8bdd45b-3\" data-turn-id-container=\"request-WEB:fa02ce3a-1cf7-4c29-8bcc-6a4ed8bdd45b-3\" dir=\"auto\"><p data-end=\"471\" data-is-last-node=\"\" data-is-only-node=\"\" data-start=\"112\">$$\\begin{array}{c@{\\qquad\\qquad}c}<br/>\\textit{Current Allocation} &amp; \\textit{Current Request} \\\\ <br/>\\begin{array}{|c|cc|}<br/>\\hline<br/>\\text{Process} &amp; R_1 &amp; R_2 \\\\<br/>\\hline<br/>P_1 &amp; 1 &amp; 3 \\\\<br/>P_2 &amp; 4 &amp; 1 \\\\<br/>P_3 &amp; 1 &amp; 2 \\\\<br/>P_4 &amp; 2 &amp; 0 \\\\<br/>\\hline<br/>\\end{array}<br/>&amp;<br/>\\begin{array}{|c|cc|}<br/>\\hline<br/>\\text{Process} &amp; R_1 &amp; R_2 \\\\<br/>\\hline<br/>P_1 &amp; 1 &amp; 2 \\\\<br/>P_2 &amp; 4 &amp; 3 \\\\<br/>P_3 &amp; 1 &amp; 7 \\\\<br/>P_4 &amp; 5 &amp; 1 \\\\<br/>\\hline<br/>\\end{array}<br/>\\end{array}$$</p></section><p data-end=\"394\" data-start=\"345\">Consider the following three cases independently:</p><p data-end=\"513\" data-start=\"484\">Which statements are correct?</p><p><strong>Given Details:</strong></p><ul><li>Case I $:Available=(1,4)$</li><li>Case II $:Available=(2,3)$</li><li>Case III $:Available=(2,4)$</li></ul></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">Case I is deadlocked.</span>",
                "<span style=\"display: inline;\">Case II is deadlocked.</span>",
                "<span style=\"display: inline;\">Case III is deadlocked.</span>",
                "<span style=\"display: inline;\">In Case I, after all processes that can finish have finished, $P_2$ and $P_4$ remain deadlocked.</span>"
            ],
            "answer": [
                "A"
            ],
            "solution": "<div class=\"solution-content\"><a name=\"545214\"></a><div itemprop=\"text\"><p data-end=\"3657\" data-section-id=\"1urdjsd\" data-start=\"3628\"><strong>Case I</strong> $: Available=(1,4)$</p><p data-end=\"3706\" data-start=\"3659\">$P_1$ requests $(1,2)$, which can be satisfied.</p><p data-end=\"3769\" data-start=\"3708\">When $P_1$ completes, the effective available vector becomes:</p><p data-end=\"3790\" data-start=\"3771\">$(1,4)+(1,3)=(2,7)$</p><p data-end=\"3823\" data-start=\"3792\">Now $P_3$ can complete because $(1,7)\\leq(2,7)$.</p><p data-end=\"3880\" data-start=\"3844\">After $P_3$ releases its allocation:</p><p data-end=\"3902\" data-start=\"3882\">$(2,7)+(1,2)=(3,9)$.</p><p data-end=\"3931\" data-start=\"3904\">The remaining requests are:</p><p data-end=\"3944\" data-start=\"3933\">$P_2:(4,3)$</p><p data-end=\"3958\" data-start=\"3946\">$P_4:(5,1)$.</p><p data-end=\"4029\" data-start=\"3960\">Neither can be satisfied because only $3$ units of $R_1$ are available.</p><p data-end=\"4070\" data-start=\"4031\">Thus $P_2$ and $P_4$ remain deadlocked.</p><p data-end=\"4176\" data-start=\"4072\">So <strong data-end=\"4095\" data-start=\"4075\">A and D are true</strong>. <br/> </p><p data-end=\"4213\" data-section-id=\"1dc3g9s\" data-start=\"4183\"><strong>Case II</strong> $: Available=(2,3)$</p><p data-end=\"4238\" data-start=\"4215\">$P_1$ can finish first.</p><p data-end=\"4273\" data-start=\"4240\">After its allocation is released:</p><p data-end=\"4295\" data-start=\"4275\">$(2,3)+(1,3)=(3,6)$.</p><p data-end=\"4301\" data-start=\"4297\">Now, $P_2$ needs $(4,3)$</p><p data-end=\"4343\" data-start=\"4324\">$P_3$ needs $(1,7)$</p><p data-end=\"4365\" data-start=\"4345\">$P_4$ needs $(5,1)$.</p><p data-end=\"4385\" data-start=\"4367\">None can complete.</p><p data-end=\"4424\" data-start=\"4387\">Therefore Case II is also deadlocked.</p><p data-end=\"4481\" data-start=\"4426\">So <strong data-end=\"4442\" data-start=\"4429\">B is true</strong>.</p><p data-end=\"4519\" data-section-id=\"ybsk0e\" data-start=\"4488\"><br/><strong>Case III</strong> $: Available=(2,4)$</p><p data-end=\"4547\" data-start=\"4521\">A completion order exists:</p><p data-end=\"4600\" data-start=\"4549\">$P_1\\rightarrow P_3\\rightarrow P_2\\rightarrow P_4$.</p><p data-end=\"4736\" data-start=\"4602\">Therefore Case III is <strong data-end=\"4642\" data-start=\"4624\">not deadlocked</strong>. </p><p data-end=\"4756\" data-start=\"4738\">So <strong data-end=\"4755\" data-start=\"4741\">C is false</strong>.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/545213/go-classes-dpp-gate-cs-operating-system-deadlock-detection-trace\" target=\"_blank\">GATE Overflow #545213</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"1011\" data-start=\"894\">Suppose system $S_1$ uses a <strong data-end=\"944\" data-start=\"922\">deadlock avoidance</strong> method, whereas system $S_2$ uses a <strong data-end=\"1003\" data-start=\"981\">deadlock detection</strong> method.</p><p data-end=\"1047\" data-start=\"1013\">Consider the following statements:</p><p data-end=\"1420\" data-start=\"1396\">Which option is correct?</p><p><strong>Given Details:</strong></p><ul><li>$S_1$ restricts the order in which processes request resources, whereas $S_2$ does not.</li><li>$S_1$ requires information about the total resource requirements of processes, whereas $S_2$ does not.</li><li>$S_1$ will not grant a resource allocation that may lead the system toward deadlock, whereas $S_2$ may grant such an allocation.</li></ul></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">I and II only</span>",
                "<span style=\"display: inline;\">II and III only</span>",
                "<span style=\"display: inline;\">I and III only</span>",
                "<span style=\"display: inline;\">I, II and III</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"545208\"></a><div itemprop=\"text\"><p data-end=\"1587\" data-start=\"1562\"><strong data-end=\"1587\" data-start=\"1562\">Statement I is false.</strong></p><p data-end=\"1725\" data-start=\"1589\">Restricting processes to request resources in a predetermined order is a <strong data-end=\"1685\" data-start=\"1662\">deadlock prevention</strong> technique. </p><p data-end=\"1725\" data-start=\"1589\">It eliminates circular wait.</p><p data-end=\"1802\" data-start=\"1727\">Deadlock avoidance does not require such a fixed resource-request ordering.</p><p data-end=\"1834\" data-start=\"1809\"><br/><strong data-end=\"1834\" data-start=\"1809\">Statement II is true.</strong></p><p data-end=\"1961\" data-start=\"1836\">Avoidance algorithms such as Banker's Algorithm require advance information about each process's <strong data-end=\"1960\" data-start=\"1933\">maximum resource demand</strong>.</p><p data-end=\"2080\" data-start=\"1963\">Detection does not require maximum future claims. It works with current allocations and current outstanding requests.</p><p data-end=\"2113\" data-start=\"2087\"><br/><strong data-end=\"2113\" data-start=\"2087\">Statement III is true.</strong></p><p data-end=\"2231\" data-start=\"2115\">Avoidance checks an allocation before committing it. If the resulting state would be unsafe, the request is delayed.</p><p data-end=\"2363\" data-start=\"2233\">Detection takes the more permissive approach. It can allow allocations and later determine whether deadlock has actually occurred.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/545207/go-classes-dpp-gate-cs-operating-system-deadlock-avoidance-vs-detection\" target=\"_blank\">GATE Overflow #545207</a></small></div>"
        }
    ]
});

registerTest({
    "name": "DPP 20 - Operating System (Deadlocks - Part 2)",
    "testLabel": "DPP 20",
    "testType": "DPP",
    "bracket": "Deadlocks - Part 2",
    "subject": "os",
    "series": "cse-dpp-2027",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 14,
    "topicsCovered": "Deadlocks (Practice Set 2)",
    "questions": [
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"9127\" data-start=\"9109\">A system contains:</p><p data-end=\"9223\" data-start=\"9184\">It is managed using Banker's Algorithm.</p><p data-end=\"9240\" data-start=\"9225\">Maximum claims:</p><p data-end=\"9254\" data-start=\"9242\">$P_1:(0,12)$</p><p data-end=\"9268\" data-start=\"9256\">$P_2:(8,15)$</p><p data-end=\"9282\" data-start=\"9270\">$P_3:(8,20)$</p><p data-end=\"9308\" data-start=\"9284\">Current allocations are:</p><p data-end=\"9321\" data-start=\"9310\">$P_1:(0,4)$</p><p data-end=\"9334\" data-start=\"9323\">$P_2:(8,0)$</p><p data-end=\"9347\" data-start=\"9336\">$P_3:(0,8)$</p><p data-end=\"9383\" data-start=\"9349\">There are no outstanding requests.</p><p data-end=\"9389\" data-start=\"9385\">Let,</p><ul data-end=\"9584\" data-start=\"9391\"><li data-end=\"9488\" data-section-id=\"91nvzx\" data-start=\"9391\">$x_1$ be the maximum additional units of $S$ that $P_1$ can request and be granted immediately.</li><li data-end=\"9536\" data-section-id=\"19550j0\" data-start=\"9489\">$x_2$ be the corresponding maximum for $P_2$.</li><li data-end=\"9584\" data-section-id=\"10vb2h8\" data-start=\"9537\">$x_3$ be the corresponding maximum for $P_3$.</li></ul><p data-end=\"9610\" data-start=\"9586\">Which triple is correct?</p><p><strong>Given Details:</strong></p><ul><li>$12$ units of resource $R$</li><li>$24$ units of resource $S$</li></ul></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$(8,4,1)$</span>",
                "<span style=\"display: inline;\">$(8,5,1)$</span>",
                "<span style=\"display: inline;\">$(8,4,4)$</span>",
                "<span style=\"display: inline;\">$(8,8,1)$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"545028\"></a><div itemprop=\"text\"><p data-end=\"9758\" data-start=\"9733\">Current total allocation:</p><p data-end=\"9765\" data-start=\"9760\">$R=8$</p><p data-end=\"9778\" data-start=\"9767\">$S=4+8=12$.</p><p data-end=\"9790\" data-start=\"9780\">$\\therefore Available=(12-8,24-12)=(4,12)$.</p><p data-end=\"9854\" data-start=\"9830\">Initial remaining needs:</p><p data-end=\"9867\" data-start=\"9856\">$P_1:(0,8)$</p><p data-end=\"9881\" data-start=\"9869\">$P_2:(0,15)$</p><p data-end=\"9896\" data-start=\"9883\">$P_3:(8,12)$.</p><p data-end=\"9939\" data-section-id=\"1jkpn7q\" data-start=\"9903\"><br/>Part $1:$ Maximum request by $P_1$</p><p data-end=\"9981\" data-start=\"9941\">Suppose $P_1$ requests $x$ units of $S$.</p><p data-end=\"10010\" data-start=\"9983\">Its remaining need becomes: $(0,8-x)$.</p><p data-end=\"10042\" data-start=\"10024\">Available becomes: $(4,12-x)$.</p><p data-end=\"10076\" data-start=\"10057\">For every $x\\leq8$:</p><p data-end=\"10092\" data-start=\"10078\">$8-x\\leq12-x$.</p><p data-end=\"10145\" data-start=\"10094\">So $P_1$ itself can always be guaranteed to finish.</p><p data-end=\"10191\" data-start=\"10147\">Its maximum remaining claim is only $8$ units.</p><p data-end=\"10203\" data-start=\"10193\">$\\boxed{\\therefore x_1=8}$.</p><p data-end=\"10264\" data-section-id=\"am5j8m\" data-start=\"10228\"><br/>Part $2:$ Maximum request by $P_2$</p><p data-end=\"10306\" data-start=\"10266\">Suppose $P_2$ receives $x$ units of $S$.</p><p data-end=\"10326\" data-start=\"10308\">Available becomes: $(4,12-x)$.</p><p data-end=\"10368\" data-start=\"10341\">Its remaining need becomes: $(0,15-x)$.</p><p data-end=\"10435\" data-start=\"10383\">$P_2$ cannot be the first process to finish because $15-x&gt;12-x$ for every $x$.</p><p data-end=\"10568\" data-start=\"10466\">$P_3$ cannot finish first either because it still requires $8$ units of $R$, while only $4$ are available.</p><p data-end=\"10604\" data-start=\"10570\">Therefore $P_1$ must finish first.</p><p data-end=\"10626\" data-start=\"10606\">For $P_1$ to finish:</p><p data-end=\"10640\" data-start=\"10628\">$8\\leq12-x$.</p><p data-end=\"10647\" data-start=\"10642\">$\\Rightarrow x\\leq4$.</p><p data-end=\"10669\" data-start=\"10660\">At $x=4$:</p><p data-end=\"10697\" data-start=\"10671\">Available becomes $(4,8)$.</p><p data-end=\"10755\" data-start=\"10699\">$P_1$ can finish and release its current 4 units of $S$:</p><p data-end=\"10771\" data-start=\"10757\">$Work=(4,12)$</p><p data-end=\"10802\" data-start=\"10773\">Now $P_2$ has remaining need $(0,11)$, which can be met.</p><p data-end=\"10837\" data-start=\"10834\">So, $\\boxed{x_2=4}$.</p><p data-end=\"10898\" data-section-id=\"1pljkee\" data-start=\"10862\"><br/>Part $3:$ Maximum request by $P_3$</p><p data-end=\"10951\" data-start=\"10900\">Suppose $P_3$ receives $x$ additional units of $S$.</p><p data-end=\"10971\" data-start=\"10953\">Available becomes $(4,12-x)$.</p><p data-end=\"11061\" data-start=\"10986\">$P_3$ still cannot finish first because it needs 8 additional units of $R$.</p><p data-end=\"11094\" data-start=\"11063\">Again, $P_1$ must finish first.</p><p data-end=\"11110\" data-start=\"11096\">This requires:</p><p data-end=\"11123\" data-start=\"11112\">$8\\leq12-x$</p><p data-end=\"11128\" data-start=\"11125\">$\\Rightarrow x\\leq4$</p><p data-end=\"11162\" data-start=\"11141\">After $P_1$ finishes,</p><p data-end=\"11180\" data-start=\"11164\">$Work=(4,16-x)$.</p><p data-end=\"11264\" data-start=\"11182\">Before $P_3$ can complete, we need $P_2$ to finish and release its 8 units of $R$.</p><p data-end=\"11286\" data-start=\"11266\">For $P_2$ to finish:</p><p data-end=\"11301\" data-start=\"11288\">$15\\leq16-x$.</p><p data-end=\"11309\" data-start=\"11303\">$\\Rightarrow x\\leq1$.</p><p data-end=\"11349\" data-start=\"11322\">For $x=1$, a safe order is:</p><p data-end=\"11387\" data-start=\"11351\">$P_1\\rightarrow P_2\\rightarrow P_3$.</p><p data-end=\"11399\" data-start=\"11389\">$\\boxed{\\therefore x_3=1}$.</p><p data-end=\"11424\" data-start=\"11419\">Thus, $(x_1,x_2,x_3)=\\boxed{(8,4,1)}$<br/> </p><p data-end=\"11485\" data-start=\"11460\"><strong>Answer : A</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/545027/go-classes-dpp-gate-cs-operating-system-maximum-safe-request\" target=\"_blank\">GATE Overflow #545027</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"56\" data-start=\"0\">A system contains $4$ identical instances of a resource.</p><p data-end=\"138\" data-start=\"58\">Three processes have the following maximum requirements and current allocations:</p><p data-end=\"299\" data-start=\"140\">$$\\begin{array}{|c|c|c|}<br/>\\hline<br/>\\text{Process} &amp; \\text{Maximum Requirement} &amp; \\text{Currently Allocated} \\\\<br/>\\hline<br/>P_1 &amp; 4 &amp; 2 \\\\<br/>P_2 &amp; 3 &amp; 1 \\\\<br/>P_3 &amp; 1 &amp; 0 \\\\<br/>\\hline<br/>\\end{array}$$</p><p data-end=\"353\" data-start=\"301\">What is the result of applying the safety algorithm?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">No safe sequence exists; the system is unsafe.<br/></span>",
                "<span style=\"display: inline;\">Multiple safe sequences exist; the system is safe.<br/></span>",
                "<span style=\"display: inline;\">The unique safe sequence is $P_3, P_1, P_2$.<br/></span>",
                "<span style=\"display: inline;\">The unique safe sequence is $P_3, P_2, P_1$.</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"545019\"></a><div itemprop=\"text\"><p data-end=\"2993\" data-start=\"2967\">Total allocated resources:</p><p data-end=\"3005\" data-start=\"2995\">$2+1+0=3$</p><p data-end=\"3017\" data-start=\"3007\">$\\therefore Available=4-3=1$<br/> </p><p data-end=\"3059\" data-start=\"3039\">Remaining needs are:</p><p data-end=\"3078\" data-start=\"3061\">$Need(P_1)=4-2=2$</p><p data-end=\"3097\" data-start=\"3080\">$Need(P_2)=3-1=2$</p><p data-end=\"3117\" data-start=\"3099\">$Need(P_3)=1-0=1$.</p><p data-end=\"3150\" data-start=\"3119\">Initially only $P_3$ satisfies:</p><p data-end=\"3178\" data-start=\"3152\">$Need(P_3)\\leq Available$.</p><p data-end=\"3213\" data-start=\"3180\">So we may assume $P_3$ completes.</p><p data-end=\"3260\" data-start=\"3215\">But $P_3$ <strong data-end=\"3259\" data-start=\"3225\">currently holds zero resources</strong>.<br/> </p><p data-end=\"3286\" data-start=\"3262\">In the safety algorithm:</p><p data-end=\"3315\" data-start=\"3288\">$Work=Work+Allocation(P_3)$</p><p data-end=\"3320\" data-start=\"3317\">so, $Work=1+0=1$</p><p data-end=\"3341\" data-start=\"3337\">Now, $Need(P_1)=2&gt;1$ and $Need(P_2)=2&gt;1$.</p><p data-end=\"3439\" data-start=\"3383\">Neither remaining process can be guaranteed to complete.</p><p data-end=\"3484\" data-start=\"3441\">Therefore no complete safe sequence exists.</p><p data-end=\"3492\" data-start=\"3486\">Hence, $\\boxed{\\text{System is unsafe.}}$</p><p data-end=\"3554\" data-start=\"3529\"> </p><p data-end=\"3574\" data-start=\"3556\"><strong>Answer : A</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/545018/go-classes-dpp-gate-cs-operating-system-safety-state-detection\" target=\"_blank\">GATE Overflow #545018</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"105\" data-start=\"0\">A system has three processes $P_0, P_1, P_2$ and three resource types $A, B, C$. At a particular instant:</p><p data-end=\"294\" data-start=\"107\">$$\\begin{array}{|c|c|c|}<br/>\\hline<br/>\\text{Process} &amp; \\text{Allocation }(A,B,C) &amp; \\text{Need }(A,B,C) \\\\<br/>\\hline<br/>P_0 &amp; (2,0,1) &amp; (0,2,1) \\\\<br/>P_1 &amp; (0,2,0) &amp; (1,2,3) \\\\<br/>P_2 &amp; (1,0,1) &amp; (0,1,3) \\\\<br/>\\hline<br/>\\end{array}$$</p><p data-end=\"344\" data-start=\"296\">The currently available resources are $(1,3,2)$.</p><p data-end=\"376\" data-start=\"346\">How many safe sequences exist?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$1$<br/></span>",
                "<span style=\"display: inline;\">$2$<br/></span>",
                "<span style=\"display: inline;\">$3$<br/></span>",
                "<span style=\"display: inline;\">$4$</span>"
            ],
            "answer": "B",
            "solution": "<div class=\"solution-content\"><a name=\"545017\"></a><div itemprop=\"text\"><p data-end=\"1495\" data-start=\"1485\">Initially,</p><p data-end=\"1512\" data-start=\"1497\">$Work=(1,3,2)$.</p><p data-end=\"1552\" data-start=\"1514\">Compare each process's Need with Work:</p><ul data-end=\"1713\" data-start=\"1554\"><li data-end=\"1604\" data-section-id=\"1tifgdq\" data-start=\"1554\">$P_0:(0,2,1)\\leq(1,3,2)$, so $P_0$ can complete.</li><li data-end=\"1664\" data-section-id=\"17gb72b\" data-start=\"1605\">$P_1:(1,2,3)\\nleq(1,3,2)$ because $3&gt;2$ for resource $C$.</li><li data-end=\"1713\" data-section-id=\"aaf3p1\" data-start=\"1665\">$P_2:(0,1,3)\\nleq(1,3,2)$ for the same reason.</li></ul><p data-end=\"1769\" data-start=\"1715\">Therefore the <strong data-end=\"1768\" data-start=\"1729\">first process is forced to be $P_0$</strong>.</p><p data-end=\"1792\" data-start=\"1771\">After $P_0$ finishes:</p><p data-end=\"1816\" data-start=\"1794\">$Work=(1,3,2)+(2,0,1)=(3,3,3)$.</p><p data-end=\"1871\" data-start=\"1831\">Now both remaining processes can finish:</p><p data-end=\"1897\" data-start=\"1873\">$P_1:(1,2,3)\\leq(3,3,3)$</p><p data-end=\"1902\" data-start=\"1899\">and</p><p data-end=\"1929\" data-start=\"1904\">$P_2:(0,1,3)\\leq(3,3,3)$.</p><p data-end=\"1970\" data-start=\"1931\">So the two possible safe sequences are:</p><p data-end=\"2007\" data-start=\"1972\">$P_0\\rightarrow P_1\\rightarrow P_2$</p><p data-end=\"2012\" data-start=\"2009\">and</p><p data-end=\"2050\" data-start=\"2014\">$P_0\\rightarrow P_2\\rightarrow P_1$.<br/> </p><p data-end=\"2058\" data-start=\"2052\">So, <strong>Answer :</strong> $\\boxed{2}$</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/545015/go-classes-dpp-gate-cs-operating-system-safe-sequence-count\" target=\"_blank\">GATE Overflow #545015</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"2733\" data-start=\"2678\">Consider the following statements concerning deadlocks:</p><p data-end=\"3542\" data-start=\"3518\">Which option is correct?</p><p><strong>Given Details:</strong></p><ul><li>Deadlock prevention is based on identifying a <strong data-end=\"2812\" data-start=\"2788\">sufficient condition</strong> for deadlock and designing resource-allocation algorithms so that this condition can never arise.</li><li>Deadlock detection can be based on checking a condition sufficient to establish that a deadlock exists; if that condition is found, the system concludes that deadlock has occurred.</li><li>Prevention and detection are complementary in the following sense: prevention designs allocation rules so that deadlocks cannot arise, while detection prevents the necessary conditions for deadlock from occurring.</li><li>A circular chain of waiting processes is a necessary feature of deadlock, and one common prevention technique is to design resource-allocation rules that make such cycles impossible.</li></ul></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">II only</span>",
                "<span style=\"display: inline;\">I and III only</span>",
                "<span style=\"display: inline;\">II and III only</span>",
                "<span style=\"display: inline;\">II and IV only</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"544866\"></a><div itemprop=\"text\"><p data-end=\"3815\" data-start=\"3790\"><strong data-end=\"3815\" data-start=\"3790\">Statement I is false.</strong></p><p data-end=\"3931\" data-start=\"3817\">Deadlock prevention normally works by ensuring that <strong data-end=\"3905\" data-start=\"3869\">at least one necessary condition</strong> for deadlock cannot hold.</p><p data-end=\"3945\" data-start=\"3933\">For eg:</p><ul data-end=\"4058\" data-start=\"3947\"><li data-end=\"3972\" data-section-id=\"sncvlk\" data-start=\"3947\">prohibit hold and wait,<br/> </li><li data-end=\"4005\" data-section-id=\"shv0kn\" data-start=\"3973\">permit resource preemption, or<br/> </li><li data-end=\"4058\" data-section-id=\"1215xfd\" data-start=\"4006\">eliminate circular wait through resource ordering.</li></ul><p data-end=\"4145\" data-start=\"4060\">Therefore, describing prevention as preventing a <em data-end=\"4121\" data-start=\"4109\">sufficient</em> condition is incorrect.</p><p data-end=\"4177\" data-start=\"4152\"><br/><strong data-end=\"4177\" data-start=\"4152\">Statement II is true.</strong></p><p data-end=\"4358\" data-start=\"4179\">A detection mechanism looks for a condition that establishes the presence of an actual deadlock. </p><p data-end=\"4358\" data-start=\"4179\">Once such a condition is detected, the system can conclude that a deadlock exists.</p><p data-end=\"4488\" data-start=\"4461\"><br/><strong data-end=\"4488\" data-start=\"4461\">Statement III is false.</strong></p><p data-end=\"4536\" data-start=\"4490\">The first part correctly describes prevention.</p><p data-end=\"4567\" data-start=\"4538\">But the second part is wrong; <em>preventing necessary conditions</em> is what <strong data-end=\"4635\" data-start=\"4612\">deadlock prevention</strong> does.</p><p data-end=\"4794\" data-start=\"4643\">Deadlock detection allows deadlocks to occur and then attempts to determine whether one exists. </p><p data-end=\"4794\" data-start=\"4643\">It does not stop the necessary conditions from forming.</p><p data-end=\"4826\" data-start=\"4801\"><br/><strong data-end=\"4826\" data-start=\"4801\">Statement IV is true.</strong></p><p data-end=\"4890\" data-start=\"4828\">Circular wait is one of the necessary conditions for deadlock.</p><p data-end=\"5075\" data-start=\"4892\">A standard prevention technique is to impose a global ordering on resource types and require processes to acquire them according to that order. This makes circular waiting impossible.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/544863/go-classes-dpp-gate-cs-operating-system-deadlock-prevention-%26-detection\" target=\"_blank\">GATE Overflow #544863</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"629\" data-start=\"580\">Consider the following statements about deadlock:</p><p data-end=\"1050\" data-start=\"1016\">Which of the following is correct?</p><p><strong>Given Details:</strong></p><ul><li>A deadlock can be resolved by taking resources away from one or more processes.</li><li>Deadlock-prevention techniques can guarantee that the system does not enter a deadlock.</li><li>Banker's Algorithm can be used to determine whether the system is currently in a deadlocked state.</li><li>If the system is deadlocked, at least two processes must be in the blocked state.</li></ul></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">II and III only</span>",
                "<span style=\"display: inline;\">I, II and IV only</span>",
                "<span style=\"display: inline;\">I, II and III only</span>",
                "<span style=\"display: inline;\">I, III and IV only</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"544861\"></a><div itemprop=\"text\"><p data-end=\"1229\" data-start=\"1205\"><strong data-end=\"1229\" data-start=\"1205\">Statement I is true.</strong></p><p data-end=\"1447\" data-start=\"1231\">One method of recovering from deadlock is <strong data-end=\"1296\" data-start=\"1273\">resource preemption</strong>. </p><p data-end=\"1447\" data-start=\"1231\">Resources are taken from selected processes and reassigned so that one of the deadlocked processes can proceed.<br/> </p><p data-end=\"1474\" data-start=\"1449\"><strong data-end=\"1474\" data-start=\"1449\">Statement II is true.</strong></p><p data-end=\"1709\" data-start=\"1476\">Deadlock prevention ensures that at least one of the necessary conditions for deadlock is never allowed to hold. </p><p data-end=\"1709\" data-start=\"1476\">Therefore, a deadlock cannot arise under a correctly enforced prevention protocol.<br/> </p><p data-end=\"1738\" data-start=\"1711\"><strong data-end=\"1738\" data-start=\"1711\">Statement III is false.</strong></p><p data-end=\"1874\" data-start=\"1740\">Banker's Algorithm is a <strong data-end=\"1786\" data-start=\"1764\">deadlock-avoidance</strong> technique. </p><p data-end=\"1874\" data-start=\"1740\">It checks whether granting a request would leave the system in a safe state.</p><p data-end=\"2002\" data-start=\"1876\">It is not an algorithm for determining whether the current system is already deadlocked.<br/> </p><p data-end=\"2029\" data-start=\"2004\"><strong data-end=\"2029\" data-start=\"2004\">Statement IV is true.</strong></p><p data-end=\"2277\" data-start=\"2031\">A deadlock involves a set of processes waiting indefinitely for resources/events that can only be provided by other processes in that set. </p><p data-end=\"2277\" data-start=\"2031\">Thus, at least two processes are involved in the blocking dependency.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/544859/go-classes-dpp-gate-cs-operating-system-deadlock-handling-methods\" target=\"_blank\">GATE Overflow #544859</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"750\" data-start=\"632\">There are four processes $A,B,C,D$ that perform their processing by <strong data-end=\"741\" data-start=\"700\">exclusively acquiring three resources</strong> $X,Y,Z$.</p><p data-end=\"931\" data-start=\"752\">As execution proceeds, each process acquires the three resources in the order shown below. </p><p data-end=\"931\" data-start=\"752\">A process releases <strong data-end=\"930\" data-start=\"862\">all three resources together only after completing its execution</strong>.</p><p data-end=\"1194\" data-start=\"1113\">$$\\begin{array}{|c|c|c|c|}<br/>\\hline<br/>\\text{Process} &amp; \\text{1st resource} &amp; \\text{2nd resource} &amp; \\text{3rd resource} \\\\<br/>\\hline<br/>A &amp; X &amp; Y &amp; Z \\\\<br/>B &amp; X &amp; Y &amp; Z \\\\<br/>C &amp; Z &amp; X &amp; Y \\\\<br/>D &amp; Z &amp; Y &amp; X \\\\<br/>\\hline<br/>\\end{array}$$</p><p data-end=\"1194\" data-start=\"1113\">Process $A$ is executed concurrently with exactly <strong data-end=\"1170\" data-start=\"1163\">one</strong> of the other processes.</p><p data-end=\"1262\" data-start=\"1196\">With which process can execution potentially result in a deadlock?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$B,C,D$<br/></span>",
                "<span style=\"display: inline;\">$C,D$<br/></span>",
                "<span style=\"display: inline;\">$C$ only<br/></span>",
                "<span style=\"display: inline;\">$D$ only</span>"
            ],
            "answer": "B",
            "solution": "<div class=\"solution-content\"><a name=\"544852\"></a><div itemprop=\"text\"><p data-end=\"1577\" data-start=\"1533\">Process $A$ acquires resources in the order: $X\\rightarrow Y\\rightarrow Z$</p><p data-end=\"1626\" data-section-id=\"m1j5gn\" data-start=\"1610\"><br/><strong>1.</strong> $A$ with $B$</p><p data-end=\"1645\" data-start=\"1628\">$B$ also follows: $X\\rightarrow Y\\rightarrow Z$</p><p data-end=\"1728\" data-start=\"1678\">Both processes use the <strong data-end=\"1727\" data-start=\"1701\">same resource ordering</strong>.</p><p data-end=\"1876\" data-start=\"1730\">If $A$ obtains $X$ first, $B$ simply waits for $X$ without holding $Y$ or $Z$. After $A$ completes, it releases all resources and $B$ can proceed.</p><p data-end=\"1925\" data-start=\"1878\">Similarly, if $B$ obtains $X$ first, $A$ waits.</p><p data-end=\"1957\" data-start=\"1927\">There can be no circular wait.</p><p data-end=\"1965\" data-start=\"1959\">$\\boxed{\\therefore A+B:\\text{ no deadlock}}$</p><p data-end=\"2203\" data-start=\"2002\">This is exactly the principle used in deadlock prevention by imposing a common resource ordering.</p><p data-end=\"2226\" data-section-id=\"m1j5dy\" data-start=\"2210\"><br/><strong>2.</strong> $A$ with $C$</p><p data-end=\"2255\" data-start=\"2228\">The acquisition orders are:</p><p data-end=\"2288\" data-start=\"2257\">$A:X\\rightarrow Y\\rightarrow Z$</p><p data-end=\"2321\" data-start=\"2290\">$C:Z\\rightarrow X\\rightarrow Y$</p><p data-end=\"2347\" data-start=\"2323\">Consider this execution:</p><ol data-end=\"2497\" data-start=\"2349\"><li data-end=\"2369\" data-section-id=\"rehfza\" data-start=\"2349\">$A$ acquires $X$.</li><li data-end=\"2390\" data-section-id=\"1r2cm6d\" data-start=\"2370\">$C$ acquires $Z$.</li><li data-end=\"2411\" data-section-id=\"14dcw2t\" data-start=\"2391\">$A$ acquires $Y$.</li><li data-end=\"2454\" data-section-id=\"hmh64e\" data-start=\"2412\">$A$ requests $Z$, which is held by $C$.</li><li data-end=\"2497\" data-section-id=\"v1clnh\" data-start=\"2455\">$C$ requests $X$, which is held by $A$.</li></ol><p data-end=\"2503\" data-start=\"2499\">Now, $A$ waits for $C$ and $C$ waits for $A$.</p><p data-end=\"2582\" data-start=\"2549\">Therefore a circular wait exists:</p><p data-end=\"2639\" data-start=\"2584\">$A\\rightarrow Z\\rightarrow C\\rightarrow X\\rightarrow A$</p><p data-end=\"2647\" data-start=\"2641\">$\\boxed{\\therefore A+C:\\text{ deadlock possible}}$</p><p data-end=\"2711\" data-section-id=\"m1j5i9\" data-start=\"2695\"><br/><strong>3.</strong> $A$ with $D$</p><p data-end=\"2728\" data-start=\"2713\">The orders are:</p><p data-end=\"2761\" data-start=\"2730\">$A:X\\rightarrow Y\\rightarrow Z$</p><p data-end=\"2794\" data-start=\"2763\">$D:Z\\rightarrow Y\\rightarrow X$</p><p data-end=\"2805\" data-start=\"2796\">Consider:</p><ol data-end=\"2947\" data-start=\"2807\"><li data-end=\"2827\" data-section-id=\"rehfza\" data-start=\"2807\">$A$ acquires $X$.</li><li data-end=\"2848\" data-section-id=\"15esyci\" data-start=\"2828\">$D$ acquires $Z$.</li><li data-end=\"2869\" data-section-id=\"14dcw2t\" data-start=\"2849\">$A$ acquires $Y$.</li><li data-end=\"2908\" data-section-id=\"qq879g\" data-start=\"2870\">$A$ requests $Z$ and waits for $D$.</li><li data-end=\"2947\" data-section-id=\"hk0mdi\" data-start=\"2909\">$D$ requests $Y$ and waits for $A$.</li></ol><p data-end=\"2954\" data-start=\"2949\">Thus, $A\\rightarrow Z\\rightarrow D\\rightarrow Y\\rightarrow A$ forms a circular wait.</p><p data-end=\"3043\" data-start=\"3037\">$\\boxed{\\therefore A+D:\\text{ deadlock possible}}$</p><p data-end=\"3123\" data-start=\"3086\"><br/>So, deadlock is possible with: $\\boxed{C\\text{ and }D}$</p><p data-end=\"3176\" data-start=\"3151\"><br/><strong>Answer : B</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/544851/go-classes-dpp-gate-cs-operating-system-deadlock\" target=\"_blank\">GATE Overflow #544851</a></small></div>"
        },
        {
            "marks": 2,
            "neg": 0,
            "type": "MSQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"3242\" data-start=\"3074\">A banking system has one exclusive lock $L_i$ for every account $i$. A transfer from account $x$ to account $y$ requires both $L_x$ and $L_y$ to be held simultaneously.</p><p data-end=\"3315\" data-start=\"3244\">Transfers between arbitrary pairs of accounts may execute concurrently.</p><p data-end=\"3361\" data-start=\"3317\">Consider the following independent policies:</p><p data-end=\"3896\" data-start=\"3867\">Which statements are correct?</p><p><strong>Given Details:</strong></p><ul><li>Always acquire the lower-numbered account lock first, followed by the higher-numbered lock.</li><li>Always acquire the source-account lock first, followed by the destination-account lock.</li><li>Attempt to obtain both required locks. If the second lock cannot be obtained immediately, release the first lock before waiting/retrying.</li><li>Before acquiring any account lock, acquire one global transfer lock $G$; retain $G$ until all account locks used by that transfer have been released.</li></ul></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">Policy I guarantees freedom from deadlock by eliminating circular wait.</span>",
                "<span style=\"display: inline;\">Policy II guarantees freedom from deadlock because every transfer follows the same semantic rule.</span>",
                "<span style=\"display: inline;\">Policy III prevents deadlock by preventing a process from holding one account lock while waiting indefinitely for the other.</span>",
                "<span style=\"display: inline;\">Policy IV prevents deadlock, although it may reduce concurrency.</span>"
            ],
            "answer": [
                "A"
            ],
            "solution": "<div class=\"solution-content\"><a name=\"544850\"></a><div itemprop=\"text\"><p data-end=\"4354\" data-section-id=\"1yjc7an\" data-start=\"4342\"><strong>Policy I</strong></p><p data-end=\"4400\" data-start=\"4356\">All transactions obey the same global order.</p><p data-end=\"4469\" data-start=\"4402\">For eg, a transfer between accounts $2$ and $7$ always obtains $L_2$ before $L_7$, regardless of transfer direction.</p><p data-end=\"4614\" data-start=\"4526\">Thus lock dependencies always move from lower account numbers to higher account numbers.</p><p data-end=\"4638\" data-start=\"4616\">A cycle would require:</p><p data-end=\"4680\" data-start=\"4640\">$L_{i_1}&lt;L_{i_2}&lt;\\cdots&lt;L_{i_k}&lt;L_{i_1}$</p><p data-end=\"4702\" data-start=\"4682\">which is impossible.</p><p data-end=\"4731\" data-start=\"4704\">So <strong data-end=\"4730\" data-start=\"4714\">A is correct</strong>.</p><p data-end=\"4751\" data-section-id=\"1iqkxhi\" data-start=\"4738\"><br/><strong>Policy II</strong></p><p data-end=\"4789\" data-start=\"4753\">Consider two simultaneous transfers:</p><p data-end=\"4806\" data-start=\"4791\">$1\\rightarrow2$ and $2\\rightarrow1$.</p><p data-end=\"4874\" data-start=\"4831\">The first may hold $L_1$ and request $L_2$.</p><p data-end=\"4920\" data-start=\"4876\">The second may hold $L_2$ and request $L_1$.</p><p data-end=\"4928\" data-start=\"4922\">Hence, $T_1\\rightarrow L_2\\rightarrow T_2\\rightarrow L_1\\rightarrow T_1$ is possible.</p><p data-end=\"5036\" data-start=\"5011\">So, <strong data-end=\"5035\" data-start=\"5021\">B is false</strong>.</p><p data-end=\"5129\" data-start=\"5038\">The fact that both use the rule \"source first\" does not create a <strong data-end=\"5128\" data-start=\"5103\">global resource order</strong>.</p><p data-end=\"5150\" data-section-id=\"uldbm7\" data-start=\"5136\"><br/><strong>Policy III</strong></p><p data-end=\"5209\" data-start=\"5152\">Suppose a process holds $L_1$ and fails to acquire $L_2$.</p><p data-end=\"5267\" data-start=\"5211\">It gives up $L_1$ instead of retaining it while waiting.</p><p data-end=\"5343\" data-start=\"5269\">Therefore the hold-and-wait structure responsible for deadlock is removed.</p><p data-end=\"5487\" data-start=\"5345\">This can still create repeated retries or starvation under a poor retry policy, but not a permanent deadlock caused by holding the first lock.</p><p data-end=\"5509\" data-start=\"5489\">So <strong data-end=\"5508\" data-start=\"5492\">C is correct</strong>.</p><p data-end=\"5529\" data-section-id=\"1iqkxi1\" data-start=\"5516\"><br/><strong>Policy IV</strong></p><p data-end=\"5608\" data-start=\"5531\">Only the holder of $G$ is permitted to proceed into account-lock acquisition.</p><p data-end=\"5699\" data-start=\"5610\">Thus two transfers cannot simultaneously build a circular dependency among account locks.</p><p data-end=\"5729\" data-start=\"5701\">Hence deadlock is prevented.</p><p data-end=\"5836\" data-start=\"5731\">However, unrelated transfers that otherwise could execute concurrently may now be serialized through $G$.</p><p data-end=\"5865\" data-start=\"5838\">So<strong data-end=\"5864\" data-start=\"5848\">, D is correct</strong>.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/544849/go-classes-dpp-gate-cs-operating-system-deadlock-prevention\" target=\"_blank\">GATE Overflow #544849</a></small></div>"
        },
        {
            "marks": 2,
            "neg": 0,
            "type": "MSQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"52\" data-start=\"0\">Consider the following deadlock-prevention policies:</p><p data-end=\"552\" data-start=\"523\">Which statements are correct?</p><p><strong>Given Details:</strong></p><ul><li>Impose a global ordering on resource types and permit a process to request resources only in increasing order.</li><li>If a process holding resources requests another unavailable resource, require that process to release all resources it currently holds before waiting.</li><li>Allow a resource to be used simultaneously by all requesting processes whenever its nature permits.</li><li>Require a process to acquire all resources it may need before it begins execution.</li></ul></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">Policy $1$ attacks circular wait.</span>",
                "<span style=\"display: inline;\">Policy $2$ attacks no preemption.</span>",
                "<span style=\"display: inline;\">Policy $3$ attacks mutual exclusion.</span>",
                "<span style=\"display: inline;\">Policy $4$ attacks hold and wait.</span>"
            ],
            "answer": [
                "A"
            ],
            "solution": "<div class=\"solution-content\"><a name=\"544847\"></a><div itemprop=\"text\"><p data-end=\"1665\" data-start=\"1595\"><strong data-end=\"1608\" data-start=\"1595\">Policy $\\mathbf{1}:$</strong> A process holding $R_i$ may request only some $R_j$ with $j&gt;i$.</p><p data-end=\"1849\" data-start=\"1675\">Along any resource-request chain, resource numbers must therefore strictly increase. A directed cycle would eventually require the numbering to decrease, which is impossible.</p><p data-end=\"1892\" data-start=\"1851\">Hence Policy $1$ removes <strong data-end=\"1891\" data-start=\"1874\">circular wait</strong>.</p><p data-end=\"1914\" data-start=\"1894\">So <strong data-end=\"1913\" data-start=\"1897\">A is correct</strong>.</p><p data-end=\"1995\" data-start=\"1921\"> </p><p data-end=\"1995\" data-start=\"1921\">For <strong data-end=\"1937\" data-start=\"1925\">Policy </strong><strong data-end=\"1608\" data-start=\"1595\">$\\mathbf{2}$</strong>, suppose a process currently holds $R_1$ and needs $R_2$.</p><p data-end=\"2070\" data-start=\"1997\">If $R_2$ is unavailable, the process first releases $R_1$ and then waits.</p><p data-end=\"2113\" data-start=\"2072\">Thus the process is never simultaneously:</p><ul data-end=\"2165\" data-start=\"2115\"><li data-end=\"2142\" data-section-id=\"y88kwe\" data-start=\"2115\">holding one resource, and</li><li data-end=\"2165\" data-section-id=\"1fj3xod\" data-start=\"2143\">waiting for another.</li></ul><p data-end=\"2215\" data-start=\"2167\">It attacks <strong data-end=\"2195\" data-start=\"2178\">hold and wait</strong>, not no preemption.</p><p data-end=\"2235\" data-start=\"2217\">So <strong data-end=\"2234\" data-start=\"2220\">B is false</strong>.</p><p data-end=\"2293\" data-start=\"2242\"> </p><p data-end=\"2293\" data-start=\"2242\"><strong data-end=\"2254\" data-start=\"2242\">Policy </strong><strong data-end=\"1608\" data-start=\"1595\">$\\mathbf{3}$</strong> makes the relevant resource shareable.</p><p data-end=\"2374\" data-start=\"2295\">If several processes can use it simultaneously, exclusive ownership is removed.</p><p data-end=\"2412\" data-start=\"2376\">Thus <strong data-end=\"2401\" data-start=\"2381\">mutual exclusion</strong> is broken.</p><p data-end=\"2434\" data-start=\"2414\">So <strong data-end=\"2433\" data-start=\"2417\">C is correct</strong>.</p><p data-end=\"2543\" data-start=\"2441\"> </p><p data-end=\"2543\" data-start=\"2441\">Under <strong data-end=\"2459\" data-start=\"2447\">Policy </strong><strong data-end=\"1608\" data-start=\"1595\">$\\mathbf{4}$</strong>, a process either receives its entire required resource set or receives none of it.</p><p data-end=\"2606\" data-start=\"2545\">It therefore never holds a subset while waiting for the rest.</p><p data-end=\"2645\" data-start=\"2608\">Hence <strong data-end=\"2631\" data-start=\"2614\">hold and wait</strong> is prevented.</p><p data-end=\"2667\" data-start=\"2647\">So <strong data-end=\"2666\" data-start=\"2650\">D is correct</strong>.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/544845/go-classes-dpp-gate-cs-operating-system-deadlock-prevention\" target=\"_blank\">GATE Overflow #544845</a></small></div>"
        },
        {
            "marks": 2,
            "neg": 0,
            "type": "MSQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"8967\" data-start=\"8896\">A system has four processes $P_1,P_2,P_3,P_4$ and three resource types:</p><p data-end=\"9083\" data-start=\"9031\">The current allocation and outstanding requests are:</p><p data-end=\"216\" data-start=\"0\">$$\\begin{array}{|c|c|c|}<br/>\\hline<br/>\\text{Process} &amp; \\text{Currently holds} &amp; \\text{Currently requests} \\\\<br/>\\hline<br/>P_1 &amp; 1R_1 &amp; 1R_2 \\\\<br/>P_2 &amp; 2R_2 &amp; 1R_1 + 1R_3 \\\\<br/>P_3 &amp; 1R_1 &amp; 1R_2 \\\\<br/>P_4 &amp; 2R_3 &amp; 1R_1 \\\\<br/>\\hline<br/>\\end{array}$$</p><p data-end=\"247\" data-start=\"218\">Which statements are correct?</p><p><strong>Given Details:</strong></p><ul><li>$R_1: 3$ instances</li><li>$R_2: 2$ instances</li><li>$R_3: 2$ instances</li></ul></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">The Resource Allocation Graph contains at least one directed cycle.</span>",
                "<span style=\"display: inline;\">The system is currently deadlocked.</span>",
                "<span style=\"display: inline;\">$P_4$ can be allowed to complete first.</span>",
                "<span style=\"display: inline;\">One feasible process-completion order is $P_4 \\rightarrow P_2 \\rightarrow P_1 \\rightarrow P_3$.</span>"
            ],
            "answer": [
                "A"
            ],
            "solution": "<div class=\"solution-content\"><a name=\"544711\"></a><div itemprop=\"text\"><p data-end=\"9666\" data-start=\"9620\">First determine currently available resources.</p><p data-end=\"9678\" data-start=\"9668\">For $R_1$:</p><p data-end=\"9678\" data-start=\"9668\">$3$ instances exist.</p><p data-end=\"9732\" data-start=\"9700\">$P_1$ holds $1$ and $P_3$ holds $1$.</p><p data-end=\"9744\" data-start=\"9734\">$\\therefore Available(R_1)=3-2=1$</p><p data-end=\"9780\" data-start=\"9770\">For $R_2$:</p><p data-end=\"9815\" data-start=\"9782\">Both instances are held by $P_2$.</p><p data-end=\"9835\" data-start=\"9817\">$Available(R_2)=0$</p><p data-end=\"9847\" data-start=\"9837\">For $R_3$:</p><p data-end=\"9882\" data-start=\"9849\">Both instances are held by $P_4$.</p><p data-end=\"9902\" data-start=\"9884\">$Available(R_3)=0$</p><p data-end=\"9917\" data-start=\"9904\">So initially, </p><p data-end=\"9938\" data-start=\"9919\">$Available=(1,0,0)$</p><p data-end=\"9963\" data-section-id=\"1pvwayu\" data-start=\"9940\"><br/><strong>Does a cycle exist?</strong></p><p data-end=\"9974\" data-start=\"9965\">Consider,</p><p data-end=\"9996\" data-start=\"9976\">$P_1\\rightarrow R_2$</p><p data-end=\"10018\" data-start=\"9998\">$R_2\\rightarrow P_2$</p><p data-end=\"10040\" data-start=\"10020\">$P_2\\rightarrow R_1$</p><p data-end=\"10062\" data-start=\"10042\">$R_1\\rightarrow P_1$</p><p data-end=\"10086\" data-start=\"10064\">Thus there is a cycle:</p><p data-end=\"10153\" data-start=\"10088\">$P_1\\rightarrow R_2\\rightarrow P_2\\rightarrow R_1\\rightarrow P_1$</p><p data-end=\"10175\" data-start=\"10155\">Hence <strong data-end=\"10174\" data-start=\"10161\">A is true</strong>.</p><p data-end=\"10307\" data-start=\"10177\">However, the existence of this cycle does not automatically establish deadlock because the resource types have multiple instances.</p><p data-end=\"10336\" data-section-id=\"1v4lqyj\" data-start=\"10309\"><br/><strong>Can any process finish?</strong></p><p data-end=\"10360\" data-start=\"10338\">$P_4$ needs one $R_1$.</p><p data-end=\"10393\" data-start=\"10362\">Exactly one $R_1$ is available.</p><p data-end=\"10422\" data-start=\"10395\">Therefore give it to $P_4$.</p><p data-end=\"10457\" data-start=\"10424\">$P_4$ can now finish and release:</p><ul data-end=\"10496\" data-start=\"10459\"><li data-end=\"10467\" data-section-id=\"73fe84\" data-start=\"10459\">$2R_3$</li><li data-end=\"10496\" data-section-id=\"19kruae\" data-start=\"10468\">the $R_1$ it just obtained</li></ul><p data-end=\"10515\" data-start=\"10498\">So <strong data-end=\"10514\" data-start=\"10501\">C is true</strong>.</p><p data-end=\"10597\" data-start=\"10517\">Now enough $R_1$ and $R_3$ are available to satisfy $P_2$'s outstanding request.</p><p data-end=\"10651\" data-start=\"10599\">$P_2$ finishes and releases its two $R_2$ instances.</p><p data-end=\"10707\" data-start=\"10653\">Those $R_2$ instances allow $P_1$ and $P_3$ to finish.</p><p data-end=\"10745\" data-start=\"10709\">Hence one valid completion order is:</p><p data-end=\"10805\" data-start=\"10747\">$\\boxed{P_4\\rightarrow P_2\\rightarrow P_1\\rightarrow P_3}$</p><p data-end=\"10824\" data-start=\"10807\">So, <strong data-end=\"10823\" data-start=\"10810\">D is true</strong>.</p><p data-end=\"10910\" data-start=\"10826\">Because such a completion sequence exists, the current system is <strong data-end=\"10909\" data-start=\"10891\">not deadlocked</strong>.</p><p data-end=\"10937\" data-start=\"10912\">$\\therefore$ <strong data-end=\"10936\" data-start=\"10922\">B is false</strong>.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/544710/go-classes-dpp-gate-cs-operating-system-multi-resource-deadlock\" target=\"_blank\">GATE Overflow #544710</a></small></div>"
        },
        {
            "marks": 2,
            "neg": 0,
            "type": "MSQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"6855\" data-start=\"6786\">A system contains exactly <strong data-end=\"6840\" data-start=\"6812\">four identical instances</strong> of a resource.</p><p data-end=\"6911\" data-start=\"6857\">Consider the following two independent configurations.</p><p data-end=\"6932\" data-section-id=\"1w3rbfj\" data-start=\"6913\"><strong>Configuration I</strong></p><p data-end=\"7021\" data-start=\"6934\">There are two processes, and each process may require at most three resource instances.</p><p data-end=\"7043\" data-section-id=\"19hjrxy\" data-start=\"7023\"><strong>Configuration II</strong></p><p data-end=\"7132\" data-start=\"7045\">There are three processes, and each process may require at most two resource instances.<br/> </p><p data-end=\"7163\" data-start=\"7134\">Which statements are correct?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">Configuration I is guaranteed to be deadlock-free.<br/></span>",
                "<span style=\"display: inline;\">Configuration I can deadlock if each process holds two instances and requests one more.<br/></span>",
                "<span style=\"display: inline;\">Configuration II is guaranteed to be deadlock-free.<br/></span>",
                "<span style=\"display: inline;\">Configuration II can deadlock with every process holding one instance and requesting one additional instance.</span>"
            ],
            "answer": [
                "A"
            ],
            "solution": "<div class=\"solution-content\"><a name=\"544709\"></a><div itemprop=\"text\"><p data-end=\"7566\" data-section-id=\"1w3rbfj\" data-start=\"7547\"><strong>Configuration I</strong></p><p data-end=\"7611\" data-start=\"7568\">There are two processes and four resources.</p><p data-end=\"7621\" data-start=\"7613\">Suppose,</p><p data-end=\"7657\" data-start=\"7623\">$P_1$ holds $2$ and requests $1$ more.</p><p data-end=\"7693\" data-start=\"7659\">$P_2$ holds $2$ and requests $1$ more.</p><p data-end=\"7727\" data-start=\"7695\">All four resources are occupied.</p><p data-end=\"7775\" data-start=\"7729\">Neither process can obtain its third resource.</p><p data-end=\"7822\" data-start=\"7777\">Neither can finish and release its resources.</p><p data-end=\"7855\" data-start=\"7824\">Therefore deadlock is possible.</p><p>$\\Rightarrow$ A is false. B is true.</p><p data-end=\"7910\" data-section-id=\"19hjrxy\" data-start=\"7890\"><br/><strong>Configuration II</strong></p><p data-end=\"7976\" data-start=\"7912\">There are three processes, each requiring at most two resources.</p><p data-end=\"8009\" data-start=\"7978\">The worst-looking situation is,</p><p data-end=\"8024\" data-start=\"8011\">$P_1$ holds $1$</p><p data-end=\"8039\" data-start=\"8026\">$P_2$ holds $1$</p><p data-end=\"8054\" data-start=\"8041\">$P_3$ holds $1$</p><p data-end=\"8111\" data-start=\"8056\">Only three of the four resource instances are occupied.</p><p data-end=\"8154\" data-start=\"8113\">Therefore one resource remains available.</p><p data-end=\"8194\" data-start=\"8156\">Give it to any one process, say $P_1$.</p><p data-end=\"8266\" data-start=\"8196\">Now $P_1$ has its maximum requirement of two resources and can finish.</p><p data-end=\"8339\" data-start=\"8268\">It releases both resources, allowing the remaining processes to finish.</p><p data-end=\"8371\" data-start=\"8341\">Hence a deadlock cannot arise.</p><p data-end=\"8376\" data-start=\"8373\">$\\Rightarrow$ C is true. D is false.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/544708/go-classes-dpp-gate-cs-operating-system-deadlock-resource-count\" target=\"_blank\">GATE Overflow #544708</a></small></div>"
        }
    ]
});

registerTest({
    "name": "DPP 21 - Operating System (Deadlocks - Part 3)",
    "testLabel": "DPP 21",
    "testType": "DPP",
    "bracket": "Deadlocks - Part 3",
    "subject": "os",
    "series": "cse-dpp-2027",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 16,
    "topicsCovered": "Deadlocks (Practice Set 3)",
    "questions": [
        {
            "marks": 2,
            "neg": 0,
            "type": "MSQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"4667\" data-start=\"4636\">There are three resource types:</p><p data-end=\"4780\" data-start=\"4732\">Four processes have the following current state:</p><ul data-end=\"4980\" data-start=\"4782\"><li data-end=\"4821\" data-section-id=\"ll9tuh\" data-start=\"4782\">$P_1$ holds one $T$ and requests $D$.</li><li data-end=\"4892\" data-section-id=\"1n8jlks\" data-start=\"4822\">$P_2$ holds one $T$ and one $C$ and requires no additional resource.</li><li data-end=\"4932\" data-section-id=\"19zzgnv\" data-start=\"4893\">$P_3$ holds $D$ and requests one $T$.</li><li data-end=\"4980\" data-section-id=\"1mzts3r\" data-start=\"4933\">$P_4$ holds one $C$ and requests another $C$.</li></ul><p data-end=\"5011\" data-start=\"4982\">Which statements are correct?</p><p><strong>Given Details:</strong></p><ul><li>$D$: one instance</li><li>$T$: two instances</li><li>$C$: two instances</li></ul></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">The system is currently deadlocked.</span>",
                "<span style=\"display: inline;\">The Resource Allocation Graph contains a cycle involving $P_1$ and $P_3$.</span>",
                "<span style=\"display: inline;\">$P_2$ can complete immediately, and its resource release enables further progress.</span>",
                "<span style=\"display: inline;\">The entire Resource Allocation Graph can eventually be reduced.</span>"
            ],
            "answer": [
                "A"
            ],
            "solution": "<div class=\"solution-content\"><a name=\"544705\"></a><div itemprop=\"text\"><p data-end=\"5402\" data-start=\"5354\">At first glance, there appears to be a deadlock:</p><p data-end=\"5438\" data-start=\"5404\">$P_1$ holds $T$ and waits for $D$.</p><p data-end=\"5474\" data-start=\"5440\">$P_3$ holds $D$ and waits for $T$.</p><p data-end=\"5511\" data-start=\"5476\">Therefore the RAG contains a cycle:</p><p data-end=\"5574\" data-start=\"5513\">$P_1\\rightarrow D\\rightarrow P_3\\rightarrow T\\rightarrow P_1$</p><p data-end=\"5596\" data-start=\"5576\">So <strong data-end=\"5595\" data-start=\"5579\">B is correct</strong>.</p><p data-end=\"5628\" data-start=\"5598\">But $T$ has <strong data-end=\"5627\" data-start=\"5610\">two instances</strong>.</p><p data-end=\"5706\" data-start=\"5630\">The second instance is held by $P_2$, and $P_2$ is not waiting for anything.</p><p data-end=\"5747\" data-start=\"5708\">Therefore $P_2$ can finish immediately.</p><p data-end=\"5783\" data-start=\"5749\">After $P_2$ finishes, it releases:</p><ul data-end=\"5804\" data-start=\"5785\"><li data-end=\"5794\" data-section-id=\"1r2x46w\" data-start=\"5785\">one $T$</li><li data-end=\"5804\" data-section-id=\"1r2x3pr\" data-start=\"5795\">one $C$</li></ul><p data-end=\"5810\" data-start=\"5806\">Now:</p><ul data-end=\"5896\" data-start=\"5812\"><li data-end=\"5848\" data-section-id=\"xufyv8\" data-start=\"5812\">$P_3$ can obtain a $T$ and finish.</li><li data-end=\"5896\" data-section-id=\"12z1qht\" data-start=\"5849\">$P_4$ can obtain the released $C$ and finish.</li></ul><p data-end=\"5936\" data-start=\"5898\">After $P_3$ finishes, it releases $D$.</p><p data-end=\"5975\" data-start=\"5938\">Then $P_1$ can obtain $D$ and finish.</p><p data-end=\"6012\" data-start=\"5977\">One possible reduction sequence is:</p><p data-end=\"6064\" data-start=\"6014\">$P_2\\rightarrow P_3\\rightarrow P_4\\rightarrow P_1$</p><p data-end=\"6103\" data-start=\"6066\">So the complete graph can be reduced.</p><p data-end=\"6161\" data-start=\"6105\">$\\therefore$ <strong data-end=\"6138\" data-start=\"6115\">C and D are correct</strong>, while <strong data-end=\"6160\" data-start=\"6146\">A is false</strong>.</p><p data-end=\"6161\" data-start=\"6105\"> </p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/544704/go-classes-dpp-gate-cs-operating-system-multiple-instance-rag\" target=\"_blank\">GATE Overflow #544704</a></small></div>"
        },
        {
            "marks": 2,
            "neg": 0,
            "type": "MSQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"2821\" data-start=\"2705\">A system contains three processes $P_1,P_2,P_3$ and two resources $R_1,R_2$. Each resource has exactly one instance.</p><p data-end=\"2844\" data-start=\"2823\">The current state is:</p><p data-end=\"3020\" data-start=\"2991\">Which statements are correct?</p><p><strong>Given Details:</strong></p><ul><li>$P_1$ holds $R_1$ and is waiting for $R_2$.</li><li>$P_2$ holds $R_2$ and is waiting for $R_1$.</li><li>$P_3$ holds no resource and is waiting for $R_1$.</li></ul></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$P_1$ and $P_2$ form a cycle in the Resource Allocation Graph.</span>",
                "<span style=\"display: inline;\">$P_3$ is deadlocked even though it does not lie on the cycle.</span>",
                "<span style=\"display: inline;\">In a single-instance Resource Allocation Graph, every deadlocked process must itself lie on a cycle.</span>",
                "<span style=\"display: inline;\">Terminating only $P_3$ is sufficient to remove the deadlock between the remaining processes.</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"544856\"></a><div itemprop=\"text\">Here P1 and P2 are forming a deadlock cycle, P3 is waiting for R1.<br/> So <br/> Option A: True<br/> Option B: False , even though P3 is waiting for R1 , it is not part of the deadlock cycle , its only waiting.<br/> Option C: True<br/> Option D: False , since P1 and P2 are forming a deadlock cycle , removing P3 will have no effect on the deadlock since it is not even involved in it.</div><br><br><small>Source: <a href=\"https://gateoverflow.in/544703/go-classes-dpp-gate-cs-operating-system-deadlock-beyond-cycle\" target=\"_blank\">GATE Overflow #544703</a></small></div>"
        },
        {
            "marks": 2,
            "neg": 0,
            "type": "MSQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Two processes $P_0$ and $P_1$ share two binary locks $L_1$ and $L_2$. Consider the following three independent programs.<br/><br/>$<br/>\\[\\begin{array}{|c|c|c|}<br/>\\hline<br/>\\text{Program I} &amp; \\text{Program II} &amp; \\text{Program III} \\\\<br/>\\hline<br/>\\[\\begin{array}{c|c}<br/><br/>P_0 &amp; P_1 \\\\<br/>\\[\\begin{array}{l}<br/>\\texttt{acquire}(L_1) \\\\<br/>\\texttt{acquire}(L_2) \\\\<br/>\\texttt{release}(L_1) \\\\<br/>\\texttt{release}(L_2)<br/>\\end{array}\\]<br/>&amp;<br/>\\[\\begin{array}{l}<br/>\\texttt{acquire}(L_1) \\\\<br/>\\texttt{acquire}(L_2) \\\\<br/>\\texttt{release}(L_1) \\\\<br/>\\texttt{release}(L_2)<br/>\\end{array}\\]<br/>\\end{array}\\]<br/>&amp;<br/>\\[\\begin{array}{c|c}<br/>P_0 &amp; P_1 \\\\<br/>\\[\\begin{array}{l}<br/>\\texttt{acquire}(L_1) \\\\<br/>\\texttt{acquire}(L_2) \\\\<br/>\\texttt{release}(L_1) \\\\<br/>\\texttt{release}(L_2)<br/>\\end{array}\\]<br/>&amp;<br/>\\[\\begin{array}{l}<br/>\\texttt{acquire}(L_2) \\\\<br/>\\texttt{acquire}(L_1) \\\\<br/>\\texttt{release}(L_1) \\\\<br/>\\texttt{release}(L_2)<br/>\\end{array}\\]<br/>\\end{array}\\]<br/>&amp;<br/>\\[\\begin{array}{c|c}<br/>P_0 &amp; P_1 \\\\<br/>\\[\\begin{array}{l}<br/>\\texttt{acquire}(L_1) \\\\<br/>\\texttt{acquire}(L_2) \\\\<br/>\\texttt{release}(L_1) \\\\<br/>\\texttt{release}(L_2)<br/>\\end{array}\\]<br/>&amp;<br/>\\[\\begin{array}{l}<br/>\\texttt{acquire}(L_2) \\\\<br/>\\texttt{release}(L_2) \\\\<br/>\\texttt{acquire}(L_1) \\\\<br/>\\texttt{release}(L_1)<br/>\\end{array}\\]<br/>\\end{array}\\] \\\\<br/>\\hline<br/>\\end{array}\\]<br/>$</p><p>Assume each process executes its own instructions in the order shown.</p><p>Which program(s) can lead to deadlock?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">Program I<br/></span>",
                "<span style=\"display: inline;\">Program II<br/></span>",
                "<span style=\"display: inline;\">Program III<br/></span>",
                "<span style=\"display: inline;\">All three</span>"
            ],
            "answer": [
                "A"
            ],
            "solution": "<div class=\"solution-content\"><a name=\"544853\"></a><div itemprop=\"text\">Program 1 : P0 locks L1 , when P1 tries to lock L1 it goes on waiting thus no deadlock<br/> Program 2: P0 locks L1 , P1 locks L2 , now P0 tries to get L2 while P1 tries to get L1 , both of which are already locked , thus both process will end up in a deadlock since both have only one lock and desire the other one to continue.<br/> Program 3: P0 locks L1 , P1 locks L2 , P0 goes on waiting to get L2 , P1 realeases L2, P0 gets L2 thus there is no deadlock here.<br/> <br/> </div><br><br><small>Source: <a href=\"https://gateoverflow.in/544701/go-classes-dpp-gate-cs-operating-system-deadlock-formation\" target=\"_blank\">GATE Overflow #544701</a></small></div>"
        },
        {
            "marks": 2,
            "neg": 0,
            "type": "MSQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"773\" data-start=\"655\">A contiguous $\\textbf{16}$ <strong>KB</strong> memory region is initially completely free. Memory is allocated from lower to higher addresses.</p><p data-end=\"815\" data-start=\"775\">The following operations occur in order:</p><p data-end=\"1071\" data-start=\"1018\">Adjacent free blocks are coalesced whenever possible.</p><p data-end=\"1147\" data-start=\"1073\">After these operations, four new allocation requests arrive in this order:</p><p data-end=\"1179\" data-start=\"1149\">$1$ KB, $3$ KB, $2$ KB, $5$ KB</p><p data-end=\"1293\" data-start=\"1181\">Consider <strong data-end=\"1228\" data-start=\"1190\">First Fit, Best Fit, and Worst Fit</strong> independently, starting from the same memory state after Step $8$.</p><p data-end=\"1341\" data-start=\"1295\">Which of the following statements are correct?</p><p><strong>Given Details:</strong></p><ul><li>Allocate $4$ KB to $P_1$</li><li>Allocate $2$ KB to $P_2$</li><li>Allocate $2$ KB to $P_3$</li><li>Allocate $3$ KB to $P_4$</li><li>Allocate $5$ KB to $P_5$</li><li>Deallocate $P_1$</li><li>Deallocate $P_3$</li><li>Deallocate $P_5$</li></ul></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">First Fit can satisfy all four new requests.</span>",
                "<span style=\"display: inline;\">Best Fit fails to satisfy the final $5$ KB request.</span>",
                "<span style=\"display: inline;\">Worst Fit fails to satisfy the final $5$ KB request.</span>",
                "<span style=\"display: inline;\">Immediately before the final $5$ KB request, the largest free hole is $5$ KB under all three policies.</span>"
            ],
            "answer": [
                "A"
            ],
            "solution": "<div class=\"solution-content\"><a name=\"544592\"></a><div itemprop=\"text\"><p data-end=\"1744\" data-start=\"1680\">After the first five allocations, memory is completely occupied:</p><p data-end=\"1783\" data-start=\"1746\">$[P_1:4][P_2:2][P_3:2][P_4:3][P_5:5]$</p><p data-end=\"1823\" data-start=\"1785\">After freeing $P_1$, $P_3$, and $P_5$:</p><p data-end=\"1886\" data-start=\"1825\">$[\\text{Free }4][P_2:2][\\text{Free }2][P_4:3][\\text{Free }5]$</p><p data-end=\"1918\" data-start=\"1888\">So the initial free holes are:</p><p data-end=\"1939\" data-start=\"1920\">$\\boxed{4,\\ 2,\\ 5}$</p><p data-end=\"1959\" data-section-id=\"4kmudj\" data-start=\"1946\"><br/><strong>First Fit</strong></p><p data-end=\"2003\" data-start=\"1961\">Request $1$ KB uses the first $4$ KB hole:</p><p data-end=\"2020\" data-start=\"2005\">$4\\rightarrow3$</p><p data-end=\"2033\" data-start=\"2022\">Free holes: $3,\\ 2,\\ 5$</p><p data-end=\"2091\" data-start=\"2048\">Request $3$ KB uses the first hole exactly: $2,\\ 5$</p><p data-end=\"2138\" data-start=\"2102\">Request $2$ KB uses the $2$ KB hole: $5$</p><p data-end=\"2186\" data-start=\"2145\">Finally, the $5$ KB request fits exactly.</p><p data-end=\"2240\" data-start=\"2188\">Therefore, First Fit satisfies <strong data-end=\"2239\" data-start=\"2218\">all four requests</strong>.</p><p data-end=\"2259\" data-start=\"2242\">So <strong data-end=\"2258\" data-start=\"2245\">A is true</strong>.</p><p data-end=\"2278\" data-section-id=\"3zmk0t\" data-start=\"2266\"><br/><strong>Best Fit</strong></p><p data-end=\"2291\" data-start=\"2280\">Start with:</p><p data-end=\"2304\" data-start=\"2293\">$4,\\ 2,\\ 5$</p><p data-end=\"2361\" data-start=\"2306\">Request $1$ KB uses the smallest suitable hole, $2$ KB:</p><p data-end=\"2374\" data-start=\"2363\">$4,\\ 1,\\ 5$</p><p data-end=\"2412\" data-start=\"2376\">Request $3$ KB uses the $4$ KB hole:</p><p data-end=\"2425\" data-start=\"2414\">$1,\\ 1,\\ 5$</p><p data-end=\"2463\" data-start=\"2427\">Request $2$ KB uses the $5$ KB hole:</p><p data-end=\"2476\" data-start=\"2465\">$1,\\ 1,\\ 3$</p><p data-end=\"2510\" data-start=\"2478\">Now the final request is $5$ KB.</p><p data-end=\"2538\" data-start=\"2512\">Total free memory is still</p><p data-end=\"2553\" data-start=\"2540\">$1+1+3=5$ KB,</p><p data-end=\"2602\" data-start=\"2555\">but the largest individual hole is only $3$ KB.</p><p data-end=\"2662\" data-start=\"2604\">Hence the request fails due to <strong data-end=\"2661\" data-start=\"2635\">external fragmentation</strong>.</p><p data-end=\"2681\" data-start=\"2664\">So <strong data-end=\"2680\" data-start=\"2667\">B is true</strong>.</p><p data-end=\"2701\" data-section-id=\"rmeo9c\" data-start=\"2688\"><br/><strong>Worst Fit</strong></p><p data-end=\"2714\" data-start=\"2703\">Start with:</p><p data-end=\"2727\" data-start=\"2716\">$4,\\ 2,\\ 5$</p><p data-end=\"2765\" data-start=\"2729\">Request $1$ KB uses the $5$ KB hole:</p><p data-end=\"2778\" data-start=\"2767\">$4,\\ 2,\\ 4$</p><p data-end=\"2824\" data-start=\"2780\">Request $3$ KB uses one of the $4$ KB holes:</p><p data-end=\"2837\" data-start=\"2826\">$1,\\ 2,\\ 4$</p><p data-end=\"2883\" data-start=\"2839\">Request $2$ KB uses the largest $4$ KB hole:</p><p data-end=\"2896\" data-start=\"2885\">$1,\\ 2,\\ 2$</p><p data-end=\"2947\" data-start=\"2898\">Now the final $5$ KB request cannot be allocated.</p><p data-end=\"2976\" data-start=\"2949\">Again, total free memory is</p><p data-end=\"2991\" data-start=\"2978\">$1+2+2=5$ KB,</p><p data-end=\"3032\" data-start=\"2993\">but there is no contiguous $5$ KB hole.</p><p data-end=\"3051\" data-start=\"3034\">So <strong data-end=\"3050\" data-start=\"3037\">C is true</strong>.<br/> </p><p data-end=\"3136\" data-start=\"3053\"><strong data-end=\"3067\" data-start=\"3053\">D is false</strong> because immediately before the final request, the largest holes are:</p><ul data-end=\"3196\" data-start=\"3138\"><li data-end=\"3157\" data-section-id=\"1bzlqof\" data-start=\"3138\">First Fit: $5$ KB<br/> </li><li data-end=\"3176\" data-section-id=\"1enotoz\" data-start=\"3158\">Best Fit: $3$ KB<br/> </li><li data-end=\"3196\" data-section-id=\"wou5lr\" data-start=\"3177\">Worst Fit: $2$ KB</li></ul></div><br><br><small>Source: <a href=\"https://gateoverflow.in/544591/go-classes-dpp-gate-cs-operating-system-allocation-with-deallocation\" target=\"_blank\">GATE Overflow #544591</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"9484\" data-start=\"9447\">Memory contains free holes, in order:</p><p data-end=\"9518\" data-start=\"9486\">$100,\\ 500,\\ 200,\\ 300,\\ 600$ KB</p><p data-end=\"9558\" data-start=\"9520\">Processes arrive, in order, requiring:</p><p data-end=\"9586\" data-start=\"9560\">$212,\\ 417,\\ 122,\\ 426$ KB</p><p data-end=\"9662\" data-start=\"9588\">For each policy, allocations stop if the next request cannot be satisfied.</p><p data-end=\"9703\" data-start=\"9664\">Which of the following correctly gives:</p><p data-end=\"9777\" data-start=\"9705\">$(\\text{number of successful requests},\\ \\text{largest remaining hole})$</p><p data-end=\"9830\" data-start=\"9779\">for First Fit, Best Fit and Worst Fit respectively?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">FF $=(3,300)$, BF $=(4,174)$, WF $=(3,300)$<br/></span>",
                "<span style=\"display: inline;\">FF $=(4,174)$, BF $=(3,300)$, WF $=(3,300)$<br/></span>",
                "<span style=\"display: inline;\">FF $=(3,288)$, BF $=(4,174)$, WF $=(4,266)$<br/></span>",
                "<span style=\"display: inline;\">FF $=(3,300)$, BF $=(4,88)$, WF $=(3,266)$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"544590\"></a><div itemprop=\"text\"><p data-end=\"10101\" data-section-id=\"1car6x0\" data-start=\"10089\"><strong>First Fit</strong></p><p data-end=\"10111\" data-start=\"10103\">Initial:</p><p data-end=\"10142\" data-start=\"10113\">$100,\\ 500,\\ 200,\\ 300,\\ 600$</p><p data-end=\"10176\" data-start=\"10144\">$212$ uses $500$, leaving $288$.</p><p data-end=\"10210\" data-start=\"10178\">$417$ uses $600$, leaving $183$.</p><p data-end=\"10258\" data-start=\"10212\">$122$ uses the $288$ remainder, leaving $166$.</p><p data-end=\"10279\" data-start=\"10260\">Free holes are now:</p><p data-end=\"10310\" data-start=\"10281\">$100,\\ 166,\\ 200,\\ 300,\\ 183$</p><p data-end=\"10337\" data-start=\"10312\">Request $426$ cannot fit.</p><p data-end=\"10342\" data-start=\"10339\">So, $\\boxed{FF=(3,300)}$</p><p data-end=\"10382\" data-section-id=\"4megou\" data-start=\"10371\"><br/><strong>Best Fit</strong></p><p data-end=\"10415\" data-start=\"10384\">$212$ uses $300$, leaving $88$.</p><p data-end=\"10448\" data-start=\"10417\">$417$ uses $500$, leaving $83$.</p><p data-end=\"10481\" data-start=\"10450\">$122$ uses $200$, leaving $78$.</p><p data-end=\"10515\" data-start=\"10483\">$426$ uses $600$, leaving $174$.</p><p data-end=\"10543\" data-start=\"10517\">All four requests succeed.</p><p data-end=\"10561\" data-start=\"10545\">Remaining holes:</p><p data-end=\"10589\" data-start=\"10563\">$100,\\ 83,\\ 78,\\ 88,\\ 174$</p><p data-end=\"10599\" data-start=\"10591\">Largest:</p><p data-end=\"10606\" data-start=\"10601\">$174$</p><p data-end=\"10618\" data-start=\"10608\">$\\boxed{\\therefore BF=(4,174)}$</p><p data-end=\"10659\" data-section-id=\"17r4a8j\" data-start=\"10647\"><br/><strong>Worst Fit</strong></p><p data-end=\"10693\" data-start=\"10661\">$212$ uses $600$, leaving $388$.</p><p data-end=\"10726\" data-start=\"10695\">$417$ uses $500$, leaving $83$.</p><p data-end=\"10760\" data-start=\"10728\">$122$ uses $388$, leaving $266$.</p><p data-end=\"10773\" data-start=\"10762\">Free holes:</p><p data-end=\"10803\" data-start=\"10775\">$100,\\ 83,\\ 200,\\ 300,\\ 266$</p><p data-end=\"10829\" data-start=\"10805\">The $426$ request fails.</p><p data-end=\"10854\" data-start=\"10831\">Largest remaining hole:</p><p data-end=\"10861\" data-start=\"10856\">$300$</p><p data-end=\"10868\" data-start=\"10863\">Thus, $\\boxed{WF=(3,300)}$</p><p data-end=\"10902\" data-start=\"10892\"><br/><strong>Answer : A</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/544589/go-classes-dpp-gate-cs-operating-system-dynamic-memory-allocation\" target=\"_blank\">GATE Overflow #544589</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"5256\" data-start=\"5201\">Assume the free-list initially contains, in this order:</p><p data-end=\"5271\" data-start=\"5258\">$1300,\\ 1200$</p><p data-end=\"5352\" data-start=\"5273\">Memory requests are allocated by splitting holes exactly to the requested size.</p><p data-end=\"5376\" data-start=\"5354\">We want two sequences:</p><p data-end=\"5569\" data-start=\"5531\">Which pair satisfies these conditions?</p><p><strong>Given Details:</strong></p><ul><li>$S_1$: First Fit fails, but Best Fit successfully satisfies all requests.</li><li>$S_2$: First Fit successfully satisfies all requests, but Best Fit fails.</li></ul></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$S_1=(1100,\\ 1250)$<br/>$S_2=(1100,\\ 200,\\ 1200)$</span>",
                "<span style=\"display: inline;\">$S_1=(1100,\\ 1200)$<br/>$S_2=(1100,\\ 100,\\ 1200)$</span>",
                "<span style=\"display: inline;\">$S_1=(1250,\\ 1100)$<br/>$S_2=(1200,\\ 1100)$</span>",
                "<span style=\"display: inline;\">$S_1=(1100,\\ 200,\\ 1200)$<br/>$S_2=(1100,\\ 1250)$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"544587\"></a><div itemprop=\"text\"><p data-end=\"5861\" data-section-id=\"vpy1ns\" data-start=\"5835\"><strong>Check $S_1=(1100,1250)$</strong></p><p data-end=\"5876\" data-section-id=\"4kmudj\" data-start=\"5863\"><strong>First Fit</strong></p><p data-end=\"5886\" data-start=\"5878\">Initial:</p><p data-end=\"5903\" data-start=\"5888\">$[1300,\\ 1200]$</p><p data-end=\"5941\" data-start=\"5905\">Allocate $1100$ from the first hole:</p><p data-end=\"5957\" data-start=\"5943\">$[200,\\ 1200]$</p><p data-end=\"5978\" data-start=\"5959\">Now request $1250$.</p><p data-end=\"6021\" data-start=\"5980\">Neither $200$ nor $1200$ is large enough.</p><p data-end=\"6046\" data-start=\"6023\">So First Fit <strong data-end=\"6045\" data-start=\"6036\">fails</strong>.</p><p data-end=\"6065\" data-section-id=\"3zmk0t\" data-start=\"6053\"><br/><strong>Best Fit</strong></p><p data-end=\"6118\" data-start=\"6067\">For $1100$, the smallest sufficient hole is $1200$:</p><p data-end=\"6134\" data-start=\"6120\">$[1300,\\ 100]$</p><p data-end=\"6171\" data-start=\"6136\">Now $1250$ fits in the $1300$ hole.</p><p data-end=\"6198\" data-start=\"6173\">So Best Fit <strong data-end=\"6197\" data-start=\"6185\">succeeds</strong>.</p><p data-end=\"6217\" data-start=\"6200\">Thus $S_1$ works.</p><p> </p><p data-end=\"6254\" data-section-id=\"m3rh0w\" data-start=\"6224\"><br/><strong>Check $S_2=(1100,200,1200)$</strong></p><p data-end=\"6269\" data-section-id=\"4kmudj\" data-start=\"6256\"><strong>First Fit</strong></p><p data-end=\"6290\" data-start=\"6271\">$1100$ uses $1300$:</p><p data-end=\"6306\" data-start=\"6292\">$[200,\\ 1200]$</p><p data-end=\"6343\" data-start=\"6308\">$200$ consumes the remaining $200$:</p><p data-end=\"6353\" data-start=\"6345\">$[1200]$</p><p data-end=\"6380\" data-start=\"6355\">$1200$ then fits exactly.</p><p data-end=\"6405\" data-start=\"6382\">First Fit <strong data-end=\"6404\" data-start=\"6392\">succeeds</strong>.<br/> </p><p data-end=\"6424\" data-section-id=\"3zmk0t\" data-start=\"6412\"><strong>Best Fit</strong></p><p data-end=\"6454\" data-start=\"6426\">$1100$ uses the $1200$ hole:</p><p data-end=\"6470\" data-start=\"6456\">$[1300,\\ 100]$</p><p data-end=\"6499\" data-start=\"6472\">$200$ uses the $1300$ hole:</p><p data-end=\"6515\" data-start=\"6501\">$[1100,\\ 100]$</p><p data-end=\"6536\" data-start=\"6517\">Now request $1200$.</p><p data-end=\"6576\" data-start=\"6538\">Largest available hole is only $1100$.</p><p data-end=\"6597\" data-start=\"6578\">Best Fit <strong data-end=\"6596\" data-start=\"6587\">fails</strong>.</p><p data-end=\"6609\" data-start=\"6599\"><br/><strong>Answer : A</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/544586/go-classes-dpp-gate-cs-operating-system-first-vs-best-fit\" target=\"_blank\">GATE Overflow #544586</a></small></div>"
        },
        {
            "marks": 2,
            "neg": 0,
            "type": "MSQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"3357\" data-start=\"3305\">Free holes, in increasing memory-address order, are:</p><p data-end=\"3398\" data-start=\"3359\">$10,\\ 4,\\ 20,\\ 18,\\ 7,\\ 9,\\ 12,\\ 15$ KB</p><p data-end=\"3430\" data-start=\"3400\">Three segment requests arrive:</p><p data-end=\"3448\" data-start=\"3432\">$12,\\ 10,\\ 9$ KB</p><p data-end=\"3540\" data-start=\"3450\">For Next Fit, searching for the next request resumes from where the previous search ended.</p><p data-end=\"3571\" data-start=\"3542\">Which statements are correct?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">First Fit selects holes of original sizes $20,\\ 10,\\ 18$ KB.<br/></span>",
                "<span style=\"display: inline;\">Best Fit selects holes of original sizes $12,\\ 10,\\ 9$ KB.<br/></span>",
                "<span style=\"display: inline;\">Worst Fit selects holes $20,\\ 18,\\ 12$ KB.<br/></span>",
                "<span style=\"display: inline;\">Next Fit selects holes $20,\\ 18,\\ 9$ KB.</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"544585\"></a><div itemprop=\"text\"><p data-end=\"3874\" data-section-id=\"4kmudj\" data-start=\"3861\"><strong>First Fit</strong></p><p data-end=\"3885\" data-start=\"3876\">For $12$,</p><p data-end=\"3930\" data-start=\"3887\">$10$ and $4$ are too small, so choose $20$.</p><p data-end=\"3941\" data-start=\"3932\">For $10$,</p><p data-end=\"4018\" data-start=\"3943\">Search restarts from the beginning. The first $10$ KB hole is an exact fit.</p><p data-end=\"4028\" data-start=\"4020\">For $9$,</p><p data-end=\"4091\" data-start=\"4030\">The first hole large enough is now the original $18$ KB hole.</p><p data-end=\"4096\" data-start=\"4093\">So, $\\boxed{20,\\ 10,\\ 18}$</p><p data-end=\"4135\" data-start=\"4122\">A is correct.</p><p data-end=\"4154\" data-section-id=\"3zmk0t\" data-start=\"4142\"><br/><strong>Best Fit</strong></p><p data-end=\"4210\" data-start=\"4156\">For each request, choose the smallest sufficient hole:</p><p data-end=\"4229\" data-start=\"4212\">$12\\rightarrow12$</p><p data-end=\"4248\" data-start=\"4231\">$10\\rightarrow10$</p><p data-end=\"4265\" data-start=\"4250\">$9\\rightarrow9$</p><p data-end=\"4270\" data-start=\"4267\">So, $\\boxed{12,\\ 10,\\ 9}$</p><p data-end=\"4308\" data-start=\"4295\">B is correct.</p><p data-end=\"4328\" data-section-id=\"rmeo9c\" data-start=\"4315\"><br/><strong>Worst Fit</strong></p><p data-end=\"4370\" data-start=\"4330\">Request $12$ uses the largest hole $20$.</p><p data-end=\"4400\" data-start=\"4372\">Request $10$ then uses $18$.</p><p data-end=\"4424\" data-start=\"4402\">Request $9$ uses $15$.</p><p data-end=\"4429\" data-start=\"4426\">So, $\\boxed{20,\\ 18,\\ 15}$</p><p data-end=\"4476\" data-start=\"4455\">Therefore C is false.</p><p data-end=\"4495\" data-section-id=\"65oh2y\" data-start=\"4483\"><br/><strong>Next Fit</strong></p><p data-end=\"4595\" data-start=\"4497\">It behaves like First Fit, except the next search continues from the previous allocation position.</p><p data-end=\"4618\" data-start=\"4597\">The sequence becomes, $\\boxed{20,\\ 18,\\ 9}$</p><p data-end=\"4666\" data-start=\"4643\">Therefore D is correct.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/544584/go-classes-dpp-gate-cs-operating-system-memory-placement-policies\" target=\"_blank\">GATE Overflow #544584</a></small></div>"
        },
        {
            "marks": 2,
            "neg": 0,
            "type": "MSQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"1166\" data-start=\"1100\">The free memory contains three holes, in increasing address order:</p><p data-end=\"1189\" data-start=\"1168\">$300,\\ 200,\\ 250$ KiB</p><p data-end=\"1241\" data-start=\"1191\">The following allocation requests arrive in order:</p><p data-end=\"1276\" data-start=\"1243\">$100,\\ 150,\\ 200,\\ 200,\\ 100$ KiB</p><p data-end=\"1370\" data-start=\"1278\">Whenever a hole is split, the remaining portion stays at the same position in the free-list.</p><p data-end=\"1418\" data-start=\"1372\">Which of the following statements are correct?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">Under First Fit, the first four requests are satisfied, but the last $100$ KiB request fails.<br/></span>",
                "<span style=\"display: inline;\">Under Best Fit, all five requests are successfully allocated.<br/></span>",
                "<span style=\"display: inline;\">Under Worst Fit, all five requests are successfully allocated.<br/></span>",
                "<span style=\"display: inline;\">Under First Fit, when the final request fails, exactly $100$ KiB of free memory still exists.</span>"
            ],
            "answer": [
                "A"
            ],
            "solution": "<div class=\"solution-content\"><a name=\"544581\"></a><div itemprop=\"text\"><p data-end=\"1830\" data-section-id=\"4kmudj\" data-start=\"1817\"><strong>First Fit</strong></p><p data-end=\"1838\" data-start=\"1832\">Start:</p><p data-end=\"1859\" data-start=\"1840\">$[300,\\ 200,\\ 250]$</p><p data-end=\"1875\" data-start=\"1861\">Request $100$:</p><p data-end=\"1896\" data-start=\"1877\">$[200,\\ 200,\\ 250]$</p><p data-end=\"1933\" data-start=\"1898\">Request $150$ uses the first $200$:</p><p data-end=\"1953\" data-start=\"1935\">$[50,\\ 200,\\ 250]$</p><p data-end=\"1969\" data-start=\"1955\">Request $200$:</p><p data-end=\"1983\" data-start=\"1971\">$[50,\\ 250]$</p><p data-end=\"2015\" data-start=\"1985\">Next request $200$ uses $250$:</p><p data-end=\"2028\" data-start=\"2017\">$[50,\\ 50]$</p><p data-end=\"2065\" data-start=\"2030\">Now the final request is $100$ KiB.</p><p data-end=\"2085\" data-start=\"2067\">Total free memory:</p><p data-end=\"2102\" data-start=\"2087\">$50+50=100$ KiB</p><p data-end=\"2145\" data-start=\"2104\">But neither individual hole is $100$ KiB.</p><p data-end=\"2206\" data-start=\"2147\">So the request <strong data-end=\"2205\" data-start=\"2162\">fails because of external fragmentation</strong>.</p><p data-end=\"2238\" data-start=\"2208\">Hence <strong data-end=\"2237\" data-start=\"2214\">A and D are correct</strong>.</p><p data-end=\"2238\" data-start=\"2208\"> </p><p data-end=\"2257\" data-section-id=\"3zmk0t\" data-start=\"2245\"><strong>Best Fit</strong></p><p data-end=\"2265\" data-start=\"2259\">Start:</p><p data-end=\"2286\" data-start=\"2267\">$[300,\\ 200,\\ 250]$</p><p data-end=\"2310\" data-start=\"2288\">$100$ goes into $200$:</p><p data-end=\"2331\" data-start=\"2312\">$[300,\\ 100,\\ 250]$</p><p data-end=\"2355\" data-start=\"2333\">$150$ goes into $250$:</p><p data-end=\"2376\" data-start=\"2357\">$[300,\\ 100,\\ 100]$</p><p data-end=\"2400\" data-start=\"2378\">$200$ goes into $300$:</p><p data-end=\"2421\" data-start=\"2402\">$[100,\\ 100,\\ 100]$</p><p data-end=\"2466\" data-start=\"2423\">The next $200$ request cannot be satisfied.</p><p data-end=\"2486\" data-start=\"2468\">So <strong data-end=\"2485\" data-start=\"2471\">B is false</strong>.</p><p data-end=\"2486\" data-start=\"2468\"> </p><p data-end=\"2506\" data-section-id=\"rmeo9c\" data-start=\"2493\"><strong>Worst Fit</strong></p><p data-end=\"2540\" data-start=\"2508\">$100$ uses $300$, leaving $200$.</p><p data-end=\"2574\" data-start=\"2542\">$150$ uses $250$, leaving $100$.</p><p data-end=\"2627\" data-start=\"2576\">The two $200$ requests consume the two $200$ holes.</p><p data-end=\"2687\" data-start=\"2629\">The final $100$ request consumes the remaining $100$ hole.</p><p data-end=\"2718\" data-start=\"2689\">So all five requests succeed.</p><p data-end=\"2747\" data-start=\"2720\">Therefore <strong data-end=\"2746\" data-start=\"2730\">C is correct</strong>.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/544580/go-classes-dpp-gate-cs-operating-system-fragmentation\" target=\"_blank\">GATE Overflow #544580</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"3950\" data-start=\"3880\">A system makes an average of $2$ main-memory accesses per instruction.</p><p data-end=\"4007\" data-start=\"3952\">Whenever a page fault occurs, it causes an overhead of $40$ milliseconds</p><p data-end=\"4145\" data-start=\"4028\">What is the maximum allowable page-fault rate if the average instruction delay caused by page faults must not exceed $0.4$ microseconds per instruction? (<em>Ignore all other overheads.)</em></p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$5\\times10^{-6}$<br/></span>",
                "<span style=\"display: inline;\">$1\\times10^{-5}$<br/></span>",
                "<span style=\"display: inline;\">$5\\times10^{-5}$<br/></span>",
                "<span style=\"display: inline;\">$1\\times10^{-4}$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"543740\"></a><div itemprop=\"text\"><p data-end=\"4379\" data-start=\"4353\">Each instruction performs: $2$ memory accesses.</p><p data-end=\"4514\" data-start=\"4404\">If the page-fault probability per memory access is $p$, the expected number of page faults per instruction is: $2p$</p><p data-end=\"4545\" data-start=\"4522\">Each page fault causes: $40\\text{ ms}$ of overhead.</p><p data-end=\"4632\" data-start=\"4577\">Therefore, average page-fault delay per instruction is: $2p\\times40\\text{ ms}$ $=80p\\text{ ms}$</p><p data-end=\"4699\" data-start=\"4676\">The permitted delay is: $0.4\\text{ microseconds}$</p><p data-end=\"4755\" data-start=\"4728\">Convert it to milliseconds: $0.4\\text{ microseconds}=0.0004\\text{ ms}$</p><p data-end=\"4811\" data-start=\"4801\">$\\therefore 80p\\leq0.0004$</p><p data-end=\"4854\" data-start=\"4830\">$\\Rightarrow p\\leq\\frac{0.0004}{80}$</p><p data-end=\"4871\" data-start=\"4856\">$\\Rightarrow p\\leq0.000005$</p><p data-end=\"4894\" data-start=\"4873\">$\\Rightarrow \\boxed{p\\leq5\\times10^{-6}}$</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/543739/go-classes-dpp-gate-cs-operating-system-page-fault-rate\" target=\"_blank\">GATE Overflow #543739</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"2712\" data-start=\"2523\">If an instruction takes $p$ microseconds and a page fault takes an additional $q$ microseconds, the effective instruction time if, on average, a page fault occurs every $r$ instructions is:</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\dfrac{p+q}{r}$<br/></span>",
                "<span style=\"display: inline;\">$p+(q\\times r)$<br/></span>",
                "<span style=\"display: inline;\">$p+\\dfrac{q}{r}$<br/></span>",
                "<span style=\"display: inline;\">$(p+q)\\times r$</span>"
            ],
            "answer": "C",
            "solution": "<div class=\"solution-content\"><a name=\"543434\"></a><div itemprop=\"text\"><p data-end=\"2886\" data-start=\"2849\">Normally, every instruction requires: $p$ microseconds.</p><p data-end=\"2953\" data-start=\"2908\">One page fault occurs every $r$ instructions.</p><p data-end=\"3024\" data-start=\"2955\">Therefore, the average additional page-fault cost per instruction is: $\\dfrac{q}{r}$</p><p data-end=\"3047\" data-start=\"3041\">Hence:</p><p data-end=\"3098\" data-start=\"3049\">$\\text{Effective instruction time}=p+\\dfrac{q}{r}$</p><p data-end=\"3133\" data-start=\"3100\"><strong>Answer : C</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/543433/go-classes-dpp-gate-cs-operating-system-page-fault-time\" target=\"_blank\">GATE Overflow #543433</a></small></div>"
        }
    ]
});

registerTest({
    "name": "DPP 22 - Operating System (Deadlocks - Part 4)",
    "testLabel": "DPP 22",
    "testType": "DPP",
    "bracket": "Deadlocks - Part 4",
    "subject": "os",
    "series": "cse-dpp-2027",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 14,
    "topicsCovered": "Deadlocks (Practice Set 4)",
    "questions": [
        {
            "marks": 2,
            "neg": 0,
            "type": "MSQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><section data-testid=\"conversation-turn-10\" data-turn=\"assistant\" data-turn-id=\"request-WEB:c072c26a-a164-48e0-9280-778d9121035d-4\" data-turn-id-container=\"request-WEB:c072c26a-a164-48e0-9280-778d9121035d-4\" dir=\"auto\"><p data-end=\"90\" data-start=\"0\">Which of the following techniques can prevent deadlock in the dining-philosophers problem?</p></section></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">Allow at most four of five philosophers to attempt to acquire chopsticks simultaneously.<br/></span>",
                "<span style=\"display: inline;\">Require some philosophers to acquire the left chopstick first and others to acquire the right chopstick first.<br/></span>",
                "<span style=\"display: inline;\">Allow a philosopher to acquire both required chopsticks atomically.<br/></span>",
                "<span style=\"display: inline;\">Require every philosopher to acquire the left chopstick first and then wait for the right chopstick.</span>"
            ],
            "answer": [
                "A"
            ],
            "solution": "<div class=\"solution-content\"><a name=\"543066\"></a><div itemprop=\"text\"><p data-path-to-node=\"0\"><b data-index-in-node=\"0\" data-path-to-node=\"0\">Ans is : A, B, C</b></p><ul data-path-to-node=\"2\"><li><p data-path-to-node=\"2,0,0\"><b data-index-in-node=\"0\" data-path-to-node=\"2,0,0\">A (Max 4 philosophers at once):</b> It prevents circular wait by ensuring at least one philosopher can always pick up both chopsticks and eat.</p></li><li><p data-path-to-node=\"2,1,0\"><b data-index-in-node=\"0\" data-path-to-node=\"2,1,0\">B (Asymmetric pickup order):</b> Breaking the uniform \"left-first\" rule eliminates the circular dependency needed for deadlock.</p></li><li><p data-path-to-node=\"2,2,0\"><b data-index-in-node=\"0\" data-path-to-node=\"2,2,0\">C (Atomic pickup):</b> A philosopher only picks up chopsticks when both are available, avoiding hold-and-wait.</p></li></ul><ul data-path-to-node=\"4\"><li><p data-path-to-node=\"4,0,0\"><b data-index-in-node=\"0\" data-path-to-node=\"4,0,0\">D is incorrect:</b> If everyone grabs their left chopstick simultaneously, everyone gets stuck waiting for the right one, causing a deadlock.</p></li></ul></div><br><br><small>Source: <a href=\"https://gateoverflow.in/542692/go-classes-dpp-gate-cs-operating-system-dining-philosopher\" target=\"_blank\">GATE Overflow #542692</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>The actual CPU bursts of a process begin as: $$6, 4, 6, 4, 13, \\ldots$$</p><p>The initial predicted CPU burst is: $\\tau_0 = 10$ </p><p>Using exponential averaging with: </p><p>$$\\alpha = 0.7$$</p><p>What is the predicted CPU burst length after incorporating the first three actual CPU bursts? </p><p>Use: $$\\tau_{n+1} = \\alpha t_n + (1-\\alpha)\\tau_n$$ <em>(Round the answer to two decimal places.)</em></p></div></span>",
            "image": "",
            "options": [],
            "answer": "5.69",
            "solution": "<div class=\"solution-content\"><a name=\"540615\"></a><div itemprop=\"text\"><p>Initially, $\\tau_0 = 10$ </p><p>For the first actual burst, </p><p>$t_0 = 6$ </p><p>$\\therefore \\tau_1 = 0.7(6) + 0.3(10)$ $= 4.2 + 3$ $= 7.2$ </p><p>For the second actual burst, $t_1 = 4$ </p><p>$\\therefore \\tau_2 = 0.7(4) + 0.3(7.2)$ $= 2.8 + 2.16$ $= 4.96$ </p><p>For the third actual burst, </p><p>$t_2 = 6$ </p><p>$\\therefore \\tau_3 = 0.7(6) + 0.3(4.96)$ $= 4.2 + 1.488= 5.688 \\approx \\boxed{5.69}$ </p><p><br/><strong>Answer </strong>$: 5.69$</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/540613/go-classes-dpp-gate-cs-operating-system-cpu-burst\" target=\"_blank\">GATE Overflow #540613</a></small></div>"
        },
        {
            "marks": 2,
            "neg": 0,
            "type": "MSQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Which of the following statements is/are <strong>TRUE</strong> regarding Paging and Segmentation?</p><p> </p><p><strong>Given Details:</strong></p><ul><li><strong>PAGING</strong> eliminates external fragmentation but can lead to internal fragmentation.</li><li><strong>SEGMENTATION</strong> suffers from external fragmentation because segments are of variable length.</li><li><strong>THRASHING</strong> occurs when the sum of the working sets of all active processes exceeds the total physical memory available.</li></ul></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$1$ AND $2$ ONLY</span>",
                "<span style=\"display: inline;\">$2$ AND $3$ ONLY</span>",
                "<span style=\"display: inline;\">$1$ AND $3$ ONLY</span>",
                "<span style=\"display: inline;\">$1, 2,$ AND $3$</span>"
            ],
            "answer": [
                "A"
            ],
            "solution": "<div class=\"solution-content\"><a name=\"523533\"></a><div itemprop=\"text\"><ol><li><strong>TRUE:</strong> Paging uses fixed-size blocks (pages/frames), so there are no \"holes\" between them (no external fragmentation). However, if a process doesn't perfectly fill its last page, memory is wasted (internal fragmentation).<br/> </li><li><strong>TRUE: </strong>Segmentation uses variable-sized segments based on logical modules. As segments are loaded and deleted, small unusable gaps form between allocated segments (external fragmentation).<br/> </li><li><strong>TRUE:</strong> Thrashing is a state of high paging activity. It occurs when the system overcommits memory such that $\\sum \\text{Working Sets} &gt; \\text{Total Physical RAM}$, causing the CPU to spend nearly all its time swapping pages rather than executing instructions.</li></ol></div><br><br><small>Source: <a href=\"https://gateoverflow.in/523532/go-classes-dpp-os-memory-management\" target=\"_blank\">GATE Overflow #523532</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>A system has $4$ processes $(P_0$ through $P_3)$ and $3$ resource types $(R_1, R_2, R_3)$. The current state is as follows:</p><p>\\[<br/>\\begin{array}{|l|l|l|}<br/>\\hline<br/>\\text{Process} &amp; \\text{Allocation }(R_1, R_2, R_3) &amp; \\text{Max Demand }(R_1, R_2, R_3) \\\\<br/>\\hline<br/>P_0 &amp; (1, 0, 1) &amp; (4, 3, 3) \\\\<br/>\\hline<br/>P_1 &amp; (1, 1, 2) &amp; (2, 2, 2) \\\\<br/>\\hline<br/>P_2 &amp; (1, 0, 3) &amp; (1, 1, 3) \\\\<br/>\\hline<br/>P_3 &amp; (2, 0, 0) &amp; (3, 3, 1) \\\\<br/>\\hline<br/>\\end{array}<br/>\\]<br/>The Available resource vector is $(2,1,0)$. Which of the following is a valid safe sequence?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$P_1, P_2, P_0, P_3$<br/></span>",
                "<span style=\"display: inline;\">$P_2, P_1, P_0, P_3$<br/></span>",
                "<span style=\"display: inline;\">$P_1, P_2, P_3, P_0$<br/></span>",
                "<span style=\"display: inline;\">There is no safe sequence</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"520980\"></a><div itemprop=\"text\"><p><strong>1. Need Matrix </strong>$(Need = Max - Allocation)$</p><ul><li>$P_0:(4-1,3-0,3-1)=(3,3,2)$<br/> </li><li>$P_1:(2-1,2-1,2-2)=(1,1,0)$<br/> </li><li>$P_2:(1-1,1-0,3-3)=(0,1,0)$<br/> </li><li>$P_3:(3-2,3-0,1-0)=(1,3,1)$<br/> </li></ul><p><strong>2. Simulation (Initial Available:</strong> $\\mathbf{2, 1, 0}$<strong>)</strong></p><ul><li><strong>Step 1:</strong> Can $P_1$ run? Yes $(1,1,0) \\leq(2,1,0)$.<br/> <ul><li>$P_1$ finishes, Available becomes: $(2,1,0)+(1,1,2)=(\\mathbf{3}, \\mathbf{2}, \\mathbf{2})$.<br/> </li></ul></li><li><strong>Step 2: </strong>Can $P_2$ run? Yes $(0,1,0) \\leq(3,2,2)$.<br/> <ul><li>$P_2$ finishes, Available becomes: $(3,2,2)+(1,0,3)=(\\mathbf{4 , 2 , 5})$.<br/> </li></ul></li><li><strong>Step 3:</strong> Check remaining processes:<br/> <ul><li>$\\quad P_0$ needs $(3,3,2)$. Available $(4,2,5)$. <strong>No</strong> (Insufficient $R_2$ ).<br/> </li><li>$P_3$ needs $(1,3,1)$. Available $(4,2,5)$. <strong>No</strong> (Insufficient $R_2$ ).<br/> </li></ul></li></ul><p>Since $P_0$ and $P_3$ cannot be satisfied even after all other processes release their resources, the system is in an unsafe state.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/520979/go-classes-dpp-os-bankers-algo\" target=\"_blank\">GATE Overflow #520979</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>A system has $3$ resource types $(R_1, R_2, R_3)$ with total instances $(10,5,7)$. The current state is as follows:</p><p>What is the current <strong>Available</strong> vector, and is the system in a safe state?</p><p><strong>Given Details:</strong></p><ul><li><strong>Allocated:</strong> $P_1(0,1,0), P_2(2,0,0), P_3(3,0,2)$</li><li><strong>Max Need: </strong>$P_1(7,5,3), P_2(3,2,2), P_3(9,0,2)$</li></ul></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">AVAILABLE$: ( 5,4,5);$ SYSTEM IS SAFE</span>",
                "<span style=\"display: inline;\">AVAILABLE$: (5, 4, 5);$ SYSTEM IS NOT SAFE</span>",
                "<span style=\"display: inline;\">AVAILABLE$: (10, 5, 7);$ SYSTEM IS SAFE</span>",
                "<span style=\"display: inline;\">AVAILABLE$: (5,5,5);$ SYSTEM IS NOT SAFE</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"520731\"></a><div itemprop=\"text\">using bankers algorithm<br/> we can allocate initial available resources to p2 and then to any of processes<br/> hence system is in safe state with available resouces 5 4 5</div><br><br><small>Source: <a href=\"https://gateoverflow.in/520700/go-classes-dpp-os-bankers-algo\" target=\"_blank\">GATE Overflow #520700</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider a system with three processes $P_1, P_2, P_3$ and three resource types $R_1, R_2, R_3$. Each resource type has <strong>one instance</strong>. The current allocation state is as follows:</p><p>A new request arrives: $P_3$ <strong>requests</strong> $R_1$. Which of the following statements is <strong>TRUE</strong>?</p><p><strong>Given Details:</strong></p><ul><li>$P_1$ is holding $R_1$ and requesting $R_2$.</li><li>$P_2$ is holding $R_2$ and requesting $R_3$.</li><li>$P_3$ is holding $R_3$.</li></ul></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">The system is in a safe state, and no deadlock occurs.</span>",
                "<span style=\"display: inline;\">The system is in a deadlock state involving $P_1, P_2$, and $P_3$.</span>",
                "<span style=\"display: inline;\">Only $P_1$ and $P_2$ are in a deadlock.</span>",
                "<span style=\"display: inline;\">The system is in an unsafe state, but deadlock can be avoided if $P_3$ releases $R_3$.</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"518818\"></a><div itemprop=\"text\"><p>In a Resource Allocation Graph, if every resource type has only <strong>one instance</strong>, a <strong>cycle is both a necessary and sufficient condition</strong> for deadlock.</p><ul><li>$P_1$ is waiting for $R_2$, which is held by $P_2$.<br/> </li><li>$P_2$ is waiting for $R_3$, which is held by $P_3$.<br/> </li><li>$P_3$ is now waiting for $R_1$, which is held by $P_1$.</li></ul><p><br/>This creates the following directed cycle:</p><p>$$<br/>P_1 \\rightarrow R_2 \\rightarrow P_2 \\rightarrow R_3 \\rightarrow P_3 \\rightarrow R_1 \\rightarrow P_1<br/>$$<br/><strong>Conclusion:</strong> Every process in the cycle is waiting for a resource held by another process in the cycle. Since there are no other instances available to break the chain, the system is in a deadlock state involving all three processes.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/518817/go-classes-dpp-os-rag\" target=\"_blank\">GATE Overflow #518817</a></small></div>"
        },
        {
            "marks": 2,
            "neg": 0,
            "type": "MSQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>A system has $3$ resource types $(R1, R2,$ and $R3)$ with $10, 5,$ and $7$ instances respectively. The following table shows the current allocation and maximum requirements for four processes $(P 0$ through $P 3):$</p><p>\\[<br/>\\begin{array}{|l|l|l|}<br/>\\hline<br/>\\textbf{Process} &amp; \\textbf{Allocation (R1, R2, R3)} &amp; \\textbf{Max Demand (R1, R2, R3)} \\\\<br/>\\hline<br/>P0 &amp; (0,1,0) &amp; (7,5,3) \\\\<br/>\\hline<br/>P1 &amp; (2,0,0) &amp; (3,2,2) \\\\<br/>\\hline<br/>P2 &amp; (3,0,2) &amp; (9,0,2) \\\\<br/>\\hline<br/>P3 &amp; (2,1,1) &amp; (2,2,2) \\\\<br/>\\hline<br/>\\end{array}<br/>\\]<br/><br/><strong>Which of the following statement(s) is/are TRUE?</strong></p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">The current <strong>Available</strong> resource vector is $(3,3,4)$.<br/></span>",
                "<span style=\"display: inline;\">The <strong>Need</strong> matrix for process $P 0$ is $(7,4,3)$.<br/></span>",
                "<span style=\"display: inline;\">The system is currently in a <strong>Safe State</strong>, and $P 1$ can be the first process in a safe sequence.<br/></span>",
                "<span style=\"display: inline;\">If a request from $P 1$ arrives for $(1,0,2)$, the request can be granted immediately without leaving the safe state.</span>"
            ],
            "answer": [
                "A"
            ],
            "solution": "<div class=\"solution-content\"><a name=\"516263\"></a><div itemprop=\"text\"><p><strong>Check Available (A):</strong></p><ul><li>Total Allocated: $(0+2+3+2,1+0+0+1,0+0+2+1)=(7,2,3)$.<br/> </li><li>Available $=$ Total $-$ Allocated $=(10-7,5-2,7-3)=(\\mathbf{3}, \\mathbf{3}, \\mathbf{4})$. <strong>(A) is TRUE.</strong><br/> </li></ul><p><strong>Check Need for $\\mathbf{P0}$ (B):</strong></p><ul><li>Need $=$ Max - Allocation $=(7-0,5-1,3-0)=\\mathbf{(7,4,3)}$. <strong>(B) is TRUE.</strong><br/> </li></ul><p><strong>Check Safe Sequence (C):</strong><br/><br/>Safe sequence$: P1 \\rightarrow P3 \\rightarrow P0 \\rightarrow P2$<br/><br/>C is also True<br/><br/><strong>Check Request (D):</strong></p><ul><li>If $P1$ requests $(1,0,2)$, the new Available would be $(3-1,3-0,4-2)= (2,3,2)$.<br/> </li><li>We then check if a safe sequence still exists. Since $P1$'s remaining need would be $(0,2,0)$ and $P3$'s need is $(0,1,1)$, both can still be satisfied by the new available vector. <strong>(D) is TRUE.</strong></li></ul></div><br><br><small>Source: <a href=\"https://gateoverflow.in/516262/go-classes-dpp-os-bankers-algo\" target=\"_blank\">GATE Overflow #516262</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>In a multi-processing operating system, deadlock prevention is implemented using a prioritybased timestamping scheme. Every process is assigned a unique timestamp when it enters the system. If a process is killed and restarted, it retains its <strong>original</strong> timestamp.</p><p data-pm-slice=\"1 1 []\">Assume that every process that is not killed eventually completes its execution and releases all resources it holds, and every killed process is eventually restarted.</p><p>Let $P_{\\text {req }}$ be a process requesting a resource $R$, and $P_{\\text {hold }}$ be the process currently holding resource $R$. Let $T\\left(P_{r c q}\\right)$ and $T\\left(P_{\\text {hold }}\\right)$ represent their respective timestamps (where a smaller timestamp indicates an older process).</p><p>The system uses the following algorithm to decide whether a process should wait or be killed:</p><pre class=\"prettyprint linenums lang-c_cpp\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"4\">if T(Preq) &gt; T(Phold) then kill Preq else wait</pre></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">THE SCHEME IS DEADLOCK-FREE, BUT NOT STARVATION-FREE<br/></span>",
                "<span style=\"display: inline;\">THE SCHEME IS NOT DEADLOCK-FREE, BUT STARVATION-FREE<br/></span>",
                "<span style=\"display: inline;\">THE SCHEME IS NEITHER DEADLOCK-FREE NOR STARVATION-FREE<br/></span>",
                "<span style=\"display: inline;\">THE SCHEME IS BOTH DEADLOCK-FREE AND STARVATION-FREE</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"511086\"></a><div itemprop=\"text\">This scheme is the classic wait–die deadlock-prevention algorithm:<br/> <br/> <br/> If the requesting process is younger (has a larger timestamp) than the holder → it is killed.<br/> <br/> <br/> If the requesting process is older (smaller timestamp) → it is allowed to wait.<br/> <br/> <br/> Why it is deadlock-free<br/> A process is allowed to wait only if it is older than the one holding the resource.<br/> Therefore, in the wait-for graph, edges always go from older → younger.<br/> Since timestamps never change and “older than” is a strict ordering, cycles cannot form, and hence deadlock cannot occur.<br/> Why it is not starvation-free<br/> A young process may repeatedly be killed whenever it conflicts with an older one.<br/> Because the problem states:<br/> <br/> If a process is killed and restarted, it retains its original timestamp.<br/> <br/> it remains young forever, so it can be aborted indefinitely, i.e., starve.<br/> ✅ Correct option:<br/> THE SCHEME IS DEADLOCK-FREE, BUT NOT STARVATION-FREE</div><br><br><small>Source: <a href=\"https://gateoverflow.in/510800/go-classes-dpp-os-deadlock\" target=\"_blank\">GATE Overflow #510800</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>In a system, there are three types of resources$: \\mathbf{R1}$, $\\mathbf{R2}$, and $\\mathbf{R3}$. Four processes $\\mathbf{P0}$, $\\mathbf{P1}$, $\\mathbf{P2}$, and $\\mathbf{P3}$ execute concurrently. The processes have declared their maximum resource requirements and their current allocations as shown in the tables below.</p><p>Consider a state of the system where the currently available resources are: <strong>Available</strong>$\\mathbf{: [R1: 2, R2: 1, R3: 0]}$<br/> </p><p><strong>Resource Matrices</strong></p><p>\\[\\begin{array}{ccc}<br/>\\text { Process } &amp; \\text { Allocation (R1 R2 R3) } &amp; \\text { Max (R1 R2 R3) } \\\\<br/>\\textbf{ P0 } &amp; 0~1~0 &amp; 7~5~3 \\\\<br/>\\textbf { P1 } &amp; 2~0~0 &amp; 3~2~2 \\\\<br/>\\textbf { P2 } &amp; 3~0~2 &amp; 9~0~2 \\\\<br/>\\textbf { P3 } &amp; 2~1~1 &amp; 2~2~2<br/>\\end{array}\\]</p><p>From the perspective of deadlock avoidance, which one of the following is true?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">THE SYSTEM IS IN A SAFE STATE<br/></span>",
                "<span style=\"display: inline;\">THE SYSTEM IS NOT IN A SAFE STATE, BUT WOULD BE SAFE IF ONE MORE INSTANCE OF $\\mathrm{R1}$ WERE AVAILABLE<br/></span>",
                "<span style=\"display: inline;\">THE SYSTEM IS NOT IN A SAFE STATE, BUT WOULD BE SAFE IF ONE MORE INSTANCE OF $\\mathrm{R3}$ WERE AVAILABLE<br/></span>",
                "<span style=\"display: inline;\">THE SYSTEM IS NOT IN A SAFE STATE, BUT WOULD BE SAFE IF TWO MORE INSTANCE OF $\\mathrm{R2}$ AND ONE INSTANCE OF $\\mathrm{R3}$ WERE AVAILABLE</span>"
            ],
            "answer": "D",
            "solution": "<div class=\"solution-content\"><a name=\"511089\"></a><div itemprop=\"text\">Option D is correct</div><br><br><small>Source: <a href=\"https://gateoverflow.in/510799/go-classes-dpp-os-bankers-algo\" target=\"_blank\">GATE Overflow #510799</a></small></div>"
        },
        {
            "marks": 2,
            "neg": 0,
            "type": "MSQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>A system consists of four active processes $P=\\left\\{P_1, P_2, P_3, P_4\\right\\}$ and four distinct singleinstance resource types $R=\\left\\{R_1, R_2, R_3, R_4\\right\\}$. The current state is defined by the following <strong>ASSIGNMENT</strong> and <strong>REQUEST</strong> edges:</p><p><br/>Which of the following statements is/are<strong> CORRECT </strong>regarding the deadlock status of this system?</p><p><strong>Given Details:</strong></p><ul><li><strong>ASSIGNMENT EDGES:</strong> $R_1 \\rightarrow P_2, R_2 \\rightarrow P_3, R_3 \\rightarrow P_4, R_4 \\rightarrow P_1$</li><li><strong>REQUEST (WAITING) EDGES:</strong> $P_1 \\rightarrow R_1, P_2 \\rightarrow R_3, P_3 \\rightarrow R_4, P_4 \\rightarrow R_2$</li></ul></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">The system is deadlock-free because there are no circular dependencies.</span>",
                "<span style=\"display: inline;\">Only processes $P_1$ and $P_2$ are deadlocked.</span>",
                "<span style=\"display: inline;\">There is a global deadlock involving all four processes $(P_1, P_2, P_3, P_4)$.</span>",
                "<span style=\"display: inline;\">Aborting $P_4$ alone will not resolve the deadlock for $P_1$.</span>"
            ],
            "answer": [
                "A"
            ],
            "solution": "<div class=\"solution-content\"><a name=\"508382\"></a><div itemprop=\"text\"><p><strong>TRACE THE DEPENDENCIES:</strong></p><ul><li>$P_1$ holds $R_4$ and is waiting for $R_1$.<br/> </li><li>$R_1$ is held by $P_2$, who is waiting for $R_3$.<br/> </li><li>$R_3$ is held by $P_4$, who is waiting for $R_2$.<br/> </li><li>$R_2$ is held by $P_3$, who is waiting for $R_4$.<br/> </li></ul><p><strong>IDENTIFY THE CYCLE:</strong></p><ul><li>The path leads back to $P_1$ through $R_4$.<br/> </li><li>The cycle is: $P_1 \\rightarrow R_1 \\rightarrow P_2 \\rightarrow R_3 \\rightarrow P_4 \\rightarrow R_2 \\rightarrow P_3 \\rightarrow R_4 \\rightarrow P_1$.<br/> </li></ul><p><strong>CONCLUSION:</strong> Because every resource is a single-instance type and they are all part of a single continuous cycle, every process in the set is deadlocked.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/508381/go-classes-dpp-os-rag\" target=\"_blank\">GATE Overflow #508381</a></small></div>"
        }
    ]
});

registerTest({
    "name": "DPP 23 - Operating System (Deadlocks - Part 5)",
    "testLabel": "DPP 23",
    "testType": "DPP",
    "bracket": "Deadlocks - Part 5",
    "subject": "os",
    "series": "cse-dpp-2027",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 12,
    "topicsCovered": "Deadlocks (Practice Set 5)",
    "questions": [
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>A system manages $\\mathbf{12}$ <strong>IDENTICAL PRINTING UNITS.</strong> There are three processes $(P_1, P_2, P_3)$ currently utilizing these units. The current state of the system is described by the table below:</p><p>\\[<br/>\\begin{array}{|c|c|c|}<br/>\\hline<br/>\\text{Process} &amp; \\text{Current Allocation} &amp; \\text{Maximum Requirement} \\\\<br/>\\hline<br/>P1 &amp; 4 &amp; 8 \\\\<br/>P2 &amp; 2 &amp; 7 \\\\<br/>P3 &amp; 4 &amp; 6 \\\\<br/>\\hline<br/>\\end{array}<br/>\\]<br/>Based on this state, which of the following best describes the <strong>CURRENT CONDITION</strong> of the system?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">Safe and Not Deadlocked<br/></span>",
                "<span style=\"display: inline;\">Safe and Deadlocked<br/></span>",
                "<span style=\"display: inline;\">Not Safe and Not Deadlocked<br/></span>",
                "<span style=\"display: inline;\">Not Safe and Deadlocked</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"508380\"></a><div itemprop=\"text\">$\\text { Safe sequence : P4 P1 P2 exists. Hence system is in safe state. }$</div><br><br><small>Source: <a href=\"https://gateoverflow.in/508379/go-classes-dpp-os-bankers-algo\" target=\"_blank\">GATE Overflow #508379</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>A computer system contains $\\mathbf{10}$ <strong>IDENTICAL MAGNETIC TAPE DRIVES.</strong> There are $N$ processes currently running in the system, and each process has a <strong>MAXIMUM NEED</strong> of $\\mathbf{3}$ <strong>DRIVES</strong> to complete its execution.</p><p>What is the <strong>SMALLEST VALUE</strong> of $N$ such that the system could potentially enter a <strong>DEADLOCK</strong> state?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$4$<br/></span>",
                "<span style=\"display: inline;\">$5$<br/></span>",
                "<span style=\"display: inline;\">$6$<br/></span>",
                "<span style=\"display: inline;\">$11$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"508377\"></a><div itemprop=\"text\">\\begin{aligned}<br/> &amp; N \\times(3-1) \\geq 10 \\\\\\\\<br/> &amp; 2 N \\geq 10 \\\\\\\\<br/> &amp; N \\geq 5<br/> \\end{aligned}</div><br><br><small>Source: <a href=\"https://gateoverflow.in/508376/go-classes-dpp-os-deadlock\" target=\"_blank\">GATE Overflow #508376</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider the following set of processes, with arrival times and CPU burst times given in milliseconds. What is the average turnaround time for these processes using the Preemptive Shortest Remaining Processing Time First (SRPT/SRTF) algorithm?</p><p>\\[<br/>\\begin{array}{c|c|c}<br/>\\text{Process} &amp; \\text{Arrival Time} &amp; \\text{Burst Time} \\\\<br/>\\hline<br/>\\text{P1} &amp; 0 &amp; 6 \\\\<br/>\\text{P2} &amp; 2 &amp; 2 \\\\<br/>\\text{P3} &amp; 3 &amp; 5 \\\\<br/>\\text{P4} &amp; 5 &amp; 2<br/>\\end{array}<br/>\\]</p><p> </p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$5.5$ ms<br/></span>",
                "<span style=\"display: inline;\">$6.25$ ms<br/></span>",
                "<span style=\"display: inline;\">$6.5$ ms<br/></span>",
                "<span style=\"display: inline;\">$7$ ms</span>"
            ],
            "answer": "C",
            "solution": "<div class=\"solution-content\"><a name=\"507882\"></a><div itemprop=\"text\"><p>To find the Average Turnaround Time, we first track the execution using a Gantt chart:</p><ul><li><strong>Time</strong> $\\mathbf{0: P1}$ arrives and starts. $($Remaining: $\\mathrm{P}1=6)$<br/> </li><li><strong>Time</strong> $\\mathbf{2: P2}$ arrives (Burst $=2$ ). $\\mathrm{P1}$ has $4 \\mathrm{~ms}$ remaining. Since $2&lt;4, \\mathbf{P2}$ <strong>preempts </strong>$\\mathbf{P1}$ .<br/> </li><li><strong>Time</strong> $\\mathbf{3: P3}$ arrives (Burst $=5$ ). $\\mathrm{P2}$ has $1 \\mathrm{~ms}$ remaining. Since $1&lt;5, \\mathbf{P} 2$ <strong>continues.</strong><br/> </li><li><strong>Time</strong> $\\mathbf{4: P2}$ finishes. Ready queue: P1 $(4 \\mathrm{~ms})$, P3 $(5 \\mathrm{~ms})$. $\\mathbf{P1}$ <strong>resumes</strong> as it is the shortest.<br/> </li><li><strong>Time</strong> $\\mathbf{5: P4}$ arrives (Burst $=2$). P1 has $\\mathrm{3 ~ms}$ remaining. Since $2&lt;3, \\mathbf{P4}$ <strong>preempts</strong> $\\mathbf{P1}$.<br/> </li><li><strong>Time</strong> $\\mathbf{7: P4}$ <strong>finishes.</strong> Ready queue: $\\mathrm{P1 ~(3 ~ms)}$, $\\mathrm{P3 ~(5 ~ms)}$. $\\mathbf{P1}$<strong> resumes.</strong><br/> </li><li><strong>Time</strong> $\\mathbf{10: P1}$ <strong>finishes.</strong> Ready queue: $\\mathrm{P3 ~(5 ~ms)}$. $\\mathbf{P3}$ <strong>starts.</strong><br/> </li><li><strong>Time</strong> $\\mathbf{15: P3}$ <strong>finishes.</strong><br/> </li></ul><p><br/><strong>Turnaround Time (TAT) Calculation</strong><br/><br/>$T A T=$ Completion Time $-$ Arrival Time</p><p><br/>\\[<br/>\\begin{array}{c|c|c|c}<br/>\\text{Process} &amp; \\text{Completion Time} &amp; \\text{Arrival Time} &amp; \\text{Turnaround Time} \\\\<br/>\\hline<br/>\\text{P1} &amp; 10 &amp; 0 &amp; 10 \\\\<br/>\\text{P2} &amp; 4 &amp; 2 &amp; 2 \\\\<br/>\\text{P3} &amp; 15 &amp; 3 &amp; 12 \\\\<br/>\\text{P4} &amp; 7 &amp; 5 &amp; 2<br/>\\end{array}<br/>\\]<br/><br/>$\\text { Average TAT }=\\frac{10+2+12+2}{4}=\\frac{26}{4}=6.5$<br/><br/><br/><br/><strong>Correct Answer : C</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/507878/go-classes-dpp-os-cpu-scheduling\" target=\"_blank\">GATE Overflow #507878</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>A storage server uses a <strong>Single-Level Indexed Allocation</strong> scheme. The disk parameters and file requirements are as follows:</p><p>In this Indexed Allocation scheme:</p><p><strong>WHICH VALUE REPRESENTS THE TOTAL BYTES WASTED DUE TO INTERNAL FRAGMENTATION?</strong></p><ol start=\"1\" style=\"list-style-type: upper-alpha;\"><li>$8,192 ~\\mathrm{BYTES}$<br/> </li><li>$24,192 ~\\mathrm{BYTES}$<br/> </li><li>$16,184 ~\\mathrm{BYTES}$<br/> </li><li>$32,768 ~\\mathrm{BYTES}$</li></ol><p><strong>Given Details:</strong></p><ul><li>Disk Capacity $: \\mathbf{128 ~ GB}$.</li><li>Block Size $: \\mathbf{16 ~ KB}$.</li><li>Pointer Size $: \\mathbf{8 ~ Bytes}$. (required to address any block on the disk).</li><li>File Size $ : \\mathbf{4 0 0 ~ K B}$.</li></ul></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">Each file has an Index Block that contains pointers to its data blocks.</span>",
                "<span style=\"display: inline;\">The index block itself is the size of one standard disk block $(\\mathbf{1 6 ~ K B})$.</span>",
                "<span style=\"display: inline;\">If the file data requires more pointers than one index block can hold, the file cannot be stored (assume for this problem that the file fits within one index block's capacity).</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"507292\"></a><div itemprop=\"text\"><p><strong>1. Data Block Calculation</strong></p><p>First, we determine how many blocks are needed to store the $\\mathbf{400 ~KB}$ file.</p><ul><li><strong>File Size:</strong> $400 \\mathrm{~KB}=400 \\times 1024$ Bytes $=409,600$ Bytes<br/> </li><li><strong>Block Size:</strong> $16 \\mathrm{~KB}=16 \\times 1024$ Bytes $=16,384$ Bytes<br/> </li><li><strong>Number of Blocks:</strong> $\\frac{409,600}{16,384}=25$ blocks</li></ul><p>Since $400$ is exactly divisible by $16(25 \\times 16=400)$, the file fits perfectly into $25$ blocks.</p><ul><li><strong>Data Block Fragmentation:</strong> $\\mathbf{0}$ <strong>Bytes</strong> (The last block is completely full).</li></ul><p><br/><strong>2. Index Block Calculation</strong></p><p>In Indexed Allocation, the index block is a dedicated disk block that stores pointers to every data block used by the file.</p><ul><li><strong>Number of Pointers needed</strong>$: 25$ (one for each data block).<br/> </li><li><strong>Pointer Size</strong>$: 8$ Bytes.<br/> </li><li><strong>Used space in Index Block:</strong> $25$ pointers $\\times 8$ Bytes/pointer $=200$ Bytes.<br/> </li><li><strong>Total Index Block Size: </strong>$16 \\mathrm{~KB}=16,384$ Bytes.<br/> </li></ul><p>Internal fragmentation in the index block is the difference between the total block size and the space used by the pointers.</p><ul><li><strong>Index Block Fragmentation</strong>$: 16,384$ Bytes $- 200$ Bytes $=16,184$ Bytes.<br/> </li></ul><p><strong>Total Wasted Space:</strong> $0$ (Data) $+ 16,184$ (Index) $= 16,184$ Bytes.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/507289/go-classes-dpp-os-indexed-allocation\" target=\"_blank\">GATE Overflow #507289</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>A system manages resources that can be held in two modes: <strong>EXCLUSIVE</strong> (only one process) or <strong>SHARED</strong> (multiple processes, but they can only read, not write).</p><p>When a process $P_r$ requests <strong>Exclusive</strong> access to a resource held by $P_h$, the system uses the following logic based on the process's <strong>Accumulated CPU Time</strong> ( $A_i$ ):</p><p><strong>Which one of the following is TRUE regarding this scheme?</strong></p><p><strong>Given Details:</strong></p><ul><li><strong>THE RULE:</strong> * If $A\\left(P_r\\right)<A\\left(P_h\\right)$, then $P_h$ is <strong>Downgraded</strong> to Shared mode (losing its Exclusive lock), and $P_r$ must <strong>Wait</strong> in a queue.<br/> <ul><li>If $A\\left(P_r\\right) \\geq A\\left(P_h\\right)$, then $P_r$ is <strong>Suspended </strong>and placed at the back of the queue; its accumulated time $A\\left(P_r\\right)$ is reset to $0$.<br/> </li></ul></li><li><strong>THE CAVEAT:</strong> A Downgraded process $\\left(P_h\\right)$ keeps its current accumulated time and continues running in Shared mode until the resource is free.</li></ul></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">THE SCHEME IS DEADLOCK-FREE AND STARVATION-FREE.</span>",
                "<span style=\"display: inline;\">THE SCHEME IS DEADLOCK-FREE, BUT NOT STARVATION-FREE.</span>",
                "<span style=\"display: inline;\">THE SCHEME IS NOT DEADLOCK-FREE, BUT STARVATION-FREE.</span>",
                "<span style=\"display: inline;\">THE SCHEME IS NEITHER DEADLOCK-FREE NOR STARVATION-FREE.</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"507288\"></a><div itemprop=\"text\"><p><strong>1. Deadlock Analysis</strong></p><p>For a deadlock to occur, we need a <strong>Circular Wait</strong> where no process can move forward.</p><ul><li>In this scheme, if a \"younger\" (lower $A$ ) process $P_r$ requests a resource from an \"older\" $P_h, P_h$ is <strong>Downgraded.</strong><br/> </li><li>Because $P_h$ is downgraded to Shared mode, it no longer holds an Exclusive lock. This effectively \"breaks\" the exclusive hold that $P_h$ had.<br/> </li><li>However, if $P_r$ is \"older\" ( $A_r \\geq A_h$ ), it is Suspended and moved to the back of the queue.<br/> </li></ul><p>The \"Downgrade\" mechanism ensures that an exclusive lock cannot be held indefinitely against a younger requester, and the \"Reset\" mechanism ensures that no process stays \"the oldest\" forever. This hierarchy prevents a permanent circular blockage.<br/><br/><strong>Result:</strong> The scheme is <strong>DEADLOCK-FREE.</strong><br/> </p><p>Now, let's look at the \"Progress\" condition you mentioned earlier. Can a process be overtaken or reset indefinitely?</p><ul><li><strong>The Reset Trap:</strong> If $P_r$ has worked for a long time ( $A_r$ is high), and it requests a resource held by a process that just started ( $A_h$ is low), Rule 1b triggers: $P_r$<strong> is killed/suspended and its time is reset to $0$.</strong><br/> </li><li><strong>The Perpetual Victim:</strong> A long-running process that needs many resources will likely accumulate a high $A$ value. Every time it hits a resource held by a \"fresher\" process, it is sent back to the start of its life $(A=0)$.<br/> </li><li><strong>Overtaking:</strong> New processes with $A=0$ can constantly \"downgrade\" others or force older processes to reset. A specific process could theoretically be reset to $A=0$ every time it nears completion if the system is busy with new arrivals.<br/> </li></ul><p>Because the \"seniority\" (Accumulated Time) is <strong>reset</strong> rather than preserved, the process loses its \"place in line\" and its \"power\" to command resources.<br/> </p><p><strong>Result:</strong> The scheme is <strong>NOT STARVATION-FREE.</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/507287/go-classes-dpp-os-deadlock\" target=\"_blank\">GATE Overflow #507287</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>A new OS uses a hybrid prevention scheme to manage a single non-preemptable resource. Each process $P_i$ has a <strong>Fixed Priority</strong> $\\operatorname{Pri}\\left(P_i\\right)$ and a <strong>Unique Timestamp</strong> $T\\left(P_i\\right)$ (where a smaller value means the process is older).</p><p>When $P_r$ requests a resource held by $P_h$, the following rules are applied:</p><p><strong>Which one of the following is TRUE regarding this scheme?</strong></p><p><strong>Given Details:</strong></p><ul><li>If $\\operatorname{Pri}\\left(P_r\\right)>\\operatorname{Pri}\\left(P_h\\right), P_r$ is allowed to <strong>Wait.</strong></li><li>If $\\operatorname{Pri}\\left(P_r\\right)<\\operatorname{Pri}\\left(P_h\\right)$, the system checks timestamps:<br/> <ul><li>If $T\\left(P_r\\right)&lt;T\\left(P_h\\right), P_h$ is <strong>Killed</strong> (Preempted).<br/> </li><li>If $T\\left(P_r\\right)&gt;T\\left(P_h\\right), P_r$ is <strong>Killed.</strong><br/> </li></ul></li><li>Restarted processes keep their original timestamp but have their Priority <strong>incremented</strong> by $1$.</li></ul></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">THE SCHEME GUARANTEES DEADLOCK-FREE OPERATION BUT MAY LEAD TO STARVATION.</span>",
                "<span style=\"display: inline;\">THE SCHEME GUARANTEES STARVATION-FREE OPERATION BUT MAY LEAD TO DEADLOCK.</span>",
                "<span style=\"display: inline;\">THE SCHEME IS BOTH DEADLOCK-FREE AND STARVATION-FREE.</span>",
                "<span style=\"display: inline;\">THE SCHEME IS NEITHER DEADLOCK-FREE NOR STARVATION-FREE.</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"507284\"></a><div itemprop=\"text\"><p><strong>1. Deadlock Analysis: Is it Deadlock-Free?</strong></p><p>For a deadlock to occur, we must be able to form a <strong>Circular Wait</strong>. Let's test if a cycle can be created using <strong>Rule 1</strong> (the only rule that allows a process to wait):</p><ul><li><strong>Rule 1</strong> states: $P_r$ waits for $P_h$ only if $\\operatorname{Pri}\\left(P_r\\right)&gt;\\operatorname{Pri}\\left(P_h\\right)$.<br/> </li><li>Suppose we have a chain: $P_1$ waits for $P_2, P_2$ waits for $P_3$, and $P_3$ waits for $P_1$.<br/> </li><li>According to the rule, this requires: $\\operatorname{Pri}\\left(P_1\\right)&gt;\\operatorname{Pri}\\left(P_2\\right)&gt;\\operatorname{Pri}\\left(P_3\\right)&gt;\\operatorname{Pri}\\left(P_1\\right)$.<br/> </li><li>This is mathematically impossible $\\left(\\operatorname{Pri}\\left(P_1\\right)&gt;\\operatorname{Pri}\\left(P_1\\right)\\right.$ is a contradiction).</li></ul><p>Because the \"Wait\" condition is based on a <strong>strict ordering</strong> of priorities, a cycle can never form. If Rule 2 triggers, a process is killed, which breaks any potential hold-and-wait chain.<br/> </p><p><strong>Result:</strong> The scheme is<strong> DEADLOCK-FREE.</strong><br/><br/><br/><br/><strong>2. Starvation Analysis: Is it Starvation-Free?</strong></p><p>Starvation occurs if a process can be killed infinitely many times without ever completing. Let's look at the \"Restart\" mechanic:</p><ul><li>When a process is killed, it keeps its original <strong>Timestamp</strong> and its <strong>Priority increases.</strong><br/> </li><li><strong>The Priority Boost:</strong> Since priority increases every time a process is killed, $\\operatorname{Pri}\\left(P_r\\right)$ will eventually become higher than any other $\\operatorname{Pri}\\left(P_h\\right)$ in the system. Once it is the highest priority, Rule 1 triggers, and it is allowed to <strong>Wait</strong> instead of being killed.<br/> </li><li><strong>The Timestamp Protection:</strong> Even if it hasn't reached the highest priority yet, its original (old) timestamp helps it in Rule 2. As the oldest process ( $T\\left(P_r\\right)$ is smallest), it would kill $P_h$ rather than being killed itself.<br/> </li></ul><p>Since every time a process \"fails,\" it returns stronger (higher priority) or older relative to new processes, it is guaranteed to eventually acquire the resource.<br/> </p><p><strong>Result:</strong> The scheme is <strong>STARVATION-FREE.</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/507283/go-classes-dpp-os-deadlock\" target=\"_blank\">GATE Overflow #507283</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Let the page fault service time be $\\mathbf{8}$ <strong>milliseconds</strong> $(\\mathbf{m s})$ in a computer with average memory access time being $\\mathbf{50}$ <strong>nanoseconds</strong> $(\\mathbf{ns})$. If one page fault is generated every $\\mathbf{2} \\times \\mathbf{1 0}^{\\mathbf{6}}$ memory accesses, what is the effective access time for memory?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$52 ~\\mathrm{ns}$ <br/></span>",
                "<span style=\"display: inline;\">$90 ~\\mathrm{ns}$ <br/></span>",
                "<span style=\"display: inline;\">$54 ~\\mathrm{ns}$ <br/></span>",
                "<span style=\"display: inline;\">$70 ~\\mathrm{ns}$</span>"
            ],
            "answer": "C",
            "solution": "<div class=\"solution-content\"><a name=\"504517\"></a><div itemprop=\"text\"><p>$$<br/>\\mathrm{EAT}=(1-p) \\times t_m+p \\times t_{p f}<br/>$$</p><p><br/>Where:</p><ul><li>$\\mathbf{t}_{\\mathbf{m}}$ (Memory Access Time) $=50 \\mathrm{~ns}$<br/> </li><li>$\\mathbf{t}_{\\mathbf{pf}}$ (Page Fault Service Time) $=8 \\mathrm{~ms}$<br/> </li><li>$\\mathbf{p}$(Page Fault Rate) $=\\frac{1}{2 \\times 10^6}$<br/> </li></ul><p>$$<br/>\\begin{aligned}<br/>&amp; \\mathrm{EAT}=\\left(1-\\frac{1}{2 \\times 10^6}\\right) \\times 50 \\mathrm{~ns}+\\left(\\frac{1}{2 \\times 10^6}\\right) \\times 8,000,000 \\mathrm{~ns} \\\\\\\\<br/>&amp; \\mathrm{EAT}=53.999975 \\mathrm{~ns}<br/>\\end{aligned}<br/>$$</p><p><br/>Option C is correct</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/504516/go-classes-dpp-os-page-fault\" target=\"_blank\">GATE Overflow #504516</a></small></div>"
        },
        {
            "marks": 2,
            "neg": 0,
            "type": "MSQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>In a system, there are <strong>three</strong> types of resources: $\\mathbf{P}, \\mathbf{Q}$, and $\\mathbf{R}$. Four processes, $T_1, T_2, T_3$, and $T_4$ execute concurrently. At the outset, the processes have declared their maximum resource requirements using a matrix named Max as given below. The number of instances of the resources allocated to the various processes at any given state is given by a matrix named Allocation.</p><p>Consider a state of the system with the Allocation and Max matrices as shown below, and in which the <strong>Total System Resources available</strong> are $\\mathbf{10}$ <strong>instances of P, </strong>$\\mathbf{7}$ <strong>instances of Q, and</strong> $\\mathbf{8}$ <strong>instances of</strong> $\\mathbf{R}$.<br/> </p><p>\\[<br/>\\begin{array}{c c c c}<br/> &amp; \\text{Allocation} &amp; &amp; \\text{Max} \\\\<br/>&amp; \\textbf{P Q R} &amp; &amp; \\textbf{P Q R}\\\\<br/>T_1 &amp; 0\\ 1\\ 0 &amp; T_1 &amp; 4\\ 2\\ 2 \\\\<br/>T_2 &amp; 2\\ 0\\ 0 &amp; T_2 &amp; 6\\ 1\\ 3 \\\\<br/>T_3 &amp; 3\\ 0\\ 2 &amp; T_3 &amp; 3\\ 0\\ 3 \\\\<br/>T_4 &amp; 2\\ 1\\ 1 &amp; T_4 &amp; 4\\ 3\\ 2<br/>\\end{array}<br/>\\]</p><p><br/>From the perspective of deadlock avoidance, which of the following is/are true?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">The system is in a <strong>safe state,</strong> with a possible safe sequence starting with $T2.$<br/></span>",
                "<span style=\"display: inline;\">The system is <strong>not in a safe state</strong> because $T4$ needs $T2$'s allocated resources to finish.<br/></span>",
                "<span style=\"display: inline;\">The system is in a <strong>safe state</strong><br/></span>",
                "<span style=\"display: inline;\">The system is <strong>not in a safe state,</strong> as no process can complete its execution.</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"503598\"></a><div itemprop=\"text\"><p><strong>Total System Resources (T):</strong> (P$=10$, Q$=7$, R$=8$)<br/><br/><strong>Total Allocated Resources (A):</strong> Sum the Allocation Matrix columns:<br/> </p><ul><li>P: $0+2+3+2=\\mathbf{7}$<br/> </li><li>Q: $1+0+0+1=\\mathbf{2}$<br/> </li><li>R: $0+0+2+1=\\mathbf{3}$<br/> </li><li>$A=(\\mathbf{7}, \\mathbf{2}, \\mathbf{3})$</li></ul><div><p><br/><strong>Initial Free Available Resources</strong> <em>(Available):</em> $T-A$<br/> </p><ul><li><em>Available</em> $=(10,7,8)-(7,2,3)=(\\mathbf{3}, \\mathbf{5}, \\mathbf{5})$<br/> </li></ul><p><em>Need $=$ Max - Allocation</em><br/><br/>\\[<br/>\\begin{array}{l l}<br/>\\text{Process} &amp; \\text{P Q R} \\\\<br/>T_1\\ \\text{Need} &amp; (4-0)(2-1)(2-0)=\\mathbf{4\\ 1\\ 2} \\\\<br/>T_2\\ \\text{Need} &amp; (6-2)(1-0)(3-0)=\\mathbf{4\\ 1\\ 3} \\\\<br/>T_3\\ \\text{Need} &amp; (3-3)(0-0)(3-2)=\\mathbf{0\\ 0\\ 1} \\\\<br/>T_4\\ \\text{Need} &amp; (4-2)(3-1)(2-1)=\\mathbf{2\\ 2\\ 1}<br/>\\end{array}<br/>\\]</p><p> </p><p>We start with <strong>Available</strong> $\\mathbf{=(3,5,5)}$ and search for a sequence of processes that can finish.</p><p><strong>Iteration 1</strong><br/><br/>We check which process's <strong>Need</strong> is $\\leq$ <strong>Available</strong> $\\mathbf{(3, 5, 5):}$</p><ul><li>$T_1$ Need $(4, 1, 2)$ : <strong>NO</strong> (Need $\\mathrm{P}=4&gt;$ Available $\\mathrm{P}=3$ )<br/> </li><li>$T_2$ Need $(4, 1, 3)$ : <strong>NO</strong> (Need $\\mathrm{P}=4&gt;$ Available $\\mathrm{P}=3$ )<br/> </li><li>$T_3$ Need $(0, 0, 1)$ : <strong>YES</strong> (Since $0 \\leq 3,0 \\leq 5,1 \\leq 5$ ).<br/> </li><li>$T_4$ Need $(2, 2, 1)$ : <strong>YES</strong> (Since $2 \\leq 3,2 \\leq 5,1 \\leq 5$ ).<br/> </li></ul><p>We can choose either $T_3$ or $T_4$. Let's choose $\\mathbf{T}_4$.<br/><br/>$T_4$ <strong>finishes.</strong> It returns its Allocation $(2, 1, 1).$ <strong>New Available</strong> $=(3,5,5)+(2,1,1)=\\mathbf{(5,6,6)}$<br/><br/><br/>We check the remaining processes $\\left(T_1, T_2, T_3\\right)$ with <strong>Available</strong> $\\mathbf{=(5,6,6)}$ :</p><ul><li>$T_1$ Need $(4, 1, 2)$: <strong>YES</strong> (Since $4 \\leq 5,1 \\leq 6,2 \\leq 6$ ).<br/> </li><li>$T_2$ Need $(4, 1, 3)$: <strong>YES</strong> (Since $4 \\leq 5,1 \\leq 6,3 \\leq 6$ ).<br/> </li><li>$T_3$ Need $(0, 0, 1)$: <strong>YES</strong> (Still can finish).<br/> </li></ul><p>Let's choose $\\mathbf{T}_{\\mathbf{2}}$<br/><br/>$T_2$ <strong>finishes.</strong> It returns its Allocation $(2,0,0)$. <strong>New Available</strong> $=(5,6,6)+(2,0,0)=\\mathbf{(7,6,6)}$<br/><br/><em>Note: Since $T_2$ could not finish in Iteration 1, the safe sequence cannot start with $T_2$. This immediately eliminates Option A.</em><br/><br/><strong>Iteration 3</strong><br/><br/>We check the remaining processes $\\left(T_1, T_3\\right)$ with <strong>Available</strong> $\\mathbf{=(7,6,6)}$ :</p><ul><li>$T_1$ Need $(4, 1, 2)$: <strong>YES</strong>.<br/> </li><li>$T_3$ Need $(0, 0, 1)$: <strong>YES</strong>.<br/> </li></ul><p>Let's choose $\\mathbf{T}_1$.<br/><br/>$T_1$ <strong>finishes.</strong> It returns its Allocation $(0,1,0)$. <strong>New Available </strong>$=(7,6,6)+(0,1,0)=\\mathbf{(7,7,6)}$<br/><br/><strong>Iteration 4</strong><br/><br/>We check the final remaining process $\\left(T_3\\right)$ with <strong>Available</strong> $\\mathbf{=(7,7,6)}$ :</p><ul><li>$T_3$ Need (0, 0, 1): <strong>YES.</strong><br/> </li></ul><p>$T_3$ <strong>finishes.<br/><br/>Conclusion</strong><br/><br/>Since we found a safe sequence, for example, ( $\\mathbf{T}_4, \\mathbf{T}_2, \\mathbf{T}_1, \\mathbf{T}_3$ ), the system is in a <strong>safe state.</strong></p><p> </p></div></div><br><br><small>Source: <a href=\"https://gateoverflow.in/503596/go-classes-dpp-os-bankers-algo\" target=\"_blank\">GATE Overflow #503596</a></small></div>"
        },
        {
            "marks": 2,
            "neg": 0,
            "type": "MSQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>In a system, there are <strong>four</strong> types of resources: $\\mathbf{R 1}, \\mathbf{R 2}, \\mathbf{R 3}$, and $\\mathbf{R 4}$. <strong>Three</strong> processes, $P_1, P_2$, and $P_3$ execute concurrently. At the outset, the processes have declared their maximum resource requirements using a matrix named Max as given below. The number of instances of the resources allocated to the various processes at any given state is given by a matrix named Allocation.</p><p>Consider a state of the system with the Allocation and Max matrices as shown below, and in which $\\mathbf{3}$ <strong>instances of</strong> $\\mathbf{R1}$, $\\mathbf{2}$ <strong>instances of</strong> $\\mathbf{R2}$, $\\mathbf{2}$ <strong>instances of</strong> $\\mathbf{R3}$, and $\\mathbf{1}$<strong> instance of</strong> $\\mathbf{R4}$ are only resources available (Total available resources).<br/> </p><p>\\[<br/>\\begin{array}{c c c c}<br/> &amp; \\text{Allocation} &amp; &amp; \\text{Max} \\\\<br/>&amp; \\textbf{R1 R2 R3 R4} &amp; &amp; \\textbf{R1 R2 R3 R4}\\\\<br/>P_1 &amp; 0\\ 1\\ 0\\ 0 &amp; P_1 &amp;1\\ 3\\ 1\\ 1 \\\\<br/>P_2 &amp; 2\\ 0\\ 1\\ 0 &amp; P_2 &amp; 3\\ 1\\ 2\\ 2 \\\\<br/>P_3 &amp; 0\\ 0\\ 1\\ 1 &amp; P_3 &amp;2\\ 0\\ 3\\ 1<br/>\\end{array}<br/>\\]</p><p><br/>From the perspective of deadlock avoidance, which of the following is/are true?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">The system is in a <strong>safe state.</strong><br/></span>",
                "<span style=\"display: inline;\">The system is <strong>not in a safe state</strong>, but would be safe if <strong>one</strong> more instance of $\\mathrm{R2}$ were available.<br/></span>",
                "<span style=\"display: inline;\">The system is <strong>not in a safe state</strong>, and <strong>no</strong> process can complete its execution.<br/></span>",
                "<span style=\"display: inline;\">The system is <strong>not in a safe state</strong>, but would be safe if the available resources were $\\textbf{(4, 3, 2, 1)}$.</span>"
            ],
            "answer": [
                "A"
            ],
            "solution": "<div class=\"solution-content\"><a name=\"504208\"></a><div itemprop=\"text\"><p style=\"text-align:center\"><img alt=\"\" height=\"613\" src=\"https://gateoverflow.in/?qa=blob&amp;qa_blobid=6146975663129295128\" width=\"1200\"/></p><p style=\"text-align:center\"><img alt=\"\" height=\"1080\" src=\"https://gateoverflow.in/?qa=blob&amp;qa_blobid=9798157216838550149\" width=\"1042\"/></p><p> </p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/503593/go-classes-dpp-os-bankers-algo\" target=\"_blank\">GATE Overflow #503593</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider a distributed file system with $\\mathbf{5}$ <strong>processes</strong> that share $\\mathbf{11}$ <strong>File Handle (FH)</strong> instances. Each process can request a maximum of $\\boldsymbol{K}$ instances. Currently, each of the $\\mathbf{5}$ <strong>processes holds</strong> $\\mathbf{2}$ <strong>FH instances.</strong></p><p>The <strong>smallest integer value of</strong> $\\boldsymbol{K}$ (the maximum a process can request) such that this current state is <strong>always an unsafe state</strong> (meaning deadlock is possible) is $\\_\\_\\_\\_$ .</p></div></span>",
            "image": "",
            "options": [],
            "answer": "501374",
            "solution": "<div class=\"solution-content\"><a name=\"501375\"></a><div itemprop=\"text\"><ul><li>Total Resources $(R): 11$<br/> </li><li>Total Allocated Resources: $5$ processes $\\times ~2$ instances/process $=10$ instances<br/> </li><li><strong>Available Resources (Available):</strong> $11-10=\\mathbf{1}$ instance<br/> </li></ul><p><strong>Determine the Condition for Unsafe State: </strong>A state is <strong>always unsafe</strong> if the <strong>Available</strong> resources are insufficient to satisfy the <strong>Need</strong> of any single process. If no process can complete, the system is deadlocked (unsafe).</p><p>This requires:</p><p>$$<br/>\\text { Need }&gt;\\text { Available }<br/>$$</p><p><br/><strong>Find the Need in terms of</strong> $\\boldsymbol{K}$ : The remaining resources a process needs is:</p><p>$$<br/>\\begin{aligned}<br/>&amp; \\text { Need }=\\text { Maximum Request }(K)-\\text { Current Allocation (2) } \\\\\\\\<br/>&amp; \\qquad \\text { Need }=K-2<br/>\\end{aligned}<br/>$$</p><p><br/>Substitute the values into the unsafe condition:</p><p>$$<br/>\\begin{gathered}<br/>K-2&gt;1 \\\\\\\\<br/>K&gt;3<br/>\\end{gathered}<br/>$$</p><p><br/>The<strong> smallest integer value</strong> that is greater than $3$ is $\\mathbf{4}$.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/501374/go-classes-dpp-os-deadlock-prevention\" target=\"_blank\">GATE Overflow #501374</a></small></div>"
        }
    ]
});

registerTest({
    "name": "DPP 24 - Operating System (Deadlocks - Part 6)",
    "testLabel": "DPP 24",
    "testType": "DPP",
    "bracket": "Deadlocks - Part 6",
    "subject": "os",
    "series": "cse-dpp-2027",
    "date": "Nov 03, 2026",
    "duration": "15 Min",
    "totalMarks": 4,
    "topicsCovered": "Deadlocks (Practice Set 6)",
    "questions": [
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider a system with $\\mathbf{4 ~processes}$ ( $P_1, P_2, P_3, P_4$ ) that share a single pool of <strong>Memory Buffer</strong> instances. Each process requires a maximum of $\\mathbf{6 ~instances}$ to complete its task. Resources are requested and released one at a time.</p><p>The <strong>minimum total number of Memory Buffer instances</strong> the system must have to <strong>always</strong> guarantee a deadlock-free state is $\\_\\_\\_\\_$ . (Answer in integer)</p></div></span>",
            "image": "",
            "options": [],
            "answer": "21",
            "solution": "<div class=\"solution-content\"><a name=\"501393\"></a><div itemprop=\"text\">summation{( max - 1 )} + 1 &lt; = no of instances to be allocated <br/> <br/> 4 x 5 + 1 = 21 <br/> <br/> Ans. minimum 21<br/> <br/> </div><br><br><small>Source: <a href=\"https://gateoverflow.in/501373/go-classes-dpp-os-deadlock-prevention\" target=\"_blank\">GATE Overflow #501373</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>A cloud storage company uses a custom disk array where each disk module has:</p><p>To optimize addressing in their distributed file system, they need to assign a unique binary ID to each sector within a single disk module.</p><p>What is the total storage per disk module in TB, and how many bits are needed for the sector address?</p><p> </p><p><strong>Given Details:</strong></p><ul><li>$10$ double-sided platters</li><li>$5000$ tracks per surface</li><li>Average $400$ sectors per track</li><li>Sector size $=4096$ bytes</li></ul></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$160 \\mathrm{~TB}, 30$ bits</span>",
                "<span style=\"display: inline;\">$1.6 \\mathrm{~TB}, 29$ bits</span>",
                "<span style=\"display: inline;\">$16 \\mathrm{~TB}, 28$ bits</span>",
                "<span style=\"display: inline;\">$0.16 \\mathrm{~TB}, 27$ bits</span>"
            ],
            "answer": "D",
            "solution": "<div class=\"solution-content\"><a name=\"500701\"></a><div itemprop=\"text\"><ul><li>Double-sided platters $=10 \\rightarrow$ surfaces $=10 \\times 2=20 \\rightarrow \\log _2 20 \\approx 5$ bits<br/> </li><li>Tracks per surface $=5000 \\rightarrow\\left\\lceil\\log _2 5000\\right\\rceil=13$ bits<br/> </li><li>Sectors per track $=400 \\rightarrow\\left\\lceil\\log _2 400\\right\\rceil=9$ bits<br/> </li><li>Sector size $=4096$ bytes</li></ul><p>Total sectors $=20 \\times 5000 \\times 400=40,000,000$ sectors<br/><br/>Capacity $=40,000,000 \\times 4096$ bytes $=163,840,000,000$ bytes<br/><br/>In TB: $\\frac{163840000000}{10^{12}}=0.16384 \\mathrm{~TB} \\approx 0.16 \\mathrm{~TB}$<br/><br/>Bits to address a sector $=5+13+9=27$ bits</p><p> </p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/500700/go-classes-dpp-os-disk\" target=\"_blank\">GATE Overflow #500700</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>In a system, there are three resource types: $X, Y$, and $Z$.<br/><br/>Four processes $P_0, P_1, P_2, P_3$ run concurrently.<br/><br/>The Max matrix indicates the maximum demand of each resource type by each process.<br/><br/>The Allocation matrix shows the number of instances of each resource currently allocated to each process.</p><p>\\[<br/>\\begin{array}{c|ccc|ccc}<br/> &amp; \\textbf{Allocation} &amp; &amp; &amp; \\textbf{Max} &amp; &amp; \\\\<br/> &amp; X &amp; Y &amp; Z &amp; X &amp; Y &amp; Z \\\\<br/>\\hline<br/>P_0 &amp; 1 &amp; 0 &amp; 1 &amp; 2 &amp; 1 &amp; 1 \\\\<br/>P_1 &amp; 1 &amp; 1 &amp; 0 &amp; 1 &amp; 2 &amp; 2 \\\\<br/>P_2 &amp; 1 &amp; 0 &amp; 2 &amp; 2 &amp; 1 &amp; 3 \\\\<br/>P_3 &amp; 0 &amp; 1 &amp; 1 &amp; 1 &amp; 1 &amp; 2 \\\\<br/>\\end{array}<br/>\\]</p><p>Available resources $=\\left(\\begin{array}{lll}1 &amp; 1 &amp; 1\\end{array}\\right)$ [1 instance of $\\mathrm{X}, 1$ of $\\mathrm{Y}, 1$ of Z available]<br/><br/>From the perspective of deadlock avoidance, which one of the following is true?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">The system is in a safe state.<br/></span>",
                "<span style=\"display: inline;\">The system is not safe, but would be safe if one more instance of $X$ were available.<br/></span>",
                "<span style=\"display: inline;\">The system is not safe, but would be safe if one more instance of $Y$ were available.<br/></span>",
                "<span style=\"display: inline;\">The system is not safe, but would be safe if one more instance of $Z$ were available.</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"501581\"></a><div itemprop=\"text\">A. Because there is one sequence which we can complete all the processes.</div><br><br><small>Source: <a href=\"https://gateoverflow.in/500695/go-classes-dpp-os-deadlock\" target=\"_blank\">GATE Overflow #500695</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\">A system has $4$ processes that share $10$ instances of a single resource type. Each process can request a maximum of $M$ instances of the resource. Resources are requested and released one at a time.<br/> <br/> What is the largest value of $M$ that guarantees the system is deadlock-free?</div></span>",
            "image": "",
            "options": [],
            "answer": "3",
            "solution": "<div class=\"solution-content\"><a name=\"500693\"></a><div itemprop=\"text\">$\\mathrm{n}=$ number of processes = 4<br/> <br/> R = total resource instances = 10<br/> <br/> M = maximum demand per process (same for each process)<br/> <br/> The formula<br/> <br/> $$<br/> R \\geq n \\times(k-1)+1<br/> $$<br/> <br/> is used to find minimum $\\mathbf{\\mathrm { R }}$ for given $n$ and $k$ to avoid deadlock, where $k=$ max demand per process.<br/> <br/> $$<br/> n=4, R=10:<br/> $$<br/> <br/> $$<br/> \\begin{gathered}<br/> k \\leq 1+\\frac{10-1}{4} \\\\<br/> k \\leq 1+\\frac{9}{4} \\\\<br/> k \\leq 1+2.25 \\\\<br/> k \\leq 3.25<br/> \\end{gathered}<br/> $$<br/> <br/> So $k_{\\text {max integer }}=3$.</div><br><br><small>Source: <a href=\"https://gateoverflow.in/500692/go-classes-dpp-os-deadlock\" target=\"_blank\">GATE Overflow #500692</a></small></div>"
        }
    ]
});

registerTest({
    "name": "DPP 25 - Operating System (Memory Management & Virtual Memory - Part 1)",
    "testLabel": "DPP 25",
    "testType": "DPP",
    "bracket": "Memory Management & Virtual Memory - Part 1",
    "subject": "os",
    "series": "cse-dpp-2027",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 12,
    "topicsCovered": "Memory Management & Virtual Memory (Practice Set 1)",
    "questions": [
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>A segmentation-based memory-management system maintains a <strong>shared segment table</strong>.</p><p>Processes $P_1$ and $P_2$ both share segment $S$.</p><p>Which of the following statements is <strong>incorrect</strong>?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">Only one physical copy of segment $S$ needs to exist in main memory.<br/></span>",
                "<span style=\"display: inline;\">Segment $S$ must have the same logical segment number in both $P_1$ and $P_2$.<br/></span>",
                "<span style=\"display: inline;\">$P_1$ and $P_2$ ultimately refer to the shared segment information corresponding to the same physical segment $S$.<br/></span>",
                "<span style=\"display: inline;\">The memory occupied by $S$ should not be reclaimed until neither $P_1$ nor $P_2$ uses it.</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"546617\"></a><div itemprop=\"text\"><p><strong>A is correct</strong></p><p>Sharing does not require duplicating the actual segment.</p><p>Both processes can refer to:</p><p>one physical copy of $S$</p><p> </p><p><strong>B is incorrect</strong></p><p>This is the key point.</p><p>A <strong>logical segment number belongs to a process's logical address space</strong>.</p><p>Therefore, the same shared physical segment can appear as:</p><p>segment $2$ in $P1$</p><p>and perhaps:</p><p>segment $5$ in $P2$.</p><p>There is no requirement that the logical segment numbers match.</p><p> </p><p><strong>C is correct</strong></p><p>Although the processes may use different logical segment numbers, their mappings ultimately identify the same shared physical segment.</p><p> </p><p><strong>D is correct</strong></p><p>If either process still uses $S$, reclaiming its physical memory would invalidate that process's mapping.</p><p>Hence, reclamation can occur only after no sharing process needs it.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/546616/go-classes-dpp-gate-cs-operating-system-shared-segment-mapping\" target=\"_blank\">GATE Overflow #546616</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"52\" data-start=\"0\">A demand-paging system has $3$ physical page frames.</p><p data-end=\"84\" data-start=\"54\">Consider the reference string:</p><p data-end=\"125\" data-start=\"86\">$\\text{A, B, C, D, B, A, B, A, D, C}$</p><p data-end=\"203\" data-start=\"127\">Starting with empty memory, determine the total number of page faults using:</p><p data-end=\"390\" data-start=\"240\">For the Clock algorithm, when a page fault occurs, the clock hand <strong data-end=\"354\" data-start=\"306\">advances before performing checks or actions</strong>, as specified in the original exam.</p><p data-end=\"415\" data-start=\"392\">Which tuple is correct?</p><p><strong>Given Details:</strong></p><ul><li>FIFO</li><li>Clock</li><li>LRU</li></ul></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$(7, 6, 6)$</span>",
                "<span style=\"display: inline;\">$(6, 7, 6)$</span>",
                "<span style=\"display: inline;\">$(7, 7, 6)$</span>",
                "<span style=\"display: inline;\">$(6, 6, 7)$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"546060\"></a><div itemprop=\"text\"><p>For FIFO:</p><ul><li><p>$\\text{A}$: fault</p></li><li><p>$\\text{B}$: fault</p></li><li><p>$\\text{C}$: fault</p></li><li><p>$\\text{D}$: fault, replaces $\\text{A}$</p></li><li><p>$\\text{B}$: hit</p></li><li><p>$\\text{A}$: fault, replaces $\\text{B}$</p></li><li><p>$\\text{B}$: fault, replaces $\\text{C}$</p></li><li><p>$\\text{A}$: hit</p></li><li><p>$\\text{D}$: hit</p></li><li><p>$\\text{C}$: fault, replaces $\\text{D}$</p></li></ul><p>FIFO page faults = $7$.</p><p>For Clock, initially $\\text{A}$, $\\text{B}$ and $\\text{C}$ are loaded, giving $3$ faults.</p><p>When $\\text{D}$ arrives, all three reference bits are $1$. </p><p>Since the clock hand advances before checking, it moves through the pages, clears their reference bits, and eventually replaces $\\text{A}$ with $\\text{D}$.</p><p>Faults so far = $4$.</p><p>Next, $\\text{B}$ is a hit, so its reference bit becomes $1$.</p><p>When $\\text{A}$ is referenced, it is not present. </p><p>The clock advances, clears $\\text{B}$'s reference bit, and replaces $\\text{C}$, whose reference bit is $0$.</p><p>Faults so far = $5$.</p><p>The next references $\\text{B}$, $\\text{A}$ and $\\text{D}$ are all hits.</p><p>Finally, $\\text{C}$ is absent, producing one more fault.</p><p>Clock page faults = $6$.</p><p>For LRU:</p><ul><li><p>$\\text{A}$: fault</p></li><li><p>$\\text{B}$: fault</p></li><li><p>$\\text{C}$: fault</p></li><li><p>$\\text{D}$: fault, replaces $\\text{A}$</p></li><li><p>$\\text{B}$: hit</p></li><li><p>$\\text{A}$: fault, replaces $\\text{C}$</p></li><li><p>$\\text{B}$: hit</p></li><li><p>$\\text{A}$: hit</p></li><li><p>$\\text{D}$: hit</p></li><li><p>$\\text{C}$: fault, replaces $\\text{B}$</p></li></ul><p>LRU page faults = $6$.</p><p>So, the correct tuple is $(7, 6, 6)$.</p><p><br/><strong>Answer : A</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/546059/go-classes-dpp-gate-cs-operating-system-page-replacement\" target=\"_blank\">GATE Overflow #546059</a></small></div>"
        },
        {
            "marks": 2,
            "neg": 0,
            "type": "MSQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"4851\" data-start=\"4708\">A $3$2-bit system uses $\\mathbf{4}$<strong data-end=\"4743\" data-start=\"4729\"> KB pages</strong> and a two-level page table with a $10$-bit Level-$1$ index, $10$-bit Level-$2$ index, and $12$-bit page offset.</p><p data-end=\"4920\" data-start=\"4853\">The current Level-$1$ page table begins at physical address $\\texttt{0x2000}$.</p><p data-end=\"4943\" data-start=\"4922\">Relevant entries are:</p><p>$$<br/>\\begin{array}{|c|c|} \\hline<br/>\\textbf{Page-table location} &amp; \\textbf{Entry} \\\\ \\hline<br/>\\text{L1[0]} &amp; \\texttt{0x1007} \\\\<br/>\\text{L1[3]} &amp; \\texttt{0x3007} \\\\<br/>\\text{table at }\\texttt{0x1000},\\ \\text{entry }0 &amp; \\texttt{0x7007} \\\\<br/>\\text{table at }\\texttt{0x1000},\\ \\text{entry }1 &amp; \\texttt{0x8007} \\\\<br/>\\text{table at }\\texttt{0x3000},\\ \\text{entry }128 &amp; \\texttt{0xA007} \\\\<br/>\\hline<br/>\\end{array}<br/>$$</p><p data-end=\"5296\" data-start=\"5159\">All unspecified entries are zero and therefore not present. The low permission bits are removed when obtaining the physical page address.</p><p data-end=\"5329\" data-start=\"5298\">Which translations are correct?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\texttt{0x00000FFF} \\rightarrow \\texttt{0x00007FFF}$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{0x00001000} \\rightarrow \\texttt{0x00008000}$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{0x00C08003} \\rightarrow \\texttt{0x0000A003}$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{0x00C80003} \\rightarrow \\texttt{0x0000A003}$</span>"
            ],
            "answer": [
                "A"
            ],
            "solution": "<div class=\"solution-content\"><a name=\"544046\"></a><div itemprop=\"text\"><p data-end=\"5584\" data-start=\"5574\">For <strong data-end=\"5583\" data-start=\"5578\">A,</strong></p><p data-end=\"5627\" data-start=\"5586\">PDI $=0$, PTI $=0$, offset $=\\text{FFF}$.</p><p data-end=\"5654\" data-start=\"5629\">$\\text{L1[0]}$ points to $\\texttt{0x1000}$.</p><p data-end=\"5695\" data-start=\"5656\">$\\text{L2[0]}$ points to physical page $\\texttt{0x7000}$.</p><p data-end=\"5707\" data-start=\"5697\">Therefore,</p><p data-end=\"5734\" data-start=\"5709\">$\\texttt{0x7000} + \\texttt{0xFFF} = \\texttt{0x7FFF}$</p><p data-end=\"5753\" data-start=\"5736\">So <strong data-end=\"5752\" data-start=\"5739\">A is true</strong>.<br/> </p><p data-end=\"5765\" data-start=\"5755\">For <strong data-end=\"5764\" data-start=\"5759\">B,</strong></p><p data-end=\"5786\" data-start=\"5767\">PDI $=0$, PTI $=1$.</p><p data-end=\"5813\" data-start=\"5788\">$\\text{L2[1]}$ points to $\\texttt{0x8000}$.</p><p data-end=\"5835\" data-start=\"5815\">Hence <strong data-end=\"5834\" data-start=\"5821\">B is true</strong>.<br/> </p><p data-end=\"5927\" data-start=\"5837\">For <strong data-end=\"5846\" data-start=\"5841\">C</strong>, PDI $=3$ but PTI $=8$. </p><p data-end=\"5927\" data-start=\"5837\">Entry $8$ of the second-level table at $\\texttt{0x3000}$ is absent.</p><p data-end=\"5994\" data-start=\"5929\">Therefore this access causes a <strong data-end=\"5974\" data-start=\"5960\">page fault</strong>. So <strong data-end=\"5993\" data-start=\"5979\">C is false</strong>.<br/> </p><p data-end=\"6006\" data-start=\"5996\">For <strong data-end=\"6005\" data-start=\"6000\">D,</strong></p><p data-end=\"6042\" data-start=\"6008\">PDI $=3$, PTI $=128$, offset $=3$.</p><p data-end=\"6084\" data-start=\"6044\">The corresponding PTE contains $\\texttt{0xA007}$.</p><p data-end=\"6109\" data-start=\"6086\">Hence physical address:</p><p data-end=\"6136\" data-start=\"6111\">$\\texttt{0xA000} + \\texttt{0x003} = \\texttt{0xA003}$</p><p data-end=\"6267\" data-start=\"6138\">So <strong data-end=\"6154\" data-start=\"6141\">D is true</strong>.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/544045/go-classes-dpp-gate-cs-operating-system-address-translation\" target=\"_blank\">GATE Overflow #544045</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"794\" data-start=\"766\">A virtual-memory system has:</p><p data-end=\"1174\" data-start=\"1119\">Which of the following correctly gives the bit division</p><p data-end=\"1243\" data-start=\"1176\">$$(\\text{Level-1 index},\\text{ Level-2 index},\\text{ page offset})?$$</p><p><strong>Given Details:</strong></p><ul><li>$48$-bit virtual addresses</li><li>$32$ KB pages</li><li>$32$ TB physical memory</li><li>Two-level page tables</li><li>Both levels stored in physical memory</li><li>Every second-level page table must fit completely inside one page frame</li><li>Page-table entries are stored using the minimum whole number of bytes sufficient to contain the physical page number</li></ul></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$(20,13,15)$</span>",
                "<span style=\"display: inline;\">$(18,15,15)$</span>",
                "<span style=\"display: inline;\">$(21,12,15)$</span>",
                "<span style=\"display: inline;\">$(13,20,15)$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"544039\"></a><div itemprop=\"text\"><p data-end=\"1387\" data-start=\"1377\">Page size:</p><p data-end=\"1416\" data-start=\"1389\">$32\\text{ KB}=2^{15}$ bytes</p><p data-end=\"1448\" data-start=\"1418\">Hence page offset = $15$ bits.</p><p data-end=\"1466\" data-start=\"1450\">Physical memory:</p><p data-end=\"1495\" data-start=\"1468\">$32\\text{ TB}=2^{45}$ bytes</p><p data-end=\"1536\" data-start=\"1497\">Therefore physical page number requires</p><p data-end=\"1554\" data-start=\"1538\">$45-15=30$ bits.</p><p data-end=\"1627\" data-start=\"1556\">A second-level PTE therefore occupies $4$ bytes. </p><p data-end=\"1627\" data-start=\"1556\">A $32$ KB page can contain $\\dfrac{2^{15}}{2^2}=2^{13}$ PTEs.</p><p data-end=\"1697\" data-start=\"1665\">Hence, Level-$2$ index = $13$ bits.</p><p data-end=\"1714\" data-start=\"1699\">Total VPN bits: $48-15=33$</p><p data-end=\"1752\" data-start=\"1728\">$\\therefore$ Level-$1$ index: $33-13=20$</p><p data-end=\"1781\" data-start=\"1766\"><br/>So the split is $\\boxed{20\\mid13\\mid15}$</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/544038/go-classes-dpp-gate-cs-operating-system-multi-level-paging\" target=\"_blank\">GATE Overflow #544038</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"4651\" data-start=\"4590\">A demand-paging system has $4$ physical frames $P1,P2,P3,P4$.</p><p data-end=\"4684\" data-start=\"4653\">The page-reference sequence is:</p><p data-end=\"4725\" data-start=\"4686\">$A,\\ B,\\ C,\\ D,\\ E,\\ B,\\ A,\\ D,\\ B,\\ C$</p><p data-end=\"4759\" data-start=\"4727\">Initially, all frames are empty.</p><p data-end=\"4801\" data-start=\"4761\">Two replacement policies are considered:</p><p data-end=\"4948\" data-start=\"4820\">For Clock, on a page fault, <strong data-end=\"4909\" data-start=\"4848\">advance the clock hand first and then inspect the use bit.</strong></p><p data-end=\"5022\" data-start=\"4950\">Which option correctly gives the final contents of frames $P1,P2,P3,P4$?</p><p><strong>Given Details:</strong></p><ul><li>LRU</li><li>Clock</li></ul></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">LRU: $(C,B,A,D)$<br/>Clock: $(E,B,A,C)$</span>",
                "<span style=\"display: inline;\">LRU: $(E,B,C,D)$<br/>Clock: $(C,B,A,D)$</span>",
                "<span style=\"display: inline;\">LRU: $(C,A,B,D)$<br/>Clock: $(E,C,A,B)$</span>",
                "<span style=\"display: inline;\">LRU: $(E,B,A,C)$<br/>Clock: $(C,B,A,D)$</span>"
            ],
            "answer": "B",
            "solution": "<div class=\"solution-content\"><a name=\"543904\"></a><div itemprop=\"text\"><p data-end=\"5262\" data-section-id=\"1xxfg99\" data-start=\"5255\"><strong>LRU</strong></p><p data-end=\"5306\" data-start=\"5264\">The first four references fill the frames:</p><p data-end=\"5335\" data-start=\"5308\">$P1=A,\\ P2=B,\\ P3=C,\\ P4=D$</p><p data-end=\"5351\" data-start=\"5337\">Reference $E$:</p><p data-end=\"5368\" data-start=\"5353\">$A$ is LRU, so,</p><p data-end=\"5376\" data-start=\"5370\">$P1=E$</p><p data-end=\"5392\" data-start=\"5378\">Reference $B$: Hit.</p><p data-end=\"5414\" data-start=\"5400\">Reference $A$:</p><p data-end=\"5435\" data-start=\"5416\">$C$ is now LRU, so:</p><p data-end=\"5443\" data-start=\"5437\">$P3=A$</p><p data-end=\"5459\" data-start=\"5445\">Reference $D$: Hit.</p><p data-end=\"5481\" data-start=\"5467\">Reference $B$: Hit.</p><p data-end=\"5503\" data-start=\"5489\">Reference $C$:</p><p data-end=\"5524\" data-start=\"5505\">$E$ is now LRU, so,</p><p data-end=\"5532\" data-start=\"5526\">$P1=C$</p><p data-end=\"5550\" data-start=\"5534\">Final LRU state: $(C,B,A,D)$</p><p data-end=\"5576\" data-start=\"5565\">LRU incurs $7$ page faults.</p><p data-end=\"5605\" data-section-id=\"6wkewe\" data-start=\"5596\"><br/><strong>Clock</strong></p><p data-end=\"5665\" data-start=\"5607\">Using the specified Clock-hand rule, the replacements are:</p><p data-end=\"5683\" data-start=\"5667\">$A\\rightarrow E$</p><p data-end=\"5690\" data-start=\"5685\">then, $C\\rightarrow A$</p><p data-end=\"5715\" data-start=\"5710\">then, $D\\rightarrow C$</p><p data-end=\"5765\" data-start=\"5735\">Thus the final Clock state is: $(E,B,A,C)$</p><p data-end=\"5867\" data-start=\"5780\">Clock also incurs $7$ page faults, even though its final resident set differs from LRU.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/543900/go-classes-dpp-gate-cs-operating-system-lru-vs-clock\" target=\"_blank\">GATE Overflow #543900</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"2714\" data-start=\"2646\">A virtual-memory system uses the <strong data-end=\"2686\" data-start=\"2679\">LRU</strong> page-replacement algorithm.</p><p data-end=\"2777\" data-start=\"2716\">There are four physical page frames at hexadecimal addresses:</p><p data-end=\"2806\" data-start=\"2779\">$4000,\\ 5000,\\ 6000,\\ 7000$</p><p data-end=\"2839\" data-start=\"2808\">The page-reference sequence is:</p><p data-end=\"2984\" data-start=\"2841\">$1 \\rightarrow 2 \\rightarrow 3 \\rightarrow 4 \\rightarrow 2 \\rightarrow 5 \\rightarrow 3 \\rightarrow 1 \\rightarrow 6 \\rightarrow 5 \\rightarrow 4$</p><p data-end=\"3056\" data-start=\"2986\">For the initial references $1,2,3,4$, the pages are loaded as follows:</p><p data-end=\"3056\" data-start=\"2986\">\\[<br/>\\begin{array}{|c|c|}<br/>\\hline<br/>\\text{Page} &amp; \\text{Frame Address} \\\\<br/>\\hline<br/>1 &amp; 4000 \\\\ <br/>2 &amp; 5000 \\\\<br/>3 &amp; 6000 \\\\<br/>4 &amp; 7000 \\\\<br/>\\hline<br/>\\end{array}<br/>\\]</p><p data-end=\"3244\" data-start=\"3164\">At which address is page $4$ loaded when it is referenced for the <strong data-end=\"3243\" data-start=\"3230\">last time</strong>?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$4000$<br/></span>",
                "<span style=\"display: inline;\">$5000$<br/></span>",
                "<span style=\"display: inline;\">$6000$<br/></span>",
                "<span style=\"display: inline;\">$7000$</span>"
            ],
            "answer": "C",
            "solution": "<div class=\"solution-content\"><a name=\"543905\"></a><div itemprop=\"text\"><p data-end=\"3346\" data-start=\"3336\">Initially:</p><p data-end=\"3383\" data-start=\"3348\">$1:4000,\\ 2:5000,\\ 3:6000,\\ 4:7000$</p><p data-end=\"3391\" data-start=\"3385\">After $1,2,3,4$ the LRU order from oldest to newest is:</p><p data-end=\"3454\" data-start=\"3445\">$1,2,3,4$</p><p data-end=\"3470\" data-start=\"3456\">Reference $2$:</p><p data-end=\"3476\" data-start=\"3472\">Hit.</p><p data-end=\"3484\" data-start=\"3478\">Order:</p><p data-end=\"3495\" data-start=\"3486\">$1,3,4,2$</p><p data-end=\"3511\" data-start=\"3497\">Reference $5$:</p><p data-end=\"3529\" data-start=\"3513\">Page $1$ is LRU.</p><p data-end=\"3534\" data-start=\"3531\">So, $5\\rightarrow4000$</p><p data-end=\"3562\" data-start=\"3556\">Order:</p><p data-end=\"3573\" data-start=\"3564\">$3,4,2,5$</p><p data-end=\"3589\" data-start=\"3575\">Reference $3$:</p><p data-end=\"3595\" data-start=\"3591\">Hit.</p><p data-end=\"3603\" data-start=\"3597\">Order:</p><p data-end=\"3614\" data-start=\"3605\">$4,2,5,3$</p><p data-end=\"3630\" data-start=\"3616\">Reference $1$:</p><p data-end=\"3648\" data-start=\"3632\">Page $4$ is LRU.</p><p data-end=\"3653\" data-start=\"3650\">So,</p><p data-end=\"3673\" data-start=\"3655\">$1\\rightarrow7000$</p><p data-end=\"3689\" data-start=\"3675\">Reference $6$:</p><p data-end=\"3711\" data-start=\"3691\">Page $2$ is now LRU.</p><p data-end=\"3716\" data-start=\"3713\">So,</p><p data-end=\"3736\" data-start=\"3718\">$6\\rightarrow5000$</p><p data-end=\"3752\" data-start=\"3738\">Reference $5$:</p><p data-end=\"3758\" data-start=\"3754\">Hit.</p><p data-end=\"3836\" data-start=\"3760\">Before the final reference to $4$, page $3$ is the least recently used page.</p><p data-end=\"3866\" data-start=\"3838\">Page $3$ currently occupies: $6000$</p><p data-end=\"3930\" data-start=\"3876\">$\\therefore$ page $4$ replaces page $3$ and is loaded at: $\\boxed{6000}$</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/543899/go-classes-dpp-gate-cs-operating-system-lru-page-replacement\" target=\"_blank\">GATE Overflow #543899</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"1215\" data-start=\"1108\">Suppose a $32K \\times 8K$ matrix $A$ with $1$-byte elements is stored in row-major order in virtual memory.</p><p data-end=\"1224\" data-start=\"1217\">Assume:</p><p data-end=\"1412\" data-start=\"1381\">The following code is executed:</p><pre class=\"prettyprint linenums lang-c_cpp\" data-end=\"1521\" data-linenums=\"true\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"\" data-rawcode=\"for (i = 0; i &lt; 32768; i++) for (j = 0; j &lt; 8192; j++) A[i][j] = A[i][j] * A[i][j];\" data-start=\"1414\">for (i = 0; i &lt; 32768; i++) for (j = 0; j &lt; 8192; j++) A[i][j] = A[i][j] * A[i][j];</pre><p data-end=\"1606\" data-start=\"1523\">If execution of this code produces exactly $8K$ page faults, what is the page size?</p><p><strong>Given Details:</strong></p><ul><li>Only this program occupies physical memory.</li><li>The matrix begins exactly at a page boundary.</li><li>The matrix is initially on disk.</li><li>Demand paging is used.</li></ul></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$4$ KB</span>",
                "<span style=\"display: inline;\">$8$ KB</span>",
                "<span style=\"display: inline;\">$16$ KB</span>",
                "<span style=\"display: inline;\">$32$ KB</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"543898\"></a><div itemprop=\"text\"><p data-end=\"1736\" data-start=\"1704\">The total number of elements is:</p><p data-end=\"1753\" data-start=\"1738\">$32K \\times 8K$</p><p data-end=\"1792\" data-start=\"1755\">Since each element occupies $1$ byte:</p><p data-end=\"1833\" data-start=\"1794\">$\\text{Matrix size}=2^{15}\\times2^{13}=2^{28}\\text{ bytes}$</p><p data-end=\"1914\" data-start=\"1859\">The matrix is accessed sequentially in row-major order.</p><p data-end=\"1996\" data-start=\"1916\">Since it begins at a page boundary, each new page causes exactly one page fault.</p><p data-end=\"2020\" data-start=\"1998\">Number of page faults: $8K=2^{13}$</p><p data-end=\"2045\" data-start=\"2035\">$\\therefore \\text{Page size}=\\frac{2^{28}}{2^{13}}$</p><p data-end=\"2111\" data-start=\"2089\">$=2^{15}\\text{ bytes}=32\\text{ KB}$</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/543897/go-classes-dpp-gate-cs-operating-system-demand-paging\" target=\"_blank\">GATE Overflow #543897</a></small></div>"
        },
        {
            "marks": 2,
            "neg": 0,
            "type": "MSQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"897\" data-start=\"819\">Which of the following statements about page-replacement policies are correct?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">LRU always produces fewer page faults than FIFO.<br/></span>",
                "<span style=\"display: inline;\">OPT always performs at least as well as LRU.<br/></span>",
                "<span style=\"display: inline;\">For any replacement policy, increasing the number of available frames can never decrease the hit percentage.<br/></span>",
                "<span style=\"display: inline;\">With LRU, increasing the number of available frames cannot decrease the hit percentage.<br/></span>",
                "<span style=\"display: inline;\">Random replacement is always worse than LRU.</span>"
            ],
            "answer": [
                "A"
            ],
            "solution": "<div class=\"solution-content\"><a name=\"543886\"></a><div itemprop=\"text\"><p data-end=\"1318\" data-start=\"1300\"><strong data-end=\"1318\" data-start=\"1300\">(A) Incorrect.</strong></p><p data-end=\"1397\" data-start=\"1320\">LRU is not guaranteed to outperform FIFO for every possible reference string.</p><p data-end=\"1415\" data-start=\"1399\"><strong data-end=\"1415\" data-start=\"1399\">(B) Correct.</strong></p><p data-end=\"1588\" data-start=\"1417\">OPT replaces the page whose next use is farthest in the future. Therefore, no replacement algorithm can produce fewer faults for the same reference string and frame count.</p><p data-end=\"1608\" data-start=\"1590\"><strong data-end=\"1608\" data-start=\"1590\">(C) Incorrect.</strong></p><p data-end=\"1700\" data-start=\"1610\">FIFO can exhibit <a href=\"https://en.wikipedia.org/wiki/B%C3%A9l%C3%A1dy%27s_anomaly\" rel=\"nofollow\" target=\"_blank\">Belady's anomoly</a>, where adding frames actually increases page faults.</p><p data-end=\"1718\" data-start=\"1702\"><strong data-end=\"1718\" data-start=\"1702\">(D) Correct.</strong></p><p data-end=\"1833\" data-start=\"1720\">LRU is a <strong data-end=\"1748\" data-start=\"1729\">stack algorithm</strong>. The pages present with $n$ frames form a subset of those present with $n+1$ frames.</p><p data-end=\"1917\" data-start=\"1835\">Therefore, increasing the number of frames cannot increase LRU's page-fault count.</p><p data-end=\"1937\" data-start=\"1919\"><strong data-end=\"1937\" data-start=\"1919\">(E) Incorrect.</strong></p><p data-end=\"2032\" data-start=\"1939\">Random replacement can sometimes perform better than LRU for a particular reference sequence.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/543884/go-classes-dpp-gate-cs-operating-system-page-replacement\" target=\"_blank\">GATE Overflow #543884</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"7139\" data-start=\"7104\">Consider the page-reference string:</p><p data-end=\"7188\" data-start=\"7141\">$5,\\ 4,\\ 3,\\ 2,\\ 5,\\ 4,\\ 6,\\ 5,\\ 4,\\ 3,\\ 2,\\ 6$</p><p data-end=\"7248\" data-start=\"7190\">Initially, memory is empty and contains $\\textbf{4}$<strong data-end=\"7247\" data-start=\"7230\"> page frames</strong>.</p><p data-end=\"7338\" data-start=\"7250\">If the <strong data-end=\"7274\" data-start=\"7257\">Optimal (OPT)</strong> page-replacement algorithm is used, how many page faults occur?</p></div></span>",
            "image": "",
            "options": [],
            "answer": "6",
            "solution": "<div class=\"solution-content\"><a name=\"543746\"></a><div itemprop=\"text\"><p data-end=\"7400\" data-start=\"7371\">Start with four empty frames.</p><p data-end=\"7412\" data-start=\"7402\">$5$: Fault</p><p data-end=\"7424\" data-start=\"7414\">$4$: Fault</p><p data-end=\"7436\" data-start=\"7426\">$3$: Fault</p><p data-end=\"7448\" data-start=\"7438\">$2$: Fault</p><p data-end=\"7469\" data-start=\"7450\">Frames now contain:</p><p data-end=\"7484\" data-start=\"7471\">${5,4,3,2}$</p><p data-end=\"7493\" data-start=\"7486\">So far $4$ faults.</p><p data-end=\"7524\" data-start=\"7508\">Next references:</p><p data-end=\"7534\" data-start=\"7526\">$5$: Hit</p><p data-end=\"7544\" data-start=\"7536\">$4$: Hit</p><p data-end=\"7579\" data-start=\"7546\">Now reference $6$ causes a fault.</p><p data-end=\"7602\" data-start=\"7581\">Look into the future:</p><p data-end=\"7623\" data-start=\"7604\">$5,\\ 4,\\ 3,\\ 2,\\ 6$</p><p data-end=\"7694\" data-start=\"7625\">Among the current pages, page $2$ is required farthest in the future.</p><p data-end=\"7736\" data-start=\"7696\">Therefore, OPT can replace $2$ with $6$.</p><p data-end=\"7750\" data-start=\"7738\">Fault count: $5$</p><p data-end=\"7764\" data-start=\"7757\">Frames: ${5,4,3,6}$</p><p data-end=\"7786\" data-start=\"7781\">Then:</p><p data-end=\"7796\" data-start=\"7788\">$5$: Hit</p><p data-end=\"7806\" data-start=\"7798\">$4$: Hit</p><p data-end=\"7816\" data-start=\"7808\">$3$: Hit</p><p data-end=\"7832\" data-start=\"7818\">Reference $2$:</p><p data-end=\"7873\" data-start=\"7834\">$2$ is absent, so another fault occurs.</p><p data-end=\"7969\" data-start=\"7875\">After this point only $6$ will be referenced again, so any page among $5,4,3$ may be replaced.</p><p data-end=\"7983\" data-start=\"7971\">Fault count: $6$</p><p data-end=\"8006\" data-start=\"7990\">Final reference:</p><p data-end=\"8016\" data-start=\"8008\">$6$: Hit</p><p data-end=\"8028\" data-start=\"8018\">$\\therefore$ Page Faults : $\\boxed{6}$</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/543744/go-classes-dpp-gate-cs-operating-system-optimal-page-replacement\" target=\"_blank\">GATE Overflow #543744</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"5587\" data-start=\"5542\">Consider the following page-reference string:</p><p data-end=\"5636\" data-start=\"5589\">$1,\\ 2,\\ 3,\\ 4,\\ 1,\\ 2,\\ 5,\\ 1,\\ 2,\\ 3,\\ 4,\\ 5$</p><p data-end=\"5705\" data-start=\"5638\">The FIFO page-replacement algorithm is used with $\\textbf{4}$<strong data-end=\"5704\" data-start=\"5687\"> page frames</strong>.</p><p data-end=\"5739\" data-start=\"5707\">Initially, all frames are empty. How many page faults occur?</p></div></span>",
            "image": "",
            "options": [],
            "answer": "10",
            "solution": "<div class=\"solution-content\"><a name=\"543743\"></a><div itemprop=\"text\"><p>Process the references using FIFO.</p><p>$$<br/>\\begin{array}{|c|c|} \\hline<br/>\\textbf{Reference} &amp; \\textbf{Result} \\\\ \\hline<br/>1 &amp; \\text{Fault} \\\\<br/>2 &amp; \\text{Fault} \\\\<br/>3 &amp; \\text{Fault} \\\\<br/>4 &amp; \\text{Fault} \\\\<br/>1 &amp; \\text{Hit} \\\\<br/>2 &amp; \\text{Hit} \\\\<br/>5 &amp; \\text{Fault, replace 1} \\\\<br/>1 &amp; \\text{Fault, replace 2} \\\\<br/>2 &amp; \\text{Fault, replace 3} \\\\<br/>3 &amp; \\text{Fault, replace 4} \\\\<br/>4 &amp; \\text{Fault, replace 5} \\\\<br/>5 &amp; \\text{Fault, replace 1} \\\\<br/>\\hline<br/>\\end{array}<br/>$$</p><p>$\\therefore \\text{Page faults}=\\boxed{10}$</p><p data-end=\"6428\" data-start=\"6175\">For comparison, the same reference string with $3$ frames generates $9$ faults. </p><p data-end=\"6428\" data-start=\"6175\">Thus, increasing the number of frames from $3$ to $4$ increases the number of faults</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/543741/go-classes-dpp-gate-cs-operating-system-page-faults\" target=\"_blank\">GATE Overflow #543741</a></small></div>"
        }
    ]
});

registerTest({
    "name": "DPP 26 - Operating System (Memory Management & Virtual Memory - Part 2)",
    "testLabel": "DPP 26",
    "testType": "DPP",
    "bracket": "Memory Management & Virtual Memory - Part 2",
    "subject": "os",
    "series": "cse-dpp-2027",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 10,
    "topicsCovered": "Memory Management & Virtual Memory (Practice Set 2)",
    "questions": [
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"2282\" data-start=\"2216\">Which of the following statements about virtual memory is correct?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">The LRU algorithm selects for replacement the page for which the longest time has elapsed since its last use.<br/></span>",
                "<span style=\"display: inline;\">When indexed address translation is used, a page table is required only for pages currently present in main memory.<br/></span>",
                "<span style=\"display: inline;\">Whenever a page fault occurs, garbage collection must be performed.<br/></span>",
                "<span style=\"display: inline;\">The creation of many small free-memory regions as paging is repeatedly performed is called fragmentation.</span>"
            ],
            "answer": "B",
            "solution": "<div class=\"solution-content\"><a name=\"543738\"></a><div itemprop=\"text\"><p data-end=\"2782\" data-start=\"2767\">LRU stands for:</p><p data-end=\"2807\" data-start=\"2784\"><strong data-end=\"2807\" data-start=\"2784\">Least Recently Used</strong></p><p data-end=\"2880\" data-start=\"2809\">It replaces the page that has not been referenced for the longest time.</p><p data-end=\"2910\" data-start=\"2882\"><strong data-end=\"2910\" data-start=\"2882\">Option (B) is incorrect.</strong></p><p data-end=\"3068\" data-start=\"2912\">A page table represents virtual-page mappings. Pages that are not currently resident can still have page-table entries indicating that they are not present.</p><p data-end=\"3098\" data-start=\"3070\"><strong data-end=\"3098\" data-start=\"3070\">Option (C) is incorrect.</strong></p><p data-end=\"3213\" data-start=\"3100\">A page fault causes the operating system to bring the required page into memory. Garbage collection is unrelated.</p><p data-end=\"3243\" data-start=\"3215\"><strong data-end=\"3243\" data-start=\"3215\">Option (D) is incorrect.</strong></p><p data-end=\"3359\" data-start=\"3245\">Paging uses fixed-size pages and frames and avoids the external-fragmentation problem described in this statement.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/543737/go-classes-dpp-gate-cs-operating-system-virtual-memory-and-lru\" target=\"_blank\">GATE Overflow #543737</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"863\" data-start=\"791\">In a virtual-memory system, the FIFO page-replacement algorithm is used.</p><p data-end=\"902\" data-start=\"865\">The virtual-page reference string is : $1,\\ 4,\\ 2,\\ 4,\\ 1,\\ 3$</p><p data-end=\"955\" data-start=\"929\">There are $3$ page frames.</p><p data-end=\"1010\" data-start=\"957\">After the first three references, the frames contain : $1,\\ 4,\\ 2$</p><p data-end=\"1123\" data-start=\"1025\">What is the state of the three page frames after all the remaining references have been processed?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$1,\\ 3,\\ 4$<br/></span>",
                "<span style=\"display: inline;\">$1,\\ 4,\\ 3$<br/></span>",
                "<span style=\"display: inline;\">$3,\\ 4,\\ 2$<br/></span>",
                "<span style=\"display: inline;\">$4,\\ 1,\\ 3$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"543603\"></a><div itemprop=\"text\"><p data-end=\"1273\" data-start=\"1240\">After the first three references:</p><p data-end=\"1288\" data-start=\"1275\">$[1,\\ 4,\\ 2]$</p><p data-end=\"1327\" data-start=\"1290\">Now process the remaining references.</p><p data-end=\"1343\" data-start=\"1329\">Reference $4$: $4$ is already present.</p><p data-end=\"1377\" data-start=\"1370\"><strong data-end=\"1377\" data-start=\"1370\">Hit</strong></p><p data-end=\"1393\" data-start=\"1379\">Frames remain: $[1,\\ 4,\\ 2]$</p><p data-end=\"1424\" data-start=\"1410\">Reference $1$: $1$ is already present.</p><p data-end=\"1458\" data-start=\"1451\"><strong data-end=\"1458\" data-start=\"1451\">Hit</strong></p><p data-end=\"1474\" data-start=\"1460\">Frames remain: $[1,\\ 4,\\ 2]$</p><p data-end=\"1505\" data-start=\"1491\">Reference $3$: $3$ is not present.</p><p data-end=\"1586\" data-start=\"1528\">Under FIFO, the page that entered memory first is removed.</p><p data-end=\"1607\" data-start=\"1588\">The oldest page is: $1$</p><p data-end=\"1624\" data-start=\"1614\">$\\therefore 1\\rightarrow3$</p><p data-end=\"1656\" data-start=\"1643\">Final frames: $[3,\\ 4,\\ 2]$</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/543602/go-classes-dpp-gate-cs-operating-system-fifo-page-replacement\" target=\"_blank\">GATE Overflow #543602</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"6570\" data-start=\"6509\">A process generates the following first $25$ page references:</p><p data-end=\"6671\" data-start=\"6572\">$A,\\ B,\\ C,\\ D,\\ E,\\ B,\\ D,\\ B,\\ C,\\ D,\\ B,\\ C,\\ D,\\ B,\\ C,\\ B,\\ D,\\ E,\\ B,\\ D,\\ E,\\ B,\\ C,\\ B,\\ A$</p><p data-end=\"6746\" data-start=\"6673\">There are $5$ unique pages, but the process has only $4$ physical frames.</p><p data-end=\"6790\" data-start=\"6748\">Initially, none of the pages are resident.</p><p data-end=\"6855\" data-start=\"6792\">How many <strong data-end=\"6814\" data-start=\"6801\">page hits</strong> occur when LRU page replacement is used?</p></div></span>",
            "image": "",
            "options": [],
            "answer": "19",
            "solution": "<div class=\"solution-content\"><a name=\"543595\"></a><div itemprop=\"text\"><p data-end=\"6915\" data-start=\"6889\">The first four references:</p><p data-end=\"6932\" data-start=\"6917\">$A,\\ B,\\ C,\\ D$</p><p data-end=\"6990\" data-start=\"6934\">all cause faults because the frames are initially empty.</p><p data-end=\"7080\" data-start=\"6992\">When $E$ is referenced, the least recently used page is replaced, causing another fault.</p><p data-end=\"7127\" data-start=\"7082\">After this, the sequence repeatedly accesses:</p><p data-end=\"7144\" data-start=\"7129\">$B,\\ C,\\ D,\\ E$</p><p data-end=\"7224\" data-start=\"7146\">and these pages remain in the four available frames for most of the execution.</p><p data-end=\"7274\" data-start=\"7226\">The final reference to $A$ causes another fault.</p><p data-end=\"7281\" data-start=\"7276\">Thus,</p><p data-end=\"7311\" data-start=\"7283\">$\\text{Total references}=25$</p><p data-end=\"7335\" data-start=\"7313\">$\\text{Page faults}=6$</p><p data-end=\"7347\" data-start=\"7337\">$\\therefore \\text{Page hits}=25-6=\\boxed{19}$</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/543594/go-classes-dpp-gate-cs-operating-system-lru-page-hits\" target=\"_blank\">GATE Overflow #543594</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"5343\" data-start=\"5300\">Assume the following page-reference stream:</p><p data-end=\"5392\" data-start=\"5345\">$A,\\ B,\\ C,\\ D,\\ A,\\ B,\\ E,\\ A,\\ B,\\ C,\\ D,\\ E$</p><p data-end=\"5495\" data-start=\"5394\">Assuming a page cache of size $3$ pages and a FIFO replacement policy, how many misses will there be?</p></div></span>",
            "image": "",
            "options": [],
            "answer": "3",
            "solution": "<div class=\"solution-content\"><a name=\"543593\"></a><div itemprop=\"text\"><p data-end=\"5566\" data-start=\"5528\">Initially, all three frames are empty.</p><p data-end=\"5587\" data-start=\"5568\">Reference sequence:</p><p data-end=\"5636\" data-start=\"5589\">$A,\\ B,\\ C,\\ D,\\ A,\\ B,\\ E,\\ A,\\ B,\\ C,\\ D,\\ E$</p><p data-end=\"5649\" data-start=\"5638\">Using FIFO:</p><p data-end=\"5660\" data-start=\"5651\">$A$: Miss</p><p data-end=\"5671\" data-start=\"5662\">$B$: Miss</p><p data-end=\"5682\" data-start=\"5673\">$C$: Miss</p><p data-end=\"5706\" data-start=\"5684\">$D$: Miss, replace $A$</p><p data-end=\"5730\" data-start=\"5708\">$A$: Miss, replace $B$</p><p data-end=\"5754\" data-start=\"5732\">$B$: Miss, replace $C$</p><p data-end=\"5778\" data-start=\"5756\">$E$: Miss, replace $D$</p><p data-end=\"5788\" data-start=\"5780\">$A$: Hit</p><p data-end=\"5798\" data-start=\"5790\">$B$: Hit</p><p data-end=\"5822\" data-start=\"5800\">$C$: Miss, replace $A$</p><p data-end=\"5846\" data-start=\"5824\">$D$: Miss, replace $B$</p><p data-end=\"5856\" data-start=\"5848\">$E$: Hit<br/> </p><p data-end=\"5868\" data-start=\"5858\">$\\therefore \\text{Misses}=9$ and $\\text{Hits}=3$</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/543592/go-classes-dpp-gate-cs-operating-system-fifo-page-faults\" target=\"_blank\">GATE Overflow #543592</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"3507\" data-start=\"3328\">An operating system can use page tables and exceptions to perform allocation on demand, where it does not allocate physical memory for a program until the program tries to use it.</p><p data-end=\"3596\" data-start=\"3509\">What happens when a program attempts to access memory that still needs to be allocated?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">The hardware detects the condition, updates the page table, and allocates memory itself.<br/></span>",
                "<span style=\"display: inline;\">The operating system's page fault handler allocates the memory, updates the page table, and restarts the program beginning with the instruction that attempted the access.<br/></span>",
                "<span style=\"display: inline;\">The operating system allocates the memory and restarts execution from the beginning of the function containing the instruction.<br/></span>",
                "<span style=\"display: inline;\">The operating system allocates the memory and resumes execution from the instruction after the faulting instruction.<br/></span>",
                "<span style=\"display: inline;\">The compiler inserts a system call before every potentially faulting memory access.</span>"
            ],
            "answer": "B",
            "solution": "<div class=\"solution-content\"><a name=\"543591\"></a><div itemprop=\"text\"><p data-end=\"4372\" data-start=\"4247\">When the process references a page whose memory has not yet been allocated, the hardware cannot complete the access normally.</p><p data-end=\"4414\" data-start=\"4374\">It generates a <strong data-end=\"4413\" data-start=\"4389\">page fault exception</strong>.</p><p data-end=\"4463\" data-start=\"4416\">The operating system's page-fault handler then:</p><ol start=\"1\" style=\"list-style-type: upper-roman;\"><li data-end=\"4509\" data-start=\"4465\">Allocates the required physical memory.<br/> </li><li data-end=\"4559\" data-start=\"4511\">Updates the corresponding page-table entry.<br/> </li><li data-end=\"4594\" data-start=\"4561\">Makes the translation valid.<br/> </li><li data-end=\"4639\" data-start=\"4596\">Restarts the <strong data-end=\"4638\" data-start=\"4614\">faulting instruction</strong>.<br/> </li></ol><p data-end=\"4733\" data-start=\"4641\">Restarting the instruction is necessary because the original memory access did not complete.</p><p data-end=\"4837\" data-start=\"4735\"><br/><strong>Answer : B</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/543590/go-classes-dpp-gate-cs-operating-system-demand-paging\" target=\"_blank\">GATE Overflow #543590</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"2207\" data-start=\"2101\">The size of an inverted page table grows with the size of the virtual address space that it is supporting.</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">True<br/></span>",
                "<span style=\"display: inline;\">False</span>"
            ],
            "answer": "B",
            "solution": "<div class=\"solution-content\"><a name=\"543588\"></a><div itemprop=\"text\"><p data-end=\"2335\" data-start=\"2271\">A conventional page table is organized around <strong data-end=\"2334\" data-start=\"2317\">virtual pages</strong>.</p><p data-end=\"2408\" data-start=\"2337\">An inverted page table is instead organized around <strong data-end=\"2407\" data-start=\"2388\">physical frames</strong>.</p><p data-end=\"2497\" data-start=\"2410\">Typically, there is one inverted-page-table entry corresponding to each physical frame.</p><p data-end=\"2540\" data-start=\"2499\">Therefore, its size depends primarily on:</p><p data-end=\"2576\" data-start=\"2542\">$\\text{Number of physical frames}$ rather than the total number of virtual pages.</p><p data-end=\"2868\" data-start=\"2626\">Hence, increasing only the virtual-address-space size does not proportionally increase the number of entries in the inverted page table. </p><p data-end=\"2880\" data-start=\"2870\">$\\therefore$<strong> Answer : B</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/543587/go-classes-dpp-gate-cs-operating-system-inverted-page-table\" target=\"_blank\">GATE Overflow #543587</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"953\" data-start=\"864\">Assume a task is divided into $8$ equal-sized segments, and page tables have $4$ entries.</p><p data-end=\"1017\" data-start=\"955\">Thus, the system has a combination of segmentation and paging.</p><p data-end=\"1060\" data-start=\"1019\">Assume also that the page size is $2$ KB.</p><p data-end=\"1124\" data-start=\"1062\">What is the maximum logical address space for the task, in KB?</p></div></span>",
            "image": "",
            "options": [],
            "answer": "64",
            "solution": "<div class=\"solution-content\"><a name=\"543586\"></a><div itemprop=\"text\"><p data-end=\"1183\" data-start=\"1158\">Each page table contains, $4=2^2$ entries.</p><p data-end=\"1240\" data-start=\"1204\">Therefore, each segment can contain: $4$ pages.</p><p data-end=\"1268\" data-start=\"1255\">Page size is: $2\\text{ KB}$</p><p data-end=\"1323\" data-start=\"1285\">So the maximum size of one segment is:</p><p data-end=\"1357\" data-start=\"1325\">$4\\times2\\text{ KB}=8\\text{ KB}$</p><p data-end=\"1382\" data-start=\"1359\">There are $8$ segments.</p><p data-end=\"1394\" data-start=\"1384\">$\\therefore \\text{Maximum logical address space}=8\\times8\\text{ KB}$ $=64\\text{ KB}$</p><p data-end=\"1478\" data-start=\"1472\"><strong>Answer : </strong> $\\boxed{64}$</p><p data-end=\"1538\" data-start=\"1494\"><br/>The complete logical-address split would be:</p><p data-end=\"1612\" data-start=\"1540\">$3\\text{ segment bits}\\ |\\ 2\\text{ page bits}\\ |\\ 11\\text{ offset bits}$</p><p data-end=\"1667\" data-start=\"1614\">because $8=2^3$, $4=2^2$, and $2$ KB $=2^{11}$ bytes.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/543585/go-classes-dpp-gate-cs-operating-system-segmentation-with-paging\" target=\"_blank\">GATE Overflow #543585</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"7177\" data-start=\"7153\">Consider a machine with:</p><p data-end=\"7488\" data-start=\"7337\">How much physical memory is needed for a process with <strong data-end=\"7424\" data-start=\"7391\">three pages of virtual memory</strong>, for example, one code page, one data page, and one stack page?</p><p data-end=\"7513\" data-start=\"7490\">Give your answer in KB.</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">Physical memory $=8$ GB</span>",
                "<span style=\"display: inline;\">Page size $=8$ KB</span>",
                "<span style=\"display: inline;\">Page-table entry size $=4$ bytes</span>",
                "<span style=\"display: inline;\">Virtual address size $=46$ bits</span>",
                "<span style=\"display: inline;\">Every page table must fit into one page</span>"
            ],
            "answer": "48",
            "solution": "<div class=\"solution-content\"><a name=\"543485\"></a><div itemprop=\"text\"><p data-end=\"7563\" data-start=\"7550\">Page size is: $8\\text{ KB}=2^{13}$ bytes</p><p data-end=\"7618\" data-start=\"7593\">Each page table contains: $\\frac{2^{13}}{2^2}=2^{11}$ entries.</p><p data-end=\"7699\" data-start=\"7659\">Therefore, one page-table level handles: $11$ VPN bits.</p><p data-end=\"7747\" data-start=\"7718\">The virtual address contains: $46$ bits.</p><p data-end=\"7786\" data-start=\"7761\">The page offset requires: $13$ bits.</p><p data-end=\"7821\" data-start=\"7801\">$\\therefore$ VPN bits: $46-13=33$</p><p data-end=\"7863\" data-start=\"7835\">Number of page-table levels: $\\frac{33}{11}=3$</p><p data-end=\"7943\" data-start=\"7884\">So the process requires a three-level page-table structure.</p><p data-end=\"8034\" data-start=\"7945\">For the minimum-memory case, the three virtual pages can share the same translation path.</p><p data-end=\"8062\" data-start=\"8036\">Page-table pages required:</p><ul data-end=\"8133\" data-start=\"8064\"><li data-end=\"8086\" data-section-id=\"oljb9n\" data-start=\"8064\">$1$ first-level page</li><li data-end=\"8110\" data-section-id=\"12imjlt\" data-start=\"8087\">$1$ second-level page</li><li data-end=\"8133\" data-section-id=\"pm2svm\" data-start=\"8111\">$1$ third-level page</li></ul><p data-end=\"8145\" data-start=\"8135\">$\\therefore 3$ page-table pages are needed.</p><p data-end=\"8211\" data-start=\"8182\">The actual process also uses: $3$ data/code/stack pages.</p><p data-end=\"8263\" data-start=\"8242\">Total physical pages: $3+3=6$</p><p data-end=\"8294\" data-start=\"8274\">Each page is $8$ KB.</p><p data-end=\"8306\" data-start=\"8296\">$\\therefore \\text{Physical memory}=6\\times8\\text{ KB}=\\boxed{48\\text{ KB}}$</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/543484/go-classes-dpp-gate-cs-operating-system-physical-memory-overhead\" target=\"_blank\">GATE Overflow #543484</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"5575\" data-start=\"5552\">Consider a system with:</p><p data-end=\"5831\" data-start=\"5667\">How much page-table space, in KB, is required to allow a process to access <strong data-end=\"5830\" data-start=\"5742\">two distinct pages whose virtual addresses differ only in their most significant bit</strong>?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$6$-level page tables</span>",
                "<span style=\"display: inline;\">$1$ KB page tables at each level</span>",
                "<span style=\"display: inline;\">$4$-byte page-table entries</span>"
            ],
            "answer": "11",
            "solution": "<div class=\"solution-content\"><a name=\"543482\"></a><div itemprop=\"text\"><p data-end=\"5893\" data-start=\"5868\">Each page table has size $1$ KB</p><p data-end=\"5921\" data-start=\"5903\">Each PTE occupies $4$ bytes</p><p data-end=\"5966\" data-start=\"5934\">Hence, each page table contains: $\\frac{1024}{4}=256=2^8$ entries.</p><p data-end=\"6071\" data-start=\"6004\">The two virtual addresses differ in their <strong data-end=\"6070\" data-start=\"6046\">most significant bit</strong>.</p><p data-end=\"6144\" data-start=\"6073\">Therefore, they select different entries at the first page-table level.</p><p data-end=\"6185\" data-start=\"6146\">The first-level table itself is shared.</p><p data-end=\"6201\" data-start=\"6187\">So we require, $1$ first-level table.</p><p data-end=\"6365\" data-start=\"6228\">After the two addresses take different first-level entries, each address needs its own page-table path through the remaining five levels.</p><p data-end=\"6401\" data-start=\"6367\">Therefore, for Levels $2$ through $6$: $2\\times5=10$ tables are required.</p><p data-end=\"6458\" data-start=\"6440\">Total page tables: $1+10=11$</p><p data-end=\"6498\" data-start=\"6471\">Each table occupies $1$ KB.</p><p data-end=\"6506\" data-start=\"6500\">$\\therefore \\text{Total page-table space}=11\\times1\\text{ KB}=\\boxed{11\\text{ KB}}$</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/543481/go-classes-dpp-gate-cs-operating-system-multilevel-paging\" target=\"_blank\">GATE Overflow #543481</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"4095\" data-start=\"4043\">Consider a three-level page table on a system where:</p><p data-end=\"4505\" data-start=\"4302\">If the page containing address $\\texttt{0x100}$ and the page containing address $\\texttt{0x10000}$ are valid for a process, and no other pages are valid, how many bytes of space do the page tables for this process occupy?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">Page size $=256$ bytes</span>",
                "<span style=\"display: inline;\">Page-table entry size $=2$ bytes</span>",
                "<span style=\"display: inline;\">First-level page tables contain $16$ entries</span>",
                "<span style=\"display: inline;\">Second-level page tables contain $128$ entries</span>",
                "<span style=\"display: inline;\">Third-level page tables contain $128$ entries</span>"
            ],
            "answer": "800",
            "solution": "<div class=\"solution-content\"><a name=\"543480\"></a><div itemprop=\"text\"><p data-end=\"4569\" data-start=\"4546\">First-level table size:</p><p data-end=\"4591\" data-start=\"4571\">$16\\times2=32$ bytes</p><p data-end=\"4617\" data-start=\"4593\">Second-level table size:</p><p data-end=\"4641\" data-start=\"4619\">$128\\times2=256$ bytes</p><p data-end=\"4666\" data-start=\"4643\">Third-level table size:</p><p data-end=\"4690\" data-start=\"4668\">$128\\times2=256$ bytes</p><p data-end=\"4719\" data-start=\"4692\">The address structure uses:</p><ul data-end=\"4811\" data-start=\"4721\"><li data-end=\"4743\" data-section-id=\"1rzz8do\" data-start=\"4721\">$4$ bits for Level $1$</li><li data-end=\"4766\" data-section-id=\"5zfzos\" data-start=\"4744\">$7$ bits for Level $2$</li><li data-end=\"4789\" data-section-id=\"5zfzot\" data-start=\"4767\">$7$ bits for Level $3$</li><li data-end=\"4811\" data-section-id=\"17zhpai\" data-start=\"4790\">$8$ bits for offset</li></ul><p data-end=\"4871\" data-start=\"4813\">The two valid pages share the same Level-1 entry, so only: $1$ first-level table is required.</p><p data-end=\"4961\" data-start=\"4910\">They also use the same first-level branch, so only: $1$ second-level table is required.</p><p data-end=\"5065\" data-start=\"5001\">However, the two pages require <strong data-end=\"5064\" data-start=\"5032\">different third-level tables</strong>.</p><p data-end=\"5077\" data-start=\"5067\">$\\therefore \\text{Page-table space}=32+256+2(256)$</p><p data-end=\"5137\" data-start=\"5124\">$=32+256+512=800$ bytes</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/543479/go-classes-dpp-gate-cs-operating-system-page-table-space\" target=\"_blank\">GATE Overflow #543479</a></small></div>"
        }
    ]
});

registerTest({
    "name": "DPP 27 - Operating System (Memory Management & Virtual Memory - Part 3)",
    "testLabel": "DPP 27",
    "testType": "DPP",
    "bracket": "Memory Management & Virtual Memory - Part 3",
    "subject": "os",
    "series": "cse-dpp-2027",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 13,
    "topicsCovered": "Memory Management & Virtual Memory (Practice Set 3)",
    "questions": [
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"2286\" data-start=\"2224\">Consider a virtual-memory system that uses multi-level paging.</p><p data-end=\"2632\" data-start=\"2509\">A particular process uses only $128$ MB $=2^{27}$ bytes of virtual memory, occupying the consecutive virtual-address range:</p><p data-end=\"2651\" data-start=\"2634\">$0$ to $2^{27}-1$</p><p data-end=\"2759\" data-start=\"2653\">What is the <strong data-end=\"2707\" data-start=\"2665\">total number of individual page tables</strong> required to translate this process's address space?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">Virtual address size $=64$ bits</span>",
                "<span style=\"display: inline;\">Physical address size $=64$ bits</span>",
                "<span style=\"display: inline;\">Page size $=1$ MB $=2^{20}$ bytes</span>",
                "<span style=\"display: inline;\">Page-table entry size $=16$ bytes $=2^4$ bytes</span>",
                "<span style=\"display: inline;\">Each individual page table at every level must fit in one frame</span>"
            ],
            "answer": "3",
            "solution": "<div class=\"solution-content\"><a name=\"543477\"></a><div itemprop=\"text\"><p data-end=\"2805\" data-start=\"2792\">Page size is: $2^{20}$ bytes</p><p data-end=\"2863\" data-start=\"2823\">Therefore, the number of offset bits is: $20$</p><p data-end=\"2888\" data-start=\"2871\">The VPN contains: $64-20=44$ bits.</p><p data-end=\"2951\" data-start=\"2909\">Each page table occupies one page of size: $2^{20}$ bytes</p><p data-end=\"2987\" data-start=\"2969\">Each PTE occupies: $2^4$ bytes</p><p data-end=\"3036\" data-start=\"3002\">Therefore, entries per page table: $\\frac{2^{20}}{2^4}=2^{16}$</p><p data-end=\"3104\" data-start=\"3067\">So one level can index $16$ VPN bits.</p><p data-end=\"3170\" data-start=\"3106\">Since there are $44$ VPN bits, the system requires three levels.</p><p data-end=\"3193\" data-start=\"3172\">Now the process uses: $2^{27}$ bytes.</p><p data-end=\"3241\" data-start=\"3212\">Number of virtual pages used:</p><p data-end=\"3274\" data-start=\"3243\">$\\frac{2^{27}}{2^{20}}=2^7=128$ pages.</p><p data-end=\"3331\" data-start=\"3284\">A single lowest-level page table can represent: $2^{16}$ pages.</p><p data-end=\"3356\" data-start=\"3350\">Since, $128&lt;2^{16}$ only <strong data-end=\"3408\" data-start=\"3377\">one lowest-level page table</strong> is required.</p><p data-end=\"3457\" data-start=\"3423\">To reach that table, we also need:</p><ul data-end=\"3518\" data-start=\"3459\"><li data-end=\"3478\" data-section-id=\"jcqzbs\" data-start=\"3459\">One Level-$1$ table</li><li data-end=\"3498\" data-section-id=\"13gawt7\" data-start=\"3479\">One Level-$2$ table</li><li data-end=\"3518\" data-section-id=\"1blbcgq\" data-start=\"3499\">One Level-$3$ table</li></ul><p data-end=\"3530\" data-start=\"3520\">$\\therefore \\text{Total individual page tables}=1+1+1=\\boxed{3}$</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/543476/go-classes-dpp-gate-cs-operating-system-multilevel-paging\" target=\"_blank\">GATE Overflow #543476</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"33\" data-start=\"0\">Consider the $\\text{x86-64}$ architecture.</p><p data-end=\"42\" data-start=\"35\">Assume:</p><p data-end=\"428\" data-is-last-node=\"\" data-is-only-node=\"\" data-start=\"284\">What is the minimum number of physical pages consumed by a process that allocates $12$ KB, for example, one page each for code, stack, and data?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">Pages are $4$ KB<br/></span>",
                "<span style=\"display: inline;\">Each page-table entry is $8$ bytes<br/></span>",
                "<span style=\"display: inline;\">Each page-table page contains $512$ entries<br/></span>",
                "<span style=\"display: inline;\">The page-table structure has four levels<br/></span>",
                "<span style=\"display: inline;\">Any allocated memory consumes physical pages in RAM<br/></span>",
                "<span style=\"display: inline;\">There is no swapping or demand paging</span>"
            ],
            "answer": "7",
            "solution": "<div class=\"solution-content\"><a name=\"543475\"></a><div itemprop=\"text\"><p data-end=\"1213\" data-start=\"1191\">The process allocates: </p><p data-end=\"1213\" data-start=\"1191\">$\\frac{12\\text{ KB}}{4\\text{ KB}}=3$ physical pages for its actual code, stack, and data.</p><p data-end=\"1345\" data-start=\"1307\">Now consider the page-table structure.</p><p data-end=\"1394\" data-start=\"1347\">The system uses <strong data-end=\"1378\" data-start=\"1363\">four levels</strong> of page tables.</p><p data-end=\"1476\" data-start=\"1396\">For the minimum case, the three mapped pages can share the same page-table path.</p><p data-end=\"1497\" data-start=\"1478\">Therefore, we need:</p><ul data-end=\"1590\" data-start=\"1499\"><li data-end=\"1521\" data-section-id=\"hty8d2\" data-start=\"1499\">$1$ page for Level $1$</li><li data-end=\"1544\" data-section-id=\"hty8d1\" data-start=\"1522\">$1$ page for Level $2$</li><li data-end=\"1567\" data-section-id=\"hty8d0\" data-start=\"1545\">$1$ page for Level $3$</li><li data-end=\"1590\" data-section-id=\"hty8cz\" data-start=\"1568\">$1$ page for Level $4$</li></ul><p data-end=\"1609\" data-start=\"1592\">Page-table pages: $4$</p><p data-end=\"1637\" data-start=\"1616\">Actual process pages: $3$</p><p data-end=\"1654\" data-start=\"1644\">$\\therefore \\text{Total physical pages}=4+3=\\boxed{7}$</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/543474/go-classes-dpp-gate-cs-operating-system-multi-level-page-table\" target=\"_blank\">GATE Overflow #543474</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"6758\" data-start=\"6700\">Consider a virtual memory system that uses 2-level paging.</p><p data-end=\"6777\" data-start=\"6760\">The page size is: $256=2^8$ bytes</p><p data-end=\"6900\" data-start=\"6796\">Each individual page table fits exactly into one memory frame, and the size of each page-table entry is: $8$ bytes</p><p data-end=\"6991\" data-start=\"6913\">What is the maximum size, in bytes, of a virtual address space in this system?</p></div></span>",
            "image": "",
            "options": [],
            "answer": "262144",
            "solution": "<div class=\"solution-content\"><a name=\"543472\"></a><div itemprop=\"text\"><p data-end=\"7064\" data-start=\"7029\">Each page table occupies one frame.</p><p data-end=\"7096\" data-start=\"7066\">Therefore, page-table size is: $256=2^8$ bytes</p><p data-end=\"7133\" data-start=\"7115\">Each PTE occupies: $8=2^3$ bytes</p><p data-end=\"7199\" data-start=\"7150\">Thus, the number of entries in one page table is:</p><p data-end=\"7225\" data-start=\"7201\">$\\frac{2^8}{2^3}=2^5=32$</p><p data-end=\"7274\" data-start=\"7227\">A two-level page table can therefore represent: $2^5\\times2^5=2^{10}$ virtual pages.</p><p data-end=\"7342\" data-start=\"7315\">Each virtual page contains: $2^8$ bytes</p><p data-end=\"7402\" data-start=\"7357\">Hence, maximum virtual-address-space size is: $2^{10}\\times2^8$</p><p data-end=\"7438\" data-start=\"7423\">$=2^{18}$ bytes</p><p data-end=\"7455\" data-start=\"7440\">$=262144$ bytes</p><p data-end=\"7482\" data-start=\"7457\">$\\therefore$ Answer : $\\boxed{262144}$</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/543471/go-classes-dpp-gate-cs-operating-system-two-level-page-table\" target=\"_blank\">GATE Overflow #543471</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"127\" data-start=\"0\">A byte-addressable machine implements virtual memory with a $4$ MB virtual address space using a three-level page-table system.</p><p data-end=\"176\" data-start=\"129\">All page tables live in physical address space.</p><p data-end=\"219\" data-start=\"178\">The breakdown of virtual-address bits is:</p><p data-end=\"331\" data-start=\"221\">$$\\begin{array}{|c|c|c|c|} <br/>\\hline<br/>\\text{L1} &amp; \\text{L2} &amp; \\text{L3} &amp; \\text{Offset} \\\\<br/>\\hline<br/>5 &amp; 5 &amp; 5 &amp; 7 \\\\<br/>\\hline<br/>\\end{array}$$</p><p data-end=\"366\" data-is-last-node=\"\" data-is-only-node=\"\" data-start=\"333\">How many PTEs can fit in a frame?</p></div></span>",
            "image": "",
            "options": [],
            "answer": "32",
            "solution": "<div class=\"solution-content\"><a name=\"543470\"></a><div itemprop=\"text\"><p data-end=\"5916\" data-start=\"5891\">The page offset contains: $7$ bits</p><p data-end=\"5961\" data-start=\"5928\">Therefore, page or frame size is: $2^7=128$ bytes</p><p data-end=\"6025\" data-start=\"5980\">At each page-table level, the index contains: $5$ bits</p><p data-end=\"6073\" data-start=\"6037\">Therefore, each page table contains: $2^5=32$ entries.</p><p data-end=\"6231\" data-start=\"6095\">Since each page table occupies exactly one physical-memory frame in the given organization, the number of PTEs that fit in one frame is: $\\boxed{32}$</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/543469/go-classes-dpp-gate-cs-operating-system-pte\" target=\"_blank\">GATE Overflow #543469</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"69\" data-start=\"0\">The following table shows some parameters of a virtual memory system:</p><p>$$\\begin{array}{|c|c|} \\hline<br/>\\text{Parameter} &amp; \\text{Value} \\\\<br/>\\hline<br/>\\text{Virtual Address} &amp; 42\\ \\text{bits} \\\\<br/>\\text{Physical Address} &amp; 40\\ \\text{bits} \\\\<br/>\\text{Physical Page Size} &amp; 64\\ \\text{KB} \\\\<br/>\\text{Page Table Entry} &amp; 8\\ \\text{bytes} \\\\<br/>\\hline<br/>\\end{array}$$ In general, the virtual address space of a process is mostly empty. To reduce the size of the page table, a multilevel page table is used for address translation.</p><p data-end=\"550\" data-is-last-node=\"\" data-is-only-node=\"\" data-start=\"399\">How many levels of page tables will be needed for address translation, given that the size of a page table at any level is the size of a physical page?</p></div></span>",
            "image": "",
            "options": [],
            "answer": "2",
            "solution": "<div class=\"solution-content\"><a name=\"543468\"></a><div itemprop=\"text\"><p data-end=\"4572\" data-start=\"4559\">Page size is:</p><p data-end=\"4601\" data-start=\"4574\">$64\\text{ KB}=2^{16}$ bytes</p><p data-end=\"4630\" data-start=\"4603\">Hence, the offset requires: $16$ bits</p><p data-end=\"4686\" data-start=\"4643\">The virtual page number therefore requires:</p><p data-end=\"4703\" data-start=\"4688\">$42-16=26$ bits</p><p data-end=\"4730\" data-start=\"4705\">Each page table has size: $2^{16}$ bytes</p><p data-end=\"4779\" data-start=\"4748\">Each page-table entry has size: $8=2^3$ bytes</p><p data-end=\"4834\" data-start=\"4796\">Therefore, entries per page table are:</p><p data-end=\"4863\" data-start=\"4836\">$\\frac{2^{16}}{2^3}=2^{13}$</p><p data-end=\"4892\" data-start=\"4865\">Hence, one level can index: $13$ bits</p><p data-end=\"4932\" data-start=\"4905\">The VPN contains $26$ bits.</p><p data-end=\"4944\" data-start=\"4934\">$\\therefore \\frac{26}{13}=2$</p><p data-end=\"5005\" data-start=\"4965\">So two page-table levels are sufficient.</p><p data-end=\"5037\" data-start=\"5007\">The complete address split is:</p><p data-end=\"5095\" data-start=\"5039\">$13\\text{ bits} \\mid 13\\text{ bits} \\mid 16\\text{ bits}$</p><p data-end=\"5118\" data-start=\"5097\"><br/><strong>Answer :</strong> $\\boxed{2}$</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/543467/go-classes-dpp-gate-cs-operating-system-required-paging-levels\" target=\"_blank\">GATE Overflow #543467</a></small></div>"
        },
        {
            "marks": 2,
            "neg": 0,
            "type": "MSQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider a system with:</p><p>Which of the following addresses use the same first-level page-table entry as:</p><p>$$\\texttt{0x00 123 456 789}$$</p><p><strong>Given Details:</strong></p><ul><li>Two-level page tables</li><li>$42$-bit virtual addresses</li><li>$40$-bit physical addresses</li><li>$8$-byte page-table entries</li><li>$64$ KB pages</li><li>$64$ KB page tables at each level</li></ul></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\texttt{0x00 123 444 444}$</span>",
                "<span style=\"display: inline;\">$\\texttt{0x00 0A9 876 789}$</span>",
                "<span style=\"display: inline;\">$\\texttt{0x00 136 345 678}$</span>",
                "<span style=\"display: inline;\">$\\texttt{0x00 000 006 789}$</span>"
            ],
            "answer": [
                "A"
            ],
            "solution": "<div class=\"solution-content\"><a name=\"543465\"></a><div itemprop=\"text\"><p data-end=\"2753\" data-start=\"2740\">Page size is:</p><p data-end=\"2782\" data-start=\"2755\">$64\\text{ KB}=2^{16}$ bytes</p><p data-end=\"2820\" data-start=\"2784\">Therefore, the page offset requires: $16$ bits</p><p data-end=\"2858\" data-start=\"2833\">Each page table occupies: $64\\text{ KB}=2^{16}$ bytes</p><p data-end=\"2907\" data-start=\"2889\">Each PTE occupies: $8=2^3$ bytes</p><p data-end=\"2971\" data-start=\"2924\">Hence, the number of entries per page table is: $\\dfrac{2^{16}}{2^3}=2^{13}$</p><p data-end=\"3036\" data-start=\"3002\">So each page-table level requires: $13$ index bits</p><p data-end=\"3108\" data-start=\"3055\">The $42$-bit virtual address is therefore divided as:</p><p data-end=\"3166\" data-start=\"3110\">$13\\text{ bits} \\mid 13\\text{ bits} \\mid 16\\text{ bits}$</p><p data-end=\"3222\" data-start=\"3168\">The first-level index is given by the upper $13$ bits.</p><p data-end=\"3250\" data-start=\"3224\">For the reference address:</p><p data-end=\"3270\" data-start=\"3252\">$\\texttt{0x00 123 456 789}$</p><p data-end=\"3301\" data-start=\"3272\">the first-level index is $9$.</p><p data-end=\"3324\" data-start=\"3303\">Checking the options:</p><ul data-end=\"3441\" data-start=\"3326\"><li data-end=\"3354\" data-section-id=\"1y5g9kj\" data-start=\"3326\">(A) first-level index $=9$</li><li data-end=\"3383\" data-section-id=\"1ao8798\" data-start=\"3355\">(B) first-level index $=5$</li><li data-end=\"3412\" data-section-id=\"4d0vw1\" data-start=\"3384\">(C) first-level index $=9$</li><li data-end=\"3441\" data-section-id=\"427l7j\" data-start=\"3413\">(D) first-level index $=0$</li></ul><p data-end=\"3513\" data-start=\"3443\">Therefore, only (A) and (C) use the same first-level page-table entry.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/543464/go-classes-dpp-gate-cs-operating-system-multi-level-address-split\" target=\"_blank\">GATE Overflow #543464</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><section data-testid=\"conversation-turn-6\" data-turn=\"assistant\" data-turn-id=\"request-WEB:906eb100-e9f7-4485-b394-7a993c56c820-2\" data-turn-id-container=\"request-WEB:906eb100-e9f7-4485-b394-7a993c56c820-2\" dir=\"auto\"><p data-end=\"482\" data-is-last-node=\"\" data-start=\"0\">Let us assume there is a two-level page table in your system.</p><p>The virtual address is split as:</p><p>$\\texttt{&lt;vpn part1, vpn part2, page offset&gt;}$</p><p>Which of the following statements is true?</p></section></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\texttt{vpn part 1}$ is used to index the physical page that contains data.<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{vpn part 1}$ is used to get the base address of the first-level table.<br/></span>",
                "<span style=\"display: inline;\">Page offset is used to index the TLB.<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{vpn part 2}$ is used to index the PTE in the second-level page table.</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"543462\"></a><div itemprop=\"text\"><p data-end=\"1328\" data-start=\"1274\">In two-level paging, the virtual address has the form: $$ \\texttt{VPN\\_1} \\mid \\texttt{VPN\\_2} \\mid \\texttt{Offset} $$ The first part, $\\texttt{VPN\\_1}$, indexes the first-level page table. </p><p data-end=\"1328\" data-start=\"1274\">The selected first-level entry gives the location of the required second-level page table. </p><p data-end=\"1328\" data-start=\"1274\">Then $\\texttt{VPN\\_2}$ is used to select the required page-table entry in the second-level table.</p><p data-end=\"1680\" data-start=\"1613\">The page offset is finally combined with the physical frame number.</p><p data-end=\"1692\" data-start=\"1682\">Therefore:</p><ul data-end=\"1845\" data-start=\"1694\"><li data-end=\"1709\" data-section-id=\"5xhgc1\" data-start=\"1694\">(A) Incorrect<br/> </li><li data-end=\"1815\" data-section-id=\"16z3yvz\" data-start=\"1710\">(B) Incorrect, because the base address of the first-level table comes from a page-table base register.<br/> </li><li data-end=\"1831\" data-section-id=\"1fyaiib\" data-start=\"1816\">(C) Incorrect<br/> </li><li data-end=\"1845\" data-section-id=\"181p9g3\" data-start=\"1832\">(D) Correct</li></ul></div><br><br><small>Source: <a href=\"https://gateoverflow.in/543460/go-classes-dpp-gate-cs-operating-system-two-level-paging\" target=\"_blank\">GATE Overflow #543460</a></small></div>"
        },
        {
            "marks": 2,
            "neg": 0,
            "type": "MSQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"1247\" data-start=\"1159\">Which of the following statements about small $(4 ~\\text{KB})$ and large $(4 ~\\text{MB})$ pages are correct?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">Large pages allow for a more efficient use of the TLB.<br/></span>",
                "<span style=\"display: inline;\">Accessing a large page, in the case of a TLB miss, would be slower than accessing a small page.<br/></span>",
                "<span style=\"display: inline;\">Large pages suffer from internal fragmentation.<br/></span>",
                "<span style=\"display: inline;\">Large pages suffer from external fragmentation.</span>"
            ],
            "answer": [
                "A"
            ],
            "solution": "<div class=\"solution-content\"><a name=\"543432\"></a><div itemprop=\"text\"><p data-end=\"1608\" data-start=\"1579\"><strong data-end=\"1608\" data-start=\"1579\">Statement (A) is correct.</strong></p><p data-end=\"1712\" data-start=\"1610\">One TLB entry for a large page covers a much larger address range. Hence, the <strong data-end=\"1701\" data-start=\"1688\">TLB reach</strong> increases.</p><p data-end=\"1726\" data-start=\"1714\">For example: $4\\text{ MB}&gt;4\\text{ KB}$</p><p data-end=\"1829\" data-start=\"1755\">So the same number of TLB entries can cover more memory using large pages.</p><p data-end=\"1862\" data-start=\"1831\"><br/><strong data-end=\"1862\" data-start=\"1831\">Statement (B) is incorrect.</strong></p><p data-end=\"2006\" data-start=\"1864\">A large page is not inherently slower on a TLB miss. In some paging structures, a large-page mapping can even require fewer page-table levels.</p><p data-end=\"2037\" data-start=\"2008\"><br/><strong data-end=\"2037\" data-start=\"2008\">Statement (C) is correct.</strong></p><p data-end=\"2142\" data-start=\"2039\">Larger pages can waste more unused space inside the allocated page. This is <strong data-end=\"2141\" data-start=\"2115\">internal fragmentation</strong>.</p><p data-end=\"2175\" data-start=\"2144\"><br/><strong data-end=\"2175\" data-start=\"2144\">Statement (D) is incorrect.</strong></p><p data-end=\"2291\" data-start=\"2177\">Paging uses fixed-size frames and therefore does not suffer from external fragmentation in the usual paging model.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/543431/go-classes-dpp-gate-cs-operating-system-page-size-and-tlb\" target=\"_blank\">GATE Overflow #543431</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>The following virtual-to-physical address translations are observed for a process. All addresses are $32$ bits long.</p><p>\\[<br/>\\begin{array}{c|c}<br/>\\text{Virtual address} &amp; \\text{Physical address} \\\\<br/>\\hline<br/>\\texttt{0x00080AF0} &amp; \\texttt{0x00101AF0} \\\\<br/>\\texttt{0x00002224} &amp; \\texttt{0x00083224} \\\\<br/>\\texttt{0x00073234} &amp; \\texttt{0x00183234}<br/>\\end{array}<br/>\\]</p><p data-end=\"1394\" data-start=\"1336\">Which page size is consistent with all three translations?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">Only $64$ KB<br/></span>",
                "<span style=\"display: inline;\">Only $4$ KB<br/></span>",
                "<span style=\"display: inline;\">Both $64$ KB and $4$ KB<br/></span>",
                "<span style=\"display: inline;\">Neither $64$ KB nor $4$ KB</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"543415\"></a><div itemprop=\"text\"><p data-end=\"1627\" data-start=\"1539\">During paging, the page offset remains unchanged during virtual-to-physical translation.</p><p data-end=\"1661\" data-section-id=\"1f5gi3g\" data-start=\"1629\"><strong>Checking a $\\textbf{64}$ KB page size</strong></p><p data-end=\"1690\" data-start=\"1663\">$64\\text{ KB}=2^{16}$ bytes</p><p data-end=\"1784\" data-start=\"1692\">Therefore, the lower $16$ bits, or the final four hexadecimal digits, must remain unchanged.</p><p data-end=\"1795\" data-start=\"1786\">Consider:</p><p data-end=\"1826\" data-start=\"1797\">Virtual address: $\\texttt{0x00002224}$</p><p data-end=\"1858\" data-start=\"1828\">Physical address: $\\texttt{0x00083224}$</p><p data-end=\"1886\" data-start=\"1860\">Their lower $16$ bits are:</p><p data-end=\"1896\" data-start=\"1888\">$\\texttt{0x2224}$ and $\\texttt{0x3224}$</p><p data-end=\"1933\" data-start=\"1913\">These are different.</p><p data-end=\"1982\" data-start=\"1935\">Therefore, a $64$ KB page size is not possible.</p><p data-end=\"2015\" data-section-id=\"o1gxca\" data-start=\"1984\"><br/>Checking a $\\textbf{4}$ KB page size</p><p data-end=\"2043\" data-start=\"2017\">$4\\text{ KB}=2^{12}$ bytes</p><p data-end=\"2138\" data-start=\"2045\">Therefore, the lower $12$ bits, or the final three hexadecimal digits, must remain unchanged.</p><p data-end=\"2156\" data-start=\"2140\">The offsets are:</p><ul data-end=\"2211\" data-start=\"2158\"><li data-end=\"2175\" data-section-id=\"3wwpqb\" data-start=\"2158\">$\\texttt{AF0}$ and $\\texttt{AF0}$</li><li data-end=\"2193\" data-section-id=\"1267chv\" data-start=\"2176\">$\\texttt{224}$ and $\\texttt{224}$</li><li data-end=\"2211\" data-section-id=\"nysfsz\" data-start=\"2194\">$\\texttt{​​​​​​​234}$ and $\\texttt{234}$</li></ul><p data-end=\"2248\" data-start=\"2213\">All three offsets remain unchanged.</p><p data-end=\"2292\" data-start=\"2250\">Therefore, a $4$ KB page size is possible.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/543414/go-classes-dpp-gate-cs-operating-system-page-size-check\" target=\"_blank\">GATE Overflow #543414</a></small></div>"
        },
        {
            "marks": 2,
            "neg": 0,
            "type": "MSQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Which of the following statements about multi-level page tables are correct?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">A multi-level page table may consume more pages than a linear page table for some address-space usage patterns.<br/></span>",
                "<span style=\"display: inline;\">Page-table memory is generally easier to allocate because lower-level tables are divided into separate page-sized chunks.<br/></span>",
                "<span style=\"display: inline;\">Without a TLB hit, a multi-level page-table lookup generally requires more lookup accesses than a linear page table.<br/></span>",
                "<span style=\"display: inline;\">Systems with larger virtual-address spaces commonly use more page-table levels.<br/></span>",
                "<span style=\"display: inline;\">A TLB reduces the amount of memory occupied by the multi-level page table.</span>"
            ],
            "answer": [
                "A"
            ],
            "solution": "<div class=\"solution-content\"><a name=\"543018\"></a><div itemprop=\"text\"><p data-end=\"9456\" data-start=\"9427\"><strong data-end=\"9456\" data-start=\"9427\">Statement (A) is correct.</strong></p><p data-end=\"9532\" data-start=\"9458\">A multi-level page table adds directory and intermediate-level structures.</p><p data-end=\"9712\" data-start=\"9534\">If mappings are spread across the entire virtual address space, many lower-level tables may be required. The extra levels can make it consume more pages than a linear page table.</p><p data-end=\"9743\" data-start=\"9714\"><br/><strong data-end=\"9743\" data-start=\"9714\">Statement (B) is correct.</strong></p><p data-end=\"9815\" data-start=\"9745\">A large linear page table may require one large contiguous allocation.</p><p data-end=\"9939\" data-start=\"9817\">A multi-level page table is divided into smaller page-sized chunks, and lower-level tables can be allocated independently.</p><p data-end=\"9970\" data-start=\"9941\"><br/><strong data-end=\"9970\" data-start=\"9941\">Statement (C) is correct.</strong></p><p data-end=\"10029\" data-start=\"9972\">A linear page table requires one page-table-entry lookup.</p><p data-end=\"10066\" data-start=\"10031\">A two-level page table may require:</p><p data-end=\"10111\" data-start=\"10068\">$1$ directory access $+1$ page-table access</p><p data-end=\"10201\" data-start=\"10113\">Additional levels require further accesses when the translation is not found in the TLB.</p><p data-end=\"10232\" data-start=\"10203\"><br/><strong data-end=\"10232\" data-start=\"10203\">Statement (D) is correct.</strong></p><p data-end=\"10378\" data-start=\"10234\">As the virtual-page number becomes larger, additional levels are often used so that each page-table structure remains manageable and page-sized.</p><p data-end=\"10411\" data-start=\"10380\"><br/><strong data-end=\"10411\" data-start=\"10380\">Statement (E) is incorrect.</strong></p><p data-end=\"10486\" data-start=\"10413\">The TLB caches recently used translations and improves translation speed.</p><p data-end=\"10575\" data-start=\"10488\">It does not reduce the actual number or size of page-table structures stored in memory.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/543017/go-classes-dpp-gate-cs-operating-system-multi-level-properties\" target=\"_blank\">GATE Overflow #543017</a></small></div>"
        }
    ]
});

registerTest({
    "name": "DPP 28 - Operating System (Memory Management & Virtual Memory - Part 4)",
    "testLabel": "DPP 28",
    "testType": "DPP",
    "bracket": "Memory Management & Virtual Memory - Part 4",
    "subject": "os",
    "series": "cse-dpp-2027",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 11,
    "topicsCovered": "Memory Management & Virtual Memory (Practice Set 4)",
    "questions": [
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"7595\" data-start=\"7502\">A processor experiences a TLB miss while translating an address using a two-level page table.</p><p data-end=\"7680\" data-start=\"7597\">What is the number of main-memory accesses required only for the page-table lookup?</p><p data-end=\"7751\" data-start=\"7682\">Do not include the final access to the requested instruction or data.</p></div></span>",
            "image": "",
            "options": [],
            "answer": "2",
            "solution": "<div class=\"solution-content\"><a name=\"543016\"></a><div itemprop=\"text\"><p data-end=\"7834\" data-start=\"7784\">A two-level page table requires two lookup stages.</p><p data-end=\"7853\" data-start=\"7836\"><strong data-end=\"7853\" data-start=\"7836\">First access:</strong></p><p data-end=\"7951\" data-start=\"7855\">The processor accesses the page-directory entry using the first part of the virtual-page number.</p><p data-end=\"7971\" data-start=\"7953\"><strong data-end=\"7971\" data-start=\"7953\">Second access:</strong></p><p data-end=\"8077\" data-start=\"7973\">The processor uses the selected page-directory entry to locate and access the required page-table entry.</p><p data-end=\"8089\" data-start=\"8079\">$\\therefore \\text{Page-table lookup accesses}=1+1=2$</p><p data-end=\"8213\" data-start=\"8134\">The final access to the actual instruction or data is excluded by the question.</p><p data-end=\"8236\" data-start=\"8215\">Hence, the answer is: $\\boxed{2}$</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/543015/go-classes-dpp-gate-cs-operating-system-page-walk-accesses\" target=\"_blank\">GATE Overflow #543015</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"4672\" data-start=\"4659\">A system has:</p><p data-end=\"4936\" data-start=\"4893\">The required physical-memory pages contain:</p><p data-end=\"5053\" data-start=\"4938\">Page $6:$</p><pre><code>0a 1c 01 14 0b 1a 19 0a 0a 1a 0c 14 02 0c 1c 0c 15 04 0e 13 17 11 08 05 08 07 04 13 0f 1d 0f 1e</code></pre><p data-end=\"5171\" data-start=\"5055\">Page $73:$</p><pre><code>a2 d2 97 96 d9 7f 87 b4 b7 f2 f4 82 bf 7f be 93 e8 9d 99 9e f1 7f 7f b0 d8 da eb b1 81 c3 c2 f6</code></pre><p data-end=\"5290\" data-start=\"5173\">Page $114:$</p><pre><code>7f 7f 7f 7f 82 7f 7f 7f 7f 7f 7f 7f 99 7f 7f 7f 7f 7f 7f 86 7f 7f 7f 7f 7f 7f 8f 7f 7f 7f 7f 7f</code></pre><p data-end=\"5375\" data-start=\"5292\">What happens when the processor loads from virtual addresses $\\texttt{0x1787}$ and $\\texttt{0x2665}$?</p><p><strong>Given Details:</strong></p><ul><li>$15$-bit virtual addresses</li><li>Page size $=32$ bytes</li><li>A two-level page table</li><li>One-byte PDEs and PTEs</li><li>Entry format: one valid bit followed by a $7$-bit physical-frame number</li><li>Page-directory base register $PDBR=73$</li></ul></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">Both addresses generate faults.</span>",
                "<span style=\"display: inline;\">$\\texttt{0x1787}$ generates a fault, while $\\texttt{0x2665}$ returns $\\texttt{0x1A}$.</span>",
                "<span style=\"display: inline;\">$\\texttt{0x1787}$ returns $\\texttt{0x1A}$, while $\\texttt{0x2665}$ generates a fault.</span>",
                "<span style=\"display: inline;\">$\\texttt{0x1787}$ generates a fault, while $\\texttt{0x2665}$ returns $\\texttt{0x86}$.</span>"
            ],
            "answer": "B",
            "solution": "<div class=\"solution-content\"><a name=\"543014\"></a><div itemprop=\"text\"><p data-end=\"5658\" data-start=\"5641\">The page size is:</p><p data-end=\"5674\" data-start=\"5660\">$32=2^5$ bytes</p><p data-end=\"5721\" data-start=\"5676\">Therefore, the page offset requires $5$ bits.</p><p data-end=\"5766\" data-start=\"5723\">The virtual address has $15$ bits, leaving : $15-5=10$ bits for the virtual-page number.</p><p data-end=\"5904\" data-start=\"5814\">Since one page-table page contains $32$ one-byte entries, each level uses a $5$-bit index.</p><p data-end=\"5946\" data-start=\"5906\">Thus, the virtual address is divided as:</p><p data-end=\"6014\" data-start=\"5948\">$5$-bit directory index $|$ $5$-bit table index $|$ $5$-bit offset</p><p data-end=\"6043\" data-section-id=\"1mtn51\" data-start=\"6016\"><br/><strong>Translation of</strong> $\\texttt{0x1787}$</p><p data-end=\"6064\" data-start=\"6045\">In $15$-bit binary:</p><p data-end=\"6103\" data-start=\"6066\">$\\texttt{0x1787}=00101\\ 11100\\ 00111$</p><p data-end=\"6115\" data-start=\"6105\">Therefore:</p><ul data-end=\"6173\" data-start=\"6117\"><li data-end=\"6139\" data-section-id=\"dlhn07\" data-start=\"6117\">Directory index $=5$</li><li data-end=\"6159\" data-section-id=\"b9rjrz\" data-start=\"6140\">Table index $=28$</li><li data-end=\"6173\" data-section-id=\"1utg29b\" data-start=\"6160\">Offset $=7$</li></ul><p data-end=\"6219\" data-start=\"6175\">The page directory is in physical page $73$.</p><p data-end=\"6247\" data-start=\"6221\">Entry $5$ of page $73$ is : $\\texttt{0x7F}$ Its most significant bit is $0$, so the entry is invalid.</p><p data-end=\"6335\" data-start=\"6325\">$\\therefore \\texttt{0x1787}$ generates a fault.</p><p data-end=\"6043\" data-section-id=\"1mtn51\" data-start=\"6016\"><br/><strong>Translation of</strong> $\\texttt{0x2665}$</p><p data-end=\"6423\" data-start=\"6404\">In $15$-bit binary:</p><p data-end=\"6462\" data-start=\"6425\">$\\texttt{0x2665}=01001\\ 10011\\ 00101$</p><p data-end=\"6474\" data-start=\"6464\">Therefore:</p><ul data-end=\"6532\" data-start=\"6476\"><li data-end=\"6498\" data-section-id=\"dlhnaz\" data-start=\"6476\">Directory index $=9$<br/> </li><li data-end=\"6518\" data-section-id=\"b9riyl\" data-start=\"6499\">Table index $=19$<br/> </li><li data-end=\"6532\" data-section-id=\"1utg27h\" data-start=\"6519\">Offset $=5$<br/> </li></ul><p data-end=\"6560\" data-start=\"6534\">Entry $9$ of page $73$ is: $\\texttt{0xF2}$ Its valid bit is $1$.</p><p data-end=\"6631\" data-start=\"6602\">Removing the valid bit gives:</p><p data-end=\"6663\" data-start=\"6633\">$\\text{PFN}=\\texttt{0x72}=114$</p><p data-end=\"6737\" data-start=\"6665\">Therefore, the second-level page table is stored in physical page $114$.</p><p data-end=\"6767\" data-start=\"6739\">Entry $19$ of page $114$ is: $\\texttt{0x86}$</p><p data-end=\"6832\" data-start=\"6786\">Its valid bit is $1$, and its frame number is: $\\text{PFN}=6$</p><p data-end=\"6902\" data-start=\"6850\">The final physical location is page $6$, offset $5$.</p><p data-end=\"6951\" data-start=\"6904\">The byte at offset $5$ in physical page $6$ is: $\\texttt{0x1A}$</p><p data-end=\"6980\" data-start=\"6970\">Therefore:</p><ul data-end=\"7036\" data-start=\"6982\"><li data-end=\"7010\" data-section-id=\"wj15m\" data-start=\"6982\">$\\texttt{0x1787}$ generates a fault<br/> </li><li data-end=\"7036\" data-section-id=\"w8qz6u\" data-start=\"7011\">$\\texttt{0x2665}$ returns $\\texttt{0x1A}$<br/> </li></ul><p data-end=\"7067\" data-start=\"7038\"><strong>Answer :</strong> <strong data-end=\"7076\" data-start=\"7069\">B</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/543011/go-classes-dpp-gate-cs-operating-system-multi-level-address-translation\" target=\"_blank\">GATE Overflow #543011</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"2966\" data-start=\"2879\">Which statement correctly describes the purpose of the valid bit in a page-table entry?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">It indicates whether the page has been modified. An invalid-bit access causes the page to be written to disk.<br/></span>",
                "<span style=\"display: inline;\">It indicates whether the translation may be used by the process. Access through an invalid entry causes the MMU to generate an exception.<br/></span>",
                "<span style=\"display: inline;\">It indicates whether the page was recently referenced. Access through an invalid entry always produces a TLB hit.<br/></span>",
                "<span style=\"display: inline;\">It indicates that the page is read-only. Access through an invalid entry is silently ignored.</span>"
            ],
            "answer": "B",
            "solution": "<div class=\"solution-content\"><a name=\"543009\"></a><div itemprop=\"text\"><p data-end=\"3592\" data-start=\"3479\">The valid bit tells the MMU whether a particular page-table entry represents a legal translation for the process.</p><p data-end=\"3597\" data-start=\"3594\">If, $valid=1$ the translation may be used.</p><p data-end=\"3643\" data-start=\"3640\">If, $valid=0$ the virtual page is not currently valid for that process.</p><p data-end=\"3921\" data-start=\"3715\">When the process tries to access an address whose page-table entry is invalid, the MMU cannot complete the translation normally. </p><p data-end=\"3921\" data-start=\"3715\">It generates an exception or fault, which is handled by the operating system.</p><p data-end=\"3955\" data-start=\"3923\">The valid bit is different from:</p><ul data-end=\"4114\" data-start=\"3957\"><li data-end=\"4002\" data-section-id=\"s6eqyh\" data-start=\"3957\">The dirty bit, which indicates modification<br/> </li><li data-end=\"4046\" data-section-id=\"1x96ije\" data-start=\"4003\">The reference bit, which indicates access<br/> </li><li data-end=\"4114\" data-section-id=\"11s2o53\" data-start=\"4047\">Protection bits, which control read, write, or execute permission</li></ul><p data-end=\"4145\" data-start=\"4116\"><br/><strong>Answer :</strong> <strong data-end=\"4154\" data-start=\"4147\">B</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/543008/go-classes-dpp-gate-cs-operating-system-page-table-entry\" target=\"_blank\">GATE Overflow #543008</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"34\" data-start=\"0\">Consider the following page table:</p><p data-end=\"203\" data-start=\"36\">$$\\begin{array}{|c|c|}<br/>\\hline<br/>\\text{Virtual page} &amp; \\text{Frame} \\\\<br/>\\hline<br/>0 &amp; 3 \\\\<br/>\\hline<br/>1 &amp; 10 \\\\<br/>\\hline<br/>2 &amp; 9 \\\\<br/>\\hline<br/>3 &amp; 2 \\\\<br/>\\hline<br/>4 &amp; 0 \\\\<br/>\\hline<br/>\\end{array}$$</p><p data-end=\"235\" data-start=\"205\">The page size is $1024$ bytes.</p><p data-end=\"321\" data-start=\"237\">Assume that physical address $2075$ belongs to the memory allocated to this process.</p><p data-end=\"376\" data-start=\"323\">What virtual address maps to physical address $2075$?</p><p data-end=\"409\" data-is-last-node=\"\" data-is-only-node=\"\" data-start=\"378\"><em>Enter the answer as an integer.</em></p></div></span>",
            "image": "",
            "options": [],
            "answer": "3099",
            "solution": "<div class=\"solution-content\"><a name=\"543001\"></a><div itemprop=\"text\"><p data-end=\"6872\" data-start=\"6829\">First, determine the physical frame number:</p><p data-end=\"6938\" data-start=\"6874\">$\\text{Frame number}=\\left\\lfloor\\frac{2075}{1024}\\right\\rfloor=2$</p><p data-end=\"6960\" data-start=\"6946\">The offset is:</p><p data-end=\"6991\" data-start=\"6962\">$\\text{Offset}=2075\\bmod1024=27$</p><p data-end=\"7020\" data-start=\"7000\">From the page table:</p><p data-end=\"7079\" data-start=\"7022\">$\\text{Virtual page }3\\rightarrow\\text{Physical frame }2$</p><p data-end=\"7133\" data-start=\"7081\">Therefore, the corresponding virtual page number is: $3$</p><p data-end=\"7163\" data-start=\"7140\">The virtual address is:</p><p data-end=\"7206\" data-start=\"7165\">$\\text{Virtual Address}=(3\\times1024)+27$</p><p data-end=\"7218\" data-start=\"7208\">$=3072+27=3099$</p><p data-end=\"7259\" data-start=\"7229\">Hence, the virtual address is: $\\boxed{3099}$</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/543000/go-classes-dpp-gate-cs-operating-system-physical-to-virtual-translation\" target=\"_blank\">GATE Overflow #543000</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"4700\" data-start=\"4615\">A system uses paging to implement virtual memory and uses a simple linear page table.</p><p data-end=\"4717\" data-start=\"4702\">The system has:</p><p data-end=\"5017\" data-start=\"4940\">Assume that each page-table entry occupies the minimum whole number of bytes.</p><p data-end=\"5109\" data-start=\"5019\">How many megabytes of memory are occupied by page tables when $100$ processes are running?</p><p data-end=\"5134\" data-start=\"5111\"><em>Enter the answer in MB.</em></p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">Virtual-address space $=1\\text{ GB}=2^{30}$ bytes<br/></span>",
                "<span style=\"display: inline;\">Page size $=1\\text{ KB}=2^{10}$ bytes<br/></span>",
                "<span style=\"display: inline;\">Maximum number of physical frames $=2^{15}$<br/></span>",
                "<span style=\"display: inline;\">Each page-table entry contains:<br/> <ul data-end=\"4938\" data-start=\"4893\"><li data-end=\"4908\" data-section-id=\"1yzpszp\" data-start=\"4893\">One valid bit<br/> </li><li data-end=\"4938\" data-section-id=\"83437e\" data-start=\"4911\">The physical frame number<br/> </li></ul></span>"
            ],
            "answer": "200",
            "solution": "<div class=\"solution-content\"><a name=\"542999\"></a><div itemprop=\"text\"><p data-end=\"5222\" data-start=\"5179\">The number of virtual pages per process is: $\\dfrac{2^{30}}{2^{10}}=2^{20}$</p><p data-end=\"5289\" data-start=\"5256\">Therefore, each process requires:</p><p data-end=\"5319\" data-start=\"5291\">$2^{20}$ page-table entries.</p><p data-end=\"5413\" data-start=\"5321\">The system supports $2^{15}$ physical frames. Therefore, the physical frame number requires: $15$ bits</p><p data-end=\"5476\" data-start=\"5426\">Each page-table entry also contains one valid bit.</p><p data-end=\"5483\" data-start=\"5478\">Thus:</p><p data-end=\"5522\" data-start=\"5485\">$\\text{PTE size}=15+1=16\\text{ bits}$</p><p data-end=\"5541\" data-start=\"5524\">$=2\\text{ bytes}$</p><p data-end=\"5582\" data-start=\"5543\"><br/>The page-table size for one process is:</p><p data-end=\"5599\" data-start=\"5584\">$2^{20}\\times2=2^{21}\\text{ bytes}=2\\text{ MB}$</p><p data-end=\"5661\" data-start=\"5641\"><br/>For $100$ processes:</p><p data-end=\"5699\" data-start=\"5663\">$100\\times2\\text{ MB}=200\\text{ MB}$</p><p data-end=\"5722\" data-start=\"5701\"><br/>Answer : $\\boxed{200\\text{ MB}}$</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/542998/go-classes-dpp-gate-cs-operating-system-page-table-memory\" target=\"_blank\">GATE Overflow #542998</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"3445\" data-start=\"3402\">Consider a single-level paging system with:</p><p data-end=\"3605\" data-start=\"3536\">What is the maximum number of entries in the page table of a process?</p><p data-end=\"3638\" data-start=\"3607\"><em>Enter the answer as an integer.</em></p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$12$-bit virtual addresses<br/></span>",
                "<span style=\"display: inline;\">$24$-bit physical addresses<br/></span>",
                "<span style=\"display: inline;\">Page size $=256=2^8$ bytes<br/></span>"
            ],
            "answer": "16",
            "solution": "<div class=\"solution-content\"><a name=\"542997\"></a><div itemprop=\"text\"><p data-end=\"3689\" data-start=\"3672\">The page size is: $2^8$ bytes</p><p data-end=\"3749\" data-start=\"3704\">Therefore, the number of page-offset bits is: $8$</p><p data-end=\"3845\" data-start=\"3756\">The virtual address contains $12$ bits. </p><p data-end=\"3845\" data-start=\"3756\">Hence, the number of virtual-page-number bits is:</p><p data-end=\"3855\" data-start=\"3847\">$12-8=4$</p><p data-end=\"3896\" data-start=\"3857\">The maximum number of virtual pages is:</p><p data-end=\"3906\" data-start=\"3898\">$2^4=16$</p><p data-end=\"3976\" data-start=\"3908\">A single-level page table contains one entry for every virtual page.</p><p data-end=\"3988\" data-start=\"3978\"><br/>$\\therefore \\text{Maximum page-table entries}=16$</p><p data-end=\"4051\" data-start=\"4030\"><br/><strong>Answer : </strong>$\\boxed{16}$<br/> </p><p data-end=\"4238\" data-start=\"4067\"><strong>Note :</strong></p><p data-end=\"4238\" data-start=\"4067\">The $24$-bit physical-address size does not affect the number of entries in the process's page table. </p><p data-end=\"4238\" data-start=\"4067\">It affects the number of bits required for the physical frame number.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/542996/go-classes-dpp-gate-cs-operating-system-page-table-entries\" target=\"_blank\">GATE Overflow #542996</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"50\" data-start=\"0\">Consider a virtual-memory system that uses paging.</p><p data-end=\"285\" data-start=\"242\">Process $P_1$ has the following page table:</p><p data-end=\"535\" data-start=\"287\">$$\\begin{array}{|c|c|}<br/>\\hline<br/>\\text{Virtual page} &amp; \\text{Frame number} \\\\<br/>\\hline<br/>0 &amp; \\texttt{0x00788} \\\\<br/>\\hline<br/>1 &amp; \\texttt{0x00249} \\\\<br/>\\hline<br/>2 &amp; \\texttt{0x0023f} \\\\<br/>\\hline<br/>3 &amp; \\texttt{0x00ace} \\\\<br/>\\hline<br/>4 &amp; \\texttt{0x00bcd} \\\\<br/>\\hline<br/>\\end{array}$$</p><p data-end=\"621\" data-start=\"537\">What is the physical address corresponding to virtual address $\\texttt{0x00001a60}$?</p><p><strong>Given Details:</strong></p><ul><li>$\\text{Virtual address length } = 32 \\text{ bits}$</li><li>$\\text{Physical address length } = 32 \\text{ bits}$</li><li>$\\text{Page size } = 4\\text{ KB} = 2^{12} \\text{ bytes}$</li></ul></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\texttt{0x00249a60}$</span>",
                "<span style=\"display: inline;\">$\\texttt{0x00788a60}$</span>",
                "<span style=\"display: inline;\">$\\texttt{0x00249001}$</span>",
                "<span style=\"display: inline;\">$\\texttt{0x00001a60}$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"542995\"></a><div itemprop=\"text\"><p data-end=\"17\" data-start=\"0\">The page size is:</p><p data-end=\"52\" data-start=\"19\">$4\\text{ KB}=2^{12}\\text{ bytes}$</p><p data-end=\"149\" data-start=\"54\">Therefore, the last $12$ bits, or the last three hexadecimal digits, represent the page offset.</p><p data-end=\"171\" data-start=\"151\">For virtual address:</p><p data-end=\"194\" data-start=\"173\">$\\texttt{0x00001a60}$</p><p data-end=\"223\" data-start=\"196\">The virtual page number is:</p><p data-end=\"256\" data-start=\"225\">$\\text{VPN}=\\texttt{0x00001}=1$</p><p data-end=\"277\" data-start=\"258\">The page offset is:</p><p data-end=\"309\" data-start=\"279\">$\\text{Offset}=\\texttt{0xa60}$</p><p data-end=\"331\" data-start=\"311\">From the page table:</p><p data-end=\"396\" data-start=\"333\">$\\text{Virtual page }1\\rightarrow\\text{Frame }\\texttt{0x00249}$</p><p data-end=\"454\" data-start=\"398\">The offset remains unchanged during address translation.</p><p data-end=\"546\" data-start=\"456\">Therefore, the physical address is obtained by combining the frame number with the offset:</p><p data-end=\"592\" data-start=\"548\">$\\texttt{0x00249}\\mathbin{|}\\texttt{0xa60}=\\texttt{0x00249a60}$</p><p data-end=\"647\" data-start=\"618\"><br/><strong>Answer :</strong> $\\boxed{\\texttt{0x00249a60}}$</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/542994/go-classes-dpp-gate-cs-operating-system-pageing-translation\" target=\"_blank\">GATE Overflow #542994</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider the following page table. All numbers are expressed in base $10$.</p><p>$$\\begin{array}{|c|c|}<br/>\\hline<br/>\\text{Virtual page} &amp; \\text{Frame} \\\\<br/>\\hline<br/>0 &amp; 3 \\\\<br/>\\hline<br/>1 &amp; 10 \\\\<br/>\\hline<br/>2 &amp; 9 \\\\<br/>\\hline<br/>3 &amp; 2 \\\\<br/>\\hline<br/>4 &amp; 0 \\\\<br/>\\hline<br/>\\end{array}$$</p><p>The page size is $1024$ bytes.</p><p>What is the physical address corresponding to virtual address $697$?</p><p><em>Enter the answer as an integer.</em></p></div></span>",
            "image": "",
            "options": [],
            "answer": "3769",
            "solution": "<div class=\"solution-content\"><a name=\"542993\"></a><div itemprop=\"text\"><p data-end=\"961\" data-start=\"934\">The virtual page number is:</p><p data-end=\"1019\" data-start=\"963\">$\\text{VPN}=\\left\\lfloor\\frac{697}{1024}\\right\\rfloor=0$</p><p data-end=\"1035\" data-start=\"1021\"><br/>The offset is:</p><p data-end=\"1070\" data-start=\"1037\">$\\text{Offset}=697\\bmod 1024=697$</p><p data-end=\"1092\" data-start=\"1072\">From the page table:</p><p data-end=\"1134\" data-start=\"1094\">$\\text{Page }0\\rightarrow\\text{Frame }3$</p><p data-end=\"1146\" data-start=\"1136\"><br/>$\\therefore \\text{Physical Address}=(3\\times1024)+697$</p><p data-end=\"1204\" data-start=\"1193\">$=3072+697=3769$</p><p data-end=\"1246\" data-start=\"1215\">Hence, the physical address is: $\\boxed{3769}$</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/542991/go-classes-dpp-gate-cs-operating-system-page-table-translation\" target=\"_blank\">GATE Overflow #542991</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"6357\" data-start=\"6248\">Consider the following C program executing on a computer that supports virtual memory and paged segmentation:</p><pre class=\"prettyprint linenums lang-c_cpp\" data-end=\"6461\" data-linenums=\"true\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"\" data-rawcode='#include &lt;stdio.h&gt; int main(void) { int w; printf(\"%p\", (void *)&amp;w); return 0; }' data-start=\"6359\">#include &lt;stdio.h&gt; int main(void) { int w; printf(\"%p\", (void *)&amp;w); return 0; }</pre><p data-end=\"6551\" data-start=\"6463\">When the $\\texttt{printf}$ statement is executed, the value printed on the screen corresponds to:</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">The physical address representing the segment, page, and offset where variable $\\texttt{w}$ is stored.<br/></span>",
                "<span style=\"display: inline;\">The virtual address associated with the physical location where variable $\\texttt{w}$ is stored.<br/></span>",
                "<span style=\"display: inline;\">The result produced after the MMU translates the address.<br/></span>",
                "<span style=\"display: inline;\">The address of variable $\\texttt{w}$ in the physical address space of the process.</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"542810\"></a><div itemprop=\"text\"><p data-end=\"15\" data-start=\"0\">The expression $\\texttt{\\&amp;w}$ produces a pointer to the variable $\\texttt{w}$.</p><p data-end=\"226\" data-start=\"83\">The address visible to a user program is a virtual or logical address. </p><p data-end=\"226\" data-start=\"83\">A user process does not normally see the actual physical address in RAM.</p><p data-end=\"366\" data-start=\"228\">When the program accesses $\\texttt{w}$, the memory-management unit translates the virtual address into the corresponding physical address.</p><p data-end=\"513\" data-is-last-node=\"\" data-is-only-node=\"\" data-start=\"368\">The value printed by $\\texttt{\\%p}$ is therefore the pointer value from the process's virtual address space, not the translated physical address.</p><p data-end=\"7472\" data-start=\"7467\">Thus:</p><ul data-end=\"7990\" data-start=\"7474\"><li data-end=\"7574\" data-section-id=\"4f34ge\" data-start=\"7474\">Option (A) is incorrect because the program does not print the physical segment, page, and offset.<br/> </li><li data-end=\"7676\" data-section-id=\"yyd0tt\" data-start=\"7575\">Option (B) is correct because the pointer is a virtual address associated with a physical location.<br/> </li><li data-end=\"7770\" data-section-id=\"4ku108\" data-start=\"7677\">Option (C) is incorrect because the output is not the physical address produced by the MMU.<br/> </li><li data-end=\"7871\" data-section-id=\"1wryuod\" data-start=\"7771\">Option (D) is incorrect because a process does not have a directly visible physical address space.</li></ul></div><br><br><small>Source: <a href=\"https://gateoverflow.in/542808/go-classes-dpp-gate-cs-operating-system-logical-and-physical-addresses\" target=\"_blank\">GATE Overflow #542808</a></small></div>"
        },
        {
            "marks": 2,
            "neg": 0,
            "type": "MSQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"1017\" data-start=\"901\">Which of the following are standard performance criteria used to evaluate CPU-scheduling algorithms?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">Waiting time<br/></span>",
                "<span style=\"display: inline;\">Response time<br/></span>",
                "<span style=\"display: inline;\">Throughput<br/></span>",
                "<span style=\"display: inline;\">Page-fault rate</span>"
            ],
            "answer": [
                "A",
                "B",
                "C"
            ],
            "solution": "<div class=\"solution-content\"><a name=\"540602\"></a><div itemprop=\"text\"><p>Waiting time is the total amount of time a process spends waiting in the ready queue. </p><p>Response time is the time from the arrival of a process until it gets the CPU for the first time. </p><p>Throughput is the number of processes completed per unit time. </p><p>Page-fault rate is mainly a virtual memory performance measure and is not a standard CPU scheduling criterion. </p><p><em>Note : Other common scheduling criteria include CPU utilization, turnaround time, fairness, and efficiency. </em></p><p><strong>Answer : A, B, C</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/540601/go-classes-dpp-gate-cs-operating-system-scheduling\" target=\"_blank\">GATE Overflow #540601</a></small></div>"
        }
    ]
});

registerTest({
    "name": "DPP 29 - Operating System (Memory Management & Virtual Memory - Part 5)",
    "testLabel": "DPP 29",
    "testType": "DPP",
    "bracket": "Memory Management & Virtual Memory - Part 5",
    "subject": "os",
    "series": "cse-dpp-2027",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 12,
    "topicsCovered": "Memory Management & Virtual Memory (Practice Set 5)",
    "questions": [
        {
            "marks": 2,
            "neg": 0,
            "type": "MSQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"757\" data-start=\"695\">Which of the following statements are correct?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">Threads belonging to the same process use a common stack.<br/></span>",
                "<span style=\"display: inline;\">Threads belonging to the same process can use the same valid TLB entries.<br/></span>",
                "<span style=\"display: inline;\">Multiple kernel-level threads of the same process may execute simultaneously on different CPUs.<br/></span>",
                "<span style=\"display: inline;\">Holding a lock prevents the operating-system scheduler from context-switching the thread.</span>"
            ],
            "answer": [
                "A"
            ],
            "solution": "<div class=\"solution-content\"><a name=\"540356\"></a><div itemprop=\"text\"><p data-end=\"1332\" data-start=\"1161\"><strong data-end=\"1192\" data-start=\"1161\">Statement (A) is incorrect.</strong><br data-end=\"1195\" data-start=\"1192\"/>Every thread has an independent stack and stack pointer, although all thread stacks exist within the shared address space of the process.</p><p data-end=\"1548\" data-start=\"1334\"><strong data-end=\"1363\" data-start=\"1334\">Statement (B) is correct.</strong><br data-end=\"1366\" data-start=\"1363\"/>Threads of the same process share an address space and therefore use the same virtual-to-physical address translations. Existing TLB entries remain valid when switching between them.</p><p data-end=\"1762\" data-start=\"1550\"><strong data-end=\"1579\" data-start=\"1550\">Statement (C) is correct.</strong><br data-end=\"1582\" data-start=\"1579\"/>Kernel-level threads are independently visible to the operating-system scheduler.<br/>Different threads of the same process can therefore be scheduled on different CPUs simultaneously.</p><p data-end=\"1995\" data-start=\"1764\"><strong data-end=\"1795\" data-start=\"1764\">Statement (D) is incorrect.</strong><br data-end=\"1798\" data-start=\"1795\"/>A lock controls access to a critical section but does not disable scheduling.<br/>A timer interrupt may still cause a thread holding a lock to be context-switched.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/540353/go-classes-dpp-gate-cs-operating-system-thread-resources\" target=\"_blank\">GATE Overflow #540353</a></small></div>"
        },
        {
            "marks": 2,
            "neg": 0,
            "type": "MSQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider a system employing demand paging. The system's performance is being analyzed under heavy load, and it is observed that the CPU utilization is very low while the disk utilization for the paging device is very high. Which of the following statements is/are<strong> CORRECT</strong> regarding this scenario?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">This phenomenon is known as thrashing, and it occurs when the sum of the working sets of all active processes exceeds the total physical memory available.<br/></span>",
                "<span style=\"display: inline;\">Increasing the degree of multiprogramming by adding more processes will likely increase CPU utilization.<br/></span>",
                "<span style=\"display: inline;\">Replacing the local page replacement policy with a global page replacement policy will always resolve this issue.<br/></span>",
                "<span style=\"display: inline;\">Decreasing the degree of multiprogramming is a valid strategy to bring the system back to a stable state.</span>"
            ],
            "answer": [
                "A"
            ],
            "solution": "<div class=\"solution-content\"><a name=\"523679\"></a><div itemprop=\"text\"><p><strong>A) CORRECT:</strong> This is the classic definition of thrashing. When the system spends more time swapping pages in and out than executing instructions, CPU utilization drops because processes are constantly waiting for the disk (I/O).<br/><br/><strong>B) INCORRECT:</strong> In a thrashing state, adding more processes only worsens the situation. Each new process competes for the already scarce page frames, further increasing the page fault rate and decreasing CPU utilization.<br/><br/><strong>C) INCORRECT:</strong> Global replacement can actually exacerbate thrashing because a process can steal frames from another process that is already struggling to keep its working set in memory. Local replacement is often preferred to contain the effects of thrashing to a single process.<br/><br/><strong>D) CORRECT:</strong> Reducing the number of active processes (decreasing the degree of multiprogramming) frees up frames for the remaining processes, allowing them to fit their working sets into memory and reducing the page fault rate.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/523678/go-classes-dpp-os-page-fault\" target=\"_blank\">GATE Overflow #523678</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>A computer system uses $46$-bit virtual addresses and $32$-bit physical addresses with a page size of $8\\mathrm{~KB}$. If the system employs a <strong>$\\mathbf{3}$-level hierarchical paging</strong> scheme where each page table entry (PTE) is $4\\mathrm{~bytes}$, what is the size of the page table (in bytes) for the first level if it must fit exactly within one page?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$2 \\mathrm{~KB}$<br/></span>",
                "<span style=\"display: inline;\">$4 \\mathrm{~KB}$<br/></span>",
                "<span style=\"display: inline;\">$8 \\mathrm{~KB}$<br/></span>",
                "<span style=\"display: inline;\">$16 \\mathrm{~KB}$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"523677\"></a><div itemprop=\"text\"><p><strong>Page Size:</strong> $8 \\mathrm{~KB}=2^{13}$ bytes.<br/><br/><strong>Offset: </strong>$13$ bits (from page size).<br/><br/><strong>Virtual Address bits for Page Tables: </strong>$46-13=33$ bits.<br/><br/><strong>PTE Size:</strong> $4$ bytes $=2^2$ bytes.<br/><br/><strong>Entries per Page:</strong> $\\frac{2^{13}}{2^2}=2^{11}$ entries. This means each level can use $\\mathbf{1 1}$ <strong>bits</strong> of the virtual address.</p><p><strong>Check Levels:</strong> $11$ bits $($Level $1) + 11$ bits $($Level $2) + 11$ bits $($Level $3)= 33$ bits. This matches our requirement.<br/><br/><strong>Level $\\mathbf{1}$ Page Table Size: </strong>Number of entries × PTE size $=2^{11} \\times 2^2=2^{13}$ bytes $=8 \\mathrm{~KB}$</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/523676/go-classes-dpp-os-paging\" target=\"_blank\">GATE Overflow #523676</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>A system uses <strong>MULTILEVEL PAGING</strong> with a $32$-bit virtual address and a page size of $\\mathbf{4}$ <strong>KB.</strong> The Page Table Entry (PTE) size is $\\mathbf{4}$ <strong>bytes.</strong> If the system uses a $2$-level paging scheme where the first level (outer) and second level (inner) page tables both fit exactly within one disk block, what is the size of the logical address space (in number of pages) that a single outer page table entry can cover?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$2^{10}$ pages<br/></span>",
                "<span style=\"display: inline;\">$2^{12}$ pages<br/></span>",
                "<span style=\"display: inline;\">$2^{20}$ pages<br/></span>",
                "<span style=\"display: inline;\">$2^{22}$ pages</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"523531\"></a><div itemprop=\"text\"><ul><li><strong>Virtual Address</strong> $=32$ bits.<br/> </li><li><strong>Page Size</strong> $=4 \\mathrm{~KB}=2^{12}$ bytes.<br/> </li><li><strong>Offset</strong> $= 12$ bits.<br/> </li><li><strong>PTE Size </strong>$=4$ bytes.<br/> </li><li><strong>Entries per Page Table</strong> $=\\frac{4 \\mathrm{~KB}}{4 \\text { bytes }}=1024=2^{10}$ entries.<br/> </li></ul><p>In a $2$-level paging scheme:</p><ul><li>The $20$ bits of the page number are split into $10$ bits for the <strong>Outer Page Table</strong> and $10 $bits for the <strong>Inner Page Table.</strong><br/> </li><li>Each entry in the <strong>Outer Page Table</strong> points to one <strong>Inner Page Table.</strong><br/> </li><li>One <strong>Inner Page Table</strong> contains $1024\\left(2^{10}\\right)$ entries, where each entry points to exactly one page.<br/> </li><li>Therefore, one entry in the outer page table covers the address space of $2^{10}$ pages.</li></ul></div><br><br><small>Source: <a href=\"https://gateoverflow.in/523530/go-classes-dpp-os-paging\" target=\"_blank\">GATE Overflow #523530</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider a system using pure segmentation.<br/><br/>The Segment Table is as follows:</p><p>\\[<br/>\\begin{array}{lll}<br/>\\text{Segment No.} &amp; \\text{Base Address} &amp; \\text{Limit (Size)} \\\\<br/>0 &amp; 1200 &amp; 800 \\\\<br/>1 &amp; 2500 &amp; 200 \\\\<br/>2 &amp; 4000 &amp; 500 \\\\<br/>3 &amp; 1000 &amp; 300<br/>\\end{array}<br/>\\]</p><p>Which of the following logical addresses will result in a <strong>SEGMENTATION FAULT</strong>?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\langle 0,430\\rangle$<br/></span>",
                "<span style=\"display: inline;\">$\\langle 1,199\\rangle$<br/></span>",
                "<span style=\"display: inline;\">$\\langle 2,500\\rangle$<br/></span>",
                "<span style=\"display: inline;\">$\\langle 3,10\\rangle$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"523525\"></a><div itemprop=\"text\"><p><strong>(A) </strong>$\\langle 0,430\\rangle$ : Segment $0$ limit is $800.~430&lt;800$. <strong>VALID.</strong><br/><br/><strong>(B)</strong> $\\langle 1,199\\rangle$ : Segment $1$ limit is $200$. $199&lt;200$.<strong> VALID.</strong><br/><br/><strong>(C)</strong> $\\langle 2,500)$ : Segment $2$ limit is $500 $. The valid offset range is $[0,499]$. Since $500$ is not less than $500$, it is out of bounds. <strong>SEGMENTATION FAULT.</strong><br/><br/><strong>(D)</strong> $\\langle 3,10\\rangle$ : Segment $3$ limit is $300.~10&lt;300$. <strong>VALID.</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/523524/go-classes-dpp-os-segmentation\" target=\"_blank\">GATE Overflow #523524</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>A system uses a $\\mathbf{3-}$<strong>level page table</strong> for virtual-to-physical address translation.<br/><br/>The virtual address size is $\\mathbf{39 ~bits}$.<br/><br/>The page size is $\\mathbf{4 K B}$ <strong>(</strong>$\\mathbf{2}^{\\mathbf{1 2}}$ <strong>bytes)</strong>.<br/><br/>Each Page Table Entry (PTE) takes $\\mathbf{8}$ <strong>bytes.</strong><br/><br/>The page table is structured such that <strong>each level fits exactly into one page frame.</strong><br/><br/>How many bits of the virtual address are used for the <strong>inner-most page table index</strong>?</p></div></span>",
            "image": "",
            "options": [],
            "answer": "2",
            "solution": "<div class=\"solution-content\"><a name=\"523321\"></a><div itemprop=\"text\"><p><strong>Page Size:</strong> $4 \\mathrm{~KB}=2^{12}$ bytes.<br/><br/><strong>PTE Size: </strong>$8$ bytes $=2^3$ bytes.<br/><br/><strong>Entries per Page:</strong> $\\frac{2^{12}}{2^3}=2^9$ entries.<br/><br/><strong>Bits required for one level:</strong> $9$ bits.</p><p><strong>Inner-most level index:</strong> $9$ bits.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/523320/go-classes-dpp-os-paging\" target=\"_blank\">GATE Overflow #523320</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>A system uses the <strong>LRU (Least Recently Used)</strong> page replacement algorithm with $3$ empty frames. The page reference string is: $1,2,1,3,7,4,1,2,1$.</p><p>How many page faults will occur?</p></div></span>",
            "image": "",
            "options": [],
            "answer": "1",
            "solution": "<div class=\"solution-content\"><a name=\"522474\"></a><div itemprop=\"text\"><p>$\\mathbf{1}: [1, -, -]$ <strong>(FAULT)</strong><br/><br/>$\\mathbf{2}: [1, 2, -]$ <strong>(FAULT)</strong><br/><br/>$\\mathbf{1}: [2, 1, -]$ (HIT $- ~1$ moves to most recent)<br/><br/>$\\mathbf{3}: [2, 1, 3]$ <strong>(FAULT)</strong><br/><br/>$\\mathbf{7}: [1, 3, 7]$ (<strong>FAULT</strong> $- ~2$ was LRU)<br/><br/>$\\mathbf{4}: [3, 7, 4]$ (<strong>FAULT</strong> $- ~1$ was LRU)<br/><br/>$\\mathbf{1}: [7,4,1]$ (<strong>FAULT </strong>$- ~3$ was LRU)<br/><br/>$\\mathbf{2}: [4,1,2]$ (<strong>FAULT </strong>$- ~7$ was LRU)<br/><br/>$\\mathbf{1}: [4,2,1]$ (HIT)<br/><br/>Total Faults$\\mathbf{: 7}$</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/522473/go-classes-dpp-os-page-replacement\" target=\"_blank\">GATE Overflow #522473</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>A system uses $32$-bit virtual addresses and a page size of $4$ KB . If the system uses a <strong>Two-Level Paging</strong> scheme where the first-level page table (Outer Page Table) and the second-level page table are each limited to exactly one page, and each Page Table Entry (PTE) is $4$ bytes, what is the maximum number of bits available for the <strong>Page Offset</strong>?</p></div></span>",
            "image": "",
            "options": [],
            "answer": "522315",
            "solution": "<div class=\"solution-content\"><a name=\"522316\"></a><div itemprop=\"text\"><p>In any paging scheme, <strong>the Page Offset</strong> is determined solely by the <strong>Page Size.</strong><br/><br/>Page Size $=4 \\mathrm{~KB}=2^{12}$ bytes.<br/><br/>Therefore, the number of bits required for the offset is $12$<strong> bits</strong>.<br/><br/>Note: The info about \"Two-Level Paging\" and \"$32$-bit addresses\" helps define the structure of the Page Table Entries, but the offset is always $\\log _2$ (Page Size). In this specific case, the $32$-bit address is split as$: 10$ bits (Outer Page) $+10$ bits (Inner Page) $+12$ bits (Offset).</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/522315/go-classes-dpp-os-paging\" target=\"_blank\">GATE Overflow #522315</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>A computer system uses $\\mathbf{32}$<strong>-bit virtual addresses.</strong> The system implements a <strong>two-level hierarchical paging</strong> scheme. The <strong>page size of the Outer Page Table is exactly</strong> $\\mathbf{4}$ KB, and each Page Table Entry (PTE) at all levels occupies $\\mathbf{8}$ <strong>bytes</strong>. The physical page frames (base page size) used for the actual process data are $\\mathbf{4}$ <strong>KB</strong> in size.</p><p><strong>Calculate the number of bits used for the inner page table index in the virtual address.</strong></p></div></span>",
            "image": "",
            "options": [],
            "answer": "11",
            "solution": "<div class=\"solution-content\"><a name=\"521943\"></a><div itemprop=\"text\"><p>Page size $=4 \\mathrm{~KB}=2^{12}$ bytes, so the <strong>Page Offset</strong> is 12 bits.</p><p>Outer Page Table size $=4 \\mathrm{~KB}$. Since each PTE is $8$ bytes $\\left(2^3\\right)$, the number of entries in the Outer Page Table $=2^{12} / 2^3=2^9$. Thus, the <strong>Outer Index</strong> is $9$ bits.</p><p>Remaining bits for Inner Index $=32($Total$)-12($Offset$)-9($Outer$)= 11$ bits.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/521942/go-classes-dpp-os-paging\" target=\"_blank\">GATE Overflow #521942</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider a system with a $\\mathbf{48}$<strong>-bit virtual address,</strong> $\\mathbf{36}$<strong>-bit physical address,</strong> and a page size of $\\mathbf{16}$ <strong>KB</strong>. The system implements an <strong>Inverted Page Table</strong> to save space.</p><p>Each entry in the Inverted Page Table contains:</p><p>The Inverted Page Table is stored in main memory. To speed up the search, a <strong>Hash Table</strong> is used. The Hash Table has the same number of entries as the Inverted Page Table, and each Hash Table entry is $\\mathbf{8}$ <strong>bytes.</strong></p><p><strong>Calculate the total size (in MB) of the Inverted Page Table (including the Hash Table metadata)?</strong></p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">The Process ID $(16$ bits$)$<br/></span>",
                "<span style=\"display: inline;\">The Virtual Page Number<br/></span>",
                "<span style=\"display: inline;\">Control bits (Valid, Dirty, Read/Write) totaling $12$ bits<br/></span>"
            ],
            "answer": "64",
            "solution": "<div class=\"solution-content\"><a name=\"521163\"></a><div itemprop=\"text\"><p><strong>NUMBER OF ENTRIES:</strong> In an Inverted Page Table, the number of entries = Number of Physical Frames.</p><ul><li>Physical Address $=36$ bits. Page Size $=16 \\mathrm{~KB}\\left(2^{14}\\right)$.<br/> </li><li>Number of Frames $=2^{36} / 2^{14}=2^{22}$ entries.<br/> </li></ul><p><strong>SIZE OF ONE IPT ENTRY:</strong></p><ul><li>$\\mathrm{VPN}=$ Virtual Address $( 48 ) -$ Page Offset $( 14 ) = 34$ bits.<br/> </li><li>Entry $=$ PID $(16) +$ VPN $(34) +$ Control $(12) = 62$ bits.<br/> </li><li>Since memory is byte-addressable, we round $62$ bits up to $\\mathbf{8}$ <strong>bytes</strong> per entry.<br/> </li></ul><p><strong>TOTAL SIZE:</strong></p><ul><li>IPT Size $=2^{22} \\times 8$ bytes $=2^{22} \\times 2^3=2^{25}=32 \\mathrm{MB}$.<br/> </li><li>Hash Table Size $=2^{22} \\times 8$ bytes $=32 \\mathrm{MB}$.<br/> </li><li>Total $=32 \\mathrm{MB}($IPT$)+32 \\mathrm{MB}($Hash$)=64 \\mathrm{MB}$.</li></ul></div><br><br><small>Source: <a href=\"https://gateoverflow.in/521162/go-classes-dpp-os-inverted-paging\" target=\"_blank\">GATE Overflow #521162</a></small></div>"
        }
    ]
});

registerTest({
    "name": "DPP 30 - Operating System (Memory Management & Virtual Memory - Part 6)",
    "testLabel": "DPP 30",
    "testType": "DPP",
    "bracket": "Memory Management & Virtual Memory - Part 6",
    "subject": "os",
    "series": "cse-dpp-2027",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 12,
    "topicsCovered": "Memory Management & Virtual Memory (Practice Set 6)",
    "questions": [
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>A system uses a $\\mathbf{2-}$<strong>level hierarchical page table</strong> for a $32-$bit virtual address space. The page size is $\\mathbf{4 ~KB}$. Each Page Table Entry (PTE) at both levels is $\\mathbf{4~bytes}$. The system uses a <strong>Translation Lookahead Buffer (TLB)</strong> with a hit ratio of $\\mathbf{9 5 \\%}$.</p><p>A process is currently executing a loop where it accesses a specific data array. Due to a unique hardware constraint, the first-level page table (Page Directory) is <strong>not cacheable</strong> in the TLBonly the second-level PTEs are cached.</p><p>If a TLB hit takes $\\mathbf{2 ~ n s}$ and a single main memory access takes $\\mathbf{100 ~ns}$, what is the <strong>Effective Memory Access Time (EMAT)</strong> in nanoseconds for a memory reference? (Assume the secondlevel page table is always in memory and ignore page faults).</p></div></span>",
            "image": "",
            "options": [],
            "answer": "207",
            "solution": "<div class=\"solution-content\"><a name=\"521156\"></a><div itemprop=\"text\"><p><strong>TLB Hit </strong>$(95\\%):$ Even on a TLB hit, the hardware constraint says we only cached the $2$nd-level entry. We still have to access the Page Directory in memory.</p><ul><li>Time $=T L B_{\\text {search }}+ Mem _{\\text {PageDirectory }}+ Mem _{\\text {ActualData }}$<br/> </li><li>Time $=2+100+100=202 \\mathrm{~ns}$<br/> </li></ul><p><strong>TLB Miss </strong>$(5\\%):$ Must access Page Directory, then Page Table, then Data.</p><ul><li>Time $=T L B_{\\text {search }}+ Mem _{\\text {PageDirectory }}+ Mem _{\\text {PageTable }}+ Mem _{\\text {ActualData }}$<br/> </li><li>Time $=2+100+100+100=302 \\mathrm{~ns}$<br/> </li></ul><p><strong>EMAT: </strong>$(0.95 \\times 202)+(0.05 \\times 302)=191.9+15.1=207 \\mathrm{~ns}$.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/521155/go-classes-dpp-os-paging\" target=\"_blank\">GATE Overflow #521155</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider a system with a $48$-bit virtual address and a page size of $8 \\text{ KB}$. The system uses a $3$-level paging scheme where the first $10$ bits index the outer page table, the next $10 \\text{ bits}$ index the middle page table, and the remaining bits (before the offset) index the inner page table.</p><p>Assume each Page Table Entry (PTE) is $8 \\text{ bytes}$ and the TLB has $512$ entries.</p><p>If a process is currently using $20 \\text{ MB}$ of contiguous virtual memory, what is the minimum total memory $($in $\\text{KB})$ required to store its page tables?</p><p>Assume that each allocated page table occupies enough memory to store all entries specified by its index bits, including unused entries.</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$24 \\text{ KB}$<br/></span>",
                "<span style=\"display: inline;\">$32 \\text{ KB}$<br/></span>",
                "<span style=\"display: inline;\">$40 \\text{ KB}$<br/></span>",
                "<span style=\"display: inline;\">$272 \\text{ KB}$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"545610\"></a><div itemprop=\"text\"><p><span style=\"color:#e74c3c;\"><span style=\"background-color:#000000;\">Here is the simple and Detailed Explanation</span></span> </p><p><img alt=\"\" height=\"784\" src=\"https://gateoverflow.in/?qa=blob&amp;qa_blobid=10710316179927884572\" width=\"1126\"/><img alt=\"\" height=\"421\" src=\"https://gateoverflow.in/?qa=blob&amp;qa_blobid=17567725442946654032\" width=\"1200\"/></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/520973/go-classes-dpp-os-virtual-memory\" target=\"_blank\">GATE Overflow #520973</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>A system has a $48$-bit virtual address space, $32$-bit physical address space, and a page size of $\\mathbf{8 ~ K B .}$ An <strong>Inverted Page Table</strong> is used to manage the mapping. Each entry in the inverted page table stores the Process ID $( 16$ bits$)$ and the Virtual Page Number. If we ignore any overhead for hashing or chaining, what is the size of the Inverted Page Table?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$1.5$ MB<br/></span>",
                "<span style=\"display: inline;\">$3.5$ MB<br/></span>",
                "<span style=\"display: inline;\">$2.5$ MB<br/></span>",
                "<span style=\"display: inline;\">$3.0$ MB</span>"
            ],
            "answer": "B",
            "solution": "<div class=\"solution-content\"><a name=\"520728\"></a><div itemprop=\"text\"><p>Step 1: Calculate the number of physical frames</p><p> </p><p>The number of physical frames is determined by the physical address space and the page size.</p><ul><li>Physical address space = 32 bits</li><li>Page size = 8 KB = $2^{13}$ bytes</li></ul><p>The number of frames (entries in the IPT) is:</p><p> </p><p>$\\text{Number of frames} = \\frac{\\text{Total physical memory}}{\\text{Page size}} = \\frac{2^{32} \\text{ bytes}}{2^{13} \\text{ bytes}} = 2^{(32-13)} = 2^{19}$</p><p> </p><p>Step 2: Determine the size of each entry</p><p> </p><p>Each entry stores a Process ID (16 bits) and a Virtual Page Number (VPN).</p><ul><li>Process ID size = 16 bits = 2 bytes</li><li>Virtual address space = 48 bits. Page offset is 13 bits (same as page size). So, VPN size = $48 - 13 = 35$ bits.</li><li>VPN size in bytes = $\\lceil 35 / 8 \\rceil = 5$ bytes.</li></ul><p>Total size of one entry:</p><p> </p><p>$\\text{Entry size} = \\text{PID size} + \\text{VPN size} = 2 \\text{ bytes} + 5 \\text{ bytes} = 7 \\text{ bytes}$</p><p> </p><p>Step 3: Calculate the total size of the Inverted Page Table</p><p> </p><p>The total size is the number of entries multiplied by the size of each entry.</p><p> </p><p>$\\text{Total size} = \\text{Number of frames} \\times \\text{Entry size} = 2^{19} \\times 7 \\text{ bytes}$</p><p> </p><p>$\\text{Total size} = 524288 \\times 7 \\text{ bytes} = 3670016 \\text{ bytes}$</p><p> </p><p>To convert to Megabytes (MB), divide by $2^{20}$:</p><p> </p><p>$\\text{Total size in MB} = \\frac{3670016 \\text{ bytes}}{2^{20} \\text{ bytes/MB}} \\approx 3.5 \\text{ MB}$</p><p> </p><p>Answer: (B) 3.5 MB</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/520701/go-classes-dpp-os-inverted-paging\" target=\"_blank\">GATE Overflow #520701</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>A system uses a $32$-bit virtual address and a $32$-bit physical address. The page size is $\\mathbf{4}$ <strong>KB</strong>. Each Page Table Entry (PTE) consumes $\\mathbf{4}$ <strong>bytes.</strong> The system uses a <strong>multi-level paging</strong> scheme where each page table must fit exactly within a single page frame.</p><p>What is the minimum number of levels required for the page table in this system?</p></div></span>",
            "image": "",
            "options": [],
            "answer": "2",
            "solution": "<div class=\"solution-content\"><a name=\"520733\"></a><div itemprop=\"text\"><p data-end=\"406\" data-start=\"352\">Page size = 2^{12} bytes</p><p data-end=\"406\" data-start=\"352\">no of entries in each page is = page size / each page table entry</p><p data-end=\"406\" data-start=\"352\">= 2 ^ 12 / 2 ^2 = 2^10 entries in each page</p><p data-end=\"406\" data-start=\"352\">and we have 20 bits remaining other than offset then</p><p data-end=\"406\" data-start=\"352\">20/10 = 2</p><p data-end=\"406\" data-start=\"352\">minimum 2 level paging required</p><p data-end=\"461\" data-start=\"408\"> </p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/520697/go-classes-dpp-os-paging\" target=\"_blank\">GATE Overflow #520697</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider a system with three processes $P_1, P_2$, and $P_3$ arriving at time $t=0$. Their burst times are $\\mathrm{1 0 ~ m s}, \\mathrm{2 0 ~ m s}$, and $\\mathrm{3 0 ~ m s}$ respectively. The system uses a <strong>Round Robin</strong> scheduling algorithm with a time quantum of $\\mathrm{8~ m s}$. Assuming there is no overhead for context switching, what is the <strong>Average Waiting Time</strong> $($in $\\mathrm{ms})$ for these processes?</p></div></span>",
            "image": "",
            "options": [],
            "answer": "30",
            "solution": "<div class=\"solution-content\"><a name=\"520263\"></a><div itemprop=\"text\"><p>$P_1$ executes from $0$ to $8 ~($Remaining: $P_1=2, P_2=20, P_3=30)$<br/>$P_2$ executes from $8$ to $16 ~($Remaining: $P_1=2, P_2=12, P_3=30)$<br/>$P_3$ executes from $16$ to $24 ~($Remaining: $P_1=2, P_2=12, P_3=22)$<br/>$P_1$ executes from $24$ to $26 ~($Finished at $26)$<br/>$P_2$ executes from $26$ to $34 ~($Remaining: $P_2=4, P_3=22)$<br/>$P_3$ executes from $34$ to $42 ~($Remaining: $P_2=4, P_3=14)$<br/>$P_2$ executes from $42$ to $46 ~($Finished at $46)$<br/>$P_3$ executes from $46$ to $54 ~($Remaining: $P_3=6)$<br/>$P_3$ executes from $54$ to $60 ~($Finished at $60)$</p><p><br/><strong>Waiting Times</strong> $(W T=$ Completion Time $-$ Arrival Time $-$ Burst Time$):$</p><ul><li>$W T\\left(P_1\\right)=26-0-10=16 \\mathrm{~ms}$<br/> </li><li>$W T\\left(P_2\\right)=46-0-20=26 \\mathrm{~ms}$<br/> </li><li>$W T\\left(P_3\\right)=60-0-30=30 \\mathrm{~ms}$</li></ul><p><strong>Average Waiting Time:</strong>$$<br/>\\frac{16+26+30}{3}=\\frac{72}{3}=\\mathbf{2 4}<br/>$$</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/520262/go-classes-dpp-os-paging\" target=\"_blank\">GATE Overflow #520262</a></small></div>"
        },
        {
            "marks": 2,
            "neg": 0,
            "type": "MSQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Two processes, $P_0$ and $P_1$, share a counting semaphore $\\verb|S|$ initialized to $2$ and a binary semaphore $\\verb|mutex|$ initialized to $1$. They execute the following code concurrently:</p><p><strong>Process $P_0$ :</strong></p><pre class=\"prettyprint linenums lang-c_cpp\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"4\">wait(S); wait(mutex); // Critical Section signal(mutex); signal(S);</pre><p><br/><strong>Process $P_1$ :</strong></p><pre class=\"prettyprint linenums lang-c_cpp\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"4\">wait(S); wait(mutex); // Critical Section signal(nutex); signal(S):</pre><p><br/>Which of the following statements is/are TRUE regarding the execution of these processes?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">Mutual exclusion is preserved for the Critical Section.<br/></span>",
                "<span style=\"display: inline;\">Deadlock is possible if both processes execute $\\verb|wait(S)|$ simultaneously.<br/></span>",
                "<span style=\"display: inline;\">At most two processes can be in the Critical Section at any given time.<br/></span>",
                "<span style=\"display: inline;\">If the initial value of $\\verb|S|$ is changed to $1$, the behavior of the system remains functionally identical to using only the $\\verb|mutex|$.</span>"
            ],
            "answer": [
                "A"
            ],
            "solution": "<div class=\"solution-content\"><a name=\"520251\"></a><div itemprop=\"text\"><p><strong>A is TRUE:</strong> The $\\verb|mutex|$ semaphore (binary) ensures only one process enters the Critical Section at a time, regardless of the value of $\\verb|S|$.</p><p><strong>B is FALSE:</strong> Since $\\verb|S|$ starts at 2 , both processes can successfully complete $\\verb|wait(S)|$ without blocking.</p><p><strong>C is FALSE:</strong> Because of the $\\verb|mutex|$, only <strong>one</strong> process can be in the Critical Section, not two.</p><p><strong>D is TRUE:</strong> If $\\verb|S|$ is 1, it acts as another binary semaphore, and the mutex already restricts entry to one process.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/520250/go-classes-dpp-os-paging\" target=\"_blank\">GATE Overflow #520250</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider a computer system using a $3$-level paging scheme. The <strong>Virtual Address</strong> is $46$ bits, and the <strong>Physical Address</strong> is $32$ bits. The page size is $\\mathbf{8 ~ K B}$. The page table base register (PTBR) stores the base address of the first-level table $(T_1)$, which occupies exactly one page. Each entry in $T_1$ points to a second-level table $\\left(T_2\\right)$, and each entry in $T_2$ points to a third-level table ( $T_3$ ). Each entry in $T_3$ is a Page Table Entry (PTE). If the size of each PTE is $\\mathbf{3 2}$ <strong>bits</strong>, what is the maximum number of entries possible in a single $T_3$ table?</p></div></span>",
            "image": "",
            "options": [],
            "answer": "520220",
            "solution": "<div class=\"solution-content\"><a name=\"520222\"></a><div itemprop=\"text\">The page size is $8 \\mathrm{~KB}=2^{13}$ bytes. Since the first-level table $T_1$ occupies exactly one page and each PTE (or pointer to the next level) is $32$ bits $( 4$ bytes$)$, the number of entries per page is:<br/> $$<br/> \\frac{2^{13}}{2^2}=2^{11}=2048 \\text { entries }<br/> $$<br/> This structure remains consistent for each level if they are all page-sized. Therefore, a single $T_3$ table can hold $2048$ entries.</div><br><br><small>Source: <a href=\"https://gateoverflow.in/520220/go-classes-dpp-os-paging\" target=\"_blank\">GATE Overflow #520220</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>A system uses a $\\mathbf{2}$<strong>-level paging</strong> scheme with a $32$-bit logical address space and a page size of $\\mathbf{4}$ <strong>KB.</strong> Each page table entry (PTE) at both levels is $\\mathbf{4}$ <strong>bytes</strong>. The system also uses a Translation Lookaside Buffer (TLB) with a hit ratio of $\\mathbf{90 \\%}$.</p><p>What is the <strong>Effective Memory Access Time (EMAT)</strong> for this system, assuming the secondlevel page table entry is NOT in the TLB?</p><p><strong>Given Details:</strong></p><ul><li>TLB access time is $\\mathbf{10 ~ n s}$.</li><li>Main memory access time is $\\mathbf{1 0 0 ~ n s}$.</li><li>The first-level page table is always stored in the TLB (effectively $0 ~\\mathrm{ns}$ overhead for the first level if the TLB hits).</li></ul></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$121 ~\\mathrm{ns}$</span>",
                "<span style=\"display: inline;\">$131 ~\\mathrm{ns}$</span>",
                "<span style=\"display: inline;\">$141 ~\\mathrm{ns}$</span>",
                "<span style=\"display: inline;\">$151 ~\\mathrm{ns}$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"518819\"></a><div itemprop=\"text\"><p>Hit time in TLB $= 10 + 100 = 110$<br/><br/>The problem states the first-level page table is <strong>always</strong> in the TLB, but the second-level entry is <strong>not.</strong><br/> </p><p>$\\text{Total Miss Time} =10+10+100+100=220 \\mathrm{~ns}$<br/><br/>$E M A T=(h \\times \\text { Hit Time })+((1-h) \\times \\text { Miss Time })$<br/><br/>$E M A T=(0.9 \\times 110)+(0.1 \\times 220)$<br/><br/>$E M A T=99+22=121 \\mathrm{~ns}$</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/518808/go-classes-dpp-os-paging\" target=\"_blank\">GATE Overflow #518808</a></small></div>"
        },
        {
            "marks": 2,
            "neg": 0,
            "type": "MSQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>A system uses a $2$-level hierarchical paging scheme for a $32$-bit logical address space. The page size is $4$ KB ( $2^{12}$ bytes). Each page table entry (PTE) at both levels occupies 4 bytes. To optimize the translation lookaside buffer (TLB) performance, the OS designer decides that the outer page table must fit exactly within a single page frame.</p><p>Which of the following is/are correct?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">THE INNER PAGE TABLE REQUIRES 10 BITS FOR INDEXING.<br/></span>",
                "<span style=\"display: inline;\">THE NUMBER OF ENTRIES IN THE OUTER PAGE TABLE IS 1024.<br/></span>",
                "<span style=\"display: inline;\">THE TOTAL NUMBER OF BITS USED FOR PAGING INDEXES (OUTER + INNER) IS 22 BITS.<br/></span>",
                "<span style=\"display: inline;\">EACH INNER PAGE TABLE FITS WITHIN A SINGLE PAGE FRAME.</span>"
            ],
            "answer": [
                "A"
            ],
            "solution": "<div class=\"solution-content\"><a name=\"518274\"></a><div itemprop=\"text\">ENTRIES PER PAGE: Since a page is 4 KB and each entry is 4 bytes, one page frame can hold $\\frac{4096}{4}=1024$ entries $\\left(2^{10}\\right)$.<br/> <br/> No of pages $=\\mathbf{2^{\\boldsymbol{ 20}}}$<br/> <br/> No of inner pages required = $2^{20} / 1024 = 1024$<br/> <br/> No of entries in outer page table = 1024<br/> <br/> (D) Each inner page table also uses 10 bits ( $2^{10}$ entries), so it also fits in one frame.</div><br><br><small>Source: <a href=\"https://gateoverflow.in/518273/go-classes-dpp-os-multilevel-paging\" target=\"_blank\">GATE Overflow #518273</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Which of the following conditions is the MOST direct cause of 'Thrashing' in a virtual memory system?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">THE CPU UTILIZATION IS TOO HIGH DUE TO INTENSIVE COMPUTATION.<br/></span>",
                "<span style=\"display: inline;\">THE SUM OF THE WORKING SET SIZES OF ALL ACTIVE PROCESSES EXCEEDS THE TOTAL PHYSICAL MEMORY.<br/></span>",
                "<span style=\"display: inline;\">THE PAGE TABLE SIZE EXCEEDS THE AVAILABLE CACHE (TLB) SPACE.<br/></span>",
                "<span style=\"display: inline;\">THE DISK SCHEDULING ALGORITHM IS INEFFICIENCT (E.G., FCFS INSTEAD OF SSTF).</span>"
            ],
            "answer": "B",
            "solution": "<div class=\"solution-content\"><a name=\"516828\"></a><div itemprop=\"text\">THE SUM OF THE WORKING SET SIZES OF ALL ACTIVE PROCESSES EXCEEDS THE TOTAL PHYSICAL MEMORY.<br/> <br/> When the system cannot fit the active working sets in RAM, it enters a constant cycle of page faults and swapping, leading to thrashing.<br/> <br/> THE DISK SCHEDULING ALGORITHM IS INEFFICIENCT (E.G., FCFS INSTEAD OF SSTF).<br/> <br/> While inefficient, this affects latency and throughput but is not the root cause of process-level thrashing.<br/> <br/> Correct option: B</div><br><br><small>Source: <a href=\"https://gateoverflow.in/516826/go-classes-dpp-os-threashing\" target=\"_blank\">GATE Overflow #516826</a></small></div>"
        }
    ]
});

registerTest({
    "name": "DPP 31 - Operating System (Memory Management & Virtual Memory - Part 7)",
    "testLabel": "DPP 31",
    "testType": "DPP",
    "bracket": "Memory Management & Virtual Memory - Part 7",
    "subject": "os",
    "series": "cse-dpp-2027",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 12,
    "topicsCovered": "Memory Management & Virtual Memory (Practice Set 7)",
    "questions": [
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider a system with a $32$-bit logical address space and a page size of $4 ~\\mathrm{KB}$. The system uses a two-level paging scheme where the first level (Outer Page Table) index is $10 ~\\mathrm{bits}$. If each page table entry (PTE) at both levels is $4 ~\\mathrm{bytes}$, what is the size of the inner page table $($in $\\mathrm{KB})$?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$1 ~\\mathrm{KB}$<br/></span>",
                "<span style=\"display: inline;\">$8 ~\\mathrm{KB}$<br/></span>",
                "<span style=\"display: inline;\">$16 ~\\mathrm{KB}$<br/></span>",
                "<span style=\"display: inline;\">$4 ~\\mathrm{KB}$</span>"
            ],
            "answer": "D",
            "solution": "<div class=\"solution-content\"><a name=\"516822\"></a><div itemprop=\"text\">Since the logical address is $32$ bits and the page size is $4 \\mathrm{~KB}\\left(2^{12}\\right)$, the page offset is $12$ bits. With $10$ bits for the outer index, the inner index must be $32-12-10=10$ bits, leading to $2^{10}$ entries of $4$ bytes each.<br/> <br/> Correct option : D</div><br><br><small>Source: <a href=\"https://gateoverflow.in/516820/go-classes-dpp-os-paging\" target=\"_blank\">GATE Overflow #516820</a></small></div>"
        },
        {
            "marks": 2,
            "neg": 0,
            "type": "MSQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>A system uses a <strong>Segmentation</strong> scheme with the following segment table:</p><p>\\[<br/>\\begin{array}{|l|l|l|}<br/>\\hline<br/>\\textbf{Segment ID} &amp; \\textbf{Base Address} &amp; \\textbf{Limit (Length)} \\\\<br/>\\hline<br/>0 &amp; 1200 &amp; 400 \\\\<br/>\\hline<br/>1 &amp; 3500 &amp; 800 \\\\<br/>\\hline<br/>2 &amp; 2000 &amp; 300 \\\\<br/>\\hline<br/>\\end{array}<br/>\\]<br/><strong>Which of the following statement(s) is/are TRUE?</strong></p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">The logical address $(1,500)$ translates to a physical address of $4000$.<br/></span>",
                "<span style=\"display: inline;\">The logical address $(2,350)$ will result in a <strong>segmentation fault</strong> (trap) because the offset exceeds the limit.<br/></span>",
                "<span style=\"display: inline;\">The physical address $1500$ corresponds to segment $0$ at an offset of $300$.<br/></span>",
                "<span style=\"display: inline;\">Unlike paging, segmentation can lead to <strong>external fragmentation</strong> in physical memory.</span>"
            ],
            "answer": [
                "A"
            ],
            "solution": "<div class=\"solution-content\"><a name=\"516256\"></a><div itemprop=\"text\"><p><strong>(A) Address Translation</strong> $\\mathbf{(1,500):}$</p><ul><li>Check Limit: $500&lt;800$ (Valid).<br/> </li><li>Physical Address: Base $(3500)+O f f \\operatorname{set}(500)=\\mathbf{4 0 0 0}$.<br/> </li><li>Conclusion$: (A)$ is <strong>TRUE.</strong></li></ul><p><strong>(B) Address Translation</strong> $\\mathbf{(2, 350):}$</p><ul><li>Check Limit: $350&gt;300$ (Invalid).<br/> </li><li>Because the offset exceeds the segment limit, the hardware generates a <strong>segmentation fault </strong>(trap).<br/> </li><li>Conclusion$: (B)$ is <strong>TRUE.</strong></li></ul><p><strong>(C) Reverse Mapping</strong> $\\mathbf{(}$<strong>Physical</strong> $\\mathbf{1500):}$</p><ul><li>Check Seg $0: 1500-1200=300$. Offset 300 is within the limit $(400)$.<br/> </li><li>Conclusion $:(C)$ is <strong>TRUE.</strong></li></ul><p><strong>(D) Fragmentation:</strong></p><ul><li>Paging uses fixed-size blocks (internal fragmentation), whereas segmentation uses variable-sized blocks based on logical units, which leaves small \"holes\" between allocated segments.<br/> </li><li>Conclusion$: (D)$ is <strong>TRUE.</strong></li></ul></div><br><br><small>Source: <a href=\"https://gateoverflow.in/516255/go-classes-dpp-os-segmentation\" target=\"_blank\">GATE Overflow #516255</a></small></div>"
        },
        {
            "marks": 2,
            "neg": 0,
            "type": "MSQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>A system uses a $\\mathbf{2}$<strong>-level hierarchical paging</strong> scheme. The logical address is $\\mathbf{3 5}$ <strong>bits</strong>, the page size is $\\mathbf{1 6}$ <strong>KB</strong>, and each page table entry (PTE) is $\\mathbf{8}$<strong> bytes</strong>. The top-level page table (Outer Page Table) is required to fit exactly within one page frame.</p><p><strong>Which of the following statement(s) is/are TRUE?</strong></p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">The number of entries in the Outer Page Table is $2^{10}$.<br/></span>",
                "<span style=\"display: inline;\">The number of bits used for the \"Offset\" in the logical address is $14$.<br/></span>",
                "<span style=\"display: inline;\">The number of bits used for the inner-level page table index is $11$.<br/></span>",
                "<span style=\"display: inline;\">The maximum physical memory that can be addressed, assuming the physical address is also $35 ~\\mathrm{bits}$, is $32 ~\\mathrm{GB}$ .</span>"
            ],
            "answer": [
                "A"
            ],
            "solution": "<div class=\"solution-content\"><a name=\"544155\"></a><div itemprop=\"text\"><p><span style=\"background-color:#f1c40f;\">Simple and Detailed Explanation</span> </p><p><img alt=\"\" height=\"1528\" src=\"https://gateoverflow.in/?qa=blob&amp;qa_blobid=10562091267880394196\" width=\"1200\"/></p><p><img alt=\"\" height=\"1181\" src=\"https://gateoverflow.in/?qa=blob&amp;qa_blobid=15929111210406425597\" width=\"1200\"/></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/516252/go-classes-dpp-os-paging\" target=\"_blank\">GATE Overflow #516252</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>A computer system uses a $2$-level paging scheme for virtual memory management. The system has the following timing parameters:</p><p>Assume that on a TLB miss, the page table entries are brought into the TLB and the time taken for the TLB update is negligible. What is the Effective Memory Access Time (EMAT) for this system?</p><p><strong>Given Details:</strong></p><ul><li><strong>TLB access time:</strong> $\\mathrm{20 ~ns}$</li><li><strong>Main Memory access time:</strong> $\\mathrm{150 ~ns}$</li><li><strong>TLB Hit Ratio:</strong> $80\\%$</li></ul></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\mathrm{170 ~ns}$</span>",
                "<span style=\"display: inline;\">$\\mathrm{200 ~ns}$</span>",
                "<span style=\"display: inline;\">$\\mathrm{230 ~ns}$</span>",
                "<span style=\"display: inline;\">$\\mathrm{470 ~ns}$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"514329\"></a><div itemprop=\"text\"><p><strong>Hit Case:</strong> When TLB hit occurs, we access TLB + Main Memory (for data). Time = $20+150=170 \\mathrm{~ns}$.</p><p><strong>Miss Case:</strong> When TLB miss occurs in a $2$-level paging scheme, we access TLB + Outer Page Table (Mem) + Inner Page Table (Mem) + Data (Mem). Time $=20+150+ 150+150=470 \\mathrm{~ns}$.</p><p><strong>Formula:</strong> $E M A T=($HitRatio $\\times$ HitTime$)+($MissRatio $\\times$ MissTime$)$<br/><br/><strong>Calculation:</strong> $E M A T=0.8 \\times 170+0.2 \\times 470 E M A T=136+94 E M A T= 230 ~\\mathrm{ns}$.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/514328/go-classes-dpp-os-paging\" target=\"_blank\">GATE Overflow #514328</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>A system uses demand paging with the following parameters:</p><p>A process generates the following<strong> page reference string</strong> (page numbers):</p><p>$$<br/>1,2,3,4,1,2,5,1,2,3,4,5<br/>$$</p><p><br/>What is the <strong>total number of page faults?</strong></p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">Page size $=4 \\mathrm{~KB}$<br/></span>",
                "<span style=\"display: inline;\">Main memory size $=64 \\mathrm{~KB}$<br/></span>",
                "<span style=\"display: inline;\">Replacement policy $=$ LRU<br/></span>",
                "<span style=\"display: inline;\">Initially, memory is empty<br/></span>"
            ],
            "answer": "5",
            "solution": "<div class=\"solution-content\"><a name=\"513436\"></a><div itemprop=\"text\"><ul><li>Total distinct pages in reference string $=\\{1,2,3,4,5\\} \\rightarrow 5$ pages<br/> </li><li>Available frames $=16$<br/> </li></ul><p>Since the number of frames is <strong>greater than the number of distinct pages, no replacement ever occurs.</strong><br/><br/><strong>Total page faults:</strong><br/><br/>$=5$</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/513435/go-classes-dpp-os-paging\" target=\"_blank\">GATE Overflow #513435</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>A system uses a $48$-bit virtual address space and a page size of $4$ KB . The page table is single-level and stored in main memory. The Page Table Entry size is $8$ bytes.<br/>The system has a TLB with $128$ entries, and each TLB lookup takes $1$ cycle. Memory access time is $100$ cycles.<br/><br/>Assume:</p><p>What is the <strong>effective memory access time (in cycles)</strong> for this system?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">TLB hit ratio $=95 \\%$<br/></span>",
                "<span style=\"display: inline;\">Page table is always resident in memory<br/></span>",
                "<span style=\"display: inline;\">No page faults occur<br/></span>"
            ],
            "answer": "106",
            "solution": "<div class=\"solution-content\"><a name=\"513431\"></a><div itemprop=\"text\"><ul><li>TLB lookup time $= 1$ cycle<br/> </li><li>Memory access time $=100$ cycles<br/> </li><li>TLB hit ratio $=0.95$<br/> </li><li>Page table in memory, no page faults<br/> </li></ul><p><strong>TLB Hit Case</strong>:</p><ul><li>TLB lookup $=1$<br/> </li><li>Memory access $=100$<br/><br/>Total $= 101$ cycles<br/> </li></ul><p><strong>TLB Miss Case:</strong></p><ul><li>TLB lookup $=1$<br/> </li><li>Page table access $=100$<br/> </li><li>Memory access $=100$<br/><br/>Total $= 201$ cycles<br/> </li></ul><p><strong>Effective Memory Access Time:</strong></p><p>$$<br/>\\begin{aligned}<br/>&amp; \\text { EMAT }=(0.95 \\times 101)+(0.05 \\times 201) \\\\<br/>&amp; \\text { EMAT }=95.95+10.05 \\\\<br/>&amp; \\text { EMAT }=106 \\text { cycles }<br/>\\end{aligned}<br/>$$</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/513430/go-classes-dpp-os-paging\" target=\"_blank\">GATE Overflow #513430</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>A system uses a $32$-bit virtual address space with a page size of $8$ KB. The system employs a <strong>Two-Level Paging</strong> scheme. The Page Table Entry (PTE) size at both levels is $4$ bytes.</p><p>To optimize space, the inner page tables are only allocated when needed. If a process currently has a total of $16$ MB of its virtual address space mapped to physical memory, and this $16$ MB is stored in one <strong>contiguous</strong> block of virtual addresses, what is the total size (in KB) of the page tables (outer + inner) required for this process?</p><p>Assuming that process creates an outer table page upon process creation</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$12$ KB<br/></span>",
                "<span style=\"display: inline;\">$16$ KB<br/></span>",
                "<span style=\"display: inline;\">$20$ KB<br/></span>",
                "<span style=\"display: inline;\">$24$ KB</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"513429\"></a><div itemprop=\"text\"><p>Virtual address size$: 32$ bits<br/><br/>Page size: $8 \\mathrm{~KB}=2^{13}$ bytes<br/><br/>Paging scheme: Two-level paging<br/><br/>PTE size (both levels)$: 4$ bytes<br/><br/>Mapped virtual memory$: 16$ MB, <strong>contiguous</strong><br/><br/>Inner page tables allocated only when needed<br/><br/>One outer page table page is always created</p><ul><li>Page size $=8 \\mathrm{~KB}=2^{13}$<br/> </li><li>Offset $=13$ bits<br/> </li></ul><p><strong>Remaining bits for paging</strong></p><ul><li>$32-13=19$ bits<br/> </li><li>Page table entry size $=4$ bytes<br/> </li><li>Entries per page table $=8 \\mathrm{~KB} / 4 \\mathrm{~B}=2048=2^{11}$ entries</li></ul><p>So:</p><ul><li>Inner index bits $= 11$<br/> </li><li>Outer index bits $=19-11=8$<br/> </li><li>One inner page table has $2048$ entries<br/> </li><li>Each entry maps $8$ KB<br/> </li></ul><p>Coverage $=2048 \\times 8 \\mathrm{~KB}=16 \\mathrm{MB}$</p><ul><li>Outer page table$: 1$ page $=8 \\mathrm{~KB}$<br/> </li><li>Inner page table$: 1$ page $=8 \\mathrm{~KB}$<br/> </li></ul><p>Total page table size $=8 \\mathrm{~KB}+8 \\mathrm{~KB}=16 \\mathrm{~KB}$</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/513428/go-classes-dpp-os-paging\" target=\"_blank\">GATE Overflow #513428</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>A computer system supports a logical address space of $2^{44}\\text{ bytes}$. It uses inverted paging with a page size of <strong>$8192\\text{ bytes}$</strong>.</p><p>Each inverted page table entry consists of a <strong>$31\\text{-bit}$ logical page number, </strong>a<strong> $25\\text{-bit}$ process ID</strong>, and<strong> $8$ control bits</strong>.</p><p>The system has <strong>$16\\text{ GB}$ </strong>of<strong> physical memory. </strong>Each entry of the inverted page table uses $8\\text{ bytes}$ and all pages have the same size.</p><p>Assume $1\\text{ GB}=2^{30}\\text{ bytes}$ and $1\\text{ MB}=2^{20}\\text{ bytes}$.</p><p>The size of the inverted page table in $\\text{MB}$ is $\\_\\_\\_\\_$. <em>(Answer in integer)</em></p></div></span>",
            "image": "",
            "options": [],
            "answer": "2",
            "solution": "<div class=\"solution-content\"><a name=\"512806\"></a><div itemprop=\"text\"><p><strong>Logical Address Space:</strong> $2^{44}$ bytes $(44$-bit address$)$.<br/><br/><strong>Page Size:</strong> $8192$ bytes $(2^{13}$ bytes$)$.<br/><br/><strong>Physical Memory: </strong>$16 ~\\mathrm{GB} ~(2^{34}$ bytes$)$.<br/><br/><strong>Number of Frames:</strong> $\\frac{\\text { Physical Memory }}{\\text { Page Size }}=\\frac{2^{34}}{2^{13}}=2^{21}$ frames.<br/><br/><strong>Entries in Inverted Page Table:</strong> One per frame $=2^{21}$ entries.<br/><br/><strong>Entry Size:</strong> Given as $8$ bytes $(2^3$ bytes$)$.<br/><br/><strong>Total Table Size:</strong> $2^{21} \\times 2^3=2^{24}$ bytes.<br/><br/><strong>Conversion to $\\mathbf{MB}$:</strong> $\\frac{2^{24}}{2^{20}}=2^4=\\mathbf{1 6}$.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/512805/go-classes-dpp-os-paging\" target=\"_blank\">GATE Overflow #512805</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>A computer system supports a logical address space of $2^{45}$ <strong>bytes</strong>. It uses a three-level hierarchical paging scheme with a page size of $\\mathbf{16 ~KB}$ $(2^{14}$ <strong>bytes</strong>$)$. A logical address is divided into a $b$<strong>-bit</strong> index to the top-level page table, a middle-level index, an inner-level index, and a page offset.</p><p>Each entry in all levels of the page tables uses $\\mathbf{8}$ <strong>bytes</strong>. In this system,<strong> every page table at every level fits exactly within one single page.</strong></p><p><strong>The value of $b$ is:</strong></p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$7$<br/></span>",
                "<span style=\"display: inline;\">$9$<br/></span>",
                "<span style=\"display: inline;\">$11$<br/></span>",
                "<span style=\"display: inline;\">$13$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"512804\"></a><div itemprop=\"text\"><p><strong>Offset:</strong> $\\log _2\\left(2^{14}\\right)=\\mathbf{14}$ bits<br/><br/><strong>Entries per page: </strong>$\\frac{\\text { Page Size }}{\\text { PTE Size }}=\\frac{2^{14}}{2^3}=2^{11}$ entries.<br/><br/><strong>Inner-level index:</strong> $\\mathbf{11}$ bits<br/><br/><strong>Middle-level index:</strong> $\\mathbf{11}$ bits<br/> </p><p>$$<br/>\\begin{gathered}<br/>\\text{Total Bits} =b+11+11+14=45\\\\<br/>b+36=45 \\\\<br/>b=\\mathbf{9}<br/>\\end{gathered}<br/>$$</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/512803/go-classes-dpp-os-paging\" target=\"_blank\">GATE Overflow #512803</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider a computer system with $\\mathbf{2 5 6 ~ M B}$ <strong>of PHYSICAL MEMORY</strong> and a $\\mathbf{40-}$<strong>bit VIRTUAL ADDRESS SPACE.</strong> The system utilizes a paging scheme where the <strong>PAGE SIZE</strong> is set to $\\mathbf{16 ~KB}$.</p><p>If each <strong>PAGE TABLE ENTRY (PTE)</strong> must store the frame number plus $\\mathbf{2}$ <strong>BITS</strong> for protection and status, what is the <strong>TOTAL SIZE</strong> of the page table for a single process?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$64$ MB<br/></span>",
                "<span style=\"display: inline;\">$128$ MB<br/></span>",
                "<span style=\"display: inline;\">$160$ MB<br/></span>",
                "<span style=\"display: inline;\">$256$ MB</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"508387\"></a><div itemprop=\"text\"><p>Physical Memory $=256 \\mathrm{MB}=2^{28}$ bytes<br/><br/>Number of Frames $=\\frac{\\text { Physical Memory }}{\\text { Page Size }}=\\frac{2^{28}}{2^{14}}=2^{14}$ frames.<br/><br/>Bits for Frame Number $=\\textbf{14}$ <strong>bits.</strong><br/><br/>Total bits per entry $=14($frame$) + 2($extra$)=16$<br/><br/>Virtual Address Space $=2^{40}$<br/><br/>Page Size $=16 \\mathrm{~KB}=2^{14}$ bytes<br/><br/>Number of Pages $=\\frac{2^{40}}{2^{14}}=2^{26}$ entries.<br/> </p><p>Size $=$ Number of Entries × Entry Size<br/><br/>Size $=2^{26} \\times 2$ bytes $=2^{27}$ bytes<br/><br/>Size $=128 \\mathrm{MB}$</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/508386/go-classes-dpp-os-paging\" target=\"_blank\">GATE Overflow #508386</a></small></div>"
        }
    ]
});

registerTest({
    "name": "DPP 32 - Operating System (Memory Management & Virtual Memory - Part 8)",
    "testLabel": "DPP 32",
    "testType": "DPP",
    "bracket": "Memory Management & Virtual Memory - Part 8",
    "subject": "os",
    "series": "cse-dpp-2027",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 11,
    "topicsCovered": "Memory Management & Virtual Memory (Practice Set 8)",
    "questions": [
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider a system where a CPU generates $\\mathbf{32-}$<strong>bit virtual addresses</strong> with a <strong>page size of</strong> $\\mathbf{8 ~KB}$. The system has a $\\mathbf{2-way}$ <strong>set associative TLB</strong> that can hold $\\mathbf{256}$<strong> page table entries.</strong></p><p>Calculate the <strong>minimum size of the TLB tag</strong></p></div></span>",
            "image": "",
            "options": [],
            "answer": "19",
            "solution": "<div class=\"solution-content\"><a name=\"507897\"></a><div itemprop=\"text\"><p><strong>Virtual Address</strong>$: 32$ bits<br/><br/><strong>Page Size:</strong> $8 K B=2^{13}$ bytes ⟹<strong> Offset = $\\mathbf{13}$ bits</strong><br/><br/><strong>Virtual Page Number (VPN): </strong>$32-13=\\mathbf{1 9}$ bits<br/><br/><strong>TLB Structure:</strong> $256$ entries, $\\mathrm{2-way}$ set associative.</p><ul><li><strong>Number of Sets: </strong>$\\frac{256}{2}=128$ sets<br/> </li><li><strong>Index bits:</strong> $\\log _2(128)=\\mathbf{7}$<strong> bits</strong><br/> </li></ul><p><strong>Minimum Tag Size:</strong> $V P N-$ Index $=19-7=\\mathbf{1 2}$ <strong>bits</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/507896/go-classes-dpp-os-virtual-memory\" target=\"_blank\">GATE Overflow #507896</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>A demand-paged system has the following characteristics:</p><p>The effective memory access time (EMAT) must not exceed $\\mathrm{300 ~ns}$<br/><br/>Which of the following is the <strong>maximum acceptable value of </strong>$\\mathbf{p}$ ?</p><p><strong>Given Details:</strong></p><ul><li>Memory access time $\\mathrm{= 200 ~ns}$</li><li>Page fault service time $=10 \\mathrm{~ms}$</li><li>Probability of a page fault $\\mathrm{= p}$</li></ul></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$1 \\times 10^{-6}$</span>",
                "<span style=\"display: inline;\">$5 \\times 10^{-6}$</span>",
                "<span style=\"display: inline;\">$1 \\times 10^{-5}$</span>",
                "<span style=\"display: inline;\">$5 \\times 10^{-5}$</span>"
            ],
            "answer": "C",
            "solution": "<div class=\"solution-content\"><a name=\"505745\"></a><div itemprop=\"text\"><p>Memory access time $=200 \\mathrm{~ns}$<br/><br/>Page fault service time $=10 \\mathrm{~ms}=10^7 \\mathrm{~ns}$<br/><br/>Effective Memory Access Time formula:</p><p>$$<br/>\\text { EMAT }=(1-p) \\times 200+p \\times\\left(10^7+200\\right)<br/>$$<br/>$$<br/>\\begin{aligned}<br/>&amp; \\text{EMAT} \\leq 300 \\mathrm{~ns}\\\\\\\\<br/>&amp; 200+p \\times 10^7 \\leq 300 \\\\\\\\<br/>&amp; p \\times 10^7 \\leq 100 \\\\\\\\<br/>&amp; p \\leq 100 / 10^7 \\\\\\\\<br/>&amp; p \\leq 1 \\times 10^{-5}<br/>\\end{aligned}<br/>$$</p><p><br/><strong>Correct option: C</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/505743/go-classes-dpp-os-paging\" target=\"_blank\">GATE Overflow #505743</a></small></div>"
        },
        {
            "marks": 2,
            "neg": 0,
            "type": "MSQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>A system uses paging with the following parameters:</p><p>Each logical address is of the form (page number, page offset).<br/> </p><p>Which of the following statements is/are correct?</p><p><strong>Given Details:</strong></p><ul><li>Logical address space size $=64 \\mathrm{~KB}$</li><li>Page size $=1 \\mathrm{~KB}$</li><li>Physical memory size $=32 \\mathrm{~KB}$</li><li>Page table entry size $=2 ~\\text{bytes}$</li></ul></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">The number of bits required for the page offset is $10$</span>",
                "<span style=\"display: inline;\">The number of entries in the page table is $64$</span>",
                "<span style=\"display: inline;\">The total size of the page table is $128 ~\\text{bytes}$</span>",
                "<span style=\"display: inline;\">The number of frames in physical memory is $32$</span>"
            ],
            "answer": [
                "A"
            ],
            "solution": "<div class=\"solution-content\"><a name=\"505742\"></a><div itemprop=\"text\"><p>Logical address space size $=64 \\mathrm{~KB}=2^{16}$ bytes<br/><br/>Page size $=1 \\mathrm{~KB}=2^{10}$ bytes<br/><br/>Page offset bits $=\\log _2(1 \\mathrm{~KB})=10$ bits<br/><br/>So statement <strong>A is correct.</strong><br/><br/><br/>Number of pages $=64 \\mathrm{~KB} / 1 \\mathrm{~KB}=64$<br/><br/>So page table has $64$ entries<br/><br/>Statement <strong>B is correct.</strong><br/><br/><br/>Page table entry size $=2$ bytes<br/><br/>Total page table size $=64 \\times 2=128$ bytes<br/><br/>Statement <strong>C is correct.</strong><br/><br/><br/>Physical memory size $=32 \\mathrm{~KB}$<br/><br/>Number of frames $=32 \\mathrm{~KB} / 1 \\mathrm{~KB}=32$<br/><br/>Statement <strong>D is correct.</strong><br/><br/><br/><strong>Correct options: A, B, C, D</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/505741/go-classes-dpp-os-paging\" target=\"_blank\">GATE Overflow #505741</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>A computer system supports a logical address space of $2^{36}$ bytes. It uses <strong>two-level hierarchical paging</strong> with a page size of $\\mathbf{8 1 9 2}$ <strong>bytes</strong>. A logical address is divided into a c-bit index to the <strong>outer page table</strong>, an offset within the page of the <strong>inner page table</strong>, and an offset within the desired page. Each entry of the <strong>inner page table</strong> uses <strong>four bytes</strong>. All the pages in the system have the same size.<br/><br/>The value of $\\mathbf{c}$ is $\\_\\_\\_\\_$ (Answer in integer).</p></div></span>",
            "image": "",
            "options": [],
            "answer": "12",
            "solution": "<div class=\"solution-content\"><a name=\"504057\"></a><div itemprop=\"text\">Page Size $=8192$ bytes<br/> <br/> Inner Page Table Entry Size $=4$ bytes<br/> <br/> The number of entries in the inner page table is determined by $2^I$.<br/> $$<br/> I=11 \\text { bits }<br/> $$<br/> Page offset $= 13$ bits<br/> <br/> $C+1+13=36$<br/> <br/> $C+11+13=36$<br/> <br/> $\\mathrm{C}=12$</div><br><br><small>Source: <a href=\"https://gateoverflow.in/504055/go-classes-dpp-os-multilevel-paging\" target=\"_blank\">GATE Overflow #504055</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>A process has been allocated $\\mathbf{6}$ <strong>page frames.</strong> Assume that none of the pages of the process are available in the memory initially. The process makes the following sequence of page references (reference string):</p><p>$$<br/>\\mathbf{7,0,1,2,0,3,0,4,2,3,0,3,2,1,2,0,1,7,0,1}<br/>$$</p><p><br/>If the <strong>Optimal page replacement policy</strong> is used, how many <strong>page faults</strong> occur for the above reference string?</p></div></span>",
            "image": "",
            "options": [],
            "answer": "6",
            "solution": "<div class=\"solution-content\"><a name=\"502359\"></a><div itemprop=\"text\"><p>\\[<br/>\\begin{array}{c c c c c c c c c}<br/>\\text{Reference} &amp; F1 &amp; F2 &amp; F3 &amp; F4 &amp; F5 &amp; F6 &amp; \\text{Action} &amp; \\text{Page Faults} \\\\<br/>\\mathbf{7} &amp; \\mathbf{7} &amp; &amp; &amp; &amp; &amp; &amp; \\text{Miss} &amp; 1 \\\\<br/>\\mathbf{0} &amp; 7 &amp; \\mathbf{0} &amp; &amp; &amp; &amp; &amp; \\text{Miss} &amp; 2 \\\\<br/>\\mathbf{1} &amp; 7 &amp; 0 &amp; \\mathbf{1} &amp; &amp; &amp; &amp; \\text{Miss} &amp; 3 \\\\<br/>\\mathbf{2} &amp; 7 &amp; 0 &amp; 1 &amp; \\mathbf{2} &amp; &amp; &amp; \\text{Miss} &amp; 4 \\\\<br/>\\mathbf{0} &amp; 7 &amp; 0 &amp; 1 &amp; 2 &amp; &amp; &amp; \\text{Hit} &amp; 4 \\\\<br/>\\mathbf{3} &amp; 7 &amp; 0 &amp; 1 &amp; 2 &amp; \\mathbf{3} &amp; &amp; \\text{Miss} &amp; 5 \\\\<br/>\\mathbf{0} &amp; 7 &amp; 0 &amp; 1 &amp; 2 &amp; 3 &amp; &amp; \\text{Hit} &amp; 5 \\\\<br/>\\mathbf{4} &amp; 7 &amp; 0 &amp; 1 &amp; 2 &amp; 3 &amp; \\mathbf{4} &amp; \\text{Miss} &amp; 6 \\\\<br/>\\mathbf{2} &amp; 7 &amp; 0 &amp; 1 &amp; 2 &amp; 3 &amp; 4 &amp; \\text{Hit} &amp; 6 \\\\<br/>\\end{array}<br/>\\]</p><p> </p><p>The rest of the reference string is: $\\mathbf{3 , 0 , 3 , 2 , 1 , 2 , 0 , 1 , 7 , 0 , 1}$.<br/><br/>All pages in this remaining sequence are pages that are already resident in the frames $\\{7,0,1,2,3,4\\}$.</p><ul><li>$\\mathbf{3}$ (Hit)<br/> </li><li>$\\mathbf{0}$ (Hit)<br/> </li><li>$\\mathbf{3}$ (Hit)<br/> </li><li>$\\mathbf{2}$ (Hit)<br/> </li><li>$\\mathbf{1}$ (Hit)<br/> </li><li>$\\mathbf{2}$ (Hit)<br/> </li><li>$\\mathbf{0}$ (Hit)<br/> </li><li>$\\mathbf{1}$ (Hit)<br/> </li><li>$\\mathbf{7}$ (Hit)<br/> </li><li>$\\mathbf{0}$ (Hit)<br/> </li><li>$\\mathbf{1}$ (Hit)<br/> </li></ul><p>Since all subsequent references are Hits, no further page faults occur.<br/> </p><p>Total no of page faults $=6$</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/502358/go-classes-dpp-os-page-replacement\" target=\"_blank\">GATE Overflow #502358</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>A process has been allocated $\\mathbf{5}$ <strong>page frames.</strong> Assume that none of the pages of the process are available in the memory initially. The process makes the following sequence of page references (reference string):</p><p>$$<br/>5,4,3,2,1,4,3,5,2,6,1,4<br/>$$</p><p><br/>If the <strong>Most Recently Used (MRU) page replacement policy</strong> is used, how many <strong>page faults</strong> occur for the above reference string?</p></div></span>",
            "image": "",
            "options": [],
            "answer": "502356",
            "solution": "<div class=\"solution-content\"><a name=\"502357\"></a><div itemprop=\"text\">\\[<br/> \\begin{array}{c c c c c c c c c}<br/> \\text{Reference} &amp; F1 &amp; F2 &amp; F3 &amp; F4 &amp; F5 &amp; \\text{Action} &amp; \\text{Page Faults} &amp; \\text{MRU Page Replaced} \\\\<br/> \\mathbf{5} &amp; \\mathbf{5} &amp; &amp; &amp; &amp; &amp; \\text{Miss} &amp; 1 &amp; - \\\\<br/> \\mathbf{4} &amp; 5 &amp; \\mathbf{4} &amp; &amp; &amp; &amp; \\text{Miss} &amp; 2 &amp; - \\\\<br/> \\mathbf{3} &amp; 5 &amp; 4 &amp; \\mathbf{3} &amp; &amp; &amp; \\text{Miss} &amp; 3 &amp; - \\\\<br/> \\mathbf{2} &amp; 5 &amp; 4 &amp; 3 &amp; \\mathbf{2} &amp; &amp; \\text{Miss} &amp; 4 &amp; - \\\\<br/> \\mathbf{1} &amp; 5 &amp; 4 &amp; 3 &amp; 2 &amp; \\mathbf{1} &amp; \\text{Miss} &amp; 5 &amp; - \\\\<br/> \\mathbf{4} &amp; 5 &amp; \\mathbf{4} &amp; 3 &amp; 2 &amp; 1 &amp; \\text{Hit} &amp; 5 &amp; - \\\\<br/> \\mathbf{3} &amp; 5 &amp; 4 &amp; \\mathbf{3} &amp; 2 &amp; 1 &amp; \\text{Hit} &amp; 5 &amp; - \\\\<br/> \\mathbf{5} &amp; \\mathbf{5} &amp; 4 &amp; 3 &amp; 2 &amp; 1 &amp; \\text{Hit} &amp; 5 &amp; - \\\\<br/> \\mathbf{2} &amp; 5 &amp; 4 &amp; 3 &amp; \\mathbf{2} &amp; 1 &amp; \\text{Hit} &amp; 5 &amp; - \\\\<br/> \\mathbf{6} &amp; 5 &amp; 4 &amp; 3 &amp; \\mathbf{6} &amp; 1 &amp; \\text{Miss} &amp; 6 &amp; \\mathbf{2} ~\\text{Most recently used} \\\\<br/> \\mathbf{1} &amp; 5 &amp; 4 &amp; 3 &amp; 6 &amp; \\mathbf{1} &amp; \\text{Hit} &amp; 6 &amp; - \\\\<br/> \\mathbf{4} &amp; 5 &amp; \\mathbf{4} &amp; 3 &amp; 6 &amp; 1 &amp; \\text{Hit} &amp; 6 &amp; - \\\\<br/> \\end{array}<br/> \\]<br/> <br/> The total number of page faults that occur is $\\mathbf{6}$.</div><br><br><small>Source: <a href=\"https://gateoverflow.in/502356/go-classes-dpp-os-page-replacement\" target=\"_blank\">GATE Overflow #502356</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>A process has been allocated $\\mathbf{4}$ <strong>page frames</strong>. Assume that none of the pages of the process are available in the memory initially. The process makes the following sequence of page references (reference string):</p><p>$$<br/>1,2,3,4,1,5,2,4,3,6,1,7<br/>$$</p><p><br/>If the<strong> First-In, First-Out (FIFO) page replacement policy</strong> is used, how many <strong>page faults</strong> occur for the above reference string?</p></div></span>",
            "image": "",
            "options": [],
            "answer": "8",
            "solution": "<div class=\"solution-content\"><a name=\"502539\"></a><div itemprop=\"text\"><table><thead><tr><th>Step</th><th>Reference</th><th>Frames (top→bottom)</th><th align=\"right\">Fault/Hit</th><th>Explanation (FIFO queue order: oldest → newest)</th></tr></thead><tbody><tr><td>1</td><td>1</td><td>1, –, –, –</td><td align=\"right\">Fault (1)</td><td>Load 1. Queue: [1]</td></tr><tr><td>2</td><td>2</td><td>1, 2, –, –</td><td align=\"right\">Fault (2)</td><td>Load 2. Queue: [1,2]</td></tr><tr><td>3</td><td>3</td><td>1, 2, 3, –</td><td align=\"right\">Fault (3)</td><td>Load 3. Queue: [1,2,3]</td></tr><tr><td>4</td><td>4</td><td>1, 2, 3, 4</td><td align=\"right\">Fault (4)</td><td>Load 4. Queue: [1,2,3,4]</td></tr><tr><td>5</td><td>1</td><td>1, 2, 3, 4</td><td align=\"right\">Hit</td><td>1 already in frames. Queue unchanged.</td></tr><tr><td>6</td><td>5</td><td>5, 2, 3, 4</td><td align=\"right\">Fault (5)</td><td>Replace oldest (1) with 5. Queue: [2,3,4,5]</td></tr><tr><td>7</td><td>2</td><td>5, 2, 3, 4</td><td align=\"right\">Hit</td><td>2 present. Queue unchanged.</td></tr><tr><td>8</td><td>4</td><td>5, 2, 3, 4</td><td align=\"right\">Hit</td><td>4 present.</td></tr><tr><td>9</td><td>3</td><td>5, 2, 3, 4</td><td align=\"right\">Hit</td><td>3 present.</td></tr><tr><td>10</td><td>6</td><td>5, 6, 3, 4</td><td align=\"right\">Fault (6)</td><td>Replace oldest (2) with 6. Queue: [3,4,5,6]</td></tr><tr><td>11</td><td>1</td><td>5, 6, 1, 4</td><td align=\"right\">Fault (7)</td><td>Replace oldest (3) with 1. Queue: [4,5,6,1]</td></tr><tr><td>12</td><td>7</td><td>5, 6, 1, 7</td><td align=\"right\">Fault (8)</td><td>Replace oldest (4) with 7. Queue: [5,6,1,7]</td></tr></tbody></table><p data-end=\"1861\" data-start=\"1835\"><strong data-end=\"1861\" data-start=\"1835\">Total page faults = 8.</strong></p><p data-end=\"1928\" data-is-last-node=\"\" data-is-only-node=\"\" data-start=\"1863\">(There are hits at steps 5, 7, 8, 9; all other steps are faults.)</p><p> </p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/502355/go-classes-dpp-os-page-replacement\" target=\"_blank\">GATE Overflow #502355</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider $5$ memory partitions of sizes $\\mathbf{1 0 0 ~ K B} \\boldsymbol{,} \\mathbf{5 0 0 ~ K B} \\boldsymbol{,} \\mathbf{2 0 0 ~ K B} \\boldsymbol{,} \\mathbf{3 5 0 ~ K B}$, and $\\mathbf{6 0 0 ~ K B}$, where KB refers to kilobyte. These partitions need to be allotted to three processes of sizes $2 5 0$ KB, $450$ KB , and $150$ KB in that order.</p><p>If the Worst-Fit algorithm is used, which partitions are NOT allotted to any process?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$100$ KB and $200$ KB<br/></span>",
                "<span style=\"display: inline;\">$350$ KB and $500$ KB<br/></span>",
                "<span style=\"display: inline;\">$100$ KB and $350$ KB<br/></span>",
                "<span style=\"display: inline;\">$200$ KB and $350$ KB</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"501092\"></a><div itemprop=\"text\">Ans. A</div><br><br><small>Source: <a href=\"https://gateoverflow.in/501042/go-classes-dpp-os-frame-allocation\" target=\"_blank\">GATE Overflow #501042</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\">A process has been allocated $3$ page frames. Assume that none of the pages of the process are available in the memory initially. The process makes the following sequence of page references (reference string): $$2 , 3 , 2 , 1 , 5 , 2 , 4 , 5 , 3 , 2 , 5 , 2$$ If the First-In, First-Out (FIFO) page replacement policy is used, how many page hits occur for the above reference string?<br/> </div></span>",
            "image": "",
            "options": [],
            "answer": "3",
            "solution": "<div class=\"solution-content\"><a name=\"501031\"></a><div itemprop=\"text\"><p> </p><p> </p><p><b id=\"docs-internal-guid-1854acba-7fff-1e6e-c332-7dbb12cabe53\"><img alt=\"\" height=\"466\" src=\"https://gateoverflow.in/?qa=blob&amp;qa_blobid=4747954755740864635\" width=\"500\"/></b></p><p dir=\"ltr\"><b id=\"docs-internal-guid-227d88a3-7fff-386c-e0c9-58c3b89571a2\">Total no. of page hits = 3</b></p><p> </p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/501029/go-classes-dpp-os-page-replacement\" target=\"_blank\">GATE Overflow #501029</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>A process has been allocated $\\mathbf{4}$ page frames. Assume that none of the pages of the process are available in the memory initially. The process makes the following sequence of page references (reference string): $$5,0,1,7,0,3,0,4,2,3,0,3,2,1,7$$</p><p>If the Least Recently Used (LRU) page replacement policy is used, how many page faults occur for the above reference string?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$9$<br/></span>",
                "<span style=\"display: inline;\">$10$<br/></span>",
                "<span style=\"display: inline;\">$11$<br/></span>",
                "<span style=\"display: inline;\">$12$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"501028\"></a><div itemprop=\"text\"><p> </p><p> </p><p><b id=\"docs-internal-guid-34a9c42d-7fff-9a64-006f-e2b9953f005e\"><img alt=\"\" height=\"548\" src=\"https://gateoverflow.in/?qa=blob&amp;qa_blobid=5655217747591815551\" width=\"455\"/></b></p><p dir=\"ltr\"><b id=\"docs-internal-guid-9af0490d-7fff-c210-ab79-e544da4adcb3\">Total no of faults=9</b></p><p> </p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/501027/go-classes-dpp-os-page-replacement\" target=\"_blank\">GATE Overflow #501027</a></small></div>"
        }
    ]
});

registerTest({
    "name": "DPP 33 - Operating System (File Systems & Disk Scheduling - Part 1)",
    "testLabel": "DPP 33",
    "testType": "DPP",
    "bracket": "File Systems & Disk Scheduling - Part 1",
    "subject": "os",
    "series": "cse-dpp-2027",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 10,
    "topicsCovered": "File Systems & Disk Scheduling (Practice Set 1)",
    "questions": [
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Which of the following data structures can be used by a file system to manage <strong>free disk blocks</strong>?</p><p> </p><p><strong>Given Details:</strong></p><ul><li>Bitmap</li><li>Inode</li><li>Free-block linked list</li><li>File Allocation Table, FAT</li></ul></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">I and II only</span>",
                "<span style=\"display: inline;\">I, III and IV only</span>",
                "<span style=\"display: inline;\">I and III only</span>",
                "<span style=\"display: inline;\">II, III and IV only</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"546619\"></a><div itemprop=\"text\"><p><strong>I. Bitmap: Yes</strong></p><p>A bitmap can associate one bit with every disk block.</p><p>For example:</p><p>$0 = \\text{free}$</p><p>$1 = \\text{allocated}$</p><p>This provides a direct representation of free and occupied disk blocks.</p><p> </p><p><strong>II. Inode: No</strong></p><p>An inode describes a particular file.</p><p>It contains information such as:</p><ul><li><p>file metadata</p></li><li><p>file size</p></li><li><p>ownership</p></li><li><p>addresses of data blocks</p></li></ul><p>It is <strong>not primarily a free-space management structure</strong>.</p><p> </p><p><strong>III. Free-block linked list: Yes</strong></p><p>Free blocks can be connected into a linked structure.</p><p>The OS follows this list when it needs an unused disk block.</p><p> </p><p><strong>IV. FAT: Yes</strong></p><p>A FAT contains an entry corresponding to each allocation unit.</p><p>Special entry values can identify blocks that are currently free, so the FAT can also support free-space management.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/546618/go-classes-dpp-gate-cs-operating-system-free-space-management\" target=\"_blank\">GATE Overflow #546618</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"81\" data-start=\"0\">Suppose several processes have opened and are sharing the same file $F$.</p><p data-end=\"110\" data-start=\"83\">Which statement is correct?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">All processes may open $F$ only in read mode.<br/></span>",
                "<span style=\"display: inline;\">The system-wide open-file table needs only one entry containing the persistent attributes of $F$.<br/></span>",
                "<span style=\"display: inline;\">The entries concerning $F$ in the per-process open-file tables must be identical.<br/></span>",
                "<span style=\"display: inline;\">Whenever any one process closes $F$, the system immediately removes the corresponding system-wide open-file-table entry.</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"546426\"></a><div itemprop=\"text\"><p data-end=\"6743\" data-start=\"6660\">Operating systems commonly separate file-opening information into different levels.</p><p data-end=\"6875\" data-start=\"6745\">At the process level, each process can have its own information associated with the file, such as its descriptor and access state.</p><p data-end=\"6962\" data-start=\"6877\">At the system level, information describing the underlying opened file can be shared.</p><p data-end=\"6978\" data-section-id=\"1atks68\" data-start=\"6964\"><strong>A is false</strong></p><p data-end=\"7062\" data-start=\"6980\">Sharing a file does not mean that every process is restricted to read-only access.</p><p data-end=\"7085\" data-section-id=\"1j6ttds\" data-start=\"7069\"><br/><strong>B is correct</strong></p><p data-end=\"7186\" data-start=\"7087\">The system does not need to duplicate the persistent attributes of the same file for every process.</p><p data-end=\"7289\" data-start=\"7188\">A shared system-wide entry can represent the opened file, with references from process-level entries.</p><p data-end=\"7310\" data-section-id=\"k2wh5u\" data-start=\"7296\"><br/><strong>C is false</strong></p><p data-end=\"7354\" data-start=\"7312\">Process-level state need not be identical.</p><p data-end=\"7441\" data-start=\"7356\">For example, processes may have different access modes or other per-open information.</p><p data-end=\"7462\" data-section-id=\"1ctrvr9\" data-start=\"7448\"><br/><strong>D is false</strong></p><p data-end=\"7551\" data-start=\"7464\">Closing the file by one process does not imply that no other process still has it open.</p><p data-end=\"7676\" data-start=\"7553\">The system-wide information can be removed only when the relevant reference count indicates that no open reference remains.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/546425/go-classes-dpp-gate-cs-operating-system-open-file-tables\" target=\"_blank\">GATE Overflow #546425</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><section data-testid=\"conversation-turn-60\" data-turn=\"assistant\" data-turn-id=\"request-WEB:98ab4789-ad2c-4854-97e3-288d9d6681a6-29\" data-turn-id-container=\"request-WEB:98ab4789-ad2c-4854-97e3-288d9d6681a6-29\" dir=\"auto\"><p data-end=\"55\" data-start=\"0\">A disk contains tracks numbered from $0$ through $199$.</p><p data-end=\"99\" data-start=\"57\">The disk head is currently at track $184$.</p><p data-end=\"150\" data-start=\"101\">The pending requests, in arrival-list order, are $184, 187, 176, 182, 199$.</p><p data-end=\"274\" data-is-last-node=\"\" data-is-only-node=\"\" data-start=\"179\">If Shortest Seek Time First, $\\text{SSTF}$, is used, what is the total head movement in tracks?</p></section></div></span>",
            "image": "",
            "options": [],
            "answer": "41",
            "solution": "<div class=\"solution-content\"><a name=\"546112\"></a><div itemprop=\"text\"><p data-end=\"94\" data-start=\"0\">Using SSTF, the disk always services the pending request closest to the current head position.</p><p data-end=\"127\" data-start=\"96\">The head starts at track $184$.</p><ul data-end=\"330\" data-start=\"129\"><li data-end=\"168\" data-section-id=\"1vhgk0p\" data-start=\"129\">$184 \\rightarrow 184:$ movement $= 0$</li><li data-end=\"208\" data-section-id=\"1pivc65\" data-start=\"169\">$184 \\rightarrow 182:$ movement $= 2$</li><li data-end=\"248\" data-section-id=\"1occ1g9\" data-start=\"209\">$182 \\rightarrow 187:$ movement $= 5$</li><li data-end=\"289\" data-section-id=\"10q27gn\" data-start=\"249\">$187 \\rightarrow 176:$ movement $= 11$</li><li data-end=\"330\" data-section-id=\"187gx61\" data-start=\"290\">$176 \\rightarrow 199:$ movement $= 23$</li></ul><p data-end=\"355\" data-start=\"332\">So the service order is</p><p data-end=\"426\" data-start=\"357\">$184 \\rightarrow 182 \\rightarrow 187 \\rightarrow 176 \\rightarrow 199$</p><p data-end=\"448\" data-start=\"428\">Total head movement:</p><p data-end=\"476\" data-start=\"450\">$0 + 2 + 5 + 11 + 23 = 41$</p><p data-end=\"532\" data-is-last-node=\"\" data-is-only-node=\"\" data-start=\"478\">Therefore, the total head movement is $\\mathbf{41}$ <strong>tracks</strong>.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/546111/go-classes-dpp-gate-cs-operating-system-sstf-disk-scheduling\" target=\"_blank\">GATE Overflow #546111</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"18\" data-start=\"0\">file system has:</p><p data-end=\"287\" data-start=\"252\">A file grows to exactly $6 \\text{ MB}$.</p><p data-end=\"359\" data-start=\"289\">Which indirect address entries are required to access the entire file?</p><p><strong>Given Details:</strong></p><ul><li>Disk block size = $\\text{4 KB}$</li><li>$10$ direct address entries in each inode</li><li>$1$ single-indirect address entry</li><li>$1$ double-indirect address entry</li><li>$1$ triple-indirect address entry</li><li>Each address occupies $\\text{4 bytes}$</li></ul></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">Single-indirect only</span>",
                "<span style=\"display: inline;\">Double-indirect only</span>",
                "<span style=\"display: inline;\">Single-indirect and double-indirect</span>",
                "<span style=\"display: inline;\">Single-indirect, double-indirect and triple-indirect</span>"
            ],
            "answer": "C",
            "solution": "<div class=\"solution-content\"><a name=\"545876\"></a><div itemprop=\"text\"><p data-end=\"42\" data-start=\"0\">First determine the number of disk blocks:</p><p data-end=\"66\" data-start=\"44\">$\\text{6 MB / 4 KB}=1536$ blocks</p><p data-end=\"111\" data-start=\"84\">The direct entries address:</p><p data-end=\"124\" data-start=\"113\">$10$ blocks</p><p data-end=\"154\" data-start=\"126\">One indirect block contains:</p><p data-end=\"191\" data-start=\"156\">$\\text{4096 / 4 = 1024 pointers}$</p><p data-end=\"233\" data-start=\"193\">So direct + single-indirect can address:</p><p data-end=\"244\" data-start=\"235\">$10+1024=1034$ blocks</p><p data-end=\"266\" data-start=\"262\">But, $1536&gt;1034$</p><p data-end=\"340\" data-start=\"281\">Therefore, a single-indirect pointer is <strong data-end=\"339\" data-start=\"321\">not sufficient</strong>.</p><p data-end=\"392\" data-start=\"342\">A double-indirect entry can address an additional:</p><p data-end=\"410\" data-start=\"394\">$1024\\times1024$ data blocks.</p><p data-end=\"504\" data-start=\"426\">Therefore, $1536$ blocks fit comfortably once double indirection is available.</p><p data-end=\"523\" data-start=\"506\">So the file uses:</p><ul data-end=\"591\" data-start=\"525\"><li data-end=\"543\" data-section-id=\"k32rut\" data-start=\"525\">direct addresses<br/> </li><li data-end=\"567\" data-section-id=\"7pp9nl\" data-start=\"544\">single-indirect entry<br/> </li><li data-end=\"591\" data-section-id=\"1iuc6q6\" data-start=\"568\">double-indirect entry</li></ul><p data-end=\"636\" data-start=\"593\">It does <strong data-end=\"608\" data-start=\"601\">not</strong> require triple indirection.</p><p data-end=\"648\" data-start=\"638\"><br/><strong>Answer : C</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/545870/go-classes-dpp-gate-cs-operating-system-required-indirection-levels\" target=\"_blank\">GATE Overflow #545870</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"18\" data-start=\"0\">A file system has:</p><p data-end=\"216\" data-start=\"191\">Each image file has size $\\text{5600 bytes}$. Assume each file requires one inode.</p><p data-end=\"361\" data-is-last-node=\"\" data-is-only-node=\"\" data-start=\"279\">What is the <strong data-end=\"329\" data-start=\"291\">maximum number of such image files</strong> that the file system can store?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">Cluster size = $\\text{4 KB}$<br/></span>",
                "<span style=\"display: inline;\">Inode size = $\\text{64 bytes}$<br/></span>",
                "<span style=\"display: inline;\">$1\\text{M} = 2^{20}$ clusters reserved for storing inodes<br/></span>",
                "<span style=\"display: inline;\">$512\\text{M}$ clusters reserved for storing file data</span>"
            ],
            "answer": "67108864",
            "solution": "<div class=\"solution-content\"><a name=\"545869\"></a><div itemprop=\"text\"><p data-end=\"35\" data-start=\"0\">We must check <strong data-end=\"34\" data-start=\"14\">both limitations</strong>:</p><ol><li data-end=\"109\" data-start=\"37\">Number of available inodes<br/> </li><li data-end=\"109\" data-start=\"37\">Number of available data clusters</li></ol><p data-end=\"126\" data-section-id=\"1jxkyl6\" data-start=\"111\"><br/><strong>Inode limit</strong></p><p data-end=\"149\" data-start=\"128\">One cluster contains $:4096 / 64 = 64$ inodes.</p><p data-end=\"197\" data-start=\"187\">There are $2^{20}$ inode clusters.</p><p data-end=\"260\" data-start=\"226\">Therefore, total number of inodes:</p><p data-end=\"278\" data-start=\"262\">$2^{20}\\times64$</p><p data-end=\"298\" data-start=\"280\">$=2^{20}\\times2^6$</p><p data-end=\"309\" data-start=\"300\">$=2^{26}$</p><p data-end=\"324\" data-start=\"311\">$=67,108,864$</p><p data-end=\"363\" data-start=\"326\">So the inode region supports at most:</p><p data-end=\"391\" data-start=\"365\">$\\boxed{67,108,864}$ files</p><p data-end=\"413\" data-section-id=\"whp2uf\" data-start=\"393\"><br/><strong>Data-block limit</strong></p><p data-end=\"429\" data-start=\"415\">Each image is $:\\text{5600 bytes}$</p><p data-end=\"475\" data-start=\"454\">With $4$ KB clusters:</p><p data-end=\"499\" data-start=\"477\">$5600 &gt; 4096$</p><p data-end=\"524\" data-start=\"501\">so each image requires,</p><p data-end=\"546\" data-start=\"526\">$\\boxed{2}$ clusters</p><p data-end=\"573\" data-start=\"548\">The data region contains:</p><p data-end=\"604\" data-start=\"575\">$512\\text{M}=512\\times2^{20}=2^{29}$ clusters.</p><p data-end=\"641\" data-start=\"617\">Therefore, it can store:</p><p data-end=\"661\" data-start=\"643\">$\\frac{2^{29}}{2}=2^{28}$ files.</p><p data-end=\"688\" data-start=\"682\">Since,</p><p data-end=\"705\" data-start=\"690\">$2^{28}&gt;2^{26}$</p><p data-end=\"745\" data-start=\"707\">the <strong data-end=\"744\" data-start=\"711\">inode count is the bottleneck</strong>.</p><p data-end=\"753\" data-start=\"747\">Hence,</p><p data-end=\"775\" data-is-last-node=\"\" data-is-only-node=\"\" data-start=\"755\">$\\boxed{67,108,864}$</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/545868/go-classes-dpp-gate-cs-operating-system-file-capacity-limit\" target=\"_blank\">GATE Overflow #545868</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"27\" data-start=\"0\">A Unix-like inode contains:</p><p data-end=\"212\" data-start=\"112\">The file-system block size is $B$ bytes and each block pointer occupies $P$ bytes.</p><p data-end=\"221\" data-start=\"214\">Assume:</p><ul data-end=\"360\" data-start=\"223\"><li data-end=\"249\" data-section-id=\"we85nj\" data-start=\"223\">the file is already open<br/> </li><li data-end=\"286\" data-section-id=\"d2xyyo\" data-start=\"250\">its inode information is available<br/> </li><li data-end=\"314\" data-section-id=\"ryrt02\" data-start=\"287\">the buffer cache is empty<br/> </li><li data-end=\"360\" data-section-id=\"13dn3dh\" data-start=\"315\">each disk operation reads exactly one block<br/> </li></ul><p data-end=\"462\" data-start=\"362\">Which expression correctly gives the number of disk reads needed to access the <strong data-end=\"461\" data-start=\"441\">$N$th data block</strong>?</p><p><strong>Given Details:</strong></p><ul><li>$6$ direct pointers</li><li>$1$ single-indirect pointer</li><li>$1$ double-indirect pointer</li></ul></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$1$, if $N\\le 6$<br/><br/>$2$, if $6&lt;N\\le 6+\\frac{B}{P}$<br/><br/>$3$, if $N&gt;6+\\frac{B}{P}$<br/></span>",
                "<span style=\"display: inline;\">$1$, if $N\\le 6$<br/><br/>$1$, if $6&lt;N\\le 6+\\frac{B}{P}$<br/><br/>$2$, if $N&gt;6+\\frac{B}{P}$<br/></span>",
                "<span style=\"display: inline;\">$1$, if $N\\le 6$<br/><br/>$2$, if $6&lt;N\\le 6+\\frac{B}{P}$<br/><br/>$4$, if $N&gt;6+\\frac{B}{P}$<br/></span>",
                "<span style=\"display: inline;\">$2$, if $N\\le 6$<br/><br/>$3$, if $6&lt;N\\le 6+\\frac{B}{P}$<br/><br/>$4$, if $N&gt;6+\\frac{B}{P}$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"545860\"></a><div itemprop=\"text\"><p data-end=\"83\" data-start=\"0\">For a <strong data-end=\"24\" data-start=\"6\">direct pointer</strong>, the inode already contains the address of the data block.</p><p data-end=\"116\" data-start=\"85\">So only the data block is read : $\\text{1 read}$</p><p data-end=\"171\" data-start=\"137\">For a <strong data-end=\"170\" data-start=\"143\">single-indirect pointer</strong>:</p><p data-end=\"257\" data-start=\"173\">$\\text{inode} \\rightarrow \\text{indirect block} \\rightarrow \\text{data block}$</p><p data-end=\"309\" data-start=\"259\">The inode is already available, so disk reads are:</p><ol><li data-end=\"348\" data-start=\"311\">Indirect block<br/> </li><li data-end=\"348\" data-start=\"311\">Data block</li></ol><p data-end=\"356\" data-start=\"350\">Total: $\\text{2 reads}$</p><p data-end=\"412\" data-start=\"378\">For a <strong data-end=\"411\" data-start=\"384\">double-indirect pointer</strong>:</p><p data-end=\"541\" data-start=\"414\">$\\text{inode} \\rightarrow \\text{double-indirect block} \\rightarrow \\text{indirect block} \\rightarrow \\text{data block}$</p><p data-end=\"581\" data-start=\"543\">Again, the inode is already available.</p><p data-end=\"598\" data-start=\"583\">Disk reads are:</p><ol><li data-end=\"673\" data-start=\"600\">Double-indirect block<br/> </li><li data-end=\"673\" data-start=\"600\">Single-indirect block<br/> </li><li data-end=\"673\" data-start=\"600\">Data block</li></ol><p data-end=\"681\" data-start=\"675\">Total $: \\text{3 reads}$</p><p data-end=\"713\" data-start=\"703\"><br/>$\\therefore$ <strong>Answer : A</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/545859/go-classes-dpp-gate-cs-operating-system-indirect-access-cost\" target=\"_blank\">GATE Overflow #545859</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"28\" data-start=\"0\">Consider a file system with:</p><p data-end=\"311\" data-is-last-node=\"\" data-is-only-node=\"\" data-start=\"228\">What is the <strong data-end=\"277\" data-start=\"240\">maximum possible file size in GiB</strong>, rounded to three decimal places?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">Block size = $\\text{2048 bytes}$<br/></span>",
                "<span style=\"display: inline;\">Disk block pointer size = $\\text{32 bits}$<br/></span>",
                "<span style=\"display: inline;\">$12$ direct pointers<br/></span>",
                "<span style=\"display: inline;\">$1$ single-indirect pointer<br/></span>",
                "<span style=\"display: inline;\">$1$ double-indirect pointer<br/></span>",
                "<span style=\"display: inline;\">$1$ triple-indirect pointer</span>"
            ],
            "answer": "256.501",
            "solution": "<div class=\"solution-content\"><a name=\"545858\"></a><div itemprop=\"text\"><p data-end=\"22\" data-start=\"0\">Each pointer occupies,</p><p data-end=\"52\" data-start=\"24\">$\\text{32 bits = 4 bytes}$</p><p data-end=\"113\" data-start=\"54\">Therefore, the number of pointers that fit in one block is,</p><p data-end=\"140\" data-start=\"115\">$\\text{2048 / 4 = 512}$</p><p data-end=\"186\" data-start=\"142\">So the number of data blocks addressable is,</p><p data-end=\"223\" data-start=\"188\">$\\mathrm{12 + 512 + 512^2 + 512^3}$</p><p data-end=\"260\" data-start=\"225\">The maximum file size is therefore:</p><p data-end=\"312\" data-start=\"262\">$\\mathrm{2048 × (12 + 512 + 512^2 + 512^3)}$ bytes</p><p data-end=\"331\" data-start=\"314\">Breaking it down:</p><ul data-end=\"490\" data-start=\"333\"><li data-end=\"363\" data-section-id=\"12qjrk2\" data-start=\"333\">Direct $: \\text{12 × 2048}$</li><li data-end=\"404\" data-section-id=\"nl0nu2\" data-start=\"364\">Single indirect $:\\text{512 × 2048}$</li><li data-end=\"447\" data-section-id=\"1uul2kp\" data-start=\"405\">Double indirect $: \\mathrm{512^2 × 2048}$</li><li data-end=\"490\" data-section-id=\"kbb6gb\" data-start=\"448\">Triple indirect $: \\mathrm{512^3 × 2048}$</li></ul><p data-end=\"498\" data-start=\"492\">Total $: \\text{275,415,851,008 bytes}$</p><p data-end=\"540\" data-start=\"534\">Since, $\\mathrm{1 GiB = 2^{30} bytes}$</p><p data-end=\"591\" data-start=\"573\">Maximum file size:</p><p data-end=\"626\" data-start=\"593\">$\\mathrm{275,415,851,008 / 2^{30}} =256.500999\\ldots\\text{ GiB} \\approx \\boxed{256.501\\text{ GiB}}$</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/545857/go-classes-dpp-gate-cs-operating-system-maximum-file-size\" target=\"_blank\">GATE Overflow #545857</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"8015\" data-start=\"7955\">A disk file system uses <strong data-end=\"8014\" data-start=\"7979\">linked allocation through a FAT</strong>.</p><p data-end=\"8030\" data-start=\"8017\">Cluster size $:4$ KB</p><p data-end=\"8078\" data-start=\"8040\">The relevant directory information is:</p><p style=\"text-align:center\"><img alt=\"\" height=\"274\" src=\"https://cdn.mathpix.com/snip/images/zkh5otpqd6pXfaTeMijekQWZq3K5X35QLuNVEdjYKeE.original.fullsize.png\" width=\"313\"/></p><p data-end=\"41\" data-start=\"0\"><br/>The cluster chain of $\\texttt{file1}$ is:</p><p data-end=\"80\" data-start=\"43\">$100 \\rightarrow 106 \\rightarrow 108$</p><p data-end=\"89\" data-start=\"82\">Assume:</p><p data-end=\"340\" data-start=\"294\">The system wants to read the $5000$th byte of:</p><p data-end=\"367\" data-start=\"342\">$\\texttt{dir/dir1/file1}$</p><p data-end=\"411\" data-start=\"369\">Which disk clusters must actually be read?</p><p><strong>Given Details:</strong></p><ul><li>the entire FAT is already in main memory</li><li>directory $\\texttt{dir}$ is already in main memory</li><li>directory $\\texttt{dir1}$ is not in memory</li><li>no data cluster of $\\texttt{file1}$ is currently in memory</li></ul></div></span>",
            "image": "https://cdn.mathpix.com/snip/images/zkh5otpqd6pXfaTeMijekQWZq3K5X35QLuNVEdjYKeE.original.fullsize.png",
            "options": [
                "<span style=\"display: inline;\">$48,\\ 100,\\ 106$</span>",
                "<span style=\"display: inline;\">$48,\\ 106$</span>",
                "<span style=\"display: inline;\">$100,\\ 106$</span>",
                "<span style=\"display: inline;\">$48,\\ 100,\\ 106,\\ 108$</span>"
            ],
            "answer": "B",
            "solution": "<div class=\"solution-content\"><a name=\"545692\"></a><div itemprop=\"text\"><p data-end=\"50\" data-start=\"0\">The $\\texttt{dir}$ directory is already in memory.</p><p data-end=\"79\" data-start=\"52\">From it, the system learns:</p><p data-end=\"120\" data-start=\"81\">$\\texttt{dir1}$ starts at cluster $48$.</p><p data-end=\"133\" data-start=\"122\">So cluster $\\boxed{48}$ must be read to obtain the contents of directory $\\texttt{dir1}$.</p><p data-end=\"255\" data-start=\"216\">From that directory, the system learns:</p><p data-end=\"298\" data-start=\"257\">$\\texttt{file1}$ starts at cluster $100$.</p><p data-end=\"323\" data-start=\"300\">Now locate byte $5000$.</p><p data-end=\"346\" data-start=\"325\">One cluster contains:</p><p data-end=\"373\" data-start=\"348\">$4\\text{ KB}=4096$ bytes.</p><p data-end=\"385\" data-start=\"375\">Therefore:</p><ul data-end=\"477\" data-start=\"387\"><li data-end=\"438\" data-section-id=\"1k111m0\" data-start=\"387\">bytes $1$ through $4096$ are in the first cluster<br/> </li><li data-end=\"477\" data-section-id=\"yjiztl\" data-start=\"439\">byte $5000$ is in the second cluster</li></ul><p data-end=\"526\" data-start=\"479\">The first cluster of $\\texttt{file1}$ is $100$.</p><p data-end=\"9298\" data-start=\"9194\">Normally, with ordinary linked allocation, block $100$ would have to be read to discover the next block.</p><p data-end=\"9363\" data-start=\"9300\">But this system uses FAT, and <strong data-end=\"9362\" data-start=\"9330\">the FAT is already in memory</strong>.</p><p data-end=\"9392\" data-start=\"9365\">The system simply looks up:</p><p data-end=\"9408\" data-start=\"9394\">$FAT[100]=106$</p><p data-end=\"9441\" data-start=\"9410\">without performing a disk read.</p><p data-end=\"9479\" data-start=\"9443\">Therefore it directly reads cluster $: \\boxed{106}$</p><p data-end=\"9521\" data-start=\"9496\">which contains byte $5000$.</p><p data-end=\"9571\" data-start=\"9523\">So the only disk clusters actually accessed are: $\\boxed{48,\\ 106}$</p><p data-end=\"9571\" data-start=\"9523\"><br/><strong>Answer : B</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/545691/go-classes-dpp-gate-cs-operating-system-fat-path-access\" target=\"_blank\">GATE Overflow #545691</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"47\" data-start=\"0\">A file currently consists of $100$ data blocks.</p><p data-end=\"56\" data-start=\"49\">Assume:</p><p data-end=\"436\" data-start=\"330\">A new block is inserted in the middle of the file, between the first $50$ blocks and the last $50$ blocks.</p><p data-end=\"495\" data-start=\"438\">What is the number of disk I/O operations required under:</p><p data-end=\"548\" data-start=\"497\">$(\\text{Contiguous},\\text{Linked},\\text{Indexed})$?</p><p><strong>Given Details:</strong></p><ul><li>the file-control block is already in memory</li><li>for indexed allocation, the index block is also already in memory</li><li>the new block's contents are already in main memory</li><li>under contiguous allocation, there is no room to grow at the beginning, but there is room at the end</li></ul></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$(101,52,1)$</span>",
                "<span style=\"display: inline;\">$(100,51,1)$</span>",
                "<span style=\"display: inline;\">$(101,51,2)$</span>",
                "<span style=\"display: inline;\">$(51,52,1)$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"545687\"></a><div itemprop=\"text\"><p data-end=\"6729\" data-section-id=\"dndeya\" data-start=\"6704\"><strong>Contiguous allocation</strong></p><p data-end=\"6792\" data-start=\"6731\">The last $50$ blocks must be shifted one position to make room.</p><p data-end=\"6820\" data-start=\"6794\">Each moved block requires:</p><p data-end=\"6842\" data-start=\"6822\">$1$ read $+1$ write.</p><p data-end=\"6854\" data-start=\"6844\">$\\therefore 50\\times2=100$ disk I/Os.</p><p data-end=\"6920\" data-start=\"6885\">The new block must then be written:</p><p data-end=\"6926\" data-start=\"6922\">$+1$</p><p data-end=\"6933\" data-start=\"6928\">Thus, $\\boxed{101}$</p><p data-end=\"6976\" data-section-id=\"3ecyrb\" data-start=\"6955\"><br/><strong>Linked allocation</strong></p><p data-end=\"7074\" data-start=\"6978\">To insert after block $50$, the system must traverse the linked chain until it reaches that block.</p><p data-end=\"7104\" data-start=\"7076\">Reading the first $50$ blocks:</p><p data-end=\"7117\" data-start=\"7106\">$50$ reads.</p><p data-end=\"7124\" data-start=\"7119\">Then:</p><ul data-end=\"7222\" data-start=\"7126\"><li data-end=\"7195\" data-section-id=\"1giw0gu\" data-start=\"7126\">write the modified predecessor block with its new next pointer: $1$</li><li data-end=\"7222\" data-section-id=\"igvwhe\" data-start=\"7196\">write the new block: $1$</li></ul><p data-end=\"7230\" data-start=\"7224\">Total $:50+1+1=\\boxed{52}$</p><p data-end=\"7284\" data-section-id=\"13lb1nt\" data-start=\"7262\"><br/><strong>Indexed allocation</strong></p><p data-end=\"7323\" data-start=\"7286\">The index block is already in memory.</p><p data-end=\"7415\" data-start=\"7325\">The system updates the relevant index information in memory and writes the new data block.</p><p data-end=\"7427\" data-start=\"7417\">Thus, $\\boxed{1}$</p><p data-end=\"7448\" data-start=\"7442\"> </p><p data-end=\"7470\" data-start=\"7450\"><strong>Answer :</strong> $\\boxed{(101,52,1)}$</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/545686/go-classes-dpp-gate-cs-operating-system-allocation-update-cost\" target=\"_blank\">GATE Overflow #545686</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"71\" data-start=\"0\">Consider the following statements about <strong data-end=\"70\" data-start=\"40\">contiguous file allocation</strong>.</p><p data-end=\"339\" data-start=\"315\">Which option is correct?</p><p><strong>Given Details:</strong></p><ul><li>It requires storing the number of the first block of the file.</li><li>It provides excellent performance for reading files.</li><li>It provides efficient random access to blocks of a file.</li><li>It minimizes disk fragmentation.</li></ul></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">I and II only</span>",
                "<span style=\"display: inline;\">I and IV only</span>",
                "<span style=\"display: inline;\">III and IV only</span>",
                "<span style=\"display: inline;\">I, II and III only</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"545685\"></a><div itemprop=\"text\"><p data-end=\"4503\" data-section-id=\"1n9qbye\" data-start=\"4480\"><strong>Statement I is true</strong></p><p data-end=\"4574\" data-start=\"4505\">For a contiguously allocated file, the file system essentially needs:</p><p data-end=\"4621\" data-start=\"4576\">$\\boxed{\\text{starting block}+\\text{length}}$</p><p data-end=\"4677\" data-start=\"4623\">The location of any file block can then be calculated.</p><p data-end=\"4708\" data-section-id=\"dha7tb\" data-start=\"4684\"><br/><strong>Statement II is true</strong></p><p data-end=\"4751\" data-start=\"4710\">All blocks are stored next to each other.</p><p data-end=\"4863\" data-start=\"4753\">This is particularly efficient for sequential reading because little or no block-to-block seeking is required.</p><p data-end=\"4895\" data-section-id=\"1jx7vdy\" data-start=\"4870\"><br/><strong>Statement III is true</strong></p><p data-end=\"4934\" data-start=\"4897\">Suppose the file begins at block $b$.</p><p data-end=\"4979\" data-start=\"4936\">Logical block $i$ can be found directly as: $b+i$</p><p data-end=\"5022\" data-start=\"4988\">No pointer chain must be followed.</p><p data-end=\"5093\" data-start=\"5024\">So contiguous allocation provides efficient <strong data-end=\"5092\" data-start=\"5068\">direct/random access</strong>.</p><p data-end=\"5125\" data-section-id=\"26e7yz\" data-start=\"5100\"><br/><strong>Statement IV is false</strong></p><p data-end=\"5201\" data-start=\"5127\">Contiguous allocation requires sufficiently large contiguous free regions.</p><p data-end=\"5273\" data-start=\"5203\">Over time the free disk space can become divided into separated holes.</p><p data-end=\"5347\" data-start=\"5275\">Therefore contiguous allocation suffers from <strong data-end=\"5346\" data-start=\"5320\">external fragmentation</strong>.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/545683/go-classes-dpp-gate-cs-operating-system-contiguous-allocation-properties\" target=\"_blank\">GATE Overflow #545683</a></small></div>"
        }
    ]
});

registerTest({
    "name": "DPP 34 - Operating System (File Systems & Disk Scheduling - Part 2)",
    "testLabel": "DPP 34",
    "testType": "DPP",
    "bracket": "File Systems & Disk Scheduling - Part 2",
    "subject": "os",
    "series": "cse-dpp-2027",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 13,
    "topicsCovered": "File Systems & Disk Scheduling (Practice Set 2)",
    "questions": [
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"2927\" data-start=\"2850\">A FAT-like file system uses a $\\textbf{24}$<strong data-end=\"2900\" data-start=\"2880\">-bit FAT entry</strong> for every allocation unit.</p><p data-end=\"2950\" data-start=\"2929\">The disk capacity is: $32$ GB</p><p data-end=\"2968\" data-start=\"2961\">Assume: $1\\text{ GB}=2^{30}\\text{ bytes}$</p><p data-end=\"3107\" data-start=\"3005\">What is the <strong data-end=\"3058\" data-start=\"3017\">minimum allocation-unit size in bytes</strong> that permits the FAT to address the entire disk?</p></div></span>",
            "image": "",
            "options": [],
            "answer": "2048",
            "solution": "<div class=\"solution-content\"><a name=\"545682\"></a><div itemprop=\"text\"><p data-end=\"3192\" data-start=\"3151\">A $24$-bit FAT entry can represent at most: $2^{24}$ different allocation units.</p><p data-end=\"3247\" data-start=\"3233\">Disk capacity:</p><p data-end=\"3263\" data-start=\"3249\">$32\\text{ GB}=2^5\\times2^{30}=2^{35}$ bytes.</p><p data-end=\"3352\" data-start=\"3303\">If each allocation unit contains $B$ bytes, then:</p><p data-end=\"3380\" data-start=\"3354\">$2^{24}\\times B\\geq2^{35}$</p><p data-end=\"3392\" data-start=\"3382\">$\\Rightarrow B\\geq2^{35-24}$</p><p data-end=\"3425\" data-start=\"3412\">$\\Rightarrow B\\geq2^{11}$</p><p data-end=\"3445\" data-start=\"3427\">$\\Rightarrow B\\geq2048$ bytes.</p><p data-end=\"3489\" data-start=\"3447\">Hence the minimum allocation-unit size is:</p><p data-end=\"3518\" data-start=\"3491\">$\\boxed{2048\\text{ bytes}}$</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/545681/go-classes-dpp-gate-cs-operating-system-fat-allocation-granularity\" target=\"_blank\">GATE Overflow #545681</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"51\" data-start=\"0\">A file system supports three allocation strategies:</p><p data-end=\"213\" data-start=\"132\">The information about a file has already been obtained from its parent directory.</p><p data-end=\"386\" data-start=\"215\">For contiguous and linked allocation, the directory information gives the address of the first data block. For indexed allocation, it gives the address of the index block.</p><p data-end=\"461\" data-start=\"388\">Assume that no required file block or index block is currently in memory.</p><p data-end=\"563\" data-start=\"463\">To read the $10$th data block of the file into memory, how many disk-block reads are required under:</p><p data-end=\"616\" data-start=\"565\">$(\\text{Contiguous},\\text{Linked},\\text{Indexed})$?</p><p><strong>Given Details:</strong></p><ul><li>Contiguous allocation</li><li>Linked allocation</li><li>Single-level indexed allocation</li></ul></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$(1,10,2)$</span>",
                "<span style=\"display: inline;\">$(1,9,2)$</span>",
                "<span style=\"display: inline;\">$(1,10,1)$</span>",
                "<span style=\"display: inline;\">$(10,10,2)$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"545680\"></a><div itemprop=\"text\"><p data-end=\"1765\" data-section-id=\"dndeya\" data-start=\"1740\"><strong>Contiguous allocation</strong></p><p data-end=\"1798\" data-start=\"1767\">Suppose the first block is $b$.</p><p data-end=\"1825\" data-start=\"1800\">The $10$th block is simply : $b+9$</p><p data-end=\"1873\" data-start=\"1834\">Its address can be calculated directly.</p><p data-end=\"1917\" data-start=\"1875\">Only the required data block must be read.</p><p data-end=\"1929\" data-start=\"1919\">Therefore: $\\boxed{1}$</p><p data-end=\"1970\" data-section-id=\"3ecyrb\" data-start=\"1949\"><br/><strong>Linked allocation</strong></p><p data-end=\"2054\" data-start=\"1972\">The location of a block is obtained from the pointer stored in the previous block.</p><p data-end=\"2074\" data-start=\"2056\">To reach block $10:$</p><p data-end=\"2131\" data-start=\"2076\">$B_1\\rightarrow B_2\\rightarrow\\cdots\\rightarrow B_{10}$</p><p data-end=\"2224\" data-start=\"2133\">Blocks $1$ through $9$ must be read to obtain their next pointers, followed by block $10$ itself.</p><p data-end=\"2236\" data-start=\"2226\">Therefore: $\\boxed{10}$</p><p data-end=\"2279\" data-section-id=\"13lb1nt\" data-start=\"2257\"><br/><strong>Indexed allocation</strong></p><p data-end=\"2312\" data-start=\"2281\">First read the <strong data-end=\"2311\" data-start=\"2296\">index block</strong>: $1$ disk read.</p><p data-end=\"2389\" data-start=\"2330\">The required entry gives the disk address of data block $10$.</p><p data-end=\"2417\" data-start=\"2391\">Then read that data block: $1$ additional read.</p><p data-end=\"2451\" data-start=\"2441\">Therefore: $\\boxed{2}$</p><p data-end=\"2472\" data-start=\"2466\"> </p><p data-end=\"2492\" data-start=\"2474\"><strong>Answer : </strong>$\\boxed{(1,10,2)}$</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/545678/go-classes-dpp-gate-cs-operating-system-allocation-access-cost\" target=\"_blank\">GATE Overflow #545678</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider the following part of a tree-structured file system:</p><p style=\"text-align:center\"><img alt=\"\" height=\"302\" src=\"https://cdn.mathpix.com/snip/images/oOx_IyPJWQTdzg2y6PC6bo3ga7aKm_XzeS1KTeRf1n8.original.fullsize.png\" width=\"324\"/></p><p data-end=\"234\" data-start=\"195\">$\\texttt{D3}$ is the current directory.</p><p data-end=\"299\" data-start=\"236\">Which relative pathname correctly identifies file $\\texttt{a}$?</p></div></span>",
            "image": "https://cdn.mathpix.com/snip/images/oOx_IyPJWQTdzg2y6PC6bo3ga7aKm_XzeS1KTeRf1n8.original.fullsize.png",
            "options": [
                "<span style=\"display: inline;\">$\\texttt{../../D2/D4/a}$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{../D2/D4/a}$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{D1/D2/D4/a}$<br/></span>",
                "<span style=\"display: inline;\">$\\texttt{D2/D4/a}$</span>"
            ],
            "answer": "B",
            "solution": "<div class=\"solution-content\"><a name=\"545653\"></a><div itemprop=\"text\"><p data-end=\"26\" data-start=\"0\">We begin inside directory $\\texttt{D3}$.</p><p data-end=\"70\" data-start=\"43\">The parent of $\\texttt{D3}$ is $\\texttt{D1}$.</p><p data-end=\"82\" data-start=\"72\">Therefore:</p><p data-end=\"97\" data-start=\"84\">$\\texttt{..}$</p><p data-end=\"113\" data-start=\"99\">takes us from:</p><p data-end=\"133\" data-start=\"115\">$\\texttt{D3} \\rightarrow \\texttt{D1}$</p><p data-end=\"161\" data-start=\"135\">From $\\texttt{D1}$, we then follow:</p><p data-end=\"194\" data-start=\"163\">$\\texttt{D2}\\rightarrow \\texttt{D4}\\rightarrow \\texttt{a}$</p><p data-end=\"233\" data-start=\"196\">So the complete relative pathname is:</p><p data-end=\"256\" data-start=\"235\">$\\texttt{../D2/D4/a}$</p><p data-end=\"264\" data-start=\"258\">Hence:</p><p data-end=\"295\" data-is-last-node=\"\" data-is-only-node=\"\" data-start=\"266\">$\\boxed{\\texttt{../D2/D4/a}}$</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/545652/go-classes-dpp-gate-cs-operating-system-relative-path-resolution\" target=\"_blank\">GATE Overflow #545652</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"7480\" data-start=\"7422\">Consider a file system with the following characteristics:</p><p data-end=\"7857\" data-start=\"7797\">A directory is stored like an ordinary file and consists of : $\\text{filename}+\\text{inode number}$</p><p data-end=\"7986\" data-start=\"7898\">What is the <strong data-end=\"7949\" data-start=\"7910\">maximum number of directory entries</strong> that a single directory can contain?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">Each inode contains $\\mathbf{8}$<strong data-end=\"7536\" data-start=\"7504\"> direct data-block pointers</strong><br/></span>",
                "<span style=\"display: inline;\">One <strong data-end=\"7570\" data-start=\"7543\">single-indirect pointer</strong><br/></span>",
                "<span style=\"display: inline;\">One <strong data-end=\"7604\" data-start=\"7577\">double-indirect pointer</strong><br/></span>",
                "<span style=\"display: inline;\">Disk-block size $=4$ KB<br/></span>",
                "<span style=\"display: inline;\">A disk-block address requires $4$ bytes<br/></span>",
                "<span style=\"display: inline;\">There are $2^{32}$ inodes in the file system<br/></span>",
                "<span style=\"display: inline;\">The filename portion of every directory entry occupies exactly $28$ bytes</span>"
            ],
            "answer": "134349824",
            "solution": "<div class=\"solution-content\"><a name=\"545650\"></a><div itemprop=\"text\"><p data-end=\"61\" data-start=\"0\">First calculate how many addresses fit in one indirect block.</p><p data-end=\"74\" data-start=\"63\">Block size $: 4\\text{ KB}=4096=2^{12}$ bytes</p><p data-end=\"122\" data-start=\"109\">Pointer size $: 4=2^2$ bytes</p><p data-end=\"149\" data-start=\"139\"><br/>$\\therefore \\frac{2^{12}}{2^2}=2^{10}$ pointers fit in one indirect block.<br/> </p><p data-end=\"260\" data-section-id=\"1puxvx3\" data-start=\"217\"><strong>Step $1$: Maximum number of data blocks</strong></p><p data-end=\"284\" data-start=\"262\">The inode can address:</p><p data-end=\"300\" data-start=\"286\">Direct blocks $: 8=2^3$</p><p data-end=\"334\" data-start=\"311\">Single-indirect blocks $: 2^{10}$</p><p data-end=\"369\" data-start=\"346\">Double-indirect blocks $:2^{10}\\times2^{10}=2^{20}$</p><p data-end=\"410\" data-start=\"400\"><br/>$\\therefore N_{\\text{blocks}}=2^3+2^{10}+2^{20}$</p><p data-end=\"487\" data-section-id=\"1hb20o\" data-start=\"451\"><br/><strong>Step $2$: Maximum directory size</strong></p><p data-end=\"529\" data-start=\"489\">Each data block contains $2^{12}$ bytes.</p><p data-end=\"541\" data-start=\"531\">$\\therefore \\text{MaxSize}=2^{12}(2^3+2^{10}+2^{20})$</p><p data-end=\"616\" data-start=\"587\">$=2^{15}+2^{22}+2^{32}$ bytes</p><p data-end=\"659\" data-section-id=\"1gk5rm0\" data-start=\"618\"><br/><strong>Step $3$: Size of one directory entry</strong></p><p data-end=\"703\" data-start=\"661\">There are $2^{32}$ possible inode numbers.</p><p data-end=\"740\" data-start=\"705\">Therefore an inode number requires:</p><p data-end=\"762\" data-start=\"742\">$32$ bits $=4$ bytes</p><p data-end=\"794\" data-start=\"764\">The filename portion requires $28$ bytes</p><p data-end=\"814\" data-start=\"808\">Hence,</p><p data-end=\"848\" data-start=\"816\">$\\text{DirectoryEntrySize}=28+4$</p><p data-end=\"865\" data-start=\"850\">$=32=2^5$ bytes</p><p data-end=\"908\" data-section-id=\"19gzkjv\" data-start=\"867\"><br/><strong>Step $4$: Number of directory entries</strong></p><p data-end=\"944\" data-start=\"910\">$=\\frac{2^{15}+2^{22}+2^{32}}{2^5}$</p><p data-end=\"969\" data-start=\"946\">$=2^{10}+2^{17}+2^{27}$</p><p data-end=\"995\" data-start=\"971\">$=1024+131072+134217728$</p><p data-end=\"1017\" data-is-last-node=\"\" data-is-only-node=\"\" data-start=\"997\">$=\\boxed{134349824}$</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/545649/go-classes-dpp-gate-cs-operating-system-directory-entry-capacity\" target=\"_blank\">GATE Overflow #545649</a></small></div>"
        },
        {
            "marks": 2,
            "neg": 0,
            "type": "MSQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"64\" data-start=\"0\">Consider the reference-count field stored in a Unix-style inode.</p><p data-end=\"95\" data-start=\"66\">Which statements are correct?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">It records the number of directory entries, or hard links, currently referring to that inode.<br/></span>",
                "<span style=\"display: inline;\">Creating another directory entry that refers to the same inode increments the inode's reference count.<br/></span>",
                "<span style=\"display: inline;\">Deleting any one pathname of a multiply-linked file necessarily causes its inode and data blocks to be immediately deallocated.<br/></span>",
                "<span style=\"display: inline;\">When the reference count reaches zero, no directory entry names that inode, so the inode and associated blocks become eligible for deallocation.</span>"
            ],
            "answer": [
                "A"
            ],
            "solution": "<div class=\"solution-content\"><a name=\"545648\"></a><div itemprop=\"text\"><p data-end=\"42\" data-start=\"0\">A directory contains mappings of the form:</p><p data-end=\"95\" data-start=\"44\">$\\boxed{\\text{name}\\rightarrow\\text{inode number}}$</p><p data-end=\"159\" data-start=\"97\">More than one directory entry may refer to the <strong data-end=\"158\" data-start=\"144\">same inode</strong>.</p><p data-end=\"179\" data-section-id=\"61fhyr\" data-start=\"161\"><strong>A is correct</strong></p><p data-end=\"279\" data-start=\"181\">The inode reference count tracks how many such names, or hard links, currently refer to the inode.</p><p data-end=\"299\" data-section-id=\"1bl848g\" data-start=\"281\"><strong>B is correct</strong></p><p data-end=\"309\" data-start=\"301\">Suppose:</p><p data-end=\"352\" data-start=\"311\">$\\texttt{file1}$ $\\rightarrow$ inode $25$</p><p data-end=\"393\" data-start=\"354\">Now another directory entry is created:</p><p data-end=\"436\" data-start=\"395\">$\\texttt{file2}$ $\\rightarrow$ inode $25$</p><p data-end=\"538\" data-start=\"438\">Both names identify the same underlying file. Therefore, the inode's link/reference count increases.</p><p data-end=\"556\" data-section-id=\"orxdde\" data-start=\"540\"><strong>C is false</strong></p><p data-end=\"631\" data-start=\"558\">Suppose the reference count is initially $2$ and one pathname is removed.</p><p data-end=\"669\" data-start=\"633\">The new reference count becomes $1$.</p><p data-end=\"785\" data-start=\"671\">The file is still reachable through the remaining directory entry, so its inode and data blocks must not be freed.</p><p data-end=\"805\" data-section-id=\"jm2ho6\" data-start=\"787\"><strong>D is correct</strong></p><p data-end=\"968\" data-start=\"807\">When the link count reaches $0$, there is no longer a directory name pointing to that inode. From the directory-link perspective, the file can then be reclaimed.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/545647/go-classes-dpp-gate-cs-operating-system-inode-reference-count\" target=\"_blank\">GATE Overflow #545647</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"46\" data-start=\"0\">Consider a Unix file system containing a file:</p><p data-end=\"65\" data-start=\"48\">$\\texttt{/a/b/c}$</p><p data-end=\"74\" data-start=\"67\">Assume:</p><p data-end=\"314\" data-start=\"220\">How many <strong data-end=\"254\" data-start=\"229\">disk data-block reads</strong> are required to find the inode number of file $\\texttt{c}$?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">all inodes are already cached in main memory</span>",
                "<span style=\"display: inline;\">every directory occupies exactly one data block</span>",
                "<span style=\"display: inline;\">no directory data block is initially cached</span>"
            ],
            "answer": "0",
            "solution": "<div class=\"solution-content\">Question Discussed on GATE Overflow. Refer to: <a href=\"https://gateoverflow.in/545646/go-classes-dpp-gate-cs-operating-system-directory-lookup-cost\" target=\"_blank\">GO Classes DPP | GATE CS | Operating System | Directory Lookup Cost</a></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"991\" data-start=\"827\">A file system uses an <strong data-end=\"879\" data-start=\"849\">inode-based implementation</strong>. When a user creates a new file $F$ inside a directory, which of the following will the file system <strong data-end=\"987\" data-start=\"980\">NOT</strong> do?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">Initialize an inode for file $F$<br/></span>",
                "<span style=\"display: inline;\">Write the inode number of $F$ into the directory file<br/></span>",
                "<span style=\"display: inline;\">Write the access-permission information of $F$ into the directory file<br/></span>",
                "<span style=\"display: inline;\">Add a directory entry corresponding to $F$</span>"
            ],
            "answer": "C",
            "solution": "<div class=\"solution-content\"><a name=\"545397\"></a><div itemprop=\"text\"><p data-end=\"1382\" data-start=\"1272\">In an inode-based file system, responsibilities are divided between the <strong data-end=\"1363\" data-start=\"1344\">directory entry</strong> and the <strong data-end=\"1381\" data-start=\"1372\">inode</strong>.</p><p data-end=\"1420\" data-start=\"1384\">The directory essentially maintains:</p><p data-end=\"1480\" data-start=\"1422\">$\\boxed{\\text{file name} \\rightarrow \\text{inode number}}$</p><p data-end=\"1516\" data-start=\"1482\">The inode stores metadata such as:</p><ul data-end=\"1605\" data-start=\"1518\"><li data-end=\"1529\" data-section-id=\"fhw5bf\" data-start=\"1518\">file size</li><li data-end=\"1537\" data-section-id=\"169iqrt\" data-start=\"1530\">owner</li><li data-end=\"1558\" data-section-id=\"1ioqe38\" data-start=\"1538\">access permissions</li><li data-end=\"1571\" data-section-id=\"1r9hggl\" data-start=\"1559\">timestamps</li><li data-end=\"1605\" data-section-id=\"vuim82\" data-start=\"1572\">addresses/pointers to file data</li></ul><p data-end=\"1786\" data-start=\"1607\">This same separation is shown in lec-36, where the inode is described as storing file metadata while a directory maps names to inode numbers.</p><p data-end=\"1808\" data-start=\"1788\">When $F$ is created:</p><ul data-end=\"1954\" data-start=\"1810\"><li data-end=\"1854\" data-section-id=\"1ukck6g\" data-start=\"1810\">an inode must be allocated and initialized</li><li data-end=\"1894\" data-section-id=\"1rl0tao\" data-start=\"1855\">a new directory entry must be created</li><li data-end=\"1954\" data-section-id=\"l59npr\" data-start=\"1895\">that directory entry must contain the inode number of $F$</li></ul><p data-end=\"2039\" data-start=\"1956\">But the <strong data-end=\"2010\" data-start=\"1964\">access permissions are stored in the inode</strong>, not in the directory entry.</p><p data-end=\"2051\" data-start=\"2041\"><br/>$\\therefore$<strong> Answer : C</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/545395/go-classes-dpp-gate-cs-operating-system-inode-directory-mapping\" target=\"_blank\">GATE Overflow #545395</a></small></div>"
        },
        {
            "marks": 2,
            "neg": 0,
            "type": "MSQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"6586\" data-start=\"6572\">A system uses:</p><p data-end=\"6666\" data-start=\"6654\">$$ \\textbf{Initial TLB:} $$$$<br/>\\begin{array}{|c|c|c|c|}<br/>\\hline<br/>\\text{Valid} &amp; \\text{VPN} &amp; \\text{Physical Page} &amp; \\text{LRU} \\\\<br/>\\hline<br/>1 &amp; 11 &amp; 12 &amp; 2 \\\\<br/>1 &amp; 7 &amp; 4 &amp; 3 \\\\<br/>1 &amp; 3 &amp; 6 &amp; 4 \\\\<br/>0 &amp; 4 &amp; 9 &amp; 1 \\\\<br/>\\hline<br/>\\end{array}<br/>$$</p><p data-end=\"6666\" data-start=\"6654\">$$ \\textbf{Relevant initial page-table entries:} $$ $$<br/>\\begin{array}{|c|c|c|}<br/>\\hline<br/>\\text{VPN} &amp; \\text{Valid} &amp; \\text{Location} \\\\<br/>\\hline<br/>0 &amp; 1 &amp; \\text{Physical page }5 \\\\<br/>1 &amp; 0 &amp; \\text{Disk} \\\\<br/>2 &amp; 0 &amp; \\text{Disk} \\\\<br/>3 &amp; 1 &amp; \\text{Physical page }6 \\\\<br/>7 &amp; 1 &amp; \\text{Physical page }4 \\\\<br/>11 &amp; 1 &amp; \\text{Physical page }12 \\\\<br/>\\hline<br/>\\end{array}<br/>$$</p><p data-end=\"7125\" data-start=\"7034\">When a page fault occurs, new physical pages are allocated beginning with physical page $13$.</p><p data-end=\"7181\" data-start=\"7127\">The following virtual addresses are accessed in order:</p><p data-end=\"7257\" data-start=\"7183\">$\\texttt{0x0FFF}$<br data-end=\"7194\" data-start=\"7191\"/>$\\texttt{0x7A28}$<br data-end=\"7205\" data-start=\"7202\"/>$\\texttt{0x3DAD}$<br data-end=\"7216\" data-start=\"7213\"/>$\\texttt{0x3A98}$<br data-end=\"7227\" data-start=\"7224\"/>$\\texttt{0x1C19}$<br data-end=\"7238\" data-start=\"7235\"/>$\\texttt{0x1000}$<br data-end=\"7249\" data-start=\"7246\"/>$\\texttt{0x22D0}$</p><p data-end=\"7288\" data-start=\"7259\">Which statements are correct?</p><p><strong>Given Details:</strong></p><ul><li>$4$ KB pages</li><li>A $4$-entry fully associative TLB</li><li>LRU replacement</li></ul></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">The access to $\\texttt{0x0FFF}$ produces a TLB miss but not a page fault.</span>",
                "<span style=\"display: inline;\">The accesses to $\\texttt{0x7A28}, \\texttt{0x3DAD}, \\texttt{0x3A98},$ and $\\texttt{0x1000}$ are all TLB hits.</span>",
                "<span style=\"display: inline;\">Accessing $\\texttt{0x1C19}$ causes a page fault, after which VPN $1$ is mapped to physical page $13$.</span>",
                "<span style=\"display: inline;\">After all seven accesses have completed, VPN $0$ is still present in the TLB.</span>"
            ],
            "answer": [
                "A",
                "B",
                "C"
            ],
            "solution": "<div class=\"solution-content\"><a name=\"544084\"></a><div itemprop=\"text\"><p data-end=\"52\" data-start=\"16\">Page size = $4$ KB $= 2^{12}$ bytes.</p><p data-end=\"162\" data-start=\"54\">So the lower $\\textbf{12}$<strong data-end=\"78\" data-start=\"67\"> bits</strong> of every virtual address form the page offset, and the remaining bits give the VPN.</p><p data-end=\"205\" data-start=\"164\">The reference sequence therefore becomes:</p><p data-end=\"205\" data-start=\"164\">$$<br/>\\begin{array}{|c|c|c|}<br/>\\hline<br/>\\text{Virtual Address} &amp; \\text{VPN} &amp; \\text{Offset} \\\\ \\hline<br/>\\texttt{0x0FFF} &amp; 0 &amp; \\texttt{0xFFF} \\\\<br/>\\texttt{0x7A28} &amp; 7 &amp; \\texttt{0xA28} \\\\<br/>\\texttt{0x3DAD} &amp; 3 &amp; \\texttt{0xDAD} \\\\<br/>\\texttt{0x3A98} &amp; 3 &amp; \\texttt{0xA98} \\\\<br/>\\texttt{0x1C19} &amp; 1 &amp; \\texttt{0xC19} \\\\<br/>\\texttt{0x1000} &amp; 1 &amp; \\texttt{0x000} \\\\<br/>\\texttt{0x22D0} &amp; 2 &amp; \\texttt{0x2D0} \\\\<br/>\\hline<br/>\\end{array} $$</p><p data-end=\"205\" data-start=\"164\">Initially, the valid TLB entries are VPNs $11,7,3$. </p><p data-end=\"205\" data-start=\"164\">VPN $3$ is the most recently used among them, while VPN $11$ is the least recently used.</p><p data-end=\"205\" data-start=\"164\">$$<br/>\\begin{array}{|c|c|c|l|c|} <br/>\\hline<br/>\\text{Access} &amp; \\text{VPN} &amp; \\text{Result} &amp; \\text{Page Table / Action} &amp; \\text{TLB after access} \\\\ \\hline<br/>\\texttt{0x0FFF} &amp; 0 &amp; \\text{Miss} &amp; \\text{Valid, frame 5. Insert VPN 0} &amp; 11,7,3,0 \\\\<br/>\\texttt{0x7A28} &amp; 7 &amp; \\text{Hit} &amp; \\text{VPN 7 becomes MRU} &amp; 11,3,0,7 \\\\<br/>\\texttt{0x3DAD} &amp; 3 &amp; \\text{Hit} &amp; \\text{VPN 3 becomes MRU} &amp; 11,0,7,3 \\\\<br/>\\texttt{0x3A98} &amp; 3 &amp; \\text{Hit} &amp; \\text{VPN 3 remains MRU} &amp; 11,0,7,3 \\\\<br/>\\texttt{0x1C19} &amp; 1 &amp; \\text{Page Fault} &amp; \\text{Allocate frame 13, evict VPN 11} &amp; 0,7,3,1 \\\\<br/>\\texttt{0x1000} &amp; 1 &amp; \\text{Hit} &amp; \\text{VPN 1 remains MRU} &amp; 0,7,3,1 \\\\<br/>\\texttt{0x22D0} &amp; 2 &amp; \\text{Page Fault} &amp; \\text{Allocate frame 14, evict VPN 0} &amp; 7,3,1,2 \\\\<br/>\\hline<br/>\\end{array}<br/>$$</p><p data-end=\"205\" data-start=\"164\">Hence the access-result sequence is:</p><p data-end=\"1384\" data-start=\"1355\">$M,\\ H,\\ H,\\ H,\\ PF,\\ H,\\ PF$<br/> </p><ol start=\"1\" style=\"list-style-type: upper-alpha;\"><li data-end=\"1605\" data-start=\"1416\"><strong data-end=\"1428\" data-start=\"1416\">True. </strong><br/>For $\\texttt{0x0FFF}$, VPN $=0$. It is absent from the TLB, so there is a TLB miss. But page-table entry $0$ is valid and points to physical page $5$. Therefore, <strong data-end=\"1597\" data-start=\"1580\">no page fault</strong> occurs.<br/> </li><li data-end=\"1658\" data-start=\"1607\"><strong data-end=\"1619\" data-start=\"1607\">True. </strong><br/>VPN sequence for these addresses is:<br/>$7,3,3,1$<br/>VPN $7$ and VPN $3$ are already present in the TLB. After the page fault on $\\texttt{0x1C19}$, VPN $1$ is inserted into the TLB, so the next access $\\texttt{0x1000}$ to VPN $1$ is also a hit.<br/>Therefore all four listed accesses are TLB hits.<br/> </li><li data-end=\"1916\" data-start=\"1888\"><strong data-end=\"1900\" data-start=\"1888\">True. </strong><br/>For $\\texttt{0x1C19}:$<br/>VPN $=1$<br/>The TLB does not contain VPN 1, and page-table entry $1$ is invalid. Hence a page fault occurs.<br/>New physical pages are allocated starting from page $13$, so:<br/>$\\text{VPN }1 \\rightarrow \\text{Physical Page }13$<br/>After VPN $1$ is inserted, the TLB contains:<br/> </li><li data-end=\"2194\" data-start=\"2136\"><strong data-end=\"2149\" data-start=\"2136\">False. </strong><br/>$0,7,3,1$<br/>Before the final access, VPN $0$ is the least recently used translation.<br/>The last address $\\texttt{0x22D0}$ belongs to VPN $2$. VPN $2$ faults and is loaded into physical page $14$. <br/>To insert its translation, LRU replacement removes <strong data-end=\"2433\" data-start=\"2424\">VPN </strong>$\\textbf{0}$.<br/>Final TLB contents: $\\boxed{7,3,1,2}$<br/>Therefore VPN $0$ is <strong data-end=\"2502\" data-start=\"2495\">not</strong> present at the end.</li></ol><p data-end=\"2540\" data-section-id=\"1o9bera\" data-start=\"2524\"><br/><strong>Answer : A, B, C</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/544070/go-classes-dpp-gate-cs-operating-system-virtualization\" target=\"_blank\">GATE Overflow #544070</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"3589\" data-start=\"3492\">A machine uses a <strong data-end=\"3533\" data-start=\"3509\">two-level page table</strong>. The page-directory base address is held in a register.</p><p data-end=\"3598\" data-start=\"3591\">Assume:</p><p data-end=\"4059\" data-start=\"4002\">What is the effective memory access time, in nanoseconds?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">One physical-memory access takes $100$ ns<br/></span>",
                "<span style=\"display: inline;\">Page directories and page tables are always resident in memory<br/></span>",
                "<span style=\"display: inline;\">$0.001\\%$ of user-memory accesses cause a page fault<br/></span>",
                "<span style=\"display: inline;\">Servicing a page fault takes $10$ ms<br/></span>",
                "<span style=\"display: inline;\">Initially there is no cache<br/></span>",
                "<span style=\"display: inline;\">A TLB is added such that $75\\%$ of translations are found in the TLB<br/></span>",
                "<span style=\"display: inline;\">TLB lookup time may be ignored<br/></span>",
                "<span style=\"display: inline;\">A translation found in the TLB corresponds to a resident page<br/></span>"
            ],
            "answer": "250",
            "solution": "<div class=\"solution-content\"><a name=\"544044\"></a><div itemprop=\"text\"><p data-end=\"4121\" data-start=\"4101\">TLB hit probability: $0.75$</p><p data-end=\"4136\" data-start=\"4131\">Cost: $100$ ns</p><p data-end=\"4192\" data-start=\"4148\">For a non-TLB-hit access without page fault:</p><p data-end=\"4213\" data-start=\"4194\">$3\\times100=300$ ns</p><p data-end=\"4238\" data-start=\"4215\">Page-fault probability: $0.001\\%=10^{-5}$<br/> </p><p data-end=\"4268\" data-start=\"4259\">$\\therefore$ $EAT=0.75(100)+0.24999(300)+10^{-5}(10,000,000+300)$</p><p data-end=\"4344\" data-start=\"4324\">$=75+74.997+100.003$</p><p data-end=\"4370\" data-start=\"4346\">$=\\boxed{250\\text{ ns}}$</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/544043/go-classes-dpp-gate-cs-operating-system-effective-access-time\" target=\"_blank\">GATE Overflow #544043</a></small></div>"
        },
        {
            "marks": 2,
            "neg": 0,
            "type": "MSQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"2145\" data-start=\"2131\">A machine has:</p><p data-end=\"2367\" data-start=\"2338\">Which statements are correct?</p><p><strong>Given Details:</strong></p><ul><li>$64$-bit virtual addresses</li><li>$8$ KB pages</li><li>$4$ GB physical memory</li><li>$512$ TLB entries</li><li>An inverted page table with one entry per physical frame</li><li>Each inverted page-table entry occupies $8$ bytes</li></ul></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">The virtual page number requires $51$ bits.</span>",
                "<span style=\"display: inline;\">If all $512$ TLB entries contain distinct valid translations, the TLB reach is $4$ MB.</span>",
                "<span style=\"display: inline;\">The TLB can simultaneously cover $\\frac{1}{512}$ of physical memory.</span>",
                "<span style=\"display: inline;\">The inverted page table occupies $4$ MB.</span>"
            ],
            "answer": [
                "A"
            ],
            "solution": "<div class=\"solution-content\"><a name=\"544042\"></a><div itemprop=\"text\"><p data-end=\"2712\" data-start=\"2685\">$8\\text{ KB}=2^{13}$ bytes</p><p data-end=\"2733\" data-start=\"2714\">$\\therefore$ VPN bits: $64-13=51$</p><p data-end=\"2767\" data-start=\"2747\">So, <strong data-end=\"2766\" data-start=\"2750\">A is correct</strong>.</p><p data-end=\"2779\" data-start=\"2769\"><br/>TLB reach:</p><p data-end=\"2803\" data-start=\"2781\">$512\\times8\\text{ KB}$</p><p data-end=\"2836\" data-start=\"2805\">$=2^9\\times2^{13}=2^{22}$ bytes</p><p data-end=\"2852\" data-start=\"2838\">$=4\\text{ MB}$</p><p data-end=\"2874\" data-start=\"2854\">So, <strong data-end=\"2873\" data-start=\"2857\">B is correct</strong>.<br/> </p><p data-end=\"2900\" data-start=\"2876\">Physical memory is $4\\text{ GB}$:</p><p data-end=\"2974\" data-start=\"2902\">$\\dfrac{4\\text{ MB}}{4\\text{ GB}} =\\dfrac{2^{22}}{2^{32}} =\\dfrac{1}{1024}$<br/> </p><p data-end=\"2994\" data-start=\"2976\">So <strong data-end=\"2993\" data-start=\"2979\">C is incorrect</strong>.<br/> </p><p data-end=\"3022\" data-start=\"2996\">Number of physical frames:</p><p data-end=\"3054\" data-start=\"3024\">$\\dfrac{2^{32}}{2^{13}}=2^{19}$</p><p data-end=\"3081\" data-start=\"3056\"><br/>Inverted page-table size:</p><p data-end=\"3111\" data-start=\"3083\">$2^{19}\\times8=2^{22}$ bytes</p><p data-end=\"3127\" data-start=\"3113\">$=4\\text{ MB}$</p><p data-end=\"3231\" data-start=\"3129\">Hence <strong data-end=\"3151\" data-start=\"3135\">D is correct</strong>.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/544041/go-classes-dpp-gate-cs-operating-system-tlb-%26-inverted-page-table\" target=\"_blank\">GATE Overflow #544041</a></small></div>"
        }
    ]
});

registerTest({
    "name": "DPP 35 - Operating System (File Systems & Disk Scheduling - Part 3)",
    "testLabel": "DPP 35",
    "testType": "DPP",
    "bracket": "File Systems & Disk Scheduling - Part 3",
    "subject": "os",
    "series": "cse-dpp-2027",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 11,
    "topicsCovered": "File Systems & Disk Scheduling (Practice Set 3)",
    "questions": [
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"8701\" data-start=\"8633\">A paged virtual-memory system has the following measured parameters:</p><p>\\[<br/>\\begin{array}{|l|l|}<br/>\\hline<br/>\\textbf{Measurement} &amp; \\textbf{Value} \\\\<br/>\\hline<br/>P_t = \\text{probability of a TLB miss} <br/>&amp; 0.1 \\\\<br/>\\hline</p><p>P_p = \\text{probability of a page fault when a TLB miss occurs} <br/>&amp; 0.0002 \\\\<br/>\\hline</p><p>T_t = \\text{time to access TLB} <br/>&amp; 0 \\\\<br/>\\hline</p><p>T_m = \\text{time to access memory} <br/>&amp; 1\\ \\text{microsecond} \\\\<br/>\\hline</p><p>T_d = \\text{time to transfer a page to/from disk} <br/>&amp; \\begin{array}{l}<br/>10\\ \\text{milliseconds} = \\\\<br/>10000\\ \\text{microseconds}<br/>\\end{array} \\\\<br/>\\hline</p><p>P_d = \\text{probability page is dirty when replaced} <br/>&amp; 0.5 \\\\<br/>\\hline<br/>\\end{array}<br/>\\]</p><p data-end=\"8701\" data-start=\"8633\">Additional assumptions:</p><p data-end=\"9575\" data-start=\"9515\">What is the <strong data-end=\"9557\" data-start=\"9527\">average memory access time</strong>, in microseconds?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">The TLB is refilled automatically by hardware.<br/></span>",
                "<span style=\"display: inline;\">On a TLB miss, one memory access is required to read the page-table entry.<br/></span>",
                "<span style=\"display: inline;\">If a page fault occurs, the required page must be read from disk.<br/></span>",
                "<span style=\"display: inline;\">If the selected victim is dirty, it must also be written to disk.<br/></span>",
                "<span style=\"display: inline;\">Other page-replacement and page-table-update overheads are included in $T_d$.<br/></span>"
            ],
            "answer": "1.4",
            "solution": "<div class=\"solution-content\"><a name=\"543903\"></a><div itemprop=\"text\"><p data-end=\"9723\" data-start=\"9670\">Every reference first needs the actual memory access:</p><p data-end=\"9732\" data-start=\"9725\">$T_m=1$</p><p data-end=\"9769\" data-start=\"9734\">A TLB miss occurs with probability:</p><p data-end=\"9780\" data-start=\"9771\">$P_t=0.1$</p><p data-end=\"9842\" data-start=\"9782\">A TLB miss requires one additional page-table memory access:</p><p data-end=\"9851\" data-start=\"9844\">$T_m=1$</p><p data-end=\"9902\" data-start=\"9853\">A page fault occurs with conditional probability:</p><p data-end=\"9916\" data-start=\"9904\">$P_p=0.0002$</p><p data-end=\"9976\" data-start=\"9918\">When a page fault occurs, reading the demanded page costs:</p><p data-end=\"9989\" data-start=\"9978\">$T_d=10000$</p><p data-end=\"10050\" data-start=\"9991\">If the victim is dirty, an additional disk write is needed.</p><p data-end=\"10083\" data-start=\"10052\">Expected dirty-page write cost:</p><p data-end=\"10093\" data-start=\"10085\">$P_dT_d =0.5(10000)=5000$</p><p data-end=\"10163\" data-start=\"10119\">Therefore, expected page-fault disk cost is:</p><p data-end=\"10183\" data-start=\"10165\">$10000+5000=15000$</p><p data-end=\"10212\" data-start=\"10185\">The average access time is:</p><p data-end=\"10252\" data-start=\"10214\">$EAT=T_t+T_m+P_t[T_m+P_p(T_d+P_dT_d)]$</p><p data-end=\"10265\" data-start=\"10254\">Substitute:</p><p data-end=\"10302\" data-start=\"10267\">$EAT=0+1+0.1[1+0.0002(10000+5000)]$</p><p data-end=\"10317\" data-start=\"10304\">$=1+0.1[1+3]=1+0.4=\\boxed{1.4}$</p><p data-end=\"10347\" data-start=\"10337\">$\\boxed{\\therefore EAT = 1.4\\text{ microseconds}}$</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/543902/go-classes-dpp-gate-cs-operating-system-effective-access-time\" target=\"_blank\">GATE Overflow #543902</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"4494\" data-start=\"4387\">Consider a system using a <strong data-end=\"4437\" data-start=\"4413\">two-level page table</strong>. Assume the required page is present in physical memory.</p><p data-end=\"4591\" data-start=\"4496\">How many main-memory accesses are required for a virtual-address access when a TLB miss occurs?</p><p data-end=\"4655\" data-start=\"4593\">Include the final access to the requested instruction or data.</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$4$<br/></span>",
                "<span style=\"display: inline;\">$3$<br/></span>",
                "<span style=\"display: inline;\">$2$<br/></span>",
                "<span style=\"display: inline;\">$1$</span>"
            ],
            "answer": "B",
            "solution": "<div class=\"solution-content\"><a name=\"543438\"></a><div itemprop=\"text\"><p data-end=\"4812\" data-start=\"4725\">On a TLB miss, the required translation must be obtained from the two-level page table.</p><p data-end=\"4838\" data-start=\"4814\"><strong data-end=\"4838\" data-start=\"4814\">First memory access:</strong></p><p data-end=\"4880\" data-start=\"4840\">Access the first-level page-table entry.</p><p data-end=\"4907\" data-start=\"4882\"><strong data-end=\"4907\" data-start=\"4882\">Second memory access:</strong></p><p data-end=\"4950\" data-start=\"4909\">Access the second-level page-table entry.</p><p data-end=\"4991\" data-start=\"4952\">Now the physical frame number is known.</p><p data-end=\"5017\" data-start=\"4993\"><strong data-end=\"5017\" data-start=\"4993\">Third memory access:</strong></p><p data-end=\"5067\" data-start=\"5019\">Access the actual requested instruction or data.</p><p data-end=\"5079\" data-start=\"5069\"><br/>$\\therefore \\text{Total memory accesses}=2+1=3$<br/> </p><p data-end=\"5148\" data-start=\"5119\"><strong>Answer : B</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/543437/go-classes-dpp-gate-cs-operating-system-tlb-miss-accesses\" target=\"_blank\">GATE Overflow #543437</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"3386\" data-start=\"3354\">What caching is done in the TLB?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">Virtual Address $\\rightarrow$ Physical Address<br/></span>",
                "<span style=\"display: inline;\">Virtual Page Number $\\rightarrow$ Physical Address<br/></span>",
                "<span style=\"display: inline;\">Virtual Page Number $\\rightarrow$ Physical Page Number<br/></span>",
                "<span style=\"display: inline;\">Physical Page Number $\\rightarrow$ Virtual Page Number</span>"
            ],
            "answer": "C",
            "solution": "<div class=\"solution-content\"><a name=\"543436\"></a><div itemprop=\"text\"><p data-end=\"3740\" data-start=\"3706\">A logical address is divided into:</p><p data-end=\"3789\" data-start=\"3742\">$\\text{Virtual Page Number}+\\text{Page Offset}$</p><p data-end=\"3841\" data-start=\"3791\">The TLB stores recently used address translations.</p><p data-end=\"3875\" data-start=\"3843\">The important mapping stored is:</p><p data-end=\"3910\" data-start=\"3877\">$\\text{VPN}\\rightarrow\\text{PPN}$</p><p data-end=\"3918\" data-start=\"3912\">where:</p><ul data-end=\"3992\" data-start=\"3920\"><li data-end=\"3947\" data-section-id=\"10haefg\" data-start=\"3920\">VPN = Virtual Page Number<br/> </li><li data-end=\"3992\" data-section-id=\"hwd3y5\" data-start=\"3948\">PPN = Physical Page Number or Frame Number</li></ul><p data-end=\"4050\" data-start=\"3994\">The page offset is not translated. It remains unchanged.<br/> </p><p data-end=\"4085\" data-start=\"4052\"><strong>Answer : C</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/543435/go-classes-dpp-gate-cs-operating-system-tlb-mapping\" target=\"_blank\">GATE Overflow #543435</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"499\" data-start=\"277\">Consider a three level paging scheme with a TLB. Assume no page fault occurs. It takes $1 ~\\text{ns}$ to search the TLB and $100 ~\\text{ns}$ to access the physical memory. If the TLB hit ratio is $90\\%$, what is the effective memory access time?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$101 ~\\text{ns}$<br/></span>",
                "<span style=\"display: inline;\">$111 ~\\text{ns}$<br/></span>",
                "<span style=\"display: inline;\">$121 ~\\text{ns}$<br/></span>",
                "<span style=\"display: inline;\">$131 ~\\text{ns}$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"543430\"></a><div itemprop=\"text\"><p data-end=\"651\" data-start=\"633\">For a <strong data-end=\"650\" data-start=\"639\">TLB hit</strong>:</p><p data-end=\"686\" data-start=\"653\">$\\text{Time}=1+100=101\\text{ ns}$</p><p data-end=\"787\" data-start=\"688\">For a <strong data-end=\"706\" data-start=\"694\">TLB miss</strong>, three page-table levels must be accessed, followed by the actual memory access:</p><p data-end=\"815\" data-start=\"789\">$\\text{Time}=1+3(100)+100=401\\text{ ns}$</p><p data-end=\"845\" data-start=\"835\">Therefore,</p><p data-end=\"870\" data-start=\"847\">$EAT=0.9(101)+0.1(401)=90.9+40.1=131\\text{ ns}$</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/543429/go-classes-dpp-gate-cs-operating-system-tlb-access-time\" target=\"_blank\">GATE Overflow #543429</a></small></div>"
        },
        {
            "marks": 2,
            "neg": 0,
            "type": "MSQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"3238\" data-start=\"3126\">Which of the following operations normally require the processor to be executing in kernel mode?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">Issuing a command directly to a disk controller<br/></span>",
                "<span style=\"display: inline;\">Updating the address of the system trap table<br/></span>",
                "<span style=\"display: inline;\">Adding two integers stored in user memory<br/></span>",
                "<span style=\"display: inline;\">Executing a return-from-trap instruction<br/></span>",
                "<span style=\"display: inline;\">Reading a local variable from the current user stack</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"540215\"></a><div itemprop=\"text\"><p data-end=\"3706\" data-start=\"3553\">Raw device access must be protected because allowing an application to directly control devices would bypass operating-system protection.</p><p data-end=\"3864\" data-start=\"3708\">The trap table must also be configured only by trusted kernel code. </p><p data-end=\"3864\" data-start=\"3708\">Otherwise, a user program could redirect traps or system calls to an arbitrary location.</p><p data-end=\"3992\" data-start=\"3866\">The return-from-trap instruction changes the privilege level and restores protected processor state, so it is also privileged.</p><p data-end=\"4151\" data-start=\"3994\">Ordinary arithmetic and accesses to valid locations in the process’s own user address space do not require kernel mode.</p><p data-end=\"4151\" data-start=\"3994\"><strong>Answer : A; B; D</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/540214/go-classes-dpp-gate-cs-operating-system-kernel-mode\" target=\"_blank\">GATE Overflow #540214</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p data-end=\"2335\" data-start=\"2268\">ssume that the process priorities are $X &gt; Y &gt; Z$.</p><p data-end=\"2599\" data-start=\"2519\">Before the disk operation completes, what are the states of the three processes?</p><p><strong>Given Details:</strong></p><ul><li>Process $X$ is initially running.</li><li>$X$ creates process $Y$ using $\\texttt{fork()}$.</li><li>$X$ requests a disk operation and becomes blocked.</li><li>$Y$ begins running and creates process $Z$.</li></ul></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$X$ is blocked, $Y$ is running, and $Z$ is ready.</span>",
                "<span style=\"display: inline;\">$X$ is ready, $Y$ is blocked, and $Z$ is running.</span>",
                "<span style=\"display: inline;\">$X$ is running, while $Y$ and $Z$ are ready.</span>",
                "<span style=\"display: inline;\">$X$ is terminated, $Y$ is running, and $Z$ is blocked.</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"539949\"></a><div itemprop=\"text\"><p data-end=\"3025\" data-start=\"2895\">$X$ becomes blocked when it requests disk I/O. </p><p data-end=\"3025\" data-start=\"2895\">Since $Y$ is the highest-priority ready process, it begins running.</p><p data-end=\"3168\" data-start=\"3027\">When $Y$ creates $Z$, the newly created process becomes ready. </p><p data-end=\"3168\" data-start=\"3027\">It does not immediately replace the currently running higher-priority process.</p><p data-end=\"3180\" data-start=\"3170\">Therefore:</p><ul data-end=\"3224\" data-start=\"3182\"><li data-end=\"3196\" data-section-id=\"ptty8y\" data-start=\"3182\">$X:$ Blocked<br/> </li><li data-end=\"3211\" data-section-id=\"1wtrw0c\" data-start=\"3197\">$Y:$ Running<br/> </li><li data-end=\"3224\" data-section-id=\"112uk5f\" data-start=\"3212\">$Z:$ Ready</li></ul><div><br/><strong>Answer : A</strong></div></div><br><br><small>Source: <a href=\"https://gateoverflow.in/539948/go-classes-dpp-gate-cs-operating-system-process-state-transitions\" target=\"_blank\">GATE Overflow #539948</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>A file system uses <strong>INDEXED ALLOCATION</strong> with a single-level index block. The disk block size is $\\mathbf{4}$ <strong>KB</strong>, and each disk block address requires $\\mathbf{4}$ <strong>bytes</strong>. What is the maximum possible size of a file in this system?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$2 ~\\text{MB}$<br/></span>",
                "<span style=\"display: inline;\">$4 ~\\text{MB}$<br/></span>",
                "<span style=\"display: inline;\">$8 ~\\text{MB}$<br/></span>",
                "<span style=\"display: inline;\">$16 ~\\text{MB}$</span>"
            ],
            "answer": "B",
            "solution": "<div class=\"solution-content\"><a name=\"523527\"></a><div itemprop=\"text\"><ul><li><strong>Disk Block Size</strong> $=4 \\mathrm{~KB}=2^{12}$ bytes.<br/> </li><li><strong>Disk Block Address (Pointer) Size</strong> $=4$ bytes $=2^2$ bytes.<br/> </li><li><strong>Number of pointers per Index Block</strong> $=\\frac{\\text { Block Size }}{\\text { Address Size }}=\\frac{4096}{4}=1024$ pointers.<br/> </li></ul><p>In Single-Level Indexed Allocation, one index block contains pointers to data blocks.</p><ul><li><strong>Total Data Blocks</strong> $=1024$.<br/> </li><li><strong>Max File Size</strong> $=$ Number of pointers × Block Size.<br/> </li><li><strong>Max File Size</strong> $=1024 \\times 4 \\mathrm{~KB}=4096 \\mathrm{~KB}=4 \\mathrm{MB}$.<br/> </li></ul><p><strong>Correct Option: (B)</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/523526/go-classes-dpp-os-indexed-allocation\" target=\"_blank\">GATE Overflow #523526</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider a disk with $200$ tracks $(0-199)$. The current head position is at track $50$ and is moving towards higher track numbers. The request queue is: $82,170,43,140,24,16,190$. If the <strong>C-SCAN</strong> (Circular SCAN) algorithm is used, what is the total head movement (in tracks) to satisfy all requests? (Assume the head moves to the very end of the disk before wrapping around).</p></div></span>",
            "image": "",
            "options": [],
            "answer": "391",
            "solution": "<div class=\"solution-content\"><a name=\"523325\"></a><div itemprop=\"text\"><p><strong>Current Position: </strong>$ 50$ (Moving UP).<br/><br/><strong>Path:</strong> $50 \\rightarrow 82 \\rightarrow 140 \\rightarrow 170 \\rightarrow 190 \\rightarrow 199$ (End of disk).</p><ul><li>Distance $1:$ $199-50=149$ tracks.<br/> </li></ul><p><strong>Jump:</strong> $199 \\rightarrow 0$ (C-SCAN always goes to the very start).</p><ul><li>Distance $2: 199$ tracks.<br/> </li></ul><p><strong>Path:</strong> $0 \\rightarrow 16 \\rightarrow 24 \\rightarrow 43$.</p><ul><li>Distance $3:$ $43-0=43$ tracks.<br/> </li></ul><p><strong>Total Movement: </strong>$149+199+43=391$<strong> tracks.</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/523324/go-classes-dpp-os-circular-scan\" target=\"_blank\">GATE Overflow #523324</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\">Consider a disk with a sector size of $512$ bytes, $2000$ tracks per surface, $50$ sectors per track, and $5$ double-sided platters. A file of size $1 \\mathrm{MB}(1 \\mathrm{MB}=1024 \\mathrm{~KB})$ is stored in the disk.<br/> <br/> If the disk uses Linked Allocation where each block (sector) contains a $4$-byte pointer to the next block, what is the minimum number of sectors required to store the entire file?</div></span>",
            "image": "",
            "options": [],
            "answer": "2064.12",
            "solution": "<div class=\"solution-content\"><a name=\"522476\"></a><div itemprop=\"text\"><ul><li>File Size = $1 \\mathrm{MB}=1024 \\times 1024$ bytes = $1,048,576$ bytes.<br/> </li><li>Each sector size $=512$ bytes.<br/> </li><li>Pointer per sector $=4$ bytes.<br/> </li><li>Effective Data per sector $=512-4=508$ bytes.<br/> </li><li>Number of sectors $=\\left\\lceil\\frac{1,048,576}{508}\\right\\rceil \\approx 2064.12$<br/> </li></ul><p><strong>ANSWER</strong>$\\mathbf{: 2065}$</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/522475/go-classes-dpp-os-disk\" target=\"_blank\">GATE Overflow #522475</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider a disk with $200$ tracks $(0-199)$. The current position of the R/W head is at track $50$. The queue of pending requests is: $82,170,43,140,24,16$. If the <strong>SSTF (Shortest Seek Time First)</strong> algorithm is used, what is the total number of track movements required to satisfy all requests?</p></div></span>",
            "image": "",
            "options": [],
            "answer": "1",
            "solution": "<div class=\"solution-content\"><a name=\"522320\"></a><div itemprop=\"text\"><p><strong>Initial head position</strong>$: 50.$ <strong>Queue</strong>$: 16, 24, 43, 82, 140, 170.$<br/><br/>SSTF moves to the nearest request:</p><ol><li>From $50$, the closest is $\\mathbf{4 3}$ $($distance $7)$. Total$: 7$.<br/> </li><li>From $43$, the closest is $\\mathbf{2 4}$ $($distance $19)$. Total: $7+19=26$.<br/> </li><li>From $24$, the closest is $\\mathbf{1 6}$ $($distance $8)$. Total: $26+8=34$.<br/> </li><li>From $16$, the closest remaining is $\\mathbf{8 2}$ $($distance $66)$. Total: $34+66=100$.<br/> </li><li>From $82$, the closest is $\\mathbf{1 4 0}$ $($distance $58)$. Total: $\\mathbf{1 0 0 + 5 8 = 1 5 8}$.<br/> </li><li>From $140$, the closest is $\\mathbf{1 7 0}$ $($distance 30). Total: $158+30=\\mathbf{1 8 8}$.</li></ol></div><br><br><small>Source: <a href=\"https://gateoverflow.in/522319/go-classes-dpp-os-sstf\" target=\"_blank\">GATE Overflow #522319</a></small></div>"
        }
    ]
});

registerTest({
    "name": "DPP 36 - Operating System (File Systems & Disk Scheduling - Part 4)",
    "testLabel": "DPP 36",
    "testType": "DPP",
    "bracket": "File Systems & Disk Scheduling - Part 4",
    "subject": "os",
    "series": "cse-dpp-2027",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 13,
    "topicsCovered": "File Systems & Disk Scheduling (Practice Set 4)",
    "questions": [
        {
            "marks": 2,
            "neg": 0,
            "type": "MSQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>An inode-based file system uses $4$ KB blocks and $4$-byte disk addresses. The inode contains $12$ direct block pointers, $1$ single indirect pointer, and $1$ double indirect pointer.</p><p>Which of the following statements is/are TRUE regarding this file system?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">THE MAXIMUM FILE SIZE SUPPORTED IS SLIGHTLY MORE THAN $4$ GB.<br/></span>",
                "<span style=\"display: inline;\">THE MAXIMUM FILE SIZE SUPPORTED IS SLIGHTLY MORE THAN $1$ GB.<br/></span>",
                "<span style=\"display: inline;\">ACCESSING A BYTE AT OFFSET $20$ MB REQUIRES AT MOST $3$ DISK BLOCK READS (INCLUDING THE INODE).<br/></span>",
                "<span style=\"display: inline;\">A SINGLE INDIRECT BLOCK CAN ADDRESS UP TO $1024$ DATA BLOCKS.</span>"
            ],
            "answer": [
                "A"
            ],
            "solution": "<div class=\"solution-content\"><a name=\"521950\"></a><div itemprop=\"text\"><p><strong>Block size</strong> $=4 \\mathrm{~KB}$<br/><br/><strong>Pointers per block</strong> $=\\frac{4 \\mathrm{~KB}}{4 \\text { bytes }}=1024$ pointers<br/><br/><strong>Direct: </strong>$12 \\times 4 \\mathrm{~KB}=48 \\mathrm{~KB}$<br/><br/><strong>Single Indirect:</strong> $1024 \\times 4 \\mathrm{~KB}=4 \\mathrm{MB}$<br/><br/><strong>Double Indirect:</strong> $1024 \\times 1024 \\times 4 \\mathrm{~KB}=1024 \\times 4 \\mathrm{MB}=4 \\mathrm{~GB}$<br/><br/><strong>Total Size: </strong>$48 \\mathrm{~KB}+4 \\mathrm{MB}+4 \\mathrm{~GB} \\approx 4 \\mathrm{~GB}$<br/><br/><strong>(A) THE MAXIMUM FILE SIZE SUPPORTED IS SLIGHTLY MORE THAN $\\mathbf{4}$ GB:</strong> TRUE. The total is $4 \\mathrm{~GB}+4 \\mathrm{MB}+48 \\mathrm{~KB}$.<br/><br/><strong>(B) THE MAXIMUM FILE SIZE SUPPORTED IS SLIGHTLY MORE THAN $\\mathbf{1}$ GB:</strong> FALSE.<br/><br/><strong>(C) ACCESSING A BYTE AT OFFSET $\\mathbf{20}$ MB REQUIRES AT MOST 3 DISK BLOCK READS (INCLUDING THE INODE): </strong>FALSE.</p><ul><li>$20$ MB is in the <strong>Double Indirect</strong> range (since Direct + Single Indirect only covers up to $\\sim 4.04 \\mathrm{MB}$ ).<br/> </li><li>Path: Inode → Double Indirect Block → First level Indirect Block → Data Block.<br/> </li><li>This requires $4$ <strong>reads</strong> $( 3$ disk blocks $+$ Inode$)$.<br/> </li></ul><p><strong>(D) A SINGLE INDIRECT BLOCK CAN ADDRESS UP TO $\\mathbf{1024}$ DATA BLOCKS: TRUE.</strong></p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/521949/go-classes-dpp-os-file-system\" target=\"_blank\">GATE Overflow #521949</a></small></div>"
        },
        {
            "marks": 2,
            "neg": 0,
            "type": "MSQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider a Unix-style Inode-based file system. A specific Inode contains:</p><p>The block size is $\\mathbf{4}$ <strong>KB</strong> and each disk block pointer is $\\mathbf{3 2}$ <strong>bits</strong>. A user creates a file and performs the following operations in sequence:</p><p><strong>Which of the following statements is/are TRUE?</strong></p><ol start=\"1\" style=\"list-style-type: upper-alpha;\"><li>THE FILE SYSTEM WILL ALLOCATE DISK BLOCKS FOR ALL THE \"HOLES\" BETWEEN $50$ KB AND $10$ MB.<br/> </li><li>ACCESSING THE DATA AT THE $10$ MB MARK REQUIRES ACCESSING THE DOUBLE INDIRECT POINTER.<br/> </li><li>THE TOTAL NUMBER OF DISK DATA BLOCKS PHYSICALLY OCCUPIED BY THIS FILE (EXCLUDING METADATA BLOCKS) IS $14$.<br/> </li><li>IF THE DISK POINTER SIZE IS INCREASED TO $64$ BITS WHILE KEEPING THE BLOCK SIZE THE SAME, THE MAXIMUM POSSIBLE FILE SIZE DECREASES.</li></ol><p><strong>Given Details:</strong></p><ul><li>$12$ Direct Block Pointers</li><li>$1$ Single Indirect Pointer</li><li>$1$ Double Indirect Pointer</li><li>$1$ Triple Indirect Pointer</li></ul></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">Writes $\\mathbf{5 0}$ <strong>KB</strong> starting from the beginning of the file.</span>",
                "<span style=\"display: inline;\">Performs a $\\verb|lseek|$ to the $\\mathbf{1 0 }$ <strong>MB</strong> mark and writes $\\mathbf{4}$ <strong>KB</strong> of data.</span>"
            ],
            "answer": "C",
            "solution": "<div class=\"solution-content\"><a name=\"521159\"></a><div itemprop=\"text\"><ol start=\"1\" style=\"list-style-type: upper-alpha;\"><li><strong>FALSE: </strong>This creates a \"sparse file\"; holes do not consume physical data blocks.<br/> </li><li><strong>TRUE:</strong> $12$ direct blocks $=48 \\mathrm{~KB}$. Single indirect $( 1$K pointers$)$ $=4 \\mathrm{MB}$. Double indirect starts after $\\sim 4.05 \\mathrm{MB}$. $10 \\mathrm{MB}$ falls into the double indirect range.<br/> </li><li><strong>TRUE:</strong> $50$ KB needs $13$ blocks $( 12$ direct $+1$ single indirect$)$. The $4$ KB at $10$ MB needs $1$ block. Total $=14$.<br/> </li><li><strong>TRUE:</strong> Larger pointers mean fewer pointers fit in one block, reducing the reach of the triple indirect index.<br/> </li></ol><p>Why Option C is correct:<br/><br/><strong>FIRST</strong> $\\mathbf{50}$ <strong>KB :</strong></p><ul><li><strong>Direct Blocks:</strong> The first $12$ blocks cover $12 \\times 4 \\mathrm{~KB}=48 \\mathrm{~KB}$.<br/> </li><li><strong>Single Indirect Block: </strong>The remaining $2 \\mathrm{~KB}(50-48)$ must go into the $\\mathbf{13}$<strong>th data block. </strong>To reach this $13$th block, the OS must allocate $1$ <strong>Single Indirect Pointer Block</strong> (metadata).<br/> </li><li><strong>Subtotal:</strong> $13$ physical data blocks.<br/> </li></ul><p><strong>THE $\\mathbf{10}$ MB MARK:</strong></p><ul><li>Since $10$ MB is far beyond the reach of the Single Indirect pointer $(\\sim 4.05 \\mathrm{MB})$, the OS uses the <strong>Double Indirect Pointer.</strong><br/> </li><li>The $4$ KB write at this offset occupies exactly $\\mathbf{1}$ <strong>data block.</strong><br/> </li><li><strong>Subtotal:</strong> $1$ physical data block.<br/> </li></ul><p><strong>TOTAL DATA BLOCKS:</strong> $13$ $($from the $50$ KB$ ) +1 ($at the $10$ MB mark$) = 14$ blocks.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/521157/go-classes-dpp-os-file-system\" target=\"_blank\">GATE Overflow #521157</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider a disk with $200$ tracks $(0-199)$. The disk head is currently at track $50$ and was previously at <strong>track</strong> $\\mathbf{40}.$ The queue of pending requests in FIFO order is:<br/><br/>$\\mathbf{90, 150, 25, 110, 30, 180}$<br/><br/>The system uses the <strong>C-SCAN</strong> scheduling algorithm. What is the total distance (in tracks) moved by the disk arm to satisfy all requests?</p></div></span>",
            "image": "",
            "options": [],
            "answer": "149",
            "solution": "<div class=\"solution-content\"><a name=\"520978\"></a><div itemprop=\"text\"><p>The head moves from $50$ and services all requests greater than $50$ in order:</p><ul><li>$50 \\rightarrow 90 \\rightarrow 110 \\rightarrow 150 \\rightarrow 180 \\rightarrow 199$</li></ul><p>From $199$, the head jumps immediately back to the start $($track $0)$.<br/><br/>Distance $=199-0=\\mathbf{1 9 9}$ tracks.<br/><br/>The head moves from $0$ to service requests $25$ and $30$.</p><ul><li>$0 \\rightarrow 25 \\rightarrow 30$</li></ul><p>Distance $=30-0=\\mathbf{3 0}$ tracks.<br/><br/>Total $=149($Forward$)+199($Jump$)+30($Return Service$)=\\mathbf{3 7 8}$</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/520977/go-classes-dpp-os-disk\" target=\"_blank\">GATE Overflow #520977</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>A disk drive has $200$ cylinders $($numbered $0-199)$. The disk arm is currently at cylinder $50$ and was previously at cylinder $40$. The queue of pending requests in FIFO order is: $80,150,30, 120, 10.$</p><p>The total head movement using the <strong>SSTF</strong> (Shortest Seek Time First) algorithm is $\\_\\_\\_\\_$ .</p></div></span>",
            "image": "",
            "options": [],
            "answer": "180",
            "solution": "<div class=\"solution-content\"><a name=\"520261\"></a><div itemprop=\"text\">From $50$, SSTF sequence: $50 \\rightarrow 30 \\rightarrow 10 \\rightarrow 80 \\rightarrow 120 \\rightarrow 150$.<br/> <br/> Total head movements $=20+20+70+40+30=180$</div><br><br><small>Source: <a href=\"https://gateoverflow.in/520260/go-classes-dpp-os-paging\" target=\"_blank\">GATE Overflow #520260</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider a disk with a sector size of $\\mathbf{512}$ <strong>bytes</strong>, a block size of $\\mathbf{2}$ <strong>KB</strong> , and a total disk capacity of $\\mathbf{1 2 8 ~ G B}$. The file system uses <strong>Linked Allocation</strong> to manage files. If a specific file has a size of $\\mathbf{1 8 ~ K B}$, how many bytes of the disk's total capacity are used solely for <strong>pointers</strong> to manage this file? (Assume each pointer requires $\\mathbf{4}$ <strong>bytes</strong> and is stored within the data block).</p><p>Note: The pointer to the first block of the file is stored in the directory entry and should NOT be counted.</p></div></span>",
            "image": "",
            "options": [],
            "answer": "36",
            "solution": "<div class=\"solution-content\"><a name=\"520259\"></a><div itemprop=\"text\"><p>&lt;!--td {border: 1px solid #cccccc;}br {mso-data-placement:same-cell;}--&gt;</p><p>Sector size is $512$ bytes.<br/><br/>Block size is $2$ KB $= 2048$ bytes.<br/><br/>Total disk capacity is $128$ GB (not directly needed for this calculation).<br/><br/>File size is $18$ KB $= 18432$ bytes.<br/><br/>Allocation method is Linked Allocation.<br/><br/>Pointer size is $4$ bytes and stored inside each data block.<br/><br/><strong>Number of Blocks Used by the File:</strong><br/><br/>Blocks required $=18432 \\div 2048=9$ blocks<br/><br/>(The file fits exactly, so no partial block.)<br/> </p><p><strong>Pointer Overhead in Linked Allocation:</strong><br/><br/>In linked allocation, each data block contains one pointer to the next block.<br/><br/>So, number of pointers $=$ number of blocks $=9$.<br/><br/><strong>Total Bytes Used Only for Pointers:</strong><br/><br/>Pointer space $=9 \\times 4$ bytes $=36$ bytes.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/520253/go-classes-dpp-os-paging\" target=\"_blank\">GATE Overflow #520253</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Which of the following is a primary disadvantage of the 'Translation Lookaside Buffer' (TLB)?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">It increases the number of memory accesses<br/></span>",
                "<span style=\"display: inline;\">It causes more frequent page faults<br/></span>",
                "<span style=\"display: inline;\">It requires expensive associative memory hardware<br/></span>",
                "<span style=\"display: inline;\">It prevents the use of multilevel page tables</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"518283\"></a><div itemprop=\"text\">TLBs use Content Addressable Memory (CAM), which is fast but significantly more expensive than standard RAM.</div><br><br><small>Source: <a href=\"https://gateoverflow.in/518282/go-classes-dpp-os-tlb\" target=\"_blank\">GATE Overflow #518282</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\">A disk has $200$ tracks ($0-199$). The disk head is currently at track $100$ and was previously at track $90$. The queue of pending requests is $20, 150, 70, 110,$ and $180$.<br/> <br/> Using the C-SCAN scheduling algorithm, what is the total head movement (in number of tracks) required to satisfy all requests?</div></span>",
            "image": "",
            "options": [],
            "answer": "368",
            "solution": "<div class=\"solution-content\"><a name=\"518280\"></a><div itemprop=\"text\">Movement to the end: (199 - Start Position).<br/> <br/> The \"Jump\" distance: $(199-0)=199$.<br/> <br/> Movement after the jump: (Remaining Requests -0 ).<br/> <br/> Start position = 100<br/> <br/> Total movements $=199-100+199+70=368$</div><br><br><small>Source: <a href=\"https://gateoverflow.in/518278/go-classes-dpp-os-disk-scheduling\" target=\"_blank\">GATE Overflow #518278</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider a disk queue with requests for I/O to blocks on cylinders $98, 183,37,122,14,124,65$, and 67 . The disk head is initially at cylinder $53$. Using the SCAN algorithm (Elevator) and assuming the head is moving towards higher cylinder numbers, what is the total head movement (in number of cylinders) to satisfy all requests if the disk has $200$ cylinders $(0$ to $199)$?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$331$<br/></span>",
                "<span style=\"display: inline;\">$345$<br/></span>",
                "<span style=\"display: inline;\">$236$<br/></span>",
                "<span style=\"display: inline;\">$185$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"516824\"></a><div itemprop=\"text\">Cylinder movement$: 53$ to $199$ and then $199$ to $14$<br/> <br/> Total no of movements$= 331$</div><br><br><small>Source: <a href=\"https://gateoverflow.in/516823/go-classes-dpp-os-disk-scheduling\" target=\"_blank\">GATE Overflow #516823</a></small></div>"
        },
        {
            "marks": 2,
            "neg": 0,
            "type": "MSQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>A disk drive has $\\mathbf{200}$ <strong>cylinders</strong> $($numbered $0$ to $199)$. The disk head is currently positioned at <strong>cylinder</strong> $\\mathbf{50}$, and the previous request serviced was at cylinder 40. The queue of pending requests in FIFO order is$: \\mathbf{80, 140, 25, 170, 35.}$</p><p><strong>Which of the following statement(s) is/are TRUE?</strong></p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">Using the <strong>SSTF</strong> (Shortest Seek Time First) algorithm, the total head movement is $185$ cylinders.<br/></span>",
                "<span style=\"display: inline;\">Using the <strong>SCAN</strong> algorithm (moving toward higher cylinders first), the total head movement is $220$ cylinders.<br/></span>",
                "<span style=\"display: inline;\">Using the <strong>LOOK</strong> algorithm, the disk head will not travel to cylinder $199$ if no request exists there.<br/></span>",
                "<span style=\"display: inline;\">The <strong>C-SCAN</strong> algorithm starts from beginning after reaching end.</span>"
            ],
            "answer": [
                "C",
                "D"
            ],
            "solution": "<div class=\"solution-content\"><a name=\"516260\"></a><div itemprop=\"text\"><p><strong>(A) SSTF (Shortest Seek Time First):</strong></p><p><strong>Path:</strong> $50 \\rightarrow 35 \\rightarrow 25 \\rightarrow 80 \\rightarrow 140 \\rightarrow 170$<br/><br/><strong>Total Movement:</strong> $15+10+55+60+30=\\mathbf{1 7 0}$ cylinders.<br/><br/><strong>(B) SCAN Algorithm:</strong></p><p><strong>Path:</strong> $50 \\rightarrow 80 \\rightarrow 140 \\rightarrow 170 \\rightarrow 199 \\rightarrow 35 \\rightarrow 25$<br/><br/><strong>Total Movement:</strong> $(199-50)+(199-25)=149+174=\\mathbf{3 2 3}$ cylinders.<br/><br/><strong>(C) LOOK Algorithm:</strong></p><ul><li>Unlike SCAN, the LOOK algorithm reverses immediately after the last request in a direction is serviced $(170)$, without going to the end of the disk $(199)$.<br/> </li><li><strong>Conclusion:</strong> $(C)$<em> is TRUE.</em><br/> </li></ul><p>Option C,D are true.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/516258/go-classes-dpp-os-disk\" target=\"_blank\">GATE Overflow #516258</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>A hard disk has $200$ tracks $($numbered $0$ to $199)$. The disk head is initially located at track $53$. The disk queue contains read/write requests for the following tracks in the order they arrived:<br/>$$<br/>98,183,37,122,14,124,65,67<br/>$$<br/>If the <strong>Shortest Seek Time First (SSTF)</strong> disk scheduling algorithm is used, what is the <strong>total number of head movements</strong> required to satisfy all requests?</p></div></span>",
            "image": "",
            "options": [],
            "answer": "59",
            "solution": "<div class=\"solution-content\"><a name=\"514333\"></a><div itemprop=\"text\"><p><strong>Movements:</strong></p><ol><li>$53 \\rightarrow 65$ $($Distance: $|65-53|=12)$<br/> </li><li>$65 \\rightarrow 67$ $($Distance: $|67-65|=2)$<br/> </li><li>$67 \\rightarrow 37$ $($Distance: $|37-67|=30) -$ Note$: 37$ is closer to $67$ than $98$ is $($diff $31)$.<br/> </li><li>$37 \\rightarrow 14$ $($Distance: $|14-37|=23)$<br/> </li><li>$14 \\rightarrow 98$ $($Distance: $|98-14|=84)$<br/> </li><li>$98 \\rightarrow 122$ $($Distance: $|122-98|=24)$<br/> </li><li>$122 \\rightarrow 124$ $($Distance: $|124-122|=2)$<br/> </li><li>$124 \\rightarrow 183$ $($Distance: $|183-124|=59)$<br/> </li></ol><p><strong>Total Head Movements:</strong> $12+2+30+23+84+24+2+59=\\mathbf{2 3 6}$ tracks.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/514332/go-classes-dpp-os-disk\" target=\"_blank\">GATE Overflow #514332</a></small></div>"
        }
    ]
});

registerTest({
    "name": "DPP 37 - Operating System (File Systems & Disk Scheduling - Part 5)",
    "testLabel": "DPP 37",
    "testType": "DPP",
    "bracket": "File Systems & Disk Scheduling - Part 5",
    "subject": "os",
    "series": "cse-dpp-2027",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 10,
    "topicsCovered": "File Systems & Disk Scheduling (Practice Set 5)",
    "questions": [
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>A Unix-like file system uses $\\mathbf{2}$ <strong>KB</strong> disk blocks and $\\mathbf{4{$<strong>-byte</strong> block pointers. Each Inode contains:</p><p>What is the approximate <strong>maximum file size</strong> supported by this file system structure?</p><p><strong>Given Details:</strong></p><ul><li>$12$ Direct pointers</li><li>$1$ Single Indirect pointer</li><li>$1$ Double Indirect pointer</li></ul></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$256 ~\\mathrm{MB}$</span>",
                "<span style=\"display: inline;\">$512 ~\\mathrm{MB}$</span>",
                "<span style=\"display: inline;\">$1 ~\\mathrm{MB}$</span>",
                "<span style=\"display: inline;\">$4 ~\\mathrm{MB}$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"514331\"></a><div itemprop=\"text\"><p>Number of pointers per block $=\\frac{\\text { Block Size }}{\\text { Pointer Size }}=\\frac{2048 \\mathrm{~B}}{4 \\mathrm{~B}}=512$ pointers.<br/><br/><strong>Direct: </strong>$12 \\times 2 \\mathrm{~KB}=24 \\mathrm{~KB}$ (negligible for approx max size).<br/><br/><strong>Single Indirect: </strong>$512 \\times 2 \\mathrm{~KB}=1024 \\mathrm{~KB}=1 \\mathrm{MB}$.<br/><br/><strong>Double Indirect: </strong>$512 \\times 512 \\times 2 \\mathrm{~KB}=2^9 \\times 2^9 \\times 2^{11}$ Bytes $=2^{29}$ Bytes $=\\mathbf{5 1 2 ~ M B}$.<br/><br/>Total Size $\\approx 512 \\mathrm{MB}+1 \\mathrm{MB}+24 \\mathrm{~KB} \\approx \\mathbf{5 1 2} \\mathbf{~ M B}$.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/514330/go-classes-dpp-os-i-node\" target=\"_blank\">GATE Overflow #514330</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>A disk has cylinders numbered from $0$ to $4999$. The disk arm is currently at cylinder $2150$ and moving towards higher-numbered cylinders.</p><p>The pending disk I/O request queue is:</p><p>$$<br/>1800,2300,150,3200,4100,2000,4900<br/>$$</p><p><br/>Assume the <strong>SCAN (Elevator) disk scheduling algorithm</strong> is used.</p><p>What is the<strong> total number of cylinders moved</strong> by the disk arm to service all requests?</p></div></span>",
            "image": "",
            "options": [],
            "answer": "7698",
            "solution": "<div class=\"solution-content\"><a name=\"513434\"></a><div itemprop=\"text\">Cylinder movement $: 2150 \\rightarrow 4999 \\rightarrow 150$<br/> <br/> Total no of cylinders moved $=2849+4849=7698$</div><br><br><small>Source: <a href=\"https://gateoverflow.in/513433/go-classes-dpp-os-disk\" target=\"_blank\">GATE Overflow #513433</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>The index node (inode) of a Unix-like file system contains $\\mathbf{10}$ <strong>direct pointers, one singleindirect pointer, </strong>and <strong>one triple-indirect pointer.</strong> The disk block size is $\\mathbf{8 ~kB}$, and each disk block address is $\\mathbf{64-}$<strong>bits</strong> long.</p><p><strong>The maximum possible file size is (rounded off to $\\mathbf{2}$ decimal places) $\\_\\_\\_\\_ ~\\mathbf{TB}$.</strong></p></div></span>",
            "image": "",
            "options": [],
            "answer": "8.0000077",
            "solution": "<div class=\"solution-content\"><a name=\"510809\"></a><div itemprop=\"text\"><p><strong>Determine Addresses per Block $(N) :$</strong></p><ul><li>Disk Block Size $=8 \\mathrm{kB}$<br/> </li><li>Disk Block Address $=64$ bits $=8$ bytes<br/> </li><li>$N=\\frac{8 \\mathrm{kB}}{8 \\text { bytes }}=\\frac{8192}{8}=1024$ addresses per block<br/> </li></ul><p><strong>Calculate Total Blocks Accessible:</strong></p><ul><li><strong>Direct Pointers</strong>$: 10$ blocks<br/> </li><li><strong>Single Indirect:</strong> $1 \\times N=1024$ blocks<br/> </li><li><strong>Triple Indirect: </strong>$1 \\times N^3=1024^3=1,073,741,824$ blocks<br/> </li><li>Total Blocks $=10+1024+1,073,741,824=1,073,742,858$ blocks<br/> </li></ul><p><strong>Calculate Maximum File Size:</strong></p><ul><li>Max Size $=$ Total Blocks × Block Size<br/> </li><li>Max Size $=1,073,742,858 \\times 8 ~\\mathrm{kB}$<br/> </li><li>Max Size $= 8, 589, 942, 864 ~\\mathrm{kB}$<br/> </li></ul><p><strong>Convert to Terabytes (TB):</strong></p><ul><li>$1 \\mathrm{~TB}=1024^3 \\mathrm{kB}=1,073,741,824 ~\\mathrm{kB}$<br/> </li><li>Max Size in TB $=\\frac{8,589,942,864}{1,073,741,824} \\approx 8.0000077 \\mathrm{~TB}$</li></ul></div><br><br><small>Source: <a href=\"https://gateoverflow.in/510808/go-classes-dpp-os-file-system\" target=\"_blank\">GATE Overflow #510808</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider a uniprogrammed operating system where <strong>only one user process executes at a time</strong>, and the process performs disk I/O requests sequentially. The disk scheduling policy initially used is <strong>SCAN.</strong></p><p>Suppose the disk scheduling algorithm is replaced with <strong>Shortest Seek Time First (SSTF)</strong>, and the system vendor claims that this change results in a $\\mathbf{40 \\%}$ <strong>reduction in average disk head movement </strong>during benchmarking.</p><p>What is the <strong>expected improvement in the overall I/O performance perceived by the user process</strong>?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$40 \\%$<br/></span>",
                "<span style=\"display: inline;\">$20 \\%$<br/></span>",
                "<span style=\"display: inline;\">$0\\%$<br/></span>",
                "<span style=\"display: inline;\">Depends on the disk queue length</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"510806\"></a><div itemprop=\"text\">Question says \"single sequential user process\". So, all the requests to disk scheduler will be in sequence and each one will be blocking the execution and hence there is no use of any disk scheduling algorithm. Any disk scheduling algorithm gives the same input sequence and hence the improvement will be $0\\%$ for SSTF over SCAN</div><br><br><small>Source: <a href=\"https://gateoverflow.in/510805/go-classes-dpp-os-disk-scheduling\" target=\"_blank\">GATE Overflow #510805</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>A Unix-like file system uses an <strong>inode</strong> structure to manage files. The system is stored on a disk with a total capacity of $256 \\times 10^9$ <strong>bytes.</strong></p><p>The specifications are as follows:</p><p>Calculate the maximum size of a single file (in $\\mathrm{MB}$, where $1 ~\\mathrm{MB}=10^6$ bytes) that can be supported by this inode structure.</p><p><strong>Given Details:</strong></p><ul><li><strong>Disk Block Size:</strong> $8$ KB $(2^{13}$ bytes$)$.</li><li><strong>Disk Block Address: </strong>$64$-bits long.</li><li><strong>Inode Structure:</strong> Each inode contains $10$ direct pointers, $1$ single-indirect pointer, and $1$ double-indirect pointer.</li></ul></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\mathrm{8600.3 ~MB}$</span>",
                "<span style=\"display: inline;\">$\\mathrm{4200.5 ~MB}$</span>",
                "<span style=\"display: inline;\">$\\mathrm{9100.0 ~MB}$</span>",
                "<span style=\"display: inline;\">$\\mathrm{1048.6 ~MB}$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"510155\"></a><div itemprop=\"text\"><p>Since the disk block address is $64$-bits $(8$ bytes$)$, we find how many addresses fit in one single block:</p><p>$$<br/>\\text { Pointers per block }=\\frac{\\text { Block Size }}{\\text { Address Size }}=\\frac{8 \\times 1024 \\text { bytes }}{8 \\text { bytes }}=1024 \\text { pointers }<br/>$$</p><p><br/><strong>Calculate Max File Size (in Blocks)</strong></p><ul><li><strong>Direct: </strong>$10$ blocks<br/> </li><li><strong>Single-Indirect:</strong> $1024$ blocks<br/> </li><li><strong>Double-Indirect:</strong> $1024 \\times 1024=1,048,576$ blocks<br/> </li><li><strong>Total Blocks:</strong> $10+1024+1,048,576=1,049,610$ blocks<br/> </li></ul><p><strong>Convert to Bytes</strong><br/>$$<br/>\\text { Max File Size }=1,049,610 \\times 8192 \\text { bytes } \\approx 8.60 \\times 10^9 \\text { bytes }<br/>$$</p><p>In $\\mathrm{MB}($units of $10^6$ ) : $\\mathbf{8 6 0 0 . 3 ~ M B}$</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/510153/go-classes-dpp-os-file-system\" target=\"_blank\">GATE Overflow #510153</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>A <strong>FAT (File Allocation Table)</strong> based file system is being used on a disk with a total capacity of $512 \\times 10^6$ <strong>bytes</strong>.</p><p>The system specifications are as follows:</p><p>the maximum size of a file that can be stored on this disk in units of $10^6$ bytes is $\\_\\_\\_\\_$ .</p><p><strong>Given Details:</strong></p><ul><li><strong>Data Block Size:</strong> $2 \\times 10^3$ bytes.</li><li><strong>FAT Entry Size:</strong> $8$ bytes per entry.</li></ul></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$510.00$</span>",
                "<span style=\"display: inline;\">$509.96$</span>",
                "<span style=\"display: inline;\">$511.99$</span>",
                "<span style=\"display: inline;\">$508.42$</span>"
            ],
            "answer": "B",
            "solution": "<div class=\"solution-content\"><a name=\"510152\"></a><div itemprop=\"text\"><p><strong>Determine the Number of Blocks </strong>$(N):$ The number of entries in the FAT is equal to the number of blocks on the disk.</p><p>$$<br/>\\begin{gathered}<br/>N=\\frac{\\text { Total Disk Size }}{\\text { Block Size }+ \\text { FAT Entry Size }} \\\\\\\\<br/>N=\\frac{512 \\times 10^6}{2000+8}=\\frac{512,000,000}{2008} \\approx 254,980 \\text { blocks }<br/>\\end{gathered}<br/>$$</p><p><br/>$$<br/>\\begin{aligned}<br/>\\text { MAX file size } &amp; =254980* 2* 1000 \\text { Bytes } \\\\\\\\<br/>&amp; =509.96* 10^{6} \\text { Bytes }<br/>\\end{aligned}<br/>$$</p><p><br/>Option B is correct</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/510150/go-classes-dpp-os-fat\" target=\"_blank\">GATE Overflow #510150</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>A hard disk has $\\mathbf{50}$ <strong>sectors per track,</strong> $\\mathbf{10}$ <strong>surfaces,</strong> and $\\mathbf{800}$ <strong>cylinders.</strong><br/><br/>The disk uses a <strong>Surface-First</strong> addressing scheme. In this scheme, sectors are numbered sequentially starting from Surface $0$. All tracks and cylinders on Surface $0$ are numbered first (from Cylinder $0$ to $799$), followed by all tracks and cylinders on Surface $1$, and so on.<br/><br/>The address is given as $\\langle s, c, t\\rangle$, where:</p><p><strong>The address $\\mathbf{\\langle 4,200,15\\rangle}$ corresponds to which linear sector number?</strong></p><p><strong>Given Details:</strong></p><ul><li>$s$ is the surface number $(0-9)$</li><li>$c$ is the cylinder number $(0-799)$</li><li>$t$ is the sector number $(0-49)$</li></ul></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$170015$</span>",
                "<span style=\"display: inline;\">$160215$</span>",
                "<span style=\"display: inline;\">$170065$</span>",
                "<span style=\"display: inline;\">$180015$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"510149\"></a><div itemprop=\"text\"><p>To solve this, we must determine how many sectors are contained within the units being bypassed:</p><ol><li><strong>Sectors per Track</strong>$: 50$<br/> </li><li><strong>Sectors per Surface</strong>$: 800$ cylinders $\\times 50$ sectors/track $=40,000$ sectors<br/> </li><li><strong>Linear Formula</strong>: Sector Number $=(s \\times$ Sectors per Surface $)+(c \\times$ Sectors per Track) $+t$<br/> </li></ol><p><strong>Applying the address</strong> $\\langle 4,200,15\\rangle$ :</p><ul><li><strong>Completed Surfaces</strong> $\\mathbf{(4)}: 4 \\times 40,000=160,000$<br/> </li><li><strong>Completed Cylinders on current surface</strong> $\\mathbf{(200)}: 200 \\times 50=10,000$<br/> </li><li><strong>Sector Offset</strong>$: 15$<br/> </li></ul><p><strong>Total</strong>$: 160,000+10,000+15=170,015$</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/510146/go-classes-dpp-os-disk\" target=\"_blank\">GATE Overflow #510146</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>A hard disk is configured with $\\mathbf{80}$ <strong>sectors per track,</strong> $\\mathbf{8}$ <strong>platters</strong> (each with $\\mathbf{2}$ <strong>recording surfaces</strong>), and $\\mathbf{2000}$ <strong>cylinders.</strong> The address of a sector is represented as a triple $\\langle c, h, s\\rangle$, where $c$ is the cylinder number, $h$ is the surface number, and $s$ is the sector number.</p><p>The addressing starts at $\\langle 0,0,0\\rangle$ for the $0^{\\text {th }}$ sector, $\\langle 0,0,1\\rangle$ for the $1^{\\text {st }}$ sector, and so on.<br/><br/><strong>The address</strong> $\\langle 600,12,45\\rangle$ <strong>corresponds to which sector number?</strong></p></div></span>",
            "image": "",
            "options": [],
            "answer": "769",
            "solution": "<div class=\"solution-content\"><a name=\"510142\"></a><div itemprop=\"text\"><p>To find the linear sector number, we use the following hierarchy:</p><ol><li><strong>Sectors per Track </strong>$(S): 80$<br/> </li><li><strong>Surfaces per Cylinder</strong> $(H): 8$ platters $\\times 2=16$ surfaces<br/> </li><li><strong>Sectors per Cylinder</strong>$: 16$ surfaces $\\times 80$ sectors/track $=1280$ sectors<br/> </li></ol><p>The formula for the linear sector number is:</p><p>$$<br/>\\text { Sector Number }=(c \\times H \\times S)+(h \\times S)+s<br/>$$</p><p><strong>Applying the values:</strong></p><ul><li><strong>Cylinder contribution:</strong> $600 \\times 16 \\times 80=768,000$<br/> </li><li><strong>Surface contribution: </strong>$12, \\times 80=960$<br/> </li><li><strong>Sector offset: </strong>$45$<br/> </li></ul><p><strong>Total</strong>$: 768,000+960+45=769,005$</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/510140/go-classes-dpp-os-disk\" target=\"_blank\">GATE Overflow #510140</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>A CPU generates $\\mathbf{4 8}-$<strong>bit</strong> virtual addresses. The page size is $\\mathbf{8 ~ K B}$. The processor has a Translation Lookaside Buffer (TLB) which can hold a total of $\\mathbf{256}$ page table entries and is $\\mathbf{2}-$<strong>way</strong> set associative.</p><p>The minimum size of the TLB tag is:</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$27$ bits <br/></span>",
                "<span style=\"display: inline;\">$28$ bits <br/></span>",
                "<span style=\"display: inline;\">$29$ bits <br/></span>",
                "<span style=\"display: inline;\">$30$ bits</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"504523\"></a><div itemprop=\"text\">TLB Tag Size $=$ Virtual Page Number $(\\mathrm{VPN})-$ TLB Index $(S)$<br/> <br/> Page Offset $(\\mathrm{PO})=13$ bits<br/> <br/> $$<br/> \\mathrm{VPN}=\\mathrm{VA} \\text { Size }-\\mathrm{PO} \\text { Size }<br/> $$<br/> <br/> $\\mathrm{VPN}=48$ bits $-13$ bits $=\\mathbf{3 5}$ bits<br/> <br/> $$<br/> \\begin{gathered}<br/> \\text { Number of Sets }=\\frac{\\text { Total TLB Entries }}{\\text { Set Associativity }} \\\\\\\\<br/> \\text { Number of Sets }=\\frac{256}{2}=128<br/> \\end{gathered}<br/> $$<br/> <br/> $\\operatorname{TLB} \\operatorname{Index}(S)=\\log _2($ Number of Sets $)=\\log _2(128)=\\mathbf{7}$ bits<br/> <br/> <br/> $\\operatorname{TLB} \\operatorname{Tag Size} =35$ bits $-7$ bits $=\\mathbf{2 8}$ bits</div><br><br><small>Source: <a href=\"https://gateoverflow.in/504522/go-classes-dpp-os-tlb\" target=\"_blank\">GATE Overflow #504522</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Disk requests come to the disk driver for cylinders $\\mathbf{8 , 9 0 , 1 5 , 6 5 , 4 0}$, and $\\mathbf{7 5}$ in that order at a time when the disk drive is reading from cylinder $\\mathbf{5 5}$. The seek time is $\\mathbf{7 ~ m s e c}$ per cylinder. Assume the head is currently moving towards $\\mathbf{0}$ <strong>(INWARD).</strong> Compute the total seek time ( in msec) if the disk arm scheduling algorithm is<strong> LOOK.</strong></p></div></span>",
            "image": "",
            "options": [],
            "answer": "504053",
            "solution": "<div class=\"solution-content\"><a name=\"504121\"></a><div itemprop=\"text\"><p style=\"text-align:center\"><img alt=\"\" height=\"652\" src=\"https://gateoverflow.in/?qa=blob&amp;qa_blobid=4974238103778939525\" width=\"960\"/></p><p> </p><p style=\"text-align:center\"><img alt=\"\" height=\"1142\" src=\"https://gateoverflow.in/?qa=blob&amp;qa_blobid=13330466050538321073\" width=\"719\"/></p><p style=\"text-align:center\"><img alt=\"\" height=\"623\" src=\"https://gateoverflow.in/?qa=blob&amp;qa_blobid=1076327294279458202\" width=\"719\"/></p><p> </p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/504053/go-classes-dpp-os-disk-scheduling\" target=\"_blank\">GATE Overflow #504053</a></small></div>"
        }
    ]
});

registerTest({
    "name": "DPP 38 - Operating System (File Systems & Disk Scheduling - Part 6)",
    "testLabel": "DPP 38",
    "testType": "DPP",
    "bracket": "File Systems & Disk Scheduling - Part 6",
    "subject": "os",
    "series": "cse-dpp-2027",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 10,
    "topicsCovered": "File Systems & Disk Scheduling (Practice Set 6)",
    "questions": [
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Disk requests come to disk driver for cylinders $\\mathbf{15, 80, 5, 25, 60,}$ and $\\mathbf{30}$ in that order at a time when the disk drive is reading from cylinder $\\mathbf{7 0}$. The seek time is $\\mathbf{5 msec}$ per cylinder. Assume the disk has $100$ cylinders ($0$ to $99$), and the head is currently moving towards $99$. Compute the total seek time (in msec) if the disk arm scheduling algorithm is <strong>SCAN (ELEVATOR).</strong></p></div></span>",
            "image": "",
            "options": [],
            "answer": "504047",
            "solution": "<div class=\"solution-content\"><a name=\"504122\"></a><div itemprop=\"text\"><p style=\"text-align:center\"><img alt=\"\" height=\"757\" src=\"https://gateoverflow.in/?qa=blob&amp;qa_blobid=8423273096487379597\" width=\"1200\"/></p><p> </p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/504047/go-classes-dpp-os-disk-scheduling\" target=\"_blank\">GATE Overflow #504047</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>A legacy Unix-like file system uses an <strong>index node (i-node)</strong> structure that contains $\\mathbf8$ <strong>direct, zero single-indirect</strong>, and <strong>one double-indirect</strong> pointer. The disk block size is $512$ bytes, and the disk block address is $\\mathbf{3 2}$<strong>-bits</strong> long. The maximum possible file size (rounded off to the nearest integer) is $\\_\\_\\_\\_$ <strong>MB</strong> (Megabytes).<br/>(Assume $1 \\mathrm{k}=2^{\\wedge} 10$ )</p></div></span>",
            "image": "",
            "options": [],
            "answer": "8",
            "solution": "<div class=\"solution-content\"><a name=\"503046\"></a><div itemprop=\"text\"><p>\\begin{aligned}<br/>&amp;\\begin{array}{|l|l|l|}<br/>\\hline<br/>\\text { Parameter } &amp; \\text { Value } &amp; \\text { Power of } 2 \\text { Notation } \\\\<br/>\\hline<br/>\\text { Block Size }(B) &amp; 512 \\text { bytes } &amp; 2^9 \\text { bytes } \\\\<br/>\\text { Address Size }(A) &amp; 32 \\text { bits } &amp; 4 \\text { bytes }=2^2 \\text { bytes } \\\\<br/>\\text { Pointers per Block }\\left(N_p\\right) &amp; 128 &amp; {\\frac{2}{2^2}}^{20} \\\\<br/>\\text { Target Unit (MiB) } &amp; 1 ~\\mathrm{MiB} &amp; 2^{20} \\text { bytes } \\\\<br/>\\hline<br/>\\end{array}\\\\\\\\\\\\<br/><br/>&amp;\\begin{array}{|l|l|l|}<br/>\\hline<br/>\\text { Pointer Type } &amp; \\text { Calculation in } 2^n &amp; \\text { Total Blocks }\\left(2^n\\right) \\\\<br/>\\hline<br/>\\text { DIRECT } &amp; 8 &amp; 2^3 \\\\<br/>\\text { SINGLE-INDIRECT } &amp; 0 &amp; 0 \\\\<br/>\\text { DOUBLE-INDIRECT } &amp; 1 \\times N_p \\times N_p &amp; 2^7 \\times 2^7=2^{14}\\\\<br/>\\hline<br/>\\end{array}\\\\\\\\<br/>&amp;\\text { The total number of blocks is } N_{\\text {total }}=2^3+2^{14} \\text {. }<br/>\\end{aligned}</p><p> </p><p>We calculate the total size and then convert it to $\\mathrm{MB}$. The result will be dominated by the Double-Indirect pointer.</p><p>$$<br/>\\begin{gathered}<br/>S_{\\text {file, } \\max }=\\frac{N_{\\text {total }} \\times B}{\\mathrm{MB}} \\\\\\\\<br/>\\text { Total Size } \\approx \\frac{2^{14} \\times 2^9 \\mathrm{bytes}}{2^{20} \\mathrm{bytes}} \\\\\\\\<br/>\\text { Total Size } \\approx \\frac{2^{(14+9)}}{2^{20}}=\\frac{2^{23}}{2^{20}}=2^3 \\mathrm{MB} \\\\\\\\<br/>2^3=8<br/>\\end{gathered}<br/>$$</p><p><br/><strong>RESULT (rounded off to the nearest integer):</strong> The maximum possible file size is $\\mathbf{8 ~ M B}$.</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/503042/go-classes-dpp-os-i-node\" target=\"_blank\">GATE Overflow #503042</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>The<strong> index node (i-node)</strong> of a Linux-like file system is configured with $\\mathbf{10}$ <strong>direct, two singleindirect,</strong> and <strong>one triple-indirect pointers.</strong> The disk block size is $\\mathbf{16 ~kB}$ , and the disk block address is $\\mathbf{64-bits}$ long. The maximum possible file size (rounded off to $2$ decimal places) is<br/>$\\_\\_\\_\\_$ <strong>TB</strong> (Terabytes).<br/><br/>(Assume $1 \\mathrm{k}=2^{10}$ )</p></div></span>",
            "image": "",
            "options": [],
            "answer": "0.00006",
            "solution": "<div class=\"solution-content\"><a name=\"503041\"></a><div itemprop=\"text\">\\[<br/> \\begin{array}{|l|l|l|}<br/> \\hline<br/> \\text{Parameter} &amp; \\text{Value} &amp; \\text{Power of 2 Notation} \\\\<br/> \\hline<br/> \\text{Block Size ( $B$ )} &amp; 16\\ \\text{kB} &amp; 16 \\times 2^{10} = 2^4 \\times 2^{10} = 2^{14}\\ \\text{bytes} \\\\<br/> \\hline<br/> \\text{Address Size ( $A$ )} &amp; 64\\ \\text{bits} &amp; 8\\ \\text{bytes} = 2^3\\ \\text{bytes} \\\\<br/> \\hline<br/> \\text{Pointers per Block ( $N_p$ )} &amp; 2^{11} &amp; \\frac{2^{14}}{2^3} = 2^{11} \\\\<br/> \\hline<br/> \\text{Target Unit (TB)} &amp; 1\\ \\text{TB} &amp; 2^{40}\\ \\text{bytes} \\\\<br/> \\hline<br/> \\end{array}<br/> \\]<br/> <br/> $\\text { The total number of data blocks addressed is } N_{\\text {total }}=N_{\\text {Direct }}+N_{\\text {SI }}+N_{\\text {T1 }} \\text {. }$<br/> <br/> <br/> <br/> \\[<br/> \\begin{array}{|l|l|l|}<br/> \\hline<br/> \\text{Pointer Type} &amp; \\text{Calculation in } 2^n &amp; \\text{Total Blocks } (2^n) \\\\<br/> \\hline<br/> \\text{DIRECT} &amp; 10 &amp; 10 \\\\<br/> \\hline<br/> \\text{SINGLE-INDIRECT} &amp; 2 \\times N_p = 2^1 \\times 2^{11} &amp; 2^{12} \\\\<br/> \\hline<br/> \\text{TRIPLE-INDIRECT} &amp; 1 \\times N_p \\times N_p \\times N_p &amp; 2^{11} \\times 2^{11} \\times 2^{11} = 2^{33}\\\\<br/> \\hline<br/> \\end{array}<br/> \\]<br/> <br/> <br/> <br/> The total blocks are $N_{\\text {total }}=10+2^{12}+2^{33}$. Since $2^{33}$ is orders of magnitude larger than the other two terms, we approximate the maximum size using only the triple-indirect contribution.<br/> <br/> $$<br/> \\begin{gathered}<br/> S_{\\text {file, } \\max } \\approx \\frac{N_{\\mathrm{TI}} \\times B}{\\mathrm{~TB}} \\\\\\\\<br/> S_{\\text {file, } \\max } \\approx \\frac{2^{33} \\times 2^{14} \\mathrm{bytes}}{2^{40} \\mathrm{bytes}} \\\\\\\\<br/> S_{\\text {file, } \\max } \\approx \\frac{2^{(33+14)}}{2^{40}}=\\frac{2^{47}}{2^{40}}=2^7 \\mathrm{~TB} \\\\<br/> 2^7=128<br/> \\end{gathered}<br/> $$<br/> <br/> Bcz $\\left(2^{\\wedge} 12^* 2^{\\wedge} 14 / 2^{\\wedge} 40\\right)=2^{\\wedge}-14=0.00006$ (will contribute zero to 2 decimal places)</div><br><br><small>Source: <a href=\"https://gateoverflow.in/503040/go-classes-dpp-os-i-node\" target=\"_blank\">GATE Overflow #503040</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider a file system utilizing a <strong>FAT (File Allocation Table)</strong> where the <strong>overhead</strong> associated with each entry in the <strong>FAT</strong> is $\\mathbf{4}$ <strong>bytes</strong>. If the file system is deployed on a massive $2 \\times 10^{12}$ <strong>bytes</strong> disk and the data block size is set to $8 \\times 10^3$ <strong>bytes</strong>, determine the <strong>maximum possible file size</strong> that can be stored on this disk in units of <strong>TB (Terabytes).</strong> (Note: $1 \\mathrm{~TB}=10^{12}$ bytes).</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$1.999$<br/></span>",
                "<span style=\"display: inline;\">$1999$<br/></span>",
                "<span style=\"display: inline;\">$2.3$<br/></span>",
                "<span style=\"display: inline;\">$1.898$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"503038\"></a><div itemprop=\"text\"><ul><li><strong>Disk Size ( $D$ ) :</strong> $2 \\times 10^{12}$ bytes<br/> </li><li><strong>Data Block Size</strong> $(B): 8 \\times 10^3=8000$ bytes<br/> </li><li><strong>FAT Entry Overhead</strong> ( $O_{\\text {FAT }}$ ): 4 bytes<br/> </li><li><strong>Requested Unit: </strong>TB ( $10^{12}$ bytes)<br/> </li></ul><p><strong>CALCULATION:</strong></p><p>$$<br/>\\begin{aligned}<br/>&amp; S_{\\text {file }, \\max }=\\left(\\frac{2 \\times 10^{12}}{4+8000}\\right) \\times 8000 \\text { bytes } \\\\\\\\<br/>&amp; S_{\\text {file, } \\max } \\approx 1,999,000,499,750.1 \\text { bytes }<br/>\\end{aligned}<br/>$$</p><p><br/><strong>RESULT (in TB or $10^{12}$ bytes):</strong></p><p>$$<br/>\\frac{1,999,000,499,750.1}{10^{12}} \\approx 1.9990<br/>$$</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/503037/go-classes-dpp-os-file-system\" target=\"_blank\">GATE Overflow #503037</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>A <strong>FAT (File Allocation Table)</strong> based file system is being used. The <strong>total overhead</strong> of each entry in the <strong>FAT</strong> is $\\mathbf{8 ~bytes}$ in size. Given a $50 \\times 10^9 ~\\textbf{bytes}$ disk on which the file system is stored and a data block size of $4 \\times 10^3~\\textbf{byte}$, the <strong>maximum size of a file</strong> that can be stored on this disk in units of <strong>MB (Megabytes)</strong> is $\\_\\_\\_\\_$ . (Note: $1 ~\\mathrm{MB}=10^6~\\text{bytes}$).</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$49900$<br/></span>",
                "<span style=\"display: inline;\">$51000$<br/></span>",
                "<span style=\"display: inline;\">$4990$<br/></span>",
                "<span style=\"display: inline;\">$5100$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"503036\"></a><div itemprop=\"text\"><ul><li><strong>Disk Size ( $D$ ) :</strong> $50 \\times 10^9$ bytes<br/> </li><li><strong>Data Block Size </strong>$(B): 4 \\times 10^3=4000$ bytes<br/> </li><li><strong>FAT Entry Overhead</strong> ( $O_{\\mathrm{FAT}}$ ): 8 bytes<br/> </li><li><strong>Requested Unit: </strong>MB ( $10^6$ bytes)<br/> </li></ul><p><strong>CALCULATION:</strong></p><p>$$<br/>\\begin{aligned}<br/>S_{\\text {file, } \\max } &amp; =\\left(\\frac{50 \\times 10^9}{8+4000}\\right) \\times 4000 \\text { bytes } \\\\\\\\<br/>S_{\\text {file, } \\max } &amp; \\approx 49,900,199,600.8 \\text { bytes }<br/>\\end{aligned}<br/>$$</p><p><br/><strong>RESULT (in MB or $10^6$ bytes):</strong></p><p>$$<br/>\\frac{49,900,199,600.8}{10^6} \\approx 49900.20<br/>$$</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/503035/go-classes-dpp-os-file-system\" target=\"_blank\">GATE Overflow #503035</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider a disk pack with $\\mathbf{8 ~surfaces, 512 ~tracks ~per ~surface}$, and $\\mathbf{512 ~sectors ~per ~track}$. Each sector stores $\\mathbf{2 ~Kbytes}$ of data. The disk rotates at $\\mathbf{6000 ~Revolutions ~Per ~Minute (RPM).}$</p><p>The <strong>total capacity</strong> of the disk pack (in $\\textbf{Mbyte}$) and the <strong>maximum instantaneous data transfer rate </strong>(in $\\textbf{Mbytes/sec}$) are respectively:<br/> </p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$4096 ~\\text{Mbyte}, 100 ~\\text{Mbytes/sec}$<br/></span>",
                "<span style=\"display: inline;\">$1024 ~\\text{Mbyte}, 20 ~\\text{Mbytes/sec}$<br/></span>",
                "<span style=\"display: inline;\">$2048 ~\\text{Mbyte}, 10 ~\\text{Mbytes/sec}$<br/></span>",
                "<span style=\"display: inline;\">$2048 ~\\text{Mbyte}, 100 ~\\text{Mbytes/sec}$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"502345\"></a><div itemprop=\"text\">\\begin{aligned}<br/> &amp; \\text { Capacity (in bytes) }=8 \\times 512 \\times 512 \\times 2048 \\\\\\\\<br/> &amp; \\text { Capacity (in bytes) }=2^3 \\times 2^9 \\times 2^9 \\times 2^{11} \\\\\\\\<br/> &amp; \\text { Capacity (in bytes) }=2^{(3+9+9+11)}=2^{32} \\text { bytes } \\\\\\\\<br/> &amp; \\text { Capacity (in Mbyte) }=2^{12} \\text { Mbyte }=4096 \\text { Mbyte } \\\\\\\\<br/> &amp; r=6000 \\text { RPM }=\\frac{6000}{60} \\text { RPS }=100 \\text { Revolutions per Second }\\\\\\\\<br/> &amp; \\text { Bytes per Track }=\\frac{\\text { Sectors }}{\\text { Track }} \\times \\frac{\\text { Bytes }}{\\text { Sector }} \\\\\\\\<br/> &amp; B_T=512 \\text { sectors } / \\text { track } \\times 2048 \\text { bytes } / \\text { sector } \\\\\\\\<br/> &amp; B_T=2^9 \\times 2^{11} \\text { bytes }=2^{20} \\text { bytes } \\\\\\\\<br/> &amp; R_{\\text {data }}=\\frac{100 \\times 2^{20} \\text { bytes } / \\mathrm{sec}}{2^{20} \\text { bytes } / \\mathrm{Mbyte}} \\\\\\\\<br/> &amp; R_{\\text {data }}=\\mathbf{1 0 0 ~ M b y t e s} / \\mathrm{sec}<br/> \\end{aligned}</div><br><br><small>Source: <a href=\"https://gateoverflow.in/502343/go-classes-dpp-os-disk\" target=\"_blank\">GATE Overflow #502343</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider a disk pack with $\\mathbf{10 ~surfaces, 256 ~tracks ~per ~surface}$, and $\\mathbf{512 ~sectors ~per ~track.}$<br/>$\\mathbf{1024 ~bytes}$ of data are stored in a bit serial manner in a sector. The capacity of the disk pack and the number of bits required to specify a particular sector in the disk are respectively:<br/> </p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$1280 ~\\text{Mbyte}, 21 ~\\text{bits}$<br/></span>",
                "<span style=\"display: inline;\">$1280 ~\\text{Mbyte}, 20 ~\\text{bits}$<br/></span>",
                "<span style=\"display: inline;\">$512 ~\\text{Mbyte}, 20 ~\\text{bits}$<br/></span>",
                "<span style=\"display: inline;\">$640 ~\\text{Mbyte}, 19 ~\\text{bits}$</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"502341\"></a><div itemprop=\"text\"><p>Capacity (in bytes) $=10 \\times 256 \\times 512 \\times 1024$</p><p>Capacity (in bytes) $=10 \\times 2^8 \\times 2^9 \\times 2^{10}$</p><p>Capacity (in bytes) $=10 \\times 2^{27} ~\\text{bytes}$<br/><br/>Capacity (in Mbyte) = $\\mathbf{1 2 8 0} ~\\text{Mbyte}$<br/> </p><p><strong>Bits for Surfaces</strong> $(S=10)$ : $\\text{Bits}_{\\text {Surface }}=\\left\\lceil\\log _2(10)\\right\\rceil=\\mathbf{4} ~\\text{bits}$ (since $2^3=8$ is too small, and $2^4=16$ is sufficient).<br/><br/><strong>Bits for Tracks</strong> $(T=256)$ : $\\text{Bits}_{\\text {Track }}=\\log _2(256)=\\mathbf{8} ~\\text{bits}$ (since $2^8=256$ ).<br/><br/><strong>Bits for Sectors</strong> $(R=512)$ : $\\text{Bits}_{\\text {Sector }}=\\log _2(512)=\\mathbf{9} ~\\text{bits}$ (since $2^9=512$ ).<br/> </p><p>Total Bits $=4+8+9=\\mathbf{21} ~\\text{bits}$</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/502340/go-classes-dpp-os-disk\" target=\"_blank\">GATE Overflow #502340</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider a disk system with $200$ cylinders, numbered $0$ to $199$ . The requests to access the cylinders occur in the following sequence:</p><p>$$<br/>82,170,43,140,24,16,190<br/>$$</p><p><br/>Assuming the head is currently at cylinder $50$ and is initially moving towards the <strong>higher</strong> cylinder numbers (the $199$ end), what is the total head movement required to satisfy all requests using the <strong>SCAN</strong> disk scheduling policy?</p></div></span>",
            "image": "",
            "options": [],
            "answer": "332",
            "solution": "<div class=\"solution-content\"><a name=\"501815\"></a><div itemprop=\"text\"><p><strong>Explanation:</strong> move from $50$ to $199$ : total no of movements $= 199-50=149$<br/><br/>Move from $199$ to $16$ : total no of movements $= 199-16= 183$<br/><br/>Total no of movements $=149+183=332$</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/501814/go-classes-dpp-os-disk-scheduling\" target=\"_blank\">GATE Overflow #501814</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider a disk system with $200$ cylinders. The requests to access the cylinders occur in the following sequence:</p><p>$$<br/>55,58,39,18,90,160,150,38,184<br/>$$</p><p><br/>Assuming that the head is currently at cylinder $100$, what is the time taken to satisfy all requests if it takes $1 ~\\text{ms}$ to move from one cylinder to an adjacent one and the <strong>Shortest Seek Time First (SSTF)</strong> policy is used?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$240 ~\\text{ms}$<br/></span>",
                "<span style=\"display: inline;\">$248 ~\\text{ms}$<br/></span>",
                "<span style=\"display: inline;\">$256 ~\\text{ms}$<br/></span>",
                "<span style=\"display: inline;\">$235 ~\\text{ms}$</span>"
            ],
            "answer": "B",
            "solution": "<div class=\"solution-content\"><a name=\"501812\"></a><div itemprop=\"text\"><p>$100 \\rightarrow 90 \\rightarrow 58 \\rightarrow 55 \\rightarrow 39 \\rightarrow 38 \\rightarrow 18 \\rightarrow 150 \\rightarrow 160 \\rightarrow 184$<br/> </p><ul><li><strong>Total Head Movement</strong> = Sum of all distances<br/> </li><li>$10+32+3+16+1+20+132+10+24=\\mathbf{2 4 8}$ cylinders<br/> </li><li><strong>Total Time</strong> $=$ Total Movement × Time per cylinder<br/> </li><li>$248 \\times 1 \\mathrm{~ms}=248 \\mathrm{~ms}$<br/> </li></ul><p>The correct option is <strong>B.</strong> $248 \\mathrm{~ms}$</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/501811/go-classes-dpp-os-disk-scheduling\" target=\"_blank\">GATE Overflow #501811</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>A disk of size $\\textbf{1024 M}$ bytes is divided into blocks of $\\textbf{32 K}$ bytes. A file is stored in the disk using <strong>linked allocation</strong>. In linked allocation, each data block reserves $\\textbf{8 bytes}$ to store the pointer to the next data block. The link part of the last data block contains a NULL pointer (also of $\\text{8 bytes}$).</p><p>Suppose a file of $\\mathbf{4 ~M}$ bytes needs to be stored in the disk. Assume, $1 \\mathrm{~K}=2^{10}$ and $1 \\mathrm{~M}=2^{20}$.</p><p>The <strong>total number of disk blocks</strong> that will be allocated to store this file is $\\_\\_\\_\\_$ . Answer in integer)</p></div></span>",
            "image": "",
            "options": [],
            "answer": "4194304",
            "solution": "<div class=\"solution-content\"><a name=\"501367\"></a><div itemprop=\"text\"><p>The Block Size $(B)$ is $32 ~\\text{K}$ bytes, and the Pointer Size $(P)$ is $8$ bytes.</p><ul><li>Convert 32 K to bytes: $32 \\mathrm{~K}=32 \\times 2^{10}=32768$ bytes.<br/> </li><li>Usable Data Space ( $D$ ):</li></ul><p>$$<br/>D=B-P=32768 \\text { bytes }-8 \\text { bytes }=32760 \\text { bytes }<br/>$$</p><p><br/>The File Size $(F)$ is 4 M bytes.</p><ul><li>Convert 4 M to bytes: $4 \\mathrm{M}=4 \\times 2^{20}=4194304$ bytes.<br/> </li><li>The total number of blocks needed ( $N$ ) is the ceiling of (File Size / Usable Data Space):</li></ul><p><br/>$$<br/>\\begin{gathered}<br/>N=\\left\\lceil\\frac{F}{D}\\right\\rceil=\\left\\lceil\\frac{4194304}{32760}\\right\\rceil \\\\\\\\<br/>N \\approx\\lceil 128.0156\\rceil \\\\\\\\<br/>\\mathbf{N}=\\mathbf{1 2 9} \\text { blocks }<br/>\\end{gathered}<br/>$$</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/501365/go-classes-dpp-os-linked-allocation\" target=\"_blank\">GATE Overflow #501365</a></small></div>"
        }
    ]
});

registerTest({
    "name": "DPP 39 - Operating System (File Systems & Disk Scheduling - Part 7)",
    "testLabel": "DPP 39",
    "testType": "DPP",
    "bracket": "File Systems & Disk Scheduling - Part 7",
    "subject": "os",
    "series": "cse-dpp-2027",
    "date": "Nov 03, 2026",
    "duration": "15 Min",
    "totalMarks": 2,
    "topicsCovered": "File Systems & Disk Scheduling (Practice Set 7)",
    "questions": [
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>A disk pack has the following specifications:</p><p>Calculate:<br/>(a) The total capacity of the disk in GB.<br/>(b) The number of bits required to uniquely address any sector.</p><p><strong>Given Details:</strong></p><ul><li>$8$ platters ( $16$ recording surfaces)</li><li>$256$ cylinders</li><li>$128$ sectors per track</li><li>$1$ KB per sector ($1024$ bytes)</li></ul></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$0.5 \\mathrm{~GB}, 19$ bits</span>",
                "<span style=\"display: inline;\">$1 \\mathrm{~GB}, 20$ bits</span>",
                "<span style=\"display: inline;\">$2 \\mathrm{~GB}, 21$ bits</span>",
                "<span style=\"display: inline;\">$4 \\mathrm{~GB}, 22$ bits</span>"
            ],
            "answer": "A",
            "solution": "<div class=\"solution-content\"><a name=\"500703\"></a><div itemprop=\"text\"><ul><li>Surfaces $=16 \\rightarrow \\log _2 16=4$ bits<br/> </li><li>Tracks per surface $=256 \\rightarrow \\log _2 256=8$ bits<br/> </li><li>Sectors per track $=128 \\rightarrow \\log _2 128=7$ bits<br/> </li><li>Sector size $=1 \\mathrm{~KB}=1024$ bytes</li></ul><p>Total sectors $=16 \\times 256 \\times 128=524,288$ sectors<br/><br/>Capacity $=524288 \\times 1024$ bytes $=536,870,912$ bytes $=0.5 \\mathrm{~GB}$<br/><br/>Bits to address a sector $=4+8+7=19$ bits</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/500702/go-classes-dpp-os-disk\" target=\"_blank\">GATE Overflow #500702</a></small></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>A Unix-style i-node has the following pointers:</p><p>The disk block size is $2^{14}$ bytes ($16384$ bytes).<br/><br/>A disk block address is $64$ bits ($8$ bytes).<br/><br/>File offsets and file sizes use $64$-bit integers.</p><p>What is the maximum possible file size in bytes?</p><p> </p><p><strong>Given Details:</strong></p><ul><li>$12$ direct pointers</li><li>$1$ single indirect pointer</li><li>$1$ double indirect pointer</li><li>$1$ triple indirect pointer</li></ul></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$2^{46}$ bytes</span>",
                "<span style=\"display: inline;\">$2^{47}$ bytes</span>",
                "<span style=\"display: inline;\">$2^{48}$ bytes</span>",
                "<span style=\"display: inline;\">$2^{50}$ bytes</span>"
            ],
            "answer": "B",
            "solution": "<div class=\"solution-content\"><a name=\"500698\"></a><div itemprop=\"text\"><ul><li>Addresses per block $p=\\frac{2^{14}}{2^3}=2^{11}$<br/> </li><li>Direct: $12 \\times 2^{14}$ bytes<br/> </li><li>Single indirect: $2^{11} \\times 2^{14}=2^{25}$ bytes<br/> </li><li>Double indirect: $\\left(2^{11}\\right)^2 \\times 2^{14}=2^{22} \\times 2^{14}=2^{36}$ bytes<br/> </li><li>Triple indirect: $\\left(2^{11}\\right)^3 \\times 2^{14}=2^{33} \\times 2^{14}=2^{47}$ bytes</li></ul><p>Largest term $=2^{47}$ bytes, so maximum possible file size $\\approx 2^{47}$ bytes.<br/><br/>Answer: B. $2^{47}$ bytes</p></div><br><br><small>Source: <a href=\"https://gateoverflow.in/500697/go-classes-dpp-os-i-node\" target=\"_blank\">GATE Overflow #500697</a></small></div>"
        }
    ]
});
