registerTest({
    "series": "cse-dpp-2027",
    "order": 1,
    "name": "DPP 01 - Computer Networks (IPv4 Addressing & Routing - Part 1)",
    "testLabel": "DPP 01",
    "testType": "DPP",
    "bracket": "IPv4 Addressing & Routing - Part 1",
    "subject": "cn",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "isFree": "true",
    "totalMarks": 10,
    "topicsCovered": "IPv4 Addressing & Routing (Practice Set 1)",
    "questions": [
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>The routing table of a router is shown below:</p><p>\\[<br/>\\begin{array}{|l|l|l|}<br/>\\hline<br/>\\text{Destination} &amp; \\text{Subnet Mask} &amp; \\text{Interface} \\\\<br/>\\hline<br/>140.24.56.0 &amp; 255.255.254.0 &amp; \\text{Eth0} \\\\<br/>\\hline<br/>140.24.56.0 &amp; 255.255.255.128 &amp; \\text{Eth1} \\\\<br/>\\hline<br/>210.18.44.12 &amp; 255.255.255.255 &amp; \\text{Eth3} \\\\<br/>\\hline<br/>\\text{Default} &amp; - &amp; \\text{Eth2} \\\\<br/>\\hline<br/>\\end{array}<br/>\\]</p><p>On which interface will the router forward packets addressed to destinations $140.24.56.70$ and $210.18 .44 .12$ , respectively?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">Eth1 and Eth2<br/></span>",
                "<span style=\"display: inline;\">Eth0 and Eth2<br/></span>",
                "<span style=\"display: inline;\">Eth1 and Eth3<br/></span>",
                "<span style=\"display: inline;\">Eth0 and Eth3</span>"
            ],
            "answer": "C",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"502229\"></a><div itemprop=\"text\">210.18.44.12 perfectly matched with the Eth3 so only C and D need to check<br/> <br/> Eth0 and Eth1 have same ip but different subnet mask out of them one is Supernet of another clearly /23 is Supernet<br/> <br/> So Eth0 is interface with Supernet whenever we want to send to destination we always send to largest match prefix <br/> <br/> 70 -01000110 match mostly with the Eth1 since its subnet mask is /25 so we send to most appropriate which is Eth1<br/> <br/> So Option C is Correct</div><br><br><a href=\"https://gateoverflow.in/500211/go-classes-dpp-cn-routing#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-cn-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/computer-networks\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Computer Networks - IPv4 Addressing & Routing</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>A network contains $6$ routers P1 to P6 interconnected with the following link costs:</p><p> </p><p> </p><p><b id=\"docs-internal-guid-34aff9d9-7fff-0061-70ac-71889775c55e\"><img alt=\"\" height=\"283\" src=\"https://gateoverflow.in/?qa=blob&amp;qa_blobid=2585573194610223333\" width=\"322\"/></b></p><p>Routers exchange information using a distance vector algorithm.<br/><br/>Once routing stabilises, some links do not appear in the forwarding tables.<br/><br/>All such unused link costs are now changed to $1$, and the routing algorithm is executed again until stabilisation.</p><p>After reconvergence, how many links still remain unused?</p></div></span>",
            "image": "https://gateoverflow.in/?qa=blob&qa_blobid=2585573194610223333",
            "options": [],
            "answer": "0",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"500205\"></a><div itemprop=\"text\"><p>P1-P2:<br/><br/>direct 4 vs via P1-P3-P2 $=6+2=8 \\rightarrow$ use direct.<br/><br/>P1-P3:<br/><br/>direct $6 \\rightarrow$ used.<br/><br/>P2-P3:<br/><br/>cost $2 \\rightarrow$ used.<br/><br/>P2-P4:<br/><br/>direct 9 vs via P2-P3-P5-P4 $=2+8+2=12 \\rightarrow$ direct 9 is used.<br/><br/>P4-P5:<br/><br/>cost $2 \\rightarrow$ used.<br/><br/>P5-P6:<br/><br/>cost $3 \\rightarrow$ used.<br/><br/>P4-P6:<br/><br/>direct 5 vs via P4-P5-P6 = $2+3=5$, equal<br/><br/>DV will choose fewer hops → direct<br/><br/>→ so P4-P6 is used.</p><p>→ No Initial unused links<br/><br/>Every edge is optimal.</p><p>Hence no edge cost will be changed.<br/><br/><strong>Final answer: 0</strong></p></div><br><br><a href=\"https://gateoverflow.in/500204/go-classes-dpp-cn-dvr#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-cn-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/computer-networks\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Computer Networks - IPv4 Addressing & Routing</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider a network of $6$ routers, A1 to A6 with link costs as shown in the following diagram:</p><p> </p><p> </p><p><b id=\"docs-internal-guid-e7a4bbf3-7fff-da93-7b69-8add6bf59b0e\"><img alt=\"\" height=\"230\" src=\"https://gateoverflow.in/?qa=blob&amp;qa_blobid=8546678962261885101\" width=\"259\"/></b></p><p>Assume a standard distance vector routing protocol is used.<br/><br/>Initially, some links are not chosen in the routing tables.<br/><br/>Now, all unused link costs are reduced to 3, and the algorithm is allowed to run again until convergence.<br/><br/>How many links remain unused after convergence?</p></div></span>",
            "image": "https://gateoverflow.in/?qa=blob&qa_blobid=8546678962261885101",
            "options": [
                "<span style=\"display: inline;\">$0$<br/></span>",
                "<span style=\"display: inline;\">$1$<br/></span>",
                "<span style=\"display: inline;\">$2$<br/></span>",
                "<span style=\"display: inline;\">$3$</span>"
            ],
            "answer": "A",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"500203\"></a><div itemprop=\"text\"><p>Shortest paths:</p><ul><li>A1 → A2:</li></ul><p>via $\\mathrm{A} 1-\\mathrm{A} 3-\\mathrm{A} 2=4+3=7$ (better than direct 5 ?<br/>No → direct 5 is better.)<br/>So A1-A2 is used.</p><ul><li>$\\mathrm{A} 1 \\rightarrow \\mathrm{~A} 3$ :</li></ul><p>direct $4 \\rightarrow$ used.</p><ul><li>$\\mathrm{A} 2 \\rightarrow \\mathrm{~A} 4$ :</li></ul><p>direct 6 vs via A3-A5-A4?</p><ul><li>A2-A3-A5-A4 = 3 + 10 + 1 = $14 \\rightarrow$ worse</li></ul><p>So A2-A4 is used.</p><ul><li>A3 → A5:</li></ul><p>direct 10 vs via $\\mathrm{A} 3-\\mathrm{A} 2-\\mathrm{A} 4-\\mathrm{A} 5=3+6+1=10$ (equal) → both possible<br/>Typically DV chooses fewer-hop route → so direct A3-A5 is used.</p><ul><li>A4 → A6:</li></ul><p>A4-A5-A6 $=1+2=3$ (better than 7 ) → so edge A4-A6 is unused.</p><p>Thus initially unused links are:</p><ul><li>A4-A6</li></ul><p>Number of unused links $=1$</p><ul><li>A4-A6: $7 \\rightarrow 3$</li></ul><p>Now recompute shortest paths:</p><p>A4 → A6:<br/><br/>direct $=3$<br/>via A5 $=(1+2=3) \\rightarrow$ equal<br/>→ now direct is viable and will be used (DV usually prefers direct link).</p><p>All links now lie on some shortest path.</p><p>Final answer:</p><p><strong>0 links remain unused</strong></p></div><br><br><a href=\"https://gateoverflow.in/500202/go-classes-dpp-cn-dvr#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-cn-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/computer-networks\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Computer Networks - IPv4 Addressing & Routing</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>You are given the IPv4 network <strong>$10.150.0.0/19$</strong>. You need to divide it into equal-sized subnets, each supporting exactly <strong>$1022$ usable host addresses</strong>.</p><p>What is the maximum number of such subnets that can be created while partitioning the entire given address block?</p></div></span>",
            "image": "",
            "options": [],
            "answer": "8",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"499950\"></a><div itemprop=\"text\"><p>We are given the network $10.150.0.0/19$ and need to create multiple subnets where each subnet supports $1022$ usable hosts.</p><p><strong>Step</strong> $\\mathbf{1}:$ <strong>Total addresses in</strong> $\\mathbf{10.150.0.0/19}$</p><p>CIDR prefix $/19$ means,</p><p>$\\text{Total addresses}=2^{32-19}=2^{13}=8192$</p><p>So, the block $10.150.0.0/19$ contains $8192$ addresses, including network and broadcast addresses.</p><p><strong>Step </strong>$\\mathbf{2}:$ <strong>Hosts needed per subnet</strong></p><p>Each subnet must provide:</p><p>$1022\\text{ usable hosts}$</p><p>Let $h$ be the number of host bits per subnet:</p><p>$2^h-2\\geq1022$</p><p>Checking values,</p><p>$h=9\\Rightarrow 2^9=512\\Rightarrow510\\text{ usable (too small)}$</p><p>$h=10\\Rightarrow 2^{10}=1024\\Rightarrow1022\\text{ usable (perfect match)}$</p><p>Therefore,</p><p>$h=10\\Rightarrow32-10=22$</p><p>So each required subnet is a $/22$ network.</p><p><strong>Step </strong>$\\mathbf{3}:$<strong> Number of $\\mathbf{/22}$ subnets from a $\\mathbf{/19}$</strong></p><p>$22-19=3\\text{ subnet bits}$</p><p>$\\text{Number of subnets}=2^3=8$</p><p>$8\\times1024=8192\\Rightarrow\\text{all addresses fully utilized (no wastage)}$</p><p><strong>Final Answer :</strong></p><p>$\\boxed{\\text{Maximum number of subnets}=8}$</p><p>$\\boxed{\\text{Each subnet is }/22\\text{ (1022 usable hosts)}}$</p><p>$\\boxed{\\text{No IP addresses are wasted}}$</p><p>Thus, $10.150.0.0/19$ can be divided into $8$ subnets, each supporting $1022$ usable hosts, with zero wastage.</p></div><br><br><a href=\"https://gateoverflow.in/499881/go-classes-dpp-cn-subnetting#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-cn-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/computer-networks\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Computer Networks - IPv4 Addressing & Routing</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>An IP datagram of $4000 ~\\text{bytes}$ (including $20$-$\\text{byte}$ IP header) passes through a network with $\\text{MTU} = 1500 ~\\text{bytes}$<br/>How many fragments are created, and what is the <strong>total size</strong> (sum of all fragments including headers) after fragmentation?<br/> </p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$3 ~\\text{fragments}, 4020 ~\\text{bytes}$<br/></span>",
                "<span style=\"display: inline;\">$3 ~\\text{fragments}, 4040 ~\\text{bytes}$<br/></span>",
                "<span style=\"display: inline;\">$4 ~\\text{fragments}, 4040 ~\\text{bytes}$<br/></span>",
                "<span style=\"display: inline;\">$4 ~\\text{fragments}, 4060 ~\\text{bytes}$</span>"
            ],
            "answer": "B",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"499412\"></a><div itemprop=\"text\"><p>Given:</p><p>Original datagram size:<br/>\\[<br/>4000 \\text{ bytes (including 20-byte IP header)}<br/>\\]</p><p>Payload size:<br/>\\[<br/>4000 - 20 = 3980 \\text{ bytes}<br/>\\]</p><p>MTU constraint:<br/>\\[<br/>1500 \\text{ bytes} \\Rightarrow \\text{(header + data)} \\le 1500 \\text{ bytes}<br/>\\]</p><p>Each fragment gets a fresh 20-byte IP Header</p><p>Fragment offset requirement: Non-last fragment data size must be a multiple of 8 bytes</p><p>Maximum data per fragment:<br/>\\[<br/>1500 - 20 = 1480 \\text{ bytes}<br/>\\]</p><p>Check alignment:<br/>\\[<br/>\\frac{1480}{8} = 185 \\quad \\text{(integer → valid)}<br/>\\]</p><p>So each of the first fragments will carry 1480 bytes of data.</p><hr/><p>Fragmentation:</p><p>Fragment 1 data = 1480 bytes </p><p>Fragment 2 data = 1480 bytes </p><p>Used so far:<br/>\\[<br/>1480 + 1480 = 2960 \\text{ bytes}<br/>\\]</p><p>Remaining:<br/>\\[<br/>3980 - 2960 = 1020 \\text{ bytes}<br/>\\]</p><p>So third fragment data = 1020 bytes.</p><hr/><p>Fragment sizes including headers:</p><p>\\[<br/>\\text{Fragment 1} = 1480 + 20 = 1500 \\text{ bytes}<br/>\\]<br/>\\[<br/>\\text{Fragment 2} = 1480 + 20 = 1500 \\text{ bytes}<br/>\\]<br/>\\[<br/>\\text{Fragment 3} = 1020 + 20 = 1040 \\text{ bytes}<br/>\\]</p><hr/><p>Total size after fragmentation:<br/>\\[<br/>1500 + 1500 + 1040 = 4040 \\text{ bytes}<br/>\\]</p><p><strong>Answer: 3 fragments and 4040 bytes → Option B</strong><br/> </p></div><br><br><a href=\"https://gateoverflow.in/499390/go-classes-dpp-cn-fragmentation#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-cn-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/computer-networks\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Computer Networks - IPv4 Addressing & Routing</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>$\\text { Consider a network running a link-state routing protocol with the following topology: }$</p><p style=\"text-align:center\"><img alt=\"\" height=\"269\" src=\"https://gateoverflow.in/?qa=blob&amp;qa_blobid=2623882405042877594\" width=\"205\"/></p><p><br/>The numbers represent link costs. Router A needs to compute the shortest path to all other routers using Dijkstra's algorithm.<br/> </p><p><strong>After completing the algorithm, what is the total cost of the shortest path from $\\textbf{A}$ to $\\textbf{D}$ ?</strong><br/> </p><p> </p></div></span>",
            "image": "https://gateoverflow.in/?qa=blob&qa_blobid=2623882405042877594",
            "options": [
                "<span style=\"display: inline;\">$4$<br/></span>",
                "<span style=\"display: inline;\">$5$<br/></span>",
                "<span style=\"display: inline;\">$6$<br/></span>",
                "<span style=\"display: inline;\">$7$</span>"
            ],
            "answer": "A",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"498947\"></a><div itemprop=\"text\">Answer : 5. <br/> <br/> A - C - D<br/> <br/> or A - B - C - D.</div><br><br><a href=\"https://gateoverflow.in/498938/go-classes-dpp-cn-routing#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-cn-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/computer-networks\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Computer Networks - IPv4 Addressing & Routing</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>An IP datagram of size $\\mathbf{2400} ~\\textbf{bytes}$ (including IP header) passes through two networks with different MTUs:</p><p>The IP header size is $\\mathbf{20} ~\\textbf{bytes}$. Assume all fragments are further fragmented if they exceed the MTU of the next network.</p><p><strong>What is the total number of fragments that eventually arrive at the destination?</strong><br/> </p><p><strong>Network Parameters:</strong></p><ul><li><strong>Network A:</strong> MTU $= 1500 ~\\textbf{bytes}$</li><li><strong>Network B:</strong> MTU $= 620 ~\\textbf{bytes}$</li></ul></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$4$</span>",
                "<span style=\"display: inline;\">$5$</span>",
                "<span style=\"display: inline;\">$6$</span>",
                "<span style=\"display: inline;\">$7$</span>"
            ],
            "answer": "B",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"498930\"></a><div itemprop=\"text\"><ul><li>Original datagram: Total $=2400 ~\\text{bytes}$, Header $=20 ~\\text{bytes}$, Data $=2380 ~\\text{bytes}$<br/> </li><li>MTU of Network A $= 1500 ~\\text{bytes}$<br/> </li><li>Max data per fragment in Network A $ = 1500-20=1480 ~\\text{bytes}$<br/> </li><li>Number of fragments for Network A$=[2380 / 1480]=2 ~\\text{fragments}$<br/> </li></ul><p><strong>Fragment A1:</strong> Data $= 1480 ~\\text{bytes}$, Total $=1500 ~\\text{bytes}$.<br/><br/><strong>Fragment A2:</strong> Data $=2380-1480=900 ~\\text{bytes}$, Total $=920 ~\\text{bytes}$.<br/> </p><ul><li>MTU of Network B $= 620 ~\\text{bytes}$.<br/> </li><li>Max data per fragment in Network B $= 620-20 = 600 ~\\text{bytes}$.<br/> </li></ul><div><p><strong>For Fragment A1</strong> $\\mathbf{(1480 ~bytes ~data)}$<strong>:</strong></p><ul><li>Needs fragmentation: $[1480 / 600]=3 ~\\text{fragments}$<br/> </li><li>Fragment A1a: Data $=600 ~\\text{bytes}$, Total $=620 ~\\text{bytes}$<br/> </li><li>Fragment A1b: Data $=600 ~\\text{bytes}$, Total $=620 ~\\text{bytes}$<br/> </li><li>Fragment A1c: Data $=1480-1200=280 ~\\text{bytes}$, Total $=300 ~\\text{bytes}$<br/> </li></ul><p><strong>For Fragment A2 </strong>$\\mathbf{(900 ~bytes ~data)}$<strong>:</strong></p><ul><li>Needs fragmentation: $[900 / 600]=2 ~\\text{fragments}$<br/> </li><li>Fragment A2a: Data $=600$ bytes, Total $=620 ~\\text{bytes}$<br/> </li><li>Fragment A2b: Data $=900-600=300$ bytes, Total $=320 ~\\text{bytes}$</li></ul><div> </div><ul><li>From Fragment A1: $3 ~\\text{fragments}$<br/> </li><li>From Fragment A2: $2 ~\\text{fragments}$<br/> </li><li><strong>Total fragments</strong> $\\mathbf{=3+2=5}$<br/> </li></ul><p>Final Answer: <strong>(B)</strong> $\\mathbf{5}$</p></div></div><br><br><a href=\"https://gateoverflow.in/498929/go-classes-dpp-cn-fragmentation#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-cn-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/computer-networks\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Computer Networks - IPv4 Addressing & Routing</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider an IP datagram of $\\mathbf{1500 ~bytes}$ (including the IP header) that must be sent over a network with an MTU of $\\mathbf{576 ~bytes}$. The IP header size is $\\mathbf{20 ~bytes}$.</p><p>The datagram needs to be fragmented to traverse this network.<br/><br/><strong>What is the total overhead (in $\\textbf{bytes}$) introduced due to fragmentation?</strong><br/> </p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\mathrm{40 ~bytes}$<br/></span>",
                "<span style=\"display: inline;\">$\\mathrm{60 ~bytes}$<br/></span>",
                "<span style=\"display: inline;\">$\\mathrm{80 ~bytes}$<br/></span>",
                "<span style=\"display: inline;\">$\\mathrm{100 ~bytes}$</span>"
            ],
            "answer": "A",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"498927\"></a><div itemprop=\"text\"><p>Total size = $1500 ~\\text{bytes}$<br/><br/>IP header = $20 ~\\text{bytes}$<br/><br/>Data payload $=1500-20=1480 ~\\text{bytes}$<br/><br/>MTU = $576 ~\\text{bytes}$<br/><br/>Each fragment needs a $20 ~\\text{byte}$ IP header<br/><br/>Maximum data per fragment $=$ MTU - IP header $=576-20=556 ~\\text{bytes}$<br/><br/>Total data to fragment = $1480 ~\\text{bytes}$<br/><br/>Data per fragment = $556 ~\\text{bytes}$<br/><br/>Number of fragments $=\\lceil 1480 / 556\\rceil=\\lceil 2.662\\rceil=3 ~\\text{fragments}$<br/><br/>Fragment 1 data = $556 ~\\text{bytes}$<br/><br/>Fragment 2 data $=556 ~\\text{bytes}$<br/><br/>Fragment 3 data $=1480-(556 \\times 2)=368 ~\\text{bytes}$<br/> </p><ul><li>Original datagram: 1 header $=20 ~\\text{bytes}$<br/> </li><li>After fragmentation: 3 headers $=3 \\times 20=60 ~\\text{bytes}$<br/> </li><li>Overhead $=$ Total headers after - Total headers before $=60-20=\\mathbf{40 ~bytes}$<br/> </li></ul><p>Final Answer: <strong>(A)</strong> $\\mathbf{40 ~bytes}$</p></div><br><br><a href=\"https://gateoverflow.in/498925/go-classes-dpp-cn-fragmentation#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-cn-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/computer-networks\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Computer Networks - IPv4 Addressing & Routing</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>A company has been assigned the IP block $\\verb|192.168.10.0/24|$.<br/><br/>The network administrator wants to create $\\mathbf{6 ~subnets}$, each capable of accommodating <strong>at least</strong> $\\mathbf{25}$ <strong>usable host addresses.</strong></p><p>Which of the following subnet masks should be used, and what will be the total number of <strong>usable subnets</strong> and <strong>usable hosts per subnet</strong> created?</p><p> </p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$/ 26 \\rightarrow 4$ subnets, $62$ hosts per subnet<br/></span>",
                "<span style=\"display: inline;\">$/ 27 \\rightarrow 8$ subnets, $30$ hosts per subnet<br/></span>",
                "<span style=\"display: inline;\">$/ 28 \\rightarrow 16$ subnets, $14$ hosts per subnet<br/></span>",
                "<span style=\"display: inline;\">$/ 29 \\rightarrow 32$ subnets, $6$ hosts per subnet</span>"
            ],
            "answer": "A",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"498582\"></a><div itemprop=\"text\">Subnet size for $/ 27=2^{\\wedge}(32-27)=2^{\\wedge} 5=32$ addresses.<br/> <br/> Usable hosts per subnet $=32-2=30$.<br/> <br/> Number of subnets from $/ 24 \\rightarrow / 27=2^{\\wedge}(27-24)=2^{\\wedge} 3=8$.<br/> <br/> $8$ subnets $\\geq 6$ required and 30 hosts $\\geq 25$ required, so $/ 27$ satisfies both conditions.</div><br><br><a href=\"https://gateoverflow.in/498581/go-classes-dpp-cn-subnetting#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-cn-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/computer-networks\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Computer Networks - IPv4 Addressing & Routing</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>CONSIDER A COMPUTER C1 CONFIGURED AS FOLLOWS:</p><p>C1 WANTS TO SEND A PACKET TO A SECOND COMPUTER, C2, WHICH HAS THE IP ADDRESS $\\texttt{192.168.10.200}$.</p><p>WHICH IP ADDRESS WILL C1 SEND AN ARP REQUEST FOR?<br/> </p><p><strong>Configuration of C1:</strong></p><ul><li><strong>IP ADDRESS:</strong> $\\texttt{192.168.10.100}$</li><li><strong>SUBNET MASK:</strong> $\\texttt{255.255.255.192}$</li><li><strong>DEFAULT GATEWAY:</strong> $\\texttt{192.168.10.65}$</li></ul></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\texttt{192.168.10.200}$</span>",
                "<span style=\"display: inline;\">$\\texttt{192.168.10.65}$</span>",
                "<span style=\"display: inline;\">$\\texttt{192.168.10.64}$</span>",
                "<span style=\"display: inline;\">$\\texttt{192.168.10.127}$</span>"
            ],
            "answer": "B",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"497598\"></a><div itemprop=\"text\"><p><strong>Determine C1's Subnet:</strong> C1 must first determine if the destination IP ( $\\texttt{192.168.10.200}$ ) is on its own local subnet. It does this by comparing its own network ID to the destination's network ID, using its own subnet mask.</p><ul><li><strong>C1's Subnet Mask:</strong> $\\texttt{255.255.255.192}$<br/> </li></ul><p>C1's Network ID ( $\\texttt{192.168.10.64}$ ) is <strong>different</strong> from C2's Network ID ( $\\texttt{192.168.10.192}$ ).<br/><br/>This means C2 is on a <strong>remote network.</strong><br/><br/>To send a packet to a remote network, C1 must send the packet to its <strong>Default Gateway.</strong><br/><br/>C1 will send an ARP request to find the MAC address of its Default Gateway, which is $\\texttt{192.168.10.65}$.</p></div><br><br><a href=\"https://gateoverflow.in/497597/go-classes-dpp-cn-subnetting#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-cn-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/computer-networks\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Computer Networks - IPv4 Addressing & Routing</a></b></div></div>"
        }
    ]
});

registerTest({
    "series": "cse-dpp-2027",
    "order": 2,
    "name": "DPP 02 - Computer Networks (IPv4 Addressing & Routing - Part 2)",
    "testLabel": "DPP 02",
    "testType": "DPP",
    "bracket": "IPv4 Addressing & Routing - Part 2",
    "subject": "cn",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "isFree": "true",
    "totalMarks": 10,
    "topicsCovered": "IPv4 Addressing & Routing (Practice Set 2)",
    "questions": [
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>CONSIDER THE ENTRIES SHOWN BELOW IN THE FORWARDING TABLE OF AN IP ROUTER. THE NOTATION '/N' IN A PREFIX INDICATES A SUBNET MASK WITH THE MOST SIGNIFICANT N BITS SET TO $1$.<br/><br/>\\begin{array}{}<br/>\\text { PREFIX } &amp; \\text { NEXT HOP ROUTER } \\\\<br/>\\texttt{10.10.0.0 / 16} &amp; \\text{R1} \\\\<br/>\\texttt{10.10.128.0 / 18} &amp; \\text{R2} \\\\<br/>\\texttt{10.10.192.0 / 20} &amp; \\text{R3} \\\\<br/>\\texttt{0.0.0.0 / 0} &amp; \\text{R4} \\\\<br/>\\end{array}</p><p><br/>ON WHICH INTERFACE WILL THE ROUTER FORWARD PACKETS ADDRESSED TO DESTINATIONS $\\texttt{10.10.140.50}$ AND $\\texttt{172.16.1.1}$ RESPECTIVELY?<br/> </p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\text{R1}$ AND $\\text{R4}$<br/></span>",
                "<span style=\"display: inline;\">$\\text{R2}$ AND $\\text{R3}$<br/></span>",
                "<span style=\"display: inline;\">$\\text{R2}$ AND $\\text{R4}$<br/></span>",
                "<span style=\"display: inline;\">$\\text{R1}$ AND $\\text{R3}$</span>"
            ],
            "answer": "C",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"497711\"></a><div itemprop=\"text\">Answer is C<br/> <br/> We can see that the packet with the destination IP 10.10.140.50 will match with both R1 and R2 but by using longest prefix match it will go to R2<br/> <br/> For the packet with the destination IP 172.16.1.1 is matching with none of the 10.10.* prefixes so it will go to default which is R4</div><br><br><a href=\"https://gateoverflow.in/497594/go-classes-dpp-cn-routing#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-cn-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/computer-networks\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Computer Networks - IPv4 Addressing & Routing</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>CONSIDER A NETWORK WITH $5$ ROUTERS (A TO E). THE LINKS AND THEIR WEIGHTS ARE GIVEN BY THE FOLLOWING GRAPH CODE. THE DISTANCE VECTOR ALGORITHM IS USED TO FIND ALL SHORTEST PATHS.</p><p><img alt=\"\" src=\"https://gateoverflow.in/?qa=blob&amp;qa_blobid=1902573259173849034\"/></p><p><br/>SUPPOSE ALL LINKS <em>NOT</em> EXPLICITLY SHOWN IN THE DIAGRAM (SUCH AS A-D, A-E, AND B-E) ARE ADDED TO THE NETWORK. ALL OF THESE NEW LINKS ARE ASSIGNED A WEIGHT OF $2$. THE ALGORITHM IS RUN AGAIN UNTIL ALL ROUTING TABLES STABILIZE.</p><p>WHAT WILL BE THE NEW SHORTEST PATH COST FROM ROUTER <strong>A</strong> TO ROUTER <strong>E</strong>?<br/> </p></div></span>",
            "image": "https://gateoverflow.in/?qa=blob&qa_blobid=1902573259173849034",
            "options": [
                "<span style=\"display: inline;\">$1$<br/></span>",
                "<span style=\"display: inline;\">$2$<br/></span>",
                "<span style=\"display: inline;\">$3$<br/></span>",
                "<span style=\"display: inline;\">$4$</span>"
            ],
            "answer": "A",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"498796\"></a><div itemprop=\"text\">Simple form the new edges and just see the shortest distance between A to E. There lies the answer.</div><br><br><a href=\"https://gateoverflow.in/497583/go-classes-dpp-cn-dvr#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-cn-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/computer-networks\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Computer Networks - IPv4 Addressing & Routing</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>CONSIDER THREE MACHINES, P, Q, AND R, WITH IP ADDRESSES $192.168.10.130$, $192.168.10.190$, AND $192.168.10.220$ RESPECTIVELY. THE SUBNET MASK IS SET TO $255.255.255.240$ FOR ALL THREE MACHINES. WHICH ONE OF THE FOLLOWING IS TRUE?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">P, Q, AND R ALL BELONG TO THE SAME SUBNET.<br/></span>",
                "<span style=\"display: inline;\">ONLY P AND Q BELONG TO THE SAME SUBNET.<br/></span>",
                "<span style=\"display: inline;\">ONLY Q AND R BELONG TO THE SAME SUBNET.<br/></span>",
                "<span style=\"display: inline;\">P, Q, AND R BELONG TO THREE DIFFERENT SUBNETS.</span>"
            ],
            "answer": "A",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"496882\"></a><div itemprop=\"text\">D</div><br><br><a href=\"https://gateoverflow.in/496810/go-classes-dpp-cn-subnetting#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-cn-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/computer-networks\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Computer Networks - IPv4 Addressing & Routing</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>CONSIDER THE ENTRIES SHOWN BELOW IN THE FORWARDING TABLE OF AN IP ROUTER. EACH ENTRY CONSISTS OF AN IP PREFIX AND THE CORRESPONDING NEXT HOP ROUTER. THE NOTATION '/N' IN A PREFIX INDICATES A SUBNET MASK WITH THE MOST SIGNIFICANT $N$ BITS SET TO $1.$</p><p>\\[\\begin{array}{|l|l|}\\hline\\text{Prefix} &amp; \\text{Next hop router} \\\\\\hline 172.20.128.0/19 &amp; R1 \\\\ 172.20.160.0/20 &amp; R2 \\\\ 172.20.175.0/24 &amp; R3 \\\\ 0.0.0.0/0 &amp; R4 \\\\\\hline\\end{array}\\]</p><p>THIS ROUTER FORWARDS 6 PACKETS. THE DESTINATION IP ADDRESSES OF THE PACKETS ARE:</p><ol><li>$172.20.150.10$</li><li>$172.20.170.5$</li><li>$172.20.175.50$</li><li>$172.20.190.1$</li><li>$172.20.160.200$</li><li>$192.168.1.1$</li></ol><p>THE NUMBER OF PACKETS FORWARDED VIA THE NEXT HOP ROUTER <strong>R2</strong> IS ________.</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$172.20 .150 .10$<br/></span>",
                "<span style=\"display: inline;\">$172.20 .170 .5$<br/></span>",
                "<span style=\"display: inline;\">$172,20,175,50$<br/></span>",
                "<span style=\"display: inline;\">$172.20 .190 .1$<br/></span>",
                "<span style=\"display: inline;\">$172.20 .160 .200$<br/></span>",
                "<span style=\"display: inline;\">$192.168.1.1$</span>"
            ],
            "answer": "2",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"497024\"></a><div itemprop=\"text\"><p>Forwarding table (focus on 3rd octet; first two octets 172.20 are common):</p><p>R1 : 172.20.128.0/19<br/> third octet = 128 = <strong><span style=\"color:#9b59b6;\">100</span></strong>0<strong> </strong>0000<br/> network/host split (first 3 bits are network): 100 | 00000</p><p>R2 : 172.20.160.0/20<br/> third octet = 160 = <span style=\"color:#9b59b6;\"><strong>1010</strong></span> 0000<br/> network/host split (first 4 bits are network): 1010 | 0000</p><p>R3 : 172.20.175.0/24<br/> third octet = 175 = <span style=\"color:#9b59b6;\"><strong>1010 1111</strong></span><br/> network/host split (all 8 bits are network): 10101111</p><p>R4 : 0.0.0.0/0 (default route)</p><p>Packets (compare 3rd octet in 8-bit binary against the above; choose the longest matching prefix):</p><p>1) 172.20.150.10<br/> 3rd octet = 150 = 1001 0110<br/> matches R1 pattern 100 | xxxxx → Next hop: R1 (/19)</p><p>2) 172.20.170.5<br/> 3rd octet = 170 = 1010 1010<br/> matches R2 pattern 1010 | xxxx → Next hop: R2 (/20)</p><p>3) 172.20.175.50<br/> 3rd octet = 175 = 1010 1111<br/> matches R2 1010|xxxx and exactly R3 10101111| → pick longer → Next hop: R3 (/24)</p><p>4) 172.20.190.1<br/> 3rd octet = 190 = 1011 1110<br/> matches none of R1 / R2 / R3 → Next hop: R4 (default)</p><p>5) 172.20.160.200<br/> 3rd octet = 160 = 1010 0000<br/> matches R2 1010 | xxxx → Next hop: R2 (/20)</p><p>6) 192.168.1.1<br/> not 172.20.* → only default applies → Next hop: R4</p><p>Packets via R2 are : #2 and #5<br/><strong>Answer: 2</strong></p></div><br><br><a href=\"https://gateoverflow.in/496799/go-classes-dpp-cn-routing#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-cn-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/computer-networks\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Computer Networks - IPv4 Addressing & Routing</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\">An IP address $172.20.85.100$ is part of a network with a $/26$ subnet mask. What is the fourth octet (in decimal) of the broadcast address for this specific network?</div></span>",
            "image": "",
            "options": [],
            "answer": "127",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"496104\"></a><div itemprop=\"text\">The given mask is $\\mathbf{1 2 6}$ (CIDR notation).<br/> <br/> A full IP address has 32 bits.<br/> <br/> This mask means 26 bits are used for the Network ID and the remaining bits are for the Host ID.<br/> <br/> Host Bits $=32-26=6$ bits.<br/> <br/> To get broadcast address, put all ones in host id -&gt; 172.20.85.127<br/> <br/> Fourth octet: 127</div><br><br><a href=\"https://gateoverflow.in/496101/go-classes-dpp-cn-subnetting#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-cn-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/computer-networks\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Computer Networks - IPv4 Addressing & Routing</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Suppose computers $A$ and $B$ have IP addresses $192.168.10.5$ and $192.168.12.70$, respectively.</p><p>Which of the following netmasks, if used by both computers, will place them on the same network?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$255.255 .252 .0$<br/></span>",
                "<span style=\"display: inline;\">$255.255 .254 .0$<br/></span>",
                "<span style=\"display: inline;\">$255.255 .255 .0$<br/></span>",
                "<span style=\"display: inline;\">$255.255 .248 .0$</span>"
            ],
            "answer": "D",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"495581\"></a><div itemprop=\"text\"><p>Two IP addresses are on the same network if the result of a bitwise AND operation between the IP address and the netmask is identical for both. We need to find which netmask makes 192.168.10.5 and 192.168.12.70 produce the same network ID.</p><p>Analysis</p><ul><li>IP A: 192.168.10.5<br/> </li><li>IP B: 192.168.12.70</li></ul><p>The first two octets ( 192.168 ) are identical. The last octet ( .5 and .70 ) is masked by .0 in all options, so it's irrelevant. The decision comes down to the third octet.</p><p>We need to find a mask that makes 10 and 12 look the same.<br/>Let's look at the binary for the third octet:</p><ul><li>$10=00001010$<br/> </li><li>$12=00001100$</li></ul><div><p>A. 255.255 .252 .0</p><ul><li>Mask ( 252 ): 11111100<br/> </li><li>IP A: 00001010 AND 11111100 = 00001000 (Network ID: 192.168.8.0)<br/> </li><li>IP B: 00001100 AND 11111100 = 00001100 (Network ID: 192.168.12.0)<br/> </li><li>DIFFERENT.</li></ul><p>B. 255.255 .254 .0</p><ul><li>Mask ( 254 ): 11111110<br/> </li><li>IPA: 00001010 AND 11111110 = 00001010 (Network ID: 192.168.10.0)<br/> </li><li>IP B: 00001100 AND 11111110 = 00001100 (Network ID: 192.168.12.0)<br/> </li><li>DIFFERENT.</li></ul><p>C. 255.255 .255 .0</p><ul><li>Mask ( 255 ): 11111111<br/> </li><li>IPA: 00001010 AND 11111111 = 00001010 (Network ID: 192.168.10.0)<br/> </li><li>IP B: 00001100 AND 11111111 = 00001100 (Network ID: 192.168.12.0)<br/> </li><li>DIFFERENT.</li></ul><p>D. 255.255 .248 .0</p><ul><li>Mask ( 248 ): 11111000<br/> </li><li>IP A: 00001010 AND 11111000 = 00001000 (Network ID: 192.168.8.0)<br/> </li><li>IP B: 00001100 AND 11111000 = 00001000 (Network ID: 192.168.8.0)<br/> </li><li><strong>same.</strong></li></ul><p><strong>Hence D is correct</strong></p></div></div><br><br><a href=\"https://gateoverflow.in/495579/go-classes-dpp-cn-subnetting#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-cn-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/computer-networks\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Computer Networks - IPv4 Addressing & Routing</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>An IP router using CIDR has the following entries in its routing table. A packet with the destination IP address $172.29.140.92$ arrives.</p><p>\\[<br/>\\begin{array}{ll}<br/>\\text{Prefix} &amp; \\text{Output Interface} \\\\<br/>172.16.0.0/12 &amp; 1 \\\\<br/>172.30.0.0/16 &amp; 2 \\\\<br/>172.29.128.0/20 &amp; 3 \\\\<br/>0.0.0.0/0 &amp; 4 \\\\<br/>\\end{array}<br/>\\]</p><p>Which output interface will the router select?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$1$<br/></span>",
                "<span style=\"display: inline;\">$2$<br/></span>",
                "<span style=\"display: inline;\">$3$<br/></span>",
                "<span style=\"display: inline;\">$4$</span>"
            ],
            "answer": "A",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"495586\"></a><div itemprop=\"text\">Interface 3 would get chosen <br/> <br/> option- C</div><br><br><a href=\"https://gateoverflow.in/495575/go-classes-dpp-cn-routing#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-cn-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/computer-networks\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Computer Networks - IPv4 Addressing & Routing</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>The subnet mask for a particular network is $255.255.240.0$. Which of the following pairs of IP addresses could belong to this network?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$172.16.5.5$ AND $172.17.5.5$<br/></span>",
                "<span style=\"display: inline;\">$130.20.100.5$ AND $130.20.110.254$<br/></span>",
                "<span style=\"display: inline;\">$192.168.1.1$ AND $193.168.1.2$<br/></span>",
                "<span style=\"display: inline;\">$200.10.35.10$ AND $200.10.50.20$</span>"
            ],
            "answer": "A",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"495119\"></a><div itemprop=\"text\"><p>The first two octets must match exactly (because the mask is 255.255 ).<br/><br/>The last octet doesn't matter (because the mask is 0).<br/><br/>The third octet is the important one. The mask 240 ( 11110000 ) means the first 4 bits of the third octet must match.<br/><br/>A. 172.16.5.5 AND 172.17.5.5</p><ul><li>The second octets (16 and 17) do not match.<br/> </li><li>They are on DIFFERENT networks.</li></ul><p>C. 192.168.1.1 AND 193.168.1.2</p><ul><li>The first octets (192 and 193) do not match.<br/> </li><li>They are on DIFFERENT networks.</li></ul><p>D. 200.10 .35 .10 AND 200.10 .50 .20</p><ul><li>The first two octets ( 200.10 ) match.</li><li>We must check the third octet: 35 and 50 .</li><li>35 in binary is 00100011</li><li>50 in binary is 00110010</li><li>The first 4 bits ( 0010 and 0011 ) do not match.</li><li>They are on DIFFERENT networks.</li></ul><p>B. 130.20.100.5 AND 130.20.110.254</p><ul><li>The first two octets ( 130.20 ) match.</li><li>We must check the third octet: 100 and 110 .</li><li>100 in binary is 01100100</li><li>110 in binary is 01101110</li><li>The first 4 bits ( 0110 and 0110 ) are identical.</li><li>They are on the SAME network.</li></ul><p>The correct choice is $\\mathbf{B}$.</p></div><br><br><a href=\"https://gateoverflow.in/495118/go-classes-dpp-cn-subnetting#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-cn-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/computer-networks\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Computer Networks - IPv4 Addressing & Routing</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider a network path $\\mathbf{P} \\rightarrow \\mathbf{Q} \\rightarrow \\mathbf{R}$ between nodes $\\mathbf{P}$ and $\\mathbf{R}$ via router $\\mathbf{Q}$. Node $\\mathbf{P}$ sends a file of $2 \\times 10^6$ bytes to $\\mathbf{R}$ by splitting the file into chunks of $10^3$ bytes each. Node $\\mathbf{P}$ sends these chunks one after the other without any wait time between successive chunk transmissions. Assume that the size of extra headers added to these chunks is negligible.</p><p>The link $\\mathbf{P} \\rightarrow \\mathbf{Q}$ has a bandwidth of $2 \\times 10^6$ bits/sec and a propagation delay of 2 ms . The link $\\mathbf{Q} \\rightarrow \\mathbf{R}$ has a bandwidth of $1 \\times 10^6$ bits/sec and a propagation delay of 4 ms .</p><p>Router $\\mathbf{Q}$ is a store-and-forward router. It immediately begins to transmit a packet on link $\\mathbf{Q} \\rightarrow \\mathbf{R}$ as soon as it has fully received the packet on link $\\mathbf{P} \\rightarrow \\mathbf{Q}$, provided the $\\mathbf{Q} \\rightarrow \\mathbf{R}$ link is free. Router $\\mathbf{Q}$ can simultaneously receive on link $\\mathbf{P} \\rightarrow \\mathbf{Q}$ and transmit on link $\\mathbf{Q} \\rightarrow \\mathbf{R}$ (i.e., it supports pipelining).</p><p>Assume $\\mathbf{P}$ starts transmitting the first chunk at $t=0$.<br/><br/>Which one of the following options gives the time (in seconds, rounded off to 3 decimal places) at which $\\mathbf{R}$ receives the last bit of the entire file?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$8.014$<br/></span>",
                "<span style=\"display: inline;\">$16.000$<br/></span>",
                "<span style=\"display: inline;\">$16.004$<br/></span>",
                "<span style=\"display: inline;\">$16.010$</span>"
            ],
            "answer": "A",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"495105\"></a><div itemprop=\"text\">The total time is limited by the bottleneck link ( $\\mathrm{Q} \\rightarrow \\mathrm{R}$ ).<br/> <br/> The total time to transmit the entire file over this link is $N \\times T_{x 2}$. However, this link can only start working after the first packet has been transmitted and propagated from $P$.<br/> <br/> 1. Time for bottleneck to start $=T_{x 1}+P_{d 1}=0.004+0.002=0.006 \\mathrm{sec}$.<br/> <br/> 2. Time for bottleneck to transmit all $N$ packets $=N \\times T_{x 2}=2000 \\times 0.008=16.0 \\mathrm{sec}$.<br/> <br/> 3. Time for the last bit to propagate from Q to $\\mathrm{R}=P_{d 2}=0.004 \\mathrm{sec}$.<br/> <br/> 4. Total Time $=($ Time to fill first stage $)+($ Total time on bottleneck $)+$ (Time to empty last stage)<br/> <br/> 5. Total Time $=\\left(T_{x 1}+P_{d 1}\\right)+\\left(N \\times T_{x 2}\\right)+P_{d 2}$ (This formula works because $T_{x 2}&gt;T_{x 1}$ )<br/> <br/> 6. Total Time $=(0.004+0.002)+(2000 \\times 0.008)+0.004=0.006+16.0+ 0.004=\\mathbf{1 6 . 0 1 0} \\mathbf{~ s e c}$.</div><br><br><a href=\"https://gateoverflow.in/495104/go-classes-dpp-cn-routing#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-cn-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/computer-networks\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Computer Networks - IPv4 Addressing & Routing</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>A router has the following entries in its routing table:</p><p>\\[<br/>\\begin{array}{lll}<br/>\\text{Destination} &amp; \\text{Subnet Mask} &amp; \\text{Interface} \\\\<br/>172.16.0.0 &amp; 255.255.0.0 &amp; \\text{IF-0} \\\\<br/>172.16.128.0 &amp; 255.255.192.0 &amp; \\text{IF-1} \\\\<br/>10.5.5.10 &amp; 255.255.255.255 &amp; \\text{IF-2} \\\\<br/>\\text{Default} &amp; &amp; \\text{IF-3} \\\\<br/>\\end{array}<br/>\\]</p><p>On which interface will the router forward packets addressed to destinations $172.16.150.25$ and $172.16.10.10$ respectively?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">IF-$0$ and IF-$1$<br/></span>",
                "<span style=\"display: inline;\">IF-$1$ and IF-$0$<br/></span>",
                "<span style=\"display: inline;\">IF-$1$ and IF-$3$<br/></span>",
                "<span style=\"display: inline;\">IF-$2$ and IF-$0$</span>"
            ],
            "answer": "A",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"494493\"></a><div itemprop=\"text\"><p>Correct Answer - B</p><p>1.) 172.16.150.25 will go to interface IF-1 <strong>(longest matching)</strong></p><p> 150 in binary= 1001 0110 </p><p> IF-1 is 172.16.128.0 / 18 </p><p>2.) 172.16.10.10 will go to IF-0 <strong>(longest matching)</strong></p><p> IF-0 is 172.16.0.0 / 16 </p><p> </p><p> </p></div><br><br><a href=\"https://gateoverflow.in/494475/go-classes-dpp-cn-routing#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-cn-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/computer-networks\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Computer Networks - IPv4 Addressing & Routing</a></b></div></div>"
        }
    ]
});

