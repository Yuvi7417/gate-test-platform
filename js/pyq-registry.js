registerTest({
    series: "cse-gate-2027",
    name: "TWT-Computer Network(Network Layer-I)",
    date: "oct 20, 2026",
    topicsCovered: "IPv4 Addressing, CIDR & Subnetting, Datagram Fragmentation, Longest Prefix Match & Routing Algorithms",
    questions: [
        {
            marks: 1,
            neg: 0,
            type: "NAT",
            text: `<span style="display: inline;">If an IP network uses a subnet mask of <span>\\( 255.255.240.0 \\)</span>, the maximum number of IP addresses that can be assigned to network interfaces is ________. (answer in integer)</span>`,
            image: "",
            options: [
            ],
            answer: "4094",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/523123/gate-cse-2026-set-2-question-23#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><b><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2026-set-2" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2026 SET-2</a></b> <b><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/computer-network" style="color:#2f6d1a; text-decoration:none" target="_blank">Computer Network</a></b></div></div>`
        },
        {
            marks: 2,
            neg: 0,
            type: "MSQ",
            text: `<span style="display: inline;">An ISP having an address block <span>\\( 202.16.0.0/15 \\)</span> assigns a block of <span>\\( 6000 \\)</span> IP addresses to a client, using the classless internet domain routing (CIDR) super-netting approach. Which of the following address blocks can be assigned by the ISP?</span>`,
            image: "",
            options: [
                `<span style="display: inline;"><span>\\( 202.16.0.0/19 \\)</span></span>`,
                `<span style="display: inline;"><span>\\( 202.17.64.0/19 \\)</span></span>`,
                `<span style="display: inline;"><span>\\( 202.16.32.0/19 \\)</span></span>`,
                `<span style="display: inline;"><span>\\( 202.17.24.0/19 \\)</span></span>`
            ],
            answer: ["A", "B", "C"],
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/523034/gate-cse-2026-set-1-question-46#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><b><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2026-set-1" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2026 SET-1</a></b> <b><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/computer-network" style="color:#2f6d1a; text-decoration:none" target="_blank">Computer Network</a></b></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Consider a network that uses Ethernet and IPv4. Assume that IPv4 headers do not use any options field. Each Ethernet frame can carry a maximum of 1500 bytes in its data field. A UDP segment is transmitted. The payload (data) in the UDP segment is 7488 bytes. <br/> Which ONE of the following choices has the CORRECT total number of fragments transmitted and the size of the last fragment including IPv4 header?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">5 fragments, 1488 bytes</span>`,
                `<span style="display: inline;">6 fragments, 88 bytes</span>`,
                `<span style="display: inline;">6 fragments, 108 bytes</span>`,
                `<span style="display: inline;">6 fragments, 116 bytes</span>`
            ],
            answer: "D",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/460822/gate-cse-2025-set-2-question-13#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><b><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2025-set-2" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2025 SET-2</a></b> <b><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/computer-network" style="color:#2f6d1a; text-decoration:none" target="_blank">Computer Network</a></b></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">A machine receives an IPv4 datagram. The protocol field of the IPv4 header has the protocol number of a protocol X. <br/> Which ONE of the following is NOT a possible candidate for X?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">Internet Control Message Protocol (ICMP)</span>`,
                `<span style="display: inline;">Internet Group Management Protocol (IGMP)</span>`,
                `<span style="display: inline;">Open Shortest Path First (OSPF)</span>`,
                `<span style="display: inline;">Routing Information Protocol (RIP)</span>`
            ],
            answer: "D",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/460827/gate-cse-2025-set-2-question-8#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><b><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2025-set-2" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2025 SET-2</a></b> <b><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/computer-network" style="color:#2f6d1a; text-decoration:none" target="_blank">Computer Network</a></b></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Consider the routing protocols given in List I and the names given in List II: <br/><br/> <span>\\( \\begin{array}{|c l|c l|} \\hline \\textbf{List I} &amp; &amp; \\textbf{List II} &amp; \\\\ \\hline \\text{(i)} &amp; \\text{Distance vector routing} &amp; \\text{(a)} &amp; \\text{Bellman-Ford} \\\\ \\hline \\text{(ii)} &amp; \\text{Link state routing} &amp; \\text{(b)} &amp; \\text{Dijkstra} \\\\ \\hline \\end{array} \\)</span><br/><br/> For matching of items in List I with those in List II, which ONE of the following options is CORRECT?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">(i) - (a) and (ii) - (b)</span>`,
                `<span style="display: inline;">(i) - (a) and (ii) - (a)</span>`,
                `<span style="display: inline;">(i) - (b) and (ii) - (a)</span>`,
                `<span style="display: inline;">(i) - (b) and (ii) - (b)</span>`
            ],
            answer: "A",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/460828/gate-cse-2025-set-2-question-7#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><b><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2025-set-2" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2025 SET-2</a></b> <b><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/computer-network" style="color:#2f6d1a; text-decoration:none" target="_blank">Computer Network</a></b></div></div>`
        },
        {
            marks: 2,
            neg: 0,
            type: "NAT",
            text: `<span style="display: inline;">Suppose a message of size 15000 bytes is transmitted from a source to a destination using IPv4 protocol via two routers as shown in the figure. Each router has a defined maximum transmission unit (MTU) as shown in the figure, including IP header. The number of fragments that will be delivered to the destination is _________. (Answer in integer) <br/><img src="images/twt-cn-network-layer/q47.webp"/><br/></span>`,
            image: "",
            options: [
            ],
            answer: "7",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/460033/gate-cse-2025-set-1-question-47#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><b><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2025-set-1" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2025 SET-1</a></b> <b><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/computer-network" style="color:#2f6d1a; text-decoration:none" target="_blank">Computer Network</a></b></div></div>`
        },
        {
            marks: 2,
            neg: 0.66,
            type: "MCQ",
            text: `<span style="display: inline;">A packet with the destination IP address 145.36.109.70 arrives at a router whose routing table is shown. Which interface will the packet be forwarded to? <br/> <span>\\( \\begin{array}{|c|c|c|} \\hline \\textbf{Subnet Address} &amp; \\textbf{Subnet Mask (in CIDR notation)} &amp; \\textbf{Interface} \\\\ \\hline 145.36.0.0 &amp; /16 &amp; E1 \\\\ \\hline 145.36.128.0 &amp; /17 &amp; E2 \\\\ \\hline 145.36.64.0 &amp; /18 &amp; E3 \\\\ \\hline 145.36.255.0 &amp; /24 &amp; E4 \\\\ \\hline \\text{Default} &amp; -- &amp; E5 \\\\ \\hline \\end{array} \\)</span></span>`,
            image: "",
            options: [
                `<span style="display: inline;"><span>\\( E3 \\)</span></span>`,
                `<span style="display: inline;"><span>\\( E1 \\)</span></span>`,
                `<span style="display: inline;"><span>\\( E2 \\)</span></span>`,
                `<span style="display: inline;"><span>\\( E5 \\)</span></span>`
            ],
            answer: "A",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/460050/gate-cse-2025-set-1-question-30#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><b><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2025-set-1" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2025 SET-1</a></b> <b><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/computer-network" style="color:#2f6d1a; text-decoration:none" target="_blank">Computer Network</a></b></div></div>`
        },
        {
            marks: 2,
            neg: 0.66,
            type: "MCQ",
            text: `<span style="display: inline;">Which one of the following CIDR prefixes exactly represents the range of IP addresses 10.12.2.0 to 10.12.3.255?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">10.12.2.0/23</span>`,
                `<span style="display: inline;">10.12.2.0/24</span>`,
                `<span style="display: inline;">10.12.0.0/22</span>`,
                `<span style="display: inline;">10.12.2.0/22</span>`
            ],
            answer: "A",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/422869/gate-cse-2024-set-2-question-28#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><b><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2024-set-2" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2024 SET-2</a></b> <b><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/computer-network" style="color:#2f6d1a; text-decoration:none" target="_blank">Computer Network</a></b></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Which of the following fields of an IP header is/are always modified by any router before it forwards the IP packet?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">Source IP Address</span>`,
                `<span style="display: inline;">Protocol</span>`,
                `<span style="display: inline;">Time to Live (TTL)</span>`,
                `<span style="display: inline;">Header Checksum</span>`
            ],
            answer: "C",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/422875/gate-cse-2024-set-2-question-22#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><b><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2024-set-2" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2024 SET-2</a></b> <b><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/computer-network" style="color:#2f6d1a; text-decoration:none" target="_blank">Computer Network</a></b></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Node X has a TCP connection open to node Y. The packets from X to Y go through an intermediate IP router R. Ethernet switch S is the first switch on the network path between X and R. Consider a packet sent from X to Y over this connection.<br/> Which of the following statements is/are TRUE about the destination IP and MAC addresses on this packet at the time it leaves X?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">The destination IP address is the IP address of R</span>`,
                `<span style="display: inline;">The destination IP address is the IP address of Y</span>`,
                `<span style="display: inline;">The destination MAC address is the MAC address of S</span>`,
                `<span style="display: inline;">The destination MAC address is the MAC address of Y</span>`
            ],
            answer: "B",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/422884/gate-cse-2024-set-2-question-13#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><b><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2024-set-2" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2024 SET-2</a></b> <b><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/computer-network" style="color:#2f6d1a; text-decoration:none" target="_blank">Computer Network</a></b></div></div>`
        },
        {
            marks: 2,
            neg: 0,
            type: "NAT",
            text: `<span style="display: inline;">Consider sending an IP datagram of size 1420 bytes (including 20 bytes of IP header) from a sender to a receiver over a path of two links with a router between them. The first link (sender to router) has an MTU (Maximum Transmission Unit) size of 542 bytes, while the second link (router to receiver) has an MTU size of 360 bytes. The number of fragments that would be delivered at the receiver is _____</span>`,
            image: "",
            options: [
            ],
            answer: "6",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/422787/gate-cse-2024-set-1-question-55#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><b><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2024-set-1" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2024 SET-1</a></b> <b><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/computer-network" style="color:#2f6d1a; text-decoration:none" target="_blank">Computer Network</a></b></div></div>`
        },
        {
            marks: 2,
            neg: 0,
            type: "NAT",
            text: `<span style="display: inline;">Consider the entries shown below in the forwarding table of an <span>\\( \\mathbb{P} \\)</span> router. Each entry consists of an IP prefix and the corresponding next hop router for packets whose destination IP address matches the prefix. The notation "<span>\\( \\mathrm{/N} \\)</span>" in a prefix indicates a subnet mask with the most significant <span>\\( \\mathrm{N} \\)</span> bits set to 1. <br/><br/> <span>\\( \\begin{array}{|l|c|} \\hline Prefix &amp; Next\\; hop \\; router \\\\ \\hline 10.1 .1 .0 / 24 &amp; R1 \\\\ \\hline 10.1 .1 .128 / 25 &amp; R2 \\\\ \\hline 10.1 .1 .64 / 26 &amp; R3 \\\\ \\hline 10.1 .1 .192 / 26 &amp; R4 \\\\ \\hline \\end{array} \\)</span> <br/><br/> This router forwards 20 packets each to 5 hosts. The IP addresses of the hosts are 10.1.1.16, 10.1.1.72, 10.1.1.132, 10.1.1.191, and 10.1.1.205. The number of packets forwarded via the next hop router <span>\\( R 2 \\)</span> is</span>`,
            image: "",
            options: [
            ],
            answer: "40",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/422794/gate-cse-2024-set-1-question-48#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><b><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2024-set-1" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2024 SET-1</a></b> <b><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/computer-network" style="color:#2f6d1a; text-decoration:none" target="_blank">Computer Network</a></b></div></div>`
        },
        {
            marks: 1,
            neg: 0,
            type: "MSQ",
            text: `<span style="display: inline;">Which of the following fields is/are modified in the IP header of a packet going out of a network address translation (NAT) device from an internal network to an external network?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">Source IP</span>`,
                `<span style="display: inline;">Destination IP</span>`,
                `<span style="display: inline;">Header Checksum</span>`,
                `<span style="display: inline;">Total Length</span>`
            ],
            answer: ["A", "C"],
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/422821/gate-cse-2024-set-1-question-21#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><b><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2024-set-1" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2024 SET-1</a></b> <b><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/computer-network" style="color:#2f6d1a; text-decoration:none" target="_blank">Computer Network</a></b></div></div>`
        },
        {
            marks: 2,
            neg: 0,
            type: "NAT",
            text: `<span style="display: inline;">The forwarding table of a router is shown below.<br/><span>\\( \\begin{array}{|c|c|c|c|} \\hline \\\\ Subnet \\; Number&amp;Subnet \\;Mask&amp;Interface ID \\\\ \\hline 200.150.0.0 &amp;255.255.0.0&amp; 1\\\\ \\hline 200.150.64.0 &amp;255.255.224.0 &amp;2\\\\ \\hline 200.150.68.0 &amp;255.255.255.0 &amp;3\\\\ \\hline 200.150.68.64 &amp;255.255.255.224 &amp;4 \\\\ \\hline Default &amp; &amp;0\\\\ \\hline \\end{array} \\)</span> <br/>A packet addressed to a destination address 200.150.68.118 arrives at the router. It will be forwarded to the interface with ID _____.</span>`,
            image: "",
            options: [
            ],
            answer: "3",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/399256/gate-cse-2023-question-55#a_list_title" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><b><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2023" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2023</a></b> <b><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/computer-network" style="color:#2f6d1a; text-decoration:none" target="_blank">Computer Network</a></b></div></div>`
        },
        {
            marks: 1,
            neg: 0,
            type: "MSQ",
            text: `<span style="display: inline;">Which of the following statements is/are INCORRECT about the OSPF (Open Shortest Path First) routing protocol used in the Internet?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">OSPF implements Bellman-Ford algorithm to find shortest paths.</span>`,
                `<span style="display: inline;">OSPF uses Dijkstra's shortest path algorithm to implement least-cost path routing</span>`,
                `<span style="display: inline;">OSPF is used as an inter-domain routing protocol</span>`,
                `<span style="display: inline;">OSPF implements hierarchical routing.</span>`
            ],
            answer: ["A", "C"],
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/399297/gate-cse-2023-question-15#a_list_title" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><b><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2023" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2023</a></b> <b><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/computer-network" style="color:#2f6d1a; text-decoration:none" target="_blank">Computer Network</a></b></div></div>`
        }
    ]
});

