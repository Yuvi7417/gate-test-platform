registerTest({
    series: "cse-gate-2027",
    name: "TWT-Operating System(CPU Scheduling-II)",
    date: "sep 08, 2026",
    topicsCovered: "Round Robin Scheduling, Time Quantum, SRTF, Preemptive Scheduling, Real-time Tasks",
    questions: [
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">In which one of the following page replacement policies, Belady's anomaly may occur?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">FIFO</span>`,
                `<span style="display: inline;">Optimal</span>`,
                `<span style="display: inline;">LRU</span>`,
                `<span style="display: inline;">MRU</span>`
            ],
            answer: "A",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/1301/gate2009-9-isro2016-52" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/isro-cse-2016" style="color:#2f6d1a; text-decoration:none" target="_blank">ISRO CSE 2016</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">For the real time operating system, which of the following is the most suitable scheduling scheme?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">Round robin</span>`,
                `<span style="display: inline;">First come first serve</span>`,
                `<span style="display: inline;">Pre-emptive</span>`,
                `<span style="display: inline;">Random scheduling</span>`
            ],
            answer: "C",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/56038/isro2016-51" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/isro-cse-2016" style="color:#2f6d1a; text-decoration:none" target="_blank">ISRO CSE 2016</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 2,
            neg: 0,
            type: "NAT",
            text: `<span style="display: inline;">Consider the following processes, with the arrival time and the length of the CPU burst given in milli seconds.The scheduling algorithm used is preemptive shortest remaining-time first.<br/><img src="images/pyq-os/q47.jpg"/><br/> The average turn around time of these processes is milliseconds.</span>`,
            image: "",
            options: [
            ],
            answer: "8.2:8.3",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/39625/gate2016-2-47#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2016-set-2" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2016 SET-2</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Consider an arbitrary set of CPU-bound processes with unequal CPU burst lengths submitted at the same time to a computer system.Which one of the following process scheduling algorithms would minimize the average waiting time in the ready queue?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">Shortest remaining time first</span>`,
                `<span style="display: inline;">Round-robin with time quantum less than the shortest CPU burst</span>`,
                `<span style="display: inline;">Uniform random</span>`,
                `<span style="display: inline;">Highest priority first with priority proportional to CPU burst length</span>`
            ],
            answer: "A",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/39655/gate2016-1-20#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2016-set-1" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2016 SET-1</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Suppose two jobs, each of which needs 10 minutes of CPU time, start simultaneously. Assume 50% I/O wait time. How long will it take for both to complete, if they run sequentially?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">10</span>`,
                `<span style="display: inline;">20</span>`,
                `<span style="display: inline;">30</span>`,
                `<span style="display: inline;">40</span>`
            ],
            answer: "D",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/19455/isro2015-38" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/isro-cse-2015" style="color:#2f6d1a; text-decoration:none" target="_blank">ISRO CSE 2015</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">In a lottery scheduler with 40 tickets, how we will distribute the tickets among 4 processes P1,P2,P3 and P4 such that each process gets 10%, 5%, 60% and 25% respectively?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">P1-12, P2-4, P3-70, P4-30</span>`,
                `<span style="display: inline;">P1-7, P2-5, P3-20, P4-10</span>`,
                `<span style="display: inline;">P1-4, P2-2, P3-24, P4-10</span>`,
                `<span style="display: inline;">P1-8, P2-5, P3-30, P4-40</span>`
            ],
            answer: "C",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/51218/isro2015-32" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/isro-cse-2015" style="color:#2f6d1a; text-decoration:none" target="_blank">ISRO CSE 2015</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 2,
            neg: 0.66,
            type: "MCQ",
            text: `<span style="display: inline;">For the processes listed in the following table, which of the following scheduling schemes will give the lowest average turnaround time? <br/><img src="images/pyq-os/q47.jpg"/></span>`,
            image: "",
            options: [
                `<span style="display: inline;">First Come First Serve</span>`,
                `<span style="display: inline;">Non-preemptive Shortest Job First</span>`,
                `<span style="display: inline;">Shortest Remaining Time</span>`,
                `<span style="display: inline;">Round Robin with Quantum value two</span>`
            ],
            answer: "C",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/8492/gate2015-3-47#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2015-set-3" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2015 SET-3</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 2,
            neg: 0,
            type: "NAT",
            text: `<span style="display: inline;">Consider a uniprocessor system executing three tasks T1, T2 and T3, each of which is composed of an infinite sequence of jobs (or instances) which arrive periodically at intervals of 3, 7 and 20 milliseconds, respectively. The priority of each task is the inverse of its period, and the available tasks are scheduled in order of priority, with the highest priority task scheduled first. Each instance of T1, T2 and T3 requires an execution time of 1, 2 and 4 milliseconds, respectively. Given that all tasks initially arrive at the beginning of the 1st millisecond and task preemptions are allowed, the first instance of T3 completes its execution at the end of _____________ milliseconds.</span>`,
            image: "",
            options: [
            ],
            answer: "12",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/8330/gate2015-1-42#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2015-set-1" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2015 SET-1</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Which of the following is not an optimization criterion in the design of a CPU scheduling algorithm?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">Minimum CPU utilization</span>`,
                `<span style="display: inline;">Maximum throughput</span>`,
                `<span style="display: inline;">Minimum turnaround time</span>`,
                `<span style="display: inline;">Minimum waiting time</span>`
            ],
            answer: "A",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/55094/isro2014-78" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/isro-cse-2014" style="color:#2f6d1a; text-decoration:none" target="_blank">ISRO CSE 2014</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 2,
            neg: 0,
            type: "NAT",
            text: `<span style="display: inline;">An operating system uses shortest remaining time first scheduling algorithm for pre-emptive scheduling of processes. Consider the following set of processes with their arrival times and CPU burst times (in milliseconds): <br/><img src="images/pyq-os/q32.jpg"/><br/> The average waiting time (in milliseconds) of the processes is _________.</span>`,
            image: "",
            options: [
            ],
            answer: "5.5",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/2066/gate2014-3-32#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2014-set-3" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2014 SET-3</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 2,
            neg: 0,
            type: "NAT",
            text: `<span style="display: inline;">Three processes A, B and C each execute a loop of 100 iterations. In each iteration of the loop, a process performs a single computation that requires <span>\\( t_{c} \\)</span> CPU milliseconds and then initiates a single I/O operation that lasts for <span>\\( t_{io} \\)</span> milliseconds. It is assumed that the computer where the processes execute has sufficient number of I/O devices and the OS of the computer assigns different I/O devices to each process. Also, the scheduling overhead of the OS is negligible. The processes have the following characteristics: <br/><img src="images/pyq-os/20142_q32.jpg"/> <br/> The processes A, B, and C are started at times 0, 5 and 10 milliseconds respectively, in a pure time sharing system (round robin scheduling) that uses a time slice of 50 milliseconds. The time in milliseconds at which process C would complete its first I/O operation is ___________.</span>`,
            image: "",
            options: [
            ],
            answer: "1000",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/1991/gate2014-2-32#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2014-set-2" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2014 SET-2</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 2,
            neg: 0,
            type: "NAT",
            text: `<span style="display: inline;">Consider the following set of processes that need to be scheduled on a single CPU. All the times are given in milliseconds <br/><img src="images/pyq-os/20141_q32.jpg"/> <br/> Using the shortest remaining time first scheduling algorithm, the average process turnaround time (in msec) is ________.</span>`,
            image: "",
            options: [
            ],
            answer: "7.2",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/1803/gate2014-1-32#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2014-set-1" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2014 SET-1</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Which of the following strategy is employed for overcoming the priority inversion problem?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">Temporarily raise the priority of lower priority level process</span>`,
                `<span style="display: inline;">Have a fixed priority level scheme.</span>`,
                `<span style="display: inline;">Implement Kernel pre-emption scheme.</span>`,
                `<span style="display: inline;">Allow lower priority process to complete its job.</span>`
            ],
            answer: "A",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/45658/isro-2013-70" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/isro-cse-2013" style="color:#2f6d1a; text-decoration:none" target="_blank">ISRO CSE 2013</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">A particular parallel program computation requires 100 seconds when executed on a single CPU. If 20% of this computation is strictly sequential, then theoretically the best possible elapsed times for this program running on 2 CPUs and 4 CPUs respectively are</span>`,
            image: "",
            options: [
                `<span style="display: inline;">55 and 45 seconds</span>`,
                `<span style="display: inline;">80 and 20 seconds</span>`,
                `<span style="display: inline;">75 and 25 seconds</span>`,
                `<span style="display: inline;">60 and 40 seconds</span>`
            ],
            answer: "D",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/44830/isro-2013-62" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/isro-cse-2013" style="color:#2f6d1a; text-decoration:none" target="_blank">ISRO CSE 2013</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">A starvation free job scheduling policy guarantees that no job indefinitely waits for a service. Which of the following job scheduling policies is starvation free?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">Priority queing</span>`,
                `<span style="display: inline;">Shortest job first</span>`,
                `<span style="display: inline;">Youngest job first</span>`,
                `<span style="display: inline;">Round robin</span>`
            ],
            answer: "D",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/44405/isro-2013-59" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/isro-cse-2013" style="color:#2f6d1a; text-decoration:none" target="_blank">ISRO CSE 2013</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
    ]
});

registerTest({
    series: "cse-gate-2027",
    name: "TWT-Operating System(CPU Scheduling-III)",
    date: "sep 08, 2026",
    topicsCovered: "Scheduling Criteria, Turnaround Time, Waiting Time, Response Time, Priority Scheduling",
    questions: [
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">A CPU scheduling algorithm determines an order for the execution of its scheduled processes. Given <span>\\( 'n' \\)</span> processes to be scheduled on one processor, how many possible different schedules are there?</span>`,
            image: "",
            options: [
                `<span style="display: inline;"><span>\\( n \\)</span></span>`,
                `<span style="display: inline;"><span>\\( n^{2} \\)</span></span>`,
                `<span style="display: inline;"><span>\\( n! \\)</span></span>`,
                `<span style="display: inline;"><span>\\( 2^{n} \\)</span></span>`
            ],
            answer: "C",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/44399/isro-2013-53" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/isro-cse-2013" style="color:#2f6d1a; text-decoration:none" target="_blank">ISRO CSE 2013</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Consider the following set of processes, with arrival times and the required CPU-burst times given in milliseconds.<br/> <span>\\( \\begin{array}{|l|l|l|l|} \\hline \\textbf{Process} &amp; \\textbf{Arrival time} &amp; \\textbf{Burst Time} \\\\\\hline \\text{$P_1$} &amp; \\text{0} &amp; \\text{4} \\\\\\hline \\text{$P_2$} &amp; \\text{2} &amp; \\text{2} \\\\\\hline \\text{$P_3$}&amp; \\text{3} &amp; \\text{1} \\\\\\hline \\end{array} \\)</span><br/> What is the sequence in which the processes are completed? Assume round robin scheduling with a time quantum of 2 milliseconds?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">P1, P2, P3</span>`,
                `<span style="display: inline;">P2, P1, P3</span>`,
                `<span style="display: inline;">P3, P2, P1</span>`,
                `<span style="display: inline;">P2, P3, P1</span>`
            ],
            answer: "B",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/44166/isro-2013-50" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/isro-cse-2013" style="color:#2f6d1a; text-decoration:none" target="_blank">ISRO CSE 2013</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">A scheduling algorithm assigns priority proportional to the waiting time of a process. Every process starts with priority zero (the lowest priority). The scheduler re-evaluates the process priorities every T time units and decides the next process to schedule. Which one of the following is TRUE if the processes have no I/O operations and all arrive at time zero?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">This algorithm is equivalent to the first-come-first-serve algorithm.</span>`,
                `<span style="display: inline;">This algorithm is equivalent to the round-robin algorithm.</span>`,
                `<span style="display: inline;">This algorithm is equivalent to the shortest-job-first algorithm.</span>`,
                `<span style="display: inline;">This algorithm is equivalent to the shortest-remaining-time-first algorithm.</span>`
            ],
            answer: "B",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/1419/gate2013-10#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2013" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2013</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 2,
            neg: 0.66,
            type: "MCQ",
            text: `<span style="display: inline;">Consider the 3 processes, P1, P2 and P3 shown in the table. <br/><img src="images/pyq-os/20121_q31.jpg"/><br/> The completion order of the 3 processes under the policies FCFS and RR2 (round robin scheduling with CPU quantum of 2 time units) are</span>`,
            image: "",
            options: [
                `<span style="display: inline;">FCFS: P1, P2, P3 RR2: P1, P2, P3</span>`,
                `<span style="display: inline;">FCFS: P1, P3, P2 RR2: P1, P3, P2</span>`,
                `<span style="display: inline;">FCFS: P1, P2, P3 RR2: P1, P3, P2</span>`,
                `<span style="display: inline;">FCFS: P1, P3, P2 RR2: P1, P2, P3</span>`
            ],
            answer: "C",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/1749/gate2012-31#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2012" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2012</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">In a system using single processor, a new process arrives at the rate of six processes per minute and each such process requires seven seconds of service time. What is the CPU utilization?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">70%</span>`,
                `<span style="display: inline;">30%</span>`,
                `<span style="display: inline;">60%</span>`,
                `<span style="display: inline;">64%</span>`
            ],
            answer: "A",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/53151/isro2011-77" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/isro-cse-2011" style="color:#2f6d1a; text-decoration:none" target="_blank">ISRO CSE 2011</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Belady's anomaly means</span>`,
            image: "",
            options: [
                `<span style="display: inline;">Page fault rate is constant even on increasing the number of allocated frames</span>`,
                `<span style="display: inline;">Page fault rate may increase on increasing the number of allocated frames</span>`,
                `<span style="display: inline;">Page fault rate may increase on decreasing the number of allocated frames</span>`,
                `<span style="display: inline;">Page fault rate may decrease on increasing the number of allocated frames</span>`
            ],
            answer: "B",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/52871/isro2011-73" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/isro-cse-2011" style="color:#2f6d1a; text-decoration:none" target="_blank">ISRO CSE 2011</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Below is the precedence graph for a set of tasks to be executed on a parallel processing system S.<br/><img src="images/pyq-os/20113_q10.jpg"/><br/> What is the efficiency of this precedence graph on S if each of the tasks <span>\\( T_1, \\dots, T_8 \\)</span> takes the same time and the system S has five processors?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">25%</span>`,
                `<span style="display: inline;">40%</span>`,
                `<span style="display: inline;">50%</span>`,
                `<span style="display: inline;">90%</span>`
            ],
            answer: "B",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/52258/isro2011-10" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/isro-cse-2011" style="color:#2f6d1a; text-decoration:none" target="_blank">ISRO CSE 2011</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">The following table shows the processes in the ready queue and time required for each process for completing its job.<br/><br/><span>\\( \\begin{array}{ll} \\text { Process } &amp; \\text { Time } \\\\ P_{1} &amp; 10 \\\\ P_{2} &amp; 5 \\\\ P_{3} &amp; 20 \\\\ P_{4} &amp; 8 \\\\ P_{5} &amp; 15 \\end{array} \\)</span><br/><br/>If round-robin scheduling with 5 ms is used what is the average waiting time of the processes in the queue?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">27 ms</span>`,
                `<span style="display: inline;">26.2 ms</span>`,
                `<span style="display: inline;">27.5 ms</span>`,
                `<span style="display: inline;">27.2 ms</span>`
            ],
            answer: "B",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/51328/isro2011-4" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/isro-cse-2011" style="color:#2f6d1a; text-decoration:none" target="_blank">ISRO CSE 2011</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 2,
            neg: 0.66,
            type: "MCQ",
            text: `<span style="display: inline;">Consider the following table of arrival time and burst time for three processes P0, P1 and P2. <br/><img src="images/pyq-os/20111_q46.jpg"/> <br/> The pre-emptive shortest job first scheduling algorithm is used. Scheduling is carried out only at arrival or completion of processes. What is the average waiting time for the three processes?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">5ms</span>`,
                `<span style="display: inline;">4.33ms</span>`,
                `<span style="display: inline;">6.33ms</span>`,
                `<span style="display: inline;">7.33ms</span>`
            ],
            answer: "A",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/2137/gate2011-35#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2011" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2011</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Which of the following statements are true? <br/> I. Shortest remaining time first scheduling may cause starvation <br/> II. Preemptive scheduling may cause starvation <br/> III. Round robin is better than FCFS in terms of response time</span>`,
            image: "",
            options: [
                `<span style="display: inline;">I only</span>`,
                `<span style="display: inline;">I and III only</span>`,
                `<span style="display: inline;">II and III only</span>`,
                `<span style="display: inline;">I, II and III</span>`
            ],
            answer: "D",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/2204/gate2010-25#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2010" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2010</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Consider a set of 5 processes whose arrival time, CPU time needed and the priority are given below:<br/><span>\\( \\begin{array}{llll} \\text { Process Priority } &amp; \\text { Arrival Time (in ms) } &amp; \\text { CPU Time Needed } &amp; \\text { Priority } \\\\ \\text { P1 } &amp; 0 &amp; 10 &amp; 5 \\\\ \\text { P2 } &amp; 0 &amp; 5 &amp; 2 \\\\ \\text { P3 } &amp; 2 &amp; 3 &amp; 1 \\\\ \\text { P4 } &amp; 5 &amp; 20 &amp; 4 \\\\ \\text { P5 } &amp; 10 &amp; 2 &amp; 3 \\end{array} \\)</span><br/>(smaller the number, higher the priority)<br/> If the CPU scheduling policy is priority scheduling without pre-emption, the average waiting time will be</span>`,
            image: "",
            options: [
                `<span style="display: inline;">12.8 ms</span>`,
                `<span style="display: inline;">11.8 ms</span>`,
                `<span style="display: inline;">10.8 ms</span>`,
                `<span style="display: inline;">09,8 ms</span>`
            ],
            answer: "C",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/50342/isro2009-17" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/isro-cse-2009" style="color:#2f6d1a; text-decoration:none" target="_blank">ISRO CSE 2009</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">The performance of Round Robin algorithm depends heavily on</span>`,
            image: "",
            options: [
                `<span style="display: inline;">size of the process</span>`,
                `<span style="display: inline;">the I/O bursts of the process</span>`,
                `<span style="display: inline;">the CPU bursts of the process</span>`,
                `<span style="display: inline;">the size of the time quantum</span>`
            ],
            answer: "D",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/50132/isro2008-66-isro2009-15" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/isro-cse-2009" style="color:#2f6d1a; text-decoration:none" target="_blank">ISRO CSE 2009</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Consider three CPU-intensive processes, which require 10, 20 and 30 time units and arrive at times 0, 2 and 6, respectively. How many context switches are needed if the operating system implements a shortest remaining time first scheduling algorithm? Do not count the context switches at time zero and at the end.</span>`,
            image: "",
            options: [
                `<span style="display: inline;">1</span>`,
                `<span style="display: inline;">2</span>`,
                `<span style="display: inline;">3</span>`,
                `<span style="display: inline;">4</span>`
            ],
            answer: "B",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/885/gate2006-06-isro2009-14" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/isro-cse-2009" style="color:#2f6d1a; text-decoration:none" target="_blank">ISRO CSE 2009</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">The correct matching of the following pairs is<br/><span>\\( \\begin{array}{|l|l|l|l|} \\hline \\text{A.} &amp; \\text{Disk check} &amp; \\text{i.} &amp; \\text{Round robin} \\\\\\hline \\text{B.}&amp; \\text{Batch processing} &amp; \\text{ii.} &amp; \\text{Scan} \\\\\\hline \\text{C.} &amp; \\text{Time sharing} &amp; \\text{iii.} &amp; \\text{LIFO} \\\\\\hline \\text{D.} &amp; \\text{Stack operation} &amp; \\text{iv.} &amp; \\text{FIFO} \\\\\\hline \\end{array} \\)</span></span>`,
            image: "",
            options: [
                `<span style="display: inline;">A-iii, B-iv, C-ii, D-i</span>`,
                `<span style="display: inline;">A-iv, B-iii, C-ii, D-i</span>`,
                `<span style="display: inline;">A-iii, B-iv, C-i, D-ii</span>`,
                `<span style="display: inline;">A-ii, B-iv, C-i, D-iii</span>`
            ],
            answer: "D",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/50327/isro2009-10" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/isro-cse-2009" style="color:#2f6d1a; text-decoration:none" target="_blank">ISRO CSE 2009</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">The performance of Round Robin algorithm depends heavily on</span>`,
            image: "",
            options: [
                `<span style="display: inline;">size of the process</span>`,
                `<span style="display: inline;">the I/O bursts of the process</span>`,
                `<span style="display: inline;">the CPU bursts of the process</span>`,
                `<span style="display: inline;">the size of the time quantum</span>`
            ],
            answer: "D",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/50132/isro2008-66-isro2009-15" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/isro-cse-2008" style="color:#2f6d1a; text-decoration:none" target="_blank">ISRO CSE 2008</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
    ]
});