registerTest({
    "series": "cse-dpp-2027",
    "order": 3,
    "name": "DPP 03 - Computer Networks (IPv4 Addressing & Routing - Part 3)",
    "testLabel": "DPP 03",
    "testType": "DPP",
    "bracket": "IPv4 Addressing & Routing - Part 3",
    "subject": "cn",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 11,
    "topicsCovered": "IPv4 Addressing & Routing (Practice Set 3)",
    "questions": [
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\">Consider the entries shown below in the forwarding table of an IP router. <br/> <br/> The router uses the longest prefix match rule. <br/> <br/> The notation “/N” in a prefix indicates a subnet mask with the most significant N bits set to $1$.<br/> <br/> \\[<br/> \\begin{array}{ll}<br/> \\text{Prefix} &amp; \\text{Next hop router} \\\\<br/> 192.168.10.0/23 &amp; R1 \\\\<br/> 192.168.10.0/24 &amp; R2 \\\\<br/> 192.168.11.0/24 &amp; R3 \\\\<br/> 192.168.10.128/25 &amp; R4 \\\\<br/> \\end{array}<br/> \\]<br/> <br/> This router forwards $50$ packets each to $5$ hosts. <br/> <br/> The IP addresses of the hosts are $$192.168.10.15, 192.168.10.130, 192.168.11.25, 192.168.11.140, 192.168.10.200$$<br/> <br/> The total number of packets forwarded via the next hop router $R4$ is $\\_\\_\\_\\_$.</div></span>",
            "image": "",
            "options": [],
            "answer": "100",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"494474\"></a><div itemprop=\"text\"><p>1. Define the IP Ranges for Each Route</p><ul><li><strong>R1 (192.168.10.0 / 23):</strong><br/> </li><li>This is a /23 mask, which covers 2 subnets: 192.168.10.0 and 192.168.11.0.<br/> </li><li>Range: 192.168 .10 .0 to 192.168 .11 .255<br/> </li><li>Prefix Length: 23<br/> </li><li><strong>R2 (192.168.10.0 / 24):</strong><br/> </li><li>This is a standard 124 mask.<br/> </li><li>Range: 192.168 .10 .0 to 192.168 .10 .255<br/> </li><li>Prefix Length: 24<br/> </li><li><strong>R3 (192.168.11.0 / 24):</strong><br/> </li><li>This is a standard 124 mask.<br/> </li><li>Range: 192.168 .11 .0 to 192.168 .11 .255<br/> </li><li>Prefix Length: 24<br/> </li><li><strong>R4 (192.168.10.128 / 25):</strong><br/> </li><li>This is a / 25 mask, which covers the second half of the 192.168.10.0 / 24 subnet.<br/> </li><li>Range: 192.168 .10 .128 to 192.168 .10 .255<br/> </li><li>Prefix Length: 25</li></ul><div><p>Host 1: 192.168.10.15</p><ul><li>Matches R1 ( / 23 )<br/> </li><li>Matches R2 ( /24 )<br/> </li><li>Longest Match: R2 (24 &gt; 23)</li></ul><p>Host 2: 192.168.10.130</p><ul><li>Matches R1 ( / 23 )<br/> </li><li>Matches R2 ( /24 )<br/> </li><li>Matches R4 ( / 25 )<br/> </li><li>Longest Match: R4 $(25&gt;24&gt;23)$</li></ul><p>Host 3: 192.168.11.25</p><ul><li>Matches R1 ( / 23 )<br/> </li><li>Matches R3 ( / 24 )<br/> </li><li>Longest Match: R3 (24 &gt; 23)</li></ul><p>Host 4: 192.168.11.140</p><ul><li>Matches R1 ( / 23 )<br/> </li><li>Matches R3 ( / 24 )<br/> </li><li>Longest Match: R3 (24 &gt; 23)</li></ul><p>Host 5: 192.168.10.200</p><ul><li>Matches R1 ( / 23 )<br/> </li><li>Matches R2 ( / 24 )<br/> </li><li>Matches R4 ( / 25 )<br/> </li><li>Longest Match: R4 ( $25&gt;24&gt;23$ )<br/> </li></ul><div><ul><li>Packets for Host 2 are sent to R4.<br/> </li><li>Packets for Host 5 are sent to R4.</li></ul><p>Total packets $=($ Packets for Host 2$)+($ Packets for Host 5$)$ Total packets $=50+50=100$</p></div></div></div><br><br><a href=\"https://gateoverflow.in/494473/go-classes-dpp-cn-routing#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-cn-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/computer-networks\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Computer Networks - IPv4 Addressing & Routing</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p> </p><p> </p><p><b id=\"docs-internal-guid-53247385-7fff-8f19-4c11-9e428b973b4a\"><img alt=\"\" height=\"260\" src=\"https://gateoverflow.in/?qa=blob&amp;qa_blobid=1369395321919533783\" width=\"288\"/></b></p><p>Consider a network of $6$ routers (R1 to R6). The topology of the network and the cost of each link are described by the following Graphviz DOT code.</p><p>All routers use a distance vector routing algorithm to update their routing tables. After the algorithm stabilises, all routing is performed along the shortest (minimum cost) paths.</p><p>Determine how many links in the network will never be used for carrying data on any of the shortest paths.</p></div></span>",
            "image": "https://gateoverflow.in/?qa=blob&qa_blobid=1369395321919533783",
            "options": [
                "<span style=\"display: inline;\">$2$<br/></span>",
                "<span style=\"display: inline;\">$3$<br/></span>",
                "<span style=\"display: inline;\">$4$<br/></span>",
                "<span style=\"display: inline;\">$5$</span>"
            ],
            "answer": "B",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"505309\"></a><div itemprop=\"text\">Option B<br/> 3 links will never be use</div><br><br><a href=\"https://gateoverflow.in/494468/go-classes-dpp-cn-dvr#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-cn-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/computer-networks\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Computer Networks - IPv4 Addressing & Routing</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>In an IPv4 datagram, the $M$ bit is $\\mathbf{1}$, the value of $H L E N$ is $\\mathbf{5}$, the value of total length is $\\mathbf{1 5 0 0}$ and the fragment offset value is $100$. The position of the datagram and the sequence numbers of the first and the last bytes of the payload, respectively, are:</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">First fragment, $800$ and $2279$<br/></span>",
                "<span style=\"display: inline;\">Last fragment, $800$ and $2279$<br/></span>",
                "<span style=\"display: inline;\">Middle fragment, $100$ and $1579$<br/></span>",
                "<span style=\"display: inline;\">Middle fragment, $800$ and $2279$</span>"
            ],
            "answer": "A",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"494102\"></a><div itemprop=\"text\">Position: $M=1$ (more fragments) and Offset &gt; 0 , so it is a Middle fragment.<br/> <br/> Header Length: $H L E N \\times 4=5 \\times 4=20$ bytes.<br/> <br/> Payload Length: Total Length - Header Length = $1500-20=1480$ bytes.<br/> <br/> First Byte: Fragment Offset $\\times 8=100 \\times 8=800$.<br/> <br/> Last Byte: First Byte + Payload Length $-1=800+1480-1=2279$.</div><br><br><a href=\"https://gateoverflow.in/494101/go-classes-dpp-cn-ipv4#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-cn-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/computer-networks\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Computer Networks - IPv4 Addressing & Routing</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\">In the $\\mathrm{IPv4}$ addressing format, the total number of host addresses available within a single Class C network is:</div></span>",
            "image": "",
            "options": [],
            "answer": "254",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"494157\"></a><div itemprop=\"text\">254</div><br><br><a href=\"https://gateoverflow.in/494100/go-classes-dpp-cn-ip-addressing#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-cn-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/computer-networks\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Computer Networks - IPv4 Addressing & Routing</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>A network administrator is configuring four devices: a server (S), a printer (P), a workstation (W). and a router's interface (R). Their IP addresses are assigned as follows:</p><p>All devices are configured with the subnet mask 255.255.255.224. Which of the following statements accurately describes the network configuration?</p><p><strong>Device IP Addresses:</strong></p><ul><li>Server (S): $192.168.50.78$</li><li>Printer (P): $192.168.50.97$</li><li>Workstation (W): $192.168.50.65$</li><li>Router (R): $192.168.50.94$</li></ul></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">The Server, Workstation, and Router are on the same subnet, but the Printer is on a different one.</span>",
                "<span style=\"display: inline;\">The Server and Printer are on one subnet, and the Workstation and Router are on another.</span>",
                "<span style=\"display: inline;\">All four devices are on the same subnet.</span>",
                "<span style=\"display: inline;\">The Printer and Router are on the same subnet, but the Server and Workstation are on different subnets.</span>"
            ],
            "answer": "A",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"493712\"></a><div itemprop=\"text\"><p>The key to this problem is the subnet mask: 255.255 .255 .224 .</p><ul><li>The first three octets ( 255.255 .255 ) are straightforward. The last octet, 224 , is where the division happens.<br/> </li><li>In binary, 224 is 11100000 . This means the first 3 bits of the last octet are used for the network address, and the last 5 bits are for host addresses.<br/> </li><li>The \"magic number\" or block size for this subnet mask is $256-224=32$. This means our subnets will be in blocks of 32 addresses.</li></ul><p>Starting from 0 , we can map out the subnets for the $192.168 .50 . x$ network:</p><ul><li>Subnet 1: 192.168.50.0 (Network ID) to 192.168.50.31 (Broadcast ID)<br/> </li><li>Subnet 2: 192.168 .50 .32 to 192.168 .50 .63<br/> </li><li>Subnet 3: 192.168 .50 .64 to 192.168 .50 .95<br/> </li><li>Subnet 4: 192.168 .50 .96 to 192.168 .50 .127 <br/> </li><li>... and so on.</li></ul><p>Now, we just need to see which range each device's IP address falls into:</p><ul><li>Server (S): 192.168.50.78<br/> </li><li>78 is between 64 and 95 , so it's in Subnet 3.<br/> </li><li>Workstation (W): 192.168.50.65<br/> </li><li>65 is between 64 and 95, so it's in Subnet 3.<br/> </li><li>Router (R): 192.168.50.94<br/> </li><li>94 is between 64 and 95 , so it's in Subnet 3.<br/> </li><li>Printer (P): 192.168.50.97<br/> </li><li>97 is between 96 and 127 , so it's in Subnet 4 .</li></ul><p>The Server, Workstation, and Router all share the same network address ( 192.168 .50 .64 ), placing them on the same subnet. The Printer has a different network address ( 192.168.50.96 ), putting it on a separate subnet.<br/><br/><strong>Therefore, option A is the correct choice.</strong></p></div><br><br><a href=\"https://gateoverflow.in/493708/go-classes-dpp-cn-subnetting#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-cn-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/computer-networks\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Computer Networks - IPv4 Addressing & Routing</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>A host needs to send a large IP datagram. The datagram's total data payload is $2400$ bytes. This datagram must be fragmented to cross a network link with a Maximum Transmission Unit (MTU) of $1000$ bytes. Assume a standard $20$-byte IPv4 header is used for all fragments.</p><p>What is the total number of fragments created and what is the size of the data payload in the last fragment?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$3$ fragments, $448$ bytes<br/></span>",
                "<span style=\"display: inline;\">$3$ fragments, $460$ bytes<br/></span>",
                "<span style=\"display: inline;\">$2$ fragments, $1420$ bytes<br/></span>",
                "<span style=\"display: inline;\">$4$ fragments, $20$ bytes</span>"
            ],
            "answer": "A",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"493773\"></a><div itemprop=\"text\"><p>Maximum data payload per fragment = MTU - IP header = 1000 - 20 = 980 bytes</p><p>980 ÷ 8 = 122.5 → Not an integer → <strong>Invalid</strong></p><p>Largest multiple of 8 that is ≤ 980 = 976</p><p> </p><p>So to transfer a Data of 2400 bytes we need fragments with data size 976, 976 and 448</p><p>Ans: <strong data-spm-anchor-id=\"a2ty_o01.29997173.0.i16.3265c921xFlmS4\">A. 3 fragments, 448 bytes</strong></p></div><br><br><a href=\"https://gateoverflow.in/493702/go-classes-dpp-cn-fragmentation#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-cn-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/computer-networks\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Computer Networks - IPv4 Addressing & Routing</a></b></div></div>"
        },
        {
            "marks": 2,
            "neg": 0,
            "type": "MSQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Two hosts, $X$ and $Y$, have IP addresses $192.168.10.150$ and $192.168.10.175$, respectively. They are on a network that uses a single subnet mask $M$. For $X$ and $Y$ to be on the same subnet, which of the following values for M is/are invalid?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$255,255,255,192$<br/></span>",
                "<span style=\"display: inline;\">$255.255 .255 .224$<br/></span>",
                "<span style=\"display: inline;\">$255.255 .255 .128$<br/></span>",
                "<span style=\"display: inline;\">$255.255 .255 .240$</span>"
            ],
            "answer": [
                "B",
                "D"
            ],
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"493324\"></a><div itemprop=\"text\">Valid is A, C <br/> <br/> Explanation:- 150 = 1001 0110<br/> <br/> 175 = 1010 1111<br/> <br/> So till 2nd bit we can take subnet mask M , i.e 128 or 192</div><br><br><a href=\"https://gateoverflow.in/493292/go-classes-dpp-cn-subnetting#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-cn-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/computer-networks\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Computer Networks - IPv4 Addressing & Routing</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>An Internet Service Provider (ISP) holds a large block of CIDR-based IP addresses: $150.100.0.0/18$. The ISP decides to allocate one-fourth of this block to Organization A and another one-fourth to Organization B, retaining the remaining half for its own customers. Which of the following represents a valid and non-overlapping allocation of address blocks to Organizations A and B ?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$150.100 .32 .0 / 20$ and $150.100 .48 .0 / 20$<br/></span>",
                "<span style=\"display: inline;\">$150.100 .32 .0 / 20$ and $150.100 .40 .0 / 22$<br/></span>",
                "<span style=\"display: inline;\">$150.100 .32 .0 / 21$ and $150.100 .48 .0 / 21$<br/></span>",
                "<span style=\"display: inline;\">$150.100.16.0 / 20$ and $150.100.40.0 / 20$</span>"
            ],
            "answer": "A",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"493291\"></a><div itemprop=\"text\"><p>The $150.100 .0 .0 / 18$ block can be divided into four distinct 120 subnets:</p><ul><li>Subnet 1: $150.100 .0 .0 / 20$ (Range: 150.100 .0 .0 to 150.100 .15 .255 )<br/> </li><li>Subnet 2: $150.100 .16 .0 / 20$ (Range: 150.100 .16 .0 to 150.100 .31 .255 )<br/> </li><li>Subnet 3: $150.100 .32 .0 / 20$ (Range: 150.100 .32 .0 to 150.100 .47 .255 )<br/> </li><li>Subnet 4: $150.100 .48 .0 / 20$ (Range: 150.100 .48 .0 to 150.100 .63 .255 )</li></ul><p>A. 150.100.32.0/20 and 150.100.48.0/20: This option assigns Subnet 3 and Subnet 4. Both are valid 120 blocks, they are within the ISP's range, and they do not overlap. This is the correct, valid allocation.</p><p><br/>B. $150.100 .32 .0 / 20$ and $150.100 .40 .0 / 22$ : This is invalid. The range of 150.100.40.0/22 ( 150.100 .40 .0 to 150.100 .43 .255 ) is entirely contained within the range of $150.100 .32 .0 / 20$, causing the blocks to overlap. Also, the /22 prefix size is incorrect for Organization B.</p><p><br/>C. $150.100 .32 .0 / 21$ and $150.100 .48 .0 / 21$ : This is invalid because the prefix length is incorrect. A /21 block only contains 2048 addresses, but each organization requires 4096 addresses (a /20 block).</p><p><br/>D. $150.100 .16 .0 / 20$ and $150.100 .40 .0 / 20$ : This is invalid. While the first block ( $150.100 .16 .0 / 20$ ) is a valid subnet (Subnet 2), the second block ( $150.100 .40 .0 / 20$ ) is not. A $/ 20$ block derived from the parent $/ 18$ must start on a 16 -address boundary in the third octet $(0,16,32,48)$. The address 150.100 .40 .0 is not a valid starting address for one of these subnets.</p></div><br><br><a href=\"https://gateoverflow.in/493290/go-classes-dpp-cn-subnetting#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-cn-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/computer-networks\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Computer Networks - IPv4 Addressing & Routing</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>A server ( S ) sends a 4 Megabit ( $4 \\times 10^{6}$ bits) file to a client (D). The path between S and D consists of three routers, creating a total of four links. The file is segmented into 2000 packets of equal size. Each of the four links has a length of 200 km and a bandwidth of 10 Mbps . If the signal propagation speed over the links is $2 \\times 10^{8} \\mathrm{~m} / \\mathrm{s}$, what is the total end-to-end delay to send the entire file? (Assume there is no queuing or processing delay).</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">400 ms</span>",
                "<span style=\"display: inline;\">404 ms</span>",
                "<span style=\"display: inline;\">1600 ms</span>",
                "<span style=\"display: inline;\">1604 ms</span>"
            ],
            "answer": "B",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"491903\"></a><div itemprop=\"text\">the total time for the first packet to make the complete journey is: $4 \\times T_{\\text {trans }}+4 \\times T_{\\text {prop }}$ <br/> <br/> Time $=4 \\times 0.2 \\mathrm{~ms}+4 \\times 1 \\mathrm{~ms}=0.8 \\mathrm{~ms}+4 \\mathrm{~ms}=4.8 \\mathrm{~ms}$ <br/> <br/> There are 2000 packets in total. After the first one is sent, there are still 1999 packets left to be transmitted by the source. <br/> <br/> The time required for this is: Additional Time = 1999 packets $\\times T_{\\text {trans }} /$ packet <br/> <br/> <br/> <br/> Additional Time $=1999 \\times 0.2 \\mathrm{~ms}=399.8 \\mathrm{~ms}$ <br/> <br/> <br/> <br/> Total Time $=($ Time for 1 st packet $)+($ Time for rest of packets $)$ Total Time $=4.8 \\mathrm{~ms}+399.8 \\mathrm{~ms}=404.6 \\mathrm{~ms}$ <br/> <br/> Hence $B$ is correct</div><br><br><a href=\"https://gateoverflow.in/491899/go-classes-dpp-cn-communication#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-cn-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/computer-networks\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Computer Networks - IPv4 Addressing & Routing</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\">A ground station transmits a data packet of 2000 bytes to a satellite orbiting at an altitude of 4500 km . The communication link has a bandwidth of 200 Mbps , and the signal travels at the speed of light, approximately $3 \\times 10^{8} \\mathrm{~m} / \\mathrm{s}$. Calculate the total time (in milliseconds, rounded off to two decimal places) for the entire packet to be received by the satellite.</div></span>",
            "image": "",
            "options": [],
            "answer": "15.08",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"491898\"></a><div itemprop=\"text\">1. Calculate Transmission Time ( $T_{\\text {transmission }}$ ):} This is the time it takes for the sender to push all the bits of the packet onto the link. $T_{\\text {transmission }}=\\frac{\\text { Packet Size }}{\\text { Bandwidth }}$ - Packet Size $=2000$ bytes $=2000 \\times 8=16,000$ bits - Bandwidth = $200 \\mathrm{Mbps}=200 \\times 10^{6}$ bits per second $$ T_{\\text {transmission }}=\\frac{16,000 \\text { bits }}{200 \\times 10^{6} \\text { bits } / \\mathrm{s}}=0.00008 \\text { seconds } $$ <br/> <br/> 2. Calculate Propagation Time ( $T_{\\text {propagation }}$ ):} This is the time it takes for the first bit of the packet to travel from the sender to the receiver. $T_{\\text {propagation }}=\\frac{\\text { Distance }}{\\text { Propagation Speed }}$ - Distance $=4500 \\mathrm{~km}=4500 \\times 10^{3}$ meters - Propagation Speed $=3 \\times 10^{8} \\mathrm{~m} / \\mathrm{s}$ $$ T_{\\text {propagation }}=\\frac{4500 \\times 10^{3} \\mathrm{~m}}{3 \\times 10^{8} \\mathrm{~m} / \\mathrm{s}}=0.015 \\text { seconds } $$ <br/> <br/> <br/> <br/> 3. Calculate Total Time:} Total Time $=T_{\\text {transmission }}+T_{\\text {propagation }}$ $$ \\text { Total Time }=0.00008 \\mathrm{~s}+0.015 \\mathrm{~s}=0.01508 \\text { seconds } $$<br/> <br/> Total Time $=0.01508 \\times 1000=15.08 \\mathrm{~ms}$</div><br><br><a href=\"https://gateoverflow.in/491897/go-classes-dpp-cn-communication#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-cn-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/computer-networks\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Computer Networks - IPv4 Addressing & Routing</a></b></div></div>"
        }
    ]
});

