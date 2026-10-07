registerTest({
    series: "cse-gate-2027",
    name: "TWT-Operating System(Memory Management-I)",
    date: "sep 08, 2026",
    topicsCovered: "Paging, TLB, Page Replacement & Address Translation",
    questions: [
        {
            marks: 2,
            neg: 0,
            type: "NAT",
            text: `<span style="display: inline;">Consider contiguous allocation of physical memory to processes using variable partitioning scheme. Suppose there are \\( 8 \\) holes in the memory of sizes \\( 20 \\text{KB}, 4 \\text{KB} \\), \\( 25 \\text{KB}, 18 \\text{KB}, 7 \\text{KB}, 9 \\text{KB}, 15 \\text{KB} \\), and \\( 12\\text{KB} \\). Assume that no two holes are adjacent. Two processes \\( \\text{P1} \\) of size \\( 16KB \\) and \\( \\text{P2} \\) of size \\( 9KB \\) arrive in that order, and they are allocated memory using the best-fit technique. After allocating space to \\( \\text{P1} \\) and \\( \\text{P2} \\), the number of holes of size less than \\( 8KB \\) is ________. (answer in integer) <br/>Note: \\( 1 {K}=2^{10} \\)</span>`,
            image: "",
            options: [
            ],
            answer: "3",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/523101/gate-cse-2026-set-2-question-45#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2026-set-2" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2026 SET-2</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 2,
            neg: 0,
            type: "NAT",
            text: `<span style="display: inline;">A system has a Translation Lookaside Buffer (TLB) that has a reach of \\( 1 \\) MB. TLB reach is defined as the total amount of physical memory that can be accessed through the TLB entries. The paging system uses pages of size \\( 4 \\) KB. The virtual address space is \\( 64 \\) GB and physical address space is \\( 1 \\) GB. If each TLB entry stores a \\( 4 \\)-bit process id, page number, frame number, and a \\( 2 \\)-bit control field, then the size of the TLB (in bytes) is ________. (answer in integer) <br/>Note: \\( 1 {K}=2^{10}, 1 {M}=2^{20}, 1 {G}=2^{30} \\)</span>`,
            image: "",
            options: [
            ],
            answer: "1536",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/523102/gate-cse-2026-set-2-question-44#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2026-set-2" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2026 SET-2</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 2,
            neg: 0,
            type: "MSQ",
            text: `<span style="display: inline;">Consider a system that has a cache memory unit and a memory management unit (MMU). The address input to the cache memory is a physical address. The MMU has a translation lookaside buffer (TLB). Assume that when a page is evicted from the main memory, the corresponding blocks in the cache are marked as invalid. <br/><br/>For a given memory reference, which of the following sequences of events can NEVER happen?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">TLB miss, Page table hit, Cache hit</span>`,
                `<span style="display: inline;">TLB hit, Page table miss, Cache hit</span>`,
                `<span style="display: inline;">TLB miss, Page table miss, Cache hit</span>`,
                `<span style="display: inline;">TLB miss, Page table miss, Cache miss</span>`
            ],
            answer: ["B", "C"],
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/523036/gate-cse-2026-set-1-question-44#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2026-set-1" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2026 SET-1</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 2,
            neg: 0,
            type: "NAT",
            text: `<span style="display: inline;">A computer system supports a logical address space of \\( 2^{32} \\) bytes. It uses two-level hierarchical paging with a page size of 4096 bytes. A logical address is divided into a \\( b \\)-bit index to the outer page table, an offset within the page of the inner page table, and an offset within the desired page. Each entry of the inner page table uses eight bytes. All the pages in the system have the same size. <br/><br/>The value of \\( b \\) is ___________ . (Answer in integer)</span>`,
            image: "",
            options: [
            ],
            answer: "11",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/460845/gate-cse-2025-set-2-question-48#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2025-set-2" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2025 SET-2</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 2,
            neg: 0.66,
            type: "MCQ",
            text: `<span style="display: inline;">Consider a demand paging system with three frames, and the following page reference string: 1 2 3 4 5 4 1 6 4 5 1 3 2. The contents of the frames are as follows initially and after each reference (from left to right): <br/><img src="images/pyq-os/q37.webp"/><br/> The *-marked references cause page replacements. <br/> Which one or more of the following could be the page replacement policy/policies in use?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">Least Recently Used page replacement policy</span>`,
                `<span style="display: inline;">Least Frequently Used page replacement policy</span>`,
                `<span style="display: inline;">Most Frequently Used page replacement policy</span>`,
                `<span style="display: inline;">Optimal page replacement policy</span>`
            ],
            answer: "D",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/460798/gate-cse-2025-set-2-question-37#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2025-set-2" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2025 SET-2</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 2,
            neg: 0,
            type: "NAT",
            text: `<span style="display: inline;">In optimal page replacement algorithm, information about all future page references is available to the operating system (OS). A modification of the optimal page replacement algorithm is as follows: <br/> The OS correctly predicts only up to next 4 page references (including the current page) at the time of allocating a frame to a page. <br/> A process accesses the pages in the following order of page numbers: <br/><br/> 1, 3, 2, 4, 2, 3, 1, 2, 4, 3, 1, 4. <br/><br/> If the system has three memory frames that are initially empty, the number of page faults that will occur during execution of the process is _________. (Answer in integer)</span>`,
            image: "",
            options: [
            ],
            answer: "6",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/460036/gate-cse-2025-set-1-question-44#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2025-set-1" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2025 SET-1</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Consider a demand paging memory management system with 32-bit logical address, 20-bit physical address, and page size of 2048 bytes. Assuming that the memory is byte addressable, what is the maximum number of entries in the page table?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">\( 2^{21} \)</span>`,
                `<span style="display: inline;">\( 2^{20} \)</span>`,
                `<span style="display: inline;">\( 2^{22} \)</span>`,
                `<span style="display: inline;">\( 2^{24} \)</span>`
            ],
            answer: "A",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/460076/gate-cse-2025-set-1-question-4#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2025-set-1" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2025 SET-1</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 2,
            neg: 0,
            type: "NAT",
            text: `<span style="display: inline;">Consider a 32-bit system with \( 4 \mathrm{~KB} \) page size and page table entries of size 4 bytes each. Assume \( 1 \mathrm{~KB}=2^{10} \) bytes. The OS uses a 2-level page table for memory management, with the page table containing an outer page directory and an inner page table. The OS allocates a page for the outer page directory upon process creation. The OS uses demand paging when allocating memory for the inner page table, i.e., a page of the inner page table is allocated only if it contains at least one valid page table entry. <br/> An active process in this system accesses 2000 unique pages during its execution, and none of the pages are swapped out to disk. After it completes the page accesses, let \( X \) denote the minimum and \( Y \) denote the maximum number of pages across the two levels of the page table of the process. <br/> The value of \( X+Y \) is _____</span>`,
            image: "",
            options: [
            ],
            answer: "1028",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/422843/gate-cse-2024-set-2-question-54#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2024-set-2" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2024 SET-2</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Which of the following tasks is/are the responsibility/responsibilities of the memory management unit (MMU) in a system with paging-based memory management?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">Allocate a new page table for a newly created process</span>`,
                `<span style="display: inline;">Translate a virtual address to a physical address using the page table</span>`,
                `<span style="display: inline;">Raise a trap when a virtual address is not found in the page table</span>`,
                `<span style="display: inline;">Raise a trap when a process tries to write to a page marked with read-only permission in the page table</span>`
            ],
            answer: "B",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/422883/gate-cse-2024-set-2-question-14#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2024-set-2" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2024 SET-2</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 2,
            neg: 0,
            type: "NAT",
            text: `<span style="display: inline;">Consider a memory management system that uses a page size of \( 2 \mathrm{~KB} \). Assume that both the physical and virtual addresses start from 0. Assume that the pages \( 0,1,2 \), and \( 3 \) are stored in the page frames \( 1,3,2 \), and \( 0 \), respectively. The physical address (in decimal format) corresponding to the virtual address \( 2500 \) (in decimal format) is ____</span>`,
            image: "",
            options: [
            ],
            answer: "6596",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/422790/gate-cse-2024-set-1-question-52#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2024-set-1" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2024 SET-1</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 2,
            neg: 0,
            type: "NAT",
            text: `<span style="display: inline;">Consider a computer system with 57-bit virtual addressing using multi-level tree-structured page tables with L levels for virtual to physical address translation. The page size is 4 KB (1 KB = 1024 B) and a page table entry at any of the levels occupies 8 bytes.<br/> The value of L is ______.</span>`,
            image: "",
            options: [
            ],
            answer: "5",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/399263/gate-cse-2023-question-48#a_list_title" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2023" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2023</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 2,
            neg: 0,
            type: "NAT",
            text: `<span style="display: inline;">Consider the following two-dimensional array D in the C programming language, which is stored in row-major order:<br/><br/> int D[128][128];<br/><br/> Demand paging is used for allocating memory and each physical page frame holds 512 elements of the array D. The Least Recently Used (LRU) page-replacement policy is used by the operating system. A total of 30 physical page frames are allocated to a process which executes the following code snippet:<br/> <pre style="background-color: #f8f9fa; border: 1px solid #dee2e6; border-radius: 5px; padding: 12px; overflow-x: auto; font-family: monospace; font-size: 14px; margin-top: 10px;"><code>
for (int i = 0; i &lt; 128; i++)
       for (int j = 0; j &lt; 128; j++) 
                   D[j][i] *= 10;
</code></pre><br/> The number of page faults generated during the execution of this code snippet is _____.</span>`,
            image: "",
            options: [
            ],
            answer: "4096",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/399264/gate-cse-2023-question-47#a_list_title" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2023" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2023</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 2,
            neg: 0,
            type: "NAT",
            text: `<span style="display: inline;">Consider a demand paging system with four page frames (initially empty) and LRU page replacement policy. For the following page reference string <br/><br/> 7, 2, 7, 3, 2, 5, 3, 4, 6, 7, 7,1, 5, 6,1 <br/><br/> the page fault rate, defined as the ratio of number of page faults to the number of memory accesses (rounded off to one decimal place) is</span>`,
            image: "",
            options: [
            ],
            answer: "0.6",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/371882/Gate-cse-2022-question-54#a_list_title" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2022" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2022</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 2,
            neg: 0.66,
            type: "MCQ",
            text: `<span style="display: inline;">Which one of the following statements is FALSE?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">The TLB performs an associative search in parallel on all its valid entries using page number of incoming virtual address.</span>`,
                `<span style="display: inline;">If the virtual address of a word given by CPU has a TLB hit, but the subsequent search for the word results in a cache miss, then the word will always be present in the main memory.</span>`,
                `<span style="display: inline;">The memory access time using a given inverted page table is always same for all incoming virtual addresses.</span>`,
                `<span style="display: inline;">In a system that uses hashed page tables, if two distinct virtual addresses V1 and V2 map to the same value while hashing, then the memory access time of these addresses will not be the same.</span>`
            ],
            answer: "C",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/371908/Gate-cse-2022-question-28#a_list_title" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2022" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2022</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 2,
            neg: 0,
            type: "NAT",
            text: `<span style="display: inline;">Consider a three-level page table to translate a 39-bit virtual address to a physical address as shown below:<br/><img src="images/pyq-os/q48.jpg"/><br/> The page size is 4 KB = (1KB =\( 2^{10} \) bytes) and page table entry size at every level is 8 bytes. A process P is currently using 2 GB (1 GB =\( 2^{30} \) bytes) virtual memory which os mapped to 2 GB of physical memory. The minimum amount of memory required for the page table of P across all levels is _________ KB</span>`,
            image: "",
            options: [
            ],
            answer: "4108",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/357489/gate-cse-2021-set-2-question-48#a_list_title" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2021-set-2" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2021 SET-2</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
    ]
});