registerTest({
    series: "cse-gate-2027",
    name: "TWT-Operating System(CPU Scheduling-IV)",
    date: "sep 08, 2026",
    topicsCovered: "Multilevel Feedback Queues, Aging, Context Switching, Preemptive vs Non-Preemptive",
    questions: [

        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">With Round-Robin CPU scheduling in a time shared system</span>`,
            image: "",
            options: [
                `<span style="display: inline;">using very large time slices (quantas) degenerates into First-Come First served (FCFS) algorithm.</span>`,
                `<span style="display: inline;">using extremely small time slices improves performance</span>`,
                `<span style="display: inline;">using very small time slices degenerates into Last-In First-Out (LIFO) algorithm.</span>`,
                `<span style="display: inline;">using medium sized times slices leads to shortest Request time First (SRTF) algorithm</span>`
            ],
            answer: "A",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/49983/isro2008-51" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/isro-cse-2008" style="color:#2f6d1a; text-decoration:none" target="_blank">ISRO CSE 2008</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Feedback queues</span>`,
            image: "",
            options: [
                `<span style="display: inline;">are very simple to implement</span>`,
                `<span style="display: inline;">dispatch tasks according to execution characteristics</span>`,
                `<span style="display: inline;">are used to favour real time tasks</span>`,
                `<span style="display: inline;">require manual intervention to implement properly</span>`
            ],
            answer: "B",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/49632/isro2007-64-isro2008-50" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/isro-cse-2008" style="color:#2f6d1a; text-decoration:none" target="_blank">ISRO CSE 2008</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Four jobs to be executed on a single processor system arrive at time 0 in the order A,B,C,D. Their burst CPU time requirements are 4,1,8,1 time units respectively. The completion time of A under round robin scheduling with time slice of one time unit is</span>`,
            image: "",
            options: [
                `<span style="display: inline;">10</span>`,
                `<span style="display: inline;">4</span>`,
                `<span style="display: inline;">8</span>`,
                `<span style="display: inline;">9</span>`
            ],
            answer: "D",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/2749/gate1996-2-20-isro2008-15" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/isro-cse-2008" style="color:#2f6d1a; text-decoration:none" target="_blank">ISRO CSE 2008</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 2,
            neg: 0.66,
            type: "MCQ",
            text: `<span style="display: inline;">If the time-slice used in the round-robin scheduling policy is more than the maximum time required to execute any process, then the policy will</span>`,
            image: "",
            options: [
                `<span style="display: inline;">degenerate to hortest job first</span>`,
                `<span style="display: inline;">degenerate to priority scheduling</span>`,
                `<span style="display: inline;">degenerate to first come first serve</span>`,
                `<span style="display: inline;">none of the above</span>`
            ],
            answer: "C",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/3365/gate2008-it-55" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-it-2008" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE IT 2008</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Feedback queues</span>`,
            image: "",
            options: [
                `<span style="display: inline;">are very simple to implement</span>`,
                `<span style="display: inline;">dispatch tasks according to execution characteristics</span>`,
                `<span style="display: inline;">are used to favour real time tasks</span>`,
                `<span style="display: inline;">require manual intervention to implement properly</span>`
            ],
            answer: "B",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/49632/isro2007-64-isro2008-50" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/isro-cse-2007" style="color:#2f6d1a; text-decoration:none" target="_blank">ISRO CSE 2007</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">On a system using non-preemptive scheduling, processes with expected run times of 5, 18, 9 and 12 are in the ready queue. In what order should they be run to minimize wait time?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">5, 12, 9, 18</span>`,
                `<span style="display: inline;">5, 9, 12, 18</span>`,
                `<span style="display: inline;">12, 18, 9, 5</span>`,
                `<span style="display: inline;">9, 12, 18, 5</span>`
            ],
            answer: "B",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/49520/isro2007-43" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/isro-cse-2007" style="color:#2f6d1a; text-decoration:none" target="_blank">ISRO CSE 2007</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Round Robin schedule is essentially the pre-emptive version of</span>`,
            image: "",
            options: [
                `<span style="display: inline;">FIFO</span>`,
                `<span style="display: inline;">Shortest job first</span>`,
                `<span style="display: inline;">Shortest remaining time</span>`,
                `<span style="display: inline;">Longest remaining time</span>`
            ],
            answer: "A",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/49488/isro2007-17" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/isro-cse-2007" style="color:#2f6d1a; text-decoration:none" target="_blank">ISRO CSE 2007</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Consider a set of n tasks with known runtimes <span>\\( r_1, r_2, \\dots r_n \\)</span> to be run on a uniprocessor machine. Which of the following processor scheduling algorithms will result in the maximum throughput?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">Round Robin</span>`,
                `<span style="display: inline;">Shortest job first</span>`,
                `<span style="display: inline;">Highest response ratio next</span>`,
                `<span style="display: inline;">first come first served</span>`
            ],
            answer: "B",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/49481/isro2007-11-gate2001-1-19" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/isro-cse-2007" style="color:#2f6d1a; text-decoration:none" target="_blank">ISRO CSE 2007</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">The term 'aging' refers to</span>`,
            image: "",
            options: [
                `<span style="display: inline;">booting up the priority of the process in multi-level of queue without feedback.</span>`,
                `<span style="display: inline;">gradually increasing the priority of jobs that wait in the system for a long time to remedy infinite blocking</span>`,
                `<span style="display: inline;">keeping track of the following a page has been in memory for the purpose of LRU replacement</span>`,
                `<span style="display: inline;">letting job reside in memory for a certain amount of time so that the number of pages required can be estimated accurately.</span>`
            ],
            answer: "B",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/49480/isro2007-10" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/isro-cse-2007" style="color:#2f6d1a; text-decoration:none" target="_blank">ISRO CSE 2007</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">An operating system uses Shortest Remaining Time first (SRT) process scheduling algorithm. Consider the arrival times and execution times for the following processes: <pre style="background-color: #f8f9fa; border: 1px solid #dee2e6; border-radius: 5px; padding: 12px; overflow-x: auto; font-family: monospace; font-size: 14px; margin-top: 10px;"><code> Process  Execution time  Arrival time
P1             20            0
P2             25            15
P3             10            30
P4             15            45</code></pre> What is the total waiting time for process P2?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">5</span>`,
                `<span style="display: inline;">15</span>`,
                `<span style="display: inline;">40</span>`,
                `<span style="display: inline;">55</span>`
            ],
            answer: "B",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/1253/gate2007-55#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2007" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2007</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Group 1 contains some CPU scheduling algorithms and Group 2 contains some applications. Match entries in Group 1 to entries in Group 2. Group I Group II <br/><img src="images/pyq-os/20071_q16.jpg"/></span>`,
            image: "",
            options: [
                `<span style="display: inline;">P - 3 Q - 2 R - 1</span>`,
                `<span style="display: inline;">P - 1 Q - 2 R - 3</span>`,
                `<span style="display: inline;">P - 2 Q - 3 R - 1</span>`,
                `<span style="display: inline;">P - 1 Q - 3 R - 2</span>`
            ],
            answer: "A",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/1214/gate2007-16#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2007" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2007</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">The arrival time, priority, and duration of the CPU and I/O bursts for each of three processes <span>\\( P_1, P_2 \\)</span> and <span>\\( P_3 \\)</span> are given in the table below. Each process has a CPU burst followed by an I/O burst followed by another CPU burst. Assume that each process has its own I/O resource.<br/> <span>\\( \\begin{array}{|c|c|c|c|c|c|} \\hline \\textbf{Process} &amp; \\textbf{Arrival} &amp; \\textbf{Priority}&amp; \\textbf{Burst duration} &amp; \\textbf{Burst duration} &amp; \\textbf{Burst duration) }\\\\&amp; \\textbf{Time} &amp; &amp; \\textbf{(CPU)} &amp; \\textbf{(I/O)} &amp; \\textbf{(CPU) } \\\\\\hline \\text{$P_1$} &amp; 0 &amp; 2 &amp; 1 &amp; 5 &amp;3 \\\\\\hline \\text{$P_2$} &amp; 2 &amp; \\text{3 (lowest)}&amp; 3 &amp; 3 &amp; 1 \\\\\\hline \\text{$P_3$} &amp; 3 &amp; \\text{1 (highest)}&amp; 2 &amp; 3 &amp; 1 \\\\\\hline \\end{array} \\)</span><br/> The multi-programmed operating system uses preemptive priority scheduling. What are the finish times of the processes <span>\\( P_1, P_2 \\)</span> and <span>\\( P_3 \\)</span>?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">11, 15, 9</span>`,
                `<span style="display: inline;">10, 15, 9</span>`,
                `<span style="display: inline;">11, 16, 10</span>`,
                `<span style="display: inline;">12, 17, 11</span>`
            ],
            answer: "B",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/3597/gate2006-it-54" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-it-2006" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE IT 2006</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Consider three processes, all arriving at time zero, with total execution time of 10, 20 and 30 units, respectively. Each process spends the first 20% of execution time doing I/O, the next 70% of time doing computation, and the last 10% of time doing I/O again. The operating system uses a shortest remaining compute time first scheduling algorithm and schedules a new process either when the running process get blocked on I/O or when the running process finishes its compute burst. Assume that all I/O operations can be overlapped as much as possible. For what percentage of time does the CPU remain idle?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">0%</span>`,
                `<span style="display: inline;">10.60%</span>`,
                `<span style="display: inline;">30%</span>`,
                `<span style="display: inline;">89.40%</span>`
            ],
            answer: "B",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/1843/gate2006-65#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2006" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2006</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Consider three processes (process id 0,1,2, respectively) with compute time bursts 2,4, and 8 time units. All processes arrive at time zero. Consider the longest remaining time first (LRTF) scheduling algorithm. In LRTF ties are broken by giving priority to the process with the lowest process id . The average turn around time is</span>`,
            image: "",
            options: [
                `<span style="display: inline;">13units</span>`,
                `<span style="display: inline;">14units</span>`,
                `<span style="display: inline;">15units</span>`,
                `<span style="display: inline;">16units</span>`
            ],
            answer: "A",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/1842/gate2006-64#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2006" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2006</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Consider three CPU-intensive processes, which require 10,20 and 30 time units and arrive at times 0,2, and 6, respectively. How many context switches are needed if the operating system implements a shortes remaining time first scheduling algorithm? Do not count the context switches at time zero and at the end</span>`,
            image: "",
            options: [
                `<span style="display: inline;">1</span>`,
                `<span style="display: inline;">2</span>`,
                `<span style="display: inline;">3</span>`,
                `<span style="display: inline;">4</span>`
            ],
            answer: "B",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/885/gate2006-6#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2006" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2006</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
    ]
});

