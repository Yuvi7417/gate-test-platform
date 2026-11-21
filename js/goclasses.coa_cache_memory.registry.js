registerTest({
    "name": "DPP 01 - Computer Organization (Cache Memory - Part 1)",
    "testLabel": "DPP 01",
    "testType": "DPP",
    "bracket": "Cache Memory - Part 1",
    "subject": "coa",
    "series": "cse-dpp-2027",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 10,
    "topicsCovered": "Cache Memory (Practice Set 1)",
    "questions": [
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\">An $8$-way set-associative cache memory unit with a capacity of $64$ KB is built using a block size of $16$ words. The word length is $32$ bits. The size of the physical address space is $16$ GB . The number of bits for the TAG field is $\\_\\_\\_\\_$</div></span>",
            "image": "",
            "options": [],
            "answer": "21",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"489120\"></a><div itemprop=\"text\"><p data-end=\"385\" data-start=\"88\">Physical address space = 16 GB = 2^34 → <strong data-end=\"152\" data-start=\"134\">34-bit address</strong><br data-end=\"155\" data-start=\"152\"/>Word size = 32 bits = 4 bytes<br data-end=\"187\" data-start=\"184\"/>Block size = 16 words = 16 × 4 = <strong data-end=\"232\" data-start=\"220\">64 bytes</strong><br data-end=\"235\" data-start=\"232\"/>Cache size = 64 KB = 64 × 1024 = <strong data-end=\"283\" data-start=\"268\">65536 bytes</strong><br data-end=\"286\" data-start=\"283\"/>Number of blocks = 65536 / 64 = <strong data-end=\"333\" data-start=\"318\">1024 blocks</strong><br data-end=\"336\" data-start=\"333\"/>8-way set-associative → 1024 / 8 = <strong data-end=\"383\" data-start=\"371\">128 sets</strong></p><p data-end=\"394\" data-start=\"387\">Bits:</p><ul data-end=\"512\" data-start=\"395\"><li data-end=\"434\" data-start=\"395\"><p data-end=\"434\" data-start=\"397\">Offset bits = log₂(64) = <strong data-end=\"432\" data-start=\"422\">6 bits</strong></p></li><li data-end=\"474\" data-start=\"435\"><p data-end=\"474\" data-start=\"437\">Index bits = log₂(128) = <strong data-end=\"472\" data-start=\"462\">7 bits</strong></p></li><li data-end=\"512\" data-start=\"475\"><p data-end=\"512\" data-start=\"477\">Tag bits = 34 - 7 - 6 = <strong data-end=\"512\" data-start=\"501\">21 bits</strong></p></li></ul></div><br><br><a href=\"https://gateoverflow.in/489088/go-classes-dpp-coa-cache-memory#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-coa-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/cache-memory\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">COA - Cache Memory</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>A computer system has an L1 cache, an L2 cache, and a main memory unit. The block size in L2 cache is 16 words. The data bus between the L2 cache and main memory is 4 words wide. The memory access times are 2 nanoseconds, 20 nanoseconds, and 200 nanoseconds for L1 cache, L2 cache, and the main memory unit, respectively.</p><p>When there is a miss in both L1 and L2 cache, a block is transferred from main memory to L2 cache. What is the total time taken for this transfer, assuming the bus cycle time is the same as the L2 cache access time?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$80$ nanoseconds<br/></span>",
                "<span style=\"display: inline;\">$200$ nanoseconds<br/></span>",
                "<span style=\"display: inline;\">$220$ nanoseconds<br/></span>",
                "<span style=\"display: inline;\">$280$ nanoseconds</span>"
            ],
            "answer": "A",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"489087\"></a><div itemprop=\"text\"><p>1. Determine the Number of Transfers</p><p>To move a block from main memory to the L2 cache, we first need to see how many bus transfers are required.</p><ul><li>L2 Block Size: 16 words</li><li>Bus Width: 4 words</li></ul><p>The number of transfers is calculated as:</p><p>$$<br/>\\text { Number of Transfers }=\\frac{\\text { L2 Block Size }}{\\text { Bus Width }}=\\frac{16 \\text { words }}{4 \\text { words }}=4 \\text { transfers }<br/>$$</p><p>2. Calculate the Total Time</p><p>The total time is the sum of the initial main memory latency (the time to get the first chunk of data) and the total time spent transferring all the chunks across the bus.</p><ul><li>Main Memory Access Time (Latency): The time to access the first 4 -word chunk is 200 ns .<br/> </li><li>Bus Transfer Time: The time to move the four chunks across the bus. The problem states the bus cycle time is equal to the L2 access time ( 20 ns ).<br/> </li><li>Time $=4$ transfers $\\times 20 \\mathrm{~ns} /$ transfer $=80 \\mathrm{~ns}$.<br/> </li><li>Total Time:</li></ul><p>$$<br/>\\begin{aligned}<br/>&amp; \\text { Total Time }=\\text { Main Memory Latency }+ \\text { Bus Transfer Time } \\\\<br/>&amp; \\qquad \\text { Total Time }=200 \\mathrm{~ns}+80 \\mathrm{~ns}=\\mathbf{2 8 0} \\mathbf{~ n s}<br/>\\end{aligned}<br/>$$</p></div><br><br><a href=\"https://gateoverflow.in/489085/go-classes-dpp-coa-cache-memory#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-coa-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/cache-memory\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">COA - Cache Memory</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider a $2$-way set associative cache (initially empty) with a total of 16 cache blocks. The main memory consists of 256 blocks and the requests for memory blocks are in the following order:<br/>$$0,255,1,4,3,8,133,159,216,129,63,8,48,32,73,92,155$$<br/>Which one of the following memory blocks WILL be in the cache if an LRU replacement policy is used?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$0$<br/></span>",
                "<span style=\"display: inline;\">$8$<br/></span>",
                "<span style=\"display: inline;\">$129$<br/></span>",
                "<span style=\"display: inline;\">$216$</span>"
            ],
            "answer": "C",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"489121\"></a><div itemprop=\"text\"><p data-end=\"238\" data-start=\"177\">8 Sets (16 blocks / 2-way). Set Index: Block % 8.</p><p data-end=\"274\" data-start=\"240\"><strong data-end=\"274\" data-start=\"240\">Trace (Set Index: [MRU, LRU]):</strong></p><ul data-end=\"834\" data-start=\"276\"><li data-end=\"298\" data-start=\"276\"><p data-end=\"298\" data-start=\"278\"><strong data-end=\"288\" data-start=\"278\">Set 0:</strong> 0 → [0]</p></li><li data-end=\"325\" data-start=\"299\"><p data-end=\"325\" data-start=\"301\"><strong data-end=\"311\" data-start=\"301\">Set 7:</strong> 255 → [255]</p></li><li data-end=\"348\" data-start=\"326\"><p data-end=\"348\" data-start=\"328\"><strong data-end=\"338\" data-start=\"328\">Set 1:</strong> 1 → [1]</p></li><li data-end=\"371\" data-start=\"349\"><p data-end=\"371\" data-start=\"351\"><strong data-end=\"361\" data-start=\"351\">Set 4:</strong> 4 → [4]</p></li><li data-end=\"394\" data-start=\"372\"><p data-end=\"394\" data-start=\"374\"><strong data-end=\"384\" data-start=\"374\">Set 3:</strong> 3 → [3]</p></li><li data-end=\"420\" data-start=\"395\"><p data-end=\"420\" data-start=\"397\"><strong data-end=\"407\" data-start=\"397\">Set 0:</strong> 8 → [8, 0]</p></li><li data-end=\"447\" data-start=\"421\"><p data-end=\"447\" data-start=\"423\"><strong data-end=\"433\" data-start=\"423\">Set 5:</strong> 133 → [133]</p></li><li data-end=\"479\" data-start=\"448\"><p data-end=\"479\" data-start=\"450\"><strong data-end=\"460\" data-start=\"450\">Set 7:</strong> 159 → [159, 255]</p></li><li data-end=\"519\" data-start=\"480\"><p data-end=\"519\" data-start=\"482\"><strong data-end=\"492\" data-start=\"482\">Set 0:</strong> 216 (Evict 0) → [216, 8]</p></li><li data-end=\"563\" data-start=\"520\"><p data-end=\"563\" data-start=\"522\"><strong data-end=\"532\" data-start=\"522\">Set 1:</strong> 129 (Evict 1) → <strong data-end=\"561\" data-start=\"549\">[129, 1]</strong></p></li><li data-end=\"605\" data-start=\"564\"><p data-end=\"605\" data-start=\"566\"><strong data-end=\"576\" data-start=\"566\">Set 7:</strong> 63 (Evict 255) → [63, 159]</p></li><li data-end=\"639\" data-start=\"606\"><p data-end=\"639\" data-start=\"608\"><strong data-end=\"618\" data-start=\"608\">Set 0:</strong> 8 (Hit) → [8, 216]</p></li><li data-end=\"679\" data-start=\"640\"><p data-end=\"679\" data-start=\"642\"><strong data-end=\"652\" data-start=\"642\">Set 0:</strong> 48 (Evict 216) → [48, 8]</p></li><li data-end=\"718\" data-start=\"680\"><p data-end=\"718\" data-start=\"682\"><strong data-end=\"692\" data-start=\"682\">Set 0:</strong> 32 (Evict 8) → [32, 48]</p></li><li data-end=\"758\" data-start=\"719\"><p data-end=\"758\" data-start=\"721\"><strong data-end=\"731\" data-start=\"721\">Set 1:</strong> 73 (Evict 1) → [73, 129]</p></li><li data-end=\"796\" data-start=\"759\"><p data-end=\"796\" data-start=\"761\"><strong data-end=\"771\" data-start=\"761\">Set 4:</strong> 92 (Evict 4) → [92, 4]</p></li><li data-end=\"834\" data-start=\"797\"><p data-end=\"834\" data-start=\"799\"><strong data-end=\"809\" data-start=\"799\">Set 3:</strong> 155 (Evict 3) → [155, 3]</p></li></ul><p data-end=\"907\" data-start=\"836\"><strong data-end=\"852\" data-start=\"836\">Final State:</strong> Options (0, 8, 216) evicted. <strong data-end=\"897\" data-start=\"882\">129 remains</strong> in Set 1.</p><h3 data-end=\"932\" data-start=\"909\"><strong data-end=\"924\" data-start=\"913\">Answer:</strong> (C) 129</h3></div><br><br><a href=\"https://gateoverflow.in/489084/go-classes-dpp-coa-cache-memory#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-coa-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/cache-memory\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">COA - Cache Memory</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>A C program, which initializes an integer array A of $4096$ elements to zero, is run on a computer with a direct-mapped data cache. The relevant details are provided below:</p><p>The program executes the following loop:</p><p><br/> </p><pre class=\"prettyprint linenums lang-c_cpp\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"4\">int sum = 0; for (int i = 0; i &lt; 4096; i = i + 128) { sum += A[i]; }</pre><p><br/>What is the total number of data cache misses generated by this loop?</p><p><strong>Given Details:</strong></p><ul><li>Array Declaration:<br/> <pre class=\"prettyprint linenums lang-c_cpp\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"4\">int A[4096];</pre></li><li>Element Size: sizeof(int) is $4$ Bytes.</li><li>Cache Size: $44 KBytes.</li><li>Cache Block (Line) Size: $32$ Bytes.</li><li>The cache is initially empty.</li><li>The base address of the array A is $\\mathrm{0x00000000}$.</li></ul></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$8$</span>",
                "<span style=\"display: inline;\">$16$</span>",
                "<span style=\"display: inline;\">$32$</span>",
                "<span style=\"display: inline;\">$128$</span>"
            ],
            "answer": "C",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"488230\"></a><div itemprop=\"text\"><ul dir=\"auto\"><li>Array A[4096]: 16KB total (4096 × 4 bytes)</li><li>Cache block: 32 bytes = 8 integers/block</li><li>Loop accesses: A[0], A[128], A[256], ..., A[3968] = <strong>32 elements</strong></li><li>Stride: 128 × 4 = 512 bytes = <strong>16 blocks apart</strong></li></ul><p dir=\"auto\">Each accessed element falls in a <strong>different cache block</strong>:</p><ul dir=\"auto\"><li>Block(i) = i ÷ 8</li><li>For i = 128k : Block = (128k) ÷ 8 = 16k</li><li>Blocks accessed: 0, 16, 32, ..., 496 (all distinct)</li><li>Cache initially empty → <strong>compulsory miss</strong> for first access to each block</li><li>32 unique blocks × 1 miss/block = <strong>32 data cache misses</strong></li></ul><p dir=\"auto\"><strong>No hits</strong> because the 128-element stride (512 bytes) ensures no spatial locality within the same block is reused.</p><p dir=\"auto\">So answer is option C</p></div><br><br><a href=\"https://gateoverflow.in/488182/go-classes-dpp-coa-cache-memory#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-coa-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/cache-memory\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">COA - Cache Memory</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider a $4$-way set-associative cache memory with a total of $16$ blocks. The Least Recently Used (LRU) policy is employed for block replacement. What is the number of cache misses for the following sequence of block addresses?</p><p>$$<br/>0,17,1,8,18,0,9,2,17,3,20<br/>$$</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$7$<br/></span>",
                "<span style=\"display: inline;\">$8$<br/></span>",
                "<span style=\"display: inline;\">$9$<br/></span>",
                "<span style=\"display: inline;\">$10$</span>"
            ],
            "answer": "C",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"488574\"></a><div itemprop=\"text\"><p style=\"text-align:center\"><img alt=\"\" height=\"600\" src=\"https://gateoverflow.in/?qa=blob&amp;qa_blobid=16865098249012137383\" width=\"600\"/></p><p><strong>Answer: C </strong></p></div><br><br><a href=\"https://gateoverflow.in/488180/go-classes-dpp-coa-cache-memory#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-coa-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/cache-memory\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">COA - Cache Memory</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider two cache organizations. The first is a $128$ KB 4-way set associative cache with a $64$byte block size. The second is of the same size and block size but is direct mapped. The system uses a $40$-bit physical address in both cases.</p><p>The component latencies are as follows:</p><p>The hit latency of the set associative organisation is $h_1$ and that of the direct mapped organisation is $h_2$.</p><p>The value of the difference, $h_1-h_2$, is:</p><p><strong>Given Details:</strong></p><ul><li>A $k$-bit comparator has a latency of $\\frac{k}{20} \\mathrm{~ns}$.</li><li>An $N$-to-1 multiplexer has a latency of $0.3 \\times \\log _2(N) \\mathrm{ns}$.</li></ul></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$0.70$ ns</span>",
                "<span style=\"display: inline;\">$1.85$ ns</span>",
                "<span style=\"display: inline;\">$1.15$ ns</span>",
                "<span style=\"display: inline;\">$0.10$ ns</span>"
            ],
            "answer": "A",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"488179\"></a><div itemprop=\"text\"><p>Here is the step-by-step calculation for the hit latencies of both cache organizations.<br/>Shared Parameters:</p><ul><li>Cache Size $=128 \\mathrm{~KB}=2^7 \\times 2^{10}$ bytes $=2^{17}$ bytes<br/> </li><li>Block Size $=64$ bytes $=2^6$ bytes<br/> </li><li>Physical Address Size $=40$ bits</li></ul><p>Calculation of Block Offset:<br/><br/>The block offset is the same for both caches.</p><ul><li>Block Offset bits $=\\log _2($ Block Size $)=\\log _2\\left(2^6\\right)=6$ bits</li></ul><p>1. Analysis of Cache 1 (4-way Set Associative):</p><p>To calculate its hit latency, $h_1$, we first need to find the number of tag bits.</p><ul><li>Number of Lines $=\\frac{\\text { Cache Size }}{\\text { Block Size }}=\\frac{2^{17}}{2^6}=2^{11}$ lines.<br/> </li><li>Number of Sets $=\\frac{\\text { Number of Lines }}{\\text { Associativity }}=\\frac{2^{11}}{4}=\\frac{2^{11}}{2^2}=2^9$ sets.<br/> </li><li>Number of Index bits $=\\log _2($ Number of Sets $)=\\log _2\\left(2^9\\right)=9$ bits.<br/> </li><li>Number of Tag bits $\\left(k_1\\right)=$ Address Size - Index bits - Offset bits $=40-9-6=25$ bits.</li></ul><p>The hit latency ( $h_1$ ) for a set-associative cache is the sum of the comparator latency (to find a matching tag) and the multiplexer latency (to select the data from the correct way).</p><ul><li>Comparator Latency $=\\frac{k_1}{20}=\\frac{25}{20}=1.25 \\mathrm{~ns}$.<br/> </li><li>Multiplexer Latency (for a 4 -to-1 MUX) $=0.3 \\times \\log _2(4)=0.3 \\times 2=0.6 \\mathrm{~ns}$.<br/> </li><li>$h_1=1.25 \\mathrm{~ns}+0.6 \\mathrm{~ns}=1.85 \\mathrm{~ns}$.</li></ul><p>2. Analysis of Cache 2 (Direct Mapped):</p><p>To calculate its hit latency, $h_2$, we find its tag size.</p><ul><li>Number of Lines $=2^{11}$. In a direct-mapped cache, the number of sets equals the number of lines.<br/> </li><li>Number of Index bits $=\\log _2($ Number of Lines $)=\\log _2\\left(2^{11}\\right)=11$ bits.<br/> </li><li>Number of Tag bits $\\left(k_2\\right)=$ Address Size - Index bits - Offset bits $=40-11-6=23$ bits.</li></ul><p>The hit latency ( $h_2$ ) for a direct-mapped cache only includes the comparator latency. Since the index points to a single, non-negotiable location, no multiplexer is needed to select between different ways.</p><ul><li>Comparator Latency $=\\frac{k_2}{20}=\\frac{23}{20}=1.15 \\mathrm{~ns}$.<br/> </li><li>$h_2=1.15 \\mathrm{~ns}$.</li></ul><p>3. Final Calculation:</p><p>The question asks for the difference between the two hit latencies.</p><ul><li>$h_1-h_2=1.85 \\mathrm{~ns}-1.15 \\mathrm{~ns}=0.70 \\mathrm{~ns}$.</li></ul><p>Therefore, the correct option is A.</p></div><br><br><a href=\"https://gateoverflow.in/488178/go-classes-dpp-coa-cache-memory#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-coa-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/cache-memory\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">COA - Cache Memory</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider a $4$-way set associative cache of size $64$ KB with a block size of $128$ bytes. The system uses a $36$-bit physical address. The number of bits required for the tag and the index are, respectively,</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$22,7$<br/></span>",
                "<span style=\"display: inline;\">$20,9$<br/></span>",
                "<span style=\"display: inline;\">$7,22$<br/></span>",
                "<span style=\"display: inline;\">$22,9$</span>"
            ],
            "answer": "A",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"488577\"></a><div itemprop=\"text\"><p style=\"text-align:center\"><img alt=\"\" height=\"360\" src=\"https://gateoverflow.in/?qa=blob&amp;qa_blobid=5628418871826259822\" width=\"360\"/></p><p><strong>Answer: A</strong></p></div><br><br><a href=\"https://gateoverflow.in/488177/go-classes-dpp-coa-cache-memory#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-coa-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/cache-memory\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">COA - Cache Memory</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>A computer system has a two-level cache (L1 and L2). The processor issues a memory request which is first sent to the L1 cache. The system has the following characteristics:</p><p>What is the Average Memory Access Time (AMAT) for this system?</p><p><strong>Given Details:</strong></p><ul><li>L 1 cache hit time is $2$ ns.</li><li>L1 cache hit rate is $95 \\%$.</li><li>$\\quad \\mathrm{L} 2$ cache hit time is $20$ ns .</li><li>For misses in $\\mathrm{L} 1,90 \\%$ are found in the L 2 cache (this is the local hit rate for L 2 ).</li><li>Main memory access time is $120$ ns .</li></ul></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$3.2$ ns</span>",
                "<span style=\"display: inline;\">$3.6$ ns</span>",
                "<span style=\"display: inline;\">$8.4$ ns</span>",
                "<span style=\"display: inline;\">$15.0$ ns</span>"
            ],
            "answer": "B",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"489430\"></a><div itemprop=\"text\">0.95 x 2 + 0.05 x [ 0.9 x (20+2) + 0.1 x (120+20+2)] = 3.6<br/> <br/> option B</div><br><br><a href=\"https://gateoverflow.in/487577/go-classes-dpp-coa-cache-memory#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-coa-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/cache-memory\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">COA - Cache Memory</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>In a computer system with a $32$-bit physical address, the address is broken down for cache mapping as follows: Tag = $18$ bits, Index (Set) = $8$ bits, Offset = $6$ bits. If the total cache size is $512$ KB, what is the associativity of the cache?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$8$-WAY<br/></span>",
                "<span style=\"display: inline;\">$16$-WAY<br/></span>",
                "<span style=\"display: inline;\">$32$-WAY<br/></span>",
                "<span style=\"display: inline;\">$64$-WAY</span>"
            ],
            "answer": "C",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"489383\"></a><div itemprop=\"text\"><p>Answer =&gt; option c 32 way set associative.</p><p> </p><p style=\"text-align:center\"><img alt=\"\" height=\"1159\" src=\"https://gateoverflow.in/?qa=blob&amp;qa_blobid=17890790865607168743\" width=\"1200\"/></p><p> </p></div><br><br><a href=\"https://gateoverflow.in/487572/go-classes-dpp-coa-cache-memory#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-coa-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/cache-memory\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">COA - Cache Memory</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>A processor uses a $32$-bit physical address. It has a $128 \\mathrm{~KB}, 4$-way set associative L1 cache with a block size of $64$ bytes. What is the number of bits in the Tag field of the address?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$15$<br/></span>",
                "<span style=\"display: inline;\">$17$<br/></span>",
                "<span style=\"display: inline;\">$9$<br/></span>",
                "<span style=\"display: inline;\">$6$</span>"
            ],
            "answer": "A",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"487260\"></a><div itemprop=\"text\"><p><em>Block size</em>=<strong>64 bytes =2^6 bytes =64 bytes 6 bits </strong>= <em><strong>offset .</strong></em></p><p><em>Cache Size is 128Kb</em>= <strong>2^17 bytes .</strong></p><p><em>No of blocks in Cache is</em> = <em>2^17 / 2^6 (Block size)</em> = <strong>2^11<em> Blocks in Cache .</em></strong></p><p><em>4 way set mean 4 clock in each set so no of set = 2^11/4 =512 set =2^9 =512 = </em><strong>9<em> bit for Index </em></strong></p><p>so <strong>Tage bit = PA-(Index+offset) = 32-(9+6)=17 bits.</strong></p><p> </p></div><br><br><a href=\"https://gateoverflow.in/487054/go-classes-dpp-coa-cache-memory#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-coa-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/cache-memory\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">COA - Cache Memory</a></b></div></div>"
        }
    ]
});