registerTest({
    "series": "cse-dpp-2027",
    "order": 4,
    "name": "DPP 04 - Computer Networks (IPv4 Addressing & Routing - Part 4)",
    "testLabel": "DPP 04",
    "testType": "DPP",
    "bracket": "IPv4 Addressing & Routing - Part 4",
    "subject": "cn",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 10,
    "topicsCovered": "IPv4 Addressing & Routing (Practice Set 4)",
    "questions": [
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\">In the network $172.25 .86 .192 / 28$, the fourth octet (in decimal) of the first IP address of the network which can be assigned to a host is $\\_\\_\\_\\_$ .</div></span>",
            "image": "",
            "options": [],
            "answer": "193",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"491672\"></a><div itemprop=\"text\">172.25.86.192/28<br/> To isme 28 bit tk nid hoga so <br/> <br/> 172.25.86.11000000 <br/> <br/> Now there would be 28 fixed bit <br/> now we can't make all hid (except fixed bit) 0 bec that will assign for network id so<br/> <br/> now first usable ip for host is :<br/> <br/> 172.25.86.11000001 /28 <br/> <br/> so <br/> <br/> 172.25.86.193</div><br><br><a href=\"https://gateoverflow.in/491668/go-classes-dpp-cn-subnetting#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-cn-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/computer-networks\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Computer Networks - IPv4 Addressing & Routing</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider the following routing table at an IP router:</p><p>\\[<br/>\\begin{array}{lll}<br/>\\text{Network No} &amp; \\text{Net Mask} &amp; \\text{Next Hop} \\\\<br/>200.20.128.0 &amp; 255.255.192.0 &amp; R_1 \\\\<br/>200.20.160.0 &amp; 255.255.224.0 &amp; R_2 \\\\<br/>200.20.180.0 &amp; 255.255.255.0 &amp; \\text{Interface 0} \\\\<br/>0.0.0.0 &amp; \\text{Default} &amp; R_3 \\\\<br/>\\end{array}<br/>\\]</p><p>For each IP address in Group I, identify the correct choice of the next hop from Group II using the entries from the routing table above.</p><p>\\[<br/>\\begin{array}{ll}<br/>\\textbf{Group I} &amp; \\textbf{Group II} \\\\<br/>\\text{i) }~200.20.180.55 &amp; \\text{a) Interface 0} \\\\<br/>\\text{ii) }~200.20.175.10 &amp; \\text{b) R}_1 \\\\<br/>\\text{iii) }~200.20.150.100 &amp; \\text{c) R}_2 \\\\<br/>\\text{iv) }~200.20.200.1 &amp; \\text{d) R}_3 \\\\<br/>\\end{array}<br/>\\]</p><p> </p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\mathrm{i-a, ii-c, iii-b, iv-d}$<br/></span>",
                "<span style=\"display: inline;\">$\\mathrm{i-a, ii-b, iii-c, iv-d}$<br/></span>",
                "<span style=\"display: inline;\">$\\mathrm{i-c, ii-b, iii-d, iv-a}$<br/></span>",
                "<span style=\"display: inline;\">$\\mathrm{i}-\\mathrm{a}, \\mathrm{ii}-\\mathrm{c}, \\mathrm{iii}-\\mathrm{b}, \\mathrm{iv}-\\mathrm{a}$</span>"
            ],
            "answer": "A",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"491689\"></a><div itemprop=\"text\"><p><strong>Option A</strong> is right .</p><p>I try to solve first match with largest numbers of 1's, if not match then try with another one with largest number of 1's and so on. </p><p>Please correct me, if am wrong🙏</p></div><br><br><a href=\"https://gateoverflow.in/491667/go-classes-dpp-cn-subnetting#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-cn-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/computer-networks\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Computer Networks - IPv4 Addressing & Routing</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>A router has the following entries in its routing table:</p><p>\\[<br/>\\begin{array}{lll}<br/>\\text{Destination} &amp; \\text{Subnet Mask} &amp; \\text{Interface} \\\\<br/>172.16.0.0 &amp; 255.255.0.0 &amp; \\text{Eth0} \\\\<br/>172.16.128.0 &amp; 255.255.192.0 &amp; \\text{Eth1} \\\\<br/>172.16.130.0 &amp; 255.255.255.0 &amp; \\text{Eth3} \\\\<br/>\\text{Default} &amp; &amp; \\text{Eth2} \\\\<br/>\\end{array}<br/>\\]</p><p>On which interfaces will the router forward packets addressed to the destinations $172.16 .130 .50$ and $172.16 .140 .200$, respectively?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">Eth1 and Eth2<br/></span>",
                "<span style=\"display: inline;\">Eth3 and Eth0<br/></span>",
                "<span style=\"display: inline;\">Eth0 and Eth1<br/></span>",
                "<span style=\"display: inline;\">Eth3 and Eth1</span>"
            ],
            "answer": "D",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"491258\"></a><div itemprop=\"text\">$eth0 \\longrightarrow NID: 172.16.0.0 $ and subnet mask $: 255.255.0.0$ <br/> <br/> Slash number=16<br/> <br/> SO, Range of IP addresses are 172.16.0.0 to 172.16.255.255.<br/> <br/> <br/> <br/> $ Eth1 \\longrightarrow $ NID : 172.16.128.0 and subnet mask 255.255.192.0.<br/> <br/> Slash number=18<br/> <br/> So, range of IP addresses are from 172.16.128.0 to 128.16.191.255<br/> <br/> <br/> <br/> $Eth 3 \\longrightarrow $ NID: 172.16.130.0 and subnet mask : 255.255.255.0. Slash number=24<br/> <br/> So, range of IP addresses are 172.16.130.0 to 172.16.139.255<br/> <br/> <br/> <br/> Now for each given Ias check if it's in that range. First check for slash number 24, then 18 and at last 16. <br/> <br/> <br/> <br/> 172.16.130.50 comes under eth3. <br/> <br/> 172.16.149.200 comes under eth1. <br/> <br/> So option D. <br/> <br/> <br/> <br/> <br/> <br/> </div><br><br><a href=\"https://gateoverflow.in/491257/go-classes-dpp-cn-subnetting#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-cn-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/computer-networks\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Computer Networks - IPv4 Addressing & Routing</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>An organization has been assigned the network block $172.20.128.0/18$. The network administrator must create four subnets for four different departments with the following requirements for usable host IP addresses:</p><p>The administrator allocates the subnets sequentially, starting with the largest requirement first from the beginning of the address block. What is the broadcast address of the subnet assigned to the Management department?</p><p><strong>Department Requirements:</strong></p><ul><li>Engineering: $4000$ hosts</li><li>Sales: $2000$ hosts</li><li>Marketing: $1000$ hosts</li><li>Management: $500$ hosts</li></ul></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$172.20.176.255$</span>",
                "<span style=\"display: inline;\">$172.20.144.255$</span>",
                "<span style=\"display: inline;\">$172.20.128.255$</span>",
                "<span style=\"display: inline;\">$172.20.191.255$</span>"
            ],
            "answer": "D",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"491013\"></a><div itemprop=\"text\"><p data-end=\"452\" data-start=\"407\">172.20.128.0 — 172.20.143.255 (Engg)</p><p data-end=\"494\" data-start=\"455\">172.20.144.0 — 172.20.159.255 (Sales)</p><p data-end=\"540\" data-start=\"497\">172.20.160.0 — 172.20.175.255 (Market)</p><p data-end=\"585\" data-start=\"543\">172.20.176.0 — 172.20.191.255 (Manage)<br/><br/><strong>option D</strong><br/><br/>If instead the admin used VLSM subnets to fit each requirement exactly, Management would have been 172.20.156.0/23 → broadcast <strong data-end=\"828\" data-start=\"810\">172.20.157.255</strong>, but that value is not given in option</p></div><br><br><a href=\"https://gateoverflow.in/490903/go-classes-dpp-cn-subnetting#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-cn-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/computer-networks\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Computer Networks - IPv4 Addressing & Routing</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>A network administrator needs to create a single, efficient summary route that advertises a block of networks to a neighboring router. The summary route must precisely cover the following four network addresses and no more.</p><p>Which of the following represents the most efficient summary route for these networks?</p><p><strong>Networks to summarize:</strong></p><ul><li>$192.168.16.0/24$</li><li>$192.168.17.0/24$</li><li>$192.168.18.0/24$</li><li>$192.168.19.0/24$</li></ul></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$192.168.16.0/23$</span>",
                "<span style=\"display: inline;\">$192.168.19.0/22$</span>",
                "<span style=\"display: inline;\">$192.168.16.0/22$</span>",
                "<span style=\"display: inline;\">$192.168.0.0/16$</span>"
            ],
            "answer": "C",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"490545\"></a><div itemprop=\"text\">The correct answer is $\\mathbf{C}$.<br/> <br/> $\\textbf{Step 1: Identify the Changing Octet}$ <br/> <br/> The first two octets ($192.168$) are the same. <br/> <br/> The third octet is where the networks differ: <br/> <br/> $(16,\\,17,\\,18,\\,19)$.<br/> <br/> $\\textbf{Step 2: Convert the Changing Octet to Binary}$<br/> \\[<br/> \\begin{aligned}<br/> 16 &amp;= 00010000 \\\\<br/> 17 &amp;= 00010001 \\\\<br/> 18 &amp;= 00010010 \\\\<br/> 19 &amp;= 00010011<br/> \\end{aligned}<br/> \\]<br/> <br/> $\\textbf{Step 3: Find the Common Bits}$<br/> <br/> Look from left to right and find how many bits are identical across all the numbers before they start to differ:<br/> \\[<br/> \\begin{aligned}<br/> 16 &amp;= 000100\\,|\\,00 \\\\<br/> 17 &amp;= 000100\\,|\\,01 \\\\<br/> 18 &amp;= 000100\\,|\\,10 \\\\<br/> 19 &amp;= 000100\\,|\\,11<br/> \\end{aligned}<br/> \\]<br/> <br/> $\\textbf{Step 4: Calculate the New Subnet Mask}$<br/> \\[<br/> \\begin{aligned}<br/> &amp;\\text{Common bits from first two octets: } 8 + 8 = 16 \\\\<br/> &amp;\\text{Common bits in the third octet: } 6 \\\\<br/> &amp;\\text{Total common bits: } 16 + 6 = 22<br/> \\end{aligned}<br/> \\]<br/> Therefore, the new subnet mask is $\\mathbf{/22}$.<br/> <br/> $\\textbf{Step 5: Determine the New Network Address}$<br/> <br/> Take the lowest IP address in the range: $192.168.16.0$.<br/> <br/> Using the new $/22$ mask means the first $22$ bits are the network portion and the remaining $10$ bits are the host portion.<br/> <br/> To get the network address, we set all host bits to $0$.<br/> <br/> \\[<br/> \\text{Binary for the third octet: } 00010000<br/> \\]<br/> <br/> The first $6$ bits are the network portion, and the last $2$ are host bits.<br/> <br/> Setting the host bits to $0$ gives $00010000 = 16$.<br/> <br/> \\[<br/> \\boxed{\\text{Summary network address: } 192.168.16.0/22}<br/> \\]</div><br><br><a href=\"https://gateoverflow.in/490544/go-classes-dpp-cn-subnetting#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-cn-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/computer-networks\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Computer Networks - IPv4 Addressing & Routing</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>A server ($S$) and a workstation ($W$) are configured on a network as follows:</p><p>Which one of the following statements is true?</p><p><strong>Host Configurations:</strong></p><ul><li>Server S has the IP address $172.16.70.20$ and the netmask $255.255.240.0$.</li><li>Workstation W has the IP address $172.16.10.100$ and the netmask $255.255.0.0$.</li></ul></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$S$ and $W$ both assume they are on the same network.</span>",
                "<span style=\"display: inline;\">$S$ assumes $W$ is on the same network, but $W$ assumes $S$ is on a different network.</span>",
                "<span style=\"display: inline;\">$S$ assumes $W$ is on a different network, but $W$ assumes $S$ is on the same network.</span>",
                "<span style=\"display: inline;\">$S$ and $W$ both assume they are on different networks.</span>"
            ],
            "answer": "C",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"492311\"></a><div itemprop=\"text\">perform AND with each of the netmask and each of ip,, then for S we get different addresses when AND with metmask1 and netmask2 . While in case of W we get same addresses after masking <br/> so option C</div><br><br><a href=\"https://gateoverflow.in/490542/go-classes-dpp-cn-subnetting#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-cn-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/computer-networks\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Computer Networks - IPv4 Addressing & Routing</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>The routing table of a corporate router is shown below:</p><p>\\[<br/>\\begin{array}{l l l}<br/>\\textbf{Destination} &amp; \\textbf{Subnet Mask} &amp; \\textbf{Interface} \\\\<br/>203.0.113.0 &amp; 255.255.255.0 &amp; \\text{igb0} \\\\<br/>203.0.113.128 &amp; 255.255.255.192 &amp; \\text{igb1} \\\\<br/>10.10.20.0 &amp; 255.255.255.0 &amp; \\text{em0} \\\\<br/>\\text{Default} &amp; &amp; \\text{em1} \\\\<br/>\\end{array}<br/>\\]</p><p>On which interface will the router forward packets addressed to the destinations $203.0.113.140$ and $10.10 .30 .55$ , respectively?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">igb1 and em1<br/></span>",
                "<span style=\"display: inline;\">igb0 and em1<br/></span>",
                "<span style=\"display: inline;\">igb1 and em0<br/></span>",
                "<span style=\"display: inline;\">igb0 and em0</span>"
            ],
            "answer": "A",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"492312\"></a><div itemprop=\"text\"><p>perform <strong>AND</strong> with the given addresses with the <strong>subnet masks</strong> (<em>longest subnet mask is preferred)</em> <br/>option A </p></div><br><br><a href=\"https://gateoverflow.in/490541/go-classes-dpp-cn-subnetting#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-cn-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/computer-networks\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Computer Networks - IPv4 Addressing & Routing</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>What is the broadcast address for the subnet in which the host IP address $192.168 .16 .89$ with a subnet mask of $/28$ is located?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$192.168 .16 .95$<br/></span>",
                "<span style=\"display: inline;\">$192.168 .16 .80$<br/></span>",
                "<span style=\"display: inline;\">$192.168.16.255$<br/></span>",
                "<span style=\"display: inline;\">$192.168 .16 .96$</span>"
            ],
            "answer": "A",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"490111\"></a><div itemprop=\"text\"><p>Identify Network and Host Bits: The address is $192.168.16.89/28$. The $/28$ indicates that the first $28$ bits are for the network and the remaining $32-28=4$ bits are for the hosts.</p><p>Find the Network Address: The network address is the first address of the subnet. To find it, we set all 4 host bits to $0$.</p><ul><li>The last octet is $89$, which is $01011001$ in binary.<br/> </li><li>The subnet mask for $128$ in the last octet is $11110000$.<br/> </li><li>Performing a bitwise AND: $01011001$ AND $11110000$ gives $01010000$.<br/> </li><li>$01010000$ in decimal is $80$ . So the network address is $192.168.16.80$.</li></ul><p>Find the Broadcast Address: To find the broadcast address, we take the network address and set all $4$ host bits to $1$.</p><ul><li>Network address (last octet): $01010000$.<br/> </li><li>Setting the last $4$ bits to $1$ gives $01011111$.<br/> </li><li>$01011111$ in decimal is $95$.<br/> </li><li>Therefore, the broadcast address is $192.168.16.95$.</li></ul></div><br><br><a href=\"https://gateoverflow.in/490110/go-classes-dpp-cn-isro#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-cn-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/computer-networks\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Computer Networks - IPv4 Addressing & Routing</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\">Every host in an $\\mathrm{IPv4}$ network has a $1$-second resolution real-time clock with battery backup. Each host needs to generate up to $500$ unique identifiers per second. Assume that each host has a globally unique $\\mathrm{IPv4}$ address. Design a $52$-bit globally unique ID for this purpose. After what period (in seconds) will the identifiers generated by a host wrap around?</div></span>",
            "image": "",
            "options": [],
            "answer": "2048",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"490108\"></a><div itemprop=\"text\">Each host needs to generate $500$ unique identifiers per second, which requires $\\lceil\\lg 500\\rceil=9$ bits.<br/> <br/> Now, these $9$ bits, along with the $32$ bit globally unique IP address, will give a globally unique $41$ bit ID which stays constant.<br/> <br/> Since we are allowed $52$ bits, we can use the next $11$ bits using the clock, which changes every second.<br/> <br/> Thus our IDs will wrap around once in $2^{11}=2048$ seconds.</div><br><br><a href=\"https://gateoverflow.in/490107/go-classes-dpp-cn-ip-addressing#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-cn-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/computer-networks\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Computer Networks - IPv4 Addressing & Routing</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Suppose a message of size $20,000$ bytes is transmitted from a source to a destination using $\\mathrm{IPv4}$ protocol via two routers as shown in the figure. Each router has a defined maximum transmission unit (MTU) as shown in the figure, including the IP header. The number of fragments that will be delivered to the destination is $\\_\\_\\_\\_$ . (Answer in integer)</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">Router-1: MTU = $8000$ bytes<br/></span>",
                "<span style=\"display: inline;\">Router-2: MTU = $2500$ bytes</span>"
            ],
            "answer": "10",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"489697\"></a><div itemprop=\"text\"><p>In <strong>IPv4 fragmentation</strong>, each fragment must fit within the <strong>Maximum Transmission Unit (MTU)</strong> of the outgoing link. Every fragment has its own IPv$4$ header.</p><p>The given message size is $20000\\text{ bytes}$</p><p>The MTUs of the two routers are:</p><p>$MTU_1=8000,\\qquad MTU_2=2500$</p><p>Assuming the IPv$4$ header has no options, its size is $20$ bytes.</p><p>The data size of every non-final fragment must be a multiple of $8$ bytes because the IPv$4$ Fragment Offset field uses units of $8$ bytes.</p><p><strong>Fragmentation at Router $\\mathbf{1}$</strong></p><p>The maximum data size in a non-final fragment is:</p><p>$$\\begin{aligned} D_1&amp;=\\left\\lfloor\\frac{8000-20}{8}\\right\\rfloor\\times8=997\\times8=7976\\text{ bytes} \\end{aligned}$$</p><p>The $20000$-byte message is therefore divided into:</p><p>$$20000=7976+7976+4048$$</p><p>Thus, <strong>Router $\\mathbf{1}$ produces $\\mathbf{3}$ fragments.</strong></p><p>$$\\begin{array}{|c|c|c|} \\hline \\textbf{Fragment} &amp; \\textbf{Data (bytes)} &amp; \\textbf{Total Size (bytes)}\\\\ \\hline 1 &amp; 7976 &amp; 7996\\\\ \\hline 2 &amp; 7976 &amp; 7996\\\\ \\hline 3 &amp; 4048 &amp; 4068\\\\ \\hline \\end{array}$$</p><p><strong>Fragmentation at Router $\\mathbf{2}$</strong></p><p>Since Router $2$ has an MTU of $2500$ bytes, the maximum data size per fragment is:</p><p>$$\\begin{aligned} D_2&amp;=\\left\\lfloor\\frac{2500-20}{8}\\right\\rfloor\\times8=310\\times8=2480\\text{ bytes} \\end{aligned}$$</p><p>Each fragment received from Router $1$ must be checked against this smaller MTU.</p><p><strong>First Fragment:</strong></p><p>The first fragment contains $7976$ bytes of data and is divided as:</p><p>$$7976=2480+2480+2480+536$$</p><p>Therefore, it produces <strong>$\\mathbf{4}$ fragments</strong>.</p><p><strong>Second Fragment:</strong></p><p>The second fragment also contains $7976$ bytes of data and is divided as:</p><p>$$7976=2480+2480+2480+536$$</p><p>Therefore, it produces <strong>$\\mathbf{4}$ fragments</strong>.</p><p><strong>Third Fragment:</strong></p><p>The third fragment contains $4048$ bytes of data and is divided as:</p><p>$$4048=2480+1568$$</p><p>Therefore, it produces <strong>$\\mathbf{2}$ fragments</strong>.</p><p><strong>Complete Fragmentation at Router $\\mathbf{2}$</strong></p><p>$$\\begin{array}{|c|l|c|} \\hline \\textbf{Original Fragment} &amp; \\textbf{Data Division (bytes)} &amp; \\textbf{Count}\\\\ \\hline 1 &amp; 2480+2480+2480+536 &amp; 4\\\\ \\hline 2 &amp; 2480+2480+2480+536 &amp; 4\\\\ \\hline 3 &amp; 2480+1568 &amp; 2\\\\ \\hline \\textbf{Total} &amp; &amp; \\mathbf{10}\\\\ \\hline \\end{array}$$</p><p>All fragment data sizes are multiples of $8$ bytes, and every resulting IP fragment fits within the $2500$-byte MTU.</p><p>Therefore, the number of fragments delivered to the destination is: $$N=4+4+2$$ $$\\boxed{N=10}$$</p></div><br><br><a href=\"https://gateoverflow.in/489696/go-classes-dpp-cn-fragmentation#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-cn-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/computer-networks\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Computer Networks - IPv4 Addressing & Routing</a></b></div></div>"
        }
    ]
});

registerTest({
    "series": "cse-dpp-2027",
    "order": 5,
    "name": "DPP 05 - Computer Networks (IPv4 Addressing & Routing - Part 5)",
    "testLabel": "DPP 05",
    "testType": "DPP",
    "bracket": "IPv4 Addressing & Routing - Part 5",
    "subject": "cn",
    "date": "Nov 03, 2026",
    "duration": "15 Min",
    "totalMarks": 4,
    "topicsCovered": "IPv4 Addressing & Routing (Practice Set 5)",
    "questions": [
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Which one of the following CIDR prefixes exactly represents the range of IP addresses $172.16.8.0$ to $172.16 .15 .255$ ?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$172.16.8.0 / 24$<br/></span>",
                "<span style=\"display: inline;\">$172.16.0.0 / 21$<br/></span>",
                "<span style=\"display: inline;\">$172.16.8.0 / 20$<br/></span>",
                "<span style=\"display: inline;\">$172.16.8.0 / 21$</span>"
            ],
            "answer": "A",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"489314\"></a><div itemprop=\"text\"><p>The key is to look at the start and end addresses in binary, specifically focusing on the octet where the range begins and ends (the third octet in this case).</p><ul><li>Start Address (third octet): $8=00001000$<br/> </li><li>End Address (third octet): $15=00001111$</li></ul><p>When you compare them, you can see the first 5 bits ( 00001 ) are identical. The rest of the bits differ, which defines the range for the host addresses.</p><p>The prefix length is the number of constant bits:</p><ul><li>8 bits (from 172 ) +8 bits (from 16 ) +5 bits (from the third octet) $=21$ bits.<br/> </li><li>This gives us a prefix of $\\mathbf{/ 2 1}$.</li></ul><p>The network address is always the first address in the range. In this case, the range is defined to start at $172.16 .8 .0$ , which perfectly matches the prefix we found.</p><p>Combining the network address and the prefix length gives you the final answer:</p><p>$$<br/>172.16 .8 .0 / 21 \\text {. }<br/>$$</p></div><br><br><a href=\"https://gateoverflow.in/489313/go-classes-dpp-cn-ip-addressing#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-cn-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/computer-networks\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Computer Networks - IPv4 Addressing & Routing</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>In an IPv4 datagram, the $M$ bit is $1$ , the value of $H L E N$ is $5$ , the value of total length is $520$ , and the fragment offset value is $150$ . The position of the datagram and the sequence numbers of the first and the last bytes of the payload, respectively, are:</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">Last fragment, $1200$ and $1699$<br/></span>",
                "<span style=\"display: inline;\">Middle fragment, $150$ and $649$<br/></span>",
                "<span style=\"display: inline;\">Middle fragment, $1200$ and $1699$<br/></span>",
                "<span style=\"display: inline;\">Middle fragment, $1200$ and $1719$</span>"
            ],
            "answer": "A",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"495190\"></a><div itemprop=\"text\"><p data-end=\"141\" data-start=\"94\"><strong data-end=\"106\" data-start=\"94\">HLEN = 5</strong><br data-end=\"109\" data-start=\"106\"/>Header length = 5 × 4<br data-end=\"133\" data-start=\"130\"/> = 20</p><p data-end=\"216\" data-start=\"143\">Since M = 1, it is not the last fragment.<br data-end=\"187\" data-start=\"184\"/>Fragment offset value = 150</p><p data-end=\"269\" data-start=\"218\">∴ First byte sequence number = 150 × 8<br data-end=\"259\" data-start=\"256\"/> = 1200</p><p data-end=\"336\" data-start=\"271\">Payload = Total length – Header length<br data-end=\"312\" data-start=\"309\"/> = 520 – 20<br data-end=\"327\" data-start=\"324\"/> = 500</p><p data-end=\"385\" data-start=\"338\">Last byte sequence number = 1200 + 500 - 1 = 1699</p></div><br><br><a href=\"https://gateoverflow.in/489312/go-classes-dpp-cn-network-layer#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-cn-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/computer-networks\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Computer Networks - IPv4 Addressing & Routing</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider three IP networks $A, B$, and $C$. Host $H \\_A$ in network $A$ sends messages each containing $240$ bytes of application data to a host $H_{-} C$ in network $C$. The TCP layer prefixes a $20$ byte header to the message.</p><p>This passes through an intermediate network $B$. The maximum packet size, including the $20$ byte IP header, in each network is:</p><p>The network $A$ and $B$ are connected through a 2 Mbps link, while $B$ and $C$ are connected by a $1$ Mbps link (bps = bits per second).</p><p>What is the rate at which application data is transferred to host $H_C$ ? Ignore errors, acknowledgments, and other overheads.</p><p><strong>Network MTUs:</strong></p><ul><li>Network A: $1500$ bytes</li><li>Network B: $120$ bytes</li><li>Network C: $1500$ bytes</li></ul></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$1.0$ Mbps</span>",
                "<span style=\"display: inline;\">$1.5$ Mbps</span>",
                "<span style=\"display: inline;\">$2.0$ Mbps</span>",
                "<span style=\"display: inline;\">$0.75$ Mbps</span>"
            ],
            "answer": "D",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"489310\"></a><div itemprop=\"text\"><p>To send one 240-byte application message...</p><p>- ...we had to transmit a total of $\\mathbf{3 2 0}$ bytes across the network (due to fragmentation and the addition of three 20-byte IP headers and one 20-byte TCP header).</p><p>The efficiency is the ratio of application data to the total data transmitted:</p><ul><li>Efficiency $=\\frac{\\text { Application Data }}{\\text { Total Transmitted Data }}=\\frac{240 \\text { bytes }}{320 \\text { bytes }}=0.75$ or $\\mathbf{7 5} \\%$</li></ul><p>This means only $75\\%$ of the data travelling through the bottleneck link is the actual application data you care about.</p><p>Application Data Rate $=1 \\mathrm{Mbps} \\times 0.75=0.75 \\mathrm{Mbps}$</p></div><br><br><a href=\"https://gateoverflow.in/489309/go-classes-dpp-cn-network-layer#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-cn-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/computer-networks\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Computer Networks - IPv4 Addressing & Routing</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider three IP networks, $A$, $B$, and $C$. Host $H_{-} A$ in network $A$ sends messages, each containing 240 bytes of application data, to a host $H \\_C$ in network $C$. The TCP layer prefixes a 20 byte header to the message.</p><p>This passes through an intermediate network $B$. The maximum packet size, including the 20 byte IP header, in each network is:</p><p>The network $A$ and $B$ are connected through a 2 Mbps link, while $B$ and $C$ are connected by a 1<br/>Mbps link (bps = bits per second).</p><p><img alt=\"\" height=\"72\" src=\"https://cdn.mathpix.com/snip/images/Ok1BwRrrdGceknFB4ehJaZ5IzOWvCIwDwLv4ZhLEXPM.original.fullsize.png\" width=\"558\"/></p><p>Assuming that the packets are correctly delivered, how many bytes, including headers, are delivered to the IP layer at the destination for one application message in the best case?<br/>Consider only data packets.</p><p><strong>Network MTUs:</strong></p><ul><li>Network A: $1500$ bytes</li><li>Network B: $120$ bytes</li><li>Network C: $1500$ bytes</li></ul></div></span>",
            "image": "https://cdn.mathpix.com/snip/images/Ok1BwRrrdGceknFB4ehJaZ5IzOWvCIwDwLv4ZhLEXPM.original.fullsize.png",
            "options": [
                "<span style=\"display: inline;\">$280$</span>",
                "<span style=\"display: inline;\">$300$</span>",
                "<span style=\"display: inline;\">$320$</span>",
                "<span style=\"display: inline;\">$340$</span>"
            ],
            "answer": "C",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"489308\"></a><div itemprop=\"text\"><p>1. Calculate Total Data Size (TCP Segment)</p><p>First, we need to find the total amount of data that needs to be sent by the TCP layer. This is the application data plus the TCP header.</p><ul><li>Application Data: 240 bytes<br/> </li><li>TCP Header: 20 bytes<br/> </li><li>Total TCP Segment Size $=240+20-260$ bytes</li></ul><p>2. Determine the Maximum Payload per Packet</p><p>The packets must travel through Network A, B, and C. The smallest MTU on this path (the \"Path $\\mathrm{MTU}^{-}$) dictates the maximum size of any single IP packet.</p><ul><li>MTU of Network A: 1500 bytes<br/> </li><li>MTU of Network B: 120 bytes<br/> </li><li>MTU of Network C: 1500 bytes</li></ul><p>The bottleneck is Network B, so the Path MTU is 120 bytes. Since every IP packet has a 20-byte IP header, the maximum amount of data (payioad) each packet can carry is:</p><ul><li>Maximum Payload = Path MTU - IP Header Size<br/> </li><li>Maximum Payload $=120-20=100$ bytes</li></ul><p>3. Calculate the Number and Size of Packets</p><p>Now we need to fragment the 260-byte TCP segment into packets, where each packet can hold at most 100 bytes of that segment.</p><ul><li>Number of Packets $=\\operatorname{ceil}\\left(\\frac{\\text { Total TCP Segumat }}{\\text { Max Paylual }}\\right)-\\operatorname{ceil}\\left(\\frac{200}{100}\\right)-\\operatorname{ceil}(2.6)-3$ packets</li></ul><p>Let's determine the size of each of these three packets:</p><ul><li>Packet 1: 20-byte IP Header +100 bytes of data $=120$ bytes</li><li>Packet 2: 20-byte IP Header +100 bytes of data $=120$ bytes</li><li>Packet 3: 20-byte IP Header +60 bytes of remaining data $(260-100-100)=80$ bytes</li></ul><p>4. Sum the Total Bytes Received</p><p>The question asks for the total bytes delivered to the destination's IP layer. This means we sum the full size of all the IP packets that arrive.</p><ul><li>Total Bytes $=$ Packet $1+$ Packet $2+$ Packet 3</li><li>Total Bytes $=120+120+80=\\mathbf{3 2 0}$ bytes</li></ul><p>Therefore, the correct choice is $\\mathbf{C}$.</p></div><br><br><a href=\"https://gateoverflow.in/489307/go-classes-dpp-cn-network-layer#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-cn-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/computer-networks\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Computer Networks - IPv4 Addressing & Routing</a></b></div></div>"
        }
    ]
});

registerTest({
    "series": "cse-dpp-2027",
    "order": 6,
    "name": "DPP 06 - Computer Networks (Error Detection & Correction)",
    "testLabel": "DPP 06",
    "testType": "DPP",
    "bracket": "Error Detection & Correction",
    "subject": "cn",
    "date": "Nov 03, 2026",
    "duration": "20 Min",
    "isFree": "true",
    "totalMarks": 7,
    "topicsCovered": "Error Detection & Correction Practice Questions",
    "questions": [
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>A bit-stuffing-based framing protocol uses an $8$-bit flag pattern of $01111110$. If the output bitstring after stuffing is $011111011111001$, then the original input bitstring is:</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$011111011111001$<br/></span>",
                "<span style=\"display: inline;\">$0111111111101$<br/></span>",
                "<span style=\"display: inline;\">$01111111111001$<br/></span>",
                "<span style=\"display: inline;\">$01111101111101$</span>"
            ],
            "answer": "B",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"494467\"></a><div itemprop=\"text\"><p>Flag: The special pattern is 01111110.<br/><br/>Sender's Rule (Stuffing): To prevent the flag pattern from accidentally appearing in the data, the sender inserts (stuffs) a 0 after any sequence of five consecutive 1s.</p><p>Receiver's Rule (Destuffing): The receiver does the opposite. It scans the data, and any time it finds a 0 that follows five consecutive 1s, it removes that 0.</p><p>Applying the Rule<br/><br/>We need to perform the receiver's rule (destuffing) on the given output string.</p><ul><li>Stuffed String: 011111011111001</li></ul><p>Let's scan the string and look for the pattern 111110:<br/><br/>1. First occurrence:</p><ul><li>011111011111001<br/> </li><li>The scanner sees five 1 s ( 11111 ) followed by a 0.<br/> </li><li>This 0 must have been stuffed. The receiver removes it.<br/> </li><li>String after first removal: $011111+11111001=01111111111001$</li></ul><p>2. Second occurrence:</p><ul><li>Now, the scanner continues its work on the new string: 01111111111001<br/> </li><li>It scans past the first set of 1s and finds another group of five 1s.<br/> </li><li>01111111111 0 ** 01<br/> </li><li>The scanner sees five 1s (the ones in the middle) followed by a 0.<br/> </li><li>This 0 must also have been stuffed. The receiver removes it.<br/> </li><li>String after second removal: $01111111111+01=0111111111101$</li></ul><p>After removing both stuffed $\\theta \\mathrm{s}$, the original input string is 0111111111101.<br/><br/><strong>This matches Option B.</strong></p></div><br><br><a href=\"https://gateoverflow.in/494466/go-classes-dpp-cn-bit-stuffing#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-cn-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/computer-networks\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Computer Networks - Error Detection & Correction</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Determine the minimum Hamming distance for the following set of codewords:<br/><br/>C = $\\{101010, 010101, 111000, 000111\\}$</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$2$<br/></span>",
                "<span style=\"display: inline;\">$3$<br/></span>",
                "<span style=\"display: inline;\">$4$<br/></span>",
                "<span style=\"display: inline;\">$5$</span>"
            ],
            "answer": "A",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"491302\"></a><div itemprop=\"text\">Ans should be 3</div><br><br><a href=\"https://gateoverflow.in/491248/go-classes-dpp-cn-hamming-distance#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-cn-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/computer-networks\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Computer Networks - Error Detection & Correction</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>A block code scheme has the following set of valid code words:</p><p>$$<br/>000111,011001,100101,111010<br/>$$</p><p><br/>What is the maximum number of bit errors that can be detected?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$1$<br/></span>",
                "<span style=\"display: inline;\">$2$<br/></span>",
                "<span style=\"display: inline;\">$3$<br/></span>",
                "<span style=\"display: inline;\">$4$</span>"
            ],
            "answer": "A",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"490146\"></a><div itemprop=\"text\">Answer is hamming distsance is 2 here 000111 and 100101 so we can able to detect 1 bit error and 0 bit error correction</div><br><br><a href=\"https://gateoverflow.in/490106/go-classes-dpp-cn-error-detection#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-cn-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/computer-networks\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Computer Networks - Error Detection & Correction</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider the following message $M=11010111$. The cyclic redundancy check (CRC) for this message using the divisor polynomial $x^4+x+1$ is:</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$1001$<br/></span>",
                "<span style=\"display: inline;\">$0001$<br/></span>",
                "<span style=\"display: inline;\">$0101$<br/></span>",
                "<span style=\"display: inline;\">$1100$</span>"
            ],
            "answer": "A",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"490213\"></a><div itemprop=\"text\">answer is 0101 i guess no option matching</div><br><br><a href=\"https://gateoverflow.in/490105/go-classes-dpp-cn-crc#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-cn-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/computer-networks\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Computer Networks - Error Detection & Correction</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider the binary code that consists of only four valid codewords as given below:</p><p>$$<br/>000000,111100,001111,110011<br/>$$</p><p><br/>Let the minimum Hamming distance of the code be $\\mathbf{p}$ and the maximum number of erroneous bits that can be corrected by the code be $\\mathbf{q}$. Then the values of $\\mathbf{p}$ and $\\mathbf{q}$ are</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$p=3$ and $q=1$<br/></span>",
                "<span style=\"display: inline;\">$\\mathrm{p}=4$ and $\\mathrm{q}=2$<br/></span>",
                "<span style=\"display: inline;\">$\\mathrm{p}=4$ and $\\mathrm{q}=1$<br/></span>",
                "<span style=\"display: inline;\">$p=6$ and $q=2$</span>"
            ],
            "answer": "C",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"489757\"></a><div itemprop=\"text\"><p>Hamming Distance:<br/><u>00</u> <u>00</u> 00 - <u>11</u> <u>11</u> 00 ---&gt; 4</p><p>00 <u>00</u> <u>00</u> - 00 <u>11</u> <u>11</u> ---&gt; 4</p><p><u>00</u> 00 <u>00</u> - <u>11</u> 00 <u>11</u> ---&gt; 4</p><p><u>11</u> 11 <u>00</u> - <u>00</u> 11 <u>11</u> ---&gt; 4</p><p>11 <u>11</u> <u>00</u> - 11 <u>00</u> <u>11</u> ---&gt; 4</p><p><u>00</u> <u>11</u> 11 - <u>11</u> <u>00</u> 11 ---&gt; 4<br/> </p><p>p = 4</p><p>q = (p-1)/2 = (4-1)/2 = 1.5 = 1 (roundoff)</p><p>Ans: C</p></div><br><br><a href=\"https://gateoverflow.in/489695/go-classes-dpp-cn-hamming-distance#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-cn-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/computer-networks\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Computer Networks - Error Detection & Correction</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider the cyclic redundancy check (CRC)-based error-detecting scheme having the generator polynomial $X^4+X^3+1$. Suppose the message $m_5 m_4 m_3 m_2 m_1 m_0=101010$ is to be transmitted. The value of the 4-bit checkbit sequence is:</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$1000$<br/></span>",
                "<span style=\"display: inline;\">$1001$<br/></span>",
                "<span style=\"display: inline;\">$0001$<br/></span>",
                "<span style=\"display: inline;\">$1101$</span>"
            ],
            "answer": "B",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"489844\"></a><div itemprop=\"text\"><p>Answer :<br/><br/><strong>B) 1001</strong></p><p style=\"text-align:center\"><img alt=\"\" height=\"1080\" src=\"https://gateoverflow.in/?qa=blob&amp;qa_blobid=16723565857397867052\" width=\"1200\"/></p></div><br><br><a href=\"https://gateoverflow.in/489694/go-classes-dpp-cn-crc#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-cn-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/computer-networks\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Computer Networks - Error Detection & Correction</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>The message $1011011$ is to be transmitted using the CRC polynomial $x^3+x^2+1$ to protect it from errors. The message that should be transmitted is:</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$1011011000$<br/></span>",
                "<span style=\"display: inline;\">$1011011001$<br/></span>",
                "<span style=\"display: inline;\">$1011011101$<br/></span>",
                "<span style=\"display: inline;\">$10110111101$</span>"
            ],
            "answer": "A",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"489693\"></a><div itemprop=\"text\"><p><br/>$\\textbf{Identify the components:}$<br/> </p><ul><li>Message (M): \\( 1011011 \\) <br/> </li><li>Generator Polynomial (P): \\( x^3 + x^2 + 1 \\). </li></ul><p> In binary, this is represented as \\( 1101 \\). </p><p><br/>$\\textbf{Append zeros:}$<br/> </p><p>The degree of the polynomial is 3. <br/><br/>Therefore, we append 3 zeros to the end of the message.</p><p><br/>$\\text{Appended Message: } 1011011000$<br/> </p><p>We now perform binary division of \\( 1011011000 \\) by \\( 1101 \\).</p><p> </p><p><br/>$\\textbf{Step 1:}$<br/><br/>Take the first 4 bits:</p><p>\\[<br/>\\begin{array}{r}<br/>1011\\,011000 \\\\<br/>\\underline{-1101} \\\\<br/>0110<br/>\\end{array}<br/>\\]</p><p> </p><p><br/>$\\textbf{Step 2:}$<br/><br/>The result is \\( 0110 \\). Discard the leading zero to get \\( 110 \\). <br/><br/>Bring down the next bit (0) → New 4-bit number: \\( 1100 \\).</p><p>\\[<br/>\\begin{array}{r}<br/>1100 \\\\<br/>\\underline{-1101} \\\\<br/>0001<br/>\\end{array}<br/>\\]</p><p> </p><p><br/>$\\textbf{Step 3:}$<br/><br/>The result is \\( 0001 \\). Discard leading zeros → \\( 1 \\). <br/><br/>Bring down the next three bits (1,1,0) → New number: \\( 1110 \\).</p><p>\\[<br/>\\begin{array}{r}<br/>1110 \\\\<br/>\\underline{-1101} \\\\<br/>0011<br/>\\end{array}<br/>\\]</p><p> </p><p><br/>$\\textbf{Step 4:}$<br/><br/>The result is \\( 0011 \\). Discard leading zeros → \\( 11 \\). <br/><br/>Bring down the next two bits (0,0) → New number: \\( 1100 \\).</p><p>\\[<br/>\\begin{array}{r}<br/>1100 \\\\<br/>\\underline{-1101} \\\\<br/>0001<br/>\\end{array}<br/>\\]</p><p> </p><p><br/>$\\textbf{Final Remainder:}$<br/> </p><p>We have processed all bits. The final remainder is:</p><p>\\[<br/>001<br/>\\]</p><p> </p><p><br/>$\\textbf{Final Transmitted Message:}$<br/> </p><p>The transmitted codeword is the original message plus the remainder:</p><p>\\[<br/>1011011 \\, || \\, 001 = 1011011001<br/>\\]</p></div><br><br><a href=\"https://gateoverflow.in/489690/go-classes-dpp-cn-crc#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-cn-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/computer-networks\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Computer Networks - Error Detection & Correction</a></b></div></div>"
        }
    ]
});