registerTest({
    series: "cse-gate-2027",
    name: "TWT-Operating System(CPU Scheduling-V)",
    date: "sep 08, 2026",
    topicsCovered: "Priority Scheduling, Optimal Non-preemptive Scheduling, Time Quantum Bounds, Throughput",
    questions: [
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">We wish to schedule three processes P1, P2 and P3 on a uniprocessor system. The priorities, CPU time requirements and arrival times of the processes are as shown below.<br/> <span>\\( \\begin{array}{|c|c|c|c|} \\hline \\textbf{Process} &amp; \\textbf{Priority} &amp; \\textbf{CPU time} &amp; \\textbf{Arrival time}\\\\ &amp; &amp; \\textbf{required} &amp; \\textbf{(hh:mm:ss)} \\\\\\hline \\text{P1} &amp; \\text{10 (highest)} &amp; 20\\text{ sec} &amp; 00:00:05 \\\\\\hline \\text{P2} &amp; 9 &amp; 10 \\text{ sec}&amp; 00:00:03 \\\\\\hline \\text{P3} &amp; \\text{8 (lowest)} &amp; 15 \\text{ sec}&amp; 00:00:00 \\\\\\hline \\end{array} \\)</span><br/> We have a choice of preemptive or non-preemptive scheduling. In preemptive scheduling, a late-arriving higher priority process can preempt a currently running process with lower priority. In non-preemptive scheduling, a late-arriving higher priority process must wait for the currently executing process to complete before it can be scheduled on the processor.<br/> What are the turnaround times (time from arrival till completion) of P2 using preemptive and non-preemptive scheduling respectively?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">30 sec, 30 sec</span>`,
                `<span style="display: inline;">30 sec, 10 sec</span>`,
                `<span style="display: inline;">42 sec, 42 sec</span>`,
                `<span style="display: inline;">30 sec, 42 sec</span>`
            ],
            answer: "D",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/3821/gate2005-it-60" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-it-2005" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE IT 2005</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Consider the following set of processes, with the arrival times and the CPU-burst times given in milliseconds. <br/><img src="images/pyq-os/20041_q46.jpg"/><br/> What is the average turnaround time for these processes with the preemptive shortest remaining processing time first (SRPT) algorithm?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">5.5</span>`,
                `<span style="display: inline;">5.75</span>`,
                `<span style="display: inline;">6</span>`,
                `<span style="display: inline;">6.25</span>`
            ],
            answer: "A",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/1043/gate2004-46#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2004" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2004</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">A uni-processor computer system only has two processes, both of which alternate 10 ms CPU bursts with 90 ms I/O bursts. Both the processes were created at nearly the same time. The I/O of both processes can proceed in parallel. Which of the following scheduling strategies will result in the least CPU utilizations (over a long period of time) for this system ?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">First come first served scheduling</span>`,
                `<span style="display: inline;">Shortest remaining time first scheduling</span>`,
                `<span style="display: inline;">Static priority scheduling with different priorities for the two processes</span>`,
                `<span style="display: inline;">Round robin scheduling with a time quantum of 5 ms.</span>`
            ],
            answer: "D",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/963/gate2003-77#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2003" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2003</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Which combination of the following features will suffice to characterize an OS as a multi-programmed OS ? <br/><br/>(A)More than one program may be loaded into main memory at the same time for execution. <br/> (B) If a program waits for certain events such as I/O, another program is immediately scheduled for execution. <br/> (C) If the execution of a program terminates, another program is immediately scheduled for execution.</span>`,
            image: "",
            options: [
                `<span style="display: inline;">A</span>`,
                `<span style="display: inline;">A and B</span>`,
                `<span style="display: inline;">A and C</span>`,
                `<span style="display: inline;">A,B and C</span>`
            ],
            answer: "B",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/851/gate2002-2-21#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2002" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2002</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Which of the following scheduling algorithms is non-preemptive ?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">Round Robin</span>`,
                `<span style="display: inline;">First-In First-Out</span>`,
                `<span style="display: inline;">Multilevel Queue Scheduling</span>`,
                `<span style="display: inline;">Multilevel Queue Scheduling with Feedback</span>`
            ],
            answer: "B",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/827/gate2002-1-22#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2002" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2002</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Consider <span>\\( n \\)</span> processes sharing the CPU in a round-robin fashion. Assuming that each process switch takes <span>\\( s \\)</span> seconds, what must be the quantum size <span>\\( q \\)</span> such that the overhead resulting from process switching is minimized but at the same time each process is guaranteed to get its turn at the CPU at least every <span>\\( t \\)</span> seconds?</span>`,
            image: "",
            options: [
                `<span style="display: inline;"><span>\\( q \\leq \\frac{t-ns}{n-1} \\)</span></span>`,
                `<span style="display: inline;"><span>\\( q \\geq \\frac{t-ns}{n-1} \\)</span></span>`,
                `<span style="display: inline;"><span>\\( q \\leq \\frac{t-ns}{n+1} \\)</span></span>`,
                `<span style="display: inline;"><span>\\( q \\geq \\frac{t-ns}{n+1} \\)</span></span>`
            ],
            answer: "A",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/1690/gate1998-2-17-ugcnet-dec2012-iii-43" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-1998" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 1998</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">The correct matching for the following pairs is:<br/><span>\\( \\small \\begin{array}{cl|cl}\\hline \\text{(A)} &amp;\\text{Disk Scheduling} &amp; \\text{(1)} &amp;\\text{Round robin} \\\\\\hline \\text{(B)} &amp;\\text{Batch Processing} &amp; \\text{(2)} &amp;\\text{SCAN} \\\\\\hline \\text{(C)} &amp; \\text{Time-sharing} &amp; \\text{(3)}&amp;\\text {LIFO} \\\\\\hline \\text{(D)} &amp;\\text{Interrupt processing} &amp; \\text{(4)} &amp;\\text{FIFO} \\\\\\hline \\end{array} \\)</span></span>`,
            image: "",
            options: [
                `<span style="display: inline;">A-3 B-4 C-2 D-1</span>`,
                `<span style="display: inline;">A-4 B-3 C-2 D-1</span>`,
                `<span style="display: inline;">A-2 B-4 C-1 D-3</span>`,
                `<span style="display: inline;">A-3 B-4 C-3 D-2</span>`
            ],
            answer: "C",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/2237/gate1997-3-6" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-1997" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 1997</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Four jobs to be executed on a single processor system arrive at time 0 in the order A, B, C, D. Their burst CPU time requirements are 4, 1, 8, 1 time units respectively. The completion time of A under round robin scheduling with time slice of one time unit is</span>`,
            image: "",
            options: [
                `<span style="display: inline;">10</span>`,
                `<span style="display: inline;">4</span>`,
                `<span style="display: inline;">8</span>`,
                `<span style="display: inline;">9</span>`
            ],
            answer: "D",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/2749/gate1996-2-20-isro2008-15" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-1996" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 1996</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">The sequence __________ is an optimal non-preemptive scheduling sequence for the following jobs which leaves the CPU idle for ________ unit(s) of time.<br/> <span>\\( \\begin{array}{|c|c|c|} \\hline \\textbf{Job} &amp; \\textbf{Arrival Time} &amp; \\textbf{Burst Time} \\\\\\hline 1 &amp; 0.0 &amp; 9 \\\\\\hline 2 &amp; 0.6 &amp; 5 \\\\\\hline 3 &amp; 1.0 &amp; 1 \\\\\\hline \\end{array} \\)</span></span>`,
            image: "",
            options: [
                `<span style="display: inline;">{3,2,1}, 1</span>`,
                `<span style="display: inline;">{2,1,3}, 0</span>`,
                `<span style="display: inline;">{3,2,1}, 0</span>`,
                `<span style="display: inline;">{1,2,3}, 5</span>`
            ],
            answer: "A",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/2618/gate1995-2-6" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-1995" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 1995</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Which scheduling policy is most suitable for a time shared operating system?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">Shortest Job First</span>`,
                `<span style="display: inline;">Round Robin</span>`,
                `<span style="display: inline;">First Come First Serve</span>`,
                `<span style="display: inline;">Elevator</span>`
            ],
            answer: "B",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/2602/gate1995-1-15" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-1995" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 1995</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Assume that the following jobs are to be executed on a single processor system <br/><span>\\( \\begin{array}{|c|c|} \\hline \\textbf{Job Id} &amp; \\textbf{CPU Burst Time} \\\\\\hline \\text{p} &amp; 4 \\\\\\hline \\text{q} &amp; 1 \\\\\\hline \\text{r} &amp; 8 \\\\\\hline \\text{s} &amp; 1 \\\\\\hline \\text{t} &amp; 2 \\\\\\hline \\end{array} \\)</span><br/> The jobs are assumed to have arrived at time <span>\\( 0^+ \\)</span> and in the order p,q,r,s,t. Calculate the departure time (completion time) for job p if scheduling is round robin with time slice 1</span>`,
            image: "",
            options: [
                `<span style="display: inline;">4</span>`,
                `<span style="display: inline;">10</span>`,
                `<span style="display: inline;">11</span>`,
                `<span style="display: inline;">12</span>`,
                `<span style="display: inline;">None of the above</span>`
            ],
            answer: "C",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/2298/gate1993-7-10" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-1993" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 1993</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Consider a set of n tasks with known runtimes <span>\\( r_{1},r_{2},....r_{n} \\)</span> to be run on a uniprocessor machine. Which of the following processor scheduling algorithms will result in the maximum throughput ?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">Round-Robin</span>`,
                `<span style="display: inline;">Shortest-Job-First</span>`,
                `<span style="display: inline;">Highest-Response-Ratio-Next</span>`,
                `<span style="display: inline;">First-come-First-Served</span>`
            ],
            answer: "B",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/712/gate2001-1-19#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2001" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2001</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
    ]
});

registerTest({
    series: "cse-gate-2027",
    name: "TWT-Operating System(Process Synchronization-I)",
    date: "sep 08, 2026",
    topicsCovered: "Binary Semaphores, Shared Variables, Critical Section, Producer-Consumer, Concurrency Anomalies",
    questions: [
        {
            marks: 2,
            neg: 0,
            type: "MSQ",
            text: `<span style="display: inline;">Consider three processes <span>\\( \\text{P1, P2} \\)</span>, and <span>\\( \\text{P3} \\)</span> running identical code, as shown in the pseudocode below. <span>\\( \\text{A} \\)</span> and <span>\\( \\text{B} \\)</span> are two binary semaphores initialized to <span>\\( 1 \\)</span> and <span>\\( 0 \\)</span>, respectively. <span>\\( \\text{X} \\)</span> is a shared variable initialized to <span>\\( 0 \\)</span>. Each line in the pseudocode is executed atomically.<br/><br/>Pseudocode of P1, P2, and P3:<pre style="background-color: #f8f9fa; border: 1px solid #dee2e6; border-radius: 5px; padding: 12px; overflow-x: auto; font-family: monospace; font-size: 14px; margin-top: 10px;"><code>Wait(A);
Print(*);
X = X+1;
If (X == 2)
{
    Print($);
    Signal(B);
}
Signal(A);
Wait(B);
Print(#);
Signal(B);</code></pre><br/>Assume that any of the three processes can start to execute first and context switching can happen between these processes at any arbitrary time and in any arbitrary order. <br/><br/>Which of the following patterns is/are possible to be generated as an outcome of the execution of these three processes?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">**$*###</span>`,
                `<span style="display: inline;">**$#*##</span>`,
                `<span style="display: inline;">**$##*#</span>`,
                `<span style="display: inline;">***$###</span>`
            ],
            answer: ["A", "B", "C"],
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/523105/gate-cse-2026-set-2-question-41#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2026-set-2" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2026 SET-2</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 2,
            neg: 0.66,
            type: "MCQ",
            text: `<span style="display: inline;">Consider a multi-threaded program with two threads T1 and T2. The threads share two semaphores: s1 (initialized to 1) and s2 (initialized to 0). The threads also share a global variable x (initialized to 0). The threads execute the code shown below.<pre style="background-color: #f8f9fa; border: 1px solid #dee2e6; border-radius: 5px; padding: 12px; overflow-x: auto; font-family: monospace; font-size: 14px; margin-top: 10px;"><code>// code of T1
wait(s1);
x = x+1;
print(x);
wait(s2);
signal(s1);

// code of T2
wait(s1);
x = x+1;
print(x);
signal(s2);
signal(s1);</code></pre><br/>Which of the following outcomes is/are possible when threads T1 and T2 execute concurrently?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">T1 runs first and prints 1, T2 runs next and prints 2</span>`,
                `<span style="display: inline;">T2 runs first and prints 1, T1 runs next and prints 2</span>`,
                `<span style="display: inline;">T1 runs first and prints 1, T2 does not print anything (deadlock)</span>`,
                `<span style="display: inline;">T2 runs first and prints 1, T1 does not print anything (deadlock)</span>`
            ],
            answer: "B",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/422861/gate-cse-2024-set-2-question-36#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2024-set-2" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2024 SET-2</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 2,
            neg: 0.66,
            type: "MCQ",
            text: `<span style="display: inline;">Consider the following two threads <span>\\( \\mathrm{T} 1 \\)</span> and <span>\\( \\mathrm{T} 2 \\)</span> that update two shared variables <span>\\( \\mathrm{a} \\)</span> and <span>\\( \\mathrm{b} \\)</span>. Assume that initially <span>\\( \\mathrm{a}=\\mathrm{b}=1 \\)</span>. Though context switching between threads can happen at any time, each statement of <span>\\( \\mathrm{T} 1 \\)</span> or <span>\\( \\mathrm{T} 2 \\)</span> is executed atomically without interruption.<br/><br/><span>\\( \\begin{array}{cc} \\mathrm{T} 1 &amp; \\mathrm{~T} 2 \\\\ \\mathrm{a}=\\mathrm{a}+1 ; &amp; \\mathrm{b}=2*\\mathrm{b} ; \\\\ \\mathrm{b}=\\mathrm{b}+1 ; &amp; \\mathrm{a}=2*\\mathrm{a} ; \\end{array} \\)</span><br/><br/>Which one of the following options lists all the possible combinations of values of <span>\\( \\mathrm{a} \\)</span> and <span>\\( \\mathrm{b} \\)</span> after both <span>\\( \\mathrm{T} 1 \\)</span> and <span>\\( \\mathrm{T} 2 \\)</span> finish execution?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">(a=4, b=4) ;(a=3, b=3) ;(a=4, b=3)</span>`,
                `<span style="display: inline;">(a=3, b=4) ;(a=4, b=3) ;(a=3, b=3)</span>`,
                `<span style="display: inline;">(a=4, b=4) ;(a=4, b=3) ;(a=3, b=4)</span>`,
                `<span style="display: inline;">(a=2, b=2) ;(a=2, b=3) ;(a=3, b=4)</span>`
            ],
            answer: "A",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/422812/gate-cse-2024-set-1-question-30#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2024-set-1" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2024 SET-1</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 2,
            neg: 0.66,
            type: "MCQ",
            text: `<span style="display: inline;">Consider the two functions incr and decr shown below.<pre style="background-color: #f8f9fa; border: 1px solid #dee2e6; border-radius: 5px; padding: 12px; overflow-x: auto; font-family: monospace; font-size: 14px; margin-top: 10px;"><code>incr(){
  wait(s);
  X = X+1;
  signal(s);
}

decr(){
  wait(s);
  X = X-1;
  signal(s);
}</code></pre><br/>There are 5 threads each invoking incr once, and 3 threads each invoking decr once, on the same shared variable X. The initial value of X is 10.<br/> Suppose there are two implementations of the semaphore <span>\\( s \\)</span>, as follows:<br/><br/> I-1: s is a binary semaphore initialized to 1. <br/>I-2: s is a counting semaphore initialized to 2. <br/><br/>Let V1, V2 be the values of X at the end of execution of all the threads with implementations I-1, I-2, respectively.<br/> Which one of the following choices corresponds to the minimum possible values of V1, V2, respectively?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">15, 7</span>`,
                `<span style="display: inline;">7, 7</span>`,
                `<span style="display: inline;">12, 7</span>`,
                `<span style="display: inline;">12, 8</span>`
            ],
            answer: "C",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/399283/gate-cse-2023-question-28#a_list_title" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2023" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2023</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Consider the following threads, <span>\\( T_1, T_2, \\text{ and }T_3 \\)</span> executing on a single processor, synchronized using three binary semaphore variables, <span>\\( S_1, S_2, \\text{ and }S_3 \\)</span>, operated upon using standard <span>\\( wait() \\)</span> and <span>\\( signal() \\)</span>. The threads can be context switched in any order and at any time.<br/><img src="images/pyq-os/20221_q9.jpg"/><br/>Which initialization of the semaphores would print the sequence BCABCABCA ...?</span>`,
            image: "",
            options: [
                `<span style="display: inline;"><span>\\( S_1 = 1; S_2 = 1; S_3 = 1 \\)</span></span>`,
                `<span style="display: inline;"><span>\\( S_1 = 1; S_2 = 1; S_3 = 0 \\)</span></span>`,
                `<span style="display: inline;"><span>\\( S_1 = 1; S_2 = 0; S_3 = 0 \\)</span></span>`,
                `<span style="display: inline;"><span>\\( S_1 = 0; S_2 = 1; S_3 = 1 \\)</span></span>`
            ],
            answer: "C",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/371927/Gate-cse-2022-question-9#a_list_title" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2022" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2022</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 2,
            neg: 0,
            type: "MSQ",
            text: `<span style="display: inline;">Consider a computer system with multiple shared resource types, with one instance per resource type. Each instance can be owned by only one process at a time. Owning and freeing of resources are done by holding a global lock (L). The following scheme is used to own a resource instance: <pre style="background-color: #f8f9fa; border: 1px solid #dee2e6; border-radius: 5px; padding: 12px; overflow-x: auto; font-family: monospace; font-size: 14px; margin-top: 10px;"><code> function OWNRESOURCE(Resource R) 
    Acquire lock L // a global lock 
    if R is available then 
        Acquire R        
        Release lock L 
    else
        if R is owned by another process P then        
        Terminate P, after releasing all resources owned by P        
        Acquire R        
        Restart P        
        Release lock L        
        end if
    end if    
end function</code></pre>Which of the following choice(s) about the above scheme is/are correct?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">The scheme ensures that deadlocks will not occur</span>`,
                `<span style="display: inline;">The scheme may lead to live-lock</span>`,
                `<span style="display: inline;">The scheme may lead to starvation</span>`,
                `<span style="display: inline;">The scheme violates the mutual exclusion property</span>`
            ],
            answer: ["A", "B", "C"],
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/357497/gate-cse-2021-set-2-question-43#a_list_title" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2021-set-2" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2021 SET-2</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 2,
            neg: 0,
            type: "MSQ",
            text: `<span style="display: inline;">Consider the following pseudocode, where Sis a semaphore initialized to 5 in line #2 and counter is a shared variable initialized to 0 in line #1. Assume that the increment operation in line #7 is not atomic. <pre style="background-color: #f8f9fa; border: 1px solid #dee2e6; border-radius: 5px; padding: 12px; overflow-x: auto; font-family: monospace; font-size: 14px; margin-top: 10px;"><code>1.  int counter =0;
2.  Semaphore S= init(5);
3.  void parop(void)
4.  {
5.         wait(S);
6.         wait(S);
7.         counter++;
8.         signal(S);
9.          signal(S);
10.  } </code></pre> If five threads execute the function <span>\\( parop \\)</span> concurrently, which of the following program behavior(s) is/are possible?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">The value of countercounter is 5 after all the threads successfully complete the execution of parop.</span>`,
                `<span style="display: inline;">The value of countercounter is 1 after all the threads successfully complete the execution of parop.</span>`,
                `<span style="display: inline;">The value of countercounter is 0 after all the threads successfully complete the execution of parop.</span>`,
                `<span style="display: inline;">There is a deadlock involving all the threads.</span>`
            ],
            answer: ["A", "B", "D"],
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/357405/gate-cse-2021-set-1-question-46#a_list_title" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2021-set-1" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2021 SET-1</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">The hardware implementation which provides mutual exclusion is</span>`,
            image: "",
            options: [
                `<span style="display: inline;">Semaphores</span>`,
                `<span style="display: inline;">Test and set instructions</span>`,
                `<span style="display: inline;">Both options</span>`,
                `<span style="display: inline;">None of the options</span>`
            ],
            answer: "B",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/331484/isro2020-57" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/isro-cse-2020" style="color:#2f6d1a; text-decoration:none" target="_blank">ISRO CSE 2020</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 2,
            neg: 0.66,
            type: "MCQ",
            text: `<span style="display: inline;">Each of a set of n processes executes the following code using two semaphores a and b initialized to 1 and 0, respectively. Assume that count is a shared variable initialized to 0 and not used in CODE SECTION P.<br/><img src="images/pyq-os/20201_q34.jpg"/><br/> What does the code achieve?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">It ensures that no process executes CODE SECTION Q before every process has finished CODE SECTION P.</span>`,
                `<span style="display: inline;">It ensures that two processes are in CODE SECTION Q at any time.</span>`,
                `<span style="display: inline;">It ensures that all processes execute CODE SECTION P mutually exclusively.</span>`,
                `<span style="display: inline;">It ensures that at most n-1 processes are in CODE SECTION P at any time.</span>`
            ],
            answer: "A",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/333197/gate2020-cs-34#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2020" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2020</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0,
            type: "NAT",
            text: `<span style="display: inline;">Consider three concurrent processes P1, P2 and P3 as shown below, which access a shared variable D that has been initialized to 100. <br/><img src="images/pyq-os/20191_q23.jpg"/><br/> The process are executed on a uniprocessor system running a time-shared operating system. If the minimum and maximum possible values of D after the three processes have completed execution are X and Y respectively, then the value of Y-X is __________.</span>`,
            image: "",
            options: [
            ],
            answer: "80",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/302825/gate2019-cs-23#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2019" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2019</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">In multi-programmed systems, it is advantageous if some programs such as editors and compilers can be shared by several users.<br/> Which of the following must be true of multi-programmed systems in order that a single copy of a program can be shared by several users?<br/><br/> I. The program is a macro<br/> II. The program is recursive<br/> III. The program is reentrant<br/></span>`,
            image: "",
            options: [
                `<span style="display: inline;">I only</span>`,
                `<span style="display: inline;">II only</span>`,
                `<span style="display: inline;">III only</span>`,
                `<span style="display: inline;">I, II and III</span>`
            ],
            answer: "C",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/213520/isro2018-67" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/isro-cse-2018" style="color:#2f6d1a; text-decoration:none" target="_blank">ISRO CSE 2018</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Procedures P1 and P2 have a producer-consumer relationship, communicating by the use of a set of shared buffers.<br/><br/>P1 : <br/> repeat<br/> Obtain an empty buffer<br/> Fill it<br/> Return a full buffer<br/> forever<br/><br/> P2:<br/> repeat<br/> Obtain a full buffer<br/> Empty it<br/> Return an empty buffer<br/> forever<br/><br/> Increasing the number of buffers is likely to do which of the following?<br/><br/> I. Increase the rate at which requests are satisfied (throughput)<br/> II. Decrease the likelihood of deadlock<br/> III. Increase the ease of achieving a correct implementation</span>`,
            image: "",
            options: [
                `<span style="display: inline;">III only</span>`,
                `<span style="display: inline;">II only</span>`,
                `<span style="display: inline;">I only</span>`,
                `<span style="display: inline;">II and III only</span>`
            ],
            answer: "C",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/213521/isro2018-67" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/isro-cse-2018" style="color:#2f6d1a; text-decoration:none" target="_blank">ISRO CSE 2018</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 2,
            neg: 0.66,
            type: "MCQ",
            text: `<span style="display: inline;">Consider the following solution to the producer-consumer synchronization problem. The shared buffer size is N. Three semaphores <i>empty, full</i> and <i>mutex</i> are defined with respective initial values of 0, N and 1. Semaphore <i>empty</i> denotes the number of available slots in the buffer, for the consumer to read from. Semaphore <i>full</i> denotes the number of available slots in the buffer, for the producer to write to. The placeholder variables, denoted by P, Q, R, and S, in the code below can be assigned either <i>empty or full</i>. The valid semaphore operations are: <i>wait() and signal()</i>. <br/> <img src="images/pyq-os/2018_q40.jpg"/> <br/> Which one of the following assignments to P, Q, R and S will yield the correct solution?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">P: full, Q: full, R: empty, S: empty</span>`,
                `<span style="display: inline;">P: empty, Q: empty, R: full, S: full</span>`,
                `<span style="display: inline;">P: full, Q: empty, R: empty, S: full</span>`,
                `<span style="display: inline;">P: empty, Q: full, R: full, S: empty</span>`
            ],
            answer: "C",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/204114/gate2018-40#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2018" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2018</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">At a particular time the value of counting semaphore is 10. It will become 7 after:</span>`,
            image: "",
            options: [
                `<span style="display: inline;">3 V operations</span>`,
                `<span style="display: inline;">3 P operations</span>`,
                `<span style="display: inline;">5 V operations and 2 P operations</span>`,
                `<span style="display: inline;">2 V operations and 5 P operations</span>`
            ],
            answer: "B",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/128491/isro2017-71" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/isro-cse-2017" style="color:#2f6d1a; text-decoration:none" target="_blank">ISRO CSE 2017</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">A critical region</span>`,
            image: "",
            options: [
                `<span style="display: inline;">is a piece of code which only one process executes at a time</span>`,
                `<span style="display: inline;">is a region prone to deadlock</span>`,
                `<span style="display: inline;">is a piece of code which only a finite number of processes execute</span>`,
                `<span style="display: inline;">is found only in windows NT operating system</span>`
            ],
            answer: "A",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/128764/isro2017-68" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/isro-cse-2017" style="color:#2f6d1a; text-decoration:none" target="_blank">ISRO CSE 2017</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
    ]
});