registerTest({
    series: "cse-gate-2027",
    name: "TWT-Operating System(Memory Management-II)",
    date: "sep 08, 2026",
    topicsCovered: "Page Replacement, Fragmentation, Allocation & EAT",
    questions: [
        {
            marks: 1,
            neg: 0,
            type: "MSQ",
            text: `<span style="display: inline;">In the context of operating systems, which of the following statements is/are correct with respect to paging?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">Paging helps solve the issue of external fragmentation</span>`,
                `<span style="display: inline;">Page size has no impact on internal fragmentation</span>`,
                `<span style="display: inline;">Paging incurs memory overheads</span>`,
                `<span style="display: inline;">Multi-level paging is necessary to support pages of different sizes</span>`
            ],
            answer: ["A", "C"],
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/357441/gate-cse-2021-set-1-question-11#a_list_title" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2021-set-1" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2021 SET-1</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Consider the following page reference string.1 2 3 4 2 1 5 6 2 1 2 3 7 6 3 2 1 2 3 6 What are the minimum number of frames required to get a single page fault for the above sequence assuming LRU replacement strategy?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">7</span>`,
                `<span style="display: inline;">4</span>`,
                `<span style="display: inline;">6</span>`,
                `<span style="display: inline;">5</span>`
            ],
            answer: "C",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/331254/isro2020-30" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/isro-cse-2020" style="color:#2f6d1a; text-decoration:none" target="_blank">ISRO CSE 2020</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">What is compaction refers to</span>`,
            image: "",
            options: [
                `<span style="display: inline;">a technique for overcoming internal fragmentation</span>`,
                `<span style="display: inline;">a paging technique</span>`,
                `<span style="display: inline;">a technique for overcoming external fragmentation</span>`,
                `<span style="display: inline;">a technique for compressing the data</span>`
            ],
            answer: "C",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/331280/isro2020-25" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/isro-cse-2020" style="color:#2f6d1a; text-decoration:none" target="_blank">ISRO CSE 2020</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 2,
            neg: 0,
            type: "NAT",
            text: `<span style="display: inline;">Consider a paging system that uses 1-level page table residing in main memory and a TLB for address translation. Each main memory access takes 100 ns and TLB lookup takes 20 ns. Each page transfer to/from the disk takes 5000 ns. Assume that the TLB hit ratio is 95%, page fault rate is 10%. Assume that for 20% of the total page faults, a dirty page has to be written back to disk before the required page is read from disk. TLB update time is negligible. The average memory access time in ns (round off to 1 decimal places) is ___________</span>`,
            image: "",
            options: [
            ],
            answer: "154.5:155.5",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/333178/gate2020-cs-53#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2020" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2020</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Consider allocation of memory to a new process. Assume that none of the existing holes in the memory will exactly fit the process's memory requirement. Hence, a new hole of smaller size will be created if allocation is made in any of the existing holes. Which one of the following statement is TRUE?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">The hole created by first fit is always larger than the hole created by next fit.</span>`,
                `<span style="display: inline;">The hole created by worst fit is always larger than the hole created by first fit.</span>`,
                `<span style="display: inline;">The hole created by best fit is never larger than the hole created by first fit.</span>`,
                `<span style="display: inline;">The hole created by next fit is never larger than the hole created by best fit.</span>`
            ],
            answer: "C",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/333220/gate2020-cs-11#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2020" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2020</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 2,
            neg: 0.66,
            type: "MCQ",
            text: `<span style="display: inline;">Assume that in a certain computer, the virtual addresses are 64 bits long and the physical addresses are 48 bits long. The memory is word addressable. The page size is 8kB and the word size is 4 bytes. The Translation Look-aside Buffer (TLB) in the address translation path has 128 valid entries. At most how many distinct virtual addresses can be translated without any TLB miss?</span>`,
            image: "",
            options: [
                `<span style="display: inline;"><span>\\( 16 \\times 2^{10} \\)</span></span>`,
                `<span style="display: inline;"><span>\\( 256 \\times 2^{10} \\)</span></span>`,
                `<span style="display: inline;"><span>\\( 4 \\times 2^{20} \\)</span></span>`,
                `<span style="display: inline;"><span>\\( 8 \\times 2^{20} \\)</span></span>`
            ],
            answer: "B",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/302815/gate2019-cs-33#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2019" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2019</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">The Operating System of a computer may periodically collect all the free memory space to form contiguous block of free space. This is called:</span>`,
            image: "",
            options: [
                `<span style="display: inline;">Concatenation</span>`,
                `<span style="display: inline;">Garbage Collection</span>`,
                `<span style="display: inline;">Collision</span>`,
                `<span style="display: inline;">Dynamic Memory Allocation</span>`
            ],
            answer: "B",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/213527/isro2018-61" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/isro-cse-2018" style="color:#2f6d1a; text-decoration:none" target="_blank">ISRO CSE 2018</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">A computer has 1000K of main memory. The jobs arrive and finish in the following sequence.<br/> Job 1 requiring 200 K arrives <br/>Job 2 requiring 350 K arrives <br/>Job 3 requiring 300 K arrives<br/>Job 1 finishes<br/>Job 4 requiring 120 K arrives<br/>Job 5 requiring 150 K arrives<br/>Job 6 requiring 80 K arrives<br/>Among best fit and first fit, which performs better for this sequence?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">First fit</span>`,
                `<span style="display: inline;">Best fit</span>`,
                `<span style="display: inline;">Both perform the same</span>`,
                `<span style="display: inline;">None of the above</span>`
            ],
            answer: "A",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/213566/isro2018-22" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/isro-cse-2018" style="color:#2f6d1a; text-decoration:none" target="_blank">ISRO CSE 2018</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Determine the number of page faults when references to pages occur in the order 1,2,4,5,2,1,2,4. Assume that the main memory can accommodate 3 pages and the main memory already has the pages 1 and 2, with page 1 brought earlier than page 2. (assume LRU i.e., Least-Recently-Used algorithm is applied)</span>`,
            image: "",
            options: [
                `<span style="display: inline;">3</span>`,
                `<span style="display: inline;">4</span>`,
                `<span style="display: inline;">5</span>`,
                `<span style="display: inline;">None of the above</span>`
            ],
            answer: "B",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/213426/isro2018-20" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/isro-cse-2018" style="color:#2f6d1a; text-decoration:none" target="_blank">ISRO CSE 2018</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Consider a process executing on an operating system that uses demand paging. The average time for a memory access in the system is M units if the corresponding memory page is available in memory, and D units if the memory access causes a page fault. It has been experimentally measured that the average time taken for a memory access in the process is X units. <br/> Which one of the following is the correct expression for the page fault rate experienced by the process?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">(D - M) / (X - M)</span>`,
                `<span style="display: inline;">(X - M) / (D - M)</span>`,
                `<span style="display: inline;">(D - X) / (D - M)</span>`,
                `<span style="display: inline;">(X - M) / (D - X)</span>`
            ],
            answer: "B",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/204084/gate2018-10#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2018" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2018</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Given reference to the following pages by a program<br/>0,9,0,1,8,1,8,7,8,7,1,2,8,2,7,8,2,3,8,3<br/>How many page faults will occur if the program has three page frames available to it and uses an optimal replacement?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">7</span>`,
                `<span style="display: inline;">8</span>`,
                `<span style="display: inline;">9</span>`,
                `<span style="display: inline;">None of the above</span>`
            ],
            answer: "A",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/128704/isro2017-52" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/isro-cse-2017" style="color:#2f6d1a; text-decoration:none" target="_blank">ISRO CSE 2017</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 2,
            neg: 0.66,
            type: "MCQ",
            text: `<span style="display: inline;">Recall that Belady's anomaly is that the pages-fault rate may increase as the number of allocated frames increases. Now consider the following statements: <br/><br/> S1: Random page replacement algorithm (where a page chosen at random is replaced) suffers from Belady's anomaly <br/> S2: LRU page replacement algorithm suffers from Belady's anomaly <br/><br/> Which of the following is CORRECT ?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">S1 is true, S2 is true</span>`,
                `<span style="display: inline;">S1 is true, S2 is false</span>`,
                `<span style="display: inline;">S1 is false , S2 is true</span>`,
                `<span style="display: inline;">S1 is false, S2 is false</span>`
            ],
            answer: "B",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/118323/gate-cse-2017-set-1-question-40#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2017-set-1" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2017 SET-1</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">A CPU generates 32-bit virtual addresses. The page size is 4 KB. The processor has a translation look-aside buffer (TLB) which can hold a total of 128 page table entries and is 4-way set associative. The minimum size of the TLB tag is:</span>`,
            image: "",
            options: [
                `<span style="display: inline;">11 bits</span>`,
                `<span style="display: inline;">13 bits</span>`,
                `<span style="display: inline;">15 bits</span>`,
                `<span style="display: inline;">20 bits</span>`
            ],
            answer: "C",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/1840/gate2006-62-isro2016-50" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/isro-cse-2016" style="color:#2f6d1a; text-decoration:none" target="_blank">ISRO CSE 2016</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Determine the number of page faults when references to pages occur in the following order: 1, 2, 4, 5, 2, 1, 2, 4 Assume that the main memory can accommodate 3 pages and the main memory already has the pages 1 and 2, with page one having brought earlier than page 2. (LRU page replacement algorithm is used)</span>`,
            image: "",
            options: [
                `<span style="display: inline;">3</span>`,
                `<span style="display: inline;">5</span>`,
                `<span style="display: inline;">4</span>`,
                `<span style="display: inline;">None of these</span>`
            ],
            answer: "C",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/55927/isro2016-48" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/isro-cse-2016" style="color:#2f6d1a; text-decoration:none" target="_blank">ISRO CSE 2016</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Let the page fault service time be 10 ms in a computer with average memory access time being 20 ns. If one page fault is generated for every <span>\\( 10^6 \\)</span> memory accesses, what is the effective access time for the memory?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">21.4 ns</span>`,
                `<span style="display: inline;">29.9 ns</span>`,
                `<span style="display: inline;">23.5 ns</span>`,
                `<span style="display: inline;">35.1 ns</span>`
            ],
            answer: "B",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/55475/isro2016-22" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/isro-cse-2016" style="color:#2f6d1a; text-decoration:none" target="_blank">ISRO CSE 2016</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
    ]
});