registerTest({
    series: "cse-gate-2027",
    name: "TWT-Computer Network(Network Layer-II)",
    date: "oct 20, 2026",
    topicsCovered: "Subnetting & Host Capacity, Route Aggregation, Distance Vector Convergence, RIP & OSPF Protocols",
    questions: [
        {
            marks: 2,
            neg: 0,
            type: "NAT",
            text: `<span style="display: inline;">Consider a network with three routers P, Q, R shown in the figure below. All the links have cost of unity.<br/><img src="images/twt-cn-network-layer/q47.jpg"/><br/>The routers exchange distance vector routing information and have converged on the routing tables, after which the link Q-R fails. Assume that P and Q send out routing updates at random times, each at the same average rate. The probability of a routing loop formation (rounded off to one decimal place) between P and Q, leading to count-to-infinity problem, is ____</span>`,
            image: "",
            options: [
            ],
            answer: "0.5",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/371889/Gate-cse-2022-question-47#a_list_title" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><b><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2022" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2022</a></b> <b><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/computer-network" style="color:#2f6d1a; text-decoration:none" target="_blank">Computer Network</a></b></div></div>`
        },
        {
            marks: 2,
            neg: 0,
            type: "MSQ",
            text: `<span style="display: inline;">Consider routing table of an organization's router shown below:<br/><span>\\( \\begin{array}{|l|l|l|} Subnet Number &amp; Subnet Mask &amp; Next Hop \\\\ 12.20.164.0 &amp; 255.255.252.0 &amp; R1 \\\\ 12.20.170.0 &amp; 255.255.254.0 &amp; R2 \\\\ 12.20.168.0 &amp; 255.255.254.0 &amp; Interface 0 \\\\ 12.20.166.0 &amp; 255.255.254.0 &amp; Interface 1 \\\\ default &amp; ~ &amp; R3 \\\\ \\hline \\end{array} \\)</span><br/>Which of the following prefixes in CIDR notation can be collectively used to correctly aggregate all of the subnets in the routing table?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">12.20.164.0/20</span>`,
                `<span style="display: inline;">12.20.164.0/22</span>`,
                `<span style="display: inline;">12.20.164.0/21</span>`,
                `<span style="display: inline;">12.20.168.0/22</span>`
            ],
            answer: ["B", "D"],
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/371891/Gate-cse-2022-question-45#a_list_title" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><b><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2022" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2022</a></b> <b><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/computer-network" style="color:#2f6d1a; text-decoration:none" target="_blank">Computer Network</a></b></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Consider an enterprise network with two Ethernet segments, a web server and a firewall, connected via three routers as shown below.<br/><img src="images/twt-cn-network-layer/q12.jpg"/><br/>What is the number of subnets inside the enterprise network?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">3</span>`,
                `<span style="display: inline;">12</span>`,
                `<span style="display: inline;">6</span>`,
                `<span style="display: inline;">8</span>`
            ],
            answer: "C",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/371924/Gate-cse-2022-question-12#a_list_title" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><b><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2022" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2022</a></b> <b><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/computer-network" style="color:#2f6d1a; text-decoration:none" target="_blank">Computer Network</a></b></div></div>`
        },
        {
            marks: 2,
            neg: 0,
            type: "MSQ",
            text: `<span style="display: inline;">Consider a computer network using the distance vector routing algorithm in its network layer. The partial topology of the network is shown below.<br/><img src="images/twt-cn-network-layer/q45.jpg"/><br/> The objective is to find the shortest-cost path from the router R to routers P and Q. Assume that R does not initially know the shortest routes to P and Q. Assume that R has three neighboring routers denoted as X, Y and Z. During one iteration, R measures its distance to its neighbors X, Y, and Z as 3, 2 and 5, respectively. Router R gets routing vectors from its neighbors that indicate that the distance to router P from routers X, Y and Z are 7, 6 and 5, respectively. The routing vector also indicates that the distance to router Q from routers X, Y and Z are 4, 6 and 8 respectively. Which of the following statement(s) is/are correct with respect to the new routing table o R, after updation during this iteration?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">The distance from R to P will be stored as 10</span>`,
                `<span style="display: inline;">The distance from R to Q will be stored as 7</span>`,
                `<span style="display: inline;">The next hop router for a packet from R to P is Y</span>`,
                `<span style="display: inline;">The next hop router for a packet from R to Q is Z</span>`
            ],
            answer: ["B", "C"],
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/357495/gate-cse-2021-set-2-question-45#a_list_title" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><b><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2021-set-2" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2021 SET-2</a></b> <b><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/computer-network" style="color:#2f6d1a; text-decoration:none" target="_blank">Computer Network</a></b></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Which of the following classes of languages can validate an IPv4 address in dotted decimal format?<br/> It is to be ensured that the decimal values lie between 0 and 255.</span>`,
            image: "",
            options: [
                `<span style="display: inline;">RE and higher</span>`,
                `<span style="display: inline;">CFG and higher</span>`,
                `<span style="display: inline;">CSG and higher</span>`,
                `<span style="display: inline;">Recursively enumerable language</span>`
            ],
            answer: "A",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/331449/isro2020-40" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><b><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/isro-cse-2020" style="color:#2f6d1a; text-decoration:none" target="_blank">ISRO CSE 2020</a></b> <b><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/computer-network" style="color:#2f6d1a; text-decoration:none" target="_blank">Computer Network</a></b></div></div>`
        },
        {
            marks: 2,
            neg: 0.66,
            type: "MCQ",
            text: `<span style="display: inline;">An organization requires a range of IP address to assign one to each of its 1500 computers. The organization has approached an Internet Service Provider (ISP) for this task. The ISP uses CIDR and serves the requests from the available IP address space 202.61.0.0/17. The ISP wants to assign an address space to the organization which will minimize the number of routing entries in the ISP?s router using route aggregation. Which of the following address spaces are potential candidates from which the ISP can allot any one of the organization? <br/><br/>I. 202.61.84.0/21<br/>II. 202.61.104.0/21<br/>III. 202.61.64.0/21<br/>IV. 202.61.144.0/21</span>`,
            image: "",
            options: [
                `<span style="display: inline;">I and II only</span>`,
                `<span style="display: inline;">II and III only</span>`,
                `<span style="display: inline;">III and IV only</span>`,
                `<span style="display: inline;">I and IV only</span>`
            ],
            answer: "B",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/333193/gate2020-cs-38#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><b><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2020" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2020</a></b> <b><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/computer-network" style="color:#2f6d1a; text-decoration:none" target="_blank">Computer Network</a></b></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Consider the following statements about the functionality of an IP based router.<br/><br/> I. A router does not modify the IP packets during forwarding.<br/> II. It is not necessary for a router to implement any routing protocol.<br/> III. A router should reassemble IP fragments if the MTU of the outgoing link is larger than the size of the incoming IP packet.<br/><br/> Which of the above statements is/are TRUE?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">I and II only</span>`,
                `<span style="display: inline;">I only</span>`,
                `<span style="display: inline;">II and III only</span>`,
                `<span style="display: inline;">II only</span>`
            ],
            answer: "D",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/333216/gate2020-cs-15#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><b><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2020" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2020</a></b> <b><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/computer-network" style="color:#2f6d1a; text-decoration:none" target="_blank">Computer Network</a></b></div></div>`
        },
        {
            marks: 2,
            neg: 0.66,
            type: "MCQ",
            text: `<span style="display: inline;">Consider three machines M, N and P with IP addresses 100.10.5.2, 100.10.5.5 and 100.10.5.6 respectively. The subnet mask is set to 255.255.255.252 for all the three machines. Which one of the following is true?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">M, N and P all belong to the same subnet</span>`,
                `<span style="display: inline;">Only M and N belong to the same subnet</span>`,
                `<span style="display: inline;">Only N and P belong to the same subnet</span>`,
                `<span style="display: inline;">M, N, and P belong to three different subnets</span>`
            ],
            answer: "C",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/302820/gate2019-cs-28#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><b><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2019" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2019</a></b> <b><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/computer-network" style="color:#2f6d1a; text-decoration:none" target="_blank">Computer Network</a></b></div></div>`
        },
        {
            marks: 2,
            neg: 0,
            type: "NAT",
            text: `<span style="display: inline;">Consider an IP packet with a length of 4,500 bytes that includes a 20-byte IPv4 header and a 40-byte TCP header. The packet is forwarded to an IPv4 router that supports a Maximum Transmission Unit (MTU) of 600 bytes. Assume that the length of the IP header in all the outgoing fragments of this packet is 20 bytes. Assume that the fragmentation offset value stored in the first fragment is 0. <br/> The fragmentation offset value stored in the third fragment is _______.</span>`,
            image: "",
            options: [
            ],
            answer: "144",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/204129/gate2018-54#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><b><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2018" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2018</a></b> <b><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/computer-network" style="color:#2f6d1a; text-decoration:none" target="_blank">Computer Network</a></b></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Match with the suitable one:<br/><span>\\( \\begin{array}{|l|l|l|l|} \\hline &amp; \\text { List-1 } &amp; &amp; \\text { List-2 } \\\\ \\hline \\text { (a) } &amp; \\text { Multicast group membership } &amp; \\text { i. } &amp; \\text { Distance Vector routing } \\\\ \\hline \\text { (b) } &amp; \\text { Interior gateway protocol } &amp; ii . &amp; \\text { IGMP } \\\\ \\hline \\text { (c) } &amp; \\text { Exterior gateway protocol } &amp; iii . &amp; \\text { OSPF } \\\\ \\hline \\text { (d) } &amp; \\text { RIP } &amp; iv . &amp; \\text { BGP } \\\\ \\hline \\end{array} \\)</span></span>`,
            image: "",
            options: [
                `<span style="display: inline;">a-ii, b-iii, c-iv, d-i</span>`,
                `<span style="display: inline;">a-ii, b-iv, c-iii, d-i</span>`,
                `<span style="display: inline;">a-iii, b-iv, c-i, d-ii</span>`,
                `<span style="display: inline;">a-iii, b-i, c-iv, d-ii</span>`
            ],
            answer: "A",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/128665/isro2017-34" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><b><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/isro-cse-2017" style="color:#2f6d1a; text-decoration:none" target="_blank">ISRO CSE 2017</a></b> <b><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/computer-network" style="color:#2f6d1a; text-decoration:none" target="_blank">Computer Network</a></b></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">The default subnet mask for a class B network can be</span>`,
            image: "",
            options: [
                `<span style="display: inline;">255.255.255.0</span>`,
                `<span style="display: inline;">255.0.0.0</span>`,
                `<span style="display: inline;">255.255.192.0</span>`,
                `<span style="display: inline;">255.255.0.0</span>`
            ],
            answer: "D",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/128648/isro2017-29" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><b><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/isro-cse-2017" style="color:#2f6d1a; text-decoration:none" target="_blank">ISRO CSE 2017</a></b> <b><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/computer-network" style="color:#2f6d1a; text-decoration:none" target="_blank">Computer Network</a></b></div></div>`
        },
        {
            marks: 1,
            neg: 0,
            type: "NAT",
            text: `<span style="display: inline;">The maximum number of IPv4 router addresses that can be listed in the record route (RR) option field of an IPv4 header is _________.</span>`,
            image: "",
            options: [
            ],
            answer: "9",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/118427/gate2017-2-20#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><b><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2017-set-2" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2017 SET-2</a></b> <b><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/computer-network" style="color:#2f6d1a; text-decoration:none" target="_blank">Computer Network</a></b></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Consider the following statements about the routing protocols, Routing Information Protocol (RIP) and Open Shortest Path First (OSPF) in an IPv4 network. <br/><br/> I. RIP uses distance vector routing <br/> II. RIP packets are sent using UDP <br/> III. OSPF packets are sent using TCP <br/> IV. OSPF operation is based on link-state routing <br/><br/> Which of the statements above are CORRECT?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">I and IV only</span>`,
                `<span style="display: inline;">I, II and III only</span>`,
                `<span style="display: inline;">I, II and IV only</span>`,
                `<span style="display: inline;">II, III and IV only</span>`
            ],
            answer: "C",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/118338/gate2017-2-9#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><b><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2017-set-2" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2017 SET-2</a></b> <b><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/computer-network" style="color:#2f6d1a; text-decoration:none" target="_blank">Computer Network</a></b></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">The address of a class B host is to be split into subnets with a 6-bit subnet number. What is the maximum number of subnets and the maximum number of hosts in each subnet?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">62 subnets and 262142 hosts.</span>`,
                `<span style="display: inline;">64 subnets and 262142 hosts.</span>`,
                `<span style="display: inline;">62 subnets and 1022 hosts.</span>`,
                `<span style="display: inline;">64 subnets and 1024 hosts.</span>`
            ],
            answer: "C",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/1265/gate2007-67-isro2016-72" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><b><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/isro-cse-2016" style="color:#2f6d1a; text-decoration:none" target="_blank">ISRO CSE 2016</a></b> <b><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/computer-network" style="color:#2f6d1a; text-decoration:none" target="_blank">Computer Network</a></b></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Which network protocol allows hosts to dynamically get a unique IP number on each bootup</span>`,
            image: "",
            options: [
                `<span style="display: inline;">DHCP</span>`,
                `<span style="display: inline;">BOOTP</span>`,
                `<span style="display: inline;">RARP</span>`,
                `<span style="display: inline;">ARP</span>`
            ],
            answer: "A",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/55521/isro2016-70" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><b><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/isro-cse-2016" style="color:#2f6d1a; text-decoration:none" target="_blank">ISRO CSE 2016</a></b> <b><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/computer-network" style="color:#2f6d1a; text-decoration:none" target="_blank">Computer Network</a></b></div></div>`
        }
    ]
});