registerTest({
    series: "cse-gate-2027",
    name: "TWT-Operating System(Process Synchronization-II)",
    date: "sep 08, 2026",
    topicsCovered: "Counting Semaphores, Mutual Exclusion, Progress, Bounded Waiting, Hardware Instructions (Test-and-Set)",
    questions: [
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Mutual exclusion problem occurs</span>`,
            image: "",
            options: [
                `<span style="display: inline;">between two disjoint processes that do not interact</span>`,
                `<span style="display: inline;">among processes that share resources</span>`,
                `<span style="display: inline;">among processes that do not use the same resource</span>`,
                `<span style="display: inline;">between two processes that uses different resources of different machine</span>`
            ],
            answer: "B",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/128711/isro2017-56" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/isro-cse-2017" style="color:#2f6d1a; text-decoration:none" target="_blank">ISRO CSE 2017</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">At a particular time of computation the value of a counting semaphore is 7. Then 20 P operations and x V operations were completed on this semaphore. If the new value of semaphore is 5, x will be</span>`,
            image: "",
            options: [
                `<span style="display: inline;">18</span>`,
                `<span style="display: inline;">22</span>`,
                `<span style="display: inline;">15</span>`,
                `<span style="display: inline;">13</span>`
            ],
            answer: "A",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/56082/isro2016-45" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/isro-cse-2016" style="color:#2f6d1a; text-decoration:none" target="_blank">ISRO CSE 2016</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 2,
            neg: 0,
            type: "NAT",
            text: `<span style="display: inline;">Consider a non-negative counting semaphore S. The operation P(S) decrements S, and V(S) increments S. During an execution, 20 P(S) operations and 12V(S) operations are issued in some order. The largest initial value of S for which at least one P(S) operation will remain blocked is ________.</span>`,
            image: "",
            options: [
            ],
            answer: "7",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/39576/gate2016-2-49#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2016-set-2" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2016 SET-2</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 2,
            neg: 0.66,
            type: "MCQ",
            text: `<span style="display: inline;">Consider the following two-process synchronization solution. <br/> <br/><img src="images/pyq-os/20162_q48.jpg"/><br/> The shared variable turn is initialized to zero.Which one of the following is TRUE?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">This is a correct two-process synchronization solution.</span>`,
                `<span style="display: inline;">This solution violates mutual exclusion requirement</span>`,
                `<span style="display: inline;">This solution violates progress requirement</span>`,
                `<span style="display: inline;">This solution violates bounded wait requirement</span>`
            ],
            answer: "C",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/39600/gate2016-2-48#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2016-set-2" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2016 SET-2</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 2,
            neg: 0.66,
            type: "MCQ",
            text: `<span style="display: inline;">Consider the following proposed solution for the critical section problem. There are n processes: <span>\\( P_{0}...P_{n-1} \\)</span> . In the code,function <span>\\( pmax \\)</span> returns an integer not smaller than any of its arguments. For all i, t[i] is initialized to zero. <br/><img src="images/pyq-os/20161_q50.jpg"/> <br/> Which one of the following is TRUE about the above solution?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">At most one process can be in the critical section at any time</span>`,
                `<span style="display: inline;">The bounded wait condition is satisfied</span>`,
                `<span style="display: inline;">The progress condition is satisfied</span>`,
                `<span style="display: inline;">It cannot cause a deadlock</span>`
            ],
            answer: "A",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/39719/gate2016-1-50#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2016-set-1" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2016 SET-1</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Choose the correct alternatives (more than one may be correct) and write the corresponding letters only:<br/>At a particular time of computation, the value of a counting semaphore is 7. Then 20 P operations and 15 V operations were completed on this semaphore. The resulting value of the semaphore is :</span>`,
            image: "",
            options: [
                `<span style="display: inline;">42</span>`,
                `<span style="display: inline;">2</span>`,
                `<span style="display: inline;">7</span>`,
                `<span style="display: inline;">12</span>`
            ],
            answer: "B",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/564/gate1992-02-x-isro2015-35" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/isro-cse-2015" style="color:#2f6d1a; text-decoration:none" target="_blank">ISRO CSE 2015</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Semaphores are used to solve the problem of<br/>I. Race Condition<br/>II. Process Synchronization<br/>III. Mutual Exclusion<br/>IV. None of the above</span>`,
            image: "",
            options: [
                `<span style="display: inline;">I and II</span>`,
                `<span style="display: inline;">II and III</span>`,
                `<span style="display: inline;">All of the above</span>`,
                `<span style="display: inline;">None of the above</span>`
            ],
            answer: "B",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/19489/isro2015-30" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/isro-cse-2015" style="color:#2f6d1a; text-decoration:none" target="_blank">ISRO CSE 2015</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Two processes X and Y need to access a critical section. Consider the following synchronization construct used by both the processes <br/><img src="images/pyq-os/20153_q21.jpg"/> <br/> Here, varP and varQ are shared variables and both are initialized to false. Which one of the following statements is true?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">The proposed solution prevents deadlock but fails to guarantee mutual exclusion</span>`,
                `<span style="display: inline;">The proposed solution guarantees mutual exclusion but fails to prevent deadlock</span>`,
                `<span style="display: inline;">The proposed solution guarantees mutual exclusion and prevents deadlock</span>`,
                `<span style="display: inline;">The proposed solution fails to prevent deadlock and fails to guarantee mutual exclusion</span>`
            ],
            answer: "A",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/8405/gate2015-3-21#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2015-set-3" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2015 SET-3</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0,
            type: "NAT",
            text: `<span style="display: inline;">The following two functions P1 and P2 that share a variable B with an initial value of 2 execute concurrently. <br/><img src="images/pyq-os/20151_q20.jpg"/> <br/> The number of distinct values that B can possibly take after the execution is______________.</span>`,
            image: "",
            options: [
            ],
            answer: "3",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/8121/gate2015-1-20#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2015-set-1" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2015 SET-1</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 2,
            neg: 0.66,
            type: "MCQ",
            text: `<span style="display: inline;">Consider the procedure below for the Producer-Consumer problem which uses semaphores: <br/><img src="images/pyq-os/20142_q31.jpg"/><br/> Which one of the following is TRUE?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">The producer will be able to add an item to the buffer, but the consumer can never consume it.</span>`,
                `<span style="display: inline;">The consumer will remove no more than one item from the buffer.</span>`,
                `<span style="display: inline;">Deadlock occurs if the consumer succeeds in acquiring semaphore s when the buffer is empty</span>`,
                `<span style="display: inline;">The starting value for the semaphore n must be 1 and not 0 for deadlock-free operation.</span>`
            ],
            answer: "C",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/1990/gate2014-2-31#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2014-set-2" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2014 SET-2</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 2,
            neg: 0.66,
            type: "MCQ",
            text: `<span style="display: inline;">A certain computation generates two arrays a and b such that a[i]=f(i)for <span>\\( o\\leq i \\lt n \\)</span> and b[i] = g (a[i] )for <span>\\( o\\leq i \\lt n \\)</span>. Suppose this computation is decomposed into two concurrent processes X and Y such that X computes the array a and Y computes the array b. The processes employ two binary semaphores R and S, both initialized to zero. The array a is shared by the two processes. The structures of the processes are shown below. <br/><img src="images/pyq-os/20131_q39.jpg"/> <br/> Which one of the following represents the CORRECT implementations of ExitX and EntryY?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">ExitX(R, S) { P(R); V(S); } EntryY(R, S) { P(S); V(R); }</span>`,
                `<span style="display: inline;">ExitX(R, S) { V(R); V(S); } EntryY(R, S) { P(R); P(S); }</span>`,
                `<span style="display: inline;">ExitX(R, S) { P(S); V(R); } EntryY(R, S) { V(S); P(R); }</span>`,
                `<span style="display: inline;">ExitX(R, S) { V(R); P(S); } EntryY(R, S) { V(S); P(R); }</span>`
            ],
            answer: "C",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/1550/gate2013-39#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2013" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2013</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 2,
            neg: 0.66,
            type: "MCQ",
            text: `<span style="display: inline;">A shared variable x, initialized to zero, is operated on by four concurrent processes W, X, Y, Z as follows. Each of the processes W and X reads x from memory, increments by one, stores it to memory, and then terminates. Each of the processes Y and Z reads x from memory, decrements by two, stores it to memory, and then terminates. Each process before reading x invokes the P operation (i.e., wait) on a counting semaphore S and invokes the V operation (i.e., signal) on the semaphore S after storing x to memory. Semaphore S is initialized to two. What is the maximum possible value of x after all processes complete execution?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">-2</span>`,
                `<span style="display: inline;">-1</span>`,
                `<span style="display: inline;">1</span>`,
                `<span style="display: inline;">2</span>`
            ],
            answer: "D",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/1545/gate2013-34#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2013" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2013</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Three concurrent processes X, Y, and Z execute three different code segments that access and update certain shared variables. Process X executes the P operation (i.e., wait) on semaphores a, b and c; process Y executes the P operation on semaphores b, c and d; process Z executes the P operation on semaphores c, d, and a before entering the respective code segments. After completing the execution of its code segment, each process invokes the V operation (i.e., signal) on its three semaphores. All semaphores are binary semaphores initialized to one. Which one of the following represents a deadlock-free order of invoking the P operations by the processes?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">X: P(a)P(b)P(c) Y: P(b)P(c)P(d) Z: P(c)P(d)P(a)</span>`,
                `<span style="display: inline;">X: P(b)P(a)P(c) Y: P(b)P(c)P(d) Z: P(a)P(c)P(d)</span>`,
                `<span style="display: inline;">X: P(b)P(a)P(c) Y: P(c)P(b)P(d) Z: P(a)P(c)P(d)</span>`,
                `<span style="display: inline;">X: P(a)P(b)P(c) Y: P(c)P(b)P(d) Z: P(c)P(d)P(a)</span>`
            ],
            answer: "B",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/1438/gate2013-16#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2013" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2013</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 2,
            neg: 0.66,
            type: "MCQ",
            text: `<span style="display: inline;">Fetch_And_Add(X,i) is an atomic Read-Modify-Write instruction that reads the value of memory location X, increments it by the value i, and returns the old value of X. It is used in the pseudocode shown below to implement a busy-wait lock. L is an unsigned integer shared variable initialized to 0. The value of 0 corresponds to lock being available, while any non-zero value corresponds to the lock being not available. <pre style="background-color: #f8f9fa; border: 1px solid #dee2e6; border-radius: 5px; padding: 12px; overflow-x: auto; font-family: monospace; font-size: 14px; margin-top: 10px;"><code> AcquireLock(L){
   while (Fetch_And_Add(L,1))
        L = 1;
}
ReleaseLock(L){
     L = 0;
} </code></pre> This implementation</span>`,
            image: "",
            options: [
                `<span style="display: inline;">fails as L can overflow</span>`,
                `<span style="display: inline;">fails as L can take on a non-zero value when the lock is actually available</span>`,
                `<span style="display: inline;">works correctly but may starve some processes</span>`,
                `<span style="display: inline;">works correctly without starvation</span>`
            ],
            answer: "B",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/1750/gate2012-32#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2012" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2012</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 2,
            neg: 0.66,
            type: "MCQ",
            text: `<span style="display: inline;">The following program consists of 3 concurrent processes and 3 binary semaphores. The semaphores are initialized as S0=1, S1=0, S2=0. How many times will process P0 print '0'? <br/><img src="images/pyq-os/20101_q45.jpg"/><br/> How many times will process P0 print '0'?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">At least twice</span>`,
                `<span style="display: inline;">Exactly twice</span>`,
                `<span style="display: inline;">Exactly thrice</span>`,
                `<span style="display: inline;">Exactly once</span>`
            ],
            answer: "A",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/2347/gate2010-45#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2010" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2010</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        }
    ]
});