registerTest({
    series: "cse-gate-2027",
    name: "TWT-Operating System(Memory Management-III)",
    date: "sep 08, 2026",
    topicsCovered: "Page Table Size, LRU/FIFO, Dirty Bit & Segmentation",
    questions: [
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">In which one of the following page replacement algorithms it is possible for the page fault rate to increase even when the number of allocated frames increases?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">LRU(Least Recently Used)</span>`,
                `<span style="display: inline;">OPT (Optimal Page Replacement)</span>`,
                `<span style="display: inline;">MRU(Most Recently Used)</span>`,
                `<span style="display: inline;">FIFO(First In First Out)</span>`
            ],
            answer: "D",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/39559/gate2016-2-20#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2016-set-2" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2016 SET-2</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 2,
            neg: 0,
            type: "NAT",
            text: `<span style="display: inline;">Consider a computer system with ten physical page frames. The system is provided with an accessse quence <span>\\( (a_{1},a_{2},...,a_{20},a_{1},a_{2},...,a_{20}) \\)</span>, where each <span>\\( a_{i} \\)</span> is a distinct virtual page number. The difference in the number of page faults between the last-in-first-outpage replacement policy and the optimal page replacement policy is ______.</span>`,
            image: "",
            options: [
            ],
            answer: "1",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/39711/gate2016-1-49#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2016-set-1" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2016 SET-1</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 2,
            neg: 0,
            type: "NAT",
            text: `<span style="display: inline;">Consider a computer system with 40-bit virtual addressing and page size of sixteen kilobytes. If the computer system has a one level page table per process and each page table entry requires 48 bits, then the size of the per-process page table is _________ mega bytes.</span>`,
            image: "",
            options: [
            ],
            answer: "384",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/39690/gate2016-1-47#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2016-set-1" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2016 SET-1</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0,
            type: "NAT",
            text: `<span style="display: inline;">A processor can support a maximum memory of 4GB, where the memory is word-addressable (a word consists of two bytes). The size of the address bus of the process or is at least bits________.</span>`,
            image: "",
            options: [
            ],
            answer: "31",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/39632/gate2016-1-9#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2016-set-1" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2016 SET-1</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Dirty bit for a page in a page table</span>`,
            image: "",
            options: [
                `<span style="display: inline;">helps avoid unnecessary writes on a paging device</span>`,
                `<span style="display: inline;">helps maintain LRU information</span>`,
                `<span style="display: inline;">allows only read on a page</span>`,
                `<span style="display: inline;">None of the above</span>`
            ],
            answer: "A",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/2241/gate1997-3-10-isro2008-57-isro2015-64" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/isro-cse-2015" style="color:#2f6d1a; text-decoration:none" target="_blank">ISRO CSE 2015</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Increasing the RAM of a computer typically improves performance because:</span>`,
            image: "",
            options: [
                `<span style="display: inline;">Virtual Memory increases</span>`,
                `<span style="display: inline;">Larger RAMs are faster</span>`,
                `<span style="display: inline;">Fewer page faults occur</span>`,
                `<span style="display: inline;">Fewer segmentation faults occur</span>`
            ],
            answer: "C",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/1358/gate2005-22-isro2015-36" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/isro-cse-2015" style="color:#2f6d1a; text-decoration:none" target="_blank">ISRO CSE 2015</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">If there are 32 segments, each size 1k bytes, then the logical address should have</span>`,
            image: "",
            options: [
                `<span style="display: inline;">13 bits</span>`,
                `<span style="display: inline;">14 bits</span>`,
                `<span style="display: inline;">15 bits</span>`,
                `<span style="display: inline;">16 bits</span>`
            ],
            answer: "C",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/51212/isro2015-31" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/isro-cse-2015" style="color:#2f6d1a; text-decoration:none" target="_blank">ISRO CSE 2015</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 2,
            neg: 0,
            type: "NAT",
            text: `<span style="display: inline;">A computer system implements 8 kilobyte pages and a 32-bit physical address space. Each page table entry contains a valid bit, a dirty bit, three permission bits, and the translation. If the maximum size of the page table of a process is 24 megabytes, the length of the virtual address supported by the system is _____ bits.</span>`,
            image: "",
            options: [
            ],
            answer: "36",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/8247/gate2015-2-33#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2015-set-2" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2015 SET-2</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 2,
            neg: 0.66,
            type: "MCQ",
            text: `<span style="display: inline;">Consider six memory partitions of sizes 200 KB, 400 KB, 600 KB, 500 KB, 300 KB and 250 KB, where KB refers to kilobyte. These partitions need to be allotted to four processes of sizes 357 KB, 210 KB, 468 KB and 491 KB in that order. If the best fit algorithm is used, which partitions are NOT allotted to any process?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">200 KB and 300 KB</span>`,
                `<span style="display: inline;">200 KB and 250 KB</span>`,
                `<span style="display: inline;">250 KB and 300 KB</span>`,
                `<span style="display: inline;">300 KB and 400 KB</span>`
            ],
            answer: "A",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/8145/gate2015-2-31#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2015-set-2" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2015 SET-2</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0,
            type: "NAT",
            text: `<span style="display: inline;">A computer system implements a 40-bit virtual address, page size of 8 kilobytes, and a 128-entry translation look-aside buffer (TLB) organized into 32 sets each having four ways. Assume that the TLB tag does not store any process id. The minimum length of the TLB tag in bits is _________.</span>`,
            image: "",
            options: [
            ],
            answer: "22",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/8120/gate2015-2-9#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2015-set-2" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2015 SET-2</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 2,
            neg: 0.66,
            type: "MCQ",
            text: `<span style="display: inline;">Consider a main memory with five page frames and the following sequence of page references: 3, 8, 2, 3, 9, 1, 6, 3, 8, 9, 3, 6, 2, 1, 3. Which one of the following is true with respect to page replacement policies First In First Out (FIFO) and Least Recently Used (LRU)?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">Both incur the same number of page faults</span>`,
                `<span style="display: inline;">FIFO incurs 2 more page faults than LRU</span>`,
                `<span style="display: inline;">LRU incurs 2 more page faults than FIFO</span>`,
                `<span style="display: inline;">FIFO incurs 1 more page faults than LRU</span>`
            ],
            answer: "A",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/8353/gate2015-1-47#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2015-set-1" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2015 SET-1</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0,
            type: "NAT",
            text: `<span style="display: inline;">Consider a system with byte-addressable memory, 32-bit logical addresses, 4 kilobyte page size and page table entries of 4 bytes each. The size of the page table in the system in megabytes is ________ .</span>`,
            image: "",
            options: [
            ],
            answer: "4",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/8186/gate2015-1-19#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2015-set-1" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2015 SET-1</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">What is the size of the physical address space in a paging system which has a page table containing 64 entries of 11 bit each (including valid and invalid bit) and a page size of 512 bytes?</span>`,
            image: "",
            options: [
                `<span style="display: inline;"><span>\\( 2^{11} \\)</span></span>`,
                `<span style="display: inline;"><span>\\( 2^{15} \\)</span></span>`,
                `<span style="display: inline;"><span>\\( 2^{19} \\)</span></span>`,
                `<span style="display: inline;"><span>\\( 2^{20} \\)</span></span>`
            ],
            answer: "C",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/52224/isro2014-77" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/isro-cse-2014" style="color:#2f6d1a; text-decoration:none" target="_blank">ISRO CSE 2014</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Dirty bit is used to indicate which of the following?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">A page fault has occurred</span>`,
                `<span style="display: inline;">A page has corrupted data</span>`,
                `<span style="display: inline;">A page has been modified after being loaded into cache</span>`,
                `<span style="display: inline;">An illegal access of page</span>`
            ],
            answer: "C",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/55089/isro2014-70" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/isro-cse-2014" style="color:#2f6d1a; text-decoration:none" target="_blank">ISRO CSE 2014</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">A computer has 16 pages of virtual address space but the size of main memory is only four frames. Initially the memory is empty. A program references the virtual pages in the order 0, 2, 4, 5, 2, 4, 3, 11, 2, 10. How many page faults occur if LRU page replacement algorithm is used?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">3</span>`,
                `<span style="display: inline;">5</span>`,
                `<span style="display: inline;">7</span>`,
                `<span style="display: inline;">8</span>`
            ],
            answer: "C",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/54972/isro2014-44" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/isro-cse-2014" style="color:#2f6d1a; text-decoration:none" target="_blank">ISRO CSE 2014</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
    ]
});


registerTest({
    series: "cse-gate-2027",
    name: "TWT-Operating System(Memory Management-IV)",
    date: "sep 08, 2026",
    topicsCovered: "Segmentation, TLB & EAT, Working Set & Multilevel Paging",
    questions: [
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Using the page table shown below, translate the physical address 25 to virtual address. The address length is 16 bits and page size is 2048 words while the size of the physical memory is four frames.<br/><span>\\( \\begin{array}{lcc} \\text { Page } &amp; \\text { Present }(1-In , 0-Out) &amp; \\text { Frame } \\\\ 0 &amp; 1 &amp; 3 \\\\ 1 &amp; 1 &amp; 2 \\\\ 2 &amp; 1 &amp; 0 \\\\ 3 &amp; 0 &amp; - \\end{array} \\)</span></span>`,
            image: "",
            options: [
                `<span style="display: inline;">25</span>`,
                `<span style="display: inline;">6169</span>`,
                `<span style="display: inline;">2073</span>`,
                `<span style="display: inline;">4121</span>`
            ],
            answer: "D",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/46107/isro2014-35" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/isro-cse-2014" style="color:#2f6d1a; text-decoration:none" target="_blank">ISRO CSE 2014</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Consider the following segment table in segmentation scheme :<br/><span>\\( \\begin{array}{|l|l|l|} \\hline \\text { Segment ID } &amp; \\text { Base } &amp; \\text { Limit } \\\\ \\hline 0 &amp; 200 &amp; 200 \\\\ \\hline 1 &amp; 5000 &amp; 1210 \\\\ \\hline 2 &amp; 1527 &amp; 498 \\\\ \\hline 3 &amp; 2500 &amp; 50 \\\\ \\hline \\end{array} \\)</span><br/>What happens if the logical address requested is - Segment Id 2 and offset 1000?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">Fetches the entry at the physical address 2527 for segment Id 2</span>`,
                `<span style="display: inline;">A trap is generated</span>`,
                `<span style="display: inline;">Deadlock</span>`,
                `<span style="display: inline;">Fetches the entry at offset 27 in Segment Id 3</span>`
            ],
            answer: "B",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/16942/isro2014-18" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/isro-cse-2014" style="color:#2f6d1a; text-decoration:none" target="_blank">ISRO CSE 2014</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 2,
            neg: 0,
            type: "NAT",
            text: `<span style="display: inline;">Consider a paging hardware with a TLB. Assume that the entire page table and all the pages are in the physical memory. It takes 10 milliseconds to search the TLB and 80 milliseconds to access the physical memory. If the TLB hit ratio is 0.6, the effective memory access time (in milliseconds) is _________.</span>`,
            image: "",
            options: [
            ],
            answer: "122",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/2067/gate2014-3-33#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2014-set-3" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2014 SET-3</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0,
            type: "NAT",
            text: `<span style="display: inline;">A system uses 3 page frames for storing process pages in main memory. It uses the Least Recently Used (LRU) page replacement policy. Assume that all the page frames are initially empty. What is the total number of page faults that will occur while processing the page reference string given below? 4, 7, 6, 1, 7, 6, 1, 2, 7, 2</span>`,
            image: "",
            options: [
            ],
            answer: "6",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/2054/gate2014-3-20#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2014-set-3" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2014 SET-3</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 2,
            neg: 0.66,
            type: "MCQ",
            text: `<span style="display: inline;">A computer has twenty physical page frames which contain pages numbered 101 through 120. Now a program accesses the pages numbered 1, 2, ..., 100 in that order, and repeats the access sequence THRICE. Which one of the following page replacement policies experiences the same number of page faults as the optimal page replacement policy for this program?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">Least-recently-used</span>`,
                `<span style="display: inline;">First-in-first-out</span>`,
                `<span style="display: inline;">Last-in-first-out</span>`,
                `<span style="display: inline;">Most-recently-used</span>`
            ],
            answer: "D",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/1992/gate2014-2-33#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2014-set-2" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2014 SET-2</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 2,
            neg: 0,
            type: "NAT",
            text: `<span style="display: inline;">Assume that there are 3 page frames which are initially empty. If the page reference string 1, 2, 3, 4, 2, 1, 5, 3, 2, 4, 6, the number of page faults using the optimal replacement policy is ______</span>`,
            image: "",
            options: [
            ],
            answer: "7",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/1805/gate2014-1-33#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2014-set-1" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2014 SET-1</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Consider the list of page references in the time line as below:<br/> 9 6 2 3 4 4 4 4 3 4 4 2 5 8 6 8 5 5 3 2 3 3 9 6 2 7<br/> What is the working set at the penultimate page reference if <span>\\( \\Delta \\)</span> is 5?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">{8, 5, 3, 2, 9, 6}</span>`,
                `<span style="display: inline;">{4, 3, 6, 2, 5}</span>`,
                `<span style="display: inline;">{3, 9, 6, 2, 7}</span>`,
                `<span style="display: inline;">{3, 9, 6, 2}</span>`
            ],
            answer: "D",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/45557/isro-2013-65" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/isro-cse-2013" style="color:#2f6d1a; text-decoration:none" target="_blank">ISRO CSE 2013</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">In a 64- bit machine, with 2 GB RAM, and 8 KB page size, how many entries will be there in the page table if its is inverted?</span>`,
            image: "",
            options: [
                `<span style="display: inline;"><span>\\( 2^{18} \\)</span></span>`,
                `<span style="display: inline;"><span>\\( 2^{20} \\)</span></span>`,
                `<span style="display: inline;"><span>\\( 2^{33} \\)</span></span>`,
                `<span style="display: inline;"><span>\\( 2^{51} \\)</span></span>`
            ],
            answer: "A",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/44402/isro-2013-56" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/isro-cse-2013" style="color:#2f6d1a; text-decoration:none" target="_blank">ISRO CSE 2013</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Consider a logical address space of 8 pages of 1024 words each, mapped onto a physical memory of 32 frames. How many bits are there in the physical address and logical address respectively?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">5,3</span>`,
                `<span style="display: inline;">10,10</span>`,
                `<span style="display: inline;">15,13</span>`,
                `<span style="display: inline;">15,15</span>`
            ],
            answer: "C",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/44401/isro2013-55" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/isro-cse-2013" style="color:#2f6d1a; text-decoration:none" target="_blank">ISRO CSE 2013</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Which of the following are the likely causes of thrashing?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">Page size was very small.</span>`,
                `<span style="display: inline;">There are too many users connected to the system.</span>`,
                `<span style="display: inline;">Least recently used policy is used for page replacement.</span>`,
                `<span style="display: inline;">First in First out policy is used for page replacement.</span>`
            ],
            answer: "A",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/44400/isro-2013-54" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/isro-cse-2013" style="color:#2f6d1a; text-decoration:none" target="_blank">ISRO CSE 2013</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Suppose we have variable logical records of lengths of 5 bytes, 10 bytes and 25 bytes while the physical block size in disk is 15 bytes. What is the maximum and minimum fragmentation seen in bytes?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">25 and 5</span>`,
                `<span style="display: inline;">15 and 5</span>`,
                `<span style="display: inline;">15 and 0</span>`,
                `<span style="display: inline;">10 and 5</span>`
            ],
            answer: "D",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/44398/isro-2013-52" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/isro-cse-2013" style="color:#2f6d1a; text-decoration:none" target="_blank">ISRO CSE 2013</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 2,
            neg: 0.66,
            type: "MCQ",
            text: `<span style="display: inline;">A computer uses 46-bit virtual address, 32-bit physical address, and a three-level paged page table organization. The page table base register stores the base address of the first-level table (T1) ,which occupies exactly one page. Each entry of T1 stores the base address of a page of the second-level table (T2 ) Each entry of T2 stores the base address of a page of the third-level table (T3 ) Each entry of T3 stores a page table entry (PTE). The PTE is 32 bits in size. The processor used in the computer has a 1 MB 16 way set associative virtually indexed physically tagged cache. The cache block size is 64 bytes. <br/><br/>What is the minimum number of page colours needed to guarantee that no two synonyms map to different sets in the processor cache of this computer?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">2</span>`,
                `<span style="display: inline;">4</span>`,
                `<span style="display: inline;">8</span>`,
                `<span style="display: inline;">16</span>`
            ],
            answer: "C",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/43294/gate2013-53#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2013" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2013</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 2,
            neg: 0.66,
            type: "MCQ",
            text: `<span style="display: inline;">A computer uses 46-bit virtual address, 32-bit physical address, and a three-level paged page table organization. The page table base register stores the base address of the first-level table (T1) ,which occupies exactly one page. Each entry of T1 stores the base address of a page of the second-level table (T2 ) Each entry of T2 stores the base address of a page of the third-level table (T3 ) Each entry of T3 stores a page table entry (PTE). The PTE is 32 bits in size. The processor used in the computer has a 1 MB 16 way set associative virtually indexed physically tagged cache. The cache block size is 64 bytes. <br/><br/>What is the size of a page in KB in this computer?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">2</span>`,
                `<span style="display: inline;">4</span>`,
                `<span style="display: inline;">8</span>`,
                `<span style="display: inline;">16</span>`
            ],
            answer: "C",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/379/gate2013-52#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2013" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2013</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 2,
            neg: 0.66,
            type: "MCQ",
            text: `<span style="display: inline;">Consider the virtual page reference string <br/> 1, 2, 3, 2, 4, 1, 3, 2, 4, 1 <br/> on a demand paged virtual memory system running on a computer system that has main memory size of 3 page frames which are initially empty. Let LRU, FIFO and OPTIMAL denote the number of page faults under the corresponding page replacement policy. Then</span>`,
            image: "",
            options: [
                `<span style="display: inline;"><span>\\( OPTIMAL \\lt LRU \\lt FIFO \\)</span></span>`,
                `<span style="display: inline;"><span>\\( OPTIMAL \\lt FIFO \\lt LRU \\)</span></span>`,
                `<span style="display: inline;">OPTIMAL = LRU</span>`,
                `<span style="display: inline;">OPTIMAL = FIFO</span>`
            ],
            answer: "B",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/2150/gate2012-42#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2012" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2012</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Consider a 32-bit machine where four-level paging scheme is used. If the hit ratio to TLB is 98%, and it takes 20 nanosecond to search the TLB and 100 nanoseconds to access the main memory what is effective memory access time in nanoseconds?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">126</span>`,
                `<span style="display: inline;">128</span>`,
                `<span style="display: inline;">122</span>`,
                `<span style="display: inline;">120</span>`
            ],
            answer: "B",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/52592/isro2011-49" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/isro-cse-2011" style="color:#2f6d1a; text-decoration:none" target="_blank">ISRO CSE 2011</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
    ]
});