registerTest({
    "series": "cse-dpp-2027",
    "order": 7,
    "name": "DPP 07 - Computer Networks (Flow Control & Sliding Window Protocols - Part 1)",
    "testLabel": "DPP 07",
    "testType": "DPP",
    "bracket": "Flow Control & Sliding Window Protocols - Part 1",
    "subject": "cn",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 10,
    "topicsCovered": "Flow Control & Sliding Window Protocols (Practice Set 1)",
    "questions": [
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>A sender uses the Selective Repeat ARQ protocol.</p><p>Assuming no losses or errors, what is the sender's throughput in $\\textbf{Kbps}$?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">Frame size $=2000 \\text{bits}$<br/></span>",
                "<span style=\"display: inline;\">Sender transmission rate $=500 \\mathrm{Kbps}$ $(1 \\mathrm{Kbps}=1000 \\mathrm{bps})$<br/></span>",
                "<span style=\"display: inline;\">ACK size $=20 ~\\text{bytes}$<br/></span>",
                "<span style=\"display: inline;\">Receiver ACK transmission rate $=100 \\mathrm{Kbps}$<br/></span>",
                "<span style=\"display: inline;\">One-way propagation delay $=50 \\mathrm{~ms}$<br/></span>",
                "<span style=\"display: inline;\">Sender window size $W_s=5 ~\\text{frames}$<br/></span>"
            ],
            "answer": "94.7",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"499880\"></a><div itemprop=\"text\"><p>Frame size $L_{\\text {frame }}=2000 ~\\text{bits}$<br/><br/>Sender data rate $R_{\\text {data }}=500 \\mathrm{Kbps}=500,000 \\mathrm{bps}$<br/><br/>ACK size $L_{\\text {ack }}=20 ~\\text{bytes} = 160 ~\\text{bits}$<br/><br/>ACK transmission rate $R_{\\text {ack }}=100 \\mathrm{Kbps}=100,000 \\mathrm{bps}$<br/><br/>One-way propagation delay $T_p=50 \\mathrm{~ms}=0.05 \\mathrm{~s}$<br/><br/>Sender window size $W=5$ frames</p><p>$$<br/>\\begin{aligned}<br/>T_{\\text {tx-data }} &amp; =\\frac{L_{\\text {frame }}}{R_{\\text {data }}}=\\frac{2000}{500000}=0.004 \\mathrm{~s} \\\\\\\\<br/>T_{\\text {tx-ack }} &amp; =\\frac{L_{\\text {ack }}}{R_{\\text {ack }}}=\\frac{160}{100000}=0.0016 \\mathrm{~s}<br/>\\end{aligned}<br/>$$</p><p>First frame sent at $t=0$, last bit at $t=0.004$.<br/><br/>It arrives at receiver at $t=0.004+T_p=0.054 \\mathrm{~s}$.<br/><br/>Receiver sends ACK: transmission time of ACK $=0.0016 \\mathrm{~s}$, so ACK last bit sent at $t=0.054+ 0.0016=0.0556$.<br/><br/>ACK arrives at sender at $t=0.0556+T_p=0.1056 \\mathrm{~s}$.<br/><br/>So:</p><p>$$<br/>\\begin{gathered}<br/>T_{\\text {firstACK }}=0.1056 \\mathrm{~s} \\\\\\\\<br/>\\mathrm{BDP}(\\text { frames })=\\frac{T_{\\text {firstACK }}}{T_{\\mathrm{tx} \\text {-data }}}=\\frac{0.1056}{0.004}=26.4 \\text { frames }<br/>\\end{gathered}<br/>$$</p><p><br/>Our window size $W=5$ is<strong> less than</strong> $\\mathbf{26.4}$, so throughput is limited by window size.</p><p>$$<br/>\\begin{aligned}<br/>\\text { Throughput } &amp; =\\frac{W \\times L_{\\text {frame }}}{T_{\\text {firstACK }}}=\\frac{5 \\times 2000}{0.1056} \\mathrm{bps} \\\\\\\\<br/>= &amp; \\frac{10000}{0.1056} \\approx 94696.97 \\mathrm{bps} \\\\\\\\<br/>&amp; \\approx 94.697 \\mathrm{Kbps}<br/>\\end{aligned}<br/>$$</p></div><br><br><a href=\"https://gateoverflow.in/499879/go-classes-dpp-cn-selective-repeat#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-cn-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/computer-networks\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Computer Networks - Flow Control & Sliding Window Protocols</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\">A network engineer is analyzing a link that uses the Stop-and-Wait ARQ protocol. The data frames are $\\mathrm{2000 ~bytes}$ in size and are sent at a rate of $\\mathrm{125 ~Kbps}$ ( $1 \\mathrm{Kbps}=1000$ bits per second). The acknowledgments (ACKs) are $\\mathrm{100 ~bytes}$ long and are sent at a transmission rate of $\\mathrm{10 ~Kbps}$ . The one-way propagation delay between the sender and receiver is $\\mathrm{50 ~milliseconds.}$<br/> <br/> Assuming no frames are lost or corrupted, what is the sender's throughput in bytes per second?</div></span>",
            "image": "",
            "options": [],
            "answer": "6493.51",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"499877\"></a><div itemprop=\"text\">Frame size $L_{\\text {frame }}=2000 ~\\text{bytes}$<br/> <br/> Sender data rate $R_{\\text {data }}=125 \\mathrm{Kbps}=125 \\times 1000=125000 \\mathrm{bps}$<br/> <br/> ACK size $L_{\\text {ack }}=100 ~\\text{bytes}$<br/> <br/> ACK transmission rate $R_{\\text {ack }}=10 \\mathrm{Kbps}=10 \\times 1000=10000 \\mathrm{bps}$<br/> <br/> One-way propagation delay $T_p=50 \\mathrm{~ms}=0.05 \\mathrm{~s}$<br/> <br/> $$<br/> \\begin{gathered}<br/> T_{\\text {tx-data }}=\\frac{L_{\\text {frame }} \\times 8}{R_{\\text {data }}}=\\frac{2000 \\times 8}{125000}=\\frac{16000}{125000} \\mathrm{~s} \\\\\\\\<br/> T_{\\text {tx-data }}=0.128 \\mathrm{~s}<br/> \\end{gathered}<br/> $$<br/> $$<br/> \\begin{gathered}<br/> T_{\\mathrm{tx}-\\mathrm{ack}}=\\frac{L_{\\mathrm{ack}} \\times 8}{R_{\\mathrm{ack}}}=\\frac{100 \\times 8}{10000}=\\frac{800}{10000} \\mathrm{~s} \\\\\\\\<br/> T_{\\mathrm{tx}-\\mathrm{ack}}=0.08 \\mathrm{~s}<br/> \\end{gathered}<br/> $$<br/> <br/> Data frame propagation delay to receiver: $T_p=0.05 \\mathrm{~s}$<br/> <br/> ACK propagation delay back to sender: $T_p=0.05 \\mathrm{~s}$<br/> <br/> Total propagation delay in cycle: $2 T_p=0.1 \\mathrm{~s}$<br/> <br/> <br/> $$<br/> \\begin{aligned}<br/> &amp; T_{\\text {total }}=T_{\\text {tx-data }}+T_p+T_{\\text {tx-ack }}+T_p \\\\\\\\<br/> &amp; T_{\\text {total }}=0.128+0.05+0.08+0.05 \\\\\\\\<br/> &amp; \\qquad T_{\\text {total }}=0.308 \\mathrm{~s} \\\\\\\\<br/> &amp; \\text { Throughput }=\\frac{\\text { Frame size in bytes }}{T_{\\text {total }}}<br/> \\end{aligned}<br/> $$<br/> \\begin{aligned}<br/> &amp;\\text { Throughput }=\\frac{2000}{0.308} \\text { bytes } / \\mathrm{s}\\\\\\\\<br/> &amp;\\text { Throughput } \\approx 6493.51 \\text { bytes/s }<br/> \\end{aligned}</div><br><br><a href=\"https://gateoverflow.in/499876/go-classes-dpp-cn-stop-and-wait#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-cn-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/computer-networks\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Computer Networks - Flow Control & Sliding Window Protocols</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>In a Go-Back-N ARQ protocol with a window size of $7$, every $\\mathbf{4th}$ <strong>packet</strong> is lost in the forward path.<br/>If the sender sends $12$ packets, how many <strong>total transmissions</strong> (including retransmissions) are made for all $12$ packets to be transmitted successfully ?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$39$<br/></span>",
                "<span style=\"display: inline;\">$20$<br/></span>",
                "<span style=\"display: inline;\">$22$<br/></span>",
                "<span style=\"display: inline;\">No finite number of transmissions</span>"
            ],
            "answer": "D",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"499396\"></a><div itemprop=\"text\">\\[<br/> \\renewcommand{\\arraystretch}{1.2}<br/> \\begin{array}{|c|c|c|}<br/> \\hline<br/> \\textbf{#} &amp; \\textbf{Packet} &amp; \\textbf{Status} \\\\<br/> \\hline<br/> 1 &amp; 1 &amp; \\text{Accepted} \\\\<br/> \\hline<br/> 2 &amp; 2 &amp; \\text{Accepted} \\\\<br/> \\hline<br/> 3 &amp; 3 &amp; \\text{Accepted} \\\\<br/> \\hline<br/> 4 &amp; 4 &amp; \\text{Lost} \\\\<br/> \\hline<br/> 5 &amp; 5 &amp; \\text{Discarded} \\\\<br/> \\hline<br/> 6 &amp; 6 &amp; \\text{Discarded} \\\\<br/> \\hline<br/> 7 &amp; 7 &amp; \\text{Discarded} \\\\<br/> \\hline<br/> 8 &amp; 8 &amp; \\text{Lost} \\\\<br/> \\hline<br/> 9 &amp; 9 &amp; \\text{Discarded} \\\\<br/> \\hline<br/> 10 &amp; 10 &amp; \\text{Discarded} \\\\<br/> \\hline<br/> 11 &amp; 4 \\text{ (TO)} &amp; \\text{Accepted} \\\\<br/> \\hline<br/> 12 &amp; 5 &amp;\\text{Lost} \\\\<br/> \\hline<br/> <br/> 13 &amp; 6 &amp; \\text{Discarded} \\\\<br/> \\hline<br/> 14 &amp; 7 &amp; \\text{Discarded} \\\\<br/> \\hline<br/> 15 &amp; 8 &amp; \\text{Discarded} \\\\<br/> \\hline<br/> 16 &amp; 9 &amp; \\text{Lost} \\\\<br/> \\hline<br/> 17 &amp; 10 &amp; \\text{Discarded} \\\\<br/> \\hline<br/> 18 &amp; 11 &amp; \\text{Discarded} \\\\<br/> \\hline<br/> 19 &amp; 5 \\text{ (TO)} &amp; \\text{Accepted} \\\\<br/> \\hline<br/> 20 &amp; 6 &amp; \\text{Lost} \\\\<br/> \\hline<br/> 21 &amp; 7 &amp; \\text{Discarded} \\\\<br/> \\hline<br/> 22 &amp; 8 &amp; \\text{Discarded} \\\\<br/> \\hline<br/> 23 &amp; 9 &amp; \\text{Discarded} \\\\<br/> \\hline<br/> <br/> 24 &amp; 10 &amp;\\text{Lost} \\\\<br/> \\hline<br/> <br/> 25 &amp; 11 &amp; \\text{Discarded} \\\\<br/> \\hline<br/> 26 &amp; 12 &amp; \\text{Discarded} \\\\<br/> \\hline<br/> 27 &amp; 6 \\text{ (TO)} &amp; \\text{Accepted} \\\\<br/> \\hline<br/> 28 &amp; 7 &amp; \\text{Lost} \\\\<br/> \\hline<br/> 29 &amp; 8 &amp; \\text{Discarded} \\\\<br/> \\hline<br/> 30 &amp; 9 &amp; \\text{Discarded} \\\\<br/> \\hline<br/> 31 &amp; 10 &amp; \\text{Discarded} \\\\<br/> \\hline<br/> 32 &amp; 11 &amp; \\text{Lost} \\\\<br/> \\hline<br/> 33 &amp; 12 &amp; \\text{Discarded} \\\\<br/> \\hline<br/> 34 &amp; 7 \\text{ (TO)} &amp; \\text{Accepted} \\\\<br/> \\hline<br/> 35 &amp; 8 &amp; \\text{Accepted}\\\\<br/> \\hline<br/> <br/> 36 &amp; 9 &amp; \\text{Lost} \\\\<br/> \\hline<br/> 37 &amp; 10 &amp; \\text{Discarded} \\\\<br/> \\hline<br/> 38 &amp; 11 &amp; \\text{Discarded} \\\\<br/> \\hline<br/> 39 &amp; 12 &amp; \\text{Discarded} \\\\<br/> \\hline<br/> <br/> 40 &amp; 9 \\text{ (TO)} &amp; \\text{Lost} \\\\<br/> \\hline<br/> 41 &amp; 10 &amp; \\text{Discarded} \\\\<br/> \\hline<br/> 42 &amp; 11 &amp; \\text{Discarded} \\\\<br/> \\hline<br/> 43 &amp; 12 &amp; \\text{Discarded} \\\\<br/> \\hline<br/> 44 &amp; 9 \\text{ (TO)} &amp; \\text{Lost} \\\\<br/> \\hline<br/> 45 &amp; 10 &amp; \\text{Discarded} \\\\<br/> \\hline<br/> 46 &amp; 11 &amp; \\text{Discarded} \\\\<br/> \\hline<br/> 47 &amp; 12 &amp; \\text{Discarded} \\\\<br/> \\hline<br/> \\cdots &amp; \\cdots &amp; \\cdots \\\\<br/> <br/> \\end{array}<br/> \\]<br/> <br/> Now the sender is stuck retransmitting packets: $\\{9, 10, 11, 12 \\}$ again and again. Packet no. $9$ is lost everytime. No finite number of transmissions exists.<br/> <br/> Answer: $D$</div><br><br><a href=\"https://gateoverflow.in/499395/go-classes-dpp-cn-goback-n#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-cn-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/computer-networks\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Computer Networks - Flow Control & Sliding Window Protocols</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider a Selective Repeat sliding window protocol that uses a frame size of $\\mathbf{2 ~KB}$ to send data on a $\\mathbf{2 ~Mbps}$ link with a one-way latency of $\\mathbf{40 ~msec}$. To achieve a link utilization of $\\mathbf{7 5 \\%}$, the minimum number of bits required to represent the sequence number field is:</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$6 ~\\text{bits}$<br/></span>",
                "<span style=\"display: inline;\">$5 ~\\text{bits}$<br/></span>",
                "<span style=\"display: inline;\">$8 ~\\text{bits}$<br/></span>",
                "<span style=\"display: inline;\">$7 ~\\text{bits}$</span>"
            ],
            "answer": "A",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"499409\"></a><div itemprop=\"text\"><p><strong>Given</strong></p><ul><li>Frame size = 2 KB </li></ul><p>\\[<br/> 2\\ \\text{KB} = 2 \\times 1024 \\times 8 = 16384\\ \\text{bits}<br/> \\]</p><ul><li>Link rate = 2 Mbps </li></ul><p> \\[<br/> 2\\ \\text{Mbps} = 2 \\times 10^6\\ \\text{bps}<br/> \\]</p><ul><li>One-way propagation delay = 40 ms </li></ul><p> \\[<br/> \\text{RTT} = 2 \\times 40\\ \\text{ms} = 80\\ \\text{ms} = 0.08\\ \\text{s}<br/> \\]</p><ul><li>Required utilization \\( U = 75\\% = 0.75 \\)</li></ul><p> </p><p>1. Transmission time per frame</p><p>\\[<br/>T_t = \\frac{\\text{Frame size}}{\\text{Link rate}} <br/> = \\frac{16384}{2 \\times 10^6}<br/> \\approx 0.008192\\ \\text{s}<br/>\\]</p><p>2. Find required window size \\(W\\) for given utilization</p><p>For Selective Repeat (stop-and-wait generalized):</p><p>\\[<br/>U = \\frac{W \\cdot T_t}{\\text{RTT} + T_t}<br/>\\]</p><p>Substitute values:</p><p>\\[<br/>0.75 = \\frac{W \\cdot 0.008192}{0.08 + 0.008192}<br/>\\]</p><p>\\[<br/>W = \\frac{0.75 \\times (0.08 + 0.008192)}{0.008192}<br/> \\approx 8.07<br/>\\]</p><p>So minimum integer window size:</p><p>\\[<br/>W = 9<br/>\\]</p><p>3. Sequence number space for Selective Repeat</p><p>For Selective Repeat ARQ, the sequence number space must be at least <strong>twice</strong> the window size:</p><p>\\[<br/>\\text{Seq space} \\ge 2W = 2 \\times 9 = 18<br/>\\]</p><p>Let the number of bits in the sequence number field be \\(n\\). Then:</p><p>\\[<br/>2^n \\ge 18<br/>\\]</p><p>Check powers of 2:</p><p>\\(2^4 = 16 &lt; 18\\) (not enough) <br/>\\(2^5 = 32 \\ge 18\\) (sufficient)</p><p>So:</p><p>\\[<br/>n = 5\\ \\text{bits}<br/>\\]</p><p>Answer - </p><p>\\[<br/>\\boxed{\\text{B. 5 bits}}<br/>\\]<br/> </p></div><br><br><a href=\"https://gateoverflow.in/499391/go-classes-dpp-cn-sr-protocol#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-cn-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/computer-networks\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Computer Networks - Flow Control & Sliding Window Protocols</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>A SENDER USES THE <strong>SELECTIVE REPEAT</strong> SLIDING WINDOW PROTOCOL AND USES $\\mathbf{7}$ <strong>BITS</strong> FOR THE SEQUENCE NUMBER.</p><p>WHAT IS THE MINIMUM LINK BANDWIDTH (IN Mbps) REQUIRED TO ACHIEVE A LINK UTILIZATION OF EXACTLY $\\mathbf{8 0 \\%}$ ?<br/> </p><p><strong>Parameters:</strong></p><ul><li>DATA PACKETS ARE $\\mathbf{1}$ KB ($1000$ BYTES) IN SIZE.</li><li>THE ONE-WAY PROPAGATION DELAY IS $\\mathbf{25}$ msec.</li><li>ASSUME $W_S = W_R$ AND THE TOTAL SEQUENCE SPACE IS FULLY UTILIZED.</li></ul></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$10.1$ Mbps</span>",
                "<span style=\"display: inline;\">$12.6$ Mbps</span>",
                "<span style=\"display: inline;\">$14.2$ Mbps</span>",
                "<span style=\"display: inline;\">$20.5$ Mbps</span>"
            ],
            "answer": "B",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"497591\"></a><div itemprop=\"text\">Protocol is Selective Repeat.<br/> <br/> Sequence bits $(k)=7$.<br/> <br/> Total sequence space $=2^k=2^7=128$.<br/> <br/> The rule for SR is $W_S+W_R \\leq 2^k$.<br/> <br/> Given $W_S=W_R$ and the space is fully utilized, $W_S+W_S=128$.<br/> <br/> $$2 \\times W_S=128 \\Longrightarrow W_S=\\mathbf{6 4}$$<br/> $$W=64 .$$<br/> $\\eta$ (Utilization) $=80 \\%=0.8$<br/> <br/> $L$ (Frame Size) $=1000$ Bytes $=8,000$ bits<br/> <br/> $T_p$ (One-way) $=25 \\mathrm{msec}=0.025$ seconds<br/> <br/> RTT $=2 \\times T_p=0.050$ seconds<br/> <br/> $$<br/> T_t=L / B=8,000 / B<br/> $$<br/> \\begin{aligned}<br/> &amp; \\eta=\\left(W \\times T_t\\right) /\\left(T_t+R T T\\right) \\\\\\\\<br/> &amp; 0.8=(64 \\times(8000 / B)) /((8000 / B)+0.05) \\\\\\\\<br/> &amp; 0.8 \\times((8000 / B)+0.05)=64 \\times(8000 / B) \\\\\\\\<br/> &amp; (0.8 \\times 8000 / B)+(0.8 \\times 0.05)=512,000 / B \\\\\\\\<br/> &amp; (6400 / B)+0.04=512,000 / B \\\\\\\\<br/> &amp; 0.04=(512,000 / B)-(6400 / B) \\\\\\\\<br/> &amp; 0.04=(512,000-6400) / B \\\\\\\\<br/> &amp; 0.04=505,600 / B \\\\\\\\<br/> &amp; B=505,600 / 0.04 \\\\\\\\<br/> &amp; B=12,640,000 \\text { bits/second } \\\\\\\\<br/> &amp; B=12,640,000 / 10^6 \\mathrm{Mbps}=\\mathbf{1 2 . 6 4} \\mathrm{Mbps}<br/> \\end{aligned}<br/> <br/> This rounds to $12.6$ $\\mathrm{ Mbps}$.</div><br><br><a href=\"https://gateoverflow.in/497588/go-classes-dpp-cn-sliding-window#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-cn-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/computer-networks\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Computer Networks - Flow Control & Sliding Window Protocols</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>A SENDER USES THE <strong>GO-BACK-N</strong> SLIDING WINDOW PROTOCOL.<br/> </p><p>ASSUMING NO ERRORS AND NEGLIGIBLE ACKNOWLEDGEMENT TIME, WHAT IS THE MAXIMUM POSSIBLE LINK UTILIZATION?<br/> </p><p><strong>Parameters:</strong></p><ul><li>DATA PACKETS ARE $\\mathbf{2000}$ BYTES ($1$ BYTE = $8$ BITS).</li><li>THE LINK BANDWIDTH IS $\\mathbf{4}$ Mbps ($4 \\times 10^6$ BITS/SECOND).</li><li>THE ONE-WAY PROPAGATION DELAY IS $\\mathbf{100}$ msec.</li><li>THE SEQUENCE NUMBER FIELD IS $\\mathbf{5}$ BITS WIDE.</li></ul></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$100\\%$</span>",
                "<span style=\"display: inline;\">$75.5\\%$</span>",
                "<span style=\"display: inline;\">$60.8\\%$</span>",
                "<span style=\"display: inline;\">$50.0\\%$</span>"
            ],
            "answer": "C",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"498795\"></a><div itemprop=\"text\">Well, given datas are<br/> <br/> L = 2000 bytes<br/> <br/> B = 4Mbps<br/> <br/> Tp = 100 ms (one way)<br/> <br/> sequence number field size = 5 bits<br/> <br/> Now, let's move step by step:<br/> First calculate Tt , <br/> <br/> Two way propagation delay will be = 2 x Tp = 2 * 0.1 sec = 0.2 sec<br/> <br/> Tt = Length/Bandwith = 2000 bytes * 8 bits / 4 * 10^6 bits per sec = 0.004 sec = 4 msec<br/> <br/> Now calculate RTT: <br/> <br/> RTT will be = 2 * Tp (as Tt won't happen so we are not counting it in RTT) = 0.2 msec<br/> <br/> Now calculate window size, <br/> <br/> Window Size = 2^5-1 = 32-1 = 31<br/> <br/> Now we need max throughput, therefore,<br/> <br/> throughput = window size * Tt / RTT+Tt = 31*0.004/0.2+0.004 *100% = 60.78%<br/> <br/> <br/> <br/> Thus this is how we are solving this question, in general throughput for other protocols is data length / RTT but here in such protocols window size and transmission time comes into play.</div><br><br><a href=\"https://gateoverflow.in/497584/go-classes-dpp-cn-sliding-window#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-cn-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/computer-networks\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Computer Networks - Flow Control & Sliding Window Protocols</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>A SENDER USES THE <strong>GO-BACK-N</strong> SLIDING WINDOW PROTOCOL. THE SENDER'S WINDOW SIZE IS 15.</p><p>ASSUMING NO ERRORS, WHAT IS THE MAXIMUM ACHIEVABLE THROUGHPUT IN <strong>BYTES/SECOND</strong>?<br/> </p><p><strong>Parameters:</strong></p><ul><li>DATA PACKETS ARE $\\mathbf{2000}$ BYTES.</li><li>ACKNOWLEDGEMENT PACKETS ARE $\\mathbf{25}$ BYTES.</li><li>THE LINK BANDWIDTH (IN BOTH DIRECTIONS) IS $\\mathbf{4}$ Mbps ($4 \\times 10^6$ bits/second).</li><li>THE ONE-WAY PROPAGATION DELAY IS $\\mathbf{50}$ MS.</li></ul></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$288,323$</span>",
                "<span style=\"display: inline;\">$250,000$</span>",
                "<span style=\"display: inline;\">$294,118$</span>",
                "<span style=\"display: inline;\">$500,000$</span>"
            ],
            "answer": "A",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"498665\"></a><div itemprop=\"text\">Tt = 0.004s <br/> <br/> RTT = 0.10405 sec <br/> <br/> max packets possible in RTT = RTT/ Tdata ==&gt; gives around 26 packets our window size is 15 <br/> <br/> throughput = (total data in window )/ RTT = 288,323 <br/> <br/> </div><br><br><a href=\"https://gateoverflow.in/497165/go-classes-dpp-cn-goback-n#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-cn-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/computer-networks\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Computer Networks - Flow Control & Sliding Window Protocols</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>A SENDER USES THE <strong>SELECTIVE REPEAT</strong> SLIDING WINDOW PROTOCOL FOR FLOW CONTROL. DATA PACKETS ARE <strong>$1$ KB</strong> ($1000$ BYTES) IN SIZE, AND THE LINK HAS A BANDWIDTH OF <strong>$100$ Mbps</strong> ($100$ * $10^6$ bits/second). THE ONE-WAY PROPAGATION DELAY IS <strong>$\\mathbf{4 5}$ MS.</strong></p><p>WHAT IS THE MINIMUM NUMBER OF BITS REQUIRED FOR THE SEQUENCE NUMBER FIELD TO ACHIEVE $100$% LINK UTILIZATION?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$10$<br/></span>",
                "<span style=\"display: inline;\">$11$<br/></span>",
                "<span style=\"display: inline;\">$12$<br/></span>",
                "<span style=\"display: inline;\">$13$</span>"
            ],
            "answer": "A",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"498666\"></a><div itemprop=\"text\">C</div><br><br><a href=\"https://gateoverflow.in/497163/go-classes-dpp-cn-sliding-window#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-cn-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/computer-networks\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Computer Networks - Flow Control & Sliding Window Protocols</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>A sender uses the <strong>Stop-and-Wait ARQ</strong> protocol.</p><p>To achieve a sender throughput of exactly $5000$ bytes/second, the sender's transmission rate must be ______ <strong>kBps</strong>.</p><p>$(1\\text{ kBps}=1000\\text{ bytes/second})$</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">The size of a data frame is $2000$ bytes.<br/></span>",
                "<span style=\"display: inline;\">The size of an acknowledgement is $50$ bytes.<br/></span>",
                "<span style=\"display: inline;\">The one-way propagation delay is $150$ milliseconds.<br/></span>",
                "<span style=\"display: inline;\">The receiver's transmission rate is $\\frac{1}{10}$th of the sender's transmission rate.<br/></span>",
                "<span style=\"display: inline;\">Assume no frame is lost and processing delays are negligible.<br/></span>"
            ],
            "answer": "25",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"496807\"></a><div itemprop=\"text\"><p>Given Throughput: $5000 \\mathrm{~B} / \\mathrm{s}$<br/><br/>Data Frame Size ( $L_D$ ): $2000$ Bytes<br/><br/>ACK Frame Size ( $L_A$ ): $50$ Bytes<br/><br/>One-way $T_p: 150 \\mathrm{~ms}=0.15 \\mathrm{~seconds}$<br/><br/>Round-trip Propagation Delay $\\left(2 \\times T_p\\right)$ : $0.3$ seconds<br/><br/>Sender Bandwidth: $B$ (in $\\mathrm{B} / \\mathrm{s}$ )<br/><br/>Receiver Bandwidth: $B / 10$ (in $\\mathrm{B} / \\mathrm{s}$ )</p><p>The total time for one cycle (sending one frame and receiving its ACK) is:</p><p>$$<br/>R T T=T_{t x D}+T_{t x A}+\\left(2 \\times T_p\\right)<br/>$$</p><ul><li>Data Tx Time $\\left(T_{t x D}\\right): \\frac{L_D}{B}=\\frac{2000}{B}$ seconds<br/> </li><li>ACK Tx Time $\\left(T_{t x A}\\right): \\frac{L_A}{B / 10}=\\frac{50}{B / 10}=\\frac{500}{B}$ seconds<br/> </li><li>Propagation Delay: 0.3 seconds</li></ul><p>$$<br/>R T T=\\frac{2000}{B}+\\frac{500}{B}+0.3=\\frac{2500}{B}+0.3<br/>$$</p><p><br/>Throughput is the useful data sent divided by the total cycle time:</p><p>$$<br/>\\text { Throughput }=\\frac{L_D}{R T T}<br/>$$<br/>\\begin{aligned}<br/>&amp; 5000=\\frac{2000}{\\frac{2500}{B}+0.3} \\\\\\\\<br/>&amp; \\frac{2500}{B}+0.3=\\frac{2000}{5000} \\\\\\\\<br/>&amp; \\frac{2500}{B}+0.3=0.4 \\\\\\\\<br/>&amp; \\frac{2500}{B}=0.4-0.3 \\\\\\\\<br/>&amp; \\quad \\frac{2500}{B}=0.1 \\\\\\\\<br/>&amp; \\quad B=25000 \\mathrm{~B} / \\mathrm{s}=\\mathbf{2 5} \\mathrm{KBps}<br/>\\end{aligned}</p></div><br><br><a href=\"https://gateoverflow.in/496804/go-classes-dpp-cn-stop-and-wait#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-cn-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/computer-networks\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Computer Networks - Flow Control & Sliding Window Protocols</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider two nodes communicating using the Stop-and-Wait protocol. The data frame size is $1000$ bits. The channel has a transmission rate of $5000$ bps, and the one-way propagation delay is $400$ milliseconds.</p><p>Assuming processing times and acknowledgement packet size are both negligible, what is the channel utilization (efficiency) in percentage?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$20.00$<br/></span>",
                "<span style=\"display: inline;\">$25.00$<br/></span>",
                "<span style=\"display: inline;\">$50.00$<br/></span>",
                "<span style=\"display: inline;\">$16.67$</span>"
            ],
            "answer": "A",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"496201\"></a><div itemprop=\"text\">L= 1000 bits <br/> <br/> Bandwidth= 5000 bps <br/> <br/> Transmission delay= L / Bw = 200 msec <br/> <br/> efficiency = [ Tt / (Tt + 2Tp) ] x 100 = [ 200 / 200 + 800 ] x 100 <br/> <br/> = 20 % <br/> <br/> option A</div><br><br><a href=\"https://gateoverflow.in/496096/go-classes-dpp-cn-stop-and-wait#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-cn-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/computer-networks\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Computer Networks - Flow Control & Sliding Window Protocols</a></b></div></div>"
        }
    ]
});