registerTest({
    "name": "DPP 02 - Computer Organization (Cache Memory - Part 2)",
    "testLabel": "DPP 02",
    "testType": "DPP",
    "bracket": "Cache Memory - Part 2",
    "subject": "coa",
    "series": "cse-dpp-2027",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 10,
    "topicsCovered": "Cache Memory (Practice Set 2)",
    "questions": [
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>A direct-mapped cache memory of $1$ MB has a block size of $256$ bytes. The cache has an access time of $3$ ns and a hit rate of $94 \\%$. During a cache miss, a $256$-byte block is fetched from the main memory, which has an access time of $40$ ns. What is the effective memory access time?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$4.94$ ns<br/></span>",
                "<span style=\"display: inline;\">$5.22$ ns<br/></span>",
                "<span style=\"display: inline;\">$5.40$ ns<br/></span>",
                "<span style=\"display: inline;\">$7.44$ ns</span>"
            ],
            "answer": "C",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"486796\"></a><div itemprop=\"text\"><p>$$ T_{eff} = 3 + ((1 - 0.94) \\times 40) $$<br/>$$ T_{eff} = 3 + (0.06 \\times 40) $$<br/>$$ T_{eff} = 3 + 2.4 $$<br/>$$ T_{eff} = 5.4 \\text{ ns} $$</p><p><strong>The effective memory access time is $5.40$ ns. Hence Option C.</strong></p><p> </p></div><br><br><a href=\"https://gateoverflow.in/486763/go-classes-dpp-coa-ugc-net#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-coa-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/cache-memory\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">COA - Cache Memory</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider a system with a $2$-level cache. The access times of Level $1$ cache, Level $2$ cache, and main memory are $2 \\mathrm{~ns}, 20 \\mathrm{~ns}$, and $450$ ns , respectively. The hit rate of the Level $1$ cache is 0.9 . If the average memory access time of the system is $6.25$ ns , what is the hit rate of the Level $2$ cache?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$0.90$<br/></span>",
                "<span style=\"display: inline;\">$0.92$<br/></span>",
                "<span style=\"display: inline;\">$0.95$<br/></span>",
                "<span style=\"display: inline;\">$0.98$</span>"
            ],
            "answer": "C",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"486793\"></a><div itemprop=\"text\"><p>$T_{avg} = 6.25 \\text{ ns}$<br/>$T_{L1} = 2 \\text{ ns}$<br/>$T_{L2} = 20 \\text{ ns}$<br/>$T_{MM} = 450 \\text{ ns}$<br/>$H_{L1} = 0.9$</p><p>Let $H_{L2} = x$:<br/>$$ 6.25 = 2 + (1 - 0.9) \\times (20 + (1 - x) \\times 450) $$$$ 6.25 = 2 + 0.1(20 + 450 - 450x) $$<br/>$$ 6.25 - 2 = 0.1(470 - 450x) $$<br/>$$ 4.25 = 0.1(470 - 450x) $$<br/>$$ 42.5 = 470 - 450x $$<br/>$$ 450x = 427.5 $$<br/>$$ x = 0.95 $$</p><p><strong>The hit rate of the Level 2 cache is 0.95. Hence Option C.</strong></p><p> </p></div><br><br><a href=\"https://gateoverflow.in/486759/go-classes-dpp-coa-cache-memory#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-coa-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/cache-memory\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">COA - Cache Memory</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>A computer system features a two-level cache. The L1 cache has an access time of $10$ ns and a hit rate of $90 \\%$. The L2 cache has an access time of $40$ ns and a local hit rate of $95 \\%$ (for misses from L1). The main memory has an access time of $200$ ns. What is the average memory access time (AMAT) for this system?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$15$ ns<br/></span>",
                "<span style=\"display: inline;\">$34$ ns<br/></span>",
                "<span style=\"display: inline;\">$13.8$ ns<br/></span>",
                "<span style=\"display: inline;\">$50$ ns</span>"
            ],
            "answer": "A",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"486331\"></a><div itemprop=\"text\">A i think<br/> <br/> </div><br><br><a href=\"https://gateoverflow.in/486326/go-classes-dpp-coa-cache-memory#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-coa-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/cache-memory\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">COA - Cache Memory</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>A four-way set associative cache memory unit with a capacity of $32$ KB is built using a block size of $16$ words. The word length is $32$ bits. The physical address space is $4$ GB . The number of bits in the TAG, SET fields are</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$19,7$<br/></span>",
                "<span style=\"display: inline;\">$17,9$<br/></span>",
                "<span style=\"display: inline;\">$21,7$<br/></span>",
                "<span style=\"display: inline;\">$19,8$</span>"
            ],
            "answer": "A",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"486437\"></a><div itemprop=\"text\">Option A <br/> <br/> 4 way set associative = 1 set contains 4 lines <br/> <br/> 1 block of size has 16 words = 16 x 32 bits = 16x4 Bytes<br/> <br/> 1 block has = 64 bytes ; offset = 6 bits <br/> <br/> no of lines = cache size / block size = 512 <br/> <br/> no of sets = 512 / 4 = 128 ; set index = 7 bits <br/> <br/> tag = 32 - 7 - 6 = 19 <br/> <br/> tag = 19 bits ; set = 7 bits</div><br><br><a href=\"https://gateoverflow.in/486324/go-classes-dpp-coa-cache#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-coa-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/cache-memory\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">COA - Cache Memory</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider a system with $2$ level cache. Access times of Level $1$, Level $2$ cache, and main memory are $5 \\mathrm{~ns}, 50 \\mathrm{~ns}$ and $1000$ ns, respectively. The hit rates of Level $1$ and Level $2$ caches are $0.7$ and $0.8$, respectively. What is the average access time of the system if parallel searching is used at all levels?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$207.5$ ns<br/></span>",
                "<span style=\"display: inline;\">$75.5$ ns<br/></span>",
                "<span style=\"display: inline;\">$243.5$ ns<br/></span>",
                "<span style=\"display: inline;\">$352.0$ ns</span>"
            ],
            "answer": "A",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"490631\"></a><div itemprop=\"text\">So if memory parallel searching we dont need to search in l2 or l1 cache to add time??<br/> <br/> 5*0.7 + 50*0.3*0.8 + 1000*0.3*0.2 <br/> <br/> ~75.5 ns</div><br><br><a href=\"https://gateoverflow.in/484894/go-classes-dpp-coa-cache-memory#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-coa-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/cache-memory\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">COA - Cache Memory</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\">Consider a cache of $4$ lines of $16$ bytes each. Main memory is divided into blocks of $16$ bytes each. That is, block $0$ has bytes with addresses $0$ through $15$, and so on. Now consider a program that accesses memory in the following sequence of addresses:<br/> <br/> Once: $63$ through $70$<br/> <br/> Loop ten times: $15$ through $32$; $80$ through $95$<br/> <br/> Suppose the cache is organized as direct mapped. Memory blocks $0, 4,$ and so on are assigned to line $1$; blocks $1,5 ,$ and so on to line $2$; and so on.<br/> <br/> The hit ratio of the cache will be_____________$\\%$ (up to one decimal place).</div></span>",
            "image": "",
            "options": [],
            "answer": "93.1",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"484132\"></a><div itemprop=\"text\">93.1% is right ???</div><br><br><a href=\"https://gateoverflow.in/484033/go-classes-dpp-coa-cache-memory#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-coa-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/cache-memory\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">COA - Cache Memory</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\">Consider a computer with the following characteristics: a total of $1$Mbyte of main memory, a word size of $1$ byte, a block size of $16$ bytes, and a cache size of $64$ Kbytes. For the main memory addresses of F0010, $01234$, and CABBE, The sum of the corresponding tag, cache line address, and word offsets for a direct-mapped cache in decimal is $A, B, C$ respectively.<br/> <br/> The value of $A-B+C$ is_________.</div></span>",
            "image": "",
            "options": [],
            "answer": "2494",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"498024\"></a><div itemprop=\"text\"><p> <a href=\"https://www.scribd.com/document/284979455/Model-Answers-HW3\" rel=\"nofollow\" target=\"_blank\">https://www.scribd.com/document/284979455/Model-Answers-HW3</a></p><ul><li><p>Main memory: 1 MB = 20-bit addresses</p></li><li><p>Word size: 1 byte.</p></li><li><p>Block size: 16 bytes, so the block offset is 4 bits.​</p></li><li><p>Cache size: 64 KB =&gt;Lines =64KB/16B, This means the cache line/index will use 12 bits.​</p></li></ul><p>Thus, in a 20-bit address:</p><ul><li><p>Block offset =4 bits</p></li><li><p>Cache line offset= 12 bits</p></li><li><p>Tag Bits =4 bits</p></li></ul><h2>1. Address F0010</h2><ul><li><p>Binary: F0010=1111 0000 0000 0001 00002</p></li><li><p>Word offset: lowest 4 bits (0000)</p></li><li><p>Cache line: next 12 bits (0000 0000 0001)</p></li><li><p>Tag: highest 4 bits (1111)</p></li></ul><p>So, tag: 15, line: 1, offset: 0 ⇒ Sum (A) = 15 + 1 + 0 = 16</p><h2>2. Address 01234</h2><ul><li><p>Binary: 01234=0000 0001 0010 0011 0100</p></li><li><p>Word offset: lowest 4 bits (0100 = 4)</p></li><li><p>Cache line: next 12 bits (0001 0010 0011 = 291)</p></li><li><p>Tag: highest 4 bits (0000 = 0)</p></li></ul><p>So, tag: 0, line: 291, offset: 4 ⇒ Sum (B) = 0 + 291 + 4 = 295</p><h2>3. Address CABBE </h2><ul><li><p>Binary: CABBE=1100 1010 1011 1011 1110</p></li><li><p>Word offset: lowest 4 bits (1110 = 14)</p></li><li><p>Cache line: next 12 bits (1010 1011 1011 = 2747)</p></li><li><p>Tag: highest 4 bits (1100 = 12)</p></li></ul><p>So, tag: 12, line: 2747, offset: 14 ⇒ Sum (C) = 12 + 2747 + 14 = 2773</p><p>Finally, A−B+C=16−295+2773=2494</p><h2>Final Answer</h2><p>The value of A−B+C is <strong>2494</strong></p></div><br><br><a href=\"https://gateoverflow.in/484031/go-classes-dpp-coa-cache-memory#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-coa-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/cache-memory\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">COA - Cache Memory</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\">A computer has a cache, main memory, and a disk used for virtual memory. If a referenced word is in the cache, $20$ ns are required to access it. If it is in main memory but not in the cache, $60$ ns are needed to load it into the cache, and then the reference is started again. If the word is not in main memory, $12$ ms are required to fetch the word from disk, followed by $60$ ns to copy it to the cache, and then the reference is started again. The cache hit ratio is $0.9$ and the main memory hit ratio is $0.6$ . The average time in nanoseconds required to access a referenced word on this system is________.</div></span>",
            "image": "",
            "options": [],
            "answer": "480026",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"484278\"></a><div itemprop=\"text\">E.M.AT = 0.9*20 + 0.1(0.6* (60+20) + 0.4 * (12* 10^6 + 60 + 20)) <br/> <br/> = 480026 nsec</div><br><br><a href=\"https://gateoverflow.in/484028/go-classes-dpp-coa-cache-memory#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-coa-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/cache-memory\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">COA - Cache Memory</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>A processor has the following memory system characteristics:</p><p>The average memory access time (AMAT) for this system (in ns) is __________.</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">Main memory access time $=100 \\mathrm{~ns}$<br/></span>",
                "<span style=\"display: inline;\">Cache access time $=5 \\mathrm{~ns}$<br/></span>",
                "<span style=\"display: inline;\">Cache is write-back, write-allocate, block size = 16 bytes<br/></span>",
                "<span style=\"display: inline;\">Cache read miss rate $=4 \\%$, write miss rate $=20 \\%$<br/></span>",
                "<span style=\"display: inline;\">On a write miss, the entire block is loaded from memory before updating the cache<br/></span>",
                "<span style=\"display: inline;\">On a write hit, the block is updated in cache only<br/></span>",
                "<span style=\"display: inline;\">$20 \\%$ of the cache blocks are dirty when they are replaced<br/></span>",
                "<span style=\"display: inline;\">Assume $30 \\%$ of all memory accesses are writes</span>"
            ],
            "answer": "15.56",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"483712\"></a><div itemprop=\"text\"><p>Penalties:</p><ul><li>Read or write hit $=5 \\mathrm{~ns}$<br/> </li><li>Read miss $=5+100+(0.2 \\times 100)=125 \\mathrm{~ns}$<br/> </li><li>Write miss $=5+100+(0.2 \\times 100)=125 \\mathrm{~ns}$</li></ul><p>$$<br/>\\begin{aligned}<br/>&amp; \\mathrm{AVG}_{\\text {read }}=0.96 * 5+0.04(125)=9.8 \\\\<br/>&amp; \\mathrm{AVG}_{\\text {write }}=0.8 * 5+0.2(125)=29 \\\\<br/>&amp; \\mathrm{AMAT}=0.7 * 9.8+0.3 * 29=15.56<br/>\\end{aligned}<br/>$$</p></div><br><br><a href=\"https://gateoverflow.in/483711/go-classes-dpp-coa-cache-memory#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-coa-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/cache-memory\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">COA - Cache Memory</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>A two-way set-associative cache has a line size of $16$ bytes and a total capacity of $8$ KB . The main memory is $64$ MB and byte-addressable. What is the format of a main memory address (Tag, Set Index, Block Offset)?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$13$ bits Tag, $9$ bits Set, $4$ bits Offset<br/></span>",
                "<span style=\"display: inline;\">$14$ bits Tag, $8$ bits Set, $4$ bits Offset<br/></span>",
                "<span style=\"display: inline;\">$13$ bits Tag, $8$ bits Set, $4$ bits Offset<br/></span>",
                "<span style=\"display: inline;\">$14$ bits Tag, $9$ bits Set, $4$ bits Offset</span>"
            ],
            "answer": "A",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"483276\"></a><div itemprop=\"text\">Line size $= 16 \\ \\text{bytes} \\implies \\log_{2}(16) = 4 \\ \\text{bits}$.<br/> <br/> Total cache size $= 8 \\ \\text{KB} = 8192 \\ \\text{bytes}$.<br/> <br/> Two-way set associative $\\implies$ each set contains $2$ lines.<br/> <br/> \\[<br/> \\text{Number of sets} = \\frac{\\text{Cache size}}{\\text{(Associativity $\\times$ Line size)}} <br/> = \\frac{8192}{2 \\times 16} <br/> = \\frac{8192}{32} = 256<br/> \\]<br/> \\[<br/> \\therefore \\ \\text{Set index bits} = \\log_{2}(256) = 8 \\ \\text{bits}.<br/> \\]<br/> <br/> Main Memory Address Size:<br/> Main memory size $= 64 \\ \\text{MB} = 2^{26} \\ \\text{bytes}$ (byte-addressable). <br/> Therefore, address size $= 26 \\ \\text{bits}$.<br/> <br/> \\[<br/> \\text{Tag bits} = 26 - (8 + 4) = 14 \\ \\text{bits}.<br/> \\]<br/> <br/> <br/> \\[<br/> \\boxed{\\text{Address format: 14 bits Tag, 8 bits Set Index, 4 bits Block Offset}}<br/> \\]<br/> </div><br><br><a href=\"https://gateoverflow.in/483265/go-classes-dpp-coa-cache-memory#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-coa-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/cache-memory\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">COA - Cache Memory</a></b></div></div>"
        }
    ]
});