registerTest({
    series: "cse-gate-2027",
    name: "TWT-Computer Network(Network Layer-III)",
    date: "oct 20, 2026",
    topicsCovered: "Dynamic Routing, Datagram Fragmentation, Subnetting & Supernetting, Routing Table Matching, IP Header Fields",
    questions: [
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Dynamic routing protocol enable routers to</span>`,
            image: "",
            options: [
                `<span style="display: inline;">Dynamically discover and maintain routes</span>`,
                `<span style="display: inline;">Distribute routing updates to other routers</span>`,
                `<span style="display: inline;">Reach agreement with other routers about the network topology</span>`,
                `<span style="display: inline;">All of the above</span>`
            ],
            answer: "D",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/55518/isro2016-68" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><b><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/isro-cse-2016" style="color:#2f6d1a; text-decoration:none" target="_blank">ISRO CSE 2016</a></b> <b><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/computer-network" style="color:#2f6d1a; text-decoration:none" target="_blank">Computer Network</a></b></div></div>`
        },
        {
            marks: 2,
            neg: 0,
            type: "NAT",
            text: `<span style="display: inline;">An IP datagram of size 1000 bytes arrives at a router. The router has to forward this packet on a link whose MTU (maximum transmission unit)is 100bytes. Assume that the size of the IP header is 20bytes. <br/> The number of fragments that the IP datagram will be divided into for transmission is _________.</span>`,
            image: "",
            options: [
            ],
            answer: "13",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/39712/gate2016-1-53#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><b><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2016-set-1" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2016 SET-1</a></b> <b><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/computer-network" style="color:#2f6d1a; text-decoration:none" target="_blank">Computer Network</a></b></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Which one of the following protocols is NOT used to resolve one form of address to another one?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">DNS</span>`,
                `<span style="display: inline;">ARP</span>`,
                `<span style="display: inline;">DHCP</span>`,
                `<span style="display: inline;">RARP</span>`
            ],
            answer: "C",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/39639/gate2016-1-24#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><b><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2016-set-1" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2016 SET-1</a></b> <b><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/computer-network" style="color:#2f6d1a; text-decoration:none" target="_blank">Computer Network</a></b></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Which layers of the OSI reference model are host-to-host layers?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">Transport, session, presentation, application</span>`,
                `<span style="display: inline;">Session, presentation, application</span>`,
                `<span style="display: inline;">Datalink, transport, presentation, application</span>`,
                `<span style="display: inline;">Physical, datalink, network, transport</span>`
            ],
            answer: "A",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/51988/isro2015-58" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><b><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/isro-cse-2015" style="color:#2f6d1a; text-decoration:none" target="_blank">ISRO CSE 2015</a></b> <b><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/computer-network" style="color:#2f6d1a; text-decoration:none" target="_blank">Computer Network</a></b></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">A router uses the following routing table:<br/><span>\\( \\begin{array}{|l|l|l|} \\hline \\text { Destination } &amp; \\text { Mask } &amp; \\text { Interface } \\\\ \\hline 144.16 .0 .0 &amp; 255.255 .0 .0 &amp; \\text { eth0 } \\\\ \\hline 144.16 .64 .0 &amp; 255.255 .224 .0 &amp; \\text { eth1 } \\\\ \\hline 144.16 .68 .0 &amp; 255.255 .255 .0 &amp; \\text { eth2 } \\\\ \\hline 144.16 .68 .64 &amp; 255.255 .255 .224 &amp; \\text { eth3 } \\\\ \\hline \\end{array} \\)</span><br/>Packet bearing a destination address 144.16.68.117 arrives at the router. On which interface will it be forwarded?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">eth0</span>`,
                `<span style="display: inline;">eth1</span>`,
                `<span style="display: inline;">eth2</span>`,
                `<span style="display: inline;">eth3</span>`
            ],
            answer: "C",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/3607/gate2006-it-63-isro2015-57" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><b><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/isro-cse-2015" style="color:#2f6d1a; text-decoration:none" target="_blank">ISRO CSE 2015</a></b> <b><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/computer-network" style="color:#2f6d1a; text-decoration:none" target="_blank">Computer Network</a></b></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">In a class B subnet, we know the IP address of one host and the mask as given below:<br/>IP address: 125.134.112.66<br/>Mask: 255.255.224.0<br/>What is the first address(Network address)?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">125.134.96.0</span>`,
                `<span style="display: inline;">125.134.112.0</span>`,
                `<span style="display: inline;">125.134.112.66</span>`,
                `<span style="display: inline;">125.134.0.0</span>`
            ],
            answer: "A",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/51717/isro2015-54" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><b><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/isro-cse-2015" style="color:#2f6d1a; text-decoration:none" target="_blank">ISRO CSE 2015</a></b> <b><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/computer-network" style="color:#2f6d1a; text-decoration:none" target="_blank">Computer Network</a></b></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">How many bits internet address is assigned to each host on a TCP/IP internet which is used in all communication with the host?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">16 bits</span>`,
                `<span style="display: inline;">32 bits</span>`,
                `<span style="display: inline;">48 bits</span>`,
                `<span style="display: inline;">64 bits</span>`
            ],
            answer: "B",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/51712/isro2015-50" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><b><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/isro-cse-2015" style="color:#2f6d1a; text-decoration:none" target="_blank">ISRO CSE 2015</a></b> <b><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/computer-network" style="color:#2f6d1a; text-decoration:none" target="_blank">Computer Network</a></b></div></div>`
        },
        {
            marks: 2,
            neg: 0,
            type: "NAT",
            text: `<span style="display: inline;">In the network 200.10.11.144/27, the fourth octet (in decimal) of the last IP address of the network which can be assigned to a host is ____________.</span>`,
            image: "",
            options: [
            ],
            answer: "158",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/8497/gate2015-3-36#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><b><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2015-set-3" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2015 SET-3</a></b> <b><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/computer-network" style="color:#2f6d1a; text-decoration:none" target="_blank">Computer Network</a></b></div></div>`
        },
        {
            marks: 2,
            neg: 0.66,
            type: "MCQ",
            text: `<span style="display: inline;">Consider the following routing table at an IP router: <br/><img src="images/twt-cn-network-layer/q26.jpg"/><br/> For each IP address in Group I identify the correct choice of the next hop from Group II using the entries from the routing table above.<br/><img src="images/twt-cn-network-layer/q26a.jpg"/></span>`,
            image: "",
            options: [
                `<span style="display: inline;">i-a, ii-c, iii-e, iv-d</span>`,
                `<span style="display: inline;">i-a, ii-d, iii-b, iv-e</span>`,
                `<span style="display: inline;">i-b, ii-c, iii-d, iv-e</span>`,
                `<span style="display: inline;">i-b, ii-c, iii-e, iv-d</span>`
            ],
            answer: "A",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/8213/gate2015-2-26#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><b><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2015-set-2" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2015 SET-2</a></b> <b><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/computer-network" style="color:#2f6d1a; text-decoration:none" target="_blank">Computer Network</a></b></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Which one of the following fields of an IP header is NOT modified by a typical IP router?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">Checksum</span>`,
                `<span style="display: inline;">Source address</span>`,
                `<span style="display: inline;">Time to Live (TTL)</span>`,
                `<span style="display: inline;">Length</span>`
            ],
            answer: "B",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/8220/gate2015-1-16#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><b><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2015-set-1" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2015 SET-1</a></b> <b><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/computer-network" style="color:#2f6d1a; text-decoration:none" target="_blank">Computer Network</a></b></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">An organization is granted the block 130.34.12.64/26. It needs to have 4 subnets. Which of the following is not an address of this organization?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">130.34.12.124</span>`,
                `<span style="display: inline;">130.34.12.89</span>`,
                `<span style="display: inline;">130.34.12.70</span>`,
                `<span style="display: inline;">130.34.12.132</span>`
            ],
            answer: "D",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/17446/isro2014-75" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><b><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/isro-cse-2014" style="color:#2f6d1a; text-decoration:none" target="_blank">ISRO CSE 2014</a></b> <b><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/computer-network" style="color:#2f6d1a; text-decoration:none" target="_blank">Computer Network</a></b></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Assume the following information.<br/>Original timestamp value = 46<br/>Receive timestamp value = 59<br/>Transmit timestamp value = 60<br/>Timestamp at arrival of packet = 69<br/>Which of the following statements is correct?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">Receive clock should go back by 3 milliseconds</span>`,
                `<span style="display: inline;">Transmit and Receive clocks are synchronized</span>`,
                `<span style="display: inline;">Transmit clock should go back by 3 milliseconds</span>`,
                `<span style="display: inline;">Receive clock should go ahead by 1 milliseconds</span>`
            ],
            answer: "A",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/17439/isro2014-58" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><b><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/isro-cse-2014" style="color:#2f6d1a; text-decoration:none" target="_blank">ISRO CSE 2014</a></b> <b><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/computer-network" style="color:#2f6d1a; text-decoration:none" target="_blank">Computer Network</a></b></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">A supernet has a first address of 205.16.32.0 and a supernet mask of 255.255.248.0. A router receives 4 packets with the following destination addresses.which packet belongs to this supernet?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">205.16.42.56</span>`,
                `<span style="display: inline;">205.17.32.76</span>`,
                `<span style="display: inline;">205.16.31.10</span>`,
                `<span style="display: inline;">205.16.39.44</span>`
            ],
            answer: "D",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/17443/isro2014-57" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><b><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/isro-cse-2014" style="color:#2f6d1a; text-decoration:none" target="_blank">ISRO CSE 2014</a></b> <b><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/computer-network" style="color:#2f6d1a; text-decoration:none" target="_blank">Computer Network</a></b></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">An IP packet has arrived with the first 8 bits as 0100 0010. Which of the following is correct?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">The number of hops this packet can travel is 2.</span>`,
                `<span style="display: inline;">The total number of bytes in header is 16 bytes</span>`,
                `<span style="display: inline;">The upper layer protocol is ICMP</span>`,
                `<span style="display: inline;">The receiver rejects the packet</span>`
            ],
            answer: "D",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/54125/isro2014-55" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><b><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/isro-cse-2014" style="color:#2f6d1a; text-decoration:none" target="_blank">ISRO CSE 2014</a></b> <b><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/computer-network" style="color:#2f6d1a; text-decoration:none" target="_blank">Computer Network</a></b></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">A IP packet has arrived in which the fragmentation offset value is 100,the value of HLEN is 5 and the value of total length field is 200. What is the number of the last byte?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">194</span>`,
                `<span style="display: inline;">394</span>`,
                `<span style="display: inline;">979</span>`,
                `<span style="display: inline;">1179</span>`
            ],
            answer: "C",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/17422/isro2014-31" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><b><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/isro-cse-2014" style="color:#2f6d1a; text-decoration:none" target="_blank">ISRO CSE 2014</a></b> <b><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/computer-network" style="color:#2f6d1a; text-decoration:none" target="_blank">Computer Network</a></b></div></div>`
        }
    ]
});