registerTest({
    "series": "cse-dpp-2027",
    "order": 8,
    "name": "DPP 08 - Computer Networks (Flow Control & Sliding Window Protocols - Part 2)",
    "testLabel": "DPP 08",
    "testType": "DPP",
    "bracket": "Flow Control & Sliding Window Protocols - Part 2",
    "subject": "cn",
    "date": "Nov 03, 2026",
    "duration": "25 Min",
    "totalMarks": 9,
    "topicsCovered": "Flow Control & Sliding Window Protocols (Practice Set 2)",
    "questions": [
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\">Consider a Go-Back-N sliding window protocol that uses a frame size of 1000 bytes to send data on an $8$ Mbps link. The protocol uses $5$ bits for the sequence number field. To achieve a link utilization of exactly $\\mathbf{5 0} \\boldsymbol{\\%}$, the maximum possible one-way latency (in milliseconds) is $\\_\\_\\_\\_$ .</div></span>",
            "image": "",
            "options": [],
            "answer": "30.5",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"495578\"></a><div itemprop=\"text\"><p>Frame Size ( $L$ ): 1000 bytes $=1000 \\times 8=8000$ bits<br/><br/>Bandwidth ( $B$ ): $8 \\mathrm{Mbps}=8 \\times 10^6 \\mathrm{bits} / \\mathrm{sec}$<br/><br/>Transmission Delay ( $T_t$ ):</p><p>$$<br/>\\begin{gathered}<br/>T_t=\\frac{L}{B}=\\frac{8000 \\mathrm{bits}}{8 \\times 10^6 \\mathrm{bits} / \\mathrm{sec}} \\\\<br/>T_t=1000 \\times 10^{-6} \\mathrm{sec}=10^{-3} \\mathrm{sec}<br/>\\end{gathered}<br/>$$</p><p><br/>$$<br/>T_t=1 \\mathrm{msec}<br/>$$</p><p><br/>The protocol is Go-Back-N and uses $\\mathbf{5}$ bits for the sequence number.</p><ul><li>The maximum sender window size for Go-Back-N is $2^{\\text {bits }}-1$.<br/> </li><li>Window Size ( $W$ ):</li></ul><p>$$<br/>W=2^5-1=32-1=\\mathbf{3 1}<br/>$$</p><p>The formula for link utilization (efficiency) in a Go-Back-N protocol is:</p><p>$$<br/>\\text { Utilization }(\\eta)=\\frac{W \\times T_t}{\\mathrm{RTT}+T_t}<br/>$$</p><p><br/>We are given:</p><ul><li>$\\eta=50 \\%=0.5$<br/> </li><li>$W=31$<br/> </li><li>$T_t=1 \\mathrm{msec}$<br/> </li><li>$\\mathrm{RTT}=2 \\times T_p$ (where $T_p$ is the one-way latency)</li></ul><p>Substitute the known values into the formula and solve for $T_p$.</p><p>$$<br/>0.5=\\frac{31 \\times 1}{\\left(2 \\times T_p\\right)+1}<br/>$$</p><p><br/>Multiply both sides by the denominator:</p><p>$$<br/>0.5 \\times\\left(2 \\times T_p+1\\right)=31<br/>$$</p><p><br/>Distribute the 0.5:</p><p>$$<br/>\\left(1 \\times T_p\\right)+0.5=31<br/>$$</p><p><br/>Isolate $T_p$ :</p><p>$$<br/>T_p=31-0.5<br/>$$</p><p>$T_p=30.5 \\mathrm{msec}$</p></div><br><br><a href=\"https://gateoverflow.in/495577/go-classes-dpp-cn-goback-n#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-cn-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/computer-networks\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Computer Networks - Flow Control & Sliding Window Protocols</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\">A link has a transmission speed of $2 \\times 10^6$ bits/sec. It uses data packets of size 500 bytes each. Assume that the acknowledgment has negligible transmission delay and that its propagation delay is the same as the data propagation delay. Also, assume that the processing delays at nodes are negligible. The efficiency of the stop-and-wait protocol in this setup is exactly $20 \\%$. The value of the one-way propagation delay (in milliseconds) is $\\_\\_\\_\\_$ .</div></span>",
            "image": "",
            "options": [],
            "answer": "4",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"495117\"></a><div itemprop=\"text\"><p>$L=500$ bytes $\\times 8$ bits $/$ byte $=4000$ bits<br/>$T_t: T_t=\\frac{L}{B}=\\frac{4000 \\mathrm{bits}}{2 \\times 10^6 \\mathrm{bits} / \\mathrm{sec}} T_t=2 \\times 10^{-3} \\sec T_t=2 \\mathrm{msec}$</p><p>The efficiency $(\\eta)$ of the stop-and-wait protocol is the ratio of useful transmission time $\\left(T_l\\right)$ to the total time in a cycle.</p><ul><li>Total Cycle Time $=T_t+2 \\times T_p+T_{\\text {ack }}+$ ProcessingDelay<br/> </li><li>Given the assumptions, the formula simplifies to: $\\eta=\\frac{T_i}{T_i+2 \\times T_p}$</li></ul><p>$$<br/>\\begin{aligned}<br/>0.20 &amp; =\\frac{2}{2+2 \\times T_p} \\\\<br/>T_p &amp; =4 \\mathrm{msec}<br/>\\end{aligned}<br/>$$</p></div><br><br><a href=\"https://gateoverflow.in/495116/go-classes-dpp-cn-stop-and-wait#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-cn-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/computer-networks\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Computer Networks - Flow Control & Sliding Window Protocols</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\">A network link uses the Stop-and-Wait ARQ protocol to transmit data frames. The size of a data frame is $1500$ bytes. The transmission rate from the sender to the receiver is $400$ Kbps. The size of an acknowledgement frame is $100$ bytes, and the transmission rate from the receiver back to the sender is $80$ Kbps. The one-way propagation delay for the link is $80$ milliseconds.<br/> <br/> Assuming no frames or acknowledgements are lost, the sender's throughput is $\\_\\_\\_\\_$ bytes/second.<br/> <br/> (Note: $1 \\mathrm{Kbps}=10^3$ bits per second)</div></span>",
            "image": "",
            "options": [],
            "answer": "7500",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"493408\"></a><div itemprop=\"text\">Method1:<br/> <br/> Throughput is how many bytes or packets or bits we are sending practically actually per unit time .<br/> <br/> Ts=Transmitting time for sender<br/> <br/> Ta=Transmitting time acknowledgement <br/> <br/> Total time =Ts+Ta+2*Tp<br/> <br/> Ts=(1500 *8 )bits/(400*10^3 )bits/s <br/> <br/> Ts=0.03 s<br/> <br/> 2Tp=2*(80)*10^-3 secnds<br/> <br/> 2Tp=0.160 s<br/> <br/> Ta=(100 *8)bits/(80*10^3 )bits/s<br/> <br/> Ta=0.01 s<br/> <br/> total time =0.2 s<br/> <br/> in 0.2 s we are sending 1500 B <br/> <br/> in one second how many Bytes we can send= 1500/0.2=7500<br/> <br/> throughput =7500 Bytes/second.<br/> <br/> <br/> <br/> Method2:<br/> <br/> Throughput is nothingbut how much efficiently we are using bandwidth<br/> <br/> Throughput= Efficiency* Bandwidth <br/> <br/> Efficiency=(Ts)/Ts+Tp+Ta+Tp<br/> <br/> Efficiency=0.03/0.2=0.15<br/> <br/> Throughput= 0.15*400*10^3 bits /second= 60000 bits /sec<br/> <br/> but in question asked in terms of Bytes so Throughput = 60000/8=7500 Bytes/second</div><br><br><a href=\"https://gateoverflow.in/493296/go-classes-dpp-cn-stop-and-wait#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-cn-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/computer-networks\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Computer Networks - Flow Control & Sliding Window Protocols</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\">A communication channel over a transatlantic fiber-optic link is managed using a selective repeat sliding window protocol. The protocol uses a frame size of 2 KB to send data over the 10 Mbps link, which has a one-way propagation delay of 40 msec . To achieve a minimum link utilization of $80 \\%$, the minimum number of bits required for the sequence number field is $\\_\\_\\_\\_$ .</div></span>",
            "image": "",
            "options": [],
            "answer": "7",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"521602\"></a><div itemprop=\"text\">It is given that<br/> <br/> Bandwidth ($B$) = $10 \\text{ Mbps}$<br/> Propagation Delay ($T_p$) = $40 \\text{ ms}$<br/> Frame Size ($L$) = $2 \\text{ KB} $<br/> Transmission Delay ($T_t$) = $\\frac{L}{B} = \\frac{16000}{10^7} = 1.6 \\text{ ms}$<br/> $$a = \\frac{T_p}{T_t} = \\frac{40 \\text{ ms}}{1.6 \\text{ ms}} = 25$$<br/> <br/> Finding Window Size ($N$):<br/> Using the efficiency formula $\\eta = \\frac{N}{1 + 2a}$ where N is the window size of both the sender and receiver (because sender and receiver have same window size in selective repeat)<br/> $$0.8 \\leq \\frac{N}{1 + 2(25)}$$<br/> $$0.8 \\leq \\frac{N}{51}$$<br/> $$N \\geq 0.8 \\times 51$$<br/> $$N \\geq 40.8$$<br/> Minimum sender window size ($W_s$) = $41$.<br/> <br/> In Selective Repeat, the sequence number space must be at least the sum of the sender and receiver windows ($2^n \\geq W_s + W_r$). Assuming $W_s = W_r$:<br/> $$2^n \\geq 41 + 41$$<br/> $$2^n \\geq 82$$<br/> $$n = \\lceil \\log_2(82) \\rceil = 7$$<br/> <br/> Answer:$7$</div><br><br><a href=\"https://gateoverflow.in/491906/go-classes-dpp-cn-sliding-window#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-cn-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/computer-networks\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Computer Networks - Flow Control & Sliding Window Protocols</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider two nodes communicating using the Stop-and-Wait protocol. The data frame size is $4000$ bits. The channel has a transmission rate of $10$ kbps (kilobits/second), and the one-way propagation delay between the nodes is $80$ milliseconds. Assume that both the processing delay and the size of the acknowledgement packet are negligible. Which ONE of the following values most closely represents the channel utilization for this communication scenario in percentage?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$83.33$<br/></span>",
                "<span style=\"display: inline;\">$28.57$<br/></span>",
                "<span style=\"display: inline;\">$71.43$<br/></span>",
                "<span style=\"display: inline;\">$55.55$</span>"
            ],
            "answer": "A",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"491251\"></a><div itemprop=\"text\"><p>1. Identify the Given Information:</p><ul><li>Protocol: Stop-and-Wait<br/> </li><li>Frame Size (L): 4000 bits<br/> </li><li>Transmission Rate (R): $10 \\mathrm{kbps}=10,000$ bits per second (bps)<br/> </li><li>Propagation Delay $\\left(T_p\\right)$ : 80 milliseconds $(\\mathrm{ms})=0.08$ seconds $(\\mathrm{s})$</li></ul><p>2. Calculate the Transmission Time ( $T_i$ )</p><p>The transmission time is the time required to push all the bits of the frame onto the communication channel.</p><p>$$<br/>\\begin{aligned}<br/>&amp; T_t=\\frac{\\text { Frame Size }(\\mathrm{L})}{\\text { Traismission Rate }(\\mathrm{R})} \\\\<br/>&amp; T_t=\\frac{4000 \\text { hits }}{10,000 \\text { bps }}=0.4 \\text { seconds }<br/>\\end{aligned}<br/>$$</p><p><br/>To keep the units consistent, we can convert this to milliseconds:</p><p>$$<br/>T_t=0.4 \\mathrm{~s} \\times 1000=400 \\mathrm{~ms}<br/>$$</p><p>3. Calculate the Total Time for One Cycle</p><p>In the Stop-and-Wait protocol, the total time for sending one frame and receiving its acknowledgement is the sum of:</p><ul><li>The frame's transmission time $\\left(T_t\\right)$.<br/> </li><li>The propagation delay for the frame to travel from sender to receiver $\\left(T_p\\right)$.<br/> </li><li>The propagation delay for the acknowledgement to travel from receiver to sender ( $T_p$ ).</li></ul><p>(Since the processing time and acknowledgement size are negligible, their corresponding times are considered zero.)</p><p>Total Time $=T_t+T_p+T_p=T_t+2 T_p$<br/><br/>Total Time $=400 \\mathrm{~ms}+2 \\times 80 \\mathrm{~ms}$<br/><br/>Total Time $=400 \\mathrm{~ms}+160 \\mathrm{~ms}=560 \\mathrm{~ms}$<br/><br/>4. Calculate the Channel Utilization (Efficiency)</p><p>Channel utilization is the fraction of time the channel is busy transmitting useful data.<br/><br/>Utilization $(\\eta)=\\frac{\\text { Useful Time }}{\\text { Total Cycle Time }}=\\frac{T_t}{T_t+2 T_F}$<br/><br/>$\\eta=\\frac{400 \\mathrm{~ms}}{560 \\mathrm{~ms}}=\\frac{40}{56}=\\frac{5}{7}$<br/><br/>To express this as a percentage:</p><p>$$<br/>\\eta=\\frac{5}{7} \\times 100 \\% \\approx 71.428 \\ldots \\%<br/>$$</p><p><br/>Therefore, the closest value is $\\mathbf{7 1 . 4 3 \\%}$.</p></div><br><br><a href=\"https://gateoverflow.in/491250/go-classes-dpp-cn-stop-and-wait#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-cn-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/computer-networks\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Computer Networks - Flow Control & Sliding Window Protocols</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>A $1$ Mbps satellite link with a one-way propagation delay of $45$ ms uses the Go-Back-N protocol. If the data frames are $1$ Kilobyte ($1024$ bytes) in size, what is the minimum sender window size required to achieve a channel utilization of at least $60 \\%$ ? (Assume ACK frames have negligible transmission time).</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$7$<br/></span>",
                "<span style=\"display: inline;\">$8$<br/></span>",
                "<span style=\"display: inline;\">$11$<br/></span>",
                "<span style=\"display: inline;\">$12$</span>"
            ],
            "answer": "A",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"490901\"></a><div itemprop=\"text\"><ul><li>Bandwidth $(\\mathrm{B})=1 \\mathrm{Mbps}=10^6 \\mathrm{bits} / \\mathrm{sec}$<br/> </li><li>Frame Size $(\\mathrm{L})=1 \\mathrm{~KB}=1024$ bytes $=8192$ bits<br/> </li><li>Propagation Delay $\\left(T_p\\right)=45 \\mathrm{~ms}=0.045 \\mathrm{sec}$<br/> </li><li>Required Efficiency $(\\eta) \\geq 60 \\%$ or 0.6<br/> </li><li>Window Size $(\\mathrm{W})=$ ?</li></ul><p>Calculate Transmission Time $\\left(T_t\\right)$ : This is the time to put one frame on the wire.</p><ul><li>$T_t=L / B=8192$ bits $/ 10^6$ bits $/ \\mathrm{sec}=0.008192 \\mathrm{sec}$</li></ul><p>Use the Efficiency Formula for Go-Back-N:</p><ul><li>$\\eta=\\left(W \\times T_t\\right) /\\left(T_t+2 \\times T_p\\right)$</li></ul><p>Solve for $W$ :</p><ul><li>$0.6 \\leq(W \\times 0.008192) /(0.008192+2 \\times 0.045)$<br/> </li><li>$0.6 \\leq(W \\times 0.008192) /(0.008192+0.09)$<br/> </li><li>$0.6 \\leq(W \\times 0.008192) / 0.098192$<br/> </li><li>$0.6 \\times 0.098192 \\leq W \\times 0.008192$<br/> </li><li>$0.0589152 \\leq W \\times 0.008192$<br/> </li><li>$W \\geq 0.0589152 / 0.008192$<br/> </li><li>$W \\geq 7.19 \\ldots$</li></ul><p>Since the window size must be an integer, the minimum required size is $8$ .</p></div><br><br><a href=\"https://gateoverflow.in/490900/go-classes-dpp-cn-goback-n#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-cn-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/computer-networks\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Computer Networks - Flow Control & Sliding Window Protocols</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>A sender and receiver are connected by a $1$ Mbps link and use the Stop-and-Wait protocol for data transfer. Data frames are $2$ Kilobytes (KB) in size (where 1 KB $=1024$ bytes), and acknowledgements are considered to have negligible transmission time. If the one-way propagation delay is $20$ milliseconds, what is the efficiency of the link?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$29.1 \\%$<br/></span>",
                "<span style=\"display: inline;\">$40.9 \\%$<br/></span>",
                "<span style=\"display: inline;\">$14.5 \\%$<br/></span>",
                "<span style=\"display: inline;\">$70.9 \\%$</span>"
            ],
            "answer": "A",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"490912\"></a><div itemprop=\"text\">Option. A<br/> <br/> T(propagation time)= 20 msec<br/> <br/> T(transmission time)= 2 x 1024 x 8 bits / 1 x 10 ^6 bits per second = 16.38 msec<br/> <br/> Efficiency in stop and Wait protocol is = Tt / 2 Tp + Tt <br/> <br/> = 16.38/40 + 16.38<br/> <br/> = 0.29094<br/> <br/> Efficiency =29.1 %<br/> <br/> </div><br><br><a href=\"https://gateoverflow.in/490899/go-classes-dpp-cn-stop-and-wait#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-cn-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/computer-networks\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Computer Networks - Flow Control & Sliding Window Protocols</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Host $X$ uses $64$ -byte packets to send data to Host $Y$ via a sliding window protocol. The round trip time (RTT) between X and Y is measured to be $100$ milliseconds, and the bottleneck bandwidth of the path is $512$ kbps . To achieve maximum throughput, what is the optimal window size (in packets) that Host $X$ should configure?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$50$<br/></span>",
                "<span style=\"display: inline;\">$100$<br/></span>",
                "<span style=\"display: inline;\">$200$<br/></span>",
                "<span style=\"display: inline;\">$800$</span>"
            ],
            "answer": "B",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"492314\"></a><div itemprop=\"text\"><p>None of the options / option B approx <br/>efficiency = window size / ( 1 + 2 * (Tp / Tt) ) <br/>here, efficiency = 1 or 100 %<br/><strong>101 answer</strong></p></div><br><br><a href=\"https://gateoverflow.in/490536/go-classes-dpp-cn-sliding-window#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-cn-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/computer-networks\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Computer Networks - Flow Control & Sliding Window Protocols</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Server S is transmitting data to client C over a full-duplex connection. S and C use the sliding window protocol for flow control. The send and receive window sizes are $8$ packets each. Data packets (sent from S to C) are $1500$ bytes long, and the connection's bandwidth is $200$ Mbps. Acknowledgement packets (sent from C to S ) are very small and have a negligible transmission time. The propagation delay for the connection is $270 \\mu \\mathrm{~s}$. What is the maximum possible throughput for this data transmission?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$125.50 \\times 10^6 \\mathrm{~bps}$<br/></span>",
                "<span style=\"display: inline;\">$160.00 \\times 10^6 \\mathrm{~bps}$<br/></span>",
                "<span style=\"display: inline;\">$177.78 \\times 10^6 \\mathrm{~bps}$<br/></span>",
                "<span style=\"display: inline;\">$200.00 \\times 10^6 \\mathrm{~bps}$</span>"
            ],
            "answer": "A",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"490535\"></a><div itemprop=\"text\"><ul><li>Propagation Delay $\\left(T_p\\right)=270 \\mu s$<br/> </li><li>Transmission Delay $\\left(T_t\\right)=60 \\mu s$ (as calculated previously)</li></ul><p>$$<br/>a=\\frac{T_p}{T_t}=\\frac{270 \\mu s}{60 \\mu s}=4.5<br/>$$</p><p><br/>Next, we calculate the efficiency of the sliding window protocol. The formula for efficiency is:</p><p>$$<br/>\\eta=\\frac{N}{1+2 a}<br/>$$</p><p><br/>Where:</p><ul><li>$N$ is the window size $=8$</li><li><br/>$a$ is the ratio we just calculated $=4.5$</li></ul><p>$$<br/>\\eta=\\frac{8}{1+2 \\times 4.5}=\\frac{8}{1+9}=\\frac{8}{10}=0.8<br/>$$</p><ul><li>Efficiency $(\\eta)=0.8$<br/> </li><li>Bandwidth $(B W)=200 \\mathrm{Mbps}$</li></ul><p>$$<br/>\\text { Throughput }=\\eta \\times B W=0.8 \\times 200 \\mathrm{Mbps}=160 \\mathrm{Mbps}<br/>$$</p></div><br><br><a href=\"https://gateoverflow.in/490534/go-classes-dpp-cn-sliding-window#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-cn-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/computer-networks\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Computer Networks - Flow Control & Sliding Window Protocols</a></b></div></div>"
        }
    ]
});

registerTest({
    "series": "cse-dpp-2027",
    "order": 9,
    "name": "DPP 09 - Computer Networks (Ethernet & Medium Access Control - Part 1)",
    "testLabel": "DPP 09",
    "testType": "DPP",
    "bracket": "Ethernet & Medium Access Control - Part 1",
    "subject": "cn",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 10,
    "topicsCovered": "Ethernet & Medium Access Control (Practice Set 1)",
    "questions": [
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\">A university campus is redesigning its legacy Ethernet network (Classic CSMA/CD) that operates at $1$ Gbps. The network engineers have specified that the maximum possible round-trip delay (including all repeater and queuing delays) between any two nodes in the network must not exceed $64$ bytes of transmission time for the protocol to work efficiently with the standard minimum frame size.<br/> <br/> What is the maximum permissible one-way propagation delay (in microseconds) for the network cabling to ensure that the $64$ -byte minimum frame size remains valid? Assume the speed of propagation in the cable is $2 \\times 10^8 \\mathrm{~m} / \\mathrm{s}$.</div></span>",
            "image": "",
            "options": [],
            "answer": "0.256",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"500209\"></a><div itemprop=\"text\">Data rate $R=1 \\mathrm{Gbps}=10^9 \\mathrm{bps}$<br/> <br/> Minimum frame size $L_{\\text {min }}=64$ bytes $=512$ bits<br/> <br/> Propagation speed $v=2 \\times 10^8 \\mathrm{~m} / \\mathrm{s}$<br/> <br/> Requirement: Round-trip delay $\\leq$ transmission time of 64-byte frame.<br/> <br/> Transmission time of 64-byte frame<br/> <br/> $$<br/> T_{t x}=\\frac{L_{\\min }}{R}=\\frac{512}{10^9}=0.512 \\times 10^{-6} \\mathrm{~s}=0.512 \\mu \\mathrm{~s}<br/> $$<br/> <br/> This $T_{t x}$ is the maximum allowable round-trip delay.<br/> <br/> One-way propagation delay<br/> <br/> $$<br/> T_{p r o p}^{o n e-w a y}=\\frac{T_{t x}}{2}=\\frac{0.512}{2} \\mu \\mathrm{~s}=0.256 \\mu \\mathrm{~s}<br/> $$</div><br><br><a href=\"https://gateoverflow.in/500208/go-classes-dpp-cn-csma-cd#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-cn-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/computer-networks\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Computer Networks - Ethernet & Medium Access Control</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\">A CSMA/CD protocol is surprisingly used on a geostationary satellite link between two ground stations. The data transmission rate on the link is $100$ Mbps . The distance between the two stations via the satellite is approximately $72,000 \\mathrm{~km}$, and the speed of signal propagation is $3 \\times 10^8 \\mathrm{~m} / \\mathrm{s}$.<br/> <br/> Calculate the minimum frame size (in bits) required for the CSMA/CD mechanism to function correctly on this link.</div></span>",
            "image": "",
            "options": [],
            "answer": "48000000",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"537706\"></a><div itemprop=\"text\"><p>Here is the Simplest and easiest Explanation </p><p><img alt=\"\" height=\"1462\" src=\"https://gateoverflow.in/?qa=blob&amp;qa_blobid=776996191790518089\" style=\"float:left\" width=\"1171\"/></p></div><br><br><a href=\"https://gateoverflow.in/500206/go-classes-dpp-cn-csma-cd#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-cn-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/computer-networks\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Computer Networks - Ethernet & Medium Access Control</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>A CSMA/CD network operates at $1 ~\\text{Gbps}$ with a minimum frame size of $512 ~\\text{bytes}$. The maximum segment length allowed is $200 ~\\text{meters}$. If the data rate is increased to $10 ~\\text{Gbps}$ while keeping the same minimum frame size, what is the new maximum segment length possible? (Assume same propagation speed)<br/> </p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$20 ~\\text{meters}$<br/></span>",
                "<span style=\"display: inline;\">$50 ~\\text{meters}$<br/></span>",
                "<span style=\"display: inline;\">$100 ~\\text{meters}$<br/></span>",
                "<span style=\"display: inline;\">$10 ~\\text{meters}$</span>"
            ],
            "answer": "A",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"535451\"></a><div itemprop=\"text\"><p>Given CSMA/CD:</p><p><span class=\"math-tex\" data-latex=\"\\frac{\\text{Frame Size}}{\\text{Data Rate}} \\ge 2 \\times \\frac{\\text{Segment Length}}{\\text{Propagation Speed}}\">$\\frac{\\text{Frame Size}}{\\text{Data Rate}} \\ge 2 \\times \\frac{\\text{Segment Length}}{\\text{Propagation Speed}}$</span></p><p><span class=\"math-tex\" data-latex=\"\\frac{\\text{Frame Size}}{\\text{Data Rate}} \\ge 2 \\times \\frac{\\text{Segment Length}}{\\text{Propagation Speed}}\">Drop the constants</span></p><ul><li><span class=\"math-tex\" data-latex=\"\\frac{\\text{Frame Size}}{\\text{Data Rate}} \\ge 2 \\times \\frac{\\text{Segment Length}}{\\text{Propagation Speed}}\">Propagation speed</span></li><li><span class=\"math-tex\" data-latex=\"\\frac{\\text{Frame Size}}{\\text{Data Rate}} \\ge 2 \\times \\frac{\\text{Segment Length}}{\\text{Propagation Speed}}\">Frame size</span></li><li>The coefficient 2</li></ul><div> </div><div>The Inequality Boils down to:</div><div><span class=\"math-tex\" data-latex=\"L \\propto \\frac{1}{R}\">$L \\propto \\frac{1}{R}$</span></div><div> </div><div>R (data rate) increases 10 fold from 1 to 10 Gbps</div><div>Then you expect L (segment length) to decrease 10 fold</div><div> </div><div>L' = L/10</div><div>L' = 200/10 = <strong>20 metres</strong></div><div> </div><div><strong>Hence, Option A is Correct</strong></div><div> </div><div><hr/></div><div><strong>Disclaimer:</strong></div><div>Although these kinds of proportionalities are easy to setup and solve, they are double-edged swords. So be careful while selecting your constants. With that said, it would probably be a good idea to refer to the official, completely solved answer by the OP. </div><div> </div><p> </p></div><br><br><a href=\"https://gateoverflow.in/499886/go-classes-dpp-cn-ethernet#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-cn-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/computer-networks\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Computer Networks - Ethernet & Medium Access Control</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>In a CSMA/CD network, the bandwidth is $100 \\text{Mbps}$ and the minimum frame size is $512 ~\\text{bits}$. If the network segment length is increased by $50 \\%$ and the data rate is increased to $1 ~\\text{Gbps}$ , what should be the new minimum frame size to ensure collision detection works properly? (Assume signal propagation speed remains $2 \\times 10^8 \\mathrm{~m} / \\mathrm{s}$ )</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$7680 ~\\text{bits}$<br/></span>",
                "<span style=\"display: inline;\">$1024 ~\\text{bits}$<br/></span>",
                "<span style=\"display: inline;\">$5120 ~\\text{bits}$<br/></span>",
                "<span style=\"display: inline;\">$4096 ~\\text{bits}$</span>"
            ],
            "answer": "A",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"499885\"></a><div itemprop=\"text\">Original bandwidth $=100 \\mathrm{Mbps}$<br/> <br/> Original minimum frame size $= 512 \\text{bits}$<br/> <br/> Segment length increased by $50 \\%$<br/> <br/> New data rate $=1 \\mathrm{Gbps}=1000 \\mathrm{Mbps}$<br/> <br/> Propagation speed $=2 \\times 10^8 \\mathrm{~m} / \\mathrm{s}$<br/> <br/> <br/> $\\text{Transmission time of minimum frame} \\geq 2 \\times \\text{Propagation delay across network}$<br/> <br/> $$<br/> \\begin{gathered}<br/> \\text { Min Frame Size }=2 \\times \\frac{\\text { Segment Length }}{\\text { Propagation Speed }} \\times \\text { Data Rate } \\\\\\\\<br/> 512=2 \\times \\frac{L}{2 \\times 10^8} \\times\\left(100 \\times 10^6\\right) \\\\\\\\<br/> 512=2 \\times \\frac{L}{2 \\times 10^8} \\times 10^8 \\\\\\\\<br/> 512=2 \\times L \\times 0.5<br/> \\end{gathered}<br/> $$<br/> Increased by $50\\%:$<br/> $$<br/> L_{\\text {new }}=512 \\times 1.5=768 \\mathrm{~m}<br/> $$<br/> \\begin{aligned}<br/> \\text { Min Frame Size }_{\\text {new }} &amp; =2 \\times \\frac{768}{2 \\times 10^8} \\times\\left(1000 \\times 10^6\\right) \\\\\\\\<br/> =2 &amp; \\times \\frac{768}{2 \\times 10^8} \\times 10^9 \\\\\\\\<br/> = &amp; 2 \\times 768 \\times 5 \\\\\\\\<br/> = &amp; 7680 ~\\mathrm{bits}<br/> \\end{aligned}</div><br><br><a href=\"https://gateoverflow.in/499882/go-classes-dpp-cn-ethernet#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-cn-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/computer-networks\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Computer Networks - Ethernet & Medium Access Control</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>If the data from the upper layer is $40 ~\\text{bytes}$, how many bytes of<strong> padding</strong> are added at the Data Link Layer to form a valid Ethernet frame (excluding Preamble and SFD)?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$4 ~\\text{bytes}$<br/></span>",
                "<span style=\"display: inline;\">$6 ~\\text{bytes}$<br/></span>",
                "<span style=\"display: inline;\">$18 ~\\text{bytes}$<br/></span>",
                "<span style=\"display: inline;\">$26 ~\\text{bytes}$</span>"
            ],
            "answer": "A",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"499389\"></a><div itemprop=\"text\"><p>Minimum <strong>Payload </strong>(Data field) size $= \\mathbf{46 ~bytes}$ (per standard).<br/><br/>Given upper-layer data $=40 ~\\text{bytes}$.<br/><br/>Padding needed $=46-40=6 ~\\text{bytes}$.<br/><br/>Total frame size (Dest MAC to FCS) $=6+6+2+(40+6)+4=64 ~\\text{bytes}$.</p></div><br><br><a href=\"https://gateoverflow.in/499388/go-classes-dpp-cn-ethernet#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-cn-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/computer-networks\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Computer Networks - Ethernet & Medium Access Control</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider a network using <strong>Ethernet</strong> and <strong>IPv4</strong> without any options field in the header. Each Ethernet frame can carry up to $1600 \\text{ bytes}$ in its data portion. A <strong>UDP segment</strong> is transmitted. The UDP payload size is $9000 \\text{ bytes}$.</p><p>Which one of the following choices gives the correct number of <strong>IPv4 fragments</strong> transmitted and the <strong>size of the last fragment (including header)</strong>?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$5 \\mathrm{~fragments} ~1600 \\mathrm{~bytes}$<br/></span>",
                "<span style=\"display: inline;\">$6 \\mathrm{~fragments} ~100 \\mathrm{~bytes}$<br/></span>",
                "<span style=\"display: inline;\">$6 \\mathrm{~fragments} ~1148 \\mathrm{~bytes}$<br/></span>",
                "<span style=\"display: inline;\">$7 \\mathrm{~fragments} ~108 \\mathrm{~bytes}$</span>"
            ],
            "answer": "A",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"498324\"></a><div itemprop=\"text\"><p><strong>I think answer should be 6,1148</strong></p></div><br><br><a href=\"https://gateoverflow.in/498201/go-classes-dpp-cn-fragmentation#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-cn-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/computer-networks\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Computer Networks - Ethernet & Medium Access Control</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider a network that uses Ethernet and <strong>IPv4</strong>. Assume that <strong>IPv4</strong> headers do not use any options field. Each Ethernet frame can carry a maximum of $1400 \\textbf{ bytes}$ in its data field. A <strong>UDP segment</strong> is transmitted. The payload (data) in the UDP segment is $6800 \\textbf{ bytes}$.</p><p>Which ONE of the following choices has the <strong>CORRECT</strong> total number of fragments transmitted and the size of the last fragment including the <strong>IPv4</strong> header?<br/> </p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$4 \\mathrm{~fragments} ~1400 \\mathrm{~bytes}$<br/></span>",
                "<span style=\"display: inline;\">$5 \\mathrm{~fragments} ~1324 \\mathrm{~bytes}$<br/></span>",
                "<span style=\"display: inline;\">$6 \\mathrm{~fragments} ~108 \\mathrm{~bytes}$<br/></span>",
                "<span style=\"display: inline;\">$5 \\mathrm{~fragments} ~1296 \\mathrm{~bytes}$</span>"
            ],
            "answer": "A",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"498892\"></a><div itemprop=\"text\">UDP Payload = 6800 bytes<br/> So total size of UDP User Datagram = 6800 + UDP header = 6808 bytes<br/> <br/> Ethernet frame max payload = 1400 byes<br/> So IP max payload = 1400 - 20 (header of IP) = 1380 bytes<br/> But 1380 is not divisible by 8, we want fragment size to be divisible by 8.<br/> So fragment size will be nearest lower no divisible by 8, which is 1376.<br/> <br/> Total fragments = ceiling(6808/1376) = 5<br/> So 5 total fragments<br/> Last fragment UDP User Datagram size = 6808 - 4*1376 = 1304<br/> Last fragment frame payload size = UDP size + IP header size = 1304 + 20 = 1324 bytes<br/> <br/> So answer is 5 fragments, 1324 byes<br/> As of the current options, no answer matches</div><br><br><a href=\"https://gateoverflow.in/498198/go-classes-dpp-cn-fragmentation#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-cn-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/computer-networks\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Computer Networks - Ethernet & Medium Access Control</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider a network that uses <strong>Ethernet</strong> and <strong>IPv4</strong>. Assume that IPv4 headers do not use any options field.<br/>Each Ethernet frame can carry a <strong>maximum of $1600$ bytes</strong> in its data field.<br/>A <strong>UDP segment</strong> is transmitted, and the payload (data) in the UDP segment is <strong>$8200$ bytes.</strong><br/><br/>Which ONE of the following choices gives the <strong>correct total number of fragments transmitted</strong> and the <strong>size of the last fragment (including IPv4 header)?</strong></p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$5$ fragments, $1400$ bytes<br/></span>",
                "<span style=\"display: inline;\">$6$ fragments, $348$ bytes<br/></span>",
                "<span style=\"display: inline;\">$6$ fragments, $160$ bytes<br/></span>",
                "<span style=\"display: inline;\">$7$ fragments, $80$ bytes</span>"
            ],
            "answer": "B",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"497028\"></a><div itemprop=\"text\"><p><strong>Given</strong></p><p>Ethernet frame data field = 1600 bytes</p><p>IPv4 header = 20 bytes</p><p>UDP data = 8200 bytes</p><p>UDP header = 8 bytes</p><p>1) IP payload to send</p><ul><li>IP payload = 8200 + 8 = <strong>8208 bytes</strong></li></ul><div> </div><p>2) Max IP payload per fragment</p><ul><li>Ethernet MTU 1600 − IPv4 header 20 = <strong>1580 bytes</strong></li></ul><div> </div><p>3) 8-byte alignment</p><ul><li>Use multiples of 8 → <strong>1576 bytes</strong> per full fragment</li></ul><div> </div><p>4) Fragment count</p><ul><li>8208 = (5 × 1576) + 328 → <strong>6 fragments total</strong></li></ul><div> </div><p>5) Last fragment size (incl. IPv4 header)</p><ul><li>328 + 20 = <strong>348 bytes</strong></li></ul><div> </div><p><strong>Answer</strong>: 6 fragments; last fragment = 348 bytes (Option B)</p></div><br><br><a href=\"https://gateoverflow.in/496798/go-classes-dpp-cn-ethernet#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-cn-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/computer-networks\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Computer Networks - Ethernet & Medium Access Control</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>A network segment using the CSMA/CD protocol operates at $100$ Mbps. The segment is $2$ km long, and the signal propagation speed in the cable is $2 \\times 10^8 \\mathrm{~m} / \\mathrm{sec}$. To ensure the correct operation of the collision detection mechanism, what must the minimum frame size be?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$1000$ BITS<br/></span>",
                "<span style=\"display: inline;\">$2000$ BITS<br/></span>",
                "<span style=\"display: inline;\">$1000$ BYTES<br/></span>",
                "<span style=\"display: inline;\">$2000$ BYTES</span>"
            ],
            "answer": "B",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"496305\"></a><div itemprop=\"text\">Given , Length of segment = 2 Km, Bandwith = 2 x 10^8 m/s.<br/> <br/> Calculating Transmission Time = 2 x 10^3/2 x10^8 = 10^-5 = 10 microseconds<br/> <br/> Now, Round trip worst case, propagation delay will be Tp = 2 x Tt = 2 x 10 microseconds = 20 microseconds<br/> <br/> At 100 Mbps: bit rate = 100 x 10^6 bits/sec = 10^8 bits/sec<br/> <br/> Minimum bits = rate x RTT = 10^8 x 20 microsenconds = 10^8 x 2/10^5 = 10^3 x 2 = 2,0000 bits<br/> <br/> Converting bits to bytes = 2000/8 = 250 bytes<br/> <br/> Since 2000 bits matches therefore option b is the answer</div><br><br><a href=\"https://gateoverflow.in/496095/go-classes-dpp-cn-ethernet#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-cn-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/computer-networks\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Computer Networks - Ethernet & Medium Access Control</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider a network that uses Ethernet and IPv4. Assume that the IPv4 headers do not use any options field. Each Ethernet frame can carry a maximum of $1000$ bytes in its data field (MTU). A UDP segment is to be transmitted. The payload (data) in the UDP segment is $4000$ bytes.</p><p>Which ONE of the following choices has the CORRECT total number of fragments transmitted and the size of the last fragment, including its IPv4 header?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$4$ FRAGMENTS, $1000$ BYTES<br/></span>",
                "<span style=\"display: inline;\">$5$ FRAGMENTS, $104$ BYTES<br/></span>",
                "<span style=\"display: inline;\">$5$ FRAGMENTS, $124$ BYTES<br/></span>",
                "<span style=\"display: inline;\">$6$ FRAGMENTS, $124$ BYTES</span>"
            ],
            "answer": "C",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"495572\"></a><div itemprop=\"text\"><p>Total UDP Segment Size = UDP Header + UDP Payload<br/>Total UDP Segment Size = 8 bytes + 4000 bytes = 4008 bytes</p><p>The total IP packet (header + data) must fit within the 1000-byte MTU.</p><ul><li>Max IP Packet Size $=1000$ bytes<br/> </li><li>Max Data (IP Payload) in a packet = Max IP Packet Size - IPv4 Header<br/> </li><li>Max Data (IP Payload) in a packet $=1000$ bytes -20 bytes $=980$ bytes</li></ul><p>A key rule for IPv4 fragmentation is that the data (payload) size of every fragment (except the last one) must be a multiple of 8 to properly state the fragment offset.</p><ul><li>We check if 980 is a multiple of $8: 980 \\div 8=122.5$. It is not.<br/> </li><li>We must find the largest multiple of 8 that is less than or equal to 980.<br/> </li><li>$122 \\times 8=976$.<br/> </li><li>Therefore, the maximum data (IP payload) per fragment is 976 bytes.</li></ul><p>We will fragment the total 4008 bytes of UDP data into chunks of 976 bytes.</p><ul><li>Total Fragments $=\\lceil 4008 \\div 976\\rceil=\\lceil 4.106 \\ldots\\rceil=5$ fragments.</li></ul><p>Let's break down the data:</p><ul><li>Fragment 1: 976 bytes<br/> </li><li>Fragment 2: 976 bytes<br/> </li><li>Fragment 3: 976 bytes<br/> </li><li>Fragment 4:976 bytes<br/> </li><li>(Total so far: $976 \\times 4=3904$ bytes)<br/> </li><li>Fragment $\\mathbf{5}$ (Last Fragment): $\\mathbf{4 0 0 8}-\\mathbf{3 9 0 4}=\\mathbf{1 0 4}$ bytes</li></ul><p>This gives a total of 5 fragments.</p><p>Last Fragment Data (IP Payload): 104 bytes</p><p><br/>IPv4 Header: 20 bytes</p><p><br/>Total Size of Last Fragment = 104 bytes + 20 bytes = 124 bytes</p><p><br/><strong>Hence C is correct</strong></p></div><br><br><a href=\"https://gateoverflow.in/495571/go-classes-dpp-cn-fragmentation#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-cn-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/computer-networks\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Computer Networks - Ethernet & Medium Access Control</a></b></div></div>"
        }
    ]
});