registerTest({
    series: "cse-gate-2027",
    name: "TWT-Operating System(Memory Management-V)",
    date: "sep 08, 2026",
    topicsCovered: "Page Faults, Page Table Overhead, Belady's Anomaly & Overlays",
    questions: [
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">If the page size in a 32-bit machine is 4K bytes then the size of page table is</span>`,
            image: "",
            options: [
                `<span style="display: inline;">1 M bytes</span>`,
                `<span style="display: inline;">2 M bytes</span>`,
                `<span style="display: inline;">4 M bytes</span>`,
                `<span style="display: inline;">4 K bytes</span>`
            ],
            answer: "C",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/47001/isro2011-24" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/isro-cse-2011" style="color:#2f6d1a; text-decoration:none" target="_blank">ISRO CSE 2011</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Let the page fault service time be 10ms in a computer with average memory access time being 20ns. If one page fault is generated for every <span>\\( 10^{6} \\)</span> memory accesses, what is the effective access time for the memory?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">21ns</span>`,
                `<span style="display: inline;">30ns</span>`,
                `<span style="display: inline;">23ns</span>`,
                `<span style="display: inline;">35ns</span>`
            ],
            answer: "B",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/2122/gate2011-20#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2011" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2011</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">A system uses FIFO policy for page replacement. It has 4 page frames with no pages loaded to begin with. The system first accesses 100 distinct pages in some order and then accesses the same 100 pages but now in the reverse order. How many page faults will occur?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">196</span>`,
                `<span style="display: inline;">192</span>`,
                `<span style="display: inline;">197</span>`,
                `<span style="display: inline;">195</span>`
            ],
            answer: "A",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/2203/gate2010-24#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2010" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2010</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">A page fault</span>`,
            image: "",
            options: [
                `<span style="display: inline;">Occurs when a program accesses an available page on memory</span>`,
                `<span style="display: inline;">is an error in a specific page</span>`,
                `<span style="display: inline;">is a reference to a page belonging to another program</span>`,
                `<span style="display: inline;">occurs when a program accesses a page not currently in memory</span>`
            ],
            answer: "D",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/50331/isro2009-11" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/isro-cse-2009" style="color:#2f6d1a; text-decoration:none" target="_blank">ISRO CSE 2009</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 2,
            neg: 0.66,
            type: "MCQ",
            text: `<span style="display: inline;">A multilevel page table is preferred in comparison to a single level page table for translating virtual address to physical address because</span>`,
            image: "",
            options: [
                `<span style="display: inline;">It reduces the memory access time to read or write a memory location.</span>`,
                `<span style="display: inline;">It helps to reduce the size of page table needed to implement the virtual address space of a process.</span>`,
                `<span style="display: inline;">It is required by the translation lookaside buffer.</span>`,
                `<span style="display: inline;">It helps to reduce the number of page faults in page replacement algorithms.</span>`
            ],
            answer: "B",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/1320/gate2009-34#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2009" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2009</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">The essential content(s) in each entry of a page table is / are</span>`,
            image: "",
            options: [
                `<span style="display: inline;">Virtual page number</span>`,
                `<span style="display: inline;">Page frame number</span>`,
                `<span style="display: inline;">Both virtual page number and page frame number</span>`,
                `<span style="display: inline;">Access right information</span>`
            ],
            answer: "B",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/1302/gate2009-10#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2009" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2009</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
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
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/1301/gate2009-9#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2009" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2009</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">The page replacement algorithm which gives the lowest page fault rate is</span>`,
            image: "",
            options: [
                `<span style="display: inline;">LRU</span>`,
                `<span style="display: inline;">FIFO</span>`,
                `<span style="display: inline;">Optimal page replacement</span>`,
                `<span style="display: inline;">Second chance algorithm</span>`
            ],
            answer: "C",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/50133/isro2008-67" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/isro-cse-2008" style="color:#2f6d1a; text-decoration:none" target="_blank">ISRO CSE 2008</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Consider a logical address space of 8 pages of 1024 words mapped into memory of 32 frames. How many bits are there in the logical address?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">13 bits</span>`,
                `<span style="display: inline;">15 bits</span>`,
                `<span style="display: inline;">14 bits</span>`,
                `<span style="display: inline;">12 bits</span>`
            ],
            answer: "A",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/50005/isro2008-65" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/isro-cse-2008" style="color:#2f6d1a; text-decoration:none" target="_blank">ISRO CSE 2008</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Overlaying</span>`,
            image: "",
            options: [
                `<span style="display: inline;">requires use of a loader</span>`,
                `<span style="display: inline;">allows larger programs, but requires more effort</span>`,
                `<span style="display: inline;">is most used on large computers</span>`,
                `<span style="display: inline;">is transparent to the user</span>`
            ],
            answer: "B",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/47809/isro2008-60" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/isro-cse-2008" style="color:#2f6d1a; text-decoration:none" target="_blank">ISRO CSE 2008</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
    ]
});

registerTest({
    series: "cse-gate-2027",
    name: "TWT-Operating System(Memory Management-VI)",
    date: "sep 08, 2026",
    topicsCovered: "TLB Performance, Demand Paging, Thrashing & Memory Allocation",
    questions: [
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">A paging scheme uses a Translation Look-aside Buffer (TLB). A TLB-access takes 10 ns and the main memory access takes 50 ns. What is the effective access time(in ns) if the TLB hit ratio is 90% and there is no page-fault?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">54</span>`,
                `<span style="display: inline;">60</span>`,
                `<span style="display: inline;">65</span>`,
                `<span style="display: inline;">75</span>`
            ],
            answer: "C",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/3276/gate2008-it-16" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-it-2008" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE IT 2008</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 2,
            neg: 0.66,
            type: "MCQ",
            text: `<span style="display: inline;">A processor uses 36 bit physical addresses and 32 bit virtual addresses, with a page frame size of 4 Kbytes. Each page table entry is of size 4 bytes. A three level page table is used for virtual to physical address translation, where the virtual address is used as follows <br/><br/> Bits 30-31 are used to index into the first level page table <br/> Bits 21-29 are used to index into the second level page table <br/> Bits 12-20 are used to index into the third level page table, and <br/> Bits 0-11 are used as offset within the page <br/><br/> The number of bits required for addressing the next level page table (or page frame) in the page table entry of the first, second and third level page tables are respectively</span>`,
            image: "",
            options: [
                `<span style="display: inline;">20, 20 and 20</span>`,
                `<span style="display: inline;">24, 24 and 24</span>`,
                `<span style="display: inline;">24, 24 and 20</span>`,
                `<span style="display: inline;">25, 25 and 24</span>`
            ],
            answer: "D",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/490/gate2008-67#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2008" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2008</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">The minimum number of page frames that must be allocated to a running process in a virtual memory environment is determined by</span>`,
            image: "",
            options: [
                `<span style="display: inline;">the instruction set architecture</span>`,
                `<span style="display: inline;">page size</span>`,
                `<span style="display: inline;">number of processes in memory</span>`,
                `<span style="display: inline;">physical memory size</span>`
            ],
            answer: "A",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/1018/gate2004-21-isro2007-44" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/isro-cse-2007" style="color:#2f6d1a; text-decoration:none" target="_blank">ISRO CSE 2007</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Virtual memory is</span>`,
            image: "",
            options: [
                `<span style="display: inline;">Part of Main Memory only used for swapping</span>`,
                `<span style="display: inline;">A technique to allow a program, of size more than the size of main memory, to run</span>`,
                `<span style="display: inline;">Part of secondary storage used in program execution</span>`,
                `<span style="display: inline;">None of these</span>`
            ],
            answer: "B",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/49500/isro2007-27" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/isro-cse-2007" style="color:#2f6d1a; text-decoration:none" target="_blank">ISRO CSE 2007</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">A demand paging system takes 100 time units to service a page fault and 300 time units to replace a dirty page. Memory access time is 1 time unit. The probability of a page fault is p. In case of a page fault, the probability of page being dirty is also p. It is observed that the average access time is 3 time units. Then the value of p is</span>`,
            image: "",
            options: [
                `<span style="display: inline;">0.194</span>`,
                `<span style="display: inline;">0.233</span>`,
                `<span style="display: inline;">0.514</span>`,
                `<span style="display: inline;">0.981</span>`
            ],
            answer: "A",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/3500/gate2007-it-58" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-it-2007" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE IT 2007</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">The address sequence generated by tracing a particular program executing in a pure demand paging system with 100 bytes per page is <br/> <span>\\( \\text{0100, 0200, 0430, 0499, 0510, 0530, 0560, 0120, 0220, 0240, 0260, 0320, 0410.} \\)</span><br/> Suppose that the memory can store only one page and if x is the address which causes a page fault then the bytes from addresses x to x + 99 are loaded on to the memory. How many page faults will occur?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">0</span>`,
                `<span style="display: inline;">4</span>`,
                `<span style="display: inline;">7</span>`,
                `<span style="display: inline;">8</span>`
            ],
            answer: "C",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/3445/gate2007-it-12" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-it-2007" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE IT 2007</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Let a memory have four free blocks of sizes 4k, 8k, 20k, 2k. These blocks are allocated following the best-fit strategy. The allocation requests are stored in a queue as shown below.<br/><img src="images/pyq-os/20072_q11.jpg"/><br/>The time at which the request for J7 will be completed will be</span>`,
            image: "",
            options: [
                `<span style="display: inline;">16</span>`,
                `<span style="display: inline;">19</span>`,
                `<span style="display: inline;">20</span>`,
                `<span style="display: inline;">37</span>`
            ],
            answer: "B",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/3444/gate2007-it-11" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-it-2007" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE IT 2007</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">A process has been allocated 3 page frames. Assume that none of the pages of the process are available in the memory initially. The process makes the following sequence of page references (reference string): 1, 2, 1, 3, 7, 4, 5, 6, 3, 1. <br/><br/> Least Recently Used (LRU) page replacement policy is a practical approximation to optimal page replacement. For the above reference string, how many more page faults occur with LRU than with the optimal page replacement policy?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">0</span>`,
                `<span style="display: inline;">1</span>`,
                `<span style="display: inline;">2</span>`,
                `<span style="display: inline;">3</span>`
            ],
            answer: "C",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/43510/gate2007-83#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2007" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2007</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">A process has been allocated 3 page frames. Assume that none of the pages of the process are available in the memory initially. The process makes the following sequence of page references (reference string): 1, 2, 1, 3, 7, 4, 5, 6, 3, 1. <br/><br/> If optimal page replacement policy is used, how many page faults occur for the above reference string?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">7</span>`,
                `<span style="display: inline;">8</span>`,
                `<span style="display: inline;">9</span>`,
                `<span style="display: inline;">10</span>`
            ],
            answer: "A",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/1274/gate2007-82#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2007" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2007</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">A virtual memory system uses First In First Out (FIFO) page replacement policy and allocates a fixed number of frames to a process. Consider the following statements: <br/><br/> P: Increasing the number of page frames allocated to a process sometimes increases the page fault rate.<br/> Q: Some programs do not exhibit locality of reference. <br/><br/> Which one of the following is TRUE?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">Both P and Q are true, and Q is the reason for P</span>`,
                `<span style="display: inline;">Both P and Q are true, but Q is not the reason for P.</span>`,
                `<span style="display: inline;">P is false, but Q is true</span>`,
                `<span style="display: inline;">Both P and Q are false.</span>`
            ],
            answer: "B",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/1254/gate2007-56#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2007" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2007</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">For each of the four processes <span>\\( P_1, P_2, P_3, \\)</span> and <span>\\( P_4 \\)</span>. The total size in kilobytes (KB) and the number of segments are given below.<br/> <span>\\( \\begin{array}{|c|c|c|}\\hline \\textbf{Process} &amp; \\textbf{Total size (in KB)} &amp; \\textbf{Number of segments} \\\\\\hline \\text{$P_1$} &amp; \\text{195}&amp; \\text{4}\\\\\\hline \\text{$P_2$} &amp; \\text{254} &amp; \\text{5}\\\\\\hline \\text{$P_3$} &amp; \\text{45}&amp; \\text{3} \\\\\\hline \\text{$P_4$} &amp; \\text{364}&amp; \\text{8} \\\\\\hline \\end{array} \\)</span><br/> The page size is 1 KB. The size of an entry in the page table is 4 bytes. The size of an entry in the segment table is 8 bytes. The maximum size of a segment is 256 KB. The paging method for memory <a class="google-anno" data-google-interstitial="false" data-google-vignette="false" href="#" style="color-scheme: initial !important; forced-color-adjust: initial !important; math-depth: initial !important; position: initial !important; position-anchor: initial !important; text-size-adjust: initial !important; appearance: initial !important; font-feature-settings: initial !important; font-kerning: initial !important; font-language-override: initial !important; font-optical-sizing: initial !important; font-palette: initial !important; font-size-adjust: initial !important; font-stretch: initial !important; font-synthesis: initial !important; font-variant: initial !important; font-variation-settings: initial !important; position-area: initial !important; text-rendering: initial !important; text-spacing-trim: initial !important; -webkit-font-smoothing: initial !important; -webkit-locale: initial !important; -webkit-text-orientation: initial !important; -webkit-writing-mode: initial !important; zoom: initial !important; accent-color: initial !important; place-content: initial !important; place-items: initial !important; place-self: initial !important; alignment-baseline: initial !important; anchor-name: initial !important; anchor-scope: initial !important; animation-composition: initial !important; animation: initial !important; animation-trigger: initial !important; app-region: initial !important; aspect-ratio: initial !important; backdrop-filter: initial !important; backface-visibility: initial !important; background: initial !important; background-blend-mode: initial !important; baseline-shift: initial !important; baseline-source: initial !important; block-size: initial !important; border-block: initial !important; border: initial !important; border-radius: initial !important; border-collapse: initial !important; border-end-end-radius: initial !important; border-end-start-radius: initial !important; border-inline: initial !important; border-shape: initial !important; border-start-end-radius: initial !important; border-start-start-radius: initial !important; inset: initial !important; box-decoration-break: initial !important; box-shadow: initial !important; box-sizing: initial !important; break-after: initial !important; break-before: initial !important; break-inside: initial !important; buffered-rendering: initial !important; caption-side: initial !important; caret-animation: initial !important; caret-color: initial !important; caret-shape: initial !important; clear: initial !important; clip: initial !important; clip-path: initial !important; clip-rule: initial !important; color-interpolation: initial !important; color-interpolation-filters: initial !important; color-rendering: initial !important; columns: initial !important; column-fill: initial !important; gap: initial !important; rule-break: initial !important; rule: initial !important; rule-inset: initial !important; rule-visibility-items: initial !important; column-span: initial !important; contain: initial !important; contain-intrinsic-block-size: initial !important; contain-intrinsic-size: initial !important; contain-intrinsic-inline-size: initial !important; container: initial !important; content: initial !important; content-visibility: initial !important; corner-shape: initial !important; corner-block-end-shape: initial !important; corner-block-start-shape: initial !important; counter-increment: initial !important; counter-reset: initial !important; counter-set: initial !important; cx: initial !important; cy: initial !important; d: initial !important; display: initial !important; dominant-baseline: initial !important; dynamic-range-limit: initial !important; empty-cells: initial !important; field-sizing: initial !important; fill-opacity: initial !important; fill-rule: initial !important; filter: initial !important; flex: initial !important; flex-flow: initial !important; flex-line-count: initial !important; float: initial !important; flood-color: initial !important; flood-opacity: initial !important; frame-sizing: initial !important; grid: initial !important; grid-area: initial !important; height: initial !important; hyphenate-character: initial !important; hyphenate-limit-chars: initial !important; hyphens: initial !important; image-orientation: initial !important; image-rendering: initial !important; initial-letter: initial !important; inline-size: initial !important; inset-block: initial !important; inset-inline: initial !important; interactivity: initial !important; interest-delay: initial !important; interpolate-size: initial !important; isolation: initial !important; letter-spacing: initial !important; lighting-color: initial !important; line-break: initial !important; list-style: initial !important; margin-block: initial !important; margin: initial !important; margin-inline: initial !important; marker: initial !important; mask: initial !important; mask-type: initial !important; math-shift: initial !important; math-style: initial !important; max-block-size: initial !important; max-height: initial !important; max-inline-size: initial !important; max-width: initial !important; min-block-size: initial !important; min-height: initial !important; min-inline-size: initial !important; min-width: initial !important; mix-blend-mode: initial !important; object-fit: initial !important; object-position: initial !important; object-view-box: initial !important; offset: initial !important; opacity: initial !important; order: initial !important; orphans: initial !important; outline: initial !important; outline-offset: initial !important; overflow-anchor: initial !important; overflow-block: initial !important; overflow-clip-margin: initial !important; overflow-inline: initial !important; overflow-wrap: initial !important; overflow: initial !important; overlay: initial !important; overscroll-behavior-block: initial !important; overscroll-behavior-inline: initial !important; overscroll-behavior: initial !important; padding-block: initial !important; padding: initial !important; padding-inline: initial !important; page: initial !important; page-margin-safety: initial !important; page-orientation: initial !important; paint-order: initial !important; perspective: initial !important; perspective-origin: initial !important; pointer-events: initial !important; position-try: initial !important; position-visibility: initial !important; print-color-adjust: initial !important; quotes: initial !important; r: initial !important; reading-flow: initial !important; reading-order: initial !important; resize: initial !important; rotate: initial !important; ruby-align: initial !important; ruby-overhang: initial !important; ruby-position: initial !important; rule-overlap: initial !important; rx: initial !important; ry: initial !important; scale: initial !important; scroll-axis-lock: initial !important; scroll-behavior: initial !important; scroll-initial-target: initial !important; scroll-margin-block: initial !important; scroll-margin: initial !important; scroll-margin-inline: initial !important; scroll-marker-group: initial !important; scroll-padding-block: initial !important; scroll-padding: initial !important; scroll-padding-inline: initial !important; scroll-snap-align: initial !important; scroll-snap-stop: initial !important; scroll-snap-type: initial !important; scroll-target-group: initial !important; scroll-timeline: initial !important; scrollbar-color: initial !important; scrollbar-gutter: initial !important; scrollbar-width: initial !important; shape-image-threshold: initial !important; shape-margin: initial !important; shape-outside: initial !important; shape-rendering: initial !important; size: initial !important; speak: initial !important; stop-color: initial !important; stop-opacity: initial !important; stroke: initial !important; stroke-dasharray: initial !important; stroke-dashoffset: initial !important; stroke-linecap: initial !important; stroke-linejoin: initial !important; stroke-miterlimit: initial !important; stroke-opacity: initial !important; stroke-width: initial !important; tab-size: initial !important; table-layout: initial !important; text-align-last: initial !important; text-anchor: initial !important; text-autospace: initial !important; text-box: initial !important; text-combine-upright: initial !important; text-decoration-skip-ink: initial !important; text-emphasis: initial !important; text-emphasis-position: initial !important; text-fit: initial !important; text-indent: initial !important; text-justify: initial !important; text-overflow: initial !important; text-shadow: initial !important; text-transform: initial !important; text-underline-offset: initial !important; text-underline-position: initial !important; text-wrap: initial !important; timeline-scope: initial !important; timeline-trigger: initial !important; touch-action: initial !important; transform: initial !important; transform-box: initial !important; transform-origin: initial !important; transform-style: initial !important; transition: initial !important; translate: initial !important; trigger-scope: initial !important; user-select: initial !important; vector-effect: initial !important; vertical-align: initial !important; view-timeline: initial !important; view-transition-class: initial !important; view-transition-group: initial !important; view-transition-name: initial !important; view-transition-scope: initial !important; border-spacing: initial !important; -webkit-box-align: initial !important; -webkit-box-decoration-break: initial !important; -webkit-box-direction: initial !important; -webkit-box-flex: initial !important; -webkit-box-ordinal-group: initial !important; -webkit-box-orient: initial !important; -webkit-box-pack: initial !important; -webkit-box-reflect: initial !important; -webkit-line-break: initial !important; -webkit-line-clamp: initial !important; -webkit-mask-box-image: initial !important; -webkit-rtl-ordering: initial !important; -webkit-ruby-position: initial !important; -webkit-tap-highlight-color: initial !important; -webkit-text-combine: initial !important; -webkit-text-decorations-in-effect: initial !important; -webkit-text-security: initial !important; -webkit-text-stroke: initial !important; -webkit-user-drag: initial !important; white-space-collapse: initial !important; widows: initial !important; width: initial !important; will-change: initial !important; window-drag: initial !important; word-break: initial !important; word-spacing: initial !important; x: initial !important; y: initial !important; z-index: initial !important; -webkit-text-fill-color: unset !important; color: revert-layer !important; cursor: pointer !important; direction: inherit !important; font-family: inherit !important; font-size: inherit !important; font-weight: inherit !important; text-align: inherit !important; text-orientation: inherit !important; visibility: inherit !important; writing-mode: inherit !important; fill: currentcolor !important; font-style: inherit !important; line-height: inherit !important; text-decoration: none !important;"><svg height="15px" style="animation: initial !important; background: initial !important; border: 0px !important; box-shadow: none !important; color: inherit !important; cursor: inherit !important; direction: inherit !important; display: inline !important; fill: currentcolor !important; filter: initial !important; float: none !important; margin: 0px !important; opacity: initial !important; outline: 0px !important; overflow: initial !important; padding: 0px !important; stroke: initial !important; transform: initial !important; vertical-align: initial !important; visibility: inherit !important;" viewbox="100 -1000 840 840" width="calc(15px - 2px)"> <path d="M168-144q-29.7 0-50.85-21.15Q96-186.3 96-216v-528q0-29.7 21.15-50.85Q138.3-816 168-816h624q29.7 0 50.85 21.15Q864-773.7 864-744v528q0 29.7-21.15 50.85Q821.7-144 792-144H168Zm0-72h624v-528H168v528Zm72-96h480v-72H240v72Zm0-144h168v-216H240v216Zm240 0h240v-72H480v72Zm0-144h240v-72H480v72ZM168-216v-528 528Z" style="animation: initial !important; background: initial !important; border: 0px !important; box-shadow: none !important; color: inherit !important; cursor: inherit !important; direction: inherit !important; display: inline !important; fill: currentcolor !important; filter: initial !important; float: none !important; margin: 0px !important; opacity: initial !important; outline: 0px !important; overflow: initial !important; padding: 0px !important; stroke: initial !important; transform: initial !important; vertical-align: initial !important; visibility: inherit !important;"> </path> </svg> <span class="google-anno-t" style="color-scheme: initial !important; forced-color-adjust: initial !important; math-depth: initial !important; position: initial !important; position-anchor: initial !important; text-size-adjust: initial !important; appearance: initial !important; font-feature-settings: initial !important; font-kerning: initial !important; font-language-override: initial !important; font-optical-sizing: initial !important; font-palette: initial !important; font-size-adjust: initial !important; font-stretch: initial !important; font-synthesis: initial !important; font-variant: initial !important; font-variation-settings: initial !important; position-area: initial !important; text-rendering: initial !important; text-spacing-trim: initial !important; -webkit-font-smoothing: initial !important; -webkit-locale: initial !important; -webkit-text-orientation: initial !important; -webkit-writing-mode: initial !important; zoom: initial !important; accent-color: initial !important; place-content: initial !important; place-items: initial !important; place-self: initial !important; alignment-baseline: initial !important; anchor-name: initial !important; anchor-scope: initial !important; animation-composition: initial !important; animation: initial !important; animation-trigger: initial !important; app-region: initial !important; aspect-ratio: initial !important; backdrop-filter: initial !important; backface-visibility: initial !important; background: initial !important; background-blend-mode: initial !important; baseline-shift: initial !important; baseline-source: initial !important; block-size: initial !important; border-block: initial !important; border: initial !important; border-radius: initial !important; border-collapse: initial !important; border-end-end-radius: initial !important; border-end-start-radius: initial !important; border-inline: initial !important; border-shape: initial !important; border-start-end-radius: initial !important; border-start-start-radius: initial !important; inset: initial !important; box-decoration-break: initial !important; box-shadow: initial !important; box-sizing: initial !important; break-after: initial !important; break-before: initial !important; break-inside: initial !important; buffered-rendering: initial !important; caption-side: initial !important; caret-animation: initial !important; caret-color: initial !important; caret-shape: initial !important; clear: initial !important; clip: initial !important; clip-path: initial !important; clip-rule: initial !important; color-interpolation: initial !important; color-interpolation-filters: initial !important; color-rendering: initial !important; columns: initial !important; column-fill: initial !important; gap: initial !important; rule-break: initial !important; rule: initial !important; rule-inset: initial !important; rule-visibility-items: initial !important; column-span: initial !important; contain: initial !important; contain-intrinsic-block-size: initial !important; contain-intrinsic-size: initial !important; contain-intrinsic-inline-size: initial !important; container: initial !important; content: initial !important; content-visibility: initial !important; corner-shape: initial !important; corner-block-end-shape: initial !important; corner-block-start-shape: initial !important; counter-increment: initial !important; counter-reset: initial !important; counter-set: initial !important; cx: initial !important; cy: initial !important; d: initial !important; display: initial !important; dominant-baseline: initial !important; dynamic-range-limit: initial !important; empty-cells: initial !important; field-sizing: initial !important; fill: initial !important; fill-opacity: initial !important; fill-rule: initial !important; filter: initial !important; flex: initial !important; flex-flow: initial !important; flex-line-count: initial !important; float: initial !important; flood-color: initial !important; flood-opacity: initial !important; frame-sizing: initial !important; grid: initial !important; grid-area: initial !important; height: initial !important; hyphenate-character: initial !important; hyphenate-limit-chars: initial !important; hyphens: initial !important; image-orientation: initial !important; image-rendering: initial !important; initial-letter: initial !important; inline-size: initial !important; inset-block: initial !important; inset-inline: initial !important; interactivity: initial !important; interest-delay: initial !important; interpolate-size: initial !important; isolation: initial !important; letter-spacing: initial !important; lighting-color: initial !important; line-break: initial !important; line-height: initial !important; list-style: initial !important; margin-block: initial !important; margin: initial !important; margin-inline: initial !important; marker: initial !important; mask: initial !important; mask-type: initial !important; math-shift: initial !important; math-style: initial !important; max-block-size: initial !important; max-height: initial !important; max-inline-size: initial !important; max-width: initial !important; min-block-size: initial !important; min-height: initial !important; min-inline-size: initial !important; min-width: initial !important; mix-blend-mode: initial !important; object-fit: initial !important; object-position: initial !important; object-view-box: initial !important; offset: initial !important; opacity: initial !important; order: initial !important; orphans: initial !important; outline: initial !important; outline-offset: initial !important; overflow-anchor: initial !important; overflow-block: initial !important; overflow-clip-margin: initial !important; overflow-inline: initial !important; overflow-wrap: initial !important; overflow: initial !important; overlay: initial !important; overscroll-behavior-block: initial !important; overscroll-behavior-inline: initial !important; overscroll-behavior: initial !important; padding-block: initial !important; padding: initial !important; padding-inline: initial !important; page: initial !important; page-margin-safety: initial !important; page-orientation: initial !important; paint-order: initial !important; perspective: initial !important; perspective-origin: initial !important; pointer-events: initial !important; position-try: initial !important; position-visibility: initial !important; print-color-adjust: initial !important; quotes: initial !important; r: initial !important; reading-flow: initial !important; reading-order: initial !important; resize: initial !important; rotate: initial !important; ruby-align: initial !important; ruby-overhang: initial !important; ruby-position: initial !important; rule-overlap: initial !important; rx: initial !important; ry: initial !important; scale: initial !important; scroll-axis-lock: initial !important; scroll-behavior: initial !important; scroll-initial-target: initial !important; scroll-margin-block: initial !important; scroll-margin: initial !important; scroll-margin-inline: initial !important; scroll-marker-group: initial !important; scroll-padding-block: initial !important; scroll-padding: initial !important; scroll-padding-inline: initial !important; scroll-snap-align: initial !important; scroll-snap-stop: initial !important; scroll-snap-type: initial !important; scroll-target-group: initial !important; scroll-timeline: initial !important; scrollbar-color: initial !important; scrollbar-gutter: initial !important; scrollbar-width: initial !important; shape-image-threshold: initial !important; shape-margin: initial !important; shape-outside: initial !important; shape-rendering: initial !important; size: initial !important; speak: initial !important; stop-color: initial !important; stop-opacity: initial !important; stroke: initial !important; stroke-dasharray: initial !important; stroke-dashoffset: initial !important; stroke-linecap: initial !important; stroke-linejoin: initial !important; stroke-miterlimit: initial !important; stroke-opacity: initial !important; stroke-width: initial !important; tab-size: initial !important; table-layout: initial !important; text-align-last: initial !important; text-anchor: initial !important; text-autospace: initial !important; text-box: initial !important; text-combine-upright: initial !important; text-decoration-skip-ink: initial !important; text-emphasis: initial !important; text-emphasis-position: initial !important; text-fit: initial !important; text-indent: initial !important; text-justify: initial !important; text-overflow: initial !important; text-shadow: initial !important; text-transform: initial !important; text-underline-offset: initial !important; text-underline-position: initial !important; text-wrap: initial !important; timeline-scope: initial !important; timeline-trigger: initial !important; touch-action: initial !important; transform: initial !important; transform-box: initial !important; transform-origin: initial !important; transform-style: initial !important; transition: initial !important; translate: initial !important; trigger-scope: initial !important; user-select: initial !important; vector-effect: initial !important; vertical-align: initial !important; view-timeline: initial !important; view-transition-class: initial !important; view-transition-group: initial !important; view-transition-name: initial !important; view-transition-scope: initial !important; border-spacing: initial !important; -webkit-box-align: initial !important; -webkit-box-decoration-break: initial !important; -webkit-box-direction: initial !important; -webkit-box-flex: initial !important; -webkit-box-ordinal-group: initial !important; -webkit-box-orient: initial !important; -webkit-box-pack: initial !important; -webkit-box-reflect: initial !important; -webkit-line-break: initial !important; -webkit-line-clamp: initial !important; -webkit-mask-box-image: initial !important; -webkit-rtl-ordering: initial !important; -webkit-ruby-position: initial !important; -webkit-tap-highlight-color: initial !important; -webkit-text-combine: initial !important; -webkit-text-decorations-in-effect: initial !important; -webkit-text-security: initial !important; -webkit-text-stroke: initial !important; -webkit-user-drag: initial !important; white-space-collapse: initial !important; widows: initial !important; width: initial !important; will-change: initial !important; window-drag: initial !important; word-break: initial !important; word-spacing: initial !important; x: initial !important; y: initial !important; z-index: initial !important; -webkit-text-fill-color: unset !important; color: inherit !important; cursor: inherit !important; direction: inherit !important; font-family: inherit !important; font-size: inherit !important; font-weight: inherit !important; text-align: inherit !important; text-orientation: inherit !important; visibility: inherit !important; writing-mode: inherit !important; text-decoration: underline dotted !important; font-style: inherit !important;">management</span></a> uses two-level paging, and its storage overhead is P. The storage overhead for the segmentation method is S. The storage overhead for the segmentation and paging method is T. What is the relation among the overheads for the different methods of memory management in the concurrent execution of the above four processes?</span>`,
            image: "",
            options: [
                `<span style="display: inline;"><span>\\( P \\lt S \\lt T \\)</span></span>`,
                `<span style="display: inline;"><span>\\( S \\lt P \\lt T \\)</span></span>`,
                `<span style="display: inline;"><span>\\( S \\lt T \\lt P \\)</span></span>`,
                `<span style="display: inline;"><span>\\( T \\lt S \\lt P \\)</span></span>`
            ],
            answer: "B",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/3600/gate2006-it-56" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-it-2006" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE IT 2006</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">In the working-set strategy, which of the following is done by the operating system to prevent thrashing?<br/><br/> I. It initiates another process if there are enough extra frames.<br/> II. It selects a process to suspend if the sum of the sizes of the working-sets exceeds the total number of available frames.</span>`,
            image: "",
            options: [
                `<span style="display: inline;">I only</span>`,
                `<span style="display: inline;">II only</span>`,
                `<span style="display: inline;">Neither I nor II</span>`,
                `<span style="display: inline;">Both I and II</span>`
            ],
            answer: "D",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/3551/gate2006-it-12" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-it-2006" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE IT 2006</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">A computer system supports 32-bit virtual addresses as well as 32-bit physical addresses, Since the virtual address space is of the same size as the physical address space, the operating system designers decide to get rid of the virtual entirely. Which one of the following is true?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">Efficient implementation of multi-user support is no longer possible</span>`,
                `<span style="display: inline;">The processor cache organization can be made more efficient now</span>`,
                `<span style="display: inline;">Hardware support for memory management is no longer needed</span>`,
                `<span style="display: inline;">CPU scheduling can be made more efficient now</span>`
            ],
            answer: "A",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/1841/gate2006-63#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2006" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2006</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Increasing the RAM of a computer typically improves performance because:</span>`,
            image: "",
            options: [
                `<span style="display: inline;">Virtual memory increases</span>`,
                `<span style="display: inline;">Larger RAMs are faster</span>`,
                `<span style="display: inline;">Fewer page faults occur</span>`,
                `<span style="display: inline;">Fewer segmentation faults occur</span>`
            ],
            answer: "C",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/1358/gate2005-22#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2005" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2005</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">In a virtual memory system, size of the virtual address is 32-bit, size of the physical address is 30-bit, page size is 4 Kbyte and size of each page table entry is 32-bit. The main memory is byte addressable. Which one of the following is the maximum number of bits that can be used for storing protection and other information in each page table entry?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">2</span>`,
                `<span style="display: inline;">10</span>`,
                `<span style="display: inline;">12</span>`,
                `<span style="display: inline;">14</span>`
            ],
            answer: "D",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/3709/gate2004-it-66" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-it-2004" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE IT 2004</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
    ]
});