registerTest({
    series: "cse-gate-2027",
    name: "TWT-Operating System(Process Synchronization-III)",
    date: "sep 08, 2026",
    topicsCovered: "Monitors, Bounded Buffer, Readers-Writers Problem, Barrier Synchronization, Fetch-and-Set",
    questions: [
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Consider the methods used by processes P1 and P2 for accessing their critical sections whenever needed, as given below. The initial values of shared boolean variables S1 and S2 are randomly assigned. <br/><img src="images/pyq-os/20101_q23.jpg"/> <br/> Which one of the following statements describes the properties achieved?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">Mutual exclusion but not progress</span>`,
                `<span style="display: inline;">Progress but not mutual exclusion</span>`,
                `<span style="display: inline;">Neither mutual exclusion nor progress</span>`,
                `<span style="display: inline;">Both mutual exclusion and progress</span>`
            ],
            answer: "A",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/2202/gate2010-23#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2010" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2010</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 2,
            neg: 0.66,
            type: "MCQ",
            text: `<span style="display: inline;">The enter_CS() and leave_CS() functions to implement critical section of a process are realized using test-and-set instruction as follows: <pre style="background-color: #f8f9fa; border: 1px solid #dee2e6; border-radius: 5px; padding: 12px; overflow-x: auto; font-family: monospace; font-size: 14px; margin-top: 10px;"><code> void enter_CS(x)
{
                while test-and-set(x) ;
}
void leave_CS(x)
{
              x=0;
} </code></pre> In the above solution, x is a memory location associated with the CS and is nitialized to 0.<br/> Now consider the following statements: <br/><br/> I. The above solution to CS problem is deadlock-free <br/> II. The solution is starvation free. <br/> III. The processes enter CS in FIFO order.<br/> IV More than one process can enter CS at the same time.<br/><br/> Which of the above statements is TRUE?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">I only</span>`,
                `<span style="display: inline;">I and II</span>`,
                `<span style="display: inline;">II and III</span>`,
                `<span style="display: inline;">IV only</span>`
            ],
            answer: "A",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/1319/gate2009-33#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2009" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2009</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">A critical section is a program segment</span>`,
            image: "",
            options: [
                `<span style="display: inline;">which should run in a certain amount of time</span>`,
                `<span style="display: inline;">which avoids deadlocks</span>`,
                `<span style="display: inline;">where shared resources are accessed</span>`,
                `<span style="display: inline;">which must be enclosed by a pair of semaphore operations, P and V</span>`
            ],
            answer: "C",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/2723/gate1996-1-19-isro2008-61" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/isro-cse-2008" style="color:#2f6d1a; text-decoration:none" target="_blank">ISRO CSE 2008</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 2,
            neg: 0.66,
            type: "MCQ",
            text: `<span style="display: inline;">The following is a code with two threads, producer and consumer, that can run in parallel. Further, S and Q are binary semaphores quipped with the standard P and V operations.<br/> <pre style="background-color: #f8f9fa; border: 1px solid #dee2e6; border-radius: 5px; padding: 12px; overflow-x: auto; font-family: monospace; font-size: 14px; margin-top: 10px;"><code> semaphore S = 1, Q = 0; 
integer x;

producer:                   consumer:
while (true) do             while (true) do
    P(S);                       P(Q);
    x = produce ();             consume (x);
    V(Q);                       V(S);
done                        done</code></pre> <br/>Which of the following is TRUE about the program above?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">The process can deadlock</span>`,
                `<span style="display: inline;">One of the threads can starve</span>`,
                `<span style="display: inline;">Some of the items produced by the producer may be lost</span>`,
                `<span style="display: inline;">Values generated and stored in 'x' by the producer will always be consumed before the producer can generate a new value</span>`
            ],
            answer: "D",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/3363/gate2008-it-53" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-it-2008" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE IT 2008</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 2,
            neg: 0.66,
            type: "MCQ",
            text: `<span style="display: inline;">The P and V operations on counting semaphores, where s is a counting semaphore, are defined as follows: <pre style="background-color: #f8f9fa; border: 1px solid #dee2e6; border-radius: 5px; padding: 12px; overflow-x: auto; font-family: monospace; font-size: 14px; margin-top: 10px;"><code>P(s) : s =  s - 1;
     if (s  &lt; 0) then wait;
V(s) : s = s + 1;
     if (s &lt;= 0) then wakeup a process waiting on s; </code></pre> Assume that <span>\\( P_{b} \\)</span> and <span>\\( V_{b} \\)</span> the wait and signal operations on binary semaphores are provided. Two binary semaphores <span>\\( x_{b} \\)</span> and <span>\\( y_{b} \\)</span> are used to implement the semaphore operations P(s) and V(s) as follows: <pre style="background-color: #f8f9fa; border: 1px solid #dee2e6; border-radius: 5px; padding: 12px; overflow-x: auto; font-family: monospace; font-size: 14px; margin-top: 10px;"><code>P(s) : Pb(xb);
  s = s - 1;
  if (s &lt; 0) {
   Vb(xb) ;
   Pb(Yb) ;
  }
  else Vb(xb); 

V(s) : Pb(xb) ;
  s = s + 1;
  if (s &lt;= 0) Vb(Yb) ;
  Vb(xb) ;</code></pre> The initial values of xb and yb are respectively</span>`,
            image: "",
            options: [
                `<span style="display: inline;">0 and 0</span>`,
                `<span style="display: inline;">0 and 1</span>`,
                `<span style="display: inline;">1 and 0</span>`,
                `<span style="display: inline;">1 and 1</span>`
            ],
            answer: "C",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/486/gate2008-63#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2008" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2008</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Semaphores</span>`,
            image: "",
            options: [
                `<span style="display: inline;">synchronize critical resources to prevent deadlock</span>`,
                `<span style="display: inline;">synchronize critical resources to prevent contention</span>`,
                `<span style="display: inline;">are used to do I/O</span>`,
                `<span style="display: inline;">are used for memory management</span>`
            ],
            answer: "B",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/49517/isro2007-42-ugcnet-june2010-ii-37" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/isro-cse-2007" style="color:#2f6d1a; text-decoration:none" target="_blank">ISRO CSE 2007</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Synchronization in the classical readers and writers problem can be achieved through use of semaphores. In the following incomplete code for readers-writers problem, two binary semaphores mutex and wrt are used to obtain synchronization <br/> <pre style="background-color: #f8f9fa; border: 1px solid #dee2e6; border-radius: 5px; padding: 12px; overflow-x: auto; font-family: monospace; font-size: 14px; margin-top: 10px;"><code>wait (wrt)
writing is performed
signal (wrt)
wait (mutex)  
readcount = readcount + 1
if readcount = 1 then S1
S2
reading is performed
S3
readcount = readcount - 1
if readcount = 0 then S4 
signal (mutex) </code></pre> <br/>The values of S1, S2, S3, S4, (in that order) are</span>`,
            image: "",
            options: [
                `<span style="display: inline;">signal (mutex), wait (wrt), signal (wrt), wait (mutex)</span>`,
                `<span style="display: inline;">signal (wrt), signal (mutex), wait (mutex), wait (wrt)</span>`,
                `<span style="display: inline;">wait (wrt), signal (mutex), wait (mutex), signal (wrt)</span>`,
                `<span style="display: inline;">signal (mutex), wait (mutex), signal (mutex), wait (mutex)</span>`
            ],
            answer: "C",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/3498/gate2007-it-56" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-it-2007" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE IT 2007</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Processes P1 and P2 use critical_flag in the following routine to achieve mutual exclusion. Assume that critical_flag is initialized to FALSE in the main program.<br/> <pre style="background-color: #f8f9fa; border: 1px solid #dee2e6; border-radius: 5px; padding: 12px; overflow-x: auto; font-family: monospace; font-size: 14px; margin-top: 10px;"><code> get_exclusive_access ( )
{
    if (critical _flag == FALSE) {
        critical_flag = TRUE ;
        critical_region () ;
        critical_flag = FALSE;
    }
}</code></pre> <br/> Consider the following statements.<br/><br/> i.It is possible for both P1 and P2 to access critical_region concurrently.<br/> ii.This may lead to a deadlock.<br/><br/> Which of the following holds?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">(i) is false (ii) is true</span>`,
                `<span style="display: inline;">Both (i) and (ii) are false</span>`,
                `<span style="display: inline;">(i) is true (ii) is false</span>`,
                `<span style="display: inline;">Both (i) and (ii) are true</span>`
            ],
            answer: "C",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/3443/gate2007-it-10" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-it-2007" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE IT 2007</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Two processes, P1 and P2, need to access a critical section of code. Consider the following synchronization construct used by the processes: <br/><img src="images/pyq-os/20071_q58.jpg"/><br/> Here, wants1 and wants2 are shared variables, which are initialized to false. Which one of the following statements is TRUE about the above construct?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">It does not ensure mutual exclusion.</span>`,
                `<span style="display: inline;">It does not ensure bounded waiting.</span>`,
                `<span style="display: inline;">It requires that processes enter the critical section in strict alternation.</span>`,
                `<span style="display: inline;">It does not prevent deadlocks, but ensures mutual exclusion.</span>`
            ],
            answer: "D",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/1256/gate2007-58#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2007" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2007</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">The wait and signal operations of a monitor are implemented using semaphores as follows. In the following,<br/> x is a condition variable,<br/> mutex is a semaphore initialized to 1,<br/> x_sem is a semaphore initialized to 0,<br/> x_count is the number of processes waiting on semaphore x_sem, initially 0,<br/> next is a semaphore initialized to 0,<br/> next_count is the number of processes waiting on semaphore next, initially 0.<br/> The body of each procedure that is visible outside the monitor is replaced with the following:<br/> <pre style="background-color: #f8f9fa; border: 1px solid #dee2e6; border-radius: 5px; padding: 12px; overflow-x: auto; font-family: monospace; font-size: 14px; margin-top: 10px;"><code> P(mutex);
...
body of procedure
...
if (next_count &gt; 0)
    V(next);
else
    V(mutex);</code></pre> <br/> Each occurrence of x.wait is replaced with the following:<br/> <pre style="background-color: #f8f9fa; border: 1px solid #dee2e6; border-radius: 5px; padding: 12px; overflow-x: auto; font-family: monospace; font-size: 14px; margin-top: 10px;"><code> x_count = x_count + 1;
if (next_count &gt; 0)
    V(next);
else
    V(mutex);
------------------------------------------------------------ E1;
x_count = x_count - 1;
</code></pre> <br/>Each occurrence of x.signal is replaced with the following:<br/> <pre style="background-color: #f8f9fa; border: 1px solid #dee2e6; border-radius: 5px; padding: 12px; overflow-x: auto; font-family: monospace; font-size: 14px; margin-top: 10px;"><code>if (x_count &gt; 0)
{
    next_count = next_count + 1;
    ------------------- E2;
    P(next);
    next_count = next_count - 1;
} </code></pre> <br/> For correct implementation of the monitor, statements E1 and E2 are, respectively,</span>`,
            image: "",
            options: [
                `<span style="display: inline;"><span>\\( P(x\\_sem), V(next) \\)</span></span>`,
                `<span style="display: inline;"><span>\\( V(next), P(x\\_sem) \\)</span></span>`,
                `<span style="display: inline;"><span>\\( P(next), V(x\\_sem) \\)</span></span>`,
                `<span style="display: inline;"><span>\\( P(x\\_sem), V(x\\_sem) \\)</span></span>`
            ],
            answer: "D",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/3601/gate2006-it-57" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-it-2006" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE IT 2006</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Consider the solution to the bounded buffer producer/consumer problem by using general semaphores S, F, and E. The semaphore S is the mutual exclusion semaphore initialized to 1. The semaphore F corresponds to the number of free slots in the buffer and is initialized to N. The semaphore E corresponds to the number of elements in the buffer and is initialized to 0. <br/> <span>\\( \\begin{array}{|l|l|}\\hline \\textbf{Producer Process} &amp; \\textbf{Consumer Process} \\\\\\hline \\text{Produce an item;} &amp; \\text{Wait(E);} \\\\ \\text{Wait(F);} &amp; \\text{Wait(S);} \\\\ \\text{Wait(S);} &amp; \\text{Remove an item from the buffer;} \\\\\\text{Append the item to the buffer;} &amp; \\text{Signal(S);} \\\\ \\text{Signal(S);} &amp; \\text{Signal(F);} \\\\ \\text{Signal(E);} &amp; \\text{Consume the item;} \\\\\\hline \\end{array} \\)</span><br/><br/> Which of the following interchange operations may result in a deadlock?<br/><br/> I. Interchanging Wait (F) and Wait (S) in the Producer process <br/> II. Interchanging Signal (S) and Signal (F) in the Consumer process <br/></span>`,
            image: "",
            options: [
                `<span style="display: inline;">(I) only</span>`,
                `<span style="display: inline;">(II) only</span>`,
                `<span style="display: inline;">Neither (I) nor (II)</span>`,
                `<span style="display: inline;">Both (I) and (II)</span>`
            ],
            answer: "A",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/3598/gate2006-it-55" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-it-2006" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE IT 2006</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Barrier is a synchronization construct where a set of processes synchronizes globally i.e. each process in the set arrives at the barrier and waits for all others to arrive and then all processes leave the barrier. Let the number of processes in the set be three and S be a binary semaphore with the usual P and V functions. Consider the following C implementation of a barrier with line numbers shown on left. <pre style="background-color: #f8f9fa; border: 1px solid #dee2e6; border-radius: 5px; padding: 12px; overflow-x: auto; font-family: monospace; font-size: 14px; margin-top: 10px;"><code> void barrier (void) {
1:   P(S);
2:   process_arrived++;
3.   V(S);
4:   while (process_arrived !=3);
5:   P(S);
6:   process_left++;
7:   if (process_left==3) {
8:      process_arrived = 0;
9:      process_left = 0;
10:  }
11:  V(S);
}</code></pre>The variables process_arrived and process_left are shared among all processes and are initialized to zero. In a concurrent program all the three processes call the barrier function when they need to synchronize globally.<br/><br/>Which one of the following rectifies the problem in the implementation?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">lines 6 to 10 are simply replaced by process_arrived</span>`,
                `<span style="display: inline;">At the beginning of the barrier the first process to enter the barrier waits until process_arrived becomes zero before proceeding to execute P(S)</span>`,
                `<span style="display: inline;">Context switch is disabled at the beginning of the barrier and re-enabled at the end.</span>`,
                `<span style="display: inline;">The variable process_left is made private instead of shared</span>`
            ],
            answer: "B",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/43564/gate2006-79#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2006" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2006</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Barrier is a synchronization construct where a set of processes synchronizes globally i.e. each process in the set arrives at the barrier and waits for all others to arrive and then all processes leave the barrier. Let the number of processes in the set be three and S be a binary semaphore with the usual P and V functions. Consider the following C implementation of a barrier with line numbers shown on left. <pre style="background-color: #f8f9fa; border: 1px solid #dee2e6; border-radius: 5px; padding: 12px; overflow-x: auto; font-family: monospace; font-size: 14px; margin-top: 10px;"><code> void barrier (void) {