registerTest({
    "series": "cse-dpp-2027",
    "order": 10,
    "name": "DPP 10 - Computer Networks (Ethernet & Medium Access Control - Part 2)",
    "testLabel": "DPP 10",
    "testType": "DPP",
    "bracket": "Ethernet & Medium Access Control - Part 2",
    "subject": "cn",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 10,
    "topicsCovered": "Ethernet & Medium Access Control (Practice Set 2)",
    "questions": [
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\">A CSMA/CD network is set up with a maximum cable length of $2.5$ km . The network bandwidth is $500$ Mbps, and the signal propagation speed in the cable is $200,000 \\mathrm{~km} / \\mathrm{s}$. To ensure that collision detection works correctly, what must be the minimum frame size (in bits)?</div></span>",
            "image": "",
            "options": [],
            "answer": "12500",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"539616\"></a><div itemprop=\"text\"><p>Explanation <img alt=\"\" height=\"1083\" src=\"https://gateoverflow.in/?qa=blob&amp;qa_blobid=14711314982759241667\" width=\"1108\"/></p></div><br><br><a href=\"https://gateoverflow.in/495569/go-classes-dpp-cn-ethernet#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-cn-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/computer-networks\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Computer Networks - Ethernet & Medium Access Control</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider a network that uses Ethernet and IPv4. Assume that the IPv4 headers do not use any options field. Each Ethernet frame can carry a maximum of 1400 bytes in its data field (MTU). A UDP segment is to be transmitted. The payload (data) in the UDP segment is 4320 bytes.</p><p>Which ONE of the following choices has the CORRECT total number of fragments transmitted and the size of the last fragment, including its IPv4 header?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">3 FRAGMENTS, 1396 BYTES<br/></span>",
                "<span style=\"display: inline;\">4 FRAGMENTS, 200 BYTES<br/></span>",
                "<span style=\"display: inline;\">4 FRAGMENTS, 220 BYTES<br/></span>",
                "<span style=\"display: inline;\">5 FRAGMENTS, 220 BYTES</span>"
            ],
            "answer": "A",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"495115\"></a><div itemprop=\"text\"><p>Total UDP Segment Size = UDP Header + UDP Payload<br/><br/>Total UDP Segment Size = 8 bytes + 4320 bytes = 4328 bytes</p><p>The total IP packet (header + data) must fit within the 1400-byte MTU.</p><ul><li>Max IP Packet Size = 1400 bytes<br/> </li><li>Max Data (IP Payload) in a packet = Max IP Packet Size - IPv4 Header<br/> </li><li>Max Data (IP Payload) in a packet $=1400$ bytes -20 bytes $=1380$ bytes</li></ul><p>However, in IPv4 fragmentation, the fragment offset is measured in 8-byte blocks. This means the data (payload) size of every fragment (except the last one) must be a multiple of 8.</p><ul><li>We check if 1380 is a multiple of $8: 1380 \\div 8=172.5$. It is not.<br/> </li><li>We must find the largest multiple of 8 that is less than or equal to 1380.<br/> </li><li>$172 \\times 8=1376$.<br/> </li><li>Therefore, the maximum data (IP payload) per fragment is 1376 bytes.</li></ul><div><p>Fragment 1:</p><ul><li>Data: 1376 bytes<br/> </li><li>Remaining Data: $4328-1376=2952$ bytes</li></ul><p>Fragment 2:</p><ul><li>Data: 1376 bytes<br/> </li><li>Remaining Data: 2952-1376 = 1576 bytes</li></ul><p>Fragment 3:</p><ul><li>Data: 1376 bytes<br/> </li><li>Remaining Data: $1576-1376=200$ bytes</li></ul><p>Fragment 4 (Last Fragment):</p><ul><li>Data: 200 bytes (This is the last piece, so it doesn't need to be a multiple of 8 ).</li></ul><p>This gives a total of 4 fragments.</p><ul><li>Last Fragment Data (IP Payload): 200 bytes<br/> </li><li>IPv4 Header: 20 bytes<br/> </li><li>Total Size of Last Fragment = 200 bytes + 20 bytes = 220 bytes</li></ul></div></div><br><br><a href=\"https://gateoverflow.in/495112/go-classes-dpp-cn-fragmentation#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-cn-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/computer-networks\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Computer Networks - Ethernet & Medium Access Control</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\">Two hosts, $A$ and $B$, are connected via a single packet switch. The links from $A$ to the switch and from the switch to $B$ both have a data rate of $2 \\times 10^7$ bits per second. Each link has a propagation delay of $10$ microseconds.<br/> <br/> The switch uses store-and-forward switching and adds a $50$ microsecond processing delay. This delay begins after the entire packet has been received.<br/> <br/> If $20,000$ bits of data are to be transmitted from $A$ to $B$ using a packet size of $4,000$ bits, the time elapsed between the transmission of the first bit of data and the reception of the last bit of the data (in microseconds) is $\\_\\_\\_\\_$ .</div></span>",
            "image": "",
            "options": [],
            "answer": "1270",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"494472\"></a><div itemprop=\"text\"><p>First, let's find the number of packets and the transmission delay for one packet.</p><ul><li>Total Data: 20,000 bits<br/> </li><li>Packet Size ( $L$ ): 4,000 bits<br/> </li><li>Number of Packets ( $N$ ):<br/> </li><li>$\\frac{20,000 \\text { bits }}{4,000 \\text { bits/packet }}=5$ packets<br/><br/> </li><li>Link Rate $(R): 2 \\times 10^7$ bits $/$ second<br/> </li><li>Transmission Delay ( $T_{\\text {trans }}$ ): This is the time to put one full packet onto the link.<br/> </li><li>$T_{\\text {trans }}=\\frac{L}{R}=\\frac{4,000 \\text { bits }}{2 \\times 10^7 \\text { bits } / \\text { second }}$<br/> </li><li>$T_{\\text {trans }}=2 \\times 10^{-4}$ seconds<br/> </li><li>Converting to microseconds ( $1 \\mathrm{sec}=10^6 \\mu \\mathrm{~s}$ ):<br/> </li><li>$T_{\\text {trans }}=2 \\times 10^{-4} \\times 10^6 \\mu \\mathrm{~s}=\\mathbf{2 0 0} \\mu \\mathrm{s}$</li></ul><p>Transmission Delay ( $T_{\\text {trans }}$ ): $200 \\mu \\mathrm{~s}$<br/><br/>Propagation Delay ( $T_{\\text {prop }}$ ): $10 \\mu \\mathrm{~s}$ (per link)<br/><br/>Switch Processing Delay $\\left(T_{\\text {proc }}\\right): 50 \\mu \\mathrm{~s}$</p><p>No of $\\operatorname{hops}(\\mathrm{x})=2$</p><p>$$<br/>\\begin{aligned}<br/>\\text { Total time } &amp; =(N-1) * T_{\\text {trans }}+x *\\left(T_{\\text {trans }}+T_{\\text {prop }}\\right)+(x-1) *\\left(T_{\\text {proc }}\\right) \\\\<br/>&amp; =4 * 200+2 *(200+10)+1 * 50=1270<br/>\\end{aligned}<br/>$$</p></div><br><br><a href=\"https://gateoverflow.in/494471/go-classes-dpp-cn-switching#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-cn-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/computer-networks\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Computer Networks - Ethernet & Medium Access Control</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\">A university department is setting up a new network that uses the CSMA/CD protocol for media access. The network operates at a bandwidth of $100$ Mbps. The design specifies that the minimum size for any frame sent on the network is $128$ bytes. The signal propagation speed through the network cable is $2 \\times 10^8$ meters/second.<br/> <br/> To ensure that the collision detection mechanism works correctly, the maximum permissible length of the cable segment (in meters) is $\\_\\_\\_\\_$ .</div></span>",
            "image": "",
            "options": [],
            "answer": "1024",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"493298\"></a><div itemprop=\"text\"><p>The governing formula is:</p><p>$$<br/>T_{t x_{-} \\min } \\geq 2 \\times T_p<br/>$$</p><p><br/>To find the maximum cable length, we use the equality condition:</p><p>$$<br/>T_{t x_{-} \\min }=2 \\times T_p<br/>$$</p><p><br/>Minimum Frame Size ( $L_{\\text {min }}$ ):</p><ul><li>128 bytes $=128 \\times 8=1024$ bits</li></ul><p>Bandwidth (BW):</p><ul><li>$100 \\mathrm{Mbps}=100 \\times 10^6$ bits per second</li></ul><p>$$<br/>\\begin{aligned}<br/>&amp; T_{t x \\_\\min }=\\frac{L_{\\min }}{B W}=\\frac{1024 \\mathrm{bits}}{100 \\times 10^6 \\mathrm{bps}}=10.24 \\times 10^{-6} \\text { seconds }=10.24 \\mu s \\\\<br/>&amp; 2 \\times T_p=T_{t x \\_\\min } \\\\<br/>&amp; 2 \\times T_p=10.24 \\mu s \\\\<br/>&amp; T_p=\\frac{10.24 \\mu s}{2}=5.12 \\mu s=5.12 \\times 10^{-6} \\text { seconds }<br/>\\end{aligned}<br/>$$</p><p><br/>Length $=$ Propagation Speed $\\times$ Propagation Time<br/><br/>Propagation Speed $\\left(V_p\\right): 2 \\times 10^8 \\mathrm{~m} / \\mathrm{s}$<br/><br/>Propagation Time ( $T_p$ ): $5.12 \\times 10^{-6} \\mathrm{~s}$<br/><br/>Maximum Length $=\\left(2 \\times 10^8 \\mathrm{~m} / \\mathrm{s}\\right) \\times\\left(5.12 \\times 10^{-6} \\mathrm{~s}\\right)$<br/><br/>Maximum Length $=10.24 \\times 10^2$ meters<br/><br/>Maximum Length = $1024$ meters</p></div><br><br><a href=\"https://gateoverflow.in/493297/go-classes-dpp-cn-csma-cd#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-cn-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/computer-networks\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Computer Networks - Ethernet & Medium Access Control</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>A network designer is configuring a time-slotted MAC protocol for a dedicated system with exactly 8 hosts. Each host will use the same transmission probability, $p$, in every time slot. The designer's goal is to configure the system for the maximum possible performance.</p><p>What value of transmission probability $p$ should be chosen to maximize the total throughput (efficiency) of the channel?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$0.080$<br/></span>",
                "<span style=\"display: inline;\">$0.125$<br/></span>",
                "<span style=\"display: inline;\">$0.250$<br/></span>",
                "<span style=\"display: inline;\">$0.500$</span>"
            ],
            "answer": "B",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"492616\"></a><div itemprop=\"text\"><p>To maximize the total throughput for a given number of hosts $(N)$, the optimal transmission probability $(p)$ in a slotted ALOHA system is given by the formula $p=1 / N$.<br/><br/>1. Plug in the value:</p><ul><li>Number of hosts $(N)=8$</li></ul><p>2. Calculate:</p><ul><li>$p=1 / 8$<br/> </li><li>$p=0.125$</li></ul><p>This matches option B. 0.125.</p></div><br><br><a href=\"https://gateoverflow.in/492615/go-classes-dpp-cn-slotted-aloha#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-cn-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/computer-networks\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Computer Networks - Ethernet & Medium Access Control</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>In a time-slotted MAC protocol system, there are 5 hosts competing for the channel. Each host always has data to send and attempts to transmit in any given time slot with a probability of $p=$ 0.25 . There is no backoff, and a collision occurs if more than one host transmits simultaneously.</p><p>What is the overall efficiency of the channel, defined as the probability that a time slot contains exactly one successful transmission?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$0.250$<br/></span>",
                "<span style=\"display: inline;\">$0.316$<br/></span>",
                "<span style=\"display: inline;\">$0.395$<br/></span>",
                "<span style=\"display: inline;\">$0.781$</span>"
            ],
            "answer": "C",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"492613\"></a><div itemprop=\"text\"><p>The formula for total channel efficiency in a slotted ALOHA system is $S=N \\cdot p \\cdot(1-p)^{N-1}$.<br/>1. Plug in the values:</p><ul><li>Number of hosts $(N)=5$<br/> </li><li>Transmission probability $(p)=0.25$<br/> </li><li>Non-transmission probability $(1-p)=0.75$</li></ul><p>2. Calculate:</p><ul><li>$S=5 \\cdot(0.25) \\cdot(0.75)^{5-1}$<br/> </li><li>$S=1.25 \\cdot(0.75)^4$<br/> </li><li>$S=1.25 \\cdot 0.3164$<br/> </li><li>$S \\approx 0.3955$</li></ul><p>This matches option C. 0.395.</p></div><br><br><a href=\"https://gateoverflow.in/492612/go-classes-dpp-cn-slotted-aloha#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-cn-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/computer-networks\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Computer Networks - Ethernet & Medium Access Control</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>The processing engine of a new router is benchmarked and found to have a maximum, fixed processing time of $0.5376$ microseconds for any single packet. The router is being equipped with a new full-duplex interface and must be able to forward a continuous stream of minimum-sized Ethernet frames (totalling $84$ bytes on the wire, including all overhead) without dropping any.</p><p>What is the minimum link speed that the new interface must support to allow for wirespeed forwarding?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$100 \\mathrm{Mb} / \\mathrm{s}$<br/></span>",
                "<span style=\"display: inline;\">$1000 \\mathrm{Mb} / \\mathrm{s}$<br/></span>",
                "<span style=\"display: inline;\">$1250 \\mathrm{Mb} / \\mathrm{s}$<br/></span>",
                "<span style=\"display: inline;\">$2500 \\mathrm{Mb} / \\mathrm{s}$</span>"
            ],
            "answer": "A",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"492611\"></a><div itemprop=\"text\"><p>Understand the Wirespeed Condition:<br/><br/>For wirespeed forwarding, the router must finish processing a packet before the next one fully arrives. Therefore, the minimum time to transmit a packet on the wire must be equal to the router's maximum processing time.</p><ul><li>Processing Time $=0.5376$ microseconds $(\\mu s)=0.5376 \\times 10^{-6}$ seconds.</li></ul><p>Calculate the total minimum frame size in bits:</p><ul><li>Total Size = 84 bytes.<br/> </li><li>Total Bits $=84$ bytes * 8 bits/byte $=672$ bits.</li></ul><p>Calculate the required link speed:<br/><br/>The required speed is the number of bits in the packet divided by the maximum time allowed to process it.</p><ul><li>Link Speed = Total Bits / Processing Time<br/> </li><li>Link Speed $=672$ bits $/\\left(0.5376 \\times 10^{-6} s\\right)=1,250,000,000$ bits per second.</li></ul><p>Convert to Mb/s (Megabits per second):</p><ul><li>Link Speed $=1,250,000,000 / 1,000,000=1250 \\mathrm{Mb} / \\mathrm{s}$.</li></ul></div><br><br><a href=\"https://gateoverflow.in/492610/go-classes-dpp-cn-lan-technologies#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-cn-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/computer-networks\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Computer Networks - Ethernet & Medium Access Control</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>A line card on a modern switch has several Gigabit Ethernet ports, each operating at $1 \\mathrm{~Gb} / \\mathrm{s}\\left(10^9\\right.$ bits per second). The switch must be able to handle a continuous \"worst-case\" stream of minimum-sized Ethernet frames without any drops. For this calculation, assume a minimum frame on the wire consists of a $64$-byte frame, an $8$-byte preamble, and a $12$-byte Inter-Packet Gap (IPG).</p><p>What is the theoretical forwarding rate (in Millions of packets per second, Mpps) that a single port's processing logic must support to achieve wirespeed performance?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$0.148$ Mpps<br/></span>",
                "<span style=\"display: inline;\">$1.488$ Mpps<br/></span>",
                "<span style=\"display: inline;\">$8.125$ Mpps<br/></span>",
                "<span style=\"display: inline;\">$14.880$ Mpps</span>"
            ],
            "answer": "A",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"492609\"></a><div itemprop=\"text\"><p>Calculate the total minimum frame size in bits:<br/><br/>The total size on the wire includes the frame, preamble, and the Inter-Packet-Gap (IPG).</p><ul><li>Total Size = 64 bytes (frame) + 8 bytes (preamble) + 12 bytes (IPG) = 84 bytes.<br/> </li><li>Total Bits $=84$ bytes * 8 bits/byte $=672$ bits.</li></ul><p>Calculate the time to transmit one packet:<br/><br/>This is determined by how many bits the $1 \\mathrm{~Gb} / \\mathrm{s}$ link can transmit per second.</p><ul><li>Link Speed = $1 \\mathrm{~Gb} / \\mathrm{s}=1 \\times 10^9$ bits per second.<br/> </li><li>Time per Packet = Total Bits / Link Speed = 672 bits / $\\left(1 \\times 10^9 \\mathrm{~b} / \\mathrm{s}\\right)=672 \\times 10^{-9}$ seconds.</li></ul><p>Calculate the packet rate (Packets Per Second):<br/><br/>The forwarding rate is the reciprocal of the time per packet.</p><ul><li>Packets Per Second (PPS) $=1 /$ Time per Packet $=1 /\\left(672 \\times 10^{-9} \\mathrm{~s}\\right) \\approx 1,488,095$ PPS.</li></ul><p>Convert to Mpps (Millions of packets per second):</p><ul><li>Mpps $=1,488,095 / 1,000,000 \\approx 1.488$ Mpps.</li></ul></div><br><br><a href=\"https://gateoverflow.in/492608/go-classes-dpp-cn-lan-technologies#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-cn-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/computer-networks\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Computer Networks - Ethernet & Medium Access Control</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\">An IT technician is tasked with setting up a new Local Area Network (LAN) using a budget that allows for exactly four $8$-port Ethernet switches. The switches provided do not have any dedicated uplink ports, meaning standard ports must be used to interconnect them.<br/> <br/> What is the absolute maximum number of machines that can be connected to this network?</div></span>",
            "image": "",
            "options": [],
            "answer": "26",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"492772\"></a><div itemprop=\"text\">26?<br/> <br/> </div><br><br><a href=\"https://gateoverflow.in/492607/go-classes-dpp-cn-lan-technologies#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-cn-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/computer-networks\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Computer Networks - Ethernet & Medium Access Control</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\">A network architect is designing a network segment based on the Fast Ethernet standard, which operates at a transmission speed of 100 Mbps . The design specifies a maximum segment length of 200 meters between any two stations. If the signal propagation speed in the cable is $2 \\times 10^{8} \\mathrm{m} / \\mathrm{s}$, what is the minimum frame size (in bits) that must be enforced on this network to ensure that the CSMA/CD protocol can reliably detect collisions?</div></span>",
            "image": "",
            "options": [],
            "answer": "200",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"491964\"></a><div itemprop=\"text\">\\[ BW = 100~\\text{Mbps} = 100 \\times 10^6~\\text{bps}, \\quad d = 200~\\text{m}, \\quad v = 2 \\times 10^8~\\text{m/s} \\] \\[ \\textbf{1. Propagation delay (one-way):} \\quad T_p = \\frac{d}{v} = \\frac{200}{2 \\times 10^8} = 1 \\times 10^{-6}~\\text{s} = 1~\\mu s \\] \\[ \\textbf{2. Round-trip propagation time:} \\quad T_{RTT} = 2T_p = 2~\\mu s \\] \\[ \\textbf{3. CSMA/CD condition:} \\quad T_t \\ge T_{RTT} \\] \\[ \\Rightarrow \\frac{\\text{Frame}}{BW} \\ge 2T_p \\Rightarrow \\text{Frame} \\ge 2T_p \\times BW \\] \\[ \\text{Frame} \\ge 2 \\times 1 \\times 10^{-6} \\times 100 \\times 10^6 = 200~\\text{bits} \\] \\[ \\boxed{\\text{Minimum Frame Size} = 200~\\text{bits}} \\]</div><br><br><a href=\"https://gateoverflow.in/491905/go-classes-dpp-cn-csma-cd#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-cn-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/computer-networks\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Computer Networks - Ethernet & Medium Access Control</a></b></div></div>"
        }
    ]
});

registerTest({
    "series": "cse-dpp-2027",
    "order": 11,
    "name": "DPP 11 - Computer Networks (Ethernet & Medium Access Control - Part 3)",
    "testLabel": "DPP 11",
    "testType": "DPP",
    "bracket": "Ethernet & Medium Access Control - Part 3",
    "subject": "cn",
    "date": "Nov 03, 2026",
    "duration": "18 Min",
    "totalMarks": 5,
    "topicsCovered": "Ethernet & Medium Access Control (Practice Set 3)",
    "questions": [
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\">A network uses the pure ALOHA protocol where each frame is $2,000$ bits long. The channel transmission rate is $1$ Mbps ( $=10^6$ bits per second). The aggregate number of transmissions (including new and retransmitted frames) is modelled as a Poisson process with a rate of $250$ frames per second.<br/> <br/> What is the throughput of the network in frames per second (rounded to the nearest integer)?</div></span>",
            "image": "",
            "options": [],
            "answer": "46",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"491255\"></a><div itemprop=\"text\"><p>Frame Transmission Time ( $T_{f r}$ ):</p><p>$$<br/>T_{f r}=\\frac{\\text { Frame Length }}{\\text { Channel Rate }}=\\frac{2,000 \\text { bits }}{1,000,000 \\mathrm{bps}}=0.002 \\text { seconds }<br/>$$</p><p><br/>Offered Load (G):</p><p>$$<br/>\\begin{aligned}<br/>&amp; G=\\text { Attempt } \\operatorname{Rate}(\\lambda) \\times T_{f r} \\\\<br/>&amp; G=250 \\text { frames } / \\mathrm{s} \\times 0.002 \\mathrm{~s}=0.5<br/>\\end{aligned}<br/>$$</p><p><br/>The normalized throughput (S) is calculated using the formula $S=G \\cdot e^{-2 G}$ :</p><p>$$<br/>\\begin{aligned}<br/>&amp; S=0.5 \\times e^{-2(0.5)} \\\\<br/>&amp; S=0.5 \\times e^{-1} \\\\<br/>&amp; S \\approx 0.184<br/>\\end{aligned}<br/>$$</p><p><br/>This result (S) is then multiplied by the attempt rate ( $\\lambda$ ):</p><p>$$<br/>\\begin{aligned}<br/>&amp; \\text { Result }=S \\times \\lambda \\\\<br/>&amp; \\text { Result }=0.184 \\times 250<br/>\\end{aligned}<br/>$$</p><p><br/><strong>The final answer is 46.</strong></p></div><br><br><a href=\"https://gateoverflow.in/491254/go-classes-dpp-cn-aloha#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-cn-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/computer-networks\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Computer Networks - Ethernet & Medium Access Control</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>A $100$ Mbps network is designed using the CSMA/CD protocol. If the minimum frame size allowed on this network is $64$ bytes, what is the maximum signal propagation time (one-way latency) from one end of the network to the other?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$2.56$ microseconds<br/></span>",
                "<span style=\"display: inline;\">$5.12$ microseconds<br/></span>",
                "<span style=\"display: inline;\">$1.28$ microseconds<br/></span>",
                "<span style=\"display: inline;\">$10.24$ microseconds</span>"
            ],
            "answer": "A",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"490910\"></a><div itemprop=\"text\">Option. A )<br/> <br/> In CSMA/CD protocol ,the maximum signal propagation time (one-way latency) must be equal to or less than half of the minimum frame transmission time.<br/> <br/> T(transmission time) = 64 x 8 bits/2 x 100 Mbps = 5.12 microseconds<br/> <br/> T(propagation time) in CSMA/CD = T(transmission time)/2 = 2.56 micrseconds</div><br><br><a href=\"https://gateoverflow.in/490898/go-classes-dpp-cn-csma-cd#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-cn-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/computer-networks\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Computer Networks - Ethernet & Medium Access Control</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>A CSMA/CD network operates at $100$ Mbps ( $10^8$ bits per second) over a $2.5$ km cable without any repeaters. The signal propagation speed in the cable is $2 \\times 10^7 \\mathrm{~m} / \\mathrm{sec}$. What is the minimum required frame size for this network in bytes?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$25000$<br/></span>",
                "<span style=\"display: inline;\">$3125$<br/></span>",
                "<span style=\"display: inline;\">$5000$<br/></span>",
                "<span style=\"display: inline;\">$6250$</span>"
            ],
            "answer": "A",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"490896\"></a><div itemprop=\"text\"><p>Calculate the Propagation Delay $\\left(T_p\\right)$ : This is the time it takes for a signal to travel the length of the cable.</p><ul><li>Distance $=2.5 \\mathrm{~km}=2500 \\mathrm{~m}$<br/> </li><li>Signal Speed $=2 \\times 10^7 \\mathrm{~m} / \\mathrm{sec}$<br/> </li><li>$T_p=$ Distance $/$ Signal Speed<br/> </li><li>$T_p=2500 /\\left(2 \\times 10^7\\right)=1.25 \\times 10^{-4}$ seconds.</li></ul><p>Calculate the Round Trip Time (RTT): For collision detection in CSMA/CD, the signal must travel to the end of the cable and back.</p><ul><li>RTT $=2 \\times T_p$<br/> </li><li>RTT $=2 \\times 1.25 \\times 10^{-4}=2.5 \\times 10^{-4}$ seconds.</li></ul><p>Find the Minimum Transmission Time ( $T_t$ ): The rule in CSMA/CD is that the transmission time for the smallest frame must be at least the RTT.</p><ul><li>$T_{t(\\min )}=R T T=2.5 \\times 10^{-4}$ seconds.</li></ul><p>Calculate the Minimum Frame Size (L):</p><ul><li>Bandwidth $=100 \\mathrm{Mbps}=10^8$ bits per second<br/> </li><li>$\\mathrm{L}=T_{t(\\text { min })} \\times$ Bandwidth<br/> </li><li>$\\mathrm{L}=\\left(2.5 \\times 10^{-4}\\right) \\times\\left(10^8\\right)=25000$ bits.</li></ul><p>Convert to Bytes:</p><ul><li>Size in Bytes = 25000 bits / 8 bits/byte = 3125 bytes.</li></ul></div><br><br><a href=\"https://gateoverflow.in/490895/go-classes-dpp-cn-csma-cd#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-cn-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/computer-networks\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Computer Networks - Ethernet & Medium Access Control</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>The minimum frame size requirement in a CSMA/CD-based Ethernet network is necessary to:</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">Reduce the overall probability of collisions in the network.<br/></span>",
                "<span style=\"display: inline;\">Ensure a station can detect a collision before it finishes transmitting the frame.<br/></span>",
                "<span style=\"display: inline;\">Accommodate the $48$-bit MAC addresses and the frame checksum in the header.<br/></span>",
                "<span style=\"display: inline;\">Allow for faster routing of the packet at the network layer.</span>"
            ],
            "answer": "B",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"490113\"></a><div itemprop=\"text\">The minimum frame size requirement in a CSMA/CD-based Ethernet network is necessary to<br/> Ensure a station can detect a collision before it finishes transmitting the frame.</div><br><br><a href=\"https://gateoverflow.in/490112/go-classes-dpp-cn-isro#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-cn-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/computer-networks\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Computer Networks - Ethernet & Medium Access Control</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider a network that uses Ethernet and $\\mathrm{IPv4}$. Assume that $\\mathrm{IPv4}$ headers do not use any options field. Each Ethernet frame can carry a maximum of $1500$ bytes in its data field. A UDP segment is transmitted. The payload (data) in the UDP segment is $9000$ bytes.</p><p>Which ONE of the following choices has the CORRECT total number of fragments transmitted and the size of the last fragment including the $\\mathrm{IPv4}$ header?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$7$ fragments, $128$ bytes<br/></span>",
                "<span style=\"display: inline;\">$6$ fragments, $1608$ bytes<br/></span>",
                "<span style=\"display: inline;\">$7$ fragments, $148$ bytes<br/></span>",
                "<span style=\"display: inline;\">$7$ fragments, $156$ bytes</span>"
            ],
            "answer": "A",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"489700\"></a><div itemprop=\"text\">$\\textbf{Given:}$<br/> <br/> Each Ethernet frame data field max = \\(1500\\) bytes. <br/> <br/> IPv4 header (no options) = \\(20\\) bytes. <br/> <br/> UDP payload (data) = \\(9000\\) bytes. (Note: the IP payload must carry the entire UDP segment, i.e. UDP header \\(8\\) bytes + UDP data.)<br/> <br/> $\\textbf{Compute IP payload size (UDP segment length):}$<br/> <br/> \\[<br/> \\text{IP payload} = \\text{UDP header} + \\text{UDP data} = 8 + 9000 = 9008\\ \\text{bytes}.<br/> \\]<br/> <br/> $\\textbf{Maximum data per IP fragment:}$<br/> <br/> \\[<br/> \\text{Max data per fragment} = 1500 - 20 = 1480\\ \\text{bytes}.<br/> \\]<br/> IPv4 fragment offsets are in 8-byte units, so the fragment data (except final) must be a multiple of 8. <br/> \\[<br/> 1480/8 = 185 \\quad\\Rightarrow\\quad 185\\times 8 = 1480\\ \\text{bytes (already a multiple of 8)}.<br/> \\]<br/> <br/> $\\textbf{Number of fragments:}$<br/> <br/> Full fragments of \\(1480\\) bytes: compute how many fit into \\(9008\\):<br/> \\[<br/> \\Big\\lfloor \\frac{9008}{1480} \\Big\\rfloor = 6,\\qquad 6\\times1480 = 8880.<br/> \\]<br/> Remaining data for the last fragment:<br/> \\[<br/> 9008 - 8880 = 128\\ \\text{bytes}.<br/> \\]<br/> Thus total fragments \\(=6\\) full fragments \\(+\\;1\\) final fragment \\(=7\\) fragments.<br/> <br/> $\\textbf{Size of last fragment (including IPv4 header):}$<br/> <br/> Last fragment carries \\(128\\) bytes of data plus the IPv4 header:<br/> \\[<br/> 128 + 20 = 148\\ \\text{bytes}.<br/> \\]<br/> <br/> \\[<br/> \\boxed{\\text{Answer: } 7\\ \\text{fragments, last fragment size }=148\\ \\text{bytes.}}<br/> \\]</div><br><br><a href=\"https://gateoverflow.in/489699/go-classes-dpp-cn-fragmentation#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-cn-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/computer-networks\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Computer Networks - Ethernet & Medium Access Control</a></b></div></div>"
        }
    ]
});