registerTest({
    series: "cse-gate-2027",
    name: "TWT-Operating System(Memory Management-VII)",
    date: "sep 08, 2026",
    topicsCovered: "Effective Access Time, Multilevel Paging & Virtual Memory Basics",
    questions: [
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Consider a system with a two-level paging scheme in which a regular memory access takes 150 nanoseconds, and servicing a page fault takes 8 milliseconds. An average instruction takes 100 nanoseconds of CPU time, and two memory accesses. The TLB hit ratio is 90%, and the page fault rate is one in every 10,000 instructions. What is the effective average instruction execution time?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">645 nanoseconds</span>`,
                `<span style="display: inline;">1050 nanoseconds</span>`,
                `<span style="display: inline;">1215 nanoseconds</span>`,
                `<span style="display: inline;">1230 nanoseconds</span>`
            ],
            answer: "D",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/318/gate2004-47#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2004" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2004</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">The minimum number of page frames that must be allocated to a running process in a virtual memory environment is determined by</span>`,
            image: "",
            options: [
                `<span style="display: inline;">the instruction set architecture</span>`,
                `<span style="display: inline;">page size</span>`,
                `<span style="display: inline;">physical memory size</span>`,
                `<span style="display: inline;">number of processes in memory</span>`
            ],
            answer: "A",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/1018/gate2004-21#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2004" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2004</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">A processor uses 2-level page tables for virtual to physical address translation. Page tables for both levels are stored in the main memory. Virtual and physical addresses are both 32 bits wide. The memory is byte addressable. For virtual to physical address translation, the 10 most significant bits of the virtual address are used as index into the first level page table while the next 10 bits are used as index into the second level page table. The 12 least significant bits of the virtual address are used as offset within the page. Assume that the page table entries in both levels of page tables are 4 bytes wide. Further, the processor has a translation look-aside buffer (TLB), with a hit rate of 96%. The TLB caches recently used virtual page numbers and the corresponding physical page numbers. The processor also has a physically addressed cache with a hit rate of 90%. Main memory access time is 10 ns, cache access time is 1 ns, and TLB access time is also 1 ns. <br/><br/>Suppose a process has only the following pages in its virtual address space: two contiguous code pages starting at virtual address 0x00000000, two contiguous data pages starting at virtual address 0x00400000, and a stack page starting at virtual address 0xFFFFF000. The amount of memory required for storing the page tables of this process is:</span>`,
            image: "",
            options: [
                `<span style="display: inline;">8 KB</span>`,
                `<span style="display: inline;">12 KB</span>`,
                `<span style="display: inline;">16 KB</span>`,
                `<span style="display: inline;">20 KB</span>`
            ],
            answer: "C",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/43578/gate2003-79#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2003" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2003</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">A processor uses 2-level page tables for virtual to physical address translation. Page tables for both levels are stored in the main memory. Virtual and physical addresses are both 32 bits wide. The memory is byte addressable. For virtual to physical address translation, the 10 most significant bits of the virtual address are used as index into the first level page table while the next 10 bits are used as index into the second level page table. The 12 least significant bits of the virtual address are used as offset within the page. Assume that the page table entries in both levels of page tables are 4 bytes wide. Further, the processor has a translation look-aside buffer (TLB), with a hit rate of 96%. The TLB caches recently used virtual page numbers and the corresponding physical page numbers. The processor also has a physically addressed cache with a hit rate of 90%. Main memory access time is 10 ns, cache access time is 1 ns, and TLB access time is also 1 ns. <br/><br/>Assuming that no page faults occur, the average time taken to access a virtual address is approximately (to the nearest 0.5 ns)</span>`,
            image: "",
            options: [
                `<span style="display: inline;">1.5 ns</span>`,
                `<span style="display: inline;">2 ns</span>`,
                `<span style="display: inline;">3 ns</span>`,
                `<span style="display: inline;">4 ns</span>`
            ],
            answer: "D",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/788/gate2003-78#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2003" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2003</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">In a system with 32 bit virtual addresses and 1 KB page size, use of one-level page tables for virtual to physical address translation is not practical because of</span>`,
            image: "",
            options: [
                `<span style="display: inline;">the large amount of internal fragmentation</span>`,
                `<span style="display: inline;">the large amount of external fragmentation</span>`,
                `<span style="display: inline;">the large memory overhead in maintaining page tables</span>`,
                `<span style="display: inline;">the large computation overhead in the translation process</span>`
            ],
            answer: "C",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/916/gate2003-26#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2003" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2003</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">The optimal page replacement algorithm will select the page that</span>`,
            image: "",
            options: [
                `<span style="display: inline;">Has not been used for the longest time in the past.</span>`,
                `<span style="display: inline;">Will not be used for the longest time in the future.</span>`,
                `<span style="display: inline;">Has been used least number of times.</span>`,
                `<span style="display: inline;">Has been used most number of times</span>`
            ],
            answer: "B",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/828/gate2002-1-23#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2002" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2002</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Suppose the time to service a page fault is on the average 10 milliseconds, while a memory access takes 1 microsecond. Then a 99.99% hit ratio results in average memory access time of</span>`,
            image: "",
            options: [
                `<span style="display: inline;">1.9999 milliseconds</span>`,
                `<span style="display: inline;">1 millisecond</span>`,
                `<span style="display: inline;">9.999 microseconds</span>`,
                `<span style="display: inline;">1.9999 microseconds</span>`
            ],
            answer: "D",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/669/gate2000-2-22" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2000" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2000</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Which of the following is/are advantage(s) of virtual memory?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">Faster access to memory on an average.</span>`,
                `<span style="display: inline;">Processes can be given protected address spaces.</span>`,
                `<span style="display: inline;">Linker can assign addresses independent of where the program will be loaded in physical memory.</span>`,
                `<span style="display: inline;">Program larger than the physical memory size can be run.</span>`
            ],
            answer: "B",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/1489/gate1999-2-11" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-1999" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 1999</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">A multi-user, multi-processing operating system cannot be implemented on hardware that does not support</span>`,
            image: "",
            options: [
                `<span style="display: inline;">Address translation</span>`,
                `<span style="display: inline;">DMA for disk transfer</span>`,
                `<span style="display: inline;">At least two modes of CPU execution (privileged and non-privileged)</span>`,
                `<span style="display: inline;">Demand paging</span>`
            ],
            answer: "A",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/1488/gate1999-2-10" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-1999" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 1999</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Listed below are some operating system abstractions (in the left column) and the hardware components (in the right column)<br/><span>\\( \\small \\begin{array}{cl|cl}\\hline \\text{(A)}&amp; \\text{Thread} &amp; \\text{1.}&amp; \\text{Interrupt} \\\\\\hline \\text{(B)}&amp; \\text{Virtual address space} &amp; \\text{2.}&amp; \\text{Memory} \\\\\\hline \\text{(C)} &amp;\\text{File system} &amp; \\text{3.} &amp;\\text{CPU} \\\\\\hline \\text{(D)} &amp;\\text{Signal} &amp; \\text{4.}&amp; \\text{Disk} \\\\\\hline \\end{array} \\)</span></span>`,
            image: "",
            options: [
                `<span style="display: inline;">(A) - 2 (B) - 4 (C) - 3 (D) - 1</span>`,
                `<span style="display: inline;">(A) - 1 (B) - 2 (C) - 3 (D) - 4</span>`,
                `<span style="display: inline;">(A) - 3 (B) - 2 (C) - 4 (D) - 1</span>`,
                `<span style="display: inline;">(A) - 4 (B) - 1 (C) - 2 (D) - 3</span>`
            ],
            answer: "C",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/1462/gate1999-1-9" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-1999" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 1999</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">If an instruction takes <span>\\( i \\)</span> microseconds and a page fault takes an additional <span>\\( j \\)</span> microseconds, the effective instruction time if on the average a page fault occurs every <span>\\( k \\)</span> instruction is:</span>`,
            image: "",
            options: [
                `<span style="display: inline;"><span>\\( i + \\dfrac{j}{k} \\)</span></span>`,
                `<span style="display: inline;"><span>\\( i +(j\\times k) \\)</span></span>`,
                `<span style="display: inline;"><span>\\( \\dfrac{i+j}{k} \\)</span></span>`,
                `<span style="display: inline;"><span>\\( ({i+j})\\times {k} \\)</span></span>`
            ],
            answer: "A",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/1691/gate1998-2-18-ugcnet-june2012-iii-48" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-1998" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 1998</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Dirty bit for a page in a page table</span>`,
            image: "",
            options: [
                `<span style="display: inline;">helps avoid unnecessary writes on a paging device</span>`,
                `<span style="display: inline;">helps maintain LRU information</span>`,
                `<span style="display: inline;">allows only read on a page</span>`,
                `<span style="display: inline;">None of the above</span>`
            ],
            answer: "A",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/2241/gate1997-3-10-isro2008-57-isro2015-64" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-1997" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 1997</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Thrashing</span>`,
            image: "",
            options: [
                `<span style="display: inline;">reduces page I/O</span>`,
                `<span style="display: inline;">decreases the degree of multiprogramming</span>`,
                `<span style="display: inline;">implies excessive page I/O</span>`,
                `<span style="display: inline;">improve the system performance</span>`
            ],
            answer: "C",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/2240/gate1997-3-9" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-1997" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 1997</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Locality of reference implies that the page reference being made by a process</span>`,
            image: "",
            options: [
                `<span style="display: inline;">will always be to the page used in the previous page reference</span>`,
                `<span style="display: inline;">is likely to be to one of the pages used in the last few page references</span>`,
                `<span style="display: inline;">will always be to one of the pages existing in memory</span>`,
                `<span style="display: inline;">will always lead to a page fault</span>`
            ],
            answer: "B",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/2236/gate1997-3-5" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-1997" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 1997</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">A 1000 Kbyte memory is managed using variable partitions but no compaction. It currently has two partitions of sizes 200 Kbyte and 260 Kbyte respectively. The smallest allocation request in Kbyte that could be denied is for</span>`,
            image: "",
            options: [
                `<span style="display: inline;">151</span>`,
                `<span style="display: inline;">181</span>`,
                `<span style="display: inline;">231</span>`,
                `<span style="display: inline;">541</span>`
            ],
            answer: "B",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/2747/gate1996-2-18" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-1996" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 1996</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
    ]
});


