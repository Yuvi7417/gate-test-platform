registerTest({
    "name": "DPP 06 - Computer Organization (Secondary Memory, I/O Interface & DMA)",
    "testLabel": "DPP 06",
    "testType": "DPP",
    "bracket": "Secondary Memory, I/O Interface & DMA",
    "subject": "coa",
    "series": "cse-dpp-2027",
    "date": "Nov 03, 2026",
    "duration": "24 Min",
    "totalMarks": 8,
    "topicsCovered": "Secondary Memory, I/O Interface & DMA Practice Questions",
    "questions": [
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>A DMA controller transfers data from an I/O device to main memory using cycle stealing. The CPU is running at a frequency of $50$ MHz . The I/O device transfers data at a rate of $500 \\mathrm{~KB} / \\mathrm{s}$ (Kilobytes per second). The DMA controller transfers data one word ($4$ bytes) at a time. If one memory cycle takes one CPU clock cycle, what percentage of CPU cycles are stolen by the DMA controller?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$0.256 \\%$<br/></span>",
                "<span style=\"display: inline;\">$2.56 \\%$<br/></span>",
                "<span style=\"display: inline;\">$1.28 \\%$<br/></span>",
                "<span style=\"display: inline;\">$0.128 \\%$</span>"
            ],
            "answer": "A",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"488431\"></a><div itemprop=\"text\"><p> </p><ol start=\"1\"><li><p><b>Calculate the device transfer rate in words per second:</b></p></li></ol><ul><li><p>Rate in bytes per second:</p><p>500 \\ \\mathrm{KB/s} = 500 \\times 1024 \\ \\mathrm{Bytes/s} = 512{,}000 \\ \\mathrm{Bytes/s}</p></li><li><p>Since $1 \\ \\text{word} = 4 \\ \\text{bytes}$, the rate in words per second is:</p><p>$\\text{Rate} = \\frac{512{,}000 \\ \\mathrm{Bytes/s}}{4 \\ \\mathrm{Bytes/word}} = 128{,}000 \\ \\mathrm{words/s}$</p></li></ul><p> </p><ol start=\"2\"><li><p><b>Determine the number of cycles stolen per second:</b></p></li></ol><ul><li><p>In cycle stealing, the DMA controller steals one memory cycle for each word it transfers.</p></li><li><p>Since one memory cycle equals one CPU clock cycle, the DMA steals:</p><p>$128{,}000 \\ \\text{CPU cycles/second}$</p></li></ul><p> </p><ol start=\"3\"><li><p><b>Calculate the percentage of stolen cycles:</b></p></li></ol><p> </p><ul><li><p>Total CPU cycles available per second:</p><p>$50 \\ \\mathrm{MHz} = 50{,}000{,}000 \\ \\text{cycles/s}$</p></li><li><p>Percentage stolen:</p><p>$\\text{Percentage} = \\left( \\frac{128{,}000}{50{,}000{,}000} \\right) \\times 100$</p><p>$\\text{Percentage} = 0.00256 \\times 100 = 0.256 \\%$</p></li></ul><p> </p><p><b>Final Answer: A. $0.256 %$</b></p><p> </p></div><br><br><a href=\"https://gateoverflow.in/488430/go-classes-dpp-coa-dma#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-coa-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/dma\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">COA - DMA</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>In a system where multiple I/O devices are connected using a daisy-chaining scheme for interrupt handling, three devices, D1, D2, and D3 are connected in that order of proximity to the CPU (D1 is closest). If all three devices request an interrupt at the same time, how is the priority resolved?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">The device physically farthest from the CPU (D3) gets the highest priority.<br/></span>",
                "<span style=\"display: inline;\">The CPU polls each device to determine the highest-priority request.<br/></span>",
                "<span style=\"display: inline;\">The device physically closest to the CPU (D1) gets the highest priority.<br/></span>",
                "<span style=\"display: inline;\">All requests are serviced in a round-robin fashion.</span>"
            ],
            "answer": "C",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"489375\"></a><div itemprop=\"text\"><p>Answer : - option C </p><p>DAISY CHAINING SCHEME </p><p style=\"text-align:center\"><img alt=\"\" height=\"449\" src=\"https://gateoverflow.in/?qa=blob&amp;qa_blobid=506836243972053174\" width=\"1200\"/></p><p> </p></div><br><br><a href=\"https://gateoverflow.in/488426/go-classes-dpp-coa-daisy-chaining#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-coa-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/dma\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">COA - I/O Interface</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>A computer's main memory unit has a peak theoretical bandwidth of $12.8 \\mathrm{~GB} / \\mathrm{s}$. The memory is constructed using DDR4 SDRAM chips which have the following characteristics:</p><p>Considering the time lost to refresh cycles, the effective data bandwidth of the memory unit in GB/s is ________ . (Round your answer to two decimal places.)</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">The number of rows of memory cells in each chip is $2^{13}$.<br/></span>",
                "<span style=\"display: inline;\">The time required to refresh a single row is $60$ nanoseconds.<br/></span>",
                "<span style=\"display: inline;\">The refresh operation must be performed on all rows every $4$ milliseconds.</span>"
            ],
            "answer": "11.227136",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"488184\"></a><div itemprop=\"text\"><p>Here is the step-by-step breakdown to calculate the effective bandwidth.<br/>1. Calculate the Total Time Spent on Refreshing within one Refresh Period:</p><p>The refresh command is issued for each row, and this must be completed for all rows within the specified refresh period.</p><ul><li>Number of rows to be refreshed $=2^{13}=8192$ rows.<br/> </li><li>Time to refresh one row $=60 \\mathrm{~ns}$.<br/> </li><li>Total time required for refreshing $=$ (Number of rows) $\\times$ (Time per row refresh)<br/> </li><li>Total refresh time $=8192 \\times 60 \\mathrm{~ns}=491,520 \\mathrm{~ns}$.</li></ul><p>2. Determine the Total Time in the Refresh Period:</p><p>This is the total time window within which all the refresh operations must be completed.</p><ul><li>Refresh Period = 4 milliseconds = $4 \\times 10^{-3}$ seconds.<br/> </li><li>In nanoseconds, Refresh Period $=4 \\times 10^6 \\mathrm{~ns}=4,000,000 \\mathrm{~ns}$.</li></ul><p>3. Calculate the Percentage of Time Available for Read/Write Operations:</p><p>First, we find the fraction of time the memory is busy with refreshing.</p><ul><li>Fraction of time for refresh $=\\frac{\\text { Total refresh time }}{\\text { Refresh Period }}=\\frac{491,520 \\mathrm{~ns}}{4,000,000 \\mathrm{~ns}}=0.12288$.</li></ul><p>The remaining time is available for normal memory operations like reading and writing.</p><ul><li>Fraction of time available for $\\mathrm{R} / \\mathrm{W}=1-0.12288=0.87712$.</li></ul><p>This means the memory is available for useful work $87.712 \\%$ of the time.<br/><br/>4. Calculate the Effective Bandwidth:</p><p>The effective bandwidth is the peak bandwidth derated by the fraction of time available for data transfer.</p><ul><li>Peak Bandwidth $=12.8 \\mathrm{~GB} / \\mathrm{s}$.</li><li>Effective Bandwidth $=$ Peak Bandwidth $\\times$ (Fraction of time available for R/W)</li><li>Effective Bandwidth $=12.8 \\mathrm{~GB} / \\mathrm{s} \\times 0.87712=11.227136 \\mathrm{~GB} / \\mathrm{s}$.</li></ul><p>5. Final Answer:</p><p>Rounding the result to two decimal places gives 11.23 .<br/><br/>The effective data bandwidth is $11.23 \\mathrm{~GB} / \\mathrm{s}$.</p></div><br><br><a href=\"https://gateoverflow.in/488183/go-classes-dpp-coa-memory-interfacing#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-coa-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/dma\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">COA - I/O Interface</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>A system with a $1$ GHz CPU uses DMA to transfer data from a device at a rate of $50 \\mathrm{MB} / \\mathrm{s}$. The data is transferred in $32$ KB blocks. The DMA setup requires $1000$ CPU cycles and the interrupt at the end of the transfer takes $500$ CPU cycles to process. What percentage of CPU time is consumed by the DMA operations for a single block transfer?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$0.23 \\%$<br/></span>",
                "<span style=\"display: inline;\">$1.50 \\%$<br/></span>",
                "<span style=\"display: inline;\">$2.50 \\%$<br/></span>",
                "<span style=\"display: inline;\">$5.00 \\%$</span>"
            ],
            "answer": "A",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"487315\"></a><div itemprop=\"text\"><p>Answer: Option <strong>A </strong>(0.23%)<br/> </p><p>\\begin{align*}<br/>\\text{Initialization Time} &amp;= \\frac{1000 \\text{ cycles}}{1 \\text{ GHz}} = \\frac{1000}{10^9} \\text{ seconds} = 1\\ \\mu s \\\\<br/>\\text{Completion Time} &amp;= \\frac{500 \\text{ cycles}}{1 \\text{ GHz}} = \\frac{500}{10^9} \\text{ seconds} = 0.5\\ \\mu s \\\\<br/>\\text{Block Transfer Time} &amp;= \\frac{32\\ \\text{KB}}{50\\ \\text{MB/s}} = \\frac{32 \\times 1024}{50 \\times 10^6} \\text{ seconds} = 640\\ \\mu s<br/>\\end{align*}</p><p>\\begin{align*}<br/>\\text{Total Time} &amp;= \\text{Initialization} + \\text{Data Transfer} + \\text{Completion} = 1 + 640 + 0.5 = 641.5\\ \\mu s<br/>\\end{align*}</p><p>\\begin{align*}<br/>\\text{CPU Consumed Time} &amp;= 1 + 0.5 = 1.5\\ \\mu s<br/>\\end{align*}</p><p>\\begin{align*}<br/>\\% \\text{ CPU Time Consumed} &amp;= \\frac{1.5}{641.5} \\times 100 = 0.23\\%<br/>\\end{align*}</p><p> </p><p> </p></div><br><br><a href=\"https://gateoverflow.in/487057/go-classes-dpp-coa-dma#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-coa-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/dma\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">COA - DMA</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Arrange the given steps required for a Direct Memory Access (DMA) transfer in the correct order.<br/><br/>(A) Initiate DMA transfer request<br/><br/>(B) Transfer data directly between peripheral and memory<br/><br/>(C) Processor grants DMA control over the system bus<br/><br/>(D) DMA controller completes data transfer and signals completion</p><p>Choose the correct answer from the options given below:</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$(C), (A), (B), (D)$<br/></span>",
                "<span style=\"display: inline;\">$(A), (C), (B), (D)$<br/></span>",
                "<span style=\"display: inline;\">$(A),(B),(C),(D)$<br/></span>",
                "<span style=\"display: inline;\">$(C), (B), (A), (D)$</span>"
            ],
            "answer": "B",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"485697\"></a><div itemprop=\"text\"><p>Steps are as follows - </p><p>(A) Initiate DMA transfer request<br/>(C) Processor grants DMA control over the system bus<br/>(B) Transfer data directly between peripheral and memory<br/>(D) DMA controller completes data transfer and signals completion</p><p>So answer is <strong>Option (B)</strong></p></div><br><br><a href=\"https://gateoverflow.in/485676/go-classes-dpp-coa-ugc-net#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-coa-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/dma\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">COA - DMA</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\">A computer system uses DMA in cycle stealing mode. The DMA controller transfers one $8$-bit character in a single memory cycle from an I/O device to main memory at fixed intervals. The processor clock cycle is $20$ ns. If every $50$ processor cycles, one cycle is stolen by the DMA for data transfer, the effective data transfer rate of the device is ___________ $\\mathrm{X} 10^6$ bytes per second.</div></span>",
            "image": "",
            "options": [],
            "answer": "10",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"484420\"></a><div itemprop=\"text\">In $50$ cycles, we can transfer one $8$-bit character. <br/> Thus,<br/> \\[<br/> 50 \\ \\text{cycles} \\Rightarrow 1 \\ \\text{Byte}<br/> \\]<br/> <br/> Since clock cycle time is $20 \\ \\text{ns}$,<br/> \\[<br/> 50 \\times 20 \\ \\text{ns} = 1000 \\ \\text{ns}<br/> \\]<br/> <br/> Therefore,<br/> \\[<br/> 1 \\ \\text{Byte in} \\ 1000 \\ \\text{ns} = 10^{-6} \\ \\text{sec}<br/> \\]<br/> <br/> Hence,<br/> \\[<br/> \\frac{1}{10^{-6}} \\ \\text{Bytes in 1 sec} = 10^6 \\ \\text{Bytes/sec}<br/> \\]<br/> <br/> </div><br><br><a href=\"https://gateoverflow.in/484342/go-classes-dpp-coa-dma#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-coa-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/dma\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">COA - DMA</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>A magnetic disk has the following specifications:</p><p>The disk controller uses cycle stealing DMA mode. In this mode, whenever a byte is ready, it transfers it to memory directly (or reads a byte from memory in case of a write). The memory has a cycle time of $100$ ns.</p><p>Assume continuous data transfer is possible once the head is positioned at the beginning of a track.</p><p>The maximum fraction of CPU time that can be blocked during a DMA transfer is ____________ $\\%$.</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">Number of recording surfaces $=8$</span>",
                "<span style=\"display: inline;\">Number of tracks per surface $=20,000$</span>",
                "<span style=\"display: inline;\">Number of sectors per track = 400</span>",
                "<span style=\"display: inline;\">Sector size $=1 \\mathrm{~KB}$</span>",
                "<span style=\"display: inline;\">Disk rotation speed $=6000 \\mathrm{rpm}$</span>"
            ],
            "answer": "400",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"484340\"></a><div itemprop=\"text\"><p>First, let's calculate the disk transfer rate.<br/>Only one surface is read/written at a time.</p><ul><li>In one rotation, one track is read<br/> </li><li>One track has 400 sectors and 1 KB per sector means 400 KB per track<br/> </li><li>Rotations Per Minute is 6000 -&gt; $6000^* 400 \\mathrm{~KB}$ per minute or $100^* 400 =40000 \\mathrm{KBps}$<br/> </li><li>Time to read 1 byte $=\\frac{1}{40000 \\times 1024} \\mathrm{sec}=24.41 \\mathrm{nsec}$<br/> </li><li>Since memory cycle time is 100 ns this will be $\\left\\lceil\\frac{24.41}{100}\\right\\rceil=1$ cycle.</li></ul><p>Now, coming to DMA, it does not block the CPU directly but it steals the memory cycles and if the CPU is needing memory it gets blocked. So, in worst case (see the usage \"maximum percentage of time\" in question) lets assume CPU is needing memory all the time (fully memory bound process execution). In this case the percentage of time CPU gets blocked will be the amount of time DMA is using the memory cycles.</p><ul><li>Whenever 1 byte is ready from disk, memory cycles are taken – this needs 100 ns<br/> </li><li>When memory cycles are used, disk will continue to fetch further data -it is not getting blocked here or the disk wont be waiting for this 100 ns if it has any pending read<br/> </li><li>That is, if DMA is continuously transferring data, one in every 1 memory cycles can get blocked.</li></ul><p>So, the maximum percentage of time CPU gets blocked $=100 \\%$</p></div><br><br><a href=\"https://gateoverflow.in/484339/go-classes-dpp-coa-dma#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-coa-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/dma\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">COA - DMA</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\">We want to design a $128 \\times 16$ RAM using $16 \\times 8$ RAM chips.<br/> <br/> The 7-bit system address is:<br/> <br/> A6 A5 A4 A3 A2 A1 A0<br/> <br/> Where A0 is the least significant bit (LSB).<br/> The chip selection (chip number) is determined by the 3 bits (A3, A2, A1).<br/> The internal address within the chip is determined by the remaining 4 bits<br/> The system address $(0100100)_2$,<br/> corresponds to memory location A inside chip number B<br/> The value of $(A+B)_{10}$ is ___________ .</div></span>",
            "image": "",
            "options": [],
            "answer": "6",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"482164\"></a><div itemprop=\"text\"><p>We want to build a $128 \\times 16$ RAM<br/>Available chips: $16 \\times 8$ RAM chips<br/>So:</p><ul><li>Each chip can store 16 words $=$ needs 4 address lines inside it.<br/> </li><li>Total no of chips needed $=\\frac{128 X 16}{16 X 8}=8 X 2=16$ (8 vertically stacked blocks containing 2 RAM chips of 16X8 in each block block)<br/> </li><li>Number of verically stacked chip lines=8<br/> </li><li>So 3 address lines for chip selection each chip requires 4 address lines so overall address lines needed $=4+3=7$ (A6 A5 A4 A3 A2 A1 A0)</li></ul><p>chip number $=(010)_2=2$<br/><br/>memory location inside chip $2=(0100)_2=4$<br/>$$<br/>\\text { hence } A+B=2+4=6<br/>$$</p></div><br><br><a href=\"https://gateoverflow.in/482163/go-classes-dpp-coa-memory-interfacing#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-coa-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/dma\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">COA - I/O Interface</a></b></div></div>"
        }
    ]
});