registerTest({
    "series": "cse-dpp-2027",
    "order": 12,
    "name": "DPP 12 - Computer Networks (Transport Layer & Congestion Control - Part 1)",
    "testLabel": "DPP 12",
    "testType": "DPP",
    "bracket": "Transport Layer & Congestion Control - Part 1",
    "subject": "cn",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 10,
    "topicsCovered": "Transport Layer & Congestion Control (Practice Set 1)",
    "questions": [
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>A token bucket regulator has a bucket capacity of $\\mathrm{1 ~MB}$ and a token arrival rate of $\\mathrm{10 ~Mbps}$ .<br/><br/>If the bucket is initially full, what is the maximum time duration for which the output can transmit at a peak rate of $\\mathrm{40 ~Mbps}$ continuously?<br/> </p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$0.15 ~\\text{sec}$<br/></span>",
                "<span style=\"display: inline;\">$0.26 ~\\text{sec}$<br/></span>",
                "<span style=\"display: inline;\">$0.32 ~\\text{sec}$<br/></span>",
                "<span style=\"display: inline;\">$0.4 ~\\text{sec}$</span>"
            ],
            "answer": "A",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"499394\"></a><div itemprop=\"text\">Maximum burst time at peak rate $M$ :<br/> <br/> Let $t=$ burst time.<br/> <br/> Tokens consumed $=M \\cdot t$<br/> <br/> Tokens generated $=r \\cdot t$<br/> <br/> Initial tokens $=C$<br/> <br/> Equation:<br/> <br/> $$<br/> \\begin{gathered}<br/> M \\cdot t \\leq C+r \\cdot t \\\\\\\\<br/> 40 \\times 10^6 \\cdot t \\leq 8 \\times 10^6+10 \\times 10^6 \\cdot t \\\\\\\\<br/> (40-10) \\times 10^6 \\cdot t \\leq 8 \\times 10^6 \\\\\\\\<br/> 30 \\times 10^6 \\cdot t \\leq 8 \\times 10^6 \\\\\\\\<br/> t \\leq \\frac{8}{30} \\sec \\approx 0.2667 \\mathrm{~s}<br/> \\end{gathered}<br/> $$</div><br><br><a href=\"https://gateoverflow.in/499392/go-classes-dpp-cn-token-bucket#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-cn-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/computer-networks\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Computer Networks - Transport Layer & Congestion Control</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider a TCP connection where the congestion window varies between $\\mathrm{W}$ and $\\mathrm{W} / 2$ due to periodic packet losses caused by congestion. The round-trip time (RTT) is $100 ~\\text{ms}$ , and the maximum segment size $\\text{(MSS)}$ is $1460 ~\\text{bytes}$.</p><p><strong>If the average congestion window size is $\\mathbf{12 ~MSS}$ , what is the approximate average throughput of this connection in </strong>$\\textbf{Mbps}$<strong>?</strong><br/> </p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$1.4 ~\\text{Mbps}$<br/></span>",
                "<span style=\"display: inline;\">$2.8 ~\\text{Mbps}$<br/></span>",
                "<span style=\"display: inline;\">$5.6 ~\\text{Mbps}$<br/></span>",
                "<span style=\"display: inline;\">$11.2 ~\\text{Mbps}$</span>"
            ],
            "answer": "A",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"498937\"></a><div itemprop=\"text\"><p><strong>Given Parameters</strong></p><ul><li>Average congestion window (W_avg) $=12 ~\\text{MSS}$<br/> </li><li>Round-trip time (RTT) $=100 \\mathrm{~ms}=0.1 ~\\text{seconds}$<br/> </li><li>Maximum segment size (MSS) $= 1460 ~\\text{bytes}$<br/> </li><li>TCP cycles between $\\text{W}$ and $\\text{W/2}$ (typical AIMD behavior)<br/> </li></ul><p><strong>TCP Throughput Formula</strong><br/><br/>For a TCP connection with periodic losses, the average throughput can be approximated as:</p><p>$$<br/>\\text { Throughput }=\\frac{\\text { Average Window Size × MSS }}{\\text { RTT }}<br/>$$</p><p> </p><p><strong>Average Window to Bytes</strong></p><ul><li>Average window in bytes $=12 \\times 1460 ~\\text{bytes}=17520 ~\\text{bytes}$<br/> </li></ul><p><strong>Convert to Bits</strong></p><ul><li>$17520 ~\\text{bytes} ~\\times 8 ~\\text{bits/byte}=140160 ~\\text{bits}$<br/> </li></ul><p><strong>Calculate Throughput</strong></p><ul><li>Throughput $= 140160 ~\\text{bits /} 0.1 \\text{seconds} = 1,401,600 ~\\text{bits per second}$<br/> </li><li>Throughput $=1.4016 ~\\mathrm{Mbps} \\approx \\mathbf{1.4 ~Mbps}$<br/> </li></ul><p><strong>Verification</strong><br/><br/>This result makes sense because:</p><ul><li>The connection sends $12~\\text{segments}$ every $100~\\text{ms}$<br/> </li><li>Each segment is $1460 ~\\text{bytes} =11,680 ~\\text{bits}$<br/> </li><li>$12 ~\\text{segments} =140,160$ bits per RTT<br/> </li><li>In $1 ~\\text{second}$ ($10$ RTTs): $1,401,600$ bps = $1.4 ~\\text{Mbps}$</li></ul></div><br><br><a href=\"https://gateoverflow.in/498935/go-classes-dpp-cn-congestion-control#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-cn-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/computer-networks\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Computer Networks - Transport Layer & Congestion Control</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider a TCP connection using AIMD (Additive Increase Multiplicative Decrease) congestion control. The current congestion window size is $\\mathbf{2 4 ~MSS}$. A timeout occurs, followed by three successful RTTs of transmission.</p><p><strong>What is the congestion window size after these three RTTs?</strong></p></div></span>",
            "image": "",
            "options": [],
            "answer": "8",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"498933\"></a><div itemprop=\"text\"><p><strong>After Timeout</strong><br/><br/>When a timeout occurs, TCP enters slow start phase:</p><ul><li>Congestion window (cwnd) is set to $1 ~\\mathrm{MSS}$<br/> </li><li>Slow start threshold (ssthresh) is set to half of previous window: $24 / 2=12 ~\\mathrm{MSS}$<br/> </li></ul><p><strong>First RTT (Slow Start)</strong></p><ul><li>$\\mathrm{cwnd = 1 ~MSS \\rightarrow 2 ~MSS}$ (exponential increase in slow start)<br/> </li></ul><p><strong>Second RTT (Slow Start continues)</strong></p><ul><li>$\\mathrm{cwnd =2 ~MSS \\rightarrow 4 ~MSS}$ (exponential increase)<br/> </li><li>Still below ssthresh $\\mathrm{(12 ~MSS)}$, so slow start continues.<br/> </li></ul><p><strong>Third RTT (Still in Slow Start)</strong></p><ul><li>$\\mathrm{cwnd =4 ~MSS \\rightarrow 8 ~MSS}$ (exponential increase)<br/> </li><li>Now $\\text{cwnd} ~(8 ~\\mathrm{MSS})$ is still less than $\\text{ssthresh}~(12 ~\\mathrm{MSS})$<br/> </li></ul><p><strong>Final Window Size</strong><br/><br/>After three successful RTTs, the congestion window size is $\\mathbf{8 ~MSS}$.</p></div><br><br><a href=\"https://gateoverflow.in/498931/go-classes-dpp-cn-congestion-control#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-cn-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/computer-networks\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Computer Networks - Transport Layer & Congestion Control</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>A TCP connection has a <strong>Round Trip Time (RTT)</strong> of $100 ~\\text{ms}$ and a <strong>segment size</strong> ($\\textbf{MSS}$) of $1,000 ~\\text{bytes}$<br/>If TCP is operating in <strong>congestion avoidance phase</strong> with an average congestion window size of $\\mathbf{20} ~\\textbf{MSS}$, estimate the <strong>throughput</strong> of the connection.<br/> </p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$100 ~\\text{Mbps}$<br/></span>",
                "<span style=\"display: inline;\">$160 ~\\text{Mbps}$<br/></span>",
                "<span style=\"display: inline;\">$1.6 ~\\text{Mbps}$<br/></span>",
                "<span style=\"display: inline;\">$2 ~\\text{Mbps}$</span>"
            ],
            "answer": "C",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"498580\"></a><div itemprop=\"text\">Average window $=20 \\mathrm{MSS}=20 \\times 1000$ bytes $=20,000$ bytes in flight.<br/> <br/> RTT $=100 \\mathrm{~ms}=0.1 \\mathrm{~s}$.<br/> <br/> Throughput $=20,000 \\mathrm{~bytes} ~\\div 0.1 \\mathrm{~s}=200,000 ~\\mathrm{bytes/s}=200,000 \\times 8=1,600,000 \\mathrm{~bits/s}=1.6 \\mathrm{Mbps}$.<br/> <br/> Answer: C $(1.6 \\mathrm{~Mbps})$</div><br><br><a href=\"https://gateoverflow.in/498578/go-classes-dpp-cn-congestion-control#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-cn-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/computer-networks\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Computer Networks - Transport Layer & Congestion Control</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>During TCP congestion control, the congestion window ($\\text{cwnd}$) increases from $8 ~\\text{MSS}$ to $16 ~\\text{MSS}$ over several round-trip times (RTTs).</p><p>Assume no packet loss occurs during this period. Which phase of TCP congestion control does this behavior represent, and how does the window grow during it?<br/> </p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">Slow Start phase; exponential growth<br/></span>",
                "<span style=\"display: inline;\">Congestion Avoidance phase; linear growth<br/></span>",
                "<span style=\"display: inline;\">Slow Start phase; linear growth<br/></span>",
                "<span style=\"display: inline;\">Congestion Avoidance phase; exponential growth</span>"
            ],
            "answer": "A",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"498577\"></a><div itemprop=\"text\"><p>This is the <strong>Congestion Avoidance phase</strong>, where the window increases <strong>linearly</strong> $-$ roughly by $1 ~\\text{MSS}$ per RTT (not exponentially).</p></div><br><br><a href=\"https://gateoverflow.in/498576/go-classes-dpp-cn-congestion-control#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-cn-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/computer-networks\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Computer Networks - Transport Layer & Congestion Control</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>A leaky bucket algorithm is configured to leak at a constant rate of $\\mathbf{1,000}$ <strong>bytes per second</strong>. The bucket capacity is $\\mathbf{5,000}$ <strong>bytes.</strong></p><p>Packets of <strong>$\\mathbf{2,000}$ bytes</strong> arrive at $\\mathbf{t = 0 ~s, ~t=1 ~s, ~t=2 ~s, ~t=3 ~s,}$ and $\\mathbf{t=4~s}$.<br/><br/>Assume the bucket starts empty and no packet loss occurs.<br/> </p><p>At what <strong>earliest time</strong> will the <strong>last packet</strong> completely leave the bucket?<br/> </p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$8 ~\\mathrm{seconds}$<br/></span>",
                "<span style=\"display: inline;\">$9 ~\\mathrm{seconds}$<br/></span>",
                "<span style=\"display: inline;\">$10 ~\\mathrm{seconds}$<br/></span>",
                "<span style=\"display: inline;\">$11 ~\\mathrm{seconds}$</span>"
            ],
            "answer": "C",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"498573\"></a><div itemprop=\"text\">Leak rate $=1,000$ bytes $/ \\mathrm{s}$. Packet arrivals (each $2,000$ bytes) at $\\mathrm{t}=0,1,2,3,4 \\mathrm{~s}$. (Bucket starts empty.)<br/> <br/> Timeline (level = bytes in bucket):<br/> <br/> $\\mathrm{t}=0$ after arrival = $2000$<br/> <br/> $\\mathrm{t}=1$ before arrival $=2000-1000=1000$; after arrival $=1000+2000=3000$<br/> <br/> $\\mathrm{t}=2$ before arrival $=3000-1000=2000$; after arrival $=2000+2000=4000$<br/> <br/> $\\mathrm{t}=3$ before arrival $=4000-1000=3000$; after arrival $=3000+2000=5000$<br/> <br/> $\\mathrm{t}=4$ before arrival $=5000-1000=4000$; after arrival $=4000+2000=6000$<br/> <br/> (After the last arrival at $\\mathrm{t}=4 \\mathrm{~s}$ the bucket contains $6000$ bytes.)<br/> <br/> Time to drain $6000$ bytes at 1000 bytes $/ \\mathrm{s}=6000 \\div 1000=6 \\mathrm{~s}$.<br/> <br/> Finish time $=4+6=10$ seconds.<br/> <br/> Note: the stated bucket capacity ($5,000$ bytes) would be exceeded at $\\mathrm{t}=4$ (would reach $6,000$). Since the problem explicitly instructs to assume no packet loss, we proceed ignoring overflow; with no-loss assumption the completion time is $10\\mathrm{~s}$ .<br/> <br/> Answer: C ($10 \\mathrm{~seconds}$)</div><br><br><a href=\"https://gateoverflow.in/498572/go-classes-dpp-cn-leaky-bucket#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-cn-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/computer-networks\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Computer Networks - Transport Layer & Congestion Control</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>A network link uses a token bucket for traffic shaping with a bucket size of $\\mathbf{10,000}$ <strong>tokens</strong> and a token generation rate of $\\mathbf{2000}$ <strong>tokens per second</strong>. Each token allows transmission of $\\mathbf{1}$ <strong>byte</strong>.</p><p>A source wants to send $\\mathbf{20,000}$ <strong>bytes</strong> of data as fast as possible through this link.<br/>Assume the output link can transmit at a very high rate, and tokens are consumed only when packets are sent.</p><p>Find the <strong>minimum time required</strong> to send all $20,000$ bytes.<br/> </p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$3 ~\\textrm{seconds}$<br/></span>",
                "<span style=\"display: inline;\">$4 ~\\textrm{seconds}$<br/></span>",
                "<span style=\"display: inline;\">$5 ~\\textrm{seconds}$<br/></span>",
                "<span style=\"display: inline;\">$6 ~\\textrm{seconds}$</span>"
            ],
            "answer": "C",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"498570\"></a><div itemprop=\"text\">Initial tokens in bucket = $10,000$. Data to send = $20,000$ bytes.<br/> <br/> You can send $10,000$ bytes immediately using existing tokens, leaving $10,000$ bytes to be covered by newly generated tokens.<br/> <br/> Token generation rate $=2,000$ tokens $/ \\mathrm{sec} \\rightarrow$ time to generate remaining $10,000$ tokens $=10,000 \\div 2,000=5$ seconds.<br/> <br/> Minimum time to send all 20,000 bytes $=5$ seconds.<br/> <br/> Answer: C ($5 ~\\mathrm{seconds}$)</div><br><br><a href=\"https://gateoverflow.in/498569/go-classes-dpp-cn-token-bucket#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-cn-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/computer-networks\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Computer Networks - Transport Layer & Congestion Control</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>A leaky bucket algorithm is used for traffic shaping. The bucket leaks at a constant rate of $\\mathrm{10 ~KB/s}$ and has a capacity of $\\mathrm{30 ~KB}$.</p><p>A burst of $\\mathrm{5 0 ~ K B}$ data arrives instantaneously at time $t=0$.</p><p>Assuming the bucket is initially empty, any excess data is discarded, and no other data arrives later, how long will it take for the bucket to empty completely?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$2$ $\\mathrm{seconds}$<br/></span>",
                "<span style=\"display: inline;\">$3$ $\\mathrm{seconds}$<br/></span>",
                "<span style=\"display: inline;\">$4$ $\\mathrm{seconds}$<br/></span>",
                "<span style=\"display: inline;\">$5$ $\\mathrm{seconds}$</span>"
            ],
            "answer": "B",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"498206\"></a><div itemprop=\"text\"><p>The leaky bucket algorithm releases data at a constant rate. </p><p>If incoming data exceeds the bucket's available capacity, the excess data is discarded.</p><p>Given, </p><p>$\\text{Bucket capacity}=30\\text{ KB}$ </p><p>$\\text{Incoming burst}=50\\text{ KB}$ </p><p>$\\text{Leak rate}=10\\text{ KB/s}$</p><p>Since the bucket can hold a maximum of $30\\text{ KB}$, only $30\\text{ KB}$ of the incoming $50\\text{ KB}$ burst is stored.</p><p>The remaining data is discarded,</p><p>$50-30=20\\text{ KB}$</p><p>Since no additional data arrives, the time required to empty the bucket is:</p><p>\\[ T=\\frac{\\text{Data stored in bucket}}{\\text{Leak rate}} \\]</p><p>\\[ \\Rightarrow T=\\frac{30}{10}=\\boxed{3\\text{ seconds}} \\]</p><p>Therefore, the bucket becomes completely empty after $3\\text{ seconds}$.</p><p><br/><strong>Answer : B</strong></p></div><br><br><a href=\"https://gateoverflow.in/498204/go-classes-dpp-cn-leaky-bucket#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-cn-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/computer-networks\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Computer Networks - Transport Layer & Congestion Control</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>In TCP congestion-control model, suppose the congestion window $(\\mathrm{cwnd})$ is currently $12\\ \\mathrm{MSS}$ and the slow-start threshold $(\\mathrm{ssthresh})$ is $8\\ \\mathrm{MSS}$.</p><p>Assume that all $12\\ \\mathrm{MSS}$ of data are outstanding when a retransmission timeout occurs.</p><p>What will be the new values of $\\mathrm{cwnd}$ and $\\mathrm{ssthresh}$ immediately after the timeout?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$\\mathrm{cwnd}=6\\ \\mathrm{MSS},\\quad \\mathrm{ssthresh}=8\\ \\mathrm{MSS}$<br/></span>",
                "<span style=\"display: inline;\">$\\mathrm{cwnd}=1\\ \\mathrm{MSS},\\quad \\mathrm{ssthresh}=6\\ \\mathrm{MSS}$<br/></span>",
                "<span style=\"display: inline;\">$\\mathrm{cwnd}=1\\ \\mathrm{MSS},\\quad \\mathrm{ssthresh}=12\\ \\mathrm{MSS}$<br/></span>",
                "<span style=\"display: inline;\">$\\mathrm{cwnd}=6\\ \\mathrm{MSS},\\quad \\mathrm{ssthresh}=6\\ \\mathrm{MSS}$</span>"
            ],
            "answer": "B",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"498797\"></a><div itemprop=\"text\">Simple, Since there is no duplicate acks being found and there is only timeout issue so, changes will be applied as following:<br/> ss_threshold = cwnd/2<br/> <br/> cwnd = 1 ( as there is issue in network, cwnd will perform slow start restart)<br/> <br/> Assuming cwnd rreached the exact value of ss_threshold i.e. 12 is the cwnd size when the threshold reached or exceeded, thus, <br/> <br/> ss_threshold = 12/2 = 6 <br/> <br/> and cwnd = 1. Therefore option b is the answer</div><br><br><a href=\"https://gateoverflow.in/498203/go-classes-dpp-cn-congestion-control#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-cn-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/computer-networks\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Computer Networks - Transport Layer & Congestion Control</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>A TCP connection uses additive increase and multiplicative decrease for congestion control. Suppose the congestion window size (cwnd) just before a loss is $16$ segments. After the loss is detected via triple duplicate ACKs, the congestion window drops according to AIMD behavior. Afterward, how many successful congestion-free round trips are required for cwnd to reach $16$ again?<br/> </p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$4$<br/></span>",
                "<span style=\"display: inline;\">$8$<br/></span>",
                "<span style=\"display: inline;\">$12$<br/></span>",
                "<span style=\"display: inline;\">$14$</span>"
            ],
            "answer": "A",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"498805\"></a><div itemprop=\"text\">Well, here we are given with, No of duplicates = 3, cwnd size just before the loss or duplicacy of ack happened is = 16, behaviour is AIMD.<br/> <br/> Following the calculations , we need to form the table of rtt, cwnd and that is as follows:<br/> <br/> RTTs cwnd (at start) Explanation cwnd(at end)<br/> <br/> 1 1 slow start (double) 2<br/> <br/> 2 2 slow start(double) 4<br/> <br/> 3 4 slow start(double) 8<br/> <br/> 4 8 slow start(double) 16<br/> <br/> Since the 16 arrives as per the question, loss will happen and duplicate acks will be found, therefore as per AIMD behaviour, <br/> ss_threshold = 16 / 2 = 8<br/> <br/> cwnd = ss_threshold (AIMD behaviour where cwnd is equal to ss_threshold )<br/> <br/> therefore table follows as following:<br/> <br/> 5 8 (+1) congestion avoidance 9<br/> <br/> 6 9 (+1) -----;------ 10<br/> <br/> 7 10 +1 11<br/> <br/> 8 11 +1 12.<br/> <br/> 9 12 +1 13 <br/> <br/> 10 13 +1 14<br/> <br/> 11 14 +1 15<br/> <br/> 12 15 +1 16<br/> <br/> <br/> <br/> Therefore, 5,6,7,8,9,10,11,12 i.e. total 8 time duration is required after the congestion issue resolution. Noting point is AIMD behaviour where we would either take cwnd = 1 ( non reno's behaviour in case of timeout) or cwnd = ss_threshold + 3 (Reno algorithm behaviour).</div><br><br><a href=\"https://gateoverflow.in/498202/go-classes-dpp-cn-congestion-control#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-cn-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/computer-networks\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Computer Networks - Transport Layer & Congestion Control</a></b></div></div>"
        }
    ]
});

registerTest({
    "series": "cse-dpp-2027",
    "order": 13,
    "name": "DPP 13 - Computer Networks (Transport Layer & Congestion Control - Part 2)",
    "testLabel": "DPP 13",
    "testType": "DPP",
    "bracket": "Transport Layer & Congestion Control - Part 2",
    "subject": "cn",
    "date": "Nov 03, 2026",
    "duration": "30 Min",
    "totalMarks": 10,
    "topicsCovered": "Transport Layer & Congestion Control (Practice Set 2)",
    "questions": [
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>CONSIDER AN INSTANCE OF TCP'S CONGESTION CONTROL ALGORITHM.<br/> </p><p>WHAT IS THE CONGESTION WINDOW SIZE (IN MSS) AT THE END OF THE <strong>TENTH </strong>TRANSMISSION?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">THE WINDOW SIZE AT THE START OF THE SLOW START PHASE IS $\\mathbf{4}$<strong> MSS</strong>.<br/></span>",
                "<span style=\"display: inline;\">THE THRESHOLD AT THE START OF THE FIRST TRANSMISSION IS $\\mathbf{12}$<strong> MSS</strong>.<br/></span>",
                "<span style=\"display: inline;\">ASSUME A <strong>TRIPLE DUPLICATE ACK</strong> OCCURS DURING THE <strong>SIXTH TRANSMISSION</strong>.<br/></span>"
            ],
            "answer": "11",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"508113\"></a><div itemprop=\"text\">11</div><br><br><a href=\"https://gateoverflow.in/497166/go-classes-dpp-cn-congestion-control#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-cn-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/computer-networks\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Computer Networks - Transport Layer & Congestion Control</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>A COMPUTER ON A <strong>$10$Mbps</strong> NETWORK IS REGULATED BY A TOKEN BUCKET. THE TOKEN BUCKET HAS A CAPACITY OF <strong>$16$ MEGABITS</strong> AND IS FILLED AT A RATE OF <strong>$2$ Mbps</strong>. THE BUCKET IS INITIALLY FULL.</p><p>THE COMPUTER TRANSMITS AT THE FULL $10$Mbps FOR <strong>$1$ SECOND</strong>, THEN IS IDLE FOR <strong>$2$ SECONDS</strong> (DURING WHICH TOKENS CONTINUE TO ARRIVE).</p><p>WHAT IS THE MAXIMUM DURATION (IN SECONDS) THAT THE COMPUTER CAN TRANSMIT AT THE FULL <strong>$10$Mbps</strong> AGAIN?<br/> </p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$0.5$<br/></span>",
                "<span style=\"display: inline;\">$1.0$<br/></span>",
                "<span style=\"display: inline;\">$1.5$<br/></span>",
                "<span style=\"display: inline;\">$2.0$</span>"
            ],
            "answer": "C",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"540622\"></a><div itemprop=\"text\"><p data-path-to-node=\"0\">Step-by-Step Breakdown</p><ol data-path-to-node=\"3\" start=\"1\"><li><p data-path-to-node=\"3,0,0\"><b data-index-in-node=\"0\" data-path-to-node=\"3,0,0\">Initial State ($t = 0\\text{ s}$):</b></p><ul data-path-to-node=\"3,0,1\"><li><p data-path-to-node=\"3,0,1,0,0\">Token bucket capacity $C = 16\\text{ Megabits}$</p></li><li><p data-path-to-node=\"3,0,1,1,0\">Current tokens in bucket = $16\\text{ Megabits}$</p></li><li><p data-path-to-node=\"3,0,1,2,0\">Token fill rate $r = 2\\text{ Mbps}$</p></li><li><p data-path-to-node=\"3,0,1,3,0\">Transmission rate $M = 10\\text{ Mbps}$</p></li></ul></li></ol><ol data-path-to-node=\"5\" start=\"2\"><li><p data-path-to-node=\"5,0,0\"><b data-index-in-node=\"0\" data-path-to-node=\"5,0,0\">Phase 1: Transmitting at 10 Mbps for 1 second</b></p><ul data-path-to-node=\"5,0,1\"><li><p data-path-to-node=\"5,0,1,0,0\"><b data-index-in-node=\"0\" data-path-to-node=\"5,0,1,0,0\">Tokens used:</b> $10\\text{ Mbps} \\times 1\\text{ s} = 10\\text{ Megabits}$</p></li><li><p data-path-to-node=\"5,0,1,1,0\"><b data-index-in-node=\"0\" data-path-to-node=\"5,0,1,1,0\">Tokens added:</b> $2\\text{ Mbps} \\times 1\\text{ s} = 2\\text{ Megabits}$</p></li><li><p data-path-to-node=\"5,0,1,2,0\"><b data-index-in-node=\"0\" data-path-to-node=\"5,0,1,2,0\">Remaining tokens:</b> $16 - 10 + 2 = 8\\text{ Megabits}$</p></li></ul></li></ol><ol data-path-to-node=\"7\" start=\"3\"><li><p data-path-to-node=\"7,0,0\"><b data-index-in-node=\"0\" data-path-to-node=\"7,0,0\">Phase 2: Idle for 2 seconds</b></p><ul data-path-to-node=\"7,0,1\"><li><p data-path-to-node=\"7,0,1,0,0\"><b data-index-in-node=\"0\" data-path-to-node=\"7,0,1,0,0\">Tokens added:</b> $2\\text{ Mbps} \\times 2\\text{ s} = 4\\text{ Megabits}$</p></li><li><p data-path-to-node=\"7,0,1,1,0\"><b data-index-in-node=\"0\" data-path-to-node=\"7,0,1,1,0\">Tokens available at start of next transmission:</b> $8 + 4 = 12\\text{ Megabits}$ <i data-index-in-node=\"75\" data-path-to-node=\"7,0,1,1,0\">(Note: $12 \\le 16$, so no tokens are lost to overflow)</i></p></li></ul></li></ol><ol data-path-to-node=\"9\" start=\"4\"><li><p data-path-to-node=\"9,0,0\"><b data-index-in-node=\"0\" data-path-to-node=\"9,0,0\">Phase 3: Maximum burst duration ($S$) at 10 Mbps</b></p><ul data-path-to-node=\"9,0,1\"><li><p data-path-to-node=\"9,0,1,0,0\">While transmitting at full rate $M$, the net token consumption rate is:</p><p>$$\\text{Net Token Depletion Rate} = M - r = 10\\text{ Mbps} - 2\\text{ Mbps} = 8\\text{ Mbps}$$</p></li><li><p data-path-to-node=\"9,0,1,1,0\">The maximum time $S$ the computer can sustain this rate is:</p><p>$$S = \\frac{\\text{Available Tokens}}{\\text{Net Depletion Rate}} = \\frac{12\\text{ Megabits}}{8\\text{ Mbps}} = 1.5\\text{ seconds}$$</p></li></ul></li></ol><h3 data-path-to-node=\"11\">Conclusion</h3><p data-path-to-node=\"12\">The maximum duration that the computer can transmit at full 10 Mbps again is <b data-index-in-node=\"77\" data-path-to-node=\"12\">1.5 seconds</b>.</p><p data-path-to-node=\"13\"><b data-index-in-node=\"0\" data-path-to-node=\"13\">Correct Answer:</b> <b data-index-in-node=\"16\" data-path-to-node=\"13\">C. 1.5</b></p></div><br><br><a href=\"https://gateoverflow.in/497162/go-classes-dpp-cn-token-bucket#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-cn-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/computer-networks\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Computer Networks - Transport Layer & Congestion Control</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>A TCP connection uses $\\mathbf{32-}$<strong>bit sequence numbers</strong>, which means there are $2^{32}$ (about $4.3$ billion) unique byte-counts.</p><p>A network has a <strong>Maximum Packet Lifetime (MPL)</strong> of $\\mathbf{100}$ <strong>seconds</strong>. This is a guarantee that no packet will stay \"lost\" in the network for more than $100$ seconds.</p><p>To prevent errors, the connection's data rate must be slow enough that it cannot \"wrap around\" (use all $2^{32}$ sequence numbers) in less than $100$ seconds.</p><p>What is the <strong>maximum data rate</strong> (in Bytes per second) that this connection can safely support?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$2^{32} \\mathrm{~B} / \\mathrm{S}$<br/></span>",
                "<span style=\"display: inline;\">$100 \\mathrm{~B} / \\mathrm{S}$<br/></span>",
                "<span style=\"display: inline;\">$2^{32} \\div 100 \\mathrm{~B} / \\mathrm{S}$<br/></span>",
                "<span style=\"display: inline;\">$100 \\div 2^{32} \\mathrm{~B} / \\mathrm{S}$</span>"
            ],
            "answer": "A",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"497161\"></a><div itemprop=\"text\"><p><strong>Identify the Goal:</strong> We need to find the maximum safe data rate.<br/><br/><strong>Identify the Constraint:</strong> The time it takes to use all sequence numbers ( $T_{\\text {wrap }}$ ) must be greater than the Maximum Packet Lifetime (MPL).</p><ul><li>$T_{\\text {wrap }}&gt;\\mathrm{MPL}$<br/> </li></ul><p><strong>Define the Variables:</strong></p><ul><li><strong>Sequence Space ( $S$ ):</strong> $2^{32}$ Bytes<br/> </li><li><strong>MPL:</strong> 100 seconds<br/> </li><li><strong>Rate ( $R$ ):</strong> The data rate in Bytes/second.<br/> </li></ul><p><strong>Find the Wrap Time:</strong> The time to wrap is the total amount of data (the sequence space) divided by the data rate.</p><ul><li>$T_{\\text {wrap }}=$ Sequence Space $/$ Rate $=S / R$<br/> </li></ul><p><strong>Set up the Inequality:</strong> We substitute our equation from step 4 into the constraint from step 2.</p><ul><li>$(S / R)&gt;\\mathrm{MPL}$<br/> </li></ul><p><strong>Solve for the Rate $(R)$ :</strong> We need to find the maximum $R$. Let's rearrange the inequality:</p><ul><li>$S&gt;\\mathrm{MPL} \\times R$<br/> </li><li>$S / \\mathrm{MPL}&gt;R$<br/> </li><li>This means the <strong>Rate ( $R$ ) must be less than $S / \\mathrm{MPL}$.</strong><br/> </li></ul><p><strong>Calculate the Maximum Rate:</strong> The maximum safe rate is the one at this boundary.</p><ul><li>Maximum Rate $=S / \\mathrm{MPL}$<br/> </li><li>Maximum Rate $=2^{32}$ Bytes $/ 100$ seconds<br/> </li><li>Maximum Rate $=2^{32} \\div 100 \\mathrm{~B} / \\mathrm{s}$</li></ul></div><br><br><a href=\"https://gateoverflow.in/497159/go-classes-dpp-cn-tcp#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-cn-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/computer-networks\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Computer Networks - Transport Layer & Congestion Control</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>FOR A HOST MACHINE THAT USES THE TOKEN BUCKET ALGORITHM, TOKENS ARRIVE AT A RATE TO SUSTAIN A DATA RATE OF <strong>$20$ MEGABYTES PER SECOND</strong>. THE MAXIMUM OUTPUT RATE OF THE HOST IS <strong>$50$ MEGABYTES PER SECOND</strong>.</p><p>THE MACHINE MUST BE ABLE TO TRANSMIT <strong>$300$ MEGABYTES</strong> OF DATA IN A TOTAL TIME OF EXACTLY <strong>$14$ SECONDS</strong>.</p><p>THE MINIMUM CAPACITY (IN MEGABYTES) OF THE TOKEN BUCKET REQUIRED TO ACHIEVE THIS IS $\\_\\_\\_\\_$ .</p></div></span>",
            "image": "",
            "options": [],
            "answer": "20",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"496802\"></a><div itemprop=\"text\"><p><strong>Token Arrival Rate (r)</strong>: $20 \\mathrm{MB} / \\mathrm{s}$ (This is the sustainable rate)<br/><br/><strong>Maximum Output Rate ( $M$ )</strong>: $50 \\mathrm{MB} / \\mathrm{s}$ (This is the burst rate)<br/><br/><strong>Total Data to Send (D)</strong>: 300 MB<br/><br/><strong>Total Time ( $T$ )</strong>: 14 seconds</p><p>$$<br/>\\begin{aligned}<br/>&amp; \\quad D \\leq C+(r \\times T) \\\\\\\\<br/>&amp; r \\times T=(20 \\mathrm{MB} / \\mathrm{s}) \\times(14 \\mathrm{~s})=280 \\mathrm{MB} \\\\\\\\<br/>&amp; 300 \\mathrm{MB}=C+280 \\mathrm{MB} \\\\\\\\<br/>&amp; C=300 \\mathrm{MB}-280 \\mathrm{MB} \\\\\\\\<br/>&amp; \\quad C=20 \\mathrm{MB}<br/>\\end{aligned}<br/>$$</p><p><br/>What about the Maximum Output Rate ( $M$ )?</p><p>The maximum output rate of $50 \\mathrm{MB} / \\mathrm{s}$ is a constraint, not part of the capacity calculation itself. We must simply check that this scenario is possible.</p><ul><li>The required average speed is $\\frac{300 \\mathrm{MB}}{14 \\mathrm{~s}} \\approx 21.43 \\mathrm{MB} / \\mathrm{s}$.<br/> </li><li>Since $M(50 \\mathrm{MB} / \\mathrm{s})$ is greater than the required average ( $21.43 \\mathrm{MB} / \\mathrm{s}$ ) and also greater than the sustainable rate $r(20 \\mathrm{MB} / \\mathrm{s})$, the host is physically capable of sending the data faster than it arrives, thus using the bucket. The scenario is valid.<br/> </li></ul><p>The minimum bucket capacity needed is <strong>20 MB.</strong> .</p></div><br><br><a href=\"https://gateoverflow.in/496801/go-classes-dpp-cn-token-bucket#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-cn-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/computer-networks\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Computer Networks - Transport Layer & Congestion Control</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\">A TCP connection (using the Reno algorithm) has an initial congestion window ( cwnd ) of $1$ MSS and an initial slow start threshold ( ssthresh ) of $16$ MSS.<br/> <br/> The connection successfully transmits data, and its cwnd grows. During the $7$th transmission (RTT $7$), the sender receives three duplicate ACKs.<br/> <br/> Assuming no more packet loss occurs, what will the congestion window size be at the end of the $10$th transmission (RTT $10$)?</div></span>",
            "image": "",
            "options": [],
            "answer": "11",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"496302\"></a><div itemprop=\"text\">Given, ssthreshold = 16 MSS, initial congestion window size = 1 MSS, No of duplicates Recieved = 3 in transmission no = 7<br/> <br/> Find out the congestion window size at the end of 10th transmission.<br/> <br/> Analyze it by RTT BY RTT Trace, till 4 RTT congestion window size doubles as slow start happens so at 4 rtt we have 16 which our threshold capacity. Right from 5 RTT we will start applying congestion avoidance acoording to which there will be +1 to the cwnd size therefore at 5 rtt 16 will be 17 and not 18. Till 7 RTT the process will go on as we reach 7 RTT we will have cwnd size 18 and there are there are 3 duplicate acks so threshold will become half of the cureent congestion window size i.e. 18/2 = 9 = new slow start threshold and congestion window at 7 becomes = 9+3 = slow start threshold + no of duplicate acks being found. thus getting 12 as the cwnd size at end of rtt 7. At RTT 8 cwnd will set to threshold value as there's a recovery and congestion avoidance resumes. This is how Reno algorithm works.Instead of setting cwnd to 1 it sets to threshold value at recovery and then the congestion avoidance resumes upto the asked or required RTT. Slow start won't be applied after 4 as the threshold is crossed at every RTT. On doing the calculation you will find the answer to come at 10 RTT be 11MSS ( if we are not treating recovery as part of the same RTT cycle) and 12 MSS( if we are treating the recovery as part of the same RTT cycle)</div><br><br><a href=\"https://gateoverflow.in/496099/go-classes-dpp-cn-congestion-control#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-cn-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/computer-networks\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Computer Networks - Transport Layer & Congestion Control</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Consider an instance of TCP's congestion control algorithm. The initial congestion window size ( cwnd ) is $1$ MSS and the initial slow start threshold ( ssthresh ) is $12$ MSS. A timeout occurs during the sixth transmission.</p><p>What will the congestion window size be at the end of the twelfth transmission (assuming $1$ transmission = $1$ RTT)?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$9$ MSS<br/></span>",
                "<span style=\"display: inline;\">$10$ MSS<br/></span>",
                "<span style=\"display: inline;\">$11$ MSS<br/></span>",
                "<span style=\"display: inline;\">$12$ MSS</span>"
            ],
            "answer": "9",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"496304\"></a><div itemprop=\"text\">Given, Intial congestion window size = 1 MSS, Slow Start threshold = 12 MSS<br/> <br/> We can go with RTT BY RTT Trace approach where we will find that till 4 rtt goes on and cwnd increments by double due to slow start but at RTT 4 the the threshold crosses and cwnd size comes out to be 16 there at RTT 4 the cwnd size at end becomes 12 now from RTT 4 the cwnd size gets incremented by +1 as the congestion avoidance gets applied. At RTT 6 cwnd start was 3, but timeout occurs and slow start threshold becomes = floor(13/2) = 6 MSS and cwnd size is set to 1. then from 7 till 9 RTT slow start applies and congestion window at ends gets incremented by double. But at RTT 9 the cwnd at end size is 8 which is beyond the new slow start threshold size i.e. 6. therefore at 9 the cwnd size at end becomes 6 and from there till RTT 12 goes on and on with action of congestion avoidance (+1 RTT).</div><br><br><a href=\"https://gateoverflow.in/496098/go-classes-dpp-cn-congestion-control#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-cn-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/computer-networks\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Computer Networks - Transport Layer & Congestion Control</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\">A TCP connection has a congestion window size of $\\mathbf{64} \\mathbf{~ KB}$ when a packet loss is detected via timeout. The connection's round trip time (RTT) is $\\mathbf{5 0 ~ msec}$, and the Maximum Segment Size (MSS) is $\\mathbf{1}$ KB.<br/> <br/> The time taken (in msec) for the congestion window to reach 64 KB again is $\\_\\_\\_\\_$</div></span>",
            "image": "",
            "options": [],
            "answer": "1850",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"538619\"></a><div itemprop=\"text\"><p><strong>Here is the Explanation <img alt=\"\" height=\"852\" src=\"https://gateoverflow.in/?qa=blob&amp;qa_blobid=12705152854784207926\" width=\"1200\"/></strong></p></div><br><br><a href=\"https://gateoverflow.in/495109/go-classes-dpp-cn-congestion-control#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-cn-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/computer-networks\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Computer Networks - Transport Layer & Congestion Control</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\">A network router uses the token bucket algorithm to manage outgoing traffic. The bucket has a capacity of $500$ tokens, where each token corresponds to one packet. Tokens are generated and added to the bucket at a constant rate of $200$ per second. The router can transmit packets at a maximum rate of $800$ packets per second as long as there are tokens in the bucket.<br/> <br/> If the bucket is initially half-full and a burst of $2000$ packets arrives to be transmitted, the minimum time required to send all $2000$ packets is $\\_\\_\\_\\_$ seconds.</div></span>",
            "image": "",
            "options": [],
            "answer": "8.75",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"493707\"></a><div itemprop=\"text\"><p>The formula you used. $M=(c+\\rho \\cdot t) / t$, helps find the time $(t)$ for which the router can sustain its maximum output rate ( $M$ ) before the initial credit ( $c$ ) of tokens is exhausted.</p><p>Your calculation is perfectly correct:</p><p>$$<br/>\\begin{gathered}<br/>800=\\frac{250+200 \\cdot t}{t} \\\\<br/>800 t=250+200 t \\\\<br/>600 t=250 \\\\<br/>t=\\frac{250}{600}=\\frac{5}{12} \\text { seconds }<br/>\\end{gathered}<br/>$$</p><p><br/>This is the duration of the initial burst. Now, to get the total time, we just need to complete the final steps.</p><p>During this initial burst of $5 / 12$ seconds, the router was sending at its maximum speed of 800 packets/second.</p><ul><li>Packets sent: $800 \\frac{\\text { packets }}{\\mathrm{sec}} \\times \\frac{5}{12} \\mathrm{sec}=\\frac{4000}{12}=\\frac{1000}{3}$ packets.</li></ul><p>Now, we find how many packets are left and how long it takes to send them at the sustained rate.</p><ul><li>Packets remaining: $2000-\\frac{1000}{3}=\\frac{6000-1000}{3}=\\frac{5000}{3}$ packets.<br/> </li><li>Time for remaining packets: After the burst, packets can only be sent as new tokens arrive (at 200 per second).<br/> </li><li>Time: $\\frac{5000 / 3 \\text { packets }}{200 \\text { packets } / \\mathrm{sec}}=\\frac{5000}{600}=\\frac{50}{6}=\\frac{25}{3}$ seconds.</li></ul><p>Finally, we add the time from the burst phase and the sustained phase.</p><ul><li>Total Time $=($ Time for burst $)+($ Time for remaining $)$<br/> </li><li>Total Time $=\\frac{5}{12}+\\frac{25}{3}=\\frac{5}{12}+\\frac{100}{12}=\\frac{105}{12}=\\mathbf{8 . 7 5}$ seconds.</li></ul></div><br><br><a href=\"https://gateoverflow.in/493705/go-classes-dpp-cn-token-bucket#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-cn-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/computer-networks\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Computer Networks - Transport Layer & Congestion Control</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>A TCP connection is used for a critical file transfer. The connection starts with a congestion window ( cwnd ) of $1$ MSS and an initial slow start threshold ( ssthresh ) of $32$ MSS. The transfer proceeds smoothly until the network detects congestion during the $7$th transmission round, signalled by the receipt of three duplicate ACKs.</p><p>Following this event, what will the size of the congestion window be at the conclusion of the $11$th transmission round?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$16$ MSS<br/></span>",
                "<span style=\"display: inline;\">$18$ MSS<br/></span>",
                "<span style=\"display: inline;\">$20$ MSS<br/></span>",
                "<span style=\"display: inline;\">$32$ MSS</span>"
            ],
            "answer": "C",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"493701\"></a><div itemprop=\"text\"><p>The connection begins in the Slow Start phase since the initial cwnd (1 MSS) is less than the ssthresh ( 32 MSS). In this phase, cwnd doubles after each successful transmission round.</p><ul><li>Initial: cwnd =1, ssthresh=32<br/> </li><li>After Tx 1: cwnd =1*2=2<br/> </li><li>After Tx 2: cwnd $=2^* 2=4$<br/> </li><li>After Tx 3: cwnd $=4^{\\star} 2=8$<br/> </li><li>After Tx 4: cwnd $=8^* 2=16$<br/> </li><li>After Tx 5: cwnd $=16^* 2=32$. At this point, cwnd reaches ssthresh. The connection now switches to the Congestion Avoidance phase.<br/> </li><li>After Tx 6: In Congestion Avoidance, cwnd increases by 1. So, cwnd $=32+1=33$ MSS.</li></ul><p>During the 7th transmission, three duplicate ACKs are received. This signals congestion but not a complete packet loss, triggering a \"fast recovery\" mechanism.<br/>1. The ssthresh is updated to half of the current cwnd (which was 33 MSS).</p><ul><li>New ssthresh = floor(33 / 2) = $\\mathbf{1 6}$ MSS.</li></ul><p>2. The cwnd is set to the new ssthresh value. This is the key difference from a timeout, which would have reset cwnd to 1.</p><ul><li>New cwnd $=16$ MSS.</li></ul><p>3. The connection immediately enters the Congestion Avoidance phase, skipping Slow Start.</p><p>The connection now continues in the Congestion Avoidance phase with the new cwnd and ssthresh values. cwnd will increase by 1 for each successful transmission.</p><ul><li>State after event (start of Tx 8 ): cwnd $=16$, ssthresh $=16$<br/> </li><li>After Tx 8: cwnd $=16+1=17$<br/> </li><li>After Tx 9: cwnd = $17+1=18$<br/> </li><li>After Tx 10: cwnd = $18+1=19$<br/> </li><li>After Tx 11: cwnd = 19 + 1 = 20 MSS</li></ul><p>At the end of the 11th transmission, the congestion window size is $20$ MSS.</p></div><br><br><a href=\"https://gateoverflow.in/493700/go-classes-dpp-cn-aimd#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-cn-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/computer-networks\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Computer Networks - Transport Layer & Congestion Control</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>A TCP connection is operating using the Additive Increase Multiplicative Decrease (AIMD) algorithm. At the beginning of the connection, the congestion window ( cwnd ) is set to $1$ MSS and the slow start threshold ( ssthresh ) is $16$ MSS. The connection proceeds normally until a timeout occurs during the sixth round of transmission.</p><p>What will be the size of the congestion window at the end of the twelfth transmission round?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$8$ MSS<br/></span>",
                "<span style=\"display: inline;\">$10$ MSS<br/></span>",
                "<span style=\"display: inline;\">$11$ MSS<br/></span>",
                "<span style=\"display: inline;\">$12$ MSS</span>"
            ],
            "answer": "C",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"493696\"></a><div itemprop=\"text\"><p>Initially, the connection is in the Slow Start phase because the cwnd (1 MSS) is less than the ssthresh ( 16 MSS). In this phase, the cwnd doubles after each successful transmission.</p><ul><li>Initial: cwnd =1, ssthresh=16<br/> </li><li>After Tx 1: cwnd $=1^* 2=2$<br/> </li><li>After Tx 2: cwnd $=2 * 2=4$<br/> </li><li>After Tx 3: cwnd $=4 * 2=8$<br/> </li><li>After Tx 4: cwnd $=8^* 2=16$. At this point, cwnd reaches ssthresh, so the connection switches to the Congestion Avoidance phase for the next transmission.</li></ul><p>In Congestion Avoidance, cwnd increases by just 1 MSS per transmission (additively).</p><ul><li>After Tx 5: cwnd $=16+1=17$</li></ul><div><p>A timeout occurs during the 6th transmission. This is a severe event, triggering the following actions:<br/><br/>1. The ssthresh is set to half of the current cwnd .</p><ul><li>New ssthresh $=$ floor $(17 / 2)=8$ MSS.</li></ul><p>2. The cwnd is reset to 1 MSS.<br/><br/>3. The connection goes back into the Slow Start phase.</p><p>Now, we trace the cwnd from its reset state.</p><ul><li>State after timeout: cwnd $=1$, ssthresh $=8$</li></ul><p>Slow Start Phase (again):</p><ul><li>After Tx 7: cwnd $=1^* 2=2$<br/> </li><li>After Tx 8: cwnd $=2 * 2=4$<br/> </li><li>After Tx 9: cwnd $=4{ }^{\\star} 2=8$. The cwnd has reached the new ssthresh value. The connection again switches to Congestion Avoidance.</li></ul><p>Congestion Avoidance Phase (again):</p><ul><li>After Tx 10: cwnd $=8+1=9$<br/> </li><li>After Tx 11: cwnd $=9+1=10$<br/> </li><li>After Tx 12: cwnd $=10+1=11$ MSS</li></ul><p>Thus, at the end of the twelfth transmission, the congestion window size is $11$ MSS.</p></div></div><br><br><a href=\"https://gateoverflow.in/493694/go-classes-dpp-cn-aimd#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-cn-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/computer-networks\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Computer Networks - Transport Layer & Congestion Control</a></b></div></div>"
        }
    ]
});

