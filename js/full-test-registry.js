// =========================================================================
// FULL TEST REGISTRY
// Add your full length tests below this line!
// Full Tests will automatically have a duration of 180 minutes.
// =========================================================================

registerTest({
  // Example Full Test
  series: "cs-gate-pyq",
  name: "Full Test - 1",
  date: "August 25, 2026",
  questions: [
    // Add your questions here...
    /*
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: "Sample Question?",
      image: "",
      options: ["A", "B", "C", "D"],
      answer: "A",
      solution: "Detailed solution here..."
    }
    */
  ]
});

registerTest({
  series: "cs-gate-classes",
  name: "FST - Mock test-1",
  date: "November 27, 2026",
  questions: [
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p> <meta/> </p> <p style="line-height:1.75;">Banh Chung is a traditional rice cake dish eaten in Vietnam to celebrate the Lunar New Year. These rice cakes are cut using strings placed on the cake one at a time and in different directions.</p> <p style="line-height:1.75;">In what order were the four strings placed on the rice cake shown below? </p> <p style="line-height:1.75; text-align:center"><img alt="Banh Chung string cutting diagram" src="js/questions/fst-mock-test-1/1.png" width="400"/></p>`,
      image: "",
      options: [
        `\\( S, P, Q, R \\)<br/>`,
        `\\( Q, S, P, R \\)<br/>`,
        `\\( R, P, S, Q \\)<br/>`,
        `\\( S, P, R, Q \\)`,
      ],
      answer: "D",
      solution: ``
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p>The sum of \\( x\\% \\) of \\( y \\), and \\( y\\% \\) of \\( x \\) is </p>`,
      image: "",
      options: [
        `\\( 2\\% \\) of \\( xy \\)<br/>`,
        `\\( (x+y)\\% \\) of \\( x y \\)<br/>`,
        `\\( (x+y)\\% \\) of 2<br/>`,
        `\\( x y\\% \\) of \\( (x+y) \\)`,
      ],
      answer: "A",
      solution: ``
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p>For what values of ' \\( k \\) ' will the pair of equations \\( 3 x+4 y=12 \\) and \\( k x+12 y=30 \\) NOT have a unique solution? </p>`,
      image: "",
      options: [
        `\\( 3 \\)<br/>`,
        `\\( 7.5 \\)<br/>`,
        `\\( 9 \\)<br/>`,
        `\\( 12 \\)`,
      ],
      answer: "C",
      solution: ``
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p>Bhavya sold her house at a loss of \\( 25 \\) percent of the price she originally paid for the house and then bought another house at a price of \\( 30 \\) percent less than the price she originally paid for her first house. If she sold the first house for \\( 22,50,000 \\), what was her net gain, in rupees, for the two transactions? </p>`,
      image: "",
      options: [
        `\\( 1,12,500 \\)<br/>`,
        `\\( 1,50,000 \\)<br/>`,
        `\\( 2,50,000 \\)<br/>`,
        `\\( 6,00,000 \\)`,
      ],
      answer: "B",
      solution: ``
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p>The sight of a single actor portraying several characters in the same scene is no longer a shock to the average moviegoer, such special-effects trickery having become so \\( \\_\\_\\_\\_\\_\\_ \\). </p>`,
      image: "",
      options: [
        `expensive <br/>`,
        `specialized <br/>`,
        `sinister <br/>`,
        `commonplace <br/>`,
      ],
      answer: "D",
      solution: ``
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p>Savanah tossed a fair coin some number of times, and \\( 50\\% \\) of those tosses resulted in tails. She then tossed the coin one final time, and the result was tails. If \\( 60\\% \\) of all tosses resulted in tails, how many tosses did she make in total? </p>`,
      image: "",
      options: [
        `\\( 3 \\)<br/>`,
        `\\( 4 \\)<br/>`,
        `\\( 8 \\)<br/>`,
        `\\( 5 \\)`,
      ],
      answer: "D",
      solution: ``
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p>If the shaded object below is first reflected about the x-axis and then rotated around the origin \\( (\\mathrm{O}) \\), it will now be seen as: </p> <p style="text-align:center; margin:15px 0"><img alt="Given shaded object" height="318" src="js/questions/fst-mock-test-1/6.png" style="border:1px solid #ccc;" width="325"/></p>`,
      image: "",
      options: [
        `<img alt="Option A" src="js/questions/fst-mock-test-1/2.png" style="border:1px solid #ccc;" width="170"/>`,
        `<img alt="Option B" src="js/questions/fst-mock-test-1/3.png" style="border:1px solid #ccc;" width="170"/>`,
        `<img alt="Option C" src="js/questions/fst-mock-test-1/4.png" style="border:1px solid #ccc;" width="170"/>`,
        `<img alt="Option D" src="js/questions/fst-mock-test-1/5.png" style="border:1px solid #ccc;" width="170"/>`,
      ],
      answer: "A",
      solution: ``
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p>If \\( \\log _{8} a+\\log _{4} b^{2}=5 \\) and \\( \\log _{8} b+\\log _{4} a^{2}=7 \\) then \\( a+b \\) is </p>`,
      image: "",
      options: [
        `\\( 64 \\)<br/>`,
        `\\( 68 \\)<br/>`,
        `\\( 72 \\)<br/>`,
        `\\( 80 \\)`,
      ],
      answer: "C",
      solution: ``
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p>A box contains \\( 731 \\) black balls and \\( 2000 \\) white balls. The following process is to be repeated as long as possible. Arbitrarily select two balls from the box. If they are of the same colour, throw them out and put a black ball into the box (enough extra black balls are available to do this). If they are of different colours, place the white ball back into the box and throw the black ball away.<br/>Which of the following is correct? </p>`,
      image: "",
      options: [
        `The process can be applied indefinitely without any a priori bound<br/>`,
        `The process will stop with a single white ball in the box<br/>`,
        `The process will stop with a single black ball in the box<br/>`,
        `The process will stop with the box empty`,
      ],
      answer: "C",
      solution: ``
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p>The first few positive whole numbers that are not powers of \\( 3 \\) are \\( 2,4,5 \\), \\( 6,7,8,10 \\). What is the sum of all the positive whole numbers that are less than \\( 3^{10} \\) and are also not powers of \\( 3 \\)? </p>`,
      image: "",
      options: [
        `\\( \\frac{\\left(3^{10}-1\\right)^2}{2} \\) <br/>`,
        `\\( \\frac{\\left(3^{11}-1\\right)^2}{2} \\) <br/>`,
        `\\( \\frac{3\\left(3^{10}-1\\right)^2}{2} \\) <br/>`,
        `\\( \\left(3^{10}-1\\right)^2 \\)<br/>`,
      ],
      answer: "A",
      solution: ``
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p>According to De Morgan's theorem, the complement of \\( \\mathrm{X}+\\mathrm{Y} \\cdot \\mathrm{Z} \\) is:<br/> </p>`,
      image: "",
      options: [
        `\\( \\bar{X}+\\bar{Y} \\cdot \\bar{Z} \\)<br/>`,
        `\\( \\bar{X} \\cdot \\bar{Y}+\\bar{Z} \\)<br/>`,
        `\\( \\bar{X} \\cdot(\\bar{Y}+\\bar{Z}) \\) <br/>`,
        `\\( \\bar{X} \\cdot \\bar{Y} \\cdot \\bar{Z} \\)`,
      ],
      answer: "C",
      solution: ``
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<div style="line-height:1.75;"> <p>Consider the following pseudocode:</p> <p> \$\$ \\begin{aligned} &amp;\\text{SillySort}(A):\\\\[6pt] &amp;\\quad n \\leftarrow \\text{length}(A)\\\\[6pt] &amp;\\quad \\text{if }(n = 0 \\text{ or } n = 1):\\\\[4pt] &amp;\\quad\\quad \\text{return } A\\\\[8pt] &amp;\\quad \\text{left} \\leftarrow \\text{SillySort}\\big(A[1 \\ldots \\lfloor n/2 \\rfloor]\\big)\\\\[6pt] &amp;\\quad \\text{right} \\leftarrow \\text{SillySort}\\big(A[\\lfloor n/2 \\rfloor + 1 \\ldots n]\\big)\\\\[8pt] &amp;\\quad \\text{B} \\leftarrow \\text{concatenate}\\big(\\text{left},\\; \\text{right}\\big)\\\\[6pt] &amp;\\quad \\text{return } \\text{MergeSort}(\\text{B}) \\end{aligned} \$\$ </p> <p>Here, <em>MergeSort</em> is a function that sorts its input list using the merge sort algorithm. </p> <p>Let \\( T(n) \\) denote the worst-case running time of SillySort on an input of size \\( n \\). Assume that concatenation of two lists of total size \\( n \\) takes \\( \\Theta(n) \\) time. </p> <p>Which of the following recurrence relations correctly represents \\( T(n) \\)? </p> <ol style="list-style-type:upper-alpha"> <li> \\( T(n) = 2T(n/2) + \\Theta(n) \\) <br/> </li> <li> \\( T(n) = 2T(n/2) + \\Theta(n \\log n) \\) <br/> </li> <li> \\( T(n) = T(n/2) + \\Theta(n \\log n) \\) <br/> </li> <li> \\( T(n) = 2T(n/2) + \\Theta(\\log n) \\) </li> </ol> </div>`,
      image: "",
      options: [
      ],
      answer: "B",
      solution: ``
    },
    {
      marks: 1,
      neg: 0,
      type: "MSQ",
      text: `<div style="font-family:Segoe UI, sans-serif; font-size:1.05em; line-height:1.7; max-width:950px;"> <p>Consider the following edge-weighted directed graph <b>G</b>:</p> <p><img alt="Edge weighted directed graph" height="252" src="js/questions/fst-mock-test-1/7.png" width="407"/></p> <p>The Bellman–Ford algorithm is run on this graph with source vertex \\( s = 0 \\). </p> <p>The value <code>distTo[v]</code> denotes the <i> current shortest distance known from the source vertex \\( s \\) to vertex \\( v \\), based on the edges relaxed so far </i>.</p> <p>Within a single pass of the algorithm, the edges are relaxed strictly in the following order:</p> <p> \\( 0 \\to 1,\\; 0 \\to 3,\\; 0 \\to 4,\\; 1 \\to 2,\\; 4 \\to 1,\\; 4 \\to 2,\\; 4 \\to 3,\\; 4 \\to 5,\\; 5 \\to 2 \\) </p> <p>Initially, \\( \\text{distTo}[0] = 0 \\) and for all other vertices \\( \\text{distTo}[v] = \\infty \\). </p> <p>Immediately after the first pass of the Bellman–Ford algorithm, which of the following statements are correct?</p> <ol type="A"> <li> \\( \\text{distTo}[1] = 80 \\)<br/> </li> <li> \\( \\text{distTo}[2] = 110 \\)<br/> </li> <li> \\( \\text{distTo}[3] = 70 \\)<br/> </li> <li> \\( \\text{distTo}[4] = 30 \\) </li> </ol> </div>`,
      image: "",
      options: [
      ],
      answer: ["A", "C", "D"],
      solution: ``
    },
    {
      marks: 1,
      neg: 0,
      type: "NAT",
      text: `<p>On a computer with a \\( 32 \\)-bit memory address, the length of the memory location of \\( 1 \\) byte, is installed set-associative cache. The cache size is \\( 16 \\) KB, the block (line) size is \\( 16 \\) bytes, and the set associative cache is \\( 4 \\)-way. Into which set (in decimal) is mapped the content of the memory address \\( 10 \\mathrm{FFCFF}_{(\\mathrm{HEX})} \\) ? </p>`,
      image: "",
      options: [
      ],
      answer: "207",
      solution: ``
    },
    {
      marks: 1,
      neg: 0,
      type: "NAT",
      text: `<p>A sender uses Go-Back-N ARQ with a window size of \\( 3 \\). A total of \\( 10 \\) data frames must be transmitted. The channel is such that every \\( 5 \\)th transmission attempt made by the sender is lost (the lost transmission is a data frame; ACKs are never lost). How many total data transmissions (original transmissions plus all required retransmissions) are needed for the sender to successfully deliver all \\( 10 \\) frames? </p>`,
      image: "",
      options: [
      ],
      answer: "18",
      solution: ``
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<div style="font-size: 16px; line-height: 1.7;"> <p>Sender <span style="font-family: 'Georgia', serif; font-size: 19px; font-weight: bold;">A</span> transmits packets to receiver B using the Go-Back- \\( N \\) ARQ protocol with a window size of \\( N = 3 \\). Packets are indexed (numbered) starting from \\( 0 \\). During transmission, packet number \\( 1 \\) ( \\( \\text{pkt1} \\)) and packet number 4 ( \\( \\text{pkt4} \\) ) are lost. After the second timeout occurs due to the loss of packet \\( 4 \\), <span style="font-family: 'Georgia', serif; font-size: 19px; font-weight: bold;">A</span> must retransmit the required set of packets. </p> <p>Which set of packets does <span style="font-family: 'Georgia', serif; font-size: 19px; font-weight: bold;">A</span> retransmit after the second timeout?</p> <ol start="1" style="list-style-type: upper-alpha;"> <li> \\( \\{\\text{pkt4}\\} \\)<br/> </li> <li> \\( \\{\\text{pkt4},\\, \\text{pkt5}\\} \\) <br/> </li> <li> \\( \\{\\text{pkt4},\\, \\text{pkt5},\\, \\text{pkt6}\\} \\) <br/> </li> <li> \\( \\{\\text{pkt5},\\, \\text{pkt6}\\} \\) </li> </ol> </div>`,
      image: "",
      options: [
      ],
      answer: "C",
      solution: ``
    },
    {
      marks: 1,
      neg: 0,
      type: "MSQ",
      text: `<p style="font-size:18px; line-height:1.7;">A system has a total of \\( 10 \\) instances of a resource. The current allocation and maximum demand of each process is: </p> <p style="font-size:17px; line-height:1.7; margin-top:8px;"> \$\$ \\begin{array}{c|c|c} \\text{Process} &amp; \\text{Allocated} &amp; \\text{Maximum} \\\\ \\hline P_1 &amp; 1 &amp; 6 \\\\ P_2 &amp; 1 &amp; 5 \\\\ P_3 &amp; 2 &amp; 4 \\\\ P_4 &amp; 4 &amp; 7 \\end{array} \$\$ </p> <p style="font-size:17px; line-height:1.7; margin-top:14px;">If one additional request of the resource is made by a process, which of the following statements about the system’s safety is/are correct? </p>`,
      image: "",
      options: [
        `If \\( P_4 \\) requests one more instance of the resource, the system stays safe.<br/>`,
        `If \\( P_4 \\) requests one more instance of the resource, the system becomes unsafe because not enough free resources remain.<br/>`,
        `If \\( P_3 \\) requests one more instance of the resource, the system becomes unsafe.<br/>`,
        `If \\( P_3 \\) requests one more instance of the resource, the system stays safe and a valid safe sequence exists.`,
      ],
      answer: ["B", "D"],
      solution: ``
    },
    {
      marks: 1,
      neg: 0,
      type: "MSQ",
      text: `<p> <meta/> </p> <p>Consider two processes attempting to enter the critical section using the following protocol:</p> <p style="line-height:1.55;">• Each process \\( P_i \\) sets \\( \\text{flag[i] = true} \\) to declare intent.<br/>• Then it waits while \\( \\text{flag[1 - i] = true} \\). </p> <table cellpadding="8" style="border-collapse: collapse; width:100%; line-height:1.55; margin-top:10px; border-spacing: 0px;"> <tbody> <tr> <td style="text-align:center; font-weight:bold;">Process \\( P_0 \\) </td> <td style="text-align:center; font-weight:bold;">Process \\( P_1 \\) </td> </tr> <tr> <td> <pre style="line-height:1.55;">flag[0] = true;
while (flag[1]==true);

/* Critical Section */

flag[0] = false;
        </pre> </td> <td> <pre style="line-height:1.55;">flag[1] = true;
while (flag[0]==true);

/* Critical Section */

flag[1] = false;
        </pre> </td> </tr> </tbody> </table> <p style="line-height:1.6;">Both \\( \\text{flag[0]} \\) and \\( \\text{flag[1]} \\) are initially <b>false</b>. </p> <p>Which of the following statements is/are TRUE?</p>`,
      image: "",
      options: [
        `It guarantees mutual exclusion.<br/>`,
        `It guarantees progress but violates mutual exclusion.<br/>`,
        `It may cause both threads to wait forever, violating progress.<br/>`,
        `It guarantees bounded waiting.`,
      ],
      answer: ["A", "C", "D"],
      solution: ``
    },
    {
      marks: 1,
      neg: 0,
      type: "NAT",
      text: `<p>A queue \\( Q \\) (front rear) initially contains \\( \\verb|[1,2,3,4]| \\).<br/>A stack \\( S \\) is empty.<br/>You may use only the following operations: </p> <ul> <li> \\( \\verb|Enqueue(x)| \\) - insert into rear of \\( Q \\)<br/> </li> <li> \\( \\verb|Dequeue()| \\) - remove from front of \\( Q \\)<br/> </li> <li> \\( \\verb|Push(x)| \\) - push into \\( S \\)<br/> </li> <li> \\( \\verb|Pop()| \\) - pop from \\( S \\) </li> </ul> <p>You must transfer all elements from \\( Q \\) to \\( S \\) such that: </p> <ul> <li>The front element of \\( Q \\) becomes the top of \\( S \\), and<br/> </li> <li>The relative order of all elements is preserved.</li> </ul> <p>What is the minimum number of \\( \\verb|Push| \\) operations required? </p>`,
      image: "",
      options: [
      ],
      answer: "4",
      solution: ``
    },
    {
      marks: 1,
      neg: 0,
      type: "MSQ",
      text: `<div style="font-family:Segoe UI, sans-serif; font-size:1.05em; line-height:1.7; color:#222;"> <p>Consider inserting the integer keys \\( A = [67, 13, 49, 24, 40, 33, 58] \\) into a hash table of size \\( 9 \\) using the hash function \\( h(k) = (11k + 4) \\bmod 9 \\). Collisions are resolved using <b>chaining</b>, where new keys are appended at the <b>end</b> of the chain. </p> <p>After all keys are inserted in the given order, which of the following is/are correctly describing the final state of the hash table?</p> <ol type="A"> <li>Bucket 3 contains the chain \\( 67 \\rightarrow 13 \\rightarrow 49 \\rightarrow 40 \\rightarrow 58 \\) and bucket 7 contains \\( 24 \\rightarrow 33 \\)<br/> </li> <li>Bucket 3 contains the chain \\( 67 \\rightarrow 13 \\rightarrow 49 \\rightarrow 40 \\rightarrow 58 \\) and bucket 6 contains \\( 24 \\rightarrow 33 \\)<br/> </li> <li>Bucket 4 contains the chain \\( 67 \\rightarrow 49 \\rightarrow 40 \\) and bucket 7 contains \\( 13 \\rightarrow 24 \\rightarrow 33 \\rightarrow 58 \\) <br/> </li> <li>Bucket 4 contains \\( 67 \\rightarrow 49 \\rightarrow 58 \\) and bucket 7 contains \\( 24 \\rightarrow 33  \\) </li> </ol> </div>`,
      image: "",
      options: [
      ],
      answer: ["A"],
      solution: ``
    },
    {
      marks: 1,
      neg: 0,
      type: "NAT",
      text: `<p>What is the size of the largest max-binary-heap that is also a valid binary search tree? (Assume the heap has no duplicate elements)</p>`,
      image: "",
      options: [
      ],
      answer: "2",
      solution: ``
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<div style="font-family:Segoe UI, sans-serif; font-size:1.05em; line-height:1.7; color:#222; max-width:900px;"> <p>Consider the following C program:</p> <pre class="prettyprint linenums lang-c_cpp prettyprinted" data-pbcklang="c_cpp" data-pbcktabsize="4" style=""><ol class="linenums"><li class="L0"><span class="kwd">int</span><span class="pun">*</span><span class="pln"> alpha</span><span class="pun">(</span><span class="kwd">int</span><span class="pln"> </span><span class="pun">*</span><span class="pln">l</span><span class="pun">,</span><span class="pln"> </span><span class="kwd">int</span><span class="pln"> </span><span class="pun">*</span><span class="pln">r</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span></li><li class="L1"><span class="pln">    </span><span class="pun">*</span><span class="pln">l </span><span class="pun">+=</span><span class="pln"> </span><span class="pun">*</span><span class="pln">r</span><span class="pun">;</span></li><li class="L2"><span class="pln">    </span><span class="kwd">return</span><span class="pln"> r</span><span class="pun">;</span></li><li class="L3"><span class="pun">}</span></li><li class="L4"><span class="pln"> </span></li><li class="L5"><span class="kwd">int</span><span class="pln"> main</span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span></li><li class="L6"><span class="pln">    </span><span class="kwd">int</span><span class="pln"> x </span><span class="pun">=</span><span class="pln"> </span><span class="lit">5</span><span class="pun">,</span><span class="pln"> y </span><span class="pun">=</span><span class="pln"> </span><span class="lit">7</span><span class="pun">;</span></li><li class="L7"><span class="pln">    </span><span class="kwd">int</span><span class="pln"> </span><span class="pun">*</span><span class="pln">z </span><span class="pun">=</span><span class="pln"> alpha</span><span class="pun">(&amp;</span><span class="pln">x</span><span class="pun">,</span><span class="pln"> </span><span class="pun">&amp;</span><span class="pln">y</span><span class="pun">);</span></li><li class="L8"><span class="pln">    </span><span class="pun">*</span><span class="pln">z </span><span class="pun">+=</span><span class="pln"> </span><span class="lit">3</span><span class="pun">;</span></li><li class="L9"><span class="pln">    printf</span><span class="pun">(</span><span class="str">"%d %d"</span><span class="pun">,</span><span class="pln"> x</span><span class="pun">,</span><span class="pln"> y</span><span class="pun">);</span></li><li class="L0"><span class="pln">    </span><span class="kwd">return</span><span class="pln"> </span><span class="lit">0</span><span class="pun">;</span></li><li class="L1"><span class="pun">}</span></li></ol></pre> <p><b>What will be the output of the program?</b></p> <ol start="1" style="list-style-type:upper-alpha"> <li>12 7<br/> </li> <li>12 10<br/> </li> <li>5 10<br/> </li> <li>5 7</li> </ol> </div>`,
      image: "",
      options: [
      ],
      answer: "B",
      solution: ``
    },
    {
      marks: 1,
      neg: 0,
      type: "NAT",
      text: `<div style="font-family:Segoe UI, sans-serif; font-size:1.05em; line-height:1.7; color:#222; max-width:900px;"> <p>Consider the following C program.</p> <pre class="prettyprint linenums lang-c_cpp prettyprinted" data-pbcklang="c_cpp" data-pbcktabsize="4" style=""><ol class="linenums"><li class="L0"><span class="com">#include</span><span class="pln"> </span><span class="str">&lt;stdio.h&gt;</span></li><li class="L1"><span class="kwd">int</span><span class="pln"> main </span><span class="pun">()</span><span class="pln">  </span><span class="pun">{</span></li><li class="L2"><span class="pln">    </span><span class="kwd">int</span><span class="pln"> a</span><span class="pun">[</span><span class="lit">3</span><span class="pun">][</span><span class="lit">3</span><span class="pun">]</span><span class="pln"> </span><span class="pun">=</span><span class="pln"> </span><span class="pun">{</span></li><li class="L3"><span class="pln">        </span><span class="pun">{</span><span class="lit">3</span><span class="pun">,</span><span class="pln"> </span><span class="lit">5</span><span class="pun">,</span><span class="pln"> </span><span class="lit">7</span><span class="pun">},</span></li><li class="L4"><span class="pln">        </span><span class="pun">{</span><span class="lit">2</span><span class="pun">,</span><span class="pln"> </span><span class="lit">4</span><span class="pun">,</span><span class="pln"> </span><span class="lit">6</span><span class="pun">},</span></li><li class="L5"><span class="pln">        </span><span class="pun">{</span><span class="lit">8</span><span class="pun">,</span><span class="pln"> </span><span class="lit">9</span><span class="pun">,</span><span class="pln"> </span><span class="lit">10</span><span class="pun">}</span></li><li class="L6"><span class="pln">    </span><span class="pun">};</span></li><li class="L7"><span class="pln"> </span></li><li class="L8"><span class="pln">    printf</span><span class="pun">(</span><span class="str">"%d"</span><span class="pun">,</span><span class="pln"> </span><span class="pun">*(*</span><span class="pln">a </span><span class="pun">+</span><span class="pln"> </span><span class="pun">(</span><span class="pln">a</span><span class="pun">[</span><span class="lit">0</span><span class="pun">][</span><span class="lit">0</span><span class="pun">]</span><span class="pln"> </span><span class="pun">==</span><span class="pln"> </span><span class="lit">3</span><span class="pun">)));</span></li><li class="L9"><span class="pln"> </span></li><li class="L0"><span class="pln">    </span><span class="kwd">return</span><span class="pln"> </span><span class="lit">0</span><span class="pun">;</span></li><li class="L1"><span class="pun">}</span></li></ol></pre> <p>The output of the program is _______.</p> </div>`,
      image: "",
      options: [
      ],
      answer: "5",
      solution: ``
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p>Consider the following ANSI C program. </p> <pre class="prettyprint linenums lang-c_cpp prettyprinted" data-pbcklang="c_cpp" data-pbcktabsize="4" style=""><ol class="linenums"><li class="L0"><span class="com">#include</span><span class="pln"> </span><span class="str">&lt;stdio.h&gt;</span></li><li class="L1"><span class="kwd">int</span><span class="pln"> main</span><span class="pun">()</span></li><li class="L2"><span class="pun">{</span></li><li class="L3"><span class="pln">    </span><span class="kwd">int</span><span class="pln"> x </span><span class="pun">=</span><span class="pln"> </span><span class="lit">0</span><span class="pun">,</span><span class="pln"> y </span><span class="pun">=</span><span class="pln"> </span><span class="lit">5</span><span class="pun">;</span></li><li class="L4"><span class="pln">    </span><span class="kwd">if</span><span class="pln"> </span><span class="pun">((</span><span class="pln">x </span><span class="pun">!=</span><span class="pln"> </span><span class="lit">0</span><span class="pun">)</span><span class="pln"> </span><span class="pun">&amp;&amp;</span><span class="pln"> </span><span class="pun">(</span><span class="pln">y</span><span class="pun">++))</span></li><li class="L5"><span class="pln">        x </span><span class="pun">=</span><span class="pln"> y</span><span class="pun">;</span></li><li class="L6"><span class="pln">    printf</span><span class="pun">(</span><span class="str">"%d %d"</span><span class="pun">,</span><span class="pln"> x</span><span class="pun">,</span><span class="pln"> y</span><span class="pun">);</span></li><li class="L7"><span class="pln">    </span><span class="kwd">return</span><span class="pln"> </span><span class="lit">0</span><span class="pun">;</span></li><li class="L8"><span class="pun">}</span></li></ol></pre> <p><br/>Which one of the following options is correct?<br/> </p>`,
      image: "",
      options: [
        `\\( 0 ~5 \\)<br/>`,
        `\\( 5 ~6 \\)<br/>`,
        `\\( 6 ~6 \\)<br/>`,
        `The program will not compile.`,
      ],
      answer: "A",
      solution: ``
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p>Let \\( x \\) and \\( y \\in \\mathbb{R}^{n} \\) be non-zero column vectors, from the matrix \\( A=xy^{T} \\), where \\( y^{T} \\) is the transpose of \\( y \\). Then the rank of \\( A \\) is: </p>`,
      image: "",
      options: [
        `\\( 2 \\)<br/>`,
        `\\( 0 \\)<br/>`,
        `At least \\( n/2 \\)<br/>`,
        `None of the above`,
      ],
      answer: "D",
      solution: ``
    },
    {
      marks: 1,
      neg: 0,
      type: "NAT",
      text: `<p>In a certain computer, one instruction is executed in the order of steps \\( 1 \\) through \\( 6 \\) in the table shown below. How many nanoseconds are required to execute \\( 6 \\) instructions using pipeline processing in the figure shown below? Here, it takes \\( 10 \\) nanoseconds to execute each step, and there is no instruction, such as branch and jump, that stalls the pipeline processing.<b id="docs-internal-guid-1f6c9c40-7fff-939c-ec13-6fc5447dacd3"><img alt="" height="237" src="js/questions/fst-mock-test-1/8.png" width="624"/></b> </p>`,
      image: "",
      options: [
      ],
      answer: "110",
      solution: ``
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p>When a CPU fetches an instruction word from memory, the word contains an operation code (op code) that indicates the type of operation the CPU is to perform and information specifying where the instruction operands are located. A computer may use various addressing modes to specify the operand location. One such addressing mode is shown below, where R designates some register within the CPU and d is a constant embedded in the instruction word.<br/><b id="docs-internal-guid-67335c08-7fff-a284-ce98-65e980c2d221"><img alt="" height="192" src="js/questions/fst-mock-test-1/9.png" width="624"/></b><br/>Which of the following terms best describes the addressing mode used by the instruction above ? ( \\( \\Sigma \\) indicates addition) </p>`,
      image: "",
      options: [
        `Immediate addressing<br/>`,
        `Direct addressing<br/>`,
        `Indexed addressing<br/>`,
        `Indirect addressing`,
      ],
      answer: "C",
      solution: ``
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p>When data is transmitted in a serial format, an error detection bit called a parity bit may be appended to the bit stream. A serial receiver that uses even parity has received the following nine bits (parity bit followed by eight data bits).<br/> \$\$ 000110100 \$\$<br/>Which statement best describes the received code? </p>`,
      image: "",
      options: [
        `No errors occurred during transmission.`,
        `An even number of bits have been corrupted during transmission.`,
        `An odd number of bits have been corrupted during transmission.`,
        `A bit transmitted as a one \\( (1) \\) has been changed to a zero \\( (0) \\) during transmission.`,
      ],
      answer: "C",
      solution: ``
    },
    {
      marks: 1,
      neg: 0,
      type: "MSQ",
      text: `<p>Which of the following statements is/are true?</p>`,
      image: "",
      options: [
        `The union of two context-free languages is context-free.<br/>`,
        `The union of two context-free languages is not context-free.<br/>`,
        `The intersection of two context-free languages is context-free.<br/>`,
        `The intersection of two context-free languages is not context-free.`,
      ],
      answer: ["A"],
      solution: ``
    },
    {
      marks: 1,
      neg: 0,
      type: "NAT",
      text: `<p>Let \\( \\mathrm{A}=\\{2,4,6,8,10\\} \\) and \\( \\mathrm{B}=\\{3,5,7,8,9,11,13\\} \\). Find the total number of one-one maps \\( f: A \\rightarrow B \\) such that \\( f(2)+f(4)=16 \\). </p>`,
      image: "",
      options: [
      ],
      answer: "360",
      solution: ``
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p>A sequential logic circuit has one input \\( \\mathrm{(x)} \\), one output \\( \\mathrm{(z)} \\), and six states labeled \\( \\mathrm{A-F} \\). The circuit is described by the state table shown below. Entries in the two right-hand columns represent the next-state/output-value combination for each present-state condition and input value. For example, if the present state is \\( \\mathrm{B} \\) and an input \\( \\mathrm{x}=1 \\) is applied, the next state will be \\( \\mathrm{D} \\) and the value of \\( \\mathrm{(z)} \\) will be \\( 0 \\).<br/><br/>If the circuit is initially in State \\( \\mathrm{C} \\) and the input sequence \\( \\mathrm{x}=100 \\) is applied (meaning the first input is \\( 1 \\) , the second input is \\( 0 \\), etc.), the output sequence is best described by<br/> </p> <p style="text-align:center"><img alt="" height="225" src="js/questions/fst-mock-test-1/10.png" width="443"/></p> <p><br/> </p>`,
      image: "",
      options: [
        `\\( 101 \\)<br/>`,
        `\\( 010 \\)<br/>`,
        `\\( 100 \\)<br/>`,
        `\\( 111 \\)`,
      ],
      answer: "D",
      solution: ``
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p>Flip-flops A and B form a sequential synchronous circuit as shown below.<br/> </p> <p style="text-align:center"><img alt="" height="211" src="js/questions/fst-mock-test-1/11.png" width="364"/></p> <p><br/><br/><br/>After the clock pulse, binary count \\( 10(A=1, B=0) \\) changes to: </p>`,
      image: "",
      options: [
        `\\( 00 \\)<br/>`,
        `\\( 01 \\)<br/>`,
        `\\( 10 \\)<br/>`,
        `\\( 11 \\)`,
      ],
      answer: "A",
      solution: ``
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p>Three nearby laboratory rooms \\( \\mathbf{1}, \\mathbf{2}, \\mathbf{3} \\) have one smoke detector each labelled \\( \\mathbf{D 1}, \\mathbf{D 2}, \\mathbf{D 3} \\) respectively, for fire safety. In case smoke is detected, the detector output goes to a logic state <em>True</em>. However, to prevent false alarm, these outputs are connected to the logic circuit below whose output activates a single alarm.<br/><br/><b id="docs-internal-guid-fee0c3dc-7fff-11b2-8436-43354ab962cb"><img alt="" height="163" src="js/questions/fst-mock-test-1/12.png" width="624"/></b><br/><br/><br/>In which of the following cases will the alarm definitely ring: </p>`,
      image: "",
      options: [
        `Smoke is detected in room \\( 3 \\)<br/>`,
        `Smoke is detected in rooms \\( 2 \\) and \\( 3 \\)<br/>`,
        `Smoke is detected in rooms \\( 1 \\) or \\( 3 \\)<br/>`,
        `Smoke is detected in any two of three rooms`,
      ],
      answer: "B",
      solution: ``
    },
    {
      marks: 1,
      neg: 0,
      type: "MSQ",
      text: `<p>Indexes are auxiliary access structures used to increase the speed of record retrieval in response to certain search conditions.<br/><br/>Based on knowledge about indexes, which of the following statements is/are correct?<br/> </p>`,
      image: "",
      options: [
        `A <strong>sparse index</strong> has an index entry for each value of the search key (therefore, for each record) in the data file. A <strong>dense index</strong> has index entries for only some of the search key values.<br/>`,
        `An index file is an example of a <strong>sequential file</strong>; the key-pointer pairs can be treated as records ordered by the value of the search key.<br/>`,
        `A file can have, at most, <strong>one secondary index</strong>, used to physically order the records of the file on disk; however, a file may have <strong>several primary indexes</strong>, which can be specified on any field of a file.<br/>`,
        `Inserting or deleting records in the data file results in the same action on its index file (if it is <strong>dense</strong>), since a key-pointer pair for that record is inserted or deleted.`,
      ],
      answer: ["B", "D"],
      solution: ``
    },
    {
      marks: 1,
      neg: 0.33,
      type: "MCQ",
      text: `<p>Analyze the following <strong>Entity-Relationship (ER) diagram.</strong><br/><b id="docs-internal-guid-b1dedec3-7fff-bbf8-311c-891cde30bc27"><img alt="" height="196" src="js/questions/fst-mock-test-1/13.png" width="624"/></b><br/>Consider the ER diagram in which an entity of type<strong> EntA</strong> can be related to several entities of type <strong>EntB</strong>, and each entity of type <strong>EntB</strong> is related to one entity of type <strong>EntA</strong>.<br/><br/>If this diagram is converted to the <strong>relational model</strong>, which of the following sets of tables presents the <strong>best mapping that satisfies Third Normal Form (3NF)?</strong></p>`,
      image: "",
      options: [
        `EntA ( \\( \\underline{idA} \\), atrib1, atrib2), EntB ( \\( \\underline{idB} \\), atrib3).`,
        `EntAB ( \\( \\underline{idA} \\), \\( \\underline{idB} \\), atrib1, atrib2, atrib3).`,
        `EntA ( \\( \\underline{idA} \\), atrib1, atrib2), EntB( \\( \\underline{idB} \\), atrib3, \\( \\underline{idA} \\)).`,
        `EntA ( \\( \\underline{idA} \\), atrib1, atrib2), AB (idA, idB), EntB ( \\( \\underline{idB} \\), atrib3).`,
      ],
      answer: "C",
      solution: ``
    },
    {
      marks: 2,
      neg: 0,
      type: "NAT",
      text: `<p>Let \\( \\mathrm{G}=(\\mathrm{V}, \\mathrm{E}) \\) be a simple, connected, <strong>non-Eulerian</strong> graph. We want to construct a graph \\( \\mathrm{H} \\) (not necessarily simple) that is <strong>Eulerian</strong> and that contains \\( \\mathrm{G} \\) as a subgraph. Consider the following possible construction processes:<br/><br/>(I) Add a new vertex, connecting it to every vertex of \\( \\mathrm{G} \\) by an edge.<br/><br/>(II) Add a new vertex, connecting it to every vertex of <strong>odd degree</strong> in \\( \\mathrm{G} \\) by an edge.<br/><br/>(III) Create a new copy \\( \\mathrm{G'} \\) of graph \\( \\mathrm{G} \\) and add an edge connecting each pair of corresponding vertices.<br/><br/>(IV) Duplicate all edges of \\( \\mathrm{G} \\).<br/><br/>(V) Add edges to \\( \\mathrm{G} \\) until the <strong>complete graph</strong> with \\( \\mathrm{|V|} \\) vertices is formed. </p> <p><br/>Which of the above processes <strong>always</strong> correctly constructs the graph \\( \\mathrm{H} \\)? </p>`,
      image: "",
      options: [
        `All<br/>`,
        `Only (II), (III), (IV) and (V)<br/>`,
        `Only (II), (III), and (IV)<br/>`,
        `Only (II) and (IV)`,
      ],
      answer: "D",
      solution: ``
    },
    {
      marks: 2,
      neg: 0,
      type: "MSQ",
      text: `<p>Consider the following context-free grammar \\( G \\).<br/> \$\$ \\begin{aligned} &amp; S \\rightarrow b A B a a \\mid S a \\mid  a \\\\ &amp; A \\rightarrow a B \\\\ &amp; B \\rightarrow b a B \\mid \\epsilon \\end{aligned} \$\$ <br/>Let \\( L_{A} \\) and \\( L_{B} \\) be the languages consisting of the terminal strings that can be derived from the variables \\( A \\) and \\( B \\), respectively.<br/><br/>Which of the following options is/are correct? </p>`,
      image: "",
      options: [
        `\\( L_A \\) is regular.<br/>`,
        `\\( L_B \\) is regular.<br/>`,
        `\\( \\mathrm{L}(\\mathrm{G}) \\) is regular.<br/>`,
        `\\( \\mathrm{L}(\\mathrm{G}) \\) is a context-free language but not regular.`,
      ],
      answer: ["A", "B", "C"],
      solution: ``
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<div style="max-width:900px; line-height:1.7;"> <p>Given items \\( x_{\\mathbf{1}}, x_{\\mathbf{2}}, \\ldots, x_{\\mathbf{n}} \\), where each item \\( x_{\\mathbf{i}} \\) has a non-negative weight \\( w(x_{\\mathbf{i}}) \\). You are required to select a subset of items such that no two selected items are adjacent (i.e., if \\( x_{\\mathbf{i}} \\) is selected, then \\( x_{\\mathbf{i-1}} \\) and \\( x_{\\mathbf{i+1}} \\) cannot be selected). </p> <p>Let \\( W_{\\mathbf{i}} \\) denote the maximum total weight that can be obtained by selecting from items \\( x_{\\mathbf{1}} \\) through \\( x_{\\mathbf{i}} \\). </p> <p>For the purpose of this question, assume that the recurrence is applied for \\( \\mathbf{i} \\ge \\mathbf{2} \\). You do not need to worry about the base cases. </p> <p>Which of the following recurrence relations correctly computes \\( W_{\\mathbf{i+1}} \\)? </p> <ol start="1" style="list-style-type: upper-alpha;"> <li> \\( W_{\\mathbf{i+1}} = \\max \\{ W_{\\mathbf{i}},\\; W_{\\mathbf{i}} + w(x_{\\mathbf{i+1}}) \\} \\) <br/> </li> <li> \\( W_{\\mathbf{i+1}} = \\max \\{ W_{\\mathbf{i-1}},\\; W_{\\mathbf{i}} + w(x_{\\mathbf{i+1}}) \\} \\) <br/> </li> <li> \\( W_{\\mathbf{i+1}} = \\max \\{ W_{\\mathbf{i}},\\; W_{\\mathbf{i-1}} + w(x_{\\mathbf{i+1}}) \\} \\) <br/> </li> <li> \\( W_{\\mathbf{i+1}} = W_{\\mathbf{i-1}} + w(x_{\\mathbf{i+1}}) \\) </li> </ol> </div>`,
      image: "",
      options: [
      ],
      answer: "C",
      solution: ``
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p> <meta/> </p> <div style="max-width:900px; margin:0 auto; line-height:1.75;"> <p>You are given a black box implementation of a comparison-based data structure that supports the operations insert and extract-min. It is known that the data structure can be constructed on \\( n \\) elements in time \\( \\Theta(n \\log \\log n) \\). </p> <p>A sorting algorithm is implemented using this black box as follows:</p> <ul> <li>Build the data structure on the \\( n \\) elements. </li> <li>Repeatedly perform extract-min until all elements are removed.</li> </ul> <p>If each extract-min operation takes \\( T(n) \\) time, which of the following must be true? </p> <ol type="A"> <li> \\( T(n) = \\Omega(\\log n) \\)<br/> </li> <li> \\( T(n) = \\Omega(\\log \\log n) \\) <br/> </li> <li> \\( T(n) = \\Omega(1) \\)<br/> </li> <li> \\( T(n) = \\Omega(\\sqrt{\\log \\log n}) \\) </li> </ol> </div>`,
      image: "",
      options: [
      ],
      answer: "A",
      solution: ``
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<div style="line-height:1.7;"> <p>Assume two end-hosts communicate using the sliding window protocol. The size of the sender window is \\( w \\) bits. Let \\( C \\) be the link bandwidth between the two end-hosts in bps. Further, the round trip time (representing here the time when the first bit of the segment is transmitted till its acknowledgment is received) on the path between the two end-hosts is \\( RTT \\) seconds. </p> <p>If the roundtrip time satisfies \\( RTT &gt; \\frac{w}{C} \\), what is the <b>maximum throughput</b> achieved by the two end-hosts? </p> <ol start="1" style="list-style-type: upper-alpha;"> <li> \\( C \\)<br/> </li> <li style="font-size: 1.12em;"> \\( \\frac{w}{RTT} \\)<br/> </li> <li style="font-size: 1.12em;"> \\( \\frac{C}{RTT} \\)<br/> </li> <li style="font-size: 1.12em;"> \\( \\frac{w}{C \\cdot RTT} \\) </li> </ol> </div>`,
      image: "",
      options: [
      ],
      answer: "B",
      solution: ``
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<div style="line-height:1.75; font-size:16px; max-width:900px;"> <p>A file of size <i>F</i> bits is sent from Host A to Host B using <b>store-and-forward</b> packet switching across 3 hops (A → S₁ → S₂ → B). The file is divided into segments of <i>S</i> bits, and an <b>80-bit header</b> is added to each segment. Thus, each packet size is <b>S + 80</b> bits. All links have transmission rate <i>R</i> bps. Propagation delays are ignored.</p> <p>Which of the following expressions gives the total time to deliver the entire file to Host B?</p> <ol start="1" style="list-style-type: upper-alpha;"> <li> \\( \\displaystyle \\frac{S+80}{R}\\left(\\frac{F}{S}\\right) \\) <br/> </li> <li> \\( \\displaystyle \\frac{S+80}{R}\\left(\\frac{F}{S}+1\\right) \\) <br/> </li> <li> \\( \\displaystyle \\frac{S+80}{R}\\left(\\frac{F}{S}+2\\right) \\) <br/> </li> <li> \\( \\displaystyle \\frac{F}{R} + 2\\frac{S+80}{R} \\) </li> </ol> </div>`,
      image: "",
      options: [
      ],
      answer: "C",
      solution: ``
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<div style="line-height: 1.75; font-size: 16px;">A TCP sender wants to transmit a \\( 402\\ \\text{KB} \\) file to a receiver over an already established TCP connection. At time \\( t \\), the sender’s congestion window is \\( cwnd = 2\\ \\text{KB} \\), the slow–start threshold is \\( ssthresh = 64\\ \\text{KB} \\), and the sender is currently in the slow-start phase. The Maximum Segment Size (MSS) is \\( 2\\ \\text{KB} \\), the receiver advertises a window of \\( 70\\ \\text{KB} \\), ACKs are never lost, and the sender always has data available to send. Assuming standard TCP congestion control, how many RTTs are required for the sender to successfully receive the ACK for the last byte of the \\( 402\\ \\text{KB} \\) file?<br/> <ol type="A"> <li> \\( 9 \\) RTTs<br/> </li> <li> \\( 10 \\) RTTs<br/> </li> <li> \\( 11 \\) RTTs<br/> </li> <li> \\( 12 \\) RTTs </li> </ol> </div>`,
      image: "",
      options: [
      ],
      answer: "C",
      solution: ``
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<div style="font-family:Segoe UI, sans-serif; font-size:1.08em; line-height:1.7; color:#222;"> <p>A system with a single CPU uses priority-based preemptive scheduling with three processes(X, Y, and Z):<br/>X = highest priority, Y = medium priority, Z = lowest priority.</p> <p>Processes can be in one of five states: \\( \\text{RUNNING},\\ \\text{READY},\\ \\text{BLOCKED},\\ \\text{TERMINATED} ,\\ \\text{Not Yet Created} \\) . </p> <p>The steps below describe all activity of the system.<br/>There are no extra CPU bursts, no extra I/O events beyond what is written here.</p> <ul style="margin-top:0.8em;"> <li><span style="font-family:'Latin Modern Mono', monospace;">Step 1: Process X is loaded into memory and X starts running.</span></li> <li><span style="font-family:'Latin Modern Mono', monospace;">Step 2: X calls <code>fork()</code> → Y is created.</span></li> <li><span style="font-family:'Latin Modern Mono', monospace;">Step 3: The running process performs an I/O request to the disk.</span></li> <li><span style="font-family:'Latin Modern Mono', monospace;">Step 4: The running process calls <code>fork()</code> → Z is created.</span></li> <li><span style="font-family:'Latin Modern Mono', monospace;">Step 5: The previously issued I/O request completes.</span></li> <li><span style="font-family:'Latin Modern Mono', monospace;">Step 6: The running process finishes execution.</span></li> </ul> <p style="margin-top:1.2em;">After Step 6, what are the final states of X, Y, and Z?</p> <div style="display:grid; grid-template-columns: 2.0em 1fr 1fr 1fr; row-gap:0.3em; column-gap:0.15em;"> <div>A.</div> <div>X = \\( \\text{Terminated} \\) </div> <div>Y = \\( \\text{Running} \\) </div> <div>Z = \\( \\text{Ready} \\) </div> <div>B.</div> <div>X = \\( \\text{Blocked} \\) </div> <div>Y = \\( \\text{Running} \\) </div> <div>Z = \\( \\text{Ready} \\) </div> <div>C.</div> <div>X = \\( \\text{Terminated} \\) </div> <div>Y = \\( \\text{Ready} \\) </div> <div>Z = \\( \\text{Running} \\) </div> <div>D.</div> <div>X = \\( \\text{Terminated} \\) </div> <div>Y = \\( \\text{Ready} \\) </div> <div>Z = \\( \\text{Ready} \\) </div> </div> </div>`,
      image: "",
      options: [
      ],
      answer: "A",
      solution: ``
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p> <meta/> </p> <p>A system uses two-level paging, where both the outer page table and the inner page tables use the same number of index bits.</p> <p>The page size is \\( 32 \\) bytes, the virtual address size is \\( 15 \\) bits, and physical memory consists of \\( 128 \\) pages. </p> <p>The Page Table Base Register (PTBR) contains physical page number \\( 51 \\). Each Page Table Entry (PTE) is one byte long, where the most significant bit is the valid bit and the remaining seven bits represent the Physical Frame Number (PFN). </p> <p>Translate the following virtual address using the physical page contents shown below:</p> <p> \$\$ \\text{VA} = \\texttt{0x5C5B} \$\$ </p> <div style="display:flex; gap:40px; justify-content:center; margin-top:20px;"> <div style="border:1px solid #000; padding:12px;"> \$\$ \\begin{array}{c c} \\textbf{Page 51} &amp; \\\\[2pt] \\text{Index} &amp; \\text{Byte} \\\\ 0 &amp; \\texttt{cd} \\\\ 1 &amp; \\texttt{a6} \\\\ 2 &amp; \\texttt{d2} \\\\ \\vdots &amp; \\vdots \\\\ 21 &amp; \\texttt{82} \\\\ 22 &amp; \\texttt{d7} \\\\ 23 &amp; \\texttt{d6} \\\\ 24 &amp; \\texttt{c9} \\\\ \\vdots &amp; \\vdots \\\\ 31 &amp; \\texttt{a7} \\end{array} \$\$ </div> <div style="border:1px solid #000; padding:12px;"> \$\$ \\begin{array}{c c} \\textbf{Page 86} &amp; \\\\[2pt] \\text{Index} &amp; \\text{Byte} \\\\ 0 &amp; \\texttt{10} \\\\ 1 &amp; \\texttt{00} \\\\ 2 &amp; \\texttt{e7} \\\\ \\vdots &amp; \\vdots \\\\ 24 &amp; \\texttt{16} \\\\ 25 &amp; \\texttt{1c} \\\\ 26 &amp; \\texttt{11} \\\\ 27 &amp; \\texttt{1a} \\\\ \\vdots &amp; \\vdots \\\\ 31 &amp; \\texttt{19} \\end{array} \$\$ </div> <div style="border:1px solid #000; padding:12px;"> \$\$ \\begin{array}{c c} \\textbf{Page 103} &amp; \\\\[2pt] \\text{Index} &amp; \\text{Byte} \\\\ 0 &amp; \\texttt{07} \\\\ 1 &amp; \\texttt{09} \\\\ 2 &amp; \\texttt{17} \\\\ \\vdots &amp; \\vdots \\\\ 26 &amp; \\texttt{15} \\\\ 27 &amp; \\texttt{1d} \\\\ 28 &amp; \\texttt{05} \\\\ 29 &amp; \\texttt{14} \\\\ \\vdots &amp; \\vdots \\\\ 31 &amp; \\texttt{14} \\end{array} \$\$ </div> </div> <p>What is the final physical address corresponding to the given virtual address?</p>`,
      image: "",
      options: [
        `\\( \\texttt{0x6FB} \\)`,
        `\\( \\texttt{0x001D} \\)`,
        `\\( \\texttt{0xCFB} \\)`,
        `None of the above`,
      ],
      answer: "C",
      solution: ``
    },
    {
      marks: 2,
      neg: 0,
      type: "MSQ",
      text: `<p> <meta/> </p> <p>Consider two threads executing concurrently. The semaphores \\( s \\) and \\( m \\) are counting semaphores shared between the two threads. </p> <p>Both threads execute inside infinite loops, and their executions may interleave arbitrarily.</p> <p>The code executed by the two threads is shown below:</p> <p> \$\$ \\begin{array}{c c} \\text{Thread 1} \\hspace{3cm} &amp; \\text{Thread 2} \\\\[8pt] \\begin{aligned} &amp;\\texttt{while (true) \\{} \\\\ &amp;\\quad \\texttt{P(s);} \\\\ &amp;\\quad \\texttt{P(s);} \\\\ &amp;\\quad \\texttt{P(m);} \\\\ &amp;\\quad \\texttt{printf("a");} \\\\ &amp;\\quad \\texttt{V(m);} \\\\ &amp;\\texttt{\\}} \\end{aligned} \\hspace{3cm} &amp; \\begin{aligned} &amp;\\texttt{while (true) \\{} \\\\ &amp;\\quad \\texttt{P(m);} \\\\ &amp;\\quad \\texttt{printf("b");} \\\\ &amp;\\quad \\texttt{V(m);} \\\\ &amp;\\quad \\texttt{V(s);} \\\\ &amp;\\texttt{\\}} \\end{aligned} \\end{array} \$\$ </p> <p>Which of the following statements is/are <b>TRUE</b>?</p>`,
      image: "",
      options: [
        `If initially \\( s = 0 \\) and \\( m = 1 \\), then every printed <code>"a"</code> must appear immediately after two printed <code>"b"</code> characters.`,
        `If initially \\( s = 0 \\) and \\( m = 1 \\), it is possible for <code>"a"</code> to appear before any <code>"b"</code>.`,
        `If initially \\( s = 2 \\) and \\( m = 1 \\), it is possible for two consecutive <code>"b"</code> characters to appear in the output.`,
        `If initially \\( s = 2 \\) and \\( m = 1 \\), every printed <code>"a"</code> must appear after at least one printed <code>"b"</code>.`,
      ],
      answer: ["C"],
      solution: ``
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<div style="max-width:900px; line-height:1.75; font-family:Segoe UI, sans-serif; font-size:1.05em;"> <p>A perfect binary tree with exactly 7 distinct keys is constructed. The keys are visited using an in-order traversal, producing the sequence:</p> <p style="text-align:center;"> \\( 8,\\; 3,\\; 7,\\; 17,\\; 1,\\; -1,\\; 12 \\) </p> <p>Which of the following statements is the pre-order traversal of the tree?</p> <p>A. \\( 17,\\; 3,\\; 8,\\; 7,\\; -1,\\; 1,\\; 12 \\) </p> <p>B. \\( 17,\\; 8,\\; 3,\\; 7,\\; -1,\\; 1,\\; 12 \\) </p> <p>C. \\( 3,\\; 8,\\; 7,\\; 17,\\; -1,\\; 1,\\; 12 \\) </p> <p>D. The pre-order traversal of the tree cannot be uniquely determined from the given information. </p> </div>`,
      image: "",
      options: [
      ],
      answer: "A",
      solution: ``
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<div style="font-family:Segoe UI, sans-serif; font-size:1.05em; line-height:1.7; color:#222; max-width:900px;"> <p>A singly linked list of integers is represented using the following structure. Consider the recursive function shown below.</p> <table style="width:100%; border-collapse:collapse; margin-top:10px;"> <tbody> <tr> <td style="width:48%; vertical-align:top; padding-right:2%;"> <pre data-pbcklang="c" data-pbcktabsize="4">struct node {
    int data;
    struct node* next;
};

typedef struct node Node;
</pre> </td> <td style="width:48%; vertical-align:top; padding-left:2%;"> <pre data-pbcklang="c" data-pbcktabsize="4">void fun_list(Node* head)
{
    if (head == NULL) {
        return;
    }

    printf("%d ", head-&gt;data);

    if (head-&gt;next != NULL)
        fun_list(head-&gt;next);

    printf("%d ", head-&gt;data);
}
</pre> </td> </tr> </tbody> </table> <p>The function <code>fun_list</code> is called with the head pointer of the linked list:</p> <p style="margin-left:20px;"> \\( 1 \\rightarrow 2 \\rightarrow 3 \\rightarrow 4 \\rightarrow 5 \\) </p> <p>What will be printed on the output?</p> <ol start="1" style="list-style-type:upper-alpha"> <li>1 2 3 4 5</li> <li>1 2 3 4 5 4 3 2</li> <li>1 2 3 4 5 5 4 3 2 1</li> <li>5 4 3 2 1 1 2 3 4 5</li> </ol> </div>`,
      image: "",
      options: [
      ],
      answer: "C",
      solution: ``
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<div style="font-family:Segoe UI, sans-serif; font-size:1.05em; line-height:1.7; color:#222; max-width:900px;"> <p>Which of the following code snippets correctly creates a \\( 3 \\times 5 \\) two-dimensional array on the heap using dynamic memory allocation in C?<br/>(Here, \\( 3 \\times 5 \\) means <b>3 rows</b> and <b>5 columns</b>.) </p> <ol type="A"> <li> <pre><code>
int **a = malloc(sizeof(int *) * 3);
for (int i = 0; i &lt; 3; i++) {
    a[i] = malloc(sizeof(int) * 5);
}
</code></pre> </li> <li> <pre><code>
int **a = malloc(sizeof(int *) * 5);
for (int i = 0; i &lt; 5; i++) {
    a[i] = malloc(sizeof(int) * 3);
}
</code></pre> </li> <li> <pre><code>
int *a = malloc(sizeof(int) * 15);
</code></pre> </li> <li> <pre><code>
int *a = malloc(sizeof(int) * 3);
for (int i = 0; i &lt; 3; i++) {
    a[i] = malloc(sizeof(int) * 5);
}
</code></pre> </li> </ol> </div>`,
      image: "",
      options: [
      ],
      answer: "A",
      solution: ``
    },
    {
      marks: 2,
      neg: 0,
      type: "NAT",
      text: `<p>In a computer with cache, we have the average number of clock periods per instruction equal to \\( 4 \\) , if there are no misses in the cache. What is the real number of clock periods per instruction, if the probability of miss in the cache is \\( 10 \\% \\)? For the replacement of the block (line) in the cache, we need \\( 5 \\) clock periods for read and \\( 10 \\) for write accesses. Assume that each instruction requires an average of \\( 2 \\) memory accesses and that \\( 20 \\% \\) of all are write accesses. (Write answer up to one decimal place) </p>`,
      image: "",
      options: [
      ],
      answer: "5.2",
      solution: ``
    },
    {
      marks: 2,
      neg: 0,
      type: "MSQ",
      text: `<p>Let \\( A=\\begin{bmatrix} 1 &amp; 2 &amp; 3 \\\\ 4 &amp; 5 &amp; 6 \\\\ 7 &amp; 8 &amp; 9 \\end{bmatrix}, B=\\begin{bmatrix} 1 &amp; 4 &amp; 7 \\\\ 2 &amp; 5 &amp; 8 \\\\ 3 &amp; 6 &amp; 9 \\end{bmatrix}, C=\\begin{bmatrix} 4 &amp; 5 &amp; 6 \\\\ 1 &amp; 2 &amp; 3 \\\\ 7 &amp; 8 &amp; 9 \\end{bmatrix} \\) and \\( D=\\begin{bmatrix} -1 &amp; 2 &amp; 3 \\\\ 4 &amp; -5 &amp; 6 \\\\ 7 &amp; 8 &amp; -9 \\end{bmatrix} \\) . </p> <p><br/>Which of the following statements are <strong>true</strong>?</p>`,
      image: "",
      options: [
        `\\( |A|=|B| \\)<br/>`,
        `\\( |C|=|D| \\)<br/>`,
        `\\( |B|=-|C| \\)<br/>`,
        `\\( |A|=-|D| \\)`,
      ],
      answer: ["A", "C"],
      solution: ``
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p>Suppose \\( A \\) and \\( B \\) are independent boolean variables. Determine the missing entries \\( x \\) and \\( y \\) in the joint distribution of \\( P(A, B) \\) shown below:<br/>Given: </p> <ul> <li> \\( P(A=T, B=T)=0.25 \\)<br/> </li> <li> \\( P(A=T, B=F)=0.35 \\)<br/> </li> <li> \\( P(A=F, B=T)=x \\)<br/> </li> <li> \\( P(A=F, B=F)=y \\)<br/><br/> </li> </ul>`,
      image: "",
      options: [
        `\\( x=\\frac{1}{6}, y=\\frac{7}{30} \\) <br/>`,
        `\\( x=\\frac{1}{10}, y=\\frac{3}{10} \\) <br/>`,
        `\\( x=0.2, y=0.2 \\)<br/>`,
        `\\( x=\\frac{1}{5}, y=\\frac{1}{5} \\)`,
      ],
      answer: "A",
      solution: ``
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p>Consider the attribute set \\( \\mathrm{R=A B C D E F} \\) and the functional dependency set \$\$ \\mathrm{F=\\{C \\rightarrow D, A \\rightarrow B, B \\rightarrow EF, F \\rightarrow A\\}} \$\$ .<br/>A GO-Classes student decides to write a decomposition of tables as \\( \\mathrm{ABDE} \\) and \\( \\mathrm{ABCF} \\). Right now, this is not a lossless decomposition. Which of the following changes (applied individually, not combined together) would make this a lossless decomposition? </p> <ol style="list-style-type:upper-alpha"> <li>Adding \\( \\mathrm{D} \\rightarrow \\mathrm{ABCDEF} \\) to the functional dependency set \\( \\mathrm{F} \\)<br/> </li> <li>Adding \\( \\mathrm{E} \\rightarrow \\mathrm{C} \\) to the functional dependency set \\( \\mathrm{F} \\)<br/> </li> <li>Adding \\( \\mathrm{B} \\rightarrow \\mathrm{D} \\) to the functional dependency set \\( \\mathrm{F} \\) </li> </ol> <div><br/> </div>`,
      image: "",
      options: [
        `All \\( \\mathrm{A} \\), \\( \\mathrm{B} \\), \\( \\mathrm{C} \\)<br/>`,
        `Only \\( \\mathrm{B} \\)<br/>`,
        `Only \\( \\mathrm{C} \\)<br/>`,
        `Only \\( \\mathrm{B} \\) and \\( \\mathrm{C} \\)`,
      ],
      answer: "D",
      solution: ``
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p>Let \\( \\mathbf{T1} \\) and \\( \\mathbf{T2} \\) be two transactions being processed by a DBMS. The terms \\( \\textbf{lockR} \\) and \\( \\textbf{lockW} \\) correspond to requests for read and write locks, respectively, and \\( \\textbf{Unlock} \\) corresponds to releasing a lock. \\( \\mathbf{A} \\), \\( \\mathbf{B} \\), and \\( \\mathbf{C} \\) are database data items.<br/><br/>The excerpt below is a fragment of the schedule of \\( \\mathbf{T1} \\) and \\( \\mathbf{T2} \\) defined by the DBMS scheduler (the fragment is not complete):<br/> </p> <pre class="prettyprint linenums lang-text prettyprinted" data-pbcklang="text" data-pbcktabsize="4" style=""><ol class="linenums"><li class="L0"><span class="pln">start</span><span class="pun">(</span><span class="pln">T1</span><span class="pun">);</span><span class="pln"> lockR</span><span class="pun">(</span><span class="pln">T1</span><span class="pun">,</span><span class="pln"> A</span><span class="pun">);</span><span class="pln"> read </span><span class="pun">(</span><span class="pln">T1</span><span class="pun">,</span><span class="pln"> A</span><span class="pun">);</span><span class="pln"> start</span><span class="pun">(</span><span class="pln">T2</span><span class="pun">);</span></li><li class="L1"><span class="pln">lockR</span><span class="pun">(</span><span class="pln">T2</span><span class="pun">,</span><span class="pln"> B</span><span class="pun">);</span><span class="pln"> read </span><span class="pun">(</span><span class="pln">T2</span><span class="pun">,</span><span class="pln"> B</span><span class="pun">);</span><span class="pln"> lockW </span><span class="pun">(</span><span class="pln">T1</span><span class="pun">,</span><span class="pln"> C</span><span class="pun">);</span><span class="pln"> read</span><span class="pun">(</span><span class="pln">T1</span><span class="pun">,</span><span class="pln">C</span><span class="pun">);</span></li><li class="L2"><span class="pln">write</span><span class="pun">(</span><span class="pln">T1</span><span class="pun">,</span><span class="pln">C</span><span class="pun">);</span><span class="pln"> unlock</span><span class="pun">(</span><span class="pln">T1</span><span class="pun">,</span><span class="pln"> C</span><span class="pun">);</span><span class="pln"> lockW </span><span class="pun">(</span><span class="pln">T1</span><span class="pun">,</span><span class="pln"> B</span><span class="pun">);</span><span class="pln"> lockW </span><span class="pun">(</span><span class="pln">T2</span><span class="pun">,</span><span class="pln"> A</span><span class="pun">);</span><span class="pln"> lockR</span><span class="pun">(</span><span class="pln">T2</span><span class="pun">,</span><span class="pln">C</span><span class="pun">);</span></li><li class="L3"><span class="pun">...</span></li></ol></pre> <p><br/>Consider the following statements:</p> <ol start="1" style="list-style-type: upper-roman;"> <li>The fragment shows an example of the application of the \\( \\textbf{2PL} \\) <strong>protocol</strong> (two-phase locking).<br/> </li> <li>The fragment violates the \\( \\textbf{2PL} \\) <strong>protocol.</strong><br/> </li> <li>The fragment shows an example in which there is a <strong>deadlock</strong> between \\( \\mathbf{T1} \\) and \\( \\mathbf{T2} \\).<br/> </li> <li>The fragment does<strong> not </strong>have a deadlock between \\( \\mathbf{T1} \\) and \\( \\mathbf{T2} \\).<br/> </li> <li>Nothing can be asserted.</li> </ol> <p><br/>The correct statements are:</p>`,
      image: "",
      options: [
        `Only I and III<br/>`,
        `Only II and IV<br/>`,
        `Only II and III<br/>`,
        `Only I and IV`,
      ],
      answer: "C",
      solution: ``
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p>Let a relation \\( \\mathbf{R} \\) have four tuples \\( -(\\mathbf{1 2}, \\mathbf{15}, \\mathbf{5100}), (\\mathbf{13}, \\textbf{NULL}, \\mathbf{3500}),(\\mathbf{14}, \\textbf{NULL}, \\textbf{NULL}), \\) and \\( (\\mathbf{15}, \\mathbf{12}, \\textbf{NULL}) - \\) in which the first, second, and third values in each tuple refer to attributes \\( \\textbf{at1} \\), \\( \\textbf{at2} \\), and \\( \\textbf{at3} \\), respectively. The following commands represent queries on \\( \\mathbf{R} \\) :<br/> </p> <pre class="prettyprint linenums lang-text prettyprinted" data-pbcklang="text" data-pbcktabsize="4" style=""><ol class="linenums"><li class="L0"><span class="pun">(</span><span class="pln">C1</span><span class="pun">)</span><span class="pln"> </span><span class="kwd">select</span><span class="pln"> </span><span class="pun">*</span><span class="pln"> </span><span class="kwd">from</span><span class="pln"> R</span></li><li class="L1"><span class="pln">    </span><span class="kwd">where</span><span class="pln"> </span><span class="pun">(</span><span class="pln">at1</span><span class="pun">&gt;=</span><span class="lit">12</span><span class="pun">)</span><span class="pln"> AND </span><span class="pun">(</span><span class="pln">at2</span><span class="pun">&gt;</span><span class="lit">14</span><span class="pun">)</span></li><li class="L2"><span class="pun">(</span><span class="pln">C2</span><span class="pun">)</span><span class="pln"> </span><span class="kwd">select</span><span class="pln"> </span><span class="pun">*</span><span class="pln"> </span><span class="kwd">from</span><span class="pln"> R</span></li><li class="L3"><span class="pln">    </span><span class="kwd">where</span><span class="pln"> </span><span class="pun">(</span><span class="pln">at2</span><span class="pun">&gt;</span><span class="lit">12</span><span class="pun">)</span><span class="pln"> OR </span><span class="pun">(</span><span class="pln">at3</span><span class="pun">&gt;</span><span class="lit">3000</span><span class="pun">)</span></li><li class="L4"><span class="pun">(</span><span class="pln">C3</span><span class="pun">)</span><span class="pln"> </span><span class="kwd">select</span><span class="pln"> </span><span class="pun">*</span><span class="pln"> </span><span class="kwd">from</span><span class="pln"> R</span></li><li class="L5"><span class="pln">    </span><span class="kwd">where</span><span class="pln"> </span><span class="pun">(</span><span class="pln">NOT </span><span class="pun">(</span><span class="pln">at1</span><span class="pun">&lt;</span><span class="pln">at2</span><span class="pun">))</span></li></ol></pre> <p><br/>The number of tuples returned by the execution of commands \\( \\text{(C1)} \\), \\( \\text{(C2)} \\), and \\( \\text{(C3)} \\), respectively, is: </p>`,
      image: "",
      options: [
        `two, one, and two.<br/>`,
        `two, two, and one.<br/>`,
        `one, one, and two.<br/>`,
        `one, two, and one.`,
      ],
      answer: "D",
      solution: ``
    },
    {
      marks: 2,
      neg: 0,
      type: "NAT",
      text: `<p>Suppose we have a relation \\( \\mathrm{T}(\\mathrm{P}, \\mathrm{C}, \\mathrm{I}) \\) representing the following tree. That is, nodes are represented by distinct integers, and the meaning of a tuple ( \\( \\mathrm{p}, \\mathrm{c}, \\mathrm{i} \\) ) in \\( \\mathrm{T} \\) is that node \\( \\mathrm{c} \\) is the \\( \\mathrm{i} \\)th child of node \\( \\mathrm{p} \\) , from the left. Attribute \\( \\mathrm{C} \\) is the primary key in \\( \\mathrm{T} \\). For every node, except the root, we have a tuple in \\( \\mathrm{T} \\).<br/> </p> <p style="text-align:center"><img alt="" height="234" src="js/questions/fst-mock-test-1/14.png" width="500"/> </p> <p><br/>The following relational algebra query is made on the database.<br/> \$\$ \\begin{aligned} &amp; R 1(C 1, C 2):=\\pi_{C 1, C 2}\\left(\\sigma_{I 2&gt;I 1}\\left(\\rho_{T 1(P, C 1, I 1)}(T) \\bowtie \\rho_{T 2(P, C 2, I 2)}(T)\\right)\\right) \\\\\\\\ &amp; R 2(C 1, C 3):=\\pi_{C 1, C 3}\\left(\\sigma_{I 2&gt;I 1 \\text { AND I3&gt;I2 }} \\left(\\rho_{T 1(P, C 1, I 1)}(T) \\bowtie \\rho_{T 2(P, C 2, I 2)}(T) \\bowtie \\rho_{T 3(P, C 3, I 3)}(T)\\right)\\right) \\\\\\\\ &amp; A N S W E R:=R 1-R 2 \\end{aligned} \$\$ <br/>The number of rows in ANSWER is? </p>`,
      image: "",
      options: [
      ],
      answer: "5",
      solution: ``
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<div style="font-family:Segoe UI, sans-serif; font-size:1.05em; line-height:1.7; color:#222; max-width:900px;"> <p>Consider the following program \\( P_0 \\) written in a hypothetical C-like language: </p> <p><b>Program \\( P_0 \\) </b></p> <pre>while (get() == 0);
halt;
</pre> <ul> <li>Every value in this language is either 0 or 1.</li> <li>Each call to <code>get()</code> asks the environment (e.g., a human user) to input 0 or 1 and returns the response.</li> <li>The <code>halt</code> statement ends the program execution immediately.</li> <li>After reaching a <code>halt</code> instruction, no further input is possible.</li> </ul> <p>It’s just a simple language with while loops, user input, and a halt instruction that behaves how you would expect.<br/>When running this program \\( P_0 \\), if the user gives an input that reaches a <code>halt</code> instruction, it is called a <em>terminating input</em> (e.g., \\( 1 \\), \\( 01 \\), \\( 001 \\)). The set of terminating inputs for \\( P_0 \\) forms the regular language \\( 0^*1 \\).<br/>For each of the following programs, give a regular expression that matches the set of terminating inputs (and no other strings): </p> <div style="display:flex; gap:40px; align-items:flex-start; margin:15px 0;"> <div style="flex:1;"> <p><b>Program \\( P_1 \\) </b></p> <pre>while (get())
    halt;

while (get());
halt;
    </pre> </div> <div style="flex:1;"> <p><b>Program \\( P_2 \\) </b></p> <pre>while (get());
while (get());
halt;
    </pre> </div> </div> <p><b>Which of the following options is correct?</b></p> <div style="display:flex; flex-direction:column; gap:10px; margin-top:8px;"> <div style="display:flex; gap:20px;"> <div style="width:4%;"><b>A</b></div> <div style="width:48%;"> \\( \\mathrm{P_1} : 1(0+1)^* + 01^*0 \\) </div> <div style="width:48%;"> \\( \\mathrm{P_2} : 1^*01^*0 \\) </div> </div> <div style="display:flex; gap:20px;"> <div style="width:4%;"><b>B</b></div> <div style="width:48%;"> \\( \\mathrm{P_1} : 1 + 01^*0 \\) </div> <div style="width:48%;"> \\( \\mathrm{P_2} : 1^*01^*0 \\) </div> </div> <div style="display:flex; gap:20px;"> <div style="width:4%;"><b>C</b></div> <div style="width:48%;"> \\( \\mathrm{P_1} : 1(0+1)^* + 01^*0 \\) </div> <div style="width:48%;"> \\( \\mathrm{P_2} : 00 \\) </div> </div> <div style="display:flex; gap:20px;"> <div style="width:4%;"><b>D</b></div> <div style="width:48%;"> \\( \\mathrm{P_1} : 1 + 01^*0 \\) </div> <div style="width:48%;"> \\( \\mathrm{P_2} : 00 \\) </div> </div> </div> </div>`,
      image: "",
      options: [
      ],
      answer: "B",
      solution: ``
    },
    {
      marks: 2,
      neg: 0,
      type: "NAT",
      text: `<p>For any two sets \\( S \\) and \\( T, S \\Delta T \\) is defined as \\( (S \\cup T) \\backslash(S \\cap T) \\). Let \\( A, B \\) and \\( C \\) be sets such that \\( A \\cap B \\cap C=\\phi \\), and the number of elements in each of \\( A \\Delta B, B \\Delta C \\) and \\( C \\Delta A \\) equals \\( 100 \\). Then the number of elements in \\( A \\cup B \\cup C \\) equals </p>`,
      image: "",
      options: [
      ],
      answer: "150",
      solution: ``
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p>An \\( 8 \\)-bit microprocessor has \\( 16 \\) -bit address bus \\( \\left(\\mathrm{A}_{15}-\\mathrm{A}_{0}\\right) \\) where \\( \\mathrm{A}_{0} \\) is the LSB. As shown in Figure (a), it has a pre-installed \\( 4 \\: \\mathrm{KB} \\text{ ROM} \\) whose starting address is \\( 0000\\: \\mathrm{H} \\). The processor needs to be upgraded by adding a \\( 16 \\:\\mathrm{KB} \\text{ RAM} \\) as shown in Figure (b). The address range for the newly added \\( \\text{RAM} \\) is </p> <p style="text-align:center"><img alt="" src="js/questions/fst-mock-test-1/15.png" width="400"/></p>`,
      image: "",
      options: [
        `\\( 1000 \\: \\mathrm{H}-4 \\mathrm{FFF} \\: \\mathrm{H} \\)<br/>`,
        `\\( 3000\\: \\mathrm{H}-6 \\mathrm{FFF} \\: \\mathrm{H} \\)<br/>`,
        `\\( 4000 \\: \\mathrm{H}-7 \\mathrm{FFF} \\: \\mathrm{H} \\)<br/>`,
        `\\( 8000 \\: \\mathrm{H}- \\mathrm{BFFF} \\: \\mathrm{H} \\)`,
      ],
      answer: "C",
      solution: ``
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p>The digital electronic circuit shown below (left side) has some problem and is not performing as intended. The voltage at each pin as a function of time is shown in the adjacent figures.</p> <p style="text-align:center"><img alt="" height="283" src="js/questions/fst-mock-test-1/16.png" width="500"/> </p> <p><br/>The problem in the about circuit may be that</p>`,
      image: "",
      options: [
        `the \\( \\text{Pin 6} \\) is shorted to ground<br/>`,
        `the input inverter is shorted<br/>`,
        `the \\( \\text{Pin 8} \\) is clamped to \\( +5 \\text{V} \\)<br/>`,
        `\\( \\text{OR} \\) gate is used instead of \\( \\text{AND} \\) gate`,
      ],
      answer: "C",
      solution: ``
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p>Consider the following non-deterministic finite automaton.</p> <p style="text-align:center"><img alt="" height="282" src="js/questions/fst-mock-test-1/17.png" width="250"/> </p> <p><br/><br/>Let p be the probability that a uniformly random string from \\( \\{\\mathrm{a}, \\mathrm{b}, \\mathrm{c}\\}^5 \\) is accepted by the above automaton. Which of the following is true about \\( \\mathrm{p} \\)? </p>`,
      image: "",
      options: [
        `\\( \\mathrm{p}=32 / 243 \\)<br/>`,
        `\\( \\mathrm{p}=90 / 243 \\)<br/>`,
        `\\( \\mathrm{p}=93 / 243 \\)<br/>`,
        `\\( \\mathrm{p}=96 / 243 \\)`,
      ],
      answer: "C",
      solution: ``
    },
    {
      marks: 2,
      neg: 0,
      type: "MSQ",
      text: `<div style="font-family:Segoe UI, sans-serif; font-size:1.12em; line-height:1.85; color:#222;"> <p>Consider the following the LL(1) grammar:</p> <div style="margin-left:0.9em; line-height:1.72;"> \\( S \\to A \\)<br/> \\( A \\to xAC \\mid yB \\)<br/> \\( B \\to yBC \\mid \\varepsilon \\)<br/> \\( C \\to z \\) </div> <p style="margin-top:1.3em;">Assume we want to add one more production for \\( C \\) (i.e., of the form \\( C \\to \\alpha \\)) so that the resulting grammar becomes not LL(1). Adding which of the following productions would make the grammar NOT LL(1)? (Select all that apply. Each option is considered independently, i.e., exactly one production is added to the grammar at a time.) </p> <div style="margin-left:0.6em; line-height:1.95; font-size:1.06em;">A. \\( C \\to x \\)<br/>B. \\( C \\to y \\)<br/>C. \\( C \\to zx \\)<br/>D. \\( C \\to \\varepsilon \\) </div> </div>`,
      image: "",
      options: [
      ],
      answer: ["B", "C", "D"],
      solution: ``
    },
    {
      marks: 2,
      neg: 0,
      type: "MSQ",
      text: `<p>The following grammar is ambiguous:<br/> \$\$ \\begin{aligned} &amp; A::=B \\mathrm{~b} ~C \\\\ &amp; B::=\\mathrm{b} \\mid \\varepsilon \\\\ &amp; C::=\\mathrm{b} \\mid \\varepsilon \\end{aligned} \$\$ <br/>To demonstrate this ambiguity we can use pairs of derivations. Here are four different pairs. For each pair of derivations, select it if the pair correctly proves that the grammar is ambiguous. Do not select if the pair does not give a correct proof.<br/><br/>Which of the following pairs of derivations correctly prove that the grammar is ambiguous? </p>`,
      image: "",
      options: [
        `\\( \\begin{aligned} &amp; A \\Rightarrow B \\mathrm{b} C \\Rightarrow \\mathrm{bb} C \\Rightarrow \\mathrm{bb} \\mathrm{b} \\\\ &amp; A \\Rightarrow B \\mathrm{b} C \\Rightarrow B \\mathrm{b} \\mathrm{b} \\Rightarrow \\mathrm{b} \\mathrm{b} \\mathrm{b} \\end{aligned} \\) <br/><br/>`,
        `\\( \\begin{aligned} &amp; A \\Rightarrow B \\mathrm{b} C\\Rightarrow\\mathrm{bb} C\\Rightarrow\\mathrm{bb} \\\\ &amp; A \\Rightarrow B \\mathrm{b} C\\Rightarrow\\mathrm{b} C\\Rightarrow\\mathrm{b} \\mathrm{b} \\end{aligned} \\) <br/><br/>`,
        `\\( \\begin{aligned} &amp; A \\Rightarrow B \\mathrm{b} C \\Rightarrow \\mathrm{bb} C \\Rightarrow \\mathrm{b} \\mathrm{b} \\\\ &amp; A \\Rightarrow B \\mathrm{b} C \\Rightarrow B \\mathrm{b} \\mathrm{b} \\Rightarrow \\mathrm{b} \\mathrm{b} \\end{aligned} \\) <br/><br/>`,
        `\\( \\begin{aligned} &amp; A \\Rightarrow B \\mathrm{b} C \\Rightarrow \\mathrm{bb} C \\Rightarrow \\mathrm{bb} \\\\ &amp; A \\Rightarrow B \\mathrm{b} C \\Rightarrow \\mathrm{bb}  C \\Rightarrow \\mathrm{b} \\mathrm{bb} \\end{aligned} \\)`,
      ],
      answer: ["B"],
      solution: ``
    },
    {
      marks: 2,
      neg: 0,
      type: "NAT",
      text: `<p>Refer to the given \\( 3 \\)-address code sequence. This code sequence is split into basic blocks. Let the number of basic blocks be \\( \\mathrm{N} \\). </p> <pre class="prettyprint linenums lang-text prettyprinted" data-pbcklang="text" data-pbcktabsize="4" style=""><ol class="linenums"><li class="L0"><span class="pln"> </span><span class="lit">1</span><span class="pun">:</span><span class="pln"> i </span><span class="pun">=</span><span class="pln"> </span><span class="lit">1</span></li><li class="L1"><span class="pln"> </span><span class="lit">2</span><span class="pun">:</span><span class="pln"> b </span><span class="pun">=</span><span class="pln"> i </span><span class="pun">+</span><span class="pln"> </span><span class="lit">2</span></li><li class="L2"><span class="pln"> </span><span class="lit">3</span><span class="pun">:</span><span class="pln"> y </span><span class="pun">=</span><span class="pln"> i </span><span class="pun">+</span><span class="pln"> b</span></li><li class="L3"><span class="pln"> </span><span class="lit">4</span><span class="pun">:</span><span class="pln"> L1</span><span class="pun">:</span><span class="pln"> </span><span class="kwd">if</span><span class="pln"> i </span><span class="pun">&gt;</span><span class="pln"> </span><span class="lit">20</span><span class="pln"> </span><span class="kwd">then</span><span class="pln"> </span><span class="kwd">goto</span><span class="pln"> L2</span></li><li class="L4"><span class="pln"> </span><span class="lit">5</span><span class="pun">:</span><span class="pln">     </span><span class="kwd">print</span><span class="pln"> b</span><span class="pun">+</span><span class="pln">y</span></li><li class="L5"><span class="pln"> </span><span class="lit">6</span><span class="pun">:</span><span class="pln"> L2</span><span class="pun">:</span><span class="pln"> b </span><span class="pun">=</span><span class="pln"> b</span><span class="pun">+</span><span class="lit">1</span></li><li class="L6"><span class="pln"> </span><span class="lit">7</span><span class="pun">:</span><span class="pln">     </span><span class="kwd">if</span><span class="pln"> b </span><span class="pun">&gt;</span><span class="pln"> </span><span class="lit">10</span><span class="pln"> </span><span class="kwd">then</span><span class="pln"> </span><span class="kwd">goto</span><span class="pln"> L3</span></li><li class="L7"><span class="pln"> </span><span class="lit">8</span><span class="pun">:</span><span class="pln">     i </span><span class="pun">=</span><span class="pln"> i</span><span class="pun">+</span><span class="lit">1</span></li><li class="L8"><span class="pln"> </span><span class="lit">9</span><span class="pun">:</span><span class="pln">     y </span><span class="pun">=</span><span class="pln"> b</span><span class="pun">+</span><span class="lit">1</span></li><li class="L9"><span class="lit">10</span><span class="pun">:</span><span class="pln">     </span><span class="kwd">goto</span><span class="pln"> L1</span></li><li class="L0"><span class="lit">11</span><span class="pun">:</span><span class="pln"> L3</span><span class="pun">:</span><span class="pln"> </span><span class="kwd">return</span><span class="pln"> y</span></li></ol></pre> <p><br/>Draw the control flow graph (CFG) \\( \\mathrm{G} \\) for the above program.<br/><br/>In the context of liveness analysis, liveness is associated with edges.<br/><br/>Let \\( \\mathrm{M} \\) be the number of edges in \\( \\mathrm{G} \\) where each of the variables \\( \\mathrm{b}, \\mathrm{i} \\), and \\( \\mathrm{y} \\) are live.<br/><br/>What is \\( \\mathrm{M}+\\mathrm{N} \\) ? </p>`,
      image: "",
      options: [
      ],
      answer: "11",
      solution: ``
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p>The following is the body of an entire procedure that uses six temporaries \\( \\verb|a|, \\verb|b|, \\verb|c|, \\verb|d|, \\verb|e|, \\verb|f| \\). </p> <pre class="prettyprint linenums lang-text prettyprinted" data-pbcklang="text" data-pbcktabsize="4" style=""><ol class="linenums"><li class="L0"><span class="pln">a </span><span class="pun">=</span><span class="pln"> </span><span class="lit">1</span></li><li class="L1"><span class="pln">b </span><span class="pun">=</span><span class="pln"> </span><span class="lit">2</span></li><li class="L2"><span class="pln">c </span><span class="pun">=</span><span class="pln"> a </span><span class="pun">+</span><span class="pln"> b</span></li><li class="L3"><span class="pln">d </span><span class="pun">=</span><span class="pln"> a </span><span class="pun">+</span><span class="pln"> c</span></li><li class="L4"><span class="pln">e </span><span class="pun">=</span><span class="pln"> c </span><span class="pun">+</span><span class="pln"> d</span></li><li class="L5"><span class="pln">f </span><span class="pun">=</span><span class="pln"> d </span><span class="pun">+</span><span class="pln"> </span><span class="lit">3</span></li><li class="L6"><span class="pln">b </span><span class="pun">=</span><span class="pln"> e </span><span class="pun">+</span><span class="pln"> </span><span class="lit">4</span></li><li class="L7"><span class="pln">c </span><span class="pun">=</span><span class="pln"> b </span><span class="pun">+</span><span class="pln"> e</span></li><li class="L8"><span class="pln">f </span><span class="pun">=</span><span class="pln"> b </span><span class="pun">+</span><span class="pln"> f</span></li><li class="L9"><span class="pln">b </span><span class="pun">=</span><span class="pln"> c </span><span class="pun">+</span><span class="pln"> f</span></li><li class="L0"><span class="kwd">return</span><span class="pln"> b </span><span class="pun">+</span><span class="pln"> </span><span class="lit">5</span></li></ol></pre> <p><br/>The following fragment of the above procedure uses four temporaries \\( \\verb|a|, \\verb|b|, \\verb|c|, \\verb|d| \\). </p> <pre class="prettyprint linenums lang-text prettyprinted" data-pbcklang="text" data-pbcktabsize="4" style=""><ol class="linenums"><li class="L0"><span class="pln">b </span><span class="pun">=</span><span class="pln"> </span><span class="lit">2</span></li><li class="L1"><span class="pln">c </span><span class="pun">=</span><span class="pln"> a </span><span class="pun">+</span><span class="pln"> b</span></li><li class="L2"><span class="pln">d </span><span class="pun">=</span><span class="pln"> a </span><span class="pun">+</span><span class="pln"> c</span></li></ol></pre> <p><br/>Assume that we have done register allocation for the entire procedure that contains this program fragment and that we have assigned \\( \\mathrm{a} \\) to register \\( \\mathrm{r1}, \\mathrm{~b} \\) to register \\( \\mathrm{r2}, \\mathrm{c} \\) to a memory location that we denote by \\( \\mathrm{c} \\) and \\( \\mathrm{d} \\) to a memory location that we denote by \\( \\mathrm{d} \\). Assume also that we have a spare register \\( \\mathrm{v0} \\).<br/><br/>For a load/store architecture, in which only load and store instructions can have memory operands and arithmetic instructions can have only register or immediate operands, what is a correct code for the above program fragment? </p>`,
      image: "",
      options: [
        `\\( \\begin{aligned} &amp; \\text { move r2 }:=2 \\\\ &amp; \\text { move v0 }:=\\mathrm{r} 1+\\mathrm{r} 2 \\\\ &amp; \\text { store c }:=\\mathrm{v} 0 \\\\ &amp; \\text { move v0 }:=\\mathrm{r} 1+\\mathrm{r} 2 \\\\ &amp; \\text { store d }:=\\mathrm{v} 0 \\end{aligned} \\) <br/><br/>`,
        `\\( \\begin{aligned} &amp;\\text{move } \\mathrm{r}2 := 2 \\\\ &amp;\\text{move } \\mathrm{v}0 := \\mathrm{r}1 + \\mathrm{r}2 \\\\ &amp;\\text{store } \\mathrm{c} := \\mathrm{v}0 \\\\ &amp;\\text{move } \\mathrm{v}0 := \\mathrm{r}1 + \\mathrm{v}0 \\\\ &amp;\\text{store } \\mathrm{d} := \\mathrm{v}0 \\end{aligned} \\) <br/><br/>`,
        `\\( \\begin{aligned} &amp;\\text{move } \\mathrm{r}2 := 2 \\\\ &amp;\\text{move } \\mathrm{v}0 := \\mathrm{r}1 + \\mathrm{r}2 \\\\ &amp;\\text{store } \\mathrm{c} := \\mathrm{r}1 \\\\ &amp;\\text{move } \\mathrm{v}0 := \\mathrm{r}1 + \\mathrm{v}0 \\\\ &amp;\\text{store } \\mathrm{d} := \\mathrm{v}0 \\end{aligned} \\) <br/><br/>`,
        `\\( \\begin{aligned} &amp;\\text{move } \\mathrm{r}2 := 2 \\\\ &amp;\\text{move } \\mathrm{v}0 := \\mathrm{r}1 + \\mathrm{r}2 \\\\ &amp;\\text{store } \\mathrm{c} := \\mathrm{v}0 \\\\ &amp;\\text{move } \\mathrm{v}0 := \\mathrm{r}1 + \\mathrm{v}0 \\\\ &amp;\\text{store } \\mathrm{d} := \\mathrm{r}2 \\end{aligned} \\)`,
      ],
      answer: "B",
      solution: ``
    },
    {
      marks: 2,
      neg: 0.67,
      type: "MCQ",
      text: `<p>Consider the grammar:<br/><br/> \\( A::=y B \\mid x y B \\)<br/><br/> \\( B::=x y \\mid x A \\)<br/><br/>where \\( \\{A, B\\} \\) is the set of non-terminal symbols, \\( A \\) is the start symbol, \\( \\{x, y\\} \\) is the set of terminal symbols, and \\( \\epsilon \\) denotes the empty string.<br/><br/>Which grammar generates the same language as the above grammar? </p>`,
      image: "",
      options: [
        `\\( \\begin{aligned} A &amp;::= y\\,B \\mid x\\,y\\,B \\\\ B &amp;::= x\\,C \\\\ C &amp;::= y\\,D\\mid x\\,y\\,B \\\\ D &amp;::= \\epsilon \\mid B \\\\  \\end{aligned} \\) <br/><br/>`,
        `\\( \\begin{aligned} &amp; A::=y B \\mid x y B \\\\ &amp; B::=x y \\mid x y B \\mid x x A \\end{aligned} \\) <br/><br/>`,
        `\\( \\begin{aligned} &amp; A::=y x y C \\mid x y C \\\\ &amp; B::=x C \\\\ &amp; C::=y D \\mid x y D \\\\ &amp; D::=\\epsilon \\mid B \\end{aligned} \\) <br/><br/>`,
        `None of the other cases.`,
      ],
      answer: "A",
      solution: ``
    },
  ]
});
