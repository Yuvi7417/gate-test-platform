registerTest({
  series: "Aptitude",
  name: "WQT - Aptitude-1",
  date: "Oct 01, 2026",
  questions: [
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>In a Go-Back-N (GBN) protocol, the sender uses a window size of  \\( 4 \\) and sequence numbers range from  \\( 0 \\) to  \\( 1023 \\) (modulo  \\( 1024 \\)). Suppose the sender had transmitted packets with sequence numbers  \\( 500,501,502 \\), and  \\( 503 \\) , and  \\( 500 \\) was the base of the sender's window. After a while, the sender receives an ACK for packet  \\( 500 \\).<br><br>Assume: </p> <ul> <li>The ACK is cumulative.</li> <li>No other ACKs have been received.</li> <li>No timeouts have occurred yet.</li> </ul> <p><br>Which of the following statements is/are correct?<br>&nbsp;</p> <p></p>`,
      image: "",
      options: [
        `The sender can now send packet  \\( 504 \\) immediately.`,
        `The sender must retransmit packet  \\( 500 \\), since no ACK for  \\( 501 \\) has been received.`,
        `The new sender window is [ \\( 501, 504 \\)], and packets  \\( 501-503 \\) can be retransmitted if timeout occurs.`,
        `The base of the sender window remains unchanged until ACKs for all packets  \\( 500-503 \\) are received.`,
      ],
      answer: "A",
      solution: `<img src="/images/quiz/wqt-apti1/1.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>A sender using the Go-Back-N protocol has a current window of size  \\( 4 \\) , which includes the sequence numbers  \\( 100,101,102 \\), and  \\( 103 \\) . The sender has sent packets  \\( 100 \\) and  \\( 101 \\) so far.<br><br>Which of the following statements <strong>must be true</strong>?<br>&nbsp; </p> <p></p>`,
      image: "",
      options: [
        `Packet  \\( 100 \\) has been sent and acknowledged.`,
        `Packet  \\( 103 \\) is outside the window and cannot be sent yet.`,
        `If packet  \\( 102 \\) is sent, then packet  \\( 101 \\) must have already been sent.`,
        `If packet  \\( 102 \\) has not been sent, then packet  \\( 101 \\) must not have been sent either.`,
      ],
      answer: "C",
      solution: `<img src="/images/quiz/wqt-apti1/2.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>Two hosts  \\( A \\) and  \\( B \\) are 2000 km apart and are connected using a direct link. The propagation speed on the link is  \\( 2.5 \\times 10^{8} \\mathrm{~m} / \\mathrm{s} \\). Host  \\( A \\) is sending packets of size  \\( \\mathbf{1 0 0} \\) bytes to host  \\( B \\) over this link. If the transmission rate of the link is  \\( R \\) bits per second, how much time does it take to transmit one packet? </p> <p>&nbsp;</p> <p></p>`,
      image: "",
      options: [
        `\\( \\frac{100}{R} \\) seconds<br>&nbsp;`,
        `\\( \\frac{100 \\times 8}{R} \\) seconds<br>&nbsp;`,
        `\\( \\frac{2000 \\times 10^{3}}{2.5 \\times 10^{8}} \\) seconds<br>&nbsp;`,
        `\\( \\frac{R}{100 \\times 8} \\) seconds`,
      ],
      answer: "B",
      solution: `<img src="/images/quiz/wqt-apti1/3.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>In a sliding window protocol, the sender and receiver both use a window size of  \\( N=5 \\). The sequence number space ranges from \\( 0 \\) to  \\( 15 \\) . At a certain time, the sender's window includes the sequence numbers  \\( 0 \\) to  \\( 4 \\) , and the receiver's window includes the sequence numbers  \\( 2 \\) to  \\( 6 \\) . Which of the following best describes the current state?<br>&nbsp; </p> <p></p>`,
      image: "",
      options: [
        `The sender has received ACKs for packets  \\( 0 \\) and  \\( 1 \\) , and has sent packets  \\( 2 \\) to  \\( 4 \\).<br>&nbsp;`,
        `The receiver is expecting packet  \\( 0 \\) , as it has not received any packets yet.<br>&nbsp;`,
        `The sender has sent packets  \\( 0 \\) to  \\( 4 \\) , and packets  \\( 0 \\) and  \\( 1 \\) have been acknowledged.<br>&nbsp;`,
        `The receiver has received packets  \\( 0 \\) to  \\( 2 \\) , and is waiting for  \\( 3 \\) to  \\( 7 \\) .`,
      ],
      answer: "C",
      solution: `<img src="/images/quiz/wqt-apti1/4.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>Suppose it takes  \\( 1 \\) ms to send a packet, and the one-way propagation delay between the sender and receiver is  \\( \\mathbf{1 0} \\mathbf{~ m s} \\). The sliding window size is again  \\( N=4 \\). What is the channel (or link) utilization? </p> <p></p>`,
      image: "",
      options: [
        `\\( 19.05 \\% \\)<br>&nbsp;`,
        `\\( 25 \\% \\)<br>&nbsp;`,
        `\\( 33.3 \\% \\)<br>&nbsp;`,
        `\\( 40 \\% \\)`,
      ],
      answer: "A",
      solution: `<img src="/images/quiz/wqt-apti1/5.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>A sender is using a sliding window protocol with a window size of  \\( 4 \\) . It has sent packets  \\( 0 \\) to  \\( 3 \\) , and ACKs for packets  \\( 0,1,2 \\), and  \\( 3 \\) are currently propagating from the receiver to the sender. No ACK has yet been received by the sender. Assume cumulative ACKs are used and that the sender takes action only when an ACK is received or a timeout occurs.<br>Which of the following statements about the next possible event at the sender is/are correct?<br>&nbsp; </p> <p></p>`,
      image: "",
      options: [
        `If the next event is ACK1 (ACK0 was lost), the sender will slide the window and send packet  \\( 4 \\).`,
        `If the next event is ACK2 (ACK0 and ACK1 were lost), the sender will note that packet  \\( 2 \\) is ACKed but will not move the window or send any packet.`,
        `If the next event is ACK0, the sender will slide the window and send packet  \\( 4 \\).`,
        `If all ACKs (ACK0, ACK1, ACK2, and ACK3) are lost, the sender will receive a duplicate ACK for packet  \\( 3 \\) and move the window accordingly.`,
      ],
      answer: "C",
      solution: `<img src="/images/quiz/wqt-apti1/6.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>Assume a sender using Go-Back-N ARQ transmits segments  \\( 10 \\) to  \\( 19 \\) after all previous segments have been acknowledged. The receiver receives segments:  \\( 10,11,12,13,16,17,18 \\),  \\( 19 \\). Which ACK will be sent by the receiver?<br>&nbsp; </p> <p></p>`,
      image: "",
      options: [
        `Cumulative ACK till segment  \\( 13 \\)`,
        `Cumulative ACK till&nbsp;segment  \\( 14 \\)`,
        `ACKs for  \\( 13 \\) and  \\( 16 \\) separately`,
        `Cumulative ACK till  \\( 10 \\)`,
      ],
      answer: "A",
      solution: `<img src="/images/quiz/wqt-apti1/7.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>In a Go-Back-N ARQ protocol with a maximum sender window size of  \\( 10 \\) segments, what is the minimum number of bits required to represent the sequence number field? </p> <p></p>`,
      image: "",
      options: [
        `3`,
        `4`,
        `5`,
        `10`,
      ],
      answer: "B",
      solution: `<img src="/images/quiz/wqt-apti1/8.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p>In a Go-Back-N (GBN) protocol, the sender uses a window size of  \\( 4 \\), and sequence numbers range from  \\( 0 \\) to  \\( 1023 \\) (modulo  \\( 1024 \\)). At a certain moment, the receiver is waiting for packet number  \\( 200 \\) to arrive in order.<br><br>Due to network propagation delay, some ACKs sent earlier by the receiver may still be in transit to the sender. Which of the following ranges correctly describes the possible ACK numbers that the sender may still receive at this point?<br>&nbsp; </p> <p></p>`,
      image: "",
      options: [
        `\\( 200 \\) to  \\( 203 \\)`,
        `\\( 197 \\) to  \\( 199 \\)`,
        `\\( 196 \\) to  \\( 199 \\)`,
        `\\( 196 \\) to  \\( 200 \\)`,
      ],
      answer: "C",
      solution: `<img src="/images/quiz/wqt-apti1/9.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p>Node A wants to send a large amount of data to Node C via an intermediate Node B using the<strong> Selective Repeat protocol</strong> .</p> <ul> <li>Each <strong>bit</strong> transmitted on link  \\( A-B \\) has a probability  \\( p \\) of getting corrupted </li> <li>Each <strong>bit</strong> transmitted on link B-C has a probability  \\( q \\) of getting corrupted </li> <li>Bit errors occur <strong>independently</strong> across links and across bits</li> </ul> <p><br>Each data packet is  \\( d \\) bits long, and each ACK is  \\( a \\) bits long. The ACK is sent end-to-end from C to A (via B  \\( \\rightarrow A \\) )<br><br><strong>What is the expected number of transmissions required by A to successfully send one packet and get it acknowledged?</strong><br>&nbsp; </p> <p></p>`,
      image: "",
      options: [
        `\\( 1 / X \\), where  \\( X=(1-p)^{d}(1-q)^{d}(1-q)^{a}(1-p)^{a} \\)`,
        `\\( 1 / X \\), where  \\( X=(1-p)^{d}(1-q)^{a} \\)`,
        `\\( 1 / X \\), where  \\( X=(1-p)^{d}(1-q)^{d}(1-p)^{a} \\)`,
        `\\( 1 / X \\), where  \\( X=(1-p)^{d}(1-q)^{d}(1-q)^{a} \\)`,
      ],
      answer: "A",
      solution: `<img src="/images/quiz/wqt-apti1/10.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p>A packet of size  \\( N \\) bits is sent from Host  \\( A \\) to Host  \\( B \\) via switch  \\( C \\) using Hop-by-Hop Stop-and-Wait ARQ. Each link  \\( (\\mathrm{A} \\rightarrow \\mathrm{C} \\) and  \\( \\mathrm{C} \\rightarrow \\mathrm{B}) \\) has the same packet success probability  \\( P_{\\text {packet }} \\). The transmission rate on both links is  \\( R \\) bits per second. Ignoring ACK transmission delays, queueing, and processing delays, what is the expected total transmission delay (in seconds) for a packet to be successfully delivered from  \\( A \\) to  \\( B \\) ? </p> <p>&nbsp;</p> <p>&nbsp;</p> <p></p>`,
      image: "",
      options: [
        `\\( \\frac{N}{R} \\)<br>&nbsp;`,
        `\\( \\frac{2 N}{R} \\)<br>&nbsp;`,
        `\\( \\frac{2 N}{R \\cdot P_{\\text{packet}}} \\) <br>&nbsp;`,
        `\\( \\frac{2 N}{R} \\cdot \\frac{1}{P_{\\mathrm{packet}}^{2}} \\)`,
      ],
      answer: "C",
      solution: `<img src="/images/quiz/wqt-apti1/11.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p>A Go-Back-N protocol uses a window size of  \\( 5 \\) and cumulative acknowledgments. The parameters are as follows: </p> <ul> <li>Timeout  \\( =100 \\mathrm{~ms} \\), measured from the time the first bit of the packet is sent </li> <li>Packet transmission time  \\( =1 \\mathrm{~ms} \\) </li> <li>One-way link latency  \\( =10 \\mathrm{~ms} \\) </li> </ul> <p><br>The sender begins transmitting packets  \\( 0 \\) to  \\( 4 \\) at  \\( t=0 \\). All packets are received correctly except packet number  \\( 3 \\), which is lost.<br><br>When is packet  \\( 3 \\) first retransmitted (i.e., sent again after timeout expiry)?<br>&nbsp; </p> <p></p>`,
      image: "",
      options: [
        `\\( t=24 \\mathrm{~ms} \\)`,
        `\\( t=102 \\mathrm{~ms} \\)`,
        `\\( t=103 \\mathrm{~ms} \\)`,
        `\\( t=100 \\mathrm{~ms} \\)`,
      ],
      answer: "C",
      solution: `<img src="/images/quiz/wqt-apti1/12.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <div style="font-family: 'Segoe UI', sans-serif; max-width: 900px; margin: auto; line-height: 1.6;"> <p>A sender and receiver implement a sliding window protocol using selective retransmission with the following parameters:</p> <div style="display: flex; gap: 30px; align-items: flex-start; margin-bottom: 20px;"> <div style="flex: 1;"> <ul style="line-height: 2;"> <li>Frame sequence number space: 0 to 4</li> <li>Send window and receive window size: 2</li> <li>One-way propagation delay: slightly less than 1 ms</li> <li>Sender transmits one packet per ms</li> <li>Timeout interval at sender: 4 ms</li> <li>Receiver sends cumulative ACKs</li> <li>ACK 1 is lost (as shown in the figure)</li> </ul> </div> <div style="flex: 1; text-align: center;"><img alt="Sliding Window Protocol Diagram" style="max-width: 75%; border: 1px solid #ccc; padding: 4px;" src="/images/quiz/wqt-apti1/q_img1.png"> <div style="font-size: 0.9em; color: #555;">Figure: Sliding Window Timeline</div> </div> </div> <p>Using the above setup and the timeline of packet exchanges shown, which of the following statements are correct?</p> <p style="background: #f9f9f9; border-left: 4px solid #007acc; padding: 10px; margin-bottom: 20px;"> Note: In this question, <code>ACK n</code> refers to the cumulative acknowledgment for Frame n, i.e., all frames up to and including Frame n have been received successfully.</p> </div> <p></p>`,
      image: "",
      options: [
        `The sender receives ACK 4 at t = 7 ms, confirming delivery of Frame 4.`,
        `Frame 0 is retransmitted at t = 6 ms, even though it was previously acknowledged.`,
        `ACK 1 is not retransmitted by the receiver after being lost.`,
        `Frame 2 is not retransmitted by the sender.`,
      ],
      answer: ["A", "C", "D"],
      solution: `<img src="/images/quiz/wqt-apti1/13.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "NAT",
      text: `<p>Consider a sliding window flow control protocol between hosts  \\( A \\) and  \\( B \\). Suppose the link propagation delay is  \\( 1 \\) time unit, the retransmission timeout is \\( 3 \\) time units, and the window size is  \\( 3 \\). Assume the link drops every third data packet, i.e., the link drops the  \\( 1 \\) st,  \\( 4 t h, 7 t h, \\ldots \\). data packets. (Note that here "kth packet" means the kth packet transmitted on the link, and not the sequence number of the packet.) How long (in ms ) does it take to transmit 6 packets between  \\( A \\) and  \\( B \\) ? (Note: Ignore the transmission times and the queueing delay, and assume that no acknowledgements are lost.) Assume sender has an unlimited number of packets to send. </p>`,
      image: "",
      options: [],
      answer: "16",
      solution: `<img src="/images/quiz/wqt-apti1/14.png" style="max-width: 75%;">`
    },
  ]
});
