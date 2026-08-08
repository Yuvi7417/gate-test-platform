registerTest({
  series: "Aptitude",
  name: "WQT - Aptitude-2",
  date: "Oct 01, 2026",
  questions: [
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>What happens when a source sends an IP packet larger than the MTU of a router along the path and the DF (Don't Fragment) bit is set?</p> <p></p>`,
      image: "",
      options: [
        `The packet is silently dropped<br>&nbsp;`,
        `The packet is fragmented by the router<br>&nbsp;`,
        `The destination host discards the packet<br>&nbsp;`,
        `An ICMP error message is sent back to the source`,
      ],
      answer: "D",
      solution: `<img src="/images/quiz/wqt-apti2/1.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>An IP datagram of total length  \\( 1000 \\) bytes, including a  \\( 20 \\)-byte IP header, needs to be transmitted over a network with a Maximum Transmission Unit (MTU) of  \\( 512 \\) bytes. The datagram is fragmented accordingly. Fragmentation must ensure that each fragment's payload size (excluding header) is a multiple of  \\( 8 \\) bytes, except possibly the last fragment.<br><br>What is the Fragment Offset value (in bytes) for the third fragment? </p> <p></p>`,
      image: "",
      options: [
        `\\( 976 \\)<br>&nbsp;`,
        `\\( 122 \\)<br>&nbsp;`,
        `\\( 508 \\)<br>&nbsp;`,
        `\\( 492 \\)`,
      ],
      answer: "A",
      solution: `<img src="/images/quiz/wqt-apti2/2.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>An IP datagram arrives at a router with the following header information:<br> \$\$  \\begin{array}{ll} \\text{Length of IP header:} &amp; &nbsp;\\quad 20\\ \\text{bytes} \\\\ \\text{Total length of IP datagram:} &amp; \\quad996\\ \\text{bytes} \\\\ \\text{DF flag:} &amp; \\quad 0 \\\\ \\text{MF flag:} &amp; \\quad 1 \\\\ \\text{Fragment offset:} &amp; \\quad 122 \\\\ \\end{array}  \$\$ <br>The datagram must now be forwarded over a network with an MTU of only  \\( 500 \\) bytes.<br>Use the information in the IP header to infer the minimum total length of the original datagram (before it was fragmented for the first time). </p> <p></p>`,
      image: "",
      options: [
        `\\( 1500 \\) bytes<br>&nbsp;`,
        `\\( 1972 \\) bytes<br>&nbsp;`,
        `\\( 1496 \\) bytes<br>&nbsp;`,
        `\\( 1118 \\) bytes`,
      ],
      answer: "B",
      solution: `<img src="/images/quiz/wqt-apti2/3.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>Match the following IP header fields (Column B) to their respective functions (Column A). Use option \\( \\mathbf{f)} \\) if none of the given fields apply.<br> \$\$  \\begin{array}{ll} \\text{Column A (Purpose)} &amp; \\text{Column B (Field)} \\\\ \\text{i. Used for fragmentation} &amp; \\text{a) 16-bit Identification Field} \\\\ \\text{ii. Indicates presence of options} &amp; \\text{b) 4-bit Header Length} \\\\ \\text{iii. Prevents infinite packet looping} &amp; \\text{c) 8-bit TTL} \\\\ \\text{iv. Detects corruption of packet payload} &amp; \\text{d) 16-bit Checksum} \\\\ &amp; \\text{e) 8-bit Protocol} \\\\ &amp; \\text{f) none-of-the-above} \\\\ \\end{array}  \$\$ </p> <p></p>`,
      image: "",
      options: [
        `\\( \\mathrm{i} \\rightarrow \\mathrm{a}, \\mathrm{ii} \\rightarrow \\mathrm{b}, \\mathrm{iii} \\rightarrow \\mathrm{c}, \\mathrm{iv} \\rightarrow \\mathrm{d} \\) <br>&nbsp;`,
        `\\( \\mathrm{i} \\rightarrow \\mathrm{a}, \\mathrm{ii} \\rightarrow \\mathrm{b}, \\mathrm{iii} \\rightarrow \\mathrm{c}, \\mathrm{iv} \\rightarrow \\mathrm{f} \\) <br>&nbsp;`,
        `i  \\( \\rightarrow \\mathrm{c} \\), ii  \\( \\rightarrow \\mathrm{a} \\), iii  \\( \\rightarrow \\mathrm{e} \\), iv  \\( \\rightarrow \\mathrm{d} \\)<br>&nbsp;`,
        `\\( \\mathrm{i} \\rightarrow \\mathrm{e}, \\mathrm{ii} \\rightarrow \\mathrm{b}, \\mathrm{iii} \\rightarrow \\mathrm{a}, \\mathrm{iv} \\rightarrow \\mathrm{f} \\)`,
      ],
      answer: "B",
      solution: `<img src="/images/quiz/wqt-apti2/4.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>A router receives a  \\( 1500 \\)-byte IPv4 packet (including a  \\( 20 \\)-byte IP header), with IP Identification field set to  \\( \\mathbf{x} \\), the MF (More Fragments) flag set to \\( 1 \\), and the DF (Don't Fragment) flag set to \\( 0 \\). The router needs to forward the packet over a link with an MTU of  \\( 1000 \\) bytes, so fragmentation is required.<br><br>Which of the following statements about the IP header fields of the second fragment are correct? </p> <p></p>`,
      image: "",
      options: [
        `The value of the Identification field in the second fragment is  \\( \\mathbf{x} \\)<br>&nbsp;`,
        `The Total Length field in the second fragment is  \\( \\mathbf{5 2 0} \\) bytes<br>&nbsp;`,
        `The Fragment Offset field in the second fragment is  \\( \\mathbf{9 8 0} \\)<br>&nbsp;`,
        `The MF (More Fragments) flag in the second fragment is  \\( \\mathbf{1} \\)`,
      ],
      answer: ["A", "D"],
      solution: `<img src="/images/quiz/wqt-apti2/5.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>Host A sends a total of  \\( 2400 \\) bytes<strong> </strong>to Host B over a network path as shown below.<br><br>This includes a  \\( 20 \\)-byte TCP header and a  \\( 20 \\)-byte IP header. </p> <div style="text-align: center; margin: 20px 0;"><img alt="" src="/images/quiz/wqt-apti2/q_img1.png" style="max-width: 75%;"></div> <p>Assume the probability that any fragment arrives intact over any link is  \\(  p  \\), and there is no retransmission. </p> <p>What is the probability that the entire  \\( 2400 \\) bytes arrive at Host B without the need for retransmission? </p> <p></p>`,
      image: "",
      options: [
        `\\(  p^6  \\)<br>&nbsp;`,
        `\\(  p^7  \\)<br>&nbsp;`,
        `\\(  p^8  \\)<br>&nbsp;`,
        `\\(  p^9  \\)`,
      ],
      answer: "C",
      solution: `<img src="/images/quiz/wqt-apti2/6.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>During normal IP packet forwarding by a router, which of the following packet fields are updated?</p> <p></p>`,
      image: "",
      options: [
        `IP header Source address<br>&nbsp;`,
        `IP header Destination address<br>&nbsp;`,
        `IP header TTL<br>&nbsp;`,
        `IP header checksum`,
      ],
      answer: ["C", "D"],
      solution: `<img src="/images/quiz/wqt-apti2/7.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p>An IP router uses longest prefix matching and has the following forwarding table: \$\$  \\begin{array}{l} \\\\ \\begin{array}{|c|c|} \\hline \\text{Prefix} &amp; \\text{Interface} \\\\ \\hline 128.2.0.0/24 &amp; \\text{Interface 1} \\\\ 128.2.1.0/24 &amp; \\text{Interface 2} \\\\ 128.2.2.0/24 &amp; \\text{Interface 2} \\\\ 128.2.3.0/24 &amp; \\text{Interface 3} \\\\ \\hline \\end{array} \\\\ \\\\ \\text{The router can only store $3$ prefix entries.} \\\\ \\text{Which of the following options gives a functionally equivalent forwarding table?} \\\\ \\\\ \\text{A.} \\\\ \\begin{array}{|c|c|} \\hline \\text{Prefix} &amp; \\text{Interface} \\\\ \\hline 128.2.0.0/24 &amp; \\text{Interface 1} \\\\ 128.2.1.0/23 &amp; \\text{Interface 2} \\\\ 128.2.3.0/24 &amp; \\text{Interface 3} \\\\ \\hline \\end{array} \\\\ \\\\ \\text{B.} \\\\ \\begin{array}{|c|c|} \\hline \\text{Prefix} &amp; \\text{Interface} \\\\ \\hline 128.2.0.0/24 &amp; \\text{Interface 1} \\\\ 128.2.1.0/24 &amp; \\text{Interface 2} \\\\ 128.2.2.0/24 &amp; \\text{Interface 2} \\\\ \\hline \\end{array} \\\\ \\\\ \\text{C.} \\\\ \\begin{array}{|c|c|} \\hline \\text{Prefix} &amp; \\text{Interface} \\\\ \\hline 128.2.0.0/22 &amp; \\text{Interface 2} \\\\ 128.2.0.0/24 &amp; \\text{Interface 1} \\\\ 128.2.3.0/24 &amp; \\text{Interface 3} \\\\ \\hline \\end{array} \\\\ \\\\ \\text{D.} \\\\ \\begin{array}{|c|c|} \\hline \\text{Prefix} &amp; \\text{Interface} \\\\ \\hline 128.2.0.0/22 &amp; \\text{Interface 1} \\\\ 128.2.1.0/24 &amp; \\text{Interface 2} \\\\ 128.2.3.0/24 &amp; \\text{Interface 3} \\\\ \\hline \\end{array} \\end{array} \$\$ </p>`,
      image: "",
      options: ["A", "B", "C", "D"],
      answer: "C",
      solution: `<img src="/images/quiz/wqt-apti2/8.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>Consider the following topology, where a node labelled with  \\( \\mathbf{N} \\) denotes an end system,  \\( \\mathbf{H} \\) denotes a hub,  \\( \\mathbf{S} \\) denotes a switch, and  \\( \\mathbf{R} \\) denotes a router:<br><br><img alt="" src="/images/quiz/wqt-apti2/q_img2.png" style="max-width: 75%;"><br><br>All links are Ethernet.<br>In an Ethernet-based network, suppose node  \\( N 1 \\) constructs a packet and accidentally flips a single bit in the IP header before constructing the Ethernet frame; i.e., Ethernet CRC is calculated after the bit flip. Where in the network will this error be detected and the packet dropped? </p> <p></p>`,
      image: "",
      options: [
        `At the hub  \\( H 1 \\), due to Ethernet CRC failure.<br>&nbsp;`,
        `At the router  \\( R 1 \\), due to invalid IP header checksum.<br>&nbsp;`,
        `At the router  \\( R 2 \\), due to invalid IP header checksum.<br>&nbsp;`,
        `At the switch  \\( S 1 \\), due to Ethernet CRC failure.`,
      ],
      answer: "B",
      solution: `<img src="/images/quiz/wqt-apti2/9.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>Suppose computers  \\( A \\) and  \\( B \\) have IP addresses  \\( 10.105.1.113 \\) and  \\( 10.105.1.91 \\), respectively, and they both use the same netmask  \\( N \\). Which of the values of  \\( N \\) given below should not be used if  \\( A \\) and  \\( B \\) should belong to the same network? </p> <p></p>`,
      image: "",
      options: [
        `\\( 255.255 .255 .0 \\)<br>&nbsp;`,
        `\\( 255.255 .255 .128 \\)<br>&nbsp;`,
        `\\( 255.255 .255 .192 \\)<br>&nbsp;`,
        `\\( 255.255.255.224 \\)`,
      ],
      answer: "D",
      solution: `<img src="/images/quiz/wqt-apti2/10.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p> <meta> </p> <p>An IP datagram is fragmented into three packets.<br><br>The following table shows the first 20 bytes of each IP fragment, starting from the IP header (hex values):</p> <div class="table-container"> <table style="width:100%; text-align:center; font-family:monospace;"> <tbody> <tr> <th>📦 Packet #1</th> <th>📦 Packet #2</th> <th>📦 Packet #3</th> </tr> <tr> <td> \\( \\texttt{45 00 02 54} \\) </td> <td> \\( \\texttt{45 00 01 5a} \\) </td> <td> \\( \\texttt{45 00 02 54} \\) </td> </tr> <tr> <td> \\( \\texttt{42 d8 20 48} \\) </td> <td> \\( \\texttt{42 d8 00 90} \\) </td> <td> \\( \\texttt{42 d8 20 00} \\) </td> </tr> <tr> <td> \\( \\texttt{40 11 fe af} \\) </td> <td> \\( \\texttt{40 11 1f 62} \\) </td> <td> \\( \\texttt{40 11 fe f7} \\) </td> </tr> <tr> <td> \\( \\texttt{0a 00 01 02} \\) </td> <td> \\( \\texttt{0a 00 01 02} \\) </td> <td> \\( \\texttt{0a 00 01 02} \\) </td> </tr> <tr> <td> \\( \\texttt{0a 00 01 c8} \\) </td> <td> \\( \\texttt{0a 00 01 c8} \\) </td> <td> \\( \\texttt{0a 00 01 c8} \\) </td> </tr> </tbody> </table> </div> <p>Based on this information, what is the correct order of the fragments for reassembling the original IP datagram?</p> <div class="options"> </div> <p></p>`,
      image: "",
      options: [
        `Packet #1 → Packet #3 → Packet #2<br>&nbsp;`,
        `Packet #3 → Packet #1 → Packet #2<br>&nbsp;`,
        `Packet #2 → Packet #3 → Packet #1<br>&nbsp;`,
        `Packet #3 → Packet #2 → Packet #1`,
      ],
      answer: "B",
      solution: `<img src="/images/quiz/wqt-apti2/11.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "NAT",
      text: `<p></p> <p>A computer virus is spreading in a network of  \\( 128 \\) computers. </p> <ul> <li>At the beginning (round  \\( 0 \\)), only  \\( 1 \\) computer is infected.<br>&nbsp; </li> <li>In each round, every infected computer spreads the virus to  \\( 2 \\) new uninfected computers.<br>&nbsp; </li> <li>The virus is smart and never tries to infect a computer that is already infected.<br>&nbsp;</li> <li>All infections in a round happen at the same time. After that, the next round begins.</li> </ul> <p>How many rounds (after the starting point) are needed to infect all  \\( 128 \\) computers? </p> <p></p>`,
      image: "",
      options: [],
      answer: "5",
      solution: `<img src="/images/quiz/wqt-apti2/12.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p>A sender is transmitting  \\( 7 \\) packets using the Go-Back-N protocol with a window size of  \\( 3 \\), an RTT of  \\( 200 \\) ms, and a retransmission timeout of  \\( 500 \\) ms. If ONLY the  \\( 5th \\) packet is lost, how long does it take for all packets to be correctly received and acknowledged? </p> <p></p>`,
      image: "",
      options: [
        `\\( 600 \\) ms<br>&nbsp;`,
        `\\( 700 \\) ms<br>&nbsp;`,
        `\\( 900 \\) ms<br>&nbsp;`,
        `\\( 1000 \\) ms`,
      ],
      answer: "C",
      solution: `<img src="/images/quiz/wqt-apti2/13.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p>We can think of the network as a tree, with the video server at the root and the one million subscribers \\( \\left(10^{6}\\right) \\) at the leaves. Assuming that the tree has degree four (i.e., each router in the tree connects to four routers closer to the leaves), then roughly how many routers does a packet pass through from the root to each subscriber? </p> <p></p>`,
      image: "",
      options: [
        `\\( 2 \\)<br>&nbsp;`,
        `\\( 15 \\)<br>&nbsp;`,
        `\\( 10 \\)<br>&nbsp;`,
        `\\( 20 \\)`,
      ],
      answer: "C",
      solution: `<img src="/images/quiz/wqt-apti2/14.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p>Consider the following IP header. The checksum field is currently set to <code>0000</code>. The header is being prepared for transmission.</p> <table border="1" cellpadding="5" style="border-spacing: 0px; margin: auto;"> <tbody> <tr> <td align="center">Version<br><b>4</b></td> <td align="center">IHL<br><b>5</b></td> <td align="center">Type of Service<br><b>00</b></td> <td align="center">Total Length<br><b>001C</b></td> </tr> <tr> <td colspan="2" align="center">Identification<br><b>0001</b></td> <td align="center">Flags<br><b>0</b></td> <td align="center">Fragment Offset<br><b>0000</b></td> </tr> <tr> <td align="center">Time to Live<br><b>01</b></td> <td align="center">Protocol<br><b>11</b></td> <td colspan="2" align="center">Header Checksum<br><b>0000</b></td> </tr> <tr> <td colspan="4" align="center">Source Address<br><b>0A0C0E05</b></td> </tr> <tr> <td colspan="4" align="center">Destination Address<br><b>0C060709</b></td> </tr> </tbody> </table> <p><br>What value should be written into the checksum field?</p> <p></p>`,
      image: "",
      options: [
        `&nbsp;744E<br>&nbsp;`,
        `&nbsp;8BB1<br>&nbsp;`,
        `&nbsp;FFFF<br>&nbsp;`,
        `&nbsp;110E`,
      ],
      answer: "B",
      solution: `<img src="/images/quiz/wqt-apti2/15.png" style="max-width: 75%;">`
    },
  ]
});