1:   P(S);
2:   process_arrived++;
3.   V(S);
4:   while (process_arrived !=3);
5:   P(S);
6:   process_left++;
7:   if (process_left==3) {
8:      process_arrived = 0;
9:      process_left = 0;
10:  }
11:  V(S);
}</code></pre>The variables process_arrived and process_left are shared among all processes and are initialized to zero. In a concurrent program all the three processes call the barrier function when they need to synchronize globally.<br/><br/> The above implementation of barrier is incorrect. Which one of the following is true?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">The barrier implementation is wrong due to the use of binary semaphore S</span>`,
                `<span style="display: inline;">The barrier implementation may lead to a deadlock if two barrier invocations are used in immediate succession</span>`,
                `<span style="display: inline;">Lines 6 to 10 need not be inside a critical section</span>`,
                `<span style="display: inline;">The barrier implementation is correct if there are only two processes instead of three</span>`
            ],
            answer: "B",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/1853/gate2006-78#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2006" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2006</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">The atomic feth-and-set x,y instruction unconditionally sets the memory location x to 1 and fetches the old value of x in y without allowing any intervening access to the memory location x . Consider the following implementation of P and V functions on a binary semaphore S. <pre style="background-color: #f8f9fa; border: 1px solid #dee2e6; border-radius: 5px; padding: 12px; overflow-x: auto; font-family: monospace; font-size: 14px; margin-top: 10px;"><code>void P(binary_semaphore*S){
   unsigned y;
   unsigned*x =&amp; (S-&gt;value);
   do {
          fetch-and-set x,y;
         } while(y);
 }
void V (binary_semphore*S){
      S_&gt;value = 0;
}</code></pre> Which one of the following is true?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">The implementation may not work if context switching is disabled in P</span>`,
                `<span style="display: inline;">Instead of using fetch-and-set, a pair of normal load/store can be used</span>`,
                `<span style="display: inline;">The implementation of V is wrong</span>`,
                `<span style="display: inline;">The code does not implement a binary semaphore</span>`
            ],
            answer: "A",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/1839/gate2006-61#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2006" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2006</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Two concurrent processes P1 and P2 use four shared resources R1, R2, R3 and R4, as shown below. <br/> <span>\\( \\begin{array}{|l|l|}\\hline \\textbf{P1} &amp; \\textbf{P2} \\\\ \\text{Compute: } &amp; \\text{Compute;} \\\\ \\text{Use $R1;$ } &amp; \\text{Use $R1;$} \\\\ \\text{Use $R2;$ } &amp; \\text{Use $R2;$}\\\\ \\text{Use $R3;$ } &amp; \\text{Use $R3;$} \\\\ \\text{Use $R4;$ } &amp; \\text{Use $R4;$} \\\\\\hline \\end{array} \\)</span><br/> Both processes are started at the same time, and each resource can be accessed by only one process at a time The following scheduling constraints exist between the access of resources by the processes:<br/> P2 must complete use of R1 before P1 gets access to R1.<br/> P1 must complete use of R2 before P2 gets access to R2.<br/> P2 must complete use of R3 before P1 gets access to R3.<br/> P1 must complete use of R4 before P2 gets access to R4.<br/> There are no other scheduling constraints between the processes. If only binary semaphores are used to enforce the above scheduling constraints, what is the minimum number of binary semaphores needed?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">1</span>`,
                `<span style="display: inline;">2</span>`,
                `<span style="display: inline;">3</span>`,
                `<span style="display: inline;">4</span>`
            ],
            answer: "B",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/3789/gate2005-it-42" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-it-2005" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE IT 2005</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        }
    ]
});

registerTest({
    series: "cse-gate-2027",
    name: "TWT-Operating System(Process Synchronization-IV)",
    date: "sep 08, 2026",
    topicsCovered: "Peterson's Algorithm, Starvation, Race Conditions, Mutex Locks, Synchronization Constraints",
    questions: [
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Given below is a program which when executed spawns two concurrent processes :<br/> semaphore X : = 0 ;<br/> /* Process now forks into concurrent processes P1 &amp; P2 */<br/> <span>\\( \\begin{array}{|l|l|}\\hline \\text{$P1$} &amp; \\text{$P2$} \\\\\\hline \\text{repeat forever } &amp; \\text{repeat forever} \\\\ \\text{$V (X) ;$ } &amp; \\text{$ P(X) ;$} \\\\ \\text{Compute; } &amp; \\text{Compute;}\\\\ \\text{$P(X) ;$ } &amp; \\text{$V(X) ;$} \\\\\\hline \\end{array} \\)</span><br/> Consider the following statements about processes P1 and P2:<br/> I.It is possible for process P1 to starve.<br/> II.It is possible for process P2 to starve.<br/> Which of the following holds?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">Both (I) and (II) are true.</span>`,
                `<span style="display: inline;">(I) is true but (II) is false.</span>`,
                `<span style="display: inline;">(II) is true but (I) is false</span>`,
                `<span style="display: inline;">Both (I) and (II) are false</span>`
            ],
            answer: "A",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/3788/gate2005-it-41" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-it-2005" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE IT 2005</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">The semaphore variables full, empty and mutex are initialized to 0, n and 1, respectively. Process P1 repeatedly adds one item at a time to a buffer of size n, and process P2 repeatedly removes one item at a time from the same buffer using the programs given below. In the programs, K, L, M and N are unspecified statements.<br/> P1<br/> <pre style="background-color: #f8f9fa; border: 1px solid #dee2e6; border-radius: 5px; padding: 12px; overflow-x: auto; font-family: monospace; font-size: 14px; margin-top: 10px;"><code> while (1) {
    K;
    P(mutex);
    Add an item to the buffer;
    V(mutex);
    L;
}</code></pre> <br/> P2<br/> <pre style="background-color: #f8f9fa; border: 1px solid #dee2e6; border-radius: 5px; padding: 12px; overflow-x: auto; font-family: monospace; font-size: 14px; margin-top: 10px;"><code>while (1) {
    M;
    P(mutex);
    Remove an item from the buffer;
    V(mutex);
    N;
} </code></pre> <br/> The statements K, L, M and N are respectively</span>`,
            image: "",
            options: [
                `<span style="display: inline;">P(full), V(empty), P(full), V(empty)</span>`,
                `<span style="display: inline;">P(full), V(empty), P(empty), V(full)</span>`,
                `<span style="display: inline;">P(empty), V(full), P(empty), V(full)</span>`,
                `<span style="display: inline;">P(empty), V(full), P(full), V(empty)</span>`
            ],
            answer: "D",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/3708/gate2004-it-65" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-it-2004" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE IT 2004</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Consider two processes P1 and P2 accessing the shared variables X and Y protected by two binary semaphores Sx and Sy respectively, both initialized to 1. P and V denote the usual semaphore operators, where P decrements the semaphore value, and V increments the semaphore value. The pseudo-code of P1 and P2 is as follows:<br/>P1 <pre style="background-color: #f8f9fa; border: 1px solid #dee2e6; border-radius: 5px; padding: 12px; overflow-x: auto; font-family: monospace; font-size: 14px; margin-top: 10px;"><code> While true do {
   L1 : ................
   L2 : ................
   X = X + 1;
   Y = Y - 1;
   V(Sx);
   V(Sy);             
 }</code></pre><br/>P2 <pre style="background-color: #f8f9fa; border: 1px solid #dee2e6; border-radius: 5px; padding: 12px; overflow-x: auto; font-family: monospace; font-size: 14px; margin-top: 10px;"><code> While true do {
   L3 : ................   
   L4 : ................
   Y = Y + 1;
   X = Y - 1;
   V(Sy);
   V(Sx);            
}</code></pre> In order to avoid deadlock, the correct operators at L1 , L2 , L3 and L4 are respectively.</span>`,
            image: "",
            options: [
                `<span style="display: inline;">P(Sy), P(Sx); P(Sx), P(Sy)</span>`,
                `<span style="display: inline;">P(Sx), P(Sy); P(Sy), P(Sx)</span>`,
                `<span style="display: inline;">P(Sx), P(Sx); P(Sy), P(Sy)</span>`,
                `<span style="display: inline;">P(Sx), P(Sy); P(Sx), P(Sy)</span>`
            ],
            answer: "D",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/1044/gate2004-48#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2004" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2004</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Suppose we want to synchronize two concurrent processes P and Q using binary semaphores S and T. The code for the processes P and Q is shown below. <pre style="background-color: #f8f9fa; border: 1px solid #dee2e6; border-radius: 5px; padding: 12px; overflow-x: auto; font-family: monospace; font-size: 14px; margin-top: 10px;"><code> Process P:
while (1) {
W:
   print '0';
   print '0';
X:
}
 
Process Q:
while (1) {
Y:
   print '1';
   print '1';
Z:
}</code></pre> Synchronization statements can be inserted only at points W, X, Y and Z.<br/> Which of the following will ensure that the output string never contains a substring of the form <span>\\( 01^{n}0 \\)</span> or <span>\\( 10^{n}1 \\)</span>, where n is odd?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">(S) at W, V(S) at X, P(T) at Y, V(T) at Z, S and T initially 1</span>`,
                `<span style="display: inline;">P(S) at W, V(T) at X, P(T) at Y, V(S) at Z, S and T initially 1</span>`,
                `<span style="display: inline;">P(S) at W, V(S) at X, P(S) at Y, V(S) at Z, S initially 1</span>`,
                `<span style="display: inline;">V(S) at W, V(T) at X, P(S) at Y, P(T) at Z, S and T initially 1</span>`
            ],
            answer: "C",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/43574/gate2003-81#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2003" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2003</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Suppose we want to synchronize two concurrent processes P and Q using binary semaphores S and T. The code for the processes P and Q is shown below. <pre style="background-color: #f8f9fa; border: 1px solid #dee2e6; border-radius: 5px; padding: 12px; overflow-x: auto; font-family: monospace; font-size: 14px; margin-top: 10px;"><code> Process P:
while (1) {
W:
   print '0';
   print '0';
X:
}
 
Process Q:
while (1) {
Y:
   print '1';
   print '1';
Z:
}</code></pre> Synchronization statements can be inserted only at points W, X, Y and Z. <br/><br/>Which of the following will always lead to an output staring with '001100110011' ?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">P(S) at W, V(S) at X, P(T) at Y, V(T) at Z, S and T initially 1</span>`,
                `<span style="display: inline;">P(S) at W, V(T) at X, P(T) at Y, V(S) at Z, S initially 1, and T initially 0</span>`,
                `<span style="display: inline;">P(S) at W, V(T) at X, P(T) at Y, V(S) at Z, S and T initially 1</span>`,
                `<span style="display: inline;">P(S) at W, V(S) at X, P(T) at Y, V(T) at Z, S initially 1, and T initially 0</span>`
            ],
            answer: "B",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/964/gate2003-80#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2003" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2003</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Let <span>\\( m[0]\\ldots m[4] \\)</span>be mutexes (binary semaphores) and <span>\\( P[0]\\ldots P[4] \\)</span> be processes. Suppose each process P[i] executes the following: <pre style="background-color: #f8f9fa; border: 1px solid #dee2e6; border-radius: 5px; padding: 12px; overflow-x: auto; font-family: monospace; font-size: 14px; margin-top: 10px;"><code>wait (m[i]; wait (m(i+1) mod 4]);
 ........... 
 release (m[i]); release (m(i+1) mod 4]);</code></pre> This could cause</span>`,
            image: "",
            options: [
                `<span style="display: inline;">Thrashing</span>`,
                `<span style="display: inline;">Deadlock</span>`,
                `<span style="display: inline;">Starvation, but not deadlock</span>`,
                `<span style="display: inline;">None of the above</span>`
            ],
            answer: "B",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/645/gate2000-1-21" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2000" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2000</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">A counting semaphore was initialized to 10. Then 6P (wait) operations and 4V (signal) operations were completed on this semaphore. The resulting value of the semaphore is</span>`,
            image: "",
            options: [
                `<span style="display: inline;">0</span>`,
                `<span style="display: inline;">8</span>`,
                `<span style="display: inline;">10</span>`,
                `<span style="display: inline;">12</span>`
            ],
            answer: "B",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/1668/gate1998-1-31" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-1998" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 1998</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">When the result of a computation depends on the speed of the processes involved, there is said to be</span>`,
            image: "",
            options: [
                `<span style="display: inline;">cycle stealing</span>`,
                `<span style="display: inline;">race condition</span>`,
                `<span style="display: inline;">a time lock</span>`,
                `<span style="display: inline;">a deadlock</span>`
            ],
            answer: "B",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/1667/gate1998-1-30" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-1998" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 1998</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Each Process <span>\\( P_i, i = 1\\ldots 9 \\)</span> is coded as follows<br/> <pre style="background-color: #f8f9fa; border: 1px solid #dee2e6; border-radius: 5px; padding: 12px; overflow-x: auto; font-family: monospace; font-size: 14px; margin-top: 10px;"><code> repeat 
    P(mutex)
    {Critical section}
    V(mutex)
forever</code></pre> <br/> The code for <span>\\( P_{10} \\)</span> is identical except it uses V(mutex) in place of P(mutex). What is the largest number of processes that can be inside the critical section at any moment?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">1</span>`,
                `<span style="display: inline;">2</span>`,
                `<span style="display: inline;">3</span>`,
                `<span style="display: inline;">None</span>`
            ],
            answer: "D",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/2264/gate1997-6-8" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-1997" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 1997</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">A critical section is a program segment</span>`,
            image: "",
            options: [
                `<span style="display: inline;">which should run in a certain amount of time</span>`,
                `<span style="display: inline;">which avoids deadlocks</span>`,
                `<span style="display: inline;">where shared resources are accessed</span>`,
                `<span style="display: inline;">which must be enclosed by a pair of semaphore operations, P and V</span>`
            ],
            answer: "C",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/2723/gate1996-1-19-isro2008-61" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-1996" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 1996</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Consider Peterson's algorithm for mutual exclusion between two concurrent processes i and j . The program executed by process is shown below. <pre style="background-color: #f8f9fa; border: 1px solid #dee2e6; border-radius: 5px; padding: 12px; overflow-x: auto; font-family: monospace; font-size: 14px; margin-top: 10px;"><code> repeat   
      flag [i] = true; 
      turn = j; 
      while ( P ) do no-op; 
      Enter critical section, perform actions, then exit critical 
      section 
      flag [ i ] = false; 
      Perform other non-critical section actions. 
   until false; </code></pre> For the program to guarantee mutual exclusion, the predicate P in the while loop should be</span>`,
            image: "",
            options: [
                `<span style="display: inline;">flag [j]= true and turn =i</span>`,
                `<span style="display: inline;">flag [j]=true and turn =j</span>`,
                `<span style="display: inline;">flag [i]=true and turn=j</span>`,
                `<span style="display: inline;">flag [i]=true and turn=i</span>`
            ],
            answer: "B",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/740/gate2001-2-22#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2001" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2001</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Choose the correct alternatives (more than one may be correct) and write the corresponding letters only:<br/> At a particular time of computation, the value of a counting semaphore is 7. Then 20 P operations and 15 V operations were completed on this semaphore. The resulting value of the semaphore is :</span>`,
            image: "",
            options: [
                `<span style="display: inline;">42</span>`,
                `<span style="display: inline;">2</span>`,
                `<span style="display: inline;">7</span>`,
                `<span style="display: inline;">12</span>`
            ],
            answer: "B",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/564/gate1992-02-x-isro2015-35" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-1992" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 1992</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">A critical region is</span>`,
            image: "",
            options: [
                `<span style="display: inline;">One which is enclosed by a pair of P and V operations on semaphores.</span>`,
                `<span style="display: inline;">A program segment that has not been proved bug-free.</span>`,
                `<span style="display: inline;">A program segment that often causes unexpected system crashes.</span>`,
                `<span style="display: inline;">A program segment where shared resources are accessed.</span>`
            ],
            answer: "D",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/80362/gate1987-1-xvi" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-1987" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 1987</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
    ]
});