registerTest({
    "name": "DPP 03 - Computer Organization (Cache Memory - Part 3)",
    "testLabel": "DPP 03",
    "testType": "DPP",
    "bracket": "Cache Memory - Part 3",
    "subject": "coa",
    "series": "cse-dpp-2027",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 10,
    "topicsCovered": "Cache Memory (Practice Set 3)",
    "questions": [
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>A computer system has a main memory of $32$ K $16$-bit words and a cache of $4$ K words, organised into four-word lines with $64$ words per line. The cache is initially empty. A processor fetches words from memory locations $0,1,2, \\ldots$, $4351$ in order, and then repeats this sequence $9$ more times. The cache is $10$ times faster than main memory. Assume an LRU block replacement policy.</p><p>What is the approximate performance improvement due to the cache?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$4 x$<br/></span>",
                "<span style=\"display: inline;\">$6 x$<br/></span>",
                "<span style=\"display: inline;\">$7 x$<br/></span>",
                "<span style=\"display: inline;\">$10 x$</span>"
            ],
            "answer": "C",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"525838\"></a><div itemprop=\"text\"><p data-path-to-node=\"0\">Performance improvement (Speedup) is calculated as: $\\frac{\\text{Time without Cache}}{\\text{Time with Cache}}$.</p><p data-path-to-node=\"18\"><b data-index-in-node=\"0\" data-path-to-node=\"18\">1. Determine Parameters:</b></p><ul data-path-to-node=\"19\"><li><p data-path-to-node=\"19,0,0\"><b data-index-in-node=\"0\" data-path-to-node=\"19,0,0\">Cache Size:</b> $4 \\text{ K words}$.</p></li><li><p data-path-to-node=\"19,1,0\"><b data-index-in-node=\"0\" data-path-to-node=\"19,1,0\">Sequence Length:</b> Locations $0$ to $4351 = 4352 \\text{ words}$.</p><ul data-path-to-node=\"19,1,1\"><li><p data-path-to-node=\"19,1,1,0,0\"><i data-index-in-node=\"0\" data-path-to-node=\"19,1,1,0,0\">Observation:</i> $4352 &gt; 4096 (4 \\text{ K})$. The sequence is slightly larger than the cache.</p></li></ul></li><li><p data-path-to-node=\"19,2,0\"><b data-index-in-node=\"0\" data-path-to-node=\"19,2,0\">Timing:</b> Let Main Memory access be $10t$ and Cache access be $t$ (since cache is 10x faster).</p></li><li><p data-path-to-node=\"19,3,0\"><b data-index-in-node=\"0\" data-path-to-node=\"19,3,0\">Repetition:</b> 1 initial run + 9 repetitions = 10 total iterations.</p></li></ul><p data-path-to-node=\"20\"><b data-index-in-node=\"0\" data-path-to-node=\"20\">2. Analyze Hits and Misses:</b></p><ul data-path-to-node=\"21\"><li><p data-path-to-node=\"21,0,0\"><b data-index-in-node=\"0\" data-path-to-node=\"21,0,0\">Iteration 1:</b> The cache is initially empty. Every new block fetch is a miss (Compulsory Misses).</p></li><li><p data-path-to-node=\"21,1,0\"><b data-index-in-node=\"0\" data-path-to-node=\"21,1,0\">Iterations 2–10:</b> Because we access $4352$ words but the cache only holds $4096$, and we use <b data-index-in-node=\"88\" data-path-to-node=\"21,1,0\">LRU</b>, the \"oldest\" blocks are evicted. Since we access more than the cache capacity in a linear loop, by the time we finish one iteration and start the next, the first blocks (0, 1, 2...) have been evicted to make room for the end of the sequence.</p><ul data-path-to-node=\"21,1,1\"><li><p data-path-to-node=\"21,1,1,0,0\"><i data-index-in-node=\"0\" data-path-to-node=\"21,1,1,0,0\">Result:</i> In a strictly linear access pattern where $Working Set &gt; Cache Size$, LRU results in a $0\\%$ hit rate for subsequent loops.</p></li></ul></li></ul><p data-path-to-node=\"22\"><b data-index-in-node=\"0\" data-path-to-node=\"22\">3. Wait—Check the Block Size:</b></p><ul data-path-to-node=\"23\"><li><p data-path-to-node=\"23,0,0\">The cache has <b data-index-in-node=\"14\" data-path-to-node=\"23,0,0\">64 words per line</b>.</p></li><li><p data-path-to-node=\"23,1,0\">When word $0$ is fetched, words $0$–$63$ are brought in. This provides <b data-index-in-node=\"65\" data-path-to-node=\"23,1,0\">spatial locality</b>.</p></li><li><p data-path-to-node=\"23,2,0\">Hits per block: $63$ hits for every $1$ miss.</p></li><li><p data-path-to-node=\"23,3,0\">Hit rate $h = \\frac{63}{64} \\approx 98.4\\%$.</p></li></ul><p data-path-to-node=\"24\"><b data-index-in-node=\"0\" data-path-to-node=\"24\">4. Performance Calculation:</b></p><ul data-path-to-node=\"25\"><li><p data-path-to-node=\"25,0,0\"><b data-index-in-node=\"0\" data-path-to-node=\"25,0,0\">Without Cache:</b> $10 \\text{ iterations} \\times 4352 \\text{ words} \\times 10t = 435,200t$</p></li><li><p data-path-to-node=\"25,1,0\"><b data-index-in-node=\"0\" data-path-to-node=\"25,1,0\">With Cache:</b> AMAT per word $\\approx \\text{Hit Time} + (\\text{Miss Rate} \\times \\text{Miss Penalty})$</p><ul data-path-to-node=\"25,1,1\"><li><p data-path-to-node=\"25,1,1,0,0\">$\\text{AMAT} = t + (\\frac{1}{64} \\times 10t) = t + 0.156t = 1.156t$</p></li><li><p data-path-to-node=\"25,1,1,1,0\">Total Time $= 10 \\times 4352 \\times 1.156t \\approx 50,309t$</p></li></ul></li><li><p data-path-to-node=\"25,2,0\"><b data-index-in-node=\"0\" data-path-to-node=\"25,2,0\">Speedup:</b> $\\frac{435,200t}{50,309t} \\approx 8.64x$</p></li></ul><p data-path-to-node=\"26\">Given the options and the \"approximate\" nature, we look for the closest fit. If we assume the hit rate is very high across all iterations due to the block size:</p><ul data-path-to-node=\"27\"><li><p data-path-to-node=\"27,0,0\">Memory time is dominated by $10t$ per access.</p></li><li><p data-path-to-node=\"27,1,0\">Cache time is dominated by $1t$ per access (plus a small penalty).</p></li><li><p data-path-to-node=\"27,2,0\">The ratio of $10t / 1.15t$ suggests a result in the <b data-index-in-node=\"50\" data-path-to-node=\"27,2,0\">$7x$ to $8x$</b> range.</p></li></ul><p data-path-to-node=\"28\"><b data-index-in-node=\"0\" data-path-to-node=\"28\">Final Answer:</b> <b data-index-in-node=\"14\" data-path-to-node=\"28\">C. $7x$</b> (This is the most standard answer for this specific architectural problem set).</p><p data-path-to-node=\"30\"> </p></div><br><br><a href=\"https://gateoverflow.in/483260/go-classes-dpp-coa-cache-memory#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-coa-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/cache-memory\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">COA - Cache Memory</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>A program iterates over a one-dimensional array of $1024$ integers stored in memory. Each integer occupies $4$ bytes. The system has a direct-mapped L1 cache with the following characteristics:</p><p>Consider the following program:<br/> </p><pre class=\"prettyprint linenums lang-c_cpp\" data-linenums=\"true\" data-pbcklang=\"c_cpp\" data-pbcktabsize=\"4\" data-rawcode=\"For(i=0 to length(array)-1 ) { Print(array[i]) }\">For(i=0 to length(array)-1 ) { Print(array[i]) }</pre><p><br/>What is the affective memory access time of the cache approximately (in $\\mu \\mathrm{s}$ ) for this loop?</p><p><strong>Given Details:</strong></p><ul><li>Cache size $=256$ bytes</li><li>Block size $=16$ bytes</li><li>Cache miss penalty $=50 \\mathrm{~ns}$</li><li>Cache hit time $=2 \\mathrm{~ns}$</li></ul></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$14.5$</span>",
                "<span style=\"display: inline;\">$19.37$</span>",
                "<span style=\"display: inline;\">$0.0145$</span>",
                "<span style=\"display: inline;\">$15$</span>"
            ],
            "answer": "A",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"483466\"></a><div itemprop=\"text\">A line in cache can hold $\\frac{16B}{2B} = 4$ elements of array<br/> <br/> when block is accessed it will be a miss but the next 3 elements will be hit<br/> <br/> so the hit rate = 3/4 or miss rate = 1/4<br/> <br/> <br/> <br/> Avg. access time = $2 + \\frac{1}{4}(50) = 2 + 12.5 = 14.5 \\\\\\ ns$ or $0.0145$ $\\mu s$<br/> <br/> </div><br><br><a href=\"https://gateoverflow.in/483256/go-classes-dpp-coa-cache-memory#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-coa-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/cache-memory\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">COA - Cache Memory</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\">A computer has a memory hierarchy consisting of a two-level cache (L1 and L2) and a main memory. If the processor needs to access data from memory, it first looks into L1 and L2 cache simultaneously.<br/> <br/> If the data is found In L1 cache, then it stops fetching from L2 immediately. it goes to main memory only if data is not found in L2 cache. Hit rates and access times of various memory units are:<br/> <br/> L1 cache:<br/> <br/> Hit rate $=90 \\%$<br/> Access time $=20 \\mathrm{~ns}$<br/> <br/> L2 cache:<br/> <br/> Hit rate $=80 \\%$<br/> Access time $=30 \\mathrm{~ns}$<br/> <br/> Main memory:<br/> <br/> Access time $=300 \\mathrm{~ns}$<br/> <br/> The average memory access time in nanoseconds is _________ (rounded off to two decimal places)</div></span>",
            "image": "",
            "options": [],
            "answer": "29",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"483044\"></a><div itemprop=\"text\"><p>Answer = 29 ns</p><p><img alt=\"\" height=\"338\" src=\"https://gateoverflow.in/?qa=blob&amp;qa_blobid=158858204316271808\" width=\"581\"/></p></div><br><br><a href=\"https://gateoverflow.in/482989/go-classes-dpp-coa-cache-memory#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-coa-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/cache-memory\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">COA - Cache Memory</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\">A processor uses a two-level cache hierarchy. The L1 cache has a hit time of $2$ ns and a hit rate of $88 \\%$. 10% of the blocks evicted from L1 are dirty. The L2 cache has a hit time of $10$ ns, a hit rate of $90 \\%$, and uses a write-through and no-write-allocate policy. The L2 cache is inclusive of L1, and the main memory access time is $60$ ns.<br/> <br/> If the L1 cache uses write-through policy with no write allocate, then the affective memory access time for a read operation is (up to $1$ decimal place) _________</div></span>",
            "image": "",
            "options": [],
            "answer": "3.92",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"507868\"></a><div itemprop=\"text\"><p data-end=\"163\" data-start=\"62\">AMAT = L1 hit time<br data-end=\"83\" data-start=\"80\"/> + L1 miss rate × (L2 hit time<br data-end=\"118\" data-start=\"115\"/> + L2 miss rate × Main memory time)</p><p data-end=\"314\" data-start=\"165\">Given<br data-end=\"173\" data-start=\"170\"/>L1 hit time = 2 ns, hit rate = 0.88 → miss rate = 0.12<br data-end=\"230\" data-start=\"227\"/>L2 hit time = 10 ns, hit rate = 0.90 → miss rate = 0.10<br data-end=\"288\" data-start=\"285\"/>Main memory time = 60 ns</p><p data-end=\"445\" data-start=\"316\">(Dirty-block information is irrelevant here because <strong data-end=\"428\" data-start=\"368\">write-through + no write-allocate ⇒ no dirty write-backs</strong> on a read miss.)</p><p data-end=\"450\" data-start=\"447\">So,</p><p data-end=\"568\" data-start=\"452\">AMAT<br data-end=\"459\" data-start=\"456\"/>= 2 + 0.12 × (10 + 0.10 × 60)<br data-end=\"491\" data-start=\"488\"/>= 2 + 0.12 × (10 + 6)<br data-end=\"515\" data-start=\"512\"/>= 2 + 0.12 × 16<br data-end=\"533\" data-start=\"530\"/>= 2 + 1.92<br data-end=\"546\" data-start=\"543\"/>= <strong data-end=\"568\" data-start=\"548\">3.92 ns ≈ 3.9 ns</strong></p></div><br><br><a href=\"https://gateoverflow.in/482985/go-classes-dpp-coa-cache-memory#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-coa-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/cache-memory\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">COA - Cache Memory</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\">A processor uses a two-level cache hierarchy. The L1 cache has a hit time of $2$ ns and a hit rate of $88 \\%$. It follows a write-back and write-allocate policy, and $10\\%$ of the blocks evicted from L1 are dirty. The L2 cache has a hit time of $10$ ns , a hit rate of $90 \\%$, and uses a write-through and no-write-allocate policy. The L2 cache is inclusive of L1, and the main memory access time is $60$ ns.<br/> <br/> The average memory access time (AMAT) for a read operation in ns is (up to $1$ decimal place) ______</div></span>",
            "image": "",
            "options": [],
            "answer": "0",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"539108\"></a><div itemprop=\"text\"><p><span class=\"pupi_dm_user_mention\" data-pupi_dm_user_id=\"181161\"><a class=\"pupi_dm_user_mention\" href=\"https://gateoverflow.in/user/GO%20Classes\" rel=\"nofollow\" target=\"_blank\">@GO Classes</a> Can you share the resource to study this type of question ? </span></p><p> </p></div><br><br><a href=\"https://gateoverflow.in/482983/go-classes-dpp-coa-cache-memory#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-coa-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/cache-memory\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">COA - Cache Memory</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider cache memory $90 \\%$ hit ratio is required to be installed in a memory system to reduce the average memory access time from 250 ns to 34 ns . Calculate the cache memory access time required?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$10$<br/></span>",
                "<span style=\"display: inline;\">$12$<br/></span>",
                "<span style=\"display: inline;\">$15$<br/></span>",
                "<span style=\"display: inline;\">$20$</span>"
            ],
            "answer": "A",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"495334\"></a><div itemprop=\"text\"><p>I'm getting Cache access time as <strong>9ns</strong> on using hierarchical access,</p><p>someone please explain why simultaneous memory access used here?</p></div><br><br><a href=\"https://gateoverflow.in/478692/go-classes-dpp-coa-cache-memory-hamacher#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-coa-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/cache-memory\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">COA - Cache Memory</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>A program consists of 500 instructions in total, including a loop of 100 instructions that is executed 25 times. Initially, all instructions are stored in main memory, and the cache is empty.<br/>Assume:</p><p>What is the speedup achieved by using the cache?<br/>Provide your answer as a numerical value rounded to 2 decimal places.</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">Main memory access takes 10 units of time</span>",
                "<span style=\"display: inline;\">Cache access takes 1 unit of time</span>",
                "<span style=\"display: inline;\">The cache is large enough to hold all loop instructions</span>",
                "<span style=\"display: inline;\">Program execution time depends only on the time taken to fetch instructions (operand data access is ignored)</span>"
            ],
            "answer": "0",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"496767\"></a><div itemprop=\"text\"><p>Source: Hamacher</p><p><img alt=\"\" height=\"321\" src=\"https://gateoverflow.in/?qa=blob&amp;qa_blobid=998649908897493701\" width=\"843\"/></p></div><br><br><a href=\"https://gateoverflow.in/478690/go-classes-dpp-coa-cache-memory-hamacher#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-coa-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/cache-memory\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">COA - Cache Memory</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>A direct-mapped cache has 16 blocks and each block holds 8 bytes. For a 16 -bit byte-addressable address, how many bits are needed for the tag field?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$9$<br/></span>",
                "<span style=\"display: inline;\">$10$<br/></span>",
                "<span style=\"display: inline;\">$11$<br/></span>",
                "<span style=\"display: inline;\">$12$</span>"
            ],
            "answer": "A",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"478774\"></a><div itemprop=\"text\">A.9 bits<br/> how see total size of address=16<br/> word offset/block offset takes-3 bits(since 8 byte size)<br/> index offset/line offset takes=4 bits(since 16 lines in cache)<br/> SO TAG IS 16-(3+4)=9</div><br><br><a href=\"https://gateoverflow.in/478688/go-classes-dpp-coa-cache-memory-hamacher#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-coa-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/cache-memory\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">COA - Cache Memory</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>A machine with a two-level cache has a base CPI of $1.5$ when all references hit the primary cache.<br/>Given the following characteristics:</p><p>What is the total CPI?<br/>(Answer should be a numerical value accurate to 4 decimal places.)</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">Clock rate: $250$ MHz</span>",
                "<span style=\"display: inline;\">Memory access time: $\\mathbf{1 0 0}$ ns</span>",
                "<span style=\"display: inline;\">Miss rate at the primary cache: $\\mathbf{5 \\%}$</span>",
                "<span style=\"display: inline;\">Secondary cache access time: $\\mathbf{1 0}$ ns</span>",
                "<span style=\"display: inline;\">Miss rate at the secondary cache: $1 \\%$</span>"
            ],
            "answer": "100",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"477187\"></a><div itemprop=\"text\">The clock rate of $250$ MHz implies a clock cycle of $4$ ns .<br/> Memory access time $=100 \\mathrm{~ns} \\rightarrow 25$ cycles<br/> Secondary cache access time $=10 \\mathrm{~ns} \\rightarrow 2.5$ cycles<br/> <br/> $$<br/> \\begin{aligned}<br/> \\text { Effective CPI }= &amp; 1.5+\\text { cycles missed by primary but caught by secondary } \\\\<br/> &amp; + \\text { cycles missed by both caches } \\\\<br/> = &amp; 1.5+0.05 \\times(1-0.01) \\times 2.5+0.05 \\times 0.01 \\times(2.5+25) \\\\<br/> = &amp; 1.5+0.0495 \\times 2.5+0.0005 \\times 27.5 \\\\<br/> = &amp; 1.5+0.12375+0.01375 \\\\<br/> = &amp; 1.6375<br/> \\end{aligned}<br/> $$</div><br><br><a href=\"https://gateoverflow.in/477186/go-classes-dpp-coa-cache-memory-the-city-university-of-new-york#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-coa-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/cache-memory\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">COA - Cache Memory</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\">Suppose a computer has a $4$-way set associative cache with one-word blocks and a total capacity of 256 bytes (word size $=4$ bytes). Given the sequence of byte addresses $8$, $64$, $96$, $128$, $64$, $96$, $256$, $192$, $24$, how many cache misses occur? (Answer as a numerical value.)</div></span>",
            "image": "",
            "options": [],
            "answer": "0",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"477184\"></a><div itemprop=\"text\">The block addresses for this sequence are $2,16,24,32,16,24,64,48,6$. There are $256 /\\left(4^* 4\\right)=16$ sets. Therefore, the mapping of block address to set s is block_addr % 16. The sequence generates the following table. Empty sets are not shown. The currently accessed cache block is in boldface. The notation $m[i]$ means the word located at memory address $i$.<br/> <br/> \\begin{array}{|l|l|l|l|l|l|l|l|l|l|l|}<br/> \\hline byte \\# &amp; block \\# &amp; set \\# &amp; &amp; set 0 &amp; set0 &amp; set 0 &amp; set0 &amp; set 2 &amp; set6 &amp; set 8 \\\\<br/> \\hline &amp; &amp; &amp; &amp; block0 &amp; block1 &amp; block2 &amp; block3 &amp; block0 &amp; block0 &amp; block0 \\\\<br/> \\hline 8 &amp; 2 &amp; 2 &amp; miss &amp; &amp; &amp; &amp; &amp; m[8] &amp; &amp; \\\\<br/> \\hline 64 &amp; 16 &amp; 0 &amp; miss &amp; \\mathbf{m[64]} &amp; &amp; &amp; &amp; m[8] &amp; &amp; \\\\<br/> \\hline 96 &amp; 24 &amp; 8 &amp; miss &amp; m[64] &amp; &amp; &amp; &amp; \\mathrm{m}|8| &amp; &amp; m[96] \\\\<br/> \\hline 128 &amp; 32 &amp; 0 &amp; miss &amp; m[64] &amp; \\mathbf{m[128]} &amp; &amp; &amp; \\mathrm{m}[8] &amp; &amp; m|96] \\\\<br/> \\hline 64 &amp; 16 &amp; 0 &amp; hit &amp; m[64] &amp; m[128] &amp; &amp; &amp; \\mathrm{m}|8| &amp; &amp; m[96] \\\\<br/> \\hline 96 &amp; 24 &amp; 8 &amp; hit &amp; \\mathbf{m[64]} &amp; m[128] &amp; &amp; &amp; \\mathrm{m}[8] &amp; &amp; m[96] \\\\<br/> \\hline 256 &amp; 64 &amp; 0 &amp; miss &amp; m[64] &amp; m[128] &amp;\\mathbf{m[256]} &amp; &amp; \\mathrm{m}[8] &amp; &amp; m[96] \\\\<br/> \\hline 192 &amp; 48 &amp; 0 &amp; miss &amp; m[64] &amp; m[128] &amp; m[256] &amp; m[192] &amp; \\mathrm{m}[8] &amp; &amp; m[96] \\\\<br/> \\hline 24 &amp; 6 &amp; 6 &amp; miss &amp; \\mathrm{m}[64] &amp; m[128] &amp; m|256| &amp; m[192] &amp; \\mathrm{m}[8] &amp; \\mathbf{m}[24] &amp; m[96] \\\\<br/> \\hline<br/> \\end{array}<br/> \\begin{equation}<br/> \\text { There were } 7 \\text { misses and } 2 \\text { hits. }<br/> \\end{equation}</div><br><br><a href=\"https://gateoverflow.in/477182/go-classes-dpp-coa-cache-memory-the-city-university-of-new-york#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-coa-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/cache-memory\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">COA - Cache Memory</a></b></div></div>"
        }
    ]
});