registerTest({
    series: "cse-gate-2027",
    name: "TWT-Operating System(Memory Management-VIII)",
    date: "sep 08, 2026",
    topicsCovered: "Demand Paging, Belady's Anomaly, Heap Allocation & IPT",
    questions: [
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">In a virtual memory system the address space specified by the address lines of the CPU must be _____ than the physical memory size and ____ than the secondary storage size.</span>`,
            image: "",
            options: [
                `<span style="display: inline;">smaller, smaller</span>`,
                `<span style="display: inline;">smaller, larger</span>`,
                `<span style="display: inline;">larger, smaller</span>`,
                `<span style="display: inline;">larger, larger</span>`
            ],
            answer: "C",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/2628/gate1995-2-16" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-1995" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 1995</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">The address sequence generated by tracing a particular program executing in a pure demand based paging system with 100 records per page with 1 free main memory frame is recorded as follows. What is the number of page faults?<br/> 0100, 0200, 0430, 0499, 0510, 0530, 0560, 0120, 0220, 0240, 0260, 0320, 0370</span>`,
            image: "",
            options: [
                `<span style="display: inline;">13</span>`,
                `<span style="display: inline;">8</span>`,
                `<span style="display: inline;">7</span>`,
                `<span style="display: inline;">10</span>`
            ],
            answer: "C",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/2619/gate1995-2-7" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-1995" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 1995</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Which of the following page replacement algorithms suffers from Belady's anamoly?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">Optimal replacement</span>`,
                `<span style="display: inline;">LRU</span>`,
                `<span style="display: inline;">FIFO</span>`,
                `<span style="display: inline;">Both (A) and (C)</span>`
            ],
            answer: "C",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/2595/gate1995-1-8" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-1995" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 1995</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">In a paged segmented scheme of memory management, the segment table itself must have a page table because</span>`,
            image: "",
            options: [
                `<span style="display: inline;">The segment table is often too large to fit in one page</span>`,
                `<span style="display: inline;">Each segment is spread over a number of pages</span>`,
                `<span style="display: inline;">Segment tables point to page tables and not to the physical locations of the segment</span>`,
                `<span style="display: inline;">The processor's description base register points to a page table</span>`
            ],
            answer: "A",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/2594/gate1995-1-7" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-1995" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 1995</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Consider the following heap (figure) in which blank regions are not in use and hatched region are in use.<br/><img src="images/pyq-os/19941_q1.24.jpg"/><br/>The sequence of requests for blocks of sizes 300, 25, 125, 50 can be satisfied if we use</span>`,
            image: "",
            options: [
                `<span style="display: inline;">either first fit or best fit policy (any one)</span>`,
                `<span style="display: inline;">first fit but not best fit policy</span>`,
                `<span style="display: inline;">best fit but not first fit policy</span>`,
                `<span style="display: inline;">None of the above</span>`
            ],
            answer: "B",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/2467/gate1994-1-24" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-1994" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 1994</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Which one of the following statements is true?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">Macro definitions cannot appear within other macro definitions in assembly language programs</span>`,
                `<span style="display: inline;">Overlaying is used to run a program which is longer than the address space of a computer</span>`,
                `<span style="display: inline;">Virtual memory can be used to accommodate a program which is longer than the address space of a computer</span>`,
                `<span style="display: inline;">It is not possible to write interrupt service routines in a high level language</span>`
            ],
            answer: "A",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/2464/gate1994-1-21" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-1994" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 1994</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">A memory page containing a heavily used variable that was initialized very early and is in constant use is removed then</span>`,
            image: "",
            options: [
                `<span style="display: inline;">LRU page replacement algorithm is used</span>`,
                `<span style="display: inline;">FIFO page replacement algorithm is used</span>`,
                `<span style="display: inline;">LFU page replacement algorithm is used</span>`,
                `<span style="display: inline;">None of the above</span>`
            ],
            answer: "B",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/2454/gate1994-1-13" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-1994" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 1994</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Consider a machine with 64 MB physical memory and a 32-bit virtual address space. If the page size is 4 KB, what is the approximate size of the page table ?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">16MB</span>`,
                `<span style="display: inline;">8MB</span>`,
                `<span style="display: inline;">2MB</span>`,
                `<span style="display: inline;">24MB</span>`
            ],
            answer: "C",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/739/gate2001-2-21#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2001" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2001</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Consider a virtual memory system with FIFO page replacement policy. For an arbitrary page access pattern, increasing the number of page frames in main memory will.</span>`,
            image: "",
            options: [
                `<span style="display: inline;">Always decrease the number of page faults</span>`,
                `<span style="display: inline;">Always increase the number of page faults</span>`,
                `<span style="display: inline;">Sometimes increase the number of page faults</span>`,
                `<span style="display: inline;">Never affect the number of page faults</span>`
            ],
            answer: "C",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/714/gate2001-1-21#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2001" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2001</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Which of the following statements is false ?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">Virtual memory implements the translation of a program's address space into physical memory address space.</span>`,
                `<span style="display: inline;">Virtual memory allows each program to exceed the size of the primary memory.</span>`,
                `<span style="display: inline;">Virtual memory increases the degree of multi-programming</span>`,
                `<span style="display: inline;">Virtual memory reduces the context switching overhead.</span>`
            ],
            answer: "D",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/701/gate2001-1-8#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2001" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2001</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Choose the correct alternatives (more than one can be correct) and write the corresponding letters only:<br/>Indicate all the false statements from the statements given below:</span>`,
            image: "",
            options: [
                `<span style="display: inline;">The amount of virtual memory available is limited by the availability of the secondary memory</span>`,
                `<span style="display: inline;">Any implementation of a critical section requires the use of an indivisible machine- instruction ,such as test-and-set.</span>`,
                `<span style="display: inline;">The use of monitors ensure that no dead-locks will be caused .</span>`,
                `<span style="display: inline;">The LRU page-replacement policy may cause thrashing for some type of programs.</span>`,
                `<span style="display: inline;">The best fit techniques for memory allocation ensures that memory will never be fragmented.</span>`
            ],
            answer: "B",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/525/gate1991-03-xi" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-1991" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 1991</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Choose the correct alternatives (more than one may be correct) and write the corresponding letters only: <br/> The total size of address space in a virtual memory system is limited by:</span>`,
            image: "",
            options: [
                `<span style="display: inline;">the length of MAR</span>`,
                `<span style="display: inline;">the available secondary storage</span>`,
                `<span style="display: inline;">the available main memory</span>`,
                `<span style="display: inline;">all of the above</span>`,
                `<span style="display: inline;">none of the above</span>`
            ],
            answer: "A",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/517/gate1991-03-iii" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-1991" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 1991</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
    ]
});

registerTest({
    series: "cse-gate-2027",
    name: "TWT-Operating System(File System)",
    date: "sep 08, 2026",
    topicsCovered: "File System, Inode, FAT & File Allocation Methods",
    questions: [
        {
            marks: 2,
            neg: 0,
            type: "NAT",
            text: `<span style="display: inline;">A disk of size <span>\\( 512M \\)</span> bytes is divided into blocks of <span>\\( 64K \\)</span> bytes. A file is stored in the disk using linked allocation. Each data block reserves 4 bytes to store the pointer to the next data block. The link part of the last data block contains a NULL pointer (also of 4 bytes). Suppose a file of <span>\\( 1M \\)</span> bytes needs to be stored in the disk. Assume, <span>\\( 1K=2^{10}, 1M=2^{20} \\)</span>. The amount of space in bytes that will be wasted due to internal fragmentation is _________. (Answer in integer)</span>`,
            image: "",
            options: [
            ],
            answer: "65468",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/460039/gate-cse-2025-set-1-question-41#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2025-set-1" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2025 SET-1</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 2,
            neg: 0,
            type: "NAT",
            text: `<span style="display: inline;">Consider two files systems A and B , that use contiguous allocation and linked allocation, respectively. A file of size 100 blocks is already stored in A and also in B. Now, consider inserting a new block in the middle of the file (between <span>\\( 50^{th} \\text{ and }51^{st} \\)</span> block), whose data is already available in the memory. Assume that there are enough free blocks at the end of the file and that the file control blocks are already in memory. Let the number of disk accesses required to insert a block in the middle of the file in A and B are <span>\\( n_A \\)</span> and <span>\\( n_B \\)</span>, respectively, then the value of <span>\\( n_A+n_B \\)</span> is</span>`,
            image: "",
            options: [
            ],
            answer: "153",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/371883/Gate-cse-2022-question-53#a_list_title" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2022" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2022</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 2,
            neg: 0,
            type: "NAT",
            text: `<span style="display: inline;">The index node (inode) of a Unix-like file system has 12 direct, one single-indirect and one double-indirect pointer The disk block size is 4 kB and the disk block addresses 32-bits long. The maximum possible file size is (rounded off to 1 decimal place) __________ GB.</span>`,
            image: "",
            options: [
            ],
            answer: "4:4.1",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/302806/gate2019-cs-42#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2019" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2019</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">In a file allocation system, which of the following allocation schemes(s) can be used if no external fragmentation is allowed?<br/> I. Contiguous <br/>II. Linked <br/>III. Indexed</span>`,
            image: "",
            options: [
                `<span style="display: inline;">I and III only</span>`,
                `<span style="display: inline;">II only</span>`,
                `<span style="display: inline;">III only</span>`,
                `<span style="display: inline;">II and III only</span>`
            ],
            answer: "D",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/118437/gate2017-2-8#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2017-set-2" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2017 SET-2</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0,
            type: "NAT",
            text: `<span style="display: inline;">A FAT (file allocation table) based file system is being used and the total overhead of each entry in the FAT is 4 bytes in size. Given a 100x<span>\\( 10^{6} \\)</span> bytes disk on which the file system is stored and data block size is <span>\\( 10^{3} \\)</span> bytes, the maximum size of a file that can be stored on this disk in units of <span>\\( 10^{6} \\)</span> bytes is _______.</span>`,
            image: "",
            options: [
            ],
            answer: "99.55:99.65",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="#" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2014-set-2" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2014 SET-2</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 2,
            neg: 0.66,
            type: "MCQ",
            text: `<span style="display: inline;">A file system with 300 GByte disk uses a file descriptor with 8 direct block addresses, 1 indirect block address and 1 doubly indirect block address. The size of each disk block is 128 Bytes and the size of each disk block address is 8 Bytes. The maximum possible file size in this file system is</span>`,
            image: "",
            options: [
                `<span style="display: inline;">3 KBytes</span>`,
                `<span style="display: inline;">35 KBytes</span>`,
                `<span style="display: inline;">280 KBytes</span>`,
                `<span style="display: inline;">dependent on the size of the disk</span>`
            ],
            answer: "B",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/2149/gate2012-41#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2012" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2012</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Using a larger block size in a fixed block size file system leads to</span>`,
            image: "",
            options: [
                `<span style="display: inline;">better disk throughput but poorer disk space utilization</span>`,
                `<span style="display: inline;">better disk throughput and better disk space utilization</span>`,
                `<span style="display: inline;">poorer disk throughput but better disk space utilization</span>`,
                `<span style="display: inline;">poorer disk throughput and poorer disk space utilization</span>`
            ],
            answer: "A",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/915/gate2003-25-isro2009-12" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/isro-cse-2009" style="color:#2f6d1a; text-decoration:none" target="_blank">ISRO CSE 2009</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">The data blocks of a very large file in the Unix file system are allocated using</span>`,
            image: "",
            options: [
                `<span style="display: inline;">contiguous allocation</span>`,
                `<span style="display: inline;">linked allocation</span>`,
                `<span style="display: inline;">indexed allocation</span>`,
                `<span style="display: inline;">an extension of indexed allocation</span>`
            ],
            answer: "D",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/418/gate2008-20#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2008" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2008</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">In a particular Unix OS, each data block is of size 1024 bytes, each node has 10 direct data block addresses and three additional addresses: one for single indirect block, one for double indirect block and one for triple indirect block. Also, each block can contain addresses for 128 blocks. Which one of the following is approximately the maximum size of a file in the file system?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">512 MB</span>`,
                `<span style="display: inline;">2 GB</span>`,
                `<span style="display: inline;">8 GB</span>`,
                `<span style="display: inline;">16 GB</span>`
            ],
            answer: "B",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/3710/gate2004-it-67" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-it-2004" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE IT 2004</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">A unix-style I-node has 10 direct pointers and one single, one double and one triple indirect pointers. Disk block size is 1 Kbyte, disk block address is 32 bits, and 48-bit integers are used. What is the maximum possible file size?</span>`,
            image: "",
            options: [
                `<span style="display: inline;"><span>\\( 2^{24} \\)</span>bytes</span>`,
                `<span style="display: inline;"><span>\\( 2^{32} \\)</span>bytes</span>`,
                `<span style="display: inline;"><span>\\( 2^{34} \\)</span>bytes</span>`,
                `<span style="display: inline;"><span>\\( 2^{48} \\)</span>bytes</span>`
            ],
            answer: "C",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/1045/gate2004-49#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2004" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2004</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">I/O redirection</span>`,
            image: "",
            options: [
                `<span style="display: inline;">implies changing the name of a file</span>`,
                `<span style="display: inline;">can be employed to use an existing file as input file for a program</span>`,
                `<span style="display: inline;">implies connecting 2 programs through a pipe</span>`,
                `<span style="display: inline;">None of the above</span>`
            ],
            answer: "B",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/2238/gate1997-3-7" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-1997" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 1997</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">The root directory of a disk should be placed</span>`,
            image: "",
            options: [
                `<span style="display: inline;">at a fixed address in main memory</span>`,
                `<span style="display: inline;">at a fixed location on the disk</span>`,
                `<span style="display: inline;">anywhere on the disk</span>`,
                `<span style="display: inline;">at a fixed location on the system disk</span>`,
                `<span style="display: inline;">anywhere on the system disk</span>`
            ],
            answer: "B",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/2296/gate1993-7-8" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-1993" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 1993</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Which of the following requires a device driver ?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">Register</span>`,
                `<span style="display: inline;">Cache</span>`,
                `<span style="display: inline;">Main memory</span>`,
                `<span style="display: inline;">Disk</span>`
            ],
            answer: "D",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/715/gate2001-1-22#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2001" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2001</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
    ]
});