registerTest({
    series: "cse-gate-2027",
    name: "TWT-Operating System(Deadlock-I)",
    date: "sep 08, 2026",
    topicsCovered: "Deadlock Necessary Conditions, Resource Allocation Graph, Safe State, Banker's Algorithm",
    questions: [
        {
            marks: 1,
            neg: 0,
            type: "NAT",
            text: `<span style="display: inline;">Consider a system consisting of <span>\\( k \\)</span> instances of a resource <span>\\( R \\)</span>, being shared by <span>\\( 5 \\)</span> processes. Assume that each process requires a maximum of two instances of resource <span>\\( R \\)</span> and a process can request or release only one instance at a time. Further, a process can request the second instance of the resource only after acquiring the first instance.<br/><br/> The minimum value of <span>\\( k \\)</span> for the system to be deadlock-free is ________. (answer in integer)</span>`,
            image: "",
            options: [
            ],
            answer: "6",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/523055/gate-cse-2026-set-1-question-25#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2026-set-1" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2026 SET-1</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0,
            type: "MSQ",
            text: `<span style="display: inline;">With respect to deadlocks in an operating system, which of the following statements is/are FALSE?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">Banker's algorithm is used to prevent deadlocks</span>`,
                `<span style="display: inline;">Deadlock formation can be prevented by ensuring that the hold and wait condition is not allowed</span>`,
                `<span style="display: inline;">An assignment edge in a resource allocation graph is marked from a process to a resource</span>`,
                `<span style="display: inline;">A safe state guarantees that all processes can finish without formation of a deadlock</span>`
            ],
            answer: ["A", "C"],
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/523061/gate-cse-2026-set-1-question-19#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2026-set-1" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2026 SET-1</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 2,
            neg: 0,
            type: "MSQ",
            text: `<span style="display: inline;"><span>\\( P = \\{P_1, P_2, P_3, P_4\\} \\)</span> consists of all active processes in an operating system. <span>\\( R = \\{R_1, R_2, R_3, R_4\\} \\)</span> consists of single instances of distinct types of resources in the system. <br/> The resource allocation graph has the following assignment and claim edges.<br/><br/> <span>\\( \\text{Assignment edges: } R_1 \\to P_1, R_2 \\to P_2, R_3 \\to P_3, R_4 \\to P_4 \\)</span> (the assignment edge <span>\\( R_1 \\to P_1 \\)</span> means resource <span>\\( R_1 \\)</span> is assigned to process <span>\\( P_1 \\)</span>, and so on for others) <br/><br/> <span>\\( \\text{Claim edges: } P_1 \\to R_2, P_2 \\to R_3, P_3 \\to R_1, P_2 \\to R_4, P_4 \\to R_2 \\)</span> (the claim edge <span>\\( P_1 \\to R_2 \\)</span> means process <span>\\( P_1 \\)</span> is waiting for resource <span>\\( R_2 \\)</span>, and so on for others) <br/><br/> Which of the following statement(s) is/are CORRECT?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">Aborting <span>\\( P_1 \\)</span> makes the system deadlock free.</span>`,
                `<span style="display: inline;">Aborting <span>\\( P_3 \\)</span> makes the system deadlock free.</span>`,
                `<span style="display: inline;">Aborting <span>\\( P_2 \\)</span> makes the system deadlock free.</span>`,
                `<span style="display: inline;">Aborting <span>\\( P_1 \\)</span> and <span>\\( P_4 \\)</span> makes the system deadlock free.</span>`
            ],
            answer: ["C", "D"],
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/460797/gate-cse-2025-set-2-question-38#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2025-set-2" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2025 SET-2</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0,
            type: "MSQ",
            text: `<span style="display: inline;">Which of the following statements is/are TRUE with respect to deadlocks?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">Circular wait is a necessary condition for the formation of deadlock.</span>`,
                `<span style="display: inline;">In a system where each resource has more than one instance, a cycle in its wait-for graph indicates the presence of a deadlock.</span>`,
                `<span style="display: inline;">If the current allocation of resources to processes leads the system to unsafe state, then deadlock will necessarily occur.</span>`,
                `<span style="display: inline;">In the resource-allocation graph of a system, if every edge is an assignment edge, then the system is not in deadlock state.</span>`
            ],
            answer: ["A", "D"],
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/371920/Gate-cse-2022-question-16#a_list_title" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2022" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2022</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">An aid to determine the deadlock occurrence is</span>`,
            image: "",
            options: [
                `<span style="display: inline;">resource allocation graph</span>`,
                `<span style="display: inline;">starvation graph</span>`,
                `<span style="display: inline;">inversion graph</span>`,
                `<span style="display: inline;">none of the above</span>`
            ],
            answer: "A",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/331251/isro2020-29" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/isro-cse-2020" style="color:#2f6d1a; text-decoration:none" target="_blank">ISRO CSE 2020</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Raymonds tree based algorithm ensures</span>`,
            image: "",
            options: [
                `<span style="display: inline;">no starvation, but deadlock may occur in rare cases</span>`,
                `<span style="display: inline;">no deadlock, but starvation may occur</span>`,
                `<span style="display: inline;">neither deadlock nor starvation can occur</span>`,
                `<span style="display: inline;">deadlock may occur in cases where the process is already starved</span>`
            ],
            answer: "B",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/331328/isro2020-22" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/isro-cse-2020" style="color:#2f6d1a; text-decoration:none" target="_blank">ISRO CSE 2020</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 2,
            neg: 0.66,
            type: "MCQ",
            text: `<span style="display: inline;">Consider the following snapshot of a system running n concurrent processes. Process <span>\\( i \\)</span> is holding <span>\\( X_i \\)</span> instances of a resource R, <span>\\( 1\\leq i\\leq n \\)</span>. Assume that all instances of R are currently in use. Further, for all <span>\\( i \\)</span>, process <span>\\( i \\)</span> can place a request for at most <span>\\( Y_i \\)</span> additional instances of R while holding the <span>\\( X_i \\)</span> instances it already has. Of the n processes, there are exactly two processes p and q such that <span>\\( Y_p=Y_q=0 \\)</span>. Which one of the following conditions guarantees that no other process apart from p and q can complete execution?</span>`,
            image: "",
            options: [
                `<span style="display: inline;"><span>\\( X_p+X_q \\lt Min \\{Y_k|1\\leq k\\leq n,k\\neq p,k\\neq q\\} \\)</span></span>`,
                `<span style="display: inline;"><span>\\( X_p+X_q \\lt Max \\{Y_k|1\\leq k\\leq n,k\\neq p,k\\neq q\\} \\)</span></span>`,
                `<span style="display: inline;"><span>\\( Min(X_p,X_q)\\geq Min \\{Y_k|1\\leq k\\leq n,k\\neq p,k\\neq q\\} \\)</span></span>`,
                `<span style="display: inline;"><span>\\( Min(X_p,X_q)\\leq Max \\{Y_k|1\\leq k\\leq n,k\\neq p,k\\neq q\\} \\)</span></span>`
            ],
            answer: "A",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/302809/gate2019-cs-39#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2019" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2019</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Consider a system having m resources of the same type. These resources are shared by 3 processes A,B,C, which have peak time demands of 3,4,6 respectively. The minimum value of m that ensures that deadlock will never occur is:</span>`,
            image: "",
            options: [
                `<span style="display: inline;">11</span>`,
                `<span style="display: inline;">12</span>`,
                `<span style="display: inline;">13</span>`,
                `<span style="display: inline;">14</span>`
            ],
            answer: "A",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/213567/isro2018-21" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/isro-cse-2018" style="color:#2f6d1a; text-decoration:none" target="_blank">ISRO CSE 2018</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 2,
            neg: 0.66,
            type: "MCQ",
            text: `<span style="display: inline;">In a system, there are three types of resources: E, F and G. Four processes <span>\\( P_0,P_1,P_2 \\; and \\; P_3 \\)</span> execute concurrently. At the outset, the processes have declared their maximum resource requirements using a matrix named Max as given below. For example, Max[<span>\\( P_2 \\)</span>,F] is the maximum number of instances of F that <span>\\( P_2 \\)</span> would require. The number of instances of the resources allocated to the various processes at any given state is given by a matrix named Allocation. <br/> Consider a state of the system with the Allocation matrix as shown below, and in which 3 instances of E and 3 instances of F are the only resources available. <br/> <img src="images/pyq-os/2018_q39.jpg"/> <br/> From the perspective of deadlock avoidance, which one of the following is true?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">The system is in safe state.</span>`,
                `<span style="display: inline;">The system is not in safe state, but would be safe if one more instance of E were available</span>`,
                `<span style="display: inline;">The system is not in safe state, but would be safe if one more instance of F were available</span>`,
                `<span style="display: inline;">The system is not in safe state, but would be safe if one more instance of G were available</span>`
            ],
            answer: "A",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/204113/gate2018-39#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2018" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2018</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0,
            type: "NAT",
            text: `<span style="display: inline;">Consider a system with 3 processes that share 4 instances of the same resource type. Each process can request a maximum of K instances. Resource instances can be requested and released only one at a time. The largest value of K that will always avoid deadlock is ____.</span>`,
            image: "",
            options: [
            ],
            answer: "2",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/204098/gate2018-24#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2018" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2018</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">What problem is solved by Dijikstra banker' algorithm?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">Mutual exclusion</span>`,
                `<span style="display: inline;">Deadlock recovery</span>`,
                `<span style="display: inline;">Deadlock avoidance</span>`,
                `<span style="display: inline;">Cache coherence</span>`
            ],
            answer: "C",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/128692/isro2017-48" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/isro-cse-2017" style="color:#2f6d1a; text-decoration:none" target="_blank">ISRO CSE 2017</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 2,
            neg: 0.66,
            type: "MCQ",
            text: `<span style="display: inline;">A system shares 9 tape drives. The current allocation and maximum requirement of tape drives for three processes are shown below: <br/><img src="images/pyq-os/20172_q27.jpg"/><br/> Which of the following best describes current state of the system ?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">Safe, Deadlocked</span>`,
                `<span style="display: inline;">Safe, Not Deadlocked</span>`,
                `<span style="display: inline;">Not Safe, Deadlocked</span>`,
                `<span style="display: inline;">Not Safe, Not deadlocked</span>`
            ],
            answer: "B",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/118375/gate2017-2-33#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2017-set-2" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2017 SET-2</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 2,
            neg: 0.66,
            type: "MCQ",
            text: `<span style="display: inline;">A multithreaded program P executes with x number of threads and uses y number of locks for ensuring mutual exclusion while operating on shared memory locations. All locks in the program are non-reentrant, i.e., if a thread holds a lock l, then it cannot re-acquire lock l without releasing it. If a thread is unable to acquire a lock, it blocks until the lock becomes available. The minimum value of x and the minimum value of y together for which execution of P can result in a deadlock are:</span>`,
            image: "",
            options: [
                `<span style="display: inline;">x = 1, y = 2</span>`,
                `<span style="display: inline;">x =2, y=1</span>`,
                `<span style="display: inline;">x = 2,y=2</span>`,
                `<span style="display: inline;">x = 1, y = 1</span>`
            ],
            answer: "D",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/118307/gate2017-1-27#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2017-set-1" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2017 SET-1</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">A system has 3 processes sharing 4 resources. If each process needs a maximum of 2 units, then</span>`,
            image: "",
            options: [
                `<span style="display: inline;">Deadlock can never occur</span>`,
                `<span style="display: inline;">Deadlock may occur</span>`,
                `<span style="display: inline;">Deadlock has to occur</span>`,
                `<span style="display: inline;">None of these</span>`
            ],
            answer: "A",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/55698/isro2016-47" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/isro-cse-2016" style="color:#2f6d1a; text-decoration:none" target="_blank">ISRO CSE 2016</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">With single resource, deadlock occurs</span>`,
            image: "",
            options: [
                `<span style="display: inline;">if there are more than two processes competing for that resources</span>`,
                `<span style="display: inline;">if there are only two processes competing for that resources</span>`,
                `<span style="display: inline;">if there is a single process competing for that resources</span>`,
                `<span style="display: inline;">none of these</span>`
            ],
            answer: "D",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/55705/isro2016-46" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/isro-cse-2016" style="color:#2f6d1a; text-decoration:none" target="_blank">ISRO CSE 2016</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
    ]
});