registerTest({
    series: "cse-gate-2027",
    name: "TWT-Computer Network(Network Layer-IV)",
    date: "oct 20, 2026",
    topicsCovered: "Routing Protocols (OSPF & RIP), NAT, IP Fragmentation, CIDR Allocation, IPv6 & IPv4 Addressing",
    questions: [
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">What is routing algorithm used by OSPF routing protocol?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">Distance vector</span>`,
                `<span style="display: inline;">Flooding</span>`,
                `<span style="display: inline;">Path vector</span>`,
                `<span style="display: inline;">Link state</span>`
            ],
            answer: "D",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/53136/isro2014-16" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><b><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/isro-cse-2014" style="color:#2f6d1a; text-decoration:none" target="_blank">ISRO CSE 2014</a></b> <b><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/computer-network" style="color:#2f6d1a; text-decoration:none" target="_blank">Computer Network</a></b></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">The process of modifying IP address information in IP packet headers while in transit across a traffic routing device is called</span>`,
            image: "",
            options: [
                `<span style="display: inline;">Port address translation (PAT)</span>`,
                `<span style="display: inline;">Network address translation (NAT)</span>`,
                `<span style="display: inline;">Address mapping</span>`,
                `<span style="display: inline;">Port mapping</span>`
            ],
            answer: "B",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/54140/isro2014-6" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><b><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/isro-cse-2014" style="color:#2f6d1a; text-decoration:none" target="_blank">ISRO CSE 2014</a></b> <b><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/computer-network" style="color:#2f6d1a; text-decoration:none" target="_blank">Computer Network</a></b></div></div>`
        },
        {
            marks: 2,
            neg: 0.66,
            type: "MCQ",
            text: `<span style="display: inline;">An IP router with a Maximum Transmission Unit (MTU) of 1500 bytes has received an IP packet of size 4404 bytes with an IP header of length 20 bytes. The values of the relevant fields in the header of the third IP fragment generated by the router for this packet are</span>`,
            image: "",
            options: [
                `<span style="display: inline;">MF bit: 0, Datagram Length: 1444; Offset: 370</span>`,
                `<span style="display: inline;">MF bit: 1, Datagram Length: 1424; Offset: 185</span>`,
                `<span style="display: inline;">MF bit: 1, Datagram Length: 1500; Offset: 370</span>`,
                `<span style="display: inline;">MF bit: 0, Datagram Length: 1424; Offset: 2960</span>`
            ],
            answer: "A",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/2062/gate2014-3-28#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><b><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2014-set-3" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2014 SET-3</a></b> <b><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/computer-network" style="color:#2f6d1a; text-decoration:none" target="_blank">Computer Network</a></b></div></div>`
        },
        {
            marks: 2,
            neg: 0,
            type: "NAT",
            text: `<span style="display: inline;">Every host in an IPv4 network has a 1-second resolution real-time clock with battery backup. Each host needs to generate up to 1000 unique identifiers per second. Assume that each host has a globally unique IPv4 address. Design a 50-bit globally unique ID for this purpose. After what period (in seconds) will the identifiers generated by a host wrap around?</span>`,
            image: "",
            options: [
            ],
            answer: "256",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/2061/gate2014-3-27#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><b><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2014-set-3" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2014 SET-3</a></b> <b><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/computer-network" style="color:#2f6d1a; text-decoration:none" target="_blank">Computer Network</a></b></div></div>`
        },
        {
            marks: 2,
            neg: 0,
            type: "NAT",
            text: `<span style="display: inline;">An IP router implementing Classless Inter-domain routing (CIDR) receives a packet with address 131.23.151.76. The router's routing table has the following entries: <br/><img src="images/twt-cn-network-layer/gate2014_3_q26.jpg"/> <br/> The identifier of the output interface on which this packet will be forwarded is _____.</span>`,
            image: "",
            options: [
            ],
            answer: "1",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/2060/gate2014-3-26#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><b><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2014-set-3" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2014 SET-3</a></b> <b><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/computer-network" style="color:#2f6d1a; text-decoration:none" target="_blank">Computer Network</a></b></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Host A (on TCP/IP v4 network A) sends an IP datagram D to host B (also on TCP/IP V4 network B). Assume that no error occurred during the transmission of D. When D reaches B, which of the following IP header field(s) may be different from that of the original datagram D?<br/> (i) TTL <br/>(ii) Checksum <br/> (iii) Fragment Offset</span>`,
            image: "",
            options: [
                `<span style="display: inline;">(i) only</span>`,
                `<span style="display: inline;">(i) and (ii) only</span>`,
                `<span style="display: inline;">(ii) and (iii) only</span>`,
                `<span style="display: inline;">(i), (ii) and (iii)</span>`
            ],
            answer: "D",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/2059/gate2014-3-25#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><b><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2014-set-3" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2014 SET-3</a></b> <b><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/computer-network" style="color:#2f6d1a; text-decoration:none" target="_blank">Computer Network</a></b></div></div>`
        },
        {
            marks: 1,
            neg: 0,
            type: "NAT",
            text: `<span style="display: inline;">In the diagram shown below, L1 is an Ethernet LAN and L2 is a Token-Ring LAN. An IP packet originates from sender S and traverses to R, as shown. The links within each ISP and across the two ISPs, are all point-to-point' optical links. The initial value of the TTL field is 32. The maximum possible value of the TTL field when R receives the datagram is ____________. <br/><img src="images/twt-cn-network-layer/q25.jpg"/></span>`,
            image: "",
            options: [
            ],
            answer: "26",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/1983/gate2014-2-25#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><b><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2014-set-2" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2014 SET-2</a></b> <b><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/computer-network" style="color:#2f6d1a; text-decoration:none" target="_blank">Computer Network</a></b></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Which one of the following is TRUE about the interior gateway routing protocols - Routing Information Protocol (RIP) and Open Shortest Path First (OSPF)?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">RIP uses distance vector routing and OSPF uses link state routing</span>`,
                `<span style="display: inline;">OSPF uses distance vector routing and RIP uses link state routing</span>`,
                `<span style="display: inline;">Both RIP and OSPF use link state routing</span>`,
                `<span style="display: inline;">Both RIP and OSPF use distance vector routing</span>`
            ],
            answer: "A",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/1981/gate2014-2-23#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><b><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2014-set-2" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2014 SET-2</a></b> <b><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/computer-network" style="color:#2f6d1a; text-decoration:none" target="_blank">Computer Network</a></b></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Consider the following three statements about link state and distance vector routing protocols, for a large network with 500 network nodes and 4000 links <br/> [S1] The computational overhead in link state protocols is higher than in distance vector protocols. <br/> [S2] A distance vector protocol (with split horizon) avoids persistent routing loops, but not a link state protocol. <br/> [S3] After a topology change, a link state protocol will converge faster than a distance vector protocol. <br/> Which one of the following is correct about S1, S2, and S3?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">S1, S2, and S3 are all true</span>`,
                `<span style="display: inline;">S1, S2, and S3 are all false.</span>`,
                `<span style="display: inline;">S1 and S2 are true, but S3 is false</span>`,
                `<span style="display: inline;">S1 and S3 are true, but S2 is false.</span>`
            ],
            answer: "D",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/1790/gate2014-1-23#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><b><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2014-set-1" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2014 SET-1</a></b> <b><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/computer-network" style="color:#2f6d1a; text-decoration:none" target="_blank">Computer Network</a></b></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">What is IP class and number of sub-networks if the subnet mask is 255.224.0.0?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">Class A, 3</span>`,
                `<span style="display: inline;">Class A, 8</span>`,
                `<span style="display: inline;">Class B, 3</span>`,
                `<span style="display: inline;">Class B, 32</span>`
            ],
            answer: "B",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/43984/isro-2013-43" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><b><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/isro-cse-2013" style="color:#2f6d1a; text-decoration:none" target="_blank">ISRO CSE 2013</a></b> <b><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/computer-network" style="color:#2f6d1a; text-decoration:none" target="_blank">Computer Network</a></b></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">IPv6 does not support which of the following addressing modes?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">Unicast addressing</span>`,
                `<span style="display: inline;">Multicast addressing</span>`,
                `<span style="display: inline;">Broadcast addressing</span>`,
                `<span style="display: inline;">Anycast addressing</span>`
            ],
            answer: "C",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/43982/isro-2013-42" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><b><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/isro-cse-2013" style="color:#2f6d1a; text-decoration:none" target="_blank">ISRO CSE 2013</a></b> <b><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/computer-network" style="color:#2f6d1a; text-decoration:none" target="_blank">Computer Network</a></b></div></div>`
        },
        {
            marks: 2,
            neg: 0.66,
            type: "MCQ",
            text: `<span style="display: inline;">In an IPv4 datagram, the M bit is 0, the value of HLEN is 10, the value of total length is 400 and the fragment offset value is 300. The position of the datagram, the sequence numbers of the first and the last bytes of the payload, respectively are</span>`,
            image: "",
            options: [
                `<span style="display: inline;">Last fragment, 2400 and 2789</span>`,
                `<span style="display: inline;">First fragment, 2400 and 2759</span>`,
                `<span style="display: inline;">Last fragment, 2400 and 2759</span>`,
                `<span style="display: inline;">Middle fragment, 300 and 689</span>`
            ],
            answer: "C",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/1548/gate2013-37#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><b><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2013" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2013</a></b> <b><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/computer-network" style="color:#2f6d1a; text-decoration:none" target="_blank">Computer Network</a></b></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Assume that source S and destination D are connected through two intermediate routers labeled R. Determine how many times each packet has to visit the network layer and the data link layer during a transmission from S to D. <br/><img src="images/twt-cn-network-layer/q14.jpg"/></span>`,
            image: "",
            options: [
                `<span style="display: inline;">Network layer - 4 times and Data link layer - 4 times</span>`,
                `<span style="display: inline;">Network layer - 4 times and Data link layer - 3 times</span>`,
                `<span style="display: inline;">Network layer - 4 times and Data link layer - 6 times</span>`,
                `<span style="display: inline;">Network layer - 2 times and Data link layer - 6 times</span>`
            ],
            answer: "C",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/1436/gate2013-14#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><b><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2013" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2013</a></b> <b><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/computer-network" style="color:#2f6d1a; text-decoration:none" target="_blank">Computer Network</a></b></div></div>`
        },
        {
            marks: 2,
            neg: 0.66,
            type: "MCQ",
            text: `<span style="display: inline;">An Internet Service Provider (ISP) has the following chunk of CIDR-based IP addresses available with it: 245.248.128.0/20. The ISP wants to give half of this chunk of addresses to Organization A, and a quarter to Organization B, while retaining the remaining with itself. Which of the following is a valid allocation of addresses to A and B?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">245.248.136.0/21 and 245.248.128.0/22</span>`,
                `<span style="display: inline;">245.248.128.0/21 and 245.248.128.0/22</span>`,
                `<span style="display: inline;">245.248.132.0/22 and 245.248.132.0/21</span>`,
                `<span style="display: inline;">245.248.136.0/24 and 245.248.132.0/21</span>`
            ],
            answer: "A",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/1752/gate2012-34#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><b><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2012" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2012</a></b> <b><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/computer-network" style="color:#2f6d1a; text-decoration:none" target="_blank">Computer Network</a></b></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">In the IPv4 addressing format, the number of networks allowed under Class C addresses is</span>`,
            image: "",
            options: [
                `<span style="display: inline;"><span>\\( 2^{14} \\)</span></span>`,
                `<span style="display: inline;"><span>\\( 2^{7} \\)</span></span>`,
                `<span style="display: inline;"><span>\\( 2^{21} \\)</span></span>`,
                `<span style="display: inline;"><span>\\( 2^{24} \\)</span></span>`
            ],
            answer: "C",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/1606/gate2012-23#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><b><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2012" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2012</a></b> <b><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/computer-network" style="color:#2f6d1a; text-decoration:none" target="_blank">Computer Network</a></b></div></div>`
        }
    ]
});

