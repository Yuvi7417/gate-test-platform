registerTest({
  series: "Aptitude",
  name: "WQT - Aptitude-3",
  date: "Oct 01, 2026",
  questions: [
    {
      marks: 1,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>The figure below illustrates the variation in the congestion window size of a TCP connection over time:<br><br>(On receiving 3 duplicate ACKs, the congestion window is reduced to half.)</p> <p style="text-align:center; margin:22px 0; line-height:1.55"><img alt="TCP Congestion Window Graph" style="max-width: 75%;" src="/images/quiz/wqt-apti3/q_img1.png"> </p> <p style="line-height:1.55;">Which of the following statements is/are correct?</p> <p></p>`,
      image: "",
      options: [
        `TCP is in the slow start phase during the time periods  \\(  t_0 - t_1  \\),  \\(  t_5 - t_6  \\), and  \\(  t_8 - t_{9}  \\).`,
        `TCP is in the congestion avoidance phase during the time periods  \\(  t_0 - t_1  \\),  \\(  t_5 - t_6  \\), and  \\(  t_8 - t_{10}  \\).`,
        `TCP receives duplicate ACKs at time points  \\(  t_2  \\) and  \\(  t_3  \\).`,
        `TCP experiences timeouts at time points  \\(  t_2  \\),  \\(  t_3  \\), and  \\(  t_9  \\).`,
      ],
      answer: ["A", "C"],
      solution: `<img src="/images/quiz/wqt-apti3/1.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>For a client-server application running over TCP or UDP, which of the following is true</p> <p></p>`,
      image: "",
      options: [
        `the server program must be executed before the client program<br>&nbsp;`,
        `the client program must be executed before the server program<br>&nbsp;`,
        `the server program can be executed before or after the client program<br>&nbsp;`,
        `none of the above`,
      ],
      answer: "A",
      solution: `<img src="/images/quiz/wqt-apti3/2.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>Host  \\( A \\) sends two TCP segments to Host  \\( B \\) back-to-back. Host  \\( B \\) has already received bytes up to  \\( 110 \\). The first segment sent contains  \\( 100 \\) bytes with a sequence number  \\( 111 \\), and the second contains  \\( 10 \\) bytes. If the second segment arrives before the first, what will be the acknowledgment number sent by Host  \\( B \\) in response? </p> <p></p>`,
      image: "",
      options: [
        `\\( 111 \\)<br>&nbsp;`,
        `\\( 211 \\)<br>&nbsp;`,
        `\\( 121 \\)<br>&nbsp;`,
        `\\( 110 \\)`,
      ],
      answer: "A",
      solution: `<img src="/images/quiz/wqt-apti3/3.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>In TCP, define cwnd to be the congestion window size and rwnd to be the receive window size; the amount of unacknowledged data can not exceed</p> <p></p>`,
      image: "",
      options: [
        `rwnd<br>&nbsp;`,
        `cwnd<br>&nbsp;`,
        `min{cwnd, rwnd}<br>&nbsp;`,
        `max{cwnd, rwnd}`,
      ],
      answer: "C",
      solution: `<img src="/images/quiz/wqt-apti3/4.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>Professor Rao is explaining TCP congestion control to his students. He presents the following scenario: </p> <ul> <li>A TCP sender is operating in the slow start phase.<br>&nbsp;</li> <li>The Maximum Segment Size (MSS)  \\( =1000 \\) bytes.<br>&nbsp; </li> <li>Immediately after the  \\( 10^{th} \\) ACK, the Congestion Window (CWND) is  \\( 2000 \\) bytes.<br>&nbsp; </li> <li>With this window, the sender transmits packets  \\( 11 \\) and  \\( 12 \\).<br>&nbsp; </li> <li>Now, the ACK for packet  \\( 11 \\) arrives. </li> </ul> <p>According to TCP slow start rules, which new packets will the sender transmit at this point?</p> <p></p>`,
      image: "",
      options: [
        `Packet  \\( 13 \\) only<br>&nbsp;`,
        `Packets  \\( 13 \\) and  \\( 14 \\)<br>&nbsp;`,
        `Packets  \\( 13, 14,15 \\)<br>&nbsp;`,
        `None (the sender must wait for more ACKs)`,
      ],
      answer: "B",
      solution: `<img src="/images/quiz/wqt-apti3/5.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>If a TCP sender has  \\( 14,600 \\) bytes of data in-flight (i.e., it has sent those bytes but has not yet received acknowledgment for any of them), which of these statements is NOT NECESSARILY true? </p> <p></p>`,
      image: "",
      options: [
        `The congestion window size of the sender is at least  \\( 10 \\) MSS's (or,  \\( 14,600 \\) bytes)<br>&nbsp;`,
        `The congestion window size of the receiver is at least  \\( 10 \\) MSS's (or,  \\( 14,600 \\) bytes)<br>&nbsp;`,
        `The sender is expecting acknowledgment packets from the receiver<br>&nbsp;`,
        `The flow control window advertised by the receiver to the sender is at least  \\( 14,600 \\) bytes`,
      ],
      answer: "B",
      solution: `<img src="/images/quiz/wqt-apti3/6.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>You are watching a GO Classes Computer Networks class in one browser tab, and you also open another tab to browse a cat-related blog. Both tabs establish TCP connections, and your laptop has only one IP address.<br><br>When a TCP segment arrives, how does the operating system decide whether it belongs to the GO Classes lecture or to the cat blog, ensuring that packets don't get mixed up?</p> <p></p>`,
      image: "",
      options: [
        `By checking only the IP address, since both tabs are on the same machine.<br>&nbsp;`,
        `By using the port numbers in the TCP header, which let the OS map each segment to the correct socket/application.<br>&nbsp;`,
        `By analyzing the application-layer data inside the payload.<br>&nbsp;`,
        `By ordering packets based on their arrival timing.`,
      ],
      answer: "B",
      solution: `<img src="/images/quiz/wqt-apti3/7.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>Bob's TCP stack has received data up to byte  \\( 560 \\) from Alice, but Bob's browser has only read \\( 60 \\) bytes. Bob's buffer size is  \\( 1024 \\) bytes. What will be the advertised window size in the next TCP header that Bob sends? </p> <p></p>`,
      image: "",
      options: [
        `\\( 464 \\)<br>&nbsp;`,
        `\\( 524 \\)<br>&nbsp;`,
        `\\( 1024 \\)<br>&nbsp;`,
        `\\( 500 \\)`,
      ],
      answer: "B",
      solution: `<img src="/images/quiz/wqt-apti3/8.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p></p> <p>Suppose that the advertised receiver window in TCP is  \\( \\mathbf{1} \\) Mbyte long. If a sequence number is chosen uniformly at random from the entire TCP sequence number space ( size  \\( =2^{32} \\) ), what is the probability that the sequence number falls inside the advertised window? </p> <p></p>`,
      image: "",
      options: [
        `\\( \\frac{1}{2^{32}} \\)<br>&nbsp;`,
        `\\( \\frac{1}{2^{12}} \\)<br>&nbsp;`,
        `\\( \\frac{1}{2^{20}} \\)<br>&nbsp;`,
        `\\( \\frac{1}{2^{16}} \\)`,
      ],
      answer: "B",
      solution: `<img src="/images/quiz/wqt-apti3/9.png" style="max-width: 75%;">`
    },
    {
      marks: 1,
      neg: 0,
      type: "MSQ",
      text: `<p></p> <p>At some point, a TCP connection has the following state:</p> <ul> <li>CWND = 4 MSS, SSTHRESH =  \\( 8 \\) MSS<br>&nbsp; </li> <li>All packets up to and including  \\( \\#411 \\) have been sent and acknowledged.<br>&nbsp; </li> <li>Packets  \\( \\#412 \\) through  \\( \\#415 \\) have been sent but not yet acknowledged.<br>&nbsp; </li> <li>Packets  \\( \\#416 \\) and later have not been sent. </li> </ul> <p>Now, assume TCP is in Congestion Avoidance mode.<br><br>If an ACK for packet  \\( \\#412  \\)is received, which packet(s) will be sent as a result? (Select all that apply.) </p> <p></p>`,
      image: "",
      options: [
        `\\( \\#416 \\)<br>&nbsp;`,
        `\\( \\#417 \\)<br>&nbsp;`,
        `\\( \\#418 \\)<br>&nbsp;`,
        `\\( \\#419 \\)`,
      ],
      answer: ["A"],
      solution: `<img src="/images/quiz/wqt-apti3/10.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p>A TCP sender has MSS =  \\( 100 \\) B and a constant window size =  \\( 400 \\) B. </p> <ul> <li> \\( p_{x} \\): a packet whose first byte has the sequence number  \\( x \\).<br>&nbsp; </li> <li> \\( t_{x} \\): time at which packet  \\( p_{x} \\) is transmitted. </li> </ul> <p>At time  \\( t_{1600} \\), packet  \\( p_{1600} \\) (i.e., the packet containing bytes starting from 1600 ) has just been transmitted. What is the highest ACK received by the sender by this time? </p> <p></p>`,
      image: "",
      options: [
        `\\( 1000 \\)<br>&nbsp;`,
        `\\( 1200 \\)<br>&nbsp;`,
        `\\( 1300 \\)<br>&nbsp;`,
        `\\( 1600 \\)`,
      ],
      answer: "C",
      solution: `<img src="/images/quiz/wqt-apti3/11.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "NAT",
      text: `<p></p> <p>Alice is sending data to Bob over a TCP (Transmission Control Protocol) connection in the congestion avoidance (Additive Increase, Multiplicative Decrease) phase.</p> <ul> <li>Maximum Segment Size (MSS) =  \\( 100 \\) bytes<br>&nbsp; </li> <li>Current Congestion Window (CWND)  \\( =1000 \\) bytes<br>&nbsp; </li> <li>Alice sends a packet with sequence number  \\( 801 \\), and Bob replies with Acknowledgment \\( (A C K)=901 \\). </li> </ul> <p>What will be the updated Congestion Window (CWND) after this acknowledgement?</p> <p></p>`,
      image: "",
      options: [],
      answer: "1010",
      solution: `<img src="/images/quiz/wqt-apti3/12.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0,
      type: "NAT",
      text: `<p></p> <p>Consider a TCP (Transmission Control Protocol) connection with the following parameters:</p> <ul> <li>Maximum Segment Size (MSS) =  \\( 1000 \\) bytes<br>&nbsp; </li> <li>Initial Congestion Window (CWND) =  \\( 1000 \\) bytes<br>&nbsp; </li> <li>Slow-Start Threshold (SSTHRESH) =  \\( 4000 \\) bytes<br>&nbsp; </li> <li>All data up to byte  \\( 6000 \\) has been acknowledged (so the next expected byte is  \\( 6001 \\) ). </li> </ul> <p>Now the sender continues transmitting. After receiving the ACK for the 7th MSS, TCP updates its window.<br>What will be the new CWND ?</p> <p></p>`,
      image: "",
      options: [],
      answer: "4250",
      solution: `<img src="/images/quiz/wqt-apti3/13.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p>Consider a TCP connection implementing congestion control. At some instant, a timeout occurs when the congestion window (cwnd) is  \\( 32 \\) KB . The maximum segment size (MSS) is  \\( 2 \\) KB . The sender always has data to transmit, and ACKs are never lost.<br>After the timeout: </p> <ul> <li>The congestion threshold (ssthresh) is set to half of the current congestion window.<br>&nbsp;</li> <li>The congestion window is reset to  \\( 1 \\) MSS.<br>&nbsp; </li> <li>The sender resumes with a slow start until cwnd reaches ssthresh and then continues in congestion avoidance.</li> </ul> <p>Under these conditions, how many round-trip times (RTTs) are required for the congestion window to grow back to  \\( 32 \\) KB ? </p> <p></p>`,
      image: "",
      options: [
        `\\( 8 \\) RTTs<br>&nbsp;`,
        `\\( 11 \\) RTTs<br>&nbsp;`,
        `\\( 14 \\) RTTs<br>&nbsp;`,
        `\\( 16 \\) RTTs`,
      ],
      answer: "B",
      solution: `<img src="/images/quiz/wqt-apti3/14.png" style="max-width: 75%;">`
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p></p> <p>A TCP sender is transmitting a  \\( 402 \\) KB file using congestion control. The parameters are: </p> <ul> <li>ssthresh  \\( =64 \\mathrm{~KB} \\)<br>&nbsp; </li> <li>cwnd  \\( =2 \\mathrm{~KB} \\) initially (slow start)<br>&nbsp; </li> <li> \\( \\mathrm{MSS}=2 \\mathrm{~KB} \\)<br>&nbsp; </li> <li>Receiver's window size  \\( =70 \\mathrm{~KB} \\)<br>&nbsp; </li> <li>Sender always has data, and ACKs are never lost</li> </ul> <p>By the time the  \\( 9 \\)th RTT is completed, how much data has the receiver acknowledged? </p> <p></p>`,
      image: "",
      options: [
        `\\( 192 \\) KB<br>&nbsp;`,
        `\\( 260 \\) KB<br>&nbsp;`,
        `\\( 330 \\) KB<br>&nbsp;`,
        `\\( 400 \\) KB`,
      ],
      answer: "C",
      solution: `<img src="/images/quiz/wqt-apti3/15.png" style="max-width: 75%;">`
    },
  ]
});