registerTest({
    series: "cse-gate-2027",
    name: "TWT-Operating System(Disk Scheduling)",
    date: "sep 08, 2026",
    topicsCovered: "Disk Scheduling Algorithms, Seek Time, FCFS, SSTF, SCAN, C-SCAN & LOOK",
    questions: [
        {
            marks: 2,
            neg: 0.66,
            type: "MCQ",
            text: `<span style="display: inline;">Consider the following five disk five disk access requests of the form (request id, cylinder number) that are present in the disk scheduler queue at a given time.<br/><br/> (P,155),(Q,85),(R,110),(S,30),(T,115)<br/><br/> Assume the head is positioned at cylinder 100. The scheduler follows Shortest Seek Time First scheduling to service the requests. <br/><br/> Which one of the following statements is FALSE?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">T is serviced before P.</span>`,
                `<span style="display: inline;">Q is serviced after S, but before T.</span>`,
                `<span style="display: inline;">The head reverses its direction of movement between servicing of Q and P.</span>`,
                `<span style="display: inline;">R is serviced before P.</span>`
            ],
            answer: "B",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/333196/gate2020-cs-35#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2020" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2020</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Disk requests come to a disk driver for cylinders in the order 10, 22, 20, 2, 40, 6 and 38 at a time when the disk drive is reading from cylinder 20. The seek time is 6 ms/cylinder. The total seek time, if the disk arm scheduling algorithms is first-come-first-served is</span>`,
            image: "",
            options: [
                `<span style="display: inline;">360</span>`,
                `<span style="display: inline;">850</span>`,
                `<span style="display: inline;">900</span>`,
                `<span style="display: inline;">None of the above</span>`
            ],
            answer: "D",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/213565/isro2018-23" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/isro-cse-2018" style="color:#2f6d1a; text-decoration:none" target="_blank">ISRO CSE 2018</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 2,
            neg: 0,
            type: "NAT",
            text: `<span style="display: inline;">Consider a storage disk with 4 platters (numbered as 0, 1, 2 and 3), 200 cylinders (numbered as 0, 1, ... , 199), and 256 sectors per track (numbered as 0, 1, ... , 255). The following 6 disk requests of the form [sector number, cylinder number, platter number] are received by the disk controller at the same time:<br/><br/> [120, 72, 2] , [180, 134, 1] , [60, 20, 0] , [212, 86, 3] , [56, 116, 2] , [118, 16, 1]<br/><br/> Currently the head is positioned at sector number 100 of cylinder 80, and is moving towards higher cylinder numbers. The average power dissipation in moving the head over 100 cylinders is 20 milliwatts and for reversing the direction of the head movement once is 15 milliwatts. Power dissipation associated with rotational latency and switching of head between different platters is negligible. <br/><br/> The total power consumption in milliwatts to satisfy all of the above disk requests using the Shortest Seek Time First disk scheduling algorithm is _______.</span>`,
            image: "",
            options: [
            ],
            answer: "85",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/204128/gate2018-53#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2018" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2018</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Consider the disk system with 100 cylinders. The request to access the cylinders occur in the following sequence.<br/>4, 37, 10,7,19,73,2,15,6,20<br/>Assuming the head is currently at cylinder 50 what is the time taken to satisfy all requests if it takes 1 ms to move from one cylinder to adjacent one and shortest seek ime first algorithm is used.</span>`,
            image: "",
            options: [
                `<span style="display: inline;">95 ms</span>`,
                `<span style="display: inline;">119 ms</span>`,
                `<span style="display: inline;">233 ms</span>`,
                `<span style="display: inline;">276 ms</span>`
            ],
            answer: "B",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/128760/isro2017-66" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/isro-cse-2017" style="color:#2f6d1a; text-decoration:none" target="_blank">ISRO CSE 2017</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 2,
            neg: 0,
            type: "NAT",
            text: `<span style="display: inline;">Consider a disk queue with requests for I/O to blocks on cylinders 47,38,121,191,87,11, 92, 10. The C-LOOK scheduling algorithm is used. The head is initially at cylinder number 63, moving to wards larger cylinder numbers on its servicing pass. The cylinders are numbered from 0to 199. The total head movement (in number of cylinders) incurred while servicing these requests is____ .</span>`,
            image: "",
            options: [
            ],
            answer: "346",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/39716/gate2016-1-48#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2016-set-1" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2016 SET-1</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 2,
            neg: 0,
            type: "NAT",
            text: `<span style="display: inline;">Suppose the following disk request sequence (track numbers) for a disk with 100 tracks is given: 45, 20, 90, 10, 50, 60, 80, 25, 70. Assume that the initial position of the R/W head is on track 50. The additional distance that will be traversed by the R/W head when the Shortest Seek Time First (SSTF) algorithm is used compared to the SCAN (Elevator) algorithm (assuming that SCAN algorithm moves towards 100 when it starts execution) is____________ tracks.</span>`,
            image: "",
            options: [
            ],
            answer: "10",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/8227/gate2015-1-46#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2015-set-1" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2015 SET-1</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">There are 200 tracks on a disc platter and the pending requests have come in the order - 36, 69, 167, 76, 42, 51, 126, 12 and 199. Assume the arm is located at the 100th track and moving towards track 200. If sequence of disc access is 126, 167, 199, 12, 36, 42, 51, 69 and 76 then which disc access scheduling policy is used?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">Elevator</span>`,
                `<span style="display: inline;">Shortest seek-time first</span>`,
                `<span style="display: inline;">C-SCAN</span>`,
                `<span style="display: inline;">First Come First Served</span>`
            ],
            answer: "C",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/16939/isro2014-14" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/isro-cse-2014" style="color:#2f6d1a; text-decoration:none" target="_blank">ISRO CSE 2014</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0,
            type: "NAT",
            text: `<span style="display: inline;">Suppose a disk has 201 cylinders, numbered from 0 to 200. At some time the disk arm is at cylinder 100, and there is a queue of disk access requests for cylinders 30, 85, 90, 100, 105, 110, 135 and 145. If Shortest-Seek Time First (SSTF) is being used for scheduling the disk access, the request for cylinder 90 is serviced after servicing ____________ number of requests.</span>`,
            image: "",
            options: [
            ],
            answer: "3",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/1786/gate2014-1-19#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2014-set-1" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2014 SET-1</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 2,
            neg: 0.66,
            type: "MCQ",
            text: `<span style="display: inline;">Consider a disk system with 100 cylinders. The requests to access the cylinders occur in following sequence: <br/><br/> 4, 34, 10, 7, 19, 73, 2, 15, 6, 20<br/><br/> Assuming that the head is currently at cylinder 50, what is the time taken to satisfy all requests if it takes 1ms to move from one cylinder to adjacent one and shortest seek time first policy is used?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">95ms</span>`,
                `<span style="display: inline;">119ms</span>`,
                `<span style="display: inline;">233ms</span>`,
                `<span style="display: inline;">276ms</span>`
            ],
            answer: "B",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/1317/gate2009-31#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2009" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2009</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Disk requests are received by a disk drive for cylinder 5, 25, 18, 3, 39, 8 and 35 in that order. A seek takes 5 msec per cylinder moved. How much seek time is needed to serve these requests for a Shortest Seek First (SSF) algorithm? Assume that the arm is at cylinder 20 when the last of these requests is made with none of the requests yet served</span>`,
            image: "",
            options: [
                `<span style="display: inline;">125 msec</span>`,
                `<span style="display: inline;">295 msec</span>`,
                `<span style="display: inline;">575 msec</span>`,
                `<span style="display: inline;">750 msec</span>`
            ],
            answer: "B",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/49514/isro2007-39" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/isro-cse-2007" style="color:#2f6d1a; text-decoration:none" target="_blank">ISRO CSE 2007</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">The head of a hard disk serves requests following the shortest seek time first (SSTF) policy. <br/> What is the maximum cardinality of the request set, so that the head changes its direction after servicing every request if the total number of tracks are 2048 and the head can start from any track?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">9</span>`,
                `<span style="display: inline;">10</span>`,
                `<span style="display: inline;">11</span>`,
                `<span style="display: inline;">12</span>`
            ],
            answer: "C",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/3535/gate2007-it-83" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-it-2007" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE IT 2007</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">The head of a hard disk serves requests following the shortest seek time first (SSTF) policy. The head is initially positioned at track number 180.<br/> Which of the request sets will cause the head to change its direction after servicing every request assuming that the head does not change direction if there is a tie in SSTF and all the requests arrive before the servicing starts?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">11, 139, 170, 178, 181, 184, 201, 265</span>`,
                `<span style="display: inline;">10, 138, 170, 178, 181, 185, 201, 265</span>`,
                `<span style="display: inline;">10, 139, 169, 178, 181, 184, 201, 265</span>`,
                `<span style="display: inline;">10, 138, 170, 178, 181, 185, 200, 265</span>`
            ],
            answer: "B",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/3534/gate2007-it-82" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-it-2007" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE IT 2007</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">A disk has 200 tracks (numbered 0 through 199). At a given time, it was servicing the request of reading data from track 120, and at the previous request, service was for track 90. The pending requests (in order of their arrival) are for track numbers.<br/><br/> 30 70 115 130 110 80 20 25.<br/><br/> How many times will the head change its direction for the disk scheduling policies SSTF(Shortest Seek Time First) and FCFS (First Come First Serve)?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">2 and 3</span>`,
                `<span style="display: inline;">3 and 3</span>`,
                `<span style="display: inline;">3 and 4</span>`,
                `<span style="display: inline;">4 and 4</span>`
            ],
            answer: "C",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/3705/gate2004-it-62" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-it-2004" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE IT 2004</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Consider an operating system capable of loading and executing a single sequential user process at a time. The disk head scheduling algorithm used is First Come First Served (FCFS). If FCFS is replaced by Shortest Seek Time First (SSTF), claimed by the vendor to give 50% better benchmark results, what is the expected improvement in the I/O performance of user programs?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">50%</span>`,
                `<span style="display: inline;">40%</span>`,
                `<span style="display: inline;">25%</span>`,
                `<span style="display: inline;">0%</span>`
            ],
            answer: "D",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/1009/gate2004-12#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2004" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2004</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Which of the following disk scheduling strategies is likely to give the best throughput?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">Farthest cylinder next</span>`,
                `<span style="display: inline;">Nearest cylinder next</span>`,
                `<span style="display: inline;">First come first served</span>`,
                `<span style="display: inline;">Elevator algorithm</span>`
            ],
            answer: "B",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/1463/gate1999-1-10" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-1999" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 1999</a><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/operating-system" style="color:#2f6d1a; text-decoration:none" target="_blank">Operating System</a></div></div>`
        },
    ]
});