registerTest({
    series: "cse-gate-2027",
    name: "TWT-Computer Network(Network Layer-V)",
    date: "oct 20, 2026",
    topicsCovered: "Distance Vector Routing, Subnet Masking & Addressing, ARP & VLAN, TTL Field, Default Gateway",
    questions: [
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Lightweight Directory Access protocol is used for</span>`,
            image: "",
            options: [
                `<span style="display: inline;">Routing the packets</span>`,
                `<span style="display: inline;">Authentication</span>`,
                `<span style="display: inline;">obtaining IP address</span>`,
                `<span style="display: inline;">domain name resolving</span>`
            ],
            answer: "B",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/18149/isro2011-69" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><b><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/isro-cse-2011" style="color:#2f6d1a; text-decoration:none" target="_blank">ISRO CSE 2011</a></b> <b><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/computer-network" style="color:#2f6d1a; text-decoration:none" target="_blank">Computer Network</a></b></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">The broadcast address for IP network 172.16.0.0 with subnet mask 255.255.0.0 is</span>`,
            image: "",
            options: [
                `<span style="display: inline;">172.16.0.255</span>`,
                `<span style="display: inline;">172.16.255.255</span>`,
                `<span style="display: inline;">255.255.255.255</span>`,
                `<span style="display: inline;">172.255.255.255</span>`
            ],
            answer: "B",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/51337/isro2011-45" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><b><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/isro-cse-2011" style="color:#2f6d1a; text-decoration:none" target="_blank">ISRO CSE 2011</a></b> <b><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/computer-network" style="color:#2f6d1a; text-decoration:none" target="_blank">Computer Network</a></b></div></div>`
        },
        {
            marks: 2,
            neg: 0.66,
            type: "MCQ",
            text: `<span style="display: inline;">Consider a network with five nodes, N1 to N5, as shown below <br/><img src="images/twt-cn-network-layer/20111_q54.jpg"/> <br/> The network uses a Distance Vector Routing protocol. Once the routes have stabilized, the distance vectors at different nodes are as following. N1: (0, 1, 7, 8, 4) N2: (1, 0, 6, 7, 3) N3: (7, 6, 0, 2, 6) N4: (8, 7, 2, 0, 4) N5: (4, 3, 6, 4, 0) Each distance vector is the distance of the best known path at the instance to nodes, N1 to N5, where the distance to itself is 0. Also, all links are symmetric and the cost is identical in both directions. In each round, all nodes exchange their distance vectors with their respective neighbors. Then all nodes update their distance vectors. In between two rounds, any change in cost of a link will cause the two incident nodes to change only that entry in their distance vectors. <br/><br/>After the update in the previous question, the link N1-N2 goes down. N2 will reflect this change immediately in its distance vector cost as, <span>\\( \\infty \\)</span>. After the NEXT ROUND of update, what will be the cost to N1 in the distance vector of N3?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">3</span>`,
                `<span style="display: inline;">9</span>`,
                `<span style="display: inline;">10</span>`,
                `<span style="display: inline;">0</span>`
            ],
            answer: "C",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/43317/gate2011-53#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><b><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2011" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2011</a></b> <b><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/computer-network" style="color:#2f6d1a; text-decoration:none" target="_blank">Computer Network</a></b></div></div>`
        },
        {
            marks: 2,
            neg: 0.66,
            type: "MCQ",
            text: `<span style="display: inline;">Consider a network with five nodes, N1 to N5, as shown below <br/><img src="images/twt-cn-network-layer/20111_q54.jpg"/> <br/> The network uses a Distance Vector Routing protocol. Once the routes have stabilized, the distance vectors at different nodes are as following. N1: (0, 1, 7, 8, 4) N2: (1, 0, 6, 7, 3) N3: (7, 6, 0, 2, 6) N4: (8, 7, 2, 0, 4) N5: (4, 3, 6, 4, 0) Each distance vector is the distance of the best known path at the instance to nodes, N1 to N5, where the distance to itself is 0. Also, all links are symmetric and the cost is identical in both directions. In each round, all nodes exchange their distance vectors with their respective neighbors. Then all nodes update their distance vectors. In between two rounds, any change in cost of a link will cause the two incident nodes to change only that entry in their distance vectors. <br/><br/> The cost of link N2-N3 reduces to 2(in both directions). After the next round of updates, what will be the new distance vector at node, N3?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">(3. 2, 0, 2, 5)</span>`,
                `<span style="display: inline;">(3, 2, 0, 2, 6)</span>`,
                `<span style="display: inline;">(7, 2, 0, 2, 5)</span>`,
                `<span style="display: inline;">(7, 2, 0, 2, 6)</span>`
            ],
            answer: "A",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/2160/gate2011-52#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><b><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2011" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2011</a></b> <b><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/computer-network" style="color:#2f6d1a; text-decoration:none" target="_blank">Computer Network</a></b></div></div>`
        },
        {
            marks: 2,
            neg: 0.66,
            type: "MCQ",
            text: `<span style="display: inline;">Consider a network with 6 routers R1 to R6 connected with links having weights as shown in the following diagram <br/><img src="images/twt-cn-network-layer/20101_q54.jpg"/><br/>Suppose the weights of all unused links in the previous question are changed to 2 and the distance vector algorithm is used again until all routing tables stabilize. How many links will now remain unused?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">0</span>`,
                `<span style="display: inline;">1</span>`,
                `<span style="display: inline;">2</span>`,
                `<span style="display: inline;">3</span>`
            ],
            answer: "B",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/43326/gate2010-55#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><b><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2010" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2010</a></b> <b><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/computer-network" style="color:#2f6d1a; text-decoration:none" target="_blank">Computer Network</a></b></div></div>`
        },
        {
            marks: 2,
            neg: 0.66,
            type: "MCQ",
            text: `<span style="display: inline;">Consider a network with 6 routers R1 to R6 connected with links having weights as shown in the following diagram <br/><img src="images/twt-cn-network-layer/20101_q54.jpg"/><br/> All the routers use the distance vector based routing algorithm to update their routing tables. Each router starts with its routing table initialized to contain an entry for each neighbour with the weight of the respective connecting link. After all the routing tables stabilize, how many links in the network will never be used for carrying any data?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">4</span>`,
                `<span style="display: inline;">3</span>`,
                `<span style="display: inline;">2</span>`,
                `<span style="display: inline;">1</span>`
            ],
            answer: "C",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/2362/gate2010-54#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><b><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2010" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2010</a></b> <b><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/computer-network" style="color:#2f6d1a; text-decoration:none" target="_blank">Computer Network</a></b></div></div>`
        },
        {
            marks: 2,
            neg: 0.66,
            type: "MCQ",
            text: `<span style="display: inline;">Suppose computers A and B have IP addresses 10.105.1.113 and 10.105.1.91 respectively and they both use the same net mask N. Which of the values of N given below should not be used if A and B should belong to the same network?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">255.255.255.0</span>`,
                `<span style="display: inline;">255.255.255.128</span>`,
                `<span style="display: inline;">255.255.255.192</span>`,
                `<span style="display: inline;">255.255.255.224</span>`
            ],
            answer: "D",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/2349/gate2010-47#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><b><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2010" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2010</a></b> <b><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/computer-network" style="color:#2f6d1a; text-decoration:none" target="_blank">Computer Network</a></b></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">One of the header fields in an IP datagram is the Time to Live (TTL) field. Which of the following statements best explains the need for this field?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">It can be used to prioritize packets</span>`,
                `<span style="display: inline;">It can be used to reduce delays</span>`,
                `<span style="display: inline;">It can be used to optimize throughput</span>`,
                `<span style="display: inline;">It can be used to prevent packet looping</span>`
            ],
            answer: "D",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/2188/gate2010-15#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><b><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2010" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2010</a></b> <b><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/computer-network" style="color:#2f6d1a; text-decoration:none" target="_blank">Computer Network</a></b></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">What is the primary purpose of a VLAN?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">Demonstrating the proper layout for a network</span>`,
                `<span style="display: inline;">Simulating a network</span>`,
                `<span style="display: inline;">To create a virtual private network</span>`,
                `<span style="display: inline;">Segmenting a network inside a switch or device</span>`
            ],
            answer: "D",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/48029/isro2009-5" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><b><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/isro-cse-2009" style="color:#2f6d1a; text-decoration:none" target="_blank">ISRO CSE 2009</a></b> <b><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/computer-network" style="color:#2f6d1a; text-decoration:none" target="_blank">Computer Network</a></b></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">The address resolution protocol (ARP) is used for</span>`,
            image: "",
            options: [
                `<span style="display: inline;">Finding the IP address from the DNS</span>`,
                `<span style="display: inline;">Finding the IP address of the default gateway</span>`,
                `<span style="display: inline;">Finding the IP address that corresponds to a MAC address</span>`,
                `<span style="display: inline;">Finding the MAC address that corresponds to an IP address</span>`
            ],
            answer: "D",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/48027/isro2009-3" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><b><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/isro-cse-2009" style="color:#2f6d1a; text-decoration:none" target="_blank">ISRO CSE 2009</a></b> <b><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/computer-network" style="color:#2f6d1a; text-decoration:none" target="_blank">Computer Network</a></b></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">The subnet mask for a particular network is 255.255.31.0. Which of the following pairs of IP addresses could belong to this network?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">172.57.88.62 and 172.56.87.23</span>`,
                `<span style="display: inline;">10.35.28.2 and 10.35.29.4</span>`,
                `<span style="display: inline;">191.203.31.87 and 191.234.31.88</span>`,
                `<span style="display: inline;">128.8.129.43 and 128.8.161.55</span>`
            ],
            answer: "D",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/965/gate2003-82-isro2009-1" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><b><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/isro-cse-2009" style="color:#2f6d1a; text-decoration:none" target="_blank">ISRO CSE 2009</a></b> <b><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/computer-network" style="color:#2f6d1a; text-decoration:none" target="_blank">Computer Network</a></b></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">The network 198.78.41.0 is a</span>`,
            image: "",
            options: [
                `<span style="display: inline;">Class A network</span>`,
                `<span style="display: inline;">Class B network</span>`,
                `<span style="display: inline;">Class C network</span>`,
                `<span style="display: inline;">Class D network</span>`
            ],
            answer: "C",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/49913/isro2008-32" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><b><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/isro-cse-2008" style="color:#2f6d1a; text-decoration:none" target="_blank">ISRO CSE 2008</a></b> <b><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/computer-network" style="color:#2f6d1a; text-decoration:none" target="_blank">Computer Network</a></b></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">On a LAN ,where are IP datagrams transported?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">In the LAN header</span>`,
                `<span style="display: inline;">In the application field</span>`,
                `<span style="display: inline;">In the information field of the LAN frame</span>`,
                `<span style="display: inline;">After the TCP header</span>`
            ],
            answer: "C",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/17270/isro2008-4" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><b><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/isro-cse-2008" style="color:#2f6d1a; text-decoration:none" target="_blank">ISRO CSE 2008</a></b> <b><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/computer-network" style="color:#2f6d1a; text-decoration:none" target="_blank">Computer Network</a></b></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">The subnet mask 255.255.255.192</span>`,
            image: "",
            options: [
                `<span style="display: inline;">extends the network portion to 16 bits</span>`,
                `<span style="display: inline;">extends the network portion to 26 bits</span>`,
                `<span style="display: inline;">extends the network portion to 36 bits</span>`,
                `<span style="display: inline;">has no effect on the network portion of an IP address</span>`
            ],
            answer: "B",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/49665/isro2008-3" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><b><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/isro-cse-2008" style="color:#2f6d1a; text-decoration:none" target="_blank">ISRO CSE 2008</a></b> <b><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/computer-network" style="color:#2f6d1a; text-decoration:none" target="_blank">Computer Network</a></b></div></div>`
        },
        {
            marks: 2,
            neg: 0.66,
            type: "MCQ",
            text: `<span style="display: inline;">Host X has IP address 192.168.1.97 and is connected through two routers R1 and R2 to another host Y with IP address 192.168.1.80. Router R1 has IP addresses 192.168.1.135 and 192.168.1.110. R2 has IP addresses 192.168.1.67 and 192.168.1.155. The netmask used in the network is 255.255.255.224.<br/> Which IP address should X configure its gateway as?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">192.168.1.67</span>`,
                `<span style="display: inline;">192.168.1.110</span>`,
                `<span style="display: inline;">192.168.1.135</span>`,
                `<span style="display: inline;">192.168.1.155</span>`
            ],
            answer: "B",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/3409/gate2008-it-85" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><b><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-it-2008" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE IT 2008</a></b> <b><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/computer-network" style="color:#2f6d1a; text-decoration:none" target="_blank">Computer Network</a></b></div></div>`
        }
    ]
});