registerTest({
    "name": "DPP 04 - Computer Organization (Cache Memory - Part 4)",
    "testLabel": "DPP 04",
    "testType": "DPP",
    "bracket": "Cache Memory - Part 4",
    "subject": "coa",
    "series": "cse-dpp-2027",
    "date": "Nov 03, 2026",
    "duration": "15 Min",
    "totalMarks": 2,
    "topicsCovered": "Cache Memory (Practice Set 4)",
    "questions": [
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>A block-set-associative cache consists of $64$ blocks divided into $4$-block sets.<br/>The main memory has $4096$ blocks, each block containing $32$ words.<br/>Assuming:</p><p>How many bits are there in each of the Tag, Set, and Word/Byte offset fields?</p><p><strong>Given Details:</strong></p><ul><li>The machine has a $32$-bit byte-addressable address space</li><li>Word size $=4$ bytes</li></ul></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">Tag $=21$ bits, Set $=4$ bits, Word/Byte offset $=7$ bits</span>",
                "<span style=\"display: inline;\">Tag $=20$ bits, Set $=5$ bits, Word/Byte offset $=7$ bits</span>",
                "<span style=\"display: inline;\">Tag $=21$ bits, Set $=5$ bits, Word/Byte offset $=6$ bits</span>",
                "<span style=\"display: inline;\">Tag $=22$ bits, Set $=4$ bits, Word/Byte offset $=6$ bits</span>"
            ],
            "answer": "A",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"477181\"></a><div itemprop=\"text\">A block-set-associative cache has $64$ blocks divided into 4-block sets $\\rightarrow 16$ sets ( $\\log _2 16=4$ bits).<br/> Each block has $32$ words, word size $=4$ bytes $\\rightarrow$ block size $=32 \\times 4=128$ bytes $\\rightarrow \\log _2 128=7$ bits for block offset.<br/> 32-bit address $\\rightarrow$ Tag $=32-(4+7)=21$ bits.<br/> Final answer:<br/> Tag $=21$ bits, Set $=4$ bits, Word/Byte offset $=7$ bits.</div><br><br><a href=\"https://gateoverflow.in/477179/go-classes-dpp-coa-cache-memory-hamacher#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-coa-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/cache-memory\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">COA - Cache Memory</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>If the access time of a cache is $1$ ns and the access time of main memory is $15$ ns, assuming that the cache hit rate is $0.9$ and the total number of memory accesses is $100$, then the <strong>total access times with cache and without cache</strong>, respectively, will be $\\_\\_\\_\\_\\_\\_$ and $\\_\\_\\_\\_\\_\\_$.</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$250$ ns and $1500$ ns<br/></span>",
                "<span style=\"display: inline;\">$250$ ms and $150$ ns<br/></span>",
                "<span style=\"display: inline;\">$25$ ns and $1500$ ns<br/></span>",
                "<span style=\"display: inline;\">$250$ ms and $1500$ ms</span>"
            ],
            "answer": "A",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"475521\"></a><div itemprop=\"text\"><p><br/>Given:</p><ul><li>Cache access time $=1 \\mathrm{~ns}$</li><li>Main memory access time $=15 \\mathrm{~ns}$</li><li>Cache hit rate $=0.9$</li><li>Total number of accesses = 100 (not needed for average calculation)</li></ul><p>Average access time with cache:<br/>$$<br/>\\begin{aligned}<br/>&amp; =(0.9 \\times 1)+(0.1 \\times(1+15)) \\\\<br/>&amp; =0.9+1.6 \\\\<br/>&amp; =2.5 \\mathrm{~ns} \\\\<br/>&amp; =250 \\text { nanoseconds }<br/>\\end{aligned}<br/>$$</p><p>Access time without cache:<br/>$$<br/>\\begin{aligned}<br/>&amp; =15 \\mathrm{~ns} \\\\<br/>&amp; =1500 \\text { nanoseconds }<br/>\\end{aligned}<br/>$$</p><p>Correct answer:</p><p><br/>A. 250 nS and 1500 nS</p></div><br><br><a href=\"https://gateoverflow.in/475520/go-classes-dpp-coa-cache-memory-nptel#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-coa-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/cache-memory\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">COA - Cache Memory</a></b></div></div>"
        }
    ]
});