registerTest({
    series: "cse-gate-2027",
    name: "TWT-Operating System(Deadlock-II)",
    date: "sep 08, 2026",
    topicsCovered: "Deadlock Prevention, Deadlock Avoidance, Safe Sequence Calculation, Resource Claim Matrix",
    questions: [
        {
            marks: 2,
            neg: 0.66,
            type: "MCQ",
            text: `<span style="display: inline;">Consider the following policies for preventing deadlock in a system with mutually exclusive resources. <br/> I. Processes should acquire all their resources at the beginning of execution. If any resource is not available, all resources acquired so far are released <br/> II. The resources are numbered uniquely, and processes are allowed to request for resources only in increasing resource numbers <br/> III. The resources are numbered uniquely, and processes are allowed to request for resources only in decreasing resource numbers <br/> IV. The resources are numbered uniquely. A process is allowed to request only for a resource with resource number larger than its currently held resources <br/> Which of the above policies can be used for preventing deadlock?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">Any one of I and III but not II or IV</span>`,
                `<span style="display: inline;">Any one of I, III, and IV but not II</span>`,
                `<span style="display: inline;">Any one of II and III but not I or IV</span>`,
                `<span style="display: inline;">Any one of I, II, III, and IV</span>`
            ],
            answer: "D",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/8561/gate2015-3-35#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2015-set-3" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2015 SET-3</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">A system has 6 identical resources and N processes competing for them. Each process can request atmost 2 resources. Which one of the following values of N could lead to a deadlock?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">1</span>`,
                `<span style="display: inline;">2</span>`,
                `<span style="display: inline;">3</span>`,
                `<span style="display: inline;">4</span>`
            ],
            answer: "D",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/8114/gate2015-2-20#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2015-set-2" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2015 SET-2</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">What is the minimum number of resources required to ensure that deadlock will never occur, if there are currently three processes <span>\\( P_{1} \\)</span>,<span>\\( P_{2} \\)</span> and <span>\\( P_{3} \\)</span> running in a system whose maximum demand for the resources of same type are 3, 4, and 5 respectively.</span>`,
            image: "",
            options: [
                `<span style="display: inline;">3</span>`,
                `<span style="display: inline;">7</span>`,
                `<span style="display: inline;">9</span>`,
                `<span style="display: inline;">10</span>`
            ],
            answer: "D",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/55085/isro2014-68" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/isro-cse-2014" style="color:#2f6d1a; text-decoration:none" target="_blank">ISRO CSE 2014</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 2,
            neg: 0,
            type: "NAT",
            text: `<span style="display: inline;">A system contains three programs and each requires three tape units for its operation. The minimum number of tape units which the system must have such that deadlocks never arise is _________.</span>`,
            image: "",
            options: [
            ],
            answer: "7",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/2065/gate2014-3-31#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2014-set-3" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2014 SET-3</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 2,
            neg: 0.66,
            type: "MCQ",
            text: `<span style="display: inline;">An operating system uses the Banker's algorithm for deadlock avoidance when managing the allocation of three resource types X, Y, and Z to three processes P0, P1, and P2. The table given below presents the current system state. Here, the Allocation matrix shows the current number of resources of each type allocated to each process and the Max matrix shows the maximum number of resources of each type required by each process during its execution. <br/><img src="images/pyq-os/20141_q31.jpg"/><br/> There are 3 units of type X, 2 units of type Y and 2 units of type Z still available. The system is currently in a safe state. Consider the following independent requests for additional resources in the current state: <br/> REQ1: P0 requests 0 units of X, 0 units of Y and 2 units of Z <br/> REQ2: P1 requests 2 units of x, 0 units of Y and 0 units of Z <br/> Which one of the following is TRUE?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">Only REQ1 can be permitted.</span>`,
                `<span style="display: inline;">Only REQ2 can be permitted</span>`,
                `<span style="display: inline;">Both REQ1 and REQ2 can be permitted</span>`,
                `<span style="display: inline;">Neither REQ1 nor REQ2 can be permitted</span>`
            ],
            answer: "B",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/1800/gate2014-1-31#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2014-set-1" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2014 SET-1</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Consider the following process and resource requirement of each process.<br/><span>\\( \\begin{array}{|c|c|c|c|c|} \\hline {\\text { Process }} &amp; {\\text { Type 1 }} &amp; {\\text { Type 1 }} &amp; {\\text { Type 2 }}&amp; {\\text { Type 2 }} \\\\ \\hline &amp; \\text { Used } &amp; \\text { Max } &amp; \\text { Used } &amp; \\text { Max } \\\\ \\hline \\text { P1 } &amp; 1 &amp; 2 &amp; 1 &amp; 3 \\\\ \\hline \\text { P2 } &amp; 1 &amp; 3 &amp; 1 &amp; 2 \\\\ \\hline \\text { P3 } &amp; 2 &amp; 4 &amp; 1 &amp; 4 \\\\ \\hline \\end{array} \\)</span><br/>Predict the state of this system, assuming that there are a total of 5 instances of resource type 1 and 4 instances of resource type 2.</span>`,
            image: "",
            options: [
                `<span style="display: inline;">Can go to safe or unsafe state based on sequence</span>`,
                `<span style="display: inline;">Safe state</span>`,
                `<span style="display: inline;">Unsafe state</span>`,
                `<span style="display: inline;">Deadlock state</span>`
            ],
            answer: "C",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/44404/isro-2013-58" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/isro-cse-2013" style="color:#2f6d1a; text-decoration:none" target="_blank">ISRO CSE 2013</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Which of the following is not a necessary condition for deadlock?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">Mutual exclusion</span>`,
                `<span style="display: inline;">Reentrancy</span>`,
                `<span style="display: inline;">Hold and wait</span>`,
                `<span style="display: inline;">No pre-emption</span>`
            ],
            answer: "B",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/44403/isro-2013-57" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/isro-cse-2013" style="color:#2f6d1a; text-decoration:none" target="_blank">ISRO CSE 2013</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">A total of 9 units of a resource type available, and given the safe state shown below, which of the following sequence will be a safe state?<br/><br/><span>\\( \\begin{array}{lll} \\text {Process } &amp; \\text {Used } &amp; \\text {Max } \\\\ P_{1} &amp; 2 &amp; 7 \\\\ P_{2} &amp; 1 &amp; 6 \\\\ P_{3} &amp; 2 &amp; 5 \\\\ P_{4} &amp; 1 &amp; 4 \\end{array} \\)</span></span>`,
            image: "",
            options: [
                `<span style="display: inline;"><span>\\( \\langle P_4, P_1, P_3, P_2\\rangle \\)</span></span>`,
                `<span style="display: inline;"><span>\\( \\langle P_4, P_2, P_1, P_3\\rangle \\)</span></span>`,
                `<span style="display: inline;"><span>\\( \\langle P_4, P_2, P_3, P_1\\rangle \\)</span></span>`,
                `<span style="display: inline;"><span>\\( \\langle P_3, P_1, P_2, P_4 \\rangle \\)</span></span>`
            ],
            answer: "D",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/52836/isro2011-60" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/isro-cse-2011" style="color:#2f6d1a; text-decoration:none" target="_blank">ISRO CSE 2011</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 2,
            neg: 0.66,
            type: "MCQ",
            text: `<span style="display: inline;">A system has n resources <span>\\( R_{0},...R_{n-1} \\)</span>, and k processes <span>\\( P_{0},...P_{k-1} \\)</span>. The implementation of the resource request logic of each process <span>\\( P_{i} \\)</span> is as follows: <pre style="background-color: #f8f9fa; border: 1px solid #dee2e6; border-radius: 5px; padding: 12px; overflow-x: auto; font-family: monospace; font-size: 14px; margin-top: 10px;"><code> 
if (i%2= = 0) {
        if (i[latex]\\lt[/latex]n) request [latex]R_{i}[/latex] ;
        if (i+2[latex]\\lt[/latex]n)request [latex]R_{i+2}[/latex];
}
else {
         if (i[latex]\\lt[/latex]n) request [latex]R_{n-i}[/latex];
         if (i+2[latex]\\lt[/latex]n)request [latex]R_{n-i-2}[/latex] ;
} </code></pre> In which one of the following situations is a deadlock possible?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">n = 40,k = 26</span>`,
                `<span style="display: inline;">n = 21,k = 12</span>`,
                `<span style="display: inline;">n = 20,k = 10</span>`,
                `<span style="display: inline;">n = 41,k = 19</span>`
            ],
            answer: "B",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/2348/gate2010-46#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2010" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2010</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">When a process is rolled back as a result of deadlock the difficulty which arises is</span>`,
            image: "",
            options: [
                `<span style="display: inline;">Starvation</span>`,
                `<span style="display: inline;">System throughput</span>`,
                `<span style="display: inline;">Low device utilization</span>`,
                `<span style="display: inline;">Cycle stealing</span>`
            ],
            answer: "A",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/18583/isro2009-77" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/isro-cse-2009" style="color:#2f6d1a; text-decoration:none" target="_blank">ISRO CSE 2009</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Consider a system having "n" resources of same type. These resources are shared by 3 processes, A, B, C. These have peak demands of 3, 4, and 6 respectively. For what value of "n" deadlock won't occur</span>`,
            image: "",
            options: [
                `<span style="display: inline;">15</span>`,
                `<span style="display: inline;">9</span>`,
                `<span style="display: inline;">10</span>`,
                `<span style="display: inline;">13</span>`
            ],
            answer: "D",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/48037/isro2009-16" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/isro-cse-2009" style="color:#2f6d1a; text-decoration:none" target="_blank">ISRO CSE 2009</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 2,
            neg: 0.66,
            type: "MCQ",
            text: `<span style="display: inline;">Consider a system with 4 types of resources R1 (3 units), R2 (2 units), R3 (3 units), R4 (2 units). A non-preemptive resource allocation policy is used. At any given instance, a request is not entertained if it cannot be completely satisfied. Three processes P1, P2, P3 request the sources as follows if executed independently. <br/><img src="images/pyq-os/20091_q30.jpg"/> <br/> Which one of the following statements is TRUE if all three processes run concurrently starting at time t=0?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">All processes will finish without any deadlock</span>`,
                `<span style="display: inline;">Only P1 and P2 will be in deadlock</span>`,
                `<span style="display: inline;">Only P1 and P3 will be in a deadlock</span>`,
                `<span style="display: inline;">All three processes will be in deadlock</span>`
            ],
            answer: "A",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/1316/gate2009-30#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2009" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2009</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">In which of the following four necessary conditions for deadlock processes claim exclusive control of the resources they require?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">no preemption</span>`,
                `<span style="display: inline;">mutual exclusion</span>`,
                `<span style="display: inline;">circular wait</span>`,
                `<span style="display: inline;">hold and wait</span>`
            ],
            answer: "B",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/17254/isro2008-62" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/isro-cse-2008" style="color:#2f6d1a; text-decoration:none" target="_blank">ISRO CSE 2008</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 2,
            neg: 0.66,
            type: "MCQ",
            text: `<span style="display: inline;">An operating system implements a policy that requires a process to release all resources before making a request for another resource. Select the TRUE statement from the following:</span>`,
            image: "",
            options: [
                `<span style="display: inline;">Both starvation and deadlock can occur</span>`,
                `<span style="display: inline;">Starvation can occur but deadlock cannot occur</span>`,
                `<span style="display: inline;">Starvation cannot occur but deadlock can occur</span>`,
                `<span style="display: inline;">Neither starvation nor deadlock can occur</span>`
            ],
            answer: "B",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/3364/gate2008-it-54" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-it-2008" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE IT 2008</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 2,
            neg: 0.66,
            type: "MCQ",
            text: `<span style="display: inline;">Which of the following is NOT true of deadlock prevention and deadlock avoidance schemes?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">In deadlock prevention, the request for resources is always granted if the resulting state is safe</span>`,
                `<span style="display: inline;">In deadlock avoidance, the request for resources is always granted if the result state is safe</span>`,
                `<span style="display: inline;">Deadlock avoidance is less restrictive than deadlock prevention</span>`,
                `<span style="display: inline;">Deadlock avoidance requires knowledge of resource requirements a priori</span>`
            ],
            answer: "A",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/488/gate2008-65#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2008" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2008</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
    ]
});

registerTest({
    series: "cse-gate-2027",
    name: "TWT-Operating System(Deadlock-III)",
    date: "sep 08, 2026",
    topicsCovered: "Dining Philosophers Problem, Deadlock-free Resource Conditions, Resource Preemption, Rollback",
    questions: [
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Consider a system having 'm' resources of the same type. The resources are shared by 3 processes A, B, C, which have peak time demands of 3, 4, 6 respectively. The minimum value of 'm' that ensures that deadlock will never occur is</span>`,
            image: "",
            options: [
                `<span style="display: inline;">11</span>`,
                `<span style="display: inline;">12</span>`,
                `<span style="display: inline;">13</span>`,
                `<span style="display: inline;">14</span>`
            ],
            answer: "A",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/49515/isro2007-40" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/isro-cse-2007" style="color:#2f6d1a; text-decoration:none" target="_blank">ISRO CSE 2007</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">A single processor system has three resource types X, Y and Z, which are shared by three processes. There are 5 units of each resource type. Consider the following scenario, where the column alloc denotes the number of units of each resource type allocated to each process, and the column request denotes the number of units of each resource type requested by a process in order to complete execution. Which of these processes will finish LAST? <br/><img src="images/pyq-os/20071_q57.jpg"/></span>`,
            image: "",
            options: [
                `<span style="display: inline;">P0</span>`,
                `<span style="display: inline;">P1</span>`,
                `<span style="display: inline;">P2</span>`,
                `<span style="display: inline;">None of the above, since the system is in a deadlock.</span>`
            ],
            answer: "C",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/1255/gate2007-57#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2007" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2007</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Consider the following snapshot of a system running n processes. Process i is holding <span>\\( x_{i} \\)</span> instances of a resource R, for <span>\\( 1\\leq i\\leq n \\)</span>. Currently, all instances of R are occupied. Further, for all i , process i has placed a request for an additional <span>\\( y_{i} \\)</span>, instances while holding the <span>\\( x_{i} \\)</span> instances it already has, There are exactly two processes p and q such that <span>\\( y_{p} \\)</span>=<span>\\( y_{q} \\)</span>=0. Which one of the following can serve as a necessary condition to guarantee that the system is not approaching a deadlock?</span>`,
            image: "",
            options: [
                `<span style="display: inline;"><span>\\( min(x_{p},x_{q}) \\lt max_{k\\neq p,q}(y_{k}) \\)</span></span>`,
                `<span style="display: inline;"><span>\\( x_{p}+x_{q}\\geq min_{k\\neq p,q}(y_{k}) \\)</span></span>`,
                `<span style="display: inline;"><span>\\( max(x_{p},x_{q})\\gt 1 \\)</span></span>`,
                `<span style="display: inline;"><span>\\( min(x_{p},x_{q})\\gt 1 \\)</span></span>`
            ],
            answer: "B",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/1844/gate2006-66#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2006" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2006</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Two shared resources <span>\\( R_1 \\)</span> and <span>\\( R_2 \\)</span> are used by processes <span>\\( P_1 \\)</span> and <span>\\( P_2 \\)</span>. Each process has a certain priority for accessing each resource. Let <span>\\( T_{ij} \\)</span> denote the priority of <span>\\( P_i \\)</span> for accessing <span>\\( R_j \\)</span>. A process <span>\\( P_i \\)</span> can snatch a resource <span>\\( R_k \\)</span> from process <span>\\( P_j \\)</span> if <span>\\( T_{ik} \\)</span> is greater than <span>\\( T_{jk} \\)</span>.<br/> Given the following :<br/><br/> (I). <span>\\( T_{11} \\gt T_{21} \\)</span><br/> (II). <span>\\( T_{12} \\gt T_{22} \\)</span><br/> (III). <span>\\( T_{11} \\lt T_{21} \\)</span><br/> (IV). <span>\\( T_{12} \\lt T_{22} \\)</span><br/><br/> Which of the following conditions ensures that <span>\\( P_1 \\)</span> and <span>\\( P_2 \\)</span> can never deadlock?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">(I) and (IV)</span>`,
                `<span style="display: inline;">(II) and (III)</span>`,
                `<span style="display: inline;">(I) and (II)</span>`,
                `<span style="display: inline;">None of the above</span>`
            ],
            answer: "C",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/3823/gate2005-it-62" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-it-2005" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE IT 2005</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Suppose n processes, <span>\\( P_1,..., P_n \\)</span> share m identical resource units, which can be reserved and released one at a time. The maximum resource requirement of process <span>\\( P_i \\)</span> is <span>\\( s_i \\)</span>, where <span>\\( s_i \\gt 0 \\)</span>. Which one of the following is a sufficient condition for ensuring that deadlock does not occur? <br/><img src="images/pyq-os/20051_q71.jpg"/></span>`,
            image: "",
            options: [
                `<span style="display: inline;">A</span>`,
                `<span style="display: inline;">B</span>`,
                `<span style="display: inline;">C</span>`,
                `<span style="display: inline;">D</span>`
            ],
            answer: "C",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/1394/gate2005-71#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2005" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2005</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">In a certain operating system, deadlock prevention is attemped using the following scheme. Each process is assigned a unique timestamp, and is restarted with the same timestamp if killed. Let <span>\\( P_h \\)</span> be the process holding a resource R, <span>\\( P_r \\)</span> be a process requesting for the same resource R, and T(<span>\\( P_h \\)</span>) and T(<span>\\( P_r \\)</span>) be their timestamps respectively. The decision to wait or preempt one of the processes is based on the following algorithm.<br/> <pre style="background-color: #f8f9fa; border: 1px solid #dee2e6; border-radius: 5px; padding: 12px; overflow-x: auto; font-family: monospace; font-size: 14px; margin-top: 10px;"><code> if T(Pr) &lt; T(Ph) then 
    kill Pr 
else wait</code></pre> Which one of the following is TRUE?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">The scheme is deadlock-free, but not starvation-free</span>`,
                `<span style="display: inline;">The scheme is not deadlock-free, but starvation-free</span>`,
                `<span style="display: inline;">The scheme is neither deadlock-free nor starvation-free</span>`,
                `<span style="display: inline;">The scheme is both deadlock-free and starvation-free</span>`
            ],
            answer: "A",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/3706/gate2004-it-63" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-it-2004" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE IT 2004</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">The following are the starting and ending times of activities A,B,C,D,E,F,G and H respectively in chronological order: <span>\\( a_{s}\\; b_{s} \\; c_{s}\\;a_{e}\\;d_{s}\\;c_{e}\\;e_{s}\\;f_{s}\\;b_{e}\\;d_{e}\\;g_{s}\\;e_{e}\\;f_{e}\\;h_{s}\\;g_{e}\\;h_{e} \\)</span>. Here, <span>\\( x_{s} \\)</span> denotes the starting time and <span>\\( x_{e} \\)</span> denotes the ending time of activity X. W need to schedule the activities in a set of rooms available to us. An activity can be scheduled in a room only if the room is reserved for the activity for its entire duration. What is the minimum number of rooms required?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">3</span>`,
                `<span style="display: inline;">4</span>`,
                `<span style="display: inline;">5</span>`,
                `<span style="display: inline;">6</span>`
            ],
            answer: "B",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/956/gate2003-69#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2003" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2003</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Which of the following is not a valid deadlock prevention scheme?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">Release all resources before requesting a new resource.</span>`,
                `<span style="display: inline;">Number the resources uniquely and never request a lower numbered resource than the last one requested.</span>`,
                `<span style="display: inline;">Never request a resource after releasing any resource.</span>`,
                `<span style="display: inline;">Request and all required resources be allocated before execution.</span>`
            ],
            answer: "C",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/670/gate2000-2-23" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2000" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2000</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">A computer has six tape drives, with n processes competing for them. Each process may need two drives. What is the maximum value of n for the system to be deadlock free?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">6</span>`,
                `<span style="display: inline;">5</span>`,
                `<span style="display: inline;">4</span>`,
                `<span style="display: inline;">3</span>`
            ],
            answer: "B",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/1669/gate1998-1-32" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-1998" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 1998</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">An operating system contains 3 user processes each requiring 2 units of resource R. The minimum number of units of R such that no deadlocks will ever arise is</span>`,
            image: "",
            options: [
                `<span style="display: inline;">3</span>`,
                `<span style="display: inline;">5</span>`,
                `<span style="display: inline;">4</span>`,
                `<span style="display: inline;">6</span>`
            ],
            answer: "C",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/2263/gate1997-6-7" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-1997" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 1997</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">A solution to the Dining Philosophers Problem which avoids deadlock is to</span>`,
            image: "",
            options: [
                `<span style="display: inline;">ensure that all philosophers pick up the left fork before the right fork</span>`,
                `<span style="display: inline;">ensure that all philosophers pick up the right fork before the left fork</span>`,
                `<span style="display: inline;">ensure that one particular philosopher picks up the left fork before the right fork, and that all other philosophers pick up the right fork before the left fork</span>`,
                `<span style="display: inline;">None of the above</span>`
            ],
            answer: "C",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/2748/gate1996-2-19" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-1996" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 1996</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Consider a system having m resources of the same type. These resources are shared by 3 processes A,B, and C which have peak demands of 3, 4 and 6 respectively. For what value of m deadlock will not occur?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">7</span>`,
                `<span style="display: inline;">9</span>`,
                `<span style="display: inline;">10</span>`,
                `<span style="display: inline;">13</span>`,
                `<span style="display: inline;">15</span>`
            ],
            answer: "D",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/2297/gate1993-7-9-ugcnet-dec2012-iii-41" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-1993" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 1993</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Choose the correct alternatives (more than one may be correct) and write the corresponding letters only: <br/> A computer system has 6 tape devices, with n processes competing for them. Each process may need 3 tape drives. The maximum value of n for which the system is guaranteed to be deadlock-free is:</span>`,
            image: "",
            options: [
                `<span style="display: inline;">2</span>`,
                `<span style="display: inline;">3</span>`,
                `<span style="display: inline;">4</span>`,
                `<span style="display: inline;">1</span>`
            ],
            answer: "A",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/568/gate1992-02-xi" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-1992" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 1992</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
    ]
});