registerTest({
    series: "cse-gate-2027",
    name: "TWT-Computer Network(Network Layer-VI)",
    date: "oct 20, 2026",
    topicsCovered: "Distance Vector Routing, Subnetting & Masking, Centralized Binary Tree Routing, Class B Subnets, Multicast & 802.11",
    questions: [
        {
            marks: 2,
            neg: 0.66,
            type: "MCQ",
            text: `<span style="display: inline;">Host X has IP address 192.168.1.97 and is connected through two routers R1 and R2 to another host Y with IP address 192.168.1.80. Router R1 has IP addresses 192.168.1.135 and 192.168.1.110. R2 has IP addresses 192.168.1.67 and 192.168.1.155. The netmask used in the network is 255.255.255.224.<br/> Given the information above, how many distinct subnets are guaranteed to already exist in the network?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">1</span>`,
                `<span style="display: inline;">2</span>`,
                `<span style="display: inline;">3</span>`,
                `<span style="display: inline;">6</span>`
            ],
            answer: "C",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/3408/gate2008-it-84" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><b><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-it-2008" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE IT 2008</a></b> <b><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/computer-network" style="color:#2f6d1a; text-decoration:none" target="_blank">Computer Network</a></b></div></div>`
        },
        {
            marks: 2,
            neg: 0.66,
            type: "MCQ",
            text: `<span style="display: inline;">Two popular routing algorithms are Distance Vector(DV) and Link State (LS) routing. Which of the following are true?<br/> (S1): Count to infinity is a problem only with DV and not LS routing<br/> (S2): In LS, the shortest path algorithm is run only at one node<br/> (S3): In DV, the shortest path algorithm is run only at one node<br/> (S4): DV requires lesser number of network messages than LS<br/></span>`,
            image: "",
            options: [
                `<span style="display: inline;">S1, S2 and S4 only</span>`,
                `<span style="display: inline;">S1, S3 and S4 only</span>`,
                `<span style="display: inline;">S2 and S3 only</span>`,
                `<span style="display: inline;">S1 and S4 only</span>`
            ],
            answer: "D",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/3381/gate2008-it-67" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><b><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-it-2008" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE IT 2008</a></b> <b><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/computer-network" style="color:#2f6d1a; text-decoration:none" target="_blank">Computer Network</a></b></div></div>`
        },
        {
            marks: 2,
            neg: 0.66,
            type: "MCQ",
            text: `<span style="display: inline;">If a class B network on the Internet has a subnet mask of 255.255.248.0, what is the maximum number of hosts per subnet?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">1022</span>`,
                `<span style="display: inline;">1023</span>`,
                `<span style="display: inline;">2046</span>`,
                `<span style="display: inline;">2047</span>`
            ],
            answer: "C",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/480/gate2008-57#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><b><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2008" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2008</a></b> <b><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/computer-network" style="color:#2f6d1a; text-decoration:none" target="_blank">Computer Network</a></b></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">When a host on network A sends a message to a host on network B, which address does the router look at?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">Port</span>`,
                `<span style="display: inline;">IP</span>`,
                `<span style="display: inline;">Physical</span>`,
                `<span style="display: inline;">Subnet mask</span>`
            ],
            answer: "B",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/49646/isro2007-75" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><b><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/isro-cse-2007" style="color:#2f6d1a; text-decoration:none" target="_blank">ISRO CSE 2007</a></b> <b><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/computer-network" style="color:#2f6d1a; text-decoration:none" target="_blank">Computer Network</a></b></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">IEEE 802.11 is standard for</span>`,
            image: "",
            options: [
                `<span style="display: inline;">Ethernet</span>`,
                `<span style="display: inline;">Bluetooth</span>`,
                `<span style="display: inline;">Broadband Wireless</span>`,
                `<span style="display: inline;">Wireless LANs</span>`
            ],
            answer: "D",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/49645/isro2007-74" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><b><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/isro-cse-2007" style="color:#2f6d1a; text-decoration:none" target="_blank">ISRO CSE 2007</a></b> <b><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/computer-network" style="color:#2f6d1a; text-decoration:none" target="_blank">Computer Network</a></b></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Range of IP Address from 224.0.0.0 to 239.255.255.255 are</span>`,
            image: "",
            options: [
                `<span style="display: inline;">Reserved for loopback</span>`,
                `<span style="display: inline;">Reserved for broadcast</span>`,
                `<span style="display: inline;">Used for multicast packets</span>`,
                `<span style="display: inline;">Reserved for future addressing</span>`
            ],
            answer: "C",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/49643/isro2007-73" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><b><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/isro-cse-2007" style="color:#2f6d1a; text-decoration:none" target="_blank">ISRO CSE 2007</a></b> <b><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/computer-network" style="color:#2f6d1a; text-decoration:none" target="_blank">Computer Network</a></b></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">If there are five routers and six networks in intranet using link state routing, how many routing tables are there?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">1</span>`,
                `<span style="display: inline;">5</span>`,
                `<span style="display: inline;">6</span>`,
                `<span style="display: inline;">11</span>`
            ],
            answer: "B",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/49499/isro2007-26" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><b><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/isro-cse-2007" style="color:#2f6d1a; text-decoration:none" target="_blank">ISRO CSE 2007</a></b> <b><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/computer-network" style="color:#2f6d1a; text-decoration:none" target="_blank">Computer Network</a></b></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">A group of 15 routers is interconnected in a centralized complete binary tree with a router at each tree node. Router i communicates with router j by sending a message to the root of the tree. The root then sends the message back down to router j. The mean number of hops per message, assuming all possible router pairs are equally likely is</span>`,
            image: "",
            options: [
                `<span style="display: inline;">3</span>`,
                `<span style="display: inline;">4.26</span>`,
                `<span style="display: inline;">4.53</span>`,
                `<span style="display: inline;">5.26</span>`
            ],
            answer: "C",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/3508/gate2007-it-63" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><b><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-it-2007" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE IT 2007</a></b> <b><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/computer-network" style="color:#2f6d1a; text-decoration:none" target="_blank">Computer Network</a></b></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">For the network given in the figure below, the routing tables of the four nodes A, E, D and G are shown. Suppose that F has estimated its delay to its neighbors, A, E, D and G as 8, 10, 12 and 6 msecs respectively and updates its routing table using distance vector routing technique.<br/><img src="images/twt-cn-network-layer/20072_q60.jpg"/><br/><span>\\( \\overset{\\textbf{Routing Table of A}}{\\begin{array}{|c|r|}\\hline \\text{A}&amp;0\\\\ \\hline \\text{B}&amp;40\\\\ \\hline \\text{C}&amp;14\\\\ \\hline \\text{D}&amp;17\\\\ \\hline \\text{E}&amp;21\\\\ \\hline \\text{F}&amp;9\\\\ \\hline \\text{G}&amp;24\\\\ \\hline \\end{array}}\\qquad \\overset{\\textbf{Routing Table of D}}{\\begin{array}{|c|r|}\\hline \\text{A}&amp;20\\\\ \\hline \\text{B}&amp;8\\\\ \\hline \\text{C}&amp;30\\\\ \\hline \\text{D}&amp;0\\\\ \\hline \\text{E}&amp;14\\\\ \\hline \\text{F}&amp;7\\\\ \\hline \\text{G}&amp;22\\\\ \\hline \\end{array}} \\qquad \\overset{\\textbf{Routing Table of E}}{\\begin{array}{|c|r|}\\hline \\text{A}&amp;24\\\\ \\hline \\text{B}&amp;27\\\\ \\hline \\text{C}&amp;7\\\\ \\hline \\text{D}&amp;20\\\\ \\hline \\text{E}&amp;0\\\\ \\hline \\text{F}&amp;11\\\\ \\hline \\text{G}&amp;22\\\\ \\hline \\end{array}}\\qquad \\overset{\\textbf{Routing Table of G}}{\\begin{array}{|c|r|}\\hline \\text{A}&amp;21\\\\ \\hline \\text{B}&amp;24\\\\ \\hline \\text{C}&amp;22\\\\ \\hline \\text{D}&amp;19\\\\ \\hline \\text{E}&amp;22\\\\ \\hline \\text{F}&amp;10\\\\ \\hline \\text{G}&amp;0\\\\ \\hline \\end{array}} \\)</span><br/>Which one of the following option represents the updated routing table of F?</span>`,
            image: "",
            options: [
                `<span style="display: inline;"><span>\\( \\begin{array}{|c|r|} \\hline \\text {A} &amp; \\text{8} \\\\\\hline \\text {B} &amp; \\text{20} \\\\\\hline \\text{C} &amp; \\text{17} \\\\\\hline \\text{D} &amp; \\text{12} \\\\\\hline \\text {E} &amp; \\text{10} \\\\\\hline \\text {F} &amp; \\text{0} \\\\\\hline \\text{G} &amp; \\text{6} \\\\\\hline \\end{array} \\)</span></span>`,
                `<span style="display: inline;"><span>\\( \\begin{array}{|c|r|} \\hline \\text {A} &amp; \\text{21} \\\\\\hline \\text {B} &amp; \\text{8} \\\\\\hline \\text{C} &amp; \\text{7} \\\\\\hline \\text{D} &amp; \\text{19} \\\\\\hline \\text {E} &amp; \\text{14} \\\\\\hline \\text {F} &amp; \\text{0 } \\\\\\hline \\text{G} &amp; \\text{22} \\\\\\hline \\end{array} \\)</span></span>`,
                `<span style="display: inline;"><span>\\( \\begin{array}{|c|r|} \\hline \\text {A} &amp; \\text{8} \\\\\\hline \\text {B} &amp; \\text{20} \\\\\\hline \\text{C} &amp; \\text{17} \\\\\\hline \\text{D} &amp; \\text{12} \\\\\\hline \\text {E} &amp; \\text{10} \\\\\\hline \\text {F} &amp; \\text{16} \\\\\\hline \\text{G} &amp; \\text{6} \\\\\\hline \\end{array} \\)</span></span>`,
                `<span style="display: inline;"><span>\\( \\begin{array}{|c|r|} \\hline \\text {A} &amp; \\text{8} \\\\\\hline \\text {B} &amp; \\text{8} \\\\\\hline \\text{C} &amp; \\text{7} \\\\\\hline \\text{D} &amp; \\text{12} \\\\\\hline \\text {E} &amp; \\text{10} \\\\\\hline \\text {F} &amp; \\text{0} \\\\\\hline \\text{G} &amp; \\text{6} \\\\\\hline \\end{array} \\)</span></span>`
            ],
            answer: "A",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/3504/gate2007-it-60" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><b><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-it-2007" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE IT 2007</a></b> <b><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/computer-network" style="color:#2f6d1a; text-decoration:none" target="_blank">Computer Network</a></b></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">The address of a class B host is to be split into subnets with a 6-bit subnet number. What is the maximum number of subnets and the maximum number of hosts in each subnet?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">62 subnets and 262142 hosts</span>`,
                `<span style="display: inline;">64 subnets and 262142 hosts</span>`,
                `<span style="display: inline;">62 subnets and 1022 hosts.</span>`,
                `<span style="display: inline;">64 subnets and 1024 hosts.</span>`
            ],
            answer: "C",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/1265/gate2007-67#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><b><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2007" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2007</a></b> <b><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/computer-network" style="color:#2f6d1a; text-decoration:none" target="_blank">Computer Network</a></b></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">A subnetted Class B network has the following broadcast address: 144.16.95.255 <br/> Its subnet mask</span>`,
            image: "",
            options: [
                `<span style="display: inline;">is necessarily 255.255.224.0</span>`,
                `<span style="display: inline;">is necessarily 255.255.240.0</span>`,
                `<span style="display: inline;">is necessarily 255.255.248.0</span>`,
                `<span style="display: inline;">could be any one of 255.255.224.0, 255.255.240.0,255.255.248.0</span>`
            ],
            answer: "D",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/3614/gate2006-it-70" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><b><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-it-2006" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE IT 2006</a></b> <b><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/computer-network" style="color:#2f6d1a; text-decoration:none" target="_blank">Computer Network</a></b></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">A router uses the following routing table:<br/> <span>\\( \\begin{array}{|l|l|l|} \\hline \\textbf {Destination} &amp; \\textbf { Mask} &amp; \\textbf{Interface} \\\\\\hline \\text {144.16.0.0} &amp; \\text{255.255.0.0} &amp; \\text{eth$0$} \\\\\\hline\\text {144.16.64.0} &amp; \\text{255.255.224.0} &amp; \\text{eth$1$} \\\\\\hline\\text {144.16.68.0} &amp; \\text{255.255.255.0} &amp; \\text{eth$2$}\\\\\\hline \\text {144.16.68.64} &amp; \\text{255.255.255.224} &amp; \\text{eth$3$}\\\\\\hline\\end{array} \\)</span><br/> Packet bearing a destination address 144.16.68.117 arrives at the router. On which interface will it be forwarded?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">eth0</span>`,
                `<span style="display: inline;">eth1</span>`,
                `<span style="display: inline;">eth2</span>`,
                `<span style="display: inline;">eth3</span>`
            ],
            answer: "C",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/3607/gate2006-it-63-isro2015-57" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><b><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-it-2006" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE IT 2006</a></b> <b><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/computer-network" style="color:#2f6d1a; text-decoration:none" target="_blank">Computer Network</a></b></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Two computers C1 and C2 are configured as follows. C1 has IP address 203. 197.2.53 and netmask 255.255. 128.0. C2 has IP address 203.197.75.201 and netmask 255.255.192.0. Which one of the following statements is true?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">C1 and C2 both assume they are on the same network</span>`,
                `<span style="display: inline;">C2 assumes C1 is on same network, but C1 assumes C2 is on a different network</span>`,
                `<span style="display: inline;">C1 assumes C2 is on same network, but C2 assumes C1 is on a different network</span>`,
                `<span style="display: inline;">C1 and C2 both assume they are on different networks</span>`
            ],
            answer: "C",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/1821/gate2006-45#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><b><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2006" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2006</a></b> <b><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/computer-network" style="color:#2f6d1a; text-decoration:none" target="_blank">Computer Network</a></b></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">For which one of the following reason does Internet Protocol (IP) use the timeto-live (TTL) field in the IP datagram header?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">Ensure packets reach destination within that time</span>`,
                `<span style="display: inline;">Discard packets that reach later than that time</span>`,
                `<span style="display: inline;">Prevent packets from looping indefinitely</span>`,
                `<span style="display: inline;">Limit the time for which a packet gets queued in intermediate routers</span>`
            ],
            answer: "C",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/884/gate2006-5#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><b><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2006" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2006</a></b> <b><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/computer-network" style="color:#2f6d1a; text-decoration:none" target="_blank">Computer Network</a></b></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Consider a simple graph with unit edge costs. Each node in the graph represents a router. Each node maintains a routing table indicating the next hop router to be used to relay a packet to its destination and the cost of the path to the destination through that router. Initially, the routing table is empty. The routing table is synchronously updated as follows. In each updated interval, three tasks are performed.<br/><br/> i. A node determines whether its neighbors in the graph are accessible. If so, it sets the tentative cost to each accessible neighbor as 1. Otherwise, the cost is set to <span>\\( \\infty \\)</span>.<br/> ii. From each accessible neighbor, it gets the costs to relay to other nodes via that neighbor (as the next hop).<br/> iii. Each node updates its routing table based on the information received in the previous two steps by choosing the minimum cost. <br/> <br/><img src="images/twt-cn-network-layer/20052_q85a.jpg"/><br/> Continuing from the earlier problem, suppose at some time t, when the costs have stabilized, node A goes down. The cost from node F to node A at time (t+100) is :</span>`,
            image: "",
            options: [
                `<span style="display: inline;">&gt;100 but finite</span>`,
                `<span style="display: inline;"><span>\\( \\infty \\)</span></span>`,
                `<span style="display: inline;">3</span>`,
                `<span style="display: inline;">&gt;3 and <span>\\( \\leq 100 \\)</span></span>`
            ],
            answer: "A",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/3859/gate2005-it-85b" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><b><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-it-2005" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE IT 2005</a></b> <b><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/computer-network" style="color:#2f6d1a; text-decoration:none" target="_blank">Computer Network</a></b></div></div>`
        }
    ]
});