registerTest({
    "series": "cse-dpp-2027",
    "order": 14,
    "name": "DPP 14 - Computer Networks (Transport Layer & Congestion Control - Part 3)",
    "testLabel": "DPP 14",
    "testType": "DPP",
    "bracket": "Transport Layer & Congestion Control - Part 3",
    "subject": "cn",
    "date": "Nov 03, 2026",
    "duration": "18 Min",
    "totalMarks": 6,
    "topicsCovered": "Transport Layer & Congestion Control (Practice Set 3)",
    "questions": [
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\">A client and server establish a TCP connection. The connection has the following characteristics: the round trip time (RTT) is $10$ ms , the slow-start threshold is initially $24$ KB , the receiver's advertised window is $60$ KB, and the maximum segment size (MSS) is $1$ KB . The connection starts at time $t=0$. Assume the connection is always active and there are no packet losses or timeouts.<br/> <br/> The size of the congestion window (in KB) at time $t=70 \\mathrm{~ms}$ will be $\\_\\_\\_\\_$ .</div></span>",
            "image": "",
            "options": [],
            "answer": "26",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"493295\"></a><div itemprop=\"text\"><p>RTT: $10$ ms<br/>ssthresh : $24$ KB<br/>MSS: $1$ KB</p><p>The cwnd starts at $1$ KB and doubles every $10$ ms.<br/><br/>$\\mathrm{t}=0 \\mathrm{~ms}:$ cwnd $=1 \\mathrm{~KB}$<br/><br/>$\\mathrm{t}=10 \\mathrm{~ms}:$ cwnd $=2 \\mathrm{~KB}$<br/><br/>$\\mathrm{t}=20 \\mathrm{~ms}:$ cwnd $=4 \\mathrm{~KB}$<br/><br/>$\\mathrm{t}=30 \\mathrm{~ms}: \\mathrm{cwnd}=8 \\mathrm{~KB}$<br/><br/>$\\mathrm{t}=40 \\mathrm{~ms}: \\mathrm{cwnd}^{-}=16 \\mathrm{~KB}$<br/><br/>$\\mathbf{t = 5 0 ~ m s}$ : At the previous step, cwnd was $16$ KB . Doubling it would be $32$ KB . Since $32$ KB is greater than the ssthresh of 24 KB , the cwnd is instead set to the ssthresh value.</p><ul><li>$\\mathrm{cwnd}=24 \\mathrm{~KB}$<br/> </li><li>The connection switches to congestion avoidance.</li></ul><p>The cwnd now increases by 1 MSS ( 1 KB) every RTT.<br/><br/>$\\mathbf{t}=\\mathbf{6 0 ~ m s}:$ cwnd $=24 \\mathrm{~KB}+1 \\mathrm{~KB}=\\mathbf{2 5} \\mathbf{~ K B}$.<br/><br/>$\\mathbf{t}=\\mathbf{7 0} \\mathbf{~ m s}:$ cwnd $=25 \\mathrm{~KB}+1 \\mathrm{~KB}=\\mathbf{2 6} \\mathbf{~ K B}$.</p></div><br><br><a href=\"https://gateoverflow.in/493294/go-classes-dpp-cn-congestion-control#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-cn-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/computer-networks\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Computer Networks - Transport Layer & Congestion Control</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\">Consider a TCP connection where the congestion window size is 60 KB when a packet loss is detected via a timeout. The connection has a round trip time of 80 msec and uses a maximum segment size of 4 KB . The time taken (in msec) by the TCP connection to increase its congestion window back to 60 KB is $\\_\\_\\_\\_$ .</div></span>",
            "image": "",
            "options": [],
            "answer": "880",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"491959\"></a><div itemprop=\"text\">\\[<br/> \\begin{aligned}<br/> &amp;\\text{Given: } cwnd = 60~\\text{KB when timeout occurs} \\\\<br/> &amp;\\therefore ssthresh = \\frac{cwnd}{2} = 30~\\text{KB} \\\\<br/> &amp;\\text{After timeout: start from } 1~\\text{MSS} = 4~\\text{KB}<br/> \\end{aligned}<br/> \\]<br/> <br/> \\[<br/> \\textbf{Aggressive Acceleration (Slow Start)}<br/> \\]<br/> <br/> \\[<br/> \\begin{aligned}<br/> \\text{RTT}_1 &amp;: 4~\\text{KB} \\\\<br/> &amp;\\Downarrow \\times 2 \\\\<br/> \\text{RTT}_2 &amp;: 8~\\text{KB} \\\\<br/> &amp;\\Downarrow \\times 2 \\\\<br/> \\text{RTT}_3 &amp;: 16~\\text{KB} \\\\<br/> &amp;\\Downarrow \\times 2 \\\\<br/> \\text{RTT}_4 &amp;: 30~\\text{KB}<br/> \\end{aligned}<br/> \\]<br/> <br/> \\[<br/> \\textbf{Congestion Avoidance (Additive Increase)}<br/> \\]<br/> <br/> \\[<br/> \\begin{aligned}<br/> \\text{RTT}_5 &amp;: 34~\\text{KB} \\\\<br/> &amp;\\Downarrow +4 \\\\<br/> \\text{RTT}_6 &amp;: 38~\\text{KB} \\\\<br/> &amp;\\Downarrow +4 \\\\<br/> \\text{RTT}_7 &amp;: 42~\\text{KB} \\\\<br/> &amp;\\Downarrow +4 \\\\<br/> \\text{RTT}_8 &amp;: 46~\\text{KB} \\\\<br/> &amp;\\Downarrow +4 \\\\<br/> \\text{RTT}_9 &amp;: 50~\\text{KB} \\\\<br/> &amp;\\Downarrow +4 \\\\<br/> \\text{RTT}_{10} &amp;: 54~\\text{KB} \\\\<br/> &amp;\\Downarrow +4 \\\\<br/> \\text{RTT}_{11} &amp;: 58~\\text{KB} \\\\<br/> &amp;\\Downarrow +2 \\\\<br/> &amp;60~\\text{KB}<br/> \\end{aligned}<br/> \\]<br/> <br/> \\[<br/> \\boxed{<br/> \\text{Total RTTs} = 11<br/> \\quad\\Rightarrow\\quad<br/> \\text{Total Time} = 11 \\times 80~\\text{ms} = 880~\\text{ms}<br/> }<br/> \\]<br/> <br/> </div><br><br><a href=\"https://gateoverflow.in/491908/go-classes-dpp-cn-congestion-control#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-cn-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/computer-networks\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Computer Networks - Transport Layer & Congestion Control</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\">Consider a LAN with three nodes $S_1, S_2$, and $S_3$. Time is divided into fixed-size slots, and a node can begin its transmission only at the beginning of a slot. A collision is said to have occurred if more than one node transmits in the same slot. The probabilities of generation of a frame in a time slot by $S_1, S_2$, and $S_3$ are $0.5,0.2$, and $0.1$ respectively. The probability of sending a frame in the first slot without any collision by any of these three stations is $\\_\\_\\_\\_$ .</div></span>",
            "image": "",
            "options": [],
            "answer": "0.49",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"491666\"></a><div itemprop=\"text\"><p>There are three ways a successful transmission can occur:</p><ul><li>Scenario A: Only $S_1$ transmits.</li></ul><p>This means $S_1$ transmits AND $S_2$ does not AND $S_3$ does not.</p><p>$$<br/>P(A)=P\\left(S_1\\right) \\times P\\left(\\neg S_2\\right) \\times P\\left(\\neg S_3\\right)=0.5 \\times 0.8 \\times 0.9=0.36<br/>$$</p><ul><li>Scenario B: Only $S_2$ transmits.</li></ul><p>This means $S_1$ does not AND $S_2$ transmits AND $S_3$ does not.</p><p>$$<br/>P(B)=P\\left(\\neg S_1\\right) \\times P\\left(S_2\\right) \\times P\\left(\\neg S_3\\right)=0.5 \\times 0.2 \\times 0.9=0.09<br/>$$</p><ul><li>Scenario C: Only $S_3$ transmits.</li></ul><p>This means $S_1$ does not AND $S_2$ does not AND $S_3$ transmits.</p><p>$$<br/>P(C)=P\\left(\\neg S_1\\right) \\times P\\left(\\neg S_2\\right) \\times P\\left(S_3\\right)=0.5 \\times 0.8 \\times 0.1=0.04<br/>$$</p><p><br/>Total Probability $=P(A)+P(B)+P(C)=0.36+0.09+0.04=0.49$</p></div><br><br><a href=\"https://gateoverflow.in/491665/go-classes-dpp-cn-congestion-control#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-cn-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/computer-networks\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Computer Networks - Transport Layer & Congestion Control</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\">Suppose the congestion window size of a TCP connection is $60$ KB when a timeout occurs. The connection has a round trip time of $50$ msec and uses a maximum segment size of $3$ KB . The time taken (in msec) by the TCP connection to reach a $60$ KB congestion window again is $\\_\\_\\_\\_$ .</div></span>",
            "image": "",
            "options": [],
            "answer": "700",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"491664\"></a><div itemprop=\"text\"><p>cwnd at timeout $=60 \\mathrm{~KB} / 3 \\mathrm{~KB} / \\mathrm{MSS}=20 \\mathrm{MSS}$.<br/><br/>Target cwnd $=60 \\mathrm{~KB} / 3 \\mathrm{~KB} / \\mathrm{MSS}=20 \\mathrm{MSS}$.<br/><br/>RTT $=50 \\mathrm{msec}$.<br/><br/>When the timeout occurs at cwnd $=20$ MSS:</p><ul><li>The new slow start threshold ( ssthresh ) is set to half of the current cwnd . ssthresh $=\\frac{20}{2}=10 \\mathrm{MSS}$<br/> </li><li>The cwnd is reset to 1 MSS.<br/> </li><li>The connection enters the Slow Start phase.</li></ul><p>The goal is to increase the cwnd from 1 MSS to the new ssthresh of 10 MSS. In this phase, the cwnd doubles every RTT.</p><ul><li>Start: cwnd $=1$ MSS<br/> </li><li>After 1 RTT ( 50 ms ): cwnd $=2$ MSS<br/> </li><li>After 2 RTTs $(100 \\mathrm{~ms})$ : cwnd $=4$ MSS<br/> </li><li>After 3 RTTs ( 150 ms ): cwnd $=8$ MSS<br/> </li><li>After 4 RTTs $(200 \\mathrm{~ms})$ : cwnd would double to 16 MSS , but since this is greater than the ssthresh of 10 MSS, the cwnd is instead set to 10 MSS.</li></ul><p>The Slow Start phase is now complete.</p><ul><li>Time taken for Slow Start: 4 RTTs $=4 \\times 50 \\mathrm{msec}=200 \\mathrm{msec}$.<br/> </li><li>At this point, the cwnd is 10 MSS.</li></ul><p>Now, the goal is to increase the cwnd from 10 MSS to the target of 20 MSS. In this phase, the cwnd increases by 1 MSS for every RTT.</p><ul><li>Starting cwnd : 10 MSS<br/> </li><li>Target cwnd : 20 MSS<br/> </li><li>Increase needed: $20-10=10 \\mathrm{MSS}$.<br/> </li><li>Since it takes 1 RTT to increase the window by 1 MSS, this phase will take 10 RTTs.</li><li>Time taken for Congestion Avoidance: 10 RTTs $=10 \\times 50 \\mathrm{msec}=500 \\mathrm{msec}$.</li></ul><p>Total Time $=200 \\mathrm{msec}+500 \\mathrm{msec}=700 \\mathrm{msec}$.</p></div><br><br><a href=\"https://gateoverflow.in/491662/go-classes-dpp-cn-congestion-control#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-cn-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/computer-networks\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Computer Networks - Transport Layer & Congestion Control</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>In a TCP connection using the Additive Increase Multiplicative Decrease (AIMD) algorithm, the congestion window size at the start of the slow start phase is $4$ MSS and the slow start threshold is $12$ MSS. A timeout event occurs during the sixth transmission. What is the congestion window size at the end of the eleventh transmission?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$7$ MSS<br/></span>",
                "<span style=\"display: inline;\">$8$ MSS<br/></span>",
                "<span style=\"display: inline;\">$9$ MSS<br/></span>",
                "<span style=\"display: inline;\">$12$ MSS</span>"
            ],
            "answer": "A",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"491661\"></a><div itemprop=\"text\"><p>Initial State:</p><ul><li>$\\mathrm{cwnd}=4$ MSS<br/> </li><li>ssthresh $=12$ MSS</li></ul><p>Phase 1: Slow Start (since cwnd &lt; ssthresh )<br/><br/>The window size doubles after each successful transmission (round-trip time).<br/><br/>1. Start of T1: $\\mathrm{cwnd}=4$.<br/><br/>2. End of T1: cwnd $=4^{\\star} 2=8$.<br/><br/>3. End of T2: cwnd increases to ssthresh, so cwnd $=12$. (It would have been 16, but it cannot overshoot the threshold in slow start). The phase now switches to Congestion Avoidance.</p><p>Phase 2: Congestion Avoidance (since cwnd &gt;= ssthresh )<br/>The window size increases by 1 MSS after each successful transmission.<br/><br/>4. End of T3: cwnd = $12+1=13$.<br/><br/>5. End of T4: cwnd = $13+1=14$.<br/><br/>6. End of T5: cwnd $=14+1=15$.<br/><br/>7. During T6: A timeout occurs. The current cwnd is 15 MSS.</p><p>Timeout Event:<br/>When a timeout occurs, TCP reacts as follows:</p><ul><li>The ssthresh is set to half of the current cwnd :</li></ul><p>$$<br/>\\text { ssthresh }=\\text { floor }(15 / 2)=7 \\text { MSS. }<br/>$$</p><ul><li>The cwnd is reset to 1 MSS.<br/> </li><li>The connection re-enters the Slow Start phase.</li></ul><p>Phase 3: Slow Start (Restart)<br/><br/>This new state begins with the next transmission, T7.<br/><br/>8. Start of T7: cwnd = 1. ssthresh =7.<br/><br/>9. End of T7: cwnd $=1^* 2=2$.<br/><br/>10. End of T8: cwnd $=2 * 2=4$.<br/><br/>11. End of T9: cwnd increases to ssthresh , so cwnd $=7$. (It would have been 8, but it cannot overshoot the new threshold). The phase switches back to Congestion Avoidance.</p><p>Phase 4: Congestion Avoidance<br/><br/>12. End of T10: $\\mathrm{cwnd}=7+1=8$.<br/><br/>13. End of T11: $\\mathrm{cwnd}=8+1=9$.</p><p>Thus, the congestion window size at the end of the eleventh transmission is<strong> 9 MSS</strong>.</p></div><br><br><a href=\"https://gateoverflow.in/491660/go-classes-dpp-cn-congestion-control#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-cn-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/computer-networks\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Computer Networks - Transport Layer & Congestion Control</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>A host needs to send a large UDP datagram over a network that uses IPv4. The network link has an MTU of $1492$ bytes. The UDP segment contains $4400$ bytes of application data. Assuming the IPv4 header does not contain any optional fields, which of the following correctly states the total number of fragments generated and the total size of the final fragment?</p></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">$3$ fragments, $1476$ bytes<br/></span>",
                "<span style=\"display: inline;\">$3$ fragments, $1484$ bytes<br/></span>",
                "<span style=\"display: inline;\">$2$ fragments, $1484$ bytes<br/></span>",
                "<span style=\"display: inline;\">$3$ fragments, $1464$ bytes</span>"
            ],
            "answer": "B",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"491253\"></a><div itemprop=\"text\"><p>1. Calculate Total IP Payload:</p><p>The data that the IP layer needs to fragment is the entire UDP segment.</p><ul><li>Total IP Payload = (UDP Data) + (UDP Header)<br/> </li><li>Total IP Payload = 4400 bytes + 8 bytes = 4408 bytes</li></ul><p>2. Calculate Maximum Data per Fragment:</p><p>The maximum data in a fragment is the MTU minus the IP header size.</p><ul><li>Max Data = MTU - IPv4 Header</li><li>Max Data = 1492 bytes - 20 bytes = 1472 bytes</li></ul><p>(Note: 1472 is a multiple of 8 , so we can use this full size).<br/><br/>3. Determine the Fragments:</p><p>We need to send 4408 bytes of data, with each full fragment carrying 1472 bytes.</p><ul><li>Fragment 1: carries 1472 bytes. (Remaining data: 4408-1472 = 2936 bytes)<br/> </li><li>Fragment 2: carries 1472 bytes. (Remaining data: 2936-1472 = 1464 bytes)<br/> </li><li>Fragment 3 (Final): carries the leftover 1464 bytes of data.</li></ul><p>This gives a total of $\\mathbf{3}$ fragments.<br/><br/>4. Calculate the Total Size of the Final Fragment:</p><p>This is the crucial last step. The total size includes the data and the header.</p><ul><li>Total Size $=($ Data in last fragment $)+($ IPv4 Header $)$<br/> </li><li>Total Size = 1464 bytes + 20 bytes = 1484 bytes</li></ul><p>So, the final answer is 3 fragments and 1484 bytes for the last fragment's size.<br/><br/>Therefore, the correct option is B.</p></div><br><br><a href=\"https://gateoverflow.in/491252/go-classes-dpp-cn-fragmentation#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-cn-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/computer-networks\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Computer Networks - Transport Layer & Congestion Control</a></b></div></div>"
        }
    ]
});

registerTest({
    "series": "cse-dpp-2027",
    "order": 15,
    "name": "DPP 15 - Computer Networks (Application Layer & Services)",
    "testLabel": "DPP 15",
    "testType": "DPP",
    "bracket": "Application Layer & Services",
    "subject": "cn",
    "date": "Nov 03, 2026",
    "duration": "15 Min",
    "totalMarks": 4,
    "topicsCovered": "Application Layer & Services Practice Questions",
    "questions": [
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\">Consider the resolution of the domain name www.research.ac.uk by a local DNS resolver using an iterative query mechanism. Assume the resolver's cache is not empty; it already contains the resource record for the .ac.uk name server. No other records are cached. The number of new external DNS query-response pairs the resolver must initiate to find the IP address is $\\_\\_\\_\\_$ .</div></span>",
            "image": "",
            "options": [],
            "answer": "2",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"494099\"></a><div itemprop=\"text\">The iterative process performed by the resolver is as follows:<br/> <br/> 1. The resolver checks its cache and finds the address for the .ac. uk server. This allows it to skip querying the Root server and the .uk TLD server.<br/> <br/> 2. Resolver asks the .ac.uk server for www.research.ac.uk. The server replies with the address of the research.ac.uk server. (External Pair 1)<br/> <br/> 3. Resolver asks the research.ac.uk (authoritative) server for www.research.ac.uk. The server replies with the final IP address. (External Pair 2)<br/> <br/> This requires a total of 2 external query-response pairs. (This count does not include the initial query from the user's computer to the local resolver).</div><br><br><a href=\"https://gateoverflow.in/494098/go-classes-dpp-cn-dns#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-cn-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/computer-networks\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Computer Networks - Application Layer & Services</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\">A web browser, with an empty cache, is set to use persistent HTTP and can open up to $6$ parallel connections to a single server. A requested web page contains one main HTML file and $10$ embedded images (all hosted on the same server). What is the minimum number of TCP connections the browser will open to display the page completely?</div></span>",
            "image": "",
            "options": [],
            "answer": "6",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"494097\"></a><div itemprop=\"text\">The browser will open its maximum number of parallel connections ($6$) to the server. It will download the HTML file on one connection and then distribute the $10$ image requests across those same $6$ persistent connections as they become available. All $11$ objects are multiplexed over these $6$ connections, which are opened once and then reused.</div><br><br><a href=\"https://gateoverflow.in/494096/go-classes-dpp-cn-http#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-cn-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/computer-networks\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Computer Networks - Application Layer & Services</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\">Assume you have requested a web page from a server. Your browser's cache is initially empty. The browser is configured to use non-persistent HTTP. The web page consists of one main HTML file, three stylesheets (.css files), and eight small icon images. The minimum number of TCP connections required to display the web page completely is $\\_\\_\\_\\_$ .</div></span>",
            "image": "",
            "options": [],
            "answer": "12",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"494093\"></a><div itemprop=\"text\">In non-persistent mode, a separate TCP connection is required for every single object. Total objects $=1$ (HTML) $+3$ (stylesheets) $+ 8$ (icons) $=\\mathbf{1 2}$ objects. Therefore, 12 TCP connections are needed.</div><br><br><a href=\"https://gateoverflow.in/494092/go-classes-dpp-cn-http#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-cn-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/computer-networks\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Computer Networks - Application Layer & Services</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\"><div itemprop=\"text\"><p>Arrange the steps involved when a user enters a URL in a browser and accesses a website.</p><p>Choose the correct answer from the options given below:</p><div> </div><ol start=\"1\" style=\"list-style-type: upper-alpha;\"><li>$1$<br/> </li><li>$2$<br/> </li><li>$3$<br/> </li><li>$4$</li></ol><p><strong>Given Steps:</strong></p><ol type=\"A\"><li>DNS resolution</li><li>HTTP request sent</li><li>URL entered in the browser</li><li>IP address obtained</li><li>Webpage displayed</li></ol></div></span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">B, A, C, E, D</span>",
                "<span style=\"display: inline;\">C, B, A, E, D</span>",
                "<span style=\"display: inline;\">B, C, D, A, E</span>",
                "<span style=\"display: inline;\">C, A, D, B, E</span>"
            ],
            "answer": "D",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> <a name=\"490220\"></a><div itemprop=\"text\">1️⃣ URL entered in the browser → user types a web address.<br/> → (C)<br/> <br/> 2️⃣ DNS resolution → the browser checks which IP corresponds to that URL.<br/> → (A)<br/> <br/> 3️⃣ IP address obtained → DNS lookup returns the IP.<br/> → (D)<br/> <br/> 4️⃣ HTTP request sent → browser sends an HTTP/HTTPS request to that IP.<br/> → (B)<br/> <br/> 5️⃣ Webpage displayed → server responds, browser renders the page.<br/> → (E)<br/> <br/> Answer: Option D</div><br><br><a href=\"https://gateoverflow.in/489315/go-classes-dpp-cn-ugc-net#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-cn-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/computer-networks\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">Computer Networks - Application Layer & Services</a></b></div></div>"
        }
    ]
});
