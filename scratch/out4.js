registerTest({
  series: "Aptitude",
  name: "WQT - Aptitude-4",
  date: "Oct 01, 2026",
  questions: [
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>Consider a CRC in which the generator polynomial is  \\( 11 \\) (binary). What does this CRC effectively implement? </p> <p></p>`,
      image: "",
      options: [
        `It detects only single-bit errors<br>&nbsp;`,
        `It ensures detection of all  \\( 2 \\)-bit errors<br>&nbsp;`,
        `It works as a parity bit, detecting errors based on the number of  \\( 1 \\)'s<br>&nbsp;`,
        `It detects all burst errors of length less than or equal to  \\( 2 \\)`,
      ],
      answer: "C",
      solution: `<img src="/images/quiz/wqt-apti4/1.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>Consider the following small network: Hosts  \\( \\mathbf{A} \\) and  \\( \\mathbf{B} \\) are connected to a router  \\( \\mathbf{R} \\) through a switch  \\( \\mathbf{S} \\). Host  \\( \\mathbf{C} \\) connects directly to router  \\( \\mathbf{R} \\). There is no other host, switch, or router in the network.<br><img alt="" src="/images/quiz/wqt-apti4/q_img1.png" style="max-width: 75%;"> </p> <p>&nbsp;</p> <p>What is the maximum number of entries that could appear in the ARP table of host A? Which entities would those entries correspond to?</p> <p></p>`,
      image: "",
      options: [
        `\\( 1 \\) entry - only B<br>&nbsp;`,
        `\\( 1 \\) entry - only R<br>&nbsp;`,
        `\\( 2 \\) entries - B and R<br>&nbsp;`,
        `\\( 3 \\) entries - B, R, and C`,
      ],
      answer: "C",
      solution: `<img src="/images/quiz/wqt-apti4/2.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>Which of the following is TRUE, if a duplicate ACK is received by a TCP sender?</p> <p></p>`,
      image: "",
      options: [
        `The TCP sender will always retransmit a packet.<br>&nbsp;`,
        `The TCP receiver must have received the same segment more than once.<br>&nbsp;`,
        `The TCP sender will always ignore the duplicate ACK silently.<br>&nbsp;`,
        `None of the other choices.`,
      ],
      answer: "D",
      solution: `<img src="/images/quiz/wqt-apti4/3.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>Assume that a host A with IP  \\( 172.26.184.3 \\) is on a private home network, located behind a NAT home router  \\( R \\). Host  \\( A \\) sends a datagram to destination host  \\( 128.119 .40 .186 \\) , port  \\( 80 \\) , through  \\( R \\). When  \\( R \\) forwards the datagram it will replace the sender's IP and port number. Which of the following IP, port combinations would be valid to use by  \\( R \\) ? </p> <p></p>`,
      image: "",
      options: [
        `\\( 172.26.184.5 \\),  \\( 3001 \\)<br>&nbsp;`,
        `\\( 192.168.1.1 \\),  \\( 2001 \\)<br>&nbsp;`,
        `\\( 128.125.3.4 \\),  \\( 3001 \\)<br>&nbsp;`,
        `\\( 152.148.5.6 \\),  \\( 3001 \\)`,
      ],
      answer: ["C", "D"],
      solution: `<img src="/images/quiz/wqt-apti4/4.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>The Ethernet CSMA/CD protocol uses an exponential backoff algorithm. Suppose a datagram has already experienced  \\( \\mathbf{4} \\) collisions. The sender will randomly choose a backoff value  \\( \\mathbf{K} \\) in which of the following ranges and then wait for  \\( \\mathrm{K} \\times 512 \\) bit times before retransmission? </p> <p></p>`,
      image: "",
      options: [
        `\\( 0 \\) to  \\( 7 \\) (inclusive)<br>&nbsp;`,
        `\\( 0 \\) to  \\( 15 \\) (inclusive)<br>&nbsp;`,
        `\\( 1 \\) to  \\( 15 \\) (inclusive)<br>&nbsp;`,
        `\\( 0 \\) to  \\( 31 \\) (inclusive)`,
      ],
      answer: "B",
      solution: `<img src="/images/quiz/wqt-apti4/5.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>In the given network diagram, Ethernet interface addresses (  \\( \\mathrm{e} 1, \\mathrm{e} 2, \\ldots \\) ) are written on the diagram itself. Host  \\( 1 \\) uses interface  \\( \\mathbf{e} 1 \\) with IP address IP H \\( 1 \\), and Host  \\( 4 \\) uses interface  \\( \\mathbf{e 4} \\) with IP address IP H \\( 4 \\). The router has interface e \\( 5 \\) on Network 1 and interface e6 on Network \\( 2 \\). </p> <p style="text-align:center"><img alt="" src="/images/quiz/wqt-apti4/q_img2.png" style="max-width: 75%;"></p> <p><br>When Host  \\( 1 \\) sends an IP packet to Host  \\( 4 \\), what are the correct Ethernet and IP source/destination addresses in the frame that traverses Network  \\( 2 \\)? </p> <p></p>`,
      image: "",
      options: [
        `Eth Src: e6 | Eth Dest: e4 | IP Src: IP H1 | IP Dest: IP H4<br>&nbsp;`,
        `Eth Src: e1 | Eth Dest: e \\( 4 \\) | IP Src: IP H1 | IP Dest: IP H4<br>&nbsp;`,
        `Eth Src: e5 | Eth Dest: e4 | IP Src: IP H1 | IP Dest: IP H4<br>&nbsp;`,
        `Eth Src: e4 | Eth Dest: e6 | IP Src: IP H4 | IP Dest: IP H1`,
      ],
      answer: "A",
      solution: `<img src="/images/quiz/wqt-apti4/6.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>Suppose a router receives an IP packet containing 600 data bytes and has to forward the packet to a network with a maximum transmission unit of  \\( 200 \\) bytes. Assume that the IP header is  \\( 20 \\) bytes long. What are fragment offset values for divided packets? </p> <p></p>`,
      image: "",
      options: [
        `\\( 22, 44, 66, 88 \\)<br>&nbsp;`,
        `\\( 0, 22, 44 \\)<br>&nbsp;`,
        `\\( 0, 22, 44, 66 \\)<br>&nbsp;`,
        `\\( 22, 44, 66 \\)`,
      ],
      answer: "C",
      solution: `<img src="/images/quiz/wqt-apti4/7.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0,
      type: "NAT",
      text: `<p>In a Go-Back-N ARQ protocol with a sender window size of  \\( 7 \\), what is the necessary and sufficient number of distinct sequence numbers required to ensure correct protocol operation and avoid ambiguity at the wrap-around point? </p>`,
      image: "",
      options: [],
      answer: "8",
      solution: `<img src="/images/quiz/wqt-apti4/8.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>A sender is using the Go-Back-N protocol with:</p> <ul> <li>Window size  \\( =4 \\)<br>&nbsp; </li> <li>One shared retransmission timer (timeout =  \\( 25 \\))<br>&nbsp; </li> <li>Packets are acknowledged cumulatively<br>&nbsp;</li> <li>The channel may lose packets but never reorders them</li> </ul> <p>At time =  \\( 6 \\): </p> <ul> <li>Packets with sequence numbers \\(  2,3  \\), and  \\( 4 \\) are unacknowledged and waiting in the buffer.<br>&nbsp; </li> <li>The next packet to be sent will carry sequence number  \\( 5 \\).<br>&nbsp; </li> <li>The retransmission timer is set to expire at time  \\( =10 \\). </li> </ul> <p>At time  \\( =7 \\), the application generates a new packet with sequence number  \\( 5 \\).<br><br>At time =  \\( 12 \\), an acknowledgement for all packets up to sequence number 3 is received.<br><br>At time  \\( =13 \\), the sender still has packets  \\( 4 \\) and  \\( 5 \\) unacknowledged, and the next packet to be sent will carry sequence number  \\( 6 \\) . The retransmission timer is now set to expire at time  \\( =35 \\).<br><br>Which packets are actually transmitted between time  \\( =6 \\) and time  \\( =13 \\) (in the correct order)? </p> <p></p>`,
      image: "",
      options: [
        `\\( \\{2,3,4,5\\} \\)<br>&nbsp;`,
        `\\( \\{5,2,3,4,5\\} \\)<br>&nbsp;`,
        `\\( \\{2,3,5,4\\} \\)<br>&nbsp;`,
        `\\( \\{5,4,5\\} \\)`,
      ],
      answer: "B",
      solution: `<img src="/images/quiz/wqt-apti4/9.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>A network is arranged as follows: Node  \\( \\mathbf{A} \\rightarrow \\) Node  \\( \\mathbf{B} \\rightarrow \\) Node  \\( \\mathbf{C} \\). </p> <ul> <li>Total data to send from  \\( A \\) to  \\( C=\\mathbf{1 2 P} \\) bits.<br>&nbsp; </li> <li>Each packet requires a header of  \\( \\mathbf{P} \\) bits.<br>&nbsp; </li> <li>Link  \\( \\mathrm{A}-\\mathrm{B} \\) and link  \\( \\mathrm{B}-\\mathrm{C} \\) are identical, with<br>&nbsp; </li> <li>Bandwidth = R bits/sec<br>&nbsp;</li> <li>Link propagation speed = S meters/sec<br>&nbsp;</li> <li>Link length = D meters</li> </ul> <p>&nbsp;</p> <ul> <li>Queuing and processing delays are negligible.</li> </ul> <p>If all  \\( \\mathrm{12 P} \\) bits are sent in a single packet (including the header), what is the total delay for the entire data to reach  \\( \\mathrm{C} \\)? </p> <p></p>`,
      image: "",
      options: [
        `\\( 12 \\mathrm{P} / \\mathrm{R}+2 \\mathrm{D} / \\mathrm{S} \\)<br>&nbsp;`,
        `\\( 13 \\mathrm{P} / \\mathrm{R}+2 \\mathrm{D} / \\mathrm{S} \\)<br>&nbsp;`,
        `\\( 21 \\mathrm{P} / \\mathrm{R}+2 \\mathrm{D} / \\mathrm{S} \\)<br>&nbsp;`,
        `\\( 26 \\mathrm{P} / \\mathrm{R}+2 \\mathrm{D} / \\mathrm{S} \\)`,
      ],
      answer: "D",
      solution: `<img src="/images/quiz/wqt-apti4/10.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p>A source sends 12P bits of data from node A to node C via node B.</p> <ul> <li>The path has two identical links (A-B and B-C).<br>&nbsp;</li> <li>Each link has a bandwidth of  \\( \\mathbf{R} \\) bits/sec, a propagation speed of \\( \\mathbf{S} \\) meters/sec, and length  \\( \\mathbf{D} \\) meters.<br>&nbsp; </li> <li>Each packet requires a header of size  \\( \\mathbf{P} \\) bits. </li> </ul> <p>&nbsp;</p> <ul> <li>Queuing and processing delays are negligible.</li> </ul> <p>If the  \\( 12 P \\) bits are divided into  \\( \\mathbf{k} \\) equal packets, then each packet has size  \\( =(12 P / k+P) \\) bits.<br>What is the optimal value of  \\( \\mathbf{k} \\) that minimizes the total end-to-end delay for all data to arrive at C ?<br>&nbsp; </p> <p></p>`,
      image: "",
      options: [
        `\\( k=\\sqrt{12} \\)<br>&nbsp;`,
        `\\( k=6 \\)<br>&nbsp;`,
        `\\( k=12  \\)<br>&nbsp;`,
        `\\(  k=\\sqrt{13} \\)`,
      ],
      answer: "A",
      solution: `<img src="/images/quiz/wqt-apti4/11.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <div style="max-width:900px;margin:1rem auto;font-family:system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial;"> <p style="margin:0.3rem 0;">Two hosts <strong>X</strong> and <strong>Y</strong> are communicating over an ongoing TCP connection. Each TCP segment carries <strong>100 bytes</strong> of application data. The first segment sent by <strong>X</strong> has sequence number  \\( 30 \\) and ACK number  \\( 70 \\). </p> <p style="margin:0.3rem 0;">&nbsp;</p> <div style="display:flex; gap:16px; align-items:flex-start; padding:12px;">&nbsp;<div style="flex:1; min-width:300px;"><img alt="TCP exchange diagram: X and Y sending 100B segments; second segment from X is lost and later retransmitted" style="width: 100%; height: auto; max-width: 75%;" src="/images/quiz/wqt-apti4/q_img3.png"></div> <aside style="flex:1; min-width:280px; padding:12px;"> <ul style="margin:0; padding-left:20px;"> <li style="margin:0.3rem 0;">The <strong>second segment sent by X is lost</strong>.<br><br>&nbsp;</li> <li style="margin:0.3rem 0;">It is later <strong>retransmitted when the associated timer expires</strong>.<br><br><br>&nbsp;</li> <li style="margin:0.3rem 0;">No other segments are retransmitted, none are corrupted, and the receiver buffers out-of-order packets correctly.</li> </ul> </aside> </div> <div style="margin-top:14px; line-height:1.5;"> <p>Determine the <em>Sequence Number</em>  \\( S \\) and <em>Acknowledgement Number</em> \\( A \\) in the final TCP segment sent by <strong>X</strong> in the diagram, after the timeout-based retransmission succeeds. </p> </div> </div> <p></p>`,
      image: "",
      options: [
        `\\( S=170,\\; A=230 \\)<br>&nbsp;`,
        `\\( S=270,\\; A=330 \\)<br>&nbsp;`,
        `\\( S=270,\\; A=230 \\)<br>&nbsp;`,
        `\\( S=170,\\; A=330 \\)`,
      ],
      answer: "B",
      solution: `<img src="/images/quiz/wqt-apti4/12.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <div style="max-width:900px;margin:1.2rem auto;font-family:system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial; line-height:1.55;"> <p style="margin:.3rem 0;">Consider the following <strong>receiver pseudocode</strong> for a stop-and-wait protocol.<br>The channel may <em>lose</em> or <em>corrupt</em> packets but, if a packet is delivered, it arrives <em>in order</em>.</p> <pre data-pbcklang="c_cpp" data-pbcktabsize="4" class="prettyprint linenums lang-c_cpp prettyprinted" style=""><ol class="linenums"><li class="L0"><span class="pln">p </span><span class="pun">=</span><span class="pln"> receive_packet</span><span class="pun">()</span></li><li class="L1"><span class="pln">&nbsp;</span></li><li class="L2"><span class="kwd">while</span><span class="pln"> </span><span class="pun">(</span><span class="pln">p </span><span class="kwd">is</span><span class="pln"> corrupted OR p</span><span class="pun">.</span><span class="pln">seq </span><span class="pun">≠</span><span class="pln"> expected_seq</span><span class="pun">):</span></li><li class="L3"><span class="pln">    p </span><span class="pun">=</span><span class="pln"> receive_packet</span><span class="pun">()</span><span class="pln">    </span><span class="com">// keep waiting until the expected,</span></li><li class="L4"><span class="pln">                            </span><span class="com">// uncorrupted packet arrives</span></li><li class="L5"><span class="pln">&nbsp;</span></li><li class="L6"><span class="pln">send_ack</span><span class="pun">(</span><span class="pln">p</span><span class="pun">.</span><span class="pln">seq</span><span class="pun">)</span></li><li class="L7"><span class="pln">expected_seq </span><span class="pun">=</span><span class="pln"> </span><span class="lit">1</span><span class="pln"> </span><span class="pun">-</span><span class="pln"> expected_seq   </span><span class="com">// flip expected between 0 and 1</span></li><li class="L8"><span class="pln">deliver_data</span><span class="pun">(</span><span class="pln">p</span><span class="pun">)</span></li><li class="L9"><span class="pln">  </span></li></ol></pre> <ul style="margin:.3rem 0 .9rem 1.1rem;"> <li><code>expected_seq</code> is the sequence number (either  \\( 0 \\) or  \\( 1 \\)) that the receiver is waiting for. </li> <li><code>deliver_data(p)</code> extracts and returns the payload from packet <code>p</code>&nbsp;to upper layer.</li> <li>The <strong>receiver waits forever</strong> if it is blocked inside, <code>receive_packet()</code> awaiting a packet that will never be sent. </li> <li>The <strong>sender loops forever</strong> if it keeps retransmitting the same packet indefinitely.</li> </ul> <p style="margin:.3rem 0 .4rem 0;"><strong>Which of the following statements is correct?</strong></p> </div> <p></p>`,
      image: "",
      options: [
        `A single <em>corrupted data packet</em> can cause the <strong>sender</strong> to loop forever.<br>&nbsp;`,
        `A single <em>corrupted data packet</em> can cause the <strong>receiver</strong> to wait forever.<br>&nbsp;`,
        `A single <em>lost ACK</em> can cause the <strong>sender</strong> to loop forever.<br>&nbsp;`,
        `A single <em>lost ACK</em> can cause the <strong>receiver</strong> to wait forever.`,
      ],
      answer: "C",
      solution: `<img src="/images/quiz/wqt-apti4/13.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "NAT",
      text: `<p></p> <p>An IP packet of  \\( 552 \\) bytes ( \\( 20 \\)-byte IP header +  \\( 20 \\)-byte TCP header) must traverse two networks in sequence: </p> <ul> <li>Network  \\( 1 \\) with MTU =  \\( 300 \\) bytes<br>&nbsp; </li> <li>Network  \\( 2 \\) with MTU =  \\( 100 \\) bytes </li> </ul> <p><br>After all necessary fragmentations, the packet reaches the destination in multiple pieces.<br><br>How many fragments are finally delivered to the destination?</p> <p></p>`,
      image: "",
      options: [],
      answer: "8",
      solution: `<img src="/images/quiz/wqt-apti4/14.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p>A network of  \\( 4 \\) routers  \\( \\mathrm{A}, \\mathrm{B}, \\mathrm{C} \\) and  \\( \\mathrm{D} \\) is arranged as shown below. The routers use the distance vector routing, using the number of hops as the metric. The value &nbsp; \\( \\text{“8”} \\) &nbsp;is used by all routers to indicate "infinity" (to conclude that a router is unreachable). </p> <p style="text-align:center"><img alt="" src="/images/quiz/wqt-apti4/q_img4.png" style="max-width: 75%;"></p> <p>In each round, all nodes exchange their distance vectors with their respective neighbours. Then all nodes update their distance vectors. In between two rounds, any change in cost of a link will cause the two incident nodes to change only that entry in their distance vectors.</p> <p>The link  \\( \\text{C-D} \\) goes down. How many exchanges would it require for each of them to conclude that&nbsp; \\( \\text{D} \\) is unreachable? </p> <p></p>`,
      image: "",
      options: [
        `\\( 1 \\)<br>&nbsp;`,
        `\\( 2 \\)<br>&nbsp;`,
        `\\( 3 \\)<br>&nbsp;`,
        `\\( 4 \\)`,
      ],
      answer: "C",
      solution: `<img src="/images/quiz/wqt-apti4/15.png" style="max-width: 75%;">`
    },
  ]
});