registerTest({
    series: "cse-gate-2027",
    name: "TWT-Computer Network(Network Layer-VII)",
    date: "oct 20, 2026",
    topicsCovered: "Routing Tables & Distance Vector, Spanning Tree Bridges, ARP & IP Headers, IP Fragmentation, Subnet Masks",
    questions: [
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Consider a simple graph with unit edge costs. Each node in the graph represents a router. Each node maintains a routing table indicating the next hop router to be used to relay a packet to its destination and the cost of the path to the destination through that router. Initially, the routing table is empty. The routing table is synchronously updated as follows. In each updated interval, three tasks are performed.<br/><br/> i. A node determines whether its neighbors in the graph are accessible. If so, it sets the tentative cost to each accessible neighbor as 1. Otherwise, the cost is set to <span>\\( \\infty \\)</span>.<br/> ii. From each accessible neighbor, it gets the costs to relay to other nodes via that neighbor (as the next hop).<br/> iii. Each node updates its routing table based on the information received in the previous two steps by choosing the minimum cost. <br/> <br/><img src="images/twt-cn-network-layer/20052_q85a.jpg"/><br/> For the graph given above, possible routing tables for various nodes after they have stabilized, are shown in the following options. Identify the correct table.</span>`,
            image: "",
            options: [
                `<span style="display: inline;"><span>\\( \\overset{\\text{Table for node A}}{\\begin{array}{|c|c|c|} \\hline \\text {A} &amp; \\text{-} &amp;\\text{-} \\\\\\hline \\text{B}&amp; \\text{B} &amp; \\text{1} \\\\\\hline \\text{C}&amp; \\text{C} &amp; \\text{1} \\\\\\hline \\text{D}&amp; \\text{B} &amp; \\text{3} \\\\\\hline \\text{E}&amp; \\text{C} &amp; \\text{3} \\\\\\hline \\text{F}&amp; \\text{C} &amp; \\text{4} \\\\\\hline \\end{array}} \\)</span></span>`,
                `<span style="display: inline;"><span>\\( \\overset{\\text{Table for node C}}{\\begin{array}{|c|c|c|} \\hline \\text {A} &amp; \\text{A} &amp;\\text{1} \\\\\\hline \\text{B}&amp; \\text{B} &amp; \\text{1} \\\\\\hline \\text{C}&amp; \\text{-} &amp; \\text{-} \\\\\\hline \\text{D}&amp; \\text{D} &amp; \\text{1} \\\\\\hline \\text{E}&amp; \\text{E} &amp; \\text{1} \\\\\\hline \\text{F}&amp; \\text{E} &amp; \\text{3} \\\\\\hline \\end{array}} \\)</span></span>`,
                `<span style="display: inline;"><span>\\( \\overset{\\text{Table for node B}}{\\begin{array}{|c|c|c|} \\hline \\text {A} &amp; \\text{A} &amp;\\text{1} \\\\\\hline \\text{B}&amp; \\text{-} &amp; \\text{-} \\\\\\hline \\text{C}&amp; \\text{C} &amp; \\text{1} \\\\\\hline \\text{D}&amp; \\text{D} &amp; \\text{1} \\\\\\hline \\text{E}&amp; \\text{C} &amp; \\text{2} \\\\\\hline \\text{F}&amp; \\text{D} &amp; \\text{2} \\\\\\hline \\end{array}} \\)</span></span>`,
                `<span style="display: inline;"><span>\\( \\overset{\\text{Table for node D}}{\\begin{array}{|c|c|c|} \\hline \\text {A} &amp; \\text{B} &amp;\\text{3} \\\\\\hline \\text{B}&amp; \\text{B} &amp; \\text{1} \\\\\\hline \\text{C}&amp; \\text{C} &amp; \\text{1} \\\\\\hline \\text{D}&amp; \\text{-} &amp; \\text{-} \\\\\\hline \\text{E}&amp; \\text{E} &amp; \\text{1} \\\\\\hline \\text{F}&amp; \\text{F} &amp; \\text{1} \\\\\\hline \\end{array}} \\)</span></span>`
            ],
            answer: "C",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/3858/gate2005-it-85a" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><b><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-it-2005" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE IT 2005</a></b> <b><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/computer-network" style="color:#2f6d1a; text-decoration:none" target="_blank">Computer Network</a></b></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Assume that "host1.mydomain.dom" has an IP address of 145.128.16.8. Which of the following options would be most appropriate as a subsequence of steps in performing the reverse lookup of 145.128.16.8 ? In the following options "NS" is an abbreviation of "nameserver".</span>`,
            image: "",
            options: [
                `<span style="display: inline;">Query a NS for the root domain and then NS for the "dom" domains</span>`,
                `<span style="display: inline;">Directly query a NS for "dom" and then a NS for "mydomain.dom" domains</span>`,
                `<span style="display: inline;">Query a NS for in-addr.arpa and then a NS for 128.145.in-addr.arpa domains</span>`,
                `<span style="display: inline;">Directly query a NS for 145.in-addr.arpa and then a NS for 128.145.in-addr.arpa domains</span>`
            ],
            answer: "C",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/3840/gate2005-it-77" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><b><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-it-2005" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE IT 2005</a></b> <b><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/computer-network" style="color:#2f6d1a; text-decoration:none" target="_blank">Computer Network</a></b></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">A company has a class C network address of 204.204.204.0. It wishes to have three subnets, one with 100 hosts and two with 50 hosts each. Which one of the following options represents a feasible set of subnet address/subnet mask pairs?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">204.204.204.128/255.255.255.192<br/> 204.204.204.0/255.255.255.128<br/> 204.204.204.64/255.255.255.128</span>`,
                `<span style="display: inline;">204.204.204.0/255.255.255.192 <br/> 204.204.204.192/255.255.255.128<br/> 204.204.204.64/255.255.255.128</span>`,
                `<span style="display: inline;">204.204.204.128/255.255.255.128 <br/> 204.204.204.192/255.255.255.192<br/> 204.204.204.224/255.255.255.192</span>`,
                `<span style="display: inline;">204.204.204.128/255.255.255.128 <br/> 204.204.204.64/255.255.255.192<br/> 204.204.204.0/255.255.255.192</span>`
            ],
            answer: "D",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/3839/gate2005-it-76" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><b><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-it-2005" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE IT 2005</a></b> <b><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/computer-network" style="color:#2f6d1a; text-decoration:none" target="_blank">Computer Network</a></b></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Count to infinity is a problem associated with:</span>`,
            image: "",
            options: [
                `<span style="display: inline;">link state routing protocol.</span>`,
                `<span style="display: inline;">distance vector routing protocol</span>`,
                `<span style="display: inline;">DNS while resolving host name</span>`,
                `<span style="display: inline;">TCP for congestion control</span>`
            ],
            answer: "B",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/3775/gate2005-it-29" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><b><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-it-2005" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE IT 2005</a></b> <b><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/computer-network" style="color:#2f6d1a; text-decoration:none" target="_blank">Computer Network</a></b></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">An organization has a class B network and wishes to form subnets for 64 departments. The subnet mask would be:</span>`,
            image: "",
            options: [
                `<span style="display: inline;">255.255.0.0</span>`,
                `<span style="display: inline;">255.255.64.0</span>`,
                `<span style="display: inline;">255.255.128.0</span>`,
                `<span style="display: inline;">255.255.252.0</span>`
            ],
            answer: "D",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/1363/gate2005-27#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><b><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2005" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2005</a></b> <b><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/computer-network" style="color:#2f6d1a; text-decoration:none" target="_blank">Computer Network</a></b></div></div>`
        },
{
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">In a network of LANs connected by bridges, packets are sent from one LAN to another through intermediate bridges. Since more than one path may exist between two LANs, packets may have to be routed through multiple bridges. Why is the spanning tree algorithm used for bridge-routing?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">For shortest path routing between LANs</span>`,
                `<span style="display: inline;">For avoiding loops in the routing paths</span>`,
                `<span style="display: inline;">For fault tolerance</span>`,
                `<span style="display: inline;">For minimizing collisions</span>`
            ],
            answer: "B",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/1362/gate2005-26#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><b><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2005" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2005</a></b> <b><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/computer-network" style="color:#2f6d1a; text-decoration:none" target="_blank">Computer Network</a></b></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">The address resolution protocol (ARP) is used for:</span>`,
            image: "",
            options: [
                `<span style="display: inline;">Finding the IP address from the DNS</span>`,
                `<span style="display: inline;">Finding the IP address of the default gateway</span>`,
                `<span style="display: inline;">Finding the IP address that corresponds to a MAC address</span>`,
                `<span style="display: inline;">Finding the MAC address that corresponds to an IP address</span>`
            ],
            answer: "D",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/1360/gate2005-24#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><b><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2005" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2005</a></b> <b><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/computer-network" style="color:#2f6d1a; text-decoration:none" target="_blank">Computer Network</a></b></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">In the TCP/IP protocol suite, which one of the following is NOT part of the IP header?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">Fragment Offset</span>`,
                `<span style="display: inline;">Source IP address</span>`,
                `<span style="display: inline;">Destination IP address</span>`,
                `<span style="display: inline;">Destination port number</span>`
            ],
            answer: "D",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/3730/gate2004-it-86" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><b><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-it-2004" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE IT 2004</a></b> <b><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/computer-network" style="color:#2f6d1a; text-decoration:none" target="_blank">Computer Network</a></b></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">A host is connected to a Department network which is part of a University network. The University network, in turn, is part of the Internet. The largest network in which the Ethernet address of the host is unique is</span>`,
            image: "",
            options: [
                `<span style="display: inline;">the subnet to which the host belongs</span>`,
                `<span style="display: inline;">the Department network</span>`,
                `<span style="display: inline;">the University network</span>`,
                `<span style="display: inline;">the Internet</span>`
            ],
            answer: "D",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/3668/gate2004-it-27" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><b><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-it-2004" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE IT 2004</a></b> <b><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/computer-network" style="color:#2f6d1a; text-decoration:none" target="_blank">Computer Network</a></b></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">A subnet has been assigned a subnet mask of 255.255.255.192. What is the maximum number of hosts that can belong to this subnet?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">14</span>`,
                `<span style="display: inline;">30</span>`,
                `<span style="display: inline;">62</span>`,
                `<span style="display: inline;">126</span>`
            ],
            answer: "C",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/3667/gate2004-it-26" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><b><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-it-2004" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE IT 2004</a></b> <b><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/computer-network" style="color:#2f6d1a; text-decoration:none" target="_blank">Computer Network</a></b></div></div>`
        },
{
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Consider three IP networks A, B and C. Host HA in network A sends messages each containing 180 bytes of application data to a host HC in network C. The TCP layer prefixes a 20 byte header to the message. This passes through an intermediate net?work B. The maximum packet size, including 20 byte IP header, in each network is <br/><br/> A : 1000 bytes <br/> B : 100 bytes <br/> C : 1000 bytes <br/><br/> The network A and B are connected through a 1 Mbps link, while B and C are connected by a 512 Kbps link (bps = bits per second). <br/><img src="images/twt-cn-network-layer/20041_q56.jpg"/> <br/> Assuming that the packets are correctly delivered, how many bytes, including headers, are delivered to the IP layer at the destination for one application message, in the best case ? Consider only data packets.</span>`,
            image: "",
            options: [
                `<span style="display: inline;">200</span>`,
                `<span style="display: inline;">220</span>`,
                `<span style="display: inline;">240</span>`,
                `<span style="display: inline;">260</span>`
            ],
            answer: "D",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/1052/gate2004-56#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><b><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2004" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2004</a></b> <b><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/computer-network" style="color:#2f6d1a; text-decoration:none" target="_blank">Computer Network</a></b></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">The routing table of a router is shown below: <br/><img src="images/twt-cn-network-layer/20041_q55.jpg"/><br/> On which interface will the router forward packets addressed to destinations 128.75.43.16 and 192.12.17.10 respectively?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">Eth1 and Eth2</span>`,
                `<span style="display: inline;">Eth0 and Eth2</span>`,
                `<span style="display: inline;">Eth0 and Eth3</span>`,
                `<span style="display: inline;">Eth1 and Eth3</span>`
            ],
            answer: "A",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/1051/gate2004-55#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><b><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2004" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2004</a></b> <b><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/computer-network" style="color:#2f6d1a; text-decoration:none" target="_blank">Computer Network</a></b></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Which of the following is NOT true with respect to a transparent bridge and a router?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">Both bridge and router selectively forward data packets</span>`,
                `<span style="display: inline;">A bridge uses IP addresses while a router uses MAC addresses</span>`,
                `<span style="display: inline;">A bridge builds up its routing table by inspecting incoming packets</span>`,
                `<span style="display: inline;">A router can connect between a LAN and a WAN</span>`
            ],
            answer: "B",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/1013/gate2004-16#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><b><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2004" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2004</a></b> <b><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/computer-network" style="color:#2f6d1a; text-decoration:none" target="_blank">Computer Network</a></b></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">The subnet mask for a particular network is 255.255.31.0 Which of the following pairs of IP addresses could belong to this network ?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">172.57.88.62 and 172.56.87.233</span>`,
                `<span style="display: inline;">191.203.31.87 and 191.234.31.88</span>`,
                `<span style="display: inline;">10.35.28.2 and 10.35.29.4</span>`,
                `<span style="display: inline;">128.8.129.43 and 128.8.161.55</span>`
            ],
            answer: "D",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/965/gate2003-82#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><b><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2003" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2003</a></b> <b><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/computer-network" style="color:#2f6d1a; text-decoration:none" target="_blank">Computer Network</a></b></div></div>`
        },
        {
            marks: 1,
            neg: 0.33,
            type: "MCQ",
            text: `<span style="display: inline;">Which of the following assertions is false about the internet Protocol (IP) ?</span>`,
            image: "",
            options: [
                `<span style="display: inline;">It is possible for a computer to have multiple IP addresses</span>`,
                `<span style="display: inline;">IP packets from the same source to the same destination can take different routes in the network</span>`,
                `<span style="display: inline;">IP ensures that a packet is discarded if it is unable to reach its destination within a given number of hopes</span>`,
                `<span style="display: inline;">The packet source cannot set the route of an outgoing packets; the route is determined only by the routing tables in the routers on the way.</span>`
            ],
            answer: "D",
            solution: `<div style="background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;">  <strong style="font-size: 16px; color: #000;">Explanation:</strong><br>  <a href="https://gateoverflow.in/917/gate2003-27#a_list" target="_blank" style="text-decoration: none; color: #2e7bc5; font-size: 15px;">Click here for detail solution by gateoverflow</a><div class="year_sub_chap_link" style="margin-top:5px; font-size:14px;"><b><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/gate-cse-2003" style="color:#2f6d1a; text-decoration:none" target="_blank">GATE CSE 2003</a></b> <b><a class="pp-ctx-link" href="https://practicepaper.in/gate-cse/computer-network" style="color:#2f6d1a; text-decoration:none" target="_blank">Computer Network</a></b></div></div>`
        }
    ]
});
